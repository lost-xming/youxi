var ns_egret;
!
function(t) {
	var e = function() {
			function t() {
				this._hashCode = t.hashCount++
			}
			return Object.defineProperty(t.prototype, "hashCode", {
				get: function() {
					return this._hashCode
				},
				enumerable: !0,
				configurable: !0
			}), t.hashCount = 1, t
		}();
	t.HashObject = e
}(ns_egret || (ns_egret = {}));
var __extends = this.__extends ||
function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype, t.prototype = new i
};
!
function(t) {
	var e = function(t) {
			function e(e) {
				"undefined" == typeof e && (e = 300), t.call(this), this.objectPool = [], this._length = 0, 1 > e && (e = 1), this.autoDisposeTime = e, this.frameCount = 0
			}
			return __extends(e, t), e.prototype._checkFrame = function() {
				this.frameCount--, 0 >= this.frameCount && this.dispose()
			}, Object.defineProperty(e.prototype, "length", {
				get: function() {
					return this._length
				},
				enumerable: !0,
				configurable: !0
			}), e.prototype.push = function(t) {
				var i = this.objectPool; - 1 == i.indexOf(t) && (i.push(t), this._length++, 0 == this.frameCount && (this.frameCount = this.autoDisposeTime, e._callBackList.push(this)))
			}, e.prototype.pop = function() {
				return 0 == this._length ? null : (this._length--, this.objectPool.pop())
			}, e.prototype.dispose = function() {
				0 < this._length && (this.objectPool = [], this._length = 0), this.frameCount = 0;
				var t = e._callBackList,
					i = t.indexOf(this); - 1 != i && t.splice(i, 1)
			}, e._callBackList = [], e
		}(t.HashObject);
	t.Recycler = e
}(ns_egret || (ns_egret = {})), function(t) {
	t.__START_TIME, t.getTimer = function() {
		return Date.now() - t.__START_TIME
	}
}(ns_egret || (ns_egret = {})), function(t) {
	t.__callLaterFunctionList = [], t.__callLaterThisList = [], t.__callLaterArgsList = [], t.callLater = function(e, i) {
		for (var n = [], o = 0; o < arguments.length - 2; o++) n[o] = arguments[o + 2];
		t.__callLaterFunctionList.push(e), t.__callLaterThisList.push(i), t.__callLaterArgsList.push(n)
	}
}(ns_egret || (ns_egret = {})), __extends = this.__extends ||
function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype, t.prototype = new i
}, function(t) {
	var e = function(t) {
			function e(e, i, n) {
				"undefined" == typeof i && (i = !1), "undefined" == typeof n && (n = !1), t.call(this), this._eventPhase = 2, this._isPropagationImmediateStopped = this._isPropagationStopped = this._isDefaultPrevented = !1, this.isNew = !0, this._type = e, this._bubbles = i, this._cancelable = n
			}
			return __extends(e, t), Object.defineProperty(e.prototype, "type", {
				get: function() {
					return this._type
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(e.prototype, "bubbles", {
				get: function() {
					return this.bubbles
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(e.prototype, "cancelable", {
				get: function() {
					return this._cancelable
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(e.prototype, "eventPhase", {
				get: function() {
					return this._eventPhase
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(e.prototype, "currentTarget", {
				get: function() {
					return this._currentTarget
				},
				enumerable: !0,
				configurable: !0
			}), e.prototype._setCurrentTarget = function(t) {
				this._currentTarget = t
			}, Object.defineProperty(e.prototype, "target", {
				get: function() {
					return this._target
				},
				enumerable: !0,
				configurable: !0
			}), e.prototype.isDefaultPrevented = function() {
				return this._isDefaultPrevented
			}, e.prototype.preventDefault = function() {
				this._cancelable && (this._isDefaultPrevented = !0)
			}, e.prototype.stopPropagation = function() {
				this._bubbles && (this._isPropagationStopped = !0)
			}, e.prototype.stopImmediatePropagation = function() {
				this._bubbles && (this._isPropagationImmediateStopped = !0)
			}, e.prototype._reset = function() {
				this.isNew ? this.isNew = !1 : (this._isPropagationImmediateStopped = this._isPropagationStopped = this._isDefaultPrevented = !1, this._currentTarget = this._target = null, this._eventPhase = 2)
			}, e.ADDED_TO_STAGE = "addedToStage", e.REMOVED_FROM_STAGE = "removedFromStage", e.ADDED = "added", e.REMOVED = "removed", e.COMPLETE = "complete", e.ENTER_FRAME = "enterFrame", e.RENDER = "render", e.FINISH_RENDER = "finishRender", e.FINISH_UPDATE_TRANSFORM = "finishUpdateTransform", e.LEAVE_STAGE = "leaveStage", e.RESIZE = "resize", e.CHANGE = "change", e
		}(t.HashObject);
	t.Event = e
}(ns_egret || (ns_egret = {})), __extends = this.__extends ||
function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype, t.prototype = new i
}, function(t) {
	var e = function(e) {
			function i(t, i, n, o, s, r, a, h, l, p) {
				"undefined" == typeof i && (i = !0), "undefined" == typeof n && (n = !0), "undefined" == typeof o && (o = 0), "undefined" == typeof s && (s = 0), "undefined" == typeof r && (r = 0), "undefined" == typeof a && (a = !1), "undefined" == typeof h && (h = !1), "undefined" == typeof p && (p = !1), e.call(this, t, i, n), this._localY = this._localX = this._stageY = this._stageX = 0, this.touchPointID = o, this._stageX = s, this._stageY = r, this.ctrlKey = a, this.altKey = h, this.touchDown = p
			}
			return __extends(i, e), Object.defineProperty(i.prototype, "stageX", {
				get: function() {
					return this._stageX
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "stageY", {
				get: function() {
					return this._stageY
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "localX", {
				get: function() {
					return this._localX
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "localY", {
				get: function() {
					return this._localY
				},
				enumerable: !0,
				configurable: !0
			}), i.prototype._setCurrentTarget = function(i) {
				e.prototype._setCurrentTarget.call(this, i), i instanceof t.DisplayObject && (i = i.globalToLocal(this._stageX, this._stageY), this._localX = i.x, this._localY = i.y)
			}, i.prototype.updateAfterEvent = function() {}, i.TOUCH_TAP = "touchTap", i.TOUCH_MOVE = "touchMove", i.TOUCH_BEGAN = "touchBegan", i.TOUCH_END = "touchEnd", i.TOUCH_RELEASE_OUTSIDE = "touchReleaseOutside", i.TOUCH_ROLL_OUT = "touchRollOut", i.TOUCH_ROLL_OVER = "touchRollOver", i.TOUCH_OUT = "touchOut", i.TOUCH_OVER = "touchOver", i
		}(t.Event);
	t.TouchEvent = e
}(ns_egret || (ns_egret = {})), __extends = this.__extends ||
function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype, t.prototype = new i
}, function(t) {
	var e = function(t) {
			function e(e, i, n) {
				"undefined" == typeof i && (i = !1), "undefined" == typeof n && (n = !1), t.call(this, e, i, n)
			}
			return __extends(e, t), e.prototype.updateAfterEvent = function() {}, e.TIMER = "timer", e.TIMER_COMPLETE = "timerComplete", e
		}(t.Event);
	t.TimerEvent = e
}(ns_egret || (ns_egret = {})), function(t) {
	var e = function() {
			function t() {}
			return t.CAPTURING_PHASE = 1, t.AT_TARGET = 2, t.BUBBLING_PHASE = 3, t
		}();
	t.EventPhase = e
}(ns_egret || (ns_egret = {})), __extends = this.__extends ||
function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype, t.prototype = new i
}, function(t) {
	var e = function(e) {
			function i(t) {
				"undefined" == typeof t && (t = null), e.call(this), this._isUseCapture = !1, this._eventTarget = t ? t : this
			}
			return __extends(i, e), i.prototype.addEventListener = function(e, i, n, o, s) {
				"undefined" == typeof o && (o = !1), "undefined" == typeof s && (s = 0), t.DEBUG && t.DEBUG.ADD_EVENT_LISTENER && t.DEBUG.checkAddEventListener(e, i, n, o, s), o ? (this._captureEventsMap || (this._captureEventsMap = {}), o = this._captureEventsMap) : (this._eventsMap || (this._eventsMap = {}), o = this._eventsMap);
				var r = o[e];
				r || (r = o[e] = []), this._insertEventBin(r, i, n, s)
			}, i.prototype._insertEventBin = function(t, e, i, n) {
				for (var o = -1, s = t.length, r = 0; s > r; r++) {
					var a = t[r];
					if (a.listener === e && a.thisObject === i) return !1; - 1 == o && a.priority < n && (o = r)
				}
				return e = {
					listener: e,
					thisObject: i,
					priority: n
				}, -1 != o ? t.splice(o, 0, e) : t.push(e), !0
			}, i.prototype.removeEventListener = function(t, e, i, n) {
				if ("undefined" == typeof n && (n = !1), n = n ? this._captureEventsMap : this._eventsMap) {
					var o = n[t];
					o && (this._removeEventBin(o, e, i), 0 == o.length && delete n[t])
				}
			}, i.prototype._removeEventBin = function(t, e, i) {
				for (var n = t.length, o = 0; n > o; o++) {
					var s = t[o];
					if (s.listener === e && s.thisObject === i) return t.splice(o, 1), !0
				}
				return !1
			}, i.prototype.hasEventListener = function(t) {
				return this._eventsMap && this._eventsMap[t] || this._captureEventsMap && this._captureEventsMap[t]
			}, i.prototype.willTrigger = function(t) {
				return this.hasEventListener(t)
			}, i.prototype.dispatchEvent = function(t) {
				return t._reset(), t._target = this._eventTarget, t._setCurrentTarget(this._eventTarget), this._notifyListener(t)
			}, i.prototype._notifyListener = function(t) {
				var e = 1 == t._eventPhase ? this._captureEventsMap : this._eventsMap;
				if (!e) return !0;
				if (e = e[t.type], !e) return !0;
				for (var e = e.concat(), i = e.length, n = 0; i > n; n++) {
					var o = e[n];
					if (o.listener.call(o.thisObject, t), t._isPropagationImmediateStopped) break
				}
				return !t.isDefaultPrevented()
			}, i.prototype.dispatchEventWith = function(e, n, o) {
				"undefined" == typeof n && (n = !1), "undefined" == typeof o && (o = null);
				var s = i.eventRecycler,
					r = s.pop();
				r || (r = new t.Event("")), r._type = e, r._bubbles = n, r.data = o, this.dispatchEvent(r), s.push(r)
			}, i.eventRecycler = new t.Recycler, i
		}(t.HashObject);
	t.EventDispatcher = e
}(ns_egret || (ns_egret = {})), __extends = this.__extends ||
function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype, t.prototype = new i
}, function(t) {
	var e = function(e) {
			function i() {
				e.call(this), this.reuseEvent = new t.Event("")
			}
			return __extends(i, e), i.prototype.run = function() {
				t.Ticker.getInstance().run(), t.Ticker.getInstance().register(this.renderLoop, this, Number.MIN_VALUE), t.Ticker.getInstance().register(this.broadcastEnterFrame, this, Number.MAX_VALUE), this.touchContext.run()
			}, i.prototype.renderLoop = function(e) {
				e = this.rendererContext, e.clearScreen(), this.dispatchEventWith(t.Event.RENDER), t.Stage._invalidateRenderFlag && (this.broadcastRender(), t.Stage._invalidateRenderFlag = !1), this.doCallLaterList(), this.stage.updateTransform(), this.dispatchEventWith(t.Event.FINISH_UPDATE_TRANSFORM), this.stage.draw(e), this.dispatchEventWith(t.Event.FINISH_RENDER)
			}, i.prototype.broadcastEnterFrame = function(e) {
				e = this.reuseEvent, e._type = t.Event.ENTER_FRAME, this.dispatchEvent(e);
				for (var i = t.DisplayObject._enterFrameCallBackList.concat(), n = i.length, o = 0; n > o; o++) {
					var s = i[o];
					e._target = s.display, e._setCurrentTarget(s.display), s.listener.call(s.thisObject, e)
				}
				for (i = t.Recycler._callBackList, o = i.length - 1; o >= 0; o--) i[o]._checkFrame()
			}, i.prototype.broadcastRender = function() {
				var e = this.reuseEvent;
				e._type = t.Event.RENDER;
				for (var i = t.DisplayObject._renderCallBackList.concat(), n = i.length, o = 0; n > o; o++) {
					var s = i[o];
					e._target = s.display, e._setCurrentTarget(s.display), s.listener.call(s.thisObject, e)
				}
			}, i.prototype.doCallLaterList = function() {
				if (0 != t.__callLaterFunctionList.length) {
					var e = t.__callLaterFunctionList;
					t.__callLaterFunctionList = [];
					var i = t.__callLaterThisList;
					t.__callLaterThisList = [];
					var n = t.__callLaterArgsList;
					t.__callLaterArgsList = [];
					for (var o = e.length, s = 0; o > s; s++) {
						var r = e[s];
						null != r && r.apply(i[s], n[s])
					}
				}
			}, i
		}(t.EventDispatcher);
	t.MainContext = e
}(ns_egret || (ns_egret = {})), ns_egret.MainContext.instance = new ns_egret.MainContext, function(t) {
	var e = function() {
			function e() {
				this._tick = this._preDrawCount = this._updateTransformPerformanceCost = this._renderPerformanceCost = this._logicPerformanceCost = this._lastFrameTime = this._lastTime = 0
			}
			return e.getInstance = function() {
				return null == e.instance && (e.instance = new e), e.instance
			}, e.prototype.run = function() {
				t.Ticker.getInstance().register(this.update, this), null == this._txt && (this._txt = new t.TextField, this._txt.size = 28, t.MainContext.instance.stage.addChild(this._txt));
				var e = t.MainContext.instance;
				e.addEventListener(t.Event.ENTER_FRAME, this.onEnterFrame, this), e.addEventListener(t.Event.RENDER, this.onStartRender, this), e.addEventListener(t.Event.FINISH_RENDER, this.onFinishRender, this), e.addEventListener(t.Event.FINISH_UPDATE_TRANSFORM, this.onFinishUpdateTransform, this)
			}, e.prototype.onEnterFrame = function() {
				this._lastTime = t.getTimer()
			}, e.prototype.onStartRender = function(e) {
				e = t.getTimer(), this._logicPerformanceCost = e - this._lastTime, this._lastTime = e
			}, e.prototype.onFinishUpdateTransform = function(e) {
				e = t.getTimer(), this._updateTransformPerformanceCost = e - this._lastTime, this._lastTime = e
			}, e.prototype.onFinishRender = function(e) {
				e = t.getTimer(), this._renderPerformanceCost = e - this._lastTime, this._lastTime = e
			}, e.prototype.update = function(e) {
				var i = t.getTimer();
				if (e = i - this._lastFrameTime, this._lastFrameTime = i, this._tick++, 6 == this._tick) {
					this._tick = 0;
					var i = (this._preDrawCount - 1).toString(),
						n = Math.ceil(this._logicPerformanceCost).toString() + "," + Math.ceil(this._updateTransformPerformanceCost).toString() + "," + Math.ceil(this._renderPerformanceCost).toString() + "," + Math.ceil(t.MainContext.instance.rendererContext.renderCost).toString();
					this._txt.text = i + "\n" + n + "\n" + Math.floor(1e3 / e).toString()
				}
				this._preDrawCount = 0
			}, e.prototype.onDrawImage = function() {
				this._preDrawCount++
			}, e
		}();
	t.Profiler = e
}(ns_egret || (ns_egret = {})), __extends = this.__extends ||
function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype, t.prototype = new i
}, function(t) {
	var e = function(e) {
			function i() {
				e.apply(this, arguments), this._timeScale = 1, this._paused = !1, this.callBackList = []
			}
			return __extends(i, e), i.prototype.run = function() {
				t.__START_TIME = (new Date).getTime(), t.MainContext.instance.deviceContext.executeMainLoop(this.update, this)
			}, i.prototype.update = function(t) {
				var e = this.callBackList.concat(),
					i = e.length;
				t *= this._timeScale, t *= this._timeScale;
				for (var n = 0; i > n; n++) {
					var o = e[n];
					o.listener.call(o.thisObject, t)
				}
			}, i.prototype.register = function(t, e, i) {
				"undefined" == typeof i && (i = 0), this._insertEventBin(this.callBackList, t, e, i)
			}, i.prototype.unregister = function(t, e) {
				this._removeEventBin(this.callBackList, t, e)
			}, i.prototype.callLater = function(t, e, i) {
				"undefined" == typeof i && (i = 0);
				var n = this,
					o = 0;
				this.register(function(s) {
					0 == i ? (n.unregister(arguments.callee, e), t.apply(e)) : (o += s, o >= i && (n.unregister(arguments.callee, e), t.apply(e)))
				}, e)
			}, i.prototype.setTimeout = function(t, e, i) {
				for (var n = [], o = 0; o < arguments.length - 3; o++) n[o] = arguments[o + 3];
				var s = this,
					r = 0;
				this.register(function(o) {
					0 == i ? (s.unregister(arguments.callee, e), t.apply(e, n)) : (r += o, r >= i && (s.unregister(arguments.callee, e), t.apply(e, n)))
				}, e)
			}, i.prototype.setTimeScale = function(t) {
				this._timeScale = t
			}, i.prototype.getTimeScale = function() {
				return this._timeScale
			}, i.prototype.pause = function() {
				this._paused = !0
			}, i.prototype.resume = function() {
				this._paused = !1
			}, i.getInstance = function() {
				return null == i.instance && (i.instance = new i), i.instance
			}, i.now = function() {
				return t.getTimer()
			}, i
		}(t.EventDispatcher);
	t.Ticker = e
}(ns_egret || (ns_egret = {})), function(t) {
	var e = function() {
			function t() {}
			return t.LEFT = "left", t.RIGHT = "right", t.CENTER = "center", t.JUSTIFY = "justify", t.CONTENT_JUSTIFY = "contentJustify", t
		}();
	t.HorizontalAlign = e
}(ns_egret || (ns_egret = {})), function(t) {
	var e = function() {
			function t() {}
			return t.TOP = "top", t.BOTTOM = "bottom", t.MIDDLE = "middle", t.JUSTIFY = "justify", t.CONTENT_JUSTIFY = "contentJustify", t
		}();
	t.VerticalAlign = e
}(ns_egret || (ns_egret = {})), __extends = this.__extends ||
function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype, t.prototype = new i
}, function(t) {
	var e = function(e) {
			function i(t, i) {
				"undefined" == typeof t && (t = 1e3), "undefined" == typeof i && (i = 0), e.call(this), this._currentCount = 0, this.delay = t, this.repeatCount = i
			}
			return __extends(i, e), i.prototype.currentCount = function() {
				return this._currentCount
			}, i.prototype.running = function() {
				return this._running
			}, i.prototype.reset = function() {
				this.stop(), this._currentCount = 0
			}, i.prototype.start = function() {
				this._running || (this.lastTime = t.getTimer(), 0 != this._currentCount && (this._currentCount = 0), t.Ticker.getInstance().register(this.onEnterFrame, this), this._running = !0)
			}, i.prototype.stop = function() {
				this._running && (t.Ticker.getInstance().unregister(this.onEnterFrame, this), this._running = !1)
			}, i.prototype.onEnterFrame = function(e) {
				i.timerEvent || (i.timerEvent = new t.TimerEvent(t.TimerEvent.TIMER)), e = i.timerEvent;
				var n = t.getTimer();
				n - this.lastTime > this.delay && (this.lastTime = n, this._currentCount++, e._type = t.TimerEvent.TIMER, this.dispatchEvent(e), 0 < this.repeatCount && this._currentCount >= this.repeatCount && (this.stop(), e._type = t.TimerEvent.TIMER_COMPLETE, this.dispatchEvent(e)))
			}, i
		}(t.EventDispatcher);
	t.Timer = e
}(ns_egret || (ns_egret = {})), function(t) {
	t.getQualifiedClassName = function(t) {
		var i;
		if (t = t.prototype ? t.prototype.constructor : t.__proto__.constructor, !e[t]) {
			i = t.toString();
			var n = i.indexOf("(");
			i = i.substring(9, n), e[t] = i
		}
		return e[t]
	};
	var e = {}
}(ns_egret || (ns_egret = {})), function(t) {
	var e = {};
	t.getDefinitionByName = function(t) {
		if (!t) return null;
		var i = e[t];
		if (i) return i;
		for (var n = t.split("."), o = n.length, i = window, s = 0; o > s; s++) if (i = i[n[s]], !i) return null;
		return e[t] = i
	}
}(ns_egret || (ns_egret = {})), function(t) {
	t.hasDefinition = function(e) {
		return t.getDefinitionByName(e) ? !0 : !1
	}
}(ns_egret || (ns_egret = {})), function(t) {
	t.toColorString = function(t) {
		for ((isNaN(t) || 0 > t) && (t = 0), t > 16777215 && (t = 16777215), t = t.toString(16).toUpperCase(); 6 > t.length;) t = "0" + t;
		return "#" + t
	}
}(ns_egret || (ns_egret = {})), __extends = this.__extends ||
function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype, t.prototype = new i
}, function(t) {
	var e = function(e) {
			function i(t, i, n, o, s, r) {
				"undefined" == typeof t && (t = 1), "undefined" == typeof i && (i = 0), "undefined" == typeof n && (n = 0), "undefined" == typeof o && (o = 1), "undefined" == typeof s && (s = 0), "undefined" == typeof r && (r = 0), e.call(this), this.a = t, this.b = i, this.c = n, this.d = o, this.tx = s, this.ty = r, this.invert = function() {
					var t = this.a,
						e = this.b,
						i = this.c,
						n = this.d,
						o = this.tx,
						s = t * n - e * i;
					return this.a = n / s, this.b = -e / s, this.c = -i / s, this.d = t / s, this.tx = (i * this.ty - n * o) / s, this.ty = -(t * this.ty - e * o) / s, this
				}
			}
			return __extends(i, e), i.prototype.prepend = function(t, e, i, n, o, s) {
				var r = this.tx;
				if (1 != t || 0 != e || 0 != i || 1 != n) {
					var a = this.a,
						h = this.c;
					this.a = a * t + this.b * i, this.b = a * e + this.b * n, this.c = h * t + this.d * i, this.d = h * e + this.d * n
				}
				return this.tx = r * t + this.ty * i + o, this.ty = r * e + this.ty * n + s, this
			}, i.prototype.append = function(t, e, i, n, o, s) {
				var r = this.a,
					a = this.b,
					h = this.c,
					l = this.d;
				return this.a = t * r + e * h, this.b = t * a + e * l, this.c = i * r + n * h, this.d = i * a + n * l, this.tx = o * r + s * h + this.tx, this.ty = o * a + s * l + this.ty, this
			}, i.prototype.prependMatrix = function(t) {
				return this.prepend(t.a, t.b, t.c, t.d, t.tx, t.ty), this
			}, i.prototype.appendMatrix = function(t) {
				return this.append(t.a, t.b, t.c, t.d, t.tx, t.ty), this
			}, i.prototype.prependTransform = function(t, e, n, o, s, r, a, h, l) {
				if (s % 360) {
					var p = s * i.DEG_TO_RAD;
					s = Math.cos(p), p = Math.sin(p)
				} else s = 1, p = 0;
				return (h || l) && (this.tx -= h, this.ty -= l), r || a ? (r *= i.DEG_TO_RAD, a *= i.DEG_TO_RAD, this.prepend(s * n, p * n, -p * o, s * o, 0, 0), this.prepend(Math.cos(a), Math.sin(a), -Math.sin(r), Math.cos(r), t, e)) : this.prepend(s * n, p * n, -p * o, s * o, t, e), this
			}, i.prototype.appendTransform = function(t, e, n, o, s, r, a, h, l) {
				if (s % 360) {
					var p = s * i.DEG_TO_RAD;
					s = Math.cos(p), p = Math.sin(p)
				} else s = 1, p = 0;
				return r || a ? (r *= i.DEG_TO_RAD, a *= i.DEG_TO_RAD, this.append(Math.cos(a), Math.sin(a), -Math.sin(r), Math.cos(r), t, e), this.append(s * n, p * n, -p * o, s * o, 0, 0)) : this.append(s * n, p * n, -p * o, s * o, t, e), (h || l) && (this.tx -= h * this.a + l * this.c, this.ty -= h * this.b + l * this.d), this
			}, i.prototype.appendTransformFromDisplay = function(t) {
				var e, i;
				return 0 != t.anchorX || 0 != t.anchorY ? (i = t.getBounds(), e = i.width * t.anchorX, i = i.height * t.anchorY) : (e = t.anchorOffsetX, i = t.anchorOffsetY), this.identity(), this.appendTransform(t.x, t.y, t.scaleX, t.scaleY, t.rotation, t.skewX, t.skewY, e, i), this
			}, i.prototype.rotate = function(t) {
				var e = Math.cos(t);
				t = Math.sin(t);
				var i = this.a,
					n = this.c,
					o = this.tx;
				return this.a = i * e - this.b * t, this.b = i * t + this.b * e, this.c = n * e - this.d * t, this.d = n * t + this.d * e, this.tx = o * e - this.ty * t, this.ty = o * t + this.ty * e, this
			}, i.prototype.skew = function(t, e) {
				return t *= i.DEG_TO_RAD, e *= i.DEG_TO_RAD, this.append(Math.cos(e), Math.sin(e), -Math.sin(t), Math.cos(t), 0, 0), this
			}, i.prototype.scale = function(t, e) {
				return this.a *= t, this.d *= e, this.c *= t, this.b *= e, this.tx *= t, this.ty *= e, this
			}, i.prototype.translate = function(t, e) {
				return this.tx += t, this.ty += e, this
			}, i.prototype.identity = function() {
				return this.a = this.d = 1, this.b = this.c = this.tx = this.ty = 0, this
			}, i.prototype.isIdentity = function() {
				return 0 == this.tx && 0 == this.ty && 1 == this.a && 0 == this.b && 0 == this.c && 1 == this.d
			}, i.prototype.transformPoint = function(t, e, i) {
				return i = i || {}, i.x = t * this.a + e * this.c + this.tx, i.y = t * this.b + e * this.d + this.ty, i
			}, i.prototype.decompose = function(t) {
				null == t && (t = {}), t.x = this.tx, t.y = this.ty, t.scaleX = Math.sqrt(this.a * this.a + this.b * this.b), t.scaleY = Math.sqrt(this.c * this.c + this.d * this.d);
				var e = Math.atan2(-this.c, this.d),
					n = Math.atan2(this.b, this.a);
				return e == n ? (t.rotation = n / i.DEG_TO_RAD, 0 > this.a && 0 <= this.d && (t.rotation += 0 >= t.rotation ? 180 : -180), t.skewX = t.skewY = 0) : (t.skewX = e / i.DEG_TO_RAD, t.skewY = n / i.DEG_TO_RAD), t
			}, i.transformCoords = function(e, i, n) {
				var o = new t.Point(0, 0);
				return o.x = e.a * i + e.c * n + e.tx, o.y = e.d * n + e.b * i + e.ty, o
			}, i.identity = new i, i.DEG_TO_RAD = Math.PI / 180, i
		}(t.HashObject);
	t.Matrix = e
}(ns_egret || (ns_egret = {})), __extends = this.__extends ||
function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype, t.prototype = new i
}, function(t) {
	var e = function(t) {
			function e(e, i) {
				"undefined" == typeof e && (e = 0), "undefined" == typeof i && (i = 0), t.call(this), this.x = e, this.y = i
			}
			return __extends(e, t), e.prototype.clone = function() {
				return new e(this.x, this.y)
			}, e.identity = new e(0, 0), e
		}(t.HashObject);
	t.Point = e
}(ns_egret || (ns_egret = {})), __extends = this.__extends ||
function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype, t.prototype = new i
}, function(t) {
	var e = function(t) {
			function e(e, i, n, o) {
				"undefined" == typeof e && (e = 0), "undefined" == typeof i && (i = 0), "undefined" == typeof n && (n = 0), "undefined" == typeof o && (o = 0), t.call(this), this.x = e, this.y = i, this.width = n, this.height = o
			}
			return __extends(e, t), Object.defineProperty(e.prototype, "right", {
				get: function() {
					return this.x + this.width
				},
				set: function(t) {
					this.width = t - this.x
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(e.prototype, "bottom", {
				get: function() {
					return this.y + this.height
				},
				set: function(t) {
					this.height = t - this.y
				},
				enumerable: !0,
				configurable: !0
			}), e.prototype.initialize = function(t, e, i, n) {
				return this.x = t, this.y = e, this.width = i, this.height = n, this
			}, e.prototype.contains = function(t, e) {
				return this.x <= t && this.x + this.width >= t && this.y <= e && this.y + this.height >= e
			}, e.prototype.intersects = function(t) {
				return this.contains(t.x, t.y) || this.contains(t.x, t.bottom) || this.contains(t.right, t.y) || this.contains(t.right, t.bottom) ? !0 : !1
			}, e.prototype.clone = function() {
				return new e(this.x, this.y, this.width, this.height)
			}, e.identity = new e(0, 0, 0, 0), e
		}(t.HashObject);
	t.Rectangle = e
}(ns_egret || (ns_egret = {})), function(t) {
	var e = function() {
			function e() {}
			return e.fatal = function(e, i) {
				throw "undefined" == typeof i && (i = null), t.Logger.traceToConsole("Fatal", e, i), Error(t.Logger.getTraceCode("Fatal", e, i))
			}, e.info = function(e, i) {
				"undefined" == typeof i && (i = null), t.Logger.traceToConsole("Info", e, i)
			}, e.warning = function(e, i) {
				"undefined" == typeof i && (i = null), t.Logger.traceToConsole("Warning", e, i)
			}, e.traceToConsole = function(e, i, n) {
				console.log(t.Logger.getTraceCode(e, i, n))
			}, e.getTraceCode = function(t, e, i) {
				return "[" + t + "]" + e + ":" + (null == i ? "" : i)
			}, e
		}();
	t.Logger = e
}(ns_egret || (ns_egret = {})), __extends = this.__extends ||
function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype, t.prototype = new i
}, function(t) {
	var e = function(e) {
			function o() {
				e.call(this), this._originalDesignHeight = this._originalDesignWidth = this._designHeight = this._designWidth = 0, this._scaleY = this._scaleX = 1, this._frame = document.getElementById(o.canvas_div_name);
				var t = document.getElementById(o.canvas_name),
					i = t.width,
					t = t.height;
				this._designWidth = i, this._designHeight = t, this._originalDesignWidth = i, this._originalDesignHeight = t
			}
			return __extends(o, e), o.getInstance = function() {
				return null == o.instance && (n.initialize(), s.initialize(), o.instance = new o), o.instance
			}, o.prototype.setFrameSize = function() {
				throw Error("??????????????????????????????????????????????????????")
			}, o.prototype.setDesignSize = function(e, i, n) {
				isNaN(e) || 0 == e || isNaN(i) || 0 == i ? t.Logger.info("Resolution Error") : (this.setResolutionPolicy(n), this._designWidth = e, this._designHeight = i, this._originalDesignWidth = e, this._originalDesignHeight = i, this._resolutionPolicy.apply(this, this._designWidth, this._designHeight))
			}, o.prototype.setResolutionPolicy = function(e) {
				if (e instanceof i) this._resolutionPolicy = e;
				else switch (e) {
				case i.FIXED_HEIGHT:
					this._resolutionPolicy = new i(n.EQUAL_TO_FRAME, s.FIXED_HEIGHT);
					break;
				case i.FIXED_WIDTH:
					this._resolutionPolicy = new i(n.EQUAL_TO_FRAME, s.FIXED_WIDTH)
				}
				null != this._resolutionPolicy ? this._resolutionPolicy.init(this) : t.Logger.fatal("???????????????resolutionPolicy")
			}, o.prototype.getScaleX = function() {
				return this._scaleX
			}, o.prototype.getScaleY = function() {
				return this._scaleY
			}, o.canvas_name = "gameCanvas", o.canvas_div_name = "gameDiv", o
		}(t.HashObject);
	t.StageDelegate = e;
	var i = function() {
			function t(t, e) {
				this.setContainerStrategy(t), this.setContentStrategy(e)
			}
			return t.prototype.init = function(t) {
				this._containerStrategy.init(t), this._contentStrategy.init(t)
			}, t.prototype.apply = function(t, e, i) {
				return this._containerStrategy.apply(t, e, i), this._contentStrategy.apply(t, e, i)
			}, t.prototype.setContainerStrategy = function(t) {
				t instanceof n && (this._containerStrategy = t)
			}, t.prototype.setContentStrategy = function(t) {
				t instanceof s && (this._contentStrategy = t)
			}, t.FIXED_HEIGHT = 1, t.FIXED_WIDTH = 2, t
		}();
	t.ResolutionPolicy = i;
	var n = function() {
			function t() {}
			return t.initialize = function() {
				t.EQUAL_TO_FRAME = new o
			}, t.prototype.init = function() {}, t.prototype.apply = function() {}, t.prototype._setupContainer = function() {
				var t, e = document.body;
				e && (t = e.style) && (t.paddingTop = t.paddingTop || "0px", t.paddingRight = t.paddingRight || "0px", t.paddingBottom = t.paddingBottom || "0px", t.paddingLeft = t.paddingLeft || "0px", t.borderTop = t.borderTop || "0px", t.borderRight = t.borderRight || "0px", t.borderBottom = t.borderBottom || "0px", t.borderLeft = t.borderLeft || "0px", t.marginTop = t.marginTop || "0px", t.marginRight = t.marginRight || "0px", t.marginBottom = t.marginBottom || "0px", t.marginLeft = t.marginLeft || "0px")
			}, t
		}();
	t.ContainerStrategy = n;
	var o = function(t) {
			function e() {
				t.apply(this, arguments)
			}
			return __extends(e, t), e.prototype.apply = function() {
				this._setupContainer()
			}, e
		}(n);
	t.EqualToFrame = o;
	var s = function() {
			function t() {}
			return t.initialize = function() {
				t.FIXED_HEIGHT = new r, t.FIXED_WIDTH = new a
			}, t.prototype.init = function() {}, t.prototype.apply = function() {}, t.FIXED_HEIGHT = null, t.FIXED_WIDTH = null, t
		}();
	t.ContentStrategy = s;
	var r = function(t) {
			function i() {
				t.apply(this, arguments)
			}
			return __extends(i, t), i.prototype.apply = function(t, i, n) {
				var o = document.getElementById(e.canvas_name),
					s = document.getElementById(e.canvas_div_name),
					r = o.height / n,
					a = window.innerHeight,
					r = a / n,
					h = i * r;
				o.width = i, o.height = n, o.style.width = h + "px", o.style.height = a + "px", s.style.width = h + "px", s.style.height = a + "px", t._scaleX = r, t._scaleY = r
			}, i
		}(s);
	t.FixedHeight = r;
	var a = function(t) {
			function i() {
				t.apply(this, arguments)
			}
			return __extends(i, t), i.prototype.apply = function(t, i, n) {
				n = document.getElementById(e.canvas_name);
				var o = document.getElementById(e.canvas_div_name),
					s = document.documentElement.clientWidth,
					r = document.documentElement.clientHeight,
					a = s / i;
				n.width = i, n.height = r / a, n.style.width = s + "px", n.style.height = r + "px", o.style.width = s + "px", o.style.height = r + "px", t._scaleX = a, t._scaleY = a
			}, i
		}(s);
	t.FixedWidth = a;
	var h = function(t) {
			function i(e, i) {
				t.call(this), this.width = e, this.height = i
			}
			return __extends(i, t), i.prototype.apply = function(t, i, n) {
				n = document.getElementById(e.canvas_name);
				var o = document.getElementById(e.canvas_div_name),
					s = this.width,
					r = this.height,
					a = s / i;
				n.width = i, n.height = r / a, n.style.width = s + "px", n.style.height = r + "px", o.style.width = s + "px", o.style.height = r + "px", t._scaleX = a, t._scaleY = a
			}, i
		}(s);
	t.FixedSize = h
}(ns_egret || (ns_egret = {})), __extends = this.__extends ||
function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype, t.prototype = new i
}, function(t) {
	var e = function(e) {
			function i() {
				e.call(this), this._originalData = {}, this._drawAreaList = []
			}
			return __extends(i, e), i.getInstance = function() {
				return null == i.instance && (i.instance = new i), i.instance
			}, i.prototype.addDrawArea = function(t) {
				this._drawAreaList.push(t)
			}, i.prototype.clearDrawArea = function() {
				this._drawAreaList = []
			}, i.prototype.drawImage = function(e, i, n, o, s, r, a, h, l, p) {
				a = a || 0, h = h || 0;
				var c = i._texture_to_render;
				if (null != c) {
					this._originalData.sourceX = n, this._originalData.sourceY = o, this._originalData.sourceWidth = s, this._originalData.sourceHeight = r, this._originalData.destX = a, this._originalData.destY = h, this._originalData.destWidth = l, this._originalData.destHeight = p;
					for (var u = this.getDrawAreaList(), d = 0; d < u.length; d++) {
						var m = u[d];
						if (!this.ignoreRender(i, m, this._originalData.destX, this._originalData.destY)) {
							if (0 != this._drawAreaList.length) if (0 != i.worldTransform.b || 0 != i.worldTransform.c) {
								if (i.worldBounds.x + this._originalData.destX < m.x || i.worldBounds.y + this._originalData.destY < m.y || i.worldBounds.x + i.worldBounds.width + this._originalData.destX > m.x + m.width || i.worldBounds.y + i.worldBounds.height + this._originalData.destY > m.y + m.height) {
									t.Logger.fatal("??????????????????????????????????????????????????????????????????");
									break
								}
							} else {
								var _, y = i.worldTransform.a,
									f = i.worldTransform.d;
								i.worldBounds.x + this._originalData.destX < m.x && (_ = (m.x - i.worldBounds.x) / y - this._originalData.destX, n += _ / (l / s), s -= _ / (l / s), l -= _, a += _), i.worldBounds.y + this._originalData.destY < m.y && (_ = (m.y - i.worldBounds.y) / f - this._originalData.destY, o += _ / (p / r), r -= _ / (p / r), p -= _, h += _), i.worldBounds.x + i.worldBounds.width + this._originalData.destX > m.x + m.width && (_ = (i.worldBounds.x + i.worldBounds.width - m.x - m.width) / y + this._originalData.destX, s -= _ / (l / s), l -= _), i.worldBounds.y + i.worldBounds.height + this._originalData.destY > m.y + m.height && (_ = (i.worldBounds.y + i.worldBounds.height - m.y - m.height) / f + this._originalData.destY, r -= _ / (p / r), p -= _)
							}
							e.drawImage(c, n, o, s, r, a, h, l, p), n = this._originalData.sourceX, o = this._originalData.sourceY, s = this._originalData.sourceWidth, r = this._originalData.sourceHeight, a = this._originalData.destX, h = this._originalData.destY, l = this._originalData.destWidth, p = this._originalData.destHeight
						}
					}
				}
			}, i.prototype.ignoreRender = function(t, e, i, n) {
				var o = t.worldBounds;
				return i *= t.worldTransform.a, n *= t.worldTransform.d, o.x + o.width + i <= e.x || o.x + i >= e.x + e.width || o.y + o.height + n <= e.y || o.y + n >= e.y + e.height ? !0 : !1
			}, i.prototype.getDrawAreaList = function() {
				var e;
				return 0 == this._drawAreaList.length ? (this._defaultDrawAreaList || (this._defaultDrawAreaList = [new t.Rectangle(0, 0, t.MainContext.instance.stage.stageWidth, t.MainContext.instance.stage.stageHeight)]), e = this._defaultDrawAreaList) : e = this._drawAreaList, e
			}, i
		}(t.HashObject);
	t.RenderFilter = e
}(ns_egret || (ns_egret = {})), function(t) {
	var e = function() {
			function e() {}
			return e.mapClass = function(t, e, i) {
				"undefined" == typeof i && (i = ""), t = this.getKey(t) + "#" + i, this.mapClassDic[t] = e
			}, e.getKey = function(e) {
				return "string" == typeof e ? e : t.getQualifiedClassName(e)
			}, e.mapValue = function(t, e, i) {
				"undefined" == typeof i && (i = ""), t = this.getKey(t) + "#" + i, this.mapValueDic[t] = e
			}, e.hasMapRule = function(t, e) {
				"undefined" == typeof e && (e = "");
				var i = this.getKey(t) + "#" + e;
				return this.mapValueDic[i] || this.mapClassDic[i] ? !0 : !1
			}, e.getInstance = function(t, e) {
				"undefined" == typeof e && (e = "");
				var i = this.getKey(t) + "#" + e;
				if (this.mapValueDic[i]) return this.mapValueDic[i];
				var n = this.mapClassDic[i];
				if (n) return n = new n, this.mapValueDic[i] = n, delete this.mapClassDic[i], n;
				throw Error("????????????????????????????????????any#named:" + i + "??? ?????????????????????????????????????????????????????????????????????????????????")
			}, e.mapClassDic = {}, e.mapValueDic = {}, e
		}();
	t.Injector = e
}(ns_egret || (ns_egret = {})), __extends = this.__extends ||
function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype, t.prototype = new i
}, function(t) {
	var e = function(e) {
			function i() {
				e.call(this), this._parent = null, this._cacheAsBitmap = !1, this._y = this._x = 0, this._scaleY = this._scaleX = 1, this._anchorY = this._anchorX = this._anchorOffsetY = this._anchorOffsetX = 0, this.visible = !0, this._rotation = 0, this._alpha = 1, this._skewY = this._skewX = 0, this._hasHeightSet = this._hasWidthSet = !1, this.worldAlpha = 1, this.worldTransform = new t.Matrix, this.worldBounds = new t.Rectangle(0, 0, 0, 0)
			}
			return __extends(i, e), Object.defineProperty(i.prototype, "parent", {
				get: function() {
					return this._parent
				},
				enumerable: !0,
				configurable: !0
			}), i.prototype._parentChanged = function(t) {
				this._parent = t
			}, Object.defineProperty(i.prototype, "x", {
				get: function() {
					return this._x
				},
				set: function(e) {
					t.NumberUtils.isNumber(e) && (this._x = e)
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "y", {
				get: function() {
					return this._y
				},
				set: function(e) {
					t.NumberUtils.isNumber(e) && (this._y = e)
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "scaleX", {
				get: function() {
					return this._scaleX
				},
				set: function(e) {
					t.NumberUtils.isNumber(e) && (this._scaleX = e)
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "scaleY", {
				get: function() {
					return this._scaleY
				},
				set: function(e) {
					t.NumberUtils.isNumber(e) && (this._scaleY = e)
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "anchorPointX", {
				get: function() {
					return this._anchorOffsetX
				},
				set: function(e) {
					t.NumberUtils.isNumber(e) && (this._anchorOffsetX = e)
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "anchorOffsetX", {
				get: function() {
					return this._anchorOffsetX
				},
				set: function(e) {
					t.NumberUtils.isNumber(e) && (this._anchorOffsetX = e)
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "anchorPointY", {
				get: function() {
					return this._anchorOffsetY
				},
				set: function(e) {
					t.NumberUtils.isNumber(e) && (this._anchorOffsetY = e)
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "anchorOffsetY", {
				get: function() {
					return this._anchorOffsetY
				},
				set: function(e) {
					t.NumberUtils.isNumber(e) && (this._anchorOffsetY = e)
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "relativeAnchorPointX", {
				get: function() {
					return this._anchorX
				},
				set: function(e) {
					t.NumberUtils.isNumber(e) && (this._anchorX = e)
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "anchorX", {
				get: function() {
					return this._anchorX
				},
				set: function(e) {
					t.NumberUtils.isNumber(e) && (this._anchorX = e)
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "relativeAnchorPointY", {
				get: function() {
					return this._anchorY
				},
				set: function(e) {
					t.NumberUtils.isNumber(e) && (this._anchorY = e)
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "anchorY", {
				get: function() {
					return this._anchorY
				},
				set: function(e) {
					t.NumberUtils.isNumber(e) && (this._anchorY = e)
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "rotation", {
				get: function() {
					return this._rotation
				},
				set: function(e) {
					t.NumberUtils.isNumber(e) && (this._rotation = e)
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "alpha", {
				get: function() {
					return this._alpha
				},
				set: function(e) {
					t.NumberUtils.isNumber(e) && (this._alpha = e)
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "skewX", {
				get: function() {
					return this._skewX
				},
				set: function(e) {
					t.NumberUtils.isNumber(e) && (this._skewX = e)
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "skewY", {
				get: function() {
					return this._skewY
				},
				set: function(e) {
					t.NumberUtils.isNumber(e) && (this._skewY = e)
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "touchEnabled", {
				get: function() {
					return this._touchEnabled
				},
				set: function(t) {
					this._touchEnabled = t
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "scrollRect", {
				get: function() {
					return this._scrollRect
				},
				set: function(t) {
					this._scrollRect = t
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "measuredWidth", {
				get: function() {
					return this._measureBounds().width
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "measuredHeight", {
				get: function() {
					return this._measureBounds().height
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "explicitWidth", {
				get: function() {
					return this._explicitWidth
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "explicitHeight", {
				get: function() {
					return this._explicitHeight
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "width", {
				get: function() {
					return this.getBounds().width
				},
				set: function(e) {
					this._explicitWidth = e, this._hasWidthSet = t.NumberUtils.isNumber(e)
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "height", {
				get: function() {
					return this.getBounds().height
				},
				set: function(e) {
					this._explicitHeight = e, this._hasHeightSet = t.NumberUtils.isNumber(e)
				},
				enumerable: !0,
				configurable: !0
			}), i.prototype.draw = function(t) {
				this.visible && !this.drawCacheTexture(t) && (t.setAlpha(this.worldAlpha, this.blendMode), t.setTransform(this.worldTransform), (this.mask || this._scrollRect) && (t.save(), this._scrollRect ? t.clip(this._scrollRect.x, this._scrollRect.y, this._scrollRect.width, this._scrollRect.height) : t.clip(this.mask.x, this.mask.y, this.mask.width, this.mask.height)), this.render(t), (this.mask || this._scrollRect) && t.restore())
			}, i.prototype.drawCacheTexture = function(e) {
				if (this._cacheAsBitmap) {
					var i = this._texture_to_render,
						n = i.offsetX,
						o = i.offsetY,
						s = i._textureWidth,
						i = i._textureHeight;
					this.updateTransform(), e.setAlpha(this.worldAlpha, this.blendMode), e.setTransform(this.worldTransform), this.mask && (e.save(), e.clip(this.mask.x, this.mask.y, this.mask.width, this.mask.height));
					var r = t.MainContext.instance.rendererContext.texture_scale_factor;
					return t.RenderFilter.getInstance().drawImage(e, this, 0, 0, s * r, i * r, n, o, s, i), this.mask && e.restore(), !0
				}
				return !1
			}, i.prototype.updateTransform = function() {
				this.worldTransform.identity(), this.worldTransform = this.worldTransform.appendMatrix(this._parent.worldTransform);
				var t, e;
				0 != this._anchorX || 0 != this._anchorY ? (e = this.getBounds(), t = e.width * this._anchorX, e = e.height * this._anchorY) : (t = this._anchorOffsetX, e = this._anchorOffsetY), this.worldTransform.appendTransform(this._x, this._y, this._scaleX, this._scaleY, this._rotation, this._skewX, this._skewY, t, e), this._scrollRect && this.worldTransform.append(1, 0, 0, 1, -this._scrollRect.x, -this._scrollRect.y), e = i.getTransformBounds(this.getBounds(), this.worldTransform), this.worldBounds.initialize(e.x, e.y, e.width, e.height), this.worldAlpha = this._parent.worldAlpha * this._alpha
			}, i.prototype.render = function() {}, i.prototype.getBounds = function() {
				var e, i, n = this._measureBounds(),
					o = this._hasWidthSet ? this._explicitWidth : n.width,
					s = this._hasHeightSet ? this._explicitHeight : n.height,
					r = n.x,
					n = n.y;
				return 0 != this._anchorX || 0 != this._anchorY ? (e = o * this._anchorX, i = s * this._anchorY) : (e = this._anchorOffsetX, i = this._anchorOffsetY), t.Rectangle.identity.initialize(r - e, n - i, o, s)
			}, i.prototype.getConcatenatedMatrix = function() {
				for (var t = i.identityMatrixForGetConcatenated.identity(), e = this; null != e;) {
					if (0 != e.anchorX || 0 != e.anchorY) {
						var n = e.getBounds();
						t.prependTransform(e.x, e.y, e.scaleX, e.scaleY, e.rotation, e.skewX, e.skewY, n.width * e.anchorX, n.height * e.anchorY)
					} else t.prependTransform(e.x, e.y, e.scaleX, e.scaleY, e.rotation, e.skewX, e.skewY, e.anchorOffsetX, e.anchorOffsetY);
					e = e.parent
				}
				return t
			}, i.prototype.localToGlobal = function(e, i) {
				"undefined" == typeof e && (e = 0), "undefined" == typeof i && (i = 0);
				var n = this.getConcatenatedMatrix();
				n.append(1, 0, 0, 1, e, i);
				var o = t.Point.identity;
				return o.x = n.tx, o.y = n.ty, o
			}, i.prototype.globalToLocal = function(e, i) {
				"undefined" == typeof e && (e = 0), "undefined" == typeof i && (i = 0);
				var n = this.getConcatenatedMatrix();
				n.invert(), n.append(1, 0, 0, 1, e, i);
				var o = t.Point.identity;
				return o.x = n.tx, o.y = n.ty, o
			}, i.prototype.hitTest = function(t, e, i) {
				return "undefined" == typeof i && (i = !1), this.visible && (i || this._touchEnabled) ? (i = this.getBounds(), t > 0 && t < i.width && e > 0 && e < i.height ? this.mask || this._scrollRect ? this._scrollRect && t < this._scrollRect.width && e < this._scrollRect.height || this.mask && this.mask.x < t && t < this.mask.x + this.mask.width && this.mask.y < e && e < this.mask.y + this.mask.height ? this : null : this : null) : null
			}, i.prototype.getMatrix = function() {
				return t.Matrix.identity.identity().appendTransformFromDisplay(this)
			}, i.prototype._measureBounds = function() {
				return t.Rectangle.identity.initialize(0, 0, 0, 0)
			}, i.prototype.getOffsetPoint = function() {
				var e = this.anchorOffsetX,
					i = this.anchorOffsetY;
				(0 != this.anchorX || 0 != this.anchorY) && (i = this.getBounds(), e = this.anchorX * i.width, i = this.anchorY * i.height);
				var n = t.Point.identity;
				return n.x = e, n.y = i, n
			}, i.prototype._onAddToStage = function() {
				this._stage = t.MainContext.instance.stage, this.dispatchEventWith(t.Event.ADDED_TO_STAGE)
			}, i.prototype._onRemoveFromStage = function() {
				this._stage = null, this.dispatchEventWith(t.Event.REMOVED_FROM_STAGE)
			}, Object.defineProperty(i.prototype, "stage", {
				get: function() {
					return this._stage
				},
				enumerable: !0,
				configurable: !0
			}), i.prototype.addEventListener = function(n, o, s, r, a) {
				"undefined" == typeof r && (r = !1), "undefined" == typeof a && (a = 0), e.prototype.addEventListener.call(this, n, o, s, r, a), ((r = n == t.Event.ENTER_FRAME) || n == t.Event.RENDER) && this._insertEventBin(r ? i._enterFrameCallBackList : i._renderCallBackList, o, s, a)
			}, i.prototype.removeEventListener = function(n, o, s, r) {
				"undefined" == typeof r && (r = !1), e.prototype.removeEventListener.call(this, n, o, s, r), ((r = n == t.Event.ENTER_FRAME) || n == t.Event.RENDER) && this._removeEventBin(r ? i._enterFrameCallBackList : i._renderCallBackList, o, s)
			}, i.prototype.dispatchEvent = function(t) {
				if (!t._bubbles) return e.prototype.dispatchEvent.call(this, t);
				t._reset();
				for (var i = [], n = this; n;) i.unshift(n), n = n.parent;
				for (var n = i.length, o = n - 2; o >= 0; o--) i.push(i[o]);
				for (var n = i.length, s = .5 * (n - 1), o = 0; n > o; o++) {
					var r = i[o];
					if (t._setCurrentTarget(r), t._target = this, t._eventPhase = s > o ? 1 : o == s ? 2 : 3, r._notifyListener(t), t._isPropagationStopped || t._isPropagationImmediateStopped) break
				}
				return !t.isDefaultPrevented()
			}, i.prototype.willTrigger = function(t) {
				for (var e = this; e;) {
					if (e.hasEventListener(t)) return !0;
					e = e._parent
				}
				return !1
			}, i.prototype.cacheAsBitmap = function(e) {
				(this._cacheAsBitmap = e) && (e = new t.RenderTexture, e.drawToTexture(this), this._texture_to_render = e)
			}, i.getTransformBounds = function(t, e) {
				var i = t.x,
					n = t.y,
					o = t.width,
					s = t.height,
					r = o * e.a,
					o = o * e.b,
					a = s * e.c,
					s = s * e.d,
					h = e.tx,
					l = e.ty,
					p = h,
					c = h,
					u = l,
					d = l;
				return (i = r + h) < p ? p = i : i > c && (c = i), (i = r + a + h) < p ? p = i : i > c && (c = i), (i = a + h) < p ? p = i : i > c && (c = i), (n = o + l) < u ? u = n : n > d && (d = n), (n = o + s + l) < u ? u = n : n > d && (d = n), (n = s + l) < u ? u = n : n > d && (d = n), t.initialize(p, u, c - p, d - u)
			}, i.identityMatrixForGetConcatenated = new t.Matrix, i._enterFrameCallBackList = [], i._renderCallBackList = [], i
		}(t.EventDispatcher);
	t.DisplayObject = e
}(ns_egret || (ns_egret = {})), __extends = this.__extends ||
function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype, t.prototype = new i
}, function(t) {
	var e = function(e) {
			function i() {
				e.call(this), this._touchChildren = !0, this._children = []
			}
			return __extends(i, e), Object.defineProperty(i.prototype, "touchChildren", {
				get: function() {
					return this._touchChildren
				},
				set: function(t) {
					this._touchChildren = t
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "numChildren", {
				get: function() {
					return this._children.length
				},
				enumerable: !0,
				configurable: !0
			}), i.prototype.setChildIndex = function(t, e) {
				this.doSetChildIndex(t, e)
			}, i.prototype.doSetChildIndex = function(e, i) {
				var n = this._children.indexOf(e);
				0 > n && t.Logger.fatal("child?????????????????????"), this._children.splice(n, 1), 0 > i || this._children.length <= i ? this._children.push(e) : this._children.splice(i, 0, e)
			}, i.prototype.addChild = function(t) {
				var e = this.numChildren;
				return t.parent == this && e--, this.childAdded(t, e)
			}, i.prototype.addChildAt = function(t, e) {
				return this.childAdded(t, e)
			}, i.prototype.childAdded = function(e, i) {
				if (e == this) return e;
				if (0 > i || i > this._children.length) return t.Logger.fatal("???????????????????????????"), e;
				var n = e.parent;
				return n == this ? (this.doSetChildIndex(e, i), e) : (n && n.removeChild(e), this._children.splice(i, 0, e), e._parentChanged(this), e.dispatchEventWith(t.Event.ADDED, !0), this._stage && e._onAddToStage(), e)
			}, i.prototype.removeChild = function(e) {
				return e = this._children.indexOf(e), e >= 0 ? this.childRemoved(e) : void t.Logger.fatal("child??????addChild??????parent")
			}, i.prototype.removeChildAt = function(e) {
				return e >= 0 && e < this._children.length ? this.childRemoved(e) : void t.Logger.fatal("???????????????????????????")
			}, i.prototype.childRemoved = function(e) {
				var i = this._children,
					n = i[e];
				return n.dispatchEventWith(t.Event.REMOVED, !0), this._stage && n._onRemoveFromStage(), n._parentChanged(null), i.splice(e, 1), n
			}, i.prototype.getChildAt = function(e) {
				return e >= 0 && e < this._children.length ? this._children[e] : void t.Logger.fatal("???????????????????????????")
			}, i.prototype.contains = function(t) {
				for (; t;) {
					if (t == this) return !0;
					t = t.parent
				}
				return !1
			}, i.prototype.getChildByName = function() {
				return null
			}, i.prototype.swapChildrenAt = function(e, i) {
				e >= 0 && e < this._children.length && i >= 0 && i < this._children.length ? this._swapChildrenAt(e, i) : t.Logger.fatal("???????????????????????????")
			}, i.prototype.swapChildren = function(e, i) {
				var n = this._children.indexOf(e),
					o = this._children.indexOf(i); - 1 == n || -1 == o ? t.Logger.fatal("child??????addChild??????parent") : this._swapChildrenAt(n, o)
			}, i.prototype._swapChildrenAt = function(t, e) {
				if (t > e) {
					var i = e;
					e = t, t = i
				} else if (t == e) return;
				var i = this._children,
					n = i[t],
					o = i[e];
				i.splice(e, 1), i.splice(t, 1), i.splice(t, 0, o), i.splice(e, 0, n)
			}, i.prototype.getChildIndex = function(t) {
				return this._children.indexOf(t)
			}, i.prototype.removeChildren = function() {
				for (var t = this._children.length - 1; t >= 0; t--) this.childRemoved(t)
			}, i.prototype.updateTransform = function() {
				if (this.visible) {
					e.prototype.updateTransform.call(this);
					for (var t = 0, i = this._children.length; i > t; t++) this._children[t].updateTransform()
				}
			}, i.prototype.render = function(t) {
				for (var e = 0, i = this._children.length; i > e; e++) this._children[e].draw(t)
			}, i.prototype._measureBounds = function() {
				for (var e = 0, i = 0, n = 0, o = 0, s = this._children.length, r = 0; s > r; r++) {
					var a, h = this._children[r];
					if (h.visible && (a = t.DisplayObject.getTransformBounds(h.getBounds(), h.getMatrix()))) {
						var h = a.x,
							l = a.y,
							p = a.width + a.x,
							c = a.height + a.y;
						(e > h || 0 == r) && (e = h), (p > i || 0 == r) && (i = p), (n > l || 0 == r) && (n = l), (c > o || 0 == r) && (o = c)
					}
				}
				return t.Rectangle.identity.initialize(e, n, i - e, o - n)
			}, i.prototype.hitTest = function(e, i) {
				var n;
				if (!this.visible) return null;
				if (this._scrollRect) {

					if (e > this._scrollRect.width || i > this._scrollRect.height) return null
				} else if (this.mask && (this.mask.x > e || e > this.mask.x + this.mask.width || this.mask.y > i || i > this.mask.y + this.mask.height)) return null;
				var o = this._children,
					s = o.length;
				if (0 == s) return n;
				for (var r = this._touchChildren, a = this; a._parent;) r = r && a._parent._touchChildren, a = a._parent;
				for (s -= 1; s >= 0; s--) {
					var h = a = o[s],
						l = h.getOffsetPoint(),
						p = h._x,
						c = h._y;
					if (this._scrollRect && (p -= this._scrollRect.x, c -= this._scrollRect.y), h = t.Matrix.identity.identity().prependTransform(p, c, h._scaleX, h._scaleY, h._rotation, 0, 0, l.x, l.y), h.invert(), h = t.Matrix.transformCoords(h, e, i), a = a.hitTest(h.x, h.y, !0)) {
						if (a._touchEnabled && r) return a;
						if (this._touchEnabled) return this;
						null == n && (n = a)
					}
				}
				return n
			}, i.prototype._onAddToStage = function() {
				e.prototype._onAddToStage.call(this);
				for (var t = this.numChildren, i = 0; t > i; i++) this._children[i]._onAddToStage()
			}, i.prototype._onRemoveFromStage = function() {
				e.prototype._onRemoveFromStage.call(this);
				for (var t = this.numChildren, i = 0; t > i; i++) this._children[i]._onRemoveFromStage()
			}, i
		}(t.DisplayObject);
	t.DisplayObjectContainer = e
}(ns_egret || (ns_egret = {})), __extends = this.__extends ||
function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype, t.prototype = new i
}, function(t) {
	var e = function(e) {
			function i(t, i) {
				e.call(this), this.touchEnabled = !0, this._stage = this, this._stageWidth = t, this._stageHeight = i
			}
			return __extends(i, e), i.prototype.invalidate = function() {
				i._invalidateRenderFlag = !0
			}, i.prototype._setStageSize = function(e, i) {
				this._stageWidth == e && this._stageHeight == i || (this._stageWidth = e, this._stageHeight = i, this.dispatchEventWith(t.Event.RESIZE))
			}, Object.defineProperty(i.prototype, "stageWidth", {
				get: function() {
					return this._stageWidth
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "stageHeight", {
				get: function() {
					return this._stageHeight
				},
				enumerable: !0,
				configurable: !0
			}), i.prototype.hitTest = function(e, i) {
				if (!this.touchEnabled) return null;
				var n;
				if (!this.visible) return this;
				for (var o = this._children, s = o.length - 1; s >= 0; s--) {
					var r = n = o[s],
						a = r.getOffsetPoint(),
						r = t.Matrix.identity.identity().prependTransform(r.x, r.y, r.scaleX, r.scaleY, r.rotation, 0, 0, a.x, a.y);
					if (r.invert(), r = t.Matrix.transformCoords(r, e, i), (n = n.hitTest(r.x, r.y, !0)) && n.touchEnabled) return n
				}
				return this
			}, i.prototype.getBounds = function() {
				return t.Rectangle.identity.initialize(0, 0, 1e5, 1e5)
			}, i.prototype.updateTransform = function() {
				for (var t = 0, e = this._children.length; e > t; t++) this._children[t].updateTransform()
			}, i._invalidateRenderFlag = !1, i
		}(t.DisplayObjectContainer);
	t.Stage = e
}(ns_egret || (ns_egret = {})), __extends = this.__extends ||
function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype, t.prototype = new i
}, function(t) {
	var e = function(e) {
			function i() {
				e.call(this), this.debug = !1, this.debugColor = 16711680
			}
			return __extends(i, e), i.initWithTexture = function(t) {
				if (null == t) throw Error("texture ????????? ");
				var e = new i;
				return e.texture = t, e
			}, i.prototype.render = function(e) {
				var i = this.texture;
				if (null != i) {
					this._texture_to_render = i;
					var n, o, s, r, a;
					this.spriteFrame ? (a = this.spriteFrame, n = a.x, o = a.y, s = a.w, i = a.h, r = a.offX, a = a.offY) : (o = n = 0, s = i._textureWidth, i = i._textureHeight, a = r = 0), t.RenderFilter.getInstance().drawImage(e, this, n, o, s, i, r, a, s, i)
				}
			}, i.prototype._measureBounds = function() {
				var e, i, n = this.spriteFrame;
				n ? (e = n.w, i = n.h) : this.texture ? (e = this.texture._textureWidth, i = this.texture._textureHeight) : t.Logger.fatal("??????BitmapBounds??????");
				var o;
				return 0 != this._anchorX || 0 != this._anchorY ? (n = e * this._anchorX, o = i * this._anchorY) : (n = this._anchorOffsetX, o = this._anchorOffsetY), t.Rectangle.identity.initialize(-n, -o, e, i)
			}, i.debug = !1, i
		}(t.DisplayObject);
	t.Bitmap = e
}(ns_egret || (ns_egret = {})), __extends = this.__extends ||
function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype, t.prototype = new i
}, function(t) {
	var e = function(e) {
			function i() {
				e.call(this), this.text = "", this._bitmapPool = []
			}
			return __extends(i, e), i.prototype.updateTransform = function() {
				this.visible && (this._renderText(), e.prototype.updateTransform.call(this))
			}, i.prototype._renderText = function(e) {
				"undefined" == typeof e && (e = !1);
				var i = t.Rectangle.identity.initialize(0, 0, 0, 0);
				e || this.removeChildren();
				for (var n = 0, o = this.text.length; o > n; n++) {
					var s = this.text.charAt(n),
						r = this.bitmapFontData[s];
					null == r && t.Logger.fatal("BitmapText????????????bitmapFontData: ", s);
					var s = r.offX,
						a = r.offY,
						h = r.w;
					if (!e) {
						var l = this._bitmapPool[n];
						l || (l = t.Bitmap.initWithTexture(this.texture), this._bitmapPool.push(l)), this.addChild(l), l.spriteFrame = r, l.x = i.width
					}
					i.width += h + s, a + r.h > i.height && (i.height = a + r.h)
				}
				return i
			}, i.prototype._measureBounds = function() {
				return this._renderText(!0)
			}, i
		}(t.DisplayObjectContainer);
	t.BitmapText = e
}(ns_egret || (ns_egret = {})), function(t) {
	var e = function() {
			function t(t) {
				this.renderContext = t, this.canvasContext = t.canvasContext, this.commandQueue = []
			}
			return t.prototype.beginFill = function(t, e) {
				this.commandQueue.push(new i(this._setStyle, this, ["rgba(" + (t >> 16) + "," + ((65280 & t) >> 8) + "," + (255 & t) + "," + e + ")"]))
			}, t.prototype._setStyle = function(t) {
				this.canvasContext.fillStyle = t
			}, t.prototype.drawRect = function(t, e, n, o) {
				this.canvasContext.fill();
				var s = this.renderContext;
				this.commandQueue.push(new i(function(t, e, i, n) {
					this.canvasContext.fillRect(s._transformTx + t, s._transformTy + e, i, n)
				}, this, [t, e, n, o]))
			}, t.prototype.lineStyle = function(t, e, n, o, s, r, a, h) {
				"undefined" == typeof t && (t = 0 / 0), "undefined" == typeof e && (e = 0), "undefined" == typeof n && (n = 1), "undefined" == typeof o && (o = !1), "undefined" == typeof s && (s = "normal"), "undefined" == typeof r && (r = null), "undefined" == typeof a && (a = null), "undefined" == typeof h && (h = 3), this.commandQueue.push(new i(function(e, i) {
					var o = "rgba(" + (i >> 16) + "," + ((65280 & i) >> 8) + "," + (255 & i) + "," + n + ")";
					this.canvasContext.lineWidth = t, this.canvasContext.strokeStyle = o
				}, this, [t, e]))
			}, t.prototype.lineTo = function(t, e) {
				var n = this.renderContext;
				this.commandQueue.push(new i(function(t, e) {
					var i = this.canvasContext;
					i.beginPath(), i.moveTo(n._transformTx, n._transformTx), i.lineTo(n._transformTx + t, n._transformTx + e), i.stroke()
				}, this, [t, e]))
			}, t.prototype.clear = function() {
				this.commandQueue.length = 0
			}, t.prototype.endFill = function() {}, t.prototype._draw = function() {
				for (var t = 0, e = this.commandQueue.length; e > t; t++) {
					var i = this.commandQueue[t];
					i.method.apply(i.thisObject, i.args)
				}
			}, t
		}();
	t.Graphics = e;
	var i = function() {
			return function(t, e, i) {
				this.method = t, this.thisObject = e, this.args = i
			}
		}()
}(ns_egret || (ns_egret = {})), __extends = this.__extends ||
function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype, t.prototype = new i
}, function(t) {
	var e = function(e) {
			function i() {
				e.call(this), this.graphics = new t.Graphics(t.MainContext.instance.rendererContext)
			}
			return __extends(i, e), i.prototype.hitTest = function(t, i) {
				return e.prototype.hitTest.call(this, t, i)
			}, i.prototype.render = function() {
				this.graphics._draw()
			}, i
		}(t.DisplayObject);
	t.Shape = e, e = function(t) {
		function e() {
			t.call(this), this._colorDirty = !0, this._sizeDirty = !1, this._color = 16777215
		}
		return __extends(e, t), Object.defineProperty(e.prototype, "color", {
			get: function() {
				return this._color
			},
			set: function(t) {
				this._colorDirty = !0, this._color = t
			},
			enumerable: !0,
			configurable: !0
		}), Object.defineProperty(e.prototype, "alpha", {
			get: function() {
				return this._alpha
			},
			set: function(t) {
				this._colorDirty = !0, this._alpha = t
			},
			enumerable: !0,
			configurable: !0
		}), Object.defineProperty(e.prototype, "width", {
			get: function() {
				return this.getBounds().width
			},
			set: function(t) {
				this._explicitWidth = t, this._sizeDirty = !0
			},
			enumerable: !0,
			configurable: !0
		}), Object.defineProperty(e.prototype, "height", {
			get: function() {
				return this.getBounds().height
			},
			set: function(t) {
				this._explicitHeight = t, this._sizeDirty = !0
			},
			enumerable: !0,
			configurable: !0
		}), e.prototype.render = function() {
			(this._colorDirty || this._sizeDirty) && (this._sizeDirty = this._colorDirty = !1, this.graphics.clear(), this.graphics.beginFill(this._color, this._alpha), this.graphics.drawRect(0, 0, this._explicitWidth, this._explicitHeight)), this.graphics._draw()
		}, e
	}(t.Shape), t.ShapeRect = e
}(ns_egret || (ns_egret = {})), __extends = this.__extends ||
function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype, t.prototype = new i
}, function(t) {
	var e = function(e) {
			function i() {
				e.call(this), this.fontFamily = "Arial", this.size = 30, this._textColorString = "#FFFFFF", this._textColor = 16777215, this._strokeColorString = "#000000", this._numLines = this.stroke = this._strokeColor = 0, this.__hackIgnoreDrawText = !1, this.letterSpacing = this.lineSpacing = 0, this.textAlign = "left"
			}
			return __extends(i, e), Object.defineProperty(i.prototype, "textColor", {
				get: function() {
					return this._textColor
				},
				set: function(e) {
					this._textColor != e && (this._textColor = e, this._textColorString = t.toColorString(e))
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "strokeColor", {
				get: function() {
					return this._strokeColor
				},
				set: function(e) {
					this._strokeColor != e && (this._strokeColor = e, this._strokeColorString = t.toColorString(e))
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "numLines", {
				get: function() {
					return this._numLines
				},
				enumerable: !0,
				configurable: !0
			}), i.prototype.render = function(t) {
				this.text && (t.setupFont(this.size + "px " + this.fontFamily, this.textAlign, this.textBaseline), this.drawText(t))
			}, i.prototype._measureBounds = function() {
				var e = t.MainContext.instance.rendererContext;
				return e.setupFont(this.size + "px " + this.fontFamily, this.textAlign, this.textBaseline), this.drawText(e, !0)
			}, i.prototype.drawText = function(e, i) {
				"undefined" == typeof i && (i = !1), i && (this.__hackIgnoreDrawText = !0);
				var n = this._explicitWidth,
					o = 0,
					s = String(this.text).split(/(?:\r\n|\r|\n)/),
					r = 0,
					a = this.size + this.lineSpacing,
					h = 0;
				if (isNaN(n)) {
					for (var h = s.length, l = 0, p = h; p > l; l++) {
						var c = s[l],
							u = e.measureText(c);
						u > o && (o = u)
					}
					for (l = 0, p = h; p > l; l++) c = s[l], this._drawTextLine(e, c, r, o), r += a
				} else for (o = n, l = 0, p = s.length; p > l; l++) {
					if (c = s[l], u = e.measureText(c), u > n) for (var u = c, d = 0, c = "", m = 0; m < u.length; m++) {
						var _ = e.measureText(u[m]);
						d + _ > n ? 0 == d ? (d += _, c += u[m], o = _) : (this._drawTextLine(e, c, r, o), h++, m--, c = "", d = 0, r += a) : (d += _, c += u[m])
					}
					this._drawTextLine(e, c, r, o), h++, r += a
				}
				return this._numLines = h, n = t.Rectangle.identity, i && (n.x = n.y = 0, n.width = o, n.height = h * a, this.__hackIgnoreDrawText = !1), n
			}, i.prototype._drawTextLine = function(t, e, i, n) {
				this.__hackIgnoreDrawText || t.drawText(this, e, "left" == this.textAlign ? 0 : "center" == this.textAlign ? n / 2 : n, i, n)
			}, i
		}(t.DisplayObject);
	t.TextField = e
}(ns_egret || (ns_egret = {})), __extends = this.__extends ||
function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype, t.prototype = new i
}, function(t) {
	var e = function(e) {
			function n(t) {
				e.call(this), this.frames = t.frames
			}
			return __extends(n, e), n.prototype.getFrame = function(e) {
				var i = this.frames[e];
				return null == i && t.Logger.fatal("?????????????????????frame???", e), i
			}, n.parseFromDragonBones = function(t) {
				var e = new n(t);
				e.frames = {}, t = t.SubTexture;
				for (var o in t) {
					var s = t[o],
						r = new i;
					r.w = s.width, r.h = s.height, r.x = s.x, r.y = s.y, e.frames[s.name] = r
				}
				return e
			}, n
		}(t.HashObject);
	t.SpriteSheet = e;
	var i = function() {
			return function() {
				this.offY = this.offX = 0
			}
		}();
	t.SpriteSheetFrame = i
}(ns_egret || (ns_egret = {})), __extends = this.__extends ||
function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype, t.prototype = new i
}, function(t) {
	var e = function(e) {
			function i() {
				e.apply(this, arguments), this._placeholderText = "", this._edFontSize = 14, this._textColor = 16711680, this._placeholderFontSize = 14, this._placeholderColor = 16776960, this._preY = this._preX = 0
			}
			return __extends(i, e), i.prototype._onAddToStage = function() {
				e.prototype._onAddToStage.call(this);
				var i = this.localToGlobal(),
					n = new t.StageText;
				n.open(i.x, i.y, this._explicitWidth, this._explicitHeight), this.addEventListener(t.TouchEvent.TOUCH_BEGAN, this.onMouseDownHandler, this), this.stageText = n
			}, i.prototype.setText = function(t) {
				this.stageText.setText(t)
			}, i.prototype.getText = function() {
				return this.stageText.getText()
			}, i.prototype.setTextType = function(t) {
				this.stageText.setTextType(t)
			}, i.prototype.getTextType = function() {
				return this.stageText.getTextType()
			}, i.prototype.onMouseDownHandler = function() {}, i.prototype._onRemoveFromStage = function() {
				this.stageText.remove()
			}, i.prototype._measureBounds = function() {
				return t.Rectangle.identity
			}, i.prototype.hitTest = function() {
				return null
			}, i
		}(t.DisplayObject);
	t.TextInput = e, e = function() {
		function t() {}
		return t.prototype.editBoxEditingDidBegin = function() {}, t.prototype.editBoxEditingDidEnd = function() {}, t.prototype.editBoxTextChanged = function() {}, t.prototype.editBoxReturn = function() {}, t
	}(), t.TextInputDegelete = e
}(ns_egret || (ns_egret = {})), __extends = this.__extends ||
function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype, t.prototype = new i
}, function(t) {
	var e = function(e) {
			function i(i, n) {
				e.call(this), this.data = i, this.texture = n, this._resPool = {}, this._currentInterval = this._interval = this._totalFrame = this._currentFrameIndex = 0, this._isPlaying = !1, this._passTime = 0, this._oneFrameTime = 1e3 / 60, this._frameData = i, this._oneFrameTime = 1e3 / t.MainContext.instance.deviceContext.frameRate
			}
			return __extends(i, e), i.prototype.gotoAndPlay = function(e) {
				this.checkHasFrame(e), this._isPlaying = !0, this._currentInterval = this._currentFrameIndex = 0, this._currentFrameName = e, this._totalFrame = this._frameData.frames[e].totalFrame, this.playNextFrame(), this._passTime = 0, t.Ticker.getInstance().register(this.update, this)
			}, i.prototype.gotoAndStop = function(t) {
				this.checkHasFrame(t), this.stop(), this._currentInterval = this._currentFrameIndex = 0, this._currentFrameName = t, this._totalFrame = this._frameData.frames[t].totalFrame, this.playNextFrame()
			}, i.prototype.checkHasFrame = function(e) {
				void 0 == this._frameData.frames[e] && t.Logger.fatal("MovieClip???????????????frame???", e)
			}, i.prototype.stop = function() {
				this._isPlaying = !1, t.Ticker.getInstance().unregister(this.update, this)
			}, i.prototype.update = function(t) {
				if (this._interval != this._currentInterval) this._currentInterval++;
				else {
					for (var e = Math.floor((this._passTime % this._oneFrameTime + t) / this._oneFrameTime); e >= 1;) 1 == e ? this.playNextFrame() : this.playNextFrame(!1), e--;
					this._passTime += t
				}
			}, i.prototype.playNextFrame = function(t) {
				"undefined" == typeof t && (t = !0), this._currentInterval = 0;
				var e = this._frameData.frames[this._currentFrameName].childrenFrame[this._currentFrameIndex];
				t && (t = this.getBitmap(e.res), t.x = e.x, t.y = e.y, this.removeChildren(), this.addChild(t)), null != e.action && this.dispatchEventWith(e.action), this._currentFrameIndex++, this._currentFrameIndex == this._totalFrame && (this._currentFrameIndex = 0)
			}, i.prototype.getBitmap = function(e) {
				var i;
				if (null != this._resPool[e]) i = this._resPool[e];
				else {
					var n = this._frameData.res[e];
					i = t.Bitmap.initWithTexture(this.texture), i.spriteFrame = n, this._resPool[e] = i
				}
				return i
			}, i.prototype.release = function() {
				this._resPool = {}
			}, i.prototype.getCurrentFrameIndex = function() {
				return this._currentFrameIndex
			}, i.prototype.getTotalFrame = function() {
				return this._totalFrame
			}, i.prototype.setInterval = function(t) {
				this._interval = t
			}, i.prototype.getIsPlaying = function() {
				return this._isPlaying
			}, i
		}(t.DisplayObjectContainer);
	t.MovieClip = e
}(ns_egret || (ns_egret = {})), __extends = this.__extends ||
function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype, t.prototype = new i
}, function(t) {
	var e = function(e) {
			function i() {
				e.call(this)
			}
			return __extends(i, e), i.prototype.getText = function() {
				return this.inputElement.value
			}, i.prototype.setText = function(t) {
				this.inputElement.value = t
			}, i.prototype.setTextType = function(t) {
				this.inputElement.type = t
			}, i.prototype.getTextType = function() {
				return this.inputElement.type
			}, i.prototype.open = function(e, i, n, o) {
				"undefined" == typeof n && (n = 160), "undefined" == typeof o && (o = 21);
				var s = t.StageDelegate.getInstance().getScaleX(),
					r = t.StageDelegate.getInstance().getScaleY(),
					a = document.createElement("input");
				a.type = "text", a.style.fontSize = "20px", a.style.color = "#FFFFFF", a.style.borderStyle = "none", a.style.background = "none", a.style.width = n * s + "px", a.style.height = o * r + "px", a.style.outline = "medium";
				var h = t.Browser.getInstance().$new("div");
				h.style.position = "absolute", h.position.x = e * s, h.style.width = n * s + "px", h.style.height = o * r + "px", h.position.y = i * r, h.transforms(), h.appendChild(a), e = t.Browser.getInstance().$("#StageDelegateDiv"), e || (n = document.getElementById(t.StageDelegate.canvas_div_name), o = n.clientHeight, n = n.clientWidth, e = t.Browser.getInstance().$new("div"), e.id = "StageDelegateDiv", e.style.position = "absolute", e.style.width = n + "px", e.style.maxHeight = o + "px", e.style.margin = "0px", document.getElementById(t.StageDelegate.canvas_div_name).appendChild(e), e.position.y = -o, e.transforms()), e.appendChild(h), this.div = h, this.inputElement = a
			}, i.prototype.remove = function() {
				var t = this.div;
				t && t.parentNode && t.parentNode.removeChild(t)
			}, i
		}(t.HashObject);
	t.StageText = e
}(ns_egret || (ns_egret = {})), __extends = this.__extends ||
function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype, t.prototype = new i
}, function(t) {
	var e = function(e) {
			function i() {
				e.call(this), this.renderCost = 0, this.texture_scale_factor = 1
			}
			return __extends(i, e), i.prototype.clearScreen = function() {}, i.prototype.clearRect = function() {}, i.prototype.drawImage = function() {
				t.Profiler.getInstance().onDrawImage()
			}, i.prototype.setTransform = function() {}, i.prototype.save = function() {}, i.prototype.restore = function() {}, i.prototype.setAlpha = function() {}, i.prototype.setupFont = function() {}, i.prototype.measureText = function() {
				return 0
			}, i.prototype.drawText = function() {
				t.Profiler.getInstance().onDrawImage()
			}, i.prototype.clip = function() {}, i.prototype.strokeRect = function() {}, i
		}(t.HashObject);
	t.RendererContext = e, e = function() {
		function e(t) {
			switch (this.type = t, t) {
			case "add":
			case "layer":
				this.value = "lighter";
				break;
			default:
				this.value = "source-over"
			}
		}
		return e.getBlendMode = function(e) {
			return e ? t.BlendMode[e.toUpperCase()] : t.BlendMode.NORMAL
		}, e.NORMAL = new e("normal"), e.ADD = new e("add"), e.LAYER = new e("layer"), e
	}(), t.BlendMode = e
}(ns_egret || (ns_egret = {})), function(t) {
	var e = function() {
			function t() {}
			return t.MOUSE = "mouse", t.TOUCH = "touch", t.mode = "touch", t
		}();
	t.InteractionMode = e
}(ns_egret || (ns_egret = {})), __extends = this.__extends ||
function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype, t.prototype = new i
}, function(t) {
	var e = function(e) {
			function i() {
				e.call(this), this._currentTouchTarget = {}, this.maxTouches = 2, this.touchDownTarget = {}
			}
			return __extends(i, e), i.prototype.run = function() {}, i.prototype.getTouchData = function(t, e, i) {
				var n = this._currentTouchTarget[t];
				return null == n && (n = {}, this._currentTouchTarget[t] = n), n.stageX = e, n.stageY = i, n.identifier = t, n
			}, i.prototype.dispatchEvent = function(t, e) {
				var n = e.target,
					o = i.touchEvent;
				o._type = t, o.touchPointID = e.identifier, o.touchDown = 1 == this.touchDownTarget[e.identifier], o._stageX = e.stageX, o._stageY = e.stageY, n.dispatchEvent(o)
			}, i.prototype.onTouchBegan = function(e, i, n) {
				var o = t.MainContext.instance.stage.hitTest(e, i);
				o && (e = this.getTouchData(n, e, i), this.touchDownTarget[n] = !0, e.target = o, e.beginTarget = o, this.dispatchEvent(t.TouchEvent.TOUCH_BEGAN, e))
			}, i.prototype.onTouchMove = function(e, i, n) {
				var o = t.MainContext.instance.stage.hitTest(e, i);
				o && (e = this.getTouchData(n, e, i), e.target = o, this.dispatchEvent(t.TouchEvent.TOUCH_MOVE, e))
			}, i.prototype.onTouchEnd = function(e, i, n) {
				var o = t.MainContext.instance.stage.hitTest(e, i);
				o && (e = this.getTouchData(n, e, i), delete this.touchDownTarget[n], n = e.beginTarget, e.target = o, this.dispatchEvent(t.TouchEvent.TOUCH_END, e), n == o ? this.dispatchEvent(t.TouchEvent.TOUCH_TAP, e) : e.beginTarget && (e.target = e.beginTarget, this.dispatchEvent(t.TouchEvent.TOUCH_RELEASE_OUTSIDE, e)), delete this._currentTouchTarget[e.identifier])
			}, i.touchEvent = new t.TouchEvent(""), i
		}(t.HashObject);
	t.TouchContext = e
}(ns_egret || (ns_egret = {})), function(t) {
	var e = function() {
			function e() {
				this.textureCache = t.TextureCache.getInstance()
			}
			return e.prototype.load = function() {}, e.prototype.createLoadingController = function() {
				return null
			}, e.prototype.getAssets = function() {
				return null
			}, e.prototype.getTexture = function(t) {
				return this.textureCache.getTexture(t)
			}, e
		}();
	t.AssetsContext = e
}(ns_egret || (ns_egret = {})), __extends = this.__extends ||
function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype, t.prototype = new i
}, function(t) {
	var e = function(e) {
			function i(t, n) {
				e.call(this), this.type = this.url = null, this.state = i.LOAD_STATE_INIT, this.fixedUrl = this.data = null, this.preFixUrl = "", this.url = t;
				var o = t.indexOf("?");
				this.fixedUrl = o > -1 ? t.substring(0, o) : t, this.type = n
			}
			return __extends(i, e), i.prototype.load = function() {
				switch (this.state) {
				case i.LOAD_STATE_INIT:
					this.startLoading();
					break;
				case i.LOAD_STATE_LOADED:
					t.callLater(this._executeAllCallback, this)
				}
			}, i.prototype.startLoading = function() {
				var e = new t.URLRequest(this.url, this._executeAllCallback, this);
				e.type = this.type, e.prefix = "" == this.preFixUrl ? i.prefix : this.preFixUrl, t.MainContext.instance.netContext.send(e)
			}, i.prototype._executeAllCallback = function(t) {
				this.state = i.LOAD_STATE_LOADED, t && (this.data = t), this.onLoadComplete && this.onLoadComplete(this.data), this.dispatchEventWith(i.LOAD_COMPLETE, !1, this.data)
			}, i.create = function(e, n) {
				if ("undefined" == typeof n && (n = ""), null == i.__pool[e]) {
					var o = e.substring(e.lastIndexOf(".") + 1),
						o = i.__registerMap[o];
					o || (o = t.ResourceLoader), i.__pool[e] = new o(e, n)
				}
				return i.__pool[e]
			}, i.registerHandler = function(t, e) {
				i.__registerMap[t] = e
			}, i.LOAD_COMPLETE = "resource_load_complete", i.DATA_TYPE_BINARY = "binary", i.DATA_TYPE_TEXT = "text", i.DATA_TYPE_IMAGE = "image", i.LOAD_STATE_INIT = 0, i.LOAD_STATE_LOADED = 1, i.__pool = {}, i.prefix = "", i.__registerMap = {}, i
		}(t.EventDispatcher);
	t.ResourceLoader = e
}(ns_egret || (ns_egret = {})), __extends = this.__extends ||
function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype, t.prototype = new i
}, function(t) {
	var e = function(e) {
			function i() {
				e.apply(this, arguments), this._resourceUrlList = null, this._currentIndex = 0, this._state = t.LoadingController.LOAD_STATE_IDLE
			}
			return __extends(i, e), i.prototype.addResource = function(e, i, n) {
				"undefined" == typeof i && (i = null), "undefined" == typeof n && (n = ""), this.checkIsLoading() || (null == this._resourceUrlList && (this._resourceUrlList = []), e = t.ResourceLoader.create(e, i), e.preFixUrl = n, -1 == this._resourceUrlList.indexOf(e) && e.state != t.ResourceLoader.LOAD_STATE_LOADED && this._resourceUrlList.push(e))
			}, i.prototype.load = function() {
				this.checkIsLoading() || (null != this._resourceUrlList && 0 < this._resourceUrlList.length ? (this._state = i.LOAD_STATE_LOADING, this._currentIndex = 0, null != this._loadingView && this._loadingView.addToStage(), this.next(null)) : t.callLater(this.onComplete, this))
			}, i.prototype.onComplete = function() {
				this._state = i.LOAD_STATE_IDLE, this.destroy(), this.dispatchEventWith(t.ResourceLoader.LOAD_COMPLETE)
			}, i.prototype.checkIsLoading = function() {
				return this._state == i.LOAD_STATE_LOADING ? (t.Logger.info("???????????????"), !0) : !1
			}, i.prototype.next = function() {
				this.removeResourceEvent(), this.onProgress(), this._resourceUrlList.length > this._currentIndex ? (this._currentResource = this._resourceUrlList[this._currentIndex], this._currentIndex++, this._currentResource.addEventListener(t.ResourceLoader.LOAD_COMPLETE, this.next, this), this._currentResource.load()) : this.onComplete()
			}, i.prototype.removeResourceEvent = function() {
				this._currentResource && (this._currentResource.removeEventListener(t.ResourceLoader.LOAD_COMPLETE, this.next, this), this._currentResource = null)
			}, i.prototype.onProgress = function() {
				null != this._loadingView && this._loadingView.onProgress(this._currentIndex, this._resourceUrlList.length)
			}, i.prototype.setLoadingView = function(t) {
				null != this._loadingView && (this._loadingView.removeFromStage(), this._loadingView = null), this._loadingView = t
			}, i.prototype.destroy = function() {
				this.removeResourceEvent(), null != this._loadingView && (this._loadingView.removeFromStage(), this._loadingView = null), this._resourceUrlList = null
			}, i.LOAD_STATE_IDLE = 0, i.LOAD_STATE_LOADING = 1, i
		}(t.EventDispatcher);
	t.LoadingController = e
}(ns_egret || (ns_egret = {})), __extends = this.__extends ||
function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype, t.prototype = new i
}, function(t) {
	var e = function(e) {
			function i() {
				e.apply(this, arguments), this._textureHeight = this._textureWidth = this.offsetY = this.offsetX = 0
			}
			return __extends(i, e), Object.defineProperty(i.prototype, "bitmapData", {
				get: function() {
					return this._bitmapData
				},
				set: function(e) {
					var i = t.MainContext.instance.rendererContext.texture_scale_factor;
					this._bitmapData = e, this._textureWidth = e.width * i, this._textureHeight = e.height * i
				},
				enumerable: !0,
				configurable: !0
			}), i.prototype.getTextureWidth = function() {
				return this._textureWidth
			}, i.prototype.getTextureHeight = function() {
				return this._textureHeight
			}, i.create = function(t) {
				var e = new i;
				return e._path = t, e
			}, i.createWithBase64 = function(t) {
				var e = new i,
					n = new Image;
				return n.src = t, e.bitmapData = n, e
			}, i
		}(t.HashObject);
	t.Texture = e, e = function(e) {
		function i() {
			e.call(this), this.cacheCanvas = document.createElement("canvas")
		}
		return __extends(i, e), i.prototype.drawToTexture = function(e) {
			var i = this.cacheCanvas,
				n = e.getBounds();
			if (i.width = n.width, i.height = n.height, e.worldTransform.identity(), e.worldAlpha = 1, e instanceof t.DisplayObjectContainer) {
				this.offsetX = n.x, this.offsetY = n.y, e.worldTransform.append(1, 0, 0, 1, -n.x, -n.y);
				for (var n = e._children, o = 0, s = n.length; s > o; o++) n[o].updateTransform()
			}
			i = new t.HTML5CanvasRenderer(i), n = t.RenderFilter.getInstance(), o = n._drawAreaList.concat(), n._drawAreaList.length = 0, e.render(i), n._drawAreaList = o, this._bitmapData = this.cacheCanvas, this._textureWidth = this.cacheCanvas.width, this._textureHeight = this.cacheCanvas.height
		}, i
	}(e), t.RenderTexture = e
}(ns_egret || (ns_egret = {})), __extends = this.__extends ||
function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype, t.prototype = new i
}, function(t) {
	var e = function(e) {
			function i() {
				e.call(this), this._textures = {}, this._spritesheets = {}
			}
			return __extends(i, e), i.getInstance = function() {
				return null == i.instance && (i.instance = new i), i.instance
			}, i.prototype.addTexture = function(t, e) {
				this._textures[t] || (this._textures[t] = e)
			}, i.prototype.removeTexture = function(t) {
				delete this._textures[t]
			}, i.prototype.getTexture = function(e) {
				var i = this._textures[e];
				return i || t.Logger.warning("texture??????", e), i
			}, i.prototype.addSpriteSheet = function(t, e, i) {
				this.addTexture(t, i), this._spritesheets[t] = e
			}, i.prototype.removeSpriteSheet = function(t) {
				this.removeTexture(t), delete this._spritesheets[t]
			}, i.prototype.getSpriteSheet = function(t) {
				return this._spritesheets[t]
			}, i
		}(t.HashObject);
	t.TextureCache = e
}(ns_egret || (ns_egret = {})), __extends = this.__extends ||
function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype, t.prototype = new i
}, function(t) {
	var e = function(e) {
			function i() {
				e.call(this)
			}
			return __extends(i, e), i.getInstance = function() {
				return t.MainContext.instance.netContext
			}, i.prototype.send = function() {}, i.STATE_COMPLETE = "XHRLoaderComplete", i.GET = "GET", i.POST = "POST", i
		}(t.HashObject);
	t.NetContext = e;
	var i = function() {
			return function(t, i, n, o, s) {
				"undefined" == typeof o && (o = e.GET), "undefined" == typeof s && (s = void 0), this.url = t, this.callback = i, this.thisObj = n, this.method = o, this.data = s, this.prefix = ""
			}
		}();
	t.URLRequest = i
}(ns_egret || (ns_egret = {})), __extends = this.__extends ||
function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype, t.prototype = new i
}, function(t) {
	var e = function(t) {
			function e() {
				t.call(this), this.frameRate = 60
			}
			return __extends(e, t), e.prototype.executeMainLoop = function() {}, e
		}(t.HashObject);
	t.DeviceContext = e
}(ns_egret || (ns_egret = {})), __extends = this.__extends ||
function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype, t.prototype = new i
}, function(t) {
	var e = function(e) {
			function i(i) {
				e.call(this), this.texture = i, this._defaultPadding = 5, this._scaleHeight = this._scaleWidth = 0, this._top = this._bottom = this._left = this._right = this._defaultPadding, this._topLeftBitmap = t.Bitmap.initWithTexture(i), this._topLeftBitmap.spriteFrame = new t.SpriteSheetFrame, this.addChild(this._topLeftBitmap), this._topMiddleBitmap = t.Bitmap.initWithTexture(i), this._topMiddleBitmap.spriteFrame = new t.SpriteSheetFrame, this.addChild(this._topMiddleBitmap), this._topRightBitmap = t.Bitmap.initWithTexture(i), this._topRightBitmap.spriteFrame = new t.SpriteSheetFrame, this.addChild(this._topRightBitmap), this._middleLeftBitmap = t.Bitmap.initWithTexture(i), this._middleLeftBitmap.spriteFrame = new t.SpriteSheetFrame, this.addChild(this._middleLeftBitmap), this._middleMiddleBitmap = t.Bitmap.initWithTexture(i), this._middleMiddleBitmap.spriteFrame = new t.SpriteSheetFrame, this.addChild(this._middleMiddleBitmap), this._middleRightBitmap = t.Bitmap.initWithTexture(i), this._middleRightBitmap.spriteFrame = new t.SpriteSheetFrame, this.addChild(this._middleRightBitmap), this._bottomLeftBitmap = t.Bitmap.initWithTexture(i), this._bottomLeftBitmap.spriteFrame = new t.SpriteSheetFrame, this.addChild(this._bottomLeftBitmap), this._bottomMiddleBitmap = t.Bitmap.initWithTexture(i), this._bottomMiddleBitmap.spriteFrame = new t.SpriteSheetFrame, this.addChild(this._bottomMiddleBitmap), this._bottomRightBitmap = t.Bitmap.initWithTexture(i), this._bottomRightBitmap.spriteFrame = new t.SpriteSheetFrame, this.addChild(this._bottomRightBitmap)
			}
			return __extends(i, e), i.prototype.setScaleGrid = function(e, i, n, o) {
				"undefined" == typeof e && (e = this._defaultPadding), "undefined" == typeof i && (i = this._defaultPadding), "undefined" == typeof n && (n = this._defaultPadding), "undefined" == typeof o && (o = this._defaultPadding), t.DEBUG && t.DEBUG.SCALE_BITMAP_SET_SCALE_GRID && t.DEBUG.checkSetScaleGrid(this.texture, e, i, n, o), this._top = e, this._bottom = i, this._left = n, this._right = o
			}, Object.defineProperty(i.prototype, "width", {
				set: function(t) {
					this._explicitWidth = t, t > 0 && !isNaN(t) && (this._scaleWidth = t)
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "height", {
				set: function(t) {
					this._explicitHeight = t, t > 0 && !isNaN(t) && (this._scaleHeight = t)
				},
				enumerable: !0,
				configurable: !0
			}), i.prototype.updateTransform = function() {
				if (this.visible) {
					var i, n, o = this.texture;
					this.spriteFrame ? (i = this.spriteFrame.w, n = this.spriteFrame.h) : (i = o._textureWidth, n = o._textureHeight);
					var s = this.spriteFrame ? this.spriteFrame.x : 0,
						r = this.spriteFrame ? this.spriteFrame.y : 0,
						a = this._scaleWidth,
						h = this._scaleHeight;
					(!o || 0 == a || 0 == h) && t.Logger.fatal("ScaleBitmap????????????ScaleSize");
					var o = n - this._top - this._bottom,
						l = i - this._left - this._right,
						h = h - this._top - this._bottom,
						a = a - this._left - this._right;
					this._topLeftBitmap.spriteFrame.x = 0 + s, this._topLeftBitmap.spriteFrame.y = 0 + r, this._topLeftBitmap.spriteFrame.w = this._left, this._topLeftBitmap.spriteFrame.h = this._top, this._topMiddleBitmap.spriteFrame.x = this._left + s, this._topMiddleBitmap.spriteFrame.y = 0 + r, this._topMiddleBitmap.spriteFrame.w = l, this._topMiddleBitmap.spriteFrame.h = this._top, this.setChildScaleX(this._topMiddleBitmap, a / l), this._topMiddleBitmap.x = this._left, this._topRightBitmap.spriteFrame.x = i - this._right + s, this._topRightBitmap.spriteFrame.y = 0 + r, this._topRightBitmap.spriteFrame.w = this._right, this._topRightBitmap.spriteFrame.h = this._top, this._topRightBitmap.x = this._left + a, this._middleLeftBitmap.spriteFrame.x = 0 + s, this._middleLeftBitmap.spriteFrame.y = this._top + r, this._middleLeftBitmap.spriteFrame.w = this._left, this._middleLeftBitmap.spriteFrame.h = o, this.setChildScaleY(this._middleLeftBitmap, h / o), this._middleLeftBitmap.y = this._top, this._middleMiddleBitmap.spriteFrame.x = this._left + s, this._middleMiddleBitmap.spriteFrame.y = this._top + r, this._middleMiddleBitmap.spriteFrame.w = l, this._middleMiddleBitmap.spriteFrame.h = o, this.setChildScaleX(this._middleMiddleBitmap, a / l), this.setChildScaleY(this._middleMiddleBitmap, h / o), this._middleMiddleBitmap.x = this._left, this._middleMiddleBitmap.y = this._top, this._middleRightBitmap.spriteFrame.x = i - this._right + s, this._middleRightBitmap.spriteFrame.y = this._top + r, this._middleRightBitmap.spriteFrame.w = this._right, this._middleRightBitmap.spriteFrame.h = o, this.setChildScaleY(this._middleRightBitmap, h / o), this._middleRightBitmap.x = this._left + a, this._middleRightBitmap.y = this._top, this._bottomLeftBitmap.spriteFrame.x = 0 + s, this._bottomLeftBitmap.spriteFrame.y = n - this._bottom + r, this._bottomLeftBitmap.spriteFrame.w = this._left, this._bottomLeftBitmap.spriteFrame.h = this._bottom, this._bottomLeftBitmap.y = this._top + h, this._bottomMiddleBitmap.spriteFrame.x = this._left + s, this._bottomMiddleBitmap.spriteFrame.y = n - this._bottom + r, this._bottomMiddleBitmap.spriteFrame.w = l, this._bottomMiddleBitmap.spriteFrame.h = this._bottom, this.setChildScaleX(this._bottomMiddleBitmap, a / l), this._bottomMiddleBitmap.x = this._left, this._bottomMiddleBitmap.y = this._top + h, this._bottomRightBitmap.spriteFrame.x = i - this._right + s, this._bottomRightBitmap.spriteFrame.y = n - this._bottom + r, this._bottomRightBitmap.spriteFrame.w = this._right, this._bottomRightBitmap.spriteFrame.h = this._bottom, this._bottomRightBitmap.x = this._left + a, this._bottomRightBitmap.y = this._top + h, e.prototype.updateTransform.call(this)
				}
			}, i.prototype.setChildScaleX = function(t, e) {
				0 > e && (e = 0), t.scaleX = e
			}, i.prototype.setChildScaleY = function(t, e) {
				0 > e && (e = 0), t.scaleY = e
			}, i
		}(t.DisplayObjectContainer);
	t.Scale9Bitmap = e
}(ns_egret || (ns_egret = {})), ns_egret.Codec = {
	name: "Jacob__Codec"
}, ns_egret.Utils = {}, ns_egret.Utils.unzip = function() {
	return ns_egret.Codec.GZip.gunzip.apply(ns_egret.Codec.GZip, arguments)
}, ns_egret.Utils.unzipBase64 = function() {
	var t = ns_egret.Codec.Base64.decode.apply(ns_egret.Codec.Base64, arguments);
	return ns_egret.Codec.GZip.gunzip.apply(ns_egret.Codec.GZip, [t])
}, ns_egret.Utils.unzipBase64AsArray = function(t, e) {
	e = e || 1;
	var i, n, o, s = this.unzipBase64(t),
		r = [];
	for (i = 0, o = s.length / e; o > i; i++) for (r[i] = 0, n = e - 1; n >= 0; --n) r[i] += s.charCodeAt(i * e + n) << 8 * n;
	return r
}, ns_egret.Utils.unzipAsArray = function(t, e) {
	e = e || 1;
	var i, n, o, s = this.unzip(t),
		r = [];
	for (i = 0, o = s.length / e; o > i; i++) for (r[i] = 0, n = e - 1; n >= 0; --n) r[i] += s.charCodeAt(i * e + n) << 8 * n;
	return r
}, ns_egret.Utils.StringToArray = function(t) {
	t = t.split(",");
	var e, i = [];
	for (e = 0; e < t.length; e++) i.push(parseInt(t[e]));
	return i
}, ns_egret.Codec.Base64 = {
	name: "Jacob__Codec__Base64"
}, ns_egret.Codec.Base64._keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", ns_egret.Codec.Base64.decode = function(t) {
	var e, i, n, o, s, r = [],
		a = 0;
	for (t = t.replace(/[^A-Za-z0-9\+\/\=]/g, ""); a < t.length;) e = this._keyStr.indexOf(t.charAt(a++)), i = this._keyStr.indexOf(t.charAt(a++)), o = this._keyStr.indexOf(t.charAt(a++)), s = this._keyStr.indexOf(t.charAt(a++)), e = e << 2 | i >> 4, i = (15 & i) << 4 | o >> 2, n = (3 & o) << 6 | s, r.push(String.fromCharCode(e)), 64 != o && r.push(String.fromCharCode(i)), 64 != s && r.push(String.fromCharCode(n));
	return r = r.join("")
}, ns_egret.Codec.Base64.decodeAsArray = function(t, e) {
	var i, n, o, s = this.decode(t),
		r = [];
	for (i = 0, o = s.length / e; o > i; i++) for (r[i] = 0, n = e - 1; n >= 0; --n) r[i] += s.charCodeAt(i * e + n) << 8 * n;
	return r
}, ns_egret.Utils.uint8ArrayToUint32Array = function(t) {
	if (0 != t.length % 4) return null;
	for (var e = t.length / 4, i = window.Uint32Array ? new Uint32Array(e) : [], n = 0; e > n; n++) {
		var o = 4 * n;
		i[n] = t[o] + 256 * t[o + 1] + 65536 * t[o + 2] + 16777216 * t[o + 3]
	}
	return i
}, ns_egret.Codec.GZip = function(t) {
	this.data = t, this.debug = !1, this.gpflags = void 0, this.files = 0, this.unzipped = [], this.buf32k = Array(32768), this.bIdx = 0, this.modeZIP = !1, this.bytepos = 0, this.bb = 1, this.bits = 0, this.nameBuf = [], this.fileout = void 0, this.literalTree = Array(ns_egret.Codec.GZip.LITERALS), this.distanceTree = Array(32), this.treepos = 0, this.Places = null, this.len = 0, this.fpos = Array(17), this.fpos[0] = 0, this.fmax = this.flens = void 0
}, ns_egret.Codec.GZip.gunzip = function(t) {
	return new ns_egret.Codec.GZip(t).gunzip()[0][0]
}, ns_egret.Codec.GZip.HufNode = function() {
	this.b1 = this.b0 = 0, this.jump = null, this.jumppos = -1
}, ns_egret.Codec.GZip.LITERALS = 288, ns_egret.Codec.GZip.NAMEMAX = 256, ns_egret.Codec.GZip.bitReverse = [0, 128, 64, 192, 32, 160, 96, 224, 16, 144, 80, 208, 48, 176, 112, 240, 8, 136, 72, 200, 40, 168, 104, 232, 24, 152, 88, 216, 56, 184, 120, 248, 4, 132, 68, 196, 36, 164, 100, 228, 20, 148, 84, 212, 52, 180, 116, 244, 12, 140, 76, 204, 44, 172, 108, 236, 28, 156, 92, 220, 60, 188, 124, 252, 2, 130, 66, 194, 34, 162, 98, 226, 18, 146, 82, 210, 50, 178, 114, 242, 10, 138, 74, 202, 42, 170, 106, 234, 26, 154, 90, 218, 58, 186, 122, 250, 6, 134, 70, 198, 38, 166, 102, 230, 22, 150, 86, 214, 54, 182, 118, 246, 14, 142, 78, 206, 46, 174, 110, 238, 30, 158, 94, 222, 62, 190, 126, 254, 1, 129, 65, 193, 33, 161, 97, 225, 17, 145, 81, 209, 49, 177, 113, 241, 9, 137, 73, 201, 41, 169, 105, 233, 25, 153, 89, 217, 57, 185, 121, 249, 5, 133, 69, 197, 37, 165, 101, 229, 21, 149, 85, 213, 53, 181, 117, 245, 13, 141, 77, 205, 45, 173, 109, 237, 29, 157, 93, 221, 61, 189, 125, 253, 3, 131, 67, 195, 35, 163, 99, 227, 19, 147, 83, 211, 51, 179, 115, 243, 11, 139, 75, 203, 43, 171, 107, 235, 27, 155, 91, 219, 59, 187, 123, 251, 7, 135, 71, 199, 39, 167, 103, 231, 23, 151, 87, 215, 55, 183, 119, 247, 15, 143, 79, 207, 47, 175, 111, 239, 31, 159, 95, 223, 63, 191, 127, 255], ns_egret.Codec.GZip.cplens = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0], ns_egret.Codec.GZip.cplext = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 99, 99], ns_egret.Codec.GZip.cpdist = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577], ns_egret.Codec.GZip.cpdext = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13], ns_egret.Codec.GZip.border = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15], ns_egret.Codec.GZip.prototype.gunzip = function() {
	return this.outputArr = [], this.nextFile(), this.unzipped
}, ns_egret.Codec.GZip.prototype.readByte = function() {
	return this.bits += 8, this.bytepos < this.data.length ? this.data.charCodeAt(this.bytepos++) : -1
}, ns_egret.Codec.GZip.prototype.byteAlign = function() {
	this.bb = 1
}, ns_egret.Codec.GZip.prototype.readBit = function() {
	var t;
	return this.bits++, t = 1 & this.bb, this.bb >>= 1, 0 == this.bb && (this.bb = this.readByte(), t = 1 & this.bb, this.bb = this.bb >> 1 | 128), t
}, ns_egret.Codec.GZip.prototype.readBits = function(t) {
	for (var e = 0, i = t; i--;) e = e << 1 | this.readBit();
	return t && (e = ns_egret.Codec.GZip.bitReverse[e] >> 8 - t), e
}, ns_egret.Codec.GZip.prototype.flushBuffer = function() {
	this.bIdx = 0
}, ns_egret.Codec.GZip.prototype.addBuffer = function(t) {
	this.buf32k[this.bIdx++] = t, this.outputArr.push(String.fromCharCode(t)), 32768 == this.bIdx && (this.bIdx = 0)
}, ns_egret.Codec.GZip.prototype.IsPat = function() {
	for (;;) {
		if (this.fpos[this.len] >= this.fmax) return -1;
		if (this.flens[this.fpos[this.len]] == this.len) return this.fpos[this.len]++;
		this.fpos[this.len]++
	}
}, ns_egret.Codec.GZip.prototype.Rec = function() {
	var t, e = this.Places[this.treepos];
	if (17 == this.len) return -1;
	if (this.treepos++, this.len++, t = this.IsPat(), t >= 0) e.b0 = t;
	else if (e.b0 = 32768, this.Rec()) return -1;
	if (t = this.IsPat(), t >= 0) e.b1 = t, e.jump = null;
	else if (e.b1 = 32768, e.jump = this.Places[this.treepos], e.jumppos = this.treepos, this.Rec()) return -1;
	return this.len--, 0
}, ns_egret.Codec.GZip.prototype.CreateTree = function(t, e, i) {
	for (this.Places = t, this.treepos = 0, this.flens = i, this.fmax = e, t = 0; 17 > t; t++) this.fpos[t] = 0;
	return this.len = 0, this.Rec() ? -1 : 0
}, ns_egret.Codec.GZip.prototype.DecodeValue = function(t) {
	for (var e, i, n = 0, o = t[n];;) if (e = this.readBit()) {
		if (!(32768 & o.b1)) return o.b1;
		for (o = o.jump, e = t.length, i = 0; e > i; i++) if (t[i] === o) {
			n = i;
			break
		}
	} else {
		if (!(32768 & o.b0)) return o.b0;
		n++, o = t[n]
	}
	return -1
}, ns_egret.Codec.GZip.prototype.DeflateLoop = function() {
	var t, e, i, n, o;
	do
	if (t = this.readBit(), i = this.readBits(2), 0 == i) for (this.byteAlign(), i = this.readByte(), i |= this.readByte() << 8, e = this.readByte(), e |= this.readByte() << 8, 65535 & (i ^ ~e) && document.write("BlockLen checksum mismatch\n"); i--;) e = this.readByte(), this.addBuffer(e);
	else if (1 == i) for (;;) if (i = ns_egret.Codec.GZip.bitReverse[this.readBits(7)] >> 1, i > 23 ? (i = i << 1 | this.readBit(), i > 199 ? (i -= 128, i = i << 1 | this.readBit()) : (i -= 48, i > 143 && (i += 136))) : i += 256, 256 > i) this.addBuffer(i);
	else {
		if (256 == i) break;
		var s;
		for (i -= 257, o = this.readBits(ns_egret.Codec.GZip.cplext[i]) + ns_egret.Codec.GZip.cplens[i], i = ns_egret.Codec.GZip.bitReverse[this.readBits(5)] >> 3, 8 < ns_egret.Codec.GZip.cpdext[i] ? (s = this.readBits(8), s |= this.readBits(ns_egret.Codec.GZip.cpdext[i] - 8) << 8) : s = this.readBits(ns_egret.Codec.GZip.cpdext[i]), s += ns_egret.Codec.GZip.cpdist[i], i = 0; o > i; i++) e = this.buf32k[this.bIdx - s & 32767], this.addBuffer(e)
	} else if (2 == i) {
		var r = Array(320);
		for (e = 257 + this.readBits(5), s = 1 + this.readBits(5), n = 4 + this.readBits(4), i = 0; 19 > i; i++) r[i] = 0;
		for (i = 0; n > i; i++) r[ns_egret.Codec.GZip.border[i]] = this.readBits(3);
		for (o = this.distanceTree.length, n = 0; o > n; n++) this.distanceTree[n] = new ns_egret.Codec.GZip.HufNode;
		if (this.CreateTree(this.distanceTree, 19, r, 0)) return this.flushBuffer(), 1;
		o = e + s, n = 0;
		for (var a = -1; o > n;) if (a++, i = this.DecodeValue(this.distanceTree), 16 > i) r[n++] = i;
		else if (16 == i) {
			var h;
			if (i = 3 + this.readBits(2), n + i > o) return this.flushBuffer(), 1;
			for (h = n ? r[n - 1] : 0; i--;) r[n++] = h
		} else {
			if (i = 17 == i ? 3 + this.readBits(3) : 11 + this.readBits(7), n + i > o) return this.flushBuffer(), 1;
			for (; i--;) r[n++] = 0
		}
		for (o = this.literalTree.length, n = 0; o > n; n++) this.literalTree[n] = new ns_egret.Codec.GZip.HufNode;
		if (this.CreateTree(this.literalTree, e, r, 0)) return this.flushBuffer(), 1;
		for (o = this.literalTree.length, n = 0; o > n; n++) this.distanceTree[n] = new ns_egret.Codec.GZip.HufNode;
		for (i = [], n = e; n < r.length; n++) i[n - e] = r[n];
		if (this.CreateTree(this.distanceTree, s, i, 0)) return this.flushBuffer(), 1;
		for (;;) if (i = this.DecodeValue(this.literalTree), i >= 256) {
			if (i -= 256, 0 == i) break;
			for (i--, o = this.readBits(ns_egret.Codec.GZip.cplext[i]) + ns_egret.Codec.GZip.cplens[i], i = this.DecodeValue(this.distanceTree), 8 < ns_egret.Codec.GZip.cpdext[i] ? (s = this.readBits(8), s |= this.readBits(ns_egret.Codec.GZip.cpdext[i] - 8) << 8) : s = this.readBits(ns_egret.Codec.GZip.cpdext[i]), s += ns_egret.Codec.GZip.cpdist[i]; o--;) e = this.buf32k[this.bIdx - s & 32767], this.addBuffer(e)
		} else this.addBuffer(i)
	}
	while (!t);
	return this.flushBuffer(), this.byteAlign(), 0
}, ns_egret.Codec.GZip.prototype.unzipFile = function(t) {
	var e;
	for (this.gunzip(), e = 0; e < this.unzipped.length; e++) if (this.unzipped[e][1] == t) return this.unzipped[e][0]
}, ns_egret.Codec.GZip.prototype.nextFile = function() {
	this.outputArr = [], this.modeZIP = !1;
	var t = [];
	if (t[0] = this.readByte(), t[1] = this.readByte(), 120 == t[0] && 218 == t[1] && (this.DeflateLoop(), this.unzipped[this.files] = [this.outputArr.join(""), "geonext.gxt"], this.files++), 31 == t[0] && 139 == t[1] && (this.skipdir(), this.unzipped[this.files] = [this.outputArr.join(""), "file"], this.files++), 80 == t[0] && 75 == t[1] && (this.modeZIP = !0, t[2] = this.readByte(), t[3] = this.readByte(), 3 == t[2] && 4 == t[3])) {
		t[0] = this.readByte(), t[1] = this.readByte(), this.gpflags = this.readByte(), this.gpflags |= this.readByte() << 8, t = this.readByte(), t |= this.readByte() << 8, this.readByte(), this.readByte(), this.readByte(), this.readByte(), this.readByte(), this.readByte(), this.readByte(), this.readByte(), this.readByte(), this.readByte(), this.readByte(), this.readByte();
		var e = this.readByte(),
			e = e | this.readByte() << 8,
			i = this.readByte(),
			i = i | this.readByte() << 8,
			n = 0;
		for (this.nameBuf = []; e--;) {
			var o = this.readByte();
			"/" == o | ":" == o ? n = 0 : n < ns_egret.Codec.GZip.NAMEMAX - 1 && (this.nameBuf[n++] = String.fromCharCode(o))
		}
		this.fileout || (this.fileout = this.nameBuf);
		for (var n = 0; i > n;) this.readByte(), n++;
		8 == t && (this.DeflateLoop(), this.unzipped[this.files] = [this.outputArr.join(""), this.nameBuf.join("")], this.files++), this.skipdir()
	}
}, ns_egret.Codec.GZip.prototype.skipdir = function() {
	var t, e = [];
	if (8 & this.gpflags && (e[0] = this.readByte(), e[1] = this.readByte(), e[2] = this.readByte(), e[3] = this.readByte(), this.readByte(), this.readByte(), this.readByte(), this.readByte(), this.readByte(), this.readByte(), this.readByte(), this.readByte()), this.modeZIP && this.nextFile(), e[0] = this.readByte(), 8 != e[0]) return 0;
	if (this.gpflags = this.readByte(), this.readByte(), this.readByte(), this.readByte(), this.readByte(), this.readByte(), this.readByte(), 4 & this.gpflags) for (e[0] = this.readByte(), e[2] = this.readByte(), this.len = e[0] + 256 * e[1], e = 0; e < this.len; e++) this.readByte();
	if (8 & this.gpflags) for (e = 0, this.nameBuf = []; t = this.readByte();)("7" == t || ":" == t) && (e = 0), e < ns_egret.Codec.GZip.NAMEMAX - 1 && (this.nameBuf[e++] = t);
	if (16 & this.gpflags) for (; this.readByte(););
	2 & this.gpflags && (this.readByte(), this.readByte()), this.DeflateLoop(), this.readByte(), this.readByte(), this.readByte(), this.readByte(), this.modeZIP && this.nextFile()
}, function() {
	function t(t) {
		throw t
	}
	function e(t, e) {
		var i = t.split("."),
			n = x;
		!(i[0] in n) && n.execScript && n.execScript("var " + i[0]);
		for (var o; i.length && (o = i.shift());) i.length || e === g ? n = n[o] ? n[o] : n[o] = {} : n[o] = e
	}
	function i(t) {
		if ("string" == typeof t) {
			t = t.split("");
			var e, i;
			for (e = 0, i = t.length; i > e; e++) t[e] = (255 & t[e].charCodeAt(0)) >>> 0
		}
		e = 1, i = 0;
		for (var n, o = t.length, s = 0; o > 0;) {
			n = o > 1024 ? 1024 : o, o -= n;
			do e += t[s++], i += e;
			while (--n);
			e %= 65521, i %= 65521
		}
		return (i << 16 | e) >>> 0
	}
	function n(e, i) {
		this.index = "number" == typeof i ? i : 0, this.i = 0, this.buffer = e instanceof(b ? Uint8Array : Array) ? e : new(b ? Uint8Array : Array)(32768), 2 * this.buffer.length <= this.index && t(Error("invalid index")), this.buffer.length <= this.index && this.f()
	}
	function o(t) {
		this.buffer = new(b ? Uint16Array : Array)(2 * t), this.length = 0
	}
	function s(t) {
		var e, i, n, o, s, r, a, h, l, p = t.length,
			c = 0,
			u = Number.POSITIVE_INFINITY;
		for (h = 0; p > h; ++h) t[h] > c && (c = t[h]), t[h] < u && (u = t[h]);
		for (e = 1 << c, i = new(b ? Uint32Array : Array)(e), n = 1, o = 0, s = 2; c >= n;) {
			for (h = 0; p > h; ++h) if (t[h] === n) {
				for (r = 0, a = o, l = 0; n > l; ++l) r = r << 1 | 1 & a, a >>= 1;
				for (l = r; e > l; l += s) i[l] = n << 16 | h;
				++o
			}++n, o <<= 1, s <<= 1
		}
		return [i, c, u]
	}
	function r(t, e) {
		this.h = T, this.w = 0, this.input = t, this.b = 0, e && (e.lazy && (this.w = e.lazy), "number" == typeof e.compressionType && (this.h = e.compressionType), e.outputBuffer && (this.a = b && e.outputBuffer instanceof Array ? new Uint8Array(e.outputBuffer) : e.outputBuffer), "number" == typeof e.outputIndex && (this.b = e.outputIndex)), this.a || (this.a = new(b ? Uint8Array : Array)(32768))
	}
	function a(t, e) {
		this.length = t, this.G = e
	}
	function h() {
		var e = B;
		switch (v) {
		case 3 === e:
			return [257, e - 3, 0];
		case 4 === e:
			return [258, e - 4, 0];
		case 5 === e:
			return [259, e - 5, 0];
		case 6 === e:
			return [260, e - 6, 0];
		case 7 === e:
			return [261, e - 7, 0];
		case 8 === e:
			return [262, e - 8, 0];
		case 9 === e:
			return [263, e - 9, 0];
		case 10 === e:
			return [264, e - 10, 0];
		case 12 >= e:
			return [265, e - 11, 1];
		case 14 >= e:
			return [266, e - 13, 1];
		case 16 >= e:
			return [267, e - 15, 1];
		case 18 >= e:
			return [268, e - 17, 1];
		case 22 >= e:
			return [269, e - 19, 2];
		case 26 >= e:
			return [270, e - 23, 2];
		case 30 >= e:
			return [271, e - 27, 2];
		case 34 >= e:
			return [272, e - 31, 2];
		case 42 >= e:
			return [273, e - 35, 3];
		case 50 >= e:
			return [274, e - 43, 3];
		case 58 >= e:
			return [275, e - 51, 3];
		case 66 >= e:
			return [276, e - 59, 3];
		case 82 >= e:
			return [277, e - 67, 4];
		case 98 >= e:
			return [278, e - 83, 4];
		case 114 >= e:
			return [279, e - 99, 4];
		case 130 >= e:
			return [280, e - 115, 4];
		case 162 >= e:
			return [281, e - 131, 5];
		case 194 >= e:
			return [282, e - 163, 5];
		case 226 >= e:
			return [283, e - 195, 5];
		case 257 >= e:
			return [284, e - 227, 5];
		case 258 === e:
			return [285, e - 258, 0];
		default:
			t("invalid length: " + e)
		}
	}
	function l(e, i) {
		function n(e, i) {
			var n, o = e.G,
				s = [],
				r = 0;
			n = I[e.length], s[r++] = 65535 & n, s[r++] = n >> 16 & 255, s[r++] = n >> 24;
			var a;
			switch (v) {
			case 1 === o:
				a = [0, o - 1, 0];
				break;
			case 2 === o:
				a = [1, o - 2, 0];
				break;
			case 3 === o:
				a = [2, o - 3, 0];
				break;
			case 4 === o:
				a = [3, o - 4, 0];
				break;
			case 6 >= o:
				a = [4, o - 5, 1];
				break;
			case 8 >= o:
				a = [5, o - 7, 1];
				break;
			case 12 >= o:
				a = [6, o - 9, 2];
				break;
			case 16 >= o:
				a = [7, o - 13, 2];
				break;
			case 24 >= o:
				a = [8, o - 17, 3];
				break;
			case 32 >= o:
				a = [9, o - 25, 3];
				break;
			case 48 >= o:
				a = [10, o - 33, 4];
				break;
			case 64 >= o:
				a = [11, o - 49, 4];
				break;
			case 96 >= o:
				a = [12, o - 65, 5];
				break;
			case 128 >= o:
				a = [13, o - 97, 5];
				break;
			case 192 >= o:
				a = [14, o - 129, 6];
				break;
			case 256 >= o:
				a = [15, o - 193, 6];
				break;
			case 384 >= o:
				a = [16, o - 257, 7];
				break;
			case 512 >= o:
				a = [17, o - 385, 7];
				break;
			case 768 >= o:
				a = [18, o - 513, 8];
				break;
			case 1024 >= o:
				a = [19, o - 769, 8];
				break;
			case 1536 >= o:
				a = [20, o - 1025, 9];
				break;
			case 2048 >= o:
				a = [21, o - 1537, 9];
				break;
			case 3072 >= o:
				a = [22, o - 2049, 10];
				break;
			case 4096 >= o:
				a = [23, o - 3073, 10];
				break;
			case 6144 >= o:
				a = [24, o - 4097, 11];
				break;
			case 8192 >= o:
				a = [25, o - 6145, 11];
				break;
			case 12288 >= o:
				a = [26, o - 8193, 12];
				break;
			case 16384 >= o:
				a = [27, o - 12289, 12];
				break;
			case 24576 >= o:
				a = [28, o - 16385, 13];
				break;
			case 32768 >= o:
				a = [29, o - 24577, 13];
				break;
			default:
				t("invalid distance")
			}
			for (n = a, s[r++] = n[0], s[r++] = n[1], s[r++] = n[2], o = 0, r = s.length; r > o; ++o) d[m++] = s[o];
			y[s[0]]++, f[s[3]]++, _ = e.length + i - 1, p = null
		}
		var o, s, r, h, l, p, c, u = {},
			d = b ? new Uint16Array(2 * i.length) : [],
			m = 0,
			_ = 0,
			y = new(b ? Uint32Array : Array)(286),
			f = new(b ? Uint32Array : Array)(30),
			x = e.w;
		if (!b) {
			for (r = 0; 285 >= r;) y[r++] = 0;
			for (r = 0; 29 >= r;) f[r++] = 0
		}
		for (y[256] = 1, o = 0, s = i.length; s > o; ++o) {
			for (r = l = 0, h = 3; h > r && o + r !== s; ++r) l = l << 8 | i[o + r];
			if (u[l] === g && (u[l] = []), r = u[l], !(0 < _--)) {
				for (; 0 < r.length && 32768 < o - r[0];) r.shift();
				if (o + 3 >= s) {
					for (p && n(p, -1), r = 0, h = s - o; h > r; ++r) c = i[o + r], d[m++] = c, ++y[c];
					break
				}
				if (0 < r.length) {
					l = h = g;
					var C = 0,
						E = g,
						w = g,
						A = E = g,
						D = i.length,
						w = 0,
						A = r.length;
					t: for (; A > w; w++) {
						if (h = r[A - w - 1], E = 3, C > 3) {
							for (E = C; E > 3; E--) if (i[h + E - 1] !== i[o + E - 1]) continue t;
							E = C
						}
						for (; 258 > E && D > o + E && i[h + E] === i[o + E];)++E;
						if (E > C && (l = h, C = E), 258 === E) break
					}
					h = new a(C, o - l),
					p ? p.length < h.length ? (c = i[o - 1], d[m++] = c, ++y[c], n(h, 0)) : n(p, -1) : h.length < x ? p = h : n(h, 0)
				} else p ? n(p, -1) : (c = i[o], d[m++] = c, ++y[c])
			}
			r.push(o)
		}
		return d[m++] = 256, y[256]++, e.L = y, e.K = f, b ? d.subarray(0, m) : d
	}
	function p(t, e) {
		function i(t) {
			var e = _[t][y[t]];
			e === p ? (i(t + 1), i(t + 1)) : --c[e], ++y[t]
		}
		var n, s, r, a = t.length,
			h = new o(572),
			l = new(b ? Uint8Array : Array)(a);
		if (!b) for (s = 0; a > s; s++) l[s] = 0;
		for (s = 0; a > s; ++s) 0 < t[s] && h.push(s, t[s]);
		if (a = Array(h.length / 2), n = new(b ? Uint32Array : Array)(h.length / 2), 1 === a.length) return l[h.pop().index] = 1, l;
		for (s = 0, r = h.length / 2; r > s; ++s) a[s] = h.pop(), n[s] = a[s].value;
		var p = n.length;
		s = new(b ? Uint16Array : Array)(e);
		var h = new(b ? Uint8Array : Array)(e),
			c = new(b ? Uint8Array : Array)(p);
		r = Array(e);
		var u, d, m, _ = Array(e),
			y = Array(e),
			f = (1 << e) - p,
			g = 1 << e - 1;
		for (s[e - 1] = p, u = 0; e > u; ++u) g > f ? h[u] = 0 : (h[u] = 1, f -= g), f <<= 1, s[e - 2 - u] = (s[e - 1 - u] / 2 | 0) + p;
		for (s[0] = h[0], r[0] = Array(s[0]), _[0] = Array(s[0]), u = 1; e > u; ++u) s[u] > 2 * s[u - 1] + h[u] && (s[u] = 2 * s[u - 1] + h[u]), r[u] = Array(s[u]), _[u] = Array(s[u]);
		for (f = 0; p > f; ++f) c[f] = e;
		for (g = 0; g < s[e - 1]; ++g) r[e - 1][g] = n[g], _[e - 1][g] = g;
		for (f = 0; e > f; ++f) y[f] = 0;
		for (1 === h[e - 1] && (--c[0], ++y[e - 1]), u = e - 2; u >= 0; --u) {
			for (d = f = 0, m = y[u + 1], g = 0; g < s[u]; g++) d = r[u + 1][m] + r[u + 1][m + 1], d > n[f] ? (r[u][g] = d, _[u][g] = p, m += 2) : (r[u][g] = n[f], _[u][g] = f, ++f);
			y[u] = 0, 1 === h[u] && i(u)
		}
		for (n = c, s = 0, r = a.length; r > s; ++s) l[a[s].index] = n[s];
		return l
	}
	function c(e) {
		var i, n, o, s = new(b ? Uint16Array : Array)(e.length),
			r = [],
			a = [],
			h = 0;
		for (i = 0, n = e.length; n > i; i++) r[e[i]] = (0 | r[e[i]]) + 1;
		for (i = 1, n = 16; n >= i; i++) a[i] = h, h += 0 | r[i], h > 1 << i && t("overcommitted"), h <<= 1;
		for (65536 > h && t("undercommitted"), i = 0, n = e.length; n > i; i++) for (h = a[e[i]], a[e[i]] += 1, r = s[i] = 0, o = e[i]; o > r; r++) s[i] = s[i] << 1 | 1 & h, h >>>= 1;
		return s
	}
	function u(t, e) {
		this.input = t, this.a = new(b ? Uint8Array : Array)(32768), this.h = P.j;
		var i, n = {};
		!e && (e = {}) || "number" != typeof e.compressionType || (this.h = e.compressionType);
		for (i in e) n[i] = e[i];
		n.outputBuffer = this.a, this.z = new r(this.input, n)
	}
	function d(e, i) {
		switch (this.k = [], this.l = 32768, this.e = this.g = this.c = this.q = 0, this.input = b ? new Uint8Array(e) : e, this.s = !1, this.m = O, this.B = !1, (i || !(i = {})) && (i.index && (this.c = i.index), i.bufferSize && (this.l = i.bufferSize), i.bufferType && (this.m = i.bufferType), i.resize && (this.B = i.resize)), this.m) {
		case M:
			this.b = 32768, this.a = new(b ? Uint8Array : Array)(32768 + this.l + 258);
			break;
		case O:
			this.b = 0, this.a = new(b ? Uint8Array : Array)(this.l), this.f = this.J, this.t = this.H, this.o = this.I;
			break;
		default:
			t(Error("invalid inflate mode"))
		}
	}
	function m(e, i) {
		for (var n, o = e.g, s = e.e, r = e.input, a = e.c; i > s;) n = r[a++], n === g && t(Error("input buffer is broken")), o |= n << s, s += 8;
		return e.g = o >>> i, e.e = s - i, e.c = a, o & (1 << i) - 1
	}
	function _(e, i) {
		for (var n, o = e.g, s = e.e, r = e.input, a = e.c, h = i[0], l = i[1]; l > s;) n = r[a++], n === g && t(Error("input buffer is broken")), o |= n << s, s += 8;
		return r = h[o & (1 << l) - 1], h = r >>> 16, e.g = o >> h, e.e = s - h, e.c = a, 65535 & r
	}
	function y(t) {
		function e(t, e, i) {
			var n, o, s, r;
			for (r = 0; t > r;) switch (n = _(this, e)) {
			case 16:
				for (s = 3 + m(this, 2); s--;) i[r++] = o;
				break;
			case 17:
				for (s = 3 + m(this, 3); s--;) i[r++] = 0;
				o = 0;
				break;
			case 18:
				for (s = 11 + m(this, 7); s--;) i[r++] = 0;
				o = 0;
				break;
			default:
				o = i[r++] = n
			}
			return i
		}
		var i, n = m(t, 5) + 257,
			o = m(t, 5) + 1,
			r = m(t, 4) + 4,
			a = new(b ? Uint8Array : Array)(R.length);
		for (i = 0; r > i; ++i) a[R[i]] = m(t, 3);
		r = s(a), a = new(b ? Uint8Array : Array)(n), i = new(b ? Uint8Array : Array)(o), t.o(s(e.call(t, n, r, a)), s(e.call(t, o, r, i)))
	}
	function f(e, i) {
		var n, o;
		switch (this.input = e, this.c = 0, (i || !(i = {})) && (i.index && (this.c = i.index), i.verify && (this.M = i.verify)), n = e[this.c++], o = e[this.c++], 15 & n) {
		case H:
			this.method = H;
			break;
		default:
			t(Error("unsupported compression method"))
		}
		0 !== ((n << 8) + o) % 31 && t(Error("invalid fcheck flag:" + ((n << 8) + o) % 31)), 32 & o && t(Error("fdict flag is not supported")), this.A = new d(e, {
			index: this.c,
			bufferSize: i.bufferSize,
			bufferType: i.bufferType,
			resize: i.resize
		})
	}
	var g = void 0,
		v = !0,
		x = this,
		b = "undefined" != typeof Uint8Array && "undefined" != typeof Uint16Array && "undefined" != typeof Uint32Array;
	n.prototype.f = function() {
		var t, e = this.buffer,
			i = e.length,
			n = new(b ? Uint8Array : Array)(i << 1);
		if (b) n.set(e);
		else for (t = 0; i > t; ++t) n[t] = e[t];
		return this.buffer = n
	}, n.prototype.d = function(t, e, i) {
		var n = this.buffer,
			o = this.index,
			s = this.i,
			r = n[o];
		if (i && e > 1 && (t = e > 8 ? (S[255 & t] << 24 | S[t >>> 8 & 255] << 16 | S[t >>> 16 & 255] << 8 | S[t >>> 24 & 255]) >> 32 - e : S[t] >> 8 - e), 8 > e + s) r = r << e | t, s += e;
		else for (i = 0; e > i; ++i) r = r << 1 | t >> e - i - 1 & 1, 8 === ++s && (s = 0, n[o++] = S[r], r = 0, o === n.length && (n = this.f()));
		n[o] = r, this.buffer = n, this.i = s, this.index = o
	}, n.prototype.finish = function() {
		var t, e = this.buffer,
			i = this.index;
		return 0 < this.i && (e[i] <<= 8 - this.i, e[i] = S[e[i]], i++), b ? t = e.subarray(0, i) : (e.length = i, t = e), t
	};
	var C, E = new(b ? Uint8Array : Array)(256);
	for (C = 0; 256 > C; ++C) {
		for (var w = C, A = w, D = 7, w = w >>> 1; w; w >>>= 1) A <<= 1, A |= 1 & w, --D;
		E[C] = (A << D & 255) >>> 0
	}
	var S = E,
		E = [0, 1996959894, 3993919788, 2567524794, 124634137, 1886057615, 3915621685, 2657392035, 249268274, 2044508324, 3772115230, 2547177864, 162941995, 2125561021, 3887607047, 2428444049, 498536548, 1789927666, 4089016648, 2227061214, 450548861, 1843258603, 4107580753, 2211677639, 325883990, 1684777152, 4251122042, 2321926636, 335633487, 1661365465, 4195302755, 2366115317, 997073096, 1281953886, 3579855332, 2724688242, 1006888145, 1258607687, 3524101629, 2768942443, 901097722, 1119000684, 3686517206, 2898065728, 853044451, 1172266101, 3705015759, 2882616665, 651767980, 1373503546, 3369554304, 3218104598, 565507253, 1454621731, 3485111705, 3099436303, 671266974, 1594198024, 3322730930, 2970347812, 795835527, 1483230225, 3244367275, 3060149565, 1994146192, 31158534, 2563907772, 4023717930, 1907459465, 112637215, 2680153253, 3904427059, 2013776290, 251722036, 2517215374, 3775830040, 2137656763, 141376813, 2439277719, 3865271297, 1802195444, 476864866, 2238001368, 4066508878, 1812370925, 453092731, 2181625025, 4111451223, 1706088902, 314042704, 2344532202, 4240017532, 1658658271, 366619977, 2362670323, 4224994405, 1303535960, 984961486, 2747007092, 3569037538, 1256170817, 1037604311, 2765210733, 3554079995, 1131014506, 879679996, 2909243462, 3663771856, 1141124467, 855842277, 2852801631, 3708648649, 1342533948, 654459306, 3188396048, 3373015174, 1466479909, 544179635, 3110523913, 3462522015, 1591671054, 702138776, 2966460450, 3352799412, 1504918807, 783551873, 3082640443, 3233442989, 3988292384, 2596254646, 62317068, 1957810842, 3939845945, 2647816111, 81470997, 1943803523, 3814918930, 2489596804, 225274430, 2053790376, 3826175755, 2466906013, 167816743, 2097651377, 4027552580, 2265490386, 503444072, 1762050814, 4150417245, 2154129355, 426522225, 1852507879, 4275313526, 2312317920, 282753626, 1742555852, 4189708143, 2394877945, 397917763, 1622183637, 3604390888, 2714866558, 953729732, 1340076626, 3518719985, 2797360999, 1068828381, 1219638859, 3624741850, 2936675148, 906185462, 1090812512, 3747672003, 2825379669, 829329135, 1181335161, 3412177804, 3160834842, 628085408, 1382605366, 3423369109, 3138078467, 570562233, 1426400815, 3317316542, 2998733608, 733239954, 1555261956, 3268935591, 3050360625, 752459403, 1541320221, 2607071920, 3965973030, 1969922972, 40735498, 2617837225, 3943577151, 1913087877, 83908371, 2512341634, 3803740692, 2075208622, 213261112, 2463272603, 3855990285, 2094854071, 198958881, 2262029012, 4057260610, 1759359992, 534414190, 2176718541, 4139329115, 1873836001, 414664567, 2282248934, 4279200368, 1711684554, 285281116, 2405801727, 4167216745, 1634467795, 376229701, 2685067896, 3608007406, 1308918612, 956543938, 2808555105, 3495958263, 1231636301, 1047427035, 2932959818, 3654703836, 1088359270, 936918e3, 2847714899, 3736837829, 1202900863, 817233897, 3183342108, 3401237130, 1404277552, 615818150, 3134207493, 3453421203, 1423857449, 601450431, 3009837614, 3294710456, 1567103746, 711928724, 3020668471, 3272380065, 1510334235, 755167117];
	b && new Uint32Array(E), o.prototype.getParent = function(t) {
		return 2 * ((t - 2) / 4 | 0)
	}, o.prototype.push = function(t, e) {
		var i, n, o, s = this.buffer;
		for (i = this.length, s[this.length++] = e, s[this.length++] = t; i > 0 && (n = this.getParent(i), s[i] > s[n]);) o = s[i], s[i] = s[n], s[n] = o, o = s[i + 1], s[i + 1] = s[n + 1], s[n + 1] = o, i = n;
		return this.length
	}, o.prototype.pop = function() {
		var t, e, i, n, o, s = this.buffer;
		for (e = s[0], t = s[1], this.length -= 2, s[0] = s[this.length], s[1] = s[this.length + 1], o = 0;
		(n = 2 * o + 2, !(n >= this.length)) && (n + 2 < this.length && s[n + 2] > s[n] && (n += 2), s[n] > s[o]);) i = s[o], s[o] = s[n], s[n] = i, i = s[o + 1], s[o + 1] = s[n + 1], s[n + 1] = i, o = n;
		return {
			index: t,
			value: e,
			length: this.length
		}
	};
	var T = 2,
		E = {
			NONE: 0,
			r: 1,
			j: T,
			N: 3
		},
		L = [];
	for (C = 0; 288 > C; C++) switch (v) {
	case 143 >= C:
		L.push([C + 48, 8]);
		break;
	case 255 >= C:
		L.push([C - 144 + 400, 9]);
		break;
	case 279 >= C:
		L.push([C - 256 + 0, 7]);
		break;
	case 287 >= C:
		L.push([C - 280 + 192, 8]);
		break;
	default:
		t("invalid literal: " + C)
	}
	r.prototype.n = function() {
		var e, i, o, s, r = this.input;
		switch (this.h) {
		case 0:
			for (o = 0, s = r.length; s > o;) {
				i = b ? r.subarray(o, o + 65535) : r.slice(o, o + 65535), o += i.length;
				var a = o === s,
					h = g,
					u = h = g,
					u = h = g,
					d = this.a,
					m = this.b;
				if (b) {
					for (d = new Uint8Array(this.a.buffer); d.length <= m + i.length + 5;) d = new Uint8Array(d.length << 1);
					d.set(this.a)
				}
				if (h = a ? 1 : 0, d[m++] = 0 | h, h = i.length, u = ~h + 65536 & 65535, d[m++] = 255 & h, d[m++] = h >>> 8 & 255, d[m++] = 255 & u, d[m++] = u >>> 8 & 255, b) d.set(i, m), m += i.length, d = d.subarray(0, m);
				else {
					for (h = 0, u = i.length; u > h; ++h) d[m++] = i[h];
					d.length = m
				}
				this.b = m, this.a = d
			}
			break;
		case 1:
			for (o = new n(new Uint8Array(this.a.buffer), this.b), o.d(1, 1, v), o.d(1, 2, v), r = l(this, r), i = 0, a = r.length; a > i; i++) if (s = r[i], n.prototype.d.apply(o, L[s]), s > 256) o.d(r[++i], r[++i], v), o.d(r[++i], 5), o.d(r[++i], r[++i], v);
			else if (256 === s) break;
			this.a = o.finish(), this.b = this.a.length;
			break;
		case T:
			s = new n(new Uint8Array(this.a), this.b);
			var _, y, f, x, C, E, w = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
				h = Array(19),
				d = T;
			for (s.d(1, 1, v), s.d(d, 2, v), r = l(this, r), u = p(this.L, 15), x = c(u), d = p(this.K, 7), m = c(d), _ = 286; _ > 257 && 0 === u[_ - 1]; _--);
			for (y = 30; y > 1 && 0 === d[y - 1]; y--);
			var A = _,
				D = y;
			e = new(b ? Uint32Array : Array)(A + D);
			var S, B, I = new(b ? Uint32Array : Array)(316);
			for (C = new(b ? Uint8Array : Array)(19), E = f = 0; A > E; E++) e[f++] = u[E];
			for (E = 0; D > E; E++) e[f++] = d[E];
			if (!b) for (E = 0, D = C.length; D > E; ++E) C[E] = 0;
			for (E = S = 0, D = e.length; D > E; E += f) {
				for (f = 1; D > E + f && e[E + f] === e[E]; ++f);
				if (A = f, 0 === e[E]) if (3 > A) for (; 0 < A--;) I[S++] = 0, C[0]++;
				else for (; A > 0;) B = 138 > A ? A : 138, B > A - 3 && A > B && (B = A - 3), 10 >= B ? (I[S++] = 17, I[S++] = B - 3, C[17]++) : (I[S++] = 18, I[S++] = B - 11, C[18]++), A -= B;
				else if (I[S++] = e[E], C[e[E]]++, A--, 3 > A) for (; 0 < A--;) I[S++] = e[E], C[e[E]]++;
				else for (; A > 0;) B = 6 > A ? A : 6, B > A - 3 && A > B && (B = A - 3), I[S++] = 16, I[S++] = B - 3, C[16]++, A -= B
			}
			for (e = b ? I.subarray(0, S) : I.slice(0, S), C = p(C, 7), E = 0; 19 > E; E++) h[E] = C[w[E]];
			for (f = 19; f > 4 && 0 === h[f - 1]; f--);
			for (w = c(C), s.d(_ - 257, 5, v), s.d(y - 1, 5, v), s.d(f - 4, 4, v), E = 0; f > E; E++) s.d(h[E], 3, v);
			for (E = 0, h = e.length; h > E; E++) if (i = e[E], s.d(w[i], C[i], v), i >= 16) {
				switch (E++, i) {
				case 16:
					a = 2;
					break;
				case 17:
					a = 3;
					break;
				case 18:
					a = 7;
					break;
				default:
					t("invalid code: " + i)
				}
				s.d(e[E], a, v)
			}
			for (a = [x, u], m = [m, d], i = a[0], a = a[1], d = m[0], x = m[1], m = 0, h = r.length; h > m; ++m) if (o = r[m], s.d(i[o], a[o], v), o > 256) s.d(r[++m], r[++m], v), u = r[++m], s.d(d[u], x[u], v), s.d(r[++m], r[++m], v);
			else if (256 === o) break;
			this.a = s.finish(), this.b = this.a.length;
			break;
		default:
			t("invalid compression type")
		}
		return this.a
	}, C = [];
	var B;
	for (B = 3; 258 >= B; B++) w = h(), C[B] = w[2] << 24 | w[1] << 16 | w[0];
	var I = b ? new Uint32Array(C) : C,
		P = E;
	u.prototype.n = function() {
		var e, n, o, s, r = 0;
		switch (s = this.a, e = H) {
		case H:
			n = Math.LOG2E * Math.log(32768) - 8;
			break;
		default:
			t(Error("invalid compression method"))
		}
		switch (n = n << 4 | e, s[r++] = n, e) {
		case H:
			switch (this.h) {
			case P.NONE:
				o = 0;
				break;
			case P.r:
				o = 1;
				break;
			case P.j:
				o = 2;
				break;
			default:
				t(Error("unsupported compression type"))
			}
			break;
		default:
			t(Error("invalid compression method"))
		}
		return e = o << 6 | 0, s[r++] = e | 31 - (256 * n + e) % 31, e = i(this.input), this.z.b = r, s = this.z.n(), r = s.length, b && (s = new Uint8Array(s.buffer), s.length <= r + 4 && (this.a = new Uint8Array(s.length + 4), this.a.set(s), s = this.a), s = s.subarray(0, r + 4)), s[r++] = e >> 24 & 255, s[r++] = e >> 16 & 255, s[r++] = e >> 8 & 255, s[r++] = 255 & e, s
	}, e("Zlib.Deflate", u), e("Zlib.Deflate.compress", function(t, e) {
		return new u(t, e).n()
	}), e("Zlib.Deflate.CompressionType", P), e("Zlib.Deflate.CompressionType.NONE", P.NONE), e("Zlib.Deflate.CompressionType.FIXED", P.r), e("Zlib.Deflate.CompressionType.DYNAMIC", P.j);
	var M = 0,
		O = 1,
		E = {
			D: M,
			C: O
		};
	d.prototype.p = function() {
		for (; !this.s;) {
			var e = m(this, 3);
			switch (1 & e && (this.s = v), e >>>= 1) {
			case 0:
				var e = this.input,
					i = this.c,
					n = this.a,
					o = this.b,
					s = g,
					r = g,
					a = g,
					h = n.length,
					s = g;
				switch (this.e = this.g = 0, s = e[i++], s === g && t(Error("invalid uncompressed block header: LEN (first byte)")), r = s, s = e[i++], s === g && t(Error("invalid uncompressed block header: LEN (second byte)")), r |= s << 8, s = e[i++], s === g && t(Error("invalid uncompressed block header: NLEN (first byte)")), a = s, s = e[i++], s === g && t(Error("invalid uncompressed block header: NLEN (second byte)")), a |= s << 8, r === ~a && t(Error("invalid uncompressed block header: length verify")), i + r > e.length && t(Error("input buffer is broken")), this.m) {
				case M:
					for (; o + r > n.length;) {
						if (s = h - o, r -= s, b) n.set(e.subarray(i, i + s), o), o += s, i += s;
						else for (; s--;) n[o++] = e[i++];
						this.b = o, n = this.f(), o = this.b
					}
					break;
				case O:
					for (; o + r > n.length;) n = this.f({
						v: 2
					});
					break;
				default:
					t(Error("invalid inflate mode"))
				}
				if (b) n.set(e.subarray(i, i + r), o), o += r, i += r;
				else for (; r--;) n[o++] = e[i++];
				this.c = i, this.b = o, this.a = n;
				break;
			case 1:
				this.o(k, U);
				break;
			case 2:
				y(this);
				break;
			default:
				t(Error("unknown BTYPE: " + e))
			}
		}
		return this.t()
	}, C = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
	var R = b ? new Uint16Array(C) : C;
	C = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 258, 258];
	var N = b ? new Uint16Array(C) : C;
	C = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0];
	var F = b ? new Uint8Array(C) : C;
	C = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577];
	var V = b ? new Uint16Array(C) : C;
	C = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13];
	var G = b ? new Uint8Array(C) : C;
	for (C = new(b ? Uint8Array : Array)(288), w = 0, A = C.length; A > w; ++w) C[w] = 143 >= w ? 8 : 255 >= w ? 9 : 279 >= w ? 7 : 8;
	var k = s(C);
	for (C = new(b ? Uint8Array : Array)(30), w = 0, A = C.length; A > w; ++w) C[w] = 5;
	var U = s(C);
	for (d.prototype.o = function(t, e) {
		var i = this.a,
			n = this.b;
		this.u = t;
		for (var o, s, r, a = i.length - 258; 256 !== (o = _(this, t));) if (256 > o) n >= a && (this.b = n, i = this.f(), n = this.b), i[n++] = o;
		else for (o -= 257, r = N[o], 0 < F[o] && (r += m(this, F[o])), o = _(this, e), s = V[o], 0 < G[o] && (s += m(this, G[o])), n >= a && (this.b = n, i = this.f(), n = this.b); r--;) i[n] = i[n++-s];
		for (; 8 <= this.e;) this.e -= 8, this.c--;
		this.b = n
	}, d.prototype.I = function(t, e) {
		var i = this.a,
			n = this.b;
		this.u = t;
		for (var o, s, r, a = i.length; 256 !== (o = _(this, t));) if (256 > o) n >= a && (i = this.f(), a = i.length), i[n++] = o;
		else for (o -= 257, r = N[o], 0 < F[o] && (r += m(this, F[o])), o = _(this, e), s = V[o], 0 < G[o] && (s += m(this, G[o])), n + r > a && (i = this.f(), a = i.length); r--;) i[n] = i[n++-s];
		for (; 8 <= this.e;) this.e -= 8, this.c--;
		this.b = n
	}, d.prototype.f = function() {
		var t, e, i = new(b ? Uint8Array : Array)(this.b - 32768),
			n = this.b - 32768,
			o = this.a;
		if (b) i.set(o.subarray(32768, i.length));
		else for (t = 0, e = i.length; e > t; ++t) i[t] = o[t + 32768];
		if (this.k.push(i), this.q += i.length, b) o.set(o.subarray(n, n + 32768));
		else for (t = 0; 32768 > t; ++t) o[t] = o[n + t];
		return this.b = 32768, o
	}, d.prototype.J = function(t) {
		var e, i, n, o, s = this.input.length / this.c + 1 | 0,
			r = this.input,
			a = this.a;
		return t && ("number" == typeof t.v && (s = t.v), "number" == typeof t.F && (s += t.F)), 2 > s ? (i = (r.length - this.c) / this.u[2], o = 258 * (i / 2) | 0, n = o < a.length ? a.length + o : a.length << 1) : n = a.length * s, b ? (e = new Uint8Array(n), e.set(a)) : e = a, this.a = e
	}, d.prototype.t = function() {
		var t, e, i, n, o, s = 0,
			r = this.a,
			a = this.k,
			h = new(b ? Uint8Array : Array)(this.q + (this.b - 32768));
		if (0 === a.length) return b ? this.a.subarray(32768, this.b) : this.a.slice(32768, this.b);
		for (e = 0, i = a.length; i > e; ++e) for (t = a[e], n = 0, o = t.length; o > n; ++n) h[s++] = t[n];
		for (e = 32768, i = this.b; i > e; ++e) h[s++] = r[e];
		return this.k = [], this.buffer = h
	}, d.prototype.H = function() {
		var t, e = this.b;
		return b ? this.B ? (t = new Uint8Array(e), t.set(this.a.subarray(0, e))) : t = this.a.subarray(0, e) : (this.a.length > e && (this.a.length = e), t = this.a), this.buffer = t
	}, f.prototype.p = function() {
		var e, n, o = this.input;
		return e = this.A.p(), this.c = this.A.c, this.M && (n = (o[this.c++] << 24 | o[this.c++] << 16 | o[this.c++] << 8 | o[this.c++]) >>> 0, n !== i(e) && t(Error("invalid adler-32 checksum"))), e
	}, e("Zlib.Inflate", f), e("Zlib.Inflate.BufferType", E), E.ADAPTIVE = E.C, E.BLOCK = E.D, e("Zlib.Inflate.prototype.decompress", f.prototype.p), E = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15], b && new Uint16Array(E), E = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 258, 258], b && new Uint16Array(E), E = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0], b && new Uint8Array(E), E = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577], b && new Uint16Array(E), E = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13], b && new Uint8Array(E), E = new(b ? Uint8Array : Array)(288), C = 0, w = E.length; w > C; ++C) E[C] = 143 >= C ? 8 : 255 >= C ? 9 : 279 >= C ? 7 : 8;
	for (s(E), E = new(b ? Uint8Array : Array)(30), C = 0, w = E.length; w > C; ++C) E[C] = 5;
	s(E);
	var H = 8
}.call(this), __extends = this.__extends ||
function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype, t.prototype = new i
}, function(t) {
	var e = function(e) {
			function i() {
				e.call(this), this._isSupportDOMParser = this._xmlDict = this._parser = null, this._xmlDict = {}, window.DOMParser ? (this._isSupportDOMParser = !0, this._parser = new DOMParser) : this._isSupportDOMParser = !1
			}
			return __extends(i, e), i.getInstance = function() {
				return i._instance || (i._instance = new i), i._instance
			}, i.prototype.parse = function(e) {
				var i = e;
				e = this.getList(e), e = this.parserXML(e).documentElement, "plist" != e.tagName && t.Logger.fatal(i + "??????plist?????????????????????plist");
				for (var i = null, n = 0, o = e.childNodes.length; o > n && (i = e.childNodes[n], !(1 == i.nodeType)); n++);
				return this.parseNode(i)
			}, i.prototype.tmxParse = function(t, e) {
				return "undefined" == typeof e && (e = !1), e || (t = this.getList(t)), this.parserXML(t)
			}, i.prototype.parserXML = function(e) {
				for (var i = 0;
				"\n" == e.charAt(i) || "	" == e.charAt(i) || "\r" == e.charAt(i) || " " == e.charAt(i);) i++;
				return 0 != i && (e = e.substring(i, e.length)), this._isSupportDOMParser ? i = this._parser.parseFromString(e, "text/xml") : (i = new ActiveXObject("Microsoft.XMLDOM"), i.async = "false", i.loadXML(e)), null == i && t.Logger.info("xml not found!"), i
			}, i.prototype.parseNode = function(t) {
				var e = null;
				switch (t.tagName) {
				case "dict":
					e = this.parseDict(t);
					break;
				case "array":
					e = this.parseArray(t);
					break;
				case "string":
					if (1 == t.childNodes.length) e = t.firstChild.nodeValue;
					else for (var e = "", i = 0; i < t.childNodes.length; i++) e += t.childNodes[i].nodeValue;
					break;
				case "false":
					e = !1;
					break;
				case "true":
					e = !0;
					break;
				case "real":
					e = parseFloat(t.firstChild.nodeValue);
					break;
				case "integer":
					e = parseInt(t.firstChild.nodeValue, 10)
				}
				return e
			}, i.prototype.parseArray = function(t) {
				for (var e = [], i = 0, n = t.childNodes.length; n > i; i++) {
					var o = t.childNodes[i];
					1 == o.nodeType && e.push(this.parseNode(o))
				}
				return e
			}, i.prototype.parseDict = function(t) {
				for (var e = {}, i = null, n = 0, o = t.childNodes.length; o > n; n++) {
					var s = t.childNodes[n];
					1 == s.nodeType && ("key" == s.tagName ? i = s.firstChild.nodeValue : e[i] = this.parseNode(s))
				}
				return e
			}, i.prototype.getName = function(t) {
				var e = t.lastIndexOf("/", t.length) + 1,
					i = t.lastIndexOf(".", t.length);
				return t.substring(e, i)
			}, i.prototype.getExt = function(t) {
				var e = t.lastIndexOf(".", t.length) + 1;
				return t.substring(e, t.length)
			}, i.prototype.getList = function(t) {
				return null != this._xmlDict ? this._xmlDict[t] : null
			}, i._instance = null, i
		}(t.HashObject);
	t.SAXParser = e
}(ns_egret || (ns_egret = {})), __extends = this.__extends ||
function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype, t.prototype = new i
}, function(t) {
	var e = function(e) {
			function i() {
				e.call(this), this.translate = this.isHD ?
				function(e) {
					return "translate3d(" + e.x + "px, " + (e.y - t.MainContext.instance.stage.stageHeight) + "px, 0) "
				} : function(t) {
					return "translate(" + t.x + "px, " + t.y + "px) "
				}, this.rotate = this.isHD ?
				function(t) {
					return "rotateZ(" + t + "deg) "
				} : function(t) {
					return "rotate(" + t + "deg) "
				}, this.ua = navigator.userAgent.toLowerCase();
				var i = this.ua.match(/micromessenger|qqbrowser|mqqbrowser|ucbrowser|360browser|baidubrowser|maxthon|ie|opera|firefox/) || this.ua.match(/chrome|safari/);
				switch (i && 0 < i.length && (i = i[0], "micromessenger" == i && (this.type = "wechat"), this.type = i), this.type = "unknow", this.type) {
				case "firefox":
					this.pfx = "Moz", this.isHD = !0;
					break;
				case "chrome":
				case "safari":
					this.pfx = "webkit", this.isHD = !0;
					break;
				case "opera":
					this.pfx = "O", this.isHD = !1;
					break;
				case "ie":
					this.pfx = "ms", this.isHD = !1;
					break;
				default:
					this.pfx = "webkit", this.isHD = !0
				}
				this.trans = this.pfx + "Transform", this.isMobile = -1 != this.ua.indexOf("mobile") || -1 != this.ua.indexOf("android")
			}
			return __extends(i, e), i.getInstance = function() {
				return null == i.instance && (i.instance = new i), i.instance
			}, i.prototype.$new = function(t) {
				return this.$(document.createElement(t))
			}, i.prototype.$ = function(e) {
				var n = document;
				return (e = e instanceof HTMLElement ? e : n.querySelector(e)) && (e.find = e.find || this.$, e.hasClass = e.hasClass ||
				function(t) {
					return this.className.match(RegExp("(\\s|^)" + t + "(\\s|$)"))
				}, e.addClass = e.addClass ||
				function(t) {
					return this.hasClass(t) || (this.className && (this.className += " "), this.className += t), this
				}, e.removeClass = e.removeClass ||
				function(t) {
					return this.hasClass(t) && (this.className = this.className.replace(t, "")), this
				}, e.remove = e.remove ||
				function() {}, e.appendTo = e.appendTo ||
				function(t) {
					return t.appendChild(this), this
				}, e.prependTo = e.prependTo ||
				function(t) {
					return t.childNodes[0] ? t.insertBefore(this, t.childNodes[0]) : t.appendChild(this), this
				}, e.transforms = e.transforms ||
				function() {
					return this.style[i.getInstance().trans] = i.getInstance().translate(this.position) + i.getInstance().rotate(this.rotation) + i.getInstance().scale(this.scale) + i.getInstance().skew(this.skew), this
				}, e.position = e.position || {
					x: 0,
					y: 0
				}, e.rotation = e.rotation || 0, e.scale = e.scale || {
					x: 1,
					y: 1
				}, e.skew = e.skew || {
					x: 0,
					y: 0
				}, e.translates = function(e, i) {
					return this.position.x = e, this.position.y = i - t.MainContext.instance.stage.stageHeight, this.transforms(), this
				}, e.rotate = function(t) {
					return this.rotation = t, this.transforms(), this
				}, e.resize = function(t, e) {
					return this.scale.x = t, this.scale.y = e, this.transforms(), this
				}, e.setSkew = function(t, e) {
					return this.skew.x = t, this.skew.y = e, this.transforms(), this
				}), e
			}, i.prototype.scale = function(t) {
				return "scale(" + t.x + ", " + t.y + ") "
			}, i.prototype.skew = function(t) {
				return "skewX(" + -t.x + "deg) skewY(" + t.y + "deg)"
			}, i
		}(t.HashObject);
	t.Browser = e
}(ns_egret || (ns_egret = {})), function(t) {
	var e = function() {
			function e(e) {
				"undefined" == typeof e && (e = ""), this._xmlStr = "", this._xmlStr = e, "" != e && (e = t.SAXParser.getInstance().tmxParse(e, !0), this._ansXML(e.documentElement))
			}
			return e.prototype._ansXML = function(t) {
				var i = 0;
				if (0 < t.childNodes.length) for (var n = 0; n < t.childNodes.length; n++) {
					var o = t.childNodes[n];
					if (1 == o.nodeType) {
						var s = new e("");
						s._ansXML(o), o = o.nodeName, null == this[o] && (this[o] = []), this[o].push(s), i++
					}
				}
				if (0 == i && (this.value = t.textContent), 0 < t.attributes.length) for (i = 0; i < t.attributes.length; i++) n = t.attributes[i], this["$" + n.name] = n.value
			}, e
		}();
	t.XML = e
}(ns_egret || (ns_egret = {})), __extends = this.__extends ||
function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype, t.prototype = new i
}, function(t) {
	var e = function(e) {
			function i(t, i, n) {
				e.call(this), this._target = null, this.loop = this.ignoreGlobalPause = this._useTicks = !1, this._actions = this._steps = this.pluginData = null, this.paused = !1, this.duration = 0, this._prevPos = -1, this.position = null, this._stepPosition = this._prevPosition = 0, this.passive = !1, this.initialize(t, i, n)
			}
			return __extends(i, e), i.get = function(t, e, n, o) {
				return "undefined" == typeof e && (e = null), "undefined" == typeof n && (n = null), "undefined" == typeof o && (o = !1), o && i.removeTweens(t), new i(t, e, n)
			}, i.removeTweens = function(e) {
				if (e.tween_count) {
					for (var n = i._tweens, o = n.length - 1; o >= 0; o--) n[o]._target == e && (n[o].paused = !0, n.splice(o, 1));
					e.tween_count = 0
				} else t.Logger.warning("target??????????????????tween")
			}, i.tick = function(t, e) {
				"undefined" == typeof e && (e = !1);
				for (var n = i._tweens, o = n.length - 1; o >= 0; o--) {
					var s = n[o];
					e && !s.ignoreGlobalPause || s.paused || s.tick(s._useTicks ? 1 : t)
				}
			}, i._register = function(e, n) {
				var o = e._target,
					s = i._tweens;
				if (n) o && (o.tween_count = o.tween_count ? o.tween_count + 1 : 1), s.push(e), i._inited || (t.Ticker.getInstance().register(i.tick, null), i._inited = !0);
				else for (o && o.tween_count--, o = s.length; o--;) if (s[o] == e) {
					s.splice(o, 1);
					break
				}
			}, i.removeAllTweens = function() {
				for (var t = i._tweens, e = 0, n = t.length; n > e; e++) {
					var o = t[e];
					o.paused = !0, o._target.tweenjs_count = 0
				}
				t.length = 0
			}, i.prototype.initialize = function(t, e, n) {
				this._target = t, e && (this._useTicks = e.useTicks, this.ignoreGlobalPause = e.ignoreGlobalPause, this.loop = e.loop, e.onChange && this.addEventListener("change", e.onChange, e.onChangeObj), e.override && i.removeTweens(t)), this.pluginData = n || {}, this._curQueueProps = {}, this._initQueueProps = {}, this._steps = [], this._actions = [], e && e.paused ? this.paused = !0 : i._register(this, !0), e && null != e.position && this.setPosition(e.position, i.NONE)
			}, i.prototype.setPosition = function(t, e) {
				"undefined" == typeof e && (e = 1), 0 > t && (t = 0);
				var i = t,
					n = !1;
				if (i >= this.duration && (this.loop ? i %= this.duration : (i = this.duration, n = !0)), i == this._prevPos) return n;
				var o = this._prevPos;
				if (this.position = this._prevPos = i, this._prevPosition = t, this._target) if (n) this._updateTargetProps(null, 1);
				else if (0 < this._steps.length) {
					for (var s = 0, r = this._steps.length; r > s && !(this._steps[s].t > i); s++);
					s = this._steps[s - 1], this._updateTargetProps(s, (this._stepPosition = i - s.t) / s.d)
				}
				return 0 != e && 0 < this._actions.length && (this._useTicks ? this._runActions(i, i) : 1 == e && o > i ? (o != this.duration && this._runActions(o, this.duration), this._runActions(0, i, !0)) : this._runActions(o, i)), n && this.setPaused(!0), this.dispatchEventWith("change"), n
			}, i.prototype._runActions = function(t, e, i) {
				"undefined" == typeof i && (i = !1);
				var n = t,
					o = e,
					s = -1,
					r = this._actions.length,
					a = 1;
				for (t > e && (n = e, o = t, s = r, r = a = -1);
				(s += a) != r;) {
					e = this._actions[s];
					var h = e.t;
					(h == o || h > n && o > h || i && h == t) && e.f.apply(e.o, e.p)
				}
			}, i.prototype._updateTargetProps = function(t, e) {
				var n, o, s, r;
				if (t || 1 != e) {
					if (this.passive = !! t.v) return;
					t.e && (e = t.e(e, 0, 1, 1)), n = t.p0, o = t.p1
				} else this.passive = !1, n = o = this._curQueueProps;
				for (var a in this._initQueueProps) {
					null == (s = n[a]) && (n[a] = s = this._initQueueProps[a]), null == (r = o[a]) && (o[a] = r = s), s = s == r || 0 == e || 1 == e || "number" != typeof s ? 1 == e ? r : s : s + (r - s) * e;
					var h = !1;
					if (r = i._plugins[a]) for (var l = 0, p = r.length; p > l; l++) {
						var c = r[l].tween(this, a, s, n, o, e, !! t && n == o, !t);
						c == i.IGNORE ? h = !0 : s = c
					}
					h || (this._target[a] = s)
				}
			}, i.prototype.setPaused = function(t) {
				return this.paused = t, i._register(this, !t), this
			}, i.prototype._cloneProps = function(t) {
				var e, i = {};
				for (e in t) i[e] = t[e];
				return i
			}, i.prototype._addStep = function(t) {
				return 0 < t.d && (this._steps.push(t), t.t = this.duration, this.duration += t.d), this
			}, i.prototype._appendQueueProps = function(t) {
				var e, n, o, s, r, a;
				for (a in t) if (void 0 === this._initQueueProps[a]) {
					if (n = this._target[a], e = i._plugins[a]) for (o = 0, s = e.length; s > o; o++) n = e[o].init(this, a, n);
					this._initQueueProps[a] = this._curQueueProps[a] = void 0 === n ? null : n
				}
				for (a in t) {
					if (n = this._curQueueProps[a], e = i._plugins[a]) for (r = r || {}, o = 0, s = e.length; s > o; o++) e[o].step && e[o].step(this, a, n, t[a], r);
					this._curQueueProps[a] = t[a]
				}
				return r && this._appendQueueProps(r), this._curQueueProps
			}, i.prototype._addAction = function(t) {
				return t.t = this.duration, this._actions.push(t), this
			}, i.prototype._set = function(t, e) {
				for (var i in t) e[i] = t[i]
			}, i.prototype.wait = function(t, e) {
				if ("undefined" == typeof e && (e = !1), null == t || 0 >= t) return this;
				var i = this._cloneProps(this._curQueueProps);
				return this._addStep({
					d: t,
					p0: i,
					p1: i,
					v: e
				})
			}, i.prototype.to = function(t, e, i) {
				return "undefined" == typeof i && (i = void 0), (isNaN(e) || 0 > e) && (e = 0), this._addStep({
					d: e || 0,
					p0: this._cloneProps(this._curQueueProps),
					e: i,
					p1: this._cloneProps(this._appendQueueProps(t))
				})
			}, i.prototype.call = function(t, e, i) {
				return "undefined" == typeof e && (e = void 0), "undefined" == typeof i && (i = void 0), this._addAction({
					f: t,
					p: i ? i : [this],
					o: e ? e : this._target
				})
			}, i.prototype.set = function(t, e) {
				return "undefined" == typeof e && (e = null), this._addAction({
					f: this._set,
					o: this,
					p: [t, e ? e : this._target]
				})
			}, i.prototype.play = function(t) {
				return t || (t = this), this.call(t.setPaused, [!1], t)
			}, i.prototype.pause = function(t) {
				return t || (t = this), this.call(t.setPaused, [!0], t)
			}, i.prototype.tick = function(t) {
				this.paused || this.setPosition(this._prevPosition + t)
			}, i.NONE = 0, i.LOOP = 1, i.REVERSE = 2, i._tweens = [], i.IGNORE = {}, i._plugins = {}, i._inited = !1, i
		}(t.EventDispatcher);
	t.Tween = e
}(ns_egret || (ns_egret = {})), function(t) {
	var e = function() {
			function e() {
				t.Logger.fatal("Ease??????????????????")
			}
			return e.get = function(t) {
				return -1 > t && (t = -1), t > 1 && (t = 1), function(e) {
					return 0 == t ? e : 0 > t ? e * (e * -t + 1 + t) : e * ((2 - e) * t + (1 - t))
				}
			}, e.getPowIn = function(t) {
				return function(e) {
					return Math.pow(e, t)
				}
			}, e.getPowOut = function(t) {
				return function(e) {
					return 1 - Math.pow(1 - e, t)
				}
			}, e.getPowInOut = function(t) {
				return function(e) {
					return 1 > (e *= 2) ? .5 * Math.pow(e, t) : 1 - .5 * Math.abs(Math.pow(2 - e, t))
				}
			}, e.sineIn = function(t) {
				return 1 - Math.cos(t * Math.PI / 2)
			}, e.sineOut = function(t) {
				return Math.sin(t * Math.PI / 2)
			}, e.sineInOut = function(t) {
				return -.5 * (Math.cos(Math.PI * t) - 1)
			}, e.getBackIn = function(t) {
				return function(e) {
					return e * e * ((t + 1) * e - t)
				}
			}, e.getBackOut = function(t) {
				return function(e) {
					return e -= 1, e * e * ((t + 1) * e + t) + 1
				}
			}, e.getBackInOut = function(t) {
				return t *= 1.525, function(e) {
					return 1 > (e *= 2) ? .5 * e * e * ((t + 1) * e - t) : .5 * ((e -= 2) * e * ((t + 1) * e + t) + 2)
				}
			}, e.circIn = function(t) {
				return -(Math.sqrt(1 - t * t) - 1)
			}, e.circOut = function(t) {
				return Math.sqrt(1 - t * t)
			}, e.circInOut = function(t) {
				return 1 > (t *= 2) ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
			}, e.bounceIn = function(t) {
				return 1 - e.bounceOut(1 - t)
			}, e.bounceOut = function(t) {
				return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
			}, e.bounceInOut = function(t) {
				return .5 > t ? .5 * e.bounceIn(2 * t) : .5 * e.bounceOut(2 * t - 1) + .5
			}, e.getElasticIn = function(t, e) {
				var i = 2 * Math.PI;
				return function(n) {
					if (0 == n || 1 == n) return n;
					var o = e / i * Math.asin(1 / t);
					return -(t * Math.pow(2, 10 * (n -= 1)) * Math.sin((n - o) * i / e))
				}
			}, e.getElasticOut = function(t, e) {
				var i = 2 * Math.PI;
				return function(n) {
					if (0 == n || 1 == n) return n;
					var o = e / i * Math.asin(1 / t);
					return t * Math.pow(2, -10 * n) * Math.sin((n - o) * i / e) + 1
				}
			}, e.getElasticInOut = function(t, e) {
				var i = 2 * Math.PI;
				return function(n) {
					var o = e / i * Math.asin(1 / t);
					return 1 > (n *= 2) ? -.5 * t * Math.pow(2, 10 * (n -= 1)) * Math.sin((n - o) * i / e) : .5 * t * Math.pow(2, -10 * (n -= 1)) * Math.sin((n - o) * i / e) + 1
				}
			}, e.quadIn = e.getPowIn(2), e.quadOut = e.getPowOut(2), e.quadInOut = e.getPowInOut(2), e.cubicIn = e.getPowIn(3), e.cubicOut = e.getPowOut(3), e.cubicInOut = e.getPowInOut(3), e.quartIn = e.getPowIn(4), e.quartOut = e.getPowOut(4), e.quartInOut = e.getPowInOut(4), e.quintIn = e.getPowIn(5), e.quintOut = e.getPowOut(5), e.quintInOut = e.getPowInOut(5), e.backIn = e.getBackIn(1.7), e.backOut = e.getBackOut(1.7), e.backInOut = e.getBackInOut(1.7), e.elasticIn = e.getElasticIn(1, .3), e.elasticOut = e.getElasticOut(1, .3), e.elasticInOut = e.getElasticInOut(1, .3 * 1.5), e
		}();
	t.Ease = e
}(ns_egret || (ns_egret = {})), __extends = this.__extends ||
function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype, t.prototype = new i
}, function(t) {
	var e = function(e) {
			function i() {
				e.call(this)
			}
			return __extends(i, e), i.getInstance = function() {
				return t.MainContext.instance.soundContext
			}, i.prototype.preloadSound = function() {}, i.prototype.playMusic = function() {}, i.prototype.stopMusic = function() {}, i.isMusicPlaying = !1, i
		}(t.HashObject);
	t.SoundContext = e
}(ns_egret || (ns_egret = {})), __extends = this.__extends ||
function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype, t.prototype = new i
}, function(t) {
	var e = function(e) {
			function i() {
				e.apply(this, arguments), this.viewPortWidth = 400
			}
			return __extends(i, e), i.createWithFile = function(t) {
				var e = new i;
				return e.initWithTMXFile(t), e
			}, i.prototype.initWithTMXFile = function(e) {
				(!e || 0 == e.length) && t.Logger.fatal("TMXTiledMap.initWithTMXFile(): tmxFile???????????????null???string");
				var i = t.TMXMapInfo.createWithFile(e);
				if (i) {
					var n = i.getTilesets();
					(!n || 0 === n.length) && t.Logger.info("TMXTiledMap.initWithTMXFile(): Map??????", e), this.buildWithMapInfo(i)
				}
			}, i.prototype.buildWithMapInfo = function(t) {
				this.mapInfo = t;
				var i = 0,
					n = t.getLayers();
				if (n) for (var o = null, s = 0, r = n.length; r > s; s++)(o = n[s]) && o.visible && (o = this.parseLayer(o, t), e.prototype.addChild.call(this, o), i++)
			}, i.prototype.parseLayer = function(e, i) {
				var n = this.tilesetForLayer(e, i),
					n = t.TMXLayer.create(n, e, i);
				return e.ownTiles = !1, n.setupTiles(), n
			}, i.prototype.tilesetForLayer = function(e, i) {
				var n = e.layerWidth,
					o = e.layerHeight,
					s = i.getTilesets();
				if (s) for (var r = s.length - 1; r >= 0; r--) {
					var a = s[r];
					if (a) for (var h = 0; o > h; h++) for (var l = 0; n > l; l++) {
						var p = e._tiles[l + n * h];
						if (0 != p && (p & t.TMX.TILE_FLIPPED_MASK) >>> 0 >= a.firstGid) return a
					}
				}
				return t.Logger.warning("TMXLayer" + e.name + "??????tiles"), null
			}, i.prototype.getLayer = function(i) {
				(!i || 0 === i.length) && t.Logger.fatal("TMXTiledMap.getLayer(): layerName???????????????null???string");
				for (var n = this.numChildren, o = 0; n > o; o++) {
					var s = e.prototype.getChildAt.call(this, o);
					if (s && s.getLayerName && s.getLayerName() == i) return
				}
				return null
			}, i.prototype.getObjectGroup = function(e) {
				(!e || 0 === e.length) && t.Logger.fatal("TMXTiledMap.getObjectGroup(): groupName???????????????null???string");
				var i = this.mapInfo.getObjectGroups();
				if (i) for (var n = 0, o = i.length; o > n; n++) {
					var s = i[n];
					if (s && s.getGroupName() == e) return s
				}
				return null
			}, i.prototype.propertiesForGID = function(t) {
				return this.mapInfo.getTileProperties()[t]
			}, i.prototype.getProperty = function(t) {
				return this.mapInfo.getProperties()[t.toString()]
			}, i.prototype.setMoveX = function(e) {
				this.x = e, e = this.numChildren;
				for (var i = 0; e > i; i++) {
					var n = this.getChildAt(i);
					if (n instanceof t.TMXLayer) {
						if (n.visible) for (var o = 0; o < n.numChildren; o++) {
							var s = n.getChildAt(o);
							s.visible = s.x + this.mapInfo.getTileWidth() < -this.x || s.x > -this.x + this.viewPortWidth ? !1 : !0
						}
					} else o = n.getBounds(), n.visible = n.x + o.width - n.anchorOffsetX < -this.x || n.x - n.anchorOffsetX > -this.x + this.viewPortWidth ? !1 : !0
				}
			}, i
		}(t.DisplayObjectContainer);
	t.TMXTiledMap = e
}(ns_egret || (ns_egret = {})), __extends = this.__extends ||
function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype, t.prototype = new i
}, function(t) {
	var e = function(e) {
			function i() {
				e.apply(this, arguments), this._properties = this._layerOrientation = this._tileSet = this._tiles = this._mapTileHeight = this._mapTileWidth = this._layerHeight = this._layerWidth = this._texture = null, this._layerName = "", this._opacity = 1, this._maxGID = this._minGID = null
			}
			return __extends(i, e), i.create = function(t, e, n) {
				var o = new i;
				return o.initWithTilesetInfo(t, e, n), o
			}, i.prototype.initWithTilesetInfo = function(e, i, n) {
				this._texture = t.TextureCache.getInstance().getTexture(e.sourceImage), this._layerName = i.name, this._layerWidth = i.layerWidth, this._layerHeight = i.layerHeight, this._tiles = i._tiles, this._minGID = i._minGID, this._maxGID = i._maxGID, this._opacity = i.opacity, this.setProperties(i.getProperties()), this._tileSet = e, this._mapTileWidth = n.getTileWidth(), this._mapTileHeight = n.getTileHeight(), this._layerOrientation = n.getOrientation(), e = this.calculateLayerOffset(i.layerX, i.layerY), this.x = e.x, this.y = e.y
			}, i.prototype.calculateLayerOffset = function(e, i) {
				var n = t.Point.identity;
				switch (this._layerOrientation) {
				case t.TMX.ORIENTATION_ORTHO:
					n.x = e * this._mapTileWidth, n.y = -i * this._mapTileHeight;
					break;
				case t.TMX.ORIENTATION_ISO:
					n.x = this._mapTileWidth / 2 * (e - i), n.y = this._mapTileHeight / 2 * (-e - i);
					break;
				case t.TMX.ORIENTATION_HEX:
					(0 !== e || 0 !== i) && t.Logger.info("hexagonal map???????????????")
				}
				return n
			}, i.prototype.setupTiles = function() {
				this._tileSet.imageWidth = this._texture._textureWidth, this._tileSet.imageHeight = this._texture._textureHeight;
				for (var e = this._layerHeight, i = this._layerWidth, n = 0; e > n; n++) for (var o = 0; i > o; o++) {
					var s = this._tiles[o + i * n];
					0 !== s && (this.appendTileForGID(s, o, n), this._minGID = Math.min(s, this._minGID), this._maxGID = Math.max(s, this._maxGID))
				}
				this._maxGID >= this._tileSet.firstGid && this._minGID >= this._tileSet.firstGid || t.Logger.warning("??????layer?????????1???tileset")
			}, i.prototype.appendTileForGID = function(t, i, n) {
				var o = this._tileSet.rectForGID(t),
					o = this.reusedTileWithRect(o);
				return this.setupTileSprite(o, i, n, t), e.prototype.addChild.call(this, o), o
			}, i.prototype.reusedTileWithRect = function(e) {
				var i = t.Bitmap.initWithTexture(t.TextureCache.getInstance().getTexture(this._tileSet.sourceImage)),
					n = new t.SpriteSheetFrame;
				return n.x = e.x, n.y = e.y, n.w = this._mapTileWidth, n.h = this._mapTileHeight, i.spriteFrame = n, i
			}, i.prototype.setupTileSprite = function(t, e, i) {
				e = this.getPositionAt(e, i), t.x = e.x, t.y = e.y
			}, i.prototype.getPositionAt = function(e, i) {
				var n = t.Point.identity;
				switch (this._layerOrientation) {
				case t.TMX.ORIENTATION_ORTHO:
					n = this.positionForOrthoAt(e, i);
					break;
				case t.TMX.ORIENTATION_ISO:
					n = this.positionForIsoAt(e, i);
					break;
				case t.TMX.ORIENTATION_HEX:
					n = this.positionForHexAt(e, i);
					break;
				default:
					n.x = 0, n.y = 0
				}
				return n
			}, i.prototype.positionForIsoAt = function(e, i) {
				return t.Point.identity.x = this._mapTileWidth / 2 * (this._layerWidth + e - i - 1), t.Point.identity.y = -this._mapTileHeight / 2 * (2 * this._layerHeight - e - i - 2), t.Point.identity
			}, i.prototype.positionForOrthoAt = function(e, i) {
				return t.Point.identity.x = e * this._mapTileWidth, t.Point.identity.y = -(this._layerHeight - i - 1) * this._mapTileHeight, t.Point.identity
			}, i.prototype.positionForHexAt = function(e, i) {
				var n = 1 == e % 2 ? -this._mapTileHeight / 2 : 0;
				return t.Point.identity.x = 3 * e * this._mapTileWidth / 4, t.Point.identity.y = -((this._layerHeight - i - 1) * this._mapTileHeight + n), t.Point.identity
			}, i.prototype.getTileGIDAt = function(e, i) {
				return (e >= this._layerWidth || i >= this._layerHeight || 0 > e || 0 > i) && t.Logger.fatal("TMXLayer.getTileGIDAt():???????????????????????????"), this._tiles ? (this._tiles[0 | e + i * this._layerWidth] & t.TMX.TILE_FLIPPED_MASK) >>> 0 : (t.Logger.info("TMXLayer.getTileGIDAt(): tileMap???????????????"), null)
			}, i.prototype.getProperties = function() {
				return this._properties
			}, i.prototype.setProperties = function(t) {
				this._properties = t
			}, i.prototype.getProperty = function(t) {
				return this._properties[t]
			}, i.prototype.getLayerName = function() {
				return this._layerName
			}, i
		}(t.DisplayObjectContainer);
	t.TMXLayer = e
}(ns_egret || (ns_egret = {})), function(t) {
	var e = function() {
			function t() {}
			return t.TILE_HORIZONTAL_FLAG = 2147483648, t.TILE_VERTICAL_FLAG = 1073741824, t.TILE_DIAGONAL_FLAG = 536870912, t.TILE_FLIPPED_ALL = (t.TILE_HORIZONTAL_FLAG | t.TILE_VERTICAL_FLAG | t.TILE_DIAGONAL_FLAG) >>> 0, t.TILE_FLIPPED_MASK = ~t.TILE_FLIPPED_ALL >>> 0, t.LAYER_ATTRIB_NONE = 1, t.LAYER_ATTRIB_BASE64 = 2, t.LAYER_ATTRIB_GZIP = 4, t.LAYER_ATTRIB_ZLIB = 8, t.PROPERTY_NONE = 0, t.PROPERTY_MAP = 1, t.PROPERTY_LAYER = 2, t.PROPERTY_OBJECTGROUP = 3, t.PROPERTY_OBJECT = 4, t.PROPERTY_TILE = 5, t.ORIENTATION_ORTHO = 0, t.ORIENTATION_HEX = 1, t.ORIENTATION_ISO = 2, t
		}();
	t.TMX = e
}(ns_egret || (ns_egret = {})), function(t) {
	var e = function() {
			function e() {
				this._parentGID = this._objectGroups = this._tileSets = this._layers = this._tileHeight = this._tileWidth = this._mapHeight = this._mapWidth = this._orientation = null, this._storingCharacters = !1, this._tileProperties = this._currentString = this._TMXFileName = this._properties = null
			}
			return e.createWithFile = function(t) {
				var i = new e;
				return i.initWithTMXFile(t), i
			}, e.prototype.initWithTMXFile = function(t) {
				this.internalInit(t), this.parseXMLFile(this._TMXFileName)
			}, e.prototype.internalInit = function(t) {
				this._tileSets = [], this._layers = [], this._TMXFileName = t, this._objectGroups = [], this._properties = [], this._tileProperties = [], this._currentString = "", this._storingCharacters = !1
			}, e.prototype.parseXMLFile = function(e) {
				var s = t.ResourceLoader.create(e).data;
				null == s && t.Logger.fatal("tmx?????????????????????" + e);
				var r;
				if (e = t.SAXParser.getInstance().tmxParse(s, !0).documentElement, e.getAttribute("version"), s = e.getAttribute("orientation"), "map" == e.nodeName && ("orthogonal" == s ? this.setOrientation(t.TMX.ORIENTATION_ORTHO) : "isometric" == s ? this.setOrientation(t.TMX.ORIENTATION_ISO) : "hexagonal" == s ? this.setOrientation(t.TMX.ORIENTATION_HEX) : null !== s && t.Logger.info("TMXFomat: Unsupported orientation:" + this.getOrientation()), this._mapWidth = parseFloat(e.getAttribute("width")), this._mapHeight = parseFloat(e.getAttribute("height")), this._tileWidth = parseFloat(e.getAttribute("tilewidth")), this._tileHeight = parseFloat(e.getAttribute("tileheight")), r = e.querySelectorAll("map > properties >  property"))) {
					for (var a = {}, s = 0; s < r.length; s++) a[r[s].getAttribute("name")] = r[s].getAttribute("value");
					this.setProperties(a)
				}
				for (r = e.getElementsByTagName("tileset"), "map" !== e.nodeName && (r = [], r.push(e)), s = 0; s < r.length; s++) {
					var h = r[s];
					if (a = h.getAttribute("source")) this.parseXMLFile(a);
					else {
						a = new i, a.name = h.getAttribute("name") || "", a.firstGid = parseInt(h.getAttribute("firstgid")) || 0, a.spacing = parseInt(h.getAttribute("spacing")) || 0, a.margin = parseInt(h.getAttribute("margin")) || 0, a.tileWidth = parseFloat(h.getAttribute("tilewidth")), a.tileHeight = parseFloat(h.getAttribute("tileheight"));
						var h = h.getElementsByTagName("image")[0].getAttribute("source"),
							l = -1;
						this._TMXFileName && (l = this._TMXFileName.lastIndexOf("/")), -1 !== l ? (l = this._TMXFileName.substr(0, l + 1), a.sourceImage = l + h) : a.sourceImage = h, this.setTilesets(a)
					}
				}
				if (a = e.querySelectorAll("tile")) for (s = 0; s < a.length; s++) if (r = a[s], this.setParentGID(parseInt(this._tileSets[0].firstGid) + parseInt(r.getAttribute("id") || 0)), h = r.querySelectorAll("properties > property")) {
					for (l = {}, r = 0; r < h.length; r++) {
						var p = h[r].getAttribute("name"),
							c = h[r].getAttribute("value");
						l[p] = c
					}
					this._tileProperties[this.getParentGID()] = l
				}
				if (a = e.getElementsByTagName("layer")) for (s = 0; s < a.length; s++) {
					for (l = a[s], p = l.getElementsByTagName("data")[0], h = new o, h.name = l.getAttribute("name"), h.layerWidth = parseFloat(l.getAttribute("width")), h.layerHeight = parseFloat(l.getAttribute("height")), r = l.getAttribute("visible"), h.visible = "0" != r, r = l.getAttribute("opacity") || 1, h.opacity = r ? parseFloat(r) : 1, h.layerX = parseFloat(l.getAttribute("x")) || 0, h.layerY = parseFloat(l.getAttribute("y")) || 0, c = "", r = 0; r < p.childNodes.length; r++) c += p.childNodes[r].nodeValue;
					c = c.trim(), r = p.getAttribute("compression");
					var u = p.getAttribute("encoding");
					if (r && "gzip" !== r && "zlib" !== r) return t.Logger.fatal("TMXMapInfo.parseXMLFile(): unsupported compression method"), null;
					switch (r) {
					case "gzip":
						h._tiles = t.Utils.unzipBase64AsArray(c, 4);
						break;
					case "zlib":
						r = new Zlib.Inflate(t.Codec.Base64.decodeAsArray(c, 1)), h._tiles = t.Utils.uint8ArrayToUint32Array(r.decompress());
						break;
					case null:
					case "":
						if ("base64" == u) h._tiles = t.Codec.Base64.decodeAsArray(c, 4);
						else if ("csv" === u) for (h._tiles = [], r = c.split(","), p = 0; p < r.length; p++) h._tiles.push(parseInt(r[p]));
						else for (r = p.getElementsByTagName("tile"), h._tiles = [], p = 0; p < r.length; p++) h._tiles.push(parseInt(r[p].getAttribute("gid")));
						break;
					default:
						t.Logger.info("TMXMapInfo.parseXMLFile(): Only base64 and/or gzip/zlib maps are supported")
					}
					if (l = l.querySelectorAll("properties > property")) {
						for (p = {}, r = 0; r < l.length; r++) p[l[r].getAttribute("name")] = l[r].getAttribute("value");
						h.setProperties(p)
					}
					this.setLayers(h)
				}
				if (a = e.getElementsByTagName("objectgroup")) for (s = 0; s < a.length; s++) {
					if (l = a[s], h = new n, h.setGroupName(l.getAttribute("name")), h.setPositionOffsetX(parseFloat(l.getAttribute("x")) * this._tileWidth || 0), h.setPositionOffsetY(parseFloat(l.getAttribute("y")) * this._tileHeight || 0), p = l.querySelectorAll("objectgroup > properties > property")) for (r = 0; r < p.length; r++) c = {}, c[p[r].getAttribute("name")] = p[r].getAttribute("value"), h.setProperties(c);
					if (l = l.querySelectorAll("object")) for (r = 0; r < l.length; r++) {
						if (c = l[r], p = {}, p.name = c.getAttribute("name") || "", p.type = c.getAttribute("type") || "", p.x = parseInt(c.getAttribute("x") || 0) + h.getPositionOffsetX(), u = parseInt(c.getAttribute("y") || 0) + h.getPositionOffsetY(), p.y = Math.floor(this._mapHeight * this._tileHeight) - u - p.height, p.width = parseInt(c.getAttribute("width")) || 0, p.height = parseInt(c.getAttribute("height")) || 0, u = c.querySelectorAll("properties > property")) for (var d = 0; d < u.length; d++) p[u[d].getAttribute("name")] = u[d].getAttribute("value");
						(u = c.querySelectorAll("polygon")) && 0 < u.length && (u = u[0].getAttribute("points")) && (p.polygonPoints = this.parsePointsString(u)), (c = c.querySelectorAll("polyline")) && 0 < c.length && (c = c[0].getAttribute("points")) && (p.polylinePoints = this.parsePointsString(c)), h.addObject(p)
					}
					this.setObjectGroups(h)
				}
				return e
			}, e.prototype.parsePointsString = function(t) {
				if (!t) return null;
				var e = [];
				t = t.split(" ");
				for (var i = 0; i < t.length; i++) {
					var n = t[i].split(",");
					e.push({
						x: n[0],
						y: n[1]
					})
				}
				return e
			}, e.prototype.getOrientation = function() {
				return this._orientation
			}, e.prototype.setOrientation = function(t) {
				this._orientation = t
			}, e.prototype.getProperties = function() {
				return this._properties
			}, e.prototype.setProperties = function(t) {
				this._properties = t
			}, e.prototype.getTilesets = function() {
				return this._tileSets
			}, e.prototype.setTilesets = function(t) {
				this._tileSets.push(t)
			}, e.prototype.getParentGID = function() {
				return this._parentGID
			}, e.prototype.setParentGID = function(t) {
				this._parentGID = t
			}, e.prototype.getLayers = function() {
				return this._layers
			}, e.prototype.setLayers = function(t) {
				this._layers.push(t)
			}, e.prototype.getObjectGroups = function() {
				return this._objectGroups
			}, e.prototype.setObjectGroups = function(t) {
				this._objectGroups.push(t)
			}, e.prototype.getTileProperties = function() {
				return this._tileProperties
			}, e.prototype.setTileProperties = function(t) {
				this._tileProperties.push(t)
			}, e.prototype.getTileWidth = function() {
				return this._tileWidth
			}, e.prototype.getTileHeight = function() {
				return this._tileHeight
			}, e.prototype.getMapWidth = function() {
				return this._mapWidth
			}, e.prototype.getMapHeight = function() {
				return this._mapHeight
			}, e
		}();
	t.TMXMapInfo = e;
	var i = function() {
			function e() {
				this.name = ""
			}
			return e.prototype.rectForGID = function(e) {
				var i = t.Point.identity;
				e &= t.TMX.TILE_FLIPPED_MASK, e -= parseInt(this.firstGid, 10);
				var n = Math.floor((this.imageWidth - 2 * this.margin + this.spacing) / (this.tileWidth + this.spacing));
				return i.x = parseInt(e % n * (this.tileWidth + this.spacing) + this.margin, 10), i.y = parseInt(Math.floor(e / n) * (this.tileHeight + this.spacing) + this.margin, 10), i
			}, e
		}();
	t.TMXTilesetInfo = i;
	var n = function() {
			function t() {
				this._properties = [], this._objects = []
			}
			return t.prototype.getGroupName = function() {
				return this._groupName
			}, t.prototype.setGroupName = function(t) {
				this._groupName = t
			}, t.prototype.getPositionOffsetX = function() {
				return this._positionOffsetX
			}, t.prototype.setPositionOffsetX = function(t) {
				this._positionOffsetX = t
			}, t.prototype.getPositionOffsetY = function() {
				return this._positionOffsetY
			}, t.prototype.setPositionOffsetY = function(t) {
				this._positionOffsetY = t
			}, t.prototype.getProperties = function() {
				return this._properties
			}, t.prototype.setProperties = function(t) {
				this._properties.push(t)
			}, t.prototype.getObjects = function() {
				return this._objects
			}, t.prototype.addObject = function(t) {
				this._objects.push(t)
			}, t
		}();
	t.TMXObjectGroup = n;
	var o = function() {
			function t() {
				this._minGID = 1e5, this._maxGID = 0
			}
			return t.prototype.getProperties = function() {
				return this._properties
			}, t.prototype.setProperties = function(t) {
				this._properties = t
			}, t
		}();
	t.TMXLayerInfo = o
}(ns_egret || (ns_egret = {})), __extends = this.__extends ||
function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype, t.prototype = new i
}, function(t) {
	var e = function(e) {
			function i(t) {
				"undefined" == typeof t && (t = null), e.call(this), this._source = t ? t : []
			}
			return __extends(i, e), Object.defineProperty(i.prototype, "source", {
				get: function() {
					return this._source
				},
				set: function(e) {
					e || (e = []), this._source = e, this.dispatchCoEvent(t.CollectionEventKind.RESET)
				},
				enumerable: !0,
				configurable: !0
			}), i.prototype.refresh = function() {
				this.dispatchCoEvent(t.CollectionEventKind.REFRESH)
			}, i.prototype.contains = function(t) {
				return -1 != this.getItemIndex(t)
			}, i.prototype.checkIndex = function(t) {
				if (0 > t || t >= this._source.length) throw new RangeError('??????:"' + t + '"??????????????????????????????')
			}, Object.defineProperty(i.prototype, "length", {
				get: function() {
					return this._source.length
				},
				enumerable: !0,
				configurable: !0
			}), i.prototype.addItem = function(e) {
				this._source.push(e), this.dispatchCoEvent(t.CollectionEventKind.ADD, this._source.length - 1, -1, [e])
			}, i.prototype.addItemAt = function(e, i) {
				if (0 > i || i > this._source.length) throw new RangeError('??????:"' + i + '"??????????????????????????????');
				this._source.splice(i, 0, e), this.dispatchCoEvent(t.CollectionEventKind.ADD, i, -1, [e])
			}, i.prototype.getItemAt = function(t) {
				return this._source[t]
			}, i.prototype.getItemIndex = function(t) {
				for (var e = this._source.length, i = 0; e > i; i++) if (this._source[i] === t) return i;
				return -1
			}, i.prototype.itemUpdated = function(e) {
				var i = this.getItemIndex(e); - 1 != i && this.dispatchCoEvent(t.CollectionEventKind.UPDATE, i, -1, [e])
			}, i.prototype.removeAll = function() {
				var e = this._source.concat();
				this._source.length = 0, this.dispatchCoEvent(t.CollectionEventKind.REMOVE, 0, -1, e)
			}, i.prototype.removeItemAt = function(e) {
				this.checkIndex(e);
				var i = this._source.splice(e, 1)[0];
				return this.dispatchCoEvent(t.CollectionEventKind.REMOVE, e, -1, [i]), i
			}, i.prototype.replaceItemAt = function(e, i) {
				this.checkIndex(i);
				var n = this._source.splice(i, 1, e)[0];
				return this.dispatchCoEvent(t.CollectionEventKind.REPLACE, i, -1, [e], [n]), n
			}, i.prototype.replaceAll = function(t) {
				t || (t = []);
				for (var e = t.length, i = this._source.length, n = e; i > n; n++) this.removeItemAt(e);
				for (n = 0; e > n; n++) n >= i ? this.addItemAt(t[n], n) : this.replaceItemAt(t[n], n);
				this._source = t
			}, i.prototype.moveItemAt = function(e, i) {
				this.checkIndex(e), this.checkIndex(i);
				var n = this._source.splice(e, 1)[0];
				return this._source.splice(i, 0, n), this.dispatchCoEvent(t.CollectionEventKind.MOVE, i, e, [n]), n
			}, i.prototype.dispatchCoEvent = function(e, n, o, s, r) {
				"undefined" == typeof e && (e = null), "undefined" == typeof n && (n = -1), "undefined" == typeof o && (o = -1), "undefined" == typeof s && (s = null), "undefined" == typeof r && (r = null);
				var a = i.coEventRecycler,
					h = a.pop();
				h || (h = new t.CollectionEvent(t.CollectionEvent.COLLECTION_CHANGE)), h.kind = e, h.location = n, h.oldLocation = o, h.items = s, h.oldItems = r, this.dispatchEvent(h), a.push(h)
			}, i.coEventRecycler = new t.Recycler, i
		}(t.EventDispatcher);
	t.ArrayCollection = e
}(ns_egret || (ns_egret = {})), __extends = this.__extends ||
function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype, t.prototype = new i
}, function(t) {
	var e = function(e) {
			function i(t, i) {
				"undefined" == typeof t && (t = "children"), "undefined" == typeof i && (i = "parent"), e.call(this), this.nodeList = [], this._openNodes = [], this._showRoot = !1, this.childrenKey = t, this.parentKey = i
			}
			return __extends(i, e), Object.defineProperty(i.prototype, "source", {
				get: function() {
					return this._source
				},
				set: function(e) {
					this._source = e, this._openNodes = [], this.nodeList = [], this._source && (this._showRoot ? this.nodeList.push(this._source) : (this._openNodes = [this._source], this.addChildren(this._source, this.nodeList))), this.dispatchCoEvent(t.CollectionEventKind.RESET)
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "openNodes", {
				get: function() {
					return this._openNodes.concat()
				},
				set: function(t) {
					this._openNodes = t ? t.concat() : [], this.refresh()
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "length", {
				get: function() {
					return this.nodeList.length
				},
				enumerable: !0,
				configurable: !0
			}), i.prototype.getItemAt = function(t) {
				return this.nodeList[t]
			}, i.prototype.getItemIndex = function(t) {
				for (var e = this.nodeList.length, i = 0; e > i; i++) if (this.nodeList[i] === t) return i;
				return -1
			}, i.prototype.itemUpdated = function(e) {
				var i = this.getItemIndex(e); - 1 != i && this.dispatchCoEvent(t.CollectionEventKind.UPDATE, i, -1, [e])
			}, i.prototype.removeItem = function(e) {
				if (this.isItemOpen(e) && this.closeNode(e), e) {
					var i = e[this.parentKey];
					if (i && (i = i[this.childrenKey])) {
						var n = i.indexOf(e); - 1 != n && i.splice(n, 1), e[this.parentKey] = null, n = this.nodeList.indexOf(e), -1 != n && (this.nodeList.splice(n, 1), this.dispatchCoEvent(t.CollectionEventKind.REMOVE, n, -1, [e]))
					}
				}
			}, Object.defineProperty(i.prototype, "showRoot", {
				get: function() {
					return this._showRoot
				},
				set: function(t) {
					this._showRoot != t && (this._showRoot = t, this._source && (this._showRoot ? this.nodeList.splice(0, 0, this._source) : (this.nodeList.shift(), -1 == this.openNodes.indexOf(this._source) && this.openNodes.push(this._source)), this.refresh()))
				},
				enumerable: !0,
				configurable: !0
			}), i.prototype.addChildren = function(t, e) {
				if (t.hasOwnProperty(this.childrenKey) && -1 != this._openNodes.indexOf(t)) for (var i = t[this.childrenKey], n = i.length, o = 0; n > o; o++) {
					var s = i[o];
					e.push(s), this.addChildren(s, e)
				}
			}, i.prototype.hasChildren = function(t) {
				return t.hasOwnProperty(this.childrenKey) ? 0 < t[this.childrenKey].length : !1
			}, i.prototype.isItemOpen = function(t) {
				return -1 != this._openNodes.indexOf(t)
			}, i.prototype.expandItem = function(t, e) {
				"undefined" == typeof e && (e = !0), e ? this.openNode(t) : this.closeNode(t)
			}, i.prototype.openNode = function(e) {
				if (-1 == this._openNodes.indexOf(e)) {
					this._openNodes.push(e);
					var i = this.nodeList.indexOf(e);
					if (-1 != i) {
						var n = [];
						this.addChildren(e, n);
						for (var o = i; n.length;) {
							o++;
							var s = n.shift();
							this.nodeList.splice(o, 0, s), this.dispatchCoEvent(t.CollectionEventKind.ADD, o, -1, [s])
						}
						this.dispatchCoEvent("open", i, i, [e])
					}
				}
			}, i.prototype.closeNode = function(e) {
				var i = this._openNodes.indexOf(e);
				if (-1 != i) {
					var n = [];
					if (this.addChildren(e, n), this._openNodes.splice(i, 1), i = this.nodeList.indexOf(e), -1 != i) {
						for (i++; n.length;) {
							var o = this.nodeList.splice(i, 1)[0];
							this.dispatchCoEvent(t.CollectionEventKind.REMOVE, i, -1, [o]), n.shift()
						}
						i--, this.dispatchCoEvent(t.CollectionEventKind.CLOSE, i, i, [e])
					}
				}
			}, i.prototype.getDepth = function(t) {
				var e = 0;
				for (t = t[this.parentKey]; t;) e++, t = t[this.parentKey];
				return e > 0 && !this._showRoot && e--, e
			}, i.prototype.refresh = function() {
				this.nodeList = [], this._source && (this._showRoot && this.nodeList.push(this._source), this.addChildren(this._source, this.nodeList)), this.dispatchCoEvent(t.CollectionEventKind.REFRESH)
			}, i.prototype.dispatchCoEvent = function(e, i, n, o, s) {
				"undefined" == typeof e && (e = null), "undefined" == typeof i && (i = -1), "undefined" == typeof n && (n = -1), "undefined" == typeof o && (o = null), "undefined" == typeof s && (s = null), e = new t.CollectionEvent(t.CollectionEvent.COLLECTION_CHANGE, !1, !1, e, i, n, o, s), this.dispatchEvent(e)
			}, i.assignParent = function(t, e, n) {
				if ("undefined" == typeof e && (e = "children"), "undefined" == typeof n && (n = "parent"), t.hasOwnProperty(e)) for (var o = t[e], s = o.length, r = 0; s > r; r++) {
					var a = o[r];
					try {
						a[n] = t
					} catch (h) {}
					i.assignParent(a, e, n)
				}
			}, i
		}(t.EventDispatcher);
	t.ObjectCollection = e
}(ns_egret || (ns_egret = {})), __extends = this.__extends ||
function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype, t.prototype = new i
}, function(t) {
	var e = function(e) {
			function i() {
				e.call(this), this.targetLevel = Number.MAX_VALUE, this.updateCompleteQueue = new t.DepthQueue, this.invalidateClientPropertiesFlag = this.invalidatePropertiesFlag = !1, this.invalidatePropertiesQueue = new t.DepthQueue, this.invalidateClientSizeFlag = this.invalidateSizeFlag = !1, this.invalidateSizeQueue = new t.DepthQueue, this.invalidateDisplayListFlag = !1, this.invalidateDisplayListQueue = new t.DepthQueue, this.listenersAttached = !1
			}
			return __extends(i, e), i.prototype.invalidateProperties = function(t) {
				this.invalidatePropertiesFlag || (this.invalidatePropertiesFlag = !0, this.listenersAttached || this.attachListeners()), this.targetLevel <= t.nestLevel && (this.invalidateClientPropertiesFlag = !0), this.invalidatePropertiesQueue.insert(t)
			}, i.prototype.validateProperties = function() {
				for (var t = this.invalidatePropertiesQueue.shift(); t;) t.parent && (t.validateProperties(), t.updateCompletePendingFlag || (this.updateCompleteQueue.insert(t), t.updateCompletePendingFlag = !0)), t = this.invalidatePropertiesQueue.shift();
				this.invalidatePropertiesQueue.isEmpty() && (this.invalidatePropertiesFlag = !1)
			}, i.prototype.invalidateSize = function(t) {
				this.invalidateSizeFlag || (this.invalidateSizeFlag = !0, this.listenersAttached || this.attachListeners()), this.targetLevel <= t.nestLevel && (this.invalidateClientSizeFlag = !0), this.invalidateSizeQueue.insert(t)
			}, i.prototype.validateSize = function() {
				for (var t = this.invalidateSizeQueue.pop(); t;) t.parent && (t.validateSize(), t.updateCompletePendingFlag || (this.updateCompleteQueue.insert(t), t.updateCompletePendingFlag = !0)), t = this.invalidateSizeQueue.pop();
				this.invalidateSizeQueue.isEmpty() && (this.invalidateSizeFlag = !1)
			}, i.prototype.invalidateDisplayList = function(t) {
				this.invalidateDisplayListFlag || (this.invalidateDisplayListFlag = !0, this.listenersAttached || this.attachListeners()), this.invalidateDisplayListQueue.insert(t)
			}, i.prototype.validateDisplayList = function() {
				for (var t = this.invalidateDisplayListQueue.shift(); t;) t.parent && (t.validateDisplayList(), t.updateCompletePendingFlag || (this.updateCompleteQueue.insert(t), t.updateCompletePendingFlag = !0)), t = this.invalidateDisplayListQueue.shift();
				this.invalidateDisplayListQueue.isEmpty() && (this.invalidateDisplayListFlag = !1)
			}, i.prototype.attachListeners = function() {
				t.UIGlobals.stage.addEventListener(t.Event.ENTER_FRAME, this.doPhasedInstantiationCallBack, this), t.UIGlobals.stage.addEventListener(t.Event.RENDER, this.doPhasedInstantiationCallBack, this), t.UIGlobals.stage.invalidate(), this.listenersAttached = !0
			}, i.prototype.doPhasedInstantiationCallBack = function() {
				t.UIGlobals.stage.removeEventListener(t.Event.ENTER_FRAME, this.doPhasedInstantiationCallBack, this), t.UIGlobals.stage.removeEventListener(t.Event.RENDER, this.doPhasedInstantiationCallBack, this), this.doPhasedInstantiation()
			}, i.prototype.doPhasedInstantiation = function() {
				if (this.invalidatePropertiesFlag && this.validateProperties(), this.invalidateSizeFlag && this.validateSize(), this.invalidateDisplayListFlag && this.validateDisplayList(), this.invalidatePropertiesFlag || this.invalidateSizeFlag || this.invalidateDisplayListFlag) this.attachListeners();
				else {
					this.listenersAttached = !1;
					for (var e = this.updateCompleteQueue.pop(); e;) e.initialized || (e.initialized = !0), e.hasEventListener(t.UIEvent.UPDATE_COMPLETE) && e.dispatchEvent(new t.UIEvent(t.UIEvent.UPDATE_COMPLETE)), e.updateCompletePendingFlag = !1, e = this.updateCompleteQueue.pop();
					this.dispatchEvent(new t.UIEvent(t.UIEvent.UPDATE_COMPLETE))
				}
			}, i.prototype.validateNow = function() {
				for (var t = 0; this.listenersAttached && 100 > t++;) this.doPhasedInstantiationCallBack()
			}, i.prototype.validateClient = function(e, i) {
				"undefined" == typeof i && (i = !1);
				var n, o = !1,
					s = this.targetLevel;
				for (this.targetLevel == Number.MAX_VALUE && (this.targetLevel = e.nestLevel); !o;) {
					for (o = !0, n = this.invalidatePropertiesQueue.removeSmallestChild(e); n;) n.parent && (n.validateProperties(), n.updateCompletePendingFlag || (this.updateCompleteQueue.insert(n), n.updateCompletePendingFlag = !0)), n = this.invalidatePropertiesQueue.removeSmallestChild(e);
					for (this.invalidatePropertiesQueue.isEmpty() && (this.invalidatePropertiesFlag = !1), this.invalidateClientPropertiesFlag = !1, n = this.invalidateSizeQueue.removeLargestChild(e); n;) {
						if (n.parent && (n.validateSize(), n.updateCompletePendingFlag || (this.updateCompleteQueue.insert(n), n.updateCompletePendingFlag = !0)), this.invalidateClientPropertiesFlag && (n = this.invalidatePropertiesQueue.removeSmallestChild(e))) {
							this.invalidatePropertiesQueue.insert(n), o = !1;
							break
						}
						n = this.invalidateSizeQueue.removeLargestChild(e)
					}
					if (this.invalidateSizeQueue.isEmpty() && (this.invalidateSizeFlag = !1), this.invalidateClientSizeFlag = this.invalidateClientPropertiesFlag = !1, !i) {
						for (n = this.invalidateDisplayListQueue.removeSmallestChild(e); n;) {
							if (n.parent && (n.validateDisplayList(), n.updateCompletePendingFlag || (this.updateCompleteQueue.insert(n), n.updateCompletePendingFlag = !0)), this.invalidateClientPropertiesFlag && (n = this.invalidatePropertiesQueue.removeSmallestChild(e))) {
								this.invalidatePropertiesQueue.insert(n), o = !1;
								break
							}
							if (this.invalidateClientSizeFlag && (n = this.invalidateSizeQueue.removeLargestChild(e))) {
								this.invalidateSizeQueue.insert(n), o = !1;
								break
							}
							n = this.invalidateDisplayListQueue.removeSmallestChild(e)
						}
						this.invalidateDisplayListQueue.isEmpty() && (this.invalidateDisplayListFlag = !1)
					}
				}
				if (s == Number.MAX_VALUE && (this.targetLevel = Number.MAX_VALUE, !i)) for (n = this.updateCompleteQueue.removeLargestChild(e); n;) n.initialized || (n.initialized = !0), n.hasEventListener(t.UIEvent.UPDATE_COMPLETE) && n.dispatchEvent(new t.UIEvent(t.UIEvent.UPDATE_COMPLETE)), n.updateCompletePendingFlag = !1, n = this.updateCompleteQueue.removeLargestChild(e)
			}, i
		}(t.EventDispatcher);
	t.LayoutManager = e
}(ns_egret || (ns_egret = {})), function(t) {
	var e = function() {
			function e() {
				this.depthBins = [], this.minDepth = 0, this.maxDepth = -1
			}
			return e.prototype.insert = function(t) {
				var e = t.nestLevel,
					n = t.hashCode;
				this.maxDepth < this.minDepth ? this.minDepth = this.maxDepth = e : (e < this.minDepth && (this.minDepth = e), e > this.maxDepth && (this.maxDepth = e));
				var o = this.depthBins[e];
				o ? null == o.items[n] && (o.items[n] = t, o.length++) : (o = new i, this.depthBins[e] = o, o.items[n] = t, o.length++)
			}, e.prototype.pop = function() {
				var t = null;
				if (this.minDepth <= this.maxDepth) {
					for (var e = this.depthBins[this.maxDepth]; !e || 0 == e.length;) {
						if (this.maxDepth--, this.maxDepth < this.minDepth) return null;
						e = this.depthBins[this.maxDepth]
					}
					var i, n = e.items;
					for (i in n) {
						t = n[i], this.remove(t, this.maxDepth);
						break
					}
					for (;
					(!e || 0 == e.length) && (this.maxDepth--, !(this.maxDepth < this.minDepth));) e = this.depthBins[this.maxDepth]
				}
				return t
			}, e.prototype.shift = function() {
				var t = null;
				if (this.minDepth <= this.maxDepth) {
					for (var e = this.depthBins[this.minDepth]; !e || 0 == e.length;) {
						if (this.minDepth++, this.minDepth > this.maxDepth) return null;
						e = this.depthBins[this.minDepth]
					}
					var i, n = e.items;
					for (i in n) {
						t = n[i], this.remove(t, this.minDepth);
						break
					}
					for (;
					(!e || 0 == e.length) && (this.minDepth++, !(this.minDepth > this.maxDepth));) e = this.depthBins[this.minDepth]
				}
				return t
			}, e.prototype.removeLargestChild = function(e) {
				for (var i = this.maxDepth, n = e.nestLevel, o = e.hashCode; i >= n;) {
					var s = this.depthBins[i];
					if (s && 0 < s.length) {
						if (i == e.nestLevel) {
							if (s.items[o]) return this.remove(e, i), e
						} else {
							var r, s = s.items;
							for (r in s) {
								var a = s[r];
								if (a instanceof t.DisplayObject && e instanceof t.DisplayObjectContainer && e.contains(a)) return this.remove(a, i), a
							}
						}
						i--
					} else if (i == this.maxDepth && this.maxDepth--, i--, n > i) break
				}
				return null
			}, e.prototype.removeSmallestChild = function(e) {
				for (var i = e.nestLevel, n = e.hashCode; i <= this.maxDepth;) {
					var o = this.depthBins[i];
					if (o && 0 < o.length) {
						if (i == e.nestLevel) {
							if (o.items[n]) return this.remove(e, i), e
						} else {
							var s, o = o.items;
							for (s in o) {
								var r = o[s];
								if (r instanceof t.DisplayObject && e instanceof t.DisplayObjectContainer && e.contains(r)) return this.remove(r, i), r
							}
						}
						i++
					} else if (i == this.minDepth && this.minDepth++, i++, i > this.maxDepth) break
				}
				return null
			}, e.prototype.remove = function(t, e) {
				"undefined" == typeof e && (e = -1);
				var i = t.hashCode,
					n = this.depthBins[e >= 0 ? e : t.nestLevel];
				return n && null != n.items[i] ? (delete n.items[i], n.length--, t) : null
			}, e.prototype.removeAll = function() {
				this.minDepth = this.depthBins.length = 0, this.maxDepth = -1
			}, e.prototype.isEmpty = function() {
				return this.minDepth > this.maxDepth
			}, e
		}();
	t.DepthQueue = e;
	var i = function() {
			return function() {
				this.length = 0, this.items = []
			}
		}();
	t.DepthBin = i
}(ns_egret || (ns_egret = {})), function(t) {
	var e = function() {
			function e() {}
			return Object.defineProperty(e, "stage", {
				get: function() {
					return e._stage
				},
				enumerable: !0,
				configurable: !0
			}), e.initlize = function(i) {
				e.initlized || (e._stage = i, e.layoutManager = new t.LayoutManager, e.initlized = !0)
			}, Object.defineProperty(e, "systemManager", {
				get: function() {
					return this._systemManager
				},
				enumerable: !0,
				configurable: !0
			}), e.useUpdateAfterEvent = !0, e.initlized = !1, e
		}();
	t.UIGlobals = e
}(ns_egret || (ns_egret = {})), __extends = this.__extends ||
function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype, t.prototype = new i
}, function(t) {
	var e = function(e) {
			function i() {
				e.call(this), this.initializeCalled = this._initialized = this._updateCompletePendingFlag = !1, this._nestLevel = 0, this._enabled = !0, this._minWidth = 0, this._maxWidth = 1e4, this._minHeight = 0, this._maxHeight = 1e4, this._measuredHeight = this._measuredWidth = 0, this.validateNowFlag = this.invalidateDisplayListFlag = this.invalidateSizeFlag = this.invalidatePropertiesFlag = !1, this._includeInLayout = !0, this.layoutHeightExplicitlySet = this.layoutWidthExplicitlySet = !1, this.touchEnabled = !0, this.addEventListener(t.Event.ADDED_TO_STAGE, this.onAddedToStage, this), this.addEventListener(t.Event.ADDED_TO_STAGE, this.checkInvalidateFlag, this)
			}
			return __extends(i, e), i.prototype.onAddedToStage = function() {
				this.removeEventListener(t.Event.ADDED_TO_STAGE, this.onAddedToStage, this), this.initialize(), t.UIGlobals.initlize(this.stage), 0 < this._nestLevel && this.checkInvalidateFlag()
			}, Object.defineProperty(i.prototype, "id", {
				get: function() {
					return this._id
				},
				set: function(t) {
					this._id = t
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "isPopUp", {
				get: function() {
					return this._isPopUp
				},
				set: function(t) {
					this._isPopUp = t
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "owner", {
				get: function() {
					return this._owner ? this._owner : this.parent
				},
				enumerable: !0,
				configurable: !0
			}), i.prototype.ownerChanged = function(t) {
				this._owner = t
			}, Object.defineProperty(i.prototype, "updateCompletePendingFlag", {
				get: function() {
					return this._updateCompletePendingFlag
				},
				set: function(t) {
					this._updateCompletePendingFlag = t
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "initialized", {
				get: function() {
					return this._initialized
				},
				set: function(e) {
					this._initialized != e && (this._initialized = e) && this.dispatchEvent(new t.UIEvent(t.UIEvent.CREATION_COMPLETE))
				},
				enumerable: !0,
				configurable: !0
			}), i.prototype.initialize = function() {
				this.initializeCalled || (t.UIGlobals.stage && this.removeEventListener(t.Event.ADDED_TO_STAGE, this.onAddedToStage, this), this.initializeCalled = !0, this.dispatchEvent(new t.UIEvent(t.UIEvent.INITIALIZE)), this.createChildren(), this.childrenCreated())
			}, i.prototype.createChildren = function() {}, i.prototype.childrenCreated = function() {
				this.invalidateProperties(), this.invalidateSize(), this.invalidateDisplayList()
			}, Object.defineProperty(i.prototype, "nestLevel", {
				get: function() {
					return this._nestLevel
				},
				set: function(e) {
					if (this._nestLevel != e) for (this._nestLevel = e, 0 == this._nestLevel ? this.addEventListener(t.Event.ADDED_TO_STAGE, this.checkInvalidateFlag, this) : this.removeEventListener(t.Event.ADDED_TO_STAGE, this.checkInvalidateFlag, this), e = this.numChildren - 1; e >= 0; e--) {
						var i = this.getChildAt(e);
						null != i && (i.nestLevel = this._nestLevel + 1)
					}
				},
				enumerable: !0,
				configurable: !0
			}), i.prototype.addChild = function(t) {
				return this.addingChild(t), e.prototype.addChild.call(this, t), this._childAdded(t), t
			}, i.prototype.addChildAt = function(t, i) {
				return this.addingChild(t), e.prototype.addChildAt.call(this, t, i), this._childAdded(t), t
			}, i.prototype.addingChild = function(t) {
				t && "nestLevel" in t && (t.nestLevel = this._nestLevel + 1)
			}, i.prototype._childAdded = function(t) {
				t instanceof i && (t.initialize(), t.checkInvalidateFlag())
			}, i.prototype.removeChild = function(t) {
				return e.prototype.removeChild.call(this, t), this._childRemoved(t), t
			}, i.prototype.removeChildAt = function(t) {
				return t = e.prototype.removeChildAt.call(this, t), this._childRemoved(t), t
			}, i.prototype._childRemoved = function(t) {
				t && "nestLevel" in t && (t.nestLevel = 0)
			}, i.prototype.checkInvalidateFlag = function() {
				t.UIGlobals.layoutManager && (this.invalidatePropertiesFlag && t.UIGlobals.layoutManager.invalidateProperties(this), this.invalidateSizeFlag && t.UIGlobals.layoutManager.invalidateSize(this), this.invalidateDisplayListFlag && t.UIGlobals.layoutManager.invalidateDisplayList(this), this.validateNowFlag && (t.UIGlobals.layoutManager.validateClient(this), this.validateNowFlag = !1))
			}, Object.defineProperty(i.prototype, "enabled", {
				get: function() {
					return this._enabled
				},
				set: function(t) {
					this._enabled = t
				},
				enumerable: !0,
				configurable: !0
			}), i.prototype._setWidth = function(t) {
				this._width == t && this._explicitWidth == t || (this._explicitWidth = this._width = t, this.invalidateProperties(), this.invalidateDisplayList(), this.invalidateParentSizeAndDisplayList(), isNaN(t) && this.invalidateSize())
			}, Object.defineProperty(i.prototype, "width", {
				get: function() {
					return this.escapeNaN(this._width)
				},
				set: function(t) {
					this._setWidth(t)
				},
				enumerable: !0,
				configurable: !0
			}), i.prototype._setHeight = function(t) {
				this._height == t && this._explicitHeight == t || (this._explicitHeight = this._height = t, this.invalidateProperties(), this.invalidateDisplayList(), this.invalidateParentSizeAndDisplayList(), isNaN(t) && this.invalidateSize())
			}, Object.defineProperty(i.prototype, "height", {
				get: function() {
					return this.escapeNaN(this._height)
				},
				set: function(t) {
					this._setHeight(t)
				},
				enumerable: !0,
				configurable: !0
			}), i.prototype.escapeNaN = function(t) {
				return isNaN(t) ? 0 : t
			}, Object.defineProperty(i.prototype, "scaleX", {
				get: function() {
					return this._scaleX
				},
				set: function(t) {
					this._setScaleX(t)
				},
				enumerable: !0,
				configurable: !0
			}), i.prototype._setScaleX = function(t) {
				this._scaleX != t && (this._scaleX = t, this.invalidateParentSizeAndDisplayList())
			}, Object.defineProperty(i.prototype, "scaleY", {
				get: function() {
					return this._scaleY
				},
				set: function(t) {
					this._setScaleY(t)
				},
				enumerable: !0,
				configurable: !0
			}), i.prototype._setScaleY = function(t) {
				this._scaleY != t && (this._scaleY = t, this.invalidateParentSizeAndDisplayList())
			}, Object.defineProperty(i.prototype, "minWidth", {
				get: function() {
					return this._minWidth
				},
				set: function(t) {
					this._minWidth != t && (this._minWidth = t, this.invalidateSize())
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "maxWidth", {
				get: function() {
					return this._maxWidth
				},
				set: function(t) {
					this._maxWidth != t && (this._maxWidth = t, this.invalidateSize())
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "minHeight", {
				get: function() {
					return this._minHeight
				},
				set: function(t) {
					this._minHeight != t && (this._minHeight = t, this.invalidateSize())
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "maxHeight", {
				get: function() {
					return this._maxHeight
				},
				set: function(t) {
					this._maxHeight != t && (this._maxHeight = t, this.invalidateSize())
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "measuredWidth", {
				get: function() {
					return this._measuredWidth
				},
				set: function(t) {
					this._measuredWidth = t
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "measuredHeight", {
				get: function() {
					return this._measuredHeight
				},
				set: function(t) {
					this._measuredHeight = t
				},
				enumerable: !0,
				configurable: !0
			}), i.prototype.setActualSize = function(t, e) {
				var i = !1;
				this._width != t && (this._width = t, i = !0), this._height != e && (this._height = e, i = !0), i && (this.invalidateDisplayList(), this.dispatchResizeEvent())
			}, Object.defineProperty(i.prototype, "x", {
				get: function() {
					return this._x
				},
				set: function(t) {
					this._x != t && (this._x = t, this.invalidateProperties(), this._includeInLayout && this.parent && this.parent instanceof i && this.parent.childXYChanged())
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "y", {
				get: function() {
					return this._y
				},
				set: function(t) {
					this._y != t && (this._y = t, this.invalidateProperties(), this._includeInLayout && this.parent && this.parent instanceof i && this.parent.childXYChanged())
				},
				enumerable: !0,
				configurable: !0
			}), i.prototype.invalidateProperties = function() {
				this.invalidatePropertiesFlag || (this.invalidatePropertiesFlag = !0, this.parent && t.UIGlobals.layoutManager && t.UIGlobals.layoutManager.invalidateProperties(this))
			}, i.prototype.validateProperties = function() {
				this.invalidatePropertiesFlag && (this.commitProperties(), this.invalidatePropertiesFlag = !1)
			}, i.prototype.invalidateSize = function() {
				this.invalidateSizeFlag || (this.invalidateSizeFlag = !0, this.parent && t.UIGlobals.layoutManager && t.UIGlobals.layoutManager.invalidateSize(this))
			}, i.prototype.validateSize = function(t) {
				if ("undefined" == typeof t && (t = !1), t) for (t = 0; t < this.numChildren; t++) {
					var e = this.getChildAt(t);
					"validateSize" in e && e.validateSize(!0)
				}
				this.invalidateSizeFlag && (this.measureSizes() && (this.invalidateDisplayList(), this.invalidateParentSizeAndDisplayList()), this.invalidateSizeFlag = !1)
			}, i.prototype.measureSizes = function() {
				var t = !1;
				return this.invalidateSizeFlag ? (this.canSkipMeasurement() || (this.measure(), this.measuredWidth < this.minWidth && (this.measuredWidth = this.minWidth), this.measuredWidth > this.maxWidth && (this.measuredWidth = this.maxWidth), this.measuredHeight < this.minHeight && (this.measuredHeight = this.minHeight), this.measuredHeight > this.maxHeight && (this.measuredHeight = this.maxHeight)), isNaN(this.oldPreferWidth) ? (this.oldPreferWidth = this.preferredWidth, this.oldPreferHeight = this.preferredHeight, t = !0) : ((this.preferredWidth != this.oldPreferWidth || this.preferredHeight != this.oldPreferHeight) && (t = !0), this.oldPreferWidth = this.preferredWidth, this.oldPreferHeight = this.preferredHeight), t) : t
			}, i.prototype.invalidateDisplayList = function() {
				this.invalidateDisplayListFlag || (this.invalidateDisplayListFlag = !0, this.parent && t.UIGlobals.layoutManager && t.UIGlobals.layoutManager.invalidateDisplayList(this))
			}, i.prototype.validateDisplayList = function() {
				if (this.invalidateDisplayListFlag) {
					var t = 0,
						e = 0,
						t = this.layoutWidthExplicitlySet ? this._width : isNaN(this.explicitWidth) ? this.measuredWidth : this._explicitWidth,
						e = this.layoutHeightExplicitlySet ? this._height : isNaN(this.explicitHeight) ? this.measuredHeight : this._explicitHeight;
					isNaN(t) && (t = 0), isNaN(e) && (e = 0), this.setActualSize(t, e), this.updateDisplayList(t, e), this.invalidateDisplayListFlag = !1
				}
			}, i.prototype.validateNow = function(e) {
				"undefined" == typeof e && (e = !1), this.validateNowFlag || null == t.UIGlobals.layoutManager ? this.validateNowFlag = !0 : t.UIGlobals.layoutManager.validateClient(this, e)
			}, i.prototype.invalidateParentSizeAndDisplayList = function() {
				if (this.parent && this._includeInLayout && "invalidateSize" in this.parent) {
					var t = this.parent;
					t.invalidateSize(), t.invalidateDisplayList()
				}
			}, i.prototype.updateDisplayList = function() {}, i.prototype.canSkipMeasurement = function() {
				return !isNaN(this._explicitWidth) && !isNaN(this._explicitHeight)
			}, i.prototype.commitProperties = function() {
				(this.oldWidth != this._width || this.oldHeight != this._height) && this.dispatchResizeEvent(), (this.oldX != this.x || this.oldY != this.y) && this.dispatchMoveEvent()
			}, i.prototype.measure = function() {
				this._measuredWidth = this._measuredHeight = 0
			}, i.prototype.dispatchMoveEvent = function() {
				if (this.hasEventListener(t.MoveEvent.MOVE)) {
					var e = new t.MoveEvent(t.MoveEvent.MOVE, this.oldX, this.oldY);
					this.dispatchEvent(e)
				}
				this.oldX = this.x, this.oldY = this.y
			}, i.prototype.childXYChanged = function() {}, i.prototype.dispatchResizeEvent = function() {
				if (this.hasEventListener(t.ResizeEvent.RESIZE)) {
					var e = new t.ResizeEvent(t.ResizeEvent.RESIZE, this.oldWidth, this.oldHeight);
					this.dispatchEvent(e)
				}
				this.oldWidth = this._width, this.oldHeight = this._height
			}, i.prototype.dispatchPropertyChangeEvent = function(e, i, n) {
				this.hasEventListener("propertyChange") && this.dispatchEvent(t.PropertyChangeEvent.createUpdateEvent(this, e, i, n))
			}, Object.defineProperty(i.prototype, "includeInLayout", {
				get: function() {
					return this._includeInLayout
				},
				set: function(t) {
					this._includeInLayout != t && (this._includeInLayout = !0, this.invalidateParentSizeAndDisplayList(), this._includeInLayout = t)
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "left", {
				get: function() {
					return this._left
				},
				set: function(t) {
					this._left != t && (this._left = t, this.invalidateParentSizeAndDisplayList())
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "right", {
				get: function() {
					return this._right
				},
				set: function(t) {
					this._right != t && (this._right = t, this.invalidateParentSizeAndDisplayList())
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "top", {
				get: function() {
					return this._top
				},
				set: function(t) {
					this._top != t && (this._top = t, this.invalidateParentSizeAndDisplayList())
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "bottom", {
				get: function() {
					return this._bottom
				},
				set: function(t) {
					this._bottom != t && (this._bottom = t, this.invalidateParentSizeAndDisplayList())
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "horizontalCenter", {
				get: function() {
					return this._horizontalCenter
				},
				set: function(t) {
					this._horizontalCenter != t && (this._horizontalCenter = t, this.invalidateParentSizeAndDisplayList())
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "verticalCenter", {
				get: function() {
					return this._verticalCenter
				},
				set: function(t) {
					this._verticalCenter != t && (this._verticalCenter = t, this.invalidateParentSizeAndDisplayList())
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "percentWidth", {
				get: function() {
					return this._percentWidth
				},
				set: function(t) {
					this._percentWidth != t && (this._percentWidth = t, this.invalidateParentSizeAndDisplayList())
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "percentHeight", {
				get: function() {
					return this._percentHeight
				},
				set: function(t) {
					this._percentHeight != t && (this._percentHeight = t, this.invalidateParentSizeAndDisplayList())
				},
				enumerable: !0,
				configurable: !0
			}), i.prototype.setLayoutBoundsSize = function(t, e) {
				t /= this.scaleX, e /= this.scaleY, isNaN(t) ? (this.layoutWidthExplicitlySet = !1, t = this.preferredWidth) : this.layoutWidthExplicitlySet = !0, isNaN(e) ? (this.layoutHeightExplicitlySet = !1, e = this.preferredHeight) : this.layoutHeightExplicitlySet = !0, this.setActualSize(t, e)
			}, i.prototype.setLayoutBoundsPosition = function(t, e) {
				var i = !1;
				this._x != t && (this._x = t, i = !0), this._y != e && (this._y = e, i = !0), i && this.dispatchMoveEvent()
			}, Object.defineProperty(i.prototype, "preferredWidth", {
				get: function() {
					var t = isNaN(this._explicitWidth) ? this.measuredWidth : this._explicitWidth;
					return isNaN(t) ? 0 : t * this.scaleX
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "preferredHeight", {
				get: function() {
					var t = isNaN(this._explicitHeight) ? this.measuredHeight : this._explicitHeight;
					return isNaN(t) ? 0 : t * this.scaleY
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "preferredX", {
				get: function() {
					return this._x
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "preferredY", {
				get: function() {
					return this._y
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "layoutBoundsX", {
				get: function() {
					return this._x
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "layoutBoundsY", {
				get: function() {
					return this._y
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "layoutBoundsWidth", {
				get: function() {
					var t = 0,
						t = this.layoutWidthExplicitlySet ? this._width : isNaN(this.explicitWidth) ? this.measuredWidth : this._explicitWidth;
					return this.escapeNaN(t * this.scaleX)
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "layoutBoundsHeight", {
				get: function() {
					var t = 0,
						t = this.layoutHeightExplicitlySet ? this._height : isNaN(this.explicitHeight) ? this.measuredHeight : this._explicitHeight;
					return this.escapeNaN(t * this.scaleY)
				},
				enumerable: !0,
				configurable: !0
			}), i
		}(t.DisplayObjectContainer);
	t.UIComponent = e
}(ns_egret || (ns_egret = {})), function(t) {
	var e = function() {
			function t() {}
			return t.ABOVE = "above", t.BELOW = "below", t.CENTER = "center", t.TOP_LEFT = "topLeft", t.LEFT = "left", t.RIGHT = "right", t
		}();
	t.PopUpPosition = e
}(ns_egret || (ns_egret = {})), function(t) {
	var e = function() {
			function t() {}
			return t.HOME = 36, t.END = 35, t.UP = 38, t.DOWN = 40, t.LEFT = 37, t.RIGHT = 39, t.PAGE_UP = 33, t.PAGE_DOWN = 34, t.PAGE_LEFT = 9111, t.PAGE_RIGHT = 9112, t
		}();
	t.NavigationUnit = e
}(ns_egret || (ns_egret = {})), function(t) {
	var e = function() {
			function t() {}
			return t.AUTO = "auto", t.OFF = "off", t.ON = "on", t
		}();
	t.ScrollPolicy = e
}(ns_egret || (ns_egret = {})), __extends = this.__extends ||
function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype, t.prototype = new i
}, function(t) {
	var e = function(t) {
			function e(e) {
				"undefined" == typeof e && (e = null), t.call(this), this.generator = e
			}
			return __extends(e, t), e.prototype.newInstance = function() {
				return new this.generator
			}, e
		}(t.HashObject);
	t.ClassFactory = e
}(ns_egret || (ns_egret = {})), __extends = this.__extends ||
function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype, t.prototype = new i
}, function(t) {
	var e = function(t) {
			function e() {
				t.call(this)
			}
			return __extends(e, t), e.prototype.initialize = function() {}, e.prototype.apply = function() {}, e.prototype.remove = function() {}, e.prototype.initializeFromObject = function(t) {
				for (var e in t) this[e] = t[e];
				return this
			}, e
		}(t.HashObject);
	t.OverrideBase = e
}(ns_egret || (ns_egret = {})), __extends = this.__extends ||
function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype, t.prototype = new i
}, function(t) {
	var e = function(e) {
			function i() {
				e.call(this), this.propertyName = "", this.position = i.LAST
			}
			return __extends(i, e), i.prototype.initialize = function(e) {
				if ((e = e[this.target]) && !(e instanceof t.SkinnableComponent) && "initialize" in e) try {
					e.initialize()
				} catch (i) {}
			}, i.prototype.apply = function(t) {
				var e, n;
				try {
					n = t[this.relativeTo]
				} catch (o) {}
				var s = t[this.target];
				if (t = this.propertyName ? t[this.propertyName] : t, s && t) {
					switch (this.position) {
					case i.FIRST:
						e = 0;
						break;
					case i.LAST:
						e = -1;
						break;
					case i.BEFORE:
						e = t.getElementIndex(n);
						break;
					case i.AFTER:
						e = t.getElementIndex(n) + 1
					} - 1 == e && (e = t.numElements), t.addElementAt(s, e)
				}
			}, i.prototype.remove = function(t) {
				var e = null == this.propertyName || "" == this.propertyName ? t : t[this.propertyName];
				(t = t[this.target]) && e && -1 != e.getElementIndex(t) && e.removeElement(t)
			}, i.FIRST = "first", i.LAST = "last", i.BEFORE = "before", i.AFTER = "after", i
		}(t.OverrideBase);
	t.AddItems = e
}(ns_egret || (ns_egret = {})), __extends = this.__extends ||
function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype, t.prototype = new i
}, function(t) {
	var e = function(t) {
			function e() {
				t.call(this)
			}
			return __extends(e, t), e.prototype.apply = function(t) {
				t = null == this.target || "" == this.target ? t : t[this.target], null != t && (this.oldValue = t[this.name], this.setPropertyValue(t, this.name, this.value, this.oldValue))
			}, e.prototype.remove = function(t) {
				t = null == this.target || "" == this.target ? t : t[this.target], null != t && (this.setPropertyValue(t, this.name, this.oldValue, this.oldValue), this.oldValue = null)
			}, e.prototype.setPropertyValue = function(t, e, i, n) {
				t[e] = void 0 === i || null === i ? i : "boolean" == typeof n ? this.toBoolean(i) : i
			}, e.prototype.toBoolean = function(t) {
				return "string" == typeof t ? "true" == t.toLowerCase() : 0 != t
			}, e
		}(t.OverrideBase);
	t.SetProperty = e
}(ns_egret || (ns_egret = {})), __extends = this.__extends ||
function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype, t.prototype = new i
}, function(t) {
	var e = function(e) {
			function i(t) {
				"undefined" == typeof t && (t = null), e.call(this), this.initialized = !1, this.overrides = [], this.stateGroups = [];
				for (var i in t) this[i] = t[i]
			}
			return __extends(i, e), i.prototype.initialize = function(t) {
				if (!this.initialized) {
					this.initialized = !0;
					for (var e = 0; e < this.overrides.length; e++) this.overrides[e].initialize(t)
				}
			}, i.prototype.dispatchEnterState = function() {
				this.hasEventListener("enterState") && this.dispatchEvent(new t.Event("enterState"))
			}, i.prototype.dispatchExitState = function() {
				this.hasEventListener("exitState") && this.dispatchEvent(new t.Event("exitState"))
			}, i
		}(t.EventDispatcher);
	t.State = e
}(ns_egret || (ns_egret = {})), function(t) {
	var e = function() {
			function e(t) {
				this._states = [], this.initialized = !1, this.target = t
			}
			return Object.defineProperty(e.prototype, "states", {
				get: function() {
					return this._states
				},
				set: function(t) {
					this._states != t && (this._states = t, this._currentStateChanged = !0, this.requestedCurrentState = this._currentState, this.hasState(this.requestedCurrentState) || (this.requestedCurrentState = this.getDefaultState()))
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(e.prototype, "currentStateChanged", {
				get: function() {
					return this._currentStateChanged
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(e.prototype, "currentState", {
				get: function() {
					return this._currentStateChanged ? this.requestedCurrentState : this._currentState ? this._currentState : this.getDefaultState()
				},
				set: function(t) {
					t || (t = this.getDefaultState()), t != this.currentState && t && this.currentState && (this.requestedCurrentState = t, this._currentStateChanged = !0)
				},
				enumerable: !0,
				configurable: !0
			}), e.prototype.hasState = function(t) {
				return this._states ? "string" == typeof this._states[0] ? -1 != this._states.indexOf(t) : null != this.getState(t) : !1
			}, e.prototype.getDefaultState = function() {
				if (this._states && 0 < this._states.length) {
					var t = this._states[0];
					return "string" == typeof t ? t : t.name
				}
				return null
			}, e.prototype.commitCurrentState = function() {
				if (this.currentStateChanged) if (this._currentStateChanged = !1, "string" == typeof(this.states && this.states[0])) this._currentState = -1 == this.states.indexOf(this.requestedCurrentState) ? this.getDefaultState() : this.requestedCurrentState;
				else {
					this.getState(this.requestedCurrentState) || (this.requestedCurrentState = this.getDefaultState());
					var e, i = this.findCommonBaseState(this._currentState, this.requestedCurrentState),
						n = this._currentState ? this._currentState : "";
					this.target.hasEventListener(t.StateChangeEvent.CURRENT_STATE_CHANGING) && (e = new t.StateChangeEvent(t.StateChangeEvent.CURRENT_STATE_CHANGING), e.oldState = n, e.newState = this.requestedCurrentState ? this.requestedCurrentState : "", this.target.dispatchEvent(e)), this.removeState(this._currentState, i), (this._currentState = this.requestedCurrentState) && this.applyState(this._currentState, i), this.target.hasEventListener(t.StateChangeEvent.CURRENT_STATE_CHANGE) && (e = new t.StateChangeEvent(t.StateChangeEvent.CURRENT_STATE_CHANGE), e.oldState = n, e.newState = this._currentState ? this._currentState : "", this.target.dispatchEvent(e))
				}
			}, e.prototype.getState = function(t) {
				if (!this._states || !t) return null;
				for (var e = 0; e < this._states.length; e++) if (this._states[e].name == t) return this._states[e];
				return null
			}, e.prototype.findCommonBaseState = function(t, e) {
				var i = this.getState(t),
					n = this.getState(e);
				if (!i || !n || !i.basedOn && !n.basedOn) return "";
				for (var o = this.getBaseStates(i), s = this.getBaseStates(n), r = ""; o[o.length - 1] == s[s.length - 1] && (r = o.pop(), s.pop(), !(!o.length || !s.length)););
				return o.length && o[o.length - 1] == n.name ? r = n.name : s.length && s[s.length - 1] == i.name && (r = i.name), r
			}, e.prototype.getBaseStates = function(t) {
				for (var e = []; t && t.basedOn;) e.push(t.basedOn), t = this.getState(t.basedOn);
				return e
			}, e.prototype.removeState = function(t, e) {
				var i = this.getState(t);
				if (t != e && i) {
					i.dispatchExitState();
					for (var n = i.overrides, o = n.length; o; o--) n[o - 1].remove(this.target);
					i.basedOn != e && this.removeState(i.basedOn, e)
				}
			}, e.prototype.applyState = function(t, e) {
				var i = this.getState(t);
				if (t != e && i) {
					i.basedOn != e && this.applyState(i.basedOn, e);
					for (var n = i.overrides, o = 0; o < n.length; o++) n[o].apply(this.target);
					i.dispatchEnterState()
				}
			}, e.prototype.initializeStates = function() {
				if (!this.initialized && (this.initialized = !0, "string" != typeof this._states[0])) for (var t = 0; t < this._states.length; t++) {
					var e = this._states[t];
					if (!e) break;
					e.initialize(this.target)
				}
			}, e
		}();
	t.StateClientHelper = e
}(ns_egret || (ns_egret = {})), __extends = this.__extends ||
function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype, t.prototype = new i
}, function(t) {
	var e = function(e) {
			function i() {
				e.call(this), this._maintainAspectRatio = this.skinReused = this.createChildrenCalled = this.skinNameExplicitlySet = this.skinNameChanged = !1, this.aspectRatio = 0 / 0, this.touchChildren = !1
			}
			return __extends(i, e), Object.defineProperty(i.prototype, "skinName", {
				get: function() {
					return this._skinName
				},
				set: function(t) {
					this._skinName != t && (this._skinName = t, this.skinNameExplicitlySet = !0, this.createChildrenCalled ? this.parseSkinName() : this.skinNameChanged = !0)
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "skin", {
				get: function() {
					return this._skin
				},
				enumerable: !0,
				configurable: !0
			}), i.prototype.onGetSkin = function(t) {
				this._skin !== t && (this._skin && this._skin.parent == this && e.prototype.removeChild.call(this, this._skin), (this._skin = t) && e.prototype.addChildAt.call(this, this._skin, 0)), this.aspectRatio = 0 / 0, this.invalidateSize(), this.invalidateDisplayList(), this.stage && this.validateNow()
			}, i.prototype.createChildren = function() {
				e.prototype.createChildren.call(this), this.skinNameChanged && this.parseSkinName(), this.createChildrenCalled = !0
			}, i.prototype.parseSkinName = function() {
				this.skinNameChanged = !1;
				var e = i.skinAdapter;
				if (!e) try {
					e = i.skinAdapter = t.Injector.getInstance("ISkinAdapter")
				} catch (n) {
					i.defaultSkinAdapter || (i.defaultSkinAdapter = new t.DefaultSkinAdapter), e = i.defaultSkinAdapter
				}
				if (this._skinName) {
					var o = this.skinReused ? null : this._skin;
					this.skinReused = !0, e.getSkin(this._skinName, this.skinChnaged, this, o)
				} else this.skinChnaged(null, this._skinName)
			}, i.prototype.skinChnaged = function(e, i) {
				if (i === this._skinName && (this.onGetSkin(e, i), this.skinReused = !1, this.hasEventListener(t.UIEvent.SKIN_CHANGED))) {
					var n = new t.UIEvent(t.UIEvent.SKIN_CHANGED);
					this.dispatchEvent(n)
				}
			}, i.prototype.measure = function() {
				if (e.prototype.measure.call(this), !(!this._skin || this._skin && "includeInLayout" in this._skin && !this._skin.includeInLayout)) {
					var t = this.getMeasuredSize();
					this.measuredWidth = t.width, this.measuredHeight = t.height
				}
			}, i.prototype.getMeasuredSize = function() {
				var e = new t.Rectangle;
				if (this._skin && "preferredWidth" in this._skin) e.width = this._skin.preferredWidth, e.height = this._skin.preferredHeight;
				else {
					var i = this._skin.scaleX,
						n = this._skin.scaleY;
					this._skin.scaleX = 1, this._skin.scaleY = 1, e.width = this._skin.width, e.height = this._skin.height, this._skin.scaleX = i, this._skin.scaleY = n
				}
				return e
			}, Object.defineProperty(i.prototype, "maintainAspectRatio", {
				get: function() {
					return this._maintainAspectRatio
				},
				set: function(t) {
					this._maintainAspectRatio != t && (this._maintainAspectRatio = t, this.invalidateDisplayList())
				},
				enumerable: !0,
				configurable: !0
			}), i.prototype.updateDisplayList = function(t, i) {
				if (e.prototype.updateDisplayList.call(this, t, i), this._skin) {
					if (this._maintainAspectRatio) {
						var n = 0,
							o = 0;
						if (isNaN(this.aspectRatio)) {
							var s = this.getMeasuredSize();
							this.aspectRatio = 0 == s.width || 0 == s.height ? 0 : s.width / s.height
						}
						0 < this.aspectRatio && i > 0 && t > 0 && (t / i > this.aspectRatio ? (s = i * this.aspectRatio, n = Math.round(.5 * (t - s)), t = s) : (s = t / this.aspectRatio, o = Math.round(.5 * (i - s)), i = s), "setLayoutBoundsPosition" in this._skin ? this._skin.includeInLayout && this._skin.setLayoutBoundsPosition(n, o) : (this._skin.x = n, this._skin.y = o))
					}
					"setLayoutBoundsSize" in this._skin ? this._skin.includeInLayout && this._skin.setLayoutBoundsSize(t, i) : (this._skin.scaleX = t / this._skin.width, this._skin.scaleY = i / this._skin.height, "validateNow" in this._skin && this._skin.validateNow())
				}
			}, i.prototype._addToDisplayList = function(t) {
				return e.prototype.addChild.call(this, t)
			}, i.prototype._addToDisplayListAt = function(t, i) {
				return e.prototype.addChildAt.call(this, t, i)
			}, i.prototype._removeFromDisplayList = function(t) {
				return e.prototype.removeChild.call(this, t)
			}, i.prototype.addChild = function() {
				throw Error("addChild()" + i.errorStr + "addElement()??????")
			}, i.prototype.addChildAt = function() {
				throw Error("addChildAt()" + i.errorStr + "addElementAt()??????")
			}, i.prototype.removeChild = function() {
				throw Error("removeChild()" + i.errorStr + "removeElement()??????")
			}, i.prototype.removeChildAt = function() {
				throw Error("removeChildAt()" + i.errorStr + "removeElementAt()??????")
			}, i.prototype.setChildIndex = function() {
				throw Error("setChildIndex()" + i.errorStr + "setElementIndex()??????")
			}, i.prototype.swapChildren = function() {
				throw Error("swapChildren()" + i.errorStr + "swapElements()??????")
			}, i.prototype.swapChildrenAt = function() {
				throw Error("swapChildrenAt()" + i.errorStr + "swapElementsAt()??????")
			}, i.errorStr = "???????????????????????????????????????????????????????????????", i
		}(t.UIComponent);
	t.UIAsset = e
}(ns_egret || (ns_egret = {})), __extends = this.__extends ||
function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype, t.prototype = new i
}, function(t) {
	var e = function(e) {
			function i() {
				e.call(this), this.stateIsDirty = this.hasCreatedSkinParts = !1, this.touchChildren = this.explicitMouseEnabled = this.explicitMouseChildren = this._autoMouseEnabled = !0
			}
			return __extends(i, e), i.prototype.createChildren = function() {
				null == this.skinName && this.onGetSkin(null, null), e.prototype.createChildren.call(this)
			}, Object.defineProperty(i.prototype, "skinObject", {
				get: function() {
					return this._skinObject
				},
				enumerable: !0,
				configurable: !0
			}), i.prototype.onGetSkin = function(e) {
				this.detachSkin(this._skinObject), this._skin && this._skin.parent == this && this._removeFromDisplayList(this._skin), e instanceof t.DisplayObject ? (this._skin = e, this._addToDisplayListAt(this._skin, 0)) : this._skin = null, this._skinObject = e, this.attachSkin(this._skinObject), this.aspectRatio = 0 / 0, this.invalidateSkinState(), this.invalidateSize(), this.invalidateDisplayList()
			}, i.prototype.attachSkin = function(e) {
				e && "hostComponent" in e ? (e.hostComponent = this, this.findSkinParts()) : this.hasCreatedSkinParts || (this.createSkinParts(), this.hasCreatedSkinParts = !0), this.skinLayoutEnabled = e && "hostComponent" in e && e instanceof t.DisplayObject ? !1 : !0
			}, i.prototype.findSkinParts = function() {
				var t = this._skinObject;
				if (t && "skinParts" in t) for (var e = t.skinParts, i = e.length, n = 0; i > n; n++) {
					var o = e[n];
					if (o in t) try {
						this[o] = t[o], this.partAdded(o, t[o])
					} catch (s) {}
				}
			}, i.prototype.createSkinParts = function() {}, i.prototype.removeSkinParts = function() {}, i.prototype.detachSkin = function(t) {
				if (this.hasCreatedSkinParts && (this.removeSkinParts(), this.hasCreatedSkinParts = !1), t && "skinParts" in t.prototype) {
					for (var e = t.prototype.skinParts, i = e.length, n = 0; i > n; n++) {
						var o = e[n];
						o in this && (null != this[o] && this.partRemoved(o, this[o]), this[o] = null)
					}
					t.hostComponent = null
				}
			}, i.prototype.partAdded = function(e, i) {
				var n = new t.SkinPartEvent(t.SkinPartEvent.PART_ADDED);
				n.partName = e, n.instance = i, this.dispatchEvent(n)
			}, i.prototype.partRemoved = function(e, i) {
				var n = new t.SkinPartEvent(t.SkinPartEvent.PART_REMOVED);
				n.partName = e, n.instance = i, this.dispatchEvent(n)
			}, i.prototype.invalidateSkinState = function() {
				this.stateIsDirty || (this.stateIsDirty = !0, this.invalidateProperties())
			}, i.prototype.validateSkinState = function() {
				var e = this.getCurrentSkinState(),
					i = this._skinObject;
				i && "hasState" in i && (i.currentState = e, i.hasState(e)), this.hasEventListener("stateChanged") && this.dispatchEvent(new t.Event("stateChanged"))
			}, Object.defineProperty(i.prototype, "autoTouchEnabled", {
				get: function() {
					return this._autoMouseEnabled
				},
				set: function(t) {
					this._autoMouseEnabled != t && ((this._autoMouseEnabled = t) ? (this._touchChildren = this.enabled ? this.explicitMouseChildren : !1, this._touchEnabled = this.enabled ? this.explicitMouseEnabled : !1) : (this._touchChildren = this.explicitMouseChildren, this._touchEnabled = this.explicitMouseEnabled))
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "touchChildren", {
				get: function() {
					return this._touchChildren
				},
				set: function(t) {
					this.enabled && (this._touchChildren = t), this.explicitMouseChildren = t
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "touchEnabled", {
				get: function() {
					return this._touchEnabled
				},
				set: function(t) {
					this.enabled && (this._touchEnabled = t), this.explicitMouseEnabled = t
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "enabled", {
				get: function() {
					return this._enabled
				},
				set: function(t) {
					this._setEnabled(t)
				},
				enumerable: !0,
				configurable: !0
			}), i.prototype._setEnabled = function(t) {
				this._enabled != t && (this._enabled = t, this._autoMouseEnabled && (this._touchChildren = t ? this.explicitMouseChildren : !1, this._touchEnabled = t ? this.explicitMouseEnabled : !1), this.invalidateSkinState())
			}, i.prototype.getCurrentSkinState = function() {
				return this.enabled ? "normal" : "disabled"
			}, i.prototype.commitProperties = function() {
				e.prototype.commitProperties.call(this), this.stateIsDirty && (this.stateIsDirty = !1, this.validateSkinState())
			}, Object.defineProperty(i.prototype, "skinLayoutEnabled", {
				set: function(e) {
					null != this.skinLayout != e && (e ? (this.skinLayout = new t.SkinBasicLayout, this.skinLayout.target = this) : this.skinLayout = this.skinLayout.target = null, this.invalidateSize(), this.invalidateDisplayList())
				},
				enumerable: !0,
				configurable: !0
			}), i.prototype.childXYChanged = function() {
				this.skinLayout && (this.invalidateSize(), this.invalidateDisplayList())
			}, i.prototype.measure = function() {
				e.prototype.measure.call(this), this.skinLayout && this.skinLayout.measure();
				var t = this._skinObject;
				if (!this._skin && t) {
					var i = this.measuredWidth,
						n = this.measuredHeight;
					try {
						isNaN(t.width) || (i = Math.ceil(t.width)), isNaN(t.height) || (n = Math.ceil(t.height)), t.hasOwnProperty("minWidth") && i < t.minWidth && (i = t.minWidth), t.hasOwnProperty("maxWidth") && i > t.maxWidth && (i = t.maxWidth), t.hasOwnProperty("minHeight") && n < t.minHeight && (n = t.minHeight), t.hasOwnProperty("maxHeight") && n > t.maxHeight && (n = t.maxHeight), this.measuredWidth = i, this.measuredHeight = n
					} catch (o) {}
				}
			}, i.prototype.updateDisplayList = function(t, i) {
				e.prototype.updateDisplayList.call(this, t, i), this.skinLayout && this.skinLayout.updateDisplayList(t, i)
			}, i
		}(t.UIAsset);
	t.SkinnableComponent = e
}(ns_egret || (ns_egret = {})), function(t) {
	var e = function() {
			function e() {}
			return e.prototype.getSkin = function(e, i, n) {
				e instanceof t.DisplayObject ? i.call(n, e, e) : i.call(n, new e, e)
			}, e
		}();
	t.DefaultSkinAdapter = e
}(ns_egret || (ns_egret = {})), __extends = this.__extends ||
function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype, t.prototype = new i
}, function(t) {
	var e = function(t) {
			function e() {
				t.call(this)
			}
			return __extends(e, t), Object.defineProperty(e.prototype, "target", {
				get: function() {
					return this._target
				},
				set: function(t) {
					this._target = t
				},
				enumerable: !0,
				configurable: !0
			}), e.prototype.measure = function() {
				if (null != this.target) {
					for (var t = 0, e = 0, i = this._target.skin, n = this.target.numChildren, o = 0; n > o; o++) {
						var s = this.target.getChildAt(o);
						if (s && s != i && s.includeInLayout) {
							var r = s.horizontalCenter,
								a = s.verticalCenter,
								h = s.left,
								l = s.right,
								p = s.top,
								c = s.bottom;
							isNaN(h) || isNaN(l) ? isNaN(r) ? isNaN(h) && isNaN(l) ? r = s.preferredX : (r = isNaN(h) ? 0 : h, r += isNaN(l) ? 0 : l) : r = 2 * Math.abs(r) : r = h + l, isNaN(p) || isNaN(c) ? isNaN(a) ? isNaN(p) && isNaN(c) ? a = s.preferredY : (a = isNaN(p) ? 0 : p, a += isNaN(c) ? 0 : c) : a = 2 * Math.abs(a) : a = p + c, c = s.preferredHeight, t = Math.ceil(Math.max(t, r + s.preferredWidth)), e = Math.ceil(Math.max(e, a + c))
						}
					}
					this.target.measuredWidth = Math.max(t, this.target.measuredWidth), this.target.measuredHeight = Math.max(e, this.target.measuredHeight)
				}
			}, e.prototype.updateDisplayList = function(t, e) {
				if (null != this.target) for (var i = this.target.numChildren, n = this._target.skin, o = 0; i > o; o++) {
					var s = this.target.getChildAt(o);
					if (null != s && s != n && s.includeInLayout) {
						var r = s.horizontalCenter,
							a = s.verticalCenter,
							h = s.left,
							l = s.right,
							p = s.top,
							c = s.bottom,
							u = s.percentWidth,
							d = s.percentHeight,
							m = 0 / 0,
							_ = 0 / 0;
						isNaN(h) || isNaN(l) ? isNaN(u) || (m = Math.round(t * Math.min(.01 * u, 1))) : m = t - l - h, isNaN(p) || isNaN(c) ? isNaN(d) || (_ = Math.round(e * Math.min(.01 * d, 1))) : _ = e - c - p, s.setLayoutBoundsSize(m, _), u = s.layoutBoundsWidth, d = s.layoutBoundsHeight, _ = m = 0 / 0, m = isNaN(r) ? isNaN(h) ? isNaN(l) ? s.layoutBoundsX : t - u - l : h : Math.round((t - u) / 2 + r), _ = isNaN(a) ? isNaN(p) ? isNaN(c) ? s.layoutBoundsY : e - d - c : p : Math.round((e - d) / 2 + a), s.setLayoutBoundsPosition(m, _)
					}
				}
			}, e
		}(t.HashObject);
	t.SkinBasicLayout = e
}(ns_egret || (ns_egret = {})), __extends = this.__extends ||
function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype, t.prototype = new i
}, function(t) {
	var e = function(e) {
			function i() {
				e.call(this), this._autoRepeat = this._downEventFired = !1, this._repeatInterval = this._repeatDelay = 35, this._keepDown = this._hovered = !1, this._label = "", this._stickyHighlighting = this._mouseCaptured = !1, this._createLabelIfNeed = !0, this.touchChildren = this.hasCreatedLabel = this.createLabelIfNeedChanged = !1, this.addHandlers()
			}
			return __extends(i, e), Object.defineProperty(i.prototype, "autoRepeat", {
				get: function() {
					return this._autoRepeat
				},
				set: function(t) {
					t != this._autoRepeat && (this._autoRepeat = t, this.checkAutoRepeatTimerConditions(this.isDown()))
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "repeatDelay", {
				get: function() {
					return this._repeatDelay
				},
				set: function(t) {
					this._repeatDelay = t
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "repeatInterval", {
				get: function() {
					return this._repeatInterval
				},
				set: function(t) {
					this._repeatInterval = t
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "hovered", {
				get: function() {
					return this._hovered
				},
				set: function(t) {
					t != this._hovered && (this._hovered = t, this.invalidateSkinState(), this.checkButtonDownConditions())
				},
				enumerable: !0,
				configurable: !0
			}), i.prototype.keepDown = function(t) {
				this._keepDown != t && (this._keepDown = t, this.invalidateSkinState())
			}, Object.defineProperty(i.prototype, "label", {
				get: function() {
					return this._getLabel()
				},
				set: function(t) {
					this._setLabel(t)
				},
				enumerable: !0,
				configurable: !0
			}), i.prototype._getLabel = function() {
				return this.labelDisplay ? this.labelDisplay.text : this._label
			}, i.prototype._setLabel = function(t) {
				this._label = t, this.labelDisplay && (this.labelDisplay.text = t)
			}, Object.defineProperty(i.prototype, "mouseCaptured", {
				get: function() {
					return this._mouseCaptured
				},
				set: function(t) {
					t != this._mouseCaptured && (this._mouseCaptured = t, this.invalidateSkinState(), t || this.removeStageMouseHandlers(), this.checkButtonDownConditions())
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "stickyHighlighting", {
				get: function() {
					return this._stickyHighlighting
				},
				set: function(t) {
					t != this._stickyHighlighting && (this._stickyHighlighting = t, this.invalidateSkinState(), this.checkButtonDownConditions())
				},
				enumerable: !0,
				configurable: !0
			}), i.prototype.checkButtonDownConditions = function() {
				var e = this.isDown();
				this._downEventFired != e && (e && this.dispatchEvent(new t.UIEvent(t.UIEvent.BUTTON_DOWN)), this._downEventFired = e, this.checkAutoRepeatTimerConditions(e))
			}, i.prototype.addHandlers = function() {
				this.addEventListener(t.TouchEvent.TOUCH_ROLL_OVER, this.mouseEventHandler, this), this.addEventListener(t.TouchEvent.TOUCH_ROLL_OUT, this.mouseEventHandler, this), this.addEventListener(t.TouchEvent.TOUCH_BEGAN, this.mouseEventHandler, this), this.addEventListener(t.TouchEvent.TOUCH_END, this.mouseEventHandler, this), this.addEventListener(t.TouchEvent.TOUCH_TAP, this.mouseEventHandler, this)
			}, i.prototype.addStageMouseHandlers = function() {
				t.UIGlobals.stage.addEventListener(t.TouchEvent.TOUCH_END, this.stage_mouseUpHandler, this), t.UIGlobals.stage.addEventListener(t.Event.LEAVE_STAGE, this.stage_mouseUpHandler, this)
			}, i.prototype.removeStageMouseHandlers = function() {
				t.UIGlobals.stage.removeEventListener(t.TouchEvent.TOUCH_END, this.stage_mouseUpHandler, this), t.UIGlobals.stage.removeEventListener(t.Event.LEAVE_STAGE, this.stage_mouseUpHandler, this)
			}, i.prototype.isDown = function() {
				return this.enabled && this.mouseCaptured && (this.hovered || this.stickyHighlighting) ? !0 : !1
			}, i.prototype.checkAutoRepeatTimerConditions = function(t) {
				t = this.autoRepeat && t, t != (null != this.autoRepeatTimer) && (t ? this.startTimer() : this.stopTimer())
			}, i.prototype.startTimer = function() {
				this.autoRepeatTimer = new t.Timer(1), this.autoRepeatTimer.delay = this._repeatDelay, this.autoRepeatTimer.addEventListener(t.TimerEvent.TIMER, this.autoRepeat_timerDelayHandler, this), this.autoRepeatTimer.start()
			}, i.prototype.stopTimer = function() {
				this.autoRepeatTimer.stop(), this.autoRepeatTimer = null
			}, i.prototype.mouseEventHandler = function(e) {
				switch (e.type) {
				case t.TouchEvent.TOUCH_ROLL_OVER:
					if (e.touchDown && !this.mouseCaptured) break;
					this.hovered = !0;
					break;
				case t.TouchEvent.TOUCH_ROLL_OUT:
					this.hovered = !1;
					break;
				case t.TouchEvent.TOUCH_BEGAN:
					this.addStageMouseHandlers(), t.InteractionMode.mode == t.InteractionMode.TOUCH && (this.hovered = !0), this.mouseCaptured = !0;
					break;
				case t.TouchEvent.TOUCH_END:
					e.target == this && (this.hovered = !0, this.mouseCaptured && (this.buttonReleased(), this.mouseCaptured = !1));
					break;
				case t.TouchEvent.TOUCH_TAP:
					this.enabled ? this.clickHandler(e) : e.stopImmediatePropagation()
				}
			}, i.prototype.buttonReleased = function() {}, i.prototype.clickHandler = function() {}, i.prototype.stage_mouseUpHandler = function(t) {
				t.target != this && (this.mouseCaptured = !1)
			}, i.prototype.autoRepeat_timerDelayHandler = function() {
				this.autoRepeatTimer.reset(), this.autoRepeatTimer.removeEventListener(t.TimerEvent.TIMER, this.autoRepeat_timerDelayHandler, this), this.autoRepeatTimer.delay = this._repeatInterval, this.autoRepeatTimer.addEventListener(t.TimerEvent.TIMER, this.autoRepeat_timerHandler, this), this.autoRepeatTimer.start()
			}, i.prototype.autoRepeat_timerHandler = function() {
				this.dispatchEvent(new t.UIEvent(t.UIEvent.BUTTON_DOWN))
			}, i.prototype.getCurrentSkinState = function() {
				return this.enabled ? this.isDown() || this._keepDown ? "down" : t.InteractionMode.mode == t.InteractionMode.MOUSE && (this.hovered || this.mouseCaptured) ? "over" : "up" : e.prototype.getCurrentSkinState.call(this)
			}, i.prototype.partAdded = function(t, i) {
				e.prototype.partAdded.call(this, t, i), i == this.labelDisplay && (this.labelDisplay.text = this._label)
			}, i.prototype.commitProperties = function() {
				e.prototype.commitProperties.call(this), this.createLabelIfNeedChanged && (this.createLabelIfNeedChanged = !1, this.createLabelIfNeed ? (this.createSkinParts(), this.invalidateSize(), this.invalidateDisplayList()) : this.removeSkinParts())
			}, Object.defineProperty(i.prototype, "createLabelIfNeed", {
				get: function() {
					return this._createLabelIfNeed
				},
				set: function(t) {
					t != this._createLabelIfNeed && (this._createLabelIfNeed = t, this.createLabelIfNeedChanged = !0, this.invalidateProperties())
				},
				enumerable: !0,
				configurable: !0
			}), i.prototype.createSkinParts = function() {
				if (!this.hasCreatedLabel && this._createLabelIfNeed) {
					this.hasCreatedLabel = !0;
					var e = new t.Label;
					e.textAlign = t.HorizontalAlign.CENTER, e.verticalAlign = t.VerticalAlign.MIDDLE, e.maxDisplayedLines = 1, e.left = 10, e.right = 10, e.top = 2, e.bottom = 2, this._addToDisplayList(e), this.labelDisplay = e, this.partAdded("labelDisplay", this.labelDisplay)
				}
			}, i.prototype.removeSkinParts = function() {
				this.hasCreatedLabel && (this.hasCreatedLabel = !1, this.labelDisplay && (this._label = this.labelDisplay.text, this.partRemoved("labelDisplay", this.labelDisplay), this._removeFromDisplayList(this.labelDisplay), this.labelDisplay = null))
			}, i
		}(t.SkinnableComponent);
	t.ButtonBase = e
}(ns_egret || (ns_egret = {})), __extends = this.__extends ||
function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype, t.prototype = new i
}, function(t) {
	var e = function(e) {
			function i() {
				e.call(this), this._autoSelected = !0
			}
			return __extends(i, e), Object.defineProperty(i.prototype, "selected", {
				get: function() {
					return this._selected
				},
				set: function(t) {
					this._setSelected(t)
				},
				enumerable: !0,
				configurable: !0
			}), i.prototype._setSelected = function(e) {
				e != this._selected && (this._selected = e, this.dispatchEvent(new t.UIEvent(t.UIEvent.VALUE_COMMIT)), this.invalidateSkinState())
			}, i.prototype.getCurrentSkinState = function() {
				return this.selected ? e.prototype.getCurrentSkinState.call(this) + "AndSelected" : e.prototype.getCurrentSkinState.call(this)
			}, i.prototype.buttonReleased = function() {
				e.prototype.buttonReleased.call(this), this._autoSelected && this.enabled && (this.selected = !this.selected, this.dispatchEventWith(t.Event.CHANGE))
			}, i
		}(t.ButtonBase);
	t.ToggleButtonBase = e
}(ns_egret || (ns_egret = {})), __extends = this.__extends ||
function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype, t.prototype = new i
}, function(t) {
	var e = function(e) {
			function i() {
				e.call(this), this._fontFamily = "SimSun", this._size = 12, this._textAlign = t.HorizontalAlign.LEFT, this._verticalAlign = t.VerticalAlign.TOP, this._textColor = this._letterSpacing = this._lineSpacing = 0, this._text = ""
			}
			return __extends(i, e), Object.defineProperty(i.prototype, "fontFamily", {
				get: function() {
					return this._fontFamily
				},
				set: function(t) {
					this._fontFamily != t && (this._fontFamily = t, this.fontFamilyChanged = !0, this.invalidateProperties(), this.invalidateSize(), this.invalidateDisplayList())
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "size", {
				get: function() {
					return this._size
				},
				set: function(t) {
					this._size != t && (this._size = t, this.sizeChanged = !0, this.invalidateProperties(), this.invalidateSize(), this.invalidateDisplayList())
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "textAlign", {
				get: function() {
					return this._textAlign
				},
				set: function(t) {
					this._textAlign != t && (this._textAlign = t, this.textAlignChanged = !0, this.invalidateProperties(), this.invalidateSize(), this.invalidateDisplayList())
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "verticalAlign", {
				get: function() {
					return this._verticalAlign
				},
				set: function(t) {
					this._verticalAlign != t && (this._verticalAlign = t, this.verticalAlignChanged = !0, this.invalidateProperties(), this.invalidateSize(), this.invalidateDisplayList())
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "lineSpacing", {
				get: function() {
					return this._lineSpacing
				},
				set: function(t) {
					this._lineSpacing != t && (this._lineSpacing = t, this.lineSpacingChanged = !0, this.invalidateProperties(), this.invalidateSize(), this.invalidateDisplayList())
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "letterSpacing", {
				get: function() {
					return this._letterSpacing
				},
				set: function(t) {
					this._letterSpacing != t && (this._letterSpacing = t, this.letterSpacingChanged = !0, this.invalidateProperties(), this.invalidateSize(), this.invalidateDisplayList())
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "textColor", {
				get: function() {
					return this._textColor
				},
				set: function(t) {
					this._textColor != t && (this._textColor = t, this.textColorChanged = !0, this.invalidateProperties())
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "text", {
				get: function() {
					return this._text
				},
				set: function(t) {
					t != this._text && (this._text = t, this.textChanged = !0, this.invalidateProperties(), this.invalidateSize(), this.invalidateDisplayList())
				},
				enumerable: !0,
				configurable: !0
			}), i.prototype.createChildren = function() {
				e.prototype.createChildren.call(this), this._textField || this.checkTextField()
			}, i.prototype.commitProperties = function() {
				e.prototype.commitProperties.call(this), this._textField || this.checkTextField(), this.fontFamilyChanged && (this._textField.fontFamily = this._fontFamily, this.fontFamilyChanged = !1), this.sizeChanged && (this._textField.size = this._size, this.sizeChanged = !1), this.textAlignChanged && (this._textField.textAlign = this._textAlign, this.textAlignChanged = !1), this.verticalAlignChanged && (this._textField.verticalAlign = this._verticalAlign, this.verticalAlignChanged = !1), this.lineSpacingChanged && (this._textField.lineSpacing = this._lineSpacing, this.lineSpacingChanged = !1), this.letterSpacingChanged && (this._textField.letterSpacing = this._letterSpacing, this.letterSpacingChanged = !1), this.textColorChanged && (this._textField.textColor = this._textColor, this.textColorChanged = !1), this.textChanged && (this._textField.text = this._text, this.textChanged = !1)
			}, i.prototype.checkTextField = function() {
				this._textField || (this.createTextField(), this._textField.text = this._text, this.textChanged = !0, this.invalidateProperties())
			}, i.prototype.createTextField = function() {
				this._textField = new t.TextField, this._textField.fontFamily = this._fontFamily, this._textField.size = this._size, this._textField.textAlign = this._textAlign, this._textField.verticalAlign = this._verticalAlign, this._textField.lineSpacing = this._lineSpacing, this._textField.letterSpacing = this.letterSpacing, this._textField.textColor = this._textColor, this.addChild(this._textField)
			}, i.prototype.measure = function() {
				e.prototype.measure.call(this), this.measuredWidth = i.DEFAULT_MEASURED_WIDTH, this.measuredHeight = i.DEFAULT_MEASURED_HEIGHT
			}, i.prototype.$updateDisplayList = function(t, i) {
				e.prototype.updateDisplayList.call(this, t, i)
			}, i.prototype.updateDisplayList = function(t, i) {
				e.prototype.updateDisplayList.call(this, t, i), this._textField.width = t, this._textField.height = i
			}, i.DEFAULT_MEASURED_WIDTH = 160, i.DEFAULT_MEASURED_HEIGHT = 22, i
		}(t.UIComponent);
	t.TextBase = e
}(ns_egret || (ns_egret = {})), __extends = this.__extends ||
function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype, t.prototype = new i
}, function(t) {
	var e = function(e) {
			function i() {
				e.call(this), this._contentHeight = this._contentWidth = 0, this.touchEnabled = this.layoutInvalidateSizeFlag = this.layoutInvalidateDisplayListFlag = !1
			}
			return __extends(i, e), Object.defineProperty(i.prototype, "contentWidth", {
				get: function() {
					return this._contentWidth
				},
				enumerable: !0,
				configurable: !0
			}), i.prototype.setContentWidth = function(t) {
				if (t != this._contentWidth) {
					var e = this._contentWidth;
					this._contentWidth = t, this.dispatchPropertyChangeEvent("contentWidth", e, t)
				}
			}, Object.defineProperty(i.prototype, "contentHeight", {
				get: function() {
					return this._contentHeight
				},
				enumerable: !0,
				configurable: !0
			}), i.prototype.setContentHeight = function(t) {
				if (t != this._contentHeight) {
					var e = this._contentHeight;
					this._contentHeight = t, this.dispatchPropertyChangeEvent("contentHeight", e, t)
				}
			}, i.prototype.setContentSize = function(t, e) {
				t == this._contentWidth && e == this._contentHeight || (this.setContentWidth(t), this.setContentHeight(e))
			}, Object.defineProperty(i.prototype, "layout", {
				get: function() {
					return this._layout
				},
				set: function(t) {
					this._setLayout(t)
				},
				enumerable: !0,
				configurable: !0
			}), i.prototype._setLayout = function(e) {
				this._layout != e && (this._layout && (this._layout.target = null, this._layout.removeEventListener(t.PropertyChangeEvent.PROPERTY_CHANGE, this.redispatchLayoutEvent, this), this._layoutProperties = {
					clipAndEnableScrolling: this._layout.clipAndEnableScrolling
				}), (this._layout = e) && (this._layout.target = this, this._layout.addEventListener(t.PropertyChangeEvent.PROPERTY_CHANGE, this.redispatchLayoutEvent, this), this._layoutProperties && (void 0 !== this._layoutProperties.clipAndEnableScrolling && (e.clipAndEnableScrolling = this._layoutProperties.clipAndEnableScrolling), void 0 !== this._layoutProperties.verticalScrollPosition && (e.verticalScrollPosition = this._layoutProperties.verticalScrollPosition), void 0 !== this._layoutProperties.horizontalScrollPosition && (e.horizontalScrollPosition = this._layoutProperties.horizontalScrollPosition), this._layoutProperties = null)), this.invalidateSize(), this.invalidateDisplayList(), this.dispatchEvent(new t.Event("layoutChanged")))
			}, i.prototype.redispatchLayoutEvent = function(t) {
				if (t) switch (t.property) {
				case "verticalScrollPosition":
				case "horizontalScrollPosition":
					this.dispatchEvent(t)
				}
			}, i.prototype.createChildren = function() {
				e.prototype.createChildren.call(this), this._layout || (this.layout = new t.BasicLayout)
			}, Object.defineProperty(i.prototype, "clipAndEnableScrolling", {
				get: function() {
					return this._layout ? this._layout.clipAndEnableScrolling : this._layoutProperties && void 0 !== this._layoutProperties.clipAndEnableScrolling ? this._layoutProperties.clipAndEnableScrolling : !1
				},
				set: function(t) {
					this._layout ? this._layout.clipAndEnableScrolling = t : this._layoutProperties ? this._layoutProperties.clipAndEnableScrolling = t : this._layoutProperties = {
						clipAndEnableScrolling: t
					}, this.invalidateSize()
				},
				enumerable: !0,
				configurable: !0
			}), i.prototype.getHorizontalScrollPositionDelta = function(t) {
				return this.layout ? this.layout.getHorizontalScrollPositionDelta(t) : 0
			}, i.prototype.getVerticalScrollPositionDelta = function(t) {
				return this.layout ? this.layout.getVerticalScrollPositionDelta(t) : 0
			}, Object.defineProperty(i.prototype, "horizontalScrollPosition", {
				get: function() {
					return this._layout ? this._layout.horizontalScrollPosition : this._layoutProperties && void 0 !== this._layoutProperties.horizontalScrollPosition ? this._layoutProperties.horizontalScrollPosition : 0
				},
				set: function(t) {
					this._layout ? this._layout.horizontalScrollPosition = t : this._layoutProperties ? this._layoutProperties.horizontalScrollPosition = t : this._layoutProperties = {
						horizontalScrollPosition: t
					}
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "verticalScrollPosition", {
				get: function() {
					return this._layout ? this._layout.verticalScrollPosition : this._layoutProperties && void 0 !== this._layoutProperties.verticalScrollPosition ? this._layoutProperties.verticalScrollPosition : 0
				},
				set: function(t) {
					this._layout ? this._layout.verticalScrollPosition = t : this._layoutProperties ? this._layoutProperties.verticalScrollPosition = t : this._layoutProperties = {
						verticalScrollPosition: t
					}
				},
				enumerable: !0,
				configurable: !0
			}), i.prototype.measure = function() {
				this._layout && this.layoutInvalidateSizeFlag && (e.prototype.measure.call(this), this._layout.measure())
			}, i.prototype.invalidateDisplayListExceptLayout = function() {
				e.prototype.invalidateDisplayList.call(this)
			}, i.prototype.invalidateDisplayList = function() {
				e.prototype.invalidateDisplayList.call(this), this.layoutInvalidateDisplayListFlag = !0
			}, i.prototype.childXYChanged = function() {
				this.invalidateSize(), this.invalidateDisplayList()
			}, i.prototype.invalidateSizeExceptLayout = function() {
				e.prototype.invalidateSize.call(this)
			}, i.prototype.invalidateSize = function() {
				e.prototype.invalidateSize.call(this), this.layoutInvalidateSizeFlag = !0
			}, i.prototype.updateDisplayList = function(t, i) {
				e.prototype.updateDisplayList.call(this, t, i), this.layoutInvalidateDisplayListFlag && this._layout && (this.layoutInvalidateDisplayListFlag = !1, this._layout.updateDisplayList(t, i), this._layout.updateScrollRect(t, i))
			}, Object.defineProperty(i.prototype, "numElements", {
				get: function() {
					return -1
				},
				enumerable: !0,
				configurable: !0
			}), i.prototype.getElementAt = function() {
				return null
			}, i.prototype.getElementIndex = function() {
				return -1
			}, i.prototype.getElementIndicesInView = function() {
				var e, i = [];
				if (this.scrollRect) for (e = 0; e < this.numChildren; e++) {
					var n = this.getChildAt(e);
					if (n) {
						var o = new t.Rectangle;
						o.x = n.layoutBoundsX, o.y = n.layoutBoundsY, o.width = n.layoutBoundsWidth, o.height = n.layoutBoundsHeight, this.scrollRect.intersects(o) && i.push(e)
					}
				} else for (e = 0; e < this.numChildren; e++) i.push(e);
				return i
			}, i.prototype.setVirtualElementIndicesInView = function() {}, i.prototype.getVirtualElementAt = function(t) {
				return this.getElementAt(t)
			}, Object.defineProperty(i.prototype, "scrollRect", {
				get: function() {
					return this._scrollRect
				},
				set: function(e) {
					this._scrollRect = e, this.hasEventListener("scrollRectChange") && this.dispatchEvent(new t.Event("scrollRectChange"))
				},
				enumerable: !0,
				configurable: !0
			}), i
		}(t.UIComponent);
	t.GroupBase = e
}(ns_egret || (ns_egret = {})), __extends = this.__extends ||
function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype, t.prototype = new i
}, function(t) {
	var e = function(t) {
			function e() {
				t.call(this), this._selected = this.dataChangedFlag = !1, this._itemIndex = -1, this.touchChildren = !0
			}
			return __extends(e, t), Object.defineProperty(e.prototype, "data", {
				get: function() {
					return this._data
				},
				set: function(t) {
					this._data = t, this.initialized || this.parent ? (this.dataChangedFlag = !1, this.dataChanged()) : (this.dataChangedFlag = !0, this.invalidateProperties())
				},
				enumerable: !0,
				configurable: !0
			}), e.prototype.dataChanged = function() {}, Object.defineProperty(e.prototype, "selected", {
				get: function() {
					return this._selected
				},
				set: function(t) {
					this._selected != t && (this._selected = t, this.invalidateSkinState())
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(e.prototype, "itemIndex", {
				get: function() {
					return this._itemIndex
				},
				set: function(t) {
					this._itemIndex = t
				},
				enumerable: !0,
				configurable: !0
			}), e.prototype.commitProperties = function() {
				t.prototype.commitProperties.call(this), this.dataChangedFlag && (this.dataChangedFlag = !1, this.dataChanged())
			}, e.prototype.getCurrentSkinState = function() {
				return this._selected ? "down" : t.prototype.getCurrentSkinState.call(this)
			}, e
		}(t.ButtonBase);
	t.ItemRenderer = e
}(ns_egret || (ns_egret = {})), __extends = this.__extends ||
function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype, t.prototype = new i
}, function(t) {
	var e = function(e) {
			function i() {
				e.call(this), this._indentation = 17, this._depth = 0, this._isOpen = this._hasChildren = !1, this.addEventListener(t.TouchEvent.TOUCH_BEGAN, this.onItemMouseDown, this, !1, 1e3)
			}
			return __extends(i, e), i.prototype.onItemMouseDown = function(t) {
				t.target == this.disclosureButton && t.stopImmediatePropagation()
			}, Object.defineProperty(i.prototype, "indentation", {
				get: function() {
					return this._indentation
				},
				set: function(t) {
					this._indentation = t
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "iconSkinName", {
				get: function() {
					return this._iconSkinName
				},
				set: function(t) {
					this._iconSkinName != t && (this._iconSkinName = t, this.iconDisplay && (this.iconDisplay.skinName = this._iconSkinName))
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "depth", {
				get: function() {
					return this._depth
				},
				set: function(t) {
					t != this._depth && (this._depth = t, this.contentGroup && (this.contentGroup.x = this._depth * this._indentation))
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "hasChildren", {
				get: function() {
					return this._hasChildren
				},
				set: function(t) {
					this._hasChildren != t && (this._hasChildren = t, this.disclosureButton && (this.disclosureButton.visible = this._hasChildren))
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "opened", {
				get: function() {
					return this._isOpen
				},
				set: function(t) {
					this._isOpen != t && (this._isOpen = t, this.disclosureButton && (this.disclosureButton.selected = this._isOpen))
				},
				enumerable: !0,
				configurable: !0
			}), i.prototype.partAdded = function(i, n) {
				e.prototype.partAdded.call(this, i, n), n == this.iconDisplay ? this.iconDisplay.skinName = this._iconSkinName : n == this.disclosureButton ? (this.disclosureButton.visible = this._hasChildren, this.disclosureButton.selected = this._isOpen, this.disclosureButton._autoSelected = !1, this.disclosureButton.addEventListener(t.TouchEvent.TOUCH_BEGAN, this.disclosureButton_mouseDownHandler, this)) : n == this.contentGroup && (this.contentGroup.x = this._depth * this._indentation)
			}, i.prototype.partRemoved = function(i, n) {
				e.prototype.partRemoved.call(this, i, n), n == this.iconDisplay ? this.iconDisplay.skinName = null : n == this.disclosureButton && (this.disclosureButton.removeEventListener(t.TouchEvent.TOUCH_BEGAN, this.disclosureButton_mouseDownHandler, this), this.disclosureButton._autoSelected = !0, this.disclosureButton.visible = !0)
			}, i.prototype.disclosureButton_mouseDownHandler = function(e) {
				e = new t.TreeEvent(t.TreeEvent.ITEM_OPENING, !1, !0, this.itemIndex, this.data, this), e.opening = !this._isOpen, this.dispatchEvent(e)
			}, i
		}(t.ItemRenderer);
	t.TreeItemRenderer = e
}(ns_egret || (ns_egret = {})), function(t) {
	var e = function() {
			function e(e, i) {
				this.easerFunction = t.Ease.sineInOut, this._duration = 500, this._startDelay = 0, this._repeatCount = 1, this._repeatDelay = 0, this.motionPaths = [], this._currentValue = {}, this.pauseTime = 0, this._isPaused = !1, this.startTime = 0, this._started = !1, this.playedTimes = 0, this.updateFunction = e, this.thisObject = i
			}
			return Object.defineProperty(e.prototype, "isPlaying", {
				get: function() {
					return this._isPlaying
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(e.prototype, "duration", {
				get: function() {
					return this._duration
				},
				set: function(t) {
					this._duration = t
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(e.prototype, "startDelay", {
				get: function() {
					return this._startDelay
				},
				set: function(t) {
					this._startDelay = t
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(e.prototype, "repeatCount", {
				get: function() {
					return this._repeatCount
				},
				set: function(t) {
					this._repeatCount = t
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(e.prototype, "repeatDelay", {
				get: function() {
					return this._repeatDelay
				},
				set: function(t) {
					this._repeatDelay = t
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(e.prototype, "currentValue", {
				get: function() {
					return this._currentValue
				},
				enumerable: !0,
				configurable: !0
			}), e.prototype.play = function() {
				this.stopAnimation(), this.start()
			}, e.prototype.seek = function(e) {
				e = Math.min(e, this.duration), this.caculateCurrentValue(e / this.duration), this.startTime = t.getTimer() - e - this._startDelay, null != this.updateFunction && this.updateFunction.call(this.thisObject, this)
			}, e.prototype.start = function() {
				this.playedTimes = 0, this._started = !0, this._isPlaying = !1, this._currentValue = {}, this.caculateCurrentValue(0), this.startTime = t.getTimer(), e.currentTime = this.startTime, this.doInterval(), e.addAnimation(this)
			}, e.prototype.end = function() {
				this._started || (this.caculateCurrentValue(0), null != this.startFunction && this.startFunction.call(this.thisObject, this), null != this.updateFunction && this.updateFunction.call(this.thisObject, this)), this.caculateCurrentValue(1), null != this.updateFunction && this.updateFunction.call(this.thisObject, this), this.stopAnimation(), null != this.endFunction && this.endFunction.call(this.thisObject, this)
			}, e.prototype.stop = function() {
				this.stopAnimation(), null != this.stopFunction && this.stopFunction.call(this.thisObject, this)
			}, e.prototype.stopAnimation = function() {
				this.playedTimes = 0, this._isPlaying = !1, this.startTime = 0, this._started = !1, e.removeAnimation(this)
			}, Object.defineProperty(e.prototype, "isPaused", {
				get: function() {
					return this._isPaused
				},
				enumerable: !0,
				configurable: !0
			}), e.prototype.pause = function() {
				this._started && (this._isPaused = !0, this.pauseTime = t.getTimer(), this._isPlaying = !1, e.removeAnimation(this))
			}, e.prototype.resume = function() {
				this._started && this._isPaused && (this._isPaused = !1, this.startTime += t.getTimer() - this.pauseTime, this.pauseTime = -1, e.addAnimation(this))
			}, Object.defineProperty(e.prototype, "started", {
				get: function() {
					return this._started
				},
				enumerable: !0,
				configurable: !0
			}), e.prototype.doInterval = function() {
				var t = e.currentTime - this.startTime - (0 < this.playedTimes ? this._repeatDelay : this._startDelay);
				if (0 > t) return !1;
				this._isPlaying || (this._isPlaying = !0, 0 == this.playedTimes && null != this.startFunction && this.startFunction.call(this.thisObject, this));
				var i = 0 == this._duration ? 1 : Math.min(t, this._duration) / this._duration;
				return this.caculateCurrentValue(i), null != this.updateFunction && this.updateFunction.call(this.thisObject, this), (t = t >= this._duration) && (this.playedTimes++, this._isPlaying = !1, this.startTime = e.currentTime, 0 == this._repeatCount || this.playedTimes < this._repeatCount ? t = !1 : (e.removeAnimation(this), this._started = !1, this.playedTimes = 0)), t && null != this.endFunction && this.endFunction.call(this.thisObject, this), t
			}, e.prototype.caculateCurrentValue = function(t) {
				this.easerFunction && (t = this.easerFunction(t));
				for (var e = this.motionPaths, i = e.length, n = 0; i > n; n++) {
					var o = e[n];
					this.currentValue[o.prop] = o.from + (o.to - o.from) * t
				}
			}, e.addAnimation = function(i) {
				-1 == e.activeAnimations.indexOf(i) && (e.activeAnimations.push(i), e.registered || (e.registered = !0, t.Ticker.getInstance().register(e.onEnterFrame, null)))
			}, e.removeAnimation = function(i) {
				i = e.activeAnimations.indexOf(i), -1 != i && (e.activeAnimations.splice(i, 1), i <= e.currentIntervalIndex && e.currentIntervalIndex--), 0 == e.activeAnimations.length && e.registered && (e.registered = !1, t.Ticker.getInstance().unregister(e.onEnterFrame, null))
			}, e.onEnterFrame = function() {
				for (e.currentTime = t.getTimer(), e.currentIntervalIndex = 0; e.currentIntervalIndex < e.activeAnimations.length;) e.activeAnimations[e.currentIntervalIndex].doInterval(), e.currentIntervalIndex++;
				e.currentIntervalIndex = -1, 0 == e.activeAnimations.length && e.registered && (e.registered = !1, t.Ticker.getInstance().unregister(e.onEnterFrame, null))
			}, e.currentTime = 0, e.TIMER_RESOLUTION = 1e3 / 60, e.activeAnimations = [], e.currentIntervalIndex = -1, e
		}();
	t.Animation = e
}(ns_egret || (ns_egret = {})), __extends = this.__extends ||
function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype, t.prototype = new i
}, function(t) {
	var e = function(t) {
			function e() {
				t.call(this), this._maximum = 100, this.maxChanged = !1, this._minimum = 0, this.minChanged = !1, this._stepSize = 1, this.stepSizeChanged = !1, this._changedValue = this._value = 0, this.valueChanged = !1, this._snapInterval = 1, this._explicitSnapInterval = this.snapIntervalChanged = !1
			}
			return __extends(e, t), Object.defineProperty(e.prototype, "maximum", {
				get: function() {
					return this._maximum
				},
				set: function(t) {
					this._setMaximun(t)
				},
				enumerable: !0,
				configurable: !0
			}), e.prototype._setMaximun = function(t) {
				t != this._maximum && (this._maximum = t, this.maxChanged = !0, this.invalidateProperties())
			}, Object.defineProperty(e.prototype, "minimum", {
				get: function() {
					return this._minimum
				},
				set: function(t) {
					this._setMinimun(t)
				},
				enumerable: !0,
				configurable: !0
			}), e.prototype._setMinimun = function(t) {
				t != this._minimum && (this._minimum = t, this.minChanged = !0, this.invalidateProperties())
			}, Object.defineProperty(e.prototype, "stepSize", {
				get: function() {
					return this._stepSize
				},
				set: function(t) {
					t != this._stepSize && (this._stepSize = t, this.stepSizeChanged = !0, this.invalidateProperties())
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(e.prototype, "value", {
				get: function() {
					return this._getValue()
				},
				set: function(t) {
					this._setValue(t)
				},
				enumerable: !0,
				configurable: !0
			}), e.prototype._setValue = function(t) {
				t != this.value && (this._changedValue = t, this.valueChanged = !0, this.invalidateProperties())
			}, e.prototype._getValue = function() {
				return this.valueChanged ? this._changedValue : this._value
			}, Object.defineProperty(e.prototype, "snapInterval", {
				get: function() {
					return this._snapInterval
				},
				set: function(t) {
					this._explicitSnapInterval = !0, t != this._snapInterval && (isNaN(t) ? (this._snapInterval = 1, this._explicitSnapInterval = !1) : this._snapInterval = t, this.stepSizeChanged = this.snapIntervalChanged = !0, this.invalidateProperties())
				},
				enumerable: !0,
				configurable: !0
			}), e.prototype.commitProperties = function() {
				if (t.prototype.commitProperties.call(this), this.minimum > this.maximum && (this.maxChanged ? this._maximum = this._minimum : this._minimum = this._maximum), this.valueChanged || this.maxChanged || this.minChanged || this.snapIntervalChanged) {
					var e = this.valueChanged ? this._changedValue : this._value;
					this.snapIntervalChanged = this.minChanged = this.maxChanged = this.valueChanged = !1, this.setValue(this.nearestValidValue(e, this.snapInterval))
				}
				this.stepSizeChanged && (this._explicitSnapInterval ? this._stepSize = this.nearestValidSize(this._stepSize) : (this._snapInterval = this._stepSize, this.setValue(this.nearestValidValue(this._value, this.snapInterval))), this.stepSizeChanged = !1)
			}, e.prototype.nearestValidSize = function(t) {
				var e = this.snapInterval;
				return 0 == e ? t : (t = Math.round(t / e) * e, Math.abs(t) < e ? e : t)
			}, e.prototype.nearestValidValue = function(t, e) {
				if (0 == e) return Math.max(this.minimum, Math.min(this.maximum, t));
				var i = this.maximum - this.minimum,
					n = 1;
				t -= this.minimum, e != Math.round(e) && (n = (1 + e).toString().split("."), n = Math.pow(10, n[1].length), i *= n, t = Math.round(t * n), e = Math.round(e * n));
				var o = Math.max(0, Math.floor(t / e) * e),
					i = Math.min(i, Math.floor((t + e) / e) * e);
				return (t - o >= (i - o) / 2 ? i : o) / n + this.minimum
			}, e.prototype.setValue = function(t) {
				this._value != t && (isNaN(t) && (t = 0), this._value = !isNaN(this.maximum) && !isNaN(this.minimum) && this.maximum > this.minimum ? Math.min(this.maximum, Math.max(this.minimum, t)) : t, this.valueChanged = !1)
			}, e.prototype.changeValueByStep = function(t) {
				"undefined" == typeof t && (t = !0), 0 != this.stepSize && this.setValue(this.nearestValidValue(t ? this.value + this.stepSize : this.value - this.stepSize, this.snapInterval))
			}, e
		}(t.SkinnableComponent);
	t.Range = e
}(ns_egret || (ns_egret = {})), __extends = this.__extends ||
function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype, t.prototype = new i
}, function(t) {
	var e = function(e) {
			function i() {
				e.call(this), this._slideDuration = 300, this.needUpdateValue = !1, this.addEventListener(t.Event.ADDED_TO_STAGE, this.addedToStageHandler, this), this.addEventListener(t.TouchEvent.TOUCH_BEGAN, this.mouseDownHandler, this)
			}
			return __extends(i, e), Object.defineProperty(i.prototype, "slideDuration", {
				get: function() {
					return this._slideDuration
				},
				set: function(t) {
					this._slideDuration = t
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "maximum", {
				get: function() {
					return this._maximum
				},
				set: function(t) {
					t != this._maximum && (this._setMaximun(t), this.invalidateDisplayList())
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "minimum", {
				get: function() {
					return this._minimum
				},
				set: function(t) {
					t != this._minimum && (this._setMinimun(t), this.invalidateDisplayList())
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "value", {
				get: function() {
					return this._getValue()
				},
				set: function(t) {
					t != this._getValue() && (this._setValue(t), this.invalidateDisplayList())
				},
				enumerable: !0,
				configurable: !0
			}), i.prototype.setValue = function(t) {
				e.prototype.setValue.call(this, t), this.invalidateDisplayList()
			}, i.prototype.pointToValue = function() {
				return this.minimum
			}, i.prototype.changeValueByStep = function(i) {
				"undefined" == typeof i && (i = !0);
				var n = this.value;
				e.prototype.changeValueByStep.call(this, i), this.value != n && this.dispatchEvent(new t.Event(t.Event.CHANGE))
			}, i.prototype.partAdded = function(i, n) {
				e.prototype.partAdded.call(this, i, n), n == this.thumb ? (this.thumb.addEventListener(t.TouchEvent.TOUCH_BEGAN, this.thumb_mouseDownHandler, this), this.thumb.addEventListener(t.ResizeEvent.RESIZE, this.thumb_resizeHandler, this), this.thumb.addEventListener(t.UIEvent.UPDATE_COMPLETE, this.thumb_updateCompleteHandler, this), this.thumb.stickyHighlighting = !0) : n == this.track && (this.track.addEventListener(t.TouchEvent.TOUCH_BEGAN, this.track_mouseDownHandler, this), this.track.addEventListener(t.ResizeEvent.RESIZE, this.track_resizeHandler, this))
			}, i.prototype.partRemoved = function(i, n) {
				e.prototype.partRemoved.call(this, i, n), n == this.thumb ? (this.thumb.removeEventListener(t.TouchEvent.TOUCH_BEGAN, this.thumb_mouseDownHandler, this), this.thumb.removeEventListener(t.ResizeEvent.RESIZE, this.thumb_resizeHandler, this), this.thumb.removeEventListener(t.UIEvent.UPDATE_COMPLETE, this.thumb_updateCompleteHandler, this)) : n == this.track && (this.track.removeEventListener(t.TouchEvent.TOUCH_BEGAN, this.track_mouseDownHandler, this), this.track.removeEventListener(t.ResizeEvent.RESIZE, this.track_resizeHandler, this))
			}, i.prototype.updateDisplayList = function(t, i) {
				e.prototype.updateDisplayList.call(this, t, i), this.updateSkinDisplayList()
			}, i.prototype.updateSkinDisplayList = function() {}, i.prototype.addedToStageHandler = function() {
				this.updateSkinDisplayList()
			}, i.prototype.track_resizeHandler = function() {
				this.updateSkinDisplayList()
			}, i.prototype.thumb_resizeHandler = function() {
				this.updateSkinDisplayList()
			}, i.prototype.thumb_updateCompleteHandler = function() {
				this.updateSkinDisplayList(), this.thumb.removeEventListener(t.UIEvent.UPDATE_COMPLETE, this.thumb_updateCompleteHandler, this)
			}, i.prototype.thumb_mouseDownHandler = function(e) {
				t.UIGlobals.stage.addEventListener(t.TouchEvent.TOUCH_MOVE, this.stage_mouseMoveHandler, this), t.UIGlobals.stage.addEventListener(t.TouchEvent.TOUCH_END, this.stage_mouseUpHandler, this), t.UIGlobals.stage.addEventListener(t.Event.LEAVE_STAGE, this.stage_mouseUpHandler, this), this.addEventListener(t.Event.ENTER_FRAME, this.onEnterFrame, this), e = this.thumb.globalToLocal(e.stageX, e.stageY), this._clickOffsetX = e.x, this._clickOffsetY = e.y, this.dispatchEvent(new t.TrackBaseEvent(t.TrackBaseEvent.THUMB_PRESS)), this.dispatchEvent(new t.UIEvent(t.UIEvent.CHANGE_START))
			}, i.prototype.onEnterFrame = function() {
				this.needUpdateValue && this.track && (this.updateWhenMouseMove(), this.needUpdateValue = !1)
			}, i.prototype.updateWhenMouseMove = function() {
				if (this.track) {
					var e = this.track.globalToLocal(this._moveStageX, this._moveStageY),
						e = this.pointToValue(e.x - this._clickOffsetX, e.y - this._clickOffsetY),
						e = this.nearestValidValue(e, this.snapInterval);
					e != this.value && (this.setValue(e), this.validateDisplayList(), this.dispatchEvent(new t.TrackBaseEvent(t.TrackBaseEvent.THUMB_DRAG)), this.dispatchEventWith(t.Event.CHANGE))
				}
			}, i.prototype.stage_mouseMoveHandler = function(t) {
				this._moveStageX = t.stageX, this._moveStageY = t.stageY, this.needUpdateValue || (this.needUpdateValue = !0)
			}, i.prototype.stage_mouseUpHandler = function() {
				t.UIGlobals.stage.removeEventListener(t.TouchEvent.TOUCH_MOVE, this.stage_mouseMoveHandler, this), t.UIGlobals.stage.removeEventListener(t.TouchEvent.TOUCH_END, this.stage_mouseUpHandler, this), t.UIGlobals.stage.addEventListener(t.Event.LEAVE_STAGE, this.stage_mouseUpHandler, this), this.removeEventListener(t.Event.ENTER_FRAME, this.updateWhenMouseMove, this), this.needUpdateValue && (this.updateWhenMouseMove(), this.needUpdateValue = !1), this.dispatchEvent(new t.TrackBaseEvent(t.TrackBaseEvent.THUMB_RELEASE)), this.dispatchEvent(new t.UIEvent(t.UIEvent.CHANGE_END))
			}, i.prototype.track_mouseDownHandler = function() {}, i.prototype.mouseDownHandler = function(e) {
				t.UIGlobals.stage.addEventListener(t.TouchEvent.TOUCH_END, this.system_mouseUpSomewhereHandler, this), t.UIGlobals.stage.addEventListener(t.Event.LEAVE_STAGE, this.system_mouseUpSomewhereHandler, this), this.mouseDownTarget = e.target
			}, i.prototype.system_mouseUpSomewhereHandler = function(e) {
				if (t.UIGlobals.stage.removeEventListener(t.TouchEvent.TOUCH_END, this.system_mouseUpSomewhereHandler, this), t.UIGlobals.stage.removeEventListener(t.Event.LEAVE_STAGE, this.system_mouseUpSomewhereHandler, this), this.mouseDownTarget != e.target && e instanceof t.TouchEvent && this.contains(e.target)) {
					var i = e.target.localToGlobal(e.localX, e.localY);
					e = new t.TouchEvent(t.TouchEvent.TOUCH_TAP, e.bubbles, e.cancelable, e.touchPointID, i.x, i.y, e.ctrlKey, e.altKey, e.shiftKey, e.touchDown), this.dispatchEvent(e)
				}
				this.mouseDownTarget = null
			}, i
		}(t.Range);
	t.TrackBase = e
}(ns_egret || (ns_egret = {})), __extends = this.__extends ||
function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype, t.prototype = new i
}, function(t) {
	var e = function(e) {
			function i() {
				e.call(this), this._showTrackHighlight = !0, this._pendingValue = 0, this._liveDragging = !0, this.maximum = 10
			}
			return __extends(i, e), Object.defineProperty(i.prototype, "showTrackHighlight", {
				get: function() {
					return this._showTrackHighlight
				},
				set: function(t) {
					this._showTrackHighlight != t && (this._showTrackHighlight = t, this.trackHighlight && (this.trackHighlight.visible = t), this.invalidateDisplayList())
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "pendingValue", {
				get: function() {
					return this._pendingValue
				},
				set: function(t) {
					t != this._pendingValue && (this._pendingValue = t, this.invalidateDisplayList())
				},
				enumerable: !0,
				configurable: !0
			}), i.prototype.setValue = function(t) {
				this._pendingValue = t, e.prototype.setValue.call(this, t)
			}, i.prototype.animationUpdateHandler = function(t) {
				this.pendingValue = t.currentValue.value
			}, i.prototype.animationEndHandler = function() {
				this.setValue(this.slideToValue), this.dispatchEvent(new t.Event(t.Event.CHANGE)), this.dispatchEvent(new t.UIEvent(t.UIEvent.CHANGE_END))
			}, i.prototype.stopAnimation = function() {
				this.animator.stop(), this.setValue(this.nearestValidValue(this.pendingValue, this.snapInterval)), this.dispatchEvent(new t.Event(t.Event.CHANGE)), this.dispatchEvent(new t.UIEvent(t.UIEvent.CHANGE_END))
			}, i.prototype.thumb_mouseDownHandler = function(t) {
				this.animator && this.animator.isPlaying && this.stopAnimation(), e.prototype.thumb_mouseDownHandler.call(this, t)
			}, Object.defineProperty(i.prototype, "liveDragging", {
				get: function() {
					return this._liveDragging
				},
				set: function(t) {
					this._liveDragging = t
				},
				enumerable: !0,
				configurable: !0
			}), i.prototype.updateWhenMouseMove = function() {
				if (this.track) {
					var e = this.track.globalToLocal(this._moveStageX, this._moveStageY),
						e = this.pointToValue(e.x - this._clickOffsetX, e.y - this._clickOffsetY),
						e = this.nearestValidValue(e, this.snapInterval);
					e != this.pendingValue && (this.dispatchEvent(new t.TrackBaseEvent(t.TrackBaseEvent.THUMB_DRAG)), 1 == this.liveDragging ? (this.setValue(e), this.dispatchEvent(new t.Event(t.Event.CHANGE))) : this.pendingValue = e)
				}
			}, i.prototype.stage_mouseUpHandler = function(i) {
				e.prototype.stage_mouseUpHandler.call(this, i), 0 == this.liveDragging && this.value != this.pendingValue && (this.setValue(this.pendingValue), this.dispatchEvent(new t.Event(t.Event.CHANGE)))
			}, i.prototype.track_mouseDownHandler = function(e) {
				this.enabled && (e = this.track.globalToLocal(e.stageX - (this.thumb ? this.thumb.width : 0) / 2, e.stageY - (this.thumb ? this.thumb.height : 0) / 2), e = this.pointToValue(e.x, e.y), e = this.nearestValidValue(e, this.snapInterval), e != this.pendingValue && (0 != this.slideDuration ? (this.animator || (this.animator = new t.Animation(this.animationUpdateHandler, this), this.animator.endFunction = this.animationEndHandler), this.animator.isPlaying && this.stopAnimation(), this.slideToValue = e, this.animator.duration = this.slideDuration * (Math.abs(this.pendingValue - this.slideToValue) / (this.maximum - this.minimum)), this.animator.motionPaths = [{
					prop: "value",
					from: this.pendingValue,
					to: this.slideToValue
				}], this.dispatchEvent(new t.UIEvent(t.UIEvent.CHANGE_START)), this.animator.play()) : (this.setValue(e), this.dispatchEvent(new t.Event(t.Event.CHANGE)))))
			}, i.prototype.partAdded = function(i, n) {
				e.prototype.partAdded.call(this, i, n), n == this.trackHighlight && (this.trackHighlight.touchEnabled = !1, this.trackHighlight instanceof t.DisplayObjectContainer && (this.trackHighlight.touchChildren = !1), this.trackHighlight.visible = this._showTrackHighlight)
			}, i
		}(t.TrackBase);
	t.SliderBase = e
}(ns_egret || (ns_egret = {})), __extends = this.__extends ||
function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype, t.prototype = new i
}, function(t) {
	var e = function(e) {
			function i() {
				e.call(this), this._maxDisplayedLines = 0, this.lastUnscaledWidth = 0 / 0, this._padding = 0, this._paddingBottom = this._paddingTop = this._paddingRight = this._paddingLeft = 0 / 0, this.addEventListener(t.UIEvent.UPDATE_COMPLETE, this.updateCompleteHandler, this)
			}
			return __extends(i, e), i.prototype.updateCompleteHandler = function() {
				this.lastUnscaledWidth = 0 / 0
			}, Object.defineProperty(i.prototype, "maxDisplayedLines", {
				get: function() {
					return this._maxDisplayedLines
				},
				set: function(t) {
					this._maxDisplayedLines != t && (this._maxDisplayedLines = t, this.invalidateSize(), this.invalidateDisplayList())
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "padding", {
				get: function() {
					return this._padding
				},
				set: function(t) {
					this._padding != t && (this._padding = t, this.invalidateSize(), this.invalidateDisplayList())
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "paddingLeft", {
				get: function() {
					return this._paddingLeft
				},
				set: function(t) {
					this._paddingLeft != t && (this._paddingLeft = t, this.invalidateSize(), this.invalidateDisplayList())
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "paddingRight", {
				get: function() {
					return this._paddingRight
				},
				set: function(t) {
					this._paddingRight != t && (this._paddingRight = t, this.invalidateSize(), this.invalidateDisplayList())
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "paddingTop", {
				get: function() {
					return this._paddingTop
				},
				set: function(t) {
					this._paddingTop != t && (this._paddingTop = t, this.invalidateSize(), this.invalidateDisplayList())
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "paddingBottom", {
				get: function() {
					return this._paddingBottom
				},
				set: function(t) {
					this._paddingBottom != t && (this._paddingBottom = t, this.invalidateSize(), this.invalidateDisplayList())
				},
				enumerable: !0,
				configurable: !0
			}), i.prototype.measure = function() {
				if (this.invalidatePropertiesFlag && this.validateProperties(), this.isSpecialCase()) {
					if (!isNaN(this.lastUnscaledWidth)) return void this.measureUsingWidth(this.lastUnscaledWidth);
					this.oldPreferHeight = this.oldPreferWidth = 0 / 0
				}
				var t;
				isNaN(this.explicitWidth) ? 1e4 != this.maxWidth && (t = this.maxWidth) : t = this.explicitWidth, this.measureUsingWidth(t)
			}, i.prototype.isSpecialCase = function() {
				return 1 != this._maxDisplayedLines && (!isNaN(this.percentWidth) || !isNaN(this.left) && !isNaN(this.right)) && isNaN(this.explicitHeight) && isNaN(this.percentHeight)
			}, i.prototype.measureUsingWidth = function(t) {
				var e = this._textField.text;
				this.textChanged && (this._textField.text = this._text);
				var i = isNaN(this._padding) ? 0 : this._padding,
					n = isNaN(this._paddingLeft) ? i : this._paddingLeft,
					o = isNaN(this._paddingRight) ? i : this._paddingRight,
					s = isNaN(this._paddingTop) ? i : this._paddingTop,
					i = isNaN(this._paddingBottom) ? i : this._paddingBottom;
				this._textField.width = 0 / 0, this._textField.height = 0 / 0, isNaN(t) || (this._textField.width = t - n - o), this.measuredWidth = Math.ceil(this._textField.measuredWidth), this.measuredHeight = Math.ceil(this._textField.measuredHeight), 0 < this._maxDisplayedLines && this._textField.numLines > this._maxDisplayedLines && (t = this._textField.lineSpacing, this.measuredHeight = (this._textField.size + t) * this._maxDisplayedLines - t), this.measuredWidth += n + o, this.measuredHeight += s + i, this._textField.text = e
			}, i.prototype.updateDisplayList = function(t, e) {
				this.$updateDisplayList(t, e);
				var i = isNaN(this._padding) ? 0 : this._padding,
					n = isNaN(this._paddingLeft) ? i : this._paddingLeft,
					o = isNaN(this._paddingRight) ? i : this._paddingRight,
					s = isNaN(this._paddingTop) ? i : this._paddingTop,
					i = isNaN(this._paddingBottom) ? i : this._paddingBottom;
				if (this._textField.x = n, this._textField.y = s, this.isSpecialCase()) {
					var r = isNaN(this.lastUnscaledWidth) || this.lastUnscaledWidth != t;
					if (this.lastUnscaledWidth = t, r) return this.oldPreferHeight = this.oldPreferWidth = 0 / 0, void this.invalidateSize()
				}
				this.invalidateSizeFlag && this.validateSize(), this._textField.visible || (this._textField.visible = !0), this._textField.width = t - n - o, n = e - s - i, this._textField.height = n, 0 < this._maxDisplayedLines && this._textField.numLines > this._maxDisplayedLines && (o = this._textField.lineSpacing, this._textField.height = Math.min(n, (this._textField.size + o) * this._maxDisplayedLines - o))
			}, i
		}(t.TextBase);
	t.Label = e
}(ns_egret || (ns_egret = {})), __extends = this.__extends ||
function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype, t.prototype = new i
}, function(t) {
	var e = function(e) {
			function i() {
				e.call(this), this._fillColor = 16777215, this._fillAlpha = 1, this._strokeColor = 4473924, this._strokeAlpha = 0, this._strokeWeight = 1, this.touchChildren = !1
			}
			return __extends(i, e), i.prototype.createChildren = function() {
				e.prototype.createChildren.call(this), this.shapeRect = new t.Shape, this.addChild(this.shapeRect)
			}, Object.defineProperty(i.prototype, "fillColor", {
				get: function() {
					return this._fillColor
				},
				set: function(t) {
					this._fillColor != t && (this._fillColor = t, this.invalidateDisplayList())
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "fillAlpha", {
				get: function() {
					return this._fillAlpha
				},
				set: function(t) {
					this._fillAlpha != t && (this._fillAlpha = t, this.invalidateDisplayList())
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "strokeColor", {
				get: function() {
					return this._strokeColor
				},
				set: function(t) {
					this._strokeColor != t && (this._strokeColor = t, this.invalidateDisplayList())
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "strokeAlpha", {
				get: function() {
					return this._strokeAlpha
				},
				set: function(t) {
					this._strokeAlpha != t && (this._strokeAlpha = t, this.invalidateDisplayList())
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "strokeWeight", {
				get: function() {
					return this._strokeWeight
				},
				set: function(t) {
					this._strokeWeight != t && (this._strokeWeight = t, this.invalidateDisplayList())
				},
				enumerable: !0,
				configurable: !0
			}), i.prototype.updateDisplayList = function(t, i) {
				e.prototype.updateDisplayList.call(this, t, t);
				var n = this.shapeRect.graphics;
				n.clear(), n.beginFill(this._fillColor, this._fillAlpha), 0 < this._strokeAlpha && n.lineStyle(this._strokeWeight, this._strokeColor, this._strokeAlpha, !0, "normal", "square", "miter"), n.drawRect(0, 0, t, i), n.endFill()
			}, i
		}(t.UIComponent);
	t.Rect = e
}(ns_egret || (ns_egret = {})), __extends = this.__extends ||
function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype, t.prototype = new i
}, function(t) {
	var e = function(t) {
			function e() {
				t.call(this)
			}
			return __extends(e, t), e
		}(t.ButtonBase);
	t.Button = e
}(ns_egret || (ns_egret = {})), __extends = this.__extends ||
function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype, t.prototype = new i
}, function(t) {
	var e = function(t) {
			function e() {
				t.call(this)
			}
			return __extends(e, t), e
		}(t.ToggleButtonBase);
	t.ToggleButton = e
}(ns_egret || (ns_egret = {})), __extends = this.__extends ||
function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype, t.prototype = new i
}, function(t) {
	var e = function(t) {
			function e() {
				t.call(this)
			}
			return __extends(e, t), e
		}(t.ToggleButtonBase);
	t.CheckBox = e
}(ns_egret || (ns_egret = {})), __extends = this.__extends ||
function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype, t.prototype = new i
}, function(t) {
	var e = function(e) {
			function i() {
				e.call(this), this.radioButtons = [], this._enabled = !0, this.name = "radioButtonGroup" + i.groupCount, i.groupCount++
			}
			return __extends(i, e), Object.defineProperty(i.prototype, "enabled", {
				get: function() {
					return this._enabled
				},
				set: function(t) {
					if (this._enabled != t) for (this._enabled = t, t = 0; t < this.numRadioButtons; t++) this.getRadioButtonAt(t).invalidateSkinState()
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "numRadioButtons", {
				get: function() {
					return this.radioButtons.length
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "selectedValue", {
				get: function() {
					return this.selection ? null != this.selection.value ? this.selection.value : this.selection.label : null
				},
				set: function(e) {
					if (this._selectedValue = e, null == e) this.setSelection(null, !1);
					else for (var i = this.numRadioButtons, n = 0; i > n; n++) {
						var o = this.getRadioButtonAt(n);
						if (o.value == e || o.label == e) {
							this.changeSelection(n, !1), this._selectedValue = null, this.dispatchEvent(new t.UIEvent(t.UIEvent.VALUE_COMMIT));
							break
						}
					}
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "selection", {
				get: function() {
					return this._selection
				},
				set: function(t) {
					this._selection != t && this.setSelection(t, !1)
				},
				enumerable: !0,
				configurable: !0
			}), i.prototype.getRadioButtonAt = function(t) {
				return t >= 0 && t < this.numRadioButtons ? this.radioButtons[t] : null
			}, i.prototype.addInstance = function(e) {
				e.addEventListener(t.Event.REMOVED, this.radioButton_removedHandler, this), this.radioButtons.push(e), this.radioButtons.sort(this.breadthOrderCompare);
				for (var i = 0; i < this.radioButtons.length; i++) this.radioButtons[i].indexNumber = i;
				this._selectedValue && (this.selectedValue = this._selectedValue), 1 == e.selected && (this.selection = e), e.radioButtonGroup = this, e.invalidateSkinState(), this.dispatchEvent(new t.Event("numRadioButtonsChanged"))
			}, i.prototype.removeInstance = function(t) {
				this.doRemoveInstance(t, !1)
			}, i.prototype.doRemoveInstance = function(e, i) {
				if ("undefined" == typeof i && (i = !0), e) {
					for (var n = !1, o = 0; o < this.numRadioButtons; o++) {
						var s = this.getRadioButtonAt(o);
						n ? s.indexNumber -= 1 : s == e && (i && e.addEventListener(t.Event.ADDED, this.radioButton_addedHandler, this), e == this._selection && (this._selection = null), e.radioButtonGroup = null, e.invalidateSkinState(), this.radioButtons.splice(o, 1), n = !0, o--)
					}
					n && this.dispatchEvent(new t.Event("numRadioButtonsChanged"))
				}
			}, i.prototype.setSelection = function(e, i) {
				if ("undefined" == typeof i && (i = !0), this._selection != e) {
					if (e) {
						for (var n = this.numRadioButtons, o = 0; n > o; o++) if (e == this.getRadioButtonAt(o)) {
							this.changeSelection(o, i);
							break
						}
					} else this.selection && (this._selection.selected = !1, this._selection = null, i && this.dispatchEvent(new t.Event(t.Event.CHANGE)));
					this.dispatchEvent(new t.UIEvent(t.UIEvent.VALUE_COMMIT))
				}
			}, i.prototype.changeSelection = function(e, i) {
				"undefined" == typeof i && (i = !0);
				var n = this.getRadioButtonAt(e);
				n && n != this._selection && (this._selection && (this._selection.selected = !1), this._selection = n, this._selection.selected = !0, i && this.dispatchEvent(new t.Event(t.Event.CHANGE)))
			}, i.prototype.breadthOrderCompare = function(e, i) {
				var n = e.parent,
					o = i.parent;
				if (!n || !o) return 0;
				var s = e instanceof t.UIComponent ? e.nestLevel : -1,
					r = i instanceof t.UIComponent ? i.nestLevel : -1,
					a = 0,
					h = 0;
				return n == o && (a = "getElementIndex" in n && "ownerChanged" in e ? n.getElementIndex(e) : n.getChildIndex(e), h = "getElementIndex" in o && "ownerChanged" in i ? o.getElementIndex(i) : o.getChildIndex(i)), s > r || a > h ? 1 : r > s || h > a ? -1 : e == i ? 0 : this.breadthOrderCompare(n, o)
			}, i.prototype.radioButton_addedHandler = function(e) {
				(e = e.target) && (e.removeEventListener(t.Event.ADDED, this.radioButton_addedHandler, this), this.addInstance(e))
			}, i.prototype.radioButton_removedHandler = function(e) {
				(e = e.target) && (e.removeEventListener(t.Event.REMOVED, this.radioButton_removedHandler, this), this.doRemoveInstance(e))
			}, i.groupCount = 0, i
		}(t.EventDispatcher);
	t.RadioButtonGroup = e
}(ns_egret || (ns_egret = {})), __extends = this.__extends ||
function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype, t.prototype = new i
}, function(t) {
	var e = function(e) {
			function i() {
				e.call(this), this.indexNumber = 0, this.radioButtonGroup = null, this.groupChanged = !1, this.groupName = this._groupName = "radioGroup"
			}
			return __extends(i, e), Object.defineProperty(i.prototype, "enabled", {
				get: function() {
					return this._enabled ? !this.radioButtonGroup || this.radioButtonGroup.enabled : !1
				},
				set: function(t) {
					this._setEnabled(t)
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "group", {
				get: function() {
					if (!this._group && this._groupName) {
						i.automaticRadioButtonGroups || (i.automaticRadioButtonGroups = {});
						var e = i.automaticRadioButtonGroups[this._groupName];
						e || (e = new t.RadioButtonGroup, e.name = this._groupName, i.automaticRadioButtonGroups[this._groupName] = e), this._group = e
					}
					return this._group
				},
				set: function(t) {
					this._group != t && (this.radioButtonGroup && this.radioButtonGroup.removeInstance(this), this._groupName = (this._group = t) ? this.group.name : "radioGroup", this.groupChanged = !0, this.invalidateProperties(), this.invalidateDisplayList())
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "groupName", {
				get: function() {
					return this._groupName
				},
				set: function(t) {
					t && "" != t && (this._groupName = t, this.radioButtonGroup && this.radioButtonGroup.removeInstance(this), this._group = null, this.groupChanged = !0, this.invalidateProperties(), this.invalidateDisplayList())
				},
				enumerable: !0,
				configurable: !0
			}), i.prototype._setSelected = function(t) {
				e.prototype._setSelected.call(this, t), this.invalidateDisplayList()
			}, Object.defineProperty(i.prototype, "value", {
				get: function() {
					return this._value
				},
				set: function(e) {
					this._value != e && (this._value = e, this.selected && this.group && this.group.dispatchEvent(new t.UIEvent(t.UIEvent.VALUE_COMMIT)))
				},
				enumerable: !0,
				configurable: !0
			}), i.prototype.commitProperties = function() {
				this.groupChanged && (this.addToGroup(), this.groupChanged = !1), e.prototype.commitProperties.call(this)
			}, i.prototype.updateDisplayList = function(t, i) {
				e.prototype.updateDisplayList.call(this, t, i), this.group && (this.selected ? this._group.selection = this : this.group.selection == this && (this._group.selection = null))
			}, i.prototype.buttonReleased = function() {
				this.enabled && !this.selected && (this.radioButtonGroup || this.addToGroup(), e.prototype.buttonReleased.call(this), this.group.setSelection(this))
			}, i.prototype.addToGroup = function() {
				var t = this.group;
				return t && t.addInstance(this), t
			}, i
		}(t.ToggleButtonBase);
	t.RadioButton = e
}(ns_egret || (ns_egret = {})), __extends = this.__extends ||
function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype, t.prototype = new i
}, function(t) {
	var e = function(e) {
			function i() {
				e.call(this), this.elementsContentChanged = this.createChildrenCalled = !1, this._elementsContent = []
			}
			return __extends(i, e), i.prototype.createChildren = function() {
				e.prototype.createChildren.call(this), this.createChildrenCalled = !0, this.elementsContentChanged && (this.elementsContentChanged = !1, this.setElementsContent(this._elementsContent))
			}, i.prototype.getElementsContent = function() {
				return this._elementsContent
			}, Object.defineProperty(i.prototype, "elementsContent", {
				set: function(t) {
					if (null == t && (t = []), t != this._elementsContent) if (this.createChildrenCalled) this.setElementsContent(t);
					else {
						this.elementsContentChanged = !0;
						for (var e = this._elementsContent.length - 1; e >= 0; e--) this.elementRemoved(this._elementsContent[e], e);
						this._elementsContent = t
					}
				},
				enumerable: !0,
				configurable: !0
			}), i.prototype.setElementsContent = function(t) {
				var e;
				for (e = this._elementsContent.length - 1; e >= 0; e--) this.elementRemoved(this._elementsContent[e], e);
				for (this._elementsContent = t.concat(), t = this._elementsContent.length, e = 0; t > e; e++) {
					var i = this._elementsContent[e];
					i.parent && "removeElement" in i.parent ? i.parent.removeElement(i) : i.owner && "removeElement" in i.owner && i.owner.removeElement(i), this.elementAdded(i, e)
				}
			}, Object.defineProperty(i.prototype, "numElements", {
				get: function() {
					return this._elementsContent.length
				},
				enumerable: !0,
				configurable: !0
			}), i.prototype.getElementAt = function(t) {
				return this.checkForRangeError(t), this._elementsContent[t]
			}, i.prototype.checkForRangeError = function(t, e) {
				"undefined" == typeof e && (e = !1);
				var i = this._elementsContent.length - 1;
				if (e && i++, 0 > t || t > i) throw new RangeError('??????:"' + t + '"??????????????????????????????')
			}, i.prototype.addElement = function(t) {
				var e = this.numElements;
				return t.parent == this && (e = this.numElements - 1), this.addElementAt(t, e)
			}, i.prototype.addElementAt = function(t, e) {
				if (t == this) return t;
				this.checkForRangeError(e, !0);
				var i = t.parent;
				return i == this ? (this.setElementIndex(t, e), t) : (i && "removeElement" in i ? i.removeElement(t) : t.owner && "removeElement" in t.owner && t.owner.removeElement(t), this._elementsContent.splice(e, 0, t), this.elementsContentChanged || this.elementAdded(t, e), t)
			}, i.prototype.removeElement = function(t) {
				return this.removeElementAt(this.getElementIndex(t))
			}, i.prototype.removeElementAt = function(t) {
				this.checkForRangeError(t);
				var e = this._elementsContent[t];
				return this.elementsContentChanged || this.elementRemoved(e, t), this._elementsContent.splice(t, 1), e
			}, i.prototype.removeAllElements = function() {
				for (var t = this.numElements - 1; t >= 0; t--) this.removeElementAt(t)
			}, i.prototype.getElementIndex = function(t) {
				return this._elementsContent.indexOf(t)
			}, i.prototype.setElementIndex = function(t, e) {
				this.checkForRangeError(e);
				var i = this.getElementIndex(t); - 1 == i || i == e || (this.elementsContentChanged || this.elementRemoved(t, i, !1), this._elementsContent.splice(i, 1), this._elementsContent.splice(e, 0, t), this.elementsContentChanged || this.elementAdded(t, e, !1))
			}, i.prototype.swapElements = function(t, e) {
				this.swapElementsAt(this.getElementIndex(t), this.getElementIndex(e))
			}, i.prototype.swapElementsAt = function(t, e) {
				if (this.checkForRangeError(t), this.checkForRangeError(e), t > e) {
					var i = e;
					e = t, t = i
				} else if (t == e) return;
				var i = this._elementsContent[t],
					n = this._elementsContent[e];
				this.elementsContentChanged || (this.elementRemoved(i, t, !1), this.elementRemoved(n, e, !1)), this._elementsContent.splice(e, 1), this._elementsContent.splice(t, 1), this._elementsContent.splice(t, 0, n), this._elementsContent.splice(e, 0, i), this.elementsContentChanged || (this.elementAdded(n, t, !1), this.elementAdded(i, e, !1))
			}, i.prototype.elementAdded = function(e, i, n) {
				"undefined" == typeof n && (n = !0), e instanceof t.DisplayObject && this._addToDisplayList(e, i), n && this.hasEventListener(t.ElementExistenceEvent.ELEMENT_ADD) && this.dispatchEvent(new t.ElementExistenceEvent(t.ElementExistenceEvent.ELEMENT_ADD, !1, !1, e, i)), this.invalidateSize(), this.invalidateDisplayList()
			}, i.prototype.elementRemoved = function(i, n, o) {
				"undefined" == typeof o && (o = !0), o && this.hasEventListener(t.ElementExistenceEvent.ELEMENT_REMOVE) && this.dispatchEvent(new t.ElementExistenceEvent(t.ElementExistenceEvent.ELEMENT_REMOVE, !1, !1, i, n)), i && i.parent == this && e.prototype.removeChild.call(this, i), this.invalidateSize(), this.invalidateDisplayList()
			}, i.prototype._addToDisplayList = function(t, i) {
				"undefined" == typeof i && (i = -1), t.parent == this ? e.prototype.setChildIndex.call(this, t, -1 != i ? i : this.numChildren - 1) : e.prototype.addChildAt.call(this, t, -1 != i ? i : this.numChildren)
			}, i.prototype.addChild = function() {
				throw Error("addChild()" + i.errorStr + "addElement()??????")
			}, i.prototype.addChildAt = function() {
				throw Error("addChildAt()" + i.errorStr + "addElementAt()??????")
			}, i.prototype.removeChild = function() {
				throw Error("removeChild()" + i.errorStr + "removeElement()??????")
			}, i.prototype.removeChildAt = function() {
				throw Error("removeChildAt()" + i.errorStr + "removeElementAt()??????")
			}, i.prototype.setChildIndex = function() {
				throw Error("setChildIndex()" + i.errorStr + "setElementIndex()??????")
			}, i.prototype.swapChildren = function() {
				throw Error("swapChildren()" + i.errorStr + "swapElements()??????")
			}, i.prototype.swapChildrenAt = function() {
				throw Error("swapChildrenAt()" + i.errorStr + "swapElementsAt()??????")
			}, i.errorStr = "???????????????????????????????????????????????????????????????", i
		}(t.GroupBase);
	t.Group = e
}(ns_egret || (ns_egret = {})), __extends = this.__extends ||
function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype, t.prototype = new i
}, function(t) {
	var e = function(e) {
			function i() {
				e.call(this), this._createAllChildren = !1, this.proposedSelectedIndex = i.NO_PROPOSED_SELECTION, this._selectedIndex = -1, this.childOrderingChanged = this.notifyTabBar = !1, this._setLayout(new t.BasicLayout)
			}
			return __extends(i, e), Object.defineProperty(i.prototype, "layout", {
				get: function() {
					return this._layout
				},
				set: function() {},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "createAllChildren", {
				get: function() {
					return this._createAllChildren
				},
				set: function(e) {
					if (this._createAllChildren != e && (this._createAllChildren = e)) {
						e = this.getElementsContent();
						for (var i = e.length, n = 0; i > n; n++) {
							var o = e[n];
							o instanceof t.DisplayObject && o.parent != this && (this.childOrderingChanged = !0, this._addToDisplayList(o))
						}
						this.childOrderingChanged && this.invalidateProperties()
					}
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "selectedChild", {
				get: function() {
					var t = this.selectedIndex;
					return t >= 0 && t < this.numElements ? this.getElementAt(t) : null
				},
				set: function(t) {
					t = this.getElementIndex(t), t >= 0 && t < this.numElements && this.setSelectedIndex(t)
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "selectedIndex", {
				get: function() {
					return this.proposedSelectedIndex != i.NO_PROPOSED_SELECTION ? this.proposedSelectedIndex : this._selectedIndex
				},
				set: function(t) {
					this.setSelectedIndex(t)
				},
				enumerable: !0,
				configurable: !0
			}), i.prototype.setSelectedIndex = function(e, i) {
				"undefined" == typeof i && (i = !0), e != this.selectedIndex && (this.proposedSelectedIndex = e, this.invalidateProperties(), this.dispatchEvent(new t.UIEvent(t.UIEvent.VALUE_COMMIT)), this.notifyTabBar = this.notifyTabBar || i)
			}, i.prototype.elementAdded = function(e, i, n) {
				"undefined" == typeof n && (n = !0), this._createAllChildren && e instanceof t.DisplayObject && this._addToDisplayList(e, i), n && this.hasEventListener(t.ElementExistenceEvent.ELEMENT_ADD) && this.dispatchEvent(new t.ElementExistenceEvent(t.ElementExistenceEvent.ELEMENT_ADD, !1, !1, e, i)), e.visible = !1, e.includeInLayout = !1, -1 == this.selectedIndex ? this.setSelectedIndex(i, !1) : i <= this.selectedIndex && this.initialized && this.setSelectedIndex(this.selectedIndex + 1), this.dispatchCoEvent(t.CollectionEventKind.ADD, i, -1, [e.name])
			}, i.prototype.elementRemoved = function(i, n, o) {
				"undefined" == typeof o && (o = !0), e.prototype.elementRemoved.call(this, i, n, o), i.visible = !0, i.includeInLayout = !0, n == this.selectedIndex ? 0 < this.numElements ? 0 == n ? (this.proposedSelectedIndex = 0, this.invalidateProperties()) : this.setSelectedIndex(0, !1) : this.setSelectedIndex(-1) : n < this.selectedIndex && this.setSelectedIndex(this.selectedIndex - 1), this.dispatchCoEvent(t.CollectionEventKind.REMOVE, n, -1, [i.name])
			}, i.prototype.commitProperties = function() {
				if (e.prototype.commitProperties.call(this), this.proposedSelectedIndex != i.NO_PROPOSED_SELECTION && (this.commitSelection(this.proposedSelectedIndex), this.proposedSelectedIndex = i.NO_PROPOSED_SELECTION), this.childOrderingChanged) {
					this.childOrderingChanged = !1;
					for (var n = this.getElementsContent(), o = n.length, s = 0; o > s; s++) {
						var r = n[s];
						r instanceof t.DisplayObject && r.parent == this && this._addToDisplayList(r)
					}
				}
				this.notifyTabBar && (this.notifyTabBar = !0, this.dispatchEvent(new t.Event("IndexChanged")))
			}, i.prototype.commitSelection = function(e) {
				e >= 0 && e < this.numElements ? (this._selectedIndex = e, this._selectedChild && this._selectedChild.parent == this && (this._selectedChild.visible = !1, this._selectedChild.includeInLayout = !1), this._selectedChild = this.getElementAt(this._selectedIndex), this._selectedChild.visible = !0, this._selectedChild.includeInLayout = !0, this._selectedChild.parent != this && this._selectedChild instanceof t.DisplayObject && (this._addToDisplayList(this._selectedChild), this.childOrderingChanged || (this.childOrderingChanged = !0))) : (this._selectedChild = null, this._selectedIndex = -1), this.invalidateSize(), this.invalidateDisplayList()
			}, Object.defineProperty(i.prototype, "length", {
				get: function() {
					return this.numElements
				},
				enumerable: !0,
				configurable: !0
			}), i.prototype.getItemAt = function(t) {
				return (t = this.getElementAt(t)) ? t.name : ""
			}, i.prototype.getItemIndex = function(t) {
				for (var e = this.getElementsContent(), i = e.length, n = 0; i > n; n++) if (e[n].name === t) return n;
				return -1
			}, i.prototype.dispatchCoEvent = function(e, i, n, o, s) {
				"undefined" == typeof e && (e = null), "undefined" == typeof i && (i = -1), "undefined" == typeof n && (n = -1), "undefined" == typeof o && (o = null), "undefined" == typeof s && (s = null), e = new t.CollectionEvent(t.CollectionEvent.COLLECTION_CHANGE, !1, !1, e, i, n, o, s), this.dispatchEvent(e)
			}, i.NO_PROPOSED_SELECTION = -2, i
		}(t.Group);
	t.ViewStack = e
}(ns_egret || (ns_egret = {})), __extends = this.__extends ||
function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype, t.prototype = new i
}, function(t) {
	var e = function(e) {
			function i() {
				e.call(this), this.stateClientHelper = new t.StateClientHelper(this)
			}
			return __extends(i, e), Object.defineProperty(i.prototype, "hostComponent", {
				get: function() {
					return this._hostComponent
				},
				set: function(t) {
					this._hostComponent = t
				},
				enumerable: !0,
				configurable: !0
			}), i.prototype.createChildren = function() {
				e.prototype.createChildren.call(this), this.stateClientHelper.initializeStates()
			}, i.prototype.commitProperties = function() {
				e.prototype.commitProperties.call(this), this.stateClientHelper.currentStateChanged && (this.stateClientHelper.commitCurrentState(), this.commitCurrentState())
			}, Object.defineProperty(i.prototype, "states", {
				get: function() {
					return this.stateClientHelper.states
				},
				set: function(t) {
					this.stateClientHelper.states = t
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "currentState", {
				get: function() {
					return this.stateClientHelper.currentState
				},
				set: function(t) {
					this.stateClientHelper.currentState = t, this.stateClientHelper.currentStateChanged && (this.initialized || this.parent ? (this.stateClientHelper.commitCurrentState(), this.commitCurrentState()) : this.invalidateProperties())
				},
				enumerable: !0,
				configurable: !0
			}), i.prototype.hasState = function(t) {
				return this.stateClientHelper.hasState(t)
			}, i.prototype.commitCurrentState = function() {}, i
		}(t.Group);
	t.Skin = e
}(ns_egret || (ns_egret = {})), __extends = this.__extends ||
function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype, t.prototype = new i
}, function(t) {
	var e = function(e) {
			function i() {
				e.call(this), this.maxWidth = 1e4, this.minWidth = 0, this.maxHeight = 1e4, this.minHeight = 0, this.height = this.width = 0 / 0, this.y = this.x = 0, this.percentHeight = this.percentWidth = 0 / 0, this._elementsContent = [], this.stateClientHelper = new t.StateClientHelper(this)
			}
			return __extends(i, e), Object.defineProperty(i.prototype, "states", {
				get: function() {
					return this.stateClientHelper.states
				},
				set: function(t) {
					this.stateClientHelper.states = t
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "currentState", {
				get: function() {
					return this.stateClientHelper.currentState
				},
				set: function(t) {
					this.stateClientHelper.currentState = t, this._hostComponent && this.stateClientHelper.currentStateChanged && (this.stateClientHelper.commitCurrentState(), this.commitCurrentState())
				},
				enumerable: !0,
				configurable: !0
			}), i.prototype.hasState = function(t) {
				return this.stateClientHelper.hasState(t)
			}, i.prototype.commitCurrentState = function() {}, Object.defineProperty(i.prototype, "hostComponent", {
				get: function() {
					return this._hostComponent
				},
				set: function(t) {
					if (this._hostComponent != t) {
						var e;
						if (this._hostComponent) for (e = this._elementsContent.length - 1; e >= 0; e--) this.elementRemoved(this._elementsContent[e], e);
						if (this._hostComponent = t) {
							for (t = this._elementsContent.length, e = 0; t > e; e++) {
								var i = this._elementsContent[e];
								i.parent && "removeElement" in i.parent ? i.parent.removeElement(i) : i.owner && "removeElement" in i.owner && i.owner.removeElement(i), this.elementAdded(i, e)
							}
							this.stateClientHelper.initializeStates(), this.stateClientHelper.currentStateChanged && (this.stateClientHelper.commitCurrentState(), this.commitCurrentState())
						}
					}
				},
				enumerable: !0,
				configurable: !0
			}), i.prototype.getElementsContent = function() {
				return this._elementsContent
			}, Object.defineProperty(i.prototype, "elementsContent", {
				set: function(t) {
					if (null == t && (t = []), t != this._elementsContent) if (this._hostComponent) {
						var e;
						for (e = this._elementsContent.length - 1; e >= 0; e--) this.elementRemoved(this._elementsContent[e], e);
						for (this._elementsContent = t.concat(), t = this._elementsContent.length, e = 0; t > e; e++) {
							var i = this._elementsContent[e];
							i.parent && "removeElement" in i.parent ? i.parent.removeElement(i) : i.owner && "removeElement" in i.owner && i.owner.removeElement(i), this.elementAdded(i, e)
						}
					} else this._elementsContent = t.concat()
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "numElements", {
				get: function() {
					return this._elementsContent.length
				},
				enumerable: !0,
				configurable: !0
			}), i.prototype.getElementAt = function(t) {
				return this.checkForRangeError(t), this._elementsContent[t]
			}, i.prototype.checkForRangeError = function(t, e) {
				"undefined" == typeof e && (e = !1);
				var i = this._elementsContent.length - 1;
				if (e && i++, 0 > t || t > i) throw new RangeError('??????:"' + t + '"??????????????????????????????')
			}, i.prototype.addElement = function(t) {
				var e = this.numElements;
				return t.owner == this && (e = this.numElements - 1), this.addElementAt(t, e)
			}, i.prototype.addElementAt = function(t, e) {
				this.checkForRangeError(e, !0);
				var i = t.owner;
				return i == this ? (this.setElementIndex(t, e), t) : (t.parent && "removeElement" in t.parent ? t.parent.removeElement(t) : i && "removeElement" in i && i.removeElement(t), this._elementsContent.splice(e, 0, t), this._hostComponent && this.elementAdded(t, e), t)
			}, i.prototype.removeElement = function(t) {
				return this.removeElementAt(this.getElementIndex(t))
			}, i.prototype.removeElementAt = function(t) {
				this.checkForRangeError(t);
				var e = this._elementsContent[t];
				return this._hostComponent && this.elementRemoved(e, t), this._elementsContent.splice(t, 1), e
			}, i.prototype.getElementIndex = function(t) {
				return this._elementsContent.indexOf(t)
			}, i.prototype.setElementIndex = function(t, e) {
				this.checkForRangeError(e);
				var i = this.getElementIndex(t); - 1 == i || i == e || (this._hostComponent && this.elementRemoved(t, i, !1), this._elementsContent.splice(i, 1), this._elementsContent.splice(e, 0, t), this._hostComponent && this.elementAdded(t, e, !1))
			}, i.prototype.elementAdded = function(e, i, n) {
				"undefined" == typeof n && (n = !0), e.ownerChanged(this), e instanceof t.DisplayObject && this._hostComponent._addToDisplayListAt(e, i), n && this.hasEventListener(t.ElementExistenceEvent.ELEMENT_ADD) && this.dispatchEvent(new t.ElementExistenceEvent(t.ElementExistenceEvent.ELEMENT_ADD, !1, !1, e, i)), this._hostComponent.invalidateSize(), this._hostComponent.invalidateDisplayList()
			}, i.prototype.elementRemoved = function(e, i, n) {
				"undefined" == typeof n && (n = !0), n && this.hasEventListener(t.ElementExistenceEvent.ELEMENT_REMOVE) && this.dispatchEvent(new t.ElementExistenceEvent(t.ElementExistenceEvent.ELEMENT_REMOVE, !1, !1, e, i)), e && e.parent == this._hostComponent && this._hostComponent._removeFromDisplayList(e), e.ownerChanged(null), this._hostComponent.invalidateSize(), this._hostComponent.invalidateDisplayList()
			}, i
		}(t.EventDispatcher);
	t.StateSkin = e
}(ns_egret || (ns_egret = {})), __extends = this.__extends ||
function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype, t.prototype = new i
}, function(t) {
	var e = function(e) {
			function i() {
				e.call(this), this.useVirtualLayoutChanged = !1, this.rendererToClassMap = [], this.freeRenderers = [], this.dataProviderChanged = this.createNewRendererFlag = !1, this.recyclerDic = [], this.typicalItemChanged = this.virtualLayoutUnderway = this.itemRendererSkinNameChange = !1, this.indexToRenderer = [], this.renderersBeingUpdated = this.cleanFreeRenderer = !1
			}
			return __extends(i, e), Object.defineProperty(i.prototype, "rendererOwner", {
				get: function() {
					return this._rendererOwner
				},
				set: function(t) {
					this._rendererOwner = t
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "layout", {
				get: function() {
					return this._layout
				},
				set: function(t) {
					t != this.layout && (this.layout && (this.layout.typicalLayoutRect = null, this.layout.removeEventListener("useVirtualLayoutChanged", this.layout_useVirtualLayoutChangedHandler, this)), this.layout && t && this.layout.useVirtualLayout != t.useVirtualLayout && this.changeUseVirtualLayout(), this._setLayout(t), t && (t.typicalLayoutRect = this.typicalLayoutRect, t.addEventListener("useVirtualLayoutChanged", this.layout_useVirtualLayoutChangedHandler, this)))
				},
				enumerable: !0,
				configurable: !0
			}), i.prototype.layout_useVirtualLayoutChangedHandler = function() {
				this.changeUseVirtualLayout()
			}, i.prototype.setVirtualElementIndicesInView = function(t, e) {
				if (this.layout && this.layout.useVirtualLayout) {
					this.virtualRendererIndices = [];
					for (var i = t; e >= i; i++) this.virtualRendererIndices.push(i);
					for (var n in this.indexToRenderer) - 1 == this.virtualRendererIndices.indexOf(n) && this.freeRendererByIndex(n)
				}
			}, i.prototype.getVirtualElementAt = function(e) {
				if (0 > e || e >= this.dataProvider.length) return null;
				var i = this.indexToRenderer[e];
				if (!i) {
					var i = this.dataProvider.getItemAt(e),
						n = this.createVirtualRenderer(e);
					this.indexToRenderer[e] = n, this.updateRenderer(n, e, i), this.createNewRendererFlag && ("validateNow" in n && n.validateNow(), this.createNewRendererFlag = !1, this.dispatchEvent(new t.RendererExistenceEvent(t.RendererExistenceEvent.RENDERER_ADD, !1, !1, n, e, i))), i = n
				}
				return i
			}, i.prototype.freeRendererByIndex = function(e) {
				if (this.indexToRenderer[e]) {
					var i = this.indexToRenderer[e];
					delete this.indexToRenderer[e], i && i instanceof t.DisplayObject && this.doFreeRenderer(i)
				}
			}, i.prototype.doFreeRenderer = function(t) {
				var e = this.rendererToClassMap[t.hashCode].hashCode;
				this.freeRenderers[e] || (this.freeRenderers[e] = []), this.freeRenderers[e].push(t), t.visible = !1
			}, i.prototype.invalidateSize = function() {
				this.createNewRendererFlag || e.prototype.invalidateSize.call(this)
			}, i.prototype.createVirtualRenderer = function(t) {
				t = this.dataProvider.getItemAt(t), t = this.itemToRendererClass(t);
				var e = t.hashCode,
					i = this.freeRenderers;
				return i[e] && 0 < i[e].length ? (t = i[e].pop(), t.visible = !0, t) : (this.createNewRendererFlag = !0, this.createOneRenderer(t))
			}, i.prototype.createOneRenderer = function(i) {
				var n, o = i.hashCode,
					s = this.recyclerDic[o];
				return s && (n = s.pop(), 0 == s.length && delete this.recyclerDic[o]), n || (n = i.newInstance(), this.rendererToClassMap[n.hashCode] = i), n && n instanceof t.DisplayObject ? (this._itemRendererSkinName && this.setItemRenderSkinName(n), e.prototype.addChild.call(this, n), n.setLayoutBoundsSize(0 / 0, 0 / 0), n) : null
			}, i.prototype.setItemRenderSkinName = function(t) {
				t && (t ? t.skinNameExplicitlySet || (t.skinName = this._itemRendererSkinName) : t && !t.skinName && (t.skinName = this._itemRendererSkinName))
			}, i.prototype.finishVirtualLayout = function() {
				if (this.virtualLayoutUnderway) {
					var e, i = this.virtualLayoutUnderway = !1;
					for (e in this.freeRenderers) if (0 < this.freeRenderers[e].length) {
						i = !0;
						break
					}
					i && (this.cleanTimer || (this.cleanTimer = new t.Timer(3e3, 1), this.cleanTimer.addEventListener(t.TimerEvent.TIMER, this.cleanAllFreeRenderer, this)), this.cleanTimer.reset(), this.cleanTimer.start())
				}
			}, i.prototype.cleanAllFreeRenderer = function(t) {
				var e, i = this.freeRenderers;
				for (e in i) for (var n = i[e], o = n.length, s = 0; o > s; s++) t = n[s], t.visible = !0, this.recycle(t);
				this.freeRenderers = [], this.cleanFreeRenderer = !1
			}, i.prototype.getElementIndicesInView = function() {
				return this.layout && this.layout.useVirtualLayout ? this.virtualRendererIndices ? this.virtualRendererIndices : [] : e.prototype.getElementIndicesInView.call(this)
			}, i.prototype.changeUseVirtualLayout = function() {
				this.cleanFreeRenderer = this.useVirtualLayoutChanged = !0, this.removeDataProviderListener(), this.invalidateProperties()
			}, Object.defineProperty(i.prototype, "dataProvider", {
				get: function() {
					return this._dataProvider
				},
				set: function(t) {
					this._dataProvider != t && (this.removeDataProviderListener(), this._dataProvider = t, this.cleanFreeRenderer = this.dataProviderChanged = !0, this.invalidateProperties(), this.invalidateSize(), this.invalidateDisplayList())
				},
				enumerable: !0,
				configurable: !0
			}), i.prototype.removeDataProviderListener = function() {
				this._dataProvider && this._dataProvider.removeEventListener(t.CollectionEvent.COLLECTION_CHANGE, this.onCollectionChange, this)
			}, i.prototype.onCollectionChange = function(e) {
				switch (e.kind) {
				case t.CollectionEventKind.ADD:
					this.itemAddedHandler(e.items, e.location);
					break;
				case t.CollectionEventKind.MOVE:
					this.itemMovedHandler(e.items[0], e.location, e.oldLocation);
					break;
				case t.CollectionEventKind.REMOVE:
					this.itemRemovedHandler(e.items, e.location);
					break;
				case t.CollectionEventKind.UPDATE:
					this.itemUpdatedHandler(e.items[0], e.location);
					break;
				case t.CollectionEventKind.REPLACE:
					this.itemRemoved(e.oldItems[0], e.location), this.itemAdded(e.items[0], e.location);
					break;
				case t.CollectionEventKind.RESET:
				case t.CollectionEventKind.REFRESH:
					if (this.layout && this.layout.useVirtualLayout) for (var i in this.indexToRenderer) this.freeRendererByIndex(i);
					this.dataProviderChanged = !0, this.invalidateProperties()
				}
				this.invalidateSize(), this.invalidateDisplayList()
			}, i.prototype.itemAddedHandler = function(t, e) {
				for (var i = t.length, n = 0; i > n; n++) this.itemAdded(t[n], e + n);
				this.resetRenderersIndices()
			}, i.prototype.itemMovedHandler = function(t, e, i) {
				this.itemRemoved(t, i), this.itemAdded(t, e), this.resetRenderersIndices()
			}, i.prototype.itemRemovedHandler = function(t, e) {
				for (var i = t.length - 1; i >= 0; i--) this.itemRemoved(t[i], e + i);
				this.resetRenderersIndices()
			}, i.prototype.itemAdded = function(e, i) {
				if (this.layout && this.layout.elementAdded(i), this.layout && this.layout.useVirtualLayout) {
					var n = this.virtualRendererIndices;
					if (n) {
						for (var o = n.length, s = 0; o > s; s++) {
							var r = n[s];
							r >= i && (n[s] = r + 1)
						}
						this.indexToRenderer.splice(i, 0, null)
					}
				} else n = this.itemToRendererClass(e), n = this.createOneRenderer(n), this.indexToRenderer.splice(i, 0, n), n && (this.updateRenderer(n, i, e), this.dispatchEvent(new t.RendererExistenceEvent(t.RendererExistenceEvent.RENDERER_ADD, !1, !1, n, i, e)))
			}, i.prototype.itemRemoved = function(e, i) {
				this.layout && this.layout.elementRemoved(i);
				var n = this.virtualRendererIndices;
				if (n && 0 < n.length) {
					for (var o = -1, s = n.length, r = 0; s > r; r++) {
						var a = n[r];
						a == i ? o = r : a > i && (n[r] = a - 1)
					} - 1 != o && n.splice(o, 1)
				}
				n = this.indexToRenderer[i], this.indexToRenderer.length > i && this.indexToRenderer.splice(i, 1), this.dispatchEvent(new t.RendererExistenceEvent(t.RendererExistenceEvent.RENDERER_REMOVE, !1, !1, n, i, e)), n && n instanceof t.DisplayObject && (this.recycle(n), this.dispatchEvent(new t.RendererExistenceEvent(t.RendererExistenceEvent.RENDERER_REMOVE, !1, !1, n, n.itemIndex, n.data)))
			}, i.prototype.recycle = function(i) {
				e.prototype.removeChild.call(this, i), "ownerChanged" in i && i.ownerChanged(null);
				var n = this.rendererToClassMap[i.hashCode].hashCode;
				this.recyclerDic[n] || (this.recyclerDic[n] = new t.Recycler), this.recyclerDic[n].push(i)
			}, i.prototype.resetRenderersIndices = function() {
				if (0 != this.indexToRenderer.length) if (this.layout && this.layout.useVirtualLayout) for (var t = this.virtualRendererIndices, e = t.length, i = 0; e > i; i++) {
					var n = t[i];
					this.resetRendererItemIndex(n)
				} else for (t = this.indexToRenderer.length, n = 0; t > n; n++) this.resetRendererItemIndex(n)
			}, i.prototype.itemUpdatedHandler = function(t, e) {
				if (!this.renderersBeingUpdated) {
					var i = this.indexToRenderer[e];
					i && this.updateRenderer(i, e, t)
				}
			}, i.prototype.resetRendererItemIndex = function(t) {
				var e = this.indexToRenderer[t];
				e && (e.itemIndex = t)
			}, Object.defineProperty(i.prototype, "itemRenderer", {
				get: function() {
					return this._itemRenderer
				},
				set: function(t) {
					this._itemRenderer !== t && (this._itemRenderer = t, this.cleanFreeRenderer = this.typicalItemChanged = this.itemRendererChanged = !0, this.removeDataProviderListener(), this.invalidateProperties())
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "itemRendererSkinName", {
				get: function() {
					return this._itemRendererSkinName
				},
				set: function(t) {
					this._itemRendererSkinName != t && (this._itemRendererSkinName = t) && this.initialized && (this.itemRendererSkinNameChange = !0, this.invalidateProperties())
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "itemRendererFunction", {
				get: function() {
					return this._itemRendererFunction
				},
				set: function(t) {
					this._itemRendererFunction != t && (this._itemRendererFunction = t, this.typicalItemChanged = this.itemRendererChanged = !0, this.removeDataProviderListener(), this.invalidateProperties())
				},
				enumerable: !0,
				configurable: !0
			}), i.prototype.itemToRendererClass = function(t) {
				return null != this._itemRendererFunction ? (t = this._itemRendererFunction(t), t || (t = this._itemRenderer)) : t = this._itemRenderer, t ? t : i.defaultRendererFactory
			}, i.prototype.createChildren = function() {
				if (!this.layout) {
					var i = new t.VerticalLayout;
					i.gap = 0, i.horizontalAlign = t.HorizontalAlign.CONTENT_JUSTIFY, this.layout = i
				}
				e.prototype.createChildren.call(this)
			}, i.prototype.commitProperties = function() {
				if ((this.itemRendererChanged || this.dataProviderChanged || this.useVirtualLayoutChanged) && (this.removeAllRenderers(), this.layout && this.layout.clearVirtualLayoutCache(), this.setTypicalLayoutRect(null), this.itemRendererChanged = this.useVirtualLayoutChanged = !1, this._dataProvider && this._dataProvider.addEventListener(t.CollectionEvent.COLLECTION_CHANGE, this.onCollectionChange, this), this.layout && this.layout.useVirtualLayout ? (this.invalidateSize(), this.invalidateDisplayList()) : this.createRenderers(), this.dataProviderChanged && (this.dataProviderChanged = !1, this.verticalScrollPosition = this.horizontalScrollPosition = 0)), e.prototype.commitProperties.call(this), this.typicalItemChanged && (this.typicalItemChanged = !1, this._dataProvider && 0 < this._dataProvider.length && (this.typicalItem = this._dataProvider.getItemAt(0), this.measureRendererSize())), this.itemRendererSkinNameChange) {
					this.itemRendererSkinNameChange = !1;
					for (var i = this.indexToRenderer.length, n = 0; i > n; n++) this.setItemRenderSkinName(this.indexToRenderer[n]);
					var o, s = this.freeRenderers;
					for (o in s) {
						var r = s[o];
						if (r) for (i = r.length, n = 0; i > n; n++) this.setItemRenderSkinName(r[n])
					}
				}
			}, i.prototype.measure = function() {
				this.layout && this.layout.useVirtualLayout && this.ensureTypicalLayoutElement(), e.prototype.measure.call(this)
			}, i.prototype.updateDisplayList = function(t, i) {
				this.layoutInvalidateDisplayListFlag && this.layout && this.layout.useVirtualLayout && (this.virtualLayoutUnderway = !0, this.ensureTypicalLayoutElement()), e.prototype.updateDisplayList.call(this, t, i), this.virtualLayoutUnderway && this.finishVirtualLayout()
			}, i.prototype.ensureTypicalLayoutElement = function() {
				!this.layout.typicalLayoutRect && this._dataProvider && 0 < this._dataProvider.length && (this.typicalItem = this._dataProvider.getItemAt(0), this.measureRendererSize())
			}, i.prototype.measureRendererSize = function() {
				if (this.typicalItem) {
					var e = this.itemToRendererClass(this.typicalItem);
					if (e = this.createOneRenderer(e)) {
						this.createNewRendererFlag = !0, this.updateRenderer(e, 0, this.typicalItem), "validateNow" in e && e.validateNow();
						var i = new t.Rectangle(0, 0, e.preferredWidth, e.preferredHeight);
						this.recycle(e), this.setTypicalLayoutRect(i), this.createNewRendererFlag = !1
					} else this.setTypicalLayoutRect(null)
				} else this.setTypicalLayoutRect(null)
			}, i.prototype.setTypicalLayoutRect = function(t) {
				this.typicalLayoutRect = t, this.layout && (this.layout.typicalLayoutRect = t)
			}, i.prototype.removeAllRenderers = function() {
				for (var e, i = this.indexToRenderer.length, n = 0; i > n; n++)(e = this.indexToRenderer[n]) && (this.recycle(e), this.dispatchEvent(new t.RendererExistenceEvent(t.RendererExistenceEvent.RENDERER_REMOVE, !1, !1, e, e.itemIndex, e.data)));
				this.indexToRenderer = [], this.virtualRendererIndices = null, this.cleanFreeRenderer && this.cleanAllFreeRenderer()
			}, i.prototype.createRenderers = function() {
				if (this._dataProvider) for (var e = 0, i = this._dataProvider.length, n = 0; i > n; n++) {
					var o = this._dataProvider.getItemAt(n),
						s = this.itemToRendererClass(o);
					(s = this.createOneRenderer(s)) && (this.indexToRenderer[e] = s, this.updateRenderer(s, e, o), this.dispatchEvent(new t.RendererExistenceEvent(t.RendererExistenceEvent.RENDERER_ADD, !1, !1, s, e, o)), e++)
				}
			}, i.prototype.updateRenderer = function(t, e, i) {
				return this.renderersBeingUpdated = !0, this._rendererOwner ? t = this._rendererOwner.updateRenderer(t, e, i) : ("ownerChanged" in t && t.ownerChanged(this), t.itemIndex = e, t.label = this.itemToLabel(i), t.data = i), this.renderersBeingUpdated = !1, t
			}, i.prototype.itemToLabel = function(t) {
				return t ? t.toString() : " "
			}, i.prototype.getElementAt = function(t) {
				return this.indexToRenderer[t]
			}, i.prototype.getElementIndex = function(t) {
				return t ? this.indexToRenderer.indexOf(t) : -1
			}, Object.defineProperty(i.prototype, "numElements", {
				get: function() {
					return this._dataProvider ? this._dataProvider.length : 0
				},
				enumerable: !0,
				configurable: !0
			}), i.prototype.addChild = function() {
				throw Error("addChild()" + i.errorStr + "addElement()??????")
			}, i.prototype.addChildAt = function() {
				throw Error("addChildAt()" + i.errorStr + "addElementAt()??????")
			}, i.prototype.removeChild = function() {
				throw Error("removeChild()" + i.errorStr + "removeElement()??????")
			}, i.prototype.removeChildAt = function() {
				throw Error("removeChildAt()" + i.errorStr + "removeElementAt()??????")
			}, i.prototype.setChildIndex = function() {
				throw Error("setChildIndex()" + i.errorStr + "setElementIndex()??????")
			}, i.prototype.swapChildren = function() {
				throw Error("swapChildren()" + i.errorStr + "swapElements()??????")
			}, i.prototype.swapChildrenAt = function() {
				throw Error("swapChildrenAt()" + i.errorStr + "swapElementsAt()??????")
			}, i.defaultRendererFactory = new t.ClassFactory(t.ItemRenderer), i.errorStr = "???????????????????????????????????????????????????????????????", i
		}(t.GroupBase);
	t.DataGroup = e
}(ns_egret || (ns_egret = {})), __extends = this.__extends ||
function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype, t.prototype = new i
}, function(t) {
	var e = function(e) {
			function i() {
				e.call(this), this.contentGroupProperties = {}
			}
			return __extends(i, e), Object.defineProperty(i.prototype, "currentContentGroup", {
				get: function() {
					return null == this.contentGroup ? (null == this._placeHolderGroup && (this._placeHolderGroup = new t.Group, this._placeHolderGroup.visible = !1, this._addToDisplayList(this._placeHolderGroup)), this._placeHolderGroup.addEventListener(t.ElementExistenceEvent.ELEMENT_ADD, this.contentGroup_elementAddedHandler, this), this._placeHolderGroup.addEventListener(t.ElementExistenceEvent.ELEMENT_REMOVE, this.contentGroup_elementRemovedHandler, this), this._placeHolderGroup) : this.contentGroup
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "elementsContent", {
				set: function(t) {
					this.currentContentGroup.elementsContent = t
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "numElements", {
				get: function() {
					return this.currentContentGroup.numElements
				},
				enumerable: !0,
				configurable: !0
			}), i.prototype.getElementAt = function(t) {
				return this.currentContentGroup.getElementAt(t)
			}, i.prototype.addElement = function(t) {
				return this.currentContentGroup.addElement(t)
			}, i.prototype.addElementAt = function(t, e) {
				return this.currentContentGroup.addElementAt(t, e)
			}, i.prototype.removeElement = function(t) {
				return this.currentContentGroup.removeElement(t)
			}, i.prototype.removeElementAt = function(t) {
				return this.currentContentGroup.removeElementAt(t)
			}, i.prototype.removeAllElements = function() {
				this.currentContentGroup.removeAllElements()
			}, i.prototype.getElementIndex = function(t) {
				return this.currentContentGroup.getElementIndex(t)
			}, i.prototype.setElementIndex = function(t, e) {
				this.currentContentGroup.setElementIndex(t, e)
			}, i.prototype.swapElements = function(t, e) {
				this.currentContentGroup.swapElements(t, e)
			}, i.prototype.swapElementsAt = function(t, e) {
				this.currentContentGroup.swapElementsAt(t, e)
			}, Object.defineProperty(i.prototype, "layout", {
				get: function() {
					return null != this.contentGroup ? this.contentGroup.layout : this.contentGroupProperties.layout
				},
				set: function(t) {
					null != this.contentGroup ? this.contentGroup.layout = t : this.contentGroupProperties.layout = t
				},
				enumerable: !0,
				configurable: !0
			}), i.prototype.partAdded = function(i, n) {
				if (e.prototype.partAdded.call(this, i, n), n == this.contentGroup) {
					if (void 0 !== this.contentGroupProperties.layout && (this.contentGroup.layout = this.contentGroupProperties.layout, this.contentGroupProperties = {}), this._placeHolderGroup) {
						this._placeHolderGroup.removeEventListener(t.ElementExistenceEvent.ELEMENT_ADD, this.contentGroup_elementAddedHandler, this), this._placeHolderGroup.removeEventListener(t.ElementExistenceEvent.ELEMENT_REMOVE, this.contentGroup_elementRemovedHandler, this);
						for (var o = this._placeHolderGroup.getElementsContent().concat(), s = this._placeHolderGroup.numElements; s > 0; s--) {
							var r = this._placeHolderGroup.removeElementAt(0);
							r.ownerChanged(null)
						}
						for (this._removeFromDisplayList(this._placeHolderGroup), this.contentGroup.elementsContent = o, s = o.length - 1; s >= 0; s--) r = o[s], r.ownerChanged(this);
						this._placeHolderGroup = null
					}
					this.contentGroup.addEventListener(t.ElementExistenceEvent.ELEMENT_ADD, this.contentGroup_elementAddedHandler, this), this.contentGroup.addEventListener(t.ElementExistenceEvent.ELEMENT_REMOVE, this.contentGroup_elementRemovedHandler, this)
				}
			}, i.prototype.partRemoved = function(i, n) {
				if (e.prototype.partRemoved.call(this, i, n), n == this.contentGroup && (this.contentGroup.removeEventListener(t.ElementExistenceEvent.ELEMENT_ADD, this.contentGroup_elementAddedHandler, this), this.contentGroup.removeEventListener(t.ElementExistenceEvent.ELEMENT_REMOVE, this.contentGroup_elementRemovedHandler, this), this.contentGroupProperties.layout = this.contentGroup.layout, this.contentGroup.layout = null, 0 < this.contentGroup.numElements)) {
					for (this._placeHolderGroup = new t.Group; 0 < this.contentGroup.numElements;) this._placeHolderGroup.addElement(this.contentGroup.getElementAt(0));
					this._placeHolderGroup.addEventListener(t.ElementExistenceEvent.ELEMENT_ADD, this.contentGroup_elementAddedHandler, this), this._placeHolderGroup.addEventListener(t.ElementExistenceEvent.ELEMENT_REMOVE, this.contentGroup_elementRemovedHandler, this)
				}
			}, i.prototype.contentGroup_elementAddedHandler = function(t) {
				t.element.ownerChanged(this), this.dispatchEvent(t)
			}, i.prototype.contentGroup_elementRemovedHandler = function(t) {
				t.element.ownerChanged(null), this.dispatchEvent(t)
			}, i.prototype.createSkinParts = function() {
				this.contentGroup = new t.Group, this.contentGroup.percentWidth = 100, this.contentGroup.percentHeight = 100, this._addToDisplayList(this.contentGroup), this.partAdded("contentGroup", this.contentGroup)
			}, i.prototype.removeSkinParts = function() {
				this.partRemoved("contentGroup", this.contentGroup), this._removeFromDisplayList(this.contentGroup), this.contentGroup = null
			}, i
		}(t.SkinnableComponent);
	t.SkinnableContainer = e
}(ns_egret || (ns_egret = {})), __extends = this.__extends ||
function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype, t.prototype = new i
}, function(t) {
	var e = function(e) {
			function i() {
				e.call(this), this._dataGroupProperties = {}
			}
			return __extends(i, e), i.prototype.updateRenderer = function(t, e, i) {
				return "ownerChanged" in t && t.ownerChanged(this), t.itemIndex = e, t.label = this.itemToLabel(i), t.data = i, t
			}, i.prototype.itemToLabel = function(t) {
				return null !== t ? t.toString() : " "
			}, Object.defineProperty(i.prototype, "dataProvider", {
				get: function() {
					return this._getDataProvider()
				},
				set: function(t) {
					this._setDataProvider(t)
				},
				enumerable: !0,
				configurable: !0
			}), i.prototype._getDataProvider = function() {
				return null != this.dataGroup ? this.dataGroup.dataProvider : this._dataGroupProperties.dataProvider
			}, i.prototype._setDataProvider = function(t) {
				null == this.dataGroup ? this._dataGroupProperties.dataProvider = t : (this.dataGroup.dataProvider = t, this._dataGroupProperties.dataProvider = !0)
			}, Object.defineProperty(i.prototype, "itemRenderer", {
				get: function() {
					return this.dataGroup ? this.dataGroup.itemRenderer : this._dataGroupProperties.itemRenderer
				},
				set: function(t) {
					null == this.dataGroup ? this._dataGroupProperties.itemRenderer = t : (this.dataGroup.itemRenderer = t, this._dataGroupProperties.itemRenderer = !0)
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "itemRendererSkinName", {
				get: function() {
					return this.dataGroup ? this.dataGroup.itemRendererSkinName : this._dataGroupProperties.itemRendererSkinName
				},
				set: function(t) {
					null == this.dataGroup ? this._dataGroupProperties.itemRendererSkinName = t : (this.dataGroup.itemRendererSkinName = t, this._dataGroupProperties.itemRendererSkinName = !0)
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "itemRendererFunction", {
				get: function() {
					return this.dataGroup ? this.dataGroup.itemRendererFunction : this._dataGroupProperties.itemRendererFunction
				},
				set: function(t) {
					null == this.dataGroup ? this._dataGroupProperties.itemRendererFunction = t : (this.dataGroup.itemRendererFunction = t, this._dataGroupProperties.itemRendererFunction = !0)
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "layout", {
				get: function() {
					return this.dataGroup ? this.dataGroup.layout : this._dataGroupProperties.layout
				},
				set: function(t) {
					this._setLayout(t)
				},
				enumerable: !0,
				configurable: !0
			}), i.prototype._setLayout = function(t) {
				null == this.dataGroup ? this._dataGroupProperties.layout = t : (this.dataGroup.layout = t, this._dataGroupProperties.layout = !0)
			}, i.prototype.partAdded = function(i, n) {
				if (e.prototype.partAdded.call(this, i, n), n == this.dataGroup) {
					var o = {};
					void 0 !== this._dataGroupProperties.layout && (this.dataGroup.layout = this._dataGroupProperties.layout, o.layout = !0), void 0 !== this._dataGroupProperties.dataProvider && (this.dataGroup.dataProvider = this._dataGroupProperties.dataProvider, o.dataProvider = !0), void 0 !== this._dataGroupProperties.itemRenderer && (this.dataGroup.itemRenderer = this._dataGroupProperties.itemRenderer, o.itemRenderer = !0), void 0 !== this._dataGroupProperties.itemRendererSkinName && (this.dataGroup.itemRendererSkinName = this._dataGroupProperties.itemRendererSkinName, o.itemRendererSkinName = !0), void 0 !== this._dataGroupProperties.itemRendererFunction && (this.dataGroup.itemRendererFunction = this._dataGroupProperties.itemRendererFunction, o.itemRendererFunction = !0), this.dataGroup.rendererOwner = this, this._dataGroupProperties = o, this.hasEventListener(t.RendererExistenceEvent.RENDERER_ADD) && this.dataGroup.addEventListener(t.RendererExistenceEvent.RENDERER_ADD, this.dispatchEvent, this), this.hasEventListener(t.RendererExistenceEvent.RENDERER_REMOVE) && this.dataGroup.addEventListener(t.RendererExistenceEvent.RENDERER_REMOVE, this.dispatchEvent, this)
				}
			}, i.prototype.partRemoved = function(i, n) {
				if (e.prototype.partRemoved.call(this, i, n), n == this.dataGroup) {
					this.dataGroup.removeEventListener(t.RendererExistenceEvent.RENDERER_ADD, this.dispatchEvent, this), this.dataGroup.removeEventListener(t.RendererExistenceEvent.RENDERER_REMOVE, this.dispatchEvent, this);
					var o = {};
					this._dataGroupProperties.layout && (o.layout = this.dataGroup.layout), this._dataGroupProperties.dataProvider && (o.dataProvider = this.dataGroup.dataProvider), this._dataGroupProperties.itemRenderer && (o.itemRenderer = this.dataGroup.itemRenderer), this._dataGroupProperties.itemRendererSkinName && (o.itemRendererSkinName = this.dataGroup.itemRendererSkinName), this._dataGroupProperties.itemRendererFunction && (o.itemRendererFunction = this.dataGroup.itemRendererFunction), this._dataGroupProperties = o, this.dataGroup.rendererOwner = null, this.dataGroup.dataProvider = null, this.dataGroup.layout = null
				}
			}, i.prototype.addEventListener = function(i, n, o, s, r) {
				"undefined" == typeof s && (s = !1), "undefined" == typeof r && (r = 0), e.prototype.addEventListener.call(this, i, n, o, s, r), i == t.RendererExistenceEvent.RENDERER_ADD && this.dataGroup && this.dataGroup.addEventListener(t.RendererExistenceEvent.RENDERER_ADD, this.dispatchEvent, this), i == t.RendererExistenceEvent.RENDERER_REMOVE && this.dataGroup && this.dataGroup.addEventListener(t.RendererExistenceEvent.RENDERER_REMOVE, this.dispatchEvent, this)
			}, i.prototype.removeEventListener = function(i, n, o, s) {
				"undefined" == typeof s && (s = !1), e.prototype.removeEventListener.call(this, i, n, o, s), i == t.RendererExistenceEvent.RENDERER_ADD && this.dataGroup && (this.hasEventListener(t.RendererExistenceEvent.RENDERER_ADD) || this.dataGroup.removeEventListener(t.RendererExistenceEvent.RENDERER_ADD, this.dispatchEvent, this)), i == t.RendererExistenceEvent.RENDERER_REMOVE && this.dataGroup && (this.hasEventListener(t.RendererExistenceEvent.RENDERER_REMOVE) || this.dataGroup.removeEventListener(t.RendererExistenceEvent.RENDERER_REMOVE, this.dispatchEvent, this))
			}, i.prototype.createSkinParts = function() {
				this.dataGroup = new t.DataGroup, this.dataGroup.percentHeight = this.dataGroup.percentWidth = 100, this.dataGroup.clipAndEnableScrolling = !0;
				var e = new t.VerticalLayout;
				this.dataGroup.layout = e, e.gap = 0, e.horizontalAlign = "contentJustify", this._addToDisplayList(this.dataGroup), this.partAdded("dataGroup", this.dataGroup)
			}, i.prototype.removeSkinParts = function() {
				this.dataGroup && (this.partRemoved("dataGroup", this.dataGroup), this._removeFromDisplayList(this.dataGroup), this.dataGroup = null)
			}, i
		}(t.SkinnableComponent);
	t.SkinnableDataContainer = e
}(ns_egret || (ns_egret = {})), __extends = this.__extends ||
function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype, t.prototype = new i
}, function(t) {
	var e = function(e) {
			function i() {
				e.call(this), this.doingWholesaleChanges = !1, this._labelField = "label", this.requireSelectionChanged = this._requireSelection = !1, this._proposedSelectedIndex = i.NO_PROPOSED_SELECTION, this._selectedIndex = i.NO_SELECTION, this.selectedIndexAdjusted = this._useVirtualLayout = this.dispatchChangeAfterSelection = this.allowCustomSelectedItem = !1
			}
			return __extends(i, e), i.prototype._setDataProvider = function(i) {
				this.dataProvider && this.dataProvider.removeEventListener(t.CollectionEvent.COLLECTION_CHANGE, this.dataProvider_collectionChangeHandler, this), this.doingWholesaleChanges = this.dataProviderChanged = !0, i && i.addEventListener(t.CollectionEvent.COLLECTION_CHANGE, this.dataProvider_collectionChangeHandler, this), e.prototype._setDataProvider.call(this, i), this.invalidateProperties()
			}, Object.defineProperty(i.prototype, "layout", {
				get: function() {
					return this.dataGroup ? this.dataGroup.layout : this._dataGroupProperties.layout
				},
				set: function(t) {
					t && this.useVirtualLayout && (t.useVirtualLayout = !0), this._setLayout(t)
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "labelField", {
				get: function() {
					return this._labelField
				},
				set: function(t) {
					this._setLabelField(t)
				},
				enumerable: !0,
				configurable: !0
			}), i.prototype._setLabelField = function(t) {
				t != this._labelField && (this._labelField = t, this.labelFieldOrFunctionChanged = !0, this.invalidateProperties())
			}, Object.defineProperty(i.prototype, "labelFunction", {
				get: function() {
					return this._labelFunction
				},
				set: function(t) {
					this._setLabelFunction(t)
				},
				enumerable: !0,
				configurable: !0
			}), i.prototype._setLabelFunction = function(t) {
				t != this._labelFunction && (this._labelFunction = t, this.labelFieldOrFunctionChanged = !0, this.invalidateProperties())
			}, Object.defineProperty(i.prototype, "requireSelection", {
				get: function() {
					return this._requireSelection
				},
				set: function(t) {
					this._setRequireSelection(t)
				},
				enumerable: !0,
				configurable: !0
			}), i.prototype._setRequireSelection = function(t) {
				t != this._requireSelection && (this._requireSelection = t) && (this.requireSelectionChanged = !0, this.invalidateProperties())
			}, Object.defineProperty(i.prototype, "selectedIndex", {
				get: function() {
					return this._getSelectedIndex()
				},
				set: function(t) {
					this._setSelectedIndex(t, !1)
				},
				enumerable: !0,
				configurable: !0
			}), i.prototype._getSelectedIndex = function() {
				return this._proposedSelectedIndex != i.NO_PROPOSED_SELECTION ? this._proposedSelectedIndex : this._selectedIndex
			}, i.prototype._setSelectedIndex = function(t, e) {
				"undefined" == typeof e && (e = !1), t != this.selectedIndex && (e && (this.dispatchChangeAfterSelection = this.dispatchChangeAfterSelection || e), this._proposedSelectedIndex = t, this.invalidateProperties())
			}, Object.defineProperty(i.prototype, "selectedItem", {
				get: function() {
					return void 0 !== this._pendingSelectedItem ? this._pendingSelectedItem : this.allowCustomSelectedItem && this.selectedIndex == i.CUSTOM_SELECTED_ITEM ? this._selectedItem : this.selectedIndex == i.NO_SELECTION || null == this.dataProvider ? void 0 : this.dataProvider.length > this.selectedIndex ? this.dataProvider.getItemAt(this.selectedIndex) : void 0
				},
				set: function(t) {
					this.setSelectedItem(t, !1)
				},
				enumerable: !0,
				configurable: !0
			}), i.prototype.setSelectedItem = function(t, e) {
				"undefined" == typeof e && (e = !1), this.selectedItem !== t && (e && (this.dispatchChangeAfterSelection = this.dispatchChangeAfterSelection || e), this._pendingSelectedItem = t, this.invalidateProperties())
			}, Object.defineProperty(i.prototype, "useVirtualLayout", {
				get: function() {
					return this._getUseVirtualLayout()
				},
				set: function(t) {
					this._setUseVirtualLayout(t)
				},
				enumerable: !0,
				configurable: !0
			}), i.prototype._getUseVirtualLayout = function() {
				return this.layout ? this.layout.useVirtualLayout : this._useVirtualLayout
			}, i.prototype._setUseVirtualLayout = function(t) {
				t != this.useVirtualLayout && (this._useVirtualLayout = t, this.layout && (this.layout.useVirtualLayout = t))
			}, i.prototype.commitProperties = function() {
				e.prototype.commitProperties.call(this), this.dataProviderChanged && (this.doingWholesaleChanges = this.dataProviderChanged = !1, 0 <= this.selectedIndex && this.dataProvider && this.selectedIndex < this.dataProvider.length ? this.itemSelected(this.selectedIndex, !0) : this.requireSelection ? this._proposedSelectedIndex = 0 : this._setSelectedIndex(-1, !1)), this.requireSelectionChanged && (this.requireSelectionChanged = !1, this.requireSelection && this.selectedIndex == i.NO_SELECTION && this.dataProvider && 0 < this.dataProvider.length && (this._proposedSelectedIndex = 0)), void 0 !== this._pendingSelectedItem && (this._proposedSelectedIndex = this.dataProvider ? this.dataProvider.getItemIndex(this._pendingSelectedItem) : i.NO_SELECTION, this.allowCustomSelectedItem && -1 == this._proposedSelectedIndex && (this._proposedSelectedIndex = i.CUSTOM_SELECTED_ITEM, this._selectedItem = this._pendingSelectedItem), this._pendingSelectedItem = void 0);
				var n = !1;
				if (this._proposedSelectedIndex != i.NO_PROPOSED_SELECTION && (n = this.commitSelection()), this.selectedIndexAdjusted && (this.selectedIndexAdjusted = !1, n || this.dispatchEvent(new t.UIEvent(t.UIEvent.VALUE_COMMIT))), this.labelFieldOrFunctionChanged) {
					if (null != this.dataGroup) if (this.layout && this.layout.useVirtualLayout) for (var o = this.dataGroup.getElementIndicesInView(), s = o.length, r = 0; s > r; r++) n = o[r], this.updateRendererLabelProperty(n);
					else for (o = this.dataGroup.numElements, n = 0; o > n; n++) this.updateRendererLabelProperty(n);
					this.labelFieldOrFunctionChanged = !1
				}
			}, i.prototype.updateRendererLabelProperty = function(t) {
				(t = this.dataGroup.getElementAt(t)) && (t.label = this.itemToLabel(t.data))
			}, i.prototype.partAdded = function(i, n) {
				e.prototype.partAdded.call(this, i, n), n == this.dataGroup && (this._useVirtualLayout && this.dataGroup.layout && (this.dataGroup.layout.useVirtualLayout = !0), this.dataGroup.addEventListener(t.RendererExistenceEvent.RENDERER_ADD, this.dataGroup_rendererAddHandler, this), this.dataGroup.addEventListener(t.RendererExistenceEvent.RENDERER_REMOVE, this.dataGroup_rendererRemoveHandler, this))
			}, i.prototype.partRemoved = function(i, n) {
				e.prototype.partRemoved.call(this, i, n), n == this.dataGroup && (this.dataGroup.removeEventListener(t.RendererExistenceEvent.RENDERER_ADD, this.dataGroup_rendererAddHandler, this), this.dataGroup.removeEventListener(t.RendererExistenceEvent.RENDERER_REMOVE, this.dataGroup_rendererRemoveHandler, this))
			}, i.prototype.updateRenderer = function(t, i, n) {
				return this.itemSelected(i, this.isItemIndexSelected(i)), e.prototype.updateRenderer.call(this, t, i, n)
			}, i.prototype.itemToLabel = function(e) {
				if (null != this._labelFunction) return this._labelFunction(e);
				if ("string" == typeof e) return e;
				if (e instanceof t.XML) try {
					0 != e[this.labelField].length() && (e = e[this.labelField])
				} catch (i) {} else if (e instanceof Object) try {
					null != e[this.labelField] && (e = e[this.labelField])
				} catch (n) {}
				if ("string" == typeof e) return e;
				try {
					if (null !== e) return e.toString()
				} catch (o) {}
				return " "
			}, i.prototype.itemSelected = function(t, e) {
				if (this.dataGroup) {
					var i = this.dataGroup.getElementAt(t);
					null != i && (i.selected = e)
				}
			}, i.prototype.isItemIndexSelected = function(t) {
				return t == this.selectedIndex
			}, i.prototype.commitSelection = function(e) {
				"undefined" == typeof e && (e = !0);
				var n = this.dataProvider ? this.dataProvider.length - 1 : -1,
					o = this._selectedIndex;
				if ((!this.allowCustomSelectedItem || this._proposedSelectedIndex != i.CUSTOM_SELECTED_ITEM) && (this._proposedSelectedIndex < i.NO_SELECTION && (this._proposedSelectedIndex = i.NO_SELECTION), this._proposedSelectedIndex > n && (this._proposedSelectedIndex = n), this.requireSelection && this._proposedSelectedIndex == i.NO_SELECTION && this.dataProvider && 0 < this.dataProvider.length)) return this._proposedSelectedIndex = i.NO_PROPOSED_SELECTION, this.dispatchChangeAfterSelection = !1;
				var s = this._proposedSelectedIndex;
				return this.dispatchChangeAfterSelection && (n = new t.IndexChangeEvent(t.IndexChangeEvent.CHANGING, !1, !0), n.oldIndex = this._selectedIndex, n.newIndex = this._proposedSelectedIndex, !this.dispatchEvent(n)) ? (this.itemSelected(this._proposedSelectedIndex, !1), this._proposedSelectedIndex = i.NO_PROPOSED_SELECTION, this.dispatchChangeAfterSelection = !1) : (this._selectedIndex = s, this._proposedSelectedIndex = i.NO_PROPOSED_SELECTION, o != i.NO_SELECTION && this.itemSelected(o, !1), this._selectedIndex != i.NO_SELECTION && this.itemSelected(this._selectedIndex, !0), e && (this.dispatchChangeAfterSelection && (n = new t.IndexChangeEvent(t.IndexChangeEvent.CHANGE), n.oldIndex = o, n.newIndex = this._selectedIndex, this.dispatchEvent(n), this.dispatchChangeAfterSelection = !1), this.dispatchEvent(new t.UIEvent(t.UIEvent.VALUE_COMMIT))), !0)
			}, i.prototype.adjustSelection = function(t) {
				this._proposedSelectedIndex != i.NO_PROPOSED_SELECTION ? this._proposedSelectedIndex = t : this._selectedIndex = t, this.selectedIndexAdjusted = !0, this.invalidateProperties()
			}, i.prototype.itemAdded = function(t) {
				this.doingWholesaleChanges || (this.selectedIndex == i.NO_SELECTION ? this.requireSelection && this.adjustSelection(t, !0) : t <= this.selectedIndex && this.adjustSelection(this.selectedIndex + 1, !0))
			}, i.prototype.itemRemoved = function(t) {
				this.selectedIndex == i.NO_SELECTION || this.doingWholesaleChanges || (t == this.selectedIndex ? this.requireSelection && this.dataProvider && 0 < this.dataProvider.length ? 0 == t ? (this._proposedSelectedIndex = 0, this.invalidateProperties()) : this._setSelectedIndex(0, !1) : this.adjustSelection(-1, !1) : t < this.selectedIndex && this.adjustSelection(this.selectedIndex - 1, !1))
			}, i.prototype.dataGroup_rendererAddHandler = function(e) {
				e = e.renderer, null != e && (e.addEventListener(t.TouchEvent.TOUCH_ROLL_OVER, this.item_mouseEventHandler, this), e.addEventListener(t.TouchEvent.TOUCH_ROLL_OUT, this.item_mouseEventHandler, this))
			}, i.prototype.dataGroup_rendererRemoveHandler = function(e) {
				e = e.renderer, null != e && (e.removeEventListener(t.TouchEvent.TOUCH_ROLL_OVER, this.item_mouseEventHandler, this), e.removeEventListener(t.TouchEvent.TOUCH_ROLL_OUT, this.item_mouseEventHandler, this))
			}, i.prototype.item_mouseEventHandler = function(t) {
				var e = t.type,
					e = i.TYPE_MAP[e];
				this.hasEventListener(e) && this.dispatchListEvent(t, e, t.currentTarget)
			}, i.prototype.dispatchListEvent = function(e, i, n) {
				var o = -1,
					o = n ? n.itemIndex : this.dataGroup.getElementIndex(e.currentTarget);
				e = new t.ListEvent(i, !1, !1, e.touchPointID, e.stageX, e.stageY, e.ctrlKey, e.altKey, e.shiftKey, e.touchDown, o, this.dataProvider.getItemAt(o), n), this.dispatchEvent(e)
			}, i.prototype.dataProvider_collectionChangeHandler = function(e) {
				var n = e.items;
				if (e.kind == t.CollectionEventKind.ADD) for (var n = n.length, o = 0; n > o; o++) this.itemAdded(e.location + o);
				else if (e.kind == t.CollectionEventKind.REMOVE) for (n = n.length, o = n - 1; o >= 0; o--) this.itemRemoved(e.location + o);
				else e.kind == t.CollectionEventKind.MOVE ? (this.itemRemoved(e.oldLocation), this.itemAdded(e.location)) : e.kind == t.CollectionEventKind.RESET ? 0 == this.dataProvider.length ? this._setSelectedIndex(i.NO_SELECTION, !1) : (this.dataProviderChanged = !0, this.invalidateProperties()) : e.kind == t.CollectionEventKind.REFRESH && this._setSelectedIndex(i.NO_SELECTION, !1)
			}, i.NO_SELECTION = -1, i.NO_PROPOSED_SELECTION = -2, i.CUSTOM_SELECTED_ITEM = -3, i.TYPE_MAP = {
				rollOver: "itemRollOver",
				rollOut: "itemRollOut"
			}, i
		}(t.SkinnableDataContainer);
	t.ListBase = e
}(ns_egret || (ns_egret = {})), __extends = this.__extends ||
function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype, t.prototype = new i
}, function(t) {
	var e = function(t) {
			function e() {
				t.call(this), this._title = "", this.touchEnabled = !1
			}
			return __extends(e, t), Object.defineProperty(e.prototype, "title", {
				get: function() {
					return this._title
				},
				set: function(t) {
					this._title = t, this.titleDisplay && (this.titleDisplay.text = this.title)
				},
				enumerable: !0,
				configurable: !0
			}), e.prototype.partAdded = function(e, i) {
				t.prototype.partAdded.call(this, e, i), i == this.titleDisplay && (this.titleDisplay.text = this.title)
			}, e
		}(t.SkinnableContainer);
	t.Panel = e
}(ns_egret || (ns_egret = {})), __extends = this.__extends ||
function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype, t.prototype = new i
}, function(t) {
	var e = function(e) {
			function i() {
				e.call(this), this._autoBackToStage = this._showCloseButton = !0, this.addEventListener(t.TouchEvent.TOUCH_BEGAN, this.onWindowMouseDown, this, !0, 100)
			}
			return __extends(i, e), i.prototype.onWindowMouseDown = function(e) {
				this.enabled && this.isPopUp && e.target != this.closeButton && t.PopUpManager.bringToFront(this)
			}, Object.defineProperty(i.prototype, "showCloseButton", {
				get: function() {
					return this._showCloseButton
				},
				set: function(t) {
					this._showCloseButton != t && (this._showCloseButton = t, this.closeButton && (this.closeButton.visible = this._showCloseButton))
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "autoBackToStage", {
				get: function() {
					return this._autoBackToStage
				},
				set: function(t) {
					this._autoBackToStage = t
				},
				enumerable: !0,
				configurable: !0
			}), i.prototype.partAdded = function(i, n) {
				e.prototype.partAdded.call(this, i, n), n == this.moveArea ? this.moveArea.addEventListener(t.TouchEvent.TOUCH_BEGAN, this.moveArea_mouseDownHandler, this) : n == this.closeButton && (this.closeButton.addEventListener(t.TouchEvent.TOUCH_TAP, this.closeButton_clickHandler, this), this.closeButton.visible = this._showCloseButton)
			}, i.prototype.partRemoved = function(i, n) {
				e.prototype.partRemoved.call(this, i, n), n == this.moveArea ? this.moveArea.removeEventListener(t.TouchEvent.TOUCH_BEGAN, this.moveArea_mouseDownHandler, this) : n == this.closeButton && this.closeButton.removeEventListener(t.TouchEvent.TOUCH_TAP, this.closeButton_clickHandler, this)
			}, i.prototype.closeButton_clickHandler = function() {
				this.dispatchEvent(new t.CloseEvent(t.CloseEvent.CLOSE))
			}, i.prototype.moveArea_mouseDownHandler = function(e) {
				this.enabled && this.isPopUp && (e = this.globalToLocal(e.stageX, e.stageY), this._offsetPointX = e.x, this._offsetPointY = e.y, this._includeInLayout = !1, t.UIGlobals.stage.addEventListener(t.TouchEvent.TOUCH_MOVE, this.moveArea_mouseMoveHandler, this), t.UIGlobals.stage.addEventListener(t.TouchEvent.TOUCH_END, this.moveArea_mouseUpHandler, this), t.UIGlobals.stage.addEventListener(t.Event.LEAVE_STAGE, this.moveArea_mouseUpHandler, this))
			}, i.prototype.moveArea_mouseMoveHandler = function(e) {
				var i = this.globalToLocal(e.stageX, e.stageY);
				this.x += i.x - this._offsetPointX, this.y += i.y - this._offsetPointY, t.UIGlobals.useUpdateAfterEvent && e.updateAfterEvent()
			}, i.prototype.moveArea_mouseUpHandler = function() {
				t.UIGlobals.stage.removeEventListener(t.TouchEvent.TOUCH_MOVE, this.moveArea_mouseMoveHandler, this), t.UIGlobals.stage.removeEventListener(t.TouchEvent.TOUCH_END, this.moveArea_mouseUpHandler, this), t.UIGlobals.stage.removeEventListener(t.Event.LEAVE_STAGE, this.moveArea_mouseUpHandler, this), this._autoBackToStage && this.adjustPosForStage(), t.LayoutUtil.adjustRelativeByXY(this), this.includeInLayout = !0
			}, i.prototype.adjustPosForStage = function() {
				if (this.moveArea && this.stage) {
					var t = this.moveArea.localToGlobal(0, 0),
						e = t.x,
						i = t.y;
					35 > t.x + this.moveArea.width && (e = 35 - this.moveArea.width), t.x > this.stage.stageWidth - 20 && (e = this.stage.stageWidth - 20), 20 > t.y + this.moveArea.height && (i = 20 - this.moveArea.height), t.y > this.stage.stageHeight - 20 && (i = this.stage.stageHeight - 20), this.x += e - t.x, this.y += i - t.y
				}
			}, i
		}(t.Panel);
	t.TitleWindow = e
}(ns_egret || (ns_egret = {})), __extends = this.__extends ||
function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype, t.prototype = new i
}, function(t) {
	var e = function(e) {
			function i() {
				e.call(this), this._contentText = this._secondButtonLabel = this._firstButtonLabel = ""
			}
			return __extends(i, e), i.show = function(e, n, o, s, r, a, h) {
				"undefined" == typeof e && (e = ""), "undefined" == typeof n && (n = ""), "undefined" == typeof o && (o = null), "undefined" == typeof s && (s = "??????"), "undefined" == typeof r && (r = ""), "undefined" == typeof a && (a = !0), "undefined" == typeof h && (h = !0);
				var l = new i;
				return l.contentText = e, l.title = n, l._firstButtonLabel = s, l._secondButtonLabel = r, l.closeHandler = o, t.PopUpManager.addPopUp(l, a, h), l
			}, Object.defineProperty(i.prototype, "firstButtonLabel", {
				get: function() {
					return this._firstButtonLabel
				},
				set: function(t) {
					this._firstButtonLabel != t && (this._firstButtonLabel = t, this.firstButton && (this.firstButton.label = t))
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "secondButtonLabel", {
				get: function() {
					return this._secondButtonLabel
				},
				set: function(t) {
					this._secondButtonLabel == t || (this._secondButtonLabel = t, !this.secondButton || null != t && "" != t) || (this.secondButton.includeInLayout = this.secondButton.visible = "" != this._secondButtonLabel && null != this._secondButtonLabel)
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "contentText", {
				get: function() {
					return this._contentText
				},
				set: function(t) {
					this._contentText != t && (this._contentText = t, this.contentDisplay && (this.contentDisplay.text = t))
				},
				enumerable: !0,
				configurable: !0
			}), i.prototype.onClose = function(e) {
				if (t.PopUpManager.removePopUp(this), null != this.closeHandler) {
					var n = new t.CloseEvent(t.CloseEvent.CLOSE);
					switch (e.currentTarget) {
					case this.firstButton:
						n.detail = i.FIRST_BUTTON;
						break;
					case this.secondButton:
						n.detail = i.SECOND_BUTTON
					}
					this.closeHandler(n)
				}
			}, i.prototype.closeButton_clickHandler = function(n) {
				e.prototype.closeButton_clickHandler.call(this, n), t.PopUpManager.removePopUp(this), n = new t.CloseEvent(t.CloseEvent.CLOSE, !1, !1, i.CLOSE_BUTTON), null != this.closeHandler && this.closeHandler(n)
			}, i.prototype.partAdded = function(i, n) {
				e.prototype.partAdded.call(this, i, n), n == this.contentDisplay ? this.contentDisplay.text = this._contentText : n == this.firstButton ? (this.firstButton.label = this._firstButtonLabel, this.firstButton.addEventListener(t.TouchEvent.TOUCH_TAP, this.onClose, this)) : n == this.secondButton && (this.secondButton.label = this._secondButtonLabel, this.secondButton.includeInLayout = this.secondButton.visible = "" != this._secondButtonLabel && null != this._secondButtonLabel, this.secondButton.addEventListener(t.TouchEvent.TOUCH_TAP, this.onClose, this))
			}, i.prototype.partRemoved = function(i, n) {
				e.prototype.partRemoved.call(this, i, n), n == this.firstButton ? this.firstButton.removeEventListener(t.TouchEvent.TOUCH_TAP, this.onClose, this) : n == this.secondButton && this.secondButton.removeEventListener(t.TouchEvent.TOUCH_TAP, this.onClose, this)
			}, i.FIRST_BUTTON = "firstButton", i.SECOND_BUTTON = "secondButton", i.CLOSE_BUTTON = "closeButton", i
		}(t.TitleWindow);
	t.Alert = e
}(ns_egret || (ns_egret = {})), __extends = this.__extends ||
function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype, t.prototype = new i
}, function(t) {
	var e = function(e) {
			function i() {
				e.call(this), this._slideDuration = 500, this._direction = t.ProgressBarDirection.LEFT_TO_RIGHT, this.trackResizedOrMoved = !1
			}
			return __extends(i, e), Object.defineProperty(i.prototype, "labelFunction", {
				get: function() {
					return this._labelFunction
				},
				set: function(t) {
					this._labelFunction != t && (this._labelFunction = t, this.invalidateDisplayList())
				},
				enumerable: !0,
				configurable: !0
			}), i.prototype.valueToLabel = function(t, e) {
				return null != this.labelFunction ? this._labelFunction(t, e) : t + " / " + e
			}, Object.defineProperty(i.prototype, "slideDuration", {
				get: function() {
					return this._slideDuration
				},
				set: function(t) {
					this._slideDuration != t && (this._slideDuration = t, this.animator && this.animator.isPlaying && (this.animator.stop(), this._setValue(this.slideToValue)))
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "direction", {
				get: function() {
					return this._direction
				},
				set: function(t) {
					this._direction != t && (this._direction = t, this.invalidateDisplayList())
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "value", {
				get: function() {
					return this._getValue()
				},
				set: function(e) {
					this._getValue() != e && (0 != this._slideDuration && this.stage ? (this.validateProperties(), this.slideToValue = this.nearestValidValue(e, this.snapInterval), this.slideToValue != this._getValue() && (this.animator || (this.animator = new t.Animation(this.animationUpdateHandler, this)), this.animator.isPlaying && (this.setValue(this.nearestValidValue(this.animator.motionPaths[0].valueTo, this.snapInterval)), this.animator.stop()), e = this._slideDuration * (Math.abs(this._getValue() - this.slideToValue) / (this.maximum - this.minimum)), this.animator.duration = 1 / 0 === e ? 0 : e, this.animator.motionPaths = [{
						prop: "value",
						from: this._getValue(),
						to: this.slideToValue
					}], this.animator.play())) : this._setValue(e))
				},
				enumerable: !0,
				configurable: !0
			}), i.prototype.animationUpdateHandler = function(t) {
				this.setValue(this.nearestValidValue(t.currentValue.value, this.snapInterval))
			}, i.prototype.setValue = function(t) {
				e.prototype.setValue.call(this, t), this.invalidateDisplayList()
			}, i.prototype.updateDisplayList = function(t, i) {
				e.prototype.updateDisplayList.call(this, t, i), this.updateSkinDisplayList()
			}, i.prototype.partAdded = function(e, i) {
				i == this.track && this.track instanceof t.UIComponent && (this.track.addEventListener(t.ResizeEvent.RESIZE, this.onTrackResizeOrMove, this), this.track.addEventListener(t.MoveEvent.MOVE, this.onTrackResizeOrMove, this))
			}, i.prototype.partRemoved = function(e, i) {
				i == this.track && this.track instanceof t.UIComponent && (this.track.removeEventListener(t.ResizeEvent.RESIZE, this.onTrackResizeOrMove, this), this.track.removeEventListener(t.MoveEvent.MOVE, this.onTrackResizeOrMove, this))
			}, i.prototype.onTrackResizeOrMove = function() {
				this.trackResizedOrMoved = !0, this.invalidateProperties()
			}, i.prototype.commitProperties = function() {
				e.prototype.commitProperties.call(this), this.trackResizedOrMoved && (this.trackResizedOrMoved = !1, this.updateSkinDisplayList())
			}, i.prototype.updateSkinDisplayList = function() {

				this.trackResizedOrMoved = !1;
				var e = isNaN(this.value) ? 0 : this.value,
					i = isNaN(this.maximum) ? 0 : this.maximum;
				if (this.thumb && this.track) {
					var n = isNaN(this.track.width) ? 0 : this.track.width,
						n = n * this.track.scaleX,
						o = isNaN(this.track.height) ? 0 : this.track.height,
						o = o * this.track.scaleY,
						s = Math.round(e / i * n);
					(isNaN(s) || 0 > s || 1 / 0 === s) && (s = 0);
					var r = Math.round(e / i * o);
					(isNaN(r) || 0 > r || 1 / 0 === r) && (r = 0);
					var a = this.track.localToGlobal(0, 0),
						h = this.globalToLocal(a.x, a.y),
						a = h.x,
						h = h.y;
					switch (this._direction) {
					case t.ProgressBarDirection.LEFT_TO_RIGHT:
						this.thumb.width = s, this.thumb.x = a;
						break;
					case t.ProgressBarDirection.RIGHT_TO_LEFT:
						this.thumb.width = s, this.thumb.x = a + n - s;
						break;
					case t.ProgressBarDirection.TOP_TO_BOTTOM:
						this.thumb.height = r, this.thumb.y = h;
						break;
					case t.ProgressBarDirection.BOTTOM_TO_TOP:
						this.thumb.height = r, this.thumb.y = h + o - r
					}
				}
				this.labelDisplay && (this.labelDisplay.text = this.valueToLabel(e, i))
			}, i
		}(t.Range);
	t.ProgressBar = e
}(ns_egret || (ns_egret = {})), function(t) {
	var e = function() {
			function t() {}
			return t.LEFT_TO_RIGHT = "leftToRight", t.RIGHT_TO_LEFT = "rightToLeft", t.TOP_TO_BOTTOM = "topToBottom", t.BOTTOM_TO_TOP = "bottomToTop", t
		}();
	t.ProgressBarDirection = e
}(ns_egret || (ns_egret = {})), __extends = this.__extends ||
function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype, t.prototype = new i
}, function(t) {
	var e = function(t) {
			function e() {
				t.call(this)
			}
			return __extends(e, t), e.prototype.pointToValue = function(t) {
				if (!this.thumb || !this.track) return 0;
				var e = this.maximum - this.minimum,
					i = this.track.layoutBoundsWidth - this.thumb.layoutBoundsWidth;
				return this.minimum + (0 != i ? t / i * e : 0)
			}, e.prototype.updateSkinDisplayList = function() {
				if (this.thumb && this.track) {
					var t = this.track.layoutBoundsWidth - this.thumb.layoutBoundsWidth,
						e = this.maximum - this.minimum,
						t = e > 0 ? (this.pendingValue - this.minimum) / e * t : 0,
						i = this.track.localToGlobal(t, 0),
						e = i.x,
						i = i.y,
						n = this.thumb.parent.globalToLocal(e, i).x;
					this.thumb.setLayoutBoundsPosition(Math.round(n), this.thumb.layoutBoundsY), this.showTrackHighlight && this.trackHighlight && this.trackHighlight.parent && (e = this.trackHighlight.parent.globalToLocal(e, i).x - t, this.trackHighlight.x = Math.round(e), this.trackHighlight.width = Math.round(t))
				}
			}, e
		}(t.SliderBase);
	t.HSlider = e
}(ns_egret || (ns_egret = {})), __extends = this.__extends ||
function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype, t.prototype = new i
}, function(t) {
	var e = function(t) {
			function e() {
				t.call(this)
			}
			return __extends(e, t), e.prototype.pointToValue = function(t, e) {
				if (!this.thumb || !this.track) return 0;
				var i = this.maximum - this.minimum,
					n = this.track.layoutBoundsHeight - this.thumb.layoutBoundsHeight;
				return this.minimum + (0 != n ? (n - e) / n * i : 0)
			}, e.prototype.updateSkinDisplayList = function() {
				if (this.thumb && this.track) {
					var t = this.track.layoutBoundsHeight - this.thumb.layoutBoundsHeight,
						e = this.maximum - this.minimum,
						t = e > 0 ? t - (this.pendingValue - this.minimum) / e * t : 0,
						i = this.track.localToGlobal(0, t),
						e = i.x,
						i = i.y,
						n = this.thumb.parent.globalToLocal(e, i).y;
					this.thumb.setLayoutBoundsPosition(this.thumb.layoutBoundsX, Math.round(n)), this.showTrackHighlight && this.trackHighlight && this.trackHighlight.parent && (e = this.trackHighlight.parent.globalToLocal(e, i).y - t, this.trackHighlight.y = Math.round(e), this.trackHighlight.height = Math.round(t))
				}
			}, e
		}(t.SliderBase);
	t.VSlider = e
}(ns_egret || (ns_egret = {})), __extends = this.__extends ||
function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype, t.prototype = new i
}, function(t) {
	var e = function(e) {
			function i() {
				e.call(this), this._allowMultipleSelection = !1, this._selectedIndices = [], this.useVirtualLayout = this.captureItemRenderer = !0
			}
			return __extends(i, e), i.prototype.createChildren = function() {
				this.itemRenderer || (this.itemRenderer = t.DataGroup.defaultRendererFactory), e.prototype.createChildren.call(this)
			}, Object.defineProperty(i.prototype, "useVirtualLayout", {
				get: function() {
					return this._getUseVirtualLayout()
				},
				set: function(t) {
					this._setUseVirtualLayout(t)
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "allowMultipleSelection", {
				get: function() {
					return this._allowMultipleSelection
				},
				set: function(t) {
					this._allowMultipleSelection = t
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "selectedIndices", {
				get: function() {
					return this._proposedSelectedIndices ? this._proposedSelectedIndices : this._selectedIndices
				},
				set: function(t) {
					this._setSelectedIndices(t, !1)
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "selectedIndex", {
				get: function() {
					return this._proposedSelectedIndices ? 0 < this._proposedSelectedIndices.length ? this._proposedSelectedIndices[0] : -1 : this._getSelectedIndex()
				},
				set: function(t) {
					this._setSelectedIndex(t)
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "selectedItems", {
				get: function() {
					var t = [],
						e = this.selectedIndices;
					if (e) for (var i = e.length, n = 0; i > n; n++) t[n] = this.dataProvider.getItemAt(e[n]);
					return t
				},
				set: function(t) {
					var e = [];
					if (t) for (var i = t.length, n = 0; i > n; n++) {
						var o = this.dataProvider.getItemIndex(t[n]);
						if (-1 != o && e.splice(0, 0, o), -1 == o) {
							e = [];
							break
						}
					}
					this._setSelectedIndices(e, !1)
				},
				enumerable: !0,
				configurable: !0
			}), i.prototype._setSelectedIndices = function(t, e) {
				"undefined" == typeof e && (e = !1), e && (this.dispatchChangeAfterSelection = this.dispatchChangeAfterSelection || e), this._proposedSelectedIndices = t ? t : [], this.invalidateProperties()
			}, i.prototype.commitProperties = function() {
				e.prototype.commitProperties.call(this), this._proposedSelectedIndices && this.commitSelection()
			}, i.prototype.commitSelection = function(i) {
				"undefined" == typeof i && (i = !0);
				var n = this._selectedIndex;
				if (this._proposedSelectedIndices) {
					if (this._proposedSelectedIndices = this._proposedSelectedIndices.filter(this.isValidIndex), !this.allowMultipleSelection && 0 < this._proposedSelectedIndices.length) {
						var o = [];
						o.push(this._proposedSelectedIndices[0]), this._proposedSelectedIndices = o
					}
					this._proposedSelectedIndex = 0 < this._proposedSelectedIndices.length ? this._proposedSelectedIndices[0] : -1
				}
				return (o = e.prototype.commitSelection.call(this, !1)) ? (this.selectedIndex > t.ListBase.NO_SELECTION && (this._proposedSelectedIndices ? -1 == this._proposedSelectedIndices.indexOf(this.selectedIndex) && this._proposedSelectedIndices.push(this.selectedIndex) : this._proposedSelectedIndices = [this.selectedIndex]), this._proposedSelectedIndices && (-1 != this._proposedSelectedIndices.indexOf(n) && this.itemSelected(n, !0), this.commitMultipleSelection()), i && o && (this.dispatchChangeAfterSelection && (i = new t.IndexChangeEvent(t.IndexChangeEvent.CHANGE), i.oldIndex = n, i.newIndex = this._selectedIndex, this.dispatchEvent(i), this.dispatchChangeAfterSelection = !1), this.dispatchEvent(new t.UIEvent(t.UIEvent.VALUE_COMMIT))), o) : (this._proposedSelectedIndices = null, !1)
			}, i.prototype.isValidIndex = function(t) {
				return this.dataProvider && t >= 0 && t < this.dataProvider.length
			}, i.prototype.commitMultipleSelection = function() {
				var t, e, i = [],
					n = [];
				if (0 < this._selectedIndices.length && 0 < this._proposedSelectedIndices.length) {
					for (e = this._proposedSelectedIndices.length, t = 0; e > t; t++) - 1 == this._selectedIndices.indexOf(this._proposedSelectedIndices[t]) && n.push(this._proposedSelectedIndices[t]);
					for (e = this._selectedIndices.length, t = 0; e > t; t++) - 1 == this._proposedSelectedIndices.indexOf(this._selectedIndices[t]) && i.push(this._selectedIndices[t])
				} else 0 < this._selectedIndices.length ? i = this._selectedIndices : 0 < this._proposedSelectedIndices.length && (n = this._proposedSelectedIndices);
				if (this._selectedIndices = this._proposedSelectedIndices, 0 < i.length) for (e = i.length, t = 0; e > t; t++) this.itemSelected(i[t], !1);
				if (0 < n.length) for (e = n.length, t = 0; e > t; t++) this.itemSelected(n[t], !0);
				this._proposedSelectedIndices = null
			}, i.prototype.isItemIndexSelected = function(t) {
				return this._allowMultipleSelection ? -1 != this._selectedIndices.indexOf(t) : e.prototype.isItemIndexSelected.call(this, t)
			}, i.prototype.dataGroup_rendererAddHandler = function(i) {
				e.prototype.dataGroup_rendererAddHandler.call(this, i), i = i.renderer, null != i && (i.addEventListener(t.TouchEvent.TOUCH_BEGAN, this.item_mouseDownHandler, this), i.addEventListener(t.TouchEvent.TOUCH_END, this.item_mouseUpHandler, this))
			}, i.prototype.dataGroup_rendererRemoveHandler = function(i) {
				e.prototype.dataGroup_rendererRemoveHandler.call(this, i), i = i.renderer, null != i && (i.removeEventListener(t.TouchEvent.TOUCH_BEGAN, this.item_mouseDownHandler, this), i.removeEventListener(t.TouchEvent.TOUCH_END, this.item_mouseUpHandler, this))
			}, i.prototype.item_mouseDownHandler = function(e) {
				if (!e.isDefaultPrevented()) {
					var i, n = e.currentTarget;
					i = n ? n.itemIndex : this.dataGroup.getElementIndex(e.currentTarget), this._allowMultipleSelection ? this._setSelectedIndices(this.calculateSelectedIndices(i, e.shiftKey, e.ctrlKey), !0) : this._setSelectedIndex(i, !0), this.captureItemRenderer && (this.mouseDownItemRenderer = n, t.UIGlobals.stage.addEventListener(t.TouchEvent.TOUCH_END, this.stage_mouseUpHandler, this), t.UIGlobals.stage.addEventListener(t.Event.LEAVE_STAGE, this.stage_mouseUpHandler, this))
				}
			}, i.prototype.calculateSelectedIndices = function(t, e, i) {
				var n = [];
				if (e) if (e = 0 < this._selectedIndices.length ? this._selectedIndices[this._selectedIndices.length - 1] : 0, t > e) for (; t >= e; e++) n.splice(0, 0, e);
				else for (; e >= t; e--) n.splice(0, 0, e);
				else if (i) if (0 < this._selectedIndices.length) if (1 == this._selectedIndices.length && this._selectedIndices[0] == t) {
					if (!this.requireSelection) return n;
					n.splice(0, 0, this._selectedIndices[0])
				} else {
					for (i = !1, e = 0; e < this._selectedIndices.length; e++) this._selectedIndices[e] == t ? i = !0 : this._selectedIndices[e] != t && n.splice(0, 0, this._selectedIndices[e]);
					i || n.splice(0, 0, t)
				} else n.splice(0, 0, t);
				else n.splice(0, 0, t);
				return n
			}, i.prototype.item_mouseUpHandler = function(e) {
				var i = e.currentTarget;
				i == this.mouseDownItemRenderer && this.dispatchListEvent(e, t.ListEvent.ITEM_CLICK, i)
			}, i.prototype.stage_mouseUpHandler = function() {
				t.UIGlobals.stage.removeEventListener(t.TouchEvent.TOUCH_END, this.stage_mouseUpHandler, this), t.UIGlobals.stage.removeEventListener(t.Event.LEAVE_STAGE, this.stage_mouseUpHandler, this), this.mouseDownItemRenderer = null
			}, i
		}(t.ListBase);
	t.List = e
}(ns_egret || (ns_egret = {})), __extends = this.__extends ||
function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype, t.prototype = new i
}, function(t) {
	var e = function(e) {
			function i() {
				e.call(this), this._displayPopUp = this._popUpWidthMatchesAnchorWidth = this._popUpHeightMatchesAnchorHeight = this.addedToStage = this.popUpIsDisplayed = !1, this._popUpPosition = t.PopUpPosition.TOP_LEFT, this.inAnimation = !1, this._animator = null, this._openDuration = 250, this._closeDuration = 150, this.inUpdating = !1, this.valueRange = 1, this.addEventListener(t.Event.ADDED_TO_STAGE, this.addedToStageHandler, this), this.addEventListener(t.Event.REMOVED_FROM_STAGE, this.removedFromStageHandler, this)
			}
			return __extends(i, e), Object.defineProperty(i.prototype, "popUpHeightMatchesAnchorHeight", {
				get: function() {
					return this._popUpHeightMatchesAnchorHeight
				},
				set: function(t) {
					this._popUpHeightMatchesAnchorHeight != t && (this._popUpHeightMatchesAnchorHeight = t, this.invalidateDisplayList())
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "popUpWidthMatchesAnchorWidth", {
				get: function() {
					return this._popUpWidthMatchesAnchorWidth
				},
				set: function(t) {
					this._popUpWidthMatchesAnchorWidth != t && (this._popUpWidthMatchesAnchorWidth = t, this.invalidateDisplayList())
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "displayPopUp", {
				get: function() {
					return this._displayPopUp
				},
				set: function(t) {
					this._displayPopUp != t && (this._displayPopUp = t, this.addOrRemovePopUp())
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "popUp", {
				get: function() {
					return this._popUp
				},
				set: function(e) {
					this._popUp != e && (this._popUp = e, this.dispatchEvent(new t.Event("popUpChanged")))
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "popUpPosition", {
				get: function() {
					return this._popUpPosition
				},
				set: function(t) {
					this._popUpPosition != t && (this._popUpPosition = t, this.invalidateDisplayList())
				},
				enumerable: !0,
				configurable: !0
			}), i.prototype.updateDisplayList = function(t, i) {
				e.prototype.updateDisplayList.call(this, t, i), this.applyPopUpTransform(t, i)
			}, i.prototype.updatePopUpTransform = function() {
				this.applyPopUpTransform(this.width, this.height)
			}, i.prototype.calculatePopUpPosition = function() {
				var e = new t.Point;
				switch (this._popUpPosition) {
				case t.PopUpPosition.BELOW:
					e.x = 0, e.y = this.height;
					break;
				case t.PopUpPosition.ABOVE:
					e.x = 0, e.y = -this.popUp.layoutBoundsHeight;
					break;
				case t.PopUpPosition.LEFT:
					e.x = -this.popUp.layoutBoundsWidth, e.y = 0;
					break;
				case t.PopUpPosition.RIGHT:
					e.x = this.width, e.y = 0;
					break;
				case t.PopUpPosition.CENTER:
					e.x = .5 * (this.width - this.popUp.layoutBoundsWidth), e.y = .5 * (this.height - this.popUp.layoutBoundsHeight)
				}
				return e = this.localToGlobal(e.x, e.y), e = this.popUp.parent.globalToLocal(e.x, e.y)
			}, Object.defineProperty(i.prototype, "animator", {
				get: function() {
					return this._animator ? this._animator : (this._animator = new t.Animation(this.animationUpdateHandler, this), this._animator.endFunction = this.animationEndHandler, this._animator.startFunction = this.animationStartHandler, this._animator)
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "openDuration", {
				get: function() {
					return this._openDuration
				},
				set: function(t) {
					this._openDuration = t
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "closeDuration", {
				get: function() {
					return this._closeDuration
				},
				set: function(t) {
					this._closeDuration = t
				},
				enumerable: !0,
				configurable: !0
			}), i.prototype.animationStartHandler = function() {
				this.inAnimation = !0, this.popUp.addEventListener("scrollRectChange", this.onScrollRectChange, this), this.popUp && "enabled" in this.popUp && (this.popUp.enabled = !1)
			}, i.prototype.onScrollRectChange = function() {
				this.inUpdating || (this.inUpdating = !0, this.popUp.scrollRect = new t.Rectangle(Math.round(this.animator.currentValue.x), Math.round(this.animator.currentValue.y), this.popUp.width, this.popUp.height), this.inUpdating = !1)
			}, i.prototype.animationUpdateHandler = function(e) {
				this.inUpdating = !0, this.popUp.scrollRect = new t.Rectangle(Math.round(e.currentValue.x), Math.round(e.currentValue.y), this.popUp.width, this.popUp.height), this.inUpdating = !1
			}, i.prototype.animationEndHandler = function() {
				this.inAnimation = !1, this.popUp.removeEventListener("scrollRectChange", this.onScrollRectChange, this), this.popUp && "enabled" in this.popUp && (this.popUp.enabled = !0), this.popUp.scrollRect = null, this.popUpIsDisplayed || (t.PopUpManager.removePopUp(this.popUp), this.popUp.ownerChanged(null))
			}, i.prototype.addOrRemovePopUp = function() {
				this.addedToStage && this.popUp && (null == this.popUp.parent && this.displayPopUp ? (t.PopUpManager.addPopUp(this.popUp, !1, !1), this.popUp.ownerChanged(this), this.popUpIsDisplayed = !0, this.inAnimation && this.animator.end(), this.initialized ? (this.applyPopUpTransform(this.width, this.height), 0 < this._openDuration && this.startAnimation()) : t.callLater(function() {
					0 < this.openDuration && this.startAnimation()
				}, this)) : null != this.popUp.parent && !this.displayPopUp && this.removeAndResetPopUp())
			}, i.prototype.removeAndResetPopUp = function() {
				this.inAnimation && this.animator.end(), this.popUpIsDisplayed = !1, 0 < this._closeDuration ? this.startAnimation() : (t.PopUpManager.removePopUp(this.popUp), this.popUp.ownerChanged(null))
			}, i.prototype.applyPopUpTransform = function(t, e) {
				if (this.popUpIsDisplayed) {
					this.popUpWidthMatchesAnchorWidth && (this.popUp.width = t), this.popUpHeightMatchesAnchorHeight && (this.popUp.height = e), "validateNow" in this.popUp && this.popUp.validateNow();
					var i = this.calculatePopUpPosition();
					this.popUp.x = i.x, this.popUp.y = i.y
				}
			}, i.prototype.startAnimation = function() {
				this.animator.motionPaths = this.createMotionPath(), this.animator.duration = this.popUpIsDisplayed ? this._openDuration : this._closeDuration, this.animator.play()
			}, i.prototype.createMotionPath = function() {
				var e = {
					prop: "x"
				},
					i = {
						prop: "y"
					},
					n = [e, i];
				switch (this._popUpPosition) {
				case t.PopUpPosition.TOP_LEFT:
				case t.PopUpPosition.CENTER:
				case t.PopUpPosition.BELOW:
					e.from = e.to = 0, i.from = this.popUp.height, i.to = 0, this.valueRange = this.popUp.height;
					break;
				case t.PopUpPosition.ABOVE:
					e.from = e.to = 0, i.from = -this.popUp.height, i.to = 0, this.valueRange = this.popUp.height;
					break;
				case t.PopUpPosition.LEFT:
					i.from = i.to = 0, e.from = -this.popUp.width, e.to = 0, this.valueRange = this.popUp.width;
					break;
				case t.PopUpPosition.RIGHT:
					i.from = i.to = 0, e.from = this.popUp.width, e.to = 0, this.valueRange = this.popUp.width;
					break;
				default:
					this.valueRange = 1
				}
				if (this.valueRange = Math.abs(this.valueRange), !this.popUpIsDisplayed) {
					var o = e.from;
					e.from = e.to, e.to = o, o = i.from, i.from = i.to, i.to = o
				}
				return n
			}, i.prototype.addedToStageHandler = function() {
				this.addedToStage = !0, t.callLater(this.checkPopUpState, this)
			}, i.prototype.checkPopUpState = function() {
				this.addedToStage ? this.addOrRemovePopUp() : null != this.popUp && null != this.popUp.parent && this.removeAndResetPopUp()
			}, i.prototype.removedFromStageHandler = function() {
				this.addedToStage = !1, t.callLater(this.checkPopUpState, this)
			}, i
		}(t.UIComponent);
	t.PopUpAnchor = e
}(ns_egret || (ns_egret = {})), __extends = this.__extends ||
function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype, t.prototype = new i
}, function(t) {
	var e = function(e) {
			function i() {
				e.call(this), this._isOpen = !1, this._closeOnResize = !0, this._rollOverOpenDelay = 0 / 0
			}
			return __extends(i, e), Object.defineProperty(i.prototype, "openButton", {
				get: function() {
					return this._openButton
				},
				set: function(t) {
					this._openButton !== t && (this.removeOpenTriggers(), this._openButton = t, this.addOpenTriggers())
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "dropDown", {
				get: function() {
					return this._dropDown
				},
				set: function(t) {
					this._dropDown !== t && (this._dropDown = t)
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "isOpen", {
				get: function() {
					return this._isOpen
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "closeOnResize", {
				get: function() {
					return this._closeOnResize
				},
				set: function(t) {
					this._closeOnResize != t && (this.isOpen && this.removeCloseOnResizeTrigger(), this._closeOnResize = t, this.addCloseOnResizeTrigger())
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "rollOverOpenDelay", {
				get: function() {
					return this._rollOverOpenDelay
				},
				set: function(t) {
					this._rollOverOpenDelay != t && (this.removeOpenTriggers(), this._rollOverOpenDelay = t, this.addOpenTriggers())
				},
				enumerable: !0,
				configurable: !0
			}), i.prototype.addOpenTriggers = function() {
				this.openButton && (isNaN(this.rollOverOpenDelay) ? this.openButton.addEventListener(t.UIEvent.BUTTON_DOWN, this.openButton_buttonDownHandler, this) : this.openButton.addEventListener(t.TouchEvent.TOUCH_ROLL_OVER, this.openButton_rollOverHandler, this))
			}, i.prototype.removeOpenTriggers = function() {
				this.openButton && (isNaN(this.rollOverOpenDelay) ? this.openButton.removeEventListener(t.UIEvent.BUTTON_DOWN, this.openButton_buttonDownHandler, this) : this.openButton.removeEventListener(t.TouchEvent.TOUCH_ROLL_OVER, this.openButton_rollOverHandler, this))
			}, i.prototype.addCloseTriggers = function() {
				t.UIGlobals.stage && (isNaN(this.rollOverOpenDelay) ? (t.UIGlobals.stage.addEventListener(t.TouchEvent.TOUCH_BEGAN, this.stage_mouseDownHandler, this), t.UIGlobals.stage.addEventListener(t.TouchEvent.TOUCH_END, this.stage_mouseUpHandler_noRollOverOpenDelay, this)) : t.UIGlobals.stage.addEventListener(t.TouchEvent.TOUCH_MOVE, this.stage_mouseMoveHandler, this), this.addCloseOnResizeTrigger())
			}, i.prototype.removeCloseTriggers = function() {
				t.UIGlobals.stage && (isNaN(this.rollOverOpenDelay) ? (t.UIGlobals.stage.removeEventListener(t.TouchEvent.TOUCH_BEGAN, this.stage_mouseDownHandler, this), t.UIGlobals.stage.removeEventListener(t.TouchEvent.TOUCH_END, this.stage_mouseUpHandler_noRollOverOpenDelay, this)) : (t.UIGlobals.stage.removeEventListener(t.TouchEvent.TOUCH_MOVE, this.stage_mouseMoveHandler, this), t.UIGlobals.stage.removeEventListener(t.TouchEvent.TOUCH_END, this.stage_mouseUpHandler, this), t.UIGlobals.stage.removeEventListener(t.Event.LEAVE_STAGE, this.stage_mouseUpHandler, this)), this.removeCloseOnResizeTrigger())
			}, i.prototype.addCloseOnResizeTrigger = function() {
				this.closeOnResize && t.UIGlobals.stage.addEventListener(t.Event.RESIZE, this.stage_resizeHandler, this)
			}, i.prototype.removeCloseOnResizeTrigger = function() {
				this.closeOnResize && t.UIGlobals.stage.removeEventListener(t.Event.RESIZE, this.stage_resizeHandler, this)
			}, i.prototype.isTargetOverDropDownOrOpenButton = function(e) {
				if (e) {
					if (this.openButton && this.openButton.contains(e)) return !0;
					if (null != this.hitAreaAdditions) for (var i = 0; i < this.hitAreaAdditions.length; i++) if (this.hitAreaAdditions[i] == e || this.hitAreaAdditions[i] instanceof t.DisplayObjectContainer && this.hitAreaAdditions[i].contains(e)) return !0;
					if (this.dropDown instanceof t.DisplayObjectContainer) {
						if (this.dropDown.contains(e)) return !0
					} else if (e == this.dropDown) return !0
				}
				return !1
			}, i.prototype.openDropDown = function() {
				this.openDropDownHelper()
			}, i.prototype.openDropDownHelper = function() {
				this.isOpen || (this.addCloseTriggers(), this._isOpen = !0, this.openButton && this.openButton.keepDown(!0), this.dispatchEvent(new t.UIEvent(t.UIEvent.OPEN)))
			}, i.prototype.closeDropDown = function(e) {
				if (this.isOpen) {
					this._isOpen = !1, this.openButton && this.openButton.keepDown(!1);
					var i = new t.UIEvent(t.UIEvent.CLOSE, !1, !0);
					e || i.preventDefault(), this.dispatchEvent(i), this.removeCloseTriggers()
				}
			}, i.prototype.openButton_buttonDownHandler = function() {
				this.isOpen ? this.closeDropDown(!0) : (this.mouseIsDown = !0, this.openDropDownHelper())
			}, i.prototype.openButton_rollOverHandler = function() {
				0 == this.rollOverOpenDelay ? this.openDropDownHelper() : (this.openButton.addEventListener(t.TouchEvent.TOUCH_ROLL_OUT, this.openButton_rollOutHandler, this), this.rollOverOpenDelayTimer = new t.Timer(this.rollOverOpenDelay, 1), this.rollOverOpenDelayTimer.addEventListener(t.TimerEvent.TIMER_COMPLETE, this.rollOverDelay_timerCompleteHandler, this), this.rollOverOpenDelayTimer.start())
			}, i.prototype.openButton_rollOutHandler = function() {
				this.rollOverOpenDelayTimer && this.rollOverOpenDelayTimer.running && (this.rollOverOpenDelayTimer.stop(), this.rollOverOpenDelayTimer = null), this.openButton.removeEventListener(t.TouchEvent.TOUCH_ROLL_OUT, this.openButton_rollOutHandler, this)
			}, i.prototype.rollOverDelay_timerCompleteHandler = function() {
				this.openButton.removeEventListener(t.TouchEvent.TOUCH_ROLL_OUT, this.openButton_rollOutHandler, this), this.rollOverOpenDelayTimer = null, this.openDropDownHelper()
			}, i.prototype.stage_mouseDownHandler = function(e) {
				if (this.mouseIsDown) this.mouseIsDown = !1;
				else if (!this.dropDown || this.dropDown && (e.target == this.dropDown || this.dropDown instanceof t.DisplayObjectContainer && !this.dropDown.contains(e.target))) {
					var i = e.target;
					if (!this.openButton || !i || !this.openButton.contains(i)) {
						if (null != this.hitAreaAdditions) for (i = 0; i < this.hitAreaAdditions.length; i++) if (this.hitAreaAdditions[i] == e.target || this.hitAreaAdditions[i] instanceof t.DisplayObjectContainer && this.hitAreaAdditions[i].contains(e.target)) return;
						this.closeDropDown(!0)
					}
				}
			}, i.prototype.stage_mouseMoveHandler = function(e) {
				this.isTargetOverDropDownOrOpenButton(e.target) || (e instanceof t.TouchEvent && e.touchDown ? (t.UIGlobals.stage.addEventListener(t.TouchEvent.TOUCH_END, this.stage_mouseUpHandler, this), t.UIGlobals.stage.addEventListener(t.Event.LEAVE_STAGE, this.stage_mouseUpHandler, this)) : this.closeDropDown(!0))
			}, i.prototype.stage_mouseUpHandler_noRollOverOpenDelay = function() {
				this.mouseIsDown && (this.mouseIsDown = !1)
			}, i.prototype.stage_mouseUpHandler = function(e) {
				this.isTargetOverDropDownOrOpenButton(e.target) ? (t.UIGlobals.stage.removeEventListener(t.TouchEvent.TOUCH_END, this.stage_mouseUpHandler, this), t.UIGlobals.stage.removeEventListener(t.Event.LEAVE_STAGE, this.stage_mouseUpHandler, this)) : this.closeDropDown(!0)
			}, i.prototype.stage_resizeHandler = function() {
				this.closeDropDown(!0)
			}, i.prototype.stage_mouseWheelHandler = function(t) {
				this.dropDown && (!this.dropDown.contains(t.target) || !t.isDefaultPrevented()) && this.closeDropDown(!1)
			}, i
		}(t.EventDispatcher);
	t.DropDownController = e
}(ns_egret || (ns_egret = {})), __extends = this.__extends ||
function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype, t.prototype = new i
}, function(t) {
	var e = function(e) {
			function i() {
				e.call(this), this._labelChanged = !1, this._userProposedSelectedIndex = t.ListBase.NO_SELECTION, this.captureItemRenderer = !1, this.dropDownController = new t.DropDownController
			}
			return __extends(i, e), i.prototype._setDataProvider = function(t) {
				this.dataProvider !== t && (e.prototype._setDataProvider.call(this, t), this._labelChanged = !0, this.invalidateProperties())
			}, i.prototype._setLabelField = function(t) {
				this.labelField != t && (e.prototype._setLabelField.call(this, t), this._labelChanged = !0, this.invalidateProperties())
			}, i.prototype._setLabelFunction = function(t) {
				this.labelFunction != t && (e.prototype._setLabelFunction.call(this, t), this._labelChanged = !0, this.invalidateProperties())
			}, Object.defineProperty(i.prototype, "dropDownController", {
				get: function() {
					return this._dropDownController
				},
				set: function(e) {
					this._dropDownController != e && (this._dropDownController = e, this._dropDownController.addEventListener(t.UIEvent.OPEN, this.dropDownController_openHandler, this), this._dropDownController.addEventListener(t.UIEvent.CLOSE, this.dropDownController_closeHandler, this), this.openButton && (this._dropDownController.openButton = this.openButton), this.dropDown && (this._dropDownController.dropDown = this.dropDown))
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "isDropDownOpen", {
				get: function() {
					return this.dropDownController ? this.dropDownController.isOpen : !1
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "userProposedSelectedIndex", {
				get: function() {
					return this._userProposedSelectedIndex
				},
				set: function(t) {
					this._userProposedSelectedIndex = t
				},
				enumerable: !0,
				configurable: !0
			}), i.prototype.commitProperties = function() {
				e.prototype.commitProperties.call(this), this._labelChanged && (this._labelChanged = !1, this.updateLabelDisplay())
			}, i.prototype.partAdded = function(t, i) {
				e.prototype.partAdded.call(this, t, i), i == this.openButton ? this.dropDownController && (this.dropDownController.openButton = this.openButton) : i == this.dropDown && this.dropDownController && (this.dropDownController.dropDown = this.dropDown)
			}, i.prototype.partRemoved = function(t, i) {
				this.dropDownController && (i == this.openButton && (this.dropDownController.openButton = null), i == this.dropDown && (this.dropDownController.dropDown = null)), e.prototype.partRemoved.call(this, t, i)
			}, i.prototype.getCurrentSkinState = function() {
				return this.enabled ? this.isDropDownOpen ? "open" : "normal" : "disabled"
			}, i.prototype.commitSelection = function(t) {
				return "undefined" == typeof t && (t = !0), t = e.prototype.commitSelection.call(this, t), this.updateLabelDisplay(), t
			}, i.prototype.isItemIndexSelected = function(t) {
				return this.userProposedSelectedIndex == t
			}, i.prototype.openDropDown = function() {
				this.dropDownController.openDropDown()
			}, i.prototype.closeDropDown = function(t) {
				this.dropDownController.closeDropDown(t)
			}, i.prototype.updateLabelDisplay = function() {}, i.prototype.changeHighlightedSelection = function(t) {
				this.itemSelected(this.userProposedSelectedIndex, !1), this.userProposedSelectedIndex = t, this.itemSelected(this.userProposedSelectedIndex, !0)
			}, i.prototype.dataProvider_collectionChangeHandler = function(t) {
				e.prototype.dataProvider_collectionChangeHandler.call(this, t), this._labelChanged = !0, this.invalidateProperties()
			}, i.prototype.item_mouseDownHandler = function(i) {
				e.prototype.item_mouseDownHandler.call(this, i), this.dispatchListEvent(i, t.ListEvent.ITEM_CLICK, i.currentTarget), this.userProposedSelectedIndex = this.selectedIndex, this.closeDropDown(!0)
			}, i.prototype.dropDownController_openHandler = function() {
				this.addEventListener(t.UIEvent.UPDATE_COMPLETE, this.open_updateCompleteHandler, this), this.userProposedSelectedIndex = this.selectedIndex, this.invalidateSkinState()
			}, i.prototype.open_updateCompleteHandler = function() {
				this.removeEventListener(t.UIEvent.UPDATE_COMPLETE, this.open_updateCompleteHandler, this), this.dispatchEvent(new t.UIEvent(t.UIEvent.OPEN))
			}, i.prototype.dropDownController_closeHandler = function(e) {
				this.addEventListener(t.UIEvent.UPDATE_COMPLETE, this.close_updateCompleteHandler, this), this.invalidateSkinState(), e.isDefaultPrevented() ? this.changeHighlightedSelection(this.selectedIndex) : this._setSelectedIndex(this.userProposedSelectedIndex, !0)
			}, i.prototype.close_updateCompleteHandler = function() {
				this.removeEventListener(t.UIEvent.UPDATE_COMPLETE, this.close_updateCompleteHandler, this), this.dispatchEvent(new t.UIEvent(t.UIEvent.CLOSE))
			}, i.PAGE_SIZE = 5, i
		}(t.List);
	t.DropDownListBase = e
}(ns_egret || (ns_egret = {})), __extends = this.__extends ||
function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype, t.prototype = new i
}, function(t) {
	var e = function(e) {
			function i() {
				e.call(this), this.iconFieldOrFunctionChanged = !1
			}
			return __extends(i, e), i.prototype.createChildren = function() {
				this.itemRenderer || (this.itemRenderer = t.TreeItemRenderer), e.prototype.createChildren.call(this)
			}, i.prototype.updateRenderer = function(t, i, n) {
				if ("hasChildren" in t && "hasChildren" in this.dataProvider) {
					var o = this.dataProvider;
					t.hasChildren = o.hasChildren(n), t.opened = o.isItemOpen(n), t.depth = o.getDepth(n), t.iconSkinName = this.itemToIcon(n)
				}
				return e.prototype.updateRenderer.call(this, t, i, n)
			}, i.prototype.itemToIcon = function(e) {
				if (!e) return null;
				if (null != this._iconFunction) return this._iconFunction(e);
				var i;
				if (e instanceof t.XML) try {
					0 != e[this.iconField].length() && (i = e[this.iconField])
				} catch (n) {} else if (e instanceof Object) try {
					e[this.iconField] && (i = e[this.iconField])
				} catch (o) {}
				return i
			}, i.prototype.dataGroup_rendererAddHandler = function(i) {
				e.prototype.dataGroup_rendererAddHandler.call(this, i), i.renderer && "hasChildren" in i.renderer && i.renderer.addEventListener(t.TreeEvent.ITEM_OPENING, this.onItemOpening, this)
			}, i.prototype.onItemOpening = function(e) {
				var i = e.itemRenderer,
					n = e.item,
					o = this._getDataProvider();
				i && o && "hasChildren" in o && this.dispatchEvent(e) && (e = !i.opened, o.expandItem(n, e), i = new t.TreeEvent(e ? t.TreeEvent.ITEM_OPEN : t.TreeEvent.ITEM_CLOSE, !1, !1, i.itemIndex, n, i), this.dispatchEvent(i))
			}, i.prototype.dataGroup_rendererRemoveHandler = function(i) {
				e.prototype.dataGroup_rendererRemoveHandler.call(this, i), i.renderer && "hasChildren" in i.renderer && i.renderer.removeEventListener(t.TreeEvent.ITEM_OPENING, this.onItemOpening, this)
			}, Object.defineProperty(i.prototype, "iconField", {
				get: function() {
					return this._iconField
				},
				set: function(t) {
					this._iconField != t && (this._iconField = t, this.iconFieldOrFunctionChanged = !0, this.invalidateProperties())
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "iconFunction", {
				get: function() {
					return this._iconFunction
				},
				set: function(t) {
					this._iconFunction != t && (this._iconFunction = t, this.iconFieldOrFunctionChanged = !0, this.invalidateProperties())
				},
				enumerable: !0,
				configurable: !0
			}), i.prototype.expandItem = function(t, e) {
				"undefined" == typeof e && (e = !0);
				var i = this._getDataProvider();
				i && "hasChildren" in i && i.expandItem(t, e)
			}, i.prototype.isItemOpen = function(t) {
				var e = this._getDataProvider();
				return e && "hasChildren" in e ? e.isItemOpen(t) : !1
			}, i.prototype.dataProvider_collectionChangeHandler = function(i) {
				if (e.prototype.dataProvider_collectionChangeHandler.call(this, i), i.kind == t.CollectionEventKind.OPEN || i.kind == t.CollectionEventKind.CLOSE) {
					var n = this.dataGroup ? this.dataGroup.getElementAt(i.location) : null;
					n && (this.updateRenderer(n, i.location, i.items[0]), i.kind == t.CollectionEventKind.CLOSE && this.layout && this.layout.useVirtualLayout && (this.layout.clearVirtualLayoutCache(), this.invalidateSize()))
				}
			}, i.prototype.commitProperties = function() {
				if (e.prototype.commitProperties.call(this), this.iconFieldOrFunctionChanged) {
					if (null != this.dataGroup) {
						var t;
						if (this.layout && this.layout.useVirtualLayout) for (var i = this.dataGroup.getElementIndicesInView(), n = i.length, o = 0; n > o; o++) t = i[o], this.updateRendererIconProperty(t);
						else for (i = this.dataGroup.numElements, t = 0; i > t; t++) this.updateRendererIconProperty(t)
					}
					this.iconFieldOrFunctionChanged = !1
				}
			}, i.prototype.updateRendererIconProperty = function(t) {
				(t = this.dataGroup.getElementAt(t)) && (t.iconSkinName = this.itemToIcon(t.data))
			}, i
		}(t.List);
	t.Tree = e
}(ns_egret || (ns_egret = {})), __extends = this.__extends ||
function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype, t.prototype = new i
}, function(t) {
	var e = function(t) {
			function e() {
				t.call(this), this._prompt = ""
			}
			return __extends(e, t), Object.defineProperty(e.prototype, "prompt", {
				get: function() {
					return this._prompt
				},
				set: function(t) {
					this._prompt != t && (this._prompt = t, this._labelChanged = !0, this.invalidateProperties())
				},
				enumerable: !0,
				configurable: !0
			}), e.prototype.partAdded = function(e, i) {
				t.prototype.partAdded.call(this, e, i), i == this.labelDisplay && (this._labelChanged = !0, this.invalidateProperties())
			}, e.prototype.updateLabelDisplay = function(t) {
				"undefined" == typeof t && (t = void 0), this.labelDisplay && (void 0 == t && (t = this.selectedItem), this.labelDisplay.text = null != t && void 0 != t ? this.itemToLabel(t) : this._prompt)
			}, e
		}(t.DropDownListBase);
	t.DropDownList = e
}(ns_egret || (ns_egret = {})), __extends = this.__extends ||
function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype, t.prototype = new i
}, function(t) {
	var e = function(e) {
			function i() {
				e.call(this), this._allowDeselection = !0
			}
			return __extends(i, e), Object.defineProperty(i.prototype, "allowDeselection", {
				get: function() {
					return this._allowDeselection
				},
				set: function(t) {
					this._allowDeselection = t
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "data", {
				get: function() {
					return this._data
				},
				set: function(e) {
					this._data = e, this.dispatchEvent(new t.Event("dataChange"))
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "itemIndex", {
				get: function() {
					return this._itemIndex
				},
				set: function(t) {
					this._itemIndex = t
				},
				enumerable: !0,
				configurable: !0
			}), i.prototype._setLabel = function(t) {
				t != this._getLabel() && (e.prototype._setLabel.call(this, t), this.labelDisplay && (this.labelDisplay.text = this._getLabel()))
			}, i.prototype.buttonReleased = function() {
				(!this.selected || this.allowDeselection) && e.prototype.buttonReleased.call(this)
			}, i
		}(t.ToggleButtonBase);
	t.TabBarButton = e
}(ns_egret || (ns_egret = {})), __extends = this.__extends ||
function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype, t.prototype = new i
}, function(t) {
	var e = function(e) {
			function i() {
				e.call(this), this.requireSelection = !0
			}
			return __extends(i, e), i.prototype.c = function(t) {
				t != this._requireSelection && (e.prototype._setRequireSelection.call(this, t), this.requireSelectionChanged_tabBar = !0, this.invalidateProperties())
			}, i.prototype._setDataProvider = function(i) {
				this.dataProvider instanceof t.ViewStack && (this.dataProvider.removeEventListener("IndexChanged", this.onViewStackIndexChange, this), this.removeEventListener(t.IndexChangeEvent.CHANGE, this.onIndexChanged, this)), i instanceof t.ViewStack && (i.addEventListener("IndexChanged", this.onViewStackIndexChange, this), this.addEventListener(t.IndexChangeEvent.CHANGE, this.onIndexChanged, this)), e.prototype._setDataProvider.call(this, i)
			}, i.prototype.onIndexChanged = function(t) {
				this.dataProvider.setSelectedIndex(t.newIndex, !1)
			}, i.prototype.onViewStackIndexChange = function() {
				this._setSelectedIndex(this.dataProvider.selectedIndex, !1)
			}, i.prototype.commitProperties = function() {
				if (e.prototype.commitProperties.call(this), this.requireSelectionChanged_tabBar && this.dataGroup) {
					this.requireSelectionChanged_tabBar = !1;
					for (var t = this.dataGroup.numElements, i = 0; t > i; i++) {
						var n = this.dataGroup.getElementAt(i);
						n && (n.allowDeselection = !this.requireSelection)
					}
				}
			}, i.prototype.dataGroup_rendererAddHandler = function(i) {
				e.prototype.dataGroup_rendererAddHandler.call(this, i), (i = i.renderer) && (i.addEventListener(t.TouchEvent.TOUCH_TAP, this.item_clickHandler, this), i instanceof t.TabBarButton && (i.allowDeselection = !this.requireSelection))
			}, i.prototype.dataGroup_rendererRemoveHandler = function(i) {
				e.prototype.dataGroup_rendererRemoveHandler.call(this, i), (i = i.renderer) && i.removeEventListener(t.TouchEvent.TOUCH_TAP, this.item_clickHandler, this)
			}, i.prototype.item_clickHandler = function(e) {
				var i, n = e.currentTarget;
				i = n ? n.itemIndex : this.dataGroup.getElementIndex(e.currentTarget), i == this.selectedIndex ? this.requireSelection || this._setSelectedIndex(t.ListBase.NO_SELECTION, !0) : this._setSelectedIndex(i, !0), this.dispatchListEvent(e, t.ListEvent.ITEM_CLICK, n)
			}, i.prototype.createSkinParts = function() {
				this.dataGroup = new t.DataGroup, this.dataGroup.percentHeight = this.dataGroup.percentWidth = 100, this.dataGroup.clipAndEnableScrolling = !0;
				var e = new t.HorizontalLayout;
				e.gap = -1, e.horizontalAlign = t.HorizontalAlign.JUSTIFY, e.verticalAlign = t.VerticalAlign.CONTENT_JUSTIFY, this.dataGroup.layout = e, this._addToDisplayList(this.dataGroup), this.partAdded("dataGroup", this.dataGroup)
			}, i
		}(t.ListBase);
	t.TabBar = e
}(ns_egret || (ns_egret = {})), __extends = this.__extends ||
function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype, t.prototype = new i
}, function(t) {
	var e = function(e) {
			function i() {
				e.call(this), this._horizontalScrollPolicy = this._verticalScrollPolicy = "auto", this._velocityY = this._velocityX = 0, this._previousVelocityX = [], this._previousVelocityY = []
			}
			return __extends(i, e), i.prototype.measure = function() {
				this._viewport && (this.measuredWidth = this._viewport.preferredWidth, this.measuredHeight = this._viewport.preferredHeight)
			}, i.prototype.updateDisplayList = function(t, e) {
				this._viewport.setLayoutBoundsSize(t, e)
			}, Object.defineProperty(i.prototype, "verticalScrollPolicy", {
				get: function() {
					return this._verticalScrollPolicy
				},
				set: function(t) {
					this._verticalScrollPolicy = t
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "horizontalScrollPolicy", {
				get: function() {
					return this._horizontalScrollPolicy
				},
				set: function(t) {
					this._horizontalScrollPolicy = t
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "viewport", {
				get: function() {
					return this._viewport
				},
				set: function(t) {
					t != this._viewport && (this.uninstallViewport(), this._viewport = t, this.installViewport(), this.dispatchEventWith("viewportChanged"))
				},
				enumerable: !0,
				configurable: !0
			}), i.prototype.installViewport = function() {
				this.viewport && (this.viewport.clipAndEnableScrolling = !0, this.viewport.addEventListener(t.TouchEvent.TOUCH_BEGAN, this.onTouchBegan, this), e.prototype.addChildAt.call(this, this.viewport, 0))
			}, i.prototype.uninstallViewport = function() {
				this.viewport && (this.viewport.clipAndEnableScrolling = !1, this.viewport.removeEventListener(t.TouchEvent.TOUCH_BEGAN, this.onTouchBegan, this), e.prototype.removeChild.call(this, this.viewport))
			}, i.prototype.checkScrollPolicy = function() {
				var t = this._viewport;
				switch (this._horizontalScrollPolicy) {
				case "auto":
					this._horizontalCanScroll = t.contentWidth > t.width ? !0 : !1;
					break;
				case "on":
					this._horizontalCanScroll = !0;
					break;
				case "off":
					this._horizontalCanScroll = !1
				}
				switch (this._verticalScrollPolicy) {
				case "auto":
					this._verticalCanScroll = t.contentHeight > t.height ? !0 : !1;
					break;
				case "on":
					this._verticalCanScroll = !0;
					break;
				case "off":
					this._verticalCanScroll = !1
				}
			}, i.prototype.onTouchBegan = function(e) {
				this.verticalAnimator && this.verticalAnimator.isPlaying && this.verticalAnimator.stop(), this.horizontalAnimator && this.horizontalAnimator.isPlaying && this.horizontalAnimator.stop(), this.checkScrollPolicy();
				var i = this._viewport,
					n = i.horizontalScrollPosition,
					i = i.verticalScrollPosition;
				this._offsetPointX = n + e.stageX, this._offsetPointY = i + e.stageY, this._velocityY = this._velocityX = 0, this._previousVelocityX.length = 0, this._previousVelocityY.length = 0, this._previousTouchTime = t.getTimer(), this._previousTouchX = this._startTouchX = this._currentTouchX = e.stageX, this._previousTouchY = this._startTouchY = this._currentTouchY = e.stageY, this._startHorizontalScrollPosition = n, this._startVerticalScrollPosition = i, t.UIGlobals.stage.addEventListener(t.TouchEvent.TOUCH_MOVE, this.onTouchMove, this), t.UIGlobals.stage.addEventListener(t.TouchEvent.TOUCH_END, this.onTouchEnd, this), t.UIGlobals.stage.addEventListener(t.Event.LEAVE_STAGE, this.onTouchEnd, this), this.addEventListener(t.Event.ENTER_FRAME, this.enterFrameHandler, this)
			}, i.prototype.onTouchMove = function(t) {
				this._currentTouchX = t.stageX, this._currentTouchY = t.stageY;
				var e = this._viewport;
				if (this._horizontalCanScroll) {
					var i = this._offsetPointX - t.stageX;
					0 > i && (i *= .5), i > e.contentWidth - e.width && (i = .5 * (i + e.contentWidth - e.width)), e.horizontalScrollPosition = i
				}
				this._verticalCanScroll && (t = this._offsetPointY - t.stageY, 0 > t && (t *= .5), t > e.contentHeight - e.height && (t = .5 * (t + e.contentHeight - e.height)), e.verticalScrollPosition = t)
			}, i.prototype.onTouchEnd = function() {
				t.UIGlobals.stage.removeEventListener(t.TouchEvent.TOUCH_MOVE, this.onTouchMove, this), t.UIGlobals.stage.removeEventListener(t.TouchEvent.TOUCH_END, this.onTouchEnd, this), t.UIGlobals.stage.removeEventListener(t.Event.LEAVE_STAGE, this.onTouchEnd, this), this.removeEventListener(t.Event.ENTER_FRAME, this.enterFrameHandler, this), this._horizontalCanScroll && this.checkHorizontalScrollPosition(), this._verticalCanScroll && this.checkVerticalScrollPosition()
			}, i.easeOut = function(t) {
				return t -= 1, t * t * t + 1
			}, i.prototype.enterFrameHandler = function(e) {
				e = t.getTimer();
				var i = e - this._previousTouchTime;
				i > 0 && (this._previousVelocityX[this._previousVelocityX.length] = this._velocityX, 4 < this._previousVelocityX.length && this._previousVelocityX.shift(), this._previousVelocityY[this._previousVelocityY.length] = this._velocityY, 4 < this._previousVelocityY.length && this._previousVelocityY.shift(), this._velocityX = (this._currentTouchX - this._previousTouchX) / i, this._velocityY = (this._currentTouchY - this._previousTouchY) / i, this._previousTouchTime = e, this._previousTouchX = this._currentTouchX, this._previousTouchY = this._currentTouchY), e = Math.abs(this._currentTouchX - this._startTouchX), i = Math.abs(this._currentTouchY - this._startTouchY), this._horizontalCanScroll && e >= .04 && (this._startTouchX = this._currentTouchX, this._startHorizontalScrollPosition = this._viewport.horizontalScrollPosition), this._verticalCanScroll && i >= .04 && (this._startTouchY = this._currentTouchY, this._startVerticalScrollPosition = this._viewport.verticalScrollPosition)
			}, i.prototype.checkHorizontalScrollPosition = function() {
				for (var t = this._viewport, e = t.horizontalScrollPosition, t = t.contentWidth - t.width, n = 2.33 * this._velocityX, o = this._previousVelocityX.length, s = 2.33, r = 0; o > r; r++) var a = i.VELOCITY_WEIGHTS[r],
					n = n + this._previousVelocityX.shift() * a,
					s = s + a;
				n /= s, .02 >= Math.abs(n) ? this.finishScrollingHorizontally() : (e = this.getAnimationDatas(n, e, t), this.throwHorizontally(e[0], e[1]))
			}, i.prototype.checkVerticalScrollPosition = function() {
				for (var t = this._viewport, e = t.verticalScrollPosition, t = t.contentHeight - t.height, n = 2.33 * this._velocityY, o = this._previousVelocityY.length, s = 2.33, r = 0; o > r; r++) var a = i.VELOCITY_WEIGHTS[r],
					n = n + this._previousVelocityY.shift() * a,
					s = s + a;
				n /= s, .02 >= Math.abs(n) ? this.finishScrollingVertically() : (e = this.getAnimationDatas(n, e, t), this.throwVertically(e[0], e[1]))
			}, i.prototype.getAnimationDatas = function(t, e, n) {
				var o = Math.abs(t),
					s = 0,
					r = e + (t - .02) / Math.log(.998);
				if (0 > r || r > n) for (r = e;.02 < Math.abs(t);) r -= t, t = 0 > r || r > n ? .998 * t * .95 : .998 * t, s++;
				else s = Math.log(.02 / o) / Math.log(.998);
				return i.animationData || (i.animationData = [0, 0]), t = i.animationData, t[0] = r, t[1] = s, t
			}, i.prototype.finishScrollingHorizontally = function(t) {
				var e = this._viewport;
				t = e.horizontalScrollPosition;
				var e = e.contentWidth - e.width,
					i = t;
				0 > t && (i = 0), t > e && (i = e), this.throwHorizontally(i, 300)
			}, i.prototype.throwHorizontally = function(e, n) {
				"undefined" == typeof n && (n = 500);
				var o = this._viewport.horizontalScrollPosition;
				o != e && (this.horizontalAnimator || (this.horizontalAnimator = new t.Animation(this.horizontalUpdateHandler, this), this.horizontalAnimator.endFunction = this.finishScrollingHorizontally, this.horizontalAnimator.easerFunction = i.easeOut), this.horizontalAnimator.isPlaying && this.horizontalAnimator.stop(), this.horizontalAnimator.duration = n, this.horizontalAnimator.motionPaths = [{
					prop: "hsp",
					from: o,
					to: e
				}], this.horizontalAnimator.play())
			}, i.prototype.horizontalUpdateHandler = function(t) {
				this._viewport.horizontalScrollPosition = t.currentValue.hsp
			}, i.prototype.finishScrollingVertically = function(t) {
				var e = this._viewport;
				t = e.verticalScrollPosition;
				var e = e.contentHeight - e.height,
					i = t;
				0 > t && (i = 0), t > e && (i = e), this.throwVertically(i, 300)
			}, i.prototype.throwVertically = function(e, n) {
				"undefined" == typeof n && (n = 500);
				var o = this._viewport.verticalScrollPosition;
				o != e && (this.verticalAnimator || (this.verticalAnimator = new t.Animation(this.verticalUpdateHandler, this), this.verticalAnimator.endFunction = this.finishScrollingVertically, this.verticalAnimator.easerFunction = i.easeOut), this.verticalAnimator.isPlaying && this.verticalAnimator.stop(), this.verticalAnimator.duration = n, this.verticalAnimator.motionPaths = [{
					prop: "vsp",
					from: o,
					to: e
				}], this.verticalAnimator.play())
			}, i.prototype.verticalUpdateHandler = function(t) {
				this._viewport.verticalScrollPosition = t.currentValue.vsp
			}, Object.defineProperty(i.prototype, "numElements", {
				get: function() {
					return this.viewport ? 1 : 0
				},
				enumerable: !0,
				configurable: !0
			}), i.prototype.throwRangeError = function(t) {
				throw new RangeError('??????:"' + t + '"??????????????????????????????')
			}, i.prototype.getElementAt = function(t) {
				return this.viewport && 0 == t ? this.viewport : (this.throwRangeError(t), null)
			}, i.prototype.getElementIndex = function(t) {
				return null != t && t == this.viewport ? 0 : -1
			}, i.prototype.containsElement = function(t) {
				return null != t && t == this.viewport ? !0 : !1
			}, i.prototype.throwNotSupportedError = function() {
				throw Error("????????????Scroller??????????????????!")
			}, i.prototype.addElement = function() {
				return this.throwNotSupportedError(), null
			}, i.prototype.addElementAt = function() {
				return this.throwNotSupportedError(), null
			}, i.prototype.removeElement = function() {
				return this.throwNotSupportedError(), null
			}, i.prototype.removeElementAt = function() {
				return this.throwNotSupportedError(), null
			}, i.prototype.removeAllElements = function() {
				this.throwNotSupportedError()
			}, i.prototype.setElementIndex = function() {
				this.throwNotSupportedError()
			}, i.prototype.swapElements = function() {
				this.throwNotSupportedError()
			}, i.prototype.swapElementsAt = function() {
				this.throwNotSupportedError()
			}, i.prototype.addChild = function() {
				return this.throwNotSupportedError(), null
			}, i.prototype.addChildAt = function() {
				return this.throwNotSupportedError(), null
			}, i.prototype.removeChild = function() {
				return this.throwNotSupportedError(), null
			}, i.prototype.removeChildAt = function() {
				return this.throwNotSupportedError(), null
			}, i.prototype.setChildIndex = function() {
				this.throwNotSupportedError()
			}, i.prototype.swapChildren = function() {
				this.throwNotSupportedError()
			}, i.prototype.swapChildrenAt = function() {
				this.throwNotSupportedError()
			}, i.VELOCITY_WEIGHTS = [1, 1.33, 1.66, 2], i
		}(t.UIComponent);
	t.Scroller = e
}(ns_egret || (ns_egret = {})), __extends = this.__extends ||
function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype, t.prototype = new i
}, function(t) {
	var e = function(t) {
			function e(e, i, n) {
				"undefined" == typeof i && (i = !1), "undefined" == typeof n && (n = !1), t.call(this, e, i, n)
			}
			return __extends(e, t), e.INITIALIZE = "initialize", e.CREATION_COMPLETE = "creationComplete", e.UPDATE_COMPLETE = "updateComplete", e.BUTTON_DOWN = "buttonDown", e.CHANGE_END = "changeEnd", e.CHANGE_START = "changeStart", e.CHANGING = "changing", e.VALUE_COMMIT = "valueCommit", e.SKIN_CHANGED = "skinChanged", e.OPEN = "open", e.CLOSE = "close", e.PLAY_COMPLETE = "playComplete", e
		}(t.Event);
	t.UIEvent = e
}(ns_egret || (ns_egret = {})), __extends = this.__extends ||
function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype, t.prototype = new i
}, function(t) {
	var e = function(e) {
			function i(t, i, n, o, s, r, a, h) {
				"undefined" == typeof i && (i = !1), "undefined" == typeof n && (n = !1), "undefined" == typeof o && (o = null), "undefined" == typeof s && (s = null), "undefined" == typeof r && (r = null), "undefined" == typeof a && (a = null), "undefined" == typeof h && (h = null), e.call(this, t, i, n), this.kind = o, this.property = s, this.oldValue = r, this.newValue = a, this.source = h
			}
			return __extends(i, e), i.createUpdateEvent = function(e, n, o, s) {
				var r = new i(this.PROPERTY_CHANGE);
				return r.kind = t.PropertyChangeEventKind.UPDATE, r.oldValue = o, r.newValue = s, r.source = e, r.property = n, r
			}, i.PROPERTY_CHANGE = "propertyChange", i
		}(t.Event);
	t.PropertyChangeEvent = e
}(ns_egret || (ns_egret = {})), function(t) {
	var e = function() {
			function t() {}
			return t.UPDATE = "update", t.DELETE = "delete", t
		}();
	t.PropertyChangeEventKind = e
}(ns_egret || (ns_egret = {})), __extends = this.__extends ||
function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype, t.prototype = new i
}, function(t) {
	var e = function(t) {
			function e(e, i, n, o, s) {
				"undefined" == typeof i && (i = 0 / 0), "undefined" == typeof n && (n = 0 / 0), "undefined" == typeof o && (o = !1), "undefined" == typeof s && (s = !1), t.call(this, e, o, s), this.oldX = i, this.oldY = n
			}
			return __extends(e, t), e.MOVE = "move", e
		}(t.Event);
	t.MoveEvent = e
}(ns_egret || (ns_egret = {})), __extends = this.__extends ||
function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype, t.prototype = new i
}, function(t) {
	var e = function(t) {
			function e(e, i, n, o, s) {
				"undefined" == typeof i && (i = 0 / 0), "undefined" == typeof n && (n = 0 / 0), "undefined" == typeof o && (o = !1), "undefined" == typeof s && (s = !1), t.call(this, e, o, s), this.oldWidth = i, this.oldHeight = n
			}
			return __extends(e, t), e.RESIZE = "resize", e
		}(t.Event);
	t.ResizeEvent = e
}(ns_egret || (ns_egret = {})), __extends = this.__extends ||
function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype, t.prototype = new i
}, function(t) {
	var e = function(t) {
			function e(e, i, n, o, s) {
				"undefined" == typeof i && (i = !1), "undefined" == typeof n && (n = !1), "undefined" == typeof o && (o = null), "undefined" == typeof s && (s = null), t.call(this, e, i, n), this.partName = o, this.instance = s
			}
			return __extends(e, t), e.PART_ADDED = "partAdded", e.PART_REMOVED = "partRemoved", e
		}(t.Event);
	t.SkinPartEvent = e
}(ns_egret || (ns_egret = {})), __extends = this.__extends ||
function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype, t.prototype = new i
}, function(t) {
	var e = function(t) {
			function e(e, i, n, o) {
				"undefined" == typeof i && (i = !1), "undefined" == typeof n && (n = !1), "undefined" == typeof o && (o = -1), t.call(this, e, i, n), this.detail = o
			}
			return __extends(e, t), e.CLOSE = "close", e
		}(t.Event);
	t.CloseEvent = e
}(ns_egret || (ns_egret = {})), __extends = this.__extends ||
function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype, t.prototype = new i
}, function(t) {
	var e = function(t) {
			function e(e, i, n, o, s, r, a, h) {
				"undefined" == typeof i && (i = !1), "undefined" == typeof n && (n = !1), "undefined" == typeof o && (o = null), "undefined" == typeof s && (s = -1), "undefined" == typeof r && (r = -1), "undefined" == typeof a && (a = null), "undefined" == typeof h && (h = null), t.call(this, e, i, n), this.kind = o, this.location = s, this.oldLocation = r, this.items = a ? a : [], this.oldItems = h ? h : []
			}
			return __extends(e, t), e.COLLECTION_CHANGE = "collectionChange", e
		}(t.Event);
	t.CollectionEvent = e
}(ns_egret || (ns_egret = {})), function(t) {
	var e = function() {
			function t() {}
			return t.ADD = "add", t.MOVE = "move", t.REFRESH = "refresh", t.REMOVE = "remove", t.REPLACE = "replace", t.RESET = "reset", t.UPDATE = "update", t.OPEN = "open", t.CLOSE = "close", t
		}();
	t.CollectionEventKind = e
}(ns_egret || (ns_egret = {})), __extends = this.__extends ||
function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype, t.prototype = new i
}, function(t) {
	var e = function(t) {
			function e(e, i, n, o, s) {
				"undefined" == typeof i && (i = !1), "undefined" == typeof n && (n = !1), "undefined" == typeof o && (o = null), "undefined" == typeof s && (s = -1), t.call(this, e, i, n), this.element = o, this.index = s
			}
			return __extends(e, t), e.ELEMENT_ADD = "elementAdd", e.ELEMENT_REMOVE = "elementRemove", e
		}(t.Event);
	t.ElementExistenceEvent = e
}(ns_egret || (ns_egret = {})), __extends = this.__extends ||
function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype, t.prototype = new i
}, function(t) {
	var e = function(t) {
			function e(e, i, n, o, s) {
				"undefined" == typeof i && (i = !1), "undefined" == typeof n && (n = !1), "undefined" == typeof o && (o = -1), "undefined" == typeof s && (s = -1), t.call(this, e, i, n), this.oldIndex = o, this.newIndex = s
			}
			return __extends(e, t), e.CHANGE = "change", e.CHANGING = "changing", e
		}(t.Event);
	t.IndexChangeEvent = e
}(ns_egret || (ns_egret = {})), __extends = this.__extends ||
function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype, t.prototype = new i
}, function(t) {
	var e = function(t) {
			function e(e, i, n, o, s, r, a, h, l, p, c, u, d) {
				"undefined" == typeof i && (i = !0), "undefined" == typeof n && (n = !0), "undefined" == typeof o && (o = 0), "undefined" == typeof s && (s = 0), "undefined" == typeof r && (r = 0), "undefined" == typeof a && (a = !1), "undefined" == typeof h && (h = !1), "undefined" == typeof l && (l = !1), "undefined" == typeof p && (p = !1), "undefined" == typeof c && (c = -1), "undefined" == typeof u && (u = null), "undefined" == typeof d && (d = null), t.call(this, e, i, n, o, s, r, a, h, l, p), this.itemIndex = c, this.item = u, this.itemRenderer = d
			}
			return __extends(e, t), e.ITEM_ROLL_OUT = "itemRollOut", e.ITEM_ROLL_OVER = "itemRollOver", e.ITEM_CLICK = "itemClick", e
		}(t.TouchEvent);
	t.ListEvent = e
}(ns_egret || (ns_egret = {})), __extends = this.__extends ||
function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype, t.prototype = new i
}, function(t) {
	var e = function(t) {
			function e(e, i, n, o, s) {
				"undefined" == typeof i && (i = !1), "undefined" == typeof n && (n = !1), "undefined" == typeof o && (o = null), "undefined" == typeof s && (s = !1), t.call(this, e, i, n), this.popUp = o, this.modal = s
			}
			return __extends(e, t), e.ADD_POPUP = "addPopUp", e.REMOVE_POPUP = "removePopUp", e.BRING_TO_FRONT = "bringToFront", e
		}(t.Event);
	t.PopUpEvent = e
}(ns_egret || (ns_egret = {})), __extends = this.__extends ||
function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype, t.prototype = new i
}, function(t) {
	var e = function(t) {
			function e(e, i, n, o, s, r) {
				"undefined" == typeof i && (i = !1), "undefined" == typeof n && (n = !1), "undefined" == typeof o && (o = null), "undefined" == typeof s && (s = -1), "undefined" == typeof r && (r = null), t.call(this, e, i, n), this.renderer = o, this.index = s, this.data = r
			}
			return __extends(e, t), e.RENDERER_ADD = "rendererAdd", e.RENDERER_REMOVE = "rendererRemove", e
		}(t.Event);
	t.RendererExistenceEvent = e
}(ns_egret || (ns_egret = {})), __extends = this.__extends ||
function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype, t.prototype = new i
}, function(t) {
	var e = function(t) {
			function e(e, i, n, o, s) {
				"undefined" == typeof i && (i = !1), "undefined" == typeof n && (n = !1), "undefined" == typeof o && (o = null), "undefined" == typeof s && (s = null), t.call(this, e, i, n), this.oldState = o, this.newState = s
			}
			return __extends(e, t), e.CURRENT_STATE_CHANGE = "currentStateChange", e.CURRENT_STATE_CHANGING = "currentStateChanging", e
		}(t.Event);
	t.StateChangeEvent = e
}(ns_egret || (ns_egret = {})), __extends = this.__extends ||
function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype, t.prototype = new i
}, function(t) {
	var e = function(t) {
			function e(e, i, n) {
				"undefined" == typeof i && (i = !1), "undefined" == typeof n && (n = !1), t.call(this, e, i, n)
			}
			return __extends(e, t), e.THUMB_DRAG = "thumbDrag", e.THUMB_PRESS = "thumbPress", e.THUMB_RELEASE = "thumbRelease", e
		}(t.Event);
	t.TrackBaseEvent = e
}(ns_egret || (ns_egret = {})), __extends = this.__extends ||
function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype, t.prototype = new i
}, function(t) {
	var e = function(t) {
			function e(e, i, n, o, s, r) {
				"undefined" == typeof i && (i = !1), "undefined" == typeof n && (n = !0), "undefined" == typeof o && (o = -1), "undefined" == typeof s && (s = null), "undefined" == typeof r && (r = null), t.call(this, e, i, n), this.item = s, this.itemRenderer = r, this.itemIndex = o
			}
			return __extends(e, t), e.ITEM_CLOSE = "itemClose", e.ITEM_OPEN = "itemOpen", e.ITEM_OPENING = "itemOpening", e
		}(t.Event);
	t.TreeEvent = e
}(ns_egret || (ns_egret = {})), __extends = this.__extends ||
function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype, t.prototype = new i
}, function(t) {
	var e = function(e) {
			function i() {
				e.call(this), this._verticalScrollPosition = this._horizontalScrollPosition = 0, this._useVirtualLayout = this._clipAndEnableScrolling = !1
			}
			return __extends(i, e), Object.defineProperty(i.prototype, "target", {
				get: function() {
					return this._target
				},
				set: function(t) {
					this._target != t && (this._target = t, this.clearVirtualLayoutCache())
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "horizontalScrollPosition", {
				get: function() {
					return this._horizontalScrollPosition
				},
				set: function(e) {
					if (e != this._horizontalScrollPosition) {
						var i = this._horizontalScrollPosition;
						this._horizontalScrollPosition = e, this.scrollPositionChanged(), this.dispatchEvent(t.PropertyChangeEvent.createUpdateEvent(this, "horizontalScrollPosition", i, e))
					}
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "verticalScrollPosition", {
				get: function() {
					return this._verticalScrollPosition
				},
				set: function(e) {
					if (e != this._verticalScrollPosition) {
						var i = this._verticalScrollPosition;
						this._verticalScrollPosition = e, this.scrollPositionChanged(), this.dispatchEvent(t.PropertyChangeEvent.createUpdateEvent(this, "verticalScrollPosition", i, e))
					}
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "clipAndEnableScrolling", {
				get: function() {
					return this._clipAndEnableScrolling
				},
				set: function(t) {
					t != this._clipAndEnableScrolling && (this._clipAndEnableScrolling = t, null != this.target && this.updateScrollRect(this.target.width, this.target.height))
				},
				enumerable: !0,
				configurable: !0
			}), i.prototype.getHorizontalScrollPositionDelta = function(e) {
				var i = this.target;
				if (!i) return 0;
				var n = this.getScrollRect();
				if (!n || 0 == n.x && n.width >= i.contentWidth) return 0;
				var o, i = i.contentWidth - n.right,
					s = -n.x;
				switch (e) {
				case t.NavigationUnit.LEFT:
				case t.NavigationUnit.PAGE_LEFT:
					o = this.getElementBoundsLeftOfScrollRect(n);
					break;
				case t.NavigationUnit.RIGHT:
				case t.NavigationUnit.PAGE_RIGHT:
					o = this.getElementBoundsRightOfScrollRect(n);
					break;
				case t.NavigationUnit.HOME:
					return s;
				case t.NavigationUnit.END:
					return i;
				default:
					return 0
				}
				if (!o) return 0;
				var r = 0;
				switch (e) {
				case t.NavigationUnit.LEFT:
					r = Math.max(o.x - n.x, -n.width);
					break;
				case t.NavigationUnit.RIGHT:
					r = Math.min(o.right - n.right, n.width);
					break;
				case t.NavigationUnit.PAGE_LEFT:
					r = o.right - n.right, r >= 0 && (r = Math.max(o.x - n.x, -n.width));
					break;
				case t.NavigationUnit.PAGE_RIGHT:
					r = o.x - n.x, 0 >= r && (r = Math.min(o.right - n.right, n.width))
				}
				return Math.min(i, Math.max(s, r))
			}, i.prototype.getVerticalScrollPositionDelta = function(e) {
				var i = this.target;
				if (!i) return 0;
				var n = this.getScrollRect();
				if (!n || 0 == n.y && n.height >= i.contentHeight) return 0;
				var o, i = i.contentHeight - n.bottom,
					s = -n.y;
				switch (e) {
				case t.NavigationUnit.UP:
				case t.NavigationUnit.PAGE_UP:
					o = this.getElementBoundsAboveScrollRect(n);
					break;
				case t.NavigationUnit.DOWN:
				case t.NavigationUnit.PAGE_DOWN:
					o = this.getElementBoundsBelowScrollRect(n);
					break;
				case t.NavigationUnit.HOME:
					return s;
				case t.NavigationUnit.END:
					return i;
				default:
					return 0
				}
				if (!o) return 0;
				var r = 0;
				switch (e) {
				case t.NavigationUnit.UP:
					r = Math.max(o.y - n.y, -n.height);
					break;
				case t.NavigationUnit.DOWN:
					r = Math.min(o.bottom - n.bottom, n.height);
					break;
				case t.NavigationUnit.PAGE_UP:
					r = o.bottom - n.bottom, r >= 0 && (r = Math.max(o.y - n.y, -n.height));
					break;
				case t.NavigationUnit.PAGE_DOWN:
					r = o.y - n.y, 0 >= r && (r = Math.min(o.bottom - n.bottom, n.height))
				}
				return Math.min(i, Math.max(s, r))
			}, i.prototype.getScrollRect = function() {
				var e = this.target;
				return e && e.clipAndEnableScrolling ? new t.Rectangle(e.horizontalScrollPosition, e.verticalScrollPosition, e.width, e.height) : null
			}, i.prototype.getElementBoundsLeftOfScrollRect = function(e) {
				var i = new t.Rectangle;
				return i.x = e.x - 1, i.right = e.x, i
			}, i.prototype.getElementBoundsRightOfScrollRect = function(e) {
				var i = new t.Rectangle;
				return i.x = e.right, i.right = e.right + 1, i
			}, i.prototype.getElementBoundsAboveScrollRect = function(e) {
				var i = new t.Rectangle;
				return i.y = e.y - 1, i.bottom = e.y, i
			}, i.prototype.getElementBoundsBelowScrollRect = function(e) {
				var i = new t.Rectangle;
				return i.y = e.bottom, i.bottom = e.bottom + 1, i
			}, i.prototype.scrollPositionChanged = function() {
				null != this.target && (this.updateScrollRect(this.target.width, this.target.height), this.target.invalidateDisplayListExceptLayout())
			}, i.prototype.updateScrollRect = function(e, i) {
				null != this.target && (this.target.scrollRect = this._clipAndEnableScrolling ? new t.Rectangle(this._horizontalScrollPosition, this._verticalScrollPosition, e, i) : null)
			}, Object.defineProperty(i.prototype, "useVirtualLayout", {
				get: function() {
					return this._useVirtualLayout
				},
				set: function(e) {
					this._useVirtualLayout != e && (this._useVirtualLayout = e, this.dispatchEvent(new t.Event("useVirtualLayoutChanged")), this._useVirtualLayout && !e && this.clearVirtualLayoutCache(), this.target && this.target.invalidateDisplayList())
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "typicalLayoutRect", {
				get: function() {
					return this._typicalLayoutRect
				},
				set: function(t) {
					this._typicalLayoutRect != t && (this._typicalLayoutRect = t, this.target && this.target.invalidateSize())
				},
				enumerable: !0,
				configurable: !0
			}), i.prototype.clearVirtualLayoutCache = function() {}, i.prototype.elementAdded = function() {}, i.prototype.elementRemoved = function() {}, i.prototype.measure = function() {}, i.prototype.updateDisplayList = function() {}, i
		}(t.EventDispatcher);
	t.LayoutBase = e
}(ns_egret || (ns_egret = {})), __extends = this.__extends ||
function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype, t.prototype = new i
}, function(t) {
	var e = function(e) {
			function i() {
				e.call(this), this._mouseWheelSpeed = 20
			}
			return __extends(i, e), Object.defineProperty(i.prototype, "useVirtualLayout", {
				set: function() {},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "mouseWheelSpeed", {
				get: function() {
					return this._mouseWheelSpeed
				},
				set: function(t) {
					0 == t && (t = 1), this._mouseWheelSpeed = t
				},
				enumerable: !0,
				configurable: !0
			}), i.prototype.getElementBoundsLeftOfScrollRect = function(e) {
				var i = new t.Rectangle;
				return i.x = e.x - this._mouseWheelSpeed, i.right = e.x, i
			}, i.prototype.getElementBoundsRightOfScrollRect = function(e) {
				var i = new t.Rectangle;
				return i.x = e.right, i.right = e.right + this._mouseWheelSpeed, i
			}, i.prototype.getElementBoundsAboveScrollRect = function(e) {
				var i = new t.Rectangle;
				return i.y = e.y - this._mouseWheelSpeed, i.bottom = e.y, i
			}, i.prototype.getElementBoundsBelowScrollRect = function(e) {
				var i = new t.Rectangle;
				return i.y = e.bottom, i.bottom = e.bottom + this._mouseWheelSpeed, i
			}, i.prototype.measure = function() {
				if (e.prototype.measure.call(this), null != this.target) {
					for (var t = 0, i = 0, n = this.target.numElements, o = 0; n > o; o++) {
						var s = this.target.getElementAt(o);
						if (s && s.includeInLayout) {
							var r = s.horizontalCenter,
								a = s.verticalCenter,
								h = s.left,
								l = s.right,
								p = s.top,
								c = s.bottom;
							isNaN(h) || isNaN(l) ? isNaN(r) ? isNaN(h) && isNaN(l) ? r = s.preferredX : (r = isNaN(h) ? 0 : h, r += isNaN(l) ? 0 : l) : r = 2 * Math.abs(r) : r = h + l, isNaN(p) || isNaN(c) ? isNaN(a) ? isNaN(p) && isNaN(c) ? a = s.preferredY : (a = isNaN(p) ? 0 : p, a += isNaN(c) ? 0 : c) : a = 2 * Math.abs(a) : a = p + c, c = s.preferredHeight, t = Math.ceil(Math.max(t, r + s.preferredWidth)), i = Math.ceil(Math.max(i, a + c))
						}
					}
					this.target.measuredWidth = t, this.target.measuredHeight = i
				}
			}, i.prototype.updateDisplayList = function(t, i) {
				if (e.prototype.updateDisplayList.call(this, t, i), null != this.target) {
					for (var n = this.target.numElements, o = 0, s = 0, r = 0; n > r; r++) {
						var a = this.target.getElementAt(r);
						if (null != a && a.includeInLayout) {
							var h = a.horizontalCenter,
								l = a.verticalCenter,
								p = a.left,
								c = a.right,
								u = a.top,
								d = a.bottom,
								m = a.percentWidth,
								_ = a.percentHeight,
								y = 0 / 0,
								f = 0 / 0;
							isNaN(p) || isNaN(c) ? isNaN(m) || (y = Math.round(t * Math.min(.01 * m, 1))) : y = t - c - p, isNaN(u) || isNaN(d) ? isNaN(_) || (f = Math.round(i * Math.min(.01 * _, 1))) : f = i - d - u, a.setLayoutBoundsSize(y, f), m = a.layoutBoundsWidth, _ = a.layoutBoundsHeight, f = y = 0 / 0, y = isNaN(h) ? isNaN(p) ? isNaN(c) ? a.layoutBoundsX : t - m - c : p : Math.round((t - m) / 2 + h), f = isNaN(l) ? isNaN(u) ? isNaN(d) ? a.layoutBoundsY : i - _ - d : u : Math.round((i - _) / 2 + l), a.setLayoutBoundsPosition(y, f), o = Math.max(o, y + m), s = Math.max(s, f + _)
						}
					}
					this.target.setContentSize(o, s)
				}
			}, i
		}(t.LayoutBase);
	t.BasicLayout = e
}(ns_egret || (ns_egret = {})), function(t) {
	var e = function() {
			function t() {}
			return t.LEFT = "left", t.JUSTIFY_USING_GAP = "justifyUsingGap", t.JUSTIFY_USING_WIDTH = "justifyUsingWidth", t
		}();
	t.ColumnAlign = e
}(ns_egret || (ns_egret = {})), function(t) {
	var e = function() {
			function t() {}
			return t.TOP = "top", t.JUSTIFY_USING_GAP = "justifyUsingGap", t.JUSTIFY_USING_HEIGHT = "justifyUsingHeight", t
		}();
	t.RowAlign = e
}(ns_egret || (ns_egret = {})), function(t) {
	var e = function() {
			function t() {}
			return t.ROWS = "rows", t.COLUMNS = "columns", t
		}();
	t.TileOrientation = e
}(ns_egret || (ns_egret = {})), __extends = this.__extends ||
function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype, t.prototype = new i
}, function(t) {
	var e = function(e) {
			function n() {
				e.call(this), this._horizontalAlign = t.HorizontalAlign.LEFT, this._verticalAlign = t.VerticalAlign.TOP, this._gap = 6, this._padding = 0, this._paddingBottom = this._paddingTop = this._paddingRight = this._paddingLeft = 0 / 0, this.elementSizeTable = [], this.endIndex = this.startIndex = -1, this.indexInViewCalculated = !1, this.maxElementWidth = 0
			}
			return __extends(n, e), Object.defineProperty(n.prototype, "horizontalAlign", {
				get: function() {
					return this._horizontalAlign
				},
				set: function(t) {
					this._horizontalAlign != t && (this._horizontalAlign = t, this.target && this.target.invalidateDisplayList())
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(n.prototype, "verticalAlign", {
				get: function() {
					return this._verticalAlign
				},
				set: function(t) {
					this._verticalAlign != t && (this._verticalAlign = t, this.target && this.target.invalidateDisplayList())
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(n.prototype, "gap", {
				get: function() {
					return this._gap
				},
				set: function(e) {
					this._gap != e && (this._gap = e, this.invalidateTargetSizeAndDisplayList(), this.hasEventListener("gapChanged") && this.dispatchEvent(new t.Event("gapChanged")))
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(n.prototype, "padding", {
				get: function() {
					return this._padding
				},
				set: function(t) {
					this._padding != t && (this._padding = t, this.invalidateTargetSizeAndDisplayList())
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(n.prototype, "paddingLeft", {
				get: function() {
					return this._paddingLeft
				},
				set: function(t) {
					this._paddingLeft != t && (this._paddingLeft = t, this.invalidateTargetSizeAndDisplayList())
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(n.prototype, "paddingRight", {
				get: function() {
					return this._paddingRight
				},
				set: function(t) {
					this._paddingRight != t && (this._paddingRight = t, this.invalidateTargetSizeAndDisplayList())
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(n.prototype, "paddingTop", {
				get: function() {
					return this._paddingTop
				},
				set: function(t) {
					this._paddingTop != t && (this._paddingTop = t, this.invalidateTargetSizeAndDisplayList())
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(n.prototype, "paddingBottom", {
				get: function() {
					return this._paddingBottom
				},
				set: function(t) {
					this._paddingBottom != t && (this._paddingBottom = t, this.invalidateTargetSizeAndDisplayList())
				},
				enumerable: !0,
				configurable: !0
			}), n.prototype.invalidateTargetSizeAndDisplayList = function() {
				this.target && (this.target.invalidateSize(), this.target.invalidateDisplayList())
			}, n.prototype.measure = function() {
				e.prototype.measure.call(this), this.target && (this.useVirtualLayout ? this.measureVirtual() : this.measureReal())
			}, n.prototype.measureVirtual = function() {
				for (var t = this.typicalLayoutRect ? this.typicalLayoutRect.height : 22, e = Math.max(this.maxElementWidth, this.typicalLayoutRect ? this.typicalLayoutRect.width : 71), i = this.getElementTotalSize(), n = this.target.getElementIndicesInView(), o = n.length, s = 0; o > s; s++) {
					var r = n[s],
						a = this.target.getElementAt(r);
					if (null != a && a.includeInLayout) var h = a.preferredWidth,
						i = i + a.preferredHeight,
						i = i - (isNaN(this.elementSizeTable[r]) ? t : this.elementSizeTable[r]),
						e = Math.max(e, h)
				}
				s = isNaN(this._padding) ? 0 : this._padding, t = isNaN(this._paddingLeft) ? s : this._paddingLeft, n = isNaN(this._paddingRight) ? s : this._paddingRight, o = isNaN(this._paddingTop) ? s : this._paddingTop, s = isNaN(this._paddingBottom) ? s : this._paddingBottom, o += s, this.target.measuredWidth = Math.ceil(e + (t + n)), this.target.measuredHeight = Math.ceil(i + o)
			}, n.prototype.measureReal = function() {
				for (var t = this.target.numElements, e = t, i = 0, n = 0, o = 0; t > o; o++) {
					var s = this.target.getElementAt(o);
					if (s && s.includeInLayout) var r = s.preferredWidth,
						n = n + s.preferredHeight,
						i = Math.max(i, r);
					else e--
				}
				t = isNaN(this._gap) ? 0 : this._gap, n += (e - 1) * t, s = isNaN(this._padding) ? 0 : this._padding, e = isNaN(this._paddingLeft) ? s : this._paddingLeft, t = isNaN(this._paddingRight) ? s : this._paddingRight, o = isNaN(this._paddingTop) ? s : this._paddingTop, s = isNaN(this._paddingBottom) ? s : this._paddingBottom, o += s, this.target.measuredWidth = Math.ceil(i + (e + t)), this.target.measuredHeight = Math.ceil(n + o)
			}, n.prototype.updateDisplayList = function(t, i) {
				e.prototype.updateDisplayList.call(this, t, i), this.target && (this.useVirtualLayout ? this.updateDisplayListVirtual(t, i) : this.updateDisplayListReal(t, i))
			}, n.prototype.getStartPosition = function(t) {
				var e = isNaN(this._padding) ? 0 : this._padding,
					i = isNaN(this._paddingTop) ? e : this._paddingTop,
					e = isNaN(this._gap) ? 0 : this._gap;
				if (!this.useVirtualLayout) {
					var n;
					return this.target && (n = this.target.getElementAt(t)), n ? n.y : i
				}
				n = this.typicalLayoutRect ? this.typicalLayoutRect.height : 22;
				for (var o = 0; t > o; o++) {
					var s = this.elementSizeTable[o];
					isNaN(s) && (s = n), i += s + e
				}
				return i
			}, n.prototype.getElementSize = function(t) {
				return this.useVirtualLayout ? (t = this.elementSizeTable[t], isNaN(t) && (t = this.typicalLayoutRect ? this.typicalLayoutRect.height : 22), t) : this.target ? this.target.getElementAt(t).height : 0
			}, n.prototype.getElementTotalSize = function() {
				for (var t = isNaN(this._gap) ? 0 : this._gap, e = this.typicalLayoutRect ? this.typicalLayoutRect.height : 22, i = 0, n = this.target.numElements, o = 0; n > o; o++) {
					var s = this.elementSizeTable[o];
					isNaN(s) && (s = e), i += s + t
				}
				return i - t
			}, n.prototype.elementAdded = function(t) {
				e.prototype.elementAdded.call(this, t), this.elementSizeTable.splice(t, 0, this.typicalLayoutRect ? this.typicalLayoutRect.height : 22)
			}, n.prototype.elementRemoved = function(t) {
				e.prototype.elementRemoved.call(this, t), this.elementSizeTable.splice(t, 1)
			}, n.prototype.clearVirtualLayoutCache = function() {
				e.prototype.clearVirtualLayoutCache.call(this), this.elementSizeTable = [], this.maxElementWidth = 0
			}, n.prototype.findIndexAt = function(t, e, i) {
				var n = (e + i) / 2,
					o = this.getStartPosition(n),
					s = this.getElementSize(n),
					r = isNaN(this._gap) ? 0 : this._gap;
				return t >= o && o + s + r > t ? n : e == i ? -1 : o > t ? this.findIndexAt(t, e, Math.max(e, n - 1)) : this.findIndexAt(t, Math.min(n + 1, i), i)
			}, n.prototype.scrollPositionChanged = function() {
				e.prototype.scrollPositionChanged.call(this), this.useVirtualLayout && this.getIndexInView() && (this.indexInViewCalculated = !0, this.target.invalidateDisplayList())
			}, n.prototype.getIndexInView = function() {
				if (!this.target || 0 == this.target.numElements || isNaN(this.target.width) || 0 == this.target.width || isNaN(this.target.height) || 0 == this.target.height) return this.startIndex = this.endIndex = -1, !1;
				var t = isNaN(this._padding) ? 0 : this._padding,
					e = isNaN(this._paddingTop) ? t : this._paddingTop,
					i = isNaN(this._paddingBottom) ? t : this._paddingBottom,
					t = this.target.numElements,
					n = this.getStartPosition(t - 1) + this.elementSizeTable[t - 1] + i,
					o = this.target.verticalScrollPosition;
				return o > n - i ? (this.endIndex = this.startIndex = -1, !1) : (i = this.target.verticalScrollPosition + this.target.height, e > i ? (this.endIndex = this.startIndex = -1, !1) : (e = this.startIndex, n = this.endIndex, this.startIndex = this.findIndexAt(o, 0, t - 1), -1 == this.startIndex && (this.startIndex = 0), this.endIndex = this.findIndexAt(i, 0, t - 1), -1 == this.endIndex && (this.endIndex = t - 1), e != this.startIndex || n != this.endIndex))
			}, n.prototype.updateDisplayListVirtual = function(e) {
				this.indexInViewCalculated ? this.indexInViewCalculated = !1 : this.getIndexInView();
				var i = isNaN(this._padding) ? 0 : this._padding,
					n = isNaN(this._paddingLeft) ? i : this._paddingLeft,
					o = isNaN(this._paddingRight) ? i : this._paddingRight,
					s = isNaN(this._paddingBottom) ? i : this._paddingBottom,
					r = isNaN(this._gap) ? 0 : this._gap,
					a = this.target.numElements;
				if (-1 == this.startIndex || -1 == this.endIndex) n = this.getStartPosition(a) - r + s, this.target.setContentSize(this.target.contentWidth, Math.ceil(n));
				else {
					this.target.setVirtualElementIndicesInView(this.startIndex, this.endIndex);
					var h = this._horizontalAlign == t.HorizontalAlign.JUSTIFY || this._horizontalAlign == t.HorizontalAlign.CONTENT_JUSTIFY,
						l = this._horizontalAlign == t.HorizontalAlign.CONTENT_JUSTIFY,
						p = 0;
					h || (this._horizontalAlign == t.HorizontalAlign.CENTER ? p = .5 : this._horizontalAlign == t.HorizontalAlign.RIGHT && (p = 1));
					var c, u = Math.max(0, e - n - o),
						d = Math.ceil(u),
						m = this.typicalLayoutRect ? this.typicalLayoutRect.height : 22,
						i = Math.max(this.typicalLayoutRect ? this.typicalLayoutRect.width : 71, this.maxElementWidth);
					if (l) {
						for (var _ = this.startIndex; _ <= this.endIndex; _++)(c = this.target.getVirtualElementAt(_)) && c.includeInLayout && (this.maxElementWidth = Math.max(this.maxElementWidth, c.preferredWidth));
						d = Math.ceil(Math.max(u, this.maxElementWidth))
					}
					for (var y = 0, f = 0, _ = 0, g = !1, v = this.startIndex; v <= this.endIndex; v++) y = 0, (c = this.target.getVirtualElementAt(v)) && (c.includeInLayout ? (h ? (y = n, c.setLayoutBoundsSize(d, 0 / 0)) : (y = (u - c.layoutBoundsWidth) * p, y = y > 0 ? y : 0, y = n + y), l || (this.maxElementWidth = Math.max(this.maxElementWidth, c.preferredWidth)), _ = Math.max(_, c.layoutBoundsWidth), g || (f = isNaN(this.elementSizeTable[v]) ? m : this.elementSizeTable[v], f != c.layoutBoundsHeight && (g = !0)), 0 == v && 0 < this.elementSizeTable.length && this.elementSizeTable[v] != c.layoutBoundsHeight && (this.typicalLayoutRect = null), this.elementSizeTable[v] = c.layoutBoundsHeight, f = this.getStartPosition(v), c.setLayoutBoundsPosition(Math.round(y), Math.round(f))) : this.elementSizeTable[v] = 0);
					_ += n + o, n = this.getStartPosition(a) - r + s, this.target.setContentSize(Math.ceil(_), Math.ceil(n)), (g || i < this.maxElementWidth) && this.target.invalidateSize()
				}
			}, n.prototype.updateDisplayListReal = function(e, o) {
				var s = isNaN(this._padding) ? 0 : this._padding,
					r = isNaN(this._paddingLeft) ? s : this._paddingLeft,
					a = isNaN(this._paddingRight) ? s : this._paddingRight,
					h = isNaN(this._paddingTop) ? s : this._paddingTop,
					s = isNaN(this._paddingBottom) ? s : this._paddingBottom,
					l = isNaN(this._gap) ? 0 : this._gap,
					p = Math.max(0, e - r - a),
					c = Math.max(0, o - h - s),
					u = this._verticalAlign == t.VerticalAlign.JUSTIFY,
					d = this._horizontalAlign == t.HorizontalAlign.JUSTIFY || this._horizontalAlign == t.HorizontalAlign.CONTENT_JUSTIFY,
					m = 0;
				d || (this._horizontalAlign == t.HorizontalAlign.CENTER ? m = .5 : this._horizontalAlign == t.HorizontalAlign.RIGHT && (m = 1));
				var _, y, f, g = this.target.numElements,
					v = g,
					x = r,
					b = h,
					C = 0,
					x = 0,
					E = [],
					w = c;
				for (_ = 0; g > _; _++) y = this.target.getElementAt(_), y && y.includeInLayout ? (this.maxElementWidth = Math.max(this.maxElementWidth, y.preferredWidth), u ? C += y.preferredHeight : isNaN(y.percentHeight) ? w -= y.preferredHeight : (x += y.percentHeight, f = new i, f.layoutElement = y, f.percent = y.percentHeight, f.min = y.minHeight, f.max = y.maxHeight, E.push(f))) : v--;
				var A, w = w - (v - 1) * l,
					w = w > 0 ? w : 0,
					D = c - C - l * (v - 1),
					S = v,
					T = [];
				if (u) {
					if (0 > D) {
						for (A = w / v, _ = 0; g > _; _++)(y = this.target.getElementAt(_)) && y.includeInLayout && (y = y.preferredHeight, A >= y && (w -= y, S--));
						w = w > 0 ? w : 0
					}
				} else if (x > 0) {
					for (n.flexChildrenProportionally(c, w, x, E), c = 0, y = E.length, _ = 0; y > _; _++) f = E[_], x = Math.round(f.size + c), c += f.size - x, T[f.layoutElement.hashCode] = x, w -= x;
					w = w > 0 ? w : 0
				}
				for (this._verticalAlign == t.VerticalAlign.MIDDLE ? b = h + .5 * w : this._verticalAlign == t.VerticalAlign.BOTTOM && (b = h + w), E = r, y = v = 0, f = Math.ceil(p), this._horizontalAlign == t.HorizontalAlign.CONTENT_JUSTIFY && (f = Math.ceil(Math.max(p, this.maxElementWidth))), c = 0, v = 0 / 0, _ = 0; g > _; _++) x = 0, (y = this.target.getElementAt(_)) && y.includeInLayout && (v = 0 / 0, u ? (x = 0 / 0, D > 0 ? x = w * y.preferredHeight / C : 0 > D && y.preferredHeight > A && (x = w / S), isNaN(x) || (v = Math.round(x + c), c += x - v)) : v = T[y.hashCode], d ? (x = r, y.setLayoutBoundsSize(f, v)) : (x = 0 / 0, isNaN(y.percentWidth) || (x = Math.min(100, y.percentWidth), x = Math.round(.01 * p * x)), y.setLayoutBoundsSize(x, v), x = (p - y.layoutBoundsWidth) * m, x = x > 0 ? x : 0, x = r + x), y.setLayoutBoundsPosition(Math.round(x), Math.round(b)), v = Math.ceil(y.layoutBoundsWidth), y = Math.ceil(y.layoutBoundsHeight), E = Math.max(E, x + v), h = Math.max(h, b + y), b += y + l);
				this.target.setContentSize(Math.ceil(E + a), Math.ceil(h + s))
			}, n.flexChildrenProportionally = function(t, e, i, n) {
				var o, s = n.length;
				do {
					o = !0;
					var r = e - t * i / 100;
					r > 0 ? e -= r : r = 0;
					for (var a = e / i, h = 0; s > h; h++) {
						var l = n[h],
							p = l.percent * a;
						if (p < l.min) {
							o = l.min, l.size = o, n[h] = n[--s], n[s] = l, i -= l.percent, r >= o || (e -= o - r), o = !1;
							break
						}
						if (p > l.max) {
							o = l.max, l.size = o, n[h] = n[--s], n[s] = l, i -= l.percent, r >= o || (e -= o - r), o = !1;
							break
						}
						l.size = p
					}
				} while (!o)
			}, n.prototype.getElementBoundsAboveScrollRect = function(e) {
				var i = new t.Rectangle;
				if (!this.target) return i;
				var n = this.findIndexAt(e.y, 0, this.target.numElements - 1),
					o = isNaN(this._padding) ? 0 : this._padding,
					s = isNaN(this._paddingTop) ? o : this._paddingTop,
					o = isNaN(this._paddingBottom) ? o : this._paddingBottom;
				return -1 == n ? (e.y > this.target.contentHeight - o ? (i.y = this.target.contentHeight - o, i.bottom = this.target.contentHeight) : (i.y = 0, i.bottom = s), i) : (i.y = this.getStartPosition(n), i.bottom = this.getElementSize(n) + i.y, i.y == e.y && (n--, -1 != n ? (i.y = this.getStartPosition(n), i.bottom = this.getElementSize(n) + i.y) : (i.y = 0, i.bottom = s)), i)
			}, n.prototype.getElementBoundsBelowScrollRect = function(e) {
				var i = new t.Rectangle;
				if (!this.target) return i;
				var n = this.target.numElements,
					o = this.findIndexAt(e.bottom, 0, n - 1),
					s = isNaN(this._padding) ? 0 : this._padding,
					r = isNaN(this._paddingTop) ? s : this._paddingTop,
					s = isNaN(this._paddingBottom) ? s : this._paddingBottom;
				return -1 == o ? (e.right < r ? (i.y = 0, i.bottom = r) : (i.y = this.target.contentHeight - s, i.bottom = this.target.contentHeight), i) : (i.y = this.getStartPosition(o), i.bottom = this.getElementSize(o) + i.y, i.bottom <= e.bottom && (o++, n > o ? (i.y = this.getStartPosition(o), i.bottom = this.getElementSize(o) + i.y) : (i.y = this.target.contentHeight - s, i.bottom = this.target.contentHeight)), i)
			}, n
		}(t.LayoutBase);
	t.VerticalLayout = e;
	var i = function() {
			return function() {
				this.size = 0
			}
		}()
}(ns_egret || (ns_egret = {})), __extends = this.__extends ||
function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype, t.prototype = new i
}, function(t) {
	var e = function(e) {
			function n() {
				e.call(this), this._horizontalAlign = t.HorizontalAlign.LEFT, this._verticalAlign = t.VerticalAlign.TOP, this._gap = 6, this._padding = 0, this._paddingBottom = this._paddingTop = this._paddingRight = this._paddingLeft = 0 / 0, this.elementSizeTable = [], this.endIndex = this.startIndex = -1, this.indexInViewCalculated = !1, this.maxElementHeight = 0
			}
			return __extends(n, e), Object.defineProperty(n.prototype, "horizontalAlign", {
				get: function() {
					return this._horizontalAlign
				},
				set: function(t) {
					this._horizontalAlign != t && (this._horizontalAlign = t, this.target && this.target.invalidateDisplayList())
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(n.prototype, "verticalAlign", {
				get: function() {
					return this._verticalAlign
				},
				set: function(t) {
					this._verticalAlign != t && (this._verticalAlign = t, this.target && this.target.invalidateDisplayList())
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(n.prototype, "gap", {
				get: function() {
					return this._gap
				},
				set: function(e) {
					this._gap != e && (this._gap = e, this.invalidateTargetSizeAndDisplayList(), this.hasEventListener("gapChanged") && this.dispatchEvent(new t.Event("gapChanged")))
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(n.prototype, "padding", {
				get: function() {
					return this._padding
				},
				set: function(t) {
					this._padding != t && (this._padding = t, this.invalidateTargetSizeAndDisplayList())
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(n.prototype, "paddingLeft", {
				get: function() {
					return this._paddingLeft
				},
				set: function(t) {
					this._paddingLeft != t && (this._paddingLeft = t, this.invalidateTargetSizeAndDisplayList())
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(n.prototype, "paddingRight", {
				get: function() {
					return this._paddingRight
				},
				set: function(t) {
					this._paddingRight != t && (this._paddingRight = t, this.invalidateTargetSizeAndDisplayList())
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(n.prototype, "paddingTop", {
				get: function() {
					return this._paddingTop
				},
				set: function(t) {
					this._paddingTop != t && (this._paddingTop = t, this.invalidateTargetSizeAndDisplayList())
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(n.prototype, "paddingBottom", {
				get: function() {
					return this._paddingBottom
				},
				set: function(t) {
					this._paddingBottom != t && (this._paddingBottom = t, this.invalidateTargetSizeAndDisplayList())
				},
				enumerable: !0,
				configurable: !0
			}), n.prototype.invalidateTargetSizeAndDisplayList = function() {
				this.target && (this.target.invalidateSize(), this.target.invalidateDisplayList())
			}, n.prototype.measure = function() {
				e.prototype.measure.call(this), this.target && (this.useVirtualLayout ? this.measureVirtual() : this.measureReal())
			}, n.prototype.measureVirtual = function() {
				for (var t = this.typicalLayoutRect ? this.typicalLayoutRect.height : 22, e = this.typicalLayoutRect ? this.typicalLayoutRect.width : 71, i = this.getElementTotalSize(), t = Math.max(this.maxElementHeight, t), n = this.target.getElementIndicesInView(), o = n.length, s = 0; o > s; s++) {
					var r = n[s],
						a = this.target.getElementAt(r);
					if (null != a && a.includeInLayout) var h = a.preferredHeight,
						i = i + a.preferredWidth,
						i = i - (isNaN(this.elementSizeTable[r]) ? e : this.elementSizeTable[r]),
						t = Math.max(t, h)
				}
				s = isNaN(this._padding) ? 0 : this._padding, e = isNaN(this._paddingLeft) ? s : this._paddingLeft, n = isNaN(this._paddingRight) ? s : this._paddingRight, o = isNaN(this._paddingTop) ? s : this._paddingTop, s = isNaN(this._paddingBottom) ? s : this._paddingBottom, o += s, this.target.measuredWidth = Math.ceil(i + (e + n)), this.target.measuredHeight = Math.ceil(t + o)
			}, n.prototype.measureReal = function() {
				for (var t = this.target.numElements, e = t, i = 0, n = 0, o = 0; t > o; o++) {
					var s = this.target.getElementAt(o);
					if (s && s.includeInLayout) var r = s.preferredHeight,
						i = i + s.preferredWidth,
						n = Math.max(n, r);
					else e--
				}
				t = isNaN(this._gap) ? 0 : this._gap, i += (e - 1) * t, s = isNaN(this._padding) ? 0 : this._padding, e = isNaN(this._paddingLeft) ? s : this._paddingLeft, t = isNaN(this._paddingRight) ? s : this._paddingRight, o = isNaN(this._paddingTop) ? s : this._paddingTop, s = isNaN(this._paddingBottom) ? s : this._paddingBottom, o += s, this.target.measuredWidth = Math.ceil(i + (e + t)), this.target.measuredHeight = Math.ceil(n + o)
			}, n.prototype.updateDisplayList = function(t, i) {
				e.prototype.updateDisplayList.call(this, t, i), this.target && (this.useVirtualLayout ? this.updateDisplayListVirtual(t, i) : this.updateDisplayListReal(t, i))
			}, n.prototype.getStartPosition = function(t) {
				var e = isNaN(this._padding) ? 0 : this._padding,
					i = isNaN(this._paddingLeft) ? e : this._paddingLeft,
					e = isNaN(this._gap) ? 0 : this._gap;
				if (!this.useVirtualLayout) {
					var n;
					return this.target && (n = this.target.getElementAt(t)), n ? n.x : i
				}
				n = this.typicalLayoutRect ? this.typicalLayoutRect.width : 71;
				for (var o = 0; t > o; o++) {
					var s = this.elementSizeTable[o];
					isNaN(s) && (s = n), i += s + e
				}
				return i
			}, n.prototype.getElementSize = function(t) {
				return this.useVirtualLayout ? (t = this.elementSizeTable[t], isNaN(t) && (t = this.typicalLayoutRect ? this.typicalLayoutRect.width : 71), t) : this.target ? this.target.getElementAt(t).width : 0
			}, n.prototype.getElementTotalSize = function() {
				for (var t = this.typicalLayoutRect ? this.typicalLayoutRect.width : 71, e = isNaN(this._gap) ? 0 : this._gap, i = 0, n = this.target.numElements, o = 0; n > o; o++) {
					var s = this.elementSizeTable[o];
					isNaN(s) && (s = t), i += s + e
				}
				return i - e
			}, n.prototype.elementAdded = function(t) {
				this.useVirtualLayout && (e.prototype.elementAdded.call(this, t), this.elementSizeTable.splice(t, 0, this.typicalLayoutRect ? this.typicalLayoutRect.width : 71))
			}, n.prototype.elementRemoved = function(t) {
				this.useVirtualLayout && (e.prototype.elementRemoved.call(this, t), this.elementSizeTable.splice(t, 1))
			}, n.prototype.clearVirtualLayoutCache = function() {
				this.useVirtualLayout && (e.prototype.clearVirtualLayoutCache.call(this), this.elementSizeTable = [], this.maxElementHeight = 0)
			}, n.prototype.findIndexAt = function(t, e, i) {
				var n = (e + i) / 2,
					o = this.getStartPosition(n),
					s = this.getElementSize(n),
					r = isNaN(this._gap) ? 0 : this._gap;
				return t >= o && o + s + r > t ? n : e == i ? -1 : o > t ? this.findIndexAt(t, e, Math.max(e, n - 1)) : this.findIndexAt(t, Math.min(n + 1, i), i)
			}, n.prototype.scrollPositionChanged = function() {
				e.prototype.scrollPositionChanged.call(this), this.useVirtualLayout && this.getIndexInView() && (this.indexInViewCalculated = !0, this.target.invalidateDisplayList())
			}, n.prototype.getIndexInView = function() {
				if (!this.target || 0 == this.target.numElements || isNaN(this.target.width) || 0 == this.target.width || isNaN(this.target.height) || 0 == this.target.height) return this.startIndex = this.endIndex = -1, !1;
				var t = isNaN(this._padding) ? 0 : this._padding,
					e = isNaN(this._paddingLeft) ? t : this._paddingLeft,
					i = isNaN(this._paddingRight) ? t : this._paddingRight;
				isNaN(this._paddingTop), isNaN(this._paddingBottom);
				var t = this.target.numElements,
					n = this.getStartPosition(t - 1) + this.elementSizeTable[t - 1] + i,
					o = this.target.horizontalScrollPosition;
				return o > n - i ? (this.endIndex = this.startIndex = -1, !1) : (i = this.target.horizontalScrollPosition + this.target.width, e > i ? (this.endIndex = this.startIndex = -1, !1) : (e = this.startIndex, n = this.endIndex, this.startIndex = this.findIndexAt(o, 0, t - 1), -1 == this.startIndex && (this.startIndex = 0), this.endIndex = this.findIndexAt(i, 0, t - 1), -1 == this.endIndex && (this.endIndex = t - 1), e != this.startIndex || n != this.endIndex))
			}, n.prototype.updateDisplayListVirtual = function(e, i) {
				this.indexInViewCalculated ? this.indexInViewCalculated = !1 : this.getIndexInView();
				var n = isNaN(this._padding) ? 0 : this._padding,
					o = isNaN(this._paddingRight) ? n : this._paddingRight,
					s = isNaN(this._paddingTop) ? n : this._paddingTop,
					r = isNaN(this._paddingBottom) ? n : this._paddingBottom,
					a = isNaN(this._gap) ? 0 : this._gap,
					h = this.target.numElements;
				if (-1 == this.startIndex || -1 == this.endIndex) o = this.getStartPosition(h) - a + o, this.target.setContentSize(Math.ceil(o), this.target.contentHeight);
				else {
					this.target.setVirtualElementIndicesInView(this.startIndex, this.endIndex);
					var l = this._verticalAlign == t.VerticalAlign.JUSTIFY || this._verticalAlign == t.VerticalAlign.CONTENT_JUSTIFY,
						p = this._verticalAlign == t.VerticalAlign.CONTENT_JUSTIFY,
						c = 0;
					l || (this._verticalAlign == t.VerticalAlign.MIDDLE ? c = .5 : this._verticalAlign == t.VerticalAlign.BOTTOM && (c = 1));
					var u, d = Math.max(0, i - s - r),
						m = Math.ceil(d),
						_ = this.typicalLayoutRect ? this.typicalLayoutRect.width : 71,
						n = Math.max(this.typicalLayoutRect ? this.typicalLayoutRect.height : 22, this.maxElementHeight);
					if (p) {
						for (var y = this.startIndex; y <= this.endIndex; y++)(u = this.target.getVirtualElementAt(y)) && u.includeInLayout && (this.maxElementHeight = Math.max(this.maxElementHeight, u.preferredHeight));
						m = Math.ceil(Math.max(d, this.maxElementHeight))
					}
					for (var f = 0, g = 0, y = 0, v = !1, x = this.startIndex; x <= this.endIndex; x++) g = 0, (u = this.target.getVirtualElementAt(x)) && (u.includeInLayout ? (l ? (g = s, u.setLayoutBoundsSize(0 / 0, m)) : (g = (d - u.layoutBoundsHeight) * c, g = g > 0 ? g : 0, g = s + g), p || (this.maxElementHeight = Math.max(this.maxElementHeight, u.preferredHeight)), y = Math.max(y, u.layoutBoundsHeight), v || (f = isNaN(this.elementSizeTable[x]) ? _ : this.elementSizeTable[x], f != u.layoutBoundsWidth && (v = !0)), 0 == x && 0 < this.elementSizeTable.length && this.elementSizeTable[x] != u.layoutBoundsWidth && (this.typicalLayoutRect = null), this.elementSizeTable[x] = u.layoutBoundsWidth, f = this.getStartPosition(x), u.setLayoutBoundsPosition(Math.round(f), Math.round(g))) : this.elementSizeTable[x] = 0);
					y += s + r, o = this.getStartPosition(h) - a + o, this.target.setContentSize(Math.ceil(o), Math.ceil(y)), (v || n < this.maxElementHeight) && this.target.invalidateSize()
				}
			}, n.prototype.updateDisplayListReal = function(e, o) {
				var s = isNaN(this._padding) ? 0 : this._padding,
					r = isNaN(this._paddingLeft) ? s : this._paddingLeft,
					a = isNaN(this._paddingRight) ? s : this._paddingRight,
					h = isNaN(this._paddingTop) ? s : this._paddingTop,
					s = isNaN(this._paddingBottom) ? s : this._paddingBottom,
					l = isNaN(this._gap) ? 0 : this._gap,
					p = Math.max(0, e - r - a),
					c = Math.max(0, o - h - s),
					u = this._horizontalAlign == t.HorizontalAlign.JUSTIFY,
					d = this._verticalAlign == t.VerticalAlign.JUSTIFY || this._verticalAlign == t.VerticalAlign.CONTENT_JUSTIFY,
					m = 0;
				d || (this._verticalAlign == t.VerticalAlign.MIDDLE ? m = .5 : this._verticalAlign == t.VerticalAlign.BOTTOM && (m = 1));
				var _, y, f, g = this.target.numElements,
					v = g,
					x = r,
					b = h,
					C = 0,
					b = 0,
					E = [],
					w = p;
				for (_ = 0; g > _; _++) y = this.target.getElementAt(_), y && y.includeInLayout ? (this.maxElementHeight = Math.max(this.maxElementHeight, y.preferredHeight), u ? C += y.preferredWidth : isNaN(y.percentWidth) ? w -= y.preferredWidth : (b += y.percentWidth, f = new i, f.layoutElement = y, f.percent = y.percentWidth, f.min = y.minWidth, f.max = y.maxWidth, E.push(f))) : v--;
				var A, w = w - l * (v - 1),
					w = w > 0 ? w : 0,
					D = p - C - l * (v - 1),
					S = v,
					T = [];
				if (u) {
					if (0 > D) {
						for (A = w / v, _ = 0; g > _; _++)(y = this.target.getElementAt(_)) && y.includeInLayout && (y = y.preferredWidth, A >= y && (w -= y, S--));
						w = w > 0 ? w : 0
					}
				} else if (b > 0) {
					for (n.flexChildrenProportionally(p, w, b, E), p = 0, y = E.length, _ = 0; y > _; _++) f = E[_], b = Math.round(f.size + p), p += f.size - b, T[f.layoutElement.hashCode] = b, w -= b;
					w = w > 0 ? w : 0
				}
				for (this._horizontalAlign == t.HorizontalAlign.CENTER ? x = r + .5 * w : this._horizontalAlign == t.HorizontalAlign.RIGHT && (x = r + w), E = h, y = v = 0, f = Math.ceil(c), this._verticalAlign == t.VerticalAlign.CONTENT_JUSTIFY && (f = Math.ceil(Math.max(c, this.maxElementHeight))), _ = p = 0; g > _; _++) b = 0, (y = this.target.getElementAt(_)) && y.includeInLayout && (v = 0 / 0, u ? (b = 0 / 0, D > 0 ? b = w * y.preferredWidth / C : 0 > D && y.preferredWidth > A && (b = w / S), isNaN(b) || (v = Math.round(b + p), p += b - v)) : v = T[y.hashCode], d ? (b = h, y.setLayoutBoundsSize(v, f)) : (b = 0 / 0, isNaN(y.percentHeight) || (b = Math.min(100, y.percentHeight), b = Math.round(.01 * c * b)), y.setLayoutBoundsSize(v, b), b = (c - y.layoutBoundsHeight) * m, b = b > 0 ? b : 0, b = h + b), y.setLayoutBoundsPosition(Math.round(x), Math.round(b)), v = Math.ceil(y.layoutBoundsWidth), y = Math.ceil(y.layoutBoundsHeight), r = Math.max(r, x + v), E = Math.max(E, b + y), x += v + l);
				this.target.setContentSize(Math.ceil(r + a), Math.ceil(E + s))
			}, n.flexChildrenProportionally = function(t, e, i, n) {
				var o, s = n.length;
				do {
					o = !0;
					var r = e - t * i / 100;
					r > 0 ? e -= r : r = 0;
					for (var a = e / i, h = 0; s > h; h++) {
						var l = n[h],
							p = l.percent * a;
						if (p < l.min) {
							o = l.min, l.size = o, n[h] = n[--s], n[s] = l, i -= l.percent, r >= o || (e -= o - r), o = !1;
							break
						}
						if (p > l.max) {
							o = l.max, l.size = o, n[h] = n[--s], n[s] = l, i -= l.percent, r >= o || (e -= o - r), o = !1;
							break
						}
						l.size = p
					}
				} while (!o)
			}, n.prototype.getElementBoundsLeftOfScrollRect = function(e) {
				var i = new t.Rectangle;
				if (!this.target) return i;
				var n = isNaN(this._padding) ? 0 : this._padding,
					o = isNaN(this._paddingLeft) ? n : this._paddingLeft,
					n = isNaN(this._paddingRight) ? n : this._paddingRight,
					s = this.findIndexAt(e.x, 0, this.target.numElements - 1);
				return -1 == s ? (e.x > this.target.contentWidth - n ? (i.x = this.target.contentWidth - n, i.right = this.target.contentWidth) : (i.x = 0, i.right = o), i) : (i.x = this.getStartPosition(s), i.right = this.getElementSize(s) + i.x, i.x == e.x && (s--, -1 != s ? (i.x = this.getStartPosition(s), i.right = this.getElementSize(s) + i.x) : (i.x = 0, i.right = o)), i)
			}, n.prototype.getElementBoundsRightOfScrollRect = function(e) {
				var i = new t.Rectangle;
				if (!this.target) return i;
				var n = this.target.numElements,
					o = isNaN(this._padding) ? 0 : this._padding,
					s = isNaN(this._paddingLeft) ? o : this._paddingLeft,
					o = isNaN(this._paddingRight) ? o : this._paddingRight,
					r = this.findIndexAt(e.right, 0, n - 1);
				return -1 == r ? (e.right < s ? (i.x = 0, i.right = s) : (i.x = this.target.contentWidth - o, i.right = this.target.contentWidth), i) : (i.x = this.getStartPosition(r), i.right = this.getElementSize(r) + i.x, i.right <= e.right && (r++, n > r ? (i.x = this.getStartPosition(r), i.right = this.getElementSize(r) + i.x) : (i.x = this.target.contentWidth - o, i.right = this.target.contentWidth)), i)
			}, n
		}(t.LayoutBase);
	t.HorizontalLayout = e;
	var i = function() {
			return function() {
				this.size = 0
			}
		}()
}(ns_egret || (ns_egret = {})), __extends = this.__extends ||
function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype, t.prototype = new i
}, function(t) {
	var e = function(e) {
			function i() {
				e.call(this), this.explicitHorizontalGap = 0 / 0, this._horizontalGap = 6, this.explicitVerticalGap = 0 / 0, this._verticalGap = 6, this._columnCount = -1, this._requestedColumnCount = 0, this._rowCount = -1, this._requestedRowCount = 0, this._rowHeight = this.explicitRowHeight = this._columnWidth = this.explicitColumnWidth = 0 / 0, this._padding = 0, this._paddingBottom = this._paddingTop = this._paddingRight = this._paddingLeft = 0 / 0, this._horizontalAlign = t.HorizontalAlign.JUSTIFY, this._verticalAlign = t.VerticalAlign.JUSTIFY, this._columnAlign = t.ColumnAlign.LEFT, this._rowAlign = t.RowAlign.TOP, this._orientation = t.TileOrientation.ROWS, this.maxElementHeight = this.maxElementWidth = 0, this.endIndex = this.startIndex = -1, this.indexInViewCalculated = !1
			}
			return __extends(i, e), Object.defineProperty(i.prototype, "horizontalGap", {
				get: function() {
					return this._horizontalGap
				},
				set: function(e) {
					e != this._horizontalGap && (this._horizontalGap = this.explicitHorizontalGap = e, this.invalidateTargetSizeAndDisplayList(), this.hasEventListener("gapChanged") && this.dispatchEvent(new t.Event("gapChanged")))
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "verticalGap", {
				get: function() {
					return this._verticalGap
				},
				set: function(e) {
					e != this._verticalGap && (this._verticalGap = this.explicitVerticalGap = e, this.invalidateTargetSizeAndDisplayList(), this.hasEventListener("gapChanged") && this.dispatchEvent(new t.Event("gapChanged")))
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "columnCount", {
				get: function() {
					return this._columnCount
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "requestedColumnCount", {
				get: function() {
					return this._requestedColumnCount
				},
				set: function(t) {
					this._requestedColumnCount != t && (this._columnCount = this._requestedColumnCount = t, this.invalidateTargetSizeAndDisplayList())
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "rowCount", {
				get: function() {
					return this._rowCount
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "requestedRowCount", {
				get: function() {
					return this._requestedRowCount
				},
				set: function(t) {
					this._requestedRowCount != t && (this._rowCount = this._requestedRowCount = t, this.invalidateTargetSizeAndDisplayList())
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "columnWidth", {
				get: function() {
					return this._columnWidth
				},
				set: function(t) {
					t != this._columnWidth && (this._columnWidth = this.explicitColumnWidth = t, this.invalidateTargetSizeAndDisplayList())
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "rowHeight", {
				get: function() {
					return this._rowHeight
				},
				set: function(t) {
					t != this._rowHeight && (this._rowHeight = this.explicitRowHeight = t, this.invalidateTargetSizeAndDisplayList())
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "padding", {
				get: function() {
					return this._padding
				},
				set: function(t) {
					this._padding != t && (this._padding = t, this.invalidateTargetSizeAndDisplayList())
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "paddingLeft", {
				get: function() {
					return this._paddingLeft
				},
				set: function(t) {
					this._paddingLeft != t && (this._paddingLeft = t, this.invalidateTargetSizeAndDisplayList())
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "paddingRight", {
				get: function() {
					return this._paddingRight
				},
				set: function(t) {
					this._paddingRight != t && (this._paddingRight = t, this.invalidateTargetSizeAndDisplayList())
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "paddingTop", {
				get: function() {
					return this._paddingTop
				},
				set: function(t) {
					this._paddingTop != t && (this._paddingTop = t, this.invalidateTargetSizeAndDisplayList())
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "paddingBottom", {
				get: function() {
					return this._paddingBottom
				},
				set: function(t) {
					this._paddingBottom != t && (this._paddingBottom = t, this.invalidateTargetSizeAndDisplayList())
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "horizontalAlign", {
				get: function() {
					return this._horizontalAlign
				},
				set: function(t) {
					this._horizontalAlign != t && (this._horizontalAlign = t, this.invalidateTargetSizeAndDisplayList())
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "verticalAlign", {
				get: function() {
					return this._verticalAlign
				},
				set: function(t) {
					this._verticalAlign != t && (this._verticalAlign = t, this.invalidateTargetSizeAndDisplayList())
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "columnAlign", {
				get: function() {
					return this._columnAlign
				},
				set: function(t) {
					this._columnAlign != t && (this._columnAlign = t, this.invalidateTargetSizeAndDisplayList())
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "rowAlign", {
				get: function() {
					return this._rowAlign
				},
				set: function(t) {
					this._rowAlign != t && (this._rowAlign = t, this.invalidateTargetSizeAndDisplayList())
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "orientation", {
				get: function() {
					return this._orientation
				},
				set: function(e) {
					this._orientation != e && (this._orientation = e, this.invalidateTargetSizeAndDisplayList(), this.hasEventListener("orientationChanged") && this.dispatchEvent(new t.Event("orientationChanged")))
				},
				enumerable: !0,
				configurable: !0
			}), i.prototype.invalidateTargetSizeAndDisplayList = function() {
				this.target && (this.target.invalidateSize(), this.target.invalidateDisplayList())
			}, i.prototype.measure = function() {
				if (this.target) {
					var t = this._columnCount,
						e = this._rowCount,
						i = this._columnWidth,
						n = this._rowHeight,
						o = 0,
						s = 0;
					this.calculateRowAndColumn(this.target.explicitWidth, this.target.explicitHeight);
					var r = 0 < this._requestedColumnCount ? this._requestedColumnCount : this._columnCount,
						a = 0 < this._requestedRowCount ? this._requestedRowCount : this._rowCount,
						h = isNaN(this._horizontalGap) ? 0 : this._horizontalGap,
						l = isNaN(this._verticalGap) ? 0 : this._verticalGap;
					r > 0 && (o = r * (this._columnWidth + h) - h), a > 0 && (s = a * (this._rowHeight + l) - l), l = isNaN(this._padding) ? 0 : this._padding, r = isNaN(this._paddingLeft) ? l : this._paddingLeft, a = isNaN(this._paddingRight) ? l : this._paddingRight, h = isNaN(this._paddingTop) ? l : this._paddingTop, l = isNaN(this._paddingBottom) ? l : this._paddingBottom, h += l, this.target.measuredWidth = Math.ceil(o + (r + a)), this.target.measuredHeight = Math.ceil(s + h), this._columnCount = t, this._rowCount = e, this._columnWidth = i, this._rowHeight = n
				}
			}, i.prototype.calculateRowAndColumn = function(e, i) {
				var n = isNaN(this._horizontalGap) ? 0 : this._horizontalGap,
					o = isNaN(this._verticalGap) ? 0 : this._verticalGap;
				this._rowCount = this._columnCount = -1;
				for (var s = this.target.numElements, r = s, a = 0; r > a; a++) {
					var h = this.target.getElementAt(a);
					h && !h.includeInLayout && s--
				}
				if (0 == s) this._rowCount = this._columnCount = 0;
				else {
					(isNaN(this.explicitColumnWidth) || isNaN(this.explicitRowHeight)) && this.updateMaxElementSize(), this._columnWidth = isNaN(this.explicitColumnWidth) ? this.maxElementWidth : this.explicitColumnWidth, this._rowHeight = isNaN(this.explicitRowHeight) ? this.maxElementHeight : this.explicitRowHeight, r = this._columnWidth + n, 0 >= r && (r = 1), a = this._rowHeight + o, 0 >= a && (a = 1);
					var h = this.orientation == t.TileOrientation.COLUMNS,
						l = !isNaN(e),
						p = !isNaN(i),
						c = isNaN(this._padding) ? 0 : this._padding,
						u = isNaN(this._paddingLeft) ? c : this._paddingLeft,
						d = isNaN(this._paddingRight) ? c : this._paddingRight,
						m = isNaN(this._paddingTop) ? c : this._paddingTop,
						c = isNaN(this._paddingBottom) ? c : this._paddingBottom;
					0 < this._requestedColumnCount || 0 < this._requestedRowCount ? (0 < this._requestedRowCount && (this._rowCount = Math.min(this._requestedRowCount, s)), 0 < this._requestedColumnCount && (this._columnCount = Math.min(this._requestedColumnCount, s))) : l || p ? !l || p && h ? (n = Math.max(0, i - m - c), this._rowCount = Math.floor((n + o) / a), this._rowCount = Math.max(1, Math.min(this._rowCount, s))) : (o = Math.max(0, e - u - d), this._columnCount = Math.floor((o + n) / r), this._columnCount = Math.max(1, Math.min(this._columnCount, s))) : (n = Math.sqrt(s * r * a), h ? this._rowCount = Math.max(1, Math.round(n / a)) : this._columnCount = Math.max(1, Math.round(n / r))), -1 == this._rowCount && (this._rowCount = Math.max(1, Math.ceil(s / this._columnCount))), -1 == this._columnCount && (this._columnCount = Math.max(1, Math.ceil(s / this._rowCount))), 0 < this._requestedColumnCount && 0 < this._requestedRowCount && (this.orientation == t.TileOrientation.ROWS ? this._rowCount = Math.max(1, Math.ceil(s / this._requestedColumnCount)) : this._columnCount = Math.max(1, Math.ceil(s / this._requestedRowCount)))
				}
			}, i.prototype.updateMaxElementSize = function() {
				this.target && (this.useVirtualLayout ? this.updateMaxElementSizeVirtual() : this.updateMaxElementSizeReal())
			}, i.prototype.updateMaxElementSizeVirtual = function() {
				var t = this.typicalLayoutRect ? this.typicalLayoutRect.height : 22;
				if (this.maxElementWidth = Math.max(this.maxElementWidth, this.typicalLayoutRect ? this.typicalLayoutRect.width : 22), this.maxElementHeight = Math.max(this.maxElementHeight, t), -1 != this.startIndex && -1 != this.endIndex) for (t = this.startIndex; t <= this.endIndex; t++) {
					var e = this.target.getVirtualElementAt(t);
					e && e.includeInLayout && (this.maxElementWidth = Math.max(this.maxElementWidth, e.preferredWidth), this.maxElementHeight = Math.max(this.maxElementHeight, e.preferredHeight))
				}
			}, i.prototype.updateMaxElementSizeReal = function() {
				for (var t = this.target.numElements, e = 0; t > e; e++) {
					var i = this.target.getElementAt(e);
					i && i.includeInLayout && (this.maxElementWidth = Math.max(this.maxElementWidth, i.preferredWidth), this.maxElementHeight = Math.max(this.maxElementHeight, i.preferredHeight))
				}
			}, i.prototype.clearVirtualLayoutCache = function() {
				e.prototype.clearVirtualLayoutCache.call(this), this.maxElementHeight = this.maxElementWidth = 0
			}, i.prototype.scrollPositionChanged = function() {
				e.prototype.scrollPositionChanged.call(this), this.useVirtualLayout && this.getIndexInView() && (this.indexInViewCalculated = !0, this.target.invalidateDisplayList())
			}, i.prototype.getIndexInView = function() {
				if (this.target && 0 != this.target.numElements) {
					this.startIndex = this.endIndex = -1, !1;
					var e = this.target.numElements;
					if (!this.useVirtualLayout) return this.startIndex = 0, this.endIndex = e - 1, !1;
					if (isNaN(this.target.width) || 0 == this.target.width || isNaN(this.target.height) || 0 == this.target.height) return this.startIndex = this.endIndex = -1, !1;
					var i = this.startIndex,
						n = this.endIndex,
						o = isNaN(this._padding) ? 0 : this._padding,
						s = isNaN(this._paddingLeft) ? o : this._paddingLeft,
						o = isNaN(this._paddingTop) ? o : this._paddingTop,
						r = isNaN(this._horizontalGap) ? 0 : this._horizontalGap,
						a = isNaN(this._verticalGap) ? 0 : this._verticalGap;
					if (this.orientation == t.TileOrientation.COLUMNS) {
						if (r = this._columnWidth + r, 0 >= r) return this.startIndex = 0, this.endIndex = e - 1, !1;
						a = this.target.horizontalScrollPosition + this.target.width, o = Math.floor((this.target.horizontalScrollPosition - s) / r), 0 > o && (o = 0), s = Math.ceil((a - s) / r), 0 > s && (s = 0), this.startIndex = Math.min(e - 1, Math.max(0, o * this._rowCount)), this.endIndex = Math.min(e - 1, Math.max(0, s * this._rowCount - 1))
					} else {
						if (r = this._rowHeight + a, 0 >= r) return this.startIndex = 0, this.endIndex = e - 1, !1;
						a = this.target.verticalScrollPosition + this.target.height, s = Math.floor((this.target.verticalScrollPosition - o) / r), 0 > s && (s = 0), o = Math.ceil((a - o) / r), 0 > o && (o = 0), this.startIndex = Math.min(e - 1, Math.max(0, s * this._columnCount)), this.endIndex = Math.min(e - 1, Math.max(0, o * this._columnCount - 1))
					}
					return this.startIndex != i || this.endIndex != n
				}
			}, i.prototype.updateDisplayList = function(i, n) {
				if (e.prototype.updateDisplayList.call(this, i, n), this.target) {
					var o = isNaN(this._padding) ? 0 : this._padding,
						s = isNaN(this._paddingLeft) ? o : this._paddingLeft,
						r = isNaN(this._paddingRight) ? o : this._paddingRight,
						a = isNaN(this._paddingTop) ? o : this._paddingTop,
						h = isNaN(this._paddingBottom) ? o : this._paddingBottom,
						o = isNaN(this._horizontalGap) ? 0 : this._horizontalGap,
						l = isNaN(this._verticalGap) ? 0 : this._verticalGap;
					if (this.indexInViewCalculated) this.indexInViewCalculated = !1;
					else {
						if (this.calculateRowAndColumn(i, n), 0 == this._rowCount || 0 == this._columnCount) return void this.target.setContentSize(s + r, a + h);
						this.adjustForJustify(i, n), this.getIndexInView()
					}
					if (this.useVirtualLayout && (this.calculateRowAndColumn(i, n), this.adjustForJustify(i, n)), -1 == this.startIndex || -1 == this.endIndex) this.target.setContentSize(0, 0);
					else {
						this.target.setVirtualElementIndicesInView(this.startIndex, this.endIndex);
						for (var p, c, u, d = this.orientation == t.TileOrientation.COLUMNS, m = this.startIndex, _ = this.startIndex; _ <= this.endIndex; _++) p = this.useVirtualLayout ? this.target.getVirtualElementAt(_) : this.target.getElementAt(_), null != p && p.includeInLayout && (d ? (c = Math.ceil((m + 1) / this._rowCount) - 1, u = Math.ceil((m + 1) % this._rowCount) - 1, -1 == u && (u = this._rowCount - 1)) : (c = Math.ceil((m + 1) % this._columnCount) - 1, -1 == c && (c = this._columnCount - 1), u = Math.ceil((m + 1) / this._columnCount) - 1), c = c * (this._columnWidth + o) + s, u = u * (this._rowHeight + l) + a, this.sizeAndPositionElement(p, c, u, this._columnWidth, this.rowHeight), m++);
						a += h, l = (this._rowHeight + l) * this._rowCount - l, this.target.setContentSize(Math.ceil((this._columnWidth + o) * this._columnCount - o + (s + r)), Math.ceil(l + a))
					}
				}
			}, i.prototype.sizeAndPositionElement = function(e, i, n, o, s) {
				var r = 0 / 0,
					a = 0 / 0;
				switch (this.horizontalAlign == t.HorizontalAlign.JUSTIFY ? r = o : isNaN(e.percentWidth) || (r = .01 * o * e.percentWidth), this.verticalAlign == t.VerticalAlign.JUSTIFY ? a = s : isNaN(e.percentHeight) || (a = .01 * s * e.percentHeight), e.setLayoutBoundsSize(Math.round(r), Math.round(a)), r = i, this.horizontalAlign) {
				case t.HorizontalAlign.RIGHT:
					r += o - e.layoutBoundsWidth;
					break;
				case t.HorizontalAlign.CENTER:
					r = i + (o - e.layoutBoundsWidth) / 2
				}
				switch (i = n, this.verticalAlign) {
				case t.VerticalAlign.BOTTOM:
					i += s - e.layoutBoundsHeight;
					break;
				case t.VerticalAlign.MIDDLE:
					i += (s - e.layoutBoundsHeight) / 2
				}
				e.setLayoutBoundsPosition(Math.round(r), Math.round(i))
			}, i.prototype.adjustForJustify = function(e, i) {
				var n = isNaN(this._padding) ? 0 : this._padding,
					o = isNaN(this._paddingLeft) ? n : this._paddingLeft,
					s = isNaN(this._paddingRight) ? n : this._paddingRight,
					r = isNaN(this._paddingTop) ? n : this._paddingTop,
					n = isNaN(this._paddingBottom) ? n : this._paddingBottom,
					o = Math.max(0, e - o - s),
					r = Math.max(0, i - r - n);
				isNaN(this.explicitVerticalGap) || (this._verticalGap = this.explicitVerticalGap), isNaN(this.explicitHorizontalGap) || (this._horizontalGap = this.explicitHorizontalGap), this._verticalGap = isNaN(this._verticalGap) ? 0 : this._verticalGap, this._horizontalGap = isNaN(this._horizontalGap) ? 0 : this._horizontalGap, r -= this._rowHeight * this._rowCount, o -= this._columnWidth * this._columnCount, r > 0 && (this.rowAlign == t.RowAlign.JUSTIFY_USING_GAP ? (s = Math.max(1, this._rowCount - 1), this._verticalGap = r / s) : this.rowAlign == t.RowAlign.JUSTIFY_USING_HEIGHT && 0 < this._rowCount && (this._rowHeight += (r - (this._rowCount - 1) * this._verticalGap) / this._rowCount)), o > 0 && (this.columnAlign == t.ColumnAlign.JUSTIFY_USING_GAP ? (s = Math.max(1, this._columnCount - 1), this._horizontalGap = o / s) : this.columnAlign == t.ColumnAlign.JUSTIFY_USING_WIDTH && 0 < this._columnCount && (this._columnWidth += (o - (this._columnCount - 1) * this._horizontalGap) / this._columnCount))
			}, i.prototype.getElementBoundsLeftOfScrollRect = function(e) {
				var i = new t.Rectangle,
					n = isNaN(this._padding) ? 0 : this._padding,
					o = isNaN(this._paddingLeft) ? n : this._paddingLeft,
					n = isNaN(this._paddingRight) ? n : this._paddingRight,
					s = isNaN(this._horizontalGap) ? 0 : this._horizontalGap;
				return e.x > this.target.contentWidth - n ? (i.x = this.target.contentWidth - n, i.right = this.target.contentWidth) : e.x > o ? (e = Math.floor((e.x - 1 - o) / (this._columnWidth + s)), i.x = this.leftEdge(e), i.right = this.rightEdge(e)) : (i.x = 0, i.right = o), i
			}, i.prototype.getElementBoundsRightOfScrollRect = function(e) {
				var i = isNaN(this._padding) ? 0 : this._padding,
					n = isNaN(this._paddingLeft) ? i : this._paddingLeft,
					o = isNaN(this._paddingRight) ? i : this._paddingRight,
					s = isNaN(this._horizontalGap) ? 0 : this._horizontalGap,
					i = new t.Rectangle;
				return e.right < n ? (i.x = 0, i.right = n) : e.right < this.target.contentWidth - o ? (e = Math.floor((e.right + 1 + s - n) / (this._columnWidth + s)), i.x = this.leftEdge(e), i.right = this.rightEdge(e)) : (i.x = this.target.contentWidth - o, i.right = this.target.contentWidth), i
			}, i.prototype.getElementBoundsAboveScrollRect = function(e) {
				var i = isNaN(this._padding) ? 0 : this._padding,
					n = isNaN(this._paddingTop) ? i : this._paddingTop,
					o = isNaN(this._paddingBottom) ? i : this._paddingBottom,
					s = isNaN(this._verticalGap) ? 0 : this._verticalGap,
					i = new t.Rectangle;
				return e.y > this.target.contentHeight - o ? (i.y = this.target.contentHeight - o, i.bottom = this.target.contentHeight) : e.y > n ? (e = Math.floor((e.y - 1 - n) / (this._rowHeight + s)), i.y = this.topEdge(e), i.bottom = this.bottomEdge(e)) : (i.y = 0, i.bottom = n), i
			}, i.prototype.getElementBoundsBelowScrollRect = function(e) {
				var i = isNaN(this._padding) ? 0 : this._padding,
					n = isNaN(this._paddingTop) ? i : this._paddingTop,
					o = isNaN(this._paddingBottom) ? i : this._paddingBottom,
					s = isNaN(this._verticalGap) ? 0 : this._verticalGap,
					i = new t.Rectangle;
				return e.bottom < n ? (i.y = 0, i.bottom = n) : e.bottom < this.target.contentHeight - o ? (e = Math.floor((e.bottom + 1 + s - n) / (this._rowHeight + s)), i.y = this.topEdge(e), i.bottom = this.bottomEdge(e)) : (i.y = this.target.contentHeight - o, i.bottom = this.target.contentHeight), i
			}, i.prototype.leftEdge = function(t) {
				if (0 > t) return 0;
				var e = isNaN(this._padding) ? 0 : this._padding,
					e = isNaN(this._paddingLeft) ? e : this._paddingLeft,
					i = isNaN(this._horizontalGap) ? 0 : this._horizontalGap;
				return Math.max(0, t * (this._columnWidth + i)) + e
			}, i.prototype.rightEdge = function(t) {
				if (0 > t) return 0;
				var e = isNaN(this._padding) ? 0 : this._padding,
					e = isNaN(this._paddingLeft) ? e : this._paddingLeft,
					i = isNaN(this._horizontalGap) ? 0 : this._horizontalGap;
				return Math.min(this.target.contentWidth, t * (this._columnWidth + i) + this._columnWidth) + e
			}, i.prototype.topEdge = function(t) {
				if (0 > t) return 0;
				var e = isNaN(this._padding) ? 0 : this._padding,
					e = isNaN(this._paddingTop) ? e : this._paddingTop,
					i = isNaN(this._verticalGap) ? 0 : this._verticalGap;
				return Math.max(0, t * (this._rowHeight + i)) + e
			}, i.prototype.bottomEdge = function(t) {
				if (0 > t) return 0;
				var e = isNaN(this._padding) ? 0 : this._padding,
					e = isNaN(this._paddingTop) ? e : this._paddingTop,
					i = isNaN(this._verticalGap) ? 0 : this._verticalGap;
				return Math.min(this.target.contentHeight, t * (this._rowHeight + i) + this._rowHeight) + e
			}, i
		}(t.LayoutBase);
	t.TileLayout = e
}(ns_egret || (ns_egret = {})), function(t) {
	var e = function() {
			function t(t, e, i) {
				this.raw_getElementAt = "raw_getElementAt", this.raw_addElementAt = "raw_addElementAt", this.raw_getElementIndex = "raw_getElementIndex", this.raw_removeElement = "raw_removeElement", this.raw_removeElementAt = "raw_removeElementAt", this.raw_setElementIndex = "raw_setElementIndex", this.owner = t, this.lowerBoundReference = e, this.upperBoundReference = i
			}
			return Object.defineProperty(t.prototype, "numElements", {
				get: function() {
					return this.owner[this.upperBoundReference] - this.owner[this.lowerBoundReference]
				},
				enumerable: !0,
				configurable: !0
			}), t.prototype.getElementAt = function(t) {
				return this.owner[this.raw_getElementAt](this.owner[this.lowerBoundReference] + t)
			}, t.prototype.addElement = function(t) {
				var e = this.owner[this.upperBoundReference];
				return t.parent === this.owner && e--, this.owner[this.upperBoundReference]++, this.owner[this.raw_addElementAt](t, e), t.ownerChanged(this), t
			}, t.prototype.addElementAt = function(t, e) {
				return this.owner[this.upperBoundReference]++, this.owner[this.raw_addElementAt](t, this.owner[this.lowerBoundReference] + e), t.ownerChanged(this), t
			}, t.prototype.removeElement = function(t) {
				var e = this.owner[this.raw_getElementIndex](t);
				return this.owner[this.lowerBoundReference] <= e && e < this.owner[this.upperBoundReference] && (this.owner[this.raw_removeElement](t), this.owner[this.upperBoundReference]--), t.ownerChanged(null), t
			}, t.prototype.removeElementAt = function(t) {
				t += this.owner[this.lowerBoundReference];
				var e;
				return this.owner[this.lowerBoundReference] <= t && t < this.owner[this.upperBoundReference] && (e = this.owner[this.raw_removeElementAt](t), this.owner[this.upperBoundReference]--), e.ownerChanged(null), e
			}, t.prototype.getElementIndex = function(t) {
				return t = this.owner[this.raw_getElementIndex](t), t -= this.owner[this.lowerBoundReference]
			}, t.prototype.setElementIndex = function(t, e) {
				this.owner[this.raw_setElementIndex](t, this.owner[this.lowerBoundReference] + e)
			}, t

		}();
	t.SystemContainer = e
}(ns_egret || (ns_egret = {})), __extends = this.__extends ||
function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype, t.prototype = new i
}, function(t) {
	var e = function(e) {
			function i() {
				e.call(this), this._cursorIndex = this._toolTipIndex = this._topMostIndex = this._noTopMostIndex = 0, this.addEventListener(t.Event.ADDED_TO_STAGE, this.onAddToStage, this), this.addEventListener(t.Event.REMOVED_FROM_STAGE, this.onRemoveFromStage, this)
			}
			return __extends(i, e), i.prototype.onAddToStage = function() {
				if (t.UIGlobals._systemManager) throw Error("SystemManager???GUI?????????????????????????????????????????????????????????");
				t.UIGlobals._systemManager = this, this.stage.addEventListener(t.Event.RESIZE, this.onResize, this), this.onResize()
			}, i.prototype.onRemoveFromStage = function() {
				t.UIGlobals._systemManager = null, this.stage.removeEventListener(t.Event.RESIZE, this.onResize, this)
			}, i.prototype.onResize = function() {
				this._setWidth(this.stage.stageWidth), this._setHeight(this.stage.stageHeight)
			}, Object.defineProperty(i.prototype, "x", {
				get: function() {
					return this._x
				},
				set: function() {},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "y", {
				get: function() {
					return this._y
				},
				set: function() {},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "width", {
				get: function() {
					return this._width
				},
				set: function() {},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "height", {
				get: function() {
					return this._height
				},
				set: function() {},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "scaleX", {
				get: function() {
					return this._scaleX
				},
				set: function() {},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "scaleY", {
				get: function() {
					return this._scaleY
				},
				set: function() {},
				enumerable: !0,
				configurable: !0
			}), i.prototype.setActualSize = function() {}, i.prototype.setLayoutBoundsPosition = function() {}, i.prototype.setLayoutBoundsSize = function() {}, Object.defineProperty(i.prototype, "layout", {
				get: function() {
					return this._layout
				},
				set: function(e) {
					e instanceof t.BasicLayout && this._setLayout(e)
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "popUpContainer", {
				get: function() {
					return this._popUpContainer || (this._popUpContainer = new t.SystemContainer(this, "noTopMostIndex", "topMostIndex")), this._popUpContainer
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "toolTipContainer", {
				get: function() {
					return this._toolTipContainer || (this._toolTipContainer = new t.SystemContainer(this, "topMostIndex", "toolTipIndex")), this._toolTipContainer
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "cursorContainer", {
				get: function() {
					return this._cursorContainer || (this._cursorContainer = new t.SystemContainer(this, "toolTipIndex", "cursorIndex")), this._cursorContainer
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "noTopMostIndex", {
				get: function() {
					return this._noTopMostIndex
				},
				set: function(t) {
					var e = t - this._noTopMostIndex;
					this._noTopMostIndex = t, this.topMostIndex += e
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "topMostIndex", {
				get: function() {
					return this._topMostIndex
				},
				set: function(t) {
					var e = t - this._topMostIndex;
					this._topMostIndex = t, this.toolTipIndex += e
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "toolTipIndex", {
				get: function() {
					return this._toolTipIndex
				},
				set: function(t) {
					var e = t - this._toolTipIndex;
					this._toolTipIndex = t, this.cursorIndex += e
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(i.prototype, "cursorIndex", {
				get: function() {
					return this._cursorIndex
				},
				set: function(t) {
					this._cursorIndex = t
				},
				enumerable: !0,
				configurable: !0
			}), i.prototype.addElement = function(t) {
				var e = this._noTopMostIndex;
				return t.parent == this && e--, this.addElementAt(t, e)
			}, i.prototype.addElementAt = function(t, i) {
				if (t.parent == this) {
					var n = this.getElementIndex(t);
					n < this._noTopMostIndex ? this.noTopMostIndex-- : n >= this._noTopMostIndex && n < this._topMostIndex ? this.topMostIndex-- : n >= this._topMostIndex && n < this._toolTipIndex ? this.toolTipIndex-- : this.cursorIndex--
				}
				return i <= this._noTopMostIndex ? this.noTopMostIndex++ : i > this._noTopMostIndex && i <= this._topMostIndex ? this.topMostIndex++ : i > this._topMostIndex && i <= this._toolTipIndex ? this.toolTipIndex++ : this.cursorIndex++, e.prototype.addElementAt.call(this, t, i)
			}, i.prototype.removeElement = function(t) {
				return this.removeElementAt(e.prototype.getElementIndex.call(this, t))
			}, i.prototype.removeElementAt = function(t) {
				var i = e.prototype.removeElementAt.call(this, t);
				return t < this._noTopMostIndex ? this.noTopMostIndex-- : t >= this._noTopMostIndex && t < this._topMostIndex ? this.topMostIndex-- : t >= this._topMostIndex && t < this._toolTipIndex ? this.toolTipIndex-- : this.cursorIndex--, i
			}, i.prototype.removeAllElements = function() {
				for (; 0 < this._noTopMostIndex;) e.prototype.removeElementAt.call(this, 0), this.noTopMostIndex--
			}, i.prototype.elementRemoved = function(i, n, o) {
				"undefined" == typeof o && (o = !0), o && i.dispatchEvent(new t.Event("removeFromSystemManager")), e.prototype.elementRemoved.call(this, i, n, o)
			}, i.prototype.raw_getElementAt = function(t) {
				return e.prototype.getElementAt.call(this, t)
			}, i.prototype.raw_addElement = function(t) {
				var e = this.numElements;
				return t.parent == this && e--, this.raw_addElementAt(t, e)
			}, i.prototype.raw_addElementAt = function(t, i) {
				if (t.parent == this) {
					var n = this.getElementIndex(t);
					n < this._noTopMostIndex ? this.noTopMostIndex-- : n >= this._noTopMostIndex && n < this._topMostIndex ? this.topMostIndex-- : n >= this._topMostIndex && n < this._toolTipIndex ? this.toolTipIndex-- : this.cursorIndex--
				}
				return e.prototype.addElementAt.call(this, t, i)
			}, i.prototype.raw_removeElement = function(t) {
				return e.prototype.removeElementAt.call(this, e.prototype.getElementIndex.call(this, t))
			}, i.prototype.raw_removeElementAt = function(t) {
				return e.prototype.removeElementAt.call(this, t)
			}, i.prototype.raw_removeAllElements = function() {
				for (; 0 < this.numElements;) e.prototype.removeElementAt.call(this, 0)
			}, i.prototype.raw_getElementIndex = function(t) {
				return e.prototype.getElementIndex.call(this, t)
			}, i.prototype.raw_setElementIndex = function(t, i) {
				e.prototype.setElementIndex.call(this, t, i)
			}, i.prototype.raw_swapElements = function(t, i) {
				e.prototype.swapElementsAt.call(this, e.prototype.getElementIndex.call(this, t), e.prototype.getElementIndex.call(this, i))
			}, i.prototype.raw_swapElementsAt = function(t, i) {
				e.prototype.swapElementsAt.call(this, t, i)
			}, i
		}(t.Group);
	t.SystemManager = e
}(ns_egret || (ns_egret = {})), __extends = this.__extends ||
function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype, t.prototype = new i
}, function(t) {
	var e = function(e) {
			function n() {
				e.call(this), this._popUpList = [], this.popUpDataList = [], this._modalColor = 0, this._modalAlpha = .5, this.invalidateModalFlag = !1
			}
			return __extends(n, e), Object.defineProperty(n.prototype, "popUpList", {
				get: function() {
					return this._popUpList.concat()
				},
				enumerable: !0,
				configurable: !0
			}), n.prototype.findPopUpData = function(t) {
				for (var e = this.popUpDataList, i = e.length, n = 0; i > n; n++) {
					var o = e[n];
					if (o.popUp == t) return o
				}
				return null
			}, n.prototype.addPopUp = function(e, o, s) {
				"undefined" == typeof o && (o = !1), "undefined" == typeof s && (s = !0);
				var r = t.UIGlobals.systemManager,
					a = this.findPopUpData(e);
				a ? (a.modal = o, e.removeEventListener(n.REMOVE_FROM_SYSTEMMANAGER, this.onRemoved, this)) : (a = new i(e, o), this.popUpDataList.push(a), this._popUpList.push(e)), r.popUpContainer.addElement(e), s && this.centerPopUp(e), "isPopUp" in e && (e.isPopUp = !0), o && this.invalidateModal(), e.addEventListener(n.REMOVE_FROM_SYSTEMMANAGER, this.onRemoved, this)
			}, n.prototype.onRemoved = function(t) {
				for (var e = 0, i = this.popUpDataList, o = i.length, s = 0; o > s; s++) {
					var r = i[s];
					if (r.popUp == t.target) {
						"isPopUp" in r.popUp && (r.popUp.isPopUp = !1), r.popUp.removeEventListener(n.REMOVE_FROM_SYSTEMMANAGER, this.onRemoved, this), this.popUpDataList.splice(e, 1), this._popUpList.splice(e, 1), this.invalidateModal();
						break
					}
					e++
				}
			}, Object.defineProperty(n.prototype, "modalColor", {
				get: function() {
					return this._modalColor
				},
				set: function(t) {
					this._modalColor != t && (this._modalColor = t, this.invalidateModal())
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(n.prototype, "modalAlpha", {
				get: function() {
					return this._modalAlpha
				},
				set: function(t) {
					this._modalAlpha != t && (this._modalAlpha = t, this.invalidateModal())
				},
				enumerable: !0,
				configurable: !0
			}), n.prototype.invalidateModal = function() {
				this.invalidateModalFlag || (this.invalidateModalFlag = !0, t.UIGlobals.stage.addEventListener(t.Event.ENTER_FRAME, this.validateModal, this), t.UIGlobals.stage.addEventListener(t.Event.RENDER, this.validateModal, this), t.UIGlobals.stage.invalidate())
			}, n.prototype.validateModal = function() {
				this.invalidateModalFlag = !1, t.UIGlobals.stage.removeEventListener(t.Event.ENTER_FRAME, this.validateModal, this), t.UIGlobals.stage.removeEventListener(t.Event.RENDER, this.validateModal, this), this.updateModal(t.UIGlobals.systemManager)
			}, n.prototype.updateModal = function(e) {
				for (var i = e.popUpContainer, n = !1, o = i.numElements - 1; o >= 0; o--) {
					var s = i.getElementAt(o);
					if ((s = this.findPopUpData(s)) && s.modal) {
						n = !0;
						break
					}
				}
				n ? (this.modalMask || (this.modalMask = new t.Rect, this.modalMask.touchEnabled = !0, this.modalMask.top = this.modalMask.left = this.modalMask.right = this.modalMask.bottom = 0), this.modalMask.fillColor = this._modalColor, this.modalMask.alpha = this._modalAlpha, this.modalMask.parent == e ? (i.getElementIndex(this.modalMask) < o && o--, i.setElementIndex(this.modalMask, o)) : i.addElementAt(this.modalMask, o)) : this.modalMask && this.modalMask.parent == e && i.removeElement(this.modalMask)
			}, n.prototype.removePopUp = function(e) {
				e && e.parent && this.findPopUpData(e) && ("removeElement" in e.parent ? e.parent.removeElement(e) : e instanceof t.DisplayObject && e.parent.removeChild(e))
			}, n.prototype.centerPopUp = function(t) {
				t.top = t.bottom = t.left = t.right = 0 / 0, t.verticalCenter = t.horizontalCenter = 0;
				var e = t.parent;
				e && ("validateNow" in t && t.validateNow(), t.x = .5 * (e.width - t.layoutBoundsWidth), t.y = .5 * (e.height - t.layoutBoundsHeight))
			}, n.prototype.bringToFront = function(t) {
				if (this.findPopUpData(t) && t.parent && "popUpContainer" in t.parent) {
					var e = t.parent;
					e.popUpContainer.setElementIndex(t, e.popUpContainer.numElements - 1), this.invalidateModal()
				}
			}, n.REMOVE_FROM_SYSTEMMANAGER = "removeFromSystemManager", n
		}(t.EventDispatcher);
	t.PopUpManagerImpl = e;
	var i = function() {
			return function(t, e) {
				this.popUp = t, this.modal = e
			}
		}()
}(ns_egret || (ns_egret = {})), function(t) {
	var e = function() {
			function e() {}
			return Object.defineProperty(e, "impl", {
				get: function() {
					if (!e._impl) try {
						e._impl = t.Injector.getInstance("IPopUpManager")
					} catch (i) {
						e._impl = new t.PopUpManagerImpl
					}
					return e._impl
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(e.prototype, "modalColor", {
				get: function() {
					return e.impl.modalColor
				},
				set: function(t) {
					e.impl.modalColor = t
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(e.prototype, "modalAlpha", {
				get: function() {
					return e.impl.modalAlpha
				},
				set: function(t) {
					e.impl.modalAlpha = t
				},
				enumerable: !0,
				configurable: !0
			}), e.addPopUp = function(i, n, o) {
				"undefined" == typeof n && (n = !1), "undefined" == typeof o && (o = !0), e.impl.addPopUp(i, n, o), e.impl.dispatchEvent(new t.PopUpEvent(t.PopUpEvent.ADD_POPUP, !1, !1, i, n))
			}, e.removePopUp = function(i) {
				e.impl.removePopUp(i), e.impl.dispatchEvent(new t.PopUpEvent(t.PopUpEvent.REMOVE_POPUP, !1, !1, i))
			}, e.centerPopUp = function(t) {
				e.impl.centerPopUp(t)
			}, e.bringToFront = function(i) {
				e.impl.bringToFront(i), e.impl.dispatchEvent(new t.PopUpEvent(t.PopUpEvent.BRING_TO_FRONT, !1, !1, i))
			}, Object.defineProperty(e, "popUpList", {
				get: function() {
					return e.impl.popUpList
				},
				enumerable: !0,
				configurable: !0
			}), e.addEventListener = function(t, i, n, o, s) {
				"undefined" == typeof o && (o = !1), "undefined" == typeof s && (s = 0), e.impl.addEventListener(t, i, this, o, s)
			}, e.removeEventListener = function(t, i, n, o) {
				"undefined" == typeof o && (o = !1), e.impl.removeEventListener(t, i, n, o)
			}, e
		}();
	t.PopUpManager = e
}(ns_egret || (ns_egret = {}));
var __extends = this.__extends ||
function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype, t.prototype = new i
}, dragonBones;
!
function(t) {
	!
	function(t) {
		var e = function() {
				function t(t, e) {
					"undefined" == typeof t && (t = 0), "undefined" == typeof e && (e = 0), this.x = t, this.y = e
				}
				return t.prototype.toString = function() {
					return "[Point (x=" + this.x + " y=" + this.y + ")]"
				}, t
			}();
		t.Point = e, e = function() {
			return function(t, e, i, n) {
				"undefined" == typeof t && (t = 0), "undefined" == typeof e && (e = 0), "undefined" == typeof i && (i = 0), "undefined" == typeof n && (n = 0), this.x = t, this.y = e, this.width = i, this.height = n
			}
		}(), t.Rectangle = e, e = function() {
			function t() {
				this.a = 1, this.c = this.b = 0, this.d = 1, this.ty = this.tx = 0
			}
			return t.prototype.invert = function() {
				var t = this.a,
					e = this.b,
					i = this.c,
					n = this.d,
					o = this.tx,
					s = t * n - e * i;
				this.a = n / s, this.b = -e / s, this.c = -i / s, this.d = t / s, this.tx = (i * this.ty - n * o) / s, this.ty = -(t * this.ty - e * o) / s
			}, t
		}(), t.Matrix = e, e = function() {
			return function() {
				this.redOffset = this.redMultiplier = this.greenOffset = this.greenMultiplier = this.blueOffset = this.blueMultiplier = this.alphaOffset = this.alphaMultiplier = 0
			}
		}(), t.ColorTransform = e
	}(t.geom || (t.geom = {}));
	var e = t.geom;
	!
	function(t) {
		var e = function() {
				return function(t) {
					this.type = t
				}
			}();
		t.Event = e;
		var i = function(t) {
				function e(e) {
					t.call(this, e)
				}
				return __extends(e, t), e.FADE_IN = "fadeIn", e.FADE_OUT = "fadeOut", e.START = "start", e.COMPLETE = "complete", e.LOOP_COMPLETE = "loopComplete", e.FADE_IN_COMPLETE = "fadeInComplete", e.FADE_OUT_COMPLETE = "fadeOutComplete", e
			}(e);
		t.AnimationEvent = i, i = function(t) {
			function e(e) {
				t.call(this, e)
			}
			return __extends(e, t), e.Z_ORDER_UPDATED = "zOrderUpdated", e
		}(e), t.ArmatureEvent = i, i = function(t) {
			function e(e) {
				t.call(this, e)
			}
			return __extends(e, t), e.ANIMATION_FRAME_EVENT = "animationFrameEvent", e.BONE_FRAME_EVENT = "boneFrameEvent", e
		}(e), t.FrameEvent = i, e = function(t) {
			function e(e) {
				t.call(this, e)
			}
			return __extends(e, t), e.SOUND = "sound", e.BONE_FRAME_EVENT = "boneFrameEvent", e
		}(e), t.SoundEvent = e, e = function() {
			function t() {}
			return t.prototype.hasEventListener = function(t) {
				return this._listenersMap && this._listenersMap[t] ? !0 : !1
			}, t.prototype.addEventListener = function(t, e) {
				if (t && e) {
					this._listenersMap || (this._listenersMap = {});
					var i = this._listenersMap[t];
					i && this.removeEventListener(t, e), i ? i.push(e) : this._listenersMap[t] = [e]
				}
			}, t.prototype.removeEventListener = function(t, e) {
				if (this._listenersMap && t && e) {
					var i = this._listenersMap[t];
					if (i) for (var n = i.length, o = 0; n > o; o++) i[o] == e && (1 == n ? (i.length = 0, delete this._listenersMap[t]) : i.splice(o, 1))
				}
			}, t.prototype.removeAllEventListeners = function(t) {
				t ? delete this._listenersMap[t] : this._listenersMap = null
			}, t.prototype.dispatchEvent = function(t) {
				if (t) {
					var e = this._listenersMap[t.type];
					if (e) {
						t.target = this;
						for (var i = e.concat(), e = e.length, n = 0; e > n; n++) i[n](t)
					}
				}
			}, t
		}(), t.EventDispatcher = e, e = function(t) {
			function e() {
				if (t.call(this), e._instance) throw Error("Singleton already constructed!")
			}
			return __extends(e, t), e.getInstance = function() {
				return e._instance || (e._instance = new e), e._instance
			}, e
		}(e), t.SoundEventManager = e
	}(t.events || (t.events = {}));
	var i = t.events;
	!
	function(t) {
		var n = function() {
				function t() {
					this.timeScale = 1, this.time = .001 * (new Date).getTime(), this._animatableList = []
				}
				return t.prototype.contains = function(t) {
					return 0 <= this._animatableList.indexOf(t)
				}, t.prototype.add = function(t) {
					t && -1 == this._animatableList.indexOf(t) && this._animatableList.push(t)
				}, t.prototype.remove = function(t) {
					t = this._animatableList.indexOf(t), t >= 0 && (this._animatableList[t] = null)
				}, t.prototype.clear = function() {
					this._animatableList.length = 0
				}, t.prototype.advanceTime = function(t) {
					if (0 > t) {
						var e = .001 * (new Date).getTime();
						t = e - this.time, this.time = e
					}
					if (t *= this.timeScale, e = this._animatableList.length, 0 != e) {
						for (var i = 0, n = 0; e > n; n++) {
							var o = this._animatableList[n];
							o && (i != n && (this._animatableList[i] = o, this._animatableList[n] = null), o.advanceTime(t), i++)
						}
						if (i != n) {
							for (e = this._animatableList.length; e > n;) this._animatableList[i++] = this._animatableList[n++];
							this._animatableList.length = i
						}
					}
				}, t.clock = new t, t
			}();
		t.WorldClock = n;
		var r = function() {
				function t() {
					this.transform = new o.DBTransform, this.pivot = new e.Point, this._durationTransform = new o.DBTransform, this._durationPivot = new e.Point, this._durationColor = new e.ColorTransform
				}
				return t._borrowObject = function() {
					return 0 == t._pool.length ? new t : t._pool.pop()
				}, t._returnObject = function(e) {
					0 > t._pool.indexOf(e) && (t._pool[t._pool.length] = e), e.clear()
				}, t._clear = function() {
					for (var e = t._pool.length; e--;) t._pool[e].clear();
					t._pool.length = 0
				}, t.getEaseValue = function(e, i) {
					if (i > 1) {
						var n = .5 * (1 - Math.cos(e * Math.PI)) - e;
						i -= 1
					} else i > 0 ? n = Math.sin(e * t.HALF_PI) - e : 0 > i && (n = 1 - Math.cos(e * t.HALF_PI) - e, i *= -1);
					return n * i + e
				}, t.prototype.fadeIn = function(t, e, i) {
					switch (this._bone = t, this._animationState = e, this._timeline = i, this._originTransform = this._timeline.originTransform, this._originPivot = this._timeline.originPivot, this._tweenColor = this._tweenTransform = !1, this._totalTime = this._animationState.totalTime, this.transform.x = 0, this.transform.y = 0, this.transform.scaleX = 0, this.transform.scaleY = 0, this.transform.skewX = 0, this.transform.skewY = 0, this.pivot.x = 0, this.pivot.y = 0, this._durationTransform.x = 0, this._durationTransform.y = 0, this._durationTransform.scaleX = 0, this._durationTransform.scaleY = 0, this._durationTransform.skewX = 0, this._durationTransform.skewY = 0, this._durationPivot.x = 0, this._durationPivot.y = 0, this._currentFrame = null, this._timeline.getFrameList().length) {
					case 0:
						this._bone._arriveAtFrame(null, this, this._animationState, !1), this._updateState = 0;
						break;
					case 1:
						this._updateState = -1;
						break;
					default:
						this._updateState = 1
					}
				}, t.prototype.fadeOut = function() {
					this.transform.skewX = s.TransformUtil.formatRadian(this.transform.skewX), this.transform.skewY = s.TransformUtil.formatRadian(this.transform.skewY)
				}, t.prototype.update = function(e) {
					if (this._updateState) if (0 < this._updateState) {
						e = 0 == this._timeline.scale ? 1 : e / this._timeline.scale, 1 == e && (e = .99999999), e += this._timeline.offset;
						var i = Math.floor(e);
						e -= i;
						for (var n, o = this._totalTime * e, r = !1; !this._currentFrame || o > this._currentFramePosition + this._currentFrameDuration || o < this._currentFramePosition;) r && this._bone._arriveAtFrame(this._currentFrame, this, this._animationState, !0), r = !0, this._currentFrame ? (n = this._timeline.getFrameList().indexOf(this._currentFrame) + 1, n >= this._timeline.getFrameList().length && (n = 0), this._currentFrame = this._timeline.getFrameList()[n]) : (n = 0, this._currentFrame = this._timeline.getFrameList()[0]), this._currentFrameDuration = this._currentFrame.duration, this._currentFramePosition = this._currentFrame.position;
						r && (this.tweenActive = 0 <= this._currentFrame.displayIndex, n++, n >= this._timeline.getFrameList().length && (n = 0), r = this._timeline.getFrameList()[n], 0 == n && this._animationState.loop && this._animationState.loopCount >= Math.abs(this._animationState.loop) - 1 && .99999999 < ((this._currentFramePosition + this._currentFrameDuration) / this._totalTime + i - this._timeline.offset) * this._timeline.scale ? (this._updateState = 0, this._tweenEasing = 0 / 0) : this._tweenEasing = 0 > this._currentFrame.displayIndex || 0 > r.displayIndex || !this._animationState.tweenEnabled ? 0 / 0 : isNaN(this._animationState.clip.tweenEasing) ? this._currentFrame.tweenEasing : this._animationState.clip.tweenEasing, isNaN(this._tweenEasing) ? this._tweenColor = this._tweenTransform = !1 : (this._durationTransform.x = r.transform.x - this._currentFrame.transform.x, this._durationTransform.y = r.transform.y - this._currentFrame.transform.y, this._durationTransform.skewX = r.transform.skewX - this._currentFrame.transform.skewX, this._durationTransform.skewY = r.transform.skewY - this._currentFrame.transform.skewY, this._durationTransform.scaleX = r.transform.scaleX - this._currentFrame.transform.scaleX, this._durationTransform.scaleY = r.transform.scaleY - this._currentFrame.transform.scaleY, 0 == n && (this._durationTransform.skewX = s.TransformUtil.formatRadian(this._durationTransform.skewX), this._durationTransform.skewY = s.TransformUtil.formatRadian(this._durationTransform.skewY)), this._durationPivot.x = r.pivot.x - this._currentFrame.pivot.x, this._durationPivot.y = r.pivot.y - this._currentFrame.pivot.y, this._tweenTransform = 0 != this._durationTransform.x || 0 != this._durationTransform.y || 0 != this._durationTransform.skewX || 0 != this._durationTransform.skewY || 0 != this._durationTransform.scaleX || 0 != this._durationTransform.scaleY || 0 != this._durationPivot.x || 0 != this._durationPivot.y ? !0 : !1, this._currentFrame.color && r.color ? (this._durationColor.alphaOffset = r.color.alphaOffset - this._currentFrame.color.alphaOffset, this._durationColor.redOffset = r.color.redOffset - this._currentFrame.color.redOffset, this._durationColor.greenOffset = r.color.greenOffset - this._currentFrame.color.greenOffset, this._durationColor.blueOffset = r.color.blueOffset - this._currentFrame.color.blueOffset, this._durationColor.alphaMultiplier = r.color.alphaMultiplier - this._currentFrame.color.alphaMultiplier, this._durationColor.redMultiplier = r.color.redMultiplier - this._currentFrame.color.redMultiplier, this._durationColor.greenMultiplier = r.color.greenMultiplier - this._currentFrame.color.greenMultiplier, this._durationColor.blueMultiplier = r.color.blueMultiplier - this._currentFrame.color.blueMultiplier, this._tweenColor = 0 != this._durationColor.alphaOffset || 0 != this._durationColor.redOffset || 0 != this._durationColor.greenOffset || 0 != this._durationColor.blueOffset || 0 != this._durationColor.alphaMultiplier || 0 != this._durationColor.redMultiplier || 0 != this._durationColor.greenMultiplier || 0 != this._durationColor.blueMultiplier ? !0 : !1) : this._currentFrame.color ? (this._tweenColor = !0, this._durationColor.alphaOffset = -this._currentFrame.color.alphaOffset, this._durationColor.redOffset = -this._currentFrame.color.redOffset, this._durationColor.greenOffset = -this._currentFrame.color.greenOffset, this._durationColor.blueOffset = -this._currentFrame.color.blueOffset, this._durationColor.alphaMultiplier = 1 - this._currentFrame.color.alphaMultiplier, this._durationColor.redMultiplier = 1 - this._currentFrame.color.redMultiplier, this._durationColor.greenMultiplier = 1 - this._currentFrame.color.greenMultiplier, this._durationColor.blueMultiplier = 1 - this._currentFrame.color.blueMultiplier) : r.color ? (this._tweenColor = !0, this._durationColor.alphaOffset = r.color.alphaOffset, this._durationColor.redOffset = r.color.redOffset, this._durationColor.greenOffset = r.color.greenOffset, this._durationColor.blueOffset = r.color.blueOffset, this._durationColor.alphaMultiplier = r.color.alphaMultiplier - 1, this._durationColor.redMultiplier = r.color.redMultiplier - 1, this._durationColor.greenMultiplier = r.color.greenMultiplier - 1, this._durationColor.blueMultiplier = r.color.blueMultiplier - 1) : this._tweenColor = !1), this._tweenTransform || (this._animationState.blend ? (this.transform.x = this._originTransform.x + this._currentFrame.transform.x, this.transform.y = this._originTransform.y + this._currentFrame.transform.y, this.transform.skewX = this._originTransform.skewX + this._currentFrame.transform.skewX, this.transform.skewY = this._originTransform.skewY + this._currentFrame.transform.skewY, this.transform.scaleX = this._originTransform.scaleX + this._currentFrame.transform.scaleX, this.transform.scaleY = this._originTransform.scaleY + this._currentFrame.transform.scaleY, this.pivot.x = this._originPivot.x + this._currentFrame.pivot.x, this.pivot.y = this._originPivot.y + this._currentFrame.pivot.y) : (this.transform.x = this._currentFrame.transform.x, this.transform.y = this._currentFrame.transform.y, this.transform.skewX = this._currentFrame.transform.skewX, this.transform.skewY = this._currentFrame.transform.skewY, this.transform.scaleX = this._currentFrame.transform.scaleX, this.transform.scaleY = this._currentFrame.transform.scaleY, this.pivot.x = this._currentFrame.pivot.x, this.pivot.y = this._currentFrame.pivot.y)), this._tweenColor || (this._currentFrame.color ? this._bone._updateColor(this._currentFrame.color.alphaOffset, this._currentFrame.color.redOffset, this._currentFrame.color.greenOffset, this._currentFrame.color.blueOffset, this._currentFrame.color.alphaMultiplier, this._currentFrame.color.redMultiplier, this._currentFrame.color.greenMultiplier, this._currentFrame.color.blueMultiplier, !0) : this._bone._isColorChanged && this._bone._updateColor(0, 0, 0, 0, 1, 1, 1, 1, !1)), this._bone._arriveAtFrame(this._currentFrame, this, this._animationState, !1)), (this._tweenTransform || this._tweenColor) && (e = (o - this._currentFramePosition) / this._currentFrameDuration, this._tweenEasing && (e = t.getEaseValue(e, this._tweenEasing))), this._tweenTransform && (i = this._currentFrame.transform, o = this._currentFrame.pivot, this._animationState.blend ? (this.transform.x = this._originTransform.x + i.x + this._durationTransform.x * e, this.transform.y = this._originTransform.y + i.y + this._durationTransform.y * e, this.transform.skewX = this._originTransform.skewX + i.skewX + this._durationTransform.skewX * e, this.transform.skewY = this._originTransform.skewY + i.skewY + this._durationTransform.skewY * e, this.transform.scaleX = this._originTransform.scaleX + i.scaleX + this._durationTransform.scaleX * e, this.transform.scaleY = this._originTransform.scaleY + i.scaleY + this._durationTransform.scaleY * e, this.pivot.x = this._originPivot.x + o.x + this._durationPivot.x * e, this.pivot.y = this._originPivot.y + o.y + this._durationPivot.y * e) : (this.transform.x = i.x + this._durationTransform.x * e, this.transform.y = i.y + this._durationTransform.y * e, this.transform.skewX = i.skewX + this._durationTransform.skewX * e, this.transform.skewY = i.skewY + this._durationTransform.skewY * e, this.transform.scaleX = i.scaleX + this._durationTransform.scaleX * e, this.transform.scaleY = i.scaleY + this._durationTransform.scaleY * e, this.pivot.x = o.x + this._durationPivot.x * e, this.pivot.y = o.y + this._durationPivot.y * e)), this._tweenColor && (this._currentFrame.color ? this._bone._updateColor(this._currentFrame.color.alphaOffset + this._durationColor.alphaOffset * e, this._currentFrame.color.redOffset + this._durationColor.redOffset * e, this._currentFrame.color.greenOffset + this._durationColor.greenOffset * e, this._currentFrame.color.blueOffset + this._durationColor.blueOffset * e, this._currentFrame.color.alphaMultiplier + this._durationColor.alphaMultiplier * e, this._currentFrame.color.redMultiplier + this._durationColor.redMultiplier * e, this._currentFrame.color.greenMultiplier + this._durationColor.greenMultiplier * e, this._currentFrame.color.blueMultiplier + this._durationColor.blueMultiplier * e, !0) : this._bone._updateColor(this._durationColor.alphaOffset * e, this._durationColor.redOffset * e, this._durationColor.greenOffset * e, this._durationColor.blueOffset * e, 1 + this._durationColor.alphaMultiplier * e, 1 + this._durationColor.redMultiplier * e, 1 + this._durationColor.greenMultiplier * e, 1 + this._durationColor.blueMultiplier * e, !0))
					} else this._updateState = 0, this._animationState.blend ? (this.transform.copy(this._originTransform), this.pivot.x = this._originPivot.x, this.pivot.y = this._originPivot.y) : (this.transform.x = this.transform.y = this.transform.skewX = this.transform.skewY = this.transform.scaleX = this.transform.scaleY = 0, this.pivot.x = 0, this.pivot.y = 0), this._currentFrame = this._timeline.getFrameList()[0], this.tweenActive = 0 <= this._currentFrame.displayIndex, this._currentFrame.color ? this._bone._updateColor(this._currentFrame.color.alphaOffset, this._currentFrame.color.redOffset, this._currentFrame.color.greenOffset, this._currentFrame.color.blueOffset, this._currentFrame.color.alphaMultiplier, this._currentFrame.color.redMultiplier, this._currentFrame.color.greenMultiplier, this._currentFrame.color.blueMultiplier, !0) : this._bone._updateColor(0, 0, 0, 0, 1, 1, 1, 1, !1), this._bone._arriveAtFrame(this._currentFrame, this, this._animationState, !1)
				}, t.prototype.clear = function() {
					this._updateState = 0, this._originPivot = this._originTransform = this._currentFrame = this._timeline = this._animationState = this._bone = null
				}, t.HALF_PI = .5 * Math.PI, t._pool = [], t
			}();
		t.TimelineState = r;
		var a = function() {
				function t() {
					this.layer = this.loop = 0, this._timelineStates = {}
				}
				return t._borrowObject = function() {
					return 0 == t._pool.length ? new t : t._pool.pop()
				}, t._returnObject = function(e) {
					0 > t._pool.indexOf(e) && (t._pool[t._pool.length] = e), e.clear()
				}, t._clear = function() {
					for (var e = t._pool.length; e--;) t._pool[e].clear();
					t._pool.length = 0
				}, t.prototype.fadeIn = function(t, e, i, n, o, s, r, a) {
					this.layer = s, this.clip = e, this.name = this.clip.name, this.totalTime = this.clip.duration, this._armature = t, 2 > Math.round(this.clip.duration * this.clip.frameRate) || 1 / 0 == n ? (this.timeScale = 1, this.currentTime = this.totalTime, this.loop = 0 <= this.loop ? 1 : -1) : (this.timeScale = n, this.currentTime = 0, this.loop = o), this._pauseBeforeFadeInComplete = a, this._fadeInTime = i * this.timeScale, this._fadeState = 1, this._fadeOutBeginTime = 0, this._fadeOutWeight = -1, this._fadeWeight = 0, this._fadeIn = !0, this._fadeOut = !1, this.loopCount = -1, this.displayControl = r, this.isPlaying = !0, this.isComplete = !1, this.weight = 1, this.tweenEnabled = this.enabled = this.blend = !0, this.updateTimelineStates()
				}, t.prototype.fadeOut = function(t, e) {
					if ("undefined" == typeof e && (e = !1), this._armature && !(0 <= this._fadeOutWeight)) {
						this._fadeState = -1, this._fadeOutWeight = this._fadeWeight, this._fadeOutTime = t * this.timeScale, this._fadeOutBeginTime = this.currentTime, this._fadeOut = !0, this.isPlaying = !e, this.displayControl = !1;
						for (var i in this._timelineStates) this._timelineStates[i].fadeOut();
						this.enabled = !0
					}
				}, t.prototype.play = function() {
					this.isPlaying = !0
				}, t.prototype.stop = function() {
					this.isPlaying = !1
				}, t.prototype.getMixingTransform = function(t) {
					return this._mixingTransforms ? Number(this._mixingTransforms[t]) : -1
				}, t.prototype.addMixingTransform = function(t, e, i) {
					if ("undefined" == typeof e && (e = 2), "undefined" == typeof i && (i = !0), !this.clip || !this.clip.getTimeline(t)) throw Error();
					if (this._mixingTransforms || (this._mixingTransforms = {}), i) {
						i = this._armature._boneList.length;
						for (var n, o; i--;) n = this._armature._boneList[i], n.name == t && (o = n), o && (o == n || o.contains(n)) && (this._mixingTransforms[n.name] = e)
					} else this._mixingTransforms[t] = e;
					this.updateTimelineStates()
				}, t.prototype.removeMixingTransform = function(t, e) {
					if ("undefined" == typeof t && (t = null), "undefined" == typeof e && (e = !0), t) {
						if (e) for (var i, n, o = this._armature._boneList.length; o--;) i = this._armature._boneList[o], i.name == t && (n = i), n && (n == i || n.contains(i)) && delete this._mixingTransforms[i.name];
						else delete this._mixingTransforms[t];
						for (var s in this._mixingTransforms) {
							var r = !0;
							break
						}
						r || (this._mixingTransforms = null)
					} else this._mixingTransforms = null;
					this.updateTimelineStates()
				}, t.prototype.advanceTime = function(t) {
					if (!this.enabled) return !1;
					var e, n;
					if (this._fadeIn && (this._fadeIn = !1, this._armature.hasEventListener(i.AnimationEvent.FADE_IN) && (e = new i.AnimationEvent(i.AnimationEvent.FADE_IN), e.animationState = this, this._armature._eventList.push(e))), this._fadeOut && (this._fadeOut = !1, this._armature.hasEventListener(i.AnimationEvent.FADE_OUT) && (e = new i.AnimationEvent(i.AnimationEvent.FADE_OUT), e.animationState = this, this._armature._eventList.push(e))), this.currentTime += t * this.timeScale, this.isPlaying && !this.isComplete) {
						var o;
						this._pauseBeforeFadeInComplete ? (this.isPlaying = this._pauseBeforeFadeInComplete = !1, t = 0, o = Math.floor(t)) : (t = this.currentTime / this.totalTime, o = Math.floor(t), o != this.loopCount && (-1 == this.loopCount && this._armature.hasEventListener(i.AnimationEvent.START) && (e = new i.AnimationEvent(i.AnimationEvent.START), e.animationState = this, this._armature._eventList.push(e)), this.loopCount = o) && (this.loop && this.loopCount * this.loopCount >= this.loop * this.loop - 1 ? (n = !0, t = 1, o = 0, this._armature.hasEventListener(i.AnimationEvent.COMPLETE) && (e = new i.AnimationEvent(i.AnimationEvent.COMPLETE), e.animationState = this, this._armature._eventList.push(e))) : this._armature.hasEventListener(i.AnimationEvent.LOOP_COMPLETE) && (e = new i.AnimationEvent(i.AnimationEvent.LOOP_COMPLETE), e.animationState = this, this._armature._eventList.push(e))));
						for (var s in this._timelineStates) this._timelineStates[s].update(t);
						if (e = this.clip.getFrameList(), 0 < e.length) {
							for (t = this.totalTime * (t - o), o = !1; !this._currentFrame || t > this._currentFrame.position + this._currentFrame.duration || t < this._currentFrame.position;) o && this._armature._arriveAtFrame(this._currentFrame, null, this, !0), o = !0, this._currentFrame ? (s = e.indexOf(this._currentFrame), s++, s >= e.length && (s = 0), this._currentFrame = e[s]) : this._currentFrame = e[0];
							o && this._armature._arriveAtFrame(this._currentFrame, null, this, !1)
						}
					}
					if (0 < this._fadeState) 0 == this._fadeInTime ? (this._fadeWeight = 1, this._fadeState = 0, this.isPlaying = !0, this._armature.hasEventListener(i.AnimationEvent.FADE_IN_COMPLETE) && (e = new i.AnimationEvent(i.AnimationEvent.FADE_IN_COMPLETE), e.animationState = this, this._armature._eventList.push(e))) : (this._fadeWeight = this.currentTime / this._fadeInTime, 1 <= this._fadeWeight && (this._fadeWeight = 1, this._fadeState = 0, this.isPlaying || (this.currentTime -= this._fadeInTime), this.isPlaying = !0, this._armature.hasEventListener(i.AnimationEvent.FADE_IN_COMPLETE) && (e = new i.AnimationEvent(i.AnimationEvent.FADE_IN_COMPLETE), e.animationState = this, this._armature._eventList.push(e))));
					else if (0 > this._fadeState) {
						if (0 == this._fadeOutTime) return this._fadeState = this._fadeWeight = 0, this._armature.hasEventListener(i.AnimationEvent.FADE_OUT_COMPLETE) && (e = new i.AnimationEvent(i.AnimationEvent.FADE_OUT_COMPLETE), e.animationState = this, this._armature._eventList.push(e)), !0;
						if (this._fadeWeight = (1 - (this.currentTime - this._fadeOutBeginTime) / this._fadeOutTime) * this._fadeOutWeight, 0 >= this._fadeWeight) return this._fadeState = this._fadeWeight = 0, this._armature.hasEventListener(i.AnimationEvent.FADE_OUT_COMPLETE) && (e = new i.AnimationEvent(i.AnimationEvent.FADE_OUT_COMPLETE), e.animationState = this, this._armature._eventList.push(e)), !0
					}
					return n && (this.isComplete = !0, 0 > this.loop && this.fadeOut((this._fadeOutWeight || this._fadeInTime) / this.timeScale, !0)), !1
				}, t.prototype.updateTimelineStates = function() {
					if (this._mixingTransforms) {
						for (var t in this._timelineStates) null == this._mixingTransforms[t] && this.removeTimelineState(t);
						for (t in this._mixingTransforms) this._timelineStates[t] || this.addTimelineState(t)
					} else for (t in this.clip.getTimelines()) this._timelineStates[t] || this.addTimelineState(t)
				}, t.prototype.addTimelineState = function(t) {
					var e = this._armature.getBone(t);
					if (e) {
						var i = r._borrowObject(),
							n = this.clip.getTimeline(t);
						i.fadeIn(e, this, n), this._timelineStates[t] = i
					}
				}, t.prototype.removeTimelineState = function(t) {
					r._returnObject(this._timelineStates[t]), delete this._timelineStates[t]
				}, t.prototype.clear = function() {
					this.clip = null, this.enabled = !1, this._mixingTransforms = this._currentFrame = this._armature = null;
					for (var t in this._timelineStates) this.removeTimelineState(t)
				}, t._pool = [], t
			}();
		t.AnimationState = a, n = function() {
			function t(t) {
				this._armature = t, this._animationLayer = [], this._isPlaying = !1, this.animationNameList = [], this.tweenEnabled = !0, this.timeScale = 1
			}
			return t.prototype.getLastAnimationName = function() {
				return this._lastAnimationState ? this._lastAnimationState.name : null
			}, t.prototype.getLastAnimationState = function() {
				return this._lastAnimationState
			}, t.prototype.getAnimationDataList = function() {
				return this._animationDataList
			}, t.prototype.setAnimationDataList = function(t) {
				this._animationDataList = t, this.animationNameList.length = 0;
				for (var e in this._animationDataList) this.animationNameList[this.animationNameList.length] = this._animationDataList[e].name
			}, t.prototype.getIsPlaying = function() {
				return this._isPlaying && !this.getIsComplete()
			}, t.prototype.getIsComplete = function() {
				if (this._lastAnimationState) {
					if (!this._lastAnimationState.isComplete) return !1;
					for (var t = this._animationLayer.length; t--;) for (var e = this._animationLayer[t], i = e.length; i--;) if (!e[i].isComplete) return !1;
					return !0
				}
				return !1
			}, t.prototype.dispose = function() {
				if (this._armature) {
					this.stop();
					for (var t = this._animationLayer.length; t--;) {
						for (var e = this._animationLayer[t], i = e.length; i--;) a._returnObject(e[i]);
						e.length = 0
					}
					this._animationLayer.length = 0, this.animationNameList.length = 0, this.animationNameList = this._animationDataList = this._animationLayer = this._armature = null
				}
			}, t.prototype.gotoAndPlay = function(e, i, n, o, s, r, h, l, p, c) {
				if ("undefined" == typeof i && (i = -1), "undefined" == typeof n && (n = -1), "undefined" == typeof o && (o = 0 / 0), "undefined" == typeof s && (s = 0), "undefined" == typeof r && (r = null), "undefined" == typeof h && (h = t.SAME_LAYER_AND_GROUP), "undefined" == typeof l && (l = !0), "undefined" == typeof p && (p = !0), "undefined" == typeof c && (c = !0), !this._animationDataList) return null;
				for (var u, d = this._animationDataList.length; d--;) if (this._animationDataList[d].name == e) {
					u = this._animationDataList[d];
					break
				}
				if (!u) return null;
				this._isPlaying = !0, i = 0 > i ? 0 > u.fadeInTime ? .3 : u.fadeInTime : i, n = 0 > n ? 0 > u.scale ? 1 : u.scale : n / u.duration, o = isNaN(o) ? u.loop : o, s = this.addLayer(s);
				var m;
				switch (h) {
				case t.NONE:
					break;
				case t.SAME_LAYER:
					for (m = this._animationLayer[s], d = m.length; d--;) h = m[d], h.fadeOut(i, p);
					break;
				case t.SAME_GROUP:
					for (_ = this._animationLayer.length; _--;) for (m = this._animationLayer[_], d = m.length; d--;) h = m[d], h.group == r && h.fadeOut(i, p);
					break;
				case t.ALL:
					for (var _ = this._animationLayer.length; _--;) for (m = this._animationLayer[_], d = m.length; d--;) h = m[d], h.fadeOut(i, p);
					break;
				default:
					for (m = this._animationLayer[s], d = m.length; d--;) h = m[d], h.group == r && h.fadeOut(i, p)
				}
				for (this._lastAnimationState = a._borrowObject(), this._lastAnimationState.group = r, this._lastAnimationState.tweenEnabled = this.tweenEnabled, this._lastAnimationState.fadeIn(this._armature, u, i, 1 / n, o, s, l, c), this.addState(this._lastAnimationState), o = this._armature._slotList, d = o.length; d--;) s = o[d], (s = s.getChildArmature()) && s.animation.gotoAndPlay(e, i);
				return this._lastAnimationState
			}, t.prototype.play = function() {
				this._animationDataList && 0 != this._animationDataList.length && (this._lastAnimationState ? this._isPlaying ? this.gotoAndPlay(this._lastAnimationState.name) : this._isPlaying = !0 : this.gotoAndPlay(this._animationDataList[0].name))
			}, t.prototype.stop = function() {
				this._isPlaying = !1
			}, t.prototype.getState = function(t, e) {
				"undefined" == typeof e && (e = 0);
				var i = this._animationLayer.length;
				if (0 == i) return null;
				if (e >= i && (e = i - 1), i = this._animationLayer[e], !i) return null;
				for (var n = i.length; n--;) if (i[n].name == t) return i[n];
				return null
			}, t.prototype.hasAnimation = function(t) {
				for (var e = this._animationDataList.length; e--;) if (this._animationDataList[e].name == t) return !0;
				return !1
			}, t.prototype.advanceTime = function(t) {
				if (this._isPlaying) {
					t *= this.timeScale;
					var e, i, n, o, s, r, a, h, l, p, c, u, d, m, _, y, f, g, v, x = this._armature._boneList.length,
						b = x;
					for (x--; b--;) {
						for (o = this._armature._boneList[b], s = o.name, r = 1, m = d = u = c = p = l = h = a = 0, e = this._animationLayer.length; e--;) {
							for (_ = 0, y = this._animationLayer[e], n = y.length, i = 0; n > i; i++) f = y[i], b == x && f.advanceTime(t) ? (this.removeState(f), i--, n--) : (g = f._timelineStates[s]) && g.tweenActive && (f = f._fadeWeight * f.weight * r, v = g.transform, g = g.pivot, a += v.x * f, h += v.y * f, l += v.skewX * f, p += v.skewY * f, c += v.scaleX * f, u += v.scaleY * f, d += g.x * f, m += g.y * f, _ += f);
							if (_ >= r) break;
							r -= _
						}
						v = o.tween, g = o._tweenPivot, v.x = a, v.y = h, v.skewX = l, v.skewY = p, v.scaleX = c, v.scaleY = u, g.x = d, g.y = m
					}
				}
			}, t.prototype.addLayer = function(t) {
				return t >= this._animationLayer.length && (t = this._animationLayer.length, this._animationLayer[t] = []), t
			}, t.prototype.addState = function(t) {
				this._animationLayer[t.layer].push(t)
			}, t.prototype.removeState = function(t) {
				var e = t.layer,
					i = this._animationLayer[e];
				i.splice(i.indexOf(t), 1), a._returnObject(t), 0 == i.length && e == this._animationLayer.length - 1 && this._animationLayer.length--
			}, t.NONE = "none", t.SAME_LAYER = "sameLayer", t.SAME_GROUP = "sameGroup", t.SAME_LAYER_AND_GROUP = "sameLayerAndGroup", t.ALL = "all", t
		}(), t.Animation = n
	}(t.animation || (t.animation = {}));
	var n = t.animation;
	!
	function(t) {
		var i = function() {
				function t() {
					this.skewY = this.skewX = this.y = this.x = 0, this.scaleY = this.scaleX = 1
				}
				return t.prototype.getRotation = function() {
					return this.skewX
				}, t.prototype.setRotation = function(t) {
					this.skewX = this.skewY = t
				}, t.prototype.copy = function(t) {
					this.x = t.x, this.y = t.y, this.skewX = t.skewX, this.skewY = t.skewY, this.scaleX = t.scaleX, this.scaleY = t.scaleY
				}, t.prototype.toString = function() {
					return "[DBTransform (x=" + this.x + " y=" + this.y + " skewX=" + this.skewX + " skewY=" + this.skewY + " scaleX=" + this.scaleX + " scaleY=" + this.scaleY + ")]"
				}, t
			}();
		t.DBTransform = i;
		var n = function() {
				function t() {
					this.duration = this.position = 0
				}
				return t.prototype.dispose = function() {}, t
			}();
		t.Frame = n;
		var o = function(t) {
				function n() {
					t.call(this), this.displayIndex = this.tweenRotate = this.tweenEasing = 0, this.zOrder = 0 / 0, this.visible = !0, this.global = new i, this.transform = new i, this.pivot = new e.Point
				}
				return __extends(n, t), n.prototype.dispose = function() {
					t.prototype.dispose.call(this), this.color = this.pivot = this.transform = this.global = null
				}, n
			}(n);
		t.TransformFrame = o;
		var r = function() {
				function t() {
					this._frameList = [], this.duration = 0, this.scale = 1
				}
				return t.prototype.getFrameList = function() {
					return this._frameList
				}, t.prototype.dispose = function() {
					for (var t = this._frameList.length; t--;) this._frameList[t].dispose();
					this._frameList.length = 0, this._frameList = null
				}, t.prototype.addFrame = function(t) {
					if (!t) throw Error();
					if (!(0 > this._frameList.indexOf(t))) throw Error();
					this._frameList[this._frameList.length] = t
				}, t
			}();
		t.Timeline = r;
		var a = function(t) {
				function n() {
					t.call(this), this.originTransform = new i, this.originPivot = new e.Point, this.offset = 0, this.transformed = !1
				}
				return __extends(n, t), n.prototype.dispose = function() {
					this != n.HIDE_TIMELINE && (t.prototype.dispose.call(this), this.originPivot = this.originTransform = null)
				}, n.HIDE_TIMELINE = new n, n
			}(r);
		t.TransformTimeline = a;
		var h = function(t) {
				function e() {
					t.call(this), this.loop = this.frameRate = 0, this.tweenEasing = 0 / 0, this.fadeInTime = 0, this._timelines = {}
				}
				return __extends(e, t), e.prototype.getTimelines = function() {
					return this._timelines
				}, e.prototype.dispose = function() {
					t.prototype.dispose.call(this);
					for (var e in this._timelines) this._timelines[e].dispose();
					this._timelines = null
				}, e.prototype.getTimeline = function(t) {
					return this._timelines[t]
				}, e.prototype.addTimeline = function(t, e) {
					if (!t) throw Error();
					this._timelines[e] = t
				}, e
			}(r);
		t.AnimationData = h;
		var l = function() {
				function t() {
					this.transform = new i
				}
				return t.prototype.dispose = function() {
					this.pivot = this.transform = null
				}, t.ARMATURE = "armature", t.IMAGE = "image", t
			}();
		t.DisplayData = l;
		var p = function() {
				function t() {
					this._displayDataList = [], this.zOrder = 0, this.blendMode = "normal"
				}
				return t.prototype.getDisplayDataList = function() {
					return this._displayDataList
				}, t.prototype.dispose = function() {
					for (var t = this._displayDataList.length; t--;) this._displayDataList[t].dispose();
					this._displayDataList.length = 0, this._displayDataList = null
				}, t.prototype.addDisplayData = function(t) {
					if (!t) throw Error();
					if (!(0 > this._displayDataList.indexOf(t))) throw Error();
					this._displayDataList[this._displayDataList.length] = t
				}, t.prototype.getDisplayData = function(t) {
					for (var e = this._displayDataList.length; e--;) if (this._displayDataList[e].name == t) return;
					return this._displayDataList[e], null
				}, t
			}();
		t.SlotData = p;
		var c = function() {
				function t() {
					this.length = 0, this.global = new i, this.transform = new i, this.scaleMode = 1, this.fixedRotation = !1
				}
				return t.prototype.dispose = function() {
					this.transform = this.global = null
				}, t
			}();
		t.BoneData = c;
		var u = function() {
				function t() {
					this._slotDataList = []
				}
				return t.prototype.getSlotDataList = function() {
					return this._slotDataList
				}, t.prototype.dispose = function() {
					for (var t = this._slotDataList.length; t--;) this._slotDataList[t].dispose();
					this._slotDataList.length = 0, this._slotDataList = null
				}, t.prototype.getSlotData = function(t) {
					for (var e = this._slotDataList.length; e--;) if (this._slotDataList[e].name == t) return this._slotDataList[e];
					return null
				}, t.prototype.addSlotData = function(t) {
					if (!t) throw Error();
					if (!(0 > this._slotDataList.indexOf(t))) throw Error();
					this._slotDataList[this._slotDataList.length] = t
				}, t
			}();
		t.SkinData = u;
		var d = function() {
				function t() {
					this._boneDataList = [], this._skinDataList = [], this._animationDataList = []
				}
				return t.prototype.getBoneDataList = function() {
					return this._boneDataList
				}, t.prototype.getSkinDataList = function() {
					return this._skinDataList
				}, t.prototype.getAnimationDataList = function() {
					return this._animationDataList
				}, t.prototype.dispose = function() {
					for (var t = this._boneDataList.length; t--;) this._boneDataList[t].dispose();
					for (t = this._skinDataList.length; t--;) this._skinDataList[t].dispose();
					for (t = this._animationDataList.length; t--;) this._animationDataList[t].dispose();
					this._boneDataList.length = 0, this._skinDataList.length = 0, this._animationDataList.length = 0, this._animationDataList = this._skinDataList = this._boneDataList = null
				}, t.prototype.getBoneData = function(t) {
					for (var e = this._boneDataList.length; e--;) if (this._boneDataList[e].name == t) return this._boneDataList[e];
					return null
				}, t.prototype.getSkinData = function(t) {
					if (!t) return this._skinDataList[0];
					for (var e = this._skinDataList.length; e--;) if (this._skinDataList[e].name == t) return this._skinDataList[e];
					return null
				}, t.prototype.getAnimationData = function(t) {
					for (var e = this._animationDataList.length; e--;) if (this._animationDataList[e].name == t) return;
					return this._animationDataList[e], null
				}, t.prototype.addBoneData = function(t) {
					if (!t) throw Error();
					if (!(0 > this._boneDataList.indexOf(t))) throw Error();
					this._boneDataList[this._boneDataList.length] = t
				}, t.prototype.addSkinData = function(t) {
					if (!t) throw Error();
					if (!(0 > this._skinDataList.indexOf(t))) throw Error();
					this._skinDataList[this._skinDataList.length] = t
				}, t.prototype.addAnimationData = function(t) {
					if (!t) throw Error();
					0 > this._animationDataList.indexOf(t) && (this._animationDataList[this._animationDataList.length] = t)
				}, t.prototype.sortBoneDataList = function() {
					var t = this._boneDataList.length;
					if (0 != t) {
						for (var e = []; t--;) {
							for (var i = this._boneDataList[t], n = 0, o = i; o && o.parent;) n++, o = this.getBoneData(o.parent);
							e[t] = {
								level: n,
								boneData: i
							}
						}
						for (e.sort(this.sortBoneData), t = e.length; t--;) this._boneDataList[t] = e[t].boneData
					}
				}, t.prototype.sortBoneData = function(t, e) {
					return t.level > e.level ? 1 : -1
				}, t
			}();
		t.ArmatureData = d;
		var m = function() {
				function t() {
					this._armatureDataList = [], this._subTexturePivots = {}
				}
				return t.prototype.getArmatureNames = function() {
					var t, e = [];
					for (t in this._armatureDataList) e[e.length] = this._armatureDataList[t].name;
					return e
				}, t.prototype.getArmatureDataList = function() {
					return this._armatureDataList
				}, t.prototype.dispose = function() {
					for (var t in this._armatureDataList) this._armatureDataList[t].dispose();
					this._armatureDataList.length = 0, this._subTexturePivots = this._armatureDataList = null
				}, t.prototype.getArmatureData = function(t) {
					for (var e = this._armatureDataList.length; e--;) if (this._armatureDataList[e].name == t) return;
					return this._armatureDataList[e], null
				}, t.prototype.addArmatureData = function(t) {
					if (!t) throw Error();
					if (!(0 > this._armatureDataList.indexOf(t))) throw Error();
					this._armatureDataList[this._armatureDataList.length] = t
				}, t.prototype.removeArmatureData = function(t) {
					t = this._armatureDataList.indexOf(t), t >= 0 && this._armatureDataList.splice(t, 1)
				}, t.prototype.removeArmatureDataByName = function(t) {
					for (var e = this._armatureDataList.length; e--;) this._armatureDataList[e].name == t && this._armatureDataList.splice(e, 1)
				}, t.prototype.getSubTexturePivot = function(t) {
					return this._subTexturePivots[t]
				}, t.prototype.addSubTexturePivot = function(t, i, n) {
					var o = this._subTexturePivots[n];
					return o ? (o.x = t, o.y = i) : this._subTexturePivots[n] = o = new e.Point(t, i), o
				}, t.prototype.removeSubTexturePivot = function(t) {
					if (t) delete this._subTexturePivots[t];
					else for (t in this._subTexturePivots) delete this._subTexturePivots[t]
				}, t
			}();
		t.SkeletonData = m, r = function() {
			function t() {}
			return t.parseTextureAtlasData = function(t, i) {
				if ("undefined" == typeof i && (i = 1), !t) throw Error();
				var n = {};
				n.__name = t[s.ConstValues.A_NAME];
				var o, r = t[s.ConstValues.SUB_TEXTURE];
				for (o in r) {
					var a = r[o],
						h = a[s.ConstValues.A_NAME],
						a = new e.Rectangle(Number(a[s.ConstValues.A_X]) / i, Number(a[s.ConstValues.A_Y]) / i, Number(a[s.ConstValues.A_WIDTH]) / i, Number(a[s.ConstValues.A_HEIGHT]) / i);
					n[h] = a
				}
				return n
			}, t.parseSkeletonData = function(e) {
				if (!e) throw Error();
				var i = Number(e[s.ConstValues.A_FRAME_RATE]),
					n = new m;
				n.name = e[s.ConstValues.A_NAME], e = e[s.ConstValues.ARMATURE];
				for (var o in e) n.addArmatureData(t.parseArmatureData(e[o], n, i));
				return n
			}, t.parseArmatureData = function(e, i, n) {
				var o = new d;
				o.name = e[s.ConstValues.A_NAME];
				var r, a = e[s.ConstValues.BONE];
				for (r in a) o.addBoneData(t.parseBoneData(a[r]));
				a = e[s.ConstValues.SKIN];
				for (r in a) o.addSkinData(t.parseSkinData(a[r], i));
				s.DBDataUtil.transformArmatureData(o), o.sortBoneDataList(), e = e[s.ConstValues.ANIMATION];
				for (r in e) o.addAnimationData(t.parseAnimationData(e[r], o, n));
				return o
			}, t.parseBoneData = function(e) {
				var i = new c;
				i.name = e[s.ConstValues.A_NAME], i.parent = e[s.ConstValues.A_PARENT], i.length = Number(e[s.ConstValues.A_LENGTH]) || 0;
				var n = Number(e[s.ConstValues.A_SCALE_MODE]);
				return !isNaN(n) && n && (i.scaleMode = n), (n = e[s.ConstValues.A_FIXED_ROTATION]) && (i.fixedRotation = n), t.parseTransform(e[s.ConstValues.TRANSFORM], i.global), i.transform.copy(i.global), i
			}, t.parseSkinData = function(e, i) {
				var n = new u;
				n.name = e[s.ConstValues.A_NAME];
				var o, r = e[s.ConstValues.SLOT];
				for (o in r) n.addSlotData(t.parseSlotData(r[o], i));
				return n
			}, t.parseSlotData = function(e, i) {
				var n = new p;
				n.name = e[s.ConstValues.A_NAME], n.parent = e[s.ConstValues.A_PARENT], n.zOrder = Number(e[s.ConstValues.A_Z_ORDER]), n.blendMode = e[s.ConstValues.A_BLENDMODE], n.blendMode || (n.blendMode = "normal");
				var o, r = e[s.ConstValues.DISPLAY];
				for (o in r) n.addDisplayData(t.parseDisplayData(r[o], i));
				return n
			}, t.parseDisplayData = function(e, i) {
				var n = new l;
				return n.name = e[s.ConstValues.A_NAME], n.type = e[s.ConstValues.A_TYPE], n.pivot = i.addSubTexturePivot(0, 0, n.name), t.parseTransform(e[s.ConstValues.TRANSFORM], n.transform, n.pivot), n
			}, t.parseAnimationData = function(e, i, n) {
				var o = new h;
				if (o.name = e[s.ConstValues.A_NAME], o.frameRate = n, o.loop = Number(e[s.ConstValues.A_LOOP]) || 0, o.fadeInTime = Number(e[s.ConstValues.A_FADE_IN_TIME]), o.duration = Number(e[s.ConstValues.A_DURATION]) / n, o.scale = Number(e[s.ConstValues.A_SCALE]), e.hasOwnProperty(s.ConstValues.A_TWEEN_EASING)) {
					var r = e[s.ConstValues.A_TWEEN_EASING];
					o.tweenEasing = void 0 == r || null == r ? 0 / 0 : Number(r)
				} else o.tweenEasing = 0 / 0;
				t.parseTimeline(e, o, t.parseMainFrame, n);
				var a, l, r = e[s.ConstValues.TIMELINE];
				for (l in r) a = r[l], e = t.parseTransformTimeline(a, o.duration, n), a = a[s.ConstValues.A_NAME], o.addTimeline(e, a);
				return s.DBDataUtil.addHideTimeline(o, i), s.DBDataUtil.transformAnimationData(o, i), o
			}, t.parseTimeline = function(t, e, i, n) {
				var o, r = 0;
				t = t[s.ConstValues.FRAME];
				for (var a in t) o = i(t[a], n), o.position = r, e.addFrame(o), r += o.duration;
				o && (o.duration = e.duration - o.position)
			}, t.parseTransformTimeline = function(e, i, n) {
				var o = new a;
				return o.duration = i, t.parseTimeline(e, o, t.parseTransformFrame, n), o.scale = Number(e[s.ConstValues.A_SCALE]), o.offset = Number(e[s.ConstValues.A_OFFSET]), o
			}, t.parseFrame = function(t, e, i) {
				e.duration = Number(t[s.ConstValues.A_DURATION]) / i, e.action = t[s.ConstValues.A_ACTION], e.event = t[s.ConstValues.A_EVENT], e.sound = t[s.ConstValues.A_SOUND]
			}, t.parseMainFrame = function(e, i) {
				var o = new n;
				return t.parseFrame(e, o, i), o
			}, t.parseTransformFrame = function(i, n) {
				var r = new o;
				if (t.parseFrame(i, r, n), r.visible = 1 != Number(i[s.ConstValues.A_HIDE]), i.hasOwnProperty(s.ConstValues.A_TWEEN_EASING)) {
					var a = i[s.ConstValues.A_TWEEN_EASING];
					r.tweenEasing = void 0 == a || null == a ? 0 / 0 : Number(a)
				} else r.tweenEasing = 0;
				return r.tweenRotate = Number(i[s.ConstValues.A_TWEEN_ROTATE]) || 0, r.displayIndex = Number(i[s.ConstValues.A_DISPLAY_INDEX]) || 0, r.zOrder = Number(i[s.ConstValues.A_Z_ORDER]) || 0, t.parseTransform(i[s.ConstValues.TRANSFORM], r.global, r.pivot), r.transform.copy(r.global), (a = i[s.ConstValues.COLOR_TRANSFORM]) && (r.color = new e.ColorTransform, r.color.alphaOffset = Number(a[s.ConstValues.A_ALPHA_OFFSET]), r.color.redOffset = Number(a[s.ConstValues.A_RED_OFFSET]), r.color.greenOffset = Number(a[s.ConstValues.A_GREEN_OFFSET]), r.color.blueOffset = Number(a[s.ConstValues.A_BLUE_OFFSET]), r.color.alphaMultiplier = .01 * Number(a[s.ConstValues.A_ALPHA_MULTIPLIER]), r.color.redMultiplier = .01 * Number(a[s.ConstValues.A_RED_MULTIPLIER]), r.color.greenMultiplier = .01 * Number(a[s.ConstValues.A_GREEN_MULTIPLIER]), r.color.blueMultiplier = .01 * Number(a[s.ConstValues.A_BLUE_MULTIPLIER])), r
			}, t.parseTransform = function(t, e, i) {
				"undefined" == typeof i && (i = null), t && (e && (e.x = Number(t[s.ConstValues.A_X]), e.y = Number(t[s.ConstValues.A_Y]), e.skewX = Number(t[s.ConstValues.A_SKEW_X]) * s.ConstValues.ANGLE_TO_RADIAN, e.skewY = Number(t[s.ConstValues.A_SKEW_Y]) * s.ConstValues.ANGLE_TO_RADIAN, e.scaleX = Number(t[s.ConstValues.A_SCALE_X]), e.scaleY = Number(t[s.ConstValues.A_SCALE_Y])), i && (i.x = Number(t[s.ConstValues.A_PIVOT_X]), i.y = Number(t[s.ConstValues.A_PIVOT_Y])))
			}, t
		}(), t.DataParser = r
	}(t.objects || (t.objects = {}));
	var o = t.objects;
	!
	function(e) {
		var n = function(e) {
				function i() {
					e.call(this), this._dataDic = {}, this._textureAtlasDic = {}, this._textureAtlasLoadingDic = {}
				}
				return __extends(i, e), i.prototype.getSkeletonData = function(t) {
					return this._dataDic[t]
				}, i.prototype.addSkeletonData = function(t, e) {
					if ("undefined" == typeof e && (e = null), !t) throw Error();
					if (e = e || t.name, !e) throw Error("Unnamed data!");
					this._dataDic[e] = t
				}, i.prototype.removeSkeletonData = function(t) {
					delete this._dataDic[t]
				}, i.prototype.getTextureAtlas = function(t) {
					return this._textureAtlasDic[t]
				}, i.prototype.addTextureAtlas = function(t, e) {
					if ("undefined" == typeof e && (e = null), !t) throw Error();
					if (e = e || t.name, !e) throw Error("Unnamed data!");
					this._textureAtlasDic[e] = t
				}, i.prototype.removeTextureAtlas = function(t) {
					delete this._textureAtlasDic[t]
				}, i.prototype.dispose = function(t) {
					if ("undefined" == typeof t && (t = !0), t) {
						for (var e in this._dataDic) this._dataDic[e].dispose();
						for (e in this._textureAtlasDic) this._textureAtlasDic[e].dispose()
					}
					this._currentTextureAtlasName = this._currentDataName = this._textureAtlasLoadingDic = this._textureAtlasDic = this._dataDic = null
				}, i.prototype.buildArmature = function(e, i, n, s, r) {
					if (n) {
						var a = this._dataDic[n];
						if (a) var h = a.getArmatureData(e)
					} else for (n in this._dataDic) if (a = this._dataDic[n], h = a.getArmatureData(e)) break;
					if (!h) return null;
					this._currentDataName = n, this._currentTextureAtlasName = s || n, s = this._generateArmature(), s.name = e;
					var l, p, c, u = h.getBoneDataList();
					for (c in u) p = u[c], l = new t.Bone, l.name = p.name, l.fixedRotation = p.fixedRotation, l.scaleMode = p.scaleMode, l.origin.copy(p.transform), h.getBoneData(p.parent) ? s.addChild(l, p.parent) : s.addChild(l, null);
					if (i && i != e) {
						var d = a.getArmatureData(i);
						if (!d) for (n in this._dataDic) if (a = this._dataDic[n], d = a.getArmatureData(i)) break
					}
					if (s.animation.setAnimationDataList(d ? d.getAnimationDataList() : h.getAnimationDataList()), l = h.getSkinData(r), !l) throw Error();
					e = [], n = l.getSlotDataList();
					for (c in n) if (a = n[c], l = s.getBone(a.parent)) {
						for (r = a.getDisplayDataList(), i = this._generateSlot(), i.name = a.name, i._blendMode = a.blendMode, i._originZOrder = a.zOrder, i._dislayDataList = r, e.length = 0, a = r.length; a--;) switch (h = r[a], h.type) {
						case o.DisplayData.ARMATURE:
							(h = this.buildArmature(h.name, null, this._currentDataName, this._currentTextureAtlasName, null)) && (e[a] = h);
							break;
						default:
							e[a] = this._generateDisplay(this._textureAtlasDic[this._currentTextureAtlasName], h.name, h.pivot.x, h.pivot.y)
						}
						i.setDisplayList(e), i._changeDisplay(0), l.addChild(i)
					}
					return s._slotsZOrderChanged = !0, s.advanceTime(0), s
				}, i.prototype.getTextureDisplay = function(t, e, i, n) {
					if (e) var o = this._textureAtlasDic[e];
					if (!o && !e) for (e in this._textureAtlasDic) {
						if (o = this._textureAtlasDic[e], o.getRegion(t)) break;
						o = null
					}
					return o ? ((isNaN(i) || isNaN(n)) && (e = this._dataDic[e]) && (e = e.getSubTexturePivot(t)) && (i = e.x, n = e.y), this._generateDisplay(o, t, i, n)) : null
				}, i.prototype._generateArmature = function() {
					return null
				}, i.prototype._generateSlot = function() {
					return null
				}, i.prototype._generateDisplay = function() {
					return null
				}, i
			}(i.EventDispatcher);
		e.BaseFactory = n
	}(t.factorys || (t.factorys = {})), function(t) {
		var i = function() {
				function t() {}
				return t.ANGLE_TO_RADIAN = Math.PI / 180, t.DRAGON_BONES = "dragonBones", t.ARMATURE = "armature", t.SKIN = "skin", t.BONE = "bone", t.SLOT = "slot", t.DISPLAY = "display", t.ANIMATION = "animation", t.TIMELINE = "timeline", t.FRAME = "frame", t.TRANSFORM = "transform", t.COLOR_TRANSFORM = "colorTransform", t.TEXTURE_ATLAS = "TextureAtlas", t.SUB_TEXTURE = "SubTexture", t.A_VERSION = "version", t.A_IMAGE_PATH = "imagePath", t.A_FRAME_RATE = "frameRate", t.A_NAME = "name", t.A_PARENT = "parent", t.A_LENGTH = "length", t.A_TYPE = "type", t.A_FADE_IN_TIME = "fadeInTime", t.A_DURATION = "duration", t.A_SCALE = "scale", t.A_OFFSET = "offset", t.A_LOOP = "loop", t.A_EVENT = "event", t.A_SOUND = "sound", t.A_ACTION = "action", t.A_HIDE = "hide", t.A_TWEEN_EASING = "tweenEasing", t.A_TWEEN_ROTATE = "tweenRotate", t.A_DISPLAY_INDEX = "displayIndex", t.A_Z_ORDER = "z", t.A_BLENDMODE = "blendMode", t.A_WIDTH = "width", t.A_HEIGHT = "height", t.A_SCALE_MODE = "scaleMode", t.A_FIXED_ROTATION = "fixedRotation", t.A_X = "x", t.A_Y = "y", t.A_SKEW_X = "skX", t.A_SKEW_Y = "skY", t.A_SCALE_X = "scX", t.A_SCALE_Y = "scY", t.A_PIVOT_X = "pX", t.A_PIVOT_Y = "pY", t.A_ALPHA_OFFSET = "aO", t.A_RED_OFFSET = "rO", t.A_GREEN_OFFSET = "gO", t.A_BLUE_OFFSET = "bO", t.A_ALPHA_MULTIPLIER = "aM", t.A_RED_MULTIPLIER = "rM", t.A_GREEN_MULTIPLIER = "gM", t.A_BLUE_MULTIPLIER = "bM", t
			}();
		t.ConstValues = i;
		var s = function() {
				function t() {}
				return t.transformPointWithParent = function(e, i) {
					var n = t._helpMatrix;
					t.transformToMatrix(i, n), n.invert();
					var o = e.x,
						s = e.y;
					e.x = n.a * o + n.c * s + n.tx, e.y = n.d * s + n.b * o + n.ty, e.skewX = t.formatRadian(e.skewX - i.skewX), e.skewY = t.formatRadian(e.skewY - i.skewY)
				}, t.transformToMatrix = function(t, e) {
					e.a = t.scaleX * Math.cos(t.skewY), e.b = t.scaleX * Math.sin(t.skewY), e.c = -t.scaleY * Math.sin(t.skewX), e.d = t.scaleY * Math.cos(t.skewX), e.tx = t.x, e.ty = t.y
				}, t.formatRadian = function(e) {
					return e %= t.DOUBLE_PI, e > Math.PI && (e -= t.DOUBLE_PI), e < -Math.PI && (e += t.DOUBLE_PI), e
				}, t.DOUBLE_PI = 2 * Math.PI, t._helpMatrix = new e.Matrix, t
			}();
		t.TransformUtil = s, i = function() {
			function t() {}
			return t.transformArmatureData = function(t) {
				for (var e, i, n = t.getBoneDataList(), o = n.length; o--;) e = n[o], e.parent && (i = t.getBoneData(e.parent)) && (e.transform.copy(e.global), s.transformPointWithParent(e.transform, i.global))
			}, t.transformArmatureDataAnimations = function(e) {
				for (var i = e.getAnimationDataList(), n = i.length; n--;) t.transformAnimationData(i[n], e)
			}, t.transformAnimationData = function(e, i) {
				for (var n, o, r, a, h, l, p, c, u, d, m = i.getSkinData(null), _ = i.getBoneDataList(), m = m.getSlotDataList(), y = _.length; y--;) if (n = _[y], o = e.getTimeline(n.name)) {
					r = null;
					for (var f in m) if (r = m[f], r.parent == n.name) break;
					a = n.parent ? e.getTimeline(n.parent) : null, h = o.getFrameList(), c = p = l = null, d = h.length;
					for (var g = 0; d > g; g++) {
						if (u = h[g], a ? (t._helpTransform1.copy(u.global), t.getTimelineTransform(a, u.position, t._helpTransform2), s.transformPointWithParent(t._helpTransform1, t._helpTransform2), u.transform.copy(t._helpTransform1)) : u.transform.copy(u.global), u.transform.x -= n.transform.x, u.transform.y -= n.transform.y, u.transform.skewX -= n.transform.skewX, u.transform.skewY -= n.transform.skewY, u.transform.scaleX -= n.transform.scaleX, u.transform.scaleY -= n.transform.scaleY, !o.transformed && r && (u.zOrder -= r.zOrder), l || (l = o.originTransform, l.copy(u.transform), l.skewX = s.formatRadian(l.skewX), l.skewY = s.formatRadian(l.skewY), p = o.originPivot, p.x = u.pivot.x, p.y = u.pivot.y), u.transform.x -= l.x, u.transform.y -= l.y, u.transform.skewX = s.formatRadian(u.transform.skewX - l.skewX), u.transform.skewY = s.formatRadian(u.transform.skewY - l.skewY), u.transform.scaleX -= l.scaleX, u.transform.scaleY -= l.scaleY, o.transformed || (u.pivot.x -= p.x, u.pivot.y -= p.y), c) {
							var v = u.transform.skewX - c.transform.skewX;
							c.tweenRotate ? 0 < c.tweenRotate ? (0 > v && (u.transform.skewX += 2 * Math.PI, u.transform.skewY += 2 * Math.PI), 1 < c.tweenRotate && (u.transform.skewX += 2 * Math.PI * (c.tweenRotate - 1), u.transform.skewY += 2 * Math.PI * (c.tweenRotate - 1))) : (v > 0 && (u.transform.skewX -= 2 * Math.PI, u.transform.skewY -= 2 * Math.PI), 1 > c.tweenRotate && (u.transform.skewX += 2 * Math.PI * (c.tweenRotate + 1), u.transform.skewY += 2 * Math.PI * (c.tweenRotate + 1))) : (u.transform.skewX = c.transform.skewX + s.formatRadian(u.transform.skewX - c.transform.skewX), u.transform.skewY = c.transform.skewY + s.formatRadian(u.transform.skewY - c.transform.skewY))
						}
						c = u
					}
					o.transformed = !0
				}
			}, t.getTimelineTransform = function(t, e, i) {
				for (var o, r = t.getFrameList(), a = r.length; a--;) if (t = r[a], t.position <= e && t.position + t.duration > e) {
					o = t.tweenEasing, a == r.length - 1 || isNaN(o) || e == t.position ? i.copy(t.global) : (e = (e - t.position) / t.duration, o && (e = n.TimelineState.getEaseValue(e, o)), r = r[a + 1], i.x = t.global.x + (r.global.x - t.global.x) * e, i.y = t.global.y + (r.global.y - t.global.y) * e, i.skewX = s.formatRadian(t.global.skewX + (r.global.skewX - t.global.skewX) * e), i.skewY = s.formatRadian(t.global.skewY + (r.global.skewY - t.global.skewY) * e), i.scaleX = t.global.scaleX + (r.global.scaleX - t.global.scaleX) * e, i.scaleY = t.global.scaleY + (r.global.scaleY - t.global.scaleY) * e);
					break
				}
			}, t.addHideTimeline = function(t, e) {
				for (var i, n = e.getBoneDataList(), s = n.length; s--;) i = n[s], i = i.name, t.getTimeline(i) || t.addTimeline(o.TransformTimeline.HIDE_TIMELINE, i)
			}, t._helpTransform1 = new o.DBTransform, t._helpTransform2 = new o.DBTransform, t
		}(), t.DBDataUtil = i
	}(t.utils || (t.utils = {}));
	var s = t.utils,
		r = function() {
			function t() {
				this.global = new o.DBTransform, this.origin = new o.DBTransform, this.offset = new o.DBTransform, this.tween = new o.DBTransform, this.tween.scaleX = this.tween.scaleY = 0, this._globalTransformMatrix = new e.Matrix, this._visible = !0, this._isDisplayOnStage = this._isColorChanged = !1, this._scaleType = 0, this.fixedRotation = !1
			}
			return t.prototype.getVisible = function() {
				return this._visible
			}, t.prototype.setVisible = function(t) {
				this._visible = t
			}, t.prototype._setParent = function(t) {
				this.parent = t
			}, t.prototype._setArmature = function(t) {
				this.armature && this.armature._removeDBObject(this), (this.armature = t) && this.armature._addDBObject(this)
			}, t.prototype.dispose = function() {
				this._globalTransformMatrix = this.tween = this.offset = this.origin = this.global = this.armature = this.parent = null
			}, t.prototype._update = function() {
				if (this.global.scaleX = (this.origin.scaleX + this.tween.scaleX) * this.offset.scaleX, this.global.scaleY = (this.origin.scaleY + this.tween.scaleY) * this.offset.scaleY, this.parent) {
					var t = this.origin.x + this.offset.x + this.tween.x,
						e = this.origin.y + this.offset.y + this.tween.y,
						i = this.parent._globalTransformMatrix;
					this._globalTransformMatrix.tx = this.global.x = i.a * t + i.c * e + i.tx, this._globalTransformMatrix.ty = this.global.y = i.d * e + i.b * t + i.ty, this.fixedRotation ? (this.global.skewX = this.origin.skewX + this.offset.skewX + this.tween.skewX, this.global.skewY = this.origin.skewY + this.offset.skewY + this.tween.skewY) : (this.global.skewX = this.origin.skewX + this.offset.skewX + this.tween.skewX + this.parent.global.skewX, this.global.skewY = this.origin.skewY + this.offset.skewY + this.tween.skewY + this.parent.global.skewY), this.parent.scaleMode >= this._scaleType && (this.global.scaleX *= this.parent.global.scaleX, this.global.scaleY *= this.parent.global.scaleY)
				} else this._globalTransformMatrix.tx = this.global.x = this.origin.x + this.offset.x + this.tween.x, this._globalTransformMatrix.ty = this.global.y = this.origin.y + this.offset.y + this.tween.y, this.global.skewX = this.origin.skewX + this.offset.skewX + this.tween.skewX, this.global.skewY = this.origin.skewY + this.offset.skewY + this.tween.skewY;
				this._globalTransformMatrix.a = this.global.scaleX * Math.cos(this.global.skewY), this._globalTransformMatrix.b = this.global.scaleX * Math.sin(this.global.skewY), this._globalTransformMatrix.c = -this.global.scaleY * Math.sin(this.global.skewX), this._globalTransformMatrix.d = this.global.scaleY * Math.cos(this.global.skewX)
			}, t
		}();
	t.DBObject = r;
	var a = function(t) {
			function e(e) {
				t.call(this), this._displayBridge = e, this._displayList = [], this._displayIndex = -1, this._scaleType = 1, this._offsetZOrder = this._tweenZorder = this._originZOrder = 0, this._isHideDisplay = this._isDisplayOnStage = !1, this._blendMode = "normal", this._displayBridge.updateBlendMode(this._blendMode)
			}
			return __extends(e, t), e.prototype.getZOrder = function() {
				return this._originZOrder + this._tweenZorder + this._offsetZOrder
			}, e.prototype.setZOrder = function(t) {
				this.getZOrder() != t && (this._offsetZOrder = t - this._originZOrder - this._tweenZorder, this.armature && (this.armature._slotsZOrderChanged = !0))
			}, e.prototype.getDisplay = function() {
				var t = this._displayList[this._displayIndex];
				return t instanceof l ? t.getDisplay() : t
			}, e.prototype.setDisplay = function(t) {
				this._displayList[this._displayIndex] = t, this._setDisplay(t)
			}, e.prototype.getBlendMode = function() {
				return this._blendMode
			}, e.prototype.setBlendMode = function(t) {
				this._blendMode != t && (this._blendMode = t, this._displayBridge.getDisplay() && this._displayBridge.updateBlendMode(this._blendMode))
			}, e.prototype.getChildArmature = function() {
				var t = this._displayList[this._displayIndex];
				return t instanceof l ? t : null
			}, e.prototype.setChildArmature = function(t) {
				(this._displayList[this._displayIndex] = t) && this._setDisplay(t.getDisplay())
			}, e.prototype.getDisplayList = function() {
				return this._displayList
			}, e.prototype.setDisplayList = function(t) {
				if (!t) throw Error();
				for (var e = this._displayList.length = t.length; e--;) this._displayList[e] = t[e];
				0 <= this._displayIndex && (t = this._displayIndex, this._displayIndex = -1, this._changeDisplay(t))
			}, e.prototype._setDisplay = function(t) {
				this._displayBridge.getDisplay() ? this._displayBridge.setDisplay(t) : (this._displayBridge.setDisplay(t), this.armature && (this._displayBridge.addDisplay(this.armature.getDisplay(), -1), this.armature._slotsZOrderChanged = !0)), this.updateChildArmatureAnimation(), t && this._displayBridge.updateBlendMode(this._blendMode), this._isDisplayOnStage = !this._isHideDisplay && this._displayBridge.getDisplay() ? !0 : !1
			}, e.prototype._changeDisplay = function(t) {
				if (0 > t) this._isHideDisplay || (this._isHideDisplay = !0, this._displayBridge.removeDisplay(), this.updateChildArmatureAnimation());
				else {
					if (this._isHideDisplay) {
						this._isHideDisplay = !1;
						var e = !0;
						this.armature && (this._displayBridge.addDisplay(this.armature.getDisplay(), -1), this.armature._slotsZOrderChanged = !0)
					}
					var i = this._displayList.length;
					t >= i && i > 0 && (t = i - 1), this._displayIndex != t ? (this._displayIndex = t, t = this._displayList[this._displayIndex], this._setDisplay(t instanceof l ? t.getDisplay() : t), this._dislayDataList && this._displayIndex <= this._dislayDataList.length && this.origin.copy(this._dislayDataList[this._displayIndex].transform)) : e && this.updateChildArmatureAnimation()
				}
				this._isDisplayOnStage = !this._isHideDisplay && this._displayBridge.getDisplay() ? !0 : !1
			}, e.prototype.setVisible = function(t) {
				t != this._visible && (this._visible = t, this._updateVisible(this._visible))
			}, e.prototype._setArmature = function(e) {
				t.prototype._setArmature.call(this, e), this.armature ? (this.armature._slotsZOrderChanged = !0, this._displayBridge.addDisplay(this.armature.getDisplay(), -1)) : this._displayBridge.removeDisplay()
			}, e.prototype.dispose = function() {
				this._displayBridge && (t.prototype.dispose.call(this), this._displayBridge.dispose(), this._displayList.length = 0, this._dislayDataList = this._displayList = this._displayBridge = null)
			}, e.prototype._update = function() {
				if (t.prototype._update.call(this), this._isDisplayOnStage) {
					var e = this.parent._tweenPivot.x,
						i = this.parent._tweenPivot.y;
					if (e || i) {
						var n = this.parent._globalTransformMatrix;
						this._globalTransformMatrix.tx += n.a * e + n.c * i, this._globalTransformMatrix.ty += n.b * e + n.d * i
					}
					this._displayBridge.updateTransform(this._globalTransformMatrix, this.global)
				}
			}, e.prototype._updateVisible = function(t) {
				this._displayBridge.setVisible(this.parent.getVisible() && this._visible && t)
			}, e.prototype.updateChildArmatureAnimation = function() {
				var t = this.getChildArmature();
				if (t) if (this._isHideDisplay) t.animation.stop(), t.animation._lastAnimationState = null;
				else {
					var e = this.armature ? this.armature.animation.getLastAnimationName() : null;
					e && t.animation.hasAnimation(e) ? t.animation.gotoAndPlay(e) : t.animation.play()
				}
			}, e
		}(r);
	t.Slot = a;
	var h = function(t) {
			function n() {
				t.call(this), this._children = [], this._scaleType = 2, this._tweenPivot = new e.Point, this.scaleMode = 1
			}
			return __extends(n, t), n.prototype.setVisible = function(t) {
				if (this._visible != t) for (this._visible = t, t = this._children.length; t--;) {
					var e = this._children[t];
					e instanceof a && e._updateVisible(this._visible)
				}
			}, n.prototype._setArmature = function(e) {
				for (t.prototype._setArmature.call(this, e), e = this._children.length; e--;) this._children[e]._setArmature(this.armature)
			}, n.prototype.dispose = function() {
				if (this._children) {
					t.prototype.dispose.call(this);
					for (var e = this._children.length; e--;) this._children[e].dispose();
					this._children.length = 0, this.slot = this._tweenPivot = this._children = null
				}
			}, n.prototype.contains = function(t) {
				if (!t) throw Error();
				if (t == this) return !1;
				for (; t != this && null != t;) t = t.parent;
				return t == this
			}, n.prototype.addChild = function(t) {
				if (!t) throw Error();
				if (t == this || t instanceof n && t.contains(this)) throw Error("An Bone cannot be added as a child to itself or one of its children (or children's children, etc.)");
				t.parent && t.parent.removeChild(t), this._children[this._children.length] = t, t._setParent(this), t._setArmature(this.armature), !this.slot && t instanceof a && (this.slot = t)
			}, n.prototype.removeChild = function(t) {
				if (!t) throw Error();
				var e = this._children.indexOf(t);
				if (!(e >= 0)) throw Error();
				this._children.splice(e, 1), t._setParent(null), t._setArmature(null), t == this.slot && (this.slot = null)
			}, n.prototype.getSlots = function() {
				for (var t = [], e = this._children.length; e--;) this._children[e] instanceof a && t.unshift(this._children[e]);
				return t
			}, n.prototype._arriveAtFrame = function(t, e, o) {
				if (t) {
					if (e = o.getMixingTransform(name), !o.displayControl || 2 != e && -1 != e || this.displayController && this.displayController != o.name || !this.slot || (e = t.displayIndex, e >= 0 && !isNaN(t.zOrder) && t.zOrder != this.slot._tweenZorder && (this.slot._tweenZorder = t.zOrder, this.armature._slotsZOrderChanged = !0), this.slot._changeDisplay(e), this.slot._updateVisible(t.visible)), t.event && this.armature.hasEventListener(i.FrameEvent.BONE_FRAME_EVENT) && (e = new i.FrameEvent(i.FrameEvent.BONE_FRAME_EVENT), e.bone = this, e.animationState = o, e.frameLabel = t.event, this.armature._eventList.push(e)), t.sound && n._soundManager.hasEventListener(i.SoundEvent.SOUND) && (e = new i.SoundEvent(i.SoundEvent.SOUND), e.armature = this.armature, e.animationState = o, e.sound = t.sound, n._soundManager.dispatchEvent(e)), t.action) for (var s in this._children) this._children[s] instanceof a && (o = this._children[s].getChildArmature()) && o.animation.gotoAndPlay(t.action)
				} else this.slot && this.slot._changeDisplay(-1)
			}, n.prototype._updateColor = function(t, e, i, n, o, s, r, a, h) {
				(h || this._isColorChanged) && this.slot._displayBridge.updateColor(t, e, i, n, o, s, r, a), this._isColorChanged = h
			}, n._soundManager = i.SoundEventManager.getInstance(), n
		}(r);
	t.Bone = h;
	var l = function(t) {
			function e(e) {
				t.call(this), this.animation = new n.Animation(this), this._display = e, this._slotsZOrderChanged = !1, this._slotList = [], this._boneList = [], this._eventList = []
			}
			return __extends(e, t), e.prototype.getDisplay = function() {
				return this._display
			}, e.prototype.dispose = function() {
				if (this.animation) {
					this.animation.dispose();
					for (var t = this._slotList.length; t--;) this._slotList[t].dispose();
					for (t = this._boneList.length; t--;) this._boneList[t].dispose();
					this._slotList.length = 0, this._boneList.length = 0, this._eventList.length = 0, this.animation = this._display = this._eventList = this._boneList = this._slotList = null
				}
			}, e.prototype.advanceTime = function(t) {
				this.animation.advanceTime(t), t *= this.animation.timeScale;
				for (var e = this._boneList.length; e--;) this._boneList[e]._update();
				for (var n, e = this._slotList.length; e--;) n = this._slotList[e], n._update(), n._isDisplayOnStage && (n = n.getChildArmature()) && n.advanceTime(t);
				if (this._slotsZOrderChanged && (this.updateSlotsZOrder(), this.hasEventListener(i.ArmatureEvent.Z_ORDER_UPDATED) && this.dispatchEvent(new i.ArmatureEvent(i.ArmatureEvent.Z_ORDER_UPDATED))), this._eventList.length) {
					for (t = this._eventList.length, e = 0; t > e; e++) this.dispatchEvent(this._eventList[e]);
					this._eventList.length = 0
				}
			}, e.prototype.getSlots = function(t) {
				return "undefined" == typeof t && (t = !0), t ? this._slotList.concat() : this._slotList
			}, e.prototype.getBones = function(t) {
				return "undefined" == typeof t && (t = !0), t ? this._boneList.concat() : this._boneList
			}, e.prototype.getSlot = function(t) {
				for (var e = this._slotList.length; e--;) if (this._slotList[e].name == t) return this._slotList[e];
				return null
			}, e.prototype.getSlotByDisplay = function(t) {
				if (t) for (var e = this._slotList.length; e--;) if (this._slotList[e].getDisplay() == t) return;
				return this._slotList[e], null
			}, e.prototype.removeSlot = function(t) {
				if (!t) throw Error();
				if (!(0 <= this._slotList.indexOf(t))) throw Error();
				t.parent.removeChild(t)
			}, e.prototype.removeSlotByName = function(t) {
				t && (t = this.getSlot(t)) && this.removeSlot(t)
			}, e.prototype.getBone = function(t) {
				for (var e = this._boneList.length; e--;) if (this._boneList[e].name == t) return this._boneList[e];
				return null
			}, e.prototype.getBoneByDisplay = function(t) {
				return (t = this.getSlotByDisplay(t)) ? t.parent : null
			}, e.prototype.removeBone = function(t) {
				if (!t) throw Error();
				if (!(0 <= this._boneList.indexOf(t))) throw Error();
				t.parent ? t.parent.removeChild(t) : t._setArmature(null)
			}, e.prototype.removeBoneByName = function(t) {
				t && (t = this.getBone(t)) && this.removeBone(t)
			}, e.prototype.addChild = function(t, e) {
				if (!t) throw Error();
				if (e) {
					var i = this.getBone(e);
					if (!i) throw Error();
					i.addChild(t)
				} else t.parent && t.parent.removeChild(t), t._setArmature(this)
			}, e.prototype.updateSlotsZOrder = function() {
				this._slotList.sort(this.sortSlot);
				for (var t, e = this._slotList.length; e--;) t = this._slotList[e], t._isDisplayOnStage && t._displayBridge.addDisplay(this._display, -1);
				this._slotsZOrderChanged = !1
			}, e.prototype._addDBObject = function(t) {
				t instanceof a ? 0 > this._slotList.indexOf(t) && (this._slotList[this._slotList.length] = t) : t instanceof h && 0 > this._boneList.indexOf(t) && (this._boneList[this._boneList.length] = t, this._sortBoneList())
			}, e.prototype._removeDBObject = function(t) {
				t instanceof a ? (t = this._slotList.indexOf(t), t >= 0 && this._slotList.splice(t, 1)) : t instanceof h && (t = this._boneList.indexOf(t), t >= 0 && this._boneList.splice(t, 1))
			}, e.prototype._sortBoneList = function() {
				var t = this._boneList.length;
				if (0 != t) {
					for (var e, i, n, o = []; t--;) {
						for (e = 0, n = i = this._boneList[t]; n;) e++, n = n.parent;
						o[t] = {
							level: e,
							bone: i
						}
					}
					for (o.sort(this.sortBone), t = o.length; t--;) this._boneList[t] = o[t].bone
				}
			}, e.prototype._arriveAtFrame = function(t, n, o) {
				t.event && this.hasEventListener(i.FrameEvent.ANIMATION_FRAME_EVENT) && (n = new i.FrameEvent(i.FrameEvent.ANIMATION_FRAME_EVENT), n.animationState = o, n.frameLabel = t.event, this._eventList.push(n)), t.sound && e._soundManager.hasEventListener(i.SoundEvent.SOUND) && (n = new i.SoundEvent(i.SoundEvent.SOUND), n.armature = this, n.animationState = o, n.sound = t.sound, e._soundManager.dispatchEvent(n)), t.action && o.isPlaying && this.animation.gotoAndPlay(t.action)
			}, e.prototype.sortSlot = function(t, e) {
				return t.getZOrder() < e.getZOrder() ? 1 : -1
			}, e.prototype.sortBone = function(t, e) {
				return t.level < e.level ? 1 : -1
			}, e._soundManager = i.SoundEventManager.getInstance(), e
		}(i.EventDispatcher);
	t.Armature = l
}(dragonBones || (dragonBones = {})), __extends = this.__extends ||
function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype, t.prototype = new i
}, function(t) {
	!
	function(t) {
		var e = function() {
				function t() {}
				return t.prototype.getVisible = function() {
					return this._display ? this._display.visible : !1
				}, t.prototype.setVisible = function(t) {
					this._display && (this._display.visible = t)
				}, t.prototype.getDisplay = function() {
					return this._display
				}, t.prototype.setDisplay = function(t) {
					if (this._display != t) {
						if (this._display) {
							var e = this._display.parent;
							if (e) var i = -1;
							this.removeDisplay()
						}
						this._display = t, this.addDisplay(e, i)
					}
				}, t.prototype.dispose = function() {
					this._display = null
				}, t.prototype.updateTransform = function(e, i) {
					this._display.x = e.tx, this._display.y = e.ty, this._display.skewX = i.skewX * t.RADIAN_TO_ANGLE, this._display.skewY = i.skewY * t.RADIAN_TO_ANGLE, this._display.scaleX = i.scaleX, this._display.scaleY = i.scaleY
				}, t.prototype.updateColor = function(t, e, i, n, o) {
					this._display && (this._display.alpha = o)
				}, t.prototype.updateBlendMode = function(t) {
					this._display && (this._display.blendMode = ns_egret.BlendMode.getBlendMode(t))
				}, t.prototype.addDisplay = function(t, e) {
					t && this._display && (this._display.parent && this._display.parent.removeChild(this._display), 0 > e ? t.addChild(this._display) : t.addChildAt(this._display, Math.min(e, t.numChildren)))
				}, t.prototype.removeDisplay = function() {
					this._display && this._display.parent && this._display.parent.removeChild(this._display)
				}, t.RADIAN_TO_ANGLE = 180 / Math.PI, t
			}();
		t.DragonBonesEgretBridge = e
	}(t.display || (t.display = {}));
	var e = t.display;
	!
	function(e) {
		var i = function() {
				function e(t, e, i) {
					"undefined" == typeof i && (i = 1), this.texture = t, this.scale = i, this.parseData(e)
				}
				return e.prototype.dispose = function() {
					this.texture = null
				}, e.prototype.getRegion = function() {
					throw Error("error")
				}, e.prototype.parseData = function(e) {
					this.name = e[t.utils.ConstValues.A_NAME], this.spriteSheet = ns_egret.SpriteSheet.parseFromDragonBones(e)
				}, e
			}();
		e.EgretTextureAtlas = i
	}(t.textures || (t.textures = {})), function(i) {
		var n = function(i) {
				function n() {
					i.call(this)
				}
				return __extends(n, i), n.prototype._generateArmature = function() {
					return new t.Armature(new ns_egret.DisplayObjectContainer)
				}, n.prototype._generateSlot = function() {
					return new t.Slot(new e.DragonBonesEgretBridge)
				}, n.prototype._generateDisplay = function(t, e, i, n) {
					var o = ns_egret.Bitmap.initWithTexture(t.texture);
					return t = t.spriteSheet.getFrame(e), o.spriteFrame = t, o.anchorOffsetX = i, o.anchorOffsetY = n, o
				}, n
			}(t.factorys.BaseFactory);
		i.EgretFactory = n
	}(t.factorys || (t.factorys = {}))
}(dragonBones || (dragonBones = {})), function(t) {
	var e = function() {
			function e() {}
			return e.checkDrawImage = function(e, i, n, o, s) {
				null == e && t.Logger.fatal("texture??????"), (e._textureWidth < i + o || e._textureHeight < n + s) && t.Logger.fatal("?????????????????????texture??????")
			}, e.checkAddEventListener = function(e, i) {
				(null == i || void 0 == i) && t.Logger.fatal("addEventListener????????????????????????")
			}, e.checkSetScaleGrid = function(e, i, n, o, s) {
				e || t.Logger.fatal("Scale9Bitmap????????????"), (0 > parseInt(i) || 0 > parseInt(n) || 0 > parseInt(o) || 0 > parseInt(s)) && t.Logger.fatal("???????????????????????????"), e._textureWidth < o + s && t.Logger.fatal("???????????????????????????"), e._textureHeight < i + n && t.Logger.fatal("???????????????????????????")
			}, e.TRACE_RENDER_LOOP = function(e) {
				"undefined" == typeof e && (e = 0);
				var i = t.Ticker.getInstance(),
					n = t.MainContext.instance;
				switch (e) {
				case 0:
					i.unregister(n.renderLoop, n);
					break;
				case 1:
					n.renderLoop();
					break;
				case 2:
					i.register(n.renderLoop, n)
				}
			}, e.DRAW_IMAGE = !0, e.ADD_EVENT_LISTENER = !0, e.SCALE_BITMAP_SET_SCALE_GRID = !0, e
		}();
	t.DEBUG = e
}(ns_egret || (ns_egret = {}));
var unstable = unstable || {};
unstable.modal_api = {}, unstable.modal_api.setModal = function(t) {
	void 0 == t && (t = !0), this.touchEnabled = this._modal = t
};
var hitTest = ns_egret.DisplayObjectContainer.prototype.hitTest;
ns_egret.DisplayObjectContainer.prototype.hitTest = function(t, e) {
	if (0 == this.visible) return null;
	var i = hitTest.call(this, t, e);
	return this._modal ? i ? i : this : i
}, ns_egret.DisplayObjectContainer.prototype.setModal = unstable.modal_api.setModal;
var Box2D = {};
!
function(t, e) {
	function i() {}!(Object.defineProperty instanceof Function) && Object.prototype.__defineGetter__ instanceof Function && Object.prototype.__defineSetter__ instanceof Function && (Object.defineProperty = function(t, e, i) {
		i.get instanceof Function && t.__defineGetter__(e, i.get), i.set instanceof Function && t.__defineSetter__(e, i.set)
	}), t.inherit = function(t, e) {
		i.prototype = e.prototype, t.prototype = new i, t.prototype.constructor = t
	}, t.generateCallback = function(t, e) {
		return function() {
			e.apply(t, arguments)
		}
	}, t.NVector = function(t) {
		t === e && (t = 0);
		for (var i = Array(t || 0), n = 0; t > n; ++n) i[n] = 0;
		return i
	}, t.is = function(t, i) {
		return null === t ? !1 : i instanceof Function && t instanceof i || t.constructor.__implements != e && t.constructor.__implements[i] ? !0 : !1
	}, t.parseUInt = function(t) {
		return Math.abs(parseInt(t))
	}
}(Box2D);
var Vector = Array,
	Vector_a2j_Number = Box2D.NVector;
"undefined" == typeof Box2D && (Box2D = {}), "undefined" == typeof Box2D.Collision && (Box2D.Collision = {}), "undefined" == typeof Box2D.Collision.Shapes && (Box2D.Collision.Shapes = {}), "undefined" == typeof Box2D.Common && (Box2D.Common = {}), "undefined" == typeof Box2D.Common.Math && (Box2D.Common.Math = {}), "undefined" == typeof Box2D.Dynamics && (Box2D.Dynamics = {}), "undefined" == typeof Box2D.Dynamics.Contacts && (Box2D.Dynamics.Contacts = {}), "undefined" == typeof Box2D.Dynamics.Controllers && (Box2D.Dynamics.Controllers = {}), "undefined" == typeof Box2D.Dynamics.Joints && (Box2D.Dynamics.Joints = {}), function() {
	function t() {
		t.b2AABB.apply(this, arguments)
	}
	function e() {
		e.b2Bound.apply(this, arguments)
	}
	function i() {
		i.b2BoundValues.apply(this, arguments), this.constructor === i && this.b2BoundValues.apply(this, arguments)
	}
	function n() {
		n.b2Collision.apply(this, arguments)
	}
	function o() {
		o.b2ContactID.apply(this, arguments), this.constructor === o && this.b2ContactID.apply(this, arguments)
	}
	function s() {
		s.b2ContactPoint.apply(this, arguments)
	}
	function r() {
		r.b2Distance.apply(this, arguments)
	}
	function a() {
		a.b2DistanceInput.apply(this, arguments)
	}
	function h() {
		h.b2DistanceOutput.apply(this, arguments)
	}
	function l() {
		l.b2DistanceProxy.apply(this, arguments)
	}
	function p() {
		p.b2DynamicTree.apply(this, arguments), this.constructor === p && this.b2DynamicTree.apply(this, arguments)
	}
	function c() {
		c.b2DynamicTreeBroadPhase.apply(this, arguments)
	}
	function u() {
		u.b2DynamicTreeNode.apply(this, arguments)
	}
	function d() {
		d.b2DynamicTreePair.apply(this, arguments)
	}
	function m() {
		m.b2Manifold.apply(this, arguments), this.constructor === m && this.b2Manifold.apply(this, arguments)
	}
	function _() {
		_.b2ManifoldPoint.apply(this, arguments), this.constructor === _ && this.b2ManifoldPoint.apply(this, arguments)
	}
	function y() {
		y.b2Point.apply(this, arguments)
	}
	function f() {
		f.b2RayCastInput.apply(this, arguments), this.constructor === f && this.b2RayCastInput.apply(this, arguments)
	}
	function g() {
		g.b2RayCastOutput.apply(this, arguments)
	}
	function v() {
		v.b2Segment.apply(this, arguments)
	}
	function x() {
		x.b2SeparationFunction.apply(this, arguments)
	}
	function b() {
		b.b2Simplex.apply(this, arguments), this.constructor === b && this.b2Simplex.apply(this, arguments)
	}
	function C() {
		C.b2SimplexCache.apply(this, arguments)
	}
	function E() {
		E.b2SimplexVertex.apply(this, arguments)
	}
	function w() {
		w.b2TimeOfImpact.apply(this, arguments)
	}
	function A() {
		A.b2TOIInput.apply(this, arguments)
	}
	function D() {
		D.b2WorldManifold.apply(this, arguments), this.constructor === D && this.b2WorldManifold.apply(this, arguments)
	}
	function S() {
		S.ClipVertex.apply(this, arguments)
	}
	function T() {
		T.Features.apply(this, arguments)
	}
	function L() {
		L.b2CircleShape.apply(this, arguments), this.constructor === L && this.b2CircleShape.apply(this, arguments)
	}
	function B() {
		B.b2EdgeChainDef.apply(this, arguments), this.constructor === B && this.b2EdgeChainDef.apply(this, arguments)
	}
	function I() {
		I.b2EdgeShape.apply(this, arguments), this.constructor === I && this.b2EdgeShape.apply(this, arguments)
	}
	function P() {
		P.b2MassData.apply(this, arguments)
	}
	function M() {
		M.b2PolygonShape.apply(this, arguments), this.constructor === M && this.b2PolygonShape.apply(this, arguments)
	}
	function O() {
		O.b2Shape.apply(this, arguments), this.constructor === O && this.b2Shape.apply(this, arguments)
	}
	function R() {
		R.b2Color.apply(this, arguments), this.constructor === R && this.b2Color.apply(this, arguments)
	}
	function N() {
		N.b2Settings.apply(this, arguments)
	}
	function F() {
		F.b2Mat22.apply(this, arguments), this.constructor === F && this.b2Mat22.apply(this, arguments)
	}
	function V() {
		V.b2Mat33.apply(this, arguments), this.constructor === V && this.b2Mat33.apply(this, arguments)
	}
	function G() {
		G.b2Math.apply(this, arguments)
	}
	function k() {
		k.b2Sweep.apply(this, arguments)
	}
	function U() {
		U.b2Transform.apply(this, arguments), this.constructor === U && this.b2Transform.apply(this, arguments)
	}
	function H() {
		H.b2Vec2.apply(this, arguments), this.constructor === H && this.b2Vec2.apply(this, arguments)
	}
	function z() {
		z.b2Vec3.apply(this, arguments), this.constructor === z && this.b2Vec3.apply(this, arguments)
	}
	function j() {
		j.b2Body.apply(this, arguments), this.constructor === j && this.b2Body.apply(this, arguments)
	}
	function W() {
		W.b2BodyDef.apply(this, arguments), this.constructor === W && this.b2BodyDef.apply(this, arguments)
	}
	function X() {
		X.b2ContactFilter.apply(this, arguments)
	}
	function J() {
		J.b2ContactImpulse.apply(this, arguments)
	}
	function Y() {
		Y.b2ContactListener.apply(this, arguments)
	}
	function q() {
		q.b2ContactManager.apply(this, arguments), this.constructor === q && this.b2ContactManager.apply(this, arguments)
	}
	function K() {
		K.b2DebugDraw.apply(this, arguments), this.constructor === K && this.b2DebugDraw.apply(this, arguments)
	}
	function Z() {
		Z.b2DestructionListener.apply(this, arguments)
	}
	function Q() {
		Q.b2FilterData.apply(this, arguments)
	}
	function te() {
		te.b2Fixture.apply(this, arguments), this.constructor === te && this.b2Fixture.apply(this, arguments)
	}
	function $() {
		$.b2FixtureDef.apply(this, arguments), this.constructor === $ && this.b2FixtureDef.apply(this, arguments)
	}
	function ee() {
		ee.b2Island.apply(this, arguments), this.constructor === ee && this.b2Island.apply(this, arguments)
	}
	function ie() {
		ie.b2TimeStep.apply(this, arguments)
	}
	function ne() {
		ne.b2World.apply(this, arguments), this.constructor === ne && this.b2World.apply(this, arguments)
	}
	function oe() {
		oe.b2CircleContact.apply(this, arguments)
	}
	function se() {
		se.b2Contact.apply(this, arguments), this.constructor === se && this.b2Contact.apply(this, arguments)
	}
	function re() {
		re.b2ContactConstraint.apply(this, arguments), this.constructor === re && this.b2ContactConstraint.apply(this, arguments)
	}
	function ae() {
		ae.b2ContactConstraintPoint.apply(this, arguments)
	}
	function he() {
		he.b2ContactEdge.apply(this, arguments)
	}
	function le() {
		le.b2ContactFactory.apply(this, arguments), this.constructor === le && this.b2ContactFactory.apply(this, arguments)
	}
	function pe() {
		pe.b2ContactRegister.apply(this, arguments)
	}
	function ce() {
		ce.b2ContactResult.apply(this, arguments)
	}
	function ue() {
		ue.b2ContactSolver.apply(this, arguments), this.constructor === ue && this.b2ContactSolver.apply(this, arguments)
	}
	function de() {
		de.b2EdgeAndCircleContact.apply(this, arguments)
	}
	function me() {
		me.b2NullContact.apply(this, arguments), this.constructor === me && this.b2NullContact.apply(this, arguments)
	}
	function _e() {
		_e.b2PolyAndCircleContact.apply(this, arguments)
	}
	function ye() {
		ye.b2PolyAndEdgeContact.apply(this, arguments)
	}
	function fe() {
		fe.b2PolygonContact.apply(this, arguments)
	}
	function ge() {
		ge.b2PositionSolverManifold.apply(this, arguments), this.constructor === ge && this.b2PositionSolverManifold.apply(this, arguments)
	}
	function ve() {
		ve.b2BuoyancyController.apply(this, arguments)
	}
	function xe() {
		xe.b2ConstantAccelController.apply(this, arguments)
	}
	function be() {
		be.b2ConstantForceController.apply(this, arguments)
	}
	function Ce() {
		Ce.b2Controller.apply(this, arguments)
	}
	function Ee() {
		Ee.b2ControllerEdge.apply(this, arguments)
	}
	function we() {
		we.b2GravityController.apply(this, arguments)
	}
	function Ae() {
		Ae.b2TensorDampingController.apply(this, arguments)
	}
	function De() {
		De.b2DistanceJoint.apply(this, arguments), this.constructor === De && this.b2DistanceJoint.apply(this, arguments)
	}
	function Se() {
		Se.b2DistanceJointDef.apply(this, arguments), this.constructor === Se && this.b2DistanceJointDef.apply(this, arguments)
	}
	function Te() {
		Te.b2FrictionJoint.apply(this, arguments), this.constructor === Te && this.b2FrictionJoint.apply(this, arguments)
	}
	function Le() {
		Le.b2FrictionJointDef.apply(this, arguments), this.constructor === Le && this.b2FrictionJointDef.apply(this, arguments)
	}
	function Be() {
		Be.b2GearJoint.apply(this, arguments), this.constructor === Be && this.b2GearJoint.apply(this, arguments)
	}
	function Ie() {
		Ie.b2GearJointDef.apply(this, arguments), this.constructor === Ie && this.b2GearJointDef.apply(this, arguments)
	}
	function Pe() {
		Pe.b2Jacobian.apply(this, arguments)
	}
	function Me() {
		Me.b2Joint.apply(this, arguments), this.constructor === Me && this.b2Joint.apply(this, arguments)
	}
	function Oe() {
		Oe.b2JointDef.apply(this, arguments), this.constructor === Oe && this.b2JointDef.apply(this, arguments)
	}
	function Re() {
		Re.b2JointEdge.apply(this, arguments)
	}
	function Ne() {
		Ne.b2LineJoint.apply(this, arguments), this.constructor === Ne && this.b2LineJoint.apply(this, arguments)
	}
	function Fe() {
		Fe.b2LineJointDef.apply(this, arguments), this.constructor === Fe && this.b2LineJointDef.apply(this, arguments)
	}
	function Ve() {
		Ve.b2MouseJoint.apply(this, arguments), this.constructor === Ve && this.b2MouseJoint.apply(this, arguments)
	}
	function Ge() {
		Ge.b2MouseJointDef.apply(this, arguments), this.constructor === Ge && this.b2MouseJointDef.apply(this, arguments)
	}
	function ke() {
		ke.b2PrismaticJoint.apply(this, arguments), this.constructor === ke && this.b2PrismaticJoint.apply(this, arguments)
	}
	function Ue() {
		Ue.b2PrismaticJointDef.apply(this, arguments), this.constructor === Ue && this.b2PrismaticJointDef.apply(this, arguments)
	}
	function He() {
		He.b2PulleyJoint.apply(this, arguments), this.constructor === He && this.b2PulleyJoint.apply(this, arguments)
	}
	function ze() {
		ze.b2PulleyJointDef.apply(this, arguments), this.constructor === ze && this.b2PulleyJointDef.apply(this, arguments)
	}
	function je() {
		je.b2RevoluteJoint.apply(this, arguments), this.constructor === je && this.b2RevoluteJoint.apply(this, arguments)
	}
	function We() {
		We.b2RevoluteJointDef.apply(this, arguments), this.constructor === We && this.b2RevoluteJointDef.apply(this, arguments)
	}
	function Xe() {
		Xe.b2WeldJoint.apply(this, arguments), this.constructor === Xe && this.b2WeldJoint.apply(this, arguments)
	}
	function Je() {
		Je.b2WeldJointDef.apply(this, arguments), this.constructor === Je && this.b2WeldJointDef.apply(this, arguments)
	}
	Box2D.Collision.IBroadPhase = "Box2D.Collision.IBroadPhase", Box2D.Collision.b2AABB = t, Box2D.Collision.b2Bound = e, Box2D.Collision.b2BoundValues = i, Box2D.Collision.b2Collision = n, Box2D.Collision.b2ContactID = o, Box2D.Collision.b2ContactPoint = s, Box2D.Collision.b2Distance = r, Box2D.Collision.b2DistanceInput = a, Box2D.Collision.b2DistanceOutput = h, Box2D.Collision.b2DistanceProxy = l, Box2D.Collision.b2DynamicTree = p, Box2D.Collision.b2DynamicTreeBroadPhase = c, Box2D.Collision.b2DynamicTreeNode = u, Box2D.Collision.b2DynamicTreePair = d, Box2D.Collision.b2Manifold = m, Box2D.Collision.b2ManifoldPoint = _, Box2D.Collision.b2Point = y, Box2D.Collision.b2RayCastInput = f, Box2D.Collision.b2RayCastOutput = g, Box2D.Collision.b2Segment = v, Box2D.Collision.b2SeparationFunction = x, Box2D.Collision.b2Simplex = b, Box2D.Collision.b2SimplexCache = C, Box2D.Collision.b2SimplexVertex = E, Box2D.Collision.b2TimeOfImpact = w, Box2D.Collision.b2TOIInput = A, Box2D.Collision.b2WorldManifold = D, Box2D.Collision.ClipVertex = S, Box2D.Collision.Features = T, Box2D.Collision.Shapes.b2CircleShape = L, Box2D.Collision.Shapes.b2EdgeChainDef = B, Box2D.Collision.Shapes.b2EdgeShape = I, Box2D.Collision.Shapes.b2MassData = P, Box2D.Collision.Shapes.b2PolygonShape = M, Box2D.Collision.Shapes.b2Shape = O, Box2D.Common.b2internal = "Box2D.Common.b2internal", Box2D.Common.b2Color = R, Box2D.Common.b2Settings = N, Box2D.Common.Math.b2Mat22 = F, Box2D.Common.Math.b2Mat33 = V, Box2D.Common.Math.b2Math = G, Box2D.Common.Math.b2Sweep = k, Box2D.Common.Math.b2Transform = U, Box2D.Common.Math.b2Vec2 = H, Box2D.Common.Math.b2Vec3 = z, Box2D.Dynamics.b2Body = j, Box2D.Dynamics.b2BodyDef = W, Box2D.Dynamics.b2ContactFilter = X, Box2D.Dynamics.b2ContactImpulse = J, Box2D.Dynamics.b2ContactListener = Y, Box2D.Dynamics.b2ContactManager = q, Box2D.Dynamics.b2DebugDraw = K, Box2D.Dynamics.b2DestructionListener = Z, Box2D.Dynamics.b2FilterData = Q, Box2D.Dynamics.b2Fixture = te, Box2D.Dynamics.b2FixtureDef = $, Box2D.Dynamics.b2Island = ee, Box2D.Dynamics.b2TimeStep = ie, Box2D.Dynamics.b2World = ne, Box2D.Dynamics.Contacts.b2CircleContact = oe, Box2D.Dynamics.Contacts.b2Contact = se, Box2D.Dynamics.Contacts.b2ContactConstraint = re, Box2D.Dynamics.Contacts.b2ContactConstraintPoint = ae, Box2D.Dynamics.Contacts.b2ContactEdge = he, Box2D.Dynamics.Contacts.b2ContactFactory = le, Box2D.Dynamics.Contacts.b2ContactRegister = pe, Box2D.Dynamics.Contacts.b2ContactResult = ce, Box2D.Dynamics.Contacts.b2ContactSolver = ue, Box2D.Dynamics.Contacts.b2EdgeAndCircleContact = de, Box2D.Dynamics.Contacts.b2NullContact = me, Box2D.Dynamics.Contacts.b2PolyAndCircleContact = _e, Box2D.Dynamics.Contacts.b2PolyAndEdgeContact = ye, Box2D.Dynamics.Contacts.b2PolygonContact = fe, Box2D.Dynamics.Contacts.b2PositionSolverManifold = ge, Box2D.Dynamics.Controllers.b2BuoyancyController = ve, Box2D.Dynamics.Controllers.b2ConstantAccelController = xe, Box2D.Dynamics.Controllers.b2ConstantForceController = be, Box2D.Dynamics.Controllers.b2Controller = Ce, Box2D.Dynamics.Controllers.b2ControllerEdge = Ee, Box2D.Dynamics.Controllers.b2GravityController = we, Box2D.Dynamics.Controllers.b2TensorDampingController = Ae, Box2D.Dynamics.Joints.b2DistanceJoint = De, Box2D.Dynamics.Joints.b2DistanceJointDef = Se, Box2D.Dynamics.Joints.b2FrictionJoint = Te, Box2D.Dynamics.Joints.b2FrictionJointDef = Le, Box2D.Dynamics.Joints.b2GearJoint = Be, Box2D.Dynamics.Joints.b2GearJointDef = Ie, Box2D.Dynamics.Joints.b2Jacobian = Pe, Box2D.Dynamics.Joints.b2Joint = Me, Box2D.Dynamics.Joints.b2JointDef = Oe, Box2D.Dynamics.Joints.b2JointEdge = Re, Box2D.Dynamics.Joints.b2LineJoint = Ne, Box2D.Dynamics.Joints.b2LineJointDef = Fe, Box2D.Dynamics.Joints.b2MouseJoint = Ve, Box2D.Dynamics.Joints.b2MouseJointDef = Ge, Box2D.Dynamics.Joints.b2PrismaticJoint = ke, Box2D.Dynamics.Joints.b2PrismaticJointDef = Ue, Box2D.Dynamics.Joints.b2PulleyJoint = He, Box2D.Dynamics.Joints.b2PulleyJointDef = ze, Box2D.Dynamics.Joints.b2RevoluteJoint = je, Box2D.Dynamics.Joints.b2RevoluteJointDef = We, Box2D.Dynamics.Joints.b2WeldJoint = Xe, Box2D.Dynamics.Joints.b2WeldJointDef = Je
}(), Box2D.postDefs = [], function() {
	var t = Box2D.Collision.Shapes.b2CircleShape,
		e = Box2D.Collision.Shapes.b2PolygonShape,
		i = Box2D.Collision.Shapes.b2Shape,
		n = Box2D.Common.b2Settings,
		o = Box2D.Common.Math.b2Math,
		s = Box2D.Common.Math.b2Sweep,
		r = Box2D.Common.Math.b2Transform,
		a = Box2D.Common.Math.b2Vec2,
		h = Box2D.Collision.b2AABB,
		l = Box2D.Collision.b2Bound,
		p = Box2D.Collision.b2BoundValues,
		c = Box2D.Collision.b2Collision,
		u = Box2D.Collision.b2ContactID,
		d = Box2D.Collision.b2ContactPoint,
		m = Box2D.Collision.b2Distance,
		_ = Box2D.Collision.b2DistanceInput,
		y = Box2D.Collision.b2DistanceOutput,
		f = Box2D.Collision.b2DistanceProxy,
		g = Box2D.Collision.b2DynamicTree,
		v = Box2D.Collision.b2DynamicTreeBroadPhase,
		x = Box2D.Collision.b2DynamicTreeNode,
		b = Box2D.Collision.b2DynamicTreePair,
		C = Box2D.Collision.b2Manifold,
		E = Box2D.Collision.b2ManifoldPoint,
		w = Box2D.Collision.b2Point,
		A = Box2D.Collision.b2RayCastInput,
		D = Box2D.Collision.b2RayCastOutput,
		S = Box2D.Collision.b2Segment,
		T = Box2D.Collision.b2SeparationFunction,
		L = Box2D.Collision.b2Simplex,
		B = Box2D.Collision.b2SimplexCache,
		I = Box2D.Collision.b2SimplexVertex,
		P = Box2D.Collision.b2TimeOfImpact,
		M = Box2D.Collision.b2TOIInput,
		O = Box2D.Collision.b2WorldManifold,
		R = Box2D.Collision.ClipVertex,
		N = Box2D.Collision.Features,
		F = Box2D.Collision.IBroadPhase;
	h.b2AABB = function() {
		this.lowerBound = new a, this.upperBound = new a
	}, h.prototype.IsValid = function() {
		var t = this.upperBound.y - this.lowerBound.y;
		return t = (t = 0 <= this.upperBound.x - this.lowerBound.x && t >= 0) && this.lowerBound.IsValid() && this.upperBound.IsValid()
	}, h.prototype.GetCenter = function() {
		return new a((this.lowerBound.x + this.upperBound.x) / 2, (this.lowerBound.y + this.upperBound.y) / 2)
	}, h.prototype.GetExtents = function() {
		return new a((this.upperBound.x - this.lowerBound.x) / 2, (this.upperBound.y - this.lowerBound.y) / 2)
	}, h.prototype.Contains = function(t) {
		var e;
		return e = (e = (e = (e = this.lowerBound.x <= t.lowerBound.x) && this.lowerBound.y <= t.lowerBound.y) && t.upperBound.x <= this.upperBound.x) && t.upperBound.y <= this.upperBound.y
	}, h.prototype.RayCast = function(t, e) {
		var i = -Number.MAX_VALUE,
			n = Number.MAX_VALUE,
			o = e.p1.x,
			s = e.p1.y,
			r = e.p2.x - e.p1.x,
			a = e.p2.y - e.p1.y,
			h = Math.abs(r),
			l = Math.abs(a),
			p = t.normal,
			c = 0,
			u = 0,
			d = c = 0,
			d = 0;
		if (h < Number.MIN_VALUE) {
			if (o < this.lowerBound.x || this.upperBound.x < o) return !1
		} else if (c = 1 / r, u = (this.lowerBound.x - o) * c, c *= this.upperBound.x - o, d = -1, u > c && (d = u, u = c, c = d, d = 1), u > i && (p.x = d, p.y = 0, i = u), n = Math.min(n, c), i > n) return !1;
		if (l < Number.MIN_VALUE) {
			if (s < this.lowerBound.y || this.upperBound.y < s) return !1
		} else if (c = 1 / a, u = (this.lowerBound.y - s) * c, c *= this.upperBound.y - s, d = -1, u > c && (d = u, u = c, c = d, d = 1), u > i && (p.y = d, p.x = 0, i = u), n = Math.min(n, c), i > n) return !1;
		return t.fraction = i, !0
	}, h.prototype.TestOverlap = function(t) {
		var e = t.lowerBound.y - this.upperBound.y,
			i = this.lowerBound.y - t.upperBound.y;
		return 0 < t.lowerBound.x - this.upperBound.x || e > 0 || 0 < this.lowerBound.x - t.upperBound.x || i > 0 ? !1 : !0
	}, h.Combine = function(t, e) {
		var i = new h;
		return i.Combine(t, e), i
	}, h.prototype.Combine = function(t, e) {
		this.lowerBound.x = Math.min(t.lowerBound.x, e.lowerBound.x), this.lowerBound.y = Math.min(t.lowerBound.y, e.lowerBound.y), this.upperBound.x = Math.max(t.upperBound.x, e.upperBound.x), this.upperBound.y = Math.max(t.upperBound.y, e.upperBound.y)
	}, l.b2Bound = function() {}, l.prototype.IsLower = function() {
		return 0 == (1 & this.value)
	}, l.prototype.IsUpper = function() {
		return 1 == (1 & this.value)
	}, l.prototype.Swap = function(t) {
		var e = this.value,
			i = this.proxy,
			n = this.stabbingCount;
		this.value = t.value, this.proxy = t.proxy, this.stabbingCount = t.stabbingCount, t.value = e, t.proxy = i, t.stabbingCount = n
	}, p.b2BoundValues = function() {}, p.prototype.b2BoundValues = function() {
		this.lowerValues = new Vector_a2j_Number, this.lowerValues[0] = 0, this.lowerValues[1] = 0, this.upperValues = new Vector_a2j_Number, this.upperValues[0] = 0, this.upperValues[1] = 0
	}, c.b2Collision = function() {}, c.ClipSegmentToLine = function(t, e, i, n) {
		void 0 === n && (n = 0);
		var o, s = 0;
		o = e[0];
		var r = o.v;
		o = e[1];
		var a = o.v,
			h = i.x * r.x + i.y * r.y - n;
		return o = i.x * a.x + i.y * a.y - n, 0 >= h && t[s++].Set(e[0]), 0 >= o && t[s++].Set(e[1]), 0 > h * o && (i = h / (h - o), o = t[s], o = o.v, o.x = r.x + i * (a.x - r.x), o.y = r.y + i * (a.y - r.y), o = t[s], o.id = (h > 0 ? e[0] : e[1]).id, ++s), s
	}, c.EdgeSeparation = function(t, e, i, n, o) {
		void 0 === i && (i = 0), parseInt(t.m_vertexCount);
		var s = t.m_vertices;
		t = t.m_normals;
		var r, a, h = parseInt(n.m_vertexCount),
			l = n.m_vertices;
		r = e.R, a = t[i], t = r.col1.x * a.x + r.col2.x * a.y, n = r.col1.y * a.x + r.col2.y * a.y, r = o.R;
		var p = r.col1.x * t + r.col1.y * n;
		r = r.col2.x * t + r.col2.y * n;
		for (var c = 0, u = Number.MAX_VALUE, d = 0; h > d; ++d) a = l[d], a = a.x * p + a.y * r, u > a && (u = a, c = d);
		return a = s[i], r = e.R, i = e.position.x + (r.col1.x * a.x + r.col2.x * a.y), e = e.position.y + (r.col1.y * a.x + r.col2.y * a.y), a = l[c], r = o.R, s = o.position.x + (r.col1.x * a.x + r.col2.x * a.y), o = o.position.y + (r.col1.y * a.x + r.col2.y * a.y), (s - i) * t + (o - e) * n
	}, c.FindMaxSeparation = function(t, e, i, n, o) {
		var s, r, a = parseInt(e.m_vertexCount),
			h = e.m_normals;
		r = o.R, s = n.m_centroid;
		var l = o.position.x + (r.col1.x * s.x + r.col2.x * s.y),
			p = o.position.y + (r.col1.y * s.x + r.col2.y * s.y);
		r = i.R, s = e.m_centroid, l -= i.position.x + (r.col1.x * s.x + r.col2.x * s.y), p -= i.position.y + (r.col1.y * s.x + r.col2.y * s.y), r = l * i.R.col1.x + p * i.R.col1.y;
		for (var p = l * i.R.col2.x + p * i.R.col2.y, l = 0, u = -Number.MAX_VALUE, d = 0; a > d; ++d) s = h[d], s = s.x * r + s.y * p, s > u && (u = s, l = d);
		h = c.EdgeSeparation(e, i, l, n, o), s = parseInt(l - 1 >= 0 ? l - 1 : a - 1), r = c.EdgeSeparation(e, i, s, n, o);
		var p = parseInt(a > l + 1 ? l + 1 : 0),
			u = c.EdgeSeparation(e, i, p, n, o),
			m = d = 0,
			_ = 0;
		if (r > h && r > u) _ = -1, d = s, m = r;
		else {
			if (!(u > h)) return t[0] = l, h;
			_ = 1, d = p, m = u
		}
		for (; l = -1 == _ ? d - 1 >= 0 ? d - 1 : a - 1 : a > d + 1 ? d + 1 : 0, h = c.EdgeSeparation(e, i, l, n, o), h > m;) d = l, m = h;
		return t[0] = d, m
	}, c.FindIncidentEdge = function(t, e, i, n, o, s) {
		void 0 === n && (n = 0), parseInt(e.m_vertexCount);
		var r = e.m_normals,
			a = parseInt(o.m_vertexCount);
		e = o.m_vertices, o = o.m_normals;
		var h;
		h = i.R, i = r[n];
		var r = h.col1.x * i.x + h.col2.x * i.y,
			l = h.col1.y * i.x + h.col2.y * i.y;
		h = s.R, i = h.col1.x * r + h.col1.y * l, l = h.col2.x * r + h.col2.y * l, r = i, h = 0;
		for (var p = Number.MAX_VALUE, c = 0; a > c; ++c) i = o[c], i = r * i.x + l * i.y, p > i && (p = i, h = c);
		o = parseInt(h), r = parseInt(a > o + 1 ? o + 1 : 0), a = t[0], i = e[o], h = s.R, a.v.x = s.position.x + (h.col1.x * i.x + h.col2.x * i.y), a.v.y = s.position.y + (h.col1.y * i.x + h.col2.y * i.y), a.id.features.referenceEdge = n, a.id.features.incidentEdge = o, a.id.features.incidentVertex = 0, a = t[1], i = e[r], h = s.R, a.v.x = s.position.x + (h.col1.x * i.x + h.col2.x * i.y), a.v.y = s.position.y + (h.col1.y * i.x + h.col2.y * i.y), a.id.features.referenceEdge = n, a.id.features.incidentEdge = r, a.id.features.incidentVertex = 1
	}, c.MakeClipPointVector = function() {
		var t = new Vector(2);
		return t[0] = new R, t[1] = new R, t
	}, c.CollidePolygons = function(t, e, i, o, s) {
		var r;
		t.m_pointCount = 0;
		var a = e.m_radius + o.m_radius;
		c.s_edgeAO[0] = 0;
		var h = c.FindMaxSeparation(c.s_edgeAO, e, i, o, s);
		if (r = c.s_edgeAO[0], !(h > a)) {
			var l;
			c.s_edgeBO[0] = 0;
			var p = c.FindMaxSeparation(c.s_edgeBO, o, s, e, i);
			if (l = c.s_edgeBO[0], !(p > a)) {
				var u = 0,
					d = 0;
				p > .98 * h + .001 ? (h = o, o = e, e = s, u = l, t.m_type = C.e_faceB, d = 1) : (h = e, e = i, i = s, u = r, t.m_type = C.e_faceA, d = 0), r = c.s_incidentEdge, c.FindIncidentEdge(r, h, e, u, o, i), l = parseInt(h.m_vertexCount), s = h.m_vertices;
				var m, h = s[u];
				m = l > u + 1 ? s[parseInt(u + 1)] : s[0], u = c.s_localTangent, u.Set(m.x - h.x, m.y - h.y), u.Normalize(), s = c.s_localNormal, s.x = u.y, s.y = -u.x, o = c.s_planePoint, o.Set(.5 * (h.x + m.x), .5 * (h.y + m.y)), p = c.s_tangent, l = e.R, p.x = l.col1.x * u.x + l.col2.x * u.y, p.y = l.col1.y * u.x + l.col2.y * u.y;
				var _ = c.s_tangent2;
				_.x = -p.x, _.y = -p.y, u = c.s_normal, u.x = p.y, u.y = -p.x;
				var y = c.s_v11,
					f = c.s_v12;
				if (y.x = e.position.x + (l.col1.x * h.x + l.col2.x * h.y), y.y = e.position.y + (l.col1.y * h.x + l.col2.y * h.y), f.x = e.position.x + (l.col1.x * m.x + l.col2.x * m.y), f.y = e.position.y + (l.col1.y * m.x + l.col2.y * m.y), e = u.x * y.x + u.y * y.y, l = p.x * f.x + p.y * f.y + a, m = c.s_clipPoints1, h = c.s_clipPoints2, f = 0, f = c.ClipSegmentToLine(m, r, _, -p.x * y.x - p.y * y.y + a), !(2 > f || (f = c.ClipSegmentToLine(h, m, p, l), 2 > f))) {
					for (t.m_localPlaneNormal.SetV(s), t.m_localPoint.SetV(o), o = s = 0; o < n.b2_maxManifoldPoints; ++o) r = h[o], u.x * r.v.x + u.y * r.v.y - e <= a && (p = t.m_points[s], l = i.R, _ = r.v.x - i.position.x, y = r.v.y - i.position.y, p.m_localPoint.x = _ * l.col1.x + y * l.col1.y, p.m_localPoint.y = _ * l.col2.x + y * l.col2.y, p.m_id.Set(r.id), p.m_id.features.flip = d, ++s);
					t.m_pointCount = s
				}
			}
		}
	}, c.CollideCircles = function(t, e, i, n, o) {
		t.m_pointCount = 0;
		var s, r;
		s = i.R, r = e.m_p;
		var a = i.position.x + (s.col1.x * r.x + s.col2.x * r.y);
		i = i.position.y + (s.col1.y * r.x + s.col2.y * r.y), s = o.R, r = n.m_p, a = o.position.x + (s.col1.x * r.x + s.col2.x * r.y) - a, o = o.position.y + (s.col1.y * r.x + s.col2.y * r.y) - i, s = e.m_radius + n.m_radius, a * a + o * o > s * s || (t.m_type = C.e_circles, t.m_localPoint.SetV(e.m_p), t.m_localPlaneNormal.SetZero(), t.m_pointCount = 1, t.m_points[0].m_localPoint.SetV(n.m_p), t.m_points[0].m_id.key = 0)
	}, c.CollidePolygonAndCircle = function(t, e, i, n, o) {
		var s, r, a = t.m_pointCount = 0,
			h = 0;
		r = o.R, s = n.m_p;
		var l = o.position.y + (r.col1.y * s.x + r.col2.y * s.y),
			a = o.position.x + (r.col1.x * s.x + r.col2.x * s.y) - i.position.x,
			h = l - i.position.y;
		r = i.R, i = a * r.col1.x + h * r.col1.y, r = a * r.col2.x + h * r.col2.y;
		var p = 0,
			l = -Number.MAX_VALUE;
		o = e.m_radius + n.m_radius;
		var c = parseInt(e.m_vertexCount),
			u = e.m_vertices;
		e = e.m_normals;
		for (var d = 0; c > d; ++d) {
			if (s = u[d], a = i - s.x, h = r - s.y, s = e[d], a = s.x * a + s.y * h, a > o) return;
			a > l && (l = a, p = d)
		}
		a = parseInt(p), h = parseInt(c > a + 1 ? a + 1 : 0), s = u[a], u = u[h], l < Number.MIN_VALUE ? (t.m_pointCount = 1, t.m_type = C.e_faceA, t.m_localPlaneNormal.SetV(e[p]), t.m_localPoint.x = .5 * (s.x + u.x), t.m_localPoint.y = .5 * (s.y + u.y), t.m_points[0].m_localPoint.SetV(n.m_p), t.m_points[0].m_id.key = 0) : (l = (i - u.x) * (s.x - u.x) + (r - u.y) * (s.y - u.y), 0 >= (i - s.x) * (u.x - s.x) + (r - s.y) * (u.y - s.y) ? (i - s.x) * (i - s.x) + (r - s.y) * (r - s.y) > o * o || (t.m_pointCount = 1, t.m_type = C.e_faceA, t.m_localPlaneNormal.x = i - s.x, t.m_localPlaneNormal.y = r - s.y, t.m_localPlaneNormal.Normalize(), t.m_localPoint.SetV(s), t.m_points[0].m_localPoint.SetV(n.m_p), t.m_points[0].m_id.key = 0) : 0 >= l ? (i - u.x) * (i - u.x) + (r - u.y) * (r - u.y) > o * o || (t.m_pointCount = 1, t.m_type = C.e_faceA, t.m_localPlaneNormal.x = i - u.x, t.m_localPlaneNormal.y = r - u.y, t.m_localPlaneNormal.Normalize(), t.m_localPoint.SetV(u), t.m_points[0].m_localPoint.SetV(n.m_p), t.m_points[0].m_id.key = 0) : (p = .5 * (s.x + u.x), s = .5 * (s.y + u.y), l = (i - p) * e[a].x + (r - s) * e[a].y, l > o || (t.m_pointCount = 1, t.m_type = C.e_faceA, t.m_localPlaneNormal.x = e[a].x, t.m_localPlaneNormal.y = e[a].y, t.m_localPlaneNormal.Normalize(), t.m_localPoint.Set(p, s), t.m_points[0].m_localPoint.SetV(n.m_p), t.m_points[0].m_id.key = 0)))
	}, c.TestOverlap = function(t, e) {
		var i = e.lowerBound,
			n = t.upperBound,
			o = i.x - n.x,
			s = i.y - n.y,
			i = t.lowerBound,
			n = e.upperBound,
			r = i.y - n.y;
		return o > 0 || s > 0 || 0 < i.x - n.x || r > 0 ? !1 : !0
	}, Box2D.postDefs.push(function() {
		Box2D.Collision.b2Collision.s_incidentEdge = c.MakeClipPointVector(), Box2D.Collision.b2Collision.s_clipPoints1 = c.MakeClipPointVector(), Box2D.Collision.b2Collision.s_clipPoints2 = c.MakeClipPointVector(), Box2D.Collision.b2Collision.s_edgeAO = new Vector_a2j_Number(1), Box2D.Collision.b2Collision.s_edgeBO = new Vector_a2j_Number(1), Box2D.Collision.b2Collision.s_localTangent = new a, Box2D.Collision.b2Collision.s_localNormal = new a, Box2D.Collision.b2Collision.s_planePoint = new a, Box2D.Collision.b2Collision.s_normal = new a, Box2D.Collision.b2Collision.s_tangent = new a, Box2D.Collision.b2Collision.s_tangent2 = new a, Box2D.Collision.b2Collision.s_v11 = new a, Box2D.Collision.b2Collision.s_v12 = new a, Box2D.Collision.b2Collision.b2CollidePolyTempVec = new a, Box2D.Collision.b2Collision.b2_nullFeature = 255
	}), u.b2ContactID = function() {
		this.features = new N
	}, u.prototype.b2ContactID = function() {
		this.features._m_id = this
	}, u.prototype.Set = function(t) {
		this.key = t._key
	}, u.prototype.Copy = function() {
		var t = new u;
		return t.key = this.key, t
	}, Object.defineProperty(u.prototype, "key", {
		enumerable: !1,
		configurable: !0,
		get: function() {
			return this._key
		}
	}), Object.defineProperty(u.prototype, "key", {
		enumerable: !1,
		configurable: !0,
		set: function(t) {
			void 0 === t && (t = 0), this._key = t, this.features._referenceEdge = 255 & this._key, this.features._incidentEdge = (65280 & this._key) >> 8 & 255, this.features._incidentVertex = (16711680 & this._key) >> 16 & 255, this.features._flip = (4278190080 & this._key) >> 24 & 255
		}
	}), d.b2ContactPoint = function() {
		this.position = new a, this.velocity = new a, this.normal = new a, this.id = new u
	}, m.b2Distance = function() {}, m.Distance = function(t, e, i) {
		++m.b2_gjkCalls;
		var s = i.proxyA,
			r = i.proxyB,
			h = i.transformA,
			l = i.transformB,
			p = m.s_simplex;
		p.ReadCache(e, s, h, r, l);
		var c = p.m_vertices,
			u = m.s_saveA,
			d = m.s_saveB,
			_ = 0;
		p.GetClosestPoint().LengthSquared();
		for (var y, f = 0, g = 0; 20 > g;) {
			for (_ = p.m_count, f = 0; _ > f; f++) u[f] = c[f].indexA, d[f] = c[f].indexB;
			switch (p.m_count) {
			case 1:
				break;
			case 2:
				p.Solve2();
				break;
			case 3:
				p.Solve3();
				break;
			default:
				n.b2Assert(!1)
			}
			if (3 == p.m_count) break;
			if (y = p.GetClosestPoint(), y.LengthSquared(), f = p.GetSearchDirection(), f.LengthSquared() < Number.MIN_VALUE * Number.MIN_VALUE) break;
			y = c[p.m_count], y.indexA = s.GetSupport(o.MulTMV(h.R, f.GetNegative())), y.wA = o.MulX(h, s.GetVertex(y.indexA)), y.indexB = r.GetSupport(o.MulTMV(l.R, f)), y.wB = o.MulX(l, r.GetVertex(y.indexB)), y.w = o.SubtractVV(y.wB, y.wA), ++g, ++m.b2_gjkIters;
			for (var v = !1, f = 0; _ > f; f++) if (y.indexA == u[f] && y.indexB == d[f]) {
				v = !0;
				break
			}
			if (v) break;
			++p.m_count
		}
		m.b2_gjkMaxIters = o.Max(m.b2_gjkMaxIters, g), p.GetWitnessPoints(t.pointA, t.pointB), t.distance = o.SubtractVV(t.pointA, t.pointB).Length(), t.iterations = g, p.WriteCache(e), i.useRadii && (e = s.m_radius, r = r.m_radius, t.distance > e + r && t.distance > Number.MIN_VALUE ? (t.distance -= e + r, i = o.SubtractVV(t.pointB, t.pointA), i.Normalize(), t.pointA.x += e * i.x, t.pointA.y += e * i.y, t.pointB.x -= r * i.x, t.pointB.y -= r * i.y) : (y = new a, y.x = .5 * (t.pointA.x + t.pointB.x), y.y = .5 * (t.pointA.y + t.pointB.y), t.pointA.x = t.pointB.x = y.x, t.pointA.y = t.pointB.y = y.y, t.distance = 0))
	}, Box2D.postDefs.push(function() {
		Box2D.Collision.b2Distance.s_simplex = new L, Box2D.Collision.b2Distance.s_saveA = new Vector_a2j_Number(3), Box2D.Collision.b2Distance.s_saveB = new Vector_a2j_Number(3)
	}), _.b2DistanceInput = function() {}, y.b2DistanceOutput = function() {
		this.pointA = new a, this.pointB = new a
	}, f.b2DistanceProxy = function() {}, f.prototype.Set = function(o) {
		switch (o.GetType()) {
		case i.e_circleShape:
			o = o instanceof t ? o : null, this.m_vertices = new Vector(1, !0), this.m_vertices[0] = o.m_p, this.m_count = 1, this.m_radius = o.m_radius;
			break;
		case i.e_polygonShape:
			o = o instanceof e ? o : null, this.m_vertices = o.m_vertices, this.m_count = o.m_vertexCount, this.m_radius = o.m_radius;
			break;
		default:
			n.b2Assert(!1)
		}
	}, f.prototype.GetSupport = function(t) {
		for (var e = 0, i = this.m_vertices[0].x * t.x + this.m_vertices[0].y * t.y, n = 1; n < this.m_count; ++n) {
			var o = this.m_vertices[n].x * t.x + this.m_vertices[n].y * t.y;
			o > i && (e = n, i = o)
		}
		return e
	}, f.prototype.GetSupportVertex = function(t) {
		for (var e = 0, i = this.m_vertices[0].x * t.x + this.m_vertices[0].y * t.y, n = 1; n < this.m_count; ++n) {
			var o = this.m_vertices[n].x * t.x + this.m_vertices[n].y * t.y;
			o > i && (e = n, i = o)
		}
		return this.m_vertices[e]
	}, f.prototype.GetVertexCount = function() {
		return this.m_count
	}, f.prototype.GetVertex = function(t) {
		return void 0 === t && (t = 0), n.b2Assert(t >= 0 && t < this.m_count), this.m_vertices[t]
	}, g.b2DynamicTree = function() {}, g.prototype.b2DynamicTree = function() {
		this.m_freeList = this.m_root = null, this.m_insertionCount = this.m_path = 0
	}, g.prototype.CreateProxy = function(t, e) {
		var i = this.AllocateNode(),
			o = n.b2_aabbExtension,
			s = n.b2_aabbExtension;
		return i.aabb.lowerBound.x = t.lowerBound.x - o, i.aabb.lowerBound.y = t.lowerBound.y - s, i.aabb.upperBound.x = t.upperBound.x + o, i.aabb.upperBound.y = t.upperBound.y + s, i.userData = e, this.InsertLeaf(i), i
	}, g.prototype.DestroyProxy = function(t) {
		this.RemoveLeaf(t), this.FreeNode(t)
	}, g.prototype.MoveProxy = function(t, e, i) {
		if (n.b2Assert(t.IsLeaf()), t.aabb.Contains(e)) return !1;
		this.RemoveLeaf(t);
		var o = n.b2_aabbExtension + n.b2_aabbMultiplier * (0 < i.x ? i.x : -i.x);
		return i = n.b2_aabbExtension + n.b2_aabbMultiplier * (0 < i.y ? i.y : -i.y), t.aabb.lowerBound.x = e.lowerBound.x - o, t.aabb.lowerBound.y = e.lowerBound.y - i, t.aabb.upperBound.x = e.upperBound.x + o, t.aabb.upperBound.y = e.upperBound.y + i, this.InsertLeaf(t), !0
	}, g.prototype.Rebalance = function(t) {
		if (void 0 === t && (t = 0), null != this.m_root) for (var e = 0; t > e; e++) {
			for (var i = this.m_root, n = 0; 0 == i.IsLeaf();) i = this.m_path >> n & 1 ? i.child2 : i.child1, n = n + 1 & 31;
			++this.m_path, this.RemoveLeaf(i), this.InsertLeaf(i)
		}
	}, g.prototype.GetFatAABB = function(t) {
		return t.aabb
	}, g.prototype.GetUserData = function(t) {
		return t.userData
	}, g.prototype.Query = function(t, e) {
		if (null != this.m_root) {
			var i = new Vector,
				n = 0;
			for (i[n++] = this.m_root; n > 0;) {
				var o = i[--n];
				if (o.aabb.TestOverlap(e)) if (o.IsLeaf()) {
					if (!t(o)) break
				} else i[n++] = o.child1, i[n++] = o.child2
			}
		}
	}, g.prototype.RayCast = function(t, e) {
		if (null != this.m_root) {
			var i = e.p1,
				n = e.p2,
				s = o.SubtractVV(i, n);
			s.Normalize();
			var s = o.CrossFV(1, s),
				r = o.AbsV(s),
				a = e.maxFraction,
				l = new h,
				p = 0,
				c = 0,
				p = i.x + a * (n.x - i.x),
				c = i.y + a * (n.y - i.y);
			l.lowerBound.x = Math.min(i.x, p), l.lowerBound.y = Math.min(i.y, c), l.upperBound.x = Math.max(i.x, p), l.upperBound.y = Math.max(i.y, c);
			var u = new Vector,
				d = 0;
			for (u[d++] = this.m_root; d > 0;) if (a = u[--d], 0 != a.aabb.TestOverlap(l) && (p = a.aabb.GetCenter(), c = a.aabb.GetExtents(), !(0 < Math.abs(s.x * (i.x - p.x) + s.y * (i.y - p.y)) - r.x * c.x - r.y * c.y))) if (a.IsLeaf()) {
				if (p = new A, p.p1 = e.p1, p.p2 = e.p2, p.maxFraction = e.maxFraction, a = t(p, a), 0 == a) break;
				a > 0 && (p = i.x + a * (n.x - i.x), c = i.y + a * (n.y - i.y), l.lowerBound.x = Math.min(i.x, p), l.lowerBound.y = Math.min(i.y, c), l.upperBound.x = Math.max(i.x, p), l.upperBound.y = Math.max(i.y, c))
			} else u[d++] = a.child1, u[d++] = a.child2
		}
	}, g.prototype.AllocateNode = function() {
		if (this.m_freeList) {
			var t = this.m_freeList;
			return this.m_freeList = t.parent, t.parent = null, t.child1 = null, t.child2 = null, t
		}
		return new x
	}, g.prototype.FreeNode = function(t) {
		t.parent = this.m_freeList, this.m_freeList = t
	}, g.prototype.InsertLeaf = function(t) {
		if (++this.m_insertionCount, null == this.m_root) this.m_root = t, this.m_root.parent = null;
		else {
			var e = t.aabb.GetCenter(),
				i = this.m_root;
			if (0 == i.IsLeaf()) do
			var n = i.child1,
				i = i.child2,
				o = Math.abs((n.aabb.lowerBound.x + n.aabb.upperBound.x) / 2 - e.x) + Math.abs((n.aabb.lowerBound.y + n.aabb.upperBound.y) / 2 - e.y),
				s = Math.abs((i.aabb.lowerBound.x + i.aabb.upperBound.x) / 2 - e.x) + Math.abs((i.aabb.lowerBound.y + i.aabb.upperBound.y) / 2 - e.y),
				i = s > o ? n : i;
			while (0 == i.IsLeaf());
			if (e = i.parent, n = this.AllocateNode(), n.parent = e, n.userData = null, n.aabb.Combine(t.aabb, i.aabb), e) {
				i.parent.child1 == i ? e.child1 = n : e.child2 = n, n.child1 = i, n.child2 = t, i.parent = n, t.parent = n;
				do {
					if (e.aabb.Contains(n.aabb)) break;
					e.aabb.Combine(e.child1.aabb, e.child2.aabb), n = e, e = e.parent
				} while (e)
			} else n.child1 = i, n.child2 = t, i.parent = n, this.m_root = t.parent = n
		}
	}, g.prototype.RemoveLeaf = function(t) {
		if (t == this.m_root) this.m_root = null;
		else {
			var e = t.parent,
				i = e.parent;
			if (t = e.child1 == t ? e.child2 : e.child1, i) for (i.child1 == e ? i.child1 = t : i.child2 = t, t.parent = i, this.FreeNode(e); i && (e = i.aabb, i.aabb = h.Combine(i.child1.aabb, i.child2.aabb), !e.Contains(i.aabb));) i = i.parent;
			else this.m_root = t, t.parent = null, this.FreeNode(e)
		}
	}, v.b2DynamicTreeBroadPhase = function() {
		this.m_tree = new g, this.m_moveBuffer = new Vector, this.m_pairBuffer = new Vector, this.m_pairCount = 0
	}, v.prototype.CreateProxy = function(t, e) {
		var i = this.m_tree.CreateProxy(t, e);
		return ++this.m_proxyCount, this.BufferMove(i), i
	}, v.prototype.DestroyProxy = function(t) {
		this.UnBufferMove(t), --this.m_proxyCount, this.m_tree.DestroyProxy(t)
	}, v.prototype.MoveProxy = function(t, e, i) {
		this.m_tree.MoveProxy(t, e, i) && this.BufferMove(t)
	}, v.prototype.TestOverlap = function(t, e) {
		var i = this.m_tree.GetFatAABB(t),
			n = this.m_tree.GetFatAABB(e);
		return i.TestOverlap(n)
	}, v.prototype.GetUserData = function(t) {
		return this.m_tree.GetUserData(t)
	}, v.prototype.GetFatAABB = function(t) {
		return this.m_tree.GetFatAABB(t)
	}, v.prototype.GetProxyCount = function() {
		return this.m_proxyCount
	}, v.prototype.UpdatePairs = function(t) {
		for (var e, i = this, n = i.m_pairCount = 0, n = 0; n < i.m_moveBuffer.length; ++n) {
			e = i.m_moveBuffer[n];
			var o = i.m_tree.GetFatAABB(e);
			i.m_tree.Query(function(t) {
				if (t == e) return !0;
				i.m_pairCount == i.m_pairBuffer.length && (i.m_pairBuffer[i.m_pairCount] = new b);
				var n = i.m_pairBuffer[i.m_pairCount];
				return n.proxyA = e > t ? t : e, n.proxyB = t >= e ? t : e, ++i.m_pairCount, !0
			}, o)
		}
		for (n = i.m_moveBuffer.length = 0; n < i.m_pairCount;) {
			var o = i.m_pairBuffer[n],
				s = i.m_tree.GetUserData(o.proxyA),
				r = i.m_tree.GetUserData(o.proxyB);
			for (t(s, r), ++n; n < i.m_pairCount && (s = i.m_pairBuffer[n], s.proxyA == o.proxyA && s.proxyB == o.proxyB);)++n
		}
	}, v.prototype.Query = function(t, e) {
		this.m_tree.Query(t, e)
	}, v.prototype.RayCast = function(t, e) {
		this.m_tree.RayCast(t, e)
	}, v.prototype.Validate = function() {}, v.prototype.Rebalance = function(t) {
		void 0 === t && (t = 0), this.m_tree.Rebalance(t)
	}, v.prototype.BufferMove = function(t) {
		this.m_moveBuffer[this.m_moveBuffer.length] = t
	}, v.prototype.UnBufferMove = function(t) {
		t = parseInt(this.m_moveBuffer.indexOf(t)), this.m_moveBuffer.splice(t, 1)
	}, v.prototype.ComparePairs = function() {
		return 0
	}, v.__implements = {}, v.__implements[F] = !0, x.b2DynamicTreeNode = function() {
		this.aabb = new h
	}, x.prototype.IsLeaf = function() {
		return null == this.child1
	}, b.b2DynamicTreePair = function() {}, C.b2Manifold = function() {
		this.m_pointCount = 0
	}, C.prototype.b2Manifold = function() {
		this.m_points = new Vector(n.b2_maxManifoldPoints);
		for (var t = 0; t < n.b2_maxManifoldPoints; t++) this.m_points[t] = new E;
		this.m_localPlaneNormal = new a, this.m_localPoint = new a
	}, C.prototype.Reset = function() {
		for (var t = 0; t < n.b2_maxManifoldPoints; t++)(this.m_points[t] instanceof E ? this.m_points[t] : null).Reset();
		this.m_localPlaneNormal.SetZero(), this.m_localPoint.SetZero(), this.m_pointCount = this.m_type = 0
	}, C.prototype.Set = function(t) {
		this.m_pointCount = t.m_pointCount;
		for (var e = 0; e < n.b2_maxManifoldPoints; e++)(this.m_points[e] instanceof E ? this.m_points[e] : null).Set(t.m_points[e]);
		this.m_localPlaneNormal.SetV(t.m_localPlaneNormal), this.m_localPoint.SetV(t.m_localPoint), this.m_type = t.m_type
	}, C.prototype.Copy = function() {
		var t = new C;
		return t.Set(this), t
	}, Box2D.postDefs.push(function() {
		Box2D.Collision.b2Manifold.e_circles = 1, Box2D.Collision.b2Manifold.e_faceA = 2, Box2D.Collision.b2Manifold.e_faceB = 4
	}), E.b2ManifoldPoint = function() {
		this.m_localPoint = new a, this.m_id = new u
	}, E.prototype.b2ManifoldPoint = function() {
		this.Reset()
	}, E.prototype.Reset = function() {
		this.m_localPoint.SetZero(), this.m_tangentImpulse = this.m_normalImpulse = 0, this.m_id.key = 0
	}, E.prototype.Set = function(t) {
		this.m_localPoint.SetV(t.m_localPoint), this.m_normalImpulse = t.m_normalImpulse, this.m_tangentImpulse = t.m_tangentImpulse, this.m_id.Set(t.m_id)
	}, w.b2Point = function() {
		this.p = new a
	}, w.prototype.Support = function() {
		return this.p
	}, w.prototype.GetFirstVertex = function() {
		return this.p
	}, A.b2RayCastInput = function() {
		this.p1 = new a, this.p2 = new a
	}, A.prototype.b2RayCastInput = function(t, e, i) {
		void 0 === t && (t = null), void 0 === e && (e = null), void 0 === i && (i = 1), t && this.p1.SetV(t), e && this.p2.SetV(e), this.maxFraction = i
	}, D.b2RayCastOutput = function() {
		this.normal = new a
	}, S.b2Segment = function() {
		this.p1 = new a, this.p2 = new a
	}, S.prototype.TestSegment = function(t, e, i, n) {
		void 0 === n && (n = 0);
		var o = i.p1,
			s = i.p2.x - o.x,
			r = i.p2.y - o.y;
		i = this.p2.y - this.p1.y;
		var a = -(this.p2.x - this.p1.x),
			h = 100 * Number.MIN_VALUE,
			l = -(s * i + r * a);
		if (l > h) {
			var p = o.x - this.p1.x,
				c = o.y - this.p1.y,
				o = p * i + c * a;
			if (o >= 0 && n * l >= o && (n = -s * c + r * p, n >= -h * l && l * (1 + h) >= n)) return o /= l, n = Math.sqrt(i * i + a * a), t[0] = o, e.Set(i / n, a / n), !0
		}
		return !1
	}, S.prototype.Extend = function(t) {
		this.ExtendForward(t), this.ExtendBackward(t)
	}, S.prototype.ExtendForward = function(t) {
		var e = this.p2.x - this.p1.x,
			i = this.p2.y - this.p1.y;
		t = Math.min(e > 0 ? (t.upperBound.x - this.p1.x) / e : 0 > e ? (t.lowerBound.x - this.p1.x) / e : Number.POSITIVE_INFINITY, i > 0 ? (t.upperBound.y - this.p1.y) / i : 0 > i ? (t.lowerBound.y - this.p1.y) / i : Number.POSITIVE_INFINITY), this.p2.x = this.p1.x + e * t, this.p2.y = this.p1.y + i * t
	}, S.prototype.ExtendBackward = function(t) {
		var e = -this.p2.x + this.p1.x,
			i = -this.p2.y + this.p1.y;
		t = Math.min(e > 0 ? (t.upperBound.x - this.p2.x) / e : 0 > e ? (t.lowerBound.x - this.p2.x) / e : Number.POSITIVE_INFINITY, i > 0 ? (t.upperBound.y - this.p2.y) / i : 0 > i ? (t.lowerBound.y - this.p2.y) / i : Number.POSITIVE_INFINITY), this.p1.x = this.p2.x + e * t, this.p1.y = this.p2.y + i * t
	}, T.b2SeparationFunction = function() {
		this.m_localPoint = new a, this.m_axis = new a
	}, T.prototype.Initialize = function(t, e, i, s, r) {
		this.m_proxyA = e, this.m_proxyB = s;
		var h = parseInt(t.count);
		n.b2Assert(h > 0 && 3 > h);
		var l, p, c, u, d = u = c = s = e = 0,
			m = 0,
			d = 0;
		1 == h ? (this.m_type = T.e_points, l = this.m_proxyA.GetVertex(t.indexA[0]), p = this.m_proxyB.GetVertex(t.indexB[0]), h = l, t = i.R, e = i.position.x + (t.col1.x * h.x + t.col2.x * h.y), s = i.position.y + (t.col1.y * h.x + t.col2.y * h.y), h = p, t = r.R, c = r.position.x + (t.col1.x * h.x + t.col2.x * h.y), u = r.position.y + (t.col1.y * h.x + t.col2.y * h.y), this.m_axis.x = c - e, this.m_axis.y = u - s, this.m_axis.Normalize()) : (t.indexB[0] == t.indexB[1] ? (this.m_type = T.e_faceA, e = this.m_proxyA.GetVertex(t.indexA[0]), s = this.m_proxyA.GetVertex(t.indexA[1]), p = this.m_proxyB.GetVertex(t.indexB[0]), this.m_localPoint.x = .5 * (e.x + s.x), this.m_localPoint.y = .5 * (e.y + s.y), this.m_axis = o.CrossVF(o.SubtractVV(s, e), 1), this.m_axis.Normalize(), h = this.m_axis, t = i.R, d = t.col1.x * h.x + t.col2.x * h.y, m = t.col1.y * h.x + t.col2.y * h.y, h = this.m_localPoint, t = i.R, e = i.position.x + (t.col1.x * h.x + t.col2.x * h.y), s = i.position.y + (t.col1.y * h.x + t.col2.y * h.y), h = p, t = r.R, c = r.position.x + (t.col1.x * h.x + t.col2.x * h.y), u = r.position.y + (t.col1.y * h.x + t.col2.y * h.y), d = (c - e) * d + (u - s) * m) : t.indexA[0] == t.indexA[0] ? (this.m_type = T.e_faceB, c = this.m_proxyB.GetVertex(t.indexB[0]), u = this.m_proxyB.GetVertex(t.indexB[1]), l = this.m_proxyA.GetVertex(t.indexA[0]), this.m_localPoint.x = .5 * (c.x + u.x), this.m_localPoint.y = .5 * (c.y + u.y), this.m_axis = o.CrossVF(o.SubtractVV(u, c), 1), this.m_axis.Normalize(), h = this.m_axis, t = r.R, d = t.col1.x * h.x + t.col2.x * h.y, m = t.col1.y * h.x + t.col2.y * h.y, h = this.m_localPoint, t = r.R, c = r.position.x + (t.col1.x * h.x + t.col2.x * h.y), u = r.position.y + (t.col1.y * h.x + t.col2.y * h.y), h = l, t = i.R, e = i.position.x + (t.col1.x * h.x + t.col2.x * h.y), s = i.position.y + (t.col1.y * h.x + t.col2.y * h.y), d = (e - c) * d + (s - u) * m) : (e = this.m_proxyA.GetVertex(t.indexA[0]), s = this.m_proxyA.GetVertex(t.indexA[1]), c = this.m_proxyB.GetVertex(t.indexB[0]), u = this.m_proxyB.GetVertex(t.indexB[1]), o.MulX(i, l), l = o.MulMV(i.R, o.SubtractVV(s, e)), o.MulX(r, p), d = o.MulMV(r.R, o.SubtractVV(u, c)), r = l.x * l.x + l.y * l.y, p = d.x * d.x + d.y * d.y, t = o.SubtractVV(d, l), i = l.x * t.x + l.y * t.y, t = d.x * t.x + d.y * t.y, l = l.x * d.x + l.y * d.y, m = r * p - l * l, d = 0, 0 != m && (d = o.Clamp((l * t - i * p) / m, 0, 1)), 0 > (l * d + t) / p && (d = o.Clamp((l - i) / r, 0, 1)), l = new a, l.x = e.x + d * (s.x - e.x), l.y = e.y + d * (s.y - e.y), p = new a, p.x = c.x + d * (u.x - c.x), p.y = c.y + d * (u.y - c.y), 0 == d || 1 == d ? (this.m_type = T.e_faceB, this.m_axis = o.CrossVF(o.SubtractVV(u, c), 1), this.m_axis.Normalize(), this.m_localPoint = p) : (this.m_type = T.e_faceA, this.m_axis = o.CrossVF(o.SubtractVV(s, e), 1), this.m_localPoint = l)), 0 > d && this.m_axis.NegativeSelf())
	}, T.prototype.Evaluate = function(t, e) {
		var i, s, r = 0;
		switch (this.m_type) {
		case T.e_points:
			return i = o.MulTMV(t.R, this.m_axis), s = o.MulTMV(e.R, this.m_axis.GetNegative()), i = this.m_proxyA.GetSupportVertex(i), s = this.m_proxyB.GetSupportVertex(s), i = o.MulX(t, i), s = o.MulX(e, s), r = (s.x - i.x) * this.m_axis.x + (s.y - i.y) * this.m_axis.y;
		case T.e_faceA:
			return r = o.MulMV(t.R, this.m_axis), i = o.MulX(t, this.m_localPoint), s = o.MulTMV(e.R, r.GetNegative()), s = this.m_proxyB.GetSupportVertex(s), s = o.MulX(e, s), r = (s.x - i.x) * r.x + (s.y - i.y) * r.y;
		case T.e_faceB:
			return r = o.MulMV(e.R, this.m_axis), s = o.MulX(e, this.m_localPoint), i = o.MulTMV(t.R, r.GetNegative()), i = this.m_proxyA.GetSupportVertex(i), i = o.MulX(t, i), r = (i.x - s.x) * r.x + (i.y - s.y) * r.y;
		default:
			return n.b2Assert(!1), 0
		}
	}, Box2D.postDefs.push(function() {
		Box2D.Collision.b2SeparationFunction.e_points = 1, Box2D.Collision.b2SeparationFunction.e_faceA = 2, Box2D.Collision.b2SeparationFunction.e_faceB = 4
	}), L.b2Simplex = function() {
		this.m_v1 = new I, this.m_v2 = new I, this.m_v3 = new I, this.m_vertices = new Vector(3)
	}, L.prototype.b2Simplex = function() {
		this.m_vertices[0] = this.m_v1, this.m_vertices[1] = this.m_v2, this.m_vertices[2] = this.m_v3
	}, L.prototype.ReadCache = function(t, e, i, s, r) {
		n.b2Assert(0 <= t.count && 3 >= t.count);
		var a, h;
		this.m_count = t.count;
		for (var l = this.m_vertices, p = 0; p < this.m_count; p++) {
			var c = l[p];
			c.indexA = t.indexA[p], c.indexB = t.indexB[p], a = e.GetVertex(c.indexA), h = s.GetVertex(c.indexB), c.wA = o.MulX(i, a), c.wB = o.MulX(r, h), c.w = o.SubtractVV(c.wB, c.wA), c.a = 0
		}
		1 < this.m_count && (t = t.metric, a = this.GetMetric(), .5 * t > a || a > 2 * t || a < Number.MIN_VALUE) && (this.m_count = 0), 0 == this.m_count && (c = l[0], c.indexA = 0, c.indexB = 0, a = e.GetVertex(0), h = s.GetVertex(0), c.wA = o.MulX(i, a), c.wB = o.MulX(r, h), c.w = o.SubtractVV(c.wB, c.wA), this.m_count = 1)
	}, L.prototype.WriteCache = function(t) {
		t.metric = this.GetMetric(), t.count = Box2D.parseUInt(this.m_count);
		for (var e = this.m_vertices, i = 0; i < this.m_count; i++) t.indexA[i] = Box2D.parseUInt(e[i].indexA), t.indexB[i] = Box2D.parseUInt(e[i].indexB)
	}, L.prototype.GetSearchDirection = function() {
		switch (this.m_count) {
		case 1:
			return this.m_v1.w.GetNegative();
		case 2:
			var t = o.SubtractVV(this.m_v2.w, this.m_v1.w);
			return 0 < o.CrossVV(t, this.m_v1.w.GetNegative()) ? o.CrossFV(1, t) : o.CrossVF(t, 1);
		default:
			return n.b2Assert(!1), new a
		}
	}, L.prototype.GetClosestPoint = function() {
		switch (this.m_count) {
		case 0:
			return n.b2Assert(!1), new a;
		case 1:
			return this.m_v1.w;
		case 2:
			return new a(this.m_v1.a * this.m_v1.w.x + this.m_v2.a * this.m_v2.w.x, this.m_v1.a * this.m_v1.w.y + this.m_v2.a * this.m_v2.w.y);
		default:
			return n.b2Assert(!1), new a
		}
	}, L.prototype.GetWitnessPoints = function(t, e) {
		switch (this.m_count) {
		case 0:
			n.b2Assert(!1);
			break;
		case 1:
			t.SetV(this.m_v1.wA), e.SetV(this.m_v1.wB);
			break;
		case 2:
			t.x = this.m_v1.a * this.m_v1.wA.x + this.m_v2.a * this.m_v2.wA.x, t.y = this.m_v1.a * this.m_v1.wA.y + this.m_v2.a * this.m_v2.wA.y, e.x = this.m_v1.a * this.m_v1.wB.x + this.m_v2.a * this.m_v2.wB.x, e.y = this.m_v1.a * this.m_v1.wB.y + this.m_v2.a * this.m_v2.wB.y;
			break;
		case 3:
			e.x = t.x = this.m_v1.a * this.m_v1.wA.x + this.m_v2.a * this.m_v2.wA.x + this.m_v3.a * this.m_v3.wA.x, e.y = t.y = this.m_v1.a * this.m_v1.wA.y + this.m_v2.a * this.m_v2.wA.y + this.m_v3.a * this.m_v3.wA.y;
			break;
		default:
			n.b2Assert(!1)
		}
	}, L.prototype.GetMetric = function() {
		switch (this.m_count) {
		case 0:
			return n.b2Assert(!1), 0;
		case 1:
			return 0;
		case 2:
			return o.SubtractVV(this.m_v1.w, this.m_v2.w).Length();
		case 3:
			return o.CrossVV(o.SubtractVV(this.m_v2.w, this.m_v1.w), o.SubtractVV(this.m_v3.w, this.m_v1.w));
		default:
			return n.b2Assert(!1), 0
		}
	}, L.prototype.Solve2 = function() {
		var t = this.m_v1.w,
			e = this.m_v2.w,
			i = o.SubtractVV(e, t),
			t = -(t.x * i.x + t.y * i.y);
		0 >= t ? this.m_count = this.m_v1.a = 1 : (e = e.x * i.x + e.y * i.y, 0 >= e ? (this.m_count = this.m_v2.a = 1, this.m_v1.Set(this.m_v2)) : (i = 1 / (e + t), this.m_v1.a = e * i, this.m_v2.a = t * i, this.m_count = 2))
	}, L.prototype.Solve3 = function() {
		var t = this.m_v1.w,
			e = this.m_v2.w,
			i = this.m_v3.w,
			n = o.SubtractVV(e, t),
			s = o.Dot(t, n),
			r = o.Dot(e, n),
			s = -s,
			a = o.SubtractVV(i, t),
			h = o.Dot(t, a),
			l = o.Dot(i, a),
			h = -h,
			p = o.SubtractVV(i, e),
			c = o.Dot(e, p),
			p = o.Dot(i, p),
			c = -c,
			a = o.CrossVV(n, a),
			n = a * o.CrossVV(e, i),
			i = a * o.CrossVV(i, t),
			t = a * o.CrossVV(t, e);
		0 >= s && 0 >= h ? this.m_count = this.m_v1.a = 1 : r > 0 && s > 0 && 0 >= t ? (l = 1 / (r + s), this.m_v1.a = r * l, this.m_v2.a = s * l, this.m_count = 2) : l > 0 && h > 0 && 0 >= i ? (r = 1 / (l + h), this.m_v1.a = l * r, this.m_v3.a = h * r, this.m_count = 2, this.m_v2.Set(this.m_v3)) : 0 >= r && 0 >= c ? (this.m_count = this.m_v2.a = 1, this.m_v1.Set(this.m_v2)) : 0 >= l && 0 >= p ? (this.m_count = this.m_v3.a = 1, this.m_v1.Set(this.m_v3)) : p > 0 && c > 0 && 0 >= n ? (r = 1 / (p + c), this.m_v2.a = p * r, this.m_v3.a = c * r, this.m_count = 2, this.m_v1.Set(this.m_v3)) : (r = 1 / (n + i + t), this.m_v1.a = n * r, this.m_v2.a = i * r, this.m_v3.a = t * r, this.m_count = 3)
	}, B.b2SimplexCache = function() {
		this.indexA = new Vector_a2j_Number(3), this.indexB = new Vector_a2j_Number(3)
	}, I.b2SimplexVertex = function() {}, I.prototype.Set = function(t) {
		this.wA.SetV(t.wA), this.wB.SetV(t.wB), this.w.SetV(t.w), this.a = t.a, this.indexA = t.indexA, this.indexB = t.indexB
	}, P.b2TimeOfImpact = function() {}, P.TimeOfImpact = function(t) {
		++P.b2_toiCalls;
		var e = t.proxyA,
			i = t.proxyB,
			s = t.sweepA,
			r = t.sweepB;
		n.b2Assert(s.t0 == r.t0), n.b2Assert(1 - s.t0 > Number.MIN_VALUE);
		var a = e.m_radius + i.m_radius;
		t = t.tolerance;
		var h = 0,
			l = 0,
			p = 0;
		for (P.s_cache.count = 0, P.s_distanceInput.useRadii = !1;;) {
			if (s.GetTransform(P.s_xfA, h), r.GetTransform(P.s_xfB, h), P.s_distanceInput.proxyA = e, P.s_distanceInput.proxyB = i, P.s_distanceInput.transformA = P.s_xfA, P.s_distanceInput.transformB = P.s_xfB, m.Distance(P.s_distanceOutput, P.s_cache, P.s_distanceInput), 0 >= P.s_distanceOutput.distance) {
				h = 1;
				break
			}
			P.s_fcn.Initialize(P.s_cache, e, P.s_xfA, i, P.s_xfB);
			var c = P.s_fcn.Evaluate(P.s_xfA, P.s_xfB);
			if (0 >= c) {
				h = 1;
				break
			}
			if (0 == l && (p = c > a ? o.Max(a - t, .75 * a) : o.Max(c - t, .02 * a)), .5 * t > c - p) {
				if (0 == l) {
					h = 1;
					break
				}
				break
			}
			var u = h,
				d = h,
				_ = 1;
			s.GetTransform(P.s_xfA, _), r.GetTransform(P.s_xfB, _);
			var y = P.s_fcn.Evaluate(P.s_xfA, P.s_xfB);
			if (y >= p) {
				h = 1;
				break
			}
			for (var f = 0;;) {
				var g = 0,
					g = 1 & f ? d + (p - c) * (_ - d) / (y - c) : .5 * (d + _);
				s.GetTransform(P.s_xfA, g), r.GetTransform(P.s_xfB, g);
				var v = P.s_fcn.Evaluate(P.s_xfA, P.s_xfB);
				if (o.Abs(v - p) < .025 * t) {
					u = g;
					break
				}
				if (v > p ? (d = g, c = v) : (_ = g, y = v), ++f, ++P.b2_toiRootIters, 50 == f) break
			}
			if (P.b2_toiMaxRootIters = o.Max(P.b2_toiMaxRootIters, f), u < (1 + 100 * Number.MIN_VALUE) * h) break;
			if (h = u, l++, ++P.b2_toiIters, 1e3 == l) break
		}
		return P.b2_toiMaxIters = o.Max(P.b2_toiMaxIters, l), h
	}, Box2D.postDefs.push(function() {
		Box2D.Collision.b2TimeOfImpact.b2_toiCalls = 0, Box2D.Collision.b2TimeOfImpact.b2_toiIters = 0, Box2D.Collision.b2TimeOfImpact.b2_toiMaxIters = 0, Box2D.Collision.b2TimeOfImpact.b2_toiRootIters = 0, Box2D.Collision.b2TimeOfImpact.b2_toiMaxRootIters = 0, Box2D.Collision.b2TimeOfImpact.s_cache = new B, Box2D.Collision.b2TimeOfImpact.s_distanceInput = new _, Box2D.Collision.b2TimeOfImpact.s_xfA = new r, Box2D.Collision.b2TimeOfImpact.s_xfB = new r, Box2D.Collision.b2TimeOfImpact.s_fcn = new T, Box2D.Collision.b2TimeOfImpact.s_distanceOutput = new y
	}), M.b2TOIInput = function() {
		this.proxyA = new f, this.proxyB = new f, this.sweepA = new s, this.sweepB = new s
	}, O.b2WorldManifold = function() {
		this.m_normal = new a
	}, O.prototype.b2WorldManifold = function() {
		this.m_points = new Vector(n.b2_maxManifoldPoints);
		for (var t = 0; t < n.b2_maxManifoldPoints; t++) this.m_points[t] = new a
	}, O.prototype.Initialize = function(t, e, i, n, o) {
		if (void 0 === i && (i = 0), void 0 === o && (o = 0), 0 != t.m_pointCount) {
			var s, r, a = 0,
				h = 0,
				l = 0,
				p = 0,
				c = 0,
				u = 0;
			switch (s = 0, t.m_type) {
			case C.e_circles:
				r = e.R, s = t.m_localPoint, a = e.position.x + r.col1.x * s.x + r.col2.x * s.y, e = e.position.y + r.col1.y * s.x + r.col2.y * s.y, r = n.R, s = t.m_points[0].m_localPoint, t = n.position.x + r.col1.x * s.x + r.col2.x * s.y, n = n.position.y + r.col1.y * s.x + r.col2.y * s.y, s = t - a, r = n - e, h = s * s + r * r, h > Number.MIN_VALUE * Number.MIN_VALUE ? (h = Math.sqrt(h), this.m_normal.x = s / h, this.m_normal.y = r / h) : (this.m_normal.x = 1, this.m_normal.y = 0), s = e + i * this.m_normal.y, n -= o * this.m_normal.y, this.m_points[0].x = .5 * (a + i * this.m_normal.x + (t - o * this.m_normal.x)), this.m_points[0].y = .5 * (s + n);
				break;
			case C.e_faceA:
				for (r = e.R, s = t.m_localPlaneNormal, h = r.col1.x * s.x + r.col2.x * s.y, l = r.col1.y * s.x + r.col2.y * s.y, r = e.R, s = t.m_localPoint, p = e.position.x + r.col1.x * s.x + r.col2.x * s.y, c = e.position.y + r.col1.y * s.x + r.col2.y * s.y, this.m_normal.x = h, this.m_normal.y = l, a = 0; a < t.m_pointCount; a++) r = n.R, s = t.m_points[a].m_localPoint, u = n.position.x + r.col1.x * s.x + r.col2.x * s.y, s = n.position.y + r.col1.y * s.x + r.col2.y * s.y, this.m_points[a].x = u + .5 * (i - (u - p) * h - (s - c) * l - o) * h, this.m_points[a].y = s + .5 * (i - (u - p) * h - (s - c) * l - o) * l;
				break;
			case C.e_faceB:
				for (r = n.R, s = t.m_localPlaneNormal, h = r.col1.x * s.x + r.col2.x * s.y, l = r.col1.y * s.x + r.col2.y * s.y, r = n.R, s = t.m_localPoint, p = n.position.x + r.col1.x * s.x + r.col2.x * s.y, c = n.position.y + r.col1.y * s.x + r.col2.y * s.y, this.m_normal.x = -h, this.m_normal.y = -l, a = 0; a < t.m_pointCount; a++) r = e.R, s = t.m_points[a].m_localPoint, u = e.position.x + r.col1.x * s.x + r.col2.x * s.y, s = e.position.y + r.col1.y * s.x + r.col2.y * s.y, this.m_points[a].x = u + .5 * (o - (u - p) * h - (s - c) * l - i) * h, this.m_points[a].y = s + .5 * (o - (u - p) * h - (s - c) * l - i) * l
			}
		}
	}, R.ClipVertex = function() {
		this.v = new a, this.id = new u
	}, R.prototype.Set = function(t) {
		this.v.SetV(t.v), this.id.Set(t.id)
	}, N.Features = function() {}, Object.defineProperty(N.prototype, "referenceEdge", {
		enumerable: !1,
		configurable: !0,
		get: function() {
			return this._referenceEdge
		}
	}), Object.defineProperty(N.prototype, "referenceEdge", {
		enumerable: !1,
		configurable: !0,
		set: function(t) {
			void 0 === t && (t = 0), this._referenceEdge = t, this._m_id._key = 4294967040 & this._m_id._key | 255 & this._referenceEdge
		}
	}), Object.defineProperty(N.prototype, "incidentEdge", {
		enumerable: !1,
		configurable: !0,
		get: function() {
			return this._incidentEdge
		}
	}), Object.defineProperty(N.prototype, "incidentEdge", {
		enumerable: !1,
		configurable: !0,
		set: function(t) {
			void 0 === t && (t = 0), this._incidentEdge = t, this._m_id._key = 4294902015 & this._m_id._key | this._incidentEdge << 8 & 65280
		}
	}), Object.defineProperty(N.prototype, "incidentVertex", {
		enumerable: !1,
		configurable: !0,
		get: function() {
			return this._incidentVertex
		}
	}), Object.defineProperty(N.prototype, "incidentVertex", {
		enumerable: !1,
		configurable: !0,
		set: function(t) {
			void 0 === t && (t = 0), this._incidentVertex = t, this._m_id._key = 4278255615 & this._m_id._key | this._incidentVertex << 16 & 16711680
		}
	}), Object.defineProperty(N.prototype, "flip", {
		enumerable: !1,
		configurable: !0,
		get: function() {
			return this._flip
		}
	}), Object.defineProperty(N.prototype, "flip", {
		enumerable: !1,
		configurable: !0,
		set: function(t) {
			void 0 === t && (t = 0), this._flip = t, this._m_id._key = 16777215 & this._m_id._key | this._flip << 24 & 4278190080
		}
	})
}(), function() {
	var t = Box2D.Common.b2Settings,
		e = Box2D.Collision.Shapes.b2CircleShape,
		i = Box2D.Collision.Shapes.b2EdgeChainDef,
		n = Box2D.Collision.Shapes.b2EdgeShape,
		o = Box2D.Collision.Shapes.b2MassData,
		s = Box2D.Collision.Shapes.b2PolygonShape,
		r = Box2D.Collision.Shapes.b2Shape,
		a = Box2D.Common.Math.b2Mat22,
		h = Box2D.Common.Math.b2Math,
		l = Box2D.Common.Math.b2Transform,
		p = Box2D.Common.Math.b2Vec2,
		c = Box2D.Collision.b2Distance,
		u = Box2D.Collision.b2DistanceInput,
		d = Box2D.Collision.b2DistanceOutput,
		m = Box2D.Collision.b2DistanceProxy,
		_ = Box2D.Collision.b2SimplexCache;
	Box2D.inherit(e, Box2D.Collision.Shapes.b2Shape), e.prototype.__super = Box2D.Collision.Shapes.b2Shape.prototype, e.b2CircleShape = function() {
		Box2D.Collision.Shapes.b2Shape.b2Shape.apply(this, arguments), this.m_p = new p
	}, e.prototype.Copy = function() {
		var t = new e;
		return t.Set(this), t
	}, e.prototype.Set = function(t) {
		this.__super.Set.call(this, t), Box2D.is(t, e) && this.m_p.SetV((t instanceof e ? t : null).m_p)
	}, e.prototype.TestPoint = function(t, e) {
		var i = t.R,
			n = t.position.x + (i.col1.x * this.m_p.x + i.col2.x * this.m_p.y),
			i = t.position.y + (i.col1.y * this.m_p.x + i.col2.y * this.m_p.y),
			n = e.x - n,
			i = e.y - i;
		return n * n + i * i <= this.m_radius * this.m_radius
	}, e.prototype.RayCast = function(t, e, i) {
		var n = i.R,
			o = e.p1.x - (i.position.x + (n.col1.x * this.m_p.x + n.col2.x * this.m_p.y));
		i = e.p1.y - (i.position.y + (n.col1.y * this.m_p.x + n.col2.y * this.m_p.y));
		var n = e.p2.x - e.p1.x,
			s = e.p2.y - e.p1.y,
			r = o * n + i * s,
			a = n * n + s * s,
			h = r * r - a * (o * o + i * i - this.m_radius * this.m_radius);
		return 0 > h || a < Number.MIN_VALUE ? !1 : (r = -(r + Math.sqrt(h)), r >= 0 && r <= e.maxFraction * a ? (r /= a, t.fraction = r, t.normal.x = o + r * n, t.normal.y = i + r * s, t.normal.Normalize(), !0) : !1)
	}, e.prototype.ComputeAABB = function(t, e) {
		var i = e.R,
			n = e.position.x + (i.col1.x * this.m_p.x + i.col2.x * this.m_p.y),
			i = e.position.y + (i.col1.y * this.m_p.x + i.col2.y * this.m_p.y);
		t.lowerBound.Set(n - this.m_radius, i - this.m_radius), t.upperBound.Set(n + this.m_radius, i + this.m_radius)
	}, e.prototype.ComputeMass = function(e, i) {
		void 0 === i && (i = 0), e.mass = i * t.b2_pi * this.m_radius * this.m_radius, e.center.SetV(this.m_p), e.I = e.mass * (.5 * this.m_radius * this.m_radius + (this.m_p.x * this.m_p.x + this.m_p.y * this.m_p.y))
	}, e.prototype.ComputeSubmergedArea = function(t, e, i, n) {
		void 0 === e && (e = 0), i = h.MulX(i, this.m_p);
		var o = -(h.Dot(t, i) - e);
		if (o < -this.m_radius + Number.MIN_VALUE) return 0;
		if (o > this.m_radius) return n.SetV(i), Math.PI * this.m_radius * this.m_radius;
		e = this.m_radius * this.m_radius;
		var s = o * o,
			o = e * (Math.asin(o / this.m_radius) + Math.PI / 2) + o * Math.sqrt(e - s);
		return e = -2 / 3 * Math.pow(e - s, 1.5) / o, n.x = i.x + t.x * e, n.y = i.y + t.y * e, o
	}, e.prototype.GetLocalPosition = function() {
		return this.m_p
	}, e.prototype.SetLocalPosition = function(t) {
		this.m_p.SetV(t)
	}, e.prototype.GetRadius = function() {
		return this.m_radius
	}, e.prototype.SetRadius = function(t) {
		void 0 === t && (t = 0), this.m_radius = t
	}, e.prototype.b2CircleShape = function(t) {
		void 0 === t && (t = 0), this.__super.b2Shape.call(this), this.m_type = r.e_circleShape, this.m_radius = t
	}, i.b2EdgeChainDef = function() {}, i.prototype.b2EdgeChainDef = function() {
		this.vertexCount = 0, this.isALoop = !0, this.vertices = []
	}, Box2D.inherit(n, Box2D.Collision.Shapes.b2Shape), n.prototype.__super = Box2D.Collision.Shapes.b2Shape.prototype, n.b2EdgeShape = function() {
		Box2D.Collision.Shapes.b2Shape.b2Shape.apply(this, arguments), this.s_supportVec = new p, this.m_v1 = new p, this.m_v2 = new p, this.m_coreV1 = new p, this.m_coreV2 = new p, this.m_normal = new p, this.m_direction = new p, this.m_cornerDir1 = new p, this.m_cornerDir2 = new p
	}, n.prototype.TestPoint = function() {
		return !1
	}, n.prototype.RayCast = function(t, e, i) {
		var n, o = e.p2.x - e.p1.x,
			s = e.p2.y - e.p1.y;
		n = i.R;
		var r = i.position.x + (n.col1.x * this.m_v1.x + n.col2.x * this.m_v1.y),
			a = i.position.y + (n.col1.y * this.m_v1.x + n.col2.y * this.m_v1.y),
			h = i.position.y + (n.col1.y * this.m_v2.x + n.col2.y * this.m_v2.y) - a;
		i = -(i.position.x + (n.col1.x * this.m_v2.x + n.col2.x * this.m_v2.y) - r), n = 100 * Number.MIN_VALUE;
		var l = -(o * h + s * i);
		if (l > n) {
			var r = e.p1.x - r,
				p = e.p1.y - a,
				a = r * h + p * i;
			if (a >= 0 && a <= e.maxFraction * l && (e = -o * p + s * r, e >= -n * l && l * (1 + n) >= e)) return t.fraction = a / l, e = Math.sqrt(h * h + i * i), t.normal.x = h / e, t.normal.y = i / e, !0
		}
		return !1
	}, n.prototype.ComputeAABB = function(t, e) {
		var i = e.R,
			n = e.position.x + (i.col1.x * this.m_v1.x + i.col2.x * this.m_v1.y),
			o = e.position.y + (i.col1.y * this.m_v1.x + i.col2.y * this.m_v1.y),
			s = e.position.x + (i.col1.x * this.m_v2.x + i.col2.x * this.m_v2.y),
			i = e.position.y + (i.col1.y * this.m_v2.x + i.col2.y * this.m_v2.y);
		s > n ? (t.lowerBound.x = n, t.upperBound.x = s) : (t.lowerBound.x = s, t.upperBound.x = n), i > o ? (t.lowerBound.y = o, t.upperBound.y = i) : (t.lowerBound.y = i, t.upperBound.y = o)
	}, n.prototype.ComputeMass = function(t) {
		t.mass = 0, t.center.SetV(this.m_v1), t.I = 0
	}, n.prototype.ComputeSubmergedArea = function(t, e, i, n) {
		void 0 === e && (e = 0);
		var o = new p(t.x * e, t.y * e),
			s = h.MulX(i, this.m_v1);
		i = h.MulX(i, this.m_v2);
		var r = h.Dot(t, s) - e;
		if (t = h.Dot(t, i) - e, r > 0) {
			if (t > 0) return 0;
			s.x = -t / (r - t) * s.x + r / (r - t) * i.x, s.y = -t / (r - t) * s.y + r / (r - t) * i.y
		} else t > 0 && (i.x = -t / (r - t) * s.x + r / (r - t) * i.x, i.y = -t / (r - t) * s.y + r / (r - t) * i.y);
		return n.x = (o.x + s.x + i.x) / 3, n.y = (o.y + s.y + i.y) / 3, .5 * ((s.x - o.x) * (i.y - o.y) - (s.y - o.y) * (i.x - o.x))
	}, n.prototype.GetLength = function() {
		return this.m_length
	}, n.prototype.GetVertex1 = function() {
		return this.m_v1
	}, n.prototype.GetVertex2 = function() {
		return this.m_v2
	}, n.prototype.GetCoreVertex1 = function() {
		return this.m_coreV1
	}, n.prototype.GetCoreVertex2 = function() {
		return this.m_coreV2
	}, n.prototype.GetNormalVector = function() {
		return this.m_normal
	}, n.prototype.GetDirectionVector = function() {
		return this.m_direction
	}, n.prototype.GetCorner1Vector = function() {
		return this.m_cornerDir1
	}, n.prototype.GetCorner2Vector = function() {
		return this.m_cornerDir2
	}, n.prototype.Corner1IsConvex = function() {
		return this.m_cornerConvex1
	}, n.prototype.Corner2IsConvex = function() {
		return this.m_cornerConvex2
	}, n.prototype.GetFirstVertex = function(t) {
		var e = t.R;
		return new p(t.position.x + (e.col1.x * this.m_coreV1.x + e.col2.x * this.m_coreV1.y), t.position.y + (e.col1.y * this.m_coreV1.x + e.col2.y * this.m_coreV1.y))
	}, n.prototype.GetNextEdge = function() {
		return this.m_nextEdge
	}, n.prototype.GetPrevEdge = function() {
		return this.m_prevEdge
	}, n.prototype.Support = function(t, e, i) {
		void 0 === e && (e = 0), void 0 === i && (i = 0);
		var n = t.R,
			o = t.position.x + (n.col1.x * this.m_coreV1.x + n.col2.x * this.m_coreV1.y),
			s = t.position.y + (n.col1.y * this.m_coreV1.x + n.col2.y * this.m_coreV1.y),
			r = t.position.x + (n.col1.x * this.m_coreV2.x + n.col2.x * this.m_coreV2.y);
		return t = t.position.y + (n.col1.y * this.m_coreV2.x + n.col2.y * this.m_coreV2.y), o * e + s * i > r * e + t * i ? (this.s_supportVec.x = o, this.s_supportVec.y = s) : (this.s_supportVec.x = r, this.s_supportVec.y = t), this.s_supportVec
	}, n.prototype.b2EdgeShape = function(e, i) {
		this.__super.b2Shape.call(this), this.m_type = r.e_edgeShape, this.m_nextEdge = this.m_prevEdge = null, this.m_v1 = e, this.m_v2 = i, this.m_direction.Set(this.m_v2.x - this.m_v1.x, this.m_v2.y - this.m_v1.y), this.m_length = this.m_direction.Normalize(), this.m_normal.Set(this.m_direction.y, -this.m_direction.x), this.m_coreV1.Set(-t.b2_toiSlop * (this.m_normal.x - this.m_direction.x) + this.m_v1.x, -t.b2_toiSlop * (this.m_normal.y - this.m_direction.y) + this.m_v1.y), this.m_coreV2.Set(-t.b2_toiSlop * (this.m_normal.x + this.m_direction.x) + this.m_v2.x, -t.b2_toiSlop * (this.m_normal.y + this.m_direction.y) + this.m_v2.y), this.m_cornerDir1 = this.m_normal, this.m_cornerDir2.Set(-this.m_normal.x, -this.m_normal.y)
	}, n.prototype.SetPrevEdge = function(t, e, i, n) {
		this.m_prevEdge = t, this.m_coreV1 = e, this.m_cornerDir1 = i, this.m_cornerConvex1 = n
	}, n.prototype.SetNextEdge = function(t, e, i, n) {
		this.m_nextEdge = t, this.m_coreV2 = e, this.m_cornerDir2 = i, this.m_cornerConvex2 = n
	}, o.b2MassData = function() {
		this.mass = 0, this.center = new p(0, 0), this.I = 0
	}, Box2D.inherit(s, Box2D.Collision.Shapes.b2Shape), s.prototype.__super = Box2D.Collision.Shapes.b2Shape.prototype, s.b2PolygonShape = function() {
		Box2D.Collision.Shapes.b2Shape.b2Shape.apply(this, arguments)
	}, s.prototype.Copy = function() {
		var t = new s;
		return t.Set(this), t
	}, s.prototype.Set = function(t) {
		if (this.__super.Set.call(this, t), Box2D.is(t, s)) {
			t = t instanceof s ? t : null, this.m_centroid.SetV(t.m_centroid), this.m_vertexCount = t.m_vertexCount, this.Reserve(this.m_vertexCount);
			for (var e = 0; e < this.m_vertexCount; e++) this.m_vertices[e].SetV(t.m_vertices[e]), this.m_normals[e].SetV(t.m_normals[e])
		}
	}, s.prototype.SetAsArray = function(t, e) {
		void 0 === e && (e = 0);
		for (var i, n = new Vector, o = 0, o = 0; o < t.length; ++o) i = t[o], n.push(i);
		this.SetAsVector(n, e)
	}, s.AsArray = function(t, e) {
		void 0 === e && (e = 0);
		var i = new s;
		return i.SetAsArray(t, e), i
	}, s.prototype.SetAsVector = function(e, i) {
		void 0 === i && (i = 0), 0 == i && (i = e.length), t.b2Assert(i >= 2), this.m_vertexCount = i, this.Reserve(i);
		for (var n = 0, n = 0; n < this.m_vertexCount; n++) this.m_vertices[n].SetV(e[n]);
		for (n = 0; n < this.m_vertexCount; ++n) {
			var o = parseInt(n),
				r = parseInt(n + 1 < this.m_vertexCount ? n + 1 : 0),
				o = h.SubtractVV(this.m_vertices[r], this.m_vertices[o]);
			t.b2Assert(o.LengthSquared() > Number.MIN_VALUE), this.m_normals[n].SetV(h.CrossVF(o, 1)), this.m_normals[n].Normalize()
		}
		this.m_centroid = s.ComputeCentroid(this.m_vertices, this.m_vertexCount)
	}, s.AsVector = function(t, e) {
		void 0 === e && (e = 0);
		var i = new s;
		return i.SetAsVector(t, e), i
	}, s.prototype.SetAsBox = function(t, e) {
		void 0 === t && (t = 0), void 0 === e && (e = 0), this.m_vertexCount = 4, this.Reserve(4), this.m_vertices[0].Set(-t, -e), this.m_vertices[1].Set(t, -e), this.m_vertices[2].Set(t, e), this.m_vertices[3].Set(-t, e), this.m_normals[0].Set(0, -1), this.m_normals[1].Set(1, 0), this.m_normals[2].Set(0, 1), this.m_normals[3].Set(-1, 0), this.m_centroid.SetZero()
	}, s.AsBox = function(t, e) {
		void 0 === t && (t = 0), void 0 === e && (e = 0);
		var i = new s;
		return i.SetAsBox(t, e), i
	}, s.prototype.SetAsOrientedBox = function(t, e, i, n) {
		for (void 0 === t && (t = 0), void 0 === e && (e = 0), void 0 === i && (i = null), void 0 === n && (n = 0), this.m_vertexCount = 4, this.Reserve(4), this.m_vertices[0].Set(-t, -e), this.m_vertices[1].Set(t, -e), this.m_vertices[2].Set(t, e), this.m_vertices[3].Set(-t, e), this.m_normals[0].Set(0, -1), this.m_normals[1].Set(1, 0), this.m_normals[2].Set(0, 1), this.m_normals[3].Set(-1, 0), this.m_centroid = i, t = new l, t.position = i, t.R.Set(n), i = 0; i < this.m_vertexCount; ++i) this.m_vertices[i] = h.MulX(t, this.m_vertices[i]), this.m_normals[i] = h.MulMV(t.R, this.m_normals[i])
	}, s.AsOrientedBox = function(t, e, i, n) {
		void 0 === t && (t = 0), void 0 === e && (e = 0), void 0 === i && (i = null), void 0 === n && (n = 0);
		var o = new s;
		return o.SetAsOrientedBox(t, e, i, n), o
	}, s.prototype.SetAsEdge = function(t, e) {
		this.m_vertexCount = 2, this.Reserve(2), this.m_vertices[0].SetV(t), this.m_vertices[1].SetV(e), this.m_centroid.x = .5 * (t.x + e.x), this.m_centroid.y = .5 * (t.y + e.y), this.m_normals[0] = h.CrossVF(h.SubtractVV(e, t), 1), this.m_normals[0].Normalize(), this.m_normals[1].x = -this.m_normals[0].x, this.m_normals[1].y = -this.m_normals[0].y
	}, s.AsEdge = function(t, e) {
		var i = new s;
		return i.SetAsEdge(t, e), i
	}, s.prototype.TestPoint = function(t, e) {
		var i;
		i = t.R;
		for (var n = e.x - t.position.x, o = e.y - t.position.y, s = n * i.col1.x + o * i.col1.y, r = n * i.col2.x + o * i.col2.y, a = 0; a < this.m_vertexCount; ++a) if (i = this.m_vertices[a], n = s - i.x, o = r - i.y, i = this.m_normals[a], 0 < i.x * n + i.y * o) return !1;
		return !0
	}, s.prototype.RayCast = function(t, e, i) {
		var n, o, s = 0,
			r = e.maxFraction,
			a = 0,
			h = 0,
			a = e.p1.x - i.position.x,
			h = e.p1.y - i.position.y;
		n = i.R;
		var l = a * n.col1.x + h * n.col1.y,
			p = a * n.col2.x + h * n.col2.y,
			a = e.p2.x - i.position.x,
			h = e.p2.y - i.position.y;
		n = i.R, e = a * n.col1.x + h * n.col1.y - l, n = a * n.col2.x + h * n.col2.y - p;
		for (var c = -1, u = 0; u < this.m_vertexCount; ++u) {
			if (o = this.m_vertices[u], a = o.x - l, h = o.y - p, o = this.m_normals[u], a = o.x * a + o.y * h, h = o.x * e + o.y * n, 0 == h) {
				if (0 > a) return !1
			} else 0 > h && s * h > a ? (s = a / h, c = u) : h > 0 && r * h > a && (r = a / h);
			if (r < s - Number.MIN_VALUE) return !1
		}
		return c >= 0 ? (t.fraction = s, n = i.R, o = this.m_normals[c], t.normal.x = n.col1.x * o.x + n.col2.x * o.y, t.normal.y = n.col1.y * o.x + n.col2.y * o.y, !0) : !1
	}, s.prototype.ComputeAABB = function(t, e) {
		for (var i = e.R, n = this.m_vertices[0], o = e.position.x + (i.col1.x * n.x + i.col2.x * n.y), s = e.position.y + (i.col1.y * n.x + i.col2.y * n.y), r = o, a = s, h = 1; h < this.m_vertexCount; ++h) var n = this.m_vertices[h],
			l = e.position.x + (i.col1.x * n.x + i.col2.x * n.y),
			n = e.position.y + (i.col1.y * n.x + i.col2.y * n.y),
			o = l > o ? o : l,
			s = n > s ? s : n,
			r = r > l ? r : l,
			a = a > n ? a : n;
		t.lowerBound.x = o - this.m_radius, t.lowerBound.y = s - this.m_radius, t.upperBound.x = r + this.m_radius, t.upperBound.y = a + this.m_radius
	}, s.prototype.ComputeMass = function(t, e) {
		if (void 0 === e && (e = 0), 2 == this.m_vertexCount) t.center.x = .5 * (this.m_vertices[0].x + this.m_vertices[1].x), t.center.y = .5 * (this.m_vertices[0].y + this.m_vertices[1].y), t.mass = 0, t.I = 0;
		else {
			for (var i = 0, n = 0, o = 0, s = 0, r = 1 / 3, a = 0; a < this.m_vertexCount; ++a) var h = this.m_vertices[a],
				l = a + 1 < this.m_vertexCount ? this.m_vertices[parseInt(a + 1)] : this.m_vertices[0],
				p = h.x - 0,
				c = h.y - 0,
				u = l.x - 0,
				d = l.y - 0,
				m = p * d - c * u,
				_ = .5 * m,
				o = o + _,
				i = i + _ * r * (0 + h.x + l.x),
				n = n + _ * r * (0 + h.y + l.y),
				h = p,
				s = s + m * (r * (.25 * (h * h + u * h + u * u) + (0 * h + 0 * u)) + 0 + (r * (.25 * (c * c + d * c + d * d) + (0 * c + 0 * d)) + 0));
			t.mass = e * o, t.center.Set(i * (1 / o), n * (1 / o)), t.I = e * s
		}
	}, s.prototype.ComputeSubmergedArea = function(t, e, i, n) {
		void 0 === e && (e = 0);
		var s = h.MulTMV(i.R, t),
			r = e - h.Dot(t, i.position),
			a = new Vector_a2j_Number,
			l = 0,
			c = -1;
		e = -1;
		var u = !1;
		for (t = t = 0; t < this.m_vertexCount; ++t) {
			a[t] = h.Dot(s, this.m_vertices[t]) - r;
			var d = a[t] < -Number.MIN_VALUE;
			t > 0 && (d ? u || (c = t - 1, l++) : u && (e = t - 1, l++)), u = d
		}
		switch (l) {
		case 0:
			return u ? (t = new o, this.ComputeMass(t, 1), n.SetV(h.MulX(i, t.center)), t.mass) : 0;
		case 1:
			-1 == c ? c = this.m_vertexCount - 1 : e = this.m_vertexCount - 1
		}
		for (t = parseInt((c + 1) % this.m_vertexCount), s = parseInt((e + 1) % this.m_vertexCount), r = (0 - a[c]) / (a[t] - a[c]), a = (0 - a[e]) / (a[s] - a[e]), c = new p(this.m_vertices[c].x * (1 - r) + this.m_vertices[t].x * r, this.m_vertices[c].y * (1 - r) + this.m_vertices[t].y * r), e = new p(this.m_vertices[e].x * (1 - a) + this.m_vertices[s].x * a, this.m_vertices[e].y * (1 - a) + this.m_vertices[s].y * a), a = 0, r = new p, l = this.m_vertices[t]; t != s;) t = (t + 1) % this.m_vertexCount, u = t == s ? e : this.m_vertices[t], d = .5 * ((l.x - c.x) * (u.y - c.y) - (l.y - c.y) * (u.x - c.x)), a += d, r.x += d * (c.x + l.x + u.x) / 3, r.y += d * (c.y + l.y + u.y) / 3, l = u;
		return r.Multiply(1 / a), n.SetV(h.MulX(i, r)), a
	}, s.prototype.GetVertexCount = function() {
		return this.m_vertexCount
	}, s.prototype.GetVertices = function() {
		return this.m_vertices
	}, s.prototype.GetNormals = function() {
		return this.m_normals
	}, s.prototype.GetSupport = function(t) {
		for (var e = 0, i = this.m_vertices[0].x * t.x + this.m_vertices[0].y * t.y, n = 1; n < this.m_vertexCount; ++n) {
			var o = this.m_vertices[n].x * t.x + this.m_vertices[n].y * t.y;
			o > i && (e = n, i = o)
		}
		return e
	}, s.prototype.GetSupportVertex = function(t) {
		for (var e = 0, i = this.m_vertices[0].x * t.x + this.m_vertices[0].y * t.y, n = 1; n < this.m_vertexCount; ++n) {
			var o = this.m_vertices[n].x * t.x + this.m_vertices[n].y * t.y;
			o > i && (e = n, i = o)
		}
		return this.m_vertices[e]
	}, s.prototype.Validate = function() {
		return !1
	}, s.prototype.b2PolygonShape = function() {
		this.__super.b2Shape.call(this), this.m_type = r.e_polygonShape, this.m_centroid = new p, this.m_vertices = new Vector, this.m_normals = new Vector
	}, s.prototype.Reserve = function(t) {
		void 0 === t && (t = 0);
		for (var e = parseInt(this.m_vertices.length); t > e; e++) this.m_vertices[e] = new p, this.m_normals[e] = new p
	}, s.ComputeCentroid = function(t, e) {
		void 0 === e && (e = 0);
		for (var i = new p, n = 0, o = 1 / 3, s = 0; e > s; ++s) {
			var r = t[s],
				a = e > s + 1 ? t[parseInt(s + 1)] : t[0],
				h = .5 * ((r.x - 0) * (a.y - 0) - (r.y - 0) * (a.x - 0)),
				n = n + h;
			i.x += h * o * (0 + r.x + a.x), i.y += h * o * (0 + r.y + a.y)
		}
		return i.x *= 1 / n, i.y *= 1 / n, i
	}, s.ComputeOBB = function(t, e, i) {
		void 0 === i && (i = 0);
		for (var n = 0, o = new Vector(i + 1), n = 0; i > n; ++n) o[n] = e[n];
		for (o[i] = o[0], e = Number.MAX_VALUE, n = 1; i >= n; ++n) {
			for (var s = o[parseInt(n - 1)], r = o[n].x - s.x, a = o[n].y - s.y, h = Math.sqrt(r * r + a * a), r = r / h, a = a / h, l = -a, p = r, c = h = Number.MAX_VALUE, u = -Number.MAX_VALUE, d = -Number.MAX_VALUE, m = 0; i > m; ++m) {
				var _ = o[m].x - s.x,
					y = o[m].y - s.y,
					f = r * _ + a * y,
					_ = l * _ + p * y;
				h > f && (h = f), c > _ && (c = _), f > u && (u = f), _ > d && (d = _)
			}
			m = (u - h) * (d - c), .95 * e > m && (e = m, t.R.col1.x = r, t.R.col1.y = a, t.R.col2.x = l, t.R.col2.y = p, r = .5 * (h + u), a = .5 * (c + d), l = t.R, t.center.x = s.x + (l.col1.x * r + l.col2.x * a), t.center.y = s.y + (l.col1.y * r + l.col2.y * a), t.extents.x = .5 * (u - h), t.extents.y = .5 * (d - c))
		}
	}, Box2D.postDefs.push(function() {
		Box2D.Collision.Shapes.b2PolygonShape.s_mat = new a
	}), r.b2Shape = function() {}, r.prototype.Copy = function() {
		return null
	}, r.prototype.Set = function(t) {
		this.m_radius = t.m_radius
	}, r.prototype.GetType = function() {
		return this.m_type
	}, r.prototype.TestPoint = function() {
		return !1
	}, r.prototype.RayCast = function() {
		return !1
	}, r.prototype.ComputeAABB = function() {}, r.prototype.ComputeMass = function() {}, r.prototype.ComputeSubmergedArea = function() {
		return 0
	}, r.TestOverlap = function(t, e, i, n) {
		var o = new u;
		return o.proxyA = new m, o.proxyA.Set(t), o.proxyB = new m, o.proxyB.Set(i), o.transformA = e, o.transformB = n, o.useRadii = !0, t = new _, t.count = 0, e = new d, c.Distance(e, t, o), e.distance < 10 * Number.MIN_VALUE
	}, r.prototype.b2Shape = function() {
		this.m_type = r.e_unknownShape, this.m_radius = t.b2_linearSlop
	}, Box2D.postDefs.push(function() {
		Box2D.Collision.Shapes.b2Shape.e_unknownShape = -1, Box2D.Collision.Shapes.b2Shape.e_circleShape = 0, Box2D.Collision.Shapes.b2Shape.e_polygonShape = 1, Box2D.Collision.Shapes.b2Shape.e_edgeShape = 2, Box2D.Collision.Shapes.b2Shape.e_shapeTypeCount = 3, Box2D.Collision.Shapes.b2Shape.e_hitCollide = 1, Box2D.Collision.Shapes.b2Shape.e_missCollide = 0, Box2D.Collision.Shapes.b2Shape.e_startsInsideCollide = -1
	})
}(), function() {
	var t = Box2D.Common.b2Color,
		e = Box2D.Common.b2Settings,
		i = Box2D.Common.Math.b2Math;
	t.b2Color = function() {
		this._b = this._g = this._r = 0
	}, t.prototype.b2Color = function(t, e, n) {
		void 0 === t && (t = 0), void 0 === e && (e = 0), void 0 === n && (n = 0), this._r = Box2D.parseUInt(255 * i.Clamp(t, 0, 1)), this._g = Box2D.parseUInt(255 * i.Clamp(e, 0, 1)), this._b = Box2D.parseUInt(255 * i.Clamp(n, 0, 1))
	}, t.prototype.Set = function(t, e, n) {
		void 0 === t && (t = 0), void 0 === e && (e = 0), void 0 === n && (n = 0), this._r = Box2D.parseUInt(255 * i.Clamp(t, 0, 1)), this._g = Box2D.parseUInt(255 * i.Clamp(e, 0, 1)), this._b = Box2D.parseUInt(255 * i.Clamp(n, 0, 1))
	}, Object.defineProperty(t.prototype, "r", {
		enumerable: !1,
		configurable: !0,
		set: function(t) {
			void 0 === t && (t = 0), this._r = Box2D.parseUInt(255 * i.Clamp(t, 0, 1))
		}
	}), Object.defineProperty(t.prototype, "g", {
		enumerable: !1,
		configurable: !0,
		set: function(t) {
			void 0 === t && (t = 0), this._g = Box2D.parseUInt(255 * i.Clamp(t, 0, 1))
		}
	}), Object.defineProperty(t.prototype, "b", {
		enumerable: !1,
		configurable: !0,
		set: function(t) {
			void 0 === t && (t = 0), this._b = Box2D.parseUInt(255 * i.Clamp(t, 0, 1))
		}
	}), Object.defineProperty(t.prototype, "color", {
		enumerable: !1,
		configurable: !0,
		get: function() {
			return this._r << 16 | this._g << 8 | this._b
		}
	}), e.b2Settings = function() {}, e.b2MixFriction = function(t, e) {
		return void 0 === t && (t = 0), void 0 === e && (e = 0), Math.sqrt(t * e)
	}, e.b2MixRestitution = function(t, e) {
		return void 0 === t && (t = 0), void 0 === e && (e = 0), t > e ? t : e
	}, e.b2Assert = function(t) {
		if (!t) throw "Assertion Failed"
	}, Box2D.postDefs.push(function() {
		Box2D.Common.b2Settings.VERSION = "2.1alpha", Box2D.Common.b2Settings.USHRT_MAX = 65535, Box2D.Common.b2Settings.b2_pi = Math.PI, Box2D.Common.b2Settings.b2_maxManifoldPoints = 2, Box2D.Common.b2Settings.b2_aabbExtension = .1, Box2D.Common.b2Settings.b2_aabbMultiplier = 2, Box2D.Common.b2Settings.b2_polygonRadius = 2 * e.b2_linearSlop, Box2D.Common.b2Settings.b2_linearSlop = .005, Box2D.Common.b2Settings.b2_angularSlop = 2 / 180 * e.b2_pi, Box2D.Common.b2Settings.b2_toiSlop = 8 * e.b2_linearSlop, Box2D.Common.b2Settings.b2_maxTOIContactsPerIsland = 32, Box2D.Common.b2Settings.b2_maxTOIJointsPerIsland = 32, Box2D.Common.b2Settings.b2_velocityThreshold = 1, Box2D.Common.b2Settings.b2_maxLinearCorrection = .2, Box2D.Common.b2Settings.b2_maxAngularCorrection = 8 / 180 * e.b2_pi, Box2D.Common.b2Settings.b2_maxTranslation = 2, Box2D.Common.b2Settings.b2_maxTranslationSquared = e.b2_maxTranslation * e.b2_maxTranslation, Box2D.Common.b2Settings.b2_maxRotation = .5 * e.b2_pi, Box2D.Common.b2Settings.b2_maxRotationSquared = e.b2_maxRotation * e.b2_maxRotation, Box2D.Common.b2Settings.b2_contactBaumgarte = .2, Box2D.Common.b2Settings.b2_timeToSleep = .5, Box2D.Common.b2Settings.b2_linearSleepTolerance = .01, Box2D.Common.b2Settings.b2_angularSleepTolerance = 2 / 180 * e.b2_pi
	})
}(), function() {
	var t = Box2D.Common.Math.b2Mat22,
		e = Box2D.Common.Math.b2Mat33,
		i = Box2D.Common.Math.b2Math,
		n = Box2D.Common.Math.b2Sweep,
		o = Box2D.Common.Math.b2Transform,
		s = Box2D.Common.Math.b2Vec2,
		r = Box2D.Common.Math.b2Vec3;
	t.b2Mat22 = function() {
		this.col1 = new s, this.col2 = new s
	}, t.prototype.b2Mat22 = function() {
		this.SetIdentity()
	}, t.FromAngle = function(e) {
		void 0 === e && (e = 0);
		var i = new t;
		return i.Set(e), i
	}, t.FromVV = function(e, i) {
		var n = new t;
		return n.SetVV(e, i), n
	}, t.prototype.Set = function(t) {
		void 0 === t && (t = 0);
		var e = Math.cos(t);
		t = Math.sin(t), this.col1.x = e, this.col2.x = -t, this.col1.y = t, this.col2.y = e
	}, t.prototype.SetVV = function(t, e) {
		this.col1.SetV(t), this.col2.SetV(e)
	}, t.prototype.Copy = function() {
		var e = new t;
		return e.SetM(this), e
	}, t.prototype.SetM = function(t) {
		this.col1.SetV(t.col1), this.col2.SetV(t.col2)
	}, t.prototype.AddM = function(t) {
		this.col1.x += t.col1.x, this.col1.y += t.col1.y, this.col2.x += t.col2.x, this.col2.y += t.col2.y
	}, t.prototype.SetIdentity = function() {
		this.col1.x = 1, this.col2.x = 0, this.col1.y = 0, this.col2.y = 1
	}, t.prototype.SetZero = function() {
		this.col1.x = 0, this.col2.x = 0, this.col1.y = 0, this.col2.y = 0
	}, t.prototype.GetAngle = function() {
		return Math.atan2(this.col1.y, this.col1.x)
	}, t.prototype.GetInverse = function(t) {
		var e = this.col1.x,
			i = this.col2.x,
			n = this.col1.y,
			o = this.col2.y,
			s = e * o - i * n;
		return 0 != s && (s = 1 / s), t.col1.x = s * o, t.col2.x = -s * i, t.col1.y = -s * n, t.col2.y = s * e, t
	}, t.prototype.Solve = function(t, e, i) {
		void 0 === e && (e = 0), void 0 === i && (i = 0);
		var n = this.col1.x,
			o = this.col2.x,
			s = this.col1.y,
			r = this.col2.y,
			a = n * r - o * s;
		return 0 != a && (a = 1 / a), t.x = a * (r * e - o * i), t.y = a * (n * i - s * e), t
	}, t.prototype.Abs = function() {
		this.col1.Abs(), this.col2.Abs()
	}, e.b2Mat33 = function() {
		this.col1 = new r, this.col2 = new r, this.col3 = new r
	}, e.prototype.b2Mat33 = function(t, e, i) {
		void 0 === t && (t = null), void 0 === e && (e = null), void 0 === i && (i = null), t || e || i ? (this.col1.SetV(t), this.col2.SetV(e), this.col3.SetV(i)) : (this.col1.SetZero(), this.col2.SetZero(), this.col3.SetZero())
	}, e.prototype.SetVVV = function(t, e, i) {
		this.col1.SetV(t), this.col2.SetV(e), this.col3.SetV(i)
	}, e.prototype.Copy = function() {
		return new e(this.col1, this.col2, this.col3)
	}, e.prototype.SetM = function(t) {
		this.col1.SetV(t.col1), this.col2.SetV(t.col2), this.col3.SetV(t.col3)
	}, e.prototype.AddM = function(t) {
		this.col1.x += t.col1.x, this.col1.y += t.col1.y, this.col1.z += t.col1.z, this.col2.x += t.col2.x, this.col2.y += t.col2.y, this.col2.z += t.col2.z, this.col3.x += t.col3.x, this.col3.y += t.col3.y, this.col3.z += t.col3.z
	}, e.prototype.SetIdentity = function() {
		this.col1.x = 1, this.col2.x = 0, this.col3.x = 0, this.col1.y = 0, this.col2.y = 1, this.col3.y = 0, this.col1.z = 0, this.col2.z = 0, this.col3.z = 1
	}, e.prototype.SetZero = function() {
		this.col1.x = 0, this.col2.x = 0, this.col3.x = 0, this.col1.y = 0, this.col2.y = 0, this.col3.y = 0, this.col1.z = 0, this.col2.z = 0, this.col3.z = 0
	}, e.prototype.Solve22 = function(t, e, i) {
		void 0 === e && (e = 0), void 0 === i && (i = 0);
		var n = this.col1.x,
			o = this.col2.x,
			s = this.col1.y,
			r = this.col2.y,
			a = n * r - o * s;
		return 0 != a && (a = 1 / a), t.x = a * (r * e - o * i), t.y = a * (n * i - s * e), t
	}, e.prototype.Solve33 = function(t, e, i, n) {
		void 0 === e && (e = 0), void 0 === i && (i = 0), void 0 === n && (n = 0);
		var o = this.col1.x,
			s = this.col1.y,
			r = this.col1.z,
			a = this.col2.x,
			h = this.col2.y,
			l = this.col2.z,
			p = this.col3.x,
			c = this.col3.y,
			u = this.col3.z,
			d = o * (h * u - l * c) + s * (l * p - a * u) + r * (a * c - h * p);
		return 0 != d && (d = 1 / d), t.x = d * (e * (h * u - l * c) + i * (l * p - a * u) + n * (a * c - h * p)), t.y = d * (o * (i * u - n * c) + s * (n * p - e * u) + r * (e * c - i * p)), t.z = d * (o * (h * n - l * i) + s * (l * e - a * n) + r * (a * i - h * e)), t
	}, i.b2Math = function() {}, i.IsValid = function(t) {
		return void 0 === t && (t = 0), isFinite(t)
	}, i.Dot = function(t, e) {
		return t.x * e.x + t.y * e.y
	}, i.CrossVV = function(t, e) {
		return t.x * e.y - t.y * e.x
	}, i.CrossVF = function(t, e) {
		return void 0 === e && (e = 0), new s(e * t.y, -e * t.x)
	}, i.CrossFV = function(t, e) {
		return void 0 === t && (t = 0), new s(-t * e.y, t * e.x)
	}, i.MulMV = function(t, e) {
		return new s(t.col1.x * e.x + t.col2.x * e.y, t.col1.y * e.x + t.col2.y * e.y)
	}, i.MulTMV = function(t, e) {
		return new s(i.Dot(e, t.col1), i.Dot(e, t.col2))
	}, i.MulX = function(t, e) {
		var n = i.MulMV(t.R, e);
		return n.x += t.position.x, n.y += t.position.y, n
	}, i.MulXT = function(t, e) {
		var n = i.SubtractVV(e, t.position),
			o = n.x * t.R.col1.x + n.y * t.R.col1.y;
		return n.y = n.x * t.R.col2.x + n.y * t.R.col2.y, n.x = o, n
	}, i.AddVV = function(t, e) {
		return new s(t.x + e.x, t.y + e.y)
	}, i.SubtractVV = function(t, e) {
		return new s(t.x - e.x, t.y - e.y)
	}, i.Distance = function(t, e) {
		var i = t.x - e.x,
			n = t.y - e.y;
		return Math.sqrt(i * i + n * n)
	}, i.DistanceSquared = function(t, e) {
		var i = t.x - e.x,
			n = t.y - e.y;
		return i * i + n * n
	}, i.MulFV = function(t, e) {
		return void 0 === t && (t = 0), new s(t * e.x, t * e.y)
	}, i.AddMM = function(e, n) {
		return t.FromVV(i.AddVV(e.col1, n.col1), i.AddVV(e.col2, n.col2))
	}, i.MulMM = function(e, n) {
		return t.FromVV(i.MulMV(e, n.col1), i.MulMV(e, n.col2))
	}, i.MulTMM = function(e, n) {
		var o = new s(i.Dot(e.col1, n.col1), i.Dot(e.col2, n.col1)),
			r = new s(i.Dot(e.col1, n.col2), i.Dot(e.col2, n.col2));
		return t.FromVV(o, r)
	}, i.Abs = function(t) {
		return void 0 === t && (t = 0), t > 0 ? t : -t
	}, i.AbsV = function(t) {
		return new s(i.Abs(t.x), i.Abs(t.y))
	}, i.AbsM = function(e) {
		return t.FromVV(i.AbsV(e.col1), i.AbsV(e.col2))
	}, i.Min = function(t, e) {
		return void 0 === t && (t = 0), void 0 === e && (e = 0), e > t ? t : e
	}, i.MinV = function(t, e) {
		return new s(i.Min(t.x, e.x), i.Min(t.y, e.y))
	}, i.Max = function(t, e) {
		return void 0 === t && (t = 0), void 0 === e && (e = 0), t > e ? t : e
	}, i.MaxV = function(t, e) {
		return new s(i.Max(t.x, e.x), i.Max(t.y, e.y))
	}, i.Clamp = function(t, e, i) {
		return void 0 === t && (t = 0), void 0 === e && (e = 0), void 0 === i && (i = 0), e > t ? e : t > i ? i : t
	}, i.ClampV = function(t, e, n) {
		return i.MaxV(e, i.MinV(t, n))
	}, i.Swap = function(t, e) {
		var i = t[0];
		t[0] = e[0], e[0] = i
	}, i.Random = function() {
		return 2 * Math.random() - 1
	}, i.RandomRange = function(t, e) {
		void 0 === t && (t = 0), void 0 === e && (e = 0);
		var i = Math.random();
		return (e - t) * i + t
	}, i.NextPowerOfTwo = function(t) {
		return void 0 === t && (t = 0), t |= t >> 1 & 2147483647, t |= t >> 2 & 1073741823, t |= t >> 4 & 268435455, t |= t >> 8 & 16777215, (t | t >> 16 & 65535) + 1
	}, i.IsPowerOfTwo = function(t) {
		return void 0 === t && (t = 0), t > 0 && 0 == (t & t - 1)
	}, Box2D.postDefs.push(function() {
		Box2D.Common.Math.b2Math.b2Vec2_zero = new s(0, 0), Box2D.Common.Math.b2Math.b2Mat22_identity = t.FromVV(new s(1, 0), new s(0, 1)), Box2D.Common.Math.b2Math.b2Transform_identity = new o(i.b2Vec2_zero, i.b2Mat22_identity)
	}), n.b2Sweep = function() {
		this.localCenter = new s, this.c0 = new s, this.c = new s
	}, n.prototype.Set = function(t) {
		this.localCenter.SetV(t.localCenter), this.c0.SetV(t.c0), this.c.SetV(t.c), this.a0 = t.a0, this.a = t.a, this.t0 = t.t0
	}, n.prototype.Copy = function() {
		var t = new n;
		return t.localCenter.SetV(this.localCenter), t.c0.SetV(this.c0), t.c.SetV(this.c), t.a0 = this.a0, t.a = this.a, t.t0 = this.t0, t
	}, n.prototype.GetTransform = function(t, e) {
		void 0 === e && (e = 0), t.position.x = (1 - e) * this.c0.x + e * this.c.x, t.position.y = (1 - e) * this.c0.y + e * this.c.y, t.R.Set((1 - e) * this.a0 + e * this.a);
		var i = t.R;
		t.position.x -= i.col1.x * this.localCenter.x + i.col2.x * this.localCenter.y, t.position.y -= i.col1.y * this.localCenter.x + i.col2.y * this.localCenter.y
	}, n.prototype.Advance = function(t) {
		if (void 0 === t && (t = 0), this.t0 < t && 1 - this.t0 > Number.MIN_VALUE) {
			var e = (t - this.t0) / (1 - this.t0);
			this.c0.x = (1 - e) * this.c0.x + e * this.c.x, this.c0.y = (1 - e) * this.c0.y + e * this.c.y, this.a0 = (1 - e) * this.a0 + e * this.a, this.t0 = t
		}
	}, o.b2Transform = function() {
		this.position = new s, this.R = new t
	}, o.prototype.b2Transform = function(t, e) {
		void 0 === t && (t = null), void 0 === e && (e = null), t && (this.position.SetV(t), this.R.SetM(e))
	}, o.prototype.Initialize = function(t, e) {
		this.position.SetV(t), this.R.SetM(e)
	}, o.prototype.SetIdentity = function() {
		this.position.SetZero(), this.R.SetIdentity()
	}, o.prototype.Set = function(t) {
		this.position.SetV(t.position), this.R.SetM(t.R)
	}, o.prototype.GetAngle = function() {
		return Math.atan2(this.R.col1.y, this.R.col1.x)
	}, s.b2Vec2 = function() {}, s.prototype.b2Vec2 = function(t, e) {
		void 0 === t && (t = 0), void 0 === e && (e = 0), this.x = t, this.y = e
	}, s.prototype.SetZero = function() {
		this.y = this.x = 0
	}, s.prototype.Set = function(t, e) {
		void 0 === t && (t = 0), void 0 === e && (e = 0), this.x = t, this.y = e
	}, s.prototype.SetV = function(t) {
		this.x = t.x, this.y = t.y
	}, s.prototype.GetNegative = function() {
		return new s(-this.x, -this.y)
	}, s.prototype.NegativeSelf = function() {
		this.x = -this.x, this.y = -this.y
	}, s.Make = function(t, e) {
		return void 0 === t && (t = 0), void 0 === e && (e = 0), new s(t, e)
	}, s.prototype.Copy = function() {
		return new s(this.x, this.y)
	}, s.prototype.Add = function(t) {
		this.x += t.x, this.y += t.y
	}, s.prototype.Subtract = function(t) {
		this.x -= t.x, this.y -= t.y
	}, s.prototype.Multiply = function(t) {
		void 0 === t && (t = 0), this.x *= t, this.y *= t
	}, s.prototype.MulM = function(t) {
		var e = this.x;
		this.x = t.col1.x * e + t.col2.x * this.y, this.y = t.col1.y * e + t.col2.y * this.y
	}, s.prototype.MulTM = function(t) {
		var e = i.Dot(this, t.col1);
		this.y = i.Dot(this, t.col2), this.x = e
	}, s.prototype.CrossVF = function(t) {
		void 0 === t && (t = 0);
		var e = this.x;
		this.x = t * this.y, this.y = -t * e
	}, s.prototype.CrossFV = function(t) {
		void 0 === t && (t = 0);
		var e = this.x;
		this.x = -t * this.y, this.y = t * e
	}, s.prototype.MinV = function(t) {
		this.x = this.x < t.x ? this.x : t.x, this.y = this.y < t.y ? this.y : t.y
	}, s.prototype.MaxV = function(t) {
		this.x = this.x > t.x ? this.x : t.x, this.y = this.y > t.y ? this.y : t.y
	}, s.prototype.Abs = function() {
		0 > this.x && (this.x = -this.x), 0 > this.y && (this.y = -this.y)
	}, s.prototype.Length = function() {
		return Math.sqrt(this.x * this.x + this.y * this.y)
	}, s.prototype.LengthSquared = function() {
		return this.x * this.x + this.y * this.y
	}, s.prototype.Normalize = function() {
		var t = Math.sqrt(this.x * this.x + this.y * this.y);
		if (t < Number.MIN_VALUE) return 0;
		var e = 1 / t;
		return this.x *= e, this.y *= e, t
	}, s.prototype.IsValid = function() {
		return i.IsValid(this.x) && i.IsValid(this.y)
	}, r.b2Vec3 = function() {}, r.prototype.b2Vec3 = function(t, e, i) {
		void 0 === t && (t = 0), void 0 === e && (e = 0), void 0 === i && (i = 0), this.x = t, this.y = e, this.z = i
	}, r.prototype.SetZero = function() {
		this.x = this.y = this.z = 0
	}, r.prototype.Set = function(t, e, i) {
		void 0 === t && (t = 0), void 0 === e && (e = 0), void 0 === i && (i = 0), this.x = t, this.y = e, this.z = i
	}, r.prototype.SetV = function(t) {
		this.x = t.x, this.y = t.y, this.z = t.z
	}, r.prototype.GetNegative = function() {
		return new r(-this.x, -this.y, -this.z)
	}, r.prototype.NegativeSelf = function() {
		this.x = -this.x, this.y = -this.y, this.z = -this.z
	}, r.prototype.Copy = function() {
		return new r(this.x, this.y, this.z)
	}, r.prototype.Add = function(t) {
		this.x += t.x, this.y += t.y, this.z += t.z
	}, r.prototype.Subtract = function(t) {
		this.x -= t.x, this.y -= t.y, this.z -= t.z
	}, r.prototype.Multiply = function(t) {
		void 0 === t && (t = 0), this.x *= t, this.y *= t, this.z *= t
	}
}(), function() {
	var t = Box2D.Common.Math.b2Math,
		e = Box2D.Common.Math.b2Sweep,
		i = Box2D.Common.Math.b2Transform,
		n = Box2D.Common.Math.b2Vec2,
		o = Box2D.Common.b2Color,
		s = Box2D.Common.b2Settings,
		r = Box2D.Collision.b2AABB,
		a = Box2D.Collision.b2ContactPoint,
		h = Box2D.Collision.b2DynamicTreeBroadPhase,
		l = Box2D.Collision.b2RayCastInput,
		p = Box2D.Collision.b2RayCastOutput,
		c = Box2D.Collision.Shapes.b2CircleShape,
		u = Box2D.Collision.Shapes.b2EdgeShape,
		d = Box2D.Collision.Shapes.b2MassData,
		m = Box2D.Collision.Shapes.b2PolygonShape,
		_ = Box2D.Collision.Shapes.b2Shape,
		y = Box2D.Dynamics.b2Body,
		f = Box2D.Dynamics.b2BodyDef,
		g = Box2D.Dynamics.b2ContactFilter,
		v = Box2D.Dynamics.b2ContactImpulse,
		x = Box2D.Dynamics.b2ContactListener,
		b = Box2D.Dynamics.b2ContactManager,
		C = Box2D.Dynamics.b2DebugDraw,
		E = Box2D.Dynamics.b2DestructionListener,
		w = Box2D.Dynamics.b2FilterData,
		A = Box2D.Dynamics.b2Fixture,
		D = Box2D.Dynamics.b2FixtureDef,
		S = Box2D.Dynamics.b2Island,
		T = Box2D.Dynamics.b2TimeStep,
		L = Box2D.Dynamics.b2World,
		B = Box2D.Dynamics.Contacts.b2Contact,
		I = Box2D.Dynamics.Contacts.b2ContactFactory,
		P = Box2D.Dynamics.Contacts.b2ContactSolver,
		M = Box2D.Dynamics.Joints.b2Joint,
		O = Box2D.Dynamics.Joints.b2PulleyJoint;
	y.b2Body = function() {
		this.m_xf = new i, this.m_sweep = new e, this.m_linearVelocity = new n, this.m_force = new n
	}, y.prototype.connectEdges = function(e, i, n) {
		void 0 === n && (n = 0);
		var o = Math.atan2(i.GetDirectionVector().y, i.GetDirectionVector().x);
		n = Math.tan(.5 * (o - n)), n = t.MulFV(n, i.GetDirectionVector()), n = t.SubtractVV(n, i.GetNormalVector()), n = t.MulFV(s.b2_toiSlop, n), n = t.AddVV(n, i.GetVertex1());
		var r = t.AddVV(e.GetDirectionVector(), i.GetDirectionVector());
		r.Normalize();
		var a = 0 < t.Dot(e.GetDirectionVector(), i.GetNormalVector());
		return e.SetNextEdge(i, n, r, a), i.SetPrevEdge(e, n, r, a), o
	}, y.prototype.CreateFixture = function(t) {
		if (1 == this.m_world.IsLocked()) return null;
		var e = new A;
		return e.Create(this, this.m_xf, t), this.m_flags & y.e_activeFlag && e.CreateProxy(this.m_world.m_contactManager.m_broadPhase, this.m_xf), e.m_next = this.m_fixtureList, this.m_fixtureList = e, ++this.m_fixtureCount, e.m_body = this, 0 < e.m_density && this.ResetMassData(), this.m_world.m_flags |= L.e_newFixture, e
	}, y.prototype.CreateFixture2 = function(t, e) {
		void 0 === e && (e = 0);
		var i = new D;
		return i.shape = t, i.density = e, this.CreateFixture(i)
	}, y.prototype.DestroyFixture = function(t) {
		if (1 != this.m_world.IsLocked()) {
			for (var e = this.m_fixtureList, i = null; null != e;) {
				if (e == t) {
					i ? i.m_next = t.m_next : this.m_fixtureList = t.m_next;
					break
				}
				i = e, e = e.m_next
			}
			for (e = this.m_contactList; e;) {
				var i = e.contact,
					e = e.next,
					n = i.GetFixtureA(),
					o = i.GetFixtureB();
				(t == n || t == o) && this.m_world.m_contactManager.Destroy(i)
			}
			this.m_flags & y.e_activeFlag && t.DestroyProxy(this.m_world.m_contactManager.m_broadPhase), t.Destroy(), t.m_body = null, t.m_next = null, --this.m_fixtureCount, this.ResetMassData()
		}
	}, y.prototype.SetPositionAndAngle = function(t, e) {
		void 0 === e && (e = 0);
		var i;
		if (1 != this.m_world.IsLocked()) {
			this.m_xf.R.Set(e), this.m_xf.position.SetV(t), i = this.m_xf.R;
			var n = this.m_sweep.localCenter;
			for (this.m_sweep.c.x = i.col1.x * n.x + i.col2.x * n.y, this.m_sweep.c.y = i.col1.y * n.x + i.col2.y * n.y, this.m_sweep.c.x += this.m_xf.position.x, this.m_sweep.c.y += this.m_xf.position.y, this.m_sweep.c0.SetV(this.m_sweep.c), this.m_sweep.a0 = this.m_sweep.a = e, n = this.m_world.m_contactManager.m_broadPhase, i = this.m_fixtureList; i; i = i.m_next) i.Synchronize(n, this.m_xf, this.m_xf);
			this.m_world.m_contactManager.FindNewContacts()
		}
	}, y.prototype.SetTransform = function(t) {
		this.SetPositionAndAngle(t.position, t.GetAngle())
	}, y.prototype.GetTransform = function() {
		return this.m_xf
	}, y.prototype.GetPosition = function() {
		return this.m_xf.position
	}, y.prototype.SetPosition = function(t) {
		this.SetPositionAndAngle(t, this.GetAngle())
	}, y.prototype.GetAngle = function() {
		return this.m_sweep.a
	}, y.prototype.SetAngle = function(t) {
		void 0 === t && (t = 0), this.SetPositionAndAngle(this.GetPosition(), t)
	}, y.prototype.GetWorldCenter = function() {
		return this.m_sweep.c
	}, y.prototype.GetLocalCenter = function() {
		return this.m_sweep.localCenter
	}, y.prototype.SetLinearVelocity = function(t) {
		this.m_type != y.b2_staticBody && this.m_linearVelocity.SetV(t)
	}, y.prototype.GetLinearVelocity = function() {
		return this.m_linearVelocity
	}, y.prototype.SetAngularVelocity = function(t) {
		void 0 === t && (t = 0), this.m_type != y.b2_staticBody && (this.m_angularVelocity = t)
	}, y.prototype.GetAngularVelocity = function() {
		return this.m_angularVelocity
	}, y.prototype.GetDefinition = function() {
		var t = new f;
		return t.type = this.GetType(), t.allowSleep = (this.m_flags & y.e_allowSleepFlag) == y.e_allowSleepFlag, t.angle = this.GetAngle(), t.angularDamping = this.m_angularDamping, t.angularVelocity = this.m_angularVelocity, t.fixedRotation = (this.m_flags & y.e_fixedRotationFlag) == y.e_fixedRotationFlag, t.bullet = (this.m_flags & y.e_bulletFlag) == y.e_bulletFlag, t.awake = (this.m_flags & y.e_awakeFlag) == y.e_awakeFlag, t.linearDamping = this.m_linearDamping, t.linearVelocity.SetV(this.GetLinearVelocity()), t.position = this.GetPosition(), t.userData = this.GetUserData(), t
	}, y.prototype.ApplyForce = function(t, e) {
		this.m_type == y.b2_dynamicBody && (0 == this.IsAwake() && this.SetAwake(!0), this.m_force.x += t.x, this.m_force.y += t.y, this.m_torque += (e.x - this.m_sweep.c.x) * t.y - (e.y - this.m_sweep.c.y) * t.x)
	}, y.prototype.ApplyTorque = function(t) {
		void 0 === t && (t = 0), this.m_type == y.b2_dynamicBody && (0 == this.IsAwake() && this.SetAwake(!0), this.m_torque += t)
	}, y.prototype.ApplyImpulse = function(t, e) {
		this.m_type == y.b2_dynamicBody && (0 == this.IsAwake() && this.SetAwake(!0), this.m_linearVelocity.x += this.m_invMass * t.x, this.m_linearVelocity.y += this.m_invMass * t.y, this.m_angularVelocity += this.m_invI * ((e.x - this.m_sweep.c.x) * t.y - (e.y - this.m_sweep.c.y) * t.x))
	}, y.prototype.Split = function(e) {
		for (var i, n = this.GetLinearVelocity().Copy(), o = this.GetAngularVelocity(), s = this.GetWorldCenter(), r = this.m_world.CreateBody(this.GetDefinition()), a = this.m_fixtureList; a;) if (e(a)) {
			var h = a.m_next;
			i ? i.m_next = h : this.m_fixtureList = h, this.m_fixtureCount--, a.m_next = r.m_fixtureList, r.m_fixtureList = a, r.m_fixtureCount++, a.m_body = r, a = h
		} else i = a, a = a.m_next;
		return this.ResetMassData(), r.ResetMassData(), i = this.GetWorldCenter(), e = r.GetWorldCenter(), i = t.AddVV(n, t.CrossFV(o, t.SubtractVV(i, s))), n = t.AddVV(n, t.CrossFV(o, t.SubtractVV(e, s))), this.SetLinearVelocity(i), r.SetLinearVelocity(n), this.SetAngularVelocity(o), r.SetAngularVelocity(o), this.SynchronizeFixtures(), r.SynchronizeFixtures(), r
	}, y.prototype.Merge = function(t) {
		var e;
		for (e = t.m_fixtureList; e;) {
			var i = e.m_next;
			t.m_fixtureCount--, e.m_next = this.m_fixtureList, this.m_fixtureList = e, this.m_fixtureCount++, e.m_body = o, e = i
		}
		n.m_fixtureCount = 0;
		var n = this,
			o = t;
		n.GetWorldCenter(), o.GetWorldCenter(), n.GetLinearVelocity().Copy(), o.GetLinearVelocity().Copy(), n.GetAngularVelocity(), o.GetAngularVelocity(), n.ResetMassData(), this.SynchronizeFixtures()
	}, y.prototype.GetMass = function() {
		return this.m_mass
	}, y.prototype.GetInertia = function() {
		return this.m_I
	}, y.prototype.GetMassData = function(t) {
		t.mass = this.m_mass, t.I = this.m_I, t.center.SetV(this.m_sweep.localCenter)
	}, y.prototype.SetMassData = function(e) {
		if (s.b2Assert(0 == this.m_world.IsLocked()), 1 != this.m_world.IsLocked() && this.m_type == y.b2_dynamicBody) {
			this.m_invI = this.m_I = this.m_invMass = 0, this.m_mass = e.mass, 0 >= this.m_mass && (this.m_mass = 1), this.m_invMass = 1 / this.m_mass, 0 < e.I && 0 == (this.m_flags & y.e_fixedRotationFlag) && (this.m_I = e.I - this.m_mass * (e.center.x * e.center.x + e.center.y * e.center.y), this.m_invI = 1 / this.m_I);
			var i = this.m_sweep.c.Copy();
			this.m_sweep.localCenter.SetV(e.center), this.m_sweep.c0.SetV(t.MulX(this.m_xf, this.m_sweep.localCenter)), this.m_sweep.c.SetV(this.m_sweep.c0), this.m_linearVelocity.x += this.m_angularVelocity * -(this.m_sweep.c.y - i.y), this.m_linearVelocity.y += this.m_angularVelocity * +(this.m_sweep.c.x - i.x)
		}
	}, y.prototype.ResetMassData = function() {
		if (this.m_invI = this.m_I = this.m_invMass = this.m_mass = 0, this.m_sweep.localCenter.SetZero(), this.m_type != y.b2_staticBody && this.m_type != y.b2_kinematicBody) {
			for (var e = n.Make(0, 0), i = this.m_fixtureList; i; i = i.m_next) if (0 != i.m_density) {
				var o = i.GetMassData();
				this.m_mass += o.mass, e.x += o.center.x * o.mass, e.y += o.center.y * o.mass, this.m_I += o.I
			}
			0 < this.m_mass ? (this.m_invMass = 1 / this.m_mass, e.x *= this.m_invMass, e.y *= this.m_invMass) : this.m_invMass = this.m_mass = 1, 0 < this.m_I && 0 == (this.m_flags & y.e_fixedRotationFlag) ? (this.m_I -= this.m_mass * (e.x * e.x + e.y * e.y), this.m_I *= this.m_inertiaScale, s.b2Assert(0 < this.m_I), this.m_invI = 1 / this.m_I) : this.m_invI = this.m_I = 0, i = this.m_sweep.c.Copy(), this.m_sweep.localCenter.SetV(e), this.m_sweep.c0.SetV(t.MulX(this.m_xf, this.m_sweep.localCenter)), this.m_sweep.c.SetV(this.m_sweep.c0), this.m_linearVelocity.x += this.m_angularVelocity * -(this.m_sweep.c.y - i.y), this.m_linearVelocity.y += this.m_angularVelocity * +(this.m_sweep.c.x - i.x)
		}
	}, y.prototype.GetWorldPoint = function(t) {
		var e = this.m_xf.R;
		return t = new n(e.col1.x * t.x + e.col2.x * t.y, e.col1.y * t.x + e.col2.y * t.y), t.x += this.m_xf.position.x, t.y += this.m_xf.position.y, t
	}, y.prototype.GetWorldVector = function(e) {
		return t.MulMV(this.m_xf.R, e)
	}, y.prototype.GetLocalPoint = function(e) {
		return t.MulXT(this.m_xf, e)
	}, y.prototype.GetLocalVector = function(e) {
		return t.MulTMV(this.m_xf.R, e)
	}, y.prototype.GetLinearVelocityFromWorldPoint = function(t) {
		return new n(this.m_linearVelocity.x - this.m_angularVelocity * (t.y - this.m_sweep.c.y), this.m_linearVelocity.y + this.m_angularVelocity * (t.x - this.m_sweep.c.x))
	}, y.prototype.GetLinearVelocityFromLocalPoint = function(t) {
		var e = this.m_xf.R;
		return t = new n(e.col1.x * t.x + e.col2.x * t.y, e.col1.y * t.x + e.col2.y * t.y), t.x += this.m_xf.position.x, t.y += this.m_xf.position.y, new n(this.m_linearVelocity.x - this.m_angularVelocity * (t.y - this.m_sweep.c.y), this.m_linearVelocity.y + this.m_angularVelocity * (t.x - this.m_sweep.c.x))
	}, y.prototype.GetLinearDamping = function() {
		return this.m_linearDamping
	}, y.prototype.SetLinearDamping = function(t) {
		void 0 === t && (t = 0), this.m_linearDamping = t
	}, y.prototype.GetAngularDamping = function() {
		return this.m_angularDamping
	}, y.prototype.SetAngularDamping = function(t) {
		void 0 === t && (t = 0), this.m_angularDamping = t
	}, y.prototype.SetType = function(t) {
		if (void 0 === t && (t = 0), this.m_type != t) for (this.m_type = t, this.ResetMassData(), this.m_type == y.b2_staticBody && (this.m_linearVelocity.SetZero(), this.m_angularVelocity = 0), this.SetAwake(!0), this.m_force.SetZero(), this.m_torque = 0, t = this.m_contactList; t; t = t.next) t.contact.FlagForFiltering()
	}, y.prototype.GetType = function() {
		return this.m_type
	}, y.prototype.SetBullet = function(t) {
		this.m_flags = t ? this.m_flags | y.e_bulletFlag : this.m_flags & ~y.e_bulletFlag
	}, y.prototype.IsBullet = function() {
		return (this.m_flags & y.e_bulletFlag) == y.e_bulletFlag
	}, y.prototype.SetSleepingAllowed = function(t) {
		t ? this.m_flags |= y.e_allowSleepFlag : (this.m_flags &= ~y.e_allowSleepFlag, this.SetAwake(!0))
	}, y.prototype.SetAwake = function(t) {
		t ? (this.m_flags |= y.e_awakeFlag, this.m_sleepTime = 0) : (this.m_flags &= ~y.e_awakeFlag, this.m_sleepTime = 0, this.m_linearVelocity.SetZero(), this.m_angularVelocity = 0, this.m_force.SetZero(), this.m_torque = 0)
	}, y.prototype.IsAwake = function() {
		return (this.m_flags & y.e_awakeFlag) == y.e_awakeFlag
	}, y.prototype.SetFixedRotation = function(t) {
		this.m_flags = t ? this.m_flags | y.e_fixedRotationFlag : this.m_flags & ~y.e_fixedRotationFlag, this.ResetMassData()
	}, y.prototype.IsFixedRotation = function() {
		return (this.m_flags & y.e_fixedRotationFlag) == y.e_fixedRotationFlag
	}, y.prototype.SetActive = function(t) {
		if (t != this.IsActive()) {
			var e;
			if (t) for (this.m_flags |= y.e_activeFlag, t = this.m_world.m_contactManager.m_broadPhase, e = this.m_fixtureList; e; e = e.m_next) e.CreateProxy(t, this.m_xf);
			else {
				for (this.m_flags &= ~y.e_activeFlag, t = this.m_world.m_contactManager.m_broadPhase, e = this.m_fixtureList; e; e = e.m_next) e.DestroyProxy(t);
				for (t = this.m_contactList; t;) e = t, t = t.next, this.m_world.m_contactManager.Destroy(e.contact);
				this.m_contactList = null
			}
		}
	}, y.prototype.IsActive = function() {
		return (this.m_flags & y.e_activeFlag) == y.e_activeFlag
	}, y.prototype.IsSleepingAllowed = function() {
		return (this.m_flags & y.e_allowSleepFlag) == y.e_allowSleepFlag
	}, y.prototype.GetFixtureList = function() {
		return this.m_fixtureList
	}, y.prototype.GetJointList = function() {
		return this.m_jointList
	}, y.prototype.GetControllerList = function() {
		return this.m_controllerList
	}, y.prototype.GetContactList = function() {
		return this.m_contactList
	}, y.prototype.GetNext = function() {
		return this.m_next
	}, y.prototype.GetUserData = function() {
		return this.m_userData
	}, y.prototype.SetUserData = function(t) {
		this.m_userData = t
	}, y.prototype.GetWorld = function() {
		return this.m_world
	}, y.prototype.b2Body = function(t, e) {
		this.m_flags = 0, t.bullet && (this.m_flags |= y.e_bulletFlag), t.fixedRotation && (this.m_flags |= y.e_fixedRotationFlag), t.allowSleep && (this.m_flags |= y.e_allowSleepFlag), t.awake && (this.m_flags |= y.e_awakeFlag), t.active && (this.m_flags |= y.e_activeFlag), this.m_world = e, this.m_xf.position.SetV(t.position), this.m_xf.R.Set(t.angle), this.m_sweep.localCenter.SetZero(), this.m_sweep.t0 = 1, this.m_sweep.a0 = this.m_sweep.a = t.angle;
		var i = this.m_xf.R,
			n = this.m_sweep.localCenter;
		this.m_sweep.c.x = i.col1.x * n.x + i.col2.x * n.y, this.m_sweep.c.y = i.col1.y * n.x + i.col2.y * n.y, this.m_sweep.c.x += this.m_xf.position.x, this.m_sweep.c.y += this.m_xf.position.y, this.m_sweep.c0.SetV(this.m_sweep.c), this.m_contactList = this.m_controllerList = this.m_jointList = null, this.m_controllerCount = 0, this.m_next = this.m_prev = null, this.m_linearVelocity.SetV(t.linearVelocity), this.m_angularVelocity = t.angularVelocity, this.m_linearDamping = t.linearDamping, this.m_angularDamping = t.angularDamping, this.m_force.Set(0, 0), this.m_sleepTime = this.m_torque = 0, this.m_type = t.type, this.m_invMass = this.m_mass = this.m_type == y.b2_dynamicBody ? 1 : 0, this.m_invI = this.m_I = 0, this.m_inertiaScale = t.inertiaScale, this.m_userData = t.userData, this.m_fixtureList = null, this.m_fixtureCount = 0
	}, y.prototype.SynchronizeFixtures = function() {
		var t = y.s_xf1;
		t.R.Set(this.m_sweep.a0);
		var e = t.R,
			i = this.m_sweep.localCenter;
		for (t.position.x = this.m_sweep.c0.x - (e.col1.x * i.x + e.col2.x * i.y), t.position.y = this.m_sweep.c0.y - (e.col1.y * i.x + e.col2.y * i.y), i = this.m_world.m_contactManager.m_broadPhase, e = this.m_fixtureList; e; e = e.m_next) e.Synchronize(i, t, this.m_xf)
	}, y.prototype.SynchronizeTransform = function() {
		this.m_xf.R.Set(this.m_sweep.a);
		var t = this.m_xf.R,
			e = this.m_sweep.localCenter;
		this.m_xf.position.x = this.m_sweep.c.x - (t.col1.x * e.x + t.col2.x * e.y), this.m_xf.position.y = this.m_sweep.c.y - (t.col1.y * e.x + t.col2.y * e.y)
	}, y.prototype.ShouldCollide = function(t) {
		if (this.m_type != y.b2_dynamicBody && t.m_type != y.b2_dynamicBody) return !1;
		for (var e = this.m_jointList; e; e = e.next) if (e.other == t && 0 == e.joint.m_collideConnected) return !1;
		return !0
	}, y.prototype.Advance = function(t) {
		void 0 === t && (t = 0), this.m_sweep.Advance(t), this.m_sweep.c.SetV(this.m_sweep.c0), this.m_sweep.a = this.m_sweep.a0, this.SynchronizeTransform()
	}, Box2D.postDefs.push(function() {
		Box2D.Dynamics.b2Body.s_xf1 = new i, Box2D.Dynamics.b2Body.e_islandFlag = 1, Box2D.Dynamics.b2Body.e_awakeFlag = 2, Box2D.Dynamics.b2Body.e_allowSleepFlag = 4, Box2D.Dynamics.b2Body.e_bulletFlag = 8, Box2D.Dynamics.b2Body.e_fixedRotationFlag = 16, Box2D.Dynamics.b2Body.e_activeFlag = 32, Box2D.Dynamics.b2Body.b2_staticBody = 0, Box2D.Dynamics.b2Body.b2_kinematicBody = 1, Box2D.Dynamics.b2Body.b2_dynamicBody = 2
	}), f.b2BodyDef = function() {
		this.position = new n, this.linearVelocity = new n
	}, f.prototype.b2BodyDef = function() {
		this.userData = null, this.position.Set(0, 0), this.angle = 0, this.linearVelocity.Set(0, 0), this.angularDamping = this.linearDamping = this.angularVelocity = 0, this.awake = this.allowSleep = !0, this.bullet = this.fixedRotation = !1, this.type = y.b2_staticBody, this.active = !0, this.inertiaScale = 1
	}, g.b2ContactFilter = function() {}, g.prototype.ShouldCollide = function(t, e) {
		var i = t.GetFilterData(),
			n = e.GetFilterData();
		return i.groupIndex == n.groupIndex && 0 != i.groupIndex ? 0 < i.groupIndex : 0 != (i.maskBits & n.categoryBits) && 0 != (i.categoryBits & n.maskBits)
	}, g.prototype.RayCollide = function(t, e) {
		return t ? this.ShouldCollide(t instanceof A ? t : null, e) : !0
	}, Box2D.postDefs.push(function() {
		Box2D.Dynamics.b2ContactFilter.b2_defaultFilter = new g
	}), v.b2ContactImpulse = function() {
		this.normalImpulses = new Vector_a2j_Number(s.b2_maxManifoldPoints), this.tangentImpulses = new Vector_a2j_Number(s.b2_maxManifoldPoints)
	}, x.b2ContactListener = function() {}, x.prototype.BeginContact = function() {}, x.prototype.EndContact = function() {}, x.prototype.PreSolve = function() {}, x.prototype.PostSolve = function() {}, Box2D.postDefs.push(function() {
		Box2D.Dynamics.b2ContactListener.b2_defaultListener = new x
	}), b.b2ContactManager = function() {}, b.prototype.b2ContactManager = function() {
		this.m_world = null, this.m_contactCount = 0, this.m_contactFilter = g.b2_defaultFilter, this.m_contactListener = x.b2_defaultListener, this.m_contactFactory = new I(this.m_allocator), this.m_broadPhase = new h
	}, b.prototype.AddPair = function(t, e) {
		var i = t instanceof A ? t : null,
			n = e instanceof A ? e : null,
			o = i.GetBody(),
			s = n.GetBody();
		if (o != s) {
			for (var r = s.GetContactList(); r;) {
				if (r.other == o) {
					var a = r.contact.GetFixtureA(),
						h = r.contact.GetFixtureB();
					if (a == i && h == n || a == n && h == i) return
				}
				r = r.next
			}
			0 != s.ShouldCollide(o) && 0 != this.m_contactFilter.ShouldCollide(i, n) && (r = this.m_contactFactory.Create(i, n), i = r.GetFixtureA(), n = r.GetFixtureB(), o = i.m_body, s = n.m_body, r.m_prev = null, r.m_next = this.m_world.m_contactList, null != this.m_world.m_contactList && (this.m_world.m_contactList.m_prev = r), this.m_world.m_contactList = r, r.m_nodeA.contact = r, r.m_nodeA.other = s, r.m_nodeA.prev = null, r.m_nodeA.next = o.m_contactList, null != o.m_contactList && (o.m_contactList.prev = r.m_nodeA), o.m_contactList = r.m_nodeA, r.m_nodeB.contact = r, r.m_nodeB.other = o, r.m_nodeB.prev = null, r.m_nodeB.next = s.m_contactList, null != s.m_contactList && (s.m_contactList.prev = r.m_nodeB), s.m_contactList = r.m_nodeB, ++this.m_world.m_contactCount)
		}
	}, b.prototype.FindNewContacts = function() {
		this.m_broadPhase.UpdatePairs(Box2D.generateCallback(this, this.AddPair))
	}, b.prototype.Destroy = function(t) {
		var e = t.GetFixtureA(),
			i = t.GetFixtureB(),
			e = e.GetBody(),
			i = i.GetBody();
		t.IsTouching() && this.m_contactListener.EndContact(t), t.m_prev && (t.m_prev.m_next = t.m_next), t.m_next && (t.m_next.m_prev = t.m_prev), t == this.m_world.m_contactList && (this.m_world.m_contactList = t.m_next), t.m_nodeA.prev && (t.m_nodeA.prev.next = t.m_nodeA.next), t.m_nodeA.next && (t.m_nodeA.next.prev = t.m_nodeA.prev), t.m_nodeA == e.m_contactList && (e.m_contactList = t.m_nodeA.next), t.m_nodeB.prev && (t.m_nodeB.prev.next = t.m_nodeB.next), t.m_nodeB.next && (t.m_nodeB.next.prev = t.m_nodeB.prev), t.m_nodeB == i.m_contactList && (i.m_contactList = t.m_nodeB.next), this.m_contactFactory.Destroy(t), --this.m_contactCount
	}, b.prototype.Collide = function() {
		for (var t = this.m_world.m_contactList; t;) {
			var e = t.GetFixtureA(),
				i = t.GetFixtureB(),
				n = e.GetBody(),
				o = i.GetBody();
			if (0 == n.IsAwake() && 0 == o.IsAwake()) t = t.GetNext();
			else {
				if (t.m_flags & B.e_filterFlag) {
					if (0 == o.ShouldCollide(n)) {
						e = t, t = e.GetNext(), this.Destroy(e);
						continue
					}
					if (0 == this.m_contactFilter.ShouldCollide(e, i)) {
						e = t, t = e.GetNext(), this.Destroy(e);
						continue
					}
					t.m_flags &= ~B.e_filterFlag
				}
				0 == this.m_broadPhase.TestOverlap(e.m_proxy, i.m_proxy) ? (e = t, t = e.GetNext(), this.Destroy(e)) : (t.Update(this.m_contactListener), t = t.GetNext())
			}
		}
	}, Box2D.postDefs.push(function() {
		Box2D.Dynamics.b2ContactManager.s_evalCP = new a
	}), C.b2DebugDraw = function() {}, C.prototype.b2DebugDraw = function() {}, C.prototype.SetFlags = function() {}, C.prototype.GetFlags = function() {}, C.prototype.AppendFlags = function() {}, C.prototype.ClearFlags = function() {}, C.prototype.SetSprite = function() {}, C.prototype.GetSprite = function() {}, C.prototype.SetDrawScale = function() {}, C.prototype.GetDrawScale = function() {}, C.prototype.SetLineThickness = function() {}, C.prototype.GetLineThickness = function() {}, C.prototype.SetAlpha = function() {}, C.prototype.GetAlpha = function() {}, C.prototype.SetFillAlpha = function() {}, C.prototype.GetFillAlpha = function() {}, C.prototype.SetXFormScale = function() {}, C.prototype.GetXFormScale = function() {}, C.prototype.DrawPolygon = function() {}, C.prototype.DrawSolidPolygon = function() {}, C.prototype.DrawCircle = function() {}, C.prototype.DrawSolidCircle = function() {}, C.prototype.DrawSegment = function() {}, C.prototype.DrawTransform = function() {}, Box2D.postDefs.push(function() {
		Box2D.Dynamics.b2DebugDraw.e_shapeBit = 1, Box2D.Dynamics.b2DebugDraw.e_jointBit = 2, Box2D.Dynamics.b2DebugDraw.e_aabbBit = 4, Box2D.Dynamics.b2DebugDraw.e_pairBit = 8, Box2D.Dynamics.b2DebugDraw.e_centerOfMassBit = 16, Box2D.Dynamics.b2DebugDraw.e_controllerBit = 32
	}), E.b2DestructionListener = function() {}, E.prototype.SayGoodbyeJoint = function() {}, E.prototype.SayGoodbyeFixture = function() {}, w.b2FilterData = function() {
		this.categoryBits = 1, this.maskBits = 65535, this.groupIndex = 0
	}, w.prototype.Copy = function() {
		var t = new w;
		return t.categoryBits = this.categoryBits, t.maskBits = this.maskBits, t.groupIndex = this.groupIndex, t
	}, A.b2Fixture = function() {
		this.m_filter = new w
	}, A.prototype.GetType = function() {
		return this.m_shape.GetType()
	}, A.prototype.GetShape = function() {
		return this.m_shape
	}, A.prototype.SetSensor = function(t) {
		if (this.m_isSensor != t && (this.m_isSensor = t, null != this.m_body)) for (t = this.m_body.GetContactList(); t;) {
			var e = t.contact,
				i = e.GetFixtureA(),
				n = e.GetFixtureB();
			(i == this || n == this) && e.SetSensor(i.IsSensor() || n.IsSensor()), t = t.next
		}
	}, A.prototype.IsSensor = function() {
		return this.m_isSensor
	}, A.prototype.SetFilterData = function(t) {
		if (this.m_filter = t.Copy(), !this.m_body) for (t = this.m_body.GetContactList(); t;) {
			var e = t.contact,
				i = e.GetFixtureA(),
				n = e.GetFixtureB();
			(i == this || n == this) && e.FlagForFiltering(), t = t.next
		}
	}, A.prototype.GetFilterData = function() {
		return this.m_filter.Copy()
	}, A.prototype.GetBody = function() {
		return this.m_body
	}, A.prototype.GetNext = function() {
		return this.m_next
	}, A.prototype.GetUserData = function() {
		return this.m_userData
	}, A.prototype.SetUserData = function(t) {
		this.m_userData = t
	}, A.prototype.TestPoint = function(t) {
		return this.m_shape.TestPoint(this.m_body.GetTransform(), t)
	}, A.prototype.RayCast = function(t, e) {
		return this.m_shape.RayCast(t, e, this.m_body.GetTransform())
	}, A.prototype.GetMassData = function(t) {
		return void 0 === t && (t = null), null == t && (t = new d), this.m_shape.ComputeMass(t, this.m_density), t
	}, A.prototype.SetDensity = function(t) {
		void 0 === t && (t = 0), this.m_density = t
	}, A.prototype.GetDensity = function() {
		return this.m_density
	}, A.prototype.GetFriction = function() {
		return this.m_friction
	}, A.prototype.SetFriction = function(t) {
		void 0 === t && (t = 0), this.m_friction = t
	}, A.prototype.GetRestitution = function() {
		return this.m_restitution
	}, A.prototype.SetRestitution = function(t) {
		void 0 === t && (t = 0), this.m_restitution = t
	}, A.prototype.GetAABB = function() {
		return this.m_aabb
	}, A.prototype.b2Fixture = function() {
		this.m_aabb = new r, this.m_shape = this.m_next = this.m_body = this.m_userData = null, this.m_restitution = this.m_friction = this.m_density = 0
	}, A.prototype.Create = function(t, e, i) {
		this.m_userData = i.userData, this.m_friction = i.friction, this.m_restitution = i.restitution, this.m_body = t, this.m_next = null, this.m_filter = i.filter.Copy(), this.m_isSensor = i.isSensor, this.m_shape = i.shape.Copy(), this.m_density = i.density
	}, A.prototype.Destroy = function() {
		this.m_shape = null
	}, A.prototype.CreateProxy = function(t, e) {
		this.m_shape.ComputeAABB(this.m_aabb, e), this.m_proxy = t.CreateProxy(this.m_aabb, this)
	}, A.prototype.DestroyProxy = function(t) {
		null != this.m_proxy && (t.DestroyProxy(this.m_proxy), this.m_proxy = null)
	}, A.prototype.Synchronize = function(e, i, n) {
		if (this.m_proxy) {
			var o = new r,
				s = new r;
			this.m_shape.ComputeAABB(o, i), this.m_shape.ComputeAABB(s, n), this.m_aabb.Combine(o, s), i = t.SubtractVV(n.position, i.position), e.MoveProxy(this.m_proxy, this.m_aabb, i)
		}
	}, D.b2FixtureDef = function() {
		this.filter = new w
	}, D.prototype.b2FixtureDef = function() {
		this.userData = this.shape = null, this.friction = .2, this.density = this.restitution = 0, this.filter.categoryBits = 1, this.filter.maskBits = 65535, this.filter.groupIndex = 0, this.isSensor = !1
	}, S.b2Island = function() {}, S.prototype.b2Island = function() {
		this.m_bodies = new Vector, this.m_contacts = new Vector, this.m_joints = new Vector
	}, S.prototype.Initialize = function(t, e, i, n, o, s) {
		void 0 === t && (t = 0), void 0 === e && (e = 0), void 0 === i && (i = 0);
		var r = 0;
		for (this.m_bodyCapacity = t, this.m_contactCapacity = e, this.m_jointCapacity = i, this.m_jointCount = this.m_contactCount = this.m_bodyCount = 0, this.m_allocator = n, this.m_listener = o, this.m_contactSolver = s, r = this.m_bodies.length; t > r; r++) this.m_bodies[r] = null;
		for (r = this.m_contacts.length; e > r; r++) this.m_contacts[r] = null;
		for (r = this.m_joints.length; i > r; r++) this.m_joints[r] = null
	}, S.prototype.Clear = function() {
		this.m_jointCount = this.m_contactCount = this.m_bodyCount = 0
	}, S.prototype.Solve = function(e, i, n) {
		for (var o, r = 0, a = 0, r = 0; r < this.m_bodyCount; ++r) a = this.m_bodies[r], a.GetType() == y.b2_dynamicBody && (a.m_linearVelocity.x += e.dt * (i.x + a.m_invMass * a.m_force.x), a.m_linearVelocity.y += e.dt * (i.y + a.m_invMass * a.m_force.y), a.m_angularVelocity += e.dt * a.m_invI * a.m_torque, a.m_linearVelocity.Multiply(t.Clamp(1 - e.dt * a.m_linearDamping, 0, 1)), a.m_angularVelocity *= t.Clamp(1 - e.dt * a.m_angularDamping, 0, 1));
		for (this.m_contactSolver.Initialize(e, this.m_contacts, this.m_contactCount, this.m_allocator), i = this.m_contactSolver, i.InitVelocityConstraints(e), r = 0; r < this.m_jointCount; ++r) o = this.m_joints[r], o.InitVelocityConstraints(e);
		for (r = 0; r < e.velocityIterations; ++r) {
			for (a = 0; a < this.m_jointCount; ++a) o = this.m_joints[a], o.SolveVelocityConstraints(e);
			i.SolveVelocityConstraints()
		}
		for (r = 0; r < this.m_jointCount; ++r) o = this.m_joints[r], o.FinalizeVelocityConstraints();
		for (i.FinalizeVelocityConstraints(), r = 0; r < this.m_bodyCount; ++r) if (a = this.m_bodies[r], a.GetType() != y.b2_staticBody) {
			var h = e.dt * a.m_linearVelocity.x,
				l = e.dt * a.m_linearVelocity.y;
			h * h + l * l > s.b2_maxTranslationSquared && (a.m_linearVelocity.Normalize(), a.m_linearVelocity.x *= s.b2_maxTranslation * e.inv_dt, a.m_linearVelocity.y *= s.b2_maxTranslation * e.inv_dt), h = e.dt * a.m_angularVelocity, h * h > s.b2_maxRotationSquared && (a.m_angularVelocity = 0 > a.m_angularVelocity ? -s.b2_maxRotation * e.inv_dt : s.b2_maxRotation * e.inv_dt), a.m_sweep.c0.SetV(a.m_sweep.c), a.m_sweep.a0 = a.m_sweep.a, a.m_sweep.c.x += e.dt * a.m_linearVelocity.x, a.m_sweep.c.y += e.dt * a.m_linearVelocity.y, a.m_sweep.a += e.dt * a.m_angularVelocity, a.SynchronizeTransform()
		}
		for (r = 0; r < e.positionIterations; ++r) {
			for (h = i.SolvePositionConstraints(s.b2_contactBaumgarte), l = !0, a = 0; a < this.m_jointCount; ++a) o = this.m_joints[a], o = o.SolvePositionConstraints(s.b2_contactBaumgarte), l = l && o;
			if (h && l) break
		}
		if (this.Report(i.m_constraints), n) {
			for (n = Number.MAX_VALUE, i = s.b2_linearSleepTolerance * s.b2_linearSleepTolerance, h = s.b2_angularSleepTolerance * s.b2_angularSleepTolerance, r = 0; r < this.m_bodyCount; ++r) a = this.m_bodies[r], a.GetType() != y.b2_staticBody && (0 == (a.m_flags & y.e_allowSleepFlag) && (n = a.m_sleepTime = 0), 0 == (a.m_flags & y.e_allowSleepFlag) || a.m_angularVelocity * a.m_angularVelocity > h || t.Dot(a.m_linearVelocity, a.m_linearVelocity) > i ? n = a.m_sleepTime = 0 : (a.m_sleepTime += e.dt, n = t.Min(n, a.m_sleepTime)));
			if (n >= s.b2_timeToSleep) for (r = 0; r < this.m_bodyCount; ++r) a = this.m_bodies[r], a.SetAwake(!1)
		}
	}, S.prototype.SolveTOI = function(t) {
		var e = 0,
			i = 0;
		this.m_contactSolver.Initialize(t, this.m_contacts, this.m_contactCount, this.m_allocator);
		for (var n = this.m_contactSolver, e = 0; e < this.m_jointCount; ++e) this.m_joints[e].InitVelocityConstraints(t);
		for (e = 0; e < t.velocityIterations; ++e) for (n.SolveVelocityConstraints(), i = 0; i < this.m_jointCount; ++i) this.m_joints[i].SolveVelocityConstraints(t);
		for (e = 0; e < this.m_bodyCount; ++e) if (i = this.m_bodies[e], i.GetType() != y.b2_staticBody) {
			var o = t.dt * i.m_linearVelocity.x,
				r = t.dt * i.m_linearVelocity.y;
			o * o + r * r > s.b2_maxTranslationSquared && (i.m_linearVelocity.Normalize(), i.m_linearVelocity.x *= s.b2_maxTranslation * t.inv_dt, i.m_linearVelocity.y *= s.b2_maxTranslation * t.inv_dt), o = t.dt * i.m_angularVelocity, o * o > s.b2_maxRotationSquared && (i.m_angularVelocity = 0 > i.m_angularVelocity ? -s.b2_maxRotation * t.inv_dt : s.b2_maxRotation * t.inv_dt), i.m_sweep.c0.SetV(i.m_sweep.c), i.m_sweep.a0 = i.m_sweep.a, i.m_sweep.c.x += t.dt * i.m_linearVelocity.x, i.m_sweep.c.y += t.dt * i.m_linearVelocity.y, i.m_sweep.a += t.dt * i.m_angularVelocity, i.SynchronizeTransform()
		}
		for (e = 0; e < t.positionIterations; ++e) {
			for (o = n.SolvePositionConstraints(.75), r = !0, i = 0; i < this.m_jointCount; ++i) var a = this.m_joints[i].SolvePositionConstraints(s.b2_contactBaumgarte),
				r = r && a;
			if (o && r) break
		}
		this.Report(n.m_constraints)
	}, S.prototype.Report = function(t) {
		if (null != this.m_listener) for (var e = 0; e < this.m_contactCount; ++e) {
			for (var i = this.m_contacts[e], n = t[e], o = 0; o < n.pointCount; ++o) S.s_impulse.normalImpulses[o] = n.points[o].normalImpulse, S.s_impulse.tangentImpulses[o] = n.points[o].tangentImpulse;
			this.m_listener.PostSolve(i, S.s_impulse)
		}
	}, S.prototype.AddBody = function(t) {
		t.m_islandIndex = this.m_bodyCount, this.m_bodies[this.m_bodyCount++] = t
	}, S.prototype.AddContact = function(t) {
		this.m_contacts[this.m_contactCount++] = t
	}, S.prototype.AddJoint = function(t) {
		this.m_joints[this.m_jointCount++] = t
	}, Box2D.postDefs.push(function() {
		Box2D.Dynamics.b2Island.s_impulse = new v
	}), T.b2TimeStep = function() {}, T.prototype.Set = function(t) {
		this.dt = t.dt, this.inv_dt = t.inv_dt, this.positionIterations = t.positionIterations, this.velocityIterations = t.velocityIterations, this.warmStarting = t.warmStarting
	}, L.b2World = function() {
		this.s_stack = new Vector, this.m_contactManager = new b, this.m_contactSolver = new P, this.m_island = new S
	}, L.prototype.b2World = function(t, e) {
		this.m_controllerList = this.m_jointList = this.m_contactList = this.m_bodyList = this.m_debugDraw = this.m_destructionListener = null, this.m_controllerCount = this.m_jointCount = this.m_contactCount = this.m_bodyCount = 0, L.m_warmStarting = !0, L.m_continuousPhysics = !0, this.m_allowSleep = e, t.y = t.y, this.m_gravity = t, this.m_inv_dt0 = 0, this.m_contactManager.m_world = this;
		var i = new f;
		this.m_groundBody = this.CreateBody(i)
	}, L.prototype.SetDestructionListener = function(t) {
		this.m_destructionListener = t
	}, L.prototype.SetContactFilter = function(t) {
		this.m_contactManager.m_contactFilter = t
	}, L.prototype.SetContactListener = function(t) {
		this.m_contactManager.m_contactListener = t
	}, L.prototype.SetDebugDraw = function(t) {
		this.m_debugDraw = t
	}, L.prototype.SetBroadPhase = function(t) {
		var e = this.m_contactManager.m_broadPhase;
		this.m_contactManager.m_broadPhase = t;
		for (var i = this.m_bodyList; i; i = i.m_next) for (var n = i.m_fixtureList; n; n = n.m_next) n.m_proxy = t.CreateProxy(e.GetFatAABB(n.m_proxy), n)
	}, L.prototype.Validate = function() {
		this.m_contactManager.m_broadPhase.Validate()
	}, L.prototype.GetProxyCount = function() {
		return this.m_contactManager.m_broadPhase.GetProxyCount()
	}, L.prototype.CreateBody = function(t) {
		return 1 == this.IsLocked() ? null : (t = new y(t, this), t.m_prev = null, (t.m_next = this.m_bodyList) && (this.m_bodyList.m_prev = t), this.m_bodyList = t, ++this.m_bodyCount, t)
	}, L.prototype.DestroyBody = function(t) {
		if (1 != this.IsLocked()) {
			for (var e = t.m_jointList; e;) {
				var i = e,
					e = e.next;
				this.m_destructionListener && this.m_destructionListener.SayGoodbyeJoint(i.joint), this.DestroyJoint(i.joint)
			}
			for (e = t.m_controllerList; e;) i = e, e = e.nextController, i.controller.RemoveBody(t);
			for (e = t.m_contactList; e;) i = e, e = e.next, this.m_contactManager.Destroy(i.contact);
			for (t.m_contactList = null, e = t.m_fixtureList; e;) i = e, e = e.m_next, this.m_destructionListener && this.m_destructionListener.SayGoodbyeFixture(i), i.DestroyProxy(this.m_contactManager.m_broadPhase), i.Destroy();
			t.m_fixtureList = null, t.m_fixtureCount = 0, t.m_prev && (t.m_prev.m_next = t.m_next), t.m_next && (t.m_next.m_prev = t.m_prev), t == this.m_bodyList && (this.m_bodyList = t.m_next), --this.m_bodyCount
		}
	}, L.prototype.CreateJoint = function(t) {
		var e = M.Create(t, null);
		e.m_prev = null, (e.m_next = this.m_jointList) && (this.m_jointList.m_prev = e), this.m_jointList = e, ++this.m_jointCount, e.m_edgeA.joint = e, e.m_edgeA.other = e.m_bodyB, e.m_edgeA.prev = null, (e.m_edgeA.next = e.m_bodyA.m_jointList) && (e.m_bodyA.m_jointList.prev = e.m_edgeA), e.m_bodyA.m_jointList = e.m_edgeA, e.m_edgeB.joint = e, e.m_edgeB.other = e.m_bodyA, e.m_edgeB.prev = null, (e.m_edgeB.next = e.m_bodyB.m_jointList) && (e.m_bodyB.m_jointList.prev = e.m_edgeB), e.m_bodyB.m_jointList = e.m_edgeB;
		var i = t.bodyA,
			n = t.bodyB;
		if (0 == t.collideConnected) for (t = n.GetContactList(); t;) t.other == i && t.contact.FlagForFiltering(), t = t.next;
		return e
	}, L.prototype.DestroyJoint = function(t) {
		var e = t.m_collideConnected;
		t.m_prev && (t.m_prev.m_next = t.m_next), t.m_next && (t.m_next.m_prev = t.m_prev), t == this.m_jointList && (this.m_jointList = t.m_next);
		var i = t.m_bodyA,
			n = t.m_bodyB;
		if (i.SetAwake(!0), n.SetAwake(!0), t.m_edgeA.prev && (t.m_edgeA.prev.next = t.m_edgeA.next), t.m_edgeA.next && (t.m_edgeA.next.prev = t.m_edgeA.prev), t.m_edgeA == i.m_jointList && (i.m_jointList = t.m_edgeA.next), t.m_edgeA.prev = null, t.m_edgeA.next = null, t.m_edgeB.prev && (t.m_edgeB.prev.next = t.m_edgeB.next), t.m_edgeB.next && (t.m_edgeB.next.prev = t.m_edgeB.prev), t.m_edgeB == n.m_jointList && (n.m_jointList = t.m_edgeB.next), t.m_edgeB.prev = null, t.m_edgeB.next = null, M.Destroy(t, null), --this.m_jointCount, 0 == e) for (t = n.GetContactList(); t;) t.other == i && t.contact.FlagForFiltering(), t = t.next
	}, L.prototype.AddController = function(t) {
		return t.m_next = this.m_controllerList, t.m_prev = null, this.m_controllerList = t, t.m_world = this, this.m_controllerCount++, t
	}, L.prototype.RemoveController = function(t) {
		t.m_prev && (t.m_prev.m_next = t.m_next), t.m_next && (t.m_next.m_prev = t.m_prev), this.m_controllerList == t && (this.m_controllerList = t.m_next), this.m_controllerCount--
	}, L.prototype.CreateController = function(t) {
		if (t.m_world != this) throw Error("Controller can only be a member of one world");
		return t.m_next = this.m_controllerList, t.m_prev = null, this.m_controllerList && (this.m_controllerList.m_prev = t), this.m_controllerList = t, ++this.m_controllerCount, t.m_world = this, t
	}, L.prototype.DestroyController = function(t) {
		t.Clear(), t.m_next && (t.m_next.m_prev = t.m_prev), t.m_prev && (t.m_prev.m_next = t.m_next), t == this.m_controllerList && (this.m_controllerList = t.m_next), --this.m_controllerCount
	}, L.prototype.SetWarmStarting = function(t) {
		L.m_warmStarting = t
	}, L.prototype.SetContinuousPhysics = function(t) {
		L.m_continuousPhysics = t
	}, L.prototype.GetBodyCount = function() {
		return this.m_bodyCount
	}, L.prototype.GetJointCount = function() {
		return this.m_jointCount
	}, L.prototype.GetContactCount = function() {
		return this.m_contactCount
	}, L.prototype.SetGravity = function(t) {
		this.m_gravity = t
	}, L.prototype.GetGravity = function() {
		return this.m_gravity
	}, L.prototype.GetGroundBody = function() {
		return this.m_groundBody
	}, L.prototype.Step = function(t, e, i) {
		void 0 === t && (t = 0), void 0 === e && (e = 0), void 0 === i && (i = 0), this.m_flags & L.e_newFixture && (this.m_contactManager.FindNewContacts(), this.m_flags &= ~L.e_newFixture), this.m_flags |= L.e_locked;
		var n = L.s_timestep2;
		n.dt = t, n.velocityIterations = e, n.positionIterations = i, n.inv_dt = t > 0 ? 1 / t : 0, n.dtRatio = this.m_inv_dt0 * t, n.warmStarting = L.m_warmStarting, this.m_contactManager.Collide(), 0 < n.dt && this.Solve(n), L.m_continuousPhysics && 0 < n.dt && this.SolveTOI(n), 0 < n.dt && (this.m_inv_dt0 = n.inv_dt), this.m_flags &= ~L.e_locked
	}, L.prototype.ClearForces = function() {
		for (var t = this.m_bodyList; t; t = t.m_next) t.m_force.SetZero(), t.m_torque = 0
	}, L.prototype.DrawDebugData = function() {
		if (null != this.m_debugDraw) {
			this.m_debugDraw.m_sprite.graphics.clear();
			var t, e, i, s = this.m_debugDraw.GetFlags();
			new n, new n, new n;
			var a;
			new r, new r, a = [new n, new n, new n, new n];
			var h = new o(0, 0, 0);
			if (s & C.e_shapeBit) for (t = this.m_bodyList; t; t = t.m_next) for (a = t.m_xf, e = t.GetFixtureList(); e; e = e.m_next) i = e.GetShape(), 0 == t.IsActive() ? h.Set(.5, .5, .3) : t.GetType() == y.b2_staticBody ? h.Set(.5, .9, .5) : t.GetType() == y.b2_kinematicBody ? h.Set(.5, .5, .9) : 0 == t.IsAwake() ? h.Set(.6, .6, .6) : h.Set(.9, .7, .7), this.DrawShape(i, a, h);
			if (s & C.e_jointBit) for (t = this.m_jointList; t; t = t.m_next) this.DrawJoint(t);
			if (s & C.e_controllerBit) for (t = this.m_controllerList; t; t = t.m_next) t.Draw(this.m_debugDraw);
			if (s & C.e_pairBit) for (h.Set(.3, .9, .9), t = this.m_contactManager.m_contactList; t; t = t.GetNext()) i = t.GetFixtureA(), e = t.GetFixtureB(), i = i.GetAABB().GetCenter(), e = e.GetAABB().GetCenter(), this.m_debugDraw.DrawSegment(i, e, h);
			if (s & C.e_aabbBit) for (i = this.m_contactManager.m_broadPhase, a = [new n, new n, new n, new n], t = this.m_bodyList; t; t = t.GetNext()) if (0 != t.IsActive()) for (e = t.GetFixtureList(); e; e = e.GetNext()) {
				var l = i.GetFatAABB(e.m_proxy);
				a[0].Set(l.lowerBound.x, l.lowerBound.y), a[1].Set(l.upperBound.x, l.lowerBound.y), a[2].Set(l.upperBound.x, l.upperBound.y), a[3].Set(l.lowerBound.x, l.upperBound.y), this.m_debugDraw.DrawPolygon(a, 4, h)
			}
			if (s & C.e_centerOfMassBit) for (t = this.m_bodyList; t; t = t.m_next) a = L.s_xf, a.R = t.m_xf.R, a.position = t.GetWorldCenter(), this.m_debugDraw.DrawTransform(a)
		}
	}, L.prototype.QueryAABB = function(t, e) {
		var i = this.m_contactManager.m_broadPhase;
		i.Query(function(e) {
			return t(i.GetUserData(e))
		}, e)
	}, L.prototype.QueryShape = function(t, e, n) {
		void 0 === n && (n = null), null == n && (n = new i, n.SetIdentity());
		var o = this.m_contactManager.m_broadPhase,
			s = new r;
		e.ComputeAABB(s, n), o.Query(function(i) {
			return i = o.GetUserData(i) instanceof A ? o.GetUserData(i) : null, _.TestOverlap(e, n, i.GetShape(), i.GetBody().GetTransform()) ? t(i) : !0
		}, s)
	}, L.prototype.QueryPoint = function(t, e) {
		var i = this.m_contactManager.m_broadPhase,
			n = new r;
		n.lowerBound.Set(e.x - s.b2_linearSlop, e.y - s.b2_linearSlop), n.upperBound.Set(e.x + s.b2_linearSlop, e.y + s.b2_linearSlop), i.Query(function(n) {
			return n = i.GetUserData(n) instanceof A ? i.GetUserData(n) : null, n.TestPoint(e) ? t(n) : !0
		}, n)
	}, L.prototype.RayCast = function(t, e, i) {
		var o = this.m_contactManager.m_broadPhase,
			s = new p,
			r = new l(e, i);
		o.RayCast(function(r, a) {
			var h = o.GetUserData(a),
				h = h instanceof A ? h : null;
			if (h.RayCast(s, r)) {
				var l = s.fraction,
					p = new n((1 - l) * e.x + l * i.x, (1 - l) * e.y + l * i.y);
				return t(h, p, s.normal, l)
			}
			return r.maxFraction
		}, r)
	}, L.prototype.RayCastOne = function(t, e) {
		var i;
		return this.RayCast(function(t, e, n, o) {
			return void 0 === o && (o = 0), i = t, o
		}, t, e), i
	}, L.prototype.RayCastAll = function(t, e) {
		var i = new Vector;
		return this.RayCast(function(t) {
			return i[i.length] = t, 1
		}, t, e), i
	}, L.prototype.GetBodyList = function() {
		return this.m_bodyList
	}, L.prototype.GetJointList = function() {
		return this.m_jointList
	}, L.prototype.GetContactList = function() {
		return this.m_contactList
	}, L.prototype.IsLocked = function() {
		return 0 < (this.m_flags & L.e_locked)
	}, L.prototype.Solve = function(t) {
		for (var e, i = this.m_controllerList; i; i = i.m_next) i.Step(t);
		for (i = this.m_island, i.Initialize(this.m_bodyCount, this.m_contactCount, this.m_jointCount, null, this.m_contactManager.m_contactListener, this.m_contactSolver), e = this.m_bodyList; e; e = e.m_next) e.m_flags &= ~y.e_islandFlag;
		for (var n = this.m_contactList; n; n = n.m_next) n.m_flags &= ~B.e_islandFlag;
		for (n = this.m_jointList; n; n = n.m_next) n.m_islandFlag = !1;
		parseInt(this.m_bodyCount);
		for (var n = this.s_stack, o = this.m_bodyList; o; o = o.m_next) if (!(o.m_flags & y.e_islandFlag) && 0 != o.IsAwake() && 0 != o.IsActive() && o.GetType() != y.b2_staticBody) {
			i.Clear();
			var s = 0;
			for (n[s++] = o, o.m_flags |= y.e_islandFlag; s > 0;) if (e = n[--s], i.AddBody(e), 0 == e.IsAwake() && e.SetAwake(!0), e.GetType() != y.b2_staticBody) {
				for (var r, a = e.m_contactList; a; a = a.next) a.contact.m_flags & B.e_islandFlag || 1 == a.contact.IsSensor() || 0 == a.contact.IsEnabled() || 0 == a.contact.IsTouching() || (i.AddContact(a.contact), a.contact.m_flags |= B.e_islandFlag, r = a.other, r.m_flags & y.e_islandFlag || (n[s++] = r, r.m_flags |= y.e_islandFlag));
				for (e = e.m_jointList; e; e = e.next) 1 != e.joint.m_islandFlag && (r = e.other, 0 != r.IsActive() && (i.AddJoint(e.joint), e.joint.m_islandFlag = !0, r.m_flags & y.e_islandFlag || (n[s++] = r, r.m_flags |= y.e_islandFlag)))
			}
			for (i.Solve(t, this.m_gravity, this.m_allowSleep), s = 0; s < i.m_bodyCount; ++s) e = i.m_bodies[s], e.GetType() == y.b2_staticBody && (e.m_flags &= ~y.e_islandFlag)
		}
		for (s = 0; s < n.length && n[s]; ++s) n[s] = null;
		for (e = this.m_bodyList; e; e = e.m_next) 0 == e.IsAwake() || 0 == e.IsActive() || e.GetType() != y.b2_staticBody && e.SynchronizeFixtures();
		this.m_contactManager.FindNewContacts()
	}, L.prototype.SolveTOI = function(t) {
		var e, i, n, o = this.m_island;
		o.Initialize(this.m_bodyCount, s.b2_maxTOIContactsPerIsland, s.b2_maxTOIJointsPerIsland, null, this.m_contactManager.m_contactListener, this.m_contactSolver);
		var r = L.s_queue;
		for (e = this.m_bodyList; e; e = e.m_next) e.m_flags &= ~y.e_islandFlag, e.m_sweep.t0 = 0;
		for (n = this.m_contactList; n; n = n.m_next) n.m_flags &= ~ (B.e_toiFlag | B.e_islandFlag);
		for (n = this.m_jointList; n; n = n.m_next) n.m_islandFlag = !1;
		for (;;) {
			var a = null,
				h = 1;
			for (n = this.m_contactList; n; n = n.m_next) if (1 != n.IsSensor() && 0 != n.IsEnabled() && 0 != n.IsContinuous()) {
				if (e = 1, n.m_flags & B.e_toiFlag) e = n.m_toi;
				else {
					if (e = n.m_fixtureA, i = n.m_fixtureB, e = e.m_body, i = i.m_body, !(e.GetType() == y.b2_dynamicBody && 0 != e.IsAwake() || i.GetType() == y.b2_dynamicBody && 0 != i.IsAwake())) continue;
					var l = e.m_sweep.t0;
					e.m_sweep.t0 < i.m_sweep.t0 ? (l = i.m_sweep.t0, e.m_sweep.Advance(l)) : i.m_sweep.t0 < e.m_sweep.t0 && (l = e.m_sweep.t0, i.m_sweep.Advance(l)), e = n.ComputeTOI(e.m_sweep, i.m_sweep), s.b2Assert(e >= 0 && 1 >= e), e > 0 && 1 > e && (e = (1 - e) * l + e, e > 1 && (e = 1)), n.m_toi = e, n.m_flags |= B.e_toiFlag
				}
				Number.MIN_VALUE < e && h > e && (a = n, h = e)
			}
			if (null == a || 1 - 100 * Number.MIN_VALUE < h) break;
			if (e = a.m_fixtureA, i = a.m_fixtureB, e = e.m_body, i = i.m_body, L.s_backupA.Set(e.m_sweep), L.s_backupB.Set(i.m_sweep), e.Advance(h), i.Advance(h), a.Update(this.m_contactManager.m_contactListener), a.m_flags &= ~B.e_toiFlag, 1 == a.IsSensor() || 0 == a.IsEnabled()) e.m_sweep.Set(L.s_backupA), i.m_sweep.Set(L.s_backupB), e.SynchronizeTransform(), i.SynchronizeTransform();
			else if (0 != a.IsTouching()) {
				for (e.GetType() != y.b2_dynamicBody && (e = i), o.Clear(), a = n = 0, r[n + a++] = e, e.m_flags |= y.e_islandFlag; a > 0;) if (e = r[n++], --a, o.AddBody(e), 0 == e.IsAwake() && e.SetAwake(!0), e.GetType() == y.b2_dynamicBody) {
					for (i = e.m_contactList; i && o.m_contactCount != o.m_contactCapacity; i = i.next) i.contact.m_flags & B.e_islandFlag || 1 == i.contact.IsSensor() || 0 == i.contact.IsEnabled() || 0 == i.contact.IsTouching() || (o.AddContact(i.contact), i.contact.m_flags |= B.e_islandFlag, l = i.other, l.m_flags & y.e_islandFlag || (l.GetType() != y.b2_staticBody && (l.Advance(h), l.SetAwake(!0)), r[n + a] = l, ++a, l.m_flags |= y.e_islandFlag));
					for (e = e.m_jointList; e; e = e.next) o.m_jointCount != o.m_jointCapacity && 1 != e.joint.m_islandFlag && (l = e.other, 0 != l.IsActive() && (o.AddJoint(e.joint), e.joint.m_islandFlag = !0, l.m_flags & y.e_islandFlag || (l.GetType() != y.b2_staticBody && (l.Advance(h), l.SetAwake(!0)), r[n + a] = l, ++a, l.m_flags |= y.e_islandFlag)))
				}
				for (n = L.s_timestep, n.warmStarting = !1, n.dt = (1 - h) * t.dt, n.inv_dt = 1 / n.dt, n.dtRatio = 0, n.velocityIterations = t.velocityIterations, n.positionIterations = t.positionIterations, o.SolveTOI(n), h = h = 0; h < o.m_bodyCount; ++h) if (e = o.m_bodies[h], e.m_flags &= ~y.e_islandFlag, 0 != e.IsAwake() && e.GetType() == y.b2_dynamicBody) for (e.SynchronizeFixtures(), i = e.m_contactList; i; i = i.next) i.contact.m_flags &= ~B.e_toiFlag;
				for (h = 0; h < o.m_contactCount; ++h) n = o.m_contacts[h], n.m_flags &= ~ (B.e_toiFlag | B.e_islandFlag);
				for (h = 0; h < o.m_jointCount; ++h) n = o.m_joints[h], n.m_islandFlag = !1;
				this.m_contactManager.FindNewContacts()
			}
		}
	}, L.prototype.DrawJoint = function(t) {
		var e = t.GetBodyA(),
			i = t.GetBodyB(),
			n = e.m_xf.position,
			o = i.m_xf.position,
			s = t.GetAnchorA(),
			r = t.GetAnchorB(),
			a = L.s_jointColor;
		switch (t.m_type) {
		case M.e_distanceJoint:
			this.m_debugDraw.DrawSegment(s, r, a);
			break;
		case M.e_pulleyJoint:
			e = t instanceof O ? t : null, t = e.GetGroundAnchorA(), e = e.GetGroundAnchorB(), this.m_debugDraw.DrawSegment(t, s, a), this.m_debugDraw.DrawSegment(e, r, a), this.m_debugDraw.DrawSegment(t, e, a);
			break;
		case M.e_mouseJoint:
			this.m_debugDraw.DrawSegment(s, r, a);
			break;
		default:
			e != this.m_groundBody && this.m_debugDraw.DrawSegment(n, s, a), this.m_debugDraw.DrawSegment(s, r, a), i != this.m_groundBody && this.m_debugDraw.DrawSegment(o, r, a)
		}
	}, L.prototype.DrawShape = function(e, i, n) {
		switch (e.m_type) {
		case _.e_circleShape:
			var o = e instanceof c ? e : null;
			e = t.MulX(i, o.m_p), this.m_debugDraw.DrawSolidCircle(e, o.m_radius, i.R.col1, n);
			break;
		case _.e_polygonShape:
			o = 0, o = e instanceof m ? e : null, e = parseInt(o.GetVertexCount());
			for (var s = o.GetVertices(), r = new Vector(e), o = 0; e > o; ++o) r[o] = t.MulX(i, s[o]);
			this.m_debugDraw.DrawSolidPolygon(r, e, n);
			break;
		case _.e_edgeShape:
			o = e instanceof u ? e : null, this.m_debugDraw.DrawSegment(t.MulX(i, o.GetVertex1()), t.MulX(i, o.GetVertex2()), n)
		}
	}, Box2D.postDefs.push(function() {
		Box2D.Dynamics.b2World.s_timestep2 = new T, Box2D.Dynamics.b2World.s_xf = new i, Box2D.Dynamics.b2World.s_backupA = new e, Box2D.Dynamics.b2World.s_backupB = new e, Box2D.Dynamics.b2World.s_timestep = new T, Box2D.Dynamics.b2World.s_queue = new Vector, Box2D.Dynamics.b2World.s_jointColor = new o(.5, .8, .8), Box2D.Dynamics.b2World.e_newFixture = 1, Box2D.Dynamics.b2World.e_locked = 2
	})
}(), function() {
	var t = Box2D.Collision.Shapes.b2CircleShape,
		e = Box2D.Collision.Shapes.b2EdgeShape,
		i = Box2D.Collision.Shapes.b2PolygonShape,
		n = Box2D.Collision.Shapes.b2Shape,
		o = Box2D.Dynamics.Contacts.b2CircleContact,
		s = Box2D.Dynamics.Contacts.b2Contact,
		r = Box2D.Dynamics.Contacts.b2ContactConstraint,
		a = Box2D.Dynamics.Contacts.b2ContactConstraintPoint,
		h = Box2D.Dynamics.Contacts.b2ContactEdge,
		l = Box2D.Dynamics.Contacts.b2ContactFactory,
		p = Box2D.Dynamics.Contacts.b2ContactRegister,
		c = Box2D.Dynamics.Contacts.b2ContactResult,
		u = Box2D.Dynamics.Contacts.b2ContactSolver,
		d = Box2D.Dynamics.Contacts.b2EdgeAndCircleContact,
		m = Box2D.Dynamics.Contacts.b2NullContact,
		_ = Box2D.Dynamics.Contacts.b2PolyAndCircleContact,
		y = Box2D.Dynamics.Contacts.b2PolyAndEdgeContact,
		f = Box2D.Dynamics.Contacts.b2PolygonContact,
		g = Box2D.Dynamics.Contacts.b2PositionSolverManifold,
		v = Box2D.Dynamics.b2Body,
		x = Box2D.Dynamics.b2TimeStep,
		b = Box2D.Common.b2Settings,
		C = Box2D.Common.Math.b2Mat22,
		E = Box2D.Common.Math.b2Math,
		w = Box2D.Common.Math.b2Vec2,
		A = Box2D.Collision.b2Collision,
		D = Box2D.Collision.b2ContactID,
		S = Box2D.Collision.b2Manifold,
		T = Box2D.Collision.b2TimeOfImpact,
		L = Box2D.Collision.b2TOIInput,
		B = Box2D.Collision.b2WorldManifold;
	Box2D.inherit(o, Box2D.Dynamics.Contacts.b2Contact), o.prototype.__super = Box2D.Dynamics.Contacts.b2Contact.prototype, o.b2CircleContact = function() {
		Box2D.Dynamics.Contacts.b2Contact.b2Contact.apply(this, arguments)
	}, o.Create = function() {
		return new o
	}, o.Destroy = function() {}, o.prototype.Reset = function(t, e) {
		this.__super.Reset.call(this, t, e)
	}, o.prototype.Evaluate = function() {
		var e = this.m_fixtureA.GetBody(),
			i = this.m_fixtureB.GetBody();
		A.CollideCircles(this.m_manifold, this.m_fixtureA.GetShape() instanceof t ? this.m_fixtureA.GetShape() : null, e.m_xf, this.m_fixtureB.GetShape() instanceof t ? this.m_fixtureB.GetShape() : null, i.m_xf)
	}, s.b2Contact = function() {
		this.m_nodeA = new h, this.m_nodeB = new h, this.m_manifold = new S, this.m_oldManifold = new S
	}, s.prototype.GetManifold = function() {
		return this.m_manifold
	}, s.prototype.GetWorldManifold = function(t) {
		var e = this.m_fixtureA.GetBody(),
			i = this.m_fixtureB.GetBody(),
			n = this.m_fixtureA.GetShape(),
			o = this.m_fixtureB.GetShape();
		t.Initialize(this.m_manifold, e.GetTransform(), n.m_radius, i.GetTransform(), o.m_radius)
	}, s.prototype.IsTouching = function() {
		return (this.m_flags & s.e_touchingFlag) == s.e_touchingFlag
	}, s.prototype.IsContinuous = function() {
		return (this.m_flags & s.e_continuousFlag) == s.e_continuousFlag
	}, s.prototype.SetSensor = function(t) {
		this.m_flags = t ? this.m_flags | s.e_sensorFlag : this.m_flags & ~s.e_sensorFlag
	}, s.prototype.IsSensor = function() {
		return (this.m_flags & s.e_sensorFlag) == s.e_sensorFlag
	}, s.prototype.SetEnabled = function(t) {
		this.m_flags = t ? this.m_flags | s.e_enabledFlag : this.m_flags & ~s.e_enabledFlag
	}, s.prototype.IsEnabled = function() {
		return (this.m_flags & s.e_enabledFlag) == s.e_enabledFlag
	}, s.prototype.GetNext = function() {
		return this.m_next
	}, s.prototype.GetFixtureA = function() {
		return this.m_fixtureA
	}, s.prototype.GetFixtureB = function() {
		return this.m_fixtureB
	}, s.prototype.FlagForFiltering = function() {
		this.m_flags |= s.e_filterFlag
	}, s.prototype.b2Contact = function() {}, s.prototype.Reset = function(t, e) {
		if (void 0 === t && (t = null), void 0 === e && (e = null), this.m_flags = s.e_enabledFlag, t && e) {
			(t.IsSensor() || e.IsSensor()) && (this.m_flags |= s.e_sensorFlag);
			var i = t.GetBody(),
				n = e.GetBody();
			(i.GetType() != v.b2_dynamicBody || i.IsBullet() || n.GetType() != v.b2_dynamicBody || n.IsBullet()) && (this.m_flags |= s.e_continuousFlag), this.m_fixtureA = t, this.m_fixtureB = e, this.m_manifold.m_pointCount = 0, this.m_next = this.m_prev = null, this.m_nodeA.contact = null, this.m_nodeA.prev = null, this.m_nodeA.next = null, this.m_nodeA.other = null, this.m_nodeB.contact = null, this.m_nodeB.prev = null, this.m_nodeB.next = null, this.m_nodeB.other = null
		} else this.m_fixtureB = this.m_fixtureA = null
	}, s.prototype.Update = function(t) {
		var e = this.m_oldManifold;
		this.m_oldManifold = this.m_manifold, this.m_manifold = e, this.m_flags |= s.e_enabledFlag;
		var i = !1,
			e = (this.m_flags & s.e_touchingFlag) == s.e_touchingFlag,
			o = this.m_fixtureA.m_body,
			r = this.m_fixtureB.m_body,
			a = this.m_fixtureA.m_aabb.TestOverlap(this.m_fixtureB.m_aabb);
		if (this.m_flags & s.e_sensorFlag) a && (i = this.m_fixtureA.GetShape(), a = this.m_fixtureB.GetShape(), o = o.GetTransform(), r = r.GetTransform(), i = n.TestOverlap(i, o, a, r)), this.m_manifold.m_pointCount = 0;
		else {
			if (o.GetType() != v.b2_dynamicBody || o.IsBullet() || r.GetType() != v.b2_dynamicBody || r.IsBullet() ? this.m_flags |= s.e_continuousFlag : this.m_flags &= ~s.e_continuousFlag, a) for (this.Evaluate(), i = 0 < this.m_manifold.m_pointCount, a = 0; a < this.m_manifold.m_pointCount; ++a) {
				var h = this.m_manifold.m_points[a];
				h.m_normalImpulse = 0, h.m_tangentImpulse = 0;
				for (var l = h.m_id, p = 0; p < this.m_oldManifold.m_pointCount; ++p) {
					var c = this.m_oldManifold.m_points[p];
					if (c.m_id.key == l.key) {
						h.m_normalImpulse = c.m_normalImpulse, h.m_tangentImpulse = c.m_tangentImpulse;
						break
					}
				}
			} else this.m_manifold.m_pointCount = 0;
			i != e && (o.SetAwake(!0), r.SetAwake(!0))
		}
		this.m_flags = i ? this.m_flags | s.e_touchingFlag : this.m_flags & ~s.e_touchingFlag, 0 == e && 1 == i && t.BeginContact(this), 1 == e && 0 == i && t.EndContact(this), 0 == (this.m_flags & s.e_sensorFlag) && t.PreSolve(this, this.m_oldManifold)
	}, s.prototype.Evaluate = function() {}, s.prototype.ComputeTOI = function(t, e) {
		return s.s_input.proxyA.Set(this.m_fixtureA.GetShape()), s.s_input.proxyB.Set(this.m_fixtureB.GetShape()), s.s_input.sweepA = t, s.s_input.sweepB = e, s.s_input.tolerance = b.b2_linearSlop, T.TimeOfImpact(s.s_input)
	}, Box2D.postDefs.push(function() {
		Box2D.Dynamics.Contacts.b2Contact.e_sensorFlag = 1, Box2D.Dynamics.Contacts.b2Contact.e_continuousFlag = 2, Box2D.Dynamics.Contacts.b2Contact.e_islandFlag = 4, Box2D.Dynamics.Contacts.b2Contact.e_toiFlag = 8, Box2D.Dynamics.Contacts.b2Contact.e_touchingFlag = 16, Box2D.Dynamics.Contacts.b2Contact.e_enabledFlag = 32, Box2D.Dynamics.Contacts.b2Contact.e_filterFlag = 64, Box2D.Dynamics.Contacts.b2Contact.s_input = new L
	}), r.b2ContactConstraint = function() {
		this.localPlaneNormal = new w, this.localPoint = new w, this.normal = new w, this.normalMass = new C, this.K = new C
	}, r.prototype.b2ContactConstraint = function() {
		this.points = new Vector(b.b2_maxManifoldPoints);
		for (var t = 0; t < b.b2_maxManifoldPoints; t++) this.points[t] = new a
	}, a.b2ContactConstraintPoint = function() {
		this.localPoint = new w, this.rA = new w, this.rB = new w
	}, h.b2ContactEdge = function() {}, l.b2ContactFactory = function() {}, l.prototype.b2ContactFactory = function(t) {
		this.m_allocator = t, this.InitializeRegisters()
	}, l.prototype.AddType = function(t, e, i, n) {
		void 0 === i && (i = 0), void 0 === n && (n = 0), this.m_registers[i][n].createFcn = t, this.m_registers[i][n].destroyFcn = e, this.m_registers[i][n].primary = !0, i != n && (this.m_registers[n][i].createFcn = t, this.m_registers[n][i].destroyFcn = e, this.m_registers[n][i].primary = !1)
	}, l.prototype.InitializeRegisters = function() {
		this.m_registers = new Vector(n.e_shapeTypeCount);
		for (var t = 0; t < n.e_shapeTypeCount; t++) {
			this.m_registers[t] = new Vector(n.e_shapeTypeCount);
			for (var e = 0; e < n.e_shapeTypeCount; e++) this.m_registers[t][e] = new p
		}
		this.AddType(o.Create, o.Destroy, n.e_circleShape, n.e_circleShape), this.AddType(_.Create, _.Destroy, n.e_polygonShape, n.e_circleShape), this.AddType(f.Create, f.Destroy, n.e_polygonShape, n.e_polygonShape), this.AddType(d.Create, d.Destroy, n.e_edgeShape, n.e_circleShape), this.AddType(y.Create, y.Destroy, n.e_polygonShape, n.e_edgeShape)
	}, l.prototype.Create = function(t, e) {
		var i = parseInt(t.GetType()),
			n = parseInt(e.GetType()),
			i = this.m_registers[i][n];
		return i.pool ? (n = i.pool, i.pool = n.m_next, i.poolCount--, n.Reset(t, e), n) : (n = i.createFcn, null != n ? (i.primary ? (n = n(this.m_allocator), n.Reset(t, e)) : (n = n(this.m_allocator), n.Reset(e, t)), n) : null)
	}, l.prototype.Destroy = function(t) {
		0 < t.m_manifold.m_pointCount && (t.m_fixtureA.m_body.SetAwake(!0), t.m_fixtureB.m_body.SetAwake(!0));
		var e = parseInt(t.m_fixtureA.GetType()),
			i = parseInt(t.m_fixtureB.GetType()),
			e = this.m_registers[e][i];
		e.poolCount++, t.m_next = e.pool, e.pool = t, (e = e.destroyFcn)(t, this.m_allocator)
	}, p.b2ContactRegister = function() {}, c.b2ContactResult = function() {
		this.position = new w, this.normal = new w, this.id = new D
	}, u.b2ContactSolver = function() {
		this.m_step = new x, this.m_constraints = new Vector
	}, u.prototype.b2ContactSolver = function() {}, u.prototype.Initialize = function(t, e, i, n) {
		void 0 === i && (i = 0);
		var o;
		for (this.m_step.Set(t), this.m_allocator = n, t = 0, this.m_constraintCount = i; this.m_constraints.length < this.m_constraintCount;) this.m_constraints[this.m_constraints.length] = new r;
		for (t = 0; i > t; ++t) {
			o = e[t], n = o.m_fixtureA;
			var s = o.m_fixtureB,
				a = n.m_shape.m_radius,
				h = s.m_shape.m_radius,
				l = n.m_body,
				p = s.m_body,
				c = o.GetManifold(),
				d = b.b2MixFriction(n.GetFriction(), s.GetFriction()),
				m = b.b2MixRestitution(n.GetRestitution(), s.GetRestitution()),
				_ = l.m_linearVelocity.x,
				y = l.m_linearVelocity.y,
				f = p.m_linearVelocity.x,
				g = p.m_linearVelocity.y,
				v = l.m_angularVelocity,
				x = p.m_angularVelocity;
			for (b.b2Assert(0 < c.m_pointCount), u.s_worldManifold.Initialize(c, l.m_xf, a, p.m_xf, h), s = u.s_worldManifold.m_normal.x, o = u.s_worldManifold.m_normal.y, n = this.m_constraints[t], n.bodyA = l, n.bodyB = p, n.manifold = c, n.normal.x = s, n.normal.y = o, n.pointCount = c.m_pointCount, n.friction = d, n.restitution = m, n.localPlaneNormal.x = c.m_localPlaneNormal.x, n.localPlaneNormal.y = c.m_localPlaneNormal.y, n.localPoint.x = c.m_localPoint.x, n.localPoint.y = c.m_localPoint.y, n.radius = a + h, n.type = c.m_type, a = 0; a < n.pointCount; ++a) {
				d = c.m_points[a], h = n.points[a], h.normalImpulse = d.m_normalImpulse, h.tangentImpulse = d.m_tangentImpulse, h.localPoint.SetV(d.m_localPoint);
				var d = h.rA.x = u.s_worldManifold.m_points[a].x - l.m_sweep.c.x,
					m = h.rA.y = u.s_worldManifold.m_points[a].y - l.m_sweep.c.y,
					C = h.rB.x = u.s_worldManifold.m_points[a].x - p.m_sweep.c.x,
					E = h.rB.y = u.s_worldManifold.m_points[a].y - p.m_sweep.c.y,
					w = d * o - m * s,
					A = C * o - E * s,
					w = w * w,
					A = A * A;
				h.normalMass = 1 / (l.m_invMass + p.m_invMass + l.m_invI * w + p.m_invI * A);
				var D = l.m_mass * l.m_invMass + p.m_mass * p.m_invMass,
					D = D + (l.m_mass * l.m_invI * w + p.m_mass * p.m_invI * A);
				h.equalizedMass = 1 / D, A = o, D = -s, w = d * D - m * A, A = C * D - E * A, w *= w, A *= A, h.tangentMass = 1 / (l.m_invMass + p.m_invMass + l.m_invI * w + p.m_invI * A), h.velocityBias = 0, d = n.normal.x * (f + -x * E - _ - -v * m) + n.normal.y * (g + x * C - y - v * d), d < -b.b2_velocityThreshold && (h.velocityBias += -n.restitution * d)
			}
			2 == n.pointCount && (g = n.points[0], f = n.points[1], c = l.m_invMass, l = l.m_invI, _ = p.m_invMass, p = p.m_invI, y = g.rA.x * o - g.rA.y * s, g = g.rB.x * o - g.rB.y * s, v = f.rA.x * o - f.rA.y * s, f = f.rB.x * o - f.rB.y * s, s = c + _ + l * y * y + p * g * g, o = c + _ + l * v * v + p * f * f, p = c + _ + l * y * v + p * g * f, 100 * (s * o - p * p) > s * s ? (n.K.col1.Set(s, p), n.K.col2.Set(p, o), n.K.GetInverse(n.normalMass)) : n.pointCount = 1)
		}
	}, u.prototype.InitVelocityConstraints = function(t) {
		for (var e = 0; e < this.m_constraintCount; ++e) {
			var i = this.m_constraints[e],
				n = i.bodyA,
				o = i.bodyB,
				s = n.m_invMass,
				r = n.m_invI,
				a = o.m_invMass,
				h = o.m_invI,
				l = i.normal.x,
				p = i.normal.y,
				c = p,
				u = -l,
				d = 0,
				m = 0;
			if (t.warmStarting) for (m = i.pointCount, d = 0; m > d; ++d) {
				var _ = i.points[d];
				_.normalImpulse *= t.dtRatio, _.tangentImpulse *= t.dtRatio;
				var y = _.normalImpulse * l + _.tangentImpulse * c,
					f = _.normalImpulse * p + _.tangentImpulse * u;
				n.m_angularVelocity -= r * (_.rA.x * f - _.rA.y * y), n.m_linearVelocity.x -= s * y, n.m_linearVelocity.y -= s * f, o.m_angularVelocity += h * (_.rB.x * f - _.rB.y * y), o.m_linearVelocity.x += a * y, o.m_linearVelocity.y += a * f
			} else for (m = i.pointCount, d = 0; m > d; ++d) n = i.points[d], n.normalImpulse = 0, n.tangentImpulse = 0
		}
	}, u.prototype.SolveVelocityConstraints = function() {
		for (var t, e, i = 0, n = 0, o = 0, s = 0, r = o = o = n = n = 0, a = n = n = 0, h = n = s = 0, l = 0, p = 0; p < this.m_constraintCount; ++p) {
			var s = this.m_constraints[p],
				c = s.bodyA,
				u = s.bodyB,
				d = c.m_angularVelocity,
				m = u.m_angularVelocity,
				_ = c.m_linearVelocity,
				y = u.m_linearVelocity,
				f = c.m_invMass,
				g = c.m_invI,
				v = u.m_invMass,
				x = u.m_invI,
				h = s.normal.x,
				b = l = s.normal.y;
			for (e = -h, a = s.friction, i = 0; i < s.pointCount; i++) t = s.points[i], n = y.x - m * t.rB.y - _.x + d * t.rA.y, o = y.y + m * t.rB.x - _.y - d * t.rA.x, n = n * b + o * e, n = t.tangentMass * -n, o = a * t.normalImpulse, o = E.Clamp(t.tangentImpulse + n, -o, o), n = o - t.tangentImpulse, r = n * b, n *= e, _.x -= f * r, _.y -= f * n, d -= g * (t.rA.x * n - t.rA.y * r), y.x += v * r, y.y += v * n, m += x * (t.rB.x * n - t.rB.y * r), t.tangentImpulse = o;
			if (parseInt(s.pointCount), 1 == s.pointCount) t = s.points[0], n = y.x + -m * t.rB.y - _.x - -d * t.rA.y, o = y.y + m * t.rB.x - _.y - d * t.rA.x, s = n * h + o * l, n = -t.normalMass * (s - t.velocityBias), o = t.normalImpulse + n, o = o > 0 ? o : 0, n = o - t.normalImpulse, r = n * h, n *= l, _.x -= f * r, _.y -= f * n, d -= g * (t.rA.x * n - t.rA.y * r), y.x += v * r, y.y += v * n, m += x * (t.rB.x * n - t.rB.y * r), t.normalImpulse = o;
			else {
				t = s.points[0];
				var i = s.points[1],
					n = t.normalImpulse,
					a = i.normalImpulse,
					C = (y.x - m * t.rB.y - _.x + d * t.rA.y) * h + (y.y + m * t.rB.x - _.y - d * t.rA.x) * l,
					w = (y.x - m * i.rB.y - _.x + d * i.rA.y) * h + (y.y + m * i.rB.x - _.y - d * i.rA.x) * l,
					o = C - t.velocityBias,
					r = w - i.velocityBias;
				for (e = s.K, o -= e.col1.x * n + e.col2.x * a, r -= e.col1.y * n + e.col2.y * a;;) {
					if (e = s.normalMass, b = -(e.col1.x * o + e.col2.x * r), e = -(e.col1.y * o + e.col2.y * r), b >= 0 && e >= 0) {
						n = b - n, a = e - a, s = n * h, n *= l, h *= a, l *= a, _.x -= f * (s + h), _.y -= f * (n + l), d -= g * (t.rA.x * n - t.rA.y * s + i.rA.x * l - i.rA.y * h), y.x += v * (s + h), y.y += v * (n + l), m += x * (t.rB.x * n - t.rB.y * s + i.rB.x * l - i.rB.y * h), t.normalImpulse = b, i.normalImpulse = e;
						break
					}
					if (b = -t.normalMass * o, e = 0, w = s.K.col1.y * b + r, b >= 0 && w >= 0) {
						n = b - n, a = e - a, s = n * h, n *= l, h *= a, l *= a, _.x -= f * (s + h), _.y -= f * (n + l), d -= g * (t.rA.x * n - t.rA.y * s + i.rA.x * l - i.rA.y * h), y.x += v * (s + h), y.y += v * (n + l), m += x * (t.rB.x * n - t.rB.y * s + i.rB.x * l - i.rB.y * h), t.normalImpulse = b, i.normalImpulse = e;
						break
					}
					if (b = 0, e = -i.normalMass * r, C = s.K.col2.x * e + o, e >= 0 && C >= 0) {
						n = b - n, a = e - a, s = n * h, n *= l, h *= a, l *= a, _.x -= f * (s + h), _.y -= f * (n + l), d -= g * (t.rA.x * n - t.rA.y * s + i.rA.x * l - i.rA.y * h), y.x += v * (s + h), y.y += v * (n + l), m += x * (t.rB.x * n - t.rB.y * s + i.rB.x * l - i.rB.y * h), t.normalImpulse = b, i.normalImpulse = e;
						break
					}
					if (e = b = 0, C = o, w = r, C >= 0 && w >= 0) {
						n = b - n, a = e - a, s = n * h, n *= l, h *= a, l *= a, _.x -= f * (s + h), _.y -= f * (n + l), d -= g * (t.rA.x * n - t.rA.y * s + i.rA.x * l - i.rA.y * h), y.x += v * (s + h), y.y += v * (n + l), m += x * (t.rB.x * n - t.rB.y * s + i.rB.x * l - i.rB.y * h), t.normalImpulse = b, i.normalImpulse = e;
						break
					}
					break
				}
			}
			c.m_angularVelocity = d, u.m_angularVelocity = m
		}
	}, u.prototype.FinalizeVelocityConstraints = function() {
		for (var t = 0; t < this.m_constraintCount; ++t) for (var e = this.m_constraints[t], i = e.manifold, n = 0; n < e.pointCount; ++n) {
			var o = i.m_points[n],
				s = e.points[n];
			o.m_normalImpulse = s.normalImpulse, o.m_tangentImpulse = s.tangentImpulse
		}
	}, u.prototype.SolvePositionConstraints = function(t) {
		void 0 === t && (t = 0);
		for (var e = 0, i = 0; i < this.m_constraintCount; i++) {
			var n = this.m_constraints[i],
				o = n.bodyA,
				s = n.bodyB,
				r = o.m_mass * o.m_invMass,
				a = o.m_mass * o.m_invI,
				h = s.m_mass * s.m_invMass,
				l = s.m_mass * s.m_invI;
			u.s_psm.Initialize(n);
			for (var p = u.s_psm.m_normal, c = 0; c < n.pointCount; c++) {
				var d = n.points[c],
					m = u.s_psm.m_points[c],
					_ = u.s_psm.m_separations[c],
					y = m.x - o.m_sweep.c.x,
					f = m.y - o.m_sweep.c.y,
					g = m.x - s.m_sweep.c.x,
					m = m.y - s.m_sweep.c.y,
					e = _ > e ? e : _,
					_ = E.Clamp(t * (_ + b.b2_linearSlop), -b.b2_maxLinearCorrection, 0),
					_ = -d.equalizedMass * _,
					d = _ * p.x,
					_ = _ * p.y;
				o.m_sweep.c.x -= r * d, o.m_sweep.c.y -= r * _, o.m_sweep.a -= a * (y * _ - f * d), o.SynchronizeTransform(), s.m_sweep.c.x += h * d, s.m_sweep.c.y += h * _, s.m_sweep.a += l * (g * _ - m * d), s.SynchronizeTransform()
			}
		}
		return e > -1.5 * b.b2_linearSlop
	}, Box2D.postDefs.push(function() {
		Box2D.Dynamics.Contacts.b2ContactSolver.s_worldManifold = new B, Box2D.Dynamics.Contacts.b2ContactSolver.s_psm = new g
	}), Box2D.inherit(d, Box2D.Dynamics.Contacts.b2Contact), d.prototype.__super = Box2D.Dynamics.Contacts.b2Contact.prototype, d.b2EdgeAndCircleContact = function() {
		Box2D.Dynamics.Contacts.b2Contact.b2Contact.apply(this, arguments)
	}, d.Create = function() {
		return new d
	}, d.Destroy = function() {}, d.prototype.Reset = function(t, e) {
		this.__super.Reset.call(this, t, e)
	}, d.prototype.Evaluate = function() {
		var i = this.m_fixtureA.GetBody(),
			n = this.m_fixtureB.GetBody();
		this.b2CollideEdgeAndCircle(this.m_manifold, this.m_fixtureA.GetShape() instanceof e ? this.m_fixtureA.GetShape() : null, i.m_xf, this.m_fixtureB.GetShape() instanceof t ? this.m_fixtureB.GetShape() : null, n.m_xf)
	}, d.prototype.b2CollideEdgeAndCircle = function() {}, Box2D.inherit(m, Box2D.Dynamics.Contacts.b2Contact), m.prototype.__super = Box2D.Dynamics.Contacts.b2Contact.prototype, m.b2NullContact = function() {
		Box2D.Dynamics.Contacts.b2Contact.b2Contact.apply(this, arguments)
	}, m.prototype.b2NullContact = function() {
		this.__super.b2Contact.call(this)
	}, m.prototype.Evaluate = function() {}, Box2D.inherit(_, Box2D.Dynamics.Contacts.b2Contact), _.prototype.__super = Box2D.Dynamics.Contacts.b2Contact.prototype, _.b2PolyAndCircleContact = function() {
		Box2D.Dynamics.Contacts.b2Contact.b2Contact.apply(this, arguments)
	}, _.Create = function() {
		return new _
	}, _.Destroy = function() {}, _.prototype.Reset = function(t, e) {
		this.__super.Reset.call(this, t, e), b.b2Assert(t.GetType() == n.e_polygonShape), b.b2Assert(e.GetType() == n.e_circleShape)
	}, _.prototype.Evaluate = function() {
		var e = this.m_fixtureA.m_body,
			n = this.m_fixtureB.m_body;
		A.CollidePolygonAndCircle(this.m_manifold, this.m_fixtureA.GetShape() instanceof i ? this.m_fixtureA.GetShape() : null, e.m_xf, this.m_fixtureB.GetShape() instanceof t ? this.m_fixtureB.GetShape() : null, n.m_xf)
	}, Box2D.inherit(y, Box2D.Dynamics.Contacts.b2Contact), y.prototype.__super = Box2D.Dynamics.Contacts.b2Contact.prototype, y.b2PolyAndEdgeContact = function() {
		Box2D.Dynamics.Contacts.b2Contact.b2Contact.apply(this, arguments)
	}, y.Create = function() {
		return new y
	}, y.Destroy = function() {}, y.prototype.Reset = function(t, e) {
		this.__super.Reset.call(this, t, e), b.b2Assert(t.GetType() == n.e_polygonShape), b.b2Assert(e.GetType() == n.e_edgeShape)
	}, y.prototype.Evaluate = function() {
		var t = this.m_fixtureA.GetBody(),
			n = this.m_fixtureB.GetBody();
		this.b2CollidePolyAndEdge(this.m_manifold, this.m_fixtureA.GetShape() instanceof i ? this.m_fixtureA.GetShape() : null, t.m_xf, this.m_fixtureB.GetShape() instanceof e ? this.m_fixtureB.GetShape() : null, n.m_xf)
	}, y.prototype.b2CollidePolyAndEdge = function() {}, Box2D.inherit(f, Box2D.Dynamics.Contacts.b2Contact), f.prototype.__super = Box2D.Dynamics.Contacts.b2Contact.prototype, f.b2PolygonContact = function() {
		Box2D.Dynamics.Contacts.b2Contact.b2Contact.apply(this, arguments)
	}, f.Create = function() {
		return new f
	}, f.Destroy = function() {}, f.prototype.Reset = function(t, e) {
		this.__super.Reset.call(this, t, e)
	}, f.prototype.Evaluate = function() {
		var t = this.m_fixtureA.GetBody(),
			e = this.m_fixtureB.GetBody();
		A.CollidePolygons(this.m_manifold, this.m_fixtureA.GetShape() instanceof i ? this.m_fixtureA.GetShape() : null, t.m_xf, this.m_fixtureB.GetShape() instanceof i ? this.m_fixtureB.GetShape() : null, e.m_xf)
	}, g.b2PositionSolverManifold = function() {}, g.prototype.b2PositionSolverManifold = function() {
		this.m_normal = new w, this.m_separations = new Vector_a2j_Number(b.b2_maxManifoldPoints), this.m_points = new Vector(b.b2_maxManifoldPoints);
		for (var t = 0; t < b.b2_maxManifoldPoints; t++) this.m_points[t] = new w
	}, g.prototype.Initialize = function(t) {
		b.b2Assert(0 < t.pointCount);
		var e, i = 0,
			n = 0,
			o = 0,
			s = 0,
			r = 0;
		switch (t.type) {
		case S.e_circles:
			e = t.bodyA.m_xf.R, o = t.localPoint, i = t.bodyA.m_xf.position.x + (e.col1.x * o.x + e.col2.x * o.y), n = t.bodyA.m_xf.position.y + (e.col1.y * o.x + e.col2.y * o.y), e = t.bodyB.m_xf.R, o = t.points[0].localPoint, s = t.bodyB.m_xf.position.x + (e.col1.x * o.x + e.col2.x * o.y), e = t.bodyB.m_xf.position.y + (e.col1.y * o.x + e.col2.y * o.y);
			var o = s - i,
				r = e - n,
				a = o * o + r * r;
			a > Number.MIN_VALUE * Number.MIN_VALUE ? (a = Math.sqrt(a), this.m_normal.x = o / a, this.m_normal.y = r / a) : (this.m_normal.x = 1, this.m_normal.y = 0), this.m_points[0].x = .5 * (i + s), this.m_points[0].y = .5 * (n + e), this.m_separations[0] = o * this.m_normal.x + r * this.m_normal.y - t.radius;
			break;
		case S.e_faceA:
			for (e = t.bodyA.m_xf.R, o = t.localPlaneNormal, this.m_normal.x = e.col1.x * o.x + e.col2.x * o.y, this.m_normal.y = e.col1.y * o.x + e.col2.y * o.y, e = t.bodyA.m_xf.R, o = t.localPoint, s = t.bodyA.m_xf.position.x + (e.col1.x * o.x + e.col2.x * o.y), r = t.bodyA.m_xf.position.y + (e.col1.y * o.x + e.col2.y * o.y), e = t.bodyB.m_xf.R, i = 0; i < t.pointCount; ++i) o = t.points[i].localPoint, n = t.bodyB.m_xf.position.x + (e.col1.x * o.x + e.col2.x * o.y), o = t.bodyB.m_xf.position.y + (e.col1.y * o.x + e.col2.y * o.y), this.m_separations[i] = (n - s) * this.m_normal.x + (o - r) * this.m_normal.y - t.radius, this.m_points[i].x = n, this.m_points[i].y = o;
			break;
		case S.e_faceB:
			for (e = t.bodyB.m_xf.R, o = t.localPlaneNormal, this.m_normal.x = e.col1.x * o.x + e.col2.x * o.y, this.m_normal.y = e.col1.y * o.x + e.col2.y * o.y, e = t.bodyB.m_xf.R, o = t.localPoint, s = t.bodyB.m_xf.position.x + (e.col1.x * o.x + e.col2.x * o.y), r = t.bodyB.m_xf.position.y + (e.col1.y * o.x + e.col2.y * o.y), e = t.bodyA.m_xf.R, i = 0; i < t.pointCount; ++i) o = t.points[i].localPoint, n = t.bodyA.m_xf.position.x + (e.col1.x * o.x + e.col2.x * o.y), o = t.bodyA.m_xf.position.y + (e.col1.y * o.x + e.col2.y * o.y), this.m_separations[i] = (n - s) * this.m_normal.x + (o - r) * this.m_normal.y - t.radius, this.m_points[i].Set(n, o);
			this.m_normal.x *= -1, this.m_normal.y *= -1
		}
	}, Box2D.postDefs.push(function() {
		Box2D.Dynamics.Contacts.b2PositionSolverManifold.circlePointA = new w, Box2D.Dynamics.Contacts.b2PositionSolverManifold.circlePointB = new w
	})
}(), function() {
	var t = Box2D.Common.Math.b2Mat22,
		e = Box2D.Common.Math.b2Math,
		i = Box2D.Common.Math.b2Vec2,
		n = Box2D.Common.b2Color,
		o = Box2D.Dynamics.Controllers.b2BuoyancyController,
		s = Box2D.Dynamics.Controllers.b2ConstantAccelController,
		r = Box2D.Dynamics.Controllers.b2ConstantForceController,
		a = Box2D.Dynamics.Controllers.b2Controller,
		h = Box2D.Dynamics.Controllers.b2ControllerEdge,
		l = Box2D.Dynamics.Controllers.b2GravityController,
		p = Box2D.Dynamics.Controllers.b2TensorDampingController;
	Box2D.inherit(o, Box2D.Dynamics.Controllers.b2Controller), o.prototype.__super = Box2D.Dynamics.Controllers.b2Controller.prototype, o.b2BuoyancyController = function() {
		Box2D.Dynamics.Controllers.b2Controller.b2Controller.apply(this, arguments), this.normal = new i(0, -1), this.density = this.offset = 0, this.velocity = new i(0, 0), this.linearDrag = 2, this.angularDrag = 1, this.useDensity = !1, this.useWorldGravity = !0, this.gravity = null
	}, o.prototype.Step = function(t) {
		if (this.m_bodyList) for (this.useWorldGravity && (this.gravity = this.GetWorld().GetGravity().Copy()), t = this.m_bodyList; t; t = t.nextBody) {
			var e = t.body;
			if (0 != e.IsAwake()) {
				for (var n = new i, o = new i, s = 0, r = 0, a = e.GetFixtureList(); a; a = a.GetNext()) {
					var h = new i,
						l = a.GetShape().ComputeSubmergedArea(this.normal, this.offset, e.GetTransform(), h),
						s = s + l;
					n.x += l * h.x, n.y += l * h.y;
					var p = 0,
						p = 1,
						r = r + l * p;
					o.x += l * h.x * p, o.y += l * h.y * p
				}
				n.x /= s, n.y /= s, o.x /= r, o.y /= r, s < Number.MIN_VALUE || (r = this.gravity.GetNegative(), r.Multiply(this.density * s), e.ApplyForce(r, o), o = e.GetLinearVelocityFromWorldPoint(n), o.Subtract(this.velocity), o.Multiply(-this.linearDrag * s), e.ApplyForce(o, n), e.ApplyTorque(-e.GetInertia() / e.GetMass() * s * e.GetAngularVelocity() * this.angularDrag))
			}
		}
	}, o.prototype.Draw = function(t) {
		var e = new i,
			o = new i;
		e.x = this.normal.x * this.offset + 1e3 * this.normal.y, e.y = this.normal.y * this.offset - 1e3 * this.normal.x, o.x = this.normal.x * this.offset - 1e3 * this.normal.y, o.y = this.normal.y * this.offset + 1e3 * this.normal.x;
		var s = new n(0, 0, 1);
		t.DrawSegment(e, o, s)
	}, Box2D.inherit(s, Box2D.Dynamics.Controllers.b2Controller), s.prototype.__super = Box2D.Dynamics.Controllers.b2Controller.prototype, s.b2ConstantAccelController = function() {
		Box2D.Dynamics.Controllers.b2Controller.b2Controller.apply(this, arguments), this.A = new i(0, 0)
	}, s.prototype.Step = function(t) {
		t = new i(this.A.x * t.dt, this.A.y * t.dt);
		for (var e = this.m_bodyList; e; e = e.nextBody) {
			var n = e.body;
			n.IsAwake() && n.SetLinearVelocity(new i(n.GetLinearVelocity().x + t.x, n.GetLinearVelocity().y + t.y))
		}
	}, Box2D.inherit(r, Box2D.Dynamics.Controllers.b2Controller), r.prototype.__super = Box2D.Dynamics.Controllers.b2Controller.prototype, r.b2ConstantForceController = function() {
		Box2D.Dynamics.Controllers.b2Controller.b2Controller.apply(this, arguments), this.F = new i(0, 0)
	}, r.prototype.Step = function(t) {
		for (t = this.m_bodyList; t; t = t.nextBody) {
			var e = t.body;
			e.IsAwake() && e.ApplyForce(this.F, e.GetWorldCenter())
		}
	}, a.b2Controller = function() {}, a.prototype.Step = function() {}, a.prototype.Draw = function() {}, a.prototype.AddBody = function(t) {
		var e = new h;
		e.controller = this, e.body = t, e.nextBody = this.m_bodyList, e.prevBody = null, this.m_bodyList = e, e.nextBody && (e.nextBody.prevBody = e), this.m_bodyCount++, e.nextController = t.m_controllerList, e.prevController = null, t.m_controllerList = e, e.nextController && (e.nextController.prevController = e), t.m_controllerCount++
	}, a.prototype.RemoveBody = function(t) {
		for (var e = t.m_controllerList; e && e.controller != this;) e = e.nextController;
		e.prevBody && (e.prevBody.nextBody = e.nextBody), e.nextBody && (e.nextBody.prevBody = e.prevBody), e.nextController && (e.nextController.prevController = e.prevController), e.prevController && (e.prevController.nextController = e.nextController), this.m_bodyList == e && (this.m_bodyList = e.nextBody), t.m_controllerList == e && (t.m_controllerList = e.nextController), t.m_controllerCount--, this.m_bodyCount--
	}, a.prototype.Clear = function() {
		for (; this.m_bodyList;) this.RemoveBody(this.m_bodyList.body)
	}, a.prototype.GetNext = function() {
		return this.m_next
	}, a.prototype.GetWorld = function() {
		return this.m_world
	}, a.prototype.GetBodyList = function() {
		return this.m_bodyList
	}, h.b2ControllerEdge = function() {}, Box2D.inherit(l, Box2D.Dynamics.Controllers.b2Controller), l.prototype.__super = Box2D.Dynamics.Controllers.b2Controller.prototype, l.b2GravityController = function() {
		Box2D.Dynamics.Controllers.b2Controller.b2Controller.apply(this, arguments), this.G = 1, this.invSqr = !0
	}, l.prototype.Step = function(t) {
		var e = t = null,
			n = null,
			o = 0,
			s = null,
			r = null,
			a = null,
			h = 0,
			l = 0,
			p = 0,
			h = null;
		if (this.invSqr) for (t = this.m_bodyList; t; t = t.nextBody) for (e = t.body, n = e.GetWorldCenter(), o = e.GetMass(), s = this.m_bodyList; s != t; s = s.nextBody) r = s.body, a = r.GetWorldCenter(), h = a.x - n.x, l = a.y - n.y, p = h * h + l * l, p < Number.MIN_VALUE || (h = new i(h, l), h.Multiply(this.G / p / Math.sqrt(p) * o * r.GetMass()), e.IsAwake() && e.ApplyForce(h, n), h.Multiply(-1), r.IsAwake() && r.ApplyForce(h, a));
		else for (t = this.m_bodyList; t; t = t.nextBody) for (e = t.body, n = e.GetWorldCenter(), o = e.GetMass(), s = this.m_bodyList; s != t; s = s.nextBody) r = s.body, a = r.GetWorldCenter(), h = a.x - n.x, l = a.y - n.y, p = h * h + l * l, p < Number.MIN_VALUE || (h = new i(h, l), h.Multiply(this.G / p * o * r.GetMass()), e.IsAwake() && e.ApplyForce(h, n), h.Multiply(-1), r.IsAwake() && r.ApplyForce(h, a))
	}, Box2D.inherit(p, Box2D.Dynamics.Controllers.b2Controller), p.prototype.__super = Box2D.Dynamics.Controllers.b2Controller.prototype, p.b2TensorDampingController = function() {
		Box2D.Dynamics.Controllers.b2Controller.b2Controller.apply(this, arguments), this.T = new t, this.maxTimestep = 0
	}, p.prototype.SetAxisAligned = function(t, e) {
		void 0 === t && (t = 0), void 0 === e && (e = 0), this.T.col1.x = -t, this.T.col1.y = 0, this.T.col2.x = 0, this.T.col2.y = -e, this.maxTimestep = t > 0 || e > 0 ? 1 / Math.max(t, e) : 0
	}, p.prototype.Step = function(t) {
		if (t = t.dt, !(t <= Number.MIN_VALUE)) {
			t > this.maxTimestep && 0 < this.maxTimestep && (t = this.maxTimestep);
			for (var n = this.m_bodyList; n; n = n.nextBody) {
				var o = n.body;
				if (o.IsAwake()) {
					var s = o.GetWorldVector(e.MulMV(this.T, o.GetLocalVector(o.GetLinearVelocity())));
					o.SetLinearVelocity(new i(o.GetLinearVelocity().x + s.x * t, o.GetLinearVelocity().y + s.y * t))
				}
			}
		}
	}
}(), function() {
	var t = Box2D.Common.b2Settings,
		e = Box2D.Common.Math.b2Mat22,
		i = Box2D.Common.Math.b2Mat33,
		n = Box2D.Common.Math.b2Math,
		o = Box2D.Common.Math.b2Vec2,
		s = Box2D.Common.Math.b2Vec3,
		r = Box2D.Dynamics.Joints.b2DistanceJoint,
		a = Box2D.Dynamics.Joints.b2DistanceJointDef,
		h = Box2D.Dynamics.Joints.b2FrictionJoint,
		l = Box2D.Dynamics.Joints.b2FrictionJointDef,
		p = Box2D.Dynamics.Joints.b2GearJoint,
		c = Box2D.Dynamics.Joints.b2GearJointDef,
		u = Box2D.Dynamics.Joints.b2Jacobian,
		d = Box2D.Dynamics.Joints.b2Joint,
		m = Box2D.Dynamics.Joints.b2JointDef,
		_ = Box2D.Dynamics.Joints.b2JointEdge,
		y = Box2D.Dynamics.Joints.b2LineJoint,
		f = Box2D.Dynamics.Joints.b2LineJointDef,
		g = Box2D.Dynamics.Joints.b2MouseJoint,
		v = Box2D.Dynamics.Joints.b2MouseJointDef,
		x = Box2D.Dynamics.Joints.b2PrismaticJoint,
		b = Box2D.Dynamics.Joints.b2PrismaticJointDef,
		C = Box2D.Dynamics.Joints.b2PulleyJoint,
		E = Box2D.Dynamics.Joints.b2PulleyJointDef,
		w = Box2D.Dynamics.Joints.b2RevoluteJoint,
		A = Box2D.Dynamics.Joints.b2RevoluteJointDef,
		D = Box2D.Dynamics.Joints.b2WeldJoint,
		S = Box2D.Dynamics.Joints.b2WeldJointDef;
	Box2D.inherit(r, Box2D.Dynamics.Joints.b2Joint), r.prototype.__super = Box2D.Dynamics.Joints.b2Joint.prototype, r.b2DistanceJoint = function() {
		Box2D.Dynamics.Joints.b2Joint.b2Joint.apply(this, arguments), this.m_localAnchor1 = new o, this.m_localAnchor2 = new o, this.m_u = new o
	}, r.prototype.GetAnchorA = function() {
		return this.m_bodyA.GetWorldPoint(this.m_localAnchor1)
	}, r.prototype.GetAnchorB = function() {
		return this.m_bodyB.GetWorldPoint(this.m_localAnchor2)
	}, r.prototype.GetReactionForce = function(t) {
		return void 0 === t && (t = 0), new o(t * this.m_impulse * this.m_u.x, t * this.m_impulse * this.m_u.y)
	}, r.prototype.GetReactionTorque = function() {
		return 0
	}, r.prototype.GetLength = function() {
		return this.m_length
	}, r.prototype.SetLength = function(t) {
		void 0 === t && (t = 0), this.m_length = t
	}, r.prototype.GetFrequency = function() {
		return this.m_frequencyHz
	}, r.prototype.SetFrequency = function(t) {
		void 0 === t && (t = 0), this.m_frequencyHz = t
	}, r.prototype.GetDampingRatio = function() {
		return this.m_dampingRatio
	}, r.prototype.SetDampingRatio = function(t) {
		void 0 === t && (t = 0), this.m_dampingRatio = t
	}, r.prototype.b2DistanceJoint = function(t) {
		this.__super.b2Joint.call(this, t), this.m_localAnchor1.SetV(t.localAnchorA), this.m_localAnchor2.SetV(t.localAnchorB), this.m_length = t.length, this.m_frequencyHz = t.frequencyHz, this.m_dampingRatio = t.dampingRatio, this.m_bias = this.m_gamma = this.m_impulse = 0
	}, r.prototype.InitVelocityConstraints = function(e) {
		var i, n = 0,
			o = this.m_bodyA,
			s = this.m_bodyB;
		i = o.m_xf.R;
		var r = this.m_localAnchor1.x - o.m_sweep.localCenter.x,
			a = this.m_localAnchor1.y - o.m_sweep.localCenter.y,
			n = i.col1.x * r + i.col2.x * a,
			a = i.col1.y * r + i.col2.y * a,
			r = n;
		i = s.m_xf.R;
		var h = this.m_localAnchor2.x - s.m_sweep.localCenter.x,
			l = this.m_localAnchor2.y - s.m_sweep.localCenter.y,
			n = i.col1.x * h + i.col2.x * l,
			l = i.col1.y * h + i.col2.y * l,
			h = n;
		this.m_u.x = s.m_sweep.c.x + h - o.m_sweep.c.x - r, this.m_u.y = s.m_sweep.c.y + l - o.m_sweep.c.y - a, n = Math.sqrt(this.m_u.x * this.m_u.x + this.m_u.y * this.m_u.y), n > t.b2_linearSlop ? this.m_u.Multiply(1 / n) : this.m_u.SetZero(), i = r * this.m_u.y - a * this.m_u.x;
		var p = h * this.m_u.y - l * this.m_u.x;
		if (i = o.m_invMass + o.m_invI * i * i + s.m_invMass + s.m_invI * p * p, this.m_mass = 0 != i ? 1 / i : 0, 0 < this.m_frequencyHz) {
			var n = n - this.m_length,
				p = 2 * Math.PI * this.m_frequencyHz,
				c = this.m_mass * p * p;
			this.m_gamma = e.dt * (2 * this.m_mass * this.m_dampingRatio * p + e.dt * c), this.m_gamma = 0 != this.m_gamma ? 1 / this.m_gamma : 0, this.m_bias = n * e.dt * c * this.m_gamma, this.m_mass = i + this.m_gamma, this.m_mass = 0 != this.m_mass ? 1 / this.m_mass : 0
		}
		e.warmStarting ? (this.m_impulse *= e.dtRatio, e = this.m_impulse * this.m_u.x, i = this.m_impulse * this.m_u.y, o.m_linearVelocity.x -= o.m_invMass * e, o.m_linearVelocity.y -= o.m_invMass * i, o.m_angularVelocity -= o.m_invI * (r * i - a * e), s.m_linearVelocity.x += s.m_invMass * e, s.m_linearVelocity.y += s.m_invMass * i, s.m_angularVelocity += s.m_invI * (h * i - l * e)) : this.m_impulse = 0
	}, r.prototype.SolveVelocityConstraints = function(t) {
		var e;
		t = this.m_bodyA;
		var i = this.m_bodyB;
		e = t.m_xf.R;
		var n = this.m_localAnchor1.x - t.m_sweep.localCenter.x,
			o = this.m_localAnchor1.y - t.m_sweep.localCenter.y,
			s = e.col1.x * n + e.col2.x * o,
			o = e.col1.y * n + e.col2.y * o,
			n = s;
		e = i.m_xf.R;
		var r = this.m_localAnchor2.x - i.m_sweep.localCenter.x,
			a = this.m_localAnchor2.y - i.m_sweep.localCenter.y,
			s = e.col1.x * r + e.col2.x * a,
			a = e.col1.y * r + e.col2.y * a,
			r = s,
			s = -this.m_mass * (this.m_u.x * (i.m_linearVelocity.x + -i.m_angularVelocity * a - (t.m_linearVelocity.x + -t.m_angularVelocity * o)) + this.m_u.y * (i.m_linearVelocity.y + i.m_angularVelocity * r - (t.m_linearVelocity.y + t.m_angularVelocity * n)) + this.m_bias + this.m_gamma * this.m_impulse);
		this.m_impulse += s, e = s * this.m_u.x, s *= this.m_u.y, t.m_linearVelocity.x -= t.m_invMass * e, t.m_linearVelocity.y -= t.m_invMass * s, t.m_angularVelocity -= t.m_invI * (n * s - o * e), i.m_linearVelocity.x += i.m_invMass * e, i.m_linearVelocity.y += i.m_invMass * s, i.m_angularVelocity += i.m_invI * (r * s - a * e)
	}, r.prototype.SolvePositionConstraints = function(e) {
		var i;
		if (0 < this.m_frequencyHz) return !0;
		e = this.m_bodyA;
		var o = this.m_bodyB;
		i = e.m_xf.R;
		var s = this.m_localAnchor1.x - e.m_sweep.localCenter.x,
			r = this.m_localAnchor1.y - e.m_sweep.localCenter.y,
			a = i.col1.x * s + i.col2.x * r,
			r = i.col1.y * s + i.col2.y * r,
			s = a;
		i = o.m_xf.R;
		var h = this.m_localAnchor2.x - o.m_sweep.localCenter.x,
			l = this.m_localAnchor2.y - o.m_sweep.localCenter.y,
			a = i.col1.x * h + i.col2.x * l,
			l = i.col1.y * h + i.col2.y * l,
			h = a,
			a = o.m_sweep.c.x + h - e.m_sweep.c.x - s,
			p = o.m_sweep.c.y + l - e.m_sweep.c.y - r;
		i = Math.sqrt(a * a + p * p), a /= i, p /= i, i -= this.m_length, i = n.Clamp(i, -t.b2_maxLinearCorrection, t.b2_maxLinearCorrection);
		var c = -this.m_mass * i;
		return this.m_u.Set(a, p), a = c * this.m_u.x, p = c * this.m_u.y, e.m_sweep.c.x -= e.m_invMass * a, e.m_sweep.c.y -= e.m_invMass * p, e.m_sweep.a -= e.m_invI * (s * p - r * a), o.m_sweep.c.x += o.m_invMass * a, o.m_sweep.c.y += o.m_invMass * p, o.m_sweep.a += o.m_invI * (h * p - l * a), e.SynchronizeTransform(), o.SynchronizeTransform(), n.Abs(i) < t.b2_linearSlop
	}, Box2D.inherit(a, Box2D.Dynamics.Joints.b2JointDef), a.prototype.__super = Box2D.Dynamics.Joints.b2JointDef.prototype, a.b2DistanceJointDef = function() {
		Box2D.Dynamics.Joints.b2JointDef.b2JointDef.apply(this, arguments), this.localAnchorA = new o, this.localAnchorB = new o
	}, a.prototype.b2DistanceJointDef = function() {
		this.__super.b2JointDef.call(this), this.type = d.e_distanceJoint, this.length = 1, this.dampingRatio = this.frequencyHz = 0
	}, a.prototype.Initialize = function(t, e, i, n) {
		this.bodyA = t, this.bodyB = e, this.localAnchorA.SetV(this.bodyA.GetLocalPoint(i)), this.localAnchorB.SetV(this.bodyB.GetLocalPoint(n)), t = n.x - i.x, i = n.y - i.y, this.length = Math.sqrt(t * t + i * i), this.dampingRatio = this.frequencyHz = 0
	}, Box2D.inherit(h, Box2D.Dynamics.Joints.b2Joint), h.prototype.__super = Box2D.Dynamics.Joints.b2Joint.prototype, h.b2FrictionJoint = function() {
		Box2D.Dynamics.Joints.b2Joint.b2Joint.apply(this, arguments), this.m_localAnchorA = new o, this.m_localAnchorB = new o, this.m_linearMass = new e, this.m_linearImpulse = new o
	}, h.prototype.GetAnchorA = function() {
		return this.m_bodyA.GetWorldPoint(this.m_localAnchorA)
	}, h.prototype.GetAnchorB = function() {
		return this.m_bodyB.GetWorldPoint(this.m_localAnchorB)
	}, h.prototype.GetReactionForce = function(t) {
		return void 0 === t && (t = 0), new o(t * this.m_linearImpulse.x, t * this.m_linearImpulse.y)
	}, h.prototype.GetReactionTorque = function(t) {
		return void 0 === t && (t = 0), t * this.m_angularImpulse
	}, h.prototype.SetMaxForce = function(t) {
		void 0 === t && (t = 0), this.m_maxForce = t
	}, h.prototype.GetMaxForce = function() {
		return this.m_maxForce
	}, h.prototype.SetMaxTorque = function(t) {
		void 0 === t && (t = 0), this.m_maxTorque = t
	}, h.prototype.GetMaxTorque = function() {
		return this.m_maxTorque
	}, h.prototype.b2FrictionJoint = function(t) {
		this.__super.b2Joint.call(this, t), this.m_localAnchorA.SetV(t.localAnchorA), this.m_localAnchorB.SetV(t.localAnchorB), this.m_linearMass.SetZero(), this.m_angularMass = 0, this.m_linearImpulse.SetZero(), this.m_angularImpulse = 0, this.m_maxForce = t.maxForce, this.m_maxTorque = t.maxTorque
	}, h.prototype.InitVelocityConstraints = function(t) {
		var i, n = 0,
			o = this.m_bodyA,
			s = this.m_bodyB;
		i = o.m_xf.R;
		var r = this.m_localAnchorA.x - o.m_sweep.localCenter.x,
			a = this.m_localAnchorA.y - o.m_sweep.localCenter.y,
			n = i.col1.x * r + i.col2.x * a,
			a = i.col1.y * r + i.col2.y * a,
			r = n;
		i = s.m_xf.R;
		var h = this.m_localAnchorB.x - s.m_sweep.localCenter.x,
			l = this.m_localAnchorB.y - s.m_sweep.localCenter.y,
			n = i.col1.x * h + i.col2.x * l,
			l = i.col1.y * h + i.col2.y * l,
			h = n;
		i = o.m_invMass;
		var n = s.m_invMass,
			p = o.m_invI,
			c = s.m_invI,
			u = new e;
		u.col1.x = i + n, u.col2.x = 0, u.col1.y = 0, u.col2.y = i + n, u.col1.x += p * a * a, u.col2.x += -p * r * a, u.col1.y += -p * r * a, u.col2.y += p * r * r, u.col1.x += c * l * l, u.col2.x += -c * h * l, u.col1.y += -c * h * l, u.col2.y += c * h * h, u.GetInverse(this.m_linearMass), this.m_angularMass = p + c, 0 < this.m_angularMass && (this.m_angularMass = 1 / this.m_angularMass), t.warmStarting ? (this.m_linearImpulse.x *= t.dtRatio, this.m_linearImpulse.y *= t.dtRatio, this.m_angularImpulse *= t.dtRatio, t = this.m_linearImpulse, o.m_linearVelocity.x -= i * t.x, o.m_linearVelocity.y -= i * t.y, o.m_angularVelocity -= p * (r * t.y - a * t.x + this.m_angularImpulse), s.m_linearVelocity.x += n * t.x, s.m_linearVelocity.y += n * t.y, s.m_angularVelocity += c * (h * t.y - l * t.x + this.m_angularImpulse)) : (this.m_linearImpulse.SetZero(), this.m_angularImpulse = 0)
	}, h.prototype.SolveVelocityConstraints = function(t) {
		var e, i = 0,
			s = this.m_bodyA,
			r = this.m_bodyB,
			a = s.m_linearVelocity,
			h = s.m_angularVelocity,
			l = r.m_linearVelocity,
			p = r.m_angularVelocity,
			c = s.m_invMass,
			u = r.m_invMass,
			d = s.m_invI,
			m = r.m_invI;
		e = s.m_xf.R;
		var _ = this.m_localAnchorA.x - s.m_sweep.localCenter.x,
			y = this.m_localAnchorA.y - s.m_sweep.localCenter.y,
			i = e.col1.x * _ + e.col2.x * y,
			y = e.col1.y * _ + e.col2.y * y,
			_ = i;
		e = r.m_xf.R;
		var f = this.m_localAnchorB.x - r.m_sweep.localCenter.x,
			g = this.m_localAnchorB.y - r.m_sweep.localCenter.y,
			i = e.col1.x * f + e.col2.x * g,
			g = e.col1.y * f + e.col2.y * g,
			f = i;
		e = 0;
		var i = -this.m_angularMass * (p - h),
			v = this.m_angularImpulse;
		e = t.dt * this.m_maxTorque, this.m_angularImpulse = n.Clamp(this.m_angularImpulse + i, -e, e), i = this.m_angularImpulse - v, h -= d * i, p += m * i, e = n.MulMV(this.m_linearMass, new o(-(l.x - p * g - a.x + h * y), -(l.y + p * f - a.y - h * _))), i = this.m_linearImpulse.Copy(), this.m_linearImpulse.Add(e), e = t.dt * this.m_maxForce, this.m_linearImpulse.LengthSquared() > e * e && (this.m_linearImpulse.Normalize(), this.m_linearImpulse.Multiply(e)), e = n.SubtractVV(this.m_linearImpulse, i), a.x -= c * e.x, a.y -= c * e.y, h -= d * (_ * e.y - y * e.x), l.x += u * e.x, l.y += u * e.y, p += m * (f * e.y - g * e.x), s.m_angularVelocity = h, r.m_angularVelocity = p
	}, h.prototype.SolvePositionConstraints = function() {
		return !0
	}, Box2D.inherit(l, Box2D.Dynamics.Joints.b2JointDef), l.prototype.__super = Box2D.Dynamics.Joints.b2JointDef.prototype, l.b2FrictionJointDef = function() {
		Box2D.Dynamics.Joints.b2JointDef.b2JointDef.apply(this, arguments), this.localAnchorA = new o, this.localAnchorB = new o
	}, l.prototype.b2FrictionJointDef = function() {
		this.__super.b2JointDef.call(this), this.type = d.e_frictionJoint, this.maxTorque = this.maxForce = 0
	}, l.prototype.Initialize = function(t, e, i) {
		this.bodyA = t, this.bodyB = e, this.localAnchorA.SetV(this.bodyA.GetLocalPoint(i)), this.localAnchorB.SetV(this.bodyB.GetLocalPoint(i))
	}, Box2D.inherit(p, Box2D.Dynamics.Joints.b2Joint), p.prototype.__super = Box2D.Dynamics.Joints.b2Joint.prototype, p.b2GearJoint = function() {
		Box2D.Dynamics.Joints.b2Joint.b2Joint.apply(this, arguments), this.m_groundAnchor1 = new o, this.m_groundAnchor2 = new o, this.m_localAnchor1 = new o, this.m_localAnchor2 = new o, this.m_J = new u
	}, p.prototype.GetAnchorA = function() {
		return this.m_bodyA.GetWorldPoint(this.m_localAnchor1)
	}, p.prototype.GetAnchorB = function() {
		return this.m_bodyB.GetWorldPoint(this.m_localAnchor2)
	}, p.prototype.GetReactionForce = function(t) {
		return void 0 === t && (t = 0), new o(t * this.m_impulse * this.m_J.linearB.x, t * this.m_impulse * this.m_J.linearB.y)
	}, p.prototype.GetReactionTorque = function(t) {
		void 0 === t && (t = 0);
		var e = this.m_bodyB.m_xf.R,
			i = this.m_localAnchor1.x - this.m_bodyB.m_sweep.localCenter.x,
			n = this.m_localAnchor1.y - this.m_bodyB.m_sweep.localCenter.y,
			o = e.col1.x * i + e.col2.x * n,
			n = e.col1.y * i + e.col2.y * n;
		return t * (this.m_impulse * this.m_J.angularB - o * this.m_impulse * this.m_J.linearB.y + n * this.m_impulse * this.m_J.linearB.x)
	}, p.prototype.GetRatio = function() {
		return this.m_ratio
	}, p.prototype.SetRatio = function(t) {
		void 0 === t && (t = 0), this.m_ratio = t
	}, p.prototype.b2GearJoint = function(t) {
		this.__super.b2Joint.call(this, t);
		var e = parseInt(t.joint1.m_type),
			i = parseInt(t.joint2.m_type);
		this.m_prismatic2 = this.m_revolute2 = this.m_prismatic1 = this.m_revolute1 = null;
		var n = 0,
			o = 0;
		this.m_ground1 = t.joint1.GetBodyA(), this.m_bodyA = t.joint1.GetBodyB(), e == d.e_revoluteJoint ? (this.m_revolute1 = t.joint1 instanceof w ? t.joint1 : null, this.m_groundAnchor1.SetV(this.m_revolute1.m_localAnchor1), this.m_localAnchor1.SetV(this.m_revolute1.m_localAnchor2), n = this.m_revolute1.GetJointAngle()) : (this.m_prismatic1 = t.joint1 instanceof x ? t.joint1 : null, this.m_groundAnchor1.SetV(this.m_prismatic1.m_localAnchor1), this.m_localAnchor1.SetV(this.m_prismatic1.m_localAnchor2), n = this.m_prismatic1.GetJointTranslation()), this.m_ground2 = t.joint2.GetBodyA(), this.m_bodyB = t.joint2.GetBodyB(), i == d.e_revoluteJoint ? (this.m_revolute2 = t.joint2 instanceof w ? t.joint2 : null, this.m_groundAnchor2.SetV(this.m_revolute2.m_localAnchor1), this.m_localAnchor2.SetV(this.m_revolute2.m_localAnchor2), o = this.m_revolute2.GetJointAngle()) : (this.m_prismatic2 = t.joint2 instanceof x ? t.joint2 : null, this.m_groundAnchor2.SetV(this.m_prismatic2.m_localAnchor1), this.m_localAnchor2.SetV(this.m_prismatic2.m_localAnchor2), o = this.m_prismatic2.GetJointTranslation()), this.m_ratio = t.ratio, this.m_constant = n + this.m_ratio * o, this.m_impulse = 0
	}, p.prototype.InitVelocityConstraints = function(t) {
		var e = this.m_ground1,
			i = this.m_ground2,
			n = this.m_bodyA,
			o = this.m_bodyB,
			s = 0,
			r = 0,
			a = 0,
			h = 0,
			l = a = 0,
			p = 0;
		this.m_J.SetZero(), this.m_revolute1 ? (this.m_J.angularA = -1, p += n.m_invI) : (e = e.m_xf.R, r = this.m_prismatic1.m_localXAxis1, s = e.col1.x * r.x + e.col2.x * r.y, r = e.col1.y * r.x + e.col2.y * r.y, e = n.m_xf.R, a = this.m_localAnchor1.x - n.m_sweep.localCenter.x, h = this.m_localAnchor1.y - n.m_sweep.localCenter.y, l = e.col1.x * a + e.col2.x * h, h = e.col1.y * a + e.col2.y * h, a = l * r - h * s, this.m_J.linearA.Set(-s, -r), this.m_J.angularA = -a, p += n.m_invMass + n.m_invI * a * a), this.m_revolute2 ? (this.m_J.angularB = -this.m_ratio, p += this.m_ratio * this.m_ratio * o.m_invI) : (e = i.m_xf.R, r = this.m_prismatic2.m_localXAxis1, s = e.col1.x * r.x + e.col2.x * r.y, r = e.col1.y * r.x + e.col2.y * r.y, e = o.m_xf.R, a = this.m_localAnchor2.x - o.m_sweep.localCenter.x, h = this.m_localAnchor2.y - o.m_sweep.localCenter.y, l = e.col1.x * a + e.col2.x * h, h = e.col1.y * a + e.col2.y * h, a = l * r - h * s, this.m_J.linearB.Set(-this.m_ratio * s, -this.m_ratio * r), this.m_J.angularB = -this.m_ratio * a, p += this.m_ratio * this.m_ratio * (o.m_invMass + o.m_invI * a * a)), this.m_mass = p > 0 ? 1 / p : 0, t.warmStarting ? (n.m_linearVelocity.x += n.m_invMass * this.m_impulse * this.m_J.linearA.x, n.m_linearVelocity.y += n.m_invMass * this.m_impulse * this.m_J.linearA.y, n.m_angularVelocity += n.m_invI * this.m_impulse * this.m_J.angularA, o.m_linearVelocity.x += o.m_invMass * this.m_impulse * this.m_J.linearB.x, o.m_linearVelocity.y += o.m_invMass * this.m_impulse * this.m_J.linearB.y, o.m_angularVelocity += o.m_invI * this.m_impulse * this.m_J.angularB) : this.m_impulse = 0
	}, p.prototype.SolveVelocityConstraints = function(t) {
		t = this.m_bodyA;
		var e = this.m_bodyB,
			i = this.m_J.Compute(t.m_linearVelocity, t.m_angularVelocity, e.m_linearVelocity, e.m_angularVelocity),
			i = -this.m_mass * i;
		this.m_impulse += i, t.m_linearVelocity.x += t.m_invMass * i * this.m_J.linearA.x, t.m_linearVelocity.y += t.m_invMass * i * this.m_J.linearA.y, t.m_angularVelocity += t.m_invI * i * this.m_J.angularA, e.m_linearVelocity.x += e.m_invMass * i * this.m_J.linearB.x, e.m_linearVelocity.y += e.m_invMass * i * this.m_J.linearB.y, e.m_angularVelocity += e.m_invI * i * this.m_J.angularB
	}, p.prototype.SolvePositionConstraints = function(e) {
		e = this.m_bodyA;
		var i = this.m_bodyB,
			n = 0,
			o = 0,
			n = this.m_revolute1 ? this.m_revolute1.GetJointAngle() : this.m_prismatic1.GetJointTranslation(),
			o = this.m_revolute2 ? this.m_revolute2.GetJointAngle() : this.m_prismatic2.GetJointTranslation(),
			n = -this.m_mass * (this.m_constant - (n + this.m_ratio * o));
		return e.m_sweep.c.x += e.m_invMass * n * this.m_J.linearA.x, e.m_sweep.c.y += e.m_invMass * n * this.m_J.linearA.y, e.m_sweep.a += e.m_invI * n * this.m_J.angularA, i.m_sweep.c.x += i.m_invMass * n * this.m_J.linearB.x, i.m_sweep.c.y += i.m_invMass * n * this.m_J.linearB.y, i.m_sweep.a += i.m_invI * n * this.m_J.angularB, e.SynchronizeTransform(), i.SynchronizeTransform(), 0 < t.b2_linearSlop
	}, Box2D.inherit(c, Box2D.Dynamics.Joints.b2JointDef), c.prototype.__super = Box2D.Dynamics.Joints.b2JointDef.prototype, c.b2GearJointDef = function() {
		Box2D.Dynamics.Joints.b2JointDef.b2JointDef.apply(this, arguments)
	}, c.prototype.b2GearJointDef = function() {
		this.__super.b2JointDef.call(this), this.type = d.e_gearJoint, this.joint2 = this.joint1 = null, this.ratio = 1
	}, u.b2Jacobian = function() {
		this.linearA = new o, this.linearB = new o
	}, u.prototype.SetZero = function() {
		this.linearA.SetZero(), this.angularA = 0, this.linearB.SetZero(), this.angularB = 0
	}, u.prototype.Set = function(t, e, i, n) {
		void 0 === e && (e = 0), void 0 === n && (n = 0), this.linearA.SetV(t), this.angularA = e, this.linearB.SetV(i), this.angularB = n
	}, u.prototype.Compute = function(t, e, i, n) {
		return void 0 === e && (e = 0), void 0 === n && (n = 0), this.linearA.x * t.x + this.linearA.y * t.y + this.angularA * e + (this.linearB.x * i.x + this.linearB.y * i.y) + this.angularB * n
	}, d.b2Joint = function() {
		this.m_edgeA = new _, this.m_edgeB = new _, this.m_localCenterA = new o, this.m_localCenterB = new o
	}, d.prototype.GetType = function() {
		return this.m_type
	}, d.prototype.GetAnchorA = function() {
		return null
	}, d.prototype.GetAnchorB = function() {
		return null
	}, d.prototype.GetReactionForce = function() {
		return null
	}, d.prototype.GetReactionTorque = function() {
		return 0
	}, d.prototype.GetBodyA = function() {
		return this.m_bodyA
	}, d.prototype.GetBodyB = function() {
		return this.m_bodyB
	}, d.prototype.GetNext = function() {
		return this.m_next
	}, d.prototype.GetUserData = function() {
		return this.m_userData
	}, d.prototype.SetUserData = function(t) {
		this.m_userData = t
	}, d.prototype.IsActive = function() {
		return this.m_bodyA.IsActive() && this.m_bodyB.IsActive()
	}, d.Create = function(t) {
		var e = null;
		switch (t.type) {
		case d.e_distanceJoint:
			e = new r(t instanceof a ? t : null);
			break;
		case d.e_mouseJoint:
			e = new g(t instanceof v ? t : null);
			break;
		case d.e_prismaticJoint:
			e = new x(t instanceof b ? t : null);
			break;
		case d.e_revoluteJoint:
			e = new w(t instanceof A ? t : null);
			break;
		case d.e_pulleyJoint:
			e = new C(t instanceof E ? t : null);
			break;
		case d.e_gearJoint:
			e = new p(t instanceof c ? t : null);
			break;
		case d.e_lineJoint:
			e = new y(t instanceof f ? t : null);
			break;
		case d.e_weldJoint:
			e = new D(t instanceof S ? t : null);
			break;
		case d.e_frictionJoint:
			e = new h(t instanceof l ? t : null)
		}
		return e
	}, d.Destroy = function() {}, d.prototype.b2Joint = function(e) {
		t.b2Assert(e.bodyA != e.bodyB), this.m_type = e.type, this.m_next = this.m_prev = null, this.m_bodyA = e.bodyA, this.m_bodyB = e.bodyB, this.m_collideConnected = e.collideConnected, this.m_islandFlag = !1, this.m_userData = e.userData
	}, d.prototype.InitVelocityConstraints = function() {}, d.prototype.SolveVelocityConstraints = function() {}, d.prototype.FinalizeVelocityConstraints = function() {}, d.prototype.SolvePositionConstraints = function() {
		return !1
	}, Box2D.postDefs.push(function() {
		Box2D.Dynamics.Joints.b2Joint.e_unknownJoint = 0, Box2D.Dynamics.Joints.b2Joint.e_revoluteJoint = 1, Box2D.Dynamics.Joints.b2Joint.e_prismaticJoint = 2, Box2D.Dynamics.Joints.b2Joint.e_distanceJoint = 3, Box2D.Dynamics.Joints.b2Joint.e_pulleyJoint = 4, Box2D.Dynamics.Joints.b2Joint.e_mouseJoint = 5, Box2D.Dynamics.Joints.b2Joint.e_gearJoint = 6, Box2D.Dynamics.Joints.b2Joint.e_lineJoint = 7, Box2D.Dynamics.Joints.b2Joint.e_weldJoint = 8, Box2D.Dynamics.Joints.b2Joint.e_frictionJoint = 9, Box2D.Dynamics.Joints.b2Joint.e_inactiveLimit = 0, Box2D.Dynamics.Joints.b2Joint.e_atLowerLimit = 1, Box2D.Dynamics.Joints.b2Joint.e_atUpperLimit = 2, Box2D.Dynamics.Joints.b2Joint.e_equalLimits = 3
	}), m.b2JointDef = function() {}, m.prototype.b2JointDef = function() {
		this.type = d.e_unknownJoint, this.bodyB = this.bodyA = this.userData = null, this.collideConnected = !1
	}, _.b2JointEdge = function() {}, Box2D.inherit(y, Box2D.Dynamics.Joints.b2Joint), y.prototype.__super = Box2D.Dynamics.Joints.b2Joint.prototype, y.b2LineJoint = function() {
		Box2D.Dynamics.Joints.b2Joint.b2Joint.apply(this, arguments), this.m_localAnchor1 = new o, this.m_localAnchor2 = new o, this.m_localXAxis1 = new o, this.m_localYAxis1 = new o, this.m_axis = new o, this.m_perp = new o, this.m_K = new e, this.m_impulse = new o
	}, y.prototype.GetAnchorA = function() {
		return this.m_bodyA.GetWorldPoint(this.m_localAnchor1)
	}, y.prototype.GetAnchorB = function() {
		return this.m_bodyB.GetWorldPoint(this.m_localAnchor2)
	}, y.prototype.GetReactionForce = function(t) {
		return void 0 === t && (t = 0), new o(t * (this.m_impulse.x * this.m_perp.x + (this.m_motorImpulse + this.m_impulse.y) * this.m_axis.x), t * (this.m_impulse.x * this.m_perp.y + (this.m_motorImpulse + this.m_impulse.y) * this.m_axis.y))
	}, y.prototype.GetReactionTorque = function(t) {
		return void 0 === t && (t = 0), t * this.m_impulse.y
	}, y.prototype.GetJointTranslation = function() {
		var t = this.m_bodyA,
			e = this.m_bodyB,
			i = t.GetWorldPoint(this.m_localAnchor1),
			n = e.GetWorldPoint(this.m_localAnchor2),
			e = n.x - i.x,
			i = n.y - i.y,
			t = t.GetWorldVector(this.m_localXAxis1);
		return t.x * e + t.y * i
	}, y.prototype.GetJointSpeed = function() {
		var t, e = this.m_bodyA,
			i = this.m_bodyB;
		t = e.m_xf.R;
		var n = this.m_localAnchor1.x - e.m_sweep.localCenter.x,
			o = this.m_localAnchor1.y - e.m_sweep.localCenter.y,
			s = t.col1.x * n + t.col2.x * o,
			o = t.col1.y * n + t.col2.y * o,
			n = s;
		t = i.m_xf.R;
		var r = this.m_localAnchor2.x - i.m_sweep.localCenter.x,
			a = this.m_localAnchor2.y - i.m_sweep.localCenter.y,
			s = t.col1.x * r + t.col2.x * a,
			a = t.col1.y * r + t.col2.y * a,
			r = s;
		t = i.m_sweep.c.x + r - (e.m_sweep.c.x + n);
		var s = i.m_sweep.c.y + a - (e.m_sweep.c.y + o),
			h = e.GetWorldVector(this.m_localXAxis1),
			l = e.m_linearVelocity,
			p = i.m_linearVelocity,
			e = e.m_angularVelocity,
			i = i.m_angularVelocity;
		return t * -e * h.y + s * e * h.x + (h.x * (p.x + -i * a - l.x - -e * o) + h.y * (p.y + i * r - l.y - e * n))
	}, y.prototype.IsLimitEnabled = function() {
		return this.m_enableLimit
	}, y.prototype.EnableLimit = function(t) {
		this.m_bodyA.SetAwake(!0), this.m_bodyB.SetAwake(!0), this.m_enableLimit = t
	}, y.prototype.GetLowerLimit = function() {
		return this.m_lowerTranslation
	}, y.prototype.GetUpperLimit = function() {
		return this.m_upperTranslation
	}, y.prototype.SetLimits = function(t, e) {
		void 0 === t && (t = 0), void 0 === e && (e = 0), this.m_bodyA.SetAwake(!0), this.m_bodyB.SetAwake(!0), this.m_lowerTranslation = t, this.m_upperTranslation = e
	}, y.prototype.IsMotorEnabled = function() {
		return this.m_enableMotor
	}, y.prototype.EnableMotor = function(t) {
		this.m_bodyA.SetAwake(!0), this.m_bodyB.SetAwake(!0), this.m_enableMotor = t
	}, y.prototype.SetMotorSpeed = function(t) {
		void 0 === t && (t = 0), this.m_bodyA.SetAwake(!0), this.m_bodyB.SetAwake(!0), this.m_motorSpeed = t
	}, y.prototype.GetMotorSpeed = function() {
		return this.m_motorSpeed
	}, y.prototype.SetMaxMotorForce = function(t) {
		void 0 === t && (t = 0), this.m_bodyA.SetAwake(!0), this.m_bodyB.SetAwake(!0), this.m_maxMotorForce = t
	}, y.prototype.GetMaxMotorForce = function() {
		return this.m_maxMotorForce
	}, y.prototype.GetMotorForce = function() {
		return this.m_motorImpulse
	}, y.prototype.b2LineJoint = function(t) {
		this.__super.b2Joint.call(this, t), this.m_localAnchor1.SetV(t.localAnchorA), this.m_localAnchor2.SetV(t.localAnchorB), this.m_localXAxis1.SetV(t.localAxisA), this.m_localYAxis1.x = -this.m_localXAxis1.y, this.m_localYAxis1.y = this.m_localXAxis1.x, this.m_impulse.SetZero(), this.m_motorImpulse = this.m_motorMass = 0, this.m_lowerTranslation = t.lowerTranslation, this.m_upperTranslation = t.upperTranslation, this.m_maxMotorForce = t.maxMotorForce, this.m_motorSpeed = t.motorSpeed, this.m_enableLimit = t.enableLimit, this.m_enableMotor = t.enableMotor, this.m_limitState = d.e_inactiveLimit, this.m_axis.SetZero(), this.m_perp.SetZero()
	}, y.prototype.InitVelocityConstraints = function(e) {
		var i, o = this.m_bodyA,
			s = this.m_bodyB,
			r = 0;
		this.m_localCenterA.SetV(o.GetLocalCenter()), this.m_localCenterB.SetV(s.GetLocalCenter());
		var a = o.GetTransform();
		s.GetTransform(), i = o.m_xf.R;
		var h = this.m_localAnchor1.x - this.m_localCenterA.x,
			l = this.m_localAnchor1.y - this.m_localCenterA.y,
			r = i.col1.x * h + i.col2.x * l,
			l = i.col1.y * h + i.col2.y * l,
			h = r;
		i = s.m_xf.R;
		var p = this.m_localAnchor2.x - this.m_localCenterB.x,
			c = this.m_localAnchor2.y - this.m_localCenterB.y,
			r = i.col1.x * p + i.col2.x * c,
			c = i.col1.y * p + i.col2.y * c,
			p = r;
		i = s.m_sweep.c.x + p - o.m_sweep.c.x - h, r = s.m_sweep.c.y + c - o.m_sweep.c.y - l, this.m_invMassA = o.m_invMass, this.m_invMassB = s.m_invMass, this.m_invIA = o.m_invI, this.m_invIB = s.m_invI, this.m_axis.SetV(n.MulMV(a.R, this.m_localXAxis1)), this.m_a1 = (i + h) * this.m_axis.y - (r + l) * this.m_axis.x, this.m_a2 = p * this.m_axis.y - c * this.m_axis.x, this.m_motorMass = this.m_invMassA + this.m_invMassB + this.m_invIA * this.m_a1 * this.m_a1 + this.m_invIB * this.m_a2 * this.m_a2, this.m_motorMass = this.m_motorMass > Number.MIN_VALUE ? 1 / this.m_motorMass : 0, this.m_perp.SetV(n.MulMV(a.R, this.m_localYAxis1)), this.m_s1 = (i + h) * this.m_perp.y - (r + l) * this.m_perp.x, this.m_s2 = p * this.m_perp.y - c * this.m_perp.x, a = this.m_invMassA, h = this.m_invMassB, l = this.m_invIA, p = this.m_invIB, this.m_K.col1.x = a + h + l * this.m_s1 * this.m_s1 + p * this.m_s2 * this.m_s2, this.m_K.col1.y = l * this.m_s1 * this.m_a1 + p * this.m_s2 * this.m_a2, this.m_K.col2.x = this.m_K.col1.y, this.m_K.col2.y = a + h + l * this.m_a1 * this.m_a1 + p * this.m_a2 * this.m_a2, this.m_enableLimit ? (i = this.m_axis.x * i + this.m_axis.y * r, n.Abs(this.m_upperTranslation - this.m_lowerTranslation) < 2 * t.b2_linearSlop ? this.m_limitState = d.e_equalLimits : i <= this.m_lowerTranslation ? this.m_limitState != d.e_atLowerLimit && (this.m_limitState = d.e_atLowerLimit, this.m_impulse.y = 0) : i >= this.m_upperTranslation ? this.m_limitState != d.e_atUpperLimit && (this.m_limitState = d.e_atUpperLimit, this.m_impulse.y = 0) : (this.m_limitState = d.e_inactiveLimit, this.m_impulse.y = 0)) : this.m_limitState = d.e_inactiveLimit, 0 == this.m_enableMotor && (this.m_motorImpulse = 0), e.warmStarting ? (this.m_impulse.x *= e.dtRatio, this.m_impulse.y *= e.dtRatio, this.m_motorImpulse *= e.dtRatio, e = this.m_impulse.x * this.m_perp.x + (this.m_motorImpulse + this.m_impulse.y) * this.m_axis.x, i = this.m_impulse.x * this.m_perp.y + (this.m_motorImpulse + this.m_impulse.y) * this.m_axis.y, r = this.m_impulse.x * this.m_s1 + (this.m_motorImpulse + this.m_impulse.y) * this.m_a1, a = this.m_impulse.x * this.m_s2 + (this.m_motorImpulse + this.m_impulse.y) * this.m_a2, o.m_linearVelocity.x -= this.m_invMassA * e, o.m_linearVelocity.y -= this.m_invMassA * i, o.m_angularVelocity -= this.m_invIA * r, s.m_linearVelocity.x += this.m_invMassB * e, s.m_linearVelocity.y += this.m_invMassB * i, s.m_angularVelocity += this.m_invIB * a) : (this.m_impulse.SetZero(), this.m_motorImpulse = 0)
	}, y.prototype.SolveVelocityConstraints = function(t) {
		var e = this.m_bodyA,
			i = this.m_bodyB,
			s = e.m_linearVelocity,
			r = e.m_angularVelocity,
			a = i.m_linearVelocity,
			h = i.m_angularVelocity,
			l = 0,
			p = 0,
			c = 0,
			u = 0;
		this.m_enableMotor && this.m_limitState != d.e_equalLimits && (u = this.m_motorMass * (this.m_motorSpeed - (this.m_axis.x * (a.x - s.x) + this.m_axis.y * (a.y - s.y) + this.m_a2 * h - this.m_a1 * r)), l = this.m_motorImpulse, p = t.dt * this.m_maxMotorForce, this.m_motorImpulse = n.Clamp(this.m_motorImpulse + u, -p, p), u = this.m_motorImpulse - l, l = u * this.m_axis.x, p = u * this.m_axis.y, c = u * this.m_a1, u *= this.m_a2, s.x -= this.m_invMassA * l, s.y -= this.m_invMassA * p, r -= this.m_invIA * c, a.x += this.m_invMassB * l, a.y += this.m_invMassB * p, h += this.m_invIB * u), p = this.m_perp.x * (a.x - s.x) + this.m_perp.y * (a.y - s.y) + this.m_s2 * h - this.m_s1 * r, this.m_enableLimit && this.m_limitState != d.e_inactiveLimit ? (c = this.m_axis.x * (a.x - s.x) + this.m_axis.y * (a.y - s.y) + this.m_a2 * h - this.m_a1 * r, l = this.m_impulse.Copy(), t = this.m_K.Solve(new o, -p, -c), this.m_impulse.Add(t), this.m_limitState == d.e_atLowerLimit ? this.m_impulse.y = n.Max(this.m_impulse.y, 0) : this.m_limitState == d.e_atUpperLimit && (this.m_impulse.y = n.Min(this.m_impulse.y, 0)), p = -p - (this.m_impulse.y - l.y) * this.m_K.col2.x, c = 0, c = 0 != this.m_K.col1.x ? p / this.m_K.col1.x + l.x : l.x, this.m_impulse.x = c, t.x = this.m_impulse.x - l.x, t.y = this.m_impulse.y - l.y, l = t.x * this.m_perp.x + t.y * this.m_axis.x, p = t.x * this.m_perp.y + t.y * this.m_axis.y, c = t.x * this.m_s1 + t.y * this.m_a1, u = t.x * this.m_s2 + t.y * this.m_a2) : (t = 0, t = 0 != this.m_K.col1.x ? -p / this.m_K.col1.x : 0, this.m_impulse.x += t, l = t * this.m_perp.x, p = t * this.m_perp.y, c = t * this.m_s1, u = t * this.m_s2), s.x -= this.m_invMassA * l, s.y -= this.m_invMassA * p, r -= this.m_invIA * c, a.x += this.m_invMassB * l, a.y += this.m_invMassB * p, h += this.m_invIB * u, e.m_linearVelocity.SetV(s), e.m_angularVelocity = r, i.m_linearVelocity.SetV(a), i.m_angularVelocity = h
	}, y.prototype.SolvePositionConstraints = function(i) {
		i = this.m_bodyA;
		var s, r = this.m_bodyB,
			a = i.m_sweep.c,
			h = i.m_sweep.a,
			l = r.m_sweep.c,
			p = r.m_sweep.a,
			c = 0,
			u = 0,
			d = 0,
			m = 0,
			_ = s = 0,
			y = 0,
			u = !1,
			f = 0,
			g = e.FromAngle(h),
			d = e.FromAngle(p);
		s = g;
		var y = this.m_localAnchor1.x - this.m_localCenterA.x,
			v = this.m_localAnchor1.y - this.m_localCenterA.y,
			c = s.col1.x * y + s.col2.x * v,
			v = s.col1.y * y + s.col2.y * v,
			y = c;
		if (s = d, d = this.m_localAnchor2.x - this.m_localCenterB.x, m = this.m_localAnchor2.y - this.m_localCenterB.y, c = s.col1.x * d + s.col2.x * m, m = s.col1.y * d + s.col2.y * m, d = c, s = l.x + d - a.x - y, c = l.y + m - a.y - v, this.m_enableLimit) {
			this.m_axis = n.MulMV(g, this.m_localXAxis1), this.m_a1 = (s + y) * this.m_axis.y - (c + v) * this.m_axis.x, this.m_a2 = d * this.m_axis.y - m * this.m_axis.x;
			var x = this.m_axis.x * s + this.m_axis.y * c;
			n.Abs(this.m_upperTranslation - this.m_lowerTranslation) < 2 * t.b2_linearSlop ? (f = n.Clamp(x, -t.b2_maxLinearCorrection, t.b2_maxLinearCorrection), _ = n.Abs(x), u = !0) : x <= this.m_lowerTranslation ? (f = n.Clamp(x - this.m_lowerTranslation + t.b2_linearSlop, -t.b2_maxLinearCorrection, 0), _ = this.m_lowerTranslation - x, u = !0) : x >= this.m_upperTranslation && (f = n.Clamp(x - this.m_upperTranslation + t.b2_linearSlop, 0, t.b2_maxLinearCorrection), _ = x - this.m_upperTranslation, u = !0)
		}
		return this.m_perp = n.MulMV(g, this.m_localYAxis1), this.m_s1 = (s + y) * this.m_perp.y - (c + v) * this.m_perp.x, this.m_s2 = d * this.m_perp.y - m * this.m_perp.x, g = new o, v = this.m_perp.x * s + this.m_perp.y * c, _ = n.Max(_, n.Abs(v)), y = 0, u ? (u = this.m_invMassA, d = this.m_invMassB, m = this.m_invIA, s = this.m_invIB, this.m_K.col1.x = u + d + m * this.m_s1 * this.m_s1 + s * this.m_s2 * this.m_s2, this.m_K.col1.y = m * this.m_s1 * this.m_a1 + s * this.m_s2 * this.m_a2, this.m_K.col2.x = this.m_K.col1.y, this.m_K.col2.y = u + d + m * this.m_a1 * this.m_a1 + s * this.m_a2 * this.m_a2, this.m_K.Solve(g, -v, -f)) : (u = this.m_invMassA, d = this.m_invMassB, m = this.m_invIA, s = this.m_invIB, f = u + d + m * this.m_s1 * this.m_s1 + s * this.m_s2 * this.m_s2, g.x = 0 != f ? -v / f : 0, g.y = 0), f = g.x * this.m_perp.x + g.y * this.m_axis.x, u = g.x * this.m_perp.y + g.y * this.m_axis.y, v = g.x * this.m_s1 + g.y * this.m_a1, g = g.x * this.m_s2 + g.y * this.m_a2, a.x -= this.m_invMassA * f, a.y -= this.m_invMassA * u, h -= this.m_invIA * v, l.x += this.m_invMassB * f, l.y += this.m_invMassB * u, p += this.m_invIB * g, i.m_sweep.a = h, r.m_sweep.a = p, i.SynchronizeTransform(), r.SynchronizeTransform(), _ <= t.b2_linearSlop && y <= t.b2_angularSlop
	}, Box2D.inherit(f, Box2D.Dynamics.Joints.b2JointDef), f.prototype.__super = Box2D.Dynamics.Joints.b2JointDef.prototype, f.b2LineJointDef = function() {
		Box2D.Dynamics.Joints.b2JointDef.b2JointDef.apply(this, arguments), this.localAnchorA = new o, this.localAnchorB = new o, this.localAxisA = new o
	}, f.prototype.b2LineJointDef = function() {
		this.__super.b2JointDef.call(this), this.type = d.e_lineJoint, this.localAxisA.Set(1, 0), this.enableLimit = !1, this.upperTranslation = this.lowerTranslation = 0, this.enableMotor = !1, this.motorSpeed = this.maxMotorForce = 0
	}, f.prototype.Initialize = function(t, e, i, n) {
		this.bodyA = t, this.bodyB = e, this.localAnchorA = this.bodyA.GetLocalPoint(i), this.localAnchorB = this.bodyB.GetLocalPoint(i), this.localAxisA = this.bodyA.GetLocalVector(n)
	}, Box2D.inherit(g, Box2D.Dynamics.Joints.b2Joint), g.prototype.__super = Box2D.Dynamics.Joints.b2Joint.prototype, g.b2MouseJoint = function() {
		Box2D.Dynamics.Joints.b2Joint.b2Joint.apply(this, arguments), this.K = new e, this.K1 = new e, this.K2 = new e, this.m_localAnchor = new o, this.m_target = new o, this.m_impulse = new o, this.m_mass = new e, this.m_C = new o
	}, g.prototype.GetAnchorA = function() {
		return this.m_target
	}, g.prototype.GetAnchorB = function() {
		return this.m_bodyB.GetWorldPoint(this.m_localAnchor)
	}, g.prototype.GetReactionForce = function(t) {
		return void 0 === t && (t = 0), new o(t * this.m_impulse.x, t * this.m_impulse.y)
	}, g.prototype.GetReactionTorque = function() {
		return 0
	}, g.prototype.GetTarget = function() {
		return this.m_target
	}, g.prototype.SetTarget = function(t) {
		0 == this.m_bodyB.IsAwake() && this.m_bodyB.SetAwake(!0), this.m_target = t
	}, g.prototype.GetMaxForce = function() {
		return this.m_maxForce
	}, g.prototype.SetMaxForce = function(t) {
		void 0 === t && (t = 0), this.m_maxForce = t
	}, g.prototype.GetFrequency = function() {
		return this.m_frequencyHz
	}, g.prototype.SetFrequency = function(t) {
		void 0 === t && (t = 0), this.m_frequencyHz = t
	}, g.prototype.GetDampingRatio = function() {
		return this.m_dampingRatio
	}, g.prototype.SetDampingRatio = function(t) {
		void 0 === t && (t = 0), this.m_dampingRatio = t
	}, g.prototype.b2MouseJoint = function(t) {
		this.__super.b2Joint.call(this, t), this.m_target.SetV(t.target);
		var e = this.m_target.x - this.m_bodyB.m_xf.position.x,
			i = this.m_target.y - this.m_bodyB.m_xf.position.y,
			n = this.m_bodyB.m_xf.R;
		this.m_localAnchor.x = e * n.col1.x + i * n.col1.y, this.m_localAnchor.y = e * n.col2.x + i * n.col2.y, this.m_maxForce = t.maxForce, this.m_impulse.SetZero(), this.m_frequencyHz = t.frequencyHz, this.m_dampingRatio = t.dampingRatio, this.m_gamma = this.m_beta = 0
	}, g.prototype.InitVelocityConstraints = function(t) {
		var e = this.m_bodyB,
			i = e.GetMass(),
			n = 2 * Math.PI * this.m_frequencyHz,
			o = i * n * n;
		this.m_gamma = t.dt * (2 * i * this.m_dampingRatio * n + t.dt * o), this.m_gamma = 0 != this.m_gamma ? 1 / this.m_gamma : 0, this.m_beta = t.dt * o * this.m_gamma;
		var o = e.m_xf.R,
			i = this.m_localAnchor.x - e.m_sweep.localCenter.x,
			n = this.m_localAnchor.y - e.m_sweep.localCenter.y,
			s = o.col1.x * i + o.col2.x * n,
			n = o.col1.y * i + o.col2.y * n,
			i = s,
			o = e.m_invMass,
			s = e.m_invI;
		this.K1.col1.x = o, this.K1.col2.x = 0, this.K1.col1.y = 0, this.K1.col2.y = o, this.K2.col1.x = s * n * n, this.K2.col2.x = -s * i * n, this.K2.col1.y = -s * i * n, this.K2.col2.y = s * i * i, this.K.SetM(this.K1), this.K.AddM(this.K2), this.K.col1.x += this.m_gamma, this.K.col2.y += this.m_gamma, this.K.GetInverse(this.m_mass), this.m_C.x = e.m_sweep.c.x + i - this.m_target.x, this.m_C.y = e.m_sweep.c.y + n - this.m_target.y, e.m_angularVelocity *= .98, this.m_impulse.x *= t.dtRatio, this.m_impulse.y *= t.dtRatio, e.m_linearVelocity.x += o * this.m_impulse.x, e.m_linearVelocity.y += o * this.m_impulse.y, e.m_angularVelocity += s * (i * this.m_impulse.y - n * this.m_impulse.x)
	}, g.prototype.SolveVelocityConstraints = function(t) {
		var e, i = this.m_bodyB,
			n = 0,
			o = 0;
		e = i.m_xf.R;
		var s = this.m_localAnchor.x - i.m_sweep.localCenter.x,
			r = this.m_localAnchor.y - i.m_sweep.localCenter.y,
			n = e.col1.x * s + e.col2.x * r,
			r = e.col1.y * s + e.col2.y * r,
			s = n,
			n = i.m_linearVelocity.x + -i.m_angularVelocity * r,
			a = i.m_linearVelocity.y + i.m_angularVelocity * s;
		e = this.m_mass, n = n + this.m_beta * this.m_C.x + this.m_gamma * this.m_impulse.x, o = a + this.m_beta * this.m_C.y + this.m_gamma * this.m_impulse.y, a = -(e.col1.x * n + e.col2.x * o), o = -(e.col1.y * n + e.col2.y * o), e = this.m_impulse.x, n = this.m_impulse.y, this.m_impulse.x += a, this.m_impulse.y += o, t = t.dt * this.m_maxForce, this.m_impulse.LengthSquared() > t * t && this.m_impulse.Multiply(t / this.m_impulse.Length()), a = this.m_impulse.x - e, o = this.m_impulse.y - n, i.m_linearVelocity.x += i.m_invMass * a, i.m_linearVelocity.y += i.m_invMass * o, i.m_angularVelocity += i.m_invI * (s * o - r * a)
	}, g.prototype.SolvePositionConstraints = function() {
		return !0
	}, Box2D.inherit(v, Box2D.Dynamics.Joints.b2JointDef), v.prototype.__super = Box2D.Dynamics.Joints.b2JointDef.prototype, v.b2MouseJointDef = function() {
		Box2D.Dynamics.Joints.b2JointDef.b2JointDef.apply(this, arguments), this.target = new o
	}, v.prototype.b2MouseJointDef = function() {
		this.__super.b2JointDef.call(this), this.type = d.e_mouseJoint, this.maxForce = 0, this.frequencyHz = 5, this.dampingRatio = .7
	}, Box2D.inherit(x, Box2D.Dynamics.Joints.b2Joint), x.prototype.__super = Box2D.Dynamics.Joints.b2Joint.prototype, x.b2PrismaticJoint = function() {
		Box2D.Dynamics.Joints.b2Joint.b2Joint.apply(this, arguments), this.m_localAnchor1 = new o, this.m_localAnchor2 = new o, this.m_localXAxis1 = new o, this.m_localYAxis1 = new o, this.m_axis = new o, this.m_perp = new o, this.m_K = new i, this.m_impulse = new s
	}, x.prototype.GetAnchorA = function() {
		return this.m_bodyA.GetWorldPoint(this.m_localAnchor1)
	}, x.prototype.GetAnchorB = function() {
		return this.m_bodyB.GetWorldPoint(this.m_localAnchor2)
	}, x.prototype.GetReactionForce = function(t) {
		return void 0 === t && (t = 0), new o(t * (this.m_impulse.x * this.m_perp.x + (this.m_motorImpulse + this.m_impulse.z) * this.m_axis.x), t * (this.m_impulse.x * this.m_perp.y + (this.m_motorImpulse + this.m_impulse.z) * this.m_axis.y))
	}, x.prototype.GetReactionTorque = function(t) {
		return void 0 === t && (t = 0), t * this.m_impulse.y
	}, x.prototype.GetJointTranslation = function() {
		var t = this.m_bodyA,
			e = this.m_bodyB,
			i = t.GetWorldPoint(this.m_localAnchor1),
			n = e.GetWorldPoint(this.m_localAnchor2),
			e = n.x - i.x,
			i = n.y - i.y,
			t = t.GetWorldVector(this.m_localXAxis1);
		return t.x * e + t.y * i
	}, x.prototype.GetJointSpeed = function() {
		var t, e = this.m_bodyA,
			i = this.m_bodyB;
		t = e.m_xf.R;
		var n = this.m_localAnchor1.x - e.m_sweep.localCenter.x,
			o = this.m_localAnchor1.y - e.m_sweep.localCenter.y,
			s = t.col1.x * n + t.col2.x * o,
			o = t.col1.y * n + t.col2.y * o,
			n = s;
		t = i.m_xf.R;
		var r = this.m_localAnchor2.x - i.m_sweep.localCenter.x,
			a = this.m_localAnchor2.y - i.m_sweep.localCenter.y,
			s = t.col1.x * r + t.col2.x * a,
			a = t.col1.y * r + t.col2.y * a,
			r = s;
		t = i.m_sweep.c.x + r - (e.m_sweep.c.x + n);
		var s = i.m_sweep.c.y + a - (e.m_sweep.c.y + o),
			h = e.GetWorldVector(this.m_localXAxis1),
			l = e.m_linearVelocity,
			p = i.m_linearVelocity,
			e = e.m_angularVelocity,
			i = i.m_angularVelocity;
		return t * -e * h.y + s * e * h.x + (h.x * (p.x + -i * a - l.x - -e * o) + h.y * (p.y + i * r - l.y - e * n))
	}, x.prototype.IsLimitEnabled = function() {
		return this.m_enableLimit
	}, x.prototype.EnableLimit = function(t) {
		this.m_bodyA.SetAwake(!0), this.m_bodyB.SetAwake(!0), this.m_enableLimit = t
	}, x.prototype.GetLowerLimit = function() {
		return this.m_lowerTranslation
	}, x.prototype.GetUpperLimit = function() {
		return this.m_upperTranslation
	}, x.prototype.SetLimits = function(t, e) {
		void 0 === t && (t = 0), void 0 === e && (e = 0), this.m_bodyA.SetAwake(!0), this.m_bodyB.SetAwake(!0), this.m_lowerTranslation = t, this.m_upperTranslation = e
	}, x.prototype.IsMotorEnabled = function() {
		return this.m_enableMotor
	}, x.prototype.EnableMotor = function(t) {
		this.m_bodyA.SetAwake(!0), this.m_bodyB.SetAwake(!0), this.m_enableMotor = t
	}, x.prototype.SetMotorSpeed = function(t) {
		void 0 === t && (t = 0), this.m_bodyA.SetAwake(!0), this.m_bodyB.SetAwake(!0), this.m_motorSpeed = t
	}, x.prototype.GetMotorSpeed = function() {
		return this.m_motorSpeed
	}, x.prototype.SetMaxMotorForce = function(t) {
		void 0 === t && (t = 0), this.m_bodyA.SetAwake(!0), this.m_bodyB.SetAwake(!0), this.m_maxMotorForce = t
	}, x.prototype.GetMotorForce = function() {
		return this.m_motorImpulse
	}, x.prototype.b2PrismaticJoint = function(t) {
		this.__super.b2Joint.call(this, t), this.m_localAnchor1.SetV(t.localAnchorA), this.m_localAnchor2.SetV(t.localAnchorB), this.m_localXAxis1.SetV(t.localAxisA), this.m_localYAxis1.x = -this.m_localXAxis1.y, this.m_localYAxis1.y = this.m_localXAxis1.x, this.m_refAngle = t.referenceAngle, this.m_impulse.SetZero(), this.m_motorImpulse = this.m_motorMass = 0, this.m_lowerTranslation = t.lowerTranslation, this.m_upperTranslation = t.upperTranslation, this.m_maxMotorForce = t.maxMotorForce, this.m_motorSpeed = t.motorSpeed, this.m_enableLimit = t.enableLimit, this.m_enableMotor = t.enableMotor, this.m_limitState = d.e_inactiveLimit, this.m_axis.SetZero(), this.m_perp.SetZero()
	}, x.prototype.InitVelocityConstraints = function(e) {
		var i, o = this.m_bodyA,
			s = this.m_bodyB,
			r = 0;
		this.m_localCenterA.SetV(o.GetLocalCenter()), this.m_localCenterB.SetV(s.GetLocalCenter());
		var a = o.GetTransform();
		s.GetTransform(), i = o.m_xf.R;
		var h = this.m_localAnchor1.x - this.m_localCenterA.x,
			l = this.m_localAnchor1.y - this.m_localCenterA.y,
			r = i.col1.x * h + i.col2.x * l,
			l = i.col1.y * h + i.col2.y * l,
			h = r;
		i = s.m_xf.R;
		var p = this.m_localAnchor2.x - this.m_localCenterB.x,
			c = this.m_localAnchor2.y - this.m_localCenterB.y,
			r = i.col1.x * p + i.col2.x * c,
			c = i.col1.y * p + i.col2.y * c,
			p = r;
		i = s.m_sweep.c.x + p - o.m_sweep.c.x - h, r = s.m_sweep.c.y + c - o.m_sweep.c.y - l, this.m_invMassA = o.m_invMass, this.m_invMassB = s.m_invMass, this.m_invIA = o.m_invI, this.m_invIB = s.m_invI, this.m_axis.SetV(n.MulMV(a.R, this.m_localXAxis1)), this.m_a1 = (i + h) * this.m_axis.y - (r + l) * this.m_axis.x, this.m_a2 = p * this.m_axis.y - c * this.m_axis.x, this.m_motorMass = this.m_invMassA + this.m_invMassB + this.m_invIA * this.m_a1 * this.m_a1 + this.m_invIB * this.m_a2 * this.m_a2, this.m_motorMass > Number.MIN_VALUE && (this.m_motorMass = 1 / this.m_motorMass), this.m_perp.SetV(n.MulMV(a.R, this.m_localYAxis1)), this.m_s1 = (i + h) * this.m_perp.y - (r + l) * this.m_perp.x, this.m_s2 = p * this.m_perp.y - c * this.m_perp.x, a = this.m_invMassA, h = this.m_invMassB, l = this.m_invIA, p = this.m_invIB, this.m_K.col1.x = a + h + l * this.m_s1 * this.m_s1 + p * this.m_s2 * this.m_s2, this.m_K.col1.y = l * this.m_s1 + p * this.m_s2, this.m_K.col1.z = l * this.m_s1 * this.m_a1 + p * this.m_s2 * this.m_a2, this.m_K.col2.x = this.m_K.col1.y, this.m_K.col2.y = l + p, this.m_K.col2.z = l * this.m_a1 + p * this.m_a2, this.m_K.col3.x = this.m_K.col1.z, this.m_K.col3.y = this.m_K.col2.z, this.m_K.col3.z = a + h + l * this.m_a1 * this.m_a1 + p * this.m_a2 * this.m_a2, this.m_enableLimit ? (i = this.m_axis.x * i + this.m_axis.y * r, n.Abs(this.m_upperTranslation - this.m_lowerTranslation) < 2 * t.b2_linearSlop ? this.m_limitState = d.e_equalLimits : i <= this.m_lowerTranslation ? this.m_limitState != d.e_atLowerLimit && (this.m_limitState = d.e_atLowerLimit, this.m_impulse.z = 0) : i >= this.m_upperTranslation ? this.m_limitState != d.e_atUpperLimit && (this.m_limitState = d.e_atUpperLimit, this.m_impulse.z = 0) : (this.m_limitState = d.e_inactiveLimit, this.m_impulse.z = 0)) : this.m_limitState = d.e_inactiveLimit, 0 == this.m_enableMotor && (this.m_motorImpulse = 0), e.warmStarting ? (this.m_impulse.x *= e.dtRatio, this.m_impulse.y *= e.dtRatio, this.m_motorImpulse *= e.dtRatio, e = this.m_impulse.x * this.m_perp.x + (this.m_motorImpulse + this.m_impulse.z) * this.m_axis.x, i = this.m_impulse.x * this.m_perp.y + (this.m_motorImpulse + this.m_impulse.z) * this.m_axis.y, r = this.m_impulse.x * this.m_s1 + this.m_impulse.y + (this.m_motorImpulse + this.m_impulse.z) * this.m_a1, a = this.m_impulse.x * this.m_s2 + this.m_impulse.y + (this.m_motorImpulse + this.m_impulse.z) * this.m_a2, o.m_linearVelocity.x -= this.m_invMassA * e, o.m_linearVelocity.y -= this.m_invMassA * i, o.m_angularVelocity -= this.m_invIA * r, s.m_linearVelocity.x += this.m_invMassB * e, s.m_linearVelocity.y += this.m_invMassB * i, s.m_angularVelocity += this.m_invIB * a) : (this.m_impulse.SetZero(), this.m_motorImpulse = 0)
	}, x.prototype.SolveVelocityConstraints = function(t) {
		var e = this.m_bodyA,
			i = this.m_bodyB,
			r = e.m_linearVelocity,
			a = e.m_angularVelocity,
			h = i.m_linearVelocity,
			l = i.m_angularVelocity,
			p = 0,
			c = 0,
			u = 0,
			m = 0;
		this.m_enableMotor && this.m_limitState != d.e_equalLimits && (m = this.m_motorMass * (this.m_motorSpeed - (this.m_axis.x * (h.x - r.x) + this.m_axis.y * (h.y - r.y) + this.m_a2 * l - this.m_a1 * a)), p = this.m_motorImpulse, t = t.dt * this.m_maxMotorForce, this.m_motorImpulse = n.Clamp(this.m_motorImpulse + m, -t, t), m = this.m_motorImpulse - p, p = m * this.m_axis.x, c = m * this.m_axis.y, u = m * this.m_a1, m *= this.m_a2, r.x -= this.m_invMassA * p, r.y -= this.m_invMassA * c, a -= this.m_invIA * u, h.x += this.m_invMassB * p, h.y += this.m_invMassB * c, l += this.m_invIB * m), u = this.m_perp.x * (h.x - r.x) + this.m_perp.y * (h.y - r.y) + this.m_s2 * l - this.m_s1 * a, c = l - a, this.m_enableLimit && this.m_limitState != d.e_inactiveLimit ? (t = this.m_axis.x * (h.x - r.x) + this.m_axis.y * (h.y - r.y) + this.m_a2 * l - this.m_a1 * a, p = this.m_impulse.Copy(), t = this.m_K.Solve33(new s, -u, -c, -t), this.m_impulse.Add(t), this.m_limitState == d.e_atLowerLimit ? this.m_impulse.z = n.Max(this.m_impulse.z, 0) : this.m_limitState == d.e_atUpperLimit && (this.m_impulse.z = n.Min(this.m_impulse.z, 0)), u = -u - (this.m_impulse.z - p.z) * this.m_K.col3.x, c = -c - (this.m_impulse.z - p.z) * this.m_K.col3.y, c = this.m_K.Solve22(new o, u, c), c.x += p.x, c.y += p.y, this.m_impulse.x = c.x, this.m_impulse.y = c.y, t.x = this.m_impulse.x - p.x, t.y = this.m_impulse.y - p.y, t.z = this.m_impulse.z - p.z, p = t.x * this.m_perp.x + t.z * this.m_axis.x, c = t.x * this.m_perp.y + t.z * this.m_axis.y, u = t.x * this.m_s1 + t.y + t.z * this.m_a1, m = t.x * this.m_s2 + t.y + t.z * this.m_a2) : (t = this.m_K.Solve22(new o, -u, -c), this.m_impulse.x += t.x, this.m_impulse.y += t.y, p = t.x * this.m_perp.x, c = t.x * this.m_perp.y, u = t.x * this.m_s1 + t.y, m = t.x * this.m_s2 + t.y), r.x -= this.m_invMassA * p, r.y -= this.m_invMassA * c, a -= this.m_invIA * u, h.x += this.m_invMassB * p, h.y += this.m_invMassB * c, l += this.m_invIB * m, e.m_linearVelocity.SetV(r), e.m_angularVelocity = a, i.m_linearVelocity.SetV(h), i.m_angularVelocity = l
	}, x.prototype.SolvePositionConstraints = function(i) {
		i = this.m_bodyA;
		var r, a = this.m_bodyB,
			h = i.m_sweep.c,
			l = i.m_sweep.a,
			p = a.m_sweep.c,
			c = a.m_sweep.a,
			u = 0,
			d = 0,
			m = 0,
			_ = u = r = 0,
			y = 0,
			d = !1,
			f = 0,
			g = e.FromAngle(l),
			v = e.FromAngle(c);
		r = g;
		var y = this.m_localAnchor1.x - this.m_localCenterA.x,
			x = this.m_localAnchor1.y - this.m_localCenterA.y,
			u = r.col1.x * y + r.col2.x * x,
			x = r.col1.y * y + r.col2.y * x,
			y = u;
		if (r = v, v = this.m_localAnchor2.x - this.m_localCenterB.x, m = this.m_localAnchor2.y - this.m_localCenterB.y, u = r.col1.x * v + r.col2.x * m, m = r.col1.y * v + r.col2.y * m, v = u, r = p.x + v - h.x - y, u = p.y + m - h.y - x, this.m_enableLimit) {
			this.m_axis = n.MulMV(g, this.m_localXAxis1), this.m_a1 = (r + y) * this.m_axis.y - (u + x) * this.m_axis.x, this.m_a2 = v * this.m_axis.y - m * this.m_axis.x;
			var b = this.m_axis.x * r + this.m_axis.y * u;
			n.Abs(this.m_upperTranslation - this.m_lowerTranslation) < 2 * t.b2_linearSlop ? (f = n.Clamp(b, -t.b2_maxLinearCorrection, t.b2_maxLinearCorrection), _ = n.Abs(b), d = !0) : b <= this.m_lowerTranslation ? (f = n.Clamp(b - this.m_lowerTranslation + t.b2_linearSlop, -t.b2_maxLinearCorrection, 0), _ = this.m_lowerTranslation - b, d = !0) : b >= this.m_upperTranslation && (f = n.Clamp(b - this.m_upperTranslation + t.b2_linearSlop, 0, t.b2_maxLinearCorrection), _ = b - this.m_upperTranslation, d = !0)
		}
		return this.m_perp = n.MulMV(g, this.m_localYAxis1), this.m_s1 = (r + y) * this.m_perp.y - (u + x) * this.m_perp.x, this.m_s2 = v * this.m_perp.y - m * this.m_perp.x, g = new s, x = this.m_perp.x * r + this.m_perp.y * u, v = c - l - this.m_refAngle, _ = n.Max(_, n.Abs(x)), y = n.Abs(v), d ? (d = this.m_invMassA, m = this.m_invMassB, r = this.m_invIA, u = this.m_invIB, this.m_K.col1.x = d + m + r * this.m_s1 * this.m_s1 + u * this.m_s2 * this.m_s2, this.m_K.col1.y = r * this.m_s1 + u * this.m_s2, this.m_K.col1.z = r * this.m_s1 * this.m_a1 + u * this.m_s2 * this.m_a2, this.m_K.col2.x = this.m_K.col1.y, this.m_K.col2.y = r + u, this.m_K.col2.z = r * this.m_a1 + u * this.m_a2, this.m_K.col3.x = this.m_K.col1.z, this.m_K.col3.y = this.m_K.col2.z, this.m_K.col3.z = d + m + r * this.m_a1 * this.m_a1 + u * this.m_a2 * this.m_a2, this.m_K.Solve33(g, -x, -v, -f)) : (d = this.m_invMassA, m = this.m_invMassB, r = this.m_invIA, u = this.m_invIB, f = r * this.m_s1 + u * this.m_s2, b = r + u, this.m_K.col1.Set(d + m + r * this.m_s1 * this.m_s1 + u * this.m_s2 * this.m_s2, f, 0), this.m_K.col2.Set(f, b, 0), f = this.m_K.Solve22(new o, -x, -v), g.x = f.x, g.y = f.y, g.z = 0), f = g.x * this.m_perp.x + g.z * this.m_axis.x, d = g.x * this.m_perp.y + g.z * this.m_axis.y, x = g.x * this.m_s1 + g.y + g.z * this.m_a1, g = g.x * this.m_s2 + g.y + g.z * this.m_a2, h.x -= this.m_invMassA * f, h.y -= this.m_invMassA * d, l -= this.m_invIA * x, p.x += this.m_invMassB * f, p.y += this.m_invMassB * d, c += this.m_invIB * g, i.m_sweep.a = l, a.m_sweep.a = c, i.SynchronizeTransform(), a.SynchronizeTransform(), _ <= t.b2_linearSlop && y <= t.b2_angularSlop
	}, Box2D.inherit(b, Box2D.Dynamics.Joints.b2JointDef), b.prototype.__super = Box2D.Dynamics.Joints.b2JointDef.prototype, b.b2PrismaticJointDef = function() {
		Box2D.Dynamics.Joints.b2JointDef.b2JointDef.apply(this, arguments), this.localAnchorA = new o, this.localAnchorB = new o, this.localAxisA = new o
	}, b.prototype.b2PrismaticJointDef = function() {
		this.__super.b2JointDef.call(this), this.type = d.e_prismaticJoint, this.localAxisA.Set(1, 0), this.referenceAngle = 0, this.enableLimit = !1, this.upperTranslation = this.lowerTranslation = 0, this.enableMotor = !1, this.motorSpeed = this.maxMotorForce = 0
	}, b.prototype.Initialize = function(t, e, i, n) {
		this.bodyA = t, this.bodyB = e, this.localAnchorA = this.bodyA.GetLocalPoint(i), this.localAnchorB = this.bodyB.GetLocalPoint(i), this.localAxisA = this.bodyA.GetLocalVector(n), this.referenceAngle = this.bodyB.GetAngle() - this.bodyA.GetAngle()
	}, Box2D.inherit(C, Box2D.Dynamics.Joints.b2Joint), C.prototype.__super = Box2D.Dynamics.Joints.b2Joint.prototype, C.b2PulleyJoint = function() {
		Box2D.Dynamics.Joints.b2Joint.b2Joint.apply(this, arguments), this.m_groundAnchor1 = new o, this.m_groundAnchor2 = new o, this.m_localAnchor1 = new o, this.m_localAnchor2 = new o, this.m_u1 = new o, this.m_u2 = new o
	}, C.prototype.GetAnchorA = function() {
		return this.m_bodyA.GetWorldPoint(this.m_localAnchor1)
	}, C.prototype.GetAnchorB = function() {
		return this.m_bodyB.GetWorldPoint(this.m_localAnchor2)
	}, C.prototype.GetReactionForce = function(t) {
		return void 0 === t && (t = 0), new o(t * this.m_impulse * this.m_u2.x, t * this.m_impulse * this.m_u2.y)
	}, C.prototype.GetReactionTorque = function() {
		return 0
	}, C.prototype.GetGroundAnchorA = function() {
		var t = this.m_ground.m_xf.position.Copy();
		return t.Add(this.m_groundAnchor1), t
	}, C.prototype.GetGroundAnchorB = function() {
		var t = this.m_ground.m_xf.position.Copy();
		return t.Add(this.m_groundAnchor2), t
	}, C.prototype.GetLength1 = function() {
		var t = this.m_bodyA.GetWorldPoint(this.m_localAnchor1),
			e = t.x - (this.m_ground.m_xf.position.x + this.m_groundAnchor1.x),
			t = t.y - (this.m_ground.m_xf.position.y + this.m_groundAnchor1.y);
		return Math.sqrt(e * e + t * t)
	}, C.prototype.GetLength2 = function() {
		var t = this.m_bodyB.GetWorldPoint(this.m_localAnchor2),
			e = t.x - (this.m_ground.m_xf.position.x + this.m_groundAnchor2.x),
			t = t.y - (this.m_ground.m_xf.position.y + this.m_groundAnchor2.y);
		return Math.sqrt(e * e + t * t)
	}, C.prototype.GetRatio = function() {
		return this.m_ratio
	}, C.prototype.b2PulleyJoint = function(t) {
		this.__super.b2Joint.call(this, t), this.m_ground = this.m_bodyA.m_world.m_groundBody, this.m_groundAnchor1.x = t.groundAnchorA.x - this.m_ground.m_xf.position.x, this.m_groundAnchor1.y = t.groundAnchorA.y - this.m_ground.m_xf.position.y, this.m_groundAnchor2.x = t.groundAnchorB.x - this.m_ground.m_xf.position.x, this.m_groundAnchor2.y = t.groundAnchorB.y - this.m_ground.m_xf.position.y, this.m_localAnchor1.SetV(t.localAnchorA), this.m_localAnchor2.SetV(t.localAnchorB), this.m_ratio = t.ratio, this.m_constant = t.lengthA + this.m_ratio * t.lengthB, this.m_maxLength1 = n.Min(t.maxLengthA, this.m_constant - this.m_ratio * C.b2_minPulleyLength), this.m_maxLength2 = n.Min(t.maxLengthB, (this.m_constant - C.b2_minPulleyLength) / this.m_ratio), this.m_limitImpulse2 = this.m_limitImpulse1 = this.m_impulse = 0
	}, C.prototype.InitVelocityConstraints = function(e) {
		var i, n = this.m_bodyA,
			o = this.m_bodyB;
		i = n.m_xf.R;
		var s = this.m_localAnchor1.x - n.m_sweep.localCenter.x,
			r = this.m_localAnchor1.y - n.m_sweep.localCenter.y,
			a = i.col1.x * s + i.col2.x * r,
			r = i.col1.y * s + i.col2.y * r,
			s = a;
		i = o.m_xf.R;
		var h = this.m_localAnchor2.x - o.m_sweep.localCenter.x,
			l = this.m_localAnchor2.y - o.m_sweep.localCenter.y,
			a = i.col1.x * h + i.col2.x * l,
			l = i.col1.y * h + i.col2.y * l,
			h = a;
		i = o.m_sweep.c.x + h;
		var a = o.m_sweep.c.y + l,
			p = this.m_ground.m_xf.position.x + this.m_groundAnchor2.x,
			c = this.m_ground.m_xf.position.y + this.m_groundAnchor2.y;
		this.m_u1.Set(n.m_sweep.c.x + s - (this.m_ground.m_xf.position.x + this.m_groundAnchor1.x), n.m_sweep.c.y + r - (this.m_ground.m_xf.position.y + this.m_groundAnchor1.y)), this.m_u2.Set(i - p, a - c), i = this.m_u1.Length(), a = this.m_u2.Length(), i > t.b2_linearSlop ? this.m_u1.Multiply(1 / i) : this.m_u1.SetZero(), a > t.b2_linearSlop ? this.m_u2.Multiply(1 / a) : this.m_u2.SetZero(), 0 < this.m_constant - i - this.m_ratio * a ? (this.m_state = d.e_inactiveLimit, this.m_impulse = 0) : this.m_state = d.e_atUpperLimit, i < this.m_maxLength1 ? (this.m_limitState1 = d.e_inactiveLimit, this.m_limitImpulse1 = 0) : this.m_limitState1 = d.e_atUpperLimit, a < this.m_maxLength2 ? (this.m_limitState2 = d.e_inactiveLimit, this.m_limitImpulse2 = 0) : this.m_limitState2 = d.e_atUpperLimit, i = s * this.m_u1.y - r * this.m_u1.x, a = h * this.m_u2.y - l * this.m_u2.x, this.m_limitMass1 = n.m_invMass + n.m_invI * i * i, this.m_limitMass2 = o.m_invMass + o.m_invI * a * a, this.m_pulleyMass = this.m_limitMass1 + this.m_ratio * this.m_ratio * this.m_limitMass2, this.m_limitMass1 = 1 / this.m_limitMass1, this.m_limitMass2 = 1 / this.m_limitMass2, this.m_pulleyMass = 1 / this.m_pulleyMass, e.warmStarting ? (this.m_impulse *= e.dtRatio, this.m_limitImpulse1 *= e.dtRatio, this.m_limitImpulse2 *= e.dtRatio, e = (-this.m_impulse - this.m_limitImpulse1) * this.m_u1.x, i = (-this.m_impulse - this.m_limitImpulse1) * this.m_u1.y, a = (-this.m_ratio * this.m_impulse - this.m_limitImpulse2) * this.m_u2.x, p = (-this.m_ratio * this.m_impulse - this.m_limitImpulse2) * this.m_u2.y, n.m_linearVelocity.x += n.m_invMass * e, n.m_linearVelocity.y += n.m_invMass * i, n.m_angularVelocity += n.m_invI * (s * i - r * e), o.m_linearVelocity.x += o.m_invMass * a, o.m_linearVelocity.y += o.m_invMass * p, o.m_angularVelocity += o.m_invI * (h * p - l * a)) : this.m_limitImpulse2 = this.m_limitImpulse1 = this.m_impulse = 0
	}, C.prototype.SolveVelocityConstraints = function(t) {
		t = this.m_bodyA;
		var e, i = this.m_bodyB;
		e = t.m_xf.R;
		var o = this.m_localAnchor1.x - t.m_sweep.localCenter.x,
			s = this.m_localAnchor1.y - t.m_sweep.localCenter.y,
			r = e.col1.x * o + e.col2.x * s,
			s = e.col1.y * o + e.col2.y * s,
			o = r;
		e = i.m_xf.R;
		var a = this.m_localAnchor2.x - i.m_sweep.localCenter.x,
			h = this.m_localAnchor2.y - i.m_sweep.localCenter.y,
			r = e.col1.x * a + e.col2.x * h,
			h = e.col1.y * a + e.col2.y * h,
			a = r,
			l = r = e = 0,
			p = 0;
		e = p = e = p = l = r = e = 0, this.m_state == d.e_atUpperLimit && (e = t.m_linearVelocity.x + -t.m_angularVelocity * s, r = t.m_linearVelocity.y + t.m_angularVelocity * o, l = i.m_linearVelocity.x + -i.m_angularVelocity * h, p = i.m_linearVelocity.y + i.m_angularVelocity * a, e = -(this.m_u1.x * e + this.m_u1.y * r) - this.m_ratio * (this.m_u2.x * l + this.m_u2.y * p), p = this.m_pulleyMass * -e, e = this.m_impulse, this.m_impulse = n.Max(0, this.m_impulse + p), p = this.m_impulse - e, e = -p * this.m_u1.x, r = -p * this.m_u1.y, l = -this.m_ratio * p * this.m_u2.x, p = -this.m_ratio * p * this.m_u2.y, t.m_linearVelocity.x += t.m_invMass * e, t.m_linearVelocity.y += t.m_invMass * r, t.m_angularVelocity += t.m_invI * (o * r - s * e), i.m_linearVelocity.x += i.m_invMass * l, i.m_linearVelocity.y += i.m_invMass * p, i.m_angularVelocity += i.m_invI * (a * p - h * l)), this.m_limitState1 == d.e_atUpperLimit && (e = t.m_linearVelocity.x + -t.m_angularVelocity * s, r = t.m_linearVelocity.y + t.m_angularVelocity * o, e = -(this.m_u1.x * e + this.m_u1.y * r), p = -this.m_limitMass1 * e, e = this.m_limitImpulse1, this.m_limitImpulse1 = n.Max(0, this.m_limitImpulse1 + p), p = this.m_limitImpulse1 - e, e = -p * this.m_u1.x, r = -p * this.m_u1.y, t.m_linearVelocity.x += t.m_invMass * e, t.m_linearVelocity.y += t.m_invMass * r, t.m_angularVelocity += t.m_invI * (o * r - s * e)), this.m_limitState2 == d.e_atUpperLimit && (l = i.m_linearVelocity.x + -i.m_angularVelocity * h, p = i.m_linearVelocity.y + i.m_angularVelocity * a, e = -(this.m_u2.x * l + this.m_u2.y * p), p = -this.m_limitMass2 * e, e = this.m_limitImpulse2, this.m_limitImpulse2 = n.Max(0, this.m_limitImpulse2 + p), p = this.m_limitImpulse2 - e, l = -p * this.m_u2.x, p = -p * this.m_u2.y, i.m_linearVelocity.x += i.m_invMass * l, i.m_linearVelocity.y += i.m_invMass * p, i.m_angularVelocity += i.m_invI * (a * p - h * l))
	}, C.prototype.SolvePositionConstraints = function(e) {
		e = this.m_bodyA;
		var i, o = this.m_bodyB,
			s = this.m_ground.m_xf.position.x + this.m_groundAnchor1.x,
			r = this.m_ground.m_xf.position.y + this.m_groundAnchor1.y,
			a = this.m_ground.m_xf.position.x + this.m_groundAnchor2.x,
			h = this.m_ground.m_xf.position.y + this.m_groundAnchor2.y,
			l = 0,
			p = 0,
			c = 0,
			u = 0,
			m = i = 0,
			_ = 0,
			y = 0,
			f = m = y = i = m = i = 0;
		return this.m_state == d.e_atUpperLimit && (i = e.m_xf.R, l = this.m_localAnchor1.x - e.m_sweep.localCenter.x, p = this.m_localAnchor1.y - e.m_sweep.localCenter.y, m = i.col1.x * l + i.col2.x * p, p = i.col1.y * l + i.col2.y * p, l = m, i = o.m_xf.R, c = this.m_localAnchor2.x - o.m_sweep.localCenter.x, u = this.m_localAnchor2.y - o.m_sweep.localCenter.y, m = i.col1.x * c + i.col2.x * u, u = i.col1.y * c + i.col2.y * u, c = m, i = e.m_sweep.c.x + l, m = e.m_sweep.c.y + p, _ = o.m_sweep.c.x + c, y = o.m_sweep.c.y + u, this.m_u1.Set(i - s, m - r), this.m_u2.Set(_ - a, y - h), i = this.m_u1.Length(), m = this.m_u2.Length(), i > t.b2_linearSlop ? this.m_u1.Multiply(1 / i) : this.m_u1.SetZero(), m > t.b2_linearSlop ? this.m_u2.Multiply(1 / m) : this.m_u2.SetZero(), i = this.m_constant - i - this.m_ratio * m, f = n.Max(f, -i), i = n.Clamp(i + t.b2_linearSlop, -t.b2_maxLinearCorrection, 0), y = -this.m_pulleyMass * i, i = -y * this.m_u1.x, m = -y * this.m_u1.y, _ = -this.m_ratio * y * this.m_u2.x, y = -this.m_ratio * y * this.m_u2.y, e.m_sweep.c.x += e.m_invMass * i, e.m_sweep.c.y += e.m_invMass * m, e.m_sweep.a += e.m_invI * (l * m - p * i), o.m_sweep.c.x += o.m_invMass * _, o.m_sweep.c.y += o.m_invMass * y, o.m_sweep.a += o.m_invI * (c * y - u * _), e.SynchronizeTransform(), o.SynchronizeTransform()), this.m_limitState1 == d.e_atUpperLimit && (i = e.m_xf.R, l = this.m_localAnchor1.x - e.m_sweep.localCenter.x, p = this.m_localAnchor1.y - e.m_sweep.localCenter.y, m = i.col1.x * l + i.col2.x * p, p = i.col1.y * l + i.col2.y * p, l = m, i = e.m_sweep.c.x + l, m = e.m_sweep.c.y + p, this.m_u1.Set(i - s, m - r), i = this.m_u1.Length(), i > t.b2_linearSlop ? (this.m_u1.x *= 1 / i, this.m_u1.y *= 1 / i) : this.m_u1.SetZero(), i = this.m_maxLength1 - i, f = n.Max(f, -i), i = n.Clamp(i + t.b2_linearSlop, -t.b2_maxLinearCorrection, 0), y = -this.m_limitMass1 * i, i = -y * this.m_u1.x, m = -y * this.m_u1.y, e.m_sweep.c.x += e.m_invMass * i, e.m_sweep.c.y += e.m_invMass * m, e.m_sweep.a += e.m_invI * (l * m - p * i), e.SynchronizeTransform()), this.m_limitState2 == d.e_atUpperLimit && (i = o.m_xf.R, c = this.m_localAnchor2.x - o.m_sweep.localCenter.x, u = this.m_localAnchor2.y - o.m_sweep.localCenter.y, m = i.col1.x * c + i.col2.x * u, u = i.col1.y * c + i.col2.y * u, c = m, _ = o.m_sweep.c.x + c, y = o.m_sweep.c.y + u, this.m_u2.Set(_ - a, y - h), m = this.m_u2.Length(), m > t.b2_linearSlop ? (this.m_u2.x *= 1 / m, this.m_u2.y *= 1 / m) : this.m_u2.SetZero(), i = this.m_maxLength2 - m, f = n.Max(f, -i), i = n.Clamp(i + t.b2_linearSlop, -t.b2_maxLinearCorrection, 0), y = -this.m_limitMass2 * i, _ = -y * this.m_u2.x, y = -y * this.m_u2.y, o.m_sweep.c.x += o.m_invMass * _, o.m_sweep.c.y += o.m_invMass * y, o.m_sweep.a += o.m_invI * (c * y - u * _), o.SynchronizeTransform()), f < t.b2_linearSlop
	}, Box2D.postDefs.push(function() {
		Box2D.Dynamics.Joints.b2PulleyJoint.b2_minPulleyLength = 2
	}), Box2D.inherit(E, Box2D.Dynamics.Joints.b2JointDef), E.prototype.__super = Box2D.Dynamics.Joints.b2JointDef.prototype, E.b2PulleyJointDef = function() {
		Box2D.Dynamics.Joints.b2JointDef.b2JointDef.apply(this, arguments), this.groundAnchorA = new o, this.groundAnchorB = new o, this.localAnchorA = new o, this.localAnchorB = new o
	}, E.prototype.b2PulleyJointDef = function() {
		this.__super.b2JointDef.call(this), this.type = d.e_pulleyJoint, this.groundAnchorA.Set(-1, 1), this.groundAnchorB.Set(1, 1), this.localAnchorA.Set(-1, 0), this.localAnchorB.Set(1, 0), this.maxLengthB = this.lengthB = this.maxLengthA = this.lengthA = 0, this.ratio = 1, this.collideConnected = !0
	}, E.prototype.Initialize = function(t, e, i, n, o, s, r) {
		void 0 === r && (r = 0), this.bodyA = t, this.bodyB = e, this.groundAnchorA.SetV(i), this.groundAnchorB.SetV(n), this.localAnchorA = this.bodyA.GetLocalPoint(o), this.localAnchorB = this.bodyB.GetLocalPoint(s), t = o.x - i.x, i = o.y - i.y, this.lengthA = Math.sqrt(t * t + i * i), i = s.x - n.x, n = s.y - n.y, this.lengthB = Math.sqrt(i * i + n * n), this.ratio = r, r = this.lengthA + this.ratio * this.lengthB, this.maxLengthA = r - this.ratio * C.b2_minPulleyLength, this.maxLengthB = (r - C.b2_minPulleyLength) / this.ratio
	}, Box2D.inherit(w, Box2D.Dynamics.Joints.b2Joint), w.prototype.__super = Box2D.Dynamics.Joints.b2Joint.prototype, w.b2RevoluteJoint = function() {
		Box2D.Dynamics.Joints.b2Joint.b2Joint.apply(this, arguments), this.K = new e, this.K1 = new e, this.K2 = new e, this.K3 = new e, this.impulse3 = new s, this.impulse2 = new o, this.reduced = new o, this.m_localAnchor1 = new o, this.m_localAnchor2 = new o, this.m_impulse = new s, this.m_mass = new i
	}, w.prototype.GetAnchorA = function() {
		return this.m_bodyA.GetWorldPoint(this.m_localAnchor1)
	}, w.prototype.GetAnchorB = function() {
		return this.m_bodyB.GetWorldPoint(this.m_localAnchor2)
	}, w.prototype.GetReactionForce = function(t) {
		return void 0 === t && (t = 0), new o(t * this.m_impulse.x, t * this.m_impulse.y)
	}, w.prototype.GetReactionTorque = function(t) {
		return void 0 === t && (t = 0), t * this.m_impulse.z
	}, w.prototype.GetJointAngle = function() {
		return this.m_bodyB.m_sweep.a - this.m_bodyA.m_sweep.a - this.m_referenceAngle
	}, w.prototype.GetJointSpeed = function() {
		return this.m_bodyB.m_angularVelocity - this.m_bodyA.m_angularVelocity
	}, w.prototype.IsLimitEnabled = function() {
		return this.m_enableLimit
	}, w.prototype.EnableLimit = function(t) {
		this.m_enableLimit = t
	}, w.prototype.GetLowerLimit = function() {
		return this.m_lowerAngle
	}, w.prototype.GetUpperLimit = function() {
		return this.m_upperAngle
	}, w.prototype.SetLimits = function(t, e) {
		void 0 === t && (t = 0), void 0 === e && (e = 0), this.m_lowerAngle = t, this.m_upperAngle = e
	}, w.prototype.IsMotorEnabled = function() {
		return this.m_bodyA.SetAwake(!0), this.m_bodyB.SetAwake(!0), this.m_enableMotor
	}, w.prototype.EnableMotor = function(t) {
		this.m_enableMotor = t
	}, w.prototype.SetMotorSpeed = function(t) {
		void 0 === t && (t = 0), this.m_bodyA.SetAwake(!0), this.m_bodyB.SetAwake(!0), this.m_motorSpeed = t
	}, w.prototype.GetMotorSpeed = function() {
		return this.m_motorSpeed
	}, w.prototype.SetMaxMotorTorque = function(t) {
		void 0 === t && (t = 0), this.m_maxMotorTorque = t
	}, w.prototype.GetMotorTorque = function() {
		return this.m_maxMotorTorque
	}, w.prototype.b2RevoluteJoint = function(t) {
		this.__super.b2Joint.call(this, t), this.m_localAnchor1.SetV(t.localAnchorA), this.m_localAnchor2.SetV(t.localAnchorB), this.m_referenceAngle = t.referenceAngle, this.m_impulse.SetZero(), this.m_motorImpulse = 0, this.m_lowerAngle = t.lowerAngle, this.m_upperAngle = t.upperAngle, this.m_maxMotorTorque = t.maxMotorTorque, this.m_motorSpeed = t.motorSpeed, this.m_enableLimit = t.enableLimit, this.m_enableMotor = t.enableMotor, this.m_limitState = d.e_inactiveLimit
	}, w.prototype.InitVelocityConstraints = function(e) {
		var i, o = this.m_bodyA,
			s = this.m_bodyB,
			r = 0;
		i = o.m_xf.R;
		var a = this.m_localAnchor1.x - o.m_sweep.localCenter.x,
			h = this.m_localAnchor1.y - o.m_sweep.localCenter.y,
			r = i.col1.x * a + i.col2.x * h,
			h = i.col1.y * a + i.col2.y * h,
			a = r;
		i = s.m_xf.R;
		var l = this.m_localAnchor2.x - s.m_sweep.localCenter.x,
			p = this.m_localAnchor2.y - s.m_sweep.localCenter.y,
			r = i.col1.x * l + i.col2.x * p,
			p = i.col1.y * l + i.col2.y * p,
			l = r;
		i = o.m_invMass;
		var r = s.m_invMass,
			c = o.m_invI,
			u = s.m_invI;
		if (this.m_mass.col1.x = i + r + h * h * c + p * p * u, this.m_mass.col2.x = -h * a * c - p * l * u, this.m_mass.col3.x = -h * c - p * u, this.m_mass.col1.y = this.m_mass.col2.x, this.m_mass.col2.y = i + r + a * a * c + l * l * u, this.m_mass.col3.y = a * c + l * u, this.m_mass.col1.z = this.m_mass.col3.x, this.m_mass.col2.z = this.m_mass.col3.y, this.m_mass.col3.z = c + u, this.m_motorMass = 1 / (c + u), 0 == this.m_enableMotor && (this.m_motorImpulse = 0), this.m_enableLimit) {
			var m = s.m_sweep.a - o.m_sweep.a - this.m_referenceAngle;
			n.Abs(this.m_upperAngle - this.m_lowerAngle) < 2 * t.b2_angularSlop ? this.m_limitState = d.e_equalLimits : m <= this.m_lowerAngle ? (this.m_limitState != d.e_atLowerLimit && (this.m_impulse.z = 0), this.m_limitState = d.e_atLowerLimit) : m >= this.m_upperAngle ? (this.m_limitState != d.e_atUpperLimit && (this.m_impulse.z = 0), this.m_limitState = d.e_atUpperLimit) : (this.m_limitState = d.e_inactiveLimit, this.m_impulse.z = 0)
		} else this.m_limitState = d.e_inactiveLimit;
		e.warmStarting ? (this.m_impulse.x *= e.dtRatio, this.m_impulse.y *= e.dtRatio, this.m_motorImpulse *= e.dtRatio, e = this.m_impulse.x, m = this.m_impulse.y, o.m_linearVelocity.x -= i * e, o.m_linearVelocity.y -= i * m, o.m_angularVelocity -= c * (a * m - h * e + this.m_motorImpulse + this.m_impulse.z), s.m_linearVelocity.x += r * e, s.m_linearVelocity.y += r * m, s.m_angularVelocity += u * (l * m - p * e + this.m_motorImpulse + this.m_impulse.z)) : (this.m_impulse.SetZero(), this.m_motorImpulse = 0)
	}, w.prototype.SolveVelocityConstraints = function(t) {
		var e = this.m_bodyA,
			i = this.m_bodyB,
			o = 0,
			s = o = 0,
			r = 0,
			a = 0,
			h = 0,
			l = e.m_linearVelocity,
			p = e.m_angularVelocity,
			c = i.m_linearVelocity,
			u = i.m_angularVelocity,
			m = e.m_invMass,
			_ = i.m_invMass,
			y = e.m_invI,
			f = i.m_invI;
		if (this.m_enableMotor && this.m_limitState != d.e_equalLimits && (s = this.m_motorMass * -(u - p - this.m_motorSpeed), r = this.m_motorImpulse, a = t.dt * this.m_maxMotorTorque, this.m_motorImpulse = n.Clamp(this.m_motorImpulse + s, -a, a), s = this.m_motorImpulse - r, p -= y * s, u += f * s), this.m_enableLimit && this.m_limitState != d.e_inactiveLimit) {
			t = e.m_xf.R, s = this.m_localAnchor1.x - e.m_sweep.localCenter.x, r = this.m_localAnchor1.y - e.m_sweep.localCenter.y, o = t.col1.x * s + t.col2.x * r, r = t.col1.y * s + t.col2.y * r, s = o, t = i.m_xf.R, a = this.m_localAnchor2.x - i.m_sweep.localCenter.x, h = this.m_localAnchor2.y - i.m_sweep.localCenter.y, o = t.col1.x * a + t.col2.x * h, h = t.col1.y * a + t.col2.y * h, a = o, t = c.x + -u * h - l.x - -p * r;
			var g = c.y + u * a - l.y - p * s;
			this.m_mass.Solve33(this.impulse3, -t, -g, -(u - p)), this.m_limitState == d.e_equalLimits ? this.m_impulse.Add(this.impulse3) : this.m_limitState == d.e_atLowerLimit ? (o = this.m_impulse.z + this.impulse3.z, 0 > o && (this.m_mass.Solve22(this.reduced, -t, -g), this.impulse3.x = this.reduced.x, this.impulse3.y = this.reduced.y, this.impulse3.z = -this.m_impulse.z, this.m_impulse.x += this.reduced.x, this.m_impulse.y += this.reduced.y, this.m_impulse.z = 0)) : this.m_limitState == d.e_atUpperLimit && (o = this.m_impulse.z + this.impulse3.z, o > 0 && (this.m_mass.Solve22(this.reduced, -t, -g), this.impulse3.x = this.reduced.x, this.impulse3.y = this.reduced.y, this.impulse3.z = -this.m_impulse.z, this.m_impulse.x += this.reduced.x, this.m_impulse.y += this.reduced.y, this.m_impulse.z = 0)), l.x -= m * this.impulse3.x, l.y -= m * this.impulse3.y, p -= y * (s * this.impulse3.y - r * this.impulse3.x + this.impulse3.z), c.x += _ * this.impulse3.x, c.y += _ * this.impulse3.y, u += f * (a * this.impulse3.y - h * this.impulse3.x + this.impulse3.z)
		} else t = e.m_xf.R, s = this.m_localAnchor1.x - e.m_sweep.localCenter.x, r = this.m_localAnchor1.y - e.m_sweep.localCenter.y, o = t.col1.x * s + t.col2.x * r, r = t.col1.y * s + t.col2.y * r, s = o, t = i.m_xf.R, a = this.m_localAnchor2.x - i.m_sweep.localCenter.x, h = this.m_localAnchor2.y - i.m_sweep.localCenter.y, o = t.col1.x * a + t.col2.x * h, h = t.col1.y * a + t.col2.y * h, a = o, this.m_mass.Solve22(this.impulse2, -(c.x + -u * h - l.x - -p * r), -(c.y + u * a - l.y - p * s)), this.m_impulse.x += this.impulse2.x, this.m_impulse.y += this.impulse2.y, l.x -= m * this.impulse2.x, l.y -= m * this.impulse2.y, p -= y * (s * this.impulse2.y - r * this.impulse2.x), c.x += _ * this.impulse2.x, c.y += _ * this.impulse2.y, u += f * (a * this.impulse2.y - h * this.impulse2.x);
		e.m_linearVelocity.SetV(l), e.m_angularVelocity = p, i.m_linearVelocity.SetV(c), i.m_angularVelocity = u
	}, w.prototype.SolvePositionConstraints = function(e) {
		var i, o = 0;
		e = this.m_bodyA;
		var s = this.m_bodyB,
			r = 0,
			a = i = 0,
			h = 0,
			l = 0;
		if (this.m_enableLimit && this.m_limitState != d.e_inactiveLimit) {
			var o = s.m_sweep.a - e.m_sweep.a - this.m_referenceAngle,
				p = 0;
			this.m_limitState == d.e_equalLimits ? (o = n.Clamp(o - this.m_lowerAngle, -t.b2_maxAngularCorrection, t.b2_maxAngularCorrection), p = -this.m_motorMass * o, r = n.Abs(o)) : this.m_limitState == d.e_atLowerLimit ? (o -= this.m_lowerAngle, r = -o, o = n.Clamp(o + t.b2_angularSlop, -t.b2_maxAngularCorrection, 0), p = -this.m_motorMass * o) : this.m_limitState == d.e_atUpperLimit && (r = o -= this.m_upperAngle, o = n.Clamp(o - t.b2_angularSlop, 0, t.b2_maxAngularCorrection), p = -this.m_motorMass * o), e.m_sweep.a -= e.m_invI * p, s.m_sweep.a += s.m_invI * p, e.SynchronizeTransform(), s.SynchronizeTransform()
		}
		i = e.m_xf.R, p = this.m_localAnchor1.x - e.m_sweep.localCenter.x, o = this.m_localAnchor1.y - e.m_sweep.localCenter.y, a = i.col1.x * p + i.col2.x * o, o = i.col1.y * p + i.col2.y * o, p = a, i = s.m_xf.R;
		var c = this.m_localAnchor2.x - s.m_sweep.localCenter.x,
			u = this.m_localAnchor2.y - s.m_sweep.localCenter.y,
			a = i.col1.x * c + i.col2.x * u,
			u = i.col1.y * c + i.col2.y * u,
			c = a,
			h = s.m_sweep.c.x + c - e.m_sweep.c.x - p,
			l = s.m_sweep.c.y + u - e.m_sweep.c.y - o,
			m = h * h + l * l;
		i = Math.sqrt(m);
		var a = e.m_invMass,
			_ = s.m_invMass,
			y = e.m_invI,
			f = s.m_invI,
			g = 10 * t.b2_linearSlop;
		return m > g * g && (m = 1 / (a + _), h = m * -h, l = m * -l, e.m_sweep.c.x -= .5 * a * h, e.m_sweep.c.y -= .5 * a * l, s.m_sweep.c.x += .5 * _ * h, s.m_sweep.c.y += .5 * _ * l, h = s.m_sweep.c.x + c - e.m_sweep.c.x - p, l = s.m_sweep.c.y + u - e.m_sweep.c.y - o), this.K1.col1.x = a + _, this.K1.col2.x = 0, this.K1.col1.y = 0, this.K1.col2.y = a + _, this.K2.col1.x = y * o * o, this.K2.col2.x = -y * p * o, this.K2.col1.y = -y * p * o, this.K2.col2.y = y * p * p, this.K3.col1.x = f * u * u, this.K3.col2.x = -f * c * u, this.K3.col1.y = -f * c * u, this.K3.col2.y = f * c * c, this.K.SetM(this.K1), this.K.AddM(this.K2), this.K.AddM(this.K3), this.K.Solve(w.tImpulse, -h, -l), h = w.tImpulse.x, l = w.tImpulse.y, e.m_sweep.c.x -= e.m_invMass * h, e.m_sweep.c.y -= e.m_invMass * l, e.m_sweep.a -= e.m_invI * (p * l - o * h), s.m_sweep.c.x += s.m_invMass * h, s.m_sweep.c.y += s.m_invMass * l, s.m_sweep.a += s.m_invI * (c * l - u * h), e.SynchronizeTransform(), s.SynchronizeTransform(), i <= t.b2_linearSlop && r <= t.b2_angularSlop
	}, Box2D.postDefs.push(function() {
		Box2D.Dynamics.Joints.b2RevoluteJoint.tImpulse = new o
	}), Box2D.inherit(A, Box2D.Dynamics.Joints.b2JointDef), A.prototype.__super = Box2D.Dynamics.Joints.b2JointDef.prototype, A.b2RevoluteJointDef = function() {
		Box2D.Dynamics.Joints.b2JointDef.b2JointDef.apply(this, arguments), this.localAnchorA = new o, this.localAnchorB = new o
	}, A.prototype.b2RevoluteJointDef = function() {
		this.__super.b2JointDef.call(this), this.type = d.e_revoluteJoint, this.localAnchorA.Set(0, 0), this.localAnchorB.Set(0, 0), this.motorSpeed = this.maxMotorTorque = this.upperAngle = this.lowerAngle = this.referenceAngle = 0, this.enableMotor = this.enableLimit = !1
	}, A.prototype.Initialize = function(t, e, i) {
		this.bodyA = t, this.bodyB = e, this.localAnchorA = this.bodyA.GetLocalPoint(i), this.localAnchorB = this.bodyB.GetLocalPoint(i), this.referenceAngle = this.bodyB.GetAngle() - this.bodyA.GetAngle()
	}, Box2D.inherit(D, Box2D.Dynamics.Joints.b2Joint), D.prototype.__super = Box2D.Dynamics.Joints.b2Joint.prototype, D.b2WeldJoint = function() {
		Box2D.Dynamics.Joints.b2Joint.b2Joint.apply(this, arguments), this.m_localAnchorA = new o, this.m_localAnchorB = new o, this.m_impulse = new s, this.m_mass = new i
	}, D.prototype.GetAnchorA = function() {
		return this.m_bodyA.GetWorldPoint(this.m_localAnchorA)
	}, D.prototype.GetAnchorB = function() {
		return this.m_bodyB.GetWorldPoint(this.m_localAnchorB)
	}, D.prototype.GetReactionForce = function(t) {
		return void 0 === t && (t = 0), new o(t * this.m_impulse.x, t * this.m_impulse.y)
	}, D.prototype.GetReactionTorque = function(t) {
		return void 0 === t && (t = 0), t * this.m_impulse.z
	}, D.prototype.b2WeldJoint = function(t) {
		this.__super.b2Joint.call(this, t), this.m_localAnchorA.SetV(t.localAnchorA), this.m_localAnchorB.SetV(t.localAnchorB), this.m_referenceAngle = t.referenceAngle, this.m_impulse.SetZero(), this.m_mass = new i
	}, D.prototype.InitVelocityConstraints = function(t) {
		var e, i = 0,
			n = this.m_bodyA,
			o = this.m_bodyB;
		e = n.m_xf.R;
		var s = this.m_localAnchorA.x - n.m_sweep.localCenter.x,
			r = this.m_localAnchorA.y - n.m_sweep.localCenter.y,
			i = e.col1.x * s + e.col2.x * r,
			r = e.col1.y * s + e.col2.y * r,
			s = i;
		e = o.m_xf.R;
		var a = this.m_localAnchorB.x - o.m_sweep.localCenter.x,
			h = this.m_localAnchorB.y - o.m_sweep.localCenter.y,
			i = e.col1.x * a + e.col2.x * h,
			h = e.col1.y * a + e.col2.y * h,
			a = i;
		e = n.m_invMass;
		var i = o.m_invMass,
			l = n.m_invI,
			p = o.m_invI;
		this.m_mass.col1.x = e + i + r * r * l + h * h * p, this.m_mass.col2.x = -r * s * l - h * a * p, this.m_mass.col3.x = -r * l - h * p, this.m_mass.col1.y = this.m_mass.col2.x, this.m_mass.col2.y = e + i + s * s * l + a * a * p, this.m_mass.col3.y = s * l + a * p, this.m_mass.col1.z = this.m_mass.col3.x, this.m_mass.col2.z = this.m_mass.col3.y, this.m_mass.col3.z = l + p, t.warmStarting ? (this.m_impulse.x *= t.dtRatio, this.m_impulse.y *= t.dtRatio, this.m_impulse.z *= t.dtRatio, n.m_linearVelocity.x -= e * this.m_impulse.x, n.m_linearVelocity.y -= e * this.m_impulse.y, n.m_angularVelocity -= l * (s * this.m_impulse.y - r * this.m_impulse.x + this.m_impulse.z), o.m_linearVelocity.x += i * this.m_impulse.x, o.m_linearVelocity.y += i * this.m_impulse.y, o.m_angularVelocity += p * (a * this.m_impulse.y - h * this.m_impulse.x + this.m_impulse.z)) : this.m_impulse.SetZero()
	}, D.prototype.SolveVelocityConstraints = function(t) {
		var e, i = 0;
		t = this.m_bodyA;
		var n = this.m_bodyB,
			o = t.m_linearVelocity,
			r = t.m_angularVelocity,
			a = n.m_linearVelocity,
			h = n.m_angularVelocity,
			l = t.m_invMass,
			p = n.m_invMass,
			c = t.m_invI,
			u = n.m_invI;
		e = t.m_xf.R;
		var d = this.m_localAnchorA.x - t.m_sweep.localCenter.x,
			m = this.m_localAnchorA.y - t.m_sweep.localCenter.y,
			i = e.col1.x * d + e.col2.x * m,
			m = e.col1.y * d + e.col2.y * m,
			d = i;
		e = n.m_xf.R;
		var _ = this.m_localAnchorB.x - n.m_sweep.localCenter.x,
			y = this.m_localAnchorB.y - n.m_sweep.localCenter.y,
			i = e.col1.x * _ + e.col2.x * y,
			y = e.col1.y * _ + e.col2.y * y,
			_ = i;
		e = a.x - h * y - o.x + r * m;
		var i = a.y + h * _ - o.y - r * d,
			f = h - r,
			g = new s;
		this.m_mass.Solve33(g, -e, -i, -f), this.m_impulse.Add(g), o.x -= l * g.x, o.y -= l * g.y, r -= c * (d * g.y - m * g.x + g.z), a.x += p * g.x, a.y += p * g.y, h += u * (_ * g.y - y * g.x + g.z), t.m_angularVelocity = r, n.m_angularVelocity = h
	}, D.prototype.SolvePositionConstraints = function(e) {
		var i, o = 0;
		e = this.m_bodyA;
		var r = this.m_bodyB;
		i = e.m_xf.R;
		var a = this.m_localAnchorA.x - e.m_sweep.localCenter.x,
			h = this.m_localAnchorA.y - e.m_sweep.localCenter.y,
			o = i.col1.x * a + i.col2.x * h,
			h = i.col1.y * a + i.col2.y * h,
			a = o;
		i = r.m_xf.R;
		var l = this.m_localAnchorB.x - r.m_sweep.localCenter.x,
			p = this.m_localAnchorB.y - r.m_sweep.localCenter.y,
			o = i.col1.x * l + i.col2.x * p,
			p = i.col1.y * l + i.col2.y * p,
			l = o;
		i = e.m_invMass;
		var o = r.m_invMass,
			c = e.m_invI,
			u = r.m_invI,
			d = r.m_sweep.c.x + l - e.m_sweep.c.x - a,
			m = r.m_sweep.c.y + p - e.m_sweep.c.y - h,
			_ = r.m_sweep.a - e.m_sweep.a - this.m_referenceAngle,
			y = 10 * t.b2_linearSlop,
			f = Math.sqrt(d * d + m * m),
			g = n.Abs(_);
		return f > y && (c *= 1, u *= 1), this.m_mass.col1.x = i + o + h * h * c + p * p * u, this.m_mass.col2.x = -h * a * c - p * l * u, this.m_mass.col3.x = -h * c - p * u, this.m_mass.col1.y = this.m_mass.col2.x, this.m_mass.col2.y = i + o + a * a * c + l * l * u, this.m_mass.col3.y = a * c + l * u, this.m_mass.col1.z = this.m_mass.col3.x, this.m_mass.col2.z = this.m_mass.col3.y, this.m_mass.col3.z = c + u, y = new s, this.m_mass.Solve33(y, -d, -m, -_), e.m_sweep.c.x -= i * y.x, e.m_sweep.c.y -= i * y.y, e.m_sweep.a -= c * (a * y.y - h * y.x + y.z), r.m_sweep.c.x += o * y.x, r.m_sweep.c.y += o * y.y, r.m_sweep.a += u * (l * y.y - p * y.x + y.z), e.SynchronizeTransform(), r.SynchronizeTransform(), f <= t.b2_linearSlop && g <= t.b2_angularSlop
	}, Box2D.inherit(S, Box2D.Dynamics.Joints.b2JointDef), S.prototype.__super = Box2D.Dynamics.Joints.b2JointDef.prototype, S.b2WeldJointDef = function() {
		Box2D.Dynamics.Joints.b2JointDef.b2JointDef.apply(this, arguments), this.localAnchorA = new o, this.localAnchorB = new o
	}, S.prototype.b2WeldJointDef = function() {
		this.__super.b2JointDef.call(this), this.type = d.e_weldJoint, this.referenceAngle = 0
	}, S.prototype.Initialize = function(t, e, i) {
		this.bodyA = t, this.bodyB = e, this.localAnchorA.SetV(this.bodyA.GetLocalPoint(i)), this.localAnchorB.SetV(this.bodyB.GetLocalPoint(i)), this.referenceAngle = this.bodyB.GetAngle() - this.bodyA.GetAngle()
	}
}(), function() {
	var t = Box2D.Dynamics.b2DebugDraw;
	t.b2DebugDraw = function() {
		this.m_xformScale = this.m_fillAlpha = this.m_alpha = this.m_lineThickness = this.m_drawScale = 1;
		var t = this;
		this.m_sprite = {
			graphics: {
				clear: function() {
					t.m_ctx.clearRect(0, 0, t.m_ctx.canvas.width, t.m_ctx.canvas.height)
				}
			}
		}
	}, t.prototype._color = function(t, e) {
		return "rgba(" + ((16711680 & t) >> 16) + "," + ((65280 & t) >> 8) + "," + (255 & t) + "," + e + ")"
	}, t.prototype.b2DebugDraw = function() {
		this.m_drawFlags = 0
	}, t.prototype.SetFlags = function(t) {
		void 0 === t && (t = 0), this.m_drawFlags = t
	}, t.prototype.GetFlags = function() {
		return this.m_drawFlags
	}, t.prototype.AppendFlags = function(t) {
		void 0 === t && (t = 0), this.m_drawFlags |= t
	}, t.prototype.ClearFlags = function(t) {
		void 0 === t && (t = 0), this.m_drawFlags &= ~t
	}, t.prototype.SetSprite = function(t) {
		this.m_ctx = t
	}, t.prototype.GetSprite = function() {
		return this.m_ctx
	}, t.prototype.SetDrawScale = function(t) {
		void 0 === t && (t = 0), this.m_drawScale = t
	}, t.prototype.GetDrawScale = function() {
		return this.m_drawScale
	}, t.prototype.SetLineThickness = function(t) {
		void 0 === t && (t = 0), this.m_lineThickness = t, this.m_ctx.strokeWidth = t
	}, t.prototype.GetLineThickness = function() {
		return this.m_lineThickness
	}, t.prototype.SetAlpha = function(t) {
		void 0 === t && (t = 0), this.m_alpha = t
	}, t.prototype.GetAlpha = function() {
		return this.m_alpha
	}, t.prototype.SetFillAlpha = function(t) {
		void 0 === t && (t = 0), this.m_fillAlpha = t
	}, t.prototype.GetFillAlpha = function() {
		return this.m_fillAlpha
	}, t.prototype.SetXFormScale = function(t) {
		void 0 === t && (t = 0), this.m_xformScale = t
	}, t.prototype.GetXFormScale = function() {
		return this.m_xformScale
	}, t.prototype.DrawPolygon = function(t, e, i) {
		if (e) {
			var n = this.m_ctx,
				o = this.m_drawScale;
			for (n.beginPath(), n.strokeStyle = this._color(i.color, this.m_alpha), n.moveTo(t[0].x * o, t[0].y * o), i = 1; e > i; i++) n.lineTo(t[i].x * o, t[i].y * o);
			n.lineTo(t[0].x * o, t[0].y * o), n.closePath(), n.stroke()
		}
	}, t.prototype.DrawSolidPolygon = function(t, e, i) {
		if (e) {
			var n = this.m_ctx,
				o = this.m_drawScale;
			for (n.beginPath(), n.strokeStyle = this._color(i.color, this.m_alpha), n.fillStyle = this._color(i.color, this.m_fillAlpha), n.moveTo(t[0].x * o, t[0].y * o), i = 1; e > i; i++) n.lineTo(t[i].x * o, t[i].y * o);
			n.lineTo(t[0].x * o, t[0].y * o), n.closePath(), n.fill(), n.stroke()
		}
	}, t.prototype.DrawCircle = function(t, e, i) {
		if (e) {
			var n = this.m_ctx,
				o = this.m_drawScale;
			n.beginPath(), n.strokeStyle = this._color(i.color, this.m_alpha), n.arc(t.x * o, t.y * o, e * o, 0, 2 * Math.PI, !0), n.closePath(), n.stroke()
		}
	}, t.prototype.DrawSolidCircle = function(t, e, i, n) {
		if (e) {
			var o = this.m_ctx,
				s = this.m_drawScale,
				r = t.x * s,
				a = t.y * s;
			o.moveTo(0, 0), o.beginPath(), o.strokeStyle = this._color(n.color, this.m_alpha), o.fillStyle = this._color(n.color, this.m_fillAlpha), o.arc(r, a, e * s, 0, 2 * Math.PI, !0), o.moveTo(r, a), o.lineTo((t.x + i.x * e) * s, (t.y + i.y * e) * s), o.closePath(), o.fill(), o.stroke()
		}
	}, t.prototype.DrawSegment = function(t, e, i) {
		var n = this.m_ctx,
			o = this.m_drawScale;
		n.strokeStyle = this._color(i.color, this.m_alpha), n.beginPath(), n.moveTo(t.x * o, t.y * o), n.lineTo(e.x * o, e.y * o), n.closePath(), n.stroke()
	}, t.prototype.DrawTransform = function(t) {
		var e = this.m_ctx,
			i = this.m_drawScale;
		e.beginPath(), e.strokeStyle = this._color(16711680, this.m_alpha), e.moveTo(t.position.x * i, t.position.y * i), e.lineTo((t.position.x + this.m_xformScale * t.R.col1.x) * i, (t.position.y + this.m_xformScale * t.R.col1.y) * i), e.strokeStyle = this._color(65280, this.m_alpha), e.moveTo(t.position.x * i, t.position.y * i), e.lineTo((t.position.x + this.m_xformScale * t.R.col2.x) * i, (t.position.y + this.m_xformScale * t.R.col2.y) * i), e.closePath(), e.stroke()
	}
}();
var i;
for (i = 0; i < Box2D.postDefs.length; ++i) Box2D.postDefs[i]();
delete Box2D.postDefs, "undefined" != typeof require && (module.exports = Box2D), function(t) {
	var e = function() {
			function t() {}
			return t.isNumber = function(t) {
				return "number" == typeof t && !isNaN(t)
			}, t
		}();
	t.NumberUtils = e
}(ns_egret || (ns_egret = {})), __extends = this.__extends ||
function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype, t.prototype = new i
}, function(t) {
	var e = function(e) {
			function i() {
				e.call(this), this._time = 0, this.frameRate = 60
			}
			return __extends(i, e), i.prototype.executeMainLoop = function(e, n) {
				var o = this,
					s = function() {
						var r = t.getTimer();
						e.call(n, r - o._time), o._time = r, i.requestAnimationFrame.call(window, s)
					};
				i.requestAnimationFrame.call(window, s)
			}, i.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
			function(t) {
				return window.setTimeout(t, 1e3 / 60)
			}, i
		}(t.DeviceContext);
	t.HTML5DeviceContext = e
}(ns_egret || (ns_egret = {})), __extends = this.__extends ||
function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype, t.prototype = new i
}, function(t) {
	var e = function(e) {
			function i(t) {
				this.canvas = t, this.canvasContext = t.getContext("2d");
				var i = this.canvasContext.setTransform,
					n = this;
				this.canvasContext.setTransform = function(t, e, o, s, r, a) {
					n._matrixA = t, n._matrixB = e, n._matrixC = o, n._matrixD = s, n._matrixTx = r, n._matrixTy = a, i.call(n.canvasContext, t, e, o, s, r, a)
				}, this._matrixA = 1, this._matrixC = this._matrixB = 0, this._matrixD = 1, this._transformTy = this._transformTx = this._matrixTy = this._matrixTx = 0, e.call(this)
			}
			return __extends(i, e), i.prototype.clearScreen = function() {
				this.setTransform(t.Matrix.identity.identity());
				for (var e = t.RenderFilter.getInstance().getDrawAreaList(), i = 0, n = e.length; n > i; i++) {
					var o = e[i];
					this.clearRect(o.x + this._transformTx, o.y + this._transformTy, o.width, o.height)
				}
				this.renderCost = 0
			}, i.prototype.clearRect = function(t, e, i, n) {
				this.canvasContext.clearRect(t, e, i, n)
			}, i.prototype.drawImage = function(i, n, o, s, r, a, h, l, p) {
				n /= t.MainContext.instance.rendererContext.texture_scale_factor, o /= t.MainContext.instance.rendererContext.texture_scale_factor, s /= t.MainContext.instance.rendererContext.texture_scale_factor, r /= t.MainContext.instance.rendererContext.texture_scale_factor, t.DEBUG && t.DEBUG.DRAW_IMAGE && t.DEBUG.checkDrawImage(i, n, o, s, r, a, h, l, p), i = i._bitmapData;
				var c = t.getTimer();
				a += this._transformTx, h += this._transformTy, this.canvasContext.drawImage(i, n, o, s, r, a, h, l, p), e.prototype.drawImage.call(this, i, n, o, s, r, a, h, l, p), this.renderCost += t.getTimer() - c
			}, i.prototype.setTransform = function(t) {
				1 == t.a && 0 == t.b && 0 == t.c && 1 == t.d && 1 == this._matrixA && 0 == this._matrixB && 0 == this._matrixC && 1 == this._matrixD ? (this._transformTx = t.tx - this._matrixTx, this._transformTy = t.ty - this._matrixTy) : (this._transformTx = this._transformTy = 0, (this._matrixA != t.a || this._matrixB != t.b || this._matrixC != t.c || this._matrixD != t.d || this._matrixTx != t.tx || this._matrixTy != t.ty) && this.canvasContext.setTransform(t.a, t.b, t.c, t.d, t.tx, t.ty))
			}, i.prototype.save = function() {
				this.canvasContext.save()
			}, i.prototype.restore = function() {
				this.canvasContext.restore(), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0)
			}, i.prototype.setAlpha = function(e, i) {
				e != this.canvasContext.globalAlpha && (this.canvasContext.globalAlpha = e), this.canvasContext.globalCompositeOperation = i ? i.value : t.BlendMode.NORMAL.value
			}, i.prototype.setupFont = function(t, e, i) {
				var n = this.canvasContext;
				n.font = t, n.textAlign = e || "left", n.textBaseline = i || "top"
			}, i.prototype.measureText = function(t) {
				return this.canvasContext.measureText(t).width
			}, i.prototype.drawText = function(t, i, n, o, s) {
				var r = t._strokeColorString,
					a = t.stroke,
					h = this.canvasContext;
				h.fillStyle = t._textColorString, h.strokeStyle = r, a && (h.lineWidth = 2 * a, h.strokeText(i, n + this._transformTx, o + this._transformTy, s || 65535)), h.fillText(i, n + this._transformTx, o + this._transformTy, s || 65535), e.prototype.drawText.call(this, t, i, n, o, s)
			}, i.prototype.clip = function(t, e, i, n) {
				this.canvasContext.beginPath(), this.canvasContext.rect(t + this._transformTx, e + this._transformTy, i, n), this.canvasContext.clip(), this.canvasContext.closePath()
			}, i.prototype.strokeRect = function(t, e, i, n, o) {
				this.canvasContext.strokeStyle = o, this.canvasContext.strokeRect(t, e, i, n)
			}, i
		}(t.RendererContext);
	t.HTML5CanvasRenderer = e
}(ns_egret || (ns_egret = {})), __extends = this.__extends ||
function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype, t.prototype = new i
}, function(t) {
	var e = function(e) {
			function i() {
				e.call(this), this._soundList = {}, this._canPlay = !0, this._supportedFormat = [];
				var t = this._capabilities = {
					mp3: !1,
					ogg: !1,
					wav: !1,
					mp4: !1,
					m4a: !1
				};
				this._checkCanPlay(t);
				for (var i in t) if (t[i]) {
					this._soundSupported = !0;
					break
				}
				t = navigator.userAgent, (/Mobile/.test(t) && (/iPhone OS/.test(t) || /iPad/.test(t) || /Firefox/.test(t)) || /MSIE/.test(t)) && (this._canPlay = !1), this._getSupportedAudioFormat()
			}
			return __extends(i, e), i.prototype._checkCanPlay = function(t) {
				var e = document.createElement("audio");
				if (e.canPlayType) {
					var i = function(t) {
							return t = e.canPlayType(t), "no" != t && "" != t
						};
					t.mp3 = i("audio/mpeg"), t.mp4 = i("audio/mp4"), t.m4a = i("audio/x-m4a") || i("audio/aac"), t.ogg = i('audio/ogg; codecs="vorbis"'), t.wav = i('audio/wav; codecs="1"')
				}
			}, i.prototype.preloadSound = function(e) {
				if (this._soundSupported) {
					var i = this._getExtFromFullPath(e);
					if (this.isFormatSupported(i) && !this._soundList.hasOwnProperty(e) && this._canPlay) {
						i = new Audio(t.ResourceLoader.prefix + e), i.preload = "auto";
						var n = function() {
								this.removeEventListener("canplaythrough", n, !1), this.removeEventListener("error", o, !1)
							},
							o = function() {
								this.removeEventListener("canplaythrough", n, !1), this.removeEventListener("error", o, !1)
							};
						i.addEventListener("canplaythrough", n, !1), i.addEventListener("error", o, !1), this._soundList[e] = i, i.load()
					}
				}
			}, i.prototype._getSupportedAudioFormat = function() {
				if (this._soundSupported) {
					var t, e = ["ogg", "mp3", "wav", "mp4", "m4a"];
					for (t in e) {
						var i = e[t];
						this._capabilities[i] && this._supportedFormat.push(i)
					}
				}
			}, i.prototype.isFormatSupported = function(t) {
				var e, i = this._supportedFormat;
				for (e in i) if (t === i[e]) return !0;
				return !1
			}, i.prototype._getExtFromFullPath = function(t) {
				var e = t.lastIndexOf(".");
				return -1 !== e ? t.substring(e + 1, t.length) : ""
			}, i.prototype.playMusic = function(e, i) {
				if ("undefined" == typeof i && (i = !0), this._soundSupported) {
					var n, o = this._soundList;
					o.hasOwnProperty(this._playingMusicName) && o[this._playingMusicName].pause(), this._playingMusicName = e, o.hasOwnProperty(this._playingMusicName) ? n = o[this._playingMusicName] : (n = new Audio(t.ResourceLoader.prefix + e), n.preload = "auto", o[e] = n, n.load()), n.addEventListener("pause", function() {
						t.SoundContext.isMusicPlaying = !1, this.removeEventListener("pause", arguments.callee, !1)
					}, !1), isNaN(n.duration) || (n.currentTime = 0), n.loop = i, n.play(), t.SoundContext.isMusicPlaying = !0
				}
			}, i.prototype.stopMusic = function(e) {
				var i = this._soundList,
					n = this._playingMusicName;
				if (i.hasOwnProperty(n)) {
					var o = i[n];
					o.pause(), o.currentTime = o.duration, e && delete i[n], t.SoundContext.isMusicPlaying = !1
				}
			}, i
		}(t.SoundContext);
	t.HTML5SoundContext = e
}(ns_egret || (ns_egret = {})), __extends = this.__extends ||
function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype, t.prototype = new i
}, function(t) {
	var e = function(e) {
			function i() {
				e.apply(this, arguments)
			}
			return __extends(i, e), i.prototype.send = function(e) {
				function i() {
					4 == s.readyState && 200 == s.status && n(s)
				}
				function n(i) {
					i = i.responseText, this.type == t.ResourceLoader.DATA_TYPE_BINARY && (i = o._stringConvertToArray(i)), e.callback.call(e.thisObj, i)
				}
				if (e.type == t.ResourceLoader.DATA_TYPE_IMAGE) this.loadImage(e);
				else {
					var o = this,
						s = this._getXMLHttpRequest();
					s.open(e.method, e.prefix + e.url), "GET" != e.method && s.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), void 0 != e.type && this._setXMLHttpRequestHeader(s, e.type), s.onreadystatechange = i, s.send("GET" != e.method ? e.data : null)
				}
			}, i.prototype.loadImage = function(e) {
				function i() {
					o.removeEventListener("load", i), o.removeEventListener("error", i);
					var n = t.Texture.create(e.url);
					n.bitmapData = o, t.TextureCache.getInstance().addTexture(e.url, n), e.callback.call(e.thisObj, n)
				}
				function n() {
					o.removeEventListener("error", n)
				}
				var o = new Image;
				o.crossOrigin = "Anonymous";
				var s = e.prefix + e.url;
				o.addEventListener("load", i), o.addEventListener("error", n), o.src = s
			}, i.prototype._stringConvertToArray = function(t) {
				if (!t) return null;
				for (var e = new Uint8Array(t.length), i = 0; i < t.length; i++) e[i] = 255 & t.charCodeAt(i);
				return e
			}, i.prototype._setXMLHttpRequestHeader = function(e, i) {
				/msie/i.test(navigator.userAgent) && !/opera/i.test(navigator.userAgent) ? i == t.ResourceLoader.DATA_TYPE_BINARY ? e.setRequestHeader("Accept-Charset", "x-user-defined") : e.setRequestHeader("Accept-Charset", "utf-8") : e.overrideMimeType && e.overrideMimeType(i == t.ResourceLoader.DATA_TYPE_BINARY ? "text/plain; charset=x-user-defined" : "text/plain; charset=utf-8")
			}, i.prototype._getXMLHttpRequest = function() {
				return window.XMLHttpRequest ? new window.XMLHttpRequest : new ActiveXObject("MSXML2.XMLHTTP")
			}, i
		}(t.NetContext);
	t.HTML5NetContext = e
}(ns_egret || (ns_egret = {})), __extends = this.__extends ||
function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype, t.prototype = new i
}, function(t) {
	var e = function(e) {
			function i(t) {
				e.call(this), this.canvas = t
			}
			return __extends(i, e), i.prototype.run = function() {
				var t = this;
				"ontouchstart" in window ? (this.canvas.addEventListener("touchstart", function(e) {
					for (var i = e.changedTouches.length, n = 0; i > n && n < t.maxTouches; n++) t._onTouchBegin(e.changedTouches[n]);
					e.stopPropagation(), e.preventDefault()
				}, !1), this.canvas.addEventListener("touchmove", function(e) {
					for (var i = e.changedTouches.length, n = 0; i > n && n < t.maxTouches; n++) t._onTouchMove(e.changedTouches[n]);
					e.stopPropagation(), e.preventDefault()
				}, !1), this.canvas.addEventListener("touchend", function(e) {
					for (var i = e.changedTouches.length, n = 0; i > n && n < t.maxTouches; n++) t._onTouchEnd(e.changedTouches[n]);
					e.stopPropagation(), e.preventDefault()
				}, !1), this.canvas.addEventListener("touchcancel", function(e) {
					for (var i = e.changedTouches.length, n = 0; i > n && n < t.maxTouches; n++) t._onTouchEnd(e.changedTouches[n]);
					e.stopPropagation(), e.preventDefault()
				}, !1)) : window.navigator.msPointerEnabled ? (this.canvas.addEventListener("MSPointerDown", function(e) {
					t._onTouchBegin(e), e.stopPropagation(), e.preventDefault()
				}, !1), this.canvas.addEventListener("MSPointerMove", function(e) {
					t._onTouchMove(e), e.stopPropagation(), e.preventDefault()
				}, !1), this.canvas.addEventListener("MSPointerUp", function(e) {
					t._onTouchEnd(e), e.stopPropagation(), e.preventDefault()
				}, !1)) : (this.canvas.addEventListener("mousedown", function(e) {
					t._onTouchBegin(e)
				}), this.canvas.addEventListener("mousemove", function(e) {
					t._onTouchMove(e)
				}), this.canvas.addEventListener("mouseup", function(e) {
					t._onTouchEnd(e)
				}))
			}, i.prototype._onTouchBegin = function(t) {
				var e = this.getLocation(this.canvas, t),
					i = -1;
				t.hasOwnProperty("identifier") && (i = t.identifier), this.onTouchBegan(e.x, e.y, i)
			}, i.prototype._onTouchMove = function(t) {
				var e = this.getLocation(this.canvas, t),
					i = -1;
				t.hasOwnProperty("identifier") && (i = t.identifier), this.onTouchMove(e.x, e.y, i)
			}, i.prototype._onTouchEnd = function(t) {
				var e = this.getLocation(this.canvas, t),
					i = -1;
				t.hasOwnProperty("identifier") && (i = t.identifier), this.onTouchEnd(e.x, e.y, i)
			}, i.prototype.getLocation = function(e, i) {
				var n, o, s = document.documentElement,
					r = window;
				"function" == typeof e.getBoundingClientRect ? (o = e.getBoundingClientRect(), n = o.left, o = o.top) : o = n = 0, n += r.pageXOffset - s.clientLeft, o += r.pageYOffset - s.clientTop, null != i.pageX ? (s = i.pageX, r = i.pageY) : (n -= document.body.scrollLeft, o -= document.body.scrollTop, s = i.clientX, r = i.clientY);
				var a = t.Point.identity;
				return a.x = (s - n) / t.StageDelegate.getInstance().getScaleX(), a.y = (r - o) / t.StageDelegate.getInstance().getScaleY(), a
			}, i
		}(t.TouchContext);
	t.HTML5TouchContext = e
}(ns_egret || (ns_egret = {})), __extends = this.__extends ||
function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype, t.prototype = new i
}, function(t) {
	var e = function(e) {
			function i() {
				e.call(this)
			}
			return __extends(i, e), i.prototype.createLoadingController = function() {
				return new t.LoadingController
			}, i.prototype.getAssets = function(e) {
				return t.ResourceLoader.create(e).data
			}, i
		}(t.AssetsContext);
	t.HTML5AssetsContext = e
}(ns_egret || (ns_egret = {})), egret_h5 = {
	prefix: "",
	loadScript: function(t, e) {
		var i = 0,
			n = function() {
				egret_h5.loadSingleScript(egret_h5.prefix + t[i], function() {
					i++, i >= t.length ? e() : n()
				})
			};
		n()
	},
	loadSingleScript: function(t, e) {
		var i = document.createElement("script");
		i.hasOwnProperty("async") && (i.async = !1), i.src = t, i.addEventListener("load", function() {
			this.removeEventListener("load", arguments.callee, !1), e()
		}, !1), document.body.appendChild(i)
	},
	startGame: function() {
		var t = document.getElementById(ns_egret.StageDelegate.canvas_name);
		context = ns_egret.MainContext.instance, context.rendererContext = new ns_egret.HTML5CanvasRenderer(t), context.netContext = new ns_egret.HTML5NetContext, context.touchContext = new ns_egret.HTML5TouchContext(t), context.deviceContext = new ns_egret.HTML5DeviceContext;
		var e = new ns_egret.EqualToFrame,
			i = ns_egret.Browser.getInstance().isMobile ? new ns_egret.FixedWidth : new ns_egret.FixedSize(480, 800),
			e = new ns_egret.ResolutionPolicy(e, i);
		ns_egret.StageDelegate.getInstance().setDesignSize(480, 800, e), context.stage = new ns_egret.Stage(t.width, t.height), ns_egret.ResourceLoader.prefix = "vapp/44/", ns_egret.RendererContext.CONTENT_SCALE_FACTOR = 1, context.run(), app && app.startGame && app.startGame()
	},
	preloadScript: function(t, e) {
		egret_h5.preloadList || (egret_h5.preloadList = []), egret_h5.preloadList = egret_h5.preloadList.concat(t.map(function(t) {
			return e + t
		}))
	},
	startLoading: function() {
		egret_h5.loadScript(egret_h5.preloadList, egret_h5.startGame)
	}
};
var __extends = this.__extends ||
function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype, t.prototype = new i
}, GameApp = function() {
	function t() {}
	return t.prototype.startGame = function() {
		ns_egret.ResourceLoader.registerHandler("png", ImageResourceLoader), ns_egret.ResourceLoader.registerHandler("jpg", ImageResourceLoader), ns_egret.ResourceLoader.registerHandler("json", MovieClipDataResourceLoader);
		var t, e = new LoadingManager(this.loadAssets, this, null),
			i = ["loadingmap.jpg", "loadingbar_01.png", "loadingbar_02.png"];
		for (t in i) e.addPreLoad(i[t], LoadingManager.DATA_TYPE_IMAGE);
		e.startLoading(), this.systemManager = new ns_egret.SystemManager, ns_egret.MainContext.instance.stage.addChild(this.systemManager)
	}, t.prototype.loadAssets = function() {
		var t, e = new LoadingManager(this.onResourceLoadComplete, this, new LoadingUI),
			i = "01.jpg hero10.png bullet036.png hero10.json black_gui-body.png black_gui-eye_1.png black_gui-wring_l.png s_gold1.png v_golditem.png v_double.png v_longxi.png v_bomb1.png item_gem.png item_magnet.png item_gem_02.png item_gem_03.png v_cannon.png v_blood.png warn_mark.png warn_line.png rock.png pk_line.png char_s1.png progress_monsterBar.png progress_monsterBg.png".split(" ");
		for (t in i) {
			var n = i[t];
			e.addPreLoad(n, LoadingManager.DATA_TYPE_IMAGE)
		}
		i = ["Result.jmc", "MainMenuSkin.jmc"];
		for (t in i) n = i[t], e.addPreLoad(n, LoadingManager.DATA_TYPE_MC);
		e.addPreLoad("wave.xml", LoadingManager.DATA_TYPE_TEXT), e.addPreLoad("monster.xml", LoadingManager.DATA_TYPE_TEXT), e.addPreLoad("drop.xml", LoadingManager.DATA_TYPE_TEXT), e.startLoading()
	}, t.prototype.onResourceLoadComplete = function() {
		utils.Config.initConfig(), this.createGameScene()
	}, t.prototype.createGameScene = function() {
		this.stateMachine = new StateMachine, this.stateMachine.changeState(new MainMenuState)
	}, t
}(), ImageResourceLoader = function(t) {
	function e(e) {
		t.call(this, e, ns_egret.ResourceLoader.DATA_TYPE_IMAGE)
	}
	return __extends(e, t), e
}(ns_egret.ResourceLoader), MovieClipDataResourceLoader = function(t) {
	function e(e) {
		t.call(this, e, ns_egret.ResourceLoader.DATA_TYPE_TEXT), this.onLoadComplete = function(t) {
			this.data = JSON.parse(t)
		}
	}
	return __extends(e, t), e
}(ns_egret.ResourceLoader), TextResourceLoader = function(t) {
	function e(e) {
		t.call(this, e, ns_egret.ResourceLoader.DATA_TYPE_TEXT), this.onLoadComplete = function(t) {
			this.data = t
		}
	}
	return __extends(e, t), e
}(ns_egret.ResourceLoader), utils;
!
function(t) {
	t.createBitmap = function(t) {
		var e = new ns_egret.Bitmap;
		return t = ns_egret.TextureCache.getInstance().getTexture(t), e.texture = t, e
	}, t.createMovieClip = function(t) {
		var e = ns_egret.ResourceLoader.create(t + ".json").data;
		return t = ns_egret.TextureCache.getInstance().getTexture(t + ".png"), new ns_egret.MovieClip(e, t)
	}, t.getGameHeight = function() {
		return ns_egret.MainContext.instance.stage.stageHeight
	}, t.getGameWidth = function() {
		return ns_egret.MainContext.instance.stage.stageWidth
	};
	var e = function() {
			function t() {}
			return t.initConfig = function() {
				var e = ns_egret.ResourceLoader.create("monster.xml").data;
				t.enemyData = new ns_egret.XML(e), e = ns_egret.ResourceLoader.create("drop.xml").data, t.dropData = new ns_egret.XML(e)
			}, t
		}();
	t.Config = e, t.getEnemyConfigById = function(t) {
		return e.enemyData.elements[0].element[t - 1]
	}, t.getItemConfigById = function(t) {
		return e.dropData.items[0].element[t - 1]
	}
}(utils || (utils = {}));
var movieclip;
!
function(t) {
	var e = function(t) {
			function e(e) {
				t.call(this), this._duringTime = 0, e = utils.createBitmap("black_gui-wring_l.png"), this.addChild(e), e.x = 33.75, e.y = 60, e.relativeAnchorPointX = 1, e.scaleX = -1;
				var i = utils.createBitmap("black_gui-wring_l.png");
				this.addChild(i), i.x = 63.75, i.y = 60, i.relativeAnchorPointX = 1;
				var n = utils.createBitmap("black_gui-body.png");
				this.addChild(n), n = utils.createBitmap("black_gui-eye_1.png"), this.addChild(n), n.x = 30, n.y = 45, this.wing_left = e, this.wing_right = i
			}
			return __extends(e, t), e.prototype.onTicker = function(t) {
				this._duringTime += t, t = 20 * Math.sin(10 * this._duringTime / 1e3 % 180), this.wing_left.rotation = t + 90, this.wing_right.rotation = -t - 90
			}, e.create = function(t) {
				return new e(t)
			}, e
		}(ns_egret.DisplayObjectContainer);
	t.EnemyMovieClip = e
}(movieclip || (movieclip = {}));
var app = new GameApp,
	__extends = this.__extends ||
function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype, t.prototype = new i
}, LoadingUI = function() {
	function t() {}
	return t.prototype.addToStage = function() {
		this.bg = new ns_egret.UIAsset, this.bg.skinName = utils.createBitmap("loadingmap.jpg"), ns_egret.PopUpManager.addPopUp(this.bg, !1, !1), this.progress = new ns_egret.ProgressBar, this.progress.slideDuration = 0, this.progress.horizontalCenter = 0, this.progress.bottom = 105, this.progress.skinName = new ProgressBarSkin, this.progress.labelFunction = function(t, e) {
			return "???????????????..." + t + "/" + e
		}, ns_egret.PopUpManager.addPopUp(this.progress, !1, !1)
	}, t.prototype.removeFromStage = function() {
		ns_egret.PopUpManager.removePopUp(this.bg), ns_egret.PopUpManager.removePopUp(this.progress)
	}, t.prototype.onProgress = function(t, e) {
		this.progress.maximum = e, this.progress.value = t
	}, t
}(), ProgressBarSkin = function(t) {
	function e() {
		t.call(this)
	}
	return __extends(e, t), Object.defineProperty(e.prototype, "skinParts", {
		get: function() {
			return e._skinParts
		},
		enumerable: !0,
		configurable: !0
	}), e.prototype.createChildren = function() {
		t.prototype.createChildren.call(this);
		var e = new ns_egret.UIAsset;
		e.left = -64, e.top = -64, e.skinName = utils.createBitmap("loadingbar_01.png"), this.addElement(e), this.thumb = new ns_egret.UIAsset, e = utils.createBitmap("loadingbar_02.png"), this.thumb.skinName = e, this.addElement(this.thumb), e = e.getBounds(), this.width = e.width, this.height = e.height, this.track = new ns_egret.UIAsset, this.track.width = e.width, this.track.height = e.height, this.addElement(this.track), this.labelDisplay = new ns_egret.Label, this.labelDisplay.textAlign = ns_egret.HorizontalAlign.CENTER, this.labelDisplay.verticalAlign = ns_egret.VerticalAlign.MIDDLE, this.labelDisplay.maxDisplayedLines = 1, this.labelDisplay.size = 24, this.labelDisplay.left = 5, this.labelDisplay.right = 5, this.labelDisplay.top = 3, this.labelDisplay.bottom = 3, this.labelDisplay.textColor = 16777215, this.addElement(this.labelDisplay)
	}, e._skinParts = ["thumb", "track", "labelDisplay"], e
}(ns_egret.Skin), __extends = this.__extends ||
function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype, t.prototype = new i
}, GameObject = function() {
	function t() {
		this.collisionBounds = new ns_egret.Rectangle(0, 0, 1, 1)
	}
	return t.prototype.onCreate = function() {}, t.prototype.onDestroy = function() {}, t.prototype.onEnterFrame = function() {}, t.prototype.addToCollision = function() {
		this.collisionBounds = this.view.getBounds().clone(), GameScene.collision.addInitiativeObject(this)
	}, t.prototype.getCollisionBounds = function() {
		return this.view.worldBounds
	}, t.prototype.onHit = function() {}, t
}(), GameScene = function(t) {
	function e() {
		t.call(this), this._lastTime = 0, this._flag = !1;
		var i = ns_egret.ResourceLoader.create("wave.xml").data;
		for (this.enemyData = new ns_egret.XML(i), e.collision = new CollisionManager, this.container = new ns_egret.DisplayObjectContainer, this.view = e.container = this.container, i = 0; 50 >= i; i++) ObjectPool.getInstance().destroyObject(ObjectPool.getInstance().createObject(Bullet));
		e.instance = this, this.uiContainer = new ns_egret.DisplayObjectContainer, i = utils.createBitmap("s_gold1.png"), i.y = 35, this.uiContainer.addChild(i), this.scoreLabel = new ns_egret.TextField, this.scoreLabel.stroke = 2, this.uiContainer.addChild(this.scoreLabel), this.goldLabel = new ns_egret.TextField, this.goldLabel.stroke = 2, this.goldLabel.x = 35, this.goldLabel.y = 35, this.uiContainer.addChild(this.goldLabel), this.distanceLabel = new ns_egret.TextField, this.distanceLabel.stroke = 2, this.distanceLabel.width = 200, this.distanceLabel.x = 265, this.distanceLabel.textAlign = ns_egret.HorizontalAlign.RIGHT, this.uiContainer.addChild(this.distanceLabel), this.warnMark = utils.createBitmap("warn_mark.png"), this.warnMark.anchorX = .5, this.warnLine = utils.createBitmap("warn_line.png"), this.warnLine.scaleY = 4, this.warnLine.y = 50, this.pkLine = utils.createBitmap("pk_line.png"), this.pkLine.y = 100, this.uiContainer.addChild(this.pkLine), this.head = utils.createBitmap("char_s1.png"), this.uiContainer.addChild(this.head)
	}
	return __extends(e, t), e.prototype.onCreate = function() {
		var t = ObjectPool.getInstance().createObject(Background);
		this.container.addChild(t.view), t = ObjectPool.getInstance().createObject(Hero), this.container.addChild(t.view), e.hero = t, this.scoreLabel.text = FightInfo.instance.score.toString(), this.distanceLabel.text = FightInfo.instance.distance.toString() + "M", this.goldLabel.text = FightInfo.instance.gold.toString(), this.head.y = 400 + this.pkLine.y, this._lastTime = this._wave = this.godEnemyLeft = 0
	}, e.prototype.onEnterFrame = function(t) {
		if (!(t > 5e3)) {
			for (this._lastTime += t; 300 < this._lastTime;) {
				this._wave++;
				for (var i = this.getEnemyConfig(), n = 1; 5 > n; n++) {
					var o = parseInt(i["$slot" + n]),
						s = ObjectPool.getInstance().createObject(Enemy);
					s.configId = o, this.container.addChild(s.view), s.moveTo(125 * n - 120), this._lastTime -= 300
				}
				0 == this._wave % 3 && 15 < this._wave && (this.container.addChild(this.warnLine), this.warnLine.x = e.hero.view.x + 63, ns_egret.Tween.get(this.warnLine, {
					loop: !0
				}).to({
					alpha: 0
				}, 100).to({
					alpha: 1
				}, 100), this.container.addChild(this.warnMark), this.warnMark.x = e.hero.view.x + 65, this.godEnemyX = e.hero.view.x + 15, this.godEnemyLeft = 1500)
			}
			0 < this.godEnemyLeft && (this.godEnemyLeft -= t, 0 >= this.godEnemyLeft && (this.godEnemyLeft = 0, this.container.removeChild(this.warnLine), this.container.removeChild(this.warnMark), ns_egret.Tween.removeTweens(this.warnLine), t = ObjectPool.getInstance().createObject(GodEnemy), this.container.addChild(t.view), t.moveTo(this.godEnemyX))), e.collision.hitTest(), FightInfo.instance.distance += .1, this.distanceLabel.text = Math.floor(FightInfo.instance.distance) + "M", this.head.y -= .01, this.head.y <= this.pkLine.y && (this.head.y = 400 + this.pkLine.y)
		}
	}, e.prototype.onGetGold = function() {
		FightInfo.instance.gold++, this.goldLabel.text = FightInfo.instance.gold.toString()
	}, e.prototype.onKillMonster = function(t) {
		FightInfo.instance.score += t, this.scoreLabel.text = FightInfo.instance.score.toString(), FightInfo.instance.monsterKill++
	}, e.prototype.getEnemyConfig = function() {
		return this.enemyData.elements[0].element[this._wave]
	}, e.prototype.onDestroy = function() {
		ns_egret.Tween.removeTweens(this.warnLine), this.container.removeChildren()
	}, e.key = "gamescene", e
}(GameObject), ObjectPool = function() {
	function t() {
		this._pool = {}, this._list = [], ns_egret.Ticker.getInstance().register(this.onEnterFrame, this)
	}
	return t.prototype.onEnterFrame = function(t) {
		for (var e = this._list.concat(), i = 0, n = e.length; n > i; i++) e[i].onEnterFrame(t)
	}, t.prototype.createObject = function(t) {
		var e = t.key,
			i = this._pool[e];
		return null != i && i.length ? t = i.shift() : (t = new t, t.key = e), t.onCreate(), this._list.push(t), t
	}, t.prototype.destroyObject = function(t) {
		var e = t.key;
		null == this._pool[e] && (this._pool[e] = []), this._pool[e].push(t), t.onDestroy(), t = this._list.indexOf(t), -1 != t && this._list.splice(t, 1)
	}, t.prototype.destroyAllObject = function() {
		for (; this._list.length;) this.destroyObject(this._list[0])
	}, t.getInstance = function() {
		return null == t.instance && (t.instance = new t), t.instance
	}, t
}(), Background = function(t) {
	function e() {
		t.call(this), this.tile_list = [], this._lastTime = this.max = this.tile_height = 0, this.view = this.container = new ns_egret.DisplayObjectContainer, this.addTile(), this.addTile(), this.addTile(), this.addTile(), this.addTile(), this.addTile(), this.addTile()
	}
	return __extends(e, t), e.prototype.addTile = function() {
		var t = utils.createBitmap("01.jpg");
		this.container.addChild(t), this.tile_height = t.getBounds().height, this.max = this.tile_list.length * this.tile_height, t.y = -this.max, this.tile_list.push(t)
	}, e.prototype.onEnterFrame = function(t) {
		for (this._lastTime += t; 50 < this._lastTime;) this._lastTime -= 50;
		this.view.y += .2 * t, this.view.y >= this.max && this.addTile()
	}, e.key = "background", e
}(GameObject), Hero = function(t) {
	function e() {
		t.call(this), this._isDead = !1, this.view = this.container = new ns_egret.DisplayObjectContainer;
		var e = utils.createMovieClip("hero10");
		this.container.addChild(e), e.setInterval(4), this.hero = e
	}
	return __extends(e, t), e.prototype.onCreate = function() {
		this._isDead = !1, GameScene.collision.addInitiativeObject(this), this.hero.gotoAndPlay("run"), this.view.x = 240 + 400 * Math.random() - 200, this.view.y = utils.getGameHeight() - 100, this._doubleTime = this._lastTime = 0
	}, e.prototype.onDestroy = function() {
		this.hero.gotoAndStop("run"), this._isDead = !0, GameScene.collision.removeInitiativeObject(this)
	}, e.prototype.onEnterFrame = function(t) {
		for (this._lastTime += t; 100 < this._lastTime;) this._lastTime -= 100, 0 < this._doubleTime ? (this.createBullet(2), this.createBullet(-2)) : this.createBullet(0);
		0 < this._doubleTime && (this._doubleTime -= t)
	}, e.prototype.onHit = function(t) {
		(t instanceof Enemy || t instanceof GodEnemy) && 0 < t.view.y && (app.stateMachine.changeState(new FightResultState), ObjectPool.getInstance().destroyObject(GameScene.instance), ObjectPool.getInstance().destroyAllObject())
	}, e.prototype.createBullet = function(t) {
		var e = ObjectPool.getInstance().createObject(Bullet);
		GameScene.container.addChild(e.view), e.view.x = this.view.x + 20 * t + 65, e.view.y = this.view.y
	}, e.prototype.moveTo = function(t) {
		this.view.x = t - 65
	}, e.prototype.onGetDouble = function() {
		this._doubleTime = 1e4
	}, e.prototype.getCollisionBounds = function() {
		var e = t.prototype.getCollisionBounds.call(this);
		return this.collisionBounds.initialize(e.x + 30, e.y, e.width - 60, e.height)
	}, e.key = "hero", e
}(GameObject), Bullet = function(t) {
	function e() {
		t.call(this), this._isDead = !1, this.view = utils.createBitmap("bullet036.png"), this.view.anchorX = this.view.anchorY = .5
	}
	return __extends(e, t), e.prototype.onCreate = function() {
		GameScene.collision.addInitiativeObject(this), this._isDead = !1, this.damage = 45
	}, e.prototype.onHit = function(t) {
		!(t instanceof Item) && !(t instanceof GodEnemy) && (this._isDead && (this.view.parent && (this.view.parent.removeChild(this.view), ObjectPool.getInstance().destroyObject(this)), this._isDead = !1), this._isDead = !0)
	}, e.prototype.onDestroy = function() {
		GameScene.collision.removeInitiativeObject(this)
	}, e.prototype.onEnterFrame = function(t) {
		this.view.y -= t, 0 >= this.view.y && this.view.parent && (this.view.parent.removeChild(this.view), ObjectPool.getInstance().destroyObject(this))
	}, e.key = "bullet", e
}(GameObject), Enemy = function(t) {
	function e() {
		t.call(this);
		var e = new ns_egret.DisplayObjectContainer;
		this.view = e, this.progress = new ns_egret.ProgressBar, this.progress.slideDuration = 0, this.progress.horizontalCenter = 0, this.progress.x = 3, this.progress.y = 95, this.progress.skinName = new EnemyProgressBarSkin, e.addChild(this.progress)
	}
	return __extends(e, t), Object.defineProperty(e.prototype, "configId", {
		set: function(t) {
			this._configId != t && (this._configId = t, t = utils.getEnemyConfigById(t), this.hpMax = parseInt(t.$hp), this.hp = parseInt(t.$hp), this.mc && this.view.removeChild(this.mc), this.mc = movieclip.EnemyMovieClip.create(this._configId), this.view.addChild(this.mc))
		},
		enumerable: !0,
		configurable: !0
	}), e.prototype.onCreate = function() {
		GameScene.collision.addPassiveObject(this), this.view.y = -120, this.progress.maximum = 1, this.progress.value = 1, this.progress.visible = !1
	}, e.prototype.onDestroy = function() {
		GameScene.collision.removePassiveObject(this)
	}, e.prototype.onHit = function(t) {
		t instanceof Bullet && -90 < this.view.y && (this.hp -= t.damage, 0 > this.hp ? (this.dead(), this.dropItem(), GameScene.instance.onKillMonster(Math.floor(this.hpMax / 10))) : (this.progress.maximum = this.hpMax, this.progress.value = this.hp, this.progress.visible = !0))
	}, e.prototype.onEnterFrame = function(t) {
		this.mc.onTicker(t), this.view.y += .3 * t, this.view.y > utils.getGameHeight() && this.dead()
	}, e.prototype.moveTo = function(t) {
		this.view.x = t
	}, e.prototype.dead = function() {
		this.view.parent.removeChild(this.view), ObjectPool.getInstance().destroyObject(this)
	}, e.prototype.dropItem = function() {
		for (var t = 9939 * Math.random(), e = 1, i = utils.getItemConfigById(e); parseInt(i.$rangmax) < t;) e++, i = utils.getItemConfigById(e);
		t = ObjectPool.getInstance().createObject(Item), t.config = i, t.view.x = this.view.x, t.view.y = this.view.y, GameScene.container.addChild(t.view)
	}, e.key = "enemy", e
}(GameObject), GodEnemy = function(t) {
	function e() {
		t.call(this), this.view = utils.createBitmap("rock.png")
	}
	return __extends(e, t), e.prototype.onCreate = function() {
		GameScene.collision.addPassiveObject(this), this.view.y = -90
	}, e.prototype.onDestroy = function() {
		GameScene.collision.removePassiveObject(this)
	}, e.prototype.onHit = function() {}, e.prototype.onEnterFrame = function(t) {
		this.view.y += .8 * t, this.view.y > utils.getGameHeight() && this.dead()
	}, e.prototype.moveTo = function(t) {
		this.view.x = t
	}, e.prototype.dead = function() {
		this.view.parent.removeChild(this.view), ObjectPool.getInstance().destroyObject(this)
	}, e.key = "godEnemy", e
}(GameObject), EnemyProgressBarSkin = function(t) {
	function e() {
		t.call(this)
	}
	return __extends(e, t), Object.defineProperty(e.prototype, "skinParts", {
		get: function() {
			return e._skinParts
		},
		enumerable: !0,
		configurable: !0
	}), e.prototype.createChildren = function() {
		t.prototype.createChildren.call(this);
		var e = new ns_egret.UIAsset;
		e.skinName = utils.createBitmap("progress_monsterBg.png"), this.addElement(e), this.thumb = new ns_egret.UIAsset, e = utils.createBitmap("progress_monsterBar.png"), this.thumb.skinName = e, this.addElement(this.thumb), e = e.getBounds(), this.width = e.width, this.height = e.height, this.track = new ns_egret.UIAsset, this.track.width = e.width, this.track.height = e.height, this.addElement(this.track)
	}, e._skinParts = ["thumb", "track"], e
}(ns_egret.Skin), Item = function(t) {
	function e() {
		t.call(this), this._acc = .04, this._maxY = 1
	}
	return __extends(e, t), Object.defineProperty(e.prototype, "config", {
		set: function(t) {
			this._configId = parseInt(t.$type);
			var e = utils.createBitmap("" + t.$img);
			e.scaleX = e.scaleY = parseFloat(t.$scale), this.view = e, this.view.anchorX = this.view.anchorY = .5
		},
		enumerable: !0,
		configurable: !0
	}), e.prototype.onCreate = function() {
		GameScene.collision.addPassiveObject(this), this._velocityX = Math.floor(20 * Math.random() - 10) / 100, this._rotation = 5 * (this._velocityX / Math.abs(this._velocityX)), this._velocityY = -.3 + this._velocityX
	}, e.prototype.onDestroy = function() {
		GameScene.collision.removePassiveObject(this)
	}, e.prototype.onHit = function(t) {
		t instanceof Hero && (this.remove(), 1 == this._configId ? GameScene.instance.onGetGold() : 2 == this._configId && GameScene.hero.onGetDouble())
	}, e.prototype.onEnterFrame = function(t) {
		this.view.x += this._velocityX * t, this.view.x > utils.getGameWidth() - 15 ? this.view.x = utils.getGameWidth() - 15 : 15 > this.view.x && (this.view.x = 15), this._velocityY + this._acc < this._maxY ? (this._velocityY += this._acc, this.view.y += this._velocityY * t) : this.view.y += this._maxY * t, this.view.y > utils.getGameHeight() && this.remove(), this.view.rotation += this._rotation
	}, e.prototype.moveTo = function(t) {
		this.view.x = t
	}, e.prototype.remove = function() {
		this.view.parent && (this.view.parent.removeChild(this.view), ObjectPool.getInstance().destroyObject(this))
	}, e.key = "item", e
}(GameObject), FightInfo = function() {
	function t() {
		this.distance = this.gold = this.bestScore = this.score = this.monsterKill = 0
	}
	return t.prototype.clear = function() {
		this.bestScore < this.score && (this.bestScore = this.score), this.distance = this.gold = this.score = this.monsterKill = 0
	}, t.instance = new t, t
}(), __extends = this.__extends ||
function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype, t.prototype = new i
}, MainMenuUI = function(t) {
	function e() {
		t.apply(this, arguments)
	}
	return __extends(e, t), e.prototype.onCreate = function() {
		this.view || (this.view = MemoryManager.getClassMc("MainMenu"), this.view.beginBtn.addOnClick(function() {
			app.stateMachine.changeState(new FightState)
		}, this), this.view.hwBtn.addOnClick(function() {
			ih5game.more()
		}, this))
	}, e.key = "MainMenuUI", e
}(GameObject), __extends = this.__extends ||
function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype, t.prototype = new i
}, FightResultUI = function(t) {
	function e() {
		t.apply(this, arguments)
	}
	return __extends(e, t), e.prototype.onCreate = function() {
		this.view || (this.view = MemoryManager.getClassMc("ResultView"), this.view.againBtn.addOnClick(function() {
			app.stateMachine.changeState(new FightState)
		}, this), this.view.shareBtn.addOnClick(function() {
			ih5game.share()
		}, this), this.view.moreBtn.addOnClick(function() {
			ih5game.more()
		}, this)), this.view.distanceTxt.text = Math.floor(FightInfo.instance.distance), this.view.killMonsterTxt.text = FightInfo.instance.monsterKill, this.view.getGoldTxt.text = FightInfo.instance.gold, this.view.scoreTxt.text = FightInfo.instance.score, this.view.goldTxt.text = FightInfo.instance.gold;
		var t = {
			score: FightInfo.instance.score,
			kill: FightInfo.instance.monsterKill,
			gold: FightInfo.instance.gold,
			distance: Math.floor(FightInfo.instance.distance)
		};
		FightInfo.instance.clear(), this.view.bestScoreTxt.text = FightInfo.instance.bestScore, t.best = FightInfo.instance.bestScore, ih5game.update(t)
	}, e.key = "FightResultUI", e
}(GameObject), StateMachine = function() {
	function t() {}
	return t.prototype.changeState = function(t) {
		this._state && this._state.onExitState(), this._state = t, t.onEnterState()
	}, t
}(), State = function() {
	function t() {}
	return t.prototype.onEnterState = function() {}, t.prototype.onExitState = function() {}, t
}(), FightState = function() {
	function t() {}
	return t.prototype.onEnterState = function() {
		var t = ns_egret.MainContext.instance.stage;
		this.scene = ObjectPool.getInstance().createObject(GameScene), t.addChild(this.scene.view), t.addChild(this.scene.uiContainer), t.addEventListener(ns_egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this)
	}, t.prototype.onTouchMove = function(t) {
		GameScene.hero.moveTo(t.stageX)
	}, t.prototype.onExitState = function() {
		var t = ns_egret.MainContext.instance.stage;
		t.removeChild(this.scene.view), t.removeChild(this.scene.uiContainer)
	}, t
}(), MainMenuState = function() {
	function t() {}
	return t.prototype.onEnterState = function() {
		var t = ns_egret.MainContext.instance.stage;
		this.scene = ObjectPool.getInstance().createObject(MainMenuUI), t.addChild(this.scene.view)
	}, t.prototype.onExitState = function() {
		ns_egret.MainContext.instance.stage.removeChild(this.scene.view)
	}, t
}(), FightResultState = function() {
	function t() {}
	return t.prototype.onEnterState = function() {
		var t = ns_egret.MainContext.instance.stage;
		this.scene = ObjectPool.getInstance().createObject(FightResultUI), t.addChild(this.scene.view)
	}, t.prototype.onExitState = function() {
		ns_egret.MainContext.instance.stage.removeChild(this.scene.view)
	}, t
}(), LoadingManager = function() {
	function t(t, e, i) {
		this._mcArr = [], this._imagesArr = [], this._loadingView = i, this._ctr = new ns_egret.LoadingController, this._ctr.setLoadingView(this._loadingView), this._allLoadedToDo = t, this._target = e
	}
	return t.prototype.addAnimation = function() {}, t.prototype.addPreLoad = function(e, i, n) {
		"undefined" == typeof n && (n = ""), i == t.DATA_TYPE_MC ? (this._mcArr.push(e), this._ctr.addResource(e, t.DATA_TYPE_TEXT, n)) : i == t.DATA_TYPE_BMPTEXT ? (this._mcArr.push(e), this._ctr.addResource(e, t.DATA_TYPE_TEXT, n)) : i == t.DATA_TYPE_ANIMATION ? (this._ctr.addResource("animation/" + e + "_texture.json", t.DATA_TYPE_TEXT), this._ctr.addResource("animation/" + e + "_texture.png", t.DATA_TYPE_IMAGE), this._ctr.addResource("animation/" + e + "_skeleton.json", t.DATA_TYPE_TEXT)) : this._ctr.addResource(e, i, n)
	}, t.prototype.startLoading = function() {
		this._ctr.addEventListener(ns_egret.ResourceLoader.LOAD_COMPLETE, this.onResourceLoadComplete, this), this._ctr.load()
	}, t.prototype.onResourceLoadComplete = function() {
		var e = this._mcArr.concat();
		if (this._mcArr = [], 0 < e.length) {
			for (var i = 0; i < e.length; i++) {
				var n = e[i];
				if (0 <= n.lastIndexOf(".jmc") || 0 <= n.lastIndexOf(".jfnt")) {
					var o = ns_egret.ResourceLoader.create(n).data,
						o = JSON.parse(o);
					if (0 <= n.lastIndexOf(".jmc")) {
						MemoryManager.setFileData(o.viewData);
						for (var s in o.resourceData) n = o.resourceData[s], 0 <= n.lastIndexOf(".jfnt") ? this.addPreLoad(n, t.DATA_TYPE_BMPTEXT) : this.addPreLoad(n, t.DATA_TYPE_IMAGE)
					} else {
						var r = "";
						0 <= n.lastIndexOf("/") && (r = n.substring(0, n.lastIndexOf("/") + 1)), this.addPreLoad(r + o.texturePath, t.DATA_TYPE_IMAGE)
					}
				}
			}
			this._ctr.removeEventListener(ns_egret.ResourceLoader.LOAD_COMPLETE, this.onResourceLoadComplete, this), this._ctr.setLoadingView(this._loadingView), this.startLoading()
		} else this._ctr.removeEventListener(ns_egret.ResourceLoader.LOAD_COMPLETE, this.onResourceLoadComplete, this), this._allLoadedToDo && this._allLoadedToDo.call(this._target)
	}, t.DATA_TYPE_TEXT = ns_egret.ResourceLoader.DATA_TYPE_TEXT, t.DATA_TYPE_IMAGE = ns_egret.ResourceLoader.DATA_TYPE_IMAGE, t.DATA_TYPE_MC = "MC", t.DATA_TYPE_BMPTEXT = "bitmapTxt", t.DATA_TYPE_ANIMATION = "ANIMATION", t
}();
__extends = this.__extends ||
function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype, t.prototype = new i
}, function(t) {
	var e = function(e) {
			function i() {
				e.call(this), this._frames = [], this._currentFrame = 1, this._scale = 1.1, this._initScaleY = this._initScaleX = 0, this._canScale = !0, this._frameNumber = 0, this._canScale = this.touchEnabled = !0
			}
			return __extends(i, e), i.prototype.hitTest = function(e, i) {
				return t.DisplayObject.prototype.hitTest.call(this, e, i)
			}, i.prototype._onAddToStage = function() {
				e.prototype._onAddToStage.call(this), this.addListeners(), this._initScaleX = this.scaleX, this._initScaleY = this.scaleY
			}, i.prototype._onRemoveFromStage = function() {
				e.prototype._onRemoveFromStage.call(this), this.removeListeners()
			}, i.prototype.addListeners = function() {
				this.addEventListener(t.TouchEvent.TOUCH_BEGAN, this.mouseDown, this)
			}, i.prototype.removeListeners = function() {
				this.removeEventListener(t.TouchEvent.TOUCH_BEGAN, this.mouseDown, this), t.MainContext.instance.stage.removeEventListener(t.TouchEvent.TOUCH_END, this.mouseUp, this), t.MainContext.instance.stage.removeEventListener(t.TouchEvent.TOUCH_MOVE, this.mouseMove, this)
			}, i.prototype.mouseDown = function(e) {
				this._isMoved = !1, t.MainContext.instance.stage.addEventListener(t.TouchEvent.TOUCH_END, this.mouseUp, this), t.MainContext.instance.stage.addEventListener(t.TouchEvent.TOUCH_MOVE, this.mouseMove, this), this._startX = e.stageX, this._startY = e.stageY, this.setChoose(!0)
			}, i.prototype.mouseUp = function() {
				this._isMoved || (this.setChoose(!1), this.onClick()), t.MainContext.instance.stage.removeEventListener(t.TouchEvent.TOUCH_END, this.mouseUp, this), t.MainContext.instance.stage.removeEventListener(t.TouchEvent.TOUCH_MOVE, this.mouseMove, this)
			}, i.prototype.mouseMove = function(e) {
				var i = e.stageY;
				10 > Math.abs(e.stageX - this._startX) && 10 > Math.abs(i - this._startY) || (this._isMoved = !0, this.setChoose(!1), t.MainContext.instance.stage.removeEventListener(t.TouchEvent.TOUCH_MOVE, this.mouseMove, this))
			}, i.prototype.addOnClick = function(t, e) {
				this._callBack = t, this._target = e
			}, i.prototype.onClick = function() {
				this._callBack && this._target && this._callBack.apply(this._target, [this])
			}, i.prototype.setEnabled = function(t) {
				this.touchEnabled = t
			}, i.prototype.useZoomOut = function(t) {
				this._canScale = t
			}, i.prototype.initFontTextField = function(e) {
				if (this._textField = e, e instanceof t.TextField && (e.stroke = 2), e && null != e.parent) {
					if (e.parent == this) return;
					e && e.parent && e.parent.removeChild(e)
				}
				this.addChild(e)
			}, i.prototype.setFontText = function(e, i) {
				if ("undefined" == typeof i && (i = 30), null == this._textField) {
					this._textField = new t.TextField, this._textField.textColor = 16777215, this._textField.textAlign = "center", this._textField.fontFamily = "Courier-Bold", this._textField.size = i, this._textField.stroke = 2, this.addChild(this._textField), this._textField.anchorX = .5, this._textField.anchorY = .5;
					var n = this.getBounds();
					this._textField.x = n.width / 2, this._textField.y = n.height / 2
				}
				this._textField.text = e
			}, i.prototype.setFontColor = function() {}, i.prototype.setChoose = function(t) {
				this.playZoomOut(!t), this.setFrameChild(t ? 2 : 1)
			}, i.prototype.playZoomOut = function(t) {
				this._canScale && (this.scaleX = t ? this._initScaleX : this._initScaleX * this._scale, this.scaleY = t ? this._initScaleY : this._initScaleY * this._scale)
			}, i.prototype.initFrameRes = function(t, e, i) {
				this._currentFrame = e, this._frameRes = t, this._frames[e - 1] = i
			}, i.prototype.changeBtn = function(t) {
				if (this._frameRes != t) {
					this._frameRes = t;
					for (var e = t = 0; e < this._frames.length; e++) {
						var i = this._frames[e];
						i && (t = this.getChildIndex(i), this.removeChild(i), this._frames[e] = null)
					}
					this.setFrameChild(this._currentFrame, t)
				}
			}, i.prototype.setFrameNumber = function(t, e) {
				this._frameRes = t, e = Math.max(0, e), e > 2 && (e = 0), this._frameNumber = e
			}, i.prototype.isInFrames = function(t) {
				return 0 == this._frameNumber || 0 < (t & this._frameNumber)
			}, i.prototype.setFrameChild = function(e, i) {
				if ("undefined" == typeof i && (i = 0), this._frameRes) {
					var n = this.getFrameChild(this._currentFrame),
						o = i;
					if (n && (n.visible = !1, o = this.getChildIndex(n)), this._currentFrame = e, this.isInFrames(e)) {
						if (n = this.getFrameChild(e), null == n) {
							n = this.getIndexRes(this._frameRes, 1, e), n = t.TextureCache.getInstance().getTexture(n), n = t.Bitmap.initWithTexture(n), this._frames[e - 1] = n, n.anchorX = .5, n.anchorY = .5;
							var s = this.getBounds();
							n.x = s.width / 2, n.y = s.height / 2, this.addChildAt(n, o)
						}
						n.visible = !0
					}
				}
			}, i.prototype.getFrameChild = function(t) {
				return this._frames[t - 1]
			}, i.prototype.getIndexRes = function(e, i, n) {
				var o = e.lastIndexOf(".");
				return i > o && t.Logger.fatal("the argument [count] too large"), i = e.substring(0, o - i), e = e.substring(o), i + n + e
			}, i
		}(t.DisplayObjectContainer);
	t.SimpleButton = e
}(ns_egret || (ns_egret = {}));
var MemoryManager = function() {
		function t() {}
		return t.setFileData = function(e) {
			for (var i in e) t._viewDataObj[i] = e[i]
		}, t.getXMLData = function(t) {
			return t = ns_egret.ResourceLoader.create(t).data, new ns_egret.XML(t)
		}, t.getMCData = function(e) {
			return t._viewDataObj[e]
		}, t.getClassMc = function(e, i) {
			"undefined" == typeof i && (i = null);
			var n = t.getMCData(e);
			return t._createView(n, i)
		}, t._createView = function(e, i) {
			var n;
			return n = null != i ? new i : new ns_egret.DisplayObjectContainer, e.width = e.width || 0, e.height = e.height || 0, n.width = e.width, n.height = e.height, t.createChildren(n, e.class, e.children), n.createComplete && n.createComplete(), n
		}, t.build = function(e) {
			e.class = e.class || "DisplayObjectContainer";
			var i = t.displayMap[e.class];
			if ("ProgressBar" == e.class) i = new i(e.texturePath);
			else if (i = new i, e.texturePath && "BitmapText" != e.class) {
				var n = ns_egret.TextureCache.getInstance().getTexture(e.texturePath);
				i.texture = n
			}
			if ("TextField" == e.class || "TextInput" == e.class) i.fontFamily = e.fontFamily, i.size = e.size, i.textAlign = e.textAlign, i.text = e.text, i.textColor = e.textColor || 16777215;
			else if ("BitmapText" == e.class) {
				var o = e.configPath,
					n = "";
				0 <= o.lastIndexOf("/") && (n = o.substring(0, o.lastIndexOf("/") + 1)), o = JSON.parse(ns_egret.ResourceLoader.create(o).data), n += o.texturePath, ns_egret.ResourceLoader.create(n).state == ns_egret.ResourceLoader.LOAD_STATE_LOADED ? (i.bitmapFontData = o.data, i.texture = ns_egret.TextureCache.getInstance().getTexture(n)) : ns_egret.Logger.fatal("?????????????????????", n), i.text = e.text
			} else "Scale9Bitmap" == e.class && i.setScaleGrid(Math.max(e.top, 1), Math.max(e.bottom, 1), Math.max(e.left, 1), Math.max(e.right, 1));
			return (e.anchorX || e.anchorY) && (i.relativeAnchorPointX = e.anchorX || 0, i.relativeAnchorPointY = e.anchorY || 0), i.x = null != e.x ? e.x : 0, i.y = null != e.y ? e.y : 0, null != e.rotation && (i.rotation = e.rotation), null != e.scaleX && (i.scaleX = e.scaleX), null != e.scaleY && (i.scaleY = e.scaleY), null != e.visible && (i.visible = e.visible), null != e.alpha && (i.alpha = e.alpha), "Bitmap" == e.class || "BitmapText" == e.class || ("TextField" != e.class && (e.width = e.width || 0, e.height = e.height || 0), i.width = e.width, i.height = e.height), i
		}, t.loop = function(e) {
			var i = t.build(e);
			return e.children && t.createChildren(i, e.class, e.children), "TabView" == e.class && i.init(), i
		}, t.createChildren = function(e, i, n) {
			n && (n.forEach(function(n) {
				var o = t.loop(n);
				e.addChild(o), n.name && (e[n.name] = o, o.name = n.name), "SimpleButton" == i && ("Bitmap" != n["class"] || 1 != n.frame && 2 != n.frame ? 9 == n.frame && e.initFontTextField(o) : e.initFrameRes(n.texturePath, n.frame, o))
			}), "ScrollView" == i && n && (e = e.getChildAt(0), n = e.getBounds(), e.setContainer(e, n.width, n.height)))
		}, t._viewDataObj = {}, t.displayMap = {
			Bitmap: ns_egret.Bitmap,
			BitmapText: ns_egret.BitmapText,
			DisplayObject: ns_egret.DisplayObject,
			DisplayObjectContainer: ns_egret.DisplayObjectContainer,
			SimpleButton: ns_egret.SimpleButton,
			TextField: ns_egret.TextField,
			TextInput: ns_egret.TextInput,
			Scale9Bitmap: ns_egret.Scale9Bitmap
		}, t
	}(),
	CollisionManager = function() {
		function t() {
			this.initiativeList = [], this.passiveList = []
		}
		return t.prototype.addInitiativeObject = function(t) {
			this.initiativeList.push(t)
		}, t.prototype.addPassiveObject = function(t) {
			this.passiveList.push(t)
		}, t.prototype.removeInitiativeObject = function(t) {
			t = this.initiativeList.indexOf(t), -1 != t && this.initiativeList.splice(t, 1)
		}, t.prototype.removePassiveObject = function(t) {
			t = this.passiveList.indexOf(t), -1 != t && this.passiveList.splice(t, 1)
		}, t.prototype.hitTest = function() {
			for (var t in this.initiativeList) {
				var e, i = this.initiativeList[t];
				for (e in this.passiveList) {
					var n = this.passiveList[e],
						o = i.getCollisionBounds(),
						s = n.getCollisionBounds();
					!(0 == s.x && 0 == s.y && 0 == s.width && 0 == s.height || 0 == o.x && 0 == o.y && 0 == o.width && 0 == o.height || !(s.x < o.x && o.x < s.x + s.width && s.y < o.y && o.y < s.y + s.height ? (i.onHit(n), n.onHit(i)) : o.x < s.x && s.x < o.x + o.width && o.y < s.y && s.y < o.y + o.height && (i.onHit(n), n.onHit(i))))
				}
			}
		}, t
	}();