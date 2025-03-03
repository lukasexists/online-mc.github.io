"use strict";
var main;(function(){
var $rt_seed=2463534242;function $rt_nextId(){var x=$rt_seed;x^=x<<13;x^=x>>17;x^=x<<5;$rt_seed=x;return x;}function $rt_compare(a,b){return a>b?1:a<b? -1:a===b?0:1;}function $rt_isInstance(obj,cls){return obj!==null&&!!obj.constructor.$meta&&$rt_isAssignable(obj.constructor,cls);}function $rt_isAssignable(from,to){if(from===to){return true;}if(to.$meta.item!==null){return from.$meta.item!==null&&$rt_isAssignable(from.$meta.item,to.$meta.item);}var supertypes=from.$meta.supertypes;for(var i=0;i<supertypes.length;i
=i+1|0){if($rt_isAssignable(supertypes[i],to)){return true;}}return false;}function $rt_createArray(cls,sz){var data=new Array(sz);var arr=new $rt_array(cls,data);if(sz>0){var i=0;do {data[i]=null;i=i+1|0;}while(i<sz);}return arr;}function $rt_wrapArray(cls,data){return new $rt_array(cls,data);}function $rt_createUnfilledArray(cls,sz){return new $rt_array(cls,new Array(sz));}function $rt_createLongArray(sz){var data=new Array(sz);var arr=new $rt_array($rt_longcls(),data);for(var i=0;i<sz;i=i+1|0){data[i]=Long_ZERO;}return arr;}function $rt_createNumericArray(cls,
nativeArray){return new $rt_array(cls,nativeArray);}function $rt_createCharArray(sz){return $rt_createNumericArray($rt_charcls(),new Uint16Array(sz));}function $rt_createByteArray(sz){return $rt_createNumericArray($rt_bytecls(),new Int8Array(sz));}function $rt_createShortArray(sz){return $rt_createNumericArray($rt_shortcls(),new Int16Array(sz));}function $rt_createIntArray(sz){return $rt_createNumericArray($rt_intcls(),new Int32Array(sz));}function $rt_createBooleanArray(sz){return $rt_createNumericArray($rt_booleancls(),
new Int8Array(sz));}function $rt_createFloatArray(sz){return $rt_createNumericArray($rt_floatcls(),new Float32Array(sz));}function $rt_createDoubleArray(sz){return $rt_createNumericArray($rt_doublecls(),new Float64Array(sz));}function $rt_arraycls(cls){var result=cls.$array;if(result===null){var arraycls={};var name="["+cls.$meta.binaryName;arraycls.$meta={item:cls,supertypes:[$rt_objcls()],primitive:false,superclass:$rt_objcls(),name:name,binaryName:name,enum:false};arraycls.classObject=null;arraycls.$array
=null;result=arraycls;cls.$array=arraycls;}return result;}function $rt_createcls(){return {$array:null,classObject:null,$meta:{supertypes:[],superclass:null}};}function $rt_createPrimitiveCls(name,binaryName){var cls=$rt_createcls();cls.$meta.primitive=true;cls.$meta.name=name;cls.$meta.binaryName=binaryName;cls.$meta.enum=false;cls.$meta.item=null;return cls;}var $rt_booleanclsCache=null;function $rt_booleancls(){if($rt_booleanclsCache===null){$rt_booleanclsCache=$rt_createPrimitiveCls("boolean","Z");}return $rt_booleanclsCache;}var $rt_charclsCache
=null;function $rt_charcls(){if($rt_charclsCache===null){$rt_charclsCache=$rt_createPrimitiveCls("char","C");}return $rt_charclsCache;}var $rt_byteclsCache=null;function $rt_bytecls(){if($rt_byteclsCache===null){$rt_byteclsCache=$rt_createPrimitiveCls("byte","B");}return $rt_byteclsCache;}var $rt_shortclsCache=null;function $rt_shortcls(){if($rt_shortclsCache===null){$rt_shortclsCache=$rt_createPrimitiveCls("short","S");}return $rt_shortclsCache;}var $rt_intclsCache=null;function $rt_intcls(){if($rt_intclsCache
===null){$rt_intclsCache=$rt_createPrimitiveCls("int","I");}return $rt_intclsCache;}var $rt_longclsCache=null;function $rt_longcls(){if($rt_longclsCache===null){$rt_longclsCache=$rt_createPrimitiveCls("long","J");}return $rt_longclsCache;}var $rt_floatclsCache=null;function $rt_floatcls(){if($rt_floatclsCache===null){$rt_floatclsCache=$rt_createPrimitiveCls("float","F");}return $rt_floatclsCache;}var $rt_doubleclsCache=null;function $rt_doublecls(){if($rt_doubleclsCache===null){$rt_doubleclsCache=$rt_createPrimitiveCls("double",
"D");}return $rt_doubleclsCache;}var $rt_voidclsCache=null;function $rt_voidcls(){if($rt_voidclsCache===null){$rt_voidclsCache=$rt_createPrimitiveCls("void","V");}return $rt_voidclsCache;}function $rt_throw(ex){throw $rt_exception(ex);}function $rt_exception(ex){var err=ex.$jsException;if(!err){err=new Error("Java exception thrown");if(typeof Error.captureStackTrace==="function"){Error.captureStackTrace(err);}err.$javaException=ex;ex.$jsException=err;$rt_fillStack(err,ex);}return err;}function $rt_fillStack(err,
ex){if(typeof $rt_decodeStack==="function"&&err.stack){var stack=$rt_decodeStack(err.stack);var javaStack=$rt_createArray($rt_objcls(),stack.length);var elem;var noStack=false;for(var i=0;i<stack.length;++i){var element=stack[i];elem=$rt_createStackElement($rt_str(element.className),$rt_str(element.methodName),$rt_str(element.fileName),element.lineNumber);if(elem==null){noStack=true;break;}javaStack.data[i]=elem;}if(!noStack){$rt_setStack(ex,javaStack);}}}function $rt_createMultiArray(cls,dimensions){var first
=0;for(var i=dimensions.length -1;i>=0;i=i -1|0){if(dimensions[i]===0){first=i;break;}}if(first>0){for(i=0;i<first;i=i+1|0){cls=$rt_arraycls(cls);}if(first===dimensions.length -1){return $rt_createArray(cls,dimensions[first]);}}var arrays=new Array($rt_primitiveArrayCount(dimensions,first));var firstDim=dimensions[first]|0;for(i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createArray(cls,firstDim);}return $rt_createMultiArrayImpl(cls,arrays,dimensions,first);}function $rt_createByteMultiArray(dimensions){var arrays
=new Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_bytecls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createByteArray(firstDim);}return $rt_createMultiArrayImpl($rt_bytecls(),arrays,dimensions);}function $rt_createCharMultiArray(dimensions){var arrays=new Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_charcls(),dimensions);}var firstDim=dimensions[0]|0;for
(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createCharArray(firstDim);}return $rt_createMultiArrayImpl($rt_charcls(),arrays,dimensions,0);}function $rt_createBooleanMultiArray(dimensions){var arrays=new Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_booleancls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createBooleanArray(firstDim);}return $rt_createMultiArrayImpl($rt_booleancls(),arrays,dimensions,0);}function $rt_createShortMultiArray(dimensions)
{var arrays=new Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_shortcls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createShortArray(firstDim);}return $rt_createMultiArrayImpl($rt_shortcls(),arrays,dimensions,0);}function $rt_createIntMultiArray(dimensions){var arrays=new Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_intcls(),dimensions);}var firstDim=dimensions[0]
|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createIntArray(firstDim);}return $rt_createMultiArrayImpl($rt_intcls(),arrays,dimensions,0);}function $rt_createLongMultiArray(dimensions){var arrays=new Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_longcls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createLongArray(firstDim);}return $rt_createMultiArrayImpl($rt_longcls(),arrays,dimensions,0);}function $rt_createFloatMultiArray(dimensions)
{var arrays=new Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_floatcls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createFloatArray(firstDim);}return $rt_createMultiArrayImpl($rt_floatcls(),arrays,dimensions,0);}function $rt_createDoubleMultiArray(dimensions){var arrays=new Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_doublecls(),dimensions);}var firstDim
=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createDoubleArray(firstDim);}return $rt_createMultiArrayImpl($rt_doublecls(),arrays,dimensions,0);}function $rt_primitiveArrayCount(dimensions,start){var val=dimensions[start+1]|0;for(var i=start+2;i<dimensions.length;i=i+1|0){val=val*(dimensions[i]|0)|0;if(val===0){break;}}return val;}function $rt_createMultiArrayImpl(cls,arrays,dimensions,start){var limit=arrays.length;for(var i=start+1|0;i<dimensions.length;i=i+1|0){cls=$rt_arraycls(cls);var dim
=dimensions[i];var index=0;var packedIndex=0;while(index<limit){var arr=$rt_createUnfilledArray(cls,dim);for(var j=0;j<dim;j=j+1|0){arr.data[j]=arrays[index];index=index+1|0;}arrays[packedIndex]=arr;packedIndex=packedIndex+1|0;}limit=packedIndex;}return arrays[0];}function $rt_assertNotNaN(value){if(typeof value==='number'&&isNaN(value)){throw "NaN";}return value;}var $rt_stdoutBuffer="";var $rt_putStdout=typeof $rt_putStdoutCustom==="function"?$rt_putStdoutCustom:function(ch){if(ch===0xA){if(console){console.info($rt_stdoutBuffer);}$rt_stdoutBuffer
="";}else {$rt_stdoutBuffer+=String.fromCharCode(ch);}};var $rt_stderrBuffer="";var $rt_putStderr=typeof $rt_putStderrCustom==="function"?$rt_putStderrCustom:function(ch){if(ch===0xA){if(console){console.error($rt_stderrBuffer);}$rt_stderrBuffer="";}else {$rt_stderrBuffer+=String.fromCharCode(ch);}};var $rt_packageData=null;function $rt_packages(data){var i=0;var packages=new Array(data.length);for(var j=0;j<data.length;++j){var prefixIndex=data[i++];var prefix=prefixIndex>=0?packages[prefixIndex]:"";packages[j]
=prefix+data[i++]+".";}$rt_packageData=packages;}function $rt_metadata(data){var packages=$rt_packageData;var i=0;while(i<data.length){var cls=data[i++];cls.$meta={};var m=cls.$meta;var className=data[i++];m.name=className!==0?className:null;if(m.name!==null){var packageIndex=data[i++];if(packageIndex>=0){m.name=packages[packageIndex]+m.name;}}m.binaryName="L"+m.name+";";var superclass=data[i++];m.superclass=superclass!==0?superclass:null;m.supertypes=data[i++];if(m.superclass){m.supertypes.push(m.superclass);cls.prototype
=Object.create(m.superclass.prototype);}else {cls.prototype={};}var flags=data[i++];m.enum=(flags&8)!==0;m.flags=flags;m.primitive=false;m.item=null;cls.prototype.constructor=cls;cls.classObject=null;m.accessLevel=data[i++];var clinit=data[i++];cls.$clinit=clinit!==0?clinit:function(){};var virtualMethods=data[i++];if(virtualMethods!==0){for(var j=0;j<virtualMethods.length;j+=2){var name=virtualMethods[j];var func=virtualMethods[j+1];if(typeof name==='string'){name=[name];}for(var k=0;k<name.length;++k){cls.prototype[name[k]]
=func;}}}cls.$array=null;}}function $rt_threadStarter(f){return function(){var args=Array.prototype.slice.apply(arguments);$rt_startThread(function(){f.apply(this,args);});};}function $rt_mainStarter(f){return function(args,callback){if(!args){args=[];}var javaArgs=$rt_createArray($rt_objcls(),args.length);for(var i=0;i<args.length;++i){javaArgs.data[i]=$rt_str(args[i]);}$rt_startThread(function(){f.call(null,javaArgs);},callback);};}var $rt_stringPool_instance;function $rt_stringPool(strings){$rt_stringPool_instance
=new Array(strings.length);for(var i=0;i<strings.length;++i){$rt_stringPool_instance[i]=$rt_intern($rt_str(strings[i]));}}function $rt_s(index){return $rt_stringPool_instance[index];}function $rt_eraseClinit(target){return target.$clinit=function(){};}var $rt_numberConversionView=new DataView(new ArrayBuffer(8));function $rt_doubleToLongBits(n){$rt_numberConversionView.setFloat64(0,n,true);return new Long($rt_numberConversionView.getInt32(0,true),$rt_numberConversionView.getInt32(4,true));}function $rt_longBitsToDouble(n)
{$rt_numberConversionView.setInt32(0,n.lo,true);$rt_numberConversionView.setInt32(4,n.hi,true);return $rt_numberConversionView.getFloat64(0,true);}function $rt_floatToIntBits(n){$rt_numberConversionView.setFloat32(0,n);return $rt_numberConversionView.getInt32(0);}function $rt_intBitsToFloat(n){$rt_numberConversionView.setInt32(0,n);return $rt_numberConversionView.getFloat32(0);}function $rt_javaException(e){return e instanceof Error&&typeof e.$javaException==='object'?e.$javaException:null;}function $rt_jsException(e)
{return typeof e.$jsException==='object'?e.$jsException:null;}function $rt_wrapException(err){var ex=err.$javaException;if(!ex){ex=$rt_createException($rt_str("(JavaScript) "+err.toString()));err.$javaException=ex;ex.$jsException=err;$rt_fillStack(err,ex);}return ex;}function $dbg_class(obj){var cls=obj.constructor;var arrayDegree=0;while(cls.$meta&&cls.$meta.item){++arrayDegree;cls=cls.$meta.item;}var clsName="";if(cls===$rt_booleancls()){clsName="boolean";}else if(cls===$rt_bytecls()){clsName="byte";}else if
(cls===$rt_shortcls()){clsName="short";}else if(cls===$rt_charcls()){clsName="char";}else if(cls===$rt_intcls()){clsName="int";}else if(cls===$rt_longcls()){clsName="long";}else if(cls===$rt_floatcls()){clsName="float";}else if(cls===$rt_doublecls()){clsName="double";}else {clsName=cls.$meta?cls.$meta.name||"a/"+cls.name:"@"+cls.name;}while(arrayDegree-->0){clsName+="[]";}return clsName;}function Long(lo,hi){this.lo=lo|0;this.hi=hi|0;}Long.prototype.__teavm_class__=function(){return "long";};Long.prototype.toString
=function(){var result=[];var n=this;var positive=Long_isPositive(n);if(!positive){n=Long_neg(n);}var radix=new Long(10,0);do {var divRem=Long_divRem(n,radix);result.push(String.fromCharCode(48+divRem[1].lo));n=divRem[0];}while(n.lo!==0||n.hi!==0);result=(result.reverse()).join('');return positive?result:"-"+result;};Long.prototype.valueOf=function(){return Long_toNumber(this);};var Long_ZERO=new Long(0,0);var Long_MAX_NORMAL=1<<18;function Long_fromInt(val){return val>=0?new Long(val,0):new Long(val, -1);}function Long_fromNumber(val)
{if(val>=0){return new Long(val|0,val/0x100000000|0);}else {return Long_neg(new Long( -val|0, -val/0x100000000|0));}}function Long_toNumber(val){var lo=val.lo;var hi=val.hi;if(lo<0){lo+=0x100000000;}return 0x100000000*hi+lo;}var $rt_imul=Math.imul||function(a,b){var ah=a>>>16&0xFFFF;var al=a&0xFFFF;var bh=b>>>16&0xFFFF;var bl=b&0xFFFF;return al*bl+(ah*bl+al*bh<<16>>>0)|0;};var $rt_udiv=function(a,b){if(a<0){a+=0x100000000;}if(b<0){b+=0x100000000;}return a/b|0;};var $rt_umod=function(a,b){if(a<0){a+=0x100000000;}if
(b<0){b+=0x100000000;}return a%b|0;};function $rt_setCloneMethod(target, f){target.oX=f;}
function $rt_cls(cls){return LX(cls);}
function $rt_str(str) {if (str === null) {return null;}var characters = $rt_createCharArray(str.length);var charsBuffer = characters.data;for (var i = 0; i < str.length; i = (i + 1) | 0) {charsBuffer[i] = str.charCodeAt(i) & 0xFFFF;}return Tf(characters);}
function $rt_ustr(str) {if (str === null) {return null;}var data = str.bw.data;var result = "";for (var i = 0; i < data.length; i = (i + 1) | 0) {result += String.fromCharCode(data[i]);}return result;}
function $rt_objcls() { return D; }
function $rt_nullCheck(val) {if (val === null) {$rt_throw(BcV());}return val;}
function $rt_intern(str) {return str;}function $rt_getThread(){return ASL();}
function $rt_setThread(t){return Fv(t);}
function $rt_createException(message){return Z3(message);}
function $rt_createStackElement(className,methodName,fileName,lineNumber){return null;}
function $rt_setStack(e,stack){}
var A=Object.create(null);
var M=$rt_throw;var R=$rt_compare;var BcW=$rt_nullCheck;var F=$rt_cls;var J=$rt_createArray;var Sq=$rt_isInstance;var C4=$rt_nativeThread;var C=$rt_suspending;var Fd=$rt_resuming;var E$=$rt_invalidPointer;var B=$rt_s;var Br=$rt_eraseClinit;var Bj=$rt_imul;var Y=$rt_wrapException;
function D(){this.co=null;this.$id$=0;}
function BcX(){var a=new D();WL(a);return a;}
function BaW(b){var c;if(b.co===null)VC(b);if(b.co.ei===null)b.co.ei=BcY;else if(b.co.ei!==BcY){c=new D3;Bo(c,B(0));M(c);}b=b.co;b.fi=b.fi+1|0;}
function BcM(b){var c,d;if(!HK(b)&&b.co.ei===BcY){c=b.co;d=c.fi-1|0;c.fi=d;if(!d)b.co.ei=null;HK(b);return;}b=new Km;P(b);M(b);}
function AD4(b){if(b.co===null)VC(b);if(b.co.ei===null)b.co.ei=BcY;if(b.co.ei!==BcY)AXo(b,1);else{b=b.co;b.fi=b.fi+1|0;}}
function VC(b){b.co=Baq();}
function AXo(b,c){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.Gq=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.IY=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=BaA(callback);return thread.suspend(function(){try{Bb8(b,c,callback);}catch($e){callback.IY($rt_exception($e));}});}
function Bb8(b,c,d){var e,f,g;e=BcY;if(b.co===null){VC(b);Fv(e);b=b.co;b.fi=b.fi+c|0;CM(d,null);return;}if(b.co.ei===null){b.co.ei=e;Fv(e);b=b.co;b.fi=b.fi+c|0;CM(d,null);return;}f=b.co;if(f.hi===null)f.hi=AXq();f=f.hi;g=new Rd;g.zH=e;g.zI=b;g.zF=c;g.zG=d;d=g;f.push(d);}
function NV(b){var c;if(!HK(b)&&b.co.ei===BcY){c=b.co;c.fi=c.fi-1|0;if(c.fi<=0){c.ei=null;if(c.hi!==null&&!JM(c.hi)){c=new SV;c.Dh=b;Q3(c);}else HK(b);}return;}b=new Km;P(b);M(b);}
function HK(a){var b;b=a.co;if(b===null)return 1;a:{if(b.ei===null&&!(b.hi!==null&&!JM(b.hi))){if(b.rk===null)break a;if(JM(b.rk))break a;}return 0;}a.co=null;return 1;}
function WL(a){return;}
function Dl(a){return LX(a.constructor);}
function A4U(a){return MM(a);}
function Q7(a,b){return a!==b?0:1;}
function AUo(a){var b,c,d,e,f,g,h,i;b=new U;W(b);b=I(I(b,IF(Dl(a))),B(1));c=MM(a);if(!c)d=B(2);else{e=(((32-TD(c)|0)+4|0)-1|0)/4|0;f=$rt_createCharArray(e);g=f.data;e=(e-1|0)*4|0;h=0;while(e>=0){i=h+1|0;g[h]=I5(c>>>e&15,16);e=e-4|0;h=i;}d=Tf(f);}return V(I(b,d));}
function MM(a){var b,c;b=a;if(!b.$id$){c=$rt_nextId();b.$id$=c;}return a.$id$;}
function AXN(a){var b,c,d;if(!Sq(a,ER)&&a.constructor.$meta.item===null){b=new Sg;P(b);M(b);}b=AS5(a);c=b;d=$rt_nextId();c.$id$=d;return b;}
function Xi(a){var b,c;if(!(a.co!==null&&a.co.ei===BcY?1:0)){b=new Km;P(b);M(b);}b=a.co.rk;if(b===null)return;while(!JM(b)){c=AOV(b);if(!c.a0n())Q3(c);}a.co.rk=null;}
function JB(){D.call(this);}
var BcZ=null;var Bc0=null;var Bc1=null;function Bc2(){var a=new JB();AQ1(a);return a;}
function AQ1(a){return;}
function AQ6(b){var c,d,e,f,g,h,i,j,k,$$je,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:AKe();AGm();AQm();Z1();AP5();AIU();ACP();ASp();AC9();AKR();ARM();Y9();AHF();Zf();AHk();ALX();AFr();AFt();AOK();AQe();AH4();AOr();ABJ();AFC();AEu();AHT();XJ();ADF();AAb();AL6();AKa();AOS();AG9();ASj();AOe();ALM();AAg();AKv();APc();AEn();AMM();ALc();AMK();AIJ();AF_();AHz();AK5();AAr();Z4();AQa();AJV();AAU();AIl();AOJ();AL1();ABn();ANb();AHO();AFw();c
=window.minecraftOpts;if(c===null)d=null;else{d=J(B4,c.length);b=d.data;e=0;f=b.length;while(e<f){b[e]=$rt_str(c[e]);e=e+1|0;}}a:{try{b=d.data;c=window.document;g=b[0];c=c.getElementById($rt_ustr(g));BcZ=c;g=b[1];$p=1;continue _;}catch($$e){$$je=Y($$e);if($$je instanceof BD){}else if($$je instanceof CT){c=$$je;break a;}else{throw $$e;}}return;}g=A86();h=new Lt;Wi(h,g);h.yi=0;h.mB=g;OF(c,h);return;case 1:b:{c:{d:{try{AAs(c,g);if(C()){break _;}break d;}catch($$e){$$je=Y($$e);if($$je instanceof BD){}else if($$je instanceof CT)
{c=$$je;break c;}else{throw $$e;}}return;}try{break b;}catch($$e){$$je=Y($$e);if($$je instanceof CT){c=$$je;}else{throw $$e;}}}g=A86();h=new Lt;Wi(h,g);h.yi=0;h.mB=g;OF(c,h);return;}c=new Iq;i=Lq();j=MD();g=new UW;g.DV=0;g.cX=c;g.vZ=(-1);g.v1=(-1);g.v0=(-1);g.ho=0.0;g.mO=0.0;g.ol=0.0;g.nd=0;k=new U3;b=J(FS,4);d=b.data;d[0]=F(I$);d[1]=F(Jp);d[2]=F(J0);d[3]=F(Ko);RL(k,100,F(DP),b);k.Gy=g;g.Bg=k;h=new Jc;b=J(FS,2);d=b.data;d[0]=F(KI);d[1]=F(IE);RL(h,20,F(GB),b);g.BB=h;c.cB=g;g=new SH;g.CX=1.0;g.lI=0.0;g.nF=1.0;g.c8
=20.0;g.sR=B_();g.rU=Long_div(EF(),Long_fromInt(1000000));c.bf=g;c.k1=null;c.bs=0;c.D=null;g=new R6;g.n2=B(3);g.l9=B(3);g.kN=B_();g.lL=0;g.fG=c;c.ir=g;c.eV=BbJ(c);c.bN=0;c.c$=0;c.Hi=null;c.F0=0;c.h7=0;c.Gv=Xv(0.0);c.ce=null;c.C_=Baj();c.BH=BaS();c.gR=1;c.lA=B(3);c.gS=Long_fromInt(-1);c.bp=0;c.cn=0;c.cU=0;c.dB=B_();g=new V2;TW(g,B(4));g.yo=c;g.Eg=1;Tq(g);c.cq=i;c.bF=j;Bc3=c;Bc0=c;c=Bc0;g=new Mk;Bbc();g.ok=B(5);g.F4=B(6);c.k1=g;Bc0.k1.GA=B(7);Bc1=A_0(Bc0,B(8));Tq(Bc1);return;default:E$();}}C4().s(b,c,d,e,f,g,
h,i,j,k,$p);}
function AKe(){BcZ=null;Bc0=null;Bc1=null;}
function MS(){}
function FS(){var a=this;D.call(a);a.ul=null;a.fW=null;a.mk=null;}
var Bc4=0;function LX(b){var c,d;if(b===null)return null;c=b.classObject;if(c===null){c=new FS;c.fW=b;d=c;b.classObject=d;}return c;}
function A33(a){return a.fW;}
function UD(a,b){var c;b=b;c=a.fW;return b!==null&&!(typeof b.constructor.$meta==='undefined'?1:0)&&V1(b.constructor,c)?1:0;}
function P$(a,b){return V1(b.fW,a.fW);}
function IF(a){if(a.ul===null)a.ul=$rt_str(a.fW.$meta.name);return a.ul;}
function F1(a){return a.fW.$meta.primitive?1:0;}
function AG1(a){return AR4(a.fW)===null?0:1;}
function Kz(a){return LX(AR4(a.fW));}
function A6U(){I$.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[F0],returnType:$rt_voidcls(),callable:null},{name:"onLivingUpdate",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"getDropItemId",modifiers:0,accessLevel:2,parameterTypes:[],returnType:$rt_intcls(),callable:null}];Jp.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[F0],returnType:$rt_voidcls(),callable:null},{name:"onLivingUpdate",modifiers:0,accessLevel
:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"attackEntity",modifiers:0,accessLevel:2,parameterTypes:[C6,$rt_floatcls()],returnType:$rt_voidcls(),callable:null},{name:"writeEntityToNBT",modifiers:0,accessLevel:3,parameterTypes:[APQ],returnType:$rt_voidcls(),callable:null},{name:"readEntityFromNBT",modifiers:0,accessLevel:3,parameterTypes:[APQ],returnType:$rt_voidcls(),callable:null},{name:"getDropItemId",modifiers:0,accessLevel:2,parameterTypes:[],returnType:$rt_intcls(),callable:null}];J0.$meta.methods
=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[F0],returnType:$rt_voidcls(),callable:null},{name:"writeEntityToNBT",modifiers:0,accessLevel:3,parameterTypes:[APQ],returnType:$rt_voidcls(),callable:null},{name:"readEntityFromNBT",modifiers:0,accessLevel:3,parameterTypes:[APQ],returnType:$rt_voidcls(),callable:null},{name:"updatePlayerActionState",modifiers:0,accessLevel:2,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"attackEntity",modifiers:0,accessLevel:2,parameterTypes:[C6,$rt_floatcls()],returnType
:$rt_voidcls(),callable:null},{name:"setCreeperFlashTime",modifiers:0,accessLevel:3,parameterTypes:[$rt_floatcls()],returnType:$rt_floatcls(),callable:null},{name:"getDropItemId",modifiers:0,accessLevel:2,parameterTypes:[],returnType:$rt_intcls(),callable:null}];Ko.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[F0],returnType:$rt_voidcls(),callable:null},{name:"findPlayerToAttack",modifiers:0,accessLevel:2,parameterTypes:[],returnType:C6,callable:null},{name:"attackEntity",modifiers
:0,accessLevel:2,parameterTypes:[C6,$rt_floatcls()],returnType:$rt_voidcls(),callable:null},{name:"writeEntityToNBT",modifiers:0,accessLevel:3,parameterTypes:[APQ],returnType:$rt_voidcls(),callable:null},{name:"readEntityFromNBT",modifiers:0,accessLevel:3,parameterTypes:[APQ],returnType:$rt_voidcls(),callable:null},{name:"getDropItemId",modifiers:0,accessLevel:2,parameterTypes:[],returnType:$rt_intcls(),callable:null}];KI.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[F0],returnType
:$rt_voidcls(),callable:null},{name:"attackEntityFrom",modifiers:0,accessLevel:3,parameterTypes:[C6,$rt_intcls()],returnType:$rt_booleancls(),callable:null},{name:"writeEntityToNBT",modifiers:0,accessLevel:3,parameterTypes:[APQ],returnType:$rt_voidcls(),callable:null},{name:"readEntityFromNBT",modifiers:0,accessLevel:3,parameterTypes:[APQ],returnType:$rt_voidcls(),callable:null},{name:"getLivingSound",modifiers:0,accessLevel:2,parameterTypes:[],returnType:B4,callable:null},{name:"getHurtSound",modifiers:0,accessLevel
:2,parameterTypes:[],returnType:B4,callable:null},{name:"getDeathSound",modifiers:0,accessLevel:2,parameterTypes:[],returnType:B4,callable:null}];IE.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[F0],returnType:$rt_voidcls(),callable:null},{name:"writeEntityToNBT",modifiers:0,accessLevel:3,parameterTypes:[APQ],returnType:$rt_voidcls(),callable:null},{name:"readEntityFromNBT",modifiers:0,accessLevel:3,parameterTypes:[APQ],returnType:$rt_voidcls(),callable:null},{name:"getLivingSound",modifiers
:0,accessLevel:2,parameterTypes:[],returnType:B4,callable:null},{name:"getHurtSound",modifiers:0,accessLevel:2,parameterTypes:[],returnType:B4,callable:null},{name:"getDeathSound",modifiers:0,accessLevel:2,parameterTypes:[],returnType:B4,callable:null},{name:"interact",modifiers:0,accessLevel:3,parameterTypes:[Jx],returnType:$rt_booleancls(),callable:null},{name:"getDropItemId",modifiers:0,accessLevel:2,parameterTypes:[],returnType:$rt_intcls(),callable:null}];Jk.$meta.methods=[{name:"<init>",modifiers:0,accessLevel
:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"writeToNBT",modifiers:0,accessLevel:3,parameterTypes:[APQ],returnType:$rt_voidcls(),callable:null},{name:"readFromNBT",modifiers:0,accessLevel:3,parameterTypes:[APQ],returnType:$rt_voidcls(),callable:null}];Tk.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"getSizeInventory",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_intcls(),callable:null},{name:"getStackInSlot",modifiers
:0,accessLevel:3,parameterTypes:[$rt_intcls()],returnType:Cd,callable:null},{name:"decrStackSize",modifiers:0,accessLevel:3,parameterTypes:[$rt_intcls(),$rt_intcls()],returnType:Cd,callable:null},{name:"setInventorySlotContents",modifiers:0,accessLevel:3,parameterTypes:[$rt_intcls(),Cd],returnType:$rt_voidcls(),callable:null},{name:"getInvName",modifiers:0,accessLevel:3,parameterTypes:[],returnType:B4,callable:null},{name:"readFromNBT",modifiers:4,accessLevel:3,parameterTypes:[APQ],returnType:$rt_voidcls(),callable
:null},{name:"writeToNBT",modifiers:4,accessLevel:3,parameterTypes:[APQ],returnType:$rt_voidcls(),callable:null},{name:"getInventoryStackLimit",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_intcls(),callable:null}];WZ.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"getSizeInventory",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_intcls(),callable:null},{name:"getStackInSlot",modifiers:0,accessLevel:3,parameterTypes
:[$rt_intcls()],returnType:Cd,callable:null},{name:"decrStackSize",modifiers:0,accessLevel:3,parameterTypes:[$rt_intcls(),$rt_intcls()],returnType:Cd,callable:null},{name:"setInventorySlotContents",modifiers:0,accessLevel:3,parameterTypes:[$rt_intcls(),Cd],returnType:$rt_voidcls(),callable:null},{name:"getInvName",modifiers:0,accessLevel:3,parameterTypes:[],returnType:B4,callable:null},{name:"readFromNBT",modifiers:4,accessLevel:3,parameterTypes:[APQ],returnType:$rt_voidcls(),callable:null},{name:"writeToNBT",modifiers
:4,accessLevel:3,parameterTypes:[APQ],returnType:$rt_voidcls(),callable:null},{name:"getInventoryStackLimit",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_intcls(),callable:null},{name:"getCookProgressScaled",modifiers:0,accessLevel:3,parameterTypes:[$rt_intcls()],returnType:$rt_intcls(),callable:null},{name:"getBurnTimeRemainingScaled",modifiers:0,accessLevel:3,parameterTypes:[$rt_intcls()],returnType:$rt_intcls(),callable:null},{name:"isBurning",modifiers:0,accessLevel:3,parameterTypes:[],returnType
:$rt_booleancls(),callable:null},{name:"updateEntity",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"canSmelt",modifiers:0,accessLevel:1,parameterTypes:[],returnType:$rt_booleancls(),callable:null},{name:"smeltItem",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"getSmeltingResult",modifiers:0,accessLevel:1,parameterTypes:[$rt_intcls()],returnType:$rt_intcls(),callable:null},{name:"getItemBurnTime",modifiers:0,accessLevel
:1,parameterTypes:[Cd],returnType:$rt_intcls(),callable:null},{name:"onInventoryChanged",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null}];Nz.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"anyPlayerInRange",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_booleancls(),callable:null},{name:"updateEntity",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name
:"updateDelay",modifiers:0,accessLevel:1,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"readFromNBT",modifiers:0,accessLevel:3,parameterTypes:[APQ],returnType:$rt_voidcls(),callable:null},{name:"writeToNBT",modifiers:0,accessLevel:3,parameterTypes:[APQ],returnType:$rt_voidcls(),callable:null}];DP.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[F0],returnType:$rt_voidcls(),callable:null},{name:"onLivingUpdate",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable
:null},{name:"onUpdate",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"findPlayerToAttack",modifiers:0,accessLevel:2,parameterTypes:[],returnType:C6,callable:null},{name:"attackEntityFrom",modifiers:0,accessLevel:3,parameterTypes:[C6,$rt_intcls()],returnType:$rt_booleancls(),callable:null},{name:"attackEntity",modifiers:0,accessLevel:2,parameterTypes:[C6,$rt_floatcls()],returnType:$rt_voidcls(),callable:null},{name:"getBlockPathWeight",modifiers:0,accessLevel:2,parameterTypes
:[$rt_intcls(),$rt_intcls(),$rt_intcls()],returnType:$rt_floatcls(),callable:null},{name:"writeEntityToNBT",modifiers:0,accessLevel:3,parameterTypes:[APQ],returnType:$rt_voidcls(),callable:null},{name:"readEntityFromNBT",modifiers:0,accessLevel:3,parameterTypes:[APQ],returnType:$rt_voidcls(),callable:null},{name:"getCanSpawnHere",modifiers:0,accessLevel:3,parameterTypes:[$rt_doublecls(),$rt_doublecls(),$rt_doublecls()],returnType:$rt_booleancls(),callable:null}];EO.$meta.methods=[{name:"<init>",modifiers:0,accessLevel
:3,parameterTypes:[F0],returnType:$rt_voidcls(),callable:null},{name:"getTexture",modifiers:0,accessLevel:3,parameterTypes:[],returnType:B4,callable:null},{name:"canBeCollidedWith",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_booleancls(),callable:null},{name:"canBePushed",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_booleancls(),callable:null},{name:"getEyeHeight",modifiers:0,accessLevel:2,parameterTypes:[],returnType:$rt_floatcls(),callable:null},{name:"onEntityUpdate",modifiers
:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"spawnExplosionParticle",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"updateRidden",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"onUpdate",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"setSize",modifiers:0,accessLevel:2,parameterTypes:[$rt_floatcls(),$rt_floatcls()],returnType:$rt_voidcls(),callable
:null},{name:"heal",modifiers:0,accessLevel:3,parameterTypes:[$rt_intcls()],returnType:$rt_voidcls(),callable:null},{name:"attackEntityFrom",modifiers:0,accessLevel:3,parameterTypes:[C6,$rt_intcls()],returnType:$rt_booleancls(),callable:null},{name:"getLivingSound",modifiers:0,accessLevel:2,parameterTypes:[],returnType:B4,callable:null},{name:"getHurtSound",modifiers:0,accessLevel:2,parameterTypes:[],returnType:B4,callable:null},{name:"getDeathSound",modifiers:0,accessLevel:2,parameterTypes:[],returnType:B4,callable
:null},{name:"knockBack",modifiers:0,accessLevel:3,parameterTypes:[C6,$rt_intcls(),$rt_doublecls(),$rt_doublecls()],returnType:$rt_voidcls(),callable:null},{name:"onDeath",modifiers:0,accessLevel:3,parameterTypes:[C6],returnType:$rt_voidcls(),callable:null},{name:"getDropItemId",modifiers:0,accessLevel:2,parameterTypes:[],returnType:$rt_intcls(),callable:null},{name:"fall",modifiers:0,accessLevel:2,parameterTypes:[$rt_floatcls()],returnType:$rt_voidcls(),callable:null},{name:"moveEntityWithHeading",modifiers
:0,accessLevel:3,parameterTypes:[$rt_floatcls(),$rt_floatcls()],returnType:$rt_voidcls(),callable:null},{name:"isOnLadder",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_booleancls(),callable:null},{name:"writeEntityToNBT",modifiers:0,accessLevel:3,parameterTypes:[APQ],returnType:$rt_voidcls(),callable:null},{name:"readEntityFromNBT",modifiers:0,accessLevel:3,parameterTypes:[APQ],returnType:$rt_voidcls(),callable:null},{name:"isEntityAlive",modifiers:0,accessLevel:3,parameterTypes:[],returnType:
$rt_booleancls(),callable:null},{name:"onLivingUpdate",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"jump",modifiers:0,accessLevel:2,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"updatePlayerActionState",modifiers:0,accessLevel:2,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"onEntityDeath",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"getCanSpawnHere",modifiers:0,accessLevel:3,parameterTypes
:[$rt_doublecls(),$rt_doublecls(),$rt_doublecls()],returnType:$rt_booleancls(),callable:null},{name:"kill",modifiers:0,accessLevel:2,parameterTypes:[],returnType:$rt_voidcls(),callable:null}];K$.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[F0],returnType:$rt_voidcls(),callable:null},{name:"getBlockPathWeight",modifiers:0,accessLevel:2,parameterTypes:[$rt_intcls(),$rt_intcls(),$rt_intcls()],returnType:$rt_floatcls(),callable:null}];II.$meta.methods=[{name:"<init>",modifiers:0,accessLevel
:3,parameterTypes:[F0],returnType:$rt_voidcls(),callable:null},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[F0,$rt_intcls(),$rt_intcls(),$rt_intcls(),$rt_intcls()],returnType:$rt_voidcls(),callable:null},{name:"setDirection",modifiers:0,accessLevel:3,parameterTypes:[$rt_intcls()],returnType:$rt_voidcls(),callable:null},{name:"getArtSize",modifiers:0,accessLevel:1,parameterTypes:[$rt_intcls()],returnType:$rt_floatcls(),callable:null},{name:"onUpdate",modifiers:0,accessLevel:3,parameterTypes:[],returnType
:$rt_voidcls(),callable:null},{name:"onValidSurface",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_booleancls(),callable:null},{name:"canBeCollidedWith",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_booleancls(),callable:null},{name:"attackEntityFrom",modifiers:0,accessLevel:3,parameterTypes:[C6,$rt_intcls()],returnType:$rt_booleancls(),callable:null},{name:"writeEntityToNBT",modifiers:0,accessLevel:3,parameterTypes:[APQ],returnType:$rt_voidcls(),callable:null},{name:"readEntityFromNBT",modifiers
:0,accessLevel:3,parameterTypes:[APQ],returnType:$rt_voidcls(),callable:null}];Jv.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[F0],returnType:$rt_voidcls(),callable:null},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[F0,EO],returnType:$rt_voidcls(),callable:null},{name:"setArrowHeading",modifiers:0,accessLevel:3,parameterTypes:[$rt_doublecls(),$rt_doublecls(),$rt_doublecls(),$rt_floatcls(),$rt_floatcls()],returnType:$rt_voidcls(),callable:null},{name:"onUpdate",modifiers
:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"writeEntityToNBT",modifiers:0,accessLevel:3,parameterTypes:[APQ],returnType:$rt_voidcls(),callable:null},{name:"readEntityFromNBT",modifiers:0,accessLevel:3,parameterTypes:[APQ],returnType:$rt_voidcls(),callable:null},{name:"onCollideWithPlayer",modifiers:0,accessLevel:3,parameterTypes:[Jx],returnType:$rt_voidcls(),callable:null}];E9.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[F0,$rt_doublecls(),$rt_doublecls(),
$rt_doublecls(),Cd],returnType:$rt_voidcls(),callable:null},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[F0],returnType:$rt_voidcls(),callable:null},{name:"onUpdate",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"handleWaterMovement",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_booleancls(),callable:null},{name:"pushOutOfBlocks",modifiers:0,accessLevel:1,parameterTypes:[$rt_doublecls(),$rt_doublecls(),$rt_doublecls()],returnType:$rt_booleancls(),callable
:null},{name:"dealFireDamage",modifiers:0,accessLevel:2,parameterTypes:[$rt_intcls()],returnType:$rt_voidcls(),callable:null},{name:"attackEntityFrom",modifiers:0,accessLevel:3,parameterTypes:[C6,$rt_intcls()],returnType:$rt_booleancls(),callable:null},{name:"writeEntityToNBT",modifiers:0,accessLevel:3,parameterTypes:[APQ],returnType:$rt_voidcls(),callable:null},{name:"readEntityFromNBT",modifiers:0,accessLevel:3,parameterTypes:[APQ],returnType:$rt_voidcls(),callable:null},{name:"onCollideWithPlayer",modifiers
:0,accessLevel:3,parameterTypes:[Jx],returnType:$rt_voidcls(),callable:null}];Mr.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[F0],returnType:$rt_voidcls(),callable:null},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[F0,$rt_floatcls(),$rt_floatcls(),$rt_floatcls()],returnType:$rt_voidcls(),callable:null},{name:"canBeCollidedWith",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_booleancls(),callable:null},{name:"onUpdate",modifiers:0,accessLevel:3,parameterTypes
:[],returnType:$rt_voidcls(),callable:null},{name:"createExplosion",modifiers:0,accessLevel:1,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"writeEntityToNBT",modifiers:0,accessLevel:2,parameterTypes:[APQ],returnType:$rt_voidcls(),callable:null},{name:"readEntityFromNBT",modifiers:0,accessLevel:2,parameterTypes:[APQ],returnType:$rt_voidcls(),callable:null}];JO.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[F0],returnType:$rt_voidcls(),callable:null},{name:"<init>",modifiers
:0,accessLevel:3,parameterTypes:[F0,$rt_floatcls(),$rt_floatcls(),$rt_floatcls(),$rt_intcls()],returnType:$rt_voidcls(),callable:null},{name:"canBeCollidedWith",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_booleancls(),callable:null},{name:"onUpdate",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"writeEntityToNBT",modifiers:0,accessLevel:2,parameterTypes:[APQ],returnType:$rt_voidcls(),callable:null},{name:"readEntityFromNBT",modifiers:0,accessLevel:2,parameterTypes
:[APQ],returnType:$rt_voidcls(),callable:null},{name:"getWorld",modifiers:0,accessLevel:3,parameterTypes:[],returnType:F0,callable:null}];Gh.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[F0],returnType:$rt_voidcls(),callable:null},{name:"getCollisionBox",modifiers:0,accessLevel:3,parameterTypes:[C6],returnType:Ja,callable:null},{name:"getBoundingBox",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Ja,callable:null},{name:"canBePushed",modifiers:0,accessLevel:3,parameterTypes
:[],returnType:$rt_booleancls(),callable:null},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[F0,$rt_doublecls(),$rt_doublecls(),$rt_doublecls()],returnType:$rt_voidcls(),callable:null},{name:"getYOffset",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_doublecls(),callable:null},{name:"attackEntityFrom",modifiers:0,accessLevel:3,parameterTypes:[C6,$rt_intcls()],returnType:$rt_booleancls(),callable:null},{name:"canBeCollidedWith",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_booleancls(),callable
:null},{name:"setEntityDead",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"onUpdate",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"getPosOffset",modifiers:0,accessLevel:3,parameterTypes:[$rt_doublecls(),$rt_doublecls(),$rt_doublecls(),$rt_doublecls()],returnType:Kl,callable:null},{name:"getPos",modifiers:0,accessLevel:3,parameterTypes:[$rt_doublecls(),$rt_doublecls(),$rt_doublecls()],returnType:Kl,callable:null},{name:
"writeEntityToNBT",modifiers:0,accessLevel:2,parameterTypes:[APQ],returnType:$rt_voidcls(),callable:null},{name:"readEntityFromNBT",modifiers:0,accessLevel:2,parameterTypes:[APQ],returnType:$rt_voidcls(),callable:null},{name:"applyEntityCollision",modifiers:0,accessLevel:3,parameterTypes:[C6],returnType:$rt_voidcls(),callable:null},{name:"getSizeInventory",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_intcls(),callable:null},{name:"getStackInSlot",modifiers:0,accessLevel:3,parameterTypes:[$rt_intcls()],returnType
:Cd,callable:null},{name:"decrStackSize",modifiers:0,accessLevel:3,parameterTypes:[$rt_intcls(),$rt_intcls()],returnType:Cd,callable:null},{name:"setInventorySlotContents",modifiers:0,accessLevel:3,parameterTypes:[$rt_intcls(),Cd],returnType:$rt_voidcls(),callable:null},{name:"getInvName",modifiers:0,accessLevel:3,parameterTypes:[],returnType:B4,callable:null},{name:"getInventoryStackLimit",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_intcls(),callable:null},{name:"onInventoryChanged",modifiers
:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"interact",modifiers:0,accessLevel:3,parameterTypes:[Jx],returnType:$rt_booleancls(),callable:null},{name:"<clinit>",modifiers:512,accessLevel:0,parameterTypes:[],returnType:$rt_voidcls(),callable:null}];}
function ASr(a){var b,c,d,e,f,g,h,i,j,k,l,m;if(!F1(a)&&!AG1(a)){if(a.mk===null){if(!Bc4){Bc4=1;A6U();}b=a.fW.$meta.methods;a.mk=J(Kt,b.length);c=0;d=0;while(d<b.length){e=b[d];if(DC($rt_str(e.name),B(9))){f=e.parameterTypes;g=J(FS,f.length);h=g.data;i=0;j=h.length;while(i<j){h[i]=LX(f[i]);i=i+1|0;}h=a.mk.data;j=c+1|0;k=new Kt;l=$rt_str(e.name);m=e.modifiers;i=e.accessLevel;f=JG(e.callable,"call");k.zV=a;k.H1=l;k.vd=m;k.Dm=i;k.nf=g;k.vL=f;h[c]=k;c=j;}d=d+1|0;}a.mk=Ns(a.mk,c);}return a.mk.oX();}return J(Kt,0);}
function WF(a,b){var c,d,e,f,g,h,i,j,k,l;c=ASr(a).data;d=c.length;e=0;while(true){if(e>=d){f=new UZ;P(f);M(f);}g=c[e];if(!(AEc(g)&1)?0:1){a:{h=ABm(g);if(h===b)i=1;else{if(h!==null&&b!==null){j=h.data;h=b.data;k=j.length;if(k==h.length){i=0;while(i<k){f=j[i];l=h[i];if(!(f===l?1:f!==null?Q7(f,l):l!==null?0:1)){i=0;break a;}i=i+1|0;}i=1;break a;}}i=0;}}if(i)break;}e=e+1|0;}return g;}
function JL(a){return LX(a.fW.$meta.superclass);}
function Zr(a){var b;b=a.fW;if(!Bc5){AW1();Bc5=1;}b=A2q(b);if(b!==null)return b;b=new LY;P(b);M(b);}
function AJ6(){D.call(this);}
function Bc6(){var a=new AJ6();A63(a);return a;}
function A63(a){return;}
function Cu(b,c){var name='jso$functor$'+c;if(!b[name]){var fn=function(){return b[c].apply(b,arguments);};b[name]=function(){return fn;};}return b[name]();}
function JG(b,c){if(typeof b!=="function")return b;var result={};result[c]=b;return result;}
function T$(){D.call(this);}
var Bc5=0;function Bc7(){var a=new T$();A_l(a);return a;}
function A_l(a){return;}
function AS5(b){var copy=new b.constructor();for(var field in b){if(!b.hasOwnProperty(field)){continue;}copy[field]=b[field];}return copy;}
function V1(b,c){var d,e;if(b===c)return 1;d=b.$meta.supertypes;e=0;while(e<d.length){if(V1(d[e],c))return 1;e=e+1|0;}return 0;}
function AW1(){var c='$$constructor$$';B4[c]=X9;D[c]=WL;AMe[c]=A1r;I6[c]=AVz;Fg[c]=AUN;CT[c]=P;AOU[c]=AWP;IT[c]=AXK;ALF[c]=A3t;B6[c]=ATm;BD[c]=AZJ;U[c]=A_a;HO[c]=W;JB[c]=AQ1;ABj[c]=A2Y;AJ6[c]=A63;T$[c]=A_l;Go[c]=AHD;Bt[c]=VV;W$[c]=A2j;Xe[c]=AZf;Xf[c]=AXh;Xc[c]=A43;Xd[c]=A_I;Xa[c]=A36;Xb[c]=AXv;W_[c]=A22;QC[c]=A1_;QB[c]=A31;AEG[c]=A2Q;BT[c]=A3Q;Lg[c]=A6f;V6[c]=AZj;AFd[c]=AV9;ZH[c]=A24;Mz[c]=KH;AAV[c]=A$Y;AKC[c]=A1D;AQl[c]=A06;ACe[c]=AVv;NU[c]=AD$;U0[c]=AQv;ADu[c]=A$c;DB[c]=A3b;L4[c]=AZC;AJg[c]=AV$;YX[c]=A0l;Cc[c]
=AUa;AJc[c]=A53;E3[c]=AUM;ND[c]=AIn;AE6[c]=ATd;Xg[c]=A3q;SF[c]=ZP;Up[c]=A28;MT[c]=OT;AA_[c]=AY4;Jk[c]=AZZ;D$[c]=ANw;AHI[c]=A1S;B8[c]=AQn;P8[c]=A80;Om[c]=AZU;L0[c]=ATn;N9[c]=A7s;AGj[c]=A0d;Sg[c]=A6A;I1[c]=A0W;BS[c]=AUy;FH[c]=AW8;PS[c]=A6G;AMp[c]=ATC;Gd[c]=AHH;Hw[c]=A_j;AOq[c]=A2O;Xw[c]=A8J;Km[c]=A7d;D3[c]=A9P;ZX[c]=A2C;W4[c]=A1h;GY[c]=AVe;E0[c]=A7N;ASc[c]=AXL;OX[c]=Ze;ANx[c]=A8D;CS[c]=DR;Gg[c]=Nf;JV[c]=A5B;Bu[c]=AO6;ACE[c]=AUn;Es[c]=A40;U7[c]=A96;G9[c]=AZO;Qo[c]=A$t;AKX[c]=A4r;ACm[c]=A3l;AHd[c]=A4m;RH[c]=A0K;Qr[c]
=ANN;AJH[c]=AWd;AAG[c]=ASU;AII[c]=A5t;Jq[c]=AYf;FV[c]=A6I;Ha[c]=A5Q;Gt[c]=A1E;Mm[c]=A9Y;AA2[c]=AWe;AFT[c]=A85;Tk[c]=A17;WZ[c]=AVd;KT[c]=A2m;RB[c]=A6K;WG[c]=AFv;Ly[c]=AHt;O8[c]=ALi;HY[c]=ADa;H1[c]=AGx;J3[c]=A7I;OP[c]=AIa;L$[c]=AVW;Hs[c]=AAm;Ng[c]=AR3;QD[c]=A_c;WM[c]=AVo;WK[c]=A5H;Hl[c]=AQK;Nh[c]=AKm;Sa[c]=ASP;Sc[c]=A92;Sb[c]=A97;Sd[c]=A3F;AA5[c]=ATy;Nz[c]=A79;AR1[c]=AXn;AQk[c]=A4n;PZ[c]=AYd;ACJ[c]=A90;ARi[c]=AVb;AB_[c]=AZK;AIo[c]=AWq;HS[c]=A7$;TP[c]=AZu;AAu[c]=AZA;RA[c]=ASX;AOX[c]=A7c;AQP[c]=AXt;ARB[c]=A$b;Wa[c]
=AUe;ABF[c]=AUp;AH7[c]=AUP;AIB[c]=A46;AEY[c]=A3Z;UZ[c]=A6H;Gk[c]=A9_;Vi[c]=AO8;AQI[c]=A39;APQ[c]=A8G;P7[c]=A$1;SN[c]=AYM;LY[c]=A65;Te[c]=A$A;AMk[c]=AS9;NT[c]=ADc;Q0[c]=ALB;ALw[c]=A7j;AAe[c]=A8r;N3[c]=AVP;Mw[c]=A4i;MY[c]=A5X;Li[c]=A1I;Oc[c]=AZ0;Pl[c]=AZX;Mp[c]=AZB;MI[c]=A_C;OI[c]=A8j;QW[c]=AG7;ARU[c]=AXD;X0[c]=A$j;XT[c]=A2b;AEd[c]=A0C;ART[c]=A6P;AFa[c]=AU_;ASa[c]=A2S;HV[c]=A$h;K2[c]=AXY;CE[c]=A4w;ZO[c]=A2u;Ia[c]=AF9;TU[c]=A_x;W1[c]=A4s;ABO[c]=AVk;AJr[c]=A0F;AQ8[c]=AW5;AGi[c]=A8f;Ez[c]=A3M;WA[c]=A34;WB[c]=AWL;NK[c]
=AWX;Nb[c]=A0S;AEI[c]=AWt;AFl[c]=AXg;AFu[c]=ATV;NG[c]=AU3;L_[c]=AW0;AHS[c]=A7O;OE[c]=AZQ;AMQ[c]=A0J;ACM[c]=A9D;AAk[c]=A$W;AJ_[c]=AT9;AQd[c]=A3W;AH0[c]=AZ6;APq[c]=ATX;AEq[c]=AYr;AFZ[c]=AU1;Y1[c]=AUw;AIx[c]=AX9;APF[c]=AYD;AE$[c]=A6m;ALd[c]=ATq;ACY[c]=AUF;AHb[c]=AXS;APT[c]=A74;ABy[c]=AUz;AAK[c]=A9l;AHY[c]=A6h;La[c]=AVE;AQG[c]=A6q;AMW[c]=A1z;AAD[c]=A6Q;AKQ[c]=A12;AKu[c]=AS8;Zu[c]=A70;AL$[c]=A$H;IN[c]=AT6;S7[c]=AAl;AJZ[c]=ATW;Nl[c]=ASo;AF0[c]=A0h;N0[c]=ABp;PC[c]=A_z;Ri[c]=A6V;WV[c]=AX0;ARl[c]=A0T;AIq[c]=AWT;Y8[c]
=AZ_;}
function A2q(b){if($rt_resuming()){var $r = $rt_nativeThread().pop();b.$$constructor$$($r);if($rt_suspending()){return $rt_nativeThread().push($r);}return $r;}if(!b.hasOwnProperty('$$constructor$$')){return null;}var $r=new b();b.$$constructor$$($r);if($rt_suspending()){return $rt_nativeThread().push($r);}return $r;}
function AZL(b){return setTimeout(function(){$rt_threadStarter(A3X)(b);},0);}
function A3X(b){var $p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();b=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:b.ks();if(C()){break _;}return;default:E$();}}C4().s(b,$p);}
function Q3(b){AFG(b,0);}
function AFG(b,c){return setTimeout(function(){A3X(b);},c);}
function AP3(b){return String.fromCharCode(b);}
function AR4(b){return b.$meta.item;}
function AXq(){return [];}
function Dd(){}
function DM(){}
function KZ(){}
function B4(){var a=this;D.call(a);a.bw=null;a.qp=0;}
var Bc8=null;function Bc9(){var a=new B4();X9(a);return a;}
function Tf(a){var b=new B4();Tu(b,a);return b;}
function Lj(a,b,c){var d=new B4();ASE(d,a,b,c);return d;}
function A23(a,b){var c=new B4();Yx(c,a,b);return c;}
function A$u(a,b,c){var d=new B4();XC(d,a,b,c);return d;}
function X9(a){a.bw=$rt_createCharArray(0);}
function Tu(a,b){var c,d;b=b.data;c=b.length;a.bw=$rt_createCharArray(c);d=0;while(d<c){a.bw.data[d]=b[d];d=d+1|0;}}
function ASE(a,b,c,d){var e,f;a.bw=$rt_createCharArray(d);e=0;while(e<d){f=b.data;a.bw.data[e]=f[e+c|0];e=e+1|0;}}
function Yx(a,b,c){c=AN3(c,AME(b,0,b.data.length));if(AJD(c)&&!c.bk&&c.cy==c.mF)a.bw=APl(c);else{a.bw=$rt_createCharArray(Ct(c));AES(c,a.bw);}}
function XC(a,b,c,d){var e,f,g,h,i,j;a.bw=$rt_createCharArray(d*2|0);e=0;f=0;while(f<d){g=b.data;h=c+1|0;i=g[c];if(i<65536){g=a.bw.data;j=e+1|0;g[e]=i&65535;}else{g=a.bw.data;c=e+1|0;g[e]=IG(i);g=a.bw.data;j=c+1|0;g[c]=Ib(i);}f=f+1|0;c=h;e=j;}if(e<a.bw.data.length)a.bw=O$(a.bw,e);}
function Ba(a,b){var c;if(b>=0&&b<a.bw.data.length)return a.bw.data[b];c=new I1;P(c);M(c);}
function Bi(a){return a.bw.data.length;}
function IA(a){return a.bw.data.length?0:1;}
function ARr(a,b){var c,d,e;if(a===b)return 0;c=CB(Bi(a),Bi(b));d=0;while(true){if(d>=c)return Bi(a)-Bi(b)|0;e=Ba(a,d)-Ba(b,d)|0;if(e)break;d=d+1|0;}return e;}
function AJE(a,b){var c,d,e;if(a===b)return 0;c=CB(Bi(a),Bi(b));d=0;while(true){if(d>=c)return Bi(a)-Bi(b)|0;e=ES(Ba(a,d))-ES(Ba(b,d))|0;if(e)break;d=d+1|0;}return e;}
function Wg(a,b,c){var d,e,f;if((c+Bi(b)|0)>Bi(a))return 0;d=0;while(d<Bi(b)){e=Ba(b,d);f=c+1|0;if(e!=Ba(a,c))return 0;d=d+1|0;c=f;}return 1;}
function IB(a,b){if(a===b)return 1;return Wg(a,b,0);}
function Hj(a,b,c){var d,e,f,g;d=DE(0,c);if(b<65536){e=b&65535;while(true){if(d>=a.bw.data.length)return (-1);if(a.bw.data[d]==e)break;d=d+1|0;}return d;}f=IG(b);g=Ib(b);while(true){if(d>=(a.bw.data.length-1|0))return (-1);if(a.bw.data[d]==f&&a.bw.data[d+1|0]==g)break;d=d+1|0;}return d;}
function UI(a,b){return Hj(a,b,0);}
function Il(a,b,c){var d,e,f,g,h;d=CB(c,Bi(a)-1|0);if(b<65536){e=b&65535;while(true){if(d<0)return (-1);if(a.bw.data[d]==e)break;d=d+(-1)|0;}return d;}f=IG(b);g=Ib(b);while(true){if(d<1)return (-1);if(a.bw.data[d]==g){h=a.bw.data;b=d-1|0;if(h[b]==f)break;}d=d+(-1)|0;}return b;}
function LG(a,b){return Il(a,b,Bi(a)-1|0);}
function AKH(a,b,c){var d,e,f;d=DE(0,c);e=Bi(a)-Bi(b)|0;a:while(true){if(d>e)return (-1);f=0;while(true){if(f>=Bi(b))break a;if(Ba(a,d+f|0)!=Ba(b,f))break;f=f+1|0;}d=d+1|0;}return d;}
function AAz(a,b,c){var d,e;d=CB(c,Bi(a)-Bi(b)|0);a:while(true){if(d<0)return (-1);e=0;while(true){if(e>=Bi(b))break a;if(Ba(a,d+e|0)!=Ba(b,e))break;e=e+1|0;}d=d+(-1)|0;}return d;}
function Ev(a,b,c){var d;if(b<=c)return Lj(a.bw,b,c-b|0);d=new BS;P(d);M(d);}
function Jw(a,b){return Ev(a,b,Bi(a));}
function AVM(a,b,c){return Ev(a,b,c);}
function KL(a,b,c){var d,e,f,g;d=new U;W(d);e=Bi(a)-Bi(b)|0;f=0;while(f<=e){g=0;a:{while(true){if(g>=Bi(b)){FO(d,c);f=f+(Bi(b)-1|0)|0;break a;}if(Ba(a,f+g|0)!=Ba(b,g))break;g=g+1|0;}DQ(d,Ba(a,f));}f=f+1|0;}FO(d,Jw(a,f));return V(d);}
function AUk(a){return a;}
function Nw(a){var b,c,d,e;b=$rt_createCharArray(a.bw.data.length);c=b.data;d=0;e=c.length;while(d<e){c[d]=a.bw.data[d];d=d+1|0;}return b;}
function Uu(b){return b===null?B(10):b.gk();}
function VY(b){var c;c=new U;W(c);return V(Bf(c,b));}
function DC(a,b){var c,d;if(a===b)return 1;if(!(b instanceof B4))return 0;c=b;if(Bi(c)!=Bi(a))return 0;d=0;while(d<Bi(c)){if(Ba(a,d)!=Ba(c,d))return 0;d=d+1|0;}return 1;}
function A8h(a){var b,c,d,e;a:{if(!a.qp){b=a.bw.data;c=b.length;d=0;while(true){if(d>=c)break a;e=b[d];a.qp=(31*a.qp|0)+e|0;d=d+1|0;}}}return a.qp;}
function AKk(a){var b,c,d,e,f,g,h;if(IA(a))return a;b=$rt_createIntArray(a.bw.data.length);c=b.data;d=0;e=0;while(e<a.bw.data.length){a:{if(e!=(a.bw.data.length-1|0)&&Du(a.bw.data[e])){f=a.bw.data;g=e+1|0;if(DS(f[g])){h=d+1|0;c[d]=GO(EH(a.bw.data[e],a.bw.data[g]));e=g;break a;}}h=d+1|0;c[d]=ES(a.bw.data[e]);}e=e+1|0;d=h;}return A$u(b,0,d);}
function AOj(a){var b,c,d,e,f,g,h;if(IA(a))return a;b=$rt_createIntArray(a.bw.data.length);c=b.data;d=0;e=0;while(e<a.bw.data.length){a:{if(e!=(a.bw.data.length-1|0)&&Du(a.bw.data[e])){f=a.bw.data;g=e+1|0;if(DS(f[g])){h=d+1|0;c[d]=GN(EH(a.bw.data[e],a.bw.data[g]));e=g;break a;}}h=d+1|0;c[d]=FF(a.bw.data[e]);}e=e+1|0;d=h;}return A$u(b,0,d);}
function ANm(a,b){var c,d;if(b===null){b=new E3;Bo(b,B(11));M(b);}Bc$=1;c=Bbp();d=new HX;d.h4=1;d.eP=b;d.bE=$rt_createCharArray(Bi(b)+2|0);Ds(Nw(b),0,d.bE,0,Bi(b));d.bE.data[d.bE.data.length-1|0]=0;d.bE.data[d.bE.data.length-2|0]=0;d.DW=d.bE.data.length;d.l$=0;GC(d);GC(d);c.n=d;c.fO=0;c.u1=S1(c,(-1),c.fO,null);if(!Eo(c.n))M(CN(B(3),c.n.eP,c.n.ig));if(c.ze)c.u1.iX();return AIR(c,a);}
function AV2(a,b){return ARr(a,b);}
function AGm(){Bc8=new V6;}
function CT(){var a=this;D.call(a);a.vy=null;a.jG=null;a.oq=0;a.rR=0;a.pd=null;a.qP=null;}
function Bc_(){var a=new CT();P(a);return a;}
function Bda(a){var b=new CT();Bo(b,a);return b;}
function Bdb(a){var b=new CT();WW(b,a);return b;}
function P(a){a.oq=1;a.rR=1;}
function Bo(a,b){a.oq=1;a.rR=1;a.vy=b;}
function WW(a,b){a.oq=1;a.rR=1;a.jG=b;}
function A5C(a){return a;}
function A0i(a){return a.vy;}
function AWp(a){return a.lR();}
function B9(a){S2(a,C_());}
function S2(a,b){var c,d,e,f,g;Kr(b,IF(Dl(a)));c=a.lR();if(c!==null){d=new U;W(d);Kr(b,V(I(I(d,B(12)),c)));}a:{APD(b);if(a.qP!==null){e=a.qP.data;f=e.length;g=0;while(true){if(g>=f)break a;d=e[g];Kr(b,B(13));ACl(b,d);g=g+1|0;}}}if(a.jG!==null&&a.jG!==a){Kr(b,B(14));S2(a.jG,b);}}
function OF(a,b){var c,d,e,f,g;Ho(b,IF(Dl(a)));c=a.lR();if(c!==null){d=new U;W(d);Ho(b,V(I(I(d,B(12)),c)));}a:{SS(b);if(a.qP!==null){e=a.qP.data;f=e.length;g=0;while(true){if(g>=f)break a;d=e[g];Ho(b,B(15));AAF(b,d);g=g+1|0;}}}if(a.jG!==null&&a.jG!==a){Ho(b,B(14));OF(a.jG,b);}}
function Hq(a,b){if(!a.oq)return;a.pd=Ns(a.pd,a.pd.data.length+1|0);a.pd.data[a.pd.data.length-1|0]=b;}
function Fg(){CT.call(this);}
function Bdc(){var a=new Fg();AUN(a);return a;}
function AUN(a){P(a);}
function I6(){Fg.call(this);}
function Bdd(){var a=new I6();AVz(a);return a;}
function AVz(a){P(a);}
function AMe(){I6.call(this);}
function Bde(){var a=new AMe();A1r(a);return a;}
function A1r(a){P(a);}
function HO(){var a=this;D.call(a);a.O=null;a.bY=0;}
function Bdf(){var a=new HO();W(a);return a;}
function BcK(a){var b=new HO();HC(b,a);return b;}
function W(a){HC(a,16);}
function HC(a,b){a.O=$rt_createCharArray(b);}
function TA(a,b,c){return AMx(a,a.bY,b,c);}
function AMx(a,b,c,d){var e,f,g,h,i,j,k;e=1;if(c<0){e=0;c= -c;}a:{if(c<d){if(e)C3(a,b,b+1|0);else{C3(a,b,b+2|0);f=a.O.data;g=b+1|0;f[b]=45;b=g;}a.O.data[b]=I5(c,d);}else{h=1;i=1;j=2147483647/d|0;b:{while(true){k=Bj(h,d);if(k>c){k=h;break b;}i=i+1|0;if(k>j)break;h=k;}}if(!e)i=i+1|0;C3(a,b,b+i|0);if(e)e=b;else{f=a.O.data;e=b+1|0;f[b]=45;}while(true){if(k<=0)break a;f=a.O.data;b=e+1|0;f[e]=I5(c/k|0,d);c=c%k|0;k=k/d|0;e=b;}}}return a;}
function ADe(a,b,c,d){var e,f,g,h,i,j,k;e=1;if(Long_lt(c,Long_ZERO)){e=0;c=Long_neg(c);}a:{f=Long_fromInt(d);if(Long_lt(c,f)){if(e)C3(a,b,b+1|0);else{C3(a,b,b+2|0);g=a.O.data;h=b+1|0;g[b]=45;b=h;}a.O.data[b]=I5(c.lo,d);}else{i=1;j=Long_fromInt(1);while(true){k=Long_mul(j,f);if(Long_le(k,j))break;if(Long_gt(k,c))break;i=i+1|0;j=k;}if(!e)i=i+1|0;C3(a,b,b+i|0);if(e)i=b;else{g=a.O.data;i=b+1|0;g[b]=45;}while(true){if(Long_le(j,Long_ZERO))break a;g=a.O.data;b=i+1|0;g[i]=I5(Long_div(c,j).lo,d);c=Long_rem(c,j);j=Long_div(j,
f);i=b;}}}return a;}
function AOs(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o;d=R(c,0.0);if(!d){C3(a,b,b+3|0);e=a.O.data;d=b+1|0;e[b]=48;e=a.O.data;b=d+1|0;e[d]=46;a.O.data[b]=48;return a;}if(!d){C3(a,b,b+4|0);e=a.O.data;d=b+1|0;e[b]=45;e=a.O.data;b=d+1|0;e[d]=48;e=a.O.data;d=b+1|0;e[b]=46;a.O.data[d]=48;return a;}if(isNaN(c)?1:0){C3(a,b,b+3|0);e=a.O.data;d=b+1|0;e[b]=78;e=a.O.data;b=d+1|0;e[d]=97;a.O.data[b]=78;return a;}if(!isFinite(c)?1:0){if(d>0){C3(a,b,b+8|0);d=b;}else{C3(a,b,b+9|0);e=a.O.data;d=b+1|0;e[b]=45;}e=a.O.data;b=d+1|0;e[d]
=73;e=a.O.data;d=b+1|0;e[b]=110;e=a.O.data;b=d+1|0;e[d]=102;e=a.O.data;d=b+1|0;e[b]=105;e=a.O.data;b=d+1|0;e[d]=110;e=a.O.data;d=b+1|0;e[b]=105;e=a.O.data;b=d+1|0;e[d]=116;a.O.data[b]=121;return a;}f=Bdg;AOf(c,f);d=f.ux;g=f.ue;h=f.zl;i=1;j=1;if(h){h=1;j=2;}k=9;l=A0Q(d);if(l>0)k=k-l|0;if(g<7&&g>=(-3)){if(g>=0){i=g+1|0;k=DE(k,i+1|0);g=0;}else if(g<0){d=d/Bdh.data[ -g]|0;k=k-g|0;g=0;}}if(g){j=j+2|0;if(!(g>(-10)&&g<10))j=j+1|0;if(g<0)j=j+1|0;}if(g&&k==i)k=k+1|0;C3(a,b,b+(j+k|0)|0);if(!h)h=b;else{e=a.O.data;h=b+
1|0;e[b]=45;}m=100000000;n=0;while(n<k){if(m<=0)o=0;else{o=d/m|0;d=d%m|0;}e=a.O.data;b=h+1|0;e[h]=(48+o|0)&65535;i=i+(-1)|0;if(i)h=b;else{e=a.O.data;h=b+1|0;e[b]=46;}m=m/10|0;n=n+1|0;}if(g){e=a.O.data;b=h+1|0;e[h]=69;if(g>=0)d=b;else{g= -g;e=a.O.data;d=b+1|0;e[b]=45;}if(g<10)l=d;else{e=a.O.data;l=d+1|0;e[d]=(48+(g/10|0)|0)&65535;}a.O.data[l]=(48+(g%10|0)|0)&65535;}return a;}
function AKx(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o;d=R(c,0.0);if(!d){C3(a,b,b+3|0);e=a.O.data;d=b+1|0;e[b]=48;e=a.O.data;b=d+1|0;e[d]=46;a.O.data[b]=48;return a;}if(!d){C3(a,b,b+4|0);e=a.O.data;d=b+1|0;e[b]=45;e=a.O.data;b=d+1|0;e[d]=48;e=a.O.data;d=b+1|0;e[b]=46;a.O.data[d]=48;return a;}if(isNaN(c)?1:0){C3(a,b,b+3|0);e=a.O.data;d=b+1|0;e[b]=78;e=a.O.data;b=d+1|0;e[d]=97;a.O.data[b]=78;return a;}if(!isFinite(c)?1:0){if(d>0){C3(a,b,b+8|0);d=b;}else{C3(a,b,b+9|0);e=a.O.data;d=b+1|0;e[b]=45;}e=a.O.data;b=d+1|0;e[d]
=73;e=a.O.data;d=b+1|0;e[b]=110;e=a.O.data;b=d+1|0;e[d]=102;e=a.O.data;d=b+1|0;e[b]=105;e=a.O.data;b=d+1|0;e[d]=110;e=a.O.data;d=b+1|0;e[b]=105;e=a.O.data;b=d+1|0;e[d]=116;a.O.data[b]=121;return a;}f=Bdi;AB0(c,f);g=f.u2;h=f.t3;i=f.zc;j=1;k=1;if(i)k=2;l=18;d=AZy(g);if(d>0)l=l-d|0;if(h<7&&h>=(-3)){if(h>=0){j=h+1|0;l=DE(l,j+1|0);h=0;}else if(h<0){g=Long_div(g,Bdj.data[ -h]);l=l-h|0;h=0;}}if(h){k=k+2|0;if(!(h>(-10)&&h<10))k=k+1|0;if(!(h>(-100)&&h<100))k=k+1|0;if(h<0)k=k+1|0;}if(h&&l==j)l=l+1|0;C3(a,b,b+(k+l|0)|
0);if(!i)i=b;else{e=a.O.data;i=b+1|0;e[b]=45;}m=new Long(1569325056, 23283064);n=0;while(n<l){if(Long_le(m,Long_ZERO))o=0;else{o=Long_div(g,m).lo;g=Long_rem(g,m);}e=a.O.data;b=i+1|0;e[i]=(48+o|0)&65535;j=j+(-1)|0;if(j)i=b;else{e=a.O.data;i=b+1|0;e[b]=46;}m=Long_div(m,Long_fromInt(10));n=n+1|0;}if(h){e=a.O.data;b=i+1|0;e[i]=69;if(h>=0)d=b;else{h= -h;e=a.O.data;d=b+1|0;e[b]=45;}if(h>=100){e=a.O.data;b=d+1|0;e[d]=(48+(h/100|0)|0)&65535;h=h%100|0;e=a.O.data;j=b+1|0;e[b]=(48+(h/10|0)|0)&65535;}else if(h<10)j=d;else
{e=a.O.data;j=d+1|0;e[d]=(48+(h/10|0)|0)&65535;}a.O.data[j]=(48+(h%10|0)|0)&65535;}return a;}
function A0Q(b){var c,d,e;if(!(b%1000000000|0))return 9;c=0;d=1;if(!(b%100000000|0)){c=8;d=100000000;}e=d*10000|0;if(b%e|0)e=d;else c=c|4;d=e*100|0;if(b%d|0)d=e;else c=c|2;if(!(b%(d*10|0)|0))c=c|1;return c;}
function AZy(b){var c,d,e,f;c=Long_fromInt(1);d=0;e=16;f=Bdk.data.length-1|0;while(f>=0){if(Long_eq(Long_rem(b,Long_mul(c,Bdk.data[f])),Long_ZERO)){d=d|e;c=Long_mul(c,Bdk.data[f]);}e=e>>>1;f=f+(-1)|0;}return d;}
function DQ(a,b){return a.yl(a.bY,b);}
function K1(a,b,c){C3(a,b,b+1|0);a.O.data[b]=c;return a;}
function MZ(a,b){var c;if(a.O.data.length>=b)return;c=a.O.data.length>=1073741823?2147483647:DE(b,DE(a.O.data.length*2|0,5));a.O=O$(a.O,c);}
function V(a){return Lj(a.O,0,a.bY);}
function I0(a,b,c,d){return a.xT(a.bY,b,c,d);}
function J9(a,b,c,d,e){var f,g,h,i;C3(a,b,b+e|0);f=e+d|0;while(d<f){g=c.data;h=a.O.data;e=b+1|0;i=d+1|0;h[b]=g[d];b=e;d=i;}return a;}
function Hk(a,b){return a.xl(b,0,b.data.length);}
function C3(a,b,c){var d,e;d=a.bY-b|0;a.nA((a.bY+c|0)-b|0);e=d-1|0;while(e>=0){a.O.data[c+e|0]=a.O.data[b+e|0];e=e+(-1)|0;}a.bY=a.bY+(c-b|0)|0;}
function Iw(){}
function U(){HO.call(this);}
function BX(){var a=new U();A_a(a);return a;}
function A_a(a){W(a);}
function I(a,b){NA(a,a.bY,b);return a;}
function Bf(a,b){TA(a,b,10);return a;}
function C7(a,b){UO(a,a.bY,b);return a;}
function AWC(a,b){WN(a,a.bY,b);return a;}
function AKq(a,b){Qt(a,a.bY,b);return a;}
function AS3(a,b){DQ(a,b);return a;}
function AU$(a,b,c,d){I0(a,b,c,d);return a;}
function A9Q(a,b){Hk(a,b);return a;}
function FO(a,b){Xp(a,a.bY,b);return a;}
function UO(a,b,c){ADe(a,b,c,10);return a;}
function WN(a,b,c){AOs(a,b,c);return a;}
function Qt(a,b,c){AKx(a,b,c);return a;}
function A8_(a,b,c,d,e){J9(a,b,c,d,e);return a;}
function Xp(a,b,c){NA(a,b,c===null?B(10):c.gk());return a;}
function AYV(a,b,c){K1(a,b,c);return a;}
function AGJ(a,b,c){var d,e,f,g,h,i,j;d=R(b,c);if(d<=0&&b<=a.bY){if(d){e=a.bY-c|0;a.bY=a.bY-(c-b|0)|0;d=0;while(d<e){f=a.O.data;g=b+1|0;h=a.O.data;i=c+1|0;f[b]=h[c];d=d+1|0;b=g;c=i;}}return a;}j=new I1;P(j);M(j);}
function So(a,b){var c,d,e,f;if(b>=0&&b<a.bY){a.bY=a.bY-1|0;while(b<a.bY){c=a.O.data;d=a.O.data;e=b+1|0;c[b]=d[e];b=e;}return a;}f=new I1;P(f);M(f);}
function NA(a,b,c){var d,e,f;if(b>=0&&b<=a.bY){a:{if(c===null)c=B(10);else if(IA(c))break a;MZ(a,a.bY+Bi(c)|0);d=a.bY-1|0;while(d>=b){a.O.data[d+Bi(c)|0]=a.O.data[d];d=d+(-1)|0;}a.bY=a.bY+Bi(c)|0;d=0;while(d<Bi(c)){e=a.O.data;f=b+1|0;e[b]=Ba(c,d);d=d+1|0;b=f;}}return a;}c=new I1;P(c);M(c);}
function ANh(a,b){a.bY=b;}
function AAB(a,b,c,d,e){var f,g,h,i,j;if(b>c){f=new BS;Bo(f,B(16));M(f);}while(b<c){g=d.data;h=e+1|0;i=a.O.data;j=b+1|0;g[e]=i[b];e=h;b=j;}}
function A6S(a,b,c,d,e){J9(a,b,c,d,e);return a;}
function AVq(a,b,c,d){I0(a,b,c,d);return a;}
function Kb(a){return a.bY;}
function BL(a){return V(a);}
function AXM(a,b){MZ(a,b);}
function A7E(a,b,c){return Xp(a,b,c);}
function A7h(a,b,c){K1(a,b,c);return a;}
function A0y(a,b,c){return Qt(a,b,c);}
function A56(a,b,c){return WN(a,b,c);}
function AUL(a,b,c){return UO(a,b,c);}
function A2E(a,b,c){return NA(a,b,c);}
function Fa(){D.call(this);}
function Gj(){Fa.call(this);this.f4=0;}
var Bdl=null;var Bdm=null;function AQS(a){var b=new Gj();Lp(b,a);return b;}
function Lp(a,b){a.f4=b;}
function Ld(b,c){var d,e,f,g,h,i,j;if(c>=2&&c<=36){if(b!==null&&!IA(b)){a:{d=0;e=0;switch(Ba(b,0)){case 43:e=1;break a;case 45:d=1;e=1;break a;default:}}f=0;if(e==Bi(b)){b=new Ez;P(b);M(b);}while(e<Bi(b)){g=e+1|0;h=Uj(Ba(b,e));if(h<0){i=new Ez;j=new U;W(j);Bo(i,V(I(I(j,B(17)),b)));M(i);}if(h>=c){i=new Ez;j=new U;W(j);Bo(i,V(I(I(Bf(I(j,B(18)),c),B(12)),b)));M(i);}f=Bj(c,f)+h|0;if(f<0){if(g==Bi(b)&&f==(-2147483648)&&d)return (-2147483648);i=new Ez;j=new U;W(j);Bo(i,V(I(I(j,B(19)),b)));M(i);}e=g;}if(d)f= -f;return f;}b
=new Ez;Bo(b,B(20));M(b);}i=new Ez;b=new U;W(b);Bo(i,V(Bf(I(b,B(21)),c)));M(i);}
function CZ(b){var c;if(b>=(-128)&&b<=127){a:{if(Bdm===null){Bdm=J(Gj,256);c=0;while(true){if(c>=Bdm.data.length)break a;Bdm.data[c]=AQS(c-128|0);c=c+1|0;}}}return Bdm.data[b+128|0];}return AQS(b);}
function A3P(a){return a.f4;}
function Mx(a){var b;b=a.f4;return TA(BcK(20),b,10).gk();}
function A25(a){return a.f4>>>4^a.f4<<28^a.f4<<8^a.f4>>>24;}
function A_i(a,b){if(a===b)return 1;return b instanceof Gj&&b.f4==a.f4?1:0;}
function AAC(a,b){return R(a.f4,b.f4);}
function TD(b){var c,d;if(!b)return 32;c=0;d=b>>>16;if(d)c=16;else d=b;b=d>>>8;if(!b)b=d;else c=c|8;d=b>>>4;if(!d)d=b;else c=c|4;b=d>>>2;if(!b)b=d;else c=c|2;if(b>>>1)c=c|1;return (32-c|0)-1|0;}
function JH(b){var c,d;if(!b)return 32;c=0;d=b<<16;if(d)c=16;else d=b;b=d<<8;if(!b)b=d;else c=c|8;d=b<<4;if(!d)d=b;else c=c|4;b=d<<2;if(!b)b=d;else c=c|2;if(b<<1)c=c|1;return (32-c|0)-1|0;}
function No(b,c){var d;d=c&31;return b<<d|b>>>(32-d|0);}
function A6W(a,b){return AAC(a,b);}
function AQm(){Bdl=F($rt_intcls());}
function IT(){I6.call(this);}
function Bdn(){var a=new IT();AXK(a);return a;}
function Bdo(a){var b=new IT();Qf(b,a);return b;}
function AXK(a){P(a);}
function Qf(a,b){Bo(a,b);}
function AOU(){IT.call(this);}
function Bdp(){var a=new AOU();AWP(a);return a;}
function Bdq(a){var b=new AOU();AUt(b,a);return b;}
function AWP(a){P(a);}
function AUt(a,b){Qf(a,b);}
function ALF(){IT.call(this);}
function Bdr(){var a=new ALF();A3t(a);return a;}
function Bds(a){var b=new ALF();AUO(b,a);return b;}
function A3t(a){P(a);}
function AUO(a,b){Qf(a,b);}
function BD(){CT.call(this);}
function Bdt(){var a=new BD();AZJ(a);return a;}
function AZJ(a){P(a);}
function B6(){BD.call(this);}
function Bdu(){var a=new B6();ATm(a);return a;}
function Z3(a){var b=new B6();A$P(b,a);return b;}
function ATm(a){P(a);}
function A$P(a,b){Bo(a,b);}
function Db(){}
function Hg(){}
function Uv(){}
function Qu(){}
function Vh(){}
function Rm(){}
function Wn(){}
function PB(){}
function Lk(){}
function YM(){D.call(this);}
function AX6(a,b,c){a.Xl($rt_str(b),JG(c,"handleEvent"));}
function AYi(a,b,c){a.UK($rt_str(b),JG(c,"handleEvent"));}
function ATI(a,b){return a.HJ(b);}
function AY$(a,b,c,d){a.KM($rt_str(b),JG(c,"handleEvent"),d?1:0);}
function A1C(a,b){return !!a.Xs(b);}
function AUG(a){return a.Ja();}
function AS1(a,b,c,d){a.NH($rt_str(b),JG(c,"handleEvent"),d?1:0);}
function Bt(){D.call(this);}
var Bdv=0;var Bdw=null;var Bdx=null;var Bdy=null;var Bdz=null;var BdA=null;var BdB=null;var BdC=null;var BdD=null;var BdE=null;var BdF=null;var BdG=null;var BdH=null;var BdI=null;var BdJ=null;var BdK=null;var BdL=null;var BdM=null;var BdN=null;var BdO=null;var BdP=0;var BdQ=0;var BdR=0.0;var BdS=0.0;var BdT=0;var BdU=0;var BdV=0;var BdW=0;var BdX=0;var BdY=null;var BdZ=null;var Bd0=null;var Bd1=null;var Bd2=null;var Bd3=0;var Bd4=null;var Bd5=null;var Bd6=null;var Bd7=null;var Bd8=null;var Bd9=null;var Bd$=
Long_ZERO;var Bd_=0;var Bea=0;var Beb=0;var Bec=null;var Bed=null;var Bee=null;var Bef=0;var Beg=0;var Beh=0;var Bei=null;var Bej=null;var Bek=null;var Bel=0;var Bem=null;var Ben=null;var Beo=0.0;var Bep=null;var Beq=0;var Ber=null;var Bes=null;var Bet=0;var Beu=null;var Bev=0;function Be(){Be=Br(Bt);ATM();}
function Bew(){var a=new Bt();VV(a);return a;}
function VV(a){Be();}
function PK(){Be();return B(22);}
function Kh(b){Be();if(IB(b,B(23)))b=Jw(b,1);return CP(Bex,b);}
function ACb(b){var c;Be();c=Kh(b);if(c===null)return null;return A23(c,X8(B(24)));}
function ALm(b){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.Gq=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.IY=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=BaA(callback);return thread.suspend(function(){try{A3m(b,callback);}catch($e){callback.IY($rt_exception($e));}});}
function A3m(b,c){var d,e;Be();d=new XMLHttpRequest();e="arraybuffer";d.responseType=e;d.open("GET",$rt_ustr(b),!!1);b=new W9;b.vo=d;b.Ac=c;b=Cu(b,"stateChanged");d.onreadystatechange=b;d.send();}
function AAs(b,c){var d,e,f,$$je,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:Be();Bdx=b;d=$rt_str(Bdx.getAttribute("style"));e=Bdx;f=new U;W(f);if(d===null)d=B(3);d=V(I(I(f,d),B(25)));e.setAttribute("style",$rt_ustr(d));BdC=window;Bdw=BdC.document;Bdy=Bdw.createElement("canvas");BdT=b.clientWidth;BdU=b.clientHeight;f=Bdy;e=BdT;f.width=e;f=Bdy;e=BdU;f.height=e;Bdz=Bdy.getContext("2d");Bdy.setAttribute("id","deevis589723589");f=Bdy;b.appendChild(f);BdA
=Bdw.createElement("canvas");b=BdA;f=BdT;b.width=f;b=BdA;f=BdU;b.height=f;b=BdA;e=AEO();BdB=b.getContext("webgl2",e);if(BdB===null){b=new B6;c=new U;W(c);Bo(b,V(I(I(I(c,B(26)),$rt_str(window.navigator.userAgent)),B(27))));M(b);}X$(BdB);BdB.getExtension("EXT_texture_filter_anisotropic");b=BdC;e=new W$;BdE=e;b.addEventListener("contextmenu",Cu(e,"handleEvent"));b=Bdy;e=new Xe;BdF=e;b.addEventListener("mousedown",Cu(e,"handleEvent"));b=Bdy;e=new Xf;BdG=e;b.addEventListener("mouseup",Cu(e,"handleEvent"));b=Bdy;e
=new Xc;BdH=e;b.addEventListener("mousemove",Cu(e,"handleEvent"));b=BdC;e=new Xd;BdI=e;b.addEventListener("keydown",Cu(e,"handleEvent"));b=BdC;e=new Xa;BdJ=e;b.addEventListener("keyup",Cu(e,"handleEvent"));b=BdC;e=new Xb;BdK=e;b.addEventListener("keypress",Cu(e,"handleEvent"));b=Bdy;e=new W_;BdL=e;b.addEventListener("wheel",Cu(e,"handleEvent"));b=BdC;e=new QC;b.addEventListener("blur",Cu(e,"handleEvent"));b=BdC;e=new QB;b.addEventListener("focus",Cu(e,"handleEvent"));ANW();$p=1;case 1:AJO();if(C()){break _;}$p
=2;case 2:ALm(c);if(C()){break _;}a:{try{AMb(BdD);break a;}catch($$e){$$je=Y($$e);if($$je instanceof BT){f=$$je;}else{throw $$e;}}B9(f);}Ben=AYq();Ox(BdN);Ox(BdO);return;default:E$();}}C4().s(b,c,d,e,f,$p);}
function K4(b){Be();BdB.enable(b);}
function J5(b){Be();BdB.disable(b);}
function AH3(){var b,c;Be();b=new V5;b.iZ=BdB.createProgram();c=BdX+1|0;BdX=c;b.xn=c;return b;}
function OH(b){var c;Be();c=new V9;c.jq=BdB.createShader(b);return c;}
function Se(b,c){var d;Be();d=BdB;b=b.iZ;c=c.jq;d.attachShader(b,c);}
function UP(b,c){var d;Be();d=BdB;b=b.iZ;c=c.jq;d.detachShader(b,c);}
function WH(b){var c;Be();c=BdB;b=b.jq;c.compileShader(b);}
function AAH(b){var c;Be();c=BdB;b=b.iZ;c.linkProgram(b);}
function O4(b,c){var d;Be();d=BdB;b=b.jq;d.shaderSource(b,$rt_ustr(c));}
function Ue(b){var c;Be();c=BdB;b=b.jq;return $rt_str(c.getShaderInfoLog(b));}
function AHw(b){var c;Be();c=BdB;b=b.iZ;return $rt_str(c.getProgramInfoLog(b));}
function Vk(b){var c;Be();c=BdB;b=b.jq;return c.getShaderParameter(b,35713)!=1?0:1;}
function AGo(b){var c;Be();c=BdB;b=b.iZ;return c.getProgramParameter(b,35714)!=1?0:1;}
function Tl(b){var c;Be();c=BdB;b=b.jq;c.deleteShader(b);}
function L7(){var b;Be();b=new We;b.DZ=BdB.createBuffer();return b;}
function Hf(b,c){var d;Be();d=BdB;c=c!==null?c.DZ:null;d.bindBuffer(b,c);}
function PF(b,c,d){var e;Be();e=BdB;c=c;e.bufferData(b,c,d);}
function N8(b){Be();BdB.enableVertexAttribArray(b);}
function Dq(b,c){var d;Be();d=BdB;b=b.iZ;d=d.getUniformLocation(b,$rt_ustr(c));if(d===null)b=null;else{b=new Xj;b.ky=d;}return b;}
function LV(b,c,d){var e;Be();e=BdB;b=b.iZ;e.bindAttribLocation(b,c,$rt_ustr(d));}
function Ih(b,c){var d;Be();if(b!==null){d=BdB;b=b.ky;d.uniform1f(b,c);}}
function Ln(b,c,d,e){var f;Be();if(b!==null){f=BdB;b=b.ky;f.uniform3f(b,c,d,e);}}
function Uo(b,c,d,e,f){var g,h;Be();if(b!==null){g=BdB;h=b.ky;g.uniform4f(h,c,d,e,f);}}
function Rc(b,c){var d;Be();if(b!==null){d=BdB;b=b.ky;d.uniform1i(b,c);}}
function Mg(b,c){var d,e;Be();Bd2.set(c.data);if(b!==null){d=BdB;e=b.ky;b=Bd2;d.uniformMatrix4fv(e,!!0,b);}}
function V3(b){var c;Be();if(b!==null&&Bd3!=b.xn){Bd3=b.xn;c=BdB;b=b.iZ;c.useProgram(b);}}
function N$(b,c,d,e,f,g){Be();BdB.vertexAttribPointer(b,c,d,!!e,f,g);}
function Pc(){var b;Be();b=new SE;b.A3=BdB.createVertexArray();b.vQ=0;return b;}
function RU(b){var c;Be();c=BdB;b=b!==null?b.A3:null;c.bindVertexArray(b);}
function AEV(b){var c,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:Be();c=new ArrayBuffer(b.data.length);(new Uint8Array(c)).set(b.data);$p=1;case 1:$z=AIu(c);if(C()){break _;}c=$z;return c;default:E$();}}C4().s(b,c,$p);}
function AIu(b){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.Gq=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.IY=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=BaA(callback);return thread.suspend(function(){try{AWS(b,callback);}catch($e){callback.IY($rt_exception($e));}});}
function AWS(b,c){var d,e,f;Be();d=Bdw.createElement("img");e=new QF;e.f0=d;e.yb=c;d.addEventListener("load",Cu(e,"handleEvent"));f=new QE;f.El=d;f.E3=c;d.addEventListener("error",Cu(f,"handleEvent"));e=$rt_str(ANH(b,"image/png"));if(e===null)CM(c,null);else{b=$rt_ustr(e);d.src=b;}}
function Lq(){var b,c,d;Be();b=Bdx.clientWidth;if(b!=BdT){c=Bdy;d=b;c.width=d;c=BdA;d=b;c.width=d;BdT=b;}return b;}
function MD(){var b,c,d;Be();b=Bdx.clientHeight;if(b!=BdU){c=Bdy;d=b;c.height=d;c=BdA;d=b;c.height=d;BdU=b;}return b;}
function Kx(){Be();return Long_fromInt(1073741824);}
function J1(){Be();return Long_fromInt(1073741824);}
function Ke(){Be();return Long_ZERO;}
function UL(b){Be();return b.byteLength;}
function T7(b){Be();return b<=Bes.data.length&&b>=0?Bes.data[b]:(-1);}
function ACC(b,c){var d,e,f,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:Be();d=LG(b,47);if(d>0){e=Ev(b,0,d);$p=2;continue _;}f=new Uint8Array(c.data.length);f.set(c.data);e=Bey;d=0;f=f.buffer;$p=1;case 1:AXR(e,b,d,f);if(C()){break _;}return;case 2:AJb(e);if(C()){break _;}f=new Uint8Array(c.data.length);f.set(c.data);e=Bey;d=0;f=f.buffer;$p=1;continue _;default:E$();}}C4().s(b,c,d,e,f,$p);}
function ALG(b){var c,d,e,f,g,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:Be();c=Bey;$p=1;case 1:$z=A_E(c,b);if(C()){break _;}b=$z;if(b===null)d=null;else{d=$rt_createByteArray(b.byteLength);e=d.data;b=new Uint8Array(b);f=0;g=e.length;while(f<g){e[f]=b[f]<<24>>24;f=f+1|0;}}return d;default:E$();}}C4().s(b,c,d,e,f,g,$p);}
function ANn(b,c){var d,e,f,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:Be();d=Bey;$p=1;case 1:$z=A_E(d,b);if(C()){break _;}d=$z;e=LG(c,47);if(e<=0){f=Bey;e=0;$p=2;continue _;}f=Ev(c,0,e);$p=4;continue _;case 2:AXR(f,c,e,d);if(C()){break _;}c=Bey;$p=3;case 3:A5s(c,b);if(C()){break _;}return;case 4:AJb(f);if(C()){break _;}f=Bey;e=0;$p=2;continue _;default:E$();}}C4().s(b,c,d,e,f,$p);}
function AL4(b){var c,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:Be();c=Bey;$p=1;case 1:A5s(c,b);if(C()){break _;}return;default:E$();}}C4().s(b,c,$p);}
function V_(){Be();return BdD;}
function RP(){Be();return Bd8;}
function MO(){Be();return BdN;}
function Ms(){Be();if(Long_gt(Long_sub(B_(),Bd$),Long_fromInt(3000))&&Bea&&!(document.pointerLockElement!=null?1:0)){Bdy.requestPointerLock();if(document.pointerLockElement!=null?1:0)Bea=0;}}
function P5(){Be();return Bd9;}
function QG(b){Be();return b.which;}
function S$(b){Be();return T7(b);}
function NN(){Be();return BdO;}
function SY(b){Be();BdW=b;return b;}
function Hm(){Be();return Bd4;}
function JT(){Be();return Bd5;}
function WJ(b){Be();URL.revokeObjectURL($rt_ustr(b));}
function VT(){Be();return Bd_;}
function MX(b){Be();Bd_=b;return b;}
function P1(){Be();return Bd$;}
function ATM(){var b,c;Bdv=0;Bdw=null;Bdx=null;Bdy=null;Bdz=null;BdA=null;BdB=null;BdC=null;BdD=null;BdE=null;BdF=null;BdG=null;BdH=null;BdI=null;BdJ=null;BdK=null;BdL=null;BdM=J(B4,0);BdN=QZ();BdO=QZ();BdP=0;BdQ=0;BdR=0.0;BdS=0.0;BdT=0;BdU=0;BdV=0;BdW=1;BdX=0;BdY=$rt_createIntArray(4);BdZ=new Uint8Array(new ArrayBuffer(4194304));Bd0=new Float32Array(4);Bd1=new Float32Array(9);Bd2=new Float32Array(16);Bd3=(-1);Bd4=null;Bd5=null;Bd6=null;Bd7=null;Bd8=$rt_createBooleanArray(8);Bd9=$rt_createBooleanArray(256);Bd$
=Long_ZERO;Bd_=0;Bea=0;Beb=0;Bec=Ga();Bed=Ga();Bee=null;Bef=0;Beg=0;Beh=0;Bei=QZ();Bej=null;Bek=null;Bel=0;Bem=Df();Ben=null;Beo=0.029999999329447746;Bep=Df();Beq=0;b=J(B4,256);c=b.data;c[0]=B(28);c[1]=B(29);c[2]=B(30);c[3]=B(31);c[4]=B(32);c[5]=B(33);c[6]=B(34);c[7]=B(35);c[8]=B(36);c[9]=B(37);c[10]=B(38);c[11]=B(2);c[12]=B(39);c[13]=B(40);c[14]=B(41);c[15]=B(42);c[16]=B(43);c[17]=B(44);c[18]=B(45);c[19]=B(46);c[20]=B(47);c[21]=B(48);c[22]=B(49);c[23]=B(50);c[24]=B(51);c[25]=B(52);c[26]=B(53);c[27]=B(54);c[28]
=B(55);c[29]=B(56);c[30]=B(57);c[31]=B(58);c[32]=B(59);c[33]=B(60);c[34]=B(61);c[35]=B(62);c[36]=B(63);c[37]=B(64);c[38]=B(65);c[39]=B(66);c[40]=B(67);c[41]=B(68);c[42]=B(69);c[43]=B(70);c[44]=B(71);c[45]=B(72);c[46]=B(73);c[47]=B(74);c[48]=B(75);c[49]=B(76);c[50]=B(77);c[51]=B(78);c[52]=B(79);c[53]=B(80);c[54]=B(81);c[55]=B(82);c[56]=B(83);c[57]=B(84);c[58]=B(85);c[59]=B(86);c[60]=B(87);c[61]=B(88);c[62]=B(89);c[63]=B(90);c[64]=B(91);c[65]=B(92);c[66]=B(93);c[67]=B(94);c[68]=B(95);c[69]=B(96);c[70]=B(97);c[71]
=B(98);c[72]=B(99);c[73]=B(100);c[74]=B(101);c[75]=B(102);c[76]=B(103);c[77]=B(104);c[78]=B(105);c[79]=B(106);c[80]=B(107);c[81]=B(108);c[82]=B(109);c[83]=B(110);c[84]=B(10);c[85]=B(10);c[86]=B(10);c[87]=B(111);c[88]=B(112);c[89]=B(10);c[90]=B(10);c[91]=B(10);c[92]=B(10);c[93]=B(10);c[94]=B(10);c[95]=B(10);c[96]=B(10);c[97]=B(10);c[98]=B(10);c[99]=B(10);c[100]=B(113);c[101]=B(114);c[102]=B(115);c[103]=B(116);c[104]=B(117);c[105]=B(118);c[106]=B(10);c[107]=B(10);c[108]=B(10);c[109]=B(10);c[110]=B(10);c[111]=
B(10);c[112]=B(119);c[113]=B(120);c[114]=B(10);c[115]=B(10);c[116]=B(10);c[117]=B(10);c[118]=B(10);c[119]=B(10);c[120]=B(10);c[121]=B(121);c[122]=B(10);c[123]=B(122);c[124]=B(10);c[125]=B(123);c[126]=B(10);c[127]=B(10);c[128]=B(10);c[129]=B(10);c[130]=B(10);c[131]=B(10);c[132]=B(10);c[133]=B(10);c[134]=B(10);c[135]=B(10);c[136]=B(10);c[137]=B(10);c[138]=B(10);c[139]=B(10);c[140]=B(10);c[141]=B(124);c[142]=B(10);c[143]=B(10);c[144]=B(125);c[145]=B(126);c[146]=B(127);c[147]=B(128);c[148]=B(129);c[149]=B(130);c[150]
=B(131);c[151]=B(132);c[152]=B(10);c[153]=B(10);c[154]=B(10);c[155]=B(10);c[156]=B(133);c[157]=B(134);c[158]=B(10);c[159]=B(10);c[160]=B(10);c[161]=B(10);c[162]=B(10);c[163]=B(10);c[164]=B(10);c[165]=B(10);c[166]=B(10);c[167]=B(135);c[168]=B(10);c[169]=B(10);c[170]=B(10);c[171]=B(10);c[172]=B(10);c[173]=B(10);c[174]=B(10);c[175]=B(10);c[176]=B(10);c[177]=B(10);c[178]=B(10);c[179]=B(136);c[180]=B(10);c[181]=B(137);c[182]=B(10);c[183]=B(138);c[184]=B(139);c[185]=B(10);c[186]=B(10);c[187]=B(10);c[188]=B(10);c[189]
=B(10);c[190]=B(10);c[191]=B(10);c[192]=B(10);c[193]=B(10);c[194]=B(10);c[195]=B(10);c[196]=B(140);c[197]=B(141);c[198]=B(10);c[199]=B(142);c[200]=B(143);c[201]=B(144);c[202]=B(10);c[203]=B(145);c[204]=B(10);c[205]=B(146);c[206]=B(10);c[207]=B(147);c[208]=B(148);c[209]=B(149);c[210]=B(150);c[211]=B(151);c[212]=B(10);c[213]=B(10);c[214]=B(10);c[215]=B(10);c[216]=B(10);c[217]=B(10);c[218]=B(152);c[219]=B(153);c[220]=B(154);c[221]=B(155);c[222]=B(156);c[223]=B(157);c[224]=B(10);c[225]=B(10);c[226]=B(10);c[227]
=B(10);c[228]=B(10);c[229]=B(10);c[230]=B(10);c[231]=B(10);c[232]=B(10);c[233]=B(10);c[234]=B(10);c[235]=B(10);c[236]=B(10);c[237]=B(10);c[238]=B(10);c[239]=B(10);c[240]=B(10);c[241]=B(10);c[242]=B(10);c[243]=B(10);c[244]=B(10);c[245]=B(10);c[246]=B(10);c[247]=B(10);c[248]=B(10);c[249]=B(10);c[250]=B(10);c[251]=B(10);c[252]=B(10);c[253]=B(10);c[254]=B(10);c[255]=B(10);Ber=b;b=$rt_createIntArray(224);c=b.data;c[0]=(-1);c[1]=(-1);c[2]=(-1);c[3]=(-1);c[4]=(-1);c[5]=(-1);c[6]=(-1);c[7]=(-1);c[8]=14;c[9]=15;c[10]
=(-1);c[11]=(-1);c[12]=(-1);c[13]=28;c[14]=(-1);c[15]=(-1);c[16]=42;c[17]=29;c[18]=56;c[19]=(-1);c[20]=(-1);c[21]=(-1);c[22]=(-1);c[23]=(-1);c[24]=(-1);c[25]=(-1);c[26]=(-1);c[27]=1;c[28]=(-1);c[29]=(-1);c[30]=(-1);c[31]=(-1);c[32]=57;c[33]=210;c[34]=201;c[35]=207;c[36]=199;c[37]=203;c[38]=200;c[39]=205;c[40]=208;c[41]=205;c[42]=208;c[43]=(-1);c[44]=(-1);c[45]=210;c[46]=211;c[47]=211;c[48]=11;c[49]=2;c[50]=3;c[51]=4;c[52]=5;c[53]=6;c[54]=7;c[55]=8;c[56]=9;c[57]=10;c[58]=(-1);c[59]=(-1);c[60]=(-1);c[61]=(-1);c[62]
=(-1);c[63]=(-1);c[64]=(-1);c[65]=30;c[66]=48;c[67]=46;c[68]=32;c[69]=18;c[70]=33;c[71]=34;c[72]=35;c[73]=23;c[74]=36;c[75]=37;c[76]=38;c[77]=50;c[78]=49;c[79]=24;c[80]=25;c[81]=16;c[82]=19;c[83]=31;c[84]=20;c[85]=22;c[86]=47;c[87]=17;c[88]=45;c[89]=21;c[90]=44;c[91]=(-1);c[92]=(-1);c[93]=(-1);c[94]=(-1);c[95]=(-1);c[96]=(-1);c[97]=(-1);c[98]=(-1);c[99]=(-1);c[100]=(-1);c[101]=(-1);c[102]=(-1);c[103]=(-1);c[104]=(-1);c[105]=(-1);c[106]=(-1);c[107]=(-1);c[108]=(-1);c[109]=12;c[110]=52;c[111]=53;c[112]=(-1);c[113]
=(-1);c[114]=(-1);c[115]=(-1);c[116]=(-1);c[117]=(-1);c[118]=(-1);c[119]=(-1);c[120]=(-1);c[121]=(-1);c[122]=(-1);c[123]=(-1);c[124]=(-1);c[125]=(-1);c[126]=(-1);c[127]=(-1);c[128]=(-1);c[129]=(-1);c[130]=(-1);c[131]=(-1);c[132]=(-1);c[133]=(-1);c[134]=(-1);c[135]=(-1);c[136]=(-1);c[137]=(-1);c[138]=(-1);c[139]=(-1);c[140]=(-1);c[141]=(-1);c[142]=(-1);c[143]=(-1);c[144]=(-1);c[145]=(-1);c[146]=(-1);c[147]=(-1);c[148]=(-1);c[149]=(-1);c[150]=(-1);c[151]=(-1);c[152]=(-1);c[153]=(-1);c[154]=(-1);c[155]=(-1);c[156]
=(-1);c[157]=(-1);c[158]=(-1);c[159]=(-1);c[160]=(-1);c[161]=(-1);c[162]=(-1);c[163]=(-1);c[164]=(-1);c[165]=(-1);c[166]=(-1);c[167]=(-1);c[168]=(-1);c[169]=(-1);c[170]=(-1);c[171]=(-1);c[172]=(-1);c[173]=(-1);c[174]=(-1);c[175]=(-1);c[176]=(-1);c[177]=(-1);c[178]=(-1);c[179]=(-1);c[180]=(-1);c[181]=(-1);c[182]=(-1);c[183]=(-1);c[184]=(-1);c[185]=(-1);c[186]=39;c[187]=13;c[188]=51;c[189]=12;c[190]=52;c[191]=53;c[192]=(-1);c[193]=(-1);c[194]=(-1);c[195]=(-1);c[196]=(-1);c[197]=(-1);c[198]=(-1);c[199]=(-1);c[200]
=(-1);c[201]=(-1);c[202]=(-1);c[203]=(-1);c[204]=(-1);c[205]=(-1);c[206]=(-1);c[207]=(-1);c[208]=(-1);c[209]=(-1);c[210]=(-1);c[211]=(-1);c[212]=(-1);c[213]=(-1);c[214]=(-1);c[215]=(-1);c[216]=(-1);c[217]=(-1);c[218]=(-1);c[219]=(-1);c[220]=26;c[221]=43;c[222]=27;c[223]=40;Bes=b;Bet=0;Beu=new Int32Array(new ArrayBuffer(2100000));Bev=0;}
function X$(b){window.currentContext=b;}
function ANW(){if (!ANW.$native){
ANW.$native=function(){return (function(){window.eagsFileChooser = {
inputElement: null,
openFileChooser: function(ext, mime){
var el = window.eagsFileChooser.inputElement = document.createElement("input");
el.type = "file";
el.multiple = false;
el.addEventListener("change", function(evt){
var f = window.eagsFileChooser.inputElement.files;
if(f.length == 0){
window.eagsFileChooser.getFileChooserResult = null;
}else{
(async function(){
window.eagsFileChooser.getFileChooserResult = await f[0].arrayBuffer();
window.eagsFileChooser.getFileChooserResultName = f[0].name;
})();
}
});
window.eagsFileChooser.getFileChooserResult = null;
window.eagsFileChooser.getFileChooserResultName = null;
el.accept = mime;
el.click();
},
getFileChooserResult: null,
getFileChooserResultName: null
};})();};ANW=ANW.$native;}return ANW();}
function AEO(){return {antialias:false,depth:true,powerPreference:"high-performance",desynchronized:false,preserveDrawingBuffer:false,premultipliedAlpha:false,alpha:false};}
function ANH(b,c){return URL.createObjectURL(new Blob([b],{type:c}));}
function ANB(b){if(b.commit)b.commit();}
function SZ(){}
function JF(){}
function NZ(){}
function HD(){D.call(this);this.wc=null;}
function Bez(a){var b=new HD();Wi(b,a);return b;}
function Wi(a,b){if(b!==null){a.wc=b;return;}b=new E3;P(b);M(b);}
function ABj(){HD.call(this);this.x1=null;}
function A86(){var a=new ABj();A2Y(a);return a;}
function A2Y(a){var b;a.wc=a;b=new Lg;HC(b,16);a.x1=b;a.wc=a.x1;}
function AK7(a){return;}
function AEz(a,b,c,d){var e,f;if(c>=0){e=b.data.length;if(c<=e&&d>=0&&d<=(e-c|0)){if(!d)return;I0(a.x1,b,c,d);return;}}f=new BS;P(f);M(f);}
function Lt(){var a=this;HD.call(a);a.mB=null;a.FQ=0;a.yi=0;}
function AFz(a){var $$je;a:{if(a.mB===null)Kg(a);else{try{AK7(a.mB);break a;}catch($$e){$$je=Y($$e);if($$je instanceof BT){}else{throw $$e;}}Kg(a);}}}
function Ho(a,b){if(b===null)b=Uu(null);Yu(a,b);}
function SS(a){Ho(a,B(158));if(a.yi)AFz(a);}
function AAF(a,b){ABS(a,Uu(b));}
function ABS(a,b){Ho(a,b);SS(a);}
function Kg(a){a.FQ=1;}
function AR0(a,b){AAo(a,b,0,b.data.length);}
function AAo(a,b,c,d){var $$je;a:{if(a.mB===null)Kg(a);else{try{AEz(a.mB,b,c,d);break a;}catch($$e){$$je=Y($$e);if($$je instanceof BT){}else{throw $$e;}}Kg(a);}}}
function Yu(a,b){AR0(a,Nw(b));}
function AFd(){D.call(this);}
function BeA(){var a=new AFd();AV9(a);return a;}
function AV9(a){return;}
function AFR(){D.call(this);}
function LZ(){}
function Iq(){var a=this;D.call(a);a.cB=null;a.cq=0;a.bF=0;a.bf=null;a.A=null;a.dY=null;a.f=null;a.c6=null;a.k1=null;a.bs=0;a.bo=null;a.e_=null;a.D=null;a.ir=null;a.eV=null;a.bN=0;a.c$=0;a.Hi=null;a.F0=0;a.nY=null;a.h7=0;a.Gv=null;a.ce=null;a.o=null;a.ym=null;a.C_=null;a.BH=null;a.gR=0;a.lA=null;a.gS=Long_ZERO;a.bp=0;a.cn=0;a.cU=0;a.dB=Long_ZERO;}
var BeB=null;var BeC=0;var Bc3=null;function AIp(a){var b,c,d,e,f,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.o=A_4(a);b=new KK;c=a.o;BeD=Df();b.zm=Df();b.kz=Rj(1);b.ha=WR(1048576);b.l0=WR(1048576);b.Ce=Ci();b.sU=0;b.DY=0;b.wI=c;a.bo=b;c=new Wk;d=a.o;b=B(159);e=a.bo;$p=1;case 1:AOI(c,d,b,e);if(C()){break _;}a.e_=c;$p=2;case 2:Yr(a);if(C()){break _;}a.ym=new Qo;Ei(a,B(160));Bb(3553);Be();BdB.clearDepth((-1.0));Bb(2929);HL(515);Bb(3008);Sz(516,
0.10000000149011612);BdB.cullFace(1029);Da(5889);C$();Da(5888);Ei(a,B(161));G7(a.bo,a.BH);G7(a.bo,a.C_);G7(a.bo,Bao());G7(a.bo,Bcv());G7(a.bo,AVI(0));G7(a.bo,AVI(1));a.dY=BaN(a,a.bo);Hi(0,0,a.cq,a.bF);e=Bc3;b=LM();c=B(162);d=B(163);$p=3;case 3:ARZ(e,b,c,d);if(C()){break _;}b=new O3;c=a.A;d=a.bo;b.cD=J(J6,3);b.su=new DB;if(c!==null)b.mV=c;b.je=d;f=0;while(f<3){b.cD.data[f]=Ci();f=f+1|0;}a.c6=b;Ei(a,B(164));b=new Nt;Nf(b);b.g5=Ci();b.vs=new DB;b.FV=null;b.rV=0;b.II=1.0;b.b2=a;a.nY=b;return;default:E$();}}C4().s(a,
b,c,d,e,f,$p);}
function Yr(a){var b,c,d,e,f,g,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=FK(a.cq,a.bF);c=b.fL;d=b.fI;D5(16640);Da(5889);C$();Ir(0.0,c,d,0.0,1000.0,3000.0);Da(5888);C$();Bw(0.0,0.0,(-2000.0));Hi(0,0,a.cq,a.bF);HB(0.0,0.0,0.0,0.0);Bd(2896);Bd(2912);Bb(3553);BA();e=BeE;f=3553;b=a.bo;g=B(165);$p=1;case 1:$z=AHv(b,g);if(C()){break _;}d=$z;Cp(f,d);BU(1.0,1.0,1.0,1.0);Bz(e);EQ(e,4210752);G(e,0.0,a.bF,0.0,0.0,a.bF/32.0
+0.0);G(e,a.cq,a.bF,0.0,a.cq/32.0,a.bF/32.0+0.0);G(e,a.cq,0.0,0.0,a.cq/32.0,0.0);G(e,0.0,0.0,0.0,0.0,0.0);Bs(e);Bb(3008);Sz(516,0.10000000149011612);Cy(a.e_,B(166),8,(a.bF/2|0)-16|0,(-1));return;default:E$();}}C4().s(a,b,c,d,e,f,g,$p);}
function ADW(a,b){var c,d,e,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.D instanceof RB)return;if(a.D!==null){c=a.D;$p=1;continue _;}if(b===null&&a.A===null)b=LM();else if(b===null&&a.f.bT<=0){b=new Mm;DR(b);}a.D=b;if(b===null){$p=2;continue _;}W5(a);c=FK(a.cq,a.bF);d=c.fL;e=c.fI;$p=3;continue _;case 1:c.pu();if(C()){break _;}if(b===null&&a.A===null)b=LM();else if(b===null&&a.f.bT<=0){b=new Mm;DR(b);}a.D=b;if(b===null){$p=2;continue _;}W5(a);c
=FK(a.cq,a.bF);d=c.fL;e=c.fI;$p=3;continue _;case 2:AFk(a);if(C()){break _;}return;case 3:AP$(b,a,d,e);if(C()){break _;}a.h7=0;return;default:E$();}}C4().s(a,b,c,d,e,$p);}
function ARZ(a,b,c,d){var e,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=new UM;DR(e);e.qv=Ci();e.Et=b;e.Az=c;e.Ay=d;$p=1;case 1:ADW(a,e);if(C()){break _;}return;default:E$();}}C4().s(a,b,c,d,e,$p);}
function Ei(a,b){var c,d,e,f;BW();Be();c=BdB.getError();if(c==(-144))c=(-144);if(c){a:{switch(c){case -144:break;case 1280:d=B(167);break a;case 1281:d=B(168);break a;case 1282:d=B(169);break a;case 1285:d=B(170);break a;default:d=B(171);break a;}d=B(172);}Cg(Dz(),B(173));e=Dz();f=new U;W(f);Cg(e,V(I(I(f,B(174)),b)));b=Dz();e=new U;W(e);Cg(b,V(I(I(Bf(e,c),B(12)),d)));}}
function Yl(a){var b,c,d,e,f,g,h,i,j,$$je,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.gR=1;$p=1;case 1:AIp(a);if(C()){break _;}b=B_();c=0;if(!a.gR)return;BeF=0;BeG=0;if(!a.bs)FQ(a.bf);else{d=a.bf.cY;FQ(a.bf);a.bf.cY=d;}e=0;if(e<a.bf.i6){a.bN=a.bN+1|0;$p=2;continue _;}Ei(a,B(175));if(a.bs)a.bf.cY=1.0;Bb(3553);if(a.A!==null){f=a.A;$p=3;continue _;}if(!a.h7){GQ(a.cB,a.bf.cY);f=a.eV;d=a.bf.cY;$p
=4;continue _;}if(BN(33)&&BN(7))FZ(a);else a.gS=EF();$p=5;continue _;case 2:AFD(a);if(C()){break _;}e=e+1|0;if(e<a.bf.i6){a.bN=a.bN+1|0;continue _;}Ei(a,B(175));if(a.bs)a.bf.cY=1.0;Bb(3553);if(a.A!==null){f=a.A;$p=3;continue _;}if(!a.h7){GQ(a.cB,a.bf.cY);f=a.eV;d=a.bf.cY;$p=4;continue _;}if(BN(33)&&BN(7))FZ(a);else a.gS=EF();$p=5;continue _;case 3:$z=AIm(f);if(C()){break _;}g=$z;if(g){f=a.A;continue _;}if(!a.h7){GQ(a.cB,a.bf.cY);f=a.eV;d=a.bf.cY;$p=4;continue _;}if(BN(33)&&BN(7))FZ(a);else a.gS=EF();$p=5;continue _;case 4:AFO(f,
d);if(C()){break _;}if(BN(33)&&BN(7))FZ(a);else a.gS=EF();$p=5;case 5:XE();if(C()){break _;}$p=6;case 6:AUX();if(C()){break _;}if(!(Lq()==a.cq&&MD()==a.bF)){a.cq=Bdy.width;a.bF=Bdy.height;if(a.cq<=0)a.cq=1;if(a.bF<=0)a.bF=1;g=a.cq;h=a.bF;if(g<=0)g=1;if(h<=0)h=1;a.cq=g;a.bF=h;if(a.D!==null){f=FK(g,h);h=f.fL;g=f.fI;f=a.D;$p=8;continue _;}}if(a.o.ms){try{i=Long_fromInt(5);$p=7;continue _;}catch($$e){$$je=Y($$e);if($$je instanceof E0){f=$$je;}else{throw $$e;}}f.nB();}Ei(a,B(176));c=c+1|0;a.bs=a.D!==null&&a.D.oa()
?1:0;while(true){j=B_();i=Long_add(b,Long_fromInt(1000));if(Long_lt(j,i))break;f=new U;W(f);f=I(Bf(f,c),B(177));Tv();a.lA=V(I(Bf(f,BeH),B(178)));BeH=0;c=0;b=i;}if(!a.gR)return;BeF=0;BeG=0;if(!a.bs)FQ(a.bf);else{d=a.bf.cY;FQ(a.bf);a.bf.cY=d;}e=0;if(e<a.bf.i6){a.bN=a.bN+1|0;$p=2;continue _;}Ei(a,B(175));if(a.bs)a.bf.cY=1.0;Bb(3553);if(a.A!==null){f=a.A;$p=3;continue _;}if(!a.h7){GQ(a.cB,a.bf.cY);f=a.eV;d=a.bf.cY;$p=4;continue _;}if(BN(33)&&BN(7))FZ(a);else a.gS=EF();$p=5;continue _;case 7:a:{try{AKE(i);if(C())
{break _;}break a;}catch($$e){$$je=Y($$e);if($$je instanceof E0){f=$$je;}else{throw $$e;}}f.nB();}Ei(a,B(176));c=c+1|0;a.bs=a.D!==null&&a.D.oa()?1:0;while(true){j=B_();i=Long_add(b,Long_fromInt(1000));if(Long_lt(j,i))break;f=new U;W(f);f=I(Bf(f,c),B(177));Tv();a.lA=V(I(Bf(f,BeH),B(178)));BeH=0;c=0;b=i;}if(!a.gR)return;BeF=0;BeG=0;if(!a.bs)FQ(a.bf);else{d=a.bf.cY;FQ(a.bf);a.bf.cY=d;}e=0;if(e<a.bf.i6){a.bN=a.bN+1|0;$p=2;continue _;}Ei(a,B(175));if(a.bs)a.bf.cY=1.0;Bb(3553);if(a.A!==null){f=a.A;$p=3;continue _;}if
(!a.h7){GQ(a.cB,a.bf.cY);f=a.eV;d=a.bf.cY;$p=4;continue _;}if(BN(33)&&BN(7))FZ(a);else a.gS=EF();$p=5;continue _;case 8:AP$(f,a,h,g);if(C()){break _;}if(a.o.ms){try{i=Long_fromInt(5);$p=7;continue _;}catch($$e){$$je=Y($$e);if($$je instanceof E0){f=$$je;}else{throw $$e;}}f.nB();}Ei(a,B(176));c=c+1|0;a.bs=a.D!==null&&a.D.oa()?1:0;while(true){j=B_();i=Long_add(b,Long_fromInt(1000));if(Long_lt(j,i))break;f=new U;W(f);f=I(Bf(f,c),B(177));Tv();a.lA=V(I(Bf(f,BeH),B(178)));BeH=0;c=0;b=i;}if(!a.gR)return;BeF=0;BeG=0;if
(!a.bs)FQ(a.bf);else{d=a.bf.cY;FQ(a.bf);a.bf.cY=d;}e=0;if(e<a.bf.i6){a.bN=a.bN+1|0;$p=2;continue _;}Ei(a,B(175));if(a.bs)a.bf.cY=1.0;Bb(3553);if(a.A!==null){f=a.A;$p=3;continue _;}if(!a.h7){GQ(a.cB,a.bf.cY);f=a.eV;d=a.bf.cY;$p=4;continue _;}if(BN(33)&&BN(7))FZ(a);else a.gS=EF();$p=5;continue _;default:E$();}}C4().s(a,b,c,d,e,f,g,h,i,j,$p);}
function FZ(a){var b,c,d,e,f,g,h,i,j,k,l;if(Long_eq(a.gS,Long_fromInt(-1)))a.gS=EF();b=EF();c=BeB.data;d=BeC;BeC=d+1|0;c[d&(BeB.data.length-1|0)]=Long_sub(b,a.gS);a.gS=b;D5(256);Da(5889);C$();Ir(0.0,a.cq,a.bF,0.0,1000.0,3000.0);Da(5888);C$();Bw(0.0,0.0,(-2000.0));Bd(3553);BA();e=BeE;Gl(e,7);EQ(e,538968064);Bg(e,0.0,a.bF-100|0,0.0);Bg(e,0.0,a.bF,0.0);Bg(e,BeB.data.length,a.bF,0.0);Bg(e,BeB.data.length,a.bF-100|0,0.0);Bs(e);f=Long_ZERO;d=0;while(d<BeB.data.length){f=Long_add(f,BeB.data[d]);d=d+1|0;}d=Long_div(Long_div(f,
Long_fromInt(200000)),Long_fromInt(BeB.data.length)).lo;Gl(e,7);EQ(e,541065216);Bg(e,0.0,a.bF-d|0,0.0);Bg(e,0.0,a.bF,0.0);Bg(e,BeB.data.length,a.bF,0.0);Bg(e,BeB.data.length,a.bF-d|0,0.0);Bs(e);Gl(e,1);g=0;while(g<BeB.data.length){h=(((g-BeC|0)&(BeB.data.length-1|0))*255|0)/BeB.data.length|0;i=Bj(h,h)/255|0;d=Bj(i,i)/255|0;j=Bj(d,d)/255|0;EQ(e,(((-16777216)+(Bj(j,j)/255|0)|0)+(d*256|0)|0)+(h*4096|0)|0);k=Long_div(BeB.data[g],Long_fromInt(200000));l=g+0.5;Bg(e,l,Long_toNumber(Long_sub(Long_fromInt(a.bF),k))+
0.5,0.0);Bg(e,l,a.bF+0.5,0.0);g=g+1|0;}Bs(e);Bb(3553);}
function AFk(a){var b,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(Oj()&&!a.bp){a.bp=1;YC(a.ym);b=null;$p=1;continue _;}return;case 1:ADW(a,b);if(C()){break _;}a.cn=a.bN+10000|0;return;default:E$();}}C4().s(a,b,$p);}
function W5(a){if(a.bp){if(a.f!==null)ARJ(a.f);a.bp=0;AFB(a.ym);}}
function ALa(a){var b,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.D!==null)return;b=Bcj();$p=1;case 1:ADW(a,b);if(C()){break _;}return;default:E$();}}C4().s(a,b,$p);}
function AAI(a,b,c){var d,e,f,g,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!a.cB.DV&&!(!b&&a.c$>0)){if(c&&a.ce!==null&&!a.ce.k9&&!b){d=a.ce.h9;e=a.ce.h$;f=a.ce.h_;g=a.cB;b=a.ce.hJ;$p=1;continue _;}ALR(a.cB);}return;case 1:YP(g,d,e,f,b);if(C()){break _;}g=a.c6;b=a.ce.hJ;$p=2;case 2:Y4(g,d,e,f,b);if(C()){break _;}return;default:E$();}}C4().s(a,b,c,d,e,f,g,$p);}
function AB4(a,b){var c,d,e,f,g,h,i,j,k,l,m,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!(!b&&a.c$>0)){if(!b)Po(a.eV.iK);a:{if(a.ce!==null){if(a.ce.k9!=1){if(a.ce.k9)break a;c=a.ce.h9;d=a.ce.h$;e=a.ce.h_;f=a.ce.hJ;L();g=BeI.data;h=a.A;$p=1;continue _;}if(!b){h=a.f;i=a.ce.nC;$p=2;continue _;}if(b==1)Vu(a.f,a.ce.nC);}else if(!b&&!(a.cB instanceof Dv))a.c$=10;}if
(b==1){h=D9(a.f.K);if(h!==null){d=h.p;i=a.A;j=a.f;$p=5;continue _;}}}return;case 1:$z=ACy(h,c,d,e);if(C()){break _;}k=$z;j=g[k];if(!b){h=a.A;k=a.ce.hJ;$p=4;continue _;}l=D9(a.f.K);h=a.A;$p=3;continue _;case 2:ADx(h,i);if(C()){break _;}if(b==1)Vu(a.f,a.ce.nC);if(b==1){h=D9(a.f.K);if(h!==null){d=h.p;i=a.A;j=a.f;$p=5;continue _;}}return;case 3:$z=ACy(h,c,d,e);if(C()){break _;}k=$z;if(k>0){h=BeI.data[k];i=a.A;j=a.f;$p=6;continue _;}if(l===null)return;m=l.p;h=a.f;i=a.A;$p=8;continue _;case 4:ABM(h,c,d,e,k);if(C())
{break _;}if(j===BeJ&&a.f.AL<100){if(b==1){h=D9(a.f.K);if(h!==null){d=h.p;i=a.A;j=a.f;$p=5;continue _;}}return;}h=a.cB;$p=7;continue _;case 5:b:{$z=ABh(h,i,j);if(C()){break _;}i=$z;if(i===h){if(i===null)break b;if(i.p==d)break b;}a.f.K.bh.data[a.f.K.bL]=i;AM9(a.eV.iK);if(!i.p)a.f.K.bh.data[a.f.K.bL]=null;}return;case 6:$z=h.lD(i,c,d,e,j);if(C()){break _;}k=$z;if(k)return;if(l===null)return;m=l.p;h=a.f;i=a.A;$p=8;continue _;case 7:AE5(h,c,d,e);if(C()){break _;}if(b==1){h=D9(a.f.K);if(h!==null){d=h.p;i=a.A;j=
a.f;$p=5;continue _;}}return;case 8:$z=AJh(l,h,i,c,d,e,f);if(C()){break _;}c=$z;if(c)Po(a.eV.iK);if(!l.p)a.f.K.bh.data[a.f.K.bL]=null;else if(l.p!=m)AGM(a.eV.iK);if(b==1){h=D9(a.f.K);if(h!==null){d=h.p;i=a.A;j=a.f;$p=5;continue _;}}return;default:E$();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function AHM(a){var b,c,d,e,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.ce===null)return;b=a.A;c=a.ce.h9;d=a.ce.h$;e=a.ce.h_;$p=1;case 1:$z=ACy(b,c,d,e);if(C()){break _;}c=$z;L();if(c==BeK.b)c=BeL.b;if(c==BeM.b)c=BeN.b;if(c==BeJ.b)c=BeO.b;ARk(a.f.K,c,a.cB instanceof Dv);return;default:E$();}}C4().s(a,b,c,d,e,$p);}
function AFD(a){var b,c,d,e,f,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:AKy(a.nY);if(a.f!==null&&a.A!==null){b=ABs(a.A);if(b instanceof IJ)MV(b,EW(a.f.d|0)>>4,EW(a.f.e|0)>>4);}if(!a.bs&&a.A!==null){b=a.cB;$p=2;continue _;}c=3553;d=a.bo;b=B(179);$p=1;case 1:$z=AHv(d,b);if(C()){break _;}e=$z;Cp(c,e);if(a.D===null&&a.f!==null&&a.f.bT<=0){b=null;$p=3;continue _;}if(a.D!==null&&!a.D.pS){if(a.D!==null)a.cn=a.bN+10000|0;if(a.D!==
null){b=a.D;$p=4;continue _;}if(a.A!==null){a.A.i2=a.o.jY;if(!a.bs){b=a.eV;$p=7;continue _;}if(!a.bs)HW(a.dY);if(!a.bs){b=a.A;$p=13;continue _;}if(!a.bs&&!GG(a)){b=a.A;$p=19;continue _;}if(!a.bs){b=a.A;c=K(a.f.d);e=K(a.f.j);f=K(a.f.e);$p=18;continue _;}if(!a.bs){b=a.c6;$p=21;continue _;}}a.dB=B_();return;}a:while(true){if(!FA()){if(a.c$>0)a.c$=a.c$-1|0;while(true){if(!DV()){if(a.D===null){if(B$(0)&&(a.bN-a.cn|0)>=a.bf.c8/4.0&&a.bp){c=0;$p=12;continue _;}if(B$(1)&&(a.bN-a.cn|0)>=a.bf.c8/4.0&&a.bp){c=1;$p=15;continue _;}}c
=0;e=a.D===null&&B$(0)&&a.bp?1:0;$p=10;continue _;}Et(a.f,Bh(),CV());if(!CV())continue;if(a.D!==null){b=a.D;$p=6;continue _;}if(Bh()==1)break;if(a.cB instanceof Dv){Bh();Bh();}if(Bh()==33&&BN(6)){a.o.cC=a.o.cC?0:1;a.cU=a.cU?0:1;}if(Bh()==a.o.fs.bI){b=E6(a.f.K);$p=17;continue _;}if(Bh()==a.o.gi.bI){b=a.f;d=Em(a.f.K,a.f.K.bL,1);c=0;$p=20;continue _;}e=0;while(e<9){if(Bh()==(2+e|0))a.f.K.bL=e;e=e+1|0;}if(Bh()!=a.o.f9.bI)continue;Ea(a.o,4,!BN(42)&&!BN(54)?1:(-1));}$p=9;continue _;}if(Long_gt(Long_sub(B_(),a.dB),
Long_fromInt(200)))continue;c=G1();if(c)F7(a.f.K,c);b:{if(a.D!==null){if(a.D===null)break b;else{b=a.D;$p=5;continue _;}}if(!a.bp&&Cx()){$p=8;continue _;}if(!CW()&&Cx()){c=0;$p=11;continue _;}if(CW()==1&&Cx()){c=1;$p=14;continue _;}if(CW()==2&&Cx())break a;}}$p=16;continue _;case 2:AI3(b);if(C()){break _;}c=3553;d=a.bo;b=B(179);$p=1;continue _;case 3:ADW(a,b);if(C()){break _;}if(a.D!==null&&!a.D.pS){if(a.D!==null)a.cn=a.bN+10000|0;if(a.D!==null){b=a.D;$p=4;continue _;}if(a.A!==null){a.A.i2=a.o.jY;if(!a.bs){b
=a.eV;$p=7;continue _;}if(!a.bs)HW(a.dY);if(!a.bs){b=a.A;$p=13;continue _;}if(!a.bs&&!GG(a)){b=a.A;$p=19;continue _;}if(!a.bs){b=a.A;c=K(a.f.d);e=K(a.f.j);f=K(a.f.e);$p=18;continue _;}if(!a.bs){b=a.c6;$p=21;continue _;}}a.dB=B_();return;}c:while(true){if(!FA()){if(a.c$>0)a.c$=a.c$-1|0;while(true){if(!DV()){if(a.D===null){if(B$(0)&&(a.bN-a.cn|0)>=a.bf.c8/4.0&&a.bp){c=0;$p=12;continue _;}if(B$(1)&&(a.bN-a.cn|0)>=a.bf.c8/4.0&&a.bp){c=1;$p=15;continue _;}}c=0;e=a.D===null&&B$(0)&&a.bp?1:0;$p=10;continue _;}Et(a.f,
Bh(),CV());if(!CV())continue;if(a.D!==null){b=a.D;$p=6;continue _;}if(Bh()==1)break;if(a.cB instanceof Dv){Bh();Bh();}if(Bh()==33&&BN(6)){a.o.cC=a.o.cC?0:1;a.cU=a.cU?0:1;}if(Bh()==a.o.fs.bI){b=E6(a.f.K);$p=17;continue _;}if(Bh()==a.o.gi.bI){b=a.f;d=Em(a.f.K,a.f.K.bL,1);c=0;$p=20;continue _;}e=0;while(e<9){if(Bh()==(2+e|0))a.f.K.bL=e;e=e+1|0;}if(Bh()!=a.o.f9.bI)continue;Ea(a.o,4,!BN(42)&&!BN(54)?1:(-1));}$p=9;continue _;}if(Long_gt(Long_sub(B_(),a.dB),Long_fromInt(200)))continue;c=G1();if(c)F7(a.f.K,c);d:{if
(a.D!==null){if(a.D===null)break d;else{b=a.D;$p=5;continue _;}}if(!a.bp&&Cx()){$p=8;continue _;}if(!CW()&&Cx()){c=0;$p=11;continue _;}if(CW()==1&&Cx()){c=1;$p=14;continue _;}if(CW()==2&&Cx())break c;}}$p=16;continue _;case 4:AG8(b);if(C()){break _;}if(a.D!==null)a.D.rC();if(a.A!==null){a.A.i2=a.o.jY;if(!a.bs){b=a.eV;$p=7;continue _;}if(!a.bs)HW(a.dY);if(!a.bs){b=a.A;$p=13;continue _;}if(!a.bs&&!GG(a)){b=a.A;$p=19;continue _;}if(!a.bs){b=a.A;c=K(a.f.d);e=K(a.f.j);f=K(a.f.e);$p=18;continue _;}if(!a.bs){b=a.c6;$p
=21;continue _;}}a.dB=B_();return;case 5:ZB(b);if(C()){break _;}while(true){while(true){if(!FA()){if(a.c$>0)a.c$=a.c$-1|0;while(true){if(!DV()){if(a.D===null){if(B$(0)&&(a.bN-a.cn|0)>=a.bf.c8/4.0&&a.bp){c=0;$p=12;continue _;}if(B$(1)&&(a.bN-a.cn|0)>=a.bf.c8/4.0&&a.bp){c=1;$p=15;continue _;}}c=0;e=a.D===null&&B$(0)&&a.bp?1:0;$p=10;continue _;}Et(a.f,Bh(),CV());if(!CV())continue;if(a.D!==null){b=a.D;$p=6;continue _;}if(Bh()==1)break;if(a.cB instanceof Dv){Bh();Bh();}if(Bh()==33&&BN(6)){a.o.cC=a.o.cC?0:1;a.cU=
a.cU?0:1;}if(Bh()==a.o.fs.bI){b=E6(a.f.K);$p=17;continue _;}if(Bh()==a.o.gi.bI){b=a.f;d=Em(a.f.K,a.f.K.bL,1);c=0;$p=20;continue _;}e=0;while(e<9){if(Bh()==(2+e|0))a.f.K.bL=e;e=e+1|0;}if(Bh()!=a.o.f9.bI)continue;Ea(a.o,4,!BN(42)&&!BN(54)?1:(-1));}$p=9;continue _;}if(Long_gt(Long_sub(B_(),a.dB),Long_fromInt(200)))continue;else break;}c=G1();if(c)F7(a.f.K,c);if(a.D!==null){if(a.D===null)continue;else{b=a.D;continue _;}}if(!a.bp&&Cx()){$p=8;continue _;}if(!CW()&&Cx()){c=0;$p=11;continue _;}if(CW()==1&&Cx()){c=1;$p
=14;continue _;}if(CW()!=2)continue;if(!Cx())continue;else break;}$p=16;continue _;case 6:ASB(b);if(C()){break _;}while(true){e=0;while(e<9){if(Bh()==(2+e|0))a.f.K.bL=e;e=e+1|0;}if(Bh()==a.o.f9.bI)Ea(a.o,4,!BN(42)&&!BN(54)?1:(-1));while(true){if(!DV()){if(a.D===null){if(B$(0)&&(a.bN-a.cn|0)>=a.bf.c8/4.0&&a.bp){c=0;$p=12;continue _;}if(B$(1)&&(a.bN-a.cn|0)>=a.bf.c8/4.0&&a.bp){c=1;$p=15;continue _;}}c=0;e=a.D===null&&B$(0)&&a.bp?1:0;$p=10;continue _;}Et(a.f,Bh(),CV());if(!CV())continue;else break;}if(a.D!==null)
{b=a.D;continue _;}if(Bh()==1)break;if(a.cB instanceof Dv){Bh();Bh();}if(Bh()==33&&BN(6)){a.o.cC=a.o.cC?0:1;a.cU=a.cU?0:1;}if(Bh()==a.o.fs.bI){b=E6(a.f.K);$p=17;continue _;}if(Bh()!=a.o.gi.bI)continue;else{b=a.f;d=Em(a.f.K,a.f.K.bL,1);c=0;$p=20;continue _;}}$p=9;continue _;case 7:AIP(b);if(C()){break _;}if(!a.bs)HW(a.dY);if(!a.bs){b=a.A;$p=13;continue _;}if(!a.bs&&!GG(a)){b=a.A;$p=19;continue _;}if(a.bs){if(a.bs){a.dB=B_();return;}b=a.c6;$p=21;continue _;}b=a.A;c=K(a.f.d);e=K(a.f.j);f=K(a.f.e);$p=18;continue _;case 8:AFk(a);if
(C()){break _;}while(true){while(true){if(!FA()){if(a.c$>0)a.c$=a.c$-1|0;while(true){if(!DV()){if(a.D===null){if(B$(0)&&(a.bN-a.cn|0)>=a.bf.c8/4.0&&a.bp){c=0;$p=12;continue _;}if(B$(1)&&(a.bN-a.cn|0)>=a.bf.c8/4.0&&a.bp){c=1;$p=15;continue _;}}c=0;e=a.D===null&&B$(0)&&a.bp?1:0;$p=10;continue _;}Et(a.f,Bh(),CV());if(!CV())continue;if(a.D!==null){b=a.D;$p=6;continue _;}if(Bh()==1)break;if(a.cB instanceof Dv){Bh();Bh();}if(Bh()==33&&BN(6)){a.o.cC=a.o.cC?0:1;a.cU=a.cU?0:1;}if(Bh()==a.o.fs.bI){b=E6(a.f.K);$p=17;continue _;}if
(Bh()==a.o.gi.bI){b=a.f;d=Em(a.f.K,a.f.K.bL,1);c=0;$p=20;continue _;}e=0;while(e<9){if(Bh()==(2+e|0))a.f.K.bL=e;e=e+1|0;}if(Bh()!=a.o.f9.bI)continue;Ea(a.o,4,!BN(42)&&!BN(54)?1:(-1));}$p=9;continue _;}if(Long_gt(Long_sub(B_(),a.dB),Long_fromInt(200)))continue;else break;}c=G1();if(c)F7(a.f.K,c);if(a.D!==null){if(a.D===null)continue;else{b=a.D;$p=5;continue _;}}if(!a.bp&&Cx()){continue _;}if(!CW()&&Cx()){c=0;$p=11;continue _;}if(CW()==1&&Cx()){c=1;$p=14;continue _;}if(CW()!=2)continue;if(!Cx())continue;else break;}$p
=16;continue _;case 9:ALa(a);if(C()){break _;}while(true){if(a.cB instanceof Dv){Bh();Bh();}if(Bh()==33&&BN(6)){a.o.cC=a.o.cC?0:1;a.cU=a.cU?0:1;}if(Bh()==a.o.fs.bI){b=E6(a.f.K);$p=17;continue _;}if(Bh()==a.o.gi.bI){b=a.f;d=Em(a.f.K,a.f.K.bL,1);c=0;$p=20;continue _;}e=0;while(e<9){if(Bh()==(2+e|0))a.f.K.bL=e;e=e+1|0;}if(Bh()==a.o.f9.bI)Ea(a.o,4,!BN(42)&&!BN(54)?1:(-1));while(true){if(!DV()){if(a.D===null){if(B$(0)&&(a.bN-a.cn|0)>=a.bf.c8/4.0&&a.bp){c=0;$p=12;continue _;}if(B$(1)&&(a.bN-a.cn|0)>=a.bf.c8/4.0&&
a.bp){c=1;$p=15;continue _;}}c=0;e=a.D===null&&B$(0)&&a.bp?1:0;$p=10;continue _;}Et(a.f,Bh(),CV());if(!CV())continue;else break;}if(a.D!==null){b=a.D;$p=6;continue _;}if(Bh()!=1)continue;else break;}continue _;case 10:AAI(a,c,e);if(C()){break _;}if(a.D!==null)a.cn=a.bN+10000|0;if(a.D!==null){b=a.D;$p=4;continue _;}if(a.A!==null){a.A.i2=a.o.jY;if(!a.bs){b=a.eV;$p=7;continue _;}if(!a.bs)HW(a.dY);if(!a.bs){b=a.A;$p=13;continue _;}if(!a.bs&&!GG(a)){b=a.A;$p=19;continue _;}if(!a.bs){b=a.A;c=K(a.f.d);e=K(a.f.j);f
=K(a.f.e);$p=18;continue _;}if(!a.bs){b=a.c6;$p=21;continue _;}}a.dB=B_();return;case 11:AB4(a,c);if(C()){break _;}a.cn=a.bN;while(true){if(CW()==1&&Cx()){c=1;$p=14;continue _;}if(CW()==2&&Cx()){$p=16;continue _;}while(true){while(true){if(!FA()){if(a.c$>0)a.c$=a.c$-1|0;while(true){if(!DV()){if(a.D===null){if(B$(0)&&(a.bN-a.cn|0)>=a.bf.c8/4.0&&a.bp){c=0;$p=12;continue _;}if(B$(1)&&(a.bN-a.cn|0)>=a.bf.c8/4.0&&a.bp){c=1;$p=15;continue _;}}c=0;e=a.D===null&&B$(0)&&a.bp?1:0;$p=10;continue _;}Et(a.f,Bh(),CV());if
(!CV())continue;if(a.D!==null){b=a.D;$p=6;continue _;}if(Bh()==1)break;if(a.cB instanceof Dv){Bh();Bh();}if(Bh()==33&&BN(6)){a.o.cC=a.o.cC?0:1;a.cU=a.cU?0:1;}if(Bh()==a.o.fs.bI){b=E6(a.f.K);$p=17;continue _;}if(Bh()==a.o.gi.bI){b=a.f;d=Em(a.f.K,a.f.K.bL,1);c=0;$p=20;continue _;}e=0;while(e<9){if(Bh()==(2+e|0))a.f.K.bL=e;e=e+1|0;}if(Bh()!=a.o.f9.bI)continue;Ea(a.o,4,!BN(42)&&!BN(54)?1:(-1));}$p=9;continue _;}if(Long_gt(Long_sub(B_(),a.dB),Long_fromInt(200)))continue;else break;}c=G1();if(c)F7(a.f.K,c);if(a.D
===null)break;if(a.D===null)continue;else{b=a.D;$p=5;continue _;}}if(!a.bp&&Cx())break;if(CW())continue;if(!Cx())continue;else{c=0;continue _;}}$p=8;continue _;case 12:AB4(a,c);if(C()){break _;}a.cn=a.bN;if(B$(1)&&(a.bN-a.cn|0)>=a.bf.c8/4.0&&a.bp){c=1;$p=15;continue _;}c=0;e=a.D===null&&B$(0)&&a.bp?1:0;$p=10;continue _;case 13:APg(b);if(C()){break _;}if(!a.bs&&!GG(a)){b=a.A;$p=19;continue _;}if(a.bs){if(a.bs){a.dB=B_();return;}b=a.c6;$p=21;continue _;}b=a.A;c=K(a.f.d);e=K(a.f.j);f=K(a.f.e);$p=18;continue _;case 14:AB4(a,
c);if(C()){break _;}a.cn=a.bN;while(true){if(CW()==2&&Cx()){$p=16;continue _;}while(true){while(true){if(!FA()){if(a.c$>0)a.c$=a.c$-1|0;while(true){if(!DV()){if(a.D===null){if(B$(0)&&(a.bN-a.cn|0)>=a.bf.c8/4.0&&a.bp){c=0;$p=12;continue _;}if(B$(1)&&(a.bN-a.cn|0)>=a.bf.c8/4.0&&a.bp){c=1;$p=15;continue _;}}c=0;e=a.D===null&&B$(0)&&a.bp?1:0;$p=10;continue _;}Et(a.f,Bh(),CV());if(!CV())continue;if(a.D!==null){b=a.D;$p=6;continue _;}if(Bh()==1)break;if(a.cB instanceof Dv){Bh();Bh();}if(Bh()==33&&BN(6)){a.o.cC=a.o.cC
?0:1;a.cU=a.cU?0:1;}if(Bh()==a.o.fs.bI){b=E6(a.f.K);$p=17;continue _;}if(Bh()==a.o.gi.bI){b=a.f;d=Em(a.f.K,a.f.K.bL,1);c=0;$p=20;continue _;}e=0;while(e<9){if(Bh()==(2+e|0))a.f.K.bL=e;e=e+1|0;}if(Bh()!=a.o.f9.bI)continue;Ea(a.o,4,!BN(42)&&!BN(54)?1:(-1));}$p=9;continue _;}if(Long_gt(Long_sub(B_(),a.dB),Long_fromInt(200)))continue;else break;}c=G1();if(c)F7(a.f.K,c);if(a.D===null)break;if(a.D===null)continue;else{b=a.D;$p=5;continue _;}}if(!a.bp&&Cx())break;if(!CW()&&Cx()){c=0;$p=11;continue _;}if(CW()!=1)continue;if
(!Cx())continue;else{c=1;continue _;}}$p=8;continue _;case 15:AB4(a,c);if(C()){break _;}a.cn=a.bN;c=0;e=a.D===null&&B$(0)&&a.bp?1:0;$p=10;continue _;case 16:AHM(a);if(C()){break _;}while(true){while(true){if(!FA()){if(a.c$>0)a.c$=a.c$-1|0;while(true){if(!DV()){if(a.D===null){if(B$(0)&&(a.bN-a.cn|0)>=a.bf.c8/4.0&&a.bp){c=0;$p=12;continue _;}if(B$(1)&&(a.bN-a.cn|0)>=a.bf.c8/4.0&&a.bp){c=1;$p=15;continue _;}}c=0;e=a.D===null&&B$(0)&&a.bp?1:0;$p=10;continue _;}Et(a.f,Bh(),CV());if(!CV())continue;if(a.D!==null){b
=a.D;$p=6;continue _;}if(Bh()==1)break;if(a.cB instanceof Dv){Bh();Bh();}if(Bh()==33&&BN(6)){a.o.cC=a.o.cC?0:1;a.cU=a.cU?0:1;}if(Bh()==a.o.fs.bI){b=E6(a.f.K);$p=17;continue _;}if(Bh()==a.o.gi.bI){b=a.f;d=Em(a.f.K,a.f.K.bL,1);c=0;$p=20;continue _;}e=0;while(e<9){if(Bh()==(2+e|0))a.f.K.bL=e;e=e+1|0;}if(Bh()!=a.o.f9.bI)continue;Ea(a.o,4,!BN(42)&&!BN(54)?1:(-1));}$p=9;continue _;}if(Long_gt(Long_sub(B_(),a.dB),Long_fromInt(200)))continue;else break;}c=G1();if(c)F7(a.f.K,c);if(a.D!==null){if(a.D===null)continue;else
{b=a.D;$p=5;continue _;}}if(!a.bp&&Cx()){$p=8;continue _;}if(!CW()&&Cx()){c=0;$p=11;continue _;}if(CW()==1&&Cx()){c=1;$p=14;continue _;}if(CW()!=2)continue;if(!Cx())continue;else break;}continue _;case 17:ADW(a,b);if(C()){break _;}while(true){if(Bh()==a.o.gi.bI){b=a.f;d=Em(a.f.K,a.f.K.bL,1);c=0;$p=20;continue _;}e=0;while(e<9){if(Bh()==(2+e|0))a.f.K.bL=e;e=e+1|0;}if(Bh()==a.o.f9.bI)Ea(a.o,4,!BN(42)&&!BN(54)?1:(-1));while(true){if(!DV()){if(a.D===null){if(B$(0)&&(a.bN-a.cn|0)>=a.bf.c8/4.0&&a.bp){c=0;$p=12;continue _;}if
(B$(1)&&(a.bN-a.cn|0)>=a.bf.c8/4.0&&a.bp){c=1;$p=15;continue _;}}c=0;e=a.D===null&&B$(0)&&a.bp?1:0;$p=10;continue _;}Et(a.f,Bh(),CV());if(!CV())continue;else break;}if(a.D!==null){b=a.D;$p=6;continue _;}if(Bh()==1)break;if(a.cB instanceof Dv){Bh();Bh();}if(Bh()==33&&BN(6)){a.o.cC=a.o.cC?0:1;a.cU=a.cU?0:1;}if(Bh()!=a.o.fs.bI)continue;else{b=E6(a.f.K);continue _;}}$p=9;continue _;case 18:AE_(b,c,e,f);if(C()){break _;}if(a.bs){a.dB=B_();return;}b=a.c6;$p=21;continue _;case 19:X7(b);if(C()){break _;}if(a.bs){if
(a.bs){a.dB=B_();return;}b=a.c6;$p=21;continue _;}b=a.A;c=K(a.f.d);e=K(a.f.j);f=K(a.f.e);$p=18;continue _;case 20:AQw(b,d,c);if(C()){break _;}while(true){e=0;while(e<9){if(Bh()==(2+e|0))a.f.K.bL=e;e=e+1|0;}if(Bh()==a.o.f9.bI)Ea(a.o,4,!BN(42)&&!BN(54)?1:(-1));while(true){if(!DV()){if(a.D===null){if(B$(0)&&(a.bN-a.cn|0)>=a.bf.c8/4.0&&a.bp){c=0;$p=12;continue _;}if(B$(1)&&(a.bN-a.cn|0)>=a.bf.c8/4.0&&a.bp){c=1;$p=15;continue _;}}c=0;e=a.D===null&&B$(0)&&a.bp?1:0;$p=10;continue _;}Et(a.f,Bh(),CV());if(!CV())continue;else break;}if
(a.D!==null){b=a.D;$p=6;continue _;}if(Bh()==1)break;if(a.cB instanceof Dv){Bh();Bh();}if(Bh()==33&&BN(6)){a.o.cC=a.o.cC?0:1;a.cU=a.cU?0:1;}if(Bh()==a.o.fs.bI){b=E6(a.f.K);$p=17;continue _;}if(Bh()!=a.o.gi.bI)continue;else{b=a.f;d=Em(a.f.K,a.f.K.bL,1);c=0;continue _;}}$p=9;continue _;case 21:AAZ(b);if(C()){break _;}a.dB=B_();return;default:E$();}}C4().s(a,b,c,d,e,f,$p);}
function GG(a){return 0;}
function AHX(a,b){var c,d,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=null;$p=1;case 1:ABN(a,c);if(C()){break _;}c=new F0;d=GA(new DB);$p=2;case 2:Q2(c,b,d);if(C()){break _;}if(!c.tE){b=B(180);$p=3;continue _;}b=B(181);$p=4;continue _;case 3:AF4(a,c,b);if(C()){break _;}return;case 4:AF4(a,c,b);if(C()){break _;}return;default:E$();}}C4().s(a,b,c,d,$p);}
function ABN(a,b){var c,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=B(3);$p=1;case 1:AF4(a,b,c);if(C()){break _;}return;default:E$();}}C4().s(a,b,c,$p);}
function AF4(a,b,c){var d,e,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.A!==null){d=a.A;e=a.ir;$p=1;continue _;}a.A=b;if(b===null){a.dB=Long_ZERO;return;}b.C8=a.e_;a.f=null;b.bg=a.f;$p=2;continue _;case 1:AJi(d,e);if(C()){break _;}a.A=b;if(b===null){a.dB=Long_ZERO;return;}b.C8=a.e_;a.f=null;b.bg=a.f;$p=2;case 2:AN1(a,c);if(C()){break _;}if(a.f===null){a.f=A6D(a,b,a.k1);c=a.f;$p=3;continue _;}a.f.hW=V7(a.o);if(a.dY!==null)Q5(a.dY,
b);if(a.c6!==null)O5(a.c6,b);b.bg=a.f;$p=4;continue _;case 3:AK8(c);if(C()){break _;}Rh(a.cB,a.f);a.f.hW=V7(a.o);if(a.dY!==null)Q5(a.dY,b);if(a.c6!==null)O5(a.c6,b);b.bg=a.f;$p=4;case 4:AGq(b);if(C()){break _;}if(!b.tE){a.dB=Long_ZERO;return;}c=a.ir;$p=5;case 5:AJi(b,c);if(C()){break _;}a.dB=Long_ZERO;return;default:E$();}}C4().s(a,b,c,d,e,$p);}
function AN1(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:AO2(a.ir,b);b=a.ir;c=B(182);$p=1;case 1:AR7(b,c);if(C()){break _;}d=128;e=289;f=(-128);g=f;while(g<=d){h=a.A.fk;i=a.A.fj;if(a.A.bg!==null){h=a.A.bg.d|0;i=a.A.bg.e|0;}j=f;if(j<=d){b=a.ir;k=0+1|0;l=(0*100|0)/e|0;$p=4;continue _;}g=g+16|0;}b=a.ir;c=B(183);$p=2;case 2:AR7(b,
c);if(C()){break _;}l=2000;BeP=1;d=0;if(d>=l){BeP=0;return;}b=a.A;m=1;$p=3;case 3:ABt(b,m);if(C()){break _;}d=d+1|0;if(d>=l){BeP=0;return;}b=a.A;m=1;continue _;case 4:XK(b,l);if(C()){break _;}b=a.A;l=h+g|0;m=64;n=i+j|0;$p=5;case 5:ACy(b,l,m,n);if(C()){break _;}b=a.A;$p=6;case 6:$z=AIm(b);if(C()){break _;}l=$z;if(l){b=a.A;continue _;}j=j+16|0;m=k;while(true){if(j<=d){b=a.ir;k=m+1|0;l=(m*100|0)/e|0;$p=4;continue _;}g=g+16|0;if(g>d)break;h=a.A.fk;i=a.A.fj;if(a.A.bg!==null){h=a.A.bg.d|0;i=a.A.bg.e|0;}j=f;}b=a.ir;c
=B(183);$p=2;continue _;default:E$();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function Mh(a){return ALl(a.dY);}
function Oo(a){return X5(a.dY);}
function ML(a){var b;b=new U;W(b);return V(I(I(I(I(b,B(184)),XA(a.c6)),B(185)),AN$(a.A)));}
function ASy(a){var b,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.f!==null&&a.A!==null){b=a.f;$p=5;continue _;}b=a.A;$p=1;case 1:AP6(b);if(C()){break _;}a.f=A6D(a,a.A,a.k1);b=a.f;$p=2;case 2:AK8(b);if(C()){break _;}Rh(a.cB,a.f);if(a.A!==null){a.A.bg=a.f;b=a.A;$p=4;continue _;}a.f.hW=V7(a.o);b=B(186);$p=3;case 3:AN1(a,b);if(C()){break _;}return;case 4:AGq(b);if(C()){break _;}a.f.hW=V7(a.o);b=B(186);$p=3;continue _;case 5:Cb(b);if(C()){break _;}b=a.A;$p=1;continue _;default:
E$();}}C4().s(a,b,$p);}
function AIH(){return Bc3;}
function Z1(){BeB=$rt_createLongArray(512);BeC=0;}
function ZH(){D.call(this);}
function BeQ(){var a=new ZH();A24(a);return a;}
function A24(a){return;}
function Oj(){var b,c;Be();b=document.pointerLockElement!=null?1:0;c=Beb;Beb=b;if(!c&&b){BdR=0.0;BdS=0.0;}a:{b:{if(BdW){if(!c)break b;if(b)break b;}c=0;break a;}c=1;}return c;}
function AUX(){var b,c,d,e,f,g,h,i,$$je,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:Be();ANB(BdB);b=Bdz;c=BdA;d=Bdy.width;e=Bdy.height;b.drawImage(c,0.0,0.0,d,e);f=Bdy.clientWidth;g=Bdy.clientHeight;if(!(f==BdT&&g==BdU)){BdT=f;BdU=g;c=BdA;h=f;c.width=h;c=BdA;h=g;c.height=h;}try{i=Long_fromInt(1);$p=1;continue _;}catch($$e){$$je=Y($$e);if($$je instanceof E0){}else{throw $$e;}}return;case 1:a:{try{AKE(i);if(C())
{break _;}break a;}catch($$e){$$je=Y($$e);if($$je instanceof E0){}else{throw $$e;}}}return;default:E$();}}C4().s(b,c,d,e,f,g,h,i,$p);}
function Mk(){var a=this;D.call(a);a.ok=null;a.F4=null;a.GA=null;}
var BeR=null;function Bbc(){Bbc=Br(Mk);A_w();}
function A_w(){var b;BeR=Ci();b=BeR;L();S(b,BeO);S(BeR,BeS);S(BeR,BeT);S(BeR,BeL);S(BeR,BeU);S(BeR,BeV);S(BeR,BeW);S(BeR,BeX);S(BeR,BeN);S(BeR,BeY);S(BeR,BeZ);S(BeR,Be0);S(BeR,Be1);S(BeR,Be2);S(BeR,Be3);S(BeR,Be4);S(BeR,Be5);S(BeR,Be6);S(BeR,Be7);S(BeR,Be8);S(BeR,Be9);S(BeR,Be$);S(BeR,Be_);S(BeR,Bfa);S(BeR,Bfb);S(BeR,Bfc);S(BeR,Bfd);S(BeR,Bfe);ABP(Dz(),BeR.s);}
function Go(){var a=this;D.call(a);a.JG=Long_ZERO;a.Eg=0;a.DO=Long_ZERO;a.w1=0;a.mR=null;a.CT=null;a.FP=null;a.wC=0;a.yE=null;}
var Bff=null;var BcY=null;var Bfg=Long_ZERO;var Bfh=0;function Bfi(){var a=new Go();AHD(a);return a;}
function Bb$(a){var b=new Go();TW(b,a);return b;}
function A_0(a,b){var c=new Go();N6(c,a,b);return c;}
function AHD(a){N6(a,null,null);}
function TW(a,b){N6(a,null,b);}
function N6(a,b,c){var d;a.mR=new D;a.wC=1;a.FP=c;a.yE=b;d=Bfg;Bfg=Long_add(d,Long_fromInt(1));a.JG=d;}
function Tq(a){var b;b=new WC;b.zT=a;AZL(b);}
function Fv(b){if(BcY!==b)BcY=b;BcY.DO=B_();}
function ARo(a){var b,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.yE===null)return;b=a.yE;$p=1;case 1:Yl(b);if(C()){break _;}return;default:E$();}}C4().s(a,b,$p);}
function ASL(){return BcY;}
function A1j(a,b){a.Eg=b;}
function XE(){var b,c,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:b=BcY;c=b.w1+1|0;b.w1=c;if(c<30)return;BcY.w1=0;if(Long_ge(Long_add(b.DO,Long_fromInt(100)),B_()))return;$p=1;case 1:ALP(b);if(C()){break _;}return;default:E$();}}C4().s(b,c,$p);}
function ALP(b){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.Gq=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.IY=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=BaA(callback);return thread.suspend(function(){try{A3T(b,callback);}catch($e){callback.IY($rt_exception($e));}});}
function A3T(b,c){var d;d=new S3;d.B$=b;d.B9=c;Q3(d);}
function AKE(b){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.Gq=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.IY=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=BaA(callback);return thread.suspend(function(){try{AVs(b,callback);}catch($e){callback.IY($rt_exception($e));}});}
function AVs(b,c){var d,e;d=BcY;e=new Pk;e.wo=d;e.A9=c;e.Jq=AFG(e,Long_ge(b,Long_fromInt(2147483647))?2147483647:b.lo);d.CT=e;}
function Y9(){Bff=Bb$(B(187));BcY=Bff;Bfg=Long_fromInt(1);Bfh=1;}
function DO(){}
function W$(){D.call(this);}
function Bfj(){var a=new W$();A2j(a);return a;}
function A2j(a){return;}
function ASC(a,b){b.preventDefault();b.stopPropagation();}
function ACk(a,b){ASC(a,b);}
function A$Q(a,b){ACk(a,b);}
function Xe(){D.call(this);}
function Bfk(){var a=new Xe();AZf(a);return a;}
function AZf(a){return;}
function ARF(a,b){var c,d;c=b.button;d=RP();if(c==1)c=2;else if(c==2)c=1;d.data[c]=1;Fx(MO(),b);b.preventDefault();b.stopPropagation();Ms();}
function AIW(a,b){ARF(a,b);}
function AXH(a,b){AIW(a,b);}
function Xf(){D.call(this);}
function Bfl(){var a=new Xf();AXh(a);return a;}
function AXh(a){return;}
function AQs(a,b){var c,d;c=b.button;d=RP();if(c==1)c=2;else if(c==2)c=1;d.data[c]=0;Fx(MO(),b);b.preventDefault();b.stopPropagation();}
function ZS(a,b){AQs(a,b);}
function A3y(a,b){ZS(a,b);}
function Xc(){D.call(this);}
function Bfm(){var a=new Xc();A43(a);return a;}
function A43(a){return;}
function AOF(a,b){var c;Be();BdP=b.offsetX;BdQ=Bdy.clientHeight-b.offsetY|0;c=b.movementX;BdR=BdR+c;c= -b.movementY;BdS=BdS+c;b.preventDefault();b.stopPropagation();}
function ADn(a,b){AOF(a,b);}
function ASN(a,b){ADn(a,b);}
function Xd(){D.call(this);}
function Bfn(){var a=new Xd();A_I(a);return a;}
function A_I(a){return;}
function AEK(a,b){P5().data[S$(QG(b))]=1;Fx(NN(),b);b.preventDefault();b.stopPropagation();Ms();}
function AQC(a,b){AEK(a,b);}
function A3J(a,b){AQC(a,b);}
function Xa(){D.call(this);}
function Bfo(){var a=new Xa();A36(a);return a;}
function A36(a){return;}
function ZD(a,b){P5().data[S$(QG(b))]=0;Fx(NN(),b);b.preventDefault();b.stopPropagation();}
function XZ(a,b){ZD(a,b);}
function A2h(a,b){XZ(a,b);}
function Xb(){D.call(this);}
function Bfp(){var a=new Xb();AXv(a);return a;}
function AXv(a){return;}
function AR_(a,b){Be();if(BdV&&(b.repeat?1:0))Fx(NN(),b);b.preventDefault();b.stopPropagation();}
function AK2(a,b){AR_(a,b);}
function A6s(a,b){AK2(a,b);}
function W_(){D.call(this);}
function Bfq(){var a=new W_();A22(a);return a;}
function A22(a){return;}
function AFm(a,b){Fx(MO(),b);b.preventDefault();b.stopPropagation();}
function ACz(a,b){AFm(a,b);}
function AUi(a,b){ACz(a,b);}
function QC(){D.call(this);}
function Bfr(){var a=new QC();A1_(a);return a;}
function A1_(a){return;}
function AFo(a,b){SY(0);}
function AMs(a,b){AFo(a,b);}
function A64(a,b){AMs(a,b);}
function QB(){D.call(this);}
function Bfs(){var a=new QB();A31(a);return a;}
function A31(a){return;}
function AGP(a,b){SY(1);Ms();}
function AMr(a,b){AGP(a,b);}
function AYI(a,b){AMr(a,b);}
function NU(){D.call(this);}
var Bft=null;var Bey=null;function Bfu(){var a=new NU();AD$(a);return a;}
function AD$(a){return;}
function AJO(){var b,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();b=$T.l();}_:while(true){switch($p){case 0:b=B(188);$p=1;case 1:$z=A3E(b);if(C()){break _;}b=$z;if(b===null){Bft=B(171);return Bfv;}if(b.E4)return Bfw;if(!b.Ff&&b.xU!==null){Bey=b.xU;return Bfx;}Bft=b.uA!==null?b.uA:B(189);return Bfv;default:E$();}}C4().s(b,$p);}
function AJb(b){var c,d,e,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:c=Bey;$p=1;case 1:$z=AUu(c,b);if(C()){break _;}c=$z;if(c!==Bfy?0:1)return;d=LG(b,47);if(d>0){c=Ev(b,0,d);$p=3;continue _;}c=Bey;d=1;e=new ArrayBuffer(0);$p=2;case 2:AXR(c,b,d,e);if(C()){break _;}return;case 3:AJb(c);if(C()){break _;}c=Bey;d=1;e=new ArrayBuffer(0);$p=2;continue _;default:E$();}}C4().s(b,c,d,e,$p);}
function AHF(){Bft=B(3);Bey=null;}
function AAX(){D.call(this);}
function AYq(){var Context=window.AudioContext||window.webkitAudioContext;return new Context();}
function U0(){D.call(this);}
var Bex=null;function Bfz(){var a=new U0();AQv(a);return a;}
function AQv(a){return;}
function AMb(b){var c,d,e,f,g,h,i,j,k,l,m;c=Ur(b);d=O2(c);e=$rt_createByteArray(8);NR(d,e);if(!DC(B(190),A23(e,X8(B(24))))){c=new BT;Bo(c,B(191));M(c);}GU(d);f=new P4;d=new WS;g=new Up;OT(g);g.o1=0;h=R8(g,15,0);if(h){c=new P8;f=new U;W(f);Bo(c,V(I(I(Bf(f,h),B(12)),g.b9)));M(c);}R9(d,c);d.lN=0;d.oI=0;d.ye=1;d.xY=0;d.wF=$rt_createByteArray(1);d.GZ=$rt_createByteArray(512);d.gj=g;d.oj=$rt_createByteArray(512);d.ye=1;d.xY=1;AIv(f,d);g=BaR();while(true){d=GU(f);if(!DC(B(192),d)){if(AKB(f)<=0&&DC(B(193),d))return;c
=new BT;Bo(c,B(191));M(c);}i=GU(f);j=$rt_createByteArray(20);k=$rt_createByteArray(20);NR(f,j);l=H9(f);m=$rt_createByteArray(l);NR(f,m);if(D0(Bex,i))continue;a:{ADU(g,m,0,l);AL_(g,k,0);if(j===k)h=1;else{if(j!==null&&k!==null){b=j.data;e=k.data;h=b.length;if(h==e.length){l=0;while(l<h){if(b[l]!=e[l]){h=0;break a;}l=l+1|0;}h=1;break a;}}h=0;}}if(!h){c=new BT;f=new U;W(f);Bo(c,V(I(I(f,B(194)),i)));M(c);}BP(Bex,i,m);if(!DC(B(195),GU(f)))break;}c=new BT;Bo(c,B(191));M(c);}
function Zf(){Bex=Df();}
function BT(){BD.call(this);}
function BfA(){var a=new BT();A3Q(a);return a;}
function A3Q(a){P(a);}
function Lg(){HO.call(this);}
function BfB(){var a=new Lg();A6f(a);return a;}
function A6f(a){W(a);}
function A0M(a,b){DQ(a,b);return a;}
function A19(a,b,c,d){I0(a,b,c,d);return a;}
function AVF(a,b){Hk(a,b);return a;}
function A7y(a,b,c,d,e){J9(a,b,c,d,e);return a;}
function A$M(a,b,c){K1(a,b,c);return a;}
function AVZ(a,b,c,d,e){J9(a,b,c,d,e);return a;}
function A3_(a,b,c,d){I0(a,b,c,d);return a;}
function AIe(a,b){var c;if(b>=0&&b<a.bY)return a.O.data[b];c=new BS;P(c);M(c);}
function OA(a){return a.bY;}
function A4g(a){return V(a);}
function A4q(a,b){MZ(a,b);}
function A93(a,b,c){K1(a,b,c);return a;}
function FB(){}
function V6(){D.call(this);}
function BfC(){var a=new V6();AZj(a);return a;}
function AZj(a){return;}
function Fi(){D.call(this);this.l4=0;}
var BfD=null;var BfE=null;var BfF=null;var BfG=null;var BfH=null;var BfI=null;function A2g(a){var b=new Fi();AAS(b,a);return b;}
function AAS(a,b){a.l4=b;}
function BI(b){var c;if(b>=BfG.data.length)return A2g(b);c=BfG.data[b];if(c===null){c=A2g(b);BfG.data[b]=c;}return c;}
function A$U(a,b){if(a===b)return 1;return b instanceof Fi&&b.l4==a.l4?1:0;}
function A$C(a){return a.l4;}
function SI(b){var c,d;c=new B4;d=$rt_createCharArray(1);d.data[0]=b;Tu(c,d);return c;}
function Mv(b){return b>=65536&&b<=1114111?1:0;}
function Du(b){return (b&64512)!=55296?0:1;}
function DS(b){return (b&64512)!=56320?0:1;}
function Ot(b){return !Du(b)&&!DS(b)?0:1;}
function J8(b,c){return Du(b)&&DS(c)?1:0;}
function EH(b,c){return ((b&1023)<<10|c&1023)+65536|0;}
function IG(b){return (55296|(b-65536|0)>>10&1023)&65535;}
function Ib(b){return (56320|b&1023)&65535;}
function ES(b){return GO(b)&65535;}
function GO(b){return AP3(b).toLowerCase().charCodeAt(0);}
function FF(b){return GN(b)&65535;}
function GN(b){return AP3(b).toUpperCase().charCodeAt(0);}
function Wm(b,c){if(c>=2&&c<=36){b=Uj(b);if(b>=c)b=(-1);}else b=(-1);return b;}
function Uj(b){var c,d,e,f,g,h,i,j,k;if(BfE===null){if(BfH===null)BfH=AMg();c=(BfH.value!==null?$rt_str(BfH.value):null);d=new RZ;d.CD=Nw(c);e=Yo(d);f=$rt_createIntArray(e);g=f.data;h=0;while(h<e){g[h]=Yo(d);h=h+1|0;}BfE=f;}f=BfE.data;h=0;i=(f.length/2|0)-1|0;while(i>=h){j=(h+i|0)/2|0;e=j*2|0;k=R(b,f[e]);if(k>0)h=j+1|0;else{if(k>=0)return f[e+1|0];i=j-1|0;}}return (-1);}
function I5(b,c){if(c>=2&&c<=36&&b<c)return b<10?(48+b|0)&65535:((97+b|0)-10|0)&65535;return 0;}
function Iz(b){var c,d;if(b<65536){c=$rt_createCharArray(1);c.data[0]=b&65535;return c;}c=$rt_createCharArray(2);d=c.data;d[0]=IG(b);d[1]=Ib(b);return c;}
function Do(b){var c,d,e,f,g;c=b>0&&b<=65535?1:0;if(c&&Ot(b&65535))return 19;if(BfF===null){if(BfI===null)BfI=AHL();BfF=A2J((BfI.value!==null?$rt_str(BfI.value):null));}d=BfF.data;e=0;c=d.length-1|0;while(e<=c){f=(e+c|0)/2|0;g=d[f];if(b>=g.Ap)e=f+1|0;else{if(b>=g.xe)return g.C4.data[b-g.xe|0];c=f-1|0;}}return 0;}
function Lc(b){a:{switch(Do(b)){case 1:case 2:case 3:case 4:case 5:case 9:break;case 6:case 7:case 8:break a;default:break a;}return 1;}return 0;}
function Ix(b){a:{if(!(b>=0&&b<=8)&&!(b>=14&&b<=27)){if(b<127)break a;if(b>159)break a;}return 1;}return Do(b)!=16?0:1;}
function UA(b){switch(Do(b)){case 12:case 13:case 14:break;default:return 0;}return 1;}
function Qj(b){switch(b){case 9:case 10:case 11:case 12:case 13:case 28:case 29:case 30:case 31:break;case 160:case 8199:case 8239:return 0;default:return UA(b);}return 1;}
function ADf(a,b){return a.l4-b.l4|0;}
function A29(a,b){return ADf(a,b);}
function AIU(){BfD=F($rt_charcls());BfG=J(Fi,128);}
function AMg(){return {"value":"oD#*% .%%2%)6%-:%1>%5B%9F%=J%AN%Eo%Is%Mw%Q{%U!\'Y&\'^*\'b.\'f2\'j6\'n:\'r>\'vB\'zF\'!#J\'&#N\'*#R\'.#V\'2#Z\'6#_\':#c\'>#g\'B#k\'F#o\'J#s\'N#w\'R#6)I:)M>)QB)UF)YJ)^N)bR)fV)jZ)n_)rc)vg)zk)!#o)&#s)*#w).#{)2#!+6#&+:#*+>#.+B#2+F#6+J#:+N#>+R#{R# !T#%&T#)*T#-.T#12T#56T#9:T#=>T#ABT#E6a# :a#%>a#)Ba#-Fa#1Ja#5Na#9Ra#=Va#AZa#E:s# >s#%Bs#)Fs#-Js#1Ns#5Rs#9Vs#=Zs#A_s#EZ:% _:%%c:%)g:%-k:%1o:%5s:%9w:%={:%A!<%E2F% 6F%%:F%)>F%-BF%1FF%5JF%9NF%=RF%AVF%EgP% kP%%oP%)sP%-wP%1{P%5!R%9&R%=*R%A.R%E>]% B]%%F]%)J]%-N]%1R]%5V]%9Z]%=_]%Ac]%Esg% wg%%{g%)!i%-&"
+"i%1*i%5.i%92i%=6i%A:i%EJs% Ns%%Rs%)Vs%-Zs%1_s%5cs%9gs%=ks%Aos%E!!\' &!\'%*!\').!\'-2!\'16!\'5:!\'9>!\'=B!\'AF!\'EV,\' Z,\'%_,\')c,\'-g,\'1k,\'5o,\'9s,\'=w,\'A{,\'E.8\' 28\'%68\'):8\'->8\'1B8\'5F8\'9J8\'=N8\'AR8\'EcB\' gB\'%kB\')oB\'-sB\'1wB\'5{B\'9!D\'=&D\'A*D\'E>L\' BL\'%FL\')JL\'-NL\'1RL\'5VL\'9ZL\'=_L\'AcL\'EsV\' wV\'%{V\')!X\'-&X\'1*X\'5.X\'92X\'=6X\'A:X\'EB_\' F_\'%J_\')N_\'-R_\'1V_\'5Z_\'9__\'=c_\'Ag_\'Esw\' ww\'%{w\')!y\'-&y\'1*y\'5.y\'92y\'=6y\'A:y\'EB!) F!)%J!))N!)-R!)1V!)5Z!)9_!)=c!)Ag!)Egi+ ki+%oi+)si+-wi+1{i+5!k+9&k+=*k+A.k+Eom+ sm+%wm+){m+-!o+1&o+5*o+9.o+=2o+A6o+E>,- B,-%F"
+",-)J,--N,-1R,-5V,-9Z,-=_,-Ac,-E>8- B8-%F8-)J8--N8-1R8-5V8-9Z8-=_8-Ac8-E{F- !H-%&H-)*H--.H-12H-56H-9:H-=>H-ABH-E_H- cH-%gH-)kH--oH-1sH-5wH-9{H-=!J-A&J-E!Z- &Z-%*Z-).Z--2Z-16Z-5:Z-9>Z-=BZ-AFZ-E2c- 6c-%:c-)>c--Bc-1Fc-5Jc-9Nc-=Rc-AVc-EJo- No-%Ro-)Vo--Zo-1_o-5co-9go-=ko-Aoo-E.q- 2q-%6q-):q-->q-1Bq-5Fq-9Jq-=Nq-ARq-E&4r *4r%.4r)24r-64r1:4r5>4r9B4r=F4rAJ4rE{or !qr%&qr)*qr-.qr12qr56qr9:qr=>qrABqrE&ur *ur%.ur)2ur-6ur1:ur5>ur9Bur=FurAJurE**t .*t%2*t)6*t-:*t1>*t5B*t9F*t=J*tAN*tEN,t R,t%V,t)Z,t-_,t1c,t5g,t9k,t=o,tAs,tE_"
+"4t c4t%g4t)k4t-o4t1s4t5w4t9{4t=!6tA&6tEgXt kXt%oXt)sXt-wXt1{Xt5!Zt9&Zt=*ZtA.ZtE{c@# !e@#%&e@#)*e@#-.e@#12e@#56e@#9:e@#=>e@#ABe@#Ece@#Ige@#Mke@#Qoe@#Use@#Ywe@#^{e@#b!g@#f&g@#j*g@#n.g@#r2g@#v6g@#z:g@#!#>g@#&#Bg@#*#Fg@#.#Jg@#2#Ng@#6#Rg@#:#Vg@#>#Zg@#B#_g@#F#cg@#J#gg@#N#kg@#R#*i@#I.i@#M2i@#Q6i@#U:i@#Y>i@#^Bi@#bFi@#fJi@#jNi@#nRi@#rVi@#vZi@#z_i@#!#ci@#&#gi@#*#ki@#.#oi@#2#si@#6#wi@#:#{i@#>#!k@#B#&k@#F#*k@#J#.k@#N#2k@#R#s&D# w&D#%{&D#)!(D#-&(D#1*(D#5.(D#92(D#=6(D#A:(D#E2.H# 6.H#%:.H#)>.H#-B.H#1F.H#5J.H#9N.H#=R.H#AV."
+"H#EwuH# {uH#%!wH#)&wH#-*wH#1.wH#52wH#96wH#=:wH#A>wH#Ew$J# {$J#%!&J#)&&J#-*&J#1.&J#52&J#96&J#=:&J#A>&J#E{*J# !,J#%&,J#)*,J#-.,J#12,J#56,J#9:,J#=>,J#AB,J#E_8J# c8J#%g8J#)k8J#-o8J#1s8J#5w8J#9{8J#=!:J#A&:J#E2RJ# 6RJ#%:RJ#)>RJ#-BRJ#1FRJ#5JRJ#9NRJ#=RRJ#AVRJ#ENqJ# RqJ#%VqJ#)ZqJ#-_qJ#1cqJ#5gqJ#9kqJ#=oqJ#AsqJ#E&}J# *}J#%.}J#)2}J#-6}J#1:}J#5>}J#9B}J#=F}J#AJ}J#Eg@L# k@L#%o@L#)s@L#-w@L#1{@L#5!BL#9&BL#=*BL#A.BL#EZJL# _JL#%cJL#)gJL#-kJL#1oJL#5sJL#9wJL#={JL#A!LL#ENTL# RTL#%VTL#)ZTL#-_TL#1cTL#5gTL#9kTL#=oTL#AsTL#E:{L# >{L#"
+"%B{L#)F{L#-J{L#1N{L#5R{L#9V{L#=Z{L#A_{L#ERkN# VkN#%ZkN#)_kN#-ckN#1gkN#5kkN#9okN#=skN#AwkN#E_$P# c$P#%g$P#)k$P#-o$P#1s$P#5w$P#9{$P#=!&P#A&&P#E.,P# 2,P#%6,P#):,P#->,P#1B,P#5F,P#9J,P#=N,P#AR,P#EFau# Jau#%Nau#)Rau#-Vau#1Zau#5_au#9cau#=gau#Akau#Eouu# suu#%wuu#){uu#-!wu#1&wu#5*wu#9.wu#=2wu#A6wu#EF0N% J0N%%N0N%)R0N%-V0N%1Z0N%5_0N%9c0N%=g0N%Ak0N%Eo0N% s0N%%w0N%){0N%-!2N%1&2N%5*2N%9.2N%=22N%A62N%E:2N% >2N%%B2N%)F2N%-J2N%1N2N%5R2N%9V2N%=Z2N%A_2N%Ec2N% g2N%%k2N%)o2N%-s2N%1w2N%5{2N%9!4N%=&4N%A*4N%E.4N% 24N%%64N%):4N%->"
+"4N%1B4N%5F4N%9J4N%=N4N%AR4N%ERJR% VJR%%ZJR%)_JR%-cJR%1gJR%5kJR%9oJR%=sJR%AwJR%E>qR% BqR%%FqR%)JqR%-NqR%1RqR%5VqR%9ZqR%=_qR%AcqR%E:FV% >FV%%BFV%)FFV%-JFV%1NFV%5RFV%9VFV%=ZFV%A_FV%E"};}
function AHL(){return {"value":"PA-Y$;Y$679:95Y#J+Y#Z$Y#B;697<8<C;6:7:PB-9[%=9<=&>:1=<=:L#<#Y#<,&?L$9B8:B(C9:C)!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#B##!#!C$B##!#B##B$C#B%#B##B$C$B##B##!#!#B##!C#!#B##B$#!#B#C#&!C$F%!$#!$#!$#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!C#!$#!#B$#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C(B##B#C#!#B%#!#!#!#!Cg&C<E3]%E-]/E&](%<%]2b\'Q! !#!#%<!#A#%C$9!A%]#!9B$ ! B##B2 B*CD!C#B$C$!#!#!#!#!#!#!#!#!#!#!#!C&!#:!#B#C#BTCQ!#!#!#!#"
+"!#!#!#!#!#!#!#!#!#!#!#!#!#=G&H#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#B##!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!# BGA#%Y\'CJ95A#^#; GN5\'9G#9G#9\'A)F<A%F%Y#A,Q\'Z$Y#;Y#^#G,91 Y#FA%F+G6J+Y%F#\'b&D! 9&G(1=G\'E#G#=G%F#J+F$^#&Y/ 1&\'F?G<A#b&:! G,&A/J+FBG*E#=Y$%A#\'[#F7G%%G*%G$%G&A#Y0 F:G$A#9 F,AVF6 F)A6G01GA)FW\')\'&I$G)I%\'I#&G(F+G#Y#J+9%F0\'I# F)A#F#A#F7 F( &A$F%A#\'&I$G%A#I#A#I#\'&A))A%F# F$G#A#J+F#[#L\'=;&9\'A#G#) F\'A%F#A#F7 F( F# F# F#A#\' "
+"I$G#A%G#A#G$A$\'A(F% &A(J+G#F$\'9A+G#) F* F$ F7 F( F# F&A#\'&I$G& G#) I#\'A#&A0F#G#A#J+9;A(&G\' \'I# F)A#F#A#F7 F( F# F&A#\'&)\')G%A#I#A#I#\'A)\')A%F# F$G#A#J+=&L\'A+\'& F\'A$F$ F%A$F# & F#A$F#A$F$A$F-A%I#\'I#A$I$ I$\'A#&A\')A/J+L$^\';=A&\'I$\'F) F$ F8 F1A$&G$I% G$ G%A(G# F$A&F#G#A#J+A(9L(=&\'I#9F) F$ F8 F+ F&A#\'&)\'I& \'I# I#G#A(I#A(& F#G#A#J+ F#A.G#I# F) F$ FJG#&I$G% I$ I$\'&=A%F$)L(F$G#A#J+L*=F\'A#I# F3A$F9 F* &A#F(A$\'A%I$G$ \' I)A\'J+A#I#9A-FQ\'F#G(A%;F\'%G)9J+Y#AFF# & F& F9 & F+\'F#G*&A#F& % G\'A#J+A#F%AA&^$Y0=9^$G#^\'J+L+=\'=\'=\'6767"
+"I#F) FEA%G/)G&9G#F&G, GE ^)\'^\' ^#Y&^%Y#AFFLI#G%)G\')G#I#G#&J+Y\'F\'I#G#F%G$&I$F#I(F$G%F.\'I#G#I\'\'&)J+I$\'^#BG !A&!A#CL9%C$b&*&  F%A#F( & F%A#FJ F%A#FB F%A#F( & F%A#F0 FZ F%A#FeA#G$Y*L5A$F1^+A\'b!7! A#C\'A#5b&M* =9F2-F;67A$FmY$K$F)A(F. F%G$A,F3G$Y#A*F3G#A-F. F$ G#A-FUG#)G(I)\'I#G,Y$%Y$;&\'A#J+A\'L+A\'Y\'5Y%G$1 J+A\'FD%FVA(F&G#FC\'&A&FhA+F@ G$I%G#I$A%I#\'I\'G$A%=A$Y#J+F?A#F&A,FMA%F;A\'J+,A$^CF8G#I#\'A#Y#FV)\')G( \')\'I#G)I\'G+A#\'J+A\'J+A\'Y(%Y\'A#G/(AcG%)FP\')G&)\'I&\'I#F(A%J+Y(^+G*^*A$G#)F?)G%I#G#)G$F#J+FM\')G#I$\')G$I#A)Y%FEI)G)I#G#A$Y&"
+"J+A$F$J+F?E\'Y#C*A(BLA#B$Y)A)G$9G.)G(F%\'F\'\'F#)G#&A&CMEaC.%CCEFG[ G&!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C*!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C*B)C\'A#B\'A#C)B)C)B)C\'A#B\'A#C) ! ! ! !C)B)C/A#C)D)C)D)C)D)C& C#B%$<#]$C$ C#B%$]$C%A#C#B% ]$C)B&]$A#C$ C#B%$]# M,Q&U\'Y#>?6_#?6>Y)./Q&-Y*>?Y%X#Y$:67Y,:98Y+-Q& Q+,%A#L\'Z$67%L+Z$67 E.A$[AA1G.H%\'H$G-A0^#"
+"!^%!^##B$C#B$#=!^#:B&^\'!=!=!=B%=#B%#F%#^#C#B#Z&!C%=:^##=L1KD!#K%,^#A%Z&^&Z#^%:^#:^#:^(:^@Z#^#:=:^@b:-% ^)6767^5Z#^(67b=2! :^?Z:^IZ\'^gA:^,A6L^^pL7b=X# :^*:^WZ)b=P! :b=Y$ 67676767676767L?^MZ&67Z@6767676767Z1b= % b:$# 6767676767676767676767Za6767ZA67b:#% ^QZ6^#Z\'^HA#^AA#b=I! BP CP !#B$C#!#!#!#B%#!C#!C\'E#B$#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C#^\'!#!#G$!#A&Y%,Y#CG #A&#A#FYA(%9A/\'F8A*F( F( F( F( F( F( F( F( GAY#>?>?Y$>?9>?Y*5Y#59>?Y#>?67676767Y&%Y+U#Y%"
+"596Y.AQ^; b=:! A-b=7$ A;^-A%-Y$=%&+6767676767^#6767676756W#=K*G%I#5E&^#K$%&9^# b&7! A#G#]#E#&5b&;! 9E$&A&FL b&?!  ^#L%^+F<A&^EA-F1^@ L+^?L)=L0^AL+^HL0b= & &b UG!&A+^b&b   %b O(!&A1F6%b&X2 A$^XA*FIE\'Y#b&-% %Y$F1J+F#A5!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#&\'H$9G+9%!#!#!#!#!#!#!#!#!#!#!#!#!#!#E#G#FhK+G#Y\'A)]8E*]#!#!#!#!#!#!#!C$!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#%C)!#!#B##!#!#!#!#%]#!#!#&!#!C$!#!#!#!#!#!#!#!#!#!#B&#B&#!#!#!#!#!#A#!#B$AQ&E##F(\'F$\'F%\'F8I#G#)^%A%L\'^#;=A\'FUY%A)I#F"
+"SI1G#A)Y#J+A\'G3F\'Y$&9F#\'J+F=G)Y#F8G,I#A,9F>A$G$)FP\'I#G%I#G#I$Y. %J+A%Y#F&\'%F*J+F& FJG\'I#G#I#G#A*F$\'F)\')A#J+A#Y%F1%F\'^$&)\')FS\'&G$F#G#F&G#&\'&A9F#%Y#F,)G#I#Y#&E#)\'A+F\'A#F\'A#F\'A*F( F( CL<E%C)A)b#1! FDI#\'I#\'I#9)\'A#J+A\'&b CO#&A-F8A%FRA%4b `. T#b `! T#b `0 43b `D!3b&O& A#b&K! AGC(A-C&A&&\'F+:F. F& & F# F# b&M! ]1A2b&L& 76A1FbA#FWAIF-;=A#G1Y(679A\'G19U#X#6767676767676767Y#67Y%X$Y$ Y%5676767Y$:5Z$ 9;Y#A%F& b&(# A#1 Y$;Y$679:95Y#J+Y#Z$Y#B;697<8<C;6:7:67967Y#F+%FNE#F@A$F\'A#F\'A#F\'A#F$A$[#:<=[# =Z%^#A+Q$^#A#F- F; F4 F# F0"
+"A#F/ACb&]! A&Y$A%LNA$^*KVL%^2L#^$ ^-A%=AP^N\'b ## F>A$FRA0\'L<A%FAL%A*F5+F)+A&FGG&A&F? 9FEA%F)9K&AKBICIFpA#J+A\'BEA%CEA%FIA)FUA,9b 1# b&X% A*F7A+F)b 9# F\'A#& FM F#A$&A#F8 9L)F8^#L(F@A)L*AQF4 F#A&L&F7L\'A$9F;A&9AbFYA%L#F#L1A#LO&G$ G#A&G%F% F$ F>A#G$A%\'L*A(Y*A(F>L#9F>L$AAF)=F=G#A%L&Y(A*FWA$Y(F7A#L)F4A&L)F3A(Y%A-L(b 1! FkAXBTA.CTA(L\'FEG%A)J+b G% L@b !# F>L+&A)F7G,L%Y&b \'# F8A*)\')FVG0Y(A%L5J+A0G$)FNI$G%I#G#Y#1Y%A,1A#F:A(J+A\'G$FEG&)G) J+Y%&I#A*FD\'Y#&A*G#)FQI$G*I#F%Y%G%9A#J+&9&Y$ L5A,F3 F:I$G$I#\')G#Y\'\'AcF( & F% F0 F+"
+"9A\'FP\'I$G)A&J+A\'G#I# F)A#F#A#F7 F( F# F& G#&I#\'I%A#I#A#I$A#&A\')A&F&I#A#G(A$G&b ,# FVI$G)I#G$)\'F%Y&J+ 9 9\'&AAFQI$G\')\'I%G#)G#F#9&A)J+b G# FPI$G%A#I%G#)G#Y8F%G#ACFQI$G)I#\')G#Y$&A,J+A\'Y.A4FL\')\'I#G\')\'&A(J+AWF<A#G$I#G%)G&A%J+L#Y$=b  $ FMI$G*)G#9b E! BACAJ+L*A-&b A# F)A#FHI$G%A#G#I%\'&9&)A<&G+FIG\')&G%Y)\'A)&G\'I#G$FOG.)G#Y$&Y&A>FZb (% F* FF)G( G\')\'&Y&A+J+L4A$Y#F?A#G7 )G()G#)G#AkF( F# FGG\'A$\' G# G(&\'A)J+A\'F\' F# FAI& G# I#\')\'&A(J+b W% F4G#I#Y#b ($ L6^)[%^2A.9b&;/ b G! b+P!  Y&A,b&%$ b ^K b&P1  Q*b (a b&(* b Z\'#b&Z) A(F"
+"@ J+A%Y#b A! F?A#G&9A+FQG(Y&^%E%9=A+J+ L( F6A&F4b Q+ BACAL8Y%b F! FmA%\'&IXA(G%E.AbE#9%A=&b W@!&A)b&T, b .5#b&@% ARF$A2F%A)b&-\' b %E b&L! A&F.A$F*A(F+A#=G#9Q%b =.!b=W$ A+^HA#^^I#G$^$I\'Q)G)^#G(^?G%^]A8^dG$=b ;# L5A-b=8! A*L:b (# B;C;B;C( C3B;C;! B#A#!A#B#A#B% B)C% # C( C,B;C;B# B%A#B) B( C;B# B% B& !A$B( C;B;C;B;C;B;C;B;C;B;C;B;C=A#B::C::C\'B::C::C\'B::C::C\'B::C::C\'B::C::C\'!#A#JSb= ) GX^%GS^)\'^/\'^#Y&A0G& G0b 16 G( G2A#G( G# G&b 6$ FNA$G(E(A#J+A%&=b Q& FMG%J+A&;b  5 b&&$ A#L*G(AJBCCCG(%A%J+A%Y#b 2- L]=L$;L%AnLN="
+"L0b #$ F% F< F# &A#& F+ F% & &A\'&A%& & & F$ F# &A#& & & & & F# &A#F% F( F% F% & F+ F2A&F$ F& F2AUZ#b /% ^MA%b=E! A-^0A#^0 ^0 ^FA+L.A$b=>! A$^_AZ^>A.^MA%^*A(^#A/^\'b ;# b=]$ ]&b=7, A+^.A$^,A&b=U! A-b=:! A(^-A5^-A%^YA)^+A\'^IA)^?b 3! ^- b=F!  ^%A$^JA#^\'A$^>A#b=(# A-^/A#^%A%^$A&^$A.^\'b K6 &b   %b   %b 6<#&AJ&b T !&A,&b =$ &A#&b  ;!&A/&b PU!&b @Q b&?) b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   "
+"%b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b D8 1A?b1A! b  # b\'Q$ b   %b   %b   %b 1Y$3b   %b   %b   %b ^a$3A#3b   %b   %b   %b ^a$3"};}
function I2(){var a=this;D.call(a);a.cX=null;a.DV=0;}
function AJ4(a){return 1;}
function A82(a,b){return;}
function UW(){var a=this;I2.call(a);a.vZ=0;a.v1=0;a.v0=0;a.ho=0.0;a.mO=0.0;a.ol=0.0;a.nd=0;a.Bg=null;a.BB=null;}
function Rh(a,b){b.u=(-180.0);}
function A$i(a){return;}
function AFA(a,b,c,d){var e,f,g,h,i,j,k,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=a.cX.A;$p=1;case 1:$z=ACy(e,b,c,d);if(C()){break _;}f=$z;e=a.cX.A;$p=2;case 2:$z=AEL(e,b,c,d);if(C()){break _;}g=$z;e=a.cX.c6;$p=3;case 3:AEF(e,b,c,d);if(C()){break _;}e=a.cX.A;L();h=BeI.data;$p=4;case 4:$z=ACy(e,b,c,d);if(C()){break _;}i=$z;j=h[i];$p=5;case 5:$z=AEL(e,b,c,d);if(C()){break _;}i=
$z;k=0;$p=6;case 6:$z=APy(e,b,c,d,k);if(C()){break _;}k=$z;if(j!==null&&k){$p=7;continue _;}e=Ks(a.cX.f);if(e!==null){QK(e,f,b,c,d);if(!e.p)JD(a.cX.f);}if(k&&M9(a.cX.f,BeI.data[f])){e=BeI.data[f];j=a.cX.A;$p=8;continue _;}return k;case 7:j.nr(e,b,c,d,i);if(C()){break _;}e=Ks(a.cX.f);if(e!==null){QK(e,f,b,c,d);if(!e.p)JD(a.cX.f);}if(k&&M9(a.cX.f,BeI.data[f])){e=BeI.data[f];j=a.cX.A;$p=8;continue _;}return k;case 8:e.IP(j,b,c,d,g);if(C()){break _;}return k;default:E$();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function AE5(a,b,c,d){var e,f,g,h,i,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=a.cX.A;$p=1;case 1:$z=ACy(e,b,c,d);if(C()){break _;}f=$z;if(f>0&&a.ho===0.0){L();e=BeI.data[f];g=a.cX.A;h=a.cX.f;$p=3;continue _;}if(f<=0)return;L();e=BeI.data[f];g=a.cX.f;$p=2;case 2:$z=ABg(e,g);if(C()){break _;}i=$z;if(i<1.0)return;$p=4;continue _;case 3:e.q$(g,b,c,d,h);if(C()){break _;}if(f<=0)return;L();e=BeI.data[f];g
=a.cX.f;$p=2;continue _;case 4:AFA(a,b,c,d);if(C()){break _;}return;default:E$();}}C4().s(a,b,c,d,e,f,g,h,i,$p);}
function ALR(a){a.ho=0.0;a.nd=0;}
function YP(a,b,c,d,e){var f,g,h,i,j,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.nd>0)a.nd=a.nd-1|0;else{if(b==a.vZ&&c==a.v1&&d==a.v0){f=a.cX.A;$p=1;continue _;}a.ho=0.0;a.mO=0.0;a.ol=0.0;a.vZ=b;a.v1=c;a.v0=d;}return;case 1:$z=ACy(f,b,c,d);if(C()){break _;}g=$z;if(!g)return;L();f=BeI.data[g];h=a.ho;i=a.cX.f;$p=2;case 2:$z=ABg(f,i);if(C()){break _;}j=$z;a.ho=h+j;a.ol=a.ol+1.0;if(a.ho<
1.0)return;$p=3;case 3:AFA(a,b,c,d);if(C()){break _;}a.ho=0.0;a.mO=0.0;a.ol=0.0;a.nd=5;return;default:E$();}}C4().s(a,b,c,d,e,f,g,h,i,j,$p);}
function GQ(a,b){var c;if(a.ho<=0.0){a.cX.nY.En=0.0;a.cX.dY.tI=0.0;}else{c=a.mO+(a.ho-a.mO)*b;a.cX.nY.En=c;a.cX.dY.tI=c;}}
function A1i(a){return 4.0;}
function A48(a,b){return;}
function AI3(a){var b,c,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.mO=a.ho;b=a.Bg;c=a.cX.A;$p=1;case 1:ABD(b,c);if(C()){break _;}b=a.BB;c=a.cX.A;$p=2;case 2:ABD(b,c);if(C()){break _;}return;default:E$();}}C4().s(a,b,c,$p);}
function SH(){var a=this;D.call(a);a.c8=0.0;a.CM=0.0;a.i6=0;a.cY=0.0;a.CX=0.0;a.lI=0.0;a.sR=Long_ZERO;a.rU=Long_ZERO;a.nF=0.0;}
function FQ(a){var b,c,d,e,f;b=B_();c=Long_sub(b,a.sR);d=Long_div(EF(),Long_fromInt(1000000));if(Long_gt(c,Long_fromInt(1000))){e=Long_toNumber(c)/Long_toNumber(Long_sub(d,a.rU));a.nF=a.nF+(e-a.nF)*0.20000000298023224;a.sR=b;a.rU=d;}if(Long_lt(c,Long_ZERO)){a.sR=b;a.rU=d;}f=Long_toNumber(d)/1000.0;e=(f-a.CM)*a.nF;a.CM=f;if(e<0.0)e=0.0;if(e>1.0)e=1.0;a.lI=a.lI+e*a.CX*a.c8;a.i6=a.lI|0;a.lI=a.lI-a.i6;if(a.i6>10)a.i6=10;a.cY=a.lI;}
function VM(){}
function R6(){var a=this;D.call(a);a.n2=null;a.fG=null;a.l9=null;a.kN=Long_ZERO;a.lL=0;}
function AO2(a,b){a.lL=0;RV(a,b);}
function YL(a,b){a.lL=1;RV(a,a.l9);}
function RV(a,b){var c,d,e;a:{if(!a.fG.gR){if(a.lL)break a;b=new IN;P(b);M(b);}a.l9=b;c=FK(a.fG.cq,a.fG.bF);d=c.fL;e=c.fI;D5(256);Da(5889);C$();Ir(0.0,d,e,0.0,100.0,300.0);Da(5888);C$();Bw(0.0,0.0,(-200.0));}}
function AR7(a,b){var c,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!a.fG.gR){if(a.lL)return;b=new IN;P(b);M(b);}a.kN=Long_ZERO;a.n2=b;c=(-1);$p=1;case 1:XK(a,c);if(C()){break _;}a.kN=Long_ZERO;return;default:E$();}}C4().s(a,b,c,$p);}
function AR5(a,b,c){var d,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!a.fG.gR){if(a.lL)return;b=new IN;P(b);M(b);}a.kN=Long_ZERO;a.n2=c;a.l9=b;d=(-1);$p=1;case 1:XK(a,d);if(C()){break _;}a.kN=Long_ZERO;return;default:E$();}}C4().s(a,b,c,d,$p);}
function XK(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,$$je,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a:{if(!a.fG.gR){if(a.lL)break a;c=new IN;P(c);M(c);}d=B_();if(Long_ge(Long_sub(d,a.kN),Long_fromInt(20))){a.kN=d;c=FK(a.fG.cq,a.fG.bF);e=c.fL;f=c.fI;D5(256);Da(5889);C$();g=e;h=f;Ir(0.0,g,h,0.0,100.0,300.0);Da(5888);C$();Bw(0.0,
0.0,(-200.0));D5(16640);BA();i=BeE;c=a.fG.bo;j=B(165);$p=1;continue _;}}return;case 1:$z=AHv(c,j);if(C()){break _;}k=$z;Cp(3553,k);Bz(i);EQ(i,4210752);l=f/32.0;G(i,0.0,h,0.0,0.0,l);m=e/32.0;G(i,g,h,0.0,m,l);G(i,g,0.0,0.0,m,0.0);G(i,0.0,0.0,0.0,0.0,0.0);Bs(i);if(b>=0){n=(e/2|0)-50|0;o=(f/2|0)+16|0;Bd(3553);Bz(i);EQ(i,8421504);g=n;p=o;Bg(i,g,p,0.0);m=o+2|0;Bg(i,g,m,0.0);q=n+100|0;Bg(i,q,m,0.0);Bg(i,q,p,0.0);EQ(i,8454016);Bg(i,g,p,0.0);Bg(i,g,m,0.0);q=n+b|0;Bg(i,q,m,0.0);Bg(i,q,p,0.0);Bs(i);Bb(3553);}c=a.fG.e_;i
=a.l9;b=(e-Dx(a.fG.e_,a.l9)|0)/2|0;r=(f/2|0)-4|0;Cy(c,i,b,r-16|0,16777215);Cy(a.fG.e_,a.n2,(e-Dx(a.fG.e_,a.n2)|0)/2|0,r+8|0,16777215);$p=2;case 2:AUX();if(C()){break _;}try{$p=3;continue _;}catch($$e){$$je=Y($$e);if($$je instanceof BD){}else{throw $$e;}}return;case 3:b:{try{XE();if(C()){break _;}break b;}catch($$e){$$je=Y($$e);if($$je instanceof BD){}else{throw $$e;}}}return;default:E$();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,$p);}
function AFQ(){var a=this;D.call(a);a.v=null;a.qw=0;a.lW=0.0;a.iK=null;a.tK=0;a.p8=null;a.lo=null;a.Ia=0;a.H_=0;a.p1=null;a.dH=0.0;a.d6=0.0;a.dW=0.0;a.od=0.0;a.ma=0.0;}
function BbJ(a){var b=new AFQ();AT$(b,a);return b;}
function AT$(a,b){var c;a.qw=0;a.lW=0.0;a.p8=null;a.lo=new DB;a.Ia=0;a.H_=0;a.p1=H4(16);a.v=b;c=new Pe;c.eT=null;c.ja=0.0;c.ra=0.0;c.iy=0;c.jQ=0;c.Ad=Kk();c.cP=b;a.iK=c;}
function AIP(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.od=a.ma;b=a.v.A;c=K(a.v.f.d);d=K(a.v.f.j);e=K(a.v.f.e);$p=1;case 1:$z=ANi(b,c,d,e);if(C()){break _;}f=$z;g=(3-a.v.o.hf|0)/3.0;h=f*(1.0-g)+g;a.ma=a.ma+(h-a.ma)*0.10000000149011612;a.tK=a.tK+1|0;AJa(a.iK);if(a.v.cU)
{b=a.v.f;i=a.v.A;d=K(b.d);j=K(b.j);k=K(b.e);l=4;m=0;n=63;e=R(64,j+4|0);j=R(64,j-4|0);o=64.0999984741211;if(m<50){p=(d+E(a.lo,9)|0)-l|0;q=(k+E(a.lo,9)|0)-l|0;$p=2;continue _;}}return;case 2:$z=ACy(i,p,n,q);if(C()){break _;}c=$z;if(e<=0&&j>=0){f=N(a.lo);g=N(a.lo);if(c>0){b=a.v.c6;r=new JQ;s=p+f;L();TS(r,i,s,o-BeI.data[c].cM,q+g);El(b,r);}}m=m+1|0;if(m>=50)return;p=(d+E(a.lo,9)|0)-l|0;q=(k+E(a.lo,9)|0)-l|0;continue _;default:E$();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,$p);}
function NH(a,b){var c,d,e,f;c=a.v.f;d=c.bS;e=c.d-c.bS;f=b;return BY(d+e*f,c.cS+(c.j-c.cS)*f,c.bR+(c.e-c.bR)*f);}
function ALV(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.v.f;d=c.T+(c.I-c.T)*b;e=c.P+(c.u-c.P)*b;f=NH(a,b);g= -e*0.01745329238474369-3.1415927410125732;h=BC(g);i=Bq(g);g= -d*0.01745329238474369;j= -BC(g);g=Bq(g);k=i*j;l
=h*j;m=4.0;n=k;o=n*m;p=g;q=p*m;r=l;s=Dk(f,o,q,r*m);t=a.v;u=a.v.A;$p=1;case 1:$z=AJm(u,f,s);if(C()){break _;}u=$z;t.ce=u;f=NH(a,b);if(a.v.ce!==null)m=DI(a.v.ce.gy,f);if(a.v.cB instanceof Dv)m=32.0;else if(m>3.0)m=3.0;n=n*m;p=p*m;r=r*m;s=Dk(f,n,p,r);a.p8=null;t=a.v.A;u=Jh(c.L,n,p,r);$p=2;case 2:$z=ADM(t,c,u);if(C()){break _;}t=$z;n=0.0;v=0;while(v<t.s){u=Z(t,v);if(u.lu()){w=QV(Dw(u.L,0.10000000149011612,0.10000000149011612,0.10000000149011612),f,s);if(w!==null){p=DI(f,w.gy);if(!(p>=n&&n!==0.0)){a.p8=u;n=p;}}}v
=v+1|0;}if(a.p8!==null&&!(a.v.cB instanceof Dv))a.v.ce=A1a(a.p8);return;default:E$();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,$p);}
function L5(a,b){var c,d,e;c=a.v.f;d=c.dE-b;if(c.bT<=0)Bv(40.0-8000.0/(c.c2+b+200.0),0.0,0.0,1.0);if(d>=0.0){b=d/c.EO;b=Bq(b*b*b*b*3.1415927410125732);e=c.kG;Bv( -e,0.0,1.0,0.0);Bv( -b*14.0,0.0,0.0,1.0);Bv(e,0.0,1.0,0.0);}}
function IO(a,b){var c,d,e,f,g;if(!a.v.o.cC){c=a.v.f;d=c.g_-c.tW;e=c.g_+d*b;f=c.qz+(c.kW-c.qz)*b;g=c.kZ+(c.jm-c.kZ)*b;d=e*3.1415927410125732;Bw(Bq(d)*f*0.5, -HZ(BC(d)*f),0.0);Bv(Bq(d)*f*3.0,0.0,0.0,1.0);Bv(HZ(BC(d+0.20000000298023224)*f)*5.0,1.0,0.0,0.0);Bv(g,1.0,0.0,0.0);}}
function AH$(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.v.f;d=c.bS;e=c.d-c.bS;f=b;g=d+e*f;h=c.cS+(c.j-c.cS)*f;i=c.bR+(c.e-c.bR)*f;if(!a.v.o.cC)Bw(0.0,0.0,(-0.10000000149011612));else{j=4.0;d= -Bq(c.u/180.0*3.1415927410125732)*BC(c.I
/180.0*3.1415927410125732)*j;e=BC(c.u/180.0*3.1415927410125732)*BC(c.I/180.0*3.1415927410125732)*j;f= -Bq(c.I/180.0*3.1415927410125732)*j;k=0;l=g-d;d=h-f;f=i-e;if(k<8){m=((k&1)*2|0)-1|0;n=((k>>1&1)*2|0)-1|0;o=((k>>2&1)*2|0)-1|0;m=m*0.10000000149011612;n=n*0.10000000149011612;o=o*0.10000000149011612;p=a.v.A;e=m;q=g+e;r=n;s=h+r;t=o;u=BY(q,s,i+t);v=BY(l+e+t,d+r,f+t);$p=1;continue _;}Bw(0.0,0.0, -j);}Bv(c.T+(c.I-c.T)*b,1.0,0.0,0.0);Bv(c.P+(c.u-c.P)*b+180.0,0.0,1.0,0.0);return;case 1:$z=AJm(p,u,v);if(C()){break _;}u
=$z;if(u!==null){q=DI(u.gy,BY(g,h,i));if(q<j)j=q;}k=k+1|0;if(k>=8){Bw(0.0,0.0, -j);Bv(c.T+(c.I-c.T)*b,1.0,0.0,0.0);Bv(c.P+(c.u-c.P)*b+180.0,0.0,1.0,0.0);return;}m=((k&1)*2|0)-1|0;n=((k>>1&1)*2|0)-1|0;o=((k>>2&1)*2|0)-1|0;m=m*0.10000000149011612;n=n*0.10000000149011612;o=o*0.10000000149011612;p=a.v.A;e=m;q=g+e;r=n;s=h+r;t=o;u=BY(q,s,i+t);v=BY(l+e+t,d+r,f+t);continue _;default:E$();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,$p);}
function AFy(a,b,c){var d,e,f,g,h,i,j,k,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.lW=256>>a.v.o.hf;Da(5889);C$();if(a.v.o.ee)Bw( -((c*2|0)-1|0)*0.07000000029802322,0.0,0.0);d=a.v.f;e=70.0;f=BfJ;$p=1;case 1:$z=AGI(d,f);if(C()){break _;}g=$z;if(g)e=60.0;if(d.bT<=0)e=e/((1.0-500.0/(d.c2+b+500.0))*2.0+1.0);h=a.v.cq/a.v.bF;i=a.lW;f=GM();j=e*0.01745329238474369*0.5;k=GE(j)/Gs(j);f.eu
=k/h;f.es=0.0;f.et=0.0;f.er=0.0;f.ex=0.0;f.ey=k;f.ev=0.0;f.ew=0.0;f.eC=0.0;f.eA=0.0;h=i+0.05000000074505806;k=i-0.05000000074505806;f.eB=h/k;f.ez=(-1.0);f.gV=0.0;f.gW=0.0;f.gT=2.0*i*0.05000000074505806/k;f.gU=0.0;Da(5888);C$();if(a.v.o.ee)Bw(((c*2|0)-1|0)*0.10000000149011612,0.0,0.0);L5(a,b);if(a.v.o.iu)IO(a,b);$p=2;case 2:AH$(a,b);if(C()){break _;}return;default:E$();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function AFJ(a,b,c){var d,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:C$();if(a.v.o.ee)Bw(((c*2|0)-1|0)*0.10000000149011612,0.0,0.0);B3();L5(a,b);if(a.v.o.iu)IO(a,b);if(!a.v.o.cC){d=a.iK;$p=1;continue _;}BE();if(a.v.o.cC){if(a.v.o.iu)IO(a,b);return;}d=a.iK;$p=2;continue _;case 1:ACZ(d,b);if(C()){break _;}BE();if(a.v.o.cC){if(a.v.o.iu)IO(a,b);return;}d=a.iK;$p=2;case 2:ACa(d,b);if(C()){break _;}L5(a,b);if(a.v.o.iu)IO(a,b);return;default:E$();}}C4().s(a,
b,c,d,$p);}
function AFO(a,b){var c,d,e,f,g,h,i,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.qw&&!Oj()){c=a.v;$p=1;continue _;}a.qw=Oj();Be();d=BdR;BdR=0.0;e=d|0;d=BdS;BdS=0.0;f=d|0;g=1;if(a.v.o.m5)g=(-1);if(a.v.bp&&a.v.A!==null)Xo(a.v.f,e,Bj(f,g));if(!a.v.h7){c=FK(a.v.cq,a.v.bF);f=c.fL;e=c.fI;h=Bj(BdP,f)/a.v.cq|0;i=(e-(Bj(BdQ,e)/a.v.bF|0)|0)-1|0;if(a.v.A!==null){$p=2;continue _;}Hi(0,0,a.v.cq,a.v.bF);HB(0.0,
0.0,0.0,0.0);D5(16640);Da(5889);C$();Da(5888);C$();LC(a);if(a.v.D!==null){D5(256);c=a.v.D;$p=3;continue _;}}return;case 1:ALa(c);if(C()){break _;}a.qw=Oj();Be();d=BdR;BdR=0.0;e=d|0;d=BdS;BdS=0.0;f=d|0;g=1;if(a.v.o.m5)g=(-1);if(a.v.bp&&a.v.A!==null)Xo(a.v.f,e,Bj(f,g));if(!a.v.h7){c=FK(a.v.cq,a.v.bF);f=c.fL;e=c.fI;h=Bj(BdP,f)/a.v.cq|0;i=(e-(Bj(BdQ,e)/a.v.bF|0)|0)-1|0;if(a.v.A!==null){$p=2;continue _;}Hi(0,0,a.v.cq,a.v.bF);HB(0.0,0.0,0.0,0.0);D5(16640);Da(5889);C$();Da(5888);C$();LC(a);if(a.v.D!==null){D5(256);c
=a.v.D;$p=3;continue _;}}return;case 2:AAh(a,b);if(C()){break _;}c=a.v.nY;g=a.v.D===null?0:1;$p=4;continue _;case 3:c.hN(h,i,b);if(C()){break _;}return;case 4:APL(c,b,g,h,i);if(C()){break _;}if(a.v.D===null)return;D5(256);c=a.v.D;$p=3;continue _;default:E$();}}C4().s(a,b,c,d,e,f,g,h,i,$p);}
function AAh(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:ALV(a,b);if(C()){break _;}c=a.v.f;d=a.v.dY;e=a.v.c6;f=c.cs;g=c.d-c.cs;h=b;i=f+g*h;f=c.b7+(c.j-c.b7)*h;g=c.ct+(c.e-c.ct)*h;j=a.v.A.hl;if(j instanceof IJ)MV(j,EW(i|0)>>4,EW(f|0)>>4);k=0;if(k>=2){FG(1,1,1,0);return;}if(a.v.o.ee){if(k)FG(1,0,0,0);else FG(0,
1,1,0);}Hi(0,0,a.v.cq,a.v.bF);$p=2;case 2:AD3(a,b);if(C()){break _;}D5(16640);Bb(2884);$p=3;case 3:AFy(a,b,k);if(C()){break _;}RX();if(a.v.o.hf<2){l=(-1);$p=4;continue _;}if(!a.v.o.du)Bb(2912);l=1;$p=6;continue _;case 4:ASi(a,l);if(C()){break _;}$p=5;case 5:ADd(d,b);if(C()){break _;}if(!a.v.o.du)Bb(2912);l=1;$p=6;case 6:ASi(a,l);if(C()){break _;}m=Bbs();AOl(m,i,f,g);ARL(a.v.dY,m,b);n=a.v.dY;l=0;$p=7;case 7:AIk(n,c,l);if(C()){break _;}l=0;$p=8;case 8:ASi(a,l);if(C()){break _;}if(!a.v.o.du)Bb(2912);l=3553;n=a.v.bo;j
=B(179);$p=9;case 9:$z=AHv(n,j);if(C()){break _;}o=$z;Cp(l,o);DT();Vv(d,c,0,h);Hy();n=NH(a,b);$p=10;case 10:ACD(d,n,m,b);if(C()){break _;}$p=11;case 11:ABY(e,c,b);if(C()){break _;}DT();l=0;$p=12;case 12:ASi(a,l);if(C()){break _;}$p=13;case 13:ABe(e,c,b);if(C()){break _;}if(a.v.ce!==null){m=BfJ;$p=16;continue _;}Dg(770,771);l=0;$p=14;case 14:ASi(a,l);if(C()){break _;}Bb(3042);Bd(2884);l=3553;m=a.v.bo;n=B(179);$p=15;case 15:$z=AHv(m,n);if(C()){break _;}o=$z;Cp(l,o);Vv(d,c,1,h);Gv(1);Bb(2884);Bd(3042);if(a.v.ce
!==null){m=BfJ;$p=17;continue _;}Bd(2912);if(a.v.cU){$p=20;continue _;}l=0;$p=23;continue _;case 16:$z=AGI(c,m);if(C()){break _;}l=$z;if(!l){Dg(770,771);l=0;$p=14;continue _;}Bd(3008);m=a.v.ce;l=0;n=D9(c.K);$p=18;continue _;case 17:$z=AGI(c,m);if(C()){break _;}l=$z;if(!l){Bd(3008);n=a.v.ce;l=0;m=D9(c.K);$p=21;continue _;}Bd(2912);if(a.v.cU){$p=20;continue _;}l=0;$p=23;continue _;case 18:AFI(d,c,m,l,n,b);if(C()){break _;}m=a.v.ce;l=0;n=D9(c.K);$p=19;case 19:AGg(d,c,m,l,n,b);if(C()){break _;}Bb(3008);Dg(770,771);l
=0;$p=14;continue _;case 20:XV(a,b);if(C()){break _;}l=0;$p=23;continue _;case 21:AFI(d,c,n,l,m,b);if(C()){break _;}m=a.v.ce;l=0;n=D9(c.K);$p=22;case 22:AGg(d,c,m,l,n,b);if(C()){break _;}Bb(3008);Bd(2912);if(a.v.cU){$p=20;continue _;}l=0;$p=23;case 23:ASi(a,l);if(C()){break _;}if(!a.v.o.du)Bb(2912);$p=24;case 24:YO(d,b);if(C()){break _;}Bd(2912);l=1;$p=25;case 25:ASi(a,l);if(C()){break _;}D5(256);$p=26;case 26:AFJ(a,b,k);if(C()){break _;}if(!a.v.o.ee)return;k=k+1|0;if(k>=2){FG(1,1,1,0);return;}if(a.v.o.ee){if
(k)FG(1,0,0,0);else FG(0,1,1,0);}Hi(0,0,a.v.cq,a.v.bF);$p=2;continue _;default:E$();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,$p);}
function XV(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();bd=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.v.f;d=K(c.d);e=K(c.j);f=K(c.e);BA();g=BeE;Bd(2884);Cj(0.0,1.0,0.0);Bb(3042);Dg(770,
771);h=3553;i=a.v.bo;j=B(196);$p=1;case 1:$z=AHv(i,j);if(C()){break _;}k=$z;Cp(h,k);k=d-5|0;d=d+5|0;h=f-5|0;l=f+5|0;m=e-5|0;n=e+5|0;e=R(m,64);o=R(n,64);while(k<=d){p=h;while(p<=l){q=e<0?64:m;r=o<0?64:n;if(q!=r){s=((((a.tK+(k*3121|0)|0)+Bj(p,418711)|0)%32|0)+b)/32.0;t=k+0.5-c.d;u=p+0.5-c.e;v=Ce(t*t+u*u)/5.0;BU(1.0,1.0,1.0,(1.0-v*v)*0.699999988079071);Bz(g);u=k+0|0;w=q;x=p+0|0;v=q*2.0/8.0;y=s*2.0;z=v+y;G(g,u,w,x,0.0,z);ba=k+1|0;bb=p+1|0;G(g,ba,w,bb,2.0,z);bc=r;bd=r*2.0/8.0+y;G(g,ba,bc,bb,2.0,bd);G(g,u,bc,x,0.0,
bd);G(g,u,w,bb,0.0,z);G(g,ba,w,x,2.0,z);G(g,ba,bc,x,2.0,bd);G(g,u,bc,bb,0.0,bd);Bs(g);}p=p+1|0;}k=k+1|0;}Bb(2884);Bd(3042);return;default:E$();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,$p);}
function LC(a){var b,c,d;b=FK(a.v.cq,a.v.bF);c=b.fL;d=b.fI;D5(256);Da(5889);C$();Ir(0.0,c,d,0.0,1000.0,3000.0);Da(5888);C$();Bw(0.0,0.0,(-2000.0));}
function AD3(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.v.A;d=a.v.f;e=1.0-A2N(1.0/(4-a.v.o.hf|0),0.25);f=OV(c,b);g=f.x;h=f.z;i=f.w;j=ADt(c,b);a.dH=j.x;a.d6=j.z;a.dW=j.w;a.dH=a.dH+(g-a.dH)*e;a.d6=a.d6+(h-a.d6)*e;a.dW=a.dW+(i-a.dW)*e;c=BfJ;$p=1;case 1:$z=AGI(d,c);if(C()){break _;}k=$z;if(k){a.dH=0.019999999552965164;a.d6
=0.019999999552965164;a.dW=0.20000000298023224;e=a.od+(a.ma-a.od)*b;a.dH=a.dH*e;a.d6=a.d6*e;a.dW=a.dW*e;if(a.v.o.ee){l=(a.dH*30.0+a.d6*59.0+a.dW*11.0)/100.0;m=(a.dH*30.0+a.d6*70.0)/100.0;n=(a.dH*30.0+a.dW*70.0)/100.0;a.dH=l;a.d6=m;a.dW=n;}HB(a.dH,a.d6,a.dW,0.0);return;}c=BfK;$p=2;case 2:$z=AGI(d,c);if(C()){break _;}k=$z;if(k){a.dH=0.6000000238418579;a.d6=0.10000000149011612;a.dW=0.0;}e=a.od+(a.ma-a.od)*b;a.dH=a.dH*e;a.d6=a.d6*e;a.dW=a.dW*e;if(a.v.o.ee){l=(a.dH*30.0+a.d6*59.0+a.dW*11.0)/100.0;m=(a.dH*30.0+a.d6
*70.0)/100.0;n=(a.dH*30.0+a.dW*70.0)/100.0;a.dH=l;a.d6=m;a.dW=n;}HB(a.dH,a.d6,a.dW,0.0);return;default:E$();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function ASi(a,b){var c,d,e,f,g,h,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.v.f;d=a.dH;e=a.d6;f=a.dW;EA(a.p1);CJ(CJ(CJ(CJ(a.p1,d),e),f),1.0);Gw(a.p1);g=a.p1;BW();BfL=Ju(g);BfM=Ju(g);BfN=Ju(g);BfO=Ju(g);Cj(0.0,(-1.0),0.0);BU(1.0,1.0,1.0,1.0);g=BfJ;$p=1;case 1:$z=AGI(c,g);if(C()){break _;}h=$z;if(h){Ma(2917,2048);GL(2914,0.10000000149011612);Bb(2903);return;}g=BfK;$p=2;case 2:$z=AGI(c,g);if(C()){break _;}h
=$z;if(h){Ma(2917,2048);GL(2914,2.0);}else{Ma(2917,9729);GL(2915,a.lW*0.25);GL(2916,a.lW);if(b<0){GL(2915,0.0);GL(2916,a.lW*0.800000011920929);}}Bb(2903);return;default:E$();}}C4().s(a,b,c,d,e,f,g,h,$p);}
function Eh(){D.call(this);this.xX=0.0;}
function Mz(){var a=this;Eh.call(a);a.iY=null;a.la=null;a.ph=null;a.d1=null;a.dO=null;a.i$=null;a.hd=null;}
function A$S(){var a=new Mz();KH(a);return a;}
function Xv(a){var b=new Mz();AIM(b,a);return b;}
function BfP(a,b){var c=new Mz();ARw(c,a,b);return c;}
function KH(a){AIM(a,0.0);}
function AIM(a,b){ARw(a,b,0.0);}
function ARw(a,b,c){var d,e;a.iY=BK(0,0);BG(a.iY,(-4.0),(-8.0),(-4.0),8,8,8,b);d=a.iY;e=0.0+c;BJ(d,0.0,e,0.0);a.la=BK(32,0);BG(a.la,(-4.0),(-8.0),(-4.0),8,8,8,b+0.5);BJ(a.la,0.0,e,0.0);a.ph=BK(16,16);BG(a.ph,(-4.0),0.0,(-2.0),8,12,4,b);BJ(a.ph,0.0,e,0.0);a.d1=BK(40,16);BG(a.d1,(-3.0),(-2.0),(-2.0),4,12,4,b);d=a.d1;e=2.0+c;BJ(d,(-5.0),e,0.0);a.dO=BK(40,16);a.dO.lB=1;BG(a.dO,(-1.0),(-2.0),(-2.0),4,12,4,b);BJ(a.dO,5.0,e,0.0);a.i$=BK(0,16);BG(a.i$,(-2.0),0.0,(-2.0),4,12,4,b);d=a.i$;c=12.0+c;BJ(d,(-2.0),c,0.0);a.hd
=BK(0,16);a.hd.lB=1;BG(a.hd,(-2.0),0.0,(-2.0),4,12,4,b);BJ(a.hd,2.0,c,0.0);}
function A$e(a,b,c,d,e,f,g){a.oi(b,c,d,e,f,g);Ca(a.iY,g);Ca(a.ph,g);Ca(a.d1,g);Ca(a.dO,g);Ca(a.i$,g);Ca(a.hd,g);Ca(a.la,g);}
function AIT(a,b,c,d,e,f,g){var h;a.iY.bX=e/57.2957763671875;a.iY.b1=f/57.2957763671875;a.la.bX=a.iY.bX;a.la.b1=a.iY.b1;h=a.d1;e=b*0.6661999821662903;f=e+3.1415927410125732;h.b1=BC(f)*2.0*c;a.d1.bU=(BC(b*0.23119999468326569)+1.0)*1.0*c;a.dO.b1=BC(e)*2.0*c;a.dO.bU=(BC(b*0.28119999170303345)-1.0)*1.0*c;a.i$.b1=BC(e)*1.399999976158142*c;a.hd.b1=BC(f)*1.399999976158142*c;h=a.d1;c=h.bU;b=d*0.09000000357627869;h.bU=c+BC(b)*0.05000000074505806+0.05000000074505806;h=a.dO;h.bU=h.bU-(BC(b)*0.05000000074505806+0.05000000074505806);h
=a.d1;b=h.b1;c=d*0.06700000166893005;h.b1=b+Bq(c)*0.05000000074505806;h=a.dO;h.b1=h.b1-Bq(c)*0.05000000074505806;}
function Eu(){var a=this;D.call(a);a.dD=null;a.IX=0;a.mE=0;a.HU=0;a.wZ=0;}
function BfQ(a){var b=new Eu();HE(b,a);return b;}
function HE(a,b){a.dD=$rt_createByteArray(1024);a.mE=0;a.HU=0;a.wZ=1;a.IX=b;}
function AAV(){var a=this;Eu.call(a);a.px=null;a.tq=null;a.nX=null;a.rP=null;a.xA=0;}
function Baj(){var a=new AAV();A$Y(a);return a;}
function A$Y(a){L();HE(a,BfR.ba);a.px=$rt_createFloatArray(256);a.tq=$rt_createFloatArray(256);a.nX=$rt_createFloatArray(256);a.rP=$rt_createFloatArray(256);a.xA=0;}
function AYB(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o;a.xA=a.xA+1|0;b=0;while(b<16){c=0;while(c<16){d=0.0;e=b-1|0;while(e<=(b+1|0)){f=e&15;g=c&15;d=d+a.px.data[f+(g*16|0)|0];e=e+1|0;}h=a.tq.data;i=b+(c*16|0)|0;h[i]=d/3.299999952316284+a.nX.data[i]*0.800000011920929;c=c+1|0;}b=b+1|0;}c=0;while(c<16){j=0;while(j<16){k=a.nX.data;b=c+(j*16|0)|0;k[b]=k[b]+a.rP.data[b]*0.05000000074505806;if(a.nX.data[b]<0.0)a.nX.data[b]=0.0;k=a.rP.data;k[b]=k[b]-0.10000000149011612;if(BO()<0.05)a.rP.data[b]=0.5;j=j+1|0;}c=c+1|0;}k=a.tq;a.tq
=a.px;a.px=k;c=0;while(c<256){d=a.px.data[c];if(d>1.0)d=1.0;if(d<0.0)d=0.0;l=d*d;i=32.0+l*32.0|0;m=50.0+l*64.0|0;n=255;o=146.0+l*50.0|0;if(a.mE){b=i*30|0;i=((b+(m*59|0)|0)+2805|0)/100|0;m=(b+(m*70|0)|0)/100|0;n=(b+17850|0)/100|0;}k=a.dD.data;j=c*4|0;k[j+0|0]=i<<24>>24;a.dD.data[j+1|0]=m<<24>>24;a.dD.data[j+2|0]=n<<24>>24;a.dD.data[j+3|0]=o<<24>>24;c=c+1|0;}}
function AKC(){var a=this;Eu.call(a);a.pT=null;a.qS=null;a.jy=null;a.sz=null;}
function BaS(){var a=new AKC();A1D(a);return a;}
function A1D(a){L();HE(a,BfS.ba);a.pT=$rt_createFloatArray(256);a.qS=$rt_createFloatArray(256);a.jy=$rt_createFloatArray(256);a.sz=$rt_createFloatArray(256);}
function AYR(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o;b=0;while(b<16){c=0;while(c<16){d=0.0;e=Bq(c*3.1415927410125732*2.0/16.0)*1.2000000476837158|0;f=Bq(b*3.1415927410125732*2.0/16.0)*1.2000000476837158|0;g=b-1|0;while(true){h=b+1|0;if(g>h)break;i=c-1|0;while(i<=(c+1|0)){h=(g+e|0)&15;j=(i+f|0)&15;d=d+a.pT.data[h+(j*16|0)|0];i=i+1|0;}g=g+1|0;}k=a.qS.data;l=b+(c*16|0)|0;d=d/10.0;m=a.jy.data;e=(b+0|0)&15;n=((c+0|0)&15)*16|0;o=m[e+n|0];m=a.jy.data;h=h&15;o=o+m[h+n|0];m=a.jy.data;c=c+1|0;n=(c&15)*16|0;k[l]=d+(o+m[h+n
|0]+a.jy.data[e+n|0])/4.0*0.800000011920929;m=a.jy.data;m[l]=m[l]+a.sz.data[l]*0.009999999776482582;if(a.jy.data[l]<0.0)a.jy.data[l]=0.0;m=a.sz.data;m[l]=m[l]-0.05999999865889549;if(BO()<0.005)a.sz.data[l]=1.5;}b=b+1|0;}m=a.qS;a.qS=a.pT;a.pT=m;n=0;while(n<256){d=a.pT.data[n]*2.0;if(d>1.0)d=1.0;if(d<0.0)d=0.0;h=d*100.0+155.0|0;o=d*d;j=o*255.0|0;l=o*d*d*128.0|0;if(a.mE){e=h*30|0;h=((e+(j*59|0)|0)+(l*11|0)|0)/100|0;j=(e+(j*70|0)|0)/100|0;l=(e+(l*70|0)|0)/100|0;}m=a.dD.data;b=n*4|0;m[b+0|0]=h<<24>>24;a.dD.data[b
+1|0]=j<<24>>24;a.dD.data[b+2|0]=l<<24>>24;a.dD.data[b+3|0]=(-1);n=n+1|0;}}
function L4(){D.call(this);}
var BfT=null;var BfU=null;function BfV(){var a=new L4();AZC(a);return a;}
function AZC(a){return;}
function Dz(){if(BfT===null)BfT=AYJ(new Xg,0);return BfT;}
function C_(){if(BfU===null)BfU=AYJ(new PS,0);return BfU;}
function Ds(b,c,d,e,f){var g,h,i,j,k,l,m;if(b!==null&&d!==null){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=APi(b)&&(e+f|0)<=APi(d)){a:{b:{if(b!==d){g=Kz(Dl(b));h=Kz(Dl(d));if(g!==null&&h!==null){if(g===h)break b;if(!F1(g)&&!F1(h)){i=b;j=0;k=c;while(j<f){l=i.data;m=k+1|0;if(!UD(h,l[k])){Vp(b,c,d,e,j);b=new JV;P(b);M(b);}j=j+1|0;k=m;}Vp(b,c,d,e,f);return;}if(!F1(g))break a;if(F1(h))break b;else break a;}b=new JV;P(b);M(b);}}Vp(b,c,d,e,f);return;}b=new JV;P(b);M(b);}b=new BS;P(b);M(b);}d=new E3;Bo(d,B(197));M(d);}
function Vp(b,c,d,e,f){if (b !== d || e < c) {
for (var i = 0; i < f; i = (i + 1) | 0) {d.data[e++] = b.data[c++];}} else {c = (c + f) | 0;e = (e + f) | 0;for (var i = 0; i < f; i = (i + 1) | 0) {d.data[--e] = b.data[--c];}}}
function B_(){return Long_fromNumber(new Date().getTime());}
function EF(){return Long_fromNumber(performance.now()*1000000.0);}
function V2(){Go.call(this);this.yo=null;}
function AJ0(a){var b,$$je,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:while(a.yo.gR){try{b=Long_fromInt(2147483647);$p=1;continue _;}catch($$e){$$je=Y($$e);if($$je instanceof E0){}else{throw $$e;}}}return;case 1:a:{try{AKE(b);if(C()){break _;}break a;}catch($$e){$$je=Y($$e);if($$je instanceof E0){}else{throw $$e;}}}while(a.yo.gR){try{b=Long_fromInt(2147483647);continue _;}catch($$e){$$je=Y($$e);if($$je instanceof E0){}else{throw $$e;}}}return;default:E$();}}C4().s(a,
b,$p);}
function Sr(){}
function In(){}
function Gn(){D.call(this);}
function P0(a){return a.gP?0:1;}
function Q$(a,b){var c,d;c=a.kX();a:{while(c.qk()){b:{d=c.mS();if(d!==null){if(!d.eo(b))break b;else break a;}if(b===null)break a;}}return 0;}return 1;}
function AA9(a){var b,c,d,e,f;b=J(D,IQ(a));c=b.data;d=0;e=Oz(a);while(Gb(e)){f=d+1|0;c[d]=Ll(e);d=f;}return b;}
function UJ(a,b){var c,d,e,f,g;c=b.data;d=a.s;e=c.length;if(e<d)b=AEJ(Kz(Dl(b)),d);else while(d<e){c[d]=null;d=d+1|0;}e=0;f=Jm(a);while(KE(f)){c=b.data;g=e+1|0;c[e]=KU(f);e=g;}return b;}
function DF(a,b){var c,d;c=0;d=b.kX();while(d.qk()){if(!a.sS(d.mS()))continue;c=1;}return c;}
function Ge(a,b){var c,d;c=0;d=Jm(a);while(KE(d)){if(b.rA(KU(d))){AMc(d);c=1;}}return c;}
function J6(){}
function Gf(){Gn.call(this);this.d7=0;}
function Fx(a,b){AER(a,a.gP,b);return 1;}
function Jm(a){var b;b=new TB;b.lb=a;b.yp=b.lb.d7;b.ss=b.lb.s;b.ni=(-1);return b;}
function ABc(a,b){var c,d,e;c=a.s;d=0;a:{while(d<c){b:{e=Z(a,d);if(b!==null){if(!b.eo(e))break b;else break a;}if(e===null)break a;}d=d+1|0;}return (-1);}return d;}
function Mt(){Gf.call(this);}
function AER(a,b,c){if(b>=0){ABv(Wp(a,b),c);return;}c=new BS;P(c);M(c);}
function Tp(a,b){var c,d;if(b>=0){c=Wp(a,b);d=Fm(c);AHi(c);return d;}c=new BS;P(c);M(c);}
function AUv(a){return H0(a);}
function OG(){}
function Xm(){}
function AEG(){var a=this;Mt.call(a);a.pD=null;a.ql=null;a.gP=0;}
function QZ(){var a=new AEG();A2Q(a);return a;}
function A2Q(a){return;}
function A9a(a){return a.gP;}
function Ox(a){a.pD=null;a.ql=null;a.gP=0;a.d7=a.d7+1|0;}
function H0(a){return AJA(a,a.pD,null,0);}
function Wp(a,b){var c,d,e;if(b<0){c=new BS;P(c);M(c);}if(b<=(a.gP/2|0)){d=a.pD;e=0;while(e<b){d=d.hs;e=e+1|0;}return AJA(a,d,d===null?null:d.ix,b);}if(b>a.gP){c=new BS;P(c);M(c);}c=a.ql;e=b;while(e<a.gP){c=c.ix;e=e+1|0;}return AJA(a,c===null?null:c.hs,c,b);}
function AOa(){D.call(this);}
function F$(){D.call(this);}
function ABI(){F$.call(this);}
function AKG(){F$.call(this);}
function Jf(){}
function Fb(){Gn.call(this);}
function Fu(a,b){var c,d;c=0;if(IQ(a)>=b.lX()){d=b.kX();while(d.qk()){if(!KX(a,d.mS()))continue;c=1;}}else{d=Oz(a);while(Gb(d)){if(b.rA(Ll(d))){c=1;ADS(d);}}}return c;}
function A5T(a,b){var c,d;if(a===b)return 1;if(!Sq(b,Jf))return 0;c=b;if(IQ(a)!=IQ(c))return 0;d=Oz(c);while(Gb(d)){if(WE(a,Ll(d)))continue;else return 0;}return 1;}
function AS4(a){var b,c,d,e,f,g;b=AA9(a);if(b===null)c=0;else{c=(-1515898884);d=0;while(true){e=b.data;if(d>=e.length)break;f=e[d];g=(f!==null?f.fl():0)^528111840;c=No(g,4)^(g>>>7|g<<25)^No(c,13);d=d+1|0;}}return c;}
function ER(){}
function AQl(){Fb.call(this);this.l8=null;}
function Ga(){var a=new AQl();A06(a);return a;}
function A06(a){a.l8=Df();}
function Xk(a,b){return BP(a.l8,b,a)!==null?0:1;}
function WE(a,b){return D0(a.l8,b);}
function Oz(a){return ACU(AKc(a.l8));}
function KX(a,b){return Q_(a.l8,b)===null?0:1;}
function IQ(a){return a.l8.f7;}
function LT(){}
function FY(){var a=this;D.call(a);a.wY=null;a.w8=null;}
function ACe(){var a=this;FY.call(a);a.f7=0;a.cO=null;a.g7=0;a.Fa=0.0;a.uH=0;}
function Df(){var a=new ACe();AVv(a);return a;}
function A52(a,b){return J(IH,b);}
function AVv(a){var b;b=AG0(16);a.f7=0;a.cO=J(IH,b);a.Fa=0.75;RQ(a);}
function AG0(b){var c;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;}
function Vd(a){var b;if(a.f7>0){a.f7=0;b=a.cO;ZG(b,0,b.data.length,null);a.g7=a.g7+1|0;}}
function RQ(a){a.uH=a.cO.data.length*a.Fa|0;}
function D0(a,b){return VQ(a,b)===null?0:1;}
function AEe(a,b){var c,d,e;a:{if(b===null){c=0;b:while(true){if(c>=a.cO.data.length)break a;d=a.cO.data[c];while(d!==null){if(d.e6===null)break b;d=d.eE;}c=c+1|0;}return 1;}c=0;c:while(true){if(c>=a.cO.data.length)break a;d=a.cO.data[c];while(d!==null){e=d.e6;if(b!==e&&!b.eo(e)?0:1)break c;d=d.eE;}c=c+1|0;}return 1;}return 0;}
function CP(a,b){var c;c=VQ(a,b);if(c===null)return null;return c.e6;}
function VQ(a,b){var c,d;if(b===null)c=QU(a);else{d=b.fl();c=P9(a,b,d&(a.cO.data.length-1|0),d);}return c;}
function P9(a,b,c,d){var e;e=a.cO.data[c];while(e!==null&&!(e.pV==d&&AI6(b,e.gb))){e=e.eE;}return e;}
function QU(a){var b;b=a.cO.data[0];while(b!==null&&b.gb!==null){b=b.eE;}return b;}
function AKc(a){var b;if(a.wY===null){b=new PO;b.Cv=a;a.wY=b;}return a.wY;}
function Rg(a,b,c){return BP(a,b,c);}
function BP(a,b,c){var d,e,f,g;if(b===null){d=QU(a);if(d===null){a.g7=a.g7+1|0;d=RN(a,null,0,0);e=a.f7+1|0;a.f7=e;if(e>a.uH)Wu(a);}}else{e=b.fl();f=e&(a.cO.data.length-1|0);d=P9(a,b,f,e);if(d===null){a.g7=a.g7+1|0;d=RN(a,b,f,e);e=a.f7+1|0;a.f7=e;if(e>a.uH)Wu(a);}}g=d.e6;d.e6=c;return g;}
function RN(a,b,c,d){var e,f;e=new IH;f=null;e.gb=b;e.e6=f;e.pV=d;e.eE=a.cO.data[c];a.cO.data[c]=e;return e;}
function ALE(a,b){var c,d,e,f,g,h,i;c=AG0(!b?1:b<<1);d=J(IH,c);e=d.data;f=0;c=c-1|0;while(f<a.cO.data.length){g=a.cO.data[f];a.cO.data[f]=null;while(g!==null){h=g.pV&c;i=g.eE;g.eE=e[h];e[h]=g;g=i;}f=f+1|0;}a.cO=d;RQ(a);}
function Wu(a){ALE(a,a.cO.data.length);}
function Q_(a,b){var c;c=AEm(a,b);if(c===null)return null;return c.e6;}
function AEm(a,b){var c,d,e,f,g;a:{c=0;d=null;if(b===null){e=a.cO.data[0];while(e!==null){if(e.gb===null)break a;f=e.eE;d=e;e=f;}}else{g=b.fl();c=g&(a.cO.data.length-1|0);e=a.cO.data[c];while(e!==null&&!(e.pV==g&&AI6(b,e.gb))){f=e.eE;d=e;e=f;}}}if(e===null)return null;if(d!==null)d.eE=e.eE;else a.cO.data[c]=e.eE;a.g7=a.g7+1|0;a.f7=a.f7-1|0;return e;}
function A4F(a){return a.f7;}
function Iu(a){var b;if(a.w8===null){b=new PP;b.we=a;a.w8=b;}return a.w8;}
function AI6(b,c){return b!==c&&!b.eo(c)?0:1;}
function AKd(){F$.call(this);}
function YX(){D.call(this);}
function BfW(){var a=new YX();A0l(a);return a;}
function A0l(a){return;}
function A3E(b){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.Gq=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.IY=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=BaA(callback);return thread.suspend(function(){try{Bcl(b,callback);}catch($e){callback.IY($rt_exception($e));}});}
function Bcl(b,c){var d,e;d=typeof indexedDB!=='undefined'?indexedDB:null;if(d===null){CM(c,SW(0,0,B(198),null));return;}e=d.open($rt_ustr(b),1);b=new TN;b.AP=c;b=Cu(b,"handleEvent");e.onBlocked=b;b=new TM;b.Es=c;b.EM=e;b=Cu(b,"handleEvent");e.onsuccess=b;b=new TL;b.Dy=c;b=Cu(b,"handleEvent");e.onerror=b;b=new TK;b.Bq=e;b=Cu(b,"handleEvent");e.onupgradeneeded=b;}
function A5s(b,c){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.Gq=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.IY=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=BaA(callback);return thread.suspend(function(){try{A_U(b,c,callback);}catch($e){callback.IY($rt_exception($e));}});}
function A_U(b,c,d){var e;b=b.transaction("filesystem","readwrite").objectStore("filesystem");c=PX($rt_ustr(c));e=b.delete(c);b=new TJ;b.CK=d;b=Cu(b,"handleEvent");e.onsuccess=b;b=new TG;b.Df=d;b=Cu(b,"handleEvent");e.onerror=b;}
function A_E(b,c){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.Gq=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.IY=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=BaA(callback);return thread.suspend(function(){try{Ba3(b,c,callback);}catch($e){callback.IY($rt_exception($e));}});}
function Ba3(b,c,d){var e;b=b.transaction("filesystem","readonly").objectStore("filesystem");c=PX($rt_ustr(c));e=b.get(c);b=new TF;b.Au=d;b.xd=e;b=Cu(b,"handleEvent");e.onsuccess=b;b=new TE;b.Ei=d;b=Cu(b,"handleEvent");e.onerror=b;}
function A5n(b,c,d,e,f){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.Gq=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.IY=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=BaA(callback);return thread.suspend(function(){try{BbW(b,c,d,e,f,callback);}
catch($e){callback.IY($rt_exception($e));}});}
function BbW(b,c,d,e,f,g){var h,i;h=(b.transaction("filesystem","readonly").objectStore("filesystem")).openCursor();i=$rt_createIntArray(1);b=new Rq;b.EP=h;b.Ep=g;b.y4=i;b.vG=c;b.Bm=e;b.C9=d;b.xj=f;b=Cu(b,"handleEvent");h.onsuccess=b;b=new Rr;b.DP=g;b.wM=i;b=Cu(b,"handleEvent");h.onerror=b;}
function AUu(b,c){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.Gq=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.IY=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=BaA(callback);return thread.suspend(function(){try{BcS(b,c,callback);}catch($e){callback.IY($rt_exception($e));}});}
function BcS(b,c,d){var e;b=b.transaction("filesystem","readonly").objectStore("filesystem");c=PX($rt_ustr(c));e=b.get(c);b=new Rn;b.CS=d;b.u$=e;b=Cu(b,"handleEvent");e.onsuccess=b;b=new Ro;b.Eh=d;b=Cu(b,"handleEvent");e.onerror=b;}
function AXR(b,c,d,e){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.Gq=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.IY=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=BaA(callback);return thread.suspend(function(){try{Ba$(b,c,d,e,callback);}catch($e)
{callback.IY($rt_exception($e));}});}
function Ba$(b,c,d,e,f){var g,h;b=b.transaction("filesystem","readwrite").objectStore("filesystem");g=Long_sub(B_(),new Long(596067632, 383)).lo;c=A5K($rt_ustr(c),!!d,g,e);h=b.put(c);c=new Rp;c.By=f;b=Cu(c,"handleEvent");h.onsuccess=b;b=new Rs;b.BR=f;b=Cu(b,"handleEvent");h.onerror=b;}
function A8t(b){return typeof b==='undefined'?null:typeof b.data==='undefined'?null:b.data;}
function UC(b){return typeof b==='undefined'?false:typeof b.directory==='undefined'?false:b.directory;}
function A0H(b){return typeof b==='undefined'? -1:typeof b.lastModified==='undefined'? -1:b.lastModified;}
function PX(b){return [b];}
function AZS(b){return typeof b==="string"?b:typeof b==="undefined"?null:typeof b[0]==="string"?b[0]:null;}
function A5K(b,c,d,e){return {path:b,directory:c,lastModified:d,data:e};}
function AE3(){var a=this;D.call(a);a.Ff=0;a.E4=0;a.uA=null;a.xU=null;}
function SW(a,b,c,d){var e=new AE3();AXp(e,a,b,c,d);return e;}
function AXp(a,b,c,d,e){a.Ff=b;a.E4=c;a.uA=d;a.xU=e;}
function EV(){var a=this;D.call(a);a.HC=null;a.tb=0;}
function BfX(a,b){var c=new EV();FT(c,a,b);return c;}
function FT(a,b,c){a.HC=b;a.tb=c;}
function A0I(a){return a.tb;}
function ATv(a,b){return a!==b?0:1;}
function AX3(a){return MM(a);}
function JW(a){var b;b=Dl(a);if(!Q7(JL(b),F(EV)))b=JL(b);return b;}
function XN(a,b){var c,d;if(JW(b)===JW(a))return R(a.tb,b.tb);c=new Cc;d=new U;W(d);Bo(c,V(I(I(I(I(d,B(199)),IF(JW(a))),B(200)),IF(JW(b)))));M(c);}
function AXB(a,b){return XN(a,b);}
function E8(){EV.call(this);}
var Bfx=null;var Bfw=null;var Bfv=null;var BfY=null;function AHk(){var b,c,d;b=new E8;FT(b,B(201),0);Bfx=b;b=new E8;FT(b,B(202),1);Bfw=b;b=new E8;FT(b,B(203),2);Bfv=b;c=J(E8,3);d=c.data;d[0]=Bfx;d[1]=Bfw;d[2]=Bfv;BfY=c;}
function Qv(){}
function Vc(){D.call(this);this.yF=null;}
function BaA(b){var c;c=new Vc;c.yF=b;return c;}
function CM(a,b){a.yF.Gq(b);}
function A16(a,b){a.yF.IY(b);}
function AQH(){D.call(this);}
function Xr(){}
function W9(){var a=this;D.call(a);a.vo=null;a.Ac=null;}
function ARh(a){var b,c,d;if(a.vo.readyState==4){b=new Uint8Array(a.vo.response);c=$rt_createByteArray(b.byteLength);Be();BdD=c;d=0;while(d<V_().data.length){V_().data[d]=b[d]<<24>>24;d=d+1|0;}CM(a.Ac,B(204));}}
function A1Y(a){ARh(a);}
function H3(){D.call(this);}
function AQg(){var a=this;H3.call(a);a.w6=null;a.ko=0;a.F9=0;a.qN=0;}
function Ur(a){var b=new AQg();AT4(b,a);return b;}
function AT4(a,b){var c;c=b.data.length;a.w6=b;a.ko=0;a.F9=0;a.qN=0+c|0;}
function A4C(a){var b,c,d;if(a.ko>=a.qN)b=(-1);else{c=a.w6.data;d=a.ko;a.ko=d+1|0;b=c[d]&255;}return b;}
function A_e(a,b,c,d){var e,f,g,h,i;e=CB(d,a.qN-a.ko|0);f=0;while(f<e){g=b.data;d=c+1|0;h=a.w6.data;i=a.ko;a.ko=i+1|0;g[c]=h[i];f=f+1|0;c=d;}if(e<=0)e=(-1);return e;}
function A5o(a){return a.qN-a.ko|0;}
function AWQ(a){return;}
function IW(){H3.call(this);this.iA=null;}
function BfZ(a){var b=new IW();R9(b,a);return b;}
function R9(a,b){a.iA=b;}
function AKB(a){return a.iA.wX();}
function JC(a){a.iA.lS();}
function Pp(){}
function P4(){IW.call(this);this.ea=null;}
function O2(a){var b=new P4();AIv(b,a);return b;}
function AIv(a,b){R9(a,b);a.ea=$rt_createByteArray(8);}
function NR(a,b){var c;c=b.data;return a.iA.ob(b,0,c.length);}
function N2(a){var b,c;b=a.iA.Cu();if(b>=0)return b<<24>>24;c=new FH;P(c);M(c);}
function J$(a,b){var c,d;c=0;while(c<b){d=a.iA.ob(a.ea,c,b-c|0);if(d==(-1))return d;c=c+d|0;}return c;}
function APm(a){return $rt_longBitsToDouble(To(a));}
function AA3(a){return $rt_intBitsToFloat(H9(a));}
function AMV(a,b){QT(a,b,0,b.data.length);}
function QT(a,b,c,d){var e,f;if(d<0){e=new BS;P(e);M(e);}if(!d)return;if(a.iA===null){e=new E3;P(e);M(e);}if(b===null){e=new E3;P(e);M(e);}if(c>=0&&c<=(b.data.length-d|0)){while(d>0){f=a.iA.ob(b,c,d);if(f<0){e=new FH;P(e);M(e);}c=c+f|0;d=d-f|0;}return;}e=new BS;P(e);M(e);}
function H9(a){var b;if(J$(a,4)<0){b=new FH;P(b);M(b);}return (a.ea.data[0]&255)<<24|(a.ea.data[1]&255)<<16|(a.ea.data[2]&255)<<8|a.ea.data[3]&255;}
function To(a){var b;if(J$(a,8)<0){b=new FH;P(b);M(b);}return Long_or(Long_shl(Long_and(Long_fromInt((a.ea.data[0]&255)<<24|(a.ea.data[1]&255)<<16|(a.ea.data[2]&255)<<8|a.ea.data[3]&255),new Long(4294967295, 0)),32),Long_and(Long_fromInt((a.ea.data[4]&255)<<24|(a.ea.data[5]&255)<<16|(a.ea.data[6]&255)<<8|a.ea.data[7]&255),new Long(4294967295, 0)));}
function XM(a){var b;if(J$(a,2)<0){b=new FH;P(b);M(b);}return ((a.ea.data[0]&255)<<24>>16|a.ea.data[1]&255)<<16>>16;}
function APG(a){var b;if(J$(a,2)<0){b=new FH;P(b);M(b);}return ((a.ea.data[0]&255)<<8|a.ea.data[1]&255)&65535;}
function GU(a){return ALA(a,APG(a));}
function ALA(a,b){var c,d;c=$rt_createByteArray(b);d=$rt_createCharArray(b);QT(a,c,0,b);return AW3(c,d,0,b);}
function AW3(b,c,d,e){var f,g,h,i,j,k,l,m,n,o;f=0;g=0;a:{while(f<e){h=b.data;i=c.data;j=f+1|0;k=h[d+f|0]&65535;i[g]=k;l=i[g];if(k<128)g=g+1|0;else if((l&224)==192){if(j>=e){m=new Hw;Bo(m,B(205));M(m);}k=j+1|0;j=h[d+j|0];if((j&192)!=128){m=new Hw;Bo(m,B(206));M(m);}n=g+1|0;i[g]=((l&31)<<6|j&63)&65535;g=n;j=k;}else{if((l&240)!=224){m=new Hw;Bo(m,B(206));M(m);}f=j+1|0;if(f>=e){m=new Hw;Bo(m,B(206));M(m);}n=h[d+j|0];j=f+1|0;o=h[d+f|0];if((n&192)!=128)break a;if((o&192)!=128)break a;f=g+1|0;i[g]=((l&15)<<12|(n&63)
<<6|o&63)&65535;g=f;}f=j;}return Lj(c,0,g);}m=new Hw;Bo(m,B(206));M(m);}
function MU(){var a=this;D.call(a);a.wt=null;a.H5=null;}
function R3(b){var c,d;if(IA(b))M(ALq(b));if(!APS(Ba(b,0)))M(ALq(b));c=1;while(c<Bi(b)){a:{d=Ba(b,c);switch(d){case 43:case 45:case 46:case 58:case 95:break;default:if(APS(d))break a;else M(ALq(b));}}c=c+1|0;}}
function APS(b){return !(b>=48&&b<=57)&&!(b>=97&&b<=122)&&b<65&&b>90?0:1;}
function X8(b){var c;if(b===null){b=new Cc;Bo(b,B(207));M(b);}R3(b);c=CP(Bf0,AOj(b));if(c!==null)return c;c=new Vj;P(c);c.Iv=b;M(c);}
function AN3(a,b){var c,d,$$je;a:{try{b=AJM(ADK(AQ4(AFx(a),Bf1),Bf1),b);}catch($$e){$$je=Y($$e);if($$je instanceof GY){c=$$je;break a;}else{throw $$e;}}return b;}d=new W4;d.oq=1;d.rR=1;d.vy=B(208);d.jG=c;M(d);}
function ABz(a,b){return AJE(a.wt,b.wt);}
function A6r(a,b){return ABz(a,b);}
function WS(){var a=this;IW.call(a);a.gj=null;a.oj=null;a.lN=0;a.oI=0;a.ye=0;a.xY=0;a.wF=null;a.GZ=null;}
function AS2(a){var b;if(a.lN){b=new BT;Bo(b,B(209));M(b);}return ALZ(a,a.wF,0,1)==(-1)?(-1):a.wF.data[0]&255;}
function ALZ(a,b,c,d){var e,f,g;if(a.lN){e=new BT;Bo(e,B(209));M(e);}if(b===null){e=new E3;P(e);M(e);}if(c>=0&&d>=0&&d<=(b.data.length-c|0)){if(!d)return 0;if(a.oI)return (-1);f=0;AAJ(a.gj,b,c,d);a:{while(!a.oI){if(!a.gj.N)ABk(a);b:{g=AF5(a.gj,0);f=f+(a.gj.pO-c|0)|0;c=a.gj.pO;switch(g){case -3:e=new BT;Bo(e,a.gj.b9);M(e);case 1:case 2:break;default:break b;}a.oI=1;if(g==2)return (-1);}if(!a.gj.ib)break a;}}return f;}e=new BS;P(e);M(e);}
function A0k(a){var b;if(!a.lN){if(!a.oI)return 1;return 0;}b=new BT;Bo(b,B(209));M(b);}
function A8d(a){if(!a.lN){if(a.xY)AG_(a.gj);if(a.ye)a.iA.lS();a.lN=1;}}
function ABk(a){var b,c;if(a.lN){b=new BT;Bo(b,B(209));M(b);}a:{c=a.iA.ob(a.oj,0,a.oj.data.length);if(c==(-1)){if(a.gj.hZ.d0)break a;if(Yk(a.gj))break a;a.oj.data[0]=0;c=1;}AJ9(a.gj,a.oj,0,c,1);return;}if(Long_ne(a.gj.hZ.rT,Long_fromInt(-1))){b=new BT;Bo(b,B(210));M(b);}b=new FH;Bo(b,B(211));M(b);}
function M$(){var a=this;D.call(a);a.h8=null;a.ju=0;a.nm=Long_ZERO;}
function Jd(a,b){var c,d;c=a.h8.data;d=a.ju;a.ju=d+1|0;c[d]=b;if(a.ju==a.h8.data.length){S_(a,a.h8,0);a.ju=0;}a.nm=Long_add(a.nm,Long_fromInt(1));}
function ADU(a,b,c,d){a:{while(a.ju){if(d<=0)break a;Jd(a,b.data[c]);c=c+1|0;d=d+(-1)|0;}}while(d>a.h8.data.length){S_(a,b,c);c=c+a.h8.data.length|0;d=d-a.h8.data.length|0;a.nm=Long_add(a.nm,Long_fromInt(a.h8.data.length));}while(d>0){Jd(a,b.data[c]);c=c+1|0;d=d+(-1)|0;}}
function APk(a){var b;b=Long_shl(a.nm,3);Jd(a,(-128));while(a.ju){Jd(a,0);}AK1(a,b);ME(a);}
function ADu(){var a=this;M$.call(a);a.py=0;a.pz=0;a.pA=0;a.pB=0;a.pC=0;a.ek=null;a.mU=0;}
function BaR(){var a=new ADu();A$c(a);return a;}
function A$c(a){a.h8=$rt_createByteArray(4);a.ju=0;a.ek=$rt_createIntArray(80);OM(a);}
function S_(a,b,c){var d,e;d=b.data;b=a.ek.data;e=a.mU;a.mU=e+1|0;b[e]=(d[c]&255)<<24|(d[c+1|0]&255)<<16|(d[c+2|0]&255)<<8|d[c+3|0]&255;if(a.mU==16)ME(a);}
function HN(a,b,c,d){c=c.data;c[d]=b>>>24<<24>>24;c[d+1|0]=b>>>16<<24>>24;c[d+2|0]=b>>>8<<24>>24;c[d+3|0]=b<<24>>24;}
function AK1(a,b){if(a.mU>14)ME(a);a.ek.data[14]=b.hi;a.ek.data[15]=Long_and(b,Long_fromInt(-1)).lo;}
function AL_(a,b,c){APk(a);HN(a,a.py,b,c);HN(a,a.pz,b,c+4|0);HN(a,a.pA,b,c+8|0);HN(a,a.pB,b,c+12|0);HN(a,a.pC,b,c+16|0);OM(a);return 20;}
function OM(a){var b;a.nm=Long_ZERO;a.ju=0;b=0;while(b<a.h8.data.length){a.h8.data[b]=0;b=b+1|0;}a.py=1732584193;a.pz=(-271733879);a.pA=(-1732584194);a.pB=271733878;a.pC=(-1009589776);a.mU=0;b=0;while(b!=a.ek.data.length){a.ek.data[b]=0;b=b+1|0;}}
function Vl(a,b,c,d){return b^c^d;}
function Ff(a,b,c){return b<<c|b>>>(32-c|0);}
function ME(a){var b,c,d,e,f,g,h,i,j;b=16;while(b<=79){a.ek.data[b]=Ff(a,a.ek.data[b-3|0]^a.ek.data[b-8|0]^a.ek.data[b-14|0]^a.ek.data[b-16|0],1);b=b+1|0;}c=a.py;d=a.pz;e=a.pA;f=a.pB;g=a.pC;h=0;while(h<=19){i=(((Ff(a,c,5)+(d&e|(d^(-1))&f)|0)+g|0)+a.ek.data[h]|0)+1518500249|0;b=Ff(a,d,30);h=h+1|0;g=f;f=e;e=b;d=c;c=i;}j=20;while(j<=39){i=(((Ff(a,c,5)+Vl(a,d,e,f)|0)+g|0)+a.ek.data[j]|0)+1859775393|0;b=Ff(a,d,30);j=j+1|0;g=f;f=e;e=b;d=c;c=i;}h=40;while(h<=59){i=(((Ff(a,c,5)+(d&e|d&f|e&f)|0)+g|0)+a.ek.data[h]|0)
+(-1894007588)|0;b=Ff(a,d,30);h=h+1|0;g=f;f=e;e=b;d=c;c=i;}j=60;while(j<=79){i=(((Ff(a,c,5)+Vl(a,d,e,f)|0)+g|0)+a.ek.data[j]|0)+(-899497514)|0;b=Ff(a,d,30);j=j+1|0;g=f;f=e;e=b;d=c;c=i;}a.py=a.py+c|0;a.pz=a.pz+d|0;a.pA=a.pA+e|0;a.pB=a.pB+f|0;a.pC=a.pC+g|0;a.mU=0;b=0;while(b!=a.ek.data.length){a.ek.data[b]=0;b=b+1|0;}}
function AJc(){D.call(this);}
function Bf2(){var a=new AJc();A53(a);return a;}
function A53(a){return;}
function O$(b,c){var d,e,f,g;b=b.data;d=$rt_createCharArray(c);e=d.data;f=CB(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function Oi(b,c){var d,e,f,g;b=b.data;d=$rt_createByteArray(c);e=d.data;f=CB(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function Ns(b,c){var d,e,f,g;d=b.data;e=AEJ(Kz(Dl(b)),c);f=CB(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function M1(b,c){var d,e,f,g;b=b.data;d=0;e=b.length;if(d>e){f=new Cc;P(f);M(f);}while(d<e){g=d+1|0;b[d]=c;d=g;}}
function ZG(b,c,d,e){var f,g;if(c>d){e=new Cc;P(e);M(e);}while(c<d){f=b.data;g=c+1|0;f[c]=e;c=g;}}
function P2(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;d=b.data.length;if(!d)return;e=J(D,d);f=1;g=b;while(f<d){h=0;while(true){i=g.data;j=i.length;if(h>=j)break;k=CB(j,h+f|0);l=h+(2*f|0)|0;m=CB(j,l);n=h;j=k;a:{b:{while(h!=k){if(j==m)break b;o=i[h];p=i[j];if(c.qg(o,p)>0){q=e.data;r=n+1|0;q[n]=p;j=j+1|0;}else{q=e.data;r=n+1|0;q[n]=o;h=h+1|0;}n=r;}while(true){if(j>=m)break a;q=e.data;h=n+1|0;r=j+1|0;q[n]=i[j];n=h;j=r;}}while(true){if(h>=k)break a;q=e.data;j=n+1|0;r=h+1|0;q[n]=i[h];n=j;h=r;}}h=l;}f=f*2|0;i=g;g=e;e
=i;}c:{if(g!==b){n=0;while(true){b=g.data;if(n>=b.length)break c;e.data[n]=b[n];n=n+1|0;}}}}
function AOt(b,c){var d,e,f,g,h;b=b.data;d=0;e=b.length;if(d>e){f=new Cc;P(f);M(f);}g=e-1|0;a:{while(true){e=(d+g|0)/2|0;h=b[e];if(h==c)break;if(c>=h){d=e+1|0;if(d>g){e= -e-2|0;break a;}}else{g=e-1|0;if(g<d){e= -e-1|0;break a;}}}}return e;}
function Jc(){var a=this;D.call(a);a.Dc=0;a.B6=null;a.xi=null;}
function Bf3(a,b,c){var d=new Jc();RL(d,a,b,c);return d;}
function RL(a,b,c,d){a.Dc=b;a.B6=c;a.xi=d;}
function ABD(a,b){var c,d,e,f,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(Yv(b,a.B6)<a.Dc){c=0;d=null;if(c<10){e=1;f=b.bg;$p=1;continue _;}}return;case 1:AOy(a,b,e,f,d);if(C()){break _;}c=c+1|0;if(c>=10)return;e=1;f=b.bg;continue _;default:E$();}}C4().s(a,b,c,d,e,f,$p);}
function A4$(a,b,c,d){return CO((c+E(b.q,256)|0)-128|0,E(b.q,128),(d+E(b.q,256)|0)-128|0);}
function AOy(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,$$je,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=0;g=K(d.d);h=K(d.e);i=E(b.q,a.xi.data.length);j=a.Aq(b,g,h);k=j.eF;l=j.e0;m=j.eG;$p=1;case 1:$z
=AAE(b,k,l,m);if(C()){break _;}c=$z;if(c)return 0;$p=2;case 2:$z=AB3(b,k,l,m);if(C()){break _;}e=$z;if(e!==Bf4)return 0;n=0;while(n<3){o=6;p=0;h=k;q=l;r=m;if(p<3){h=h+(E(b.q,o)-E(b.q,o)|0)|0;q=q+(E(b.q,1)-E(b.q,1)|0)|0;r=r+(E(b.q,o)-E(b.q,o)|0)|0;c=q-1|0;$p=3;continue _;}n=n+1|0;}return f;case 3:$z=AAE(b,h,c,r);if(C()){break _;}c=$z;if(c){$p=4;continue _;}p=p+1|0;while(true){if(p<3){h=h+(E(b.q,o)-E(b.q,o)|0)|0;q=q+(E(b.q,1)-E(b.q,1)|0)|0;r=r+(E(b.q,o)-E(b.q,o)|0)|0;c=q-1|0;continue _;}n=n+1|0;if(n>=3)break;o
=6;p=0;h=k;q=l;r=m;}return f;case 4:$z=AAE(b,h,q,r);if(C()){break _;}c=$z;if(!c){$p=5;continue _;}p=p+1|0;while(true){if(p<3){h=h+(E(b.q,o)-E(b.q,o)|0)|0;q=q+(E(b.q,1)-E(b.q,1)|0)|0;r=r+(E(b.q,o)-E(b.q,o)|0)|0;c=q-1|0;$p=3;continue _;}n=n+1|0;if(n>=3)break;o=6;p=0;h=k;q=l;r=m;}return f;case 5:$z=AB3(b,h,q,r);if(C()){break _;}e=$z;if(!e.nE()){c=q+1|0;$p=6;continue _;}p=p+1|0;while(true){if(p<3){h=h+(E(b.q,o)-E(b.q,o)|0)|0;q=q+(E(b.q,1)-E(b.q,1)|0)|0;r=r+(E(b.q,o)-E(b.q,o)|0)|0;c=q-1|0;$p=3;continue _;}n=n+1|
0;if(n>=3)break;o=6;p=0;h=k;q=l;r=m;}return f;case 6:a:{$z=AAE(b,h,c,r);if(C()){break _;}c=$z;if(!c){b:{s=h+0.5;t=q+1.0;u=r+0.5;if(d===null){v=s-b.fk;w=t-b.p0;x=u-b.fj;if(v*v+w*w+x*x>=1024.0)break b;break a;}y=s-d.d;z=t-d.j;ba=u-d.e;if(y*y+z*z+ba*ba<1024.0)break a;}c:{try{e=a.xi.data[i];bb=J(FS,1);bb.data[0]=F(F0);e=WF(e,bb);bb=J(D,1);bb.data[0]=b;bc=WI(e,bb);break c;}catch($$e){$$je=Y($$e);if($$je instanceof BD){}else{throw $$e;}}return f;}y=s;z=t;ba=u;Kv(bc,y,z,ba,N(b.q)*360.0,0.0);$p=7;continue _;}}p=p+1
|0;while(true){if(p<3){h=h+(E(b.q,o)-E(b.q,o)|0)|0;q=q+(E(b.q,1)-E(b.q,1)|0)|0;r=r+(E(b.q,o)-E(b.q,o)|0)|0;c=q-1|0;$p=3;continue _;}n=n+1|0;if(n>=3)break;o=6;p=0;h=k;q=l;r=m;}return f;case 7:$z=bc.uR(y,z,ba);if(C()){break _;}c=$z;if(c){f=f+1|0;$p=8;continue _;}p=p+1|0;while(true){if(p<3){h=h+(E(b.q,o)-E(b.q,o)|0)|0;q=q+(E(b.q,1)-E(b.q,1)|0)|0;r=r+(E(b.q,o)-E(b.q,o)|0)|0;c=q-1|0;$p=3;continue _;}n=n+1|0;if(n>=3)break;o=6;p=0;h=k;q=l;r=m;}return f;case 8:AOi(b,bc);if(C()){break _;}p=p+1|0;while(true){if(p<3){h
=h+(E(b.q,o)-E(b.q,o)|0)|0;q=q+(E(b.q,1)-E(b.q,1)|0)|0;r=r+(E(b.q,o)-E(b.q,o)|0)|0;c=q-1|0;$p=3;continue _;}n=n+1|0;if(n>=3)break;o=6;p=0;h=k;q=l;r=m;}return f;default:E$();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,$p);}
function U3(){Jc.call(this);this.Gy=null;}
function A1W(a,b,c,d){return CO((c+E(b.q,256)|0)-128|0,E(b.q,E(b.q,E(b.q,112)+8|0)+8|0),(d+E(b.q,256)|0)-128|0);}
function C6(){var a=this;D.call(a);a.mD=0;a.bH=null;a.bB=null;a.l=null;a.bS=0.0;a.cS=0.0;a.bR=0.0;a.d=0.0;a.j=0.0;a.e=0.0;a.g=0.0;a.i=0.0;a.h=0.0;a.u=0.0;a.I=0.0;a.P=0.0;a.T=0.0;a.L=null;a.cx=0;a.jZ=0;a.x8=0;a.lk=0;a.cR=0;a.c4=0.0;a.c1=0.0;a.eO=0.0;a.tW=0.0;a.g_=0.0;a.i9=0;a.fH=0.0;a.rg=0;a.cs=0.0;a.b7=0.0;a.ct=0.0;a.el=0.0;a.rr=0.0;a.o5=0;a.n5=0.0;a.I5=0;a.m=null;a.oQ=0;a.nJ=0;a.cV=0;a.n6=0;a.tn=0;a.dy=0;a.f_=0;a.oz=0;a.tJ=null;a.g4=0.0;a.gZ=0.0;}
function Bf5(a){var b=new C6();FC(b,a);return b;}
function FC(a,b){a.mD=0;a.L=Nu(0.0,0.0,0.0,0.0,0.0,0.0);a.cx=0;a.jZ=0;a.x8=0;a.lk=1;a.cR=0;a.c4=0.0;a.c1=0.6000000238418579;a.eO=1.7999999523162842;a.tW=0.0;a.g_=0.0;a.i9=1;a.fH=0.0;a.rg=1;a.el=0.0;a.rr=0.0;a.o5=0;a.n5=0.0;a.I5=0;a.m=new DB;a.oQ=0;a.nJ=1;a.cV=0;a.n6=300;a.tn=0;a.dy=0;a.f_=300;a.oz=1;a.l=b;CU(a,0.0,0.0,0.0);}
function Cb(a){a.cR=1;}
function D2(a,b,c){a.c1=b;a.eO=c;}
function WU(a,b,c){a.u=b;a.I=c;}
function CU(a,b,c,d){var e,f,g,h,i,j;a.d=b;a.j=c;a.e=d;e=a.c1/2.0;f=a.eO/2.0;g=a.L;h=e;i=b-h;j=f;M6(g,i,c-j,d-h,b+h,c+j,d+h);}
function AI$(a){var $p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:a.Je();if(C()){break _;}return;default:E$();}}C4().s(a,$p);}
function AEW(a){var b,c,d,e,f,g,h,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.bB!==null&&a.bB.cR)a.bB=null;a.oQ=a.oQ+1|0;a.tW=a.g_;a.bS=a.d;a.cS=a.j;a.bR=a.e;a.T=a.I;a.P=a.u;$p=1;case 1:$z=a.HK();if(C()){break _;}b=$z;if(!b)a.tn=0;else{a:{if(!a.tn&&!a.oz){c=Ce(a.g*a.g*0.20000000298023224+a.i*a.i+a.h*a.h*0.20000000298023224)*0.20000000298023224;if(c>1.0)c=1.0;Di(a.l,a,B(212),c,1.0+(N(a.m)-N(a.m))*0.4000000059604645);d
=K(a.L.M);b=0;e=d+1.0;while(b<1.0+a.c1*20.0){f=(N(a.m)*2.0-1.0)*a.c1;g=(N(a.m)*2.0-1.0)*a.c1;BV(a.l,B(213),a.d+f,e,a.e+g,a.g,a.i-N(a.m)*0.20000000298023224,a.h);b=b+1|0;}b=0;while(true){if(b>=1.0+a.c1*20.0)break a;f=(N(a.m)*2.0-1.0)*a.c1;g=(N(a.m)*2.0-1.0)*a.c1;BV(a.l,B(214),a.d+f,e,a.e+g,a.g,a.i,a.h);b=b+1|0;}}}a.fH=0.0;a.tn=1;a.cV=0;}if(a.cV>0){if(!(a.cV%20|0)){h=null;b=1;$p=4;continue _;}a.cV=a.cV-1|0;}$p=2;case 2:$z=ACp(a);if(C()){break _;}b=$z;if(b){h=null;b=10;$p=3;continue _;}if(a.j>=(-64.0)){a.oz=0;return;}$p
=5;continue _;case 3:a.fr(h,b);if(C()){break _;}a.cV=600;if(a.j>=(-64.0)){a.oz=0;return;}$p=5;continue _;case 4:a.fr(h,b);if(C()){break _;}a.cV=a.cV-1|0;$p=2;continue _;case 5:a.DR();if(C()){break _;}a.oz=0;return;default:E$();}}C4().s(a,b,c,d,e,f,g,h,$p);}
function X3(a){Cb(a);}
function AHh(a,b,c,d){var e,f,g,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=Uh(a.L,b,c,d);f=a.l;$p=1;case 1:$z=XW(f,a,e);if(C()){break _;}f=$z;if(f.s>0)return 0;f=a.l;$p=2;case 2:$z=AJk(f,e);if(C()){break _;}g=$z;return g?0:1;default:E$();}}C4().s(a,b,c,d,e,f,g,$p);}
function ARG(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.o5){F2(a.L,b,c,d);a.d=(a.L.R+a.L.V)/2.0;a.j=a.L.M+a.c4-a.el;a.e=(a.L.S+a.L.W)/2.0;return;}e=a.d;f=a.e;g=Qh(a.L);h=a.l;i=Jh(a.L,b,c,d);$p=1;case 1:$z
=XW(h,a,i);if(C()){break _;}j=$z;k=0;l=c;while(k<CY(j)){l=Wd(Z(j,k),a.L,l);k=k+1|0;}F2(a.L,0.0,l,0.0);if(a.lk){m=d;n=b;}else if(c===l){m=d;n=b;}else{n=0.0;m=n;l=n;}a:{b:{if(!a.cx){if(c===l)break b;if(c>=0.0)break b;}o=1;break a;}o=0;}p=0;while(p<CY(j)){n=Qy(Z(j,p),a.L,n);p=p+1|0;}F2(a.L,n,0.0,0.0);if(!a.lk&&b!==n){n=0.0;m=n;l=n;}k=0;while(k<CY(j)){m=Uk(Z(j,k),a.L,m);k=k+1|0;}F2(a.L,0.0,0.0,m);if(!a.lk&&d!==m){n=0.0;m=n;l=n;}c:{if(a.rr<=0.0){q=n;r=l;s=m;}else if(!o){q=n;r=l;s=m;}else if(a.el>=0.05000000074505806)
{q=n;r=l;s=m;}else{if(b!==n)break c;if(d!==m)break c;q=n;r=l;s=m;}a.d=(a.L.R+a.L.V)/2.0;a.j=a.L.M+a.c4-a.el;a.e=(a.L.S+a.L.W)/2.0;t=R(b,q);a.jZ=!t&&d===s?0:1;k=R(c,r);a.cx=k&&c<0.0?1:0;a.x8=!a.jZ&&!k?0:1;if(!a.cx){if(r<0.0)a.fH=a.fH-r;}else if(a.fH>0.0){u=a.fH;$p=3;continue _;}if(t)a.g=0.0;if(k)a.i=0.0;if(d!==s)a.h=0.0;l=a.d-e;m=a.e-f;a.g_=a.g_+Ce(l*l+m*m)*0.6;if(!a.i9){a.el=a.el*0.4000000059604645;$p=4;continue _;}v=K(a.d);w=K(a.j-0.20000000298023224-a.c4);x=K(a.e);i=a.l;$p=6;continue _;}r=a.rr;i=Qh(a.L);Xh(a.L,
g);h=a.l;g=Jh(a.L,b,r,d);$p=2;case 2:$z=XW(h,a,g);if(C()){break _;}h=$z;y=0;while(y<CY(h)){r=Wd(Z(h,y),a.L,r);y=y+1|0;}F2(a.L,0.0,r,0.0);if(a.lk){s=d;q=b;}else if(c===r){s=d;q=b;}else{q=0.0;s=q;r=q;}k=0;while(k<CY(h)){q=Qy(Z(h,k),a.L,q);k=k+1|0;}F2(a.L,q,0.0,0.0);if(!a.lk&&b!==q){q=0.0;s=q;r=q;}t=0;while(t<CY(h)){s=Uk(Z(h,t),a.L,s);t=t+1|0;}F2(a.L,0.0,0.0,s);if(!a.lk&&d!==s){q=0.0;s=q;r=q;}if(n*n+m*m>=q*q+s*s){Xh(a.L,i);q=n;r=l;s=m;}else a.el=a.el+0.5;a.d=(a.L.R+a.L.V)/2.0;a.j=a.L.M+a.c4-a.el;a.e=(a.L.S+a.L.W)
/2.0;t=R(b,q);a.jZ=!t&&d===s?0:1;k=R(c,r);a.cx=k&&c<0.0?1:0;a.x8=!a.jZ&&!k?0:1;if(!a.cx){if(r<0.0)a.fH=a.fH-r;}else if(a.fH>0.0){u=a.fH;$p=3;continue _;}if(t)a.g=0.0;if(k)a.i=0.0;if(d!==s)a.h=0.0;l=a.d-e;m=a.e-f;a.g_=a.g_+Ce(l*l+m*m)*0.6;if(!a.i9){a.el=a.el*0.4000000059604645;$p=4;continue _;}v=K(a.d);w=K(a.j-0.20000000298023224-a.c4);x=K(a.e);i=a.l;$p=6;continue _;case 3:a.DF(u);if(C()){break _;}a.fH=0.0;if(t)a.g=0.0;if(k)a.i=0.0;if(d!==s)a.h=0.0;l=a.d-e;m=a.e-f;a.g_=a.g_+Ce(l*l+m*m)*0.6;if(!a.i9){a.el=a.el
*0.4000000059604645;$p=4;continue _;}v=K(a.d);w=K(a.j-0.20000000298023224-a.c4);x=K(a.e);i=a.l;$p=6;continue _;case 4:$z=a.HK();if(C()){break _;}t=$z;i=a.l;h=a.L;$p=5;case 5:$z=ARb(i,h);if(C()){break _;}k=$z;if(!k){if(a.cV<=0)a.cV= -a.nJ;if(t&&a.cV>0){Di(a.l,a,B(215),0.699999988079071,1.600000023841858+(N(a.m)-N(a.m))*0.4000000059604645);a.cV= -a.nJ;}return;}k=1;$p=7;continue _;case 6:$z=ACy(i,v,w,x);if(C()){break _;}y=$z;if(a.g_>a.rg&&y>0){a.rg=a.rg+1|0;L();h=BeI.data[y].gJ;if(!BeI.data[y].b_.nE())Di(a.l,a,
Ki(h),AMO(h)*0.15000000596046448,Yi(h));i=BeI.data[y];h=a.l;$p=8;continue _;}a.el=a.el*0.4000000059604645;$p=4;continue _;case 7:a.FW(k);if(C()){break _;}if(!t){a.cV=a.cV+1|0;if(!a.cV)a.cV=300;}if(t&&a.cV>0){Di(a.l,a,B(215),0.699999988079071,1.600000023841858+(N(a.m)-N(a.m))*0.4000000059604645);a.cV= -a.nJ;}return;case 8:i.oH(h,v,w,x,a);if(C()){break _;}a.el=a.el*0.4000000059604645;$p=4;continue _;default:E$();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,$p);}
function A1K(a){return null;}
function AJ5(a,b){var c,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=null;$p=1;case 1:a.fr(c,b);if(C()){break _;}return;default:E$();}}C4().s(a,b,c,$p);}
function Zl(a,b){return;}
function AE8(a){var b,c,d,e,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.l;c=Dw(a.L,0.0,(-0.4000000059604645),0.0);d=BfJ;$p=1;case 1:$z=AAv(b,c,d,a);if(C()){break _;}e=$z;return e;default:E$();}}C4().s(a,b,c,d,e,$p);}
function AGI(a,b){var c,d,e,f,g,h,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.j+a.rK();d=K(a.d);e=EW(K(c));f=K(a.e);g=a.l;$p=1;case 1:$z=ACy(g,d,e,f);if(C()){break _;}h=$z;if(h){L();if(BeI.data[h].b_===b){b=a.l;$p=2;continue _;}}return 0;case 2:$z=AEL(b,d,e,f);if(C()){break _;}d=$z;return c>=(e+1|0)-(Jy(d)-0.1111111119389534)?0:1;default:E$();}}C4().s(a,b,c,d,e,f,g,h,$p);}
function ACp(a){var b,c,d,e,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.l;c=Dw(a.L,0.0,(-0.4000000059604645),0.0);d=BfK;$p=1;case 1:$z=AOu(b,c,d);if(C()){break _;}e=$z;return e;default:E$();}}C4().s(a,b,c,d,e,$p);}
function L3(a,b,c,d){var e,f,g;e=D_(b*b+c*c);if(e>=0.009999999776482582){if(e<1.0)e=1.0;d=d/e;b=b*d;c=c*d;f=Bq(a.u*3.1415927410125732/180.0);g=BC(a.u*3.1415927410125732/180.0);a.g=a.g+b*g-c*f;a.h=a.h+c*g+b*f;}}
function ADJ(a,b){var c,d,e,f,g,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=K(a.d);d=(a.L.U-a.L.M)*0.66;e=K(a.j-a.c4+d);f=K(a.e);g=a.l;$p=1;case 1:$z=ANi(g,c,e,f);if(C()){break _;}b=$z;return b;default:E$();}}C4().s(a,b,c,d,e,f,g,$p);}
function AUD(a,b){a.l=b;}
function Kv(a,b,c,d,e,f){a.d=b;a.bS=b;b=c+a.c4;a.j=b;a.cS=b;a.e=d;a.bR=d;a.u=e;a.I=f;CU(a,a.d,a.j,a.e);}
function AR6(a,b){var c,d,e;c=a.d-b.d;d=a.j-b.j;e=a.e-b.e;return D_(c*c+d*d+e*e);}
function AGN(a,b,c,d){var e,f,g;e=a.d-b;f=a.j-c;g=a.e-d;return e*e+f*f+g*g;}
function Sp(a,b,c,d){var e,f,g;e=a.d-b;f=a.j-c;g=a.e-d;return Ce(e*e+f*f+g*g);}
function LD(a,b){var c,d,e;c=a.d-b.d;d=a.j-b.j;e=a.e-b.e;return c*c+d*d+e*e;}
function A6O(a,b){return;}
function A5z(a,b){var c,d,e,f,g;c=b.d-a.d;d=b.e-a.e;e=c<0.0? -c:c;f=d<0.0? -d:d;if(e>f)f=e;if(f>=0.009999999776482582){e=Ce(f);c=c/e;f=d/e;g=1.0/e;if(g>1.0)g=1.0;c=c*g;e=f*g;c=c*0.05000000074505806;e=e*0.05000000074505806;c=c*(1.0-a.n5);e=e*(1.0-a.n5);Hr(a, -c,0.0, -e);Hr(b,c,0.0,e);}}
function Hr(a,b,c,d){a.g=a.g+b;a.i=a.i+c;a.h=a.h+d;}
function AJI(a,b,c){return 0;}
function A9F(a){return 0;}
function A7R(a){return 0;}
function A_d(a,b,c){return;}
function Sh(a,b){var c,d,e;c=a.d-b.x;d=a.j-b.z;e=a.e-b.w;return AHg(a,c*c+d*d+e*e);}
function AHg(a,b){var c;c=APX(a.L)*64.0;return b>=c*c?0:1;}
function ALv(a,b){var c,d;c=$rt_createDoubleArray(3);d=c.data;d[0]=a.d;d[1]=a.j;d[2]=a.e;HH(b,B(216),Wb(a,c));c=$rt_createDoubleArray(3);d=c.data;d[0]=a.g;d[1]=a.i;d[2]=a.h;HH(b,B(217),Wb(a,c));c=$rt_createFloatArray(2);d=c.data;d[0]=a.u;d[1]=a.I;HH(b,B(218),AMB(a,c));AR9(b,B(219),a.fH);Ft(b,B(220),a.cV<<16>>16);Ft(b,B(221),a.f_<<16>>16);S4(b,B(222),a.cx);ABR(a,b);}
function YV(a,b){var c,d,e,f,g;c=Kj(b,B(216));d=Kj(b,B(217));e=Kj(b,B(218));CU(a,0.0,0.0,0.0);a.g=Fc(d,0).iL;a.i=Fc(d,1).iL;a.h=Fc(d,2).iL;f=Fc(c,0).iL;a.d=f;a.cs=f;a.bS=f;f=Fc(c,1).iL;a.j=f;a.b7=f;a.cS=f;f=Fc(c,2).iL;a.e=f;a.ct=f;a.bR=f;g=Fc(e,0).nl;a.u=g;a.P=g;g=Fc(e,1).nl;a.I=g;a.T=g;a.fH=AMH(b,B(219));a.cV=FL(b,B(220));a.f_=FL(b,B(221));a.cx=Ux(b,B(222));CU(a,a.d,a.j,a.e);AOY(a,b);}
function Wb(a,b){var c,d,e,f,g;b=b.data;c=L9();d=b.length;e=0;while(e<d){f=b[e];g=new Mp;Cw(g);g.iL=f;Jt(c,g);e=e+1|0;}return c;}
function AMB(a,b){var c,d,e;b=b.data;c=L9();d=b.length;e=0;while(e<d){Jt(c,A6M(b[e]));e=e+1|0;}return c;}
function ABW(a,b,c){var d,e,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=0.0;$p=1;case 1:$z=AGH(a,b,c,d);if(C()){break _;}e=$z;return e;default:E$();}}C4().s(a,b,c,d,e,$p);}
function AGH(a,b,c,d){var e,f,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=Hd(a.l,a.d,a.j+d,a.e,KB(b,c));e.g$=10;f=a.l;$p=1;case 1:AOi(f,e);if(C()){break _;}return e;default:E$();}}C4().s(a,b,c,d,e,f,$p);}
function AHA(a){var b,c,d,e,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=K(a.d);c=K(a.j+a.rK());d=K(a.e);e=a.l;$p=1;case 1:$z=AAE(e,b,c,d);if(C()){break _;}b=$z;return b;default:E$();}}C4().s(a,b,c,d,e,$p);}
function AWK(a,b){return 0;}
function AW2(a,b){return null;}
function AFe(a){var b,c,d,e,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.bB.cR){a.bB=null;return;}a.g=0.0;a.i=0.0;a.h=0.0;$p=1;case 1:a.ep();if(C()){break _;}CU(a,a.bB.d,a.bB.j+a.c4+a.bB.Af(),a.bB.e);a.gZ=a.gZ+a.bB.u-a.bB.P;a.g4=a.g4+a.bB.I-a.bB.T;while(a.gZ>=180.0){a.gZ=a.gZ-360.0;}while(a.gZ<(-180.0)){a.gZ=a.gZ+360.0;}while(a.g4>=180.0){a.g4=a.g4-360.0;}while(a.g4<(-180.0)){a.g4=a.g4+360.0;}b=a.gZ*0.5;c=a.g4*0.5;d=10.0;if(b>d)b
=d;e=(-10.0);if(b<e)b=e;if(c<=d)d=c;if(d>=e)e=d;a.gZ=a.gZ-b;a.g4=a.g4-e;a.u=a.u+b;a.I=a.I+e;return;default:E$();}}C4().s(a,b,c,d,e,$p);}
function A9J(a){return a.eO*0.75;}
function Pm(a,b){a.g4=0.0;a.gZ=0.0;if(a.bB===b){a.bB.bH=null;a.bB=null;}else{if(a.bB!==null)a.bB.bH=null;if(b.bH!==null)b.bH.bB=null;a.bB=b;b.bH=a;}}
function Xo(a,b,c){var d,e;d=a.I;e=a.u;a.u=a.u+b*0.15;a.I=a.I-c*0.15;if(a.I<(-90.0))a.I=(-90.0);if(a.I>90.0)a.I=90.0;a.T=a.T+a.I-d;a.P=a.P+a.u-e;}
function EO(){var a=this;C6.call(a);a.oZ=0;a.JI=0.0;a.G6=0.0;a.Iq=0.0;a.dG=0.0;a.e$=0.0;a.z3=0.0;a.nh=0.0;a.j4=0.0;a.mf=0.0;a.G8=0;a.yu=null;a.G7=0;a.D5=0.0;a.E2=null;a.Jv=0.0;a.uZ=0;a.Jw=0.0;a.bT=0;a.tF=0;a.uX=0;a.dE=0;a.EO=0;a.kG=0.0;a.c2=0;a.dz=0;a.kZ=0.0;a.jm=0.0;a.Cm=0;a.Fh=0;a.JB=0.0;a.jV=0.0;a.cg=0.0;a.gn=0.0;a.hk=0;a.iN=0.0;a.gC=0.0;a.kH=0.0;a.hG=0;a.zU=0.0;a.s0=0.0;}
function PQ(a){return a.yu;}
function AXu(a){return a.cR?0:1;}
function A1O(a){return a.cR?0:1;}
function AQr(a){return a.eO*0.8500000238418579;}
function ANq(a){var b,c,d,e,f,g,h,i,j,k,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AEW(a);if(C()){break _;}b=E(a.m,1000);c=a.uX;a.uX=c+1|0;if(b<c){a.uX=(-80);d=a.wA();if(d!==null)Di(a.l,a,d,1.0,(N(a.m)-N(a.m))*0.20000000298023224+1.0);}if(H8(a)){$p=2;continue _;}if(H8(a)){d=BfJ;$p=3;continue _;}a.f_=a.n6;a.kZ=a.jm;if(a.dz>0)a.dz=a.dz-1|0;if(a.dE>0)a.dE=a.dE-1|0;if(a.dy
>0)a.dy=a.dy-1|0;if(a.bT<=0){a.c2=a.c2+1|0;if(a.c2>20){$p=6;continue _;}}a.mf=a.j4;a.e$=a.dG;a.P=a.u;a.T=a.I;return;case 2:$z=AHA(a);if(C()){break _;}e=$z;if(e){d=null;e=1;$p=4;continue _;}if(H8(a)){d=BfJ;$p=3;continue _;}a.f_=a.n6;a.kZ=a.jm;if(a.dz>0)a.dz=a.dz-1|0;if(a.dE>0)a.dE=a.dE-1|0;if(a.dy>0)a.dy=a.dy-1|0;if(a.bT<=0){a.c2=a.c2+1|0;if(a.c2>20){$p=6;continue _;}}a.mf=a.j4;a.e$=a.dG;a.P=a.u;a.T=a.I;return;case 3:$z=AGI(a,d);if(C()){break _;}e=$z;if(!e)a.f_=a.n6;else{a.f_=a.f_-1|0;if(a.f_==(-20)){a.f_=0;e
=0;while(e<8){f=N(a.m)-N(a.m);g=N(a.m)-N(a.m);h=N(a.m)-N(a.m);BV(a.l,B(213),a.d+f,a.j+g,a.e+h,a.g,a.i,a.h);e=e+1|0;}d=null;e=2;$p=5;continue _;}a.cV=0;}a.kZ=a.jm;if(a.dz>0)a.dz=a.dz-1|0;if(a.dE>0)a.dE=a.dE-1|0;if(a.dy>0)a.dy=a.dy-1|0;if(a.bT<=0){a.c2=a.c2+1|0;if(a.c2>20){$p=6;continue _;}}a.mf=a.j4;a.e$=a.dG;a.P=a.u;a.T=a.I;return;case 4:a.fr(d,e);if(C()){break _;}if(H8(a)){d=BfJ;$p=3;continue _;}a.f_=a.n6;a.kZ=a.jm;if(a.dz>0)a.dz=a.dz-1|0;if(a.dE>0)a.dE=a.dE-1|0;if(a.dy>0)a.dy=a.dy-1|0;if(a.bT<=0){a.c2=a.c2
+1|0;if(a.c2>20){$p=6;continue _;}}a.mf=a.j4;a.e$=a.dG;a.P=a.u;a.T=a.I;return;case 5:a.fr(d,e);if(C()){break _;}a.cV=0;a.kZ=a.jm;if(a.dz>0)a.dz=a.dz-1|0;if(a.dE>0)a.dE=a.dE-1|0;if(a.dy>0)a.dy=a.dy-1|0;if(a.bT<=0){a.c2=a.c2+1|0;if(a.c2>20){$p=6;continue _;}}a.mf=a.j4;a.e$=a.dG;a.P=a.u;a.T=a.I;return;case 6:Cb(a);if(C()){break _;}e=0;while(e<20){i=C0(a.m)*0.02;j=C0(a.m)*0.02;k=C0(a.m)*0.02;BV(a.l,B(223),a.d+N(a.m)*a.c1*2.0-a.c1,a.j+N(a.m)*a.eO,a.e+N(a.m)*a.c1*2.0-a.c1,i,j,k);e=e+1|0;}a.mf=a.j4;a.e$=a.dG;a.P=a.u;a.T
=a.I;return;default:E$();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function AET(a){var b,c,d,e;b=0;while(b<20){c=C0(a.m)*0.02;d=C0(a.m)*0.02;e=C0(a.m)*0.02;BV(a.l,B(223),a.d+N(a.m)*a.c1*2.0-a.c1-c*10.0,a.j+N(a.m)*a.eO-d*10.0,a.e+N(a.m)*a.c1*2.0-a.c1-e*10.0,c,d,e);b=b+1|0;}}
function AKT(a){var $p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AFe(a);if(C()){break _;}a.z3=a.nh;a.nh=0.0;return;default:E$();}}C4().s(a,$p);}
function AMu(a){var b,c,d,e,f,g,h,i,j,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:a.Je();if(C()){break _;}$p=2;case 2:a.or();if(C()){break _;}b=a.d-a.bS;c=a.e-a.bR;d=Ce(b*b+c*c);e=a.dG;f=0.0;a.z3=a.nh;g=0.0;if(d>0.05000000074505806){g=1.0;f=d*3.0;e=CR(c,b)*180.0/3.1415927410125732-90.0;}if(!a.cx)g=0.0;a.nh=a.nh+(g-a.nh)*0.30000001192092896;h=e-a.dG;while(h<(-180.0)){h=h+360.0;}while
(h>=180.0){h=h-360.0;}a.dG=a.dG+h*0.10000000149011612;i=a.u-a.dG;while(i<(-180.0)){i=i+360.0;}while(i>=180.0){i=i-360.0;}j=i>=(-90.0)&&i<90.0?0:1;if(i<(-75.0))i=(-75.0);if(i>=75.0)i=75.0;a.dG=a.u-i;a.dG=a.dG+i*0.10000000149011612;if(j)f=f*(-1.0);while(a.u-a.P<(-180.0)){a.P=a.P-360.0;}while(a.u-a.P>=180.0){a.P=a.P+360.0;}while(a.dG-a.e$<(-180.0)){a.e$=a.e$-360.0;}while(a.dG-a.e$>=180.0){a.e$=a.e$+360.0;}while(a.I-a.T<(-180.0)){a.T=a.T-360.0;}while(a.I-a.T>=180.0){a.T=a.T+360.0;}a.j4=a.j4+f;return;default:E$();}}C4().s(a,
b,c,d,e,f,g,h,i,j,$p);}
function A1e(a,b,c){D2(a,b,c);}
function UU(a,b){if(a.bT>0){a.bT=a.bT+b|0;if(a.bT>20)a.bT=20;a.dy=a.oZ/2|0;}}
function AB5(a,b,c){var d,e,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.hk=0;if(a.bT<=0)return 0;a.cg=1.5;if(a.dy<=a.oZ/2.0){a.tF=a.bT;a.dy=a.oZ;a.bT=a.bT-c|0;a.EO=10;a.dE=10;}else{if((a.tF-c|0)>=a.bT)return 0;a.bT=a.tF-c|0;}a.kG=0.0;if(b===null)a.kG=(BO()*2.0|0)*180|0;else{d=b.d-a.d;e=b.e-a.e;while(d*d+e*e<1.0E-4){d=(BO()-BO())*0.01;e=(BO()-BO())*0.01;}a.kG=CR(e,d)*180.0/3.1415927410125732-a.u;ABB(a,b,c,d,e);}if(a.bT>0){Di(a.l,a,
a.va(),1.0,(N(a.m)-N(a.m))*0.20000000298023224+1.0);return 1;}Di(a.l,a,a.uL(),1.0,(N(a.m)-N(a.m))*0.20000000298023224+1.0);$p=1;case 1:a.Fz(b);if(C()){break _;}return 1;default:E$();}}C4().s(a,b,c,d,e,$p);}
function A8o(a){return null;}
function AUB(a){return B(224);}
function AVw(a){return B(224);}
function ABB(a,b,c,d,e){var f,g,h;f=Ce(d*d+e*e);a.g=a.g/2.0;a.i=a.i/2.0;a.h=a.h/2.0;g=a.g;h=f;a.g=g-d/h*0.4000000059604645;a.i=a.i+0.4000000059604645;a.h=a.h-e/h*0.4000000059604645;if(a.i>0.4000000059604645)a.i=0.4000000059604645;}
function AN5(a,b){var c,d,e,f,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.uZ>0&&b!==null)b.BC(a,a.uZ);a.Cm=1;c=a.mj();if(c>0){d=E(a.m,3);e=0;if(e<d){f=1;$p=1;continue _;}}return;case 1:ABW(a,c,f);if(C()){break _;}e=e+1|0;if(e>=d)return;f=1;continue _;default:E$();}}C4().s(a,b,c,d,e,f,$p);}
function ATF(a){return 0;}
function AP9(a,b){var c,d,e,f,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=Nd(b-3.0)|0;if(c<=0)return;d=null;$p=1;case 1:a.fr(d,c);if(C()){break _;}d=a.l;c=K(a.d);e=K(a.j-0.20000000298023224-a.c4);f=K(a.e);$p=2;case 2:$z=ACy(d,c,e,f);if(C()){break _;}e=$z;if(e>0){L();d=BeI.data[e].gJ;Di(a.l,a,Ki(d),d.oP*0.5,d.pN*0.75);}return;default:E$();}}C4().s(a,b,c,d,e,f,$p);}
function ADw(a,b,c){var d,e,f,g,h,i,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AE8(a);if(C()){break _;}d=$z;if(!d){$p=2;continue _;}e=a.j;L3(a,b,c,0.019999999552965164);f=a.g;g=a.i;h=a.h;$p=3;continue _;case 2:$z=ACp(a);if(C()){break _;}d=$z;if(d){e=a.j;L3(a,b,c,0.019999999552965164);f=a.g;g=a.i;h=a.h;$p=4;continue _;}L3(a,b,c,!a.cx?0.019999999552965164:0.10000000149011612);$p=7;continue _;case 3:ARG(a,
f,g,h);if(C()){break _;}a.g=a.g*0.800000011920929;a.i=a.i*0.800000011920929;a.h=a.h*0.800000011920929;a.i=a.i-0.02;if(!a.jZ){a.jV=a.cg;e=a.d-a.bS;f=a.e-a.bR;i=Ce(e*e+f*f)*4.0;if(i>1.0)i=1.0;a.cg=a.cg+(i-a.cg)*0.4000000059604645;a.gn=a.gn+a.cg;return;}f=a.g;e=a.i+0.6000000238418579-a.j+e;g=a.h;$p=5;continue _;case 4:ARG(a,f,g,h);if(C()){break _;}a.g=a.g*0.5;a.i=a.i*0.5;a.h=a.h*0.5;a.i=a.i-0.02;if(!a.jZ){a.jV=a.cg;e=a.d-a.bS;f=a.e-a.bR;i=Ce(e*e+f*f)*4.0;if(i>1.0)i=1.0;a.cg=a.cg+(i-a.cg)*0.4000000059604645;a.gn
=a.gn+a.cg;return;}f=a.g;e=a.i+0.6000000238418579-a.j+e;g=a.h;$p=6;continue _;case 5:$z=AHh(a,f,e,g);if(C()){break _;}d=$z;if(d)a.i=0.30000001192092896;a.jV=a.cg;e=a.d-a.bS;f=a.e-a.bR;i=Ce(e*e+f*f)*4.0;if(i>1.0)i=1.0;a.cg=a.cg+(i-a.cg)*0.4000000059604645;a.gn=a.gn+a.cg;return;case 6:$z=AHh(a,f,e,g);if(C()){break _;}d=$z;if(d)a.i=0.30000001192092896;a.jV=a.cg;e=a.d-a.bS;f=a.e-a.bR;i=Ce(e*e+f*f)*4.0;if(i>1.0)i=1.0;a.cg=a.cg+(i-a.cg)*0.4000000059604645;a.gn=a.gn+a.cg;return;case 7:$z=AIh(a);if(C()){break _;}d=
$z;if(d){a.fH=0.0;if(a.i<(-0.15))a.i=(-0.15);}e=a.g;f=a.i;g=a.h;$p=8;case 8:ARG(a,e,f,g);if(C()){break _;}if(!a.jZ){a.g=a.g*0.9100000262260437;a.i=a.i*0.9800000190734863;a.h=a.h*0.9100000262260437;a.i=a.i-0.08;if(a.cx){a.g=a.g*0.6000000238418579;a.h=a.h*0.6000000238418579;}a.jV=a.cg;e=a.d-a.bS;f=a.e-a.bR;i=Ce(e*e+f*f)*4.0;if(i>1.0)i=1.0;a.cg=a.cg+(i-a.cg)*0.4000000059604645;a.gn=a.gn+a.cg;return;}$p=9;case 9:$z=AIh(a);if(C()){break _;}d=$z;if(d)a.i=0.2;a.g=a.g*0.9100000262260437;a.i=a.i*0.9800000190734863;a.h
=a.h*0.9100000262260437;a.i=a.i-0.08;if(a.cx){a.g=a.g*0.6000000238418579;a.h=a.h*0.6000000238418579;}a.jV=a.cg;e=a.d-a.bS;f=a.e-a.bR;i=Ce(e*e+f*f)*4.0;if(i>1.0)i=1.0;a.cg=a.cg+(i-a.cg)*0.4000000059604645;a.gn=a.gn+a.cg;return;default:E$();}}C4().s(a,b,c,d,e,f,g,h,i,$p);}
function AIh(a){var b,c,d,e,f,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=K(a.d);c=K(a.L.M);d=K(a.e);e=a.l;$p=1;case 1:$z=ACy(e,b,c,d);if(C()){break _;}f=$z;L();if(f==Bf6.b)return 1;e=a.l;c=c+1|0;$p=2;case 2:$z=ACy(e,b,c,d);if(C()){break _;}b=$z;return b==Bf6.b?1:0;default:E$();}}C4().s(a,b,c,d,e,f,$p);}
function H8(a){return !a.cR&&a.bT>0?1:0;}
function ACr(a){var b,c,d,e,f,g,h,i,j,k,l,m,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.hk=a.hk+1|0;b=a.l.bg;if(b!==null){c=b.d-a.d;d=b.j-a.j;e=b.e-a.e;f=c*c+d*d+e*e;if(f>16384.0){$p=2;continue _;}if(a.hk>600&&!E(a.m,800)){if(f>=1024.0){$p=7;continue _;}a.hk=0;}}if(a.bT>0){$p=1;continue _;}a.hG=0;a.iN=0.0;a.gC=0.0;a.kH=0.0;$p=3;continue _;case 1:a.wK();if(C())
{break _;}$p=3;continue _;case 2:Cb(a);if(C()){break _;}if(a.hk>600&&!E(a.m,800)){if(f>=1024.0){$p=7;continue _;}a.hk=0;}if(a.bT>0){$p=1;continue _;}a.hG=0;a.iN=0.0;a.gC=0.0;a.kH=0.0;$p=3;case 3:$z=AE8(a);if(C()){break _;}g=$z;$p=4;case 4:$z=ACp(a);if(C()){break _;}h=$z;if(a.hG){if(g)a.i=a.i+0.03999999910593033;else if(h)a.i=a.i+0.03999999910593033;else if(a.cx)AF8(a);}a.iN=a.iN*0.9800000190734863;a.gC=a.gC*0.9800000190734863;a.kH=a.kH*0.8999999761581421;i=a.iN;j=a.gC;$p=5;case 5:ADw(a,i,j);if(C()){break _;}k
=a.l;l=Dw(a.L,0.20000000298023224,0.0,0.20000000298023224);$p=6;case 6:a:{$z=ADM(k,a,l);if(C()){break _;}k=$z;if(k!==null&&k.s>0){m=0;while(true){if(m>=k.s)break a;l=Z(k,m);if(l.rS())l.uY(a);m=m+1|0;}}}return;case 7:Cb(a);if(C()){break _;}if(a.bT>0){$p=1;continue _;}a.hG=0;a.iN=0.0;a.gC=0.0;a.kH=0.0;$p=3;continue _;default:E$();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function AF8(a){a.i=0.41999998688697815;}
function AQQ(a){var b,c,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(N(a.m)<0.07000000029802322){a.iN=(N(a.m)-0.5)*a.s0;a.gC=N(a.m)*a.s0;}a.hG=N(a.m)>=0.009999999776482582?0:1;if(N(a.m)<0.03999999910593033)a.kH=(N(a.m)-0.5)*60.0;a.u=a.u+a.kH;a.I=a.zU;$p=1;case 1:$z=AE8(a);if(C()){break _;}b=$z;$p=2;case 2:$z=ACp(a);if(C()){break _;}c=$z;if(!(!b&&!c))a.hG=N(a.m)>=0.800000011920929?0:1;return;default:E$();}}C4().s(a,b,c,$p);}
function A4H(a){return;}
function Zv(a,b,c,d){var e,f,g,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:CU(a,b,c+a.eO/2.0,d);e=a.l;f=a.L;$p=1;case 1:$z=AM7(e,f);if(C()){break _;}g=$z;if(!g)return 0;e=a.l;f=a.L;$p=2;case 2:$z=XW(e,a,f);if(C()){break _;}e=$z;if(e.s)return 0;e=a.l;f=a.L;$p=3;case 3:$z=AJk(e,f);if(C()){break _;}g=$z;return g?0:1;default:E$();}}C4().s(a,b,c,d,e,f,g,$p);}
function ABL(a){var b,c,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=null;c=4;$p=1;case 1:a.fr(b,c);if(C()){break _;}return;default:E$();}}C4().s(a,b,c,$p);}
function IY(){var a=this;EO.call(a);a.dS=null;a.de=null;a.hm=0;}
function AKg(a,b){var c,d,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.l;d=BY(a.d,a.j+AQr(a),a.e);b=BY(b.d,b.j+b.rK(),b.e);$p=1;case 1:$z=AJm(c,d,b);if(C()){break _;}b=$z;return b!==null?0:1;default:E$();}}C4().s(a,b,c,d,$p);}
function APO(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.hm=0;b=16.0;if(a.de===null){$p=1;continue _;}if(H8(a.de)){c=AR6(a.de,a);d=a.de;$p=2;continue _;}a.de=null;a:{if(!a.hm&&a.de!==null){if(a.dS===null)break a;if
(!E(a.m,20))break a;}if(!(a.dS!==null&&E(a.m,100))){e=(-1);f=(-1);g=(-1);h=(-99999.0);i=0;if(i<50){j=K(a.d+E(a.m,11)-5.0);k=K(a.j+E(a.m,7)-3.0);l=K(a.e+E(a.m,11)-5.0);$p=8;continue _;}if(e>0){d=a.l;$p=10;continue _;}}e=K(a.L.M);$p=5;continue _;}d=a.l;m=a.de;$p=7;continue _;case 1:$z=a.x3();if(C()){break _;}d=$z;a.de=d;if(a.de!==null){d=a.l;m=a.de;$p=3;continue _;}b:{if(!a.hm&&a.de!==null){if(a.dS===null)break b;if(!E(a.m,20))break b;}if(!(a.dS!==null&&E(a.m,100))){e=(-1);f=(-1);g=(-1);h=(-99999.0);i=0;if(i<
50){j=K(a.d+E(a.m,11)-5.0);k=K(a.j+E(a.m,7)-3.0);l=K(a.e+E(a.m,11)-5.0);$p=8;continue _;}if(e>0){d=a.l;$p=10;continue _;}}e=K(a.L.M);$p=5;continue _;}d=a.l;m=a.de;$p=7;continue _;case 2:$z=AKg(a,d);if(C()){break _;}e=$z;if(e){d=a.de;$p=4;continue _;}b:{if(!a.hm&&a.de!==null){if(a.dS===null)break b;if(!E(a.m,20))break b;}if(!(a.dS!==null&&E(a.m,100))){e=(-1);f=(-1);g=(-1);h=(-99999.0);i=0;if(i<50){j=K(a.d+E(a.m,11)-5.0);k=K(a.j+E(a.m,7)-3.0);l=K(a.e+E(a.m,11)-5.0);$p=8;continue _;}if(e>0){d=a.l;$p=10;continue _;}}e
=K(a.L.M);$p=5;continue _;}d=a.l;m=a.de;$p=7;continue _;case 3:$z=ARX(d,a,m,b);if(C()){break _;}d=$z;a.dS=d;c:{if(!a.hm&&a.de!==null){if(a.dS===null)break c;if(!E(a.m,20))break c;}if(!(a.dS!==null&&E(a.m,100))){e=(-1);f=(-1);g=(-1);h=(-99999.0);i=0;if(i<50){j=K(a.d+E(a.m,11)-5.0);k=K(a.j+E(a.m,7)-3.0);l=K(a.e+E(a.m,11)-5.0);$p=8;continue _;}if(e>0){d=a.l;$p=10;continue _;}}e=K(a.L.M);$p=5;continue _;}d=a.l;m=a.de;$p=7;continue _;case 4:a.nP(d,c);if(C()){break _;}c:{if(!a.hm&&a.de!==null){if(a.dS===null)break c;if
(!E(a.m,20))break c;}if(!(a.dS!==null&&E(a.m,100))){e=(-1);f=(-1);g=(-1);h=(-99999.0);i=0;if(i<50){j=K(a.d+E(a.m,11)-5.0);k=K(a.j+E(a.m,7)-3.0);l=K(a.e+E(a.m,11)-5.0);$p=8;continue _;}if(e>0){d=a.l;$p=10;continue _;}}e=K(a.L.M);$p=5;continue _;}d=a.l;m=a.de;$p=7;continue _;case 5:$z=AE8(a);if(C()){break _;}n=$z;$p=6;case 6:$z=ACp(a);if(C()){break _;}o=$z;if(a.dS!==null&&E(a.m,100)){d=Sx(a.dS,a);p=a.c1*2.0;q=p*p;r=e;while(d!==null&&ABZ(d,a.d,a.j,a.e)<q&&d.z<=r){AP4(a.dS);if(!ANo(a.dS)){d=Sx(a.dS,a);continue;}d
=null;a.dS=null;}a.hG=0;if(d!==null){q=d.x-a.d;s=d.w-a.e;t=d.z-r;a.u=CR(s,q)*180.0/3.1415927410125732-90.0;a.gC=a.s0;if(a.hm&&a.de!==null){u=a.de.d-a.d;r=a.de.e-a.e;v=a.u;a.u=CR(r,u)*180.0/3.1415927410125732-90.0;w=(v-a.u+90.0)*3.1415927410125732/180.0;a.iN= -Bq(w)*a.gC*1.0;a.gC=BC(w)*a.gC*1.0;}if(t!==0.0)a.hG=1;}if(N(a.m)<0.800000011920929&&!(!n&&!o))a.hG=1;return;}$p=9;continue _;case 7:$z=ARX(d,a,m,b);if(C()){break _;}d=$z;a.dS=d;e=K(a.L.M);$p=5;continue _;case 8:$z=a.sD(j,k,l);if(C()){break _;}x=$z;if(x
>h){h=x;e=j;f=k;g=l;}i=i+1|0;if(i>=50){if(e>0){d=a.l;$p=10;continue _;}e=K(a.L.M);$p=5;continue _;}j=K(a.d+E(a.m,11)-5.0);k=K(a.j+E(a.m,7)-3.0);l=K(a.e+E(a.m,11)-5.0);continue _;case 9:AQQ(a);if(C()){break _;}a.dS=null;return;case 10:$z=AJw(d,a,e,f,g,b);if(C()){break _;}d=$z;a.dS=d;e=K(a.L.M);$p=5;continue _;default:E$();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,$p);}
function AMD(a,b,c){return;}
function AK0(a){return null;}
function ACR(a,b,c,d){var e,f,g,h,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=Zv(a,b,c,d);if(C()){break _;}e=$z;if(!e)return 0;e=b|0;f=c|0;g=d|0;$p=2;case 2:$z=a.sD(e,f,g);if(C()){break _;}h=$z;return h<0.0?0:1;default:E$();}}C4().s(a,b,c,d,e,f,g,h,$p);}
function DP(){IY.call(this);this.Fq=0;}
function AC_(a){var b,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=1.0;$p=1;case 1:$z=ADJ(a,b);if(C()){break _;}b=$z;if(b>0.5)a.hk=a.hk+2|0;$p=2;case 2:ACr(a);if(C()){break _;}return;default:E$();}}C4().s(a,b,$p);}
function AK9(a){var $p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AMu(a);if(C()){break _;}if(a.l.i2)return;$p=2;case 2:Cb(a);if(C()){break _;}return;default:E$();}}C4().s(a,$p);}
function AKp(a){var b,c,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(LD(a.l.bg,a)>=256.0)return null;b=a.l.bg;$p=1;case 1:$z=AKg(a,b);if(C()){break _;}c=$z;return !c?null:a.l.bg;default:E$();}}C4().s(a,b,c,$p);}
function AAL(a,b,c){var $p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AB5(a,b,c);if(C()){break _;}c=$z;if(!c)return 0;if(b!==a)a.de=b;return 1;default:E$();}}C4().s(a,b,c,$p);}
function AQY(a,b,c){var d,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(c<2.5&&b.L.U>a.L.M&&b.L.M<a.L.U){a.dz=20;d=a.Fq;$p=1;continue _;}return;case 1:b.fr(a,d);if(C()){break _;}return;default:E$();}}C4().s(a,b,c,d,$p);}
function ABA(a,b,c,d){var e,f,g,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=0.5;f=a.l;$p=1;case 1:$z=ANi(f,b,c,d);if(C()){break _;}g=$z;return e-g;default:E$();}}C4().s(a,b,c,d,e,f,g,$p);}
function YB(a,b,c,d){var e,f,g,h,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=a.l;f=K(b);g=K(c);h=K(d);$p=1;case 1:$z=XB(e,f,g,h);if(C()){break _;}f=$z;if(f>E(a.m,8))return 0;$p=2;case 2:$z=ACR(a,b,c,d);if(C()){break _;}f=$z;return !f?0:1;default:E$();}}C4().s(a,b,c,d,e,f,g,h,$p);}
function I$(){DP.call(this);}
function AH2(a){var b,c,d,e,f,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!RC(a.l)){$p=1;continue _;}b=1.0;$p=2;continue _;case 1:AC_(a);if(C()){break _;}return;case 2:$z=ADJ(a,b);if(C()){break _;}b=$z;if(b<=0.5){$p=1;continue _;}c=a.l;d=K(a.d);e=K(a.j);f=K(a.e);$p=3;case 3:$z=AGf(c,d,e,f);if(C()){break _;}d=$z;if(d&&N(a.m)*30.0<(b-0.4000000059604645)*2.0)a.cV=300;$p=1;continue _;default:E$();}}C4().s(a,b,c,d,e,f,$p);}
function AWM(a){BB();return Bf7.cW;}
function Jp(){DP.call(this);}
function AID(a){var b,c,d,e,f,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!RC(a.l)){$p=1;continue _;}b=1.0;$p=2;continue _;case 1:AC_(a);if(C()){break _;}return;case 2:$z=ADJ(a,b);if(C()){break _;}b=$z;if(b<=0.5){$p=1;continue _;}c=a.l;d=K(a.d);e=K(a.j);f=K(a.e);$p=3;case 3:$z=AGf(c,d,e,f);if(C()){break _;}d=$z;if(d&&N(a.m)*30.0<(b-0.4000000059604645)*2.0)a.cV=300;$p=1;continue _;default:E$();}}C4().s(a,b,c,d,e,f,$p);}
function AHV(a,b,c){var d,e,f,g,h,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(c<10.0){d=b.d-a.d;e=b.e-a.e;if(!a.dz){f=ATb(a.l,a);f.j=f.j+1.399999976158142;g=b.j-0.20000000298023224-f.j;h=Ce(d*d+e*e)*0.20000000298023224;Di(a.l,a,B(225),1.0,1.0/(N(a.m)*0.4000000059604645+0.800000011920929));b=a.l;$p=1;continue _;}a.u=CR(e,d)*180.0/3.1415927410125732-90.0;a.hm=1;}return;case 1:AOi(b,f);if(C()){break _;}QH(f,
d,g+h,e,0.6000000238418579,12.0);a.dz=30;a.u=CR(e,d)*180.0/3.1415927410125732-90.0;a.hm=1;return;default:E$();}}C4().s(a,b,c,d,e,f,g,h,$p);}
function AYN(a){BB();return Bf8.cW;}
function J0(){var a=this;DP.call(a);a.jd=0;a.us=0;a.Bj=0;a.jW=0;}
function ZR(a){var $p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.us=a.jd;if(a.jd>0&&a.jW<0)a.jd=a.jd-1|0;if(a.jW>=0)a.jW=2;$p=1;case 1:APO(a);if(C()){break _;}if(a.jW!=1)a.jW=(-1);return;default:E$();}}C4().s(a,$p);}
function AAN(a,b,c){var d,e,f,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a:{if(!(a.jW<=0&&c<3.0)){if(a.jW<=0)break a;if(c>=7.0)break a;}if(!a.jd)Di(a.l,a,B(226),1.0,0.5);a.jW=1;a.jd=a.jd+1|0;if(a.jd==a.Bj){b=a.l;d=a.d;e=a.j;f=a.e;c=3.0;$p=1;continue _;}a.hm=1;}return;case 1:Yb(b,a,d,e,f,c);if(C()){break _;}$p=2;case 2:Cb(a);if(C()){break _;}a.hm=1;return;default:E$();}}C4().s(a,b,c,d,e,f,$p);}
function Qq(a,b){return (a.us+(a.jd-a.us|0)*b)/(a.Bj-2|0);}
function ASW(a){BB();return Bf9.cW;}
function Ko(){DP.call(this);}
function ARs(a){var b,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=1.0;$p=1;case 1:$z=ADJ(a,b);if(C()){break _;}b=$z;if(b<0.5&&LD(a.l.bg,a)<256.0)return a.l.bg;return null;default:E$();}}C4().s(a,b,$p);}
function Zo(a,b,c){var d,e,f,g,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=1.0;$p=1;case 1:a:{$z=ADJ(a,d);if(C()){break _;}d=$z;if(d>0.5&&!E(a.m,100))a.de=null;else{if(c<=2.0)break a;if(c>=6.0)break a;if(E(a.m,10))break a;if(a.cx){e=b.d-a.d;f=b.e-a.e;g=Ce(e*e+f*f);a.g=e/g*0.5*0.800000011920929+a.g*0.20000000298023224;a.h=f/g*0.5*0.800000011920929+a.h*0.20000000298023224;a.i=0.4000000059604645;}}return;}$p=2;case 2:AQY(a,
b,c);if(C()){break _;}return;default:E$();}}C4().s(a,b,c,d,e,f,g,$p);}
function AZM(a){BB();return Bf$.cW;}
function GB(){IY.call(this);}
function AOA(a,b,c,d){var e,f,g,h,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=a.l;f=c-1|0;$p=1;case 1:$z=ACy(e,b,f,d);if(C()){break _;}g=$z;L();if(g==BeK.b)return 10.0;e=a.l;$p=2;case 2:$z=ANi(e,b,c,d);if(C()){break _;}h=$z;return h-0.5;default:E$();}}C4().s(a,b,c,d,e,f,g,h,$p);}
function AK6(a,b,c,d){var e,f,g,h,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=a.l;f=K(b);g=K(c);h=K(d);$p=1;case 1:$z=XB(e,f,g,h);if(C()){break _;}g=$z;if(g<=8)return 0;$p=2;case 2:$z=ACR(a,b,c,d);if(C()){break _;}g=$z;return !g?0:1;default:E$();}}C4().s(a,b,c,d,e,f,g,h,$p);}
function KI(){GB.call(this);this.x7=0;}
function AGW(a,b,c){var d,e,f,g,h,i,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!a.x7&&b instanceof EO){a.x7=1;d=1+E(a.m,3)|0;e=0;if(e<d){L();f=Be8.b;g=1;h=1.0;$p=2;continue _;}}$p=1;case 1:$z=AB5(a,b,c);if(C()){break _;}c=$z;return c;case 2:$z=AGH(a,f,g,h);if(C()){break _;}i=$z;i.i=i.i+N(a.m)*0.05000000074505806;i.g=i.g+(N(a.m)-N(a.m))*0.10000000149011612;i.h=i.h+(N(a.m)-N(a.m))*0.10000000149011612;e
=e+1|0;if(e>=d){$p=1;continue _;}L();f=Be8.b;g=1;h=1.0;continue _;default:E$();}}C4().s(a,b,c,d,e,f,g,h,i,$p);}
function A6Y(a){return B(227);}
function A4d(a){return B(227);}
function AYm(a){return B(227);}
function IE(){GB.call(this);this.qy=0;}
function ATB(a){return B(228);}
function A9p(a){return B(228);}
function AV7(a){return B(229);}
function AXU(a,b){if(!a.qy)return 0;Pm(b,a);return 1;}
function AWf(a){BB();return Bf_.cW;}
function DB(){var a=this;D.call(a);a.AF=0.0;a.w4=0;}
function Bbf(){var a=new DB();A3b(a);return a;}
function Bbu(a){var b=new DB();AVL(b,a);return b;}
function A3b(a){return;}
function AVL(a,b){return;}
function NL(a,b){return;}
function AF$(a,b){if(b==32)return Cl(a)*4.294967295E9+(-2.147483648E9)|0;return Cl(a)*Long_toNumber(Long_shl(Long_fromInt(1),CB(32,b)))|0;}
function Lo(a){return AF$(a,32);}
function E(a,b){return Cl(a)*b|0;}
function GA(a){return Long_or(Long_shl(Long_fromInt(Lo(a)),32),Long_fromInt(Lo(a)));}
function N(a){return Cl(a);}
function Cl(a){return Math.random();}
function C0(a){var b,c,d,e;if(a.w4){a.w4=0;return a.AF;}while(true){while(true){b=2.0*Cl(a)-1.0;c=2.0*Cl(a)-1.0;d=b*b+c*c;if(d>=1.0)continue;else break;}if(d===0.0)continue;else break;}e=Ed((-2.0)*A3R(d)/d);a.AF=c*e;a.w4=1;return b*e;}
function ND(){D.call(this);}
var Bga=null;var Bgb=null;function Bgc(){var a=new ND();AIn(a);return a;}
function AIn(a){return;}
function I3(b){var c,d,e,f,g,h;BaW(F(ND));try{BW();c=Bgd+1|0;d=0;while(d<b){e=Bgd+1|0;Bgd=e;f=Bge;g=CZ(e);h=new Rv;h.Bx=e;h.rj=null;h.o0=null;h.lM=(-1);h.jM=0;BP(f,g,h);d=d+1|0;}S(Bga,CZ(c));S(Bga,CZ(b));return c;}finally{BcM(F(ND));}}
function WX(b){var c,d,e,f,g;BaW(F(ND));try{c=b.bk;while(c<b.cy){BW();d=Bgf;Be();e=new Pf;f=BdB.createTexture();e.Im=(-1);e.Ij=(-1);e.Gl=1;e.He=0;e.BP=f;g=S8(d,e);AQ3(b,c,g);S(Bgb,CZ(g));c=c+1|0;}}finally{BcM(F(ND));}}
function WR(b){var c;c=AAt($rt_createByteArray(b));c.kL=Bgg;return c;}
function Rj(b){return ALS($rt_createIntArray(b));}
function H4(b){var c,d,e,f;c=$rt_createFloatArray(b);d=c.data.length;e=new WQ;f=0+d|0;KQ(e,d);e.bk=0;e.cy=f;e.yq=0;e.xx=0;e.xq=c;return e;}
function ALX(){Bga=Ci();Bgb=Ci();}
function Pe(){var a=this;D.call(a);a.cP=null;a.eT=null;a.ja=0.0;a.ra=0.0;a.iy=0;a.jQ=0;a.Ad=null;}
function ACZ(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.ra+(a.ja-a.ra)*b;d=a.cP.f;B3();Bv(d.T+(d.I-d.T)*b,1.0,0.0,0.0);Bv(d.P+(d.u-d.P)*b,0.0,1.0,0.0);Hy();BE();e=a.cP.A;f=
K(d.d);g=K(d.j);h=K(d.e);$p=1;case 1:$z=ANi(e,f,g,h);if(C()){break _;}i=$z;BU(i,i,i,1.0);if(a.eT===null){B3();if(a.jQ){j=(a.iy+b)/8.0;k=Bq(j*3.1415927410125732);Bw( -Bq(D_(j)*3.1415927410125732)*0.30000001192092896,Bq(D_(j)*3.1415927410125732*2.0)*0.4000000059604645, -k*0.4000000059604645);}Bw(0.64000004529953,(-0.6000000238418579)-(1.0-c)*0.6000000238418579,(-0.7199999690055847));Bv(45.0,0.0,1.0,0.0);Bb(32826);if(a.jQ){j=(a.iy+b)/8.0;k=Bq(j*j*3.1415927410125732);Bv(Bq(D_(j)*3.1415927410125732)*70.0,0.0,1.0,
0.0);Bv( -k*20.0,0.0,0.0,1.0);}f=3553;d=a.cP.bo;e=a.cP.f.tJ;l=PQ(a.cP.f);$p=2;continue _;}B3();if(a.jQ){j=(a.iy+b)/8.0;k=Bq(j*3.1415927410125732);Bw( -Bq(D_(j)*3.1415927410125732)*0.4000000059604645,Bq(D_(j)*3.1415927410125732*2.0)*0.20000000298023224, -k*0.20000000298023224);}Bw(0.5600000023841858,(-0.5199999809265137)-(1.0-c)*0.6000000238418579,(-0.7199999690055847));Bv(45.0,0.0,1.0,0.0);Bb(32826);if(a.jQ){j=(a.iy+b)/8.0;k=Bq(j*j*3.1415927410125732);m=Bq(D_(j)*3.1415927410125732);Bv( -k*20.0,0.0,1.0,0.0);b
= -m;Bv(b*20.0,0.0,0.0,1.0);Bv(b*80.0,1.0,0.0,0.0);}CC(0.4000000059604645,0.4000000059604645,0.4000000059604645);if(a.eT.bA<256){L();if(!BeI.data[a.eT.bA].em()){f=3553;d=a.cP.bo;e=B(179);$p=5;continue _;}}if(a.eT.bA>=256){f=3553;d=a.cP.bo;e=B(230);$p=3;continue _;}f=3553;d=a.cP.bo;e=B(179);$p=4;continue _;case 2:$z=AD5(d,e,l);if(C()){break _;}g=$z;Cp(f,g);Bw((-1.0),3.5999999046325684,3.5);Bv(120.0,0.0,0.0,1.0);Bv(200.0,1.0,0.0,0.0);Bv((-135.0),0.0,1.0,0.0);CC(1.0,1.0,1.0);Bw(5.599999904632568,0.0,0.0);n=Sf(Bgh,
a.cP.f);CC(1.0,1.0,1.0);ALz(n);BE();Bd(32826);DT();return;case 3:$z=AHv(d,e);if(C()){break _;}g=$z;Cp(f,g);BA();e=BeE;m=(((DK(a.eT)%16|0)*16|0)+0|0)/256.0;o=(((DK(a.eT)%16|0)*16|0)+16|0)/256.0;p=(((DK(a.eT)/16|0)*16|0)+0|0)/256.0;q=(((DK(a.eT)/16|0)*16|0)+16|0)/256.0;Bb(32826);Bw(-0.0,(-0.30000001192092896),0.0);CC(1.5,1.5,1.5);Bv(50.0,0.0,1.0,0.0);Bv(335.0,0.0,0.0,1.0);Bw((-0.9375),(-0.0625),0.0);Bz(e);De(e,0.0,0.0,1.0);r=o;s=q;G(e,0.0,0.0,0.0,r,s);t=m;G(e,1.0,0.0,0.0,t,s);u=p;G(e,1.0,1.0,0.0,t,u);G(e,0.0,
1.0,0.0,r,u);Bs(e);Bz(e);De(e,0.0,0.0,(-1.0));G(e,0.0,1.0,(-0.0625),r,u);G(e,1.0,1.0,(-0.0625),t,u);G(e,1.0,0.0,(-0.0625),t,s);G(e,0.0,0.0,(-0.0625),r,s);Bs(e);Bz(e);De(e,(-1.0),0.0,0.0);f=0;j=m-o;while(f<16){v=f/16.0;w=o+j*v-0.001953125;x=1.0*v;y=w;G(e,x,0.0,(-0.0625),y,s);G(e,x,0.0,0.0,y,s);G(e,x,1.0,0.0,y,u);G(e,x,1.0,(-0.0625),y,u);f=f+1|0;}Bs(e);Bz(e);De(e,1.0,0.0,0.0);f=0;while(f<16){v=f/16.0;w=o+j*v-0.001953125;x=1.0*v+0.0625;y=w;G(e,x,1.0,(-0.0625),y,u);G(e,x,1.0,0.0,y,u);G(e,x,0.0,0.0,y,s);G(e,x,0.0,
(-0.0625),y,s);f=f+1|0;}Bs(e);Bz(e);De(e,0.0,1.0,0.0);g=0;j=p-q;while(g<16){v=g/16.0;w=q+j*v-0.001953125;z=1.0*v+0.0625;ba=w;G(e,0.0,z,0.0,r,ba);G(e,1.0,z,0.0,t,ba);G(e,1.0,z,(-0.0625),t,ba);G(e,0.0,z,(-0.0625),r,ba);g=g+1|0;}Bs(e);Bz(e);De(e,0.0,(-1.0),0.0);f=0;while(f<16){v=f/16.0;w=q+j*v-0.001953125;x=1.0*v;y=w;G(e,1.0,x,0.0,t,y);G(e,0.0,x,0.0,r,y);G(e,0.0,x,(-0.0625),r,y);G(e,1.0,x,(-0.0625),t,y);f=f+1|0;}Bs(e);Bd(32826);BE();Bd(32826);DT();return;case 4:$z=AHv(d,e);if(C()){break _;}g=$z;Cp(f,g);BA();e=
BeE;m=(((DK(a.eT)%16|0)*16|0)+0|0)/256.0;o=(((DK(a.eT)%16|0)*16|0)+16|0)/256.0;p=(((DK(a.eT)/16|0)*16|0)+0|0)/256.0;q=(((DK(a.eT)/16|0)*16|0)+16|0)/256.0;Bb(32826);Bw(-0.0,(-0.30000001192092896),0.0);CC(1.5,1.5,1.5);Bv(50.0,0.0,1.0,0.0);Bv(335.0,0.0,0.0,1.0);Bw((-0.9375),(-0.0625),0.0);Bz(e);De(e,0.0,0.0,1.0);r=o;s=q;G(e,0.0,0.0,0.0,r,s);t=m;G(e,1.0,0.0,0.0,t,s);u=p;G(e,1.0,1.0,0.0,t,u);G(e,0.0,1.0,0.0,r,u);Bs(e);Bz(e);De(e,0.0,0.0,(-1.0));G(e,0.0,1.0,(-0.0625),r,u);G(e,1.0,1.0,(-0.0625),t,u);G(e,1.0,0.0,(-0.0625),
t,s);G(e,0.0,0.0,(-0.0625),r,s);Bs(e);Bz(e);De(e,(-1.0),0.0,0.0);f=0;j=m-o;while(f<16){v=f/16.0;w=o+j*v-0.001953125;x=1.0*v;y=w;G(e,x,0.0,(-0.0625),y,s);G(e,x,0.0,0.0,y,s);G(e,x,1.0,0.0,y,u);G(e,x,1.0,(-0.0625),y,u);f=f+1|0;}Bs(e);Bz(e);De(e,1.0,0.0,0.0);f=0;while(f<16){v=f/16.0;w=o+j*v-0.001953125;x=1.0*v+0.0625;y=w;G(e,x,1.0,(-0.0625),y,u);G(e,x,1.0,0.0,y,u);G(e,x,0.0,0.0,y,s);G(e,x,0.0,(-0.0625),y,s);f=f+1|0;}Bs(e);Bz(e);De(e,0.0,1.0,0.0);g=0;j=p-q;while(g<16){v=g/16.0;w=q+j*v-0.001953125;z=1.0*v+0.0625;ba
=w;G(e,0.0,z,0.0,r,ba);G(e,1.0,z,0.0,t,ba);G(e,1.0,z,(-0.0625),t,ba);G(e,0.0,z,(-0.0625),r,ba);g=g+1|0;}Bs(e);Bz(e);De(e,0.0,(-1.0),0.0);f=0;while(f<16){v=f/16.0;w=q+j*v-0.001953125;x=1.0*v;y=w;G(e,1.0,x,0.0,t,y);G(e,0.0,x,0.0,r,y);G(e,0.0,x,(-0.0625),r,y);G(e,1.0,x,(-0.0625),t,y);f=f+1|0;}Bs(e);Bd(32826);BE();Bd(32826);DT();return;case 5:$z=AHv(d,e);if(C()){break _;}g=$z;Cp(f,g);GW(a.Ad,BeI.data[a.eT.bA]);BE();Bd(32826);DT();return;default:E$();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,
$p);}
function ACa(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:Bd(3008);if(a.cP.f.cV<=0){c=a.cP.A.bg;$p=1;continue _;}c=a.cP.bo;d=B(179);$p=2;continue _;case 1:$z=AHA(c);if(C()){break _;}e=$z;if(!e){d=a.cP.f;c=BfJ;$p=3;continue _;}e=K(a.cP.f.d);f=K(a.cP.f.j);g=K(a.cP.f.e);c
=a.cP.bo;d=B(179);$p=4;continue _;case 2:$z=AHv(c,d);if(C()){break _;}e=$z;Cp(3553,e);BA();c=BeE;BU(1.0,1.0,1.0,0.8999999761581421);Bb(3042);Dg(770,771);e=0;while(e<2){B3();L();f=Bgi.ba+(e*16|0)|0;g=(f&15)<<4;f=f&240;h=g;i=h/256.0;h=(h+15.989999771118164)/256.0;j=f;k=j/256.0;j=(j+15.989999771118164)/256.0;f=(e*2|0)-1|0;Bw( -f*0.23999999463558197,(-0.30000001192092896),0.0);Bv(f*10.0,0.0,1.0,0.0);Bz(c);l=h;m=j;G(c,(-0.5),(-0.5),(-0.5),l,m);n=i;G(c,0.5,(-0.5),(-0.5),n,m);m=k;G(c,0.5,0.5,(-0.5),n,m);G(c,(-0.5),
0.5,(-0.5),l,m);Bs(c);BE();e=e+1|0;}BU(1.0,1.0,1.0,1.0);Bd(3042);c=a.cP.A.bg;$p=1;continue _;case 3:$z=AGI(d,c);if(C()){break _;}e=$z;if(!e){Bb(3008);return;}c=a.cP.bo;d=B(231);$p=6;continue _;case 4:$z=AHv(c,d);if(C()){break _;}o=$z;Cp(3553,o);c=a.cP.A;$p=5;case 5:$z=ACy(c,e,f,g);if(C()){break _;}p=$z;L();if(BeI.data[p]===null){d=a.cP.f;c=BfJ;$p=3;continue _;}e=BeI.data[p].ci(2);BA();c=BeE;d=a.cP.f;$p=8;continue _;case 6:$z=AHv(c,d);if(C()){break _;}e=$z;Cp(3553,e);BA();c=BeE;d=a.cP.f;$p=7;case 7:$z=ADJ(d,
b);if(C()){break _;}h=$z;BU(h,h,h,0.5);Bb(3042);Dg(770,771);B3();h= -a.cP.f.u/64.0;i=a.cP.f.I/64.0;Bz(c);q=4.0+h;l=4.0+i;G(c,(-1.0),(-1.0),(-0.5),q,l);r=0.0+h;G(c,1.0,(-1.0),(-0.5),r,l);l=0.0+i;G(c,1.0,1.0,(-0.5),r,l);G(c,(-1.0),1.0,(-0.5),q,l);Bs(c);BE();BU(1.0,1.0,1.0,1.0);Bd(3042);Bb(3008);return;case 8:ADJ(d,b);if(C()){break _;}BU(0.10000000149011612,0.10000000149011612,0.10000000149011612,0.5);B3();i=e%16|0;j=i/256.0-0.0078125;i=(i+15.989999771118164)/256.0+0.0078125;k=e/16|0;s=k/256.0-0.0078125;h=(k+15.989999771118164)
/256.0+0.0078125;Bz(c);q=i;l=h;G(c,(-1.0),(-1.0),(-0.5),q,l);r=j;G(c,1.0,(-1.0),(-0.5),r,l);l=s;G(c,1.0,1.0,(-0.5),r,l);G(c,(-1.0),1.0,(-0.5),q,l);Bs(c);BE();BU(1.0,1.0,1.0,1.0);d=a.cP.f;c=BfJ;$p=3;continue _;default:E$();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,$p);}
function AJa(a){var b,c,d,e;a.ra=a.ja;if(a.jQ){a.iy=a.iy+1|0;if(a.iy==8){a.iy=0;a.jQ=0;}}b=D9(a.cP.f.K);c=0.4000000059604645;d=(b!==a.eT?0.0:1.0)-a.ja;e=(-0.4000000059604645);if(d>=e)e=d;if(e<=c)c=e;a.ja=a.ja+c;if(a.ja<0.10000000149011612)a.eT=b;}
function AGM(a){a.ja=0.0;}
function Po(a){a.iy=(-1);a.jQ=1;}
function AM9(a){a.ja=0.0;}
function O(){var a=this;D.call(a);a.ba=0;a.b=0;a.qf=0.0;a.nQ=0.0;a.da=0.0;a.cM=0.0;a.c_=0.0;a.dc=0.0;a.cF=0.0;a.dd=0.0;a.gJ=null;a.Ey=0.0;a.b_=null;}
var Bgj=null;var Bgk=null;var Bgl=null;var Bgm=null;var Bgn=null;var Bgo=null;var Bgp=null;var Bgq=null;var Bgr=null;var BeI=null;var Bgs=null;var Bgt=null;var Bgu=null;var Bgv=null;var Bgw=null;var BeO=null;var BeK=null;var BeL=null;var BeS=null;var BeU=null;var Be0=null;var BeJ=null;var BfR=null;var Bgx=null;var BfS=null;var Bgy=null;var Be5=null;var Be6=null;var Be_=null;var Be$=null;var Be9=null;var BeV=null;var BeW=null;var Be7=null;var BeY=null;var Bgz=null;var BgA=null;var BgB=null;var BgC=null;var BgD
=null;var BgE=null;var BgF=null;var BgG=null;var BgH=null;var BgI=null;var BgJ=null;var BgK=null;var BgL=null;var BgM=null;var Be8=null;var BgN=null;var Be1=null;var Be2=null;var Be3=null;var Be4=null;var Bfb=null;var Bfa=null;var BeM=null;var BeN=null;var BeT=null;var Bfd=null;var Bfc=null;var BeZ=null;var Bfe=null;var BeX=null;var Bgi=null;var BgO=null;var BgP=null;var BgQ=null;var BgR=null;var BgS=null;var BgT=null;var BgU=null;var BgV=null;var BgW=null;var BgX=null;var BgY=null;var BgZ=null;var Bg0=null;var Bf6
=null;var Bg1=null;var Bg2=null;function L(){L=Br(O);AVi();}
function Bg3(a,b){var c=new O();D1(c,a,b);return c;}
function KA(a,b,c){var d=new O();C9(d,a,b,c);return d;}
function D1(a,b,c){var d,e,f;L();a.gJ=Bgj;a.Ey=1.0;if(BeI.data[b]!==null){c=new Cc;d=new U;W(d);Bo(c,V(FO(I(FO(I(Bf(I(d,B(232)),b),B(233)),BeI.data[b]),B(234)),a)));M(c);}a.b_=c;BeI.data[b]=a;a.b=b;Bn(a,0.0,0.0,0.0,1.0,1.0,1.0);Bgt.data[b]=a.d5();e=Bgu;f=!a.d5()?0:255;e.data[b]=f;Bgv.data[b]=0;}
function C9(a,b,c,d){L();D1(a,b,d);a.ba=c;}
function BM(a,b){a.gJ=b;return a;}
function Gx(a,b){Bgu.data[a.b]=b;return a;}
function GJ(a,b){Bgw.data[a.b]=15.0*b|0;return a;}
function Dn(a,b){a.nQ=b*3.0;return a;}
function A8X(a){return 1;}
function AWF(a){return 0;}
function BH(a,b){var c;a.qf=b;c=a.nQ;b=b*5.0;if(c<b)a.nQ=b;return a;}
function Fe(a,b){Bgs.data[a.b]=b;}
function Bn(a,b,c,d,e,f,g){a.da=b;a.cM=c;a.c_=d;a.dc=e;a.cF=f;a.dd=g;}
function AFb(a,b,c,d,e){var f,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=b.sO(c,d,e);if(C()){break _;}f=$z;return f;default:E$();}}C4().s(a,b,c,d,e,f,$p);}
function AGv(a,b,c,d,e,f){var $p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a:{if(!f&&a.cM>0.0)c=1;else if(f==1&&a.cF<1.0)c=1;else if(f==2&&a.c_>0.0)c=1;else if(f==3&&a.dd<1.0)c=1;else if(f==4&&a.da>0.0)c=1;else{if(f!=5)break a;if(a.dc>=1.0)break a;c=1;}return c;}$p=1;case 1:$z=b.lf(c,d,e);if(C()){break _;}c=$z;return c?0:1;default:E$();}}C4().s(a,b,c,d,e,f,$p);}
function AB2(a,b,c,d,e,f){var $p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=b.eI(c,d,e);if(C()){break _;}c=$z;return a.eY(f,c);default:E$();}}C4().s(a,b,c,d,e,f,$p);}
function A7b(a,b,c){return a.ci(b);}
function AVG(a,b){return a.ba;}
function K7(a,b,c,d,e){var f,g,h,i,j;f=c;g=f+a.da;h=d;i=h+a.cM;j=e;return D4(g,i,j+a.c_,f+a.dc,h+a.cF,j+a.dd);}
function ALy(a,b,c,d,e,f,g){var h,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=a.hu(b,c,d,e);if(C()){break _;}h=$z;if(h!==null&&L6(f,h))S(g,h);return;default:E$();}}C4().s(a,b,c,d,e,f,g,h,$p);}
function Nn(a,b,c,d,e){var f,g,h,i,j;f=c;g=f+a.da;h=d;i=h+a.cM;j=e;return D4(g,i,j+a.c_,f+a.dc,h+a.cF,j+a.dd);}
function A5g(a){return 1;}
function A6o(a,b,c){return a.pg();}
function A3L(a){return 1;}
function AHR(a,b,c,d,e,f){return;}
function APe(a,b,c,d,e,f){return;}
function Z$(a,b,c,d,e,f){return;}
function YR(a,b,c,d,e,f){return;}
function A3V(a){return 10;}
function AA$(a,b,c,d,e){return;}
function Z5(a,b,c,d,e){return;}
function AYp(a,b){return 1;}
function ATS(a,b,c){return a.b;}
function ABg(a,b){var c,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.qf<0.0)c=0.0;else{if(M9(b,a)){$p=1;continue _;}c=1.0/a.qf/100.0;}return c;case 1:$z=AKS(b,a);if(C()){break _;}c=$z;return c/a.qf/30.0;default:E$();}}C4().s(a,b,c,$p);}
function Yj(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=1.0;$p=1;case 1:a.HS(b,c,d,e,f,g);if(C()){break _;}return;default:E$();}}C4().s(a,b,c,d,e,f,g,$p);}
function AE0(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:h=a.eH(b.q);i=0;j=0.15000000596046448;k=c;l=d;m=e;while(i<h){if(N(b.q)<=g){n=a.dX(f,b.q);if(n>0){o=Hd(b,k+N(b.q)*0.699999988079071+j,l+N(b.q)*0.699999988079071+j,m+N(b.q)*0.699999988079071+j,KB(n,1));o.g$=10;$p=1;continue _;}}i=i+1|0;}return;case 1:AOi(b,
o);if(C()){break _;}while(true){i=i+1|0;if(i>=h)break;if(N(b.q)>g)continue;n=a.dX(f,b.q);if(n<=0)continue;else{o=Hd(b,k+N(b.q)*0.699999988079071+j,l+N(b.q)*0.699999988079071+j,m+N(b.q)*0.699999988079071+j,KB(n,1));o.g$=10;continue _;}}return;default:E$();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,$p);}
function AZ1(a,b){return a.nQ/5.0;}
function Kd(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r;h= -c;i= -d;j= -e;b=Dk(f,h,i,j);f=Dk(g,h,i,j);k=KO(b,f,a.da);l=KO(b,f,a.dc);m=JX(b,f,a.cM);n=JX(b,f,a.cF);o=Ky(b,f,a.c_);p=Ky(b,f,a.dd);if(!Rz(a,k))k=null;if(!Rz(a,l))l=null;if(!Xu(a,m))m=null;if(!Xu(a,n))n=null;if(!RR(a,o))o=null;if(!RR(a,p))p=null;q=null;if(k!==null)q=k;if(l!==null&&!(q!==null&&DI(b,l)>=DI(b,q)))q=l;if(m!==null&&!(q!==null&&DI(b,m)>=DI(b,q)))q=m;if(n!==null&&!(q!==null&&DI(b,n)>=DI(b,q)))q=n;if(o!==null&&!(q!==null&&DI(b,o)>=DI(b,q)))q=
o;if(p!==null&&!(q!==null&&DI(b,p)>=DI(b,q)))q=p;if(q===null)return null;r=(-1);if(q===k)r=4;if(q===l)r=5;if(q===m)r=0;if(q===n)r=1;if(q===o)r=2;if(q===p)r=3;return A0A(c,d,e,r,Dk(q,c,d,e));}
function Rz(a,b){return b===null?0:b.z>=a.cM&&b.z<=a.cF&&b.w>=a.c_&&b.w<=a.dd?1:0;}
function Xu(a,b){return b===null?0:b.x>=a.da&&b.x<=a.dc&&b.w>=a.c_&&b.w<=a.dd?1:0;}
function RR(a,b){return b===null?0:b.x>=a.da&&b.x<=a.dc&&b.z>=a.cM&&b.z<=a.cF?1:0;}
function AQ2(a,b,c,d,e){return;}
function AVm(a){return 0;}
function AEH(a,b,c,d,e){return 1;}
function AGK(a,b,c,d,e,f){return 0;}
function AJL(a,b,c,d,e,f){return;}
function YJ(a,b,c,d,e,f){return;}
function AAf(a,b,c,d,e,f){return;}
function AF7(a,b,c,d,e,f,g){return;}
function APY(a,b,c,d,e){return;}
function A9f(a,b,c,d,e){return 16777215;}
function AVi(){var b,c;Bgj=Ik(B(235),1.0,1.0);Bgk=Ik(B(236),1.0,1.0);Bgl=Ik(B(237),1.0,1.0);Bgm=Ik(B(238),1.0,1.0);Bgn=Ik(B(235),1.0,1.0);Bgo=Ik(B(235),1.0,1.5);Bgp=A_W(B(235),1.0,1.0);Bgq=Ik(B(239),1.0,1.0);Bgr=Bb5(B(240),1.0,1.0);BeI=J(O,256);Bgs=$rt_createBooleanArray(256);Bgt=$rt_createBooleanArray(256);Bgu=$rt_createIntArray(256);Bgv=$rt_createBooleanArray(256);Bgw=$rt_createIntArray(256);BeO=BM(Dn(BH(Ba_(1,1),1.5),10.0),Bgn);BeK=BM(BH(BbC(2),0.6000000238418579),Bgm);BeL=BM(BH(A_1(3,2),0.5),Bgl);BeS=BM(Dn(BH(KA(4,
16,Bg4),2.0),10.0),Bgn);BeU=BM(Dn(BH(KA(5,4,Bg5),2.0),5.0),Bgk);Be0=BM(BH(Bcn(6,15),0.0),Bgm);BeJ=BM(Dn(BH(KA(7,17,Bg4),(-1.0)),6000000.0),Bgn);BfR=Gx(BH(AUl(8,BfJ),100.0),3);Bgx=Gx(BH(AXI(9,BfJ),100.0),3);BfS=Gx(GJ(BH(AUl(10,BfK),0.0),1.0),255);Bgy=Gx(GJ(BH(AXI(11,BfK),100.0),1.0),255);Be5=BM(BH(Bbx(12,18),0.5),Bgr);Be6=BM(BH(BbF(13,19),0.6000000238418579),Bgl);Be_=BM(Dn(BH(SQ(14,32),3.0),5.0),Bgn);Be$=BM(Dn(BH(SQ(15,33),3.0),5.0),Bgn);Be9=BM(Dn(BH(SQ(16,34),3.0),5.0),Bgn);BeV=BM(BH(BcH(17),2.0),Bgk);BeW=BM(Gx(BH(BaC(18,
52),0.20000000298023224),1),Bgm);Be7=BM(BH(Ba4(19),0.6000000238418579),Bgm);BeY=BM(BH(Ba0(20,49,Bg6,0),0.30000001192092896),Bgp);Bgz=null;BgA=null;BgB=null;BgC=null;BgD=null;BgE=null;BgF=null;BgG=null;BgH=null;BgI=null;BgJ=null;BgK=null;BgL=null;BgM=null;Be8=BM(BH(KA(35,64,Bg7),0.800000011920929),Bgq);BgN=null;Be1=BM(BH(A3i(37,13),0.0),Bgm);Be2=BM(BH(A3i(38,12),0.0),Bgm);Be3=GJ(BM(BH(ATQ(39,29),0.0),Bgm),0.125);Be4=BM(BH(ATQ(40,28),0.0),Bgm);Bfb=BM(Dn(BH(AED(41,39),3.0),10.0),Bgo);Bfa=BM(Dn(BH(AED(42,38),5.0),
10.0),Bgo);BeM=BM(Dn(BH(A9i(43,1),2.0),10.0),Bgn);BeN=BM(Dn(BH(A9i(44,0),2.0),10.0),Bgn);BeT=BM(Dn(BH(KA(45,7,Bg4),2.0),10.0),Bgn);Bfd=BM(BH(BaD(46,8),0.0),Bgm);Bfc=BM(BH(Bae(47,35),1.5),Bgk);BeZ=BM(Dn(BH(KA(48,36,Bg4),2.0),10.0),Bgn);Bfe=BM(Dn(BH(Bbj(49,37),10.0),20.0),Bgn);BeX=BM(GJ(BH(Ba7(50,80),0.0),0.9375),Bgk);Bgi=BM(GJ(BH(BcN(51,31),0.0),1.0),Bgk);BgO=BM(BH(BcD(52,65),5.0),Bgo);BgP=A$I(53,BeU);BgQ=BM(BH(A_3(54),2.5),Bgk);BgR=BM(BH(BbH(55,62),0.5),Bgo);BgS=BM(Dn(BH(SQ(56,50),3.0),5.0),Bgn);BgT=BM(Dn(BH(AED(57,
40),5.0),10.0),Bgo);BgU=BM(BH(Bbm(58),2.5),Bgk);BgV=BM(BH(Bcq(59,88),0.0),Bgm);BgW=BM(BH(BbT(60),0.6000000238418579),Bgl);BgX=BM(BH(A4I(61,0),3.5),Bgn);BgY=GJ(BM(BH(A4I(62,1),3.5),Bgn),0.875);b=new Vy;BB();AHu(b,63,F(Jk),Bg8.cW);BgZ=BM(BH(b,1.0),Bgk);Bg0=BM(BH(A_$(64),3.0),Bgk);Bf6=BM(BH(Bcf(65,83),0.4000000059604645),Bgk);Bg1=BM(BH(BaU(66,128),1.0),Bgo);Bg2=A$I(67,BeS);c=0;while(c<256){if(BeI.data[c]!==null)Bg9.data[c]=A_2(c-256|0);c=c+1|0;}}
function RF(){}
function AJg(){var a=this;Gf.call(a);a.d$=null;a.s=0;}
function Ci(){var a=new AJg();AV$(a);return a;}
function AV$(a){a.d$=J(D,10);}
function Tz(a,b){var c;if(a.d$.data.length<b){c=a.d$.data.length>=1073741823?2147483647:DE(b,DE(a.d$.data.length*2|0,5));a.d$=Ns(a.d$,c);}}
function Z(a,b){K9(a,b);return a.d$.data[b];}
function CY(a){return a.s;}
function Re(a,b,c){var d;K9(a,b);d=a.d$.data[b];a.d$.data[b]=c;return d;}
function S(a,b){var c,d;Tz(a,a.s+1|0);c=a.d$.data;d=a.s;a.s=d+1|0;c[d]=b;a.d7=a.d7+1|0;return 1;}
function AML(a,b,c){var d;if(b>=0&&b<=a.s){Tz(a,a.s+1|0);d=a.s;while(d>b){a.d$.data[d]=a.d$.data[d-1|0];d=d+(-1)|0;}a.d$.data[b]=c;a.s=a.s+1|0;a.d7=a.d7+1|0;return;}c=new BS;P(c);M(c);}
function En(a,b){var c,d,e,f;K9(a,b);c=a.d$.data[b];a.s=a.s-1|0;while(b<a.s){d=a.d$.data;e=a.d$.data;f=b+1|0;d[b]=e[f];b=f;}a.d$.data[a.s]=null;a.d7=a.d7+1|0;return c;}
function H_(a,b){var c;c=ABc(a,b);if(c<0)return 0;En(a,c);return 1;}
function Dy(a){ZG(a.d$,0,a.s,null);a.s=0;}
function K9(a,b){var c;if(b>=0&&b<a.s)return;c=new BS;P(c);M(c);}
function DH(){}
function TN(){D.call(this);this.AP=null;}
function AQE(a){CM(a.AP,SW(0,1,null,null));}
function AWo(a){AQE(a);}
function TM(){var a=this;D.call(a);a.Es=null;a.EM=null;}
function AQB(a){CM(a.Es,SW(0,0,null,a.EM.result));}
function AS7(a){AQB(a);}
function TL(){D.call(this);this.Dy=null;}
function ASg(a){CM(a.Dy,SW(1,0,B(241),null));}
function AZl(a){ASg(a);}
function TK(){D.call(this);this.Bq=null;}
function AJ$(a,b){var c,d,e,f,g,h,i;c=a.Bq.result;d=A9T();e=J(B4,1).data;e[0]=B(242);f=e.length;g=new Array(f);h=0;while(h<f){i=$rt_ustr(e[h]);g[h]=i;h=h+1|0;}d.keyPath=g;c.createObjectStore("filesystem",d);}
function ANK(a,b){AJ$(a,b);}
function A6E(a,b){ANK(a,b);}
function SF(){D.call(this);}
var Bf0=null;function Bg$(){var a=new SF();ZP(a);return a;}
function ZP(a){return;}
function AFr(){Bf0=Df();BP(Bf0,B(24),A1F());}
function Cc(){B6.call(this);}
function Bg_(){var a=new Cc();AUa(a);return a;}
function AUa(a){P(a);}
function Vj(){Cc.call(this);this.Iv=null;}
function E3(){B6.call(this);}
function BcV(){var a=new E3();AUM(a);return a;}
function AUM(a){P(a);}
function AA_(){D.call(this);}
function Bha(){var a=new AA_();AY4(a);return a;}
function AY4(a){return;}
function Fk(){var a=this;D.call(a);a.mF=0;a.bk=0;a.cy=0;a.lt=0;}
function Bhb(a){var b=new Fk();KQ(b,a);return b;}
function KQ(a,b){a.lt=(-1);a.mF=b;a.cy=b;}
function AVC(a){return a.mF;}
function A8n(a){return a.bk;}
function EM(a,b){var c,d;if(b>=0&&b<=a.cy){a.bk=b;if(b<a.lt)a.lt=0;return a;}c=new Cc;d=new U;W(d);Bo(c,V(I(Bf(I(Bf(I(d,B(243)),b),B(244)),a.cy),B(245))));M(c);}
function A05(a){return a.cy;}
function Np(a,b){var c,d;if(b>=0&&b<=a.mF){if(a.lt>b)a.lt=(-1);a.cy=b;if(a.bk>a.cy)a.bk=a.cy;return a;}c=new Cc;d=new U;W(d);Bo(c,V(I(Bf(I(Bf(I(d,B(246)),b),B(244)),a.mF),B(245))));M(c);}
function EA(a){a.bk=0;a.cy=a.mF;a.lt=(-1);return a;}
function Gw(a){a.cy=a.bk;a.bk=0;a.lt=(-1);return a;}
function Ct(a){return a.cy-a.bk|0;}
function Fl(a){return a.bk>=a.cy?0:1;}
function L8(){Fk.call(this);}
function ADs(a,b,c,d){var e,f,g,h,i,j,k;if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f){h=new BS;i=new U;W(i);Bo(h,V(Bf(I(Bf(I(i,B(247)),g),B(248)),f)));M(h);}if(Ct(a)<d){h=new Gt;P(h);M(h);}if(d<0){h=new BS;i=new U;W(i);Bo(h,V(I(Bf(I(i,B(249)),d),B(250))));M(h);}g=a.bk;j=0;while(j<d){k=c+1|0;f=g+1|0;e[c]=RJ(a,g);j=j+1|0;c=k;g=f;}a.bk=a.bk+d|0;return a;}}b=b.data;i=new BS;h=new U;W(h);Bo(i,V(I(Bf(I(Bf(I(h,B(251)),c),B(244)),b.length),B(27))));M(i);}
function VP(a,b){return ADs(a,b,0,b.data.length);}
function LS(a){EA(a);return a;}
function TR(a){Gw(a);return a;}
function Qe(a,b){Np(a,b);return a;}
function AE6(){var a=this;D.call(a);a.F=null;a.cz=0;a.fq=0;a.dQ=0;}
function A8g(a){var b=new AE6();ATG(b,a);return b;}
function Kk(){var a=new AE6();ATd(a);return a;}
function ATG(a,b){a.cz=(-1);a.fq=0;a.dQ=0;a.F=b;}
function ATd(a){a.cz=(-1);a.fq=0;a.dQ=0;}
function AMz(a,b,c,d,e,f){var $p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.cz=f;$p=1;case 1:AN2(a,b,c,d,e);if(C()){break _;}a.cz=(-1);return;default:E$();}}C4().s(a,b,c,d,e,f,$p);}
function AN2(a,b,c,d,e){var f,g,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=b.em();g=a.F;$p=1;case 1:b.xM(g,c,d,e);if(C()){break _;}if(!f){$p=2;continue _;}if(f==4){$p=3;continue _;}if(f==1){$p=4;continue _;}if(f==6){$p=5;continue _;}if(f==2){$p=6;continue _;}if(f==3){$p=7;continue _;}if(f==5){$p=8;continue _;}if(f==8){$p=9;continue _;}if(f==7){$p=10;continue _;}if(f==9){$p=11;continue _;}if(f==10){$p=12;continue _;}if
(f!=11)return 0;$p=13;continue _;case 2:$z=ABX(a,b,c,d,e);if(C()){break _;}c=$z;return c;case 3:$z=AB7(a,b,c,d,e);if(C()){break _;}c=$z;return c;case 4:$z=ABa(a,b,c,d,e);if(C()){break _;}c=$z;return c;case 5:$z=ALL(a,b,c,d,e);if(C()){break _;}c=$z;return c;case 6:$z=AN4(a,b,c,d,e);if(C()){break _;}c=$z;return c;case 7:$z=ZU(a,b,c,d,e);if(C()){break _;}c=$z;return c;case 8:$z=ADv(a,b,c,d,e);if(C()){break _;}c=$z;return c;case 9:$z=AJz(a,b,c,d,e);if(C()){break _;}c=$z;return c;case 10:$z=AKD(a,b,c,d,e);if(C())
{break _;}c=$z;return c;case 11:$z=AM$(a,b,c,d,e);if(C()){break _;}c=$z;return c;case 12:$z=AIw(a,b,c,d,e);if(C()){break _;}c=$z;return c;case 13:$z=AFK(a,b,c,d,e);if(C()){break _;}c=$z;return c;default:E$();}}C4().s(a,b,c,d,e,f,g,$p);}
function AN4(a,b,c,d,e){var f,g,h,i,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=a.F;$p=1;case 1:$z=f.eI(c,d,e);if(C()){break _;}g=$z;BA();f=BeE;h=a.F;$p=2;case 2:$z=b.Cy(h,c,d,e);if(C()){break _;}i=$z;if(Bgw.data[b.b]>0)i=1.0;Cq(f,i,i,i);if(g==1)GH(a,b,c-0.09999999403953552,d+0.20000000298023224,e,(-0.4000000059604645),0.0);else if(g==2)GH(a,b,c+0.09999999403953552,d+0.20000000298023224,e,0.4000000059604645,
0.0);else if(g==3)GH(a,b,c,d+0.20000000298023224,e-0.09999999403953552,0.0,(-0.4000000059604645));else if(g!=4)GH(a,b,c,d,e,0.0,0.0);else GH(a,b,c,d+0.20000000298023224,e+0.09999999403953552,0.0,0.4000000059604645);return 1;default:E$();}}C4().s(a,b,c,d,e,f,g,h,i,$p);}
function ZU(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();bk=$T.l();bj=$T.l();bi=$T.l();bh=$T.l();bg=$T.l();bf=$T.l();be=$T.l();bd=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p)
{case 0:BA();f=BeE;g=b.ci(0);if(a.cz>=0)g=a.cz;h=a.F;$p=1;case 1:$z=b.Cy(h,c,d,e);if(C()){break _;}i=$z;Cq(f,i,i,i);j=(g&15)<<4;k=g&240;i=j;l=i/256.0;m=(i+15.989999771118164)/256.0;i=k;n=i/256.0;o=i+15.989999771118164;p=o/256.0;q=1.399999976158142;b=a.F;g=d-1|0;$p=2;case 2:$z=b.lf(c,g,e);if(C()){break _;}j=$z;if(j){r=c+0.5;s=r+0.2;t=r-0.2;u=e+0.5;v=u+0.2;w=u-0.2;x=r-0.3;y=r+0.3;z=u-0.3;ba=u+0.3;bb=d+q;bc=e+1|0;G(f,x,bb,bc,m,n);bd=d+0|0;G(f,s,bd,bc,m,p);be=e+0|0;G(f,s,bd,be,l,p);G(f,x,bb,be,l,n);G(f,y,bb,be,
m,n);G(f,t,bd,be,m,p);G(f,t,bd,bc,l,p);G(f,y,bb,bc,l,n);y=(k+16|0)/256.0;s=(o+16.0)/256.0;t=c+1|0;G(f,t,bb,ba,m,y);G(f,t,bd,w,m,s);x=c+0|0;G(f,x,bd,w,l,s);G(f,x,bb,ba,l,y);G(f,x,bb,z,m,y);G(f,x,bd,v,m,s);G(f,t,bd,v,l,s);G(f,t,bb,z,l,y);v=r-0.5;z=r+0.5;ba=u-0.5;bf=u+0.5;bg=r-0.4;bh=r+0.4;r=u-0.4;w=u+0.4;G(f,bg,bb,be,l,y);G(f,v,bd,be,l,s);G(f,v,bd,bc,m,s);G(f,bg,bb,bc,m,y);G(f,bh,bb,bc,l,y);G(f,z,bd,bc,l,s);G(f,z,bd,be,m,s);G(f,bh,bb,be,m,y);G(f,x,bb,w,l,n);G(f,x,bd,bf,l,p);G(f,t,bd,bf,m,p);G(f,t,bb,w,m,n);G(f,
t,bb,r,l,n);G(f,t,bd,ba,l,p);G(f,x,bd,ba,m,p);G(f,x,bb,r,m,n);return 1;}b=Bgi;h=a.F;$p=3;case 3:$z=AF1(b,h,c,g,e);if(C()){break _;}g=$z;if(g){r=c+0.5;s=r+0.2;t=r-0.2;u=e+0.5;v=u+0.2;w=u-0.2;x=r-0.3;y=r+0.3;z=u-0.3;ba=u+0.3;bb=d+q;bc=e+1|0;G(f,x,bb,bc,m,n);bd=d+0|0;G(f,s,bd,bc,m,p);be=e+0|0;G(f,s,bd,be,l,p);G(f,x,bb,be,l,n);G(f,y,bb,be,m,n);G(f,t,bd,be,m,p);G(f,t,bd,bc,l,p);G(f,y,bb,bc,l,n);y=(k+16|0)/256.0;s=(o+16.0)/256.0;t=c+1|0;G(f,t,bb,ba,m,y);G(f,t,bd,w,m,s);x=c+0|0;G(f,x,bd,w,l,s);G(f,x,bb,ba,l,y);G(f,
x,bb,z,m,y);G(f,x,bd,v,m,s);G(f,t,bd,v,l,s);G(f,t,bb,z,l,y);v=r-0.5;z=r+0.5;ba=u-0.5;bf=u+0.5;bg=r-0.4;bh=r+0.4;r=u-0.4;w=u+0.4;G(f,bg,bb,be,l,y);G(f,v,bd,be,l,s);G(f,v,bd,bc,m,s);G(f,bg,bb,bc,m,y);G(f,bh,bb,bc,l,y);G(f,z,bd,bc,l,s);G(f,z,bd,be,m,s);G(f,bh,bb,be,m,y);G(f,x,bb,w,l,n);G(f,x,bd,bf,l,p);G(f,t,bd,bf,m,p);G(f,t,bb,w,m,n);G(f,t,bb,r,l,n);G(f,t,bd,ba,l,p);G(f,x,bd,ba,m,p);G(f,x,bb,r,m,n);return 1;}bi=0.20000000298023224;bj=0.0625;if((((c+d|0)+e|0)&1)!=1){ba=l;bb=m;x=n;z=p;}else{x=(k+16|0)/256.0;z=(o
+16.0)/256.0;ba=l;bb=m;}if(((((c/2|0)+(d/2|0)|0)+(e/2|0)|0)&1)!=1){r=ba;ba=bb;bb=r;}b=Bgi;h=a.F;g=c-1|0;$p=4;case 4:$z=AF1(b,h,g,d,e);if(C()){break _;}g=$z;if(g){w=c+bi;s=d+q+bj;t=e+1|0;G(f,w,s,t,ba,x);u=c+0|0;v=(d+0|0)+bj;G(f,u,v,t,ba,z);r=e+0|0;G(f,u,v,r,bb,z);G(f,w,s,r,bb,x);G(f,w,s,r,bb,x);G(f,u,v,r,bb,z);G(f,u,v,t,ba,z);G(f,w,s,t,ba,x);}b=Bgi;h=a.F;j=c+1|0;$p=5;case 5:$z=AF1(b,h,j,d,e);if(C()){break _;}g=$z;if(g){r=j-bi;w=d+q+bj;s=e+0|0;G(f,r,w,s,bb,x);t=j-0|0;u=(d+0|0)+bj;G(f,t,u,s,bb,z);v=e+1|0;G(f,t,
u,v,ba,z);G(f,r,w,v,ba,x);G(f,r,w,v,ba,x);G(f,t,u,v,ba,z);G(f,t,u,s,bb,z);G(f,r,w,s,bb,x);}b=Bgi;h=a.F;g=e-1|0;$p=6;case 6:$z=AF1(b,h,c,d,g);if(C()){break _;}g=$z;if(g){r=c+0|0;w=d+q+bj;s=e+bi;G(f,r,w,s,ba,x);t=(d+0|0)+bj;u=e+0|0;G(f,r,t,u,ba,z);v=j;G(f,v,t,u,bb,z);G(f,v,w,s,bb,x);G(f,v,w,s,bb,x);G(f,v,t,u,bb,z);G(f,r,t,u,ba,z);G(f,r,w,s,ba,x);}b=Bgi;h=a.F;bk=e+1|0;$p=7;case 7:$z=AF1(b,h,c,d,bk);if(C()){break _;}g=$z;if(g){t=j;u=d+q+bj;v=bk-bi;G(f,t,u,v,bb,x);r=(d+0|0)+bj;w=bk-0|0;G(f,t,r,w,bb,z);s=c+0|0;G(f,
s,r,w,ba,z);G(f,s,u,v,ba,x);G(f,s,u,v,ba,x);G(f,s,r,w,ba,z);G(f,t,r,w,bb,z);G(f,t,u,v,bb,x);}b=Bgi;h=a.F;d=d+1|0;$p=8;case 8:$z=AF1(b,h,c,d,e);if(C()){break _;}g=$z;if(g){r=c+0.5;t=r+0.5;u=r-0.5;r=e+0.5;w=r+0.5;r=r-0.5;if(((c+d|0)+e|0)&1){s=c+0|0;t=d+(-0.20000000298023224);G(f,s,t,w,m,n);u=d+0|0;G(f,s,u,r,m,p);v=j;G(f,v,u,r,l,p);G(f,v,t,w,l,n);x=(k+16|0)/256.0;z=(o+16.0)/256.0;G(f,v,t,r,m,x);G(f,v,u,w,m,z);G(f,s,u,w,l,z);G(f,s,t,r,l,x);}else{v=d+(-0.20000000298023224);x=e+0|0;G(f,u,v,x,m,n);z=d+0|0;G(f,t,z,
x,m,p);r=bk;G(f,t,z,r,l,p);G(f,u,v,r,l,n);w=(k+16|0)/256.0;s=(o+16.0)/256.0;G(f,t,v,r,m,w);G(f,u,z,r,m,s);G(f,u,z,x,l,s);G(f,t,v,x,l,w);}}return 1;default:E$();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,$p);}
function ADv(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:BA();f=BeE;g=b.ci(0);if(a.cz>=0)g=a.cz;h=a.F;$p=1;case 1:$z=b.Cy(h,c,d,e);if(C()){break _;}i=$z;Cq(f,i,i,i);j=(g&15)<<4;k=j+16|0;l=g&240;if((((c+d|0)+e|0)&
1)!=1){g=j;j=k;k=g;}i=j;m=i/256.0;n=(i+15.989999771118164)/256.0;i=l;o=i/256.0;p=(i+15.989999771118164)/256.0;q=k;r=q/256.0;s=(q+15.989999771118164)/256.0;t=0.125;q=0.05000000074505806;b=a.F;k=c-1|0;$p=2;case 2:$z=b.lf(k,d,e);if(C()){break _;}k=$z;if(k){u=c+q;v=(d+1|0)+t;w=(e+1|0)+t;G(f,u,v,w,m,o);x=(d+0|0)-t;G(f,u,x,w,m,p);w=(e+0|0)-t;G(f,u,x,w,n,p);G(f,u,v,w,n,o);}b=a.F;l=c+1|0;$p=3;case 3:$z=b.lf(l,d,e);if(C()){break _;}k=$z;if(k){u=l-q;x=(d+0|0)-t;w=(e+1|0)+t;G(f,u,x,w,n,p);v=(d+1|0)+t;G(f,u,v,w,n,o);w=
(e+0|0)-t;G(f,u,v,w,m,o);G(f,u,x,w,m,p);}b=a.F;k=e-1|0;$p=4;case 4:$z=b.lf(c,d,k);if(C()){break _;}k=$z;if(k){u=l+t;m=(d+0|0)-t;x=e+q;G(f,u,m,x,s,p);w=(d+1|0)+t;G(f,u,w,x,s,o);u=(c+0|0)-t;G(f,u,w,x,r,o);G(f,u,m,x,r,p);}b=a.F;e=e+1|0;$p=5;case 5:$z=b.lf(c,d,e);if(C()){break _;}k=$z;if(k){u=l+t;m=(d+1|0)+t;x=e-q;G(f,u,m,x,r,o);w=(d+0|0)-t;G(f,u,w,x,r,p);u=(c+0|0)-t;G(f,u,w,x,s,p);G(f,u,m,x,s,o);}return 1;default:E$();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,$p);}
function AM$(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();bn=$T.l();bm=$T.l();bl=$T.l();bk=$T.l();bj=$T.l();bi=$T.l();bh=$T.l();bg=$T.l();bf=$T.l();be=$T.l();bd=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=
$T.l();a=$T.l();}_:while(true){switch($p){case 0:BA();f=BeE;g=a.F;$p=1;case 1:$z=g.eI(c,d,e);if(C()){break _;}h=$z;i=b.eY(0,h);if(a.cz>=0)i=a.cz;g=a.F;$p=2;case 2:$z=b.Cy(g,c,d,e);if(C()){break _;}j=$z;Cq(f,j,j,j);k=(i&15)<<4;l=i&240;m=k;n=m/256.0;o=(m+15.989999771118164)/256.0;m=l;p=m/256.0;q=(m+15.989999771118164)/256.0;r=c+1|0;s=c+0|0;t=e+0|0;u=e+1|0;v=d+0.0625;if(h!=1&&h!=2&&h!=3&&h!=7){if(h==8){w=s;x=r;y=r;z=u;m=t;j=t;ba=s;r=x;s=y;bb=u;t=m;u=j;}else if(h!=9){w=r;j=s;z=t;m=u;ba=r;r=j;bb=t;t=m;}else{w=r;ba
=s;j=r;z=u;bb=t;m=t;r=s;s=j;t=u;u=m;}}else{w=s;ba=r;z=t;bb=u;}if(h!=2&&h!=4){if(h!=3&&h!=5){x=v;j=v;y=v;m=v;v=j;}else{j=v+1.0;x=j;y=v;m=v;v=j;}}else{m=v+1.0;x=v;y=m;}bc=ba;bd=y;be=bb;G(f,bc,bd,be,o,p);bf=w;bg=x;bh=u;G(f,bf,bg,bh,o,q);bi=s;bj=v;bk=t;G(f,bi,bj,bk,n,q);bl=r;bm=m;bn=z;G(f,bl,bm,bn,n,p);G(f,bl,bm,bn,n,p);G(f,bi,bj,bk,n,q);G(f,bf,bg,bh,o,q);G(f,bc,bd,be,o,p);return 1;default:E$();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,$p);}
function AJz(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:BA();f=BeE;g=b.ci(0);if(a.cz>=0)g=a.cz;h=a.F;$p=1;case 1:$z=b.Cy(h,c,d,e);if(C()){break _;}i=$z;Cq(f,i,i,i);j=(g&15)<<4;k=g&240;i=j;l=i/256.0;m=(i+15.989999771118164)/256.0;i=k;n=i/256.0;o=(i+15.989999771118164)
/256.0;b=a.F;$p=2;case 2:$z=b.eI(c,d,e);if(C()){break _;}p=$z;if(p==5){q=c+0.05000000074505806;r=(d+1|0)+0.0;s=(e+1|0)+0.0;G(f,q,r,s,l,n);t=(d+0|0)-0.0;G(f,q,t,s,l,o);s=(e+0|0)-0.0;G(f,q,t,s,m,o);G(f,q,r,s,m,n);}if(p==4){t=(c+1|0)-0.05000000074505806;q=(d+0|0)-0.0;s=(e+1|0)+0.0;G(f,t,q,s,m,o);r=(d+1|0)+0.0;G(f,t,r,s,m,n);s=(e+0|0)-0.0;G(f,t,r,s,l,n);G(f,t,q,s,l,o);}if(p==3){q=(c+1|0)+0.0;r=(d+0|0)-0.0;s=e+0.05000000074505806;G(f,q,r,s,m,o);t=(d+1|0)+0.0;G(f,q,t,s,m,n);q=(c+0|0)-0.0;G(f,q,t,s,l,n);G(f,q,r,s,
l,o);}if(p==2){r=(c+1|0)+0.0;s=(d+1|0)+0.0;t=(e+1|0)-0.05000000074505806;G(f,r,s,t,l,n);q=(d+0|0)-0.0;G(f,r,q,t,l,o);r=(c+0|0)-0.0;G(f,r,q,t,m,o);G(f,r,s,t,m,n);}return 1;default:E$();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,$p);}
function ABa(a,b,c,d,e){var f,g,h,i,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:BA();f=BeE;g=a.F;$p=1;case 1:$z=b.Cy(g,c,d,e);if(C()){break _;}h=$z;Cq(f,h,h,h);f=a.F;$p=2;case 2:$z=f.eI(c,d,e);if(C()){break _;}i=$z;Ut(a,b,i,c,d,e);return 1;default:E$();}}C4().s(a,b,c,d,e,f,g,h,i,$p);}
function ALL(a,b,c,d,e){var f,g,h,i,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:BA();f=BeE;g=a.F;$p=1;case 1:$z=b.Cy(g,c,d,e);if(C()){break _;}h=$z;Cq(f,h,h,h);f=a.F;$p=2;case 2:$z=f.eI(c,d,e);if(C()){break _;}i=$z;OQ(a,b,i,c,d-0.0625,e);return 1;default:E$();}}C4().s(a,b,c,d,e,f,g,h,i,$p);}
function GH(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd;BA();h=BeE;i=b.ci(0);if(a.cz>=0)i=a.cz;j=(i&15)<<4;k=i&240;l=j;m=l/256.0;l=(l+15.989999771118164)/256.0;n=k;o=n/256.0;n=(n+15.989999771118164)/256.0;p=m;q=p+0.02734375;r=o;s=r+0.0234375;t=p+0.03515625;u=r+0.03125;c=c+0.5;e=e+0.5;v=c-0.5;w=c+0.5;x=e-0.5;y=e+0.5;z=c+f*0.375;ba=z-0.0625;bb=d+0.625;bc=e+g*0.375;bd=bc-0.0625;G(h,ba,bb,bd,q,s);bc=bc+0.0625;G(h,ba,bb,bc,q,u);q=z+0.0625;G(h,q,bb,bc,t,u);G(h,q,bb,bd,t,s);u=c-0.0625;bc=d
+1.0;G(h,u,bc,x,p,r);q=u+f;d=d+0.0;t=x+g;bd=n;G(h,q,d,t,p,bd);s=y+g;z=l;G(h,q,d,s,z,bd);G(h,u,bc,y,z,r);u=c+0.0625;G(h,u,bc,y,p,r);c=c+f+0.0625;G(h,c,d,s,p,bd);G(h,c,d,t,z,bd);G(h,u,bc,x,z,r);c=e+0.0625;G(h,v,bc,c,p,r);u=v+f;q=c+g;G(h,u,d,q,p,bd);f=w+f;G(h,f,d,q,z,bd);G(h,w,bc,c,z,r);c=e-0.0625;G(h,w,bc,c,p,r);e=c+g;G(h,f,d,e,p,bd);G(h,u,d,e,z,bd);G(h,v,bc,c,z,r);}
function Ut(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s;BA();g=BeE;h=b.eY(0,c);if(a.cz>=0)h=a.cz;i=(h&15)<<4;j=h&240;k=i;l=k/256.0;m=(k+15.989999771118164)/256.0;k=j;n=k/256.0;o=(k+15.989999771118164)/256.0;d=d+0.5;p=d-0.44999998807907104;q=d+0.44999998807907104;d=f+0.5;r=d-0.44999998807907104;s=d+0.44999998807907104;d=e+1.0;G(g,p,d,r,l,n);e=e+0.0;G(g,p,e,r,l,o);G(g,q,e,s,m,o);G(g,q,d,s,m,n);G(g,q,d,s,l,n);G(g,q,e,s,l,o);G(g,p,e,r,m,o);G(g,p,d,r,m,n);G(g,p,d,s,l,n);G(g,p,e,s,l,o);G(g,q,e,r,m,o);G(g,q,d,r,m,n);G(g,
q,d,r,l,n);G(g,q,e,r,l,o);G(g,p,e,s,m,o);G(g,p,d,s,m,n);}
function OQ(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t;BA();g=BeE;h=b.eY(0,c);if(a.cz>=0)h=a.cz;i=(h&15)<<4;j=h&240;k=i;l=k/256.0;m=(k+15.989999771118164)/256.0;k=j;n=k/256.0;o=(k+15.989999771118164)/256.0;d=d+0.5;p=d-0.25;q=d+0.25;f=f+0.5;r=f-0.5;s=f+0.5;t=e+1.0;G(g,p,t,r,l,n);e=e+0.0;G(g,p,e,r,l,o);G(g,p,e,s,m,o);G(g,p,t,s,m,n);G(g,p,t,s,l,n);G(g,p,e,s,l,o);G(g,p,e,r,m,o);G(g,p,t,r,m,n);G(g,q,t,s,l,n);G(g,q,e,s,l,o);G(g,q,e,r,m,o);G(g,q,t,r,m,n);G(g,q,t,r,l,n);G(g,q,e,r,l,o);G(g,q,e,s,m,o);G(g,q,t,s,m,n);p
=d-0.5;d=d+0.5;q=f-0.25;f=f+0.25;G(g,p,t,q,l,n);G(g,p,e,q,l,o);G(g,d,e,q,m,o);G(g,d,t,q,m,n);G(g,d,t,q,l,n);G(g,d,e,q,l,o);G(g,p,e,q,m,o);G(g,p,t,q,m,n);G(g,d,t,f,l,n);G(g,d,e,f,l,o);G(g,p,e,f,m,o);G(g,p,t,f,m,n);G(g,p,t,f,l,n);G(g,p,e,f,l,o);G(g,d,e,f,m,o);G(g,d,t,f,m,n);}
function AB7(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br,bs,bt,bu,bv,bw,bx,by,bz,bA,bB,bC,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();bC=$T.l();bB=$T.l();bA=$T.l();bz=$T.l();by=$T.l();bx=$T.l();bw=$T.l();bv=$T.l();bu=$T.l();bt=$T.l();bs=$T.l();br=$T.l();bq=$T.l();bp=$T.l();bo=$T.l();bn=$T.l();bm=$T.l();bl=$T.l();bk=$T.l();bj=$T.l();bi=$T.l();bh=$T.l();bg=$T.l();bf=$T.l();be=$T.l();bd=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w
=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:BA();f=BeE;g=a.F;h=d+1|0;i=1;$p=1;case 1:$z=b.pH(g,c,h,e,i);if(C()){break _;}h=$z;g=a.F;i=d-1|0;j=0;$p=2;case 2:$z=b.pH(g,c,i,e,j);if(C()){break _;}j=$z;k=$rt_createBooleanArray(4).data;l=0;g=a.F;m=e-1|0;n=2;$p=3;case 3:$z=b.pH(g,c,d,m,n);if(C()){break _;}n=$z;k[l]=n;n=1;g
=a.F;o=e+1|0;l=3;$p=4;case 4:$z=b.pH(g,c,d,o,l);if(C()){break _;}l=$z;k[n]=l;n=2;g=a.F;p=c-1|0;l=4;$p=5;case 5:$z=b.pH(g,p,d,e,l);if(C()){break _;}l=$z;k[n]=l;n=3;g=a.F;q=c+1|0;l=5;$p=6;case 6:$z=b.pH(g,q,d,e,l);if(C()){break _;}l=$z;k[n]=l;if(!h&&!j&&!k[0]&&!k[1]&&!k[2]&&!k[3])return 0;r=0;s=0.5;t=1.0;u=0.800000011920929;v=0.6000000238418579;w=0.0;x=1.0;y=b.b_;g=a.F;$p=7;case 7:$z=g.eI(c,d,e);if(C()){break _;}z=$z;$p=8;case 8:$z=APA(a,c,d,e,y);if(C()){break _;}ba=$z;$p=9;case 9:$z=APA(a,c,d,o,y);if(C()){break _;}bb
=$z;$p=10;case 10:$z=APA(a,q,d,o,y);if(C()){break _;}bc=$z;$p=11;case 11:$z=APA(a,q,d,e,y);if(C()){break _;}bd=$z;if(!a.dQ&&!h){if(!a.dQ&&!j){i=0;be=d;bf=d+0|0;bg=c;bh=q;bi=e;bj=o;a:{while(i<4){h=!i?m:e;n=R(i,1);if(!n)h=h+1|0;l=R(i,2);o=!l?p:c;if(i==3)o=o+1|0;q=b.eY(i+2|0,z);bk=(q&15)<<4;bl=q&240;if(a.dQ)break a;if(k[i])break a;i=i+1|0;}b.cM=w;b.cF=x;return r;}if(!i){bm=ba;bn=bd;bo=bg;bp=bh;s=bi;bq=bi;}else if(!n){bm=bc;bn=bb;bo=bh;bp=bg;s=bj;bq=bj;}else if(l){bm=bd;bn=bc;bo=bh;bp=bh;s=bi;bq=bj;}else{bm=bb;bn
=ba;bo=bg;bp=bg;s=bj;bq=bi;}r=1;br=(bk+0|0)/256.0;bs=((bk+16|0)-0.01)/256.0;bt=bl;bu=(bt+(1.0-bm)*16.0)/256.0;bv=(bt+(1.0-bn)*16.0)/256.0;bw=((bl+16|0)-0.01)/256.0;g=a.F;$p=15;continue _;}g=a.F;$p=13;continue _;}r=1;bx=b.eY(1,z);g=a.F;$p=12;case 12:$z=A6c(g,c,d,e,y);if(C()){break _;}by=$z;bm=by;h=R(bm,(-999.0));if(h>0)bx=b.eY(2,z);n=(bx&15)<<4;l=bx&240;by=(n+8.0)/256.0;bz=(l+8.0)/256.0;if(h<0)bm=0.0;else{by=(n+16|0)/256.0;bz=(l+16|0)/256.0;}bn=Bq(bm)*8.0/256.0;bo=BC(bm)*8.0/256.0;g=a.F;$p=14;continue _;case 13:$z
=b.Cy(g,c,i,e);if(C()){break _;}bp=$z;bm=s*bp;Cq(f,bm,bm,bm);HI(a,b,c,d,e,b.ci(0));r=1;i=0;be=d;bf=d+0|0;bg=c;bh=q;bi=e;bj=o;b:{while(i<4){h=!i?m:e;n=R(i,1);if(!n)h=h+1|0;l=R(i,2);o=!l?p:c;if(i==3)o=o+1|0;q=b.eY(i+2|0,z);bk=(q&15)<<4;bl=q&240;if(a.dQ)break b;if(k[i])break b;i=i+1|0;}b.cM=w;b.cF=x;return r;}if(!i){bm=ba;bn=bd;bo=bg;bp=bh;s=bi;bq=bi;}else if(!n){bm=bc;bn=bb;bo=bh;bp=bg;s=bj;bq=bj;}else if(l){bm=bd;bn=bc;bo=bh;bp=bh;s=bi;bq=bj;}else{bm=bb;bn=ba;bo=bg;bp=bg;s=bj;bq=bi;}r=1;br=(bk+0|0)/256.0;bs=
((bk+16|0)-0.01)/256.0;bt=bl;bu=(bt+(1.0-bm)*16.0)/256.0;bv=(bt+(1.0-bn)*16.0)/256.0;bw=((bl+16|0)-0.01)/256.0;g=a.F;$p=15;continue _;case 14:$z=b.Cy(g,c,d,e);if(C()){break _;}bi=$z;bm=t*bi;Cq(f,bm,bm,bm);bA=c+0|0;bm=d;br=bm+ba;bu=e+0|0;bB=bo;bf=by-bB;bw=bn;bC=bf-bw;bs=bz-bB;G(f,bA,br,bu,bC,bs+bw);bC=bm+bb;bv=o;bf=bf+bw;br=bz+bB;G(f,bA,bC,bv,bf,br+bw);bA=q;bf=bm+bc;by=by+bB;G(f,bA,bf,bv,by+bw,br-bw);G(f,bA,bm+bd,bu,by-bw,bs-bw);if(!a.dQ&&!j){i=0;be=d;bf=d+0|0;bg=c;bh=q;bi=e;bj=o;c:{while(i<4){h=!i?m:e;n=R(i,
1);if(!n)h=h+1|0;l=R(i,2);o=!l?p:c;if(i==3)o=o+1|0;q=b.eY(i+2|0,z);bk=(q&15)<<4;bl=q&240;if(a.dQ)break c;if(k[i])break c;i=i+1|0;}b.cM=w;b.cF=x;return r;}if(!i){bm=ba;bn=bd;bo=bg;bp=bh;s=bi;bq=bi;}else if(!n){bm=bc;bn=bb;bo=bh;bp=bg;s=bj;bq=bj;}else if(l){bm=bd;bn=bc;bo=bh;bp=bh;s=bi;bq=bj;}else{bm=bb;bn=ba;bo=bg;bp=bg;s=bj;bq=bi;}r=1;br=(bk+0|0)/256.0;bs=((bk+16|0)-0.01)/256.0;bt=bl;bu=(bt+(1.0-bm)*16.0)/256.0;bv=(bt+(1.0-bn)*16.0)/256.0;bw=((bl+16|0)-0.01)/256.0;g=a.F;$p=15;continue _;}g=a.F;$p=13;continue _;case 15:$z
=b.Cy(g,o,d,h);if(C()){break _;}bt=$z;bt=t*(l>=0?bt*v:bt*u);Cq(f,bt,bt,bt);bC=bo;by=be+bm;bA=s;G(f,bC,by,bA,br,bu);by=bp;bu=be+bn;bB=bq;G(f,by,bu,bB,bs,bv);G(f,by,bf,bB,bs,bw);G(f,bC,bf,bA,br,bw);c:{while(true){i=i+1|0;if(i>=4)break;h=!i?m:e;n=R(i,1);if(!n)h=h+1|0;l=R(i,2);o=!l?p:c;if(i==3)o=o+1|0;q=b.eY(i+2|0,z);bk=(q&15)<<4;bl=q&240;if(a.dQ)break c;if(k[i])break c;}b.cM=w;b.cF=x;return r;}if(!i){bm=ba;bn=bd;bo=bg;bp=bh;s=bi;bq=bi;}else if(!n){bm=bc;bn=bb;bo=bh;bp=bg;s=bj;bq=bj;}else if(l){bm=bd;bn=bc;bo=bh;bp
=bh;s=bi;bq=bj;}else{bm=bb;bn=ba;bo=bg;bp=bg;s=bj;bq=bi;}r=1;br=(bk+0|0)/256.0;bs=((bk+16|0)-0.01)/256.0;bt=bl;bu=(bt+(1.0-bm)*16.0)/256.0;bv=(bt+(1.0-bn)*16.0)/256.0;bw=((bl+16|0)-0.01)/256.0;g=a.F;continue _;default:E$();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br,bs,bt,bu,bv,bw,bx,by,bz,bA,bB,bC,$p);}
function APA(a,b,c,d,e){var f,g,h,i,j,k,l,m,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=0;g=0.0;h=0;i=c+1|0;if(h>=4)return 1.0-g/f;j=b-(h&1)|0;k=d-(h>>1&1)|0;l=a.F;$p=1;case 1:$z=l.oK(j,i,k);if(C()){break _;}l=$z;if(l===e)return 1.0;l=a.F;$p=2;case 2:$z=l.oK(j,c,k);if(C()){break _;}l=$z;if(l===e){l=a.F;$p=3;continue _;}if(!l.dw()){g=g+1.0;f=f+1|0;}h=h+1|0;if(h
>=4)return 1.0-g/f;j=b-(h&1)|0;k=d-(h>>1&1)|0;l=a.F;$p=1;continue _;case 3:$z=l.eI(j,c,k);if(C()){break _;}m=$z;if(!(m<8&&m)){g=g+Jy(m)*10.0;f=f+10|0;}g=g+Jy(m);f=f+1|0;h=h+1|0;if(h>=4)return 1.0-g/f;j=b-(h&1)|0;k=d-(h>>1&1)|0;l=a.F;$p=1;continue _;default:E$();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function AI1(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=0.5;h=1.0;i=0.800000011920929;j=0.6000000238418579;BA();k=BeE;Bz(k);$p=1;case 1:$z=b.Cy(c,d,e,f);if(C()){break _;}l=$z;m=e-1|0;$p=2;case 2:$z=b.Cy(c,d,m,f);if(C()){break _;}n=$z;if(n<l)n=l;n=g*n;Cq(k,n,n,n);HI(a,b,(-0.5),(-0.5),(-0.5),b.ci(0));m=e+1|0;$p=3;case 3:$z
=b.Cy(c,d,m,f);if(C()){break _;}n=$z;if(n<l)n=l;h=h*n;Cq(k,h,h,h);JJ(a,b,(-0.5),(-0.5),(-0.5),b.ci(1));m=f-1|0;$p=4;case 4:$z=b.Cy(c,d,e,m);if(C()){break _;}h=$z;if(h<l)h=l;h=i*h;Cq(k,h,h,h);JY(a,b,(-0.5),(-0.5),(-0.5),b.ci(2));m=f+1|0;$p=5;case 5:$z=b.Cy(c,d,e,m);if(C()){break _;}h=$z;if(h<l)h=l;h=i*h;Cq(k,h,h,h);Ka(a,b,(-0.5),(-0.5),(-0.5),b.ci(3));m=d-1|0;$p=6;case 6:$z=b.Cy(c,m,e,f);if(C()){break _;}h=$z;if(h<l)h=l;h=j*h;Cq(k,h,h,h);JS(a,b,(-0.5),(-0.5),(-0.5),b.ci(4));d=d+1|0;$p=7;case 7:$z=b.Cy(c,d,e,
f);if(C()){break _;}h=$z;if(h>=l)l=h;h=j*l;Cq(k,h,h,h);KS(a,b,(-0.5),(-0.5),(-0.5),b.ci(5));Bs(k);return;default:E$();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function ABX(a,b,c,d,e){var f,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=1.0;$p=1;case 1:$z=ALu(a,b,c,d,e,f,f,f);if(C()){break _;}c=$z;return c;default:E$();}}C4().s(a,b,c,d,e,f,$p);}
function ALu(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();bd=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:BA();i=BeE;j=0;k=0.5*f;l=1.0*f;m=0.800000011920929*f;n=0.6000000238418579*f;o=0.5
*g;p=1.0*g;q=0.800000011920929*g;r=0.6000000238418579*g;s=0.5*h;t=1.0*h;u=0.800000011920929*h;v=0.6000000238418579*h;w=a.F;$p=1;case 1:$z=b.Cy(w,c,d,e);if(C()){break _;}x=$z;if(a.dQ){w=a.F;y=d-1|0;$p=2;continue _;}w=a.F;z=d-1|0;y=0;$p=3;continue _;case 2:$z=b.Cy(w,c,y,e);if(C()){break _;}ba=$z;if(Bgw.data[b.b]>0)ba=1.0;Cq(i,k*ba,o*ba,s*ba);bb=c;bc=d;bd=e;w=a.F;y=0;$p=4;continue _;case 3:$z=b.pH(w,c,z,e,y);if(C()){break _;}y=$z;if(y){w=a.F;y=d-1|0;$p=2;continue _;}if(a.dQ){w=a.F;y=d+1|0;$p=5;continue _;}w=a.F;y
=d+1|0;z=1;$p=6;continue _;case 4:$z=b.uj(w,c,d,e,y);if(C()){break _;}y=$z;HI(a,b,bb,bc,bd,y);j=1;if(a.dQ){w=a.F;y=d+1|0;$p=5;continue _;}w=a.F;y=d+1|0;z=1;$p=6;continue _;case 5:$z=b.Cy(w,c,y,e);if(C()){break _;}ba=$z;if(b.cF!==1.0&&!b.b_.nE())ba=x;if(Bgw.data[b.b]>0)ba=1.0;Cq(i,l*ba,p*ba,t*ba);bb=c;bc=d;bd=e;w=a.F;y=1;$p=9;continue _;case 6:$z=b.pH(w,c,y,e,z);if(C()){break _;}y=$z;if(y){w=a.F;y=d+1|0;$p=5;continue _;}if(a.dQ){w=a.F;y=e-1|0;$p=7;continue _;}w=a.F;y=e-1|0;z=2;$p=8;continue _;case 7:$z=b.Cy(w,
c,d,y);if(C()){break _;}ba=$z;if(b.c_>0.0)ba=x;if(Bgw.data[b.b]>0)ba=1.0;Cq(i,m*ba,q*ba,u*ba);bb=c;bc=d;bd=e;w=a.F;y=2;$p=12;continue _;case 8:$z=b.pH(w,c,d,y,z);if(C()){break _;}y=$z;if(y){w=a.F;y=e-1|0;$p=7;continue _;}if(a.dQ){w=a.F;y=e+1|0;$p=10;continue _;}w=a.F;y=e+1|0;z=3;$p=11;continue _;case 9:$z=b.uj(w,c,d,e,y);if(C()){break _;}y=$z;JJ(a,b,bb,bc,bd,y);j=1;if(a.dQ){w=a.F;y=e-1|0;$p=7;continue _;}w=a.F;y=e-1|0;z=2;$p=8;continue _;case 10:$z=b.Cy(w,c,d,y);if(C()){break _;}ba=$z;if(b.dd<1.0)ba=x;if(Bgw.data[b.b]
>0)ba=1.0;Cq(i,m*ba,q*ba,u*ba);bb=c;bc=d;bd=e;w=a.F;y=3;$p=15;continue _;case 11:$z=b.pH(w,c,d,y,z);if(C()){break _;}y=$z;if(y){w=a.F;y=e+1|0;$p=10;continue _;}if(a.dQ){w=a.F;y=c-1|0;$p=13;continue _;}w=a.F;y=c-1|0;z=4;$p=14;continue _;case 12:$z=b.uj(w,c,d,e,y);if(C()){break _;}y=$z;JY(a,b,bb,bc,bd,y);j=1;if(a.dQ){w=a.F;y=e+1|0;$p=10;continue _;}w=a.F;y=e+1|0;z=3;$p=11;continue _;case 13:$z=b.Cy(w,y,d,e);if(C()){break _;}ba=$z;if(b.da>0.0)ba=x;if(Bgw.data[b.b]>0)ba=1.0;Cq(i,n*ba,r*ba,v*ba);bb=c;bc=d;bd=e;w
=a.F;y=4;$p=18;continue _;case 14:$z=b.pH(w,y,d,e,z);if(C()){break _;}y=$z;if(y){w=a.F;y=c-1|0;$p=13;continue _;}if(a.dQ){w=a.F;y=c+1|0;$p=16;continue _;}w=a.F;y=c+1|0;z=5;$p=17;continue _;case 15:$z=b.uj(w,c,d,e,y);if(C()){break _;}y=$z;Ka(a,b,bb,bc,bd,y);j=1;if(a.dQ){w=a.F;y=c-1|0;$p=13;continue _;}w=a.F;y=c-1|0;z=4;$p=14;continue _;case 16:$z=b.Cy(w,y,d,e);if(C()){break _;}ba=$z;if(b.dc>=1.0)x=ba;if(Bgw.data[b.b]>0)x=1.0;Cq(i,n*x,r*x,v*x);bb=c;bc=d;bd=e;i=a.F;y=5;$p=19;continue _;case 17:$z=b.pH(w,y,d,e,
z);if(C()){break _;}y=$z;if(!y)return j;w=a.F;y=c+1|0;$p=16;continue _;case 18:$z=b.uj(w,c,d,e,y);if(C()){break _;}y=$z;JS(a,b,bb,bc,bd,y);j=1;if(a.dQ){w=a.F;y=c+1|0;$p=16;continue _;}w=a.F;y=c+1|0;z=5;$p=17;continue _;case 19:$z=b.uj(i,c,d,e,y);if(C()){break _;}c=$z;KS(a,b,bb,bc,bd,c);j=1;return j;default:E$();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,$p);}
function AFK(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=0;Bn(b,0.375,0.0,0.375,0.625,1.0,0.625);$p=1;case 1:ABX(a,b,c,d,e);if(C()){break _;}g=0;h=0;i=a.F;j=c-1|0;$p=2;case 2:$z=i.ej(j,d,e);if(C()){break _;}j=$z;if(j!=b.b){i=a.F;j=c+1|0;$p=3;continue _;}g=1;i=a.F;j=e-1|0;$p=4;continue _;case 3:$z=i.ej(j,d,e);if(C()){break _;}j
=$z;if(j==b.b)g=1;i=a.F;j=e-1|0;$p=4;case 4:$z=i.ej(c,d,j);if(C()){break _;}j=$z;if(j!=b.b){i=a.F;j=e+1|0;$p=5;continue _;}h=1;if(!g&&!h)g=1;k=0.4375;l=0.5625;m=0.75;n=0.9375;if(g){Bn(b,0.0,m,k,1.0,n,l);$p=6;continue _;}if(h){Bn(b,k,m,0.0,l,n,1.0);$p=7;continue _;}m=0.375;n=0.5625;if(g){Bn(b,0.0,m,k,1.0,n,l);$p=8;continue _;}if(!h){Bn(b,0.0,0.0,0.0,1.0,1.0,1.0);return f;}Bn(b,k,m,0.0,l,n,1.0);$p=9;continue _;case 5:$z=i.ej(c,d,j);if(C()){break _;}j=$z;if(j==b.b)h=1;if(!g&&!h)g=1;k=0.4375;l=0.5625;m=0.75;n=0.9375;if
(g){Bn(b,0.0,m,k,1.0,n,l);$p=6;continue _;}if(h){Bn(b,k,m,0.0,l,n,1.0);$p=7;continue _;}m=0.375;n=0.5625;if(g){Bn(b,0.0,m,k,1.0,n,l);$p=8;continue _;}if(!h){Bn(b,0.0,0.0,0.0,1.0,1.0,1.0);return f;}Bn(b,k,m,0.0,l,n,1.0);$p=9;continue _;case 6:ABX(a,b,c,d,e);if(C()){break _;}if(h){Bn(b,k,m,0.0,l,n,1.0);$p=7;continue _;}m=0.375;n=0.5625;if(g){Bn(b,0.0,m,k,1.0,n,l);$p=8;continue _;}if(!h){Bn(b,0.0,0.0,0.0,1.0,1.0,1.0);return f;}Bn(b,k,m,0.0,l,n,1.0);$p=9;continue _;case 7:ABX(a,b,c,d,e);if(C()){break _;}m=0.375;n
=0.5625;if(g){Bn(b,0.0,m,k,1.0,n,l);$p=8;continue _;}if(!h){Bn(b,0.0,0.0,0.0,1.0,1.0,1.0);return f;}Bn(b,k,m,0.0,l,n,1.0);$p=9;continue _;case 8:ABX(a,b,c,d,e);if(C()){break _;}if(!h){Bn(b,0.0,0.0,0.0,1.0,1.0,1.0);return f;}Bn(b,k,m,0.0,l,n,1.0);$p=9;case 9:ABX(a,b,c,d,e);if(C()){break _;}Bn(b,0.0,0.0,0.0,1.0,1.0,1.0);return f;default:E$();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function AIw(a,b,c,d,e){var f,g,h,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=0;g=a.F;$p=1;case 1:$z=g.eI(c,d,e);if(C()){break _;}h=$z;if(!h){Bn(b,0.0,0.0,0.0,0.5,0.5,1.0);$p=2;continue _;}if(h==1){Bn(b,0.0,0.0,0.0,0.5,1.0,1.0);$p=4;continue _;}if(h==2){Bn(b,0.0,0.0,0.0,1.0,0.5,0.5);$p=6;continue _;}if(h!=3){Bn(b,0.0,0.0,0.0,1.0,1.0,1.0);return f;}Bn(b,0.0,0.0,0.0,1.0,1.0,0.5);$p=8;continue _;case 2:ABX(a,
b,c,d,e);if(C()){break _;}Bn(b,0.5,0.0,0.0,1.0,1.0,1.0);$p=3;case 3:ABX(a,b,c,d,e);if(C()){break _;}Bn(b,0.0,0.0,0.0,1.0,1.0,1.0);return f;case 4:ABX(a,b,c,d,e);if(C()){break _;}Bn(b,0.5,0.0,0.0,1.0,0.5,1.0);$p=5;case 5:ABX(a,b,c,d,e);if(C()){break _;}Bn(b,0.0,0.0,0.0,1.0,1.0,1.0);return f;case 6:ABX(a,b,c,d,e);if(C()){break _;}Bn(b,0.0,0.0,0.5,1.0,1.0,1.0);$p=7;case 7:ABX(a,b,c,d,e);if(C()){break _;}Bn(b,0.0,0.0,0.0,1.0,1.0,1.0);return f;case 8:ABX(a,b,c,d,e);if(C()){break _;}Bn(b,0.0,0.0,0.5,1.0,0.5,1.0);$p
=9;case 9:ABX(a,b,c,d,e);if(C()){break _;}Bn(b,0.0,0.0,0.0,1.0,1.0,1.0);return f;default:E$();}}C4().s(a,b,c,d,e,f,g,h,$p);}
function AKD(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:BA();f=BeE;g=b;h=0.5;i=1.0;j=0.800000011920929;k=0.6000000238418579;l=a.F;$p=1;case 1:$z=b.Cy(l,c,d,e);if(C()){break _;}m=$z;l=a.F;n=d-1|0;$p=2;case 2:$z=b.Cy(l,c,n,e);if(C()){break _;}o=$z;if(g.cM>0.0)o=m;if(Bgw.data[b.b]
>0)o=1.0;h=h*o;Cq(f,h,h,h);p=c;q=d;r=e;l=a.F;n=0;$p=3;case 3:$z=b.uj(l,c,d,e,n);if(C()){break _;}n=$z;HI(a,b,p,q,r,n);l=a.F;n=d+1|0;$p=4;case 4:$z=b.Cy(l,c,n,e);if(C()){break _;}h=$z;if(g.cF<1.0)h=m;if(Bgw.data[b.b]>0)h=1.0;i=i*h;Cq(f,i,i,i);l=a.F;n=1;$p=5;case 5:$z=b.uj(l,c,d,e,n);if(C()){break _;}n=$z;JJ(a,b,p,q,r,n);l=a.F;n=e-1|0;$p=6;case 6:$z=b.Cy(l,c,d,n);if(C()){break _;}i=$z;if(g.c_>0.0)i=m;if(Bgw.data[b.b]>0)i=1.0;i=j*i;Cq(f,i,i,i);l=a.F;n=2;$p=7;case 7:$z=b.uj(l,c,d,e,n);if(C()){break _;}s=$z;if(s
<0){a.fq=1;s= -s;}JY(a,b,p,q,r,s);a.fq=0;l=a.F;n=e+1|0;$p=8;case 8:$z=b.Cy(l,c,d,n);if(C()){break _;}i=$z;if(g.dd<1.0)i=m;if(Bgw.data[b.b]>0)i=1.0;i=j*i;Cq(f,i,i,i);l=a.F;n=3;$p=9;case 9:$z=b.uj(l,c,d,e,n);if(C()){break _;}s=$z;if(s<0){a.fq=1;s= -s;}Ka(a,b,p,q,r,s);a.fq=0;l=a.F;n=c-1|0;$p=10;case 10:$z=b.Cy(l,n,d,e);if(C()){break _;}i=$z;if(g.da>0.0)i=m;if(Bgw.data[b.b]>0)i=1.0;i=k*i;Cq(f,i,i,i);l=a.F;n=4;$p=11;case 11:$z=b.uj(l,c,d,e,n);if(C()){break _;}s=$z;if(s<0){a.fq=1;s= -s;}JS(a,b,p,q,r,s);a.fq=0;l=a.F;n
=c+1|0;$p=12;case 12:$z=b.Cy(l,n,d,e);if(C()){break _;}i=$z;if(g.dc>=1.0)m=i;if(Bgw.data[b.b]>0)m=1.0;i=k*m;Cq(f,i,i,i);l=a.F;n=5;$p=13;case 13:$z=b.uj(l,c,d,e,n);if(C()){break _;}c=$z;if(c<0){a.fq=1;c= -c;}KS(a,b,p,q,r,c);a.fq=0;return 1;default:E$();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,$p);}
function HI(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t;BA();g=BeE;if(a.cz>=0)f=a.cz;h=(f&15)<<4;i=f&240;j=h;k=(j+b.da*16.0)/256.0;l=(j+b.dc*16.0-0.01)/256.0;j=i;m=(j+b.c_*16.0)/256.0;n=(j+b.dd*16.0-0.01)/256.0;if(!(b.da>=0.0&&b.dc<=1.0)){o=h;k=(o+0.0)/256.0;l=(o+15.989999771118164)/256.0;}if(!(b.c_>=0.0&&b.dd<=1.0)){p=i;m=(p+0.0)/256.0;n=(p+15.989999771118164)/256.0;}j=c+b.da;q=c+b.dc;r=d+b.cM;s=e+b.c_;t=e+b.dd;G(g,j,r,t,k,n);G(g,j,r,s,k,m);G(g,q,r,s,l,m);G(g,q,r,t,l,n);}
function JJ(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t;BA();g=BeE;if(a.cz>=0)f=a.cz;h=(f&15)<<4;i=f&240;j=h;k=(j+b.da*16.0)/256.0;l=(j+b.dc*16.0-0.01)/256.0;j=i;m=(j+b.c_*16.0)/256.0;n=(j+b.dd*16.0-0.01)/256.0;if(!(b.da>=0.0&&b.dc<=1.0)){o=h;k=(o+0.0)/256.0;l=(o+15.989999771118164)/256.0;}if(!(b.c_>=0.0&&b.dd<=1.0)){p=i;m=(p+0.0)/256.0;n=(p+15.989999771118164)/256.0;}j=c+b.da;q=c+b.dc;r=d+b.cF;s=e+b.c_;t=e+b.dd;G(g,q,r,t,l,n);G(g,q,r,s,l,m);G(g,j,r,s,k,m);G(g,j,r,t,k,n);}
function JY(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t;BA();g=BeE;if(a.cz>=0)f=a.cz;h=(f&15)<<4;i=f&240;j=h;k=(j+b.da*16.0)/256.0;j=(j+b.dc*16.0-0.01)/256.0;l=i;m=(l+b.cM*16.0)/256.0;n=(l+b.cF*16.0-0.01)/256.0;if(!a.fq){l=j;j=k;k=l;}if(!(b.da>=0.0&&b.dc<=1.0)){o=h;j=(o+0.0)/256.0;k=(o+15.989999771118164)/256.0;}if(!(b.cM>=0.0&&b.cF<=1.0)){p=i;m=(p+0.0)/256.0;n=(p+15.989999771118164)/256.0;}l=c+b.da;q=c+b.dc;r=d+b.cM;s=d+b.cF;t=e+b.c_;G(g,l,s,t,k,m);G(g,q,s,t,j,m);G(g,q,r,t,j,n);G(g,l,r,t,k,n);}
function Ka(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t;BA();g=BeE;if(a.cz>=0)f=a.cz;h=(f&15)<<4;i=f&240;j=h;k=(j+b.da*16.0)/256.0;j=(j+b.dc*16.0-0.01)/256.0;l=i;m=(l+b.cM*16.0)/256.0;n=(l+b.cF*16.0-0.01)/256.0;if(!a.fq){l=j;j=k;k=l;}if(!(b.da>=0.0&&b.dc<=1.0)){o=h;j=(o+0.0)/256.0;k=(o+15.989999771118164)/256.0;}if(!(b.cM>=0.0&&b.cF<=1.0)){p=i;m=(p+0.0)/256.0;n=(p+15.989999771118164)/256.0;}l=c+b.da;q=c+b.dc;r=d+b.cM;s=d+b.cF;t=e+b.dd;G(g,l,s,t,j,m);G(g,l,r,t,j,n);G(g,q,r,t,k,n);G(g,q,s,t,k,m);}
function JS(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t;BA();g=BeE;if(a.cz>=0)f=a.cz;h=(f&15)<<4;i=f&240;j=h;k=(j+b.c_*16.0)/256.0;l=(j+b.dd*16.0-0.01)/256.0;j=i;m=(j+b.cM*16.0)/256.0;n=(j+b.cF*16.0-0.01)/256.0;if(!a.fq){j=l;l=k;k=j;}if(!(b.c_>=0.0&&b.dd<=1.0)){o=h;l=(o+0.0)/256.0;k=(o+15.989999771118164)/256.0;}if(!(b.cM>=0.0&&b.cF<=1.0)){p=i;m=(p+0.0)/256.0;n=(p+15.989999771118164)/256.0;}j=c+b.da;q=d+b.cM;r=d+b.cF;s=e+b.c_;t=e+b.dd;G(g,j,r,t,k,m);G(g,j,r,s,l,m);G(g,j,q,s,l,n);G(g,j,q,t,k,n);}
function KS(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t;BA();g=BeE;if(a.cz>=0)f=a.cz;h=(f&15)<<4;i=f&240;j=h;k=(j+b.c_*16.0)/256.0;l=(j+b.dd*16.0-0.01)/256.0;j=i;m=(j+b.cM*16.0)/256.0;n=(j+b.cF*16.0-0.01)/256.0;if(!a.fq){j=l;l=k;k=j;}if(!(b.c_>=0.0&&b.dd<=1.0)){o=h;l=(o+0.0)/256.0;k=(o+15.989999771118164)/256.0;}if(!(b.cM>=0.0&&b.cF<=1.0)){p=i;m=(p+0.0)/256.0;n=(p+15.989999771118164)/256.0;}j=c+b.dc;q=d+b.cM;r=d+b.cF;s=e+b.c_;t=e+b.dd;G(g,j,q,t,l,n);G(g,j,q,s,k,n);G(g,j,r,s,k,m);G(g,j,r,t,l,m);}
function GW(a,b){var c,d;a:{BA();c=BeE;d=b.em();if(d){if(d==1){Bz(c);Cj(0.0,(-1.0),0.0);Ut(a,b,(-1),(-0.5),(-0.5),(-0.5));Bs(c);}else if(d==6){Bz(c);Cj(0.0,(-1.0),0.0);OQ(a,b,(-1),(-0.5),(-0.5),(-0.5));Bs(c);}else{if(d!=2){if(d==3)break a;if(d!=5)break a;else break a;}Bz(c);Cj(0.0,(-1.0),0.0);GH(a,b,(-0.5),(-0.5),(-0.5),0.0,0.0);Bs(c);}}else{Bw((-0.5),(-0.5),(-0.5));Bz(c);Cj(0.0,(-1.0),0.0);HI(a,b,0.0,0.0,0.0,b.ci(0));Bs(c);Bz(c);Cj(0.0,1.0,0.0);JJ(a,b,0.0,0.0,0.0,b.ci(1));Bs(c);Bz(c);Cj(0.0,0.0,(-1.0));JY(a,
b,0.0,0.0,0.0,b.ci(2));Bs(c);Bz(c);Cj(0.0,0.0,1.0);Ka(a,b,0.0,0.0,0.0,b.ci(3));Bs(c);Bz(c);Cj((-1.0),0.0,0.0);JS(a,b,0.0,0.0,0.0,b.ci(4));Bs(c);Bz(c);Cj(1.0,0.0,0.0);KS(a,b,0.0,0.0,0.0,b.ci(5));Bs(c);Bw(0.5,0.5,0.5);}}}
function QL(){var a=this;D.call(a);a.jj=null;a.hn=null;a.fZ=0;a.fY=0;a.pF=0.0;a.m4=0.0;a.pE=0.0;a.b1=0.0;a.bX=0.0;a.bU=0.0;a.wq=0;a.lV=0;a.lB=0;a.iS=0;a.BY=0;}
function BK(a,b){var c=new QL();A9d(c,a,b);return c;}
function A9d(a,b,c){a.wq=0;a.lV=0;a.lB=0;a.iS=1;a.BY=0;a.fZ=b;a.fY=c;}
function BG(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba;a.jj=J(EP,8);a.hn=J(Fy,6);i=b+e;j=c+f;k=d+g;l=b-h;m=c-h;n=d-h;d=i+h;j=j+h;h=k+h;if(!a.lB){b=l;l=d;d=b;}a:{o=G3(d,m,n,0.0,0.0);p=G3(l,m,n,0.0,8.0);q=G3(l,j,n,8.0,8.0);r=G3(d,j,n,8.0,0.0);s=G3(d,m,h,0.0,0.0);t=G3(l,m,h,0.0,8.0);u=G3(l,j,h,8.0,8.0);v=G3(d,j,h,8.0,0.0);a.jj.data[0]=o;a.jj.data[1]=p;a.jj.data[2]=q;a.jj.data[3]=r;a.jj.data[4]=s;a.jj.data[5]=t;a.jj.data[6]=u;a.jj.data[7]=v;w=a.hn.data;x=new Fy;y=J(EP,4);z=y.data;z[0]=t;z[1]=p;z[2]
=q;z[3]=u;Hh(x,y,(a.fZ+g|0)+e|0,a.fY+g|0,((a.fZ+g|0)+e|0)+g|0,(a.fY+g|0)+f|0);w[0]=x;z=a.hn.data;x=new Fy;w=J(EP,4);y=w.data;y[0]=o;y[1]=s;y[2]=v;y[3]=r;Hh(x,w,a.fZ+0|0,a.fY+g|0,a.fZ+g|0,(a.fY+g|0)+f|0);z[1]=x;z=a.hn.data;x=new Fy;w=J(EP,4);y=w.data;y[0]=t;y[1]=s;y[2]=o;y[3]=p;Hh(x,w,a.fZ+g|0,a.fY+0|0,(a.fZ+g|0)+e|0,a.fY+g|0);z[2]=x;z=a.hn.data;x=new Fy;w=J(EP,4);y=w.data;y[0]=q;y[1]=r;y[2]=v;y[3]=u;Hh(x,w,(a.fZ+g|0)+e|0,a.fY+0|0,((a.fZ+g|0)+e|0)+e|0,a.fY+g|0);z[3]=x;w=a.hn.data;x=new Fy;y=J(EP,4);z=y.data;z[0]
=p;z[1]=o;z[2]=r;z[3]=q;Hh(x,y,a.fZ+g|0,a.fY+g|0,(a.fZ+g|0)+e|0,(a.fY+g|0)+f|0);w[4]=x;z=a.hn.data;r=new Fy;w=J(EP,4);y=w.data;y[0]=s;y[1]=t;y[2]=u;y[3]=v;Hh(r,w,((a.fZ+g|0)+e|0)+g|0,a.fY+g|0,(((a.fZ+g|0)+e|0)+g|0)+e|0,(a.fY+g|0)+f|0);z[5]=r;if(a.lB){ba=0;while(true){if(ba>=a.hn.data.length)break a;ACX(a.hn.data[ba]);ba=ba+1|0;}}}}
function BJ(a,b,c,d){a.pF=b;a.m4=c;a.pE=d;}
function Ca(a,b){var c,d;if(!a.BY&&a.iS){if(!a.wq){a.lV=I3(1);FJ(a.lV,4864);BA();c=BeE;d=0;while(d<a.hn.data.length){APE(a.hn.data[d],c,b);d=d+1|0;}Ee();a.wq=1;}if(a.b1===0.0&&a.bX===0.0&&a.bU===0.0){if(a.pF===0.0&&a.m4===0.0&&a.pE===0.0)FU(a.lV);else{Bw(a.pF*b,a.m4*b,a.pE*b);FU(a.lV);Bw( -a.pF*b, -a.m4*b, -a.pE*b);}}else{B3();Bw(a.pF*b,a.m4*b,a.pE*b);if(a.bU!==0.0)Bv(a.bU*57.2957763671875,0.0,0.0,1.0);if(a.bX!==0.0)Bv(a.bX*57.2957763671875,0.0,1.0,0.0);if(a.b1!==0.0)Bv(a.b1*57.2957763671875,1.0,0.0,0.0);FU(a.lV);BE();}}}
function E2(){D.call(this);}
function AOB(a,b){Ra(a,b,0,b.data.length);}
function ATi(a,b,c,d){var e,f,g;e=0;while(e<d){f=b.data;g=c+1|0;a.qD(f[c]);e=e+1|0;c=g;}}
function NY(a){return;}
function AP7(a){return;}
function Ij(){E2.call(this);this.jp=null;}
function Bhc(a){var b=new Ij();OR(b,a);return b;}
function OR(a,b){a.jp=b;}
function Od(a){var $$je;a:{try{AP7(a.jp);break a;}catch($$e){$$je=Y($$e);if($$je instanceof BT){}else{throw $$e;}}}}
function AA7(){var a=this;Ij.call(a);a.GJ=0;a.uK=0;a.hF=null;a.nS=null;a.AW=null;}
function AYJ(a,b){var c=new AA7();A$v(c,a,b);return c;}
function A$v(a,b,c){OR(a,b);b=new U;W(b);a.hF=b;a.nS=$rt_createCharArray(32);a.GJ=c;a.AW=A1F();}
function VW(a,b,c,d){var $$je;if(a.jp===null)a.uK=1;if(!(a.uK?0:1))return;a:{try{a.jp.jw(b,c,d);break a;}catch($$e){$$je=Y($$e);if($$je instanceof BT){}else{throw $$e;}}a.uK=1;}}
function TQ(a,b,c,d){var e,f,g,h,i;e=b.data;f=AM5(b,c,d-c|0);e=$rt_createByteArray(DE(16,CB(e.length,1024)));g=AAt(e);h=AGX(ACT(AG5(a.AW),Bf1),Bf1);while(true){i=IV(AJe(h,f,g,1));VW(a,e,0,g.bk);EA(g);if(!i)break;}while(true){i=IV(X2(h,g));VW(a,e,0,g.bk);EA(g);if(!i)break;}}
function AKF(a,b){a.nS.data[0]=b;TQ(a,a.nS,0,1);}
function Kr(a,b){I(a.hF,b);J_(a);}
function ABP(a,b){DQ(Bf(a.hF,b),10);J_(a);}
function Cg(a,b){DQ(I(a.hF,b),10);J_(a);}
function ACl(a,b){DQ(FO(a.hF,b),10);J_(a);}
function APD(a){AKF(a,10);}
function J_(a){var b;b=a.hF.bY<=a.nS.data.length?a.nS:$rt_createCharArray(a.hF.bY);AAB(a.hF,0,a.hF.bY,b,0);TQ(a,b,0,a.hF.bY);ANh(a.hF,0);}
function Xg(){E2.call(this);}
function Bhd(){var a=new Xg();A3q(a);return a;}
function A3q(a){return;}
function AYh(a,b){$rt_putStdout(b);}
function AFc(){Cc.call(this);this.Fu=null;}
function ALq(a){var b=new AFc();A03(b,a);return b;}
function A03(a,b){P(a);a.Fu=b;}
function MT(){var a=this;D.call(a);a.cf=null;a.B=0;a.N=0;a.G=Long_ZERO;a.uW=null;a.pO=0;a.ib=0;a.ns=Long_ZERO;a.b9=null;a.hZ=null;a.f8=null;}
function Bhe(){var a=new MT();OT(a);return a;}
function OT(a){a.f8=A9N();}
function AAJ(a,b,c,d){a.uW=b;a.pO=c;a.ib=d;}
function AJ9(a,b,c,d,e){var f;if(d<=0&&e&&a.cf!==null)return;if(a.N>0&&e){f=$rt_createByteArray(a.N+d|0);Ds(a.cf,a.B,f,0,a.N);Ds(b,c,f,a.N,d);a.cf=f;a.B=0;a.N=a.N+d|0;}else{a.cf=b;a.B=c;a.N=d;}}
function Up(){MT.call(this);this.o1=0;}
function Bhf(){var a=new Up();A28(a);return a;}
function A28(a){OT(a);a.o1=0;AAW(a);}
function AAW(a){return ACK(a,15);}
function ACK(a,b){return R8(a,b,0);}
function R8(a,b,c){var d;a.o1=0;d=new LI;d.rT=Long_fromInt(-1);d.iI=(-1);d.xK=$rt_createByteArray(4);d.cJ=null;d.fV=null;d.E=a;a.hZ=d;d=a.hZ;if(c)b= -b;return XD(d,b);}
function AF5(a,b){var c;if(a.hZ===null)return (-2);c=AGE(a.hZ,b);if(c==1)a.o1=1;return c;}
function AG_(a){a.o1=1;if(a.hZ===null)return (-2);return Sk(a.hZ);}
function Yk(a){return a.hZ.bP!=12?0:1;}
function Is(){var a=this;D.call(a);a.Cp=null;a.oP=0.0;a.pN=0.0;}
function Ik(a,b,c){var d=new Is();O9(d,a,b,c);return d;}
function O9(a,b,c,d){a.Cp=b;a.oP=c;a.pN=d;}
function AMO(a){return a.oP;}
function Yi(a){return a.pN;}
function Ki(a){var b;b=new U;W(b);return V(I(I(b,B(252)),a.Cp));}
function AHq(){Is.call(this);}
function A_W(a,b,c){var d=new AHq();AZr(d,a,b,c);return d;}
function AZr(a,b,c,d){O9(a,b,c,d);}
function ACt(){Is.call(this);}
function Bb5(a,b,c){var d=new ACt();A7H(d,a,b,c);return d;}
function A7H(a,b,c,d){O9(a,b,c,d);}
function LP(){O.call(this);}
function Ba_(a,b){var c=new LP();AI8(c,a,b);return c;}
function AI8(a,b,c){C9(a,b,c,Bg4);}
function A8E(a,b,c){L();return BeS.b;}
function Z7(){O.call(this);}
function BbC(a){var b=new Z7();AY2(b,a);return b;}
function AY2(a,b){D1(a,b,Bhg);a.ba=3;Fe(a,1);}
function A7m(a,b){return b==1?0:b?3:2;}
function ADr(a,b,c,d,e,f){var g,h,i,j,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=d+1|0;$p=1;case 1:$z=XB(b,c,g,e);if(C()){break _;}h=$z;if(h>=4){$p=2;continue _;}$p=3;continue _;case 2:$z=XB(b,c,g,e);if(C()){break _;}g=$z;if(g<9)return;h=(c+E(f,3)|0)-1|0;g=(d+E(f,5)|0)-3|0;i=(e+E(f,3)|0)-1|0;$p=4;continue _;case 3:$z=AB3(b,c,g,e);if(C()){break _;}j=$z;if(!j.sk()){$p=2;continue _;}if(E(f,
4))return;L();h=BeL.b;$p=6;continue _;case 4:$z=ACy(b,h,g,i);if(C()){break _;}c=$z;L();if(c!=BeL.b)return;c=g+1|0;$p=5;case 5:$z=XB(b,h,c,i);if(C()){break _;}d=$z;if(d<4)return;$p=7;continue _;case 6:APy(b,c,d,e,h);if(C()){break _;}return;case 7:$z=AB3(b,h,c,i);if(C()){break _;}f=$z;if(f.sk())return;c=BeK.b;$p=8;case 8:APy(b,h,g,i,c);if(C()){break _;}return;default:E$();}}C4().s(a,b,c,d,e,f,g,h,i,j,$p);}
function AZ8(a,b,c){L();return BeL.dX(0,c);}
function AHU(){O.call(this);}
function A_1(a,b){var c=new AHU();AXA(c,a,b);return c;}
function AXA(a,b,c){C9(a,b,c,Bhg);}
function B8(){D.call(this);}
var Bf4=null;var Bhg=null;var Bg5=null;var Bg4=null;var Bhh=null;var BfJ=null;var BfK=null;var Bhi=null;var Bhj=null;var Bhk=null;var Bg7=null;var Bhl=null;var Bhm=null;var Bhn=null;var Bg6=null;var Bho=null;var Bhp=null;function Bhq(){var a=new B8();AQn(a);return a;}
function AQn(a){return;}
function A8i(a){return 0;}
function A0X(a){return 1;}
function A7M(a){return 1;}
function A5p(a){return 1;}
function AP5(){Bf4=new Om;Bhg=new B8;Bg5=new B8;Bg4=new B8;Bhh=new B8;BfJ=new L0;BfK=new L0;Bhi=new B8;Bhj=new N9;Bhk=new B8;Bg7=new B8;Bhl=new Om;Bhm=new B8;Bhn=new N9;Bg6=new B8;Bho=new B8;Bhp=new B8;}
function F4(){O.call(this);}
function A3i(a,b){var c=new F4();Lw(c,a,b);return c;}
function Lw(a,b,c){D1(a,b,Bhj);a.ba=c;Fe(a,1);Bn(a,0.30000001192092896,0.0,0.30000001192092896,0.699999988079071,0.6000000238418579,0.699999988079071);}
function ALW(a,b,c,d,e){var $p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=d-1|0;$p=1;case 1:$z=ACy(b,c,d,e);if(C()){break _;}c=$z;return a.rp(c);default:E$();}}C4().s(a,b,c,d,e,$p);}
function AYl(a,b){L();return b!=BeK.b&&b!=BeL.b&&b!=BgW.b?0:1;}
function AIG(a,b,c,d,e,f){var $p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AJq(a,b,c,d,e);if(C()){break _;}return;default:E$();}}C4().s(a,b,c,d,e,f,$p);}
function AEa(a,b,c,d,e,f){var $p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AJq(a,b,c,d,e);if(C()){break _;}return;default:E$();}}C4().s(a,b,c,d,e,f,$p);}
function AJq(a,b,c,d,e){var f,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=a.Hb(b,c,d,e);if(C()){break _;}f=$z;if(f)return;$p=2;case 2:$z=AEL(b,c,d,e);if(C()){break _;}f=$z;$p=3;case 3:Yj(a,b,c,d,e,f);if(C()){break _;}f=0;$p=4;case 4:APy(b,c,d,e,f);if(C()){break _;}return;default:E$();}}C4().s(a,b,c,d,e,f,$p);}
function AN8(a,b,c,d,e){var f,g,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=XB(b,c,d,e);if(C()){break _;}f=$z;if(f<8){$p=3;continue _;}d=d-1|0;$p=2;case 2:$z=ACy(b,c,d,e);if(C()){break _;}c=$z;return !a.rp(c)?0:1;case 3:$z=AGf(b,c,d,e);if(C()){break _;}g=$z;if(!g)return 0;d=d-1|0;$p=2;continue _;default:E$();}}C4().s(a,b,c,d,e,f,g,$p);}
function AGl(a,b,c,d,e){return null;}
function A6i(a){return 0;}
function AT2(a){return 0;}
function A7r(a){return 1;}
function AMZ(){F4.call(this);}
function Bcn(a,b){var c=new AMZ();A9z(c,a,b);return c;}
function A9z(a,b,c){Lw(a,b,c);Bn(a,0.09999999403953552,0.0,0.09999999403953552,0.8999999761581421,0.800000011920929,0.8999999761581421);}
function AEj(a,b,c,d,e,f){var g,h,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AJq(a,b,c,d,e);if(C()){break _;}g=d+1|0;$p=2;case 2:$z=XB(b,c,g,e);if(C()){break _;}g=$z;if(g>=9&&!E(f,5)){$p=3;continue _;}return;case 3:$z=AEL(b,c,d,e);if(C()){break _;}g=$z;if(g>=15){g=0;$p=4;continue _;}g=g+1|0;$p=6;continue _;case 4:ALt(b,c,d,e,g);if(C()){break _;}h=new Ri;$p=5;case 5:$z=AEN(h,b,f,c,d,e);if(C()){break _;}g
=$z;if(g)return;g=a.b;$p=7;continue _;case 6:AKw(b,c,d,e,g);if(C()){break _;}return;case 7:ALt(b,c,d,e,g);if(C()){break _;}return;default:E$();}}C4().s(a,b,c,d,e,f,g,h,$p);}
function HT(){O.call(this);this.qQ=0;}
function Bhr(a,b){var c=new HT();P6(c,a,b);return c;}
function P6(a,b,c){C9(a,b,((c!==BfK?12:14)*16|0)+13|0,c);a.qQ=1;if(c===BfK)a.qQ=2;Bn(a,0.0,0.0,0.0,1.0,1.0,1.0);Fe(a,1);}
function Jy(b){if(b>=8)b=0;return (b+1|0)/9.0;}
function ATc(a,b){return b&&b!=1?a.ba+1|0:a.ba;}
function AFh(a,b,c,d,e){var f,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AB3(b,c,d,e);if(C()){break _;}f=$z;if(f!==a.b_)return (-1);$p=2;case 2:$z=AEL(b,c,d,e);if(C()){break _;}c=$z;return c;default:E$();}}C4().s(a,b,c,d,e,f,$p);}
function AEf(a,b,c,d,e){var f,g,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=b.oK(c,d,e);if(C()){break _;}f=$z;if(f!==a.b_)return (-1);$p=2;case 2:$z=b.eI(c,d,e);if(C()){break _;}g=$z;if(g>=8)g=0;return g;default:E$();}}C4().s(a,b,c,d,e,f,g,$p);}
function A$5(a){return 0;}
function A$n(a){return 0;}
function A8B(a,b,c){return c&&!b?1:0;}
function ARy(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=b.oK(c,d,e);if(C()){break _;}g=$z;if(g===a.b_)c=0;else{if(f!=1){$p=2;continue _;}c=1;}return c;case 2:$z=AGv(a,b,c,d,e,f);if(C()){break _;}c=$z;return c;default:E$();}}C4().s(a,b,c,d,e,f,g,$p);}
function Yh(a,b,c,d,e){return null;}
function A7U(a){return 4;}
function A3c(a,b,c){return 0;}
function A58(a,b){return 0;}
function AIN(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=BY(0.0,0.0,0.0);$p=1;case 1:$z=AEf(a,b,c,d,e);if(C()){break _;}g=$z;h=0;i=c-1|0;j=e-1|0;k=d-1|0;l=g-8|0;m=d-d|0;if(h>=4){$p=2;continue _;}n=!h?i:c;o=h==1?j:e;if(h==2)n=n+1|0;if(h==3)o=o+1|0;$p=7;continue _;case 2:$z=b.eI(c,d,e);if
(C()){break _;}n=$z;if(n<8)return CD(f);k=0;n=2;$p=3;case 3:$z=ARy(a,b,c,d,j,n);if(C()){break _;}n=$z;if(n)k=1;if(!k){n=e+1|0;p=3;$p=4;continue _;}k=1;if(!k){n=4;$p=5;continue _;}k=1;if(!k){n=c+1|0;p=5;$p=6;continue _;}k=1;if(!k){n=d+1|0;p=2;$p=9;continue _;}k=1;if(!k){n=d+1|0;p=e+1|0;q=3;$p=10;continue _;}k=1;if(!k){n=d+1|0;p=4;$p=11;continue _;}k=1;if(k){k=1;if(k)f=Dk(CD(f),0.0,(-6.0),0.0);return CD(f);}c=c+1|0;d=d+1|0;n=5;$p=12;continue _;case 4:$z=ARy(a,b,c,d,n,p);if(C()){break _;}n=$z;if(n)k=1;if(!k){n
=4;$p=5;continue _;}k=1;if(!k){n=c+1|0;p=5;$p=6;continue _;}k=1;if(!k){n=d+1|0;p=2;$p=9;continue _;}k=1;if(!k){n=d+1|0;p=e+1|0;q=3;$p=10;continue _;}k=1;if(!k){n=d+1|0;p=4;$p=11;continue _;}k=1;if(k){k=1;if(k)f=Dk(CD(f),0.0,(-6.0),0.0);return CD(f);}c=c+1|0;d=d+1|0;n=5;$p=12;continue _;case 5:$z=ARy(a,b,i,d,e,n);if(C()){break _;}n=$z;if(n)k=1;if(!k){n=c+1|0;p=5;$p=6;continue _;}k=1;if(!k){n=d+1|0;p=2;$p=9;continue _;}k=1;if(!k){n=d+1|0;p=e+1|0;q=3;$p=10;continue _;}k=1;if(!k){n=d+1|0;p=4;$p=11;continue _;}k
=1;if(k){k=1;if(k)f=Dk(CD(f),0.0,(-6.0),0.0);return CD(f);}c=c+1|0;d=d+1|0;n=5;$p=12;continue _;case 6:$z=ARy(a,b,n,d,e,p);if(C()){break _;}n=$z;if(n)k=1;if(!k){n=d+1|0;p=2;$p=9;continue _;}k=1;if(!k){n=d+1|0;p=e+1|0;q=3;$p=10;continue _;}k=1;if(!k){n=d+1|0;p=4;$p=11;continue _;}k=1;if(k){k=1;if(k)f=Dk(CD(f),0.0,(-6.0),0.0);return CD(f);}c=c+1|0;d=d+1|0;n=5;$p=12;continue _;case 7:$z=AEf(a,b,n,d,o);if(C()){break _;}p=$z;if(p<0){$p=8;continue _;}if(p>=0){q=p-g|0;f=Dk(f,Bj(n-c|0,q),Bj(m,q),Bj(o-e|0,q));}h=h+1
|0;if(h>=4){$p=2;continue _;}n=!h?i:c;o=h==1?j:e;if(h==2)n=n+1|0;if(h==3)o=o+1|0;continue _;case 8:$z=AEf(a,b,n,k,o);if(C()){break _;}p=$z;if(p>=0){q=p-l|0;f=Dk(f,Bj(n-c|0,q),Bj(m,q),Bj(o-e|0,q));}h=h+1|0;if(h>=4){$p=2;continue _;}n=!h?i:c;o=h==1?j:e;if(h==2)n=n+1|0;if(h==3)o=o+1|0;$p=7;continue _;case 9:$z=ARy(a,b,c,n,j,p);if(C()){break _;}n=$z;if(n)k=1;if(!k){n=d+1|0;p=e+1|0;q=3;$p=10;continue _;}k=1;if(!k){n=d+1|0;p=4;$p=11;continue _;}k=1;if(k){k=1;if(k)f=Dk(CD(f),0.0,(-6.0),0.0);return CD(f);}c=c+1|0;d
=d+1|0;n=5;$p=12;continue _;case 10:$z=ARy(a,b,c,n,p,q);if(C()){break _;}n=$z;if(n)k=1;if(!k){n=d+1|0;p=4;$p=11;continue _;}k=1;if(k){k=1;if(k)f=Dk(CD(f),0.0,(-6.0),0.0);return CD(f);}c=c+1|0;d=d+1|0;n=5;$p=12;continue _;case 11:$z=ARy(a,b,i,n,e,p);if(C()){break _;}n=$z;if(n)k=1;if(k){k=1;if(k)f=Dk(CD(f),0.0,(-6.0),0.0);return CD(f);}c=c+1|0;d=d+1|0;n=5;$p=12;case 12:$z=ARy(a,b,c,d,e,n);if(C()){break _;}c=$z;if(c)k=1;if(k)f=Dk(CD(f),0.0,(-6.0),0.0);return CD(f);default:E$();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,
m,n,o,p,q,$p);}
function ANd(a,b,c,d,e,f,g){var h,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AIN(a,b,c,d,e);if(C()){break _;}h=$z;g.x=g.x+h.x;g.z=g.z+h.z;g.w=g.w+h.w;return;default:E$();}}C4().s(a,b,c,d,e,f,g,h,$p);}
function AU6(a){return a.b_===BfJ?5:a.b_!==BfK?0:30;}
function AEx(a,b,c,d,e){var f,g,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=b.sO(c,d,e);if(C()){break _;}f=$z;d=d+1|0;$p=2;case 2:$z=b.sO(c,d,e);if(C()){break _;}g=$z;if(f>g)g=f;return g;default:E$();}}C4().s(a,b,c,d,e,f,g,$p);}
function ARa(a,b,c,d,e,f){return;}
function A$k(a){return 0;}
function YH(a,b,c,d,e,f){var g,h,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.b_===BfJ&&!E(f,64)){$p=2;continue _;}if(a.b_!==BfK)return;g=d+1|0;$p=1;case 1:$z=AB3(b,c,g,e);if(C()){break _;}h=$z;if(h!==Bf4)return;$p=3;continue _;case 2:$z=AEL(b,c,d,e);if(C()){break _;}g=$z;if(g>0&&g<8)Ex(b,c+0.5,d+0.5,e+0.5,B(253),N(f)*0.25+0.75,N(f)*1.0+0.5);if(a.b_!==BfK)return;g=d+1|0;$p=1;continue _;case 3:$z=AAE(b,
c,g,e);if(C()){break _;}g=$z;if(!g&&!E(f,100))BV(b,B(254),c+N(f),d+a.cF,e+N(f),0.0,0.0,0.0);return;default:E$();}}C4().s(a,b,c,d,e,f,g,h,$p);}
function A6c(b,c,d,e,f){var g,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:g=null;if(f===BfJ){L();g=BfR;$p=1;continue _;}if(f!==BfK)return g.x===0.0&&g.w===0.0?(-1000.0):CR(g.w,g.x)-1.5707963267948966;L();f=BfS;$p=2;continue _;case 1:$z=AIN(g,b,c,d,e);if(C()){break _;}g=$z;if(f!==BfK)return g.x===0.0&&g.w===0.0?(-1000.0):CR(g.w,g.x)-1.5707963267948966;L();f=BfS;$p=2;case 2:$z=AIN(f,b,c,d,e);if(C()){break _;}g=$z;return g.x===
0.0&&g.w===0.0?(-1000.0):CR(g.w,g.x)-1.5707963267948966;default:E$();}}C4().s(b,c,d,e,f,g,$p);}
function ARS(a,b,c,d,e){var $p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:APa(a,b,c,d,e);if(C()){break _;}return;default:E$();}}C4().s(a,b,c,d,e,$p);}
function ALg(a,b,c,d,e,f){var $p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:APa(a,b,c,d,e);if(C()){break _;}return;default:E$();}}C4().s(a,b,c,d,e,f,$p);}
function APa(a,b,c,d,e){var f,g,h,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=ACy(b,c,d,e);if(C()){break _;}f=$z;if(f==a.b&&a.b_===BfK){f=0;g=e-1|0;$p=2;continue _;}return;case 2:$z=AB3(b,c,d,g);if(C()){break _;}h=$z;if(h===BfJ)f=1;if(!f){g=e+1|0;$p=3;continue _;}f=1;if(!f){g=c-1|0;$p=4;continue _;}f=1;if(!f){g=c+1|0;$p=5;continue _;}f=1;if(!f){g=d+1|0;$p=6;continue _;}f=1;if(!f)return;$p=7;continue _;case 3:$z
=AB3(b,c,d,g);if(C()){break _;}h=$z;if(h===BfJ)f=1;if(!f){g=c-1|0;$p=4;continue _;}f=1;if(!f){g=c+1|0;$p=5;continue _;}f=1;if(!f){g=d+1|0;$p=6;continue _;}f=1;if(!f)return;$p=7;continue _;case 4:$z=AB3(b,g,d,e);if(C()){break _;}h=$z;if(h===BfJ)f=1;if(!f){g=c+1|0;$p=5;continue _;}f=1;if(!f){g=d+1|0;$p=6;continue _;}f=1;if(!f)return;$p=7;continue _;case 5:$z=AB3(b,g,d,e);if(C()){break _;}h=$z;if(h===BfJ)f=1;if(!f){g=d+1|0;$p=6;continue _;}f=1;if(!f)return;$p=7;continue _;case 6:$z=AB3(b,c,g,e);if(C()){break _;}h
=$z;if(h===BfJ)f=1;if(!f)return;$p=7;case 7:$z=AEL(b,c,d,e);if(C()){break _;}g=$z;if(!g){L();f=Bfe.b;$p=8;continue _;}if(g>4){JU(a,b,c,d,e);return;}L();f=BeS.b;$p=9;continue _;case 8:APy(b,c,d,e,f);if(C()){break _;}JU(a,b,c,d,e);return;case 9:APy(b,c,d,e,f);if(C()){break _;}JU(a,b,c,d,e);return;default:E$();}}C4().s(a,b,c,d,e,f,g,h,$p);}
function JU(a,b,c,d,e){var f,g,h,i;Ex(b,c+0.5,d+0.5,e+0.5,B(215),0.5,2.5999999046325684+(N(b.q)-N(b.q))*0.800000011920929);f=0;g=c;h=d+1.2;i=e;while(f<8){BV(b,B(255),g+BO(),h,i+BO(),0.0,0.0,0.0);f=f+1|0;}}
function AEi(){var a=this;HT.call(a);a.ml=0;a.hg=null;a.cT=null;}
function AUl(a,b){var c=new AEi();AY9(c,a,b);return c;}
function AY9(a,b,c){P6(a,b,c);a.ml=0;a.hg=$rt_createBooleanArray(4);a.cT=$rt_createIntArray(4);}
function AHc(a,b,c,d,e){var f,g,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AEL(b,c,d,e);if(C()){break _;}f=$z;g=a.b+1|0;$p=2;case 2:AJn(b,c,d,e,g,f);if(C()){break _;}Jn(b,c,d,e,c,d,e);return;default:E$();}}C4().s(a,b,c,d,e,f,g,$p);}
function AOR(a,b,c,d,e,f){var g,h,i,j,k,l,m,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AFh(a,b,c,d,e);if(C()){break _;}g=$z;h=1;if(g<=0){$p=2;continue _;}i=(-100);a.ml=0;j=c-1|0;$p=3;continue _;case 2:AHc(a,b,c,d,e);if(C()){break _;}j=d-1|0;$p=7;continue _;case 3:$z=AOO(a,b,j,d,e,i);if(C()){break _;}j=$z;k=c+1|0;$p=4;case 4:$z=AOO(a,b,k,d,e,j);if
(C()){break _;}j=$z;k=e-1|0;$p=5;case 5:$z=AOO(a,b,c,d,k,j);if(C()){break _;}j=$z;k=e+1|0;$p=6;case 6:$z=AOO(a,b,c,d,k,j);if(C()){break _;}j=$z;k=j+a.qQ|0;if(!(k<8&&j>=0))k=(-1);j=d+1|0;$p=8;continue _;case 7:$z=ALY(a,b,c,j,e);if(C()){break _;}k=$z;if(!k){if(g<0)return;if(!g){$p=12;continue _;}$p=13;continue _;}if(g>=8){d=a.b;$p=10;continue _;}d=a.b;k=g+8|0;$p=9;continue _;case 8:$z=AFh(a,b,c,j,e);if(C()){break _;}l=$z;if(l>=0){$p=11;continue _;}if(a.ml>=2&&a.b_===BfJ)k=0;if(a.b_===BfK&&g<8&&k<8&&k>g&&E(f,4))
{h=0;k=g;}if(k!=g){if(k>=0){$p=18;continue _;}j=0;$p=20;continue _;}if(h){$p=17;continue _;}k=g;g=k;j=d-1|0;$p=7;continue _;case 9:AIZ(b,c,j,e,d,k);if(C()){break _;}return;case 10:AIZ(b,c,j,e,d,g);if(C()){break _;}return;case 11:$z=AFh(a,b,c,j,e);if(C()){break _;}k=$z;if(k<8)k=k+8|0;if(a.ml>=2&&a.b_===BfJ)k=0;if(a.b_===BfK&&g<8&&k<8&&k>g&&E(f,4)){h=0;k=g;}if(k!=g){if(k>=0){$p=18;continue _;}j=0;$p=20;continue _;}if(h){$p=17;continue _;}k=g;g=k;j=d-1|0;$p=7;continue _;case 12:$z=AK4(a,b,c,d,e);if(C()){break _;}m
=$z;l=g+a.qQ|0;if(g>=8)l=1;if(l>=8)return;m=m.data;if(m[0]){j=c-1|0;$p=14;continue _;}if(m[1]){j=c+1|0;$p=15;continue _;}if(m[2]){j=e-1|0;$p=16;continue _;}if(!m[3])return;e=e+1|0;$p=21;continue _;case 13:$z=ACq(a,b,c,j,e);if(C()){break _;}j=$z;if(!j)return;$p=12;continue _;case 14:APb(a,b,j,d,e,l);if(C()){break _;}if(m[1]){j=c+1|0;$p=15;continue _;}if(m[2]){j=e-1|0;$p=16;continue _;}if(!m[3])return;e=e+1|0;$p=21;continue _;case 15:APb(a,b,j,d,e,l);if(C()){break _;}if(m[2]){j=e-1|0;$p=16;continue _;}if(!m[3])return;e
=e+1|0;$p=21;continue _;case 16:APb(a,b,c,d,j,l);if(C()){break _;}if(!m[3])return;e=e+1|0;$p=21;continue _;case 17:AHc(a,b,c,d,e);if(C()){break _;}k=g;g=k;j=d-1|0;$p=7;continue _;case 18:AKw(b,c,d,e,k);if(C()){break _;}Fn(b,c,d,e,a.b);j=a.b;$p=19;case 19:AHN(b,c,d,e,j);if(C()){break _;}g=k;j=d-1|0;$p=7;continue _;case 20:APy(b,c,d,e,j);if(C()){break _;}g=k;j=d-1|0;$p=7;continue _;case 21:APb(a,b,c,d,e,l);if(C()){break _;}return;default:E$();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function APb(a,b,c,d,e,f){var g,h,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=ALY(a,b,c,d,e);if(C()){break _;}g=$z;if(!g)return;$p=2;case 2:$z=ACy(b,c,d,e);if(C()){break _;}g=$z;if(g>0){if(a.b_!==BfK){L();h=BeI.data[g];$p=4;continue _;}JU(a,b,c,d,e);}g=a.b;$p=3;case 3:AIZ(b,c,d,e,g,f);if(C()){break _;}return;case 4:$z=AEL(b,c,d,e);if(C()){break _;}g=$z;$p=5;case 5:h.IP(b,c,d,e,g);if(C()){break _;}g
=a.b;$p=3;continue _;default:E$();}}C4().s(a,b,c,d,e,f,g,h,$p);}
function ANT(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:h=1000;i=0;j=R(g,1);k=R(g,3);l=R(g,2);m=c-1|0;n=e-1|0;o=d-1|0;p=R(f,4);q=f+1|0;a:{while(i<4){if(!(!i&&!j)){r=R(i,1);if(!(!r&&!g)){s=R(i,2);if(!(!s&&!k)){t=R(i,3);if(t)break a;if
(l)break a;}}}i=i+1|0;}return h;}u=!i?m:c;if(!r)u=u+1|0;r=!s?n:e;if(!t)r=r+1|0;$p=1;case 1:$z=ACq(a,b,u,d,r);if(C()){break _;}t=$z;if(!t){$p=2;continue _;}b:{while(true){i=i+1|0;if(i>=4)break;if(!i&&!j)continue;r=R(i,1);if(!r&&!g)continue;s=R(i,2);if(!s&&!k)continue;t=R(i,3);if(t)break b;if(l)break b;}return h;}u=!i?m:c;if(!r)u=u+1|0;r=!s?n:e;if(!t)r=r+1|0;continue _;case 2:$z=AB3(b,u,d,r);if(C()){break _;}v=$z;if(v!==a.b_){$p=3;continue _;}$p=4;continue _;case 3:$z=ACq(a,b,u,o,r);if(C()){break _;}t=$z;if(!t)return f;if
(p<0){$p=5;continue _;}c:{while(true){i=i+1|0;if(i>=4)break;if(!i&&!j)continue;r=R(i,1);if(!r&&!g)continue;s=R(i,2);if(!s&&!k)continue;t=R(i,3);if(t)break c;if(l)break c;}return h;}u=!i?m:c;if(!r)u=u+1|0;r=!s?n:e;if(!t)r=r+1|0;$p=1;continue _;case 4:$z=AEL(b,u,d,r);if(C()){break _;}t=$z;if(t){$p=3;continue _;}b:{while(true){i=i+1|0;if(i>=4)break;if(!i&&!j)continue;r=R(i,1);if(!r&&!g)continue;s=R(i,2);if(!s&&!k)continue;t=R(i,3);if(t)break b;if(l)break b;}return h;}u=!i?m:c;if(!r)u=u+1|0;r=!s?n:e;if(!t)r=r+1
|0;$p=1;continue _;case 5:$z=ANT(a,b,u,d,r,q,i);if(C()){break _;}t=$z;if(t<h)h=t;c:{while(true){i=i+1|0;if(i>=4)break;if(!i&&!j)continue;r=R(i,1);if(!r&&!g)continue;s=R(i,2);if(!s&&!k)continue;t=R(i,3);if(t)break c;if(l)break c;}return h;}u=!i?m:c;if(!r)u=u+1|0;r=!s?n:e;if(!t)r=r+1|0;$p=1;continue _;default:E$();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,$p);}
function AK4(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=0;g=c-1|0;h=e-1|0;i=d-1|0;if(f>=4){c=a.cT.data[0];j=1;while(j<4){if(a.cT.data[j]<c)c=a.cT.data[j];j=j+1|0;}d=0;while(d<4){k=a.hg;k.data[d]=a.cT.data[d]!=c?0:1;d=d+1|0;}return a.hg;}a.cT.data[f]=1000;l=!f?g:c;if(f==1)l=l+1|0;m=f==2?h:e;if(f==3)m=m+1|0;$p=1;case 1:$z
=ACq(a,b,l,d,m);if(C()){break _;}j=$z;if(!j){$p=2;continue _;}f=f+1|0;if(f>=4){c=a.cT.data[0];j=1;while(j<4){if(a.cT.data[j]<c)c=a.cT.data[j];j=j+1|0;}d=0;while(d<4){k=a.hg;k.data[d]=a.cT.data[d]!=c?0:1;d=d+1|0;}return a.hg;}a.cT.data[f]=1000;l=!f?g:c;if(f==1)l=l+1|0;m=f==2?h:e;if(f==3)m=m+1|0;continue _;case 2:$z=AB3(b,l,d,m);if(C()){break _;}n=$z;if(n!==a.b_){$p=3;continue _;}$p=4;continue _;case 3:$z=ACq(a,b,l,i,m);if(C()){break _;}j=$z;if(j){k=a.cT.data;j=1;$p=5;continue _;}a.cT.data[f]=0;f=f+1|0;if(f>=
4){c=a.cT.data[0];j=1;while(j<4){if(a.cT.data[j]<c)c=a.cT.data[j];j=j+1|0;}d=0;while(d<4){k=a.hg;k.data[d]=a.cT.data[d]!=c?0:1;d=d+1|0;}return a.hg;}a.cT.data[f]=1000;l=!f?g:c;if(f==1)l=l+1|0;m=f==2?h:e;if(f==3)m=m+1|0;$p=1;continue _;case 4:$z=AEL(b,l,d,m);if(C()){break _;}j=$z;if(j){$p=3;continue _;}f=f+1|0;if(f>=4){c=a.cT.data[0];j=1;while(j<4){if(a.cT.data[j]<c)c=a.cT.data[j];j=j+1|0;}d=0;while(d<4){k=a.hg;k.data[d]=a.cT.data[d]!=c?0:1;d=d+1|0;}return a.hg;}a.cT.data[f]=1000;l=!f?g:c;if(f==1)l=l+1|0;m=f
==2?h:e;if(f==3)m=m+1|0;$p=1;continue _;case 5:$z=ANT(a,b,l,d,m,j,f);if(C()){break _;}j=$z;k[f]=j;f=f+1|0;if(f>=4){c=a.cT.data[0];j=1;while(j<4){if(a.cT.data[j]<c)c=a.cT.data[j];j=j+1|0;}d=0;while(d<4){k=a.hg;k.data[d]=a.cT.data[d]!=c?0:1;d=d+1|0;}return a.hg;}a.cT.data[f]=1000;l=!f?g:c;if(f==1)l=l+1|0;m=f==2?h:e;if(f==3)m=m+1|0;$p=1;continue _;default:E$();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function ACq(a,b,c,d,e){var f,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=ACy(b,c,d,e);if(C()){break _;}f=$z;L();if(f!=Bg0.b&&f!=BgZ.b&&f!=Bf6.b){if(!f)return 0;return BeI.data[f].b_.dw();}return 1;default:E$();}}C4().s(a,b,c,d,e,f,$p);}
function AOO(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AFh(a,b,c,d,e);if(C()){break _;}g=$z;if(g<0)return f;if(!g)a.ml=a.ml+1|0;if(g>=8)g=0;if(f>=0&&g>=f)g=f;return g;default:E$();}}C4().s(a,b,c,d,e,f,g,$p);}
function ALY(a,b,c,d,e){var f,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AB3(b,c,d,e);if(C()){break _;}f=$z;if(f===a.b_)c=0;else{if(f!==BfK){$p=2;continue _;}c=0;}return c;case 2:$z=ACq(a,b,c,d,e);if(C()){break _;}c=$z;return c?0:1;default:E$();}}C4().s(a,b,c,d,e,f,$p);}
function AB6(a,b,c,d,e){var f,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:APa(a,b,c,d,e);if(C()){break _;}$p=2;case 2:$z=ACy(b,c,d,e);if(C()){break _;}f=$z;if(f==a.b)Fn(b,c,d,e,a.b);return;default:E$();}}C4().s(a,b,c,d,e,f,$p);}
function AIL(){HT.call(this);}
function AXI(a,b){var c=new AIL();A2r(c,a,b);return c;}
function A2r(a,b,c){P6(a,b,c);Fe(a,0);}
function AGz(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:APa(a,b,c,d,e);if(C()){break _;}$p=2;case 2:$z=ACy(b,c,d,e);if(C()){break _;}f=$z;if(f!=a.b)return;$p=3;case 3:$z=AEL(b,c,d,e);if(C()){break _;}g=$z;b.so=1;f=a.b-1|0;$p=4;case 4:AJn(b,c,d,e,f,g);if(C()){break _;}Jn(b,c,d,e,c,d,e);Fn(b,c,d,e,a.b-1|0);b.so=0;return;default:E$();}}C4().s(a,b,c,d,e,f,g,$p);}
function I_(){O.call(this);}
var BeP=0;function Bbx(a,b){var c=new I_();RG(c,a,b);return c;}
function RG(a,b,c){C9(a,b,c,Bhm);}
function ARQ(a,b,c,d,e){Fn(b,c,d,e,a.b);}
function ASf(a,b,c,d,e,f){Fn(b,c,d,e,a.b);}
function APB(a,b,c,d,e,f){var g,h,i,j,k,l,m,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=d-1|0;$p=1;case 1:$z=ACy(b,c,g,e);if(C()){break _;}g=$z;if(!g)g=1;else{L();if(g==Bgi.b)g=1;else{f=BeI.data[g].b_;g=f===BfJ?1:f!==BfK?0:1;}}if(g&&d>=0){f=new JO;h=c+0.5;i=d+0.5;j=e+0.5;c=a.b;FC(f,b);f.oO=0;f.hS=c;f.mD=1;D2(f,0.9800000190734863,0.9800000190734863);f.c4=f.eO/2.0;k
=h;l=i;m=j;CU(f,k,l,m);f.g=0.0;f.i=0.0;f.h=0.0;f.i9=0;f.bS=k;f.cS=l;f.bR=m;if(!BeP){$p=2;continue _;}if(!f.cR){$p=3;continue _;}}return;case 2:AOi(b,f);if(C()){break _;}return;case 3:AMP(f);if(C()){break _;}if(f.cR)return;continue _;default:E$();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function A3U(a){return 3;}
function ACP(){BeP=0;}
function AG6(){I_.call(this);}
function BbF(a,b){var c=new AG6();AV0(c,a,b);return c;}
function AV0(a,b,c){RG(a,b,c);}
function A_g(a,b,c){if(E(c,10))b=a.b;else{BB();b=Bhs.cW;}return b;}
function YZ(){O.call(this);}
function SQ(a,b){var c=new YZ();AZx(c,a,b);return c;}
function AZx(a,b,c){C9(a,b,c,Bg4);}
function A4k(a,b,c){b=a.b;L();if(b==Be9.b){BB();b=Bht.cW;}else if(a.b!=BgS.b)b=a.b;else{BB();b=Bhu.cW;}return b;}
function AZ7(a,b){return 1;}
function AFi(){O.call(this);}
function BcH(a){var b=new AFi();A$9(b,a);return b;}
function A$9(a,b){D1(a,b,Bg5);a.ba=20;}
function A8S(a,b){return 1;}
function ATg(a,b,c){L();return BeV.b;}
function AVA(a,b){return b==1?21:b?20:21;}
function LW(){O.call(this);this.r4=0;}
function AQx(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=b.ej(c,d,e);if(C()){break _;}g=$z;if(!a.r4&&g==a.b)return 0;$p=2;case 2:$z=AGv(a,b,c,d,e,f);if(C()){break _;}c=$z;return c;default:E$();}}C4().s(a,b,c,d,e,f,g,$p);}
function ACH(){LW.call(this);this.Cr=0;}
function BaC(a,b){var c=new ACH();A0Z(c,a,b);return c;}
function A0Z(a,b,c){C9(a,b,c,Bhi);a.r4=0;a.Cr=c;Fe(a,1);}
function AIz(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=d-1|0;$p=1;case 1:$z=AB3(b,c,g,e);if(C()){break _;}f=$z;if(f.dw())return;h=c-2|0;i=c+2|0;j=d+1|0;k=e-2|0;l=e+2|0;while(h<=i){m=g;while(m<=j){n=k;if(n<=l){$p=5;continue _;}m=m+1|0;}h=h+1|0;}$p=2;case 2:$z=AEL(b,c,d,e);if(C()){break _;}i=$z;$p=3;case 3:Yj(a,
b,c,d,e,i);if(C()){break _;}i=0;$p=4;case 4:APy(b,c,d,e,i);if(C()){break _;}return;case 5:$z=ACy(b,h,m,n);if(C()){break _;}o=$z;L();if(o==BeV.b)return;n=n+1|0;while(n>l){m=m+1|0;while(m>j){h=h+1|0;if(h>i){$p=2;continue _;}m=g;}n=k;}continue _;default:E$();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,$p);}
function AW7(a,b){return E(b,10)?0:1;}
function A4_(a,b,c){L();return Be0.b;}
function A2P(a){return a.r4?0:1;}
function AKn(a,b){a.r4=b;a.ba=a.Cr+(!b?1:0)|0;}
function ASt(a,b,c,d,e,f){return;}
function ALf(){O.call(this);}
function Ba4(a){var b=new ALf();A8Q(b,a);return b;}
function A8Q(a,b){D1(a,b,Bhk);a.ba=48;}
function AKK(a,b,c,d,e){var f,g,h,i,j,k,l,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=c-2|0;g=c+2|0;h=d-2|0;d=d+2|0;i=e-2|0;e=e+2|0;while(f<=g){j=h;while(j<=d){k=i;if(k<=e){$p=1;continue _;}j=j+1|0;}f=f+1|0;}return;case 1:$z=AB3(b,f,j,k);if(C()){break _;}l=$z;k=k+1|0;a:while(true){if(k<=e){continue _;}j=j+1|0;while(j>d){f=f+1|0;if(f>g)break a;j=h;}k=i;}return;default:E$();}}C4().s(a,
b,c,d,e,f,g,h,i,j,k,l,$p);}
function ANv(a,b,c,d,e){var f,g,h,i,j,k,l,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=c-2|0;g=c+2|0;h=d-2|0;i=d+2|0;j=e-2|0;c=e+2|0;while(f<=g){k=h;while(k<=i){l=j;if(l<=c){$p=1;continue _;}k=k+1|0;}f=f+1|0;}return;case 1:$z=ACy(b,f,k,l);if(C()){break _;}d=$z;$p=2;case 2:AHN(b,f,k,l,d);if(C()){break _;}l=l+1|0;a:while(true){if(l<=c){$p=1;continue _;}k=k+1|0;while(k>i){f
=f+1|0;if(f>g)break a;k=h;}l=j;}return;default:E$();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,$p);}
function Nc(){O.call(this);this.CC=0;}
function A98(a){return 0;}
function Yz(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=b.ej(c,d,e);if(C()){break _;}g=$z;if(!a.CC&&g==a.b)return 0;$p=2;case 2:$z=AGv(a,b,c,d,e,f);if(C()){break _;}c=$z;return c;default:E$();}}C4().s(a,b,c,d,e,f,g,$p);}
function AQo(){Nc.call(this);}
function Ba0(a,b,c,d){var e=new AQo();A5c(e,a,b,c,d);return e;}
function A5c(a,b,c,d,e){C9(a,b,c,d);a.CC=e;}
function AV8(a,b){return 0;}
function AHf(){F4.call(this);}
function ATQ(a,b){var c=new AHf();A$2(c,a,b);return c;}
function A$2(a,b,c){Lw(a,b,c);Bn(a,0.30000001192092896,0.0,0.30000001192092896,0.699999988079071,0.4000000059604645,0.699999988079071);}
function AI7(a,b){L();return Bgt.data[b];}
function ADl(a,b,c,d,e){var f,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=XB(b,c,d,e);if(C()){break _;}f=$z;if(f>13)return 0;d=d-1|0;$p=2;case 2:$z=ACy(b,c,d,e);if(C()){break _;}c=$z;return !AI7(a,c)?0:1;default:E$();}}C4().s(a,b,c,d,e,f,$p);}
function ABx(){O.call(this);}
function AED(a,b){var c=new ABx();AXX(c,a,b);return c;}
function AXX(a,b,c){D1(a,b,Bhh);a.ba=c;}
function A4x(a,b){return b==1?a.ba-16|0:b?a.ba:a.ba+16|0;}
function Zi(){O.call(this);this.wB=0;}
function A9i(a,b){var c=new Zi();A5$(c,a,b);return c;}
function A5$(a,b,c){C9(a,b,6,Bg4);a.wB=c;if(!c)Bn(a,0.0,0.0,0.0,1.0,0.5,1.0);Gx(a,255);}
function A$F(a,b){return b>1?5:6;}
function A5O(a){return a.wB;}
function ABG(a,b,c,d,e,f){L();}
function ABl(a,b,c,d,e){var f,g,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:L();f=d-1|0;$p=1;case 1:$z=ACy(b,c,f,e);if(C()){break _;}g=$z;if(g!=BeN.b)return;g=0;$p=2;case 2:APy(b,c,d,e,g);if(C()){break _;}d=BeM.b;$p=3;case 3:APy(b,c,f,e,d);if(C()){break _;}return;default:E$();}}C4().s(a,b,c,d,e,f,g,$p);}
function AZm(a,b,c){L();return BeN.b;}
function AW9(a){return a.wB;}
function ASF(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:L();if(a!==BeN){$p=1;continue _;}if(f==1)return 1;$p=2;continue _;case 1:AGv(a,b,c,d,e,f);if(C()){break _;}if(f==1)return 1;$p=2;case 2:$z=AGv(a,b,c,d,e,f);if(C()){break _;}g=$z;if(!g)c=0;else{if(f){$p=3;continue _;}c=1;}return c;case 3:$z=b.ej(c,d,e);if(C()){break _;}c=$z;return c==a.b?0:1;default:E$();}}C4().s(a,b,c,d,e,f,g,$p);}
function AOh(){O.call(this);}
function BaD(a,b){var c=new AOh();A0q(c,a,b);return c;}
function A0q(a,b,c){C9(a,b,c,Bho);}
function A4Z(a,b){return !b?a.ba+2|0:b!=1?a.ba:a.ba+1|0;}
function AVc(a,b){return 0;}
function AGF(a,b,c,d,e){var f,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=AWR(b,c+0.5,d+0.5,e+0.5);f.hq=E(b.q,f.hq/4|0)+(f.hq/8|0)|0;$p=1;case 1:AOi(b,f);if(C()){break _;}return;default:E$();}}C4().s(a,b,c,d,e,f,$p);}
function ASn(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=AWR(b,c+0.5,d+0.5,e+0.5);$p=1;case 1:AOi(b,g);if(C()){break _;}Di(b,g,B(226),1.0,1.0);return;default:E$();}}C4().s(a,b,c,d,e,f,g,$p);}
function ADb(){O.call(this);}
function Bae(a,b){var c=new ADb();AUf(c,a,b);return c;}
function AUf(a,b,c){C9(a,b,c,Bg5);}
function A$6(a,b){return b>1?a.ba:4;}
function A4z(a,b){return 0;}
function XP(){LP.call(this);}
function Bbj(a,b){var c=new XP();AZs(c,a,b);return c;}
function AZs(a,b,c){AI8(a,b,c);}
function A27(a,b){return 1;}
function AUY(a,b,c){L();return Bfe.b;}
function AOD(){O.call(this);}
function Ba7(a,b){var c=new AOD();A$T(c,a,b);return c;}
function A$T(a,b,c){C9(a,b,c,Bhn);Fe(a,1);}
function ANl(a,b,c,d,e){return null;}
function A2a(a){return 0;}
function AWb(a){return 0;}
function A0V(a){return 2;}
function AL9(a,b,c,d,e){var f,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=c-1|0;$p=1;case 1:$z=AAE(b,f,d,e);if(C()){break _;}f=$z;if(f)return 1;f=c+1|0;$p=2;case 2:$z=AAE(b,f,d,e);if(C()){break _;}f=$z;if(f)return 1;f=e-1|0;$p=3;case 3:$z=AAE(b,c,d,f);if(C()){break _;}f=$z;if(f)return 1;f=e+1|0;$p=4;case 4:$z=AAE(b,c,d,f);if(C()){break _;}f=$z;if(f)return 1;d=d-1|0;$p=5;case 5:$z=AAE(b,c,d,e);if(C()){break _;}c=$z;return c;default:
E$();}}C4().s(a,b,c,d,e,f,$p);}
function ANP(a,b,c,d,e,f){var g,h,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AEL(b,c,d,e);if(C()){break _;}g=$z;if(f==1){h=d-1|0;$p=2;continue _;}if(f==2){h=e+1|0;$p=3;continue _;}if(f==3){h=e-1|0;$p=4;continue _;}if(f==4){h=c+1|0;$p=5;continue _;}if(f==5){f=c-1|0;$p=6;continue _;}$p=7;continue _;case 2:$z=AAE(b,c,h,e);if(C()){break _;}h=$z;if(h)g=5;if(f==2){h=e+1|0;$p=3;continue _;}if(f==3)
{h=e-1|0;$p=4;continue _;}if(f==4){h=c+1|0;$p=5;continue _;}if(f==5){f=c-1|0;$p=6;continue _;}$p=7;continue _;case 3:$z=AAE(b,c,d,h);if(C()){break _;}h=$z;if(h)g=4;if(f==3){h=e-1|0;$p=4;continue _;}if(f==4){h=c+1|0;$p=5;continue _;}if(f==5){f=c-1|0;$p=6;continue _;}$p=7;continue _;case 4:$z=AAE(b,c,d,h);if(C()){break _;}h=$z;if(h)g=3;if(f==4){h=c+1|0;$p=5;continue _;}if(f==5){f=c-1|0;$p=6;continue _;}$p=7;continue _;case 5:$z=AAE(b,h,d,e);if(C()){break _;}h=$z;if(h)g=2;if(f==5){f=c-1|0;$p=6;continue _;}$p=7;continue _;case 6:$z
=AAE(b,f,d,e);if(C()){break _;}f=$z;if(f)g=1;$p=7;case 7:AKw(b,c,d,e,g);if(C()){break _;}return;default:E$();}}C4().s(a,b,c,d,e,f,g,h,$p);}
function ASd(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AEL(b,c,d,e);if(C()){break _;}g=$z;if(g)return;$p=2;case 2:ABw(a,b,c,d,e);if(C()){break _;}return;default:E$();}}C4().s(a,b,c,d,e,f,g,$p);}
function ABw(a,b,c,d,e){var f,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=c-1|0;$p=1;case 1:$z=AAE(b,f,d,e);if(C()){break _;}f=$z;if(!f){f=c+1|0;$p=2;continue _;}f=1;$p=3;continue _;case 2:$z=AAE(b,f,d,e);if(C()){break _;}f=$z;if(!f){f=e-1|0;$p=4;continue _;}f=2;$p=5;continue _;case 3:AKw(b,c,d,e,f);if(C()){break _;}$p=6;continue _;case 4:$z=AAE(b,c,d,f);if(C()){break _;}f=$z;if(!f){f=e+1|0;$p=7;continue _;}f=3;$p=8;continue _;case 5:AKw(b,
c,d,e,f);if(C()){break _;}$p=6;case 6:AE9(a,b,c,d,e);if(C()){break _;}return;case 7:$z=AAE(b,c,d,f);if(C()){break _;}f=$z;if(!f){f=d-1|0;$p=9;continue _;}f=4;$p=10;continue _;case 8:AKw(b,c,d,e,f);if(C()){break _;}$p=6;continue _;case 9:$z=AAE(b,c,f,e);if(C()){break _;}f=$z;if(!f){$p=6;continue _;}f=5;$p=11;continue _;case 10:AKw(b,c,d,e,f);if(C()){break _;}$p=6;continue _;case 11:AKw(b,c,d,e,f);if(C()){break _;}$p=6;continue _;default:E$();}}C4().s(a,b,c,d,e,f,$p);}
function AKb(a,b,c,d,e,f){var g,h,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AE9(a,b,c,d,e);if(C()){break _;}f=$z;if(!f)return;$p=2;case 2:$z=AEL(b,c,d,e);if(C()){break _;}g=$z;h=0;f=c-1|0;$p=3;case 3:$z=AAE(b,f,d,e);if(C()){break _;}f=$z;if(!f&&g==1)h=1;f=c+1|0;$p=4;case 4:$z=AAE(b,f,d,e);if(C()){break _;}f=$z;if(!f&&g==2)h=1;f=e-1|0;$p=5;case 5:$z=AAE(b,c,d,f);if(C()){break _;}f=$z;if(!f&&
g==3)h=1;f=e+1|0;$p=6;case 6:$z=AAE(b,c,d,f);if(C()){break _;}f=$z;if(!f&&g==4)h=1;f=d-1|0;$p=7;case 7:$z=AAE(b,c,f,e);if(C()){break _;}f=$z;if(!f&&g==5)h=1;if(!h)return;$p=8;case 8:$z=AEL(b,c,d,e);if(C()){break _;}f=$z;$p=9;case 9:Yj(a,b,c,d,e,f);if(C()){break _;}f=0;$p=10;case 10:APy(b,c,d,e,f);if(C()){break _;}return;default:E$();}}C4().s(a,b,c,d,e,f,g,h,$p);}
function AE9(a,b,c,d,e){var f,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AL9(a,b,c,d,e);if(C()){break _;}f=$z;if(f)return 1;$p=2;case 2:$z=AEL(b,c,d,e);if(C()){break _;}f=$z;$p=3;case 3:Yj(a,b,c,d,e,f);if(C()){break _;}f=0;$p=4;case 4:APy(b,c,d,e,f);if(C()){break _;}return 0;default:E$();}}C4().s(a,b,c,d,e,f,$p);}
function AKi(a,b,c,d,e,f,g){var h,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AEL(b,c,d,e);if(C()){break _;}h=$z;if(h==1)Bn(a,0.0,0.20000000298023224,0.3499999940395355,0.30000001192092896,0.800000011920929,0.6499999761581421);else if(h==2)Bn(a,0.699999988079071,0.20000000298023224,0.3499999940395355,1.0,0.800000011920929,0.6499999761581421);else if(h==3)Bn(a,0.3499999940395355,0.20000000298023224,
0.0,0.6499999761581421,0.800000011920929,0.30000001192092896);else if(h!=4)Bn(a,0.4000000059604645,0.0,0.4000000059604645,0.6000000238418579,0.6000000238418579,0.6000000238418579);else Bn(a,0.3499999940395355,0.20000000298023224,0.699999988079071,0.6499999761581421,0.800000011920929,1.0);$p=2;case 2:$z=Kd(a,b,c,d,e,f,g);if(C()){break _;}b=$z;return b;default:E$();}}C4().s(a,b,c,d,e,f,g,h,$p);}
function AQq(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AEL(b,c,d,e);if(C()){break _;}g=$z;h=c+0.5;i=d+0.699999988079071;j=e+0.5;if(g==1){k=h-0.27000001072883606;l=i+0.2199999988079071;m=j;BV(b,B(256),k,l,m,0.0,0.0,0.0);BV(b,B(257),k,l,m,0.0,0.0,0.0);}else if(g==2){k=h+0.27000001072883606;l
=i+0.2199999988079071;m=j;BV(b,B(256),k,l,m,0.0,0.0,0.0);BV(b,B(257),k,l,m,0.0,0.0,0.0);}else if(g==3){k=h;l=i+0.2199999988079071;m=j-0.27000001072883606;BV(b,B(256),k,l,m,0.0,0.0,0.0);BV(b,B(257),k,l,m,0.0,0.0,0.0);}else if(g!=4){n=h;o=i;p=j;BV(b,B(256),n,o,p,0.0,0.0,0.0);BV(b,B(257),n,o,p,0.0,0.0,0.0);}else{k=h;l=i+0.2199999988079071;m=j+0.27000001072883606;BV(b,B(256),k,l,m,0.0,0.0,0.0);BV(b,B(257),k,l,m,0.0,0.0,0.0);}return;default:E$();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,$p);}
function AO3(){var a=this;O.call(a);a.sB=null;a.t6=null;}
function BcN(a,b){var c=new AO3();A3I(c,a,b);return c;}
function A3I(a,b,c){C9(a,b,c,Bhl);a.sB=$rt_createIntArray(256);a.t6=$rt_createIntArray(256);Hv(a,BeU.b,5,20);Hv(a,BeV.b,5,5);Hv(a,BeW.b,30,60);Hv(a,Bfc.b,30,20);Hv(a,Bfd.b,15,100);Hv(a,Be8.b,30,60);Fe(a,1);}
function Hv(a,b,c,d){a.sB.data[b]=c;a.t6.data[b]=d;}
function ARE(a,b,c,d,e){return null;}
function A5V(a){return 0;}
function A8s(a){return 0;}
function AXx(a){return 3;}
function AWG(a,b){return 0;}
function AZ3(a){return 20;}
function XO(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AEL(b,c,d,e);if(C()){break _;}g=$z;h=R(g,15);if(h>=0){$p=2;continue _;}i=g+1|0;$p=3;continue _;case 2:$z=AMX(a,b,c,d,e);if(C()){break _;}i=$z;if(i){j=d-1|0;$p=4;continue _;}h=d-1|0;$p=5;continue _;case 3:AKw(b,
c,d,e,i);if(C()){break _;}Fn(b,c,d,e,a.b);$p=2;continue _;case 4:$z=AF1(a,b,c,j,e);if(C()){break _;}i=$z;if(!i&&!h&&!E(f,4)){h=0;$p=13;continue _;}if(!(g%5|0)&&g>5){h=c+1|0;i=300;$p=7;continue _;}return;case 5:$z=AAE(b,c,h,e);if(C()){break _;}h=$z;if(h&&g<=3)return;h=0;$p=6;case 6:APy(b,c,d,e,h);if(C()){break _;}return;case 7:YG(a,b,h,d,e,i,f);if(C()){break _;}i=c-1|0;g=300;$p=8;case 8:YG(a,b,i,d,e,g,f);if(C()){break _;}g=100;$p=9;case 9:YG(a,b,c,j,e,g,f);if(C()){break _;}k=d+1|0;g=200;$p=10;case 10:YG(a,b,
c,k,e,g,f);if(C()){break _;}l=e-1|0;g=300;$p=11;case 11:YG(a,b,c,d,l,g,f);if(C()){break _;}m=e+1|0;g=300;$p=12;case 12:YG(a,b,c,d,m,g,f);if(C()){break _;}n=d+4|0;a:{while(i<=h){o=l;while(o<=m){p=j;while(p<=n){if(i!=c)break a;if(p!=d)break a;if(o!=e)break a;p=p+1|0;}o=o+1|0;}i=i+1|0;}return;}q=100;if(p>k)q=q+((p-k|0)*100|0)|0;g=0;$p=14;continue _;case 13:APy(b,c,d,e,h);if(C()){break _;}return;case 14:$z=ACy(b,i,p,o);if(C()){break _;}r=$z;if(!r){r=i+1|0;$p=15;continue _;}if(0>0&&E(f,q)<=0){g=a.b;$p=21;continue _;}b:
{c:while(true){p=p+1|0;while(p>n){o=o+1|0;while(o>m){i=i+1|0;if(i>h)break c;o=l;}p=j;}if(i!=c)break b;if(p!=d)break b;if(o==e)continue;else break b;}return;}q=100;if(p>k)q=q+((p-k|0)*100|0)|0;g=0;continue _;case 15:$z=AGB(a,b,r,p,o,g);if(C()){break _;}g=$z;r=i-1|0;$p=16;case 16:$z=AGB(a,b,r,p,o,g);if(C()){break _;}g=$z;r=p-1|0;$p=17;case 17:$z=AGB(a,b,i,r,o,g);if(C()){break _;}g=$z;r=p+1|0;$p=18;case 18:$z=AGB(a,b,i,r,o,g);if(C()){break _;}g=$z;r=o-1|0;$p=19;case 19:$z=AGB(a,b,i,p,r,g);if(C()){break _;}r=$z;g
=o+1|0;$p=20;case 20:$z=AGB(a,b,i,p,g,r);if(C()){break _;}r=$z;if(r>0&&E(f,q)<=r){g=a.b;$p=21;continue _;}d:{b:while(true){p=p+1|0;while(p>n){o=o+1|0;while(o>m){i=i+1|0;if(i>h)break b;o=l;}p=j;}if(i!=c)break d;if(p!=d)break d;if(o==e)continue;else break d;}return;}q=100;if(p>k)q=q+((p-k|0)*100|0)|0;g=0;$p=14;continue _;case 21:APy(b,i,p,o,g);if(C()){break _;}a:{d:while(true){p=p+1|0;while(p>n){o=o+1|0;while(o>m){i=i+1|0;if(i>h)break d;o=l;}p=j;}if(i!=c)break a;if(p!=d)break a;if(o==e)continue;else break a;}return;}q
=100;if(p>k)q=q+((p-k|0)*100|0)|0;g=0;$p=14;continue _;default:E$();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,$p);}
function YG(a,b,c,d,e,f,g){var h,i,j,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:h=a.t6.data;$p=1;case 1:$z=ACy(b,c,d,e);if(C()){break _;}i=$z;j=h[i];if(E(g,f)>=j)return;$p=2;case 2:$z=ACy(b,c,d,e);if(C()){break _;}f=$z;L();i=f!=Bfd.b?0:1;if(E(g,2)){f=0;$p=3;continue _;}f=a.b;$p=4;continue _;case 3:APy(b,c,d,e,f);if(C()){break _;}if(!i)return;g=Bfd;f=0;$p=5;continue _;case 4:APy(b,c,d,e,f);if
(C()){break _;}if(!i)return;g=Bfd;f=0;$p=5;case 5:g.nr(b,c,d,e,f);if(C()){break _;}return;default:E$();}}C4().s(a,b,c,d,e,f,g,h,i,j,$p);}
function AMX(a,b,c,d,e){var f,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=c+1|0;$p=1;case 1:$z=AF1(a,b,f,d,e);if(C()){break _;}f=$z;if(f)return 1;f=c-1|0;$p=2;case 2:$z=AF1(a,b,f,d,e);if(C()){break _;}f=$z;if(f)return 1;f=d-1|0;$p=3;case 3:$z=AF1(a,b,c,f,e);if(C()){break _;}f=$z;if(f)return 1;f=d+1|0;$p=4;case 4:$z=AF1(a,b,c,f,e);if(C()){break _;}f=$z;if(f)return 1;f=e-1|0;$p=5;case 5:$z=AF1(a,b,c,d,f);if(C()){break _;}f=
$z;if(f)return 1;e=e+1|0;$p=6;case 6:$z=AF1(a,b,c,d,e);if(C()){break _;}c=$z;return c;default:E$();}}C4().s(a,b,c,d,e,f,$p);}
function A3j(a){return 0;}
function AF1(a,b,c,d,e){var f,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=a.sB.data;$p=1;case 1:$z=b.ej(c,d,e);if(C()){break _;}c=$z;return f[c]<=0?0:1;default:E$();}}C4().s(a,b,c,d,e,f,$p);}
function AGB(a,b,c,d,e,f){var g,h,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=a.sB.data;$p=1;case 1:$z=ACy(b,c,d,e);if(C()){break _;}c=$z;h=g[c];if(h>f)f=h;return f;default:E$();}}C4().s(a,b,c,d,e,f,g,h,$p);}
function ANs(a,b,c,d,e){var f,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=d-1|0;$p=1;case 1:$z=AAE(b,c,f,e);if(C()){break _;}f=$z;if(f)return 1;$p=2;case 2:$z=AMX(a,b,c,d,e);if(C()){break _;}c=$z;return c?1:0;default:E$();}}C4().s(a,b,c,d,e,f,$p);}
function ABC(a,b,c,d,e,f){var $p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=d-1|0;$p=1;case 1:$z=AAE(b,c,f,e);if(C()){break _;}f=$z;if(f)return;$p=2;case 2:$z=AMX(a,b,c,d,e);if(C()){break _;}f=$z;if(f)return;f=0;$p=3;case 3:APy(b,c,d,e,f);if(C()){break _;}return;default:E$();}}C4().s(a,b,c,d,e,f,$p);}
function ACu(a,b,c,d,e){var f,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=d-1|0;$p=1;case 1:$z=AAE(b,c,f,e);if(C()){break _;}f=$z;if(f){Fn(b,c,d,e,a.b);return;}$p=2;case 2:$z=AMX(a,b,c,d,e);if(C()){break _;}f=$z;if(f){Fn(b,c,d,e,a.b);return;}f=0;$p=3;case 3:APy(b,c,d,e,f);if(C()){break _;}return;default:E$();}}C4().s(a,b,c,d,e,f,$p);}
function ASu(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!E(f,24))Ex(b,c+0.5,d+0.5,e+0.5,B(258),1.0+N(f),N(f)*0.699999988079071+0.30000001192092896);g=d-1|0;$p=1;case 1:$z=AAE(b,c,g,e);if(C()){break _;}h=$z;if(h){g=0;i=c;j=d;k=e;while(g<3){BV(b,B(255),i+N(f),j+N(f)*0.5+0.5,k+N(f),0.0,0.0,
0.0);g=g+1|0;}return;}L();l=Bgi;$p=2;case 2:$z=AF1(l,b,c,g,e);if(C()){break _;}g=$z;if(g){g=0;i=c;j=d;k=e;while(g<3){BV(b,B(255),i+N(f),j+N(f)*0.5+0.5,k+N(f),0.0,0.0,0.0);g=g+1|0;}return;}l=Bgi;g=c-1|0;$p=3;case 3:a:{$z=AF1(l,b,g,d,e);if(C()){break _;}g=$z;if(g){g=0;i=c;m=d;n=e;while(true){if(g>=2)break a;j=i+N(f)*0.10000000149011612;k=m+N(f);o=n+N(f);BV(b,B(255),j,k,o,0.0,0.0,0.0);g=g+1|0;}}}l=Bgi;h=c+1|0;$p=4;case 4:a:{$z=AF1(l,b,h,d,e);if(C()){break _;}g=$z;if(g){g=0;i=h;m=d;n=e;while(true){if(g>=2)break a;j
=i-N(f)*0.10000000149011612;k=m+N(f);o=n+N(f);BV(b,B(255),j,k,o,0.0,0.0,0.0);g=g+1|0;}}}l=Bgi;g=e-1|0;$p=5;case 5:a:{$z=AF1(l,b,c,d,g);if(C()){break _;}g=$z;if(g){g=0;i=c;k=d;n=e;while(true){if(g>=2)break a;j=i+N(f);m=k+N(f);o=n+N(f)*0.10000000149011612;BV(b,B(255),j,m,o,0.0,0.0,0.0);g=g+1|0;}}}l=Bgi;g=e+1|0;$p=6;case 6:a:{$z=AF1(l,b,c,d,g);if(C()){break _;}h=$z;if(h){h=0;o=c;p=d;j=g;while(true){if(h>=2)break a;q=o+N(f);i=p+N(f);n=j-N(f)*0.10000000149011612;BV(b,B(255),q,i,n,0.0,0.0,0.0);h=h+1|0;}}}l=Bgi;d=
d+1|0;$p=7;case 7:a:{$z=AF1(l,b,c,d,e);if(C()){break _;}g=$z;if(g){g=0;i=c;j=d;n=e;while(true){if(g>=2)break a;q=i+N(f);k=j-N(f)*0.10000000149011612;o=n+N(f);BV(b,B(255),q,k,o,0.0,0.0,0.0);g=g+1|0;}}}return;default:E$();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,$p);}
function Eg(){O.call(this);}
function AOG(a,b,c,d,e){var f,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=a.ta();$p=1;case 1:AFU(b,c,d,e,f);if(C()){break _;}return;default:E$();}}C4().s(a,b,c,d,e,f,$p);}
function AL0(a,b,c,d,e){var $p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AFN(b,c,d,e);if(C()){break _;}return;default:E$();}}C4().s(a,b,c,d,e,$p);}
function AAd(){Eg.call(this);}
function BcD(a,b){var c=new AAd();AUT(c,a,b);return c;}
function AUT(a,b,c){C9(a,b,c,Bg4);}
function AXk(a){return Bcm();}
function A50(a){return 0;}
function ZA(){O.call(this);this.cG=null;}
function A$I(a,b){var c=new ZA();A66(c,a,b);return c;}
function A66(a,b,c){C9(a,b,c.ba,c.b_);a.cG=c;BH(a,c.qf);Dn(a,c.nQ/3.0);a.gJ=c.gJ;}
function A5D(a){return 0;}
function AV6(a){return 0;}
function AYW(a){return 10;}
function APC(a,b,c,d,e,f){var $p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AGv(a,b,c,d,e,f);if(C()){break _;}c=$z;return c;default:E$();}}C4().s(a,b,c,d,e,f,$p);}
function AJB(a,b,c,d,e,f,g){var h,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AEL(b,c,d,e);if(C()){break _;}h=$z;if(!h){Bn(a,0.0,0.0,0.0,0.5,0.5,1.0);$p=2;continue _;}if(h==1){Bn(a,0.0,0.0,0.0,0.5,1.0,1.0);$p=4;continue _;}if(h==2){Bn(a,0.0,0.0,0.0,1.0,0.5,0.5);$p=6;continue _;}if(h!=3){Bn(a,0.0,0.0,0.0,1.0,1.0,1.0);return;}Bn(a,0.0,0.0,0.0,1.0,1.0,0.5);$p=8;continue _;case 2:ALy(a,b,c,d,e,f,
g);if(C()){break _;}Bn(a,0.5,0.0,0.0,1.0,1.0,1.0);$p=3;case 3:ALy(a,b,c,d,e,f,g);if(C()){break _;}Bn(a,0.0,0.0,0.0,1.0,1.0,1.0);return;case 4:ALy(a,b,c,d,e,f,g);if(C()){break _;}Bn(a,0.5,0.0,0.0,1.0,0.5,1.0);$p=5;case 5:ALy(a,b,c,d,e,f,g);if(C()){break _;}Bn(a,0.0,0.0,0.0,1.0,1.0,1.0);return;case 6:ALy(a,b,c,d,e,f,g);if(C()){break _;}Bn(a,0.0,0.0,0.5,1.0,1.0,1.0);$p=7;case 7:ALy(a,b,c,d,e,f,g);if(C()){break _;}Bn(a,0.0,0.0,0.0,1.0,1.0,1.0);return;case 8:ALy(a,b,c,d,e,f,g);if(C()){break _;}Bn(a,0.0,0.0,0.5,1.0,
0.5,1.0);$p=9;case 9:ALy(a,b,c,d,e,f,g);if(C()){break _;}Bn(a,0.0,0.0,0.0,1.0,1.0,1.0);return;default:E$();}}C4().s(a,b,c,d,e,f,g,h,$p);}
function AHE(a,b,c,d,e,f){var g,h,i,j,k,l,m,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=d+1|0;$p=1;case 1:$z=AB3(b,c,g,e);if(C()){break _;}h=$z;if(!h.dw()){$p=2;continue _;}i=a.cG.b;$p=11;continue _;case 2:AIs(a,b,c,d,e);if(C()){break _;}i=c+1|0;j=d-1|0;$p=3;case 3:AIs(a,b,i,j,e);if(C()){break _;}k=c-1|0;$p=4;case 4:AIs(a,b,k,j,e);if(C()){break _;}l=e-1|0;$p=5;case 5:AIs(a,
b,c,j,l);if(C()){break _;}m=e+1|0;$p=6;case 6:AIs(a,b,c,j,m);if(C()){break _;}$p=7;case 7:AIs(a,b,i,g,e);if(C()){break _;}$p=8;case 8:AIs(a,b,k,g,e);if(C()){break _;}$p=9;case 9:AIs(a,b,c,g,l);if(C()){break _;}$p=10;case 10:AIs(a,b,c,g,m);if(C()){break _;}h=a.cG;$p=12;continue _;case 11:APy(b,c,d,e,i);if(C()){break _;}h=a.cG;$p=12;case 12:h.e1(b,c,d,e,f);if(C()){break _;}return;default:E$();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function AIs(a,b,c,d,e){var f,g,h,i,j,k,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=APN(a,b,c,d,e);if(C()){break _;}f=$z;if(!f)return;g=(-1);f=c+1|0;h=d+1|0;$p=2;case 2:$z=APN(a,b,f,h,e);if(C()){break _;}i=$z;if(i)g=0;i=c-1|0;$p=3;case 3:$z=APN(a,b,i,h,e);if(C()){break _;}j=$z;if(j)g=1;j=e+1|0;$p=4;case 4:$z=APN(a,b,c,h,j);if(C()){break _;}k=$z;if(k)g=2;k=e-1|0;$p=
5;case 5:$z=APN(a,b,c,h,k);if(C()){break _;}h=$z;if(h)g=3;if(g<0){$p=6;continue _;}if(g<0){h=d-1|0;$p=8;continue _;}if(g<0)return;$p=11;continue _;case 6:$z=ADB(a,b,f,d,e);if(C()){break _;}h=$z;if(h){$p=7;continue _;}$p=9;continue _;case 7:$z=ADB(a,b,i,d,e);if(C()){break _;}h=$z;if(!h)g=0;$p=9;continue _;case 8:$z=APN(a,b,i,h,e);if(C()){break _;}i=$z;if(i)g=0;$p=12;continue _;case 9:$z=ADB(a,b,i,d,e);if(C()){break _;}h=$z;if(h){$p=10;continue _;}$p=13;continue _;case 10:$z=ADB(a,b,f,d,e);if(C()){break _;}h=
$z;if(!h)g=1;$p=13;continue _;case 11:AKw(b,c,d,e,g);if(C()){break _;}return;case 12:$z=APN(a,b,f,h,e);if(C()){break _;}f=$z;if(f)g=1;$p=15;continue _;case 13:$z=ADB(a,b,c,d,j);if(C()){break _;}h=$z;if(h){$p=14;continue _;}$p=16;continue _;case 14:$z=ADB(a,b,c,d,k);if(C()){break _;}h=$z;if(!h)g=2;$p=16;continue _;case 15:$z=APN(a,b,c,h,k);if(C()){break _;}f=$z;if(f)g=2;$p=18;continue _;case 16:$z=ADB(a,b,c,d,k);if(C()){break _;}h=$z;if(h){$p=17;continue _;}if(g<0){h=d-1|0;$p=8;continue _;}if(g<0)return;$p=11;continue _;case 17:$z
=ADB(a,b,c,d,j);if(C()){break _;}h=$z;if(!h)g=3;if(g<0){h=d-1|0;$p=8;continue _;}if(g<0)return;$p=11;continue _;case 18:$z=APN(a,b,c,h,j);if(C()){break _;}f=$z;if(f)g=3;if(g<0)return;$p=11;continue _;default:E$();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function ADB(a,b,c,d,e){var $p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AB3(b,c,d,e);if(C()){break _;}b=$z;return b.dw();default:E$();}}C4().s(a,b,c,d,e,$p);}
function APN(a,b,c,d,e){var f,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=ACy(b,c,d,e);if(C()){break _;}f=$z;if(!f)c=0;else{L();c=BeI.data[f].em()!=10?0:1;}return c;default:E$();}}C4().s(a,b,c,d,e,f,$p);}
function APf(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=a.cG;$p=1;case 1:g.kQ(b,c,d,e,f);if(C()){break _;}return;default:E$();}}C4().s(a,b,c,d,e,f,g,$p);}
function ABf(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=a.cG;$p=1;case 1:g.q$(b,c,d,e,f);if(C()){break _;}return;default:E$();}}C4().s(a,b,c,d,e,f,g,$p);}
function ADq(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=a.cG;$p=1;case 1:g.nr(b,c,d,e,f);if(C()){break _;}return;default:E$();}}C4().s(a,b,c,d,e,f,g,$p);}
function AMY(a,b,c,d,e){var f,g,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=a.cG;$p=1;case 1:$z=f.Cy(b,c,d,e);if(C()){break _;}g=$z;return g;default:E$();}}C4().s(a,b,c,d,e,f,g,$p);}
function A8T(a,b){return a.cG.yr(b);}
function A77(a){return a.cG.pR();}
function A4b(a,b,c){return a.cG.dX(b,c);}
function A0u(a,b){return a.cG.eH(b);}
function AXy(a,b,c){return a.cG.eY(b,c);}
function A71(a,b){return a.cG.ci(b);}
function AM8(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=a.cG;$p=1;case 1:$z=g.uj(b,c,d,e,f);if(C()){break _;}c=$z;return c;default:E$();}}C4().s(a,b,c,d,e,f,g,$p);}
function AVK(a){return a.cG.mv();}
function AMi(a,b,c,d,e){var f,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=a.cG;$p=1;case 1:$z=f.oS(b,c,d,e);if(C()){break _;}b=$z;return b;default:E$();}}C4().s(a,b,c,d,e,f,$p);}
function ACL(a,b,c,d,e,f,g){var h,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:h=a.cG;$p=1;case 1:h.qF(b,c,d,e,f,g);if(C()){break _;}return;default:E$();}}C4().s(a,b,c,d,e,f,g,h,$p);}
function AYC(a){return a.cG.pg();}
function AYP(a,b,c){return a.cG.o7(b,c);}
function AMq(a,b,c,d,e){var f,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=a.cG;$p=1;case 1:$z=f.fS(b,c,d,e);if(C()){break _;}c=$z;return c;default:E$();}}C4().s(a,b,c,d,e,f,$p);}
function ACG(a,b,c,d,e){var f,g,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=0;$p=1;case 1:AHE(a,b,c,d,e,f);if(C()){break _;}g=a.cG;$p=2;case 2:g.fD(b,c,d,e);if(C()){break _;}return;default:E$();}}C4().s(a,b,c,d,e,f,g,$p);}
function YD(a,b,c,d,e){var f,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=a.cG;$p=1;case 1:f.ly(b,c,d,e);if(C()){break _;}return;default:E$();}}C4().s(a,b,c,d,e,f,$p);}
function AHQ(a,b,c,d,e,f,g){var h,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:h=a.cG;$p=1;case 1:h.HS(b,c,d,e,f,g);if(C()){break _;}return;default:E$();}}C4().s(a,b,c,d,e,f,g,h,$p);}
function AM0(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=a.cG;$p=1;case 1:g.IP(b,c,d,e,f);if(C()){break _;}return;default:E$();}}C4().s(a,b,c,d,e,f,g,$p);}
function AQU(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=a.cG;$p=1;case 1:g.oH(b,c,d,e,f);if(C()){break _;}return;default:E$();}}C4().s(a,b,c,d,e,f,g,$p);}
function AQZ(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=a.cG;$p=1;case 1:g.e8(b,c,d,e,f);if(C()){break _;}return;default:E$();}}C4().s(a,b,c,d,e,f,g,$p);}
function AGL(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=a.cG;$p=1;case 1:$z=g.lD(b,c,d,e,f);if(C()){break _;}c=$z;return c;default:E$();}}C4().s(a,b,c,d,e,f,g,$p);}
function Zb(a,b,c,d,e){var f,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=a.cG;$p=1;case 1:f.sM(b,c,d,e);if(C()){break _;}return;default:E$();}}C4().s(a,b,c,d,e,f,$p);}
function AFS(){Eg.call(this);this.fn=null;}
function A_3(a){var b=new AFS();A60(b,a);return b;}
function A60(a,b){D1(a,b,Bg5);a.fn=new DB;a.ba=26;}
function AEA(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(f==1)return a.ba-1|0;if(!f)return a.ba-1|0;g=e-1|0;$p=1;case 1:$z=b.ej(c,d,g);if(C()){break _;}h=$z;i=e+1|0;$p=2;case 2:$z=b.ej(c,d,i);if(C()){break _;}j=$z;k=c-1|0;$p=3;case 3:$z=b.ej(k,d,e);if(C()){break _;}l=$z;m=c+1|0;$p=4;case 4:$z=b.ej(m,
d,e);if(C()){break _;}n=$z;if(h!=a.b&&j!=a.b){if(l!=a.b&&n!=a.b){k=3;L();if(Bgt.data[h]&&!Bgt.data[j])k=3;if(Bgt.data[j]&&!Bgt.data[h])k=2;if(Bgt.data[l]&&!Bgt.data[n])k=5;if(Bgt.data[n]&&!Bgt.data[l])k=4;return f!=k?a.ba:a.ba+1|0;}if(f!=4&&f!=5){o=0;if(l==a.b)o=(-1);c=l!=a.b?m:k;$p=7;continue _;}return a.ba;}if(f!=2&&f!=3){o=0;if(h==a.b)o=(-1);c=h!=a.b?i:g;$p=5;continue _;}return a.ba;case 5:$z=b.ej(k,d,c);if(C()){break _;}p=$z;if(h==a.b)i=g;$p=6;case 6:$z=b.ej(m,d,i);if(C()){break _;}m=$z;if(f==4)o=(-1)-o
|0;i=5;L();if(!(!Bgt.data[l]&&!Bgt.data[p])&&!Bgt.data[n]&&!Bgt.data[m])i=5;if(!(!Bgt.data[n]&&!Bgt.data[m])&&!Bgt.data[l]&&!Bgt.data[p])i=4;return (f!=i?a.ba+32|0:a.ba+16|0)+o|0;case 7:$z=b.ej(c,d,g);if(C()){break _;}g=$z;if(l==a.b)m=k;$p=8;case 8:$z=b.ej(m,d,i);if(C()){break _;}m=$z;if(f==3)o=(-1)-o|0;i=3;L();if(!(!Bgt.data[h]&&!Bgt.data[g])&&!Bgt.data[j]&&!Bgt.data[m])i=3;if(!(!Bgt.data[j]&&!Bgt.data[m])&&!Bgt.data[h]&&!Bgt.data[g])i=2;return (f!=i?a.ba+32|0:a.ba+16|0)+o|0;default:E$();}}C4().s(a,b,c,d,e,
f,g,h,i,j,k,l,m,n,o,p,$p);}
function A84(a,b){return b==1?a.ba-1|0:!b?a.ba-1|0:b!=3?a.ba:a.ba+1|0;}
function AJ3(a,b,c,d,e){var f,g,h,i,j,k,l,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=0;g=c-1|0;$p=1;case 1:$z=ACy(b,g,d,e);if(C()){break _;}h=$z;if(h==a.b)f=1;h=c+1|0;$p=2;case 2:$z=ACy(b,h,d,e);if(C()){break _;}i=$z;if(i==a.b)f=f+1|0;i=e-1|0;$p=3;case 3:$z=ACy(b,c,d,i);if(C()){break _;}j=$z;if(j==a.b)f=f+1|0;k=e+1|0;$p=4;case 4:$z=ACy(b,c,d,k);if(C()){break _;}l=$z;if
(l==a.b)f=f+1|0;if(f>1)return 0;$p=5;case 5:$z=AIY(a,b,g,d,e);if(C()){break _;}j=$z;if(j)return 0;$p=6;case 6:$z=AIY(a,b,h,d,e);if(C()){break _;}e=$z;if(e)return 0;$p=7;case 7:$z=AIY(a,b,c,d,i);if(C()){break _;}e=$z;if(e)return 0;$p=8;case 8:$z=AIY(a,b,c,d,k);if(C()){break _;}c=$z;return c?0:1;default:E$();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,$p);}
function AIY(a,b,c,d,e){var f,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=ACy(b,c,d,e);if(C()){break _;}f=$z;if(f!=a.b)return 0;f=c-1|0;$p=2;case 2:$z=ACy(b,f,d,e);if(C()){break _;}f=$z;if(f==a.b)return 1;f=c+1|0;$p=3;case 3:$z=ACy(b,f,d,e);if(C()){break _;}f=$z;if(f==a.b)return 1;f=e-1|0;$p=4;case 4:$z=ACy(b,c,d,f);if(C()){break _;}f=$z;if(f==a.b)return 1;e=e+1|0;$p=5;case 5:$z=ACy(b,c,d,e);if(C()){break _;}c
=$z;return c!=a.b?0:1;default:E$();}}C4().s(a,b,c,d,e,f,$p);}
function ASH(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=ANy(b,c,d,e);if(C()){break _;}f=$z;g=f;h=0;i=27;j=c;k=d;l=e;while(h<i){f=Rf(g,h);if(f!==null){m=N(a.fn)*0.800000011920929+0.10000000149011612;n=N(a.fn)*0.800000011920929+0.10000000149011612;o
=N(a.fn)*0.800000011920929+0.10000000149011612;p=j+m;q=k+n;r=l+o;if(f.p>0){s=E(a.fn,21)+10|0;if(s>f.p)s=f.p;f.p=f.p-s|0;t=Hd(b,p,q,r,Or(f.bA,s,f.en));t.g=C0(a.fn)*0.05000000074505806;t.i=C0(a.fn)*0.05000000074505806+0.20000000298023224;t.h=C0(a.fn)*0.05000000074505806;$p=3;continue _;}}h=h+1|0;}$p=2;case 2:AL0(a,b,c,d,e);if(C()){break _;}return;case 3:AOi(b,t);if(C()){break _;}a:while(true){if(f.p>0){s=E(a.fn,21)+10|0;if(s>f.p)s=f.p;f.p=f.p-s|0;t=Hd(b,p,q,r,Or(f.bA,s,f.en));t.g=C0(a.fn)*0.05000000074505806;t.i
=C0(a.fn)*0.05000000074505806+0.20000000298023224;t.h=C0(a.fn)*0.05000000074505806;continue _;}while(true){h=h+1|0;if(h>=i)break a;f=Rf(g,h);if(f===null)continue;else break;}m=N(a.fn)*0.800000011920929+0.10000000149011612;n=N(a.fn)*0.800000011920929+0.10000000149011612;o=N(a.fn)*0.800000011920929+0.10000000149011612;p=j+m;q=k+n;r=l+o;}$p=2;continue _;default:E$();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,$p);}
function AFY(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=ANy(b,c,d,e);if(C()){break _;}g=$z;h=g;i=d+1|0;$p=2;case 2:$z=AAE(b,c,i,e);if(C()){break _;}j=$z;if(j)return 1;k=c-1|0;$p=3;case 3:$z=ACy(b,k,d,e);if(C()){break _;}j=$z;if(j==a.b){$p=5;continue _;}l=c+1|0;$p=4;case 4:$z=ACy(b,l,
d,e);if(C()){break _;}j=$z;if(j==a.b){$p=7;continue _;}m=e-1|0;$p=6;continue _;case 5:$z=AAE(b,k,i,e);if(C()){break _;}j=$z;if(j)return 1;l=c+1|0;$p=4;continue _;case 6:$z=ACy(b,c,d,m);if(C()){break _;}j=$z;if(j==a.b){$p=9;continue _;}n=e+1|0;$p=8;continue _;case 7:$z=AAE(b,l,i,e);if(C()){break _;}j=$z;if(j)return 1;m=e-1|0;$p=6;continue _;case 8:$z=ACy(b,c,d,n);if(C()){break _;}j=$z;if(j!=a.b){$p=10;continue _;}$p=11;continue _;case 9:$z=AAE(b,c,i,m);if(C()){break _;}j=$z;if(j)return 1;n=e+1|0;$p=8;continue _;case 10:$z
=ACy(b,k,d,e);if(C()){break _;}j=$z;if(j==a.b){g=new Ii;o=B(259);$p=12;continue _;}g=h;$p=13;continue _;case 11:$z=AAE(b,c,i,n);if(C()){break _;}j=$z;if(j)return 1;$p=10;continue _;case 12:$z=ANy(b,k,d,e);if(C()){break _;}p=$z;K6(g,o,p,h);$p=13;case 13:$z=ACy(b,l,d,e);if(C()){break _;}j=$z;if(j!=a.b){o=g;$p=15;continue _;}o=new Ii;p=B(259);g=g;$p=14;case 14:$z=ANy(b,l,d,e);if(C()){break _;}h=$z;K6(o,p,g,h);$p=15;case 15:$z=ACy(b,c,d,m);if(C()){break _;}e=$z;if(e==a.b){g=new Ii;p=B(259);$p=16;continue _;}g=o;$p
=17;continue _;case 16:$z=ANy(b,c,d,m);if(C()){break _;}h=$z;K6(g,p,h,o);$p=17;case 17:$z=ACy(b,c,d,n);if(C()){break _;}e=$z;if(e==a.b){o=new Ii;p=B(259);g=g;$p=18;continue _;}o=g;b=o;$p=19;continue _;case 18:$z=ANy(b,c,d,n);if(C()){break _;}b=$z;K6(o,p,g,b);b=o;$p=19;case 19:Y3(f,b);if(C()){break _;}return 1;default:E$();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,$p);}
function AZD(a){return Bba();}
function AKJ(){O.call(this);}
function BbH(a,b){var c=new AKJ();AUW(c,a,b);return c;}
function AUW(a,b,c){C9(a,b,c,Bhn);}
function AEX(a,b,c,d,e){return null;}
function ATZ(a){return 0;}
function A5b(a){return 0;}
function A7p(a){return 5;}
function A9L(a,b){return 1;}
function AUE(a){return 0;}
function AHx(){O.call(this);}
function Bbm(a){var b=new AHx();AZi(b,a);return b;}
function AZi(a,b){D1(a,b,Bg5);a.ba=59;}
function AWw(a,b){if(b==1)b=a.ba-16|0;else if(!b){L();b=BeU.ci(0);}else b=b!=2&&b!=4?a.ba:a.ba+1|0;return b;}
function AGS(a,b,c,d,e,f){var $p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:ANr(f);if(C()){break _;}return 1;default:E$();}}C4().s(a,b,c,d,e,f,$p);}
function AKI(){F4.call(this);}
function Bcq(a,b){var c=new AKI();AZP(c,a,b);return c;}
function AZP(a,b,c){Lw(a,b,c);a.ba=c;Fe(a,1);Bn(a,0.0,0.0,0.0,1.0,0.25,1.0);}
function AYG(a,b){L();return b!=BgW.b?0:1;}
function AJo(a,b,c,d,e,f){var g,h,i,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AJq(a,b,c,d,e);if(C()){break _;}g=d+1|0;$p=2;case 2:$z=XB(b,c,g,e);if(C()){break _;}h=$z;if(h<9)return;$p=3;case 3:$z=AEL(b,c,d,e);if(C()){break _;}h=$z;if(h>=7)return;$p=4;case 4:$z=Zd(a,b,c,d,e);if(C()){break _;}i=$z;if(E(f,100.0/i|0))return;g=h+1|0;$p=5;case 5:AKw(b,c,d,e,g);if(C()){break _;}return;default:
E$();}}C4().s(a,b,c,d,e,f,g,h,i,$p);}
function Zd(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=1.0;g=e-1|0;$p=1;case 1:$z=ACy(b,c,d,g);if(C()){break _;}h=$z;i=e+1|0;$p=2;case 2:$z=ACy(b,c,d,i);if(C()){break _;}j=$z;k=c-1|0;$p=3;case 3:$z=ACy(b,k,d,e);if
(C()){break _;}l=$z;m=c+1|0;$p=4;case 4:$z=ACy(b,m,d,e);if(C()){break _;}n=$z;$p=5;case 5:$z=ACy(b,k,d,g);if(C()){break _;}o=$z;$p=6;case 6:$z=ACy(b,m,d,g);if(C()){break _;}p=$z;$p=7;case 7:$z=ACy(b,m,d,i);if(C()){break _;}q=$z;$p=8;case 8:$z=ACy(b,k,d,i);if(C()){break _;}r=$z;s=l!=a.b&&n!=a.b?0:1;t=h!=a.b&&j!=a.b?0:1;u=o!=a.b&&p!=a.b&&q!=a.b&&r!=a.b?0:1;o=d-1|0;while(k<=m){v=g;if(v<=i){$p=9;continue _;}k=k+1|0;}a:{if(!u){if(!s)break a;if(!t)break a;}f=f/2.0;}return f;case 9:$z=ACy(b,k,o,v);if(C()){break _;}w
=$z;x=0.0;L();if(w==BgW.b){x=1.0;$p=10;continue _;}if(!(k==c&&v==e))x=x/4.0;f=f+x;v=v+1|0;while(true){if(v<=i){continue _;}k=k+1|0;if(k>m)break;v=g;}b:{if(!u){if(!s)break b;if(!t)break b;}f=f/2.0;}return f;case 10:$z=AEL(b,k,o,v);if(C()){break _;}d=$z;if(d>0)x=3.0;if(!(k==c&&v==e))x=x/4.0;f=f+x;v=v+1|0;while(true){if(v<=i){$p=9;continue _;}k=k+1|0;if(k>m)break;v=g;}c:{if(!u){if(!s)break c;if(!t)break c;}f=f/2.0;}return f;default:E$();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,$p);}
function A8q(a,b,c){if(c<0)c=7;return a.ba+c|0;}
function A4B(a){return 6;}
function ANA(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=0;h=c;i=d;j=e;while(g<3){if(E(b.q,15)<=f){k=N(b.q)*0.699999988079071+0.15000000596046448;l=N(b.q)*0.699999988079071+0.15000000596046448;m=N(b.q)*0.699999988079071+0.15000000596046448;n=new E9;o=h+k;p=i+l;q=j+m;r=new Cd;BB();DD(r,
Bhv);Hc(n,b,o,p,q,r);n.g$=10;$p=1;continue _;}g=g+1|0;}return;case 1:AOi(b,n);if(C()){break _;}while(true){g=g+1|0;if(g>=3)break;if(E(b.q,15)>f)continue;else{k=N(b.q)*0.699999988079071+0.15000000596046448;l=N(b.q)*0.699999988079071+0.15000000596046448;m=N(b.q)*0.699999988079071+0.15000000596046448;n=new E9;o=h+k;p=i+l;q=j+m;r=new Cd;BB();DD(r,Bhv);Hc(n,b,o,p,q,r);n.g$=10;continue _;}}return;default:E$();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,$p);}
function A0Y(a,b,c){var d;c=Dz();d=new U;W(d);Cg(c,V(Bf(I(d,B(260)),b)));if(b!=7)b=(-1);else{BB();b=Bhw.cW;}return b;}
function A4S(a,b){return 1;}
function AQR(){O.call(this);}
function BbT(a){var b=new AQR();A2K(b,a);return b;}
function A2K(a,b){D1(a,b,Bhg);a.ba=87;Fe(a,1);Bn(a,0.0,0.0,0.0,1.0,0.9375,1.0);Gx(a,255);}
function AA6(a,b,c,d,e){return D4(c+0|0,d+0|0,e+0|0,c+1|0,d+1|0,e+1|0);}
function AU5(a){return 0;}
function A1A(a){return 0;}
function A_f(a,b,c){b=R(b,1);return !b&&c>0?a.ba-1|0:b?2:a.ba;}
function ANe(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(E(f,5))return;g=c-4|0;h=c+4|0;i=d+1|0;j=e-4|0;k=e+4|0;a:while(true){if(g>h){if(!0){$p=1;continue _;}g=7;$p=2;continue _;}l=d;while(l<=i){m=j;if(m<=k)break a;l=l+1|0;}g=g+1|0;}$p=4;continue _;case 1:$z=AEL(b,c,d,e);if(C()){break _;}h=$z;if(h>0){g=h-1|0;$p=3;continue _;}g
=c-0|0;h=c+0|0;m=e-0|0;j=e+0|0;while(true){if(g>h){if(0)return;L();g=BeL.b;$p=5;continue _;}l=m;if(l<=j)break;g=g+1|0;}$p=6;continue _;case 2:AKw(b,c,d,e,g);if(C()){break _;}return;case 3:AKw(b,c,d,e,g);if(C()){break _;}return;case 4:$z=AB3(b,g,l,m);if(C()){break _;}f=$z;if(f===BfJ)g=1;else{m=m+1|0;b:while(true){if(m<=k){continue _;}l=l+1|0;while(l>i){g=g+1|0;if(g>h)break b;l=d;}m=j;}g=0;}if(!g){$p=1;continue _;}g=7;$p=2;continue _;case 5:APy(b,c,d,e,g);if(C()){break _;}return;case 6:$z=ACy(b,g,i,l);if(C())
{break _;}n=$z;L();if(n==BgV.b)g=1;else{l=l+1|0;while(true){if(l<=j){continue _;}g=g+1|0;if(g>h)break;l=m;}g=0;}if(g)return;L();g=BeL.b;$p=5;continue _;default:E$();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function AKP(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(E(b.q,4))return;L();g=BeL.b;$p=1;case 1:APy(b,c,d,e,g);if(C()){break _;}return;default:E$();}}C4().s(a,b,c,d,e,f,g,$p);}
function Ya(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=d+1|0;$p=1;case 1:$z=AB3(b,c,f,e);if(C()){break _;}g=$z;if(!g.dw())return;L();f=BeL.b;$p=2;case 2:APy(b,c,d,e,f);if(C()){break _;}return;default:E$();}}C4().s(a,b,c,d,e,f,g,$p);}
function AW4(a,b,c){L();return BeL.dX(0,c);}
function AF3(){Eg.call(this);this.wz=0;}
function A4I(a,b){var c=new AF3();ATT(c,a,b);return c;}
function ATT(a,b,c){D1(a,b,Bg4);a.wz=c;a.ba=45;}
function ACw(a,b,c,d,e){var f,g,h,i,j,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AOG(a,b,c,d,e);if(C()){break _;}f=e-1|0;$p=2;case 2:$z=ACy(b,c,d,f);if(C()){break _;}g=$z;f=e+1|0;$p=3;case 3:$z=ACy(b,c,d,f);if(C()){break _;}f=$z;h=c-1|0;$p=4;case 4:$z=ACy(b,h,d,e);if(C()){break _;}h=$z;i=c+1|0;$p=5;case 5:$z=ACy(b,i,d,e);if(C()){break _;}i=$z;j=3;L();if(Bgt.data[g]&&!Bgt.data[f])j
=3;if(Bgt.data[f]&&!Bgt.data[g])j=2;if(Bgt.data[h]&&!Bgt.data[i])j=5;if(Bgt.data[i]&&!Bgt.data[h])j=4;$p=6;case 6:AKw(b,c,d,e,j);if(C()){break _;}return;default:E$();}}C4().s(a,b,c,d,e,f,g,h,i,j,$p);}
function AKf(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(f==1){L();return BeO.ba;}if(!f){L();return BeO.ba;}$p=1;case 1:$z=b.eI(c,d,e);if(C()){break _;}g=$z;return f!=g?a.ba:!a.wz?a.ba-1|0:a.ba+16|0;default:E$();}}C4().s(a,b,c,d,e,f,g,$p);}
function AEo(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!a.wz)return;$p=1;case 1:$z=AEL(b,c,d,e);if(C()){break _;}g=$z;h=c+0.5;i=d+0.0+N(f)*6.0/16.0;j=e+0.5;k=N(f)*0.6000000238418579-0.30000001192092896;if(g==4){l=h-0.5199999809265137;m=i;n=j+k;BV(b,B(256),l,m,n,0.0,0.0,0.0);BV(b,B(257),
l,m,n,0.0,0.0,0.0);}else if(g==5){l=h+0.5199999809265137;m=i;n=j+k;BV(b,B(256),l,m,n,0.0,0.0,0.0);BV(b,B(257),l,m,n,0.0,0.0,0.0);}else if(g==2){l=h+k;m=i;n=j-0.5199999809265137;BV(b,B(256),l,m,n,0.0,0.0,0.0);BV(b,B(257),l,m,n,0.0,0.0,0.0);}else if(g==3){o=h+k;p=i;q=j+0.5199999809265137;BV(b,B(256),o,p,q,0.0,0.0,0.0);BV(b,B(257),o,p,q,0.0,0.0,0.0);}return;default:E$();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,$p);}
function AU0(a,b){if(b==1){L();b=BeO.b;}else if(!b){L();b=BeO.b;}else b=b!=3?a.ba:a.ba-1|0;return b;}
function AGV(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=ANy(b,c,d,e);if(C()){break _;}b=$z;g=b;$p=2;case 2:AO5(f,g);if(C()){break _;}return 1;default:E$();}}C4().s(a,b,c,d,e,f,g,$p);}
function A72(a){return Baw();}
function Vy(){var a=this;Eg.call(a);a.Da=null;a.Dt=0;}
function Bhx(a,b,c){var d=new Vy();AHu(d,a,b,c);return d;}
function AHu(a,b,c,d){D1(a,b,Bg5);a.ba=4;a.Da=c;Bn(a,0.25,0.0,0.25,0.75,1.625,0.75);a.Dt=d;}
function AYL(a){return (-1);}
function A57(a){return 0;}
function A51(a){return 0;}
function A1L(a){var b,c,$$je;a:{try{b=Zr(a.Da);}catch($$e){$$je=Y($$e);if($$je instanceof BD){b=$$je;break a;}else{throw $$e;}}return b;}c=new B6;WW(c,b);M(c);}
function AGO(a,b,c,d,e){return 1;}
function A8z(a,b,c){return a.Dt;}
function ZV(a,b,c,d,e,f){var $p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=d-1|0;$p=1;case 1:$z=AAE(b,c,f,e);if(C()){break _;}f=$z;if(f)return;$p=2;case 2:$z=AEL(b,c,d,e);if(C()){break _;}f=$z;$p=3;case 3:Yj(a,b,c,d,e,f);if(C()){break _;}f=0;$p=4;case 4:APy(b,c,d,e,f);if(C()){break _;}return;default:E$();}}C4().s(a,b,c,d,e,f,$p);}
function D$(){var a=this;D.call(a);a.ch=null;a.dK=0;a.dI=0;a.dR=0;}
var Bhy=null;var Bhz=null;function BhA(){var a=new D$();ANw(a);return a;}
function ANw(a){return;}
function J2(b,c){var d;if(!D0(Bhz,c)){BP(Bhy,c,b);BP(Bhz,b,c);return;}b=new Cc;d=new U;W(d);Bo(b,V(I(I(d,B(261)),c)));M(b);}
function AFM(a){return;}
function AMh(a){var b,c,d,e,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.ch;c=a.dK;d=a.dI;e=a.dR;$p=1;case 1:$z=AEL(b,c,d,e);if(C()){break _;}c=$z;return c;default:E$();}}C4().s(a,b,c,d,e,$p);}
function ACh(a){var b,c,d,e,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.ch;c=a.dK;d=a.dI;e=a.dR;$p=1;case 1:AGu(b,c,d,e);if(C()){break _;}return;default:E$();}}C4().s(a,b,c,d,e,$p);}
function AK3(a,b,c,d){var e,f,g;e=a.dK+0.5-b;f=a.dI+0.5-c;g=a.dR+0.5-d;return e*e+f*f+g*g;}
function AFt(){Bhy=Df();Bhz=Df();J2(F(WZ),B(262));J2(F(Tk),B(263));J2(F(Jk),B(264));J2(F(Nz),B(265));}
function Jk(){var a=this;D$.call(a);a.gt=null;a.rD=0;}
function BhB(){var a=new Jk();AZZ(a);return a;}
function AZZ(a){var b,c;b=J(B4,4);c=b.data;c[0]=B(3);c[1]=B(3);c[2]=B(3);c[3]=B(3);a.gt=b;a.rD=(-1);}
function Bc(){var a=this;D.call(a);a.cW=0;a.eZ=0;a.fg=0;a.tc=0;}
var BhC=null;var Bg9=null;var BhD=null;var BhE=null;var BhF=null;var BhG=null;var BhH=null;var BhI=null;var Bf8=null;var Bht=null;var Bhu=null;var BhJ=null;var BhK=null;var BhL=null;var BhM=null;var BhN=null;var BhO=null;var BhP=null;var BhQ=null;var BhR=null;var BhS=null;var BhT=null;var BhU=null;var BhV=null;var BhW=null;var BhX=null;var BhY=null;var BhZ=null;var Bh0=null;var Bh1=null;var Bh2=null;var Bh3=null;var Bh4=null;var Bf$=null;var Bf7=null;var Bf9=null;var Bh5=null;var Bh6=null;var Bh7=null;var Bh8
=null;var Bh9=null;var Bhv=null;var Bhw=null;var Bh$=null;var Bh_=null;var Bia=null;var Bib=null;var Bic=null;var Bid=null;var Bie=null;var Bif=null;var Big=null;var Bih=null;var Bii=null;var Bij=null;var Bik=null;var Bil=null;var Bim=null;var Bin=null;var Bio=null;var Bip=null;var Biq=null;var Bir=null;var Bis=null;var Bhs=null;var Bf_=null;var Bit=null;var Biu=null;var Biv=null;var Bg8=null;var Biw=null;var Bix=null;var Biy=null;var Biz=null;var BiA=null;var BiB=null;function BB(){BB=Br(Bc);A7F();}
function ET(a){var b=new Bc();Dt(b,a);return b;}
function Dt(a,b){var c,d,e;BB();a.eZ=64;a.fg=32;c=256+b|0;a.cW=c;if(Bg9.data[c]!==null){d=Dz();e=new U;W(e);Cg(d,V(Bf(I(e,B(266)),b)));}Bg9.data[c]=a;}
function Bp(a,b){a.tc=b;return a;}
function A5w(a,b){return a.tc;}
function AGt(a,b,c,d,e,f,g,h){return 0;}
function A$G(a,b,c){return 1.0;}
function ASl(a,b,c,d){return b;}
function A2x(a){return a.eZ;}
function A7L(a){return a.fg;}
function AWa(a,b,c){return;}
function A45(a,b,c,d,e,f){return;}
function A_m(a,b){return 1;}
function AV3(a,b){return 0;}
function A3G(a,b,c){return;}
function A7F(){var b;BhC=Bbf();Bg9=J(Bc,1024);BhD=Bp(LJ(0,2),82);BhE=Bp(Of(1,2),98);BhF=Bp(NJ(2,2),114);BhG=Bp(Ba8(3),5);BhH=Bp(OC(4,4),10);BhI=Bp(Bad(5),21);Bf8=Bp(ET(6),37);Bht=Bp(ET(7),7);Bhu=Bp(ET(8),55);BhJ=Bp(ET(9),23);BhK=Bp(ET(10),39);BhL=Bp(Ny(11,2),66);BhM=Bp(Ny(12,0),64);BhN=Bp(LJ(13,0),80);BhO=Bp(Of(14,0),96);BhP=Bp(NJ(15,0),112);BhQ=Bp(Ny(16,1),65);BhR=Bp(LJ(17,1),81);BhS=Bp(Of(18,1),97);BhT=Bp(NJ(19,1),113);BhU=Bp(Ny(20,3),67);BhV=Bp(LJ(21,3),83);BhW=Bp(Of(22,3),99);BhX=Bp(NJ(23,3),115);BhY=Bp(ET(24),
53);BhZ=Bp(ET(25),71);Bh0=Bp(Bcx(26,10),72);Bh1=Bp(Ny(27,0),68);Bh2=Bp(LJ(28,0),84);Bh3=Bp(Of(29,0),100);Bh4=Bp(NJ(30,0),116);Bf$=Bp(ET(31),8);Bf7=Bp(ET(32),24);Bf9=Bp(ET(33),40);Bh5=Bp(Nv(34,0),128);Bh6=Bp(Nv(35,1),129);Bh7=Bp(Nv(36,2),130);Bh8=Bp(Nv(37,3),131);Bh9=Bp(Nv(38,4),132);b=new V0;L();AHJ(b,39,BgV.b);Bhv=Bp(b,9);Bhw=Bp(ET(40),25);Bh$=Bp(OC(41,5),41);Bh_=Bp(Dc(42,0,0,0),0);Bia=Bp(Dc(43,0,0,1),16);Bib=Bp(Dc(44,0,0,2),32);Bic=Bp(Dc(45,0,0,3),48);Bid=Bp(Dc(46,1,1,0),1);Bie=Bp(Dc(47,1,1,1),17);Bif=Bp(Dc(48,
1,1,2),33);Big=Bp(Dc(49,1,1,3),49);Bih=Bp(Dc(50,2,2,0),2);Bii=Bp(Dc(51,2,2,1),18);Bij=Bp(Dc(52,2,2,2),34);Bik=Bp(Dc(53,2,2,3),50);Bil=Bp(Dc(54,3,3,0),3);Bim=Bp(Dc(55,3,3,1),19);Bin=Bp(Dc(56,3,3,2),35);Bio=Bp(Dc(57,3,3,3),51);Bip=Bp(Dc(58,1,4,0),4);Biq=Bp(Dc(59,1,4,1),20);Bir=Bp(Dc(60,1,4,2),36);Bis=Bp(Dc(61,1,4,3),52);Bhs=Bp(ET(62),6);Bf_=Bp(OC(63,3),87);Bit=Bp(OC(64,8),88);Biu=Bp(Bab(65),26);Biv=Bp(OC(66,42),11);Bg8=Bp(Bcc(67),42);Biw=Bp(A_N(68),43);Bix=Bp(AP0(69,0),74);Biy=Bp(AP0(70,BfR.b),75);Biz=Bp(AP0(71,
BfS.b),76);BiA=Bp(BbG(72),135);BiB=Bp(BcR(73),104);}
function AIy(){O.call(this);}
function A_$(a){var b=new AIy();A2c(b,a);return b;}
function A2c(a,b){D1(a,b,Bg5);a.ba=97;Bn(a,0.0,0.0,0.0,1.0,1.0,1.0);}
function A$m(a,b,c){var d,e;if(b&&b!=1){d=Pr(a,c);if((d&&d!=2?0:1)^(b>3?0:1))return a.ba;b=((d/2|0)+(b&1^d)|0)+((c&4)/4|0)|0;e=a.ba-((c&8)*2|0)|0;if(b&1)e= -e;return e;}return a.ba;}
function A0R(a){return 0;}
function AXs(a){return 0;}
function ATP(a){return 7;}
function AGr(a,b,c,d,e){var $p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AHG(a,b,c,d,e);if(C()){break _;}$p=2;case 2:$z=K7(a,b,c,d,e);if(C()){break _;}b=$z;return b;default:E$();}}C4().s(a,b,c,d,e,$p);}
function ZC(a,b,c,d,e){var $p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AHG(a,b,c,d,e);if(C()){break _;}$p=2;case 2:$z=Nn(a,b,c,d,e);if(C()){break _;}b=$z;return b;default:E$();}}C4().s(a,b,c,d,e,$p);}
function AHG(a,b,c,d,e){var $p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=b.eI(c,d,e);if(C()){break _;}c=$z;AO4(a,Pr(a,c));return;default:E$();}}C4().s(a,b,c,d,e,$p);}
function AO4(a,b){Bn(a,0.0,0.0,0.0,1.0,2.0,1.0);if(!b)Bn(a,0.0,0.0,0.0,1.0,1.0,0.1875);if(b==1)Bn(a,0.8125,0.0,0.0,1.0,1.0,1.0);if(b==2)Bn(a,0.0,0.0,0.8125,1.0,1.0,1.0);if(b==3)Bn(a,0.0,0.0,0.0,0.1875,1.0,1.0);}
function AJX(a,b,c,d,e,f){var $p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:ADV(a,b,c,d,e,f);if(C()){break _;}return;default:E$();}}C4().s(a,b,c,d,e,f,$p);}
function ADV(a,b,c,d,e,f){var g,h,i,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AEL(b,c,d,e);if(C()){break _;}g=$z;if(!(g&8)){h=d+1|0;$p=2;continue _;}d=d-1|0;$p=3;continue _;case 2:$z=ACy(b,c,h,e);if(C()){break _;}i=$z;if(i!=a.b){h=g^4;$p=4;continue _;}i=(g^4)+8|0;$p=5;continue _;case 3:$z=ACy(b,c,d,e);if(C()){break _;}h=$z;if(h!=a.b)return 1;$p=6;continue _;case 4:AKw(b,c,d,e,h);if
(C()){break _;}Jn(b,c,d-1|0,e,c,d,e);if(BO()>=0.5)Ex(b,c+0.5,d+0.5,e+0.5,B(267),1.0,N(b.q)*0.10000000149011612+0.8999999761581421);else Ex(b,c+0.5,d+0.5,e+0.5,B(268),1.0,N(b.q)*0.10000000149011612+0.8999999761581421);return 1;case 5:AKw(b,c,h,e,i);if(C()){break _;}h=g^4;$p=4;continue _;case 6:ADV(a,b,c,d,e,f);if(C()){break _;}return 1;default:E$();}}C4().s(a,b,c,d,e,f,g,h,i,$p);}
function ACA(a,b,c,d,e,f){var g,h,i,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AEL(b,c,d,e);if(C()){break _;}g=$z;if(g&8){f=d-1|0;$p=3;continue _;}h=0;f=d+1|0;$p=2;case 2:$z=ACy(b,c,f,e);if(C()){break _;}i=$z;if(i!=a.b){i=0;$p=4;continue _;}i=d-1|0;$p=6;continue _;case 3:$z=ACy(b,c,f,e);if(C()){break _;}f=$z;if(f==a.b)return;f=0;$p=5;continue _;case 4:APy(b,c,d,e,i);if(C()){break _;}h
=1;i=d-1|0;$p=6;continue _;case 5:APy(b,c,d,e,f);if(C()){break _;}return;case 6:$z=AAE(b,c,i,e);if(C()){break _;}i=$z;if(!i){i=0;$p=7;continue _;}if(!h)return;$p=10;continue _;case 7:APy(b,c,d,e,i);if(C()){break _;}h=1;$p=8;case 8:$z=ACy(b,c,f,e);if(C()){break _;}i=$z;if(i==a.b){i=0;$p=9;continue _;}if(!h)return;$p=10;continue _;case 9:APy(b,c,f,e,i);if(C()){break _;}if(!h)return;$p=10;case 10:Yj(a,b,c,d,e,g);if(C()){break _;}return;default:E$();}}C4().s(a,b,c,d,e,f,g,h,i,$p);}
function A8y(a,b,c){if(b&8)b=0;else{BB();b=Biw.cW;}return b;}
function XH(a,b,c,d,e,f,g){var $p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AHG(a,b,c,d,e);if(C()){break _;}$p=2;case 2:$z=Kd(a,b,c,d,e,f,g);if(C()){break _;}b=$z;return b;default:E$();}}C4().s(a,b,c,d,e,f,g,$p);}
function Pr(a,b){return b&4?b&3:(b-1|0)&3;}
function AJ2(a,b,c,d,e){var $p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(d>=127)return 0;d=d-1|0;$p=1;case 1:$z=AAE(b,c,d,e);if(C()){break _;}c=$z;return !c?0:1;default:E$();}}C4().s(a,b,c,d,e,$p);}
function AC4(){O.call(this);}
function Bcf(a,b){var c=new AC4();AUQ(c,a,b);return c;}
function AUQ(a,b,c){C9(a,b,c,Bhn);}
function ADh(a,b,c,d,e){var f,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AEL(b,c,d,e);if(C()){break _;}f=$z;if(f==2)Bn(a,0.0,0.0,0.875,1.0,1.0,1.0);if(f==3)Bn(a,0.0,0.0,0.0,1.0,1.0,0.125);if(f==4)Bn(a,0.875,0.0,0.0,1.0,1.0,1.0);if(f==5)Bn(a,0.0,0.0,0.0,0.125,1.0,1.0);$p=2;case 2:$z=Nn(a,b,c,d,e);if(C()){break _;}b=$z;return b;default:E$();}}C4().s(a,b,c,d,e,f,$p);}
function AD8(a,b,c,d,e){var f,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AEL(b,c,d,e);if(C()){break _;}f=$z;if(f==2)Bn(a,0.0,0.0,0.875,1.0,1.0,1.0);if(f==3)Bn(a,0.0,0.0,0.0,1.0,1.0,0.125);if(f==4)Bn(a,0.875,0.0,0.0,1.0,1.0,1.0);if(f==5)Bn(a,0.0,0.0,0.0,0.125,1.0,1.0);$p=2;case 2:$z=K7(a,b,c,d,e);if(C()){break _;}b=$z;return b;default:E$();}}C4().s(a,b,c,d,e,f,$p);}
function AWY(a){return 0;}
function A5S(a){return 0;}
function A9v(a){return 8;}
function ANV(a,b,c,d,e){var f,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=c-1|0;$p=1;case 1:$z=AAE(b,f,d,e);if(C()){break _;}f=$z;if(f)return 1;f=c+1|0;$p=2;case 2:$z=AAE(b,f,d,e);if(C()){break _;}f=$z;if(f)return 1;f=e-1|0;$p=3;case 3:$z=AAE(b,c,d,f);if(C()){break _;}f=$z;if(f)return 1;e=e+1|0;$p=4;case 4:$z=AAE(b,c,d,e);if(C()){break _;}c=$z;return c;default:E$();}}C4().s(a,b,c,d,e,f,$p);}
function Yq(a,b,c,d,e,f){var g,h,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AEL(b,c,d,e);if(C()){break _;}g=$z;if(g&&f!=2){if(g&&f!=3){if(g&&f!=4){if(g&&f!=5){$p=6;continue _;}f=c-1|0;$p=5;continue _;}h=c+1|0;$p=4;continue _;}h=e-1|0;$p=3;continue _;}h=e+1|0;$p=2;case 2:$z=AAE(b,c,d,h);if(C()){break _;}h=$z;if(h)g=2;if(g&&f!=3){if(g&&f!=4){if(g&&f!=5){$p=6;continue _;}f=c-1|0;$p=5;continue _;}h
=c+1|0;$p=4;continue _;}h=e-1|0;$p=3;case 3:$z=AAE(b,c,d,h);if(C()){break _;}h=$z;if(h)g=3;if(g&&f!=4){if(g&&f!=5){$p=6;continue _;}f=c-1|0;$p=5;continue _;}h=c+1|0;$p=4;case 4:$z=AAE(b,h,d,e);if(C()){break _;}h=$z;if(h)g=4;if(g&&f!=5){$p=6;continue _;}f=c-1|0;$p=5;case 5:$z=AAE(b,f,d,e);if(C()){break _;}f=$z;if(f)g=5;$p=6;case 6:AKw(b,c,d,e,g);if(C()){break _;}return;default:E$();}}C4().s(a,b,c,d,e,f,g,h,$p);}
function AKM(a,b,c,d,e,f){var g,h,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AEL(b,c,d,e);if(C()){break _;}g=$z;h=0;if(g==2){f=e+1|0;$p=2;continue _;}if(g==3){f=e-1|0;$p=3;continue _;}if(g==4){f=c+1|0;$p=4;continue _;}if(g==5){f=c-1|0;$p=5;continue _;}if(h)return;$p=6;continue _;case 2:$z=AAE(b,c,d,f);if(C()){break _;}f=$z;if(f)h=1;if(g==3){f=e-1|0;$p=3;continue _;}if(g==4){f=c+1|0;$p=4;continue _;}if
(g==5){f=c-1|0;$p=5;continue _;}if(h)return;$p=6;continue _;case 3:$z=AAE(b,c,d,f);if(C()){break _;}f=$z;if(f)h=1;if(g==4){f=c+1|0;$p=4;continue _;}if(g==5){f=c-1|0;$p=5;continue _;}if(h)return;$p=6;continue _;case 4:$z=AAE(b,f,d,e);if(C()){break _;}f=$z;if(f)h=1;if(g==5){f=c-1|0;$p=5;continue _;}if(h)return;$p=6;continue _;case 5:$z=AAE(b,f,d,e);if(C()){break _;}f=$z;if(f)h=1;if(h)return;$p=6;case 6:Yj(a,b,c,d,e,g);if(C()){break _;}f=0;$p=7;case 7:APy(b,c,d,e,f);if(C()){break _;}return;default:E$();}}C4().s(a,
b,c,d,e,f,g,h,$p);}
function A5q(a,b){return 1;}
function ANY(){O.call(this);}
function BaU(a,b){var c=new ANY();A$3(c,a,b);return c;}
function A$3(a,b,c){C9(a,b,c,Bhn);Bn(a,0.0,0.0,0.0,1.0,0.125,1.0);}
function ACF(a,b,c,d,e){return null;}
function AWy(a){return 0;}
function ALD(a,b,c,d,e,f,g){var $p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AMn(a,b,c,d,e);if(C()){break _;}$p=2;case 2:$z=Kd(a,b,c,d,e,f,g);if(C()){break _;}b=$z;return b;default:E$();}}C4().s(a,b,c,d,e,f,g,$p);}
function AMn(a,b,c,d,e){var f,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=b.eI(c,d,e);if(C()){break _;}f=$z;if(f>=2&&f<=5)Bn(a,0.0,0.0,0.0,1.0,0.625,1.0);else Bn(a,0.0,0.0,0.0,1.0,0.125,1.0);return;default:E$();}}C4().s(a,b,c,d,e,f,$p);}
function A2A(a,b,c){return c<6?a.ba:a.ba-16|0;}
function A3z(a){return 0;}
function A0w(a){return 9;}
function A2H(a,b){return 1;}
function ANX(a,b,c,d,e){var $p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=d-1|0;$p=1;case 1:$z=AAE(b,c,d,e);if(C()){break _;}c=$z;return c;default:E$();}}C4().s(a,b,c,d,e,$p);}
function ANG(a,b,c,d,e){var f,g,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=15;$p=1;case 1:AKw(b,c,d,e,f);if(C()){break _;}g=new H$;$p=2;case 2:YT(g,a,b,c,d,e);if(C()){break _;}$p=3;case 3:YS(g);if(C()){break _;}return;default:E$();}}C4().s(a,b,c,d,e,f,g,$p);}
function AJP(a,b,c,d,e,f){var g,h,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AEL(b,c,d,e);if(C()){break _;}g=$z;h=0;f=d-1|0;$p=2;case 2:$z=AAE(b,c,f,e);if(C()){break _;}f=$z;if(!f)h=1;if(g==2){f=c+1|0;$p=3;continue _;}if(g==3){f=c-1|0;$p=4;continue _;}if(g==4){f=e-1|0;$p=5;continue _;}if(g==5){f=e+1|0;$p=6;continue _;}if(!h)return;$p=7;continue _;case 3:$z=AAE(b,f,d,e);if(C()){break _;}f=$z;if
(!f)h=1;if(g==3){f=c-1|0;$p=4;continue _;}if(g==4){f=e-1|0;$p=5;continue _;}if(g==5){f=e+1|0;$p=6;continue _;}if(!h)return;$p=7;continue _;case 4:$z=AAE(b,f,d,e);if(C()){break _;}f=$z;if(!f)h=1;if(g==4){f=e-1|0;$p=5;continue _;}if(g==5){f=e+1|0;$p=6;continue _;}if(!h)return;$p=7;continue _;case 5:$z=AAE(b,c,d,f);if(C()){break _;}f=$z;if(!f)h=1;if(g==5){f=e+1|0;$p=6;continue _;}if(!h)return;$p=7;continue _;case 6:$z=AAE(b,c,d,f);if(C()){break _;}f=$z;if(!f)h=1;if(!h)return;$p=7;case 7:$z=AEL(b,c,d,e);if(C())
{break _;}f=$z;$p=8;case 8:Yj(a,b,c,d,e,f);if(C()){break _;}f=0;$p=9;case 9:APy(b,c,d,e,f);if(C()){break _;}return;default:E$();}}C4().s(a,b,c,d,e,f,g,h,$p);}
function ASD(){Bc.call(this);this.nT=0;}
function A_2(a){var b=new ASD();A2M(b,a);return b;}
function A2M(a,b){Dt(a,b);b=b+256|0;a.nT=b;L();a.tc=BeI.data[b].ci(2);}
function AQp(a,b,c,d,e,f,g,h){var i,j,k,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!h)f=f+(-1)|0;if(h==1)f=f+1|0;if(h==2)g=g+(-1)|0;if(h==3)g=g+1|0;if(h==4)e=e+(-1)|0;if(h==5)e=e+1|0;if(!b.p)return 0;i=a.nT;j=0;$p=1;case 1:$z=AH_(d,i,e,f,g,j);if(C()){break _;}j=$z;if(!j)return 1;L();k=BeI.data[a.nT];j=a.nT;$p=2;case 2:$z=APy(d,e,f,g,j);if(C()){break _;}j=$z;if(!j)return 1;c=BeI.data[a.nT];$p
=3;case 3:c.vb(d,e,f,g,h);if(C()){break _;}Ex(d,e+0.5,f+0.5,g+0.5,Ki(k.gJ),(k.gJ.oP+1.0)/2.0,k.gJ.pN*0.800000011920929);b.p=b.p-1|0;return 1;default:E$();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function AHI(){MU.call(this);}
function A1F(){var a=new AHI();A1S(a);return a;}
function A1S(a){var b,c,d,e;b=J(B4,0);c=b.data;R3(B(24));d=c.length;e=0;while(e<d){R3(c[e]);e=e+1|0;}a.wt=B(24);a.H5=b.oX();}
function AFx(a){var b;b=new Rk;b.lh=B(269);b.mW=BiC;b.rB=BiC;b.HY=a;b.BV=0.3333333432674408;b.F8=0.5;return b;}
function AG5(a){var b,c,d,e,f;b=new PU;c=$rt_createByteArray(1);d=c.data;d[0]=63;b.vu=BiC;b.uO=BiC;e=d.length;if(e&&e>=b.BO){b.Hz=a;b.uB=c.oX();b.GB=2.0;b.BO=4.0;return b;}f=new Cc;Bo(f,B(270));M(f);}
function M7(){var a=this;Fk.call(a);a.d9=0;a.cp=null;a.kL=null;}
function AME(b,c,d){return A5x(0,b.data.length,b,c,c+d|0,0,0);}
function AAt(b){return AME(b,0,b.data.length);}
function AKh(a,b,c,d){var e,f,g,h,i,j,k;if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f){h=new BS;i=new U;W(i);Bo(h,V(Bf(I(Bf(I(i,B(271)),g),B(248)),f)));M(h);}if(Ct(a)<d){i=new Gt;P(i);M(i);}if(d<0){i=new BS;h=new U;W(h);Bo(i,V(I(Bf(I(h,B(249)),d),B(250))));M(i);}g=a.bk+a.d9|0;j=0;while(j<d){k=c+1|0;b=a.cp.data;f=g+1|0;e[c]=b[g];j=j+1|0;c=k;g=f;}a.bk=a.bk+d|0;return a;}}b=b.data;h=new BS;i=new U;W(i);Bo(h,V(I(Bf(I(Bf(I(i,B(251)),c),B(244)),b.length),B(27))));M(h);}
function W0(a,b,c,d){var e,f,g,h,i,j,k;if(!d)return a;if(a.mP){e=new FV;P(e);M(e);}if(Ct(a)<d){e=new Ha;P(e);M(e);}if(c>=0){f=b.data;g=f.length;if(c<g){h=c+d|0;if(h>g){e=new BS;i=new U;W(i);Bo(e,V(Bf(I(Bf(I(i,B(272)),h),B(248)),g)));M(e);}if(d<0){e=new BS;i=new U;W(i);Bo(e,V(I(Bf(I(i,B(249)),d),B(250))));M(e);}h=a.bk+a.d9|0;j=0;while(j<d){b=a.cp.data;k=h+1|0;g=c+1|0;b[h]=f[c];j=j+1|0;h=k;c=g;}a.bk=a.bk+d|0;return a;}}b=b.data;i=new BS;e=new U;W(e);Bo(i,V(I(Bf(I(Bf(I(e,B(251)),c),B(244)),b.length),B(27))));M(i);}
function UR(a,b){return W0(a,b,0,b.data.length);}
function A9r(a,b){a.kL=b;return a;}
function ATY(a){EA(a);return a;}
function A5l(a,b){Np(a,b);return a;}
function A0N(a,b){EM(a,b);return a;}
function Nj(){L8.call(this);}
function Ju(a){var b,c;if(a.bk<a.cy){b=a.bk;a.bk=b+1|0;return RJ(a,b);}c=new Gt;P(c);M(c);}
function CJ(a,b){var c,d;if(AKr(a)){c=new FV;P(c);M(c);}if(a.bk<a.cy){d=a.bk;a.bk=d+1|0;ADT(a,d,b);return a;}c=new Ha;P(c);M(c);}
function AKr(a){return a.xx;}
function WQ(){var a=this;Nj.call(a);a.xx=0;a.yq=0;a.xq=null;}
function RJ(a,b){return a.xq.data[b+a.yq|0];}
function ADT(a,b,c){a.xq.data[b+a.yq|0]=c;}
function A8v(a){return a.xx;}
function ARn(){var a=this;M7.call(a);a.Gm=0;a.mP=0;}
function A5x(a,b,c,d,e,f,g){var h=new ARn();ATj(h,a,b,c,d,e,f,g);return h;}
function ATj(a,b,c,d,e,f,g,h){KQ(a,c);a.kL=Bgg;a.d9=b;a.cp=d;a.bk=e;a.cy=f;a.Gm=g;a.mP=h;}
function ALO(a){var b,c,d,e;if(a.bk>=a.cy){b=new Gt;P(b);M(b);}c=a.cp.data;d=a.d9;e=a.bk;a.bk=e+1|0;return c[d+e|0];}
function A1o(a){return a.mP;}
function KR(a,b){var c,d,e,f,g,h;if(b>=0&&(b+3|0)<a.cy){c=a.cp.data[a.d9+b|0]&255;d=a.cp.data[(a.d9+b|0)+1|0]&255;e=a.cp.data[(a.d9+b|0)+2|0]&255;f=a.cp.data[(a.d9+b|0)+3|0]&255;if(a.kL!==Bgg)return f<<24|e<<16|d<<8|c;return c<<24|d<<16|e<<8|f;}g=new BS;h=new U;W(h);Bo(g,V(I(Bf(I(Bf(I(h,B(273)),b),B(244)),a.cy-3|0),B(27))));M(g);}
function AA8(a,b,c){var d,e;if(a.mP){d=new FV;P(d);M(d);}if(b>=0&&(b+3|0)<a.cy){if(a.kL!==Bgg){a.cp.data[a.d9+b|0]=c<<24>>24;a.cp.data[(a.d9+b|0)+1|0]=c>>8<<24>>24;a.cp.data[(a.d9+b|0)+2|0]=c>>16<<24>>24;a.cp.data[(a.d9+b|0)+3|0]=c>>24<<24>>24;}else{a.cp.data[a.d9+b|0]=c>>24<<24>>24;a.cp.data[(a.d9+b|0)+1|0]=c>>16<<24>>24;a.cp.data[(a.d9+b|0)+2|0]=c>>8<<24>>24;a.cp.data[(a.d9+b|0)+3|0]=c<<24>>24;}return a;}e=new BS;d=new U;W(d);Bo(e,V(I(Bf(I(Bf(I(d,B(273)),b),B(244)),a.cy-3|0),B(27))));M(e);}
function AHK(a){var b,c;b=Ct(a)/4|0;if(a.kL!==Bgg){c=new Ph;OO(c,a.d9+a.bk|0,b,a,0,b,a.mP);return c;}c=new VR;OO(c,a.d9+a.bk|0,b,a,0,b,a.mP);return c;}
function Vx(){}
function LU(){Fk.call(this);}
function AHo(b){var c,d;if(b>=0)return AZG(0,b,$rt_createCharArray(b),0,b,0);c=new Cc;d=new U;W(d);Bo(c,V(Bf(I(d,B(274)),b)));M(c);}
function AM5(b,c,d){return AZG(0,b.data.length,b,c,c+d|0,0);}
function O6(a,b,c,d){var e,f,g,h,i,j,k;if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f){h=new BS;i=new U;W(i);Bo(h,V(Bf(I(Bf(I(i,B(275)),g),B(248)),f)));M(h);}if(Ct(a)<d){h=new Gt;P(h);M(h);}if(d<0){h=new BS;i=new U;W(i);Bo(h,V(I(Bf(I(i,B(249)),d),B(250))));M(h);}g=a.bk;j=0;while(j<d){k=c+1|0;f=g+1|0;e[c]=AOQ(a,g);j=j+1|0;c=k;g=f;}a.bk=a.bk+d|0;return a;}}b=b.data;i=new BS;h=new U;W(h);Bo(i,V(I(Bf(I(Bf(I(h,B(251)),c),B(244)),b.length),B(27))));M(i);}
function AES(a,b){return O6(a,b,0,b.data.length);}
function ASs(a,b,c,d){var e,f,g,h,i,j,k;if(Xq(a)){e=new FV;P(e);M(e);}if(Ct(a)<d){e=new Ha;P(e);M(e);}if(c>=0){f=b.data;g=f.length;if(c<g){h=c+d|0;if(h>g){e=new BS;i=new U;W(i);Bo(e,V(Bf(I(Bf(I(i,B(276)),h),B(248)),g)));M(e);}if(d<0){e=new BS;i=new U;W(i);Bo(e,V(I(Bf(I(i,B(249)),d),B(250))));M(e);}h=a.bk;j=0;while(j<d){k=h+1|0;g=c+1|0;VA(a,h,f[c]);j=j+1|0;h=k;c=g;}a.bk=a.bk+d|0;return a;}}b=b.data;i=new BS;e=new U;W(e);Bo(i,V(I(Bf(I(Bf(I(e,B(251)),c),B(244)),b.length),B(27))));M(i);}
function AJf(a,b,c,d){var e,f,g,h,i,j;if(Xq(a)){b=new FV;P(b);M(b);}e=d-c|0;if(Ct(a)<e){b=new Ha;P(b);M(b);}if(c>=0&&c<Bi(b)){if(d>Bi(b)){f=new BS;g=new U;W(g);Bo(f,V(Bf(I(Bf(I(g,B(276)),d),B(277)),Bi(b))));M(f);}if(c>d){b=new BS;f=new U;W(f);Bo(b,V(Bf(I(Bf(I(f,B(278)),c),B(279)),d)));M(b);}h=a.bk;while(c<d){i=h+1|0;j=c+1|0;VA(a,h,Ba(b,c));h=i;c=j;}a.bk=a.bk+e|0;return a;}g=new BS;f=new U;W(f);Bo(g,V(I(Bf(I(Bf(I(f,B(278)),c),B(244)),Bi(b)),B(27))));M(g);}
function Nm(a,b){return AJf(a,b,0,Bi(b));}
function AJD(a){return 1;}
function APl(a){return a.mh;}
function AYy(a){Gw(a);return a;}
function AX4(a,b){EM(a,b);return a;}
function P8(){BT.call(this);}
function BiD(){var a=new P8();A80(a);return a;}
function A80(a){P(a);}
function Om(){B8.call(this);}
function BiE(){var a=new Om();AZU(a);return a;}
function AZU(a){return;}
function A4Q(a){return 0;}
function A5v(a){return 0;}
function ATo(a){return 0;}
function L0(){B8.call(this);}
function BiF(){var a=new L0();ATn(a);return a;}
function ATn(a){return;}
function A_A(a){return 1;}
function AY8(a){return 0;}
function N9(){B8.call(this);}
function BiG(){var a=new N9();A7s(a);return a;}
function A7s(a){return;}
function A6T(a){return 0;}
function A91(a){return 0;}
function AU7(a){return 0;}
function Gc(){var a=this;Bc.call(a);a.uU=null;a.yG=0.0;a.AK=0;a.Jy=0;}
function BiH(a,b,c,d){var e=new Gc();Mi(e,a,b,c,d);return e;}
function Mi(a,b,c,d,e){Dt(a,b);a.yG=4.0;a.Jy=d;a.uU=e;a.eZ=1;a.fg=32<<d;if(d==3)a.fg=a.fg*2|0;a.yG=(d+1|0)*2|0;a.AK=c+d|0;}
function A8R(a,b,c){var d;d=0;while(d<a.uU.data.length){if(a.uU.data[d]===c)return a.yG;d=d+1|0;}return 1.0;}
function A62(a,b,c){FM(b,2);}
function AWr(a,b,c,d,e,f){FM(b,1);}
function AXa(a,b){return a.AK;}
function O0(){Gc.call(this);}
var BiI=null;function BbZ(){BbZ=Br(O0);A89();}
function LJ(a,b){var c=new O0();AFP(c,a,b);return c;}
function AFP(a,b,c){BbZ();Mi(a,b,1,c,BiI);}
function A89(){var b,c;b=J(O,4);c=b.data;L();c[0]=BeK;c[1]=BeL;c[2]=Be5;c[3]=Be6;BiI=b;}
function VB(){Gc.call(this);this.nG=0;}
var BiJ=null;function Bb2(){Bb2=Br(VB);A1M();}
function Of(a,b){var c=new VB();ANR(c,a,b);return c;}
function ANR(a,b,c){Bb2();Mi(a,b,2,c,BiJ);a.nG=c;}
function A5i(a,b){L();return b===Bfe?(a.nG!=3?0:1):b!==BgT&&b!==BgS?(b!==Bfb&&b!==Be_?(b!==Bfa&&b!==Be$?(b.b_===Bg4?1:b.b_!==Bhh?0:1):a.nG<1?0:1):a.nG<2?0:1):a.nG<2?0:1;}
function A1M(){var b,c;b=J(O,12);c=b.data;L();c[0]=BeS;c[1]=BeM;c[2]=BeN;c[3]=BeO;c[4]=BeZ;c[5]=Be$;c[6]=Bfa;c[7]=Be9;c[8]=Bfb;c[9]=Be_;c[10]=BgS;c[11]=BgT;BiJ=b;}
function Wv(){Gc.call(this);}
var BiK=null;function BbD(){BbD=Br(Wv);AT_();}
function NJ(a,b){var c=new Wv();ANF(c,a,b);return c;}
function ANF(a,b,c){BbD();Mi(a,b,3,c,BiK);}
function AT_(){var b,c;b=J(O,4);c=b.data;L();c[0]=BeU;c[1]=Bfc;c[2]=BeV;c[3]=BgQ;BiK=b;}
function AE2(){Bc.call(this);}
function Ba8(a){var b=new AE2();AYs(b,a);return b;}
function AYs(a,b){Dt(a,b);a.eZ=1;a.fg=64;}
function AJK(a,b,c,d,e,f,g,h){var i,j,k,l,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!h)f=f+(-1)|0;if(h==1)f=f+1|0;if(h==2)g=g+(-1)|0;if(h==3)g=g+1|0;if(h==4)e=e+(-1)|0;if(h==5)e=e+1|0;$p=1;case 1:$z=ACy(d,e,f,g);if(C()){break _;}i=$z;if(i){FM(b,1);return 1;}j=e+0.5;k=f+0.5;l=g+0.5;BB();Ex(d,j,k,l,B(280),1.0,N(BhC)*0.4000000059604645+0.800000011920929);L();h=Bgi.b;$p
=2;case 2:APy(d,e,f,g,h);if(C()){break _;}FM(b,1);return 1;default:E$();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,$p);}
function LN(){Bc.call(this);this.zZ=0;}
function OC(a,b){var c=new LN();ZZ(c,a,b);return c;}
function ZZ(a,b,c){Dt(a,b);a.zZ=c;a.eZ=1;}
function Qa(a,b,c,d){b.p=b.p-1|0;UU(d,a.zZ);return b;}
function AOW(){Bc.call(this);}
function Bad(a){var b=new AOW();A2o(b,a);return b;}
function A2o(a,b){Dt(a,b);a.eZ=1;}
function AGC(a,b,c,d){var e,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=d.K;BB();if(!AGQ(e,Bf8.cW))return b;Di(c,d,B(225),1.0,1.0/(N(BhC)*0.4000000059604645+0.800000011920929));e=ATb(c,d);$p=1;case 1:AOi(c,e);if(C()){break _;}return b;default:E$();}}C4().s(a,b,c,d,e,$p);}
function ALb(){Bc.call(this);this.z4=0;}
function Ny(a,b){var c=new ALb();A$K(c,a,b);return c;}
function A$K(a,b,c){Dt(a,b);a.eZ=1;a.fg=32<<c;a.z4=4+(c*2|0)|0;}
function A0v(a,b,c){return 1.5;}
function A7P(a,b,c){FM(b,1);}
function AX5(a,b,c,d,e,f){FM(b,2);}
function A2z(a,b){return a.z4;}
function AOd(){LN.call(this);}
function Bcx(a,b){var c=new AOd();A20(c,a,b);return c;}
function A20(a,b,c){ZZ(a,b,c);}
function APx(a,b,c,d){Qa(a,b,c,d);b=new Cd;BB();DD(b,BhZ);return b;}
function ANz(){Bc.call(this);}
function Nv(a,b){var c=new ANz();ATO(c,a,b);return c;}
function ATO(a,b,c){Dt(a,b);a.eZ=1;a.fg=32<<c;}
function AQV(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r,s,t,u,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=ACy(d,e,f,g);if(C()){break _;}i=$z;h=f+1|0;$p=2;case 2:a:{$z=AB3(d,e,h,g);if(C()){break _;}j=$z;if(!j.dw()){L();if(i==BeK.b)break a;}L();if(i!=BeL.b)return 0;}L();k=BgW;l=e;m
=l+0.5;n=f;o=n+0.5;p=g;Ex(d,m,o,p+0.5,Ki(k.gJ),(k.gJ.oP+1.0)/2.0,k.gJ.pN*0.800000011920929);h=k.b;$p=3;case 3:APy(d,e,f,g,h);if(C()){break _;}FM(b,1);if(!E(d.q,8)&&i==BeK.b){q=1;r=0;m=n+1.2000000476837158;if(r<q){s=N(d.q)*0.699999988079071+0.15000000596046448;n=N(d.q)*0.699999988079071+0.15000000596046448;t=new E9;o=l+s;u=p+n;c=new Cd;BB();DD(c,Bhv);Hc(t,d,o,m,u,c);t.g$=10;$p=4;continue _;}}return 1;case 4:AOi(d,t);if(C()){break _;}r=r+1|0;if(r>=q)return 1;s=N(d.q)*0.699999988079071+0.15000000596046448;n=N(d.q)
*0.699999988079071+0.15000000596046448;t=new E9;o=l+s;u=p+n;c=new Cd;BB();DD(c,Bhv);Hc(t,d,o,m,u,c);t.g$=10;continue _;default:E$();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,$p);}
function V0(){Bc.call(this);this.zN=0;}
function BiL(a,b){var c=new V0();AHJ(c,a,b);return c;}
function AHJ(a,b,c){Dt(a,b);a.zN=c;}
function AFn(a,b,c,d,e,f,g,h){var i,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(h!=1)return 0;$p=1;case 1:$z=ACy(d,e,f,g);if(C()){break _;}i=$z;L();if(i!=BgW.b)return 0;f=f+1|0;h=a.zN;$p=2;case 2:APy(d,e,f,g,h);if(C()){break _;}b.p=b.p-1|0;return 1;default:E$();}}C4().s(a,b,c,d,e,f,g,h,i,$p);}
function F5(){var a=this;Bc.call(a);a.H8=0;a.zY=0;a.zd=0;a.BE=0;}
var BiM=null;var BiN=null;function Dc(a,b,c,d){var e=new F5();ABr(e,a,b,c,d);return e;}
function ABr(a,b,c,d,e){Dt(a,b);a.H8=c;a.zY=e;a.BE=d;a.zd=BiM.data[e];a.fg=(BiN.data[e]*3|0)<<c;a.eZ=1;}
function ARM(){var b,c;b=$rt_createIntArray(4);c=b.data;c[0]=3;c[1]=8;c[2]=6;c[3]=3;BiM=b;b=$rt_createIntArray(4);c=b.data;c[0]=11;c[1]=16;c[2]=15;c[3]=13;BiN=b;}
function XX(){Bc.call(this);}
function Bab(a){var b=new XX();AY_(b,a);return b;}
function AY_(a,b){Dt(a,b);a.fg=64;}
function ACf(a,b,c,d,e,f,g,h){var i,j,k,l,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!h)return 0;if(h==1)return 0;i=0;if(h==4)i=1;if(h==3)i=2;if(h==5)i=3;j=new II;FC(j,d);j.rw=0;j.dJ=0;j.c4=0.0;D2(j,0.5,0.5);j.nq=e;j.EB=f;j.nx=g;c=Ci();k=BiO.oX().data;e=k.length;f=0;if(f<e){l=k[f];j.dT=l;JR(j,i);$p=1;continue _;}if(c.s>0)j.dT=Z(c,E(j.m,c.s));JR(j,i);$p=2;continue _;case 1:$z
=ZL(j);if(C()){break _;}g=$z;if(g)S(c,l);f=f+1|0;if(f<e){l=k[f];j.dT=l;JR(j,i);continue _;}if(c.s>0)j.dT=Z(c,E(j.m,c.s));JR(j,i);$p=2;case 2:$z=ZL(j);if(C()){break _;}e=$z;if(!e)return 1;$p=3;case 3:AOi(d,j);if(C()){break _;}b.p=b.p-1|0;return 1;default:E$();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,$p);}
function AHs(){Bc.call(this);}
function Bcc(a){var b=new AHs();A7C(b,a);return b;}
function A7C(a,b){Dt(a,b);a.fg=64;a.eZ=1;}
function Yg(a,b,c,d,e,f,g,h){var i,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(h!=1)return 0;f=f+1|0;L();i=BgZ;$p=1;case 1:$z=i.fS(d,e,f,g);if(C()){break _;}h=$z;if(!h)return 0;h=BgZ.b;$p=2;case 2:APy(d,e,f,g,h);if(C()){break _;}h=K((c.u+180.0)*16.0/360.0-0.5)&15;$p=3;case 3:AKw(d,e,f,g,h);if(C()){break _;}b.p=b.p-1|0;$p=4;case 4:$z=ANy(d,e,f,g);if(C()){break _;}b=$z;b=b;$p=5;case 5:AI_(c,b);if
(C()){break _;}return 1;default:E$();}}C4().s(a,b,c,d,e,f,g,h,i,$p);}
function AJd(){Bc.call(this);}
function A_N(a){var b=new AJd();A26(b,a);return b;}
function A26(a,b){Dt(a,b);a.fg=64;a.eZ=1;}
function AEb(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(h!=1)return 0;f=f+1|0;L();i=Bg0;$p=1;case 1:$z=i.fS(d,e,f,g);if(C()){break _;}h=$z;if(!h)return 0;j=K((c.u+180.0)*4.0/360.0-0.5)&3;k=0;l=0;if(!j)l=1;if(j==1)k=(-1);if(j==2)l=(-1);if(j==3)k=1;m=e-k|0;n=g-l|0;$p=2;case 2:$z
=AAE(d,m,f,n);if(C()){break _;}h=$z;h=!h?0:1;o=f+1|0;$p=3;case 3:$z=AAE(d,m,o,n);if(C()){break _;}p=$z;p=h+(!p?0:1)|0;h=e+k|0;k=g+l|0;$p=4;case 4:$z=AAE(d,h,f,k);if(C()){break _;}l=$z;l=!l?0:1;$p=5;case 5:$z=AAE(d,h,o,k);if(C()){break _;}q=$z;q=l+(!q?0:1)|0;$p=6;case 6:$z=ACy(d,m,f,n);if(C()){break _;}l=$z;if(l!=Bg0.b){$p=7;continue _;}n=1;$p=8;continue _;case 7:$z=ACy(d,m,o,n);if(C()){break _;}m=$z;n=m==Bg0.b?1:0;$p=8;case 8:$z=ACy(d,h,f,k);if(C()){break _;}l=$z;if(l!=Bg0.b){$p=9;continue _;}r=0;if(n&&!1)r
=1;else if(q>p)r=1;if(r)j=((j-1|0)&3)+4|0;h=Bg0.b;$p=10;continue _;case 9:$z=ACy(d,h,o,k);if(C()){break _;}h=$z;m=h==Bg0.b?1:0;r=0;if(n&&!m)r=1;else if(q>p)r=1;if(r)j=((j-1|0)&3)+4|0;h=Bg0.b;$p=10;case 10:APy(d,e,f,g,h);if(C()){break _;}$p=11;case 11:AKw(d,e,f,g,j);if(C()){break _;}f=Bg0.b;$p=12;case 12:APy(d,e,o,g,f);if(C()){break _;}f=j+8|0;$p=13;case 13:AKw(d,e,o,g,f);if(C()){break _;}b.p=b.p-1|0;return 1;default:E$();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,$p);}
function ARO(){Bc.call(this);this.pq=0;}
function AP0(a,b){var c=new ARO();A0f(c,a,b);return c;}
function A0f(a,b,c){Dt(a,b);a.eZ=1;a.fg=64;a.pq=c;}
function AHZ(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=d.T+(d.I-d.T)*1.0;f=d.P+(d.u-d.P)*1.0;g=BY(d.bS+(d.d-d.bS)*1.0,d.cS+(d.j-d.cS)*1.0,d.bR+(d.e-d.bR)*1.0);h= -f*0.01745329238474369-3.1415927410125732;i=BC(h);h=Bq(h);j= -e*0.01745329238474369;k= -BC(j);l=Dk(g,h*k*5.0,Bq(j)
*5.0,i*k*5.0);m=a.pq?0:1;$p=1;case 1:$z=AE4(c,g,l,m);if(C()){break _;}n=$z;if(n===null)return b;if(n.k9)return b;m=n.h9;o=n.h$;p=n.h_;if(!a.pq){$p=2;continue _;}if(!n.hJ)o=o+(-1)|0;if(n.hJ==1)o=o+1|0;if(n.hJ==2)p=p+(-1)|0;if(n.hJ==3)p=p+1|0;if(n.hJ==4)m=m+(-1)|0;if(n.hJ==5)m=m+1|0;$p=8;continue _;case 2:$z=AB3(c,m,o,p);if(C()){break _;}g=$z;if(g!==BfJ){$p=3;continue _;}$p=4;continue _;case 3:$z=AB3(c,m,o,p);if(C()){break _;}d=$z;if(d!==BfK)return b;$p=5;continue _;case 4:$z=AEL(c,m,o,p);if(C()){break _;}q=$z;if
(q){$p=3;continue _;}q=0;$p=6;continue _;case 5:$z=AEL(c,m,o,p);if(C()){break _;}q=$z;if(q)return b;q=0;$p=7;continue _;case 6:APy(c,m,o,p,q);if(C()){break _;}b=new Cd;BB();DD(b,Biy);return b;case 7:APy(c,m,o,p,q);if(C()){break _;}b=new Cd;BB();DD(b,Biz);return b;case 8:$z=ACy(c,m,o,p);if(C()){break _;}q=$z;if(q){$p=10;continue _;}q=a.pq;r=0;$p=9;case 9:AIZ(c,m,o,p,q,r);if(C()){break _;}b=new Cd;BB();DD(b,Bix);return b;case 10:$z=AB3(c,m,o,p);if(C()){break _;}d=$z;if(d.dw())return b;q=a.pq;r=0;$p=9;continue _;default:
E$();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,$p);}
function AO_(){Bc.call(this);}
function BbG(a){var b=new AO_();AXb(b,a);return b;}
function AXb(a,b){Dt(a,b);a.eZ=1;}
function AC$(a,b,c,d,e,f,g,h){var i,j,k,l,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=ACy(d,e,f,g);if(C()){break _;}i=$z;L();if(i!=Bg1.b)return 0;c=new Gh;j=e+0.5;k=f+0.5;l=g+0.5;FC(c,d);c.Br=J(Cd,36);c.iT=0;c.kB=0;c.oN=1;c.kM=0;c.mD=1;D2(c,0.9800000190734863,0.699999988079071);c.c4=c.eO/2.0;c.i9=0;CU(c,j,k+c.c4,l);c.g=0.0;c.i=0.0;c.h=0.0;c.bS=j;c.cS=k;c.bR
=l;$p=2;case 2:AOi(d,c);if(C()){break _;}b.p=b.p-1|0;return 1;default:E$();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,$p);}
function ARg(){Bc.call(this);}
function BcR(a){var b=new ARg();AWB(b,a);return b;}
function AWB(a,b){Dt(a,b);a.eZ=1;a.fg=64;}
function AGA(a,b,c){var d;if(c instanceof IE){d=c;if(!d.qy){d.qy=1;b.p=b.p-1|0;}}}
function AWn(a,b,c){AGA(a,b,c);}
function N4(){}
function AGj(){var a=this;D.call(a);a.d3=Long_ZERO;a.eU=Long_ZERO;}
function A9N(){var a=new AGj();A0d(a);return a;}
function A0d(a){a.d3=Long_fromInt(1);a.eU=Long_ZERO;}
function ASZ(a,b){a.d3=Long_and(b,Long_fromInt(65535));a.eU=Long_and(Long_shr(b,16),Long_fromInt(65535));}
function AZv(a){a.d3=Long_fromInt(1);a.eU=Long_ZERO;}
function AT5(a){return Long_or(Long_shl(a.eU,16),a.d3);}
function A8c(a,b,c,d){var e,f,g,h,i,j;if(d==1){b=b.data;a.d3=Long_add(a.d3,Long_fromInt(b[c]&255));a.eU=Long_add(a.eU,a.d3);a.d3=Long_rem(a.d3,Long_fromInt(65521));a.eU=Long_rem(a.eU,Long_fromInt(65521));return;}e=d/5552|0;f=d%5552|0;while(true){g=e+(-1)|0;if(e<=0)break;h=5552;while(true){e=h+(-1)|0;if(h<=0)break;i=b.data;j=a.d3;d=c+1|0;a.d3=Long_add(j,Long_fromInt(i[c]&255));a.eU=Long_add(a.eU,a.d3);h=e;c=d;}a.d3=Long_rem(a.d3,Long_fromInt(65521));a.eU=Long_rem(a.eU,Long_fromInt(65521));e=g;}while(true){d=
f+(-1)|0;if(f<=0)break;i=b.data;j=a.d3;e=c+1|0;a.d3=Long_add(j,Long_fromInt(i[c]&255));a.eU=Long_add(a.eU,a.d3);f=d;c=e;}a.d3=Long_rem(a.d3,Long_fromInt(65521));a.eU=Long_rem(a.eU,Long_fromInt(65521));}
function Sg(){BD.call(this);}
function BiP(){var a=new Sg();A6A(a);return a;}
function A6A(a){P(a);}
function Nr(){D.call(this);this.GF=null;}
var Bgg=null;var BiQ=null;function AVD(a){var b=new Nr();AH6(b,a);return b;}
function AH6(a,b){a.GF=b;}
function ASp(){Bgg=AVD(B(281));BiQ=AVD(B(282));}
function J4(){}
function LK(){var a=this;D.call(a);a.gb=null;a.e6=null;}
function A4X(a,b){var c,d;if(a===b)return 1;if(!Sq(b,J4))return 0;a:{b:{c:{c=b;if(a.gb===null){if(c.gb!==null)break c;}else if(!a.gb.eo(c.gb))break c;if(a.e6===null){if(c.e6!==null)break c;break b;}if(a.e6.eo(c.e6))break b;}d=0;break a;}d=1;}return d;}
function AWV(a){return a.gb;}
function A2f(a){return a.e6;}
function A1V(a){return (a.gb===null?0:a.gb.fl())^(a.e6===null?0:a.e6.fl());}
function IH(){var a=this;LK.call(a);a.pV=0;a.eE=null;}
function BS(){B6.call(this);}
function BiR(){var a=new BS();AUy(a);return a;}
function AUy(a){P(a);}
function I1(){BS.call(this);}
function BiS(){var a=new I1();A0W(a);return a;}
function A0W(a){P(a);}
function GF(){}
function WC(){D.call(this);this.zT=null;}
function AI4(a){var b,c,d,$$je,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.zT;try{Bfh=Bfh+1|0;Fv(b);$p=1;continue _;}catch($$e){$$je=Y($$e);c=$$je;}d=b.mR;$p=2;continue _;case 1:a:{try{b.ks();if(C()){break _;}}catch($$e){$$je=Y($$e);c=$$je;break a;}c=b.mR;$p=3;continue _;}d=b.mR;$p=2;case 2:AD4(d);if(C()){break _;}a:{try{Xi(b.mR);NV(d);break a;}catch($$e){$$je=Y($$e);b=$$je;}NV(d);M(b);}b.wC=0;Bfh=Bfh-1|0;Fv(Bff);M(c);case 3:AD4(c);if(C())
{break _;}a:{try{Xi(b.mR);NV(c);break a;}catch($$e){$$je=Y($$e);b=$$je;}NV(c);M(b);}b.wC=0;Bfh=Bfh-1|0;Fv(Bff);return;default:E$();}}C4().s(a,b,c,d,$p);}
function FH(){BT.call(this);}
function BiT(){var a=new FH();AW8(a);return a;}
function AW8(a){P(a);}
function EP(){var a=this;D.call(a);a.hQ=null;a.vv=0.0;a.vw=0.0;}
function G3(a,b,c,d,e){var f=new EP();ASM(f,a,b,c,d,e);return f;}
function ASM(a,b,c,d,e,f){a.hQ=Ww(b,c,d);a.vv=e;a.vw=f;}
function Jb(a,b,c){var d;d=new EP;d.hQ=a.hQ;d.vv=b;d.vw=c;return d;}
function Fy(){var a=this;D.call(a);a.hy=null;a.E0=0;}
function BiU(a,b,c,d,e){var f=new Fy();Hh(f,a,b,c,d,e);return f;}
function Hh(a,b,c,d,e,f){var g,h,i,j,k,l;g=b.data;a.E0=0;a.hy=b;a.E0=g.length;h=g[0];i=e/64.0-0.0015625000232830644;j=d/32.0+0.0031250000465661287;g[0]=Jb(h,i,j);h=g[1];k=c/64.0+0.0015625000232830644;g[1]=Jb(h,k,j);h=g[2];l=f/32.0-0.0031250000465661287;g[2]=Jb(h,k,l);g[3]=Jb(g[3],i,l);}
function ACX(a){var b,c,d;b=J(EP,a.hy.data.length);c=b.data;d=0;while(d<a.hy.data.length){c[d]=a.hy.data[(a.hy.data.length-d|0)-1|0];d=d+1|0;}a.hy=b;}
function APE(a,b,c){var d,e,f,g;d=Qd(a.hy.data[1].hQ,a.hy.data[0].hQ);e=CD(ABV(Qd(a.hy.data[1].hQ,a.hy.data[2].hQ),d));Bz(b);Cj(e.x,e.z,e.w);f=0;while(f<4){g=a.hy.data[f];G(b,g.hQ.x*c,g.hQ.z*c,g.hQ.w*c,g.vv,g.vw);f=f+1|0;}Bs(b);}
function LI(){var a=this;D.call(a);a.bP=0;a.ou=0;a.rT=Long_ZERO;a.bv=Long_ZERO;a.oE=0;a.d0=0;a.xZ=0;a.iC=null;a.E=null;a.eM=0;a.iI=0;a.xK=null;a.cJ=null;a.fV=null;}
var BiV=null;function AFL(a){var b;if(a.E===null)return (-2);b=a.E;a.E.ns=Long_ZERO;b.G=Long_ZERO;a.E.b9=null;a.bP=14;a.iI=(-1);JI(a.iC);return 0;}
function Sk(a){if(a.iC!==null)S0(a.iC);return 0;}
function XD(a,b){var c,d,e,f;a.E.b9=null;a.iC=null;a.d0=0;if(b<0)b= -b;else if(b&1073741824){a.d0=4;b=b&(-1073741825);if(b<48)b=b&15;}else if(b&(-32)){a.d0=4;b=b&15;}else{a.d0=(b>>4)+1|0;if(b<48)b=b&15;}if(b>=8&&b<=15){if(a.iC!==null&&a.xZ!=b){S0(a.iC);a.iC=null;}a.xZ=b;c=new KF;d=a.E;b=1<<b;c.se=$rt_createIntArray(1);c.oD=$rt_createIntArray(1);c.m0=$rt_createIntArray(1);c.mY=$rt_createIntArray(1);c.vM=J($rt_arraycls($rt_intcls()),1);c.vN=J($rt_arraycls($rt_intcls()),1);c.u_=$rt_createIntArray(1);c.vg=$rt_createIntArray(1);c.w7
=Bat();c.y=d;e=new LA;f=c.y;e.k4=0;e.bc=f;e.C=c;c.pG=e;c.kn=$rt_createIntArray(4320);c.c0=$rt_createByteArray(b);c.cQ=b;c.rl=d.hZ.d0?1:0;c.dL=0;JI(c);a.iC=c;AFL(a);return 0;}Sk(a);return (-2);}
function AGE(a,b){var c,d,e,f,g,h,i,$$je;if(a.E!==null&&a.E.cf!==null){c=b!=4?0:(-5);d=(-5);a:{b:{c:{d:{e:{f:{g:{h:{i:while(true){j:{k:{l:{m:{n:{o:{p:{q:{r:{s:{t:{u:{v:{w:{switch(a.bP){case 6:a.bP=13;a.E.b9=B(283);a.oE=0;return (-2);case 7:d=Zq(a.iC,d);if(d==(-3)){a.bP=13;a.oE=0;continue i;}if(!d)d=c;if(d!=1)break i;a.rT=a.E.f8.yD();JI(a.iC);if(!a.d0){a.bP=12;d=c;continue i;}a.bP=8;d=c;break w;case 12:break e;case 13:return (-3);case 14:break r;case 23:try{d=F9(a,2,d,c);}catch($$e){$$je=Y($$e);if($$je instanceof DZ)
{e=$$je;return e.hH;}else{throw $$e;}}a.eM=a.bv.lo&65535;if((a.eM&255)!=8){a.E.b9=B(284);a.bP=13;continue i;}if(a.eM&57344){a.E.b9=B(285);a.bP=13;continue i;}if(a.eM&512)Io(a,2,a.bv);a.bP=16;break p;case 2:break d;case 3:break c;case 4:break b;case 5:c=d;break a;case 8:break w;case 9:break v;case 10:break u;case 11:break t;case 15:break s;case 16:break p;case 17:break o;case 18:break n;case 19:break q;case 20:break l;case 21:break k;case 22:break;default:return (-2);}break j;}if(!a.E.N)return d;e=a.E;e.N=e.N
-1|0;e=a.E;e.G=Long_add(e.G,Long_fromInt(1));f=a.E.cf.data;e=a.E;b=e.B;e.B=b+1|0;a.bv=Long_and(Long_fromInt((f[b]&255)<<24),new Long(4278190080, 0));a.bP=9;d=c;}if(!a.E.N)return d;e=a.E;e.N=e.N-1|0;e=a.E;e.G=Long_add(e.G,Long_fromInt(1));g=a.bv;f=a.E.cf.data;e=a.E;b=e.B;e.B=b+1|0;a.bv=Long_add(g,Long_and(Long_fromInt((f[b]&255)<<16),Long_fromInt(16711680)));a.bP=10;d=c;}if(!a.E.N)return d;e=a.E;e.N=e.N-1|0;e=a.E;e.G=Long_add(e.G,Long_fromInt(1));g=a.bv;f=a.E.cf.data;e=a.E;b=e.B;e.B=b+1|0;a.bv=Long_add(g,Long_and(Long_fromInt((f[b]
&255)<<8),Long_fromInt(65280)));a.bP=11;d=c;}if(!a.E.N)return d;e=a.E;e.N=e.N-1|0;e=a.E;e.G=Long_add(e.G,Long_fromInt(1));g=a.bv;f=a.E.cf.data;e=a.E;b=e.B;e.B=b+1|0;a.bv=Long_add(g,Long_and(Long_fromInt(f[b]),Long_fromInt(255)));if(a.eM)a.bv=Long_and(Long_or(Long_or(Long_or(Long_shr(Long_and(a.bv,Long_fromInt(-16777216)),24),Long_shr(Long_and(a.bv,Long_fromInt(16711680)),8)),Long_shl(Long_and(a.bv,Long_fromInt(65280)),8)),Long_shl(Long_and(a.bv,Long_fromInt(65535)),24)),new Long(4294967295, 0));if(a.rT.lo!=
a.bv.lo)a.E.b9=B(286);else if(a.eM&&a.cJ!==null)a.cJ.HA=a.bv;a.bP=15;d=c;}if(!(a.d0&&a.eM)){if(a.E.b9===null)break f;if(!DC(a.E.b9,B(286)))break f;a.bP=13;a.oE=5;continue i;}try{d=F9(a,4,d,c);}catch($$e){$$je=Y($$e);if($$je instanceof DZ){e=$$je;return e.hH;}else{throw $$e;}}if(a.E.b9!==null&&DC(a.E.b9,B(286))){a.bP=13;a.oE=5;continue i;}if(Long_eq(a.bv,Long_and(a.E.ns,new Long(4294967295, 0)))){a.E.b9=null;break f;}a.E.b9=B(287);a.bP=13;continue i;}if(!a.d0){a.bP=7;continue i;}try{d=F9(a,2,d,c);}catch($$e)
{$$je=Y($$e);if($$je instanceof DZ){e=$$je;return e.hH;}else{throw $$e;}}if(!(a.d0!=4&&!(a.d0&2))&&Long_eq(a.bv,Long_fromInt(35615))){if(a.d0==4)a.d0=2;a.E.f8=AWk();Io(a,2,a.bv);if(a.cJ===null)a.cJ=Bci();a.bP=23;continue i;}if(a.d0&2){a.bP=13;a.E.b9=B(288);continue i;}a.eM=0;a.ou=a.bv.lo&255;h=Long_shr(a.bv,8).lo&255;if(!(a.d0&1&&!(((a.ou<<8)+h|0)%31|0))&&(a.ou&15)!=8){if(a.d0!=4){a.bP=13;a.E.b9=B(288);continue i;}e=a.E;e.B=e.B-2|0;e=a.E;e.N=e.N+2|0;e=a.E;e.G=Long_sub(e.G,Long_fromInt(2));a.d0=0;a.bP=7;continue i;}if
((a.ou&15)!=8){a.bP=13;a.E.b9=B(284);continue i;}if(a.d0==4)a.d0=1;if(((a.ou>>4)+8|0)>a.xZ){a.bP=13;a.E.b9=B(289);continue i;}a.E.f8=A9N();if(h&32){a.bP=2;break d;}a.bP=7;continue i;}break m;}try{d=F9(a,4,d,c);}catch($$e){$$je=Y($$e);if($$je instanceof DZ){e=$$je;return e.hH;}else{throw $$e;}}if(a.cJ!==null)a.cJ.HT=a.bv;if(a.eM&512)Io(a,4,a.bv);a.bP=17;}try{d=F9(a,2,d,c);}catch($$e){$$je=Y($$e);if($$je instanceof DZ){e=$$je;return e.hH;}else{throw $$e;}}if(a.cJ!==null){a.cJ.I6=a.bv.lo&255;a.cJ.A_=a.bv.lo>>8
&255;}if(a.eM&512)Io(a,2,a.bv);a.bP=18;}if(a.eM&1024){try{d=F9(a,2,d,c);}catch($$e){$$je=Y($$e);if($$je instanceof DZ){e=$$je;return e.hH;}else{throw $$e;}}if(a.cJ!==null)a.cJ.pr=$rt_createByteArray(a.bv.lo&65535);if(a.eM&512)Io(a,2,a.bv);}else if(a.cJ!==null)a.cJ.pr=null;a.bP=19;}if(a.eM&1024)x:{try{d=ANQ(a,d,c);if(a.cJ===null)break x;f=Ig(a.fV);i=f.data;a.fV=null;b=i.length;if(b!=a.cJ.pr.data.length){a.E.b9=B(290);a.bP=13;continue i;}Ds(f,0,a.cJ.pr,0,b);break x;}catch($$e){$$je=Y($$e);if($$je instanceof DZ)
{e=$$je;return e.hH;}else{throw $$e;}}}else if(a.cJ!==null)a.cJ.pr=null;a.bP=20;}y:{if(a.eM&2048){z:{try{d=PN(a,d,c);if(a.cJ===null)break z;a.cJ.yR=Ig(a.fV);break z;}catch($$e){$$je=Y($$e);if($$je instanceof DZ){e=$$je;break h;}else{throw $$e;}}}try{a.fV=null;break y;}catch($$e){$$je=Y($$e);if($$je instanceof DZ){e=$$je;break h;}else{throw $$e;}}}else if(a.cJ!==null)a.cJ.yR=null;}a.bP=21;}ba:{if(a.eM&4096){bb:{try{d=PN(a,d,c);if(a.cJ===null)break bb;a.cJ.AB=Ig(a.fV);break bb;}catch($$e){$$je=Y($$e);if($$je instanceof DZ)
{e=$$je;break g;}else{throw $$e;}}}try{a.fV=null;break ba;}catch($$e){$$je=Y($$e);if($$je instanceof DZ){e=$$je;break g;}else{throw $$e;}}}else if(a.cJ!==null)a.cJ.AB=null;}a.bP=22;}if(a.eM&512){try{d=F9(a,2,d,c);}catch($$e){$$je=Y($$e);if($$je instanceof DZ){e=$$je;return e.hH;}else{throw $$e;}}if(a.cJ!==null)a.cJ.JS=Long_and(a.bv,Long_fromInt(65535)).lo;if(Long_ne(a.bv,Long_and(a.E.f8.yD(),Long_fromInt(65535)))){a.bP=13;a.E.b9=B(291);a.oE=5;continue;}}a.E.f8=AWk();a.bP=7;}return d;}return e.hH;}return e.hH;}a.bP
=12;}return 1;}if(!a.E.N)return d;e=a.E;e.N=e.N-1|0;e=a.E;e.G=Long_add(e.G,Long_fromInt(1));f=a.E.cf.data;e=a.E;d=e.B;e.B=d+1|0;a.bv=Long_and(Long_fromInt((f[d]&255)<<24),new Long(4278190080, 0));a.bP=3;d=c;}if(!a.E.N)return d;e=a.E;e.N=e.N-1|0;e=a.E;e.G=Long_add(e.G,Long_fromInt(1));g=a.bv;f=a.E.cf.data;e=a.E;d=e.B;e.B=d+1|0;a.bv=Long_add(g,Long_and(Long_fromInt((f[d]&255)<<16),Long_fromInt(16711680)));a.bP=4;d=c;}if(!a.E.N)return d;e=a.E;e.N=e.N-1|0;e=a.E;e.G=Long_add(e.G,Long_fromInt(1));g=a.bv;f=a.E.cf.data;e
=a.E;b=e.B;e.B=b+1|0;a.bv=Long_add(g,Long_and(Long_fromInt((f[b]&255)<<8),Long_fromInt(65280)));a.bP=5;}if(!a.E.N)return c;e=a.E;e.N=e.N-1|0;e=a.E;e.G=Long_add(e.G,Long_fromInt(1));g=a.bv;f=a.E.cf.data;e=a.E;b=e.B;e.B=b+1|0;a.bv=Long_add(g,Long_and(Long_fromInt(f[b]),Long_fromInt(255)));a.E.f8.E1(a.bv);a.bP=6;return 2;}if(b==4&&a.bP==14)return 0;return (-2);}
function F9(a,b,c,d){var e,f,g,h;if(a.iI==(-1)){a.iI=b;a.bv=Long_ZERO;}while(true){if(a.iI<=0){if(b==2)a.bv=Long_and(a.bv,Long_fromInt(65535));else if(b==4)a.bv=Long_and(a.bv,new Long(4294967295, 0));a.iI=(-1);return c;}if(!a.E.N)break;e=a.E;e.N=e.N-1|0;e=a.E;e.G=Long_add(e.G,Long_fromInt(1));f=a.bv;g=a.E.cf.data;e=a.E;h=e.B;e.B=h+1|0;a.bv=Long_or(f,Long_fromInt((g[h]&255)<<((b-a.iI|0)*8|0)));a.iI=a.iI-1|0;c=d;}M(AG$(a,c));}
function PN(a,b,c){var d,e;if(a.fV===null)a.fV=A7w();while(true){if(!a.E.N)M(AG$(a,b));d=a.E;d.N=d.N-1|0;d=a.E;d.G=Long_add(d.G,Long_fromInt(1));e=a.E.cf.data[a.E.B];if(e)Rw(a.fV,a.E.cf,a.E.B,1);a.E.f8.kJ(a.E.cf,a.E.B,1);d=a.E;d.B=d.B+1|0;if(!e)break;b=c;}return c;}
function ANQ(a,b,c){var d;if(a.fV===null)a.fV=A7w();while(Long_gt(a.bv,Long_ZERO)){if(!a.E.N)M(AG$(a,b));d=a.E;d.N=d.N-1|0;d=a.E;d.G=Long_add(d.G,Long_fromInt(1));Rw(a.fV,a.E.cf,a.E.B,1);a.E.f8.kJ(a.E.cf,a.E.B,1);d=a.E;d.B=d.B+1|0;a.bv=Long_sub(a.bv,Long_fromInt(1));b=c;}return b;}
function Io(a,b,c){var d;d=0;while(d<b){a.xK.data[d]=Long_and(c,Long_fromInt(255)).lo<<24>>24;c=Long_shr(c,8);d=d+1|0;}a.E.f8.kJ(a.xK,0,b);}
function AOK(){var b,c;b=$rt_createByteArray(4);c=b.data;c[0]=0;c[1]=0;c[2]=(-1);c[3]=(-1);BiV=b;}
function PS(){E2.call(this);}
function BiW(){var a=new PS();A6G(a);return a;}
function A6G(a){return;}
function A55(a,b){$rt_putStderr(b);}
function Kl(){var a=this;D.call(a);a.x=0.0;a.z=0.0;a.w=0.0;}
var BiX=null;var BeG=0;function Ww(b,c,d){var e;e=new Kl;if(b===-0.0)b=0.0;if(c===-0.0)c=0.0;if(d===-0.0)d=0.0;e.x=b;e.z=c;e.w=d;return e;}
function BY(b,c,d){var e,f;if(BeG>=BiX.s)S(BiX,Ww(0.0,0.0,0.0));e=BiX;f=BeG;BeG=f+1|0;e=Z(e,f);e.x=b;e.z=c;e.w=d;return e;}
function Qd(a,b){return BY(b.x-a.x,b.z-a.z,b.w-a.w);}
function CD(a){var b;b=Ce(a.x*a.x+a.z*a.z+a.w*a.w);return b<1.0E-4?BY(0.0,0.0,0.0):BY(a.x/b,a.z/b,a.w/b);}
function ABV(a,b){return BY(a.z*b.w-a.w*b.z,a.w*b.x-a.x*b.w,a.x*b.z-a.z*b.x);}
function Dk(a,b,c,d){return BY(a.x+b,a.z+c,a.w+d);}
function DI(a,b){var c,d,e;c=b.x-a.x;d=b.z-a.z;e=b.w-a.w;return Ce(c*c+d*d+e*e);}
function Ey(a,b){var c,d,e;c=b.x-a.x;d=b.z-a.z;e=b.w-a.w;return c*c+d*d+e*e;}
function ABZ(a,b,c,d){var e,f,g;e=b-a.x;f=c-a.z;g=d-a.w;return e*e+f*f+g*g;}
function HR(a){return Ce(a.x*a.x+a.z*a.z+a.w*a.w);}
function KO(a,b,c){var d,e,f,g;d=b.x-a.x;e=b.z-a.z;f=b.w-a.w;if(d*d<1.0000000116860974E-7)return null;g=(c-a.x)/d;return g>=0.0&&g<=1.0?BY(a.x+d*g,a.z+e*g,a.w+f*g):null;}
function JX(a,b,c){var d,e,f,g;d=b.x-a.x;e=b.z-a.z;f=b.w-a.w;if(e*e<1.0000000116860974E-7)return null;g=(c-a.z)/e;return g>=0.0&&g<=1.0?BY(a.x+d*g,a.z+e*g,a.w+f*g):null;}
function Ky(a,b,c){var d,e,f,g;d=b.x-a.x;e=b.z-a.z;f=b.w-a.w;if(f*f<1.0000000116860974E-7)return null;g=(c-a.w)/f;return g>=0.0&&g<=1.0?BY(a.x+d*g,a.z+e*g,a.w+f*g):null;}
function AQe(){BiX=Ci();BeG=0;}
function AMp(){D.call(this);}
function BiY(){var a=new AMp();ATC(a);return a;}
function ATC(a){return;}
function Gs(b){return Math.sin(b);}
function GE(b){return Math.cos(b);}
function It(b){return Math.atan(b);}
function A3R(b){return Math.log(b);}
function Ed(b){return Math.sqrt(b);}
function Nd(b){return Math.ceil(b);}
function A2N(b,c){return Math.pow(b,c);}
function CR(b,c){return Math.atan2(b,c);}
function BO(){return A2p();}
function A2p(){return Math.random();}
function CB(b,c){if(b<c)c=b;return c;}
function DE(b,c){if(b>c)c=b;return c;}
function If(b){if(b<=0)b= -b;return b;}
function HZ(b){if(b<=0.0)b= -b;return b;}
function Ji(){D.call(this);this.GX=null;}
var BiZ=null;var Bf1=null;var BiC=null;function AGR(a){var b=new Ji();API(b,a);return b;}
function API(a,b){a.GX=b;}
function AC9(){BiZ=AGR(B(292));Bf1=AGR(B(293));BiC=AGR(B(294));}
function Lr(){LU.call(this);}
function Xq(a){return a.yB;}
function ABQ(){var a=this;Lr.call(a);a.yB=0;a.yg=0;a.mh=null;}
function AZG(a,b,c,d,e,f){var g=new ABQ();A2D(g,a,b,c,d,e,f);return g;}
function A2D(a,b,c,d,e,f,g){KQ(a,c);a.bk=e;a.cy=f;a.yg=b;a.yB=g;a.mh=d;}
function AOQ(a,b){return a.mh.data[b+a.yg|0];}
function VA(a,b,c){a.mh.data[b+a.yg|0]=c;}
function AYZ(a){return 1;}
function AWh(a){return a.mh;}
function A14(a){return a.yB;}
function LQ(){var a=this;D.call(a);a.Hz=null;a.uB=null;a.GB=0.0;a.BO=0.0;a.vu=null;a.uO=null;a.m3=0;}
function ACT(a,b){var c;if(b!==null){a.vu=b;return a;}c=new Cc;Bo(c,B(295));M(c);}
function A18(a,b){return;}
function AGX(a,b){var c;if(b!==null){a.uO=b;return a;}c=new Cc;Bo(c,B(295));M(c);}
function A6w(a,b){return;}
function AJe(a,b,c,d){var e,f,g,h,$$je;a:{if(a.m3!=3){if(d)break a;if(a.m3!=2)break a;}b=new D3;P(b);M(b);}a.m3=!d?1:2;while(true){try{e=Y6(a,b,c);}catch($$e){$$je=Y($$e);if($$je instanceof B6){f=$$je;M(A4Y(f));}else{throw $$e;}}if(JE(e)){if(!d)return e;g=Ct(b);if(g<=0)return e;e=Fh(g);}else if(IV(e))break;h=!Mu(e)?a.vu:a.uO;b:{if(h!==Bf1){if(h===BiZ)break b;else return e;}if(Ct(c)<a.uB.data.length)return Bi0;UR(c,a.uB);}EM(b,b.bk+Lx(e)|0);}return e;}
function X2(a,b){var c;if(a.m3!=2&&a.m3!=4){b=new D3;P(b);M(b);}c=Bi1;if(c===Bi1)a.m3=3;return c;}
function A7o(a,b){return Bi1;}
function Oa(){var a=this;D.call(a);a.nv=0;a.qI=0;}
var Bi1=null;var Bi0=null;function Zj(a,b){var c=new Oa();AKj(c,a,b);return c;}
function AKj(a,b,c){a.nv=b;a.qI=c;}
function JE(a){return a.nv?0:1;}
function IV(a){return a.nv!=1?0:1;}
function NB(a){return !Qg(a)&&!Mu(a)?0:1;}
function Qg(a){return a.nv!=2?0:1;}
function Mu(a){return a.nv!=3?0:1;}
function Lx(a){var b;if(NB(a))return a.qI;b=new Jq;P(b);M(b);}
function Fh(b){return Zj(2,b);}
function R$(a){var b,c;switch(a.nv){case 0:b=new P7;P(b);M(b);case 1:b=new SN;P(b);M(b);case 2:b=new R1;c=a.qI;P(b);b.Bw=c;M(b);case 3:b=new P3;c=a.qI;P(b);b.EN=c;M(b);default:}}
function AKR(){Bi1=Zj(0,0);Bi0=Zj(1,0);}
function Z_(){D.call(this);}
function A9T(){return {};}
function PT(){}
function YF(){D.call(this);}
function KF(){var a=this;D.call(a);a.dL=0;a.pL=0;a.p_=0;a.f1=0;a.fA=null;a.se=null;a.oD=null;a.m0=null;a.mY=null;a.vM=null;a.vN=null;a.u_=null;a.vg=null;a.pG=null;a.tp=0;a.bK=0;a.bJ=0;a.kn=null;a.c0=null;a.cQ=0;a.bV=0;a.bl=0;a.rl=0;a.w7=null;a.y=null;}
var Bi2=null;var Bi3=null;function JI(a){a.dL=0;a.bK=0;a.bJ=0;a.bl=0;a.bV=0;if(a.rl)a.y.f8.l1();}
function Zq(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;c=a.y.B;d=a.y.N;e=a.bJ;f=a.bK;g=a.bl;h=g>=a.bV?a.cQ-g|0:(a.bV-g|0)-1|0;a:{b:{c:{d:{e:while(true){f:{g:{h:{i:{j:{switch(a.dL){case 2:break f;case 9:a.bJ=e;a.bK=f;a.y.N=d;i=a.y;i.G=Long_add(i.G,Long_fromInt(c-a.y.B|0));a.y.B=c;a.bl=g;return B5(a,(-3));case 0:break j;case 1:break;case 3:while(f<14){if(!d){a.bJ=e;a.bK=f;a.y.N=d;i=a.y;i.G=Long_add(i.G,Long_fromInt(c-a.y.B|0));a.y.B=c;a.bl=g;return B5(a,b);}b=0;d=d+(-1)|0;j=a.y.cf.data;k=c+1|0;e=e|(j[c]&255)<<f;f
=f+8|0;c=k;}k=e&16383;a.p_=k;l=k&31;if(l>29)break d;k=k>>5&31;if(k>29)break d;k:{k=(258+l|0)+k|0;if(!(a.fA!==null&&a.fA.data.length>=k))a.fA=$rt_createIntArray(k);else{l=0;while(true){if(l>=k)break k;a.fA.data[l]=0;l=l+1|0;}}}e=e>>>14;f=f+(-14)|0;a.f1=0;a.dL=4;break i;case 4:break i;case 5:break h;case 6:break g;case 7:break b;case 8:break a;default:a.bJ=e;a.bK=f;a.y.N=d;i=a.y;i.G=Long_add(i.G,Long_fromInt(c-a.y.B|0));a.y.B=c;a.bl=g;return B5(a,(-2));}while(f<32){if(!d){a.bJ=e;a.bK=f;a.y.N=d;i=a.y;i.G=Long_add(i.G,
Long_fromInt(c-a.y.B|0));a.y.B=c;a.bl=g;return B5(a,b);}b=0;d=d+(-1)|0;j=a.y.cf.data;k=c+1|0;e=e|(j[c]&255)<<f;f=f+8|0;c=k;}k=(e^(-1))>>>16&65535;l=e&65535;if(k!=l){a.dL=9;a.y.b9=B(296);a.bJ=e;a.bK=f;a.y.N=d;i=a.y;i.G=Long_add(i.G,Long_fromInt(c-a.y.B|0));a.y.B=c;a.bl=g;return B5(a,(-3));}a.pL=l;f=0;a.dL=a.pL?2:!a.tp?0:7;e=f;continue e;}while(f<3){if(!d){a.bJ=e;a.bK=f;a.y.N=d;i=a.y;i.G=Long_add(i.G,Long_fromInt(c-a.y.B|0));a.y.B=c;a.bl=g;return B5(a,b);}b=0;d=d+(-1)|0;j=a.y.cf.data;k=c+1|0;e=e|(j[c]&255)<<f;f
=f+8|0;c=k;}l:{m=e&7;a.tp=m&1;switch(m>>>1){case 0:k=e>>>3;l=f+(-3)|0;n=l&7;e=k>>>n;f=l-n|0;a.dL=1;break l;case 1:AEl(a.m0,a.mY,a.vM,a.vN,a.y);W8(a.pG,a.m0.data[0],a.mY.data[0],a.vM.data[0],0,a.vN.data[0],0);e=e>>>3;f=f+(-3)|0;a.dL=6;break l;case 2:e=e>>>3;f=f+(-3)|0;a.dL=3;break l;case 3:b=e>>>3;k=f+(-3)|0;a.dL=9;a.y.b9=B(297);a.bJ=b;a.bK=k;a.y.N=d;i=a.y;i.G=Long_add(i.G,Long_fromInt(c-a.y.B|0));a.y.B=c;a.bl=g;return B5(a,(-3));default:}}continue e;}while(a.f1<(4+(a.p_>>>10)|0)){while(f<3){if(!d){a.bJ=e;a.bK
=f;a.y.N=d;i=a.y;i.G=Long_add(i.G,Long_fromInt(c-a.y.B|0));a.y.B=c;a.bl=g;return B5(a,b);}b=0;d=d+(-1)|0;j=a.y.cf.data;k=c+1|0;e=e|(j[c]&255)<<f;f=f+8|0;c=k;}o=a.fA.data;j=Bi3.data;k=a.f1;a.f1=k+1|0;o[j[k]]=e&7;e=e>>>3;f=f+(-3)|0;}while(a.f1<19){o=a.fA.data;j=Bi3.data;k=a.f1;a.f1=k+1|0;o[j[k]]=0;}a.se.data[0]=7;k=AP2(a.w7,a.fA,a.se,a.oD,a.kn,a.y);if(k){if(k==(-3)){a.fA=null;a.dL=9;}a.bJ=e;a.bK=f;a.y.N=d;i=a.y;i.G=Long_add(i.G,Long_fromInt(c-a.y.B|0));a.y.B=c;a.bl=g;return B5(a,k);}a.f1=0;a.dL=5;}while(true)
{k=a.p_;if(a.f1>=((258+(k&31)|0)+(k>>5&31)|0))break;k=a.se.data[0];while(f<k){if(!d){a.bJ=e;a.bK=f;a.y.N=d;i=a.y;i.G=Long_add(i.G,Long_fromInt(c-a.y.B|0));a.y.B=c;a.bl=g;return B5(a,b);}b=0;d=d+(-1)|0;j=a.y.cf.data;l=c+1|0;e=e|(j[c]&255)<<f;f=f+8|0;c=l;}k=a.kn.data[((a.oD.data[0]+(e&Bi2.data[k])|0)*3|0)+1|0];n=a.kn.data[((a.oD.data[0]+(e&Bi2.data[k])|0)*3|0)+2|0];l=R(n,16);if(l<0){e=e>>>k;f=f-k|0;j=a.fA.data;k=a.f1;a.f1=k+1|0;j[k]=n;}else{p=R(n,18);q=!p?7:n-14|0;p=p?3:11;while(f<(k+q|0)){if(!d){a.bJ=e;a.bK=
f;a.y.N=d;i=a.y;i.G=Long_add(i.G,Long_fromInt(c-a.y.B|0));a.y.B=c;a.bl=g;return B5(a,b);}b=0;d=d+(-1)|0;j=a.y.cf.data;n=c+1|0;e=e|(j[c]&255)<<f;f=f+8|0;c=n;}n=e>>>k;k=f-k|0;p=p+(n&Bi2.data[q])|0;e=n>>>q;f=k-q|0;h=a.f1;q=a.p_;if((h+p|0)>((258+(q&31)|0)+(q>>5&31)|0))break c;if(!l&&h<1)break c;k=l?0:a.fA.data[h-1|0];while(true){j=a.fA.data;l=h+1|0;j[h]=k;p=p+(-1)|0;if(!p)break;h=l;}a.f1=l;}}a.oD.data[0]=(-1);a.m0.data[0]=9;a.mY.data[0]=6;k=a.p_;k=YI(a.w7,257+(k&31)|0,1+(k>>5&31)|0,a.fA,a.m0,a.mY,a.u_,a.vg,a.kn,
a.y);if(k){if(k==(-3)){a.fA=null;a.dL=9;}a.bJ=e;a.bK=f;a.y.N=d;i=a.y;i.G=Long_add(i.G,Long_fromInt(c-a.y.B|0));a.y.B=c;a.bl=g;return B5(a,k);}W8(a.pG,a.m0.data[0],a.mY.data[0],a.kn,a.u_.data[0],a.kn,a.vg.data[0]);a.dL=6;}a.bJ=e;a.bK=f;a.y.N=d;i=a.y;i.G=Long_add(i.G,Long_fromInt(c-a.y.B|0));a.y.B=c;a.bl=g;b=ABE(a.pG,b);if(b!=1)break e;b=0;AAP(a.pG,a.y);c=a.y.B;d=a.y.N;e=a.bJ;f=a.bK;g=a.bl;h=g>=a.bV?a.cQ-g|0:(a.bV-g|0)-1|0;if(a.tp){a.dL=7;break b;}a.dL=0;continue e;}if(!d){a.bJ=e;a.bK=f;a.y.N=d;i=a.y;i.G=Long_add(i.G,
Long_fromInt(c-a.y.B|0));a.y.B=c;a.bl=g;return B5(a,b);}if(!h){if(g==a.cQ&&a.bV){g=0;h=g>=a.bV?a.cQ-g|0:(a.bV-g|0)-1|0;}if(!h){a.bl=g;b=B5(a,b);g=a.bl;h=g>=a.bV?a.cQ-g|0:(a.bV-g|0)-1|0;if(g==a.cQ&&a.bV){g=0;h=g>=a.bV?a.cQ-g|0:(a.bV-g|0)-1|0;}if(!h){a.bJ=e;a.bK=f;a.y.N=d;i=a.y;i.G=Long_add(i.G,Long_fromInt(c-a.y.B|0));a.y.B=c;a.bl=g;return B5(a,b);}}}b=0;k=a.pL;if(k>d)k=d;if(k>h)k=h;Ds(a.y.cf,c,a.c0,g,k);c=c+k|0;d=d-k|0;g=g+k|0;h=h-k|0;k=a.pL-k|0;a.pL=k;if(k)continue;a.dL=!a.tp?0:7;}return B5(a,b);}a.dL=9;a.y.b9
=B(298);a.bJ=e;a.bK=f;a.y.N=d;i=a.y;i.G=Long_add(i.G,Long_fromInt(c-a.y.B|0));a.y.B=c;a.bl=g;return B5(a,(-3));}a.fA=null;a.dL=9;a.y.b9=B(299);a.bJ=e;a.bK=f;a.y.N=d;i=a.y;i.G=Long_add(i.G,Long_fromInt(c-a.y.B|0));a.y.B=c;a.bl=g;return B5(a,(-3));}a.bl=g;b=B5(a,b);g=a.bl;if(a.bV!=a.bl){a.bJ=e;a.bK=f;a.y.N=d;i=a.y;i.G=Long_add(i.G,Long_fromInt(c-a.y.B|0));a.y.B=c;a.bl=g;return B5(a,b);}a.dL=8;}a.bJ=e;a.bK=f;a.y.N=d;i=a.y;i.G=Long_add(i.G,Long_fromInt(c-a.y.B|0));a.y.B=c;a.bl=g;return B5(a,1);}
function S0(a){JI(a);a.c0=null;a.kn=null;}
function B5(a,b){var c,d,e,f,g;c=a.y.pO;d=a.bV;e=(d>a.bl?a.cQ:a.bl)-d|0;if(e>a.y.ib)e=a.y.ib;if(e&&b==(-5))b=0;f=a.y;f.ib=f.ib-e|0;f=a.y;f.ns=Long_add(f.ns,Long_fromInt(e));if(a.rl&&e>0)a.y.f8.kJ(a.c0,d,e);Ds(a.c0,d,a.y.uW,c,e);c=c+e|0;g=d+e|0;if(g==a.cQ){if(a.bl==a.cQ)a.bl=0;d=a.bl-0|0;if(d>a.y.ib)d=a.y.ib;if(d&&b==(-5))b=0;f=a.y;f.ib=f.ib-d|0;f=a.y;f.ns=Long_add(f.ns,Long_fromInt(d));if(a.rl&&d>0)a.y.f8.kJ(a.c0,0,d);Ds(a.c0,0,a.y.uW,c,d);c=c+d|0;g=0+d|0;}a.y.pO=c;a.bV=g;return b;}
function AH4(){var b,c;b=$rt_createIntArray(17);c=b.data;c[0]=0;c[1]=1;c[2]=3;c[3]=7;c[4]=15;c[5]=31;c[6]=63;c[7]=127;c[8]=255;c[9]=511;c[10]=1023;c[11]=2047;c[12]=4095;c[13]=8191;c[14]=16383;c[15]=32767;c[16]=65535;Bi2=b;b=$rt_createIntArray(19);c=b.data;c[0]=16;c[1]=17;c[2]=18;c[3]=0;c[4]=8;c[5]=7;c[6]=9;c[7]=6;c[8]=10;c[9]=5;c[10]=11;c[11]=4;c[12]=12;c[13]=3;c[14]=13;c[15]=2;c[16]=14;c[17]=1;c[18]=15;Bi3=b;}
function NF(){LQ.call(this);}
function Y6(a,b,c){var d,e,f,g,h,i,j,k,l,m;d=$rt_createCharArray(CB(Ct(b),512));e=d.data;f=0;g=0;h=$rt_createByteArray(CB(Ct(c),512));i=h.data;a:{while(true){if((f+32|0)>g&&Fl(b)){j=f;while(j<g){e[j-f|0]=e[j];j=j+1|0;}k=g-f|0;g=CB(Ct(b)+k|0,e.length);O6(b,d,k,g-k|0);f=0;}if(!Fl(c)){l=!Fl(b)&&f>=g?Bi1:Bi0;break a;}k=CB(Ct(c),i.length);m=new TC;m.yW=b;m.Di=c;l=ACB(a,d,f,g,h,0,k,m);f=m.vJ;if(l===null&&0==m.rN)l=Bi1;W0(c,h,0,m.rN);if(l!==null)break;}}EM(b,b.bk-(g-f|0)|0);return l;}
function PU(){NF.call(this);}
function ACB(a,b,c,d,e,f,g,h){var i,j,k,l,m,n;i=null;a:{while(c<d){if(f>=g){j=c;break a;}k=b.data;j=c+1|0;l=k[c];if(l<128){k=e.data;m=f+1|0;k[f]=l<<24>>24;}else if(l<2048){if((f+2|0)>g){j=j+(-1)|0;if(N_(h,2))break a;i=Bi0;break a;}k=e.data;c=f+1|0;k[f]=(192|l>>6)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else if(!Ot(l)){if((f+3|0)>g){j=j+(-1)|0;if(N_(h,3))break a;i=Bi0;break a;}k=e.data;n=f+1|0;k[f]=(224|l>>12)<<24>>24;c=n+1|0;k[n]=(128|l>>6&63)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else{if(!Du(l)){i=Fh(1);break a;}if
(j>=d){if(AAA(h))break a;i=Bi1;break a;}c=j+1|0;j=k[j];if(!DS(j)){j=c+(-2)|0;i=Fh(1);break a;}if((f+4|0)>g){j=c+(-2)|0;if(N_(h,4))break a;i=Bi0;break a;}k=e.data;n=EH(l,j);j=f+1|0;k[f]=(240|n>>18)<<24>>24;f=j+1|0;k[j]=(128|n>>12&63)<<24>>24;j=f+1|0;k[f]=(128|n>>6&63)<<24>>24;m=j+1|0;k[j]=(128|n&63)<<24>>24;j=c;}c=j;f=m;}j=c;}h.vJ=j;h.rN=f;return i;}
function AOq(){D.call(this);}
function Bi4(){var a=new AOq();A2O(a);return a;}
function A2O(a){return;}
function APi(b){if (b === null || b.constructor.$meta.item === undefined) {$rt_throw(Bg_());}return b.data.length;}
function AEJ(b,c){if(b===null){b=new E3;P(b);M(b);}if(b===F($rt_voidcls())){b=new Cc;P(b);M(b);}if(c>=0)return A1Q(b.fW,c);b=new Xw;P(b);M(b);}
function A1Q(b,c){if (b.$meta.primitive) {if (b == $rt_bytecls()) {return $rt_createByteArray(c);}if (b == $rt_shortcls()) {return $rt_createShortArray(c);}if (b == $rt_charcls()) {return $rt_createCharArray(c);}if (b == $rt_intcls()) {return $rt_createIntArray(c);}if (b == $rt_longcls()) {return $rt_createLongArray(c);}if (b == $rt_floatcls()) {return $rt_createFloatArray(c);}if (b == $rt_doublecls()) {return $rt_createDoubleArray(c);}if (b == $rt_booleancls()) {return $rt_createBooleanArray(c);}} else {return $rt_createArray(b, c)}}
function Gd(){var a=this;D.call(a);a.j1=null;a.j9=null;a.eR=null;a.fJ=null;a.ll=null;a.im=null;}
var Bi5=null;var Bi6=null;var Bi7=null;var Bi8=null;var Bi9=null;var Bi$=null;function Bat(){var a=new Gd();AHH(a);return a;}
function AHH(a){a.j1=null;a.j9=null;a.eR=null;a.fJ=null;a.ll=null;a.im=null;}
function NI(a,b,c,d,e,f,g,h,i,j,k,l){var m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be;m=0;n=d;while(true){o=b.data;p=a.eR.data;q=o[c+m|0];p[q]=p[q]+1|0;m=m+1|0;n=n+(-1)|0;if(!n)break;}if(a.eR.data[0]==d){b=h.data;f=i.data;b[0]=(-1);f[0]=0;return 0;}i=i.data;r=i[0];s=1;a:{while(true){if(s>15)break a;if(a.eR.data[s])break;s=s+1|0;}}if(r<s)r=s;t=15;b:{while(true){if(!t)break b;if(a.eR.data[t])break;t=t+(-1)|0;}}if(r>t)r=t;i[0]=r;u=1<<s;m=s;while(true){if(m>=t){v=u-a.eR.data[t]|0;if(v<0)return (-3);b=a.eR.data;b[t]
=b[t]+v|0;b=a.im.data;u=0;b[1]=u;m=1;w=2;x=t;while(true){x=x+(-1)|0;if(!x)break;i=a.im.data;u=u+a.eR.data[m]|0;i[w]=u;w=w+1|0;m=m+1|0;}m=0;w=0;while(true){x=o[c+w|0];if(x){i=l.data;b=a.im.data;q=b[x];b[x]=q+1|0;i[q]=m;}w=w+1|0;m=m+1|0;if(m>=d)break;}u=a.im.data[t];b=a.im.data;m=0;b[0]=m;w=0;y=(-1);z= -r;a.ll.data[0]=0;ba=0;bb=0;c:while(true){if(s>t)return v&&t!=1?(-5):0;bc=a.eR.data[s];while(true){bd=bc+(-1)|0;if(!bc)break;n=bd+1|0;while(true){be=z+r|0;if(s<=be)break;y=y+1|0;x=t-be|0;if(x>r)x=r;d:{bc=s-be|0;c
=1<<bc;if(c>n){q=c-n|0;if(bc<x){c=s;while(true){bc=bc+1|0;if(bc>=x)break;d=q<<1;b=a.eR.data;c=c+1|0;if(d<=b[c])break d;q=d-a.eR.data[c]|0;}}}}b=k.data;bb=1<<bc;if((b[0]+bb|0)>1440)break c;i=a.ll.data;ba=b[0];i[y]=ba;b[0]=b[0]+bb|0;if(!y){h.data[0]=ba;z=be;continue;}a.im.data[y]=m;a.fJ.data[0]=bc<<24>>24;a.fJ.data[1]=r<<24>>24;c=m>>>(be-r|0);i=a.fJ.data;b=a.ll.data;q=y-1|0;i[2]=(ba-b[q]|0)-c|0;Ds(a.fJ,0,j,(a.ll.data[q]+c|0)*3|0,3);z=be;}b=a.fJ.data;x=s-z|0;b[1]=x<<24>>24;if(w>=u)a.fJ.data[0]=192;else{p=l.data;if
(p[w]>=e){i=g.data;o=f.data;a.fJ.data[0]=((i[p[w]-e|0]+16|0)+64|0)<<24>>24;b=a.fJ.data;d=w+1|0;b[2]=o[p[w]-e|0];w=d;}else{b=a.fJ;b.data[0]=(p[w]>=256?96:0)<<24>>24;b=a.fJ.data;d=w+1|0;b[2]=p[w];w=d;}}q=1<<x;c=m>>>z;while(c<bb){Ds(a.fJ,0,j,(ba+c|0)*3|0,3);c=c+q|0;}c=1<<(s-1|0);while(m&c){m=m^c;c=c>>>1;}m=m^c;x=(1<<z)-1|0;while((m&x)!=a.im.data[y]){y=y+(-1)|0;z=z-r|0;x=(1<<z)-1|0;}bc=bd;}s=s+1|0;}return (-3);}q=u-a.eR.data[m]|0;if(q<0)break;m=m+1|0;u=q<<1;}return (-3);}
function AP2(a,b,c,d,e,f){var g;M2(a,19);a.j1.data[0]=0;g=NI(a,b,0,19,19,null,null,d,c,e,a.j1,a.j9);if(g==(-3))f.b9=B(300);else if(!(g!=(-5)&&c.data[0])){f.b9=B(301);g=(-3);}return g;}
function YI(a,b,c,d,e,f,g,h,i,j){var k;M2(a,288);a.j1.data[0]=0;k=NI(a,d,0,b,257,Bi7,Bi8,g,e,i,a.j1,a.j9);if(!k&&e.data[0]){M2(a,288);c=NI(a,d,b,c,0,Bi9,Bi$,h,f,i,a.j1,a.j9);if(!c&&!(!f.data[0]&&b>257))return 0;if(c==(-3))j.b9=B(302);else if(c==(-5)){j.b9=B(303);c=(-3);}else if(c!=(-4)){j.b9=B(304);c=(-3);}return c;}if(k==(-3))j.b9=B(305);else if(k!=(-4)){j.b9=B(306);k=(-3);}return k;}
function AEl(b,c,d,e,f){e=e.data;d=d.data;c=c.data;b.data[0]=9;c[0]=5;d[0]=Bi5;e[0]=Bi6;return 0;}
function M2(a,b){var c;if(a.j1===null){a.j1=$rt_createIntArray(1);a.j9=$rt_createIntArray(b);a.eR=$rt_createIntArray(16);a.fJ=$rt_createIntArray(3);a.ll=$rt_createIntArray(15);a.im=$rt_createIntArray(16);}if(a.j9.data.length<b)a.j9=$rt_createIntArray(b);c=0;while(c<b){a.j9.data[c]=0;c=c+1|0;}c=0;while(c<16){a.eR.data[c]=0;c=c+1|0;}c=0;while(c<3){a.fJ.data[c]=0;c=c+1|0;}Ds(a.eR,0,a.ll,0,15);Ds(a.eR,0,a.im,0,16);}
function AOr(){var b,c;b=$rt_createIntArray(1536);c=b.data;c[0]=96;c[1]=7;c[2]=256;c[3]=0;c[4]=8;c[5]=80;c[6]=0;c[7]=8;c[8]=16;c[9]=84;c[10]=8;c[11]=115;c[12]=82;c[13]=7;c[14]=31;c[15]=0;c[16]=8;c[17]=112;c[18]=0;c[19]=8;c[20]=48;c[21]=0;c[22]=9;c[23]=192;c[24]=80;c[25]=7;c[26]=10;c[27]=0;c[28]=8;c[29]=96;c[30]=0;c[31]=8;c[32]=32;c[33]=0;c[34]=9;c[35]=160;c[36]=0;c[37]=8;c[38]=0;c[39]=0;c[40]=8;c[41]=128;c[42]=0;c[43]=8;c[44]=64;c[45]=0;c[46]=9;c[47]=224;c[48]=80;c[49]=7;c[50]=6;c[51]=0;c[52]=8;c[53]=88;c[54]
=0;c[55]=8;c[56]=24;c[57]=0;c[58]=9;c[59]=144;c[60]=83;c[61]=7;c[62]=59;c[63]=0;c[64]=8;c[65]=120;c[66]=0;c[67]=8;c[68]=56;c[69]=0;c[70]=9;c[71]=208;c[72]=81;c[73]=7;c[74]=17;c[75]=0;c[76]=8;c[77]=104;c[78]=0;c[79]=8;c[80]=40;c[81]=0;c[82]=9;c[83]=176;c[84]=0;c[85]=8;c[86]=8;c[87]=0;c[88]=8;c[89]=136;c[90]=0;c[91]=8;c[92]=72;c[93]=0;c[94]=9;c[95]=240;c[96]=80;c[97]=7;c[98]=4;c[99]=0;c[100]=8;c[101]=84;c[102]=0;c[103]=8;c[104]=20;c[105]=85;c[106]=8;c[107]=227;c[108]=83;c[109]=7;c[110]=43;c[111]=0;c[112]=8;c[113]
=116;c[114]=0;c[115]=8;c[116]=52;c[117]=0;c[118]=9;c[119]=200;c[120]=81;c[121]=7;c[122]=13;c[123]=0;c[124]=8;c[125]=100;c[126]=0;c[127]=8;c[128]=36;c[129]=0;c[130]=9;c[131]=168;c[132]=0;c[133]=8;c[134]=4;c[135]=0;c[136]=8;c[137]=132;c[138]=0;c[139]=8;c[140]=68;c[141]=0;c[142]=9;c[143]=232;c[144]=80;c[145]=7;c[146]=8;c[147]=0;c[148]=8;c[149]=92;c[150]=0;c[151]=8;c[152]=28;c[153]=0;c[154]=9;c[155]=152;c[156]=84;c[157]=7;c[158]=83;c[159]=0;c[160]=8;c[161]=124;c[162]=0;c[163]=8;c[164]=60;c[165]=0;c[166]=9;c[167]
=216;c[168]=82;c[169]=7;c[170]=23;c[171]=0;c[172]=8;c[173]=108;c[174]=0;c[175]=8;c[176]=44;c[177]=0;c[178]=9;c[179]=184;c[180]=0;c[181]=8;c[182]=12;c[183]=0;c[184]=8;c[185]=140;c[186]=0;c[187]=8;c[188]=76;c[189]=0;c[190]=9;c[191]=248;c[192]=80;c[193]=7;c[194]=3;c[195]=0;c[196]=8;c[197]=82;c[198]=0;c[199]=8;c[200]=18;c[201]=85;c[202]=8;c[203]=163;c[204]=83;c[205]=7;c[206]=35;c[207]=0;c[208]=8;c[209]=114;c[210]=0;c[211]=8;c[212]=50;c[213]=0;c[214]=9;c[215]=196;c[216]=81;c[217]=7;c[218]=11;c[219]=0;c[220]=8;c[221]
=98;c[222]=0;c[223]=8;c[224]=34;c[225]=0;c[226]=9;c[227]=164;c[228]=0;c[229]=8;c[230]=2;c[231]=0;c[232]=8;c[233]=130;c[234]=0;c[235]=8;c[236]=66;c[237]=0;c[238]=9;c[239]=228;c[240]=80;c[241]=7;c[242]=7;c[243]=0;c[244]=8;c[245]=90;c[246]=0;c[247]=8;c[248]=26;c[249]=0;c[250]=9;c[251]=148;c[252]=84;c[253]=7;c[254]=67;c[255]=0;c[256]=8;c[257]=122;c[258]=0;c[259]=8;c[260]=58;c[261]=0;c[262]=9;c[263]=212;c[264]=82;c[265]=7;c[266]=19;c[267]=0;c[268]=8;c[269]=106;c[270]=0;c[271]=8;c[272]=42;c[273]=0;c[274]=9;c[275]
=180;c[276]=0;c[277]=8;c[278]=10;c[279]=0;c[280]=8;c[281]=138;c[282]=0;c[283]=8;c[284]=74;c[285]=0;c[286]=9;c[287]=244;c[288]=80;c[289]=7;c[290]=5;c[291]=0;c[292]=8;c[293]=86;c[294]=0;c[295]=8;c[296]=22;c[297]=192;c[298]=8;c[299]=0;c[300]=83;c[301]=7;c[302]=51;c[303]=0;c[304]=8;c[305]=118;c[306]=0;c[307]=8;c[308]=54;c[309]=0;c[310]=9;c[311]=204;c[312]=81;c[313]=7;c[314]=15;c[315]=0;c[316]=8;c[317]=102;c[318]=0;c[319]=8;c[320]=38;c[321]=0;c[322]=9;c[323]=172;c[324]=0;c[325]=8;c[326]=6;c[327]=0;c[328]=8;c[329]
=134;c[330]=0;c[331]=8;c[332]=70;c[333]=0;c[334]=9;c[335]=236;c[336]=80;c[337]=7;c[338]=9;c[339]=0;c[340]=8;c[341]=94;c[342]=0;c[343]=8;c[344]=30;c[345]=0;c[346]=9;c[347]=156;c[348]=84;c[349]=7;c[350]=99;c[351]=0;c[352]=8;c[353]=126;c[354]=0;c[355]=8;c[356]=62;c[357]=0;c[358]=9;c[359]=220;c[360]=82;c[361]=7;c[362]=27;c[363]=0;c[364]=8;c[365]=110;c[366]=0;c[367]=8;c[368]=46;c[369]=0;c[370]=9;c[371]=188;c[372]=0;c[373]=8;c[374]=14;c[375]=0;c[376]=8;c[377]=142;c[378]=0;c[379]=8;c[380]=78;c[381]=0;c[382]=9;c[383]
=252;c[384]=96;c[385]=7;c[386]=256;c[387]=0;c[388]=8;c[389]=81;c[390]=0;c[391]=8;c[392]=17;c[393]=85;c[394]=8;c[395]=131;c[396]=82;c[397]=7;c[398]=31;c[399]=0;c[400]=8;c[401]=113;c[402]=0;c[403]=8;c[404]=49;c[405]=0;c[406]=9;c[407]=194;c[408]=80;c[409]=7;c[410]=10;c[411]=0;c[412]=8;c[413]=97;c[414]=0;c[415]=8;c[416]=33;c[417]=0;c[418]=9;c[419]=162;c[420]=0;c[421]=8;c[422]=1;c[423]=0;c[424]=8;c[425]=129;c[426]=0;c[427]=8;c[428]=65;c[429]=0;c[430]=9;c[431]=226;c[432]=80;c[433]=7;c[434]=6;c[435]=0;c[436]=8;c[437]
=89;c[438]=0;c[439]=8;c[440]=25;c[441]=0;c[442]=9;c[443]=146;c[444]=83;c[445]=7;c[446]=59;c[447]=0;c[448]=8;c[449]=121;c[450]=0;c[451]=8;c[452]=57;c[453]=0;c[454]=9;c[455]=210;c[456]=81;c[457]=7;c[458]=17;c[459]=0;c[460]=8;c[461]=105;c[462]=0;c[463]=8;c[464]=41;c[465]=0;c[466]=9;c[467]=178;c[468]=0;c[469]=8;c[470]=9;c[471]=0;c[472]=8;c[473]=137;c[474]=0;c[475]=8;c[476]=73;c[477]=0;c[478]=9;c[479]=242;c[480]=80;c[481]=7;c[482]=4;c[483]=0;c[484]=8;c[485]=85;c[486]=0;c[487]=8;c[488]=21;c[489]=80;c[490]=8;c[491]
=258;c[492]=83;c[493]=7;c[494]=43;c[495]=0;c[496]=8;c[497]=117;c[498]=0;c[499]=8;c[500]=53;c[501]=0;c[502]=9;c[503]=202;c[504]=81;c[505]=7;c[506]=13;c[507]=0;c[508]=8;c[509]=101;c[510]=0;c[511]=8;c[512]=37;c[513]=0;c[514]=9;c[515]=170;c[516]=0;c[517]=8;c[518]=5;c[519]=0;c[520]=8;c[521]=133;c[522]=0;c[523]=8;c[524]=69;c[525]=0;c[526]=9;c[527]=234;c[528]=80;c[529]=7;c[530]=8;c[531]=0;c[532]=8;c[533]=93;c[534]=0;c[535]=8;c[536]=29;c[537]=0;c[538]=9;c[539]=154;c[540]=84;c[541]=7;c[542]=83;c[543]=0;c[544]=8;c[545]
=125;c[546]=0;c[547]=8;c[548]=61;c[549]=0;c[550]=9;c[551]=218;c[552]=82;c[553]=7;c[554]=23;c[555]=0;c[556]=8;c[557]=109;c[558]=0;c[559]=8;c[560]=45;c[561]=0;c[562]=9;c[563]=186;c[564]=0;c[565]=8;c[566]=13;c[567]=0;c[568]=8;c[569]=141;c[570]=0;c[571]=8;c[572]=77;c[573]=0;c[574]=9;c[575]=250;c[576]=80;c[577]=7;c[578]=3;c[579]=0;c[580]=8;c[581]=83;c[582]=0;c[583]=8;c[584]=19;c[585]=85;c[586]=8;c[587]=195;c[588]=83;c[589]=7;c[590]=35;c[591]=0;c[592]=8;c[593]=115;c[594]=0;c[595]=8;c[596]=51;c[597]=0;c[598]=9;c[599]
=198;c[600]=81;c[601]=7;c[602]=11;c[603]=0;c[604]=8;c[605]=99;c[606]=0;c[607]=8;c[608]=35;c[609]=0;c[610]=9;c[611]=166;c[612]=0;c[613]=8;c[614]=3;c[615]=0;c[616]=8;c[617]=131;c[618]=0;c[619]=8;c[620]=67;c[621]=0;c[622]=9;c[623]=230;c[624]=80;c[625]=7;c[626]=7;c[627]=0;c[628]=8;c[629]=91;c[630]=0;c[631]=8;c[632]=27;c[633]=0;c[634]=9;c[635]=150;c[636]=84;c[637]=7;c[638]=67;c[639]=0;c[640]=8;c[641]=123;c[642]=0;c[643]=8;c[644]=59;c[645]=0;c[646]=9;c[647]=214;c[648]=82;c[649]=7;c[650]=19;c[651]=0;c[652]=8;c[653]
=107;c[654]=0;c[655]=8;c[656]=43;c[657]=0;c[658]=9;c[659]=182;c[660]=0;c[661]=8;c[662]=11;c[663]=0;c[664]=8;c[665]=139;c[666]=0;c[667]=8;c[668]=75;c[669]=0;c[670]=9;c[671]=246;c[672]=80;c[673]=7;c[674]=5;c[675]=0;c[676]=8;c[677]=87;c[678]=0;c[679]=8;c[680]=23;c[681]=192;c[682]=8;c[683]=0;c[684]=83;c[685]=7;c[686]=51;c[687]=0;c[688]=8;c[689]=119;c[690]=0;c[691]=8;c[692]=55;c[693]=0;c[694]=9;c[695]=206;c[696]=81;c[697]=7;c[698]=15;c[699]=0;c[700]=8;c[701]=103;c[702]=0;c[703]=8;c[704]=39;c[705]=0;c[706]=9;c[707]
=174;c[708]=0;c[709]=8;c[710]=7;c[711]=0;c[712]=8;c[713]=135;c[714]=0;c[715]=8;c[716]=71;c[717]=0;c[718]=9;c[719]=238;c[720]=80;c[721]=7;c[722]=9;c[723]=0;c[724]=8;c[725]=95;c[726]=0;c[727]=8;c[728]=31;c[729]=0;c[730]=9;c[731]=158;c[732]=84;c[733]=7;c[734]=99;c[735]=0;c[736]=8;c[737]=127;c[738]=0;c[739]=8;c[740]=63;c[741]=0;c[742]=9;c[743]=222;c[744]=82;c[745]=7;c[746]=27;c[747]=0;c[748]=8;c[749]=111;c[750]=0;c[751]=8;c[752]=47;c[753]=0;c[754]=9;c[755]=190;c[756]=0;c[757]=8;c[758]=15;c[759]=0;c[760]=8;c[761]
=143;c[762]=0;c[763]=8;c[764]=79;c[765]=0;c[766]=9;c[767]=254;c[768]=96;c[769]=7;c[770]=256;c[771]=0;c[772]=8;c[773]=80;c[774]=0;c[775]=8;c[776]=16;c[777]=84;c[778]=8;c[779]=115;c[780]=82;c[781]=7;c[782]=31;c[783]=0;c[784]=8;c[785]=112;c[786]=0;c[787]=8;c[788]=48;c[789]=0;c[790]=9;c[791]=193;c[792]=80;c[793]=7;c[794]=10;c[795]=0;c[796]=8;c[797]=96;c[798]=0;c[799]=8;c[800]=32;c[801]=0;c[802]=9;c[803]=161;c[804]=0;c[805]=8;c[806]=0;c[807]=0;c[808]=8;c[809]=128;c[810]=0;c[811]=8;c[812]=64;c[813]=0;c[814]=9;c[815]
=225;c[816]=80;c[817]=7;c[818]=6;c[819]=0;c[820]=8;c[821]=88;c[822]=0;c[823]=8;c[824]=24;c[825]=0;c[826]=9;c[827]=145;c[828]=83;c[829]=7;c[830]=59;c[831]=0;c[832]=8;c[833]=120;c[834]=0;c[835]=8;c[836]=56;c[837]=0;c[838]=9;c[839]=209;c[840]=81;c[841]=7;c[842]=17;c[843]=0;c[844]=8;c[845]=104;c[846]=0;c[847]=8;c[848]=40;c[849]=0;c[850]=9;c[851]=177;c[852]=0;c[853]=8;c[854]=8;c[855]=0;c[856]=8;c[857]=136;c[858]=0;c[859]=8;c[860]=72;c[861]=0;c[862]=9;c[863]=241;c[864]=80;c[865]=7;c[866]=4;c[867]=0;c[868]=8;c[869]
=84;c[870]=0;c[871]=8;c[872]=20;c[873]=85;c[874]=8;c[875]=227;c[876]=83;c[877]=7;c[878]=43;c[879]=0;c[880]=8;c[881]=116;c[882]=0;c[883]=8;c[884]=52;c[885]=0;c[886]=9;c[887]=201;c[888]=81;c[889]=7;c[890]=13;c[891]=0;c[892]=8;c[893]=100;c[894]=0;c[895]=8;c[896]=36;c[897]=0;c[898]=9;c[899]=169;c[900]=0;c[901]=8;c[902]=4;c[903]=0;c[904]=8;c[905]=132;c[906]=0;c[907]=8;c[908]=68;c[909]=0;c[910]=9;c[911]=233;c[912]=80;c[913]=7;c[914]=8;c[915]=0;c[916]=8;c[917]=92;c[918]=0;c[919]=8;c[920]=28;c[921]=0;c[922]=9;c[923]
=153;c[924]=84;c[925]=7;c[926]=83;c[927]=0;c[928]=8;c[929]=124;c[930]=0;c[931]=8;c[932]=60;c[933]=0;c[934]=9;c[935]=217;c[936]=82;c[937]=7;c[938]=23;c[939]=0;c[940]=8;c[941]=108;c[942]=0;c[943]=8;c[944]=44;c[945]=0;c[946]=9;c[947]=185;c[948]=0;c[949]=8;c[950]=12;c[951]=0;c[952]=8;c[953]=140;c[954]=0;c[955]=8;c[956]=76;c[957]=0;c[958]=9;c[959]=249;c[960]=80;c[961]=7;c[962]=3;c[963]=0;c[964]=8;c[965]=82;c[966]=0;c[967]=8;c[968]=18;c[969]=85;c[970]=8;c[971]=163;c[972]=83;c[973]=7;c[974]=35;c[975]=0;c[976]=8;c[977]
=114;c[978]=0;c[979]=8;c[980]=50;c[981]=0;c[982]=9;c[983]=197;c[984]=81;c[985]=7;c[986]=11;c[987]=0;c[988]=8;c[989]=98;c[990]=0;c[991]=8;c[992]=34;c[993]=0;c[994]=9;c[995]=165;c[996]=0;c[997]=8;c[998]=2;c[999]=0;c[1000]=8;c[1001]=130;c[1002]=0;c[1003]=8;c[1004]=66;c[1005]=0;c[1006]=9;c[1007]=229;c[1008]=80;c[1009]=7;c[1010]=7;c[1011]=0;c[1012]=8;c[1013]=90;c[1014]=0;c[1015]=8;c[1016]=26;c[1017]=0;c[1018]=9;c[1019]=149;c[1020]=84;c[1021]=7;c[1022]=67;c[1023]=0;c[1024]=8;c[1025]=122;c[1026]=0;c[1027]=8;c[1028]
=58;c[1029]=0;c[1030]=9;c[1031]=213;c[1032]=82;c[1033]=7;c[1034]=19;c[1035]=0;c[1036]=8;c[1037]=106;c[1038]=0;c[1039]=8;c[1040]=42;c[1041]=0;c[1042]=9;c[1043]=181;c[1044]=0;c[1045]=8;c[1046]=10;c[1047]=0;c[1048]=8;c[1049]=138;c[1050]=0;c[1051]=8;c[1052]=74;c[1053]=0;c[1054]=9;c[1055]=245;c[1056]=80;c[1057]=7;c[1058]=5;c[1059]=0;c[1060]=8;c[1061]=86;c[1062]=0;c[1063]=8;c[1064]=22;c[1065]=192;c[1066]=8;c[1067]=0;c[1068]=83;c[1069]=7;c[1070]=51;c[1071]=0;c[1072]=8;c[1073]=118;c[1074]=0;c[1075]=8;c[1076]=54;c[1077]
=0;c[1078]=9;c[1079]=205;c[1080]=81;c[1081]=7;c[1082]=15;c[1083]=0;c[1084]=8;c[1085]=102;c[1086]=0;c[1087]=8;c[1088]=38;c[1089]=0;c[1090]=9;c[1091]=173;c[1092]=0;c[1093]=8;c[1094]=6;c[1095]=0;c[1096]=8;c[1097]=134;c[1098]=0;c[1099]=8;c[1100]=70;c[1101]=0;c[1102]=9;c[1103]=237;c[1104]=80;c[1105]=7;c[1106]=9;c[1107]=0;c[1108]=8;c[1109]=94;c[1110]=0;c[1111]=8;c[1112]=30;c[1113]=0;c[1114]=9;c[1115]=157;c[1116]=84;c[1117]=7;c[1118]=99;c[1119]=0;c[1120]=8;c[1121]=126;c[1122]=0;c[1123]=8;c[1124]=62;c[1125]=0;c[1126]
=9;c[1127]=221;c[1128]=82;c[1129]=7;c[1130]=27;c[1131]=0;c[1132]=8;c[1133]=110;c[1134]=0;c[1135]=8;c[1136]=46;c[1137]=0;c[1138]=9;c[1139]=189;c[1140]=0;c[1141]=8;c[1142]=14;c[1143]=0;c[1144]=8;c[1145]=142;c[1146]=0;c[1147]=8;c[1148]=78;c[1149]=0;c[1150]=9;c[1151]=253;c[1152]=96;c[1153]=7;c[1154]=256;c[1155]=0;c[1156]=8;c[1157]=81;c[1158]=0;c[1159]=8;c[1160]=17;c[1161]=85;c[1162]=8;c[1163]=131;c[1164]=82;c[1165]=7;c[1166]=31;c[1167]=0;c[1168]=8;c[1169]=113;c[1170]=0;c[1171]=8;c[1172]=49;c[1173]=0;c[1174]=9;c[1175]
=195;c[1176]=80;c[1177]=7;c[1178]=10;c[1179]=0;c[1180]=8;c[1181]=97;c[1182]=0;c[1183]=8;c[1184]=33;c[1185]=0;c[1186]=9;c[1187]=163;c[1188]=0;c[1189]=8;c[1190]=1;c[1191]=0;c[1192]=8;c[1193]=129;c[1194]=0;c[1195]=8;c[1196]=65;c[1197]=0;c[1198]=9;c[1199]=227;c[1200]=80;c[1201]=7;c[1202]=6;c[1203]=0;c[1204]=8;c[1205]=89;c[1206]=0;c[1207]=8;c[1208]=25;c[1209]=0;c[1210]=9;c[1211]=147;c[1212]=83;c[1213]=7;c[1214]=59;c[1215]=0;c[1216]=8;c[1217]=121;c[1218]=0;c[1219]=8;c[1220]=57;c[1221]=0;c[1222]=9;c[1223]=211;c[1224]
=81;c[1225]=7;c[1226]=17;c[1227]=0;c[1228]=8;c[1229]=105;c[1230]=0;c[1231]=8;c[1232]=41;c[1233]=0;c[1234]=9;c[1235]=179;c[1236]=0;c[1237]=8;c[1238]=9;c[1239]=0;c[1240]=8;c[1241]=137;c[1242]=0;c[1243]=8;c[1244]=73;c[1245]=0;c[1246]=9;c[1247]=243;c[1248]=80;c[1249]=7;c[1250]=4;c[1251]=0;c[1252]=8;c[1253]=85;c[1254]=0;c[1255]=8;c[1256]=21;c[1257]=80;c[1258]=8;c[1259]=258;c[1260]=83;c[1261]=7;c[1262]=43;c[1263]=0;c[1264]=8;c[1265]=117;c[1266]=0;c[1267]=8;c[1268]=53;c[1269]=0;c[1270]=9;c[1271]=203;c[1272]=81;c[1273]
=7;c[1274]=13;c[1275]=0;c[1276]=8;c[1277]=101;c[1278]=0;c[1279]=8;c[1280]=37;c[1281]=0;c[1282]=9;c[1283]=171;c[1284]=0;c[1285]=8;c[1286]=5;c[1287]=0;c[1288]=8;c[1289]=133;c[1290]=0;c[1291]=8;c[1292]=69;c[1293]=0;c[1294]=9;c[1295]=235;c[1296]=80;c[1297]=7;c[1298]=8;c[1299]=0;c[1300]=8;c[1301]=93;c[1302]=0;c[1303]=8;c[1304]=29;c[1305]=0;c[1306]=9;c[1307]=155;c[1308]=84;c[1309]=7;c[1310]=83;c[1311]=0;c[1312]=8;c[1313]=125;c[1314]=0;c[1315]=8;c[1316]=61;c[1317]=0;c[1318]=9;c[1319]=219;c[1320]=82;c[1321]=7;c[1322]
=23;c[1323]=0;c[1324]=8;c[1325]=109;c[1326]=0;c[1327]=8;c[1328]=45;c[1329]=0;c[1330]=9;c[1331]=187;c[1332]=0;c[1333]=8;c[1334]=13;c[1335]=0;c[1336]=8;c[1337]=141;c[1338]=0;c[1339]=8;c[1340]=77;c[1341]=0;c[1342]=9;c[1343]=251;c[1344]=80;c[1345]=7;c[1346]=3;c[1347]=0;c[1348]=8;c[1349]=83;c[1350]=0;c[1351]=8;c[1352]=19;c[1353]=85;c[1354]=8;c[1355]=195;c[1356]=83;c[1357]=7;c[1358]=35;c[1359]=0;c[1360]=8;c[1361]=115;c[1362]=0;c[1363]=8;c[1364]=51;c[1365]=0;c[1366]=9;c[1367]=199;c[1368]=81;c[1369]=7;c[1370]=11;c[1371]
=0;c[1372]=8;c[1373]=99;c[1374]=0;c[1375]=8;c[1376]=35;c[1377]=0;c[1378]=9;c[1379]=167;c[1380]=0;c[1381]=8;c[1382]=3;c[1383]=0;c[1384]=8;c[1385]=131;c[1386]=0;c[1387]=8;c[1388]=67;c[1389]=0;c[1390]=9;c[1391]=231;c[1392]=80;c[1393]=7;c[1394]=7;c[1395]=0;c[1396]=8;c[1397]=91;c[1398]=0;c[1399]=8;c[1400]=27;c[1401]=0;c[1402]=9;c[1403]=151;c[1404]=84;c[1405]=7;c[1406]=67;c[1407]=0;c[1408]=8;c[1409]=123;c[1410]=0;c[1411]=8;c[1412]=59;c[1413]=0;c[1414]=9;c[1415]=215;c[1416]=82;c[1417]=7;c[1418]=19;c[1419]=0;c[1420]
=8;c[1421]=107;c[1422]=0;c[1423]=8;c[1424]=43;c[1425]=0;c[1426]=9;c[1427]=183;c[1428]=0;c[1429]=8;c[1430]=11;c[1431]=0;c[1432]=8;c[1433]=139;c[1434]=0;c[1435]=8;c[1436]=75;c[1437]=0;c[1438]=9;c[1439]=247;c[1440]=80;c[1441]=7;c[1442]=5;c[1443]=0;c[1444]=8;c[1445]=87;c[1446]=0;c[1447]=8;c[1448]=23;c[1449]=192;c[1450]=8;c[1451]=0;c[1452]=83;c[1453]=7;c[1454]=51;c[1455]=0;c[1456]=8;c[1457]=119;c[1458]=0;c[1459]=8;c[1460]=55;c[1461]=0;c[1462]=9;c[1463]=207;c[1464]=81;c[1465]=7;c[1466]=15;c[1467]=0;c[1468]=8;c[1469]
=103;c[1470]=0;c[1471]=8;c[1472]=39;c[1473]=0;c[1474]=9;c[1475]=175;c[1476]=0;c[1477]=8;c[1478]=7;c[1479]=0;c[1480]=8;c[1481]=135;c[1482]=0;c[1483]=8;c[1484]=71;c[1485]=0;c[1486]=9;c[1487]=239;c[1488]=80;c[1489]=7;c[1490]=9;c[1491]=0;c[1492]=8;c[1493]=95;c[1494]=0;c[1495]=8;c[1496]=31;c[1497]=0;c[1498]=9;c[1499]=159;c[1500]=84;c[1501]=7;c[1502]=99;c[1503]=0;c[1504]=8;c[1505]=127;c[1506]=0;c[1507]=8;c[1508]=63;c[1509]=0;c[1510]=9;c[1511]=223;c[1512]=82;c[1513]=7;c[1514]=27;c[1515]=0;c[1516]=8;c[1517]=111;c[1518]
=0;c[1519]=8;c[1520]=47;c[1521]=0;c[1522]=9;c[1523]=191;c[1524]=0;c[1525]=8;c[1526]=15;c[1527]=0;c[1528]=8;c[1529]=143;c[1530]=0;c[1531]=8;c[1532]=79;c[1533]=0;c[1534]=9;c[1535]=255;Bi5=b;b=$rt_createIntArray(96);c=b.data;c[0]=80;c[1]=5;c[2]=1;c[3]=87;c[4]=5;c[5]=257;c[6]=83;c[7]=5;c[8]=17;c[9]=91;c[10]=5;c[11]=4097;c[12]=81;c[13]=5;c[14]=5;c[15]=89;c[16]=5;c[17]=1025;c[18]=85;c[19]=5;c[20]=65;c[21]=93;c[22]=5;c[23]=16385;c[24]=80;c[25]=5;c[26]=3;c[27]=88;c[28]=5;c[29]=513;c[30]=84;c[31]=5;c[32]=33;c[33]=92;c[34]
=5;c[35]=8193;c[36]=82;c[37]=5;c[38]=9;c[39]=90;c[40]=5;c[41]=2049;c[42]=86;c[43]=5;c[44]=129;c[45]=192;c[46]=5;c[47]=24577;c[48]=80;c[49]=5;c[50]=2;c[51]=87;c[52]=5;c[53]=385;c[54]=83;c[55]=5;c[56]=25;c[57]=91;c[58]=5;c[59]=6145;c[60]=81;c[61]=5;c[62]=7;c[63]=89;c[64]=5;c[65]=1537;c[66]=85;c[67]=5;c[68]=97;c[69]=93;c[70]=5;c[71]=24577;c[72]=80;c[73]=5;c[74]=4;c[75]=88;c[76]=5;c[77]=769;c[78]=84;c[79]=5;c[80]=49;c[81]=92;c[82]=5;c[83]=12289;c[84]=82;c[85]=5;c[86]=13;c[87]=90;c[88]=5;c[89]=3073;c[90]=86;c[91]
=5;c[92]=193;c[93]=192;c[94]=5;c[95]=24577;Bi6=b;b=$rt_createIntArray(31);c=b.data;c[0]=3;c[1]=4;c[2]=5;c[3]=6;c[4]=7;c[5]=8;c[6]=9;c[7]=10;c[8]=11;c[9]=13;c[10]=15;c[11]=17;c[12]=19;c[13]=23;c[14]=27;c[15]=31;c[16]=35;c[17]=43;c[18]=51;c[19]=59;c[20]=67;c[21]=83;c[22]=99;c[23]=115;c[24]=131;c[25]=163;c[26]=195;c[27]=227;c[28]=258;c[29]=0;c[30]=0;Bi7=b;b=$rt_createIntArray(31);c=b.data;c[0]=0;c[1]=0;c[2]=0;c[3]=0;c[4]=0;c[5]=0;c[6]=0;c[7]=0;c[8]=1;c[9]=1;c[10]=1;c[11]=1;c[12]=2;c[13]=2;c[14]=2;c[15]=2;c[16]
=3;c[17]=3;c[18]=3;c[19]=3;c[20]=4;c[21]=4;c[22]=4;c[23]=4;c[24]=5;c[25]=5;c[26]=5;c[27]=5;c[28]=0;c[29]=112;c[30]=112;Bi8=b;b=$rt_createIntArray(30);c=b.data;c[0]=1;c[1]=2;c[2]=3;c[3]=4;c[4]=5;c[5]=7;c[6]=9;c[7]=13;c[8]=17;c[9]=25;c[10]=33;c[11]=49;c[12]=65;c[13]=97;c[14]=129;c[15]=193;c[16]=257;c[17]=385;c[18]=513;c[19]=769;c[20]=1025;c[21]=1537;c[22]=2049;c[23]=3073;c[24]=4097;c[25]=6145;c[26]=8193;c[27]=12289;c[28]=16385;c[29]=24577;Bi9=b;b=$rt_createIntArray(30);c=b.data;c[0]=0;c[1]=0;c[2]=0;c[3]=0;c[4]
=1;c[5]=1;c[6]=2;c[7]=2;c[8]=3;c[9]=3;c[10]=4;c[11]=4;c[12]=5;c[13]=5;c[14]=6;c[15]=6;c[16]=7;c[17]=7;c[18]=8;c[19]=8;c[20]=9;c[21]=9;c[22]=10;c[23]=10;c[24]=11;c[25]=11;c[26]=12;c[27]=12;c[28]=13;c[29]=13;Bi$=b;}
function LA(){var a=this;D.call(a);a.ff=0;a.lU=0;a.fE=null;a.k4=0;a.md=0;a.zb=0;a.sE=0;a.q3=0;a.uP=0;a.uy=0;a.yI=null;a.v2=0;a.yj=null;a.v9=0;a.bc=null;a.C=null;}
var Bi_=null;function W8(a,b,c,d,e,f,g){a.ff=0;a.uP=b<<24>>24;a.uy=c<<24>>24;a.yI=d;a.v2=e;a.yj=f;a.v9=g;a.fE=null;}
function ABE(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;c=a.bc.B;d=a.bc.N;e=a.C.bJ;f=a.C.bK;g=a.C.bl;h=g>=a.C.bV?a.C.cQ-g|0:(a.C.bV-g|0)-1|0;a:{b:while(true){c:{d:{e:{f:{g:{switch(a.ff){case 0:break f;case 2:i=a.sE;while(f<i){if(!d){a.C.bJ=e;a.C.bK=f;a.bc.N=d;j=a.bc;j.G=Long_add(j.G,Long_fromInt(c-a.bc.B|0));a.bc.B=c;a.C.bl=g;return B5(a.C,b);}b=0;d=d+(-1)|0;k=a.bc.cf.data;l=c+1|0;e=e|(k[c]&255)<<f;f=f+8|0;c=l;}a.lU=a.lU+(e&Bi_.data[i])|0;e=e>>i;f=f-i|0;a.md=a.uy;a.fE=a.yj;a.k4=a.v9;a.ff=3;break g;case 4:i=a.sE;while
(f<i){if(!d){a.C.bJ=e;a.C.bK=f;a.bc.N=d;j=a.bc;j.G=Long_add(j.G,Long_fromInt(c-a.bc.B|0));a.bc.B=c;a.C.bl=g;return B5(a.C,b);}b=0;d=d+(-1)|0;k=a.bc.cf.data;l=c+1|0;e=e|(k[c]&255)<<f;f=f+8|0;c=l;}a.q3=a.q3+(e&Bi_.data[i])|0;e=e>>i;f=f-i|0;a.ff=5;break c;case 6:break d;case 7:if(f>7){f=f+(-8)|0;d=d+1|0;c=c+(-1)|0;}a.C.bl=g;b=B5(a.C,b);g=a.C.bl;if(a.C.bV!=a.C.bl){a.C.bJ=e;a.C.bK=f;a.bc.N=d;j=a.bc;j.G=Long_add(j.G,Long_fromInt(c-a.bc.B|0));a.bc.B=c;a.C.bl=g;return B5(a.C,b);}a.ff=8;break a;case 9:a.C.bJ=e;a.C.bK
=f;a.bc.N=d;j=a.bc;j.G=Long_add(j.G,Long_fromInt(c-a.bc.B|0));a.bc.B=c;a.C.bl=g;return B5(a.C,(-3));case 1:break e;case 3:break;case 5:break c;case 8:break a;default:a.C.bJ=e;a.C.bK=f;a.bc.N=d;j=a.bc;j.G=Long_add(j.G,Long_fromInt(c-a.bc.B|0));a.bc.B=c;a.C.bl=g;return B5(a.C,(-2));}}l=a.md;while(f<l){if(!d){a.C.bJ=e;a.C.bK=f;a.bc.N=d;j=a.bc;j.G=Long_add(j.G,Long_fromInt(c-a.bc.B|0));a.bc.B=c;a.C.bl=g;return B5(a.C,b);}b=0;d=d+(-1)|0;k=a.bc.cf.data;i=c+1|0;e=e|(k[c]&255)<<f;f=f+8|0;c=i;}m=(a.k4+(e&Bi_.data[l])
|0)*3|0;k=a.fE.data;i=m+1|0;e=e>>k[i];f=f-a.fE.data[i]|0;l=a.fE.data[m];if(l&16){a.sE=l&15;a.q3=a.fE.data[m+2|0];a.ff=4;continue b;}if(l&64){a.ff=9;a.bc.b9=B(307);a.C.bJ=e;a.C.bK=f;a.bc.N=d;j=a.bc;j.G=Long_add(j.G,Long_fromInt(c-a.bc.B|0));a.bc.B=c;a.C.bl=g;return B5(a.C,(-3));}a.md=l;a.k4=(m/3|0)+a.fE.data[m+2|0]|0;continue b;}if(h>=258&&d>=10){a.C.bJ=e;a.C.bK=f;a.bc.N=d;j=a.bc;j.G=Long_add(j.G,Long_fromInt(c-a.bc.B|0));a.bc.B=c;a.C.bl=g;b=AM3(a,a.uP,a.uy,a.yI,a.v2,a.yj,a.v9,a.C,a.bc);c=a.bc.B;d=a.bc.N;e=a.C.bJ;f
=a.C.bK;g=a.C.bl;h=g>=a.C.bV?a.C.cQ-g|0:(a.C.bV-g|0)-1|0;if(b){a.ff=b!=1?9:7;continue b;}}a.md=a.uP;a.fE=a.yI;a.k4=a.v2;a.ff=1;}l=a.md;while(f<l){if(!d)break b;b=0;d=d+(-1)|0;k=a.bc.cf.data;i=c+1|0;e=e|(k[c]&255)<<f;f=f+8|0;c=i;}m=(a.k4+(e&Bi_.data[l])|0)*3|0;k=a.fE.data;i=m+1|0;e=e>>>k[i];f=f-a.fE.data[i]|0;n=a.fE.data[m];if(!n){a.zb=a.fE.data[m+2|0];a.ff=6;continue b;}if(n&16){a.sE=n&15;a.lU=a.fE.data[m+2|0];a.ff=2;continue b;}if(!(n&64)){a.md=n;a.k4=(m/3|0)+a.fE.data[m+2|0]|0;continue b;}if(!(n&32)){a.ff
=9;a.bc.b9=B(308);a.C.bJ=e;a.C.bK=f;a.bc.N=d;j=a.bc;j.G=Long_add(j.G,Long_fromInt(c-a.bc.B|0));a.bc.B=c;a.C.bl=g;return B5(a.C,(-3));}a.ff=7;continue b;}if(h)i=g;else{if(g!=a.C.cQ)i=g;else if(!a.C.bV)i=g;else{i=0;h=i>=a.C.bV?a.C.cQ-i|0:(a.C.bV-i|0)-1|0;}if(!h){a.C.bl=i;b=B5(a.C,b);i=a.C.bl;h=i>=a.C.bV?a.C.cQ-i|0:(a.C.bV-i|0)-1|0;if(i==a.C.cQ&&a.C.bV){i=0;h=i>=a.C.bV?a.C.cQ-i|0:(a.C.bV-i|0)-1|0;}if(!h){a.C.bJ=e;a.C.bK=f;a.bc.N=d;j=a.bc;j.G=Long_add(j.G,Long_fromInt(c-a.bc.B|0));a.bc.B=c;a.C.bl=i;return B5(a.C,
b);}}}b=0;k=a.C.c0.data;g=i+1|0;k[i]=a.zb<<24>>24;h=h+(-1)|0;a.ff=0;continue b;}i=g-a.q3|0;while(i<0){i=i+a.C.cQ|0;}while(a.lU){if(h)l=g;else{if(g!=a.C.cQ)l=g;else if(!a.C.bV)l=g;else{l=0;h=l>=a.C.bV?a.C.cQ-l|0:(a.C.bV-l|0)-1|0;}if(!h){a.C.bl=l;b=B5(a.C,b);l=a.C.bl;h=l>=a.C.bV?a.C.cQ-l|0:(a.C.bV-l|0)-1|0;if(l==a.C.cQ&&a.C.bV){l=0;h=l>=a.C.bV?a.C.cQ-l|0:(a.C.bV-l|0)-1|0;}if(!h){a.C.bJ=e;a.C.bK=f;a.bc.N=d;j=a.bc;j.G=Long_add(j.G,Long_fromInt(c-a.bc.B|0));a.bc.B=c;a.C.bl=l;return B5(a.C,b);}}}o=a.C.c0.data;g=l
+1|0;k=a.C.c0.data;m=i+1|0;o[l]=k[i];h=h+(-1)|0;i=m==a.C.cQ?0:m;a.lU=a.lU-1|0;}a.ff=0;}a.C.bJ=e;a.C.bK=f;a.bc.N=d;j=a.bc;j.G=Long_add(j.G,Long_fromInt(c-a.bc.B|0));a.bc.B=c;a.C.bl=g;return B5(a.C,b);}a.C.bJ=e;a.C.bK=f;a.bc.N=d;j=a.bc;j.G=Long_add(j.G,Long_fromInt(c-a.bc.B|0));a.bc.B=c;a.C.bl=g;return B5(a.C,1);}
function AAP(a,b){return;}
function AM3(a,b,c,d,e,f,g,h,i){var j,k,l,m,n,o,p,q,r,s,t,u,v,w,x;j=i.B;k=i.N;l=h.bJ;m=h.bK;n=h.bl;o=n>=h.bV?h.cQ-n|0:(h.bV-n|0)-1|0;p=Bi_.data[b];q=Bi_.data[c];while(true){if(m<20){k=k+(-1)|0;r=i.cf.data;b=j+1|0;l=l|(r[j]&255)<<m;m=m+8|0;j=b;continue;}a:{s=d.data;t=l&p;u=(e+t|0)*3|0;c=s[u];if(!c){b=u+1|0;l=l>>s[b];m=m-s[b]|0;r=h.c0.data;c=n+1|0;r[n]=s[u+2|0]<<24>>24;o=o+(-1)|0;}else{while(true){b=u+1|0;l=l>>s[b];m=m-s[b]|0;if(c&16){b=c&15;v=s[u+2|0]+(l&Bi_.data[b])|0;w=l>>b;m=m-b|0;while(m<15){k=k+(-1)|0;r
=i.cf.data;b=j+1|0;w=w|(r[j]&255)<<m;m=m+8|0;j=b;}r=f.data;b=w&q;x=(g+b|0)*3|0;c=r[x];while(true){l=x+1|0;w=w>>r[l];m=m-r[l]|0;if(c&16)break;if(c&64){i.b9=B(307);b=i.N-k|0;c=m>>3;if(c<b)b=c;c=k+b|0;e=j-b|0;b=m-(b<<3)|0;h.bJ=w;h.bK=b;i.N=c;i.G=Long_add(i.G,Long_fromInt(e-i.B|0));i.B=e;h.bl=n;return (-3);}b=(b+r[x+2|0]|0)+(w&Bi_.data[c])|0;x=(g+b|0)*3|0;c=r[x];}b=c&15;while(m<b){k=k+(-1)|0;s=i.cf.data;c=j+1|0;w=w|(s[j]&255)<<m;m=m+8|0;j=c;}x=r[x+2|0]+(w&Bi_.data[b])|0;l=w>>b;m=m-b|0;o=o-v|0;if(n>=x){w=n-x|0;b
=n-w|0;if(b>0&&2>b){s=h.c0.data;b=n+1|0;r=h.c0.data;c=w+1|0;s[n]=r[w];s=h.c0.data;n=b+1|0;r=h.c0.data;w=c+1|0;s[b]=r[c];v=v+(-2)|0;}else{Ds(h.c0,w,h.c0,n,2);n=n+2|0;w=w+2|0;v=v+(-2)|0;}}else{w=n-x|0;while(true){w=w+h.cQ|0;if(w>=0)break;}b=h.cQ-w|0;if(v>b){v=v-b|0;c=n-w|0;if(c>0&&b>c){c=n;while(true){s=h.c0.data;n=c+1|0;r=h.c0.data;x=w+1|0;s[c]=r[w];b=b+(-1)|0;if(!b)break;c=n;w=x;}}else{Ds(h.c0,w,h.c0,n,b);n=n+b|0;}w=0;}}b=n-w|0;if(b>0&&v>b){while(true){s=h.c0.data;c=n+1|0;r=h.c0.data;b=w+1|0;s[n]=r[w];v=v+(-1)
|0;if(!v)break;n=c;w=b;}break a;}Ds(h.c0,w,h.c0,n,v);c=n+v|0;break a;}if(c&64){if(c&32){v=i.N-k|0;b=m>>3;if(b<v)v=b;b=k+v|0;c=j-v|0;e=m-(v<<3)|0;h.bJ=l;h.bK=e;i.N=b;i.G=Long_add(i.G,Long_fromInt(c-i.B|0));i.B=c;h.bl=n;return 1;}i.b9=B(308);v=i.N-k|0;b=m>>3;if(b<v)v=b;e=k+v|0;b=j-v|0;c=m-(v<<3)|0;h.bJ=l;h.bK=c;i.N=e;i.G=Long_add(i.G,Long_fromInt(b-i.B|0));i.B=b;h.bl=n;return (-3);}t=(t+s[u+2|0]|0)+(l&Bi_.data[c])|0;u=(e+t|0)*3|0;c=s[u];if(!c)break;}b=u+1|0;l=l>>s[b];m=m-s[b]|0;r=h.c0.data;c=n+1|0;r[n]=s[u+2|
0]<<24>>24;o=o+(-1)|0;}}if(o<258)break;if(k<10)break;n=c;}v=i.N-k|0;b=m>>3;if(b<v)v=b;b=k+v|0;e=j-v|0;g=m-(v<<3)|0;h.bJ=l;h.bK=g;i.N=b;i.G=Long_add(i.G,Long_fromInt(e-i.B|0));i.B=e;h.bl=c;return 0;}
function ABJ(){var b,c;b=$rt_createIntArray(17);c=b.data;c[0]=0;c[1]=1;c[2]=3;c[3]=7;c[4]=15;c[5]=31;c[6]=63;c[7]=127;c[8]=255;c[9]=511;c[10]=1023;c[11]=2047;c[12]=4095;c[13]=8191;c[14]=16383;c[15]=32767;c[16]=65535;Bi_=b;}
function Hw(){BT.call(this);}
function Bja(){var a=new Hw();A_j(a);return a;}
function A_j(a){P(a);}
function Xw(){B6.call(this);}
function Bjb(){var a=new Xw();A8J(a);return a;}
function A8J(a){P(a);}
function AA0(){D.call(this);}
function A_u(a,b){return a.HJ(b);}
function AUC(a){return a.Ja();}
function Km(){B6.call(this);}
function Bjc(){var a=new Km();A7d(a);return a;}
function A7d(a){P(a);}
function ZX(){var a=this;D.call(a);a.hi=null;a.rk=null;a.ei=null;a.fi=0;}
function Baq(){var a=new ZX();A2C(a);return a;}
function A2C(a){a.ei=BcY;}
function D3(){BD.call(this);}
function Bjd(){var a=new D3();A9P(a);return a;}
function A9P(a){P(a);}
function AIA(){D.call(this);}
function JM(b){return b.length?0:1;}
function AOV(b){return b.shift();}
function SV(){D.call(this);this.Dh=null;}
function AQ$(a){var b,c,d;b=a.Dh;if(!HK(b)&&b.co.ei===null){c=b.co;if(c.hi!==null&&!JM(c.hi)){b=c.hi;d=AOV(b);if(b===null)c.hi=null;Qs(d);}}}
function Rd(){var a=this;D.call(a);a.zH=null;a.zI=null;a.zF=0;a.zG=null;}
function Qs(a){var b,c,d,e;b=a.zH;c=a.zI;d=a.zF;e=a.zG;Fv(b);c.co.ei=b;b=c.co;b.fi=b.fi+d|0;CM(e,null);}
function GY(){BT.call(this);}
function Bje(){var a=new GY();AVe(a);return a;}
function AVe(a){P(a);}
function W4(){Fg.call(this);}
function Bjf(){var a=new W4();A1h(a);return a;}
function A1h(a){P(a);}
function E0(){BD.call(this);}
function Bjg(){var a=new E0();A7N(a);return a;}
function A7N(a){P(a);}
function Ok(){var a=this;D.call(a);a.HY=null;a.BV=0.0;a.F8=0.0;a.lh=null;a.mW=null;a.rB=null;a.h2=0;}
function AQ4(a,b){var c;if(b!==null){a.mW=b;return a;}c=new Cc;Bo(c,B(309));M(c);}
function A$z(a,b){return;}
function ADK(a,b){var c;if(b!==null){a.rB=b;return a;}c=new Cc;Bo(c,B(309));M(c);}
function A6a(a,b){return;}
function UN(a,b,c,d){var e,f,$$je;if(!(a.h2==2&&!d)&&a.h2!=3){a.h2=d?2:1;while(true){try{e=AGk(a,b,c);}catch($$e){$$je=Y($$e);if($$je instanceof B6){f=$$je;M(A4Y(f));}else{throw $$e;}}if(IV(e))return e;if(JE(e)){if(d&&Fl(b)){if(a.mW===BiC)return Fh(Ct(b));if(Ct(c)<=Bi(a.lh))return Bi0;EM(b,b.bk+Ct(b)|0);if(a.mW===Bf1)Nm(c,a.lh);}return e;}if(Qg(e)){if(a.mW===BiC)return e;if(a.mW===Bf1){if(Ct(c)<Bi(a.lh))return Bi0;Nm(c,a.lh);}EM(b,b.bk+Lx(e)|0);}else if(Mu(e)){if(a.rB===BiC)break;if(a.rB===Bf1){if(Ct(c)<Bi(a.lh))return Bi0;Nm(c,
a.lh);}EM(b,b.bk+Lx(e)|0);}}return e;}b=new D3;P(b);M(b);}
function ACg(a,b){if(a.h2!=3&&a.h2!=2){b=new D3;P(b);M(b);}a.h2=3;return Bi1;}
function ARv(a){a.h2=0;return a;}
function AJM(a,b){var c,d;if(a.h2&&a.h2!=3){b=new D3;P(b);M(b);}if(!Ct(b))return AHo(0);if(a.h2)ARv(a);c=AHo(DE(8,Ct(b)*a.BV|0));while(true){d=UN(a,b,c,0);if(JE(d))break;if(IV(d))c=VG(a,c);if(!NB(d))continue;R$(d);}b=UN(a,b,c,1);if(NB(b))R$(b);while(!JE(ACg(a,c))){c=VG(a,c);}Gw(c);return c;}
function VG(a,b){var c,d,e;c=b.mh;d=O$(c,DE(8,c.data.length*2|0));e=AM5(d,0,d.data.length);EM(e,b.bk);return e;}
function AYE(a,b){return Bi1;}
function A5h(a){return;}
function Sl(){}
function Sv(){}
function Pk(){var a=this;D.call(a);a.wo=null;a.A9=null;a.It=0;a.Jq=0;}
function APn(a){if(!a.It){a.wo.CT=null;Fv(a.wo);CM(a.A9,null);}}
function LF(){Ok.call(this);}
function AGk(a,b,c){var d,e,f,g,h,i,j,k,l,m;d=$rt_createByteArray(CB(Ct(b),512));e=d.data;f=0;g=0;h=$rt_createCharArray(CB(Ct(c),512));i=h.data;a:{while(true){if((f+32|0)>g&&Fl(b)){j=f;while(j<g){e[j-f|0]=e[j];j=j+1|0;}k=g-f|0;g=CB(Ct(b)+k|0,e.length);AKh(b,d,k,g-k|0);f=0;}if(!Fl(c)){l=!Fl(b)&&f>=g?Bi1:Bi0;break a;}k=CB(Ct(c),i.length);m=new Wx;m.Ao=b;m.Ex=c;l=ARR(a,d,f,g,h,0,k,m);f=m.wb;if(l===null&&0==m.qJ)l=Bi1;ASs(c,h,0,m.qJ);if(l!==null)break;}}EM(b,b.bk-(g-f|0)|0);return l;}
function Rk(){LF.call(this);}
function ARR(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q;i=null;a:{b:{c:{while(c<d){if(f>=g)break a;j=b.data;k=c+1|0;l=j[c]&255;if(!(l&128)){j=e.data;m=f+1|0;j[f]=l&65535;}else if((l&224)==192){if(k>=d){c=k+(-1)|0;if(NP(h))break a;i=Bi1;break a;}n=k+1|0;k=j[k];if(!Hp(a,k)){c=n+(-2)|0;i=Fh(1);break a;}j=e.data;m=f+1|0;j[f]=((l&31)<<6|k&63)&65535;k=n;}else if((l&240)==224){if((k+2|0)>d){c=k+(-1)|0;if(NP(h))break a;i=Bi1;break a;}c=k+1|0;m=j[k];k=c+1|0;o=j[c];if(!Hp(a,m))break b;if(!Hp(a,o))break b;p=((l&15)<<12|(m
&63)<<6|o&63)&65535;if(Ot(p)){c=k+(-3)|0;i=Fh(3);break a;}j=e.data;m=f+1|0;j[f]=p;}else{if((l&248)!=240){c=k+(-1)|0;i=Fh(1);break a;}if((k+3|0)>d){c=k+(-1)|0;if(NP(h))break a;i=Bi1;break a;}if((f+2|0)>g){c=k+(-1)|0;if(AJp(h,2))break a;i=Bi0;break a;}c=k+1|0;m=j[k];n=c+1|0;o=j[c];k=n+1|0;n=j[n];if(!Hp(a,m))break c;if(!Hp(a,o))break c;if(!Hp(a,n))break c;j=e.data;q=(l&7)<<18|(m&63)<<12|(o&63)<<6|n&63;c=f+1|0;j[f]=IG(q);m=c+1|0;j[c]=Ib(q);}c=k;f=m;}break a;}c=k+(-3)|0;i=Fh(1);break a;}c=k+(-3)|0;i=Fh(1);}h.wb=
c;h.qJ=f;return i;}
function Hp(a,b){return (b&192)!=128?0:1;}
function DZ(){var a=this;BD.call(a);a.hH=0;a.IQ=null;}
function AG$(a,b){var c=new DZ();AVf(c,a,b);return c;}
function AVf(a,b,c){a.IQ=b;P(a);a.hH=c;}
function ANx(){var a=this;D.call(a);a.Ju=0;a.GO=0;a.HT=Long_ZERO;a.I6=0;a.A_=0;a.pr=null;a.yR=null;a.AB=null;a.JS=0;a.HA=Long_ZERO;a.GQ=0;a.Ic=Long_ZERO;}
function Bci(){var a=new ANx();A8D(a);return a;}
function A8D(a){a.Ju=0;a.GO=0;a.A_=255;a.GQ=0;a.Ic=Long_ZERO;}
function OX(){D.call(this);this.mi=0;}
var Bjh=null;function AWk(){var a=new OX();Ze(a);return a;}
function Ze(a){a.mi=0;}
function A2y(a,b,c,d){var e,f,g,h;e=a.mi^(-1);while(true){d=d+(-1)|0;if(d<0)break;f=b.data;g=Bjh.data;h=c+1|0;e=g[(e^f[c])&255]^e>>>8;c=h;}a.mi=e^(-1);}
function A6n(a){a.mi=0;}
function A9O(a,b){a.mi=Long_and(b,new Long(4294967295, 0)).lo;}
function A7t(a){return Long_and(Long_fromInt(a.mi),new Long(4294967295, 0));}
function AFC(){var b,c,d;Bjh=null;Bjh=$rt_createIntArray(256);b=0;while(b<256){c=8;d=b;while(true){c=c+(-1)|0;if(c<0)break;if(!(d&1)){d=d>>>1;continue;}d=(-306674912)^d>>>1;}Bjh.data[b]=d;b=b+1|0;}}
function Ja(){var a=this;D.call(a);a.R=0.0;a.M=0.0;a.S=0.0;a.V=0.0;a.U=0.0;a.W=0.0;}
var Bji=null;var BeF=0;function Nu(b,c,d,e,f,g){var h;h=new Ja;h.R=b;h.M=c;h.S=d;h.V=e;h.U=f;h.W=g;return h;}
function D4(b,c,d,e,f,g){var h,i;if(BeF>=Bji.s)S(Bji,Nu(0.0,0.0,0.0,0.0,0.0,0.0));h=Bji;i=BeF;BeF=i+1|0;return M6(Z(h,i),b,c,d,e,f,g);}
function M6(a,b,c,d,e,f,g){a.R=b;a.M=c;a.S=d;a.V=e;a.U=f;a.W=g;return a;}
function Jh(a,b,c,d){var e,f,g,h,i,j,k;e=a.R;f=a.M;g=a.S;h=a.V;i=a.U;j=a.W;k=R(b,0.0);if(k<0)e=e+b;if(k>0)h=h+b;k=R(c,0.0);if(k<0)f=f+c;if(k>0)i=i+c;k=R(d,0.0);if(k<0)g=g+d;if(k>0)j=j+d;return D4(e,f,g,h,i,j);}
function Dw(a,b,c,d){return D4(a.R-b,a.M-c,a.S-d,a.V+b,a.U+c,a.W+d);}
function Uh(a,b,c,d){return D4(a.R+b,a.M+c,a.S+d,a.V+b,a.U+c,a.W+d);}
function Qy(a,b,c){var d,e;if(b.U>a.M&&b.M<a.U){if(b.W>a.S&&b.S<a.W){if(c<=0.0)d=c;else if(b.V>a.R)d=c;else{d=a.R-b.V;if(d>=c)d=c;}if(d>=0.0)e=d;else if(b.R<a.V)e=d;else{e=a.V-b.R;if(e<=d)e=d;}return e;}return c;}return c;}
function Wd(a,b,c){var d,e;if(b.V>a.R&&b.R<a.V){if(b.W>a.S&&b.S<a.W){if(c<=0.0)d=c;else if(b.U>a.M)d=c;else{d=a.M-b.U;if(d>=c)d=c;}if(d>=0.0)e=d;else if(b.M<a.U)e=d;else{e=a.U-b.M;if(e<=d)e=d;}return e;}return c;}return c;}
function Uk(a,b,c){var d,e;if(b.V>a.R&&b.R<a.V){if(b.U>a.M&&b.M<a.U){if(c<=0.0)d=c;else if(b.W>a.S)d=c;else{d=a.S-b.W;if(d>=c)d=c;}if(d>=0.0)e=d;else if(b.S<a.W)e=d;else{e=a.W-b.S;if(e<=d)e=d;}return e;}return c;}return c;}
function L6(a,b){return b.V>a.R&&b.R<a.V?(b.U>a.M&&b.M<a.U?(b.W>a.S&&b.S<a.W?1:0):0):0;}
function F2(a,b,c,d){a.R=a.R+b;a.M=a.M+c;a.S=a.S+d;a.V=a.V+b;a.U=a.U+c;a.W=a.W+d;return a;}
function APX(a){return (a.V-a.R+a.U-a.M+a.W-a.S)/3.0;}
function Qh(a){return D4(a.R,a.M,a.S,a.V,a.U,a.W);}
function QV(a,b,c){var d,e,f,g,h,i,j,k;d=KO(b,c,a.R);e=KO(b,c,a.V);f=JX(b,c,a.M);g=JX(b,c,a.U);h=Ky(b,c,a.S);i=Ky(b,c,a.W);if(!RI(a,d))d=null;if(!RI(a,e))e=null;if(!Um(a,f))f=null;if(!Um(a,g))g=null;if(!U5(a,h))h=null;if(!U5(a,i))i=null;j=null;if(d!==null)j=d;if(e!==null&&!(j!==null&&Ey(b,e)>=Ey(b,j)))j=e;if(f!==null&&!(j!==null&&Ey(b,f)>=Ey(b,j)))j=f;if(g!==null&&!(j!==null&&Ey(b,g)>=Ey(b,j)))j=g;if(h!==null&&!(j!==null&&Ey(b,h)>=Ey(b,j)))j=h;if(i!==null&&!(j!==null&&Ey(b,i)>=Ey(b,j)))j=i;if(j===null)return null;k
=(-1);if(j===d)k=4;if(j===e)k=5;if(j===f)k=0;if(j===g)k=1;if(j===h)k=2;if(j===i)k=3;return A0A(0,0,0,k,j);}
function RI(a,b){return b===null?0:b.z>=a.M&&b.z<=a.U&&b.w>=a.S&&b.w<=a.W?1:0;}
function Um(a,b){return b===null?0:b.x>=a.R&&b.x<=a.V&&b.w>=a.S&&b.w<=a.W?1:0;}
function U5(a,b){return b===null?0:b.x>=a.R&&b.x<=a.V&&b.z>=a.M&&b.z<=a.U?1:0;}
function Xh(a,b){a.R=b.R;a.M=b.M;a.S=b.S;a.V=b.V;a.U=b.U;a.W=b.W;}
function AEu(){Bji=Ci();BeF=0;}
function Ql(){}
function Bu(){Bt.call(this);}
var Bjj=0;var Bgf=null;var Bjk=0;var Bjl=0;var Bjm=0;var Bjn=0.0;var Bjo=0;var Bjp=null;var Bjq=0;var Bjr=0;var Bjs=0.0;var Bjt=0.0;var Bju=0.0;var Bjv=0.0;var Bjw=0.0;var Bjx=0.0;var Bjy=0.0;var Bjz=0.0;var BjA=0.0;var BjB=0;var BfL=0.0;var BfM=0.0;var BfN=0.0;var BfO=0.0;var BjC=0;var BjD=0;var BjE=0;var BjF=0.0;var BjG=0.0;var BjH=0.0;var BjI=0;var BjJ=0;var BjK=0;var BjL=0;var BjM=null;var BjN=0;var BjO=null;var BjP=0;var BjQ=null;var BjR=0;var BjS=null;var BjT=null;var Bge=null;var BjU=null;var BjV=null;var BjW
=null;var BjX=null;var BjY=null;var BjZ=null;var Bgd=0;var Bj0=null;var Bj1=null;var Bj2=null;var Bj3=null;var Bj4=null;var Bj5=null;var Bj6=null;var Bj7=null;var Bj8=null;var Bj9=null;var Bj$=null;var Bj_=null;var Bka=null;var Bkb=null;var Bkc=Long_ZERO;var Bkd=0;function BW(){BW=Br(Bu);A1x();}
function Bke(){var a=new Bu();AO6(a);return a;}
function AO6(a){BW();VV(a);}
function Bb(b){BW();a:{switch(b){case 2884:K4(2884);break a;case 2896:Bjl=1;break a;case 2903:BjB=1;break a;case 2912:BjD=1;break a;case 2929:K4(2929);break a;case 3008:Bjm=1;break a;case 3042:K4(3042);break a;case 3553:Bjk=1;break a;case 32823:K4(32823);break a;case 32826:break;default:break a;}}}
function HL(b){var c;BW();a:{c=518;switch(b){case 514:c=514;break a;case 515:c=518;break a;case 516:c=513;break a;default:}}Be();BdB.depthFunc(c);}
function Sz(b,c){BW();Bjn=c;}
function Da(b){BW();BjL=b;}
function GM(){BW();switch(BjL){case 5888:break;case 5889:return BjO.data[BjP];case 5890:return BjQ.data[BjR];default:}return BjM.data[BjN];}
function C$(){BW();Fp(GM());}
function Hi(b,c,d,e){BW();Be();BdY.data[0]=b;BdY.data[1]=c;BdY.data[2]=d;BdY.data[3]=e;BdB.viewport(b,c,d,e);}
function D5(b){BW();Be();BdB.clear(b);}
function Ir(b,c,d,e,f,g){var h,i,j,k;BW();h=GM();i=c-b;h.eu=2.0/i;h.es=0.0;h.et=0.0;h.er=0.0;h.ex=0.0;j=e-d;h.ey=2.0/j;h.ev=0.0;h.ew=0.0;h.eC=0.0;h.eA=0.0;k=g-f;h.eB=2.0/k;h.ez=0.0;h.gV= -(c+b)/i;h.gW= -(e+d)/j;h.gT=(g+f)/k;h.gU=1.0;}
function Bw(b,c,d){var e;BW();L2(BjV,b,c,d);e=GM();Vb(e,BjV,e);if(!Bjo)return;e=new Cc;Bo(e,B(310));M(e);}
function HB(b,c,d,e){BW();Be();BdB.clearColor(b,c,d,e);}
function Bd(b){BW();a:{switch(b){case 2884:J5(2884);break a;case 2896:Bjl=0;break a;case 2903:BjB=0;break a;case 2912:BjD=0;break a;case 2929:J5(2929);break a;case 3008:Bjm=0;break a;case 3042:J5(3042);break a;case 3553:Bjk=0;break a;case 32823:J5(32823);break a;case 32826:break;default:break a;}}}
function BU(b,c,d,e){BW();Bjs=b;Bjt=c;Bju=d;Bjv=e;}
function SD(b,c,d,e,f,g,h,i,j){var k,l,m,n;BW();Be();if(j===null){k=BdB;l=null;k.texImage2D(3553,c,32856,e,f,g,6408,5121,l);}else{m=Ct(j);k=BdZ;n=0;while(n<m){h=(ALO(j)&255)<<16>>16;k[n]=h;n=n+1|0;}j=new Uint8Array(BdZ.buffer,0,m);BdB.texImage2D(3553,c,32856,e,f,g,6408,5121,j);}}
function B3(){BW();a:{switch(BjL){case 5888:break;case 5889:if(BjP>=(BjO.data.length-1|0)){Cg(C_(),B(311));break a;}BjP=BjP+1|0;GP(BjO.data[BjP],BjO.data[BjP-1|0]);break a;case 5890:if(BjR>=(BjQ.data.length-1|0)){Cg(C_(),B(312));break a;}BjR=BjR+1|0;GP(BjQ.data[BjR],BjQ.data[BjR-1|0]);break a;default:}if(BjN>=(BjM.data.length-1|0))Cg(C_(),B(313));else{BjN=BjN+1|0;GP(BjM.data[BjN],BjM.data[BjN-1|0]);}}}
function Bv(b,c,d,e){var f;BW();L2(BjV,c,d,e);f=GM();W2(f,b*0.01745329238474369,BjV,f);if(!Bjo)return;f=new Cc;Bo(f,B(310));M(f);}
function BE(){BW();a:{switch(BjL){case 5888:break;case 5889:if(BjP<=0){Cg(C_(),B(314));break a;}BjP=BjP-1|0;break a;case 5890:if(BjR<=0){Cg(C_(),B(315));break a;}BjR=BjR-1|0;break a;default:}if(BjN<=0)Cg(C_(),B(316));else BjN=BjN-1|0;}}
function TV(b,c){BW();a:{switch(b){case 2982:break;case 2983:TX(BjO.data[BjP],c);break a;default:}TX(BjM.data[BjN],c);}}
function CC(b,c,d){var e;BW();L2(BjV,b,c,d);ZF(GM(),BjV);if(!Bjo)return;e=new Cc;Bo(e,B(310));M(e);}
function Dg(b,c){BW();BjE=b==1&&c==771?1:0;Be();BdB.blendFunc(b,c);}
function Gv(b){BW();Be();BdB.depthMask(!!b);}
function FG(b,c,d,e){BW();Be();BdB.colorMask(!!b,!!c,!!d,!!e);}
function Cp(b,c){var d,e;BW();d=ANL(Bgf,c);Be();e=BdB;d=d!==null?d.BP:null;e.bindTexture(3553,d);}
function Ej(b,c,d){BW();if(!(d!=33071&&d!=10496))d=33071;Be();BdB.texParameteri(b,c,d);}
function Cj(b,c,d){var e;BW();e=Ed(b*b+c*c+d*d);Bjw=b/e;Bjx=c/e;Bjy=d/e;}
function Oh(b){BW();BjT=b;RU(b);}
function FU(b){var c;BW();if(!Bjo){c=CP(BjU,CZ(b));if(c!==null&&c.jM>0){Ru(c.lM|0|(BjB&&Bjl?8:0)|(!BjD?0:16)|(!Bjm?0:32)|(!Bjk?0:64));Oh(c.rj);PD(0,c.jM);BjJ=BjJ+((c.jM*6|0)/4|0)|0;BjK=BjK+(c.jM/2|0)|0;}}}
function FJ(b,c){BW();if(!Bjo){Bjp=CP(Bge,CZ(b));if(Bjp!==null){Bjp.lM=(-1);Bjp.jM=0;Bjo=1;}}}
function Ee(){var b,c,d,e;BW();if(Bjo){Bjo=0;Be();b=Beu.buffer;c=Bet;d=new Int32Array(b,0,c);Bet=0;e=UL(d);if(e>0){if(Bjp.o0===null){BP(BjU,CZ(Bjp.Bx),Bjp);Bjp.rj=Pc();Bjp.o0=L7();b=Pd(Bjp.lM);Oh(Bjp.rj);Hf(34962,Bjp.o0);RD(b);}Hf(34962,Bjp.o0);PF(34962,d,35044);BjI=BjI+e|0;}}}
function F8(b,c,d){BW();Bjs=b;Bjt=c;Bju=d;Bjv=1.0;}
function OK(b,c){BW();Be();BdB.polygonOffset(b,c);}
function WY(b){BW();a:{switch(b){case 32886:break;case 32888:Bjr=1;break a;default:break a;}Bjq=1;}}
function Tt(b){BW();a:{switch(b){case 32886:break;case 32888:Bjr=0;break a;default:break a;}Bjq=0;}}
function Qb(){BW();return 0|(!Bjq?0:1)|(!Bjr?0:4);}
function Ru(b){var c;BW();c=Pd(b);Bj0=c;AQ0(c);if(Bjm)AIV(c,Bjn);ALN(c,Bjs,Bjt,Bju,Bjv);if(BjD){ALp(c,(!BjE?0:2)+BjC|0);AQb(c,BfL,BfM,BfN,BfO);AKL(c,BjH);APM(c,BjF,BjG);}AMt(c,BjM.data[BjN]);AM2(c,BjO.data[BjP]);ZY(c,BjQ.data[BjR]);if(BjB&&Bjl){AB9(c,Bjw,Bjx,Bjy);ANc(c,BjY,BjZ);}AOL(c,Bjz,BjA);}
function ALs(b,c,d,e){var f;BW();if(Bjo){if(b!=7)Cg(C_(),B(317));else{if(Bjp.lM==(-1))Bjp.lM=Qb();else if(Bjp.lM!=Qb())Cg(C_(),B(318));f=Bjp;f.jM=f.jM+d|0;Be();e=e;if((Bet+e.length|0)<Beu.length){f=Beu;b=Bet;f.set(e,b);Bet=Bet+e.length|0;}}}else{BjI=BjI+UL(e)|0;BjJ=BjJ+d|0;Ru(0|(!Bjq?0:1)|(!Bjr?0:4)|(BjB&&Bjl?8:0)|(!BjD?0:16)|(!Bjm?0:32)|(!Bjk?0:64));Oh(Bj0.t_);Hf(34962,Bj0.uN);if(!Bj0.xf){Bj0.xf=1;PF(34962,Bj1,35048);}f=BdB;e=e;f.bufferSubData(34962,0,e);if(b==7){PD(c,d);BjK=BjK+(d/2|0)|0;}else{a:{b:{switch
(b){case 1:break;case 2:case 4:break b;case 3:b=3;BjK=BjK+(d-1|0)|0;break a;case 5:b=5;BjK=BjK+(d-2|0)|0;break a;case 6:b=6;BjK=BjK+(d-2|0)|0;break a;default:break b;}b=1;BjK=BjK+(d/2|0)|0;break a;}b=4;BjK=BjK+(d/3|0)|0;}BdB.drawArrays(b,c,d);}}}
function PD(b,c){var d,e,f,g,h,i,j;BW();if(BjS===null){if(Bjj)d=ALS($rt_createIntArray(49200));else{e=A5x(0,196800,$rt_createByteArray(196800),0,196800,1,0);e.kL=Bgg;d=AHK(e);}f=0;while(f<16384){g=f*4|0;h=g+1|0;i=g+2|0;j=g+3|0;h=h<<16;NO(d,g|h);NO(d,j|h);NO(d,i|j<<16);f=f+1|0;}Gw(d);BjS=L7();Hf(34963,BjS);g=Ct(d);e=new Int32Array(BdZ.buffer);h=0;while(h<g){i=AGb(d);e[h]=i;h=h+1|0;}d=BdZ.buffer;g=g*4|0;e=new Uint8Array(d,0,g);BdB.bufferData(34963,e,35044);}if(!BjT.vQ){BjT.vQ=1;Hf(34963,BjS);}g=(c*6|0)/4|0;b=
(b*6|0)/4|0;Be();BdB.drawElements(4,g,5123,b);}
function Ma(b,c){BW();a:{if(b==2917){b:{switch(c){case 2048:break;case 9729:break b;default:break b;}BjC=2;break a;}BjC=1;}}}
function GL(b,c){BW();a:{switch(b){case 2914:break;case 2915:BjF=c;break a;case 2916:BjG=c;break a;default:break a;}BjH=c;}}
function A1x(){var b,c,d;Be();Bjj=1;Bgf=A_s(256);Bjk=0;Bjl=0;Bjm=0;Bjn=0.10000000149011612;Bjo=0;Bjp=null;Bjq=0;Bjr=0;Bjs=1.0;Bjt=1.0;Bju=1.0;Bjv=1.0;Bjw=1.0;Bjx=0.0;Bjy=0.0;Bjz=0.0;BjA=0.0;BjB=0;BfL=1.0;BfM=1.0;BfN=1.0;BfO=1.0;BjC=1;BjD=0;BjE=0;BjF=1.0;BjG=1.0;BjH=1.0;BjI=0;BjJ=0;BjK=0;BjL=5888;BjM=J(Es,32);BjN=0;BjO=J(Es,6);BjP=0;BjQ=J(Es,16);BjR=0;b=0;while(b<BjM.data.length){c=BjM.data;d=new Es;Fp(d);c[b]=d;b=b+1|0;}b=0;while(b<BjO.data.length){c=BjO.data;d=new Es;Fp(d);c[b]=d;b=b+1|0;}b=0;while(b<BjQ.data.length)
{c=BjQ.data;d=new Es;Fp(d);c[b]=d;b=b+1|0;}BjS=null;BjT=null;Bge=Df();BjU=Df();BjV=new U7;BjW=new G9;BjX=new G9;BjY=new G9;BjZ=new G9;Bgd=0;Bj0=null;Bj1=new Int32Array(525000);Bj2=null;Bj3=null;Bj4=null;Bj5=null;Bj6=null;Bj7=A_s(256);d=new Es;Fp(d);Bj8=Kw(d);Bj9=$rt_createFloatArray(16);Bj$=$rt_createFloatArray(16);d=new Es;Fp(d);Bj_=d;d=new Es;Fp(d);Bka=d;Bkb=new G9;Bkc=Long_ZERO;Bkd=0;}
function ACE(){D.call(this);}
function Bkf(){var a=new ACE();AUn(a);return a;}
function AUn(a){return;}
function DV(){var b,c;Be();if(!Bev)a:{Bd7=null;if(!P0(BdO)){b=Tp(BdO,0);Bd7=b;if(b!==null){c=1;break a;}}c=0;}else{Ox(BdO);Bd7=null;Bd9.data[29]=0;Bd9.data[157]=0;Bd9.data[28]=0;Bd9.data[219]=0;Bd9.data[220]=0;Bev=0;c=0;}return c;}
function CV(){Be();return Bd7===null?0:DC($rt_str(Bd7.type),B(319))?0:1;}
function Bh(){Be();return Bd7===null?(-1):T7(Bd7.which);}
function APW(b){Be();BdV=b;}
function BN(b){Be();if(Bev){Bd9.data[28]=0;Bd9.data[29]=0;Bd9.data[157]=0;Bd9.data[219]=0;Bd9.data[220]=0;}return Bd9.data[b];}
function NE(){var a=this;D.call(a);a.ru=0;a.tk=0;a.m5=0;a.lr=0;a.hf=0;a.iu=0;a.ee=0;a.ms=0;a.lg=0;a.t1=null;a.tT=null;a.xm=null;a.uv=null;a.yH=null;a.fs=null;a.gi=null;a.BN=null;a.f9=null;a.B_=null;a.Dg=null;a.ne=null;a.ww=null;a.zR=0;a.jY=0;a.cC=0;a.du=0;a.pP=0;}
var Bkg=null;var Bkh=null;function A_4(a){var b=new NE();APd(b,a);return b;}
function APd(a,b){var c,d;a.ru=1;a.tk=1;a.m5=0;a.lr=0;a.hf=0;a.iu=1;a.ee=0;a.ms=0;a.lg=1;a.t1=E7(B(320),17);a.tT=E7(B(321),30);a.xm=E7(B(322),31);a.uv=E7(B(323),32);a.yH=E7(B(324),57);a.fs=E7(B(325),23);a.gi=E7(B(326),16);a.BN=E7(B(327),20);a.f9=E7(B(328),33);a.B_=E7(B(329),28);a.Dg=E7(B(330),19);c=J(Vt,11);d=c.data;d[0]=a.t1;d[1]=a.tT;d[2]=a.xm;d[3]=a.uv;d[4]=a.yH;d[5]=a.gi;d[6]=a.fs;d[7]=a.BN;d[8]=a.f9;d[9]=a.B_;d[10]=a.Dg;a.ne=c;a.zR=12;a.jY=2;a.cC=0;a.du=0;a.pP=0;a.ww=b;}
function K5(a,b){var c;c=new U;W(c);c=I(I(c,a.ne.data[b].Ez),B(12));b=a.ne.data[b].bI;Be();return V(I(c,b>=0&&b<256?Ber.data[b]:B(10)));}
function X6(a,b,c){a.ne.data[b].bI=c;}
function Ea(a,b,c){if(!b)a.ru=a.ru?0:1;if(b==1)a.tk=a.tk?0:1;if(b==2)a.m5=a.m5?0:1;if(b==3)a.lr=a.lr?0:1;if(b==4)a.hf=(a.hf+c|0)&3;if(b==5)a.iu=a.iu?0:1;if(b==6)a.ee=a.ee?0:1;if(b==7)a.ms=a.ms?0:1;if(b==8)a.jY=(a.jY+c|0)&3;if(b==9){a.lg=a.lg?0:1;Je(a.ww.dY);}if(b==10){a.du=a.du?0:1;if(a.du){a.hf=2;a.iu=0;a.lg=0;a.ee=0;}Je(a.ww.dY);}if(b==11)a.pP=a.pP?0:1;}
function Q1(a,b){var c;a:{if(!b){c=new U;W(c);c=V(I(I(c,B(331)),!a.ru?B(332):B(333)));break a;}if(b==1){c=new U;W(c);c=V(I(I(c,B(334)),!a.tk?B(332):B(333)));break a;}if(b==2){c=new U;W(c);c=V(I(I(c,B(335)),!a.m5?B(332):B(333)));break a;}if(b==3){c=new U;W(c);c=V(I(I(c,B(336)),!a.lr?B(332):B(333)));break a;}if(b==4){c=new U;W(c);c=V(I(I(c,B(337)),Bkg.data[a.hf]));break a;}if(b==5){c=new U;W(c);c=V(I(I(c,B(338)),!a.iu?B(332):B(333)));break a;}if(b==6){c=new U;W(c);c=V(I(I(c,B(339)),!a.ee?B(332):B(333)));break a;}if
(b==7){c=new U;W(c);c=V(I(I(c,B(340)),!a.ms?B(332):B(333)));break a;}if(b==8){c=new U;W(c);c=V(I(I(c,B(341)),Bkh.data[a.jY]));break a;}if(b==9){c=new U;W(c);c=V(I(I(c,B(342)),!a.lg?B(343):B(344)));break a;}if(b==10){c=new U;W(c);c=V(I(I(c,B(345)),!a.du?B(332):B(333)));break a;}if(b!=11){c=B(3);break a;}c=new U;W(c);c=V(I(I(c,B(346)),!a.pP?B(332):B(333)));}return c;}
function A2s(a){return;}
function A00(a){return;}
function AHT(){var b,c;b=J(B4,4);c=b.data;c[0]=B(347);c[1]=B(348);c[2]=B(349);c[3]=B(350);Bkg=b;b=J(B4,4);c=b.data;c[0]=B(351);c[1]=B(352);c[2]=B(353);c[3]=B(354);Bkh=b;}
function Ip(){var a=this;D.call(a);a.t2=null;a.pZ=0;a.mA=0;a.oL=0;a.oM=0;a.kY=0;a.k7=0;a.lj=0;a.BA=0;a.Eo=0;a.Dp=0;a.nV=0;a.o4=0;a.p7=0;a.fv=0;a.g1=null;a.EW=0;a.A2=0;a.DK=0;a.Hu=0.0;a.i3=0;a.E6=null;a.In=0;a.xJ=0;a.JN=0;a.on=0;a.kI=0;a.gl=null;a.jh=null;}
var Bki=null;var BeH=0;function Tv(){Tv=Br(Ip);A_h();}
function Bbq(a,b,c,d,e,f,g){var h=new Ip();AI9(h,a,b,c,d,e,f,g);return h;}
function AI9(a,b,c,d,e,f,g,h){Tv();a.pZ=(-1);a.fv=0;a.g1=$rt_createBooleanArray(2);a.xJ=1;a.kI=0;a.gl=Ci();a.t2=b;a.jh=c;a.lj=g;a.k7=g;a.kY=g;a.Hu=D_((Bj(a.kY,a.kY)+Bj(a.k7,a.k7)|0)+Bj(a.lj,a.lj)|0)/2.0;a.pZ=h;a.mA=(-999);Sn(a,d,e,f);a.i3=0;}
function Sn(a,b,c,d){var e,f;if(!(b==a.mA&&c==a.oL&&d==a.oM)){PW(a);a.mA=b;a.oL=c;a.oM=d;a.EW=b+(a.kY/2|0)|0;a.A2=c+(a.k7/2|0)|0;a.DK=d+(a.lj/2|0)|0;a.nV=b&1023;a.o4=c;a.p7=d&1023;a.BA=b-a.nV|0;a.Eo=c-a.o4|0;a.Dp=d-a.p7|0;a.E6=Nu(b-2.0,c-2.0,d-2.0,(b+a.kY|0)+2.0,(c+a.k7|0)+2.0,(d+a.lj|0)+2.0);FJ(a.pZ+2|0,4864);e=D4(a.nV-2.0,a.o4-2.0,a.p7-2.0,(a.nV+a.kY|0)+2.0,(a.o4+a.k7|0)+2.0,(a.p7+a.lj|0)+2.0);BA();f=BeE;Bz(f);Bg(f,e.R,e.U,e.S);Bg(f,e.V,e.U,e.S);Bg(f,e.V,e.M,e.S);Bg(f,e.R,e.M,e.S);Bg(f,e.R,e.M,e.W);Bg(f,e.V,
e.M,e.W);Bg(f,e.V,e.U,e.W);Bg(f,e.R,e.U,e.W);Bg(f,e.R,e.M,e.S);Bg(f,e.V,e.M,e.S);Bg(f,e.V,e.M,e.W);Bg(f,e.R,e.M,e.W);Bg(f,e.R,e.U,e.W);Bg(f,e.V,e.U,e.W);Bg(f,e.V,e.U,e.S);Bg(f,e.R,e.U,e.S);Bg(f,e.R,e.M,e.W);Bg(f,e.R,e.U,e.W);Bg(f,e.R,e.U,e.S);Bg(f,e.R,e.M,e.S);Bg(f,e.V,e.M,e.S);Bg(f,e.V,e.U,e.S);Bg(f,e.V,e.U,e.W);Bg(f,e.V,e.M,e.W);Bs(f);Ee();KW(a);}}
function ADj(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!a.i3)return;BeH=BeH+1|0;b=a.mA;c=a.oL;d=a.oM;e=a.mA+a.kY|0;f=a.oL+a.k7|0;g=a.oM+a.lj|0;h=0;while(h<2){a.g1.data[h]=1;h=h+1|0;}Bkj=0;i=Ga();DF(i,a.gl);Dy(a.gl);j=new Iv;k
=a.t2;l=b-1|0;m=c-1|0;n=d-1|0;o=e+1|0;h=f+1|0;p=g+1|0;$p=1;case 1:AEw(j,k,l,m,n,o,h,p);if(C()){break _;}k=A8g(j);l=0;a:{while(true){if(l>=2)break a;q=0;r=0;s=0;t=c;while(t<f){m=d;while(m<g){n=b;if(n<e){$p=2;continue _;}m=m+1|0;}t=t+1|0;}if(!s)r=0;else{Bs(Bki);Ee();E_(Bki,0.0,0.0,0.0);}if(r)a.g1.data[l]=0;if(!q)break;l=l+1|0;}}u=Ga();DF(u,a.gl);Fu(u,i);DF(a.jh,u);Fu(i,a.gl);Ge(a.jh,i);a.on=Bkj;a.kI=1;return;case 2:$z=HA(j,n,t,m);if(C()){break _;}p=$z;if(p>0){if(!s){s=1;FJ(a.pZ+l|0,4864);Bz(Bki);E_(Bki,a.nV-a.mA
|0,a.o4-a.oL|0,a.p7-a.oM|0);}if(!l){L();if(BeI.data[p] instanceof Eg){$p=3;continue _;}}L();v=BeI.data[p];o=R(v.pR(),l);if(o)q=1;else if(!o){$p=4;continue _;}}n=n+1|0;b:{c:while(true){if(n<e){continue _;}m=m+1|0;while(m>=g){t=t+1|0;while(t>=f){if(!s)r=0;else{Bs(Bki);Ee();E_(Bki,0.0,0.0,0.0);}if(r)a.g1.data[l]=0;if(!q)break c;l=l+1|0;if(l>=2)break b;q=0;r=0;s=0;t=c;}m=d;}n=b;}}u=Ga();DF(u,a.gl);Fu(u,i);DF(a.jh,u);Fu(i,a.gl);Ge(a.jh,i);a.on=Bkj;a.kI=1;return;case 3:$z=AFV(j,n,t,m);if(C()){break _;}w=$z;if(AIi(Bkk,
w))S(a.gl,w);L();v=BeI.data[p];o=R(v.pR(),l);if(o)q=1;else if(!o){$p=4;continue _;}n=n+1|0;d:{e:while(true){if(n<e){$p=2;continue _;}m=m+1|0;while(m>=g){t=t+1|0;while(t>=f){if(!s)r=0;else{Bs(Bki);Ee();E_(Bki,0.0,0.0,0.0);}if(r)a.g1.data[l]=0;if(!q)break e;l=l+1|0;if(l>=2)break d;q=0;r=0;s=0;t=c;}m=d;}n=b;}}u=Ga();DF(u,a.gl);Fu(u,i);DF(a.jh,u);Fu(i,a.gl);Ge(a.jh,i);a.on=Bkj;a.kI=1;return;case 4:$z=AN2(k,v,n,t,m);if(C()){break _;}o=$z;r=r|o;n=n+1|0;a:{f:while(true){if(n<e){$p=2;continue _;}m=m+1|0;while(m>=g)
{t=t+1|0;while(t>=f){if(!s)r=0;else{Bs(Bki);Ee();E_(Bki,0.0,0.0,0.0);}if(r)a.g1.data[l]=0;if(!q)break f;l=l+1|0;if(l>=2)break a;q=0;r=0;s=0;t=c;}m=d;}n=b;}}u=Ga();DF(u,a.gl);Fu(u,i);DF(a.jh,u);Fu(i,a.gl);Ge(a.jh,i);a.on=Bkj;a.kI=1;return;default:E$();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,$p);}
function G4(a,b){var c,d,e;c=b.d-a.EW;d=b.j-a.A2;e=b.e-a.DK;return c*c+d*d+e*e;}
function PW(a){var b;b=0;while(b<2){a.g1.data[b]=1;b=b+1|0;}a.fv=0;a.kI=0;}
function ARH(a){PW(a);a.t2=null;}
function PM(a,b){return !a.fv?(-1):a.g1.data[b]?(-1):a.pZ+b|0;}
function ASb(a,b){a.fv=MJ(b,a.E6);}
function AHy(a){return !a.kI?0:a.g1.data[0]&&a.g1.data[1]?1:0;}
function KW(a){a.i3=1;}
function A_h(){BA();Bki=BeE;BeH=0;}
function ASc(){var a=this;E2.call(a);a.js=null;a.lJ=0;}
function A7w(){var a=new ASc();AXL(a);return a;}
function A$a(a){var b=new ASc();Y5(b,a);return b;}
function AXL(a){Y5(a,32);}
function Y5(a,b){a.js=$rt_createByteArray(b);}
function A7K(a,b){var c,d;Ry(a,a.lJ+1|0);c=a.js.data;d=a.lJ;a.lJ=d+1|0;c[d]=b<<24>>24;}
function Rw(a,b,c,d){var e,f,g,h,i;Ry(a,a.lJ+d|0);e=0;while(e<d){f=b.data;g=a.js.data;h=a.lJ;a.lJ=h+1|0;i=c+1|0;g[h]=f[c];e=e+1|0;c=i;}}
function Ry(a,b){if(a.js.data.length<b){b=DE(b,(a.js.data.length*3|0)/2|0);a.js=Oi(a.js,b);}}
function Ig(a){return Oi(a.js,a.lJ);}
function JV(){B6.call(this);}
function Bkl(){var a=new JV();A5B(a);return a;}
function A5B(a){P(a);}
function Og(){}
function F0(){var a=this;D.call(a);a.f6=null;a.dZ=null;a.l6=null;a.gK=null;a.kT=null;a.fC=null;a.dU=Long_ZERO;a.sp=Long_ZERO;a.sT=Long_ZERO;a.rs=Long_ZERO;a.ge=0;a.hU=0;a.sd=0;a.so=0;a.bg=null;a.i2=0;a.C8=null;a.q=null;a.fk=0;a.p0=0;a.fj=0;a.tE=0;a.cv=null;a.hl=null;a.lw=Long_ZERO;a.ti=null;a.wL=Long_ZERO;a.IZ=null;a.nc=null;a.qj=null;a.eL=0;a.ua=0;}
var Bkm=null;var Bkn=null;var Bko=0;function Bkp(a,b){var c=new F0();Q2(c,a,b);return c;}
function ASe(b){var c,d,e,f,$$je,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:c=new U;W(c);c=V(I(I(c,b),B(355)));$p=1;case 1:$z=ALG(c);if(C()){break _;}d=$z;c=Dz();e=new U;W(e);Cg(c,V(I(I(e,b),B(355))));if(d===null)return null;a:{try{e=My(MW(O2(Ur(d))),B(356));}catch($$e){$$je=Y($$e);if($$je instanceof BT){f=$$je;break a;}else{throw $$e;}}return e;}B9(f);return null;default:E$();}}C4().s(b,c,d,e,f,$p);}
function Q2(a,b,c){var d,e,f,g,h,i,$$je,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.eL=0;a.f6=Ci();a.dZ=Ci();a.l6=Ci();a.gK=BbU();a.kT=Ga();a.fC=Ci();a.dU=Long_ZERO;a.sp=Long_fromInt(8961023);a.sT=Long_fromInt(12638463);a.rs=Long_fromInt(16777215);a.ge=0;a.hU=Lo(new DB);a.sd=1013904223;a.so=0;a.q=new DB;a.tE=0;a.cv=Ci();a.lw=Long_ZERO;a.wL=Long_ZERO;a.nc=Ci();a.qj=Ci();a.IZ=b;Bkn=b;b=new U;W(b);b
=V(I(I(b,Bkn),B(355)));$p=1;case 1:$z=ALG(b);if(C()){break _;}d=$z;b=Dz();e=new U;W(e);Cg(b,V(I(I(e,Bkn),B(355))));f=d!==null?1:0;a:{a.tE=f;if(d!==null){try{g=My(MW(O2(Ur(d))),B(356));a.lw=Mc(g,B(357));a.fk=FW(g,B(358));a.p0=FW(g,B(359));a.fj=FW(g,B(360));a.dU=Mc(g,B(361));a.wL=Mc(g,B(362));a.ti=My(g,B(5));break a;}catch($$e){$$je=Y($$e);if($$je instanceof BD){h=$$je;}else{throw $$e;}}B9(h);}}f=0;if(Long_eq(a.lw,Long_ZERO)){a.lw=c;f=1;}a.hl=ABo(a,Bkn);if(!f){Rb(a);return;}a.ua=1;a.fk=0;a.p0=64;a.fj=0;f=a.fk;i
=a.fj;$p=2;case 2:$z=AJQ(a,f,i);if(C()){break _;}f=$z;L();if(f!=Be5.b?0:1){a.ua=0;Rb(a);return;}a.fk=a.fk+(E(a.q,64)-E(a.q,64)|0)|0;a.fj=a.fj+(E(a.q,64)-E(a.q,64)|0)|0;f=a.fk;i=a.fj;continue _;default:E$();}}C4().s(a,b,c,d,e,f,g,h,i,$p);}
function ABs(a){return a.hl;}
function ABo(a,b){var c,d,e;c=new IJ;d=new Oy;d.r5=b;e=new Sy;e.Gf=$rt_createIntMultiArray([32,32]);e.t=a;e.a=new DB;e.yY=G_(e.a,16);e.yZ=G_(e.a,16);e.yX=G_(e.a,8);e.tO=G_(e.a,4);e.y1=G_(e.a,4);e.y2=G_(e.a,10);e.y0=G_(e.a,16);e.iU=G_(e.a,8);c.be=J(I8,1024);c.fT=(-999999999);c.gr=(-999999999);c.ji=A9n(a,$rt_createByteArray(32768),0,0);c.ji.Em=1;c.ji.qc=1;c.gp=a;c.ef=d;c.kS=e;return c;}
function AP6(a){var b,c,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.fk;c=a.fj;$p=1;case 1:$z=AJQ(a,b,c);if(C()){break _;}b=$z;if(b)return;a.fk=a.fk+(E(a.q,8)-E(a.q,8)|0)|0;a.fj=a.fj+(E(a.q,8)-E(a.q,8)|0)|0;b=a.fk;c=a.fj;continue _;default:E$();}}C4().s(a,b,c,$p);}
function AJQ(a,b,c){var d,e,f,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=63;e=d+1|0;$p=1;case 1:$z=ACy(a,b,e,c);if(C()){break _;}f=$z;if(!f){$p=2;continue _;}d=e;e=d+1|0;continue _;case 2:$z=ACy(a,b,d,c);if(C()){break _;}b=$z;return b;default:E$();}}C4().s(a,b,c,d,e,f,$p);}
function AGq(a){var b,c,$$je,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:try{if(a.ti!==null){YV(a.bg,a.ti);a.ti=null;}if(a.hl instanceof IJ)MV(a.hl,EW(a.bg.d|0)>>4,EW(a.bg.e|0)>>4);b=a.bg;$p=1;continue _;}catch($$e){$$je=Y($$e);if($$je instanceof BD){c=$$je;}else{throw $$e;}}B9(c);return;case 1:a:{try{AOi(a,b);if(C()){break _;}break a;}catch($$e){$$je=Y($$e);if($$je instanceof BD){c=$$je;}else{throw $$e;}}B9(c);}return;default:E$();}}C4().s(a,b,c,$p);}
function ABH(a,b,c){var d,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(c!==null)YL(c,B(363));$p=1;case 1:AMN(a);if(C()){break _;}if(c===null){d=a.hl;$p=2;continue _;}d=B(364);$p=3;continue _;case 2:AN0(d,b,c);if(C()){break _;}return;case 3:AR7(c,d);if(C()){break _;}d=a.hl;$p=2;continue _;default:E$();}}C4().s(a,b,c,d,$p);}
function AMN(a){var b,c,d,e,f,$$je,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=G$();Id(b,B(357),a.lw);Gz(b,B(358),a.fk);Gz(b,B(359),a.p0);Gz(b,B(360),a.fj);Id(b,B(361),a.dU);Id(b,B(362),a.wL);Id(b,B(365),B_());if(a.bg!==null){c=G$();ALv(a.bg,c);ANU(b,B(5),c);}c=G$();HH(c,B(356),b);try{b=BL(I(I(BX(),Bkn),B(366)));$p=1;continue _;}catch($$e){$$je=Y($$e);if($$je instanceof BD){d=$$je;}else{throw $$e;}}B9(d);return;case 1:try
{ALG(b);if(C()){break _;}b=BL(I(I(BX(),Bkn),B(367)));$p=2;continue _;}catch($$e){$$je=Y($$e);if($$je instanceof BD){d=$$je;}else{throw $$e;}}B9(d);return;case 2:try{ALG(b);if(C()){break _;}b=BL(I(I(BX(),Bkn),B(355)));$p=3;continue _;}catch($$e){$$je=Y($$e);if($$je instanceof BD){d=$$je;}else{throw $$e;}}B9(d);return;case 3:try{ALG(b);if(C()){break _;}e=A$a(131072);R2(c,AWj(e));b=BL(I(I(BX(),Bkn),B(366)));f=Ig(e);$p=4;continue _;}catch($$e){$$je=Y($$e);if($$je instanceof BD){d=$$je;}else{throw $$e;}}B9(d);return;case 4:try
{ACC(b,f);if(C()){break _;}b=BL(I(I(BX(),Bkn),B(367)));$p=5;continue _;}catch($$e){$$je=Y($$e);if($$je instanceof BD){d=$$je;}else{throw $$e;}}B9(d);return;case 5:try{$z=ALG(b);if(C()){break _;}f=$z;if(f!==null){b=BL(I(I(BX(),Bkn),B(367)));$p=8;continue _;}b=BL(I(I(BX(),Bkn),B(355)));c=BL(I(I(BX(),Bkn),B(367)));$p=6;continue _;}catch($$e){$$je=Y($$e);if($$je instanceof BD){d=$$je;}else{throw $$e;}}B9(d);return;case 6:try{ANn(b,c);if(C()){break _;}b=BL(I(I(BX(),Bkn),B(355)));$p=7;continue _;}catch($$e){$$je=
Y($$e);if($$je instanceof BD){d=$$je;}else{throw $$e;}}B9(d);return;case 7:try{$z=ALG(b);if(C()){break _;}f=$z;if(f!==null){b=BL(I(I(BX(),Bkn),B(355)));$p=11;continue _;}b=BL(I(I(BX(),Bkn),B(366)));c=BL(I(I(BX(),Bkn),B(355)));$p=9;continue _;}catch($$e){$$je=Y($$e);if($$je instanceof BD){d=$$je;}else{throw $$e;}}B9(d);return;case 8:try{AL4(b);if(C()){break _;}b=BL(I(I(BX(),Bkn),B(355)));c=BL(I(I(BX(),Bkn),B(367)));$p=6;continue _;}catch($$e){$$je=Y($$e);if($$je instanceof BD){d=$$je;}else{throw $$e;}}B9(d);return;case 9:try
{ANn(b,c);if(C()){break _;}b=BL(I(I(BX(),Bkn),B(366)));$p=10;continue _;}catch($$e){$$je=Y($$e);if($$je instanceof BD){d=$$je;}else{throw $$e;}}B9(d);return;case 10:a:{try{$z=ALG(b);if(C()){break _;}f=$z;if(f===null)break a;b=BL(I(I(BX(),Bkn),B(366)));$p=12;continue _;}catch($$e){$$je=Y($$e);if($$je instanceof BD){d=$$je;}else{throw $$e;}}B9(d);}return;case 11:try{AL4(b);if(C()){break _;}b=BL(I(I(BX(),Bkn),B(366)));c=BL(I(I(BX(),Bkn),B(355)));$p=9;continue _;}catch($$e){$$je=Y($$e);if($$je instanceof BD){d=
$$je;}else{throw $$e;}}B9(d);return;case 12:a:{try{AL4(b);if(C()){break _;}break a;}catch($$e){$$je=Y($$e);if($$je instanceof BD){d=$$je;}else{throw $$e;}}B9(d);}return;default:E$();}}C4().s(a,b,c,d,e,f,$p);}
function AAO(a,b){var c,d,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!b){$p=2;continue _;}c=a.hl;b=0;d=null;$p=1;case 1:$z=AN0(c,b,d);if(C()){break _;}b=$z;return b;case 2:AMN(a);if(C()){break _;}c=a.hl;b=0;d=null;$p=1;continue _;default:E$();}}C4().s(a,b,c,d,$p);}
function ACy(a,b,c,d){var e,f,g,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b>=(-32000000)&&d>=(-32000000)&&b<32000000&&d<=32000000){if(c<0)b=0;else{if(c<128){e=b>>4;f=d>>4;$p=1;continue _;}b=0;}}else b=0;return b;case 1:$z=ZW(a,e,f);if(C()){break _;}g=$z;return FR(g,b&15,c,d&15);default:E$();}}C4().s(a,b,c,d,e,f,g,$p);}
function Mo(a,b,c,d){return c>=0&&c<128?C5(a,b>>4,d>>4):0;}
function G2(a,b,c,d,e,f,g){var h,i;if(f>=0&&c<128){h=b>>4;b=d>>4;c=e>>4;d=g>>4;while(h<=c){i=b;while(i<=d){if(!C5(a,h,i))return 0;i=i+1|0;}h=h+1|0;}return 1;}return 0;}
function C5(a,b,c){return B2(a.hl,b,c);}
function XY(a,b,c){var d,e,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=b>>4;b=c>>4;$p=1;case 1:$z=ZW(a,d,b);if(C()){break _;}e=$z;return e;default:E$();}}C4().s(a,b,c,d,e,$p);}
function ZW(a,b,c){var d,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=a.hl;$p=1;case 1:$z=AOg(d,b,c);if(C()){break _;}d=$z;return d;default:E$();}}C4().s(a,b,c,d,$p);}
function AJn(a,b,c,d,e,f){var g,h,i,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b>=(-32000000)&&d>=(-32000000)&&b<32000000&&d<=32000000){if(c<0)return 0;if(c>=128)return 0;g=b>>4;h=d>>4;$p=1;continue _;}return 0;case 1:$z=ZW(a,g,h);if(C()){break _;}i=$z;b=b&15;d=d&15;$p=2;case 2:$z=ADG(i,b,c,d,e,f);if(C()){break _;}b=$z;return b;default:E$();}}C4().s(a,b,c,d,e,f,g,h,i,$p);}
function ALt(a,b,c,d,e){var f,g,h,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b>=(-32000000)&&d>=(-32000000)&&b<32000000&&d<=32000000){if(c<0)return 0;if(c>=128)return 0;f=b>>4;g=d>>4;$p=1;continue _;}return 0;case 1:$z=ZW(a,f,g);if(C()){break _;}h=$z;g=b&15;b=d&15;$p=2;case 2:$z=ADD(h,g,c,b,e);if(C()){break _;}b=$z;return b;default:E$();}}C4().s(a,b,c,d,e,f,g,h,$p);}
function AB3(a,b,c,d){var e,f,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=ACy(a,b,c,d);if(C()){break _;}e=$z;if(!e)f=Bf4;else{L();f=BeI.data[e].b_;}return f;default:E$();}}C4().s(a,b,c,d,e,f,$p);}
function AEL(a,b,c,d){var e,f,g,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b>=(-32000000)&&d>=(-32000000)&&b<32000000&&d<=32000000){if(c<0)return 0;if(c>=128)return 0;e=b>>4;f=d>>4;$p=1;continue _;}return 0;case 1:$z=ZW(a,e,f);if(C()){break _;}g=$z;return RW(g,b&15,c,d&15);default:E$();}}C4().s(a,b,c,d,e,f,g,$p);}
function ACi(a,b,c,d,e){var $p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AKw(a,b,c,d,e);if(C()){break _;}return;default:E$();}}C4().s(a,b,c,d,e,$p);}
function AKw(a,b,c,d,e){var f,g,h,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b>=(-32000000)&&d>=(-32000000)&&b<32000000&&d<=32000000){if(c<0)return 0;if(c>=128)return 0;f=b>>4;g=d>>4;$p=1;continue _;}return 0;case 1:$z=ZW(a,f,g);if(C()){break _;}h=$z;AAx(h,b&15,c,d&15,e);return 1;default:E$();}}C4().s(a,b,c,d,e,f,g,h,$p);}
function APy(a,b,c,d,e){var f,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=ALt(a,b,c,d,e);if(C()){break _;}f=$z;if(!f)return 0;$p=2;case 2:AEP(a,b,c,d,e);if(C()){break _;}return 1;default:E$();}}C4().s(a,b,c,d,e,f,$p);}
function AIZ(a,b,c,d,e,f){var $p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AJn(a,b,c,d,e,f);if(C()){break _;}f=$z;if(!f)return 0;$p=2;case 2:AEP(a,b,c,d,e);if(C()){break _;}return 1;default:E$();}}C4().s(a,b,c,d,e,f,$p);}
function AEP(a,b,c,d,e){var f,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=0;while(f<a.cv.s){Rt(Z(a.cv,f),b,c,d);f=f+1|0;}$p=1;case 1:AHN(a,b,c,d,e);if(C()){break _;}return;default:E$();}}C4().s(a,b,c,d,e,f,$p);}
function APK(a,b,c,d,e){var f;if(d<=e){f=d;d=e;e=f;}Jn(a,b,e,c,b,d,c);}
function Jn(a,b,c,d,e,f,g){var h;h=0;while(h<a.cv.s){AOH(Z(a.cv,h),b,c,d,e,f,g);h=h+1|0;}}
function AHN(a,b,c,d,e){var f,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=b-1|0;$p=1;case 1:AO7(a,f,c,d,e);if(C()){break _;}f=b+1|0;$p=2;case 2:AO7(a,f,c,d,e);if(C()){break _;}f=c-1|0;$p=3;case 3:AO7(a,b,f,d,e);if(C()){break _;}f=c+1|0;$p=4;case 4:AO7(a,b,f,d,e);if(C()){break _;}f=d-1|0;$p=5;case 5:AO7(a,b,c,f,e);if(C()){break _;}d=d+1|0;$p=6;case 6:AO7(a,b,c,d,e);if(C()){break _;}return;default:E$();}}C4().s(a,b,c,d,e,f,
$p);}
function AO7(a,b,c,d,e){var f,g,h,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.so)return;L();f=BeI.data;$p=1;case 1:$z=ACy(a,b,c,d);if(C()){break _;}g=$z;h=f[g];if(h===null)return;$p=2;case 2:h.e1(a,b,c,d,e);if(C()){break _;}return;default:E$();}}C4().s(a,b,c,d,e,f,g,h,$p);}
function AGf(a,b,c,d){var e,f,g,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=b>>4;f=d>>4;$p=1;case 1:$z=ZW(a,e,f);if(C()){break _;}g=$z;return Pq(g,b&15,c,d&15);default:E$();}}C4().s(a,b,c,d,e,f,g,$p);}
function XB(a,b,c,d){var e,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=1;$p=1;case 1:$z=AQN(a,b,c,d,e);if(C()){break _;}b=$z;return b;default:E$();}}C4().s(a,b,c,d,e,$p);}
function AQN(a,b,c,d,e){var f,g,h,i,j,k,l,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b>=(-32000000)&&d>=(-32000000)&&b<32000000&&d<=32000000){if(e){$p=1;continue _;}if(c<0)return 0;if(c>=128){f=15-a.ge|0;if(f<0)f=0;return f;}g=b>>4;e=d>>4;$p=7;continue _;}return 15;case 1:$z=ACy(a,b,c,d);if(C()){break _;}f=$z;L();if(f!=BeN.b&&f!=BgW.b){if(c<0)return 0;if(c>=128){f=15
-a.ge|0;if(f<0)f=0;return f;}g=b>>4;e=d>>4;$p=7;continue _;}e=c+1|0;g=0;$p=2;case 2:$z=AQN(a,b,e,d,g);if(C()){break _;}h=$z;e=b+1|0;g=0;$p=3;case 3:$z=AQN(a,e,c,d,g);if(C()){break _;}g=$z;e=b-1|0;i=0;$p=4;case 4:$z=AQN(a,e,c,d,i);if(C()){break _;}i=$z;e=d+1|0;j=0;$p=5;case 5:$z=AQN(a,b,c,e,j);if(C()){break _;}j=$z;d=d-1|0;e=0;$p=6;case 6:$z=AQN(a,b,c,d,e);if(C()){break _;}k=$z;if(g<=h)g=h;if(i<=g)i=g;if(j<=i)j=i;if(k<=j)k=j;return k;case 7:$z=ZW(a,g,e);if(C()){break _;}l=$z;return VU(l,b&15,c,d&15,a.ge);default:
E$();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,$p);}
function Zz(a,b,c,d){var e,f,g,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b>=(-32000000)&&d>=(-32000000)&&b<32000000&&d<=32000000){if(c<0)return 0;if(c>=128)return 1;e=b>>4;f=d>>4;if(!C5(a,e,f))return 0;$p=1;continue _;}return 0;case 1:$z=ZW(a,e,f);if(C()){break _;}g=$z;return Pq(g,b&15,c,d&15);default:E$();}}C4().s(a,b,c,d,e,f,g,$p);}
function ALI(a,b,c){var d,e,f,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b>=(-32000000)&&c>=(-32000000)&&b<32000000&&c<=32000000){d=b>>4;e=c>>4;if(!C5(a,d,e))return 0;$p=1;continue _;}return 0;case 1:$z=ZW(a,d,e);if(C()){break _;}f=$z;return UQ(f,b&15,c&15);default:E$();}}C4().s(a,b,c,d,e,f,$p);}
function AP_(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!Mo(a,c,d,e))return;if(b===Bkq){$p=1;continue _;}if(b===Bkr){$p=2;continue _;}$p=3;continue _;case 1:$z=Zz(a,c,d,e);if(C()){break _;}g=$z;if(g)f=15;$p=3;continue _;case 2:$z=ACy(a,c,d,e);if(C()){break _;}g=$z;L();if(Bgw.data[g]>f)f=Bgw.data[g];$p=3;case 3:$z=ALk(a,b,c,d,e);if(C()){break _;}g=$z;if(g!=f)DU(a,b,c,d,e,c,d,e);return;default:
E$();}}C4().s(a,b,c,d,e,f,g,$p);}
function ALk(a,b,c,d,e){var f,g,h,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(d>=0&&d<128&&c>=(-32000000)&&e>=(-32000000)&&c<32000000&&e<=32000000){f=c>>4;g=e>>4;if(!C5(a,f,g))return 0;$p=1;continue _;}return b.Ab;case 1:$z=ZW(a,f,g);if(C()){break _;}h=$z;return ACn(h,b,c&15,d,e&15);default:E$();}}C4().s(a,b,c,d,e,f,g,h,$p);}
function AMv(a,b,c,d,e,f){var g,h,i,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(c>=(-32000000)&&e>=(-32000000)&&c<32000000&&e<=32000000&&d>=0&&d<128){g=c>>4;h=e>>4;if(C5(a,g,h)){$p=1;continue _;}}return;case 1:$z=ZW(a,g,h);if(C()){break _;}i=$z;AQO(i,b,c&15,d,e&15,f);g=0;while(g<a.cv.s){Rt(Z(a.cv,g),c,d,e);g=g+1|0;}return;default:E$();}}C4().s(a,b,c,d,e,f,g,h,i,$p);}
function ANi(a,b,c,d){var e,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=Bkm.data;$p=1;case 1:$z=XB(a,b,c,d);if(C()){break _;}b=$z;return e[b];default:E$();}}C4().s(a,b,c,d,e,$p);}
function RC(a){return a.ge>=4?0:1;}
function AJm(a,b,c){var d,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=0;$p=1;case 1:$z=AE4(a,b,c,d);if(C()){break _;}b=$z;return b;default:E$();}}C4().s(a,b,c,d,$p);}
function AE4(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!(isNaN(b.x)?1:0)&&!(isNaN(b.z)?1:0)&&!(isNaN(b.w)?1:0)){if(!(isNaN(c.x)?1:0)&&!(isNaN(c.z)?1:0)&&!(isNaN(c.w)?1:0)){e
=K(c.x);f=K(c.z);g=K(c.w);h=K(b.x);i=K(b.z);j=K(b.w);k=20+(-1)|0;if(20<0)return null;if(!(isNaN(b.x)?1:0)&&!(isNaN(b.z)?1:0)&&!(isNaN(b.w)?1:0)){if(h==e&&i==f&&j==g)return null;l=999.0;m=999.0;n=999.0;o=R(e,h);if(o>0)l=h+1.0;if(o<0)l=h+0.0;p=R(f,i);if(p>0)m=i+1.0;if(p<0)m=i+0.0;i=R(g,j);if(i>0)n=j+1.0;if(i<0)n=j+0.0;q=999.0;r=999.0;s=999.0;t=c.x-b.x;u=c.z-b.z;v=c.w-b.w;if(l!==999.0)q=(l-b.x)/t;if(m!==999.0)r=(m-b.z)/u;if(n!==999.0)s=(n-b.w)/v;if(q<r&&q<s){o=o<=0?5:4;b.x=l;b.z=b.z+u*q;b.w=b.w+v*q;}else if(r>=
s){o=i<=0?3:2;b.x=b.x+t*s;b.z=b.z+u*s;b.w=n;}else{o=p<=0?1:0;b.x=b.x+t*r;b.z=m;b.w=b.w+v*r;}w=BY(b.x,b.z,b.w);v=K(b.x);w.x=v;h=v|0;if(o==5){h=h+(-1)|0;w.x=w.x+1.0;}v=K(b.z);w.z=v;i=v|0;if(o==1){i=i+(-1)|0;w.z=w.z+1.0;}v=K(b.w);w.w=v;j=v|0;if(o==3){j=j+(-1)|0;w.w=w.w+1.0;}$p=1;continue _;}return null;}return null;}return null;case 1:$z=ACy(a,h,i,j);if(C()){break _;}x=$z;$p=2;case 2:$z=AEL(a,h,i,j);if(C()){break _;}y=$z;L();z=BeI.data[x];if(x>0&&z.o7(y,d)){$p=5;continue _;}o=i-1|0;$p=3;case 3:$z=ACy(a,h,o,j);if
(C()){break _;}p=$z;$p=4;case 4:$z=AEL(a,h,o,j);if(C()){break _;}x=$z;w=BeI.data[p];if(p>0&&w.o7(x,d)){$p=6;continue _;}p=k;k=p+(-1)|0;if(p<0)return null;if(!(isNaN(b.x)?1:0)&&!(isNaN(b.z)?1:0)&&!(isNaN(b.w)?1:0)){if(h==e&&i==f&&j==g)return null;l=999.0;m=999.0;n=999.0;o=R(e,h);if(o>0)l=h+1.0;if(o<0)l=h+0.0;p=R(f,i);if(p>0)m=i+1.0;if(p<0)m=i+0.0;i=R(g,j);if(i>0)n=j+1.0;if(i<0)n=j+0.0;q=999.0;r=999.0;s=999.0;t=c.x-b.x;u=c.z-b.z;v=c.w-b.w;if(l!==999.0)q=(l-b.x)/t;if(m!==999.0)r=(m-b.z)/u;if(n!==999.0)s=(n-b.w)
/v;if(q<r&&q<s){o=o<=0?5:4;b.x=l;b.z=b.z+u*q;b.w=b.w+v*q;}else if(r>=s){o=i<=0?3:2;b.x=b.x+t*s;b.z=b.z+u*s;b.w=n;}else{o=p<=0?1:0;b.x=b.x+t*r;b.z=m;b.w=b.w+v*r;}w=BY(b.x,b.z,b.w);v=K(b.x);w.x=v;h=v|0;if(o==5){h=h+(-1)|0;w.x=w.x+1.0;}v=K(b.z);w.z=v;i=v|0;if(o==1){i=i+(-1)|0;w.z=w.z+1.0;}v=K(b.w);w.w=v;j=v|0;if(o==3){j=j+(-1)|0;w.w=w.w+1.0;}$p=1;continue _;}return null;case 5:$z=z.nI(a,h,i,j,b,c);if(C()){break _;}ba=$z;if(ba!==null)return ba;o=i-1|0;$p=3;continue _;case 6:$z=w.nI(a,h,o,j,b,c);if(C()){break _;}ba
=$z;if(ba!==null)return ba;p=k;k=p+(-1)|0;if(p<0)return null;if(!(isNaN(b.x)?1:0)&&!(isNaN(b.z)?1:0)&&!(isNaN(b.w)?1:0)){if(h==e&&i==f&&j==g)return null;l=999.0;m=999.0;n=999.0;o=R(e,h);if(o>0)l=h+1.0;if(o<0)l=h+0.0;p=R(f,i);if(p>0)m=i+1.0;if(p<0)m=i+0.0;i=R(g,j);if(i>0)n=j+1.0;if(i<0)n=j+0.0;q=999.0;r=999.0;s=999.0;t=c.x-b.x;u=c.z-b.z;v=c.w-b.w;if(l!==999.0)q=(l-b.x)/t;if(m!==999.0)r=(m-b.z)/u;if(n!==999.0)s=(n-b.w)/v;if(q<r&&q<s){o=o<=0?5:4;b.x=l;b.z=b.z+u*q;b.w=b.w+v*q;}else if(r>=s){o=i<=0?3:2;b.x=b.x+t
*s;b.z=b.z+u*s;b.w=n;}else{o=p<=0?1:0;b.x=b.x+t*r;b.z=m;b.w=b.w+v*r;}w=BY(b.x,b.z,b.w);v=K(b.x);w.x=v;h=v|0;if(o==5){h=h+(-1)|0;w.x=w.x+1.0;}v=K(b.z);w.z=v;i=v|0;if(o==1){i=i+(-1)|0;w.z=w.z+1.0;}v=K(b.w);w.w=v;j=v|0;if(o==3){j=j+(-1)|0;w.w=w.w+1.0;}$p=1;continue _;}return null;default:E$();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,$p);}
function Di(a,b,c,d,e){var f,g,h;f=0;g=R(d,1.0);e=16.0*d;while(f<a.cv.s){h=16.0;if(g>0)h=e;if(LD(a.bg,b)<h*h)Z(a.cv,f);f=f+1|0;}}
function Ex(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,$$je;a:{b:{try{h=0;}catch($$e){$$je=Y($$e);if($$je instanceof BD){i=$$je;break b;}else{throw $$e;}}j=R(f,1.0);k=16.0*f;while(true){try{if(h>=CY(a.cv))break;l=16.0;if(j>0)l=k;m=b-a.bg.d;n=c-a.bg.j;o=d-a.bg.e;if(m*m+n*n+o*o<l*l)AC3(Z(a.cv,h),e,b,c,d,f,g);h=h+1|0;continue;}catch($$e){$$je=Y($$e);if($$je instanceof BD){i=$$je;break b;}else{throw $$e;}}}break a;}B9(i);}}
function ATe(a,b,c,d,e,f){return;}
function BV(a,b,c,d,e,f,g,h){var i;i=0;while(i<a.cv.s){AH5(Z(a.cv,i),b,c,d,e,f,g,h);i=i+1|0;}}
function AOi(a,b){var c,d,e,f,g,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=K(b.d/16.0);d=K(b.e/16.0);if(!C5(a,c,d)){e=Dz();f=new U;W(f);Cg(e,V(FO(I(f,B(368)),b)));return;}$p=1;case 1:$z=ZW(a,c,d);if(C()){break _;}e=$z;VX(e,b);S(a.dZ,b);g=0;while(g<a.cv.s){Z(a.cv,g);g=g+1|0;}return;default:E$();}}C4().s(a,b,c,d,e,f,g,$p);}
function AU8(a,b){Cb(b);}
function ANE(a,b){S(a.cv,b);}
function AKU(a,b){H_(a.cv,b);}
function XW(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:Dy(a.nc);d=K(c.R);e=K(c.V+1.0);f=K(c.M);g=K(c.U+1.0);h=K(c.S);i=K(c.W+1.0);f=f-1|0;while(d<e){j=f;while(j<g){k=h;if(k<i){L();l=BeI.data;$p=2;continue _;}j=j+1|0;}d=d+1|0;}c=Dw(c,0.25,0.25,0.25);$p=1;case 1:$z=ADM(a,b,c);if(C()){break _;}m=$z;n=
0;while(n<m.s){o=Z(m,n).Bv();if(o!==null)S(a.nc,o);c=b.AZ(Z(m,n));if(c!==null)S(a.nc,c);n=n+1|0;}return a.nc;case 2:$z=ACy(a,d,j,k);if(C()){break _;}n=$z;p=l[n];if(p!==null){m=a.nc;$p=3;continue _;}k=k+1|0;while(k>=i){j=j+1|0;while(j>=g){d=d+1|0;if(d>=e){c=Dw(c,0.25,0.25,0.25);$p=1;continue _;}j=f;}k=h;}L();l=BeI.data;continue _;case 3:p.FC(a,d,j,k,c,m);if(C()){break _;}k=k+1|0;while(k>=i){j=j+1|0;while(j>=g){d=d+1|0;if(d>=e){c=Dw(c,0.25,0.25,0.25);$p=1;continue _;}j=f;}k=h;}L();l=BeI.data;$p=2;continue _;default:
E$();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,$p);}
function Oq(a,b){var c;c=1.0-(BC(Hz(a,b)*3.1415927410125732*2.0)*2.0+0.5);if(c<0.0)c=0.0;if(c>1.0)c=1.0;return c*11.0|0;}
function OV(a,b){var c,d,e,f;c=BC(Hz(a,b)*3.1415927410125732*2.0)*2.0+0.5;if(c<0.0)c=0.0;if(c>1.0)c=1.0;d=Long_toNumber(Long_and(Long_shr(a.sp,16),Long_fromInt(255)))/255.0;e=Long_toNumber(Long_and(Long_shr(a.sp,8),Long_fromInt(255)))/255.0;f=Long_toNumber(Long_and(a.sp,Long_fromInt(255)))/255.0;return BY(d*c,e*c,f*c);}
function Hz(a,b){var c;c=(Long_rem(a.dU,Long_fromInt(24000)).lo+b)/24000.0-0.25;if(c<0.0)c=c+1.0;if(c>1.0)c=c-1.0;return c+(1.0-(GE(c*3.141592653589793)+1.0)/2.0-c)/3.0;}
function S6(a,b){var c,d,e,f;c=BC(Hz(a,b)*3.1415927410125732*2.0)*2.0+0.5;if(c<0.0)c=0.0;if(c>1.0)c=1.0;d=Long_toNumber(Long_and(Long_shr(a.rs,16),Long_fromInt(255)))/255.0;e=Long_toNumber(Long_and(Long_shr(a.rs,8),Long_fromInt(255)))/255.0;f=Long_toNumber(Long_and(a.rs,Long_fromInt(255)))/255.0;b=c*0.8999999761581421+0.10000000149011612;return BY(d*b,e*b,f*(c*0.8500000238418579+0.15000000596046448));}
function ADt(a,b){var c,d,e,f;c=BC(Hz(a,b)*3.1415927410125732*2.0)*2.0+0.5;if(c<0.0)c=0.0;if(c>1.0)c=1.0;d=Long_toNumber(Long_and(Long_shr(a.sT,16),Long_fromInt(255)))/255.0;e=Long_toNumber(Long_and(Long_shr(a.sT,8),Long_fromInt(255)))/255.0;f=Long_toNumber(Long_and(a.sT,Long_fromInt(255)))/255.0;b=c*0.9399999976158142+0.05999999865889549;return BY(d*b,e*b,f*(c*0.9100000262260437+0.09000000357627869));}
function A8l(a,b,c){return 64;}
function AJs(a,b){var c;c=1.0-(BC(Hz(a,b)*3.1415927410125732*2.0)*2.0+0.75);if(c<0.0)c=0.0;if(c>1.0)c=1.0;return c*c*0.5;}
function Fn(a,b,c,d,e){var f,g;f=new JZ;g=Bks;Bks=Long_add(g,Long_fromInt(1));f.oT=g;f.fF=b;f.fp=c;f.fK=d;f.qa=e;if(G2(a,b-8|0,c-8|0,d-8|0,b+8|0,c+8|0,d+8|0)){if(e>0){L();f.jk=Long_add(Long_fromInt(BeI.data[e].mv()),a.dU);}if(!WE(a.kT,f)){Xk(a.kT,f);Zk(a.gK,f);}}}
function APg(a){var b,c,d,e,f,g,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:Ge(a.dZ,a.l6);b=0;while(b<a.cv.s){Z(a.cv,b);c=0;while(c<a.l6.s){Z(a.l6,c);c=c+1|0;}b=b+1|0;}Dy(a.l6);b=0;a:while(true){if(b>=a.dZ.s){b=0;if(b>=a.fC.s)return;d=Z(a.fC,b);$p=1;continue _;}b:{e=Z(a.dZ,b);if(e.bB!==null){if(!e.bB.cR&&e.bB.bH===e)break b;e.bB.bH=null;e.bB=null;}if(!e.cR){$p=2;continue _;}if(e.cR){c=K(e.d/16.0);f=K(e.e/16.0);if(C5(a,
c,f))break a;d=a.dZ;c=b+(-1)|0;En(d,b);g=0;while(g<a.cv.s){Z(a.cv,g);g=g+1|0;}b=c;}}b=b+1|0;}$p=3;continue _;case 1:d.tM();if(C()){break _;}b=b+1|0;if(b>=a.fC.s)return;d=Z(a.fC,b);continue _;case 2:Xy(a,e);if(C()){break _;}while(true){if(e.cR){c=K(e.d/16.0);f=K(e.e/16.0);if(C5(a,c,f)){$p=3;continue _;}d=a.dZ;c=b+(-1)|0;En(d,b);g=0;while(g<a.cv.s){Z(a.cv,g);g=g+1|0;}b=c;}b:{while(true){b=b+1|0;if(b>=a.dZ.s){b=0;if(b>=a.fC.s)return;d=Z(a.fC,b);$p=1;continue _;}e=Z(a.dZ,b);if(e.bB===null)break b;if(e.bB.cR)break;if
(e.bB.bH!==e)break;}e.bB.bH=null;e.bB=null;}if(e.cR)continue;else break;}continue _;case 3:$z=ZW(a,c,f);if(C()){break _;}d=$z;AM1(d,e);while(true){d=a.dZ;c=b+(-1)|0;En(d,b);g=0;while(g<a.cv.s){Z(a.cv,g);g=g+1|0;}b=c;while(true){b=b+1|0;if(b>=a.dZ.s){b=0;if(b>=a.fC.s)return;d=Z(a.fC,b);$p=1;continue _;}e=Z(a.dZ,b);if(e.bB!==null){if(!e.bB.cR&&e.bB.bH===e)continue;e.bB.bH=null;e.bB=null;}if(!e.cR){$p=2;continue _;}if(e.cR)break;}c=K(e.d/16.0);f=K(e.e/16.0);if(!C5(a,c,f))continue;else break;}continue _;default:
E$();}}C4().s(a,b,c,d,e,f,g,$p);}
function Xy(a,b){var c,d,e,f,g,h,i,j,k,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=K(b.d);K(b.j);d=K(b.e);if(!G2(a,c-16|0,0,d-16|0,c+16|0,128,d+16|0))return;b.cs=b.d;b.b7=b.j;b.ct=b.e;b.P=b.u;b.T=b.I;e=K(b.d/16.0);f=K(b.j/16.0);g=K(b.e/16.0);if(b.bB===null){$p=1;continue _;}$p=2;continue _;case 1:b.ep();if(C()){break _;}h=K(b.d/16.0);i=K(b.j/16.0);j=K(b.e/16.0);if(e==h&&f==i&&g
==j){if(b.bH!==null){if(!b.bH.cR&&b.bH.bB===b){k=b.bH;$p=6;continue _;}b.bH.bB=null;b.bH=null;}if(!(!(isNaN(b.d)?1:0)&&!(!isFinite(b.d)?1:0)))b.d=b.cs;if(!(!(isNaN(b.j)?1:0)&&!(!isFinite(b.j)?1:0)))b.j=b.b7;if(!(!(isNaN(b.e)?1:0)&&!(!isFinite(b.e)?1:0)))b.e=b.ct;if(!(!(isNaN(b.I)?1:0)&&!(!isFinite(b.I)?1:0)))b.I=b.T;if(!(!(isNaN(b.u)?1:0)&&!(!isFinite(b.u)?1:0)))b.u=b.P;return;}if(C5(a,e,g)){$p=3;continue _;}if(!C5(a,h,j)){$p=4;continue _;}$p=5;continue _;case 2:b.BL();if(C()){break _;}h=K(b.d/16.0);i=K(b.j
/16.0);j=K(b.e/16.0);if(e==h&&f==i&&g==j){if(b.bH!==null){if(!b.bH.cR&&b.bH.bB===b){k=b.bH;$p=6;continue _;}b.bH.bB=null;b.bH=null;}if(!(!(isNaN(b.d)?1:0)&&!(!isFinite(b.d)?1:0)))b.d=b.cs;if(!(!(isNaN(b.j)?1:0)&&!(!isFinite(b.j)?1:0)))b.j=b.b7;if(!(!(isNaN(b.e)?1:0)&&!(!isFinite(b.e)?1:0)))b.e=b.ct;if(!(!(isNaN(b.I)?1:0)&&!(!isFinite(b.I)?1:0)))b.I=b.T;if(!(!(isNaN(b.u)?1:0)&&!(!isFinite(b.u)?1:0)))b.u=b.P;return;}if(C5(a,e,g)){$p=3;continue _;}if(!C5(a,h,j)){$p=4;continue _;}$p=5;continue _;case 3:$z=ZW(a,
e,g);if(C()){break _;}k=$z;R5(k,b,f);if(!C5(a,h,j)){$p=4;continue _;}$p=5;continue _;case 4:b.C6();if(C()){break _;}if(b.bH!==null){if(!b.bH.cR&&b.bH.bB===b){k=b.bH;$p=6;continue _;}b.bH.bB=null;b.bH=null;}if(!(!(isNaN(b.d)?1:0)&&!(!isFinite(b.d)?1:0)))b.d=b.cs;if(!(!(isNaN(b.j)?1:0)&&!(!isFinite(b.j)?1:0)))b.j=b.b7;if(!(!(isNaN(b.e)?1:0)&&!(!isFinite(b.e)?1:0)))b.e=b.ct;if(!(!(isNaN(b.I)?1:0)&&!(!isFinite(b.I)?1:0)))b.I=b.T;if(!(!(isNaN(b.u)?1:0)&&!(!isFinite(b.u)?1:0)))b.u=b.P;return;case 5:$z=ZW(a,h,j);if
(C()){break _;}k=$z;VX(k,b);if(b.bH!==null){if(!b.bH.cR&&b.bH.bB===b){k=b.bH;$p=6;continue _;}b.bH.bB=null;b.bH=null;}if(!(!(isNaN(b.d)?1:0)&&!(!isFinite(b.d)?1:0)))b.d=b.cs;if(!(!(isNaN(b.j)?1:0)&&!(!isFinite(b.j)?1:0)))b.j=b.b7;if(!(!(isNaN(b.e)?1:0)&&!(!isFinite(b.e)?1:0)))b.e=b.ct;if(!(!(isNaN(b.I)?1:0)&&!(!isFinite(b.I)?1:0)))b.I=b.T;if(!(!(isNaN(b.u)?1:0)&&!(!isFinite(b.u)?1:0)))b.u=b.P;return;case 6:Xy(a,k);if(C()){break _;}if(!(!(isNaN(b.d)?1:0)&&!(!isFinite(b.d)?1:0)))b.d=b.cs;if(!(!(isNaN(b.j)?1:0)
&&!(!isFinite(b.j)?1:0)))b.j=b.b7;if(!(!(isNaN(b.e)?1:0)&&!(!isFinite(b.e)?1:0)))b.e=b.ct;if(!(!(isNaN(b.I)?1:0)&&!(!isFinite(b.I)?1:0)))b.I=b.T;if(!(!(isNaN(b.u)?1:0)&&!(!isFinite(b.u)?1:0)))b.u=b.P;return;default:E$();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function AM7(a,b){var c,d,e,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=null;$p=1;case 1:$z=ADM(a,c,b);if(C()){break _;}c=$z;d=0;while(d<c.s){e=Z(c,d);if(!e.cR&&e.mD)return 0;d=d+1|0;}return 1;default:E$();}}C4().s(a,b,c,d,e,$p);}
function AJk(a,b){var c,d,e,f,g,h,i,j,k,l,m,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=K(b.R);d=K(b.V+1.0);e=K(b.M);f=K(b.U+1.0);g=K(b.S);h=K(b.W+1.0);if(b.R<0.0)c=c+(-1)|0;if(b.M<0.0)e=e+(-1)|0;if(b.S<0.0)g=g+(-1)|0;while(c<d){i=e;while(i<f){j=g;if(j<h){L();k=BeI.data;$p=1;continue _;}i=i+1|0;}c=c+1|0;}return 0;case 1:$z=ACy(a,c,i,j);if(C()){break _;}l=$z;m=
k[l];if(m!==null&&m.b_.nE())return 1;j=j+1|0;a:while(true){if(j<h){L();k=BeI.data;continue _;}i=i+1|0;while(i>=f){c=c+1|0;if(c>=d)break a;i=e;}j=g;}return 0;default:E$();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function ARb(a,b){var c,d,e,f,g,h,i,j,k,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=K(b.R);d=K(b.V+1.0);e=K(b.M);f=K(b.U+1.0);g=K(b.S);h=K(b.W+1.0);while(c<d){i=e;while(i<f){j=g;if(j<h){$p=1;continue _;}i=i+1|0;}c=c+1|0;}return 0;case 1:$z=ACy(a,c,i,j);if(C()){break _;}k=$z;L();if(k!=Bgi.b&&k!=BfS.b&&k!=Bgy.b){j=j+1|0;a:while(true){if(j<h){continue _;}i=i+1|0;while(i>=f){c=c+1|
0;if(c>=d)break a;i=e;}j=g;}return 0;}return 1;default:E$();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function AAv(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=K(b.R);f=K(b.V+1.0);g=K(b.M);h=K(b.U+1.0);i=K(b.S);j=K(b.W+1.0);k=0;l=BY(0.0,0.0,0.0);m=h;while(e<f){n=g;while(n<h){o=i;if(o<j){L();p=BeI.data;$p=1;continue _;}n=n+1|0;}e=e+1|0;}if(HR(l)>0.0){b=CD(l);d.g=d.g+
b.x*0.004;d.i=d.i+b.z*0.004;d.h=d.h+b.w*0.004;}return k;case 1:$z=ACy(a,e,n,o);if(C()){break _;}q=$z;r=p[q];if(r!==null&&r.b_===c){s=n+1|0;$p=2;continue _;}o=o+1|0;a:while(true){if(o<j){L();p=BeI.data;continue _;}n=n+1|0;while(n>=h){e=e+1|0;if(e>=f)break a;n=g;}o=i;}if(HR(l)>0.0){b=CD(l);d.g=d.g+b.x*0.004;d.i=d.i+b.z*0.004;d.h=d.h+b.w*0.004;}return k;case 2:$z=AEL(a,e,n,o);if(C()){break _;}q=$z;if(m>=s-Jy(q)){k=1;$p=3;continue _;}o=o+1|0;b:while(true){if(o<j){L();p=BeI.data;$p=1;continue _;}n=n+1|0;while(n>=
h){e=e+1|0;if(e>=f)break b;n=g;}o=i;}if(HR(l)>0.0){b=CD(l);d.g=d.g+b.x*0.004;d.i=d.i+b.z*0.004;d.h=d.h+b.w*0.004;}return k;case 3:r.qF(a,e,n,o,d,l);if(C()){break _;}o=o+1|0;c:while(true){if(o<j){L();p=BeI.data;$p=1;continue _;}n=n+1|0;while(n>=h){e=e+1|0;if(e>=f)break c;n=g;}o=i;}if(HR(l)>0.0){b=CD(l);d.g=d.g+b.x*0.004;d.i=d.i+b.z*0.004;d.h=d.h+b.w*0.004;}return k;default:E$();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,$p);}
function AOu(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=K(b.R);e=K(b.V+1.0);f=K(b.M);g=K(b.U+1.0);h=K(b.S);i=K(b.W+1.0);while(d<e){j=f;while(j<g){k=h;if(k<i){L();l=BeI.data;$p=1;continue _;}j=j+1|0;}d=d+1|0;}return 0;case 1:$z=ACy(a,d,j,k);if(C()){break _;}m=$z;n=l[m];if(n!==null&&n.b_===c)return 1;k=k+1|0;a:while(true)
{if(k<i){L();l=BeI.data;continue _;}j=j+1|0;while(j>=g){d=d+1|0;if(d>=e)break a;j=f;}k=h;}return 0;default:E$();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function Yb(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=new WV;$p=1;case 1:AI5(g,a,b,c,d,e,f);if(C()){break _;}return;default:E$();}}C4().s(a,b,c,d,e,f,g,$p);}
function ADC(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=1.0/((c.V-c.R)*2.0+1.0);e=1.0/((c.U-c.M)*2.0+1.0);f=1.0/((c.W-c.S)*2.0+1.0);g=0;h=0;i=0.0;while(i<=1.0){j=0.0;while(j<=1.0){if(0.0<=1.0){k=c.R+(c.V-c.R)*i;l=c.M+(c.U-c.M)*j;m=c.S;n=c.W-c.S;o=0.0;p=BY(k,l,m+n*o);$p=1;continue _;}j=
j+e;}i=i+d;}return g/h;case 1:$z=AJm(a,p,b);if(C()){break _;}p=$z;if(p===null)g=g+1|0;h=h+1|0;q=o+f;a:while(true){if(q<=1.0){k=c.R+(c.V-c.R)*i;l=c.M+(c.U-c.M)*j;m=c.S;n=c.W-c.S;o=q;p=BY(k,l,m+n*o);continue _;}j=j+e;while(j>1.0){i=i+d;if(i>1.0)break a;j=0.0;}q=0.0;}return g/h;default:E$();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,$p);}
function ABM(a,b,c,d,e){var $p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!e)c=c+(-1)|0;if(e==1)c=c+1|0;if(e==2)d=d+(-1)|0;if(e==3)d=d+1|0;if(e==4)b=b+(-1)|0;if(e==5)b=b+1|0;$p=1;case 1:$z=ACy(a,b,c,d);if(C()){break _;}e=$z;L();if(e!=Bgi.b)return;Ex(a,b+0.5,c+0.5,d+0.5,B(215),0.5,2.5999999046325684+(N(a.q)-N(a.q))*0.800000011920929);e=0;$p=2;case 2:APy(a,b,c,d,e);if(C()){break _;}return;default:E$();}}C4().s(a,b,c,d,e,$p);}
function AXP(a,b){return null;}
function AN$(a){var b;b=new U;W(b);return V(Bf(I(b,B(369)),a.dZ.s));}
function AXZ(a){return a.bg;}
function ANy(a,b,c,d){var e,f,g,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=b>>4;f=d>>4;$p=1;case 1:$z=ZW(a,e,f);if(C()){break _;}g=$z;if(g===null)return null;b=b&15;d=d&15;$p=2;case 2:$z=ANp(g,b,c,d);if(C()){break _;}g=$z;return g;default:E$();}}C4().s(a,b,c,d,e,f,g,$p);}
function AFU(a,b,c,d,e){var f,g,h,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=b>>4;g=d>>4;$p=1;case 1:$z=ZW(a,f,g);if(C()){break _;}h=$z;if(h!==null)AJl(h,b&15,c,d&15,e);return;default:E$();}}C4().s(a,b,c,d,e,f,g,h,$p);}
function AFN(a,b,c,d){var e,f,g,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=b>>4;f=d>>4;$p=1;case 1:$z=ZW(a,e,f);if(C()){break _;}g=$z;if(g!==null)AD1(g,b&15,c,d&15);return;default:E$();}}C4().s(a,b,c,d,e,f,g,$p);}
function AAE(a,b,c,d){var e,f,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:L();e=BeI.data;$p=1;case 1:$z=ACy(a,b,c,d);if(C()){break _;}b=$z;f=e[b];return f!==null?f.d5():0;default:E$();}}C4().s(a,b,c,d,e,f,$p);}
function AJi(a,b){var c,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=1;$p=1;case 1:ABH(a,c,b);if(C()){break _;}return;default:E$();}}C4().s(a,b,c,$p);}
function AIm(a){var b,c,$$je,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.eL>=50)return 0;a.eL=a.eL+1|0;a:{try{b=500;}catch($$e){$$je=Y($$e);c=$$je;break a;}b:{try{if(CY(a.f6)>0)break b;}catch($$e){$$je=Y($$e);c=$$je;break a;}a.eL=a.eL-1|0;return 0;}c:{try{b=b+(-1)|0;if(b>0)break c;}catch($$e){$$je=Y($$e);c=$$je;break a;}a.eL=a.eL-1|0;return 1;}try{c=En(a.f6,CY(a.f6)-1|0);$p=1;continue _;}catch($$e){$$je=Y($$e);c=$$je;}}a.eL=a.eL-1|0;M(c);case 1:d:
{try{AOo(c,a);if(C()){break _;}}catch($$e){$$je=Y($$e);c=$$je;break d;}a:{try{if(CY(a.f6)>0)break a;}catch($$e){$$je=Y($$e);c=$$je;break d;}a.eL=a.eL-1|0;return 0;}b:{try{b=b+(-1)|0;if(b>0)break b;}catch($$e){$$je=Y($$e);c=$$je;break d;}a.eL=a.eL-1|0;return 1;}try{c=En(a.f6,CY(a.f6)-1|0);continue _;}catch($$e){$$je=Y($$e);c=$$je;}}a.eL=a.eL-1|0;M(c);default:E$();}}C4().s(a,b,c,$p);}
function DU(a,b,c,d,e,f,g,h){AKW(a,b,c,d,e,f,g,h,1);}
function AKW(a,b,c,d,e,f,g,h,i){var j,k,l,m;Bko=Bko+1|0;if(Bko==50){Bko=Bko-1|0;return;}if(!Mo(a,(f+c|0)/2|0,64,(h+e|0)/2|0)){Bko=Bko-1|0;return;}a:{j=a.f6.s;if(i){if(5<=j)j=5;k=0;while(true){if(k>=j)break a;l=Z(a.f6,(a.f6.s-k|0)-1|0);if(l.ck===b&&ALC(l,c,d,e,f,g,h))break;k=k+1|0;}Bko=Bko-1|0;return;}}l=a.f6;m=new VS;m.ck=b;m.iJ=c;m.b8=d;m.eh=e;m.d_=f;m.b0=g;m.dM=h;S(l,m);if(a.f6.s>1000000){b=Dz();l=new U;W(l);Cg(b,V(I(Bf(I(l,B(370)),1000000),B(371))));Dy(a.f6);}Bko=Bko-1|0;}
function Rb(a){var b;b=Oq(a,1.0);if(b!=a.ge)a.ge=b;}
function X7(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!Q$(a.dZ,a.bg)&&a.bg!==null){Cg(Dz(),B(372));b=a.bg;$p=1;continue _;}a:{c=Oq(a,1.0);if(c!=a.ge){a.ge=c;d=0;while(true){if(d>=a.cv.s)break a;VI(Z(a.cv,d));d=d+1|0;}}}a.dU=Long_add(a.dU,Long_fromInt(1));if(Long_ne(Long_rem(a.dU,Long_fromInt(20)),Long_ZERO)){c=0;$p=
2;continue _;}c=0;b=null;$p=4;continue _;case 1:AOi(a,b);if(C()){break _;}b:{c=Oq(a,1.0);if(c!=a.ge){a.ge=c;d=0;while(true){if(d>=a.cv.s)break b;VI(Z(a.cv,d));d=d+1|0;}}}a.dU=Long_add(a.dU,Long_fromInt(1));if(Long_ne(Long_rem(a.dU,Long_fromInt(20)),Long_ZERO)){c=0;$p=2;continue _;}c=0;b=null;$p=4;continue _;case 2:ABt(a,c);if(C()){break _;}d=K(a.bg.d);e=K(a.bg.e);b=new Iv;f=d-64|0;g=0;h=e-64|0;c=d+64|0;i=128;j=e+64|0;$p=3;case 3:AEw(b,a,f,g,h,c,i,j);if(C()){break _;}i=0;if(i>=8000)return;a.hU=(a.hU*3|0)+a.sd
|0;f=a.hU>>2;g=((f&127)-64|0)+d|0;h=((f>>8&127)-64|0)+e|0;k=f>>16&127;$p=5;continue _;case 4:ABH(a,c,b);if(C()){break _;}c=0;$p=2;continue _;case 5:$z=HA(b,g,k,h);if(C()){break _;}l=$z;L();if(Bgs.data[l]){m=BeI.data[l];n=a.q;$p=6;continue _;}i=i+1|0;if(i>=8000)return;a.hU=(a.hU*3|0)+a.sd|0;f=a.hU>>2;g=((f&127)-64|0)+d|0;h=((f>>8&127)-64|0)+e|0;k=f>>16&127;continue _;case 6:m.e8(a,g,k,h,n);if(C()){break _;}i=i+1|0;if(i>=8000)return;a.hU=(a.hU*3|0)+a.sd|0;f=a.hU>>2;g=((f&127)-64|0)+d|0;h=((f>>8&127)-64|0)+e|0;k
=f>>16&127;$p=5;continue _;default:E$();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function ABt(a,b){var c,d,e,f,g,h,i,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=JA(a.gK);if(c!=IQ(a.kT)){d=new D3;Bo(d,B(373));M(d);}if(c>500)c=500;e=0;a:{while(true){if(e>=c)break a;f=M3(a.gK);if(!b&&Long_gt(f.jk,a.dU))break;MG(a.gK,f);KX(a.kT,f);if(G2(a,f.fF-8|0,f.fp-8|0,f.fK-8|0,f.fF+8|0,f.fp+8|0,f.fK+8|0)){g=f.fF;h=f.fp;i=f.fK;$p=1;continue _;}e=e+1|0;}}return !JA(a.gK)?0:1;case 1:$z=ACy(a,g,
h,i);if(C()){break _;}g=$z;if(g==f.qa&&g>0){L();d=BeI.data[g];g=f.fF;h=f.fp;i=f.fK;f=a.q;$p=2;continue _;}b:{while(true){e=e+1|0;if(e>=c)break b;f=M3(a.gK);if(!b&&Long_gt(f.jk,a.dU))break;MG(a.gK,f);KX(a.kT,f);if(!G2(a,f.fF-8|0,f.fp-8|0,f.fK-8|0,f.fF+8|0,f.fp+8|0,f.fK+8|0))continue;else{g=f.fF;h=f.fp;i=f.fK;continue _;}}}return !JA(a.gK)?0:1;case 2:d.e8(a,g,h,i,f);if(C()){break _;}c:{while(true){e=e+1|0;if(e>=c)break c;f=M3(a.gK);if(!b&&Long_gt(f.jk,a.dU))break;MG(a.gK,f);KX(a.kT,f);if(!G2(a,f.fF-8|0,f.fp-8
|0,f.fK-8|0,f.fF+8|0,f.fp+8|0,f.fK+8|0))continue;else{g=f.fF;h=f.fp;i=f.fK;$p=1;continue _;}}}return !JA(a.gK)?0:1;default:E$();}}C4().s(a,b,c,d,e,f,g,h,i,$p);}
function AE_(a,b,c,d){var e,f,g,h,i,j,k,l,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=16;f=new DB;g=0;if(g>=1000)return;h=(b+E(a.q,e)|0)-E(a.q,e)|0;i=(c+E(a.q,e)|0)-E(a.q,e)|0;j=(d+E(a.q,e)|0)-E(a.q,e)|0;$p=1;case 1:$z=ACy(a,h,i,j);if(C()){break _;}k=$z;if(k>0){L();l=BeI.data[k];$p=2;continue _;}g=g+1|0;if(g>=1000)return;h=(b+E(a.q,e)|0)-E(a.q,e)|0;i=(c+E(a.q,e)|0)-E(a.q,
e)|0;j=(d+E(a.q,e)|0)-E(a.q,e)|0;continue _;case 2:l.kQ(a,h,i,j,f);if(C()){break _;}g=g+1|0;if(g>=1000)return;h=(b+E(a.q,e)|0)-E(a.q,e)|0;i=(c+E(a.q,e)|0)-E(a.q,e)|0;j=(d+E(a.q,e)|0)-E(a.q,e)|0;$p=1;continue _;default:E$();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,$p);}
function ADM(a,b,c){var d,e,f,g,h,i,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:Dy(a.qj);d=K((c.R-2.0)/16.0);e=K((c.V+2.0)/16.0);f=K((c.S-2.0)/16.0);g=K((c.W+2.0)/16.0);while(d<=e){h=f;while(h<=g){if(C5(a,d,h)){$p=1;continue _;}h=h+1|0;}d=d+1|0;}return a.qj;case 1:$z=ZW(a,d,h);if(C()){break _;}i=$z;AJ1(i,b,c,a.qj);a:while(true){h=h+1|0;while(h>g){d=d+1|0;if(d>e)break a;h=f;}if(!C5(a,d,h))continue;else
{continue _;}}return a.qj;default:E$();}}C4().s(a,b,c,d,e,f,g,h,i,$p);}
function ANf(a,b,c){var d,e,f,g,h,i,j,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=K((c.R-2.0)/16.0);e=K((c.V+2.0)/16.0);f=K((c.S-2.0)/16.0);g=K((c.W+2.0)/16.0);h=Ci();while(d<=e){i=f;while(i<=g){if(C5(a,d,i)){$p=1;continue _;}i=i+1|0;}d=d+1|0;}return h;case 1:$z=ZW(a,d,i);if(C()){break _;}j=$z;AMl(j,b,c,h);a:while(true){i=i+1|0;while(i>g){d=d+1|0;if(d>e)break a;i=f;}if(!C5(a,d,i))continue;else
{continue _;}}return h;default:E$();}}C4().s(a,b,c,d,e,f,g,h,i,j,$p);}
function AWJ(a){return a.dZ;}
function AGu(a,b,c,d){var e,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!Mo(a,b,c,d))return;$p=1;case 1:$z=XY(a,b,d);if(C()){break _;}e=$z;SP(e);return;default:E$();}}C4().s(a,b,c,d,e,$p);}
function Yv(a,b){var c,d;c=0;d=0;while(d<a.dZ.s){if(P$(b,Dl(Z(a.dZ,d))))c=c+1|0;d=d+1|0;}return c;}
function AQf(a,b){var c,d;DF(a.dZ,b);c=0;while(c<a.cv.s){Z(a.cv,c);d=0;while(d<b.s){Z(b,d);d=d+1|0;}c=c+1|0;}}
function AQ5(a,b){DF(a.l6,b);}
function AH_(a,b,c,d,e,f){var g,h,i,j,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=ACy(a,c,d,e);if(C()){break _;}g=$z;L();h=BeI.data[g];i=BeI.data[b];$p=2;case 2:$z=i.hu(a,c,d,e);if(C()){break _;}j=$z;if(f)j=null;if(!(b>0&&h===null)&&h!==BfR&&h!==Bgx&&h!==BfS&&h!==Bgy&&h!==Bgi)return 0;if(j===null){$p=3;continue _;}$p=4;continue _;case 3:$z=i.fS(a,c,d,e);if(C()){break _;}b=$z;return !b
?0:1;case 4:$z=AM7(a,j);if(C()){break _;}b=$z;if(!b)return 0;$p=3;continue _;default:E$();}}C4().s(a,b,c,d,e,f,g,h,i,j,$p);}
function ARX(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=K(b.d);f=K(b.j);g=K(b.e);h=d+32.0|0;i=e-h|0;j=f-h|0;k=g-h|0;l=e+h|0;m=f+h|0;n=g+h|0;o=new Iv;$p=1;case 1:AEw(o,a,i,j,k,l,m,n);if(C()){break _;}return APs(A2F(o),b,c,d);default:E$();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,$p);}
function AJw(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=K(b.d);h=K(b.j);i=K(b.e);j=f+32.0|0;k=g-j|0;l=h-j|0;m=i-j|0;n=g+j|0;o=h+j|0;p=i+j|0;q=new Iv;$p=1;case 1:AEw(q,a,k,l,m,n,o,p);if(C()){break _;}return AGa(A2F(q),b,c,d,e,f);default:E$();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,$p);}
function Fj(a,b,c,d,e){return G2(a,b-e|0,c-e|0,d-e|0,b+e|0,c+e|0,d+e|0);}
function XJ(){var b,c;Bkm=$rt_createFloatArray(16);Bko=0;b=0;while(b<=15){c=1.0-b/15.0;Bkm.data[b]=(1.0-c)/(c*3.0+1.0)*0.949999988079071+0.05000000074505806;b=b+1|0;}}
function L1(){var a=this;D.call(a);a.un=null;a.zq=null;a.lq=0;a.Ev=0.0;a.Eu=0.0;a.EV=0;a.l_=0;a.mx=0;a.nu=0;a.qe=0;a.rQ=0;a.zO=0;a.Ak=0.0;a.zQ=0.0;a.zn=0.0;a.ow=0;}
var BeE=null;function BA(){BA=Br(L1);A2n();}
function Bs(a){var b,c,d,e,f;if(!a.ow)return 0;a.ow=0;if(a.lq>0){if(a.mx)WY(32888);if(a.l_)WY(32886);b=a.zO;c=a.lq;d=a.un.buffer;e=a.lq*7|0;ALs(b,0,c,new Int32Array(d,0,e));if(a.mx)Tt(32888);if(a.l_)Tt(32886);}f=a.nu*4|0;WD(a);return f;}
function WD(a){a.lq=0;a.nu=0;a.qe=0;}
function Bz(a){Gl(a,7);}
function Gl(a,b){if(a.ow)Bs(a);a.ow=1;WD(a);a.zO=b;a.l_=0;a.mx=0;a.rQ=0;}
function AJy(a,b,c){a.mx=1;a.Ev=b;a.Eu=c;}
function Cq(a,b,c,d){Pg(a,b*255.0|0,c*255.0|0,d*255.0|0);}
function Gy(a,b,c,d,e){Qp(a,b*255.0|0,c*255.0|0,d*255.0|0,e*255.0|0);}
function Pg(a,b,c,d){Qp(a,b,c,d,255);}
function Qp(a,b,c,d,e){if(!a.rQ){if(b>255)b=255;if(c>255)c=255;if(d>255)d=255;if(e>255)e=255;if(b<0)b=0;if(c<0)c=0;if(d<0)d=0;if(e<0)e=0;a.l_=1;a.EV=e<<24|d<<16|c<<8|b;}}
function G(a,b,c,d,e,f){AJy(a,e,f);Bg(a,b,c,d);}
function Bg(a,b,c,d){var e,f,g,h,i;if(a.qe>65534)return;a.qe=a.qe+1|0;a.lq=a.lq+1|0;e=a.nu;f=a.un;g=a.zq;h=e+0|0;i=b+a.Ak;g[h]=i;h=e+1|0;i=c+a.zQ;g[h]=i;h=e+2|0;i=d+a.zn;g[h]=i;if(a.mx){h=e+3|0;i=a.Ev;g[h]=i;h=e+4|0;i=a.Eu;g[h]=i;}if(a.l_){h=e+5|0;e=a.EV;f[h]=e;}a.nu=a.nu+7|0;}
function EQ(a,b){Pg(a,b>>16&255,b>>8&255,b&255);}
function ADp(a){a.rQ=1;}
function De(a,b,c,d){Cj(b,c,d);}
function E_(a,b,c,d){a.Ak=b;a.zQ=c;a.zn=d;}
function A2n(){var b,c;b=new L1;BA();b.lq=0;b.l_=0;b.mx=0;b.nu=0;b.qe=0;b.rQ=0;b.ow=0;c=new ArrayBuffer(2097152);b.un=new Int32Array(c);b.zq=new Float32Array(c);BeE=b;}
function ANg(){var a=this;D.call(a);a.fL=0;a.fI=0;}
function FK(a,b){var c=new ANg();A0b(c,a,b);return c;}
function A0b(a,b,c){var d,e;a.fL=b;a.fI=c;d=1;while(true){c=a.fL;e=d+1|0;if((c/e|0)<320)break;if((a.fI/e|0)<240)break;d=e;}a.fL=a.fL/d|0;a.fI=a.fI/d|0;}
function AEr(a){return a.fL;}
function Zg(a){return a.fI;}
function Gg(){D.call(this);this.mT=0.0;}
function Bkt(){var a=new Gg();Nf(a);return a;}
function Nf(a){a.mT=0.0;}
function KN(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s;h=(f>>24&255)/255.0;i=(f>>16&255)/255.0;j=(f>>8&255)/255.0;k=(f&255)/255.0;l=(g>>24&255)/255.0;m=(g>>16&255)/255.0;n=(g>>8&255)/255.0;o=(g&255)/255.0;Bd(3553);Bb(3042);Bd(3008);Dg(770,771);BA();p=BeE;Bz(p);Gy(p,i,j,k,h);q=d;r=c;Bg(p,q,r,0.0);s=b;Bg(p,s,r,0.0);Gy(p,m,n,o,l);r=e;Bg(p,s,r,0.0);Bg(p,q,r,0.0);Bs(p);Bd(3042);Bb(3008);Bb(3553);}
function DG(a,b,c,d,e,f){Cy(b,c,d-(Dx(b,c)/2|0)|0,e,f);}
function Hu(a,b,c,d,e,f){Cy(b,c,d,e,f);}
function CH(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o;BA();h=BeE;Bz(h);i=b+0|0;j=c+g|0;k=a.mT;l=(d+0|0)*0.00390625;m=(e+g|0)*0.00390625;G(h,i,j,k,l,m);n=b+f|0;o=a.mT;k=(d+f|0)*0.00390625;G(h,n,j,o,k,m);m=c+0|0;o=a.mT;j=(e+0|0)*0.00390625;G(h,n,m,o,k,j);G(h,i,m,a.mT,l,j);Bs(h);}
function CS(){var a=this;Gg.call(a);a.J=null;a.bm=0;a.bC=0;a.bG=null;a.pS=0;a.bZ=null;}
function Bku(){var a=new CS();DR(a);return a;}
function DR(a){Nf(a);a.bG=Ci();a.pS=0;}
function AFF(a,b,c,d){var e,f,g,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=0;if(e>=a.bG.s)return;f=Z(a.bG,e);g=a.J;$p=1;case 1:ACV(f,g,b,c);if(C()){break _;}e=e+1|0;if(e>=a.bG.s)return;f=Z(a.bG,e);g=a.J;continue _;default:E$();}}C4().s(a,b,c,d,e,f,g,$p);}
function YQ(a,b,c){var d,e,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(c!=1)return;d=a.J;e=null;$p=1;case 1:ADW(d,e);if(C()){break _;}d=a.J;$p=2;case 2:AFk(d);if(C()){break _;}return;default:E$();}}C4().s(a,b,c,d,e,$p);}
function Zp(a,b,c,d){var e,f,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a:{if(!d){e=0;while(true){if(e>=a.bG.s)break a;f=Z(a.bG,e);if(R7(f,b,c)){$p=1;continue _;}e=e+1|0;}}}return;case 1:a.iE(f);if(C()){break _;}while(true){e=e+1|0;if(e>=a.bG.s)break;f=Z(a.bG,e);if(!R7(f,b,c))continue;else{continue _;}}return;default:E$();}}C4().s(a,b,c,d,e,f,$p);}
function A2w(a,b,c,d){return;}
function AMU(a,b){return;}
function AP$(a,b,c,d){var $p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.J=b;a.bZ=b.e_;a.bm=c;a.bC=d;$p=1;case 1:a.hT();if(C()){break _;}return;default:E$();}}C4().s(a,b,c,d,$p);}
function AP8(a){return;}
function AG8(a){var $p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(FA()){$p=1;continue _;}if(!DV())return;$p=2;continue _;case 1:ZB(a);if(C()){break _;}if(FA()){continue _;}if(!DV())return;$p=2;case 2:ASB(a);if(C()){break _;}if(!DV())return;continue _;default:E$();}}C4().s(a,$p);}
function ZB(a){var b,c,d,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!Cx()){a.Cf(Bj(ARY(),a.bm)/a.J.cq|0,(a.bC-(Bj(XU(),a.bC)/a.J.bF|0)|0)-1|0,CW());return;}b=Bj(ARY(),a.bm)/a.J.cq|0;c=(a.bC-(Bj(XU(),a.bC)/a.J.bF|0)|0)-1|0;d=CW();$p=1;case 1:a.I4(b,c,d);if(C()){break _;}return;default:E$();}}C4().s(a,b,c,d,$p);}
function ASB(a){var b,c,d,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!CV())return;Be();if(Bd7===null)b=0;else{c=$rt_str(Bd7.key);b=Bd7===null?32:Bi(c)>1?0:Ba(c,0);}d=Bh();$p=1;case 1:a.pa(b,d);if(C()){break _;}return;default:E$();}}C4().s(a,b,c,d,$p);}
function A3e(a){return;}
function AH9(a){return;}
function ABi(a){var b,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=0;$p=1;case 1:AIF(a,b);if(C()){break _;}return;default:E$();}}C4().s(a,b,$p);}
function AIF(a,b){var c,d,e,f,g,h,i,j,k,l,m,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.J.A!==null){KN(a,0,0,a.bm,a.bC,1610941696,(-1607454656));return;}Bd(2896);Bd(2912);BA();c=BeE;d=3553;e=a.J.bo;f=B(165);$p=1;case 1:$z=AHv(e,f);if(C()){break _;}g=$z;Cp(d,g);BU(1.0,1.0,1.0,1.0);Bz(c);EQ(c,4210752);h=a.bC;i=a.bC/32.0;j=b;G(c,0.0,h,0.0,0.0,i+j);G(c,a.bm,a.bC,
0.0,a.bm/32.0,a.bC/32.0+j);k=a.bm;l=a.bm/32.0;m=0+b|0;G(c,k,0.0,0.0,l,m);G(c,0.0,0.0,0.0,0.0,m);Bs(c);return;default:E$();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function AVt(a){return 1;}
function AFf(){var a=this;D.call(a);a.k_=null;a.jA=0;a.ie=0;a.vF=0;}
function A_s(a){var b=new AFf();A4M(b,a);return b;}
function A4M(a,b){a.k_=J(D,b);a.jA=b;a.ie=0;a.vF=0;}
function S8(a,b){var c,d;c=a.ie;while(true){a.ie=a.ie+1|0;if(a.ie>=a.jA)a.ie=0;if(a.ie==c){c=a.jA;a.jA=a.jA+(a.jA/2|0)|0;d=a.k_;a.k_=J(D,a.jA);Ds(d,0,a.k_,0,c);return S8(a,b);}if(a.k_.data[a.ie]!==null)continue;else break;}a.k_.data[a.ie]=b;a.vF=a.vF+1|0;return a.ie;}
function ANL(a,b){if(b<a.jA&&b>=0)return a.k_.data[b];return null;}
function Ml(){D.call(this);}
function Es(){var a=this;Ml.call(a);a.eu=0.0;a.es=0.0;a.et=0.0;a.er=0.0;a.ex=0.0;a.ey=0.0;a.ev=0.0;a.ew=0.0;a.eC=0.0;a.eA=0.0;a.eB=0.0;a.ez=0.0;a.gV=0.0;a.gW=0.0;a.gT=0.0;a.gU=0.0;}
function M8(){var a=new Es();A40(a);return a;}
function A40(a){Fp(a);}
function Fp(a){a.eu=1.0;a.es=0.0;a.et=0.0;a.er=0.0;a.ex=0.0;a.ey=1.0;a.ev=0.0;a.ew=0.0;a.eC=0.0;a.eA=0.0;a.eB=1.0;a.ez=0.0;a.gV=0.0;a.gW=0.0;a.gT=0.0;a.gU=1.0;return a;}
function Kw(a){a.eu=0.0;a.es=0.0;a.et=0.0;a.er=0.0;a.ex=0.0;a.ey=0.0;a.ev=0.0;a.ew=0.0;a.eC=0.0;a.eA=0.0;a.eB=0.0;a.ez=0.0;a.gV=0.0;a.gW=0.0;a.gT=0.0;a.gU=0.0;return a;}
function GP(a,b){a.eu=b.eu;a.es=b.es;a.et=b.et;a.er=b.er;a.ex=b.ex;a.ey=b.ey;a.ev=b.ev;a.ew=b.ew;a.eC=b.eC;a.eA=b.eA;a.eB=b.eB;a.ez=b.ez;a.gV=b.gV;a.gW=b.gW;a.gT=b.gT;a.gU=b.gU;return a;}
function TX(a,b){CJ(b,a.eu);CJ(b,a.es);CJ(b,a.et);CJ(b,a.er);CJ(b,a.ex);CJ(b,a.ey);CJ(b,a.ev);CJ(b,a.ew);CJ(b,a.eC);CJ(b,a.eA);CJ(b,a.eB);CJ(b,a.ez);CJ(b,a.gV);CJ(b,a.gW);CJ(b,a.gT);CJ(b,a.gU);return a;}
function NW(a,b){b=b.data;b[0]=a.eu;b[1]=a.es;b[2]=a.et;b[3]=a.er;b[4]=a.ex;b[5]=a.ey;b[6]=a.ev;b[7]=a.ew;b[8]=a.eC;b[9]=a.eA;b[10]=a.eB;b[11]=a.ez;b[12]=a.gV;b[13]=a.gW;b[14]=a.gT;b[15]=a.gU;return a;}
function A$o(a,b){return Vb(a,b,a);}
function ZF(a,b){a.eu=a.eu*b.fx;a.es=a.es*b.fx;a.et=a.et*b.fx;a.er=a.er*b.fx;a.ex=a.ex*b.fz;a.ey=a.ey*b.fz;a.ev=a.ev*b.fz;a.ew=a.ew*b.fz;a.eC=a.eC*b.fy;a.eA=a.eA*b.fy;a.eB=a.eB*b.fy;a.ez=a.ez*b.fy;return a;}
function ATR(a,b,c){return W2(a,b,c,a);}
function W2(a,b,c,d){return A6v(b,c,a,d);}
function A6v(b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf;if(e===null)e=M8();f=b;g=GE(f);h=Gs(f);i=1.0-g;j=c.fx*c.fz;k=c.fz*c.fy;l=c.fx*c.fy;m=c.fx*h;n=c.fz*h;o=c.fy*h;p=c.fx*c.fx*i+g;b=j*i;q=b+o;r=l*i;s=r-n;t=b-o;u=c.fz*c.fz*i+g;b=k*i;v=b+m;w=r+n;x=b-m;y=c.fy*c.fy*i+g;z=d.eu*p+d.ex*q+d.eC*s;ba=d.es*p+d.ey*q+d.eA*s;bb=d.et*p+d.ev*q+d.eB*s;bc=d.er*p+d.ew*q+d.ez*s;bd=d.eu*t+d.ex*u+d.eC*v;be=d.es*t+d.ey*u+d.eA*v;bf=d.et*t+d.ev*u+d.eB*v;r=d.er*t+d.ew*u+d.ez*v;e.eC=d.eu*w+d.ex*x+d.eC*
y;e.eA=d.es*w+d.ey*x+d.eA*y;e.eB=d.et*w+d.ev*x+d.eB*y;e.ez=d.er*w+d.ew*x+d.ez*y;e.eu=z;e.es=ba;e.et=bb;e.er=bc;e.ex=bd;e.ey=be;e.ev=bf;e.ew=r;return e;}
function Vb(a,b,c){if(c===null)c=M8();c.gV=c.gV+a.eu*b.fx+a.ex*b.fz+a.eC*b.fy;c.gW=c.gW+a.es*b.fx+a.ey*b.fz+a.eA*b.fy;c.gT=c.gT+a.et*b.fx+a.ev*b.fz+a.eB*b.fy;c.gU=c.gU+a.er*b.fx+a.ew*b.fz+a.ez*b.fy;return c;}
function Ls(a,b){var c;a:{if(b instanceof Es){b:{c:{b=b;if(a.eu!==b.eu)break c;if(a.es!==b.es)break c;if(a.et!==b.et)break c;if(a.er!==b.er)break c;if(a.ex!==b.ex)break c;if(a.ey!==b.ey)break c;if(a.ev!==b.ev)break c;if(a.ew!==b.ew)break c;if(a.eC!==b.eC)break c;if(a.eA!==b.eA)break c;if(a.eB!==b.eB)break c;if(a.ez!==b.ez)break c;if(a.gV!==b.gV)break c;if(a.gW!==b.gW)break c;if(a.gT!==b.gT)break c;if(a.gU===b.gU){c=1;break b;}}c=0;}if(c){c=1;break a;}}c=0;}return c;}
function Ob(){}
function I7(){D.call(this);}
function Wl(){}
function N1(){}
function R4(){}
function Md(){}
function U7(){var a=this;I7.call(a);a.fx=0.0;a.fz=0.0;a.fy=0.0;}
function Bkv(){var a=new U7();A96(a);return a;}
function A96(a){return;}
function L2(a,b,c,d){a.fx=b;a.fz=c;a.fy=d;}
function Wj(){}
function RY(){}
function G9(){var a=this;I7.call(a);a.ld=0.0;a.le=0.0;a.lc=0.0;a.pe=0.0;}
function A2X(){var a=new G9();AZO(a);return a;}
function AZO(a){return;}
function VK(a,b){a.ld=b.ld;a.le=b.le;a.lc=b.lc;a.pe=b.pe;return a;}
function A_p(a){return a.ld;}
function ATl(a){return a.le;}
function AZY(a){return a.lc;}
function A5u(a){return a.pe;}
function Tc(a,b){var c;if(a===b)return 1;if(b===null)return 0;if(Dl(a)!==Dl(b))return 0;c=b;if(a.ld===c.ld&&a.le===c.le&&a.lc===c.lc&&a.pe===c.pe)return 1;return 0;}
function S3(){var a=this;D.call(a);a.B$=null;a.B9=null;}
function AIC(a){var b,c;b=a.B$;c=a.B9;Fv(b);CM(c,null);}
function AO0(){Fg.call(this);}
function A4Y(a){var b=new AO0();AYx(b,a);return b;}
function AYx(a,b){WW(a,b);}
function H7(){}
function Uy(){}
function AC1(){var a=this;D.call(a);a.fN=null;a.iB=null;a.kC=null;a.p6=0;a.rf=0;a.ii=null;}
function AJA(a,b,c,d){var e=new AC1();AUm(e,a,b,c,d);return e;}
function AUm(a,b,c,d,e){a.ii=b;a.rf=a.ii.d7;a.fN=c;a.iB=d;a.p6=e;}
function Fq(a){return a.fN===null?0:1;}
function Fm(a){var b;Rx(a);if(a.fN===null){b=new J3;P(b);M(b);}b=a.fN.zp;a.kC=a.fN;a.iB=a.fN;a.fN=a.fN.hs;a.p6=a.p6+1|0;return b;}
function AHi(a){var b,c;if(a.kC===null){b=new D3;P(b);M(b);}b=a.ii;c=a.kC;if(c.ix===null)b.pD=c.hs;else c.ix.hs=c.hs;if(c.hs===null)b.ql=c.ix;else c.hs.ix=c.ix;b.gP=b.gP-1|0;b.d7=b.d7+1|0;if(a.kC===a.iB){a.iB=!Fq(a)?null:a.fN.ix;a.p6=a.p6-1|0;}else if(a.kC===a.fN)a.fN=!ZT(a)?null:a.iB.hs;a.rf=a.ii.d7;a.kC=null;}
function ZT(a){return a.iB===null?0:1;}
function ABv(a,b){var c;Rx(a);c=new RH;c.zp=b;c.ix=a.iB;c.hs=a.fN;if(a.iB!==null)a.iB.hs=c;else a.ii.pD=c;if(a.fN!==null)a.fN.ix=c;else a.ii.ql=c;a.iB=c;b=a.ii;b.gP=b.gP+1|0;b=a.ii;b.d7=b.d7+1|0;a.rf=a.ii.d7;a.kC=null;}
function Rx(a){var b;if(a.rf>=a.ii.d7)return;b=new KT;P(b);M(b);}
function RH(){var a=this;D.call(a);a.zp=null;a.hs=null;a.ix=null;}
function Bkw(){var a=new RH();A0K(a);return a;}
function A0K(a){return;}
function KK(){var a=this;D.call(a);a.zm=null;a.kz=null;a.ha=null;a.l0=null;a.Ce=null;a.wI=null;a.sU=0;a.DY=0;}
var Bkx=0;var BeD=null;function AHv(a,b){var c,d,e,$$je,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=CP(BeD,b);if(c!==null)return c.f4;try{AFg(a.kz);WX(a.kz);d=Q4(a.kz,0);if(IB(b,B(374))){a.sU=1;e=Kh(Jw(b,7));$p=1;continue _;}if(DC(b,B(179))&&AIH().o.pP)Bkx=1;e=Kh(b);$p=2;continue _;}catch($$e){$$je=Y($$e);if($$je instanceof BT){}else{throw $$e;}}b=new B6;Bo(b,B(375));M(b);case 1:a:{try{$z=Zc(a,e);if(C()){break _;}c=$z;LL(a,c,d);a.sU
=0;Rg(BeD,b,CZ(d));}catch($$e){$$je=Y($$e);if($$je instanceof BT){break a;}else{throw $$e;}}return d;}b=new B6;Bo(b,B(375));M(b);case 2:a:{try{$z=Zc(a,e);if(C()){break _;}c=$z;LL(a,c,d);Bkx=0;Rg(BeD,b,CZ(d));}catch($$e){$$je=Y($$e);if($$je instanceof BT){break a;}else{throw $$e;}}return d;}b=new B6;Bo(b,B(375));M(b);default:E$();}}C4().s(a,b,c,d,e,$p);}
function AHC(a,b){var c;EA(a.kz);WX(a.kz);c=Q4(a.kz,0);LL(a,b,c);BP(a.zm,CZ(c),b);return c;}
function LL(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z;Eb(a,c);if(!Bkx){Ej(3553,10241,9728);Ej(3553,10240,9728);}else{Ej(3553,10241,9986);Ej(3553,10240,9728);Ej(3553,33085,4);}if(a.DY){Ej(3553,10241,9729);Ej(3553,10240,9729);}if(!a.sU){Ej(3553,10242,10497);Ej(3553,10243,10497);}else{Ej(3553,10242,10496);Ej(3553,10243,10496);}d=b.xt;e=b.Dr;f=b.tZ;g=$rt_createByteArray(Bj(d,e)*4|0);h=g.data;i=0;while(true){j=f.data;if(i>=j.length)break;k=j[i]>>24&255;l=j[i]>>16&255;m=j[i]>>8&255;n=j[i]>>0&255;if
(a.wI!==null&&a.wI.ee){o=l*30|0;l=((o+(m*59|0)|0)+(n*11|0)|0)/100|0;m=(o+(m*70|0)|0)/100|0;n=(o+(n*70|0)|0)/100|0;}c=i*4|0;h[c+0|0]=l<<24>>24;h[c+1|0]=m<<24>>24;h[c+2|0]=n<<24>>24;h[c+3|0]=k<<24>>24;i=i+1|0;}a:{EA(a.ha);UR(a.ha,g);b=a.ha;EM(b,0);Np(b,h.length);SD(3553,0,6408,d,e,0,6408,5121,a.ha);if(Bkx){p=1;while(true){if(p>4)break a;o=d>>(p-1|0);q=d>>p;r=e>>p;EA(a.l0);s=0;while(s<q){t=0;while(t<r){b=a.ha;c=s*2|0;i=c+0|0;k=t*2|0;n=Bj(k+0|0,o);u=KR(b,(i+n|0)*4|0);b=a.ha;c=c+1|0;v=KR(b,(c+n|0)*4|0);b=a.ha;k=
Bj(k+1|0,o);w=KR(b,(c+k|0)*4|0);x=KR(a.ha,(i+k|0)*4|0);y=Lf(a,Lf(a,u,v),Lf(a,w,x));AA8(a.l0,(s+Bj(t,q)|0)*4|0,y);t=t+1|0;}s=s+1|0;}SD(3553,p,6408,q,r,0,6408,5121,a.l0);z=a.ha;a.ha=a.l0;a.l0=z;p=p+1|0;}}}}
function AD5(a,b,c){var d,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=B(376);$p=1;case 1:$z=AHv(a,b);if(C()){break _;}d=$z;return d;default:E$();}}C4().s(a,b,c,d,$p);}
function G7(a,b){S(a.Ce,b);b.o_();}
function Lf(a,b,c){return ((((b&(-16777216))>>24&255)+((c&(-16777216))>>24&255)|0)>>1<<24)+(((b&16711422)+(c&16711422)|0)>>1)|0;}
function Zc(a,b){var c,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AEV(b);if(C()){break _;}c=$z;return c;default:E$();}}C4().s(a,b,c,$p);}
function Eb(a,b){if(b<0)return;Cp(3553,b);}
function ADF(){Bkx=0;}
function Wk(){var a=this;D.call(a);a.sb=null;a.xs=0;a.tj=0;}
function Bky(a,b,c){var d=new Wk();AOI(d,a,b,c);return d;}
function AOI(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();bd=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.sb=$rt_createIntArray(256);a.xs=0;e=Kh(c);$p=1;case 1:$z=AEV(e);if(C()){break _;}f
=$z;g=f.xt;e=f.tZ;h=0;while(h<256){i=h%16|0;j=h/16|0;k=7;i=i*8|0;l=j*8|0;a:{while(k>=0){m=i+k|0;n=1;o=0;while(o<8&&n){if((e.data[m+Bj(l+o|0,g)|0]&255)>0)n=0;o=o+1|0;}if(!n)break a;k=k+(-1)|0;}}if(h==32)k=2;a.sb.data[h]=k+2|0;h=h+1|0;}a.xs=AHC(d,f);a.tj=I3(288);BA();p=BeE;q=0;while(q<256){FJ(a.tj+q|0,4864);Bz(p);r=(q%16|0)*8|0;s=(q/16|0)*8|0;t=r;u=t/128.0+0.0;v=s;w=(v+7.989999771118164)/128.0+0.0;G(p,0.0,7.989999771118164,0.0,u,w);x=(t+7.989999771118164)/128.0+0.0;G(p,7.989999771118164,7.989999771118164,0.0,
x,w);y=v/128.0+0.0;G(p,7.989999771118164,0.0,0.0,x,y);G(p,0.0,0.0,0.0,u,y);Bs(p);Ee();q=q+1|0;}l=0;while(l<32){z=(l>>3&1)*85|0;ba=((l>>2&1)*170|0)+z|0;bb=((l>>1&1)*170|0)+z|0;bc=((l>>0&1)*170|0)+z|0;if(l==6)ba=ba+85|0;bd=l<16?0:1;if(b.ee){g=ba*30|0;ba=((g+(bb*59|0)|0)+(bc*11|0)|0)/100|0;bb=(g+(bb*70|0)|0)/100|0;bc=(g+(bc*70|0)|0)/100|0;}if(bd){ba=ba/4|0;bb=bb/4|0;bc=bc/4|0;}FJ((a.tj+256|0)+l|0,4864);F8(ba/255.0,bb/255.0,bc/255.0);Ee();l=l+1|0;}return;default:E$();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,
s,t,u,v,w,x,y,z,ba,bb,bc,bd,$p);}
function Cy(a,b,c,d,e){SM(a,b,c+1|0,d+1|0,e,1);ED(a,b,c,d,e);}
function ED(a,b,c,d,e){SM(a,b,c,d,e,0);}
function SM(a,b,c,d,e,f){var g,h,i,j,k,l,m;if(b===null)return;if(f)e=((e&16579836)>>2)+(e&(-16777216))|0;Cp(3553,a.xs);g=(e>>16&255)/255.0;h=(e>>8&255)/255.0;i=(e&255)/255.0;j=(e>>24&255)/255.0;if(j===0.0)j=1.0;BU(g,h,i,j);B3();Bw(c,d,0.0);k=0;while(k<Bi(b)){c=k;while(true){d=Bi(b);k=c+1|0;if(d<=k)break;if(Ba(b,c)!=167)break;l=UI(B(377),Ba(AKk(b),k));c=c+2|0;}if(c<Bi(b)){m=Vo(Ba(b,c));if(m>=0){FU((a.tj+m|0)+32|0);Bw(a.sb.data[m+32|0],0.0,0.0);}}}BE();}
function Dx(a,b){var c,d,e;if(b===null)return 0;c=0;d=0;while(d<Bi(b)){if(Ba(b,d)==167)d=d+1|0;else{e=Vo(Ba(b,d));if(e>=0)c=c+a.sb.data[e+32|0]|0;}d=d+1|0;}return c;}
function AQD(a,b){var c,d,e,f;c=Ci();d=ANm(b,B(158)).data;e=d.length;f=0;while(f<e){S(c,d[f]);f=f+1|0;}return c;}
function Qo(){var a=this;D.call(a);a.FU=0;a.FT=0;}
function Bkz(){var a=new Qo();A$t(a);return a;}
function A$t(a){return;}
function YC(a){AMI(1);a.FU=0;a.FT=0;}
function AFB(a){Lq();MD();AMI(0);}
function AKX(){var a=this;Eu.call(a);a.o6=null;a.ri=null;a.oA=null;a.sZ=null;a.td=0;}
function Bao(){var a=new AKX();A4r(a);return a;}
function A4r(a){L();HE(a,BfR.ba+1|0);a.o6=$rt_createFloatArray(256);a.ri=$rt_createFloatArray(256);a.oA=$rt_createFloatArray(256);a.sZ=$rt_createFloatArray(256);a.td=0;a.wZ=2;}
function AZ$(a){var b,c,d,e,f,g,h,i,j,k,l,m,n;a.td=a.td+1|0;b=0;while(b<16){c=0;while(c<16){d=0.0;e=c-2|0;while(e<=c){f=b&15;g=e&15;d=d+a.o6.data[f+(g*16|0)|0];e=e+1|0;}h=a.ri.data;i=b+(c*16|0)|0;h[i]=d/3.200000047683716+a.oA.data[i]*0.800000011920929;c=c+1|0;}b=b+1|0;}b=0;while(b<16){c=0;while(c<16){j=a.oA.data;i=b+(c*16|0)|0;j[i]=j[i]+a.sZ.data[i]*0.05000000074505806;if(a.oA.data[i]<0.0)a.oA.data[i]=0.0;j=a.sZ.data;j[i]=j[i]-0.30000001192092896;if(BO()<0.2)a.sZ.data[i]=0.5;c=c+1|0;}b=b+1|0;}j=a.ri;a.ri=a.o6;a.o6
=j;c=0;while(c<256){d=a.o6.data[(c-(a.td*16|0)|0)&255];if(d>1.0)d=1.0;if(d<0.0)d=0.0;k=d*d;i=32.0+k*32.0|0;l=50.0+k*64.0|0;m=255;n=146.0+k*50.0|0;if(a.mE){b=i*30|0;i=((b+(l*59|0)|0)+2805|0)/100|0;l=(b+(l*70|0)|0)/100|0;m=(b+17850|0)/100|0;}j=a.dD.data;b=c*4|0;j[b+0|0]=i<<24>>24;a.dD.data[b+1|0]=l<<24>>24;a.dD.data[b+2|0]=m<<24>>24;a.dD.data[b+3|0]=n<<24>>24;c=c+1|0;}}
function ACm(){var a=this;Eu.call(a);a.ox=null;a.rt=null;a.jT=null;a.sQ=null;a.tt=0;}
function Bcv(){var a=new ACm();A3l(a);return a;}
function A3l(a){L();HE(a,BfS.ba+1|0);a.ox=$rt_createFloatArray(256);a.rt=$rt_createFloatArray(256);a.jT=$rt_createFloatArray(256);a.sQ=$rt_createFloatArray(256);a.tt=0;a.wZ=2;}
function A8O(a){var b,c,d,e,f,g,h,i,j,k,l,m,n;a.tt=a.tt+1|0;b=0;while(b<16){c=0;while(c<16){d=0.0;e=Bq(c*3.1415927410125732*2.0/16.0)*1.2000000476837158|0;f=Bq(b*3.1415927410125732*2.0/16.0)*1.2000000476837158|0;g=b-1|0;while(true){h=b+1|0;if(g>h)break;i=c-1|0;while(i<=(c+1|0)){j=(g+e|0)&15;h=(i+f|0)&15;d=d+a.ox.data[j+(h*16|0)|0];i=i+1|0;}g=g+1|0;}k=a.rt.data;l=b+(c*16|0)|0;d=d/10.0;m=a.jT.data;e=(b+0|0)&15;j=((c+0|0)&15)*16|0;n=m[e+j|0];m=a.jT.data;h=h&15;n=n+m[h+j|0];m=a.jT.data;c=c+1|0;j=(c&15)*16|0;k[l]
=d+(n+m[h+j|0]+a.jT.data[e+j|0])/4.0*0.800000011920929;m=a.jT.data;m[l]=m[l]+a.sQ.data[l]*0.009999999776482582;if(a.jT.data[l]<0.0)a.jT.data[l]=0.0;m=a.sQ.data;m[l]=m[l]-0.05999999865889549;if(BO()<0.005)a.sQ.data[l]=1.5;}b=b+1|0;}m=a.rt;a.rt=a.ox;a.ox=m;c=0;while(c<256){d=a.ox.data[(c-((a.tt/3|0)*16|0)|0)&255]*2.0;if(d>1.0)d=1.0;if(d<0.0)d=0.0;j=d*100.0+155.0|0;n=d*d;h=n*255.0|0;l=n*d*d*128.0|0;if(a.mE){b=j*30|0;j=((b+(h*59|0)|0)+(l*11|0)|0)/100|0;h=(b+(h*70|0)|0)/100|0;l=(b+(l*70|0)|0)/100|0;}m=a.dD.data;b
=c*4|0;m[b+0|0]=j<<24>>24;a.dD.data[b+1|0]=h<<24>>24;a.dD.data[b+2|0]=l<<24>>24;a.dD.data[b+3|0]=(-1);c=c+1|0;}}
function AR8(){var a=this;Eu.call(a);a.mr=null;a.oJ=null;}
function AVI(a){var b=new AR8();AZp(b,a);return b;}
function AZp(a,b){L();HE(a,Bgi.ba+(b*16|0)|0);a.mr=$rt_createFloatArray(320);a.oJ=$rt_createFloatArray(320);}
function A3s(a){var b,c,d,e,f,g,h,i,j,k,l,m,n;b=0;while(b<16){c=0;while(c<20){d=18;e=a.mr.data;f=c+1|0;g=e[b+((f%20|0)*16|0)|0]*18.0;h=b-1|0;while(h<=(b+1|0)){i=c;while(i<=f){if(h>=0&&i>=0&&h<16&&i<20)g=g+a.mr.data[h+(i*16|0)|0];d=d+1|0;i=i+1|0;}h=h+1|0;}e=a.oJ.data;j=b+(c*16|0)|0;e[j]=g/(d*1.059999942779541);if(c>=19)a.oJ.data[j]=BO()*BO()*BO()*4.0+BO()*0.10000000149011612+0.20000000298023224;c=f;}b=b+1|0;}e=a.oJ;a.oJ=a.mr;a.mr=e;f=0;while(f<256){k=a.mr.data[f]*1.7999999523162842;if(k>1.0)k=1.0;if(k<0.0)k=
0.0;l=k*155.0+100.0|0;g=k*k;m=g*255.0|0;j=g*k*k*k*k*k*k*k*k*255.0|0;n=255;if(k<0.5)n=0;if(a.mE){c=l*30|0;l=((c+(m*59|0)|0)+(j*11|0)|0)/100|0;m=(c+(m*70|0)|0)/100|0;j=(c+(j*70|0)|0)/100|0;}e=a.dD.data;b=f*4|0;e[b+0|0]=l<<24>>24;a.dD.data[b+1|0]=m<<24>>24;a.dD.data[b+2|0]=j<<24>>24;a.dD.data[b+3|0]=n<<24>>24;f=f+1|0;}}
function Xt(){}
function AAw(){var a=this;D.call(a);a.iH=null;a.bM=null;a.iG=null;a.eK=null;a.gN=null;a.c9=null;a.ds=0;a.dF=0;a.ka=0;a.y3=0;a.bO=null;a.D$=null;a.pw=0;a.op=0;a.xL=0;a.xk=0;a.qq=0;a.qr=0;a.qs=0;a.s$=0;a.s9=0;a.s_=0;a.r$=0;a.s7=0;a.li=0;a.xr=0;a.Hm=null;a.HV=null;a.sc=0;a.rY=0;a.DS=0;a.sv=0;a.qA=0;a.oY=null;a.Hg=0;a.GN=0;a.rH=0.0;a.rG=0.0;a.rF=0.0;a.tI=0.0;a.q9=0;}
function BaN(a,b){var c=new AAw();A2i(c,a,b);return c;}
function A2i(a,b,c){var d,e,f,g,h,i,j;a.iH=Ci();a.eK=Ci();a.pw=0;a.r$=(-1);a.Hm=$rt_createIntArray(50000);a.HV=Rj(64);a.oY=Ci();a.Hg=0;a.GN=I3(1);a.rH=(-9999.0);a.rG=(-9999.0);a.rF=(-9999.0);a.q9=0;a.bO=b;a.iG=c;a.y3=I3(786432);a.op=I3(3);B3();FJ(a.op,4864);Zh(a);Ee();BE();BA();d=BeE;a.xL=a.op+1|0;FJ(a.xL,4864);e=(-384);while(e<=384){f=(-384);while(f<=384){Bz(d);g=e+0|0;h=f+0|0;Bg(d,g,16.0,h);i=e+64|0;Bg(d,i,16.0,h);f=f+64|0;h=f;Bg(d,i,16.0,h);Bg(d,g,16.0,h);Bs(d);}e=e+64|0;}Ee();a.xk=a.op+2|0;FJ(a.xk,4864);Bz(d);f
=(-384);while(f<=384){j=(-384);while(j<=384){g=f+64|0;h=j+0|0;Bg(d,g,(-16.0),h);i=f+0|0;Bg(d,i,(-16.0),h);j=j+64|0;h=j;Bg(d,i,(-16.0),h);Bg(d,g,(-16.0),h);}f=f+64|0;}Bs(d);Ee();}
function Zh(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd;if(a.bO.o.du)return;b=new DB;BA();c=BeE;Bz(c);d=0;while(d<1500){a:{e=N(b)*2.0-1.0;f=N(b)*2.0-1.0;g=N(b)*2.0-1.0;h=0.25+N(b)*0.25;i=e*e+f*f+g*g;if(i<1.0&&i>0.01){i=1.0/Ed(i);j=e*i;f=f*i;g=g*i;k=j*100.0;l=f*100.0;m=g*100.0;n=CR(j,g);o=Gs(n);p=GE(n);q=CR(Ed(j*j+g*g),f);r=Gs(q);s=GE(q);t=Cl(b)*3.141592653589793*2.0;u=Gs(t);v=GE(t);w=0;i=0.0*s;e=0.0*r;while(true){if(w>=4)break a;j=((w&2)-1|0)*h;w=w+1|0;x=((w&2)-1|0)*h;y=j*v-x*u;z=x*
v+j*u;ba=y*r+i;bb=e-y*s;bc=bb*o-z*p;bd=z*o+bb*p;Bg(c,k+bc,l+ba,m+bd);}}}d=d+1|0;}Bs(c);}
function Q5(a,b){if(a.bM!==null)AKU(a.bM,a);a.rH=(-9999.0);a.rG=(-9999.0);a.rF=(-9999.0);Bgh.n1=b;a.bM=b;a.D$=A8g(b);if(b!==null){ANE(b,a);Je(a);}}
function Je(a){var b,c,d,e,f,g,h,i;a:{L();AKn(BeW,a.bO.o.lg);a.r$=a.bO.o.hf;if(a.c9!==null){b=0;while(true){if(b>=a.c9.data.length)break a;ARH(a.c9.data[b]);b=b+1|0;}}}b=64<<(3-a.r$|0);if(b>400)b=400;b=(b/16|0)+1|0;a.ds=b;a.dF=8;a.ka=b;a.c9=J(Ip,Bj(Bj(a.ds,a.dF),a.ka));a.gN=J(Ip,Bj(Bj(a.ds,a.dF),a.ka));c=0;d=0;a.qq=0;a.qr=0;a.qs=0;a.s$=a.ds;a.s9=a.dF;a.s_=a.ka;e=0;while(e<a.eK.s){Z(a.eK,e).i3=0;e=e+1|0;}Dy(a.eK);f=0;while(f<a.ds){g=0;while(g<a.dF){h=0;while(h<a.ka){if(a.c9.data[Bj(Bj(h,a.dF)+g|0,a.ds)+f|0]!==
null)Ge(a.iH,a.c9.data[Bj(Bj(h,a.dF)+g|0,a.ds)+f|0].gl);a.c9.data[Bj(Bj(h,a.dF)+g|0,a.ds)+f|0]=Bbq(a.bM,a.iH,f*16|0,g*16|0,h*16|0,16,a.y3+c|0);a.c9.data[Bj(Bj(h,a.dF)+g|0,a.ds)+f|0].JN=0;a.c9.data[Bj(Bj(h,a.dF)+g|0,a.ds)+f|0].xJ=1;a.c9.data[Bj(Bj(h,a.dF)+g|0,a.ds)+f|0].fv=1;i=a.c9.data[Bj(Bj(h,a.dF)+g|0,a.ds)+f|0];b=d+1|0;i.In=d;KW(a.c9.data[Bj(Bj(h,a.dF)+g|0,a.ds)+f|0]);a.gN.data[Bj(Bj(h,a.dF)+g|0,a.ds)+f|0]=a.c9.data[Bj(Bj(h,a.dF)+g|0,a.ds)+f|0];S(a.eK,a.c9.data[Bj(Bj(h,a.dF)+g|0,a.ds)+f|0]);c=c+3|0;h=h+1
|0;d=b;}g=g+1|0;}f=f+1|0;}if(a.bM!==null){i=a.bM.bg;Tr(a,K(i.d),K(i.j),K(i.e));P2(a.gN,AYH(i));}}
function ACD(a,b,c,d){var e,f,g,h,i,j,k,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:ARj(Bkk,a.bM,a.iG,a.bO.e_,a.bO.f,d);AHe(Bgh,a.bM,a.iG,a.bO.e_,a.bO.f,a.bO.o,d);a.s7=0;a.li=0;a.xr=0;e=a.bM.bg;f=e.cs;g=e.d-e.cs;h=d;BkA=f+g*h;BkB=e.b7+(e.j-e.b7)*h;BkC=e.ct+(e.e-e.ct)*h;BkD=e.cs+(e.d-e.cs)*h;BkE=e.b7+(e.j-e.b7)*h;BkF=e.ct+(e.e-e.ct)*h;i=a.bM.dZ;a.s7=i.s;if(a.bO.o.du)Bd(2912);j=0;while
(true){if(j>=i.s){j=0;if(j>=a.iH.s)return;b=Bkk;c=Z(a.iH,j);$p=1;continue _;}k=Z(i,j);if(Sh(k,b)&&MJ(c,k.L)){if(k!==a.bM.bg)break;if(a.bO.o.cC)break;}j=j+1|0;}a.li=a.li+1|0;e=Bgh;$p=2;continue _;case 1:Y0(b,c,d);if(C()){break _;}j=j+1|0;if(j>=a.iH.s)return;b=Bkk;c=Z(a.iH,j);continue _;case 2:AM_(e,k,d);if(C()){break _;}while(true){j=j+1|0;if(j>=i.s){j=0;if(j>=a.iH.s)return;b=Bkk;c=Z(a.iH,j);$p=1;continue _;}k=Z(i,j);if(!Sh(k,b))continue;if(!MJ(c,k.L))continue;if(k!==a.bM.bg)break;if(!a.bO.o.cC)continue;else break;}a.li
=a.li+1|0;e=Bgh;continue _;default:E$();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function ALl(a){var b;b=new U;W(b);return V(Bf(I(Bf(I(Bf(I(Bf(I(Bf(I(b,B(378)),a.sv),B(23)),a.sc),B(379)),a.rY),B(380)),a.DS),B(381)),a.qA));}
function X5(a){var b;b=new U;W(b);return V(Bf(I(Bf(I(Bf(I(Bf(I(b,B(382)),a.li),B(23)),a.s7),B(383)),a.xr),B(384)),(a.s7-a.xr|0)-a.li|0));}
function Tr(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q;c=b+(-8)|0;d=d+(-8)|0;a.qq=2147483647;a.qr=2147483647;a.qs=2147483647;a.s$=(-2147483648);a.s9=(-2147483648);a.s_=(-2147483648);e=a.ds*16|0;f=e/2|0;g=0;h=e-1|0;while(g<a.ds){i=g*16|0;j=(i+f|0)-c|0;if(j<0)j=j-h|0;i=i-Bj(j/e|0,e)|0;if(i<a.qq)a.qq=i;if(i>a.s$)a.s$=i;k=0;while(k<a.ka){l=k*16|0;m=(l+f|0)-d|0;if(m<0)m=m-h|0;j=l-Bj(m/e|0,e)|0;if(j<a.qs)a.qs=j;if(j>a.s_)a.s_=j;n=0;while(n<a.dF){o=n*16|0;if(o<a.qr)a.qr=o;if(o>a.s9)a.s9=o;p=a.c9.data[Bj(Bj(k,a.dF)+n|0,
a.ds)+g|0];q=p.i3;Sn(p,i,o,j);if(!q&&p.i3)S(a.eK,p);n=n+1|0;}k=k+1|0;}g=g+1|0;}}
function Vv(a,b,c,d){var e,f,g;if(a.bO.o.hf!=a.r$)Je(a);if(!c){a.sc=0;a.rY=0;a.DS=0;a.sv=0;a.qA=0;}e=b.d-a.rH;f=b.j-a.rG;g=b.e-a.rF;if(e*e+f*f+g*g>16.0){a.rH=b.d;a.rG=b.j;a.rF=b.e;Tr(a,K(b.d),K(b.j),K(b.e));P2(a.gN,AYH(b));}return 0+YE(a,0,a.gN.data.length,c,d)|0;}
function YE(a,b,c,d,e){var f,g,h,i,j,k,l;Dy(a.oY);f=0;while(b<c){if(!d){a.sc=a.sc+1|0;if(a.gN.data[b].g1.data[d])a.qA=a.qA+1|0;else if(a.gN.data[b].fv)a.sv=a.sv+1|0;else a.rY=a.rY+1|0;}if(!a.gN.data[b].g1.data[d]&&a.gN.data[b].fv&&a.gN.data[b].xJ&&PM(a.gN.data[b],d)>=0){S(a.oY,a.gN.data[b]);f=f+1|0;}b=b+1|0;}g=a.bO.f;h=g.cs+(g.d-g.cs)*e;i=g.b7+(g.j-g.b7)*e;j=g.ct+(g.e-g.ct)*e;k=0;while(k<a.oY.s){l=Z(a.oY,k);B3();Bw(l.BA-h,l.Eo-i,l.Dp-j);FU(PM(l,d));BE();k=k+1|0;}return f;}
function HW(a){if(a.bO.o.du)return;a.pw=a.pw+1|0;}
function ADd(a,b){var c,d,e,f,g,h,i,j,k,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.bO.o.du)return;Bd(3553);c=OV(a.bM,b);d=c.x;e=c.z;f=c.w;if(a.bO.o.ee){g=d*30.0;d=(g+e*59.0+f*11.0)/100.0;e=(g+e*70.0)/100.0;f=(g+f*70.0)/100.0;}F8(d,e,f);BA();h=BeE;Gv(0);if(!a.bO.o.du)Bb(2912);F8(d,e,f);FU(a.xL);Bb(3553);Bd(2912);Bd(3008);Bb(3042);Dg(1,1);B3();BU(1.0,1.0,1.0,1.0);Bw(0.0,0.0,0.0);Bv(0.0,
0.0,0.0,1.0);Bv(Hz(a.bM,b)*360.0,1.0,0.0,0.0);i=3553;c=a.iG;j=B(385);$p=1;case 1:$z=AHv(c,j);if(C()){break _;}k=$z;Cp(i,k);Bz(h);G(h,(-30.0),100.0,(-30.0),0.0,0.0);G(h,30.0,100.0,(-30.0),1.0,0.0);G(h,30.0,100.0,30.0,1.0,1.0);G(h,(-30.0),100.0,30.0,0.0,1.0);Bs(h);i=3553;c=a.iG;j=B(386);$p=2;case 2:$z=AHv(c,j);if(C()){break _;}k=$z;Cp(i,k);Bz(h);G(h,(-20.0),(-100.0),20.0,1.0,1.0);G(h,20.0,(-100.0),20.0,0.0,1.0);G(h,20.0,(-100.0),(-20.0),0.0,0.0);G(h,(-20.0),(-100.0),(-20.0),1.0,0.0);Bs(h);Bd(3553);g=AJs(a.bM,
b);if(g>0.0){BU(g,g,g,g);FU(a.op);}BU(1.0,1.0,1.0,1.0);Bd(3042);Bb(3008);if(!a.bO.o.du)Bb(2912);BE();F8(d*0.20000000298023224+0.03999999910593033,e*0.20000000298023224+0.03999999910593033,f*0.6000000238418579+0.10000000149011612);Bd(3553);FU(a.xk);Bb(3553);Gv(1);return;default:E$();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function YO(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.bO.o.du)return;if(a.bO.o.lg){$p=2;continue _;}Bd(2884);c=a.bO.f.b7;d=a.bO.f.j-a.bO.f.b7;e=b;f=c+d*e;g=32;BA();h=BeE;i=3553;j=a.iG;k
=B(387);$p=1;case 1:$z=AHv(j,k);if(C()){break _;}l=$z;Cp(i,l);Bb(3042);Dg(770,771);j=S6(a.bM,b);m=j.x;n=j.z;o=j.w;if(a.bO.o.ee){p=m*30.0;m=(p+n*59.0+o*11.0)/100.0;n=(p+n*70.0)/100.0;o=(p+o*70.0)/100.0;}d=a.bM.bg.bS+(a.bM.bg.d-a.bM.bg.bS)*e+(a.pw+b)*0.029999999329447746;e=a.bM.bg.bR+(a.bM.bg.e-a.bM.bg.bR)*e;l=K(d/2048.0);q=K(e/2048.0);c=d-(l*2048|0);d=e-(q*2048|0);p=120.0-f+0.33000001311302185;r=c*4.8828125E-4;s=d*4.8828125E-4;Bz(h);Gy(h,m,n,o,0.800000011920929);t=p;u=(-256);while(u<256){v=(-256);while(v<256)
{i=u+0|0;w=i;x=v+g|0;y=x;c=i*4.8828125E-4+r;d=x*4.8828125E-4+s;G(h,w,t,y,c,d);i=u+g|0;e=i;z=i*4.8828125E-4+r;G(h,e,t,y,z,d);i=v+0|0;d=i;y=i*4.8828125E-4+s;G(h,e,t,d,z,y);G(h,w,t,d,c,y);v=x;}u=u+g|0;}Bs(h);BU(1.0,1.0,1.0,1.0);Bd(3042);Bb(2884);return;case 2:ABd(a,b);if(C()){break _;}return;default:E$();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,$p);}
function ABd(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();bk=$T.l();bj=$T.l();bi=$T.l();bh=$T.l();bg=$T.l();bf=$T.l();be=$T.l();bd=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p)
{case 0:if(a.bO.o.du)return;Bd(2884);c=a.bO.f.b7;d=a.bO.f.j-a.bO.f.b7;e=b;f=c+d*e;BA();g=BeE;h=12.0;c=(a.bM.bg.bS+(a.bM.bg.d-a.bM.bg.bS)*e+(a.pw+b)*0.029999999329447746)/12.0;d=(a.bM.bg.bR+(a.bM.bg.e-a.bM.bg.bR)*e)/12.0+0.33000001311302185;i=108.0-f+0.33000001311302185;j=K(c/2048.0);k=K(d/2048.0);e=c-(j*2048|0);d=d-(k*2048|0);l=3553;m=a.iG;n=B(387);$p=1;case 1:$z=AHv(m,n);if(C()){break _;}o=$z;Cp(l,o);Bb(3042);Dg(770,771);m=S6(a.bM,b);p=m.x;q=m.z;r=m.w;if(a.bO.o.ee){b=p*30.0;p=(b+q*59.0+r*11.0)/100.0;q=(b+q
*70.0)/100.0;r=(b+r*70.0)/100.0;}s=K(e)*0.00390625;t=K(d)*0.00390625;u=e-K(e);v=d-K(d);CC(h,1.0,h);o=0;k=R(i,(-5.0));w=i+0.0;x=R(i,5.0);b=i+4.0;d=b-9.765625E-4;y=b;while(o<2){if(o)FG(1,1,1,1);else FG(0,0,0,0);z=(-2);while(z<=3){ba=(-2);while(ba<=3){Bz(g);bb=z*8|0;bc=ba*8|0;bd=bb-u;be=bc-v;if(k>0){Gy(g,p*0.699999988079071,q*0.699999988079071,r*0.699999988079071,0.800000011920929);De(g,0.0,(-1.0),0.0);c=bd+0.0;e=be+8.0;bf=(bb+0.0)*0.00390625+s;bg=(bc+8.0)*0.00390625+t;G(g,c,w,e,bf,bg);bh=bd+8.0;bi=(bb+8.0)*0.00390625
+s;G(g,bh,w,e,bi,bg);e=be+0.0;bg=(bc+0.0)*0.00390625+t;G(g,bh,w,e,bi,bg);G(g,c,w,e,bf,bg);}if(x<=0){Gy(g,p,q,r,0.800000011920929);De(g,0.0,1.0,0.0);c=bd+0.0;e=be+8.0;bf=(bb+0.0)*0.00390625+s;bg=(bc+8.0)*0.00390625+t;G(g,c,d,e,bf,bg);bh=bd+8.0;bi=(bb+8.0)*0.00390625+s;G(g,bh,d,e,bi,bg);e=be+0.0;bg=(bc+0.0)*0.00390625+t;G(g,bh,d,e,bi,bg);G(g,c,d,e,bf,bg);}a:{Gy(g,p*0.8999999761581421,q*0.8999999761581421,r*0.8999999761581421,0.800000011920929);if(z>(-1)){De(g,(-1.0),0.0,0.0);bj=0;e=be+8.0;bg=(bc+8.0)*0.00390625
+t;bh=be+0.0;bi=(bc+0.0)*0.00390625+t;while(true){if(bj>=8)break a;b=bj;c=bd+b+0.0;bf=(bb+b+0.5)*0.00390625+s;G(g,c,w,e,bf,bg);G(g,c,y,e,bf,bg);G(g,c,y,bh,bf,bi);G(g,c,w,bh,bf,bi);bj=bj+1|0;}}}b:{if(z<=1){De(g,1.0,0.0,0.0);bk=0;bf=be+8.0;bh=(bc+8.0)*0.00390625+t;bi=be+0.0;c=(bc+0.0)*0.00390625+t;while(true){if(bk>=8)break b;b=bk;e=bd+b+1.0-9.765625E-4;bg=(bb+b+0.5)*0.00390625+s;G(g,e,w,bf,bg,bh);G(g,e,y,bf,bg,bh);G(g,e,y,bi,bg,c);G(g,e,w,bi,bg,c);bk=bk+1|0;}}}c:{Gy(g,p*0.800000011920929,q*0.800000011920929,
r*0.800000011920929,0.800000011920929);if(ba>(-1)){De(g,0.0,0.0,(-1.0));bj=0;c=bd+0.0;bf=(bb+0.0)*0.00390625+s;bh=bd+8.0;bi=(bb+8.0)*0.00390625+s;while(true){if(bj>=8)break c;b=bj;e=be+b+0.0;bg=(bc+b+0.5)*0.00390625+t;G(g,c,y,e,bf,bg);G(g,bh,y,e,bi,bg);G(g,bh,w,e,bi,bg);G(g,c,w,e,bf,bg);bj=bj+1|0;}}}d:{if(ba<=1){De(g,0.0,0.0,1.0);bk=0;bi=bd+0.0;e=(bb+0.0)*0.00390625+s;bg=bd+8.0;bh=(bb+8.0)*0.00390625+s;while(true){if(bk>=8)break d;b=bk;c=be+b+1.0-9.765625E-4;bf=(bc+b+0.5)*0.00390625+t;G(g,bi,y,c,e,bf);G(g,bg,
y,c,bh,bf);G(g,bg,w,c,bh,bf);G(g,bi,w,c,e,bf);bk=bk+1|0;}}}Bs(g);ba=ba+1|0;}z=z+1|0;}o=o+1|0;}BU(1.0,1.0,1.0,1.0);Bd(3042);Bb(2884);return;default:E$();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,$p);}
function AIk(a,b,c){var d,e,f,g,h,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=a.eK;e=new Wc;e.yh=b;RE(d,e);f=a.eK.s-1|0;g=a.eK.s;h=0;a:{while(h<g){d=Z(a.eK,f-h|0);if(!c){if(G4(d,b)<=1024.0)break a;if(!d.fv){if(h<1)break a;return 0;}if(h<3)break a;return 0;}if(d.fv)break a;h=h+1|0;}return a.eK.s?0:1;}$p=1;case 1:ADj(d);if(C()){break _;}H_(a.eK,d);d.i3=0;a:{while(true){h=h+1|0;if(h>=g)break;d=Z(a.eK,f-h|0);if
(!c){if(G4(d,b)<=1024.0)break a;if(!d.fv){if(h<1)break a;return 0;}if(h<3)break a;return 0;}if(d.fv)break a;}return a.eK.s?0:1;}continue _;default:E$();}}C4().s(a,b,c,d,e,f,g,h,$p);}
function AFI(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.bO.o.du)return;a:{BA();g=BeE;Bb(3042);Bb(3008);Dg(770,1);BU(1.0,1.0,1.0,(Bq(Long_toNumber(B_())/100.0)*0.20000000298023224+0.4000000059604645)*0.5);if(!d){if(a.tI<=0.0)break a;Dg(774,768);e=a.iG;h=B(179);$p=2;continue _;}if(e!==null){Dg(770,771);i=Bq(Long_toNumber(B_())
/100.0)*0.20000000298023224+0.800000011920929;BU(i,i,i,Bq(Long_toNumber(B_())/200.0)*0.20000000298023224+0.5);b=a.iG;e=B(179);$p=1;continue _;}}Bd(3042);Bd(3008);return;case 1:$z=AHv(b,e);if(C()){break _;}j=$z;Cp(3553,j);Bd(3042);Bd(3008);return;case 2:$z=AHv(e,h);if(C()){break _;}k=$z;Cp(3553,k);BU(1.0,1.0,1.0,0.5);B3();e=a.bM;d=c.h9;k=c.h$;j=c.h_;$p=3;case 3:$z=ACy(e,d,k,j);if(C()){break _;}j=$z;if(j<=0)h=null;else{L();h=BeI.data[j];}Bd(3008);OK((-3.0),(-3.0));Bb(32823);Bz(g);l=b.cs;m=b.d-b.cs;n=f;E_(g, -(l
+m*n), -(b.b7+(b.j-b.b7)*n), -(b.ct+(b.e-b.ct)*n));ADp(g);if(h===null){L();h=BeO;}b=a.D$;d=c.h9;k=c.h$;j=c.h_;o=240+(a.tI*10.0|0)|0;$p=4;case 4:AMz(b,h,d,k,j,o);if(C()){break _;}Bs(g);E_(g,0.0,0.0,0.0);OK(0.0,0.0);Bd(32823);Bb(3008);Gv(1);BE();Bd(3042);Bd(3008);return;default:E$();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,$p);}
function AGg(a,b,c,d,e,f){var g,h,i,j,k,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.bO.o.du)return;if(!d&&!c.k9){Bb(3042);Dg(770,771);BU(0.0,0.0,0.0,0.4000000059604645);Bd(3553);Gv(0);e=a.bM;d=c.h9;g=c.h$;h=c.h_;$p=1;continue _;}return;case 1:$z=ACy(e,d,g,h);if(C()){break _;}g=$z;if(g<=0){Gv(1);Bb(3553);Bd(3042);return;}i=b.cs;j=b.d-b.cs;k=f;i=i+j*k;j=b.b7+(b.j-b.b7)*k;k=b.ct
+(b.e-b.ct)*k;L();b=BeI.data[g];e=a.bM;d=c.h9;g=c.h$;h=c.h_;$p=2;case 2:$z=b.oS(e,d,g,h);if(C()){break _;}b=$z;b=Uh(Dw(b,0.0020000000949949026,0.0020000000949949026,0.0020000000949949026), -i, -j, -k);if(!a.bO.o.du){BA();c=BeE;Gl(c,3);Bg(c,b.R,b.M,b.S);Bg(c,b.V,b.M,b.S);Bg(c,b.V,b.M,b.W);Bg(c,b.R,b.M,b.W);Bg(c,b.R,b.M,b.S);Bs(c);Gl(c,3);Bg(c,b.R,b.U,b.S);Bg(c,b.V,b.U,b.S);Bg(c,b.V,b.U,b.W);Bg(c,b.R,b.U,b.W);Bg(c,b.R,b.U,b.S);Bs(c);Gl(c,1);Bg(c,b.R,b.M,b.S);Bg(c,b.R,b.U,b.S);Bg(c,b.V,b.M,b.S);Bg(c,b.V,b.U,b.S);Bg(c,
b.V,b.M,b.W);Bg(c,b.V,b.U,b.W);Bg(c,b.R,b.M,b.W);Bg(c,b.R,b.U,b.W);Bs(c);}Gv(1);Bb(3553);Bd(3042);return;default:E$();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function Tw(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,t;h=GK(b,16);i=GK(c,16);j=GK(d,16);k=GK(e,16);l=GK(f,16);m=GK(g,16);while(h<=k){n=h%a.ds|0;if(n<0)n=n+a.ds|0;o=i;while(o<=l){p=o%a.dF|0;if(p<0)p=p+a.dF|0;q=j;while(q<=m){r=q%a.ka|0;if(r<0)r=r+a.ka|0;s=Bj(Bj(r,a.dF)+p|0,a.ds)+n|0;t=a.c9.data[s];if(!t.i3)S(a.eK,t);KW(t);q=q+1|0;}o=o+1|0;}h=h+1|0;}}
function Rt(a,b,c,d){Tw(a,b-1|0,c-1|0,d-1|0,b+1|0,c+1|0,d+1|0);}
function AOH(a,b,c,d,e,f,g){Tw(a,b-1|0,c-1|0,d-1|0,e+1|0,f+1|0,g+1|0);}
function ARL(a,b,c){var d;d=0;while(d<a.c9.data.length){if(!AHy(a.c9.data[d])&&!(a.c9.data[d].fv&&(d+a.q9|0)&15))ASb(a.c9.data[d],b);d=d+1|0;}a.q9=a.q9+1|0;}
function AC3(a,b,c,d,e,f,g){return;}
function AH5(a,b,c,d,e,f,g,h){var i,j,k,l,m,n;if(a.bO.o.du)return;i=a.bM.bg.d-c;j=a.bM.bg.j-d;k=a.bM.bg.e-e;if(i*i+j*j+k*k<=256.0){if(b===B(213)){l=a.bO.c6;m=new SG;FD(m,a.bM,c,d,e,f,g,h);m.hY=1.0;m.ic=1.0;m.io=1.0;m.e7=32;D2(m,0.019999999552965164,0.019999999552965164);m.dr=m.dr*(N(m.m)*0.6000000238418579+0.20000000298023224);m.g=f*0.20000000298023224+(BO()*2.0-1.0)*0.019999999552965164;m.i=g*0.20000000298023224+(BO()*2.0-1.0)*0.019999999552965164;m.h=h*0.20000000298023224+(BO()*2.0-1.0)*0.019999999552965164;m.cw
=8.0/(BO()*0.8+0.2)|0;El(l,m);}else if(b===B(256))El(a.bO.c6,A75(a.bM,c,d,e,1.0));else if(b===B(223)){b=a.bO.c6;l=new Q6;FD(l,a.bM,c,d,e,f,g,h);l.g=f+(BO()*2.0-1.0)*0.05000000074505806;l.i=g+(BO()*2.0-1.0)*0.05000000074505806;l.h=h+(BO()*2.0-1.0)*0.05000000074505806;n=N(l.m)*0.30000001192092896+0.699999988079071;l.io=n;l.ic=n;l.hY=n;l.dr=N(l.m)*N(l.m)*6.0+1.0;l.cw=(16.0/(N(l.m)*0.8+0.2)|0)+2|0;El(b,l);}else if(b!==B(257)){if(b===B(254))El(a.bO.c6,BcB(a.bM,c,d,e));else if(b===B(214))El(a.bO.c6,Bco(a.bM,c,d,e,
f,g,h));else if(b===B(255))El(a.bO.c6,A75(a.bM,c,d,e,2.5));}else{b=a.bO.c6;l=new O7;FD(l,a.bM,c,d,e,f,g,h);l.g=l.g*0.009999999776482582+f;l.i=l.i*0.009999999776482582+g;l.h=l.h*0.009999999776482582+h;N(l.m);N(l.m);N(l.m);N(l.m);N(l.m);N(l.m);l.DQ=l.dr;l.io=1.0;l.ic=1.0;l.hY=1.0;l.cw=(8.0/(BO()*0.8+0.2)|0)+4|0;l.o5=1;l.e7=48;El(b,l);}}}
function A$l(a,b){return;}
function ATt(a,b){return;}
function VI(a){var b;b=0;while(b<a.c9.data.length){if(a.c9.data[b].on){if(!a.c9.data[b].i3)S(a.eK,a.c9.data[b]);KW(a.c9.data[b]);}b=b+1|0;}}
function AHd(){var a=this;CS.call(a);a.vc=0.0;a.yw=null;a.t4=null;}
function LM(){var a=new AHd();A4m(a);return a;}
function A4m(a){var b,c;DR(a);a.vc=0.0;b=J(B4,106);c=b.data;c[0]=B(388);c[1]=B(389);c[2]=B(390);c[3]=B(391);c[4]=B(392);c[5]=B(393);c[6]=B(394);c[7]=B(395);c[8]=B(396);c[9]=B(397);c[10]=B(398);c[11]=B(399);c[12]=B(400);c[13]=B(401);c[14]=B(402);c[15]=B(403);c[16]=B(404);c[17]=B(405);c[18]=B(406);c[19]=B(407);c[20]=B(408);c[21]=B(409);c[22]=B(410);c[23]=B(411);c[24]=B(412);c[25]=B(413);c[26]=B(414);c[27]=B(415);c[28]=B(416);c[29]=B(417);c[30]=B(418);c[31]=B(419);c[32]=B(420);c[33]=B(421);c[34]=B(422);c[35]=B(423);c[36]
=B(424);c[37]=B(425);c[38]=B(426);c[39]=B(427);c[40]=B(428);c[41]=B(429);c[42]=B(430);c[43]=B(431);c[44]=B(432);c[45]=B(433);c[46]=B(434);c[47]=B(435);c[48]=B(436);c[49]=B(437);c[50]=B(409);c[51]=B(438);c[52]=B(439);c[53]=B(440);c[54]=B(441);c[55]=B(442);c[56]=B(443);c[57]=B(444);c[58]=B(445);c[59]=B(446);c[60]=B(447);c[61]=B(448);c[62]=B(449);c[63]=B(450);c[64]=B(451);c[65]=B(452);c[66]=B(453);c[67]=B(454);c[68]=B(455);c[69]=B(456);c[70]=B(457);c[71]=B(458);c[72]=B(459);c[73]=B(460);c[74]=B(461);c[75]=B(462);c[76]
=B(463);c[77]=B(464);c[78]=B(465);c[79]=B(466);c[80]=B(467);c[81]=B(468);c[82]=B(469);c[83]=B(470);c[84]=B(471);c[85]=B(472);c[86]=B(473);c[87]=B(474);c[88]=B(475);c[89]=B(476);c[90]=B(477);c[91]=B(478);c[92]=B(479);c[93]=B(480);c[94]=B(481);c[95]=B(482);c[96]=B(483);c[97]=B(484);c[98]=B(485);c[99]=B(486);c[100]=B(487);c[101]=B(488);c[102]=B(489);c[103]=B(490);c[104]=B(491);c[105]=B(492);a.yw=b;a.t4=a.yw.data[BO()*a.yw.data.length|0];}
function A5m(a){a.vc=a.vc+0.009999999776482582;}
function ANM(a,b,c){return;}
function AIt(a){Dy(a.bG);S(a.bG,Dj(1,(a.bm/2|0)-100|0,(a.bC/4|0)+48|0,B(493)));S(a.bG,Dj(2,(a.bm/2|0)-100|0,(a.bC/4|0)+72|0,B(494)));S(a.bG,Dj(3,(a.bm/2|0)-100|0,(a.bC/4|0)+96|0,B(495)));S(a.bG,Dj(0,(a.bm/2|0)-100|0,((a.bC/4|0)+120|0)+12|0,B(496)));Z(a.bG,1).gB=0;Z(a.bG,2).gB=0;if(a.J.k1===null)Z(a.bG,1).gB=0;}
function ACs(a,b){var c,d,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!b.cl){c=a.J;d=AIO(a,a.J.o);$p=1;continue _;}if(b.cl!=1)return;b=a.J;c=A$R(a);$p=2;continue _;case 1:ADW(c,d);if(C()){break _;}if(b.cl!=1)return;b=a.J;c=A$R(a);$p=2;case 2:ADW(b,c);if(C()){break _;}return;default:E$();}}C4().s(a,b,c,d,$p);}
function ZE(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:ABi(a);if(C()){break _;}BA();e=BeE;f=3553;g=a.J.bo;h=B(497);$p=2;case 2:$z=AHv(g,h);if(C()){break _;}i=$z;Cp(f,i);BU(1.0,1.0,1.0,1.0);EQ(e,16777215);CH(a,(a.bm-256|0)/2|0,30,0,0,256,49);B3();Bw((a.bm/2|0)+90|0,70.0,0.0);Bv((-20.0),0.0,0.0,1.0);j=Bq(Long_toNumber(Long_rem(B_(),
Long_fromInt(1000)))/1000.0*3.1415927410125732*2.0)*0.10000000149011612;if(j<0.0)j= -j;k=(1.7999999523162842-j)*100.0/(Dx(a.bZ,a.t4)+32|0);CC(k,k,k);DG(a,a.bZ,a.t4,0,(-8),16776960);BE();Cy(a.bZ,B(498),(a.bm-Dx(a.bZ,B(498))|0)-2|0,a.bC-10|0,16777215);l=Kx();m=J1();n=Long_sub(l,Ke());g=new U;W(g);e=V(I(C7(I(C7(I(g,B(499)),Long_div(Long_mul(n,Long_fromInt(100)),l)),B(500)),Long_div(Long_div(l,Long_fromInt(1024)),Long_fromInt(1024))),B(501)));Cy(a.bZ,e,(a.bm-Dx(a.bZ,e)|0)-2|0,2,8421504);g=new U;W(g);e=V(I(C7(I(C7(I(g,
B(502)),Long_div(Long_mul(m,Long_fromInt(100)),l)),B(503)),Long_div(Long_div(m,Long_fromInt(1024)),Long_fromInt(1024))),B(504)));Cy(a.bZ,e,(a.bm-Dx(a.bZ,e)|0)-2|0,12,8421504);$p=3;case 3:AFF(a,b,c,d);if(C()){break _;}return;default:E$();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function O3(){var a=this;D.call(a);a.mV=null;a.cD=null;a.je=null;a.su=null;}
function El(a,b){var c;c=b.xy();S(a.cD.data[c],b);}
function AAZ(a){var b,c,d,e,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=0;while(b<3){c=0;if(c<a.cD.data[b].s){d=Z(a.cD.data[b],c);$p=1;continue _;}b=b+1|0;}return;case 1:d.ep();if(C()){break _;}if(!d.cR)e=c;else{d=a.cD.data[b];e=c+(-1)|0;En(d,c);}c=e+1|0;while(true){if(c<a.cD.data[b].s){d=Z(a.cD.data[b],c);continue _;}b=b+1|0;if(b>=3)break;c=0;}return;default:E$();}}C4().s(a,b,c,d,e,$p);}
function ABe(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=BC(b.u*3.1415927410125732/180.0);e=Bq(b.u*3.1415927410125732/180.0);f= -e*Bq(b.I*3.1415927410125732/180.0);g=d*Bq(b.I*3.1415927410125732/180.0);h=BC(b.I*3.1415927410125732/180.0);i=b.cs;j=b.d-b.cs;k=c;BkG=i+j*k;BkH=b.b7+(b.j-b.b7)*k;BkI=b.ct
+(b.e-b.ct)*k;l=0;while(l<2){if(a.cD.data[l].s){if(!l){b=a.je;m=B(505);$p=1;continue _;}if(l==1){b=a.je;m=B(179);$p=2;continue _;}Cp(3553,0);BA();m=BeE;Bz(m);n=0;if(n<a.cD.data[l].s){o=Z(a.cD.data[l],n);$p=3;continue _;}Bs(m);}l=l+1|0;}return;case 1:$z=AHv(b,m);if(C()){break _;}p=$z;a:while(true){if(l==1){b=a.je;m=B(179);$p=2;continue _;}Cp(3553,p);BA();m=BeE;Bz(m);n=0;if(n<a.cD.data[l].s){o=Z(a.cD.data[l],n);$p=3;continue _;}Bs(m);while(true){l=l+1|0;if(l>=2)break a;if(!a.cD.data[l].s)continue;else break;}p
=0;if(!l){b=a.je;m=B(505);continue _;}}return;case 2:$z=AHv(b,m);if(C()){break _;}p=$z;a:while(true){Cp(3553,p);BA();m=BeE;Bz(m);n=0;if(n<a.cD.data[l].s){o=Z(a.cD.data[l],n);$p=3;continue _;}Bs(m);while(true){l=l+1|0;if(l>=2)break a;if(!a.cD.data[l].s)continue;else break;}p=0;if(!l){b=a.je;m=B(505);$p=1;continue _;}if(l==1){b=a.je;m=B(179);continue _;}}return;case 3:o.kR(m,c,d,h,e,f,g);if(C()){break _;}n=n+1|0;a:while(true){if(n<a.cD.data[l].s){o=Z(a.cD.data[l],n);continue _;}Bs(m);while(true){l=l+1|0;if(l>=
2)break a;if(!a.cD.data[l].s)continue;else break;}if(!l){b=a.je;m=B(505);$p=1;continue _;}if(l==1){b=a.je;m=B(179);$p=2;continue _;}Cp(3553,0);BA();m=BeE;Bz(m);n=0;}return;default:E$();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,$p);}
function ABY(a,b,c){var d,e,f,g,h,i,j,k,l,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=2;if(a.cD.data[d].s){BA();e=BeE;f=0;if(f<a.cD.data[d].s){g=Z(a.cD.data[d],f);h=0.0;i=0.0;j=0.0;k=0.0;l=0.0;$p=1;continue _;}}return;case 1:g.kR(e,c,h,i,j,k,l);if(C()){break _;}f=f+1|0;if(f>=a.cD.data[d].s)return;g=Z(a.cD.data[d],f);h=0.0;i=0.0;j=0.0;k=0.0;l=0.0;continue _;default:E$();}}C4().s(a,
b,c,d,e,f,g,h,i,j,k,l,$p);}
function O5(a,b){var c;a.mV=b;c=0;while(c<3){Dy(a.cD.data[c]);c=c+1|0;}}
function AEF(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=a.mV;$p=1;case 1:a:{$z=ACy(e,b,c,d);if(C()){break _;}f=$z;if(f){L();e=BeI.data[f];g=0;h=b;i=c;j=d;while(true){if(g>=4)break a;k=0;while(k<4){l=0;while(l<4){m=h+(g+0.5)/4.0;n=i+(k+0.5)/4.0;o=j+(l+0.5)/4.0;El(a,AY3(a.mV,m,n,o,m-h-0.5,n-i-0.5,o-j-0.5,e));l
=l+1|0;}k=k+1|0;}g=g+1|0;}}}return;default:E$();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,$p);}
function Y4(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=a.mV;$p=1;case 1:$z=ACy(f,b,c,d);if(C()){break _;}g=$z;if(g){L();h=BeI.data[g];i=b;j=i+Cl(a.su)*(h.dc-h.da-0.20000000298023224)+0.10000000149011612+h.da;k=c;l=k+Cl(a.su)*(h.cF-h.cM-0.20000000298023224)+0.10000000149011612+h.cM;m=d;n=m+Cl(a.su)*(h.dd-h.c_-0.20000000298023224)
+0.10000000149011612+h.c_;if(!e)l=k+h.cM-0.10000000149011612;if(e==1)l=k+h.cF+0.10000000149011612;if(e==2)n=m+h.c_-0.10000000149011612;if(e==3)n=m+h.dd+0.10000000149011612;if(e==4)j=i+h.da-0.10000000149011612;if(e==5)j=i+h.dc+0.10000000149011612;El(a,Yc(APt(AY3(a.mV,j,l,n,0.0,0.0,0.0,h),0.20000000298023224),0.6000000238418579));}return;default:E$();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function XA(a){var b;b=new U;W(b);return V(Bf(I(b,B(3)),(a.cD.data[0].s+a.cD.data[1].s|0)+a.cD.data[2].s|0));}
function Nt(){var a=this;Gg.call(a);a.g5=null;a.vs=null;a.b2=null;a.FV=null;a.rV=0;a.En=0.0;a.II=0.0;}
var BkJ=null;function APL(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=FK(a.b2.cq,a.b2.bF);g=AEr(f);h=Zg(f);i=a.b2.e_;LC(a.b2.eV);Bb(3042);BU(1.0,1.0,1.0,1.0);c=3553;f=a.b2.bo;j
=B(506);$p=1;case 1:$z=AHv(f,j);if(C()){break _;}d=$z;Cp(c,d);k=a.b2.f.K;a.mT=(-90.0);l=g/2|0;m=l-91|0;n=h-22|0;CH(a,m,n,0,0,182,22);CH(a,(m-1|0)+(k.bL*20|0)|0,n-1|0,0,22,24,22);c=3553;f=a.b2.bo;j=B(507);$p=2;case 2:$z=AHv(f,j);if(C()){break _;}d=$z;Cp(c,d);Bb(3042);Dg(775,769);CH(a,l-7|0,(h/2|0)-7|0,0,0,16,16);Bd(3042);o=((a.b2.f.dy/3|0)%2|0)!=1?0:1;if(a.b2.f.dy<10)o=0;p=a.b2.f.bT;q=a.b2.f.tF;NL(a.vs,Long_fromInt(Bj(a.rV,312871)));if(!AJ4(a.b2.cB)){Bd(3042);Bb(32826);B3();Bv(180.0,1.0,0.0,0.0);Hy();BE();r=
0;c=l-90|0;m=(h-16|0)-3|0;if(r>=9){DT();Bd(32826);if(!a.b2.o.lr)Cy(i,B(508),2,2,16777215);else{Cy(i,BL(I(I(I(BX(),B(509)),a.b2.lA),B(27))),2,2,16777215);Cy(i,Mh(a.b2),2,12,16777215);Cy(i,Oo(a.b2),2,22,16777215);Cy(i,ML(a.b2),2,32,16777215);s=Kx();t=J1();u=Long_sub(t,Ke());j=BL(I(C7(I(C7(I(C7(I(BX(),B(510)),Long_div(Long_mul(u,Long_fromInt(100)),s)),B(503)),Long_div(Long_div(u,Long_fromInt(1024)),Long_fromInt(1024))),B(511)),Long_div(Long_div(s,Long_fromInt(1024)),Long_fromInt(1024))),B(501)));Hu(a,i,j,(g-Dx(i,
j)|0)-2|0,2,14737632);f=BL(I(C7(I(C7(I(BX(),B(502)),Long_div(Long_mul(t,Long_fromInt(100)),s)),B(503)),Long_div(Long_div(t,Long_fromInt(1024)),Long_fromInt(1024))),B(504)));Hu(a,i,f,(g-Dx(i,f)|0)-2|0,12,14737632);}m=0;e=h-8|0;while(m<CY(a.g5)&&m<10){if(Z(a.g5,m).oB<200)Cy(i,Z(a.g5,m).yC,2,(e-(m*9|0)|0)-20|0,16777215);m=m+1|0;}return;}n=(c+(r*20|0)|0)+2|0;$p=3;continue _;}r=AC2(a.b2.f);n=0;v=h-32|0;w=l+91|0;d=R(p,4);while(n<10){if(r>0){x=(w-(n*8|0)|0)-9|0;c=R((n*2|0)+1|0,r);if(c<0)CH(a,x,v,34,9,9,9);if(!c)CH(a,
x,v,25,9,9,9);if(c>0)CH(a,x,v,16,9,9,9);}y=0;if(o)y=1;z=m+(n*8|0)|0;c=d>0?v:v+E(a.vs,2)|0;CH(a,z,c,16+(y*9|0)|0,0,9,9);if(o){e=R((n*2|0)+1|0,q);if(e<0)CH(a,z,c,70,0,9,9);if(!e)CH(a,z,c,79,0,9,9);}e=R((n*2|0)+1|0,p);if(e<0)CH(a,z,c,52,0,9,9);if(!e)CH(a,z,c,61,0,9,9);n=n+1|0;}f=a.b2.f;j=BfJ;$p=4;continue _;case 3:AEy(a,r,n,m,b);if(C()){break _;}r=r+1|0;if(r>=9){DT();Bd(32826);if(!a.b2.o.lr)Cy(i,B(508),2,2,16777215);else{Cy(i,BL(I(I(I(BX(),B(509)),a.b2.lA),B(27))),2,2,16777215);Cy(i,Mh(a.b2),2,12,16777215);Cy(i,
Oo(a.b2),2,22,16777215);Cy(i,ML(a.b2),2,32,16777215);s=Kx();t=J1();u=Long_sub(t,Ke());j=BL(I(C7(I(C7(I(C7(I(BX(),B(510)),Long_div(Long_mul(u,Long_fromInt(100)),s)),B(503)),Long_div(Long_div(u,Long_fromInt(1024)),Long_fromInt(1024))),B(511)),Long_div(Long_div(s,Long_fromInt(1024)),Long_fromInt(1024))),B(501)));Hu(a,i,j,(g-Dx(i,j)|0)-2|0,2,14737632);f=BL(I(C7(I(C7(I(BX(),B(502)),Long_div(Long_mul(t,Long_fromInt(100)),s)),B(503)),Long_div(Long_div(t,Long_fromInt(1024)),Long_fromInt(1024))),B(504)));Hu(a,i,f,(g
-Dx(i,f)|0)-2|0,12,14737632);}m=0;e=h-8|0;while(m<CY(a.g5)&&m<10){if(Z(a.g5,m).oB<200)Cy(i,Z(a.g5,m).yC,2,(e-(m*9|0)|0)-20|0,16777215);m=m+1|0;}return;}n=(c+(r*20|0)|0)+2|0;continue _;case 4:a:{$z=AGI(f,j);if(C()){break _;}c=$z;if(c){c=Nd((a.b2.f.f_-2|0)*10.0/300.0)|0;ba=(Nd(a.b2.f.f_*10.0/300.0)|0)-c|0;x=0;d=c+ba|0;p=v-9|0;while(true){if(x>=d)break a;if(x>=c)CH(a,m+(x*8|0)|0,p,25,18,9,9);else CH(a,m+(x*8|0)|0,p,16,18,9,9);x=x+1|0;}}}Bd(3042);Bb(32826);B3();Bv(180.0,1.0,0.0,0.0);Hy();BE();r=0;c=l-90|0;m=(h-
16|0)-3|0;if(r>=9){DT();Bd(32826);if(!a.b2.o.lr)Cy(i,B(508),2,2,16777215);else{Cy(i,BL(I(I(I(BX(),B(509)),a.b2.lA),B(27))),2,2,16777215);Cy(i,Mh(a.b2),2,12,16777215);Cy(i,Oo(a.b2),2,22,16777215);Cy(i,ML(a.b2),2,32,16777215);s=Kx();t=J1();u=Long_sub(t,Ke());j=BL(I(C7(I(C7(I(C7(I(BX(),B(510)),Long_div(Long_mul(u,Long_fromInt(100)),s)),B(503)),Long_div(Long_div(u,Long_fromInt(1024)),Long_fromInt(1024))),B(511)),Long_div(Long_div(s,Long_fromInt(1024)),Long_fromInt(1024))),B(501)));Hu(a,i,j,(g-Dx(i,j)|0)-2|0,2,14737632);f
=BL(I(C7(I(C7(I(BX(),B(502)),Long_div(Long_mul(t,Long_fromInt(100)),s)),B(503)),Long_div(Long_div(t,Long_fromInt(1024)),Long_fromInt(1024))),B(504)));Hu(a,i,f,(g-Dx(i,f)|0)-2|0,12,14737632);}m=0;e=h-8|0;while(m<CY(a.g5)&&m<10){if(Z(a.g5,m).oB<200)Cy(i,Z(a.g5,m).yC,2,(e-(m*9|0)|0)-20|0,16777215);m=m+1|0;}return;}n=(c+(r*20|0)|0)+2|0;$p=3;continue _;default:E$();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,$p);}
function AEy(a,b,c,d,e){var f,g,h,i,j,k,l,m,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=a.b2.f.K.bh.data[b];if(f===null)return;g=f.mK-e;b=R(g,0.0);if(b>0){B3();h=1.0+g/5.0;i=c+8|0;g=i;j=d+12|0;Bw(g,j,0.0);CC(1.0/h,(h+1.0)/2.0,1.0);Bw( -i, -j,0.0);}k=BkJ;l=a.b2.e_;m=a.b2.bo;$p=1;case 1:AGh(k,l,m,f,c,d);if(C()){break _;}if(b>0)BE();Lm(BkJ,a.b2.e_,a.b2.bo,f,c,d);return;default:
E$();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function AKy(a){var b,c;a.rV=a.rV+1|0;b=0;while(b<a.g5.s){c=Z(a.g5,b);c.oB=c.oB+1|0;b=b+1|0;}}
function AAb(){BkJ=X4();}
function K_(){}
function IJ(){var a=this;D.call(a);a.ji=null;a.kS=null;a.ef=null;a.be=null;a.gp=null;a.fT=0;a.gr=0;a.gg=null;a.vH=0;a.wQ=0;}
function B2(a,b,c){var d;if(b==a.fT&&c==a.gr&&a.gg!==null)return 1;a:{b:{d=(b&31)+((c&31)*32|0)|0;if(a.be.data[d]!==null){if(a.be.data[d]===a.ji)break b;if(ARI(a.be.data[d],b,c))break b;}b=0;break a;}b=1;}return b;}
function AOg(a,b,c){var d,e,f,g,h,i,$$je,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b==a.fT&&c==a.gr&&a.gg!==null)return a.gg;if(!a.gp.ua&&!AGw(a,b,c))return a.ji;d=(b&31)+((c&31)*32|0)|0;if(!B2(a,b,c)){if(a.be.data[d]!==null)AOP(a.be.data[d]);if(a.ef===null)e=null;else{try{f=a.ef;e=a.gp;$p=1;continue _;}catch($$e){$$je=Y($$e);if($$je instanceof BD){f=$$je;}else{throw $$e;}}B9(f);e=a.ji;}if(e===
null){if(a.kS!==null){f=a.kS;$p=2;continue _;}e=a.ji;}a.be.data[d]=e;if(a.be.data[d]!==null)MF(a.be.data[d]);if(!a.be.data[d].he){g=b+1|0;h=c+1|0;if(B2(a,g,h)&&B2(a,b,h)&&B2(a,g,c)){$p=6;continue _;}}g=b-1|0;if(B2(a,g,c)){$p=3;continue _;}h=c-1|0;if(B2(a,b,h)){$p=4;continue _;}if(B2(a,g,h)){$p=5;continue _;}}a.fT=b;a.gr=c;a.gg=a.be.data[d];return a.be.data[d];case 1:a:{try{$z=AGY(f,e,b,c);if(C()){break _;}e=$z;if(e!==null)e.np=a.gp.dU;break a;}catch($$e){$$je=Y($$e);if($$je instanceof BD){f=$$je;}else{throw $$e;}}B9(f);e
=a.ji;}if(e===null){if(a.kS!==null){f=a.kS;$p=2;continue _;}e=a.ji;}a.be.data[d]=e;if(a.be.data[d]!==null)MF(a.be.data[d]);if(!a.be.data[d].he){g=b+1|0;h=c+1|0;if(B2(a,g,h)&&B2(a,b,h)&&B2(a,g,c)){$p=6;continue _;}}g=b-1|0;if(B2(a,g,c)){$p=3;continue _;}h=c-1|0;if(B2(a,b,h)){$p=4;continue _;}if(!B2(a,g,h)){a.fT=b;a.gr=c;a.gg=a.be.data[d];return a.be.data[d];}$p=5;continue _;case 2:$z=Ud(f,b,c);if(C()){break _;}e=$z;a.be.data[d]=e;if(a.be.data[d]!==null)MF(a.be.data[d]);if(!a.be.data[d].he){g=b+1|0;h=c+1|0;if
(B2(a,g,h)&&B2(a,b,h)&&B2(a,g,c)){$p=6;continue _;}}g=b-1|0;if(B2(a,g,c)){$p=3;continue _;}h=c-1|0;if(B2(a,b,h)){$p=4;continue _;}if(!B2(a,g,h)){a.fT=b;a.gr=c;a.gg=a.be.data[d];return a.be.data[d];}$p=5;continue _;case 3:$z=AOg(a,g,c);if(C()){break _;}f=$z;if(!f.he){h=c+1|0;if(B2(a,g,h)&&B2(a,b,h)&&B2(a,g,c)){$p=7;continue _;}}h=c-1|0;if(B2(a,b,h)){$p=4;continue _;}if(!B2(a,g,h)){a.fT=b;a.gr=c;a.gg=a.be.data[d];return a.be.data[d];}$p=5;continue _;case 4:$z=AOg(a,b,h);if(C()){break _;}f=$z;if(!f.he){i=b+1|0;if
(B2(a,i,h)&&B2(a,b,h)&&B2(a,i,c)){$p=8;continue _;}}if(!B2(a,g,h)){a.fT=b;a.gr=c;a.gg=a.be.data[d];return a.be.data[d];}$p=5;case 5:$z=AOg(a,g,h);if(C()){break _;}f=$z;if(!f.he&&B2(a,g,h)&&B2(a,b,h)&&B2(a,g,c)){$p=9;continue _;}a.fT=b;a.gr=c;a.gg=a.be.data[d];return a.be.data[d];case 6:AFs(a,a,b,c);if(C()){break _;}g=b-1|0;if(B2(a,g,c)){$p=3;continue _;}h=c-1|0;if(B2(a,b,h)){$p=4;continue _;}if(!B2(a,g,h)){a.fT=b;a.gr=c;a.gg=a.be.data[d];return a.be.data[d];}$p=5;continue _;case 7:AFs(a,a,g,c);if(C()){break _;}h
=c-1|0;if(B2(a,b,h)){$p=4;continue _;}if(!B2(a,g,h)){a.fT=b;a.gr=c;a.gg=a.be.data[d];return a.be.data[d];}$p=5;continue _;case 8:AFs(a,a,b,h);if(C()){break _;}if(!B2(a,g,h)){a.fT=b;a.gr=c;a.gg=a.be.data[d];return a.be.data[d];}$p=5;continue _;case 9:AFs(a,a,g,h);if(C()){break _;}a.fT=b;a.gr=c;a.gg=a.be.data[d];return a.be.data[d];default:E$();}}C4().s(a,b,c,d,e,f,g,h,i,$p);}
function AFs(a,b,c,d){var e,f,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AOg(a,c,d);if(C()){break _;}e=$z;if(!e.he){e.he=1;if(a.kS!==null){f=a.kS;$p=2;continue _;}}return;case 2:AHW(f,b,c,d);if(C()){break _;}SP(e);return;default:E$();}}C4().s(a,b,c,d,e,f,$p);}
function AN0(a,b,c){var d,e,f,g,h,i,j,k,$$je,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=0;e=0;if(c!==null){f=0;while(f<a.be.data.length){if(a.be.data[f]!==null&&Kp(a.be.data[f],b))e=e+1|0;f=f+1|0;}}g=0;h=0;while(true){if(h>=a.be.data.length){if(b&&a.ef===null)return 1;return 1;}if(a.be.data[h]!==null){if(b&&!a.be.data[h].qc)a:{i=a.be.data[h];if(a.ef!==null){try{MC(a.ef,a.gp,i);break a;}
catch($$e){$$je=Y($$e);if($$je instanceof BD){i=$$je;}else{throw $$e;}}i.nB();}}if(Kp(a.be.data[h],b)){i=a.be.data[h];if(a.ef!==null){try{i.np=a.gp.dU;j=a.ef;k=a.gp;$p=1;continue _;}catch($$e){$$je=Y($$e);if($$je instanceof BT){i=$$je;}else{throw $$e;}}B9(i);}a.be.data[h].e9=0;d=d+1|0;if(d==2&&!b)break;if(c!==null){g=g+1|0;if(!(g%10|0)){f=(g*100|0)/e|0;$p=2;continue _;}}}}h=h+1|0;}return 0;case 1:b:{try{YW(j,k,i);if(C()){break _;}break b;}catch($$e){$$je=Y($$e);if($$je instanceof BT){i=$$je;}else{throw $$e;}}B9(i);}while
(true){a.be.data[h].e9=0;d=d+1|0;if(d==2&&!b)break;if(c!==null){g=g+1|0;if(!(g%10|0)){f=(g*100|0)/e|0;$p=2;continue _;}}while(true){h=h+1|0;if(h>=a.be.data.length){if(b&&a.ef===null)return 1;return 1;}if(a.be.data[h]===null)continue;if(b&&!a.be.data[h].qc)c:{i=a.be.data[h];if(a.ef!==null){try{MC(a.ef,a.gp,i);break c;}catch($$e){$$je=Y($$e);if($$je instanceof BD){i=$$je;}else{throw $$e;}}i.nB();}}if(Kp(a.be.data[h],b))break;}i=a.be.data[h];if(a.ef===null)continue;try{i.np=a.gp.dU;j=a.ef;k=a.gp;continue _;}catch
($$e){$$je=Y($$e);if($$je instanceof BT){i=$$je;}else{throw $$e;}}B9(i);}return 0;case 2:XK(c,f);if(C()){break _;}while(true){h=h+1|0;if(h>=a.be.data.length){if(b&&a.ef===null)return 1;return 1;}if(a.be.data[h]===null)continue;if(b&&!a.be.data[h].qc)d:{i=a.be.data[h];if(a.ef!==null){try{MC(a.ef,a.gp,i);break d;}catch($$e){$$je=Y($$e);if($$je instanceof BD){i=$$je;}else{throw $$e;}}i.nB();}}if(!Kp(a.be.data[h],b))continue;i=a.be.data[h];if(a.ef!==null){try{i.np=a.gp.dU;j=a.ef;k=a.gp;$p=1;continue _;}catch($$e)
{$$je=Y($$e);if($$je instanceof BT){i=$$je;}else{throw $$e;}}B9(i);}a.be.data[h].e9=0;d=d+1|0;if(d==2&&!b)break;if(c===null)continue;g=g+1|0;if(!(g%10|0)){f=(g*100|0)/e|0;continue _;}}return 0;default:E$();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function MV(a,b,c){a.vH=b;a.wQ=c;}
function AGw(a,b,c){return b>=(a.vH-15|0)&&c>=(a.wQ-15|0)&&b<=(a.vH+15|0)&&c<=(a.wQ+15|0)?1:0;}
function A_n(a){return 1;}
function Jx(){var a=this;EO.call(a);a.K=null;a.AL=0;a.k5=0;a.qz=0.0;a.kW=0.0;a.CN=null;a.x_=0;}
function AFX(a){var $p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AKT(a);if(C()){break _;}a.qz=a.kW;a.kW=0.0;return;default:E$();}}C4().s(a,$p);}
function AK8(a){var b,c,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.c4=1.6200000047683716;D2(a,0.6000000238418579,1.7999999523162842);if(a.l!==null){if(a.j>0.0){CU(a,a.d,a.j,a.e);b=a.l;c=a.L;$p=1;continue _;}a.h=0.0;a.i=0.0;a.g=0.0;a.I=0.0;}if(a.l!==null)a.l.bg=a;a.bT=20;a.c2=0;return;case 1:$z=XW(b,a,c);if(C()){break _;}b=$z;if(b.s){a.j=a.j+1.0;if(a.j>0.0){CU(a,a.d,a.j,a.e);b=a.l;c=a.L;continue _;}}a.h=0.0;a.i=0.0;a.g=0.0;a.I=0.0;if(a.l!==null)a.l.bg
=a;a.bT=20;a.c2=0;return;default:E$();}}C4().s(a,b,c,$p);}
function Y7(a){var b,c,d,e,f,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!a.l.i2&&a.bT<20&&!((a.oQ%20|0)*4|0))UU(a,1);AEk(a.K);a.qz=a.kW;$p=1;case 1:ACr(a);if(C()){break _;}b=Ce(a.g*a.g+a.h*a.h);c=It( -a.i*0.20000000298023224)*15.0;if(b>0.10000000149011612)b=0.10000000149011612;if(!(a.cx&&a.bT>0))b=0.0;if(!(!a.cx&&a.bT>0))c=0.0;a.kW=a.kW+(b-a.kW)*0.4000000059604645;a.jm=a.jm+(c-a.jm)*0.800000011920929;if(a.bT<=0)return;d
=a.l;e=Dw(a.L,1.0,0.0,1.0);$p=2;case 2:a:{$z=ADM(d,a,e);if(C()){break _;}d=$z;if(d!==null){f=0;while(true){if(f>=d.s)break a;Z(d,f).xH(a);f=f+1|0;}}}return;default:E$();}}C4().s(a,b,c,d,e,f,$p);}
function A4u(a){return a.k5;}
function ALe(a,b){var c,d,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:D2(a,0.20000000298023224,0.20000000298023224);CU(a,a.d,a.j,a.e);a.i=0.10000000149011612;if(!DC(a.CN,B(512))){c=a.K;$p=1;continue _;}c=new Cd;BB();Gq(c,BhH,1);d=1;$p=2;continue _;case 1:AI0(c);if(C()){break _;}if(b===null){a.h=0.0;a.g=0.0;}else{a.g= -BC((a.kG+a.u)*3.1415927410125732/180.0)*0.10000000149011612;a.h= -Bq((a.kG+a.u)*3.1415927410125732/180.0)*0.10000000149011612;}a.c4
=0.10000000149011612;return;case 2:AQw(a,c,d);if(C()){break _;}c=a.K;$p=1;continue _;default:E$();}}C4().s(a,b,c,d,$p);}
function AZt(a,b,c){a.k5=a.k5+c|0;}
function ALT(a,b){var c,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=0;$p=1;case 1:AQw(a,b,c);if(C()){break _;}return;default:E$();}}C4().s(a,b,c,$p);}
function AQw(a,b,c){var d,e,f,g,h,i,j,k,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b===null)return;d=Hd(a.l,a.d,a.j-0.30000001192092896,a.e,b);d.g$=40;if(c){e=N(a.m)*0.5;f=N(a.m)*3.1415927410125732*2.0;d.g= -Bq(f)*e;d.h=BC(f)*e;d.i=0.20000000298023224;}else{d.g= -Bq(a.u/180.0*3.1415927410125732)*BC(a.I/180.0*3.1415927410125732)*0.30000001192092896;d.h=BC(a.u/180.0*3.1415927410125732)
*BC(a.I/180.0*3.1415927410125732)*0.30000001192092896;d.i= -Bq(a.I/180.0*3.1415927410125732)*0.30000001192092896+0.10000000149011612;e=N(a.m)*3.1415927410125732*2.0;g=0.019999999552965164*N(a.m);h=d.g;i=e;j=GE(i);k=g;d.g=h+j*k;d.i=d.i+(N(a.m)-N(a.m))*0.10000000149011612;d.h=d.h+Gs(i)*k;}b=a.l;$p=1;case 1:AOi(b,d);if(C()){break _;}return;default:E$();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function AKS(a,b){var c,d,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=ADy(a.K,b);b=BfJ;$p=1;case 1:$z=AGI(a,b);if(C()){break _;}d=$z;if(d)c=c/5.0;if(!a.cx)c=c/5.0;return c;default:E$();}}C4().s(a,b,c,d,$p);}
function M9(a,b){return ADX(a.K,b);}
function A5d(a){return 0.11999999731779099;}
function Ys(a,b,c){var d,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.hk=0;if(a.bT<=0)return 0;if(a.dy>a.oZ/2.0)return 0;if(!(!(b instanceof DP)&&!(b instanceof Jv))){if(!a.l.i2)c=0;if(a.l.i2==1)c=(c/3|0)+1|0;if(a.l.i2==3)c=(c*3|0)/2|0;}d=Bj(c,25-TH(a.K)|0)+a.x_|0;AD2(a.K,c);c=d/25|0;a.x_=d%25|0;if(!c)return 0;$p=1;case 1:$z=AB5(a,b,c);if(C()){break _;}c=$z;return c;default:E$();}}C4().s(a,b,c,d,$p);}
function AGD(){var a=this;Jx.call(a);a.hW=null;a.k6=null;}
function A6D(a,b,c){var d=new AGD();AYX(d,a,b,c);return d;}
function AYX(a,b,c,d){var e;FC(a,c);a.oZ=20;a.dG=0.0;a.e$=0.0;a.G8=1;a.yu=B(376);a.G7=1;a.D5=0.0;a.E2=null;a.Jv=1.0;a.uZ=0;a.Jw=0.0;a.bT=10;a.kG=0.0;a.c2=0;a.dz=0;a.Cm=0;a.Fh=(-1);a.JB=BO()*0.8999999761581421+0.10000000149011612;a.hk=0;a.hG=0;a.zU=0.0;a.s0=0.699999988079071;a.mD=1;a.Iq=(BO()+1.0)*0.009999999776482582;CU(a,a.d,a.j,a.e);a.JI=BO()*12398.0;a.u=BO()*3.1415927410125732*2.0;a.G6=1.0;a.rr=0.5;e=new VH;e.bh=J(Cd,36);e.cd=J(Cd,4);e.bL=0;e.nD=a;a.K=e;a.AL=0;a.k5=0;a.x_=0;Kv(a,c.fk+0.5,c.p0,c.fj+0.5,0.0,
0.0);a.c4=1.6200000047683716;a.bT=20;a.E2=B(513);a.D5=180.0;a.nJ=20;a.yu=B(376);a.k6=b;if(c.bg!==null)Cb(c.bg);c.bg=a;if(d!==null&&d.ok!==null&&Bi(d.ok)>0){b=new U;W(b);a.tJ=V(I(I(I(b,B(514)),d.ok),B(515)));}a.CN=d.ok;}
function AAR(a){a.iN=a.hW.kD;a.gC=a.hW.kt;a.hG=a.hW.um;}
function ALn(a){var $p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();a=$T.l();}_:while(true){switch($p){case 0:AOC(a.hW,a);$p=1;case 1:Y7(a);if(C()){break _;}return;default:E$();}}C4().s(a,$p);}
function ARJ(a){AO1(a.hW);}
function Et(a,b,c){APu(a.hW,b,c);}
function ABR(a,b){Ft(b,B(516),a.bT<<16>>16);Ft(b,B(517),a.dE<<16>>16);Ft(b,B(518),a.c2<<16>>16);Ft(b,B(519),a.dz<<16>>16);Gz(b,B(520),a.k5);HH(b,B(325),AL7(a.K,L9()));}
function AOY(a,b){var c;a.bT=FL(b,B(516));if(!Y2(b,B(516)))a.bT=10;a.dE=FL(b,B(517));a.c2=FL(b,B(518));a.dz=FL(b,B(519));a.k5=FW(b,B(520));c=Kj(b,B(325));ARp(a.K,c);}
function Y3(a,b){var c,d,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.k6;d=BbV(a.K,b);$p=1;case 1:ADW(c,d);if(C()){break _;}return;default:E$();}}C4().s(a,b,c,d,$p);}
function AI_(a,b){var c,d,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.k6;d=new SR;DR(d);d.Ae=B(521);d.f2=0;d.fR=b;$p=1;case 1:ADW(c,d);if(C()){break _;}return;default:E$();}}C4().s(a,b,c,d,$p);}
function ANr(a){var b,c,d,e,f,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.k6;c=new Xn;d=a.K;Ie(c);c.mq=A0B(c,3,3);c.up=A5e();S(c.c7,A3p(c,c.mq,c.up,0,124,35));e=0;while(e<3){f=0;while(f<3){S(c.c7,D7(c,c.mq,f+(e*3|0)|0,30+(f*18|0)|0,17+(e*18|0)|0));f=f+1|0;}e=e+1|0;}e=0;while(e<3){f=0;while(f<9){S(c.c7,D7(c,d,f+((e+1|0)*9|0)|0,8+(f*18|0)|0,84+(e*18|0)|0));f=f+1|0;}e=e+1|0;}e=0;while(e<9){S(c.c7,D7(c,d,e,8+(e*18|0)|0,142));e
=e+1|0;}$p=1;case 1:ADW(b,c);if(C()){break _;}return;default:E$();}}C4().s(a,b,c,d,e,f,$p);}
function AO5(a,b){var c,d,e,f,g,h,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.k6;d=new Wo;e=a.K;Ie(d);d.sK=b;S(d.c7,D7(d,b,0,56,17));S(d.c7,D7(d,b,1,56,53));S(d.c7,D7(d,b,2,116,35));f=0;while(f<3){g=0;while(g<9){S(d.c7,D7(d,e,g+((f+1|0)*9|0)|0,8+(g*18|0)|0,84+(f*18|0)|0));g=g+1|0;}f=f+1|0;}h=0;while(h<9){S(d.c7,D7(d,e,h,8+(h*18|0)|0,142));h=h+1|0;}$p=1;case 1:ADW(c,d);if(C()){break _;}return;default:E$();}}C4().s(a,
b,c,d,e,f,g,h,$p);}
function Ks(a){return D9(a.K);}
function JD(a){AFE(a.K,a.K.bL,null);}
function ADx(a,b){var c,d,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=ARV(a.K,b);if(c<=0)return;$p=1;case 1:b.fr(a,c);if(C()){break _;}d=Ks(a);if(d!==null&&b instanceof EO){AE1(d,b);if(d.p<=0)JD(a);}return;default:E$();}}C4().s(a,b,c,d,$p);}
function R0(a,b){var c,d;c=a.k6.c6;d=new U8;FD(d,a.k6.A,b.d,b.j,b.e,b.g,b.i,b.h);d.p$=0;d.rd=0;d.mz=b;d.hP=a;d.rd=3;d.AV=(-0.5);El(c,d);}
function AC2(a){return TH(a.K);}
function Vu(a,b){var c;if(!b.uI(a)){c=Ks(a);if(c!==null&&b instanceof EO){AEC(c,b);if(c.p<=0)JD(a);}}}
function Qr(){D.call(this);}
var BkK=null;function BkL(){var a=new Qr();ANN(a);return a;}
function ANN(a){return;}
function Bq(b){return BkK.data[(b*651.8986206054688|0)&4095];}
function BC(b){return BkK.data[((b+1.5707963705062866)*651.8986206054688|0)&4095];}
function D_(b){return Ed(b);}
function Ce(b){return Ed(b);}
function EW(b){var c;c=b|0;if(b<c)c=c-1|0;return c;}
function K(b){var c;c=b|0;if(b<c)c=c-1|0;return c;}
function GK(b,c){return b>=0?b/c|0: -(( -b-1|0)/c|0)-1|0;}
function AL6(){var b,c,d,e;BkK=$rt_createFloatArray(4096);b=0;while(b<4096){BkK.data[b]=Gs((b+0.5)/4096.0*6.2831854820251465);b=b+1|0;}c=0;while(c<360){d=BkK.data;e=c;d[(e*11.377778053283691|0)&4095]=Gs(e*0.01745329238474369);c=c+90|0;}}
function AJH(){D.call(this);}
function BkM(){var a=new AJH();AWd(a);return a;}
function AWd(a){return;}
function AMI(b){Be();Bea=b;if(b){BdR=0.0;BdS=0.0;setTimeout(Cu(new QD,"onTimer"),200);}else{Bd$=B_();if(Bd_)clearTimeout(Bd_);Bd_=0;Bdw.exitPointerLock();}}
function FA(){var b,c;a:{Be();Bd6=null;if(!P0(BdN)){b=Tp(BdN,0);Bd6=b;if(b!==null){c=1;break a;}}c=0;}return c;}
function Cx(){Be();return Bd6===null?0:DC($rt_str(Bd6.type),B(522));}
function ARY(){Be();return Bd6===null?(-1):Bd6.clientX;}
function XU(){Be();return Bd6===null?(-1):Bdy.clientHeight-Bd6.clientY|0;}
function CW(){var b;Be();if(Bd6===null)b=(-1);else{b=Bd6.button;if(b==1)b=2;else if(b==2)b=1;}return b;}
function B$(b){Be();return Bd8.data[b];}
function G1(){Be();return !DC(B(523),$rt_str(Bd6.type))?0:Bd6.deltaY===0.0?0:Bd6.deltaY<=0.0?1:(-1);}
function Vt(){var a=this;D.call(a);a.Ez=null;a.bI=0;}
function E7(a,b){var c=new Vt();A1T(c,a,b);return c;}
function A1T(a,b,c){a.Ez=b;a.bI=c;}
function FE(){}
function VH(){var a=this;D.call(a);a.bh=null;a.cd=null;a.bL=0;a.nD=null;}
function D9(a){return a.bh.data[a.bL];}
function S5(a,b){var c;c=0;while(true){if(c>=a.bh.data.length)return (-1);if(a.bh.data[c]!==null&&a.bh.data[c].bA==b)break;c=c+1|0;}return c;}
function RK(a){var b;b=0;while(true){if(b>=a.bh.data.length)return (-1);if(a.bh.data[b]===null)break;b=b+1|0;}return b;}
function ARk(a,b,c){var d;d=S5(a,b);if(d>=0&&d<9)a.bL=d;}
function F7(a,b){if(b>0)b=1;if(b<0)b=(-1);a.bL=a.bL-b|0;while(a.bL<0){a.bL=a.bL+9|0;}while(a.bL>=9){a.bL=a.bL-9|0;}}
function AEk(a){var b,c;b=0;while(b<a.bh.data.length){if(a.bh.data[b]!==null&&a.bh.data[b].mK>0){c=a.bh.data[b];c.mK=c.mK-1|0;}b=b+1|0;}}
function AGQ(a,b){var c,d;c=S5(a,b);if(c<0)return 0;d=a.bh.data[c];b=d.p-1|0;d.p=b;if(b<=0)a.bh.data[c]=null;return 1;}
function Ve(a,b){var c,d,e,f;if(!b.en){c=b.bA;d=b.p;e=0;a:{while(true){if(e>=a.bh.data.length){e=(-1);break a;}if(a.bh.data[e]!==null&&a.bh.data[e].bA==c&&a.bh.data[e].p<EB(a.bh.data[e])&&a.bh.data[e].p<64)break;e=e+1|0;}}if(e<0)e=RK(a);if(e>=0){if(a.bh.data[e]===null)a.bh.data[e]=KB(c,0);c=d<=(EB(a.bh.data[e])-a.bh.data[e].p|0)?d:EB(a.bh.data[e])-a.bh.data[e].p|0;if(c>(64-a.bh.data[e].p|0))c=64-a.bh.data[e].p|0;if(c){d=d-c|0;f=a.bh.data[e];f.p=f.p+c|0;a.bh.data[e].mK=5;}}b.p=d;if(!b.p)return 1;}c=RK(a);if(c
<0)return 0;a.bh.data[c]=b;a.bh.data[c].mK=5;return 1;}
function Em(a,b,c){var d,e,f;d=a.bh;if(b>=a.bh.data.length){d=a.cd;b=b-a.bh.data.length|0;}d=d.data;if(d[b]===null)return null;if(d[b].p<=c){e=d[b];d[b]=null;return e;}f=EE(d[b],c);if(!d[b].p)d[b]=null;return f;}
function AFE(a,b,c){var d;d=a.bh;if(b>=a.bh.data.length){d=a.cd;b=b-a.bh.data.length|0;}d.data[b]=c;}
function ADy(a,b){var c;c=1.0;if(a.bh.data[a.bL]!==null)c=c*AFj(a.bh.data[a.bL],b);return c;}
function AL7(a,b){var c,d,e;c=0;while(c<a.bh.data.length){if(a.bh.data[c]!==null){d=G$();JN(d,B(524),c<<24>>24);QR(a.bh.data[c],d);Jt(b,d);}c=c+1|0;}e=0;while(e<a.cd.data.length){if(a.cd.data[e]!==null){d=G$();JN(d,B(524),(e+100|0)<<24>>24);QR(a.cd.data[e],d);Jt(b,d);}e=e+1|0;}return b;}
function ARp(a,b){var c,d,e;a.bh=J(Cd,36);a.cd=J(Cd,4);c=0;while(c<AOv(b)){d=Fc(b,c);e=LB(d,B(524))&255;if(e>=0&&e<a.bh.data.length)a.bh.data[e]=A$4(d);if(e>=100&&e<(a.cd.data.length+100|0))a.cd.data[e-100|0]=A$4(d);c=c+1|0;}}
function Yt(a){return a.bh.data.length+4|0;}
function RS(a,b){var c;c=a.bh;if(b>=a.bh.data.length){c=a.cd;b=b-a.bh.data.length|0;}return c.data[b];}
function ATu(a){return B(325);}
function AZq(a){return 64;}
function ARV(a,b){var c;c=RS(a,a.bL);return c===null?1:AAn(c,b);}
function ADX(a,b){var c;if(b.b_!==Bg4&&b.b_!==Bhh)return 1;c=RS(a,a.bL);return c===null?0:AN_(c,b);}
function AIj(a,b){return a.cd.data[b];}
function TH(a){var b,c,d,e,f;b=0;c=0;d=0;e=0;while(e<a.cd.data.length){if(a.cd.data[e]!==null&&DL(a.cd.data[e]) instanceof F5){f=Kn(a.cd.data[e]);c=c+(f-a.cd.data[e].en|0)|0;d=d+f|0;b=b+DL(a.cd.data[e]).zd|0;}e=e+1|0;}if(!d)return 0;return (Bj(b-1|0,c)/d|0)+1|0;}
function AD2(a,b){var c;c=0;while(c<a.cd.data.length){if(a.cd.data[c]!==null&&DL(a.cd.data[c]) instanceof F5){FM(a.cd.data[c],b);if(!a.cd.data[c].p)a.cd.data[c]=null;}c=c+1|0;}}
function AI0(a){var b,c,d,e,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=0;while(true){if(b>=a.bh.data.length){b=0;while(b<a.cd.data.length){if(a.cd.data[b]!==null){c=a.nD;d=a.cd.data[b];e=1;$p=2;continue _;}b=b+1|0;}return;}if(a.bh.data[b]!==null)break;b=b+1|0;}c=a.nD;d=a.bh.data[b];e=1;$p=1;case 1:AQw(c,d,e);if(C()){break _;}a.bh.data[b]=null;while(true){b=b+1|0;if(b>=a.bh.data.length){b=0;while(b<a.cd.data.length){if(a.cd.data[b]
!==null){c=a.nD;d=a.cd.data[b];e=1;$p=2;continue _;}b=b+1|0;}return;}if(a.bh.data[b]===null)continue;else break;}c=a.nD;d=a.bh.data[b];e=1;continue _;case 2:AQw(c,d,e);if(C()){break _;}a.cd.data[b]=null;while(true){b=b+1|0;if(b>=a.cd.data.length)break;if(a.cd.data[b]===null)continue;else{c=a.nD;d=a.cd.data[b];e=1;continue _;}}return;default:E$();}}C4().s(a,b,c,d,e,$p);}
function AAq(a){return;}
function Dv(){I2.call(this);}
function Ew(){var a=this;CS.call(a);a.br=null;a.fa=0;a.fm=0;a.c7=null;}
var BkN=null;function BkO(){var a=new Ew();Ie(a);return a;}
function Ie(a){DR(a);a.br=null;a.fa=176;a.fm=166;a.c7=Ci();}
function ACj(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:ABi(a);if(C()){break _;}e=(a.bm-a.fa|0)/2|0;f=(a.bC-a.fm|0)/2|0;$p=2;case 2:a.s3(d);if(C()){break _;}B3();Bv(180.0,1.0,0.0,0.0);Hy();BE();B3();Bw(e,f,0.0);BU(1.0,1.0,1.0,1.0);Bb(32826);g=0;if(g>=a.c7.s){if(a.br===null){Bd(32826);DT();Bd(2896);Bd(2929);a.ls();Bb(2896);Bb(2929);BE();return;}Bw(0.0,
0.0,32.0);h=BkN;i=a.bZ;j=a.J.bo;k=a.br;b=(b-e|0)-8|0;c=(c-f|0)-8|0;$p=3;continue _;}h=Z(a.c7,g);i=h.e3;l=h.lP;m=h.jP;n=h.jR;i=i.gx(l);if(i===null){l=h.rW();if(l>=0){Bd(2896);i=a.J.bo;j=a.J.bo;k=B(230);$p=5;continue _;}}j=BkN;k=a.bZ;o=a.J.bo;$p=4;continue _;case 3:AGh(h,i,j,k,b,c);if(C()){break _;}Lm(BkN,a.bZ,a.J.bo,a.br,b,c);Bd(32826);DT();Bd(2896);Bd(2929);a.ls();Bb(2896);Bb(2929);BE();return;case 4:AGh(j,k,o,i,m,n);if(C()){break _;}Lm(BkN,a.bZ,a.J.bo,i,m,n);if(M_(h,b,c)){Bd(2896);Bd(2929);l=h.jP;p=h.jR;KN(a,
l,p,l+16|0,p+16|0,(-2130706433),(-2130706433));Bb(2896);Bb(2929);}g=g+1|0;if(g>=a.c7.s){if(a.br===null){Bd(32826);DT();Bd(2896);Bd(2929);a.ls();Bb(2896);Bb(2929);BE();return;}Bw(0.0,0.0,32.0);h=BkN;i=a.bZ;j=a.J.bo;k=a.br;b=(b-e|0)-8|0;c=(c-f|0)-8|0;$p=3;continue _;}h=Z(a.c7,g);i=h.e3;l=h.lP;m=h.jP;n=h.jR;i=i.gx(l);if(i===null){l=h.rW();if(l>=0){Bd(2896);i=a.J.bo;j=a.J.bo;k=B(230);$p=5;continue _;}}j=BkN;k=a.bZ;o=a.J.bo;continue _;case 5:$z=AHv(j,k);if(C()){break _;}p=$z;Eb(i,p);CH(a,m,n,(l%16|0)*16|0,(l/16|
0)*16|0,16,16);Bb(2896);if(M_(h,b,c)){Bd(2896);Bd(2929);l=h.jP;p=h.jR;KN(a,l,p,l+16|0,p+16|0,(-2130706433),(-2130706433));Bb(2896);Bb(2929);}g=g+1|0;if(g>=a.c7.s){if(a.br===null){Bd(32826);DT();Bd(2896);Bd(2929);a.ls();Bb(2896);Bb(2929);BE();return;}Bw(0.0,0.0,32.0);h=BkN;i=a.bZ;j=a.J.bo;k=a.br;b=(b-e|0)-8|0;c=(c-f|0)-8|0;$p=3;continue _;}h=Z(a.c7,g);i=h.e3;l=h.lP;m=h.jP;n=h.jR;i=i.gx(l);if(i===null){l=h.rW();if(l>=0){Bd(2896);i=a.J.bo;j=a.J.bo;k=B(230);continue _;}}j=BkN;k=a.bZ;o=a.J.bo;$p=4;continue _;default:
E$();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,$p);}
function AQz(a,b,c){var d,e;d=0;while(true){if(d>=a.c7.s)return null;e=Z(a.c7,d);if(M_(e,b,c))break;d=d+1|0;}return e;}
function AN6(a,b,c,d){var e,f,g,h,i,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!(d&&d!=1)){e=AQz(a,b,c);if(e!==null){$p=1;continue _;}if(a.br!==null){f=(a.bm-a.fa|0)/2|0;g=(a.bC-a.fm|0)/2|0;if(!(b>=f&&c>=g&&b<(f+a.fa|0)&&c<(g+a.fa|0))){h=a.J.f;if(!d){e=a.br;$p=2;continue _;}if(d==1){e=EE(a.br,1);$p=3;continue _;}}}}return;case 1:a:{AKA(e);if(C()){break _;}i=ARx(e);if(!(i===null&&a.br===null)){if
(i!==null&&a.br===null){g=!d?i.p:(i.p+1|0)/2|0;a.br=e.e3.j7(e.lP,g);if(i.p){$p=4;continue _;}h=null;$p=5;continue _;}if(i===null&&a.br!==null&&e.s6(a.br)){g=d?1:a.br.p;if(g>e.e3.f3())g=e.e3.f3();h=EE(a.br,g);$p=7;continue _;}if(i!==null&&a.br!==null){if(!e.s6(a.br)){if(i.bA!=a.br.bA)break a;if(EB(a.br)<=1)break a;g=i.p;if(g<=0)break a;if((g+a.br.p|0)>EB(a.br))break a;h=a.br;h.p=h.p+g|0;EE(i,g);if(i.p){$p=8;continue _;}h=null;$p=9;continue _;}if(i.bA==a.br.bA){if(i.bA==a.br.bA){if(!d){g=a.br.p;if(g>(e.e3.f3()
-i.p|0))g=e.e3.f3()-i.p|0;if(g>(EB(a.br)-i.p|0))g=EB(a.br)-i.p|0;EE(a.br,g);if(!a.br.p)a.br=null;i.p=i.p+g|0;}else if(d==1){g=1;if(g>(e.e3.f3()-i.p|0))g=e.e3.f3()-i.p|0;if(g>(EB(a.br)-i.p|0))g=EB(a.br)-i.p|0;EE(a.br,g);if(!a.br.p)a.br=null;i.p=i.p+g|0;}}}else if(a.br.p<=e.e3.f3()){h=a.br;$p=6;continue _;}}}}return;case 2:ALT(h,e);if(C()){break _;}a.br=null;if(d!=1)return;e=EE(a.br,1);$p=3;case 3:ALT(h,e);if(C()){break _;}if(!a.br.p)a.br=null;return;case 4:e.Jm();if(C()){break _;}return;case 5:ALx(e,h);if(C())
{break _;}$p=4;continue _;case 6:ALx(e,h);if(C()){break _;}a.br=i;return;case 7:ALx(e,h);if(C()){break _;}if(!a.br.p)a.br=null;return;case 8:e.Jm();if(C()){break _;}return;case 9:ALx(e,h);if(C()){break _;}$p=8;continue _;default:E$();}}C4().s(a,b,c,d,e,f,g,h,i,$p);}
function A9E(a,b,c,d){return;}
function AAy(a,b,c){var d,e,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(c!=1&&c!=a.J.o.fs.bI)return;d=a.J;e=null;$p=1;case 1:ADW(d,e);if(C()){break _;}return;default:E$();}}C4().s(a,b,c,d,e,$p);}
function AA1(a){var b,c,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.br===null)return;b=a.J.f;c=a.br;$p=1;case 1:ALT(b,c);if(C()){break _;}return;default:E$();}}C4().s(a,b,c,$p);}
function A$X(a){return 0;}
function AKa(){BkN=X4();}
function APP(){var a=this;Ew.call(a);a.j3=null;a.xD=null;a.AE=0.0;a.Er=0.0;}
function E6(a){var b=new APP();AZN(b,a);return b;}
function AZN(a,b){var c,d,e,f,g;Ie(a);a.j3=A0B(a,2,2);a.xD=A5e();a.pS=1;S(a.c7,A3p(a,a.j3,a.xD,0,144,36));c=0;while(c<2){d=0;while(d<2){S(a.c7,D7(a,a.j3,d+(c*2|0)|0,88+(d*18|0)|0,26+(c*18|0)|0));d=d+1|0;}c=c+1|0;}d=0;while(d<4){e=a.c7;f=new QM;UG(f,a,b,(Yt(b)-1|0)-d|0,8,8+(d*18|0)|0);f.HW=a;f.wl=d;S(e,f);d=d+1|0;}d=0;while(d<3){g=0;while(g<9){S(a.c7,D7(a,b,g+((d+1|0)*9|0)|0,8+(g*18|0)|0,84+(d*18|0)|0));g=g+1|0;}d=d+1|0;}c=0;while(c<9){S(a.c7,D7(a,b,c,8+(c*18|0)|0,142));c=c+1|0;}}
function ALK(a){var b,c,d,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AA1(a);if(C()){break _;}b=0;while(b<a.j3.lY){c=Gi(a.j3,b);if(c!==null){d=a.J.f;$p=2;continue _;}b=b+1|0;}return;case 2:ALT(d,c);if(C()){break _;}while(true){b=b+1|0;if(b>=a.j3.lY)break;c=Gi(a.j3,b);if(c===null)continue;else{d=a.J.f;continue _;}}return;default:E$();}}C4().s(a,b,c,d,$p);}
function ATU(a,b){var c,d,e,f,g,h;c=$rt_createIntArray(9);d=c.data;e=0;while(e<3){f=0;while(f<3){g=(-1);if(e<2&&f<2){h=Gi(a.j3,e+(f*2|0)|0);if(h!==null)g=h.bA;}d[e+(f*3|0)|0]=g;f=f+1|0;}e=e+1|0;}Pn(a.xD,0,RO(Wt(),c));}
function AZ5(a){ED(a.bZ,B(525),86,16,4210752);}
function AD0(a,b,c,d){var $p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:ACj(a,b,c,d);if(C()){break _;}a.AE=b;a.Er=c;return;default:E$();}}C4().s(a,b,c,d,$p);}
function X_(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.J.bo;d=B(526);$p=1;case 1:$z=AHv(c,d);if(C()){break _;}e=$z;BU(1.0,1.0,1.0,1.0);Eb(a.J.bo,e);f=(a.bm-a.fa|0)/2|0;g=(a.bC-a.fm|0)/2|0;CH(a,f,g,0,0,a.fa,a.fm);Bb(32826);Bb(2903);B3();b=f+51|0;e=g+75|0;Bw(b,e,50.0);CC((-30.0),30.0,30.0);Bv(180.0,
0.0,0.0,1.0);h=a.J.f.dG;i=a.J.f.u;j=a.J.f.I;k=b-a.AE;l=(e-50|0)-a.Er;Bv(135.0,0.0,1.0,0.0);Hy();Bv((-135.0),0.0,1.0,0.0);m=l/40.0;Bv( -It(m)*20.0,1.0,0.0,0.0);d=a.J.f;n=k/40.0;d.dG=It(n)*20.0;a.J.f.u=It(n)*40.0;a.J.f.I= -It(m)*20.0;Bw(0.0,a.J.f.c4,0.0);d=Bgh;c=a.J.f;m=0.0;n=0.0;o=0.0;b=0.0;p=1.0;$p=2;case 2:AQF(d,c,m,n,o,b,p);if(C()){break _;}a.J.f.dG=h;a.J.f.u=i;a.J.f.I=j;BE();DT();Bd(32826);return;default:E$();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,$p);}
function I9(){var a=this;D.call(a);a.qX=0;a.sA=0;a.vC=0;a.vI=0;a.xC=0;a.DL=0;a.cI=null;a.wi=null;a.wj=null;a.wk=null;a.t8=null;a.uh=null;a.vf=null;a.w_=null;a.vD=null;a.uQ=null;a.tS=null;a.uu=null;a.uD=null;a.ws=null;a.t5=null;a.yf=null;a.q_=0;a.pX=0;a.oC=0;a.Gt=0;a.G9=0;a.t_=null;a.uN=null;a.xf=0;a.w0=null;a.vA=null;a.v_=null;a.yn=null;a.yt=null;a.x5=null;a.mp=null;a.mH=null;a.vx=0;a.r3=0.0;a.r2=0.0;a.r1=0.0;a.r0=0.0;a.sF=0.0;a.tr=0.0;a.rL=0.0;a.sr=0.0;a.qV=0.0;a.qW=0.0;a.th=0.0;a.tg=0.0;a.tf=0.0;a.te=0.0;a.sY
=0.0;a.sW=0.0;a.sX=0.0;}
var BkP=null;var BkQ=null;function A__(a,b,c,d,e,f,g){var h=new I9();AIf(h,a,b,c,d,e,f,g);return h;}
function Pd(b){var c,d,e,f,g,h,i;c=BkP.data[b];if(c===null){d=0;e=0;f=0;g=0;h=0;i=0;if((b&1)==1)d=1;if((b&4)==4)e=1;if((b&8)==8)f=1;if((b&16)==16)g=1;if((b&32)==32)h=1;if((b&64)==64)i=1;c=A__(b,d,e,f,g,h,i);BkP.data[b]=c;}return c;}
function AIf(a,b,c,d,e,f,g,h){var i,j,k;WL(a);a.wi=null;a.wj=null;a.wk=null;a.t8=null;a.uh=null;a.vf=null;a.w_=null;a.vD=null;a.uQ=null;a.tS=null;a.uu=null;a.uD=null;a.ws=null;a.t5=null;a.yf=null;a.xf=0;a.w0=$rt_createFloatArray(16);a.vA=$rt_createFloatArray(16);a.v_=$rt_createFloatArray(16);a.yn=Kw(M8());a.yt=Kw(M8());a.x5=Kw(M8());a.mp=A2X();a.mH=A2X();a.vx=0;a.r3=0.0;a.r2=0.0;a.r1=0.0;a.r0=0.0;a.sF=0.0;a.tr=0.0;a.rL=0.0;a.sr=0.0;a.qV=0.0;a.qW=0.0;a.th=0.0;a.tg=0.0;a.tf=0.0;a.te=0.0;a.sY=0.0;a.sW=0.0;a.sX
=0.0;a.qX=c;a.sA=d;a.vC=e;a.vI=f;a.xC=g;a.DL=h;if(BkQ===null)BkQ=ACb(B(527));i=B(3);if(a.qX)i=BL(I(I(BX(),i),B(528)));if(a.sA)i=BL(I(I(BX(),i),B(529)));if(a.vC)i=BL(I(I(BX(),i),B(530)));if(a.vI)i=BL(I(I(BX(),i),B(531)));if(a.xC)i=BL(I(I(BX(),i),B(532)));if(a.DL)i=BL(I(I(BX(),i),B(533)));i=BL(I(I(BX(),i),BkQ));j=OH(35633);O4(j,BL(I(I(I(BX(),PK()),B(534)),i)));WH(j);if(!Vk(j)){Cg(C_(),KL(BL(I(I(BX(),B(535)),Ue(j))),B(158),B(536)));M(Z3(B(537)));}k=OH(35632);O4(k,BL(I(I(I(BX(),PK()),B(538)),i)));WH(k);if(!Vk(k))
{Cg(C_(),KL(BL(I(I(BX(),B(535)),Ue(k))),B(158),B(539)));M(Z3(B(537)));}a.cI=AH3();Se(a.cI,j);Se(a.cI,k);b=1;a.q_=0;LV(a.cI,a.q_,B(540));if(!a.sA)a.pX=(-1);else{a.pX=b;LV(a.cI,a.pX,B(541));b=2;}if(!a.qX)a.oC=(-1);else{c=b+1|0;a.oC=b;LV(a.cI,a.oC,B(542));b=c;}a.Gt=(-1);a.G9=b;AAH(a.cI);UP(a.cI,j);UP(a.cI,k);Tl(j);Tl(k);if(!AGo(a.cI)){Cg(C_(),KL(BL(I(I(BX(),B(535)),AHw(a.cI))),B(158),B(543)));M(Z3(B(537)));}V3(a.cI);a.wi=Dq(a.cI,B(544));a.wj=Dq(a.cI,B(545));a.wk=Dq(a.cI,B(546));a.tS=Dq(a.cI,B(547));if(a.vC){a.uu
=Dq(a.cI,B(548));a.t5=Dq(a.cI,B(549));a.yf=Dq(a.cI,B(550));}if(a.vI){a.t8=Dq(a.cI,B(551));a.uh=Dq(a.cI,B(552));a.vf=Dq(a.cI,B(553));a.w_=Dq(a.cI,B(554));a.vD=Dq(a.cI,B(555));a.uQ=Dq(a.cI,B(556));}if(a.xC)a.uD=Dq(a.cI,B(557));Rc(Dq(a.cI,B(558)),0);a.ws=Dq(a.cI,B(559));a.t_=Pc();a.uN=L7();RU(a.t_);Hf(34962,a.uN);RD(a);}
function RD(a){N8(a.q_);N$(a.q_,3,5126,0,28,0);if(a.sA){N8(a.pX);N$(a.pX,2,5126,0,28,12);}if(a.qX){N8(a.oC);N$(a.oC,4,5121,1,28,20);}}
function AQ0(a){V3(a.cI);}
function AUd(a){return;}
function AMt(a,b){if(!Ls(b,a.yn)){NW(GP(a.yn,b),a.w0);Mg(a.wi,a.w0);}}
function AM2(a,b){if(!Ls(b,a.yt)){NW(GP(a.yt,b),a.vA);Mg(a.wj,a.vA);}}
function ZY(a,b){if(!Ls(b,a.x5)){NW(GP(a.x5,b),a.v_);Mg(a.wk,a.v_);}}
function ANc(a,b,c){if(!(Tc(b,a.mp)&&Tc(c,a.mH))){VK(a.mp,b);VK(a.mH,c);Ln(a.t5,a.mp.ld,a.mp.le,a.mp.lc);Ln(a.yf,a.mH.ld,a.mH.le,a.mH.lc);}}
function ALp(a,b){if(a.vx!=b){a.vx=b;Rc(a.uh,b%2|0);Ih(a.uQ,b/2|0);}}
function AQb(a,b,c,d,e){if(!(a.r3===b&&a.r2===c&&a.r1===d&&a.r0===e)){a.r3=b;a.r2=c;a.r1=d;a.r0=e;Uo(a.t8,a.r3,a.r2,a.r1,a.r0);}}
function APM(a,b,c){if(!(a.sF===b&&a.tr===c)){a.sF=b;a.tr=c;Ih(a.vf,a.sF);Ih(a.w_,a.tr);}}
function AKL(a,b){if(a.rL!==b){a.rL=b;Ih(a.vD,a.rL);}}
function AIV(a,b){if(a.sr!==b){a.sr=b;Ih(a.uD,a.sr);}}
function AOL(a,b,c){var d,e;if(!(a.qV===b&&a.qW===c)){a.qV=b;a.qW=c;d=a.ws;b=a.qV;c=a.qW;Be();if(d!==null){e=BdB;d=d.ky;e.uniform2f(d,b,c);}}}
function ALN(a,b,c,d,e){if(!(a.th===b&&a.tg===c&&a.tf===d&&a.te===e)){a.th=b;a.tg=c;a.tf=d;a.te=e;Uo(a.tS,a.th,a.tg,a.tf,a.te);}}
function AB9(a,b,c,d){if(!(a.sY===b&&a.sW===c&&a.sX===d)){a.sY=b;a.sW=c;a.sX=d;Ln(a.uu,a.sY,a.sW,a.sX);}}
function AOS(){BkP=J(I9,128);BkQ=null;}
function Rv(){var a=this;D.call(a);a.Bx=0;a.rj=null;a.o0=null;a.lM=0;a.jM=0;}
function Tm(){var a=this;D.call(a);a.tZ=null;a.xt=0;a.Dr=0;a.Fg=0;}
function AHr(){var a=this;D.call(a);a.k9=0;a.h9=0;a.h$=0;a.h_=0;a.hJ=0;a.gy=null;a.nC=null;}
function A0A(a,b,c,d,e){var f=new AHr();A54(f,a,b,c,d,e);return f;}
function A1a(a){var b=new AHr();A9w(b,a);return b;}
function A54(a,b,c,d,e,f){a.k9=0;a.h9=b;a.h$=c;a.h_=d;a.hJ=e;a.gy=BY(f.x,f.z,f.w);}
function A9w(a,b){a.k9=1;a.nC=b;a.gy=BY(b.d,b.j,b.e);}
function Cd(){var a=this;D.call(a);a.p=0;a.mK=0;a.bA=0;a.en=0;}
function AL3(a){var b=new Cd();AH1(b,a);return b;}
function G0(a,b){var c=new Cd();Va(c,a,b);return c;}
function Qn(a){var b=new Cd();DD(b,a);return b;}
function EJ(a,b){var c=new Cd();Gq(c,a,b);return c;}
function KB(a,b){var c=new Cd();MN(c,a,b);return c;}
function Or(a,b,c){var d=new Cd();A0E(d,a,b,c);return d;}
function A$4(a){var b=new Cd();A1t(b,a);return b;}
function AH1(a,b){Va(a,b,1);}
function Va(a,b,c){MN(a,b.b,c);}
function DD(a,b){Gq(a,b,1);}
function Gq(a,b,c){MN(a,b.cW,c);}
function MN(a,b,c){a.p=0;a.bA=b;a.p=c;}
function A0E(a,b,c,d){a.p=0;a.bA=b;a.p=c;a.en=d;}
function A1t(a,b){a.p=0;AD_(a,b);}
function EE(a,b){a.p=a.p-b|0;return Or(a.bA,b,a.en);}
function DL(a){BB();return Bg9.data[a.bA];}
function DK(a){return DL(a).tc;}
function AJh(a,b,c,d,e,f,g){var h,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:h=DL(a);$p=1;case 1:$z=h.iO(a,b,c,d,e,f,g);if(C()){break _;}d=$z;return d;default:E$();}}C4().s(a,b,c,d,e,f,g,h,$p);}
function AFj(a,b){return DL(a).x6(a,b);}
function ABh(a,b,c){var d,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=DL(a);$p=1;case 1:$z=d.n9(a,b,c);if(C()){break _;}b=$z;return b;default:E$();}}C4().s(a,b,c,d,$p);}
function QR(a,b){Ft(b,B(560),a.bA<<16>>16);JN(b,B(561),a.p<<24>>24);Ft(b,B(562),a.en<<16>>16);return b;}
function AD_(a,b){a.bA=FL(b,B(560));a.p=LB(b,B(561));a.en=FL(b,B(562));}
function EB(a){return DL(a).eZ;}
function Kn(a){BB();return Bg9.data[a.bA].fg;}
function FM(a,b){a.en=a.en+b|0;if(a.en>Kn(a)){a.p=a.p-1|0;if(a.p<0)a.p=0;a.en=0;}}
function AE1(a,b){BB();Bg9.data[a.bA].sg(a,b);}
function QK(a,b,c,d,e){BB();Bg9.data[a.bA].x0(a,b,c,d,e);}
function AAn(a,b){BB();return Bg9.data[a.bA].n0(b);}
function AN_(a,b){BB();return Bg9.data[a.bA].o8(b);}
function A09(a,b){return;}
function AEC(a,b){BB();Bg9.data[a.bA].yJ(a,b);}
function ZM(){var a=this;D.call(a);a.h3=null;a.lY=0;a.sl=null;}
function A0B(a,b,c){var d=new ZM();AWv(d,a,b,c);return d;}
function AWv(a,b,c,d){a.lY=Bj(c,d);a.h3=J(Cd,a.lY);a.sl=b;}
function A3n(a){return a.lY;}
function Gi(a,b){return a.h3.data[b];}
function AEZ(a,b,c){var d,e;if(a.h3.data[b]===null)return null;if(a.h3.data[b].p<=c){d=a.h3.data[b];a.h3.data[b]=null;a.sl.to(a);return d;}e=EE(a.h3.data[b],c);if(!a.h3.data[b].p)a.h3.data[b]=null;a.sl.to(a);return e;}
function A3A(a,b,c){a.h3.data[b]=c;a.sl.to(a);}
function A8V(a){return 64;}
function ADR(a){return;}
function AAG(){D.call(this);this.m8=null;}
function A5e(){var a=new AAG();ASU(a);return a;}
function ASU(a){a.m8=J(Cd,1);}
function A42(a,b){return a.m8.data[b];}
function AWD(a,b,c){var d;if(a.m8.data[b]===null)return null;d=a.m8.data[b];a.m8.data[b]=null;return d;}
function Pn(a,b,c){a.m8.data[b]=c;}
function AYU(a){return 64;}
function ANj(a){return;}
function HM(){var a=this;D.call(a);a.lP=0;a.jP=0;a.jR=0;a.e3=null;a.p3=null;}
function D7(a,b,c,d,e){var f=new HM();UG(f,a,b,c,d,e);return f;}
function UG(a,b,c,d,e,f){a.p3=b;a.e3=c;a.lP=d;a.jP=e;a.jR=f;}
function M_(a,b,c){var d,e;d=(a.p3.bm-a.p3.fa|0)/2|0;e=(a.p3.bC-a.p3.fm|0)/2|0;d=b-d|0;c=c-e|0;return d>=(a.jP-1|0)&&d<((a.jP+16|0)+1|0)&&c>=(a.jR-1|0)&&c<((a.jR+16|0)+1|0)?1:0;}
function AK_(a){var $p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AKA(a);if(C()){break _;}return;default:E$();}}C4().s(a,$p);}
function AXi(a,b){return 1;}
function ARx(a){return a.e3.gx(a.lP);}
function ALx(a,b){var $p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.e3.jE(a.lP,b);$p=1;case 1:AKA(a);if(C()){break _;}return;default:E$();}}C4().s(a,b,$p);}
function A9M(a){return (-1);}
function AKA(a){var b,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.e3;$p=1;case 1:b.kl();if(C()){break _;}return;default:E$();}}C4().s(a,b,$p);}
function ADg(){HM.call(this);this.qO=null;}
function A3p(a,b,c,d,e,f){var g=new ADg();A4P(g,a,b,c,d,e,f);return g;}
function A4P(a,b,c,d,e,f,g){UG(a,b,d,e,f,g);a.qO=c;}
function A0j(a,b){return 0;}
function AN9(a){var b;b=0;while(b<a.qO.lY){if(Gi(a.qO,b)!==null)AEZ(a.qO,b,1);b=b+1|0;}}
function QM(){var a=this;HM.call(a);a.wl=0;a.HW=null;}
function A2R(a,b){return !(DL(b) instanceof F5)?0:DL(b).zY!=a.wl?0:1;}
function AWx(a){return 15+(a.wl*16|0)|0;}
function We(){D.call(this);this.DZ=null;}
function SE(){var a=this;D.call(a);a.A3=null;a.vQ=0;}
function M5(){Fk.call(this);}
function ALS(b){var c,d;c=b.data.length;d=new UY;Ui(d,c,0,0+c|0);d.xW=0;d.Bu=0;d.wR=b;return d;}
function AFg(a){EA(a);return a;}
function A2B(a){Gw(a);return a;}
function Dh(){var a=this;D.call(a);a.iD=null;a.HB=null;a.H4=null;a.mb=0.0;a.B0=0.0;}
function BkR(){var a=new Dh();EG(a);return a;}
function EG(a){a.HB=A$S();a.H4=Kk();a.mb=0.0;a.B0=1.0;}
function AKs(a,b){var c,d,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.iD.tY;$p=1;case 1:$z=AHv(c,b);if(C()){break _;}d=$z;Eb(c,d);return;default:E$();}}C4().s(a,b,c,d,$p);}
function APr(a,b,c){var d,e,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=a.iD.tY;$p=1;case 1:$z=AD5(d,b,c);if(C()){break _;}e=$z;Eb(d,e);return;default:E$();}}C4().s(a,b,c,d,e,$p);}
function AG2(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:Bd(2896);L();g=Bgi.ba;h=(g&15)<<4;i=g&240;f=h;j=f/256.0;k=(f+15.989999771118164)/256.0;f=i;l=f/256.0;m=(f+15.989999771118164)/256.0;B3();Bw(c,d,e);n=b.c1*1.399999976158142;CC(n,n,n);o=B(179);$p
=1;case 1:AKs(a,o);if(C()){break _;}BA();o=BeE;p=1.0;q=0.0;r=b.eO/b.c1;Bv( -a.iD.rq,0.0,1.0,0.0);Bw(0.0,0.0,0.4000000059604645+(r|0)*0.019999999552965164);BU(1.0,1.0,1.0,1.0);Bz(o);e=k;s=m;t=j;u=l;while(r>0.0){c=p-0.5;d=0.0-q;G(o,c,d,0.0,e,s);G(o,(-0.5),d,0.0,t,s);d=1.399999976158142-q;G(o,(-0.5),d,0.0,t,u);G(o,c,d,0.0,e,u);r=r-1.0;q=q-1.0;p=p*0.8999999761581421;Bw(0.0,0.0,(-0.03999999910593033));}Bs(o);BE();Bb(2896);return;default:E$();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,$p);}
function A8m(b,c,d,e){var f;Bd(3553);BA();f=BeE;BU(1.0,1.0,1.0,1.0);Bz(f);E_(f,c,d,e);Cj(0.0,0.0,(-1.0));Bg(f,b.R,b.U,b.S);Bg(f,b.V,b.U,b.S);Bg(f,b.V,b.M,b.S);Bg(f,b.R,b.M,b.S);Cj(0.0,0.0,1.0);Bg(f,b.R,b.M,b.W);Bg(f,b.V,b.M,b.W);Bg(f,b.V,b.U,b.W);Bg(f,b.R,b.U,b.W);Cj(0.0,(-1.0),0.0);Bg(f,b.R,b.M,b.S);Bg(f,b.V,b.M,b.S);Bg(f,b.V,b.M,b.W);Bg(f,b.R,b.M,b.W);Cj(0.0,1.0,0.0);Bg(f,b.R,b.U,b.W);Bg(f,b.V,b.U,b.W);Bg(f,b.V,b.U,b.S);Bg(f,b.R,b.U,b.S);Cj((-1.0),0.0,0.0);Bg(f,b.R,b.M,b.W);Bg(f,b.R,b.U,b.W);Bg(f,b.R,b.U,
b.S);Bg(f,b.R,b.M,b.S);Cj(1.0,0.0,0.0);Bg(f,b.V,b.M,b.S);Bg(f,b.V,b.U,b.S);Bg(f,b.V,b.U,b.W);Bg(f,b.V,b.M,b.W);E_(f,0.0,0.0,0.0);Bs(f);Bb(3553);}
function AUI(a,b){a.iD=b;}
function ANk(a,b,c,d,e,f,g){var $p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:AJU(a.iD,b.d,b.j,b.e);if(b.cV<=0)return;$p=1;case 1:AG2(a,b,c,d,e,g);if(C()){break _;}return;default:E$();}}C4().s(a,b,c,d,e,f,g,$p);}
function AII(){var a=this;Dh.call(a);a.wH=null;a.id=null;}
function X4(){var a=new AII();A5t(a);return a;}
function A5t(a){EG(a);a.wH=Kk();a.id=new DB;a.mb=0.15000000596046448;a.B0=0.75;}
function APH(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:h=b.ng;B3();i=Bq((b.mL+g)/10.0+b.yx)*0.10000000149011612+0.10000000149011612;j=((b.mL+g)/20.0+b.yx)*57.2957763671875;k=1;if(b.ng.p>1)k=2;if(b.ng.p>5)k=3;if(b.ng.p>20)k=4;Bw(c,d+
i,e);Bb(32826);if(h.bA<256){L();if(!BeI.data[h.bA].em()){Bv(j,0.0,1.0,0.0);b=B(179);$p=3;continue _;}}CC(0.5,0.5,0.5);l=DK(h);if(h.bA>=256){b=B(230);$p=1;continue _;}b=B(179);$p=2;continue _;case 1:AKs(a,b);if(C()){break _;}BA();m=BeE;n=(l%16|0)*16|0;o=(n+0|0)/256.0;p=(n+16|0)/256.0;l=(l/16|0)*16|0;q=(l+0|0)/256.0;r=(l+16|0)/256.0;s=0;d=o;e=r;t=p;u=q;while(s<k){B3();if(s>0)Bw((N(a.id)*2.0-1.0)*0.30000001192092896,(N(a.id)*2.0-1.0)*0.30000001192092896,(N(a.id)*2.0-1.0)*0.30000001192092896);Bv(180.0-a.iD.rq,0.0,
1.0,0.0);Bz(m);Cj(0.0,1.0,0.0);G(m,(-0.5),(-0.25),0.0,d,e);G(m,0.5,(-0.25),0.0,t,e);G(m,0.5,0.75,0.0,t,u);G(m,(-0.5),0.75,0.0,d,u);Bs(m);BE();s=s+1|0;}Bd(32826);BE();return;case 2:AKs(a,b);if(C()){break _;}BA();m=BeE;n=(l%16|0)*16|0;o=(n+0|0)/256.0;p=(n+16|0)/256.0;l=(l/16|0)*16|0;q=(l+0|0)/256.0;r=(l+16|0)/256.0;s=0;d=o;e=r;t=p;u=q;while(s<k){B3();if(s>0)Bw((N(a.id)*2.0-1.0)*0.30000001192092896,(N(a.id)*2.0-1.0)*0.30000001192092896,(N(a.id)*2.0-1.0)*0.30000001192092896);Bv(180.0-a.iD.rq,0.0,1.0,0.0);Bz(m);Cj(0.0,
1.0,0.0);G(m,(-0.5),(-0.25),0.0,d,e);G(m,0.5,(-0.25),0.0,t,e);G(m,0.5,0.75,0.0,t,u);G(m,(-0.5),0.75,0.0,d,u);Bs(m);BE();s=s+1|0;}Bd(32826);BE();return;case 3:AKs(a,b);if(C()){break _;}v=0.25;if(!BeI.data[h.bA].gf()&&h.bA!=BeN.b)v=0.5;CC(v,v,v);n=0;while(n<k){B3();if(n>0)Bw((N(a.id)*2.0-1.0)*0.20000000298023224/v,(N(a.id)*2.0-1.0)*0.20000000298023224/v,(N(a.id)*2.0-1.0)*0.20000000298023224/v);GW(a.wH,BeI.data[h.bA]);BE();n=n+1|0;}Bd(32826);BE();return;default:E$();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,
s,t,u,v,$p);}
function AGh(a,b,c,d,e,f){var g,h,i,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(d!==null){if(d.bA<256){L();if(!BeI.data[d.bA].em()){g=d.bA;b=B(179);$p=1;continue _;}}if(DK(d)>=0){Bd(2896);if(d.bA>=256){b=B(230);$p=2;continue _;}b=B(179);$p=3;continue _;}}return;case 1:$z=AHv(c,b);if(C()){break _;}h=$z;Eb(c,h);i=BeI.data[g];B3();Bw(e-2|0,f+3|0,0.0);CC(10.0,10.0,10.0);Bw(1.0,0.5,8.0);Bv(210.0,1.0,
0.0,0.0);Bv(45.0,0.0,1.0,0.0);BU(1.0,1.0,1.0,1.0);GW(a.wH,i);BE();return;case 2:$z=AHv(c,b);if(C()){break _;}g=$z;Eb(c,g);W3(a,e,f,(DK(d)%16|0)*16|0,(DK(d)/16|0)*16|0,16,16);Bb(2896);return;case 3:$z=AHv(c,b);if(C()){break _;}g=$z;Eb(c,g);W3(a,e,f,(DK(d)%16|0)*16|0,(DK(d)/16|0)*16|0,16,16);Bb(2896);return;default:E$();}}C4().s(a,b,c,d,e,f,g,h,i,$p);}
function Lm(a,b,c,d,e,f){var g,h,i,j,k,l;if(d!==null){if(d.p>1){c=new U;W(c);g=V(Bf(I(c,B(3)),d.p));Bd(2896);Bd(2929);Cy(b,g,((e+19|0)-2|0)-Dx(b,g)|0,(f+6|0)+3|0,16777215);Bb(2896);Bb(2929);}if(d.en>0){h=13-((d.en*13|0)/Kn(d)|0)|0;i=255-((d.en*255|0)/Kn(d)|0)|0;Bd(2896);Bd(2929);Bd(3553);BA();j=BeE;k=255-i|0;l=k<<16|i<<8;k=(k/4|0)<<16|16128;e=e+2|0;f=f+13|0;N5(a,j,e,f,13,2,0);N5(a,j,e,f,12,1,k);N5(a,j,e,f,h,1,l);Bb(3553);Bb(2896);Bb(2929);BU(1.0,1.0,1.0,1.0);}}}
function N5(a,b,c,d,e,f,g){var h,i,j;Bz(b);EQ(b,g);h=c+0|0;i=d+0|0;Bg(b,h,i,0.0);j=d+f|0;Bg(b,h,j,0.0);h=c+e|0;Bg(b,h,j,0.0);Bg(b,h,i,0.0);Bs(b);}
function W3(a,b,c,d,e,f,g){var h,i,j,k,l,m,n;BA();h=BeE;Bz(h);i=b+0|0;j=c+g|0;k=(d+0|0)*0.00390625;l=(e+g|0)*0.00390625;G(h,i,j,0.0,k,l);m=b+f|0;n=(d+f|0)*0.00390625;G(h,m,j,0.0,n,l);l=c+0|0;j=(e+0|0)*0.00390625;G(h,m,l,0.0,n,j);G(h,i,l,0.0,k,j);Bs(h);}
function AC8(a,b,c,d,e,f,g){var $p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:APH(a,b,c,d,e,f,g);if(C()){break _;}return;default:E$();}}C4().s(a,b,c,d,e,f,g,$p);}
function Pf(){var a=this;D.call(a);a.BP=null;a.Im=0;a.Ij=0;a.Gl=0;a.He=0;}
function QF(){var a=this;D.call(a);a.f0=null;a.yb=null;}
function Zs(a,b){var c,d,e,f,g,h,i,j,k,l;if(Hm()===null)Bd4=Bdw.createElement("canvas");if(Hm().width<a.f0.width){b=Hm();c=a.f0.width;b.width=c;}if(Hm().height<a.f0.height){b=Hm();c=a.f0.height;b.height=c;}if(JT()===null)Bd5=Hm().getContext("2d");b=JT();d=a.f0.width;e=a.f0.height;b.clearRect(0.0,0.0,d,e);b=JT();c=a.f0;d=a.f0.width;e=a.f0.height;b.drawImage(c,0.0,0.0,d,e);b=JT();d=a.f0.width;e=a.f0.height;f=b.getImageData(0.0,0.0,d,e);c=f.data;g=Bj(f.width,f.height);WJ($rt_str(a.f0.src));if(c.byteLength<(g*4
|0)){CM(a.yb,null);return;}h=$rt_createIntArray(g);i=h.data;j=0;g=i.length;while(j<g){k=j*4|0;i[j]=c[k]<<16|c[k+1|0]<<8|c[k+2|0]|c[k+3|0]<<24;j=j+1|0;}b=a.yb;c=new Tm;k=f.width;l=f.height;if(g==Bj(k,l)){c.xt=k;c.Dr=l;c.Fg=1;c.tZ=h;CM(b,c);return;}b=new Cc;Bo(b,B(563));M(b);}
function A7n(a,b){Zs(a,b);}
function QE(){var a=this;D.call(a);a.El=null;a.E3=null;}
function AJG(a,b){WJ($rt_str(a.El.src));CM(a.E3,null);}
function A7z(a,b){AJG(a,b);}
function Iy(){M5.call(this);}
function BkS(a,b,c){var d=new Iy();Ui(d,a,b,c);return d;}
function Ui(a,b,c,d){KQ(a,b);a.bk=c;a.cy=d;}
function AGb(a){var b,c;if(a.bk<a.cy){b=a.bk;a.bk=b+1|0;return a.yv(b);}c=new Gt;P(c);M(c);}
function NO(a,b){var c,d;if(a.m1()){c=new FV;P(c);M(c);}if(a.bk<a.cy){d=a.bk;a.bk=d+1|0;a.u7(d,b);return a;}c=new Ha;P(c);M(c);}
function Q4(a,b){var c,d;if(b>=0&&b<a.cy)return AOM(a,b);c=new BS;d=new U;W(d);Bo(c,V(I(Bf(I(Bf(I(d,B(273)),b),B(244)),a.cy),B(27))));M(c);}
function AQ3(a,b,c){var d,e;if(a.m1()){d=new FV;P(d);M(d);}if(b>=0&&b<a.cy){ANJ(a,b,c);return a;}e=new BS;d=new U;W(d);Bo(e,V(I(Bf(I(Bf(I(d,B(273)),b),B(244)),a.cy),B(27))));M(e);}
function AXV(a){return a.m1();}
function UY(){var a=this;Iy.call(a);a.Bu=0;a.xW=0;a.wR=null;}
function AOM(a,b){return a.wR.data[b+a.xW|0];}
function ANJ(a,b,c){a.wR.data[b+a.xW|0]=c;}
function ASS(a){return a.Bu;}
function V9(){D.call(this);this.jq=null;}
function V5(){var a=this;D.call(a);a.iZ=null;a.xn=0;}
function Xj(){D.call(this);this.ky=null;}
function Jq(){B6.call(this);}
function BkT(){var a=new Jq();AYf(a);return a;}
function AYf(a){P(a);}
function UM(){var a=this;CS.call(a);a.Az=null;a.Ay=null;a.qv=null;a.Et=null;}
function ADi(a){Dy(a.bG);S(a.bG,Dj(0,(a.bm/2|0)-100|0,(a.bC/4|0)+72|0,B(564)));Dy(a.qv);DF(a.qv,AQD(a.bZ,a.Ay));}
function AOE(a,b){var c,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b.cl)return;b=a.J;c=a.Et;$p=1;case 1:ADW(b,c);if(C()){break _;}return;default:E$();}}C4().s(a,b,c,$p);}
function AMC(a,b,c,d){var e,f,g,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:ABi(a);if(C()){break _;}DG(a,a.bZ,a.Az,a.bm/2|0,70,16777215);e=90;f=Jm(a.qv);while(KE(f)){g=KU(f);DG(a,a.bZ,g,a.bm/2|0,e,16777215);e=e+9|0;}$p=2;case 2:AFF(a,b,c,d);if(C()){break _;}return;default:E$();}}C4().s(a,b,c,d,e,f,g,$p);}
function FV(){Jq.call(this);}
function BkU(){var a=new FV();A6I(a);return a;}
function A6I(a){P(a);}
function Ha(){B6.call(this);}
function BkV(){var a=new Ha();A5Q(a);return a;}
function A5Q(a){P(a);}
function Gt(){B6.call(this);}
function BkW(){var a=new Gt();A1E(a);return a;}
function A1E(a){P(a);}
function TC(){var a=this;D.call(a);a.yW=null;a.Di=null;a.vJ=0;a.rN=0;}
function AAA(a){return Fl(a.yW);}
function N_(a,b){return Ct(a.Di)<b?0:1;}
function A5L(a,b){a.vJ=b;}
function A_K(a,b){a.rN=b;}
function ACo(){var a=this;D.call(a);a.yC=null;a.oB=0;}
function RB(){CS.call(this);}
function BkX(){var a=new RB();A6K(a);return a;}
function A6K(a){DR(a);}
function Mm(){CS.call(this);}
function BkY(){var a=new Mm();A9Y(a);return a;}
function A9Y(a){DR(a);}
function AOn(a){Dy(a.bG);S(a.bG,Dj(1,(a.bm/2|0)-100|0,(a.bC/4|0)+72|0,B(565)));S(a.bG,Dj(2,(a.bm/2|0)-100|0,(a.bC/4|0)+96|0,B(566)));if(a.J.k1===null)Z(a.bG,1).gB=0;}
function AMm(a,b,c){return;}
function AOx(a,b){var c,d,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b.cl==1){c=a.J;$p=1;continue _;}if(b.cl!=2)return;b=a.J;c=null;$p=3;continue _;case 1:ASy(c);if(C()){break _;}c=a.J;d=null;$p=2;case 2:ADW(c,d);if(C()){break _;}if(b.cl!=2)return;b=a.J;c=null;$p=3;case 3:ABN(b,c);if(C()){break _;}b=a.J;c=LM();$p=4;case 4:ADW(b,c);if(C()){break _;}return;default:E$();}}C4().s(a,b,c,d,$p);}
function APp(a,b,c,d){var e,f,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:KN(a,0,0,a.bm,a.bC,1615855616,(-1602211792));B3();CC(2.0,2.0,2.0);DG(a,a.bZ,B(567),(a.bm/2|0)/2|0,30,16777215);BE();e=a.bZ;f=new U;W(f);DG(a,e,V(Bf(I(f,B(568)),a.J.f.k5)),a.bm/2|0,100,16777215);$p=1;case 1:AFF(a,b,c,d);if(C()){break _;}return;default:E$();}}C4().s(a,b,c,d,e,f,$p);}
function A6L(a){return 0;}
function C2(){var a=this;C6.call(a);a.e7=0;a.Bn=0.0;a.Bo=0.0;a.dq=0;a.cw=0;a.dr=0.0;a.m7=0.0;a.hY=0.0;a.ic=0.0;a.io=0.0;}
var BkG=0.0;var BkH=0.0;var BkI=0.0;function BkZ(a,b,c,d,e,f,g){var h=new C2();FD(h,a,b,c,d,e,f,g);return h;}
function FD(a,b,c,d,e,f,g,h){var i,j;FC(a,b);a.dq=0;a.cw=0;D2(a,0.20000000298023224,0.20000000298023224);a.c4=a.eO/2.0;CU(a,c,d,e);a.io=1.0;a.ic=1.0;a.hY=1.0;a.g=f+(BO()*2.0-1.0)*0.4000000059604645;a.i=g+(BO()*2.0-1.0)*0.4000000059604645;a.h=h+(BO()*2.0-1.0)*0.4000000059604645;i=(BO()+BO()+1.0)*0.15000000596046448;j=Ce(a.g*a.g+a.i*a.i+a.h*a.h);c=a.g;d=j;c=c/d;e=i;a.g=c*e*0.4000000059604645;a.i=a.i/d*e*0.4000000059604645+0.10000000149011612;a.h=a.h/d*e*0.4000000059604645;a.Bn=N(a.m)*3.0;a.Bo=N(a.m)*3.0;a.dr=
(N(a.m)*0.5+0.5)*2.0;a.cw=4.0/(N(a.m)*0.8999999761581421+0.10000000149011612)|0;a.dq=0;a.i9=0;}
function APt(a,b){var c,d;c=a.g;d=b;a.g=c*d;a.i=(a.i-0.10000000149011612)*d+0.10000000149011612;a.h=a.h*d;return a;}
function Yc(a,b){var c;c=0.20000000298023224*b;D2(a,c,c);a.dr=a.dr*b;return a;}
function ALo(a){var b,c,d,e,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.bS=a.d;a.cS=a.j;a.bR=a.e;b=a.dq;a.dq=b+1|0;if(b>=a.cw){$p=2;continue _;}a.i=a.i-0.04*a.m7;c=a.g;d=a.i;e=a.h;$p=1;case 1:ARG(a,c,d,e);if(C()){break _;}a.g=a.g*0.9800000190734863;a.i=a.i*0.9800000190734863;a.h=a.h*0.9800000190734863;if(a.cx){a.g=a.g*0.699999988079071;a.h=a.h*0.699999988079071;}return;case 2:Cb(a);if(C()){break _;}a.i=a.i-0.04*a.m7;c=a.g;d=a.i;e=
a.h;$p=1;continue _;default:E$();}}C4().s(a,b,c,d,e,$p);}
function ANu(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:i=(a.e7%16|0)/16.0;j=i+0.062437500804662704;k=(a.e7/16|0)/16.0;l=k+0.062437500804662704;m=0.10000000149011612*a.dr;n=a.bS;o=a.d-a.bS;p
=c;q=n+o*p-BkG;r=a.cS+(a.j-a.cS)*p-BkH;s=a.bR+(a.e-a.bR)*p-BkI;$p=1;case 1:$z=a.vh(c);if(C()){break _;}t=$z;Cq(b,a.hY*t,a.ic*t,a.io*t);u=d*m;t=q-u;v=g*m;n=t-v;c=e*m;o=r-c;d=f*m;e=s-d;f=h*m;w=e-f;p=i;x=l;G(b,n,o,w,p,x);n=t+v;w=r+c;y=e+f;z=k;G(b,n,w,y,p,z);c=q+u;n=c+v;d=s+d;p=d+f;y=j;G(b,n,w,p,y,z);G(b,c-v,o,d-f,y,x);return;default:E$();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,$p);}
function A7W(a){return 0;}
function AA2(){var a=this;CS.call(a);a.tw=0;a.og=0;}
function Bcj(){var a=new AA2();AWe(a);return a;}
function AWe(a){DR(a);a.tw=0;a.og=0;}
function ARe(a){a.tw=0;Dy(a.bG);S(a.bG,Dj(1,(a.bm/2|0)-100|0,(a.bC/4|0)+48|0,B(569)));S(a.bG,Dj(4,(a.bm/2|0)-100|0,(a.bC/4|0)+24|0,B(570)));S(a.bG,Dj(0,(a.bm/2|0)-100|0,(a.bC/4|0)+96|0,B(496)));}
function ADo(a,b){var c,d,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!b.cl){c=a.J;d=AIO(a,a.J.o);$p=1;continue _;}if(b.cl==1){c=a.J;d=null;$p=2;continue _;}if(b.cl!=4)return;b=a.J;c=null;$p=4;continue _;case 1:ADW(c,d);if(C()){break _;}if(b.cl==1){c=a.J;d=null;$p=2;continue _;}if(b.cl!=4)return;b=a.J;c=null;$p=4;continue _;case 2:ABN(c,d);if(C()){break _;}c=a.J;d=LM();$p=3;case 3:ADW(c,d);if(C()){break _;}if(b.cl!=4)return;b=a.J;c=null;$p
=4;case 4:ADW(b,c);if(C()){break _;}b=a.J;$p=5;case 5:AFk(b);if(C()){break _;}return;default:E$();}}C4().s(a,b,c,d,$p);}
function A2e(a){a.og=a.og+1|0;}
function ADN(a,b,c,d){var e,f,g,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:ABi(a);if(C()){break _;}e=a.J.A;f=a.tw;a.tw=f+1|0;$p=2;case 2:$z=AAO(e,f);if(C()){break _;}f=$z;f=f?0:1;if(!(!f&&a.og>=20)){g=255.0*(Bq(((a.og%10|0)+d)/10.0*3.1415927410125732*2.0)*0.20000000298023224+0.800000011920929)|0;Cy(a.bZ,B(571),8,a.bC-16|0,g<<16|g<<8|g);}DG(a,a.bZ,B(572),a.bm/2|0,40,16777215);$p=3;case 3:AFF(a,b,c,d);if
(C()){break _;}return;default:E$();}}C4().s(a,b,c,d,e,f,g,$p);}
function Ly(){var a=this;D.call(a);a.bd=null;a.Z=null;a.Y=null;a.bb=null;}
function Bk0(){var a=new Ly();AHt(a);return a;}
function AHt(a){a.bd=$rt_createFloatMultiArray([16,16]);a.Z=$rt_createFloatArray(16);a.Y=$rt_createFloatArray(16);a.bb=$rt_createFloatArray(16);}
function ARP(a,b,c,d,e,f,g){var h;h=0;while(h<6){if(a.bd.data[h].data[0]*b+a.bd.data[h].data[1]*c+a.bd.data[h].data[2]*d+a.bd.data[h].data[3]<=0.0&&a.bd.data[h].data[0]*e+a.bd.data[h].data[1]*c+a.bd.data[h].data[2]*d+a.bd.data[h].data[3]<=0.0&&a.bd.data[h].data[0]*b+a.bd.data[h].data[1]*f+a.bd.data[h].data[2]*d+a.bd.data[h].data[3]<=0.0&&a.bd.data[h].data[0]*e+a.bd.data[h].data[1]*f+a.bd.data[h].data[2]*d+a.bd.data[h].data[3]<=0.0&&a.bd.data[h].data[0]*b+a.bd.data[h].data[1]*c+a.bd.data[h].data[2]*g+a.bd.data[h].data[3]
<=0.0&&a.bd.data[h].data[0]*e+a.bd.data[h].data[1]*c+a.bd.data[h].data[2]*g+a.bd.data[h].data[3]<=0.0&&a.bd.data[h].data[0]*b+a.bd.data[h].data[1]*f+a.bd.data[h].data[2]*g+a.bd.data[h].data[3]<=0.0&&a.bd.data[h].data[0]*e+a.bd.data[h].data[1]*f+a.bd.data[h].data[2]*g+a.bd.data[h].data[3]<=0.0)return 0;h=h+1|0;}return 1;}
function WG(){var a=this;Ly.call(a);a.oU=null;a.n3=null;a.zA=null;}
var Bk1=null;function BaL(){var a=new WG();AFv(a);return a;}
function AFv(a){AHt(a);a.oU=H4(16);a.n3=H4(16);a.zA=H4(16);}
function RX(){AJR(Bk1);return Bk1;}
function GV(a,b,c){var d,e;b=b.data;d=D_(b[c].data[0]*b[c].data[0]+b[c].data[1]*b[c].data[1]+b[c].data[2]*b[c].data[2]);e=b[c].data;e[0]=e[0]/d;e=b[c].data;e[1]=e[1]/d;e=b[c].data;e[2]=e[2]/d;b=b[c].data;b[3]=b[3]/d;}
function AJR(a){LS(a.oU);LS(a.n3);LS(a.zA);TV(2983,a.oU);TV(2982,a.n3);Qe(TR(a.oU),16);VP(a.oU,a.Z);Qe(TR(a.n3),16);VP(a.n3,a.Y);a.bb.data[0]=a.Y.data[0]*a.Z.data[0]+a.Y.data[1]*a.Z.data[4]+a.Y.data[2]*a.Z.data[8]+a.Y.data[3]*a.Z.data[12];a.bb.data[1]=a.Y.data[0]*a.Z.data[1]+a.Y.data[1]*a.Z.data[5]+a.Y.data[2]*a.Z.data[9]+a.Y.data[3]*a.Z.data[13];a.bb.data[2]=a.Y.data[0]*a.Z.data[2]+a.Y.data[1]*a.Z.data[6]+a.Y.data[2]*a.Z.data[10]+a.Y.data[3]*a.Z.data[14];a.bb.data[3]=a.Y.data[0]*a.Z.data[3]+a.Y.data[1]*a.Z.data[7]
+a.Y.data[2]*a.Z.data[11]+a.Y.data[3]*a.Z.data[15];a.bb.data[4]=a.Y.data[4]*a.Z.data[0]+a.Y.data[5]*a.Z.data[4]+a.Y.data[6]*a.Z.data[8]+a.Y.data[7]*a.Z.data[12];a.bb.data[5]=a.Y.data[4]*a.Z.data[1]+a.Y.data[5]*a.Z.data[5]+a.Y.data[6]*a.Z.data[9]+a.Y.data[7]*a.Z.data[13];a.bb.data[6]=a.Y.data[4]*a.Z.data[2]+a.Y.data[5]*a.Z.data[6]+a.Y.data[6]*a.Z.data[10]+a.Y.data[7]*a.Z.data[14];a.bb.data[7]=a.Y.data[4]*a.Z.data[3]+a.Y.data[5]*a.Z.data[7]+a.Y.data[6]*a.Z.data[11]+a.Y.data[7]*a.Z.data[15];a.bb.data[8]=a.Y.data[8]
*a.Z.data[0]+a.Y.data[9]*a.Z.data[4]+a.Y.data[10]*a.Z.data[8]+a.Y.data[11]*a.Z.data[12];a.bb.data[9]=a.Y.data[8]*a.Z.data[1]+a.Y.data[9]*a.Z.data[5]+a.Y.data[10]*a.Z.data[9]+a.Y.data[11]*a.Z.data[13];a.bb.data[10]=a.Y.data[8]*a.Z.data[2]+a.Y.data[9]*a.Z.data[6]+a.Y.data[10]*a.Z.data[10]+a.Y.data[11]*a.Z.data[14];a.bb.data[11]=a.Y.data[8]*a.Z.data[3]+a.Y.data[9]*a.Z.data[7]+a.Y.data[10]*a.Z.data[11]+a.Y.data[11]*a.Z.data[15];a.bb.data[12]=a.Y.data[12]*a.Z.data[0]+a.Y.data[13]*a.Z.data[4]+a.Y.data[14]*a.Z.data[8]
+a.Y.data[15]*a.Z.data[12];a.bb.data[13]=a.Y.data[12]*a.Z.data[1]+a.Y.data[13]*a.Z.data[5]+a.Y.data[14]*a.Z.data[9]+a.Y.data[15]*a.Z.data[13];a.bb.data[14]=a.Y.data[12]*a.Z.data[2]+a.Y.data[13]*a.Z.data[6]+a.Y.data[14]*a.Z.data[10]+a.Y.data[15]*a.Z.data[14];a.bb.data[15]=a.Y.data[12]*a.Z.data[3]+a.Y.data[13]*a.Z.data[7]+a.Y.data[14]*a.Z.data[11]+a.Y.data[15]*a.Z.data[15];a.bd.data[0].data[0]=a.bb.data[3]-a.bb.data[0];a.bd.data[0].data[1]=a.bb.data[7]-a.bb.data[4];a.bd.data[0].data[2]=a.bb.data[11]-a.bb.data[8];a.bd.data[0].data[3]
=a.bb.data[15]-a.bb.data[12];GV(a,a.bd,0);a.bd.data[1].data[0]=a.bb.data[3]+a.bb.data[0];a.bd.data[1].data[1]=a.bb.data[7]+a.bb.data[4];a.bd.data[1].data[2]=a.bb.data[11]+a.bb.data[8];a.bd.data[1].data[3]=a.bb.data[15]+a.bb.data[12];GV(a,a.bd,1);a.bd.data[2].data[0]=a.bb.data[3]+a.bb.data[1];a.bd.data[2].data[1]=a.bb.data[7]+a.bb.data[5];a.bd.data[2].data[2]=a.bb.data[11]+a.bb.data[9];a.bd.data[2].data[3]=a.bb.data[15]+a.bb.data[13];GV(a,a.bd,2);a.bd.data[3].data[0]=a.bb.data[3]-a.bb.data[1];a.bd.data[3].data[1]
=a.bb.data[7]-a.bb.data[5];a.bd.data[3].data[2]=a.bb.data[11]-a.bb.data[9];a.bd.data[3].data[3]=a.bb.data[15]-a.bb.data[13];GV(a,a.bd,3);a.bd.data[4].data[0]=a.bb.data[3]-a.bb.data[2];a.bd.data[4].data[1]=a.bb.data[7]-a.bb.data[6];a.bd.data[4].data[2]=a.bb.data[11]-a.bb.data[10];a.bd.data[4].data[3]=a.bb.data[15]-a.bb.data[14];GV(a,a.bd,4);a.bd.data[5].data[0]=a.bb.data[3]+a.bb.data[2];a.bd.data[5].data[1]=a.bb.data[7]+a.bb.data[6];a.bd.data[5].data[2]=a.bb.data[11]+a.bb.data[10];a.bd.data[5].data[3]=a.bb.data[15]
+a.bb.data[14];GV(a,a.bd,5);}
function AG9(){Bk1=BaL();}
function Q8(){}
function AFT(){var a=this;D.call(a);a.C7=null;a.vz=0.0;a.v3=0.0;a.wh=0.0;}
function Bbs(){var a=new AFT();A85(a);return a;}
function A85(a){a.C7=RX();}
function AOl(a,b,c,d){a.vz=b;a.v3=c;a.wh=d;}
function AAj(a,b,c,d,e,f,g){var h,i;h=b-a.vz;i=c-a.v3;b=d-a.wh;d=e-a.vz;e=f-a.v3;c=g-a.wh;return ARP(a.C7,h,i,b,d,e,c);}
function MJ(a,b){return AAj(a,b.R,b.M,b.S,b.V,b.U,b.W);}
function O8(){D.call(this);}
var Bk2=null;function Bk3(){var a=new O8();ALi(a);return a;}
function ALi(a){return;}
function DT(){Bd(2896);Bd(16384);Bd(16385);Bd(2903);}
function Hy(){var b;Bb(2896);Bb(16384);Bb(16385);Bb(2903);b=CD(BY(0.699999988079071,1.0,(-0.20000000298023224)));RM(b.x,b.z,b.w,0.0);Fr(0.6000000238418579,0.6000000238418579,0.6000000238418579,1.0);Fr(0.0,0.0,0.0,1.0);Fr(0.0,0.0,0.0,1.0);b=CD(BY((-0.699999988079071),1.0,0.20000000298023224));RM(b.x,b.z,b.w,0.0);Fr(0.6000000238418579,0.6000000238418579,0.6000000238418579,1.0);Fr(0.0,0.0,0.0,1.0);Fr(0.0,0.0,0.0,1.0);Fr(0.4000000059604645,0.4000000059604645,0.4000000059604645,1.0);}
function RM(b,c,d,e){return Fr(b,c,d,e);}
function Fr(b,c,d,e){EA(Bk2);CJ(CJ(CJ(CJ(Bk2,b),c),d),e);Gw(Bk2);return Bk2;}
function ASj(){Bk2=H4(16);}
function Ii(){var a=this;D.call(a);a.z6=null;a.go=null;a.nz=null;}
function Bk4(a,b,c){var d=new Ii();K6(d,a,b,c);return d;}
function K6(a,b,c,d){a.z6=b;a.go=c;a.nz=d;}
function A6p(a){return a.go.gm()+a.nz.gm()|0;}
function A6d(a){return a.z6;}
function AS_(a,b){return b<a.go.gm()?a.go.gx(b):a.nz.gx(b-a.go.gm()|0);}
function A3f(a,b,c){return b<a.go.gm()?a.go.j7(b,c):a.nz.j7(b-a.go.gm()|0,c);}
function AWU(a,b,c){if(b<a.go.gm())a.go.jE(b,c);else a.nz.jE(b-a.go.gm()|0,c);}
function A94(a){return a.go.f3();}
function YA(a){var b,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.go;$p=1;case 1:b.kl();if(C()){break _;}b=a.nz;$p=2;case 2:b.kl();if(C()){break _;}return;default:E$();}}C4().s(a,b,$p);}
function ZI(){C2.call(this);}
function AY3(a,b,c,d,e,f,g,h){var i=new ZI();A1b(i,a,b,c,d,e,f,g,h);return i;}
function A1b(a,b,c,d,e,f,g,h,i){FD(a,b,c,d,e,f,g,h);a.e7=i.ba;a.m7=i.Ey;a.io=0.6000000238418579;a.ic=0.6000000238418579;a.hY=0.6000000238418579;a.dr=a.dr/2.0;}
function ATH(a){return 1;}
function YN(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:i=((a.e7%16|0)+a.Bn/4.0)/16.0;j=i+0.015609375201165676;k=((a.e7/16|0)+a.Bo/4.0)/16.0;l=k+0.015609375201165676;m=0.10000000149011612*a.dr;n
=a.bS;o=a.d-a.bS;p=c;q=n+o*p-BkG;r=a.cS+(a.j-a.cS)*p-BkH;s=a.bR+(a.e-a.bR)*p-BkI;$p=1;case 1:$z=ADJ(a,c);if(C()){break _;}t=$z;Cq(b,t*a.hY,t*a.ic,t*a.io);t=d*m;u=q-t;g=g*m;v=u-g;w=e*m;o=r-w;c=f*m;d=s-c;e=h*m;n=d-e;x=i;p=l;G(b,v,o,n,x,p);n=u+g;v=r+w;y=d+e;z=k;G(b,n,v,y,x,z);d=q+t;n=d+g;c=s+c;x=c+e;y=j;G(b,n,v,x,y,z);G(b,d-g,o,c-e,y,p);return;default:E$();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,$p);}
function KT(){B6.call(this);}
function Bk5(){var a=new KT();A2m(a);return a;}
function A2m(a){P(a);}
function JQ(){C2.call(this);}
function Bk6(a,b,c,d){var e=new JQ();TS(e,a,b,c,d);return e;}
function TS(a,b,c,d,e){FD(a,b,c,d,e,0.0,0.0,0.0);a.g=a.g*0.30000001192092896;a.i=BO()*0.20000000298023224+0.10000000149011612;a.h=a.h*0.30000001192092896;a.hY=1.0;a.ic=1.0;a.io=1.0;a.e7=16;D2(a,0.009999999776482582,0.009999999776482582);a.m7=0.05999999865889549;a.cw=8.0/(BO()*0.8+0.2)|0;}
function AKN(a,b,c,d,e,f,g,h){var $p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:ANu(a,b,c,d,e,f,g,h);if(C()){break _;}return;default:E$();}}C4().s(a,b,c,d,e,f,g,h,$p);}
function AOz(a){var b,c,d,e,f,g,h,i,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.bS=a.d;a.cS=a.j;a.bR=a.e;a.i=a.i-a.m7;b=a.g;c=a.i;d=a.h;$p=1;case 1:ARG(a,b,c,d);if(C()){break _;}a.g=a.g*0.9800000190734863;a.i=a.i*0.9800000190734863;a.h=a.h*0.9800000190734863;e=a.cw;a.cw=e-1|0;if(e<=0){$p=2;continue _;}if(a.cx){if(BO()<0.5){$p=5;continue _;}a.g=a.g*0.699999988079071;a.h=a.h*0.699999988079071;}f=a.l;e
=K(a.d);g=K(a.j);h=K(a.e);$p=3;continue _;case 2:Cb(a);if(C()){break _;}if(a.cx){if(BO()<0.5){$p=5;continue _;}a.g=a.g*0.699999988079071;a.h=a.h*0.699999988079071;}f=a.l;e=K(a.d);g=K(a.j);h=K(a.e);$p=3;case 3:$z=AB3(f,e,g,h);if(C()){break _;}f=$z;if(!f.nE()&&!f.dw())return;i=K(a.j)+1|0;f=a.l;e=K(a.d);g=K(a.j);h=K(a.e);$p=4;case 4:$z=AEL(f,e,g,h);if(C()){break _;}e=$z;b=i-Jy(e);if(a.j>=b)return;$p=6;continue _;case 5:Cb(a);if(C()){break _;}a.g=a.g*0.699999988079071;a.h=a.h*0.699999988079071;f=a.l;e=K(a.d);g=
K(a.j);h=K(a.e);$p=3;continue _;case 6:Cb(a);if(C()){break _;}return;default:E$();}}C4().s(a,b,c,d,e,f,g,h,i,$p);}
function IR(){var a=this;Iy.call(a);a.eq=null;a.Aj=0;a.eg=0;}
function Bk7(a,b,c,d,e,f){var g=new IR();OO(g,a,b,c,d,e,f);return g;}
function OO(a,b,c,d,e,f,g){Ui(a,c,e,f);a.eg=b;a.eq=d;a.Aj=g;}
function AXO(a){return a.Aj;}
function Ph(){IR.call(this);}
function AWc(a,b){var c,d;c=a.eq.cp.data;d=a.eg;b=b*4|0;return c[d+b|0]&255|(a.eq.cp.data[(a.eg+b|0)+1|0]&255)<<8|(a.eq.cp.data[(a.eg+b|0)+2|0]&255)<<16|(a.eq.cp.data[(a.eg+b|0)+3|0]&255)<<24;}
function ASR(a,b,c){var d,e;d=a.eq.cp.data;e=a.eg;b=b*4|0;d[e+b|0]=c<<24>>24;a.eq.cp.data[(a.eg+b|0)+1|0]=c>>8<<24>>24;a.eq.cp.data[(a.eg+b|0)+2|0]=c>>16<<24>>24;a.eq.cp.data[(a.eg+b|0)+3|0]=c>>24<<24>>24;}
function VR(){IR.call(this);}
function A0P(a,b){var c,d;c=a.eq.cp.data;d=a.eg;b=b*4|0;return (c[d+b|0]&255)<<24|(a.eq.cp.data[(a.eg+b|0)+1|0]&255)<<16|(a.eq.cp.data[(a.eg+b|0)+2|0]&255)<<8|a.eq.cp.data[(a.eg+b|0)+3|0]&255;}
function ATK(a,b,c){var d,e;d=a.eq.cp.data;e=a.eg;b=b*4|0;d[e+b|0]=c>>24<<24>>24;a.eq.cp.data[(a.eg+b|0)+1|0]=c>>16<<24>>24;a.eq.cp.data[(a.eg+b|0)+2|0]=c>>8<<24>>24;a.eq.cp.data[(a.eg+b|0)+3|0]=c<<24>>24;}
function AKV(){D.call(this);this.wa=null;}
function AYH(a){var b=new AKV();A7T(b,a);return b;}
function A7T(a,b){a.wa=b;}
function ZN(a,b,c){return G4(b,a.wa)>=G4(c,a.wa)?1:(-1);}
function A08(a,b,c){return ZN(a,b,c);}
function Wc(){D.call(this);this.yh=null;}
function APJ(a,b,c){var d,e;d=b.fv;e=c.fv;return d&&!e?1:e&&!d?(-1):G4(b,a.yh)>=G4(c,a.yh)?(-1):1;}
function A9B(a,b,c){return APJ(a,b,c);}
function Hs(){D.call(this);}
var Bk8=null;var Bk9=null;var Bk$=null;var Bk_=null;var Bla=null;function Blb(){var a=new Hs();AAm(a);return a;}
function AAm(a){return;}
function RE(b,c){var d,e,f;if(c===null)c=Bk_;d=J(D,b.s);UJ(b,d);P2(d,c);e=0;while(true){f=d.data;if(e>=f.length)break;Re(b,e,f[e]);e=e+1|0;}}
function AOe(){Bk8=new Sc;Bk9=new Sb;Bk$=new Sd;Bk_=new WM;Bla=new WK;}
function HY(){var a=this;D.call(a);a.mN=null;a.yk=null;a.Dj=null;a.Cx=null;a.HM=null;a.Gx=0.0;a.FR=0.0;a.E_=0.0;a.E$=0.0;a.E9=0.0;}
var Bkk=null;var BkD=0.0;var BkE=0.0;var BkF=0.0;function BbS(){var a=new HY();ADa(a);return a;}
function ADa(a){var b;a.mN=Df();BP(a.mN,F(Jk),Bce());BP(a.mN,F(Nz),Bbt());b=Ni(Iu(a.mN));while(Gb(b)){Me(b).rc=a;}}
function Vz(a,b){var c;c=CP(a.mN,b);if(c===null&&b!==F(D$)){c=Vz(a,JL(b));BP(a.mN,b,c);}return c;}
function AIi(a,b){return Ws(a,b)===null?0:1;}
function Ws(a,b){return Vz(a,Dl(b));}
function ARj(a,b,c,d,e,f){var g,h,i;a.Cx=b;a.Dj=c;a.HM=e;a.yk=d;a.Gx=e.P+(e.u-e.P)*f;a.FR=e.T+(e.I-e.T)*f;g=e.cs;h=e.d-e.cs;i=f;a.E_=g+h*i;a.E$=e.b7+(e.j-e.b7)*i;a.E9=e.ct+(e.e-e.ct)*i;}
function Y0(a,b,c){var d,e,f,g,h,i,j,k,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(AK3(b,a.E_,a.E$,a.E9)>=4096.0)return;d=a.Cx;e=b.dK;f=b.dI;g=b.dR;$p=1;case 1:$z=ANi(d,e,f,g);if(C()){break _;}h=$z;F8(h,h,h);i=b.dK-BkD;j=b.dI-BkE;k=b.dR-BkF;$p=2;case 2:AFp(a,b,i,j,k,c);if(C()){break _;}return;default:E$();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function AFp(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=Ws(a,b);if(g===null)return;$p=1;case 1:g.CU(b,c,d,e,f);if(C()){break _;}return;default:E$();}}C4().s(a,b,c,d,e,f,g,$p);}
function A_L(a){return a.yk;}
function ALM(){Bkk=BbS();}
function H1(){var a=this;D.call(a);a.dV=null;a.FE=null;a.tY=null;a.n1=null;a.HZ=null;a.rq=0.0;a.GM=0.0;a.FN=null;a.D9=0.0;a.D8=0.0;a.D7=0.0;}
var Bgh=null;var BkA=0.0;var BkB=0.0;var BkC=0.0;function Bac(){var a=new H1();AGx(a);return a;}
function AGx(a){var b,c,d,e,f;a.dV=Df();BP(a.dV,F(Ko),A_S());b=a.dV;c=new Ua;d=BcG();e=new PZ;KY(e,6,0.5);Gr(c,d,0.699999988079071);c.kk=e;BP(b,F(IE),c);d=a.dV;f=new TI;c=Bcd();e=BbO();Gr(f,c,0.699999988079071);f.kk=e;BP(d,F(KI),f);BP(a.dV,F(J0),Bb4());BP(a.dV,F(Jp),AYg(Bcr(),0.5));d=a.dV;f=new DJ;c=new HS;KH(c);Gr(f,c,0.5);BP(d,F(I$),f);BP(a.dV,F(Jx),Bbe());d=a.dV;f=new Uf;c=new HS;KH(c);Gr(f,c,3.0);f.tv=6.0;BP(d,F(K$),f);BP(a.dV,F(EO),AYg(A$S(),0.5));d=a.dV;f=new TP;EG(f);BP(d,F(C6),f);BP(a.dV,F(II),BbM());d
=a.dV;f=new RA;EG(f);BP(d,F(Jv),f);BP(a.dV,F(E9),X4());BP(a.dV,F(Mr),Bai());BP(a.dV,F(JO),Baa());BP(a.dV,F(Gh),Bb0());d=Ni(Iu(a.dV));while(Gb(d)){Me(d).iD=a;}}
function W6(a,b){var c;c=CP(a.dV,b);if(c===null&&b!==F(C6)){c=W6(a,JL(b));BP(a.dV,b,c);}return c;}
function Sf(a,b){return W6(a,Dl(b));}
function AHe(a,b,c,d,e,f,g){var h,i,j;a.n1=b;a.tY=c;a.FN=f;a.HZ=e;a.FE=d;a.rq=e.P+(e.u-e.P)*g;a.GM=e.T+(e.I-e.T)*g;h=e.cs;i=e.d-e.cs;j=g;a.D9=h+i*j;a.D8=e.b7+(e.j-e.b7)*j;a.D7=e.ct+(e.e-e.ct)*j;}
function AM_(a,b,c){var d,e,f,g,h,i,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=b.cs;e=b.d-b.cs;f=c;e=d+e*f;d=b.b7+(b.j-b.b7)*f;g=b.ct+(b.e-b.ct)*f;h=b.P+(b.u-b.P)*c;$p=1;case 1:$z=b.vh(c);if(C()){break _;}i=$z;F8(i,i,i);e=e-BkA;d=d-BkB;f=g-BkC;$p=2;case 2:AQF(a,b,e,d,f,h,c);if(C()){break _;}return;default:E$();}}C4().s(a,b,c,d,e,f,g,h,i,$p);}
function AQF(a,b,c,d,e,f,g){var h,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:h=Sf(a,b);if(h===null)return;$p=1;case 1:h.iQ(b,c,d,e,f,g);if(C()){break _;}$p=2;case 2:ANk(h,b,c,d,e,f,g);if(C()){break _;}return;default:E$();}}C4().s(a,b,c,d,e,f,g,h,$p);}
function A7Y(a,b){a.n1=b;}
function AJU(a,b,c,d){var e,f,g;e=b-a.D9;f=c-a.D8;g=d-a.D7;return e*e+f*f+g*g;}
function AKv(){Bgh=Bac();}
function Ng(){D.call(this);}
var Blc=null;var Bld=null;function Ble(){var a=new Ng();AR3(a);return a;}
function AR3(a){return;}
function Vo(b){var c;c=0;while(true){if(c>=Blc.data.length)return (-1);if(b==Blc.data[c])break;c=c+1|0;}return c;}
function APc(){var b,c;b=$rt_createIntArray(144);c=b.data;c[0]=32;c[1]=33;c[2]=34;c[3]=35;c[4]=36;c[5]=37;c[6]=38;c[7]=39;c[8]=40;c[9]=41;c[10]=42;c[11]=43;c[12]=44;c[13]=45;c[14]=46;c[15]=47;c[16]=48;c[17]=49;c[18]=50;c[19]=51;c[20]=52;c[21]=53;c[22]=54;c[23]=55;c[24]=56;c[25]=57;c[26]=58;c[27]=59;c[28]=60;c[29]=61;c[30]=62;c[31]=63;c[32]=64;c[33]=65;c[34]=66;c[35]=67;c[36]=68;c[37]=69;c[38]=70;c[39]=71;c[40]=72;c[41]=73;c[42]=74;c[43]=75;c[44]=76;c[45]=77;c[46]=78;c[47]=79;c[48]=80;c[49]=81;c[50]=82;c[51]
=83;c[52]=84;c[53]=85;c[54]=86;c[55]=87;c[56]=88;c[57]=89;c[58]=90;c[59]=91;c[60]=92;c[61]=93;c[62]=94;c[63]=95;c[64]=39;c[65]=97;c[66]=98;c[67]=99;c[68]=100;c[69]=101;c[70]=102;c[71]=103;c[72]=104;c[73]=105;c[74]=106;c[75]=107;c[76]=108;c[77]=109;c[78]=110;c[79]=111;c[80]=112;c[81]=113;c[82]=114;c[83]=115;c[84]=116;c[85]=117;c[86]=118;c[87]=119;c[88]=120;c[89]=121;c[90]=122;c[91]=123;c[92]=124;c[93]=125;c[94]=126;c[95]=8962;c[96]=199;c[97]=252;c[98]=233;c[99]=226;c[100]=228;c[101]=224;c[102]=229;c[103]=231;c[104]
=234;c[105]=235;c[106]=232;c[107]=239;c[108]=238;c[109]=236;c[110]=196;c[111]=197;c[112]=201;c[113]=230;c[114]=198;c[115]=244;c[116]=246;c[117]=242;c[118]=251;c[119]=249;c[120]=255;c[121]=214;c[122]=220;c[123]=248;c[124]=163;c[125]=216;c[126]=215;c[127]=402;c[128]=225;c[129]=237;c[130]=243;c[131]=250;c[132]=241;c[133]=209;c[134]=170;c[135]=186;c[136]=191;c[137]=174;c[138]=172;c[139]=189;c[140]=188;c[141]=161;c[142]=171;c[143]=187;Blc=b;b=$rt_createCharArray(15);c=b.data;c[0]=47;c[1]=10;c[2]=13;c[3]=9;c[4]=0;c[5]
=12;c[6]=96;c[7]=63;c[8]=42;c[9]=92;c[10]=60;c[11]=62;c[12]=124;c[13]=34;c[14]=58;Bld=b;}
function J3(){B6.call(this);}
function Blf(){var a=new J3();A7I(a);return a;}
function A7I(a){P(a);}
function VZ(){var a=this;D.call(a);a.eF=0;a.e0=0;a.eG=0;}
function CO(a,b,c){var d=new VZ();AWH(d,a,b,c);return d;}
function AWH(a,b,c,d){a.eF=b;a.e0=c;a.eG=d;}
function A6k(a,b){var c;if(!(b instanceof VZ))return 0;c=b;return c.eF==a.eF&&c.e0==a.e0&&c.eG==a.eG?1:0;}
function A1q(a){return (Bj(a.eF,8976890)+Bj(a.e0,981131)|0)+a.eG|0;}
function Ov(){Fa.call(this);}
var Blg=0.0;var Blh=null;function AEn(){Blg=NaN;Blh=F($rt_floatcls());}
function Hl(){D.call(this);}
var Bdh=null;var Bdj=null;var Bdk=null;var Bdi=null;var Bdg=null;function Bli(){var a=new Hl();AQK(a);return a;}
function AQK(a){return;}
function AMM(){var b,c;b=$rt_createIntArray(10);c=b.data;c[0]=1;c[1]=10;c[2]=100;c[3]=1000;c[4]=10000;c[5]=100000;c[6]=1000000;c[7]=10000000;c[8]=100000000;c[9]=1000000000;Bdh=b;b=$rt_createLongArray(19);c=b.data;c[0]=Long_fromInt(1);c[1]=Long_fromInt(10);c[2]=Long_fromInt(100);c[3]=Long_fromInt(1000);c[4]=Long_fromInt(10000);c[5]=Long_fromInt(100000);c[6]=Long_fromInt(1000000);c[7]=Long_fromInt(10000000);c[8]=Long_fromInt(100000000);c[9]=Long_fromInt(1000000000);c[10]=new Long(1410065408, 2);c[11]=new Long(1215752192, 23);c[12]
=new Long(3567587328, 232);c[13]=new Long(1316134912, 2328);c[14]=new Long(276447232, 23283);c[15]=new Long(2764472320, 232830);c[16]=new Long(1874919424, 2328306);c[17]=new Long(1569325056, 23283064);c[18]=new Long(2808348672, 232830643);Bdj=b;b=$rt_createLongArray(6);c=b.data;c[0]=Long_fromInt(1);c[1]=Long_fromInt(10);c[2]=Long_fromInt(100);c[3]=Long_fromInt(10000);c[4]=Long_fromInt(100000000);c[5]=new Long(1874919424, 2328306);Bdk=b;Bdi=new Wa;Bdg=new Sa;}
function Nh(){D.call(this);}
var Blj=null;var Blk=null;function Bll(){var a=new Nh();AKm(a);return a;}
function AKm(a){return;}
function AOf(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p;d=$rt_floatToIntBits(b);c.zl=!(d&(-2147483648))?0:1;e=d&8388607;f=d>>23&255;if(!e&&!f){c.ux=0;c.ue=0;return;}g=0;if(f)e=e|8388608;else{e=e<<1;while(Long_eq(Long_and(Long_fromInt(e),Long_fromInt(8388608)),Long_ZERO)){e=e<<1;f=f+(-1)|0;g=g+1|0;}}h=AOt(Blk,f);if(h<0)h= -h-2|0;i=9+(f-Blk.data[h]|0)|0;j=Long_fromInt(e);k=Long_shru(Long_mul(j,Long_fromInt(Blj.data[h])),32-i|0).lo;if(k>=1000000000){h=h+1|0;i=9+(f-Blk.data[h]|0)|0;k=Long_shru(Long_mul(j,Long_fromInt(Blj.data[h])),
32-i|0).lo;}g=(31-i|0)-g|0;l=g>=0?Blj.data[h]>>>g:Blj.data[h]<< -g;m=(l+1|0)>>1;n=l>>1;if(e==4194304)n=n>>2;o=10;while(o<=n){o=o*10|0;}if((k%o|0)>=(n/2|0))o=o/10|0;p=10;while(p<=m){p=p*10|0;}if((p-(k%p|0)|0)>(m/2|0))p=p/10|0;e=R(o,p);e=e>0?Bj(k/o|0,o):e<0?Bj(k/p|0,p)+p|0:Bj((k+(p/2|0)|0)/p|0,p);if(e>=1000000000){h=h+1|0;e=e/10|0;}else if(e<100000000){h=h+(-1)|0;e=e*10|0;}c.ux=e;c.ue=h-50|0;}
function ALc(){var b,c,d,e,f,g,h,i;Blj=$rt_createIntArray(100);Blk=$rt_createIntArray(100);b=2000000000;c=127;d=0;e=b;while(d<50){f=Blj.data;g=d+50|0;f[g]=$rt_udiv(e,20);Blk.data[g]=c;g=$rt_udiv(e,10);h=$rt_umod(g,10);while(g<=b&&!(g&(-2147483648))){g=g<<1;c=c+1|0;h=h<<1;}e=g+(h/10|0)|0;d=d+1|0;}c=127;d=0;while(d<50){i=0;h=b;while(h>214748364){h=h>>1;i=i+1|0;c=c+(-1)|0;}h=h*10|0;b=i<=0?h:Long_add(Long_fromInt(h),Long_shr(Long_mul(Long_fromInt(b&((1<<i)-1|0)),Long_fromInt(10)),i)).lo;f=Blj.data;i=(50-d|0)-1|
0;f[i]=$rt_udiv(b,20);Blk.data[i]=c;d=d+1|0;}}
function Sa(){var a=this;D.call(a);a.ux=0;a.ue=0;a.zl=0;}
function Blm(){var a=new Sa();ASP(a);return a;}
function ASP(a){return;}
function DJ(){var a=this;Dh.call(a);a.mG=null;a.kk=null;}
function AYg(a,b){var c=new DJ();Gr(c,a,b);return c;}
function Gr(a,b,c){EG(a);a.mG=b;a.mb=c;}
function A$p(a,b){a.kk=b;}
function AAc(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,$$je,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:B3();Bd(2884);try{h=b.e$+(b.dG-b.e$)*g;i=b.P+(b.u-b.P)*g;j=b.T+(b.I-b.T)*g;Bw(c,d,e);k=b.oQ+g;Bv(180.0-h,0.0,1.0,0.0);if(b.c2>0){f=D_((b.c2
+g-1.0)/20.0*1.600000023841858);if(f>1.0)f=1.0;Bv(f*a.CG(b),0.0,0.0,1.0);}l=0.0625;Bb(32826);CC((-1.0),(-1.0),1.0);a.xh(b,g);Bw(0.0,(-1.5078125),0.0);m=b.jV+(b.cg-b.jV)*g;n=b.gn-b.cg*(1.0-g);if(m>1.0)m=1.0;o=b.tJ;p=PQ(b);$p=1;continue _;}catch($$e){$$je=Y($$e);if($$je instanceof BD){o=$$je;}else{throw $$e;}}B9(o);Bb(2884);BE();return;case 1:try{APr(a,o,p);if(C()){break _;}Bb(3008);o=a.mG;f=i-h;o.hI(n,m,k,f,j,l);q=0;if(q>=4){$p=2;continue _;}$p=3;continue _;}catch($$e){$$je=Y($$e);if($$je instanceof BD){o=$$je;}
else{throw $$e;}}B9(o);Bb(2884);BE();return;case 2:a:{try{$z=ADJ(b,g);if(C()){break _;}r=$z;s=a.CJ(b,r,g);q=s>>24&255;if(!(q<=0&&b.dE<=0&&b.c2<=0)){Bd(3553);Bd(3008);Bb(3042);Dg(770,771);HL(514);if(!(b.dE<=0&&b.c2<=0)){BU(r,0.0,0.0,0.4000000059604645);a.mG.hI(n,m,k,f,j,l);t=0;if(t<4){$p=4;continue _;}}if(q>0){u=(s>>16&255)/255.0;v=(s>>8&255)/255.0;w=(s&255)/255.0;x=q/255.0;BU(u,v,w,x);a.mG.hI(n,m,k,f,j,l);y=0;if(y<4){$p=5;continue _;}}HL(515);Bd(3042);Bb(3008);Bb(3553);}Bd(32826);break a;}catch($$e){$$je=Y($$e);if
($$je instanceof BD){o=$$je;}else{throw $$e;}}B9(o);}Bb(2884);BE();return;case 3:try{$z=a.k8(b,q);if(C()){break _;}s=$z;if(s){a.kk.hI(n,m,k,f,j,l);Bd(3042);Bb(3008);}q=q+1|0;if(q>=4){$p=2;continue _;}continue _;}catch($$e){$$je=Y($$e);if($$je instanceof BD){o=$$je;}else{throw $$e;}}B9(o);Bb(2884);BE();return;case 4:a:{try{$z=a.k8(b,t);if(C()){break _;}y=$z;if(y){BU(r,0.0,0.0,0.4000000059604645);a.kk.hI(n,m,k,f,j,l);}t=t+1|0;if(t<4){continue _;}if(q>0){u=(s>>16&255)/255.0;v=(s>>8&255)/255.0;w=(s&255)/255.0;x
=q/255.0;BU(u,v,w,x);a.mG.hI(n,m,k,f,j,l);y=0;if(y<4){$p=5;continue _;}}HL(515);Bd(3042);Bb(3008);Bb(3553);Bd(32826);break a;}catch($$e){$$je=Y($$e);if($$je instanceof BD){o=$$je;}else{throw $$e;}}B9(o);}Bb(2884);BE();return;case 5:a:{try{$z=a.k8(b,y);if(C()){break _;}s=$z;if(s){BU(u,v,w,x);a.kk.hI(n,m,k,f,j,l);}y=y+1|0;if(y>=4){HL(515);Bd(3042);Bb(3008);Bb(3553);Bd(32826);break a;}continue _;}catch($$e){$$je=Y($$e);if($$je instanceof BD){o=$$je;}else{throw $$e;}}B9(o);}Bb(2884);BE();return;default:E$();}}C4().s(a,
b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,$p);}
function APU(a,b,c){return 0;}
function A5f(a,b){return 90.0;}
function A6t(a,b,c,d){return 0;}
function A88(a,b,c){return;}
function AOZ(a,b,c,d,e,f,g){var $p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:a.H6(b,c,d,e,f,g);if(C()){break _;}return;default:E$();}}C4().s(a,b,c,d,e,f,g,$p);}
function OP(){var a=this;DJ.call(a);a.A1=null;a.Aa=null;a.Ct=null;}
var Bln=null;function Bbe(){var a=new OP();AIa(a);return a;}
function AIa(a){Gr(a,Xv(0.0),0.5);a.A1=a.mG;a.Aa=Xv(1.0);a.Ct=Xv(0.5);}
function ARz(a,b,c){var d,e,f,g,h,i,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=AIj(b.K,3-c|0);if(d!==null){e=DL(d);if(e instanceof F5){f=e;b=new U;W(b);b=I(I(I(b,B(573)),Bln.data[f.BE]),B(574));g=R(c,2);b=V(I(Bf(b,g?1:2),B(515)));$p=1;continue _;}}return 0;case 1:AKs(a,b);if(C()){break _;}h=g?a.Aa:a.Ct;h.iY.iS=c?0:1;h.la.iS=c?0:1;b=h.ph;i=R(c,1);b.iS=i&&g?0:1;h.d1.iS=i?0:1;h.dO.iS=i?0:1;h.i$.iS
=g&&c!=3?0:1;h.hd.iS=g&&c!=3?0:1;a.kk=h;return 1;default:E$();}}C4().s(a,b,c,d,e,f,g,h,i,$p);}
function ADO(a,b,c,d,e,f,g){var $p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=d-b.c4;$p=1;case 1:AAc(a,b,c,d,e,f,g);if(C()){break _;}return;default:E$();}}C4().s(a,b,c,d,e,f,g,$p);}
function ALz(a){Ca(a.A1.d1,0.0625);}
function Y_(a,b,c){var $p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:$z=ARz(a,b,c);if(C()){break _;}c=$z;return c;default:E$();}}C4().s(a,b,c,$p);}
function AL5(a,b,c,d,e,f,g){var $p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:ADO(a,b,c,d,e,f,g);if(C()){break _;}return;default:E$();}}C4().s(a,b,c,d,e,f,g,$p);}
function ACN(a,b,c,d,e,f,g){var $p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:ADO(a,b,c,d,e,f,g);if(C()){break _;}return;default:E$();}}C4().s(a,b,c,d,e,f,g,$p);}
function AAg(){var b,c;b=J(B4,5);c=b.data;c[0]=B(239);c[1]=B(575);c[2]=B(576);c[3]=B(577);c[4]=B(578);Bln=b;}
function Lz(){var a=this;Gg.call(a);a.hA=0;a.i5=0;a.hR=0;a.h6=0;a.kp=null;a.cl=0;a.gB=0;a.yV=0;}
function Dj(a,b,c,d){var e=new Lz();A3g(e,a,b,c,d);return e;}
function Blo(a,b,c,d,e,f){var g=new Lz();SK(g,a,b,c,d,e,f);return g;}
function A3g(a,b,c,d,e){SK(a,b,c,d,200,20,e);}
function SK(a,b,c,d,e,f,g){Nf(a);a.hA=200;a.i5=20;a.gB=1;a.yV=1;a.cl=b;a.hR=c;a.h6=d;a.hA=e;a.i5=f;a.kp=g;}
function ACV(a,b,c,d){var e,f,g,h,i,j,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!a.yV)return;e=b.e_;f=3553;g=b.bo;b=B(506);$p=1;case 1:$z=AHv(g,b);if(C()){break _;}h=$z;Cp(f,h);BU(1.0,1.0,1.0,1.0);h=1;f=c>=a.hR&&d>=a.h6&&c<(a.hR+a.hA|0)&&d<(a.h6+a.i5|0)?1:0;if(!a.gB)h=0;else if(f)h=2;i=a.hR;j=a.h6;h=46+(h*20|0)|0;CH(a,i,j,0,h,a.hA/2|0,a.i5);CH(a,a.hR+(a.hA/2|0)|0,a.h6,200-(a.hA/2|0)|
0,h,a.hA/2|0,a.i5);if(!a.gB)DG(a,e,a.kp,a.hR+(a.hA/2|0)|0,a.h6+((a.i5-8|0)/2|0)|0,(-6250336));else if(!f)DG(a,e,a.kp,a.hR+(a.hA/2|0)|0,a.h6+((a.i5-8|0)/2|0)|0,14737632);else DG(a,e,a.kp,a.hR+(a.hA/2|0)|0,a.h6+((a.i5-8|0)/2|0)|0,16777120);return;default:E$();}}C4().s(a,b,c,d,e,f,g,h,i,j,$p);}
function R7(a,b,c){return a.gB&&b>=a.hR&&c>=a.h6&&b<(a.hR+a.hA|0)&&c<(a.h6+a.i5|0)?1:0;}
function L$(){D.call(this);}
function Blp(){var a=new L$();AVW(a);return a;}
function AVW(a){return;}
function Qw(){}
function Kt(){var a=this;L$.call(a);a.zV=null;a.H1=null;a.vd=0;a.Dm=0;a.nf=null;a.vL=null;}
function AEc(a){var b,c,d;a:{b=a.vd;c=a.Dm;d=0;switch(c){case 1:d=2;break a;case 2:d=4;break a;case 3:d=1;break a;default:}}c=b>>>6;return d|c&8|b<<2&16|c&32|b>>>8&64|b>>>5&128|b&256|b<<8&512|b<<10&1024|b<<1&2048;}
function ABm(a){return a.nf.oX();}
function WI(a,b){var c,d,e,f,g;if(a.vd&1){c=new LY;P(c);M(c);}if(a.vL===null){c=new Te;P(c);M(c);}d=b.data;e=d.length;if(e!=a.nf.data.length){c=new Cc;P(c);M(c);}f=0;while(true){if(f>=e){c=b.data;g=new a.zV.fW();a.vL.call(g,c);return g;}if(!F1(a.nf.data[f])&&d[f]!==null&&!UD(a.nf.data[f],d[f])){c=new Cc;P(c);M(c);}if(F1(a.nf.data[f])&&d[f]===null)break;f=f+1|0;}c=new Cc;P(c);M(c);}
function Ou(){}
function QD(){D.call(this);}
function Blq(){var a=new QD();A_c(a);return a;}
function A_c(a){return;}
function AJv(a){var b,c,d;Be();Bdy.requestPointerLock();b=B_();if(VT())clearTimeout(VT());MX(0);if(Long_lt(Long_sub(b,P1()),Long_fromInt(3000))){c=new Ty;c.Jk=a;d=3000-Long_sub(b,P1()).lo|0;MX(setTimeout(Cu(c,"onTimer"),d));}}
function A1B(a){AJv(a);}
function WM(){D.call(this);}
function Blr(){var a=new WM();AVo(a);return a;}
function AVo(a){return;}
function A4N(a,b,c){return b!==null?b.lQ(c): -c.lQ(b);}
function WK(){D.call(this);}
function Bls(){var a=new WK();A5H(a);return a;}
function A5H(a){return;}
function Sc(){Fb.call(this);}
function Blt(){var a=new Sc();A92(a);return a;}
function A92(a){return;}
function Sb(){FY.call(this);}
function Blu(){var a=new Sb();A97(a);return a;}
function A97(a){return;}
function Sd(){Gf.call(this);}
function Blv(){var a=new Sd();A3F(a);return a;}
function A3F(a){return;}
function ID(){D.call(this);this.rc=null;}
function AKz(a,b){var c,d,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.rc.Dj;$p=1;case 1:$z=AHv(c,b);if(C()){break _;}d=$z;Eb(c,d);return;default:E$();}}C4().s(a,b,c,d,$p);}
function A0O(a,b){a.rc=b;}
function ANC(a){return a.rc.yk;}
function AA5(){ID.call(this);this.EF=null;}
function Bce(){var a=new AA5();ATy(a);return a;}
function ATy(a){a.EF=BbK();}
function ARq(a,b,c,d,e,f){var g,h,i,j,k,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:B3();Bw(c+0.5,d+0.75,e+0.5);$p=1;case 1:$z=AMh(b);if(C()){break _;}g=$z;Bv( -((g*360|0)/16.0),0.0,1.0,0.0);h=B(579);$p=2;case 2:AKz(a,h);if(C()){break _;}B3();CC(1.0,(-1.0),(-1.0));ANa(a.EF);BE();Bw(0.0,0.5,0.09000000357627869);CC(0.01666666753590107,(-0.01666666753590107),0.01666666753590107);Cj(0.0,
0.0,(-0.01666666753590107));h=ANC(a);i=0;while(i<b.gt.data.length){j=b.gt.data[i];if(i!=b.rD)ED(h,j, -Dx(h,j)/2|0,(i*10|0)-(b.gt.data.length*5|0)|0,0);else{k=new U;W(k);j=V(I(I(I(k,B(580)),j),B(581)));ED(h,j, -Dx(h,j)/2|0,(i*10|0)-(b.gt.data.length*5|0)|0,0);}i=i+1|0;}BU(1.0,1.0,1.0,1.0);BE();return;default:E$();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function XF(a,b,c,d,e,f){var $p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:ARq(a,b,c,d,e,f);if(C()){break _;}return;default:E$();}}C4().s(a,b,c,d,e,f,$p);}
function Nz(){var a=this;D$.call(a);a.j0=0;a.jO=null;a.lK=0.0;a.mu=0.0;}
function Bcm(){var a=new Nz();A79(a);return a;}
function A79(a){a.j0=(-1);a.jO=B(582);a.mu=0.0;a.j0=20;}
function ZJ(a){return AGN(a.ch.bg,a.dK,a.dI,a.dR)>256.0?0:1;}
function AC5(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.mu=a.lK;if(ZJ(a)){b=a.dK+N(a.ch.q);c=a.dI+N(a.ch.q);d=a.dR+N(a.ch.q);BV(a.ch,B(256),b,c,d,0.0,0.0,0.0);BV(a.ch,B(257),b,c,d,0.0,0.0,0.0);a.lK=a.lK+1000.0/(a.j0+200.0);while(a.lK>360.0){a.lK=a.lK-360.0;a.mu=a.mu-360.0;}if(a.j0==(-1))NX(a);if(a.j0>0)a.j0
=a.j0-1|0;else{e=4;f=0;if(f<e){g=Jo(a.jO,a.ch);if(g===null)return;h=a.ch;i=Dl(g);j=Dw(D4(a.dK,a.dI,a.dR,a.dK+1|0,a.dI+1|0,a.dR+1|0),8.0,4.0,8.0);$p=1;continue _;}}}return;case 1:$z=ANf(h,i,j);if(C()){break _;}h=$z;if(h.s>=6){NX(a);return;}k=a.dK+(Cl(a.ch.q)-Cl(a.ch.q))*4.0;l=(a.dI+E(a.ch.q,3)|0)-1|0;m=a.dR+(Cl(a.ch.q)-Cl(a.ch.q))*4.0;Kv(g,k,l,m,N(a.ch.q)*360.0,0.0);$p=2;case 2:$z=g.uR(k,l,m);if(C()){break _;}n=$z;if(n){h=a.ch;$p=3;continue _;}f=f+1|0;if(f>=e)return;g=Jo(a.jO,a.ch);if(g===null)return;h=a.ch;i
=Dl(g);j=Dw(D4(a.dK,a.dI,a.dR,a.dK+1|0,a.dI+1|0,a.dR+1|0),8.0,4.0,8.0);$p=1;continue _;case 3:AOi(h,g);if(C()){break _;}o=0;while(o<20){c=a.dK+0.5+(N(a.ch.q)-0.5)*2.0;d=a.dI+0.5+(N(a.ch.q)-0.5)*2.0;k=a.dR+0.5+(N(a.ch.q)-0.5)*2.0;BV(a.ch,B(256),c,d,k,0.0,0.0,0.0);BV(a.ch,B(257),c,d,k,0.0,0.0,0.0);o=o+1|0;}AET(g);NX(a);f=f+1|0;if(f>=e)return;g=Jo(a.jO,a.ch);if(g===null)return;h=a.ch;i=Dl(g);j=Dw(D4(a.dK,a.dI,a.dR,a.dK+1|0,a.dI+1|0,a.dR+1|0),8.0,4.0,8.0);$p=1;continue _;default:E$();}}C4().s(a,b,c,d,e,f,g,h,i,
j,k,l,m,n,o,$p);}
function NX(a){a.j0=200+E(a.ch.q,600)|0;}
function AR1(){ID.call(this);this.wJ=null;}
function Bbt(){var a=new AR1();AXn(a);return a;}
function AXn(a){a.wJ=Df();}
function Z2(a,b,c,d,e,f){var g,h,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:B3();Bw(c+0.5,d,e+0.5);g=CP(a.wJ,b.jO);if(g===null){g=Jo(b.jO,null);BP(a.wJ,b.jO,g);}if(g===null){BE();return;}g.l=b.ch;Bw(0.0,0.4000000059604645,0.0);Bv((b.mu+(b.lK-b.mu)*f)*10.0,0.0,1.0,0.0);Bv((-30.0),1.0,0.0,0.0);Bw(0.0,(-0.4000000059604645),0.0);CC(0.4375,0.4375,0.4375);b=Bgh;c=0.0;d=0.0;e=0.0;h=0.0;$p=1;case 1:AQF(b,g,c,d,e,
h,f);if(C()){break _;}BE();return;default:E$();}}C4().s(a,b,c,d,e,f,g,h,$p);}
function ARf(a,b,c,d,e,f){var $p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:Z2(a,b,c,d,e,f);if(C()){break _;}return;default:E$();}}C4().s(a,b,c,d,e,f,$p);}
function AQk(){DJ.call(this);}
function A_S(){var a=new AQk();A4n(a);return a;}
function A4n(a){Gr(a,A5j(),1.0);a.kk=A5j();}
function A6j(a,b){return 180.0;}
function X1(a,b,c){var d,e,f,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(c)return 0;if(c)return 0;d=B(583);$p=1;case 1:AKs(a,d);if(C()){break _;}e=1.0;f=1.0;$p=2;case 2:$z=ADJ(b,f);if(C()){break _;}f=$z;f=(e-f)*0.5;Bb(3042);Bd(3008);Dg(770,771);BU(1.0,1.0,1.0,f);return 1;default:E$();}}C4().s(a,b,c,d,e,f,$p);}
function A6g(a,b){return 180.0;}
function Ye(a,b,c){var $p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:$z=X1(a,b,c);if(C()){break _;}c=$z;return c;default:E$();}}C4().s(a,b,c,$p);}
function Ua(){DJ.call(this);}
function AGe(a,b,c){var d,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=B(584);$p=1;case 1:AKs(a,d);if(C()){break _;}return !c&&b.qy?1:0;default:E$();}}C4().s(a,b,c,d,$p);}
function AMd(a,b,c){var $p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:$z=AGe(a,b,c);if(C()){break _;}c=$z;return c;default:E$();}}C4().s(a,b,c,$p);}
function F3(){var a=this;Eh.call(a);a.hc=null;a.hB=null;a.jK=null;a.jJ=null;a.jI=null;a.jL=null;}
function Blw(a,b){var c=new F3();KY(c,a,b);return c;}
function KY(a,b,c){var d,e;a.hc=BK(0,0);BG(a.hc,(-4.0),(-4.0),(-8.0),8,8,8,c);BJ(a.hc,0.0,18-b|0,(-6.0));a.hB=BK(28,8);BG(a.hB,(-5.0),(-10.0),(-7.0),10,16,8,c);BJ(a.hB,0.0,17-b|0,2.0);a.jK=BK(0,16);BG(a.jK,(-2.0),0.0,(-2.0),4,b,4,c);d=a.jK;e=24-b|0;BJ(d,(-3.0),e,7.0);a.jJ=BK(0,16);BG(a.jJ,(-2.0),0.0,(-2.0),4,b,4,c);BJ(a.jJ,3.0,e,7.0);a.jI=BK(0,16);BG(a.jI,(-2.0),0.0,(-2.0),4,b,4,c);BJ(a.jI,(-3.0),e,(-5.0));a.jL=BK(0,16);BG(a.jL,(-2.0),0.0,(-2.0),4,b,4,c);BJ(a.jL,3.0,e,(-5.0));}
function A9U(a,b,c,d,e,f,g){AJT(a,b,c,d,e,f,g);Ca(a.hc,g);Ca(a.hB,g);Ca(a.jK,g);Ca(a.jJ,g);Ca(a.jI,g);Ca(a.jL,g);}
function AJT(a,b,c,d,e,f,g){var h;a.hc.bX=e/57.2957763671875;a.hB.b1=1.5707963705062866;h=a.jK;b=b*0.6661999821662903;h.b1=BC(b)*1.399999976158142*c;h=a.jJ;d=b+3.1415927410125732;h.b1=BC(d)*1.399999976158142*c;a.jI.b1=BC(d)*1.399999976158142*c;a.jL.b1=BC(b)*1.399999976158142*c;}
function PZ(){F3.call(this);}
function BcG(){var a=new PZ();AYd(a);return a;}
function AYd(a){KY(a,6,0.0);}
function TI(){DJ.call(this);}
function AM4(a,b,c){var d,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=B(585);$p=1;case 1:AKs(a,d);if(C()){break _;}return !c&&!b.x7?1:0;default:E$();}}C4().s(a,b,c,d,$p);}
function ARt(a,b,c){var $p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:$z=AM4(a,b,c);if(C()){break _;}c=$z;return c;default:E$();}}C4().s(a,b,c,$p);}
function ACJ(){F3.call(this);}
function Bcd(){var a=new ACJ();A90(a);return a;}
function A90(a){KY(a,12,0.0);a.hc=BK(0,0);BG(a.hc,(-3.0),(-4.0),(-6.0),6,6,8,0.0);BJ(a.hc,0.0,6.0,(-8.0));a.hB=BK(28,8);BG(a.hB,(-4.0),(-10.0),(-7.0),8,16,6,0.0);BJ(a.hB,0.0,5.0,2.0);}
function ARi(){F3.call(this);}
function BbO(){var a=new ARi();AVb(a);return a;}
function AVb(a){KY(a,12,0.0);a.hc=BK(0,0);BG(a.hc,(-3.0),(-4.0),(-4.0),6,6,6,0.6000000238418579);BJ(a.hc,0.0,6.0,(-8.0));a.hB=BK(28,8);BG(a.hB,(-4.0),(-10.0),(-7.0),8,16,6,1.75);BJ(a.hB,0.0,5.0,2.0);a.jK=BK(0,16);BG(a.jK,(-2.0),0.0,(-2.0),4,6,4,0.5);BJ(a.jK,(-3.0),12.0,7.0);a.jJ=BK(0,16);BG(a.jJ,(-2.0),0.0,(-2.0),4,6,4,0.5);BJ(a.jJ,3.0,12.0,7.0);a.jI=BK(0,16);BG(a.jI,(-2.0),0.0,(-2.0),4,6,4,0.5);BJ(a.jI,(-3.0),12.0,(-5.0));a.jL=BK(0,16);BG(a.jL,(-2.0),0.0,(-2.0),4,6,4,0.5);BJ(a.jL,3.0,12.0,(-5.0));}
function AB_(){DJ.call(this);}
function Bb4(){var a=new AB_();AZK(a);return a;}
function AZK(a){Gr(a,BaP(),0.5);}
function ADE(a,b,c){var d,e,f;d=Qq(b,c);e=1.0+Bq(d*100.0)*d*0.009999999776482582;if(d<0.0)d=0.0;if(d>1.0)d=1.0;c=d*d;c=c*c;f=(1.0+c*0.4000000059604645)*e;CC(f,(1.0+c*0.10000000149011612)/e,f);}
function Yd(a,b,c,d){var e,f;e=Qq(b,d);if(!((e*10.0|0)%2|0))return 0;f=e*0.20000000298023224*255.0|0;if(f<0)f=0;if(f>255)f=255;return f<<24|16711680|65280|255;}
function A7S(a,b,c){ADE(a,b,c);}
function AZW(a,b,c,d){return Yd(a,b,c,d);}
function HS(){Mz.call(this);}
function Blx(){var a=new HS();A7$(a);return a;}
function A7$(a){KH(a);}
function A2I(a,b,c,d,e,f,g){var h,i,j;AIT(a,b,c,d,e,f,g);h=Bq(a.xX*3.1415927410125732);i=Bq((1.0-(1.0-a.xX)*(1.0-a.xX))*3.1415927410125732);a.d1.bU=0.0;a.dO.bU=0.0;j=a.d1;b=0.10000000149011612-h*0.6000000238418579;j.bX= -b;a.dO.bX=b;a.d1.b1=(-1.5707963705062866);a.dO.b1=(-1.5707963705062866);j=a.d1;b=j.b1;c=h*1.2000000476837158-i*0.4000000059604645;j.b1=b-c;j=a.dO;j.b1=j.b1-c;j=a.d1;b=j.bU;c=d*0.09000000357627869;j.bU=b+BC(c)*0.05000000074505806+0.05000000074505806;j=a.dO;j.bU=j.bU-(BC(c)*0.05000000074505806
+0.05000000074505806);j=a.d1;b=j.b1;c=d*0.06700000166893005;j.b1=b+Bq(c)*0.05000000074505806;j=a.dO;j.b1=j.b1-Bq(c)*0.05000000074505806;}
function AIo(){HS.call(this);}
function Bcr(){var a=new AIo();AWq(a);return a;}
function AWq(a){KH(a);a.d1=BK(40,16);BG(a.d1,(-1.0),(-2.0),(-1.0),2,12,2,0.0);BJ(a.d1,(-5.0),2.0,0.0);a.dO=BK(40,16);a.dO.lB=1;BG(a.dO,(-1.0),(-2.0),(-1.0),2,12,2,0.0);BJ(a.dO,5.0,2.0,0.0);a.i$=BK(0,16);BG(a.i$,(-1.0),0.0,(-1.0),2,12,2,0.0);BJ(a.i$,(-2.0),12.0,0.0);a.hd=BK(0,16);a.hd.lB=1;BG(a.hd,(-1.0),0.0,(-1.0),2,12,2,0.0);BJ(a.hd,2.0,12.0,0.0);}
function K$(){DP.call(this);}
function AO$(a,b,c,d){var e,f,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=a.l;$p=1;case 1:$z=ANi(e,b,c,d);if(C()){break _;}f=$z;return f-0.5;default:E$();}}C4().s(a,b,c,d,e,f,$p);}
function Uf(){DJ.call(this);this.tv=0.0;}
function Zw(a,b,c){CC(a.tv,a.tv,a.tv);}
function A$V(a,b,c){Zw(a,b,c);}
function TP(){Dh.call(this);}
function Bly(){var a=new TP();AZu(a);return a;}
function AZu(a){EG(a);}
function AJt(a,b,c,d,e,f,g){B3();A8m(b.L,c-b.cs,d-b.b7,e-b.ct);BE();}
function II(){var a=this;C6.call(a);a.rw=0;a.dJ=0;a.nq=0;a.EB=0;a.nx=0;a.dT=null;}
function JR(a,b){var c,d,e,f,g,h,i,j,k,l;a.dJ=b;c=b*90|0;a.u=c;a.P=c;c=a.dT.gd;d=a.dT.m6;e=a.dT.gd;if(b&&b!=2)c=0.5;else e=0.5;c=c/32.0;d=d/32.0;f=e/32.0;g=a.nq+0.5;h=a.EB+0.5;i=a.nx+0.5;if(!b)i=i-0.5625;j=R(b,1);if(!j)g=g-0.5625;k=R(b,2);if(!k)i=i+0.5625;l=R(b,3);if(!l)g=g+0.5625;if(!b)g=g-HP(a,a.dT.gd);if(!j)i=i+HP(a,a.dT.gd);if(!k)g=g+HP(a,a.dT.gd);if(!l)i=i-HP(a,a.dT.gd);e=h+HP(a,a.dT.m6);CU(a,g,e,i);M6(a.L,g-c+0.0062500000931322575,e-d+0.0062500000931322575,i-f+0.0062500000931322575,g+c+(-0.0062500000931322575),
e+d+(-0.0062500000931322575),i+f+(-0.0062500000931322575));}
function HP(a,b){return b==32?0.5:b!=64?0.0:0.5;}
function ADm(a){var b,c,d,e,f,g,h,i,j,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.rw;a.rw=b+1|0;if(b!=100)return;$p=1;case 1:$z=ZL(a);if(C()){break _;}c=$z;if(c)return;a.rw=0;$p=2;case 2:Cb(a);if(C()){break _;}d=a.l;e=new E9;f=a.l;g=a.d;h=a.j;i=a.e;j=new Cd;BB();DD(j,Biu);Hc(e,f,g,h,i,j);$p=3;case 3:AOi(d,e);if(C()){break _;}return;default:E$();}}C4().s(a,b,c,d,e,f,g,h,i,j,$p);}
function ZL(a){var b,c,d,e,f,g,h,i,j,k,l,m,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.l;c=a.L;$p=1;case 1:$z=XW(b,a,c);if(C()){break _;}b=$z;if(b.s>0)return 0;d=a.dT.gd/16|0;e=a.dT.m6/16|0;f=a.nq;g=a.nx;if(!a.dJ)f=K(a.d-a.dT.gd/32.0);if(a.dJ==1)g=K(a.e-a.dT.gd/32.0);if(a.dJ==2)f=K(a.d-a.dT.gd/32.0);if(a.dJ==3)g=K(a.e-a.dT.gd/32.0);h=K(a.j-a.dT.m6/32.0);i=0;while
(i<d){j=0;if(j<e){if(a.dJ&&a.dJ!=2){b=a.l;k=a.nq;l=h+j|0;m=g+i|0;$p=4;continue _;}b=a.l;k=f+i|0;l=h+j|0;m=a.nx;$p=3;continue _;}i=i+1|0;}b=a.l;c=a.L;$p=2;case 2:$z=ADM(b,a,c);if(C()){break _;}c=$z;k=0;while(k<c.s){if(Z(c,k) instanceof II)return 0;k=k+1|0;}return 1;case 3:$z=AB3(b,k,l,m);if(C()){break _;}b=$z;if(!b.dw())return 0;j=j+1|0;while(true){if(j<e){if(a.dJ&&a.dJ!=2){b=a.l;k=a.nq;l=h+j|0;m=g+i|0;$p=4;continue _;}b=a.l;k=f+i|0;l=h+j|0;m=a.nx;continue _;}i=i+1|0;if(i>=d)break;j=0;}b=a.l;c=a.L;$p=2;continue _;case 4:$z
=AB3(b,k,l,m);if(C()){break _;}b=$z;if(!b.dw())return 0;j=j+1|0;while(true){if(j<e){if(a.dJ&&a.dJ!=2){b=a.l;k=a.nq;l=h+j|0;m=g+i|0;continue _;}b=a.l;k=f+i|0;l=h+j|0;m=a.nx;$p=3;continue _;}i=i+1|0;if(i>=d)break;j=0;}b=a.l;c=a.L;$p=2;continue _;default:E$();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function AXQ(a){return 1;}
function AEs(a,b,c){var d,e,f,g,h,i,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:Cb(a);if(C()){break _;}d=a.l;b=new E9;e=a.l;f=a.d;g=a.j;h=a.e;i=new Cd;BB();DD(i,Biu);Hc(b,e,f,g,h,i);$p=2;case 2:AOi(d,b);if(C()){break _;}return 1;default:E$();}}C4().s(a,b,c,d,e,f,g,h,i,$p);}
function AAu(){Dh.call(this);this.Ib=null;}
function BbM(){var a=new AAu();AZA(a);return a;}
function AZA(a){EG(a);a.Ib=new DB;}
function AQc(a,b,c,d,e,f,g){var h,i,j,k,l,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:B3();Bw(c,d,e);Bv(f,0.0,1.0,0.0);Bb(32826);h=B(586);$p=1;case 1:AKs(a,h);if(C()){break _;}h=b.dT;CC(0.0625,0.0625,0.0625);i=h.gd;j=h.m6;k=h.zL;l=h.zK;$p=2;case 2:ACW(a,b,i,j,k,l);if(C()){break _;}Bd(32826);BE();return;default:E$();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,$p);}
function ACW(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();bi=$T.l();bh=$T.l();bg=$T.l();bf=$T.l();be=$T.l();bd=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g= -c/2.0;h= -d/
2.0;i=0;j=c/16|0;k=d/16|0;l=e+c|0;m=f+d|0;while(i<j){if(0<k){c=(i+1|0)*16|0;n=g+c;o=i*16|0;p=g+o;q=0+1|0;f=q*16|0;r=h+f;s=0*16|0;t=h+s;u=(n+p)/2.0;v=(r+t)/2.0;w=K(b.d);x=K(b.j+v/16.0);y=K(b.e);if(!b.dJ)w=K(b.d+u/16.0);if(b.dJ==1)y=K(b.e-u/16.0);if(b.dJ==2)w=K(b.d-u/16.0);if(b.dJ==3)y=K(b.e+u/16.0);z=a.iD.n1;$p=1;continue _;}i=i+1|0;}return;case 1:$z=ANi(z,w,x,y);if(C()){break _;}ba=$z;F8(ba,ba,ba);ba=(l-o|0)/256.0;u=(l-c|0)/256.0;v=(m-s|0)/256.0;bb=(m-f|0)/256.0;BA();z=BeE;Bz(z);Cj(0.0,0.0,(-1.0));bc=n;bd=t;be
=u;bf=v;G(z,bc,bd,(-0.5),be,bf);bg=p;bh=ba;G(z,bg,bd,(-0.5),bh,bf);bf=r;bi=bb;G(z,bg,bf,(-0.5),bh,bi);G(z,bc,bf,(-0.5),be,bi);Cj(0.0,0.0,1.0);G(z,bc,bf,0.5,0.75,0.0);G(z,bg,bf,0.5,0.8125,0.0);G(z,bg,bd,0.5,0.8125,0.0625);G(z,bc,bd,0.5,0.75,0.0625);Cj(0.0,(-1.0),0.0);G(z,bc,bf,(-0.5),0.75,0.001953125);G(z,bg,bf,(-0.5),0.8125,0.001953125);G(z,bg,bf,0.5,0.8125,0.001953125);G(z,bc,bf,0.5,0.75,0.001953125);Cj(0.0,1.0,0.0);G(z,bc,bd,0.5,0.75,0.001953125);G(z,bg,bd,0.5,0.8125,0.001953125);G(z,bg,bd,(-0.5),0.8125,0.001953125);G(z,
bc,bd,(-0.5),0.75,0.001953125);Cj((-1.0),0.0,0.0);G(z,bc,bf,0.5,0.751953125,0.0);G(z,bc,bd,0.5,0.751953125,0.0625);G(z,bc,bd,(-0.5),0.751953125,0.0625);G(z,bc,bf,(-0.5),0.751953125,0.0);Cj(1.0,0.0,0.0);G(z,bg,bf,(-0.5),0.751953125,0.0);G(z,bg,bd,(-0.5),0.751953125,0.0625);G(z,bg,bd,0.5,0.751953125,0.0625);G(z,bg,bf,0.5,0.751953125,0.0);Bs(z);s=q;while(true){if(s<k){c=(i+1|0)*16|0;n=g+c;o=i*16|0;p=g+o;q=s+1|0;f=q*16|0;r=h+f;s=s*16|0;t=h+s;u=(n+p)/2.0;v=(r+t)/2.0;w=K(b.d);x=K(b.j+v/16.0);y=K(b.e);if(!b.dJ)w=K(b.d
+u/16.0);if(b.dJ==1)y=K(b.e-u/16.0);if(b.dJ==2)w=K(b.d-u/16.0);if(b.dJ==3)y=K(b.e+u/16.0);z=a.iD.n1;continue _;}i=i+1|0;if(i>=j)break;s=0;}return;default:E$();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,$p);}
function AOT(a,b,c,d,e,f,g){var $p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:AQc(a,b,c,d,e,f,g);if(C()){break _;}return;default:E$();}}C4().s(a,b,c,d,e,f,g,$p);}
function Jv(){var a=this;C6.call(a);a.sy=0;a.s4=0;a.rI=0;a.vS=0;a.pj=0;a.lp=0;a.sn=null;a.p2=0;a.m9=0;}
function ATb(a,b){var c=new Jv();AZa(c,a,b);return c;}
function AZa(a,b,c){FC(a,b);a.sy=(-1);a.s4=(-1);a.rI=(-1);a.vS=0;a.pj=0;a.lp=0;a.m9=0;a.sn=c;D2(a,0.5,0.5);Kv(a,c.d,c.j,c.e,c.u,c.I);a.d=a.d-BC(a.u/180.0*3.1415927410125732)*0.1599999964237213;a.j=a.j-0.10000000149011612;a.e=a.e-Bq(a.u/180.0*3.1415927410125732)*0.1599999964237213;CU(a,a.d,a.j,a.e);a.c4=0.0;a.g= -Bq(a.u/180.0*3.1415927410125732)*BC(a.I/180.0*3.1415927410125732);a.h=BC(a.u/180.0*3.1415927410125732)*BC(a.I/180.0*3.1415927410125732);a.i= -Bq(a.I/180.0*3.1415927410125732);QH(a,a.g,a.i,a.h,1.5,1.0);}
function QH(a,b,c,d,e,f){var g,h,i;g=Ce(b*b+c*c+d*d);b=b/g;c=c/g;d=d/g;g=C0(a.m)*0.007499999832361937;h=f;b=b+g*h;c=c+C0(a.m)*0.007499999832361937*h;d=d+C0(a.m)*0.007499999832361937*h;g=e;b=b*g;c=c*g;d=d*g;a.g=b;a.i=c;a.h=d;i=Ce(b*b+d*d);e=CR(b,d)*180.0/3.1415927410125732;a.u=e;a.P=e;e=CR(c,i)*180.0/3.1415927410125732;a.I=e;a.T=e;a.p2=0;}
function APv(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AI$(a);if(C()){break _;}if(a.lp>0)a.lp=a.lp-1|0;if(a.pj){b=a.l;c=a.sy;d=a.s4;e=a.rI;$p=2;continue _;}a.m9=a.m9+1|0;b=BY(a.d,a.j,a.e);f=BY(a.d+a.g,a.j+a.i,a.e+a.h);g=a.l;$p=3;continue _;case 2:$z=ACy(b,c,d,e);if(C()){break _;}c=$z;if
(c==a.vS){a.p2=a.p2+1|0;if(a.p2!=1200)return;$p=4;continue _;}a.pj=0;a.g=a.g*N(a.m)*0.20000000298023224;a.i=a.i*N(a.m)*0.20000000298023224;a.h=a.h*N(a.m)*0.20000000298023224;a.p2=0;a.m9=0;b=BY(a.d,a.j,a.e);f=BY(a.d+a.g,a.j+a.i,a.e+a.h);g=a.l;$p=3;case 3:$z=AJm(g,b,f);if(C()){break _;}g=$z;b=BY(a.d,a.j,a.e);f=BY(a.d+a.g,a.j+a.i,a.e+a.h);if(g!==null)f=BY(g.gy.x,g.gy.z,g.gy.w);h=null;i=a.l;j=Dw(Jh(a.L,a.g,a.i,a.h),1.0,1.0,1.0);$p=5;continue _;case 4:Cb(a);if(C()){break _;}return;case 5:$z=ADM(i,a,j);if(C()){break _;}i
=$z;k=0.0;d=0;while(d<CY(i)){j=Z(i,d);if(j.lu()&&!(j===a.sn&&a.m9<5)){l=QV(Dw(j.L,0.30000001192092896,0.30000001192092896,0.30000001192092896),b,f);if(l!==null){m=DI(b,l.gy);if(!(m>=k&&k!==0.0)){h=j;k=m;}}}d=d+1|0;}if(h!==null)g=A1a(h);if(g!==null){if(g.nC!==null){b=g.nC;f=a.sn;c=4;$p=7;continue _;}a.sy=g.h9;a.s4=g.h$;a.rI=g.h_;b=a.l;c=a.sy;d=a.s4;e=a.rI;$p=6;continue _;}a.d=a.d+a.g;a.j=a.j+a.i;a.e=a.e+a.h;n=Ce(a.g*a.g+a.h*a.h);a.u=CR(a.g,a.h)*180.0/3.1415927410125732;a.I=CR(a.i,n)*180.0/3.1415927410125732;while
(a.I-a.T<(-180.0)){a.T=a.T-360.0;}while(a.I-a.T>=180.0){a.T=a.T+360.0;}while(a.u-a.P<(-180.0)){a.P=a.P-360.0;}while(a.u-a.P>=180.0){a.P=a.P+360.0;}a.I=a.T+(a.I-a.T)*0.20000000298023224;a.u=a.P+(a.u-a.P)*0.20000000298023224;o=0.9900000095367432;$p=9;continue _;case 6:$z=ACy(b,c,d,e);if(C()){break _;}c=$z;a.vS=c;a.g=g.gy.x-a.d;a.i=g.gy.z-a.j;a.h=g.gy.w-a.e;n=Ce(a.g*a.g+a.i*a.i+a.h*a.h);k=a.d;m=a.g;p=n;a.d=k-m/p*0.05000000074505806;a.j=a.j-a.i/p*0.05000000074505806;a.e=a.e-a.h/p*0.05000000074505806;Di(a.l,a,B(587),
1.0,1.2000000476837158/(N(a.m)*0.20000000298023224+0.8999999761581421));a.pj=1;a.lp=7;a.d=a.d+a.g;a.j=a.j+a.i;a.e=a.e+a.h;n=Ce(a.g*a.g+a.h*a.h);a.u=CR(a.g,a.h)*180.0/3.1415927410125732;a.I=CR(a.i,n)*180.0/3.1415927410125732;while(a.I-a.T<(-180.0)){a.T=a.T-360.0;}while(a.I-a.T>=180.0){a.T=a.T+360.0;}while(a.u-a.P<(-180.0)){a.P=a.P-360.0;}while(a.u-a.P>=180.0){a.P=a.P+360.0;}a.I=a.T+(a.I-a.T)*0.20000000298023224;a.u=a.P+(a.u-a.P)*0.20000000298023224;o=0.9900000095367432;$p=9;continue _;case 7:$z=b.fr(f,c);if(C())
{break _;}c=$z;if(c){Di(a.l,a,B(587),1.0,1.2000000476837158/(N(a.m)*0.20000000298023224+0.8999999761581421));$p=8;continue _;}a.g=a.g*(-0.10000000149011612);a.i=a.i*(-0.10000000149011612);a.h=a.h*(-0.10000000149011612);a.u=a.u+180.0;a.P=a.P+180.0;a.m9=0;a.d=a.d+a.g;a.j=a.j+a.i;a.e=a.e+a.h;n=Ce(a.g*a.g+a.h*a.h);a.u=CR(a.g,a.h)*180.0/3.1415927410125732;a.I=CR(a.i,n)*180.0/3.1415927410125732;while(a.I-a.T<(-180.0)){a.T=a.T-360.0;}while(a.I-a.T>=180.0){a.T=a.T+360.0;}while(a.u-a.P<(-180.0)){a.P=a.P-360.0;}while
(a.u-a.P>=180.0){a.P=a.P+360.0;}a.I=a.T+(a.I-a.T)*0.20000000298023224;a.u=a.P+(a.u-a.P)*0.20000000298023224;o=0.9900000095367432;$p=9;continue _;case 8:Cb(a);if(C()){break _;}a.d=a.d+a.g;a.j=a.j+a.i;a.e=a.e+a.h;n=Ce(a.g*a.g+a.h*a.h);a.u=CR(a.g,a.h)*180.0/3.1415927410125732;a.I=CR(a.i,n)*180.0/3.1415927410125732;while(a.I-a.T<(-180.0)){a.T=a.T-360.0;}while(a.I-a.T>=180.0){a.T=a.T+360.0;}while(a.u-a.P<(-180.0)){a.P=a.P-360.0;}while(a.u-a.P>=180.0){a.P=a.P+360.0;}a.I=a.T+(a.I-a.T)*0.20000000298023224;a.u=a.P+(a.u
-a.P)*0.20000000298023224;o=0.9900000095367432;$p=9;case 9:$z=AE8(a);if(C()){break _;}c=$z;if(c){e=0;while(e<4){BV(a.l,B(213),a.d-a.g*0.25,a.j-a.i*0.25,a.e-a.h*0.25,a.g,a.i,a.h);e=e+1|0;}o=0.800000011920929;}k=a.g;m=o;a.g=k*m;a.i=a.i*m;a.h=a.h*m;a.i=a.i-0.029999999329447746;CU(a,a.d,a.j,a.e);return;default:E$();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,$p);}
function A7x(a,b){var c,d;if(a.pj&&a.sn===b&&a.lp<=0){c=b.K;d=new Cd;BB();MN(d,Bf8.cW,1);if(Ve(c,d)){Di(a.l,a,B(588),0.20000000298023224,((N(a.m)-N(a.m))*0.699999988079071+1.0)*2.0);R0(b,a);Cb(a);}}}
function RA(){Dh.call(this);}
function Blz(){var a=new RA();ASX(a);return a;}
function ASX(a){EG(a);}
function AJW(a,b,c,d,e,f,g){var h,i,j,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:h=B(589);$p=1;case 1:AKs(a,h);if(C()){break _;}B3();Bw(c,d,e);Bv(b.P+(b.u-b.P)*g-90.0,0.0,1.0,0.0);Bv(b.T+(b.I-b.T)*g,0.0,0.0,1.0);BA();h=BeE;Bb(32826);i=b.lp-g;if(i>0.0)Bv( -Bq(i*3.0)*i,0.0,0.0,1.0);Bv(45.0,1.0,0.0,0.0);CC(0.05624999850988388,0.05624999850988388,0.05624999850988388);Bw((-4.0),0.0,0.0);Cj(0.05624999850988388,
0.0,0.0);Bz(h);G(h,(-7.0),(-2.0),(-2.0),0.0,0.15625);G(h,(-7.0),(-2.0),2.0,0.15625,0.15625);G(h,(-7.0),2.0,2.0,0.15625,0.3125);G(h,(-7.0),2.0,(-2.0),0.0,0.3125);Bs(h);Cj((-0.05624999850988388),0.0,0.0);Bz(h);G(h,(-7.0),2.0,(-2.0),0.0,0.15625);G(h,(-7.0),2.0,2.0,0.15625,0.15625);G(h,(-7.0),(-2.0),2.0,0.15625,0.3125);G(h,(-7.0),(-2.0),(-2.0),0.0,0.3125);Bs(h);j=0;while(j<4){Bv(90.0,1.0,0.0,0.0);Cj(0.0,0.0,0.05624999850988388);Bz(h);G(h,(-8.0),(-2.0),0.0,0.0,0.0);G(h,8.0,(-2.0),0.0,0.5,0.0);G(h,8.0,2.0,0.0,0.5,
0.15625);G(h,(-8.0),2.0,0.0,0.0,0.15625);Bs(h);j=j+1|0;}Bd(32826);BE();return;default:E$();}}C4().s(a,b,c,d,e,f,g,h,i,j,$p);}
function ADk(a,b,c,d,e,f,g){var $p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:AJW(a,b,c,d,e,f,g);if(C()){break _;}return;default:E$();}}C4().s(a,b,c,d,e,f,g,$p);}
function E9(){var a=this;C6.call(a);a.ng=null;a.zr=0;a.mL=0;a.g$=0;a.q4=0;a.yx=0.0;}
function Hd(a,b,c,d,e){var f=new E9();Hc(f,a,b,c,d,e);return f;}
function Hc(a,b,c,d,e,f){FC(a,b);a.mL=0;a.q4=5;a.yx=BO()*3.141592653589793*2.0;D2(a,0.25,0.25);a.c4=a.eO/2.0;CU(a,c,d,e);a.ng=f;a.u=BO()*360.0;a.g=BO()*0.20000000298023224-0.10000000149011612;a.i=0.20000000298023224;a.h=BO()*0.20000000298023224-0.10000000149011612;a.i9=0;}
function AJF(a){var b,c,d,e,f,g,h,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:a.Je();if(C()){break _;}if(a.g$>0)a.g$=a.g$-1|0;a.bS=a.d;a.cS=a.j;a.bR=a.e;a.i=a.i-0.03999999910593033;b=a.l;c=K(a.d);d=K(a.j);e=K(a.e);$p=2;case 2:$z=AB3(b,c,d,e);if(C()){break _;}b=$z;if(b===BfK){a.i=0.20000000298023224;a.g=(N(a.m)-N(a.m))*0.20000000298023224;a.h=(N(a.m)-N(a.m))*0.20000000298023224;Di(a.l,a,B(215),0.4000000059604645,
2.0+N(a.m)*0.4000000059604645);}f=a.d;g=a.j;h=a.e;$p=3;case 3:ACI(a,f,g,h);if(C()){break _;}$p=4;case 4:AEg(a);if(C()){break _;}f=a.g;g=a.i;h=a.h;$p=5;case 5:ARG(a,f,g,h);if(C()){break _;}a.g=a.g*0.9800000190734863;a.i=a.i*0.9800000190734863;a.h=a.h*0.9800000190734863;if(a.cx){a.g=a.g*0.699999988079071;a.h=a.h*0.699999988079071;a.i=a.i*(-0.5);}a.zr=a.zr+1|0;a.mL=a.mL+1|0;if(a.mL<6000)return;$p=6;case 6:Cb(a);if(C()){break _;}return;default:E$();}}C4().s(a,b,c,d,e,f,g,h,$p);}
function AEg(a){var b,c,d,e,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.l;c=a.L;d=BfJ;$p=1;case 1:$z=AAv(b,c,d,a);if(C()){break _;}e=$z;return e;default:E$();}}C4().s(a,b,c,d,e,$p);}
function ACI(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=K(b);f=K(c);g=K(d);h=b-e;i=c-f;j=d-g;L();k=Bgt.data;l=a.l;$p=1;case 1:$z=ACy(l,e,f,g);if(C()){break _;}m=$z;if(!k[m])return 0;k=Bgt.data;l=a.l;m=e-1|0;$p=2;case 2:$z=ACy(l,m,f,g);if(C())
{break _;}m=$z;n=k[m]?0:1;k=Bgt.data;l=a.l;m=e+1|0;$p=3;case 3:$z=ACy(l,m,f,g);if(C()){break _;}m=$z;o=k[m]?0:1;k=Bgt.data;l=a.l;m=f-1|0;$p=4;case 4:$z=ACy(l,e,m,g);if(C()){break _;}m=$z;p=k[m]?0:1;k=Bgt.data;l=a.l;m=f+1|0;$p=5;case 5:$z=ACy(l,e,m,g);if(C()){break _;}m=$z;q=k[m]?0:1;k=Bgt.data;l=a.l;m=g-1|0;$p=6;case 6:$z=ACy(l,e,f,m);if(C()){break _;}m=$z;m=k[m]?0:1;k=Bgt.data;l=a.l;r=g+1|0;$p=7;case 7:$z=ACy(l,e,f,r);if(C()){break _;}e=$z;r=k[e]?0:1;s=(-1);t=9999.0;if(n&&h<t){s=0;t=h;}if(!o)b=t;else{b=1.0
-h;if(b<t)s=1;else b=t;}if(p&&i<b){s=2;b=i;}if(!q)c=b;else{c=1.0-i;if(c<b)s=3;else c=b;}if(m&&j<c){s=4;c=j;}if(r&&1.0-j<c)s=5;u=N(a.m)*0.20000000298023224+0.10000000149011612;if(!s)a.g= -u;if(s==1)a.g=u;if(s==2)a.i= -u;if(s==3)a.i=u;if(s==4)a.h= -u;if(s==5)a.h=u;return 0;default:E$();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,$p);}
function AMw(a,b){Vm(a,null,b);}
function Vm(a,b,c){a.q4=a.q4-c|0;if(a.q4<=0)Cb(a);return 0;}
function A$$(a,b){if(!a.g$&&Ve(b.K,a.ng)){Di(a.l,a,B(588),0.20000000298023224,((N(a.m)-N(a.m))*0.699999988079071+1.0)*2.0);R0(b,a);Cb(a);}}
function Mr(){C6.call(this);this.hq=0;}
function AWR(a,b,c,d){var e=new Mr();A6u(e,a,b,c,d);return e;}
function A6u(a,b,c,d,e){var f,g,h;FC(a,b);a.hq=0;a.mD=1;D2(a,0.9800000190734863,0.9800000190734863);a.c4=a.eO/2.0;f=c;g=d;h=e;CU(a,f,g,h);e=BO()*3.1415927410125732*2.0*3.1415927410125732/180.0;a.g= -Bq(e)*0.019999999552965164;a.i=0.20000000298023224;a.h= -BC(e)*0.019999999552965164;a.i9=0;a.hq=80;a.bS=f;a.cS=g;a.bR=h;}
function A9$(a){return a.cR?0:1;}
function XL(a){var b,c,d,e,f,g,h,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.bS=a.d;a.cS=a.j;a.bR=a.e;a.i=a.i-0.03999999910593033;b=a.g;c=a.i;d=a.h;$p=1;case 1:ARG(a,b,c,d);if(C()){break _;}a.g=a.g*0.9800000190734863;a.i=a.i*0.9800000190734863;a.h=a.h*0.9800000190734863;if(a.cx){a.g=a.g*0.699999988079071;a.h=a.h*0.699999988079071;a.i=a.i*(-0.5);}e=a.hq;a.hq=e-1|0;if(e>0){BV(a.l,B(256),a.d,a.j+0.5,a.e,0.0,
0.0,0.0);return;}$p=2;case 2:Cb(a);if(C()){break _;}f=4.0;g=a.l;h=null;b=a.d;c=a.j;d=a.e;$p=3;case 3:Yb(g,h,b,c,d,f);if(C()){break _;}return;default:E$();}}C4().s(a,b,c,d,e,f,g,h,$p);}
function AOX(){Dh.call(this);this.wf=null;}
function Bai(){var a=new AOX();A7c(a);return a;}
function A7c(a){EG(a);a.wf=Kk();a.mb=0.5;}
function APz(a,b,c,d,e,f,g){var h,i,j,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:B3();Bw(c,d,e);if(b.hq-g+1.0<10.0){h=1.0-(b.hq-g+1.0)/10.0;if(h<0.0)h=0.0;if(h>1.0)h=1.0;f=h*h;i=1.0+f*f*0.30000001192092896;CC(i,i,i);}h=(1.0-(b.hq-g+1.0)/100.0)*0.800000011920929;j=B(179);$p=1;case 1:AKs(a,j);if(C()){break _;}j=a.wf;L();GW(j,Bfd);if(!((b.hq/5|0)%2|0)){Bd(3553);Bd(2896);Bb(3042);Dg(770,772);BU(1.0,
1.0,1.0,h);GW(a.wf,Bfd);BU(1.0,1.0,1.0,1.0);Bd(3042);Bb(2896);Bb(3553);}BE();return;default:E$();}}C4().s(a,b,c,d,e,f,g,h,i,j,$p);}
function AL8(a,b,c,d,e,f,g){var $p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:APz(a,b,c,d,e,f,g);if(C()){break _;}return;default:E$();}}C4().s(a,b,c,d,e,f,g,$p);}
function JO(){var a=this;C6.call(a);a.hS=0;a.oO=0;}
function AYj(a){return a.cR?0:1;}
function AMP(a){var b,c,d,e,f,g,h,i,j,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!a.hS){$p=3;continue _;}a.bS=a.d;a.cS=a.j;a.bR=a.e;a.oO=a.oO+1|0;a.i=a.i-0.03999999910593033;b=a.g;c=a.i;d=a.h;$p=1;case 1:ARG(a,b,c,d);if(C()){break _;}a.g=a.g*0.9800000190734863;a.i=a.i*0.9800000190734863;a.h=a.h*0.9800000190734863;e=K(a.d);f=K(a.j);g=K(a.e);h=a.l;$p=2;case 2:$z=ACy(h,e,f,g);if(C()){break _;}i
=$z;if(i==a.hS){h=a.l;i=0;$p=4;continue _;}if(!a.cx){if(a.oO<=100)return;e=a.hS;f=1;$p=7;continue _;}a.g=a.g*0.699999988079071;a.h=a.h*0.699999988079071;a.i=a.i*(-0.5);$p=5;continue _;case 3:Cb(a);if(C()){break _;}return;case 4:APy(h,e,f,g,i);if(C()){break _;}if(!a.cx){if(a.oO<=100)return;e=a.hS;f=1;$p=7;continue _;}a.g=a.g*0.699999988079071;a.h=a.h*0.699999988079071;a.i=a.i*(-0.5);$p=5;case 5:Cb(a);if(C()){break _;}h=a.l;i=a.hS;j=1;$p=6;case 6:$z=AH_(h,i,e,f,g,j);if(C()){break _;}i=$z;if(!i){e=a.hS;f=1;$p=
9;continue _;}h=a.l;i=a.hS;$p=10;continue _;case 7:ABW(a,e,f);if(C()){break _;}$p=8;case 8:Cb(a);if(C()){break _;}return;case 9:ABW(a,e,f);if(C()){break _;}return;case 10:$z=APy(h,e,f,g,i);if(C()){break _;}e=$z;if(e)return;e=a.hS;f=1;$p=9;continue _;default:E$();}}C4().s(a,b,c,d,e,f,g,h,i,j,$p);}
function AX1(a){return a.l;}
function AQP(){Dh.call(this);this.DA=null;}
function Baa(){var a=new AQP();AXt(a);return a;}
function AXt(a){EG(a);a.DA=Kk();a.mb=0.5;}
function AQj(a,b,c,d,e,f,g){var h,i,j,k,l,m,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:B3();Bw(c,d,e);h=B(179);$p=1;case 1:AKs(a,h);if(C()){break _;}L();h=BeI.data[b.hS];i=b.l;Bd(2896);j=a.DA;k=K(b.d);l=K(b.j);m=K(b.e);$p=2;case 2:AI1(j,h,i,k,l,m);if(C()){break _;}Bb(2896);BE();return;default:E$();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function ARm(a,b,c,d,e,f,g){var $p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:AQj(a,b,c,d,e,f,g);if(C()){break _;}return;default:E$();}}C4().s(a,b,c,d,e,f,g,$p);}
function Gh(){var a=this;C6.call(a);a.Br=null;a.iT=0;a.kB=0;a.oN=0;a.kM=0;}
var BlA=null;function AST(a,b){return b.L;}
function AZ2(a){return a.L;}
function A7A(a){return 1;}
function AVQ(a){return a.eO*0.2;}
function ALh(a,b,c){var d,e,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.oN= -a.oN;a.kB=10;a.iT=a.iT+(c*10|0)|0;if(a.iT<=40)return 1;BB();c=BiA.cW;d=1;e=0.0;$p=1;case 1:AGH(a,c,d,e);if(C()){break _;}$p=2;case 2:APh(a);if(C()){break _;}return 1;default:E$();}}C4().s(a,b,c,d,e,$p);}
function A9G(a){return a.cR?0:1;}
function APh(a){var b,c,d,e,f,g,h,i,j,k,l,m,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=0;c=27;while(b<c){d=TY(a,b);if(d!==null){e=N(a.m)*0.800000011920929+0.10000000149011612;f=N(a.m)*0.800000011920929+0.10000000149011612;g=N(a.m)*0.800000011920929+0.10000000149011612;h=e;i=f;j=g;if(d.p>0){k=E(a.m,21)+10|0;if(k>d.p)k=d.p;d.p=d.p-k|0;l=Hd(a.l,a.d+h,a.j+i,a.e+j,
Or(d.bA,k,d.en));l.g=C0(a.m)*0.05000000074505806;l.i=C0(a.m)*0.05000000074505806+0.20000000298023224;l.h=C0(a.m)*0.05000000074505806;m=a.l;$p=2;continue _;}}b=b+1|0;}$p=1;case 1:Cb(a);if(C()){break _;}return;case 2:AOi(m,l);if(C()){break _;}a:while(true){if(d.p>0){k=E(a.m,21)+10|0;if(k>d.p)k=d.p;d.p=d.p-k|0;l=Hd(a.l,a.d+h,a.j+i,a.e+j,Or(d.bA,k,d.en));l.g=C0(a.m)*0.05000000074505806;l.i=C0(a.m)*0.05000000074505806+0.20000000298023224;l.h=C0(a.m)*0.05000000074505806;m=a.l;continue _;}while(true){b=b+1|0;if(b>=
c)break a;d=TY(a,b);if(d===null)continue;else break;}e=N(a.m)*0.800000011920929+0.10000000149011612;f=N(a.m)*0.800000011920929+0.10000000149011612;g=N(a.m)*0.800000011920929+0.10000000149011612;h=e;i=f;j=g;}$p=1;continue _;default:E$();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function ASI(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();bd=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.kB>0)a.kB=a.kB-1|0;if(a.iT>0)a.iT=a.iT-1|0;a.bS=a.d;a.cS=a.j;a.bR=a.e;a.i=a.i
-0.03999999910593033;b=K(a.d);c=K(a.j);d=K(a.e);e=a.l;f=c-1|0;$p=1;case 1:$z=ACy(e,b,f,d);if(C()){break _;}f=$z;L();if(f==Bg1.b)c=c+(-1)|0;g=0.4;h=0.0078125;e=a.l;$p=2;case 2:$z=ACy(e,b,c,d);if(C()){break _;}f=$z;if(f==Bg1.b){i=a.d;j=a.j;k=a.e;$p=3;continue _;}if(a.g<(-0.4))a.g=(-0.4);if(a.g>g)a.g=g;if(a.h<(-0.4))a.h=(-0.4);if(a.h>g)a.h=g;if(a.cx){a.g=a.g*0.5;a.i=a.i*0.5;a.h=a.h*0.5;}i=a.g;j=a.i;k=a.h;$p=5;continue _;case 3:$z=ASm(a,i,j,k);if(C()){break _;}l=$z;e=a.l;$p=4;case 4:$z=AEL(e,b,c,d);if(C()){break _;}m
=$z;a.j=c;n=R(m,2);if(n>=0&&m<=5)a.j=c+1|0;if(!n)a.g=a.g-h;if(m==3)a.g=a.g+h;if(m==4)a.h=a.h+h;if(m==5)a.h=a.h-h;o=BlA.data[m].data;p=o[1].data[0]-o[0].data[0]|0;q=o[1].data[2]-o[0].data[2]|0;r=Ed(p*p+q*q);if(a.g*p+a.h*q<0.0){p= -p;q= -q;}s=Ed(a.g*a.g+a.h*a.h);a.g=s*p/r;a.h=s*q/r;t=b;u=t+0.5;v=u+o[0].data[0]*0.5;w=d;p=w+0.5;i=p+o[0].data[2]*0.5;j=u+o[1].data[0]*0.5;k=p+o[1].data[2]*0.5;j=j-v;k=k-i;if(j===0.0){a.d=u;u=a.e-w;}else if(k===0.0){a.e=p;u=a.d-t;}else u=((a.d-v)*j+(a.e-i)*k)*2.0;a.d=v+j*u;a.e=i+k*u;CU(a,
a.d,a.j+a.c4,a.e);x=a.g;t=a.h;if(a.bH!==null){x=x*0.75;t=t*0.75;}i=(-0.4);if(x<i)x=i;if(x>g)x=g;if(t>=i)i=t;if(i<=g)g=i;i=0.0;$p=7;continue _;case 5:ARG(a,i,j,k);if(C()){break _;}if(!a.cx){a.g=a.g*0.949999988079071;a.i=a.i*0.949999988079071;a.h=a.h*0.949999988079071;}a.I=0.0;y=a.bS-a.d;z=a.bR-a.e;if(y*y+z*z>0.001){a.u=CR(z,y)*180.0/3.141592653589793;if(a.kM)a.u=a.u+180.0;}ba=a.u-a.P;while(ba>=180.0){ba=ba-360.0;}while(ba<(-180.0)){ba=ba+360.0;}if(!(ba>=(-170.0)&&ba<170.0)){a.u=a.u+180.0;a.kM=a.kM?0:1;}WU(a,
a.u,a.I);e=a.l;l=Dw(a.L,0.20000000298023224,0.0,0.20000000298023224);$p=6;case 6:a:{$z=ADM(e,a,l);if(C()){break _;}bb=$z;if(bb!==null&&CY(bb)>0){bc=0;while(true){if(bc>=CY(bb))break a;bd=Z(bb,bc);if(bd!==a.bH&&bd.rS()&&bd instanceof Gh)bd.uY(a);bc=bc+1|0;}}}if(a.bH!==null&&a.bH.cR)a.bH=null;return;case 7:ARG(a,x,i,g);if(C()){break _;}if(o[0].data[1]&&(K(a.d)-b|0)==o[0].data[0]&&(K(a.e)-d|0)==o[0].data[2])CU(a,a.d,a.j+o[0].data[1],a.e);else if(o[1].data[1]&&(K(a.d)-b|0)==o[1].data[0]&&(K(a.e)-d|0)==o[1].data[2])CU(a,
a.d,a.j+o[1].data[1],a.e);if(a.bH===null){a.g=a.g*0.9599999785423279;a.i=a.i*0.0;a.h=a.h*0.9599999785423279;}else{a.g=a.g*0.996999979019165;a.i=a.i*0.0;a.h=a.h*0.996999979019165;}i=a.d;j=a.j;k=a.e;$p=8;case 8:$z=ASm(a,i,j,k);if(C()){break _;}e=$z;if(e!==null&&l!==null){w=(l.z-e.z)*0.05;i=Ed(a.g*a.g+a.h*a.h);if(i>0.0){j=a.g/i;k=i+w;a.g=j*k;a.h=a.h/i*k;}CU(a,a.d,e.z,a.e);}f=K(a.d);n=K(a.e);if(!(f==b&&n==d)){i=Ed(a.g*a.g+a.h*a.h);a.g=i*(f-b|0);a.h=i*(n-d|0);}a.I=0.0;y=a.bS-a.d;z=a.bR-a.e;if(y*y+z*z>0.001){a.u=
CR(z,y)*180.0/3.141592653589793;if(a.kM)a.u=a.u+180.0;}ba=a.u-a.P;while(ba>=180.0){ba=ba-360.0;}while(ba<(-180.0)){ba=ba+360.0;}if(!(ba>=(-170.0)&&ba<170.0)){a.u=a.u+180.0;a.kM=a.kM?0:1;}WU(a,a.u,a.I);e=a.l;l=Dw(a.L,0.20000000298023224,0.0,0.20000000298023224);$p=6;continue _;default:E$();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,$p);}
function AJY(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=K(b);g=K(c);h=K(d);i=a.l;j=g-1|0;$p=1;case 1:$z=ACy(i,f,j,h);if(C()){break _;}j=$z;L();if(j==Bg1.b)g=g+(-1)|0;i=a.l;$p=2;case 2:$z=ACy(i,f,g,h);if(C()){break _;}j=$z;if(j!=Bg1.b)return null;i=a.l;$p=3;case 3:$z=AEL(i,f,g,h);if(C()){break _;}j=$z;c=g;if(j>=2&&j<=5)c
=g+1|0;k=BlA.data[j].data;l=k[1].data[0]-k[0].data[0]|0;m=k[1].data[2]-k[0].data[2]|0;n=Ed(l*l+m*m);l=l/n;m=m/n;l=b+l*e;d=d+m*e;if(k[0].data[1]&&(K(l)-f|0)==k[0].data[0]&&(K(d)-h|0)==k[0].data[2])c=c+k[0].data[1];else if(k[1].data[1]&&(K(l)-f|0)==k[1].data[0]&&(K(d)-h|0)==k[1].data[2])c=c+k[1].data[1];$p=4;case 4:$z=ASm(a,l,c,d);if(C()){break _;}i=$z;return i;default:E$();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function ASm(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=K(b);f=K(c);g=K(d);h=a.l;i=f-1|0;$p=1;case 1:$z=ACy(h,e,i,g);if(C()){break _;}i=$z;L();if(i==Bg1.b)f=f+(-1)|0;h=a.l;$p=2;case 2:$z=ACy(h,e,f,g);if(C()){break _;}i=$z;if(i!=Bg1.b)return null;h
=a.l;$p=3;case 3:$z=AEL(h,e,f,g);if(C()){break _;}j=$z;c=f;k=BlA.data[j].data;l=e;m=l+0.5;n=m+k[0].data[0]*0.5;o=c+0.5;p=o+k[0].data[1]*0.5;q=g;r=q+0.5;s=r+k[0].data[2]*0.5;m=m+k[1].data[0]*0.5;t=o+k[1].data[1]*0.5;o=r+k[1].data[2]*0.5;r=m-n;u=(t-p)*2.0;v=o-s;l=r===0.0?d-q:v===0.0?b-l:((b-n)*r+(d-s)*v)*2.0;b=n+r*l;c=p+u*l;d=s+v*l;i=R(u,0.0);if(i<0)c=c+1.0;if(i>0)c=c+0.5;return BY(b,c,d);default:E$();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,$p);}
function A3N(a,b){var c,d,e,f,g,h;if(b!==a.bH){c=b.d-a.d;d=b.e-a.e;e=c*c+d*d;if(e>=9.999999747378752E-5){e=Ce(e);c=c/e;f=d/e;g=1.0/e;if(g>1.0)g=1.0;c=c*g;d=f*g;c=c*0.10000000149011612;d=d*0.10000000149011612;c=c*(1.0-a.n5);d=d*(1.0-a.n5);c=c*0.5;d=d*0.5;if(!(b instanceof Gh)){Hr(a, -c,0.0, -d);Hr(b,c/4.0,0.0,d/4.0);}else{f=(b.g+a.g)/2.0;h=(b.h+a.h)/2.0;a.h=0.0;a.g=0.0;Hr(a,f-c,0.0,h-d);b.h=0.0;b.g=0.0;Hr(b,f+c,0.0,h+d);}}}}
function A07(a){return 27;}
function TY(a,b){return a.Br.data[b];}
function A8L(a,b){Pm(b,a);return 1;}
function AMK(){var b,c,d,e,f,g;b=J($rt_arraycls($rt_arraycls($rt_intcls())),10);c=b.data;d=J($rt_arraycls($rt_intcls()),2);e=d.data;f=$rt_createIntArray(3);g=f.data;g[0]=0;g[1]=0;g[2]=(-1);e[0]=f;f=$rt_createIntArray(3);g=f.data;g[0]=0;g[1]=0;g[2]=1;e[1]=f;c[0]=d;d=J($rt_arraycls($rt_intcls()),2);e=d.data;f=$rt_createIntArray(3);g=f.data;g[0]=(-1);g[1]=0;g[2]=0;e[0]=f;f=$rt_createIntArray(3);g=f.data;g[0]=1;g[1]=0;g[2]=0;e[1]=f;c[1]=d;d=J($rt_arraycls($rt_intcls()),2);e=d.data;f=$rt_createIntArray(3);g=f.data;g[0]
=(-1);g[1]=(-1);g[2]=0;e[0]=f;f=$rt_createIntArray(3);g=f.data;g[0]=1;g[1]=0;g[2]=0;e[1]=f;c[2]=d;d=J($rt_arraycls($rt_intcls()),2);e=d.data;f=$rt_createIntArray(3);g=f.data;g[0]=(-1);g[1]=0;g[2]=0;e[0]=f;f=$rt_createIntArray(3);g=f.data;g[0]=1;g[1]=(-1);g[2]=0;e[1]=f;c[3]=d;d=J($rt_arraycls($rt_intcls()),2);e=d.data;f=$rt_createIntArray(3);g=f.data;g[0]=0;g[1]=0;g[2]=(-1);e[0]=f;f=$rt_createIntArray(3);g=f.data;g[0]=0;g[1]=(-1);g[2]=1;e[1]=f;c[4]=d;d=J($rt_arraycls($rt_intcls()),2);e=d.data;f=$rt_createIntArray(3);g
=f.data;g[0]=0;g[1]=(-1);g[2]=(-1);e[0]=f;f=$rt_createIntArray(3);g=f.data;g[0]=0;g[1]=0;g[2]=1;e[1]=f;c[5]=d;g=J($rt_arraycls($rt_intcls()),2);e=g.data;d=$rt_createIntArray(3);f=d.data;f[0]=0;f[1]=0;f[2]=1;e[0]=d;d=$rt_createIntArray(3);f=d.data;f[0]=1;f[1]=0;f[2]=0;e[1]=d;c[6]=g;d=J($rt_arraycls($rt_intcls()),2);e=d.data;f=$rt_createIntArray(3);g=f.data;g[0]=0;g[1]=0;g[2]=1;e[0]=f;f=$rt_createIntArray(3);g=f.data;g[0]=(-1);g[1]=0;g[2]=0;e[1]=f;c[7]=d;d=J($rt_arraycls($rt_intcls()),2);e=d.data;f=$rt_createIntArray(3);g
=f.data;g[0]=0;g[1]=0;g[2]=(-1);e[0]=f;f=$rt_createIntArray(3);g=f.data;g[0]=(-1);g[1]=0;g[2]=0;e[1]=f;c[8]=d;d=J($rt_arraycls($rt_intcls()),2);e=d.data;f=$rt_createIntArray(3);g=f.data;g[0]=0;g[1]=0;g[2]=(-1);e[0]=f;f=$rt_createIntArray(3);g=f.data;g[0]=1;g[1]=0;g[2]=0;e[1]=f;c[9]=d;BlA=b;}
function ARB(){Dh.call(this);this.C2=null;}
function Bb0(){var a=new ARB();A$b(a);return a;}
function A$b(a){EG(a);a.mb=0.5;a.C2=BcU();}
function AQi(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:B3();h=b.cs;i=b.d-b.cs;j=g;k=h+i*j;l=b.b7+(b.j-b.b7)*j;i=b.ct+(b.e-b.ct)*j;h=0.30000001192092896;$p=1;case 1:$z=ASm(b,k,l,i);if(C()){break _;}m=$z;n=b.T+(b.I-b.T)*g;if(m!==null){$p=2;continue _;}Bw(c,d,e);Bv(180.0
-f,0.0,1.0,0.0);Bv( -n,0.0,0.0,1.0);o=b.kB-g;p=b.iT-g;if(p<0.0)p=0.0;if(o>0.0)Bv(Bq(o)*o*p/10.0*b.oN,1.0,0.0,0.0);b=B(179);$p=4;continue _;case 2:$z=AJY(b,k,l,i,h);if(C()){break _;}q=$z;h=(-0.30000001192092896);$p=3;case 3:$z=AJY(b,k,l,i,h);if(C()){break _;}r=$z;if(q===null)q=m;if(r===null)r=m;c=c+m.x-k;d=d+(q.z+r.z)/2.0-l;e=e+m.w-i;s=Dk(r, -q.x, -q.z, -q.w);if(HR(s)!==0.0){s=CD(s);f=CR(s.w,s.x)*180.0/3.141592653589793;n=It(s.z)*73.0;}Bw(c,d,e);Bv(180.0-f,0.0,1.0,0.0);Bv( -n,0.0,0.0,1.0);o=b.kB-g;p=b.iT-g;if
(p<0.0)p=0.0;if(o>0.0)Bv(Bq(o)*o*p/10.0*b.oN,1.0,0.0,0.0);b=B(179);$p=4;case 4:AKs(a,b);if(C()){break _;}CC(0.75,0.75,0.75);b=Kk();L();GW(b,BgQ);CC(1.3333333730697632,1.3333333730697632,1.3333333730697632);b=B(590);$p=5;case 5:AKs(a,b);if(C()){break _;}CC((-1.0),(-1.0),1.0);AKt(a.C2,0.0,0.0,(-0.10000000149011612),0.0,0.0,0.0625);BE();return;default:E$();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,$p);}
function AQh(a,b,c,d,e,f,g){var $p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:AQi(a,b,c,d,e,f,g);if(C()){break _;}return;default:E$();}}C4().s(a,b,c,d,e,f,g,$p);}
function Wa(){var a=this;D.call(a);a.u2=Long_ZERO;a.t3=0;a.zc=0;}
function BlB(){var a=new Wa();AUe(a);return a;}
function AUe(a){return;}
function ABF(){var a=this;D.call(a);a.wm=null;a.wE=null;}
function BbK(){var a=new ABF();AUp(a);return a;}
function AUp(a){a.wm=BK(0,0);BG(a.wm,(-12.0),(-14.0),(-1.0),24,12,2,0.0);a.wE=BK(0,14);BG(a.wE,(-1.0),(-2.0),(-1.0),2,14,2,0.0);}
function ANa(a){Ca(a.wm,0.0625);Ca(a.wE,0.0625);}
function AH7(){var a=this;Eh.call(a);a.lZ=null;a.qT=null;a.rE=null;a.kc=null;a.kb=null;a.ke=null;a.kd=null;a.kg=null;a.kf=null;a.ki=null;a.kh=null;}
function A5j(){var a=new AH7();AUP(a);return a;}
function AUP(a){a.lZ=BK(32,4);BG(a.lZ,(-4.0),(-4.0),(-8.0),8,8,8,0.0);BJ(a.lZ,0.0,15.0,(-3.0));a.qT=BK(0,0);BG(a.qT,(-3.0),(-3.0),(-3.0),6,6,6,0.0);BJ(a.qT,0.0,15.0,0.0);a.rE=BK(0,12);BG(a.rE,(-5.0),(-4.0),(-6.0),10,8,12,0.0);BJ(a.rE,0.0,15.0,9.0);a.kc=BK(18,0);BG(a.kc,(-15.0),(-1.0),(-1.0),16,2,2,0.0);BJ(a.kc,(-4.0),15.0,2.0);a.kb=BK(18,0);BG(a.kb,(-1.0),(-1.0),(-1.0),16,2,2,0.0);BJ(a.kb,4.0,15.0,2.0);a.ke=BK(18,0);BG(a.ke,(-15.0),(-1.0),(-1.0),16,2,2,0.0);BJ(a.ke,(-4.0),15.0,1.0);a.kd=BK(18,0);BG(a.kd,(-1.0),
(-1.0),(-1.0),16,2,2,0.0);BJ(a.kd,4.0,15.0,1.0);a.kg=BK(18,0);BG(a.kg,(-15.0),(-1.0),(-1.0),16,2,2,0.0);BJ(a.kg,(-4.0),15.0,0.0);a.kf=BK(18,0);BG(a.kf,(-1.0),(-1.0),(-1.0),16,2,2,0.0);BJ(a.kf,4.0,15.0,0.0);a.ki=BK(18,0);BG(a.ki,(-15.0),(-1.0),(-1.0),16,2,2,0.0);BJ(a.ki,(-4.0),15.0,(-1.0));a.kh=BK(18,0);BG(a.kh,(-1.0),(-1.0),(-1.0),16,2,2,0.0);BJ(a.kh,4.0,15.0,(-1.0));}
function AYa(a,b,c,d,e,f,g){Yw(a,b,c,d,e,f,g);Ca(a.lZ,g);Ca(a.qT,g);Ca(a.rE,g);Ca(a.kc,g);Ca(a.kb,g);Ca(a.ke,g);Ca(a.kd,g);Ca(a.kg,g);Ca(a.kf,g);Ca(a.ki,g);Ca(a.kh,g);}
function Yw(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p;a.lZ.bX=e/57.2957763671875;a.lZ.b1=f/57.2957763671875;a.kc.bU=(-0.7853981852531433);a.kb.bU=0.7853981852531433;a.ke.bU=(-0.5811946392059326);a.kd.bU=0.5811946392059326;a.kg.bU=(-0.5811946392059326);a.kf.bU=0.5811946392059326;a.ki.bU=(-0.7853981852531433);a.kh.bU=0.7853981852531433;a.kc.bX=0.7853981852531433;a.kb.bX=(-0.7853981852531433);a.ke.bX=0.39269909262657166;a.kd.bX=(-0.39269909262657166);a.kg.bX=(-0.39269909262657166);a.kf.bX=0.39269909262657166;a.ki.bX
=(-0.7853981852531433);a.kh.bX=0.7853981852531433;b=b*0.6661999821662903;f=b*2.0;h= -(BC(f+0.0)*0.4000000059604645)*c;i= -(BC(f+3.1415927410125732)*0.4000000059604645)*c;j= -(BC(f+1.5707963705062866)*0.4000000059604645)*c;k= -(BC(f+4.71238899230957)*0.4000000059604645)*c;l=HZ(Bq(b+0.0)*0.4000000059604645)*c;m=HZ(Bq(b+3.1415927410125732)*0.4000000059604645)*c;n=HZ(Bq(b+1.5707963705062866)*0.4000000059604645)*c;o=HZ(Bq(b+4.71238899230957)*0.4000000059604645)*c;p=a.kc;p.bX=p.bX+h;p=a.kb;p.bX=p.bX+ -h;p=a.ke;p.bX
=p.bX+i;p=a.kd;p.bX=p.bX+ -i;p=a.kg;p.bX=p.bX+j;p=a.kf;p.bX=p.bX+ -j;p=a.ki;p.bX=p.bX+k;p=a.kh;p.bX=p.bX+ -k;p=a.kc;p.bU=p.bU+l;p=a.kb;p.bU=p.bU+ -l;p=a.ke;p.bU=p.bU+m;p=a.kd;p.bU=p.bU+ -m;p=a.kg;p.bU=p.bU+n;p=a.kf;p.bU=p.bU+ -n;p=a.ki;p.bU=p.bU+o;p=a.kh;p.bU=p.bU+ -o;}
function AIB(){var a=this;Eh.call(a);a.l5=null;a.vt=null;a.sV=null;a.pp=null;a.po=null;a.pn=null;a.pm=null;}
function BaP(){var a=new AIB();A46(a);return a;}
function A46(a){a.l5=BK(0,0);BG(a.l5,(-4.0),(-8.0),(-4.0),8,8,8,0.0);BJ(a.l5,0.0,4.0,0.0);a.vt=BK(32,0);BG(a.vt,(-4.0),(-8.0),(-4.0),8,8,8,0.5);BJ(a.vt,0.0,4.0,0.0);a.sV=BK(16,16);BG(a.sV,(-4.0),0.0,(-2.0),8,12,4,0.0);BJ(a.sV,0.0,4.0,0.0);a.pp=BK(0,16);BG(a.pp,(-2.0),0.0,(-2.0),4,6,4,0.0);BJ(a.pp,(-2.0),16.0,4.0);a.po=BK(0,16);BG(a.po,(-2.0),0.0,(-2.0),4,6,4,0.0);BJ(a.po,2.0,16.0,4.0);a.pn=BK(0,16);BG(a.pn,(-2.0),0.0,(-2.0),4,6,4,0.0);BJ(a.pn,(-2.0),16.0,(-4.0));a.pm=BK(0,16);BG(a.pm,(-2.0),0.0,(-2.0),4,6,4,
0.0);BJ(a.pm,2.0,16.0,(-4.0));}
function A21(a,b,c,d,e,f,g){Zt(a,b,c,d,e,f,g);Ca(a.l5,g);Ca(a.sV,g);Ca(a.pp,g);Ca(a.po,g);Ca(a.pn,g);Ca(a.pm,g);}
function Zt(a,b,c,d,e,f,g){var h;a.l5.bX=e/57.2957763671875;a.l5.b1=f/57.2957763671875;h=a.pp;b=b*0.6661999821662903;h.b1=BC(b)*1.399999976158142*c;h=a.po;d=b+3.1415927410125732;h.b1=BC(d)*1.399999976158142*c;a.pn.b1=BC(d)*1.399999976158142*c;a.pm.b1=BC(b)*1.399999976158142*c;}
function AEY(){Eh.call(this);this.cZ=null;}
function BcU(){var a=new AEY();A3Z(a);return a;}
function A3Z(a){a.cZ=J(QL,7);a.cZ.data[0]=BK(0,10);a.cZ.data[1]=BK(0,0);a.cZ.data[2]=BK(0,0);a.cZ.data[3]=BK(0,0);a.cZ.data[4]=BK(0,0);a.cZ.data[5]=BK(44,10);BG(a.cZ.data[0],(-10.0),(-8.0),(-1.0),20,16,2,0.0);BJ(a.cZ.data[0],0.0,4.0,0.0);BG(a.cZ.data[5],(-9.0),(-7.0),(-1.0),18,14,1,0.0);BJ(a.cZ.data[5],0.0,4.0,0.0);BG(a.cZ.data[1],(-8.0),(-9.0),(-1.0),16,8,2,0.0);BJ(a.cZ.data[1],(-9.0),4.0,0.0);BG(a.cZ.data[2],(-8.0),(-9.0),(-1.0),16,8,2,0.0);BJ(a.cZ.data[2],9.0,4.0,0.0);BG(a.cZ.data[3],(-8.0),(-9.0),(-1.0),
16,8,2,0.0);BJ(a.cZ.data[3],0.0,4.0,(-7.0));BG(a.cZ.data[4],(-8.0),(-9.0),(-1.0),16,8,2,0.0);BJ(a.cZ.data[4],0.0,4.0,7.0);a.cZ.data[0].b1=1.5707963705062866;a.cZ.data[1].bX=4.71238899230957;a.cZ.data[2].bX=1.5707963705062866;a.cZ.data[3].bX=3.1415927410125732;a.cZ.data[5].b1=(-1.5707963705062866);}
function AKt(a,b,c,d,e,f,g){var h;a.cZ.data[5].m4=4.0-d;h=0;while(h<6){Ca(a.cZ.data[h],g);h=h+1|0;}}
function TB(){var a=this;D.call(a);a.lH=0;a.yp=0;a.ss=0;a.ni=0;a.lb=null;}
function KE(a){return a.lH>=a.ss?0:1;}
function KU(a){var b,c;PL(a);a.ni=a.lH;b=a.lb;c=a.lH;a.lH=c+1|0;return Z(b,c);}
function AMc(a){var b;if(a.ni<0){b=new D3;P(b);M(b);}PL(a);En(a.lb,a.ni);a.yp=a.lb.d7;if(a.ni<a.lH)a.lH=a.lH-1|0;a.ss=a.ss-1|0;a.ni=(-1);}
function PL(a){var b;if(a.yp>=a.lb.d7)return;b=new KT;P(b);M(b);}
function I8(){var a=this;D.call(a);a.g3=null;a.tu=0;a.cE=null;a.gh=null;a.hD=null;a.jz=null;a.fu=null;a.q2=0;a.fX=0;a.fU=0;a.iW=null;a.dN=null;a.he=0;a.e9=0;a.qc=0;a.Em=0;a.sa=0;a.np=Long_ZERO;}
var Bkj=0;function BaF(a,b,c){var d=new I8();ARc(d,a,b,c);return d;}
function A9n(a,b,c,d){var e=new I8();A1w(e,a,b,c,d);return e;}
function ARc(a,b,c,d){var e;a.iW=Df();a.dN=J(J6,8);a.he=0;a.e9=0;a.Em=0;a.sa=0;a.np=Long_ZERO;a.cE=b;a.fX=c;a.fU=d;a.fu=$rt_createByteArray(256);e=0;while(e<a.dN.data.length){a.dN.data[e]=Ci();e=e+1|0;}}
function A1w(a,b,c,d,e){var f;f=c.data;ARc(a,b,d,e);a.g3=c;b=new Uc;d=f.length;AJC(b,d);a.gh=b;a.hD=Lu(d);a.jz=Lu(d);}
function ARI(a,b,c){return b==a.fX&&c==a.fU?1:0;}
function UQ(a,b,c){return a.fu.data[c<<4|b]&255;}
function A5E(a){return;}
function ALH(a,b,c){var d,e,f,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=UQ(a,b,c);e=(a.fX*16|0)+b|0;f=(a.fU*16|0)+c|0;b=e-1|0;$p=1;case 1:AJJ(a,b,f,d);if(C()){break _;}b=e+1|0;$p=2;case 2:AJJ(a,b,f,d);if(C()){break _;}b=f-1|0;$p=3;case 3:AJJ(a,e,b,d);if(C()){break _;}b=f+1|0;$p=4;case 4:AJJ(a,e,b,d);if(C()){break _;}return;default:E$();}}C4().s(a,b,c,d,e,f,$p);}
function Sj(a){var b,c,d,e,f;b=127;c=0;while(c<16){d=0;while(d<16){e=127;f=c<<11|d<<7;while(e>0){L();if(Bgu.data[a.g3.data[(f+e|0)-1|0]])break;e=e+(-1)|0;}a.fu.data[d<<4|c]=e<<24>>24;if(e<b)b=e;d=d+1|0;}c=c+1|0;}a.q2=b;a.e9=1;}
function AJJ(a,b,c,d){var e,f,g,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=a.cE;$p=1;case 1:$z=ALI(e,b,c);if(C()){break _;}f=$z;g=R(f,d);if(g>0)DU(a.cE,Bkq,b,d,c,b,f,c);else if(g<0)DU(a.cE,Bkq,b,f,c,b,d,c);a.e9=1;return;default:E$();}}C4().s(a,b,c,d,e,f,g,$p);}
function Fs(a,b,c,d){var e,f,g,h,i,j,k,l;e=a.fu.data;f=d<<4|b;g=e[f]&255;if(c<=g)c=g;while(c>0){L();if(Bgu.data[FR(a,b,c-1|0,d)])break;c=c+(-1)|0;}h=R(c,g);if(h){APK(a.cE,b,d,c,g);a.fu.data[f]=c<<24>>24;if(c<a.q2)a.q2=c;else{f=127;i=0;while(i<16){j=0;while(j<16){e=a.fu.data;k=j<<4|i;if((e[k]&255)<f)f=a.fu.data[k]&255;j=j+1|0;}i=i+1|0;}a.q2=f;}a:{f=(a.fX*16|0)+b|0;i=(a.fU*16|0)+d|0;if(h<0){j=c;while(true){if(j>=g)break a;Ek(a.hD,b,j,d,15);j=j+1|0;}}DU(a.cE,Bkq,f,g,i,f,c,i);while(true){if(g>=c)break a;Ek(a.hD,
b,g,d,0);g=g+1|0;}}j=15;k=c;b:{while(k>0){if(j<=0)break b;k=k+(-1)|0;L();l=Bgu.data[FR(a,b,k,d)];if(!l)l=1;j=j-l|0;if(j<0)j=0;Ek(a.hD,b,k,d,j);}}while(k>0){L();if(Bgu.data[FR(a,b,k-1|0,d)])break;k=k+(-1)|0;}if(k!=c)DU(a.cE,Bkq,f-1|0,k,i-1|0,f+1|0,c,i+1|0);a.e9=1;}}
function FR(a,b,c,d){return a.g3.data[b<<11|d<<7|c];}
function ADG(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=e<<24>>24;h=a.fu.data[d<<4|b]&255;i=a.g3.data;j=b<<11|d<<7|c;k=i[j]&255;if(k==e&&G5(a.gh,b,c,d)==f)return 0;l=(a.fX*16|0)+b|0;m=(a.fU*16|0)+d|0;a.g3.data[j]=g;if(k){L();n=BeI.data[k];o=a.cE;$p=1;continue _;}Ek(a.gh,b,c,d,f);L();if(!Bgu.data[g]){if(c==(h
-1|0))Fs(a,b,c,d);}else if(c>=h)Fs(a,b,c+1|0,d);DU(a.cE,Bkq,l,c,m,l,c,m);DU(a.cE,Bkr,l,c,m,l,c,m);$p=2;continue _;case 1:n.ly(o,l,c,m);if(C()){break _;}Ek(a.gh,b,c,d,f);L();if(!Bgu.data[g]){if(c==(h-1|0))Fs(a,b,c,d);}else if(c>=h)Fs(a,b,c+1|0,d);DU(a.cE,Bkq,l,c,m,l,c,m);DU(a.cE,Bkr,l,c,m,l,c,m);$p=2;case 2:ALH(a,b,d);if(C()){break _;}Ek(a.gh,b,c,d,f);if(!e){a.e9=1;return 1;}n=BeI.data[e];o=a.cE;$p=3;case 3:n.fD(o,l,c,m);if(C()){break _;}a.e9=1;return 1;default:E$();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,$p);}
function ADD(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=e<<24>>24;g=a.fu.data[d<<4|b]&255;h=a.g3.data;i=b<<11|d<<7|c;j=h[i]&255;if(j==e)return 0;k=(a.fX*16|0)+b|0;l=(a.fU*16|0)+d|0;a.g3.data[i]=f;if(j){L();m=BeI.data[j];n=a.cE;$p=1;continue _;}Ek(a.gh,b,c,d,0);L();if(!Bgu.data[f]){if(c==(g-1|0))Fs(a,b,c,d);}else if(c>=
g)Fs(a,b,c+1|0,d);DU(a.cE,Bkq,k,c,l,k,c,l);DU(a.cE,Bkr,k,c,l,k,c,l);$p=2;continue _;case 1:m.ly(n,k,c,l);if(C()){break _;}Ek(a.gh,b,c,d,0);L();if(!Bgu.data[f]){if(c==(g-1|0))Fs(a,b,c,d);}else if(c>=g)Fs(a,b,c+1|0,d);DU(a.cE,Bkq,k,c,l,k,c,l);DU(a.cE,Bkr,k,c,l,k,c,l);$p=2;case 2:ALH(a,b,d);if(C()){break _;}if(!e){a.e9=1;return 1;}m=BeI.data[e];n=a.cE;$p=3;case 3:m.fD(n,k,c,l);if(C()){break _;}a.e9=1;return 1;default:E$();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function RW(a,b,c,d){return G5(a.gh,b,c,d);}
function AAx(a,b,c,d,e){a.e9=1;Ek(a.gh,b,c,d,e);}
function ACn(a,b,c,d,e){return b===Bkq?G5(a.hD,c,d,e):b!==Bkr?0:G5(a.jz,c,d,e);}
function AQO(a,b,c,d,e,f){a.e9=1;if(b===Bkq)Ek(a.hD,c,d,e,f);else{if(b!==Bkr)return;Ek(a.jz,c,d,e,f);}}
function VU(a,b,c,d,e){var f,g;f=G5(a.hD,b,c,d);if(f>0)Bkj=1;e=f-e|0;g=G5(a.jz,b,c,d);if(g<=e)g=e;return g;}
function VX(a,b){var c,d,e,f,g;a.sa=1;c=K(b.d/16.0);d=K(b.e/16.0);if(!(c==a.fX&&d==a.fU)){e=Dz();f=new U;W(f);Cg(e,V(FO(I(f,B(591)),b)));}g=K(b.j/16.0);if(g<0)g=0;if(g>=a.dN.data.length)g=a.dN.data.length-1|0;S(a.dN.data[g],b);}
function AM1(a,b){R5(a,b,K(b.j/16.0));}
function R5(a,b,c){var d,e;if(c<0)c=0;if(c>=a.dN.data.length)c=a.dN.data.length-1|0;if(!Q$(a.dN.data[c],b)){d=Dz();e=new U;W(e);Cg(d,V(FO(I(e,B(592)),b)));}H_(a.dN.data[c],b);}
function Pq(a,b,c,d){return c<(a.fu.data[d<<4|b]&255)?0:1;}
function ANp(a,b,c,d){var e,f,g,h,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=(b+(c*1024|0)|0)+((d*1024|0)*1024|0)|0;f=CP(a.iW,CZ(e));if(f!==null)return f;g=FR(a,b,c,d);L();h=BeI.data[g];f=a.cE;b=(a.fX*16|0)+b|0;d=(a.fU*16|0)+d|0;$p=1;case 1:h.fD(f,b,c,d);if(C()){break _;}return CP(a.iW,CZ(e));default:E$();}}C4().s(a,b,c,d,e,f,g,h,$p);}
function AJl(a,b,c,d,e){var f;a:{f=(b+(c*1024|0)|0)+((d*1024|0)*1024|0)|0;e.ch=a.cE;e.dK=(a.fX*16|0)+b|0;e.dI=c;e.dR=(a.fU*16|0)+d|0;if(FR(a,b,c,d)){L();if(BeI.data[FR(a,b,c,d)] instanceof Eg){if(a.tu){if(CP(a.iW,CZ(f))!==null)H_(a.cE.fC,CP(a.iW,CZ(f)));S(a.cE.fC,e);}BP(a.iW,CZ(f),e);break a;}}Cg(Dz(),B(593));}}
function AD1(a,b,c,d){var e;e=(b+(c*1024|0)|0)+((d*1024|0)*1024|0)|0;if(a.tu)H_(a.cE.fC,Q_(a.iW,CZ(e)));}
function MF(a){var b;a.tu=1;DF(a.cE.fC,Iu(a.iW));b=0;while(b<a.dN.data.length){AQf(a.cE,a.dN.data[b]);b=b+1|0;}}
function AOP(a){var b;a.tu=0;Ge(a.cE.fC,Iu(a.iW));b=0;while(b<a.dN.data.length){AQ5(a.cE,a.dN.data[b]);b=b+1|0;}}
function SP(a){a.e9=1;}
function AJ1(a,b,c,d){var e,f,g,h,i;e=K((c.M-2.0)/16.0);f=K((c.U+2.0)/16.0);if(e<0)e=0;if(f>=a.dN.data.length)f=a.dN.data.length-1|0;while(e<=f){g=a.dN.data[e];h=0;while(h<g.s){i=Z(g,h);if(i!==b&&L6(i.L,c))S(d,i);h=h+1|0;}e=e+1|0;}}
function AMl(a,b,c,d){var e,f,g,h,i;e=K((c.M-2.0)/16.0);f=K((c.U+2.0)/16.0);if(e<0)e=0;if(f>=a.dN.data.length)f=a.dN.data.length-1|0;while(e<=f){g=a.dN.data[e];h=0;while(h<g.s){i=Z(g,h);if(P$(b,Dl(i))&&L6(i.L,c))S(d,i);h=h+1|0;}e=e+1|0;}}
function Kp(a,b){return a.qc?0:a.sa&&Long_ne(a.cE.dU,a.np)?1:a.e9;}
function Iv(){var a=this;D.call(a);a.jn=0;a.iv=0;a.kx=null;a.x2=null;}
function BlC(a,b,c,d,e,f,g){var h=new Iv();AEw(h,a,b,c,d,e,f,g);return h;}
function AEw(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.x2=b;a.jn=c>>4;a.iv=e>>4;i=f>>4;j=h>>4;a.kx=$rt_createMultiArray($rt_arraycls($rt_arraycls(I8)),[(j-a.iv|0)+1|0,(i-a.jn|0)+1|0]);k=a.jn;while(k<=i){l=a.iv;if(l<=j){m=a.kx.data[k-a.jn|0].data;c=l-a.iv|0;$p=1;continue _;}k=k+1|0;}return;case 1:$z=ZW(b,k,l);if(C()){break _;}n
=$z;m[c]=n;l=l+1|0;while(true){if(l<=j){m=a.kx.data[k-a.jn|0].data;c=l-a.iv|0;continue _;}k=k+1|0;if(k>i)break;l=a.iv;}return;default:E$();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function HA(a,b,c,d){var e,f;if(c<0)return 0;if(c>=128)return 0;e=(b>>4)-a.jn|0;f=(d>>4)-a.iv|0;return FR(a.kx.data[e].data[f],b&15,c,d&15);}
function AFV(a,b,c,d){var e,f,g,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=(b>>4)-a.jn|0;f=(d>>4)-a.iv|0;g=a.kx.data[e].data[f];e=b&15;b=d&15;$p=1;case 1:$z=ANp(g,e,c,b);if(C()){break _;}g=$z;return g;default:E$();}}C4().s(a,b,c,d,e,f,g,$p);}
function AAQ(a,b,c,d){return Bkm.data[Z8(a,b,c,d)];}
function Z8(a,b,c,d){return GS(a,b,c,d,1);}
function GS(a,b,c,d,e){var f,g,h,i,j,k,l,m,n;if(b>=(-32000000)&&d>=(-32000000)&&b<32000000&&d<=32000000){a:{if(e){f=HA(a,b,c,d);L();if(f==BeN.b)break a;if(f==BgW.b)break a;}if(c<0)return 0;if(c>=128){g=15-a.x2.ge|0;if(g<0)g=0;return g;}h=(b>>4)-a.jn|0;i=(d>>4)-a.iv|0;return VU(a.kx.data[h].data[i],b&15,c,d&15,a.x2.ge);}j=GS(a,b,c+1|0,d,0);k=GS(a,b+1|0,c,d,0);l=GS(a,b-1|0,c,d,0);m=GS(a,b,c,d+1|0,0);n=GS(a,b,c,d-1|0,0);if(k<=j)k=j;if(l<=k)l=k;if(m<=l)m=l;if(n<=m)n=m;return n;}return 15;}
function AC7(a,b,c,d){var e,f;if(c<0)return 0;if(c>=128)return 0;e=(b>>4)-a.jn|0;f=(d>>4)-a.iv|0;return RW(a.kx.data[e].data[f],b&15,c,d&15);}
function N7(a,b,c,d){var e,f;e=HA(a,b,c,d);if(!e)f=Bf4;else{L();f=BeI.data[e].b_;}return f;}
function AB8(a,b,c,d){var e;L();e=BeI.data[HA(a,b,c,d)];return e!==null?e.d5():0;}
function Gk(){BD.call(this);}
function BlD(){var a=new Gk();A9_(a);return a;}
function A9_(a){P(a);}
function UZ(){Gk.call(this);}
function BlE(){var a=new UZ();A6H(a);return a;}
function A6H(a){P(a);}
function Vi(){D.call(this);}
var BlF=null;function BlG(){var a=new Vi();AO8(a);return a;}
function AO8(a){return;}
function AIJ(){var b,c;b=$rt_createIntArray(12);c=b.data;c[0]=1;c[1]=4;c[2]=2;c[3]=1024;c[4]=8;c[5]=16;c[6]=128;c[7]=64;c[8]=32;c[9]=256;c[10]=2048;c[11]=512;BlF=b;}
function PP(){Gn.call(this);this.we=null;}
function A0o(a,b){return AEe(a.we,b);}
function Ni(a){var b;b=new Vf;VF(b,a.we);return b;}
function Ty(){D.call(this);this.Jk=null;}
function AOw(a){Be();Bdy.requestPointerLock();MX(0);}
function A_r(a){AOw(a);}
function AQI(){D.call(this);}
function BlH(){var a=new AQI();A39(a);return a;}
function A39(a){return;}
function WZ(){var a=this;D$.call(a);a.cu=null;a.gY=0;a.pU=0;a.kV=0;}
function Baw(){var a=new WZ();AVd(a);return a;}
function AVd(a){a.cu=J(Cd,3);a.gY=0;a.pU=0;a.kV=0;}
function A9k(a,b){return a.cu.data[b];}
function A8e(a,b,c){var d;if(a.cu.data[b]===null)return null;if(a.cu.data[b].p<=c){d=a.cu.data[b];a.cu.data[b]=null;return d;}d=EE(a.cu.data[b],c);if(!a.cu.data[b].p)a.cu.data[b]=null;return d;}
function AVu(a,b,c){a.cu.data[b]=c;if(c!==null&&c.p>64)c.p=64;}
function AT8(a){return 64;}
function AON(a,b){return Bj(a.kV,b)/200|0;}
function ADL(a,b){if(!a.pU)a.pU=200;return Bj(a.gY,b)/a.pU|0;}
function WP(a){return a.gY<=0?0:1;}
function AGG(a){var b,c,d,e,f,g,h,i,j,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.gY<=0?0:1;c=0;if(a.gY>0){a.gY=a.gY-1|0;c=1;}if(!a.gY&&Ol(a)){d=a.cu.data[1];if(d===null)e=0;else a:{f=DL(d).cW;if(f<256){L();if(BeI.data[f].b_===Bg5){e=300;break a;}}BB();e=f==BhY.cW?100:f!=Bht.cW?0:1600;}a.gY=e;a.pU=e;if(a.gY>0){c=1;if(a.cu.data[1]!==null){d=a.cu.data[1];d.p=d.p-1|0;if(!a.cu.data[1].p)a.cu.data[1]
=null;}}}if(WP(a)&&Ol(a)){a.kV=a.kV+1|0;if(a.kV==200){a.kV=0;ADz(a);c=1;}}else a.kV=0;if(b==(a.gY<=0?0:1)){if(!c)return;d=a.ch;e=a.dK;b=a.dI;c=a.dR;$p=1;continue _;}c=1;b=a.gY<=0?0:1;g=a.ch;f=a.dK;h=a.dI;i=a.dR;$p=2;continue _;case 1:AGu(d,e,b,c);if(C()){break _;}return;case 2:$z=AEL(g,f,h,i);if(C()){break _;}e=$z;$p=3;case 3:$z=ANy(g,f,h,i);if(C()){break _;}j=$z;if(!b){L();b=BgX.b;$p=4;continue _;}L();b=BgY.b;$p=5;continue _;case 4:APy(g,f,h,i,b);if(C()){break _;}$p=6;continue _;case 5:APy(g,f,h,i,b);if(C())
{break _;}$p=6;case 6:AKw(g,f,h,i,e);if(C()){break _;}$p=7;case 7:AFU(g,f,h,i,j);if(C()){break _;}if(!c)return;d=a.ch;e=a.dK;b=a.dI;c=a.dR;$p=1;continue _;default:E$();}}C4().s(a,b,c,d,e,f,g,h,i,j,$p);}
function Ol(a){var b,c;if(a.cu.data[0]===null)return 0;b=U2(a,DL(a.cu.data[0]).cW);if(b<0)b=0;else if(a.cu.data[2]===null)b=1;else if(a.cu.data[2].bA!=b)b=0;else if(a.cu.data[2].p<64&&a.cu.data[2].p<EB(a.cu.data[2]))b=1;else{c=a.cu.data[2].p;BB();b=c>=Bg9.data[b].eZ?0:1;}return b;}
function ADz(a){var b,c;if(Ol(a)){b=U2(a,DL(a.cu.data[0]).cW);if(a.cu.data[2]===null)a.cu.data[2]=KB(b,1);else if(a.cu.data[2].bA==b){c=a.cu.data[2];c.p=c.p+1|0;}c=a.cu.data[0];c.p=c.p-1|0;if(a.cu.data[0].p<=0)a.cu.data[0]=null;}}
function U2(a,b){L();if(b==Be$.b){BB();b=BhJ.cW;}else if(b==Be_.b){BB();b=BhK.cW;}else if(b==BgS.b){BB();b=Bhu.cW;}else if(b==Be5.b)b=BeY.b;else{BB();b=b==Bf_.cW?Bit.cW:b!=BeS.b?(-1):BeO.b;}return b;}
function Z6(a){var b,c,d,e,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.ch;c=a.dK;d=a.dI;e=a.dR;$p=1;case 1:AGu(b,c,d,e);if(C()){break _;}return;default:E$();}}C4().s(a,b,c,d,e,$p);}
function Tk(){D$.call(this);this.hX=null;}
function Bba(){var a=new Tk();A17(a);return a;}
function A17(a){a.hX=J(Cd,36);}
function AVO(a){return 27;}
function Rf(a,b){return a.hX.data[b];}
function A1R(a,b,c){var d;if(a.hX.data[b]===null)return null;if(a.hX.data[b].p<=c){d=a.hX.data[b];a.hX.data[b]=null;return d;}d=EE(a.hX.data[b],c);if(!a.hX.data[b].p)a.hX.data[b]=null;return d;}
function AHB(a,b,c){a.hX.data[b]=c;if(c!==null&&c.p>64)c.p=64;}
function A8x(a){return B(263);}
function A7g(a){return 64;}
function CQ(){D.call(this);this.gq=null;}
function BlI(){var a=new CQ();Cw(a);return a;}
function Cw(a){a.gq=null;}
function VO(a){return a.gq!==null?a.gq:B(3);}
function AXF(a,b){a.gq=b;return a;}
function MW(b){var c,d;c=N2(b);if(!c){b=new N3;Cw(b);return b;}d=AE7(c);d.gq=GU(b);d.gE(b);return d;}
function R2(b,c){KM(c,b.fd());if(b.fd()){Xs(c,VO(b));b.gM(c);}}
function AE7(b){var c;switch(b){case 0:c=new N3;Cw(c);return c;case 1:c=new Mw;Cw(c);return c;case 2:c=new MY;Cw(c);return c;case 3:c=new Li;Cw(c);return c;case 4:c=new Oc;Cw(c);return c;case 5:c=new Pl;Cw(c);return c;case 6:c=new Mp;Cw(c);return c;case 7:c=new MI;Cw(c);return c;case 8:c=new OI;Cw(c);return c;case 9:return L9();case 10:return G$();default:}return null;}
function APQ(){CQ.call(this);this.cL=null;}
function G$(){var a=new APQ();A8G(a);return a;}
function A8G(a){Cw(a);a.cL=Df();}
function A69(a,b){var c;c=Ni(Iu(a.cL));while(Gb(c)){R2(Me(c),b);}KM(b,0);}
function A9e(a,b){var c;Vd(a.cL);while(true){c=MW(b);if(!c.fd())break;BP(a.cL,VO(c),c);}}
function A67(a){return 10;}
function HH(a,b,c){var d;d=a.cL;c.gq=b;BP(d,b,c);}
function JN(a,b,c){var d,e;d=a.cL;e=new Mw;Cw(e);e.ts=c;e.gq=b;BP(d,b,e);}
function Ft(a,b,c){var d,e;d=a.cL;e=new MY;Cw(e);e.tm=c;e.gq=b;BP(d,b,e);}
function Gz(a,b,c){var d,e;d=a.cL;e=new Li;Cw(e);e.r7=c;e.gq=b;BP(d,b,e);}
function Id(a,b,c){var d,e;d=a.cL;e=new Oc;Cw(e);e.s1=c;e.gq=b;BP(d,b,e);}
function AR9(a,b,c){var d,e;d=a.cL;e=A6M(c);e.gq=b;BP(d,b,e);}
function IS(a,b,c){var d,e;d=a.cL;e=new MI;Cw(e);e.mn=c;e.gq=b;BP(d,b,e);}
function ANU(a,b,c){var d;d=a.cL;c.gq=b;BP(d,b,c);}
function S4(a,b,c){JN(a,b,(!c?0:1)<<24>>24);}
function Y2(a,b){return D0(a.cL,b);}
function LB(a,b){return !D0(a.cL,b)?0:CP(a.cL,b).ts;}
function FL(a,b){return !D0(a.cL,b)?0:CP(a.cL,b).tm;}
function FW(a,b){return !D0(a.cL,b)?0:CP(a.cL,b).r7;}
function Mc(a,b){return !D0(a.cL,b)?Long_ZERO:CP(a.cL,b).s1;}
function AMH(a,b){return !D0(a.cL,b)?0.0:CP(a.cL,b).nl;}
function IK(a,b){return !D0(a.cL,b)?$rt_createByteArray(0):CP(a.cL,b).mn;}
function My(a,b){return !D0(a.cL,b)?G$():CP(a.cL,b);}
function Kj(a,b){return !D0(a.cL,b)?L9():CP(a.cL,b);}
function Ux(a,b){return !LB(a,b)?0:1;}
function P7(){B6.call(this);}
function BlJ(){var a=new P7();A$1(a);return a;}
function A$1(a){P(a);}
function SN(){B6.call(this);}
function BlK(){var a=new SN();AYM(a);return a;}
function AYM(a){P(a);}
function R1(){GY.call(this);this.Bw=0;}
function AVS(a){var b;b=new U;W(b);return V(Bf(I(b,B(594)),a.Bw));}
function P3(){GY.call(this);this.EN=0;}
function AVl(a){var b;b=new U;W(b);return V(Bf(I(b,B(595)),a.EN));}
function IP(){var a=this;D.call(a);a.l7=0;a.rm=0;a.lC=null;a.hj=null;a.sq=null;a.it=null;}
function BlL(a){var b=new IP();VF(b,a);return b;}
function VF(a,b){a.it=b;a.rm=b.g7;a.lC=null;}
function Gb(a){if(a.lC!==null)return 1;while(a.l7<a.it.cO.data.length){if(a.it.cO.data[a.l7]!==null)return 1;a.l7=a.l7+1|0;}return 0;}
function UB(a){var b;if(a.rm==a.it.g7)return;b=new KT;P(b);M(b);}
function Wf(a){var b,c,d;UB(a);if(!Gb(a)){b=new J3;P(b);M(b);}if(a.lC===null){c=a.it.cO.data;d=a.l7;a.l7=d+1|0;a.hj=c[d];a.lC=a.hj.eE;a.sq=null;}else{if(a.hj!==null)a.sq=a.hj;a.hj=a.lC;a.lC=a.lC.eE;}}
function ADS(a){var b,c;UB(a);if(a.hj===null){b=new D3;P(b);M(b);}if(a.sq!==null)a.sq.eE=a.hj.eE;else{c=a.hj.pV&(a.it.cO.data.length-1|0);a.it.cO.data[c]=a.it.cO.data[c].eE;}a.hj=null;a.rm=a.rm+1|0;b=a.it;b.g7=b.g7+1|0;b=a.it;b.f7=b.f7-1|0;}
function Vf(){IP.call(this);}
function Me(a){Wf(a);return a.hj.e6;}
function Wx(){var a=this;D.call(a);a.Ao=null;a.Ex=null;a.wb=0;a.qJ=0;}
function NP(a){return Fl(a.Ao);}
function AJp(a,b){return Ct(a.Ex)<b?0:1;}
function A$w(a,b){a.wb=b;}
function A9c(a,b){a.qJ=b;}
function AEB(){var a=this;CS.call(a);a.o$=null;a.yK=null;a.lO=null;}
function AIO(a,b){var c=new AEB();A1y(c,a,b);return c;}
function A1y(a,b,c){DR(a);a.yK=B(596);a.o$=b;a.lO=c;}
function AR2(a){var b,c,d;b=0;while(b<a.lO.zR){c=a.bG;d=Sm(b,((a.bm/2|0)-155|0)+((b%2|0)*160|0)|0,(a.bC/6|0)+(24*(b>>1)|0)|0,Q1(a.lO,b));S(c,d);if(a.J.o.du&&!(b!=5&&b!=6&&b!=9))d.gB=0;b=b+1|0;}S(a.bG,Dj(100,(a.bm/2|0)-100|0,((a.bC/6|0)+120|0)+22|0,B(597)));S(a.bG,Dj(200,(a.bm/2|0)-100|0,(a.bC/6|0)+168|0,B(598)));}
function ADY(a,b){var c,d,e,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b.gB){if(b.cl<100){Ea(a.lO,b.cl,1);b.kp=Q1(a.lO,b.cl);if(b.cl==10){c=a.J;d=AIO(a.o$,a.J.o);$p=2;continue _;}}if(b.cl==100){c=a.J;d=new NQ;e=a.lO;DR(d);d.uf=B(599);d.jx=(-1);d.uC=a;d.iP=e;$p=1;continue _;}if(b.cl==200){b=a.J;c=a.o$;$p=3;continue _;}}return;case 1:ADW(c,d);if(C()){break _;}if(b.cl!=200)return;b=a.J;c=a.o$;$p=3;continue _;case 2:ADW(c,d);if(C())
{break _;}if(b.cl!=100){if(b.cl!=200)return;b=a.J;c=a.o$;$p=3;continue _;}c=a.J;d=new NQ;e=a.lO;DR(d);d.uf=B(599);d.jx=(-1);d.uC=a;d.iP=e;$p=1;continue _;case 3:ADW(b,c);if(C()){break _;}return;default:E$();}}C4().s(a,b,c,d,e,$p);}
function AGc(a,b,c,d){var $p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:ABi(a);if(C()){break _;}DG(a,a.bZ,a.yK,a.bm/2|0,20,16777215);$p=2;case 2:AFF(a,b,c,d);if(C()){break _;}return;default:E$();}}C4().s(a,b,c,d,$p);}
function OB(){var a=this;CS.call(a);a.rz=null;a.yy=null;a.xF=0;}
function A$R(a){var b=new OB();AEh(b,a);return b;}
function AEh(a,b){DR(a);a.yy=B(600);a.xF=0;a.rz=b;}
function APw(a){var b,c,d,e,f,g,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=0;if(b>=5){a.s8();return;}c=new U;W(c);c=I(c,B(601));d=b+1|0;c=V(Bf(c,d));$p=1;case 1:$z=ASe(c);if(C()){break _;}c=$z;if(c!==null){c=new U;W(c);e=V(Bf(I(c,B(602)),d));c=new U;W(c);f=V(I(Bf(I(c,B(601)),d),B(355)));Be();c=Bey;$p=2;continue _;}S(a.bG,Dj(b,(a.bm/2|0)-100|0,(a.bC/6|0)+(24*b|0)|0,B(603)));b=d;if(b>=5){a.s8();return;}c=new U;W(c);c
=I(c,B(601));d=b+1|0;c=V(Bf(c,d));continue _;case 2:$z=A_E(c,f);if(C()){break _;}c=$z;g=c===null?(-1):c.byteLength;c=new U;W(c);f=V(I(AKq(I(I(c,e),B(604)),g/100.0),B(605)));S(a.bG,Dj(b,(a.bm/2|0)-100|0,(a.bC/6|0)+(24*b|0)|0,f));b=d;if(b>=5){a.s8();return;}c=new U;W(c);c=I(c,B(601));d=b+1|0;c=V(Bf(c,d));$p=1;continue _;default:E$();}}C4().s(a,b,c,d,e,f,g,$p);}
function ANt(a,b){var c,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=new U;W(c);c=V(Bf(I(c,B(601)),b));$p=1;case 1:$z=ASe(c);if(C()){break _;}c=$z;if(c===null)c=null;else{c=new U;W(c);c=V(Bf(I(c,B(601)),b));}return c;default:E$();}}C4().s(a,b,c,$p);}
function AXC(a){S(a.bG,Dj(5,(a.bm/2|0)-100|0,((a.bC/6|0)+120|0)+12|0,B(606)));S(a.bG,Dj(6,(a.bm/2|0)-100|0,(a.bC/6|0)+168|0,B(607)));}
function ASz(a,b){var c,d,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b.gB){if(b.cl<5){c=b.cl+1|0;$p=1;continue _;}if(b.cl==5){b=a.J;d=new U4;AEh(d,a);d.yy=B(608);$p=2;continue _;}if(b.cl==6){b=a.J;d=a.rz;$p=3;continue _;}}return;case 1:a.IS(c);if(C()){break _;}return;case 2:ADW(b,d);if(C()){break _;}return;case 3:ADW(b,d);if(C()){break _;}return;default:E$();}}C4().s(a,b,c,d,$p);}
function AKO(a,b){var c,d,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.J;d=null;$p=1;case 1:ADW(c,d);if(C()){break _;}if(a.xF)return;a.xF=1;d=a.J;c=new U;W(c);c=V(Bf(I(c,B(601)),b));$p=2;case 2:AHX(d,c);if(C()){break _;}d=a.J;c=null;$p=3;case 3:ADW(d,c);if(C()){break _;}return;default:E$();}}C4().s(a,b,c,d,$p);}
function AEE(a,b,c,d){var $p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:ABi(a);if(C()){break _;}DG(a,a.bZ,a.yy,a.bm/2|0,20,16777215);$p=2;case 2:AFF(a,b,c,d);if(C()){break _;}return;default:E$();}}C4().s(a,b,c,d,$p);}
function LY(){Gk.call(this);}
function BlM(){var a=new LY();A65(a);return a;}
function A65(a){P(a);}
function Te(){Gk.call(this);}
function BlN(){var a=new Te();A$A(a);return a;}
function A$A(a){P(a);}
function ALw(){D.call(this);}
function BlO(){var a=new ALw();A7j(a);return a;}
function A7j(a){return;}
function AAe(){D.call(this);}
function BlP(){var a=new AAe();A8r(a);return a;}
function A8r(a){return;}
function AMk(){var a=this;D.call(a);a.n=null;a.fO=0;a.t$=null;a.ze=0;a.is=0;a.km=0;a.dp=0;a.u1=null;}
function Bbp(){var a=new AMk();AS9(a);return a;}
function ALJ(a,b){var c,d,e,f,g,h,i,j;c=new VD;c.qU=(-1);c.sj=(-1);c.FB=a;c.EE=a.u1;c.pJ=b;c.qU=0;c.sj=Bi(c.pJ);d=new Wy;e=c.qU;f=c.sj;g=a.is;h=AQX(a);i=AD7(a);d.k2=(-1);j=g+1|0;d.zC=j;d.gF=$rt_createIntArray(j*2|0);d.oR=$rt_createIntArray(i);M1(d.oR,(-1));if(h>0)d.xv=$rt_createIntArray(h);M1(d.gF,(-1));Xl(d,b,e,f);c.dC=d;return c;}
function AIS(a,b,c){var d,e,f,g,h,i;d=Ci();e=ALJ(a,b);f=0;g=0;if(!Bi(b)){h=J(B4,1);h.data[0]=B(3);return h;}while(ABb(e)){i=f+1|0;if(i>=c&&c>0)break;S(d,Ev(b,g,AHa(e)));g=AKY(e);f=i;}a:{S(d,Ev(b,g,Bi(b)));f=f+1|0;if(!c)while(true){f=f+(-1)|0;if(f<0)break;if(Bi(Z(d,f)))break a;En(d,f);}}if(f<0)f=0;return UJ(d,J(B4,f));}
function AIR(a,b){return AIS(a,b,0);}
function Na(a){return a.n.eP;}
function S1(a,b,c,d){var e,f,g,h,i;e=Ci();f=a.fO;g=0;if(c!=a.fO)a.fO=c;a:{switch(b){case -1073741784:h=new QJ;c=a.dp+1|0;a.dp=c;Hb(h,c);break a;case -536870872:case -268435416:break;case -134217688:case -67108824:h=new PY;c=a.dp+1|0;a.dp=c;Hb(h,c);break a;case -33554392:h=new Q9;c=a.dp+1|0;a.dp=c;Hb(h,c);break a;default:a.is=a.is+1|0;if(d!==null)h=Bcs(a.is);else{h=BbY();g=1;}if(a.is<=(-1))break a;if(a.is>=10)break a;a.t$.data[a.is]=h;break a;}h=Bbo();}while(true){if(F_(a.n)&&a.n.H==(-536870788)){d=A$B(C1(a,
2),C1(a,64));while(!Eo(a.n)&&F_(a.n)&&!(a.n.H&&a.n.H!=(-536870788)&&a.n.H!=(-536870871))){Dp(d,BF(a.n));if(a.n.cH!=(-536870788))continue;BF(a.n);}i=LO(a,d);i.cb(h);}else if(a.n.cH==(-536870788)){i=IL(h);BF(a.n);}else{i=Un(a,h);if(a.n.cH==(-536870788))BF(a.n);}if(i!==null)S(e,i);if(Eo(a.n))break;if(a.n.cH==(-536870871))break;}if(a.n.qY==(-536870788))S(e,IL(h));if(a.fO!=f&&!g){a.fO=f;AJx(a.n,a.fO);}switch(b){case -1073741784:break;case -536870872:d=new Th;GR(d,e,h);return d;case -268435416:d=new WO;GR(d,e,h);return d;case -134217688:d
=new Vg;GR(d,e,h);return d;case -67108824:d=new Rl;GR(d,e,h);return d;case -33554392:d=new EU;GR(d,e,h);return d;default:switch(e.s){case 0:break;case 1:return Bck(Z(e,0),h);default:return Baz(e,h);}return IL(h);}d=new K2;GR(d,e,h);return d;}
function AP1(a){var b,c,d,e,f,g;b=$rt_createIntArray(4);c=(-1);d=(-1);if(!Eo(a.n)&&F_(a.n)){e=b.data;c=BF(a.n);e[0]=c;d=c-4352|0;}if(d>=0&&d<19){e=$rt_createCharArray(3);b=e.data;b[0]=c&65535;f=a.n.cH;c=f-4449|0;if(c>=0&&c<21){b[1]=f&65535;BF(a.n);f=a.n.cH;d=f-4519|0;if(d>=0&&d<28){b[2]=f&65535;BF(a.n);return A$q(e,3);}return A$q(e,2);}if(!C1(a,2))return AAi(b[0]);if(C1(a,64))return A87(b[0]);return A4v(b[0]);}e=b.data;c=1;while(c<4&&!Eo(a.n)&&F_(a.n)){f=c+1|0;e[c]=BF(a.n);c=f;}if(c==1){f=e[0];if(!(BlQ.A8(f)
==BlR?0:1))return SU(a,e[0]);}if(!C1(a,2))return BcT(b,c);if(C1(a,64)){g=new SO;Pi(g,b,c);return g;}g=new V8;Pi(g,b,c);return g;}
function Un(a,b){var c,d,e,f;if(F_(a.n)&&!Lh(a.n)&&Nq(a.n.H)){if(C1(a,128)){c=AP1(a);if(!Eo(a.n)&&!(a.n.cH==(-536870871)&&!(b instanceof HV))&&a.n.cH!=(-536870788)&&!F_(a.n))c=MA(a,b,c);}else if(!TT(a.n)&&!Wz(a.n)){d=new Lg;W(d);while(!Eo(a.n)&&F_(a.n)&&!TT(a.n)&&!Wz(a.n)&&!(!(!Lh(a.n)&&!a.n.H)&&!(!Lh(a.n)&&Nq(a.n.H))&&a.n.H!=(-536870871)&&(a.n.H&(-2147418113))!=(-2147483608)&&a.n.H!=(-536870788)&&a.n.H!=(-536870876))){e=BF(a.n);if(!Mv(e))DQ(d,e&65535);else Hk(d,Iz(e));}if(!C1(a,2))c=Bap(d);else if(C1(a,64))c
=BcQ(d);else{c=new O1;EL(c);c.pK=V(d);c.dl=OA(d);}}else c=MA(a,b,W7(a,b));}else if(a.n.cH!=(-536870871))c=MA(a,b,W7(a,b));else{if(b instanceof HV)M(CN(B(3),a.n.eP,a.n.ig));c=IL(b);}if(!Eo(a.n)&&!(a.n.cH==(-536870871)&&!(b instanceof HV))&&a.n.cH!=(-536870788)){f=Un(a,b);if(c instanceof D8&&!(c instanceof GD)&&!(c instanceof DX)&&!(c instanceof FX)){b=c;if(!f.d4(b.bQ)){c=new Sw;F6(c,b.bQ,b.r,b.p4);c.bQ.cb(c);}}if((f.oF()&65535)!=43)c.cb(f);else c.cb(f.bQ);}else{if(c===null)return null;c.cb(b);}if((c.oF()&65535)
!=43)return c;return c.bQ;}
function MA(a,b,c){var d,e,f,g;d=a.n.cH;if(c!==null&&!(c instanceof CI)){switch(d){case -2147483606:BF(a.n);e=new S9;Ef(e,c,b,d);c.cb(BlS);return e;case -2147483605:BF(a.n);e=new UE;Ef(e,c,b,(-2147483606));c.cb(BlS);return e;case -2147483585:BF(a.n);e=new PR;Ef(e,c,b,(-536870849));c.cb(BlS);return e;case -2147483525:e=new OY;f=G6(a.n);d=a.km+1|0;a.km=d;MP(e,f,c,b,(-536870849),d);c.cb(BlS);return e;case -1073741782:case -1073741781:BF(a.n);f=new Qz;Ef(f,c,b,d);c.cb(f);return f;case -1073741761:BF(a.n);f=new UX;Ef(f,
c,b,(-536870849));c.cb(b);return f;case -1073741701:f=new RT;e=G6(a.n);g=a.km+1|0;a.km=g;MP(f,e,c,b,(-536870849),g);c.cb(f);return f;case -536870870:case -536870869:BF(a.n);if(c.oF()!=(-2147483602)){f=new DX;Ef(f,c,b,d);}else if(C1(a,32)){f=new QA;Ef(f,c,b,d);}else{f=new TZ;e=Us(a.fO);Ef(f,c,b,d);f.ut=e;}c.cb(f);return f;case -536870849:BF(a.n);f=new Hx;Ef(f,c,b,(-536870849));c.cb(b);return f;case -536870789:f=new G8;e=G6(a.n);g=a.km+1|0;a.km=g;MP(f,e,c,b,(-536870849),g);c.cb(f);return f;default:}return c;}e
=null;if(c!==null)e=c;switch(d){case -2147483606:case -2147483605:BF(a.n);f=new Xx;F6(f,e,b,d);e.r=f;return f;case -2147483585:BF(a.n);c=new Ss;F6(c,e,b,(-2147483585));return c;case -2147483525:c=new Ul;QS(c,G6(a.n),e,b,(-2147483525));return c;case -1073741782:case -1073741781:BF(a.n);f=new UV;F6(f,e,b,d);e.r=f;return f;case -1073741761:BF(a.n);c=new V$;F6(c,e,b,(-1073741761));return c;case -1073741701:c=new Qk;QS(c,G6(a.n),e,b,(-1073741701));return c;case -536870870:case -536870869:BF(a.n);f=BaQ(e,b,d);e.r
=f;return f;case -536870849:BF(a.n);c=new FX;F6(c,e,b,(-536870849));return c;case -536870789:return BbQ(G6(a.n),e,b,(-536870789));default:}return c;}
function W7(a,b){var c,d,e,f,g,h,i;c=null;d=b instanceof HV;while(true){a:{e=Ku(a.n);if((e&(-2147418113))==(-2147483608)){BF(a.n);f=(e&16711680)>>16;e=e&(-16711681);if(e==(-16777176))a.fO=f;else{if(e!=(-1073741784))f=a.fO;c=S1(a,e,f,b);if(Ku(a.n)!=(-536870871))M(CN(B(3),EC(a.n),HF(a.n)));BF(a.n);}}else{b:{c:{switch(e){case -2147483599:case -2147483598:case -2147483597:case -2147483596:case -2147483595:case -2147483594:case -2147483593:case -2147483592:case -2147483591:g=(e&2147483647)-48|0;if(a.is<g)M(CN(B(3),
EC(a.n),HF(a.n)));BF(a.n);a.dp=a.dp+1|0;c=!C1(a,2)?Bbw(g,a.dp):C1(a,64)?Bam(g,a.dp):BcP(g,a.dp);a.t$.data[g].wT=1;a.ze=1;break a;case -2147483583:break;case -2147483582:BF(a.n);c=A$d(0);break a;case -2147483577:BF(a.n);c=Baf();break a;case -2147483558:BF(a.n);c=new SL;g=a.dp+1|0;a.dp=g;AQA(c,g);break a;case -2147483550:BF(a.n);c=A$d(1);break a;case -2147483526:BF(a.n);c=Ba9();break a;case -536870876:break c;case -536870866:BF(a.n);if(C1(a,32)){c=Bbh();break a;}c=BaT(Us(a.fO));break a;case -536870821:BF(a.n);h
=0;if(Ku(a.n)==(-536870818)){h=1;BF(a.n);}c=ADI(a,h,b);if(Ku(a.n)!=(-536870819))M(CN(B(3),EC(a.n),HF(a.n)));Ub(a.n,1);BF(a.n);break a;case -536870818:BF(a.n);a.dp=a.dp+1|0;if(!C1(a,8)){c=A1d();break a;}c=BcC(Us(a.fO));break a;case 0:i=PV(a.n);if(i!==null)c=LO(a,i);else{if(Eo(a.n)){c=IL(b);break a;}c=AAi(e&65535);}BF(a.n);break a;default:break b;}BF(a.n);c=A1d();break a;}BF(a.n);a.dp=a.dp+1|0;if(C1(a,8)){if(C1(a,1)){c=Ban(a.dp);break a;}c=A_V(a.dp);break a;}if(C1(a,1)){c=BaE(a.dp);break a;}c=Ba1(a.dp);break a;}if
(e>=0&&!H5(a.n)){c=SU(a,e);BF(a.n);}else if(e==(-536870788))c=IL(b);else{if(e!=(-536870871))M(CN(!H5(a.n)?SI(e&65535):PV(a.n).gk(),EC(a.n),HF(a.n)));if(d)M(CN(B(3),EC(a.n),HF(a.n)));c=IL(b);}}}if(e!=(-16777176))break;}return c;}
function ADI(a,b,c){var d;d=LO(a,Im(a,b));d.cb(c);return d;}
function Im(a,b){var c,d,e,f,g,h,i,j,$$je;c=A$B(C1(a,2),C1(a,64));Fz(c,b);d=(-1);e=0;f=0;g=1;a:{b:{c:while(true){if(Eo(a.n))break a;f=a.n.cH==(-536870819)&&!g?0:1;if(!f)break a;d:{switch(a.n.cH){case -536870874:if(d>=0)Dp(c,d);d=BF(a.n);if(a.n.cH!=(-536870874)){d=38;break d;}if(a.n.H==(-536870821)){BF(a.n);e=1;d=(-1);break d;}BF(a.n);if(g){c=Im(a,0);break d;}if(a.n.cH==(-536870819))break d;SB(c,Im(a,0));break d;case -536870867:if(!g&&a.n.H!=(-536870819)&&a.n.H!=(-536870821)&&d>=0){BF(a.n);h=a.n.cH;if(H5(a.n))break c;if
(h<0&&a.n.H!=(-536870819)&&a.n.H!=(-536870821)&&d>=0)break c;e:{try{if(Nq(h))break e;h=h&65535;break e;}catch($$e){$$je=Y($$e);if($$je instanceof BD){break b;}else{throw $$e;}}}try{CG(c,d,h);}catch($$e){$$je=Y($$e);if($$je instanceof BD){break b;}else{throw $$e;}}BF(a.n);d=(-1);break d;}if(d>=0)Dp(c,d);d=45;BF(a.n);break d;case -536870821:if(d>=0){Dp(c,d);d=(-1);}BF(a.n);i=0;if(a.n.cH==(-536870818)){BF(a.n);i=1;}if(!e)AId(c,Im(a,i));else SB(c,Im(a,i));e=0;BF(a.n);break d;case -536870819:if(d>=0)Dp(c,d);d=93;BF(a.n);break d;case -536870818:if
(d>=0)Dp(c,d);d=94;BF(a.n);break d;case 0:if(d>=0)Dp(c,d);j=a.n.k3;if(j===null)d=0;else{ASw(c,j);d=(-1);}BF(a.n);break d;default:}if(d>=0)Dp(c,d);d=BF(a.n);}g=0;}M(CN(B(3),Na(a),a.n.ig));}M(CN(B(3),Na(a),a.n.ig));}if(!f){if(d>=0)Dp(c,d);return c;}M(CN(B(3),Na(a),a.n.ig-1|0));}
function SU(a,b){var c,d,e;c=Mv(b);if(C1(a,2)){a:{if(!(b>=97&&b<=122)){if(b<65)break a;if(b>90)break a;}return A4v(b&65535);}if(C1(a,64)&&b>128){if(c){d=new Td;EL(d);d.dl=2;d.z_=GO(GN(b));return d;}if(PH(b))return AYT(b&65535);if(!QY(b))return A87(b&65535);return A6y(b&65535);}}if(!c){if(PH(b))return AYT(b&65535);if(!QY(b))return AAi(b&65535);return A6y(b&65535);}d=new EX;EL(d);d.dl=2;d.kA=b;e=Iz(b).data;d.tB=e[0];d.sf=e[1];return d;}
function LO(a,b){var c,d,e;if(!ANZ(b)){if(!b.ca){if(b.nR())return AWI(b);return A0$(b);}if(!b.nR())return A6N(b);c=new MQ;Wh(c,b);return c;}c=YY(b);d=new OL;Cz(d);d.zS=c;d.Hq=c.cj;if(!b.ca){if(b.nR())return AEp(AWI(Kc(b)),d);return AEp(A0$(Kc(b)),d);}if(!b.nR())return AEp(A6N(Kc(b)),d);c=new P_;e=new MQ;Wh(e,Kc(b));AHl(c,e,d);return c;}
function A3u(a){return a.is;}
function AQX(a){return a.km+1|0;}
function AD7(a){return a.dp+1|0;}
function Kf(b){if(b>=97&&b<=122)b=(b-32|0)&65535;else if(b>=65&&b<=90)b=(b+32|0)&65535;return b;}
function C1(a,b){return (a.fO&b)!=b?0:1;}
function AS9(a){a.t$=J(DW,10);a.is=(-1);a.km=(-1);a.dp=(-1);}
function AB1(){Lz.call(this);}
function Sm(a,b,c,d){var e=new AB1();A6B(e,a,b,c,d);return e;}
function A6B(a,b,c,d,e){SK(a,b,c,d,150,20,e);}
function NQ(){var a=this;CS.call(a);a.uC=null;a.uf=null;a.iP=null;a.jx=0;}
function AJu(a){var b;b=0;while(b<a.iP.ne.data.length){S(a.bG,Sm(b,((a.bm/2|0)-155|0)+((b%2|0)*160|0)|0,(a.bC/6|0)+(24*(b>>1)|0)|0,K5(a.iP,b)));b=b+1|0;}S(a.bG,Dj(200,(a.bm/2|0)-100|0,(a.bC/6|0)+168|0,B(598)));}
function AIg(a,b){var c,d,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=0;while(c<a.iP.ne.data.length){Z(a.bG,c).kp=K5(a.iP,c);c=c+1|0;}if(b.cl!=200){a.jx=b.cl;d=new U;W(d);b.kp=V(I(I(I(d,B(580)),K5(a.iP,b.cl)),B(581)));return;}b=a.J;d=a.uC;$p=1;case 1:ADW(b,d);if(C()){break _;}return;default:E$();}}C4().s(a,b,c,d,$p);}
function ALQ(a,b,c){var $p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.jx>=0){X6(a.iP,a.jx,c);Z(a.bG,a.jx).kp=K5(a.iP,a.jx);a.jx=(-1);return;}$p=1;case 1:YQ(a,b,c);if(C()){break _;}return;default:E$();}}C4().s(a,b,c,$p);}
function AGy(a,b,c,d){var $p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:ABi(a);if(C()){break _;}DG(a,a.bZ,a.uf,a.bm/2|0,20,16777215);$p=2;case 2:AFF(a,b,c,d);if(C()){break _;}return;default:E$();}}C4().s(a,b,c,d,$p);}
function U4(){OB.call(this);}
function A1P(a){S(a.bG,Dj(6,(a.bm/2|0)-100|0,(a.bC/6|0)+168|0,B(607)));}
function AMa(a,b){var c,d,e,f,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=ANt(a,b);if(C()){break _;}c=$z;if(c===null)return;d=a.J;e=new U$;f=new U;W(f);f=V(I(I(I(f,B(609)),c),B(610)));DR(e);e.B5=a;e.BU=B(611);e.BW=f;e.yS=b;$p=2;case 2:ADW(d,e);if(C()){break _;}return;default:E$();}}C4().s(a,b,c,d,e,f,$p);}
function AQ7(a,b,c){var d,e,f,g,h,i,j,k,l,m,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b){$p=2;continue _;}d=a.J;e=a.rz;$p=1;case 1:ADW(d,e);if(C()){break _;}return;case 2:$z=ANt(a,c);if(C()){break _;}d=$z;e=new U;W(e);f=V(I(I(e,d),B(23)));e=B(612);d=B(613);g=Bc3.ir;h=B(614);$p=3;case 3:AR5(g,e,h);if(C()){break _;}b=1;c=1;Be();i=QZ();h=Bey;$p=4;case 4:A5n(h,
f,b,c,i);if(C()){break _;}j=0;k=0;l=H0(i);while(true){if(!Fq(l)){e=H0(i);while(Fq(e)){d=Fm(e);if(d.j$){d=d.jC;$p=9;continue _;}}$p=6;continue _;}h=Fm(l);if(!h.j$)break;}h=h.jC;$p=5;case 5:AL4(h);if(C()){break _;}c=j+1|0;if((c-k|0)>=10){b=Nd(c/i.gP*100.0)|0;m=new U;W(m);h=KL(d,B(615),V(Bf(I(m,B(3)),c)));$p=7;continue _;}j=c;while(true){if(!Fq(l)){e=H0(i);while(Fq(e)){d=Fm(e);if(d.j$){d=d.jC;$p=9;continue _;}}$p=6;continue _;}h=Fm(l);if(!h.j$)break;}h=h.jC;continue _;case 6:AL4(f);if(C()){break _;}d=a.J;e=a.rz;$p
=1;continue _;case 7:AR5(g,e,h);if(C()){break _;}$p=8;case 8:XK(g,b);if(C()){break _;}j=c;k=c;while(true){if(!Fq(l)){e=H0(i);while(Fq(e)){d=Fm(e);if(d.j$){d=d.jC;$p=9;continue _;}}$p=6;continue _;}h=Fm(l);if(!h.j$)break;}h=h.jC;$p=5;continue _;case 9:AL4(d);if(C()){break _;}while(Fq(e)){d=Fm(e);if(!d.j$)continue;else{d=d.jC;continue _;}}$p=6;continue _;default:E$();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function NT(){var a=this;D.call(a);a.kD=0.0;a.kt=0.0;a.HO=0;a.um=0;}
function BlT(){var a=new NT();ADc(a);return a;}
function ADc(a){a.kD=0.0;a.kt=0.0;a.HO=0;a.um=0;}
function Yp(){var a=this;NT.call(a);a.j6=null;a.no=null;}
function V7(a){var b=new Yp();AZV(b,a);return b;}
function AZV(a,b){ADc(a);a.j6=$rt_createBooleanArray(10);a.no=b;}
function APu(a,b,c){var d;d=(-1);if(b==a.no.t1.bI)d=0;if(b==a.no.xm.bI)d=1;if(b==a.no.tT.bI)d=2;if(b==a.no.uv.bI)d=3;if(b==a.no.yH.bI)d=4;if(d>=0)a.j6.data[d]=c;}
function AO1(a){var b;b=0;while(b<10){a.j6.data[b]=0;b=b+1|0;}}
function AOC(a,b){a.kD=0.0;a.kt=0.0;if(a.j6.data[0])a.kt=a.kt+1.0;if(a.j6.data[1])a.kt=a.kt-1.0;if(a.j6.data[2])a.kD=a.kD+1.0;if(a.j6.data[3])a.kD=a.kD-1.0;a.um=a.j6.data[4];}
function Q0(){D.call(this);this.m$=null;}
var BlU=null;function AYY(){AYY=Br(Q0);A35();}
function A_X(){var a=new Q0();ALB(a);return a;}
function Wt(){AYY();return BlU;}
function ALB(a){var b,c,d,e;AYY();WL(a);a.m$=Ci();AHn(Bbr(),a);Xz(A_6(),a);ADZ(Bbn(),a);AJS(Ba5(),a);Yf(Bak(),a);ASG(BaV(),a);b=new Cd;L();Va(b,Be8,1);c=J(D,5);d=c.data;d[0]=B(616);d[1]=B(616);d[2]=B(616);d[3]=BI(35);BB();d[4]=Bf$;Ck(a,b,c);e=G0(Bfd,1);c=J(D,7);d=c.data;d[0]=B(617);d[1]=B(618);d[2]=B(617);d[3]=BI(88);d[4]=Bf9;d[5]=BI(35);d[6]=Be5;Ck(a,e,c);e=G0(BeN,3);c=J(D,3);d=c.data;d[0]=B(616);d[1]=BI(35);d[2]=BeS;Ck(a,e,c);e=G0(Bf6,1);c=J(D,5);d=c.data;d[0]=B(619);d[1]=B(616);d[2]=B(619);d[3]=BI(35);d[4]
=BhY;Ck(a,e,c);e=EJ(Biw,1);c=J(D,5);d=c.data;d[0]=B(620);d[1]=B(620);d[2]=B(620);d[3]=BI(35);d[4]=BeU;Ck(a,e,c);e=EJ(Bg8,1);c=J(D,7);d=c.data;d[0]=B(616);d[1]=B(616);d[2]=B(621);d[3]=BI(35);d[4]=BeU;d[5]=BI(88);d[6]=BhY;Ck(a,e,c);e=G0(BeU,4);c=J(D,3);d=c.data;d[0]=B(622);d[1]=BI(35);d[2]=BeV;Ck(a,e,c);e=EJ(BhY,4);c=J(D,4);d=c.data;d[0]=B(622);d[1]=B(622);d[2]=BI(35);d[3]=BeU;Ck(a,e,c);e=G0(BeX,4);c=J(D,6);d=c.data;d[0]=B(72);d[1]=B(622);d[2]=BI(88);d[3]=Bht;d[4]=BI(35);d[5]=BhY;Ck(a,e,c);e=EJ(BhZ,4);c=J(D,4);d
=c.data;d[0]=B(619);d[1]=B(623);d[2]=BI(35);d[3]=BeU;Ck(a,e,c);e=G0(Bg1,16);c=J(D,7);d=c.data;d[0]=B(624);d[1]=B(617);d[2]=B(624);d[3]=BI(88);d[4]=BhJ;d[5]=BI(35);d[6]=BhY;Ck(a,e,c);e=EJ(BiA,1);c=J(D,4);d=c.data;d[0]=B(619);d[1]=B(616);d[2]=BI(35);d[3]=BhJ;Ck(a,e,c);e=EJ(Bix,1);c=J(D,4);d=c.data;d[0]=B(619);d[1]=B(623);d[2]=BI(35);d[3]=BhJ;Ck(a,e,c);e=EJ(BhG,1);c=J(D,6);d=c.data;d[0]=B(625);d[1]=B(626);d[2]=BI(65);d[3]=BhJ;d[4]=BI(66);d[5]=Bhs;Ck(a,e,c);e=EJ(Bh$,1);c=J(D,3);d=c.data;d[0]=B(616);d[1]=BI(35);d[2]
=Bhw;Ck(a,e,c);e=G0(BgP,4);c=J(D,5);d=c.data;d[0]=B(627);d[1]=B(628);d[2]=B(616);d[3]=BI(35);d[4]=BeU;Ck(a,e,c);e=G0(Bg2,4);c=J(D,5);d=c.data;d[0]=B(627);d[1]=B(628);d[2]=B(616);d[3]=BI(35);d[4]=BeS;Ck(a,e,c);e=EJ(Biu,1);c=J(D,7);d=c.data;d[0]=B(616);d[1]=B(618);d[2]=B(616);d[3]=BI(35);d[4]=BhY;d[5]=BI(88);d[6]=Be8;Ck(a,e,c);e=EJ(Biv,1);c=J(D,7);d=c.data;d[0]=B(616);d[1]=B(618);d[2]=B(616);d[3]=BI(35);d[4]=Bfb;d[5]=BI(88);d[6]=BhH;Ck(a,e,c);RE(a.m$,Bay(a));Cg(Dz(),BL(I(Bf(BX(),CY(a.m$)),B(629))));}
function Ck(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=c.data;e=B(3);f=0;g=0;h=0;if(!Sq(d[f],$rt_arraycls(B4))){while(d[f] instanceof B4){i=f+1|0;j=d[f];h=h+1|0;g=Bi(j);k=new U;W(k);e=V(I(I(k,e),j));f=i;}i=f;}else{i=1;l=d[f];m=0;while(true){c=l.data;if(m>=c.length)break;k=c[m];h=h+1|0;g=Bi(k);j=new U;W(j);e=V(I(I(j,e),k));m=m+1|0;}}n=Df();while(i<d.length){o=d[i];p=0;m=i+1|0;if(d[m] instanceof Bc)p=d[m].cW;else if(d[m] instanceof O)p=d[m].b;BP(n,o,CZ(p));i=i+2|0;}i=Bj(g,h);d=$rt_createIntArray(i);c=d.data;p=0;while
(p<i){q=Ba(e,p);if(!D0(n,BI(q)))c[p]=(-1);else c[p]=CP(n,BI(q)).f4;p=p+1|0;}e=a.m$;j=new US;j.H0=b.bA;j.kP=g;j.q1=h;j.xP=d;j.xV=b;S(e,j);}
function RO(a,b){var c,d;c=0;while(c<a.m$.s){d=Z(a.m$,c);if(ALr(d,b))return AHm(d,b);c=c+1|0;}return null;}
function A35(){BlU=A_X();}
function Co(){var a=this;D.call(a);a.r=null;a.eQ=0;a.CQ=null;a.p4=0;}
var Bc$=0;function BlV(){var a=new Co();Cz(a);return a;}
function BlW(a){var b=new Co();NC(b,a);return b;}
function Cz(a){var b,c;b=new Gj;c=Bc$;Bc$=c+1|0;Lp(b,c);a.CQ=Mx(b);}
function NC(a,b){var c,d;c=new Gj;d=Bc$;Bc$=d+1|0;Lp(c,d);a.CQ=Mx(c);a.r=b;}
function Jg(a,b,c,d){var e;e=d.by;while(true){if(b>e)return (-1);if(a.k(b,c,d)>=0)break;b=b+1|0;}return b;}
function Jr(a,b,c,d,e){while(true){if(c<b)return (-1);if(a.k(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function A4K(a,b){a.p4=b;}
function A4l(a){return a.p4;}
function A0z(a){return a.r;}
function A1k(a,b){a.r=b;}
function A$r(a,b){return 1;}
function A$_(a){return null;}
function K8(a){var b;a.eQ=1;if(a.r!==null){if(!a.r.eQ){b=a.r.lx();if(b!==null){a.r.eQ=1;a.r=b;}a.r.iX();}else if(a.r instanceof IC&&a.r.f5.wT)a.r=a.r.r;}}
function AHz(){Bc$=1;}
function N3(){CQ.call(this);}
function BlX(){var a=new N3();AVP(a);return a;}
function AVP(a){Cw(a);}
function A9b(a,b){return;}
function A0m(a,b){return;}
function AUJ(a){return 0;}
function DW(){var a=this;Co.call(a);a.wT=0;a.ih=0;}
var BlS=null;function Bcs(a){var b=new DW();Hb(b,a);return b;}
function Hb(a,b){Cz(a);a.ih=b;}
function ATL(a,b,c,d){var e,f;e=JK(d,a.ih);M0(d,a.ih,b);f=a.r.k(b,c,d);if(f<0)M0(d,a.ih,e);return f;}
function A7u(a){return a.ih;}
function AT7(a,b){return 0;}
function AK5(){var b;b=new TU;Cz(b);BlS=b;}
function HX(){var a=this;D.call(a);a.bE=null;a.l$=0;a.h4=0;a.Bi=0;a.qY=0;a.cH=0;a.H=0;a.DW=0;a.k3=null;a.jF=null;a.bi=0;a.qh=0;a.ig=0;a.pI=0;a.eP=null;}
var BlY=null;var BlQ=null;var BlR=0;function Ku(a){return a.cH;}
function Ub(a,b){if(b>0&&b<3)a.h4=b;if(b==1){a.H=a.cH;a.jF=a.k3;a.bi=a.pI;a.pI=a.ig;GC(a);}}
function AJx(a,b){a.l$=b;a.H=a.cH;a.jF=a.k3;a.bi=a.ig+1|0;a.pI=a.ig;GC(a);}
function PV(a){return a.k3;}
function H5(a){return a.k3===null?0:1;}
function Lh(a){return a.jF===null?0:1;}
function BF(a){GC(a);return a.qY;}
function G6(a){var b;b=a.k3;GC(a);return b;}
function A3S(a){return a.H;}
function AVU(a){return a.qY;}
function GC(a){var b,c,d,e,f,$$je;a.qY=a.cH;a.cH=a.H;a.k3=a.jF;a.ig=a.pI;a.pI=a.bi;while(true){b=0;a.H=a.bi>=a.bE.data.length?0:Mf(a);a.jF=null;if(a.h4==4){if(a.H!=92)return;a.H=a.bi>=a.bE.data.length?0:a.bE.data[CF(a)];switch(a.H){case 69:break;default:a.H=92;a.bi=a.qh;return;}a.h4=a.Bi;a.H=a.bi>(a.bE.data.length-2|0)?0:Mf(a);}a:{if(a.H!=92){if(a.h4==1)switch(a.H){case 36:a.H=(-536870876);break a;case 40:if(a.bE.data[a.bi]!=63){a.H=(-2147483608);break a;}CF(a);c=a.bE.data[a.bi];d=0;while(true){b:{if(d){d=0;switch
(c){case 33:break;case 61:a.H=(-134217688);CF(a);break b;default:M(CN(B(3),EC(a),a.bi));}a.H=(-67108824);CF(a);}else{switch(c){case 33:break;case 60:CF(a);c=a.bE.data[a.bi];d=1;break b;case 61:a.H=(-536870872);CF(a);break b;case 62:a.H=(-33554392);CF(a);break b;default:a.H=ASk(a);if(a.H<256){a.l$=a.H;a.H=a.H<<16;a.H=(-1073741784)|a.H;break b;}a.H=a.H&255;a.l$=a.H;a.H=a.H<<16;a.H=(-16777176)|a.H;break b;}a.H=(-268435416);CF(a);}}if(!d)break;}break a;case 41:a.H=(-536870871);break a;case 42:case 43:case 63:switch
(a.bi>=a.bE.data.length?42:a.bE.data[a.bi]){case 43:a.H=a.H|(-2147483648);CF(a);break a;case 63:a.H=a.H|(-1073741824);CF(a);break a;default:}a.H=a.H|(-536870912);break a;case 46:a.H=(-536870866);break a;case 91:a.H=(-536870821);Ub(a,2);break a;case 93:if(a.h4!=2)break a;a.H=(-536870819);break a;case 94:a.H=(-536870818);break a;case 123:a.jF=AGs(a,a.H);break a;case 124:a.H=(-536870788);break a;default:}else if(a.h4==2)switch(a.H){case 38:a.H=(-536870874);break a;case 45:a.H=(-536870867);break a;case 91:a.H=(-536870821);break a;case 93:a.H
=(-536870819);break a;case 94:a.H=(-536870818);break a;default:}}else{c=a.bi>=(a.bE.data.length-2|0)?(-1):Mf(a);c:{a.H=c;switch(a.H){case -1:M(CN(B(3),EC(a),a.bi));case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 8:case 9:case 10:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 27:case 28:case 29:case 30:case 31:case 32:case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 118:break;case 48:a.H
=ADP(a);break a;case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:if(a.h4!=1)break a;a.H=(-2147483648)|a.H;break a;case 65:a.H=(-2147483583);break a;case 66:a.H=(-2147483582);break a;case 67:case 69:case 70:case 72:case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 82:case 84:case 85:case 86:case 88:case 89:case 103:case 104:case 105:case 106:case 107:case 108:case 109:case 111:case 113:case 121:M(CN(B(3),EC(a),a.bi));case 68:case 83:case 87:case 100:case 115:case 119:a.jF=QQ(Lj(a.bE,
a.qh,1),0);a.H=0;break a;case 71:a.H=(-2147483577);break a;case 80:case 112:break c;case 81:a.Bi=a.h4;a.h4=4;b=1;break a;case 90:a.H=(-2147483558);break a;case 97:a.H=7;break a;case 98:a.H=(-2147483550);break a;case 99:if(a.bi>=(a.bE.data.length-2|0))M(CN(B(3),EC(a),a.bi));a.H=a.bE.data[CF(a)]&31;break a;case 101:a.H=27;break a;case 102:a.H=12;break a;case 110:a.H=10;break a;case 114:a.H=13;break a;case 116:a.H=9;break a;case 117:a.H=UF(a,4);break a;case 120:a.H=UF(a,2);break a;case 122:a.H=(-2147483526);break a;default:}break a;}e
=AOp(a);f=0;if(a.H==80)f=1;try{a.jF=QQ(e,f);}catch($$e){$$je=Y($$e);if($$je instanceof MR){M(CN(B(3),EC(a),a.bi));}else{throw $$e;}}a.H=0;}}if(b)continue;else break;}}
function AOp(a){var b,c,d;b=new U;HC(b,10);if(a.bi<(a.bE.data.length-2|0)){if(a.bE.data[a.bi]!=123){b=new U;W(b);return V(I(I(b,B(630)),Lj(a.bE,CF(a),1)));}CF(a);c=0;a:{while(a.bi<(a.bE.data.length-2|0)){c=a.bE.data[CF(a)];if(c==125)break a;DQ(b,c);}}if(c!=125)M(CN(B(3),a.eP,a.bi));}if(!Kb(b))M(CN(B(3),a.eP,a.bi));d=V(b);if(Bi(d)==1){b=new U;W(b);return V(I(I(b,B(630)),d));}b:{c:{if(Bi(d)>3){if(IB(d,B(630)))break c;if(IB(d,B(631)))break c;}break b;}d=Jw(d,2);}return d;}
function AGs(a,b){var c,d,e,f,$$je;c=new U;HC(c,4);d=(-1);e=2147483647;a:{while(true){if(a.bi>=a.bE.data.length)break a;b=a.bE.data[CF(a)];if(b==125)break a;if(b==44&&d<0)try{d=Ld(BL(c),10);AGJ(c,0,Kb(c));continue;}catch($$e){$$je=Y($$e);if($$je instanceof Ez){break;}else{throw $$e;}}DQ(c,b&65535);}M(CN(B(3),a.eP,a.bi));}if(b!=125)M(CN(B(3),a.eP,a.bi));if(Kb(c)>0)b:{try{e=Ld(BL(c),10);if(d>=0)break b;d=e;break b;}catch($$e){$$je=Y($$e);if($$je instanceof Ez){}else{throw $$e;}}M(CN(B(3),a.eP,a.bi));}else if(d
<0)M(CN(B(3),a.eP,a.bi));if((d|e|(e-d|0))<0)M(CN(B(3),a.eP,a.bi));f=a.bi>=a.bE.data.length?42:a.bE.data[a.bi];c:{switch(f){case 43:a.H=(-2147483525);CF(a);break c;case 63:a.H=(-1073741701);CF(a);break c;default:}a.H=(-536870789);}c=new Ts;c.jf=d;c.ip=e;return c;}
function EC(a){return a.eP;}
function Eo(a){return !a.cH&&!a.H&&a.bi==a.DW&&!H5(a)?1:0;}
function Nq(b){return b<0?0:1;}
function F_(a){return !Eo(a)&&!H5(a)&&Nq(a.cH)?1:0;}
function TT(a){return a.cH<=56319&&a.cH>=55296?1:0;}
function Wz(a){return a.cH<=57343&&a.cH>=56320?1:0;}
function QY(b){return b<=56319&&b>=55296?1:0;}
function PH(b){return b<=57343&&b>=56320?1:0;}
function UF(a,b){var c,d,e,f,$$je;c=new U;HC(c,b);d=a.bE.data.length-2|0;e=0;while(true){f=R(e,b);if(f>=0)break;if(a.bi>=d)break;DQ(c,a.bE.data[CF(a)]);e=e+1|0;}if(!f)a:{try{b=Ld(BL(c),16);}catch($$e){$$je=Y($$e);if($$je instanceof Ez){break a;}else{throw $$e;}}return b;}M(CN(B(3),a.eP,a.bi));}
function ADP(a){var b,c,d,e,f;b=3;c=1;d=a.bE.data.length-2|0;e=Wm(a.bE.data[a.bi],8);switch(e){case -1:break;default:if(e>3)b=2;CF(a);a:{while(true){if(c>=b)break a;if(a.bi>=d)break a;f=Wm(a.bE.data[a.bi],8);if(f<0)break;e=(e*8|0)+f|0;CF(a);c=c+1|0;}}return e;}M(CN(B(3),a.eP,a.bi));}
function ASk(a){var b,c;b=1;c=a.l$;a:while(true){if(a.bi>=a.bE.data.length)M(CN(B(3),a.eP,a.bi));b:{c:{switch(a.bE.data[a.bi]){case 41:CF(a);return c|256;case 45:if(!b)M(CN(B(3),a.eP,a.bi));b=0;break b;case 58:break a;case 100:break c;case 105:c=b?c|2:(c^2)&c;break b;case 109:c=b?c|8:(c^8)&c;break b;case 115:c=b?c|32:(c^32)&c;break b;case 117:c=b?c|64:(c^64)&c;break b;case 120:c=b?c|4:(c^4)&c;break b;default:}break b;}c=b?c|1:(c^1)&c;}CF(a);}CF(a);return c;}
function CF(a){var b,c;a.qh=a.bi;if(!(a.l$&4))a.bi=a.bi+1|0;else{b=a.bE.data.length-2|0;a.bi=a.bi+1|0;a:while(true){if(a.bi<b&&Qj(a.bE.data[a.bi])){a.bi=a.bi+1|0;continue;}if(a.bi>=b)break;if(a.bE.data[a.bi]!=35)break;a.bi=a.bi+1|0;while(true){if(a.bi>=b)continue a;c=a.bE.data[a.bi];if(c!=10&&c!=13&&c!=133&&(c|1)!=8233?0:1)continue a;a.bi=a.bi+1|0;}}}return a.qh;}
function AQT(b){return BlY.Nj(b);}
function Mf(a){var b,c,d;b=a.bE.data[CF(a)];if(Du(b)){c=a.qh+1|0;if(c<a.bE.data.length){d=a.bE.data[c];if(DS(d)){CF(a);return EH(b,d);}}}return b;}
function HF(a){return a.ig;}
function ARd(){var a=this;Cc.call(a);a.AQ=null;a.re=null;a.n7=0;}
function CN(a,b,c){var d=new ARd();A3D(d,a,b,c);return d;}
function A3D(a,b,c,d){P(a);a.n7=(-1);a.AQ=b;a.re=c;a.n7=d;}
function A$7(a){var b,c,d,e,f,g,h,i;b=B(3);if(a.n7>=1){c=$rt_createCharArray(a.n7);d=c.data;e=0;f=d.length;if(e>f){b=new Cc;P(b);M(b);}while(e<f){g=e+1|0;d[e]=32;e=g;}b=Tf(c);}h=new U;W(h);h=I(h,a.AQ);if(a.re!==null&&Bi(a.re)){i=new U;W(i);b=V(I(I(I(I(Bf(i,a.n7),B(632)),a.re),B(632)),b));}else b=B(3);return V(I(h,b));}
function Mw(){CQ.call(this);this.ts=0;}
function BlZ(){var a=new Mw();A4i(a);return a;}
function A4i(a){Cw(a);}
function A8A(a,b){KM(b,a.ts);}
function A73(a,b){a.ts=N2(b);}
function A6F(a){return 1;}
function MY(){CQ.call(this);this.tm=0;}
function Bl0(){var a=new MY();A5X(a);return a;}
function A5X(a){Cw(a);}
function AWl(a,b){AAa(b,a.tm);}
function AZz(a,b){a.tm=XM(b);}
function A5I(a){return 2;}
function Li(){CQ.call(this);this.r7=0;}
function Bl1(){var a=new Li();A1I(a);return a;}
function A1I(a){Cw(a);}
function A15(a,b){JP(b,a.r7);}
function AY6(a,b){a.r7=H9(b);}
function AVp(a){return 3;}
function Oc(){CQ.call(this);this.s1=Long_ZERO;}
function Bl2(){var a=new Oc();AZ0(a);return a;}
function AZ0(a){Cw(a);}
function ATh(a,b){UK(b,a.s1);}
function A_k(a,b){a.s1=To(b);}
function A2G(a){return 4;}
function Pl(){CQ.call(this);this.nl=0.0;}
function Bl3(){var a=new Pl();AZX(a);return a;}
function A6M(a){var b=new Pl();AVV(b,a);return b;}
function AZX(a){Cw(a);}
function AVV(a,b){Cw(a);a.nl=b;}
function AS$(a,b){APj(b,a.nl);}
function A7V(a,b){a.nl=AA3(b);}
function ASO(a){return 5;}
function Mp(){CQ.call(this);this.iL=0.0;}
function Bl4(){var a=new Mp();AZB(a);return a;}
function AZB(a){Cw(a);}
function A6X(a,b){APo(b,a.iL);}
function AU9(a,b){a.iL=APm(b);}
function A0U(a){return 6;}
function MI(){CQ.call(this);this.mn=null;}
function Bl5(){var a=new MI();A_C(a);return a;}
function A_C(a){Cw(a);}
function A47(a,b){JP(b,a.mn.data.length);AOB(b,a.mn);}
function A7e(a,b){a.mn=$rt_createByteArray(H9(b));AMV(b,a.mn);}
function A9y(a){return 7;}
function OI(){CQ.call(this);this.Ax=null;}
function Bl6(){var a=new OI();A8j(a);return a;}
function A8j(a){Cw(a);}
function A$O(a,b){Xs(b,a.Ax);}
function AY7(a,b){a.Ax=GU(b);}
function ATs(a){return 8;}
function QW(){var a=this;CQ.call(a);a.hb=null;a.mX=0;}
function L9(){var a=new QW();AG7(a);return a;}
function AG7(a){Cw(a);a.hb=Ci();}
function A9t(a,b){var c;if(a.hb.s<=0)a.mX=1;else a.mX=Z(a.hb,0).fd();KM(b,a.mX);JP(b,a.hb.s);c=0;while(c<a.hb.s){Z(a.hb,c).gM(b);c=c+1|0;}}
function AY0(a,b){var c,d,e;a.mX=N2(b);c=H9(b);a.hb=Ci();d=0;while(d<c){e=AE7(a.mX);e.gE(b);S(a.hb,e);d=d+1|0;}}
function AYA(a){return 9;}
function Jt(a,b){a.mX=b.fd();S(a.hb,b);}
function Fc(a,b){return Z(a.hb,b);}
function AOv(a){return a.hb.s;}
function TF(){var a=this;D.call(a);a.Au=null;a.xd=null;}
function ARK(a){CM(a.Au,(UC(a.xd.result)?1:0)?null:A8t(a.xd.result));}
function AUs(a){ARK(a);}
function TE(){D.call(this);this.Ei=null;}
function XG(a){CM(a.Ei,null);}
function AXr(a){XG(a);}
function ARU(){var a=this;D.call(a);a.EU=null;a.qi=null;}
function Bbr(){var a=new ARU();AXD(a);return a;}
function AXD(a){var b,c,d,e;b=J($rt_arraycls(B4),4);c=b.data;d=J(B4,3);e=d.data;e[0]=B(633);e[1]=B(623);e[2]=B(623);c[0]=d;d=J(B4,3);e=d.data;e[0]=B(72);e[1]=B(622);e[2]=B(622);c[1]=d;d=J(B4,3);e=d.data;e[0]=B(634);e[1]=B(635);e[2]=B(636);c[2]=d;d=J(B4,3);e=d.data;e[0]=B(634);e[1]=B(636);e[2]=B(636);c[3]=d;a.EU=b;b=J($rt_arraycls(D),5);c=b.data;d=J(D,5);e=d.data;L();e[0]=BeU;e[1]=BeS;BB();e[2]=BhJ;e[3]=Bhu;e[4]=BhK;c[0]=d;d=J(D,5);e=d.data;e[0]=BhO;e[1]=BhS;e[2]=BhE;e[3]=BhW;e[4]=Bh3;c[1]=d;d=J(D,5);e=d.data;e[0]
=BhN;e[1]=BhR;e[2]=BhD;e[3]=BhV;e[4]=Bh2;c[2]=d;d=J(D,5);e=d.data;e[0]=BhP;e[1]=BhT;e[2]=BhF;e[3]=BhX;e[4]=Bh4;c[3]=d;d=J(D,5);e=d.data;e[0]=Bh5;e[1]=Bh6;e[2]=Bh7;e[3]=Bh8;e[4]=Bh9;c[4]=d;a.qi=b;}
function AHn(a,b){var c,d,e,f,g,h,i,j;c=0;while(c<a.qi.data[0].data.length){d=a.qi.data[0].data[c];e=0;while(e<(a.qi.data.length-1|0)){f=a.qi.data;g=e+1|0;h=f[g].data[c];i=Qn(h);f=J(D,5);j=f.data;j[0]=a.EU.data[e];j[1]=BI(35);BB();j[2]=BhY;j[3]=BI(88);j[4]=d;Ck(b,i,f);e=g;}c=c+1|0;}}
function X0(){var a=this;D.call(a);a.Bk=null;a.pv=null;}
function A_6(){var a=new X0();A$j(a);return a;}
function A$j(a){var b,c,d,e;b=J($rt_arraycls(B4),1);c=b.data;d=J(B4,3);e=d.data;e[0]=B(72);e[1]=B(72);e[2]=B(622);c[0]=d;a.Bk=b;b=J($rt_arraycls(D),2);c=b.data;d=J(D,5);e=d.data;L();e[0]=BeU;e[1]=BeS;BB();e[2]=BhJ;e[3]=Bhu;e[4]=BhK;c[0]=d;d=J(D,5);e=d.data;e[0]=BhM;e[1]=BhQ;e[2]=BhL;e[3]=BhU;e[4]=Bh1;c[1]=d;a.pv=b;}
function Xz(a,b){var c,d,e,f,g,h,i,j,k;c=0;while(c<a.pv.data[0].data.length){d=a.pv.data[0].data[c];e=0;while(e<(a.pv.data.length-1|0)){f=a.pv.data;g=e+1|0;h=f[g].data[c];i=Qn(h);j=J(D,5);k=j.data;k[0]=a.Bk.data[e];k[1]=BI(35);BB();k[2]=BhY;k[3]=BI(88);k[4]=d;Ck(b,i,j);e=g;}c=c+1|0;}h=new Cd;BB();Gq(h,BhI,1);f=J(D,7);k=f.data;k[0]=B(637);k[1]=B(638);k[2]=B(637);k[3]=BI(88);k[4]=Bf$;k[5]=BI(35);k[6]=BhY;Ck(b,h,f);d=EJ(Bf8,4);f=J(D,9);k=f.data;k[0]=B(72);k[1]=B(622);k[2]=B(48);k[3]=BI(89);k[4]=Bf7;k[5]=BI(88);k[6]
=BhJ;k[7]=BI(35);k[8]=BhY;Ck(b,d,f);}
function XT(){D.call(this);this.st=null;}
function Bbn(){var a=new XT();A2b(a);return a;}
function A2b(a){var b,c,d,e;b=J($rt_arraycls(D),3);c=b.data;d=J(D,2);e=d.data;L();e[0]=Bfb;BB();e[1]=BhK;c[0]=d;d=J(D,2);e=d.data;e[0]=Bfa;e[1]=BhJ;c[1]=d;d=J(D,2);e=d.data;e[0]=BgT;e[1]=Bhu;c[2]=d;a.st=b;}
function ADZ(a,b){var c,d,e,f,g,h;c=0;while(c<a.st.data.length){d=a.st.data[c].data[0];e=a.st.data[c].data[1];f=AL3(d);g=J(D,5);h=g.data;h[0]=B(616);h[1]=B(616);h[2]=B(616);h[3]=BI(35);h[4]=e;Ck(b,f,g);f=EJ(e,9);g=J(D,3);h=g.data;h[0]=B(622);h[1]=BI(35);h[2]=d;Ck(b,f,g);c=c+1|0;}}
function AEd(){D.call(this);}
function Ba5(){var a=new AEd();A0C(a);return a;}
function A0C(a){return;}
function AJS(a,b){var c,d,e;c=new Cd;BB();DD(c,Bh0);d=J(D,9);e=d.data;e[0]=B(48);e[1]=B(72);e[2]=B(622);e[3]=BI(88);L();e[4]=Be3;e[5]=BI(89);e[6]=Be4;e[7]=BI(35);e[8]=BhZ;Ck(b,c,d);c=Qn(Bh0);d=J(D,9);e=d.data;e[0]=B(48);e[1]=B(72);e[2]=B(622);e[3]=BI(88);e[4]=Be4;e[5]=BI(89);e[6]=Be3;e[7]=BI(35);e[8]=BhZ;Ck(b,c,d);}
function ART(){D.call(this);}
function Bak(){var a=new ART();A6P(a);return a;}
function A6P(a){return;}
function Yf(a,b){var c,d,e;c=new Cd;L();AH1(c,BgQ);d=J(D,5);e=d.data;e[0]=B(616);e[1]=B(619);e[2]=B(616);e[3]=BI(35);e[4]=BeU;Ck(b,c,d);c=AL3(BgX);d=J(D,5);e=d.data;e[0]=B(616);e[1]=B(619);e[2]=B(616);e[3]=BI(35);e[4]=BeS;Ck(b,c,d);c=AL3(BgU);d=J(D,4);e=d.data;e[0]=B(620);e[1]=B(620);e[2]=BI(35);e[3]=BeU;Ck(b,c,d);}
function AFa(){var a=this;D.call(a);a.zJ=null;a.n4=null;}
function BaV(){var a=new AFa();AU_(a);return a;}
function AU_(a){var b,c,d,e;b=J($rt_arraycls(B4),4);c=b.data;d=J(B4,2);e=d.data;e[0]=B(633);e[1]=B(624);c[0]=d;d=J(B4,3);e=d.data;e[0]=B(624);e[1]=B(633);e[2]=B(633);c[1]=d;d=J(B4,3);e=d.data;e[0]=B(633);e[1]=B(624);e[2]=B(624);c[2]=d;d=J(B4,2);e=d.data;e[0]=B(624);e[1]=B(624);c[3]=d;a.zJ=b;b=J($rt_arraycls(D),5);c=b.data;d=J(D,5);e=d.data;L();e[0]=Be8;e[1]=Bgi;BB();e[2]=BhJ;e[3]=Bhu;e[4]=BhK;c[0]=d;d=J(D,5);e=d.data;e[0]=Bh_;e[1]=Bid;e[2]=Bih;e[3]=Bil;e[4]=Bip;c[1]=d;d=J(D,5);e=d.data;e[0]=Bia;e[1]=Bie;e[2]
=Bii;e[3]=Bim;e[4]=Biq;c[2]=d;d=J(D,5);e=d.data;e[0]=Bib;e[1]=Bif;e[2]=Bij;e[3]=Bin;e[4]=Bir;c[3]=d;d=J(D,5);e=d.data;e[0]=Bic;e[1]=Big;e[2]=Bik;e[3]=Bio;e[4]=Bis;c[4]=d;a.n4=b;}
function ASG(a,b){var c,d,e,f,g,h,i,j;c=0;while(c<a.n4.data[0].data.length){d=a.n4.data[0].data[c];e=0;while(e<(a.n4.data.length-1|0)){f=a.n4.data;g=e+1|0;h=f[g].data[c];i=Qn(h);f=J(D,3);j=f.data;j[0]=a.zJ.data[e];j[1]=BI(88);j[2]=d;Ck(b,i,f);e=g;}c=c+1|0;}}
function Ym(){D.call(this);this.IU=null;}
function Bay(a){var b=new Ym();AYv(b,a);return b;}
function AYv(a,b){a.IU=b;}
function AMG(a,b,c){return Kq(c)<Kq(b)?(-1):Kq(c)<=Kq(b)?0:1;}
function AZw(a,b,c){return AMG(a,b,c);}
function QJ(){DW.call(this);}
function A3v(a,b,c,d){var e;e=a.ih;Cv(d,e,b-Ep(d,e)|0);return a.r.k(b,c,d);}
function A9u(a,b){return 0;}
function ASa(){DW.call(this);}
function Bbo(){var a=new ASa();A2S(a);return a;}
function A2S(a){Hb(a,(-1));}
function A4J(a,b,c,d){return b;}
function PY(){DW.call(this);}
function AUb(a,b,c,d){if(Ep(d,a.ih)!=b)b=(-1);return b;}
function Q9(){DW.call(this);this.wG=0;}
function A3x(a,b,c,d){var e;e=a.ih;Cv(d,e,b-Ep(d,e)|0);a.wG=b;return b;}
function AUg(a){return a.wG;}
function A8K(a,b){return 0;}
function HV(){DW.call(this);}
function BbY(){var a=new HV();A$h(a);return a;}
function A$h(a){Hb(a,0);}
function A1v(a,b,c,d){if(d.nt!=1&&b!=d.by)return (-1);ARA(d);M0(d,0,b);return b;}
function CI(){Co.call(this);this.dl=0;}
function Bl7(){var a=new CI();EL(a);return a;}
function EL(a){Cz(a);a.dl=1;}
function A_t(a,b,c,d){var e;if((b+a.eb()|0)>d.by){d.hp=1;return (-1);}e=a.dn(b,c);if(e<0)return (-1);return a.r.k(b+e|0,c,d);}
function A95(a){return a.dl;}
function AW$(a,b){return 1;}
function AFW(){CI.call(this);}
function IL(a){var b=new AFW();A7B(b,a);return b;}
function A7B(a,b){NC(a,b);a.dl=1;a.p4=1;a.dl=0;}
function A9H(a,b,c){return 0;}
function A5y(a,b,c,d){var e,f,g;e=d.by;f=d.fh;while(true){g=R(b,e);if(g>0)return (-1);if(g<0&&DS(Ba(c,b))&&b>f&&Du(Ba(c,b-1|0))){b=b+1|0;continue;}if(a.r.k(b,c,d)>=0)break;b=b+1|0;}return b;}
function A4A(a,b,c,d,e){var f,g;f=e.by;g=e.fh;while(true){if(c<b)return (-1);if(c<f&&DS(Ba(d,c))&&c>g&&Du(Ba(d,c-1|0))){c=c+(-1)|0;continue;}if(a.r.k(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function A3w(a,b){return 0;}
function CE(){var a=this;Co.call(a);a.dm=null;a.f5=null;a.cK=0;}
function Bl8(){var a=new CE();A4w(a);return a;}
function Baz(a,b){var c=new CE();GR(c,a,b);return c;}
function A4w(a){Cz(a);}
function GR(a,b,c){Cz(a);a.dm=b;a.f5=c;a.cK=c.ih;}
function AWs(a,b,c,d){var e,f,g,h;if(a.dm===null)return (-1);e=Hn(d,a.cK);EK(d,a.cK,b);f=a.dm.s;g=0;while(true){if(g>=f){EK(d,a.cK,e);return (-1);}h=Z(a.dm,g).k(b,c,d);if(h>=0)break;g=g+1|0;}return h;}
function AZk(a,b){a.f5.r=b;}
function A7a(a,b){var c;a:{if(a.dm!==null){c=Jm(a.dm);while(true){if(!KE(c))break a;if(!KU(c).d4(b))continue;else return 1;}}}return 0;}
function AZR(a,b){return JK(b,a.cK)>=0&&Hn(b,a.cK)==JK(b,a.cK)?0:1;}
function AUK(a){var b,c,d,e;a.eQ=1;if(a.f5!==null&&!a.f5.eQ)K8(a.f5);a:{if(a.dm!==null){b=a.dm.s;c=0;while(true){if(c>=b)break a;d=Z(a.dm,c);e=d.lx();if(e===null)e=d;else{d.eQ=1;En(a.dm,c);AML(a.dm,c,e);}if(!e.eQ)e.iX();c=c+1|0;}}}if(a.r!==null)K8(a);}
function K2(){CE.call(this);}
function Bl9(){var a=new K2();AXY(a);return a;}
function AXY(a){Cz(a);}
function AZc(a,b,c,d){var e,f,g,h;e=Ep(d,a.cK);Cv(d,a.cK,b);f=a.dm.s;g=0;while(true){if(g>=f){Cv(d,a.cK,e);return (-1);}h=Z(a.dm,g).k(b,c,d);if(h>=0)break;g=g+1|0;}return h;}
function A9g(a,b){return !Ep(b,a.cK)?0:1;}
function EU(){K2.call(this);}
function A41(a,b,c,d){var e,f,g;e=Ep(d,a.cK);Cv(d,a.cK,b);f=a.dm.s;g=0;while(g<f){if(Z(a.dm,g).k(b,c,d)>=0)return a.r.k(a.f5.wG,c,d);g=g+1|0;}Cv(d,a.cK,e);return (-1);}
function A81(a,b){a.r=b;}
function Th(){EU.call(this);}
function AZg(a,b,c,d){var e,f;e=a.dm.s;f=0;while(f<e){if(Z(a.dm,f).k(b,c,d)>=0)return a.r.k(b,c,d);f=f+1|0;}return (-1);}
function A1m(a,b){return 0;}
function WO(){EU.call(this);}
function AT0(a,b,c,d){var e,f;e=a.dm.s;f=0;while(true){if(f>=e)return a.r.k(b,c,d);if(Z(a.dm,f).k(b,c,d)>=0)break;f=f+1|0;}return (-1);}
function A99(a,b){return 0;}
function Vg(){EU.call(this);}
function AUH(a,b,c,d){var e,f,g,h;e=a.dm.s;f=d.of?0:d.fh;a:{g=a.r.k(b,c,d);if(g>=0){Cv(d,a.cK,b);h=0;while(true){if(h>=e)break a;if(Z(a.dm,h).eW(f,b,c,d)>=0){Cv(d,a.cK,(-1));return g;}h=h+1|0;}}}return (-1);}
function A_H(a,b){return 0;}
function Rl(){EU.call(this);}
function A2$(a,b,c,d){var e,f;e=a.dm.s;Cv(d,a.cK,b);f=0;while(true){if(f>=e)return a.r.k(b,c,d);if(Z(a.dm,f).eW(0,b,c,d)>=0)break;f=f+1|0;}return (-1);}
function A9m(a,b){return 0;}
function IC(){CE.call(this);this.fo=null;}
function Bck(a,b){var c=new IC();Z0(c,a,b);return c;}
function Z0(a,b,c){Cz(a);a.fo=b;a.f5=c;a.cK=c.ih;}
function ATf(a,b,c,d){var e,f;e=Hn(d,a.cK);EK(d,a.cK,b);f=a.fo.k(b,c,d);if(f>=0)return f;EK(d,a.cK,e);return (-1);}
function AX$(a,b,c,d){var e;e=a.fo.eJ(b,c,d);if(e>=0)EK(d,a.cK,e);return e;}
function A9x(a,b,c,d,e){var f;f=a.fo.eW(b,c,d,e);if(f>=0)EK(e,a.cK,f);return f;}
function A68(a,b){return a.fo.d4(b);}
function A8I(a){var b;b=new OU;Z0(b,a.fo,a.f5);a.r=b;return b;}
function A11(a){var b;a.eQ=1;if(a.f5!==null&&!a.f5.eQ)K8(a.f5);if(a.fo!==null&&!a.fo.eQ){b=a.fo.lx();if(b!==null){a.fo.eQ=1;a.fo=b;}a.fo.iX();}}
function H2(){D.call(this);}
function Bl(){var a=this;H2.call(a);a.cj=0;a.dP=0;a.b$=null;a.qb=null;a.qG=null;a.ca=0;}
var Bl$=null;function Bl_(){var a=new Bl();B0(a);return a;}
function B0(a){var b;b=new W1;b.bx=$rt_createIntArray(64);a.b$=b;}
function A3$(a){return null;}
function A3H(a){return a.b$;}
function ANZ(a){return !a.dP?(I4(a.b$,0)>=2048?0:1):AEt(a.b$,0)>=2048?0:1;}
function A59(a){return a.ca;}
function A9Z(a){return a;}
function YY(a){var b,c;if(a.qG===null){b=a.kq();c=new Su;c.Jo=a;c.Cq=b;B0(c);a.qG=c;Fz(a.qG,a.dP);}return a.qG;}
function Kc(a){var b,c;if(a.qb===null){b=a.kq();c=new St;c.GK=a;c.Ew=b;c.Bl=a;B0(c);a.qb=c;Fz(a.qb,a.cj);a.qb.ca=a.ca;}return a.qb;}
function A$8(a){return 0;}
function Fz(a,b){if(a.cj^b){a.cj=a.cj?0:1;a.dP=a.dP?0:1;}if(!a.ca)a.ca=1;return a;}
function AVX(a){return a.cj;}
function KG(b,c){if(b.hC()!==null&&c.hC()!==null)return AD9(b.hC(),c.hC());return 1;}
function QQ(b,c){return APR(ARu(Bl$,b),c);}
function Z4(){Bl$=new Ia;}
function ZO(){var a=this;Bl.call(a);a.xI=0;a.y9=0;a.nn=0;a.uM=0;a.iw=0;a.lm=0;a.b6=null;a.c5=null;}
function Eq(){var a=new ZO();A2u(a);return a;}
function A$B(a,b){var c=new ZO();AUZ(c,a,b);return c;}
function A2u(a){B0(a);a.b6=A_J();}
function AUZ(a,b,c){B0(a);a.b6=A_J();a.xI=b;a.y9=c;}
function Dp(a,b){a:{if(a.xI){b:{if(!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}if(a.iw){OD(a.b6,Kf(b&65535));break a;}Mb(a.b6,Kf(b&65535));break a;}if(a.y9&&b>128){a.nn=1;b=GO(GN(b));}}}if(!(!QY(b)&&!PH(b))){if(a.uM)OD(a.b$,b-55296|0);else Mb(a.b$,b-55296|0);}if(a.iw)OD(a.b6,b);else Mb(a.b6,b);if(!a.ca&&Mv(b))a.ca=1;return a;}
function ASw(a,b){var c,d,e;if(!a.ca&&b.ca)a.ca=1;if(a.uM){if(!b.dP)GZ(a.b$,b.kq());else Ec(a.b$,b.kq());}else if(!b.dP)Ht(a.b$,b.kq());else{He(a.b$,b.kq());Ec(a.b$,b.kq());a.dP=a.dP?0:1;a.uM=1;}if(!a.lm&&b.hC()!==null){if(a.iw){if(!b.cj)GZ(a.b6,b.hC());else Ec(a.b6,b.hC());}else if(!b.cj)Ht(a.b6,b.hC());else{He(a.b6,b.hC());Ec(a.b6,b.hC());a.cj=a.cj?0:1;a.iw=1;}}else{c=a.cj;if(a.c5!==null){d=a.c5;if(!c){e=new T5;e.HH=a;e.EY=c;e.Bf=d;e.A$=b;B0(e);a.c5=e;}else{e=new T6;e.JM=a;e.Ai=c;e.Dx=d;e.De=b;B0(e);a.c5=
e;}}else{if(c&&!a.iw&&Os(a.b6)){d=new T2;d.IA=a;d.DC=b;B0(d);a.c5=d;}else if(!c){d=new T0;d.xg=a;d.wu=c;d.CL=b;B0(d);a.c5=d;}else{d=new T1;d.vi=a;d.tQ=c;d.Bb=b;B0(d);a.c5=d;}a.lm=1;}}return a;}
function CG(a,b,c){var d;if(b>c){d=new Cc;P(d);M(d);}a:{b:{if(!a.xI){if(c<55296)break b;if(b>57343)break b;}c=c+1|0;while(true){if(b>=c)break a;Dp(a,b);b=b+1|0;}}if(a.iw)AIE(a.b6,b,c+1|0);else Js(a.b6,b,c+1|0);}return a;}
function AId(a,b){var c,d,e;if(!a.ca&&b.ca)a.ca=1;if(b.nn)a.nn=1;if(!(a.dP^b.dP)){if(!a.dP)Ht(a.b$,b.b$);else Ec(a.b$,b.b$);}else if(a.dP)GZ(a.b$,b.b$);else{He(a.b$,b.b$);Ec(a.b$,b.b$);a.dP=1;}if(!a.lm&&DY(b)!==null){if(!(a.cj^b.cj)){if(!a.cj)Ht(a.b6,DY(b));else Ec(a.b6,DY(b));}else if(a.cj)GZ(a.b6,DY(b));else{He(a.b6,DY(b));Ec(a.b6,DY(b));a.cj=1;}}else{c=a.cj;if(a.c5!==null){d=a.c5;if(!c){e=new Pv;e.Fr=a;e.AT=c;e.ED=d;e.Bs=b;B0(e);a.c5=e;}else{e=new PJ;e.FG=a;e.ER=c;e.y5=d;e.y_=b;B0(e);a.c5=e;}}else{if(!a.iw
&&Os(a.b6)){if(!c){d=new T3;d.JO=a;d.zW=b;B0(d);a.c5=d;}else{d=new T4;d.HR=a;d.EI=b;B0(d);a.c5=d;}}else if(!c){d=new T8;d.AX=a;d.Al=b;d.Dz=c;B0(d);a.c5=d;}else{d=new T9;d.Aw=a;d.AD=b;d.D2=c;B0(d);a.c5=d;}a.lm=1;}}}
function SB(a,b){var c,d,e;if(!a.ca&&b.ca)a.ca=1;if(b.nn)a.nn=1;if(!(a.dP^b.dP)){if(!a.dP)Ec(a.b$,b.b$);else Ht(a.b$,b.b$);}else if(!a.dP)GZ(a.b$,b.b$);else{He(a.b$,b.b$);Ec(a.b$,b.b$);a.dP=0;}if(!a.lm&&DY(b)!==null){if(!(a.cj^b.cj)){if(!a.cj)Ec(a.b6,DY(b));else Ht(a.b6,DY(b));}else if(!a.cj)GZ(a.b6,DY(b));else{He(a.b6,DY(b));Ec(a.b6,DY(b));a.cj=0;}}else{c=a.cj;if(a.c5!==null){d=a.c5;if(!c){e=new Px;e.HG=a;e.Ek=c;e.Co=d;e.Ah=b;B0(e);a.c5=e;}else{e=new Py;e.HX=a;e.Ea=c;e.B3=d;e.Ej=b;B0(e);a.c5=e;}}else{if(!a.iw
&&Os(a.b6)){if(!c){d=new Pt;d.FJ=a;d.CZ=b;B0(d);a.c5=d;}else{d=new Pu;d.JJ=a;d.zP=b;B0(d);a.c5=d;}}else if(!c){d=new Pz;d.Fe=a;d.EX=b;d.AC=c;B0(d);a.c5=d;}else{d=new Ps;d.AA=a;d.Ee=b;d.DG=c;B0(d);a.c5=d;}a.lm=1;}}}
function D6(a,b){if(a.c5!==null)return a.cj^a.c5.X(b);return a.cj^EI(a.b6,b);}
function DY(a){if(!a.lm)return a.b6;return null;}
function A5r(a){return a.b$;}
function A1c(a){var b,c;if(a.c5!==null)return a;b=DY(a);c=new Pw;c.Hr=a;c.sh=b;B0(c);return Fz(c,a.cj);}
function A7X(a){var b,c;b=new U;W(b);c=I4(a.b6,0);while(c>=0){Hk(b,Iz(c));DQ(b,124);c=I4(a.b6,c+1|0);}if(b.bY>0)So(b,b.bY-1|0);return V(b);}
function AVY(a){return a.nn;}
function MR(){var a=this;B6.call(a);a.G_=null;a.Js=null;}
function E4(){Co.call(this);this.bQ=null;}
function Bma(a,b,c){var d=new E4();Ef(d,a,b,c);return d;}
function Ef(a,b,c,d){NC(a,c);a.bQ=b;a.p4=d;}
function A_y(a){return a.bQ;}
function A0p(a,b){return !a.bQ.d4(b)&&!a.r.d4(b)?0:1;}
function A$D(a,b){return 1;}
function AYu(a){var b;a.eQ=1;if(a.r!==null&&!a.r.eQ){b=a.r.lx();if(b!==null){a.r.eQ=1;a.r=b;}a.r.iX();}if(a.bQ!==null){if(!a.bQ.eQ){b=a.bQ.lx();if(b!==null){a.bQ.eQ=1;a.bQ=b;}a.bQ.iX();}else if(a.bQ instanceof IC&&a.bQ.f5.wT)a.bQ=a.bQ.r;}}
function D8(){E4.call(this);this.cN=null;}
function BaQ(a,b,c){var d=new D8();F6(d,a,b,c);return d;}
function F6(a,b,c,d){Ef(a,b,c,d);a.cN=b;}
function A2_(a,b,c,d){var e,f;e=0;a:{while((b+a.cN.eb()|0)<=d.by){f=a.cN.dn(b,c);if(f<=0)break a;b=b+f|0;e=e+1|0;}}while(true){if(e<0)return (-1);f=a.r.k(b,c,d);if(f>=0)break;b=b-a.cN.eb()|0;e=e+(-1)|0;}return f;}
function GD(){D8.call(this);this.k0=null;}
function BbQ(a,b,c,d){var e=new GD();QS(e,a,b,c,d);return e;}
function QS(a,b,c,d,e){F6(a,c,d,e);a.k0=b;}
function A3Y(a,b,c,d){var e,f,g,h;e=a.k0.jf;f=a.k0.ip;g=0;while(true){if(g>=e){a:{while(g<f){if((b+a.cN.eb()|0)>d.by)break a;h=a.cN.dn(b,c);if(h<1)break a;b=b+h|0;g=g+1|0;}}while(true){if(g<e)return (-1);h=a.r.k(b,c,d);if(h>=0)break;b=b-a.cN.eb()|0;g=g+(-1)|0;}return h;}if((b+a.cN.eb()|0)>d.by){d.hp=1;return (-1);}h=a.cN.dn(b,c);if(h<1)break;b=b+h|0;g=g+1|0;}return (-1);}
function DX(){E4.call(this);}
function A3o(a,b,c,d){var e;if(!a.bQ.b4(d))return a.r.k(b,c,d);e=a.bQ.k(b,c,d);if(e>=0)return e;return a.r.k(b,c,d);}
function FX(){D8.call(this);}
function A7k(a,b,c,d){var e;e=a.bQ.k(b,c,d);if(e<0)e=a.r.k(b,c,d);return e;}
function A2L(a,b){a.r=b;a.bQ.cb(b);}
function Sw(){D8.call(this);}
function A_o(a,b,c,d){while((b+a.cN.eb()|0)<=d.by&&a.cN.dn(b,c)>0){b=b+a.cN.eb()|0;}return a.r.k(b,c,d);}
function AYK(a,b,c,d){var e,f,g;e=a.r.eJ(b,c,d);if(e<0)return (-1);f=e-a.cN.eb()|0;while(f>=b&&a.cN.dn(f,c)>0){g=f-a.cN.eb()|0;e=f;f=g;}return e;}
function Ez(){Cc.call(this);}
function Bmb(){var a=new Ez();A3M(a);return a;}
function A3M(a){P(a);}
function Ts(){var a=this;H2.call(a);a.jf=0;a.ip=0;}
function A5Y(a){return a.jf;}
function A$x(a){return a.ip;}
function A76(a){var b;b=new U;W(b);return V(I(I(I(Bf(I(b,B(639)),a.jf),B(640)),a.ip==2147483647?B(3):Mx(AQS(a.ip))),B(641)));}
function TU(){Co.call(this);}
function Bmc(){var a=new TU();A_x(a);return a;}
function A_x(a){Cz(a);}
function AXw(a,b,c,d){return b;}
function A8H(a,b){return 0;}
function W1(){var a=this;D.call(a);a.bx=null;a.cm=0;}
function A_J(){var a=new W1();A4s(a);return a;}
function A4s(a){a.bx=$rt_createIntArray(0);}
function Mb(a,b){var c,d;c=b/32|0;if(b>=a.cm){KJ(a,c+1|0);a.cm=b+1|0;}d=a.bx.data;d[c]=d[c]|1<<(b%32|0);}
function Js(a,b,c){var d,e,f,g,h;if(b>c){d=new BS;P(d);M(d);}e=b/32|0;f=c/32|0;if(c>a.cm){KJ(a,f+1|0);a.cm=c;}if(e==f){g=a.bx.data;g[e]=g[e]|Jl(a,b)&KD(a,c);}else{g=a.bx.data;g[e]=g[e]|Jl(a,b);h=e+1|0;while(h<f){a.bx.data[h]=(-1);h=h+1|0;}g=a.bx.data;g[f]=g[f]|KD(a,c);}}
function Jl(a,b){return (-1)<<(b%32|0);}
function KD(a,b){b=b%32|0;return !b?0:(-1)>>>(32-b|0);}
function OD(a,b){var c,d;c=b/32|0;if(c<a.bx.data.length){d=a.bx.data;d[c]=d[c]&No((-2),b%32|0);if(b==(a.cm-1|0))Ic(a);}}
function AIE(a,b,c){var d,e,f,g,h;if(b>c){d=new BS;P(d);M(d);}if(b>=a.cm)return;c=CB(a.cm,c);e=b/32|0;f=c/32|0;if(e==f){g=a.bx.data;g[e]=g[e]&(KD(a,b)|Jl(a,c));}else{g=a.bx.data;g[e]=g[e]&KD(a,b);h=e+1|0;while(h<f){a.bx.data[h]=0;h=h+1|0;}g=a.bx.data;g[f]=g[f]&Jl(a,c);}Ic(a);}
function EI(a,b){var c;c=b/32|0;return c<a.bx.data.length&&a.bx.data[c]&1<<(b%32|0)?1:0;}
function I4(a,b){var c,d,e;if(b>=a.cm)return (-1);c=b/32|0;d=a.bx.data[c]>>>(b%32|0);if(d)return JH(d)+b|0;d=(a.cm+31|0)/32|0;e=c+1|0;while(e<d){if(a.bx.data[e])return (e*32|0)+JH(a.bx.data[e])|0;e=e+1|0;}return (-1);}
function AEt(a,b){var c,d,e;if(b>=a.cm)return b;c=b/32|0;d=(a.bx.data[c]^(-1))>>>(b%32|0);if(d)return JH(d)+b|0;d=(a.cm+31|0)/32|0;e=c+1|0;while(e<d){if(a.bx.data[e]!=(-1))return (e*32|0)+JH(a.bx.data[e]^(-1))|0;e=e+1|0;}return a.cm;}
function KJ(a,b){var c,d,e,f;if(a.bx.data.length>=b)return;c=DE((b*3|0)/2|0,(a.bx.data.length*2|0)+1|0);d=a.bx.data;e=$rt_createIntArray(c);f=e.data;b=CB(c,d.length);c=0;while(c<b){f[c]=d[c];c=c+1|0;}a.bx=e;}
function Ic(a){var b,c,d;b=(a.cm+31|0)/32|0;a.cm=b*32|0;c=b-1|0;a:{while(true){if(c<0)break a;d=TD(a.bx.data[c]);if(d<32)break;c=c+(-1)|0;a.cm=a.cm-32|0;}a.cm=a.cm-d|0;}}
function AD9(a,b){var c,d;c=CB(a.bx.data.length,b.bx.data.length);d=0;while(d<c){if(a.bx.data[d]&b.bx.data[d])return 1;d=d+1|0;}return 0;}
function Ec(a,b){var c,d,e;c=CB(a.bx.data.length,b.bx.data.length);d=0;while(d<c){e=a.bx.data;e[d]=e[d]&b.bx.data[d];d=d+1|0;}while(c<a.bx.data.length){a.bx.data[c]=0;c=c+1|0;}a.cm=CB(a.cm,b.cm);Ic(a);}
function GZ(a,b){var c,d,e;c=CB(a.bx.data.length,b.bx.data.length);d=0;while(d<c){e=a.bx.data;e[d]=e[d]&(b.bx.data[d]^(-1));d=d+1|0;}Ic(a);}
function Ht(a,b){var c,d,e;a.cm=DE(a.cm,b.cm);KJ(a,(a.cm+31|0)/32|0);c=CB(a.bx.data.length,b.cm);d=0;while(d<c){e=a.bx.data;e[d]=e[d]|b.bx.data[d];d=d+1|0;}}
function He(a,b){var c,d,e;a.cm=DE(a.cm,b.cm);KJ(a,(a.cm+31|0)/32|0);c=CB(a.bx.data.length,b.cm);d=0;while(d<c){e=a.bx.data;e[d]=e[d]^b.bx.data[d];d=d+1|0;}Ic(a);}
function Os(a){return a.cm?0:1;}
function OL(){var a=this;CE.call(a);a.zS=null;a.Hq=0;}
function A5A(a,b){a.r=b;}
function ABK(a,b,c,d){var e,f,g,h,i;e=d.fh;f=d.by;g=b+1|0;h=R(g,f);if(h>0){d.hp=1;return (-1);}i=Ba(c,b);if(!a.zS.X(i))return (-1);if(Du(i)){if(h<0&&DS(Ba(c,g)))return (-1);}else if(DS(i)&&b>e&&Du(Ba(c,b-1|0)))return (-1);return a.r.k(g,c,d);}
function P_(){var a=this;CE.call(a);a.vO=null;a.xS=null;}
function AEp(a,b){var c=new P_();AHl(c,a,b);return c;}
function AHl(a,b,c){Cz(a);a.vO=b;a.xS=c;}
function ATJ(a,b,c,d){var e;e=a.vO.k(b,c,d);if(e<0)e=ABK(a.xS,b,c,d);if(e>=0)return e;return (-1);}
function A8u(a,b){a.r=b;a.xS.r=b;a.vO.cb(b);}
function AUh(a,b){return 1;}
function AT3(a,b){return 1;}
function EN(){var a=this;CE.call(a);a.h0=null;a.Gd=0;}
function A6N(a){var b=new EN();Wh(b,a);return b;}
function Wh(a,b){Cz(a);a.h0=b.sP();a.Gd=b.cj;}
function A5k(a,b,c,d){var e,f,g;e=d.by;if(b<e){f=b+1|0;g=Ba(c,b);if(a.X(g)){b=a.r.k(f,c,d);if(b>0)return b;}if(f<e){b=f+1|0;f=Ba(c,f);if(J8(g,f)&&a.X(EH(g,f)))return a.r.k(b,c,d);}}return (-1);}
function AV_(a,b){return a.h0.X(b);}
function ATE(a,b){if(b instanceof EX)return a.h0.X(b.kA);if(b instanceof Fw)return a.h0.X(b.gv);if(b instanceof EN)return KG(a.h0,b.h0);if(!(b instanceof Fo))return 1;return KG(a.h0,b.j5);}
function AXl(a){return a.h0;}
function A9V(a,b){a.r=b;}
function AVT(a,b){return 1;}
function MQ(){EN.call(this);}
function AW_(a,b){return a.h0.X(GO(GN(b)));}
function Zy(){var a=this;CI.call(a);a.Dk=null;a.F1=0;}
function AWI(a){var b=new Zy();AYQ(b,a);return b;}
function AYQ(a,b){EL(a);a.Dk=b.sP();a.F1=b.cj;}
function A6R(a,b,c){return !a.Dk.X(ES(FF(Ba(c,b))))?(-1):1;}
function Fo(){var a=this;CI.call(a);a.j5=null;a.Gw=0;}
function A0$(a){var b=new Fo();AZF(b,a);return b;}
function AZF(a,b){EL(a);a.j5=b.sP();a.Gw=b.cj;}
function Ta(a,b,c){return !a.j5.X(Ba(c,b))?(-1):1;}
function AZn(a,b){if(b instanceof Fw)return a.j5.X(b.gv);if(b instanceof Fo)return KG(a.j5,b.j5);if(!(b instanceof EN)){if(!(b instanceof EX))return 1;return 0;}return KG(a.j5,b.h0);}
function A8w(a){return a.j5;}
function T_(){var a=this;CE.call(a);a.jX=null;a.x$=null;a.oy=0;}
function A$q(a,b){var c=new T_();A3r(c,a,b);return c;}
function A3r(a,b,c){Cz(a);a.jX=b;a.oy=c;}
function AYc(a,b){a.r=b;}
function Qc(a){if(a.x$===null)a.x$=Tf(a.jX);return a.x$;}
function ASV(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o;e=d.by;f=$rt_createIntArray(3);g=(-1);h=(-1);if(b>=e)return (-1);i=b+1|0;j=Ba(c,b);k=j-44032|0;if(k>=0&&k<11172){b=4352+(k/588|0)|0;l=4449+((k%588|0)/28|0)|0;k=k%28|0;if(!k){m=$rt_createIntArray(2);n=m.data;n[0]=b;n[1]=l;}else{o=4519+k|0;m=$rt_createIntArray(3);n=m.data;n[0]=b;n[1]=l;n[2]=o;}}else m=null;if(m!==null){m=m.data;l=0;if(m.length!=a.oy)return (-1);while(true){if(l>=a.oy)return a.r.k(i,c,d);if(m[l]!=a.jX.data[l])break;l=l+1|0;}return (-1);}f=f.data;f[0]
=j;k=j-4352|0;if(k>=0&&k<19){if(i<e){j=Ba(c,i);g=j-4449|0;}if(g>=0&&g<21){k=i+1|0;f[1]=j;if(k<e){j=Ba(c,k);h=j-4519|0;}if(h>=0&&h<28){b=k+1|0;f[2]=j;return a.oy==3&&f[0]==a.jX.data[0]&&f[1]==a.jX.data[1]&&f[2]==a.jX.data[2]?a.r.k(b,c,d):(-1);}return a.oy==2&&f[0]==a.jX.data[0]&&f[1]==a.jX.data[1]?a.r.k(k,c,d):(-1);}return (-1);}return (-1);}
function A4e(a,b){return b instanceof T_&&!DC(Qc(b),Qc(a))?0:1;}
function A1f(a,b){return 1;}
function Fw(){CI.call(this);this.gv=0;}
function AAi(a){var b=new Fw();AZH(b,a);return b;}
function AZH(a,b){EL(a);a.gv=b;}
function A6J(a){return 1;}
function AWE(a,b,c){return a.gv!=Ba(c,b)?(-1):1;}
function AVH(a,b,c,d){var e,f,g,h;if(!(c instanceof B4))return Jg(a,b,c,d);e=c;f=d.by;while(true){if(b>=f)return (-1);g=Hj(e,a.gv,b);if(g<0)return (-1);h=a.r;b=g+1|0;if(h.k(b,c,d)>=0)break;}return g;}
function AXm(a,b,c,d,e){var f,g;if(!(d instanceof B4))return Jr(a,b,c,d,e);f=d;a:{while(true){if(c<b)return (-1);g=Il(f,a.gv,c);if(g<0)break a;if(g<b)break a;if(a.r.k(g+1|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function AT1(a){return a.gv;}
function A0_(a,b){if(b instanceof Fw)return b.gv!=a.gv?0:1;if(!(b instanceof Fo)){if(b instanceof EN)return b.X(a.gv);if(!(b instanceof EX))return 1;return 0;}return Ta(b,0,SI(a.gv))<=0?0:1;}
function AGT(){CI.call(this);this.BT=0;}
function A87(a){var b=new AGT();A7Q(b,a);return b;}
function A7Q(a,b){EL(a);a.BT=ES(FF(b));}
function A2U(a,b,c){return a.BT!=ES(FF(Ba(c,b)))?(-1):1;}
function XR(){var a=this;CI.call(a);a.Bt=0;a.Cg=0;}
function A4v(a){var b=new XR();A0e(b,a);return b;}
function A0e(a,b){EL(a);a.Bt=b;a.Cg=Kf(b);}
function ATa(a,b,c){return a.Bt!=Ba(c,b)&&a.Cg!=Ba(c,b)?(-1):1;}
function GI(){var a=this;CE.call(a);a.pW=0;a.uk=null;a.tN=null;a.tL=0;}
function BcT(a,b){var c=new GI();Pi(c,a,b);return c;}
function Pi(a,b,c){Cz(a);a.pW=1;a.tN=b;a.tL=c;}
function A_b(a,b){a.r=b;}
function AZb(a,b,c,d){var e,f,g,h,i,j,k,l;e=$rt_createIntArray(4);f=d.by;if(b>=f)return (-1);g=LH(a,b,c,f);h=b+a.pW|0;i=AQT(g);if(i===null){i=e.data;b=1;i[0]=g;}else{b=i.data.length;Ds(i,0,e,0,b);b=0+b|0;}a:{if(h<f){j=e.data;g=LH(a,h,c,f);while(b<4){if(!((g!=832?0:1)|(g!=833?0:1)|(g!=835?0:1)|(g!=836?0:1))){k=b+1|0;j[b]=g;}else{i=AQT(g).data;if(i.length!=2){k=b+1|0;j[b]=i[0];}else{l=b+1|0;j[b]=i[0];k=l+1|0;j[l]=i[1];}}h=h+a.pW|0;if(h>=f){b=k;break a;}g=LH(a,h,c,f);b=k;}}}if(b!=a.tL)return (-1);i=e.data;g=0;while
(true){if(g>=b)return a.r.k(h,c,d);if(i[g]!=a.tN.data[g])break;g=g+1|0;}return (-1);}
function SA(a){var b,c;if(a.uk===null){b=new U;W(b);c=0;while(c<a.tL){Hk(b,Iz(a.tN.data[c]));c=c+1|0;}a.uk=V(b);}return a.uk;}
function LH(a,b,c,d){var e,f,g;a.pW=1;if(b>=(d-1|0))e=Ba(c,b);else{d=b+1|0;e=Ba(c,b);f=Ba(c,d);if(J8(e,f)){g=$rt_createCharArray(2).data;g[0]=e;g[1]=f;e=0<(g.length-1|0)&&Du(g[0])&&DS(g[1])?EH(g[0],g[1]):g[0];a.pW=2;}}return e;}
function AXz(a,b){return b instanceof GI&&!DC(SA(b),SA(a))?0:1;}
function A83(a,b){return 1;}
function SO(){GI.call(this);}
function V8(){GI.call(this);}
function S9(){DX.call(this);}
function A4L(a,b,c,d){var e;while(true){e=a.bQ.k(b,c,d);if(e<=0)break;b=e;}return a.r.k(b,c,d);}
function UE(){DX.call(this);}
function A7J(a,b,c,d){var e;e=a.bQ.k(b,c,d);if(e<0)return (-1);if(e>b){while(true){b=a.bQ.k(e,c,d);if(b<=e)break;e=b;}b=e;}return a.r.k(b,c,d);}
function Hx(){DX.call(this);}
function A9S(a,b,c,d){var e;if(!a.bQ.b4(d))return a.r.k(b,c,d);e=a.bQ.k(b,c,d);if(e>=0)return e;return a.r.k(b,c,d);}
function A$L(a,b){a.r=b;a.bQ.cb(b);}
function PR(){Hx.call(this);}
function AXj(a,b,c,d){var e;e=a.bQ.k(b,c,d);if(e<=0)e=b;return a.r.k(e,c,d);}
function A78(a,b){a.r=b;}
function G8(){var a=this;DX.call(a);a.kE=null;a.hv=0;}
function Bmd(a,b,c,d,e){var f=new G8();MP(f,a,b,c,d,e);return f;}
function MP(a,b,c,d,e,f){Ef(a,c,d,e);a.kE=b;a.hv=f;}
function A_D(a,b,c,d){var e,f;e=Tn(d,a.hv);if(!a.bQ.b4(d))return a.r.k(b,c,d);if(e>=a.kE.ip)return a.r.k(b,c,d);f=a.hv;e=e+1|0;FI(d,f,e);f=a.bQ.k(b,c,d);if(f>=0){FI(d,a.hv,0);return f;}f=a.hv;e=e+(-1)|0;FI(d,f,e);if(e>=a.kE.jf)return a.r.k(b,c,d);FI(d,a.hv,0);return (-1);}
function OY(){G8.call(this);}
function AWW(a,b,c,d){var e,f,g;e=0;f=a.kE.ip;a:{while(true){g=a.bQ.k(b,c,d);if(g<=b)break a;if(e>=f)break;e=e+1|0;b=g;}}if(g<0&&e<a.kE.jf)return (-1);return a.r.k(b,c,d);}
function Qz(){DX.call(this);}
function A1$(a,b,c,d){var e;if(!a.bQ.b4(d))return a.r.k(b,c,d);e=a.r.k(b,c,d);if(e>=0)return e;return a.bQ.k(b,c,d);}
function UX(){Hx.call(this);}
function AUj(a,b,c,d){var e;if(!a.bQ.b4(d))return a.r.k(b,c,d);e=a.r.k(b,c,d);if(e<0)e=a.bQ.k(b,c,d);return e;}
function RT(){G8.call(this);}
function A3B(a,b,c,d){var e,f;e=Tn(d,a.hv);if(!a.bQ.b4(d))return a.r.k(b,c,d);if(e>=a.kE.ip){FI(d,a.hv,0);return a.r.k(b,c,d);}if(e<a.kE.jf){FI(d,a.hv,e+1|0);f=a.bQ.k(b,c,d);}else{f=a.r.k(b,c,d);if(f>=0){FI(d,a.hv,0);return f;}FI(d,a.hv,e+1|0);f=a.bQ.k(b,c,d);}return f;}
function QA(){E4.call(this);}
function A_v(a,b,c,d){var e;e=d.by;if(e>b)return a.r.eW(b,e,c,d);return a.r.k(b,c,d);}
function A0L(a,b,c,d){var e;e=d.by;if(a.r.eW(b,e,c,d)>=0)return b;return (-1);}
function TZ(){E4.call(this);this.ut=null;}
function AZo(a,b,c,d){var e,f;e=d.by;f=Wr(a,b,e,c);if(f>=0)e=f;if(e>b)return a.r.eW(b,e,c,d);return a.r.k(b,c,d);}
function ASY(a,b,c,d){var e,f,g,h;e=d.by;f=a.r.eJ(b,c,d);if(f<0)return (-1);g=Wr(a,f,e,c);if(g>=0)e=g;g=a.r.eW(f,e,c,d);if(f<g)f=g;if(f<=0)h=f?(-1):0;else{h=f-1|0;a:{while(true){if(h<b){h=(-1);break a;}if(a.ut.ov(Ba(c,h)))break;h=h+(-1)|0;}}}if(h>=b)b=h>=f?h:h+1|0;return b;}
function Wr(a,b,c,d){while(true){if(b>=c)return (-1);if(a.ut.ov(Ba(d,b)))break;b=b+1|0;}return b;}
function Gm(){D.call(this);}
var Bme=null;var Bmf=null;function Us(b){if(!(b&1)){if(Bmf!==null)return Bmf;Bmf=new WB;return Bmf;}if(Bme!==null)return Bme;Bme=new WA;return Bme;}
function Xx(){D8.call(this);}
function ATw(a,b,c,d){var e;a:{while(true){if((b+a.cN.eb()|0)>d.by)break a;e=a.cN.dn(b,c);if(e<1)break;b=b+e|0;}}return a.r.k(b,c,d);}
function Ss(){FX.call(this);}
function AYz(a,b,c,d){var e;if((b+a.cN.eb()|0)<=d.by){e=a.cN.dn(b,c);if(e>=1)b=b+e|0;}return a.r.k(b,c,d);}
function Ul(){GD.call(this);}
function A9A(a,b,c,d){var e,f,g,h,i;e=a.k0.jf;f=a.k0.ip;g=0;while(true){if(g>=e){a:{while(true){if(g>=f)break a;if((b+a.cN.eb()|0)>d.by)break a;h=a.cN.dn(b,c);if(h<1)break;b=b+h|0;g=g+1|0;}}return a.r.k(b,c,d);}if((b+a.cN.eb()|0)>d.by){d.hp=1;return (-1);}i=a.cN.dn(b,c);if(i<1)break;b=b+i|0;g=g+1|0;}return (-1);}
function UV(){D8.call(this);}
function AZh(a,b,c,d){var e;while(true){e=a.r.k(b,c,d);if(e>=0)break;if((b+a.cN.eb()|0)<=d.by){e=a.cN.dn(b,c);b=b+e|0;}if(e<1)return (-1);}return e;}
function V$(){FX.call(this);}
function ATA(a,b,c,d){var e;e=a.r.k(b,c,d);if(e>=0)return e;return a.bQ.k(b,c,d);}
function Qk(){GD.call(this);}
function A9I(a,b,c,d){var e,f,g,h,i;e=a.k0.jf;f=a.k0.ip;g=0;while(true){if(g>=e){a:{while(true){h=a.r.k(b,c,d);if(h>=0)break;if((b+a.cN.eb()|0)<=d.by){h=a.cN.dn(b,c);b=b+h|0;g=g+1|0;}if(h<1)break a;if(g>f)break a;}return h;}return (-1);}if((b+a.cN.eb()|0)>d.by){d.hp=1;return (-1);}i=a.cN.dn(b,c);if(i<1)break;b=b+i|0;g=g+1|0;}return (-1);}
function ABO(){Co.call(this);}
function A1d(){var a=new ABO();AVk(a);return a;}
function AVk(a){Cz(a);}
function A6_(a,b,c,d){if(b&&!(d.ln&&b==d.fh))return (-1);return a.r.k(b,c,d);}
function A6C(a,b){return 0;}
function AAp(){Co.call(this);this.Bh=0;}
function A$d(a){var b=new AAp();AXe(b,a);return b;}
function AXe(a,b){Cz(a);a.Bh=b;}
function A38(a,b,c,d){var e,f,g;e=b<d.by?Ba(c,b):32;f=!b?32:Ba(c,b-1|0);g=d.of?0:d.fh;return (e!=32&&!U1(a,e,b,g,c)?0:1)^(f!=32&&!U1(a,f,b-1|0,g,c)?0:1)^a.Bh?(-1):a.r.k(b,c,d);}
function A4c(a,b){return 0;}
function U1(a,b,c,d,e){var f;if(!Lc(b)&&b!=95){a:{if(Do(b)==6)while(true){c=c+(-1)|0;if(c<d)break a;f=Ba(e,c);if(Lc(f))return 0;if(Do(f)!=6)return 1;}}return 1;}return 0;}
function AJr(){Co.call(this);}
function Baf(){var a=new AJr();A0F(a);return a;}
function A0F(a){Cz(a);}
function AXd(a,b,c,d){if(b!=d.k2)return (-1);return a.r.k(b,c,d);}
function A2v(a,b){return 0;}
function SL(){Co.call(this);this.mc=0;}
function Ba1(a){var b=new SL();AQA(b,a);return b;}
function AQA(a,b){Cz(a);a.mc=b;}
function A8U(a,b,c,d){var e,f,g;e=!d.ln?Bi(c):d.by;if(b>=e){Cv(d,a.mc,0);return a.r.k(b,c,d);}f=e-b|0;if(f==2&&Ba(c,b)==13&&Ba(c,b+1|0)==10){Cv(d,a.mc,0);return a.r.k(b,c,d);}a:{if(f==1){g=Ba(c,b);if(g==10)break a;if(g==13)break a;if(g==133)break a;if((g|1)==8233)break a;}return (-1);}Cv(d,a.mc,0);return a.r.k(b,c,d);}
function A4D(a,b){var c;c=!Ep(b,a.mc)?0:1;Cv(b,a.mc,(-1));return c;}
function AQ8(){Co.call(this);}
function Ba9(){var a=new AQ8();AW5(a);return a;}
function AW5(a){Cz(a);}
function A8p(a,b,c,d){if(b<(d.of?Bi(c):d.by))return (-1);d.hp=1;d.Jj=1;return a.r.k(b,c,d);}
function A2T(a,b){return 0;}
function AIQ(){Co.call(this);this.DM=null;}
function BcC(a){var b=new AIQ();A8W(b,a);return b;}
function A8W(a,b){Cz(a);a.DM=b;}
function A4y(a,b,c,d){a:{if(b!=d.by){if(!b)break a;if(d.ln&&b==d.fh)break a;if(a.DM.Ec(Ba(c,b-1|0),Ba(c,b)))break a;}return (-1);}return a.r.k(b,c,d);}
function AWm(a,b){return 0;}
function AGi(){CE.call(this);}
function Bbh(){var a=new AGi();A8f(a);return a;}
function A8f(a){Cz(a);}
function A2d(a,b,c,d){var e,f,g,h;e=d.by;f=b+1|0;if(f>e){d.hp=1;return (-1);}g=Ba(c,b);if(Du(g)){h=b+2|0;if(h<=e&&J8(g,Ba(c,f)))return a.r.k(h,c,d);}return a.r.k(f,c,d);}
function A4h(a,b){a.r=b;}
function A8b(a){return (-2147483602);}
function A4f(a,b){return 1;}
function ZK(){CE.call(this);this.uS=null;}
function BaT(a){var b=new ZK();AUR(b,a);return b;}
function AUR(a,b){Cz(a);a.uS=b;}
function A8k(a,b,c,d){var e,f,g,h;e=d.by;f=b+1|0;if(f>e){d.hp=1;return (-1);}g=Ba(c,b);if(Du(g)){b=b+2|0;if(b<=e){h=Ba(c,f);if(J8(g,h))return a.uS.ov(EH(g,h))?(-1):a.r.k(b,c,d);}}return a.uS.ov(g)?(-1):a.r.k(f,c,d);}
function A9q(a,b){a.r=b;}
function ASJ(a){return (-2147483602);}
function A2k(a,b){return 1;}
function AQL(){Co.call(this);this.pM=0;}
function BaE(a){var b=new AQL();A5R(b,a);return b;}
function A5R(a,b){Cz(a);a.pM=b;}
function AXG(a,b,c,d){var e;e=!d.ln?Bi(c):d.by;if(b>=e){Cv(d,a.pM,0);return a.r.k(b,c,d);}if((e-b|0)==1&&Ba(c,b)==10){Cv(d,a.pM,1);return a.r.k(b+1|0,c,d);}return (-1);}
function A5N(a,b){var c;c=!Ep(b,a.pM)?0:1;Cv(b,a.pM,(-1));return c;}
function AN7(){Co.call(this);this.om=0;}
function Ban(a){var b=new AN7();A5_(b,a);return b;}
function A5_(a,b){Cz(a);a.om=b;}
function AY5(a,b,c,d){if((!d.ln?Bi(c)-b|0:d.by-b|0)<=0){Cv(d,a.om,0);return a.r.k(b,c,d);}if(Ba(c,b)!=10)return (-1);Cv(d,a.om,1);return a.r.k(b+1|0,c,d);}
function A5J(a,b){var c;c=!Ep(b,a.om)?0:1;Cv(b,a.om,(-1));return c;}
function AIc(){Co.call(this);this.lF=0;}
function A_V(a){var b=new AIc();A_F(b,a);return b;}
function A_F(a,b){Cz(a);a.lF=b;}
function A6x(a,b,c,d){var e,f,g;e=!d.ln?Bi(c)-b|0:d.fh-b|0;if(!e){Cv(d,a.lF,0);return a.r.k(b,c,d);}if(e<2){f=Ba(c,b);g=97;}else{f=Ba(c,b);g=Ba(c,b+1|0);}switch(f){case 10:case 133:case 8232:case 8233:Cv(d,a.lF,0);return a.r.k(b,c,d);case 13:if(g!=10){Cv(d,a.lF,0);return a.r.k(b,c,d);}Cv(d,a.lF,0);return a.r.k(b,c,d);default:}return (-1);}
function AUV(a,b){var c;c=!Ep(b,a.lF)?0:1;Cv(b,a.lF,(-1));return c;}
function IU(){var a=this;CE.call(a);a.y7=0;a.mI=0;}
function BcP(a,b){var c=new IU();PG(c,a,b);return c;}
function PG(a,b,c){Cz(a);a.y7=b;a.mI=c;}
function ATx(a,b,c,d){var e,f,g,h;e=HJ(a,d);if(e!==null&&(b+Bi(e)|0)<=d.by){f=0;while(true){if(f>=Bi(e)){Cv(d,a.mI,Bi(e));return a.r.k(b+Bi(e)|0,c,d);}g=Ba(e,f);h=b+f|0;if(g!=Ba(c,h)&&Kf(Ba(e,f))!=Ba(c,h))break;f=f+1|0;}return (-1);}return (-1);}
function A8Z(a,b){a.r=b;}
function HJ(a,b){return AM6(b,a.y7);}
function A0a(a,b){var c;c=!Ep(b,a.mI)?0:1;Cv(b,a.mI,(-1));return c;}
function AQW(){IU.call(this);}
function Bbw(a,b){var c=new AQW();A$E(c,a,b);return c;}
function A$E(a,b,c){PG(a,b,c);}
function AU2(a,b,c,d){var e,f;e=HJ(a,d);if(e!==null&&(b+Bi(e)|0)<=d.by){f=!Wg(c,e,b)?(-1):Bi(e);if(f<0)return (-1);Cv(d,a.mI,f);return a.r.k(b+f|0,c,d);}return (-1);}
function A1l(a,b,c,d){var e,f,g;e=HJ(a,d);f=d.fh;if(e!==null&&(b+Bi(e)|0)<=f){g=c;while(true){if(b>f)return (-1);b=AKH(g,e,b);if(b<0)return (-1);if(a.r.k(b+Bi(e)|0,c,d)>=0)break;b=b+1|0;}return b;}return (-1);}
function ATp(a,b,c,d,e){var f,g,h;f=HJ(a,e);if(f===null)return (-1);g=d;a:{while(true){if(c<b)return (-1);h=AAz(g,f,c);if(h<0)break a;if(h<b)break a;if(a.r.k(h+Bi(f)|0,d,e)>=0)break;c=h+(-1)|0;}return h;}return (-1);}
function A7D(a,b){return 1;}
function AMf(){IU.call(this);}
function Bam(a,b){var c=new AMf();AWg(c,a,b);return c;}
function AWg(a,b,c){PG(a,b,c);}
function AX8(a,b,c,d){var e,f;e=HJ(a,d);if(e!==null&&(b+Bi(e)|0)<=d.by){f=0;while(true){if(f>=Bi(e)){Cv(d,a.mI,Bi(e));return a.r.k(b+Bi(e)|0,c,d);}if(ES(FF(Ba(e,f)))!=ES(FF(Ba(c,b+f|0))))break;f=f+1|0;}return (-1);}return (-1);}
function AMT(){var a=this;CI.call(a);a.e4=null;a.w5=null;a.u4=null;}
function Bap(a){var b=new AMT();A4W(b,a);return b;}
function A4W(a,b){var c;EL(a);a.e4=V(b);a.dl=OA(b);a.w5=A8a(a.dl);a.u4=A8a(a.dl);c=0;while(c<(a.dl-1|0)){Qm(a.w5,Ba(a.e4,c),(a.dl-c|0)-1|0);Qm(a.u4,Ba(a.e4,(a.dl-c|0)-1|0),(a.dl-c|0)-1|0);c=c+1|0;}}
function AVg(a,b,c){return !LE(a,c,b)?(-1):a.dl;}
function A37(a,b,c,d){var e,f;e=d.by;while(true){if(b>e)return (-1);f=AQ_(a,c,b,e);if(f<0)return (-1);if(a.r.k(f+a.dl|0,c,d)>=0)break;b=f+1|0;}return f;}
function A5U(a,b,c,d,e){while(true){if(c<b)return (-1);c=AQy(a,d,b,c);if(c<0)return (-1);if(a.r.k(c+a.dl|0,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AWO(a,b){var c;if(b instanceof Fw)return b.gv!=Ba(a.e4,0)?0:1;if(b instanceof Fo)return Ta(b,0,Ev(a.e4,0,1))<=0?0:1;if(!(b instanceof EN)){if(!(b instanceof EX))return 1;return Bi(a.e4)>1&&b.kA==EH(Ba(a.e4,0),Ba(a.e4,1))?1:0;}a:{b:{b=b;if(!b.X(Ba(a.e4,0))){if(Bi(a.e4)<=1)break b;if(!b.X(EH(Ba(a.e4,0),Ba(a.e4,1))))break b;}c=1;break a;}c=0;}return c;}
function AQ_(a,b,c,d){var e,f;e=Ba(a.e4,a.dl-1|0);while(true){if(c>(d-a.dl|0))return (-1);f=Ba(b,(c+a.dl|0)-1|0);if(f==e&&LE(a,b,c))break;c=c+VJ(a.w5,f)|0;}return c;}
function AQy(a,b,c,d){var e,f,g;e=Ba(a.e4,0);f=(Bi(b)-d|0)-a.dl|0;if(f<=0)d=d+f|0;while(true){if(d<c)return (-1);g=Ba(b,d);if(g==e&&LE(a,b,d))break;d=d-VJ(a.u4,g)|0;}return d;}
function LE(a,b,c){var d;d=0;while(d<a.dl){if(Ba(b,d+c|0)!=Ba(a.e4,d))return 0;d=d+1|0;}return 1;}
function XI(){CI.call(this);this.sL=null;}
function BcQ(a){var b=new XI();A$g(b,a);return b;}
function A$g(a,b){var c,d;EL(a);c=new U;W(c);d=0;while(d<OA(b)){DQ(c,ES(FF(AIe(b,d))));d=d+1|0;}a.sL=V(c);a.dl=Kb(c);}
function AX_(a,b,c){var d;d=0;while(true){if(d>=Bi(a.sL))return Bi(a.sL);if(Ba(a.sL,d)!=ES(FF(Ba(c,b+d|0))))break;d=d+1|0;}return (-1);}
function O1(){CI.call(this);this.pK=null;}
function A9C(a,b,c){var d,e,f;d=0;while(true){if(d>=Bi(a.pK))return Bi(a.pK);e=Ba(a.pK,d);f=b+d|0;if(e!=Ba(c,f)&&Kf(Ba(a.pK,d))!=Ba(c,f))break;d=d+1|0;}return (-1);}
function Ia(){D.call(this);}
var Bmg=null;var Bmh=null;var Bmi=null;function Bmj(){var a=new Ia();AF9(a);return a;}
function AF9(a){return;}
function ARu(a,b){var c,d,e;c=0;while(true){if(c>=Bmi.data.length){d=new MR;Bo(d,B(3));d.G_=B(3);d.Js=b;M(d);}e=Bmi.data[c].data;if(DC(b,e[0]))break;c=c+1|0;}return e[1];}
function AAr(){var b,c,d,e;Bmg=Ba6();Bmh=Bb7();b=J($rt_arraycls(D),194);c=b.data;d=J(D,2);e=d.data;e[0]=B(642);e[1]=Bbk();c[0]=d;d=J(D,2);e=d.data;e[0]=B(643);e[1]=A_R();c[1]=d;d=J(D,2);e=d.data;e[0]=B(644);e[1]=BcA();c[2]=d;d=J(D,2);e=d.data;e[0]=B(645);e[1]=BcI();c[3]=d;d=J(D,2);e=d.data;e[0]=B(646);e[1]=Bmh;c[4]=d;d=J(D,2);e=d.data;e[0]=B(647);e[1]=Bcb();c[5]=d;d=J(D,2);e=d.data;e[0]=B(648);e[1]=Bas();c[6]=d;d=J(D,2);e=d.data;e[0]=B(649);e[1]=Bby();c[7]=d;d=J(D,2);e=d.data;e[0]=B(650);e[1]=Bbv();c[8]=d;d
=J(D,2);e=d.data;e[0]=B(651);e[1]=A_5();c[9]=d;d=J(D,2);e=d.data;e[0]=B(652);e[1]=Bah();c[10]=d;d=J(D,2);e=d.data;e[0]=B(653);e[1]=BbA();c[11]=d;d=J(D,2);e=d.data;e[0]=B(654);e[1]=BaO();c[12]=d;d=J(D,2);e=d.data;e[0]=B(655);e[1]=A_P();c[13]=d;d=J(D,2);e=d.data;e[0]=B(656);e[1]=BcE();c[14]=d;d=J(D,2);e=d.data;e[0]=B(657);e[1]=Bag();c[15]=d;d=J(D,2);e=d.data;e[0]=B(658);e[1]=Bb_();c[16]=d;d=J(D,2);e=d.data;e[0]=B(659);e[1]=BbP();c[17]=d;d=J(D,2);e=d.data;e[0]=B(660);e[1]=Bca();c[18]=d;d=J(D,2);e=d.data;e[0]=B(661);e[1]
=A_8();c[19]=d;d=J(D,2);e=d.data;e[0]=B(662);e[1]=BcJ();c[20]=d;d=J(D,2);e=d.data;e[0]=B(663);e[1]=BbL();c[21]=d;d=J(D,2);e=d.data;e[0]=B(664);e[1]=BaG();c[22]=d;d=J(D,2);e=d.data;e[0]=B(665);e[1]=Bcz();c[23]=d;d=J(D,2);e=d.data;e[0]=B(666);e[1]=Bcw();c[24]=d;d=J(D,2);e=d.data;e[0]=B(667);e[1]=Bbg();c[25]=d;d=J(D,2);e=d.data;e[0]=B(668);e[1]=A_7();c[26]=d;d=J(D,2);e=d.data;e[0]=B(669);e[1]=Bcp();c[27]=d;d=J(D,2);e=d.data;e[0]=B(670);e[1]=Bmg;c[28]=d;d=J(D,2);e=d.data;e[0]=B(671);e[1]=BaI();c[29]=d;d=J(D,2);e
=d.data;e[0]=B(44);e[1]=Bbz();c[30]=d;d=J(D,2);e=d.data;e[0]=B(672);e[1]=Bmg;c[31]=d;d=J(D,2);e=d.data;e[0]=B(58);e[1]=A_O();c[32]=d;d=J(D,2);e=d.data;e[0]=B(673);e[1]=Bmh;c[33]=d;d=J(D,2);e=d.data;e[0]=B(59);e[1]=Bal();c[34]=d;d=J(D,2);e=d.data;e[0]=B(674);e[1]=T(0,127);c[35]=d;d=J(D,2);e=d.data;e[0]=B(675);e[1]=T(128,255);c[36]=d;d=J(D,2);e=d.data;e[0]=B(676);e[1]=T(256,383);c[37]=d;d=J(D,2);e=d.data;e[0]=B(677);e[1]=T(384,591);c[38]=d;d=J(D,2);e=d.data;e[0]=B(678);e[1]=T(592,687);c[39]=d;d=J(D,2);e=d.data;e[0]
=B(679);e[1]=T(688,767);c[40]=d;d=J(D,2);e=d.data;e[0]=B(680);e[1]=T(768,879);c[41]=d;d=J(D,2);e=d.data;e[0]=B(681);e[1]=T(880,1023);c[42]=d;d=J(D,2);e=d.data;e[0]=B(682);e[1]=T(1024,1279);c[43]=d;d=J(D,2);e=d.data;e[0]=B(683);e[1]=T(1280,1327);c[44]=d;d=J(D,2);e=d.data;e[0]=B(684);e[1]=T(1328,1423);c[45]=d;d=J(D,2);e=d.data;e[0]=B(685);e[1]=T(1424,1535);c[46]=d;d=J(D,2);e=d.data;e[0]=B(686);e[1]=T(1536,1791);c[47]=d;d=J(D,2);e=d.data;e[0]=B(687);e[1]=T(1792,1871);c[48]=d;d=J(D,2);e=d.data;e[0]=B(688);e[1]=
T(1872,1919);c[49]=d;d=J(D,2);e=d.data;e[0]=B(689);e[1]=T(1920,1983);c[50]=d;d=J(D,2);e=d.data;e[0]=B(690);e[1]=T(2304,2431);c[51]=d;d=J(D,2);e=d.data;e[0]=B(691);e[1]=T(2432,2559);c[52]=d;d=J(D,2);e=d.data;e[0]=B(692);e[1]=T(2560,2687);c[53]=d;d=J(D,2);e=d.data;e[0]=B(693);e[1]=T(2688,2815);c[54]=d;d=J(D,2);e=d.data;e[0]=B(694);e[1]=T(2816,2943);c[55]=d;d=J(D,2);e=d.data;e[0]=B(695);e[1]=T(2944,3071);c[56]=d;d=J(D,2);e=d.data;e[0]=B(696);e[1]=T(3072,3199);c[57]=d;d=J(D,2);e=d.data;e[0]=B(697);e[1]=T(3200,3327);c[58]
=d;d=J(D,2);e=d.data;e[0]=B(698);e[1]=T(3328,3455);c[59]=d;d=J(D,2);e=d.data;e[0]=B(699);e[1]=T(3456,3583);c[60]=d;d=J(D,2);e=d.data;e[0]=B(700);e[1]=T(3584,3711);c[61]=d;d=J(D,2);e=d.data;e[0]=B(701);e[1]=T(3712,3839);c[62]=d;d=J(D,2);e=d.data;e[0]=B(702);e[1]=T(3840,4095);c[63]=d;d=J(D,2);e=d.data;e[0]=B(703);e[1]=T(4096,4255);c[64]=d;d=J(D,2);e=d.data;e[0]=B(704);e[1]=T(4256,4351);c[65]=d;d=J(D,2);e=d.data;e[0]=B(705);e[1]=T(4352,4607);c[66]=d;d=J(D,2);e=d.data;e[0]=B(706);e[1]=T(4608,4991);c[67]=d;d=J(D,
2);e=d.data;e[0]=B(707);e[1]=T(4992,5023);c[68]=d;d=J(D,2);e=d.data;e[0]=B(708);e[1]=T(5024,5119);c[69]=d;d=J(D,2);e=d.data;e[0]=B(709);e[1]=T(5120,5759);c[70]=d;d=J(D,2);e=d.data;e[0]=B(710);e[1]=T(5760,5791);c[71]=d;d=J(D,2);e=d.data;e[0]=B(711);e[1]=T(5792,5887);c[72]=d;d=J(D,2);e=d.data;e[0]=B(712);e[1]=T(5888,5919);c[73]=d;d=J(D,2);e=d.data;e[0]=B(713);e[1]=T(5920,5951);c[74]=d;d=J(D,2);e=d.data;e[0]=B(714);e[1]=T(5952,5983);c[75]=d;d=J(D,2);e=d.data;e[0]=B(715);e[1]=T(5984,6015);c[76]=d;d=J(D,2);e=d.data;e[0]
=B(716);e[1]=T(6016,6143);c[77]=d;d=J(D,2);e=d.data;e[0]=B(717);e[1]=T(6144,6319);c[78]=d;d=J(D,2);e=d.data;e[0]=B(718);e[1]=T(6400,6479);c[79]=d;d=J(D,2);e=d.data;e[0]=B(719);e[1]=T(6480,6527);c[80]=d;d=J(D,2);e=d.data;e[0]=B(720);e[1]=T(6528,6623);c[81]=d;d=J(D,2);e=d.data;e[0]=B(721);e[1]=T(6624,6655);c[82]=d;d=J(D,2);e=d.data;e[0]=B(722);e[1]=T(6656,6687);c[83]=d;d=J(D,2);e=d.data;e[0]=B(723);e[1]=T(7424,7551);c[84]=d;d=J(D,2);e=d.data;e[0]=B(724);e[1]=T(7552,7615);c[85]=d;d=J(D,2);e=d.data;e[0]=B(725);e[1]
=T(7616,7679);c[86]=d;d=J(D,2);e=d.data;e[0]=B(726);e[1]=T(7680,7935);c[87]=d;d=J(D,2);e=d.data;e[0]=B(727);e[1]=T(7936,8191);c[88]=d;d=J(D,2);e=d.data;e[0]=B(728);e[1]=T(8192,8303);c[89]=d;d=J(D,2);e=d.data;e[0]=B(729);e[1]=T(8304,8351);c[90]=d;d=J(D,2);e=d.data;e[0]=B(730);e[1]=T(8352,8399);c[91]=d;d=J(D,2);e=d.data;e[0]=B(731);e[1]=T(8400,8447);c[92]=d;d=J(D,2);e=d.data;e[0]=B(732);e[1]=T(8448,8527);c[93]=d;d=J(D,2);e=d.data;e[0]=B(733);e[1]=T(8528,8591);c[94]=d;d=J(D,2);e=d.data;e[0]=B(734);e[1]=T(8592,
8703);c[95]=d;d=J(D,2);e=d.data;e[0]=B(735);e[1]=T(8704,8959);c[96]=d;d=J(D,2);e=d.data;e[0]=B(736);e[1]=T(8960,9215);c[97]=d;d=J(D,2);e=d.data;e[0]=B(737);e[1]=T(9216,9279);c[98]=d;d=J(D,2);e=d.data;e[0]=B(738);e[1]=T(9280,9311);c[99]=d;d=J(D,2);e=d.data;e[0]=B(739);e[1]=T(9312,9471);c[100]=d;d=J(D,2);e=d.data;e[0]=B(740);e[1]=T(9472,9599);c[101]=d;d=J(D,2);e=d.data;e[0]=B(741);e[1]=T(9600,9631);c[102]=d;d=J(D,2);e=d.data;e[0]=B(742);e[1]=T(9632,9727);c[103]=d;d=J(D,2);e=d.data;e[0]=B(743);e[1]=T(9728,9983);c[104]
=d;d=J(D,2);e=d.data;e[0]=B(744);e[1]=T(9984,10175);c[105]=d;d=J(D,2);e=d.data;e[0]=B(745);e[1]=T(10176,10223);c[106]=d;d=J(D,2);e=d.data;e[0]=B(746);e[1]=T(10224,10239);c[107]=d;d=J(D,2);e=d.data;e[0]=B(747);e[1]=T(10240,10495);c[108]=d;d=J(D,2);e=d.data;e[0]=B(748);e[1]=T(10496,10623);c[109]=d;d=J(D,2);e=d.data;e[0]=B(749);e[1]=T(10624,10751);c[110]=d;d=J(D,2);e=d.data;e[0]=B(750);e[1]=T(10752,11007);c[111]=d;d=J(D,2);e=d.data;e[0]=B(751);e[1]=T(11008,11263);c[112]=d;d=J(D,2);e=d.data;e[0]=B(752);e[1]=T(11264,
11359);c[113]=d;d=J(D,2);e=d.data;e[0]=B(753);e[1]=T(11392,11519);c[114]=d;d=J(D,2);e=d.data;e[0]=B(754);e[1]=T(11520,11567);c[115]=d;d=J(D,2);e=d.data;e[0]=B(755);e[1]=T(11568,11647);c[116]=d;d=J(D,2);e=d.data;e[0]=B(756);e[1]=T(11648,11743);c[117]=d;d=J(D,2);e=d.data;e[0]=B(757);e[1]=T(11776,11903);c[118]=d;d=J(D,2);e=d.data;e[0]=B(758);e[1]=T(11904,12031);c[119]=d;d=J(D,2);e=d.data;e[0]=B(759);e[1]=T(12032,12255);c[120]=d;d=J(D,2);e=d.data;e[0]=B(760);e[1]=T(12272,12287);c[121]=d;d=J(D,2);e=d.data;e[0]=B(761);e[1]
=T(12288,12351);c[122]=d;d=J(D,2);e=d.data;e[0]=B(762);e[1]=T(12352,12447);c[123]=d;d=J(D,2);e=d.data;e[0]=B(763);e[1]=T(12448,12543);c[124]=d;d=J(D,2);e=d.data;e[0]=B(764);e[1]=T(12544,12591);c[125]=d;d=J(D,2);e=d.data;e[0]=B(765);e[1]=T(12592,12687);c[126]=d;d=J(D,2);e=d.data;e[0]=B(766);e[1]=T(12688,12703);c[127]=d;d=J(D,2);e=d.data;e[0]=B(767);e[1]=T(12704,12735);c[128]=d;d=J(D,2);e=d.data;e[0]=B(768);e[1]=T(12736,12783);c[129]=d;d=J(D,2);e=d.data;e[0]=B(769);e[1]=T(12784,12799);c[130]=d;d=J(D,2);e=d.data;e[0]
=B(770);e[1]=T(12800,13055);c[131]=d;d=J(D,2);e=d.data;e[0]=B(771);e[1]=T(13056,13311);c[132]=d;d=J(D,2);e=d.data;e[0]=B(772);e[1]=T(13312,19893);c[133]=d;d=J(D,2);e=d.data;e[0]=B(773);e[1]=T(19904,19967);c[134]=d;d=J(D,2);e=d.data;e[0]=B(774);e[1]=T(19968,40959);c[135]=d;d=J(D,2);e=d.data;e[0]=B(775);e[1]=T(40960,42127);c[136]=d;d=J(D,2);e=d.data;e[0]=B(776);e[1]=T(42128,42191);c[137]=d;d=J(D,2);e=d.data;e[0]=B(777);e[1]=T(42752,42783);c[138]=d;d=J(D,2);e=d.data;e[0]=B(778);e[1]=T(43008,43055);c[139]=d;d=J(D,
2);e=d.data;e[0]=B(779);e[1]=T(44032,55203);c[140]=d;d=J(D,2);e=d.data;e[0]=B(780);e[1]=T(55296,56191);c[141]=d;d=J(D,2);e=d.data;e[0]=B(781);e[1]=T(56192,56319);c[142]=d;d=J(D,2);e=d.data;e[0]=B(782);e[1]=T(56320,57343);c[143]=d;d=J(D,2);e=d.data;e[0]=B(783);e[1]=T(57344,63743);c[144]=d;d=J(D,2);e=d.data;e[0]=B(784);e[1]=T(63744,64255);c[145]=d;d=J(D,2);e=d.data;e[0]=B(785);e[1]=T(64256,64335);c[146]=d;d=J(D,2);e=d.data;e[0]=B(786);e[1]=T(64336,65023);c[147]=d;d=J(D,2);e=d.data;e[0]=B(787);e[1]=T(65024,65039);c[148]
=d;d=J(D,2);e=d.data;e[0]=B(788);e[1]=T(65040,65055);c[149]=d;d=J(D,2);e=d.data;e[0]=B(789);e[1]=T(65056,65071);c[150]=d;d=J(D,2);e=d.data;e[0]=B(790);e[1]=T(65072,65103);c[151]=d;d=J(D,2);e=d.data;e[0]=B(791);e[1]=T(65104,65135);c[152]=d;d=J(D,2);e=d.data;e[0]=B(792);e[1]=T(65136,65279);c[153]=d;d=J(D,2);e=d.data;e[0]=B(793);e[1]=T(65280,65519);c[154]=d;d=J(D,2);e=d.data;e[0]=B(794);e[1]=T(0,1114111);c[155]=d;d=J(D,2);e=d.data;e[0]=B(795);e[1]=BbB();c[156]=d;d=J(D,2);e=d.data;e[0]=B(796);e[1]=CA(0,1);c[157]
=d;d=J(D,2);e=d.data;e[0]=B(797);e[1]=KV(62,1);c[158]=d;d=J(D,2);e=d.data;e[0]=B(798);e[1]=CA(1,1);c[159]=d;d=J(D,2);e=d.data;e[0]=B(799);e[1]=CA(2,1);c[160]=d;d=J(D,2);e=d.data;e[0]=B(800);e[1]=CA(3,0);c[161]=d;d=J(D,2);e=d.data;e[0]=B(801);e[1]=CA(4,0);c[162]=d;d=J(D,2);e=d.data;e[0]=B(802);e[1]=CA(5,1);c[163]=d;d=J(D,2);e=d.data;e[0]=B(803);e[1]=KV(448,1);c[164]=d;d=J(D,2);e=d.data;e[0]=B(804);e[1]=CA(6,1);c[165]=d;d=J(D,2);e=d.data;e[0]=B(805);e[1]=CA(7,0);c[166]=d;d=J(D,2);e=d.data;e[0]=B(806);e[1]=CA(8,
1);c[167]=d;d=J(D,2);e=d.data;e[0]=B(76);e[1]=KV(3584,1);c[168]=d;d=J(D,2);e=d.data;e[0]=B(807);e[1]=CA(9,1);c[169]=d;d=J(D,2);e=d.data;e[0]=B(808);e[1]=CA(10,1);c[170]=d;d=J(D,2);e=d.data;e[0]=B(809);e[1]=CA(11,1);c[171]=d;d=J(D,2);e=d.data;e[0]=B(810);e[1]=KV(28672,0);c[172]=d;d=J(D,2);e=d.data;e[0]=B(811);e[1]=CA(12,0);c[173]=d;d=J(D,2);e=d.data;e[0]=B(812);e[1]=CA(13,0);c[174]=d;d=J(D,2);e=d.data;e[0]=B(813);e[1]=CA(14,0);c[175]=d;d=J(D,2);e=d.data;e[0]=B(814);e[1]=Bb1(983040,1,1);c[176]=d;d=J(D,2);e=d.data;e[0]
=B(815);e[1]=CA(15,0);c[177]=d;d=J(D,2);e=d.data;e[0]=B(816);e[1]=CA(16,1);c[178]=d;d=J(D,2);e=d.data;e[0]=B(817);e[1]=CA(18,1);c[179]=d;d=J(D,2);e=d.data;e[0]=B(818);e[1]=BaB(19,0,1);c[180]=d;d=J(D,2);e=d.data;e[0]=B(819);e[1]=KV(1643118592,1);c[181]=d;d=J(D,2);e=d.data;e[0]=B(820);e[1]=CA(20,0);c[182]=d;d=J(D,2);e=d.data;e[0]=B(821);e[1]=CA(21,0);c[183]=d;d=J(D,2);e=d.data;e[0]=B(822);e[1]=CA(22,0);c[184]=d;d=J(D,2);e=d.data;e[0]=B(823);e[1]=CA(23,0);c[185]=d;d=J(D,2);e=d.data;e[0]=B(824);e[1]=CA(24,1);c[186]
=d;d=J(D,2);e=d.data;e[0]=B(825);e[1]=KV(2113929216,1);c[187]=d;d=J(D,2);e=d.data;e[0]=B(826);e[1]=CA(25,1);c[188]=d;d=J(D,2);e=d.data;e[0]=B(827);e[1]=CA(26,0);c[189]=d;d=J(D,2);e=d.data;e[0]=B(828);e[1]=CA(27,0);c[190]=d;d=J(D,2);e=d.data;e[0]=B(829);e[1]=CA(28,1);c[191]=d;d=J(D,2);e=d.data;e[0]=B(830);e[1]=CA(29,0);c[192]=d;d=J(D,2);e=d.data;e[0]=B(831);e[1]=CA(30,0);c[193]=d;Bmi=b;}
function By(){var a=this;D.call(a);a.vp=null;a.uw=null;}
function APR(a,b){if(!b&&a.vp===null)a.vp=a.bW();else if(b&&a.uw===null)a.uw=Fz(a.bW(),1);if(b)return a.uw;return a.vp;}
function Td(){CI.call(this);this.z_=0;}
function A0t(a,b,c){var d,e;d=b+1|0;e=Ba(c,b);d=Ba(c,d);return a.z_!=GO(GN(EH(e,d)))?(-1):2;}
function NM(){CE.call(this);this.mt=0;}
function AYT(a){var b=new NM();AUq(b,a);return b;}
function AUq(a,b){Cz(a);a.mt=b;}
function A8C(a,b){a.r=b;}
function A4E(a,b,c,d){var e,f;e=b+1|0;if(e>d.by){d.hp=1;return (-1);}f=Ba(c,b);if(b>d.fh&&Du(Ba(c,b-1|0)))return (-1);if(a.mt!=f)return (-1);return a.r.k(e,c,d);}
function AWN(a,b,c,d){var e,f,g,h,i;if(!(c instanceof B4))return Jg(a,b,c,d);e=c;f=d.fh;g=d.by;while(true){if(b>=g)return (-1);h=Hj(e,a.mt,b);if(h<0)return (-1);if(h>f&&Du(Ba(e,h-1|0))){b=h+1|0;continue;}i=a.r;b=h+1|0;if(i.k(b,c,d)>=0)break;}return h;}
function A44(a,b,c,d,e){var f,g;if(!(d instanceof B4))return Jr(a,b,c,d,e);f=e.fh;g=d;a:{while(true){if(c<b)return (-1);c=Il(g,a.mt,c);if(c<0)break a;if(c<b)break a;if(c>f&&Du(Ba(g,c-1|0))){c=c+(-2)|0;continue;}if(a.r.k(c+1|0,d,e)>=0)break;c=c+(-1)|0;}return c;}return (-1);}
function ATk(a,b){if(b instanceof Fw)return 0;if(b instanceof Fo)return 0;if(b instanceof EN)return 0;if(b instanceof EX)return 0;if(b instanceof NS)return 0;if(!(b instanceof NM))return 1;return b.mt!=a.mt?0:1;}
function A02(a,b){return 1;}
function NS(){CE.call(this);this.l3=0;}
function A6y(a){var b=new NS();AY1(b,a);return b;}
function AY1(a,b){Cz(a);a.l3=b;}
function A4p(a,b){a.r=b;}
function AS0(a,b,c,d){var e,f,g,h;e=d.by;f=b+1|0;g=R(f,e);if(g>0){d.hp=1;return (-1);}h=Ba(c,b);if(g<0&&DS(Ba(c,f)))return (-1);if(a.l3!=h)return (-1);return a.r.k(f,c,d);}
function A8N(a,b,c,d){var e,f,g;if(!(c instanceof B4))return Jg(a,b,c,d);e=c;f=d.by;while(true){if(b>=f)return (-1);g=Hj(e,a.l3,b);if(g<0)return (-1);b=g+1|0;if(b<f&&DS(Ba(e,b))){b=g+2|0;continue;}if(a.r.k(b,c,d)>=0)break;}return g;}
function A0r(a,b,c,d,e){var f,g,h;if(!(d instanceof B4))return Jr(a,b,c,d,e);f=d;g=e.by;a:{while(true){if(c<b)return (-1);c=Il(f,a.l3,c);if(c<0)break a;if(c<b)break a;h=c+1|0;if(h<g&&DS(Ba(f,h))){c=c+(-1)|0;continue;}if(a.r.k(h,d,e)>=0)break;c=c+(-1)|0;}return c;}return (-1);}
function AVh(a,b){if(b instanceof Fw)return 0;if(b instanceof Fo)return 0;if(b instanceof EN)return 0;if(b instanceof EX)return 0;if(b instanceof NM)return 0;if(!(b instanceof NS))return 1;return b.l3!=a.l3?0:1;}
function A8P(a,b){return 1;}
function EX(){var a=this;CI.call(a);a.tB=0;a.sf=0;a.kA=0;}
function A9h(a,b,c){var d,e;d=b+1|0;e=Ba(c,b);d=Ba(c,d);return a.tB==e&&a.sf==d?2:(-1);}
function A7Z(a,b,c,d){var e,f,g;if(!(c instanceof B4))return Jg(a,b,c,d);e=c;f=d.by;while(b<f){b=Hj(e,a.tB,b);if(b<0)return (-1);b=b+1|0;if(b>=f)continue;g=Ba(e,b);if(a.sf==g&&a.r.k(b+1|0,c,d)>=0)return b+(-1)|0;b=b+1|0;}return (-1);}
function AUr(a,b,c,d,e){var f;if(!(d instanceof B4))return Jr(a,b,c,d,e);f=d;a:{while(true){if(c<b)return (-1);c=Il(f,a.sf,c)+(-1)|0;if(c<0)break a;if(c<b)break a;if(a.tB==Ba(f,c)&&a.r.k(c+2|0,d,e)>=0)break;c=c+(-1)|0;}return c;}return (-1);}
function A3a(a){return a.kA;}
function A8$(a,b){if(b instanceof EX)return b.kA!=a.kA?0:1;if(b instanceof EN)return b.X(a.kA);if(b instanceof Fw)return 0;if(!(b instanceof Fo))return 1;return 0;}
function WA(){Gm.call(this);}
function Bmk(){var a=new WA();A34(a);return a;}
function A34(a){return;}
function AUA(a,b){return b!=10?0:1;}
function AZ9(a,b,c){return b!=10?0:1;}
function WB(){Gm.call(this);}
function Bml(){var a=new WB();AWL(a);return a;}
function AWL(a){return;}
function A9K(a,b){return b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1;}
function A1Z(a,b,c){a:{b:{if(b!=10&&b!=133&&(b|1)!=8233){if(b!=13)break b;if(c==10)break b;}b=1;break a;}b=0;}return b;}
function AEQ(){var a=this;D.call(a);a.oW=null;a.tP=null;a.f$=0;a.BD=0;}
function A8a(a){var b=new AEQ();AXc(b,a);return b;}
function AXc(a,b){while(b>=a.f$){a.f$=a.f$<<1|1;}a.f$=a.f$<<1|1;a.oW=$rt_createIntArray(a.f$+1|0);a.tP=$rt_createIntArray(a.f$+1|0);a.BD=b;}
function Qm(a,b,c){var d,e;d=0;e=b&a.f$;while(a.oW.data[e]&&a.oW.data[e]!=b){d=(d+1|0)&a.f$;e=(e+d|0)&a.f$;}a.oW.data[e]=b;a.tP.data[e]=c;}
function VJ(a,b){var c,d,e;c=b&a.f$;d=0;while(true){e=a.oW.data[c];if(!e)break;if(e==b)return a.tP.data[c];d=(d+1|0)&a.f$;c=(c+d|0)&a.f$;}return a.BD;}
function Yy(){D.call(this);}
function NK(){By.call(this);}
function Ba6(){var a=new NK();AWX(a);return a;}
function AWX(a){return;}
function AMo(a){return Dp(CG(Eq(),9,13),32);}
function Nb(){By.call(this);}
function Bb7(){var a=new Nb();A0S(a);return a;}
function A0S(a){return;}
function ANO(a){return CG(Eq(),48,57);}
function AEI(){By.call(this);}
function Bbk(){var a=new AEI();AWt(a);return a;}
function AWt(a){return;}
function A9s(a){return CG(Eq(),97,122);}
function AFl(){By.call(this);}
function A_R(){var a=new AFl();AXg(a);return a;}
function AXg(a){return;}
function A04(a){return CG(Eq(),65,90);}
function AFu(){By.call(this);}
function BcA(){var a=new AFu();ATV(a);return a;}
function ATV(a){return;}
function AVJ(a){return CG(Eq(),0,127);}
function NG(){By.call(this);}
function BcI(){var a=new NG();AU3(a);return a;}
function AU3(a){return;}
function ZQ(a){return CG(CG(Eq(),97,122),65,90);}
function L_(){NG.call(this);}
function Bcb(){var a=new L_();AW0(a);return a;}
function AW0(a){return;}
function AAY(a){return CG(ZQ(a),48,57);}
function AHS(){By.call(this);}
function Bas(){var a=new AHS();A7O(a);return a;}
function A7O(a){return;}
function A6b(a){return CG(CG(CG(Eq(),33,64),91,96),123,126);}
function OE(){L_.call(this);}
function Bby(){var a=new OE();AZQ(a);return a;}
function AZQ(a){return;}
function AH8(a){return CG(CG(CG(AAY(a),33,64),91,96),123,126);}
function AMQ(){OE.call(this);}
function Bbv(){var a=new AMQ();A0J(a);return a;}
function A0J(a){return;}
function AYw(a){return Dp(AH8(a),32);}
function ACM(){By.call(this);}
function A_5(){var a=new ACM();A9D(a);return a;}
function A9D(a){return;}
function A4V(a){return Dp(Dp(Eq(),32),9);}
function AAk(){By.call(this);}
function Bah(){var a=new AAk();A$W(a);return a;}
function A$W(a){return;}
function AYo(a){return Dp(CG(Eq(),0,31),127);}
function AJ_(){By.call(this);}
function BbA(){var a=new AJ_();AT9(a);return a;}
function AT9(a){return;}
function A10(a){return CG(CG(CG(Eq(),48,57),97,102),65,70);}
function AQd(){By.call(this);}
function BaO(){var a=new AQd();A3W(a);return a;}
function A3W(a){return;}
function A7_(a){var b;b=new VN;b.Iu=a;B0(b);b.ca=1;return b;}
function AH0(){By.call(this);}
function A_P(){var a=new AH0();AZ6(a);return a;}
function AZ6(a){return;}
function A2Z(a){var b;b=new Tj;b.ID=a;B0(b);b.ca=1;return b;}
function APq(){By.call(this);}
function BcE(){var a=new APq();ATX(a);return a;}
function ATX(a){return;}
function AWZ(a){var b;b=new QO;b.H7=a;B0(b);return b;}
function AEq(){By.call(this);}
function Bag(){var a=new AEq();AYr(a);return a;}
function AYr(a){return;}
function A0c(a){var b;b=new QN;b.FL=a;B0(b);return b;}
function AFZ(){By.call(this);}
function Bb_(){var a=new AFZ();AU1(a);return a;}
function AU1(a){return;}
function A4T(a){var b;b=new SC;b.GW=a;B0(b);Js(b.b$,0,2048);b.ca=1;return b;}
function Y1(){By.call(this);}
function BbP(){var a=new Y1();AUw(a);return a;}
function AUw(a){return;}
function AVr(a){var b;b=new Ug;b.IT=a;B0(b);b.ca=1;return b;}
function AIx(){By.call(this);}
function Bca(){var a=new AIx();AX9(a);return a;}
function AX9(a){return;}
function A$0(a){var b;b=new Pj;b.Hc=a;B0(b);b.ca=1;return b;}
function APF(){By.call(this);}
function A_8(){var a=new APF();AYD(a);return a;}
function AYD(a){return;}
function A2V(a){var b;b=new U9;b.Ge=a;B0(b);return b;}
function AE$(){By.call(this);}
function BcJ(){var a=new AE$();A6m(a);return a;}
function A6m(a){return;}
function AXJ(a){var b;b=new Tg;b.Fi=a;B0(b);b.ca=1;return b;}
function ALd(){By.call(this);}
function BbL(){var a=new ALd();ATq(a);return a;}
function ATq(a){return;}
function AVx(a){var b;b=new Ti;b.GC=a;B0(b);b.ca=1;return b;}
function ACY(){By.call(this);}
function BaG(){var a=new ACY();AUF(a);return a;}
function AUF(a){return;}
function A5W(a){var b;b=new Pa;b.GU=a;B0(b);b.ca=1;return b;}
function AHb(){By.call(this);}
function Bcz(){var a=new AHb();AXS(a);return a;}
function AXS(a){return;}
function A6Z(a){var b;b=new Uw;b.Jx=a;B0(b);b.ca=1;return b;}
function APT(){By.call(this);}
function Bcw(){var a=new APT();A74(a);return a;}
function A74(a){return;}
function A1g(a){var b;b=new Uz;b.FZ=a;B0(b);return b;}
function ABy(){By.call(this);}
function Bbg(){var a=new ABy();AUz(a);return a;}
function AUz(a){return;}
function AZI(a){var b;b=new V4;b.I3=a;B0(b);return b;}
function AAK(){By.call(this);}
function A_7(){var a=new AAK();A9l(a);return a;}
function A9l(a){return;}
function AYO(a){var b;b=new VE;b.Fm=a;B0(b);b.ca=1;return b;}
function AHY(){By.call(this);}
function Bcp(){var a=new AHY();A6h(a);return a;}
function A6h(a){return;}
function A9o(a){var b;b=new ON;b.JP=a;B0(b);b.ca=1;return b;}
function La(){By.call(this);}
function BaI(){var a=new La();AVE(a);return a;}
function AVE(a){return;}
function ACO(a){return Dp(CG(CG(CG(Eq(),97,122),65,90),48,57),95);}
function AQG(){La.call(this);}
function Bbz(){var a=new AQG();A6q(a);return a;}
function A6q(a){return;}
function AYF(a){var b;b=Fz(ACO(a),1);b.ca=1;return b;}
function AMW(){NK.call(this);}
function A_O(){var a=new AMW();A1z(a);return a;}
function A1z(a){return;}
function A32(a){var b;b=Fz(AMo(a),1);b.ca=1;return b;}
function AAD(){Nb.call(this);}
function Bal(){var a=new AAD();A6Q(a);return a;}
function A6Q(a){return;}
function AWA(a){var b;b=Fz(ANO(a),1);b.ca=1;return b;}
function AKl(){var a=this;By.call(a);a.z9=0;a.DI=0;}
function T(a,b){var c=new AKl();A$Z(c,a,b);return c;}
function A$Z(a,b,c){a.z9=b;a.DI=c;}
function AXW(a){return CG(Eq(),a.z9,a.DI);}
function AKQ(){By.call(this);}
function BbB(){var a=new AKQ();A12(a);return a;}
function A12(a){return;}
function A1N(a){return CG(CG(Eq(),65279,65279),65520,65533);}
function AMA(){var a=this;By.call(a);a.yc=0;a.wr=0;a.CR=0;}
function CA(a,b){var c=new AMA();AUU(c,a,b);return c;}
function BaB(a,b,c){var d=new AMA();A1U(d,a,b,c);return d;}
function AUU(a,b,c){a.wr=c;a.yc=b;}
function A1U(a,b,c,d){a.CR=d;a.wr=c;a.yc=b;}
function A5G(a){var b;b=Bbi(a.yc);if(a.CR)Js(b.b$,0,2048);b.ca=a.wr;return b;}
function AMR(){var a=this;By.call(a);a.vE=0;a.tR=0;a.y$=0;}
function KV(a,b){var c=new AMR();AVy(c,a,b);return c;}
function Bb1(a,b,c){var d=new AMR();A2W(d,a,b,c);return d;}
function AVy(a,b,c){a.tR=c;a.vE=b;}
function A2W(a,b,c,d){a.y$=d;a.tR=c;a.vE=b;}
function ASQ(a){var b;b=new Vr;ADQ(b,a.vE);if(a.y$)Js(b.b$,0,2048);b.ca=a.tR;return b;}
function AKu(){D.call(this);}
function Bmm(){var a=new AKu();AS8(a);return a;}
function AS8(a){return;}
function Zu(){D.call(this);}
function Bmn(){var a=new Zu();A70(a);return a;}
function A70(a){return;}
function Nx(b){if(b>92)return ((b-32|0)-2|0)<<24>>24;if(b<=34)return (b-32|0)<<24>>24;return ((b-32|0)-1|0)<<24>>24;}
function A2J(b){var c,d,e,f,g,h,i,j,k,l,m,n,o;c=J(Tx,16384);d=c.data;e=$rt_createByteArray(16384);f=e.data;g=0;h=0;i=0;j=0;while(j<Bi(b)){k=Nx(Ba(b,j));if(k==64){j=j+1|0;k=Nx(Ba(b,j));l=0;m=1;n=0;while(n<3){j=j+1|0;l=l|Bj(m,Nx(Ba(b,j)));m=m*64|0;n=n+1|0;}}else if(k<32)l=1;else{k=(k-32|0)<<24>>24;j=j+1|0;l=Nx(Ba(b,j));}if(!k&&l>=128){if(g>0){m=h+1|0;d[h]=AV1(i,i+g|0,Oi(e,g));h=m;}i=i+(g+l|0)|0;g=0;}else{o=g+l|0;if(o<f.length)n=h;else{n=h+1|0;d[h]=AV1(i,i+g|0,Oi(e,g));i=i+o|0;g=0;}while(true){m=l+(-1)|0;if(l<=
0)break;o=g+1|0;f[g]=k;g=o;l=m;}h=n;}j=j+1|0;}return Ns(c,h);}
function Tx(){var a=this;D.call(a);a.xe=0;a.Ap=0;a.C4=null;}
function AV1(a,b,c){var d=new Tx();A0G(d,a,b,c);return d;}
function A0G(a,b,c,d){a.xe=b;a.Ap=c;a.C4=d;}
function RZ(){var a=this;D.call(a);a.CD=null;a.Ds=0;}
function AL$(){D.call(this);}
function Bmo(){var a=new AL$();A$H(a);return a;}
function A$H(a){return;}
function Yo(b){var c,d,e,f,g,h;c=0;d=1;while(true){e=b.CD.data;f=b.Ds;b.Ds=f+1|0;f=e[f];g=f<34?f-32|0:f>=92?(f-32|0)-2|0:(f-32|0)-1|0;h=(g%2|0)!=1?0:1;c=c+Bj(d,g/2|0)|0;d=d*46|0;if(!h)break;}h=c/2|0;if(c%2|0)h= -h;return h;}
function Wo(){Ew.call(this);this.sK=null;}
function A3C(a){ED(a.bZ,B(262),60,6,4210752);ED(a.bZ,B(325),8,(a.fm-96|0)+2|0,4210752);}
function AOk(a,b){var c,d,e,f,g,h,i,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.J.bo;d=B(832);$p=1;case 1:$z=AHv(c,d);if(C()){break _;}e=$z;BU(1.0,1.0,1.0,1.0);Eb(a.J.bo,e);f=(a.bm-a.fa|0)/2|0;g=(a.bC-a.fm|0)/2|0;CH(a,f,g,0,0,a.fa,a.fm);if(WP(a.sK)){h=ADL(a.sK,12);CH(a,f+56|0,((g+36|0)+12|0)-h|0,176,12-h|0,14,h+2|0);}i=AON(a.sK,24);CH(a,f+79|0,g+34|0,176,14,i+1|0,16);return;default:E$();}}C4().s(a,
b,c,d,e,f,g,h,i,$p);}
function Xn(){var a=this;Ew.call(a);a.mq=null;a.up=null;}
function Y$(a){var b,c,d,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AA1(a);if(C()){break _;}b=0;while(b<9){c=Gi(a.mq,b);if(c!==null){d=a.J.f;$p=2;continue _;}b=b+1|0;}return;case 2:ALT(d,c);if(C()){break _;}while(true){b=b+1|0;if(b>=9)break;c=Gi(a.mq,b);if(c===null)continue;else{d=a.J.f;continue _;}}return;default:E$();}}C4().s(a,b,c,d,$p);}
function A6z(a,b){var c,d,e,f,g,h;c=$rt_createIntArray(9);d=c.data;e=0;while(e<3){f=0;while(f<3){g=e+(f*3|0)|0;h=Gi(a.mq,g);if(h!==null)d[g]=h.bA;else d[g]=(-1);f=f+1|0;}e=e+1|0;}Pn(a.up,0,RO(Wt(),c));}
function A1X(a){ED(a.bZ,B(525),28,6,4210752);ED(a.bZ,B(325),8,(a.fm-96|0)+2|0,4210752);}
function AKo(a,b){var c,d,e,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.J.bo;d=B(833);$p=1;case 1:$z=AHv(c,d);if(C()){break _;}e=$z;BU(1.0,1.0,1.0,1.0);Eb(a.J.bo,e);CH(a,(a.bm-a.fa|0)/2|0,(a.bC-a.fm|0)/2|0,0,0,a.fa,a.fm);return;default:E$();}}C4().s(a,b,c,d,e,$p);}
function AMF(){var a=this;Ew.call(a);a.Fo=null;a.AJ=null;a.kw=0;}
function BbV(a,b){var c=new AMF();A2l(c,a,b);return c;}
function A2l(a,b,c){var d,e,f,g;Ie(a);a.kw=0;a.Fo=b;a.AJ=c;a.pS=0;a.kw=c.gm()/9|0;a.fm=114+(a.kw*18|0)|0;d=(a.kw-4|0)*18|0;e=0;while(e<a.kw){f=0;while(f<9){S(a.c7,D7(a,c,f+(e*9|0)|0,8+(f*18|0)|0,18+(e*18|0)|0));f=f+1|0;}e=e+1|0;}f=0;while(f<3){g=0;while(g<9){S(a.c7,D7(a,b,g+((f+1|0)*9|0)|0,8+(g*18|0)|0,(103+(f*18|0)|0)+d|0));g=g+1|0;}f=f+1|0;}e=0;f=161+d|0;while(e<9){S(a.c7,D7(a,b,e,8+(e*18|0)|0,f));e=e+1|0;}}
function A9W(a){ED(a.bZ,a.AJ.w9(),8,6,4210752);ED(a.bZ,B(325),8,(a.fm-96|0)+2|0,4210752);}
function ANS(a,b){var c,d,e,f,g,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.J.bo;d=B(834);$p=1;case 1:$z=AHv(c,d);if(C()){break _;}e=$z;BU(1.0,1.0,1.0,1.0);Eb(a.J.bo,e);f=(a.bm-a.fa|0)/2|0;g=(a.bC-a.fm|0)/2|0;CH(a,f,g,0,0,a.fa,(a.kw*18|0)+17|0);CH(a,f,(g+(a.kw*18|0)|0)+17|0,0,126,a.fa,96);return;default:E$();}}C4().s(a,b,c,d,e,f,g,$p);}
function CX(){var a=this;EV.call(a);a.Is=null;a.gd=0;a.m6=0;a.zL=0;a.zK=0;}
var Bmp=null;var Bmq=null;var Bmr=null;var Bms=null;var Bmt=null;var Bmu=null;var Bmv=null;var Bmw=null;var Bmx=null;var Bmy=null;var Bmz=null;var BmA=null;var BmB=null;var BmC=null;var BmD=null;var BmE=null;var BmF=null;var BmG=null;var BmH=null;var BiO=null;function Dm(a,b,c,d,e,f,g){var h=new CX();AEv(h,a,b,c,d,e,f,g);return h;}
function AEv(a,b,c,d,e,f,g,h){FT(a,b,c);a.Is=d;a.gd=e;a.m6=f;a.zL=g;a.zK=h;}
function AQa(){var b,c;Bmp=Dm(B(835),0,B(835),16,16,0,0);Bmq=Dm(B(836),1,B(836),16,16,16,0);Bmr=Dm(B(837),2,B(837),16,16,32,0);Bms=Dm(B(838),3,B(838),16,16,48,0);Bmt=Dm(B(839),4,B(839),16,16,64,0);Bmu=Dm(B(840),5,B(840),16,16,80,0);Bmv=Dm(B(841),6,B(841),16,16,96,0);Bmw=Dm(B(842),7,B(842),32,16,0,32);Bmx=Dm(B(843),8,B(843),32,16,32,32);Bmy=Dm(B(844),9,B(844),32,16,64,32);Bmz=Dm(B(845),10,B(845),32,16,96,32);BmA=Dm(B(846),11,B(846),16,32,0,64);BmB=Dm(B(847),12,B(847),32,32,0,128);BmC=Dm(B(848),13,B(848),32,32,
32,128);BmD=Dm(B(849),14,B(849),32,32,64,128);BmE=Dm(B(850),15,B(850),32,32,96,128);BmF=Dm(B(851),16,B(851),32,32,128,128);BmG=Dm(B(852),17,B(852),64,32,0,96);BmH=Dm(B(853),18,B(853),64,64,0,192);b=J(CX,19);c=b.data;c[0]=Bmp;c[1]=Bmq;c[2]=Bmr;c[3]=Bms;c[4]=Bmt;c[5]=Bmu;c[6]=Bmv;c[7]=Bmw;c[8]=Bmx;c[9]=Bmy;c[10]=Bmz;c[11]=BmA;c[12]=BmB;c[13]=BmC;c[14]=BmD;c[15]=BmE;c[16]=BmF;c[17]=BmG;c[18]=BmH;BiO=b;}
function PO(){Fb.call(this);this.Cv=null;}
function ACU(a){var b;b=new VL;VF(b,a.Cv);return b;}
function U$(){var a=this;CS.call(a);a.B5=null;a.BU=null;a.BW=null;a.yS=0;}
function AGn(a){S(a.bG,Sm(0,((a.bm/2|0)-155|0)+0|0,(a.bC/6|0)+96|0,B(854)));S(a.bG,Sm(1,((a.bm/2|0)-155|0)+160|0,(a.bC/6|0)+96|0,B(809)));}
function AQt(a,b){var c,d,e,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.B5;d=b.cl?0:1;e=a.yS;$p=1;case 1:AQ7(c,d,e);if(C()){break _;}return;default:E$();}}C4().s(a,b,c,d,e,$p);}
function YU(a,b,c,d){var $p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:ABi(a);if(C()){break _;}DG(a,a.bZ,a.BU,a.bm/2|0,70,16777215);DG(a,a.bZ,a.BW,a.bm/2|0,90,16777215);$p=2;case 2:AFF(a,b,c,d);if(C()){break _;}return;default:E$();}}C4().s(a,b,c,d,$p);}
function IN(){Fg.call(this);}
function BmI(){var a=new IN();AT6(a);return a;}
function AT6(a){P(a);}
function US(){var a=this;D.call(a);a.kP=0;a.q1=0;a.xP=null;a.xV=null;a.H0=0;}
function ALr(a,b){var c,d;c=0;while(c<=(3-a.kP|0)){d=0;while(d<=(3-a.q1|0)){if(Vs(a,b,c,d,1))return 1;if(Vs(a,b,c,d,0))return 1;d=d+1|0;}c=c+1|0;}return 0;}
function Vs(a,b,c,d,e){var f,g,h,i,j;f=0;while(f<3){g=0;while(g<3){h=f-c|0;i=g-d|0;j=(-1);if(h>=0&&i>=0&&h<a.kP&&i<a.q1)j=!e?a.xP.data[h+Bj(i,a.kP)|0]:a.xP.data[((a.kP-h|0)-1|0)+Bj(i,a.kP)|0];if(b.data[f+(g*3|0)|0]!=j)return 0;g=g+1|0;}f=f+1|0;}return 1;}
function AHm(a,b){return KB(a.xV.bA,a.xV.p);}
function Kq(a){return Bj(a.kP,a.q1);}
function Su(){var a=this;Bl.call(a);a.Cq=null;a.Jo=null;}
function AVN(a,b){var c;c=b-55296|0;return c>=0&&c<2048?a.dP^EI(a.Cq,c):0;}
function St(){var a=this;Bl.call(a);a.Ew=null;a.Bl=null;a.GK=null;}
function A3k(a,b){var c,d;c=b-55296|0;d=c>=0&&c<2048?a.dP^EI(a.Ew,c):0;return a.Bl.X(b)&&!d?1:0;}
function Pw(){var a=this;Bl.call(a);a.sh=null;a.Hr=null;}
function AXT(a,b){return a.cj^EI(a.sh,b);}
function A5Z(a){var b,c;b=new U;W(b);c=I4(a.sh,0);while(c>=0){Hk(b,Iz(c));DQ(b,124);c=I4(a.sh,c+1|0);}if(b.bY>0)So(b,b.bY-1|0);return V(b);}
function T2(){var a=this;Bl.call(a);a.DC=null;a.IA=null;}
function A9j(a,b){return a.DC.X(b);}
function T0(){var a=this;Bl.call(a);a.wu=0;a.CL=null;a.xg=null;}
function A0s(a,b){return !(a.wu^EI(a.xg.b6,b))&&!(a.wu^a.xg.iw^a.CL.X(b))?0:1;}
function T1(){var a=this;Bl.call(a);a.tQ=0;a.Bb=null;a.vi=null;}
function A7i(a,b){return !(a.tQ^EI(a.vi.b6,b))&&!(a.tQ^a.vi.iw^a.Bb.X(b))?1:0;}
function T5(){var a=this;Bl.call(a);a.EY=0;a.Bf=null;a.A$=null;a.HH=null;}
function A49(a,b){return a.EY^(!a.Bf.X(b)&&!a.A$.X(b)?0:1);}
function T6(){var a=this;Bl.call(a);a.Ai=0;a.Dx=null;a.De=null;a.JM=null;}
function ASK(a,b){return a.Ai^(!a.Dx.X(b)&&!a.De.X(b)?0:1)?0:1;}
function T3(){var a=this;Bl.call(a);a.zW=null;a.JO=null;}
function AWu(a,b){return D6(a.zW,b);}
function T4(){var a=this;Bl.call(a);a.EI=null;a.HR=null;}
function AYb(a,b){return D6(a.EI,b)?0:1;}
function T8(){var a=this;Bl.call(a);a.Al=null;a.Dz=0;a.AX=null;}
function A1n(a,b){return !D6(a.Al,b)&&!(a.Dz^EI(a.AX.b6,b))?0:1;}
function T9(){var a=this;Bl.call(a);a.AD=null;a.D2=0;a.Aw=null;}
function A4O(a,b){return !D6(a.AD,b)&&!(a.D2^EI(a.Aw.b6,b))?1:0;}
function Pv(){var a=this;Bl.call(a);a.AT=0;a.ED=null;a.Bs=null;a.Fr=null;}
function A_M(a,b){return !(a.AT^a.ED.X(b))&&!D6(a.Bs,b)?0:1;}
function PJ(){var a=this;Bl.call(a);a.ER=0;a.y5=null;a.y_=null;a.FG=null;}
function AWz(a,b){return !(a.ER^a.y5.X(b))&&!D6(a.y_,b)?1:0;}
function Pt(){var a=this;Bl.call(a);a.CZ=null;a.FJ=null;}
function AU4(a,b){return D6(a.CZ,b);}
function Pu(){var a=this;Bl.call(a);a.zP=null;a.JJ=null;}
function A5M(a,b){return D6(a.zP,b)?0:1;}
function Pz(){var a=this;Bl.call(a);a.EX=null;a.AC=0;a.Fe=null;}
function AXf(a,b){return D6(a.EX,b)&&a.AC^EI(a.Fe.b6,b)?1:0;}
function Ps(){var a=this;Bl.call(a);a.Ee=null;a.DG=0;a.AA=null;}
function A$f(a,b){return D6(a.Ee,b)&&a.DG^EI(a.AA.b6,b)?0:1;}
function Px(){var a=this;Bl.call(a);a.Ek=0;a.Co=null;a.Ah=null;a.HG=null;}
function A4a(a,b){return a.Ek^a.Co.X(b)&&D6(a.Ah,b)?1:0;}
function Py(){var a=this;Bl.call(a);a.Ea=0;a.B3=null;a.Ej=null;a.HX=null;}
function AZE(a,b){return a.Ea^a.B3.X(b)&&D6(a.Ej,b)?0:1;}
function OU(){IC.call(this);}
function AV5(a,b,c,d){var e,f,g;e=0;f=d.by;a:{while(true){if(b>f){b=e;break a;}g=Hn(d,a.cK);EK(d,a.cK,b);e=a.fo.k(b,c,d);if(e>=0)break;EK(d,a.cK,g);b=b+1|0;}}return b;}
function A_B(a,b,c,d,e){var f,g;f=0;a:{while(true){if(c<b){c=f;break a;}g=Hn(e,a.cK);EK(e,a.cK,c);f=a.fo.k(c,d,e);if(f>=0)break;EK(e,a.cK,g);c=c+(-1)|0;}}return c;}
function AUS(a){return null;}
function VL(){IP.call(this);}
function Ll(a){Wf(a);return a.hj.gb;}
function Ne(){Fa.call(this);}
var BmJ=0.0;var BmK=null;function AJV(){BmJ=NaN;BmK=F($rt_doublecls());}
function Mq(){}
function VD(){var a=this;D.call(a);a.FB=null;a.EE=null;a.pJ=null;a.dC=null;a.qU=0;a.sj=0;}
function OJ(a,b){var c,d;c=Bi(a.pJ);if(b>=0&&b<=c){Z9(a.dC);a.dC.nt=1;APZ(a.dC,b);b=a.EE.eJ(b,a.pJ,a.dC);if(b==(-1))a.dC.hp=1;if(b>=0&&a.dC.oc){AC6(a.dC);return 1;}a.dC.hw=(-1);return 0;}d=new BS;Bo(d,VY(b));M(d);}
function ABb(a){var b,c;b=Bi(a.pJ);if(!YK(a))b=a.sj;if(a.dC.hw>=0&&a.dC.nt==1){a.dC.hw=MK(a.dC);if(MK(a.dC)==AEM(a.dC)){c=a.dC;c.hw=c.hw+1|0;}return a.dC.hw<=b&&OJ(a,a.dC.hw)?1:0;}return OJ(a,a.qU);}
function AHP(a,b){return PI(a.dC,b);}
function Yn(a,b){return QP(a.dC,b);}
function AHa(a){return AHP(a,0);}
function AKY(a){return Yn(a,0);}
function YK(a){return a.dC.of;}
function Uq(){}
function Si(){}
function S7(){Fb.call(this);this.n_=null;}
var BmL=null;function BbU(){var a=new S7();AAl(a);return a;}
function AAl(a){a.n_=Bct();}
function JA(a){return AIr(a.n_);}
function Zk(a,b){return ASA(a.n_,b,b)===BmL?0:1;}
function MG(a,b){return AGp(a.n_,b)!==BmL?0:1;}
function M3(a){return ADA(a.n_);}
function AAU(){BmL=new D;}
function ST(){}
function OW(){}
function AJZ(){var a=this;FY.call(a);a.kr=null;a.tA=null;a.GV=null;a.tG=0;}
function Bct(){var a=new AJZ();ATW(a);return a;}
function ATW(a){var b;b=null;a.GV=b;if(b===null){b=new QX;b.Jb=a;}a.tA=b;}
function ASA(a,b,c){var d,e;a.kr=On(a,a.kr,b);d=Wq(a,b);e=Tb(d,c);Tb(d,c);a.tG=a.tG+1|0;return e;}
function AGp(a,b){var c;c=Wq(a,b);if(c===null)return null;a.kr=Lv(a,a.kr,b);a.tG=a.tG+1|0;return c.nW;}
function Wq(a,b){var c,d;c=a.kr;while(true){if(c===null)return null;d=Op(a.tA,b,c.nj);if(!d)break;c=d>=0?c.dk:c.db;}return c;}
function On(a,b,c){var d,e;if(b===null){b=new Lb;d=null;b.nj=c;b.nW=d;b.lE=1;b.jo=1;return b;}e=Op(a.tA,c,b.nj);if(!e)return b;if(e>=0)b.dk=On(a,b.dk,c);else b.db=On(a,b.db,c);FP(b);return M4(b);}
function Lv(a,b,c){var d,e,f,g,h,i,j;if(b===null)return null;d=Op(a.tA,c,b.nj);if(d<0)b.db=Lv(a,b.db,c);else if(d>0)b.dk=Lv(a,b.dk,c);else{if(b.dk===null)return b.db;e=b.db;b=b.dk;f=J(Lb,b.lE);g=0;while(b.db!==null){h=f.data;i=g+1|0;h[g]=b;b=b.db;g=i;}c=b.dk;while(g>0){h=f.data;g=g+(-1)|0;j=h[g];j.db=c;FP(j);c=M4(j);}b.dk=c;b.db=e;FP(b);}FP(b);return M4(b);}
function ADA(a){var b,c,d;b=a.kr;c=null;while(b!==null){d=AOm(b,0);c=b;b=d;}if(c!==null)return c.nj;b=new J3;P(b);M(b);}
function AIr(a){return a.kr===null?0:a.kr.jo;}
function QX(){D.call(this);this.Jb=null;}
function Op(a,b,c){return b===null?TO(c,b):TO(b,c);}
function VN(){Bl.call(this);this.Iu=null;}
function A1u(a,b){return Do(b)!=2?0:1;}
function Tj(){Bl.call(this);this.ID=null;}
function A30(a,b){return Do(b)!=1?0:1;}
function QO(){Bl.call(this);this.H7=null;}
function ATz(a,b){return Qj(b);}
function QN(){Bl.call(this);this.FL=null;}
function A5F(a,b){return 0;}
function SC(){Bl.call(this);this.GW=null;}
function AW6(a,b){return !Do(b)?0:1;}
function Ug(){Bl.call(this);this.IT=null;}
function A$J(a,b){return Do(b)!=9?0:1;}
function Pj(){Bl.call(this);this.Hc=null;}
function AZd(a,b){return Ix(b);}
function U9(){Bl.call(this);this.Ge=null;}
function A0g(a,b){a:{b:{if(!(b>=0&&b<=31)){if(b<127)break b;if(b>159)break b;}b=1;break a;}b=0;}return b;}
function Tg(){Bl.call(this);this.Fi=null;}
function A_q(a,b){a:{b:{switch(Do(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:case 26:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=Ix(b);}return b;}
function Ti(){Bl.call(this);this.GC=null;}
function AVj(a,b){a:{b:{switch(Do(b)){case 1:case 2:case 3:case 4:case 5:case 10:case 23:case 26:break;case 6:case 7:case 8:case 9:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=Ix(b);}return b;}
function Pa(){Bl.call(this);this.GU=null;}
function A1H(a,b){a:{switch(Do(b)){case 1:case 2:case 3:case 4:case 5:break;default:b=0;break a;}b=1;}return b;}
function Uw(){Bl.call(this);this.Jx=null;}
function A7v(a,b){return Lc(b);}
function Uz(){Bl.call(this);this.FZ=null;}
function A8Y(a,b){return UA(b);}
function V4(){Bl.call(this);this.I3=null;}
function A$y(a,b){return Do(b)!=3?0:1;}
function VE(){Bl.call(this);this.Fm=null;}
function A13(a,b){a:{b:{switch(Do(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:break b;default:break b;}b=1;break a;}b=Ix(b);}return b;}
function ON(){Bl.call(this);this.JP=null;}
function AVa(a,b){a:{b:{switch(Do(b)){case 1:case 2:case 3:case 4:case 5:case 10:break;case 6:case 7:case 8:case 9:break b;default:break b;}b=1;break a;}b=Ix(b);}return b;}
function MB(){Bl.call(this);this.u8=0;}
function Bbi(a){var b=new MB();ADQ(b,a);return b;}
function ADQ(a,b){B0(a);a.u8=b;}
function AZe(a,b){return a.cj^(a.u8!=Do(b&65535)?0:1);}
function Vr(){MB.call(this);}
function A9X(a,b){return a.cj^(!(a.u8>>Do(b&65535)&1)?0:1);}
function Nl(){D.call(this);}
var BmM=null;var BmN=null;function BmO(){var a=new Nl();ASo(a);return a;}
function ASo(a){return;}
function DA(b,c){BP(BmM,c,b);BP(BmN,b,c);}
function Jo(b,c){var d,e,f,g,h,$$je;d=null;a:{try{e=d;f=CP(BmM,b);if(f!==null){e=d;g=J(FS,1);g.data[0]=F(F0);b=WF(f,g);g=J(D,1);g.data[0]=c;d=WI(b,g);e=d;}break a;}catch($$e){$$je=Y($$e);if($$je instanceof BD){h=$$je;}else{throw $$e;}}B9(h);d=e;}return d;}
function AIl(){BmM=Df();BmN=Df();DA(F(Jv),B(855));DA(F(E9),B(856));DA(F(II),B(857));DA(F(EO),B(858));DA(F(DP),B(859));DA(F(J0),B(860));DA(F(Jp),B(861));DA(F(Ko),B(862));DA(F(K$),B(863));DA(F(I$),B(864));DA(F(IE),B(582));DA(F(KI),B(865));DA(F(Mr),B(866));DA(F(JO),B(867));DA(F(Gh),B(868));}
function JZ(){var a=this;D.call(a);a.fF=0;a.fp=0;a.fK=0;a.qa=0;a.jk=Long_ZERO;a.oT=Long_ZERO;}
var Bks=Long_ZERO;function A$s(a,b){var c;if(!(b instanceof JZ))return 0;c=b;return a.fF==c.fF&&a.fp==c.fp&&a.fK==c.fK&&a.qa==c.qa?1:0;}
function A7G(a){return (((((a.fF*128|0)*1024|0)+(a.fK*128|0)|0)+a.fp|0)*256|0)+a.qa|0;}
function A0n(a,b){a.jk=b;return a;}
function AND(a,b){return Long_lt(a.jk,b.jk)?(-1):Long_gt(a.jk,b.jk)?1:Long_lt(a.oT,b.oT)?(-1):Long_le(a.oT,b.oT)?0:1;}
function TO(a,b){return AND(a,b);}
function AF_(){Bks=Long_ZERO;}
function Qi(){}
function Oy(){D.call(this);this.r5=null;}
var BmP=null;function Oe(b,c){var d,e,f,g,h,i;d=b+30233088|0;e=c+30233088|0;f=BmP.data.length;g=$rt_createCharArray(10);h=g.data;i=0;while(i<5){b=i*2|0;h[b]=BmP.data[d%f|0];d=d/f|0;h[b+1|0]=BmP.data[e%f|0];e=e/f|0;i=i+1|0;}return Tf(g);}
function AGY(a,b,c,d){var e,f,g,h,i,j,k,l,m,$$je,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=Oe(c,d);f=new U;W(f);g=V(I(I(I(f,a.r5),B(23)),e));$p=1;case 1:$z=ALG(g);if(C()){break _;}h=$z;if(h===null)return null;a:{try{i=O2(Ur(h));}catch($$e){$$je=Y($$e);if($$je instanceof BT){j=$$je;break a;}else{throw $$e;}}b:{c:{try{try{k=MW(i);l=FW(k,B(869));m=FW(k,B(870));if
(c!=l)break c;if(d!=m)break c;b=AIb(b,k);}catch($$e){$$je=Y($$e);if($$je instanceof CT){b=$$je;break b;}else{throw $$e;}}JC(i);}catch($$e){$$je=Y($$e);if($$je instanceof BT){j=$$je;break a;}else{throw $$e;}}return b;}try{f=Oe(l,m);Cg(C_(),BL(I(Bf(I(Bf(I(I(I(I(I(Bf(I(Bf(I(Bf(I(Bf(I(I(I(BX(),B(871)),e),B(872)),c),B(632)),d),B(873)),l),B(632)),m),B(874)),f),B(875)),e),B(876)),c),B(632)),d),B(245))));b=BL(I(I(I(BX(),a.r5),B(23)),f));$p=3;continue _;}catch($$e){$$je=Y($$e);if($$je instanceof CT){b=$$je;}else if($$je instanceof BT)
{j=$$je;break a;}else{throw $$e;}}}try{d:{try{JC(i);break d;}catch($$e){$$je=Y($$e);if($$je instanceof CT){f=$$je;}else{throw $$e;}}Hq(b,f);}M(b);}catch($$e){$$je=Y($$e);if($$je instanceof BT){j=$$je;}else{throw $$e;}}}b=C_();f=new U;W(f);Cg(b,V(I(Bf(I(Bf(I(I(I(f,B(877)),e),B(878)),c),B(632)),d),B(245))));Cg(C_(),B(879));$p=2;case 2:AL4(g);if(C()){break _;}B9(j);return null;case 3:e:{a:{try{try{ANn(g,b);if(C()){break _;}b=null;}catch($$e){$$je=Y($$e);if($$je instanceof CT){b=$$je;break a;}else{throw $$e;}}JC(i);}
catch($$e){$$je=Y($$e);if($$je instanceof BT){j=$$je;break e;}else{throw $$e;}}return b;}try{b:{try{JC(i);break b;}catch($$e){$$je=Y($$e);if($$je instanceof CT){f=$$je;}else{throw $$e;}}Hq(b,f);}M(b);}catch($$e){$$je=Y($$e);if($$je instanceof BT){j=$$je;}else{throw $$e;}}}b=C_();f=new U;W(f);Cg(b,V(I(Bf(I(Bf(I(I(I(f,B(877)),e),B(878)),c),B(632)),d),B(245))));Cg(C_(),B(879));$p=2;continue _;default:E$();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function YW(a,b,c){var d,e,f,g,h,$$je,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=G$();AF2(a,c,b,d);try{e=A$a(131072);try{f=AWj(e);try{R2(d,f);b=BL(I(I(I(BX(),a.r5),B(23)),Oe(c.fX,c.fU)));g=Ig(e);$p=1;continue _;}catch($$e){$$je=Y($$e);if($$je instanceof CT){b=$$je;}else{throw $$e;}}a:{try{Od(f);break a;}catch($$e){$$je=Y($$e);if($$je instanceof CT){d=$$je;}else{throw $$e;}}Hq(b,d);}M(b);}catch($$e){$$je
=Y($$e);if($$je instanceof CT){b=$$je;}else{throw $$e;}}b:{try{NY(e);break b;}catch($$e){$$je=Y($$e);if($$je instanceof CT){d=$$je;}else{throw $$e;}}Hq(b,d);}M(b);}catch($$e){$$je=Y($$e);if($$je instanceof BT){h=$$je;}else{throw $$e;}}b=C_();d=new U;W(d);Cg(b,V(I(Bf(I(Bf(I(d,B(880)),c.fX),B(632)),c.fU),B(881))));B9(h);return;case 1:c:{d:{a:{try{try{try{ACC(b,g);if(C()){break _;}}catch($$e){$$je=Y($$e);if($$je instanceof CT){b=$$je;break a;}else{throw $$e;}}Od(f);}catch($$e){$$je=Y($$e);if($$je instanceof CT)
{b=$$je;break d;}else{throw $$e;}}NY(e);}catch($$e){$$je=Y($$e);if($$je instanceof BT){h=$$je;break c;}else{throw $$e;}}return;}try{e:{try{Od(f);break e;}catch($$e){$$je=Y($$e);if($$je instanceof CT){d=$$je;}else{throw $$e;}}Hq(b,d);}M(b);}catch($$e){$$je=Y($$e);if($$je instanceof CT){b=$$je;}else if($$je instanceof BT){h=$$je;break c;}else{throw $$e;}}}try{f:{try{NY(e);break f;}catch($$e){$$je=Y($$e);if($$je instanceof CT){d=$$je;}else{throw $$e;}}Hq(b,d);}M(b);}catch($$e){$$je=Y($$e);if($$je instanceof BT)
{h=$$je;}else{throw $$e;}}}b=C_();d=new U;W(d);Cg(b,V(I(Bf(I(Bf(I(d,B(880)),c.fX),B(632)),c.fU),B(881))));B9(h);return;default:E$();}}C4().s(a,b,c,d,e,f,g,h,$p);}
function AF2(a,b,c,d){Gz(d,B(869),b.fX);Gz(d,B(870),b.fU);Id(d,B(882),c.dU);IS(d,B(883),b.g3);IS(d,B(356),b.gh.gA);IS(d,B(884),b.hD.gA);IS(d,B(885),b.jz.gA);IS(d,B(886),b.fu);S4(d,B(887),b.he);b.sa=0;AG7(new QW);}
function AIb(b,c){var d;d=BaF(b,FW(c,B(869)),FW(c,B(870)));d.g3=IK(c,B(883));d.gh=AIK(IK(c,B(356)));d.hD=AIK(IK(c,B(884)));d.jz=AIK(IK(c,B(885)));d.fu=IK(c,B(886));d.he=Ux(c,B(887));if(!Mj(d.gh))d.gh=Lu(d.g3.data.length);if(!(d.fu!==null&&Mj(d.hD))){d.fu=$rt_createByteArray(256);d.hD=Lu(d.g3.data.length);Sj(d);}if(!Mj(d.jz))d.jz=Lu(d.g3.data.length);return d;}
function A4R(a){return;}
function MC(a,b,c){return;}
function AOJ(){var b,c;b=$rt_createCharArray(36);c=b.data;c[0]=48;c[1]=49;c[2]=50;c[3]=51;c[4]=52;c[5]=53;c[6]=54;c[7]=55;c[8]=56;c[9]=57;c[10]=65;c[11]=66;c[12]=67;c[13]=68;c[14]=69;c[15]=70;c[16]=71;c[17]=72;c[18]=73;c[19]=74;c[20]=75;c[21]=76;c[22]=77;c[23]=78;c[24]=79;c[25]=80;c[26]=81;c[27]=82;c[28]=83;c[29]=84;c[30]=85;c[31]=86;c[32]=87;c[33]=88;c[34]=89;c[35]=90;BmP=b;}
function Sy(){var a=this;D.call(a);a.a=null;a.yY=null;a.yZ=null;a.yX=null;a.tO=null;a.y1=null;a.y2=null;a.y0=null;a.iU=null;a.t=null;a.h1=null;a.vV=null;a.vT=null;a.vU=null;a.vW=null;a.vX=null;a.Gf=null;}
function Zx(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb;a.h1=Zm(a,a.h1,b*4|0,0,c*4|0,5,17,5);e=0;while(e<4){f=0;while(f<4){g=0;while(g<16){h=a.h1.data;c=((e+0|0)*5|0)+f|0;i=((c+0|0)*17|0)+g|0;j=h[i+0|0];h=a.h1.data;b=((c+1|0)*17|0)+g|0;k=h[b+0|0];h=a.h1.data;l=((e+1|0)*5|0)+f|0;m=((l+0|0)*17|0)+g|0;n=h[m+0|0];h=a.h1.data;c=((l+1|0)*17|0)+g|0;o=h[c+0|0];p=(a.h1.data[i+1|0]-j)*0.125;q=(a.h1.data[b+1|0]-k)*0.125;r=(a.h1.data[m+1|0]-n)*0.125;s=(a.h1.data[c+1|0]-o)*0.125;t=0;while(t<8){u=(n-j)
*0.25;v=(o-k)*0.25;w=0;x=j;y=k;while(w<4){b=(w+(e*4|0)|0)<<11|(0+(f*4|0)|0)<<7;c=(g*8|0)+t|0;m=b|c;z=(y-x)*0.25;ba=0;c=R(c,64);bb=x;while(ba<4){i=0;if(c<0){L();i=Bgx.b;}if(bb>0.0){L();i=BeO.b;}d.data[m]=i<<24>>24;m=m+128|0;bb=bb+z;ba=ba+1|0;}x=x+u;y=y+v;w=w+1|0;}j=j+p;k=k+q;n=n+r;o=o+s;t=t+1|0;}g=g+1|0;}f=f+1|0;}e=e+1|0;}}
function ACx(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u;e=0;f=b*16|0;c=c*16|0;while(e<16){g=0;while(g<16){h=f+e|0;i=c+g|0;j=a.tO;k=h*0.03125;l=i*0.03125;m=U_(j,k,l,0.0)+Cl(a.a)*0.2<=0.0?0:1;n=U_(a.tO,l,109.0134,k)+Cl(a.a)*0.2<=3.0?0:1;o=EY(a.y1,k*2.0,l*2.0)/3.0+3.0+Cl(a.a)*0.25|0;p=(-1);L();q=BeK.b;r=BeL.b;s=(((e*16|0)+g|0)*128|0)+128|0;t=127;while(t>=0){s=s+(-1)|0;if(t<=((0+E(a.a,6)|0)-1|0))d.data[s]=BeJ.b<<24>>24;else{u=d.data;if(!u[s])p=(-1);else if(u[s]==BeO.b){if(p==(-1)){if(o<=0){q=0;r=BeO.b<<24>>
24;}else if(t>=60&&t<=65){q=BeK.b;r=BeL.b;if(n)q=0;if(n)r=Be6.b;if(m)q=Be5.b;if(m)r=Be5.b;}if(t<64&&!q)q=Bgx.b;if(t<63){u[s]=r<<24>>24;p=o;}else{u[s]=q<<24>>24;p=o;}}else if(p>0){p=p+(-1)|0;u[s]=r<<24>>24;}}}t=t+(-1)|0;}g=g+1|0;}e=e+1|0;}}
function Ud(a,b,c){var d,e;d=$rt_createByteArray(32768);e=A9n(a.t,d,b,c);Zx(a,b,c,d);ACx(a,b,c,d);ARW(a,b,c,d);Sj(e);return e;}
function APV(a,b,c,d,e,f,g){Jj(a,b,c,d,e,f,g,1.0+N(a.a)*6.0,0.0,0.0,(-1),(-1),0.5);}
function Jj(a,b,c,d,e,f,g,h,i,j,k,l,m){var n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br,bs,bt,bu,bv,bw,bx,by,bz,bA,bB,bC,bD;n=b*16|0;o=n+8|0;p=c*16|0;q=p+8|0;r=0.0;s=0.0;t=Bbu(GA(a.a));if(l<=0)l=112-E(t,28)|0;u=0;if(k==(-1)){k=l/2|0;u=1;}v=E(t,l/2|0)+(l/4|0)|0;w=E(t,6)?0:1;x=R(h,1.0);y=h+2.0+16.0;y=y*y;z=o-16.0;ba=q-16.0;bb=o+16.0;bc=q+16.0;a:{while(true){if(k>=l)break a;bd=1.5+Bq(k*3.1415927410125732/l)*h*1.0;be=bd*m;bf=BC(j);bg=Bq(j);e=e+BC(i)*bf;f=f+bg;g=g+Bq(i)*bf;j=(!w
?j*0.699999988079071:j*0.9200000166893005)+s*0.10000000149011612;i=i+r*0.10000000149011612;bh=s*0.8999999761581421;bf=r*0.75;s=bh+(N(t)-N(t))*N(t)*2.0;r=bf+(N(t)-N(t))*N(t)*4.0;if(!u&&k==v&&x>0){h=N(t)*0.5+0.5;bh=i-1.5707963705062866;j=j/3.0;Jj(a,b,c,d,e,f,g,h,bh,j,k,l,1.0);Jj(a,b,c,d,e,f,g,N(t)*0.5+0.5,i+1.5707963705062866,j,k,l,1.0);return;}if(!(!u&&!E(t,4))){bi=e-o;bj=g-q;bk=l-k|0;if(bi*bi+bj*bj-bk*bk>y)break;bl=bd*2.0;if(e>=z-bl&&g>=ba-bl&&e<=bb+bl&&g<=bc+bl){bm=(K(e-bd)-n|0)-1|0;bn=(K(e+bd)-n|0)+1|0;bo
=K(f-be)-1|0;bp=K(f+be)+1|0;bq=(K(g-bd)-p|0)-1|0;br=(K(g+bd)-p|0)+1|0;if(bm<0)bm=0;if(bn>16)bn=16;if(bo<1)bo=1;if(bp>120)bp=120;if(bq<0)bq=0;if(br>16)br=16;bs=0;bt=bm;while(!bs&&bt<bn){bu=bq;while(!bs&&bu<br){bv=bp+1|0;while(!bs){bw=R(bv,bo-1|0);if(bw<0)break;bx=(((bt*16|0)+bu|0)*128|0)+bv|0;if(bv>=0&&bv<128){by=d.data;bz=by[bx];L();if(!(bz!=BfR.b&&by[bx]!=Bgx.b))bs=1;if(bw&&bt!=bm&&bt!=(bn-1|0)&&bu!=bq&&bu!=(br-1|0))bv=bo;}bv=bv+(-1)|0;}bu=bu+1|0;}bt=bt+1|0;}if(!bs){while(bm<bn){bA=((bm+n|0)+0.5-e)/bd;bi=bA
*bA;bx=bq;while(bx<br){bB=((bx+p|0)+0.5-g)/bd;bC=(((bm*16|0)+bx|0)*128|0)+bp|0;bw=0;bD=bp-1|0;bB=bB*bB;while(bD>=bo){bl=(bD+0.5-f)/be;if(bl>(-0.7)&&bi+bl*bl+bB<1.0){by=d.data;bz=by[bC];L();if(bz==BeK.b)bw=1;if(!(bz!=BeO.b&&bz!=BeL.b&&bz!=BeK.b)){if(bD<10)by[bC]=BfS.b<<24>>24;else{by[bC]=0;if(bw){bz=bC-1|0;if(by[bz]==BeL.b)by[bz]=BeK.b<<24>>24;}}}}bC=bC+(-1)|0;bD=bD+(-1)|0;}bx=bx+1|0;}bm=bm+1|0;}if(u)break a;}}}k=k+1|0;}return;}}
function ARW(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r;GA(a.a);GA(a.a);e=b-8|0;f=b+8|0;g=c-8|0;h=c+8|0;while(e<=f){i=g;while(i<=h){j=E(a.a,E(a.a,E(a.a,40)+1|0)+1|0);if(E(a.a,15))j=0;k=0;while(k<j){l=(e*16|0)+E(a.a,16)|0;m=E(a.a,E(a.a,120)+8|0);n=(i*16|0)+E(a.a,16)|0;o=1;if(!E(a.a,4)){APV(a,b,c,d,l,m,n);o=o+E(a.a,4)|0;}p=0;while(p<o){q=N(a.a)*3.1415927410125732*2.0;r=(N(a.a)-0.5)*2.0/8.0;Jj(a,b,c,d,l,m,n,N(a.a)*2.0+N(a.a),q,r,0,0,1.0);p=p+1|0;}k=k+1|0;}i=i+1|0;}e=e+1|0;}}
function Zm(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x;if(b===null)b=$rt_createDoubleArray(Bj(Bj(f,g),h));a.vW=H6(a.y2,a.vW,c,d,e,f,1,h,1.0,0.0,1.0);a.vX=H6(a.y0,a.vX,c,d,e,f,1,h,100.0,0.0,100.0);a.vV=H6(a.yX,a.vV,c,d,e,f,g,h,8.555150000000001,4.277575000000001,8.555150000000001);a.vT=H6(a.yY,a.vT,c,d,e,f,g,h,684.412,684.412,684.412);a.vU=H6(a.yZ,a.vU,c,d,e,f,g,h,684.412,684.412,684.412);i=0;j=0;k=0;l=g;d=g-4|0;m=l/2.0;while(k<f){n=0;while(n<h){o=(a.vW.data[j]+256.0)/512.0;if(o>1.0)o=1.0;p=a.vX.data[j]
/8000.0;if(p<0.0)p= -p;q=p*3.0-3.0;if(q>=0.0){if(q>1.0)q=1.0;q=q/6.0;}else{o=q/2.0;if(o<(-1.0))o=(-1.0);q=o/1.4/2.0;o=0.0;}r=o+0.5;s=m+q*l/16.0*4.0;j=j+1|0;t=0;while(t<g){p=t;u=(p-s)*12.0/r;if(u<0.0)u=u*4.0;v=a.vT.data[i]/512.0;q=a.vU.data[i]/512.0;w=(a.vV.data[i]/10.0+1.0)/2.0;if(w>=0.0)v=w>1.0?q:v+(q-v)*w;o=v-u;if(t>d){x=(t-d|0)/3.0;o=o*(1.0-x)+(-10.0)*x;}if(p<0.0){x=(0.0-p)/4.0;if(x<0.0)x=0.0;if(x>1.0)x=1.0;o=o*(1.0-x)+(-10.0)*x;}b.data[i]=o;i=i+1|0;t=t+1|0;}n=n+1|0;}k=k+1|0;}return b;}
function AHW(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=c*16|0;f=d*16|0;NL(a.a,a.t.lw);g=Long_add(Long_mul(Long_div(GA(a.a),Long_fromInt(2)),Long_fromInt(2)),Long_fromInt(1));h=Long_add(Long_mul(Long_div(GA(a.a),Long_fromInt(2)),Long_fromInt(2)),Long_fromInt(1));NL(a.a,Long_xor(Long_add(Long_mul(Long_fromInt(c),
g),Long_mul(Long_fromInt(d),h)),a.t.lw));i=0;if(i<4){j=(e+E(a.a,16)|0)+8|0;k=E(a.a,128);l=(f+E(a.a,16)|0)+8|0;b=AYn();m=a.t;n=a.a;$p=1;continue _;}o=0;if(o<20){j=e+E(a.a,16)|0;k=E(a.a,128);l=f+E(a.a,16)|0;b=new Ch;L();Cm(b,BeL.b,32);m=a.t;n=a.a;$p=2;continue _;}j=0;if(j<10){o=e+E(a.a,16)|0;k=E(a.a,128);l=f+E(a.a,16)|0;b=new Ch;L();Cm(b,Be6.b,32);m=a.t;n=a.a;$p=3;continue _;}c=0;if(c<20){j=e+E(a.a,16)|0;k=E(a.a,128);l=f+E(a.a,16)|0;b=new Ch;L();Cm(b,Be9.b,16);m=a.t;n=a.a;$p=4;continue _;}c=0;if(c<20){j=e+E(a.a,
16)|0;k=E(a.a,64);l=f+E(a.a,16)|0;b=new Ch;L();Cm(b,Be$.b,8);m=a.t;n=a.a;$p=5;continue _;}if(!E(a.a,1)){c=e+E(a.a,16)|0;j=E(a.a,32);k=f+E(a.a,16)|0;b=new Ch;L();Cm(b,Be_.b,8);m=a.t;n=a.a;$p=6;continue _;}if(!E(a.a,4)){c=e+E(a.a,16)|0;j=E(a.a,16);k=f+E(a.a,16)|0;b=new Ch;L();Cm(b,BgS.b,8);m=a.t;n=a.a;$p=7;continue _;}c=(EY(a.iU,e*0.5,f*0.5)/8.0+Cl(a.a)*4.0+4.0)/3.0|0;if(c<0)c=0;m=GX();if(!E(a.a,10))c=c+1|0;k=0;if(k<c){l=(e+E(a.a,16)|0)+8|0;p=(f+E(a.a,16)|0)+8|0;E5(m,1.0,1.0,1.0);b=a.t;n=a.a;q=a.t;$p=8;continue _;}c
=0;if(c<2){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,128);r=(f+E(a.a,16)|0)+8|0;b=new BQ;L();BR(b,Be1.b);m=a.t;n=a.a;$p=10;continue _;}if(!E(a.a,2)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BQ;L();BR(b,Be2.b);m=a.t;n=a.a;$p=11;continue _;}if(!E(a.a,4)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BQ;L();BR(b,Be3.b);m=a.t;n=a.a;$p=12;continue _;}if(!E(a.a,8)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BQ;L();BR(b,Be4.b);m=a.t;n=a.a;$p=13;continue _;}c=0;if(c<50)
{l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,120)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,BfR.b);m=a.t;n=a.a;$p=14;continue _;}c=0;if(c>=20)return;l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,E(a.a,112)+8|0)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,BfS.b);m=a.t;n=a.a;$p=15;continue _;case 1:XQ(b,m,n,j,k,l);if(C()){break _;}i=i+1|0;if(i<4){j=(e+E(a.a,16)|0)+8|0;k=E(a.a,128);l=(f+E(a.a,16)|0)+8|0;b=AYn();m=a.t;n=a.a;continue _;}o=0;if(o<20){j=e+E(a.a,16)|0;k=E(a.a,128);l=f+E(a.a,16)|0;b=new Ch;L();Cm(b,BeL.b,32);m=a.t;n
=a.a;$p=2;continue _;}j=0;if(j<10){o=e+E(a.a,16)|0;k=E(a.a,128);l=f+E(a.a,16)|0;b=new Ch;L();Cm(b,Be6.b,32);m=a.t;n=a.a;$p=3;continue _;}c=0;if(c<20){j=e+E(a.a,16)|0;k=E(a.a,128);l=f+E(a.a,16)|0;b=new Ch;L();Cm(b,Be9.b,16);m=a.t;n=a.a;$p=4;continue _;}c=0;if(c<20){j=e+E(a.a,16)|0;k=E(a.a,64);l=f+E(a.a,16)|0;b=new Ch;L();Cm(b,Be$.b,8);m=a.t;n=a.a;$p=5;continue _;}if(!E(a.a,1)){c=e+E(a.a,16)|0;j=E(a.a,32);k=f+E(a.a,16)|0;b=new Ch;L();Cm(b,Be_.b,8);m=a.t;n=a.a;$p=6;continue _;}if(!E(a.a,4)){c=e+E(a.a,16)|0;j=E(a.a,
16);k=f+E(a.a,16)|0;b=new Ch;L();Cm(b,BgS.b,8);m=a.t;n=a.a;$p=7;continue _;}c=(EY(a.iU,e*0.5,f*0.5)/8.0+Cl(a.a)*4.0+4.0)/3.0|0;if(c<0)c=0;m=GX();if(!E(a.a,10))c=c+1|0;k=0;if(k<c){l=(e+E(a.a,16)|0)+8|0;p=(f+E(a.a,16)|0)+8|0;E5(m,1.0,1.0,1.0);b=a.t;n=a.a;q=a.t;$p=8;continue _;}c=0;if(c<2){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,128);r=(f+E(a.a,16)|0)+8|0;b=new BQ;L();BR(b,Be1.b);m=a.t;n=a.a;$p=10;continue _;}if(!E(a.a,2)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BQ;L();BR(b,Be2.b);m=a.t;n=a.a;$p=11;continue _;}if
(!E(a.a,4)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BQ;L();BR(b,Be3.b);m=a.t;n=a.a;$p=12;continue _;}if(!E(a.a,8)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BQ;L();BR(b,Be4.b);m=a.t;n=a.a;$p=13;continue _;}c=0;if(c<50){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,120)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,BfR.b);m=a.t;n=a.a;$p=14;continue _;}c=0;if(c>=20)return;l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,E(a.a,112)+8|0)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,BfS.b);m=
a.t;n=a.a;$p=15;continue _;case 2:ABU(b,m,n,j,k,l);if(C()){break _;}o=o+1|0;if(o<20){j=e+E(a.a,16)|0;k=E(a.a,128);l=f+E(a.a,16)|0;b=new Ch;L();Cm(b,BeL.b,32);m=a.t;n=a.a;continue _;}j=0;if(j<10){o=e+E(a.a,16)|0;k=E(a.a,128);l=f+E(a.a,16)|0;b=new Ch;L();Cm(b,Be6.b,32);m=a.t;n=a.a;$p=3;continue _;}c=0;if(c<20){j=e+E(a.a,16)|0;k=E(a.a,128);l=f+E(a.a,16)|0;b=new Ch;L();Cm(b,Be9.b,16);m=a.t;n=a.a;$p=4;continue _;}c=0;if(c<20){j=e+E(a.a,16)|0;k=E(a.a,64);l=f+E(a.a,16)|0;b=new Ch;L();Cm(b,Be$.b,8);m=a.t;n=a.a;$p=5;continue _;}if
(!E(a.a,1)){c=e+E(a.a,16)|0;j=E(a.a,32);k=f+E(a.a,16)|0;b=new Ch;L();Cm(b,Be_.b,8);m=a.t;n=a.a;$p=6;continue _;}if(!E(a.a,4)){c=e+E(a.a,16)|0;j=E(a.a,16);k=f+E(a.a,16)|0;b=new Ch;L();Cm(b,BgS.b,8);m=a.t;n=a.a;$p=7;continue _;}c=(EY(a.iU,e*0.5,f*0.5)/8.0+Cl(a.a)*4.0+4.0)/3.0|0;if(c<0)c=0;m=GX();if(!E(a.a,10))c=c+1|0;k=0;if(k<c){l=(e+E(a.a,16)|0)+8|0;p=(f+E(a.a,16)|0)+8|0;E5(m,1.0,1.0,1.0);b=a.t;n=a.a;q=a.t;$p=8;continue _;}c=0;if(c<2){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,128);r=(f+E(a.a,16)|0)+8|0;b=new BQ;L();BR(b,
Be1.b);m=a.t;n=a.a;$p=10;continue _;}if(!E(a.a,2)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BQ;L();BR(b,Be2.b);m=a.t;n=a.a;$p=11;continue _;}if(!E(a.a,4)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BQ;L();BR(b,Be3.b);m=a.t;n=a.a;$p=12;continue _;}if(!E(a.a,8)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BQ;L();BR(b,Be4.b);m=a.t;n=a.a;$p=13;continue _;}c=0;if(c<50){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,120)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,
BfR.b);m=a.t;n=a.a;$p=14;continue _;}c=0;if(c>=20)return;l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,E(a.a,112)+8|0)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,BfS.b);m=a.t;n=a.a;$p=15;continue _;case 3:ABU(b,m,n,o,k,l);if(C()){break _;}j=j+1|0;if(j<10){o=e+E(a.a,16)|0;k=E(a.a,128);l=f+E(a.a,16)|0;b=new Ch;L();Cm(b,Be6.b,32);m=a.t;n=a.a;continue _;}c=0;if(c<20){j=e+E(a.a,16)|0;k=E(a.a,128);l=f+E(a.a,16)|0;b=new Ch;L();Cm(b,Be9.b,16);m=a.t;n=a.a;$p=4;continue _;}c=0;if(c<20){j=e+E(a.a,16)|0;k=E(a.a,64);l=f+E(a.a,16)
|0;b=new Ch;L();Cm(b,Be$.b,8);m=a.t;n=a.a;$p=5;continue _;}if(!E(a.a,1)){c=e+E(a.a,16)|0;j=E(a.a,32);k=f+E(a.a,16)|0;b=new Ch;L();Cm(b,Be_.b,8);m=a.t;n=a.a;$p=6;continue _;}if(!E(a.a,4)){c=e+E(a.a,16)|0;j=E(a.a,16);k=f+E(a.a,16)|0;b=new Ch;L();Cm(b,BgS.b,8);m=a.t;n=a.a;$p=7;continue _;}c=(EY(a.iU,e*0.5,f*0.5)/8.0+Cl(a.a)*4.0+4.0)/3.0|0;if(c<0)c=0;m=GX();if(!E(a.a,10))c=c+1|0;k=0;if(k<c){l=(e+E(a.a,16)|0)+8|0;p=(f+E(a.a,16)|0)+8|0;E5(m,1.0,1.0,1.0);b=a.t;n=a.a;q=a.t;$p=8;continue _;}c=0;if(c<2){l=(e+E(a.a,16)
|0)+8|0;p=E(a.a,128);r=(f+E(a.a,16)|0)+8|0;b=new BQ;L();BR(b,Be1.b);m=a.t;n=a.a;$p=10;continue _;}if(!E(a.a,2)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BQ;L();BR(b,Be2.b);m=a.t;n=a.a;$p=11;continue _;}if(!E(a.a,4)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BQ;L();BR(b,Be3.b);m=a.t;n=a.a;$p=12;continue _;}if(!E(a.a,8)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BQ;L();BR(b,Be4.b);m=a.t;n=a.a;$p=13;continue _;}c=0;if(c<50){l=(e+E(a.a,16)|0)+8|0;p
=E(a.a,E(a.a,120)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,BfR.b);m=a.t;n=a.a;$p=14;continue _;}c=0;if(c>=20)return;l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,E(a.a,112)+8|0)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,BfS.b);m=a.t;n=a.a;$p=15;continue _;case 4:ABU(b,m,n,j,k,l);if(C()){break _;}c=c+1|0;if(c<20){j=e+E(a.a,16)|0;k=E(a.a,128);l=f+E(a.a,16)|0;b=new Ch;L();Cm(b,Be9.b,16);m=a.t;n=a.a;continue _;}c=0;if(c<20){j=e+E(a.a,16)|0;k=E(a.a,64);l=f+E(a.a,16)|0;b=new Ch;L();Cm(b,Be$.b,8);m=a.t;n=a.a;$p=5;continue _;}if
(!E(a.a,1)){c=e+E(a.a,16)|0;j=E(a.a,32);k=f+E(a.a,16)|0;b=new Ch;L();Cm(b,Be_.b,8);m=a.t;n=a.a;$p=6;continue _;}if(!E(a.a,4)){c=e+E(a.a,16)|0;j=E(a.a,16);k=f+E(a.a,16)|0;b=new Ch;L();Cm(b,BgS.b,8);m=a.t;n=a.a;$p=7;continue _;}c=(EY(a.iU,e*0.5,f*0.5)/8.0+Cl(a.a)*4.0+4.0)/3.0|0;if(c<0)c=0;m=GX();if(!E(a.a,10))c=c+1|0;k=0;if(k<c){l=(e+E(a.a,16)|0)+8|0;p=(f+E(a.a,16)|0)+8|0;E5(m,1.0,1.0,1.0);b=a.t;n=a.a;q=a.t;$p=8;continue _;}c=0;if(c<2){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,128);r=(f+E(a.a,16)|0)+8|0;b=new BQ;L();BR(b,
Be1.b);m=a.t;n=a.a;$p=10;continue _;}if(!E(a.a,2)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BQ;L();BR(b,Be2.b);m=a.t;n=a.a;$p=11;continue _;}if(!E(a.a,4)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BQ;L();BR(b,Be3.b);m=a.t;n=a.a;$p=12;continue _;}if(!E(a.a,8)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BQ;L();BR(b,Be4.b);m=a.t;n=a.a;$p=13;continue _;}c=0;if(c<50){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,120)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,
BfR.b);m=a.t;n=a.a;$p=14;continue _;}c=0;if(c>=20)return;l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,E(a.a,112)+8|0)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,BfS.b);m=a.t;n=a.a;$p=15;continue _;case 5:ABU(b,m,n,j,k,l);if(C()){break _;}c=c+1|0;if(c<20){j=e+E(a.a,16)|0;k=E(a.a,64);l=f+E(a.a,16)|0;b=new Ch;L();Cm(b,Be$.b,8);m=a.t;n=a.a;continue _;}if(!E(a.a,1)){c=e+E(a.a,16)|0;j=E(a.a,32);k=f+E(a.a,16)|0;b=new Ch;L();Cm(b,Be_.b,8);m=a.t;n=a.a;$p=6;continue _;}if(!E(a.a,4)){c=e+E(a.a,16)|0;j=E(a.a,16);k=f+E(a.a,16)
|0;b=new Ch;L();Cm(b,BgS.b,8);m=a.t;n=a.a;$p=7;continue _;}c=(EY(a.iU,e*0.5,f*0.5)/8.0+Cl(a.a)*4.0+4.0)/3.0|0;if(c<0)c=0;m=GX();if(!E(a.a,10))c=c+1|0;k=0;if(k<c){l=(e+E(a.a,16)|0)+8|0;p=(f+E(a.a,16)|0)+8|0;E5(m,1.0,1.0,1.0);b=a.t;n=a.a;q=a.t;$p=8;continue _;}c=0;if(c<2){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,128);r=(f+E(a.a,16)|0)+8|0;b=new BQ;L();BR(b,Be1.b);m=a.t;n=a.a;$p=10;continue _;}if(!E(a.a,2)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BQ;L();BR(b,Be2.b);m=a.t;n=a.a;$p=11;continue _;}if(!E(a.a,
4)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BQ;L();BR(b,Be3.b);m=a.t;n=a.a;$p=12;continue _;}if(!E(a.a,8)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BQ;L();BR(b,Be4.b);m=a.t;n=a.a;$p=13;continue _;}c=0;if(c<50){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,120)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,BfR.b);m=a.t;n=a.a;$p=14;continue _;}c=0;if(c>=20)return;l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,E(a.a,112)+8|0)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,BfS.b);m=a.t;n=a.a;$p
=15;continue _;case 6:ABU(b,m,n,c,j,k);if(C()){break _;}if(!E(a.a,4)){c=e+E(a.a,16)|0;j=E(a.a,16);k=f+E(a.a,16)|0;b=new Ch;L();Cm(b,BgS.b,8);m=a.t;n=a.a;$p=7;continue _;}c=(EY(a.iU,e*0.5,f*0.5)/8.0+Cl(a.a)*4.0+4.0)/3.0|0;if(c<0)c=0;m=GX();if(!E(a.a,10))c=c+1|0;k=0;if(k<c){l=(e+E(a.a,16)|0)+8|0;p=(f+E(a.a,16)|0)+8|0;E5(m,1.0,1.0,1.0);b=a.t;n=a.a;q=a.t;$p=8;continue _;}c=0;if(c<2){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,128);r=(f+E(a.a,16)|0)+8|0;b=new BQ;L();BR(b,Be1.b);m=a.t;n=a.a;$p=10;continue _;}if(!E(a.a,2)){c=(e
+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BQ;L();BR(b,Be2.b);m=a.t;n=a.a;$p=11;continue _;}if(!E(a.a,4)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BQ;L();BR(b,Be3.b);m=a.t;n=a.a;$p=12;continue _;}if(!E(a.a,8)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BQ;L();BR(b,Be4.b);m=a.t;n=a.a;$p=13;continue _;}c=0;if(c<50){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,120)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,BfR.b);m=a.t;n=a.a;$p=14;continue _;}c=0;if(c>=20)return;l
=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,E(a.a,112)+8|0)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,BfS.b);m=a.t;n=a.a;$p=15;continue _;case 7:ABU(b,m,n,c,j,k);if(C()){break _;}c=(EY(a.iU,e*0.5,f*0.5)/8.0+Cl(a.a)*4.0+4.0)/3.0|0;if(c<0)c=0;m=GX();if(!E(a.a,10))c=c+1|0;k=0;if(k<c){l=(e+E(a.a,16)|0)+8|0;p=(f+E(a.a,16)|0)+8|0;E5(m,1.0,1.0,1.0);b=a.t;n=a.a;q=a.t;$p=8;continue _;}c=0;if(c<2){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,128);r=(f+E(a.a,16)|0)+8|0;b=new BQ;L();BR(b,Be1.b);m=a.t;n=a.a;$p=10;continue _;}if(!E(a.a,2)){c
=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BQ;L();BR(b,Be2.b);m=a.t;n=a.a;$p=11;continue _;}if(!E(a.a,4)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BQ;L();BR(b,Be3.b);m=a.t;n=a.a;$p=12;continue _;}if(!E(a.a,8)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BQ;L();BR(b,Be4.b);m=a.t;n=a.a;$p=13;continue _;}c=0;if(c<50){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,120)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,BfR.b);m=a.t;n=a.a;$p=14;continue _;}c=0;if(c>=20)return;l
=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,E(a.a,112)+8|0)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,BfS.b);m=a.t;n=a.a;$p=15;continue _;case 8:$z=ALI(q,l,p);if(C()){break _;}d=$z;$p=9;case 9:AEN(m,b,n,l,d,p);if(C()){break _;}k=k+1|0;if(k<c){l=(e+E(a.a,16)|0)+8|0;p=(f+E(a.a,16)|0)+8|0;E5(m,1.0,1.0,1.0);b=a.t;n=a.a;q=a.t;$p=8;continue _;}c=0;if(c<2){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,128);r=(f+E(a.a,16)|0)+8|0;b=new BQ;L();BR(b,Be1.b);m=a.t;n=a.a;$p=10;continue _;}if(!E(a.a,2)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+
E(a.a,16)|0)+8|0;b=new BQ;L();BR(b,Be2.b);m=a.t;n=a.a;$p=11;continue _;}if(!E(a.a,4)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BQ;L();BR(b,Be3.b);m=a.t;n=a.a;$p=12;continue _;}if(!E(a.a,8)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BQ;L();BR(b,Be4.b);m=a.t;n=a.a;$p=13;continue _;}c=0;if(c<50){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,120)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,BfR.b);m=a.t;n=a.a;$p=14;continue _;}c=0;if(c>=20)return;l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,
E(a.a,112)+8|0)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,BfS.b);m=a.t;n=a.a;$p=15;continue _;case 10:ACQ(b,m,n,l,p,r);if(C()){break _;}c=c+1|0;if(c<2){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,128);r=(f+E(a.a,16)|0)+8|0;b=new BQ;L();BR(b,Be1.b);m=a.t;n=a.a;continue _;}if(!E(a.a,2)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BQ;L();BR(b,Be2.b);m=a.t;n=a.a;$p=11;continue _;}if(!E(a.a,4)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BQ;L();BR(b,Be3.b);m=a.t;n=a.a;$p=12;continue _;}if
(!E(a.a,8)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BQ;L();BR(b,Be4.b);m=a.t;n=a.a;$p=13;continue _;}c=0;if(c<50){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,120)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,BfR.b);m=a.t;n=a.a;$p=14;continue _;}c=0;if(c>=20)return;l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,E(a.a,112)+8|0)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,BfS.b);m=a.t;n=a.a;$p=15;continue _;case 11:ACQ(b,m,n,c,l,p);if(C()){break _;}if(!E(a.a,4)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,
16)|0)+8|0;b=new BQ;L();BR(b,Be3.b);m=a.t;n=a.a;$p=12;continue _;}if(!E(a.a,8)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BQ;L();BR(b,Be4.b);m=a.t;n=a.a;$p=13;continue _;}c=0;if(c<50){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,120)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,BfR.b);m=a.t;n=a.a;$p=14;continue _;}c=0;if(c>=20)return;l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,E(a.a,112)+8|0)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,BfS.b);m=a.t;n=a.a;$p=15;continue _;case 12:ACQ(b,m,n,c,l,p);if(C())
{break _;}if(!E(a.a,8)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BQ;L();BR(b,Be4.b);m=a.t;n=a.a;$p=13;continue _;}c=0;if(c<50){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,120)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,BfR.b);m=a.t;n=a.a;$p=14;continue _;}c=0;if(c>=20)return;l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,E(a.a,112)+8|0)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,BfS.b);m=a.t;n=a.a;$p=15;continue _;case 13:ACQ(b,m,n,c,l,p);if(C()){break _;}c=0;if(c<50){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,
120)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,BfR.b);m=a.t;n=a.a;$p=14;continue _;}c=0;if(c>=20)return;l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,E(a.a,112)+8|0)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,BfS.b);m=a.t;n=a.a;$p=15;continue _;case 14:AL2(b,m,n,l,p,r);if(C()){break _;}c=c+1|0;if(c<50){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,120)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,BfR.b);m=a.t;n=a.a;continue _;}c=0;if(c>=20)return;l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,E(a.a,112)+8|0)+8|0);r=(f+E(a.a,16)|0)+8
|0;b=new Cn;L();Cs(b,BfS.b);m=a.t;n=a.a;$p=15;case 15:AL2(b,m,n,l,p,r);if(C()){break _;}c=c+1|0;if(c>=20)return;l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,E(a.a,112)+8|0)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,BfS.b);m=a.t;n=a.a;continue _;default:E$();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,$p);}
function Wy(){var a=this;D.call(a);a.gF=null;a.oR=null;a.xv=null;a.uV=null;a.zC=0;a.oc=0;a.fh=0;a.by=0;a.hw=0;a.of=0;a.ln=0;a.hp=0;a.Jj=0;a.k2=0;a.nt=0;}
function Cv(a,b,c){a.oR.data[b]=c;}
function Ep(a,b){return a.oR.data[b];}
function MK(a){return QP(a,0);}
function QP(a,b){Vq(a,b);return a.gF.data[(b*2|0)+1|0];}
function EK(a,b,c){a.gF.data[b*2|0]=c;}
function M0(a,b,c){a.gF.data[(b*2|0)+1|0]=c;}
function Hn(a,b){return a.gF.data[b*2|0];}
function JK(a,b){return a.gF.data[(b*2|0)+1|0];}
function AM6(a,b){var c,d;c=Hn(a,b);d=JK(a,b);if((d|c|(d-c|0))>=0&&d<=Bi(a.uV))return Ev(a.uV,c,d);return null;}
function AEM(a){return PI(a,0);}
function PI(a,b){Vq(a,b);return a.gF.data[b*2|0];}
function AC6(a){if(a.gF.data[0]==(-1)){a.gF.data[0]=a.hw;a.gF.data[1]=a.hw;}a.k2=MK(a);}
function Tn(a,b){return a.xv.data[b];}
function FI(a,b,c){a.xv.data[b]=c;}
function Vq(a,b){var c;if(!a.oc){c=new D3;P(c);M(c);}if(b>=0&&b<a.zC)return;c=new BS;Bo(c,VY(b));M(c);}
function ARA(a){a.oc=1;}
function A$N(a){return a.oc;}
function Xl(a,b,c,d){a.oc=0;a.nt=2;M1(a.gF,(-1));M1(a.oR,(-1));if(b!==null)a.uV=b;if(c>=0){a.fh=c;a.by=d;}a.hw=a.fh;}
function Z9(a){Xl(a,null,(-1),(-1));}
function APZ(a,b){a.hw=b;if(a.k2>=0)b=a.k2;a.k2=b;}
function A4j(a){return a.fh;}
function A7l(a){return a.by;}
function A5a(a,b){a.nt=b;}
function AWi(a){return a.nt;}
function A6e(a){return a.ln;}
function A3h(a){return a.of;}
function A3K(a){return a.k2;}
function VS(){var a=this;D.call(a);a.ck=null;a.iJ=0;a.b8=0;a.eh=0;a.d_=0;a.b0=0;a.dM=0;}
function AOo(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(Bj(Bj((a.d_-a.iJ|0)+1|0,(a.b0-a.b8|0)+1|0),(a.dM-a.eh|0)+1|0)>32768){Cg(Dz(),B(888));return;}c=a.iJ;while(c<=a.d_){d=a.eh;while(d<=a.dM){e=c>>4;f=d>>4;g=Fj(b,c,0,d,1);if(g){$p=1;continue _;}if(g){if(a.b8<0)a.b8
=0;if(a.b0>=128)a.b0=127;h=a.b8;if(h<=a.b0){i=a.ck;$p=2;continue _;}}d=d+1|0;}c=c+1|0;}return;case 1:ZW(b,e,f);if(C()){break _;}a:while(true){if(g){if(a.b8<0)a.b8=0;if(a.b0>=128)a.b0=127;h=a.b8;if(h<=a.b0){i=a.ck;$p=2;continue _;}}d=d+1|0;while(d>a.dM){c=c+1|0;if(c>a.d_)break a;d=a.eh;}e=c>>4;f=d>>4;g=Fj(b,c,0,d,1);if(!g)continue;else{continue _;}}return;case 2:$z=ALk(b,i,c,h,d);if(C()){break _;}j=$z;$p=3;case 3:$z=ACy(b,c,h,d);if(C()){break _;}k=$z;L();l=Bgu.data[k];if(!l)l=1;m=0;if(a.ck===Bkq){$p=4;continue _;}if
(a.ck===Bkr)m=Bgw.data[k];if(l>=15&&!m){m=0;if(j!=m){i=a.ck;$p=11;continue _;}h=h+1|0;b:while(true){if(h<=a.b0){i=a.ck;$p=2;continue _;}while(true){d=d+1|0;while(d>a.dM){c=c+1|0;if(c>a.d_)break b;d=a.eh;}e=c>>4;f=d>>4;g=Fj(b,c,0,d,1);if(g){$p=1;continue _;}if(g)break;}if(a.b8<0)a.b8=0;if(a.b0>=128)a.b0=127;h=a.b8;}return;}i=a.ck;g=c-1|0;$p=5;continue _;case 4:$z=Zz(b,c,h,d);if(C()){break _;}g=$z;if(g)m=15;if(l>=15&&!m){m=0;if(j!=m){i=a.ck;$p=11;continue _;}h=h+1|0;c:while(true){if(h<=a.b0){i=a.ck;$p=2;continue _;}while
(true){d=d+1|0;while(d>a.dM){c=c+1|0;if(c>a.d_)break c;d=a.eh;}e=c>>4;f=d>>4;g=Fj(b,c,0,d,1);if(g){$p=1;continue _;}if(g)break;}if(a.b8<0)a.b8=0;if(a.b0>=128)a.b0=127;h=a.b8;}return;}i=a.ck;g=c-1|0;$p=5;case 5:$z=ALk(b,i,g,h,d);if(C()){break _;}n=$z;i=a.ck;g=c+1|0;$p=6;case 6:$z=ALk(b,i,g,h,d);if(C()){break _;}o=$z;i=a.ck;g=h-1|0;$p=7;case 7:$z=ALk(b,i,c,g,d);if(C()){break _;}p=$z;i=a.ck;g=h+1|0;$p=8;case 8:$z=ALk(b,i,c,g,d);if(C()){break _;}q=$z;i=a.ck;g=d-1|0;$p=9;case 9:$z=ALk(b,i,c,h,g);if(C()){break _;}g
=$z;i=a.ck;r=d+1|0;$p=10;case 10:$z=ALk(b,i,c,h,r);if(C()){break _;}r=$z;if(o<=n)o=n;if(p<=o)p=o;if(q<=p)q=p;if(g<=q)g=q;if(r<=g)r=g;g=r-l|0;if(g<0)g=0;if(m<=g)m=g;if(j!=m){i=a.ck;$p=11;continue _;}h=h+1|0;d:while(true){if(h<=a.b0){i=a.ck;$p=2;continue _;}while(true){d=d+1|0;while(d>a.dM){c=c+1|0;if(c>a.d_)break d;d=a.eh;}e=c>>4;f=d>>4;g=Fj(b,c,0,d,1);if(g){$p=1;continue _;}if(g)break;}if(a.b8<0)a.b8=0;if(a.b0>=128)a.b0=127;h=a.b8;}return;case 11:AMv(b,i,c,h,d,m);if(C()){break _;}s=m-1|0;if(s<0)s=0;i=a.ck;g
=c-1|0;$p=12;case 12:AP_(b,i,g,h,d,s);if(C()){break _;}i=a.ck;g=h-1|0;$p=13;case 13:AP_(b,i,c,g,d,s);if(C()){break _;}i=a.ck;g=d-1|0;$p=14;case 14:AP_(b,i,c,h,g,s);if(C()){break _;}g=c+1|0;if(g>=a.d_){i=a.ck;$p=15;continue _;}g=h+1|0;if(g>=a.b0){i=a.ck;$p=16;continue _;}g=d+1|0;if(g>=a.dM){i=a.ck;$p=17;continue _;}h=h+1|0;e:while(true){if(h<=a.b0){i=a.ck;$p=2;continue _;}while(true){d=d+1|0;while(d>a.dM){c=c+1|0;if(c>a.d_)break e;d=a.eh;}e=c>>4;f=d>>4;g=Fj(b,c,0,d,1);if(g){$p=1;continue _;}if(g)break;}if(a.b8
<0)a.b8=0;if(a.b0>=128)a.b0=127;h=a.b8;}return;case 15:AP_(b,i,g,h,d,s);if(C()){break _;}g=h+1|0;if(g>=a.b0){i=a.ck;$p=16;continue _;}g=d+1|0;if(g>=a.dM){i=a.ck;$p=17;continue _;}h=h+1|0;f:while(true){if(h<=a.b0){i=a.ck;$p=2;continue _;}while(true){d=d+1|0;while(d>a.dM){c=c+1|0;if(c>a.d_)break f;d=a.eh;}e=c>>4;f=d>>4;g=Fj(b,c,0,d,1);if(g){$p=1;continue _;}if(g)break;}if(a.b8<0)a.b8=0;if(a.b0>=128)a.b0=127;h=a.b8;}return;case 16:AP_(b,i,c,g,d,s);if(C()){break _;}g=d+1|0;if(g>=a.dM){i=a.ck;$p=17;continue _;}h
=h+1|0;g:while(true){if(h<=a.b0){i=a.ck;$p=2;continue _;}while(true){d=d+1|0;while(d>a.dM){c=c+1|0;if(c>a.d_)break g;d=a.eh;}e=c>>4;f=d>>4;g=Fj(b,c,0,d,1);if(g){$p=1;continue _;}if(g)break;}if(a.b8<0)a.b8=0;if(a.b0>=128)a.b0=127;h=a.b8;}return;case 17:AP_(b,i,c,h,g,s);if(C()){break _;}h=h+1|0;a:while(true){if(h<=a.b0){i=a.ck;$p=2;continue _;}while(true){d=d+1|0;while(d>a.dM){c=c+1|0;if(c>a.d_)break a;d=a.eh;}e=c>>4;f=d>>4;g=Fj(b,c,0,d,1);if(g){$p=1;continue _;}if(g)break;}if(a.b8<0)a.b8=0;if(a.b0>=128)a.b0=
127;h=a.b8;}return;default:E$();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,$p);}
function ALC(a,b,c,d,e,f,g){var h,i,j;if(b>=a.iJ&&c>=a.b8&&d>=a.eh&&e<=a.d_&&f<=a.b0&&g<=a.dM)return 1;if(b>=(a.iJ-1|0)&&c>=(a.b8-1|0)&&d>=(a.eh-1|0)&&e<=(a.d_+1|0)&&f<=(a.b0+1|0)&&g<=(a.dM+1|0)){h=a.d_-a.iJ|0;i=a.b0-a.b8|0;j=a.dM-a.eh|0;if(b>a.iJ)b=a.iJ;if(c>a.b8)c=a.b8;if(d>a.eh)d=a.eh;if(e<a.d_)e=a.d_;if(f<a.b0)f=a.b0;if(g<a.dM)g=a.dM;if((Bj(Bj(e-b|0,f-c|0),g-d|0)-Bj(Bj(h,i),j)|0)<=2){a.iJ=b;a.b8=c;a.eh=d;a.d_=e;a.b0=f;a.dM=g;return 1;}}return 0;}
function R_(){}
function AF6(){var a=this;Ij.call(a);a.ik=0;a.ec=null;}
function AWj(a){var b=new AF6();A61(b,a);return b;}
function A61(a,b){OR(a,b);a.ec=$rt_createByteArray(8);}
function Ra(a,b,c,d){var e;if(b!==null){a.jp.jw(b,c,d);a.ik=a.ik+d|0;return;}e=new E3;P(e);M(e);}
function KM(a,b){a.jp.qD(b);a.ik=a.ik+1|0;}
function APo(a,b){UK(a,$rt_doubleToLongBits(b));}
function APj(a,b){JP(a,$rt_floatToIntBits(b));}
function JP(a,b){a.ec.data[0]=b>>24<<24>>24;a.ec.data[1]=b>>16<<24>>24;a.ec.data[2]=b>>8<<24>>24;a.ec.data[3]=b<<24>>24;a.jp.jw(a.ec,0,4);a.ik=a.ik+4|0;}
function UK(a,b){a.ec.data[0]=Long_shr(b,56).lo<<24>>24;a.ec.data[1]=Long_shr(b,48).lo<<24>>24;a.ec.data[2]=Long_shr(b,40).lo<<24>>24;a.ec.data[3]=b.hi<<24>>24;a.ec.data[4]=Long_shr(b,24).lo<<24>>24;a.ec.data[5]=Long_shr(b,16).lo<<24>>24;a.ec.data[6]=Long_shr(b,8).lo<<24>>24;a.ec.data[7]=b.lo<<24>>24;a.jp.jw(a.ec,0,8);a.ik=a.ik+8|0;}
function AAa(a,b){a.ec.data[0]=b>>8<<24>>24;a.ec.data[1]=b<<24>>24;a.jp.jw(a.ec,0,2);a.ik=a.ik+2|0;}
function AOc(a,b,c,d){var e;c=c.data;e=d+1|0;c[d]=b>>8<<24>>24;d=e+1|0;c[e]=b<<24>>24;return d;}
function Xs(a,b){var c,d,e;c=AGd(a,b);if(Long_gt(c,Long_fromInt(65535))){b=new BT;Bo(b,B(889));M(b);}d=c.lo;e=$rt_createByteArray(d+2|0);Ra(a,e,0,AO9(a,b,e,AOc(a,d,e,0)));}
function AGd(a,b){var c,d,e,f;c=0;d=Bi(b);e=0;while(e<d){f=Ba(b,e);c=f>0&&f<=127?c+1|0:f>2047?c+3|0:c+2|0;e=e+1|0;}return Long_fromInt(c);}
function AO9(a,b,c,d){var e,f,g,h,i,j,k;e=Bi(b);f=0;while(f<e){g=Ba(b,f);if(g>0&&g<=127){h=c.data;i=d+1|0;h[d]=g<<24>>24;}else if(g<=2047){h=c.data;j=d+1|0;h[d]=(192|31&g>>6)<<24>>24;i=j+1|0;h[j]=(128|63&g)<<24>>24;}else{h=c.data;i=d+1|0;h[d]=(224|15&g>>12)<<24>>24;k=i+1|0;h[i]=(128|63&g>>6)<<24>>24;i=k+1|0;h[k]=(128|63&g)<<24>>24;}f=f+1|0;d=i;}return d;}
function AF0(){D.call(this);}
function BmQ(){var a=new AF0();A0h(a);return a;}
function A0h(a){return;}
function N0(){D.call(this);}
var BmR=null;var BmS=null;function BmT(){var a=new N0();ABp(a);return a;}
function ABp(a){return;}
function AB0(b,c){var d,e,f,g,h,i,j,k,l,m,n,o;d=$rt_doubleToLongBits(b);c.zc=Long_eq(Long_and(d,new Long(0, 2147483648)),Long_ZERO)?0:1;e=Long_and(d,new Long(4294967295, 1048575));f=Long_shr(d,52).lo&2047;if(Long_eq(e,Long_ZERO)&&!f){c.u2=Long_ZERO;c.t3=0;return;}g=0;if(f)e=Long_or(e,new Long(0, 1048576));else{e=Long_shl(e,1);while(Long_eq(Long_and(e,new Long(0, 1048576)),Long_ZERO)){e=Long_shl(e,1);f=f+(-1)|0;g=g+1|0;}}h=AOt(BmS,f);if(h<0)h= -h-2|0;i=12+(f-BmS.data[h]|0)|0;j=Qx(e,BmR.data[h],i);if(Long_ge(j,
new Long(2808348672, 232830643))){h=h+1|0;i=12+(f-BmS.data[h]|0)|0;j=Qx(e,BmR.data[h],i);}k=Long_shru(BmR.data[h],(63-i|0)-g|0);l=Long_shr(Long_add(k,Long_fromInt(1)),1);m=Long_shr(k,1);if(Long_eq(e,new Long(0, 1048576)))m=Long_shr(m,2);n=Long_fromInt(10);while(Long_le(n,m)){n=Long_mul(n,Long_fromInt(10));}if(Long_ge(Long_rem(j,n),Long_div(m,Long_fromInt(2))))n=Long_div(n,Long_fromInt(10));o=Long_fromInt(1);while(Long_le(o,l)){o=Long_mul(o,Long_fromInt(10));}if(Long_gt(Long_sub(o,Long_rem(j,o)),Long_div(l,Long_fromInt(2))))o
=Long_div(o,Long_fromInt(10));f=Long_compare(n,o);e=f>0?Long_mul(Long_div(j,n),n):f<0?Long_add(Long_mul(Long_div(j,o),o),o):Long_mul(Long_div(Long_add(j,Long_div(o,Long_fromInt(2))),o),o);if(Long_ge(e,new Long(2808348672, 232830643))){h=h+1|0;e=Long_div(e,Long_fromInt(10));}else if(Long_lt(e,new Long(1569325056, 23283064))){h=h+(-1)|0;e=Long_mul(e,Long_fromInt(10));}c.u2=e;c.t3=h-330|0;}
function Qx(b,c,d){var e,f,g,h,i,j,k,l,m,n,o;e=Long_and(b,Long_fromInt(65535));f=Long_and(Long_shru(b,16),Long_fromInt(65535));g=Long_and(Long_shru(b,32),Long_fromInt(65535));h=Long_and(Long_shru(b,48),Long_fromInt(65535));i=Long_and(c,Long_fromInt(65535));j=Long_and(Long_shru(c,16),Long_fromInt(65535));k=Long_and(Long_shru(c,32),Long_fromInt(65535));l=Long_and(Long_shru(c,48),Long_fromInt(65535));m=Long_add(Long_add(Long_mul(k,e),Long_mul(j,f)),Long_mul(i,g));n=Long_add(Long_add(Long_add(Long_mul(l,e),Long_mul(k,
f)),Long_mul(j,g)),Long_mul(i,h));o=Long_add(Long_add(Long_shl(Long_mul(l,h),32+d|0),Long_shl(Long_add(Long_mul(l,g),Long_mul(k,h)),16+d|0)),Long_shl(Long_add(Long_add(Long_mul(l,f),Long_mul(k,g)),Long_mul(j,h)),d));return Long_add(d>16?Long_add(o,Long_shl(n,d-16|0)):Long_add(o,Long_shru(n,16-d|0)),Long_shru(m,32-d|0));}
function ABn(){var b,c,d,e,f,g,h,i,j,k;BmR=$rt_createLongArray(660);BmS=$rt_createIntArray(660);b=new Long(991952896, 1862645149);c=1023;d=0;e=b;while(d<330){f=BmR.data;g=d+330|0;f[g]=Mn(e,Long_fromInt(80));BmS.data[g]=c;e=Mn(e,Long_fromInt(10));h=AIX(e,Long_fromInt(10));while(Long_le(e,b)&&Long_eq(Long_and(e,new Long(0, 2147483648)),Long_ZERO)){e=Long_shl(e,1);c=c+1|0;h=Long_shl(h,1);}e=Long_add(e,Long_div(h,Long_fromInt(10)));d=d+1|0;}d=1023;i=0;while(i<330){j=0;e=b;while(Long_gt(e,new Long(3435973836, 214748364)))
{e=Long_shr(e,1);j=j+1|0;d=d+(-1)|0;}k=Long_mul(e,Long_fromInt(10));b=j<=0?k:Long_add(k,Long_shr(Long_mul(Long_and(b,Long_fromInt((1<<j)-1|0)),Long_fromInt(10)),j));f=BmR.data;g=(330-i|0)-1|0;f[g]=Mn(b,Long_fromInt(80));BmS.data[g]=d;i=i+1|0;}}
function HQ(){D.call(this);}
function AMS(){var a=this;HQ.call(a);a.nK=null;a.rM=0;}
function G_(a,b){var c=new AMS();AUc(c,a,b);return c;}
function AUc(a,b,c){var d;a.rM=c;a.nK=J(PC,c);d=0;while(d<c){a.nK.data[d]=BbE(b);d=d+1|0;}}
function EY(a,b,c){var d,e,f;d=0.0;e=1.0;f=0;while(f<a.rM){d=d+AGZ(a.nK.data[f],b*e,c*e)/e;e=e/2.0;f=f+1|0;}return d;}
function U_(a,b,c,d){var e,f,g;e=0.0;f=1.0;g=0;while(g<a.rM){e=e+Le(a.nK.data[g],b*f,c*f,d*f)/f;f=f/2.0;g=g+1|0;}return e;}
function H6(a,b,c,d,e,f,g,h,i,j,k){var l,m,n,o;if(b===null)b=$rt_createDoubleArray(Bj(Bj(f,g),h));else{l=0;while(true){m=b.data;if(l>=m.length)break;m[l]=0.0;l=l+1|0;}}n=1.0;o=0;while(o<a.rM){AQu(a.nK.data[o],b,c,d,e,f,g,h,i*n,j*n,k*n,n);n=n/2.0;o=o+1|0;}return b;}
function ACS(){var a=this;D.call(a);a.jC=null;a.j$=0;a.FH=Long_ZERO;}
function ATr(a,b,c){var d=new ACS();A1s(d,a,b,c);return d;}
function A1s(a,b,c,d){a.jC=b;a.j$=c;a.FH=d;}
function PC(){var a=this;HQ.call(a);a.b5=null;a.ve=0.0;a.yd=0.0;a.wv=0.0;}
function BmU(){var a=new PC();A_z(a);return a;}
function BbE(a){var b=new PC();Zn(b,a);return b;}
function A_z(a){Zn(a,new DB);}
function Zn(a,b){var c,d,e,f,g;a.b5=$rt_createIntArray(512);a.ve=Cl(b)*256.0;a.yd=Cl(b)*256.0;a.wv=Cl(b)*256.0;c=0;while(c<256){d=a.b5.data;e=c+1|0;d[c]=c;c=e;}c=0;while(c<256){f=E(b,256-c|0)+c|0;g=a.b5.data[c];a.b5.data[c]=a.b5.data[f];a.b5.data[f]=g;a.b5.data[c+256|0]=a.b5.data[c];c=c+1|0;}}
function Le(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x;e=b+a.ve;f=c+a.yd;g=d+a.wv;h=e|0;i=f|0;j=g|0;if(e<h)h=h+(-1)|0;if(f<i)i=i+(-1)|0;if(g<j)j=j+(-1)|0;k=h&255;l=i&255;m=j&255;c=e-h;d=f-i;n=g-j;o=c*c*c*(c*(c*6.0-15.0)+10.0);p=d*d*d*(d*(d*6.0-15.0)+10.0);q=n*n*n*(n*(n*6.0-15.0)+10.0);r=a.b5.data[k]+l|0;s=a.b5.data[r]+m|0;t=a.b5.data[r+1|0]+m|0;u=a.b5.data[k+1|0]+l|0;v=a.b5.data[u]+m|0;w=a.b5.data[u+1|0]+m|0;e=Dr(a,a.b5.data[s],c,d,n);k=a.b5.data[v];x=c-1.0;b=DN(a,o,e,Dr(a,k,x,d,n));k=a.b5.data[t];e
=d-1.0;b=DN(a,p,b,DN(a,o,Dr(a,k,c,e,n),Dr(a,a.b5.data[w],x,e,n)));k=a.b5.data[s+1|0];f=n-1.0;return DN(a,q,b,DN(a,p,DN(a,o,Dr(a,k,c,d,f),Dr(a,a.b5.data[v+1|0],x,d,f)),DN(a,o,Dr(a,a.b5.data[t+1|0],c,e,f),Dr(a,a.b5.data[w+1|0],x,e,f))));}
function DN(a,b,c,d){return c+b*(d-c);}
function Dr(a,b,c,d,e){var f,g;f=b&15;g=f>=8?d:c;if(f>=4)d=f!=12&&f!=14?e:c;if(f&1)g= -g;if(f&2)d= -d;return g+d;}
function AGZ(a,b,c){return Le(a,b,c,0.0);}
function A4G(a,b,c,d){return Le(a,b,c,d);}
function AQu(a,b,c,d,e,f,g,h,i,j,k,l){var m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br,bs;m=0;n=1.0/l;o=(-1);p=0.0;q=0.0;r=0.0;s=0.0;t=0;while(t<f){u=(c+t|0)*i+a.ve;v=u|0;if(u<v)v=v+(-1)|0;w=v&255;u=u-v;x=u*u*u*(u*(u*6.0-15.0)+10.0);y=0;v=w+1|0;z=u-1.0;while(y<h){ba=(e+y|0)*k+a.wv;bb=ba|0;if(ba<bb)bb=bb+(-1)|0;bc=bb&255;bd=ba-bb;be=bd*bd*bd*(bd*(bd*6.0-15.0)+10.0);bf=0;ba=bd-1.0;while(bf<g){bg=(d+bf|0)*j+a.yd;bh=bg|0;if(bg<bh)bh=bh+(-1)|0;bi=bh&255;l=bg-bh;bj=l*l*l*(l*(l
*6.0-15.0)+10.0);if(bf&&bi==o)bi=o;else{bk=a.b5.data[w]+bi|0;bl=a.b5.data[bk]+bc|0;bm=a.b5.data[bk+1|0]+bc|0;bn=a.b5.data[v]+bi|0;bo=a.b5.data[bn]+bc|0;bp=a.b5.data[bn+1|0]+bc|0;p=DN(a,x,Dr(a,a.b5.data[bl],u,l,bd),Dr(a,a.b5.data[bo],z,l,bd));bn=a.b5.data[bm];bq=l-1.0;q=DN(a,x,Dr(a,bn,u,bq,bd),Dr(a,a.b5.data[bp],z,bq,bd));r=DN(a,x,Dr(a,a.b5.data[bl+1|0],u,l,ba),Dr(a,a.b5.data[bo+1|0],z,l,ba));s=DN(a,x,Dr(a,a.b5.data[bm+1|0],u,bq,ba),Dr(a,a.b5.data[bp+1|0],z,bq,ba));}br=b.data;bs=DN(a,be,DN(a,bj,p,q),DN(a,bj,
r,s));bn=m+1|0;br[m]=br[m]+bs*n;bf=bf+1|0;m=bn;o=bi;}y=y+1|0;}t=t+1|0;}}
function Uc(){D.call(this);this.gA=null;}
function Lu(a){var b=new Uc();AJC(b,a);return b;}
function AIK(a){var b=new Uc();A0D(b,a);return b;}
function AJC(a,b){a.gA=$rt_createByteArray(b>>1);}
function A0D(a,b){a.gA=b;}
function G5(a,b,c,d){var e,f;e=b<<11|d<<7|c;f=e>>1;return !(e&1)?a.gA.data[f]&15:a.gA.data[f]>>4&15;}
function Ek(a,b,c,d,e){var f,g;f=b<<11|d<<7|c;g=f>>1;if(!(f&1))a.gA.data[g]=(a.gA.data[g]&240|e&15)<<24>>24;else a.gA.data[g]=(a.gA.data[g]&15|(e&15)<<4)<<24>>24;}
function Mj(a){return a.gA===null?0:1;}
function Vw(){Fa.call(this);}
var BmV=null;function Mn(b,c){return Long_udiv(b, c);}
function AIX(b,c){return Long_urem(b, c);}
function AL1(){BmV=F($rt_longcls());}
function TJ(){D.call(this);this.CK=null;}
function ASq(a){CM(a.CK,K3(1));}
function A4o(a){ASq(a);}
function TG(){D.call(this);this.Df=null;}
function ASx(a){CM(a.Df,K3(0));}
function AYk(a){ASx(a);}
function Rp(){D.call(this);this.By=null;}
function XS(a){CM(a.By,K3(1));}
function A8M(a){XS(a);}
function Rs(){D.call(this);this.BR=null;}
function ASh(a){CM(a.BR,K3(0));}
function A6$(a){ASh(a);}
function E1(){EV.call(this);}
var BmW=null;var Bfy=null;var BmX=null;var BmY=null;function ANb(){var b,c,d;b=new E1;FT(b,B(890),0);BmW=b;b=new E1;FT(b,B(891),1);Bfy=b;b=new E1;FT(b,B(892),2);BmX=b;c=J(E1,3);d=c.data;d[0]=BmW;d[1]=Bfy;d[2]=BmX;BmY=c;}
function Rq(){var a=this;D.call(a);a.EP=null;a.Ep=null;a.y4=null;a.vG=null;a.Bm=0;a.C9=0;a.xj=null;}
function AMJ(a){var b,c;b=a.EP.result;if(b!==null&&b.key!==null&&b.value!==null){c=$rt_str(AZS(b.key));if(c!==null&&IB(c,a.vG)&&!(!a.Bm&&Hj(c,47,Bi(a.vG)+1|0)!=(-1))){if(!(UC(b.value)?1:0))Fx(a.xj,ATr(c,0,Long_add(new Long(596067632, 383),Long_fromInt(A0H(b.value)))));else if(a.C9)Fx(a.xj,ATr(c,1,Long_fromInt(-1)));}b.continue();return;}CM(a.Ep,CZ(a.y4.data[0]));}
function A7f(a){AMJ(a);}
function Rr(){var a=this;D.call(a);a.DP=null;a.wM=null;}
function AK$(a){CM(a.DP,CZ(a.wM.data[0]<=0?(-1):a.wM.data[0]));}
function A1G(a){AK$(a);}
function Rn(){var a=this;D.call(a);a.CS=null;a.u$=null;}
function ACv(a){CM(a.CS,a.u$.result===null?BmX:!(UC(a.u$.result)?1:0)?BmW:Bfy);}
function A5P(a){ACv(a);}
function Ro(){D.call(this);this.Eh=null;}
function AB$(a){CM(a.Eh,BmX);}
function A3d(a){AB$(a);}
function Er(){D.call(this);}
function E5(a,b,c,d){return;}
function Ri(){Er.call(this);}
function GX(){var a=new Ri();A6V(a);return a;}
function A6V(a){return;}
function AEN(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=E(c,3)+4|0;h=1;if(e>=1){i=e+g|0;if((i+1|0)<=128){j=(e+1|0)+g|0;k=j-2|0;l=e;a:while(true){if(l>j){if(!h)return 0;m=e-1|0;$p=1;continue _;}n=1;if(l==e)n=0;if(l>=k)n=2;o=d-n|0;while(o<=(d+n
|0)&&h){p=f-n|0;while(p<=(f+n|0)&&h){if(l>=0&&l<128)break a;h=0;p=p+1|0;}o=o+1|0;}l=l+1|0;}$p=7;continue _;}}return 0;case 1:$z=ACy(b,d,m,f);if(C()){break _;}k=$z;L();if(!(k!=BeK.b&&k!=BeL.b)&&e<((128-g|0)-1|0)){k=BeL.b;$p=2;continue _;}return 0;case 2:ALt(b,d,m,f,k);if(C()){break _;}k=(e-3|0)+g|0;b:while(true){if(k>i){k=0;if(k>=g)return 1;o=e+k|0;$p=3;continue _;}o=k-i|0;q=1-(o/2|0)|0;r=d-q|0;l=d+q|0;m=f-q|0;h=f+q|0;while(r<=l){j=r-d|0;s=m;while(s<=h){t=s-f|0;if(If(j)!=q)break b;if(If(t)!=q)break b;if(E(c,
2)&&o)break b;s=s+1|0;}r=r+1|0;}k=k+1|0;}u=Bgt.data;$p=5;continue _;case 3:$z=ACy(b,d,o,f);if(C()){break _;}m=$z;if(m&&m!=BeW.b){k=k+1|0;if(k>=g)return 1;o=e+k|0;continue _;}m=BeV.b;$p=4;case 4:ALt(b,d,o,f,m);if(C()){break _;}k=k+1|0;if(k>=g)return 1;o=e+k|0;$p=3;continue _;case 5:$z=ACy(b,r,k,s);if(C()){break _;}t=$z;if(!u[t]){t=BeW.b;$p=6;continue _;}while(true){s=s+1|0;while(s>h){r=r+1|0;while(r>l){k=k+1|0;if(k>i){k=0;if(k>=g)return 1;o=e+k|0;$p=3;continue _;}o=k-i|0;q=1-(o/2|0)|0;r=d-q|0;l=d+q|0;m=f-q|0;h
=f+q|0;}j=r-d|0;s=m;}t=s-f|0;if(If(j)!=q)break;if(If(t)!=q)break;if(!E(c,2))continue;if(!o)continue;else break;}u=Bgt.data;continue _;case 6:ALt(b,r,k,s,t);if(C()){break _;}while(true){s=s+1|0;while(s>h){r=r+1|0;while(r>l){k=k+1|0;if(k>i){k=0;if(k>=g)return 1;o=e+k|0;$p=3;continue _;}o=k-i|0;q=1-(o/2|0)|0;r=d-q|0;l=d+q|0;m=f-q|0;h=f+q|0;}j=r-d|0;s=m;}t=s-f|0;if(If(j)!=q)break;if(If(t)!=q)break;if(!E(c,2))continue;if(!o)continue;else break;}u=Bgt.data;$p=5;continue _;case 7:$z=ACy(b,o,l,p);if(C()){break _;}r
=$z;if(r){L();if(r!=BeW.b)h=0;}while(true){p=p+1|0;while(!(p<=(f+n|0)&&h)){o=o+1|0;while(!(o<=(d+n|0)&&h)){l=l+1|0;if(l>j){if(!h)return 0;m=e-1|0;$p=1;continue _;}n=1;if(l==e)n=0;if(l>=k)n=2;o=d-n|0;}p=f-n|0;}if(l>=0&&l<128)break;h=0;}continue _;default:E$();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,$p);}
function Ow(){D.call(this);this.Jz=0;}
var BmZ=null;var Bm0=null;function AX2(a){var b=new Ow();AOb(b,a);return b;}
function AOb(a,b){a.Jz=b;}
function K3(b){return !b?Bm0:BmZ;}
function AHO(){BmZ=AX2(1);Bm0=AX2(0);}
function SR(){var a=this;CS.call(a);a.Ae=null;a.fR=null;a.xB=0;a.f2=0;}
function AD6(a){Dy(a.bG);APW(1);S(a.bG,Dj(0,(a.bm/2|0)-100|0,(a.bC/4|0)+120|0,B(598)));}
function ANI(a){APW(0);}
function AYt(a){a.xB=a.xB+1|0;}
function AHj(a,b){var c,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b.gB&&!b.cl){b=a.fR;$p=1;continue _;}return;case 1:ACh(b);if(C()){break _;}c=a.J;b=null;$p=2;case 2:ADW(c,b);if(C()){break _;}return;default:E$();}}C4().s(a,b,c,$p);}
function AC0(a,b,c){var d,e;if(c==200)a.f2=(a.f2-1|0)&3;if(!(c!=208&&c!=28))a.f2=(a.f2+1|0)&3;if(c==14&&Bi(a.fR.gt.data[a.f2])>0)a.fR.gt.data[a.f2]=Ev(a.fR.gt.data[a.f2],0,Bi(a.fR.gt.data[a.f2])-1|0);if(UI(B(893),b)>=0&&Bi(a.fR.gt.data[a.f2])<15){d=a.fR.gt.data;c=a.f2;e=new U;W(e);e=I(e,a.fR.gt.data[a.f2]);DQ(e,b);d[c]=V(e);}}
function ABu(a,b,c,d){var e,f,g,h,i,j,k,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:ABi(a);if(C()){break _;}DG(a,a.bZ,a.Ae,a.bm/2|0,40,16777215);B3();Bw(a.bm/2|0,a.bC/2|0,50.0);CC((-60.0),(-60.0),(-60.0));Bv(180.0,0.0,1.0,0.0);if(!((a.xB/6|0)%2|0))a.fR.rD=a.f2;e=a.fR;$p=2;case 2:$z=AMh(e);if(C()){break _;}f=$z;Bv((f*360|0)/16.0,0.0,1.0,0.0);e=Bkk;g=a.fR;h=(-0.5);i=(-0.75);j
=(-0.5);k=0.0;$p=3;case 3:AFp(e,g,h,i,j,k);if(C()){break _;}a.fR.rD=(-1);BE();$p=4;case 4:AFF(a,b,c,d);if(C()){break _;}return;default:E$();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function IM(){EV.call(this);this.Ab=0;}
var Bkq=null;var Bkr=null;var Bm1=null;function A_G(a,b,c){var d=new IM();AG4(d,a,b,c);return d;}
function AG4(a,b,c,d){FT(a,b,c);a.Ab=d;}
function AFw(){var b,c;Bkq=A_G(B(894),0,15);Bkr=A_G(B(895),1,0);b=J(IM,2);c=b.data;c[0]=Bkq;c[1]=Bkr;Bm1=b;}
function MH(){var a=this;D.call(a);a.nj=null;a.nW=null;}
function AZ4(a){return a.nW;}
function Tb(a,b){var c;c=a.nW;a.nW=b;return c;}
function AXE(a){return a.nj;}
function Lb(){var a=this;MH.call(a);a.db=null;a.dk=null;a.lE=0;a.jo=0;}
function M4(a){var b;b=LR(a);if(b==2){if(LR(a.dk)<0)a.dk=OZ(a.dk);return PE(a);}if(b!=(-2))return a;if(LR(a.db)>0)a.db=PE(a.db);return OZ(a);}
function LR(a){return (a.dk===null?0:a.dk.lE)-(a.db===null?0:a.db.lE)|0;}
function OZ(a){var b;b=a.db;a.db=b.dk;b.dk=a;FP(a);FP(b);return b;}
function PE(a){var b;b=a.dk;a.dk=b.db;b.db=a;FP(a);FP(b);return b;}
function FP(a){var b,c;b=a.dk===null?0:a.dk.lE;c=a.db===null?0:a.db.lE;a.lE=DE(b,c)+1|0;a.jo=1;if(a.db!==null)a.jo=a.jo+a.db.jo|0;if(a.dk!==null)a.jo=a.jo+a.dk.jo|0;}
function AOm(a,b){return b?a.dk:a.db;}
function WV(){D.call(this);}
function Bm2(){var a=new WV();AX0(a);return a;}
function AX0(a){return;}
function AI5(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br,bs,bt,bu,bv,bw,bx,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();bx=$T.l();bw=$T.l();bv=$T.l();bu=$T.l();bt=$T.l();bs=$T.l();br=$T.l();bq=$T.l();bp=$T.l();bo=$T.l();bn=$T.l();bm=$T.l();bl=$T.l();bk=$T.l();bj=$T.l();bi=$T.l();bh=$T.l();bg=$T.l();bf=$T.l();be=$T.l();bd=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p
=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:Ex(b,d,e,f,B(896),4.0,(1.0+(N(b.q)-N(b.q))*0.20000000298023224)*0.699999988079071);h=Ga();i=16;j=0;k=15.0;a:while(true){if(j>=i){l=g*2.0;m=K(d-l-1.0);n=K(d+l+1.0);o=K(e-l-1.0);p=K(e+l+1.0);q=D4(m,o,K(f-l-1.0),n,p,K(f+l+1.0));$p=1;continue _;}n=0;while(n<i){o=0;while(o<i){if(!(j&&j!=15&&n&&n!=15&&o&&o!=15)){r=j/k*2.0-1.0;s=n/k*2.0-1.0;t
=o/k*2.0-1.0;u=Ed(r*r+s*s+t*t);l=r/u;v=s/u;w=t/u;x=g*(0.699999988079071+N(b.q)*0.6000000238418579);y=0.30000001192092896;z=l*0.30000001192092896;ba=v*0.30000001192092896;bb=w*0.30000001192092896;l=d;v=e;w=f;if(x>0.0)break a;}o=o+1|0;}n=n+1|0;}j=j+1|0;}bc=K(l);bd=K(v);be=K(w);$p=9;continue _;case 1:$z=ADM(b,c,q);if(C()){break _;}q=$z;bf=BY(d,e,f);bg=0;while(true){if(bg>=CY(q)){bh=Ci();DF(bh,h);bi=CY(bh)-1|0;r=g;s=d*1.0;u=e*1.0;bj=f*1.0;if(bi<0)return;bk=Z(bh,bi);m=bk.eF;bl=bk.e0;bm=bk.eG;$p=4;continue _;}bn=
Z(q,bg);bj=Sp(bn,d,e,f)/l;if(bj<=1.0)break;bg=bg+1|0;}bo=bn.d-d;bp=bn.j-e;bq=bn.e-f;br=Ce(bo*bo+bp*bp+bq*bq);v=bo/br;w=bp/br;z=bq/br;bh=bn.L;$p=2;case 2:$z=ADC(b,bf,bh);if(C()){break _;}x=$z;bs=x;bt=(1.0-bj)*bs;m=(bt*bt+bt)/2.0*8.0*l+1.0|0;$p=3;case 3:bn.fr(c,m);if(C()){break _;}bn.g=bn.g+v*bt;bn.i=bn.i+w*bt;bn.h=bn.h+z*bt;while(true){bg=bg+1|0;if(bg>=CY(q)){bh=Ci();DF(bh,h);bi=CY(bh)-1|0;r=g;s=d*1.0;u=e*1.0;bj=f*1.0;if(bi<0)return;bk=Z(bh,bi);m=bk.eF;bl=bk.e0;bm=bk.eG;$p=4;continue _;}bn=Z(q,bg);bj=Sp(bn,d,
e,f)/l;if(bj>1.0)continue;else break;}bo=bn.d-d;bp=bn.j-e;bq=bn.e-f;br=Ce(bo*bo+bp*bp+bq*bq);v=bo/br;w=bp/br;z=bq/br;bh=bn.L;$p=2;continue _;case 4:$z=ACy(b,m,bl,bm);if(C()){break _;}bu=$z;bv=0;y=m;bw=bl;x=bm;while(bv<1){bq=y+N(b.q);l=bw+N(b.q);v=x+N(b.q);w=bq-d;z=l-e;ba=v-f;bb=Ce(w*w+z*z+ba*ba);w=w/bb;z=z/bb;ba=ba/bb;bb=0.5/(bb/r+0.1)*(N(b.q)*N(b.q)+0.30000001192092896);w=w*bb;z=z*bb;ba=ba*bb;BV(b,B(223),(bq+s)/2.0,(l+u)/2.0,(v+bj)/2.0,w,z,ba);BV(b,B(256),bq,l,v,w,z,ba);bv=bv+1|0;}if(bu>0){L();c=BeI.data[bu];$p
=5;continue _;}bi=bi+(-1)|0;if(bi<0)return;bk=Z(bh,bi);m=bk.eF;bl=bk.e0;bm=bk.eG;continue _;case 5:$z=AEL(b,m,bl,bm);if(C()){break _;}bv=$z;g=0.30000001192092896;$p=6;case 6:c.HS(b,m,bl,bm,bv,g);if(C()){break _;}bv=0;$p=7;case 7:APy(b,m,bl,bm,bv);if(C()){break _;}c=BeI.data[bu];$p=8;case 8:c.sM(b,m,bl,bm);if(C()){break _;}bi=bi+(-1)|0;if(bi<0)return;bk=Z(bh,bi);m=bk.eF;bl=bk.e0;bm=bk.eG;$p=4;continue _;case 9:$z=ACy(b,bc,bd,be);if(C()){break _;}bx=$z;if(bx>0){L();x=x-(BeI.data[bx].yr(c)+0.30000001192092896)
*y;}if(x>0.0)Xk(h,CO(bc,bd,be));l=l+z;v=v+ba;w=w+bb;x=x-0.22500000894069672;while(x<=0.0){while(true){o=o+1|0;while(o>=i){n=n+1|0;while(n>=i){j=j+1|0;if(j>=i){l=g*2.0;m=K(d-l-1.0);n=K(d+l+1.0);o=K(e-l-1.0);p=K(e+l+1.0);q=D4(m,o,K(f-l-1.0),n,p,K(f+l+1.0));$p=1;continue _;}n=0;}o=0;}if(!j)break;if(j==15)break;if(!n)break;if(n==15)break;if(!o)break;if(o!=15)continue;else break;}r=j/k*2.0-1.0;s=n/k*2.0-1.0;t=o/k*2.0-1.0;u=Ed(r*r+s*s+t*t);l=r/u;v=s/u;w=t/u;x=g*(0.699999988079071+N(b.q)*0.6000000238418579);y=0.30000001192092896;z
=l*0.30000001192092896;ba=v*0.30000001192092896;bb=w*0.30000001192092896;l=d;v=e;w=f;}bc=K(l);bd=K(v);be=K(w);continue _;default:E$();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br,bs,bt,bu,bv,bw,bx,$p);}
function ARl(){Er.call(this);}
function AYn(){var a=new ARl();A0T(a);return a;}
function A0T(a){return;}
function XQ(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=E(c,2)+2|0;h=E(c,2)+2|0;i=0;j=(d-g|0)-1|0;k=(d+g|0)+1|0;l=e-1|0;m=e+3|0;n=m+1|0;o=(f-h|0)-1|0;p=(f+h|0)+1|0;q=j;a:while(true){r=R(q,
k);if(r>0){if(i>=1&&i<=5){r=j;b:while(true){s=R(r,k);if(s>0){q=0;m=(g*2|0)+1|0;k=27;p=(h*2|0)+1|0;while(q<2){l=0;if(l<3){o=(d+E(c,m)|0)-g|0;j=(f+E(c,p)|0)-h|0;$p=4;continue _;}q=q+1|0;}L();k=BgO.b;$p=2;continue _;}t=m;while(true){u=R(t,l);if(u<0)break;v=o;i=R(v,p);if(i<=0)break b;t=t+(-1)|0;}r=r+1|0;}if(r!=j&&u&&v!=o&&s&&t!=n&&i){q=0;$p=15;continue _;}if(t<0){$p=8;continue _;}q=t-1|0;$p=9;continue _;}return 0;}s=l;while(true){t=R(s,n);if(t>0)break;v=o;w=R(v,p);if(w<=0)break a;s=s+1|0;}q=q+1|0;}$p=1;case 1:$z
=AB3(b,q,s,v);if(C()){break _;}x=$z;if(s==l&&!x.dw())return 0;if(!t&&!x.dw())return 0;if(!(q!=j&&r&&v!=o&&w)&&s==e){$p=5;continue _;}v=v+1|0;while(true){w=R(v,p);if(w<=0)break;s=s+1|0;while(true){t=R(s,n);if(t<=0)break;q=q+1|0;r=R(q,k);if(r>0){if(i>=1&&i<=5){r=j;c:while(true){s=R(r,k);if(s>0){q=0;m=(g*2|0)+1|0;k=27;p=(h*2|0)+1|0;while(q<2){l=0;if(l<3){o=(d+E(c,m)|0)-g|0;j=(f+E(c,p)|0)-h|0;$p=4;continue _;}q=q+1|0;}L();k=BgO.b;$p=2;continue _;}t=m;while(true){u=R(t,l);if(u<0)break;v=o;i=R(v,p);if(i<=0)break c;t
=t+(-1)|0;}r=r+1|0;}if(r!=j&&u&&v!=o&&s&&t!=n&&i){q=0;$p=15;continue _;}if(t<0){$p=8;continue _;}q=t-1|0;$p=9;continue _;}return 0;}s=l;}v=o;}continue _;case 2:APy(b,d,e,f,k);if(C()){break _;}$p=3;case 3:$z=ANy(b,d,e,f);if(C()){break _;}b=$z;b.jO=ADH(a,c);return 1;case 4:$z=ACy(b,o,e,j);if(C()){break _;}r=$z;if(!r){u=0;r=o-1|0;$p=6;continue _;}l=l+1|0;while(true){if(l<3){o=(d+E(c,m)|0)-g|0;j=(f+E(c,p)|0)-h|0;continue _;}q=q+1|0;if(q>=2)break;l=0;}L();k=BgO.b;$p=2;continue _;case 5:$z=ACy(b,q,s,v);if(C()){break _;}u
=$z;if(!u){u=s+1|0;$p=7;continue _;}v=v+1|0;while(true){w=R(v,p);if(w<=0)break;s=s+1|0;while(true){t=R(s,n);if(t<=0)break;q=q+1|0;r=R(q,k);if(r>0){if(i>=1&&i<=5){r=j;b:while(true){s=R(r,k);if(s>0){q=0;m=(g*2|0)+1|0;k=27;p=(h*2|0)+1|0;while(q<2){l=0;if(l<3){o=(d+E(c,m)|0)-g|0;j=(f+E(c,p)|0)-h|0;$p=4;continue _;}q=q+1|0;}L();k=BgO.b;$p=2;continue _;}t=m;while(true){u=R(t,l);if(u<0)break;v=o;i=R(v,p);if(i<=0)break b;t=t+(-1)|0;}r=r+1|0;}if(r!=j&&u&&v!=o&&s&&t!=n&&i){q=0;$p=15;continue _;}if(t<0){$p=8;continue _;}q
=t-1|0;$p=9;continue _;}return 0;}s=l;}v=o;}$p=1;continue _;case 6:$z=AB3(b,r,e,j);if(C()){break _;}x=$z;if(x.dw())u=1;r=o+1|0;$p=10;continue _;case 7:$z=ACy(b,q,u,v);if(C()){break _;}u=$z;if(!u)i=i+1|0;v=v+1|0;while(true){w=R(v,p);if(w<=0)break;s=s+1|0;while(true){t=R(s,n);if(t<=0)break;q=q+1|0;r=R(q,k);if(r>0){if(i>=1&&i<=5){r=j;d:while(true){s=R(r,k);if(s>0){q=0;m=(g*2|0)+1|0;k=27;p=(h*2|0)+1|0;while(q<2){l=0;if(l<3){o=(d+E(c,m)|0)-g|0;j=(f+E(c,p)|0)-h|0;$p=4;continue _;}q=q+1|0;}L();k=BgO.b;$p=2;continue _;}t
=m;while(true){u=R(t,l);if(u<0)break;v=o;i=R(v,p);if(i<=0)break d;t=t+(-1)|0;}r=r+1|0;}if(r!=j&&u&&v!=o&&s&&t!=n&&i){q=0;$p=15;continue _;}if(t<0){$p=8;continue _;}q=t-1|0;$p=9;continue _;}return 0;}s=l;}v=o;}$p=1;continue _;case 8:$z=AB3(b,r,t,v);if(C()){break _;}x=$z;if(x.dw()){if(!u&&E(c,4)){L();q=BeZ.b;$p=14;continue _;}L();q=BeS.b;$p=12;continue _;}v=v+1|0;while(true){i=R(v,p);if(i<=0)break;t=t+(-1)|0;while(true){u=R(t,l);if(u>=0)break;r=r+1|0;s=R(r,k);if(s>0){q=0;m=(g*2|0)+1|0;k=27;p=(h*2|0)+1|0;while
(q<2){l=0;if(l<3){o=(d+E(c,m)|0)-g|0;j=(f+E(c,p)|0)-h|0;$p=4;continue _;}q=q+1|0;}L();k=BgO.b;$p=2;continue _;}t=m;}v=o;}if(r!=j&&u&&v!=o&&s&&t!=n&&i){q=0;$p=15;continue _;}if(t<0){continue _;}q=t-1|0;$p=9;case 9:$z=AB3(b,r,q,v);if(C()){break _;}x=$z;if(x.dw()){$p=8;continue _;}q=0;$p=11;continue _;case 10:$z=AB3(b,r,e,j);if(C()){break _;}x=$z;if(x.dw())u=u+1|0;r=j-1|0;$p=13;continue _;case 11:APy(b,r,t,v,q);if(C()){break _;}v=v+1|0;while(true){i=R(v,p);if(i<=0)break;t=t+(-1)|0;while(true){u=R(t,l);if(u>=0)break;r
=r+1|0;s=R(r,k);if(s>0){q=0;m=(g*2|0)+1|0;k=27;p=(h*2|0)+1|0;while(q<2){l=0;if(l<3){o=(d+E(c,m)|0)-g|0;j=(f+E(c,p)|0)-h|0;$p=4;continue _;}q=q+1|0;}L();k=BgO.b;$p=2;continue _;}t=m;}v=o;}if(r!=j&&u&&v!=o&&s&&t!=n&&i){q=0;$p=15;continue _;}if(t<0){$p=8;continue _;}q=t-1|0;$p=9;continue _;case 12:APy(b,r,t,v,q);if(C()){break _;}v=v+1|0;while(true){i=R(v,p);if(i<=0)break;t=t+(-1)|0;while(true){u=R(t,l);if(u>=0)break;r=r+1|0;s=R(r,k);if(s>0){q=0;m=(g*2|0)+1|0;k=27;p=(h*2|0)+1|0;while(q<2){l=0;if(l<3){o=(d+E(c,m)
|0)-g|0;j=(f+E(c,p)|0)-h|0;$p=4;continue _;}q=q+1|0;}L();k=BgO.b;$p=2;continue _;}t=m;}v=o;}if(r!=j&&u&&v!=o&&s&&t!=n&&i){q=0;$p=15;continue _;}if(t<0){$p=8;continue _;}q=t-1|0;$p=9;continue _;case 13:$z=AB3(b,o,e,r);if(C()){break _;}x=$z;if(x.dw())u=u+1|0;r=j+1|0;$p=16;continue _;case 14:APy(b,r,t,v,q);if(C()){break _;}v=v+1|0;while(true){i=R(v,p);if(i<=0)break;t=t+(-1)|0;while(true){u=R(t,l);if(u>=0)break;r=r+1|0;s=R(r,k);if(s>0){q=0;m=(g*2|0)+1|0;k=27;p=(h*2|0)+1|0;while(q<2){l=0;if(l<3){o=(d+E(c,m)|0)-g
|0;j=(f+E(c,p)|0)-h|0;$p=4;continue _;}q=q+1|0;}L();k=BgO.b;$p=2;continue _;}t=m;}v=o;}if(r!=j&&u&&v!=o&&s&&t!=n&&i){q=0;$p=15;continue _;}if(t<0){$p=8;continue _;}q=t-1|0;$p=9;continue _;case 15:APy(b,r,t,v,q);if(C()){break _;}v=v+1|0;while(true){i=R(v,p);if(i<=0)break;t=t+(-1)|0;while(true){u=R(t,l);if(u>=0)break;r=r+1|0;s=R(r,k);if(s>0){q=0;m=(g*2|0)+1|0;k=27;p=(h*2|0)+1|0;while(q<2){l=0;if(l<3){o=(d+E(c,m)|0)-g|0;j=(f+E(c,p)|0)-h|0;$p=4;continue _;}q=q+1|0;}L();k=BgO.b;$p=2;continue _;}t=m;}v=o;}if(r!=j
&&u&&v!=o&&s&&t!=n&&i){q=0;continue _;}if(t<0){$p=8;continue _;}q=t-1|0;$p=9;continue _;case 16:$z=AB3(b,o,e,r);if(C()){break _;}x=$z;if(x.dw())u=u+1|0;if(u==1){L();r=BgQ.b;$p=17;continue _;}l=l+1|0;while(true){if(l<3){o=(d+E(c,m)|0)-g|0;j=(f+E(c,p)|0)-h|0;$p=4;continue _;}q=q+1|0;if(q>=2)break;l=0;}L();k=BgO.b;$p=2;continue _;case 17:APy(b,o,e,j,r);if(C()){break _;}$p=18;case 18:$z=ANy(b,o,e,j);if(C()){break _;}x=$z;y=x;n=0;while(n<8){z=AHp(a,c);if(z!==null)AHB(y,E(c,k),z);n=n+1|0;}while(true){q=q+1|0;if(q
>=2)break;l=0;if(l>=3)continue;else{o=(d+E(c,m)|0)-g|0;j=(f+E(c,p)|0)-h|0;$p=4;continue _;}}L();k=BgO.b;$p=2;continue _;default:E$();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,$p);}
function AHp(a,b){var c,d;a:{c=E(b,10);if(!c){d=new Cd;BB();DD(d,BiB);break a;}if(c==1){d=new Cd;BB();Gq(d,BhJ,E(b,4)+1|0);break a;}if(c==2){d=new Cd;BB();DD(d,Bh$);break a;}if(c==3){d=new Cd;BB();Gq(d,Bhw,E(b,4)+1|0);break a;}if(c==4){d=new Cd;BB();Gq(d,Bf9,E(b,4)+1|0);break a;}if(c==5){d=new Cd;BB();Gq(d,Bf$,E(b,4)+1|0);break a;}if(c==6){d=new Cd;BB();DD(d,Bix);break a;}if(c==7&&!E(b,100)){d=new Cd;BB();DD(d,Biv);break a;}d=null;}return d;}
function ADH(a,b){var c;c=E(b,4);return !c?B(861):c==1?B(864):c==2?B(864):c!=3?B(3):B(862);}
function Ch(){var a=this;Er.call(a);a.zX=0;a.c3=0;}
function Bm3(a,b){var c=new Ch();Cm(c,a,b);return c;}
function Cm(a,b,c){a.zX=b;a.c3=c;}
function ABU(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();bf=$T.l();be=$T.l();bd=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=N(c)*3.1415927410125732;h=d+8|0;i=h+Bq(g)*a.c3/8.0;j=
h-Bq(g)*a.c3/8.0;h=f+8|0;k=h+BC(g)*a.c3/8.0;l=h-BC(g)*a.c3/8.0;m=(e+E(c,3)|0)+2|0;n=(e+E(c,3)|0)+2|0;o=0;j=j-i;n=n-m;p=l-k;while(o<=a.c3){q=o;r=i+j*q/a.c3;s=m+n*q/a.c3;t=k+p*q/a.c3;q=Cl(c)*a.c3/16.0;h=o*3.1415927410125732;u=(Bq(h/a.c3)+1.0)*q+1.0;v=(Bq(h/a.c3)+1.0)*q+1.0;q=u/2.0;w=r-q|0;e=r+q|0;l=v/2.0;f=s-l|0;x=s+l|0;y=t-q|0;z=t+q|0;while(w<=e){ba=f;while(ba<=x){bb=y;while(bb<=z){bc=(w+0.5-r)/q;bd=(ba+0.5-s)/l;be=(bb+0.5-t)/q;if(bc*bc+bd*bd+be*be<1.0){$p=1;continue _;}bb=bb+1|0;}ba=ba+1|0;}w=w+1|0;}o=o+1|0;}return 1;case 1:$z
=ACy(b,w,ba,bb);if(C()){break _;}bf=$z;L();if(bf==BeO.b){d=a.zX;$p=2;continue _;}a:while(true){bb=bb+1|0;while(bb>z){ba=ba+1|0;while(ba>x){w=w+1|0;while(w>e){o=o+1|0;if(o>a.c3)break a;q=o;r=i+j*q/a.c3;s=m+n*q/a.c3;t=k+p*q/a.c3;q=Cl(c)*a.c3/16.0;h=o*3.1415927410125732;u=(Bq(h/a.c3)+1.0)*q+1.0;v=(Bq(h/a.c3)+1.0)*q+1.0;q=u/2.0;w=r-q|0;e=r+q|0;l=v/2.0;f=s-l|0;x=s+l|0;y=t-q|0;z=t+q|0;}ba=f;}bb=y;}bc=(w+0.5-r)/q;bd=(ba+0.5-s)/l;be=(bb+0.5-t)/q;if(bc*bc+bd*bd+be*be>=1.0)continue;else{continue _;}}return 1;case 2:ALt(b,
w,ba,bb,d);if(C()){break _;}b:while(true){bb=bb+1|0;while(bb>z){ba=ba+1|0;while(ba>x){w=w+1|0;while(w>e){o=o+1|0;if(o>a.c3)break b;q=o;r=i+j*q/a.c3;s=m+n*q/a.c3;t=k+p*q/a.c3;q=Cl(c)*a.c3/16.0;h=o*3.1415927410125732;u=(Bq(h/a.c3)+1.0)*q+1.0;v=(Bq(h/a.c3)+1.0)*q+1.0;q=u/2.0;w=r-q|0;e=r+q|0;l=v/2.0;f=s-l|0;x=s+l|0;y=t-q|0;z=t+q|0;}ba=f;}bb=y;}bc=(w+0.5-r)/q;bd=(ba+0.5-s)/l;be=(bb+0.5-t)/q;if(bc*bc+bd*bd+be*be>=1.0)continue;else{$p=1;continue _;}}return 1;default:E$();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,
r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,$p);}
function BQ(){Er.call(this);this.ud=0;}
function Bm4(a){var b=new BQ();BR(b,a);return b;}
function BR(a,b){a.ud=b;}
function ACQ(a,b,c,d,e,f){var g,h,i,j,k,l,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=0;if(g>=64)return 1;h=(d+E(c,8)|0)-E(c,8)|0;i=(e+E(c,4)|0)-E(c,4)|0;j=(f+E(c,8)|0)-E(c,8)|0;$p=1;case 1:$z=ACy(b,h,i,j);if(C()){break _;}k=$z;if(!k){L();l=BeI.data[a.ud];$p=2;continue _;}g=g+1|0;if(g>=64)return 1;h=(d+E(c,8)|0)-E(c,8)|0;i=(e+E(c,4)|0)-E(c,4)|0;j=(f+E(c,8)|0)-E(c,8)|0;continue _;case 2:$z
=l.Hb(b,h,i,j);if(C()){break _;}k=$z;if(k){k=a.ud;$p=3;continue _;}g=g+1|0;if(g>=64)return 1;h=(d+E(c,8)|0)-E(c,8)|0;i=(e+E(c,4)|0)-E(c,4)|0;j=(f+E(c,8)|0)-E(c,8)|0;$p=1;continue _;case 3:ALt(b,h,i,j,k);if(C()){break _;}g=g+1|0;if(g>=64)return 1;h=(d+E(c,8)|0)-E(c,8)|0;i=(e+E(c,4)|0)-E(c,4)|0;j=(f+E(c,8)|0)-E(c,8)|0;$p=1;continue _;default:E$();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,$p);}
function Cn(){Er.call(this);this.ET=0;}
function Bm5(a){var b=new Cn();Cs(b,a);return b;}
function Cs(a,b){a.ET=b;}
function AL2(a,b,c,d,e,f){var g,h,i,j,k,l,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=e+1|0;$p=1;case 1:$z=ACy(b,d,g,f);if(C()){break _;}g=$z;L();if(g!=BeO.b)return 0;g=e-1|0;$p=2;case 2:$z=ACy(b,d,g,f);if(C()){break _;}h=$z;if(h!=BeO.b)return 0;$p=3;case 3:$z=ACy(b,d,e,f);if(C()){break _;}g=$z;if(g){$p=5;continue _;}g=0;h=d-1|0;$p=4;case 4:$z=ACy(b,h,e,f);if(C()){break _;}i
=$z;if(i==BeO.b)g=1;i=d+1|0;$p=6;continue _;case 5:$z=ACy(b,d,e,f);if(C()){break _;}g=$z;if(g!=BeO.b)return 0;g=0;h=d-1|0;$p=4;continue _;case 6:$z=ACy(b,i,e,f);if(C()){break _;}j=$z;if(j==BeO.b)g=g+1|0;k=f-1|0;$p=7;case 7:$z=ACy(b,d,e,k);if(C()){break _;}j=$z;if(j==BeO.b)g=g+1|0;j=f+1|0;$p=8;case 8:$z=ACy(b,d,e,j);if(C()){break _;}l=$z;if(l==BeO.b)g=g+1|0;l=0;$p=9;case 9:$z=ACy(b,h,e,f);if(C()){break _;}h=$z;if(!h)l=1;$p=10;case 10:$z=ACy(b,i,e,f);if(C()){break _;}h=$z;if(!h)l=l+1|0;$p=11;case 11:$z=ACy(b,
d,e,k);if(C()){break _;}h=$z;if(!h)l=l+1|0;$p=12;case 12:$z=ACy(b,d,e,j);if(C()){break _;}h=$z;if(!h)l=l+1|0;if(g==3&&l==1){g=a.ET;$p=13;continue _;}return 1;case 13:APy(b,d,e,f,g);if(C()){break _;}return 1;default:E$();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,$p);}
function SG(){C2.call(this);}
function Za(a){var b,c,d,e,f,g,h,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.bS=a.d;a.cS=a.j;a.bR=a.e;a.i=a.i+0.002;b=a.g;c=a.i;d=a.h;$p=1;case 1:ARG(a,b,c,d);if(C()){break _;}a.g=a.g*0.8500000238418579;a.i=a.i*0.8500000238418579;a.h=a.h*0.8500000238418579;e=a.l;f=K(a.d);g=K(a.j);h=K(a.e);$p=2;case 2:$z=AB3(e,f,g,h);if(C()){break _;}e=$z;if(e!==BfJ){$p=3;continue _;}f=a.cw;a.cw=f-1|0;if(f>0)return;$p=4;continue _;case 3:Cb(a);if
(C()){break _;}f=a.cw;a.cw=f-1|0;if(f>0)return;$p=4;case 4:Cb(a);if(C()){break _;}return;default:E$();}}C4().s(a,b,c,d,e,f,g,h,$p);}
function AFq(){C2.call(this);this.Cs=0.0;}
function A75(a,b,c,d,e){var f=new AFq();AV4(f,a,b,c,d,e);return f;}
function AV4(a,b,c,d,e,f){var g;FD(a,b,c,d,e,0.0,0.0,0.0);a.g=a.g*0.10000000149011612;a.i=a.i*0.10000000149011612;a.h=a.h*0.10000000149011612;g=BO()*0.30000001192092896;a.io=g;a.ic=g;a.hY=g;a.dr=a.dr*0.75;a.dr=a.dr*f;a.Cs=a.dr;a.cw=8.0/(BO()*0.8+0.2)|0;a.cw=a.cw*f|0;a.o5=0;}
function AJ7(a,b,c,d,e,f,g,h){var i,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:i=(a.dq+c)/a.cw*32.0;if(i<0.0)i=0.0;if(i>1.0)i=1.0;a.dr=a.Cs*i;$p=1;case 1:ANu(a,b,c,d,e,f,g,h);if(C()){break _;}return;default:E$();}}C4().s(a,b,c,d,e,f,g,h,i,$p);}
function ALU(a){var b,c,d,e,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.bS=a.d;a.cS=a.j;a.bR=a.e;b=a.dq;a.dq=b+1|0;if(b>=a.cw){$p=2;continue _;}a.e7=7-((a.dq*8|0)/a.cw|0)|0;a.i=a.i+0.004;c=a.g;d=a.i;e=a.h;$p=1;case 1:ARG(a,c,d,e);if(C()){break _;}if(a.j===a.cS){a.g=a.g*1.1;a.h=a.h*1.1;}a.g=a.g*0.9599999785423279;a.i=a.i*0.9599999785423279;a.h=a.h*0.9599999785423279;if(a.cx){a.g=a.g*0.699999988079071;a.h=a.h*0.699999988079071;}return;case 2:Cb(a);if
(C()){break _;}a.e7=7-((a.dq*8|0)/a.cw|0)|0;a.i=a.i+0.004;c=a.g;d=a.i;e=a.h;$p=1;continue _;default:E$();}}C4().s(a,b,c,d,e,$p);}
function Q6(){C2.call(this);}
function AR$(a,b,c,d,e,f,g,h){var $p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:ANu(a,b,c,d,e,f,g,h);if(C()){break _;}return;default:E$();}}C4().s(a,b,c,d,e,f,g,h,$p);}
function AEU(a){var b,c,d,e,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.bS=a.d;a.cS=a.j;a.bR=a.e;b=a.dq;a.dq=b+1|0;if(b>=a.cw){$p=2;continue _;}a.e7=7-((a.dq*8|0)/a.cw|0)|0;a.i=a.i+0.004;c=a.g;d=a.i;e=a.h;$p=1;case 1:ARG(a,c,d,e);if(C()){break _;}a.g=a.g*0.8999999761581421;a.i=a.i*0.8999999761581421;a.h=a.h*0.8999999761581421;if(a.cx){a.g=a.g*0.699999988079071;a.h=a.h*0.699999988079071;}return;case 2:Cb(a);if(C()){break _;}a.e7=7-
((a.dq*8|0)/a.cw|0)|0;a.i=a.i+0.004;c=a.g;d=a.i;e=a.h;$p=1;continue _;default:E$();}}C4().s(a,b,c,d,e,$p);}
function O7(){C2.call(this);this.DQ=0.0;}
function AQJ(a,b,c,d,e,f,g,h){var i,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:i=(a.dq+c)/a.cw;a.dr=a.DQ*(1.0-i*i*0.5);$p=1;case 1:ANu(a,b,c,d,e,f,g,h);if(C()){break _;}return;default:E$();}}C4().s(a,b,c,d,e,f,g,h,i,$p);}
function ASv(a,b){var c,d,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=(a.dq+b)/a.cw;if(c<0.0)c=0.0;if(c>1.0)c=1.0;$p=1;case 1:$z=ADJ(a,b);if(C()){break _;}d=$z;return d*c+1.0-c;default:E$();}}C4().s(a,b,c,d,$p);}
function AAT(a){var b,c,d,e,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.bS=a.d;a.cS=a.j;a.bR=a.e;b=a.dq;a.dq=b+1|0;if(b>=a.cw){$p=2;continue _;}c=a.g;d=a.i;e=a.h;$p=1;case 1:ARG(a,c,d,e);if(C()){break _;}a.g=a.g*0.9599999785423279;a.i=a.i*0.9599999785423279;a.h=a.h*0.9599999785423279;if(a.cx){a.g=a.g*0.699999988079071;a.h=a.h*0.699999988079071;}return;case 2:Cb(a);if(C()){break _;}c=a.g;d=a.i;e=a.h;$p=1;continue _;default:E$();}}C4().s(a,
b,c,d,e,$p);}
function AA4(){C2.call(this);this.yU=0.0;}
function BcB(a,b,c,d){var e=new AA4();A1J(e,a,b,c,d);return e;}
function A1J(a,b,c,d,e){FD(a,b,c,d,e,0.0,0.0,0.0);a.g=a.g*0.800000011920929;a.i=a.i*0.800000011920929;a.h=a.h*0.800000011920929;a.i=N(a.m)*0.4000000059604645+0.05000000074505806;a.io=1.0;a.ic=1.0;a.hY=1.0;a.dr=a.dr*(N(a.m)*2.0+0.20000000298023224);a.yU=a.dr;a.cw=16.0/(BO()*0.8+0.2)|0;a.o5=0;a.e7=49;}
function AJ8(a,b){return 1.0;}
function AGU(a,b,c,d,e,f,g,h){var i,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:i=(a.dq+c)/a.cw;a.dr=a.yU*(1.0-i*i);$p=1;case 1:ANu(a,b,c,d,e,f,g,h);if(C()){break _;}return;default:E$();}}C4().s(a,b,c,d,e,f,g,h,i,$p);}
function ALj(a){var b,c,d,e,f,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.bS=a.d;a.cS=a.j;a.bR=a.e;b=a.dq;a.dq=b+1|0;if(b>=a.cw){$p=1;continue _;}c=a.dq/a.cw;if(N(a.m)>c)BV(a.l,B(256),a.d,a.j,a.e,a.g,a.i,a.h);a.i=a.i-0.03;d=a.g;e=a.i;f=a.h;$p=2;continue _;case 1:Cb(a);if(C()){break _;}c=a.dq/a.cw;if(N(a.m)>c)BV(a.l,B(256),a.d,a.j,a.e,a.g,a.i,a.h);a.i=a.i-0.03;d=a.g;e=a.i;f=a.h;$p=2;case 2:ARG(a,d,e,f);if(C()){break _;}a.g
=a.g*0.9990000128746033;a.i=a.i*0.9990000128746033;a.h=a.h*0.9990000128746033;if(a.cx){a.g=a.g*0.699999988079071;a.h=a.h*0.699999988079071;}return;default:E$();}}C4().s(a,b,c,d,e,f,$p);}
function ARD(){JQ.call(this);}
function Bco(a,b,c,d,e,f,g){var h=new ARD();AVR(h,a,b,c,d,e,f,g);return h;}
function AVR(a,b,c,d,e,f,g,h){TS(a,b,c,d,e);a.m7=0.03999999910593033;a.e7=a.e7+1|0;if(g===0.0&&!(f===0.0&&h===0.0)){a.g=f;a.i=g+0.1;a.h=h;}}
function AIq(){D.call(this);}
function Bm6(){var a=new AIq();AWT(a);return a;}
function AWT(a){return;}
function H$(){var a=this;D.call(a);a.dj=null;a.bu=0;a.bq=0;a.bt=0;a.fQ=0;a.bD=null;a.e5=null;}
function Bm7(a,b,c,d,e){var f=new H$();YT(f,a,b,c,d,e);return f;}
function YT(a,b,c,d,e,f){var $p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.e5=b;a.bD=Ci();a.dj=c;a.bu=d;a.bq=e;a.bt=f;$p=1;case 1:$z=AEL(c,d,e,f);if(C()){break _;}d=$z;a.fQ=d;K0(a);return;default:E$();}}C4().s(a,b,c,d,e,f,$p);}
function K0(a){a:{Dy(a.bD);if(!a.fQ){S(a.bD,CO(a.bu,a.bq,a.bt-1|0));S(a.bD,CO(a.bu,a.bq,a.bt+1|0));break a;}if(a.fQ==1){S(a.bD,CO(a.bu-1|0,a.bq,a.bt));S(a.bD,CO(a.bu+1|0,a.bq,a.bt));break a;}if(a.fQ==2){S(a.bD,CO(a.bu-1|0,a.bq,a.bt));S(a.bD,CO(a.bu+1|0,a.bq+1|0,a.bt));break a;}if(a.fQ==3){S(a.bD,CO(a.bu-1|0,a.bq+1|0,a.bt));S(a.bD,CO(a.bu+1|0,a.bq,a.bt));break a;}if(a.fQ==4){S(a.bD,CO(a.bu,a.bq+1|0,a.bt-1|0));S(a.bD,CO(a.bu,a.bq,a.bt+1|0));break a;}if(a.fQ==5){S(a.bD,CO(a.bu,a.bq,a.bt-1|0));S(a.bD,CO(a.bu,a.bq
+1|0,a.bt+1|0));break a;}if(a.fQ==6){S(a.bD,CO(a.bu+1|0,a.bq,a.bt));S(a.bD,CO(a.bu,a.bq,a.bt+1|0));break a;}if(a.fQ==7){S(a.bD,CO(a.bu-1|0,a.bq,a.bt));S(a.bD,CO(a.bu,a.bq,a.bt+1|0));break a;}if(a.fQ==8){S(a.bD,CO(a.bu-1|0,a.bq,a.bt));S(a.bD,CO(a.bu,a.bq,a.bt-1|0));break a;}if(a.fQ!=9)break a;S(a.bD,CO(a.bu+1|0,a.bq,a.bt));S(a.bD,CO(a.bu,a.bq,a.bt-1|0));}}
function AFH(a){var b,c,d,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=0;if(b>=a.bD.s)return;c=Z(a.bD,b);$p=1;case 1:$z=AQ9(a,c);if(C()){break _;}c=$z;if(c!==null&&SX(c,a)){Re(a.bD,b,CO(c.bu,c.bq,c.bt));d=b;}else{c=a.bD;d=b+(-1)|0;En(c,b);}b=d+1|0;if(b>=a.bD.s)return;c=Z(a.bD,b);continue _;default:E$();}}C4().s(a,b,c,d,$p);}
function AQ9(a,b){var c,d,e,f,g,h,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.dj;d=b.eF;e=b.e0;f=b.eG;$p=1;case 1:$z=ACy(c,d,e,f);if(C()){break _;}d=$z;if(d!=a.e5.b){c=a.dj;d=b.eF;e=b.e0+1|0;f=b.eG;$p=2;continue _;}c=new H$;g=a.e5;h=a.dj;d=b.eF;e=b.e0;f=b.eG;$p=3;continue _;case 2:$z=ACy(c,d,e,f);if(C()){break _;}d=$z;if(d!=a.e5.b){c=a.dj;d=b.eF;e=b.e0-1|0;f=b.eG;$p=4;continue _;}c=new H$;g=a.e5;h=a.dj;d
=b.eF;e=b.e0+1|0;f=b.eG;$p=5;continue _;case 3:YT(c,g,h,d,e,f);if(C()){break _;}return c;case 4:$z=ACy(c,d,e,f);if(C()){break _;}d=$z;if(d!=a.e5.b){c=null;return c;}c=new H$;g=a.e5;h=a.dj;e=b.eF;d=b.e0-1|0;f=b.eG;$p=6;continue _;case 5:YT(c,g,h,d,e,f);if(C()){break _;}return c;case 6:YT(c,g,h,e,d,f);if(C()){break _;}return c;default:E$();}}C4().s(a,b,c,d,e,f,g,h,$p);}
function SX(a,b){var c,d;c=0;while(c<a.bD.s){d=Z(a.bD,c);if(d.eF==b.bu&&d.eG==b.bt)return 1;c=c+1|0;}return 0;}
function KP(a,b,c,d){var e,f;e=0;while(e<a.bD.s){f=Z(a.bD,e);if(f.eF==b&&f.eG==d)return 1;e=e+1|0;}return 0;}
function O_(a,b){var c;if(SX(a,b))return 1;if(a.bD.s==2)return 0;if(!a.bD.s)return 1;c=Z(a.bD,0);return b.bq==a.bq&&c.e0==a.bq?1:1;}
function ARN(a,b){var c,d,e,f,g,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:S(a.bD,CO(b.bu,b.bq,b.bt));c=KP(a,a.bu,a.bq,a.bt-1|0);d=KP(a,a.bu,a.bq,a.bt+1|0);e=KP(a,a.bu-1|0,a.bq,a.bt);f=KP(a,a.bu+1|0,a.bq,a.bt);g=(-1);if(!(!c&&!d))g=0;if(!(!e&&!f))g=1;if(d&&f&&!c&&!e)g=6;if(d&&e&&!c&&!f)g=7;if(c&&e&&!d&&!f)g=8;if(c&&f&&!d&&!e)g=9;if(!g){b=a.dj;c=a.bu;d=a.bq+1|0;e=a.bt-1|0;$p=1;continue _;}if(g==1){b=a.dj;c=a.bu+1|0;d
=a.bq+1|0;e=a.bt;$p=2;continue _;}if(g<0)g=0;b=a.dj;c=a.bu;d=a.bq;e=a.bt;$p=5;continue _;case 1:$z=ACy(b,c,d,e);if(C()){break _;}c=$z;if(c==a.e5.b)g=4;b=a.dj;c=a.bu;d=a.bq+1|0;e=a.bt+1|0;$p=3;continue _;case 2:$z=ACy(b,c,d,e);if(C()){break _;}c=$z;if(c==a.e5.b)g=2;b=a.dj;c=a.bu-1|0;d=a.bq+1|0;e=a.bt;$p=4;continue _;case 3:$z=ACy(b,c,d,e);if(C()){break _;}c=$z;if(c==a.e5.b)g=5;if(g==1){b=a.dj;c=a.bu+1|0;d=a.bq+1|0;e=a.bt;$p=2;continue _;}if(g<0)g=0;b=a.dj;c=a.bu;d=a.bq;e=a.bt;$p=5;continue _;case 4:$z=ACy(b,
c,d,e);if(C()){break _;}c=$z;if(c==a.e5.b)g=3;if(g<0)g=0;b=a.dj;c=a.bu;d=a.bq;e=a.bt;$p=5;case 5:AKw(b,c,d,e,g);if(C()){break _;}return;default:E$();}}C4().s(a,b,c,d,e,f,g,$p);}
function AI2(a,b,c,d){var e,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=CO(b,c,d);$p=1;case 1:$z=AQ9(a,e);if(C()){break _;}e=$z;if(e===null)return 0;$p=2;case 2:AFH(e);if(C()){break _;}return O_(e,a);default:E$();}}C4().s(a,b,c,d,e,$p);}
function YS(a){var b,c,d,e,f,g,h,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.bu;c=a.bq;d=a.bt-1|0;$p=1;case 1:$z=AI2(a,b,c,d);if(C()){break _;}d=$z;b=a.bu;c=a.bq;e=a.bt+1|0;$p=2;case 2:$z=AI2(a,b,c,e);if(C()){break _;}b=$z;c=a.bu-1|0;e=a.bq;f=a.bt;$p=3;case 3:$z=AI2(a,c,e,f);if(C()){break _;}c=$z;e=a.bu+1|0;f=a.bq;g=a.bt;$p=4;case 4:$z=AI2(a,e,f,g);if(C()){break _;}e=$z;f=(-1);if(!(!d&&!b))f=0;if(!(!c&&
!e))f=1;if(b&&e&&!d&&!c)f=6;if(b&&c&&!d&&!e)f=7;if(d&&c&&!b&&!e)f=8;if(d&&e&&!b&&!c)f=9;if(!f){h=a.dj;d=a.bu;b=a.bq+1|0;c=a.bt-1|0;$p=5;continue _;}if(f==1){h=a.dj;d=a.bu+1|0;b=a.bq+1|0;c=a.bt;$p=6;continue _;}if(f<0)f=0;a.fQ=f;K0(a);h=a.dj;d=a.bu;b=a.bq;c=a.bt;$p=9;continue _;case 5:$z=ACy(h,d,b,c);if(C()){break _;}d=$z;if(d==a.e5.b)f=4;h=a.dj;d=a.bu;b=a.bq+1|0;c=a.bt+1|0;$p=7;continue _;case 6:$z=ACy(h,d,b,c);if(C()){break _;}d=$z;if(d==a.e5.b)f=2;h=a.dj;d=a.bu-1|0;b=a.bq+1|0;c=a.bt;$p=8;continue _;case 7:$z
=ACy(h,d,b,c);if(C()){break _;}b=$z;if(b==a.e5.b)f=5;if(f==1){h=a.dj;d=a.bu+1|0;b=a.bq+1|0;c=a.bt;$p=6;continue _;}if(f<0)f=0;a.fQ=f;K0(a);h=a.dj;d=a.bu;b=a.bq;c=a.bt;$p=9;continue _;case 8:$z=ACy(h,d,b,c);if(C()){break _;}d=$z;if(d==a.e5.b)f=3;if(f<0)f=0;a.fQ=f;K0(a);h=a.dj;d=a.bu;b=a.bq;c=a.bt;$p=9;case 9:AKw(h,d,b,c,f);if(C()){break _;}g=0;if(g>=a.bD.s)return;h=Z(a.bD,g);$p=10;case 10:$z=AQ9(a,h);if(C()){break _;}h=$z;if(h!==null){$p=11;continue _;}g=g+1|0;if(g>=a.bD.s)return;h=Z(a.bD,g);continue _;case 11:AFH(h);if
(C()){break _;}if(O_(h,a)){$p=12;continue _;}g=g+1|0;if(g>=a.bD.s)return;h=Z(a.bD,g);$p=10;continue _;case 12:ARN(h,a);if(C()){break _;}g=g+1|0;if(g>=a.bD.s)return;h=Z(a.bD,g);$p=10;continue _;default:E$();}}C4().s(a,b,c,d,e,f,g,h,$p);}
function Vn(){var a=this;D.call(a);a.pc=null;a.F2=0;a.mg=0;}
function AP4(a){a.mg=a.mg+1|0;}
function ANo(a){return a.mg<a.pc.data.length?0:1;}
function Sx(a,b){return BY(a.pc.data[a.mg].ia+(b.c1+1.0|0)*0.5,a.pc.data[a.mg].hV,a.pc.data[a.mg].il+(b.c1+1.0|0)*0.5);}
function ACd(){var a=this;D.call(a);a.x9=null;a.j_=null;a.q6=null;a.me=null;}
function A2F(a){var b=new ACd();A6l(b,a);return b;}
function A6l(a,b){a.j_=Bb3();a.q6=Df();a.me=J(HU,32);a.x9=b;}
function APs(a,b,c,d){return Pb(a,b,c.d,c.L.M,c.e,d);}
function AGa(a,b,c,d,e,f){return Pb(a,b,c+0.5,d+0.5,e+0.5,f);}
function Pb(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o;UH(a.j_);Vd(a.q6);g=IZ(a,K(b.L.R),K(b.L.M),K(b.L.S));h=IZ(a,K(c-b.c1/2.0),K(d),K(e-b.c1/2.0));i=A0x(EW(b.c1+1.0),EW(b.eO+1.0),EW(b.c1+1.0));g.mC=0.0;g.pi=EZ(g,h);g.i4=g.pi;UH(a.j_);WT(a.j_,g);j=g;a:{while(true){if(ACc(a.j_)){if(j!==g){k=UT(a,g,j);break a;}k=null;break a;}l=ARC(a.j_);if(l.mZ==h.mZ)break;if(EZ(l,h)<EZ(j,h))j=l;l.ny=1;m=AJN(a,b,l,i,h,f);n=0;while(n<m){k=a.me.data[n];o=l.mC+EZ(l,k);if(!(PA(k)&&o>=k.mC)){k.o3=l;k.mC=o;k.pi=EZ(k,h);if(PA(k))ABq(a.j_,
k,k.mC+k.pi);else{k.i4=k.mC+k.pi;WT(a.j_,k);}}n=n+1|0;}}k=UT(a,g,h);}return k;}
function AJN(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o;g=0;if(J7(a,b,c.ia,c.hV+1|0,c.il,d)>0)g=1;h=KC(a,b,c.ia,c.hV,c.il+1|0,d,g);i=KC(a,b,c.ia-1|0,c.hV,c.il,d,g);j=KC(a,b,c.ia+1|0,c.hV,c.il,d,g);k=KC(a,b,c.ia,c.hV,c.il-1|0,d,g);if(h===null)l=0;else if(h.ny)l=0;else if(EZ(h,e)>=f)l=0;else{m=a.me.data;l=1;m[0]=h;}if(i===null)n=l;else if(i.ny)n=l;else if(EZ(i,e)>=f)n=l;else{m=a.me.data;n=l+1|0;m[l]=i;}if(j===null)o=n;else if(j.ny)o=n;else if(EZ(j,e)>=f)o=n;else{m=a.me.data;o=n+1|0;m[n]=j;}if(k===null)n=o;else if(k.ny)n
=o;else if(EZ(k,e)>=f)n=o;else{m=a.me.data;n=o+1|0;m[o]=k;}return n;}
function KC(a,b,c,d,e,f,g){var h,i,j,k;h=null;if(J7(a,b,c,d,e,f)>0)h=IZ(a,c,d,e);if(h===null){g=d+g|0;if(J7(a,b,c,g,e,f)>0)h=IZ(a,c,g,e);}if(h!==null){i=0;a:{while(true){if(d<=0)break a;j=J7(a,b,c,d-1|0,e,f);if(j<=0)break a;if(j<0)return null;i=i+1|0;if(i>=4)break;d=d+(-1)|0;}return null;}if(d>0)h=IZ(a,c,d,e);k=N7(a.x9,c,d-1|0,e);if(!(k!==BfJ&&k!==BfK))return null;}return h;}
function IZ(a,b,c,d){var e,f;e=b|c<<10|d<<20;f=CP(a.q6,CZ(e));if(f===null){f=A0x(b,c,d);BP(a.q6,CZ(e),f);}return f;}
function J7(a,b,c,d,e,f){var g,h,i,j;g=c;a:{while(g<(c+f.ia|0)){h=d;while(h<(d+f.hV|0)){i=e;while(i<(e+f.il|0)){j=N7(a.x9,c,d,e);if(j.ug())return 0;if(j===BfJ)break a;if(j===BfK)break a;i=i+1|0;}h=h+1|0;}g=g+1|0;}return 1;}return (-1);}
function UT(a,b,c){var d,e,f,g;d=1;e=c;while(e.o3!==null){d=d+1|0;e=e.o3;}f=J(HU,d);g=f.data;d=d+(-1)|0;g[d]=c;while(c.o3!==null){c=c.o3;d=d+(-1)|0;g[d]=c;}b=new Vn;b.pc=f;b.F2=g.length;return b;}
function U8(){var a=this;C2.call(a);a.mz=null;a.hP=null;a.p$=0;a.rd=0;a.AV=0.0;}
function AMj(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,$p,$z;$p=0;if(Fd()){var $T=C4();$p=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:i=(a.p$+c)/a.rd;d=i*i;j=a.mz.d;k=a.mz.j;l=a.mz.e;m=a.hP.cs;n=a.hP.d-a.hP.cs;o=c;n=m+n*o;m=a.hP.b7+(a.hP.j-a.hP.b7)*o+a.AV;o=a.hP.ct+(a.hP.e-a.hP.ct)*o;n=n-j;p=d;q=j+n
*p;r=k+(m-k)*p;p=l+(o-l)*p;s=K(q);t=K(r+a.c4/2.0);u=K(p);b=a.l;$p=1;case 1:$z=ANi(b,s,t,u);if(C()){break _;}v=$z;o=q-BkG;n=r-BkH;m=p-BkI;BU(v,v,v,1.0);b=Bgh;w=a.mz;o=o;n=n;m=m;d=a.mz.u;$p=2;case 2:AQF(b,w,o,n,m,d,c);if(C()){break _;}return;default:E$();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,$p);}
function AAM(a){a.p$=a.p$+1|0;if(a.p$==a.rd)Cb(a);}
function AUx(a){return 2;}
function Y8(){var a=this;D.call(a);a.d2=null;a.eX=0;}
function Bb3(){var a=new Y8();AZ_(a);return a;}
function AZ_(a){a.d2=J(HU,1024);a.eX=0;}
function WT(a,b){var c,d;if(b.gz>=0){b=new D3;Bo(b,B(897));M(b);}if(a.eX==a.d2.data.length){c=J(HU,a.eX<<1);Ds(a.d2,0,c,0,a.eX);a.d2=c;}a.d2.data[a.eX]=b;b.gz=a.eX;d=a.eX;a.eX=d+1|0;U6(a,d);return b;}
function UH(a){a.eX=0;}
function ARC(a){var b,c,d,e;b=a.d2.data[0];c=a.d2.data;d=a.d2.data;e=a.eX-1|0;a.eX=e;c[0]=d[e];a.d2.data[a.eX]=null;if(a.eX>0)OS(a,0);b.gz=(-1);return b;}
function ABq(a,b,c){var d;d=b.i4;b.i4=c;if(c>=d)OS(a,b.gz);else U6(a,b.gz);}
function U6(a,b){var c,d,e,f;c=a.d2.data[b];d=c.i4;a:{while(true){if(b<=0)break a;e=(b-1|0)>>1;f=a.d2.data[e];if(d>=f.i4)break;a.d2.data[b]=f;f.gz=b;b=e;}}a.d2.data[b]=c;c.gz=b;}
function OS(a,b){var c,d,e,f,g,h,i,j;c=a.d2.data[b];d=c.i4;a:{while(true){e=1+(b<<1)|0;f=e+1|0;if(e>=a.eX)break;g=a.d2.data[e];h=g.i4;if(f>=a.eX){i=null;j=Infinity;}else{i=a.d2.data[f];j=i.i4;}if(h<j){if(h>=d)break a;a.d2.data[b]=g;g.gz=b;}else{if(j>=d)break a;a.d2.data[b]=i;i.gz=b;e=f;}b=e;}}a.d2.data[b]=c;c.gz=b;}
function ACc(a){return a.eX?0:1;}
function HU(){var a=this;D.call(a);a.ia=0;a.hV=0;a.il=0;a.mZ=0;a.gz=0;a.mC=0.0;a.pi=0.0;a.i4=0.0;a.o3=null;a.ny=0;}
function A0x(a,b,c){var d=new HU();A8F(d,a,b,c);return d;}
function A8F(a,b,c,d){a.gz=(-1);a.ny=0;a.ia=b;a.hV=c;a.il=d;a.mZ=b|c<<10|d<<20;}
function EZ(a,b){var c,d,e;c=b.ia-a.ia|0;d=b.hV-a.hV|0;e=b.il-a.il|0;return D_(c*c+d*d+e*e);}
function A3O(a,b){return b.mZ!=a.mZ?0:1;}
function AVn(a){return a.mZ;}
function PA(a){return a.gz<0?0:1;}
function AJj(){D.call(this);}
$rt_packages([-1,"com",0,"jcraft",1,"jzlib",-1,"java",3,"util",4,"regex",3,"nio",6,"charset",3,"io",3,"lang",-1,"net",10,"minecraft",11,"src"]);
$rt_metadata([D,"Object",9,0,[],0,3,0,["fl",function(){return A4U(this);},"eo",function(b){return Q7(this,b);},"gk",function(){return AUo(this);}],JB,0,D,[],0,3,0,0,MS,0,D,[],3,3,0,0,FS,0,D,[MS],0,3,0,0,AJ6,0,D,[],4,0,0,0,T$,0,D,[],4,3,0,0,Dd,0,D,[],3,3,0,0,DM,0,D,[],3,3,0,0,KZ,0,D,[],3,3,0,0,B4,"String",9,D,[Dd,DM,KZ],0,3,0,["gk",function(){return AUk(this);},"eo",function(b){return DC(this,b);},"fl",function(){return A8h(this);},"lQ",function(b){return AV2(this,b);}],CT,0,D,[],0,3,0,["lR",function(){return A0i(this);
}],Fg,0,CT,[],0,3,0,0,I6,0,Fg,[],0,3,0,0,AMe,0,I6,[],0,3,0,0,HO,0,D,[Dd,KZ],0,0,0,["nA",function(b){MZ(this,b);},"gk",function(){return V(this);}],Iw,0,D,[],3,3,0,0,U,0,HO,[Iw],0,3,0,["xT",function(b,c,d,e){return A6S(this,b,c,d,e);},"xl",function(b,c,d){return AVq(this,b,c,d);},"gk",function(){return BL(this);},"nA",function(b){AXM(this,b);},"yl",function(b,c){return A7h(this,b,c);}],Fa,0,D,[Dd],1,3,0,0,Gj,0,Fa,[DM],0,3,0,["fl",function(){return A25(this);},"eo",function(b){return A_i(this,b);},"lQ",function(b)
{return A6W(this,b);}],IT,0,I6,[],0,3,0,0,AOU,0,IT,[],0,3,0,0,ALF,0,IT,[],0,3,0,0,BD,0,CT,[],0,3,0,0,B6,"RuntimeException",9,BD,[],0,3,0,0,Db,0,D,[],3,3,0,0,Hg,0,D,[Db],3,3,0,0,Uv,0,D,[Hg],3,3,0,0,Qu,0,D,[Hg],3,3,0,0,Vh,0,D,[Hg],3,3,0,0,Rm,0,D,[Hg],3,3,0,0,Wn,0,D,[Hg,Uv,Qu,Vh,Rm],3,3,0,0,PB,0,D,[],3,3,0,0,Lk,0,D,[Db],3,3,0,0,YM,0,D,[Db,Wn,PB,Lk],1,3,0,["Ye",function(b,c){return AX6(this,b,c);},"a0h",function(b,c){return AYi(this,b,c);},"Sk",function(b){return ATI(this,b);},"Ok",function(b,c,d){return AY$(this,
b,c,d);},"Mv",function(b){return A1C(this,b);},"Va",function(){return AUG(this);},"Tz",function(b,c,d){return AS1(this,b,c,d);}],Bt,0,D,[],0,3,Be,0,SZ,0,D,[],3,3,0,0,JF,0,D,[SZ],3,3,0,0,NZ,0,D,[],3,3,0,0,HD,0,D,[Iw,JF,NZ],1,3,0,0,ABj,0,HD,[],0,3,0,0,Lt,0,HD,[],0,3,0,0,AFd,0,D,[],4,3,0,0,AFR,0,D,[Db],1,3,0,0,LZ,0,D,[],3,3,0,0,Iq,0,D,[LZ],0,3,0,0,ZH,0,D,[],0,3,0,0,Mk,0,D,[],0,3,Bbc,0,Go,0,D,[LZ],0,3,0,["ks",function(){ARo(this);}],DO,0,D,[Db],3,3,0,0,W$,0,D,[DO],0,0,0,["gQ",function(b){return A$Q(this,b);}]]);
$rt_metadata([Xe,0,D,[DO],0,0,0,["gQ",function(b){return AXH(this,b);}],Xf,0,D,[DO],0,0,0,["gQ",function(b){return A3y(this,b);}],Xc,0,D,[DO],0,0,0,["gQ",function(b){return ASN(this,b);}],Xd,0,D,[DO],0,0,0,["gQ",function(b){return A3J(this,b);}],Xa,0,D,[DO],0,0,0,["gQ",function(b){return A2h(this,b);}],Xb,0,D,[DO],0,0,0,["gQ",function(b){return A6s(this,b);}],W_,0,D,[DO],0,0,0,["gQ",function(b){return AUi(this,b);}],QC,0,D,[DO],0,0,0,["gQ",function(b){return A64(this,b);}],QB,0,D,[DO],0,0,0,["gQ",function(b)
{return AYI(this,b);}],NU,0,D,[],0,3,0,0,AAX,0,D,[Db],1,3,0,0,U0,0,D,[],0,3,0,0,BT,"IOException",8,BD,[],0,3,0,0,Lg,0,HO,[Iw],0,3,0,["xT",function(b,c,d,e){return AVZ(this,b,c,d,e);},"xl",function(b,c,d){return A3_(this,b,c,d);},"nA",function(b){A4q(this,b);},"yl",function(b,c){return A93(this,b,c);}],FB,0,D,[],3,3,0,0,V6,0,D,[FB],0,3,0,0,Fi,0,D,[DM],0,3,0,["eo",function(b){return A$U(this,b);},"fl",function(){return A$C(this);},"lQ",function(b){return A29(this,b);}],I2,0,D,[],0,3,0,0,UW,0,I2,[],0,3,0,0,SH,
0,D,[],0,3,0,0,VM,0,D,[],3,3,0,0,R6,0,D,[VM],0,3,0,0,AFQ,0,D,[],0,3,0,0,Eh,0,D,[],1,3,0,0,Mz,0,Eh,[],0,3,0,["hI",function(b,c,d,e,f,g){A$e(this,b,c,d,e,f,g);},"oi",function(b,c,d,e,f,g){AIT(this,b,c,d,e,f,g);}],Eu,0,D,[],0,3,0,0,AAV,0,Eu,[],0,3,0,["o_",function(){AYB(this);}],AKC,0,Eu,[],0,3,0,["o_",function(){AYR(this);}],L4,0,D,[],4,3,0,0,V2,0,Go,[],0,0,0,["ks",function(){AJ0(this);}],Sr,0,D,[],3,3,0,0,In,0,D,[Sr],3,3,0,0,Gn,0,D,[In],1,3,0,["rA",function(b){return Q$(this,b);}],J6,0,D,[In],3,3,0,0,Gf,0,Gn,
[J6],1,3,0,["kX",function(){return Jm(this);}],Mt,0,Gf,[],1,3,0,0,OG,0,D,[In],3,3,0,0,Xm,0,D,[OG],3,3,0,0,AEG,0,Mt,[Xm],0,3,0,0,AOa,0,D,[Db],1,3,0,0,F$,0,D,[Db],1,3,0,0,ABI,0,F$,[],1,3,0,0,AKG,0,F$,[],1,3,0,0,Jf,0,D,[In],3,3,0,0,Fb,0,Gn,[Jf],1,3,0,["eo",function(b){return A5T(this,b);},"fl",function(){return AS4(this);}],ER,0,D,[],3,3,0,0,AQl,0,Fb,[ER,Dd],0,3,0,["sS",function(b){return Xk(this,b);},"rA",function(b){return WE(this,b);},"kX",function(){return Oz(this);},"lX",function(){return IQ(this);}],LT,0,
D,[],3,3,0,0,FY,0,D,[LT],1,3,0,0,ACe,0,FY,[ER,Dd],0,3,0,0]);
$rt_metadata([AKd,0,F$,[],1,3,0,0,YX,0,D,[],0,3,0,0,AE3,0,D,[],0,3,0,0,EV,"Enum",9,D,[DM,Dd],1,3,0,["eo",function(b){return ATv(this,b);},"fl",function(){return AX3(this);},"lQ",function(b){return AXB(this,b);}],E8,0,EV,[],12,3,0,0,Qv,0,D,[],3,3,0,0,Vc,0,D,[Qv],0,0,0,["Gq",function(b){CM(this,b);},"IY",function(b){A16(this,b);}],AQH,0,D,[Db],1,3,0,0,Xr,0,D,[Db],3,3,0,0,W9,0,D,[Xr],0,0,0,["a0Y",function(){return A1Y(this);}],H3,0,D,[JF],1,3,0,0,AQg,0,H3,[],0,3,0,["Cu",function(){return A4C(this);},"ob",function(b,
c,d){return A_e(this,b,c,d);},"wX",function(){return A5o(this);},"lS",function(){AWQ(this);}],IW,0,H3,[],0,3,0,0,Pp,0,D,[],3,3,0,0,P4,0,IW,[Pp],0,3,0,0,MU,0,D,[DM],1,3,0,["lQ",function(b){return A6r(this,b);}],WS,0,IW,[],0,3,0,["Cu",function(){return AS2(this);},"ob",function(b,c,d){return ALZ(this,b,c,d);},"wX",function(){return A0k(this);},"lS",function(){A8d(this);}],M$,0,D,[],1,3,0,0,ADu,0,M$,[],0,3,0,0,AJc,0,D,[],0,3,0,0,Jc,0,D,[],0,3,0,["Aq",function(b,c,d){return A4$(this,b,c,d);}],U3,0,Jc,[],0,0,0,["Aq",
function(b,c,d){return A1W(this,b,c,d);}],C6,"Entity",12,D,[],1,3,0,["C6",function(){Cb(this);},"Je",function(){AEW(this);},"DR",function(){X3(this);},"Bv",function(){return A1K(this);},"FW",function(b){AJ5(this,b);},"DF",function(b){Zl(this,b);},"HK",function(){return AE8(this);},"vh",function(b){return ADJ(this,b);},"xH",function(b){A6O(this,b);},"uY",function(b){A5z(this,b);},"fr",function(b,c){return AJI(this,b,c);},"lu",function(){return A9F(this);},"rS",function(){return A7R(this);},"BC",function(b,c)
{A_d(this,b,c);},"uI",function(b){return AWK(this,b);},"AZ",function(b){return AW2(this,b);},"BL",function(){AFe(this);},"Af",function(){return A9J(this);}],EO,"EntityLiving",12,C6,[],0,3,0,["lu",function(){return AXu(this);},"rS",function(){return A1O(this);},"rK",function(){return AQr(this);},"Je",function(){ANq(this);},"BL",function(){AKT(this);},"ep",function(){AMu(this);},"fr",function(b,c){return AB5(this,b,c);},"wA",function(){return A8o(this);},"va",function(){return AUB(this);},"uL",function(){return AVw(this);
},"Fz",function(b){AN5(this,b);},"mj",function(){return ATF(this);},"DF",function(b){AP9(this,b);},"or",function(){ACr(this);},"wK",function(){AQQ(this);},"uR",function(b,c,d){return Zv(this,b,c,d);},"DR",function(){ABL(this);}],IY,"EntityCreature",12,EO,[],0,3,0,["wK",function(){APO(this);},"nP",function(b,c){AMD(this,b,c);},"x3",function(){return AK0(this);}],DP,"EntityMonster",12,IY,[],0,3,0,["or",function(){AC_(this);},"ep",function(){AK9(this);},"x3",function(){return AKp(this);},"fr",function(b,c){return AAL(this,
b,c);},"nP",function(b,c){AQY(this,b,c);},"sD",function(b,c,d){return ABA(this,b,c,d);},"uR",function(b,c,d){return YB(this,b,c,d);}],I$,"EntityZombie",12,DP,[],0,3,0,["or",function(){AH2(this);},"mj",function(){return AWM(this);}],Jp,"EntitySkeleton",12,DP,[],0,3,0,["or",function(){AID(this);},"nP",function(b,c){AHV(this,b,c);},"mj",function(){return AYN(this);}],J0,"EntityCreeper",12,DP,[],0,3,0,["wK",function(){ZR(this);},"nP",function(b,c){AAN(this,b,c);},"mj",function(){return ASW(this);}],Ko,"EntitySpider",
12,DP,[],0,3,0,["x3",function(){return ARs(this);},"nP",function(b,c){Zo(this,b,c);},"mj",function(){return AZM(this);}],GB,"EntityAnimal",12,IY,[],1,3,0,["sD",function(b,c,d){return AOA(this,b,c,d);},"uR",function(b,c,d){return AK6(this,b,c,d);}],KI,"EntitySheep",12,GB,[],0,3,0,["fr",function(b,c){return AGW(this,b,c);},"wA",function(){return A6Y(this);},"va",function(){return A4d(this);},"uL",function(){return AYm(this);}],IE,"EntityPig",12,GB,[],0,3,0,["wA",function(){return ATB(this);},"va",function(){return A9p(this);
},"uL",function(){return AV7(this);},"uI",function(b){return AXU(this,b);},"mj",function(){return AWf(this);}],DB,0,D,[Dd],0,3,0,0,ND,0,D,[],0,3,0,0,Pe,0,D,[],0,3,0,0,O,"Block",12,D,[],0,3,L,["gf",function(){return A8X(this);},"em",function(){return AWF(this);},"Cy",function(b,c,d,e){return AFb(this,b,c,d,e);},"pH",function(b,c,d,e,f){return AGv(this,b,c,d,e,f);},"uj",function(b,c,d,e,f){return AB2(this,b,c,d,e,f);},"eY",function(b,c){return A7b(this,b,c);},"ci",function(b){return AVG(this,b);},"oS",function(b,
c,d,e){return K7(this,b,c,d,e);},"FC",function(b,c,d,e,f,g){ALy(this,b,c,d,e,f,g);},"hu",function(b,c,d,e){return Nn(this,b,c,d,e);},"d5",function(){return A5g(this);},"o7",function(b,c){return A6o(this,b,c);},"pg",function(){return A3L(this);},"e8",function(b,c,d,e,f){AHR(this,b,c,d,e,f);},"kQ",function(b,c,d,e,f){APe(this,b,c,d,e,f);},"nr",function(b,c,d,e,f){Z$(this,b,c,d,e,f);},"e1",function(b,c,d,e,f){YR(this,b,c,d,e,f);},"mv",function(){return A3V(this);},"fD",function(b,c,d,e){AA$(this,b,c,d,e);},"ly",
function(b,c,d,e){Z5(this,b,c,d,e);},"eH",function(b){return AYp(this,b);},"dX",function(b,c){return ATS(this,b,c);},"IP",function(b,c,d,e,f){Yj(this,b,c,d,e,f);},"HS",function(b,c,d,e,f,g){AE0(this,b,c,d,e,f,g);},"yr",function(b){return AZ1(this,b);},"nI",function(b,c,d,e,f,g){return Kd(this,b,c,d,e,f,g);},"sM",function(b,c,d,e){AQ2(this,b,c,d,e);},"pR",function(){return AVm(this);},"fS",function(b,c,d,e){return AEH(this,b,c,d,e);},"lD",function(b,c,d,e,f){return AGK(this,b,c,d,e,f);},"oH",function(b,c,d,e,
f){AJL(this,b,c,d,e,f);},"vb",function(b,c,d,e,f){YJ(this,b,c,d,e,f);},"q$",function(b,c,d,e,f){AAf(this,b,c,d,e,f);},"qF",function(b,c,d,e,f,g){AF7(this,b,c,d,e,f,g);},"xM",function(b,c,d,e){APY(this,b,c,d,e);}],RF,0,D,[],3,3,0,0,AJg,0,Gf,[ER,Dd,RF],0,3,0,["lX",function(){return CY(this);},"sS",function(b){return S(this,b);}],DH,0,D,[Db],3,3,0,0,TN,0,D,[DH],0,0,0,["gw",function(){return AWo(this);}],TM,0,D,[DH],0,0,0,["gw",function(){return AS7(this);}],TL,0,D,[DH],0,0,0,["gw",function(){return AZl(this);}],TK,
0,D,[DO],0,0,0,["gQ",function(b){return A6E(this,b);}],SF,0,D,[],0,0,0,0,Cc,"IllegalArgumentException",9,B6,[],0,3,0,0,Vj,"UnsupportedCharsetException",7,Cc,[],0,3,0,0,E3,"NullPointerException",9,B6,[],0,3,0,0,AA_,0,D,[Db],4,3,0,0,Fk,0,D,[],1,3,0,0]);
$rt_metadata([L8,0,Fk,[DM],1,3,0,0,AE6,0,D,[],0,3,0,0,QL,0,D,[],0,3,0,0,E2,0,D,[JF,NZ],1,3,0,["jw",function(b,c,d){ATi(this,b,c,d);}],Ij,0,E2,[],0,3,0,0,AA7,0,Ij,[],0,3,0,0,Xg,0,E2,[],0,0,0,["qD",function(b){AYh(this,b);}],AFc,"IllegalCharsetNameException",7,Cc,[],0,3,0,0,MT,0,D,[],128,3,0,0,Up,0,MT,[],4,3,0,0,Is,0,D,[],0,3,0,0,AHq,0,Is,[],4,0,0,0,ACt,0,Is,[],4,0,0,0,LP,"BlockStone",12,O,[],0,3,0,["dX",function(b,c){return A8E(this,b,c);}],Z7,"BlockGrass",12,O,[],0,3,0,["ci",function(b){return A7m(this,b);},
"e8",function(b,c,d,e,f){ADr(this,b,c,d,e,f);},"dX",function(b,c){return AZ8(this,b,c);}],AHU,"BlockDirt",12,O,[],0,3,0,0,B8,0,D,[],0,3,0,["nE",function(){return A8i(this);},"dw",function(){return A0X(this);},"sk",function(){return A7M(this);},"ug",function(){return A5p(this);}],F4,"BlockFlower",12,O,[],0,3,0,["fS",function(b,c,d,e){return ALW(this,b,c,d,e);},"rp",function(b){return AYl(this,b);},"e1",function(b,c,d,e,f){AIG(this,b,c,d,e,f);},"e8",function(b,c,d,e,f){AEa(this,b,c,d,e,f);},"Hb",function(b,c,
d,e){return AN8(this,b,c,d,e);},"hu",function(b,c,d,e){return AGl(this,b,c,d,e);},"d5",function(){return A6i(this);},"gf",function(){return AT2(this);},"em",function(){return A7r(this);}],AMZ,"BlockSapling",12,F4,[],0,3,0,["e8",function(b,c,d,e,f){AEj(this,b,c,d,e,f);}],HT,0,O,[],1,3,0,["ci",function(b){return ATc(this,b);},"gf",function(){return A$5(this);},"d5",function(){return A$n(this);},"o7",function(b,c){return A8B(this,b,c);},"pH",function(b,c,d,e,f){return ARy(this,b,c,d,e,f);},"hu",function(b,c,d,
e){return Yh(this,b,c,d,e);},"em",function(){return A7U(this);},"dX",function(b,c){return A3c(this,b,c);},"eH",function(b){return A58(this,b);},"qF",function(b,c,d,e,f,g){ANd(this,b,c,d,e,f,g);},"mv",function(){return AU6(this);},"Cy",function(b,c,d,e){return AEx(this,b,c,d,e);},"e8",function(b,c,d,e,f){ARa(this,b,c,d,e,f);},"pR",function(){return A$k(this);},"kQ",function(b,c,d,e,f){YH(this,b,c,d,e,f);},"fD",function(b,c,d,e){ARS(this,b,c,d,e);},"e1",function(b,c,d,e,f){ALg(this,b,c,d,e,f);}],AEi,"BlockFlowing",
12,HT,[],0,3,0,["e8",function(b,c,d,e,f){AOR(this,b,c,d,e,f);},"fD",function(b,c,d,e){AB6(this,b,c,d,e);}],AIL,"BlockStationary",12,HT,[],0,3,0,["e1",function(b,c,d,e,f){AGz(this,b,c,d,e,f);}],I_,"BlockSand",12,O,[],0,3,0,["fD",function(b,c,d,e){ARQ(this,b,c,d,e);},"e1",function(b,c,d,e,f){ASf(this,b,c,d,e,f);},"e8",function(b,c,d,e,f){APB(this,b,c,d,e,f);},"mv",function(){return A3U(this);}],AG6,"BlockGravel",12,I_,[],0,3,0,["dX",function(b,c){return A_g(this,b,c);}],YZ,"BlockOre",12,O,[],0,3,0,["dX",function(b,
c){return A4k(this,b,c);},"eH",function(b){return AZ7(this,b);}],AFi,"BlockLog",12,O,[],0,3,0,["eH",function(b){return A8S(this,b);},"dX",function(b,c){return ATg(this,b,c);},"ci",function(b){return AVA(this,b);}],LW,0,O,[],0,3,0,["pH",function(b,c,d,e,f){return AQx(this,b,c,d,e,f);}],ACH,"BlockLeaves",12,LW,[],0,3,0,["e8",function(b,c,d,e,f){AIz(this,b,c,d,e,f);},"eH",function(b){return AW7(this,b);},"dX",function(b,c){return A4_(this,b,c);},"d5",function(){return A2P(this);},"oH",function(b,c,d,e,f){ASt(this,
b,c,d,e,f);}],ALf,"BlockSponge",12,O,[],0,3,0,["fD",function(b,c,d,e){AKK(this,b,c,d,e);},"ly",function(b,c,d,e){ANv(this,b,c,d,e);}],Nc,0,O,[],0,3,0,["d5",function(){return A98(this);},"pH",function(b,c,d,e,f){return Yz(this,b,c,d,e,f);}],AQo,"BlockGlass",12,Nc,[],0,3,0,["eH",function(b){return AV8(this,b);}],AHf,"BlockMushroom",12,F4,[],0,3,0,["rp",function(b){return AI7(this,b);},"Hb",function(b,c,d,e){return ADl(this,b,c,d,e);}],ABx,"BlockOreBlock",12,O,[],0,3,0,["ci",function(b){return A4x(this,b);}],Zi,
"BlockStep",12,O,[],0,3,0,["ci",function(b){return A$F(this,b);},"d5",function(){return A5O(this);},"e1",function(b,c,d,e,f){ABG(this,b,c,d,e,f);},"fD",function(b,c,d,e){ABl(this,b,c,d,e);},"dX",function(b,c){return AZm(this,b,c);},"gf",function(){return AW9(this);},"pH",function(b,c,d,e,f){return ASF(this,b,c,d,e,f);}],AOh,"BlockTNT",12,O,[],0,3,0,["ci",function(b){return A4Z(this,b);},"eH",function(b){return AVc(this,b);},"sM",function(b,c,d,e){AGF(this,b,c,d,e);},"nr",function(b,c,d,e,f){ASn(this,b,c,d,e,
f);}],ADb,"BlockBookshelf",12,O,[],0,3,0,["ci",function(b){return A$6(this,b);},"eH",function(b){return A4z(this,b);}],XP,"BlockObsidian",12,LP,[],0,3,0,["eH",function(b){return A27(this,b);},"dX",function(b,c){return AUY(this,b,c);}],AOD,"BlockTorch",12,O,[],0,3,0,["hu",function(b,c,d,e){return ANl(this,b,c,d,e);},"d5",function(){return A2a(this);},"gf",function(){return AWb(this);},"em",function(){return A0V(this);},"fS",function(b,c,d,e){return AL9(this,b,c,d,e);},"vb",function(b,c,d,e,f){ANP(this,b,c,d,
e,f);},"e8",function(b,c,d,e,f){ASd(this,b,c,d,e,f);},"fD",function(b,c,d,e){ABw(this,b,c,d,e);},"e1",function(b,c,d,e,f){AKb(this,b,c,d,e,f);},"nI",function(b,c,d,e,f,g){return AKi(this,b,c,d,e,f,g);},"kQ",function(b,c,d,e,f){AQq(this,b,c,d,e,f);}],AO3,"BlockFire",12,O,[],0,3,0,["hu",function(b,c,d,e){return ARE(this,b,c,d,e);},"d5",function(){return A5V(this);},"gf",function(){return A8s(this);},"em",function(){return AXx(this);},"eH",function(b){return AWG(this,b);},"mv",function(){return AZ3(this);},"e8",
function(b,c,d,e,f){XO(this,b,c,d,e,f);},"pg",function(){return A3j(this);},"fS",function(b,c,d,e){return ANs(this,b,c,d,e);},"e1",function(b,c,d,e,f){ABC(this,b,c,d,e,f);},"fD",function(b,c,d,e){ACu(this,b,c,d,e);},"kQ",function(b,c,d,e,f){ASu(this,b,c,d,e,f);}],Eg,0,O,[],1,3,0,["fD",function(b,c,d,e){AOG(this,b,c,d,e);},"ly",function(b,c,d,e){AL0(this,b,c,d,e);}],AAd,"BlockMobSpawner",12,Eg,[],0,3,0,["ta",function(){return AXk(this);},"d5",function(){return A50(this);}],ZA,"BlockStairs",12,O,[],0,3,0,["d5",
function(){return A5D(this);},"gf",function(){return AV6(this);},"em",function(){return AYW(this);},"pH",function(b,c,d,e,f){return APC(this,b,c,d,e,f);},"FC",function(b,c,d,e,f,g){AJB(this,b,c,d,e,f,g);},"e1",function(b,c,d,e,f){AHE(this,b,c,d,e,f);},"kQ",function(b,c,d,e,f){APf(this,b,c,d,e,f);},"q$",function(b,c,d,e,f){ABf(this,b,c,d,e,f);},"nr",function(b,c,d,e,f){ADq(this,b,c,d,e,f);},"Cy",function(b,c,d,e){return AMY(this,b,c,d,e);},"yr",function(b){return A8T(this,b);},"pR",function(){return A77(this);
},"dX",function(b,c){return A4b(this,b,c);},"eH",function(b){return A0u(this,b);},"eY",function(b,c){return AXy(this,b,c);},"ci",function(b){return A71(this,b);},"uj",function(b,c,d,e,f){return AM8(this,b,c,d,e,f);},"mv",function(){return AVK(this);},"oS",function(b,c,d,e){return AMi(this,b,c,d,e);},"qF",function(b,c,d,e,f,g){ACL(this,b,c,d,e,f,g);},"pg",function(){return AYC(this);},"o7",function(b,c){return AYP(this,b,c);},"fS",function(b,c,d,e){return AMq(this,b,c,d,e);},"fD",function(b,c,d,e){ACG(this,b,
c,d,e);},"ly",function(b,c,d,e){YD(this,b,c,d,e);},"HS",function(b,c,d,e,f,g){AHQ(this,b,c,d,e,f,g);},"IP",function(b,c,d,e,f){AM0(this,b,c,d,e,f);},"oH",function(b,c,d,e,f){AQU(this,b,c,d,e,f);},"e8",function(b,c,d,e,f){AQZ(this,b,c,d,e,f);},"lD",function(b,c,d,e,f){return AGL(this,b,c,d,e,f);},"sM",function(b,c,d,e){Zb(this,b,c,d,e);}],AFS,"BlockChest",12,Eg,[],0,3,0,["uj",function(b,c,d,e,f){return AEA(this,b,c,d,e,f);},"ci",function(b){return A84(this,b);},"fS",function(b,c,d,e){return AJ3(this,b,c,d,e);
},"ly",function(b,c,d,e){ASH(this,b,c,d,e);},"lD",function(b,c,d,e,f){return AFY(this,b,c,d,e,f);},"ta",function(){return AZD(this);}],AKJ,"BlockGears",12,O,[],0,3,0,["hu",function(b,c,d,e){return AEX(this,b,c,d,e);},"d5",function(){return ATZ(this);},"gf",function(){return A5b(this);},"em",function(){return A7p(this);},"eH",function(b){return A9L(this,b);},"pg",function(){return AUE(this);}],AHx,"BlockWorkbench",12,O,[],0,3,0,["ci",function(b){return AWw(this,b);},"lD",function(b,c,d,e,f){return AGS(this,b,
c,d,e,f);}],AKI,"BlockCrops",12,F4,[],0,3,0,["rp",function(b){return AYG(this,b);},"e8",function(b,c,d,e,f){AJo(this,b,c,d,e,f);},"eY",function(b,c){return A8q(this,b,c);},"em",function(){return A4B(this);},"nr",function(b,c,d,e,f){ANA(this,b,c,d,e,f);},"dX",function(b,c){return A0Y(this,b,c);},"eH",function(b){return A4S(this,b);}],AQR,"BlockFarmland",12,O,[],0,3,0,["hu",function(b,c,d,e){return AA6(this,b,c,d,e);},"d5",function(){return AU5(this);},"gf",function(){return A1A(this);},"eY",function(b,c){return A_f(this,
b,c);},"e8",function(b,c,d,e,f){ANe(this,b,c,d,e,f);},"oH",function(b,c,d,e,f){AKP(this,b,c,d,e,f);},"e1",function(b,c,d,e,f){Ya(this,b,c,d,e,f);},"dX",function(b,c){return AW4(this,b,c);}],AF3,"BlockFurnace",12,Eg,[],0,3,0,["fD",function(b,c,d,e){ACw(this,b,c,d,e);},"uj",function(b,c,d,e,f){return AKf(this,b,c,d,e,f);},"kQ",function(b,c,d,e,f){AEo(this,b,c,d,e,f);},"ci",function(b){return AU0(this,b);},"lD",function(b,c,d,e,f){return AGV(this,b,c,d,e,f);},"ta",function(){return A72(this);}],Vy,"BlockSign",
12,Eg,[],0,3,0,["em",function(){return AYL(this);},"gf",function(){return A57(this);},"d5",function(){return A51(this);},"ta",function(){return A1L(this);},"fS",function(b,c,d,e){return AGO(this,b,c,d,e);},"dX",function(b,c){return A8z(this,b,c);},"e1",function(b,c,d,e,f){ZV(this,b,c,d,e,f);}],D$,"TileEntity",12,D,[],0,3,0,["tM",function(){AFM(this);},"kl",function(){ACh(this);}]]);
$rt_metadata([Jk,0,D$,[],0,3,0,0,Bc,0,D,[],0,3,BB,["iO",function(b,c,d,e,f,g,h){return AGt(this,b,c,d,e,f,g,h);},"x6",function(b,c){return A$G(this,b,c);},"n9",function(b,c,d){return ASl(this,b,c,d);},"sg",function(b,c){AWa(this,b,c);},"x0",function(b,c,d,e,f){A45(this,b,c,d,e,f);},"n0",function(b){return A_m(this,b);},"o8",function(b){return AV3(this,b);},"yJ",function(b,c){A3G(this,b,c);}],AIy,"BlockDoor",12,O,[],0,3,0,["eY",function(b,c){return A$m(this,b,c);},"d5",function(){return A0R(this);},"gf",function()
{return AXs(this);},"em",function(){return ATP(this);},"oS",function(b,c,d,e){return AGr(this,b,c,d,e);},"hu",function(b,c,d,e){return ZC(this,b,c,d,e);},"xM",function(b,c,d,e){AHG(this,b,c,d,e);},"q$",function(b,c,d,e,f){AJX(this,b,c,d,e,f);},"lD",function(b,c,d,e,f){return ADV(this,b,c,d,e,f);},"e1",function(b,c,d,e,f){ACA(this,b,c,d,e,f);},"dX",function(b,c){return A8y(this,b,c);},"nI",function(b,c,d,e,f,g){return XH(this,b,c,d,e,f,g);},"fS",function(b,c,d,e){return AJ2(this,b,c,d,e);}],AC4,"BlockLadder",
12,O,[],0,3,0,["hu",function(b,c,d,e){return ADh(this,b,c,d,e);},"oS",function(b,c,d,e){return AD8(this,b,c,d,e);},"d5",function(){return AWY(this);},"gf",function(){return A5S(this);},"em",function(){return A9v(this);},"fS",function(b,c,d,e){return ANV(this,b,c,d,e);},"vb",function(b,c,d,e,f){Yq(this,b,c,d,e,f);},"e1",function(b,c,d,e,f){AKM(this,b,c,d,e,f);},"eH",function(b){return A5q(this,b);}],ANY,"BlockMinecartTrack",12,O,[],0,3,0,["hu",function(b,c,d,e){return ACF(this,b,c,d,e);},"d5",function(){return AWy(this);
},"nI",function(b,c,d,e,f,g){return ALD(this,b,c,d,e,f,g);},"xM",function(b,c,d,e){AMn(this,b,c,d,e);},"eY",function(b,c){return A2A(this,b,c);},"gf",function(){return A3z(this);},"em",function(){return A0w(this);},"eH",function(b){return A2H(this,b);},"fS",function(b,c,d,e){return ANX(this,b,c,d,e);},"fD",function(b,c,d,e){ANG(this,b,c,d,e);},"e1",function(b,c,d,e,f){AJP(this,b,c,d,e,f);}],ASD,0,Bc,[],0,3,0,["iO",function(b,c,d,e,f,g,h){return AQp(this,b,c,d,e,f,g,h);}],AHI,0,MU,[],0,3,0,0,M7,0,Fk,[DM],1,3,
0,0,Nj,0,L8,[],1,0,0,0,WQ,0,Nj,[],0,0,0,0,ARn,0,M7,[],0,0,0,0,Vx,0,D,[],3,3,0,0,LU,0,Fk,[DM,Iw,KZ,Vx],1,3,0,0,P8,"GZIPException",2,BT,[],0,3,0,0,Om,0,B8,[],0,3,0,["dw",function(){return A4Q(this);},"sk",function(){return A5v(this);},"ug",function(){return ATo(this);}],L0,0,B8,[],0,3,0,["nE",function(){return A_A(this);},"dw",function(){return AY8(this);}],N9,0,B8,[],0,3,0,["dw",function(){return A6T(this);},"sk",function(){return A91(this);},"ug",function(){return AU7(this);}],Gc,0,Bc,[],0,3,0,["x6",function(b,
c){return A8R(this,b,c);},"sg",function(b,c){A62(this,b,c);},"x0",function(b,c,d,e,f){AWr(this,b,c,d,e,f);},"n0",function(b){return AXa(this,b);}],O0,0,Gc,[],0,3,BbZ,0,VB,0,Gc,[],0,3,Bb2,["o8",function(b){return A5i(this,b);}],Wv,0,Gc,[],0,3,BbD,0,AE2,0,Bc,[],0,3,0,["iO",function(b,c,d,e,f,g,h){return AJK(this,b,c,d,e,f,g,h);}],LN,0,Bc,[],0,3,0,["n9",function(b,c,d){return Qa(this,b,c,d);}],AOW,0,Bc,[],0,3,0,["n9",function(b,c,d){return AGC(this,b,c,d);}],ALb,0,Bc,[],0,3,0,["x6",function(b,c){return A0v(this,
b,c);},"sg",function(b,c){A7P(this,b,c);},"x0",function(b,c,d,e,f){AX5(this,b,c,d,e,f);},"n0",function(b){return A2z(this,b);}],AOd,0,LN,[],0,3,0,["n9",function(b,c,d){return APx(this,b,c,d);}],ANz,0,Bc,[],0,3,0,["iO",function(b,c,d,e,f,g,h){return AQV(this,b,c,d,e,f,g,h);}],V0,0,Bc,[],0,3,0,["iO",function(b,c,d,e,f,g,h){return AFn(this,b,c,d,e,f,g,h);}],F5,0,Bc,[],0,3,0,0,XX,0,Bc,[],0,3,0,["iO",function(b,c,d,e,f,g,h){return ACf(this,b,c,d,e,f,g,h);}],AHs,0,Bc,[],0,3,0,["iO",function(b,c,d,e,f,g,h){return Yg(this,
b,c,d,e,f,g,h);}],AJd,0,Bc,[],0,3,0,["iO",function(b,c,d,e,f,g,h){return AEb(this,b,c,d,e,f,g,h);}],ARO,0,Bc,[],0,3,0,["n9",function(b,c,d){return AHZ(this,b,c,d);}],AO_,0,Bc,[],0,3,0,["iO",function(b,c,d,e,f,g,h){return AC$(this,b,c,d,e,f,g,h);}],ARg,0,Bc,[],0,3,0,["yJ",function(b,c){AGA(this,b,c);},"sg",function(b,c){AWn(this,b,c);}],N4,0,D,[],3,0,0,0,AGj,0,D,[N4],4,3,0,["E1",function(b){ASZ(this,b);},"l1",function(){AZv(this);},"yD",function(){return AT5(this);},"kJ",function(b,c,d){A8c(this,b,c,d);}],Sg,
"CloneNotSupportedException",9,BD,[],0,3,0,0,Nr,0,D,[],4,3,0,0,J4,0,D,[],3,3,0,0,LK,0,D,[J4,ER],0,0,0,["eo",function(b){return A4X(this,b);},"fl",function(){return A1V(this);}],IH,0,LK,[],0,0,0,0,BS,"IndexOutOfBoundsException",9,B6,[],0,3,0,0,I1,"StringIndexOutOfBoundsException",9,BS,[],0,3,0,0,GF,0,D,[],3,3,0,0,WC,0,D,[GF],0,3,0,["ks",function(){AI4(this);}],FH,"EOFException",8,BT,[],0,3,0,0,EP,0,D,[],0,3,0,0,Fy,0,D,[],0,3,0,0,LI,0,D,[],4,0,0,0]);
$rt_metadata([PS,0,E2,[],0,0,0,["qD",function(b){A55(this,b);}],Kl,0,D,[],0,3,0,0,AMp,0,D,[],4,3,0,0,Ji,0,D,[],0,3,0,0,Lr,0,LU,[],1,0,0,0,ABQ,0,Lr,[],0,0,0,0,LQ,0,D,[],1,3,0,0,Oa,0,D,[],0,3,0,0,Z_,0,D,[Db],1,3,0,0,PT,0,D,[Db],3,3,0,0,YF,0,D,[Db,PT],1,3,0,0,KF,0,D,[],4,0,0,0,NF,0,LQ,[],1,3,0,0,PU,0,NF,[],0,3,0,0,AOq,0,D,[],4,3,0,0,Gd,0,D,[],4,0,0,0,LA,0,D,[],4,0,0,0,Hw,"UTFDataFormatException",8,BT,[],0,3,0,0,Xw,"NegativeArraySizeException",9,B6,[],0,3,0,0,AA0,0,D,[Lk],1,3,0,["Q0",function(b){return A_u(this,
b);},"Zw",function(){return AUC(this);}],Km,"IllegalMonitorStateException",9,B6,[],0,3,0,0,ZX,0,D,[],0,0,0,0,D3,"IllegalStateException",9,BD,[],0,3,0,0,AIA,0,D,[Db],1,3,0,0,SV,0,D,[GF],0,3,0,["ks",function(){AQ$(this);}],Rd,0,D,[GF],0,3,0,0,GY,0,BT,[],0,3,0,0,W4,"AssertionError",9,Fg,[],0,3,0,0,E0,0,BD,[],0,3,0,0,Ok,0,D,[],1,3,0,0,Sl,0,D,[],3,3,0,0,Sv,0,D,[],3,3,0,0,Pk,0,D,[GF,Sl,Sv],0,0,0,["ks",function(){APn(this);}],LF,0,Ok,[],1,3,0,0,Rk,0,LF,[],0,3,0,0,DZ,"Inflate$Return",2,BD,[],0,0,0,0,ANx,0,D,[ER],0,
3,0,0,OX,0,D,[N4],4,3,0,["kJ",function(b,c,d){A2y(this,b,c,d);},"l1",function(){A6n(this);},"E1",function(b){A9O(this,b);},"yD",function(){return A7t(this);}],Ja,0,D,[],0,3,0,0,Ql,0,D,[],3,3,0,0,Bu,0,Bt,[Ql],0,3,BW,0,ACE,0,D,[],0,3,0,0,NE,0,D,[],0,3,0,0,Ip,0,D,[],0,3,Tv,0,ASc,0,E2,[],0,3,0,["qD",function(b){A7K(this,b);},"jw",function(b,c,d){Rw(this,b,c,d);}],JV,"ArrayStoreException",9,B6,[],0,3,0,0,Og,0,D,[],3,3,0,0,F0,0,D,[Og],0,3,0,["ej",function(b,c,d){return ACy(this,b,c,d);},"oK",function(b,c,d){return AB3(this,
b,c,d);},"eI",function(b,c,d){return AEL(this,b,c,d);},"sO",function(b,c,d){return ANi(this,b,c,d);},"lf",function(b,c,d){return AAE(this,b,c,d);}],L1,0,D,[],0,3,BA,0,ANg,0,D,[],0,3,0,0]);
$rt_metadata([Gg,0,D,[],0,3,0,0,CS,0,Gg,[],0,3,0,["pa",function(b,c){YQ(this,b,c);},"I4",function(b,c,d){Zp(this,b,c,d);},"Cf",function(b,c,d){A2w(this,b,c,d);},"iE",function(b){AMU(this,b);},"hT",function(){AP8(this);},"rC",function(){A3e(this);},"pu",function(){AH9(this);},"oa",function(){return AVt(this);}],AFf,0,D,[],0,3,0,0,Ml,0,D,[Dd],1,3,0,0,Es,0,Ml,[Dd],0,3,0,0,Ob,0,D,[],3,3,0,0,I7,0,D,[Dd,Ob],1,3,0,0,Wl,0,D,[Ob],3,3,0,0,N1,0,D,[Wl],3,3,0,0,R4,0,D,[],3,3,0,0,Md,0,D,[R4],3,3,0,0,U7,0,I7,[Dd,N1,Md],0,
3,0,0,Wj,0,D,[N1],3,3,0,0,RY,0,D,[Md],3,3,0,0,G9,0,I7,[Dd,Wj,RY],0,3,0,0,S3,0,D,[GF],0,3,0,["ks",function(){AIC(this);}],AO0,"CoderMalfunctionError",7,Fg,[],0,3,0,0,H7,0,D,[],3,3,0,0,Uy,0,D,[H7],3,3,0,0,AC1,0,D,[Uy],0,0,0,0,RH,0,D,[],0,0,0,0,KK,0,D,[],0,3,0,0,Wk,0,D,[],0,3,0,0,Qo,0,D,[],0,3,0,0,AKX,0,Eu,[],0,3,0,["o_",function(){AZ$(this);}],ACm,0,Eu,[],0,3,0,["o_",function(){A8O(this);}],AR8,0,Eu,[],0,3,0,["o_",function(){A3s(this);}],Xt,0,D,[],3,3,0,0,AAw,0,D,[Xt],0,3,0,0,AHd,0,CS,[],0,3,0,["rC",function()
{A5m(this);},"pa",function(b,c){ANM(this,b,c);},"hT",function(){AIt(this);},"iE",function(b){ACs(this,b);},"hN",function(b,c,d){ZE(this,b,c,d);}],O3,0,D,[],0,3,0,0,Nt,0,Gg,[],0,3,0,0,K_,0,D,[],3,3,0,0,IJ,0,D,[K_],0,3,0,0,Jx,"EntityPlayer",12,EO,[],0,3,0,["BL",function(){AFX(this);},"Fz",function(b){ALe(this,b);},"BC",function(b,c){AZt(this,b,c);},"rK",function(){return A5d(this);},"fr",function(b,c){return Ys(this,b,c);}],AGD,"EntityPlayerSP",12,Jx,[],0,3,0,["wK",function(){AAR(this);},"or",function(){ALn(this);
}],Qr,0,D,[],0,3,0,0,AJH,0,D,[],0,3,0,0,Vt,0,D,[],0,3,0,0,FE,0,D,[],3,3,0,0,VH,0,D,[FE],0,3,0,["j7",function(b,c){return Em(this,b,c);},"jE",function(b,c){AFE(this,b,c);},"gx",function(b){return RS(this,b);},"f3",function(){return AZq(this);},"kl",function(){AAq(this);}],Dv,0,I2,[],0,3,0,0,Ew,0,CS,[],1,3,0,["hN",function(b,c,d){ACj(this,b,c,d);},"I4",function(b,c,d){AN6(this,b,c,d);},"Cf",function(b,c,d){A9E(this,b,c,d);},"pa",function(b,c){AAy(this,b,c);},"pu",function(){AA1(this);},"oa",function(){return A$X(this);
}],APP,0,Ew,[],0,3,0,["pu",function(){ALK(this);},"to",function(b){ATU(this,b);},"ls",function(){AZ5(this);},"hN",function(b,c,d){AD0(this,b,c,d);},"s3",function(b){X_(this,b);}],I9,0,D,[],0,3,0,0,Rv,0,D,[],0,0,0,0,Tm,0,D,[],0,3,0,0,AHr,0,D,[],0,3,0,0,Cd,0,D,[],4,3,0,0,ZM,0,D,[FE],0,3,0,["gx",function(b){return Gi(this,b);},"j7",function(b,c){return AEZ(this,b,c);},"jE",function(b,c){A3A(this,b,c);},"f3",function(){return A8V(this);},"kl",function(){ADR(this);}]]);
$rt_metadata([AAG,0,D,[FE],0,3,0,["gx",function(b){return A42(this,b);},"j7",function(b,c){return AWD(this,b,c);},"jE",function(b,c){Pn(this,b,c);},"f3",function(){return AYU(this);},"kl",function(){ANj(this);}],HM,0,D,[],0,3,0,["Jm",function(){AK_(this);},"s6",function(b){return AXi(this,b);},"rW",function(){return A9M(this);}],ADg,0,HM,[],0,0,0,["s6",function(b){return A0j(this,b);},"Jm",function(){AN9(this);}],QM,0,HM,[],0,0,0,["s6",function(b){return A2R(this,b);},"rW",function(){return AWx(this);}],We,
0,D,[],4,3,0,0,SE,0,D,[],4,3,0,0,M5,0,Fk,[DM],1,3,0,0,Dh,0,D,[],1,3,0,0,AII,0,Dh,[],0,3,0,["iQ",function(b,c,d,e,f,g){AC8(this,b,c,d,e,f,g);}],Pf,0,D,[],4,3,0,0,QF,0,D,[DO],0,0,0,["gQ",function(b){return A7n(this,b);}],QE,0,D,[DO],0,0,0,["gQ",function(b){return A7z(this,b);}],Iy,0,M5,[],1,0,0,0,UY,0,Iy,[],0,0,0,["yv",function(b){return AOM(this,b);},"u7",function(b,c){ANJ(this,b,c);},"m1",function(){return ASS(this);}],V9,0,D,[],4,3,0,0,V5,0,D,[],4,3,0,0,Xj,0,D,[],4,3,0,0,Jq,"UnsupportedOperationException",
9,B6,[],0,3,0,0,UM,0,CS,[],0,3,0,["hT",function(){ADi(this);},"iE",function(b){AOE(this,b);},"hN",function(b,c,d){AMC(this,b,c,d);}],FV,"ReadOnlyBufferException",6,Jq,[],0,3,0,0,Ha,"BufferOverflowException",6,B6,[],0,3,0,0,Gt,"BufferUnderflowException",6,B6,[],0,3,0,0,TC,0,D,[],0,3,0,0,ACo,0,D,[],0,3,0,0,RB,0,CS,[],0,3,0,0,Mm,0,CS,[],0,3,0,["hT",function(){AOn(this);},"pa",function(b,c){AMm(this,b,c);},"iE",function(b){AOx(this,b);},"hN",function(b,c,d){APp(this,b,c,d);},"oa",function(){return A6L(this);}],C2,
"EntityFX",12,C6,[],0,3,0,["ep",function(){ALo(this);},"kR",function(b,c,d,e,f,g,h){ANu(this,b,c,d,e,f,g,h);},"xy",function(){return A7W(this);}],AA2,0,CS,[],0,3,0,["hT",function(){ARe(this);},"iE",function(b){ADo(this,b);},"rC",function(){A2e(this);},"hN",function(b,c,d){ADN(this,b,c,d);}],Ly,0,D,[],0,3,0,0,WG,0,Ly,[],0,3,0,0,Q8,0,D,[],3,3,0,0,AFT,0,D,[Q8],0,3,0,0,O8,0,D,[],0,3,0,0,Ii,0,D,[FE],0,3,0,["gm",function(){return A6p(this);},"w9",function(){return A6d(this);},"gx",function(b){return AS_(this,b);},
"j7",function(b,c){return A3f(this,b,c);},"jE",function(b,c){AWU(this,b,c);},"f3",function(){return A94(this);},"kl",function(){YA(this);}],ZI,"EntityDiggingFX",12,C2,[],0,3,0,["xy",function(){return ATH(this);},"kR",function(b,c,d,e,f,g,h){YN(this,b,c,d,e,f,g,h);}],KT,"ConcurrentModificationException",4,B6,[],0,3,0,0,JQ,"EntityRainFX",12,C2,[],0,3,0,["kR",function(b,c,d,e,f,g,h){AKN(this,b,c,d,e,f,g,h);},"ep",function(){AOz(this);}],IR,0,Iy,[],1,0,0,["m1",function(){return AXO(this);}],Ph,0,IR,[],0,0,0,["yv",
function(b){return AWc(this,b);},"u7",function(b,c){ASR(this,b,c);}],VR,0,IR,[],0,0,0,["yv",function(b){return A0P(this,b);},"u7",function(b,c){ATK(this,b,c);}],AKV,0,D,[FB],0,3,0,["qg",function(b,c){return A08(this,b,c);}],Wc,0,D,[FB],0,3,0,["qg",function(b,c){return A9B(this,b,c);}],Hs,0,D,[],0,3,0,0,HY,0,D,[],0,3,0,0,H1,0,D,[],0,3,0,0,Ng,0,D,[],0,3,0,0,J3,"NoSuchElementException",4,B6,[],0,3,0,0,VZ,0,D,[],0,3,0,["eo",function(b){return A6k(this,b);},"fl",function(){return A1q(this);}],Ov,0,Fa,[DM],0,3,0,
0,Hl,0,D,[],0,0,0,0]);
$rt_metadata([Nh,0,D,[],4,3,0,0,Sa,0,D,[],0,3,0,0,DJ,0,Dh,[],0,3,0,["H6",function(b,c,d,e,f,g){AAc(this,b,c,d,e,f,g);},"k8",function(b,c){return APU(this,b,c);},"CG",function(b){return A5f(this,b);},"CJ",function(b,c,d){return A6t(this,b,c,d);},"xh",function(b,c){A88(this,b,c);},"iQ",function(b,c,d,e,f,g){AOZ(this,b,c,d,e,f,g);}],OP,0,DJ,[],0,3,0,["k8",function(b,c){return Y_(this,b,c);},"H6",function(b,c,d,e,f,g){AL5(this,b,c,d,e,f,g);},"iQ",function(b,c,d,e,f,g){ACN(this,b,c,d,e,f,g);}],Lz,0,Gg,[],0,3,0,0,L$,
0,D,[MS],0,3,0,0,Qw,0,D,[],3,3,0,0,Kt,0,L$,[Qw],0,3,0,0,Ou,0,D,[Db],3,3,0,0,QD,0,D,[Ou],0,0,0,["Gg",function(){return A1B(this);}],WM,0,D,[FB],0,3,0,["qg",function(b,c){return A4N(this,b,c);}],WK,0,D,[FB],0,3,0,0,Sc,0,Fb,[],4,0,0,0,Sb,0,FY,[],4,0,0,0,Sd,0,Gf,[],4,0,0,0,ID,0,D,[],1,3,0,0,AA5,0,ID,[],0,3,0,["CU",function(b,c,d,e,f){XF(this,b,c,d,e,f);}],Nz,0,D$,[],0,3,0,["tM",function(){AC5(this);}],AR1,0,ID,[],0,3,0,["CU",function(b,c,d,e,f){ARf(this,b,c,d,e,f);}],AQk,0,DJ,[],0,3,0,["CG",function(b){return A6g(this,
b);},"k8",function(b,c){return Ye(this,b,c);}],Ua,0,DJ,[],0,3,0,["k8",function(b,c){return AMd(this,b,c);}],F3,0,Eh,[],0,3,0,["hI",function(b,c,d,e,f,g){A9U(this,b,c,d,e,f,g);}],PZ,0,F3,[],0,3,0,0,TI,0,DJ,[],0,3,0,["k8",function(b,c){return ARt(this,b,c);}],ACJ,0,F3,[],0,3,0,0,ARi,0,F3,[],0,3,0,0,AB_,0,DJ,[],0,3,0,["xh",function(b,c){A7S(this,b,c);},"CJ",function(b,c,d){return AZW(this,b,c,d);}],HS,0,Mz,[],0,3,0,["oi",function(b,c,d,e,f,g){A2I(this,b,c,d,e,f,g);}],AIo,0,HS,[],0,3,0,0,K$,"EntityGiant",12,DP,
[],0,3,0,["sD",function(b,c,d){return AO$(this,b,c,d);}],Uf,0,DJ,[],0,3,0,["xh",function(b,c){A$V(this,b,c);}],TP,0,Dh,[],0,3,0,["iQ",function(b,c,d,e,f,g){AJt(this,b,c,d,e,f,g);}],II,"EntityPainting",12,C6,[],0,3,0,["ep",function(){ADm(this);},"lu",function(){return AXQ(this);},"fr",function(b,c){return AEs(this,b,c);}],AAu,0,Dh,[],0,3,0,["iQ",function(b,c,d,e,f,g){AOT(this,b,c,d,e,f,g);}],Jv,"EntityArrow",12,C6,[],0,3,0,["ep",function(){APv(this);},"xH",function(b){A7x(this,b);}],RA,0,Dh,[],0,3,0,["iQ",function(b,
c,d,e,f,g){ADk(this,b,c,d,e,f,g);}],E9,"EntityItem",12,C6,[],0,3,0,["ep",function(){AJF(this);},"HK",function(){return AEg(this);},"FW",function(b){AMw(this,b);},"fr",function(b,c){return Vm(this,b,c);},"xH",function(b){A$$(this,b);}],Mr,"EntityTNTPrimed",12,C6,[],0,3,0,["lu",function(){return A9$(this);},"ep",function(){XL(this);}],AOX,0,Dh,[],0,3,0,["iQ",function(b,c,d,e,f,g){AL8(this,b,c,d,e,f,g);}],JO,"EntityFallingSand",12,C6,[],0,3,0,["lu",function(){return AYj(this);},"ep",function(){AMP(this);}],AQP,
0,Dh,[],0,3,0,["iQ",function(b,c,d,e,f,g){ARm(this,b,c,d,e,f,g);}],Gh,"EntityMinecart",12,C6,[FE],0,3,0,["AZ",function(b){return AST(this,b);},"Bv",function(){return AZ2(this);},"rS",function(){return A7A(this);},"Af",function(){return AVQ(this);},"fr",function(b,c){return ALh(this,b,c);},"lu",function(){return A9G(this);},"C6",function(){APh(this);},"ep",function(){ASI(this);},"uY",function(b){A3N(this,b);},"uI",function(b){return A8L(this,b);}],ARB,0,Dh,[],0,3,0,["iQ",function(b,c,d,e,f,g){AQh(this,b,c,d,
e,f,g);}],Wa,0,D,[],0,3,0,0,ABF,0,D,[],0,3,0,0,AH7,0,Eh,[],0,3,0,["hI",function(b,c,d,e,f,g){AYa(this,b,c,d,e,f,g);}],AIB,0,Eh,[],0,3,0,["hI",function(b,c,d,e,f,g){A21(this,b,c,d,e,f,g);}],AEY,0,Eh,[],0,3,0,0,TB,0,D,[H7],0,0,0,["qk",function(){return KE(this);},"mS",function(){return KU(this);}],I8,0,D,[],0,3,0,0]);
$rt_metadata([Iv,0,D,[Og],0,3,0,["ej",function(b,c,d){return HA(this,b,c,d);},"sO",function(b,c,d){return AAQ(this,b,c,d);},"eI",function(b,c,d){return AC7(this,b,c,d);},"oK",function(b,c,d){return N7(this,b,c,d);},"lf",function(b,c,d){return AB8(this,b,c,d);}],Gk,0,BD,[],0,3,0,0,UZ,"NoSuchMethodException",9,Gk,[],0,3,0,0,Vi,0,D,[],0,3,0,0,PP,0,Gn,[],0,0,0,["rA",function(b){return A0o(this,b);},"kX",function(){return Ni(this);}],Ty,0,D,[Ou],0,0,0,["Gg",function(){return A_r(this);}],AQI,0,D,[],4,3,0,0,WZ,0,
D$,[FE],0,3,0,["gx",function(b){return A9k(this,b);},"j7",function(b,c){return A8e(this,b,c);},"jE",function(b,c){AVu(this,b,c);},"f3",function(){return AT8(this);},"tM",function(){AGG(this);},"kl",function(){Z6(this);}],Tk,0,D$,[FE],0,3,0,["gm",function(){return AVO(this);},"gx",function(b){return Rf(this,b);},"j7",function(b,c){return A1R(this,b,c);},"jE",function(b,c){AHB(this,b,c);},"w9",function(){return A8x(this);},"f3",function(){return A7g(this);}],CQ,0,D,[],1,3,0,0,APQ,0,CQ,[],0,3,0,["gM",function(b)
{A69(this,b);},"gE",function(b){A9e(this,b);},"fd",function(){return A67(this);}],P7,"BufferUnderflowException",7,B6,[],0,3,0,0,SN,"BufferOverflowException",7,B6,[],0,3,0,0,R1,"MalformedInputException",7,GY,[],0,3,0,["lR",function(){return AVS(this);}],P3,"UnmappableCharacterException",7,GY,[],0,3,0,["lR",function(){return AVl(this);}],IP,0,D,[],0,0,0,["qk",function(){return Gb(this);}],Vf,0,IP,[H7],0,0,0,["mS",function(){return Me(this);}],Wx,0,D,[],0,3,0,0,AEB,0,CS,[],0,3,0,["hT",function(){AR2(this);},"iE",
function(b){ADY(this,b);},"hN",function(b,c,d){AGc(this,b,c,d);}],OB,0,CS,[],0,3,0,["hT",function(){APw(this);},"s8",function(){AXC(this);},"iE",function(b){ASz(this,b);},"IS",function(b){AKO(this,b);},"hN",function(b,c,d){AEE(this,b,c,d);}],LY,"InstantiationException",9,Gk,[],0,3,0,0,Te,"IllegalAccessException",9,Gk,[],0,3,0,0,ALw,0,D,[],4,3,0,0,AAe,0,D,[],4,3,0,0,AMk,0,D,[Dd],4,3,0,0,AB1,0,Lz,[],0,3,0,0,NQ,0,CS,[],0,3,0,["hT",function(){AJu(this);},"iE",function(b){AIg(this,b);},"pa",function(b,c){ALQ(this,
b,c);},"hN",function(b,c,d){AGy(this,b,c,d);}],U4,0,OB,[],0,3,0,["s8",function(){A1P(this);},"IS",function(b){AMa(this,b);}],NT,0,D,[],0,3,0,0,Yp,0,NT,[],0,3,0,0,Q0,0,D,[],0,3,AYY,0,Co,0,D,[],1,0,0,["eJ",function(b,c,d){return Jg(this,b,c,d);},"eW",function(b,c,d,e){return Jr(this,b,c,d,e);},"oF",function(){return A4l(this);},"cb",function(b){A1k(this,b);},"d4",function(b){return A$r(this,b);},"lx",function(){return A$_(this);},"iX",function(){K8(this);}],N3,0,CQ,[],0,3,0,["gE",function(b){A9b(this,b);},"gM",
function(b){A0m(this,b);},"fd",function(){return AUJ(this);}],DW,0,Co,[],0,0,0,["k",function(b,c,d){return ATL(this,b,c,d);},"b4",function(b){return AT7(this,b);}],HX,0,D,[],0,0,0,0,ARd,"PatternSyntaxException",5,Cc,[],0,3,0,["lR",function(){return A$7(this);}],Mw,0,CQ,[],0,3,0,["gM",function(b){A8A(this,b);},"gE",function(b){A73(this,b);},"fd",function(){return A6F(this);}],MY,0,CQ,[],0,3,0,["gM",function(b){AWl(this,b);},"gE",function(b){AZz(this,b);},"fd",function(){return A5I(this);}],Li,0,CQ,[],0,3,0,["gM",
function(b){A15(this,b);},"gE",function(b){AY6(this,b);},"fd",function(){return AVp(this);}],Oc,0,CQ,[],0,3,0,["gM",function(b){ATh(this,b);},"gE",function(b){A_k(this,b);},"fd",function(){return A2G(this);}],Pl,0,CQ,[],0,3,0,["gM",function(b){AS$(this,b);},"gE",function(b){A7V(this,b);},"fd",function(){return ASO(this);}],Mp,0,CQ,[],0,3,0,["gM",function(b){A6X(this,b);},"gE",function(b){AU9(this,b);},"fd",function(){return A0U(this);}],MI,0,CQ,[],0,3,0,["gM",function(b){A47(this,b);},"gE",function(b){A7e(this,
b);},"fd",function(){return A9y(this);}],OI,0,CQ,[],0,3,0,["gM",function(b){A$O(this,b);},"gE",function(b){AY7(this,b);},"fd",function(){return ATs(this);}],QW,0,CQ,[],0,3,0,["gM",function(b){A9t(this,b);},"gE",function(b){AY0(this,b);},"fd",function(){return AYA(this);}],TF,0,D,[DH],0,0,0,["gw",function(){return AUs(this);}],TE,0,D,[DH],0,0,0,["gw",function(){return AXr(this);}],ARU,0,D,[],0,3,0,0,X0,0,D,[],0,3,0,0,XT,0,D,[],0,3,0,0]);
$rt_metadata([AEd,0,D,[],0,3,0,0,ART,0,D,[],0,3,0,0,AFa,0,D,[],0,3,0,0,Ym,0,D,[FB],0,0,0,["qg",function(b,c){return AZw(this,b,c);}],QJ,0,DW,[],0,0,0,["k",function(b,c,d){return A3v(this,b,c,d);},"b4",function(b){return A9u(this,b);}],ASa,0,DW,[],0,0,0,["k",function(b,c,d){return A4J(this,b,c,d);}],PY,0,DW,[],0,0,0,["k",function(b,c,d){return AUb(this,b,c,d);}],Q9,0,DW,[],0,0,0,["k",function(b,c,d){return A3x(this,b,c,d);},"b4",function(b){return A8K(this,b);}],HV,0,DW,[],0,0,0,["k",function(b,c,d){return A1v(this,
b,c,d);}],CI,0,Co,[],1,0,0,["k",function(b,c,d){return A_t(this,b,c,d);},"eb",function(){return A95(this);},"b4",function(b){return AW$(this,b);}],AFW,0,CI,[],0,0,0,["dn",function(b,c){return A9H(this,b,c);},"eJ",function(b,c,d){return A5y(this,b,c,d);},"eW",function(b,c,d,e){return A4A(this,b,c,d,e);},"b4",function(b){return A3w(this,b);}],CE,0,Co,[],0,0,0,["k",function(b,c,d){return AWs(this,b,c,d);},"cb",function(b){AZk(this,b);},"d4",function(b){return A7a(this,b);},"b4",function(b){return AZR(this,b);},
"iX",function(){AUK(this);}],K2,0,CE,[],0,0,0,["k",function(b,c,d){return AZc(this,b,c,d);},"b4",function(b){return A9g(this,b);}],EU,0,K2,[],0,0,0,["k",function(b,c,d){return A41(this,b,c,d);},"cb",function(b){A81(this,b);}],Th,0,EU,[],0,0,0,["k",function(b,c,d){return AZg(this,b,c,d);},"b4",function(b){return A1m(this,b);}],WO,0,EU,[],0,0,0,["k",function(b,c,d){return AT0(this,b,c,d);},"b4",function(b){return A99(this,b);}],Vg,0,EU,[],0,0,0,["k",function(b,c,d){return AUH(this,b,c,d);},"b4",function(b){return A_H(this,
b);}],Rl,0,EU,[],0,0,0,["k",function(b,c,d){return A2$(this,b,c,d);},"b4",function(b){return A9m(this,b);}],IC,0,CE,[],0,0,0,["k",function(b,c,d){return ATf(this,b,c,d);},"eJ",function(b,c,d){return AX$(this,b,c,d);},"eW",function(b,c,d,e){return A9x(this,b,c,d,e);},"d4",function(b){return A68(this,b);},"lx",function(){return A8I(this);},"iX",function(){A11(this);}],H2,0,D,[],1,0,0,0,Bl,0,H2,[],1,0,0,["hC",function(){return A3$(this);},"kq",function(){return A3H(this);},"sP",function(){return A9Z(this);},"nR",
function(){return A$8(this);}],ZO,"CharClass",5,Bl,[],0,0,0,["X",function(b){return D6(this,b);},"hC",function(){return DY(this);},"kq",function(){return A5r(this);},"sP",function(){return A1c(this);},"gk",function(){return A7X(this);},"nR",function(){return AVY(this);}],MR,"MissingResourceException",4,B6,[],0,3,0,0,E4,0,Co,[],1,0,0,["d4",function(b){return A0p(this,b);},"b4",function(b){return A$D(this,b);},"iX",function(){AYu(this);}],D8,0,E4,[],0,0,0,["k",function(b,c,d){return A2_(this,b,c,d);}],GD,0,D8,
[],0,0,0,["k",function(b,c,d){return A3Y(this,b,c,d);}],DX,0,E4,[],0,0,0,["k",function(b,c,d){return A3o(this,b,c,d);}],FX,0,D8,[],0,0,0,["k",function(b,c,d){return A7k(this,b,c,d);},"cb",function(b){A2L(this,b);}],Sw,0,D8,[],0,0,0,["k",function(b,c,d){return A_o(this,b,c,d);},"eJ",function(b,c,d){return AYK(this,b,c,d);}],Ez,"NumberFormatException",9,Cc,[],0,3,0,0,Ts,"Quantifier",5,H2,[ER],0,0,0,["gk",function(){return A76(this);}],TU,0,Co,[],0,0,0,["k",function(b,c,d){return AXw(this,b,c,d);},"b4",function(b)
{return A8H(this,b);}],W1,0,D,[ER,Dd],0,3,0,0,OL,0,CE,[],0,0,0,0,P_,0,CE,[],0,0,0,["k",function(b,c,d){return ATJ(this,b,c,d);},"cb",function(b){A8u(this,b);},"b4",function(b){return AUh(this,b);},"d4",function(b){return AT3(this,b);}],EN,0,CE,[],0,0,0,["k",function(b,c,d){return A5k(this,b,c,d);},"X",function(b){return AV_(this,b);},"d4",function(b){return ATE(this,b);},"cb",function(b){A9V(this,b);},"b4",function(b){return AVT(this,b);}],MQ,0,EN,[],0,0,0,["X",function(b){return AW_(this,b);}],Zy,0,CI,[],0,
0,0,["dn",function(b,c){return A6R(this,b,c);}],Fo,0,CI,[],0,0,0,["dn",function(b,c){return Ta(this,b,c);},"d4",function(b){return AZn(this,b);}],T_,0,CE,[],0,0,0,["cb",function(b){AYc(this,b);},"k",function(b,c,d){return ASV(this,b,c,d);},"d4",function(b){return A4e(this,b);},"b4",function(b){return A1f(this,b);}],Fw,0,CI,[],0,0,0,["eb",function(){return A6J(this);},"dn",function(b,c){return AWE(this,b,c);},"eJ",function(b,c,d){return AVH(this,b,c,d);},"eW",function(b,c,d,e){return AXm(this,b,c,d,e);},"d4",
function(b){return A0_(this,b);}],AGT,0,CI,[],0,0,0,["dn",function(b,c){return A2U(this,b,c);}],XR,0,CI,[],0,0,0,["dn",function(b,c){return ATa(this,b,c);}],GI,0,CE,[],0,0,0,["cb",function(b){A_b(this,b);},"k",function(b,c,d){return AZb(this,b,c,d);},"d4",function(b){return AXz(this,b);},"b4",function(b){return A83(this,b);}],SO,0,GI,[],0,0,0,0,V8,0,GI,[],0,0,0,0,S9,0,DX,[],0,0,0,["k",function(b,c,d){return A4L(this,b,c,d);}],UE,0,DX,[],0,0,0,["k",function(b,c,d){return A7J(this,b,c,d);}],Hx,0,DX,[],0,0,0,["k",
function(b,c,d){return A9S(this,b,c,d);},"cb",function(b){A$L(this,b);}],PR,0,Hx,[],0,0,0,["k",function(b,c,d){return AXj(this,b,c,d);},"cb",function(b){A78(this,b);}]]);
$rt_metadata([G8,0,DX,[],0,0,0,["k",function(b,c,d){return A_D(this,b,c,d);}],OY,0,G8,[],0,0,0,["k",function(b,c,d){return AWW(this,b,c,d);}],Qz,0,DX,[],0,0,0,["k",function(b,c,d){return A1$(this,b,c,d);}],UX,0,Hx,[],0,0,0,["k",function(b,c,d){return AUj(this,b,c,d);}],RT,0,G8,[],0,0,0,["k",function(b,c,d){return A3B(this,b,c,d);}],QA,0,E4,[],0,0,0,["k",function(b,c,d){return A_v(this,b,c,d);},"eJ",function(b,c,d){return A0L(this,b,c,d);}],TZ,0,E4,[],0,0,0,["k",function(b,c,d){return AZo(this,b,c,d);},"eJ",
function(b,c,d){return ASY(this,b,c,d);}],Gm,0,D,[],1,0,0,0,Xx,0,D8,[],0,0,0,["k",function(b,c,d){return ATw(this,b,c,d);}],Ss,0,FX,[],0,0,0,["k",function(b,c,d){return AYz(this,b,c,d);}],Ul,0,GD,[],0,0,0,["k",function(b,c,d){return A9A(this,b,c,d);}],UV,0,D8,[],0,0,0,["k",function(b,c,d){return AZh(this,b,c,d);}],V$,0,FX,[],0,0,0,["k",function(b,c,d){return ATA(this,b,c,d);}],Qk,0,GD,[],0,0,0,["k",function(b,c,d){return A9I(this,b,c,d);}],ABO,0,Co,[],4,0,0,["k",function(b,c,d){return A6_(this,b,c,d);},"b4",
function(b){return A6C(this,b);}],AAp,0,Co,[],0,0,0,["k",function(b,c,d){return A38(this,b,c,d);},"b4",function(b){return A4c(this,b);}],AJr,0,Co,[],0,0,0,["k",function(b,c,d){return AXd(this,b,c,d);},"b4",function(b){return A2v(this,b);}],SL,0,Co,[],4,0,0,["k",function(b,c,d){return A8U(this,b,c,d);},"b4",function(b){return A4D(this,b);}],AQ8,0,Co,[],0,0,0,["k",function(b,c,d){return A8p(this,b,c,d);},"b4",function(b){return A2T(this,b);}],AIQ,0,Co,[],0,0,0,["k",function(b,c,d){return A4y(this,b,c,d);},"b4",
function(b){return AWm(this,b);}],AGi,0,CE,[],0,0,0,["k",function(b,c,d){return A2d(this,b,c,d);},"cb",function(b){A4h(this,b);},"oF",function(){return A8b(this);},"b4",function(b){return A4f(this,b);}],ZK,0,CE,[],4,0,0,["k",function(b,c,d){return A8k(this,b,c,d);},"cb",function(b){A9q(this,b);},"oF",function(){return ASJ(this);},"b4",function(b){return A2k(this,b);}],AQL,0,Co,[],4,0,0,["k",function(b,c,d){return AXG(this,b,c,d);},"b4",function(b){return A5N(this,b);}],AN7,0,Co,[],0,0,0,["k",function(b,c,d)
{return AY5(this,b,c,d);},"b4",function(b){return A5J(this,b);}],AIc,0,Co,[],0,0,0,["k",function(b,c,d){return A6x(this,b,c,d);},"b4",function(b){return AUV(this,b);}],IU,0,CE,[],0,0,0,["k",function(b,c,d){return ATx(this,b,c,d);},"cb",function(b){A8Z(this,b);},"b4",function(b){return A0a(this,b);}],AQW,0,IU,[],0,0,0,["k",function(b,c,d){return AU2(this,b,c,d);},"eJ",function(b,c,d){return A1l(this,b,c,d);},"eW",function(b,c,d,e){return ATp(this,b,c,d,e);},"d4",function(b){return A7D(this,b);}],AMf,0,IU,[],
0,0,0,["k",function(b,c,d){return AX8(this,b,c,d);}],AMT,0,CI,[],0,0,0,["dn",function(b,c){return AVg(this,b,c);},"eJ",function(b,c,d){return A37(this,b,c,d);},"eW",function(b,c,d,e){return A5U(this,b,c,d,e);},"d4",function(b){return AWO(this,b);}],XI,0,CI,[],0,0,0,["dn",function(b,c){return AX_(this,b,c);}],O1,0,CI,[],0,0,0,["dn",function(b,c){return A9C(this,b,c);}],Ia,0,D,[],4,0,0,0,By,0,D,[],1,0,0,0,Td,0,CI,[],0,0,0,["dn",function(b,c){return A0t(this,b,c);}],NM,0,CE,[],0,0,0,["cb",function(b){A8C(this,
b);},"k",function(b,c,d){return A4E(this,b,c,d);},"eJ",function(b,c,d){return AWN(this,b,c,d);},"eW",function(b,c,d,e){return A44(this,b,c,d,e);},"d4",function(b){return ATk(this,b);},"b4",function(b){return A02(this,b);}],NS,0,CE,[],0,0,0,["cb",function(b){A4p(this,b);},"k",function(b,c,d){return AS0(this,b,c,d);},"eJ",function(b,c,d){return A8N(this,b,c,d);},"eW",function(b,c,d,e){return A0r(this,b,c,d,e);},"d4",function(b){return AVh(this,b);},"b4",function(b){return A8P(this,b);}],EX,0,CI,[],0,0,0,["dn",
function(b,c){return A9h(this,b,c);},"eJ",function(b,c,d){return A7Z(this,b,c,d);},"eW",function(b,c,d,e){return AUr(this,b,c,d,e);},"d4",function(b){return A8$(this,b);}],WA,0,Gm,[],4,0,0,["ov",function(b){return AUA(this,b);},"Ec",function(b,c){return AZ9(this,b,c);}],WB,0,Gm,[],4,0,0,["ov",function(b){return A9K(this,b);},"Ec",function(b,c){return A1Z(this,b,c);}],AEQ,0,D,[],0,0,0,0,Yy,0,D,[],0,0,0,0,NK,0,By,[],0,0,0,["bW",function(){return AMo(this);}],Nb,0,By,[],0,0,0,["bW",function(){return ANO(this);
}],AEI,0,By,[],0,0,0,["bW",function(){return A9s(this);}],AFl,0,By,[],0,0,0,["bW",function(){return A04(this);}],AFu,0,By,[],0,0,0,["bW",function(){return AVJ(this);}],NG,0,By,[],0,0,0,["bW",function(){return ZQ(this);}],L_,0,NG,[],0,0,0,["bW",function(){return AAY(this);}],AHS,0,By,[],0,0,0,["bW",function(){return A6b(this);}],OE,0,L_,[],0,0,0,["bW",function(){return AH8(this);}]]);
$rt_metadata([AMQ,0,OE,[],0,0,0,["bW",function(){return AYw(this);}],ACM,0,By,[],0,0,0,["bW",function(){return A4V(this);}],AAk,0,By,[],0,0,0,["bW",function(){return AYo(this);}],AJ_,0,By,[],0,0,0,["bW",function(){return A10(this);}],AQd,0,By,[],0,0,0,["bW",function(){return A7_(this);}],AH0,0,By,[],0,0,0,["bW",function(){return A2Z(this);}],APq,0,By,[],0,0,0,["bW",function(){return AWZ(this);}],AEq,0,By,[],0,0,0,["bW",function(){return A0c(this);}],AFZ,0,By,[],0,0,0,["bW",function(){return A4T(this);}],Y1,
0,By,[],0,0,0,["bW",function(){return AVr(this);}],AIx,0,By,[],0,0,0,["bW",function(){return A$0(this);}],APF,0,By,[],0,0,0,["bW",function(){return A2V(this);}],AE$,0,By,[],0,0,0,["bW",function(){return AXJ(this);}],ALd,0,By,[],0,0,0,["bW",function(){return AVx(this);}],ACY,0,By,[],0,0,0,["bW",function(){return A5W(this);}],AHb,0,By,[],0,0,0,["bW",function(){return A6Z(this);}],APT,0,By,[],0,0,0,["bW",function(){return A1g(this);}],ABy,0,By,[],0,0,0,["bW",function(){return AZI(this);}],AAK,0,By,[],0,0,0,["bW",
function(){return AYO(this);}],AHY,0,By,[],0,0,0,["bW",function(){return A9o(this);}],La,0,By,[],0,0,0,["bW",function(){return ACO(this);}],AQG,0,La,[],0,0,0,["bW",function(){return AYF(this);}],AMW,0,NK,[],0,0,0,["bW",function(){return A32(this);}],AAD,0,Nb,[],0,0,0,["bW",function(){return AWA(this);}],AKl,0,By,[],0,0,0,["bW",function(){return AXW(this);}],AKQ,0,By,[],0,0,0,["bW",function(){return A1N(this);}],AMA,0,By,[],0,0,0,["bW",function(){return A5G(this);}],AMR,0,By,[],0,0,0,["bW",function(){return ASQ(this);
}],AKu,0,D,[],4,0,0,0,Zu,0,D,[],4,3,0,0,Tx,0,D,[],0,3,0,0,RZ,0,D,[],0,3,0,0,AL$,0,D,[],4,3,0,0,Wo,0,Ew,[],0,3,0,["ls",function(){A3C(this);},"s3",function(b){AOk(this,b);}],Xn,0,Ew,[],0,3,0,["pu",function(){Y$(this);},"to",function(b){A6z(this,b);},"ls",function(){A1X(this);},"s3",function(b){AKo(this,b);}],AMF,0,Ew,[],0,3,0,["ls",function(){A9W(this);},"s3",function(b){ANS(this,b);}],CX,"EnumArt",12,EV,[],12,3,0,0,PO,0,Fb,[],0,0,0,0,U$,0,CS,[],0,3,0,["hT",function(){AGn(this);},"iE",function(b){AQt(this,b);
},"hN",function(b,c,d){YU(this,b,c,d);}],IN,"MinecraftError",12,Fg,[],0,3,0,0,US,0,D,[],0,3,0,0,Su,"AbstractCharClass$1",5,Bl,[],0,0,0,["X",function(b){return AVN(this,b);}],St,"AbstractCharClass$2",5,Bl,[],0,0,0,["X",function(b){return A3k(this,b);}],Pw,"CharClass$18",5,Bl,[],0,0,0,["X",function(b){return AXT(this,b);},"gk",function(){return A5Z(this);}],T2,0,Bl,[],0,0,0,["X",function(b){return A9j(this,b);}],T0,0,Bl,[],0,0,0,["X",function(b){return A0s(this,b);}],T1,0,Bl,[],0,0,0,["X",function(b){return A7i(this,
b);}],T5,0,Bl,[],0,0,0,["X",function(b){return A49(this,b);}],T6,0,Bl,[],0,0,0,["X",function(b){return ASK(this,b);}],T3,0,Bl,[],0,0,0,["X",function(b){return AWu(this,b);}]]);
$rt_metadata([T4,0,Bl,[],0,0,0,["X",function(b){return AYb(this,b);}],T8,0,Bl,[],0,0,0,["X",function(b){return A1n(this,b);}],T9,0,Bl,[],0,0,0,["X",function(b){return A4O(this,b);}],Pv,0,Bl,[],0,0,0,["X",function(b){return A_M(this,b);}],PJ,0,Bl,[],0,0,0,["X",function(b){return AWz(this,b);}],Pt,0,Bl,[],0,0,0,["X",function(b){return AU4(this,b);}],Pu,0,Bl,[],0,0,0,["X",function(b){return A5M(this,b);}],Pz,0,Bl,[],0,0,0,["X",function(b){return AXf(this,b);}],Ps,0,Bl,[],0,0,0,["X",function(b){return A$f(this,
b);}],Px,0,Bl,[],0,0,0,["X",function(b){return A4a(this,b);}],Py,0,Bl,[],0,0,0,["X",function(b){return AZE(this,b);}],OU,0,IC,[],0,0,0,["eJ",function(b,c,d){return AV5(this,b,c,d);},"eW",function(b,c,d,e){return A_B(this,b,c,d,e);},"lx",function(){return AUS(this);}],VL,0,IP,[H7],0,0,0,["mS",function(){return Ll(this);}],Ne,0,Fa,[DM],0,3,0,0,Mq,0,D,[],3,3,0,0,VD,0,D,[Mq],4,3,0,0,Uq,0,D,[Jf],3,3,0,0,Si,0,D,[Uq],3,3,0,0,S7,0,Fb,[Si],0,3,0,0,ST,0,D,[LT],3,3,0,0,OW,0,D,[ST],3,3,0,0,AJZ,0,FY,[ER,Dd,OW],0,3,0,0,QX,
0,D,[FB],0,0,0,0,VN,"AbstractCharClass$LazyJavaLowerCase$1",5,Bl,[],0,0,0,["X",function(b){return A1u(this,b);}],Tj,"AbstractCharClass$LazyJavaUpperCase$1",5,Bl,[],0,0,0,["X",function(b){return A30(this,b);}],QO,"AbstractCharClass$LazyJavaWhitespace$1",5,Bl,[],0,0,0,["X",function(b){return ATz(this,b);}],QN,"AbstractCharClass$LazyJavaMirrored$1",5,Bl,[],0,0,0,["X",function(b){return A5F(this,b);}],SC,"AbstractCharClass$LazyJavaDefined$1",5,Bl,[],0,0,0,["X",function(b){return AW6(this,b);}],Ug,"AbstractCharClass$LazyJavaDigit$1",
5,Bl,[],0,0,0,["X",function(b){return A$J(this,b);}],Pj,"AbstractCharClass$LazyJavaIdentifierIgnorable$1",5,Bl,[],0,0,0,["X",function(b){return AZd(this,b);}],U9,"AbstractCharClass$LazyJavaISOControl$1",5,Bl,[],0,0,0,["X",function(b){return A0g(this,b);}],Tg,"AbstractCharClass$LazyJavaJavaIdentifierPart$1",5,Bl,[],0,0,0,["X",function(b){return A_q(this,b);}],Ti,"AbstractCharClass$LazyJavaJavaIdentifierStart$1",5,Bl,[],0,0,0,["X",function(b){return AVj(this,b);}],Pa,"AbstractCharClass$LazyJavaLetter$1",5,Bl,
[],0,0,0,["X",function(b){return A1H(this,b);}],Uw,"AbstractCharClass$LazyJavaLetterOrDigit$1",5,Bl,[],0,0,0,["X",function(b){return A7v(this,b);}],Uz,"AbstractCharClass$LazyJavaSpaceChar$1",5,Bl,[],0,0,0,["X",function(b){return A8Y(this,b);}],V4,"AbstractCharClass$LazyJavaTitleCase$1",5,Bl,[],0,0,0,["X",function(b){return A$y(this,b);}],VE,"AbstractCharClass$LazyJavaUnicodeIdentifierPart$1",5,Bl,[],0,0,0,["X",function(b){return A13(this,b);}],ON,"AbstractCharClass$LazyJavaUnicodeIdentifierStart$1",5,Bl,[],
0,0,0,["X",function(b){return AVa(this,b);}],MB,"UnicodeCategory",5,Bl,[],0,0,0,["X",function(b){return AZe(this,b);}],Vr,"UnicodeCategoryScope",5,MB,[],0,0,0,["X",function(b){return A9X(this,b);}],Nl,0,D,[],0,3,0,0,JZ,0,D,[DM],0,3,0,["eo",function(b){return A$s(this,b);},"fl",function(){return A7G(this);},"lQ",function(b){return TO(this,b);}],Qi,0,D,[],3,3,0,0,Oy,0,D,[Qi],0,3,0,0,Sy,0,D,[K_],0,3,0,0,Wy,0,D,[Mq],0,0,0,0,VS,0,D,[],0,3,0,0,R_,0,D,[],3,3,0,0,AF6,0,Ij,[R_],0,3,0,0]);
$rt_metadata([AF0,0,D,[],0,3,0,0,N0,0,D,[],4,3,0,0,HQ,0,D,[],1,3,0,0,AMS,0,HQ,[],0,3,0,0,ACS,0,D,[],0,3,0,0,PC,0,HQ,[],0,3,0,0,Uc,0,D,[],0,3,0,0,Vw,0,Fa,[DM],0,3,0,0,TJ,0,D,[DH],0,0,0,["gw",function(){return A4o(this);}],TG,0,D,[DH],0,0,0,["gw",function(){return AYk(this);}],Rp,0,D,[DH],0,0,0,["gw",function(){return A8M(this);}],Rs,0,D,[DH],0,0,0,["gw",function(){return A6$(this);}],E1,0,EV,[],12,3,0,0,Rq,0,D,[DH],0,0,0,["gw",function(){return A7f(this);}],Rr,0,D,[DH],0,0,0,["gw",function(){return A1G(this);
}],Rn,0,D,[DH],0,0,0,["gw",function(){return A5P(this);}],Ro,0,D,[DH],0,0,0,["gw",function(){return A3d(this);}],Er,0,D,[],1,3,0,0,Ri,0,Er,[],0,3,0,0,Ow,0,D,[],0,3,0,0,SR,0,CS,[],0,3,0,["hT",function(){AD6(this);},"pu",function(){ANI(this);},"rC",function(){AYt(this);},"iE",function(b){AHj(this,b);},"pa",function(b,c){AC0(this,b,c);},"hN",function(b,c,d){ABu(this,b,c,d);}],IM,0,EV,[],12,3,0,0,MH,0,D,[J4,Dd],0,3,0,0,Lb,0,MH,[],0,0,0,0,WV,0,D,[],0,3,0,0,ARl,0,Er,[],0,3,0,0,Ch,0,Er,[],0,3,0,0,BQ,0,Er,[],0,3,0,
0,Cn,0,Er,[],0,3,0,0,SG,"EntityBubbleFX",12,C2,[],0,3,0,["ep",function(){Za(this);}],AFq,"EntitySmokeFX",12,C2,[],0,3,0,["kR",function(b,c,d,e,f,g,h){AJ7(this,b,c,d,e,f,g,h);},"ep",function(){ALU(this);}],Q6,"EntityExplodeFX",12,C2,[],0,3,0,["kR",function(b,c,d,e,f,g,h){AR$(this,b,c,d,e,f,g,h);},"ep",function(){AEU(this);}],O7,"EntityFlameFX",12,C2,[],0,3,0,["kR",function(b,c,d,e,f,g,h){AQJ(this,b,c,d,e,f,g,h);},"vh",function(b){return ASv(this,b);},"ep",function(){AAT(this);}],AA4,"EntityLavaFX",12,C2,[],0,
3,0,["vh",function(b){return AJ8(this,b);},"kR",function(b,c,d,e,f,g,h){AGU(this,b,c,d,e,f,g,h);},"ep",function(){ALj(this);}],ARD,"EntitySplashFX",12,JQ,[],0,3,0,0,AIq,0,D,[],4,3,0,0,H$,0,D,[],0,0,0,0,Vn,0,D,[],0,3,0,0,ACd,0,D,[],0,3,0,0,U8,"EntityPickupFX",12,C2,[],0,3,0,["kR",function(b,c,d,e,f,g,h){AMj(this,b,c,d,e,f,g,h);},"ep",function(){AAM(this);},"xy",function(){return AUx(this);}],Y8,0,D,[],0,3,0,0,HU,0,D,[],0,3,0,["eo",function(b){return A3O(this,b);},"fl",function(){return AVn(this);}],AJj,0,D,[],
0,0,0,0]);
function $rt_array(cls,data){this.co=null;this.$id$=0;this.type=cls;this.data=data;this.constructor=$rt_arraycls(cls);}$rt_array.prototype=Object.create(($rt_objcls()).prototype);$rt_array.prototype.toString=function(){var str="[";for(var i=0;i<this.data.length;++i){if(i>0){str+=", ";}str+=this.data[i].toString();}str+="]";return str;};$rt_setCloneMethod($rt_array.prototype,function(){var dataCopy;if('slice' in this.data){dataCopy=this.data.slice();}else {dataCopy=new this.data.constructor(this.data.length);for
(var i=0;i<dataCopy.length;++i){dataCopy[i]=this.data[i];}}return new $rt_array(this.type,dataCopy);});$rt_stringPool(["Can\'t enter monitor from another thread synchronously","@","0","","Timer hack thread","Player","fuckmojang123","randpasslol","Minecraft main thread","<init>","null","Patter is null",": ","    at ","Caused by: ","  at ","Index out of bounds","String contains invalid digits: ","String contains digits out of radix ","The value is too big for int type: ","String is null or empty","Illegal radix: ",
"#version 300 es","/","UTF-8","overflow-x:hidden;overflow-y:hidden;","WebGL 2.0 is not supported in your browser (",")","NONE","ESCAPE","1","2","3","4","5","6","7","8","9","MINUS","EQUALS","BACK","TAB","Q","W","E","R","T","Y","U","I","O","P","LBRACKET","RBRACKET","RETURN","LCONTROL","A","S","D","F","G","H","J","K","L","SEMICOLON","APOSTROPHE","GRAVE","LSHIFT","BACKSLASH","Z","X","C","V","B","N","M","COMMA","PERIOD","SLASH","RSHIFT","MULTIPLY","LMENU","SPACE","CAPITAL","F1","F2","F3","F4","F5","F6","F7","F8",
"F9","F10","NUMLOCK","SCROLL","NUMPAD7","NUMPAD8","NUMPAD9","SUBTRACT","NUMPAD4","NUMPAD5","NUMPAD6","ADD","NUMPAD1","NUMPAD2","NUMPAD3","NUMPAD0","DECIMAL","F11","F12","F13","F14","F15","F16","F17","F18","KANA","F19","CONVERT","NOCONVERT","YEN","NUMPADEQUALS","CIRCUMFLEX","AT","COLON","UNDERLINE","KANJI","STOP","AX","UNLABELED","NUMPADENTER","RCONTROL","SECTION","NUMPADCOMMA","DIVIDE","SYSRQ","RMENU","FUNCTION","PAUSE","HOME","UP","PRIOR","LEFT","RIGHT","END","DOWN","NEXT","INSERT","DELETE","CLEAR","LMETA",
"RMETA","APPS","POWER","SLEEP","\n","/default.png","Pre startup","Startup","EARLY BETA TESTING!","THIS PROJECT IS STILL IN TESTING!\nTHERE WILL BE BUGS!","Post startup","/dirt.png","Loading...","GL_INVALID_ENUM","GL_INVALID_VALUE","GL_INVALID_OPERATION","GL_OUT_OF_MEMORY","Unknown Error","CONTEXT_LOST_WEBGL","########## GL ERROR ##########","@ ","Pre render","Post render"," fps, "," chunk updates","/terrain.png","Loading level","Generating level","Building terrain","Simulating world for a bit","P: ",". T: ",
"Respawning","main","_net_peytonplayz585_minecraft_infdev_IndexedDBFilesystem","Initialization Failed","EAGPKG!!","invalid epk file","<file>"," end","invalid file hash for ","</file>","/rain.png","Either src or dest is null","window.indexedDB was null or undefined","Can\'t compare "," to ","OPENED","LOCKED","ERROR","yee","End of stream reached","Malformed UTF-8 sequence","charsetName is null","Should never been thrown","Stream closed","footer is not found","Unexpected end of ZLIB input stream","random.splash",
"bubble","splash","random.fizz","Pos","Motion","Rotation","FallDistance","Fire","Air","OnGround","explode","random.hurt","random.bow","random.fuse","mob.sheep","mob.pig","mob.pigdeath","/gui/items.png","/water.png","Slot "," is already occupied by "," when adding ","stone","wood","gravel","grass","cloth","sand","open error","path","New position "," is outside of range [0;","]","New limit ","The last float in dst "," is outside of array of size ","Length "," must be non-negative","Offset ","step.","liquid.water",
"lava","largesmoke","smoke","flame","fire.fire","Large chest","Get resource: ","Duplicate id: ","Furnace","Chest","Sign","MobSpawner","CONFLICT @ ","random.door_close","random.door_open","�","Replacement preconditions do not hold","The last byte in dst ","The last byte in src ","Index ","Capacity is negative: ","The last char in dst ","The last char in src "," is outside of string of size ","Start "," must be before end ","fire.ignite","BIG_ENDIAN","LITTLE_ENDIAN","need dictionary","unknown compression method",
"unknown header flags set","incorrect data check","incorrect length check","incorrect header check","invalid window size","bad extra field length","header crc mismatch","IGNORE","REPLACE","REPORT","Action must be non-null","invalid stored block lengths","invalid block type","too many length or distance symbols","invalid bit length repeat","oversubscribed dynamic bit lengths tree","incomplete dynamic bit lengths tree","oversubscribed distance tree","incomplete distance tree","empty distance tree with lengths",
"oversubscribed literal/length tree","incomplete literal/length tree","invalid distance code","invalid literal/length code","newAction must be non-null","matrix is not supported while recording display list use tessellator class instead","projection matrix stack overflow","texture matrix stack overflow","modelview matrix stack overflow","projection matrix stack underflow","texture matrix stack underflow","modelview matrix stack underflow","only GL_QUADS supported in a display list","vertex format inconsistent in display list",
"keyup","Forward","Left","Back","Right","Jump","Inventory","Drop","Chat","Toggle fog","Save location","Load location","Music: ","OFF","ON","Sound: ","Invert mouse: ","Show FPS: ","Render distance: ","View bobbing: ","3d anaglyph: ","Limit framerate: ","Difficulty: ","Graphics: ","FAST","FANCY","High Performance Mode: ","MipMap: ","FAR","NORMAL","SHORT","TINY","Peaceful","Easy","Normal","Hard","/level.dat","Data","RandomSeed","SpawnX","SpawnY","SpawnZ","Time","SizeOnDisk","Saving level","Saving chunks","LastPlayed",
"/level.dat_new","/level.dat_old","Failed to add entity ","All: ","More than "," updates, aborting lighting updates","DOHASDOSHIH!","TickNextTick list out of synch","%%","!!","/char.png","0123456789abcdef","C: ",". F: ",", O: ",", E: ","E: ",". B: ",", I: ","/terrain/sun.png","/terrain/moon.png","/clouds.png","Pre-beta!","As seen on TV!","Awesome!","100% pure!","May contain nuts!","Better than Prey!","More polygons!","Sexy!","Limited edition!","Flashing letters!","Made by Notch!","Coming soon!","Best in class!",
"When it\'s finished!","Absolutely dragon free!","Excitement!","More than 5000 sold!","One of a kind!","700+ hits on YouTube!","Indev!","Spiders everywhere!","Check it out!","Holy cow, man!","It\'s a game!","Made in Sweden!","Uses LWJGL!","Reticulating splines!","Minecraft!","Yaaay!","Alpha version!","Singleplayer!","Keyboard compatible!","Undocumented!","Ingots!","Exploding creepers!","That\'s not a moon!","l33t!","Create!","Survive!","Dungeon!","Exclusive!","The bee\'s knees!","Down with O.P.P.!","Closed source!",
"Classy!","Wow!","Not on steam!","9.95 euro!","Half price!","Oh man!","Awesome community!","Pixels!","Teetsuuuuoooo!","Kaaneeeedaaaa!","Now with difficulty!","Enhanced!","90% bug free!","Pretty!","12 herbs and spices!","Fat free!","Absolutely no memes!","Free dental!","Ask your doctor!","Minors welcome!","Cloud computing!","Legal in Finland!","Hard to label!","Technically good!","Bringing home the bacon!","Indie!","GOTY!","Ceci n\'est pas une title screen!","Euclidian!","Now in 3D!","Inspirational!","Herregud!",
"Complex cellular automata!","Yes, sir!","Played by cowboys!","OpenGL 1.1!","Thousands of colors!","Try it!","Age of Wonders is better!","Try the mushroom stew!","Sensational!","Hot tamale, hot hot tamale!","Play him off, keyboard cat!","Guaranteed!","Macroscopic!","Bring it on!","Random splash!","Call your mother!","Monster infighting!","Loved by millions!","Ultimate edition!","Freaky!","You\'ve got a brand new key!","Water proof!","Uninflammable!","Whoa, dude!","All inclusive!","Tell your friends!","NP is not in P!",
"Notch <3 Ez!","Music by C418!","Single player","Multi player","Play tutorial level","Options...","/gui/logo.png","Copyright Mojang Specifications. Do not distribute.","Free memory: ","% of ","MB","Allocated memory: ","% (","MB)","/particles.png","/gui/gui.png","/gui/icons.png","Minecraft Infdev","Minecraft Infdev (","Used memory: ","MB) of ","Notch","humanoid","http://www.minecraft.net/skin/",".png","Health","HurtTime","DeathTime","AttackTime","Score","Edit sign message:","mousedown","wheel","Slot","Crafting",
"/gui/inventory.png","/glsl/core.glsl","\n#define CC_a_color\n","#define CC_a_texture0\n","#define CC_lighting\n","#define CC_fog\n","#define CC_alphatest\n","#define CC_unit0\n","\n#define CC_VERT\n","\n\n","\n[/glsl/core.glsl][CC_VERT] ","broken shader file","\n#define CC_FRAG\n","\n[/glsl/core.glsl][CC_FRAG] ","a_position","a_texture0","a_color","\n[LINKER] ","matrix_m","matrix_p","matrix_t","colorUniform","normalUniform","light0Pos","light1Pos","fogColor","fogMode","fogStart","fogEnd","fogDensity","fogPremultiply",
"alphaTestF","tex0","texCoordV0","id","Count","Damage","array size does not equal image size","I Understand!","Respawn","Title menu","Game over!","Score: &e","Save and quit to title..","Back to game","Saving level..","Game menu","/armor/","_","chain","iron","diamond","gold","/item/sign.png","> "," <","Pig","/mob/spider_eyes.png","/mob/saddle.png","/mob/sheep_fur.png","/art/kz.png","random.drr","random.pop","/item/arrows.png","/item/cart.png","Wrong location! ","There\'s no such entity to remove: ","Attempted to place a tile entity where there was no entity tile!",
"Malformed input of length ","Unmappable characters of length ","Options","Controls...","Done","Controls","Select world","World","World ","- empty -"," ("," MB)","Delete world...","Cancel","Delete world","\'","\' will be lost forever!","Are you sure you want to delete this world?","Deleting World!","Please Wait...","(please wait)","%i","###","X#X","#X#","# #","##"," X ","#"," # ","X X","A "," B","#  ","## "," recipes","Is","In",", ","XXX","XX","X#"," #"," #X","# X","{",",","}","Lower","Upper","ASCII","Alpha",
"Digit","Alnum","Punct","Graph","Print","Blank","Cntrl","XDigit","javaLowerCase","javaUpperCase","javaWhitespace","javaMirrored","javaDefined","javaDigit","javaIdentifierIgnorable","javaISOControl","javaJavaIdentifierPart","javaJavaIdentifierStart","javaLetter","javaLetterOrDigit","javaSpaceChar","javaTitleCase","javaUnicodeIdentifierPart","javaUnicodeIdentifierStart","Space","w","s","d","BasicLatin","Latin-1Supplement","LatinExtended-A","LatinExtended-B","IPAExtensions","SpacingModifierLetters","CombiningDiacriticalMarks",
"Greek","Cyrillic","CyrillicSupplement","Armenian","Hebrew","Arabic","Syriac","ArabicSupplement","Thaana","Devanagari","Bengali","Gurmukhi","Gujarati","Oriya","Tamil","Telugu","Kannada","Malayalam","Sinhala","Thai","Lao","Tibetan","Myanmar","Georgian","HangulJamo","Ethiopic","EthiopicSupplement","Cherokee","UnifiedCanadianAboriginalSyllabics","Ogham","Runic","Tagalog","Hanunoo","Buhid","Tagbanwa","Khmer","Mongolian","Limbu","TaiLe","NewTaiLue","KhmerSymbols","Buginese","PhoneticExtensions","PhoneticExtensionsSupplement",
"CombiningDiacriticalMarksSupplement","LatinExtendedAdditional","GreekExtended","GeneralPunctuation","SuperscriptsandSubscripts","CurrencySymbols","CombiningMarksforSymbols","LetterlikeSymbols","NumberForms","Arrows","MathematicalOperators","MiscellaneousTechnical","ControlPictures","OpticalCharacterRecognition","EnclosedAlphanumerics","BoxDrawing","BlockElements","GeometricShapes","MiscellaneousSymbols","Dingbats","MiscellaneousMathematicalSymbols-A","SupplementalArrows-A","BraillePatterns","SupplementalArrows-B",
"MiscellaneousMathematicalSymbols-B","SupplementalMathematicalOperators","MiscellaneousSymbolsandArrows","Glagolitic","Coptic","GeorgianSupplement","Tifinagh","EthiopicExtended","SupplementalPunctuation","CJKRadicalsSupplement","KangxiRadicals","IdeographicDescriptionCharacters","CJKSymbolsandPunctuation","Hiragana","Katakana","Bopomofo","HangulCompatibilityJamo","Kanbun","BopomofoExtended","CJKStrokes","KatakanaPhoneticExtensions","EnclosedCJKLettersandMonths","CJKCompatibility","CJKUnifiedIdeographsExtensionA",
"YijingHexagramSymbols","CJKUnifiedIdeographs","YiSyllables","YiRadicals","ModifierToneLetters","SylotiNagri","HangulSyllables","HighSurrogates","HighPrivateUseSurrogates","LowSurrogates","PrivateUseArea","CJKCompatibilityIdeographs","AlphabeticPresentationForms","ArabicPresentationForms-A","VariationSelectors","VerticalForms","CombiningHalfMarks","CJKCompatibilityForms","SmallFormVariants","ArabicPresentationForms-B","HalfwidthandFullwidthForms","all","Specials","Cn","IsL","Lu","Ll","Lt","Lm","Lo","IsM","Mn",
"Me","Mc","Nd","Nl","No","IsZ","Zs","Zl","Zp","IsC","Cc","Cf","Co","Cs","IsP","Pd","Ps","Pe","Pc","Po","IsS","Sm","Sc","Sk","So","Pi","Pf","/gui/furnace.png","/gui/crafting.png","/gui/container.png","Kebab","Aztec","Alban","Aztec2","Bomb","Plant","Wasteland","Pool","Courbet","Sea","Sunset","Wanderer","Match","Bust","Stage","Void","SkullAndRoses","Fighters","Pointer","Yes","Arrow","Item","Painting","Mob","Monster","Creeper","Skeleton","Spider","Giant","Zombie","Sheep","PrimedTnt","FallingSand","Minecart","xPos",
"zPos","The chunk file \'","\' was supposed to be at [","], but the file contained a chunk from [","]. It\'s data will be moved to file \'","\', and a new empty chunk will be created for file \'","\' for [","Corrupt chunk \'","\' was found at: [","The file will be deleted","Failed to serialize chunk at [","] to byte array","LastUpdate","Blocks","SkyLight","BlockLight","HeightMap","TerrainPopulated","Light too large, skipping!","UTF Error","FILE","DIRECTORY","FALSE","abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 ,.:-_\'*!\"#%/()=+?[]{}<>",
"Sky","Block","random.explode","OW KNOWS!"]);
B4.prototype.toString=function(){return $rt_ustr(this);};
B4.prototype.valueOf=B4.prototype.toString;D.prototype.toString=function(){return $rt_ustr(AUo(this));};
D.prototype.__teavm_class__=function(){return $dbg_class(this);};
function Long_eq(a,b){return a.hi===b.hi&&a.lo===b.lo;}function Long_ne(a,b){return a.hi!==b.hi||a.lo!==b.lo;}function Long_gt(a,b){if(a.hi<b.hi){return false;}if(a.hi>b.hi){return true;}var x=a.lo>>>1;var y=b.lo>>>1;if(x!==y){return x>y;}return (a.lo&1)>(b.lo&1);}function Long_ge(a,b){if(a.hi<b.hi){return false;}if(a.hi>b.hi){return true;}var x=a.lo>>>1;var y=b.lo>>>1;if(x!==y){return x>=y;}return (a.lo&1)>=(b.lo&1);}function Long_lt(a,b){if(a.hi>b.hi){return false;}if(a.hi<b.hi){return true;}var x=a.lo>>>
1;var y=b.lo>>>1;if(x!==y){return x<y;}return (a.lo&1)<(b.lo&1);}function Long_le(a,b){if(a.hi>b.hi){return false;}if(a.hi<b.hi){return true;}var x=a.lo>>>1;var y=b.lo>>>1;if(x!==y){return x<=y;}return (a.lo&1)<=(b.lo&1);}function Long_add(a,b){if(a.hi===a.lo>>31&&b.hi===b.lo>>31){return Long_fromNumber(a.lo+b.lo);}else if(Math.abs(a.hi)<Long_MAX_NORMAL&&Math.abs(b.hi)<Long_MAX_NORMAL){return Long_fromNumber(Long_toNumber(a)+Long_toNumber(b));}var a_lolo=a.lo&0xFFFF;var a_lohi=a.lo>>>16;var a_hilo=a.hi&0xFFFF;var a_hihi
=a.hi>>>16;var b_lolo=b.lo&0xFFFF;var b_lohi=b.lo>>>16;var b_hilo=b.hi&0xFFFF;var b_hihi=b.hi>>>16;var lolo=a_lolo+b_lolo|0;var lohi=a_lohi+b_lohi+(lolo>>16)|0;var hilo=a_hilo+b_hilo+(lohi>>16)|0;var hihi=a_hihi+b_hihi+(hilo>>16)|0;return new Long(lolo&0xFFFF|(lohi&0xFFFF)<<16,hilo&0xFFFF|(hihi&0xFFFF)<<16);}function Long_inc(a){var lo=a.lo+1|0;var hi=a.hi;if(lo===0){hi=hi+1|0;}return new Long(lo,hi);}function Long_dec(a){var lo=a.lo -1|0;var hi=a.hi;if(lo=== -1){hi=hi -1|0;}return new Long(lo,hi);}function Long_neg(a)
{return Long_inc(new Long(a.lo^0xFFFFFFFF,a.hi^0xFFFFFFFF));}function Long_sub(a,b){if(a.hi===a.lo>>31&&b.hi===b.lo>>31){return Long_fromNumber(a.lo -b.lo);}var a_lolo=a.lo&0xFFFF;var a_lohi=a.lo>>>16;var a_hilo=a.hi&0xFFFF;var a_hihi=a.hi>>>16;var b_lolo=b.lo&0xFFFF;var b_lohi=b.lo>>>16;var b_hilo=b.hi&0xFFFF;var b_hihi=b.hi>>>16;var lolo=a_lolo -b_lolo|0;var lohi=a_lohi -b_lohi+(lolo>>16)|0;var hilo=a_hilo -b_hilo+(lohi>>16)|0;var hihi=a_hihi -b_hihi+(hilo>>16)|0;return new Long(lolo&0xFFFF|(lohi&0xFFFF)<<
16,hilo&0xFFFF|(hihi&0xFFFF)<<16);}function Long_compare(a,b){var r=a.hi -b.hi;if(r!==0){return r;}r=(a.lo>>>1) -(b.lo>>>1);if(r!==0){return r;}return (a.lo&1) -(b.lo&1);}function Long_isPositive(a){return (a.hi&0x80000000)===0;}function Long_isNegative(a){return (a.hi&0x80000000)!==0;}function Long_mul(a,b){var positive=Long_isNegative(a)===Long_isNegative(b);if(Long_isNegative(a)){a=Long_neg(a);}if(Long_isNegative(b)){b=Long_neg(b);}var a_lolo=a.lo&0xFFFF;var a_lohi=a.lo>>>16;var a_hilo=a.hi&0xFFFF;var a_hihi
=a.hi>>>16;var b_lolo=b.lo&0xFFFF;var b_lohi=b.lo>>>16;var b_hilo=b.hi&0xFFFF;var b_hihi=b.hi>>>16;var lolo=0;var lohi=0;var hilo=0;var hihi=0;lolo=a_lolo*b_lolo|0;lohi=lolo>>>16;lohi=(lohi&0xFFFF)+a_lohi*b_lolo|0;hilo=hilo+(lohi>>>16)|0;lohi=(lohi&0xFFFF)+a_lolo*b_lohi|0;hilo=hilo+(lohi>>>16)|0;hihi=hilo>>>16;hilo=(hilo&0xFFFF)+a_hilo*b_lolo|0;hihi=hihi+(hilo>>>16)|0;hilo=(hilo&0xFFFF)+a_lohi*b_lohi|0;hihi=hihi+(hilo>>>16)|0;hilo=(hilo&0xFFFF)+a_lolo*b_hilo|0;hihi=hihi+(hilo>>>16)|0;hihi=hihi+a_hihi*b_lolo
+a_hilo*b_lohi+a_lohi*b_hilo+a_lolo*b_hihi|0;var result=new Long(lolo&0xFFFF|lohi<<16,hilo&0xFFFF|hihi<<16);return positive?result:Long_neg(result);}function Long_div(a,b){if(Math.abs(a.hi)<Long_MAX_NORMAL&&Math.abs(b.hi)<Long_MAX_NORMAL){return Long_fromNumber(Long_toNumber(a)/Long_toNumber(b));}return (Long_divRem(a,b))[0];}function Long_udiv(a,b){if(a.hi>=0&&a.hi<Long_MAX_NORMAL&&b.hi>=0&&b.hi<Long_MAX_NORMAL){return Long_fromNumber(Long_toNumber(a)/Long_toNumber(b));}return (Long_udivRem(a,b))[0];}function Long_rem(a,
b){if(Math.abs(a.hi)<Long_MAX_NORMAL&&Math.abs(b.hi)<Long_MAX_NORMAL){return Long_fromNumber(Long_toNumber(a)%Long_toNumber(b));}return (Long_divRem(a,b))[1];}function Long_urem(a,b){if(a.hi>=0&&a.hi<Long_MAX_NORMAL&&b.hi>=0&&b.hi<Long_MAX_NORMAL){return Long_fromNumber(Long_toNumber(a)/Long_toNumber(b));}return (Long_udivRem(a,b))[1];}function Long_divRem(a,b){if(b.lo===0&&b.hi===0){throw new Error("Division by zero");}var positive=Long_isNegative(a)===Long_isNegative(b);if(Long_isNegative(a)){a=Long_neg(a);}if
(Long_isNegative(b)){b=Long_neg(b);}a=new LongInt(a.lo,a.hi,0);b=new LongInt(b.lo,b.hi,0);var q=LongInt_div(a,b);a=new Long(a.lo,a.hi);q=new Long(q.lo,q.hi);return positive?[q,a]:[Long_neg(q),Long_neg(a)];}function Long_udivRem(a,b){if(b.lo===0&&b.hi===0){throw new Error("Division by zero");}a=new LongInt(a.lo,a.hi,0);b=new LongInt(b.lo,b.hi,0);var q=LongInt_div(a,b);a=new Long(a.lo,a.hi);q=new Long(q.lo,q.hi);return [q,a];}function Long_shiftLeft16(a){return new Long(a.lo<<16,a.lo>>>16|a.hi<<16);}function Long_shiftRight16(a)
{return new Long(a.lo>>>16|a.hi<<16,a.hi>>>16);}function Long_and(a,b){return new Long(a.lo&b.lo,a.hi&b.hi);}function Long_or(a,b){return new Long(a.lo|b.lo,a.hi|b.hi);}function Long_xor(a,b){return new Long(a.lo^b.lo,a.hi^b.hi);}function Long_shl(a,b){b&=63;if(b===0){return a;}else if(b<32){return new Long(a.lo<<b,a.lo>>>32 -b|a.hi<<b);}else if(b===32){return new Long(0,a.lo);}else {return new Long(0,a.lo<<b -32);}}function Long_shr(a,b){b&=63;if(b===0){return a;}else if(b<32){return new Long(a.lo>>>b|a.hi
<<32 -b,a.hi>>b);}else if(b===32){return new Long(a.hi,a.hi>>31);}else {return new Long(a.hi>>b -32,a.hi>>31);}}function Long_shru(a,b){b&=63;if(b===0){return a;}else if(b<32){return new Long(a.lo>>>b|a.hi<<32 -b,a.hi>>>b);}else if(b===32){return new Long(a.hi,0);}else {return new Long(a.hi>>>b -32,0);}}function LongInt(lo,hi,sup){this.lo=lo;this.hi=hi;this.sup=sup;}function LongInt_mul(a,b){var a_lolo=(a.lo&0xFFFF)*b|0;var a_lohi=(a.lo>>>16)*b|0;var a_hilo=(a.hi&0xFFFF)*b|0;var a_hihi=(a.hi>>>16)*b|0;var sup
=a.sup*b|0;a_lohi=a_lohi+(a_lolo>>>16)|0;a_hilo=a_hilo+(a_lohi>>>16)|0;a_hihi=a_hihi+(a_hilo>>>16)|0;sup=sup+(a_hihi>>>16)|0;a.lo=a_lolo&0xFFFF|a_lohi<<16;a.hi=a_hilo&0xFFFF|a_hihi<<16;a.sup=sup&0xFFFF;}function LongInt_sub(a,b){var a_lolo=a.lo&0xFFFF;var a_lohi=a.lo>>>16;var a_hilo=a.hi&0xFFFF;var a_hihi=a.hi>>>16;var b_lolo=b.lo&0xFFFF;var b_lohi=b.lo>>>16;var b_hilo=b.hi&0xFFFF;var b_hihi=b.hi>>>16;a_lolo=a_lolo -b_lolo|0;a_lohi=a_lohi -b_lohi+(a_lolo>>16)|0;a_hilo=a_hilo -b_hilo+(a_lohi>>16)|0;a_hihi=a_hihi -
b_hihi+(a_hilo>>16)|0;var sup=a.sup -b.sup+(a_hihi>>16)|0;a.lo=a_lolo&0xFFFF|a_lohi<<16;a.hi=a_hilo&0xFFFF|a_hihi<<16;a.sup=sup;}function LongInt_add(a,b){var a_lolo=a.lo&0xFFFF;var a_lohi=a.lo>>>16;var a_hilo=a.hi&0xFFFF;var a_hihi=a.hi>>>16;var b_lolo=b.lo&0xFFFF;var b_lohi=b.lo>>>16;var b_hilo=b.hi&0xFFFF;var b_hihi=b.hi>>>16;a_lolo=a_lolo+b_lolo|0;a_lohi=a_lohi+b_lohi+(a_lolo>>16)|0;a_hilo=a_hilo+b_hilo+(a_lohi>>16)|0;a_hihi=a_hihi+b_hihi+(a_hilo>>16)|0;var sup=a.sup+b.sup+(a_hihi>>16)|0;a.lo=a_lolo&0xFFFF
|a_lohi<<16;a.hi=a_hilo&0xFFFF|a_hihi<<16;a.sup=sup;}function LongInt_inc(a){a.lo=a.lo+1|0;if(a.lo===0){a.hi=a.hi+1|0;if(a.hi===0){a.sup=a.sup+1&0xFFFF;}}}function LongInt_dec(a){a.lo=a.lo -1|0;if(a.lo=== -1){a.hi=a.hi -1|0;if(a.hi=== -1){a.sup=a.sup -1&0xFFFF;}}}function LongInt_ucompare(a,b){var r=a.sup -b.sup;if(r!==0){return r;}r=(a.hi>>>1) -(b.hi>>>1);if(r!==0){return r;}r=(a.hi&1) -(b.hi&1);if(r!==0){return r;}r=(a.lo>>>1) -(b.lo>>>1);if(r!==0){return r;}return (a.lo&1) -(b.lo&1);}function LongInt_numOfLeadingZeroBits(a)
{var n=0;var d=16;while(d>0){if(a>>>d!==0){a>>>=d;n=n+d|0;}d=d/2|0;}return 31 -n;}function LongInt_shl(a,b){if(b===0){return;}if(b<32){a.sup=(a.hi>>>32 -b|a.sup<<b)&0xFFFF;a.hi=a.lo>>>32 -b|a.hi<<b;a.lo<<=b;}else if(b===32){a.sup=a.hi&0xFFFF;a.hi=a.lo;a.lo=0;}else if(b<64){a.sup=(a.lo>>>64 -b|a.hi<<b -32)&0xFFFF;a.hi=a.lo<<b;a.lo=0;}else if(b===64){a.sup=a.lo&0xFFFF;a.hi=0;a.lo=0;}else {a.sup=a.lo<<b -64&0xFFFF;a.hi=0;a.lo=0;}}function LongInt_shr(a,b){if(b===0){return;}if(b===32){a.lo=a.hi;a.hi=a.sup;a.sup
=0;}else if(b<32){a.lo=a.lo>>>b|a.hi<<32 -b;a.hi=a.hi>>>b|a.sup<<32 -b;a.sup>>>=b;}else if(b===64){a.lo=a.sup;a.hi=0;a.sup=0;}else if(b<64){a.lo=a.hi>>>b -32|a.sup<<64 -b;a.hi=a.sup>>>b -32;a.sup=0;}else {a.lo=a.sup>>>b -64;a.hi=0;a.sup=0;}}function LongInt_copy(a){return new LongInt(a.lo,a.hi,a.sup);}function LongInt_div(a,b){var bits=b.hi!==0?LongInt_numOfLeadingZeroBits(b.hi):LongInt_numOfLeadingZeroBits(b.lo)+32;var sz=1+(bits/16|0);var dividentBits=bits%16;LongInt_shl(b,bits);LongInt_shl(a,dividentBits);var q
=new LongInt(0,0,0);while(sz-->0){LongInt_shl(q,16);var digitA=(a.hi>>>16)+0x10000*a.sup;var digitB=b.hi>>>16;var digit=digitA/digitB|0;var t=LongInt_copy(b);LongInt_mul(t,digit);if(LongInt_ucompare(t,a)>=0){while(LongInt_ucompare(t,a)>0){LongInt_sub(t,b); --digit;}}else {while(true){var nextT=LongInt_copy(t);LongInt_add(nextT,b);if(LongInt_ucompare(nextT,a)>0){break;}t=nextT;++digit;}}LongInt_sub(a,t);q.lo|=digit;LongInt_shl(a,16);}LongInt_shr(a,bits+16);return q;}function TeaVMThread(runner){this.status=3;this.stack
=[];this.suspendCallback=null;this.runner=runner;this.attribute=null;this.completeCallback=null;}TeaVMThread.prototype.push=function(){for(var i=0;i<arguments.length;++i){this.stack.push(arguments[i]);}return this;};TeaVMThread.prototype.s=TeaVMThread.prototype.push;TeaVMThread.prototype.pop=function(){return this.stack.pop();};TeaVMThread.prototype.l=TeaVMThread.prototype.pop;TeaVMThread.prototype.isResuming=function(){return this.status===2;};TeaVMThread.prototype.isSuspending=function(){return this.status
===1;};TeaVMThread.prototype.suspend=function(callback){this.suspendCallback=callback;this.status=1;};TeaVMThread.prototype.start=function(callback){if(this.status!==3){throw new Error("Thread already started");}if($rt_currentNativeThread!==null){throw new Error("Another thread is running");}this.status=0;this.completeCallback=callback?callback:function(result){if(result instanceof Error){throw result;}};this.run();};TeaVMThread.prototype.resume=function(){if($rt_currentNativeThread!==null){throw new Error("Another thread is running");}this.status
=2;this.run();};TeaVMThread.prototype.run=function(){$rt_currentNativeThread=this;var result;try {result=this.runner();}catch(e){result=e;}finally {$rt_currentNativeThread=null;}if(this.suspendCallback!==null){var self=this;var callback=this.suspendCallback;this.suspendCallback=null;callback(function(){self.resume();});}else if(this.status===0){this.completeCallback(result);}};function $rt_suspending(){var thread=$rt_nativeThread();return thread!=null&&thread.isSuspending();}function $rt_resuming(){var thread
=$rt_nativeThread();return thread!=null&&thread.isResuming();}function $rt_suspend(callback){var nativeThread=$rt_nativeThread();if(nativeThread===null){throw new Error("Suspension point reached from non-threading context (perhaps, from native JS method).");}return nativeThread.suspend(callback);}function $rt_startThread(runner,callback){(new TeaVMThread(runner)).start(callback);}var $rt_currentNativeThread=null;function $rt_nativeThread(){return $rt_currentNativeThread;}function $rt_invalidPointer(){throw new Error("Invalid recorded state");}main
=$rt_mainStarter(AQ6);
(function(){var c;c=YM.prototype;c.dispatchEvent=c.Mv;c.addEventListener=c.Ye;c.removeEventListener=c.a0h;c.getLength=c.Va;c.get=c.Sk;c.addEventListener=c.Tz;c.removeEventListener=c.Ok;c=W$.prototype;c.handleEvent=c.gQ;c=Xe.prototype;c.handleEvent=c.gQ;c=Xf.prototype;c.handleEvent=c.gQ;c=Xc.prototype;c.handleEvent=c.gQ;c=Xd.prototype;c.handleEvent=c.gQ;c=Xa.prototype;c.handleEvent=c.gQ;c=Xb.prototype;c.handleEvent=c.gQ;c=W_.prototype;c.handleEvent=c.gQ;c=QC.prototype;c.handleEvent=c.gQ;c=QB.prototype;c.handleEvent
=c.gQ;c=W9.prototype;c.stateChanged=c.a0Y;c=TN.prototype;c.handleEvent=c.gw;c=TM.prototype;c.handleEvent=c.gw;c=TL.prototype;c.handleEvent=c.gw;c=TK.prototype;c.handleEvent=c.gQ;c=AA0.prototype;c.getLength=c.Zw;c.get=c.Q0;c=QF.prototype;c.handleEvent=c.gQ;c=QE.prototype;c.handleEvent=c.gQ;c=QD.prototype;c.onTimer=c.Gg;c=Ty.prototype;c.onTimer=c.Gg;c=TF.prototype;c.handleEvent=c.gw;c=TE.prototype;c.handleEvent=c.gw;c=TJ.prototype;c.handleEvent=c.gw;c=TG.prototype;c.handleEvent=c.gw;c=Rp.prototype;c.handleEvent
=c.gw;c=Rs.prototype;c.handleEvent=c.gw;c=Rq.prototype;c.handleEvent=c.gw;c=Rr.prototype;c.handleEvent=c.gw;c=Rn.prototype;c.handleEvent=c.gw;c=Ro.prototype;c.handleEvent=c.gw;})();
})();

//# sourceMappingURL=app.js.map