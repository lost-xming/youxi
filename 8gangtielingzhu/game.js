var CRENDER_DEBUG=false;function ImagesPreloader()
{var self=this;this.curItem=-1;this.loadedImages={};this.data=null;this.endCallback=null;this.processCallback=null;this.load=function(data,endCallback,processCallback)
{this.data=data;this.endCallback=endCallback;this.processCallback=processCallback;for(var i=0;i<this.data.length;i++)
{var item=this.data[i];var img=new Image();img.src=item.src;this.loadedImages[item.name]=img;}
wait();};function wait()
{var itemsLoaded=0;var itemsTotal=0;for(var key in self.loadedImages)
{if(self.loadedImages[key].complete)itemsLoaded++;itemsTotal++;}
if(itemsLoaded>=itemsTotal)
{if(self.endCallback)self.endCallback(self.loadedImages);return;}
else
{if(self.processCallback)self.processCallback(Math.floor(itemsLoaded/itemsTotal*100));setTimeout(wait,50);}}}
var Utils={touchScreen:false,globalScale:1,setCookie:function(name,value)
{window.localStorage.setItem(name,value);},getCookie:function(name)
{return window.localStorage.getItem(name);},getObjectLeft:function(element)
{result=element.offsetLeft;if(element.offsetParent)result+=Utils.getObjectLeft(element.offsetParent);return result;},getObjectTop:function(element)
{result=element.offsetTop;if(element.offsetParent)result+=Utils.getObjectTop(element.offsetParent);return result;},parseGet:function()
{var get={};var s=new String(window.location);var p=s.indexOf("?");var tmp,params;if(p!=-1)
{s=s.substr(p+1,s.length);params=s.split("&");for(var i=0;i<params.length;i++)
{tmp=params[i].split("=");get[tmp[0]]=tmp[1];}}
return get;},globalPixelScale:1,getMouseCoord:function(event,object)
{var e=event||window.event;if(e.touches)e=e.touches[0];if(!e)return{x:0,y:0};var x=0;var y=0;var mouseX=0;var mouseY=0;if(object)
{x=Utils.getObjectLeft(object);y=Utils.getObjectTop(object);}
if(e.pageX||e.pageY)
{mouseX=e.pageX;mouseY=e.pageY;}
else if(e.clientX||e.clientY)
{mouseX=e.clientX+(document.documentElement.scrollLeft||document.body.scrollLeft)-document.documentElement.clientLeft;mouseY=e.clientY+(document.documentElement.scrollTop||document.body.scrollTop)-document.documentElement.clientTop;}
var retX=(mouseX-x);var retY=(mouseY-y);return{x:retX,y:retY};},extend:function(Child,Parent)
{var F=function(){};F.prototype=Parent.prototype;Child.prototype=new F();Child.prototype.constructor=Child;Child.superclass=Parent.prototype;},removeFromArray:function(arr,item)
{var tmp=[];for(var i=0;i<arr.length;i++)
{if(arr[i]!=item)tmp.push(arr[i]);}
return tmp;},showLoadProgress:function(val)
{var scl=Utils.globalScale;var s='Loading: '+val+'%';s+='<br><br>';s+='<div style="display: block; background: #000; width: '+(val*scl*2)+'px; height: '+(10*scl)+'px;">&nbsp;</div>';document.getElementById('progress').innerHTML=s;},mobileHideAddressBar:function()
{window.scrollTo(0,1);},mobileCheckIphone4:function()
{if(window.devicePixelRatio)
{if(navigator.userAgent.indexOf('iPhone')!=-1&&window.devicePixelRatio==2)return true;}
return false;},checkSpilgamesEnvironment:function()
{return(typeof ExternalAPI!="undefined"&&ExternalAPI.type=="Spilgames"&&ExternalAPI.check());},mobileCorrectPixelRatio:function()
{var meta=document.createElement('meta');meta.name="viewport";var content="target-densitydpi=device-dpi, user-scalable=no";if(Utils.checkSpilgamesEnvironment())
{if(window.devicePixelRatio>1)content+=", initial-scale=0.5, maximum-scale=0.5, minimum-scale=0.5";else content+=", initial-scale=1, maximum-scale=1, minimum-scale=1";}
else
{if(Utils.mobileCheckIphone4())content+=", initial-scale=0.5, maximum-scale=0.5, minimum-scale=0.5";else content+=", initial-scale=1, maximum-scale=1, minimum-scale=1";}
meta.content=content;document.getElementsByTagName('head')[0].appendChild(meta);},getMobileScreenResolution:function(landscape)
{Utils.touchScreen=("ontouchstart"in window);var scale=1;var w=0;var h=0;var container={width:window.innerWidth,height:window.innerHeight};if(!Utils.touchScreen||container.height>container.width)
{w=container.width;h=container.height;}
else
{w=container.height;h=container.width;}
if(Utils.touchScreen)
{if(w>320&&w<=480)scale=1.5;if(w>480)scale=2;if(Utils.mobileCheckIphone4())scale=2;}
else
{if(landscape)
{if(h>=640)scale=2;if(h<640&&h>=480)scale=1.5;}
else
{if(h>=800&&h<960)scale=1.5;if(h>=960)scale=2;}}
return Utils.getScaleScreenResolution(scale,landscape);},getScaleScreenResolution:function(scale,landscape)
{var w,h;if(scale==0.75)
{w=240;h=400;}
if(scale==1)
{w=320;h=480;}
if(scale==1.5)
{w=480;h=720;}
if(scale==2)
{w=640;h=960;}
if(landscape)
{var tmp=w;w=h;h=tmp;}
return{width:w,height:h,scale:scale};},imagesRoot:'images',createLayout:function(container,resolution)
{var scl=Utils.globalScale;var height=window.innerHeight;if("orientation"in window)height=1024;else document.body.style.overflow="hidden";var s="";s+='<div id="progress_container" align="center" style="width: 100%; height: '+height+'px; display: block; width: 100%; position: absolute; left: 0px; top: 0px;">';s+='<table><tr><td id="progress" align="center" valign="middle" style="width: '+resolution.width+'px; height: '+resolution.height+'px; color: #000; background: #fff; font-weight: bold; font-family: Verdana; font-size: '+(12*scl)+'px; vertical-align: middle;"></td></tr></table>';s+='</div>';s+='<div id="screen_background_container" align="center" style="width: 100%; height: '+height+'px; position: absolute; left: 0px; top: 0px; display: none; z-index: 2;">'
s+='<canvas id="screen_background" width="'+resolution.width+'" height="'+resolution.height+'"></canvas>';s+='</div>';s+='<div id="screen_container" align="center" style="width: 100%; height: '+height+'px; position: absolute; left: 0px; top: 0px; display: none; z-index: 3;">';s+='<canvas id="screen" width="'+resolution.width+'" height="'+resolution.height+'">You browser does not support this application :(</canvas>';s+='</div>';container.innerHTML=s;var p=document.createElement("div");p.setAttribute("id","p2l_container");p.setAttribute("align","center");var w=resolution.width;p.setAttribute("style","width: 100%; height: "+height+"px; position: absolute; left: 0px; top: 0px; display: none; z-index: 1000; background: #fff;");p.innerHTML='<img id="p2l" src="'+Utils.imagesRoot+'/p2l.jpg" style="padding-top: '+((w-240)/2)+'px" />';document.body.appendChild(p);},preventEvent:function(e)
{e.preventDefault();e.stopPropagation();e.cancelBubble=true;e.returnValue=false;return false;},addMobileListeners:function(landscape)
{document.body.addEventListener("touchstart",Utils.preventEvent,false);window.addEventListener("scroll",function(e){setTimeout("window.scrollTo(0, 1)",300);},false);window.addEventListener("orientationchange",function(){eval("Utils.checkOrientation("+(landscape?"true":"false")+")",100);},false);setTimeout(Utils.mobileHideAddressBar,500);},storeOrient:null,checkOrientation:function(landscape)
{if(!("orientation"in window))return;if(!document.getElementById('screen_container'))return;var orient=(Math.abs(window.orientation)==90);if(Utils.storeOrient===orient)return;Utils.storeOrient=orient;var ok=(orient==landscape);if(!ok)
{Utils.dispatchEvent("lockscreen");document.getElementById('p2l_container').style.display='block';document.getElementById('screen_background_container').style.display='none';document.getElementById('screen_container').style.display='none';}
else
{Utils.dispatchEvent("unlockscreen");document.getElementById('p2l_container').style.display='none';document.getElementById('screen_background_container').style.display='block';document.getElementById('screen_container').style.display='block';}
if(Utils.checkSpilgamesEnvironment())document.getElementById('p2l_container').style.display='none';setTimeout(Utils.mobileHideAddressBar,50);},addFitLayoutListeners:function()
{window.addEventListener("resize",function(){setTimeout(Utils.fitLayoutToScreen,300);},false);},fitLayoutToScreen:function(container)
{var p,s,width,height;if(typeof container!="object"||!container.width)
{width=window.innerWidth;height=window.innerHeight;if(Utils.checkSpilgamesEnvironment())height-=25;container={width:width,height:height};}
s=document.getElementById("screen");if(!s)return;if(!s.initWidth)
{s.initWidth=s.width;s.initHeight=s.height;}
width=s.initWidth;height=s.initHeight;var scale=1;var scaleX=container.width/width;var scaleY=container.height/height;scale=(scaleX<scaleY?scaleX:scaleY);Utils.globalPixelScale=scale;width=Math.floor(width*scale);height=Math.floor(height*scale);Utils.resizeElement("screen",width,height);Utils.resizeElement("screen_background",width,height);s=document.getElementById("progress");if(s)
{s.style.width=width+"px";s.style.height=height+"px";}
Utils.dispatchEvent("fitlayout");setTimeout(Utils.mobileHideAddressBar,50);},resizeElement:function(id,width,height)
{var s=document.getElementById(id);if(!s)return;s.setAttribute("width",width);s.setAttribute("height",height);},drawIphoneLimiter:function(stage,landscape)
{if(landscape)stage.drawRectangle(240,275,480,90,"#f00",true,1,true);else stage.drawRectangle(160,435,320,90,"#f00",true,1,true);},drawGrid:function(stage,landscape,col)
{if(typeof landscape=='undefined')landscape=false;var dx=10;var dy=10;if(typeof col=='undefined')col='#FFF';var w=1/Utils.globalScale/Utils.globalPixelScale;var s={w:(landscape?480:320),h:(landscape?320:480)}
for(var x=dx;x<s.w;x+=dx)
{var o=0.1+0.1*(((x-dx)/dx)%10);stage.drawLine(x,0,x,s.h,w,col,o);}
for(var y=dy;y<s.h;y+=dy)
{var o=0.1+0.1*(((y-dy)/dy)%10);stage.drawLine(0,y,s.w,y,w,col,o);}
stage.drawLine(s.w/2,0,s.w/2,s.h,w,'#F00',1);stage.drawLine(0,s.h/2,s.w,s.h/2,w,'#F00',1);},drawScaleFix:function(stage,landscape)
{if(Utils.globalScale==0.75)
{if(landscape)stage.drawRectangle(507,160,54,320,"#000",true,1,true);else stage.drawRectangle(160,507,320,54,"#000",true,1,true);}
if(Utils.globalScale==1.5)
{if(landscape)stage.drawRectangle(510,160,60,320,"#000",true,1,true);else stage.drawRectangle(160,510,320,60,"#000",true,1,true);}},grad2radian:function(val){return val/(180/Math.PI);},radian2grad:function(val){return val*(180/Math.PI);},eventsListeners:[],onlockscreen:null,onunlockscreen:null,onfitlayout:null,addEventListener:function(type,callback)
{EventsManager.addEvent(Utils,type,callback);},removeEventListener:function(type,callback)
{EventsManager.removeEvent(Utils,type,callback);},dispatchEvent:function(type,params)
{return EventsManager.dispatchEvent(Utils,type,params);}}
var EventsManager={addEvent:function(obj,type,callback)
{if(!obj.eventsListeners)return;for(var i=0;i<obj.eventsListeners.length;i++)
{if(obj.eventsListeners[i].type===type&&obj.eventsListeners[i].callback===callback)return;}
obj.eventsListeners.push({type:type,callback:callback});},removeEvent:function(obj,type,callback)
{if(!obj.eventsListeners)return;for(var i=0;i<obj.eventsListeners.length;i++)
{if(obj.eventsListeners[i].type===type&&obj.eventsListeners[i].callback===callback)
{obj.eventsListeners=Utils.removeFromArray(obj.eventsListeners,obj.eventsListeners[i]);return;}}},dispatchEvent:function(obj,type,params)
{if(!obj.eventsListeners)return;var ret;if(typeof obj["on"+type]=="function")
{ret=obj["on"+type](params);if(ret===false)return false;}
for(var i=0;i<obj.eventsListeners.length;i++)
{if(obj.eventsListeners[i].type===type)
{ret=obj.eventsListeners[i].callback(params);if(ret===false)return false;}}}}
function Sprite(img,w,h,f,l)
{this.uid=0;this.stage=null;this.x=0;this.y=0;this.width=w;this.height=h;this.scaleX=1;this.scaleY=1;this.rotation=0;this.zIndex=0;this.visible=true;this.opacity=1;this['static']=false;this.ignoreViewport=false;this.animated=true;this.currentFrame=0;this.totalFrames=Math.max(1,~~f);if(this.totalFrames<=1)this.animated=false;this.currentLayer=0;this.totalLayers=Math.max(1,~~l);this.bitmap=img;this.fillColor=false;this.destroy=false;this.animStep=0;this.animDelay=1;this.drawAlways=false;this.dragged=false;this.dragX=0;this.dragY=0;this.getX=function(){return Math.round(this.x*Utils.globalScale);};this.getY=function(){return Math.round(this.y*Utils.globalScale);};this.getWidth=function(){return this.width*this.scaleX*Utils.globalScale;};this.getHeight=function(){return this.height*this.scaleY*Utils.globalScale;};this.startDrag=function(x,y)
{this.dragged=true;this.dragX=x;this.dragY=y;}
this.stopDrag=function()
{this.dragged=false;this.dragX=0;this.dragY=0;}
this.play=function(){this.animated=true;};this.stop=function(){this.animated=false;};this.gotoAndStop=function(frame)
{this.currentFrame=frame;this.stop();};this.gotoAndPlay=function(i)
{this.currentFrame=i;this.play();};this.removeTweens=function()
{if(!this.stage)return;this.stage.clearObjectTweens(this);};this.addTween=function(prop,end,duration,ease,onfinish,onchange)
{if(!this.stage)return;var val=this[prop];if(isNaN(val))return;var t=stage.createTween(this,prop,val,end,duration,ease);t.onchange=onchange;t.onfinish=onfinish;return t;};this.moveTo=function(x,y,duration,ease,onfinish,onchange)
{duration=~~duration;if(duration<=0)
{this.setPosition(x,y);}
else
{var t;t=this.addTween('x',x,duration,ease,onfinish,onchange);if(t)t.play();t=this.addTween('y',y,duration,ease,null,null);if(t)t.play();}
return this;}
this.moveBy=function(x,y,duration,ease,onfinish,onchange)
{return this.moveTo(this.x+x,this.y+y,duration,ease,onfinish,onchange);}
this.fadeTo=function(opacity,duration,ease,onfinish,onchange)
{duration=~~duration;if(duration<=0)
{this.opacity=opacity;}
else
{var t=this.addTween('opacity',opacity,duration,ease,onfinish,onchange);if(t)t.play();}
return this;}
this.fadeBy=function(opacity,duration,ease,onfinish,onchange)
{var val=Math.max(0,Math.min(1,this.opacity+opacity));return this.fadeTo(val,duration,ease,onfinish,onchange);}
this.rotateTo=function(rotation,duration,ease,onfinish,onchange)
{duration=~~duration;if(duration<=0)
{this.rotation=rotation;}
else
{var t=this.addTween('rotation',rotation,duration,ease,onfinish,onchange);if(t)t.play();}
return this;}
this.rotateBy=function(rotation,duration,ease,onfinish,onchange)
{return this.rotateTo(this.rotation+rotation,duration,ease,onfinish,onchange);}
this.nextFrame=function()
{this.dispatchEvent("enterframe",{target:this});if(!this.history.created)this.updateHistory();if(!this.animated)return;this.animStep++;if(this.animStep>=this.animDelay)
{this.currentFrame++;this.animStep=0;}
if(this.currentFrame>=this.totalFrames)this.currentFrame=0;};this.updateHistory=function()
{this.history.x=this.getX();this.history.y=this.getY();this.history.rotation=this.rotation;this.history.frame=this.currentFrame;var rect=new Rectangle(this.history.x,this.history.y,this.getWidth(),this.getHeight(),this.rotation);rect.AABB[0].x-=1;rect.AABB[0].y-=1;rect.AABB[1].x+=1;rect.AABB[1].y+=1;this.history.AABB=rect.AABB;this.history.created=true;this.history.changed=false;};this.history={created:false,drawed:false,changed:false,x:0,y:0,rotation:0,frame:0,AABB:[]};this.eventsWhenInvisible=false;this.onmouseover=null;this.onmouseout=null;this.onmousedown=null;this.onmouseup=null;this.onclick=null;this.oncontextmenu=null;this.onmousemove=null;this.onenterframe=null;this.onrender=null;this.onadd=null;this.onremove=null;this.onbox2dsync=null;this.mouseOn=false;this.setPosition=function(x,y)
{this.x=~~x;this.y=~~y;}
this.setZIndex=function(z)
{this.zIndex=~~z;if(!this.stage)return;this.stage.setZIndex(this,~~z);}
this.eventsListeners=[];this.addEventListener=function(type,callback)
{EventsManager.addEvent(this,type,callback);}
this.removeEventListener=function(type,callback)
{EventsManager.removeEvent(this,type,callback);}
this.dispatchEvent=function(type,params)
{return EventsManager.dispatchEvent(this,type,params);}
this.hitTestPoint=function(x,y,checkPixel,checkDragged,debug)
{if(!this.stage)return false;return this.stage.hitTestPointObject(this,x,y,checkPixel,checkDragged,debug);}}
function Tween(obj,prop,start,end,duration,callback)
{var self=this;if(typeof obj!='object')obj=null;if(obj)
{if(typeof obj[prop]=='undefined')throw new Error('Trying to tween undefined property "'+prop+'"');if(isNaN(obj[prop]))throw new Error('Tweened value can not be '+(typeof obj[prop]));}
else
{if(isNaN(prop))throw new Error('Tweened value can not be '+(typeof prop));}
if(typeof callback!='function')callback=Easing.linear.easeIn;this.obj=obj;this.prop=prop;this.onchange=null;this.onfinish=null;this.start=start;this.end=end;this.duration=~~duration;this.callback=callback;this.playing=false;this._pos=-1;this.play=function()
{self.playing=true;self.tick();}
this.pause=function()
{self.playing=false;}
this.rewind=function()
{self._pos=-1;}
this.forward=function()
{self._pos=this.duration;}
this.stop=function()
{self.pause();self.rewind();}
this.updateValue=function(val)
{if(self.obj)
{self.obj[self.prop]=val;}
else
{self.prop=val;}}
this.tick=function()
{if(!self.playing)return false;self._pos++;if(self._pos<0)return false;if(self._pos>self.duration)return self.finish();var func=self.callback;var val=func(self._pos,self.start,self.end-self.start,self.duration);this.updateValue(val);self.dispatchEvent("change",{target:self,value:val});return false;}
this.finish=function()
{self.stop();self.updateValue(self.end);return self.dispatchEvent("finish",{target:self,value:self.end});}
this.eventsListeners=[];this.addEventListener=function(type,callback)
{EventsManager.addEvent(this,type,callback);}
this.removeEventListener=function(type,callback)
{EventsManager.removeEvent(this,type,callback);}
this.dispatchEvent=function(type,params)
{return EventsManager.dispatchEvent(this,type,params);}}
var Easing={back:{easeIn:function(t,b,c,d)
{var s=1.70158;return c*(t/=d)*t*((s+1)*t-s)+b;},easeOut:function(t,b,c,d)
{var s=1.70158;return c*((t=t/d-1)*t*((s+1)*t+s)+1)+b;},easeInOut:function(t,b,c,d)
{var s=1.70158;if((t/=d/2)<1)return c/2*(t*t*(((s*=(1.525))+1)*t-s))+b;return c/2*((t-=2)*t*(((s*=(1.525))+1)*t+s)+2)+b;}},bounce:{easeIn:function(t,b,c,d)
{return c-Easing.bounce.easeOut(d-t,0,c,d)+b;},easeOut:function(t,b,c,d)
{if((t/=d)<(1/2.75))return c*(7.5625*t*t)+b;else if(t<(2/2.75))return c*(7.5625*(t-=(1.5/2.75))*t+0.75)+b;else if(t<(2.5/2.75))return c*(7.5625*(t-=(2.25/2.75))*t+0.9375)+b;else return c*(7.5625*(t-=(2.625/2.75))*t+0.984375)+b;},easeInOut:function(t,b,c,d)
{if(t<d/2)return Easing.bounce.easeIn(t*2,0,c,d)*0.5+b;else return Easing.bounce.easeOut(t*2-d,0,c,d)*0.5+c*0.5+b;}},circular:{easeIn:function(t,b,c,d)
{return-c*(Math.sqrt(1-(t/=d)*t)-1)+b;},easeOut:function(t,b,c,d)
{return c*Math.sqrt(1-(t=t/d-1)*t)+b;},easeInOut:function(t,b,c,d)
{if((t/=d/2)<1)return-c/2*(Math.sqrt(1-t*t)-1)+b;return c/2*(Math.sqrt(1-(t-=2)*t)+1)+b;}},cubic:{easeIn:function(t,b,c,d)
{return c*(t/=d)*t*t+b;},easeOut:function(t,b,c,d)
{return c*((t=t/d-1)*t*t+1)+b;},easeInOut:function(t,b,c,d)
{if((t/=d/2)<1)return c/2*t*t*t+b;return c/2*((t-=2)*t*t+2)+b;}},exponential:{easeIn:function(t,b,c,d)
{return t==0?b:c*Math.pow(2,10*(t/d-1))+b;},easeOut:function(t,b,c,d)
{return t==d?b+c:c*(-Math.pow(2,-10*t/d)+1)+b;},easeInOut:function(t,b,c,d)
{if(t==0)return b;if(t==d)return b+c;if((t/=d/2)<1)return c/2*Math.pow(2,10*(t-1))+b;return c/2*(-Math.pow(2,-10*--t)+2)+b;}},linear:{easeIn:function(t,b,c,d)
{return c*t/d+b;},easeOut:function(t,b,c,d)
{return c*t/d+b;},easeInOut:function(t,b,c,d)
{return c*t/d+b;}},quadratic:{easeIn:function(t,b,c,d)
{return c*(t/=d)*t+b;},easeOut:function(t,b,c,d)
{return-c*(t/=d)*(t-2)+b;},easeInOut:function(t,b,c,d)
{if((t/=d/2)<1)return c/2*t*t+b;return-c/2*((--t)*(t-2)-1)+b;}},quartic:{easeIn:function(t,b,c,d)
{return c*(t/=d)*t*t*t+b;},easeOut:function(t,b,c,d)
{return-c*((t=t/d-1)*t*t*t-1)+b;},easeInOut:function(t,b,c,d)
{if((t/=d/2)<1)return c/2*t*t*t*t+b;return-c/2*((t-=2)*t*t*t-2)+b;}},quintic:{easeIn:function(t,b,c,d)
{return c*(t/=d)*t*t*t*t+b;},easeOut:function(t,b,c,d)
{return c*((t=t/d-1)*t*t*t*t+1)+b;},easeInOut:function(t,b,c,d)
{if((t/=d/2)<1)return c/2*t*t*t*t*t+b;return c/2*((t-=2)*t*t*t*t+2)+b;}},sine:{easeIn:function(t,b,c,d)
{return-c*Math.cos(t/d*(Math.PI/2))+c+b;},easeOut:function(t,b,c,d)
{return c*Math.sin(t/d*(Math.PI/2))+b;},easeInOut:function(t,b,c,d)
{return-c/2*(Math.cos(Math.PI*t/d)-1)+b;}}}
function Stage(cnsId,w,h)
{var self=this;this.canvas=document.getElementById(cnsId);this.canvas.renderController=this;this.canvas.ctx=this.canvas.getContext('2d');this.screenWidth=w;this.screenHeight=h;this.viewport={x:0,y:0};this.objects=[];this.objectsCounter=0;this.buffer=document.createElement('canvas');this.buffer.width=w*Utils.globalScale;this.buffer.height=h*Utils.globalScale;this.buffer.ctx=this.buffer.getContext('2d');this.delay=40;this.fillColor=false;this.started=false;this.fps=0;this.lastFPS=0;this.showFPS=false;this.pixelClickEvent=false;this.pixelMouseUpEvent=false;this.pixelMouseDownEvent=false;this.pixelMouseMoveEvent=false;this.ceilSizes=false;this.tmMain;this.tmFPS;this.partialUpdate=false;this.destroy=function()
{clearTimeout(this.tmMain);clearTimeout(this.tmFPS);this.stop();this.clear();this.canvas.ctx.clearRect(0,0,this.screenWidth*Utils.globalScale*Utils.globalPixelScale,this.screenHeight*Utils.globalScale*Utils.globalPixelScale);}
this.findMaxZIndex=function()
{var max=-1;var ix=false;for(var i=0;i<this.objects.length;i++)
{if(this.objects[i].zIndex>max)
{max=this.objects[i].zIndex;ix=i;}}
return{index:ix,zIndex:max};};this.findMinZIndex=function()
{var min=-1;var ix=false;for(var i=0;i<this.objects.length;i++)
{if(i==0)
{min=this.objects[i].zIndex;ix=0;}
if(this.objects[i].zIndex<min)
{min=this.objects[i].zIndex;ix=i;}}
return{index:ix,zIndex:min};};this.addChild=function(item)
{var f=this.findMaxZIndex();var z=item.zIndex;if(f.index!==false)item.zIndex=f.zIndex+1;else item.zIndex=0;this.objectsCounter++;item.uid=this.objectsCounter;item.stage=this;this.objects.push(item);if(z!=0)
{this.setZIndex(item,~~z);}
item.dispatchEvent("add",{target:item});return item;};this.removeChild=function(item)
{if(item)
{this.clearObjectTweens(item);item.dispatchEvent("remove",{target:item});item.stage=null;this.objects=Utils.removeFromArray(this.objects,item);}};this.setZIndex=function(item,index)
{var bSort=true;var i,tmp;item.zIndex=index;while(bSort)
{bSort=false;for(i=0;i<this.objects.length-1;i++)
{if(this.objects[i].zIndex>this.objects[i+1].zIndex)
{tmp=this.objects[i];this.objects[i]=this.objects[i+1];this.objects[i+1]=tmp;bSort=true;}}}}
this.hitTestPointObject=function(obj,x,y,pixelCheck,includeDragged,debug)
{var cX,cY,cW,cH,mX,mY,r,present,imageData;cW=obj.width*obj.scaleX;cH=obj.height*obj.scaleY;cX=obj.x-cW/2;cY=obj.y-cH/2;mX=x;mY=y;if(!obj.ignoreViewport)
{mX+=this.viewport.x;mY+=this.viewport.y;}
present=false;if(obj.rotation==0)
{if(cX<=mX&&cY<=mY&&cX+cW>=mX&&cY+cH>=mY)present=true;}
else
{r=new Rectangle(obj.x,obj.y,cW,cH,obj.rotation);if(r.hitTestPoint(new Vector(mX,mY)))present=true;}
if(present&&pixelCheck)
{this.buffer.width=this.screenWidth*Utils.globalScale*Utils.globalPixelScale;this.buffer.height=this.screenHeight*Utils.globalScale*Utils.globalPixelScale;this.buffer.ctx.clearRect(0,0,this.screenWidth*Utils.globalScale*Utils.globalPixelScale,this.screenHeight*Utils.globalScale*Utils.globalPixelScale);this.renderObject(this.buffer,obj);var pX=Math.floor(x*Utils.globalScale*Utils.globalPixelScale);var pY=Math.floor(y*Utils.globalScale*Utils.globalPixelScale);imageData=this.buffer.ctx.getImageData(pX,pY,1,1);if(imageData.data[3]==0)present=false;}
if(!present&&includeDragged&&obj.dragged)present=true;return present;}
this.getObjectsStackByCoord=function(x,y,pixelCheck,includeDragged,debug)
{var obj;var tmp=[];for(var i=0;i<this.objects.length;i++)
{if(this.objects[i].visible||this.objects[i].eventsWhenInvisible)
{obj=this.objects[i];if(this.hitTestPointObject(obj,x,y,pixelCheck,includeDragged,debug))
{tmp.push(obj);}}}
return tmp;};this.getMaxZIndexInStack=function(stack)
{var max=-1;var ix=0;for(var i=0;i<stack.length;i++)
{if(stack[i].zIndex>max)
{max=stack[i].zIndex;ix=i;}}
return ix;};this.sortStack=function(stack,revert)
{var bSort=true;var ok;var i,tmp;while(bSort)
{bSort=false;for(i=0;i<stack.length-1;i++)
{ok=false;if(stack[i].zIndex<stack[i+1].zIndex&&!revert)ok=true;if(stack[i].zIndex>stack[i+1].zIndex&&revert)ok=true;if(ok)
{tmp=stack[i];stack[i]=stack[i+1];stack[i+1]=tmp;bSort=true;}}}
return stack;}
this.finalizeMouseCoords=function(obj,m)
{if(!obj)return m;var eX=this.prepareMouseCoord(m.x);var eY=this.prepareMouseCoord(m.y);if(!obj.ignoreViewport)
{eX+=this.viewport.x;eY+=this.viewport.y;}
eX=eX-obj.x;eY=eY-obj.y;return{x:eX,y:eY};}
this.prepareMouseCoord=function(val)
{return val/Utils.globalScale/Utils.globalPixelScale;}
this.checkClick=function(event)
{var m=Utils.getMouseCoord(event,this.canvas);var stack=this.getObjectsStackByCoord(this.prepareMouseCoord(m.x),this.prepareMouseCoord(m.y),this.pixelClickEvent,false,true);var ret,f;if(stack.length>0)
{stack=this.sortStack(stack);for(var i=0;i<stack.length;i++)
{f=this.finalizeMouseCoords(stack[i],m);ret=stack[i].dispatchEvent("click",{target:stack[i],x:f.x,y:f.y});if(ret===false)return;}}};this.checkContextMenu=function(event)
{var m=Utils.getMouseCoord(event,this.canvas);var stack=this.getObjectsStackByCoord(this.prepareMouseCoord(m.x),this.prepareMouseCoord(m.y),this.pixelClickEvent);var ret,f;if(stack.length>0)
{stack=this.sortStack(stack);for(var i=0;i<stack.length;i++)
{f=this.finalizeMouseCoords(stack[i],m);ret=stack[i].dispatchEvent("contextmenu",{target:stack[i],x:f.x,y:f.y});if(ret===false)return;}}};this.checkMouseMove=function(event)
{var m=Utils.getMouseCoord(event,this.canvas);for(i=0;i<this.objects.length;i++)
{if(this.objects[i].dragged)
{var eX=m.x/Utils.globalScale/Utils.globalPixelScale;var eY=m.y/Utils.globalScale/Utils.globalPixelScale;if(!this.objects[i].ignoreViewport)
{eX+=this.viewport.x;eY+=this.viewport.y;}
this.objects[i].x=eX-this.objects[i].dragX;this.objects[i].y=eY-this.objects[i].dragY;}}
var stack=this.getObjectsStackByCoord(this.prepareMouseCoord(m.x),this.prepareMouseCoord(m.y),this.pixelMouseMoveEvent);var i,n,ret,bOk,f;var overStack=[];if(stack.length>0)
{stack=this.sortStack(stack);for(i=0;i<stack.length;i++)
{overStack.push(stack[i]);f=this.finalizeMouseCoords(stack[i],m);if(!stack[i].mouseOn)ret=stack[i].dispatchEvent("mouseover",{target:stack[i],x:f.x,y:f.y});stack[i].mouseOn=true;if(ret===false)break;}
for(i=0;i<stack.length;i++)
{f=this.finalizeMouseCoords(stack[i],m);ret=stack[i].dispatchEvent("mousemove",{target:stack[i],x:f.x,y:f.y});if(ret===false)break;}}
for(i=0;i<this.objects.length;i++)
{if(this.objects[i].mouseOn)
{bOk=false;for(n=0;n<overStack.length;n++)
{if(overStack[n]==this.objects[i])bOk=true;}
if(!bOk)
{this.objects[i].mouseOn=false;f=this.finalizeMouseCoords(stack[i],m);ret=this.objects[i].dispatchEvent("mouseout",{target:this.objects[i],x:f.x,y:f.y});if(ret===false)break;}}}};this.checkMouseDown=function(event)
{var m=Utils.getMouseCoord(event,this.canvas);var stack=this.getObjectsStackByCoord(this.prepareMouseCoord(m.x),this.prepareMouseCoord(m.y),this.pixelMouseDownEvent);var ret,f;if(stack.length>0)
{stack=this.sortStack(stack);for(var i=0;i<stack.length;i++)
{f=this.finalizeMouseCoords(stack[i],m);ret=stack[i].dispatchEvent("mousedown",{target:stack[i],x:f.x,y:f.y});if(ret===false)return;}}};this.checkMouseUp=function(event)
{var m=Utils.getMouseCoord(event,this.canvas);var stack=this.getObjectsStackByCoord(this.prepareMouseCoord(m.x),this.prepareMouseCoord(m.y),this.pixelMouseUpEvent,true);var ret,f;if(stack.length>0)
{stack=this.sortStack(stack);for(var i=0;i<stack.length;i++)
{f=this.finalizeMouseCoords(stack[i],m);ret=stack[i].dispatchEvent("mouseup",{target:stack[i],x:f.x,y:f.y});if(ret===false)return;}}};this.clear=function()
{this.objects=[];this.tweens=[];this.eventsListeners=[];this.objectsCounter=0;};this.hitTest=function(obj1,obj2)
{if(obj1.rotation==0&&obj2.rotation==0)
{var cX1=obj1.getX()-obj1.getWidth()/2;var cY1=obj1.getY()-obj1.getHeight()/2;var cX2=obj2.getX()-obj2.getWidth()/2;var cY2=obj2.getY()-obj2.getHeight()/2;var top=Math.max(cY1,cY2);var left=Math.max(cX1,cX2);var right=Math.min(cX1+obj1.getWidth(),cX2+obj2.getWidth());var bottom=Math.min(cY1+obj1.getHeight(),cY2+obj2.getHeight());var width=right-left;var height=bottom-top;if(width>0&&height>0)return true;else return false;}
else
{var r1=new Rectangle(obj1.getX(),obj1.getY(),obj1.getWidth(),obj1.getHeight(),obj1.rotation);var r2=new Rectangle(obj2.getX(),obj2.getY(),obj2.getWidth(),obj2.getHeight(),obj2.rotation);return r1.hitTestRectangle(r2);}};this.drawRectangle=function(x,y,width,height,color,fill,opacity,ignoreViewport)
{var cns=this.canvas;if(typeof opacity!='undefined')cns.ctx.globalAlpha=opacity;else cns.ctx.globalAlpha=1;cns.ctx.fillStyle=color;cns.ctx.strokeStyle=color;if(!ignoreViewport)
{x-=this.viewport.x;y-=this.viewport.y;}
x=x*Utils.globalScale*Utils.globalPixelScale;y=y*Utils.globalScale*Utils.globalPixelScale;width=width*Utils.globalScale*Utils.globalPixelScale;height=height*Utils.globalScale*Utils.globalPixelScale;if(fill)cns.ctx.fillRect(x-width/2,y-height/2,width,height);else cns.ctx.strokeRect(x-width/2,y-height/2,width,height);};this.drawCircle=function(x,y,radius,width,color,opacity,ignoreViewport)
{var segments=32;var theta=0;var dtheta=2*Math.PI/segments;var px=x+radius;var py=y;for(var i=0;i<segments;i++)
{var vx=radius*Math.cos(theta)+x;var vy=radius*Math.sin(theta)+y;stage.drawLine(px,py,vx,vy,width,color,opacity,ignoreViewport);px=vx;py=vy;theta+=dtheta;}
stage.drawLine(px,py,x+radius,y,width,color,opacity,ignoreViewport);};this.drawPolygon=function(points,width,color,opacity,ignoreViewport)
{if((typeof points!="object")||!(points instanceof Array)||points.length<2)return;for(var i=0;i<points.length-1;i++)
{this.drawLine(points[i].x,points[i].y,points[i+1].x,points[i+1].y,width,color,opacity,ignoreViewport);}
this.drawLine(points[i].x,points[i].y,points[0].x,points[0].y,width,color,opacity,ignoreViewport);}
this.drawLine=function(x1,y1,x2,y2,width,color,opacity,ignoreViewport)
{var cns=this.canvas;var oldLW=cns.ctx.lineWidth;if(color)cns.ctx.strokeStyle=color;else cns.ctx.strokeStyle='#000';if(width)cns.ctx.lineWidth=width*Utils.globalScale*Utils.globalPixelScale;else cns.ctx.lineWidth=1*Utils.globalScale*Utils.globalPixelScale;if(opacity)cns.ctx.globalAlpha=opacity;else cns.ctx.globalAlpha=1;if(!ignoreViewport)
{x1-=this.viewport.x;y1-=this.viewport.y;x2-=this.viewport.x;y2-=this.viewport.y;}
x1=x1*Utils.globalScale*Utils.globalPixelScale;y1=y1*Utils.globalScale*Utils.globalPixelScale;x2=x2*Utils.globalScale*Utils.globalPixelScale;y2=y2*Utils.globalScale*Utils.globalPixelScale;cns.ctx.beginPath();cns.ctx.moveTo(x1,y1);cns.ctx.lineTo(x2,y2);cns.ctx.closePath();cns.ctx.stroke();cns.ctx.lineWidth=oldLW;};this.start=function()
{if(this.started)return;this.started=true;clearFPS();render();}
this.forceRender=function()
{if(this.started)render();}
this.stop=function()
{this.started=false;}
function clearFPS()
{self.lastFPS=self.fps;self.fps=0;if(self.started)self.tmFPS=setTimeout(clearFPS,1000);}
this.setTextStyle=function(font,size,style,color,borderColor,canvas)
{var cns=(canvas?canvas:this.canvas);cns.ctx.fillStyle=color;cns.ctx.strokeStyle=borderColor;var s="";if(style)s+=style+" ";if(size)s+=Math.floor(size*Utils.globalScale*Utils.globalPixelScale)+"px ";if(font)s+=font;cns.ctx.font=s;}
this.drawText=function(text,x,y,opacity,ignoreViewport,alignCenter,canvas)
{var cns=(canvas?canvas:this.canvas);if(typeof opacity=="undefined")cns.ctx.globalAlpha=1;else cns.ctx.globalAlpha=opacity;if(!ignoreViewport)
{x-=this.viewport.x;y-=this.viewport.y;}
x=x*Utils.globalScale*Utils.globalPixelScale;y=y*Utils.globalScale*Utils.globalPixelScale;if(alignCenter)x=x-this.getTextWidth(text)/2;cns.ctx.strokeText(text,x,y);cns.ctx.fillText(text,x,y);}
this.getTextWidth=function(str,canvas)
{var cns=(canvas?canvas:this.canvas);return cns.ctx.measureText(str).width;}
this.renderObject=function(cns,obj)
{var canvasMod=false;var ow=obj.width*Utils.globalScale;var oh=obj.height*Utils.globalScale;var ox=obj.getX()*Utils.globalPixelScale-Math.floor(ow/2);var oy=obj.getY()*Utils.globalPixelScale-Math.floor(oh/2);if(!obj.ignoreViewport)
{ox-=this.viewport.x*Utils.globalPixelScale*Utils.globalScale;oy-=this.viewport.y*Utils.globalPixelScale*Utils.globalScale;}
var or=obj.rotation;var scX=obj.scaleX*Utils.globalPixelScale;var scY=obj.scaleY*Utils.globalPixelScale;if(or!=0||scX!=1||scY!=1)
{canvasMod=true;cns.ctx.save();cns.ctx.translate(ox+Math.floor(ow/2),oy+Math.floor(oh/2));cns.ctx.rotate(or);cns.ctx.scale(scX,scY);ox=-Math.floor(ow/2);oy=-Math.floor(oh/2);}
cns.ctx.globalAlpha=obj.opacity;if(this.ceilSizes)
{ow=Math.ceil(ow);oh=Math.ceil(oh);}
if(obj.fillColor)
{cns.ctx.fillStyle=obj.fillColor;cns.ctx.strokeStyle=obj.fillColor;cns.ctx.fillRect(ox,oy,ow,oh);}
if(obj.bitmap)
{var iw=obj.bitmap.width;var ih=obj.bitmap.height;var fx=obj.currentLayer*ow;var fy=obj.currentFrame*oh;if(fx<iw&&fy<ih)
{var fw=ow;if(fx+fw>iw)fw=iw-fx;var fh=oh;if(fy+fh>ih)fh=ih-fy;try
{cns.ctx.drawImage(obj.bitmap,fx,fy,fw,fh,ox,oy,ow,oh);}
catch(e){}}}
if(canvasMod)cns.ctx.restore();obj.dispatchEvent("render",{target:obj,canvas:cns});}
this.clearObjectAABB=function(cns,obj)
{var w=obj.history.AABB[1].x-obj.history.AABB[0].x;var h=obj.history.AABB[1].y-obj.history.AABB[0].y;if(!this.fillColor)cns.ctx.clearRect((obj.history.AABB[0].x-this.viewport.x)*Utils.globalPixelScale,(obj.history.AABB[0].y-this.viewport.y)*Utils.globalPixelScale,w*Utils.globalPixelScale,h*Utils.globalPixelScale);else
{cns.ctx.fillStyle=this.fillColor;cns.ctx.fillRect((obj.history.AABB[0].x-this.viewport.x)*Utils.globalPixelScale,(obj.history.AABB[0].y-this.viewport.y)*Utils.globalPixelScale,w*Utils.globalPixelScale,h*Utils.globalPixelScale);}};this.addPartialDraw=function(partialDraw,obj)
{partialDraw.push(obj);obj.history.drawed=true;obj.history.changed=true;for(var i=0;i<this.objects.length;i++)
{if(!this.objects[i].history.changed&&this.objects[i].visible&&!this.objects[i]['static'])
{var top=Math.max(obj.history.AABB[0].y,this.objects[i].history.AABB[0].y);var left=Math.max(obj.history.AABB[0].x,this.objects[i].history.AABB[0].x);var right=Math.min(obj.history.AABB[1].x,this.objects[i].history.AABB[1].x);var bottom=Math.min(obj.history.AABB[1].y,this.objects[i].history.AABB[1].y);var width=right-left;var height=bottom-top;if(width>0&&height>0)this.addPartialDraw(partialDraw,this.objects[i]);}}
return partialDraw;};this.drawScenePartial=function(cns)
{var partialDraw=[];var rect,obj;if(!cns.ctx)cns.ctx=cns.getContext("2d");for(var i=0;i<this.objects.length;i++)
{this.objects[i].nextFrame();}
for(i=0;i<this.objects.length;i++)
{obj=this.objects[i];if(obj.visible&&!obj['static'])
{if(obj.destroy||obj.drawAlways||!obj.history.drawed||obj.currentFrame!=obj.history.frame||obj.getX()!=obj.history.x||obj.getY()!=obj.history.y||obj.rotation!=obj.history.rotation)
{partialDraw=this.addPartialDraw(partialDraw,obj);}}}
partialDraw=this.sortStack(partialDraw,true);var w,h;for(i=0;i<partialDraw.length;i++)
{this.clearObjectAABB(cns,partialDraw[i]);}
for(i=0;i<partialDraw.length;i++)
{obj=partialDraw[i];if(obj.destroy)
{this.removeChild(obj);}
else
{this.renderObject(cns,obj);obj.updateHistory();}}}
this.drawScene=function(cns,drawStatic)
{var obj,ok;if(!cns.ctx)cns.ctx=cns.getContext("2d");if(!this.fillColor)cns.ctx.clearRect(0,0,this.screenWidth*Utils.globalScale*Utils.globalPixelScale,this.screenHeight*Utils.globalScale*Utils.globalPixelScale);else
{cns.ctx.fillStyle=this.fillColor;cns.ctx.fillRect(0,0,this.screenWidth*Utils.globalScale*Utils.globalPixelScale,this.screenHeight*Utils.globalScale*Utils.globalPixelScale);}
for(var i=0;i<this.objects.length;i++)
{obj=this.objects[i];ok=false;if(!drawStatic&&!obj['static'])ok=true;if(drawStatic&&obj['static'])ok=true;if(ok)
{if(obj.destroy)
{this.removeChild(obj);i--;}
else
{obj.nextFrame();if(obj.visible)this.renderObject(cns,obj);}}}};this.tweens=[];this.createTween=function(obj,prop,start,end,duration,ease)
{var t=new Tween(obj,prop,start,end,duration,ease);self.tweens.push(t);return t;}
this.removeTween=function(t)
{var id=null;if(isNaN(t))
{for(var i=0;i<self.tweens.length;i++)if(self.tweens[i]===t)
{id=i;break;}}
else id=t;self.tweens[id].pause();self.tweens.splice(id,1);return id;}
this.clearObjectTweens=function(obj)
{for(var i=0;i<self.tweens.length;i++)if(self.tweens[i].obj===obj)
{i=self.removeTween(i);}}
this.updateTweens=function()
{for(var i=0;i<self.tweens.length;i++)
{if(self.tweens[i].tick())
{i=self.removeTween(i);}}}
function render()
{clearTimeout(self.tmMain);var tm_start=new Date().getTime();self.updateTweens();self.dispatchEvent("pretick");if(self.partialUpdate)self.drawScenePartial(self.canvas);else self.drawScene(self.canvas,false);if(self.showFPS)
{self.setTextStyle("sans-serif",10,"bold","#fff","#000");self.drawText("FPS: "+self.lastFPS,2,10,1,true);}
self.dispatchEvent("posttick");var d=new Date().getTime()-tm_start;d=self.delay-d-1;if(d<1)d=1;self.fps++;if(self.started)self.tmMain=setTimeout(render,d);};this.box2dSync=function(world)
{var p;for(b=world.m_bodyList;b;b=b.m_next)
{if(b.sprite)
{b.sprite.rotation=b.GetRotation();p=b.GetPosition();b.sprite.x=p.x;b.sprite.y=p.y;b.sprite.dispatchEvent("box2dsync",{target:b.sprite});}}}
this.lastTouchCoords={x:0,y:0};this.storeTouchCoords=function(event)
{var e=event||window.event;if(e.touches)e=e.touches[0];if(!e)return;this.lastTouchCoords.x=e.clientX;this.lastTouchCoords.y=e.clientY;}
this.checkTouchEnd=function()
{var e={pageX:this.lastTouchCoords.x,pageY:this.lastTouchCoords.y};this.checkMouseUp(e);}
this.processTouchEvent=function(event,controller)
{for(var i=0;i<event.touches.length;i++)
{var e={clientX:event.touches[i].clientX,clientY:event.touches[i].clientY};self[controller](e);}}
if("ontouchstart"in this.canvas)
{this.canvas.ontouchstart=function(event)
{this.renderController.processTouchEvent(event,"storeTouchCoords");this.renderController.processTouchEvent(event,"checkMouseDown");this.renderController.processTouchEvent(event,"checkClick");};this.canvas.ontouchmove=function(event)
{this.renderController.processTouchEvent(event,"storeTouchCoords");this.renderController.processTouchEvent(event,"checkMouseMove");};this.canvas.ontouchend=function(event)
{this.renderController.checkTouchEnd();};}
else
{this.canvas.onclick=function(event){this.renderController.checkClick(event);};this.canvas.onmousemove=function(event){this.renderController.checkMouseMove(event);};this.canvas.onmousedown=function(event){if(event.button==0)this.renderController.checkMouseDown(event);};this.canvas.onmouseup=function(event){if(event.button==0)this.renderController.checkMouseUp(event);};this.canvas.oncontextmenu=function(event){this.renderController.checkContextMenu(event);};}
this.onpretick=null;this.onposttick=null;this.eventsListeners=[];this.addEventListener=function(type,callback)
{EventsManager.addEvent(this,type,callback);}
this.removeEventListener=function(type,callback)
{EventsManager.removeEvent(this,type,callback);}
this.dispatchEvent=function(type,params)
{return EventsManager.dispatchEvent(this,type,params);}}
function Vector(x,y)
{if(typeof(x)=='undefined')x=0;this.x=x;if(typeof(y)=='undefined')y=0;this.y=y;this.clone=function(){return new Vector(this.x,this.y);}
this.add=function(p){this.x+=p.x;this.y+=p.y;}
this.subtract=function(p){this.x-=p.x;this.y-=p.y;}
this.rotate=function(angle,offset)
{if(typeof(offset)=='undefined')offset=new Vector(0,0);var r=this.clone();r.subtract(offset);r.x=this.x*Math.cos(angle)+this.y*Math.sin(angle);r.y=this.x*-Math.sin(angle)+this.y*Math.cos(angle);r.add(offset);this.x=r.x;this.y=r.y;}
this.normalize=function(angle,offset)
{if(typeof(offset)=='undefined')offset=new Vector(0,0);this.subtract(offset);this.rotate(-angle);}
this.getLength=function()
{return Math.sqrt(this.x*this.x+this.y*this.y);}}
var Rectangle=function(x,y,w,h,angle)
{this.center=new Vector(x,y);this.width=w;this.height=h;this.angle=angle;this.vertices=[];this.AABB=[];this.clone=function()
{return new Rectangle(this.center.x,this.center.y,this.width,this.height,this.angle);}
this.refreshVertices=function()
{var w=this.width/2;var h=this.height/2;this.vertices=[];this.vertices.push(new Vector(-w,h));this.vertices.push(new Vector(w,h));this.vertices.push(new Vector(w,-h));this.vertices.push(new Vector(-w,-h));this.AABB=[this.center.clone(),this.center.clone()];for(var i=0;i<4;i++)
{this.vertices[i].rotate(-this.angle,this.center);if(this.vertices[i].x<this.AABB[0].x)this.AABB[0].x=this.vertices[i].x;if(this.vertices[i].x>this.AABB[1].x)this.AABB[1].x=this.vertices[i].x;if(this.vertices[i].y<this.AABB[0].y)this.AABB[0].y=this.vertices[i].y;if(this.vertices[i].y>this.AABB[1].y)this.AABB[1].y=this.vertices[i].y;}}
this.move=function(x,y)
{this.center.add(new Vector(x,y));this.refreshVertices();}
this.rotate=function(angle)
{this.angle+=angle;this.refreshVertices();}
this.hitTestPoint=function(point)
{var p=point.clone();p.normalize(-this.angle,this.center);return((Math.abs(p.x)<=(this.width/2))&&(Math.abs(p.y)<=(this.height/2)));}
this.hitTestRectangle=function(rect)
{var r1=this.clone();var r2=rect.clone();var len,len1,len2;r1.move(-this.center.x,-this.center.y);r2.move(-this.center.x,-this.center.y);r2.center.rotate(this.angle);r1.rotate(-this.angle);r2.rotate(-this.angle);len=Math.max(r1.AABB[0].x,r1.AABB[1].x,r2.AABB[0].x,r2.AABB[1].x)-Math.min(r1.AABB[0].x,r1.AABB[1].x,r2.AABB[0].x,r2.AABB[1].x);len1=r1.AABB[1].x-r1.AABB[0].x;len2=r2.AABB[1].x-r2.AABB[0].x;if(len>len1+len2)return false;len=Math.max(r1.AABB[0].y,r1.AABB[1].y,r2.AABB[0].y,r2.AABB[1].y)-Math.min(r1.AABB[0].y,r1.AABB[1].y,r2.AABB[0].y,r2.AABB[1].y);len1=r1.AABB[1].y-r1.AABB[0].y;len2=r2.AABB[1].y-r2.AABB[0].y;if(len>len1+len2)return false;r1.move(-r2.center.x,-r2.center.y);r2.move(-r2.center.x,-r2.center.y);r1.center.rotate(r2.angle);r1.refreshVertices();r1.rotate(-r2.angle);r2.rotate(-r2.angle);len=Math.max(r1.AABB[0].x,r1.AABB[1].x,r2.AABB[0].x,r2.AABB[1].x)-Math.min(r1.AABB[0].x,r1.AABB[1].x,r2.AABB[0].x,r2.AABB[1].x);len1=r1.AABB[1].x-r1.AABB[0].x;len2=r2.AABB[1].x-r2.AABB[0].x;if(len>len1+len2)return false;len=Math.max(r1.AABB[0].y,r1.AABB[1].y,r2.AABB[0].y,r2.AABB[1].y)-Math.min(r1.AABB[0].y,r1.AABB[1].y,r2.AABB[0].y,r2.AABB[1].y);len1=r1.AABB[1].y-r1.AABB[0].y;len2=r2.AABB[1].y-r2.AABB[0].y;if(len>len1+len2)return false;return true;}
this.refreshVertices();}
var Asset=function(name,src,w,h,f,l)
{this.name=name+'';this.src=src+'';this.width=w;this.height=h;this.frames=f;this.layers=l;this.bitmap=null;this.object=null;this.ready=(this.width&&this.height);this.detectSize=function()
{if(!this.bitmap)return false;try
{if(isNaN(this.width))
{this.width=this.bitmap.width?parseInt(this.bitmap.width):0;}
if(isNaN(this.height))
{this.height=this.bitmap.height?parseInt(this.bitmap.height):0;}}
catch(e){if(CRENDER_DEBUG)console.log(e);}
return(!isNaN(this.width)&&!isNaN(this.height));}
this.normalize=function(scale)
{if(this.ready)return;if(!this.detectSize())return;if(isNaN(this.frames)||this.frames<1)this.frames=1;if(isNaN(this.layers)||this.layers<1)this.layers=1;this.width=Math.ceil((this.width/this.layers)/scale);this.height=Math.ceil((this.height/this.frames)/scale);this.ready=true;}}
var AssetsLibrary=function(path,scale,assets)
{var self=this;this.path='images';this.scale=1;this.items={};this.bitmaps={};this.loaded=false;this.onload=null;this.onloadprogress=null;this.init=function(path,scale)
{if(typeof path!='undefined')
{this.path=path+'';}
if(typeof scale!='undefined')
{this.scale=parseFloat(scale);if(isNaN(this.scale))this.scale=1;}}
this.addAssets=function(data)
{if(typeof data=='undefined')return;if(typeof data!='object')return;for(var i=0;i<data.length;i++)
{var item=data[i];item.noscale=(typeof item.noscale=='undefined')?false:item.noscale;if(!item.noscale)item.src='%SCALE%/'+item.src;this.addAsset(item.src,item.name,item.width,item.height,item.frames,item.layers);}}
this.addAsset=function(src,name,w,h,f,l)
{function src2name(src)
{var name=src.split('/');name=name.pop();name=name.split('.');name=name.shift()+'';return name;}
src=src.replace('%SCALE%','%PATH%/'+this.scale);src=src.replace('%PATH%',this.path);if(typeof name=='undefined')name=src2name(src);var asset=new Asset(name,src,w,h,f,l);this.items[name]=asset;return asset;}
this.addObject=function(obj)
{var asset=this.addAsset('%SCALE%/'+obj.image,obj.name,obj.width*this.scale,obj.height*this.scale,obj.frames,obj.layers);if(asset)asset.object=obj;return asset;}
this.load=function(onload,onloadprogress)
{this.onload=onload;this.onloadprogress=onloadprogress;var preloader=new ImagesPreloader();var data=[];for(var n in this.items)data.push(this.items[n]);preloader.load(data,self.onLoadHandler,self.onLoadProgressHandler);}
this.onLoadProgressHandler=function(val)
{if(typeof self.onloadprogress=='function')
{self.onloadprogress(val);}}
this.onLoadHandler=function(data)
{self.loaded=true;for(var n in data)
{var bmp=data[n];var asset=self.items[n];asset.bitmap=bmp;asset.normalize(self.scale);}
if(typeof self.onload=='function')
{self.onload(self.items);}}
this.getAsset=function(name,checkLoad)
{var asset=null;if((typeof this.items[name]!='undefined')&&(this.items[name].bitmap))
{checkLoad=(typeof checkLoad=='undefined')?true:checkLoad;asset=(!checkLoad||this.items[name].ready)?this.items[name]:null;}
if(!asset)
{throw new Error('Trying to get undefined asset "'+name+'"');}
return asset;}
this.getSprite=function(name,params)
{var mc=null;try
{var asset=this.getAsset(name,true);mc=new Sprite(asset.bitmap,asset.width,asset.height,asset.frames,asset.layers);}
catch(e)
{mc=new Sprite(null,1,1,1,1);}
if(typeof params=='object')
{for(var prop in params)mc[prop]=params[prop];}
return mc;}
this.getBitmap=function(name)
{try
{var asset=this.getAsset(name,true);return asset.bitmap;}
catch(e)
{return null;}}
this.init(path,scale);this.addAssets(assets);}
if(typeof console=='undefined')
{console={log:function(){}}};var TEXT_ALIGN_LEFT=0;var TEXT_ALIGN_CENTER=1;var TEXT_ALIGN_RIGHT=2;var TEXT_VALIGN_TOP=0;var TEXT_VALIGN_MIDDLE=1;var TEXT_VALIGN_BOTTOM=2;function TextSprite(img,w,h,f,l)
{var self=this;TextSprite.superclass.constructor.call(this,img,w,h,f,l);this.text="";this.style={font:"sans-serif",size:10,color:"#fff",borderColor:"#000",borderWidth:0,bold:false,italic:false,lineHeight:10};this.padding={left:0,right:0,top:0,bottom:0};this.align=TEXT_ALIGN_LEFT;this.valign=TEXT_VALIGN_TOP;this.wordWrap=true;this.prepareLine=function(text,y,ret)
{var availWidth=this.width-this.padding.left-this.padding.right;var availHeight=this.height-this.padding.top-this.padding.bottom;var words;y+=this.style.lineHeight;if(y>=availHeight)
{return{ret:ret,y:0,next:false};}
words=text.split(" ");var s="";var tmp="";var newLine=false;for(var i=0;i<words.length;i++)
{tmp+=(i>0?" ":"")+words[i];if(this.stage.getTextWidth(tmp,this.canvas)/Utils.globalScale/Utils.globalPixelScale>availWidth)
{if(this.wordWrap)newLine=true;break;}
else s=tmp;}
var x=this.x-this.width/2+this.padding.left;if(this.align!=TEXT_ALIGN_LEFT)
{var textWidth=this.stage.getTextWidth(s,this.canvas)/Utils.globalScale/Utils.globalPixelScale;if(this.align==TEXT_ALIGN_CENTER)
{x=this.x-textWidth/2;x+=(this.padding.left-this.padding.right)/2;}
if(this.align==TEXT_ALIGN_RIGHT)x=this.x+availWidth/2-textWidth-this.padding.right;}
ret.push({text:s,x:x});if(newLine)
{s="";for(var n=i;n<words.length;n++)s+=(n>i?" ":"")+words[n];tmp=this.prepareLine(s,y,ret);ret=tmp.ret;y=tmp.y;}
return{ret:ret,y:y,next:true};}
this.prepareText=function()
{var ret=[];var y=0;var tmp;var txt=this.text+"";var lines=txt.split("\n");for(var i=0;i<lines.length;i++)
{tmp=this.prepareLine(lines[i],y,ret);ret=tmp.ret;y=tmp.y;if(tmp.next===false)return ret;}
return ret;}
this.renderText=function(e)
{self.canvas=e.canvas;var oldLW=self.canvas.ctx.lineWidth;var style="";if(self.style.bold)style+="bold ";if(self.style.italic)style+="italic ";self.stage.setTextStyle(self.style.font,self.style.size,style,self.style.color,self.style.borderColor,self.canvas);self.canvas.ctx.lineWidth=self.style.borderWidth*Utils.globalScale*Utils.globalPixelScale;var data=self.prepareText();var sY=0;if(self.valign==TEXT_VALIGN_TOP)sY=self.y-self.height/2+self.padding.top;if(self.valign==TEXT_VALIGN_MIDDLE)
{var y=self.y;y+=(self.padding.top-self.padding.bottom)/2;sY=y-data.length*self.style.lineHeight/2;}
if(self.valign==TEXT_VALIGN_BOTTOM)sY=self.y+self.height/2-self.padding.bottom-data.length*self.style.lineHeight;sY+=self.style.lineHeight;var ox,oy,diffX,diffY,ignoreVP,canvasMod;for(var i=0;i<data.length;i++)
{oy=sY+i*self.style.lineHeight;ox=data[i].x;diffX=ox-self.x;diffY=oy-self.y;canvasMod=false;ignoreVP=self.ignoreViewport;if(self.rotation!=0||self.scaleX!=1||self.scaleY!=1)
{canvasMod=true;var ow=self.width*Utils.globalScale;var oh=self.height*Utils.globalScale;var ox=self.getX()*Utils.globalPixelScale-Math.floor(ow/2);var oy=self.getY()*Utils.globalPixelScale-Math.floor(oh/2);if(!self.ignoreViewport)
{ox-=self.stage.viewport.x*Utils.globalPixelScale*Utils.globalScale;oy-=self.stage.viewport.y*Utils.globalPixelScale*Utils.globalScale;}
self.canvas.ctx.save();self.canvas.ctx.translate(ox+Math.floor(ow/2),oy+Math.floor(oh/2));self.canvas.ctx.rotate(self.rotation);self.canvas.ctx.scale(self.scaleX,self.scaleY);ox=diffX;oy=diffY;ignoreVP=true;}
self.stage.drawText(data[i].text,ox,oy,self.opacity,ignoreVP,false,self.canvas);if(canvasMod)self.canvas.ctx.restore();}
self.canvas.ctx.lineWidth=oldLW;}
this.addEventListener("render",this.renderText);}
Utils.extend(TextSprite,Sprite);var FontsManager={fonts:[],embed:function(name,url)
{for(var i=0;i<FontsManager.fonts.length;i++)
{if(FontsManager.fonts[i].url==url&&FontsManager.fonts[i].name==name)return;}
var style=document.createElement('style');style.type="text/css";style.innerHTML='@font-face {font-family: "'+name+'"; src: url("'+url+'");}';document.getElementsByTagName('head')[0].appendChild(style);}};function AudioPlayer()
{var self=this;this.disabled=false;this.basePath="";this.mp3Support=true;this.delayPlay=false;this.audioWrapper=null;this.locked=false;this.busy=false;this.startPlayTime=0;this.createNewAudio=function()
{return document.createElement('audio');};this.init=function(path)
{this.basePath=path?path:"";this.delayPlay=("ontouchstart"in window);this.audioWrapper=this.createNewAudio();if(this.audioWrapper.canPlayType)this.mp3Support=this.audioWrapper.canPlayType('audio/mpeg')!="";else this.disabled=true;return!this.disabled;};this.play=function(file,loop)
{if(this.disabled)return false;var url=this.basePath+"/"+file+(this.mp3Support?".mp3":".ogg");this.stop();this.audioWrapper=this.createNewAudio();this.audioWrapper.src=url;this.audioWrapper.type=(this.mp3Support?"audio/mpeg":"audio/ogg");this.audioWrapper.loop=(loop?true:false);this.audioWrapper.preload="auto";this.audioWrapper.load();this.busy=true;this.audioWrapper.addEventListener("ended",this.controlPlay,false);if(this.delayPlay)this.audioWrapper.addEventListener("canplay",function(e){e.currentTarget.play();});else this.audioWrapper.play();this.startPlayTime=new Date().getTime();};this.stop=function()
{this.busy=false;try
{this.audioWrapper.pause();this.audioWrapper.currentTime=0.0;this.audioWrapper=null;}
catch(e){};};this.controlPlay=function()
{if(!self.audioWrapper.loop)self.busy=false;}}
function AudioMixer(path,channelsCount)
{this.channels=[];this.init=function(path,channelsCount)
{this.path=path;this.channels=[];for(var i=0;i<channelsCount;i++)
{this.channels[i]=new AudioPlayer(path);this.channels[i].init(path);}};this.play=function(file,loop,soft,channelID)
{var cID=-1;if(typeof channelID=="number")cID=channelID;else cID=this.getFreeChannel(soft);if(cID>=0&&cID<this.channels.length)
{this.channels[cID].stop();this.channels[cID].play(file,loop);}
return this.channels[cID];};this.stop=function(cID)
{if(cID>=0&&cID<this.channels.length)this.channels[cID].stop();};this.getFreeChannel=function(soft)
{var cID=-1;var freeChannels=[];var maxID=-1;var max=-1;var t=0;for(var i=0;i<this.channels.length;i++)
{if(!this.channels[i].locked)
{if(!this.channels[i].busy)freeChannels.push(i);else
{t=new Date().getTime();t-=this.channels[i].startPlayTime;if(t>max)
{max=t;maxID=i;}}}}
if(freeChannels.length==0)
{if(!soft&&max>=0)cID=max;}
else cID=freeChannels[0];return cID;};this.init(path,channelsCount);};var COOKIE_NAME="iron_overlord";var stage;var stage3;var world;var mc;var fps=18;var bitmaps;var GET;var data=[];var STATE_LOAD=0;var STATE_LOGO=1;var STATE_MENU=2;var STATE_SELECT_LEVEL=3;var STATE_TECH=4;var STATE_GAME=5;var STATE_DIALOG=6;var STATE_WIN=7;var STATE_LOOSE=8;var STATE_ABOUT=9;var STATE_DIALOG2=10;var STATE_PRELOAD=11;var STATE_BUY_PRE_LEVEL=12;var gameState=STATE_LOAD;var gameProgress=[];var curLevel=0;var score;var killUnits=[];var looseUnits=[];var doRebuildBack=false;var doRebuildMiddle=false;var iOSMode=false;var mixer;function Unit(type,state,x)
{this.uX=x;this.uY=0;this.template=null;this.state=null;this.type=type;this.fraction=0;this.startHp;this.hp;this.defense;this.attack;this.inDead=false;this.charged=false;this.showHPBar=function()
{this.hpBar.x=this.x;if(this.hp>=this.startHp)this.hpBar.visible=false;else
{this.hpBar.gotoAndStop(5-Math.floor(this.hp/this.startHp*6));this.hpBar.visible=true;}
if(!this.visible)this.hpBar.visible=false;}
this.setPos=function()
{this.x=this.uX+this.template.cpos.x;this.y=this.uY+this.template.cpos.y;this.showHPBar();if(this.state==UNIT_STATE_DEAD&&this.currentFrame==this.totalFrames-1)
{if(this.inDead)return;this.inDead=true;this.stop();this.minimap.destroy=true;this.hpBar.destroy=true;var t=stage.createTween(this,"opacity",1,0,18,Easing.linear.easeIn);t.onfinish=function(e)
{e.target.obj.destroy=true;};t.play();if(GUI.level.statusObj===this)GUI.level.clearStatusObj();if(this.fraction==1)
{owner.food+=this.food;looseUnits.push({type:this.type,name:this.name,name_plural:this.name_plural,score:this.startHp});}
else
{enemy.food+=this.food;killUnits.push({type:this.type,name:this.name,name_plural:this.name_plural,score:this.startHp});}
manageAvailUnits();manageAvailableMagic();if(this.type=="ogre"||this.type=="dragon")showVictory();}}
this.setTemplate=function(state)
{this.template=Units[this.type][state];}
this.setState=function(state)
{this.state=state;this.setTemplate(state);if(this.template.delay)this.animDelay=this.template.delay;else this.animDelay=1;this.bitmap=bitmaps[this.template.bitmap];this.width=this.template.width;this.height=this.template.height;this.totalFrames=this.template.frames;this.gotoAndPlay(0);}
this.name=Units[this.type].name;this.name_plural=Units[this.type].name_plural;this.descr=Units[this.type].descr;this.icon=Units[this.type].icon;this.fraction=Units[this.type].fraction;this.hp=Units[this.type].hp;this.startHp=Units[this.type].hp;this.defense=Units[this.type].defense;this.attack=Units[this.type].attack;this.food=Units[this.type].food;this.setTemplate(state);this.uY=139-this.template.height/2-(Units[this.type].type==UNIT_TYPE_FLYING?50:0);Unit.superclass.constructor.call(this,bitmaps[this.template.bitmap],this.template.width,this.template.height,this.template.frames);this.setState(state);}
Utils.extend(Unit,Sprite);function Building(type,x)
{bt=Builds[type];this.spriteType=TYPE_HOUSE;this.type=bt.type;this.houseType=type;this.hp=bt.hp;this.startHp=bt.hp;this.defense=bt.defense;this.attack=bt.attack;this.fraction=bt.fraction;this.state="";this.name=bt.name;this.descr=bt.descr;this.icon=bt.icon;this.locked=false;this.inDead=false;this.ready=100;this.showHPBar=function()
{if(this.hp>=this.startHp)this.hpBar.visible=false;else
{this.hpBar.gotoAndStop(5-Math.floor(this.hp/this.startHp*6));this.hpBar.visible=true;}}
this.setState=function(state)
{this.state=state;if(this.state==UNIT_STATE_DEAD)
{if(this.inDead)return;this.inDead=true;this.minimap.destroy=true;this.hpBar.destroy=true;var t=stage.createTween(this,"opacity",1,0,18,Easing.linear.easeIn);t.onfinish=function(e)
{e.target.obj.destroy=true;};t.play();this.ready=0;manageAvailUnits();manageAvailBuilds();this.visible=true;this.view.visible=false;this.view.destroy=true;doRebuildMiddle=true;if(GUI.level.statusObj===this)GUI.level.clearStatusObj();}}
Building.superclass.constructor.call(this,bitmaps[bt.bitmap],bt.width,bt.height,1);this.x=x;this.y=138-bt.height/2;if(bt.type==BUILD_TYPE_TOWER)this.onenterframe=controlTower;}
Utils.extend(Building,Sprite);function Button(img,w,h,f,l)
{Button.superclass.constructor.call(this,img,w,h,f,l);this.addEventListener("mousedown",function(e){e.target.gotoAndStop(1);});this.addEventListener("mouseup",function(e){e.target.gotoAndStop(0);});this.addEventListener("mouseout",function(e){e.target.gotoAndStop(0);});}
Utils.extend(Button,Sprite);function TextButton(text)
{TextButton.superclass.constructor.call(this,bitmaps.button,80,26,2);this.stop();this.text=text;this.style.size=14;this.style.font="impact";this.style.color="#aae5fe";this.style.borderWidth=3;this.style.borderColor="#0d1221";this.align=TEXT_ALIGN_CENTER;this.valign=TEXT_VALIGN_MIDDLE;this.disabled=false;this.mode=0;this.addEventListener("mousedown",function(e){e.target.gotoAndStop(1);});this.addEventListener("mouseup",function(e){e.target.gotoAndStop(0);});this.addEventListener("mouseout",function(e){e.target.gotoAndStop(0);});this.addEventListener("enterframe",function(e)
{if(e.target.disabled)
{e.target.gotoAndStop(2);e.target.style.color="#aaa";}
else
{e.target.style.color="#aae5fe";}
if(e.target.mode==1)e.target.style.color="#f00";});}
Utils.extend(TextButton,TextSprite);function RadioButton(text,group)
{TextButton.superclass.constructor.call(this,bitmaps.radiobutton,300,18,2);this.stop();this.isRadioButton=true;this.group=group;this.text=text;this.align=TEXT_ALIGN_LEFT;this.valign=TEXT_VALIGN_MIDDLE;this.padding.left=24;this.padding.bottom=2;this.checked=false;this.addEventListener("mouseup",function(e)
{for(var i=0;i<e.target.stage.objects.length;i++)
{var obj=e.target.stage.objects[i];if(obj.isRadioButton&&obj.group==e.target.group)obj.checked=false;}
e.target.checked=true;});this.addEventListener("enterframe",function(e)
{if(e.target.checked)e.target.gotoAndStop(1);else e.target.gotoAndStop(0);});}
Utils.extend(RadioButton,TextSprite);window.onload=function()
{GET=Utils.parseGet();Utils.addMobileListeners(true,true);Utils.addFitLayoutListeners();Utils.mobileCorrectPixelRatio();FontsManager.embed("impact","fonts/impact.ttf");ExternalAPI.init();setTimeout(startLoad,600);};function startLoad()
{var resolution=Utils.getMobileScreenResolution(true);if(GET["debug"]==1)resolution=Utils.getScaleScreenResolution(1,true);Utils.globalScale=resolution.scale;Utils.createLayout(document.getElementById("main_container"),resolution,true);Utils.addEventListener("fitlayout",manageLayout);Utils.addEventListener("lockscreen",function(){if(stage&&stage.started)stage.stop();});Utils.addEventListener("unlockscreen",function(){if(stage&&!stage.started)stage.start();});Utils.fitLayoutToScreen();Utils.mobileHideAddressBar();if(GET["debug"]!=1)Utils.checkOrientation(true);var preloader=new ImagesPreloader();data=getAssets();preloader.load(data,loadImagesEnd,Utils.showLoadProgress);}
function manageLayout()
{if(stage)
{var c=document.getElementById('screen_container');var s=document.getElementById('screen');var c2=document.getElementById('screen2_container');var s2=document.getElementById('screen2');var w2=document.getElementById('screen2_wrapper');var c3=document.getElementById('screen3_container');var s3=document.getElementById('screen3');var w3=document.getElementById('screen3_wrapper');c2.style.width=c.style.width;c2.style.height=c.style.height;w2.style.width=s.width+"px";w2.style.height=s.height+"px";s2.width=~~(1140*Utils.globalScale*Utils.globalPixelScale);s2.height=~~(145*Utils.globalScale*Utils.globalPixelScale);c3.style.width=c.style.width;c3.style.height=c.style.height;w3.style.width=s.width+"px";w3.style.height=s.height+"px";s3.width=~~(1280*Utils.globalScale*Utils.globalPixelScale);s3.height=~~(320*Utils.globalScale*Utils.globalPixelScale);if(GUI.level.sky)GUI.level.buildSky();stage.drawScene(document.getElementById("screen"));buildBackground();buildMiddleScene();GUI.level.setScrollPos();}}
function loadImagesEnd(data)
{document.getElementById('progress_container').style.display='none';document.getElementById('screen_container').style.display='block';document.getElementById('screen_background_container').style.display='block';var scr=document.getElementById('screen');var c=document.createElement("div");c.setAttribute("id","screen2_container");c.setAttribute("align","center");c.setAttribute("style","width: 100%; height: 100%; position: absolute; left: 0px; top: 0px; z-index: 1;");var s='<div id="screen2_wrapper" style="overflow: hidden; position: relative; width: 100%;">';s+='<canvas id="screen2" width="'+scr.width+'" height="'+scr.height+'" style="position: absolute; left: 0px; top: 0px;"></canvas>';s+='</div>';c.innerHTML=s;document.getElementById('main_container').appendChild(c);var c=document.createElement("div");c.setAttribute("id","screen3_container");c.setAttribute("align","center");c.setAttribute("style","width: 100%; height: 100%; position: absolute; left: 0px; top: 0px; z-index: 1;");var s='<div id="screen3_wrapper" style="overflow: hidden; position: relative; width: 100%;">';s+='<canvas id="screen3" width="'+scr.width+'" height="'+scr.height+'" style="position: absolute; left: 0px; top: 0px;"></canvas>';s+='</div>';c.innerHTML=s;document.getElementById('main_container').appendChild(c);bitmaps=data;loadGame();UpgradesManager.load();if(GET["debug"]!=1)
{iOSMode=(navigator.userAgent.toLowerCase().indexOf("mac")!=-1);mixer=new AudioMixer("sounds",(iOSMode?1:10));if(iOSMode)
{showPreload();}
else
{mixer.channels[0].locked=true;playBGMusic();showMenu();}}}
function playBGMusic()
{mixer.play("music1",true,false,0);}
function showPreload()
{gameState=STATE_PRELOAD;createScene();}
function showMenu()
{gameState=STATE_MENU;createScene();}
function showAbout()
{gameState=STATE_ABOUT;createScene();}
function showSelectLevel()
{gameState=STATE_SELECT_LEVEL;createScene();}
function showTech()
{gameState=STATE_TECH;createScene();}
function createStage()
{if(stage)
{stage.destroy();stage.stop();}
if(stage3)
{stage3.destroy();stage3.stop();}
stage=new Stage('screen',480,320,false);stage.delay=1000/fps;stage.onpretick=preTick;stage.onposttick=postTick;stage.ceilSizes=true;stage3=new Stage('screen3',1280,320,false);stage3.delay=1000/fps;stage3.ceilSizes=true;stageStrings=[];}
function createScene()
{createStage();if(gameState==STATE_MENU)GUI.startMenu.create();if(gameState==STATE_ABOUT)GUI.about.create();if(gameState==STATE_SELECT_LEVEL)GUI.selectLevel.create();if(gameState==STATE_TECH)GUI.tech.create();if(gameState==STATE_PRELOAD)GUI.preload.create();buildBackground();stage.start();}
var owner={money:0,food:0}
var enemy={money:0,food:0}
var magicHeal;var magicLight;var magicQueen;function startLastLevel()
{var lastLevel=-1;for(var i=0;i<15;i++)
{if(gameProgress[i]>=0)lastLevel=i;}
lastLevel++;if(lastLevel>=Levels.length)lastLevel=Levels.length-1;startLevel(lastLevel);}
function prepareLevel(e)
{startLevel(e.target.levelID);}
var hint={};function startLevel(id)
{mixer.play("music"+(Math.floor(Math.random()*4)+2),true,false,0);if(!iOSMode)mixer.play((Math.random()<=0.5?"horn":"cock"));gameState=STATE_GAME;curLevel=id;createStage();GUI.level.create(id);var level=Levels[id];owner.money=level.money;owner.food=level.food;if(ini.cheatMode)
{owner.money=9999;owner.food=9999;}
addAvailBuilds();addAvailUnits();manageAvailBuilds();manageAvailUnits();magicHeal=null;magicLight=null;magicQueen=null;var icons=[];if(UpgradesManager.magicHeal==1)
{magicHeal=new Sprite(bitmaps.icon_magic_heal,30,35,2);magicHeal.gotoAndStop(0);magicHeal.onclick=startMagicHeal;icons.push(magicHeal);}
if(UpgradesManager.magicLight==1)
{magicLight=new Sprite(bitmaps.icon_magic_light,30,35,2);magicLight.gotoAndStop(0);magicLight.onclick=startMagicLight;icons.push(magicLight);}
if(UpgradesManager.magicQueen==1)
{magicQueen=new Sprite(bitmaps.icon_magic_queen,30,35,2);magicQueen.gotoAndStop(0);magicQueen.onclick=startMagicQueen;icons.push(magicQueen);}
manageAvailableMagic();var x=240-icons.length/2*40;for(var i=0;i<icons.length;i++)
{icons[i].x=x;icons[i].y=20;icons[i].ignoreViewport=true;stage.addChild(icons[i]);x+=40;}
killUnits=[];looseUnits=[];GUI.level.create2();if(Levels[id].dialogs)
{gameState=STATE_DIALOG;dialogStep=-1;processDialog();}
else endDialog();hint={};mc=new Sprite(bitmaps.hint,150,150,1);mc.zIndex=100000;mc.visible=false;stage.addChild(mc);mc.ignoreViewport=true;hint.back=mc;mc=new TextSprite(null,150,20,1);mc.zIndex=100000;mc.visible=false;stage.addChild(mc);mc.ignoreViewport=true;mc.style.color="#0099ff";mc.style.borderColor="#0099ff";mc.style.size=11;mc.padding.left=3;hint.name=mc;mc=new TextSprite(null,150,100,1);mc.zIndex=100000;mc.visible=false;stage.addChild(mc);mc.ignoreViewport=true;mc.style.color="#ffff33";mc.style.borderColor="#ffff33";mc.style.size=9;mc.padding.left=3;mc.padding.right=3;hint.descr=mc;mc=new TextSprite(null,150,20,1);mc.zIndex=100000;mc.visible=false;stage.addChild(mc);mc.ignoreViewport=true;mc.style.color="#ff3333";mc.style.borderColor="#ff3333";mc.style.size=9;mc.padding.left=3;mc.padding.right=3;mc.text=lang.consume+":";hint.consume=mc;mc=new TextSprite(null,150,60,1);mc.zIndex=100000;mc.visible=false;stage.addChild(mc);mc.ignoreViewport=true;mc.style.color="#ffff33";mc.style.borderColor="#ffff33";mc.style.size=9;mc.padding.left=10;mc.padding.right=3;hint.consume2=mc;clearAI();manageLayout();buildBackground();buildMiddleScene();ExternalAPI.log.levelStarted(curLevel);stage.start();}
function showHint(e)
{if(gameState!=STATE_GAME)
{hideHint();return;}
var obj=e.target;var x=obj.x-obj.width/2+hint.back.width/2;var y=obj.y-obj.height/2-hint.back.height/2;hint.back.x=x;hint.back.y=y;if(hint.back.x+hint.back.width/2>480)hint.back.x=obj.x+obj.width/2-hint.back.width/2;for(var i in hint)
{hint[i].visible=true;hint[i].x=hint.back.x;}
hint.name.y=hint.back.y-60;hint.descr.y=hint.back.y-0;hint.consume.y=hint.back.y+45;hint.consume2.y=hint.back.y+80;hint.name.text=obj.name;hint.descr.text=obj.descr;hint.consume2.text=lang.money+": "+obj.money;if(obj.food!==false)hint.consume2.text+="\n"+lang.population+": "+obj.food;}
function hideHint()
{for(var i in hint)hint[i].visible=false;}
var dialogStep=-1;var dialogString;var dialogHelper;var dialogItems=[];function processDialog()
{if(dialogStep<0)
{dialogItems=[];mc=new Sprite(null,480,320,1);mc.x=240;mc.y=160;mc.ignoreViewport=true;mc.onclick=function(){return false;};mc.onmousedown=function(){return false;};mc.onmouseup=function(){return false;};stage.addChild(mc);dialogItems.push(mc);mc=new Sprite(bitmaps.dialog_box,300,100,1);mc.x=240;mc.y=100;stage.addChild(mc);dialogItems.push(mc);mc=new Sprite(bitmaps.helper1,120,135,1);mc.x=120;mc.y=78;stage.addChild(mc);dialogItems.push(mc);dialogHelper=mc;mc=new TextButton(lang.next);mc.x=160;mc.y=150;stage.addChild(mc);mc.onmouseup=processDialog;dialogItems.push(mc);mc=new TextButton(lang.skip);mc.x=320;mc.y=150;mc.onmouseup=endDialog;stage.addChild(mc);dialogItems.push(mc);dialogString=new TextSprite(null,200,80,1);dialogString.x=240;dialogString.y=100;stage.addChild(dialogString);dialogItems.push(dialogString);}
dialogStep++;if(dialogStep>=Levels[curLevel].dialogs.length)
{endDialog();return;}
var d=Levels[curLevel].dialogs[dialogStep];dialogString.text=d.text;dialogHelper.bitmap=bitmaps["helper"+d.helper];if(d.helper==1)
{dialogHelper.x=120;dialogString.x=270;}
else
{dialogHelper.x=355;dialogString.x=200;}}
function endDialog()
{for(var i=0;i<dialogItems.length;i++)stage.removeChild(dialogItems[i]);dialogItems=[];if(ExternalAPI.buyEnabled)showLevelPayDialog();else gameState=STATE_GAME;}
function addLevelPayButton(x,y,type,bonus,cost,addChar)
{mc=new TextButton("+"+bonus+addChar+" = "+cost+" "+lang.buy_scores);mc.x=x;mc.y=y;mc.style.size=8;mc.padding.bottom=4;mc.buy_button=true;mc.bonus_type=type;mc.bonus=bonus;mc.cost=cost;mc.selected=false;if(totalGameScores>=cost)mc.onmousedown=buyLevelSelectItem;else
{mc.onmousedown=function(){showBuyItemsDialog(function(){hideLevelPayDialog();showLevelPayDialog();});};mc.mode=1;}
stage.addChild(mc);dialogItems.push(mc);};function buyActionComplete(result)
{if(result)
{var id=selectedBuyItem.buyID;if(buyCosts.things[id].type=="scores")
{totalGameScores+=buyCosts.things[id].ammount;saveGame();}
if(buyCosts.things[id].type=="skill_points")
{UpgradesManager.skillPoints+=buyCosts.things[id].ammount;UpgradesManager.save();}}
if(buyActionCallback)buyActionCallback();hideBuyItemsDialog();}
var currentUserBalanseSprite;var buyButton;var selBuyBonus=false;var levelBonus={type:-1,val:0};function showLevelPayDialog()
{gameState=STATE_BUY_PRE_LEVEL;levelBonus={type:-1,val:0};mc=new Sprite(bitmaps.buy_box,340,230);mc.x=240;mc.y=140;stage.addChild(mc);dialogItems.push(mc);mc=new TextSprite(null,100,26);mc.x=240;mc.y=62;mc.ignoreViewport=true;mc.style.size=18;mc.style.font="impact";mc.align=TEXT_ALIGN_CENTER;mc.text=lang.buy_shop;mc.style.color="#ffff13";stage.addChild(mc);dialogItems.push(mc);mc=new TextSprite(null,100,20);mc.x=348;mc.y=62;mc.ignoreViewport=true;mc.style.size=10;mc.style.font="impact";mc.align=TEXT_ALIGN_RIGHT;mc.style.color="#fff";stage.addChild(mc);dialogItems.push(mc);currentUserBalanseSprite=mc;redrawCurrentUserBalanseSprite();mc=new Sprite(bitmaps.buy_item_back1,80,84);mc.x=120;mc.y=108;stage.addChild(mc);dialogItems.push(mc);mc=new TextSprite(null,80,20);mc.x=120;mc.y=81;mc.style.size=10;mc.style.font="impact";mc.align=TEXT_ALIGN_CENTER;mc.text=lang.buy_item1;stage.addChild(mc);dialogItems.push(mc);addLevelPayButton(120,166,0,buyCosts.life[0].bonus,buyCosts.life[0].cost,"%");addLevelPayButton(120,194,0,buyCosts.life[1].bonus,buyCosts.life[1].cost,"%");addLevelPayButton(120,222,0,buyCosts.life[2].bonus,buyCosts.life[2].cost,"%");mc=new Sprite(bitmaps.buy_item_back2,80,84);mc.x=200;mc.y=108;stage.addChild(mc);dialogItems.push(mc);mc=new TextSprite(null,80,20);mc.x=200;mc.y=81;mc.style.size=10;mc.style.font="impact";mc.align=TEXT_ALIGN_CENTER;mc.text=lang.buy_item2;stage.addChild(mc);dialogItems.push(mc);addLevelPayButton(200,166,1,buyCosts.attack[0].bonus,buyCosts.attack[0].cost,"%");addLevelPayButton(200,194,1,buyCosts.attack[1].bonus,buyCosts.attack[1].cost,"%");addLevelPayButton(200,222,1,buyCosts.attack[2].bonus,buyCosts.attack[2].cost,"%");mc=new Sprite(bitmaps.buy_item_back3,80,84);mc.x=280;mc.y=108;stage.addChild(mc);dialogItems.push(mc);mc=new TextSprite(null,80,20);mc.x=280;mc.y=81;mc.style.size=10;mc.style.font="impact";mc.align=TEXT_ALIGN_CENTER;mc.text=lang.buy_item3;stage.addChild(mc);dialogItems.push(mc);addLevelPayButton(280,166,2,buyCosts.food[0].bonus,buyCosts.food[0].cost,"");addLevelPayButton(280,194,2,buyCosts.food[1].bonus,buyCosts.food[1].cost,"");addLevelPayButton(280,222,2,buyCosts.food[2].bonus,buyCosts.food[2].cost,"");mc=new Sprite(bitmaps.buy_item_back4,80,84);mc.x=360;mc.y=108;stage.addChild(mc);dialogItems.push(mc);mc=new TextSprite(null,80,20);mc.x=360;mc.y=81;mc.style.size=10;mc.style.font="impact";mc.align=TEXT_ALIGN_CENTER;mc.text=lang.buy_item4;stage.addChild(mc);dialogItems.push(mc);addLevelPayButton(360,166,3,buyCosts.money[0].bonus,buyCosts.money[0].cost,"");addLevelPayButton(360,194,3,buyCosts.money[1].bonus,buyCosts.money[1].cost,"");addLevelPayButton(360,222,3,buyCosts.money[2].bonus,buyCosts.money[2].cost,"");mc=new TextButton(lang.skip,80,26,1);mc.x=180;mc.y=255;mc.onmouseup=hideLevelPayDialog;stage.addChild(mc);dialogItems.push(mc);buyButton=new TextButton(lang.buy,80,26,1);buyButton.x=300;buyButton.y=255;buyButton.onmouseup=buyLevelItem;stage.addChild(buyButton);buyButton.disabled=true;dialogItems.push(buyButton);selBuyBonus=false;}
function buyLevelSelectItem(e)
{var o;var obj=e.target;if(obj.disabled)return;var val=!selBuyBonus;for(var i=0;i<stage.objects.length;i++)
{o=stage.objects[i];if(o.buy_button)
{o.disabled=val;if(!val)o.gotoAndStop(0);}}
if(val)
{selBuyBonus=obj;buyButton.disabled=false;buyButton.gotoAndStop(0);totalGameScores-=obj.cost;}
else
{selBuyBonus=false;buyButton.disabled=true;totalGameScores+=obj.cost;}
redrawCurrentUserBalanseSprite();obj.disabled=false;}
function redrawCurrentUserBalanseSprite()
{currentUserBalanseSprite.text=lang.buy_scores+": "+totalGameScores;}
function buyLevelItem()
{if(buyButton.disabled)return;totalGameScores-=selBuyBonus.cost;saveGame();levelBonus.type=selBuyBonus.bonus_type;levelBonus.val=selBuyBonus.bonus;if(levelBonus.type==2)owner.food+=levelBonus.val;if(levelBonus.type==3)owner.money+=levelBonus.val;hideLevelPayDialog();}
function hideLevelPayDialog()
{for(var i=0;i<dialogItems.length;i++)stage.removeChild(dialogItems[i]);dialogItems=[];gameState=STATE_GAME;}
var buyActionCallback;var buyDialogItems;function showBuyItemsDialog(callback)
{buyActionCallback=callback;buyDialogItems=[];selectedBuyItem=null;mc=new Sprite(null,480,320);mc.x=240;mc.y=160;mc.ignoreViewport=true;mc.onclick=function(){return false;};mc.onmousedown=function(){return false;};mc.onmouseup=function(){return false;};stage.addChild(mc);buyDialogItems.push(mc);mc=new Sprite(bitmaps.buy_box,340,230);mc.x=240;mc.y=140;stage.addChild(mc);buyDialogItems.push(mc);mc=new TextSprite(null,100,26);mc.x=240;mc.y=62;mc.ignoreViewport=true;mc.style.size=18;mc.style.font="impact";mc.align=TEXT_ALIGN_CENTER;mc.text=lang.buy_shop;mc.style.color="#ffff13";stage.addChild(mc);buyDialogItems.push(mc);var y=160-(buyCosts.things.length*26)/2;for(var i=0;i<buyCosts.things.length;i++)
{var txt=buyCosts.things[i].ammount+" ";if(buyCosts.things[i].type=="scores")txt+=lang.buy_scores;if(buyCosts.things[i].type=="skill_points")txt+=lang.buy_skill_point;txt+=" "+lang.buy_for+" ";txt+=buyCosts.things[i].cost+lang.buy_currency;mc=new RadioButton(txt,"g1");mc.x=330;mc.y=y;stage.addChild(mc);mc.buyID=i;mc.onclick=selectBuyItem;y+=26;buyDialogItems.push(mc);}
mc=new TextButton(lang.buy_cancel,80,26,1);mc.x=180;mc.y=255;mc.onmouseup=hideBuyItemsDialog;stage.addChild(mc);buyDialogItems.push(mc);buyButton=new TextButton(lang.buy,80,26,1);buyButton.x=300;buyButton.y=255;buyButton.onmouseup=doBuyItems;stage.addChild(buyButton);buyButton.disabled=true;buyDialogItems.push(buyButton);}
var selectedBuyItem;function selectBuyItem(e)
{selectedBuyItem=e.target;buyButton.disabled=false;buyButton.gotoAndStop(0);}
function hideBuyItemsDialog()
{for(var i=0;i<buyDialogItems.length;i++)stage.removeChild(buyDialogItems[i]);buyDialogItems=[];return false;}
function doBuyItems()
{var id=selectedBuyItem.buyID;ExternalAPI.buyAction(buyCosts.things[id].itemID,buyActionComplete);return false;}
var magicPrompt;var magicPromptType=0;function startMagicHeal(e)
{if(gameState!=STATE_GAME)return;if(owner.money<30)return;if(magicPromptType>0)return;var obj=e.target;if(obj.scaleX<1)return;if(magicPrompt)stage.removeChild(magicPrompt);magicPrompt=new TextSprite(null,480,15,1);magicPrompt.x=240;magicPrompt.y=50;magicPrompt.ignoreViewport=true;magicPrompt.text=(Utils.touchScreen?lang.tap_action:lang.click_action)+" "+lang.magic_prompt;magicPrompt.style.borderColor="#fff";magicPrompt.align=TEXT_ALIGN_CENTER;magicPrompt.style.bold=true;magicPrompt.style.size=14;magicPrompt.zIndex=10001;stage.addChild(magicPrompt);owner.money-=30;manageAvailableMagic();magicPromptType=1;return false;}
function startMagicLight(e)
{if(gameState!=STATE_GAME)return;if(owner.money<30)return;if(magicPromptType>0)return;var obj=e.target;if(obj.scaleX<1)return;if(magicPrompt)stage.removeChild(magicPrompt);magicPrompt=new TextSprite(null,480,15,1);magicPrompt.x=240;magicPrompt.y=50;magicPrompt.ignoreViewport=true;magicPrompt.x=240;magicPrompt.y=50;magicPrompt.ignoreViewport=true;magicPrompt.text=(Utils.touchScreen?lang.tap_action:lang.click_action)+" "+lang.magic_prompt;magicPrompt.align=TEXT_ALIGN_CENTER;magicPrompt.style.borderColor="#fff";magicPrompt.style.bold=true;magicPrompt.style.size=14;magicPrompt.zIndex=10001;stage.addChild(magicPrompt);owner.money-=30;manageAvailableMagic();magicPromptType=2;return false;}
function startMagicQueen()
{if(gameState!=STATE_GAME)return;if(findUnit("elfQueen",1))return;if(owner.money<300)return;if(magicQueen.scaleX<1)return;magicQueen.scaleX=magicQueen.scaleY=0.1;var t=stage.createTween(magicQueen,"scaleX",0.1,1,fps*3,Easing.linear.easeIn);t.play();t=stage.createTween(magicQueen,"scaleY",0.1,1,fps*3,Easing.linear.easeIn);t.play();newUnit("elfQueen",240);owner.money-=300;manageAvailableMagic();}
var buildsControls=[];var unitsControls=[];function addAvailBuilds()
{buildsControls=[];var row=0;var col=0;var bt;var builds=[];var tmp=UpgradesManager.buildings;for(var i=0;i<tmp.length;i++)
{bt=Builds[tmp[i]];if(bt.type!=BUILD_TYPE_CASTLE)builds.push(tmp[i]);}
for(var i=0;i<tmp.length;i++)
{bt=Builds[tmp[i]];if(bt.type==BUILD_TYPE_CASTLE)builds.push(tmp[i]);}
for(var i=0;i<builds.length;i++)
{bt=Builds[builds[i]];if(bt.type==BUILD_TYPE_CASTLE)row=2;mc=new TextSprite(bitmaps[bt.icon],30,30,2);mc.text=bt.money+"";mc.align=TEXT_ALIGN_RIGHT;mc.valign=TEXT_VALIGN_BOTTOM;mc.padding.bottom=1;mc.style.bold=true;mc.stop();mc.x=col*32+18;mc.y=row*31+237;mc.ignoreViewport=true;mc.name=bt.name;mc.descr=bt.descr;mc.money=bt.money;mc.food=false;if(!Utils.touchScreen)
{mc.onmouseover=showHint;mc.onmouseout=hideHint;}
stage.addChild(mc);mc.money=bt.money;mc.type=builds[i];mc.enable=true;mc.prevBuild=bt.prevBuild;mc.static=true;var l=new Sprite(null,30,30,24);l.parent=mc;l.x=mc.x;l.y=mc.y;l.visible=false;l.ignoreViewport=true;l.stop();l.onenterframe=controlLock;l.bType=1;stage.addChild(l);mc.lock=l;mc.onclick=prepareBuildHouse;buildsControls.push(mc);col++;if(col>=3)
{col=0;row++;}}}
function addAvailUnits()
{unitsControls=[];var row=0;var col=0;var bt;var units=UpgradesManager.units;for(var i=0;i<units.length;i++)
{bt=Units[units[i].type];mc=new TextSprite(bitmaps[bt.icon],30,30,2);mc.text=bt.money+"";mc.align=TEXT_ALIGN_RIGHT;mc.valign=TEXT_VALIGN_BOTTOM;mc.padding.bottom=1;mc.style.bold=true;mc.stop();mc.x=col*32+399;mc.y=row*31+237;mc.ignoreViewport=true;mc.name=bt.name;mc.descr=bt.descr;mc.money=bt.money;mc.food=bt.food;if(!Utils.touchScreen)
{mc.onmouseover=showHint;mc.onmouseout=hideHint;}
stage.addChild(mc);mc.money=bt.money;mc.food=bt.food;mc.enable=true;mc.type=units[i].type;mc.needBuild=bt.needBuild;var l=new Sprite(null,30,30,24);l.parent=mc;l.x=mc.x;l.y=mc.y;l.visible=false;l.ignoreViewport=true;l.stop();l.onenterframe=controlLock;l.bType=2;stage.addChild(l);mc.lock=l;mc.onclick=buildUnit;mc.static=true;unitsControls.push(mc);col++;if(col>=3)
{col=0;row++;}}}
function controlLock(e)
{if(gameState!=STATE_GAME)return;var obj=e.target;if(obj.visible)
{if(obj.bType==1)
{stage.drawRectangle(obj.x,obj.y,30,30,"#000",true,0.8,true);}
if(obj.bType==2)
{if(obj.currentFrame==23)
{obj.stop();obj.visible=false;newUnit(obj.parent.type);}
else
{var h=(24-obj.currentFrame)/24*30;stage.drawRectangle(obj.x,obj.y+(30-h)/2,30,h,"#000",true,0.8,true);}}}}
function findBuild(type,fraction,ignoreReady)
{for(var i=0;i<stage.objects.length;i++)
{if(stage.objects[i].spriteType==TYPE_HOUSE&&stage.objects[i].type==type&&stage.objects[i].fraction==fraction&&(stage.objects[i].ready>=100||ignoreReady))return stage.objects[i];}
return false;}
function findTemplateBuild(type,fraction,ignoreReady)
{for(var i=0;i<stage.objects.length;i++)
{if(stage.objects[i].spriteType==TYPE_HOUSE&&stage.objects[i].houseType==type&&stage.objects[i].fraction==fraction&&(stage.objects[i].ready>=100||ignoreReady))return stage.objects[i];}
return false;}
function manageAvailBuilds()
{var b;for(var i=0;i<buildsControls.length;i++)
{b=buildsControls[i];var oldState=b.enabled;if(b.money>owner.money||findTemplateBuild(b.type,1,true))b.enabled=false;else b.enabled=true;if(b.enabled&&b.prevBuild)
{if(!findTemplateBuild(b.prevBuild,1))b.enabled=false;}
if(b.enabled)b.gotoAndStop(0);else b.gotoAndStop(1);if(oldState!=b.enabled)doRebuildBack=true;}}
function manageAvailUnits()
{var u;var wCnt=0;for(var i=0;i<stage.objects.length;i++)
{if(stage.objects[i].spriteType==TYPE_UNIT&&getUnitType(stage.objects[i])==UNIT_TYPE_WORKER&&stage.objects[i].fraction==1)wCnt++;}
for(var i=0;i<unitsControls.length;i++)
{u=unitsControls[i];var oldState=u.enabled;u.enabled=true;if(u.money>owner.money||owner.food<u.food)u.enabled=false;if(u.needBuild!="")
{if(!findTemplateBuild(u.needBuild,1))u.enabled=false;}
else
{var c=findBuild(BUILD_TYPE_CASTLE,1);if(c&&Builds[c.houseType].workers<=wCnt)u.enabled=false;}
if(Units[u.type].uniq&&findUnit(u.type,1))u.enabled=false;if(u.enabled)u.gotoAndStop(0);else u.gotoAndStop(1);if(oldState!=u.enabled)doRebuildBack=true;}}
function manageAvailableMagic()
{var ok;if(magicHeal)
{if(owner.money<30)magicHeal.gotoAndStop(1);else magicHeal.gotoAndStop(0);}
if(magicLight)
{if(owner.money<30)magicLight.gotoAndStop(1);else magicLight.gotoAndStop(0);}
if(magicQueen)
{if(owner.money>=300)
{if(findUnit("elfQueen",1))magicQueen.gotoAndStop(1);else magicQueen.gotoAndStop(0);}
else magicQueen.gotoAndStop(1);}}
function buildUnit(e)
{var obj=e.target;if(!obj.enabled||obj.lock.visible||gameState!=STATE_GAME)return false;obj.lock.visible=true;obj.lock.gotoAndPlay(0);owner.money-=obj.money;owner.food-=obj.food;manageAvailUnits();manageAvailBuilds();manageAvailableMagic();return false;}
var preBildHouse=null;var preBuildPrompt=null;function prepareBuildHouse(e)
{var obj=e.target;if(gameState!=STATE_GAME)return;if(!obj.enabled||obj.lock.visible)return false;if(preBildHouse)return;preBildHouse=obj;owner.money-=obj.money;if(preBuildPrompt)stage.removeChild(preBuildPrompt);if(Builds[preBildHouse.type].type==BUILD_TYPE_CASTLE)
{obj.visible=false;buildHouse();return;}
preBuildPrompt=new TextSprite(null,300,15,1);preBuildPrompt.x=240;preBuildPrompt.y=30;preBuildPrompt.ignoreViewport=true;preBuildPrompt.text=(Utils.touchScreen?lang.tap_action:lang.click_action)+" "+lang.build_prompt;preBuildPrompt.style.borderColor="#fff";preBuildPrompt.align=TEXT_ALIGN_CENTER;preBuildPrompt.style.bold=true;preBuildPrompt.style.size=14;preBuildPrompt.zIndex=10001;stage.addChild(preBuildPrompt);obj.lock.visible=true;obj.lock.gotoAndStop(23);manageAvailUnits();manageAvailBuilds();manageAvailableMagic();return false;}
function doTargetAction(e)
{if(preBildHouse)buildHouse(e);if(magicPromptType>0)
{stage.removeChild(magicPrompt);if(magicPromptType==1)
{mc=new Sprite(bitmaps.magic_heal,28,128,6);mc.x=e.target.x+e.x;mc.y=72;mc.animDelay=2;mc.onenterframe=controlHealMagic;mc.zIndex=10001;stage.addChild(mc);magicHeal.scaleX=magicHeal.scaleY=0.1;var t=stage.createTween(magicHeal,"scaleX",0.1,1,fps*3,Easing.linear.easeIn);t.play();t=stage.createTween(magicHeal,"scaleY",0.1,1,fps*3,Easing.linear.easeIn);t.play();}
if(magicPromptType==2)
{mc=new Sprite(bitmaps.magic_light,28,128,4);mc.x=e.target.x+e.x;mc.y=76;mc.animDelay=2;mc.onenterframe=controlLightMagic;mc.zIndex=10001;stage.addChild(mc);group=getEnemyGroup(mc.x,1);for(var i=0;i<group.length;i++)
{damageUnit(group[i],30,true);}
magicLight.scaleX=magicLight.scaleY=0.1;var t=stage.createTween(magicLight,"scaleX",0.1,1,fps*3,Easing.linear.easeIn);t.play();t=stage.createTween(magicLight,"scaleY",0.1,1,fps*3,Easing.linear.easeIn);t.play();}
magicPromptType=0;}}
function controlHealMagic(e)
{if(gameState!=STATE_GAME)return;var obj=e.target;if(!obj.cnt)obj.cnt=0;obj.cnt++;if(obj.cnt>=fps*2)obj.destroy=true;var x1_1,x1_2,x2_1,x2_2;x1_1=obj.x-obj.width/2;x1_2=obj.x+obj.width/2;for(var i=0;i<stage.objects.length;i++)
{c=stage.objects[i];if((c.spriteType==TYPE_UNIT||c.spriteType==TYPE_HOUSE)&&c.fraction==1&&c.state!=UNIT_STATE_DEAD)
{if(c.spriteType==TYPE_UNIT)
{var w=Units[c.type].stateMove.width;x2_1=c.uX-w/2;x2_2=c.uX+w/2;}
else
{x2_1=c.x-c.width/2;x2_2=c.x+c.width/2;}
if(hitTestUnits({x1:x1_1,x2:x1_2},{x1:x2_1,x2:x2_2}))
{c.hp+=1;if(c.startHp<c.hp)c.hp=c.startHp;c.showHPBar();}}}}
function controlLightMagic(e)
{if(gameState!=STATE_GAME)return;var obj=e.target;if(obj.currentFrame==2)obj.destroy=true;}
function getEnemyGroup(x,fraction)
{var x1_1,x1_2,x2_1,x2_2,f1,f2;var group=[];f1=fraction==1?1:-1;x1_1=x-5;x1_2=x+5;for(var i=0;i<stage.objects.length;i++)
{c=stage.objects[i];f2=c.fraction==1?1:-1;if((c.spriteType==TYPE_UNIT||c.spriteType==TYPE_HOUSE)&&!c.lag>0&&f1!=f2&&c.state!=UNIT_STATE_DEAD)
{if(c.spriteType==TYPE_UNIT)
{var w=Units[c.type].stateMove.width;x2_1=c.uX-w/2;x2_2=c.uX+w/2;}
else
{x2_1=c.x-c.width/2;x2_2=c.x+c.width/2;}
if(hitTestUnits({x1:x1_1,x2:x1_2},{x1:x2_1,x2:x2_2}))
{group.push(c);}}}
return group;}
function buildHouse(e)
{if(gameState!=STATE_GAME)return;if(!preBildHouse)return;if(!iOSMode)mixer.play("build");var x=0;var oldCastle=null;var oldFood=0;var newFood=0;if(e)x=e.x+e.target.x;if(Builds[preBildHouse.type].type==BUILD_TYPE_CASTLE)
{oldCastle=findBuild(BUILD_TYPE_CASTLE,1);oldFood=Builds[oldCastle.houseType].food;newFood=Builds[preBildHouse.type].food;x=oldCastle.x;}
var b=newHouse(preBildHouse.type,x,true);preBildHouse.lock.visible=false;preBildHouse=null;stage.removeChild(preBuildPrompt);if(oldCastle)
{stage.removeChild(oldCastle);stage.removeChild(oldCastle.minimap);b.addFood=(newFood-oldFood);}
manageAvailBuilds();}
function newHouse(type,x,startBuild)
{var bt=Builds[type];mc=new Building(type,x);mc.zIndex=9999;stage.addChild(mc);var d=new Building(type,x);d.zIndex=9999;stage3.addChild(d);mc.view=d;d.view=mc;mc.eventsWhenInvisible=true;if(startBuild===true)
{mc.ready=0;mc.opacity=0.5;mc.fadeTo(1,fps*5,Easing.linear.easeIn,null,null);mc.onrender=showBuildReady;d.visible=false;}
else
{mc.visible=false;}
if(bt.fraction==1)min=new Sprite(bitmaps.mini_friend,6,10);else min=new Sprite(bitmaps.mini_enemy,6,10);min.ignoreViewport=true;mc.minimap=min;mc.zIndex=100;stage.addChild(min);var hpBar=new Sprite(bitmaps.hp_bar,22,10,6);hpBar.stop();hpBar.x=mc.x;hpBar.y=145;hpBar.visible=false;hpBar.zIndex=100;mc.hpBar=hpBar;stage.addChild(hpBar);mc.onclick=GUI.level.setStatusObj;if(bt.fraction==1&&bt.type==BUILD_TYPE_CASTLE&&!startBuild)
{GUI.level.setStatusObj({target:mc});}
return mc;}
function showBuildReady(e)
{var obj=e.target;var val=Math.round(((obj.opacity-0.5)/0.5)*100);obj.ready=val;if(val==100)
{if(obj.addFood)owner.food+=obj.addFood;manageAvailUnits();manageAvailBuilds();obj.onrender=null;obj.visible=false;obj.view.visible=true;doRebuildMiddle=true;}
else
{var w=obj.ready/2;stage.drawRectangle(obj.x,obj.y-30,54,7,"#FFF");stage.drawRectangle(obj.x-(25-w/2),obj.y-30,w,5,"#F00",true);}}
function findUnit(type,fraction)
{for(var i=0;i<stage.objects.length;i++)
{if(stage.objects[i].spriteType==TYPE_UNIT&&stage.objects[i].type==type&&stage.objects[i].fraction==fraction)return stage.objects[i];}
return false;}
function newUnit(u,uX)
{if(gameState!=STATE_GAME)return;var targetBuild,x;if(uX)x=uX;else
{if(Units[u].type==UNIT_TYPE_WORKER)targetBuild=findBuild(BUILD_TYPE_CASTLE,Units[u].fraction);else
{if(Units[u].fraction==1)targetBuild=findTemplateBuild(Units[u].needBuild,Units[u].fraction);else targetBuild=findBuild(BUILD_TYPE_CASTLE,2);}
if(!targetBuild)return;x=targetBuild.x;}
mc=new Unit(u,UNIT_STATE_MOVE,x);mc.speed=Units[u].speed;mc.onenterframe=controlUnit;mc.spriteType=TYPE_UNIT;mc.zIndex=10000;if(mc.fraction==1)
{if(levelBonus.type==0)mc.hp=Math.floor(mc.hp*(1+levelBonus.val/100));}
stage.addChild(mc);mc.onclick=GUI.level.setStatusObj;var min;if(Units[u].fraction==1)min=new Sprite(bitmaps.mini_friend,6,10);else min=new Sprite(bitmaps.mini_enemy,6,10);min.ignoreViewport=true;min.visible=false;min.zIndex=100;mc.minimap=min;stage.addChild(min);hpBar=new Sprite(bitmaps.hp_bar,22,10,6);hpBar.stop();hpBar.x=mc.uX;hpBar.y=145;hpBar.zIndex=100;hpBar.visible=false;mc.hpBar=hpBar;stage.addChild(hpBar);manageAvailUnits();manageAvailableMagic();return mc;}
function buildBackground()
{stage.drawScene(document.getElementById("screen_background"),true);}
function buildMiddleScene()
{if(stage3&&stage3.objects.length>0)stage3.drawScene(document.getElementById("screen3"));}
var totalGameScores=0;function saveGame()
{ExternalAPI.saveProgress(gameProgress.join(','));ExternalAPI.saveUserData(totalGameScores,UpgradesManager.skillPoints);}
function loadGame()
{var s=ExternalAPI.loadProgress();if(s)gameProgress=s.split(',');for(var i=0;i<15;i++)
{if(!gameProgress[i])gameProgress[i]=-1;gameProgress[i]*=1;}
ExternalAPI.getUserData(setUserData);}
function setUserData(scores,skills)
{totalGameScores=scores*1;UpgradesManager.skillPoints=skills*1;}
function getTotalScores()
{return totalGameScores;}
function hitTestUnits(obj1,obj2)
{var left1=Math.min(obj1.x1,obj1.x2);var right1=Math.max(obj1.x1,obj1.x2);var left2=Math.min(obj2.x1,obj2.x2);var right2=Math.max(obj2.x1,obj2.x2);var left=Math.max(left1,left2);var right=Math.min(right1,right2);return(right-left>0);}
function getEnemyTarget(unit,len)
{var f1=(unit.fraction==1?1:-1);var w1;if(unit.spriteType==TYPE_UNIT)
{w1=Units[unit.type].stateMove.width/2+len;x1_1=unit.uX;x1_2=unit.uX+w1*f1;}
else
{w1=unit.width/2+len;x1_1=unit.x;x1_2=unit.x+w1*f1;}
var min=1000000;var ret=null;var x1_1,x1_2,x2_1,x2_2;for(var i=0;i<stage.objects.length;i++)
{c=stage.objects[i];if((c.spriteType==TYPE_UNIT||c.spriteType==TYPE_HOUSE)&&!c.lag>0&&c!=unit&&c.state!=UNIT_STATE_DEAD&&c.hp>0)
{f2=(c.fraction==1?1:-1);var ok=true;if(unit.spriteType==TYPE_UNIT&&c.spriteType==TYPE_UNIT&&getUnitType(unit)==UNIT_TYPE_SOLDIER&&getUnitType(c)==UNIT_TYPE_FLYING)ok=false;if(f1!=f2&&ok)
{if(c.spriteType==TYPE_UNIT)
{x2_1=c.uX;x2_2=c.uX+Units[c.type].stateMove.width/2*f2;}
else
{x2_1=c.x;x2_2=c.x+c.width/2*f2;}
if(hitTestUnits({x1:x1_1,x2:x1_2},{x1:x2_1,x2:x2_2}))
{if(min>c.hp)
{ret=c;min=c.hp;}}}}}
return ret;}
function getFriendTarget(unit,len)
{var f1=(unit.fraction==1?1:-1);var w1=Units[unit.type].stateMove.width/2+len;var min=1000000;var ret=null;for(var i=0;i<stage.objects.length;i++)
{c=stage.objects[i];if(c.spriteType==TYPE_UNIT&&c!=unit&&c.state!=UNIT_STATE_DEAD&&c.hp>0)
{f2=(c.fraction==1?1:-1);if(f1==f2)
{if(Math.abs(unit.uX-c.uX)<len)
{if(min>c.hp&&c.hp<Units[c.type].hp&&c.state==UNIT_STATE_ATTACK)
{ret=c;min=c.hp;}}}}}
return ret;}
function getUnitTaget(unit)
{var target=null;if(unit.spriteType==TYPE_HOUSE)
{target=getEnemyTarget(unit,120);return target;}
var type=Units[unit.type].type;if(type==UNIT_TYPE_WORKER)return null;if(type==UNIT_TYPE_HEALER)target=getFriendTarget(unit,130);else
{var len=0;if(type==UNIT_TYPE_ARCHER)
{len=UpgradesManager.getUnitAttackLength(unit,80);}
if(type==UNIT_TYPE_ARCHER2)len=80;target=getEnemyTarget(unit,len);}
return target;}
function getUnitType(unit){return Units[unit.type].type;};function controlUnit(e)
{var u=e.target;if(u.lag>0)
{u.lag--;if(u.lag==0)u.visible=true;else u.visible=false;return;}
if(gameState!=STATE_GAME)
{u.setPos();return;}
var c,f1,f2,type,target;f1=(u.fraction==1?1:-1);if(u.locked)
{if(u.currentFrame==0)
{if(getUnitType(u)==UNIT_TYPE_FLYING)u.setState(UNIT_STATE_MOVE);else u.stop();}
if(!u.lockDelay)u.lockDelay=1;u.lockDelay++;var delay=fps*2;if(getUnitType(u)==UNIT_TYPE_ARCHER)delay=fps*4;if(getUnitType(u)==UNIT_TYPE_ARCHER2)delay=fps*5;if(u.lockDelay>=delay)
{u.lockDelay=false;u.locked=false;if(getUnitType(u)==UNIT_TYPE_WORKER)
{if(u.charged)u.charged=false;else u.charged=true;u.visible=true;}
u.play();}
else return;}
if(getUnitType(u)==UNIT_TYPE_WORKER&&u.state==UNIT_STATE_MOVE&&u.visible)
{var needBuild,targetBuild;if(u.charged)
{u.scaleX=1;targetBuild=findBuild(BUILD_TYPE_CASTLE,u.fraction,true);}
else
{u.scaleX=-1;targetBuild=findBuild(BUILD_TYPE_MINE,u.fraction);}
if(targetBuild)
{var diff=targetBuild.x-u.x;if(Math.abs(diff)<=16)
{u.locked=true;u.visible=false;if(u.charged)
{owner.money+=10;manageAvailUnits();manageAvailBuilds();manageAvailableMagic();}}
else u.uX+=u.speed*(diff>0?1:-1);}
u.setPos();return;}
if(u.state==UNIT_STATE_MOVE)
{target=getUnitTaget(u);if(target)u.setState(UNIT_STATE_ATTACK);else u.uX+=u.speed*f1;}
if(u.state==UNIT_STATE_ATTACK&&!u.locked)
{target=getUnitTaget(u);if(target)
{var aFrame=u.totalFrames-1;if(u.template.attFrame)aFrame=u.template.attFrame;if(u.currentFrame==aFrame)
{type=getUnitType(u);if(type==UNIT_TYPE_HEALER)
{healUnit(target,UpgradesManager.getUnitAttack(u));}
else if(type==UNIT_TYPE_ARCHER||type==UNIT_TYPE_ARCHER2)
{addArrow(u,target);}
else
{var group=[];if(UpgradesManager.getUnitAttackType(u)==1)group=getEnemyGroup(target.x,1);else group.push(target);for(var i=0;i<group.length;i++)
{damageUnit(group[i],UpgradesManager.getUnitAttack(u));}}
u.locked=true;}}
else
{u.setState(UNIT_STATE_MOVE);}}
u.setPos();if(u.x>1200||u.x<-10)
{if(u.fraction==1)owner.food+=u.food;else enemy.food+=u.food;manageAvailUnits();u.destroy=true;u.minimap.destroy=true;}}
function controlTower(e)
{if(gameState!=STATE_GAME)return;var u=e.target;if(u.locked)
{if(!u.lockDelay)u.lockDelay=1;u.lockDelay++;if(u.lockDelay>=36)
{u.lockDelay=false;u.locked=false;}
else return;}
if(u.state!=UNIT_STATE_DEAD)
{target=getUnitTaget(u);if(target)addArrow(u,target);}}
function damageUnit(unit,val,skipStars)
{var d=(val-UpgradesManager.getUnitDefense(unit));if(d<0)d=0;unit.hp-=d;if(unit.hp<=0)
{unit.setState(UNIT_STATE_DEAD);unit.locked=false;}
unit.showHPBar();if(skipStars)return;if(!iOSMode)mixer.play("strike",false,true);var x=unit.x;var width=unit.width;if(unit.spriteType==TYPE_UNIT)
{width=Units[unit.type].stateMove.width;}
if(unit.fraction==1)x+=width/2-5;else x-=width/2-5;mc=new Sprite(bitmaps.stars,28,24,6);mc.x=x;mc.y=130;mc.onenterframe=controlStarsEffect;mc.zIndex=10001;stage.addChild(mc);}
function controlStarsEffect(e)
{if(e.target.currentFrame==4)e.target.destroy=true;}
function healUnit(unit,val)
{unit.hp+=val;if(unit.hp>Units[unit.type].hp)unit.hp=Units[unit.type].hp;}
function addArrow(unit,target)
{unit.locked=true;var f=(unit.fraction==1?1:-1);if(unit.spriteType==TYPE_HOUSE)
{mc=new Sprite((f==1?bitmaps.arrow1:bitmaps.arrow2),16,16,1);mc.x=unit.x+16*f;mc.y=unit.y-16;mc.f={x:6*f,y:-1.5,g:0.3};}
else
{var type=getUnitType(unit);if(type==UNIT_TYPE_ARCHER)
{mc=new Sprite((f==1?bitmaps.arrow1:bitmaps.arrow2),16,16,1);var len=4;if(UpgradesManager.getUnitAttackLength(unit,len)>len)len=5;mc.x=unit.x+8*f;mc.y=unit.y-6;mc.f={x:len*f,y:-3.5,g:0.3};}
if(type==UNIT_TYPE_ARCHER2)
{mc=new Sprite((f==1?bitmaps.fireball1:bitmaps.fireball2),24,8,5);mc.x=unit.x+8*f;mc.y=unit.y-4;mc.f={x:5*f,y:-0.1,g:0.01};}}
mc.onenterframe=controlArrow;mc.target=target;mc.owner=unit;mc.zIndex=10001;stage.addChild(mc);}
function controlArrow(e)
{if(gameState!=STATE_GAME)return;var arr=e.target;arr.x+=arr.f.x;arr.y+=arr.f.y;arr.rotation=Math.atan(arr.f.y/arr.f.x);arr.f.y+=arr.f.g;var f1=(arr.owner.fraction==1?1:-1);var min=1000000;var target=null;var destroy=false;var x1_1,x1_2,x2_1,x2_2;x1_1=arr.x-16;x1_2=arr.x+16;if(arr.target&&arr.target.state!=UNIT_STATE_DEAD)
{for(var i=0;i<stage.objects.length;i++)
{c=stage.objects[i];if(c==arr.target)
{if(c.spriteType==TYPE_UNIT)
{var w=Units[c.type].stateMove.width;x2_1=c.uX-w/2;x2_2=c.uX+w/2;}
else
{x2_1=c.x-c.width/2;x2_2=c.x+c.width/2;}
if(hitTestUnits({x1:x1_1,x2:x1_2},{x1:x2_1,x2:x2_2}))
{target=c;break;}}}}
if(target)
{var group=[];if(UpgradesManager.getUnitAttackType(arr.owner)==1)group=getEnemyGroup(target.x,1);else group.push(target);for(var i=0;i<group.length;i++)
{damageUnit(group[i],UpgradesManager.getUnitAttack(arr.owner));}
destroy=true;}
if(arr.y>125)destroy=true;if(destroy)
{arr.destroy=true;arr.owner.gotoAndPlay(0);}}
function mergeStatUnits(units)
{var ret={};for(var i=0;i<units.length;i++)
{if(typeof ret[units[i].type]=="undefined")ret[units[i].type]={name:units[i].name,name_plural:units[i].name_plural,score:units[i].score,cnt:0};ret[units[i].type].cnt++;}
return ret;}
function getStatData()
{var score=0;var killed=mergeStatUnits(killUnits);var loosed=mergeStatUnits(looseUnits);for(var key in killed)score+=killed[key].score*killed[key].cnt;for(var key in loosed)score-=loosed[key].score*loosed[key].cnt;return{score:score,killed:killed,loosed:loosed};}
function showVictory()
{if(!iOSMode)
{mixer.stop(0);mixer.play("victory");}
gameState=STATE_WIN;hideHint();GUI.level.clearStatusObj();mc=new Sprite(bitmaps.win_box,340,230,1);mc.x=240;mc.y=140;mc.ignoreViewport=true;mc.onclick=function(){return false;};stage.addChild(mc);mc=new TextSprite(null,100,26);mc.x=240;mc.y=62;mc.ignoreViewport=true;mc.style.size=18;mc.style.font="impact";mc.align=TEXT_ALIGN_CENTER;if(curLevel>=Levels.length-1)
{mc.text=lang.clear;mc.style.color="#00d700";}
else
{mc.text=lang.victory;mc.style.color="#ffff13";}
stage.addChild(mc);mc=new TextSprite(null,200,20);mc.x=190;mc.y=88;mc.ignoreViewport=true;mc.style.bold=true;mc.text=lang.rewards;stage.addChild(mc);mc=new TextSprite(null,200,20);mc.x=190;mc.y=166;mc.ignoreViewport=true;mc.style.bold=true;mc.text=lang.stat_data;stage.addChild(mc);mc=new TextButton(lang.cont,80,26,1);mc.x=240;mc.y=255;mc.ignoreViewport=true;mc.onmouseup=function(){playBGMusic();showTech();};stage.addChild(mc);var stat=getStatData();if(stat.score<100)stat.score=100;if(gameProgress[curLevel]<=0)
{var descr=UpgradesManager.applyLevel(curLevel);UpgradesManager.save();var x=240-(descr.length-1)/2*80;for(var i=0;i<descr.length;i++)
{var size=20;if(descr[i].scale!=1)size=30;mc=new Sprite(bitmaps[descr[i].icon],size,size,1);mc.x=x;mc.y=115;mc.ignoreViewport=true;mc.scaleX=mc.scaleY=descr[i].scale;stage.addChild(mc);addString(descr[i].name,x,140,10,"#FFF","#000",true,true,true);x+=80;}}
else
{stat.score=0;addString(lang.no_rewards,240,130,14,"#FFF","#000",true,true,true);}
totalGameScores+=stat.score;printStatData(stat,185);if(stat.score>gameProgress[curLevel])gameProgress[curLevel]=stat.score;saveGame();ExternalAPI.log.levelCompleted(curLevel);}
function printStatData(stat,y,noScore)
{addString(lang.kills+":",100,y,10,"#0F0","#000",true,false,true);var s=[];for(var key in stat.killed)s.push(stat.killed[key].name_plural+": "+stat.killed[key].cnt);addString(s.join(", "),120,y+12,9,"#FFF","#000",true,false,true);addString(lang.casualties+":",100,y+25,10,"#F00","#000",true,false,true);var s=[];for(var key in stat.loosed)s.push(stat.loosed[key].name_plural+": "+stat.loosed[key].cnt);addString(s.join(", "),120,y+37,9,"#FFF","#000",true,false,true);if(noScore)return;addString(lang.scores+": "+stat.score,100,y+60,10,"#FF0","#000",true,false,true);}
function showFail()
{if(!iOSMode)
{mixer.stop(0);mixer.play("loose");}
hideHint();gameState=STATE_LOOSE;GUI.level.clearStatusObj();mc=new Sprite(bitmaps.fail_box,340,230,1);mc.x=240;mc.y=140;mc.ignoreViewport=true;mc.onclick=function(){return false;};stage.addChild(mc);mc=new TextSprite(null,100,26);mc.x=240;mc.y=62;mc.ignoreViewport=true;mc.style.size=18;mc.style.font="impact";mc.align=TEXT_ALIGN_CENTER;mc.text=lang.failure;mc.style.color="#fe1111";stage.addChild(mc);mc=new TextSprite(null,200,20);mc.x=190;mc.y=107;mc.ignoreViewport=true;mc.style.bold=true;mc.text=lang.stat_data;stage.addChild(mc);mc=new TextButton(lang.cont);mc.x=240;mc.y=255;mc.ignoreViewport=true;mc.onmouseup=function(){playBGMusic();showTech();};stage.addChild(mc);var stat=getStatData();printStatData(stat,130,true);ExternalAPI.log.levelFailed(curLevel);}
var stageStrings=[];function addString(text,x,y,size,color,border,bold,alignCenter,ignoreViewport)
{if(typeof size=="undefined")size=10;if(typeof color=="undefined")color="#FFF";if(typeof border=="undefined")border="#000";if(typeof bold=="undefined")bold=false;if(typeof alignCenter=="undefined")alignCenter=false;if(typeof ignoreViewport=="undefined")ignoreViewport=false;var s={text:text+"",x:x,y:y,size:size,color:color,border:border,alignCenter:alignCenter,ignoreViewport:ignoreViewport};stageStrings.push(s);return s;}
function deleteString(s)
{stageStrings=Utils.removeFromArray(stageStrings,s);}
function showAgainPrompt()
{hideHint();if(gameState!=STATE_GAME)return;gameState=STATE_DIALOG;dialogItems=[];mc=new Sprite(null,480,320,1);mc.x=240;mc.y=160;mc.ignoreViewport=true;mc.onclick=function(){return false;};mc.onmousedown=function(){return false;};mc.onmouseup=function(){return false;};stage.addChild(mc);dialogItems.push(mc);mc=new TextSprite(bitmaps.prompt,255,70,1);mc.x=240;mc.y=100;mc.ignoreViewport=true;mc.style.bold=true;mc.padding.bottom=12;mc.align=TEXT_ALIGN_CENTER;mc.valign=TEXT_VALIGN_MIDDLE;mc.text=lang.reset_level_prompt;stage.addChild(mc);dialogItems.push(mc);mc=new TextButton(lang.yes);mc.x=180;mc.y=135;mc.ignoreViewport=true;mc.onmouseup=function()
{playBGMusic();showTech();ExternalAPI.log.levelRestarted(curLevel);};stage.addChild(mc);dialogItems.push(mc);mc=new TextButton(lang.no);mc.x=300;mc.y=135;mc.ignoreViewport=true;mc.onmouseup=closeAgainPrompt;stage.addChild(mc);dialogItems.push(mc);}
function closeAgainPrompt()
{for(var i=0;i<dialogItems.length;i++)
{dialogItems[i].destroy=true;}
gameState=STATE_GAME;}
function showNewGamePrompt()
{if(gameProgress[0]<0)
{startNewGame();return;}
gameState=STATE_DIALOG2;dialogItems=[];mc=new Sprite(null,480,320,1);mc.x=240;mc.y=160;mc.onclick=function(){return false;};mc.onmousedown=function(){return false;};mc.onmouseup=function(){return false;};stage.addChild(mc);dialogItems.push(mc);mc=new TextSprite(bitmaps.prompt,255,70,1);mc.x=240;mc.y=100;mc.ignoreViewport=true;mc.style.bold=true;mc.padding.bottom=12;mc.align=TEXT_ALIGN_CENTER;mc.valign=TEXT_VALIGN_MIDDLE;mc.text=lang.new_game_prompt;stage.addChild(mc);dialogItems.push(mc);mc=new TextButton(lang.yes);mc.x=180;mc.y=135;mc.ignoreViewport=true;mc.onmouseup=startNewGame;stage.addChild(mc);dialogItems.push(mc);mc=new TextButton(lang.no);mc.x=300;mc.y=135;mc.ignoreViewport=true;mc.onmouseup=closeNewGamePrompt;stage.addChild(mc);dialogItems.push(mc);}
function closeNewGamePrompt()
{for(var i=0;i<dialogItems.length;i++)
{dialogItems[i].destroy=true;}
gameState=STATE_MENU;}
function startNewGame()
{gameProgress=[];saveGame();loadGame();UpgradesManager.clear();UpgradesManager.save();showSelectLevel();}
function preTick()
{if(doRebuildMiddle)
{buildMiddleScene();doRebuildMiddle=false;}
if(gameState==STATE_MENU||gameState==STATE_DIALOG2)GUI.startMenu.rotateWorld();if(gameState==STATE_GAME||gameState==STATE_DIALOG)
{GUI.level.setScrollPos();GUI.level.manageSprites();if(!findBuild(BUILD_TYPE_CASTLE,1,true))
{showFail();return;}
if(!findBuild(BUILD_TYPE_CASTLE,2,true))
{showVictory();return;}}}
function postTick()
{if(doRebuildBack)
{buildBackground();doRebuildBack=false;}
if(gameState==STATE_GAME)
{ai.cnt++;if(ai.cnt>=fps*ai.lag)
{if(ai.lag==10)ai.lag=6;ai.cnt=0;processAI();}}
var s,tmp,x,y;for(var i=0;i<stageStrings.length;i++)
{s=stageStrings[i];stage.setTextStyle("sans-serif",s.size,s.bold,s.color,s.border);tmp=s.text.split("\n");x=s.x;y=s.y;for(var n=0;n<tmp.length;n++)
{stage.drawText(tmp[n],x,y,1,s.ignoreViewport,s.alignCenter);y+=s.size+2;}}
if(gameState==STATE_GAME||gameState==STATE_DIALOG)
{var x=stage.viewport.x*0.15;stage.drawRectangle(x+174,230,94,16,"#FFF",false,1,true);}}
var ai={}
function clearAI()
{ai={cnt:0,units:0,maxUnit:0,lag:10};}
function processAI()
{if(gameState!=STATE_GAME)return;var level=Levels[curLevel];if(level.availEnemyUnits.length==0)return;ai.units++;if(ai.units>=10)
{ai.units=0;ai.maxUnit++;}
if(ai.maxUnit>=level.availEnemyUnits.length)ai.maxUnit=level.availEnemyUnits.length-1;for(var i=0;i<=ai.maxUnit;i++)
{var u=level.availEnemyUnits[i];var nu=newUnit(u);if(nu)nu.lag=i*fps;}};var TYPE_UNIT=1;var TYPE_HOUSE=2;var TYPE_DECOR=3;var TYPE_ARROW1=4;function getAssets()
{var data=[];var path="images/"+Utils.globalScale+"/";data.push({name:"blank",src:"images/blank.gif"});data.push({name:"stars",src:path+"stars.png"});data.push({name:"start_back",src:path+"start_back.jpg"});data.push({name:"start_knight",src:path+"start_knight.png"});data.push({name:"start_archer",src:path+"start_archer.png"});data.push({name:"start_sword",src:path+"start_sword.png"});data.push({name:"start_menu",src:path+"start_menu.png"});data.push({name:"start_icon",src:path+"start_icon.png"});data.push({name:"start_house1",src:path+"start_house1.png"});data.push({name:"start_house2",src:path+"start_house2.png"});data.push({name:"start_house3",src:path+"start_house3.png"});data.push({name:"start_house4",src:path+"start_house4.png"});data.push({name:"start_house5",src:path+"start_house5.png"});data.push({name:"start_house6",src:path+"start_house6.png"});data.push({name:"start_house7",src:path+"start_house7.png"});data.push({name:"button",src:path+"button.png"});data.push({name:"button_start",src:path+"button_start.png"});data.push({name:"button_new_game",src:path+"button_new_game.png"});data.push({name:"button_about",src:path+"button_about.png"});data.push({name:"button_next",src:path+"button_next.png"});data.push({name:"button_skip",src:path+"button_skip.png"});data.push({name:"button_train",src:path+"button_train.png"});data.push({name:"button_forgot",src:path+"button_forgot.png"});data.push({name:"preload_back",src:path+"preload_back.jpg"});data.push({name:"about_back",src:path+"about_back.jpg"});data.push({name:"wheel1",src:path+"wheel1.png"});data.push({name:"wheel2",src:path+"wheel2.png"});data.push({name:"wheel3",src:path+"wheel3.png"});data.push({name:"select_level_back",src:path+"select_level_back.jpg"});data.push({name:"button_tech",src:path+"button_tech.png"});data.push({name:"button_back",src:path+"button_back.png"});data.push({name:"level_complete",src:path+"level_complete.png"});data.push({name:"level_uncomplete",src:path+"level_uncomplete.png"});data.push({name:"level_current",src:path+"level_current.png"});data.push({name:"tech_back",src:path+"tech_back.jpg"});data.push({name:"button_tech1",src:path+"button_tech1.png"});data.push({name:"button_tech2",src:path+"button_tech2.png"});data.push({name:"button_tech3",src:path+"button_tech3.png"});data.push({name:"button_tech4",src:path+"button_tech4.png"});data.push({name:"tech_menu",src:path+"tech_menu.png"});data.push({name:"background1",src:path+"backgrounds/1.jpg"});data.push({name:"background2",src:path+"backgrounds/2.jpg"});data.push({name:"background3",src:path+"backgrounds/3.jpg"});data.push({name:"background4",src:path+"backgrounds/4.jpg"});data.push({name:"background5",src:path+"backgrounds/5.jpg"});data.push({name:"background6",src:path+"backgrounds/6.jpg"});data.push({name:"groundtop1",src:path+"grounds/top1.png"});data.push({name:"groundbg1",src:path+"grounds/bg1.png"});data.push({name:"groundtop2",src:path+"grounds/top2.png"});data.push({name:"groundbg2",src:path+"grounds/bg2.png"});data.push({name:"groundtop3",src:path+"grounds/top3.png"});data.push({name:"groundbg3",src:path+"grounds/bg3.png"});data.push({name:"groundtop4",src:path+"grounds/top4.png"});data.push({name:"groundbg4",src:path+"grounds/bg4.png"});data.push({name:"groundtop5",src:path+"grounds/top5.png"});data.push({name:"groundbg5",src:path+"grounds/bg5.png"});data.push({name:"groundtop6",src:path+"grounds/top6.png"});data.push({name:"groundbg6",src:path+"grounds/bg6.png"});data.push({name:"inter_button_again",src:path+"inerface/button_again.png"});data.push({name:"inter_icons",src:path+"inerface/icons.png"});data.push({name:"inter_menu",src:path+"inerface/menu.png"});data.push({name:"inter_mini_enemy",src:path+"inerface/mini_enemy.png"});data.push({name:"inter_mini_friend",src:path+"inerface/mini_friend.png"});data.push({name:"common_tree1_1",src:path+"common/tree1_1.png"});data.push({name:"common_tree1_2",src:path+"common/tree1_2.png"});data.push({name:"common_tree2_1",src:path+"common/tree2_1.png"});data.push({name:"common_tree2_2",src:path+"common/tree2_2.png"});data.push({name:"common_tree3_1",src:path+"common/tree3_1.png"});data.push({name:"common_tree3_2",src:path+"common/tree3_2.png"});data.push({name:"common_tree4_1",src:path+"common/tree4_1.png"});data.push({name:"common_tree4_2",src:path+"common/tree4_2.png"});data.push({name:"common_tree5_1",src:path+"common/tree5_1.png"});data.push({name:"common_tree5_2",src:path+"common/tree5_2.png"});data.push({name:"common_tree6_1",src:path+"common/tree6_1.png"});data.push({name:"common_tree6_2",src:path+"common/tree6_2.png"});data.push({name:"arrow1",src:path+"common/arrow1.png"});data.push({name:"arrow2",src:path+"common/arrow2.png"});data.push({name:"fireball1",src:path+"common/fireball1.png"});data.push({name:"fireball2",src:path+"common/fireball2.png"});data.push({name:"human_worker",src:path+"human/worker.png"});data.push({name:"human_icon_worker",src:path+"human/icon_worker.png"});data.push({name:"human_soldier",src:path+"human/soldier.png"});data.push({name:"human_soldier_att",src:path+"human/soldier_att.png"});data.push({name:"human_soldier_dead",src:path+"human/soldier_dead.png"});data.push({name:"human_icon_soldier",src:path+"human/icon_soldier.png"});data.push({name:"human_archer",src:path+"human/archer.png"});data.push({name:"human_archer_att",src:path+"human/archer_att.png"});data.push({name:"human_archer_dead",src:path+"human/archer_dead.png"});data.push({name:"human_icon_archer",src:path+"human/icon_archer.png"});data.push({name:"human_magic",src:path+"human/magic.png"});data.push({name:"human_magic_att",src:path+"human/magic_att.png"});data.push({name:"human_magic_dead",src:path+"human/magic_dead.png"});data.push({name:"human_icon_magic",src:path+"human/icon_magic.png"});data.push({name:"human_priest",src:path+"human/priest.png"});data.push({name:"human_priest_att",src:path+"human/priest_att.png"});data.push({name:"human_priest_dead",src:path+"human/priest_dead.png"});data.push({name:"human_icon_priest",src:path+"human/icon_priest.png"});data.push({name:"human_knight",src:path+"human/knight.png"});data.push({name:"human_knight_att",src:path+"human/knight_att.png"});data.push({name:"human_knight_dead",src:path+"human/knight_dead.png"});data.push({name:"human_icon_knight",src:path+"human/icon_knight.png"});data.push({name:"human_gryphon",src:path+"human/gryphon.png"});data.push({name:"human_gryphon_att",src:path+"human/gryphon_att.png"});data.push({name:"human_gryphon_dead",src:path+"human/gryphon_dead.png"});data.push({name:"human_icon_gryphon",src:path+"human/icon_gryphon.png"});data.push({name:"human_saint",src:path+"human/saint.png"});data.push({name:"human_saint_att",src:path+"human/saint_att.png"});data.push({name:"human_saint_dead",src:path+"human/saint_dead.png"});data.push({name:"human_icon_saint",src:path+"human/icon_saint.png"});data.push({name:"elf_queen",src:path+"human/elf_queen.png"});data.push({name:"elf_queen_att",src:path+"human/elf_queen_att.png"});data.push({name:"elf_queen_dead",src:path+"human/elf_queen_dead.png"});data.push({name:"human_icon_elf_queen",src:path+"human/icon_elf_queen.png"});data.push({name:"bandit",src:path+"bandit/bandit.png"});data.push({name:"bandit_att",src:path+"bandit/bandit_att.png"});data.push({name:"bandit_dead",src:path+"bandit/bandit_dead.png"});data.push({name:"ogre",src:path+"bandit/ogre.png"});data.push({name:"ogre_att",src:path+"bandit/ogre_att.png"});data.push({name:"ogre_dead",src:path+"bandit/ogre_dead.png"});data.push({name:"icon_ogre",src:path+"bandit/icon_ogre.png"});data.push({name:"dragon",src:path+"dragon.png"});data.push({name:"icon_dragon",src:path+"icon_dragon.png"});data.push({name:"orc_soldier",src:path+"orc/orc_soldier.png"});data.push({name:"orc_soldier_att",src:path+"orc/orc_soldier_att.png"});data.push({name:"orc_soldier_dead",src:path+"orc/orc_soldier_dead.png"});data.push({name:"orc_strong",src:path+"orc/orc_strong.png"});data.push({name:"orc_strong_att",src:path+"orc/orc_strong_att.png"});data.push({name:"orc_strong_dead",src:path+"orc/orc_strong_dead.png"});data.push({name:"orc_shield",src:path+"orc/orc_shield.png"});data.push({name:"orc_shield_att",src:path+"orc/orc_shield_att.png"});data.push({name:"orc_shield_dead",src:path+"orc/orc_shield_dead.png"});data.push({name:"orc_beast",src:path+"orc/orc_beast.png"});data.push({name:"orc_beast_att",src:path+"orc/orc_beast_att.png"});data.push({name:"orc_beast_dead",src:path+"orc/orc_beast_dead.png"});data.push({name:"orc_dragon",src:path+"orc/orc_dragon.png"});data.push({name:"orc_dragon_att",src:path+"orc/orc_dragon_att.png"});data.push({name:"orc_dragon_dead",src:path+"orc/orc_dragon_dead.png"});data.push({name:"mini_friend",src:path+"inerface/mini_friend.png"});data.push({name:"mini_enemy",src:path+"inerface/mini_enemy.png"});data.push({name:"human2_soldier",src:path+"human2/soldier.png"});data.push({name:"human2_soldier_att",src:path+"human2/soldier_att.png"});data.push({name:"human2_soldier_dead",src:path+"human2/soldier_dead.png"});data.push({name:"human2_archer",src:path+"human2/archer.png"});data.push({name:"human2_archer_att",src:path+"human2/archer_att.png"});data.push({name:"human2_archer_dead",src:path+"human2/archer_dead.png"});data.push({name:"human2_magic",src:path+"human2/magic.png"});data.push({name:"human2_magic_att",src:path+"human2/magic_att.png"});data.push({name:"human2_magic_dead",src:path+"human2/magic_dead.png"});data.push({name:"human2_knight",src:path+"human2/knight.png"});data.push({name:"human2_knight_att",src:path+"human2/knight_att.png"});data.push({name:"human2_knight_dead",src:path+"human2/knight_dead.png"});data.push({name:"human_castle1",src:path+"human/castle1.png"});data.push({name:"human_castle2",src:path+"human/castle2.png"});data.push({name:"human_castle3",src:path+"human/castle3.png"});data.push({name:"human_mine",src:path+"human/mine.png"});data.push({name:"human_hut1",src:path+"human/hut1.png"});data.push({name:"human_hut2",src:path+"human/hut2.png"});data.push({name:"human_well",src:path+"human/well.png"});data.push({name:"human_barrack",src:path+"human/barrack.png"});data.push({name:"human_monastery",src:path+"human/monastery.png"});data.push({name:"human_smithy",src:path+"human/smithy.png"});data.push({name:"human_tavern",src:path+"human/tavern.png"});data.push({name:"human_tower",src:path+"human/tower.png"});data.push({name:"human_icon_castle2",src:path+"human/icon_castle2.png"});data.push({name:"human_icon_castle3",src:path+"human/icon_castle3.png"});data.push({name:"human_icon_barrack",src:path+"human/icon_barrack.png"});data.push({name:"human_icon_monastery",src:path+"human/icon_monastery.png"});data.push({name:"human_icon_smithy",src:path+"human/icon_smithy.png"});data.push({name:"human_icon_tavern",src:path+"human/icon_tavern.png"});data.push({name:"bandit_castle",src:path+"bandit/castle.png"});data.push({name:"bandit_hut",src:path+"bandit/hut.png"});data.push({name:"bandit_tower",src:path+"bandit/tower.png"});data.push({name:"orc_castle1",src:path+"orc/castle1.png"});data.push({name:"orc_castle2",src:path+"orc/castle2.png"});data.push({name:"orc_castle3",src:path+"orc/castle3.png"});data.push({name:"orc_castle4",src:path+"orc/castle4.png"});data.push({name:"orc_butcher",src:path+"orc/butcher.png"});data.push({name:"orc_cave",src:path+"orc/cave.png"});data.push({name:"orc_sawmill",src:path+"orc/sawmill.png"});data.push({name:"human2_castle1",src:path+"human2/castle1.png"});data.push({name:"human2_castle2",src:path+"human2/castle2.png"});data.push({name:"human2_castle3",src:path+"human2/castle3.png"});data.push({name:"human2_castle4",src:path+"human2/castle4.png"});data.push({name:"human2_tower1",src:path+"human2/tower1.png"});data.push({name:"human2_tower2",src:path+"human2/tower2.png"});data.push({name:"font1",src:path+"font1.png"});data.push({name:"text1",src:path+"text1.png"});data.push({name:"text2",src:path+"text2.png"});data.push({name:"button_continue",src:path+"button_continue.png"});data.push({name:"win_box",src:path+"win_box.png"});data.push({name:"win_box2",src:path+"win_box2.png"});data.push({name:"fail_box",src:path+"fail_box.png"});data.push({name:"magic_heal",src:path+"magic_heal.png"});data.push({name:"magic_light",src:path+"magic_light.png"});data.push({name:"dialog_box",src:path+"dialog_box.png"});data.push({name:"helper1",src:path+"helper1.png"});data.push({name:"helper2",src:path+"helper2.png"});data.push({name:"helper3",src:path+"helper3.png"});data.push({name:"helper4",src:path+"helper4.png"});data.push({name:"helper5",src:path+"helper5.png"});data.push({name:"helper6",src:path+"helper6.png"});data.push({name:"helper7",src:path+"helper7.png"});data.push({name:"icon_magic_heal",src:path+"icon_magic_heal.png"});data.push({name:"icon_magic_light",src:path+"icon_magic_light.png"});data.push({name:"icon_magic_queen",src:path+"icon_magic_queen.png"});data.push({name:"icon_learn",src:path+"icon_learn.png"});data.push({name:"icon_skillpoint",src:path+"icon_skillpoint.png"});data.push({name:"icon_magic_heal2",src:path+"icon_magic_heal2.png"});data.push({name:"icon_magic_light2",src:path+"icon_magic_light2.png"});data.push({name:"icon_magic_queen2",src:path+"icon_magic_queen2.png"});data.push({name:"icon_skill_soldier0",src:path+"icon_skill_soldier0.png"});data.push({name:"icon_skill_soldier1",src:path+"icon_skill_soldier1.png"});data.push({name:"icon_skill_soldier2",src:path+"icon_skill_soldier2.png"});data.push({name:"icon_skill_archer0",src:path+"icon_skill_archer0.png"});data.push({name:"icon_skill_archer1",src:path+"icon_skill_archer1.png"});data.push({name:"icon_skill_archer2",src:path+"icon_skill_archer2.png"});data.push({name:"icon_skill_magic0",src:path+"icon_skill_magic0.png"});data.push({name:"icon_skill_magic1",src:path+"icon_skill_magic1.png"});data.push({name:"icon_skill_priest0",src:path+"icon_skill_priest0.png"});data.push({name:"icon_skill_saint0",src:path+"icon_skill_saint0.png"});data.push({name:"icon_skill_saint1",src:path+"icon_skill_saint1.png"});data.push({name:"icon_skill_gryphon0",src:path+"icon_skill_gryphon0.png"});data.push({name:"icon_skill_gryphon1",src:path+"icon_skill_gryphon1.png"});data.push({name:"icon_skill_knight0",src:path+"icon_skill_knight0.png"});data.push({name:"icon_skill_knight1",src:path+"icon_skill_knight1.png"});data.push({name:"prompt",src:path+"prompt.png"});data.push({name:"button_yes",src:path+"button_yes.png"});data.push({name:"button_cancel",src:path+"button_cancel.png"});data.push({name:"hint",src:path+"hint.png"});data.push({name:"hp_bar",src:path+"hp_bar.png"});data.push({name:"buy_box",src:path+"buy_box.png"});data.push({name:"buy_item_back1",src:path+"buy_item_back1.png"});data.push({name:"buy_item_back2",src:path+"buy_item_back2.png"});data.push({name:"buy_item_back3",src:path+"buy_item_back3.png"});data.push({name:"buy_item_back4",src:path+"buy_item_back4.png"});data.push({name:"radiobutton",src:path+"radiobutton.png"});return data;}
var GUI={showVersion:function()
{mc=new TextSprite(null,100,20);mc.text="v: "+ini.version;mc.style.size=8;mc.align=TEXT_ALIGN_CENTER;mc.x=410;mc.y=318;stage.addChild(mc);},rotateSprite:function(e)
{e.target.rotation+=e.target.rotateSpeed;if(e.target.rotation>Math.PI*2||e.target.rotation<-Math.PI*2)e.target.rotation=0;},addMenusWheels:function()
{mc=new Sprite(bitmaps.wheel1,26,26,1);mc.x=367;mc.y=16;mc.rotateSpeed=0.05;mc.onenterframe=GUI.rotateSprite;stage.addChild(mc);mc=new Sprite(bitmaps.wheel2,16,16,1);mc.x=444;mc.y=16;mc.rotateSpeed=-0.1;mc.onenterframe=GUI.rotateSprite;stage.addChild(mc);mc=new Sprite(bitmaps.wheel3,12,12,1);mc.x=450;mc.y=30;mc.rotateSpeed=0.2;mc.onenterframe=GUI.rotateSprite;stage.addChild(mc);mc=new Sprite(bitmaps.wheel1,26,26,1);mc.x=365;mc.y=300;mc.rotateSpeed=-0.07;mc.onenterframe=GUI.rotateSprite;stage.addChild(mc);mc=new Sprite(bitmaps.wheel2,16,16,1);mc.x=450;mc.y=300;mc.rotateSpeed=0.15;mc.onenterframe=GUI.rotateSprite;stage.addChild(mc);},preload:{create:function()
{mc=new Sprite(bitmaps.preload_back,480,320,1);mc.x=240;mc.y=160;mc.static=true;stage.addChild(mc);mc=new TextButton(lang.play);mc.x=240;mc.y=273;mc.onmouseup=function(){playBGMusic();showMenu();};stage.addChild(mc);},},startMenu:{start_houses:[],start_world_angle:0,create:function()
{mc=new Sprite(bitmaps.start_back,480,320,1);mc.x=240;mc.y=160;mc.static=true;stage.addChild(mc);GUI.startMenu.start_houses=[];GUI.startMenu.start_world_angle=0;mc=new Sprite(bitmaps.start_house3,40,40,1);stage.addChild(mc);GUI.startMenu.start_houses.push({angle:Utils.grad2radian(30),sprite:mc});mc=new Sprite(bitmaps.start_house4,50,60,1);stage.addChild(mc);GUI.startMenu.start_houses.push({angle:Utils.grad2radian(60),sprite:mc});mc=new Sprite(bitmaps.start_house5,50,40,1);stage.addChild(mc);GUI.startMenu.start_houses.push({angle:Utils.grad2radian(135),sprite:mc});mc=new Sprite(bitmaps.start_house6,90,70,1);stage.addChild(mc);GUI.startMenu.start_houses.push({angle:Utils.grad2radian(190),sprite:mc});mc=new Sprite(bitmaps.start_house7,70,60,1);stage.addChild(mc);GUI.startMenu.start_houses.push({angle:Utils.grad2radian(225),sprite:mc});mc=new Sprite(bitmaps.start_house1,100,120,1);stage.addChild(mc);GUI.startMenu.start_houses.push({angle:Utils.grad2radian(250),sprite:mc});mc=new Sprite(bitmaps.start_house2,50,80,1);stage.addChild(mc);GUI.startMenu.start_houses.push({angle:Utils.grad2radian(280),sprite:mc});mc=new Sprite(bitmaps.start_house2,50,80,1);stage.addChild(mc);GUI.startMenu.start_houses.push({angle:Utils.grad2radian(320),sprite:mc});mc=new Sprite(bitmaps.start_house3,40,40,1);stage.addChild(mc);GUI.startMenu.start_houses.push({angle:Utils.grad2radian(340),sprite:mc});mc=new Sprite(bitmaps.start_knight,50,36,10);mc.x=115;mc.y=147;stage.addChild(mc);mc=new Sprite(bitmaps.start_sword,26,26,8);mc.x=156;mc.y=153;stage.addChild(mc);mc=new Sprite(bitmaps.start_archer,20,26,7);mc.x=174;mc.y=157;stage.addChild(mc);mc=new Sprite(bitmaps.start_icon,84,82,1);mc.x=170;mc.y=80;stage.addChild(mc);GUI.addMenusWheels();mc=new Sprite(bitmaps.start_menu,136,320,1);mc.x=413;mc.y=160;stage.addChild(mc);mc=new TextButton(lang.start);mc.x=411;mc.y=113;mc.onmouseup=showSelectLevel;stage.addChild(mc);mc=new TextButton(lang.new_game);mc.x=411;mc.y=163;mc.onmouseup=showNewGamePrompt;stage.addChild(mc);mc=new TextButton(lang.about);mc.x=411;mc.y=199;mc.onmouseup=showAbout;stage.addChild(mc);GUI.showVersion();},rotateWorld:function()
{GUI.startMenu.start_world_angle+=0.01;if(GUI.startMenu.start_world_angle>=Math.PI*2)GUI.startMenu.start_world_angle=0;var house,p,angle;for(var i=0;i<GUI.startMenu.start_houses.length;i++)
{house=GUI.startMenu.start_houses[i];angle=house.angle+GUI.startMenu.start_world_angle;p=new Vector(0,-(216+house.sprite.height/2));p.rotate(-angle);house.sprite.x=p.x+135;house.sprite.y=p.y+390;house.sprite.rotation=angle;if(house.sprite.x<-60||house.sprite.y>380)house.sprite.visible=false;else house.sprite.visible=true;}}},about:{create:function()
{mc=new Sprite(bitmaps.about_back,480,320,1);mc.x=240;mc.y=160;mc.static=true;stage.addChild(mc);mc=new TextSprite(null,200,20,1);mc.x=231;mc.y=246;mc.style.bold=true;mc.text=ini.support_email;mc.onclick=function(){window.location="mailto:"+ini.support_email;}
stage.addChild(mc);mc=new TextButton(lang.back);mc.x=240;mc.y=273;mc.onmouseup=showMenu;stage.addChild(mc);}},selectLevel:{create:function()
{mc=new Sprite(bitmaps.select_level_back,480,320,1);mc.x=240;mc.y=160;mc.static=true;stage.addChild(mc);GUI.addMenusWheels();mc=new Sprite(bitmaps.start_menu,136,320,1);mc.x=413;mc.y=160;stage.addChild(mc);mc=new TextButton(lang.start);mc.x=411;mc.y=113;mc.onmouseup=startLastLevel;stage.addChild(mc);mc=new TextButton(lang.tech);mc.x=411;mc.y=163;mc.onmouseup=showTech;stage.addChild(mc);mc=new TextButton(lang.back);mc.x=411;mc.y=199;mc.onmouseup=showMenu;stage.addChild(mc);var pos=[];pos.push({x:240,y:470});pos.push({x:300,y:417});pos.push({x:260,y:360});pos.push({x:185,y:394});pos.push({x:122,y:422});pos.push({x:60,y:388});pos.push({x:70,y:315});pos.push({x:55,y:230});pos.push({x:150,y:188});pos.push({x:245,y:200});pos.push({x:140,y:255});pos.push({x:290,y:260});pos.push({x:385,y:225});pos.push({x:470,y:230});pos.push({x:540,y:290});var lastLevel=-1;for(var i=0;i<15;i++)
{if(gameProgress[i]>=0)lastLevel=i;}
lastLevel++;if(ini.cheatMode)lastLevel=15;var bmp;for(var i=0;i<15;i++)
{if(i==lastLevel)bmp=bitmaps.level_current;if(i<lastLevel)bmp=bitmaps.level_complete;if(i>lastLevel||i>Levels.length)bmp=bitmaps.level_uncomplete;mc=new Sprite(bmp,30,30,1);mc.x=Math.round(pos[i].x/2);mc.y=Math.round(pos[i].y/2);mc.levelID=i;if(i<=lastLevel)mc.onclick=prepareLevel;stage.addChild(mc);}
GUI.showVersion();}},tech:{skillPointsText:null,scoresText:null,showSkillPoints:function()
{GUI.tech.skillPointsText.text=lang.skill_points+": "+UpgradesManager.skillPoints;},showScores:function()
{GUI.tech.scoresText.text=lang.scores+": "+getTotalScores();},create:function()
{mc=new Sprite(bitmaps.tech_back,480,320,1);mc.x=240;mc.y=160;mc.static=true;stage.addChild(mc);GUI.addMenusWheels();mc=new Sprite(bitmaps.tech_menu,136,320,1);mc.x=413;mc.y=160;stage.addChild(mc);mc=new TextSprite(null,200,20);mc.x=135;mc.y=20;mc.style.bold=true;mc.style.color="#23edd5";stage.addChild(mc);GUI.tech.skillPointsText=mc;GUI.tech.showSkillPoints();if(ExternalAPI.buyEnabled)
{mc=new TextButton(lang.buy_more);mc.x=166;mc.y=18;mc.style.size=10;mc.onmouseup=function(){showBuyItemsDialog(GUI.tech.buyActionComplete);};stage.addChild(mc);}
mc=new TextButton(lang.start);mc.x=411;mc.y=113;mc.onmouseup=startLastLevel;stage.addChild(mc);mc=new TextButton(lang.back);mc.x=411;mc.y=163;mc.onmouseup=showSelectLevel;stage.addChild(mc);mc=new TextButton(lang.tech1);mc.x=48;mc.y=50;mc.techType=0;mc.onmouseup=GUI.tech.showTech;stage.addChild(mc);mc=new TextButton(lang.tech2);mc.x=133;mc.y=50;mc.techType=1;mc.onmouseup=GUI.tech.showTech;stage.addChild(mc);mc=new TextButton(lang.tech3);mc.x=218;mc.y=50;mc.techType=2;mc.onmouseup=GUI.tech.showTech;stage.addChild(mc);mc=new TextButton(lang.tech4);mc.x=303;mc.y=50;mc.techType=3;mc.onmouseup=GUI.tech.showTech;stage.addChild(mc);GUI.tech.showTech({target:{techType:0}});mc=new TextSprite(null,200,20);mc.x=360;mc.y=20;mc.style.bold=true;mc.style.color="#2af75a";stage.addChild(mc);GUI.tech.scoresText=mc;GUI.tech.showScores();mc=new TextSprite(null,50,12);mc.x=98;mc.y=81;mc.text=lang.units;mc.align=TEXT_ALIGN_CENTER;mc.style.bold=true;mc.style.color="#26f5eb";stage.addChild(mc);mc=new TextSprite(null,50,12);mc.x=252;mc.y=81;mc.text=lang.description;mc.align=TEXT_ALIGN_CENTER;mc.style.bold=true;mc.style.color="#26f5eb";stage.addChild(mc);GUI.showVersion();},buyActionComplete:function(resut)
{GUI.tech.showSkillPoints();GUI.tech.showScores();},availUnits:["humanSoldier","humanArcher","humanMagic","humanPriest","humanKnight","humanGryphon","humanSaint","elfQueen"],units:[],currentTechType:0,showTech:function(e)
{var id,u,unit,s,skills,uType;if(e)
{id=e.target.techType;GUI.tech.clearSkillInfo();}
else id=GUI.tech.currentTechType;GUI.tech.currentTechType=id;for(var i=0;i<GUI.tech.units.length;i++)
{u=GUI.tech.units[i];stage.removeChild(u.icon);for(var n=0;n<u.strings.length;n++)stage.removeChild(u.strings[n]);for(var n=0;n<u.skills.length;n++)stage.removeChild(u.skills[n]);}
GUI.tech.units=[];for(var i=0;i<2;i++)
{u={};u.strings=[];u.skills=[];uType=GUI.tech.availUnits[id*2+i];unit=Units[uType];unit.type2=uType;mc=new Sprite(bitmaps[unit.stateMove.bitmap],unit.stateMove.width,unit.stateMove.height,unit.stateMove.frames);mc.x=i*76+60;mc.y=136;stage.addChild(mc);u.icon=mc;mc=new TextSprite(null,60,12);mc.x=i*76+60;mc.y=112;mc.style.color="#FF0";mc.style.size=8;mc.align=TEXT_ALIGN_CENTER;mc.text=unit.name;stage.addChild(mc);u.strings.push(mc);mc=new TextSprite(null,20,12);mc.x=i*76+56;mc.y=158;mc.style.size=7;mc.text=unit.hp;stage.addChild(mc);u.strings.push(mc);mc=new TextSprite(null,20,12);mc.x=i*76+79;mc.y=158;mc.style.size=7;mc.text=UpgradesManager.getUnitAttack(unit);stage.addChild(mc);u.strings.push(mc);mc=new TextSprite(null,20,12);mc.x=i*76+56;mc.y=168;mc.style.size=7;mc.text=unit.speed;stage.addChild(mc);u.strings.push(mc);mc=new TextSprite(null,20,12);mc.x=i*76+79;mc.y=168;mc.style.size=7;mc.text=UpgradesManager.getUnitDefense(unit);stage.addChild(mc);u.strings.push(mc);unit=UpgradesManager.getUnit(uType);if(unit)
{var col=0,row=0,skill;for(var n=0;n<4;n++)
{if(unit.skills[n]>0)
{skill=UpgradesManager.getDescription("skill",uType,n);mc=new Sprite(bitmaps[skill.icon],20,20,1);mc.x=i*77+col*23+48;mc.y=row*23+193;mc.unitType=uType;mc.skillID=n;mc.skillState=unit.skills[n];mc.descr=skill;mc.onclick=GUI.tech.showSkillInfo;stage.addChild(mc);u.skills.push(mc);if(unit.skills[n]==1)
{var up=new Sprite(bitmaps.icon_learn,20,20,1);up.x=mc.x;up.y=mc.y;stage.addChild(up);u.skills.push(up);}
col++;if(col>1)
{col=0;row++;}}}}
GUI.tech.units.push(u);}},skillInfoName:null,skillInfoDescr:null,skillLearnButton:null,skillNoSkillPoints:null,clearSkillInfo:function(e)
{stage.removeChild(GUI.tech.skillInfoName);stage.removeChild(GUI.tech.skillNoSkillPoints);stage.removeChild(GUI.tech.skillInfoDescr);stage.removeChild(GUI.tech.skillLearnButton);},showSkillInfo:function(e)
{var obj=e.target;GUI.tech.clearSkillInfo();mc=new TextSprite(null,150,20,1);mc.x=256;mc.y=100;mc.text=obj.descr.name;mc.style.color="#0099ff";mc.style.size=10;stage.addChild(mc);GUI.tech.skillInfoName=mc;mc=new TextSprite(null,150,80,1);mc.x=256;mc.y=150;mc.text=obj.descr.descr;mc.style.color="#ffff33";mc.style.size=8;mc.style.lineHeight=8;GUI.tech.skillInfoDescr=mc;stage.addChild(mc);var b;if(obj.skillState==1)
{if(UpgradesManager.skillPoints>0)
{b=new TextButton(lang.train);b.x=250;b.y=210;stage.addChild(b);b.skill=obj;b.onmouseup=GUI.tech.trainSkill;GUI.tech.skillLearnButton=b;}
else
{mc=new TextSprite(null,150,20,1);mc.x=256;mc.y=210;mc.text=lang.no_sp;mc.style.color="#ff3333";mc.style.size=10;stage.addChild(mc);GUI.tech.skillInfoName=mc;}}
if(obj.skillState==2)
{}},trainSkill:function(e)
{var obj=e.target.skill;obj.skillState=2;UpgradesManager.changeSkill(obj.unitType,obj.skillID,2);UpgradesManager.skillPoints--;GUI.tech.showSkillPoints();obj.dispatchEvent("click",{target:obj});UpgradesManager.save();GUI.tech.showTech();ExternalAPI.log.skillTrained(obj.unitType,obj.skillID);},forgotSkill:function(e)
{var obj=e.target.skill;obj.skillState=1;UpgradesManager.changeSkill(obj.unitType,obj.skillID,1);UpgradesManager.skillPoints++;GUI.tech.showSkillPoints();obj.dispatchEvent("click",{target:obj});UpgradesManager.save();GUI.tech.showTech();}},level:{sky:null,menu:null,moneyText:null,foodText:null,createGUI:function()
{},scrollMode:false,scrollX:0,scrollViewportX:0,startScroll:function(e)
{GUI.level.scrollX=e.x;GUI.level.scrollViewportX=stage.viewport.x;GUI.level.scrollMode=true;},getMaxScroll:function()
{return 800;},doScroll:function(e)
{if(gameState!=STATE_GAME)return;if(!GUI.level.scrollMode)return;var max=GUI.level.getMaxScroll();stage.viewport.x=GUI.level.scrollViewportX-(e.x-GUI.level.scrollX);if(stage.viewport.x<0)stage.viewport.x=0;if(stage.viewport.x>max)stage.viewport.x=max;},setScrollPos:function()
{document.getElementById("screen2").style.left=-(stage.viewport.x/3*Utils.globalPixelScale*Utils.globalScale)+"px";document.getElementById("screen3").style.left=-(stage.viewport.x*Utils.globalPixelScale*Utils.globalScale)+"px";},stopScroll:function(e)
{GUI.level.scrollMode=false;},miniMapScrollState:0,miniMapScroll:function(e)
{if(gameState!=STATE_GAME)return;if(GUI.level.miniMapScrollState==0)return;var max=GUI.level.getMaxScroll();var x=e.x+e.target.width/2;x-=60;x/=0.15;if(x<0)x=0;if(x>max)x=max;stage.viewport.x=x;},manageSprites:function()
{var obj;for(var i=0;i<stage.objects.length;i++)
{obj=stage.objects[i];if(obj.spriteType==TYPE_UNIT)
{obj.minimap.x=obj.uX/5+120;obj.minimap.y=230;obj.minimap.visible=obj.visible;}
if(obj.spriteType==TYPE_HOUSE)
{obj.minimap.x=obj.x/5+120;obj.minimap.y=230;obj.minimap.visible=true;}}
GUI.level.moneyText.write(owner.money);GUI.level.foodText.write(owner.food);if(GUI.level.statusObj)
{GUI.level.statusObjHPText.write(GUI.level.statusObj.hp);GUI.level.statusObjDefenseText.write(UpgradesManager.getUnitDefense(GUI.level.statusObj));GUI.level.statusObjAttackText.write(UpgradesManager.getUnitAttack(GUI.level.statusObj));GUI.level.statusObjNameText.text=GUI.level.statusObj.name;GUI.level.statusObjDescrText.text=GUI.level.statusObj.descr;}},buildSky:function()
{var ctx=document.getElementById("screen2").getContext("2d");var w=1440*Utils.globalScale*Utils.globalPixelScale;var h=145*Utils.globalScale*Utils.globalPixelScale;ctx.drawImage(GUI.level.sky,0,0,1440*Utils.globalScale,145*Utils.globalScale,0,0,w,h);},statusObj:null,statusObjSprite:null,statusObjHPText:null,statusObjDefenseText:null,statusObjAttackText:null,statusObjNameText:null,statusObjDescrText:null,clearStatusObj:function()
{stage.removeChild(GUI.level.statusObjSprite);GUI.level.statusObj=false;GUI.level.statusObjHPText.write("");GUI.level.statusObjDefenseText.write("");GUI.level.statusObjAttackText.write("");GUI.level.statusObjNameText.text="";GUI.level.statusObjDescrText.text="";doRebuildBack=true;},setStatusObj:function(e)
{if(gameState!=STATE_GAME)return;var t,s,obj,sc;if(!e)
{GUI.level.clearStatusObj();return false;}
doTargetAction(e);obj=e.target;if(obj.state==UNIT_STATE_DEAD)
{GUI.level.clearStatusObj();return false;}
if(GUI.level.statusObj===null)
{t=new Text(bitmaps.font1,9,13);t.x=188;t.y=300;GUI.level.statusObjHPText=t;t=new Text(bitmaps.font1,9,13);t.x=266;t.y=300;t.static=true;GUI.level.statusObjDefenseText=t;t=new Text(bitmaps.font1,9,13);t.x=342;t.y=300;t.static=true;GUI.level.statusObjAttackText=t;var mc=new TextSprite(null,214,20,1);mc.x=268;mc.y=257;mc.style.size=10;mc.style.lineHeight=10;mc.style.color="#0099ff";mc.style.borderColor="#0099ff";mc.ignoreViewport=true;mc.static=true;stage.addChild(mc);GUI.level.statusObjNameText=mc;mc=new TextSprite(null,214,34,1);mc.x=268;mc.y=276;mc.style.size=8;mc.style.lineHeight=8;mc.style.color="#ffff33";mc.ignoreViewport=true;mc.static=true;stage.addChild(mc);GUI.level.statusObjDescrText=mc;}
if(GUI.level.statusObj!=obj)
{if(GUI.level.statusObjSprite)GUI.level.statusObjSprite.destroy=true;GUI.level.statusObj=obj;if(obj.icon)
{s=new Sprite(bitmaps[obj.icon],30,30,1);sc=40/s.width;}
else
{s=new Sprite(obj.bitmap,obj.width,obj.height,1);sc=40/(obj.width>obj.height?obj.width:obj.height);}
s.scaleX=sc;s.scaleY=sc;s.ignoreViewport=true;s.x=130.5;s.y=280;s.zIndex=1000;s.static=true;stage.addChild(s);GUI.level.statusObjSprite=s;}
doRebuildBack=true;return false;},create:function(id)
{var level=Levels[id];GUI.level.statusObj=null;GUI.level.sky=bitmaps["background"+level.back];GUI.level.buildSky();mc=new Sprite(null,1440,220,1);mc.x=720;mc.y=110;mc.static=true;mc.onclick=doTargetAction;stage.addChild(mc);mc=new Sprite(null,480,220,1);mc.x=240;mc.y=110;mc.static=true;mc.ignoreViewport=true;mc.onmousedown=GUI.level.startScroll;mc.onmousemove=GUI.level.doScroll;mc.onmouseup=GUI.level.stopScroll;stage.addChild(mc);mc=new Sprite(bitmaps["groundbg"+level.back],480,150,1);mc.x=240;mc.y=245;mc.static=true;mc.ignoreViewport=true;stage.addChild(mc);mc=new Sprite(bitmaps.inter_menu,480,105,1);mc.x=240;mc.y=267;mc.static=true;mc.ignoreViewport=true;stage.addChild(mc);GUI.level.menu=mc;mc=new Sprite(null,250,20,1);mc.static=true;mc.ignoreViewport=true;mc.x=240;mc.y=230;mc.onmousedown=function(e){GUI.level.miniMapScrollState=1;GUI.level.miniMapScroll(e);};mc.onmousemove=GUI.level.miniMapScroll;mc.onmouseup=function(){GUI.level.miniMapScrollState=0;};stage.addChild(mc);var x=Math.random()*10;var decors=level.decors;var d;while(x<1300)
{d=decors[Math.floor(Math.random()*decors.length)];mc=new Sprite(bitmaps[d.bitmap],d.width,d.height,1);mc.x=x;mc.y=138-d.height/2;mc.spriteType=TYPE_DECOR;stage3.addChild(mc);x+=Math.random()*50+50;}
var b,bt,min;for(var i=0;i<level.builds.length;i++)
{newHouse(level.builds[i].type,level.builds[i].x);}
if(level.units)
{for(var i=0;i<level.units.length;i++)
{newUnit(level.units[i].type,level.units[i].x);}}
for(var i=0;i<3;i++)
{mc=new Sprite(bitmaps["groundtop"+level.back],480,45,1);mc.x=240+(i*480);mc.y=152;mc.zIndex=50;stage3.addChild(mc);}},create2:function()
{mc=new Sprite(bitmaps.inter_icons,64,13,1);mc.x=36;mc.y=10;mc.ignoreViewport=true;stage.addChild(mc);var t=new Text(bitmaps.font1,9,13);t.x=24;t.y=10;GUI.level.moneyText=t;t=new Text(bitmaps.font1,9,13);t.x=74;t.y=10;GUI.level.foodText=t;mc=new Button(bitmaps.inter_button_again,46,18,1);mc.x=452;mc.y=13;mc.ignoreViewport=true;mc.onmouseup=showAgainPrompt;stage.addChild(mc);addString((curLevel+1),438,16,8,"#FFF","#000",true,true,true);addString(lang.again,459,16,8,"#FFF","#000",true,true,true);}}}
function Text(font,width,height)
{this.ALIGN_LEFT=0;this.ALIGN_RIGHT=1;this.ALIGN_CENTER=2;this.font=font;this.x=0;this.y=0;this.width=width;this.height=height;this.align=this.ALIGN_LEFT;this.rotation=0;this.static=false;this.ignoreViewport=true;this.charMap=['0','1','2','3','4','5','6','7','8','9'];this.sprites=[];this.manageSprites=function(text)
{var i,char;var len=text.length;var sp_len=this.sprites.length;if(sp_len<len)
{for(i=0;i<len-sp_len;i++)
{char=new Sprite(this.font,this.width,this.height,this.charMap.length);this.sprites.push(char);char.ignoreViewport=this.ignoreViewport;stage.addChild(char);}}
if(sp_len>len)
{for(i=0;i<sp_len-len;i++)stage.removeChild(this.sprites[i]);this.sprites.splice(0,sp_len-len);}}
this.write=function(text)
{var curX,curY,p,p2,n;text+="";this.manageSprites(text);curX=this.x;curY=this.y;if(this.align==this.ALIGN_CENTER)curX=this.x-(text.length-1)/2*this.width;if(this.align==this.ALIGN_RIGHT)curX=this.x-(text.length-1)*this.width;p=new Vector(curX-this.x,0);p.rotate(-this.rotation);curX=p.x+this.x;curY=p.y+this.y;p=new Vector(0,0);for(var i=0;i<text.length;i++)
{this.sprites[i].visible=true;n=this.charMap.indexOf(text.substr(i,1));if(n<0)this.sprites[i].visible=false;else
{this.sprites[i].gotoAndStop(n);p2=p.clone();p2.rotate(-this.rotation);this.sprites[i].x=p2.x+curX;this.sprites[i].y=p2.y+curY;this.sprites[i].rotation=this.rotation;this.sprites[i].static=this.static;p.x+=this.width;}}}};var UNIT_TYPE_WORKER=1;var UNIT_TYPE_SOLDIER=2;var UNIT_TYPE_ARCHER=3;var UNIT_TYPE_ARCHER2=4;var UNIT_TYPE_HEALER=5;var UNIT_TYPE_FLYING=6;var UNIT_STATE_MOVE="stateMove";var UNIT_STATE_ATTACK="stateAttack";var UNIT_STATE_DEAD="stateDead";var Units={humanWorker:{name:lang.unit_human1_name,name_plural:lang.unit_human1_name_plural,descr:lang.unit_human1_descr,stateMove:{bitmap:"human_worker",width:22,height:22,frames:7,cpos:{x:0,y:0}},stateAttack:{bitmap:"human_worker",width:22,height:22,frames:7,cpos:{x:0,y:0}},stateDead:{bitmap:"human_worker",width:22,height:22,frames:7,cpos:{x:0,y:0}},icon:"human_icon_worker",type:UNIT_TYPE_WORKER,needBuild:"",fraction:1,level:1,money:0,food:10,hp:100,defense:2,attack:0,speed:3},humanSoldier:{name:lang.unit_human2_name,name_plural:lang.unit_human2_name_plural,descr:lang.unit_human2_descr,stateMove:{bitmap:"human_soldier",width:24,height:24,frames:8,cpos:{x:0,y:-1}},stateAttack:{bitmap:"human_soldier_att",width:40,height:26,frames:7,attFrame:5,cpos:{x:6,y:-1}},stateDead:{bitmap:"human_soldier_dead",width:40,height:32,frames:6,cpos:{x:0,y:2}},icon:"human_icon_soldier",type:UNIT_TYPE_SOLDIER,needBuild:"humanBarrack",fraction:1,level:1,money:10,food:10,hp:50,defense:4,attack:20,speed:2},humanArcher:{name:lang.unit_human3_name,name_plural:lang.unit_human3_name_plural,descr:lang.unit_human3_descr,stateMove:{bitmap:"human_archer",width:18,height:24,frames:7,cpos:{x:0,y:0}},stateAttack:{bitmap:"human_archer_att",width:28,height:22,frames:10,attFrame:9,cpos:{x:3,y:0}},stateDead:{bitmap:"human_archer_dead",width:28,height:22,frames:5,cpos:{x:5,y:2}},icon:"human_icon_archer",type:UNIT_TYPE_ARCHER,needBuild:"humanBarrack",fraction:1,level:2,money:10,food:10,hp:40,defense:2,attack:15,speed:2},humanMagic:{name:lang.unit_human4_name,name_plural:lang.unit_human4_name_plural,descr:lang.unit_human4_descr,stateMove:{bitmap:"human_magic",width:26,height:26,frames:8,cpos:{x:0,y:0}},stateAttack:{bitmap:"human_magic_att",width:46,height:36,frames:10,attFrame:7,cpos:{x:1,y:-6}},stateDead:{bitmap:"human_magic_dead",width:38,height:30,frames:9,cpos:{x:5,y:1}},type:UNIT_TYPE_ARCHER2,needBuild:"humanMonastery",icon:"human_icon_magic",fraction:1,level:3,money:50,food:10,hp:30,defense:0,attack:24,speed:2},humanPriest:{name:lang.unit_human5_name,name_plural:lang.unit_human5_name_plural,descr:lang.unit_human5_descr,stateMove:{bitmap:"human_priest",width:14,height:22,frames:8,cpos:{x:0,y:0}},stateAttack:{bitmap:"human_priest_att",width:28,height:30,frames:10,attFrame:5,cpos:{x:6,y:-4}},stateDead:{bitmap:"human_priest_dead",width:26,height:22,frames:6,cpos:{x:0,y:0}},type:UNIT_TYPE_HEALER,needBuild:"humanMonastery",icon:"human_icon_priest",fraction:1,level:4,money:50,food:10,hp:30,defense:2,attack:20,speed:2},humanKnight:{name:lang.unit_human6_name,name_plural:lang.unit_human6_name_plural,descr:lang.unit_human6_descr,stateMove:{bitmap:"human_knight",width:42,height:36,frames:10,cpos:{x:0,y:0}},stateAttack:{bitmap:"human_knight_att",width:56,height:34,frames:9,attFrame:5,cpos:{x:4,y:0}},stateDead:{bitmap:"human_knight_dead",width:40,height:42,frames:6,cpos:{x:0,y:0}},type:UNIT_TYPE_SOLDIER,needBuild:"humanSmithy",icon:"human_icon_knight",fraction:1,level:5,money:75,food:15,hp:70,defense:5,attack:20,speed:3},humanGryphon:{name:lang.unit_human7_name,name_plural:lang.unit_human7_name_plural,descr:lang.unit_human7_descr,stateMove:{bitmap:"human_gryphon",width:40,height:38,frames:9,cpos:{x:0,y:0}},stateAttack:{bitmap:"human_gryphon_att",width:46,height:44,frames:9,attFrame:3,cpos:{x:-3,y:-1}},stateDead:{bitmap:"human_gryphon_dead",width:46,height:60,frames:8,cpos:{x:0,y:0}},type:UNIT_TYPE_FLYING,needBuild:"humanSmithy",icon:"human_icon_gryphon",fraction:1,level:6,money:150,food:15,hp:65,defense:3,attack:24,speed:4},humanSaint:{name:lang.unit_human8_name,name_plural:lang.unit_human8_name_plural,descr:lang.unit_human8_descr,stateMove:{bitmap:"human_saint",width:30,height:28,frames:10,cpos:{x:0,y:0}},stateAttack:{bitmap:"human_saint_att",width:50,height:40,frames:8,attFrame:5,cpos:{x:5,y:-6}},stateDead:{bitmap:"human_saint_dead",width:36,height:34,frames:7,cpos:{x:0,y:0}},type:UNIT_TYPE_SOLDIER,needBuild:"humanTavern",icon:"human_icon_saint",fraction:1,level:7,money:500,food:20,hp:500,defense:10,attack:30,speed:2,uniq:true},elfQueen:{name:lang.unit_human9_name,name_plural:lang.unit_human9_name_plural,descr:lang.unit_human9_descr,stateMove:{bitmap:"elf_queen",width:58,height:36,frames:7,cpos:{x:0,y:0}},stateAttack:{bitmap:"elf_queen_att",width:58,height:36,frames:11,attFrame:5,cpos:{x:0,y:0}},stateDead:{bitmap:"elf_queen_dead",width:50,height:50,frames:4,delay:2,cpos:{x:0,y:0}},type:UNIT_TYPE_FLYING,icon:"human_icon_elf_queen",fraction:1,level:7,money:300,food:20,hp:300,defense:8,attack:25,speed:5,uniq:true},bandit:{name:lang.unit_bandit1_name,name_plural:lang.unit_bandit1_name_plural,descr:lang.unit_bandit1_descr,stateMove:{bitmap:"bandit",width:30,height:26,frames:10,cpos:{x:0,y:0}},stateAttack:{bitmap:"bandit_att",width:30,height:32,frames:9,attFrame:4,cpos:{x:-1,y:-4}},stateDead:{bitmap:"bandit_dead",width:38,height:30,frames:9,cpos:{x:0,y:0}},type:UNIT_TYPE_SOLDIER,fraction:2,level:1,money:10,food:10,hp:30,defense:0,attack:10,speed:2},ogre:{name:lang.unit_bandit2_name,name_plural:lang.unit_bandit2_name_plural,descr:lang.unit_bandit2_descr,stateMove:{bitmap:"ogre",width:80,height:86,frames:11,delay:2,cpos:{x:0,y:2}},stateAttack:{bitmap:"ogre_att",width:150,height:100,frames:14,delay:2,attFrame:7,cpos:{x:-20,y:2}},stateDead:{bitmap:"ogre_dead",width:106,height:80,frames:14,delay:2,cpos:{x:-8,y:20}},type:UNIT_TYPE_SOLDIER,icon:"icon_ogre",fraction:2,level:3,money:5000,food:10,hp:3000,defense:2,attack:35,speed:2},orcSoldier:{name:lang.unit_orc1_name,name_plural:lang.unit_orc1_name_plural,descr:lang.unit_orc1_descr,stateMove:{bitmap:"orc_soldier",width:22,height:28,frames:8,cpos:{x:0,y:0}},stateAttack:{bitmap:"orc_soldier_att",width:40,height:28,frames:9,attFrame:5,cpos:{x:0,y:2}},stateDead:{bitmap:"orc_soldier_dead",width:32,height:26,frames:6,cpos:{x:0,y:2}},type:UNIT_TYPE_SOLDIER,fraction:2,level:1,money:10,food:10,hp:50,defense:3,attack:22,speed:2},orcStrong:{name:lang.unit_orc2_name,name_plural:lang.unit_orc2_name_plural,descr:lang.unit_orc2_descr,stateMove:{bitmap:"orc_strong",width:36,height:40,frames:11,cpos:{x:0,y:-1}},stateAttack:{bitmap:"orc_strong_att",width:70,height:46,frames:8,attFrame:6,cpos:{x:0,y:0}},stateDead:{bitmap:"orc_strong_dead",width:46,height:40,frames:6,cpos:{x:-3,y:4}},type:UNIT_TYPE_SOLDIER,fraction:2,level:2,money:50,food:10,hp:60,defense:4,attack:25,speed:2},orcShield:{name:lang.unit_orc3_name,name_plural:lang.unit_orc3_name_plural,descr:lang.unit_orc3_descr,stateMove:{bitmap:"orc_shield",width:40,height:38,frames:8,cpos:{x:0,y:2}},stateAttack:{bitmap:"orc_shield_att",width:44,height:36,frames:5,delay:2,attFrame:2,cpos:{x:2,y:2}},stateDead:{bitmap:"orc_shield_dead",width:48,height:36,frames:5,delay:2,cpos:{x:0,y:4}},type:UNIT_TYPE_SOLDIER,fraction:2,level:3,money:150,food:10,hp:70,defense:6,attack:15,speed:1},orcBeast:{name:lang.unit_orc4_name,name_plural:lang.unit_orc4_name_plural,descr:lang.unit_orc4_descr,stateMove:{bitmap:"orc_beast",width:26,height:28,frames:6,cpos:{x:0,y:1}},stateAttack:{bitmap:"orc_beast_att",width:24,height:26,frames:9,attFrame:5,cpos:{x:0,y:1}},stateDead:{bitmap:"orc_beast_dead",width:32,height:28,frames:7,cpos:{x:0,y:2}},type:UNIT_TYPE_SOLDIER,fraction:2,level:4,money:30,food:10,hp:30,defense:1,attack:22,speed:3},orcDragon:{name:lang.unit_orc5_name,name_plural:lang.unit_orc5_name_plural,descr:lang.unit_orc5_descr,stateMove:{bitmap:"orc_dragon",width:70,height:72,frames:10,cpos:{x:0,y:1}},stateAttack:{bitmap:"orc_dragon_att",width:96,height:74,frames:10,attFrame:7,cpos:{x:0,y:1}},stateDead:{bitmap:"orc_dragon_dead",width:82,height:72,frames:12,cpos:{x:0,y:2}},type:UNIT_TYPE_SOLDIER,fraction:2,level:5,money:200,food:10,hp:120,defense:2,attack:30,speed:1},human2Soldier:{name:lang.unit_rhuman1_name,name_plural:lang.unit_rhuman1_name_plural,descr:lang.unit_rhuman1_descr,stateMove:{bitmap:"human2_soldier",width:24,height:24,frames:8,cpos:{x:0,y:-1}},stateAttack:{bitmap:"human2_soldier_att",width:40,height:26,frames:7,attFrame:5,cpos:{x:-6,y:-1}},stateDead:{bitmap:"human2_soldier_dead",width:40,height:32,frames:6,cpos:{x:0,y:2}},type:UNIT_TYPE_SOLDIER,fraction:2,level:1,money:10,food:10,hp:50,defense:4,attack:20,speed:2},human2Archer:{name:lang.unit_rhuman2_name,name_plural:lang.unit_rhuman2_name_plural,descr:lang.unit_rhuman2_descr,stateMove:{bitmap:"human2_archer",width:18,height:24,frames:7,cpos:{x:0,y:0}},stateAttack:{bitmap:"human2_archer_att",width:28,height:22,frames:10,attFrame:9,cpos:{x:-3,y:0}},stateDead:{bitmap:"human2_archer_dead",width:28,height:22,frames:5,cpos:{x:-5,y:2}},type:UNIT_TYPE_ARCHER,fraction:2,level:2,money:10,food:10,hp:40,defense:2,attack:15,speed:2},human2Magic:{name:lang.unit_rhuman3_name,name_plural:lang.unit_rhuman3_name_plural,descr:lang.unit_rhuman3_descr,stateMove:{bitmap:"human2_magic",width:26,height:26,frames:10,cpos:{x:0,y:0}},stateAttack:{bitmap:"human2_magic_att",width:30,height:28,frames:10,attFrame:5,cpos:{x:5,y:-2}},stateDead:{bitmap:"human2_magic_dead",width:38,height:30,frames:9,cpos:{x:-5,y:1}},type:UNIT_TYPE_ARCHER2,fraction:2,level:3,money:50,food:10,hp:30,defense:0,attack:24,speed:2},human2Knight:{name:lang.unit_rhuman4_name,name_plural:lang.unit_rhuman4_name_plural,descr:lang.unit_rhuman4_descr,stateMove:{bitmap:"human2_knight",width:42,height:36,frames:10,cpos:{x:0,y:0}},stateAttack:{bitmap:"human2_knight_att",width:56,height:34,frames:9,attFrame:5,cpos:{x:-4,y:0}},stateDead:{bitmap:"human2_knight_dead",width:40,height:42,frames:6,cpos:{x:0,y:0}},type:UNIT_TYPE_SOLDIER,fraction:2,level:5,money:75,food:15,hp:70,defense:5,attack:20,speed:3},dragon:{name:lang.unit_dragon_name,name_plural:lang.unit_dragon_name_plural,descr:lang.unit_dragon_descr,stateMove:{bitmap:"dragon",width:130,height:160,frames:4,delay:4,cpos:{x:0,y:0}},stateAttack:{bitmap:"dragon",width:130,height:160,frames:4,delay:4,attFrame:0,cpos:{x:0,y:0}},stateDead:{bitmap:"dragon",width:130,height:160,frames:1,delay:4,cpos:{x:0,y:0}},type:UNIT_TYPE_SOLDIER,icon:"icon_dragon",fraction:2,level:10,money:5000,food:1000,hp:10000,defense:20,attack:0,speed:0}};;var BUILD_TYPE_NORMAL=0;var BUILD_TYPE_CASTLE=1;var BUILD_TYPE_MINE=2;var BUILD_TYPE_RESPAWN=3;var BUILD_TYPE_TOWER=4;var Builds={humanCastle1:{name:lang.build_human1_name,descr:lang.build_human1_descr,bitmap:"human_castle1",type:BUILD_TYPE_CASTLE,width:115,height:120,level:1,money:0,food:100,hp:500,defense:5,attack:0,fraction:1,workers:3,units:["humanWorker"]},humanCastle2:{name:lang.build_human2_name,descr:lang.build_human2_descr,bitmap:"human_castle2",icon:"human_icon_castle2",type:BUILD_TYPE_CASTLE,prevBuild:"humanCastle1",width:120,height:145,level:2,money:100,food:150,hp:500,defense:5,attack:0,fraction:1,workers:5,units:["humanWorker"]},humanCastle3:{name:lang.build_human3_name,descr:lang.build_human3_descr,bitmap:"human_castle3",icon:"human_icon_castle3",type:BUILD_TYPE_CASTLE,prevBuild:"humanCastle2",width:135,height:160,level:3,money:150,food:200,hp:500,defense:5,attack:0,fraction:1,workers:7,units:["humanWorker"]},humanMine:{name:lang.build_human4_name,descr:lang.build_human4_descr,bitmap:"human_mine",type:BUILD_TYPE_MINE,width:45,height:40,level:1,money:0,hp:100,defense:0,attack:0,fraction:1,units:[]},humanHut1:{name:lang.build_human5_name,descr:lang.build_human5_descr,bitmap:"human_hut1",type:BUILD_TYPE_NORMAL,width:54,height:34,level:1,money:0,hp:50,defense:0,attack:0,fraction:1,units:[]},humanHut2:{name:lang.build_human6_name,descr:lang.build_human6_descr,bitmap:"human_hut2",type:BUILD_TYPE_NORMAL,width:57,height:46,level:1,money:0,hp:50,defense:0,attack:0,fraction:1,units:[]},humanWell:{name:lang.build_human7_name,descr:lang.build_human7_descr,bitmap:"human_well",type:BUILD_TYPE_NORMAL,width:22,height:18,level:1,money:0,hp:20,defense:0,attack:0,fraction:1,units:[]},humanBarrack:{name:lang.build_human8_name,descr:lang.build_human8_descr,bitmap:"human_barrack",icon:"human_icon_barrack",type:BUILD_TYPE_RESPAWN,width:80,height:64,level:1,money:100,hp:100,defense:2,attack:0,fraction:1,units:["humanSoldier","humanArcher"]},humanMonastery:{name:lang.build_human9_name,descr:lang.build_human9_descr,bitmap:"human_monastery",icon:"human_icon_monastery",type:BUILD_TYPE_RESPAWN,width:55,height:85,level:1,money:200,hp:200,defense:2,attack:0,fraction:1,units:["humanMagic","humanPriest"]},humanSmithy:{name:lang.build_human10_name,descr:lang.build_human10_descr,bitmap:"human_smithy",type:BUILD_TYPE_RESPAWN,icon:"human_icon_smithy",width:60,height:40,level:1,money:300,hp:300,defense:2,attack:0,fraction:1,units:["humanGryphon","humanSaint"]},humanTavern:{name:lang.build_human11_name,descr:lang.build_human11_descr,bitmap:"human_tavern",icon:"human_icon_tavern",type:BUILD_TYPE_RESPAWN,width:60,height:65,level:1,money:400,hp:400,defense:2,attack:0,fraction:1,units:["humanKnight","elfQueen"]},humanTower:{name:lang.build_human12_name,descr:lang.build_human12_descr,bitmap:"human_tower",type:BUILD_TYPE_TOWER,width:50,height:80,level:1,money:100,hp:500,defense:5,attack:10,fraction:1,units:["humanKnight","elfQueen"]},banditCastle:{name:lang.build_bandit1_name,descr:lang.build_bandit1_descr,bitmap:"bandit_castle",type:BUILD_TYPE_CASTLE,width:108,height:83,level:1,money:500,hp:300,defense:5,attack:0,fraction:2,units:["bandit"]},banditHut:{name:lang.build_bandit2_name,descr:lang.build_bandit2_descr,bitmap:"bandit_hut",type:BUILD_TYPE_NORMAL,width:86,height:65,level:1,money:100,hp:200,defense:2,attack:0,fraction:2,units:[]},banditTower:{name:lang.build_bandit3_name,descr:lang.build_bandit3_descr,bitmap:"bandit_tower",type:BUILD_TYPE_TOWER,width:80,height:70,level:1,money:100,hp:200,defense:2,attack:20,fraction:2,units:[]},orcCastle1:{name:lang.build_orc1_name,descr:lang.build_orc1_descr,bitmap:"orc_castle1",type:BUILD_TYPE_CASTLE,width:110,height:82,level:1,money:0,hp:800,defense:5,attack:0,fraction:2,workers:0,units:["orcSoldier","orcStrong"]},orcCastle2:{name:lang.build_orc2_name,descr:lang.build_orc2_descr,bitmap:"orc_castle2",type:BUILD_TYPE_CASTLE,width:113,height:132,level:1,money:0,hp:1000,defense:5,attack:0,fraction:2,workers:0,units:["orcSoldier","orcStrong","orcShield"]},orcCastle3:{name:lang.build_orc3_name,descr:lang.build_orc3_descr,bitmap:"orc_castle3",type:BUILD_TYPE_CASTLE,width:113,height:132,level:1,money:0,hp:1200,defense:5,attack:0,fraction:2,workers:0,units:["orcSoldier","orcStrong","orcShield","orcBeast"]},orcCastle4:{name:lang.build_orc4_name,descr:lang.build_orc4_descr,bitmap:"orc_castle4",type:BUILD_TYPE_CASTLE,width:130,height:158,level:1,money:0,hp:1500,defense:5,attack:0,fraction:2,workers:0,units:["orcSoldier","orcStrong","orcShield","orcBeast","orcDragon"]},orcCastle5:{name:lang.build_orc5_name,descr:lang.build_orc5_descr,bitmap:"blank",type:BUILD_TYPE_CASTLE,width:10,height:10,level:1,money:0,hp:150000,defense:0,attack:0,fraction:2,workers:0},orcButcher:{name:lang.build_orc6_name,descr:lang.build_orc6_descr,bitmap:"orc_butcher",type:BUILD_TYPE_TOWER,width:60,height:60,level:1,money:0,hp:850,defense:15,attack:20,fraction:2,units:[]},orcCave:{name:lang.build_orc7_name,descr:lang.build_orc7_descr,bitmap:"orc_cave",type:BUILD_TYPE_TOWER,width:78,height:71,level:1,money:0,hp:500,defense:8,attack:20,fraction:2,units:[]},orcSawmill:{name:lang.build_orc8_name,descr:lang.build_orc8_descr,bitmap:"orc_sawmill",type:BUILD_TYPE_TOWER,width:59,height:45,level:1,money:0,hp:700,defense:10,attack:20,fraction:2,units:[]},human2Castle1:{name:lang.build_rhuman1_name,descr:lang.build_rhuman1_descr,bitmap:"human2_castle1",type:BUILD_TYPE_CASTLE,width:113,height:116,level:1,money:0,hp:300,defense:5,attack:0,fraction:2,workers:0,units:["human2Soldier"]},human2Castle2:{name:lang.build_rhuman2_name,descr:lang.build_rhuman2_descr,bitmap:"human2_castle2",type:BUILD_TYPE_CASTLE,width:113,height:116,level:1,money:0,hp:400,defense:5,attack:0,fraction:2,workers:0,units:["human2Soldier","human2Archer"]},human2Castle3:{name:lang.build_rhuman3_name,descr:lang.build_rhuman3_descr,bitmap:"human2_castle3",type:BUILD_TYPE_CASTLE,width:120,height:144,level:1,money:0,hp:500,defense:5,attack:0,fraction:2,workers:0,units:["human2Soldier","human2Archer","human2Magic"]},human2Castle4:{name:lang.build_rhuman4_name,descr:lang.build_rhuman4_descr,bitmap:"human2_castle4",type:BUILD_TYPE_CASTLE,width:135,height:159,level:1,money:0,hp:600,defense:5,attack:0,fraction:2,workers:0,units:["human2Soldier","human2Archer","human2Magic","human2Knight"]},human2Tower1:{name:lang.build_rhuman5_name,descr:lang.build_rhuman5_descr,bitmap:"human2_tower1",type:BUILD_TYPE_TOWER,width:50,height:79,level:1,money:0,hp:500,defense:5,attack:10,fraction:2,units:[]},human2Tower2:{name:lang.build_rhuman6_name,descr:lang.build_rhuman6_descr,bitmap:"human2_tower2",type:BUILD_TYPE_TOWER,width:50,height:79,level:1,money:0,hp:800,defense:8,attack:15,fraction:2,units:[]}};;var Levels=[{money:100,food:100,back:1,builds:[{type:"humanMine",x:100},{type:"humanCastle1",x:200},{type:"humanHut1",x:400},{type:"humanHut1",x:500},{type:"humanHut1",x:540},{type:"humanHut1",x:620},{type:"banditCastle",x:1050},],decors:[{bitmap:"common_tree1_1",width:28,height:40},{bitmap:"common_tree1_2",width:50,height:71},],availEnemyUnits:["bandit"],rewardBuilds:[],rewardMagic:[],rewardUnits:[],rewardSkills:[{unit:"humanSoldier",skill:1},{unit:"humanSoldier",skill:2}],rewardSkillPoints:1,dialogs:[{helper:2,text:lang.level1_dialog1},{helper:2,text:lang.level1_dialog2},{helper:1,text:lang.level1_dialog3},{helper:2,text:lang.level1_dialog4}]},{money:100,food:100,back:1,builds:[{type:"humanMine",x:100},{type:"humanCastle1",x:200},{type:"humanHut1",x:400},{type:"humanWell",x:450},{type:"humanHut1",x:500},{type:"humanHut1",x:540},{type:"humanHut2",x:620},{type:"banditTower",x:950},{type:"banditCastle",x:1050},{type:"banditTower",x:1110},],decors:[{bitmap:"common_tree1_1",width:28,height:40},{bitmap:"common_tree1_2",width:50,height:71},],availEnemyUnits:["bandit"],rewardBuilds:[],rewardMagic:["magicHeal"],rewardUnits:[],rewardSkills:[],rewardSkillPoints:0,dialogs:[{helper:1,text:lang.level2_dialog1},{helper:3,text:lang.level2_dialog2}]},{money:100,food:100,back:2,builds:[{type:"humanMine",x:100},{type:"humanCastle1",x:200},{type:"humanHut1",x:400},{type:"humanHut2",x:500},{type:"humanHut1",x:550},{type:"banditTower",x:780},{type:"banditHut",x:870},{type:"banditCastle",x:960},{type:"banditHut",x:1060},{type:"banditTower",x:1150}],decors:[{bitmap:"common_tree2_1",width:28,height:40},{bitmap:"common_tree2_2",width:50,height:71},],availEnemyUnits:["bandit"],rewardBuilds:[],rewardMagic:[],rewardUnits:["humanArcher"],rewardSkills:[],rewardSkillPoints:0,dialogs:[{helper:4,text:lang.level3_dialog1},{helper:1,text:lang.level3_dialog2},{helper:4,text:lang.level3_dialog3}]},{money:100,food:100,back:4,builds:[{type:"humanMine",x:100},{type:"humanCastle1",x:200},{type:"humanHut1",x:400},{type:"humanWell",x:450},{type:"humanHut1",x:500},{type:"humanHut1",x:540},{type:"humanHut2",x:620},{type:"banditCastle",x:3000}],decors:[{bitmap:"common_tree4_1",width:20,height:40},{bitmap:"common_tree4_2",width:36,height:71},],availEnemyUnits:[],units:[{type:"ogre",x:1100}],rewardBuilds:[],rewardMagic:[],rewardUnits:[],rewardSkills:[{unit:"humanArcher",skill:1},{unit:"humanArcher",skill:2}],rewardSkillPoints:0,dialogs:[{helper:3,text:lang.level4_dialog1},{helper:1,text:lang.level4_dialog2}]},{money:100,food:100,back:2,builds:[{type:"humanMine",x:100},{type:"humanCastle1",x:200},{type:"humanWell",x:460},{type:"humanHut2",x:500},{type:"humanHut1",x:550},{type:"humanHut1",x:600},{type:"humanHut1",x:680},{type:"human2Castle1",x:1100}],decors:[{bitmap:"common_tree2_1",width:28,height:40},{bitmap:"common_tree2_2",width:50,height:71},],availEnemyUnits:["human2Soldier"],rewardBuilds:["humanCastle2","humanMonastery"],rewardMagic:[],rewardUnits:["humanMagic"],rewardSkills:[],rewardSkillPoints:0,dialogs:[{helper:1,text:lang.level5_dialog1},{helper:6,text:lang.level5_dialog2},{helper:1,text:lang.level5_dialog3}]},{money:100,food:100,back:3,builds:[{type:"humanMine",x:100},{type:"humanCastle1",x:200},{type:"humanHut1",x:450},{type:"humanHut2",x:500},{type:"humanHut1",x:550},{type:"humanWell",x:600},{type:"humanHut2",x:680},{type:"human2Tower1",x:950},{type:"human2Castle2",x:1050},{type:"human2Tower1",x:1150}],decors:[{bitmap:"common_tree3_1",width:26,height:30},{bitmap:"common_tree3_2",width:43,height:50},],availEnemyUnits:["human2Soldier","human2Archer"],rewardBuilds:[],rewardMagic:[],rewardUnits:[],rewardSkills:[{unit:"humanMagic",skill:1}],rewardSkillPoints:0,dialogs:[{helper:3,text:lang.level6_dialog1},{helper:1,text:lang.level6_dialog2}]},{money:100,food:100,back:3,builds:[{type:"humanMine",x:100},{type:"humanCastle1",x:200},{type:"humanHut1",x:450},{type:"humanWell",x:500},{type:"humanHut2",x:550},{type:"humanWell",x:600},{type:"humanHut1",x:680},{type:"human2Tower1",x:900},{type:"human2Tower1",x:950},{type:"human2Castle3",x:1050},{type:"human2Tower1",x:1150},{type:"human2Tower1",x:1200}],decors:[{bitmap:"common_tree3_1",width:26,height:30},{bitmap:"common_tree3_2",width:43,height:50},],availEnemyUnits:["human2Soldier","human2Archer"],rewardBuilds:[],rewardMagic:["magicLight"],rewardUnits:[],rewardSkills:[],rewardSkillPoints:0,dialogs:[{helper:6,text:lang.level7_dialog1},{helper:1,text:lang.level7_dialog2},{helper:6,text:lang.level7_dialog3},]},{money:100,food:100,back:1,builds:[{type:"humanMine",x:100},{type:"humanCastle1",x:200},{type:"humanHut1",x:450},{type:"humanHut2",x:500},{type:"humanWell",x:550},{type:"humanHut1",x:630},{type:"humanHut1",x:680},{type:"human2Tower1",x:800},{type:"human2Tower1",x:850},{type:"human2Tower2",x:900},{type:"human2Castle4",x:1000},{type:"human2Tower2",x:1080},{type:"human2Tower1",x:1130},{type:"human2Tower1",x:1180}],decors:[{bitmap:"common_tree1_1",width:28,height:40},{bitmap:"common_tree1_2",width:50,height:71},],availEnemyUnits:["human2Soldier","human2Archer","human2Magic"],rewardBuilds:[],rewardMagic:[],rewardUnits:["humanPriest"],rewardSkills:[],rewardSkillPoints:0,dialogs:[{helper:3,text:lang.level8_dialog1},{helper:1,text:lang.level8_dialog2},{helper:3,text:lang.level8_dialog3},]},{money:100,food:100,back:4,builds:[{type:"humanMine",x:100},{type:"humanCastle1",x:200},{type:"humanWell",x:300},{type:"humanHut2",x:400},{type:"humanHut1",x:450},{type:"humanHut1",x:500},{type:"humanHut1",x:630},{type:"human2Tower1",x:800},{type:"human2Tower2",x:850},{type:"human2Tower2",x:900},{type:"human2Castle4",x:1000},{type:"human2Tower2",x:1080},{type:"human2Tower2",x:1130},{type:"human2Tower1",x:1180}],decors:[{bitmap:"common_tree4_1",width:20,height:40},{bitmap:"common_tree4_2",width:36,height:71},],availEnemyUnits:["human2Soldier","human2Archer","human2Magic","human2Knight"],rewardBuilds:["humanCastle3","humanSmithy"],rewardMagic:[],rewardUnits:["humanKnight"],rewardSkills:[],rewardSkillPoints:0,dialogs:[{helper:3,text:lang.level9_dialog1},{helper:1,text:lang.level9_dialog2}]},{money:100,food:100,back:5,builds:[{type:"humanMine",x:100},{type:"humanCastle1",x:200},{type:"humanHut1",x:280},{type:"humanHut2",x:340},{type:"humanWell",x:400},{type:"humanHut1",x:450},{type:"humanHut1",x:550},{type:"orcCave",x:800},{type:"orcCave",x:900},{type:"orcCastle1",x:1000},{type:"orcCave",x:1100},{type:"orcCave",x:1200}],decors:[{bitmap:"common_tree5_1",width:38,height:50},{bitmap:"common_tree5_2",width:63,height:67},],availEnemyUnits:["orcSoldier","orcStrong"],rewardBuilds:[],rewardMagic:[],rewardUnits:[],rewardSkills:[{unit:"humanKnight",skill:1}],rewardSkillPoints:1,dialogs:[{helper:3,text:lang.level10_dialog1},{helper:1,text:lang.level10_dialog2}]},{money:100,food:100,back:2,builds:[{type:"humanMine",x:100},{type:"humanCastle1",x:200},{type:"humanHut1",x:350},{type:"humanHut2",x:400},{type:"humanHut1",x:450},{type:"humanHut1",x:500},{type:"orcCave",x:600},{type:"orcCave",x:700},{type:"orcCave",x:800},{type:"orcCastle1",x:900},{type:"orcCave",x:1000},{type:"orcCave",x:1100},{type:"orcCave",x:1200}],decors:[{bitmap:"common_tree2_1",width:28,height:40},{bitmap:"common_tree2_2",width:50,height:71},],availEnemyUnits:["orcSoldier","orcStrong"],rewardBuilds:[],rewardMagic:[],rewardUnits:["humanGryphon"],rewardSkills:[],rewardSkillPoints:0,dialogs:[{helper:3,text:lang.level11_dialog1},{helper:1,text:lang.level11_dialog2}]},{money:100,food:100,back:5,builds:[{type:"humanMine",x:100},{type:"humanCastle1",x:200},{type:"humanHut1",x:350},{type:"humanHut2",x:400},{type:"humanWell",x:450},{type:"humanHut1",x:500},{type:"orcCave",x:600},{type:"orcCave",x:700},{type:"orcCave",x:800},{type:"orcCastle2",x:900},{type:"orcCave",x:1000},{type:"orcCave",x:1100},{type:"orcCave",x:1200}],decors:[{bitmap:"common_tree5_1",width:38,height:50},{bitmap:"common_tree5_2",width:63,height:67},],availEnemyUnits:["orcSoldier","orcStrong","orcShield"],rewardBuilds:[],rewardMagic:[],rewardUnits:[],rewardSkills:[{unit:"humanGryphon",skill:1}],rewardSkillPoints:0,dialogs:[{helper:5,text:lang.level12_dialog1},{helper:1,text:lang.level12_dialog2},{helper:5,text:lang.level12_dialog3},{helper:1,text:lang.level12_dialog4}]},{money:100,food:100,back:5,builds:[{type:"humanMine",x:100},{type:"humanCastle1",x:200},{type:"humanHut1",x:350},{type:"humanHut1",x:400},{type:"humanWell",x:450},{type:"humanHut2",x:500},{type:"orcSawmill",x:600},{type:"orcCave",x:700},{type:"orcCave",x:800},{type:"orcCastle3",x:900},{type:"orcCave",x:1000},{type:"orcCave",x:1100},{type:"orcSawmill",x:1200}],decors:[{bitmap:"common_tree5_1",width:38,height:50},{bitmap:"common_tree5_2",width:63,height:67},],availEnemyUnits:["orcSoldier","orcStrong","orcShield","orcBeast"],rewardBuilds:["humanTavern"],rewardMagic:[],rewardUnits:["humanSaint"],rewardSkills:[],rewardSkillPoints:0,dialogs:[{helper:3,text:lang.level13_dialog1},{helper:1,text:lang.level13_dialog2}]},{money:100,food:100,back:3,builds:[{type:"humanMine",x:100},{type:"humanCastle1",x:200},{type:"humanHut1",x:350},{type:"humanWell",x:400},{type:"humanHut2",x:450},{type:"humanHut1",x:500},{type:"orcSawmill",x:600},{type:"orcButcher",x:700},{type:"orcCave",x:800},{type:"orcCastle4",x:900},{type:"orcCave",x:1000},{type:"orcButcher",x:1100},{type:"orcSawmill",x:1200}],decors:[{bitmap:"common_tree3_1",width:26,height:30},{bitmap:"common_tree3_2",width:43,height:50},],availEnemyUnits:["orcSoldier","orcStrong","orcShield","orcBeast"],rewardBuilds:[],rewardMagic:["magicQueen"],rewardUnits:[],rewardSkills:[{unit:"humanSaint",skill:1}],rewardSkillPoints:0,dialogs:[{helper:1,text:lang.level14_dialog1},{helper:3,text:lang.level14_dialog2},{helper:7,text:lang.level14_dialog3}]},{money:100,food:100,back:6,builds:[{type:"humanMine",x:100},{type:"humanCastle1",x:200},{type:"humanHut1",x:350},{type:"humanHut2",x:400},{type:"humanWell",x:450},{type:"humanHut1",x:500},{type:"humanHut1",x:600},{type:"human2Tower1",x:850},{type:"human2Tower2",x:900},{type:"orcCastle5",x:1000},{type:"human2Tower2",x:1100},{type:"human2Tower1",x:1150},],units:[{type:"dragon",x:1000}],decors:[{bitmap:"common_tree6_1",width:18,height:40},{bitmap:"common_tree6_2",width:29,height:60},],availEnemyUnits:["orcSoldier","orcStrong","orcShield","orcBeast","orcDragon","human2Soldier","human2Archer","human2Magic","human2Knight"],rewardBuilds:[],rewardMagic:[],rewardUnits:[],rewardSkills:[],rewardSkillPoints:0,dialogs:[{helper:1,text:lang.level15_dialog1},{helper:7,text:lang.level15_dialog2},{helper:1,text:lang.level15_dialog3},{helper:3,text:lang.level15_dialog4}]}];;var UpgradesManager={magicHeal:0,magicLight:0,magicQueen:0,buildings:[],units:[],skillPoints:0,findBuild:function(item)
{var self=UpgradesManager;for(i=0;i<self.buildings.length;i++)
{if(self.buildings[i]==item)return self.buildings[i];}
return false;},findUnit:function(item)
{var self=UpgradesManager;for(i=0;i<self.units.length;i++)
{if(self.units[i]==item)return self.units[i];}
return false;},applyLevel:function(id)
{var i,rewards;var level=Levels[id];var self=UpgradesManager;var descr=[];rewards=level.rewardMagic;for(i=0;i<rewards.length;i++)
{self[rewards[i]]=1;descr.push(self.getDescription("magic",rewards[i]));}
rewards=level.rewardBuilds;for(i=0;i<rewards.length;i++)
{if(!self.findBuild(rewards[i]))
{self.buildings.push(rewards[i]);descr.push(self.getDescription("building",rewards[i]));}}
rewards=level.rewardUnits;for(i=0;i<rewards.length;i++)
{if(!self.findUnit(rewards[i]))
{self.units.push({type:rewards[i],skills:[2,0,0,0]});descr.push(self.getDescription("unit",rewards[i]));}}
rewards=level.rewardSkills;for(i=0;i<rewards.length;i++)
{for(var n=0;n<self.units.length;n++)
{if(self.units[n].type==rewards[i].unit)
{self.units[n].skills[rewards[i].skill]=1;descr.push(self.getDescription("skill",rewards[i].unit,rewards[i].skill));}}}
if(level.rewardSkillPoints>0)
{self.skillPoints+=level.rewardSkillPoints;descr.push(self.getDescription("skillpoint"));}
return descr;},changeSkill:function(unitType,skillID,value)
{var self=UpgradesManager;var unit=self.getUnit(unitType);unit.skills[skillID]=value;},clear:function()
{var self=UpgradesManager;self.magicHeal=0;self.magicLight=0;self.magicQueen=0;self.skillPoints=0;self.buildings=["humanBarrack"];self.units=[];self.units.push({type:"humanWorker",skills:[]});self.units.push({type:"humanSoldier",skills:[2,0,0,0]});},load:function()
{var self=UpgradesManager;ExternalAPI.getUserData(setUserData);var data=ExternalAPI.loadUpgrades();self.magicHeal=data.magicHeal*1;self.magicLight=data.magicLight*1;self.magicQueen=data.magicQueen*1;self.buildings=["humanBarrack"];var builds=data.buildings;if(builds)
{self.buildings=builds.split(",");}
self.units=[];self.units.push({type:"humanWorker",skills:[]});self.units.push({type:"humanSoldier",skills:[2,0,0,0]});var units=data.units;if(units)
{var tmp,skills;self.units=[];units=units.split(",");for(var i=0;i<units.length;i++)
{tmp={};tmp.type=units[i];skills=data["skills_"+tmp.type];if(!skills)skills="";skills=skills.split(",");for(var n=0;n<skills.length;n++)skills[n]*=1;tmp.skills=skills;self.units.push(tmp);}}
if(ini.cheatMode)
{self.magicHeal=1;self.magicLight=1;self.magicQueen=1;self.buildings=[];for(var name in Builds)
{var b=Builds[name];if(b.fraction==1&&(b.type==BUILD_TYPE_CASTLE||b.type==BUILD_TYPE_RESPAWN))
{if(name!="humanCastle1")self.buildings.push(name);}}
self.units=[];for(var name in Units)
{var u=Units[name];if(u.fraction==1&&name!="elfQueen")
{var tmp={};tmp.type=name;tmp.skills=[2,2,2];self.units.push(tmp);}}}},save:function()
{var self=UpgradesManager;ExternalAPI.saveUserData(totalGameScores,UpgradesManager.skillPoints);var data={};data.magicHeal=self.magicHeal;data.magicLight=self.magicLight;data.magicQueen=self.magicQueen;data.buildings=self.buildings.join(",");var u=[];for(var i=0;i<self.units.length;i++)
{u.push(self.units[i].type);data["skills_"+self.units[i].type]=self.units[i].skills.join(",");}
data.units=u.join(",");ExternalAPI.saveUpgrades(data);},getUnit:function(type)
{var self=UpgradesManager;for(var i=0;i<self.units.length;i++)
{if(self.units[i].type==type)return self.units[i];}
return false;},getDescription:function(type,id,addopt)
{var descr={};if(type=="magic")
{if(id=="magicHeal")descr={name:lang.magic1_name,descr:"",icon:"icon_magic_heal2"};if(id=="magicLight")descr={name:lang.magic2_name,descr:"",icon:"icon_magic_light2"};if(id=="magicQueen")descr={name:lang.magic3_name,descr:"",icon:"icon_magic_queen2"};descr.scale=1;}
if(type=="building")
{var build=Builds[id];descr={name:build.name,descr:build.descr,icon:build.icon,scale:0.66};}
if(type=="unit")
{var unit=Units[id];descr={name:unit.name,descr:unit.descr,icon:unit.icon,scale:0.66};}
if(type=="skill")
{descr={name:"",descr:"",icon:""};if(id=="humanSoldier")
{if(addopt==0)descr={name:lang.unit_human2_skill1_name,descr:lang.unit_human2_skill1_descr,icon:"icon_skill_soldier0"};if(addopt==1)descr={name:lang.unit_human2_skill2_name,descr:lang.unit_human2_skill2_descr,icon:"icon_skill_soldier1"};if(addopt==2)descr={name:lang.unit_human2_skill3_name,descr:lang.unit_human2_skill3_descr,icon:"icon_skill_soldier2"};}
if(id=="humanArcher")
{if(addopt==0)descr={name:lang.unit_human3_skill1_name,descr:lang.unit_human3_skill1_descr,icon:"icon_skill_archer0"};if(addopt==1)descr={name:lang.unit_human3_skill2_name,descr:lang.unit_human3_skill2_descr,icon:"icon_skill_archer1"};if(addopt==2)descr={name:lang.unit_human3_skill3_name,descr:lang.unit_human3_skill3_descr,icon:"icon_skill_archer2"};}
if(id=="humanMagic")
{if(addopt==0)descr={name:lang.unit_human4_skill1_name,descr:lang.unit_human4_skill1_descr,icon:"icon_skill_magic0"};if(addopt==1)descr={name:lang.unit_human4_skill2_name,descr:lang.unit_human4_skill2_descr,icon:"icon_skill_magic1"};}
if(id=="humanPriest")
{if(addopt==0)descr={name:lang.unit_human5_skill1_name,descr:lang.unit_human5_skill1_descr,icon:"icon_skill_priest0"};}
if(id=="humanKnight")
{if(addopt==0)descr={name:lang.unit_human6_skill1_name,descr:lang.unit_human6_skill1_descr,icon:"icon_skill_knight0"};if(addopt==1)descr={name:lang.unit_human6_skill2_name,descr:lang.unit_human6_skill2_descr,icon:"icon_skill_knight1"};}
if(id=="humanGryphon")
{if(addopt==0)descr={name:lang.unit_human7_skill1_name,descr:lang.unit_human7_skill1_descr,icon:"icon_skill_gryphon0"};if(addopt==1)descr={name:lang.unit_human7_skill2_name,descr:lang.unit_human7_skill2_descr,icon:"icon_skill_gryphon1"};}
if(id=="humanSaint")
{if(addopt==0)descr={name:lang.unit_human8_skill1_name,descr:lang.unit_human8_skill1_descr,icon:"icon_skill_saint0"};if(addopt==1)descr={name:lang.unit_human8_skill2_name,descr:lang.unit_human8_skill2_descr,icon:"icon_skill_saint1"};}
descr.scale=1;}
if(type=="skillpoint")
{descr={name:lang.skill_point,descr:"",icon:"icon_skillpoint",scale:1};}
return descr;},getUnitAttackType:function(unit)
{var self=UpgradesManager;var type=unit.type2?unit.type2:unit.type;var u=self.getUnit(type);if(!u)return 0;if(type=="humanMagic")
{if(u.skills[1]==2)return 1;}
if(type=="humanSaint")
{if(u.skills[1]==2)return 1;}
if(type=="humanGryphon")
{if(u.skills[1]==2)return 1;}
return 0;},getUnitAttack:function(unit)
{var att=UpgradesManager.calcUnitAttack(unit);if(gameState==STATE_GAME)
{if(levelBonus.type==1)att=Math.round(att*(1+levelBonus.val/100));}
return att;},calcUnitAttack:function(unit)
{var self=UpgradesManager;var type=unit.type2?unit.type2:unit.type;var u=self.getUnit(type);if(!u)return unit.attack;if(type=="humanSoldier")
{if(u.skills[1]==2)return 25;if(u.skills[0]==2)return 20;return 0;}
if(type=="humanArcher")
{if(u.skills[1]==2)return 20;if(u.skills[0]==2)return 15;return 0;}
if(type=="humanMagic")
{if(u.skills[1]==2)return 20;if(u.skills[0]==2)return 24;return 0;}
if(type=="humanPriest")
{if(u.skills[0]==2)return 20;return 0;}
if(type=="humanKnight")
{if(u.skills[1]==2)return 25;if(u.skills[0]==2)return 20;return 0;}
if(type=="humanSaint")
{if(u.skills[0]==2)return 30;if(u.skills[1]==2)return 30;return 0;}
if(type=="humanGryphon")
{if(u.skills[1]==2)return 22;if(u.skills[0]==2)return 24;return 0;}
return unit.attack;},getUnitDefense:function(unit)
{var self=UpgradesManager;var type=unit.type2?unit.type2:unit.type;var u=self.getUnit(type);if(!u)return unit.defense;if(type=="humanSoldier")
{if(u.skills[2]==2)return unit.defense+2;}
return unit.defense;},getUnitAttackLength:function(unit,val)
{var self=UpgradesManager;var type=unit.type2?unit.type2:unit.type;var u=self.getUnit(type);if(!u)return val;if(unit.type=="humanArcher")
{if(u.skills[2]==2)return val+20;}
return val;}};;