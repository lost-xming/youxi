window.addEventListener('orientationchange', function (event) {
    setTimeout(function () {
        if(this.widget) {
            this.widget.element.style.display = (window.innerWidth > window.innerHeight ? "block" : "none");
            this.widget.updatePlacement();
        }
    }, TGS.BrowserDetect.onAndroid ? 500 : 0);
}, false);

function sg_tres_wid(num,xpos,ypos,siz) {
	try {
		this.widget = TGS.Widget.CreateWidget({
			x: 10,
			y: 10,
			shareMessage: "I swam " + num + " meters in Fishy Rush! Try to beat my record!",
			placementFunc: function() {
				return {
					x: 10*siz+xpos,
					y: 10*siz+ypos,
					scale: siz-0.2
				}
			}
		});
	} catch(e) {};
}

function sg_tres_hide() {
	try {
		if (this.widget != null && typeof this.widget !== "undefined") {
			this.widget.close();
		}
	} catch(e) {};
}
	
function sg_tres_ad() {
	try {
		TGS.Advertisement.DisplayInterstitialAd();
	} catch(e) {};
}

moreobj = document.getElementById("morebut_img");
function sg_more_show(xpos,ypos,siz) {
	if (moreobj) {
		moreobj.setAttribute('style','display: block; position: absolute; left: '+xpos+'px; top: '+ypos+'px; width:'+siz+'px; z-index: 1');
	}
}
function sg_more_hide() {
	if (moreobj) {
		moreobj.setAttribute('style','display: none');
	}
}

sg_focus = 1;
window.addEventListener("focus",sg_set_focus);
window.addEventListener("blur",sg_set_blur);
function sg_set_focus() {
	if (sg_focus == 0) {
		sg_focus = 1;
		gml_Script_gmcallback_focuson();
	}
}
function sg_set_blur() {
	if (sg_focus == 1) {
		sg_focus = 0;
		gml_Script_gmcallback_focusoff();
	}
}

function sg_get_language() {
	var lang = window.navigator.userLanguage || window.navigator.language;
    return lang.substring(0,2).toLowerCase();
}

function sg_buon_start() {
	try {
		startSession();
	} catch (e) {}
}

function sg_buon_end(num) {
	try {
		endSession({score:num});
	} catch (e) {}
}

function sg_unlock_android_music() {
	unlock_play = false;
	unlock_audio = document.getElementsByTagName('audio')[0];
	window.addEventListener("touchend", android_play_music, false);
}

function sg_android_music() {
	if (unlock_play == false) {
		unlock_play = true;
	} else {
		unlock_audio.play();
	}
}

function android_play_music() {
	if (unlock_play == true) {
		unlock_audio.play();
		window.removeEventListener("touchend", android_play_music, false);
	}
}

function sg_unlock_sound() {
	window.addEventListener("touchstart", ios_unlock_sound, false);
}

function ios_unlock_sound(event) {
	var buffer = g_WebAudioContext.createBuffer(1, 1, 22050);
	var source = g_WebAudioContext.createBufferSource();
	source.buffer = buffer;
	source.connect(g_WebAudioContext.destination);
	source.noteOn(0);
	window.removeEventListener("touchstart", ios_unlock_sound, false);
}

function sg_no_bar() {
	if(!window.location.hash)
	{
	   var divh = document.getElementById('gm4html5_div_id').style.height;
	   if (divh < (window.outerHeight + 200))
	   {
		 document.getElementById('gm4html5_div_id').style.height = (window.outerHeight + 200) + 'px';
	   }
	   setTimeout ( function(){ window.scrollTo(0,1); },50);
	}
}

function RenderLoadingBar_Standard(_graphics, _width, _height, _total, _current, _loadingscreen) {
	var ufoobj = document.getElementById("animated-img");
	if (ufoobj) {
		_loadingscreen.style.display = "none";
	}
	var canvasobj = document.getElementById("loading_screen");
	var room_width  = _width;
	var room_height = _height;
	var ratio = (room_height/room_width);
	if (typeof(window.innerWidth)=='number') {
		browser_width = window.innerWidth;
		browser_height = window.innerHeight;
	} else if (document.documentElement&&document.documentElement.clientWidth) {
		browser_width = document.documentElement.clientWidth;
		browser_height = document.documentElement.clientHeight;
	} else if (document.body&&document.body.clientWidth) {
		browser_width = document.body.clientWidth;
		browser_height = document.body.clientHeight;
	}
	var multi = (browser_height / room_height);
	var new_width = (room_width * multi);
	var new_height = browser_height;
	if (new_width > browser_width) {
		multi = (browser_width / room_width);
		new_width = (room_width * multi);
		new_height = (room_height * multi);
	}
	canvasobj.width = new_width;
	canvasobj.height = new_height;
	canvasobj.style.left = browser_width/2-new_width/2+"px";
	canvasobj.style.top = browser_height/2-new_height/2+"px";
	
	if (_loadingscreen) {
		_graphics.drawImage(_loadingscreen, 0, 0, new_width, new_height);
		if (_loadingscreen.style.display == "block") {
			_loadingscreen.style.display = "none";
		}
	}
	var yy = 436 * multi;
	var ww = 22 * multi;
	var perc = (_width / _total) * _current * multi;
	var loadgrad = _graphics.createLinearGradient(0, yy, 0, yy+ww);
	loadgrad.addColorStop(0, "rgba(190,255,255,255)");
	loadgrad.addColorStop(1, "rgba(0,230,255,255)");
	if (_current != 0)
	{
		_graphics.fillStyle = loadgrad;
		_graphics.fillRect(0, yy, perc, ww);
	}
}