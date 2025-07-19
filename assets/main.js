! function(e, t) {
	"use strict";
	"object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
		if (!e.document) throw new Error("jQuery requires a window with a document");
		return t(e)
	} : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
	"use strict";

	function n(e, t, n) {
		n = n || be;
		var r, i, o = n.createElement("script");
		if (o.text = e, t)
			for (r in we) i = t[r] || t.getAttribute && t.getAttribute(r), i && o.setAttribute(r, i);
		n.head.appendChild(o).parentNode.removeChild(o)
	}

	function r(e) {
		return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? pe[de.call(e)] || "object" : typeof e
	}

	function i(e) {
		var t = !!e && "length" in e && e.length,
			n = r(e);
		return me(e) || xe(e) ? !1 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
	}

	function o(e, t) {
		return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
	}

	function a(e, t) {
		return t ? "\x00" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
	}

	function s(e, t, n) {
		return me(t) ? Se.grep(e, function(e, r) {
			return !!t.call(e, r, e) !== n
		}) : t.nodeType ? Se.grep(e, function(e) {
			return e === t !== n
		}) : "string" != typeof t ? Se.grep(e, function(e) {
			return fe.call(t, e) > -1 !== n
		}) : Se.filter(t, e, n)
	}

	function u(e, t) {
		for (;
			(e = e[t]) && 1 !== e.nodeType;);
		return e
	}

	function l(e) {
		var t = {};
		return Se.each(e.match(Be) || [], function(e, n) {
			t[n] = !0
		}), t
	}

	function c(e) {
		return e
	}

	function f(e) {
		throw e
	}

	function p(e, t, n, r) {
		var i;
		try {
			e && me(i = e.promise) ? i.call(e).done(t).fail(n) : e && me(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
		} catch (e) {
			n.apply(void 0, [e])
		}
	}

	function d() {
		be.removeEventListener("DOMContentLoaded", d), e.removeEventListener("load", d), Se.ready()
	}

	function h(e, t) {
		return t.toUpperCase()
	}

	function g(e) {
		return e.replace(Ue, "ms-").replace(Ve, h)
	}

	function v() {
		this.expando = Se.expando + v.uid++
	}

	function y(e) {
		return "true" === e ? !0 : "false" === e ? !1 : "null" === e ? null : e === +e + "" ? +e : Je.test(e) ? JSON.parse(e) : e
	}

	function m(e, t, n) {
		var r;
		if (void 0 === n && 1 === e.nodeType)
			if (r = "data-" + t.replace(Ke, "-$&").toLowerCase(), n = e.getAttribute(r), "string" == typeof n) {
				try {
					n = y(n)
				} catch (i) {}
				Qe.set(e, t, n)
			} else n = void 0;
		return n
	}

	function x(e, t, n, r) {
		var i, o, a = 20,
			s = r ? function() {
				return r.cur()
			} : function() {
				return Se.css(e, t, "")
			},
			u = s(),
			l = n && n[3] || (Se.cssNumber[t] ? "" : "px"),
			c = e.nodeType && (Se.cssNumber[t] || "px" !== l && +u) && et.exec(Se.css(e, t));
		if (c && c[3] !== l) {
			for (u /= 2, l = l || c[3], c = +u || 1; a--;) Se.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
			c = 2 * c, Se.style(e, t, c + l), n = n || []
		}
		return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
	}

	function b(e) {
		var t, n = e.ownerDocument,
			r = e.nodeName,
			i = at[r];
		return i ? i : (t = n.body.appendChild(n.createElement(r)), i = Se.css(t, "display"), t.parentNode.removeChild(t), "none" === i && (i = "block"), at[r] = i, i)
	}

	function w(e, t) {
		for (var n, r, i = [], o = 0, a = e.length; a > o; o++) r = e[o], r.style && (n = r.style.display, t ? ("none" === n && (i[o] = Ye.get(r, "display") || null, i[o] || (r.style.display = "")), "" === r.style.display && ot(r) && (i[o] = b(r))) : "none" !== n && (i[o] = "none", Ye.set(r, "display", n)));
		for (o = 0; a > o; o++) null != i[o] && (e[o].style.display = i[o]);
		return e
	}

	function T(e, t) {
		var n;
		return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && o(e, t) ? Se.merge([e], n) : n
	}

	function C(e, t) {
		for (var n = 0, r = e.length; r > n; n++) Ye.set(e[n], "globalEval", !t || Ye.get(t[n], "globalEval"))
	}

	function S(e, t, n, i, o) {
		for (var a, s, u, l, c, f, p = t.createDocumentFragment(), d = [], h = 0, g = e.length; g > h; h++)
			if (a = e[h], a || 0 === a)
				if ("object" === r(a)) Se.merge(d, a.nodeType ? [a] : a);
				else if (ft.test(a)) {
			for (s = s || p.appendChild(t.createElement("div")), u = (ut.exec(a) || ["", ""])[1].toLowerCase(), l = ct[u] || ct._default, s.innerHTML = l[1] + Se.htmlPrefilter(a) + l[2], f = l[0]; f--;) s = s.lastChild;
			Se.merge(d, s.childNodes), s = p.firstChild, s.textContent = ""
		} else d.push(t.createTextNode(a));
		for (p.textContent = "", h = 0; a = d[h++];)
			if (i && Se.inArray(a, i) > -1) o && o.push(a);
			else if (c = rt(a), s = T(p.appendChild(a), "script"), c && C(s), n)
			for (f = 0; a = s[f++];) lt.test(a.type || "") && n.push(a);
		return p
	}

	function E() {
		return !0
	}

	function k() {
		return !1
	}

	function j(e, t, n, r, i, o) {
		var a, s;
		if ("object" == typeof t) {
			"string" != typeof n && (r = r || n, n = void 0);
			for (s in t) j(e, s, n, r, t[s], o);
			return e
		}
		if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), i === !1) i = k;
		else if (!i) return e;
		return 1 === o && (a = i, i = function(e) {
			return Se().off(e), a.apply(this, arguments)
		}, i.guid = a.guid || (a.guid = Se.guid++)), e.each(function() {
			Se.event.add(this, t, i, r, n)
		})
	}

	function A(e, t, n) {
		return n ? (Ye.set(e, t, !1), void Se.event.add(e, t, {
			namespace: !1,
			handler: function(e) {
				var n, r = Ye.get(this, t);
				if (1 & e.isTrigger && this[t]) {
					if (r)(Se.event.special[t] || {}).delegateType && e.stopPropagation();
					else if (r = ue.call(arguments), Ye.set(this, t, r), this[t](), n = Ye.get(this, t), Ye.set(this, t, !1), r !== n) return e.stopImmediatePropagation(), e.preventDefault(), n
				} else r && (Ye.set(this, t, Se.event.trigger(r[0], r.slice(1), this)), e.stopPropagation(), e.isImmediatePropagationStopped = E)
			}
		})) : void(void 0 === Ye.get(e, t) && Se.event.add(e, t, E))
	}

	function D(e, t) {
		return o(e, "table") && o(11 !== t.nodeType ? t : t.firstChild, "tr") ? Se(e).children("tbody")[0] || e : e
	}

	function N(e) {
		return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
	}

	function q(e) {
		return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
	}

	function L(e, t) {
		var n, r, i, o, a, s, u;
		if (1 === t.nodeType) {
			if (Ye.hasData(e) && (o = Ye.get(e), u = o.events)) {
				Ye.remove(t, "handle events");
				for (i in u)
					for (n = 0, r = u[i].length; r > n; n++) Se.event.add(t, i, u[i][n])
			}
			Qe.hasData(e) && (a = Qe.access(e), s = Se.extend({}, a), Qe.set(t, s))
		}
	}

	function H(e, t) {
		var n = t.nodeName.toLowerCase();
		"input" === n && st.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
	}

	function O(e, t, r, i) {
		t = le(t);
		var o, a, s, u, l, c, f = 0,
			p = e.length,
			d = p - 1,
			h = t[0],
			g = me(h);
		if (g || p > 1 && "string" == typeof h && !ye.checkClone && ht.test(h)) return e.each(function(n) {
			var o = e.eq(n);
			g && (t[0] = h.call(this, n, o.html())), O(o, t, r, i)
		});
		if (p && (o = S(t, e[0].ownerDocument, !1, e, i), a = o.firstChild, 1 === o.childNodes.length && (o = a), a || i)) {
			for (s = Se.map(T(o, "script"), N), u = s.length; p > f; f++) l = o, f !== d && (l = Se.clone(l, !0, !0), u && Se.merge(s, T(l, "script"))), r.call(e[f], l, f);
			if (u)
				for (c = s[s.length - 1].ownerDocument, Se.map(s, q), f = 0; u > f; f++) l = s[f], lt.test(l.type || "") && !Ye.access(l, "globalEval") && Se.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? Se._evalUrl && !l.noModule && Se._evalUrl(l.src, {
					nonce: l.nonce || l.getAttribute("nonce")
				}, c) : n(l.textContent.replace(gt, ""), l, c))
		}
		return e
	}

	function P(e, t, n) {
		for (var r, i = t ? Se.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || Se.cleanData(T(r)), r.parentNode && (n && rt(r) && C(T(r, "script")), r.parentNode.removeChild(r));
		return e
	}

	function M(e, t, n) {
		var r, i, o, a, s = yt.test(t),
			u = e.style;
		return n = n || mt(e), n && (a = n.getPropertyValue(t) || n[t], s && a && (a = a.replace(De, "$1") || void 0), "" !== a || rt(e) || (a = Se.style(e, t)), !ye.pixelBoxStyles() && vt.test(a) && bt.test(t) && (r = u.width, i = u.minWidth, o = u.maxWidth, u.minWidth = u.maxWidth = u.width = a, a = n.width, u.width = r, u.minWidth = i, u.maxWidth = o)), void 0 !== a ? a + "" : a
	}

	function R(e, t) {
		return {
			get: function() {
				return e() ? void delete this.get : (this.get = t).apply(this, arguments)
			}
		}
	}

	function I(e) {
		for (var t = e[0].toUpperCase() + e.slice(1), n = wt.length; n--;)
			if (e = wt[n] + t, e in Tt) return e
	}

	function W(e) {
		var t = Se.cssProps[e] || Ct[e];
		return t ? t : e in Tt ? e : Ct[e] = I(e) || e
	}

	function F(e, t, n) {
		var r = et.exec(t);
		return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
	}

	function $(e, t, n, r, i, o) {
		var a = "width" === t ? 1 : 0,
			s = 0,
			u = 0,
			l = 0;
		if (n === (r ? "border" : "content")) return 0;
		for (; 4 > a; a += 2) "margin" === n && (l += Se.css(e, n + tt[a], !0, i)), r ? ("content" === n && (u -= Se.css(e, "padding" + tt[a], !0, i)), "margin" !== n && (u -= Se.css(e, "border" + tt[a] + "Width", !0, i))) : (u += Se.css(e, "padding" + tt[a], !0, i), "padding" !== n ? u += Se.css(e, "border" + tt[a] + "Width", !0, i) : s += Se.css(e, "border" + tt[a] + "Width", !0, i));
		return !r && o >= 0 && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0), u + l
	}

	function B(e, t, n) {
		var r = mt(e),
			i = !ye.boxSizingReliable() || n,
			a = i && "border-box" === Se.css(e, "boxSizing", !1, r),
			s = a,
			u = M(e, t, r),
			l = "offset" + t[0].toUpperCase() + t.slice(1);
		if (vt.test(u)) {
			if (!n) return u;
			u = "auto"
		}
		return (!ye.boxSizingReliable() && a || !ye.reliableTrDimensions() && o(e, "tr") || "auto" === u || !parseFloat(u) && "inline" === Se.css(e, "display", !1, r)) && e.getClientRects().length && (a = "border-box" === Se.css(e, "boxSizing", !1, r), s = l in e, s && (u = e[l])), u = parseFloat(u) || 0, u + $(e, t, n || (a ? "border" : "content"), s, r, u) + "px"
	}

	function _(e, t, n, r, i) {
		return new _.prototype.init(e, t, n, r, i)
	}

	function z() {
		At && (be.hidden === !1 && e.requestAnimationFrame ? e.requestAnimationFrame(z) : e.setTimeout(z, Se.fx.interval), Se.fx.tick())
	}

	function X() {
		return e.setTimeout(function() {
			jt = void 0
		}), jt = Date.now()
	}

	function U(e, t) {
		var n, r = 0,
			i = {
				height: e
			};
		for (t = t ? 1 : 0; 4 > r; r += 2 - t) n = tt[r], i["margin" + n] = i["padding" + n] = e;
		return t && (i.opacity = i.width = e), i
	}

	function V(e, t, n) {
		for (var r, i = (Q.tweeners[t] || []).concat(Q.tweeners["*"]), o = 0, a = i.length; a > o; o++)
			if (r = i[o].call(n, t, e)) return r
	}

	function G(e, t, n) {
		var r, i, o, a, s, u, l, c, f = "width" in t || "height" in t,
			p = this,
			d = {},
			h = e.style,
			g = e.nodeType && ot(e),
			v = Ye.get(e, "fxshow");
		n.queue || (a = Se._queueHooks(e, "fx"), null == a.unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() {
			a.unqueued || s()
		}), a.unqueued++, p.always(function() {
			p.always(function() {
				a.unqueued--, Se.queue(e, "fx").length || a.empty.fire()
			})
		}));
		for (r in t)
			if (i = t[r], Dt.test(i)) {
				if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
					if ("show" !== i || !v || void 0 === v[r]) continue;
					g = !0
				}
				d[r] = v && v[r] || Se.style(e, r)
			} if (u = !Se.isEmptyObject(t), u || !Se.isEmptyObject(d)) {
			f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], l = v && v.display, null == l && (l = Ye.get(e, "display")), c = Se.css(e, "display"), "none" === c && (l ? c = l : (w([e], !0), l = e.style.display || l, c = Se.css(e, "display"), w([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === Se.css(e, "float") && (u || (p.done(function() {
				h.display = l
			}), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function() {
				h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
			})), u = !1;
			for (r in d) u || (v ? "hidden" in v && (g = v.hidden) : v = Ye.access(e, "fxshow", {
				display: l
			}), o && (v.hidden = !g), g && w([e], !0), p.done(function() {
				g || w([e]), Ye.remove(e, "fxshow");
				for (r in d) Se.style(e, r, d[r])
			})), u = V(g ? v[r] : 0, r, p), r in v || (v[r] = u.start, g && (u.end = u.start, u.start = 0))
		}
	}

	function Y(e, t) {
		var n, r, i, o, a;
		for (n in e)
			if (r = g(n), i = t[r], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), a = Se.cssHooks[r], a && "expand" in a) {
				o = a.expand(o), delete e[r];
				for (n in o) n in e || (e[n] = o[n], t[n] = i)
			} else t[r] = i
	}

	function Q(e, t, n) {
		var r, i, o = 0,
			a = Q.prefilters.length,
			s = Se.Deferred().always(function() {
				delete u.elem
			}),
			u = function() {
				if (i) return !1;
				for (var t = jt || X(), n = Math.max(0, l.startTime + l.duration - t), r = n / l.duration || 0, o = 1 - r, a = 0, u = l.tweens.length; u > a; a++) l.tweens[a].run(o);
				return s.notifyWith(e, [l, o, n]), 1 > o && u ? n : (u || s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l]), !1)
			},
			l = s.promise({
				elem: e,
				props: Se.extend({}, t),
				opts: Se.extend(!0, {
					specialEasing: {},
					easing: Se.easing._default
				}, n),
				originalProperties: t,
				originalOptions: n,
				startTime: jt || X(),
				duration: n.duration,
				tweens: [],
				createTween: function(t, n) {
					var r = Se.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
					return l.tweens.push(r), r
				},
				stop: function(t) {
					var n = 0,
						r = t ? l.tweens.length : 0;
					if (i) return this;
					for (i = !0; r > n; n++) l.tweens[n].run(1);
					return t ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]), this
				}
			}),
			c = l.props;
		for (Y(c, l.opts.specialEasing); a > o; o++)
			if (r = Q.prefilters[o].call(l, e, c, l.opts)) return me(r.stop) && (Se._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)), r;
		return Se.map(c, V, l), me(l.opts.start) && l.opts.start.call(e, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), Se.fx.timer(Se.extend(u, {
			elem: e,
			anim: l,
			queue: l.opts.queue
		})), l
	}

	function J(e) {
		var t = e.match(Be) || [];
		return t.join(" ")
	}

	function K(e) {
		return e.getAttribute && e.getAttribute("class") || ""
	}

	function Z(e) {
		return Array.isArray(e) ? e : "string" == typeof e ? e.match(Be) || [] : []
	}

	function ee(e, t, n, i) {
		var o;
		if (Array.isArray(t)) Se.each(t, function(t, r) {
			n || $t.test(e) ? i(e, r) : ee(e + "[" + ("object" == typeof r && null != r ? t : "") + "]", r, n, i)
		});
		else if (n || "object" !== r(t)) i(e, t);
		else
			for (o in t) ee(e + "[" + o + "]", t[o], n, i)
	}

	function te(e) {
		return function(t, n) {
			"string" != typeof t && (n = t, t = "*");
			var r, i = 0,
				o = t.toLowerCase().match(Be) || [];
			if (me(n))
				for (; r = o[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
		}
	}

	function ne(e, t, n, r) {
		function i(s) {
			var u;
			return o[s] = !0, Se.each(e[s] || [], function(e, s) {
				var l = s(t, n, r);
				return "string" != typeof l || a || o[l] ? a ? !(u = l) : void 0 : (t.dataTypes.unshift(l), i(l), !1)
			}), u
		}
		var o = {},
			a = e === Zt;
		return i(t.dataTypes[0]) || !o["*"] && i("*")
	}

	function re(e, t) {
		var n, r, i = Se.ajaxSettings.flatOptions || {};
		for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
		return r && Se.extend(!0, e, r), e
	}

	function ie(e, t, n) {
		for (var r, i, o, a, s = e.contents, u = e.dataTypes;
			"*" === u[0];) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
		if (r)
			for (i in s)
				if (s[i] && s[i].test(r)) {
					u.unshift(i);
					break
				} if (u[0] in n) o = u[0];
		else {
			for (i in n) {
				if (!u[0] || e.converters[i + " " + u[0]]) {
					o = i;
					break
				}
				a || (a = i)
			}
			o = o || a
		}
		return o ? (o !== u[0] && u.unshift(o), n[o]) : void 0
	}

	function oe(e, t, n, r) {
		var i, o, a, s, u, l = {},
			c = e.dataTypes.slice();
		if (c[1])
			for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
		for (o = c.shift(); o;)
			if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
				if ("*" === o) o = u;
				else if ("*" !== u && u !== o) {
			if (a = l[u + " " + o] || l["* " + o], !a)
				for (i in l)
					if (s = i.split(" "), s[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
						a === !0 ? a = l[i] : l[i] !== !0 && (o = s[0], c.unshift(s[1]));
						break
					} if (a !== !0)
				if (a && e["throws"]) t = a(t);
				else try {
					t = a(t)
				} catch (f) {
					return {
						state: "parsererror",
						error: a ? f : "No conversion from " + u + " to " + o
					}
				}
		}
		return {
			state: "success",
			data: t
		}
	}
	var ae = [],
		se = Object.getPrototypeOf,
		ue = ae.slice,
		le = ae.flat ? function(e) {
			return ae.flat.call(e)
		} : function(e) {
			return ae.concat.apply([], e)
		},
		ce = ae.push,
		fe = ae.indexOf,
		pe = {},
		de = pe.toString,
		he = pe.hasOwnProperty,
		ge = he.toString,
		ve = ge.call(Object),
		ye = {},
		me = function(e) {
			return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item
		},
		xe = function(e) {
			return null != e && e === e.window
		},
		be = e.document,
		we = {
			type: !0,
			src: !0,
			nonce: !0,
			noModule: !0
		},
		Te = "3.7.1",
		Ce = /HTML$/i,
		Se = function(e, t) {
			return new Se.fn.init(e, t)
		};
	Se.fn = Se.prototype = {
		jquery: Te,
		constructor: Se,
		length: 0,
		toArray: function() {
			return ue.call(this)
		},
		get: function(e) {
			return null == e ? ue.call(this) : 0 > e ? this[e + this.length] : this[e]
		},
		pushStack: function(e) {
			var t = Se.merge(this.constructor(), e);
			return t.prevObject = this, t
		},
		each: function(e) {
			return Se.each(this, e)
		},
		map: function(e) {
			return this.pushStack(Se.map(this, function(t, n) {
				return e.call(t, n, t)
			}))
		},
		slice: function() {
			return this.pushStack(ue.apply(this, arguments))
		},
		first: function() {
			return this.eq(0)
		},
		last: function() {
			return this.eq(-1)
		},
		even: function() {
			return this.pushStack(Se.grep(this, function(e, t) {
				return (t + 1) % 2
			}))
		},
		odd: function() {
			return this.pushStack(Se.grep(this, function(e, t) {
				return t % 2
			}))
		},
		eq: function(e) {
			var t = this.length,
				n = +e + (0 > e ? t : 0);
			return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
		},
		end: function() {
			return this.prevObject || this.constructor()
		},
		push: ce,
		sort: ae.sort,
		splice: ae.splice
	}, Se.extend = Se.fn.extend = function() {
		var e, t, n, r, i, o, a = arguments[0] || {},
			s = 1,
			u = arguments.length,
			l = !1;
		for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || me(a) || (a = {}), s === u && (a = this, s--); u > s; s++)
			if (null != (e = arguments[s]))
				for (t in e) r = e[t], "__proto__" !== t && a !== r && (l && r && (Se.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || Se.isPlainObject(n) ? n : {}, i = !1, a[t] = Se.extend(l, o, r)) : void 0 !== r && (a[t] = r));
		return a
	}, Se.extend({
		expando: "jQuery" + (Te + Math.random()).replace(/\D/g, ""),
		isReady: !0,
		error: function(e) {
			throw new Error(e)
		},
		noop: function() {},
		isPlainObject: function(e) {
			var t, n;
			return e && "[object Object]" === de.call(e) ? (t = se(e)) ? (n = he.call(t, "constructor") && t.constructor, "function" == typeof n && ge.call(n) === ve) : !0 : !1
		},
		isEmptyObject: function(e) {
			var t;
			for (t in e) return !1;
			return !0
		},
		globalEval: function(e, t, r) {
			n(e, {
				nonce: t && t.nonce
			}, r)
		},
		each: function(e, t) {
			var n, r = 0;
			if (i(e))
				for (n = e.length; n > r && t.call(e[r], r, e[r]) !== !1; r++);
			else
				for (r in e)
					if (t.call(e[r], r, e[r]) === !1) break;
			return e
		},
		text: function(e) {
			var t, n = "",
				r = 0,
				i = e.nodeType;
			if (!i)
				for (; t = e[r++];) n += Se.text(t);
			return 1 === i || 11 === i ? e.textContent : 9 === i ? e.documentElement.textContent : 3 === i || 4 === i ? e.nodeValue : n
		},
		makeArray: function(e, t) {
			var n = t || [];
			return null != e && (i(Object(e)) ? Se.merge(n, "string" == typeof e ? [e] : e) : ce.call(n, e)), n
		},
		inArray: function(e, t, n) {
			return null == t ? -1 : fe.call(t, e, n)
		},
		isXMLDoc: function(e) {
			var t = e && e.namespaceURI,
				n = e && (e.ownerDocument || e).documentElement;
			return !Ce.test(t || n && n.nodeName || "HTML")
		},
		merge: function(e, t) {
			for (var n = +t.length, r = 0, i = e.length; n > r; r++) e[i++] = t[r];
			return e.length = i, e
		},
		grep: function(e, t, n) {
			for (var r, i = [], o = 0, a = e.length, s = !n; a > o; o++) r = !t(e[o], o), r !== s && i.push(e[o]);
			return i
		},
		map: function(e, t, n) {
			var r, o, a = 0,
				s = [];
			if (i(e))
				for (r = e.length; r > a; a++) o = t(e[a], a, n), null != o && s.push(o);
			else
				for (a in e) o = t(e[a], a, n), null != o && s.push(o);
			return le(s)
		},
		guid: 1,
		support: ye
	}), "function" == typeof Symbol && (Se.fn[Symbol.iterator] = ae[Symbol.iterator]), Se.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
		pe["[object " + t + "]"] = t.toLowerCase()
	});
	var Ee = ae.pop,
		ke = ae.sort,
		je = ae.splice,
		Ae = "[\\x20\\t\\r\\n\\f]",
		De = new RegExp("^" + Ae + "+|((?:^|[^\\\\])(?:\\\\.)*)" + Ae + "+$", "g");
	Se.contains = function(e, t) {
		var n = t && t.parentNode;
		return e === n || !(!n || 1 !== n.nodeType || !(e.contains ? e.contains(n) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n)))
	};
	var Ne = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
	Se.escapeSelector = function(e) {
		return (e + "").replace(Ne, a)
	};
	var qe = be,
		Le = ce;
	! function() {
		function t() {
			try {
				return N.activeElement
			} catch (e) {}
		}

		function n(e, t, r, i) {
			var o, a, s, u, l, c, d, v = t && t.ownerDocument,
				y = t ? t.nodeType : 9;
			if (r = r || [], "string" != typeof e || !e || 1 !== y && 9 !== y && 11 !== y) return r;
			if (!i && (p(t), t = t || N, L)) {
				if (11 !== y && (l = re.exec(e)))
					if (o = l[1]) {
						if (9 === y) {
							if (!(s = t.getElementById(o))) return r;
							if (s.id === o) return P.call(r, s), r
						} else if (v && (s = v.getElementById(o)) && n.contains(t, s) && s.id === o) return P.call(r, s), r
					} else {
						if (l[2]) return P.apply(r, t.getElementsByTagName(e)), r;
						if ((o = l[3]) && t.getElementsByClassName) return P.apply(r, t.getElementsByClassName(o)), r
					} if (!(B[e + " "] || H && H.test(e))) {
					if (d = e, v = t, 1 === y && (J.test(e) || Q.test(e))) {
						for (v = ie.test(e) && f(t.parentNode) || t, v == t && ye.scope || ((u = t.getAttribute("id")) ? u = Se.escapeSelector(u) : t.setAttribute("id", u = M)), c = h(e), a = c.length; a--;) c[a] = (u ? "#" + u : ":scope") + " " + g(c[a]);
						d = c.join(",")
					}
					try {
						return P.apply(r, v.querySelectorAll(d)), r
					} catch (m) {
						B(e, !0)
					} finally {
						u === M && t.removeAttribute("id")
					}
				}
			}
			return S(e.replace(De, "$1"), t, r, i)
		}

		function r() {
			function e(n, r) {
				return t.push(n + " ") > k.cacheLength && delete e[t.shift()], e[n + " "] = r
			}
			var t = [];
			return e
		}

		function i(e) {
			return e[M] = !0, e
		}

		function a(e) {
			var t = N.createElement("fieldset");
			try {
				return !!e(t)
			} catch (n) {
				return !1
			} finally {
				t.parentNode && t.parentNode.removeChild(t), t = null
			}
		}

		function s(e) {
			return function(t) {
				return o(t, "input") && t.type === e
			}
		}

		function u(e) {
			return function(t) {
				return (o(t, "input") || o(t, "button")) && t.type === e
			}
		}

		function l(e) {
			return function(t) {
				return "form" in t ? t.parentNode && t.disabled === !1 ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ce(t) === e : t.disabled === e : "label" in t ? t.disabled === e : !1
			}
		}

		function c(e) {
			return i(function(t) {
				return t = +t, i(function(n, r) {
					for (var i, o = e([], n.length, t), a = o.length; a--;) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
				})
			})
		}

		function f(e) {
			return e && "undefined" != typeof e.getElementsByTagName && e
		}

		function p(e) {
			var t, r = e ? e.ownerDocument || e : qe;
			return r != N && 9 === r.nodeType && r.documentElement ? (N = r, q = N.documentElement, L = !Se.isXMLDoc(N), O = q.matches || q.webkitMatchesSelector || q.msMatchesSelector, q.msMatchesSelector && qe != N && (t = N.defaultView) && t.top !== t && t.addEventListener("unload", le), ye.getById = a(function(e) {
				return q.appendChild(e).id = Se.expando, !N.getElementsByName || !N.getElementsByName(Se.expando).length
			}), ye.disconnectedMatch = a(function(e) {
				return O.call(e, "*")
			}), ye.scope = a(function() {
				return N.querySelectorAll(":scope")
			}), ye.cssHas = a(function() {
				try {
					return N.querySelector(":has(*,:jqfake)"), !1
				} catch (e) {
					return !0
				}
			}), ye.getById ? (k.filter.ID = function(e) {
				var t = e.replace(oe, se);
				return function(e) {
					return e.getAttribute("id") === t
				}
			}, k.find.ID = function(e, t) {
				if ("undefined" != typeof t.getElementById && L) {
					var n = t.getElementById(e);
					return n ? [n] : []
				}
			}) : (k.filter.ID = function(e) {
				var t = e.replace(oe, se);
				return function(e) {
					var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
					return n && n.value === t
				}
			}, k.find.ID = function(e, t) {
				if ("undefined" != typeof t.getElementById && L) {
					var n, r, i, o = t.getElementById(e);
					if (o) {
						if (n = o.getAttributeNode("id"), n && n.value === e) return [o];
						for (i = t.getElementsByName(e), r = 0; o = i[r++];)
							if (n = o.getAttributeNode("id"), n && n.value === e) return [o]
					}
					return []
				}
			}), k.find.TAG = function(e, t) {
				return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : t.querySelectorAll(e)
			}, k.find.CLASS = function(e, t) {
				return "undefined" != typeof t.getElementsByClassName && L ? t.getElementsByClassName(e) : void 0
			}, H = [], a(function(e) {
				var t;
				q.appendChild(e).innerHTML = "<a id='" + M + "' href='' disabled='disabled'></a><select id='" + M + "-\r\\' disabled='disabled'><option selected=''></option></select>", e.querySelectorAll("[selected]").length || H.push("\\[" + Ae + "*(?:value|" + z + ")"), e.querySelectorAll("[id~=" + M + "-]").length || H.push("~="), e.querySelectorAll("a#" + M + "+*").length || H.push(".#.+[+~]"), e.querySelectorAll(":checked").length || H.push(":checked"), t = N.createElement("input"), t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), q.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && H.push(":enabled", ":disabled"), t = N.createElement("input"), t.setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || H.push("\\[" + Ae + "*name" + Ae + "*=" + Ae + "*(?:''|\"\")")
			}), ye.cssHas || H.push(":has"), H = H.length && new RegExp(H.join("|")), _ = function(e, t) {
				if (e === t) return D = !0, 0;
				var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
				return r ? r : (r = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & r || !ye.sortDetached && t.compareDocumentPosition(e) === r ? e === N || e.ownerDocument == qe && n.contains(qe, e) ? -1 : t === N || t.ownerDocument == qe && n.contains(qe, t) ? 1 : A ? fe.call(A, e) - fe.call(A, t) : 0 : 4 & r ? -1 : 1)
			}, N) : N
		}

		function d() {}

		function h(e, t) {
			var r, i, o, a, s, u, l, c = F[e + " "];
			if (c) return t ? 0 : c.slice(0);
			for (s = e, u = [], l = k.preFilter; s;) {
				r && !(i = Y.exec(s)) || (i && (s = s.slice(i[0].length) || s), u.push(o = [])), r = !1, (i = Q.exec(s)) && (r = i.shift(), o.push({
					value: r,
					type: i[0].replace(De, " ")
				}), s = s.slice(r.length));
				for (a in k.filter) !(i = ee[a].exec(s)) || l[a] && !(i = l[a](i)) || (r = i.shift(), o.push({
					value: r,
					type: a,
					matches: i
				}), s = s.slice(r.length));
				if (!r) break
			}
			return t ? s.length : s ? n.error(e) : F(e, u).slice(0)
		}

		function g(e) {
			for (var t = 0, n = e.length, r = ""; n > t; t++) r += e[t].value;
			return r
		}

		function v(e, t, n) {
			var r = t.dir,
				i = t.next,
				a = i || r,
				s = n && "parentNode" === a,
				u = I++;
			return t.first ? function(t, n, i) {
				for (; t = t[r];)
					if (1 === t.nodeType || s) return e(t, n, i);
				return !1
			} : function(t, n, l) {
				var c, f, p = [R, u];
				if (l) {
					for (; t = t[r];)
						if ((1 === t.nodeType || s) && e(t, n, l)) return !0
				} else
					for (; t = t[r];)
						if (1 === t.nodeType || s)
							if (f = t[M] || (t[M] = {}), i && o(t, i)) t = t[r] || t;
							else {
								if ((c = f[a]) && c[0] === R && c[1] === u) return p[2] = c[2];
								if (f[a] = p, p[2] = e(t, n, l)) return !0
							} return !1
			}
		}

		function y(e) {
			return e.length > 1 ? function(t, n, r) {
				for (var i = e.length; i--;)
					if (!e[i](t, n, r)) return !1;
				return !0
			} : e[0]
		}

		function m(e, t, r) {
			for (var i = 0, o = t.length; o > i; i++) n(e, t[i], r);
			return r
		}

		function x(e, t, n, r, i) {
			for (var o, a = [], s = 0, u = e.length, l = null != t; u > s; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
			return a
		}

		function b(e, t, n, r, o, a) {
			return r && !r[M] && (r = b(r)), o && !o[M] && (o = b(o, a)), i(function(i, a, s, u) {
				var l, c, f, p, d = [],
					h = [],
					g = a.length,
					v = i || m(t || "*", s.nodeType ? [s] : s, []),
					y = !e || !i && t ? v : x(v, d, e, s, u);
				if (n ? (p = o || (i ? e : g || r) ? [] : a, n(y, p, s, u)) : p = y, r)
					for (l = x(p, h), r(l, [], s, u), c = l.length; c--;)(f = l[c]) && (p[h[c]] = !(y[h[c]] = f));
				if (i) {
					if (o || e) {
						if (o) {
							for (l = [], c = p.length; c--;)(f = p[c]) && l.push(y[c] = f);
							o(null, p = [], l, u)
						}
						for (c = p.length; c--;)(f = p[c]) && (l = o ? fe.call(i, f) : d[c]) > -1 && (i[l] = !(a[l] = f))
					}
				} else p = x(p === a ? p.splice(g, p.length) : p), o ? o(null, a, p, u) : P.apply(a, p)
			})
		}

		function w(e) {
			for (var t, n, r, i = e.length, o = k.relative[e[0].type], a = o || k.relative[" "], s = o ? 1 : 0, u = v(function(e) {
					return e === t
				}, a, !0), l = v(function(e) {
					return fe.call(t, e) > -1
				}, a, !0), c = [function(e, n, r) {
					var i = !o && (r || n != j) || ((t = n).nodeType ? u(e, n, r) : l(e, n, r));
					return t = null, i
				}]; i > s; s++)
				if (n = k.relative[e[s].type]) c = [v(y(c), n)];
				else {
					if (n = k.filter[e[s].type].apply(null, e[s].matches), n[M]) {
						for (r = ++s; i > r && !k.relative[e[r].type]; r++);
						return b(s > 1 && y(c), s > 1 && g(e.slice(0, s - 1).concat({
							value: " " === e[s - 2].type ? "*" : ""
						})).replace(De, "$1"), n, r > s && w(e.slice(s, r)), i > r && w(e = e.slice(r)), i > r && g(e))
					}
					c.push(n)
				} return y(c)
		}

		function T(e, t) {
			var n = t.length > 0,
				r = e.length > 0,
				o = function(i, o, a, s, u) {
					var l, c, f, d = 0,
						h = "0",
						g = i && [],
						v = [],
						y = j,
						m = i || r && k.find.TAG("*", u),
						b = R += null == y ? 1 : Math.random() || .1,
						w = m.length;
					for (u && (j = o == N || o || u); h !== w && null != (l = m[h]); h++) {
						if (r && l) {
							for (c = 0, o || l.ownerDocument == N || (p(l), a = !L); f = e[c++];)
								if (f(l, o || N, a)) {
									P.call(s, l);
									break
								} u && (R = b)
						}
						n && ((l = !f && l) && d--, i && g.push(l))
					}
					if (d += h, n && h !== d) {
						for (c = 0; f = t[c++];) f(g, v, o, a);
						if (i) {
							if (d > 0)
								for (; h--;) g[h] || v[h] || (v[h] = Ee.call(s));
							v = x(v)
						}
						P.apply(s, v), u && !i && v.length > 0 && d + t.length > 1 && Se.uniqueSort(s)
					}
					return u && (R = b, j = y), g
				};
			return n ? i(o) : o
		}

		function C(e, t) {
			var n, r = [],
				i = [],
				o = $[e + " "];
			if (!o) {
				for (t || (t = h(e)), n = t.length; n--;) o = w(t[n]), o[M] ? r.push(o) : i.push(o);
				o = $(e, T(i, r)), o.selector = e
			}
			return o
		}

		function S(e, t, n, r) {
			var i, o, a, s, u, l = "function" == typeof e && e,
				c = !r && h(e = l.selector || e);
			if (n = n || [], 1 === c.length) {
				if (o = c[0] = c[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && 9 === t.nodeType && L && k.relative[o[1].type]) {
					if (t = (k.find.ID(a.matches[0].replace(oe, se), t) || [])[0], !t) return n;
					l && (t = t.parentNode), e = e.slice(o.shift().value.length)
				}
				for (i = ee.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i], !k.relative[s = a.type]);)
					if ((u = k.find[s]) && (r = u(a.matches[0].replace(oe, se), ie.test(o[0].type) && f(t.parentNode) || t))) {
						if (o.splice(i, 1), e = r.length && g(o), !e) return P.apply(n, r), n;
						break
					}
			}
			return (l || C(e, c))(r, t, !L, n, !t || ie.test(e) && f(t.parentNode) || t), n
		}
		var E, k, j, A, D, N, q, L, H, O, P = Le,
			M = Se.expando,
			R = 0,
			I = 0,
			W = r(),
			F = r(),
			$ = r(),
			B = r(),
			_ = function(e, t) {
				return e === t && (D = !0), 0
			},
			z = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
			X = "(?:\\\\[\\da-fA-F]{1,6}" + Ae + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\x00-\\x7f])+",
			U = "\\[" + Ae + "*(" + X + ")(?:" + Ae + "*([*^$|!~]?=)" + Ae + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + X + "))|)" + Ae + "*\\]",
			V = ":(" + X + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + U + ")*)|.*)\\)|)",
			G = new RegExp(Ae + "+", "g"),
			Y = new RegExp("^" + Ae + "*," + Ae + "*"),
			Q = new RegExp("^" + Ae + "*([>+~]|" + Ae + ")" + Ae + "*"),
			J = new RegExp(Ae + "|>"),
			K = new RegExp(V),
			Z = new RegExp("^" + X + "$"),
			ee = {
				ID: new RegExp("^#(" + X + ")"),
				CLASS: new RegExp("^\\.(" + X + ")"),
				TAG: new RegExp("^(" + X + "|[*])"),
				ATTR: new RegExp("^" + U),
				PSEUDO: new RegExp("^" + V),
				CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + Ae + "*(even|odd|(([+-]|)(\\d*)n|)" + Ae + "*(?:([+-]|)" + Ae + "*(\\d+)|))" + Ae + "*\\)|)", "i"),
				bool: new RegExp("^(?:" + z + ")$", "i"),
				needsContext: new RegExp("^" + Ae + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + Ae + "*((?:-\\d)?\\d*)" + Ae + "*\\)|)(?=[^-]|$)", "i")
			},
			te = /^(?:input|select|textarea|button)$/i,
			ne = /^h\d$/i,
			re = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
			ie = /[+~]/,
			oe = new RegExp("\\\\[\\da-fA-F]{1,6}" + Ae + "?|\\\\([^\\r\\n\\f])", "g"),
			se = function(e, t) {
				var n = "0x" + e.slice(1) - 65536;
				return t ? t : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
			},
			le = function() {
				p()
			},
			ce = v(function(e) {
				return e.disabled === !0 && o(e, "fieldset")
			}, {
				dir: "parentNode",
				next: "legend"
			});
		try {
			P.apply(ae = ue.call(qe.childNodes), qe.childNodes), ae[qe.childNodes.length].nodeType
		} catch (pe) {
			P = {
				apply: function(e, t) {
					Le.apply(e, ue.call(t))
				},
				call: function(e) {
					Le.apply(e, ue.call(arguments, 1))
				}
			}
		}
		n.matches = function(e, t) {
			return n(e, null, null, t)
		}, n.matchesSelector = function(e, t) {
			if (p(e), L && !B[t + " "] && (!H || !H.test(t))) try {
				var r = O.call(e, t);
				if (r || ye.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
			} catch (i) {
				B(t, !0)
			}
			return n(t, N, null, [e]).length > 0
		}, n.contains = function(e, t) {
			return (e.ownerDocument || e) != N && p(e), Se.contains(e, t)
		}, n.attr = function(e, t) {
			(e.ownerDocument || e) != N && p(e);
			var n = k.attrHandle[t.toLowerCase()],
				r = n && he.call(k.attrHandle, t.toLowerCase()) ? n(e, t, !L) : void 0;
			return void 0 !== r ? r : e.getAttribute(t)
		}, n.error = function(e) {
			throw new Error("Syntax error, unrecognized expression: " + e)
		}, Se.uniqueSort = function(e) {
			var t, n = [],
				r = 0,
				i = 0;
			if (D = !ye.sortStable, A = !ye.sortStable && ue.call(e, 0), ke.call(e, _), D) {
				for (; t = e[i++];) t === e[i] && (r = n.push(i));
				for (; r--;) je.call(e, n[r], 1)
			}
			return A = null, e
		}, Se.fn.uniqueSort = function() {
			return this.pushStack(Se.uniqueSort(ue.apply(this)))
		}, k = Se.expr = {
			cacheLength: 50,
			createPseudo: i,
			match: ee,
			attrHandle: {},
			find: {},
			relative: {
				">": {
					dir: "parentNode",
					first: !0
				},
				" ": {
					dir: "parentNode"
				},
				"+": {
					dir: "previousSibling",
					first: !0
				},
				"~": {
					dir: "previousSibling"
				}
			},
			preFilter: {
				ATTR: function(e) {
					return e[1] = e[1].replace(oe, se), e[3] = (e[3] || e[4] || e[5] || "").replace(oe, se), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
				},
				CHILD: function(e) {
					return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || n.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && n.error(e[0]), e
				},
				PSEUDO: function(e) {
					var t, n = !e[6] && e[2];
					return ee.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && K.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
				}
			},
			filter: {
				TAG: function(e) {
					var t = e.replace(oe, se).toLowerCase();
					return "*" === e ? function() {
						return !0
					} : function(e) {
						return o(e, t)
					}
				},
				CLASS: function(e) {
					var t = W[e + " "];
					return t || (t = new RegExp("(^|" + Ae + ")" + e + "(" + Ae + "|$)")) && W(e, function(e) {
						return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
					})
				},
				ATTR: function(e, t, r) {
					return function(i) {
						var o = n.attr(i, e);
						return null == o ? "!=" === t : t ? (o += "", "=" === t ? o === r : "!=" === t ? o !== r : "^=" === t ? r && 0 === o.indexOf(r) : "*=" === t ? r && o.indexOf(r) > -1 : "$=" === t ? r && o.slice(-r.length) === r : "~=" === t ? (" " + o.replace(G, " ") + " ").indexOf(r) > -1 : "|=" === t ? o === r || o.slice(0, r.length + 1) === r + "-" : !1) : !0
					}
				},
				CHILD: function(e, t, n, r, i) {
					var a = "nth" !== e.slice(0, 3),
						s = "last" !== e.slice(-4),
						u = "of-type" === t;
					return 1 === r && 0 === i ? function(e) {
						return !!e.parentNode
					} : function(t, n, l) {
						var c, f, p, d, h, g = a !== s ? "nextSibling" : "previousSibling",
							v = t.parentNode,
							y = u && t.nodeName.toLowerCase(),
							m = !l && !u,
							x = !1;
						if (v) {
							if (a) {
								for (; g;) {
									for (p = t; p = p[g];)
										if (u ? o(p, y) : 1 === p.nodeType) return !1;
									h = g = "only" === e && !h && "nextSibling"
								}
								return !0
							}
							if (h = [s ? v.firstChild : v.lastChild], s && m) {
								for (f = v[M] || (v[M] = {}), c = f[e] || [], d = c[0] === R && c[1], x = d && c[2], p = d && v.childNodes[d]; p = ++d && p && p[g] || (x = d = 0) || h.pop();)
									if (1 === p.nodeType && ++x && p === t) {
										f[e] = [R, d, x];
										break
									}
							} else if (m && (f = t[M] || (t[M] = {}), c = f[e] || [], d = c[0] === R && c[1], x = d), x === !1)
								for (;
									(p = ++d && p && p[g] || (x = d = 0) || h.pop()) && ((u ? !o(p, y) : 1 !== p.nodeType) || !++x || (m && (f = p[M] || (p[M] = {}), f[e] = [R, x]), p !== t)););
							return x -= i, x === r || x % r === 0 && x / r >= 0
						}
					}
				},
				PSEUDO: function(e, t) {
					var r, o = k.pseudos[e] || k.setFilters[e.toLowerCase()] || n.error("unsupported pseudo: " + e);
					return o[M] ? o(t) : o.length > 1 ? (r = [e, e, "", t], k.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, n) {
						for (var r, i = o(e, t), a = i.length; a--;) r = fe.call(e, i[a]), e[r] = !(n[r] = i[a])
					}) : function(e) {
						return o(e, 0, r)
					}) : o
				}
			},
			pseudos: {
				not: i(function(e) {
					var t = [],
						n = [],
						r = C(e.replace(De, "$1"));
					return r[M] ? i(function(e, t, n, i) {
						for (var o, a = r(e, null, i, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
					}) : function(e, i, o) {
						return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop()
					}
				}),
				has: i(function(e) {
					return function(t) {
						return n(e, t).length > 0
					}
				}),
				contains: i(function(e) {
					return e = e.replace(oe, se),
						function(t) {
							return (t.textContent || Se.text(t)).indexOf(e) > -1
						}
				}),
				lang: i(function(e) {
					return Z.test(e || "") || n.error("unsupported lang: " + e), e = e.replace(oe, se).toLowerCase(),
						function(t) {
							var n;
							do
								if (n = L ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
							return !1
						}
				}),
				target: function(t) {
					var n = e.location && e.location.hash;
					return n && n.slice(1) === t.id
				},
				root: function(e) {
					return e === q
				},
				focus: function(e) {
					return e === t() && N.hasFocus() && !!(e.type || e.href || ~e.tabIndex)
				},
				enabled: l(!1),
				disabled: l(!0),
				checked: function(e) {
					return o(e, "input") && !!e.checked || o(e, "option") && !!e.selected
				},
				selected: function(e) {
					return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
				},
				empty: function(e) {
					for (e = e.firstChild; e; e = e.nextSibling)
						if (e.nodeType < 6) return !1;
					return !0
				},
				parent: function(e) {
					return !k.pseudos.empty(e)
				},
				header: function(e) {
					return ne.test(e.nodeName)
				},
				input: function(e) {
					return te.test(e.nodeName)
				},
				button: function(e) {
					return o(e, "input") && "button" === e.type || o(e, "button")
				},
				text: function(e) {
					var t;
					return o(e, "input") && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
				},
				first: c(function() {
					return [0]
				}),
				last: c(function(e, t) {
					return [t - 1]
				}),
				eq: c(function(e, t, n) {
					return [0 > n ? n + t : n]
				}),
				even: c(function(e, t) {
					for (var n = 0; t > n; n += 2) e.push(n);
					return e
				}),
				odd: c(function(e, t) {
					for (var n = 1; t > n; n += 2) e.push(n);
					return e
				}),
				lt: c(function(e, t, n) {
					var r;
					for (r = 0 > n ? n + t : n > t ? t : n; --r >= 0;) e.push(r);
					return e
				}),
				gt: c(function(e, t, n) {
					for (var r = 0 > n ? n + t : n; ++r < t;) e.push(r);
					return e
				})
			}
		}, k.pseudos.nth = k.pseudos.eq;
		for (E in {
				radio: !0,
				checkbox: !0,
				file: !0,
				password: !0,
				image: !0
			}) k.pseudos[E] = s(E);
		for (E in {
				submit: !0,
				reset: !0
			}) k.pseudos[E] = u(E);
		d.prototype = k.filters = k.pseudos, k.setFilters = new d, ye.sortStable = M.split("").sort(_).join("") === M, p(), ye.sortDetached = a(function(e) {
			return 1 & e.compareDocumentPosition(N.createElement("fieldset"))
		}), Se.find = n, Se.expr[":"] = Se.expr.pseudos, Se.unique = Se.uniqueSort, n.compile = C, n.select = S, n.setDocument = p, n.tokenize = h, n.escape = Se.escapeSelector, n.getText = Se.text, n.isXML = Se.isXMLDoc, n.selectors = Se.expr, n.support = Se.support, n.uniqueSort = Se.uniqueSort
	}();
	var He = function(e, t, n) {
			for (var r = [], i = void 0 !== n;
				(e = e[t]) && 9 !== e.nodeType;)
				if (1 === e.nodeType) {
					if (i && Se(e).is(n)) break;
					r.push(e)
				} return r
		},
		Oe = function(e, t) {
			for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
			return n
		},
		Pe = Se.expr.match.needsContext,
		Me = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
	Se.filter = function(e, t, n) {
		var r = t[0];
		return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? Se.find.matchesSelector(r, e) ? [r] : [] : Se.find.matches(e, Se.grep(t, function(e) {
			return 1 === e.nodeType
		}))
	}, Se.fn.extend({
		find: function(e) {
			var t, n, r = this.length,
				i = this;
			if ("string" != typeof e) return this.pushStack(Se(e).filter(function() {
				for (t = 0; r > t; t++)
					if (Se.contains(i[t], this)) return !0
			}));
			for (n = this.pushStack([]), t = 0; r > t; t++) Se.find(e, i[t], n);
			return r > 1 ? Se.uniqueSort(n) : n
		},
		filter: function(e) {
			return this.pushStack(s(this, e || [], !1))
		},
		not: function(e) {
			return this.pushStack(s(this, e || [], !0))
		},
		is: function(e) {
			return !!s(this, "string" == typeof e && Pe.test(e) ? Se(e) : e || [], !1).length
		}
	});
	var Re, Ie = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
		We = Se.fn.init = function(e, t, n) {
			var r, i;
			if (!e) return this;
			if (n = n || Re, "string" == typeof e) {
				if (r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : Ie.exec(e), !r || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
				if (r[1]) {
					if (t = t instanceof Se ? t[0] : t, Se.merge(this, Se.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : be, !0)), Me.test(r[1]) && Se.isPlainObject(t))
						for (r in t) me(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
					return this
				}
				return i = be.getElementById(r[2]), i && (this[0] = i, this.length = 1), this
			}
			return e.nodeType ? (this[0] = e, this.length = 1, this) : me(e) ? void 0 !== n.ready ? n.ready(e) : e(Se) : Se.makeArray(e, this)
		};
	We.prototype = Se.fn, Re = Se(be);
	var Fe = /^(?:parents|prev(?:Until|All))/,
		$e = {
			children: !0,
			contents: !0,
			next: !0,
			prev: !0
		};
	Se.fn.extend({
		has: function(e) {
			var t = Se(e, this),
				n = t.length;
			return this.filter(function() {
				for (var e = 0; n > e; e++)
					if (Se.contains(this, t[e])) return !0
			})
		},
		closest: function(e, t) {
			var n, r = 0,
				i = this.length,
				o = [],
				a = "string" != typeof e && Se(e);
			if (!Pe.test(e))
				for (; i > r; r++)
					for (n = this[r]; n && n !== t; n = n.parentNode)
						if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && Se.find.matchesSelector(n, e))) {
							o.push(n);
							break
						} return this.pushStack(o.length > 1 ? Se.uniqueSort(o) : o)
		},
		index: function(e) {
			return e ? "string" == typeof e ? fe.call(Se(e), this[0]) : fe.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
		},
		add: function(e, t) {
			return this.pushStack(Se.uniqueSort(Se.merge(this.get(), Se(e, t))))
		},
		addBack: function(e) {
			return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
		}
	}), Se.each({
		parent: function(e) {
			var t = e.parentNode;
			return t && 11 !== t.nodeType ? t : null
		},
		parents: function(e) {
			return He(e, "parentNode")
		},
		parentsUntil: function(e, t, n) {
			return He(e, "parentNode", n)
		},
		next: function(e) {
			return u(e, "nextSibling")
		},
		prev: function(e) {
			return u(e, "previousSibling")
		},
		nextAll: function(e) {
			return He(e, "nextSibling")
		},
		prevAll: function(e) {
			return He(e, "previousSibling")
		},
		nextUntil: function(e, t, n) {
			return He(e, "nextSibling", n)
		},
		prevUntil: function(e, t, n) {
			return He(e, "previousSibling", n)
		},
		siblings: function(e) {
			return Oe((e.parentNode || {}).firstChild, e)
		},
		children: function(e) {
			return Oe(e.firstChild)
		},
		contents: function(e) {
			return null != e.contentDocument && se(e.contentDocument) ? e.contentDocument : (o(e, "template") && (e = e.content || e), Se.merge([], e.childNodes))
		}
	}, function(e, t) {
		Se.fn[e] = function(n, r) {
			var i = Se.map(this, t, n);
			return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = Se.filter(r, i)), this.length > 1 && ($e[e] || Se.uniqueSort(i), Fe.test(e) && i.reverse()), this.pushStack(i)
		}
	});
	var Be = /[^\x20\t\r\n\f]+/g;
	Se.Callbacks = function(e) {
		e = "string" == typeof e ? l(e) : Se.extend({}, e);
		var t, n, i, o, a = [],
			s = [],
			u = -1,
			c = function() {
				for (o = o || e.once, i = t = !0; s.length; u = -1)
					for (n = s.shift(); ++u < a.length;) a[u].apply(n[0], n[1]) === !1 && e.stopOnFalse && (u = a.length, n = !1);
				e.memory || (n = !1), t = !1, o && (a = n ? [] : "")
			},
			f = {
				add: function() {
					return a && (n && !t && (u = a.length - 1, s.push(n)), function i(t) {
						Se.each(t, function(t, n) {
							me(n) ? e.unique && f.has(n) || a.push(n) : n && n.length && "string" !== r(n) && i(n)
						})
					}(arguments), n && !t && c()), this
				},
				remove: function() {
					return Se.each(arguments, function(e, t) {
						for (var n;
							(n = Se.inArray(t, a, n)) > -1;) a.splice(n, 1), u >= n && u--
					}), this
				},
				has: function(e) {
					return e ? Se.inArray(e, a) > -1 : a.length > 0
				},
				empty: function() {
					return a && (a = []), this
				},
				disable: function() {
					return o = s = [], a = n = "", this
				},
				disabled: function() {
					return !a
				},
				lock: function() {
					return o = s = [], n || t || (a = n = ""), this
				},
				locked: function() {
					return !!o
				},
				fireWith: function(e, n) {
					return o || (n = n || [], n = [e, n.slice ? n.slice() : n], s.push(n), t || c()), this
				},
				fire: function() {
					return f.fireWith(this, arguments), this
				},
				fired: function() {
					return !!i
				}
			};
		return f
	}, Se.extend({
		Deferred: function(t) {
			var n = [
					["notify", "progress", Se.Callbacks("memory"), Se.Callbacks("memory"), 2],
					["resolve", "done", Se.Callbacks("once memory"), Se.Callbacks("once memory"), 0, "resolved"],
					["reject", "fail", Se.Callbacks("once memory"), Se.Callbacks("once memory"), 1, "rejected"]
				],
				r = "pending",
				i = {
					state: function() {
						return r
					},
					always: function() {
						return o.done(arguments).fail(arguments), this
					},
					"catch": function(e) {
						return i.then(null, e)
					},
					pipe: function() {
						var e = arguments;
						return Se.Deferred(function(t) {
							Se.each(n, function(n, r) {
								var i = me(e[r[4]]) && e[r[4]];
								o[r[1]](function() {
									var e = i && i.apply(this, arguments);
									e && me(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, i ? [e] : arguments)
								})
							}), e = null
						}).promise()
					},
					then: function(t, r, i) {
						function o(t, n, r, i) {
							return function() {
								var s = this,
									u = arguments,
									l = function() {
										var e, l;
										if (!(a > t)) {
											if (e = r.apply(s, u), e === n.promise()) throw new TypeError("Thenable self-resolution");
											l = e && ("object" == typeof e || "function" == typeof e) && e.then, me(l) ? i ? l.call(e, o(a, n, c, i), o(a, n, f, i)) : (a++, l.call(e, o(a, n, c, i), o(a, n, f, i), o(a, n, c, n.notifyWith))) : (r !== c && (s = void 0, u = [e]), (i || n.resolveWith)(s, u))
										}
									},
									p = i ? l : function() {
										try {
											l()
										} catch (e) {
											Se.Deferred.exceptionHook && Se.Deferred.exceptionHook(e, p.error), t + 1 >= a && (r !== f && (s = void 0, u = [e]), n.rejectWith(s, u))
										}
									};
								t ? p() : (Se.Deferred.getErrorHook ? p.error = Se.Deferred.getErrorHook() : Se.Deferred.getStackHook && (p.error = Se.Deferred.getStackHook()), e.setTimeout(p))
							}
						}
						var a = 0;
						return Se.Deferred(function(e) {
							n[0][3].add(o(0, e, me(i) ? i : c, e.notifyWith)), n[1][3].add(o(0, e, me(t) ? t : c)), n[2][3].add(o(0, e, me(r) ? r : f))
						}).promise()
					},
					promise: function(e) {
						return null != e ? Se.extend(e, i) : i
					}
				},
				o = {};
			return Se.each(n, function(e, t) {
				var a = t[2],
					s = t[5];
				i[t[1]] = a.add, s && a.add(function() {
					r = s
				}, n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock), a.add(t[3].fire), o[t[0]] = function() {
					return o[t[0] + "With"](this === o ? void 0 : this, arguments), this
				}, o[t[0] + "With"] = a.fireWith
			}), i.promise(o), t && t.call(o, o), o
		},
		when: function(e) {
			var t = arguments.length,
				n = t,
				r = Array(n),
				i = ue.call(arguments),
				o = Se.Deferred(),
				a = function(e) {
					return function(n) {
						r[e] = this, i[e] = arguments.length > 1 ? ue.call(arguments) : n, --t || o.resolveWith(r, i)
					}
				};
			if (1 >= t && (p(e, o.done(a(n)).resolve, o.reject, !t), "pending" === o.state() || me(i[n] && i[n].then))) return o.then();
			for (; n--;) p(i[n], a(n), o.reject);
			return o.promise()
		}
	});
	var _e = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
	Se.Deferred.exceptionHook = function(t, n) {
		e.console && e.console.warn && t && _e.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
	}, Se.readyException = function(t) {
		e.setTimeout(function() {
			throw t
		})
	};
	var ze = Se.Deferred();
	Se.fn.ready = function(e) {
		return ze.then(e)["catch"](function(e) {
			Se.readyException(e)
		}), this
	}, Se.extend({
		isReady: !1,
		readyWait: 1,
		ready: function(e) {
			(e === !0 ? --Se.readyWait : Se.isReady) || (Se.isReady = !0, e !== !0 && --Se.readyWait > 0 || ze.resolveWith(be, [Se]))
		}
	}), Se.ready.then = ze.then, "complete" === be.readyState || "loading" !== be.readyState && !be.documentElement.doScroll ? e.setTimeout(Se.ready) : (be.addEventListener("DOMContentLoaded", d), e.addEventListener("load", d));
	var Xe = function(e, t, n, i, o, a, s) {
			var u = 0,
				l = e.length,
				c = null == n;
			if ("object" === r(n)) {
				o = !0;
				for (u in n) Xe(e, t, u, n[u], !0, a, s)
			} else if (void 0 !== i && (o = !0, me(i) || (s = !0), c && (s ? (t.call(e, i), t = null) : (c = t, t = function(e, t, n) {
					return c.call(Se(e), n)
				})), t))
				for (; l > u; u++) t(e[u], n, s ? i : i.call(e[u], u, t(e[u], n)));
			return o ? e : c ? t.call(e) : l ? t(e[0], n) : a
		},
		Ue = /^-ms-/,
		Ve = /-([a-z])/g,
		Ge = function(e) {
			return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
		};
	v.uid = 1, v.prototype = {
		cache: function(e) {
			var t = e[this.expando];
			return t || (t = {}, Ge(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
				value: t,
				configurable: !0
			}))), t
		},
		set: function(e, t, n) {
			var r, i = this.cache(e);
			if ("string" == typeof t) i[g(t)] = n;
			else
				for (r in t) i[g(r)] = t[r];
			return i
		},
		get: function(e, t) {
			return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][g(t)]
		},
		access: function(e, t, n) {
			return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
		},
		remove: function(e, t) {
			var n, r = e[this.expando];
			if (void 0 !== r) {
				if (void 0 !== t) {
					Array.isArray(t) ? t = t.map(g) : (t = g(t), t = t in r ? [t] : t.match(Be) || []), n = t.length;
					for (; n--;) delete r[t[n]]
				}(void 0 === t || Se.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
			}
		},
		hasData: function(e) {
			var t = e[this.expando];
			return void 0 !== t && !Se.isEmptyObject(t)
		}
	};
	var Ye = new v,
		Qe = new v,
		Je = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		Ke = /[A-Z]/g;
	Se.extend({
		hasData: function(e) {
			return Qe.hasData(e) || Ye.hasData(e)
		},
		data: function(e, t, n) {
			return Qe.access(e, t, n)
		},
		removeData: function(e, t) {
			Qe.remove(e, t)
		},
		_data: function(e, t, n) {
			return Ye.access(e, t, n)
		},
		_removeData: function(e, t) {
			Ye.remove(e, t)
		}
	}), Se.fn.extend({
		data: function(e, t) {
			var n, r, i, o = this[0],
				a = o && o.attributes;
			if (void 0 === e) {
				if (this.length && (i = Qe.get(o), 1 === o.nodeType && !Ye.get(o, "hasDataAttrs"))) {
					for (n = a.length; n--;) a[n] && (r = a[n].name, 0 === r.indexOf("data-") && (r = g(r.slice(5)), m(o, r, i[r])));
					Ye.set(o, "hasDataAttrs", !0)
				}
				return i
			}
			return "object" == typeof e ? this.each(function() {
				Qe.set(this, e)
			}) : Xe(this, function(t) {
				var n;
				if (o && void 0 === t) {
					if (n = Qe.get(o, e), void 0 !== n) return n;
					if (n = m(o, e), void 0 !== n) return n
				} else this.each(function() {
					Qe.set(this, e, t)
				})
			}, null, t, arguments.length > 1, null, !0)
		},
		removeData: function(e) {
			return this.each(function() {
				Qe.remove(this, e)
			})
		}
	}), Se.extend({
		queue: function(e, t, n) {
			var r;
			return e ? (t = (t || "fx") + "queue", r = Ye.get(e, t), n && (!r || Array.isArray(n) ? r = Ye.access(e, t, Se.makeArray(n)) : r.push(n)), r || []) : void 0
		},
		dequeue: function(e, t) {
			t = t || "fx";
			var n = Se.queue(e, t),
				r = n.length,
				i = n.shift(),
				o = Se._queueHooks(e, t),
				a = function() {
					Se.dequeue(e, t)
				};
			"inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire()
		},
		_queueHooks: function(e, t) {
			var n = t + "queueHooks";
			return Ye.get(e, n) || Ye.access(e, n, {
				empty: Se.Callbacks("once memory").add(function() {
					Ye.remove(e, [t + "queue", n])
				})
			})
		}
	}), Se.fn.extend({
		queue: function(e, t) {
			var n = 2;
			return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? Se.queue(this[0], e) : void 0 === t ? this : this.each(function() {
				var n = Se.queue(this, e, t);
				Se._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && Se.dequeue(this, e)
			})
		},
		dequeue: function(e) {
			return this.each(function() {
				Se.dequeue(this, e)
			})
		},
		clearQueue: function(e) {
			return this.queue(e || "fx", [])
		},
		promise: function(e, t) {
			var n, r = 1,
				i = Se.Deferred(),
				o = this,
				a = this.length,
				s = function() {
					--r || i.resolveWith(o, [o])
				};
			for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;) n = Ye.get(o[a], e + "queueHooks"), n && n.empty && (r++, n.empty.add(s));
			return s(), i.promise(t)
		}
	});
	var Ze = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
		et = new RegExp("^(?:([+-])=|)(" + Ze + ")([a-z%]*)$", "i"),
		tt = ["Top", "Right", "Bottom", "Left"],
		nt = be.documentElement,
		rt = function(e) {
			return Se.contains(e.ownerDocument, e)
		},
		it = {
			composed: !0
		};
	nt.getRootNode && (rt = function(e) {
		return Se.contains(e.ownerDocument, e) || e.getRootNode(it) === e.ownerDocument
	});
	var ot = function(e, t) {
			return e = t || e, "none" === e.style.display || "" === e.style.display && rt(e) && "none" === Se.css(e, "display")
		},
		at = {};
	Se.fn.extend({
		show: function() {
			return w(this, !0)
		},
		hide: function() {
			return w(this)
		},
		toggle: function(e) {
			return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
				ot(this) ? Se(this).show() : Se(this).hide()
			})
		}
	});
	var st = /^(?:checkbox|radio)$/i,
		ut = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
		lt = /^$|^module$|\/(?:java|ecma)script/i;
	! function() {
		var e = be.createDocumentFragment(),
			t = e.appendChild(be.createElement("div")),
			n = be.createElement("input");
		n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), ye.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", ye.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue, t.innerHTML = "<option></option>", ye.option = !!t.lastChild
	}();
	var ct = {
		thead: [1, "<table>", "</table>"],
		col: [2, "<table><colgroup>", "</colgroup></table>"],
		tr: [2, "<table><tbody>", "</tbody></table>"],
		td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
		_default: [0, "", ""]
	};
	ct.tbody = ct.tfoot = ct.colgroup = ct.caption = ct.thead, ct.th = ct.td, ye.option || (ct.optgroup = ct.option = [1, "<select multiple='multiple'>", "</select>"]);
	var ft = /<|&#?\w+;/,
		pt = /^([^.]*)(?:\.(.+)|)/;
	Se.event = {
		global: {},
		add: function(e, t, n, r, i) {
			var o, a, s, u, l, c, f, p, d, h, g, v = Ye.get(e);
			if (Ge(e))
				for (n.handler && (o = n, n = o.handler, i = o.selector), i && Se.find.matchesSelector(nt, i), n.guid || (n.guid = Se.guid++), (u = v.events) || (u = v.events = Object.create(null)), (a = v.handle) || (a = v.handle = function(t) {
						return "undefined" != typeof Se && Se.event.triggered !== t.type ? Se.event.dispatch.apply(e, arguments) : void 0
					}), t = (t || "").match(Be) || [""], l = t.length; l--;) s = pt.exec(t[l]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), d && (f = Se.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = Se.event.special[d] || {}, c = Se.extend({
					type: d,
					origType: g,
					data: r,
					handler: n,
					guid: n.guid,
					selector: i,
					needsContext: i && Se.expr.match.needsContext.test(i),
					namespace: h.join(".")
				}, o), (p = u[d]) || (p = u[d] = [], p.delegateCount = 0, f.setup && f.setup.call(e, r, h, a) !== !1 || e.addEventListener && e.addEventListener(d, a)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), Se.event.global[d] = !0)
		},
		remove: function(e, t, n, r, i) {
			var o, a, s, u, l, c, f, p, d, h, g, v = Ye.hasData(e) && Ye.get(e);
			if (v && (u = v.events)) {
				for (t = (t || "").match(Be) || [""], l = t.length; l--;)
					if (s = pt.exec(t[l]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), d) {
						for (f = Se.event.special[d] || {}, d = (r ? f.delegateType : f.bindType) || d, p = u[d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length; o--;) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
						a && !p.length && (f.teardown && f.teardown.call(e, h, v.handle) !== !1 || Se.removeEvent(e, d, v.handle), delete u[d])
					} else
						for (d in u) Se.event.remove(e, d + t[l], n, r, !0);
				Se.isEmptyObject(u) && Ye.remove(e, "handle events")
			}
		},
		dispatch: function(e) {
			var t, n, r, i, o, a, s = new Array(arguments.length),
				u = Se.event.fix(e),
				l = (Ye.get(this, "events") || Object.create(null))[u.type] || [],
				c = Se.event.special[u.type] || {};
			for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
			if (u.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, u) !== !1) {
				for (a = Se.event.handlers.call(this, u, l), t = 0;
					(i = a[t++]) && !u.isPropagationStopped();)
					for (u.currentTarget = i.elem, n = 0;
						(o = i.handlers[n++]) && !u.isImmediatePropagationStopped();) u.rnamespace && o.namespace !== !1 && !u.rnamespace.test(o.namespace) || (u.handleObj = o, u.data = o.data, r = ((Se.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s), void 0 !== r && (u.result = r) === !1 && (u.preventDefault(), u.stopPropagation()));
				return c.postDispatch && c.postDispatch.call(this, u), u.result
			}
		},
		handlers: function(e, t) {
			var n, r, i, o, a, s = [],
				u = t.delegateCount,
				l = e.target;
			if (u && l.nodeType && !("click" === e.type && e.button >= 1))
				for (; l !== this; l = l.parentNode || this)
					if (1 === l.nodeType && ("click" !== e.type || l.disabled !== !0)) {
						for (o = [], a = {}, n = 0; u > n; n++) r = t[n], i = r.selector + " ", void 0 === a[i] && (a[i] = r.needsContext ? Se(i, this).index(l) > -1 : Se.find(i, this, null, [l]).length), a[i] && o.push(r);
						o.length && s.push({
							elem: l,
							handlers: o
						})
					} return l = this, u < t.length && s.push({
				elem: l,
				handlers: t.slice(u)
			}), s
		},
		addProp: function(e, t) {
			Object.defineProperty(Se.Event.prototype, e, {
				enumerable: !0,
				configurable: !0,
				get: me(t) ? function() {
					return this.originalEvent ? t(this.originalEvent) : void 0
				} : function() {
					return this.originalEvent ? this.originalEvent[e] : void 0
				},
				set: function(t) {
					Object.defineProperty(this, e, {
						enumerable: !0,
						configurable: !0,
						writable: !0,
						value: t
					})
				}
			})
		},
		fix: function(e) {
			return e[Se.expando] ? e : new Se.Event(e)
		},
		special: {
			load: {
				noBubble: !0
			},
			click: {
				setup: function(e) {
					var t = this || e;
					return st.test(t.type) && t.click && o(t, "input") && A(t, "click", !0), !1
				},
				trigger: function(e) {
					var t = this || e;
					return st.test(t.type) && t.click && o(t, "input") && A(t, "click"), !0
				},
				_default: function(e) {
					var t = e.target;
					return st.test(t.type) && t.click && o(t, "input") && Ye.get(t, "click") || o(t, "a")
				}
			},
			beforeunload: {
				postDispatch: function(e) {
					void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
				}
			}
		}
	}, Se.removeEvent = function(e, t, n) {
		e.removeEventListener && e.removeEventListener(t, n)
	}, Se.Event = function(e, t) {
		return this instanceof Se.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? E : k, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && Se.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), void(this[Se.expando] = !0)) : new Se.Event(e, t)
	}, Se.Event.prototype = {
		constructor: Se.Event,
		isDefaultPrevented: k,
		isPropagationStopped: k,
		isImmediatePropagationStopped: k,
		isSimulated: !1,
		preventDefault: function() {
			var e = this.originalEvent;
			this.isDefaultPrevented = E, e && !this.isSimulated && e.preventDefault()
		},
		stopPropagation: function() {
			var e = this.originalEvent;
			this.isPropagationStopped = E, e && !this.isSimulated && e.stopPropagation()
		},
		stopImmediatePropagation: function() {
			var e = this.originalEvent;
			this.isImmediatePropagationStopped = E, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
		}
	}, Se.each({
		altKey: !0,
		bubbles: !0,
		cancelable: !0,
		changedTouches: !0,
		ctrlKey: !0,
		detail: !0,
		eventPhase: !0,
		metaKey: !0,
		pageX: !0,
		pageY: !0,
		shiftKey: !0,
		view: !0,
		"char": !0,
		code: !0,
		charCode: !0,
		key: !0,
		keyCode: !0,
		button: !0,
		buttons: !0,
		clientX: !0,
		clientY: !0,
		offsetX: !0,
		offsetY: !0,
		pointerId: !0,
		pointerType: !0,
		screenX: !0,
		screenY: !0,
		targetTouches: !0,
		toElement: !0,
		touches: !0,
		which: !0
	}, Se.event.addProp), Se.each({
		focus: "focusin",
		blur: "focusout"
	}, function(e, t) {
		function n(e) {
			if (be.documentMode) {
				var n = Ye.get(this, "handle"),
					r = Se.event.fix(e);
				r.type = "focusin" === e.type ? "focus" : "blur", r.isSimulated = !0, n(e), r.target === r.currentTarget && n(r)
			} else Se.event.simulate(t, e.target, Se.event.fix(e))
		}
		Se.event.special[e] = {
			setup: function() {
				var r;
				return A(this, e, !0), be.documentMode ? (r = Ye.get(this, t), r || this.addEventListener(t, n), Ye.set(this, t, (r || 0) + 1), void 0) : !1
			},
			trigger: function() {
				return A(this, e), !0
			},
			teardown: function() {
				var e;
				return be.documentMode ? (e = Ye.get(this, t) - 1, void(e ? Ye.set(this, t, e) : (this.removeEventListener(t, n), Ye.remove(this, t)))) : !1
			},
			_default: function(t) {
				return Ye.get(t.target, e)
			},
			delegateType: t
		}, Se.event.special[t] = {
			setup: function() {
				var r = this.ownerDocument || this.document || this,
					i = be.documentMode ? this : r,
					o = Ye.get(i, t);
				o || (be.documentMode ? this.addEventListener(t, n) : r.addEventListener(e, n, !0)), Ye.set(i, t, (o || 0) + 1)
			},
			teardown: function() {
				var r = this.ownerDocument || this.document || this,
					i = be.documentMode ? this : r,
					o = Ye.get(i, t) - 1;
				o ? Ye.set(i, t, o) : (be.documentMode ? this.removeEventListener(t, n) : r.removeEventListener(e, n, !0), Ye.remove(i, t))
			}
		}
	}), Se.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function(e, t) {
		Se.event.special[e] = {
			delegateType: t,
			bindType: t,
			handle: function(e) {
				var n, r = this,
					i = e.relatedTarget,
					o = e.handleObj;
				return i && (i === r || Se.contains(r, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
			}
		}
	}), Se.fn.extend({
		on: function(e, t, n, r) {
			return j(this, e, t, n, r)
		},
		one: function(e, t, n, r) {
			return j(this, e, t, n, r, 1)
		},
		off: function(e, t, n) {
			var r, i;
			if (e && e.preventDefault && e.handleObj) return r = e.handleObj, Se(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
			if ("object" == typeof e) {
				for (i in e) this.off(i, t, e[i]);
				return this
			}
			return t !== !1 && "function" != typeof t || (n = t, t = void 0), n === !1 && (n = k), this.each(function() {
				Se.event.remove(this, e, n, t)
			})
		}
	});
	var dt = /<script|<style|<link/i,
		ht = /checked\s*(?:[^=]|=\s*.checked.)/i,
		gt = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
	Se.extend({
		htmlPrefilter: function(e) {
			return e
		},
		clone: function(e, t, n) {
			var r, i, o, a, s = e.cloneNode(!0),
				u = rt(e);
			if (!(ye.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || Se.isXMLDoc(e)))
				for (a = T(s), o = T(e), r = 0, i = o.length; i > r; r++) H(o[r], a[r]);
			if (t)
				if (n)
					for (o = o || T(e), a = a || T(s), r = 0, i = o.length; i > r; r++) L(o[r], a[r]);
				else L(e, s);
			return a = T(s, "script"), a.length > 0 && C(a, !u && T(e, "script")), s
		},
		cleanData: function(e) {
			for (var t, n, r, i = Se.event.special, o = 0; void 0 !== (n = e[o]); o++)
				if (Ge(n)) {
					if (t = n[Ye.expando]) {
						if (t.events)
							for (r in t.events) i[r] ? Se.event.remove(n, r) : Se.removeEvent(n, r, t.handle);
						n[Ye.expando] = void 0
					}
					n[Qe.expando] && (n[Qe.expando] = void 0)
				}
		}
	}), Se.fn.extend({
		detach: function(e) {
			return P(this, e, !0)
		},
		remove: function(e) {
			return P(this, e)
		},
		text: function(e) {
			return Xe(this, function(e) {
				return void 0 === e ? Se.text(this) : this.empty().each(function() {
					1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
				})
			}, null, e, arguments.length)
		},
		append: function() {
			return O(this, arguments, function(e) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var t = D(this, e);
					t.appendChild(e)
				}
			})
		},
		prepend: function() {
			return O(this, arguments, function(e) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var t = D(this, e);
					t.insertBefore(e, t.firstChild)
				}
			})
		},
		before: function() {
			return O(this, arguments, function(e) {
				this.parentNode && this.parentNode.insertBefore(e, this)
			})
		},
		after: function() {
			return O(this, arguments, function(e) {
				this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
			})
		},
		empty: function() {
			for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (Se.cleanData(T(e, !1)), e.textContent = "");
			return this
		},
		clone: function(e, t) {
			return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
				return Se.clone(this, e, t)
			})
		},
		html: function(e) {
			return Xe(this, function(e) {
				var t = this[0] || {},
					n = 0,
					r = this.length;
				if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
				if ("string" == typeof e && !dt.test(e) && !ct[(ut.exec(e) || ["", ""])[1].toLowerCase()]) {
					e = Se.htmlPrefilter(e);
					try {
						for (; r > n; n++) t = this[n] || {}, 1 === t.nodeType && (Se.cleanData(T(t, !1)), t.innerHTML = e);
						t = 0
					} catch (i) {}
				}
				t && this.empty().append(e)
			}, null, e, arguments.length)
		},
		replaceWith: function() {
			var e = [];
			return O(this, arguments, function(t) {
				var n = this.parentNode;
				Se.inArray(this, e) < 0 && (Se.cleanData(T(this)), n && n.replaceChild(t, this))
			}, e)
		}
	}), Se.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function(e, t) {
		Se.fn[e] = function(e) {
			for (var n, r = [], i = Se(e), o = i.length - 1, a = 0; o >= a; a++) n = a === o ? this : this.clone(!0), Se(i[a])[t](n), ce.apply(r, n.get());
			return this.pushStack(r)
		}
	});
	var vt = new RegExp("^(" + Ze + ")(?!px)[a-z%]+$", "i"),
		yt = /^--/,
		mt = function(t) {
			var n = t.ownerDocument.defaultView;
			return n && n.opener || (n = e), n.getComputedStyle(t)
		},
		xt = function(e, t, n) {
			var r, i, o = {};
			for (i in t) o[i] = e.style[i], e.style[i] = t[i];
			r = n.call(e);
			for (i in t) e.style[i] = o[i];
			return r
		},
		bt = new RegExp(tt.join("|"), "i");
	! function() {
		function t() {
			if (c) {
				l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", nt.appendChild(l).appendChild(c);
				var t = e.getComputedStyle(c);
				r = "1%" !== t.top, u = 12 === n(t.marginLeft), c.style.right = "60%", a = 36 === n(t.right), i = 36 === n(t.width), c.style.position = "absolute", o = 12 === n(c.offsetWidth / 3), nt.removeChild(l), c = null
			}
		}

		function n(e) {
			return Math.round(parseFloat(e))
		}
		var r, i, o, a, s, u, l = be.createElement("div"),
			c = be.createElement("div");
		c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", ye.clearCloneStyle = "content-box" === c.style.backgroundClip, Se.extend(ye, {
			boxSizingReliable: function() {
				return t(), i
			},
			pixelBoxStyles: function() {
				return t(), a
			},
			pixelPosition: function() {
				return t(), r
			},
			reliableMarginLeft: function() {
				return t(), u
			},
			scrollboxSize: function() {
				return t(), o
			},
			reliableTrDimensions: function() {
				var t, n, r, i;
				return null == s && (t = be.createElement("table"), n = be.createElement("tr"), r = be.createElement("div"), t.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", n.style.cssText = "box-sizing:content-box;border:1px solid", n.style.height = "1px", r.style.height = "9px", r.style.display = "block", nt.appendChild(t).appendChild(n).appendChild(r), i = e.getComputedStyle(n), s = parseInt(i.height, 10) + parseInt(i.borderTopWidth, 10) + parseInt(i.borderBottomWidth, 10) === n.offsetHeight, nt.removeChild(t)), s
			}
		}))
	}();
	var wt = ["Webkit", "Moz", "ms"],
		Tt = be.createElement("div").style,
		Ct = {},
		St = /^(none|table(?!-c[ea]).+)/,
		Et = {
			position: "absolute",
			visibility: "hidden",
			display: "block"
		},
		kt = {
			letterSpacing: "0",
			fontWeight: "400"
		};
	Se.extend({
		cssHooks: {
			opacity: {
				get: function(e, t) {
					if (t) {
						var n = M(e, "opacity");
						return "" === n ? "1" : n
					}
				}
			}
		},
		cssNumber: {
			animationIterationCount: !0,
			aspectRatio: !0,
			borderImageSlice: !0,
			columnCount: !0,
			flexGrow: !0,
			flexShrink: !0,
			fontWeight: !0,
			gridArea: !0,
			gridColumn: !0,
			gridColumnEnd: !0,
			gridColumnStart: !0,
			gridRow: !0,
			gridRowEnd: !0,
			gridRowStart: !0,
			lineHeight: !0,
			opacity: !0,
			order: !0,
			orphans: !0,
			scale: !0,
			widows: !0,
			zIndex: !0,
			zoom: !0,
			fillOpacity: !0,
			floodOpacity: !0,
			stopOpacity: !0,
			strokeMiterlimit: !0,
			strokeOpacity: !0
		},
		cssProps: {},
		style: function(e, t, n, r) {
			if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
				var i, o, a, s = g(t),
					u = yt.test(t),
					l = e.style;
				return u || (t = W(s)), a = Se.cssHooks[t] || Se.cssHooks[s], void 0 === n ? a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t] : (o = typeof n, "string" === o && (i = et.exec(n)) && i[1] && (n = x(e, t, i), o = "number"), null != n && n === n && ("number" !== o || u || (n += i && i[3] || (Se.cssNumber[s] ? "" : "px")), ye.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n)), void 0)
			}
		},
		css: function(e, t, n, r) {
			var i, o, a, s = g(t),
				u = yt.test(t);
			return u || (t = W(s)), a = Se.cssHooks[t] || Se.cssHooks[s], a && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = M(e, t, r)), "normal" === i && t in kt && (i = kt[t]), "" === n || n ? (o = parseFloat(i), n === !0 || isFinite(o) ? o || 0 : i) : i
		}
	}), Se.each(["height", "width"], function(e, t) {
		Se.cssHooks[t] = {
			get: function(e, n, r) {
				return n ? !St.test(Se.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? B(e, t, r) : xt(e, Et, function() {
					return B(e, t, r)
				}) : void 0
			},
			set: function(e, n, r) {
				var i, o = mt(e),
					a = !ye.scrollboxSize() && "absolute" === o.position,
					s = a || r,
					u = s && "border-box" === Se.css(e, "boxSizing", !1, o),
					l = r ? $(e, t, r, u, o) : 0;
				return u && a && (l -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - $(e, t, "border", !1, o) - .5)), l && (i = et.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = Se.css(e, t)), F(e, n, l)
			}
		}
	}), Se.cssHooks.marginLeft = R(ye.reliableMarginLeft, function(e, t) {
		return t ? (parseFloat(M(e, "marginLeft")) || e.getBoundingClientRect().left - xt(e, {
			marginLeft: 0
		}, function() {
			return e.getBoundingClientRect().left
		})) + "px" : void 0
	}), Se.each({
		margin: "",
		padding: "",
		border: "Width"
	}, function(e, t) {
		Se.cssHooks[e + t] = {
			expand: function(n) {
				for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++) i[e + tt[r] + t] = o[r] || o[r - 2] || o[0];
				return i
			}
		}, "margin" !== e && (Se.cssHooks[e + t].set = F)
	}), Se.fn.extend({
		css: function(e, t) {
			return Xe(this, function(e, t, n) {
				var r, i, o = {},
					a = 0;
				if (Array.isArray(t)) {
					for (r = mt(e), i = t.length; i > a; a++) o[t[a]] = Se.css(e, t[a], !1, r);
					return o
				}
				return void 0 !== n ? Se.style(e, t, n) : Se.css(e, t)
			}, e, t, arguments.length > 1)
		}
	}), Se.Tween = _, _.prototype = {
		constructor: _,
		init: function(e, t, n, r, i, o) {
			this.elem = e, this.prop = n, this.easing = i || Se.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (Se.cssNumber[n] ? "" : "px")
		},
		cur: function() {
			var e = _.propHooks[this.prop];
			return e && e.get ? e.get(this) : _.propHooks._default.get(this)
		},
		run: function(e) {
			var t, n = _.propHooks[this.prop];
			return this.options.duration ? this.pos = t = Se.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : _.propHooks._default.set(this), this
		}
	}, _.prototype.init.prototype = _.prototype, _.propHooks = {
		_default: {
			get: function(e) {
				var t;
				return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = Se.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0)
			},
			set: function(e) {
				Se.fx.step[e.prop] ? Se.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !Se.cssHooks[e.prop] && null == e.elem.style[W(e.prop)] ? e.elem[e.prop] = e.now : Se.style(e.elem, e.prop, e.now + e.unit)
			}
		}
	}, _.propHooks.scrollTop = _.propHooks.scrollLeft = {
		set: function(e) {
			e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
		}
	}, Se.easing = {
		linear: function(e) {
			return e
		},
		swing: function(e) {
			return .5 - Math.cos(e * Math.PI) / 2
		},
		_default: "swing"
	}, Se.fx = _.prototype.init, Se.fx.step = {};
	var jt, At, Dt = /^(?:toggle|show|hide)$/,
		Nt = /queueHooks$/;
	Se.Animation = Se.extend(Q, {
			tweeners: {
				"*": [function(e, t) {
					var n = this.createTween(e, t);
					return x(n.elem, e, et.exec(t), n), n
				}]
			},
			tweener: function(e, t) {
				me(e) ? (t = e, e = ["*"]) : e = e.match(Be);
				for (var n, r = 0, i = e.length; i > r; r++) n = e[r], Q.tweeners[n] = Q.tweeners[n] || [], Q.tweeners[n].unshift(t)
			},
			prefilters: [G],
			prefilter: function(e, t) {
				t ? Q.prefilters.unshift(e) : Q.prefilters.push(e)
			}
		}), Se.speed = function(e, t, n) {
			var r = e && "object" == typeof e ? Se.extend({}, e) : {
				complete: n || !n && t || me(e) && e,
				duration: e,
				easing: n && t || t && !me(t) && t
			};
			return Se.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in Se.fx.speeds ? r.duration = Se.fx.speeds[r.duration] : r.duration = Se.fx.speeds._default), null != r.queue && r.queue !== !0 || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
				me(r.old) && r.old.call(this), r.queue && Se.dequeue(this, r.queue)
			}, r
		}, Se.fn.extend({
			fadeTo: function(e, t, n, r) {
				return this.filter(ot).css("opacity", 0).show().end().animate({
					opacity: t
				}, e, n, r)
			},
			animate: function(e, t, n, r) {
				var i = Se.isEmptyObject(e),
					o = Se.speed(t, n, r),
					a = function() {
						var t = Q(this, Se.extend({}, e), o);
						(i || Ye.get(this, "finish")) && t.stop(!0)
					};
				return a.finish = a, i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
			},
			stop: function(e, t, n) {
				var r = function(e) {
					var t = e.stop;
					delete e.stop, t(n)
				};
				return "string" != typeof e && (n = t, t = e, e = void 0), t && this.queue(e || "fx", []), this.each(function() {
					var t = !0,
						i = null != e && e + "queueHooks",
						o = Se.timers,
						a = Ye.get(this);
					if (i) a[i] && a[i].stop && r(a[i]);
					else
						for (i in a) a[i] && a[i].stop && Nt.test(i) && r(a[i]);
					for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
					!t && n || Se.dequeue(this, e)
				})
			},
			finish: function(e) {
				return e !== !1 && (e = e || "fx"), this.each(function() {
					var t, n = Ye.get(this),
						r = n[e + "queue"],
						i = n[e + "queueHooks"],
						o = Se.timers,
						a = r ? r.length : 0;
					for (n.finish = !0, Se.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
					for (t = 0; a > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
					delete n.finish
				})
			}
		}), Se.each(["toggle", "show", "hide"], function(e, t) {
			var n = Se.fn[t];
			Se.fn[t] = function(e, r, i) {
				return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(U(t, !0), e, r, i)
			}
		}), Se.each({
			slideDown: U("show"),
			slideUp: U("hide"),
			slideToggle: U("toggle"),
			fadeIn: {
				opacity: "show"
			},
			fadeOut: {
				opacity: "hide"
			},
			fadeToggle: {
				opacity: "toggle"
			}
		}, function(e, t) {
			Se.fn[e] = function(e, n, r) {
				return this.animate(t, e, n, r)
			}
		}), Se.timers = [], Se.fx.tick = function() {
			var e, t = 0,
				n = Se.timers;
			for (jt = Date.now(); t < n.length; t++) e = n[t], e() || n[t] !== e || n.splice(t--, 1);
			n.length || Se.fx.stop(), jt = void 0
		}, Se.fx.timer = function(e) {
			Se.timers.push(e), Se.fx.start()
		}, Se.fx.interval = 13, Se.fx.start = function() {
			At || (At = !0, z())
		}, Se.fx.stop = function() {
			At = null
		}, Se.fx.speeds = {
			slow: 600,
			fast: 200,
			_default: 400
		}, Se.fn.delay = function(t, n) {
			return t = Se.fx ? Se.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function(n, r) {
				var i = e.setTimeout(n, t);
				r.stop = function() {
					e.clearTimeout(i)
				}
			})
		},
		function() {
			var e = be.createElement("input"),
				t = be.createElement("select"),
				n = t.appendChild(be.createElement("option"));
			e.type = "checkbox", ye.checkOn = "" !== e.value, ye.optSelected = n.selected, e = be.createElement("input"), e.value = "t", e.type = "radio", ye.radioValue = "t" === e.value
		}();
	var qt, Lt = Se.expr.attrHandle;
	Se.fn.extend({
		attr: function(e, t) {
			return Xe(this, Se.attr, e, t, arguments.length > 1)
		},
		removeAttr: function(e) {
			return this.each(function() {
				Se.removeAttr(this, e)
			})
		}
	}), Se.extend({
		attr: function(e, t, n) {
			var r, i, o = e.nodeType;
			if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? Se.prop(e, t, n) : (1 === o && Se.isXMLDoc(e) || (i = Se.attrHooks[t.toLowerCase()] || (Se.expr.match.bool.test(t) ? qt : void 0)), void 0 !== n ? null === n ? void Se.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : (r = Se.find.attr(e, t), null == r ? void 0 : r))
		},
		attrHooks: {
			type: {
				set: function(e, t) {
					if (!ye.radioValue && "radio" === t && o(e, "input")) {
						var n = e.value;
						return e.setAttribute("type", t), n && (e.value = n), t
					}
				}
			}
		},
		removeAttr: function(e, t) {
			var n, r = 0,
				i = t && t.match(Be);
			if (i && 1 === e.nodeType)
				for (; n = i[r++];) e.removeAttribute(n)
		}
	}), qt = {
		set: function(e, t, n) {
			return t === !1 ? Se.removeAttr(e, n) : e.setAttribute(n, n), n
		}
	}, Se.each(Se.expr.match.bool.source.match(/\w+/g), function(e, t) {
		var n = Lt[t] || Se.find.attr;
		Lt[t] = function(e, t, r) {
			var i, o, a = t.toLowerCase();
			return r || (o = Lt[a], Lt[a] = i, i = null != n(e, t, r) ? a : null, Lt[a] = o), i
		}
	});
	var Ht = /^(?:input|select|textarea|button)$/i,
		Ot = /^(?:a|area)$/i;
	Se.fn.extend({
		prop: function(e, t) {
			return Xe(this, Se.prop, e, t, arguments.length > 1)
		},
		removeProp: function(e) {
			return this.each(function() {
				delete this[Se.propFix[e] || e]
			})
		}
	}), Se.extend({
		prop: function(e, t, n) {
			var r, i, o = e.nodeType;
			if (3 !== o && 8 !== o && 2 !== o) return 1 === o && Se.isXMLDoc(e) || (t = Se.propFix[t] || t, i = Se.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
		},
		propHooks: {
			tabIndex: {
				get: function(e) {
					var t = Se.find.attr(e, "tabindex");
					return t ? parseInt(t, 10) : Ht.test(e.nodeName) || Ot.test(e.nodeName) && e.href ? 0 : -1
				}
			}
		},
		propFix: {
			"for": "htmlFor",
			"class": "className"
		}
	}), ye.optSelected || (Se.propHooks.selected = {
		get: function(e) {
			var t = e.parentNode;
			return t && t.parentNode && t.parentNode.selectedIndex, null
		},
		set: function(e) {
			var t = e.parentNode;
			t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
		}
	}), Se.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
		Se.propFix[this.toLowerCase()] = this
	}), Se.fn.extend({
		addClass: function(e) {
			var t, n, r, i, o, a;
			return me(e) ? this.each(function(t) {
				Se(this).addClass(e.call(this, t, K(this)))
			}) : (t = Z(e), t.length ? this.each(function() {
				if (r = K(this), n = 1 === this.nodeType && " " + J(r) + " ") {
					for (o = 0; o < t.length; o++) i = t[o], n.indexOf(" " + i + " ") < 0 && (n += i + " ");
					a = J(n), r !== a && this.setAttribute("class", a)
				}
			}) : this)
		},
		removeClass: function(e) {
			var t, n, r, i, o, a;
			return me(e) ? this.each(function(t) {
				Se(this).removeClass(e.call(this, t, K(this)))
			}) : arguments.length ? (t = Z(e), t.length ? this.each(function() {
				if (r = K(this), n = 1 === this.nodeType && " " + J(r) + " ") {
					for (o = 0; o < t.length; o++)
						for (i = t[o]; n.indexOf(" " + i + " ") > -1;) n = n.replace(" " + i + " ", " ");
					a = J(n), r !== a && this.setAttribute("class", a)
				}
			}) : this) : this.attr("class", "")
		},
		toggleClass: function(e, t) {
			var n, r, i, o, a = typeof e,
				s = "string" === a || Array.isArray(e);
			return me(e) ? this.each(function(n) {
				Se(this).toggleClass(e.call(this, n, K(this), t), t)
			}) : "boolean" == typeof t && s ? t ? this.addClass(e) : this.removeClass(e) : (n = Z(e), this.each(function() {
				if (s)
					for (o = Se(this), i = 0; i < n.length; i++) r = n[i], o.hasClass(r) ? o.removeClass(r) : o.addClass(r);
				else void 0 !== e && "boolean" !== a || (r = K(this), r && Ye.set(this, "__className__", r), this.setAttribute && this.setAttribute("class", r || e === !1 ? "" : Ye.get(this, "__className__") || ""))
			}))
		},
		hasClass: function(e) {
			var t, n, r = 0;
			for (t = " " + e + " "; n = this[r++];)
				if (1 === n.nodeType && (" " + J(K(n)) + " ").indexOf(t) > -1) return !0;
			return !1
		}
	});
	var Pt = /\r/g;
	Se.fn.extend({
		val: function(e) {
			var t, n, r, i = this[0];
			{
				if (arguments.length) return r = me(e), this.each(function(n) {
					var i;
					1 === this.nodeType && (i = r ? e.call(this, n, Se(this).val()) : e, null == i ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = Se.map(i, function(e) {
						return null == e ? "" : e + ""
					})), t = Se.valHooks[this.type] || Se.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
				});
				if (i) return t = Se.valHooks[i.type] || Se.valHooks[i.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : (n = i.value, "string" == typeof n ? n.replace(Pt, "") : null == n ? "" : n)
			}
		}
	}), Se.extend({
		valHooks: {
			option: {
				get: function(e) {
					var t = Se.find.attr(e, "value");
					return null != t ? t : J(Se.text(e))
				}
			},
			select: {
				get: function(e) {
					var t, n, r, i = e.options,
						a = e.selectedIndex,
						s = "select-one" === e.type,
						u = s ? null : [],
						l = s ? a + 1 : i.length;
					for (r = 0 > a ? l : s ? a : 0; l > r; r++)
						if (n = i[r], (n.selected || r === a) && !n.disabled && (!n.parentNode.disabled || !o(n.parentNode, "optgroup"))) {
							if (t = Se(n).val(), s) return t;
							u.push(t)
						} return u
				},
				set: function(e, t) {
					for (var n, r, i = e.options, o = Se.makeArray(t), a = i.length; a--;) r = i[a], (r.selected = Se.inArray(Se.valHooks.option.get(r), o) > -1) && (n = !0);
					return n || (e.selectedIndex = -1), o
				}
			}
		}
	}), Se.each(["radio", "checkbox"], function() {
		Se.valHooks[this] = {
			set: function(e, t) {
				return Array.isArray(t) ? e.checked = Se.inArray(Se(e).val(), t) > -1 : void 0
			}
		}, ye.checkOn || (Se.valHooks[this].get = function(e) {
			return null === e.getAttribute("value") ? "on" : e.value
		})
	});
	var Mt = e.location,
		Rt = {
			guid: Date.now()
		},
		It = /\?/;
	Se.parseXML = function(t) {
		var n, r;
		if (!t || "string" != typeof t) return null;
		try {
			n = (new e.DOMParser).parseFromString(t, "text/xml")
		} catch (i) {}
		return r = n && n.getElementsByTagName("parsererror")[0], n && !r || Se.error("Invalid XML: " + (r ? Se.map(r.childNodes, function(e) {
			return e.textContent
		}).join("\n") : t)), n
	};
	var Wt = /^(?:focusinfocus|focusoutblur)$/,
		Ft = function(e) {
			e.stopPropagation()
		};
	Se.extend(Se.event, {
		trigger: function(t, n, r, i) {
			var o, a, s, u, l, c, f, p, d = [r || be],
				h = he.call(t, "type") ? t.type : t,
				g = he.call(t, "namespace") ? t.namespace.split(".") : [];
			if (a = p = s = r = r || be, 3 !== r.nodeType && 8 !== r.nodeType && !Wt.test(h + Se.event.triggered) && (h.indexOf(".") > -1 && (g = h.split("."), h = g.shift(), g.sort()), l = h.indexOf(":") < 0 && "on" + h, t = t[Se.expando] ? t : new Se.Event(h, "object" == typeof t && t), t.isTrigger = i ? 2 : 3, t.namespace = g.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : Se.makeArray(n, [t]), f = Se.event.special[h] || {}, i || !f.trigger || f.trigger.apply(r, n) !== !1)) {
				if (!i && !f.noBubble && !xe(r)) {
					for (u = f.delegateType || h, Wt.test(u + h) || (a = a.parentNode); a; a = a.parentNode) d.push(a), s = a;
					s === (r.ownerDocument || be) && d.push(s.defaultView || s.parentWindow || e)
				}
				for (o = 0;
					(a = d[o++]) && !t.isPropagationStopped();) p = a, t.type = o > 1 ? u : f.bindType || h, c = (Ye.get(a, "events") || Object.create(null))[t.type] && Ye.get(a, "handle"), c && c.apply(a, n), c = l && a[l], c && c.apply && Ge(a) && (t.result = c.apply(a, n), t.result === !1 && t.preventDefault());
				return t.type = h, i || t.isDefaultPrevented() || f._default && f._default.apply(d.pop(), n) !== !1 || !Ge(r) || l && me(r[h]) && !xe(r) && (s = r[l], s && (r[l] = null), Se.event.triggered = h, t.isPropagationStopped() && p.addEventListener(h, Ft), r[h](), t.isPropagationStopped() && p.removeEventListener(h, Ft), Se.event.triggered = void 0, s && (r[l] = s)), t.result
			}
		},
		simulate: function(e, t, n) {
			var r = Se.extend(new Se.Event, n, {
				type: e,
				isSimulated: !0
			});
			Se.event.trigger(r, null, t)
		}
	}), Se.fn.extend({
		trigger: function(e, t) {
			return this.each(function() {
				Se.event.trigger(e, t, this)
			})
		},
		triggerHandler: function(e, t) {
			var n = this[0];
			return n ? Se.event.trigger(e, t, n, !0) : void 0
		}
	});
	var $t = /\[\]$/,
		Bt = /\r?\n/g,
		_t = /^(?:submit|button|image|reset|file)$/i,
		zt = /^(?:input|select|textarea|keygen)/i;
	Se.param = function(e, t) {
		var n, r = [],
			i = function(e, t) {
				var n = me(t) ? t() : t;
				r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
			};
		if (null == e) return "";
		if (Array.isArray(e) || e.jquery && !Se.isPlainObject(e)) Se.each(e, function() {
			i(this.name, this.value)
		});
		else
			for (n in e) ee(n, e[n], t, i);
		return r.join("&")
	}, Se.fn.extend({
		serialize: function() {
			return Se.param(this.serializeArray())
		},
		serializeArray: function() {
			return this.map(function() {
				var e = Se.prop(this, "elements");
				return e ? Se.makeArray(e) : this
			}).filter(function() {
				var e = this.type;
				return this.name && !Se(this).is(":disabled") && zt.test(this.nodeName) && !_t.test(e) && (this.checked || !st.test(e))
			}).map(function(e, t) {
				var n = Se(this).val();
				return null == n ? null : Array.isArray(n) ? Se.map(n, function(e) {
					return {
						name: t.name,
						value: e.replace(Bt, "\r\n")
					}
				}) : {
					name: t.name,
					value: n.replace(Bt, "\r\n")
				}
			}).get()
		}
	});
	var Xt = /%20/g,
		Ut = /#.*$/,
		Vt = /([?&])_=[^&]*/,
		Gt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
		Yt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		Qt = /^(?:GET|HEAD)$/,
		Jt = /^\/\//,
		Kt = {},
		Zt = {},
		en = "*/".concat("*"),
		tn = be.createElement("a");
	tn.href = Mt.href, Se.extend({
		active: 0,
		lastModified: {},
		etag: {},
		ajaxSettings: {
			url: Mt.href,
			type: "GET",
			isLocal: Yt.test(Mt.protocol),
			global: !0,
			processData: !0,
			async: !0,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			accepts: {
				"*": en,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},
			contents: {
				xml: /\bxml\b/,
				html: /\bhtml/,
				json: /\bjson\b/
			},
			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},
			converters: {
				"* text": String,
				"text html": !0,
				"text json": JSON.parse,
				"text xml": Se.parseXML
			},
			flatOptions: {
				url: !0,
				context: !0
			}
		},
		ajaxSetup: function(e, t) {
			return t ? re(re(e, Se.ajaxSettings), t) : re(Se.ajaxSettings, e)
		},
		ajaxPrefilter: te(Kt),
		ajaxTransport: te(Zt),
		ajax: function(t, n) {
			function r(t, n, r, s) {
				var l, p, d, b, w, T = n;
				c || (c = !0, u && e.clearTimeout(u), i = void 0, a = s || "", C.readyState = t > 0 ? 4 : 0, l = t >= 200 && 300 > t || 304 === t, r && (b = ie(h, C, r)), !l && Se.inArray("script", h.dataTypes) > -1 && Se.inArray("json", h.dataTypes) < 0 && (h.converters["text script"] = function() {}), b = oe(h, b, C, l), l ? (h.ifModified && (w = C.getResponseHeader("Last-Modified"), w && (Se.lastModified[o] = w), w = C.getResponseHeader("etag"), w && (Se.etag[o] = w)), 204 === t || "HEAD" === h.type ? T = "nocontent" : 304 === t ? T = "notmodified" : (T = b.state, p = b.data, d = b.error, l = !d)) : (d = T, !t && T || (T = "error", 0 > t && (t = 0))), C.status = t, C.statusText = (n || T) + "", l ? y.resolveWith(g, [p, T, C]) : y.rejectWith(g, [C, T, d]), C.statusCode(x), x = void 0, f && v.trigger(l ? "ajaxSuccess" : "ajaxError", [C, h, l ? p : d]), m.fireWith(g, [C, T]), f && (v.trigger("ajaxComplete", [C, h]), --Se.active || Se.event.trigger("ajaxStop")))
			}
			"object" == typeof t && (n = t, t = void 0), n = n || {};
			var i, o, a, s, u, l, c, f, p, d, h = Se.ajaxSetup({}, n),
				g = h.context || h,
				v = h.context && (g.nodeType || g.jquery) ? Se(g) : Se.event,
				y = Se.Deferred(),
				m = Se.Callbacks("once memory"),
				x = h.statusCode || {},
				b = {},
				w = {},
				T = "canceled",
				C = {
					readyState: 0,
					getResponseHeader: function(e) {
						var t;
						if (c) {
							if (!s)
								for (s = {}; t = Gt.exec(a);) s[t[1].toLowerCase() + " "] = (s[t[1].toLowerCase() + " "] || []).concat(t[2]);
							t = s[e.toLowerCase() + " "]
						}
						return null == t ? null : t.join(", ")
					},
					getAllResponseHeaders: function() {
						return c ? a : null
					},
					setRequestHeader: function(e, t) {
						return null == c && (e = w[e.toLowerCase()] = w[e.toLowerCase()] || e, b[e] = t), this
					},
					overrideMimeType: function(e) {
						return null == c && (h.mimeType = e), this
					},
					statusCode: function(e) {
						var t;
						if (e)
							if (c) C.always(e[C.status]);
							else
								for (t in e) x[t] = [x[t], e[t]];
						return this
					},
					abort: function(e) {
						var t = e || T;
						return i && i.abort(t), r(0, t), this
					}
				};
			if (y.promise(C), h.url = ((t || h.url || Mt.href) + "").replace(Jt, Mt.protocol + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(Be) || [""], null == h.crossDomain) {
				l = be.createElement("a");
				try {
					l.href = h.url, l.href = l.href, h.crossDomain = tn.protocol + "//" + tn.host != l.protocol + "//" + l.host
				} catch (S) {
					h.crossDomain = !0
				}
			}
			if (h.data && h.processData && "string" != typeof h.data && (h.data = Se.param(h.data, h.traditional)), ne(Kt, h, n, C), c) return C;
			f = Se.event && h.global, f && 0 === Se.active++ && Se.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Qt.test(h.type), o = h.url.replace(Ut, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(Xt, "+")) : (d = h.url.slice(o.length), h.data && (h.processData || "string" == typeof h.data) && (o += (It.test(o) ? "&" : "?") + h.data, delete h.data), h.cache === !1 && (o = o.replace(Vt, "$1"), d = (It.test(o) ? "&" : "?") + "_=" + Rt.guid++ + d), h.url = o + d), h.ifModified && (Se.lastModified[o] && C.setRequestHeader("If-Modified-Since", Se.lastModified[o]), Se.etag[o] && C.setRequestHeader("If-None-Match", Se.etag[o])), (h.data && h.hasContent && h.contentType !== !1 || n.contentType) && C.setRequestHeader("Content-Type", h.contentType), C.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + en + "; q=0.01" : "") : h.accepts["*"]);
			for (p in h.headers) C.setRequestHeader(p, h.headers[p]);
			if (h.beforeSend && (h.beforeSend.call(g, C, h) === !1 || c)) return C.abort();
			if (T = "abort", m.add(h.complete), C.done(h.success), C.fail(h.error), i = ne(Zt, h, n, C)) {
				if (C.readyState = 1, f && v.trigger("ajaxSend", [C, h]), c) return C;
				h.async && h.timeout > 0 && (u = e.setTimeout(function() {
					C.abort("timeout")
				}, h.timeout));
				try {
					c = !1, i.send(b, r)
				} catch (S) {
					if (c) throw S;
					r(-1, S)
				}
			} else r(-1, "No Transport");
			return C
		},
		getJSON: function(e, t, n) {
			return Se.get(e, t, n, "json")
		},
		getScript: function(e, t) {
			return Se.get(e, void 0, t, "script")
		}
	}), Se.each(["get", "post"], function(e, t) {
		Se[t] = function(e, n, r, i) {
			return me(n) && (i = i || r, r = n, n = void 0), Se.ajax(Se.extend({
				url: e,
				type: t,
				dataType: i,
				data: n,
				success: r
			}, Se.isPlainObject(e) && e))
		}
	}), Se.ajaxPrefilter(function(e) {
		var t;
		for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
	}), Se._evalUrl = function(e, t, n) {
		return Se.ajax({
			url: e,
			type: "GET",
			dataType: "script",
			cache: !0,
			async: !1,
			global: !1,
			converters: {
				"text script": function() {}
			},
			dataFilter: function(e) {
				Se.globalEval(e, t, n)
			}
		})
	}, Se.fn.extend({
		wrapAll: function(e) {
			var t;
			return this[0] && (me(e) && (e = e.call(this[0])), t = Se(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
				for (var e = this; e.firstElementChild;) e = e.firstElementChild;
				return e
			}).append(this)), this
		},
		wrapInner: function(e) {
			return me(e) ? this.each(function(t) {
				Se(this).wrapInner(e.call(this, t))
			}) : this.each(function() {
				var t = Se(this),
					n = t.contents();
				n.length ? n.wrapAll(e) : t.append(e)
			})
		},
		wrap: function(e) {
			var t = me(e);
			return this.each(function(n) {
				Se(this).wrapAll(t ? e.call(this, n) : e)
			})
		},
		unwrap: function(e) {
			return this.parent(e).not("body").each(function() {
				Se(this).replaceWith(this.childNodes)
			}), this
		}
	}), Se.expr.pseudos.hidden = function(e) {
		return !Se.expr.pseudos.visible(e)
	}, Se.expr.pseudos.visible = function(e) {
		return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
	}, Se.ajaxSettings.xhr = function() {
		try {
			return new e.XMLHttpRequest
		} catch (t) {}
	};
	var nn = {
			0: 200,
			1223: 204
		},
		rn = Se.ajaxSettings.xhr();
	ye.cors = !!rn && "withCredentials" in rn, ye.ajax = rn = !!rn, Se.ajaxTransport(function(t) {
		var n, r;
		return ye.cors || rn && !t.crossDomain ? {
			send: function(i, o) {
				var a, s = t.xhr();
				if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
					for (a in t.xhrFields) s[a] = t.xhrFields[a];
				t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
				for (a in i) s.setRequestHeader(a, i[a]);
				n = function(e) {
					return function() {
						n && (n = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(nn[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
							binary: s.response
						} : {
							text: s.responseText
						}, s.getAllResponseHeaders()))
					}
				}, s.onload = n(), r = s.onerror = s.ontimeout = n("error"), void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function() {
					4 === s.readyState && e.setTimeout(function() {
						n && r()
					})
				}, n = n("abort");
				try {
					s.send(t.hasContent && t.data || null)
				} catch (u) {
					if (n) throw u
				}
			},
			abort: function() {
				n && n()
			}
		} : void 0
	}), Se.ajaxPrefilter(function(e) {
		e.crossDomain && (e.contents.script = !1)
	}), Se.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /\b(?:java|ecma)script\b/
		},
		converters: {
			"text script": function(e) {
				return Se.globalEval(e), e
			}
		}
	}), Se.ajaxPrefilter("script", function(e) {
		void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
	}), Se.ajaxTransport("script", function(e) {
		if (e.crossDomain || e.scriptAttrs) {
			var t, n;
			return {
				send: function(r, i) {
					t = Se("<script>").attr(e.scriptAttrs || {}).prop({
						charset: e.scriptCharset,
						src: e.url
					}).on("load error", n = function(e) {
						t.remove(), n = null, e && i("error" === e.type ? 404 : 200, e.type)
					}), be.head.appendChild(t[0])
				},
				abort: function() {
					n && n()
				}
			}
		}
	});
	var on = [],
		an = /(=)\?(?=&|$)|\?\?/;
	Se.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function() {
			var e = on.pop() || Se.expando + "_" + Rt.guid++;
			return this[e] = !0, e
		}
	}), Se.ajaxPrefilter("json jsonp", function(t, n, r) {
		var i, o, a, s = t.jsonp !== !1 && (an.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && an.test(t.data) && "data");
		return s || "jsonp" === t.dataTypes[0] ? (i = t.jsonpCallback = me(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(an, "$1" + i) : t.jsonp !== !1 && (t.url += (It.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function() {
			return a || Se.error(i + " was not called"), a[0]
		}, t.dataTypes[0] = "json", o = e[i], e[i] = function() {
			a = arguments
		}, r.always(function() {
			void 0 === o ? Se(e).removeProp(i) : e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, on.push(i)), a && me(o) && o(a[0]), a = o = void 0
		}), "script") : void 0
	}), ye.createHTMLDocument = function() {
		var e = be.implementation.createHTMLDocument("").body;
		return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length
	}(), Se.parseHTML = function(e, t, n) {
		if ("string" != typeof e) return [];
		"boolean" == typeof t && (n = t, t = !1);
		var r, i, o;
		return t || (ye.createHTMLDocument ? (t = be.implementation.createHTMLDocument(""), r = t.createElement("base"), r.href = be.location.href, t.head.appendChild(r)) : t = be), i = Me.exec(e), o = !n && [], i ? [t.createElement(i[1])] : (i = S([e], t, o), o && o.length && Se(o).remove(), Se.merge([], i.childNodes))
	}, Se.fn.load = function(e, t, n) {
		var r, i, o, a = this,
			s = e.indexOf(" ");
		return s > -1 && (r = J(e.slice(s)), e = e.slice(0, s)), me(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), a.length > 0 && Se.ajax({
			url: e,
			type: i || "GET",
			dataType: "html",
			data: t
		}).done(function(e) {
			o = arguments, a.html(r ? Se("<div>").append(Se.parseHTML(e)).find(r) : e)
		}).always(n && function(e, t) {
			a.each(function() {
				n.apply(this, o || [e.responseText, t, e])
			})
		}), this
	}, Se.expr.pseudos.animated = function(e) {
		return Se.grep(Se.timers, function(t) {
			return e === t.elem
		}).length
	}, Se.offset = {
		setOffset: function(e, t, n) {
			var r, i, o, a, s, u, l, c = Se.css(e, "position"),
				f = Se(e),
				p = {};
			"static" === c && (e.style.position = "relative"), s = f.offset(), o = Se.css(e, "top"), u = Se.css(e, "left"), l = ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1, l ? (r = f.position(), a = r.top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), me(t) && (t = t.call(e, n, Se.extend({}, s))), null != t.top && (p.top = t.top - s.top + a), null != t.left && (p.left = t.left - s.left + i), "using" in t ? t.using.call(e, p) : f.css(p)
		}
	}, Se.fn.extend({
		offset: function(e) {
			if (arguments.length) return void 0 === e ? this : this.each(function(t) {
				Se.offset.setOffset(this, e, t)
			});
			var t, n, r = this[0];
			if (r) return r.getClientRects().length ? (t = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
				top: t.top + n.pageYOffset,
				left: t.left + n.pageXOffset
			}) : {
				top: 0,
				left: 0
			}
		},
		position: function() {
			if (this[0]) {
				var e, t, n, r = this[0],
					i = {
						top: 0,
						left: 0
					};
				if ("fixed" === Se.css(r, "position")) t = r.getBoundingClientRect();
				else {
					for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === Se.css(e, "position");) e = e.parentNode;
					e && e !== r && 1 === e.nodeType && (i = Se(e).offset(), i.top += Se.css(e, "borderTopWidth", !0), i.left += Se.css(e, "borderLeftWidth", !0))
				}
				return {
					top: t.top - i.top - Se.css(r, "marginTop", !0),
					left: t.left - i.left - Se.css(r, "marginLeft", !0)
				}
			}
		},
		offsetParent: function() {
			return this.map(function() {
				for (var e = this.offsetParent; e && "static" === Se.css(e, "position");) e = e.offsetParent;
				return e || nt
			})
		}
	}), Se.each({
		scrollLeft: "pageXOffset",
		scrollTop: "pageYOffset"
	}, function(e, t) {
		var n = "pageYOffset" === t;
		Se.fn[e] = function(r) {
			return Xe(this, function(e, r, i) {
				var o;
				return xe(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === i ? o ? o[t] : e[r] : void(o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i)
			}, e, r, arguments.length)
		}
	}), Se.each(["top", "left"], function(e, t) {
		Se.cssHooks[t] = R(ye.pixelPosition, function(e, n) {
			return n ? (n = M(e, t), vt.test(n) ? Se(e).position()[t] + "px" : n) : void 0
		})
	}), Se.each({
		Height: "height",
		Width: "width"
	}, function(e, t) {
		Se.each({
			padding: "inner" + e,
			content: t,
			"": "outer" + e
		}, function(n, r) {
			Se.fn[r] = function(i, o) {
				var a = arguments.length && (n || "boolean" != typeof i),
					s = n || (i === !0 || o === !0 ? "margin" : "border");
				return Xe(this, function(t, n, i) {
					var o;
					return xe(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? Se.css(t, n, s) : Se.style(t, n, i, s)
				}, t, a ? i : void 0, a)
			}
		})
	}), Se.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
		Se.fn[t] = function(e) {
			return this.on(t, e)
		}
	}), Se.fn.extend({
		bind: function(e, t, n) {
			return this.on(e, null, t, n)
		},
		unbind: function(e, t) {
			return this.off(e, null, t)
		},
		delegate: function(e, t, n, r) {
			return this.on(t, e, n, r)
		},
		undelegate: function(e, t, n) {
			return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
		},
		hover: function(e, t) {
			return this.on("mouseenter", e).on("mouseleave", t || e)
		}
	}), Se.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
		Se.fn[t] = function(e, n) {
			return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
		}
	});
	var sn = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
	Se.proxy = function(e, t) {
		var n, r, i;
		return "string" == typeof t && (n = e[t], t = e, e = n), me(e) ? (r = ue.call(arguments, 2), i = function() {
			return e.apply(t || this, r.concat(ue.call(arguments)))
		}, i.guid = e.guid = e.guid || Se.guid++, i) : void 0
	}, Se.holdReady = function(e) {
		e ? Se.readyWait++ : Se.ready(!0)
	}, Se.isArray = Array.isArray, Se.parseJSON = JSON.parse, Se.nodeName = o, Se.isFunction = me, Se.isWindow = xe, Se.camelCase = g, Se.type = r, Se.now = Date.now, Se.isNumeric = function(e) {
		var t = Se.type(e);
		return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
	}, Se.trim = function(e) {
		return null == e ? "" : (e + "").replace(sn, "$1")
	}, "function" == typeof define && define.amd && define("jquery", [], function() {
		return Se
	});
	var un = e.jQuery,
		ln = e.$;
	return Se.noConflict = function(t) {
		return e.$ === Se && (e.$ = ln), t && e.jQuery === Se && (e.jQuery = un), Se
	}, "undefined" == typeof t && (e.jQuery = e.$ = Se), Se
});
! function(e) {
	var n;
	if ("function" == typeof define && define.amd && (define(e), n = !0), "object" == typeof exports && (module.exports = e(), n = !0), !n) {
		var t = window.Cookies,
			o = window.Cookies = e();
		o.noConflict = function() {
			return window.Cookies = t, o
		}
	}
}(function() {
	function e() {
		for (var e = 0, n = {}; e < arguments.length; e++) {
			var t = arguments[e];
			for (var o in t) n[o] = t[o]
		}
		return n
	}

	function n(e) {
		return e.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent)
	}

	function t(o) {
		function r() {}

		function i(n, t, i) {
			if ("undefined" != typeof document) {
				i = e({
					path: "/"
				}, r.defaults, i), "number" == typeof i.expires && (i.expires = new Date(1 * new Date + 864e5 * i.expires)), i.expires = i.expires ? i.expires.toUTCString() : "";
				try {
					var c = JSON.stringify(t);
					/^[\{\[]/.test(c) && (t = c)
				} catch (f) {}
				t = o.write ? o.write(t, n) : encodeURIComponent(String(t)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), n = encodeURIComponent(String(n)).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[\(\)]/g, escape);
				var u = "";
				for (var a in i) i[a] && (u += "; " + a, i[a] !== !0 && (u += "=" + i[a].split(";")[0]));
				return document.cookie = n + "=" + t + u
			}
		}

		function c(e, t) {
			if ("undefined" != typeof document) {
				for (var r = {}, i = document.cookie ? document.cookie.split("; ") : [], c = 0; c < i.length; c++) {
					var f = i[c].split("="),
						u = f.slice(1).join("=");
					t || '"' !== u.charAt(0) || (u = u.slice(1, -1));
					try {
						var a = n(f[0]);
						if (u = (o.read || o)(u, a) || n(u), t) try {
							u = JSON.parse(u)
						} catch (p) {}
						if (r[a] = u, e === a) break
					} catch (p) {}
				}
				return e ? r[e] : r
			}
		}
		return r.set = i, r.get = function(e) {
			return c(e, !1)
		}, r.getJSON = function(e) {
			return c(e, !0)
		}, r.remove = function(n, t) {
			i(n, "", e(t, {
				expires: -1
			}))
		}, r.defaults = {}, r.withConverter = t, r
	}
	return t(function() {})
});
! function(i) {
	"use strict";
	"function" == typeof define && define.amd ? define(["jquery"], i) : "undefined" != typeof exports ? module.exports = i(require("jquery")) : i(jQuery)
}(function(i) {
	"use strict";
	var e = window.Slick || {};
	e = function() {
		function e(e, o) {
			var s, n = this;
			n.defaults = {
				accessibility: !0,
				adaptiveHeight: !1,
				appendArrows: i(e),
				appendDots: i(e),
				arrows: !0,
				asNavFor: null,
				prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
				nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
				autoplay: !1,
				autoplaySpeed: 3e3,
				centerMode: !1,
				centerPadding: "50px",
				cssEase: "ease",
				customPaging: function(e, t) {
					return i('<button type="button" />').text(t + 1)
				},
				dots: !1,
				dotsClass: "slick-dots",
				draggable: !0,
				easing: "linear",
				edgeFriction: .35,
				fade: !1,
				focusOnSelect: !1,
				focusOnChange: !1,
				infinite: !0,
				initialSlide: 0,
				lazyLoad: "ondemand",
				mobileFirst: !1,
				pauseOnHover: !0,
				pauseOnFocus: !0,
				pauseOnDotsHover: !1,
				respondTo: "window",
				responsive: null,
				rows: 1,
				rtl: !1,
				slide: "",
				slidesPerRow: 1,
				slidesToShow: 1,
				slidesToScroll: 1,
				speed: 500,
				swipe: !0,
				swipeToSlide: !1,
				touchMove: !0,
				touchThreshold: 5,
				useCSS: !0,
				useTransform: !0,
				variableWidth: !1,
				vertical: !1,
				verticalSwiping: !1,
				waitForAnimate: !0,
				zIndex: 1e3
			}, n.initials = {
				animating: !1,
				dragging: !1,
				autoPlayTimer: null,
				currentDirection: 0,
				currentLeft: null,
				currentSlide: 0,
				direction: 1,
				$dots: null,
				listWidth: null,
				listHeight: null,
				loadIndex: 0,
				$nextArrow: null,
				$prevArrow: null,
				scrolling: !1,
				slideCount: null,
				slideWidth: null,
				$slideTrack: null,
				$slides: null,
				sliding: !1,
				slideOffset: 0,
				swipeLeft: null,
				swiping: !1,
				$list: null,
				touchObject: {},
				transformsEnabled: !1,
				unslicked: !1
			}, i.extend(n, n.initials), n.activeBreakpoint = null, n.animType = null, n.animProp = null, n.breakpoints = [], n.breakpointSettings = [], n.cssTransitions = !1, n.focussed = !1, n.interrupted = !1, n.hidden = "hidden", n.paused = !0, n.positionProp = null, n.respondTo = null, n.rowCount = 1, n.shouldClick = !0, n.$slider = i(e), n.$slidesCache = null, n.transformType = null, n.transitionType = null, n.visibilityChange = "visibilitychange", n.windowWidth = 0, n.windowTimer = null, s = i(e).data("slick") || {}, n.options = i.extend({}, n.defaults, o, s), n.currentSlide = n.options.initialSlide, n.originalSettings = n.options, "undefined" != typeof document.mozHidden ? (n.hidden = "mozHidden", n.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.webkitHidden && (n.hidden = "webkitHidden", n.visibilityChange = "webkitvisibilitychange"), n.autoPlay = i.proxy(n.autoPlay, n), n.autoPlayClear = i.proxy(n.autoPlayClear, n), n.autoPlayIterator = i.proxy(n.autoPlayIterator, n), n.changeSlide = i.proxy(n.changeSlide, n), n.clickHandler = i.proxy(n.clickHandler, n), n.selectHandler = i.proxy(n.selectHandler, n), n.setPosition = i.proxy(n.setPosition, n), n.swipeHandler = i.proxy(n.swipeHandler, n), n.dragHandler = i.proxy(n.dragHandler, n), n.keyHandler = i.proxy(n.keyHandler, n), n.instanceUid = t++, n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, n.registerBreakpoints(), n.init(!0)
		}
		var t = 0;
		return e
	}(), e.prototype.activateADA = function() {
		var i = this;
		i.$slideTrack.find(".slick-active").attr({
			"aria-hidden": "false"
		}).find("a, input, button, select").attr({
			tabindex: "0"
		})
	}, e.prototype.addSlide = e.prototype.slickAdd = function(e, t, o) {
		var s = this;
		if ("boolean" == typeof t) o = t, t = null;
		else if (0 > t || t >= s.slideCount) return !1;
		s.unload(), "number" == typeof t ? 0 === t && 0 === s.$slides.length ? i(e).appendTo(s.$slideTrack) : o ? i(e).insertBefore(s.$slides.eq(t)) : i(e).insertAfter(s.$slides.eq(t)) : o === !0 ? i(e).prependTo(s.$slideTrack) : i(e).appendTo(s.$slideTrack), s.$slides = s.$slideTrack.children(this.options.slide), s.$slideTrack.children(this.options.slide).detach(), s.$slideTrack.append(s.$slides), s.$slides.each(function(e, t) {
			i(t).attr("data-slick-index", e)
		}), s.$slidesCache = s.$slides, s.reinit()
	}, e.prototype.animateHeight = function() {
		var i = this;
		if (1 === i.options.slidesToShow && i.options.adaptiveHeight === !0 && i.options.vertical === !1) {
			var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
			i.$list.animate({
				height: e
			}, i.options.speed)
		}
	}, e.prototype.animateSlide = function(e, t) {
		var o = {},
			s = this;
		s.animateHeight(), s.options.rtl === !0 && s.options.vertical === !1 && (e = -e), s.transformsEnabled === !1 ? s.options.vertical === !1 ? s.$slideTrack.animate({
			left: e
		}, s.options.speed, s.options.easing, t) : s.$slideTrack.animate({
			top: e
		}, s.options.speed, s.options.easing, t) : s.cssTransitions === !1 ? (s.options.rtl === !0 && (s.currentLeft = -s.currentLeft), i({
			animStart: s.currentLeft
		}).animate({
			animStart: e
		}, {
			duration: s.options.speed,
			easing: s.options.easing,
			step: function(i) {
				i = Math.ceil(i), s.options.vertical === !1 ? (o[s.animType] = "translate(" + i + "px, 0px)", s.$slideTrack.css(o)) : (o[s.animType] = "translate(0px," + i + "px)", s.$slideTrack.css(o))
			},
			complete: function() {
				t && t.call()
			}
		})) : (s.applyTransition(), e = Math.ceil(e), s.options.vertical === !1 ? o[s.animType] = "translate3d(" + e + "px, 0px, 0px)" : o[s.animType] = "translate3d(0px," + e + "px, 0px)", s.$slideTrack.css(o), t && setTimeout(function() {
			s.disableTransition(), t.call()
		}, s.options.speed))
	}, e.prototype.getNavTarget = function() {
		var e = this,
			t = e.options.asNavFor;
		return t && null !== t && (t = i(t).not(e.$slider)), t
	}, e.prototype.asNavFor = function(e) {
		var t = this,
			o = t.getNavTarget();
		null !== o && "object" == typeof o && o.each(function() {
			var t = i(this).slick("getSlick");
			t.unslicked || t.slideHandler(e, !0)
		})
	}, e.prototype.applyTransition = function(i) {
		var e = this,
			t = {};
		e.options.fade === !1 ? t[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : t[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase, e.options.fade === !1 ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t)
	}, e.prototype.autoPlay = function() {
		var i = this;
		i.autoPlayClear(), i.slideCount > i.options.slidesToShow && (i.autoPlayTimer = setInterval(i.autoPlayIterator, i.options.autoplaySpeed))
	}, e.prototype.autoPlayClear = function() {
		var i = this;
		i.autoPlayTimer && clearInterval(i.autoPlayTimer)
	}, e.prototype.autoPlayIterator = function() {
		var i = this,
			e = i.currentSlide + i.options.slidesToScroll;
		i.paused || i.interrupted || i.focussed || (i.options.infinite === !1 && (1 === i.direction && i.currentSlide + 1 === i.slideCount - 1 ? i.direction = 0 : 0 === i.direction && (e = i.currentSlide - i.options.slidesToScroll, i.currentSlide - 1 === 0 && (i.direction = 1))), i.slideHandler(e))
	}, e.prototype.buildArrows = function() {
		var e = this;
		e.options.arrows === !0 && (e.$prevArrow = i(e.options.prevArrow).addClass("slick-arrow"), e.$nextArrow = i(e.options.nextArrow).addClass("slick-arrow"), e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), e.options.infinite !== !0 && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
			"aria-disabled": "true",
			tabindex: "-1"
		}))
	}, e.prototype.buildDots = function() {
		var e, t, o = this;
		if (o.options.dots === !0 && o.slideCount > o.options.slidesToShow) {
			for (o.$slider.addClass("slick-dotted"), t = i("<ul />").addClass(o.options.dotsClass), e = 0; e <= o.getDotCount(); e += 1) t.append(i("<li />").append(o.options.customPaging.call(this, o, e)));
			o.$dots = t.appendTo(o.options.appendDots), o.$dots.find("li").first().addClass("slick-active")
		}
	}, e.prototype.buildOut = function() {
		var e = this;
		e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), e.slideCount = e.$slides.length, e.$slides.each(function(e, t) {
			i(t).attr("data-slick-index", e).data("originalStyling", i(t).attr("style") || "")
		}), e.$slider.addClass("slick-slider"), e.$slideTrack = 0 === e.slideCount ? i('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(), e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent(), e.$slideTrack.css("opacity", 0), e.options.centerMode !== !0 && e.options.swipeToSlide !== !0 || (e.options.slidesToScroll = 1), i("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"), e.setupInfinite(), e.buildArrows(), e.buildDots(), e.updateDots(), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.options.draggable === !0 && e.$list.addClass("draggable")
	}, e.prototype.buildRows = function() {
		var i, e, t, o, s, n, r, l = this;
		if (o = document.createDocumentFragment(), n = l.$slider.children(), l.options.rows > 0) {
			for (r = l.options.slidesPerRow * l.options.rows, s = Math.ceil(n.length / r), i = 0; s > i; i++) {
				var d = document.createElement("div");
				for (e = 0; e < l.options.rows; e++) {
					var a = document.createElement("div");
					for (t = 0; t < l.options.slidesPerRow; t++) {
						var c = i * r + (e * l.options.slidesPerRow + t);
						n.get(c) && a.appendChild(n.get(c))
					}
					d.appendChild(a)
				}
				o.appendChild(d)
			}
			l.$slider.empty().append(o), l.$slider.children().children().children().css({
				width: 100 / l.options.slidesPerRow + "%",
				display: "inline-block"
			})
		}
	}, e.prototype.checkResponsive = function(e, t) {
		var o, s, n, r = this,
			l = !1,
			d = r.$slider.width(),
			a = window.innerWidth || i(window).width();
		if ("window" === r.respondTo ? n = a : "slider" === r.respondTo ? n = d : "min" === r.respondTo && (n = Math.min(a, d)), r.options.responsive && r.options.responsive.length && null !== r.options.responsive) {
			s = null;
			for (o in r.breakpoints) r.breakpoints.hasOwnProperty(o) && (r.originalSettings.mobileFirst === !1 ? n < r.breakpoints[o] && (s = r.breakpoints[o]) : n > r.breakpoints[o] && (s = r.breakpoints[o]));
			null !== s ? null !== r.activeBreakpoint ? (s !== r.activeBreakpoint || t) && (r.activeBreakpoint = s, "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s]), e === !0 && (r.currentSlide = r.options.initialSlide), r.refresh(e)), l = s) : (r.activeBreakpoint = s, "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s]), e === !0 && (r.currentSlide = r.options.initialSlide), r.refresh(e)), l = s) : null !== r.activeBreakpoint && (r.activeBreakpoint = null, r.options = r.originalSettings, e === !0 && (r.currentSlide = r.options.initialSlide), r.refresh(e), l = s), e || l === !1 || r.$slider.trigger("breakpoint", [r, l])
		}
	}, e.prototype.changeSlide = function(e, t) {
		var o, s, n, r = this,
			l = i(e.currentTarget);
		switch (l.is("a") && e.preventDefault(), l.is("li") || (l = l.closest("li")), n = r.slideCount % r.options.slidesToScroll !== 0, o = n ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll, e.data.message) {
			case "previous":
				s = 0 === o ? r.options.slidesToScroll : r.options.slidesToShow - o, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - s, !1, t);
				break;
			case "next":
				s = 0 === o ? r.options.slidesToScroll : o, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + s, !1, t);
				break;
			case "index":
				var d = 0 === e.data.index ? 0 : e.data.index || l.index() * r.options.slidesToScroll;
				r.slideHandler(r.checkNavigable(d), !1, t), l.children().trigger("focus");
				break;
			default:
				return
		}
	}, e.prototype.checkNavigable = function(i) {
		var e, t, o = this;
		if (e = o.getNavigableIndexes(), t = 0, i > e[e.length - 1]) i = e[e.length - 1];
		else
			for (var s in e) {
				if (i < e[s]) {
					i = t;
					break
				}
				t = e[s]
			}
		return i
	}, e.prototype.cleanUpEvents = function() {
		var e = this;
		e.options.dots && null !== e.$dots && (i("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", i.proxy(e.interrupt, e, !0)).off("mouseleave.slick", i.proxy(e.interrupt, e, !1)), e.options.accessibility === !0 && e.$dots.off("keydown.slick", e.keyHandler)), e.$slider.off("focus.slick blur.slick"), e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide), e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide), e.options.accessibility === !0 && (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler), e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))), e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler), e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler), e.$list.off("touchend.slick mouseup.slick", e.swipeHandler), e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler), e.$list.off("click.slick", e.clickHandler), i(document).off(e.visibilityChange, e.visibility), e.cleanUpSlideEvents(), e.options.accessibility === !0 && e.$list.off("keydown.slick", e.keyHandler), e.options.focusOnSelect === !0 && i(e.$slideTrack).children().off("click.slick", e.selectHandler), i(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange), i(window).off("resize.slick.slick-" + e.instanceUid, e.resize), i("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault), i(window).off("load.slick.slick-" + e.instanceUid, e.setPosition)
	}, e.prototype.cleanUpSlideEvents = function() {
		var e = this;
		e.$list.off("mouseenter.slick", i.proxy(e.interrupt, e, !0)), e.$list.off("mouseleave.slick", i.proxy(e.interrupt, e, !1))
	}, e.prototype.cleanUpRows = function() {
		var i, e = this;
		e.options.rows > 0 && (i = e.$slides.children().children(), i.removeAttr("style"), e.$slider.empty().append(i))
	}, e.prototype.clickHandler = function(i) {
		var e = this;
		e.shouldClick === !1 && (i.stopImmediatePropagation(), i.stopPropagation(), i.preventDefault())
	}, e.prototype.destroy = function(e) {
		var t = this;
		t.autoPlayClear(), t.touchObject = {}, t.cleanUpEvents(), i(".slick-cloned", t.$slider).detach(), t.$dots && t.$dots.remove(), t.$prevArrow && t.$prevArrow.length && (t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()), t.$nextArrow && t.$nextArrow.length && (t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()), t.$slides && (t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
			i(this).attr("style", i(this).data("originalStyling"))
		}), t.$slideTrack.children(this.options.slide).detach(), t.$slideTrack.detach(), t.$list.detach(), t.$slider.append(t.$slides)), t.cleanUpRows(), t.$slider.removeClass("slick-slider"), t.$slider.removeClass("slick-initialized"), t.$slider.removeClass("slick-dotted"), t.unslicked = !0, e || t.$slider.trigger("destroy", [t])
	}, e.prototype.disableTransition = function(i) {
		var e = this,
			t = {};
		t[e.transitionType] = "", e.options.fade === !1 ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t)
	}, e.prototype.fadeSlide = function(i, e) {
		var t = this;
		t.cssTransitions === !1 ? (t.$slides.eq(i).css({
			zIndex: t.options.zIndex
		}), t.$slides.eq(i).animate({
			opacity: 1
		}, t.options.speed, t.options.easing, e)) : (t.applyTransition(i), t.$slides.eq(i).css({
			opacity: 1,
			zIndex: t.options.zIndex
		}), e && setTimeout(function() {
			t.disableTransition(i), e.call()
		}, t.options.speed))
	}, e.prototype.fadeSlideOut = function(i) {
		var e = this;
		e.cssTransitions === !1 ? e.$slides.eq(i).animate({
			opacity: 0,
			zIndex: e.options.zIndex - 2
		}, e.options.speed, e.options.easing) : (e.applyTransition(i), e.$slides.eq(i).css({
			opacity: 0,
			zIndex: e.options.zIndex - 2
		}))
	}, e.prototype.filterSlides = e.prototype.slickFilter = function(i) {
		var e = this;
		null !== i && (e.$slidesCache = e.$slides, e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.filter(i).appendTo(e.$slideTrack), e.reinit())
	}, e.prototype.focusHandler = function() {
		var e = this;
		e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function(t) {
			t.stopImmediatePropagation();
			var o = i(this);
			setTimeout(function() {
				e.options.pauseOnFocus && (e.focussed = o.is(":focus"), e.autoPlay())
			}, 0)
		})
	}, e.prototype.getCurrent = e.prototype.slickCurrentSlide = function() {
		var i = this;
		return i.currentSlide
	}, e.prototype.getDotCount = function() {
		var i = this,
			e = 0,
			t = 0,
			o = 0;
		if (i.options.infinite === !0)
			if (i.slideCount <= i.options.slidesToShow) ++o;
			else
				for (; e < i.slideCount;) ++o, e = t + i.options.slidesToScroll, t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;
		else if (i.options.centerMode === !0) o = i.slideCount;
		else if (i.options.asNavFor)
			for (; e < i.slideCount;) ++o, e = t + i.options.slidesToScroll, t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;
		else o = 1 + Math.ceil((i.slideCount - i.options.slidesToShow) / i.options.slidesToScroll);
		return o - 1
	}, e.prototype.getLeft = function(i) {
		var e, t, o, s, n = this,
			r = 0;
		return n.slideOffset = 0, t = n.$slides.first().outerHeight(!0), n.options.infinite === !0 ? (n.slideCount > n.options.slidesToShow && (n.slideOffset = n.slideWidth * n.options.slidesToShow * -1, s = -1, n.options.vertical === !0 && n.options.centerMode === !0 && (2 === n.options.slidesToShow ? s = -1.5 : 1 === n.options.slidesToShow && (s = -2)), r = t * n.options.slidesToShow * s), n.slideCount % n.options.slidesToScroll !== 0 && i + n.options.slidesToScroll > n.slideCount && n.slideCount > n.options.slidesToShow && (i > n.slideCount ? (n.slideOffset = (n.options.slidesToShow - (i - n.slideCount)) * n.slideWidth * -1, r = (n.options.slidesToShow - (i - n.slideCount)) * t * -1) : (n.slideOffset = n.slideCount % n.options.slidesToScroll * n.slideWidth * -1, r = n.slideCount % n.options.slidesToScroll * t * -1))) : i + n.options.slidesToShow > n.slideCount && (n.slideOffset = (i + n.options.slidesToShow - n.slideCount) * n.slideWidth, r = (i + n.options.slidesToShow - n.slideCount) * t), n.slideCount <= n.options.slidesToShow && (n.slideOffset = 0, r = 0), n.options.centerMode === !0 && n.slideCount <= n.options.slidesToShow ? n.slideOffset = n.slideWidth * Math.floor(n.options.slidesToShow) / 2 - n.slideWidth * n.slideCount / 2 : n.options.centerMode === !0 && n.options.infinite === !0 ? n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2) - n.slideWidth : n.options.centerMode === !0 && (n.slideOffset = 0, n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2)), e = n.options.vertical === !1 ? i * n.slideWidth * -1 + n.slideOffset : i * t * -1 + r, n.options.variableWidth === !0 && (o = n.slideCount <= n.options.slidesToShow || n.options.infinite === !1 ? n.$slideTrack.children(".slick-slide").eq(i) : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow), e = n.options.rtl === !0 ? o[0] ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, n.options.centerMode === !0 && (o = n.slideCount <= n.options.slidesToShow || n.options.infinite === !1 ? n.$slideTrack.children(".slick-slide").eq(i) : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow + 1), e = n.options.rtl === !0 ? o[0] ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, e += (n.$list.width() - o.outerWidth()) / 2)), e
	}, e.prototype.getOption = e.prototype.slickGetOption = function(i) {
		var e = this;
		return e.options[i]
	}, e.prototype.getNavigableIndexes = function() {
		var i, e = this,
			t = 0,
			o = 0,
			s = [];
		for (e.options.infinite === !1 ? i = e.slideCount : (t = -1 * e.options.slidesToScroll, o = -1 * e.options.slidesToScroll, i = 2 * e.slideCount); i > t;) s.push(t), t = o + e.options.slidesToScroll, o += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
		return s
	}, e.prototype.getSlick = function() {
		return this
	}, e.prototype.getSlideCount = function() {
		var e, t, o, s = this;
		return o = s.options.centerMode === !0 ? s.slideWidth * Math.floor(s.options.slidesToShow / 2) : 0, s.options.swipeToSlide === !0 ? (s.$slideTrack.find(".slick-slide").each(function(e, n) {
			return n.offsetLeft - o + i(n).outerWidth() / 2 > -1 * s.swipeLeft ? (t = n, !1) : void 0
		}), e = Math.abs(i(t).attr("data-slick-index") - s.currentSlide) || 1) : s.options.slidesToScroll
	}, e.prototype.goTo = e.prototype.slickGoTo = function(i, e) {
		var t = this;
		t.changeSlide({
			data: {
				message: "index",
				index: parseInt(i)
			}
		}, e)
	}, e.prototype.init = function(e) {
		var t = this;
		i(t.$slider).hasClass("slick-initialized") || (i(t.$slider).addClass("slick-initialized"), t.buildRows(), t.buildOut(), t.setProps(), t.startLoad(), t.loadSlider(), t.initializeEvents(), t.updateArrows(), t.updateDots(), t.checkResponsive(!0), t.focusHandler()), e && t.$slider.trigger("init", [t]), t.options.accessibility === !0 && t.initADA(), t.options.autoplay && (t.paused = !1, t.autoPlay())
	}, e.prototype.initADA = function() {
		var e = this,
			t = Math.ceil(e.slideCount / e.options.slidesToShow),
			o = e.getNavigableIndexes().filter(function(i) {
				return i >= 0 && i < e.slideCount
			});
		e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({
			"aria-hidden": "true",
			tabindex: "-1"
		}).find("a, input, button, select").attr({
			tabindex: "-1"
		}), null !== e.$dots && (e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(t) {
			var s = o.indexOf(t);
			if (i(this).attr({
					role: "tabpanel",
					id: "slick-slide" + e.instanceUid + t,
					tabindex: -1
				}), -1 !== s) {
				var n = "slick-slide-control" + e.instanceUid + s;
				i("#" + n).length && i(this).attr({
					"aria-describedby": n
				})
			}
		}), e.$dots.attr("role", "tablist").find("li").each(function(s) {
			var n = o[s];
			i(this).attr({
				role: "presentation"
			}), i(this).find("button").first().attr({
				role: "tab",
				id: "slick-slide-control" + e.instanceUid + s,
				"aria-controls": "slick-slide" + e.instanceUid + n,
				"aria-label": s + 1 + " of " + t,
				"aria-selected": null,
				tabindex: "-1"
			})
		}).eq(e.currentSlide).find("button").attr({
			"aria-selected": "true",
			tabindex: "0"
		}).end());
		for (var s = e.currentSlide, n = s + e.options.slidesToShow; n > s; s++) e.options.focusOnChange ? e.$slides.eq(s).attr({
			tabindex: "0"
		}) : e.$slides.eq(s).removeAttr("tabindex");
		e.activateADA()
	}, e.prototype.initArrowEvents = function() {
		var i = this;
		i.options.arrows === !0 && i.slideCount > i.options.slidesToShow && (i.$prevArrow.off("click.slick").on("click.slick", {
			message: "previous"
		}, i.changeSlide), i.$nextArrow.off("click.slick").on("click.slick", {
			message: "next"
		}, i.changeSlide), i.options.accessibility === !0 && (i.$prevArrow.on("keydown.slick", i.keyHandler), i.$nextArrow.on("keydown.slick", i.keyHandler)))
	}, e.prototype.initDotEvents = function() {
		var e = this;
		e.options.dots === !0 && e.slideCount > e.options.slidesToShow && (i("li", e.$dots).on("click.slick", {
			message: "index"
		}, e.changeSlide), e.options.accessibility === !0 && e.$dots.on("keydown.slick", e.keyHandler)), e.options.dots === !0 && e.options.pauseOnDotsHover === !0 && e.slideCount > e.options.slidesToShow && i("li", e.$dots).on("mouseenter.slick", i.proxy(e.interrupt, e, !0)).on("mouseleave.slick", i.proxy(e.interrupt, e, !1))
	}, e.prototype.initSlideEvents = function() {
		var e = this;
		e.options.pauseOnHover && (e.$list.on("mouseenter.slick", i.proxy(e.interrupt, e, !0)), e.$list.on("mouseleave.slick", i.proxy(e.interrupt, e, !1)))
	}, e.prototype.initializeEvents = function() {
		var e = this;
		e.initArrowEvents(), e.initDotEvents(), e.initSlideEvents(), e.$list.on("touchstart.slick mousedown.slick", {
			action: "start"
		}, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick", {
			action: "move"
		}, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick", {
			action: "end"
		}, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick", {
			action: "end"
		}, e.swipeHandler), e.$list.on("click.slick", e.clickHandler), i(document).on(e.visibilityChange, i.proxy(e.visibility, e)), e.options.accessibility === !0 && e.$list.on("keydown.slick", e.keyHandler), e.options.focusOnSelect === !0 && i(e.$slideTrack).children().on("click.slick", e.selectHandler), i(window).on("orientationchange.slick.slick-" + e.instanceUid, i.proxy(e.orientationChange, e)), i(window).on("resize.slick.slick-" + e.instanceUid, i.proxy(e.resize, e)), i("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault), i(window).on("load.slick.slick-" + e.instanceUid, e.setPosition), i(e.setPosition)
	}, e.prototype.initUI = function() {
		var i = this;
		i.options.arrows === !0 && i.slideCount > i.options.slidesToShow && (i.$prevArrow.show(), i.$nextArrow.show()), i.options.dots === !0 && i.slideCount > i.options.slidesToShow && i.$dots.show()
	}, e.prototype.keyHandler = function(i) {
		var e = this;
		i.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === i.keyCode && e.options.accessibility === !0 ? e.changeSlide({
			data: {
				message: e.options.rtl === !0 ? "next" : "previous"
			}
		}) : 39 === i.keyCode && e.options.accessibility === !0 && e.changeSlide({
			data: {
				message: e.options.rtl === !0 ? "previous" : "next"
			}
		}))
	}, e.prototype.lazyLoad = function() {
		function e(e) {
			i("img[data-lazy]", e).each(function() {
				var e = i(this),
					t = i(this).attr("data-lazy"),
					o = i(this).attr("data-srcset"),
					s = i(this).attr("data-sizes") || r.$slider.attr("data-sizes"),
					n = document.createElement("img");
				n.onload = function() {
					e.animate({
						opacity: 0
					}, 100, function() {
						o && (e.attr("srcset", o), s && e.attr("sizes", s)), e.attr("src", t).animate({
							opacity: 1
						}, 200, function() {
							e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
						}), r.$slider.trigger("lazyLoaded", [r, e, t])
					})
				}, n.onerror = function() {
					e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), r.$slider.trigger("lazyLoadError", [r, e, t])
				}, n.src = t
			})
		}
		var t, o, s, n, r = this;
		if (r.options.centerMode === !0 ? r.options.infinite === !0 ? (s = r.currentSlide + (r.options.slidesToShow / 2 + 1), n = s + r.options.slidesToShow + 2) : (s = Math.max(0, r.currentSlide - (r.options.slidesToShow / 2 + 1)), n = 2 + (r.options.slidesToShow / 2 + 1) + r.currentSlide) : (s = r.options.infinite ? r.options.slidesToShow + r.currentSlide : r.currentSlide, n = Math.ceil(s + r.options.slidesToShow), r.options.fade === !0 && (s > 0 && s--, n <= r.slideCount && n++)), t = r.$slider.find(".slick-slide").slice(s, n), "anticipated" === r.options.lazyLoad)
			for (var l = s - 1, d = n, a = r.$slider.find(".slick-slide"), c = 0; c < r.options.slidesToScroll; c++) 0 > l && (l = r.slideCount - 1), t = t.add(a.eq(l)), t = t.add(a.eq(d)), l--, d++;
		e(t), r.slideCount <= r.options.slidesToShow ? (o = r.$slider.find(".slick-slide"), e(o)) : r.currentSlide >= r.slideCount - r.options.slidesToShow ? (o = r.$slider.find(".slick-cloned").slice(0, r.options.slidesToShow), e(o)) : 0 === r.currentSlide && (o = r.$slider.find(".slick-cloned").slice(-1 * r.options.slidesToShow), e(o))
	}, e.prototype.loadSlider = function() {
		var i = this;
		i.setPosition(), i.$slideTrack.css({
			opacity: 1
		}), i.$slider.removeClass("slick-loading"), i.initUI(), "progressive" === i.options.lazyLoad && i.progressiveLazyLoad()
	}, e.prototype.next = e.prototype.slickNext = function() {
		var i = this;
		i.changeSlide({
			data: {
				message: "next"
			}
		})
	}, e.prototype.orientationChange = function() {
		var i = this;
		i.checkResponsive(), i.setPosition()
	}, e.prototype.pause = e.prototype.slickPause = function() {
		var i = this;
		i.autoPlayClear(), i.paused = !0
	}, e.prototype.play = e.prototype.slickPlay = function() {
		var i = this;
		i.autoPlay(), i.options.autoplay = !0, i.paused = !1, i.focussed = !1, i.interrupted = !1
	}, e.prototype.postSlide = function(e) {
		var t = this;
		if (!t.unslicked && (t.$slider.trigger("afterChange", [t, e]), t.animating = !1, t.slideCount > t.options.slidesToShow && t.setPosition(), t.swipeLeft = null, t.options.autoplay && t.autoPlay(), t.options.accessibility === !0 && (t.initADA(), t.options.focusOnChange))) {
			var o = i(t.$slides.get(t.currentSlide));
			o.attr("tabindex", 0).focus()
		}
	}, e.prototype.prev = e.prototype.slickPrev = function() {
		var i = this;
		i.changeSlide({
			data: {
				message: "previous"
			}
		})
	}, e.prototype.preventDefault = function(i) {
		i.preventDefault()
	}, e.prototype.progressiveLazyLoad = function(e) {
		e = e || 1;
		var t, o, s, n, r, l = this,
			d = i("img[data-lazy]", l.$slider);
		d.length ? (t = d.first(), o = t.attr("data-lazy"), s = t.attr("data-srcset"), n = t.attr("data-sizes") || l.$slider.attr("data-sizes"), r = document.createElement("img"), r.onload = function() {
			s && (t.attr("srcset", s), n && t.attr("sizes", n)), t.attr("src", o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), l.options.adaptiveHeight === !0 && l.setPosition(), l.$slider.trigger("lazyLoaded", [l, t, o]), l.progressiveLazyLoad()
		}, r.onerror = function() {
			3 > e ? setTimeout(function() {
				l.progressiveLazyLoad(e + 1)
			}, 500) : (t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), l.$slider.trigger("lazyLoadError", [l, t, o]), l.progressiveLazyLoad())
		}, r.src = o) : l.$slider.trigger("allImagesLoaded", [l])
	}, e.prototype.refresh = function(e) {
		var t, o, s = this;
		o = s.slideCount - s.options.slidesToShow, !s.options.infinite && s.currentSlide > o && (s.currentSlide = o), s.slideCount <= s.options.slidesToShow && (s.currentSlide = 0), t = s.currentSlide, s.destroy(!0), i.extend(s, s.initials, {
			currentSlide: t
		}), s.init(), e || s.changeSlide({
			data: {
				message: "index",
				index: t
			}
		}, !1)
	}, e.prototype.registerBreakpoints = function() {
		var e, t, o, s = this,
			n = s.options.responsive || null;
		if ("array" === i.type(n) && n.length) {
			s.respondTo = s.options.respondTo || "window";
			for (e in n)
				if (o = s.breakpoints.length - 1, n.hasOwnProperty(e)) {
					for (t = n[e].breakpoint; o >= 0;) s.breakpoints[o] && s.breakpoints[o] === t && s.breakpoints.splice(o, 1), o--;
					s.breakpoints.push(t), s.breakpointSettings[t] = n[e].settings
				} s.breakpoints.sort(function(i, e) {
				return s.options.mobileFirst ? i - e : e - i
			})
		}
	}, e.prototype.reinit = function() {
		var e = this;
		e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"), e.slideCount = e.$slides.length, e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), e.registerBreakpoints(), e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(), e.initArrowEvents(), e.buildDots(), e.updateDots(), e.initDotEvents(), e.cleanUpSlideEvents(), e.initSlideEvents(), e.checkResponsive(!1, !0), e.options.focusOnSelect === !0 && i(e.$slideTrack).children().on("click.slick", e.selectHandler), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.setPosition(), e.focusHandler(), e.paused = !e.options.autoplay, e.autoPlay(), e.$slider.trigger("reInit", [e])
	}, e.prototype.resize = function() {
		var e = this;
		i(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout(function() {
			e.windowWidth = i(window).width(), e.checkResponsive(), e.unslicked || e.setPosition()
		}, 50))
	}, e.prototype.removeSlide = e.prototype.slickRemove = function(i, e, t) {
		var o = this;
		return "boolean" == typeof i ? (e = i, i = e === !0 ? 0 : o.slideCount - 1) : i = e === !0 ? --i : i, o.slideCount < 1 || 0 > i || i > o.slideCount - 1 ? !1 : (o.unload(), t === !0 ? o.$slideTrack.children().remove() : o.$slideTrack.children(this.options.slide).eq(i).remove(), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slidesCache = o.$slides, void o.reinit())
	}, e.prototype.setCSS = function(i) {
		var e, t, o = this,
			s = {};
		o.options.rtl === !0 && (i = -i), e = "left" == o.positionProp ? Math.ceil(i) + "px" : "0px", t = "top" == o.positionProp ? Math.ceil(i) + "px" : "0px", s[o.positionProp] = i, o.transformsEnabled === !1 ? o.$slideTrack.css(s) : (s = {}, o.cssTransitions === !1 ? (s[o.animType] = "translate(" + e + ", " + t + ")", o.$slideTrack.css(s)) : (s[o.animType] = "translate3d(" + e + ", " + t + ", 0px)", o.$slideTrack.css(s)))
	}, e.prototype.setDimensions = function() {
		var i = this;
		i.options.vertical === !1 ? i.options.centerMode === !0 && i.$list.css({
			padding: "0px " + i.options.centerPadding
		}) : (i.$list.height(i.$slides.first().outerHeight(!0) * i.options.slidesToShow), i.options.centerMode === !0 && i.$list.css({
			padding: i.options.centerPadding + " 0px"
		})), i.listWidth = i.$list.width(), i.listHeight = i.$list.height(), i.options.vertical === !1 && i.options.variableWidth === !1 ? (i.slideWidth = Math.ceil(i.listWidth / i.options.slidesToShow), i.$slideTrack.width(Math.ceil(i.slideWidth * i.$slideTrack.children(".slick-slide").length))) : i.options.variableWidth === !0 ? i.$slideTrack.width(5e3 * i.slideCount) : (i.slideWidth = Math.ceil(i.listWidth), i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0) * i.$slideTrack.children(".slick-slide").length)));
		var e = i.$slides.first().outerWidth(!0) - i.$slides.first().width();
		i.options.variableWidth === !1 && i.$slideTrack.children(".slick-slide").width(i.slideWidth - e)
	}, e.prototype.setFade = function() {
		var e, t = this;
		t.$slides.each(function(o, s) {
			e = t.slideWidth * o * -1, t.options.rtl === !0 ? i(s).css({
				position: "relative",
				right: e,
				top: 0,
				zIndex: t.options.zIndex - 2,
				opacity: 0
			}) : i(s).css({
				position: "relative",
				left: e,
				top: 0,
				zIndex: t.options.zIndex - 2,
				opacity: 0
			})
		}), t.$slides.eq(t.currentSlide).css({
			zIndex: t.options.zIndex - 1,
			opacity: 1
		})
	}, e.prototype.setHeight = function() {
		var i = this;
		if (1 === i.options.slidesToShow && i.options.adaptiveHeight === !0 && i.options.vertical === !1) {
			var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
			i.$list.css("height", e)
		}
	}, e.prototype.setOption = e.prototype.slickSetOption = function() {
		var e, t, o, s, n, r = this,
			l = !1;
		if ("object" === i.type(arguments[0]) ? (o = arguments[0], l = arguments[1], n = "multiple") : "string" === i.type(arguments[0]) && (o = arguments[0], s = arguments[1], l = arguments[2], "responsive" === arguments[0] && "array" === i.type(arguments[1]) ? n = "responsive" : "undefined" != typeof arguments[1] && (n = "single")), "single" === n) r.options[o] = s;
		else if ("multiple" === n) i.each(o, function(i, e) {
			r.options[i] = e
		});
		else if ("responsive" === n)
			for (t in s)
				if ("array" !== i.type(r.options.responsive)) r.options.responsive = [s[t]];
				else {
					for (e = r.options.responsive.length - 1; e >= 0;) r.options.responsive[e].breakpoint === s[t].breakpoint && r.options.responsive.splice(e, 1), e--;
					r.options.responsive.push(s[t])
				} l && (r.unload(), r.reinit())
	}, e.prototype.setPosition = function() {
		var i = this;
		i.setDimensions(), i.setHeight(), i.options.fade === !1 ? i.setCSS(i.getLeft(i.currentSlide)) : i.setFade(), i.$slider.trigger("setPosition", [i])
	}, e.prototype.setProps = function() {
		var i = this,
			e = document.body.style;
		i.positionProp = i.options.vertical === !0 ? "top" : "left", "top" === i.positionProp ? i.$slider.addClass("slick-vertical") : i.$slider.removeClass("slick-vertical"),
			void 0 === e.WebkitTransition && void 0 === e.MozTransition && void 0 === e.msTransition || i.options.useCSS === !0 && (i.cssTransitions = !0), i.options.fade && ("number" == typeof i.options.zIndex ? i.options.zIndex < 3 && (i.options.zIndex = 3) : i.options.zIndex = i.defaults.zIndex), void 0 !== e.OTransform && (i.animType = "OTransform", i.transformType = "-o-transform", i.transitionType = "OTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)), void 0 !== e.MozTransform && (i.animType = "MozTransform", i.transformType = "-moz-transform", i.transitionType = "MozTransition", void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (i.animType = !1)), void 0 !== e.webkitTransform && (i.animType = "webkitTransform", i.transformType = "-webkit-transform", i.transitionType = "webkitTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)), void 0 !== e.msTransform && (i.animType = "msTransform", i.transformType = "-ms-transform", i.transitionType = "msTransition", void 0 === e.msTransform && (i.animType = !1)), void 0 !== e.transform && i.animType !== !1 && (i.animType = "transform", i.transformType = "transform", i.transitionType = "transition"), i.transformsEnabled = i.options.useTransform && null !== i.animType && i.animType !== !1
	}, e.prototype.setSlideClasses = function(i) {
		var e, t, o, s, n = this;
		if (t = n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), n.$slides.eq(i).addClass("slick-current"), n.options.centerMode === !0) {
			var r = n.options.slidesToShow % 2 === 0 ? 1 : 0;
			e = Math.floor(n.options.slidesToShow / 2), n.options.infinite === !0 && (i >= e && i <= n.slideCount - 1 - e ? n.$slides.slice(i - e + r, i + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (o = n.options.slidesToShow + i, t.slice(o - e + 1 + r, o + e + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === i ? t.eq(t.length - 1 - n.options.slidesToShow).addClass("slick-center") : i === n.slideCount - 1 && t.eq(n.options.slidesToShow).addClass("slick-center")), n.$slides.eq(i).addClass("slick-center")
		} else i >= 0 && i <= n.slideCount - n.options.slidesToShow ? n.$slides.slice(i, i + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : t.length <= n.options.slidesToShow ? t.addClass("slick-active").attr("aria-hidden", "false") : (s = n.slideCount % n.options.slidesToShow, o = n.options.infinite === !0 ? n.options.slidesToShow + i : i, n.options.slidesToShow == n.options.slidesToScroll && n.slideCount - i < n.options.slidesToShow ? t.slice(o - (n.options.slidesToShow - s), o + s).addClass("slick-active").attr("aria-hidden", "false") : t.slice(o, o + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
		"ondemand" !== n.options.lazyLoad && "anticipated" !== n.options.lazyLoad || n.lazyLoad()
	}, e.prototype.setupInfinite = function() {
		var e, t, o, s = this;
		if (s.options.fade === !0 && (s.options.centerMode = !1), s.options.infinite === !0 && s.options.fade === !1 && (t = null, s.slideCount > s.options.slidesToShow)) {
			for (o = s.options.centerMode === !0 ? s.options.slidesToShow + 1 : s.options.slidesToShow, e = s.slideCount; e > s.slideCount - o; e -= 1) t = e - 1, i(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t - s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");
			for (e = 0; e < o + s.slideCount; e += 1) t = e, i(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t + s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");
			s.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
				i(this).attr("id", "")
			})
		}
	}, e.prototype.interrupt = function(i) {
		var e = this;
		i || e.autoPlay(), e.interrupted = i
	}, e.prototype.selectHandler = function(e) {
		var t = this,
			o = i(e.target).is(".slick-slide") ? i(e.target) : i(e.target).parents(".slick-slide"),
			s = parseInt(o.attr("data-slick-index"));
		return s || (s = 0), t.slideCount <= t.options.slidesToShow ? void t.slideHandler(s, !1, !0) : void t.slideHandler(s)
	}, e.prototype.slideHandler = function(i, e, t) {
		var o, s, n, r, l, d = null,
			a = this;
		return e = e || !1, a.animating === !0 && a.options.waitForAnimate === !0 || a.options.fade === !0 && a.currentSlide === i ? void 0 : (e === !1 && a.asNavFor(i), o = i, d = a.getLeft(o), r = a.getLeft(a.currentSlide), a.currentLeft = null === a.swipeLeft ? r : a.swipeLeft, a.options.infinite === !1 && a.options.centerMode === !1 && (0 > i || i > a.getDotCount() * a.options.slidesToScroll) ? void(a.options.fade === !1 && (o = a.currentSlide, t !== !0 && a.slideCount > a.options.slidesToShow ? a.animateSlide(r, function() {
			a.postSlide(o)
		}) : a.postSlide(o))) : a.options.infinite === !1 && a.options.centerMode === !0 && (0 > i || i > a.slideCount - a.options.slidesToScroll) ? void(a.options.fade === !1 && (o = a.currentSlide, t !== !0 && a.slideCount > a.options.slidesToShow ? a.animateSlide(r, function() {
			a.postSlide(o)
		}) : a.postSlide(o))) : (a.options.autoplay && clearInterval(a.autoPlayTimer), s = 0 > o ? a.slideCount % a.options.slidesToScroll !== 0 ? a.slideCount - a.slideCount % a.options.slidesToScroll : a.slideCount + o : o >= a.slideCount ? a.slideCount % a.options.slidesToScroll !== 0 ? 0 : o - a.slideCount : o, a.animating = !0, a.$slider.trigger("beforeChange", [a, a.currentSlide, s]), n = a.currentSlide, a.currentSlide = s, a.setSlideClasses(a.currentSlide), a.options.asNavFor && (l = a.getNavTarget(), l = l.slick("getSlick"), l.slideCount <= l.options.slidesToShow && l.setSlideClasses(a.currentSlide)), a.updateDots(), a.updateArrows(), a.options.fade === !0 ? (t !== !0 ? (a.fadeSlideOut(n), a.fadeSlide(s, function() {
			a.postSlide(s)
		})) : a.postSlide(s), void a.animateHeight()) : void(t !== !0 && a.slideCount > a.options.slidesToShow ? a.animateSlide(d, function() {
			a.postSlide(s)
		}) : a.postSlide(s))))
	}, e.prototype.startLoad = function() {
		var i = this;
		i.options.arrows === !0 && i.slideCount > i.options.slidesToShow && (i.$prevArrow.hide(), i.$nextArrow.hide()), i.options.dots === !0 && i.slideCount > i.options.slidesToShow && i.$dots.hide(), i.$slider.addClass("slick-loading")
	}, e.prototype.swipeDirection = function() {
		var i, e, t, o, s = this;
		return i = s.touchObject.startX - s.touchObject.curX, e = s.touchObject.startY - s.touchObject.curY, t = Math.atan2(e, i), o = Math.round(180 * t / Math.PI), 0 > o && (o = 360 - Math.abs(o)), 45 >= o && o >= 0 ? s.options.rtl === !1 ? "left" : "right" : 360 >= o && o >= 315 ? s.options.rtl === !1 ? "left" : "right" : o >= 135 && 225 >= o ? s.options.rtl === !1 ? "right" : "left" : s.options.verticalSwiping === !0 ? o >= 35 && 135 >= o ? "down" : "up" : "vertical"
	}, e.prototype.swipeEnd = function(i) {
		var e, t, o = this;
		if (o.dragging = !1, o.swiping = !1, o.scrolling) return o.scrolling = !1, !1;
		if (o.interrupted = !1, o.shouldClick = !(o.touchObject.swipeLength > 10), void 0 === o.touchObject.curX) return !1;
		if (o.touchObject.edgeHit === !0 && o.$slider.trigger("edge", [o, o.swipeDirection()]), o.touchObject.swipeLength >= o.touchObject.minSwipe) {
			switch (t = o.swipeDirection()) {
				case "left":
				case "down":
					e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide + o.getSlideCount()) : o.currentSlide + o.getSlideCount(), o.currentDirection = 0;
					break;
				case "right":
				case "up":
					e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide - o.getSlideCount()) : o.currentSlide - o.getSlideCount(), o.currentDirection = 1
			}
			"vertical" != t && (o.slideHandler(e), o.touchObject = {}, o.$slider.trigger("swipe", [o, t]))
		} else o.touchObject.startX !== o.touchObject.curX && (o.slideHandler(o.currentSlide), o.touchObject = {})
	}, e.prototype.swipeHandler = function(i) {
		var e = this;
		if (!(e.options.swipe === !1 || "ontouchend" in document && e.options.swipe === !1 || e.options.draggable === !1 && -1 !== i.type.indexOf("mouse"))) switch (e.touchObject.fingerCount = i.originalEvent && void 0 !== i.originalEvent.touches ? i.originalEvent.touches.length : 1, e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold, e.options.verticalSwiping === !0 && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold), i.data.action) {
			case "start":
				e.swipeStart(i);
				break;
			case "move":
				e.swipeMove(i);
				break;
			case "end":
				e.swipeEnd(i)
		}
	}, e.prototype.swipeMove = function(i) {
		var e, t, o, s, n, r, l = this;
		return n = void 0 !== i.originalEvent ? i.originalEvent.touches : null, !l.dragging || l.scrolling || n && 1 !== n.length ? !1 : (e = l.getLeft(l.currentSlide), l.touchObject.curX = void 0 !== n ? n[0].pageX : i.clientX, l.touchObject.curY = void 0 !== n ? n[0].pageY : i.clientY, l.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(l.touchObject.curX - l.touchObject.startX, 2))), r = Math.round(Math.sqrt(Math.pow(l.touchObject.curY - l.touchObject.startY, 2))), !l.options.verticalSwiping && !l.swiping && r > 4 ? (l.scrolling = !0, !1) : (l.options.verticalSwiping === !0 && (l.touchObject.swipeLength = r), t = l.swipeDirection(), void 0 !== i.originalEvent && l.touchObject.swipeLength > 4 && (l.swiping = !0, i.preventDefault()), s = (l.options.rtl === !1 ? 1 : -1) * (l.touchObject.curX > l.touchObject.startX ? 1 : -1), l.options.verticalSwiping === !0 && (s = l.touchObject.curY > l.touchObject.startY ? 1 : -1), o = l.touchObject.swipeLength, l.touchObject.edgeHit = !1, l.options.infinite === !1 && (0 === l.currentSlide && "right" === t || l.currentSlide >= l.getDotCount() && "left" === t) && (o = l.touchObject.swipeLength * l.options.edgeFriction, l.touchObject.edgeHit = !0), l.options.vertical === !1 ? l.swipeLeft = e + o * s : l.swipeLeft = e + o * (l.$list.height() / l.listWidth) * s, l.options.verticalSwiping === !0 && (l.swipeLeft = e + o * s), l.options.fade === !0 || l.options.touchMove === !1 ? !1 : l.animating === !0 ? (l.swipeLeft = null, !1) : void l.setCSS(l.swipeLeft)))
	}, e.prototype.swipeStart = function(i) {
		var e, t = this;
		return t.interrupted = !0, 1 !== t.touchObject.fingerCount || t.slideCount <= t.options.slidesToShow ? (t.touchObject = {}, !1) : (void 0 !== i.originalEvent && void 0 !== i.originalEvent.touches && (e = i.originalEvent.touches[0]), t.touchObject.startX = t.touchObject.curX = void 0 !== e ? e.pageX : i.clientX, t.touchObject.startY = t.touchObject.curY = void 0 !== e ? e.pageY : i.clientY, void(t.dragging = !0))
	}, e.prototype.unfilterSlides = e.prototype.slickUnfilter = function() {
		var i = this;
		null !== i.$slidesCache && (i.unload(), i.$slideTrack.children(this.options.slide).detach(), i.$slidesCache.appendTo(i.$slideTrack), i.reinit())
	}, e.prototype.unload = function() {
		var e = this;
		i(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(), e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(), e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
	}, e.prototype.unslick = function(i) {
		var e = this;
		e.$slider.trigger("unslick", [e, i]), e.destroy()
	}, e.prototype.updateArrows = function() {
		var i, e = this;
		i = Math.floor(e.options.slidesToShow / 2), e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && !e.options.infinite && (e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === e.currentSlide ? (e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - e.options.slidesToShow && e.options.centerMode === !1 ? (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - 1 && e.options.centerMode === !0 && (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
	}, e.prototype.updateDots = function() {
		var i = this;
		null !== i.$dots && (i.$dots.find("li").removeClass("slick-active").end(), i.$dots.find("li").eq(Math.floor(i.currentSlide / i.options.slidesToScroll)).addClass("slick-active"))
	}, e.prototype.visibility = function() {
		var i = this;
		i.options.autoplay && (document[i.hidden] ? i.interrupted = !0 : i.interrupted = !1)
	}, i.fn.slick = function() {
		var i, t, o = this,
			s = arguments[0],
			n = Array.prototype.slice.call(arguments, 1),
			r = o.length;
		for (i = 0; r > i; i++)
			if ("object" == typeof s || "undefined" == typeof s ? o[i].slick = new e(o[i], s) : t = o[i].slick[s].apply(o[i].slick, n), "undefined" != typeof t) return t;
		return o
	}
});
! function(e) {
	"function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function(e) {
	"use strict";

	function o() {
		var e = c.currentScript || function() {
				var e = c.getElementsByTagName("script");
				return e.length ? e[e.length - 1] : !1
			}(),
			o = e ? e.src.split("?")[0] : "";
		return o.split("/").length > 0 ? o.split("/").slice(0, -1).join("/") + "/" : ""
	}

	function t(e, o, t) {
		for (var r = 0, i = o.length; i > r; r++) t(e, o[r])
	}
	var r = !1,
		i = !1,
		s = 0,
		n = 2e3,
		l = 0,
		a = e,
		c = document,
		d = window,
		u = a(d),
		h = [],
		p = d.requestAnimationFrame || d.webkitRequestAnimationFrame || d.mozRequestAnimationFrame || !1,
		m = d.cancelAnimationFrame || d.webkitCancelAnimationFrame || d.mozCancelAnimationFrame || !1;
	if (p) d.cancelAnimationFrame || (m = function(e) {});
	else {
		var f = 0;
		p = function(e, o) {
			var t = (new Date).getTime(),
				r = Math.max(0, 16 - (t - f)),
				i = d.setTimeout(function() {
					e(t + r)
				}, r);
			return f = t + r, i
		}, m = function(e) {
			d.clearTimeout(e)
		}
	}
	var g = d.MutationObserver || d.WebKitMutationObserver || !1,
		v = Date.now || function() {
			return (new Date).getTime()
		},
		w = {
			zindex: "auto",
			cursoropacitymin: 0,
			cursoropacitymax: 1,
			cursorcolor: "#424242",
			cursorwidth: "6px",
			cursorborder: "1px solid #fff",
			cursorborderradius: "5px",
			scrollspeed: 40,
			mousescrollstep: 27,
			touchbehavior: !1,
			emulatetouch: !1,
			hwacceleration: !0,
			usetransition: !0,
			boxzoom: !1,
			dblclickzoom: !0,
			gesturezoom: !0,
			grabcursorenabled: !0,
			autohidemode: !0,
			background: "",
			iframeautoresize: !0,
			cursorminheight: 32,
			preservenativescrolling: !0,
			railoffset: !1,
			railhoffset: !1,
			bouncescroll: !0,
			spacebarenabled: !0,
			railpadding: {
				top: 0,
				right: 0,
				left: 0,
				bottom: 0
			},
			disableoutline: !0,
			horizrailenabled: !0,
			railalign: "right",
			railvalign: "bottom",
			enabletranslate3d: !0,
			enablemousewheel: !0,
			enablekeyboard: !0,
			smoothscroll: !0,
			sensitiverail: !0,
			enablemouselockapi: !0,
			cursorfixedheight: !1,
			directionlockdeadzone: 6,
			hidecursordelay: 400,
			nativeparentscrolling: !0,
			enablescrollonselection: !0,
			overflowx: !0,
			overflowy: !0,
			cursordragspeed: .3,
			rtlmode: "auto",
			cursordragontouch: !1,
			oneaxismousemode: "auto",
			scriptpath: o(),
			preventmultitouchscrolling: !0,
			disablemutationobserver: !1,
			enableobserver: !0,
			scrollbarid: !1
		},
		b = !1,
		y = function() {
			function e() {
				var e = ["grab", "-webkit-grab", "-moz-grab"];
				(s.ischrome && !s.ischrome38 || s.isie) && (e = []);
				for (var o = 0, r = e.length; r > o; o++) {
					var i = e[o];
					if (t.cursor = i, t.cursor == i) return i
				}
				return "url(https://cdnjs.cloudflare.com/ajax/libs/slider-pro/1.3.0/css/images/openhand.cur),n-resize"
			}
			if (b) return b;
			var o = c.createElement("DIV"),
				t = o.style,
				r = navigator.userAgent,
				i = navigator.platform,
				s = {};
			return s.haspointerlock = "pointerLockElement" in c || "webkitPointerLockElement" in c || "mozPointerLockElement" in c, s.isopera = "opera" in d, s.isopera12 = s.isopera && "getUserMedia" in navigator, s.isoperamini = "[object OperaMini]" === Object.prototype.toString.call(d.operamini), s.isie = "all" in c && "attachEvent" in o && !s.isopera, s.isieold = s.isie && !("msInterpolationMode" in t), s.isie7 = s.isie && !s.isieold && (!("documentMode" in c) || 7 === c.documentMode), s.isie8 = s.isie && "documentMode" in c && 8 === c.documentMode, s.isie9 = s.isie && "performance" in d && 9 === c.documentMode, s.isie10 = s.isie && "performance" in d && 10 === c.documentMode, s.isie11 = "msRequestFullscreen" in o && c.documentMode >= 11, s.ismsedge = "msCredentials" in d, s.ismozilla = "MozAppearance" in t, s.iswebkit = !s.ismsedge && "WebkitAppearance" in t, s.ischrome = s.iswebkit && "chrome" in d, s.ischrome38 = s.ischrome && "touchAction" in t, s.ischrome22 = !s.ischrome38 && s.ischrome && s.haspointerlock, s.ischrome26 = !s.ischrome38 && s.ischrome && "transition" in t, s.cantouch = "ontouchstart" in c.documentElement || "ontouchstart" in d, s.hasw3ctouch = (d.PointerEvent || !1) && (navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0), s.hasmstouch = !s.hasw3ctouch && (d.MSPointerEvent || !1), s.ismac = /^mac$/i.test(i), s.isios = s.cantouch && /iphone|ipad|ipod/i.test(i), s.isios4 = s.isios && !("seal" in Object), s.isios7 = s.isios && "webkitHidden" in c, s.isios8 = s.isios && "hidden" in c, s.isios10 = s.isios && d.Proxy, s.isandroid = /android/i.test(r), s.haseventlistener = "addEventListener" in o, s.trstyle = !1, s.hastransform = !1, s.hastranslate3d = !1, s.transitionstyle = !1, s.hastransition = !1, s.transitionend = !1, s.trstyle = "transform", s.hastransform = "transform" in t || function() {
				for (var e = ["msTransform", "webkitTransform", "MozTransform", "OTransform"], o = 0, r = e.length; r > o; o++)
					if (void 0 !== t[e[o]]) {
						s.trstyle = e[o];
						break
					} s.hastransform = !!s.trstyle
			}(), s.hastransform && (t[s.trstyle] = "translate3d(1px,2px,3px)", s.hastranslate3d = /translate3d/.test(t[s.trstyle])), s.transitionstyle = "transition", s.prefixstyle = "", s.transitionend = "transitionend", s.hastransition = "transition" in t || function() {
				s.transitionend = !1;
				for (var e = ["webkitTransition", "msTransition", "MozTransition", "OTransition", "OTransition", "KhtmlTransition"], o = ["-webkit-", "-ms-", "-moz-", "-o-", "-o", "-khtml-"], r = ["webkitTransitionEnd", "msTransitionEnd", "transitionend", "otransitionend", "oTransitionEnd", "KhtmlTransitionEnd"], i = 0, n = e.length; n > i; i++)
					if (e[i] in t) {
						s.transitionstyle = e[i], s.prefixstyle = o[i], s.transitionend = r[i];
						break
					} s.ischrome26 && (s.prefixstyle = o[1]), s.hastransition = s.transitionstyle
			}(), s.cursorgrabvalue = e(), s.hasmousecapture = "setCapture" in o, s.hasMutationObserver = g !== !1, o = null, b = s, s
		},
		x = function(e, o) {
			function t() {
				var e = T.doc.css(P.trstyle);
				return e && "matrix" == e.substr(0, 6) ? e.replace(/^.*\((.*)\)$/g, "$1").replace(/px/g, "").split(/, +/) : !1
			}

			function f() {
				var e = T.win;
				if ("zIndex" in e) return e.zIndex();
				for (; e.length > 0;) {
					if (9 == e[0].nodeType) return !1;
					var o = e.css("zIndex");
					if (!isNaN(o) && 0 !== o) return parseInt(o);
					e = e.parent()
				}
				return !1
			}

			function b(e, o, t) {
				var r = e.css(o),
					i = parseFloat(r);
				if (isNaN(i)) {
					i = I[r] || 0;
					var s = 3 == i ? t ? T.win.outerHeight() - T.win.innerHeight() : T.win.outerWidth() - T.win.innerWidth() : 1;
					return T.isie8 && i && (i += 1), s ? i : 0
				}
				return i
			}

			function x(e, o, t, r) {
				T._bind(e, o, function(r) {
					r = r || d.event;
					var i = {
						original: r,
						target: r.target || r.srcElement,
						type: "wheel",
						deltaMode: "MozMousePixelScroll" == r.type ? 0 : 1,
						deltaX: 0,
						deltaZ: 0,
						preventDefault: function() {
							return r.preventDefault ? r.preventDefault() : r.returnValue = !1, !1
						},
						stopImmediatePropagation: function() {
							r.stopImmediatePropagation ? r.stopImmediatePropagation() : r.cancelBubble = !0
						}
					};
					return "mousewheel" == o ? (r.wheelDeltaX && (i.deltaX = -1 / 40 * r.wheelDeltaX), r.wheelDeltaY && (i.deltaY = -1 / 40 * r.wheelDeltaY), !i.deltaY && !i.deltaX && (i.deltaY = -1 / 40 * r.wheelDelta)) : i.deltaY = r.detail, t.call(e, i)
				}, r)
			}

			function z(e, o, t, r) {
				T.scrollrunning || (T.newscrolly = T.getScrollTop(), T.newscrollx = T.getScrollLeft(), A = v());
				var i = v() - A;
				if (A = v(), i > 350 ? q = 1 : q += (2 - q) / 10, e = e * q | 0, o = o * q | 0, e) {
					if (r)
						if (0 > e) {
							if (T.getScrollLeft() >= T.page.maxw) return !0
						} else if (T.getScrollLeft() <= 0) return !0;
					var s = e > 0 ? 1 : -1;
					D !== s && (T.scrollmom && T.scrollmom.stop(), T.newscrollx = T.getScrollLeft(), D = s), T.lastdeltax -= e
				}
				if (o) {
					var n = function() {
						var e = T.getScrollTop();
						if (0 > o) {
							if (e >= T.page.maxh) return !0
						} else if (0 >= e) return !0
					}();
					if (n) {
						if (M.nativeparentscrolling && t && !T.ispage && !T.zoomactive) return !0;
						var l = T.view.h >> 1;
						T.newscrolly < -l ? (T.newscrolly = -l, o = -1) : T.newscrolly > T.page.maxh + l ? (T.newscrolly = T.page.maxh + l, o = 1) : o = 0
					}
					var a = o > 0 ? 1 : -1;
					X !== a && (T.scrollmom && T.scrollmom.stop(), T.newscrolly = T.getScrollTop(), X = a), T.lastdeltay -= o
				}(o || e) && T.synched("relativexy", function() {
					var e = T.lastdeltay + T.newscrolly;
					T.lastdeltay = 0;
					var o = T.lastdeltax + T.newscrollx;
					T.lastdeltax = 0, T.rail.drag || T.doScrollPos(o, e)
				})
			}

			function k(e, o, t) {
				var r, i;
				if (!t && j) return !0;
				if (0 === e.deltaMode ? (r = 0 | -(e.deltaX * (M.mousescrollstep / 54)), i = 0 | -(e.deltaY * (M.mousescrollstep / 54))) : 1 === e.deltaMode && (r = 0 | -(e.deltaX * M.mousescrollstep * 50 / 80), i = 0 | -(e.deltaY * M.mousescrollstep * 50 / 80)), o && M.oneaxismousemode && 0 === r && i && (r = i, i = 0, t)) {
					var s = 0 > r ? T.getScrollLeft() >= T.page.maxw : T.getScrollLeft() <= 0;
					s && (i = r, r = 0)
				}
				T.isrtlmode && (r = -r);
				var n = z(r, i, t, !0);
				return n ? void(t && (j = !0)) : (j = !1, e.stopImmediatePropagation(), e.preventDefault())
			}
			var T = this;
			this.version = "3.7.6", this.name = "nicescroll", this.me = o;
			var E = a("body"),
				M = this.opt = {
					doc: E,
					win: !1
				};
			if (a.extend(M, w), M.snapbackspeed = 80, e)
				for (var L in M) void 0 !== e[L] && (M[L] = e[L]);
			if (M.disablemutationobserver && (g = !1), this.doc = M.doc, this.iddoc = this.doc && this.doc[0] ? this.doc[0].id || "" : "", this.ispage = /^BODY|HTML/.test(M.win ? M.win[0].nodeName : this.doc[0].nodeName), this.haswrapper = M.win !== !1, this.win = M.win || (this.ispage ? u : this.doc), this.docscroll = this.ispage && !this.haswrapper ? u : this.win, this.body = E, this.viewport = !1, this.isfixed = !1, this.iframe = !1, this.isiframe = "IFRAME" == this.doc[0].nodeName && "IFRAME" == this.win[0].nodeName, this.istextarea = "TEXTAREA" == this.win[0].nodeName, this.forcescreen = !1, this.canshowonmouseevent = "scroll" != M.autohidemode, this.onmousedown = !1, this.onmouseup = !1, this.onmousemove = !1, this.onmousewheel = !1, this.onkeypress = !1, this.ongesturezoom = !1, this.onclick = !1, this.onscrollstart = !1, this.onscrollend = !1, this.onscrollcancel = !1, this.onzoomin = !1, this.onzoomout = !1, this.view = !1, this.page = !1, this.scroll = {
					x: 0,
					y: 0
				}, this.scrollratio = {
					x: 0,
					y: 0
				}, this.cursorheight = 20, this.scrollvaluemax = 0, "auto" == M.rtlmode) {
				var C = this.win[0] == d ? this.body : this.win,
					N = C.css("writing-mode") || C.css("-webkit-writing-mode") || C.css("-ms-writing-mode") || C.css("-moz-writing-mode");
				"horizontal-tb" == N || "lr-tb" == N || "" === N ? (this.isrtlmode = "rtl" == C.css("direction"), this.isvertical = !1) : (this.isrtlmode = "vertical-rl" == N || "tb" == N || "tb-rl" == N || "rl-tb" == N, this.isvertical = "vertical-rl" == N || "tb" == N || "tb-rl" == N)
			} else this.isrtlmode = M.rtlmode === !0, this.isvertical = !1;
			if (this.scrollrunning = !1, this.scrollmom = !1, this.observer = !1, this.observerremover = !1, this.observerbody = !1, M.scrollbarid !== !1) this.id = M.scrollbarid;
			else
				do this.id = "ascrail" + n++; while (c.getElementById(this.id));
			this.rail = !1, this.cursor = !1, this.cursorfreezed = !1, this.selectiondrag = !1, this.zoom = !1, this.zoomactive = !1, this.hasfocus = !1, this.hasmousefocus = !1, this.railslocked = !1, this.locked = !1, this.hidden = !1, this.cursoractive = !0, this.wheelprevented = !1, this.overflowx = M.overflowx, this.overflowy = M.overflowy, this.nativescrollingarea = !1, this.checkarea = 0, this.events = [], this.saved = {}, this.delaylist = {}, this.synclist = {}, this.lastdeltax = 0, this.lastdeltay = 0, this.detected = y();
			var P = a.extend({}, this.detected);
			this.canhwscroll = P.hastransform && M.hwacceleration, this.ishwscroll = this.canhwscroll && T.haswrapper, this.isrtlmode ? this.isvertical ? this.hasreversehr = !(P.iswebkit || P.isie || P.isie11) : this.hasreversehr = !(P.iswebkit || P.isie && !P.isie10 && !P.isie11) : this.hasreversehr = !1, this.istouchcapable = !1, P.cantouch || !P.hasw3ctouch && !P.hasmstouch ? !P.cantouch || P.isios || P.isandroid || !P.iswebkit && !P.ismozilla || (this.istouchcapable = !0) : this.istouchcapable = !0, M.enablemouselockapi || (P.hasmousecapture = !1, P.haspointerlock = !1), this.debounced = function(e, o, t) {
				if (T) {
					var r = T.delaylist[e] || !1;
					r || (T.delaylist[e] = {
						h: p(function() {
							T.delaylist[e].fn.call(T), T.delaylist[e] = !1
						}, t)
					}, o.call(T)), T.delaylist[e].fn = o
				}
			}, this.synched = function(e, o) {
				T.synclist[e] ? T.synclist[e] = o : (T.synclist[e] = o, p(function() {
					T && (T.synclist[e] && T.synclist[e].call(T), T.synclist[e] = null)
				}))
			}, this.unsynched = function(e) {
				T.synclist[e] && (T.synclist[e] = !1)
			}, this.css = function(e, o) {
				for (var t in o) T.saved.css.push([e, t, e.css(t)]), e.css(t, o[t])
			}, this.scrollTop = function(e) {
				return void 0 === e ? T.getScrollTop() : T.setScrollTop(e)
			}, this.scrollLeft = function(e) {
				return void 0 === e ? T.getScrollLeft() : T.setScrollLeft(e)
			};
			var R = function(e, o, t, r, i, s, n) {
				this.st = e, this.ed = o, this.spd = t, this.p1 = r || 0, this.p2 = i || 1, this.p3 = s || 0, this.p4 = n || 1, this.ts = v(), this.df = o - e
			};
			if (R.prototype = {
					B2: function(e) {
						return 3 * (1 - e) * (1 - e) * e
					},
					B3: function(e) {
						return 3 * (1 - e) * e * e
					},
					B4: function(e) {
						return e * e * e
					},
					getPos: function() {
						return (v() - this.ts) / this.spd
					},
					getNow: function() {
						var e = (v() - this.ts) / this.spd,
							o = this.B2(e) + this.B3(e) + this.B4(e);
						return e >= 1 ? this.ed : this.st + this.df * o | 0
					},
					update: function(e, o) {
						return this.st = this.getNow(), this.ed = e, this.spd = o, this.ts = v(), this.df = this.ed - this.st, this
					}
				}, this.ishwscroll) {
				this.doc.translate = {
					x: 0,
					y: 0,
					tx: "0px",
					ty: "0px"
				}, P.hastranslate3d && P.isios && this.doc.css("-webkit-backface-visibility", "hidden"), this.getScrollTop = function(e) {
					if (!e) {
						var o = t();
						if (o) return 16 == o.length ? -o[13] : -o[5];
						if (T.timerscroll && T.timerscroll.bz) return T.timerscroll.bz.getNow()
					}
					return T.doc.translate.y
				}, this.getScrollLeft = function(e) {
					if (!e) {
						var o = t();
						if (o) return 16 == o.length ? -o[12] : -o[4];
						if (T.timerscroll && T.timerscroll.bh) return T.timerscroll.bh.getNow()
					}
					return T.doc.translate.x
				}, this.notifyScrollEvent = function(e) {
					var o = c.createEvent("UIEvents");
					o.initUIEvent("scroll", !1, !1, d, 1), o.niceevent = !0, e.dispatchEvent(o)
				};
				var _ = this.isrtlmode ? 1 : -1;
				P.hastranslate3d && M.enabletranslate3d ? (this.setScrollTop = function(e, o) {
					T.doc.translate.y = e, T.doc.translate.ty = -1 * e + "px", T.doc.css(P.trstyle, "translate3d(" + T.doc.translate.tx + "," + T.doc.translate.ty + ",0)"), o || T.notifyScrollEvent(T.win[0])
				}, this.setScrollLeft = function(e, o) {
					T.doc.translate.x = e, T.doc.translate.tx = e * _ + "px", T.doc.css(P.trstyle, "translate3d(" + T.doc.translate.tx + "," + T.doc.translate.ty + ",0)"), o || T.notifyScrollEvent(T.win[0])
				}) : (this.setScrollTop = function(e, o) {
					T.doc.translate.y = e, T.doc.translate.ty = -1 * e + "px", T.doc.css(P.trstyle, "translate(" + T.doc.translate.tx + "," + T.doc.translate.ty + ")"), o || T.notifyScrollEvent(T.win[0])
				}, this.setScrollLeft = function(e, o) {
					T.doc.translate.x = e, T.doc.translate.tx = e * _ + "px", T.doc.css(P.trstyle, "translate(" + T.doc.translate.tx + "," + T.doc.translate.ty + ")"), o || T.notifyScrollEvent(T.win[0])
				})
			} else this.getScrollTop = function() {
				return T.docscroll.scrollTop()
			}, this.setScrollTop = function(e) {
				T.docscroll.scrollTop(e)
			}, this.getScrollLeft = function() {
				var e;
				return e = T.hasreversehr ? T.detected.ismozilla ? T.page.maxw - Math.abs(T.docscroll.scrollLeft()) : T.page.maxw - T.docscroll.scrollLeft() : T.docscroll.scrollLeft()
			}, this.setScrollLeft = function(e) {
				return setTimeout(function() {
					return T ? (T.hasreversehr && (e = T.detected.ismozilla ? -(T.page.maxw - e) : T.page.maxw - e), T.docscroll.scrollLeft(e)) : void 0
				}, 1)
			};
			this.getTarget = function(e) {
				return e ? e.target ? e.target : e.srcElement ? e.srcElement : !1 : !1
			}, this.hasParent = function(e, o) {
				if (!e) return !1;
				for (var t = e.target || e.srcElement || e || !1; t && t.id != o;) t = t.parentNode || !1;
				return t !== !1
			};
			var I = {
				thin: 1,
				medium: 3,
				thick: 5
			};
			this.getDocumentScrollOffset = function() {
				return {
					top: d.pageYOffset || c.documentElement.scrollTop,
					left: d.pageXOffset || c.documentElement.scrollLeft
				}
			}, this.getOffset = function() {
				if (T.isfixed) {
					var e = T.win.offset(),
						o = T.getDocumentScrollOffset();
					return e.top -= o.top, e.left -= o.left, e
				}
				var t = T.win.offset();
				if (!T.viewport) return t;
				var r = T.viewport.offset();
				return {
					top: t.top - r.top,
					left: t.left - r.left
				}
			}, this.updateScrollBar = function(e) {
				var o, t;
				if (T.ishwscroll) T.rail.css({
					height: T.win.innerHeight() - (M.railpadding.top + M.railpadding.bottom)
				}), T.railh && T.railh.css({
					width: T.win.innerWidth() - (M.railpadding.left + M.railpadding.right)
				});
				else {
					var r = T.getOffset();
					if (o = {
							top: r.top,
							left: r.left - (M.railpadding.left + M.railpadding.right)
						}, o.top += b(T.win, "border-top-width", !0), o.left += T.rail.align ? T.win.outerWidth() - b(T.win, "border-right-width") - T.rail.width : b(T.win, "border-left-width"), t = M.railoffset, t && (t.top && (o.top += t.top), t.left && (o.left += t.left)), T.railslocked || T.rail.css({
							top: o.top,
							left: o.left,
							height: (e ? e.h : T.win.innerHeight()) - (M.railpadding.top + M.railpadding.bottom)
						}), T.zoom && T.zoom.css({
							top: o.top + 1,
							left: 1 == T.rail.align ? o.left - 20 : o.left + T.rail.width + 4
						}), T.railh && !T.railslocked) {
						o = {
							top: r.top,
							left: r.left
						}, t = M.railhoffset, t && (t.top && (o.top += t.top), t.left && (o.left += t.left));
						var i = T.railh.align ? o.top + b(T.win, "border-top-width", !0) + T.win.innerHeight() - T.railh.height : o.top + b(T.win, "border-top-width", !0),
							s = o.left + b(T.win, "border-left-width");
						T.railh.css({
							top: i - (M.railpadding.top + M.railpadding.bottom),
							left: s,
							width: T.railh.width
						})
					}
				}
			}, this.doRailClick = function(e, o, t) {
				var r, i, s, n;
				T.railslocked || (T.cancelEvent(e), "pageY" in e || (e.pageX = e.clientX + c.documentElement.scrollLeft, e.pageY = e.clientY + c.documentElement.scrollTop), o ? (r = t ? T.doScrollLeft : T.doScrollTop, s = t ? (e.pageX - T.railh.offset().left - T.cursorwidth / 2) * T.scrollratio.x : (e.pageY - T.rail.offset().top - T.cursorheight / 2) * T.scrollratio.y, T.unsynched("relativexy"), r(0 | s)) : (r = t ? T.doScrollLeftBy : T.doScrollBy, s = t ? T.scroll.x : T.scroll.y, n = t ? e.pageX - T.railh.offset().left : e.pageY - T.rail.offset().top, i = t ? T.view.w : T.view.h, r(s >= n ? i : -i)))
			}, T.newscrolly = T.newscrollx = 0, T.hasanimationframe = "requestAnimationFrame" in d, T.hascancelanimationframe = "cancelAnimationFrame" in d, T.hasborderbox = !1, this.init = function() {
				if (T.saved.css = [], P.isoperamini) return !0;
				if (P.isandroid && !("hidden" in c)) return !0;
				M.emulatetouch = M.emulatetouch || M.touchbehavior, T.hasborderbox = d.getComputedStyle && "border-box" === d.getComputedStyle(c.body)["box-sizing"];
				var e = {
					"overflow-y": "hidden"
				};
				if ((P.isie11 || P.isie10) && (e["-ms-overflow-style"] = "none"), T.ishwscroll && (this.doc.css(P.transitionstyle, P.prefixstyle + "transform 0ms ease-out"), P.transitionend && T.bind(T.doc, P.transitionend, T.onScrollTransitionEnd, !1)), T.zindex = "auto", T.ispage || "auto" != M.zindex ? T.zindex = M.zindex : T.zindex = f() || "auto", !T.ispage && "auto" != T.zindex && T.zindex > l && (l = T.zindex), T.isie && 0 === T.zindex && "auto" == M.zindex && (T.zindex = "auto"), !T.ispage || !P.isieold) {
					var o = T.docscroll;
					T.ispage && (o = T.haswrapper ? T.win : T.doc), T.css(o, e), T.ispage && (P.isie11 || P.isie) && T.css(a("html"), e), !P.isios || T.ispage || T.haswrapper || T.css(E, {
						"-webkit-overflow-scrolling": "touch"
					});
					var t = a(c.createElement("div"));
					t.css({
						position: "relative",
						top: 0,
						"float": "right",
						width: M.cursorwidth,
						height: 0,
						"background-color": M.cursorcolor,
						border: M.cursorborder,
						"background-clip": "padding-box",
						"-webkit-border-radius": M.cursorborderradius,
						"-moz-border-radius": M.cursorborderradius,
						"border-radius": M.cursorborderradius
					}), t.addClass("nicescroll-cursors"), T.cursor = t;
					var n = a(c.createElement("div"));
					n.attr("id", T.id), n.addClass("nicescroll-rails nicescroll-rails-vr");
					var h, p, m = ["left", "right", "top", "bottom"];
					for (var v in m) p = m[v], h = M.railpadding[p] || 0, h && n.css("padding-" + p, h + "px");
					n.append(t), n.width = Math.max(parseFloat(M.cursorwidth), t.outerWidth()), n.css({
						width: n.width + "px",
						zIndex: T.zindex,
						background: M.background,
						cursor: "default"
					}), n.visibility = !0, n.scrollable = !0, n.align = "left" == M.railalign ? 0 : 1, T.rail = n, T.rail.drag = !1;
					var w = !1;
					!M.boxzoom || T.ispage || P.isieold || (w = c.createElement("div"), T.bind(w, "click", T.doZoom), T.bind(w, "mouseenter", function() {
						T.zoom.css("opacity", M.cursoropacitymax)
					}), T.bind(w, "mouseleave", function() {
						T.zoom.css("opacity", M.cursoropacitymin)
					}), T.zoom = a(w), T.zoom.css({
						cursor: "pointer",
						zIndex: T.zindex,
						backgroundImage: "url(" + M.scriptpath + "zoomico.png)",
						height: 18,
						width: 18,
						backgroundPosition: "0 0"
					}), M.dblclickzoom && T.bind(T.win, "dblclick", T.doZoom), P.cantouch && M.gesturezoom && (T.ongesturezoom = function(e) {
						return e.scale > 1.5 && T.doZoomIn(e), e.scale < .8 && T.doZoomOut(e), T.cancelEvent(e)
					}, T.bind(T.win, "gestureend", T.ongesturezoom))), T.railh = !1;
					var b;
					if (M.horizrailenabled && (T.css(o, {
							overflowX: "hidden"
						}), t = a(c.createElement("div")), t.css({
							position: "absolute",
							top: 0,
							height: M.cursorwidth,
							width: 0,
							backgroundColor: M.cursorcolor,
							border: M.cursorborder,
							backgroundClip: "padding-box",
							"-webkit-border-radius": M.cursorborderradius,
							"-moz-border-radius": M.cursorborderradius,
							"border-radius": M.cursorborderradius
						}), P.isieold && t.css("overflow", "hidden"), t.addClass("nicescroll-cursors"), T.cursorh = t, b = a(c.createElement("div")), b.attr("id", T.id + "-hr"), b.addClass("nicescroll-rails nicescroll-rails-hr"), b.height = Math.max(parseFloat(M.cursorwidth), t.outerHeight()), b.css({
							height: b.height + "px",
							zIndex: T.zindex,
							background: M.background
						}), b.append(t), b.visibility = !0, b.scrollable = !0, b.align = "top" == M.railvalign ? 0 : 1, T.railh = b, T.railh.drag = !1), T.ispage) n.css({
						position: "fixed",
						top: 0,
						height: "100%"
					}), n.css(n.align ? {
						right: 0
					} : {
						left: 0
					}), T.body.append(n), T.railh && (b.css({
						position: "fixed",
						left: 0,
						width: "100%"
					}), b.css(b.align ? {
						bottom: 0
					} : {
						top: 0
					}), T.body.append(b));
					else {
						if (T.ishwscroll) {
							"static" == T.win.css("position") && T.css(T.win, {
								position: "relative"
							});
							var y = "HTML" == T.win[0].nodeName ? T.body : T.win;
							a(y).scrollTop(0).scrollLeft(0), T.zoom && (T.zoom.css({
								position: "absolute",
								top: 1,
								right: 0,
								"margin-right": n.width + 4
							}), y.append(T.zoom)), n.css({
								position: "absolute",
								top: 0
							}), n.css(n.align ? {
								right: 0
							} : {
								left: 0
							}), y.append(n), b && (b.css({
								position: "absolute",
								left: 0,
								bottom: 0
							}), b.css(b.align ? {
								bottom: 0
							} : {
								top: 0
							}), y.append(b))
						} else {
							T.isfixed = "fixed" == T.win.css("position");
							var x = T.isfixed ? "fixed" : "absolute";
							T.isfixed || (T.viewport = T.getViewport(T.win[0])), T.viewport && (T.body = T.viewport, /fixed|absolute/.test(T.viewport.css("position")) || T.css(T.viewport, {
								position: "relative"
							})), n.css({
								position: x
							}), T.zoom && T.zoom.css({
								position: x
							}), T.updateScrollBar(), T.body.append(n), T.zoom && T.body.append(T.zoom), T.railh && (b.css({
								position: x
							}), T.body.append(b))
						}
						P.isios && T.css(T.win, {
							"-webkit-tap-highlight-color": "rgba(0,0,0,0)",
							"-webkit-touch-callout": "none"
						}), M.disableoutline && (P.isie && T.win.attr("hideFocus", "true"), P.iswebkit && T.win.css("outline", "none"))
					}
					if (M.autohidemode === !1 ? (T.autohidedom = !1, T.rail.css({
							opacity: M.cursoropacitymax
						}), T.railh && T.railh.css({
							opacity: M.cursoropacitymax
						})) : M.autohidemode === !0 || "leave" === M.autohidemode ? (T.autohidedom = a().add(T.rail), P.isie8 && (T.autohidedom = T.autohidedom.add(T.cursor)), T.railh && (T.autohidedom = T.autohidedom.add(T.railh)), T.railh && P.isie8 && (T.autohidedom = T.autohidedom.add(T.cursorh))) : "scroll" == M.autohidemode ? (T.autohidedom = a().add(T.rail), T.railh && (T.autohidedom = T.autohidedom.add(T.railh))) : "cursor" == M.autohidemode ? (T.autohidedom = a().add(T.cursor), T.railh && (T.autohidedom = T.autohidedom.add(T.cursorh))) : "hidden" == M.autohidemode && (T.autohidedom = !1, T.hide(), T.railslocked = !1), P.cantouch || T.istouchcapable || M.emulatetouch || P.hasmstouch) {
						T.scrollmom = new S(T);
						T.ontouchstart = function(e) {
							if (T.locked) return !1;
							if (e.pointerType && ("mouse" === e.pointerType || e.pointerType === e.MSPOINTER_TYPE_MOUSE)) return !1;
							if (T.hasmoving = !1, T.scrollmom.timer && (T.triggerScrollEnd(), T.scrollmom.stop()), !T.railslocked) {
								var o = T.getTarget(e);
								if (o) {
									var t = /INPUT/i.test(o.nodeName) && /range/i.test(o.type);
									if (t) return T.stopPropagation(e)
								}
								var r = "mousedown" === e.type;
								if (!("clientX" in e) && "changedTouches" in e && (e.clientX = e.changedTouches[0].clientX, e.clientY = e.changedTouches[0].clientY), T.forcescreen) {
									var i = e;
									e = {
										original: e.original ? e.original : e
									}, e.clientX = i.screenX, e.clientY = i.screenY
								}
								if (T.rail.drag = {
										x: e.clientX,
										y: e.clientY,
										sx: T.scroll.x,
										sy: T.scroll.y,
										st: T.getScrollTop(),
										sl: T.getScrollLeft(),
										pt: 2,
										dl: !1,
										tg: o
									}, T.ispage || !M.directionlockdeadzone) T.rail.drag.dl = "f";
								else {
									var s = {
											w: u.width(),
											h: u.height()
										},
										n = T.getContentSize(),
										l = n.h - s.h,
										c = n.w - s.w;
									T.rail.scrollable && !T.railh.scrollable ? T.rail.drag.ck = l > 0 ? "v" : !1 : !T.rail.scrollable && T.railh.scrollable ? T.rail.drag.ck = c > 0 ? "h" : !1 : T.rail.drag.ck = !1
								}
								if (M.emulatetouch && T.isiframe && P.isie) {
									var d = T.win.position();
									T.rail.drag.x += d.left, T.rail.drag.y += d.top
								}
								if (T.hasmoving = !1, T.lastmouseup = !1, T.scrollmom.reset(e.clientX, e.clientY), o && r) {
									var h = /INPUT|SELECT|BUTTON|TEXTAREA/i.test(o.nodeName);
									if (!h) return P.hasmousecapture && o.setCapture(), M.emulatetouch ? (o.onclick && !o._onclick && (o._onclick = o.onclick, o.onclick = function(e) {
										return T.hasmoving ? !1 : void o._onclick.call(this, e)
									}), T.cancelEvent(e)) : T.stopPropagation(e);
									/SUBMIT|CANCEL|BUTTON/i.test(a(o).attr("type")) && (T.preventclick = {
										tg: o,
										click: !1
									})
								}
							}
						}, T.ontouchend = function(e) {
							if (!T.rail.drag) return !0;
							if (2 == T.rail.drag.pt) {
								if (e.pointerType && ("mouse" === e.pointerType || e.pointerType === e.MSPOINTER_TYPE_MOUSE)) return !1;
								T.rail.drag = !1;
								var o = "mouseup" === e.type;
								if (T.hasmoving && (T.scrollmom.doMomentum(), T.lastmouseup = !0, T.hideCursor(), P.hasmousecapture && c.releaseCapture(), o)) return T.cancelEvent(e)
							} else if (1 == T.rail.drag.pt) return T.onmouseup(e)
						};
						var z = M.emulatetouch && T.isiframe && !P.hasmousecapture,
							k = .3 * M.directionlockdeadzone | 0;
						T.ontouchmove = function(e, o) {
							if (!T.rail.drag) return !0;
							if (e.targetTouches && M.preventmultitouchscrolling && e.targetTouches.length > 1) return !0;
							if (e.pointerType && ("mouse" === e.pointerType || e.pointerType === e.MSPOINTER_TYPE_MOUSE)) return !0;
							if (2 == T.rail.drag.pt) {
								"changedTouches" in e && (e.clientX = e.changedTouches[0].clientX, e.clientY = e.changedTouches[0].clientY);
								var t, r;
								if (r = t = 0, z && !o) {
									var i = T.win.position();
									r = -i.left, t = -i.top
								}
								var s = e.clientY + t,
									n = s - T.rail.drag.y,
									l = e.clientX + r,
									a = l - T.rail.drag.x,
									d = T.rail.drag.st - n;
								if (T.ishwscroll && M.bouncescroll) 0 > d ? d = Math.round(d / 2) : d > T.page.maxh && (d = T.page.maxh + Math.round((d - T.page.maxh) / 2));
								else if (0 > d ? (d = 0, s = 0) : d > T.page.maxh && (d = T.page.maxh, s = 0), 0 === s && !T.hasmoving) return T.ispage || (T.rail.drag = !1), !0;
								var u = T.getScrollLeft();
								if (T.railh && T.railh.scrollable && (u = T.isrtlmode ? a - T.rail.drag.sl : T.rail.drag.sl - a, T.ishwscroll && M.bouncescroll ? 0 > u ? u = Math.round(u / 2) : u > T.page.maxw && (u = T.page.maxw + Math.round((u - T.page.maxw) / 2)) : (0 > u && (u = 0, l = 0), u > T.page.maxw && (u = T.page.maxw, l = 0))), !T.hasmoving) {
									if (T.rail.drag.y === e.clientY && T.rail.drag.x === e.clientX) return T.cancelEvent(e);
									var h = Math.abs(n),
										p = Math.abs(a),
										m = M.directionlockdeadzone;
									if (T.rail.drag.ck ? "v" == T.rail.drag.ck ? p > m && k >= h ? T.rail.drag = !1 : h > m && (T.rail.drag.dl = "v") : "h" == T.rail.drag.ck && (h > m && k >= p ? T.rail.drag = !1 : p > m && (T.rail.drag.dl = "h")) : h > m && p > m ? T.rail.drag.dl = "f" : h > m ? T.rail.drag.dl = p > k ? "f" : "v" : p > m && (T.rail.drag.dl = h > k ? "f" : "h"), !T.rail.drag.dl) return T.cancelEvent(e);
									T.triggerScrollStart(e.clientX, e.clientY, 0, 0, 0), T.hasmoving = !0
								}
								return T.preventclick && !T.preventclick.click && (T.preventclick.click = T.preventclick.tg.onclick || !1, T.preventclick.tg.onclick = T.onpreventclick), T.rail.drag.dl && ("v" == T.rail.drag.dl ? u = T.rail.drag.sl : "h" == T.rail.drag.dl && (d = T.rail.drag.st)), T.synched("touchmove", function() {
									T.rail.drag && 2 == T.rail.drag.pt && (T.prepareTransition && T.resetTransition(), T.rail.scrollable && T.setScrollTop(d), T.scrollmom.update(l, s), T.railh && T.railh.scrollable ? (T.setScrollLeft(u), T.showCursor(d, u)) : T.showCursor(d), P.isie10 && c.selection.clear())
								}), T.cancelEvent(e)
							}
							return 1 == T.rail.drag.pt ? T.onmousemove(e) : void 0
						}, T.ontouchstartCursor = function(e, o) {
							if (!T.rail.drag || 3 == T.rail.drag.pt) {
								if (T.locked) return T.cancelEvent(e);
								T.cancelScroll(), T.rail.drag = {
									x: e.touches[0].clientX,
									y: e.touches[0].clientY,
									sx: T.scroll.x,
									sy: T.scroll.y,
									pt: 3,
									hr: !!o
								};
								var t = T.getTarget(e);
								return !T.ispage && P.hasmousecapture && t.setCapture(), T.isiframe && !P.hasmousecapture && (T.saved.csspointerevents = T.doc.css("pointer-events"), T.css(T.doc, {
									"pointer-events": "none"
								})), T.cancelEvent(e)
							}
						}, T.ontouchendCursor = function(e) {
							if (T.rail.drag) {
								if (P.hasmousecapture && c.releaseCapture(), T.isiframe && !P.hasmousecapture && T.doc.css("pointer-events", T.saved.csspointerevents), 3 != T.rail.drag.pt) return;
								return T.rail.drag = !1, T.cancelEvent(e)
							}
						}, T.ontouchmoveCursor = function(e) {
							if (T.rail.drag) {
								if (3 != T.rail.drag.pt) return;
								if (T.cursorfreezed = !0, T.rail.drag.hr) {
									T.scroll.x = T.rail.drag.sx + (e.touches[0].clientX - T.rail.drag.x), T.scroll.x < 0 && (T.scroll.x = 0);
									var o = T.scrollvaluemaxw;
									T.scroll.x > o && (T.scroll.x = o)
								} else {
									T.scroll.y = T.rail.drag.sy + (e.touches[0].clientY - T.rail.drag.y), T.scroll.y < 0 && (T.scroll.y = 0);
									var t = T.scrollvaluemax;
									T.scroll.y > t && (T.scroll.y = t)
								}
								return T.synched("touchmove", function() {
									T.rail.drag && 3 == T.rail.drag.pt && (T.showCursor(), T.rail.drag.hr ? T.doScrollLeft(Math.round(T.scroll.x * T.scrollratio.x), M.cursordragspeed) : T.doScrollTop(Math.round(T.scroll.y * T.scrollratio.y), M.cursordragspeed))
								}), T.cancelEvent(e)
							}
						}
					}
					if (T.onmousedown = function(e, o) {
							if (!T.rail.drag || 1 == T.rail.drag.pt) {
								if (T.railslocked) return T.cancelEvent(e);
								T.cancelScroll(), T.rail.drag = {
									x: e.clientX,
									y: e.clientY,
									sx: T.scroll.x,
									sy: T.scroll.y,
									pt: 1,
									hr: o || !1
								};
								var t = T.getTarget(e);
								return P.hasmousecapture && t.setCapture(), T.isiframe && !P.hasmousecapture && (T.saved.csspointerevents = T.doc.css("pointer-events"), T.css(T.doc, {
									"pointer-events": "none"
								})), T.hasmoving = !1, T.cancelEvent(e)
							}
						}, T.onmouseup = function(e) {
							return T.rail.drag ? 1 != T.rail.drag.pt ? !0 : (P.hasmousecapture && c.releaseCapture(), T.isiframe && !P.hasmousecapture && T.doc.css("pointer-events", T.saved.csspointerevents), T.rail.drag = !1, T.cursorfreezed = !1, T.hasmoving && T.triggerScrollEnd(), T.cancelEvent(e)) : void 0
						}, T.onmousemove = function(e) {
							if (T.rail.drag) {
								if (1 !== T.rail.drag.pt) return;
								if (P.ischrome && 0 === e.which) return T.onmouseup(e);
								if (T.cursorfreezed = !0, T.hasmoving || T.triggerScrollStart(e.clientX, e.clientY, 0, 0, 0), T.hasmoving = !0, T.rail.drag.hr) {
									T.scroll.x = T.rail.drag.sx + (e.clientX - T.rail.drag.x), T.scroll.x < 0 && (T.scroll.x = 0);
									var o = T.scrollvaluemaxw;
									T.scroll.x > o && (T.scroll.x = o)
								} else {
									T.scroll.y = T.rail.drag.sy + (e.clientY - T.rail.drag.y), T.scroll.y < 0 && (T.scroll.y = 0);
									var t = T.scrollvaluemax;
									T.scroll.y > t && (T.scroll.y = t)
								}
								return T.synched("mousemove", function() {
									T.cursorfreezed && (T.showCursor(), T.rail.drag.hr ? T.scrollLeft(Math.round(T.scroll.x * T.scrollratio.x)) : T.scrollTop(Math.round(T.scroll.y * T.scrollratio.y)))
								}), T.cancelEvent(e)
							}
							T.checkarea = 0
						}, P.cantouch || M.emulatetouch) T.onpreventclick = function(e) {
						return T.preventclick ? (T.preventclick.tg.onclick = T.preventclick.click, T.preventclick = !1, T.cancelEvent(e)) : void 0
					}, T.onclick = P.isios ? !1 : function(e) {
						return T.lastmouseup ? (T.lastmouseup = !1, T.cancelEvent(e)) : !0
					}, M.grabcursorenabled && P.cursorgrabvalue && (T.css(T.ispage ? T.doc : T.win, {
						cursor: P.cursorgrabvalue
					}), T.css(T.rail, {
						cursor: P.cursorgrabvalue
					}));
					else {
						var L = function(e) {
							if (T.selectiondrag) {
								if (e) {
									var o = T.win.outerHeight(),
										t = e.pageY - T.selectiondrag.top;
									t > 0 && o > t && (t = 0), t >= o && (t -= o), T.selectiondrag.df = t
								}
								if (0 !== T.selectiondrag.df) {
									var r = 0 | -(2 * T.selectiondrag.df / 6);
									T.doScrollBy(r), T.debounced("doselectionscroll", function() {
										L()
									}, 50)
								}
							}
						};
						"getSelection" in c ? T.hasTextSelected = function() {
							return c.getSelection().rangeCount > 0
						} : "selection" in c ? T.hasTextSelected = function() {
							return "None" != c.selection.type
						} : T.hasTextSelected = function() {
							return !1
						}, T.onselectionstart = function(e) {
							T.ispage || (T.selectiondrag = T.win.offset())
						}, T.onselectionend = function(e) {
							T.selectiondrag = !1
						}, T.onselectiondrag = function(e) {
							T.selectiondrag && T.hasTextSelected() && T.debounced("selectionscroll", function() {
								L(e)
							}, 250)
						}
					}
					if (P.hasw3ctouch ? (T.css(T.ispage ? a("html") : T.win, {
							"touch-action": "none"
						}), T.css(T.rail, {
							"touch-action": "none"
						}), T.css(T.cursor, {
							"touch-action": "none"
						}), T.bind(T.win, "pointerdown", T.ontouchstart), T.bind(c, "pointerup", T.ontouchend), T.delegate(c, "pointermove", T.ontouchmove)) : P.hasmstouch ? (T.css(T.ispage ? a("html") : T.win, {
							"-ms-touch-action": "none"
						}), T.css(T.rail, {
							"-ms-touch-action": "none"
						}), T.css(T.cursor, {
							"-ms-touch-action": "none"
						}), T.bind(T.win, "MSPointerDown", T.ontouchstart), T.bind(c, "MSPointerUp", T.ontouchend), T.delegate(c, "MSPointerMove", T.ontouchmove), T.bind(T.cursor, "MSGestureHold", function(e) {
							e.preventDefault()
						}), T.bind(T.cursor, "contextmenu", function(e) {
							e.preventDefault()
						})) : P.cantouch && (T.bind(T.win, "touchstart", T.ontouchstart, !1, !0), T.bind(c, "touchend", T.ontouchend, !1, !0), T.bind(c, "touchcancel", T.ontouchend, !1, !0), T.delegate(c, "touchmove", T.ontouchmove, !1, !0)), M.emulatetouch && (T.bind(T.win, "mousedown", T.ontouchstart, !1, !0), T.bind(c, "mouseup", T.ontouchend, !1, !0), T.bind(c, "mousemove", T.ontouchmove, !1, !0)), (M.cursordragontouch || !P.cantouch && !M.emulatetouch) && (T.rail.css({
							cursor: "default"
						}), T.railh && T.railh.css({
							cursor: "default"
						}), T.jqbind(T.rail, "mouseenter", function() {
							return T.ispage || T.win.is(":visible") ? (T.canshowonmouseevent && T.showCursor(), void(T.rail.active = !0)) : !1
						}), T.jqbind(T.rail, "mouseleave", function() {
							T.rail.active = !1, T.rail.drag || T.hideCursor()
						}), M.sensitiverail && (T.bind(T.rail, "click", function(e) {
							T.doRailClick(e, !1, !1)
						}), T.bind(T.rail, "dblclick", function(e) {
							T.doRailClick(e, !0, !1)
						}), T.bind(T.cursor, "click", function(e) {
							T.cancelEvent(e)
						}), T.bind(T.cursor, "dblclick", function(e) {
							T.cancelEvent(e)
						})), T.railh && (T.jqbind(T.railh, "mouseenter", function() {
							return T.ispage || T.win.is(":visible") ? (T.canshowonmouseevent && T.showCursor(), void(T.rail.active = !0)) : !1
						}), T.jqbind(T.railh, "mouseleave", function() {
							T.rail.active = !1, T.rail.drag || T.hideCursor()
						}), M.sensitiverail && (T.bind(T.railh, "click", function(e) {
							T.doRailClick(e, !1, !0)
						}), T.bind(T.railh, "dblclick", function(e) {
							T.doRailClick(e, !0, !0)
						}), T.bind(T.cursorh, "click", function(e) {
							T.cancelEvent(e)
						}), T.bind(T.cursorh, "dblclick", function(e) {
							T.cancelEvent(e)
						})))), M.cursordragontouch && (this.istouchcapable || P.cantouch) && (T.bind(T.cursor, "touchstart", T.ontouchstartCursor), T.bind(T.cursor, "touchmove", T.ontouchmoveCursor), T.bind(T.cursor, "touchend", T.ontouchendCursor), T.cursorh && T.bind(T.cursorh, "touchstart", function(e) {
							T.ontouchstartCursor(e, !0)
						}), T.cursorh && T.bind(T.cursorh, "touchmove", T.ontouchmoveCursor), T.cursorh && T.bind(T.cursorh, "touchend", T.ontouchendCursor)), M.emulatetouch || P.isandroid || P.isios ? (T.bind(P.hasmousecapture ? T.win : c, "mouseup", T.ontouchend), T.onclick && T.bind(c, "click", T.onclick), M.cursordragontouch ? (T.bind(T.cursor, "mousedown", T.onmousedown), T.bind(T.cursor, "mouseup", T.onmouseup),
							T.cursorh && T.bind(T.cursorh, "mousedown", function(e) {
								T.onmousedown(e, !0)
							}), T.cursorh && T.bind(T.cursorh, "mouseup", T.onmouseup)) : (T.bind(T.rail, "mousedown", function(e) {
							e.preventDefault()
						}), T.railh && T.bind(T.railh, "mousedown", function(e) {
							e.preventDefault()
						}))) : (T.bind(P.hasmousecapture ? T.win : c, "mouseup", T.onmouseup), T.bind(c, "mousemove", T.onmousemove), T.onclick && T.bind(c, "click", T.onclick), T.bind(T.cursor, "mousedown", T.onmousedown), T.bind(T.cursor, "mouseup", T.onmouseup), T.railh && (T.bind(T.cursorh, "mousedown", function(e) {
							T.onmousedown(e, !0)
						}), T.bind(T.cursorh, "mouseup", T.onmouseup)), !T.ispage && M.enablescrollonselection && (T.bind(T.win[0], "mousedown", T.onselectionstart), T.bind(c, "mouseup", T.onselectionend), T.bind(T.cursor, "mouseup", T.onselectionend), T.cursorh && T.bind(T.cursorh, "mouseup", T.onselectionend), T.bind(c, "mousemove", T.onselectiondrag)), T.zoom && (T.jqbind(T.zoom, "mouseenter", function() {
							T.canshowonmouseevent && T.showCursor(), T.rail.active = !0
						}), T.jqbind(T.zoom, "mouseleave", function() {
							T.rail.active = !1, T.rail.drag || T.hideCursor()
						}))), M.enablemousewheel && (T.isiframe || T.mousewheel(P.isie && T.ispage ? c : T.win, T.onmousewheel), T.mousewheel(T.rail, T.onmousewheel), T.railh && T.mousewheel(T.railh, T.onmousewheelhr)), T.ispage || P.cantouch || /HTML|^BODY/.test(T.win[0].nodeName) || (T.win.attr("tabindex") || T.win.attr({
							tabindex: ++s
						}), T.bind(T.win, "focus", function(e) {
							r = T.getTarget(e).id || T.getTarget(e) || !1, T.hasfocus = !0, T.canshowonmouseevent && T.noticeCursor()
						}), T.bind(T.win, "blur", function(e) {
							r = !1, T.hasfocus = !1
						}), T.bind(T.win, "mouseenter", function(e) {
							i = T.getTarget(e).id || T.getTarget(e) || !1, T.hasmousefocus = !0, T.canshowonmouseevent && T.noticeCursor()
						}), T.bind(T.win, "mouseleave", function(e) {
							i = !1, T.hasmousefocus = !1, T.rail.drag || T.hideCursor()
						})), T.onkeypress = function(e) {
							if (T.railslocked && 0 === T.page.maxh) return !0;
							e = e || d.event;
							var o = T.getTarget(e);
							if (o && /INPUT|TEXTAREA|SELECT|OPTION/.test(o.nodeName)) {
								var t = o.getAttribute("type") || o.type || !1;
								if (!t || !/submit|button|cancel/i.tp) return !0
							}
							if (a(o).attr("contenteditable")) return !0;
							if (T.hasfocus || T.hasmousefocus && !r || T.ispage && !r && !i) {
								var s = e.keyCode;
								if (T.railslocked && 27 != s) return T.cancelEvent(e);
								var n = e.ctrlKey || !1,
									l = e.shiftKey || !1,
									c = !1;
								switch (s) {
									case 38:
									case 63233:
										T.doScrollBy(72), c = !0;
										break;
									case 40:
									case 63235:
										T.doScrollBy(-72), c = !0;
										break;
									case 37:
									case 63232:
										T.railh && (n ? T.doScrollLeft(0) : T.doScrollLeftBy(72), c = !0);
										break;
									case 39:
									case 63234:
										T.railh && (n ? T.doScrollLeft(T.page.maxw) : T.doScrollLeftBy(-72), c = !0);
										break;
									case 33:
									case 63276:
										T.doScrollBy(T.view.h), c = !0;
										break;
									case 34:
									case 63277:
										T.doScrollBy(-T.view.h), c = !0;
										break;
									case 36:
									case 63273:
										T.railh && n ? T.doScrollPos(0, 0) : T.doScrollTo(0), c = !0;
										break;
									case 35:
									case 63275:
										T.railh && n ? T.doScrollPos(T.page.maxw, T.page.maxh) : T.doScrollTo(T.page.maxh), c = !0;
										break;
									case 32:
										M.spacebarenabled && (l ? T.doScrollBy(T.view.h) : T.doScrollBy(-T.view.h), c = !0);
										break;
									case 27:
										T.zoomactive && (T.doZoom(), c = !0)
								}
								if (c) return T.cancelEvent(e)
							}
						}, M.enablekeyboard && T.bind(c, P.isopera && !P.isopera12 ? "keypress" : "keydown", T.onkeypress), T.bind(c, "keydown", function(e) {
							var o = e.ctrlKey || !1;
							o && (T.wheelprevented = !0)
						}), T.bind(c, "keyup", function(e) {
							var o = e.ctrlKey || !1;
							o || (T.wheelprevented = !1)
						}), T.bind(d, "blur", function(e) {
							T.wheelprevented = !1
						}), T.bind(d, "resize", T.onscreenresize), T.bind(d, "orientationchange", T.onscreenresize), T.bind(d, "load", T.lazyResize), P.ischrome && !T.ispage && !T.haswrapper) {
						var C = T.win.attr("style"),
							N = parseFloat(T.win.css("width")) + 1;
						T.win.css("width", N), T.synched("chromefix", function() {
							T.win.attr("style", C)
						})
					}
					if (T.onAttributeChange = function(e) {
							T.lazyResize(T.isieold ? 250 : 30)
						}, M.enableobserver && (T.isie11 || g === !1 || (T.observerbody = new g(function(e) {
							return e.forEach(function(e) {
								return "attributes" == e.type ? E.hasClass("modal-open") && E.hasClass("modal-dialog") && !a.contains(a(".modal-dialog")[0], T.doc[0]) ? T.hide() : T.show() : void 0
							}), T.me.clientWidth != T.page.width || T.me.clientHeight != T.page.height ? T.lazyResize(30) : void 0
						}), T.observerbody.observe(c.body, {
							childList: !0,
							subtree: !0,
							characterData: !1,
							attributes: !0,
							attributeFilter: ["class"]
						})), !T.ispage && !T.haswrapper)) {
						var R = T.win[0];
						g !== !1 ? (T.observer = new g(function(e) {
							e.forEach(T.onAttributeChange)
						}), T.observer.observe(R, {
							childList: !0,
							characterData: !1,
							attributes: !0,
							subtree: !1
						}), T.observerremover = new g(function(e) {
							e.forEach(function(e) {
								if (e.removedNodes.length > 0)
									for (var o in e.removedNodes)
										if (T && e.removedNodes[o] === R) return T.remove()
							})
						}), T.observerremover.observe(R.parentNode, {
							childList: !0,
							characterData: !1,
							attributes: !1,
							subtree: !1
						})) : (T.bind(R, P.isie && !P.isie9 ? "propertychange" : "DOMAttrModified", T.onAttributeChange), P.isie9 && R.attachEvent("onpropertychange", T.onAttributeChange), T.bind(R, "DOMNodeRemoved", function(e) {
							e.target === R && T.remove()
						}))
					}!T.ispage && M.boxzoom && T.bind(d, "resize", T.resizeZoom), T.istextarea && (T.bind(T.win, "keydown", T.lazyResize), T.bind(T.win, "mouseup", T.lazyResize)), T.lazyResize(30)
				}
				if ("IFRAME" == this.doc[0].nodeName) {
					var _ = function() {
						T.iframexd = !1;
						var o;
						try {
							o = "contentDocument" in this ? this.contentDocument : this.contentWindow._doc;
							o.domain
						} catch (t) {
							T.iframexd = !0, o = !1
						}
						if (T.iframexd) return "console" in d && console.log("NiceScroll error: policy restriced iframe"), !0;
						if (T.forcescreen = !0, T.isiframe && (T.iframe = {
								doc: a(o),
								html: T.doc.contents().find("html")[0],
								body: T.doc.contents().find("body")[0]
							}, T.getContentSize = function() {
								return {
									w: Math.max(T.iframe.html.scrollWidth, T.iframe.body.scrollWidth),
									h: Math.max(T.iframe.html.scrollHeight, T.iframe.body.scrollHeight)
								}
							}, T.docscroll = a(T.iframe.body)), !P.isios && M.iframeautoresize && !T.isiframe) {
							T.win.scrollTop(0), T.doc.height("");
							var r = Math.max(o.getElementsByTagName("html")[0].scrollHeight, o.body.scrollHeight);
							T.doc.height(r)
						}
						T.lazyResize(30), T.css(a(T.iframe.body), e), P.isios && T.haswrapper && T.css(a(o.body), {
							"-webkit-transform": "translate3d(0,0,0)"
						}), "contentWindow" in this ? T.bind(this.contentWindow, "scroll", T.onscroll) : T.bind(o, "scroll", T.onscroll), M.enablemousewheel && T.mousewheel(o, T.onmousewheel), M.enablekeyboard && T.bind(o, P.isopera ? "keypress" : "keydown", T.onkeypress), P.cantouch ? (T.bind(o, "touchstart", T.ontouchstart), T.bind(o, "touchmove", T.ontouchmove)) : M.emulatetouch && (T.bind(o, "mousedown", T.ontouchstart), T.bind(o, "mousemove", function(e) {
							return T.ontouchmove(e, !0)
						}), M.grabcursorenabled && P.cursorgrabvalue && T.css(a(o.body), {
							cursor: P.cursorgrabvalue
						})), T.bind(o, "mouseup", T.ontouchend), T.zoom && (M.dblclickzoom && T.bind(o, "dblclick", T.doZoom), T.ongesturezoom && T.bind(o, "gestureend", T.ongesturezoom))
					};
					this.doc[0].readyState && "complete" === this.doc[0].readyState && setTimeout(function() {
						_.call(T.doc[0], !1)
					}, 500), T.bind(this.doc, "load", _)
				}
			}, this.showCursor = function(e, o) {
				if (T.cursortimeout && (clearTimeout(T.cursortimeout), T.cursortimeout = 0), T.rail) {
					if (T.autohidedom && (T.autohidedom.stop().css({
							opacity: M.cursoropacitymax
						}), T.cursoractive = !0), T.rail.drag && 1 == T.rail.drag.pt || (void 0 !== e && e !== !1 && (T.scroll.y = e / T.scrollratio.y | 0), void 0 !== o && (T.scroll.x = o / T.scrollratio.x | 0)), T.cursor.css({
							height: T.cursorheight,
							top: T.scroll.y
						}), T.cursorh) {
						var t = T.hasreversehr ? T.scrollvaluemaxw - T.scroll.x : T.scroll.x;
						T.cursorh.css({
							width: T.cursorwidth,
							left: !T.rail.align && T.rail.visibility ? t + T.rail.width : t
						}), T.cursoractive = !0
					}
					T.zoom && T.zoom.stop().css({
						opacity: M.cursoropacitymax
					})
				}
			}, this.hideCursor = function(e) {
				T.cursortimeout || T.rail && T.autohidedom && (T.hasmousefocus && "leave" === M.autohidemode || (T.cursortimeout = setTimeout(function() {
					T.rail.active && T.showonmouseevent || (T.autohidedom.stop().animate({
						opacity: M.cursoropacitymin
					}), T.zoom && T.zoom.stop().animate({
						opacity: M.cursoropacitymin
					}), T.cursoractive = !1), T.cursortimeout = 0
				}, e || M.hidecursordelay)))
			}, this.noticeCursor = function(e, o, t) {
				T.showCursor(o, t), T.rail.active || T.hideCursor(e)
			}, this.getContentSize = T.ispage ? function() {
				return {
					w: Math.max(c.body.scrollWidth, c.documentElement.scrollWidth),
					h: Math.max(c.body.scrollHeight, c.documentElement.scrollHeight)
				}
			} : T.haswrapper ? function() {
				return {
					w: T.doc[0].offsetWidth,
					h: T.doc[0].offsetHeight
				}
			} : function() {
				return {
					w: T.docscroll[0].scrollWidth,
					h: T.docscroll[0].scrollHeight
				}
			}, this.onResize = function(e, o) {
				if (!T || !T.win) return !1;
				var t = T.page.maxh,
					r = T.page.maxw,
					i = T.view.h,
					s = T.view.w;
				if (T.view = {
						w: T.ispage ? T.win.width() : T.win[0].clientWidth,
						h: T.ispage ? T.win.height() : T.win[0].clientHeight
					}, T.page = o ? o : T.getContentSize(), T.page.maxh = Math.max(0, T.page.h - T.view.h), T.page.maxw = Math.max(0, T.page.w - T.view.w), T.page.maxh == t && T.page.maxw == r && T.view.w == s && T.view.h == i) {
					if (T.ispage) return T;
					var n = T.win.offset();
					if (T.lastposition) {
						var l = T.lastposition;
						if (l.top == n.top && l.left == n.left) return T
					}
					T.lastposition = n
				}
				if (0 === T.page.maxh ? (T.hideRail(), T.scrollvaluemax = 0, T.scroll.y = 0, T.scrollratio.y = 0, T.cursorheight = 0, T.setScrollTop(0), T.rail && (T.rail.scrollable = !1)) : (T.page.maxh -= M.railpadding.top + M.railpadding.bottom, T.rail.scrollable = !0), 0 === T.page.maxw ? (T.hideRailHr(), T.scrollvaluemaxw = 0, T.scroll.x = 0, T.scrollratio.x = 0, T.cursorwidth = 0, T.setScrollLeft(0), T.railh && (T.railh.scrollable = !1)) : (T.page.maxw -= M.railpadding.left + M.railpadding.right, T.railh && (T.railh.scrollable = M.horizrailenabled)), T.railslocked = T.locked || 0 === T.page.maxh && 0 === T.page.maxw, T.railslocked) return T.ispage || T.updateScrollBar(T.view), !1;
				T.hidden || (T.rail.visibility || T.showRail(), T.railh && !T.railh.visibility && T.showRailHr()), T.istextarea && T.win.css("resize") && "none" != T.win.css("resize") && (T.view.h -= 20), T.cursorheight = Math.min(T.view.h, Math.round(T.view.h * (T.view.h / T.page.h))), T.cursorheight = M.cursorfixedheight ? M.cursorfixedheight : Math.max(M.cursorminheight, T.cursorheight), T.cursorwidth = Math.min(T.view.w, Math.round(T.view.w * (T.view.w / T.page.w))), T.cursorwidth = M.cursorfixedheight ? M.cursorfixedheight : Math.max(M.cursorminheight, T.cursorwidth), T.scrollvaluemax = T.view.h - T.cursorheight - (M.railpadding.top + M.railpadding.bottom), T.hasborderbox || (T.scrollvaluemax -= T.cursor[0].offsetHeight - T.cursor[0].clientHeight), T.railh && (T.railh.width = T.page.maxh > 0 ? T.view.w - T.rail.width : T.view.w, T.scrollvaluemaxw = T.railh.width - T.cursorwidth - (M.railpadding.left + M.railpadding.right)), T.ispage || T.updateScrollBar(T.view), T.scrollratio = {
					x: T.page.maxw / T.scrollvaluemaxw,
					y: T.page.maxh / T.scrollvaluemax
				};
				var a = T.getScrollTop();
				return a > T.page.maxh ? T.doScrollTop(T.page.maxh) : (T.scroll.y = T.getScrollTop() / T.scrollratio.y | 0, T.scroll.x = T.getScrollLeft() / T.scrollratio.x | 0, T.cursoractive && T.noticeCursor()), T.scroll.y && 0 === T.getScrollTop() && T.doScrollTo(T.scroll.y * T.scrollratio.y | 0), T
			}, this.resize = T.onResize;
			var O = 0;
			this.onscreenresize = function(e) {
				clearTimeout(O);
				var o = !T.ispage && !T.haswrapper;
				o && T.hideRails(), O = setTimeout(function() {
					T && (o && T.showRails(), T.resize()), O = 0
				}, 120)
			}, this.lazyResize = function(e) {
				return clearTimeout(O), e = isNaN(e) ? 240 : e, O = setTimeout(function() {
					T && T.resize(), O = 0
				}, e), T
			}, this.jqbind = function(e, o, t) {
				T.events.push({
					e: e,
					n: o,
					f: t,
					q: !0
				}), a(e).on(o, t)
			}, this.mousewheel = function(e, o, t) {
				var r = "jquery" in e ? e[0] : e;
				if ("onwheel" in c.createElement("div")) T._bind(r, "wheel", o, t || !1);
				else {
					var i = void 0 !== c.onmousewheel ? "mousewheel" : "DOMMouseScroll";
					x(r, i, o, t || !1), "DOMMouseScroll" == i && x(r, "MozMousePixelScroll", o, t || !1)
				}
			};
			var Y = !1;
			if (P.haseventlistener) {
				try {
					var H = Object.defineProperty({}, "passive", {
						get: function() {
							Y = !0
						}
					});
					d.addEventListener("test", null, H)
				} catch (B) {}
				this.stopPropagation = function(e) {
					return e ? (e = e.original ? e.original : e, e.stopPropagation(), !1) : !1
				}, this.cancelEvent = function(e) {
					return e.cancelable && e.preventDefault(), e.stopImmediatePropagation(), e.preventManipulation && e.preventManipulation(), !1
				}
			} else Event.prototype.preventDefault = function() {
				this.returnValue = !1
			}, Event.prototype.stopPropagation = function() {
				this.cancelBubble = !0
			}, d.constructor.prototype.addEventListener = c.constructor.prototype.addEventListener = Element.prototype.addEventListener = function(e, o, t) {
				this.attachEvent("on" + e, o)
			}, d.constructor.prototype.removeEventListener = c.constructor.prototype.removeEventListener = Element.prototype.removeEventListener = function(e, o, t) {
				this.detachEvent("on" + e, o)
			}, this.cancelEvent = function(e) {
				return e = e || d.event, e && (e.cancelBubble = !0, e.cancel = !0, e.returnValue = !1), !1
			}, this.stopPropagation = function(e) {
				return e = e || d.event, e && (e.cancelBubble = !0), !1
			};
			this.delegate = function(e, o, t, r, i) {
				var s = h[o] || !1;
				s || (s = {
					a: [],
					l: [],
					f: function(e) {
						for (var o = s.l, t = o.length - 1, r = !1, i = t; i >= 0; i--)
							if (r = o[i].call(e.target, e), r === !1) return !1;
						return r
					}
				}, T.bind(e, o, s.f, r, i), h[o] = s), T.ispage ? (s.a = [T.id].concat(s.a), s.l = [t].concat(s.l)) : (s.a.push(T.id), s.l.push(t))
			}, this.undelegate = function(e, o, t, r, i) {
				var s = h[o] || !1;
				if (s && s.l)
					for (var n = 0, l = s.l.length; l > n; n++) s.a[n] === T.id && (s.a.splice(n), s.l.splice(n), 0 === s.a.length && (T._unbind(e, o, s.l.f), h[o] = null))
			}, this.bind = function(e, o, t, r, i) {
				var s = "jquery" in e ? e[0] : e;
				T._bind(s, o, t, r || !1, i || !1)
			}, this._bind = function(e, o, t, r, i) {
				T.events.push({
					e: e,
					n: o,
					f: t,
					b: r,
					q: !1
				}), Y && i ? e.addEventListener(o, t, {
					passive: !1,
					capture: r
				}) : e.addEventListener(o, t, r || !1)
			}, this._unbind = function(e, o, t, r) {
				h[o] ? T.undelegate(e, o, t, r) : e.removeEventListener(o, t, r)
			}, this.unbindAll = function() {
				for (var e = 0; e < T.events.length; e++) {
					var o = T.events[e];
					o.q ? o.e.unbind(o.n, o.f) : T._unbind(o.e, o.n, o.f, o.b)
				}
			}, this.showRails = function() {
				return T.showRail().showRailHr()
			}, this.showRail = function() {
				return 0 === T.page.maxh || !T.ispage && "none" == T.win.css("display") || (T.rail.visibility = !0, T.rail.css("display", "block")), T
			}, this.showRailHr = function() {
				return T.railh && (0 === T.page.maxw || !T.ispage && "none" == T.win.css("display") || (T.railh.visibility = !0, T.railh.css("display", "block"))), T
			}, this.hideRails = function() {
				return T.hideRail().hideRailHr()
			}, this.hideRail = function() {
				return T.rail.visibility = !1, T.rail.css("display", "none"), T
			}, this.hideRailHr = function() {
				return T.railh && (T.railh.visibility = !1, T.railh.css("display", "none")), T
			}, this.show = function() {
				return T.hidden = !1, T.railslocked = !1, T.showRails()
			}, this.hide = function() {
				return T.hidden = !0, T.railslocked = !0, T.hideRails()
			}, this.toggle = function() {
				return T.hidden ? T.show() : T.hide()
			}, this.remove = function() {
				T.stop(), T.cursortimeout && clearTimeout(T.cursortimeout);
				for (var e in T.delaylist) T.delaylist[e] && m(T.delaylist[e].h);
				T.doZoomOut(), T.unbindAll(), P.isie9 && T.win[0].detachEvent("onpropertychange", T.onAttributeChange), T.observer !== !1 && T.observer.disconnect(), T.observerremover !== !1 && T.observerremover.disconnect(), T.observerbody !== !1 && T.observerbody.disconnect(), T.events = null, T.cursor && T.cursor.remove(), T.cursorh && T.cursorh.remove(), T.rail && T.rail.remove(), T.railh && T.railh.remove(), T.zoom && T.zoom.remove();
				for (var o = 0; o < T.saved.css.length; o++) {
					var t = T.saved.css[o];
					t[0].css(t[1], void 0 === t[2] ? "" : t[2])
				}
				T.saved = !1, T.me.data("__nicescroll", "");
				var r = a.nicescroll;
				r.each(function(e) {
					if (this && this.id === T.id) {
						delete r[e];
						for (var o = ++e; o < r.length; o++, e++) r[e] = r[o];
						r.length--, r.length && delete r[r.length]
					}
				});
				for (var i in T) T[i] = null, delete T[i];
				T = null
			}, this.scrollstart = function(e) {
				return this.onscrollstart = e, T
			}, this.scrollend = function(e) {
				return this.onscrollend = e, T
			}, this.scrollcancel = function(e) {
				return this.onscrollcancel = e, T
			}, this.zoomin = function(e) {
				return this.onzoomin = e, T
			}, this.zoomout = function(e) {
				return this.onzoomout = e, T
			}, this.isScrollable = function(e) {
				var o = e.target ? e.target : e;
				if ("OPTION" == o.nodeName) return !0;
				for (; o && 1 == o.nodeType && o !== this.me[0] && !/^BODY|HTML/.test(o.nodeName);) {
					var t = a(o),
						r = t.css("overflowY") || t.css("overflowX") || t.css("overflow") || "";
					if (/scroll|auto/.test(r)) return o.clientHeight != o.scrollHeight;
					o = o.parentNode ? o.parentNode : !1
				}
				return !1
			}, this.getViewport = function(e) {
				for (var o = e && e.parentNode ? e.parentNode : !1; o && 1 == o.nodeType && !/^BODY|HTML/.test(o.nodeName);) {
					var t = a(o);
					if (/fixed|absolute/.test(t.css("position"))) return t;
					var r = t.css("overflowY") || t.css("overflowX") || t.css("overflow") || "";
					if (/scroll|auto/.test(r) && o.clientHeight != o.scrollHeight) return t;
					if (t.getNiceScroll().length > 0) return t;
					o = o.parentNode ? o.parentNode : !1
				}
				return !1
			}, this.triggerScrollStart = function(e, o, t, r, i) {
				if (T.onscrollstart) {
					var s = {
						type: "scrollstart",
						current: {
							x: e,
							y: o
						},
						request: {
							x: t,
							y: r
						},
						end: {
							x: T.newscrollx,
							y: T.newscrolly
						},
						speed: i
					};
					T.onscrollstart.call(T, s)
				}
			}, this.triggerScrollEnd = function() {
				if (T.onscrollend) {
					var e = T.getScrollLeft(),
						o = T.getScrollTop(),
						t = {
							type: "scrollend",
							current: {
								x: e,
								y: o
							},
							end: {
								x: e,
								y: o
							}
						};
					T.onscrollend.call(T, t)
				}
			};
			var X = 0,
				D = 0,
				A = 0,
				q = 1,
				j = !1;
			if (this.onmousewheel = function(e) {
					if (T.wheelprevented || T.locked) return !1;
					if (T.railslocked) return T.debounced("checkunlock", T.resize, 250), !1;
					if (T.rail.drag) return T.cancelEvent(e);
					if ("auto" === M.oneaxismousemode && 0 !== e.deltaX && (M.oneaxismousemode = !1), M.oneaxismousemode && 0 === e.deltaX && !T.rail.scrollable) return T.railh && T.railh.scrollable ? T.onmousewheelhr(e) : !0;
					var o = v(),
						t = !1;
					if (M.preservenativescrolling && T.checkarea + 600 < o && (T.nativescrollingarea = T.isScrollable(e), t = !0), T.checkarea = o, T.nativescrollingarea) return !0;
					var r = k(e, !1, t);
					return r && (T.checkarea = 0), r
				}, this.onmousewheelhr = function(e) {
					if (!T.wheelprevented) {
						if (T.railslocked || !T.railh.scrollable) return !0;
						if (T.rail.drag) return T.cancelEvent(e);
						var o = v(),
							t = !1;
						return M.preservenativescrolling && T.checkarea + 600 < o && (T.nativescrollingarea = T.isScrollable(e), t = !0), T.checkarea = o, T.nativescrollingarea ? !0 : T.railslocked ? T.cancelEvent(e) : k(e, !0, t)
					}
				}, this.stop = function() {
					return T.cancelScroll(), T.scrollmon && T.scrollmon.stop(), T.cursorfreezed = !1, T.scroll.y = Math.round(T.getScrollTop() * (1 / T.scrollratio.y)), T.noticeCursor(), T
				}, this.getTransitionSpeed = function(e) {
					return 80 + e / 72 * M.scrollspeed | 0
				}, M.smoothscroll)
				if (T.ishwscroll && P.hastransition && M.usetransition && M.smoothscroll) {
					var F = "";
					this.resetTransition = function() {
						F = "", T.doc.css(P.prefixstyle + "transition-duration", "0ms")
					}, this.prepareTransition = function(e, o) {
						var t = o ? e : T.getTransitionSpeed(e),
							r = t + "ms";
						return F !== r && (F = r, T.doc.css(P.prefixstyle + "transition-duration", r)), t
					}, this.doScrollLeft = function(e, o) {
						var t = T.scrollrunning ? T.newscrolly : T.getScrollTop();
						T.doScrollPos(e, t, o)
					}, this.doScrollTop = function(e, o) {
						var t = T.scrollrunning ? T.newscrollx : T.getScrollLeft();
						T.doScrollPos(t, e, o)
					}, this.cursorupdate = {
						running: !1,
						start: function() {
							var e = this;
							if (!e.running) {
								e.running = !0;
								var o = function() {
									e.running && p(o), T.showCursor(T.getScrollTop(), T.getScrollLeft()), T.notifyScrollEvent(T.win[0])
								};
								p(o)
							}
						},
						stop: function() {
							this.running = !1
						}
					}, this.doScrollPos = function(e, o, t) {
						var r = T.getScrollTop(),
							i = T.getScrollLeft();
						if (((T.newscrolly - r) * (o - r) < 0 || (T.newscrollx - i) * (e - i) < 0) && T.cancelScroll(), M.bouncescroll ? (0 > o ? o = o / 2 | 0 : o > T.page.maxh && (o = T.page.maxh + (o - T.page.maxh) / 2 | 0), 0 > e ? e = e / 2 | 0 : e > T.page.maxw && (e = T.page.maxw + (e - T.page.maxw) / 2 | 0)) : (0 > o ? o = 0 : o > T.page.maxh && (o = T.page.maxh), 0 > e ? e = 0 : e > T.page.maxw && (e = T.page.maxw)), T.scrollrunning && e == T.newscrollx && o == T.newscrolly) return !1;
						T.newscrolly = o, T.newscrollx = e;
						var s = T.getScrollTop(),
							n = T.getScrollLeft(),
							l = {};
						l.x = e - n, l.y = o - s;
						var a = 0 | Math.sqrt(l.x * l.x + l.y * l.y),
							c = T.prepareTransition(a);
						T.scrollrunning || (T.scrollrunning = !0, T.triggerScrollStart(n, s, e, o, c), T.cursorupdate.start()), T.scrollendtrapped = !0, P.transitionend || (T.scrollendtrapped && clearTimeout(T.scrollendtrapped), T.scrollendtrapped = setTimeout(T.onScrollTransitionEnd, c)), T.setScrollTop(T.newscrolly), T.setScrollLeft(T.newscrollx)
					}, this.cancelScroll = function() {
						if (!T.scrollendtrapped) return !0;
						var e = T.getScrollTop(),
							o = T.getScrollLeft();
						return T.scrollrunning = !1, P.transitionend || clearTimeout(P.transitionend), T.scrollendtrapped = !1, T.resetTransition(), T.setScrollTop(e), T.railh && T.setScrollLeft(o), T.timerscroll && T.timerscroll.tm && clearInterval(T.timerscroll.tm), T.timerscroll = !1, T.cursorfreezed = !1, T.cursorupdate.stop(), T.showCursor(e, o), T
					}, this.onScrollTransitionEnd = function() {
						if (T.scrollendtrapped) {
							var e = T.getScrollTop(),
								o = T.getScrollLeft();
							if (0 > e ? e = 0 : e > T.page.maxh && (e = T.page.maxh), 0 > o ? o = 0 : o > T.page.maxw && (o = T.page.maxw), e != T.newscrolly || o != T.newscrollx) return T.doScrollPos(o, e, M.snapbackspeed);
							T.scrollrunning && T.triggerScrollEnd(), T.scrollrunning = !1, T.scrollendtrapped = !1, T.resetTransition(), T.timerscroll = !1, T.setScrollTop(e), T.railh && T.setScrollLeft(o), T.cursorupdate.stop(), T.noticeCursor(!1, e, o), T.cursorfreezed = !1
						}
					}
				} else this.doScrollLeft = function(e, o) {
					var t = T.scrollrunning ? T.newscrolly : T.getScrollTop();
					T.doScrollPos(e, t, o)
				}, this.doScrollTop = function(e, o) {
					var t = T.scrollrunning ? T.newscrollx : T.getScrollLeft();
					T.doScrollPos(t, e, o)
				}, this.doScrollPos = function(e, o, t) {
					var r = T.getScrollTop(),
						i = T.getScrollLeft();
					((T.newscrolly - r) * (o - r) < 0 || (T.newscrollx - i) * (e - i) < 0) && T.cancelScroll();
					var s = !1;
					if (T.bouncescroll && T.rail.visibility || (0 > o ? (o = 0, s = !0) : o > T.page.maxh && (o = T.page.maxh, s = !0)), T.bouncescroll && T.railh.visibility || (0 > e ? (e = 0, s = !0) : e > T.page.maxw && (e = T.page.maxw, s = !0)), T.scrollrunning && T.newscrolly === o && T.newscrollx === e) return !0;
					T.newscrolly = o, T.newscrollx = e, T.dst = {}, T.dst.x = e - i, T.dst.y = o - r, T.dst.px = i, T.dst.py = r;
					var n = 0 | Math.sqrt(T.dst.x * T.dst.x + T.dst.y * T.dst.y),
						l = T.getTransitionSpeed(n);
					T.bzscroll = {};
					var a = s ? 1 : .58;
					T.bzscroll.x = new R(i, T.newscrollx, l, 0, 0, a, 1), T.bzscroll.y = new R(r, T.newscrolly, l, 0, 0, a, 1);
					var c = (v(), function() {
						if (T.scrollrunning) {
							var e = T.bzscroll.y.getPos();
							T.setScrollLeft(T.bzscroll.x.getNow()), T.setScrollTop(T.bzscroll.y.getNow()), 1 >= e ? T.timer = p(c) : (T.scrollrunning = !1, T.timer = 0, T.triggerScrollEnd())
						}
					});
					T.scrollrunning || (T.triggerScrollStart(i, r, e, o, l), T.scrollrunning = !0, T.timer = p(c))
				}, this.cancelScroll = function() {
					return T.timer && m(T.timer), T.timer = 0, T.bzscroll = !1, T.scrollrunning = !1, T
				};
			else this.doScrollLeft = function(e, o) {
				var t = T.getScrollTop();
				T.doScrollPos(e, t, o)
			}, this.doScrollTop = function(e, o) {
				var t = T.getScrollLeft();
				T.doScrollPos(t, e, o)
			}, this.doScrollPos = function(e, o, t) {
				var r = e > T.page.maxw ? T.page.maxw : e;
				0 > r && (r = 0);
				var i = o > T.page.maxh ? T.page.maxh : o;
				0 > i && (i = 0), T.synched("scroll", function() {
					T.setScrollTop(i), T.setScrollLeft(r)
				})
			}, this.cancelScroll = function() {};
			this.doScrollBy = function(e, o) {
				z(0, e)
			}, this.doScrollLeftBy = function(e, o) {
				z(e, 0)
			}, this.doScrollTo = function(e, o) {
				var t = o ? Math.round(e * T.scrollratio.y) : e;
				0 > t ? t = 0 : t > T.page.maxh && (t = T.page.maxh), T.cursorfreezed = !1, T.doScrollTop(e)
			}, this.checkContentSize = function() {
				var e = T.getContentSize();
				e.h == T.page.h && e.w == T.page.w || T.resize(!1, e)
			}, T.onscroll = function(e) {
				T.rail.drag || T.cursorfreezed || T.synched("scroll", function() {
					T.scroll.y = Math.round(T.getScrollTop() / T.scrollratio.y), T.railh && (T.scroll.x = Math.round(T.getScrollLeft() / T.scrollratio.x)), T.noticeCursor()
				})
			}, T.bind(T.docscroll, "scroll", T.onscroll), this.doZoomIn = function(e) {
				if (!T.zoomactive) {
					T.zoomactive = !0, T.zoomrestore = {
						style: {}
					};
					var o = ["position", "top", "left", "zIndex", "backgroundColor", "marginTop", "marginBottom", "marginLeft", "marginRight"],
						t = T.win[0].style;
					for (var r in o) {
						var i = o[r];
						T.zoomrestore.style[i] = void 0 !== t[i] ? t[i] : ""
					}
					T.zoomrestore.style.width = T.win.css("width"), T.zoomrestore.style.height = T.win.css("height"), T.zoomrestore.padding = {
						w: T.win.outerWidth() - T.win.width(),
						h: T.win.outerHeight() - T.win.height()
					}, P.isios4 && (T.zoomrestore.scrollTop = u.scrollTop(), u.scrollTop(0)), T.win.css({
						position: P.isios4 ? "absolute" : "fixed",
						top: 0,
						left: 0,
						zIndex: l + 100,
						margin: 0
					});
					var s = T.win.css("backgroundColor");
					return ("" === s || /transparent|rgba\(0, 0, 0, 0\)|rgba\(0,0,0,0\)/.test(s)) && T.win.css("backgroundColor", "#fff"), T.rail.css({
						zIndex: l + 101
					}), T.zoom.css({
						zIndex: l + 102
					}), T.zoom.css("backgroundPosition", "0 -18px"), T.resizeZoom(), T.onzoomin && T.onzoomin.call(T), T.cancelEvent(e)
				}
			}, this.doZoomOut = function(e) {
				return T.zoomactive ? (T.zoomactive = !1, T.win.css("margin", ""), T.win.css(T.zoomrestore.style), P.isios4 && u.scrollTop(T.zoomrestore.scrollTop), T.rail.css({
					"z-index": T.zindex
				}), T.zoom.css({
					"z-index": T.zindex
				}), T.zoomrestore = !1, T.zoom.css("backgroundPosition", "0 0"), T.onResize(), T.onzoomout && T.onzoomout.call(T), T.cancelEvent(e)) : void 0
			}, this.doZoom = function(e) {
				return T.zoomactive ? T.doZoomOut(e) : T.doZoomIn(e)
			}, this.resizeZoom = function() {
				if (T.zoomactive) {
					var e = T.getScrollTop();
					T.win.css({
						width: u.width() - T.zoomrestore.padding.w + "px",
						height: u.height() - T.zoomrestore.padding.h + "px"
					}), T.onResize(), T.setScrollTop(Math.min(T.page.maxh, e))
				}
			}, this.init(), a.nicescroll.push(this)
		},
		S = function(e) {
			var o = this;
			this.nc = e, this.lastx = 0, this.lasty = 0, this.speedx = 0, this.speedy = 0, this.lasttime = 0, this.steptime = 0, this.snapx = !1, this.snapy = !1, this.demulx = 0, this.demuly = 0, this.lastscrollx = -1, this.lastscrolly = -1, this.chkx = 0, this.chky = 0, this.timer = 0, this.reset = function(e, t) {
				o.stop(), o.steptime = 0, o.lasttime = v(), o.speedx = 0, o.speedy = 0, o.lastx = e, o.lasty = t, o.lastscrollx = -1, o.lastscrolly = -1
			}, this.update = function(e, t) {
				var r = v();
				o.steptime = r - o.lasttime, o.lasttime = r;
				var i = t - o.lasty,
					s = e - o.lastx,
					n = o.nc.getScrollTop(),
					l = o.nc.getScrollLeft(),
					a = n + i,
					c = l + s;
				o.snapx = 0 > c || c > o.nc.page.maxw, o.snapy = 0 > a || a > o.nc.page.maxh, o.speedx = s, o.speedy = i, o.lastx = e, o.lasty = t
			}, this.stop = function() {
				o.nc.unsynched("domomentum2d"), o.timer && clearTimeout(o.timer), o.timer = 0, o.lastscrollx = -1, o.lastscrolly = -1
			}, this.doSnapy = function(e, t) {
				var r = !1;
				0 > t ? (t = 0, r = !0) : t > o.nc.page.maxh && (t = o.nc.page.maxh, r = !0), 0 > e ? (e = 0, r = !0) : e > o.nc.page.maxw && (e = o.nc.page.maxw, r = !0), r ? o.nc.doScrollPos(e, t, o.nc.opt.snapbackspeed) : o.nc.triggerScrollEnd()
			}, this.doMomentum = function(e) {
				var t = v(),
					r = e ? t + e : o.lasttime,
					i = o.nc.getScrollLeft(),
					s = o.nc.getScrollTop(),
					n = o.nc.page.maxh,
					l = o.nc.page.maxw;
				o.speedx = l > 0 ? Math.min(60, o.speedx) : 0, o.speedy = n > 0 ? Math.min(60, o.speedy) : 0;
				var a = r && 60 >= t - r;
				(0 > s || s > n || 0 > i || i > l) && (a = !1);
				var c = o.speedy && a ? o.speedy : !1,
					d = o.speedx && a ? o.speedx : !1;
				if (c || d) {
					var u = Math.max(16, o.steptime);
					if (u > 50) {
						var h = u / 50;
						o.speedx *= h, o.speedy *= h, u = 50
					}
					o.demulxy = 0, o.lastscrollx = o.nc.getScrollLeft(), o.chkx = o.lastscrollx, o.lastscrolly = o.nc.getScrollTop(), o.chky = o.lastscrolly;
					var p = o.lastscrollx,
						m = o.lastscrolly,
						f = function() {
							var e = v() - t > 600 ? .04 : .02;
							o.speedx && (p = Math.floor(o.lastscrollx - o.speedx * (1 - o.demulxy)), o.lastscrollx = p, (0 > p || p > l) && (e = .1)), o.speedy && (m = Math.floor(o.lastscrolly - o.speedy * (1 - o.demulxy)), o.lastscrolly = m, (0 > m || m > n) && (e = .1)), o.demulxy = Math.min(1, o.demulxy + e), o.nc.synched("domomentum2d", function() {
								if (o.speedx) {
									o.nc.getScrollLeft();
									o.chkx = p, o.nc.setScrollLeft(p)
								}
								if (o.speedy) {
									o.nc.getScrollTop();
									o.chky = m, o.nc.setScrollTop(m)
								}
								o.timer || (o.nc.hideCursor(), o.doSnapy(p, m))
							}), o.demulxy < 1 ? o.timer = setTimeout(f, u) : (o.stop(), o.nc.hideCursor(), o.doSnapy(p, m))
						};
					f()
				} else o.doSnapy(o.nc.getScrollLeft(), o.nc.getScrollTop())
			}
		},
		z = e.fn.scrollTop;
	e.cssHooks.pageYOffset = {
		get: function(e, o, t) {
			var r = a.data(e, "__nicescroll") || !1;
			return r && r.ishwscroll ? r.getScrollTop() : z.call(e)
		},
		set: function(e, o) {
			var t = a.data(e, "__nicescroll") || !1;
			return t && t.ishwscroll ? t.setScrollTop(parseInt(o)) : z.call(e, o), this
		}
	}, e.fn.scrollTop = function(e) {
		if (void 0 === e) {
			var o = this[0] ? a.data(this[0], "__nicescroll") || !1 : !1;
			return o && o.ishwscroll ? o.getScrollTop() : z.call(this)
		}
		return this.each(function() {
			var o = a.data(this, "__nicescroll") || !1;
			o && o.ishwscroll ? o.setScrollTop(parseInt(e)) : z.call(a(this), e)
		})
	};
	var k = e.fn.scrollLeft;
	a.cssHooks.pageXOffset = {
		get: function(e, o, t) {
			var r = a.data(e, "__nicescroll") || !1;
			return r && r.ishwscroll ? r.getScrollLeft() : k.call(e)
		},
		set: function(e, o) {
			var t = a.data(e, "__nicescroll") || !1;
			return t && t.ishwscroll ? t.setScrollLeft(parseInt(o)) : k.call(e, o), this
		}
	}, e.fn.scrollLeft = function(e) {
		if (void 0 === e) {
			var o = this[0] ? a.data(this[0], "__nicescroll") || !1 : !1;
			return o && o.ishwscroll ? o.getScrollLeft() : k.call(this)
		}
		return this.each(function() {
			var o = a.data(this, "__nicescroll") || !1;
			o && o.ishwscroll ? o.setScrollLeft(parseInt(e)) : k.call(a(this), e)
		})
	};
	var T = function(e) {
		var o = this;
		if (this.length = 0, this.name = "nicescrollarray", this.each = function(e) {
				return a.each(o, e), o
			}, this.push = function(e) {
				o[o.length] = e, o.length++
			}, this.eq = function(e) {
				return o[e]
			}, e)
			for (var t = 0; t < e.length; t++) {
				var r = a.data(e[t], "__nicescroll") || !1;
				r && (this[this.length] = r, this.length++)
			}
		return this
	};
	t(T.prototype, ["show", "hide", "toggle", "onResize", "resize", "remove", "stop", "doScrollPos"], function(e, o) {
		e[o] = function() {
			var e = arguments;
			return this.each(function() {
				this[o].apply(this, e)
			})
		}
	}), e.fn.getNiceScroll = function(e) {
		return void 0 === e ? new T(this) : this[e] && a.data(this[e], "__nicescroll") || !1
	};
	var E = e.expr.pseudos || e.expr[":"];
	E.nicescroll = function(e) {
		return void 0 !== a.data(e, "__nicescroll")
	}, a.fn.niceScroll = function(e, o) {
		void 0 !== o || "object" != typeof e || "jquery" in e || (o = e, e = !1);
		var t = new T;
		return this.each(function() {
			var r = a(this),
				i = a.extend({}, o);
			if (e) {
				var s = a(e);
				i.doc = s.length > 1 ? a(e, r) : s, i.win = r
			}
			var n = !("doc" in i);
			n || "win" in i || (i.win = r);
			var l = r.data("__nicescroll") || !1;
			l || (i.doc = i.doc || r, l = new x(i, r), r.data("__nicescroll", l)), t.push(l)
		}), 1 === t.length ? t[0] : t
	}, d.NiceScroll = {
		getjQuery: function() {
			return e
		}
	}, a.nicescroll || (a.nicescroll = new T, a.nicescroll.options = w)
});
! function(t) {
	function a(t, a) {
		for (var e = window, r = (t || "").split("."); e && r.length;) e = e[r.shift()];
		return "function" == typeof e ? e : (a.push(t), Function.constructor.apply(null, a))
	}

	function e(t) {
		return "GET" === t || "POST" === t
	}

	function r(t, a) {
		e(a) || t.setRequestHeader("X-HTTP-Method-Override", a)
	}

	function n(a, e, r) {
		var n; - 1 === r.indexOf("application/x-javascript") && (n = (a.getAttribute("data-ajax-mode") || "").toUpperCase(), t(a.getAttribute("data-ajax-update")).each(function(a, r) {
			switch (n) {
				case "BEFORE":
					t(r).prepend(e);
					break;
				case "AFTER":
					t(r).append(e);
					break;
				case "REPLACE-WITH":
					t(r).replaceWith(e);
					break;
				default:
					t(r).html(e)
			}
		}))
	}

	function u(u, i) {
		var o, d, c, s;
		o = u.getAttribute("data-ajax-confirm"), o && !window.confirm(o) || (d = t(u.getAttribute("data-ajax-loading")), s = parseInt(u.getAttribute("data-ajax-loading-duration"), 10) || 0, t.extend(i, {
			type: u.getAttribute("data-ajax-method") || void 0,
			url: u.getAttribute("data-ajax-url") || void 0,
			cache: "true" === (u.getAttribute("data-ajax-cache") || "").toLowerCase(),
			beforeSend: function(t) {
				var e;
				return r(t, c), e = a(u.getAttribute("data-ajax-begin"), ["xhr"]).apply(u, arguments), e !== !1 && d.show(s), e
			},
			complete: function() {
				d.hide(s), a(u.getAttribute("data-ajax-complete"), ["xhr", "status"]).apply(u, arguments)
			},
			success: function(t, e, r) {
				n(u, t, r.getResponseHeader("Content-Type") || "text/html"), a(u.getAttribute("data-ajax-success"), ["data", "status", "xhr"]).apply(u, arguments)
			},
			error: function() {
				a(u.getAttribute("data-ajax-failure"), ["xhr", "status", "error"]).apply(u, arguments)
			}
		}), i.data.push({
			name: "X-Requested-With",
			value: "XMLHttpRequest"
		}), c = i.type.toUpperCase(), e(c) || (i.type = "POST", i.data.push({
			name: "X-HTTP-Method-Override",
			value: c
		})), t.ajax(i))
	}

	function i(a) {
		var e = t(a).data(c);
		return !e || !e.validate || e.validate()
	}
	var o = "unobtrusiveAjaxClick",
		d = "unobtrusiveAjaxClickTarget",
		c = "unobtrusiveValidation";
	t(document).on("click", "a[data-ajax=true]", function(t) {
		t.preventDefault(), u(this, {
			url: this.href,
			type: "GET",
			data: []
		})
	}), t(document).on("click", "form[data-ajax=true] input[type=image]", function(a) {
		var e = a.target.name,
			r = t(a.target),
			n = t(r.parents("form")[0]),
			u = r.offset();
		n.data(o, [{
			name: e + ".x",
			value: Math.round(a.pageX - u.left)
		}, {
			name: e + ".y",
			value: Math.round(a.pageY - u.top)
		}]), setTimeout(function() {
			n.removeData(o)
		}, 0)
	}), t(document).on("click", "form[data-ajax=true] :submit", function(a) {
		var e = a.currentTarget.name,
			r = t(a.target),
			n = t(r.parents("form")[0]);
		n.data(o, e ? [{
			name: e,
			value: a.currentTarget.value
		}] : []), n.data(d, r), setTimeout(function() {
			n.removeData(o), n.removeData(d)
		}, 0)
	}), t(document).on("submit", "form[data-ajax=true]", function(a) {
		var e = t(this).data(o) || [],
			r = t(this).data(d),
			n = r && (r.hasClass("cancel") || void 0 !== r.attr("formnovalidate"));
		a.preventDefault(), (n || i(this)) && u(this, {
			url: this.action,
			type: this.method || "GET",
			data: e.concat(t(this).serializeArray())
		})
	})
}(jQuery);
! function(t) {
	"function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof module && module.exports ? module.exports = t(require("jquery")) : t(jQuery)
}(function(t) {
	t.extend(t.fn, {
		validate: function(e) {
			if (!this.length) return void(e && e.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."));
			var i = t.data(this[0], "validator");
			return i ? i : (this.attr("novalidate", "novalidate"), i = new t.validator(e, this[0]), t.data(this[0], "validator", i), i.settings.onsubmit && (this.on("click.validate", ":submit", function(e) {
				i.submitButton = e.currentTarget, t(this).hasClass("cancel") && (i.cancelSubmit = !0), void 0 !== t(this).attr("formnovalidate") && (i.cancelSubmit = !0)
			}), this.on("submit.validate", function(e) {
				function s() {
					var s, n;
					return i.submitButton && (i.settings.submitHandler || i.formSubmitted) && (s = t("<input type='hidden'/>").attr("name", i.submitButton.name).val(t(i.submitButton).val()).appendTo(i.currentForm)), i.settings.submitHandler && !i.settings.debug ? (n = i.settings.submitHandler.call(i, i.currentForm, e), s && s.remove(), void 0 !== n ? n : !1) : !0
				}
				return i.settings.debug && e.preventDefault(), i.cancelSubmit ? (i.cancelSubmit = !1, s()) : i.form() ? i.pendingRequest ? (i.formSubmitted = !0, !1) : s() : (i.focusInvalid(), !1)
			})), i)
		},
		valid: function() {
			var e, i, s;
			return t(this[0]).is("form") ? e = this.validate().form() : (s = [], e = !0, i = t(this[0].form).validate(), this.each(function() {
				e = i.element(this) && e, e || (s = s.concat(i.errorList))
			}), i.errorList = s), e
		},
		rules: function(e, i) {
			var s, n, r, a, o, l, h = this[0],
				d = "undefined" != typeof this.attr("contenteditable") && "false" !== this.attr("contenteditable");
			if (null != h && (!h.form && d && (h.form = this.closest("form")[0], h.name = this.attr("name")), null != h.form)) {
				if (e) switch (s = t.data(h.form, "validator").settings, n = s.rules, r = t.validator.staticRules(h), e) {
					case "add":
						t.extend(r, t.validator.normalizeRule(i)), delete r.messages, n[h.name] = r, i.messages && (s.messages[h.name] = t.extend(s.messages[h.name], i.messages));
						break;
					case "remove":
						return i ? (l = {}, t.each(i.split(/\s/), function(t, e) {
							l[e] = r[e], delete r[e]
						}), l) : (delete n[h.name], r)
				}
				return a = t.validator.normalizeRules(t.extend({}, t.validator.classRules(h), t.validator.attributeRules(h), t.validator.dataRules(h), t.validator.staticRules(h)), h), a.required && (o = a.required, delete a.required, a = t.extend({
					required: o
				}, a)), a.remote && (o = a.remote, delete a.remote, a = t.extend(a, {
					remote: o
				})), a
			}
		}
	});
	var e = function(t) {
		return t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
	};
	t.extend(t.expr.pseudos || t.expr[":"], {
		blank: function(i) {
			return !e("" + t(i).val())
		},
		filled: function(i) {
			var s = t(i).val();
			return null !== s && !!e("" + s)
		},
		unchecked: function(e) {
			return !t(e).prop("checked")
		}
	}), t.validator = function(e, i) {
		this.settings = t.extend(!0, {}, t.validator.defaults, e), this.currentForm = i, this.init()
	}, t.validator.format = function(e, i) {
		return 1 === arguments.length ? function() {
			var i = t.makeArray(arguments);
			return i.unshift(e), t.validator.format.apply(this, i)
		} : void 0 === i ? e : (arguments.length > 2 && i.constructor !== Array && (i = t.makeArray(arguments).slice(1)), i.constructor !== Array && (i = [i]), t.each(i, function(t, i) {
			e = e.replace(new RegExp("\\{" + t + "\\}", "g"), function() {
				return i
			})
		}), e)
	}, t.extend(t.validator, {
		defaults: {
			messages: {},
			groups: {},
			rules: {},
			errorClass: "error",
			pendingClass: "pending",
			validClass: "valid",
			errorElement: "label",
			focusCleanup: !1,
			focusInvalid: !0,
			errorContainer: t([]),
			errorLabelContainer: t([]),
			onsubmit: !0,
			ignore: ":hidden",
			ignoreTitle: !1,
			onfocusin: function(t) {
				this.lastActive = t, this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, t, this.settings.errorClass, this.settings.validClass), this.hideThese(this.errorsFor(t)))
			},
			onfocusout: function(t) {
				this.checkable(t) || !(t.name in this.submitted) && this.optional(t) || this.element(t)
			},
			onkeyup: function(e, i) {
				var s = [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225];
				9 === i.which && "" === this.elementValue(e) || -1 !== t.inArray(i.keyCode, s) || (e.name in this.submitted || e.name in this.invalid) && this.element(e)
			},
			onclick: function(t) {
				t.name in this.submitted ? this.element(t) : t.parentNode.name in this.submitted && this.element(t.parentNode)
			},
			highlight: function(e, i, s) {
				"radio" === e.type ? this.findByName(e.name).addClass(i).removeClass(s) : t(e).addClass(i).removeClass(s)
			},
			unhighlight: function(e, i, s) {
				"radio" === e.type ? this.findByName(e.name).removeClass(i).addClass(s) : t(e).removeClass(i).addClass(s)
			}
		},
		setDefaults: function(e) {
			t.extend(t.validator.defaults, e)
		},
		messages: {
			required: "This field is required.",
			remote: "Please fix this field.",
			email: "Please enter a valid email address.",
			url: "Please enter a valid URL.",
			date: "Please enter a valid date.",
			dateISO: "Please enter a valid date (ISO).",
			number: "Please enter a valid number.",
			digits: "Please enter only digits.",
			equalTo: "Please enter the same value again.",
			maxlength: t.validator.format("Please enter no more than {0} characters."),
			minlength: t.validator.format("Please enter at least {0} characters."),
			rangelength: t.validator.format("Please enter a value between {0} and {1} characters long."),
			range: t.validator.format("Please enter a value between {0} and {1}."),
			max: t.validator.format("Please enter a value less than or equal to {0}."),
			min: t.validator.format("Please enter a value greater than or equal to {0}."),
			step: t.validator.format("Please enter a multiple of {0}.")
		},
		autoCreateRanges: !1,
		prototype: {
			init: function() {
				function e(e) {
					var i = "undefined" != typeof t(this).attr("contenteditable") && "false" !== t(this).attr("contenteditable");
					if (!this.form && i && (this.form = t(this).closest("form")[0], this.name = t(this).attr("name")), s === this.form) {
						var n = t.data(this.form, "validator"),
							r = "on" + e.type.replace(/^validate/, ""),
							a = n.settings;
						a[r] && !t(this).is(a.ignore) && a[r].call(n, this, e)
					}
				}
				this.labelContainer = t(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || t(this.currentForm), this.containers = t(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
				var i, s = this.currentForm,
					n = this.groups = {};
				t.each(this.settings.groups, function(e, i) {
					"string" == typeof i && (i = i.split(/\s/)), t.each(i, function(t, i) {
						n[i] = e
					})
				}), i = this.settings.rules, t.each(i, function(e, s) {
					i[e] = t.validator.normalizeRule(s)
				}), t(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']", e).on("click.validate", "select, option, [type='radio'], [type='checkbox']", e), this.settings.invalidHandler && t(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler)
			},
			form: function() {
				return this.checkForm(), t.extend(this.submitted, this.errorMap), this.invalid = t.extend({}, this.errorMap), this.valid() || t(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
			},
			checkForm: function() {
				this.prepareForm();
				for (var t = 0, e = this.currentElements = this.elements(); e[t]; t++) this.check(e[t]);
				return this.valid()
			},
			element: function(e) {
				var i, s, n = this.clean(e),
					r = this.validationTargetFor(n),
					a = this,
					o = !0;
				return void 0 === r ? delete this.invalid[n.name] : (this.prepareElement(r), this.currentElements = t(r), s = this.groups[r.name], s && t.each(this.groups, function(t, e) {
					e === s && t !== r.name && (n = a.validationTargetFor(a.clean(a.findByName(t))), n && n.name in a.invalid && (a.currentElements.push(n), o = a.check(n) && o))
				}), i = this.check(r) !== !1, o = o && i, i ? this.invalid[r.name] = !1 : this.invalid[r.name] = !0, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), t(e).attr("aria-invalid", !i)), o
			},
			showErrors: function(e) {
				if (e) {
					var i = this;
					t.extend(this.errorMap, e), this.errorList = t.map(this.errorMap, function(t, e) {
						return {
							message: t,
							element: i.findByName(e)[0]
						}
					}), this.successList = t.grep(this.successList, function(t) {
						return !(t.name in e)
					})
				}
				this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
			},
			resetForm: function() {
				t.fn.resetForm && t(this.currentForm).resetForm(), this.invalid = {}, this.submitted = {}, this.prepareForm(), this.hideErrors();
				var e = this.elements().removeData("previousValue").removeAttr("aria-invalid");
				this.resetElements(e)
			},
			resetElements: function(t) {
				var e;
				if (this.settings.unhighlight)
					for (e = 0; t[e]; e++) this.settings.unhighlight.call(this, t[e], this.settings.errorClass, ""), this.findByName(t[e].name).removeClass(this.settings.validClass);
				else t.removeClass(this.settings.errorClass).removeClass(this.settings.validClass)
			},
			numberOfInvalids: function() {
				return this.objectLength(this.invalid)
			},
			objectLength: function(t) {
				var e, i = 0;
				for (e in t) void 0 !== t[e] && null !== t[e] && t[e] !== !1 && i++;
				return i
			},
			hideErrors: function() {
				this.hideThese(this.toHide)
			},
			hideThese: function(t) {
				t.not(this.containers).text(""), this.addWrapper(t).hide()
			},
			valid: function() {
				return 0 === this.size()
			},
			size: function() {
				return this.errorList.length
			},
			focusInvalid: function() {
				if (this.settings.focusInvalid) try {
					t(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").trigger("focus").trigger("focusin")
				} catch (e) {}
			},
			findLastActive: function() {
				var e = this.lastActive;
				return e && 1 === t.grep(this.errorList, function(t) {
					return t.element.name === e.name
				}).length && e
			},
			elements: function() {
				var e = this,
					i = {};
				return t(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function() {
					var s = this.name || t(this).attr("name"),
						n = "undefined" != typeof t(this).attr("contenteditable") && "false" !== t(this).attr("contenteditable");
					return !s && e.settings.debug && window.console && console.error("%o has no name assigned", this), n && (this.form = t(this).closest("form")[0], this.name = s), this.form !== e.currentForm ? !1 : s in i || !e.objectLength(t(this).rules()) ? !1 : (i[s] = !0, !0)
				})
			},
			clean: function(e) {
				return t(e)[0]
			},
			errors: function() {
				var e = this.settings.errorClass.split(" ").join(".");
				return t(this.settings.errorElement + "." + e, this.errorContext)
			},
			resetInternals: function() {
				this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = t([]), this.toHide = t([])
			},
			reset: function() {
				this.resetInternals(), this.currentElements = t([])
			},
			prepareForm: function() {
				this.reset(), this.toHide = this.errors().add(this.containers)
			},
			prepareElement: function(t) {
				this.reset(), this.toHide = this.errorsFor(t)
			},
			elementValue: function(e) {
				var i, s, n = t(e),
					r = e.type,
					a = "undefined" != typeof n.attr("contenteditable") && "false" !== n.attr("contenteditable");
				return "radio" === r || "checkbox" === r ? this.findByName(e.name).filter(":checked").val() : "number" === r && "undefined" != typeof e.validity ? e.validity.badInput ? "NaN" : n.val() : (i = a ? n.text() : n.val(), "file" === r ? "C:\\fakepath\\" === i.substr(0, 12) ? i.substr(12) : (s = i.lastIndexOf("/"), s >= 0 ? i.substr(s + 1) : (s = i.lastIndexOf("\\"), s >= 0 ? i.substr(s + 1) : i)) : "string" == typeof i ? i.replace(/\r/g, "") : i)
			},
			check: function(e) {
				e = this.validationTargetFor(this.clean(e));
				var i, s, n, r, a = t(e).rules(),
					o = t.map(a, function(t, e) {
						return e
					}).length,
					l = !1,
					h = this.elementValue(e);
				this.abortRequest(e), "function" == typeof a.normalizer ? r = a.normalizer : "function" == typeof this.settings.normalizer && (r = this.settings.normalizer), r && (h = r.call(e, h), delete a.normalizer);
				for (s in a) {
					n = {
						method: s,
						parameters: a[s]
					};
					try {
						if (i = t.validator.methods[s].call(this, h, e, n.parameters), "dependency-mismatch" === i && 1 === o) {
							l = !0;
							continue
						}
						if (l = !1, "pending" === i) return void(this.toHide = this.toHide.not(this.errorsFor(e)));
						if (!i) return this.formatAndAdd(e, n), !1
					} catch (d) {
						throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + e.id + ", check the '" + n.method + "' method.", d), d instanceof TypeError && (d.message += ".  Exception occurred when checking element " + e.id + ", check the '" + n.method + "' method."), d
					}
				}
				return l ? void 0 : (this.objectLength(a) && this.successList.push(e), !0)
			},
			customDataMessage: function(e, i) {
				return t(e).data("msg" + i.charAt(0).toUpperCase() + i.substring(1).toLowerCase()) || t(e).data("msg")
			},
			customMessage: function(t, e) {
				var i = this.settings.messages[t];
				return i && (i.constructor === String ? i : i[e])
			},
			findDefined: function() {
				for (var t = 0; t < arguments.length; t++)
					if (void 0 !== arguments[t]) return arguments[t]
			},
			defaultMessage: function(e, i) {
				"string" == typeof i && (i = {
					method: i
				});
				var s = this.findDefined(this.customMessage(e.name, i.method), this.customDataMessage(e, i.method), !this.settings.ignoreTitle && e.title || void 0, t.validator.messages[i.method], "<strong>Warning: No message defined for " + e.name + "</strong>"),
					n = /\$?\{(\d+)\}/g;
				return "function" == typeof s ? s = s.call(this, i.parameters, e) : n.test(s) && (s = t.validator.format(s.replace(n, "{$1}"), i.parameters)), s
			},
			formatAndAdd: function(t, e) {
				var i = this.defaultMessage(t, e);
				this.errorList.push({
					message: i,
					element: t,
					method: e.method
				}), this.errorMap[t.name] = i, this.submitted[t.name] = i
			},
			addWrapper: function(t) {
				return this.settings.wrapper && (t = t.add(t.parent(this.settings.wrapper))), t
			},
			defaultShowErrors: function() {
				var t, e, i;
				for (t = 0; this.errorList[t]; t++) i = this.errorList[t], this.settings.highlight && this.settings.highlight.call(this, i.element, this.settings.errorClass, this.settings.validClass), this.showLabel(i.element, i.message);
				if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)
					for (t = 0; this.successList[t]; t++) this.showLabel(this.successList[t]);
				if (this.settings.unhighlight)
					for (t = 0, e = this.validElements(); e[t]; t++) this.settings.unhighlight.call(this, e[t], this.settings.errorClass, this.settings.validClass);
				this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
			},
			validElements: function() {
				return this.currentElements.not(this.invalidElements())
			},
			invalidElements: function() {
				return t(this.errorList).map(function() {
					return this.element
				})
			},
			showLabel: function(e, i) {
				var s, n, r, a, o = this.errorsFor(e),
					l = this.idOrName(e),
					h = t(e).attr("aria-describedby");
				o.length ? (o.removeClass(this.settings.validClass).addClass(this.settings.errorClass), this.settings && this.settings.escapeHtml ? o.text(i || "") : o.html(i || "")) : (o = t("<" + this.settings.errorElement + ">").attr("id", l + "-error").addClass(this.settings.errorClass), this.settings && this.settings.escapeHtml ? o.text(i || "") : o.html(i || ""), s = o, this.settings.wrapper && (s = o.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.length ? this.labelContainer.append(s) : this.settings.errorPlacement ? this.settings.errorPlacement.call(this, s, t(e)) : s.insertAfter(e), o.is("label") ? o.attr("for", l) : 0 === o.parents("label[for='" + this.escapeCssMeta(l) + "']").length && (r = o.attr("id"), h ? h.match(new RegExp("\\b" + this.escapeCssMeta(r) + "\\b")) || (h += " " + r) : h = r, t(e).attr("aria-describedby", h), n = this.groups[e.name], n && (a = this, t.each(a.groups, function(e, i) {
					i === n && t("[name='" + a.escapeCssMeta(e) + "']", a.currentForm).attr("aria-describedby", o.attr("id"))
				})))), !i && this.settings.success && (o.text(""), "string" == typeof this.settings.success ? o.addClass(this.settings.success) : this.settings.success(o, e)), this.toShow = this.toShow.add(o)
			},
			errorsFor: function(e) {
				var i = this.escapeCssMeta(this.idOrName(e)),
					s = t(e).attr("aria-describedby"),
					n = "label[for='" + i + "'], label[for='" + i + "'] *";
				return s && (n = n + ", #" + this.escapeCssMeta(s).replace(/\s+/g, ", #")), this.errors().filter(n)
			},
			escapeCssMeta: function(t) {
				return void 0 === t ? "" : t.replace(/([\\!"#$%&'()*+,.\/:;<=>?@\[\]^`{|}~])/g, "\\$1")
			},
			idOrName: function(t) {
				return this.groups[t.name] || (this.checkable(t) ? t.name : t.id || t.name)
			},
			validationTargetFor: function(e) {
				return this.checkable(e) && (e = this.findByName(e.name)), t(e).not(this.settings.ignore)[0]
			},
			checkable: function(t) {
				return /radio|checkbox/i.test(t.type)
			},
			findByName: function(e) {
				return t(this.currentForm).find("[name='" + this.escapeCssMeta(e) + "']")
			},
			getLength: function(e, i) {
				switch (i.nodeName.toLowerCase()) {
					case "select":
						return t("option:selected", i).length;
					case "input":
						if (this.checkable(i)) return this.findByName(i.name).filter(":checked").length
				}
				return e.length
			},
			depend: function(t, e) {
				return this.dependTypes[typeof t] ? this.dependTypes[typeof t](t, e) : !0
			},
			dependTypes: {
				"boolean": function(t) {
					return t
				},
				string: function(e, i) {
					return !!t(e, i.form).length
				},
				"function": function(t, e) {
					return t(e)
				}
			},
			optional: function(e) {
				var i = this.elementValue(e);
				return !t.validator.methods.required.call(this, i, e) && "dependency-mismatch"
			},
			elementAjaxPort: function(t) {
				return "validate" + t.name
			},
			startRequest: function(e) {
				this.pending[e.name] || (this.pendingRequest++, t(e).addClass(this.settings.pendingClass), this.pending[e.name] = !0)
			},
			stopRequest: function(e, i) {
				this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[e.name], t(e).removeClass(this.settings.pendingClass), i && 0 === this.pendingRequest && this.formSubmitted && this.form() && 0 === this.pendingRequest ? (t(this.currentForm).trigger("submit"), this.submitButton && t("input:hidden[name='" + this.submitButton.name + "']", this.currentForm).remove(), this.formSubmitted = !1) : !i && 0 === this.pendingRequest && this.formSubmitted && (t(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
			},
			abortRequest: function(e) {
				var i;
				this.pending[e.name] && (i = this.elementAjaxPort(e), t.ajaxAbort(i), this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[e.name], t(e).removeClass(this.settings.pendingClass))
			},
			previousValue: function(e, i) {
				return i = "string" == typeof i && i || "remote", t.data(e, "previousValue") || t.data(e, "previousValue", {
					old: null,
					valid: !0,
					message: this.defaultMessage(e, {
						method: i
					})
				})
			},
			destroy: function() {
				this.resetForm(), t(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur").find(".validate-lessThan-blur").off(".validate-lessThan").removeClass("validate-lessThan-blur").find(".validate-lessThanEqual-blur").off(".validate-lessThanEqual").removeClass("validate-lessThanEqual-blur").find(".validate-greaterThanEqual-blur").off(".validate-greaterThanEqual").removeClass("validate-greaterThanEqual-blur").find(".validate-greaterThan-blur").off(".validate-greaterThan").removeClass("validate-greaterThan-blur")
			}
		},
		classRuleSettings: {
			required: {
				required: !0
			},
			email: {
				email: !0
			},
			url: {
				url: !0
			},
			date: {
				date: !0
			},
			dateISO: {
				dateISO: !0
			},
			number: {
				number: !0
			},
			digits: {
				digits: !0
			},
			creditcard: {
				creditcard: !0
			}
		},
		addClassRules: function(e, i) {
			e.constructor === String ? this.classRuleSettings[e] = i : t.extend(this.classRuleSettings, e)
		},
		classRules: function(e) {
			var i = {},
				s = t(e).attr("class");
			return s && t.each(s.split(" "), function() {
				this in t.validator.classRuleSettings && t.extend(i, t.validator.classRuleSettings[this])
			}), i
		},
		normalizeAttributeRule: function(t, e, i, s) {
			/min|max|step/.test(i) && (null === e || /number|range|text/.test(e)) && (s = Number(s), isNaN(s) && (s = void 0)), s || 0 === s ? t[i] = s : e === i && "range" !== e && (t["date" === e ? "dateISO" : i] = !0)
		},
		attributeRules: function(e) {
			var i, s, n = {},
				r = t(e),
				a = e.getAttribute("type");
			for (i in t.validator.methods) "required" === i ? (s = e.getAttribute(i), "" === s && (s = !0), s = !!s) : s = r.attr(i), this.normalizeAttributeRule(n, a, i, s);
			return n.maxlength && /-1|2147483647|524288/.test(n.maxlength) && delete n.maxlength, n
		},
		dataRules: function(e) {
			var i, s, n = {},
				r = t(e),
				a = e.getAttribute("type");
			for (i in t.validator.methods) s = r.data("rule" + i.charAt(0).toUpperCase() + i.substring(1).toLowerCase()), "" === s && (s = !0), this.normalizeAttributeRule(n, a, i, s);
			return n
		},
		staticRules: function(e) {
			var i = {},
				s = t.data(e.form, "validator");
			return s.settings.rules && (i = t.validator.normalizeRule(s.settings.rules[e.name]) || {}), i
		},
		normalizeRules: function(e, i) {
			return t.each(e, function(s, n) {
				if (n === !1) return void delete e[s];
				if (n.param || n.depends) {
					var r = !0;
					switch (typeof n.depends) {
						case "string":
							r = !!t(n.depends, i.form).length;
							break;
						case "function":
							r = n.depends.call(i, i)
					}
					r ? e[s] = void 0 !== n.param ? n.param : !0 : (t.data(i.form, "validator").resetElements(t(i)), delete e[s])
				}
			}), t.each(e, function(t, s) {
				e[t] = "function" == typeof s && "normalizer" !== t ? s(i) : s
			}), t.each(["minlength", "maxlength"], function() {
				e[this] && (e[this] = Number(e[this]))
			}), t.each(["rangelength", "range"], function() {
				var t;
				e[this] && (Array.isArray(e[this]) ? e[this] = [Number(e[this][0]), Number(e[this][1])] : "string" == typeof e[this] && (t = e[this].replace(/[\[\]]/g, "").split(/[\s,]+/), e[this] = [Number(t[0]), Number(t[1])]))
			}), t.validator.autoCreateRanges && (null != e.min && null != e.max && (e.range = [e.min, e.max], delete e.min, delete e.max), null != e.minlength && null != e.maxlength && (e.rangelength = [e.minlength, e.maxlength], delete e.minlength, delete e.maxlength)), e
		},
		normalizeRule: function(e) {
			if ("string" == typeof e) {
				var i = {};
				t.each(e.split(/\s/), function() {
					i[this] = !0
				}), e = i
			}
			return e
		},
		addMethod: function(e, i, s) {
			t.validator.methods[e] = i, t.validator.messages[e] = void 0 !== s ? s : t.validator.messages[e], i.length < 3 && t.validator.addClassRules(e, t.validator.normalizeRule(e))
		},
		methods: {
			required: function(e, i, s) {
				if (!this.depend(s, i)) return "dependency-mismatch";
				if ("select" === i.nodeName.toLowerCase()) {
					var n = t(i).val();
					return n && n.length > 0
				}
				return this.checkable(i) ? this.getLength(e, i) > 0 : void 0 !== e && null !== e && e.length > 0
			},
			email: function(t, e) {
				return this.optional(e) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(t)
			},
			url: function(t, e) {
				return this.optional(e) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:(?:[^\]\[?\/<~#`!@$^&*()+=}|:";',>{ ]|%[0-9A-Fa-f]{2})+(?::(?:[^\]\[?\/<~#`!@$^&*()+=}|:";',>{ ]|%[0-9A-Fa-f]{2})*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[\/?#]\S*)?$/i.test(t)
			},
			date: function() {
				var t = !1;
				return function(e, i) {
					return t || (t = !0, this.settings.debug && window.console && console.warn("The `date` method is deprecated and will be removed in version '2.0.0'.\nPlease don't use it, since it relies on the Date constructor, which\nbehaves very differently across browsers and locales. Use `dateISO`\ninstead or one of the locale specific methods in `localizations/`\nand `additional-methods.js`.")), this.optional(i) || !/Invalid|NaN/.test(new Date(e).toString())
				}
			}(),
			dateISO: function(t, e) {
				return this.optional(e) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(t)
			},
			number: function(t, e) {
				return this.optional(e) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(t)
			},
			digits: function(t, e) {
				return this.optional(e) || /^\d+$/.test(t)
			},
			minlength: function(t, e, i) {
				var s = Array.isArray(t) ? t.length : this.getLength(t, e);
				return this.optional(e) || s >= i
			},
			maxlength: function(t, e, i) {
				var s = Array.isArray(t) ? t.length : this.getLength(t, e);
				return this.optional(e) || i >= s
			},
			rangelength: function(t, e, i) {
				var s = Array.isArray(t) ? t.length : this.getLength(t, e);
				return this.optional(e) || s >= i[0] && s <= i[1]
			},
			min: function(t, e, i) {
				return this.optional(e) || t >= i
			},
			max: function(t, e, i) {
				return this.optional(e) || i >= t
			},
			range: function(t, e, i) {
				return this.optional(e) || t >= i[0] && t <= i[1]
			},
			step: function(e, i, s) {
				var n, r = t(i).attr("type"),
					a = "Step attribute on input type " + r + " is not supported.",
					o = ["text", "number", "range"],
					l = new RegExp("\\b" + r + "\\b"),
					h = r && !l.test(o.join()),
					d = function(t) {
						var e = ("" + t).match(/(?:\.(\d+))?$/);
						return e && e[1] ? e[1].length : 0
					},
					u = function(t) {
						return Math.round(t * Math.pow(10, n))
					},
					c = !0;
				if (h) throw new Error(a);
				return n = d(s), (d(e) > n || u(e) % u(s) !== 0) && (c = !1), this.optional(i) || c
			},
			equalTo: function(e, i, s) {
				var n = t(s);
				return this.settings.onfocusout && n.not(".validate-equalTo-blur").length && n.addClass("validate-equalTo-blur").on("blur.validate-equalTo", function() {
					t(i).valid()
				}), e === n.val()
			},
			remote: function(e, i, s, n) {
				if (this.optional(i)) return "dependency-mismatch";
				n = "string" == typeof n && n || "remote";
				var r, a, o, l = this.previousValue(i, n);
				return this.settings.messages[i.name] || (this.settings.messages[i.name] = {}), l.originalMessage = l.originalMessage || this.settings.messages[i.name][n], this.settings.messages[i.name][n] = l.message, s = "string" == typeof s && {
					url: s
				} || s, o = t.param(t.extend({
					data: e
				}, s.data)), l.old === o ? l.valid : (l.old = o, r = this, this.startRequest(i), a = {}, a[i.name] = e, t.ajax(t.extend(!0, {
					mode: "abort",
					port: this.elementAjaxPort(i),
					dataType: "json",
					data: a,
					context: r.currentForm,
					success: function(t) {
						var s, a, o, h = t === !0 || "true" === t;
						r.settings.messages[i.name][n] = l.originalMessage, h ? (o = r.formSubmitted, r.toHide = r.errorsFor(i), r.formSubmitted = o, r.successList.push(i), r.invalid[i.name] = !1, r.showErrors()) : (s = {}, a = t || r.defaultMessage(i, {
							method: n,
							parameters: e
						}), s[i.name] = l.message = a, r.invalid[i.name] = !0, r.showErrors(s)), l.valid = h, r.stopRequest(i, h)
					}
				}, s)), "pending")
			}
		}
	});
	var i, s = {};
	return t.ajaxPrefilter ? t.ajaxPrefilter(function(e, i, n) {
		var r = e.port;
		"abort" === e.mode && (t.ajaxAbort(r), s[r] = n)
	}) : (i = t.ajax, t.ajax = function(e) {
		var n = ("mode" in e ? e : t.ajaxSettings).mode,
			r = ("port" in e ? e : t.ajaxSettings).port;
		return "abort" === n ? (t.ajaxAbort(r), s[r] = i.apply(this, arguments), s[r]) : i.apply(this, arguments)
	}), t.ajaxAbort = function(t) {
		s[t] && (s[t].abort(), delete s[t])
	}, t
});
! function(a) {
	function e(a, e, n) {
		a.rules[e] = n, a.message && (a.messages[e] = a.message)
	}

	function n(a) {
		return a.replace(/^\s+|\s+$/g, "").split(/\s*,\s*/g)
	}

	function t(a) {
		return a.replace(/([!"#$%&'()*+,.\/:;<=>?@\[\\\]^`{|}~])/g, "\\$1")
	}

	function r(a) {
		return a.substr(0, a.lastIndexOf(".") + 1)
	}

	function i(a, e) {
		return 0 === a.indexOf("*.") && (a = a.replace("*.", e)), a
	}

	function o(e, n) {
		var r = a(this).find("[data-valmsg-for='" + t(n[0].name) + "']"),
			i = r.attr("data-valmsg-replace"),
			o = i ? a.parseJSON(i) !== !1 : null;
		r.removeClass("field-validation-valid").addClass("field-validation-error"), e.data("unobtrusiveContainer", r), o ? (r.empty(), e.removeClass("input-validation-error").appendTo(r)) : e.hide()
	}

	function d(e, n) {
		var t = a(this).find("[data-valmsg-summary=true]"),
			r = t.find("ul");
		r && r.length && n.errorList.length && (r.empty(), t.addClass("validation-summary-errors").removeClass("validation-summary-valid"), a.each(n.errorList, function() {
			a("<li />").html(this.message).appendTo(r)
		}))
	}

	function s(e) {
		var n = e.data("unobtrusiveContainer");
		if (n) {
			var t = n.attr("data-valmsg-replace"),
				r = t ? a.parseJSON(t) : null;
			n.addClass("field-validation-valid").removeClass("field-validation-error"), e.removeData("unobtrusiveContainer"), r && n.empty()
		}
	}

	function l(e) {
		var n = a(this),
			t = "__jquery_unobtrusive_validation_form_reset";
		if (!n.data(t)) {
			n.data(t, !0);
			try {
				n.data("validator").resetForm()
			} finally {
				n.removeData(t)
			}
			n.find(".validation-summary-errors").addClass("validation-summary-valid").removeClass("validation-summary-errors"), n.find(".field-validation-error").addClass("field-validation-valid").removeClass("field-validation-error").removeData("unobtrusiveContainer").find(">*").removeData("unobtrusiveContainer")
		}
	}

	function m(e) {
		var n = a(e),
			t = n.data(v),
			r = a.proxy(l, e),
			i = p.unobtrusive.options || {},
			m = function(n, t) {
				var r = i[n];
				r && a.isFunction(r) && r.apply(e, t)
			};
		return t || (t = {
			options: {
				errorClass: i.errorClass || "input-validation-error",
				errorElement: i.errorElement || "span",
				errorPlacement: function() {
					o.apply(e, arguments), m("errorPlacement", arguments)
				},
				invalidHandler: function() {
					d.apply(e, arguments), m("invalidHandler", arguments)
				},
				messages: {},
				rules: {},
				success: function() {
					s.apply(e, arguments), m("success", arguments)
				}
			},
			attachValidation: function() {
				n.off("reset." + v, r).on("reset." + v, r).validate(this.options)
			},
			validate: function() {
				return n.validate(), n.valid()
			}
		}, n.data(v, t)), t
	}
	var u, p = a.validator,
		v = "unobtrusiveValidation";
	p.unobtrusive = {
		adapters: [],
		parseElement: function(e, n) {
			var t, r, i, o = a(e),
				d = o.parents("form")[0];
			d && (t = m(d), t.options.rules[e.name] = r = {}, t.options.messages[e.name] = i = {}, a.each(this.adapters, function() {
				var n = "data-val-" + this.name,
					t = o.attr(n),
					s = {};
				void 0 !== t && (n += "-", a.each(this.params, function() {
					s[this] = o.attr(n + this)
				}), this.adapt({
					element: e,
					form: d,
					message: t,
					params: s,
					rules: r,
					messages: i
				}))
			}), a.extend(r, {
				__dummy__: !0
			}), n || t.attachValidation())
		},
		parse: function(e) {
			var n = a(e),
				t = n.parents().addBack().filter("form").add(n.find("form")).has("[data-val=true]");
			n.find("[data-val=true]").each(function() {
				p.unobtrusive.parseElement(this, !0)
			}), t.each(function() {
				var a = m(this);
				a && a.attachValidation()
			})
		}
	}, u = p.unobtrusive.adapters, u.add = function(a, e, n) {
		return n || (n = e, e = []), this.push({
			name: a,
			params: e,
			adapt: n
		}), this
	}, u.addBool = function(a, n) {
		return this.add(a, function(t) {
			e(t, n || a, !0)
		})
	}, u.addMinMax = function(a, n, t, r, i, o) {
		return this.add(a, [i || "min", o || "max"], function(a) {
			var i = a.params.min,
				o = a.params.max;
			i && o ? e(a, r, [i, o]) : i ? e(a, n, i) : o && e(a, t, o)
		})
	}, u.addSingleVal = function(a, n, t) {
		return this.add(a, [n || "val"], function(r) {
			e(r, t || a, r.params[n])
		})
	}, p.addMethod("__dummy__", function(a, e, n) {
		return !0
	}), p.addMethod("regex", function(a, e, n) {
		var t;
		return this.optional(e) ? !0 : (t = new RegExp(n).exec(a), t && 0 === t.index && t[0].length === a.length)
	}), p.addMethod("nonalphamin", function(a, e, n) {
		var t;
		return n && (t = a.match(/\W/g), t = t && t.length >= n), t
	}), p.methods.extension ? (u.addSingleVal("accept", "mimtype"), u.addSingleVal("extension", "extension")) : u.addSingleVal("extension", "extension", "accept"), u.addSingleVal("regex", "pattern"), u.addBool("creditcard").addBool("date").addBool("digits").addBool("email").addBool("number").addBool("url"), u.addMinMax("length", "minlength", "maxlength", "rangelength").addMinMax("range", "min", "max", "range"), u.addMinMax("minlength", "minlength").addMinMax("maxlength", "minlength", "maxlength"), u.add("equalto", ["other"], function(n) {
		var o = r(n.element.name),
			d = n.params.other,
			s = i(d, o),
			l = a(n.form).find(":input").filter("[name='" + t(s) + "']")[0];
		e(n, "equalTo", l)
	}), u.add("required", function(a) {
		"INPUT" === a.element.tagName.toUpperCase() && "CHECKBOX" === a.element.type.toUpperCase() || e(a, "required", !0)
	}), u.add("remote", ["url", "type", "additionalfields"], function(o) {
		var d = {
				url: o.params.url,
				type: o.params.type || "GET",
				data: {}
			},
			s = r(o.element.name);
		a.each(n(o.params.additionalfields || o.element.name), function(e, n) {
			var r = i(n, s);
			d.data[r] = function() {
				var e = a(o.form).find(":input").filter("[name='" + t(r) + "']");
				return e.is(":checkbox") ? e.filter(":checked").val() || e.filter(":hidden").val() || "" : e.is(":radio") ? e.filter(":checked").val() || "" : e.val()
			}
		}), e(o, "remote", d)
	}), u.add("password", ["min", "nonalphamin", "regex"], function(a) {
		a.params.min && e(a, "minlength", a.params.min), a.params.nonalphamin && e(a, "nonalphamin", a.params.nonalphamin), a.params.regex && e(a, "regex", a.params.regex)
	}), a(function() {
		p.unobtrusive.parse(document)
	})
}(jQuery);
! function(e) {
	"function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof module && module.exports ? module.exports = function(t, s) {
		return void 0 === s && (s = "undefined" != typeof window ? require("jquery") : require("jquery")(t)), e(s), s
	} : e(jQuery)
}(function(e) {
	"use strict";
	var t = e(document),
		s = e(window),
		i = "selectric",
		l = "Input Items Open Disabled TempShow HideSelect Wrapper Focus Hover Responsive Above Below Scroll Group GroupLabel",
		n = ".sl",
		a = ["a", "e", "i", "o", "u", "n", "c", "y"],
		o = [/[\xE0-\xE5]/g, /[\xE8-\xEB]/g, /[\xEC-\xEF]/g, /[\xF2-\xF6]/g, /[\xF9-\xFC]/g, /[\xF1]/g, /[\xE7]/g, /[\xFD-\xFF]/g],
		r = function(t, s) {
			var i = this;
			i.element = t, i.$element = e(t), i.state = {
				multiple: !!i.$element.attr("multiple"),
				enabled: !1,
				opened: !1,
				currValue: -1,
				selectedIdx: -1,
				highlightedIdx: -1
			}, i.eventTriggers = {
				open: i.open,
				close: i.close,
				destroy: i.destroy,
				refresh: i.refresh,
				init: i.init
			}, i.init(s)
		};
	r.prototype = {
		utils: {
			isMobile: function() {
				return /android|ip(hone|od|ad)/i.test(navigator.userAgent)
			},
			escapeRegExp: function(e) {
				return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
			},
			replaceDiacritics: function(e) {
				for (var t = o.length; t--;) e = e.toLowerCase().replace(o[t], a[t]);
				return e
			},
			format: function(e) {
				var t = arguments;
				return ("" + e).replace(/\{(?:(\d+)|(\w+))\}/g, function(e, s, i) {
					return i && t[1] ? t[1][i] : t[s]
				})
			},
			nextEnabledItem: function(e, t) {
				for (; e[t = (t + 1) % e.length].disabled;);
				return t
			},
			previousEnabledItem: function(e, t) {
				for (; e[t = (t > 0 ? t : e.length) - 1].disabled;);
				return t
			},
			toDash: function(e) {
				return e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()
			},
			triggerCallback: function(t, s) {
				var l = s.element,
					n = s.options["on" + t],
					a = [l].concat([].slice.call(arguments).slice(1));
				e.isFunction(n) && n.apply(l, a), e(l).trigger(i + "-" + this.toDash(t), a)
			},
			arrayToClassname: function(t) {
				var s = e.grep(t, function(e) {
					return !!e
				});
				return e.trim(s.join(" "))
			}
		},
		init: function(t) {
			var s = this;
			if (s.options = e.extend(!0, {}, e.fn[i].defaults, s.options, t), s.utils.triggerCallback("BeforeInit", s), s.destroy(!0), s.options.disableOnMobile && s.utils.isMobile()) return void(s.disableOnMobile = !0);
			s.classes = s.getClassNames();
			var l = e("<input/>", {
					"class": s.classes.input,
					readonly: s.utils.isMobile()
				}),
				n = e("<div/>", {
					"class": s.classes.items,
					tabindex: -1
				}),
				a = e("<div/>", {
					"class": s.classes.scroll
				}),
				o = e("<div/>", {
					"class": s.classes.prefix,
					html: s.options.arrowButtonMarkup
				}),
				r = e("<span/>", {
					"class": "label"
				}),
				u = s.$element.wrap("<div/>").parent().append(o.prepend(r), n, l),
				p = e("<div/>", {
					"class": s.classes.hideselect
				});
			s.elements = {
				input: l,
				items: n,
				itemsScroll: a,
				wrapper: o,
				label: r,
				outerWrapper: u
			}, s.options.nativeOnMobile && s.utils.isMobile() && (s.elements.input = void 0, p.addClass(s.classes.prefix + "-is-native"), s.$element.on("change", function() {
				s.refresh()
			})), s.$element.on(s.eventTriggers).wrap(p), s.originalTabindex = s.$element.prop("tabindex"), s.$element.prop("tabindex", -1), s.populate(), s.activate(), s.utils.triggerCallback("Init", s)
		},
		activate: function() {
			var e = this,
				t = e.elements.items.closest(":visible").children(":hidden").addClass(e.classes.tempshow),
				s = e.$element.width();
			t.removeClass(e.classes.tempshow), e.utils.triggerCallback("BeforeActivate", e), e.elements.outerWrapper.prop("class", e.utils.arrayToClassname([e.classes.wrapper, e.$element.prop("class").replace(/\S+/g, e.classes.prefix + "-$&"), e.options.responsive ? e.classes.responsive : ""])), e.options.inheritOriginalWidth && s > 0 && e.elements.outerWrapper.width(s), e.unbindEvents(), e.$element.prop("disabled") ? (e.elements.outerWrapper.addClass(e.classes.disabled), e.elements.input && e.elements.input.prop("disabled", !0)) : (e.state.enabled = !0, e.elements.outerWrapper.removeClass(e.classes.disabled), e.$li = e.elements.items.removeAttr("style").find("li"), e.bindEvents()), e.utils.triggerCallback("Activate", e)
		},
		getClassNames: function() {
			var t = this,
				s = t.options.customClass,
				i = {};
			return e.each(l.split(" "), function(e, l) {
				var n = s.prefix + l;
				i[l.toLowerCase()] = s.camelCase ? n : t.utils.toDash(n)
			}), i.prefix = s.prefix, i
		},
		setLabel: function() {
			var t = this,
				s = t.options.labelBuilder;
			if (t.state.multiple) {
				var i = e.isArray(t.state.currValue) ? t.state.currValue : [t.state.currValue];
				i = 0 === i.length ? [0] : i;
				var l = e.map(i, function(s) {
					return e.grep(t.lookupItems, function(e) {
						return e.index === s
					})[0]
				});
				l = e.grep(l, function(t) {
					return l.length > 1 || 0 === l.length ? "" !== e.trim(t.value) : t
				}), l = e.map(l, function(i) {
					return e.isFunction(s) ? s(i) : t.utils.format(s, i)
				}), t.options.multiple.maxLabelEntries && (l.length >= t.options.multiple.maxLabelEntries + 1 ? (l = l.slice(0, t.options.multiple.maxLabelEntries), l.push(e.isFunction(s) ? s({
					text: "..."
				}) : t.utils.format(s, {
					text: "..."
				}))) : l.slice(l.length - 1)), t.elements.label.html(l.join(t.options.multiple.separator))
			} else {
				var n = t.lookupItems[t.state.currValue];
				t.elements.label.html(e.isFunction(s) ? s(n) : t.utils.format(s, n))
			}
		},
		populate: function() {
			var t = this,
				s = t.$element.children(),
				i = t.$element.find("option"),
				l = i.filter(":selected"),
				n = i.index(l),
				a = 0,
				o = t.state.multiple ? [] : 0;
			l.length > 1 && t.state.multiple && (n = [], l.each(function() {
				n.push(e(this).index())
			})), t.state.currValue = ~n ? n : o, t.state.selectedIdx = t.state.currValue, t.state.highlightedIdx = t.state.currValue, t.items = [], t.lookupItems = [], s.length && (s.each(function(s) {
				var i = e(this);
				if (i.is("optgroup")) {
					var l = {
						element: i,
						label: i.prop("label"),
						groupDisabled: i.prop("disabled"),
						items: []
					};
					i.children().each(function(s) {
						var i = e(this);
						l.items[s] = t.getItemData(a, i, l.groupDisabled || i.prop("disabled")), t.lookupItems[a] = l.items[s], a++
					}), t.items[s] = l
				} else t.items[s] = t.getItemData(a, i, i.prop("disabled")), t.lookupItems[a] = t.items[s], a++
			}), t.setLabel(), t.elements.items.append(t.elements.itemsScroll.html(t.getItemsMarkup(t.items))))
		},
		getItemData: function(t, s, i) {
			var l = this;
			return {
				index: t,
				element: s,
				value: s.val(),
				className: s.prop("class"),
				text: s.html(),
				slug: e.trim(l.utils.replaceDiacritics(s.html())),
				selected: s.prop("selected"),
				disabled: i
			}
		},
		getItemsMarkup: function(t) {
			var s = this,
				i = "<ul>";
			return e.isFunction(s.options.listBuilder) && s.options.listBuilder && (t = s.options.listBuilder(t)), e.each(t, function(t, l) {
				void 0 !== l.label ? (i += s.utils.format('<ul class="{1}"><li class="{2}">{3}</li>', s.utils.arrayToClassname([s.classes.group, l.groupDisabled ? "disabled" : "", l.element.prop("class")]), s.classes.grouplabel, l.element.prop("label")), e.each(l.items, function(e, t) {
					i += s.getItemMarkup(t.index, t)
				}), i += "</ul>") : i += s.getItemMarkup(l.index, l)
			}), i + "</ul>"
		},
		getItemMarkup: function(t, s) {
			var i = this,
				l = i.options.optionsItemBuilder,
				n = {
					value: s.value,
					text: s.text,
					slug: s.slug,
					index: s.index
				};
			return i.utils.format('<li data-index="{1}" class="{2}">{3}</li>', t, i.utils.arrayToClassname([s.className, t === i.items.length - 1 ? "last" : "", s.disabled ? "disabled" : "", s.selected ? "selected" : ""]), e.isFunction(l) ? i.utils.format(l(s, this.$element, t), s) : i.utils.format(l, n))
		},
		unbindEvents: function() {
			var e = this;
			e.elements.wrapper.add(e.$element).add(e.elements.outerWrapper).add(e.elements.input).off(n)
		},
		bindEvents: function() {
			var t = this;
			t.elements.outerWrapper.on("mouseenter" + n + " mouseleave" + n, function(s) {
				e(this).toggleClass(t.classes.hover, "mouseenter" === s.type), t.options.openOnHover && (clearTimeout(t.closeTimer), "mouseleave" === s.type ? t.closeTimer = setTimeout(e.proxy(t.close, t), t.options.hoverIntentTimeout) : t.open())
			}), t.elements.wrapper.on("click" + n, function(e) {
				t.state.opened ? t.close() : t.open(e)
			}), t.options.nativeOnMobile && t.utils.isMobile() || (t.$element.on("focus" + n, function() {
				t.elements.input.focus()
			}), t.elements.input.prop({
				tabindex: t.originalTabindex,
				disabled: !1
			}).on("keydown" + n, e.proxy(t.handleKeys, t)).on("focusin" + n, function(e) {
				t.elements.outerWrapper.addClass(t.classes.focus), t.elements.input.one("blur", function() {
					t.elements.input.blur()
				}), t.options.openOnFocus && !t.state.opened && t.open(e)
			}).on("focusout" + n, function() {
				t.elements.outerWrapper.removeClass(t.classes.focus)
			}).on("input propertychange", function() {
				var s = t.elements.input.val(),
					i = new RegExp("^" + t.utils.escapeRegExp(s), "i");
				clearTimeout(t.resetStr), t.resetStr = setTimeout(function() {
					t.elements.input.val("")
				}, t.options.keySearchTimeout), s.length && e.each(t.items, function(e, s) {
					return !s.disabled && i.test(s.text) || i.test(s.slug) ? void t.highlight(e) : void 0
				})
			})), t.$li.on({
				mousedown: function(e) {
					e.preventDefault(), e.stopPropagation()
				},
				click: function() {
					return t.select(e(this).data("index")), !1
				}
			})
		},
		handleKeys: function(t) {
			var s = this,
				i = t.which,
				l = s.options.keys,
				n = e.inArray(i, l.previous) > -1,
				a = e.inArray(i, l.next) > -1,
				o = e.inArray(i, l.select) > -1,
				r = e.inArray(i, l.open) > -1,
				u = s.state.highlightedIdx,
				p = n && 0 === u || a && u + 1 === s.items.length,
				c = 0;
			if (13 !== i && 32 !== i || t.preventDefault(), n || a) {
				if (!s.options.allowWrap && p) return;
				n && (c = s.utils.previousEnabledItem(s.lookupItems, u)), a && (c = s.utils.nextEnabledItem(s.lookupItems, u)), s.highlight(c)
			}
			return o && s.state.opened ? (s.select(u), void(s.state.multiple && s.options.multiple.keepMenuOpen || s.close())) : void(r && !s.state.opened && s.open())
		},
		refresh: function() {
			var e = this;
			e.populate(), e.activate(), e.utils.triggerCallback("Refresh", e)
		},
		setOptionsDimensions: function() {
			var e = this,
				t = e.elements.items.closest(":visible").children(":hidden").addClass(e.classes.tempshow),
				s = e.options.maxHeight,
				i = e.elements.items.outerWidth(),
				l = e.elements.wrapper.outerWidth() - (i - e.elements.items.width());
			!e.options.expandToItemText || l > i ? e.finalWidth = l : (e.elements.items.css("overflow", "scroll"), e.elements.outerWrapper.width(9e4), e.finalWidth = e.elements.items.width(), e.elements.items.css("overflow", ""), e.elements.outerWrapper.width("")), e.elements.items.width(e.finalWidth).height() > s && e.elements.items.height(s), t.removeClass(e.classes.tempshow)
		},
		isInViewport: function() {
			var e = this;
			if (e.options.forceRenderAbove === !0) e.elements.outerWrapper.addClass(e.classes.above);
			else if (e.options.forceRenderBelow === !0) e.elements.outerWrapper.addClass(e.classes.below);
			else {
				var t = s.scrollTop(),
					i = s.height(),
					l = e.elements.outerWrapper.offset().top,
					n = e.elements.outerWrapper.outerHeight(),
					a = l + n + e.itemsHeight <= t + i,
					o = l - e.itemsHeight > t,
					r = !a && o,
					u = !r;
				e.elements.outerWrapper.toggleClass(e.classes.above, r), e.elements.outerWrapper.toggleClass(e.classes.below, u)
			}
		},
		detectItemVisibility: function(t) {
			var s = this,
				i = s.$li.filter("[data-index]");
			s.state.multiple && (t = e.isArray(t) && 0 === t.length ? 0 : t, t = e.isArray(t) ? Math.min.apply(Math, t) : t);
			var l = i.eq(t).outerHeight(),
				n = i[t].offsetTop,
				a = s.elements.itemsScroll.scrollTop(),
				o = n + 2 * l;
			s.elements.itemsScroll.scrollTop(o > a + s.itemsHeight ? o - s.itemsHeight : a > n - l ? n - l : a)
		},
		open: function(s) {
			var l = this;
			return l.options.nativeOnMobile && l.utils.isMobile() ? !1 : (l.utils.triggerCallback("BeforeOpen", l), s && (s.preventDefault(), l.options.stopPropagation && s.stopPropagation()), void(l.state.enabled && (l.setOptionsDimensions(), e("." + l.classes.hideselect, "." + l.classes.open).children()[i]("close"), l.state.opened = !0, l.itemsHeight = l.elements.items.outerHeight(), l.itemsInnerHeight = l.elements.items.height(), l.elements.outerWrapper.addClass(l.classes.open), l.elements.input.val(""), s && "focusin" !== s.type && l.elements.input.focus(), setTimeout(function() {
				t.on("click" + n, e.proxy(l.close, l)).on("scroll" + n, e.proxy(l.isInViewport, l))
			}, 1), l.isInViewport(), l.options.preventWindowScroll && t.on("mousewheel" + n + " DOMMouseScroll" + n, "." + l.classes.scroll, function(t) {
				var s = t.originalEvent,
					i = e(this).scrollTop(),
					n = 0;
				"detail" in s && (n = -1 * s.detail), "wheelDelta" in s && (n = s.wheelDelta), "wheelDeltaY" in s && (n = s.wheelDeltaY), "deltaY" in s && (n = -1 * s.deltaY), (i === this.scrollHeight - l.itemsInnerHeight && 0 > n || 0 === i && n > 0) && t.preventDefault()
			}), l.detectItemVisibility(l.state.selectedIdx), l.highlight(l.state.multiple ? -1 : l.state.selectedIdx), l.utils.triggerCallback("Open", l))))
		},
		close: function() {
			var e = this;
			e.utils.triggerCallback("BeforeClose", e), t.off(n), e.elements.outerWrapper.removeClass(e.classes.open), e.state.opened = !1, e.utils.triggerCallback("Close", e)
		},
		change: function() {
			var t = this;
			t.utils.triggerCallback("BeforeChange", t), t.state.multiple ? (e.each(t.lookupItems, function(e) {
				t.lookupItems[e].selected = !1, t.$element.find("option").prop("selected", !1)
			}), e.each(t.state.selectedIdx, function(e, s) {
				t.lookupItems[s].selected = !0, t.$element.find("option").eq(s).prop("selected", !0)
			}), t.state.currValue = t.state.selectedIdx, t.setLabel(), t.utils.triggerCallback("Change", t)) : t.state.currValue !== t.state.selectedIdx && (t.$element.prop("selectedIndex", t.state.currValue = t.state.selectedIdx).data("value", t.lookupItems[t.state.selectedIdx].text), t.setLabel(), t.utils.triggerCallback("Change", t))
		},
		highlight: function(e) {
			var t = this,
				s = t.$li.filter("[data-index]").removeClass("highlighted");
			t.utils.triggerCallback("BeforeHighlight", t), void 0 === e || -1 === e || t.lookupItems[e].disabled || (s.eq(t.state.highlightedIdx = e).addClass("highlighted"), t.detectItemVisibility(e), t.utils.triggerCallback("Highlight", t))
		},
		select: function(t) {
			var s = this,
				i = s.$li.filter("[data-index]");
			if (s.utils.triggerCallback("BeforeSelect", s, t), void 0 !== t && -1 !== t && !s.lookupItems[t].disabled) {
				if (s.state.multiple) {
					s.state.selectedIdx = e.isArray(s.state.selectedIdx) ? s.state.selectedIdx : [s.state.selectedIdx];
					var l = e.inArray(t, s.state.selectedIdx); - 1 !== l ? s.state.selectedIdx.splice(l, 1) : s.state.selectedIdx.push(t), i.removeClass("selected").filter(function(t) {
						return -1 !== e.inArray(t, s.state.selectedIdx)
					}).addClass("selected")
				} else i.removeClass("selected").eq(s.state.selectedIdx = t).addClass("selected");
				s.state.multiple && s.options.multiple.keepMenuOpen || s.close(), s.change(), s.utils.triggerCallback("Select", s, t)
			}
		},
		destroy: function(e) {
			var t = this;
			t.state && t.state.enabled && (t.elements.items.add(t.elements.wrapper).add(t.elements.input).remove(), e || t.$element.removeData(i).removeData("value"), t.$element.prop("tabindex", t.originalTabindex).off(n).off(t.eventTriggers).unwrap().unwrap(), t.state.enabled = !1)
		}
	}, e.fn[i] = function(t) {
		return this.each(function() {
			var s = e.data(this, i);
			s && !s.disableOnMobile ? "string" == typeof t && s[t] ? s[t]() : s.init(t) : e.data(this, i, new r(this, t))
		})
	}, e.fn[i].defaults = {
		onChange: function(t) {
			e(t).change()
		},
		maxHeight: 300,
		keySearchTimeout: 500,
		arrowButtonMarkup: '<b class="button">&#x25be;</b>',
		disableOnMobile: !1,
		nativeOnMobile: !0,
		openOnFocus: !0,
		openOnHover: !1,
		hoverIntentTimeout: 500,
		expandToItemText: !1,
		responsive: !1,
		preventWindowScroll: !0,
		inheritOriginalWidth: !1,
		allowWrap: !0,
		forceRenderAbove: !1,
		forceRenderBelow: !1,
		stopPropagation: !0,
		optionsItemBuilder: "{text}",
		labelBuilder: "{text}",
		listBuilder: !1,
		keys: {
			previous: [37, 38],
			next: [39, 40],
			select: [9, 13, 27],
			open: [13, 32, 37, 38, 39, 40],
			close: [9, 27]
		},
		customClass: {
			prefix: i,
			camelCase: !1
		},
		multiple: {
			separator: ", ",
			keepMenuOpen: !0,
			maxLabelEntries: !1
		}
	}
});
! function(t, e) {
	"object" == typeof exports && "undefined" != typeof module ? e(require("jquery")) : "function" == typeof define && define.amd ? define(["jquery"], e) : (t = "undefined" != typeof globalThis ? globalThis : t || self, e(t.jQuery))
}(this, function(t) {
	"use strict";

	function e(t, e) {
		if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
	}

	function i(t, e) {
		for (var i = 0; i < e.length; i++) {
			var a = e[i];
			a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
		}
	}

	function a(t, e, a) {
		return e && i(t.prototype, e), a && i(t, a), t
	}

	function s(t) {
		return P.call(t).slice(8, -1).toLowerCase()
	}

	function n(t) {
		return "string" == typeof t
	}

	function r(t) {
		return "number" == typeof t && !j(t)
	}

	function h(t) {
		return "undefined" == typeof t
	}

	function o(t) {
		return "date" === s(t) && !j(t.getTime())
	}

	function l(t, e) {
		for (var i = arguments.length, a = new Array(i > 2 ? i - 2 : 0), s = 2; i > s; s++) a[s - 2] = arguments[s];
		return function() {
			for (var i = arguments.length, s = new Array(i), n = 0; i > n; n++) s[n] = arguments[n];
			return t.apply(e, a.concat(s))
		}
	}

	function c(t) {
		return '[data-view="'.concat(t, '"]')
	}

	function d(t) {
		return t % 4 === 0 && t % 100 !== 0 || t % 400 === 0
	}

	function u(t, e) {
		return [31, d(t) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][e]
	}

	function p(t, e, i) {
		return Math.min(i, u(t, e))
	}

	function f(e) {
		var i = String(e).toLowerCase(),
			a = i.match(A);
		if (!a || 0 === a.length) throw new Error("Invalid date format.");
		return e = {
			source: i,
			parts: a
		}, t.each(a, function(t, i) {
			switch (i) {
				case "dd":
				case "d":
					e.hasDay = !0;
					break;
				case "mm":
				case "m":
					e.hasMonth = !0;
					break;
				case "yyyy":
				case "yy":
					e.hasYear = !0
			}
		}), e
	}

	function g(e) {
		var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : !1,
			a = t(e),
			s = a.css("position"),
			n = "absolute" === s,
			r = i ? /auto|scroll|hidden/ : /auto|scroll/,
			h = a.parents().filter(function(e, i) {
				var a = t(i);
				return n && "static" === a.css("position") ? !1 : r.test(a.css("overflow") + a.css("overflow-y") + a.css("overflow-x"))
			}).eq(0);
		return "fixed" !== s && h.length ? h : t(e.ownerDocument || document)
	}

	function y(t) {
		var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
			i = String(Math.abs(t)),
			a = i.length,
			s = "";
		for (0 > t && (s += "-"); e > a;) a += 1, s += "0";
		return s + i
	}
	t = t && t.hasOwnProperty("default") ? t["default"] : t;
	var m = {
			autoShow: !1,
			autoHide: !1,
			autoPick: !1,
			inline: !1,
			container: null,
			trigger: null,
			language: "",
			format: "mm/dd/yyyy",
			date: null,
			startDate: null,
			endDate: null,
			startView: 0,
			weekStart: 0,
			yearFirst: !1,
			yearSuffix: "",
			days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
			daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
			daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
			months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
			monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
			itemTag: "li",
			mutedClass: "muted",
			pickedClass: "picked",
			disabledClass: "disabled",
			highlightedClass: "highlighted",
			template: '<div class="datepicker-container"><div class="datepicker-panel" data-view="years picker"><ul><li data-view="years prev">&lsaquo;</li><li data-view="years current"></li><li data-view="years next">&rsaquo;</li></ul><ul data-view="years"></ul></div><div class="datepicker-panel" data-view="months picker"><ul><li data-view="year prev">&lsaquo;</li><li data-view="year current"></li><li data-view="year next">&rsaquo;</li></ul><ul data-view="months"></ul></div><div class="datepicker-panel" data-view="days picker"><ul><li data-view="month prev">&lsaquo;</li><li data-view="month current"></li><li data-view="month next">&rsaquo;</li></ul><ul data-view="week"></ul><ul data-view="days"></ul></div></div>',
			offset: 10,
			zIndex: 1e3,
			filter: null,
			show: null,
			hide: null,
			pick: null
		},
		v = "undefined" != typeof window,
		w = v ? window : {},
		k = v ? "ontouchstart" in w.document.documentElement : !1,
		D = "datepicker",
		b = "click.".concat(D),
		C = "focus.".concat(D),
		$ = "hide.".concat(D),
		x = "keyup.".concat(D),
		F = "pick.".concat(D),
		M = "resize.".concat(D),
		Y = "scroll.".concat(D),
		S = "show.".concat(D),
		T = "touchstart.".concat(D),
		V = "".concat(D, "-hide"),
		I = {},
		N = {
			DAYS: 0,
			MONTHS: 1,
			YEARS: 2
		},
		P = Object.prototype.toString,
		j = Number.isNaN || w.isNaN,
		A = /(y|m|d)+/g,
		O = /\d+/g,
		q = {
			show: function() {
				this.built || this.build(), this.shown || this.trigger(S).isDefaultPrevented() || (this.shown = !0, this.$picker.removeClass(V).on(b, t.proxy(this.click, this)), this.showView(this.options.startView), this.inline || (this.$scrollParent.on(Y, t.proxy(this.place, this)), t(window).on(M, this.onResize = l(this.place, this)), t(document).on(b, this.onGlobalClick = l(this.globalClick, this)), t(document).on(x, this.onGlobalKeyup = l(this.globalKeyup, this)), k && t(document).on(T, this.onTouchStart = l(this.touchstart, this)), this.place()))
			},
			hide: function() {
				this.shown && (this.trigger($).isDefaultPrevented() || (this.shown = !1, this.$picker.addClass(V).off(b, this.click), this.inline || (this.$scrollParent.off(Y, this.place), t(window).off(M, this.onResize), t(document).off(b, this.onGlobalClick), t(document).off(x, this.onGlobalKeyup), k && t(document).off(T, this.onTouchStart))))
			},
			toggle: function() {
				this.shown ? this.hide() : this.show()
			},
			update: function() {
				var t = this.getValue();
				t !== this.oldValue && (this.setDate(t, !0), this.oldValue = t)
			},
			pick: function(t) {
				var e = this.$element,
					i = this.date;
				this.trigger(F, {
					view: t || "",
					date: i
				}).isDefaultPrevented() || (i = this.formatDate(this.date), this.setValue(i), this.isInput && (e.trigger("input"), e.trigger("change")))
			},
			reset: function() {
				this.setDate(this.initialDate, !0), this.setValue(this.initialValue), this.shown && this.showView(this.options.startView)
			},
			getMonthName: function(e, i) {
				var a = this.options,
					s = a.monthsShort,
					n = a.months;
				return t.isNumeric(e) ? e = Number(e) : h(i) && (i = e), i === !0 && (n = s), n[r(e) ? e : this.date.getMonth()]
			},
			getDayName: function(e, i, a) {
				var s = this.options,
					n = s.days;
				return t.isNumeric(e) ? e = Number(e) : (h(a) && (a = i), h(i) && (i = e)), a ? n = s.daysMin : i && (n = s.daysShort), n[r(e) ? e : this.date.getDay()]
			},
			getDate: function(t) {
				var e = this.date;
				return t ? this.formatDate(e) : new Date(e)
			},
			setDate: function(e, i) {
				var a = this.options.filter;
				if (o(e) || n(e)) {
					if (e = this.parseDate(e), t.isFunction(a) && a.call(this.$element, e, "day") === !1) return;
					this.date = e, this.viewDate = new Date(e), i || this.pick(), this.built && this.render()
				}
			},
			setStartDate: function(t) {
				o(t) || n(t) ? this.startDate = this.parseDate(t) : this.startDate = null, this.built && this.render()
			},
			setEndDate: function(t) {
				o(t) || n(t) ? this.endDate = this.parseDate(t) : this.endDate = null, this.built && this.render()
			},
			parseDate: function(e) {
				var i = this.format,
					a = [];
				return o(e) || (n(e) && (a = e.match(O) || []), e = e ? new Date(e) : new Date, o(e) || (e = new Date), a.length === i.parts.length && (t.each(a, function(t, a) {
					var s = parseInt(a, 10);
					switch (i.parts[t]) {
						case "yy":
							e.setFullYear(2e3 + s);
							break;
						case "yyyy":
							e.setFullYear(2 === a.length ? 2e3 + s : s);
							break;
						case "mm":
						case "m":
							e.setMonth(s - 1)
					}
				}), t.each(a, function(t, a) {
					var s = parseInt(a, 10);
					switch (i.parts[t]) {
						case "dd":
						case "d":
							e.setDate(s)
					}
				}))), new Date(e.getFullYear(), e.getMonth(), e.getDate())
			},
			formatDate: function(e) {
				var i = this.format,
					a = "";
				if (o(e)) {
					var s = e.getFullYear(),
						n = e.getMonth(),
						r = e.getDate(),
						h = {
							d: r,
							dd: y(r, 2),
							m: n + 1,
							mm: y(n + 1, 2),
							yy: String(s).substring(2),
							yyyy: y(s, 4)
						};
					a = i.source, t.each(i.parts, function(t, e) {
						a = a.replace(e, h[e])
					})
				}
				return a
			},
			destroy: function() {
				this.unbind(), this.unbuild(), this.$element.removeData(D)
			}
		},
		H = {
			click: function(e) {
				var i = t(e.target),
					a = this.options,
					s = this.date,
					n = this.viewDate,
					r = this.format;
				if (e.stopPropagation(), e.preventDefault(), !i.hasClass("disabled")) {
					var h = i.data("view"),
						o = n.getFullYear(),
						l = n.getMonth(),
						c = n.getDate();
					switch (h) {
						case "years prev":
						case "years next":
							o = "years prev" === h ? o - 10 : o + 10, n.setFullYear(o), n.setDate(p(o, l, c)), this.renderYears();
							break;
						case "year prev":
						case "year next":
							o = "year prev" === h ? o - 1 : o + 1, n.setFullYear(o), n.setDate(p(o, l, c)), this.renderMonths();
							break;
						case "year current":
							r.hasYear && this.showView(N.YEARS);
							break;
						case "year picked":
							r.hasMonth ? this.showView(N.MONTHS) : (i.siblings(".".concat(a.pickedClass)).removeClass(a.pickedClass).data("view", "year"), this.hideView()), this.pick("year");
							break;
						case "year":
							o = parseInt(i.text(), 10), s.setDate(p(o, l, c)), s.setFullYear(o), n.setDate(p(o, l, c)), n.setFullYear(o), r.hasMonth ? this.showView(N.MONTHS) : (i.addClass(a.pickedClass).data("view", "year picked").siblings(".".concat(a.pickedClass)).removeClass(a.pickedClass).data("view", "year"), this.hideView()), this.pick("year");
							break;
						case "month prev":
						case "month next":
							l = "month prev" === h ? l - 1 : l + 1, 0 > l ? (o -= 1, l += 12) : l > 11 && (o += 1, l -= 12), n.setFullYear(o), n.setDate(p(o, l, c)), n.setMonth(l), this.renderDays();
							break;
						case "month current":
							r.hasMonth && this.showView(N.MONTHS);
							break;
						case "month picked":
							r.hasDay ? this.showView(N.DAYS) : (i.siblings(".".concat(a.pickedClass)).removeClass(a.pickedClass).data("view", "month"), this.hideView()), this.pick("month");
							break;
						case "month":
							l = t.inArray(i.text(), a.monthsShort), s.setFullYear(o), s.setDate(p(o, l, c)), s.setMonth(l), n.setFullYear(o), n.setDate(p(o, l, c)), n.setMonth(l), r.hasDay ? this.showView(N.DAYS) : (i.addClass(a.pickedClass).data("view", "month picked").siblings(".".concat(a.pickedClass)).removeClass(a.pickedClass).data("view", "month"), this.hideView()), this.pick("month");
							break;
						case "day prev":
						case "day next":
						case "day":
							"day prev" === h ? l -= 1 : "day next" === h && (l += 1), c = parseInt(i.text(), 10), s.setDate(1), s.setFullYear(o), s.setMonth(l), s.setDate(c), n.setDate(1), n.setFullYear(o), n.setMonth(l), n.setDate(c), this.renderDays(), "day" === h && this.hideView(), this.pick("day");
							break;
						case "day picked":
							this.hideView(), this.pick("day")
					}
				}
			},
			globalClick: function(t) {
				for (var e = t.target, i = this.element, a = this.$trigger, s = a[0], n = !0; e !== document;) {
					if (e === s || e === i) {
						n = !1;
						break
					}
					e = e.parentNode
				}
				n && this.hide()
			},
			keyup: function() {
				this.update()
			},
			globalKeyup: function(t) {
				var e = t.target,
					i = t.key,
					a = t.keyCode;
				this.isInput && e !== this.element && this.shown && ("Tab" === i || 9 === a) && this.hide()
			},
			touchstart: function(e) {
				var i = e.target;
				this.isInput && i !== this.element && !t.contains(this.$picker[0], i) && (this.hide(), this.element.blur())
			}
		},
		E = {
			render: function() {
				this.renderYears(), this.renderMonths(), this.renderDays()
			},
			renderWeek: function() {
				var e = this,
					i = [],
					a = this.options,
					s = a.weekStart,
					n = a.daysMin;
				s = parseInt(s, 10) % 7, n = n.slice(s).concat(n.slice(0, s)), t.each(n, function(t, a) {
					i.push(e.createItem({
						text: a
					}))
				}), this.$week.html(i.join(""))
			},
			renderYears: function() {
				var t, e = this.options,
					i = this.startDate,
					a = this.endDate,
					s = e.disabledClass,
					n = e.filter,
					r = e.yearSuffix,
					h = this.viewDate.getFullYear(),
					o = new Date,
					l = o.getFullYear(),
					c = this.date.getFullYear(),
					d = -5,
					u = 6,
					p = [],
					f = !1,
					g = !1;
				for (t = d; u >= t; t += 1) {
					var y = new Date(h + t, 1, 1),
						m = !1;
					i && (m = y.getFullYear() < i.getFullYear(), t === d && (f = m)), !m && a && (m = y.getFullYear() > a.getFullYear(), t === u && (g = m)), !m && n && (m = n.call(this.$element, y, "year") === !1);
					var v = h + t === c,
						w = v ? "year picked" : "year";
					p.push(this.createItem({
						picked: v,
						disabled: m,
						text: h + t,
						view: m ? "year disabled" : w,
						highlighted: y.getFullYear() === l
					}))
				}
				this.$yearsPrev.toggleClass(s, f), this.$yearsNext.toggleClass(s, g), this.$yearsCurrent.toggleClass(s, !0).html("".concat(h + d + r, " - ").concat(h + u).concat(r)), this.$years.html(p.join(""))
			},
			renderMonths: function() {
				var e, i = this.options,
					a = this.startDate,
					s = this.endDate,
					n = this.viewDate,
					r = i.disabledClass || "",
					h = i.monthsShort,
					o = t.isFunction(i.filter) && i.filter,
					l = n.getFullYear(),
					c = new Date,
					d = c.getFullYear(),
					u = c.getMonth(),
					p = this.date.getFullYear(),
					f = this.date.getMonth(),
					g = [],
					y = !1,
					m = !1;
				for (e = 0; 11 >= e; e += 1) {
					var v = new Date(l, e, 1),
						w = !1;
					a && (y = v.getFullYear() === a.getFullYear(), w = y && v.getMonth() < a.getMonth()), !w && s && (m = v.getFullYear() === s.getFullYear(), w = m && v.getMonth() > s.getMonth()), !w && o && (w = o.call(this.$element, v, "month") === !1);
					var k = l === p && e === f,
						D = k ? "month picked" : "month";
					g.push(this.createItem({
						disabled: w,
						picked: k,
						highlighted: l === d && v.getMonth() === u,
						index: e,
						text: h[e],
						view: w ? "month disabled" : D
					}))
				}
				this.$yearPrev.toggleClass(r, y), this.$yearNext.toggleClass(r, m), this.$yearCurrent.toggleClass(r, y && m).html(l + i.yearSuffix || ""), this.$months.html(g.join(""))
			},
			renderDays: function() {
				var t, e, i, a = this.$element,
					s = this.options,
					n = this.startDate,
					r = this.endDate,
					h = this.viewDate,
					o = this.date,
					l = s.disabledClass,
					c = s.filter,
					d = s.months,
					p = s.weekStart,
					f = s.yearSuffix,
					g = h.getFullYear(),
					y = h.getMonth(),
					m = new Date,
					v = m.getFullYear(),
					w = m.getMonth(),
					k = m.getDate(),
					D = o.getFullYear(),
					b = o.getMonth(),
					C = o.getDate(),
					$ = [],
					x = g,
					F = y,
					M = !1;
				0 === y ? (x -= 1, F = 11) : F -= 1, t = u(x, F);
				var Y = new Date(g, y, 1);
				for (i = Y.getDay() - parseInt(p, 10) % 7, 0 >= i && (i += 7), n && (M = Y.getTime() <= n.getTime()), e = t - (i - 1); t >= e; e += 1) {
					var S = new Date(x, F, e),
						T = !1;
					n && (T = S.getTime() < n.getTime()), !T && c && (T = c.call(a, S, "day") === !1), $.push(this.createItem({
						disabled: T,
						highlighted: x === v && F === w && S.getDate() === k,
						muted: !0,
						picked: x === D && F === b && e === C,
						text: e,
						view: "day prev"
					}))
				}
				var V = [],
					I = g,
					N = y,
					P = !1;
				11 === y ? (I += 1, N = 0) : N += 1, t = u(g, y), i = 42 - ($.length + t);
				var j = new Date(g, y, t);
				for (r && (P = j.getTime() >= r.getTime()), e = 1; i >= e; e += 1) {
					var A = new Date(I, N, e),
						O = I === D && N === b && e === C,
						q = !1;
					r && (q = A.getTime() > r.getTime()), !q && c && (q = c.call(a, A, "day") === !1), V.push(this.createItem({
						disabled: q,
						picked: O,
						highlighted: I === v && N === w && A.getDate() === k,
						muted: !0,
						text: e,
						view: "day next"
					}))
				}
				var H = [];
				for (e = 1; t >= e; e += 1) {
					var E = new Date(g, y, e),
						W = !1;
					n && (W = E.getTime() < n.getTime()), !W && r && (W = E.getTime() > r.getTime()), !W && c && (W = c.call(a, E, "day") === !1);
					var z = g === D && y === b && e === C,
						J = z ? "day picked" : "day";
					H.push(this.createItem({
						disabled: W,
						picked: z,
						highlighted: g === v && y === w && E.getDate() === k,
						text: e,
						view: W ? "day disabled" : J
					}))
				}
				this.$monthPrev.toggleClass(l, M), this.$monthNext.toggleClass(l, P), this.$monthCurrent.toggleClass(l, M && P).html(s.yearFirst ? "".concat(g + f, " ").concat(d[y]) : "".concat(d[y], " ").concat(g).concat(f)), this.$days.html($.join("") + H.join("") + V.join(""))
			}
		},
		W = "".concat(D, "-top-left"),
		z = "".concat(D, "-top-right"),
		J = "".concat(D, "-bottom-left"),
		R = "".concat(D, "-bottom-right"),
		G = [W, z, J, R].join(" "),
		K = function() {
			function i(a) {
				var s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
				e(this, i), this.$element = t(a), this.element = a, this.options = t.extend({}, m, I[s.language], t.isPlainObject(s) && s), this.$scrollParent = g(a, !0), this.built = !1, this.shown = !1, this.isInput = !1, this.inline = !1, this.initialValue = "", this.initialDate = null, this.startDate = null, this.endDate = null, this.init()
			}
			return a(i, [{
				key: "init",
				value: function() {
					var e = this.$element,
						i = this.options,
						a = i.startDate,
						s = i.endDate,
						n = i.date;
					this.$trigger = t(i.trigger), this.isInput = e.is("input") || e.is("textarea"), this.inline = i.inline && (i.container || !this.isInput), this.format = f(i.format);
					var r = this.getValue();
					this.initialValue = r, this.oldValue = r, n = this.parseDate(n || r), a && (a = this.parseDate(a), n.getTime() < a.getTime() && (n = new Date(a)), this.startDate = a), s && (s = this.parseDate(s), a && s.getTime() < a.getTime() && (s = new Date(a)), n.getTime() > s.getTime() && (n = new Date(s)), this.endDate = s), this.date = n, this.viewDate = new Date(n), this.initialDate = new Date(this.date), this.bind(), (i.autoShow || this.inline) && this.show(), i.autoPick && this.pick()
				}
			}, {
				key: "build",
				value: function() {
					if (!this.built) {
						this.built = !0;
						var e = this.$element,
							i = this.options,
							a = t(i.template);
						this.$picker = a, this.$week = a.find(c("week")), this.$yearsPicker = a.find(c("years picker")), this.$yearsPrev = a.find(c("years prev")), this.$yearsNext = a.find(c("years next")), this.$yearsCurrent = a.find(c("years current")), this.$years = a.find(c("years")), this.$monthsPicker = a.find(c("months picker")), this.$yearPrev = a.find(c("year prev")), this.$yearNext = a.find(c("year next")), this.$yearCurrent = a.find(c("year current")), this.$months = a.find(c("months")), this.$daysPicker = a.find(c("days picker")), this.$monthPrev = a.find(c("month prev")), this.$monthNext = a.find(c("month next")), this.$monthCurrent = a.find(c("month current")), this.$days = a.find(c("days")), this.inline ? t(i.container || e).append(a.addClass("".concat(D, "-inline"))) : (t(document.body).append(a.addClass("".concat(D, "-dropdown"))), a.addClass(V).css({
							zIndex: parseInt(i.zIndex, 10)
						})), this.renderWeek()
					}
				}
			}, {
				key: "unbuild",
				value: function() {
					this.built && (this.built = !1, this.$picker.remove())
				}
			}, {
				key: "bind",
				value: function() {
					var e = this.options,
						i = this.$element;
					t.isFunction(e.show) && i.on(S, e.show), t.isFunction(e.hide) && i.on($, e.hide), t.isFunction(e.pick) && i.on(F, e.pick), this.isInput && i.on(x, t.proxy(this.keyup, this)), this.inline || (e.trigger ? this.$trigger.on(b, t.proxy(this.toggle, this)) : this.isInput ? i.on(C, t.proxy(this.show, this)) : i.on(b, t.proxy(this.show, this)))
				}
			}, {
				key: "unbind",
				value: function() {
					var e = this.$element,
						i = this.options;
					t.isFunction(i.show) && e.off(S, i.show), t.isFunction(i.hide) && e.off($, i.hide), t.isFunction(i.pick) && e.off(F, i.pick), this.isInput && e.off(x, this.keyup), this.inline || (i.trigger ? this.$trigger.off(b, this.toggle) : this.isInput ? e.off(C, this.show) : e.off(b, this.show))
				}
			}, {
				key: "showView",
				value: function(t) {
					var e = this.$yearsPicker,
						i = this.$monthsPicker,
						a = this.$daysPicker,
						s = this.format;
					if (s.hasYear || s.hasMonth || s.hasDay) switch (Number(t)) {
						case N.YEARS:
							i.addClass(V), a.addClass(V), s.hasYear ? (this.renderYears(), e.removeClass(V), this.place()) : this.showView(N.DAYS);
							break;
						case N.MONTHS:
							e.addClass(V), a.addClass(V), s.hasMonth ? (this.renderMonths(), i.removeClass(V), this.place()) : this.showView(N.YEARS);
							break;
						default:
							e.addClass(V), i.addClass(V), s.hasDay ? (this.renderDays(), a.removeClass(V), this.place()) : this.showView(N.MONTHS)
					}
				}
			}, {
				key: "hideView",
				value: function() {
					!this.inline && this.options.autoHide && this.hide()
				}
			}, {
				key: "place",
				value: function() {
					if (!this.inline) {
						var e = this.$element,
							i = this.options,
							a = this.$picker,
							s = t(document).outerWidth(),
							n = t(document).outerHeight(),
							r = e.outerWidth(),
							h = e.outerHeight(),
							o = a.width(),
							l = a.height(),
							c = e.offset(),
							d = c.left,
							u = c.top,
							p = parseFloat(i.offset),
							f = W;
						j(p) && (p = 10), u > l && u + h + l > n ? (u -= l + p, f = J) : u += h + p, d + o > s && (d += r - o, f = f.replace("left", "right")), a.removeClass(G).addClass(f).css({
							top: u,
							left: d
						})
					}
				}
			}, {
				key: "trigger",
				value: function(e, i) {
					var a = t.Event(e, i);
					return this.$element.trigger(a), a
				}
			}, {
				key: "createItem",
				value: function(e) {
					var i = this.options,
						a = i.itemTag,
						s = {
							text: "",
							view: "",
							muted: !1,
							picked: !1,
							disabled: !1,
							highlighted: !1
						},
						n = [];
					return t.extend(s, e), s.muted && n.push(i.mutedClass), s.highlighted && n.push(i.highlightedClass), s.picked && n.push(i.pickedClass), s.disabled && n.push(i.disabledClass), "<".concat(a, ' class="').concat(n.join(" "), '" data-view="').concat(s.view, '">').concat(s.text, "</").concat(a, ">")
				}
			}, {
				key: "getValue",
				value: function() {
					var t = this.$element;
					return this.isInput ? t.val() : t.text()
				}
			}, {
				key: "setValue",
				value: function() {
					var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
						e = this.$element;
					this.isInput ? e.val(t) : this.inline && !this.options.container || e.text(t)
				}
			}], [{
				key: "setDefaults",
				value: function() {
					var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
					t.extend(m, I[e.language], t.isPlainObject(e) && e)
				}
			}]), i
		}();
	if (t.extend && t.extend(K.prototype, E, H, q), t.fn) {
		var L = t.fn.datepicker;
		t.fn.datepicker = function(e) {
			for (var i = arguments.length, a = new Array(i > 1 ? i - 1 : 0), s = 1; i > s; s++) a[s - 1] = arguments[s];
			var r;
			return this.each(function(i, s) {
				var h = t(s),
					o = "destroy" === e,
					l = h.data(D);
				if (!l) {
					if (o) return;
					var c = t.extend({}, h.data(), t.isPlainObject(e) && e);
					l = new K(s, c), h.data(D, l)
				}
				if (n(e)) {
					var d = l[e];
					t.isFunction(d) && (r = d.apply(l, a), o && h.removeData(D))
				}
			}), h(r) ? this : r
		}, t.fn.datepicker.Constructor = K, t.fn.datepicker.languages = I, t.fn.datepicker.setDefaults = K.setDefaults, t.fn.datepicker.noConflict = function() {
			return t.fn.datepicker = L, this
		}
	}
});

function ClusterIcon(t, e) {
	t.getMarkerClusterer().extend(ClusterIcon, google.maps.OverlayView), this.cluster_ = t, this.className_ = t.getMarkerClusterer().getClusterClass(), this.styles_ = e, this.center_ = null, this.div_ = null, this.sums_ = null, this.visible_ = !1, this.setMap(t.getMap())
}

function Cluster(t) {
	this.markerClusterer_ = t, this.map_ = t.getMap(), this.gridSize_ = t.getGridSize(), this.minClusterSize_ = t.getMinimumClusterSize(), this.averageCenter_ = t.getAverageCenter(), this.markers_ = [], this.center_ = null, this.bounds_ = null, this.clusterIcon_ = new ClusterIcon(this, t.getStyles())
}

function MarkerClusterer(t, e, r) {
	this.extend(MarkerClusterer, google.maps.OverlayView), e = e || [], r = r || {}, this.markers_ = [], this.clusters_ = [], this.listeners_ = [], this.activeMap_ = null, this.ready_ = !1, this.gridSize_ = r.gridSize || 60, this.minClusterSize_ = r.minimumClusterSize || 2, this.maxZoom_ = r.maxZoom || null, this.styles_ = r.styles || [], this.title_ = r.title || "", this.zoomOnClick_ = !0, void 0 !== r.zoomOnClick && (this.zoomOnClick_ = r.zoomOnClick), this.averageCenter_ = !1, void 0 !== r.averageCenter && (this.averageCenter_ = r.averageCenter), this.ignoreHidden_ = !1, void 0 !== r.ignoreHidden && (this.ignoreHidden_ = r.ignoreHidden), this.enableRetinaIcons_ = !1, void 0 !== r.enableRetinaIcons && (this.enableRetinaIcons_ = r.enableRetinaIcons), this.imagePath_ = r.imagePath || MarkerClusterer.IMAGE_PATH, this.imageExtension_ = r.imageExtension || MarkerClusterer.IMAGE_EXTENSION, this.imageSizes_ = r.imageSizes || MarkerClusterer.IMAGE_SIZES, this.calculator_ = r.calculator || MarkerClusterer.CALCULATOR, this.batchSize_ = r.batchSize || MarkerClusterer.BATCH_SIZE, this.batchSizeIE_ = r.batchSizeIE || MarkerClusterer.BATCH_SIZE_IE, this.clusterClass_ = r.clusterClass || "cluster", -1 !== navigator.userAgent.toLowerCase().indexOf("msie") && (this.batchSize_ = this.batchSizeIE_), this.setupStyles_(), this.addMarkers(e, !0), this.setMap(t)
}
ClusterIcon.prototype.onAdd = function() {
	var t, e, r = this,
		s = google.maps.version.split(".");
	s = parseInt(100 * s[0], 10) + parseInt(s[1], 10), this.div_ = document.createElement("div"), this.div_.className = this.className_, this.visible_ && this.show(), this.getPanes().overlayMouseTarget.appendChild(this.div_), this.boundsChangedListener_ = google.maps.event.addListener(this.getMap(), "bounds_changed", function() {
		e = t
	}), google.maps.event.addDomListener(this.div_, "mousedown", function() {
		t = !0, e = !1
	}), s >= 332 && google.maps.event.addDomListener(this.div_, "touchstart", function(t) {
		t.stopPropagation()
	}), google.maps.event.addDomListener(this.div_, "click", function(s) {
		if (t = !1, !e) {
			var i, o, n = r.cluster_.getMarkerClusterer();
			google.maps.event.trigger(n, "click", r.cluster_), google.maps.event.trigger(n, "clusterclick", r.cluster_), n.getZoomOnClick() && (o = n.getMaxZoom(), i = r.cluster_.getBounds(), n.getMap().fitBounds(i), setTimeout(function() {
				n.getMap().fitBounds(i), null !== o && n.getMap().getZoom() > o && n.getMap().setZoom(o + 1)
			}, 100)), s.cancelBubble = !0, s.stopPropagation && s.stopPropagation()
		}
	}), google.maps.event.addDomListener(this.div_, "mouseover", function() {
		var t = r.cluster_.getMarkerClusterer();
		google.maps.event.trigger(t, "mouseover", r.cluster_)
	}), google.maps.event.addDomListener(this.div_, "mouseout", function() {
		var t = r.cluster_.getMarkerClusterer();
		google.maps.event.trigger(t, "mouseout", r.cluster_)
	})
}, ClusterIcon.prototype.onRemove = function() {
	this.div_ && this.div_.parentNode && (this.hide(), google.maps.event.removeListener(this.boundsChangedListener_), google.maps.event.clearInstanceListeners(this.div_), this.div_.parentNode.removeChild(this.div_), this.div_ = null)
}, ClusterIcon.prototype.draw = function() {
	if (this.visible_) {
		var t = this.getPosFromLatLng_(this.center_);
		this.div_.style.top = t.y + "px", this.div_.style.left = t.x + "px", this.div_.style.zIndex = google.maps.Marker.MAX_ZINDEX + 1
	}
}, ClusterIcon.prototype.hide = function() {
	this.div_ && (this.div_.style.display = "none"), this.visible_ = !1
}, ClusterIcon.prototype.show = function() {
	if (this.div_) {
		var t = "",
			e = this.backgroundPosition_.split(" "),
			r = parseInt(e[0].replace(/^\s+|\s+$/g, ""), 10),
			s = parseInt(e[1].replace(/^\s+|\s+$/g, ""), 10),
			i = this.getPosFromLatLng_(this.center_);
		this.div_.style.cssText = this.createCss(i), t = "<img src='" + this.url_ + "' style='position: absolute; top: " + s + "px; left: " + r + "px; ", t += this.cluster_.getMarkerClusterer().enableRetinaIcons_ ? "width: " + this.width_ + "px; height: " + this.height_ + "px;" : "clip: rect(" + -1 * s + "px, " + (-1 * r + this.width_) + "px, " + (-1 * s + this.height_) + "px, " + -1 * r + "px);", t += "'>", this.div_.innerHTML = t + "<div style='position: absolute;top: " + this.anchorText_[0] + "px;left: " + this.anchorText_[1] + "px;color: " + this.textColor_ + ";font-size: " + this.textSize_ + "px;font-family: " + this.fontFamily_ + ";font-weight: " + this.fontWeight_ + ";font-style: " + this.fontStyle_ + ";text-decoration: " + this.textDecoration_ + ";text-align: center;width: " + this.width_ + "px;line-height:" + this.height_ + "px;'>" + this.sums_.text + "</div>", "undefined" == typeof this.sums_.title || "" === this.sums_.title ? this.div_.title = this.cluster_.getMarkerClusterer().getTitle() : this.div_.title = this.sums_.title, this.div_.style.display = ""
	}
	this.visible_ = !0
}, ClusterIcon.prototype.useStyle = function(t) {
	this.sums_ = t;
	var e = Math.max(0, t.index - 1);
	e = Math.min(this.styles_.length - 1, e);
	var r = this.styles_[e];
	this.url_ = r.url, this.height_ = r.height, this.width_ = r.width, this.anchorText_ = r.anchorText || [0, 0], this.anchorIcon_ = r.anchorIcon || [parseInt(this.height_ / 2, 10), parseInt(this.width_ / 2, 10)], this.textColor_ = r.textColor || "black", this.textSize_ = r.textSize || 11, this.textDecoration_ = r.textDecoration || "none", this.fontWeight_ = r.fontWeight || "bold", this.fontStyle_ = r.fontStyle || "normal", this.fontFamily_ = r.fontFamily || "Arial,sans-serif", this.backgroundPosition_ = r.backgroundPosition || "0 0"
}, ClusterIcon.prototype.setCenter = function(t) {
	this.center_ = t
}, ClusterIcon.prototype.createCss = function(t) {
	var e = [];
	return e.push("cursor: pointer;"), e.push("position: absolute; top: " + t.y + "px; left: " + t.x + "px;"), e.push("width: " + this.width_ + "px; height: " + this.height_ + "px;"), e.push("-webkit-user-select: none;"), e.push("-khtml-user-select: none;"), e.push("-moz-user-select: none;"), e.push("-o-user-select: none;"), e.push("user-select: none;"), e.join("")
}, ClusterIcon.prototype.getPosFromLatLng_ = function(t) {
	var e = this.getProjection().fromLatLngToDivPixel(t);
	return e.x -= this.anchorIcon_[1], e.y -= this.anchorIcon_[0], e.x = parseInt(e.x, 10), e.y = parseInt(e.y, 10), e
}, Cluster.prototype.getSize = function() {
	return this.markers_.length
}, Cluster.prototype.getMarkers = function() {
	return this.markers_
}, Cluster.prototype.getCenter = function() {
	return this.center_
}, Cluster.prototype.getMap = function() {
	return this.map_
}, Cluster.prototype.getMarkerClusterer = function() {
	return this.markerClusterer_
}, Cluster.prototype.getBounds = function() {
	var t, e = new google.maps.LatLngBounds(this.center_, this.center_),
		r = this.getMarkers();
	for (t = 0; t < r.length; t++) e.extend(r[t].getPosition());
	return e
}, Cluster.prototype.remove = function() {
	this.clusterIcon_.setMap(null), this.markers_ = [], delete this.markers_
}, Cluster.prototype.addMarker = function(t) {
	var e, r, s;
	if (this.isMarkerAlreadyAdded_(t)) return !1;
	if (this.center_) {
		if (this.averageCenter_) {
			var i = this.markers_.length + 1,
				o = (this.center_.lat() * (i - 1) + t.getPosition().lat()) / i,
				n = (this.center_.lng() * (i - 1) + t.getPosition().lng()) / i;
			this.center_ = new google.maps.LatLng(o, n), this.calculateBounds_()
		}
	} else this.center_ = t.getPosition(), this.calculateBounds_();
	if (t.isAdded = !0, this.markers_.push(t), r = this.markers_.length, s = this.markerClusterer_.getMaxZoom(), null !== s && this.map_.getZoom() > s) t.getMap() !== this.map_ && t.setMap(this.map_);
	else if (r < this.minClusterSize_) t.getMap() !== this.map_ && t.setMap(this.map_);
	else if (r === this.minClusterSize_)
		for (e = 0; r > e; e++) this.markers_[e].setMap(null);
	else t.setMap(null);
	return this.updateIcon_(), !0
}, Cluster.prototype.isMarkerInClusterBounds = function(t) {
	return this.bounds_.contains(t.getPosition())
}, Cluster.prototype.calculateBounds_ = function() {
	var t = new google.maps.LatLngBounds(this.center_, this.center_);
	this.bounds_ = this.markerClusterer_.getExtendedBounds(t)
}, Cluster.prototype.updateIcon_ = function() {
	var t = this.markers_.length,
		e = this.markerClusterer_.getMaxZoom();
	if (null !== e && this.map_.getZoom() > e) return void this.clusterIcon_.hide();
	if (t < this.minClusterSize_) return void this.clusterIcon_.hide();
	var r = this.markerClusterer_.getStyles().length,
		s = this.markerClusterer_.getCalculator()(this.markers_, r);
	this.clusterIcon_.setCenter(this.center_), this.clusterIcon_.useStyle(s), this.clusterIcon_.show()
}, Cluster.prototype.isMarkerAlreadyAdded_ = function(t) {
	var e;
	if (this.markers_.indexOf) return -1 !== this.markers_.indexOf(t);
	for (e = 0; e < this.markers_.length; e++)
		if (t === this.markers_[e]) return !0;
	return !1
}, MarkerClusterer.prototype.onAdd = function() {
	var t = this;
	this.activeMap_ = this.getMap(), this.ready_ = !0, this.repaint(), this.prevZoom_ = this.getMap().getZoom(), this.listeners_ = [google.maps.event.addListener(this.getMap(), "zoom_changed", function() {
		var t = this.getMap().getZoom(),
			e = this.getMap().minZoom || 0,
			r = Math.min(this.getMap().maxZoom || 100, this.getMap().mapTypes[this.getMap().getMapTypeId()].maxZoom);
		t = Math.min(Math.max(t, e), r), this.prevZoom_ != t && (this.prevZoom_ = t, this.resetViewport_(!1))
	}.bind(this)), google.maps.event.addListener(this.getMap(), "idle", function() {
		t.redraw_()
	})]
}, MarkerClusterer.prototype.onRemove = function() {
	var t;
	for (t = 0; t < this.markers_.length; t++) this.markers_[t].getMap() !== this.activeMap_ && this.markers_[t].setMap(this.activeMap_);
	for (t = 0; t < this.clusters_.length; t++) this.clusters_[t].remove();
	for (this.clusters_ = [], t = 0; t < this.listeners_.length; t++) google.maps.event.removeListener(this.listeners_[t]);
	this.listeners_ = [], this.activeMap_ = null, this.ready_ = !1
}, MarkerClusterer.prototype.draw = function() {}, MarkerClusterer.prototype.setupStyles_ = function() {
	var t, e;
	if (!(this.styles_.length > 0))
		for (t = 0; t < this.imageSizes_.length; t++) e = this.imageSizes_[t], this.styles_.push({
			url: this.imagePath_ + (t + 1) + "." + this.imageExtension_,
			height: e,
			width: e
		})
}, MarkerClusterer.prototype.fitMapToMarkers = function() {
	var t, e = this.getMarkers(),
		r = new google.maps.LatLngBounds;
	for (t = 0; t < e.length; t++) !e[t].getVisible() && this.getIgnoreHidden() || r.extend(e[t].getPosition());
	this.getMap().fitBounds(r)
}, MarkerClusterer.prototype.getGridSize = function() {
	return this.gridSize_
}, MarkerClusterer.prototype.setGridSize = function(t) {
	this.gridSize_ = t
}, MarkerClusterer.prototype.getMinimumClusterSize = function() {
	return this.minClusterSize_
}, MarkerClusterer.prototype.setMinimumClusterSize = function(t) {
	this.minClusterSize_ = t
}, MarkerClusterer.prototype.getMaxZoom = function() {
	return this.maxZoom_
}, MarkerClusterer.prototype.setMaxZoom = function(t) {
	this.maxZoom_ = t
}, MarkerClusterer.prototype.getStyles = function() {
	return this.styles_
}, MarkerClusterer.prototype.setStyles = function(t) {
	this.styles_ = t
}, MarkerClusterer.prototype.getTitle = function() {
	return this.title_
}, MarkerClusterer.prototype.setTitle = function(t) {
	this.title_ = t
}, MarkerClusterer.prototype.getZoomOnClick = function() {
	return this.zoomOnClick_
}, MarkerClusterer.prototype.setZoomOnClick = function(t) {
	this.zoomOnClick_ = t
}, MarkerClusterer.prototype.getAverageCenter = function() {
	return this.averageCenter_
}, MarkerClusterer.prototype.setAverageCenter = function(t) {
	this.averageCenter_ = t
}, MarkerClusterer.prototype.getIgnoreHidden = function() {
	return this.ignoreHidden_
}, MarkerClusterer.prototype.setIgnoreHidden = function(t) {
	this.ignoreHidden_ = t
}, MarkerClusterer.prototype.getEnableRetinaIcons = function() {
	return this.enableRetinaIcons_
}, MarkerClusterer.prototype.setEnableRetinaIcons = function(t) {
	this.enableRetinaIcons_ = t
}, MarkerClusterer.prototype.getImageExtension = function() {
	return this.imageExtension_
}, MarkerClusterer.prototype.setImageExtension = function(t) {
	this.imageExtension_ = t
}, MarkerClusterer.prototype.getImagePath = function() {
	return this.imagePath_
}, MarkerClusterer.prototype.setImagePath = function(t) {
	this.imagePath_ = t
}, MarkerClusterer.prototype.getImageSizes = function() {
	return this.imageSizes_
}, MarkerClusterer.prototype.setImageSizes = function(t) {
	this.imageSizes_ = t
}, MarkerClusterer.prototype.getCalculator = function() {
	return this.calculator_
}, MarkerClusterer.prototype.setCalculator = function(t) {
	this.calculator_ = t
}, MarkerClusterer.prototype.getBatchSizeIE = function() {
	return this.batchSizeIE_
}, MarkerClusterer.prototype.setBatchSizeIE = function(t) {
	this.batchSizeIE_ = t
}, MarkerClusterer.prototype.getClusterClass = function() {
	return this.clusterClass_
}, MarkerClusterer.prototype.setClusterClass = function(t) {
	this.clusterClass_ = t
}, MarkerClusterer.prototype.getMarkers = function() {
	return this.markers_
}, MarkerClusterer.prototype.getTotalMarkers = function() {
	return this.markers_.length
}, MarkerClusterer.prototype.getClusters = function() {
	return this.clusters_
}, MarkerClusterer.prototype.getTotalClusters = function() {
	return this.clusters_.length
}, MarkerClusterer.prototype.addMarker = function(t, e) {
	this.pushMarkerTo_(t), e || this.redraw_()
}, MarkerClusterer.prototype.addMarkers = function(t, e) {
	var r;
	for (r in t) t.hasOwnProperty(r) && this.pushMarkerTo_(t[r]);
	e || this.redraw_()
}, MarkerClusterer.prototype.pushMarkerTo_ = function(t) {
	if (t.getDraggable()) {
		var e = this;
		google.maps.event.addListener(t, "dragend", function() {
			e.ready_ && (this.isAdded = !1, e.repaint())
		})
	}
	t.isAdded = !1, this.markers_.push(t)
}, MarkerClusterer.prototype.removeMarker = function(t, e) {
	var r = this.removeMarker_(t);
	return !e && r && this.repaint(), r
}, MarkerClusterer.prototype.removeMarkers = function(t, e) {
	var r, s, i = !1;
	for (r = 0; r < t.length; r++) s = this.removeMarker_(t[r]), i = i || s;
	return !e && i && this.repaint(), i
}, MarkerClusterer.prototype.removeMarker_ = function(t) {
	var e, r = -1;
	if (this.markers_.indexOf) r = this.markers_.indexOf(t);
	else
		for (e = 0; e < this.markers_.length; e++)
			if (t === this.markers_[e]) {
				r = e;
				break
			} return -1 === r ? !1 : (t.setMap(null), this.markers_.splice(r, 1), !0)
}, MarkerClusterer.prototype.clearMarkers = function() {
	this.resetViewport_(!0), this.markers_ = []
}, MarkerClusterer.prototype.repaint = function() {
	var t = this.clusters_.slice();
	this.clusters_ = [], this.resetViewport_(!1), this.redraw_(), setTimeout(function() {
		var e;
		for (e = 0; e < t.length; e++) t[e].remove()
	}, 0)
}, MarkerClusterer.prototype.getExtendedBounds = function(t) {
	var e = this.getProjection(),
		r = new google.maps.LatLng(t.getNorthEast().lat(), t.getNorthEast().lng()),
		s = new google.maps.LatLng(t.getSouthWest().lat(), t.getSouthWest().lng()),
		i = e.fromLatLngToDivPixel(r);
	i.x += this.gridSize_, i.y -= this.gridSize_;
	var o = e.fromLatLngToDivPixel(s);
	o.x -= this.gridSize_, o.y += this.gridSize_;
	var n = e.fromDivPixelToLatLng(i),
		a = e.fromDivPixelToLatLng(o);
	return t.extend(n), t.extend(a), t
}, MarkerClusterer.prototype.redraw_ = function() {
	this.createClusters_(0)
}, MarkerClusterer.prototype.resetViewport_ = function(t) {
	var e, r;
	for (e = 0; e < this.clusters_.length; e++) this.clusters_[e].remove();
	for (this.clusters_ = [], e = 0; e < this.markers_.length; e++) r = this.markers_[e], r.isAdded = !1, t && r.setMap(null)
}, MarkerClusterer.prototype.distanceBetweenPoints_ = function(t, e) {
	var r = 6371,
		s = (e.lat() - t.lat()) * Math.PI / 180,
		i = (e.lng() - t.lng()) * Math.PI / 180,
		o = Math.sin(s / 2) * Math.sin(s / 2) + Math.cos(t.lat() * Math.PI / 180) * Math.cos(e.lat() * Math.PI / 180) * Math.sin(i / 2) * Math.sin(i / 2),
		n = 2 * Math.atan2(Math.sqrt(o), Math.sqrt(1 - o)),
		a = r * n;
	return a
}, MarkerClusterer.prototype.isMarkerInBounds_ = function(t, e) {
	return e.contains(t.getPosition())
}, MarkerClusterer.prototype.addToClosestCluster_ = function(t) {
	var e, r, s, i, o = 4e4,
		n = null;
	for (e = 0; e < this.clusters_.length; e++) s = this.clusters_[e], i = s.getCenter(), i && (r = this.distanceBetweenPoints_(i, t.getPosition()), o > r && (o = r, n = s));
	n && n.isMarkerInClusterBounds(t) ? n.addMarker(t) : (s = new Cluster(this), s.addMarker(t), this.clusters_.push(s))
}, MarkerClusterer.prototype.createClusters_ = function(t) {
	var e, r, s, i = this;
	if (this.ready_) {
		0 === t && (google.maps.event.trigger(this, "clusteringbegin", this), "undefined" != typeof this.timerRefStatic && (clearTimeout(this.timerRefStatic), delete this.timerRefStatic)), s = this.getMap().getZoom() > 3 ? new google.maps.LatLngBounds(this.getMap().getBounds().getSouthWest(), this.getMap().getBounds().getNorthEast()) : new google.maps.LatLngBounds(new google.maps.LatLng(85.02070771743472, -178.48388434375), new google.maps.LatLng(-85.08136444384544, 178.00048865625));
		var o = this.getExtendedBounds(s),
			n = Math.min(t + this.batchSize_, this.markers_.length);
		for (e = t; n > e; e++) r = this.markers_[e], !r.isAdded && this.isMarkerInBounds_(r, o) && (!this.ignoreHidden_ || this.ignoreHidden_ && r.getVisible()) && this.addToClosestCluster_(r);
		n < this.markers_.length ? this.timerRefStatic = setTimeout(function() {
			i.createClusters_(n)
		}, 0) : (delete this.timerRefStatic, google.maps.event.trigger(this, "clusteringend", this))
	}
}, MarkerClusterer.prototype.extend = function(t, e) {
	return function(t) {
		var e;
		for (e in t.prototype) this.prototype[e] = t.prototype[e];
		return this
	}.apply(t, [e])
}, MarkerClusterer.CALCULATOR = function(t, e) {
	for (var r = 0, s = "", i = t.length.toString(), o = i; 0 !== o;) o = parseInt(o / 10, 10), r++;
	return r = Math.min(r, e), {
		text: i,
		index: r,
		title: s
	}
}, MarkerClusterer.BATCH_SIZE = 2e3, MarkerClusterer.BATCH_SIZE_IE = 500, MarkerClusterer.IMAGE_PATH = "../images/m", MarkerClusterer.IMAGE_EXTENSION = "png", MarkerClusterer.IMAGE_SIZES = [53, 56, 66, 78, 90], "object" == typeof module && (module.exports = MarkerClusterer);
! function(i) {
	"use strict";
	"function" == typeof define && define.amd ? define(["jquery"], i) : "undefined" != typeof exports ? module.exports = i(require("jquery")) : i(jQuery)
}(function(i) {
	"use strict";
	var e = window.Slick || {};
	e = function() {
		function e(e, o) {
			var s, n = this;
			n.defaults = {
				accessibility: !0,
				adaptiveHeight: !1,
				appendArrows: i(e),
				appendDots: i(e),
				arrows: !0,
				asNavFor: null,
				prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
				nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
				autoplay: !1,
				autoplaySpeed: 3e3,
				centerMode: !1,
				centerPadding: "50px",
				cssEase: "ease",
				customPaging: function(e, t) {
					return i('<button type="button" data-role="none" role="button" tabindex="0" />').text(t + 1)
				},
				dots: !1,
				dotsClass: "slick-dots",
				draggable: !0,
				easing: "linear",
				edgeFriction: .35,
				fade: !1,
				focusOnSelect: !1,
				infinite: !0,
				initialSlide: 0,
				lazyLoad: "ondemand",
				mobileFirst: !1,
				pauseOnHover: !0,
				pauseOnFocus: !0,
				pauseOnDotsHover: !1,
				respondTo: "window",
				responsive: null,
				rows: 1,
				rtl: !1,
				slide: "",
				slidesPerRow: 1,
				slidesToShow: 1,
				slidesToScroll: 1,
				speed: 500,
				swipe: !0,
				swipeToSlide: !1,
				touchMove: !0,
				touchThreshold: 5,
				useCSS: !0,
				useTransform: !0,
				variableWidth: !1,
				vertical: !1,
				verticalSwiping: !1,
				waitForAnimate: !0,
				zIndex: 1e3
			}, n.initials = {
				animating: !1,
				dragging: !1,
				autoPlayTimer: null,
				currentDirection: 0,
				currentLeft: null,
				currentSlide: 0,
				direction: 1,
				$dots: null,
				listWidth: null,
				listHeight: null,
				loadIndex: 0,
				$nextArrow: null,
				$prevArrow: null,
				slideCount: null,
				slideWidth: null,
				$slideTrack: null,
				$slides: null,
				sliding: !1,
				slideOffset: 0,
				swipeLeft: null,
				$list: null,
				touchObject: {},
				transformsEnabled: !1,
				unslicked: !1
			}, i.extend(n, n.initials), n.activeBreakpoint = null, n.animType = null, n.animProp = null, n.breakpoints = [], n.breakpointSettings = [], n.cssTransitions = !1, n.focussed = !1, n.interrupted = !1, n.hidden = "hidden", n.paused = !0, n.positionProp = null, n.respondTo = null, n.rowCount = 1, n.shouldClick = !0, n.$slider = i(e), n.$slidesCache = null, n.transformType = null, n.transitionType = null, n.visibilityChange = "visibilitychange", n.windowWidth = 0, n.windowTimer = null, s = i(e).data("slick") || {}, n.options = i.extend({}, n.defaults, o, s), n.currentSlide = n.options.initialSlide, n.originalSettings = n.options, "undefined" != typeof document.mozHidden ? (n.hidden = "mozHidden", n.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.webkitHidden && (n.hidden = "webkitHidden", n.visibilityChange = "webkitvisibilitychange"), n.autoPlay = i.proxy(n.autoPlay, n), n.autoPlayClear = i.proxy(n.autoPlayClear, n), n.autoPlayIterator = i.proxy(n.autoPlayIterator, n), n.changeSlide = i.proxy(n.changeSlide, n), n.clickHandler = i.proxy(n.clickHandler, n), n.selectHandler = i.proxy(n.selectHandler, n), n.setPosition = i.proxy(n.setPosition, n), n.swipeHandler = i.proxy(n.swipeHandler, n), n.dragHandler = i.proxy(n.dragHandler, n), n.keyHandler = i.proxy(n.keyHandler, n), n.instanceUid = t++, n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, n.registerBreakpoints(), n.init(!0)
		}
		var t = 0;
		return e
	}(), e.prototype.activateADA = function() {
		var i = this;
		i.$slideTrack.find(".slick-active").attr({
			"aria-hidden": "false"
		}).find("a, input, button, select").attr({
			tabindex: "0"
		})
	}, e.prototype.addSlide = e.prototype.slickAdd = function(e, t, o) {
		var s = this;
		if ("boolean" == typeof t) o = t, t = null;
		else if (0 > t || t >= s.slideCount) return !1;
		s.unload(), "number" == typeof t ? 0 === t && 0 === s.$slides.length ? i(e).appendTo(s.$slideTrack) : o ? i(e).insertBefore(s.$slides.eq(t)) : i(e).insertAfter(s.$slides.eq(t)) : o === !0 ? i(e).prependTo(s.$slideTrack) : i(e).appendTo(s.$slideTrack), s.$slides = s.$slideTrack.children(this.options.slide), s.$slideTrack.children(this.options.slide).detach(), s.$slideTrack.append(s.$slides), s.$slides.each(function(e, t) {
			i(t).attr("data-slick-index", e)
		}), s.$slidesCache = s.$slides, s.reinit()
	}, e.prototype.animateHeight = function() {
		var i = this;
		if (1 === i.options.slidesToShow && i.options.adaptiveHeight === !0 && i.options.vertical === !1) {
			var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
			i.$list.animate({
				height: e
			}, i.options.speed)
		}
	}, e.prototype.animateSlide = function(e, t) {
		var o = {},
			s = this;
		s.animateHeight(), s.options.rtl === !0 && s.options.vertical === !1 && (e = -e), s.transformsEnabled === !1 ? s.options.vertical === !1 ? s.$slideTrack.animate({
			left: e
		}, s.options.speed, s.options.easing, t) : s.$slideTrack.animate({
			top: e
		}, s.options.speed, s.options.easing, t) : s.cssTransitions === !1 ? (s.options.rtl === !0 && (s.currentLeft = -s.currentLeft), i({
			animStart: s.currentLeft
		}).animate({
			animStart: e
		}, {
			duration: s.options.speed,
			easing: s.options.easing,
			step: function(i) {
				i = Math.ceil(i), s.options.vertical === !1 ? (o[s.animType] = "translate(" + i + "px, 0px)", s.$slideTrack.css(o)) : (o[s.animType] = "translate(0px," + i + "px)", s.$slideTrack.css(o))
			},
			complete: function() {
				t && t.call()
			}
		})) : (s.applyTransition(), e = Math.ceil(e), s.options.vertical === !1 ? o[s.animType] = "translate3d(" + e + "px, 0px, 0px)" : o[s.animType] = "translate3d(0px," + e + "px, 0px)", s.$slideTrack.css(o), t && setTimeout(function() {
			s.disableTransition(), t.call()
		}, s.options.speed))
	}, e.prototype.getNavTarget = function() {
		var e = this,
			t = e.options.asNavFor;
		return t && null !== t && (t = i(t).not(e.$slider)), t
	}, e.prototype.asNavFor = function(e) {
		var t = this,
			o = t.getNavTarget();
		null !== o && "object" == typeof o && o.each(function() {
			var t = i(this).slick("getSlick");
			t.unslicked || t.slideHandler(e, !0)
		})
	}, e.prototype.applyTransition = function(i) {
		var e = this,
			t = {};
		e.options.fade === !1 ? t[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : t[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase, e.options.fade === !1 ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t)
	}, e.prototype.autoPlay = function() {
		var i = this;
		i.autoPlayClear(), i.slideCount > i.options.slidesToShow && (i.autoPlayTimer = setInterval(i.autoPlayIterator, i.options.autoplaySpeed))
	}, e.prototype.autoPlayClear = function() {
		var i = this;
		i.autoPlayTimer && clearInterval(i.autoPlayTimer)
	}, e.prototype.autoPlayIterator = function() {
		var i = this,
			e = i.currentSlide + i.options.slidesToScroll;
		i.paused || i.interrupted || i.focussed || (i.options.infinite === !1 && (1 === i.direction && i.currentSlide + 1 === i.slideCount - 1 ? i.direction = 0 : 0 === i.direction && (e = i.currentSlide - i.options.slidesToScroll, i.currentSlide - 1 === 0 && (i.direction = 1))), i.slideHandler(e))
	}, e.prototype.buildArrows = function() {
		var e = this;
		e.options.arrows === !0 && (e.$prevArrow = i(e.options.prevArrow).addClass("slick-arrow"), e.$nextArrow = i(e.options.nextArrow).addClass("slick-arrow"), e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), e.options.infinite !== !0 && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
			"aria-disabled": "true",
			tabindex: "-1"
		}))
	}, e.prototype.buildDots = function() {
		var e, t, o = this;
		if (o.options.dots === !0 && o.slideCount > o.options.slidesToShow) {
			for (o.$slider.addClass("slick-dotted"), t = i("<ul />").addClass(o.options.dotsClass), e = 0; e <= o.getDotCount(); e += 1) t.append(i("<li />").append(o.options.customPaging.call(this, o, e)));
			o.$dots = t.appendTo(o.options.appendDots), o.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
		}
	}, e.prototype.buildOut = function() {
		var e = this;
		e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), e.slideCount = e.$slides.length, e.$slides.each(function(e, t) {
			i(t).attr("data-slick-index", e).data("originalStyling", i(t).attr("style") || "")
		}), e.$slider.addClass("slick-slider"), e.$slideTrack = 0 === e.slideCount ? i('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(), e.$list = e.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), e.$slideTrack.css("opacity", 0), (e.options.centerMode === !0 || e.options.swipeToSlide === !0) && (e.options.slidesToScroll = 1), i("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"), e.setupInfinite(), e.buildArrows(), e.buildDots(), e.updateDots(), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.options.draggable === !0 && e.$list.addClass("draggable")
	}, e.prototype.buildRows = function() {
		var i, e, t, o, s, n, r, l = this;
		if (o = document.createDocumentFragment(), n = l.$slider.children(), l.options.rows > 1) {
			for (r = l.options.slidesPerRow * l.options.rows, s = Math.ceil(n.length / r), i = 0; s > i; i++) {
				var d = document.createElement("div");
				for (e = 0; e < l.options.rows; e++) {
					var a = document.createElement("div");
					for (t = 0; t < l.options.slidesPerRow; t++) {
						var c = i * r + (e * l.options.slidesPerRow + t);
						n.get(c) && a.appendChild(n.get(c))
					}
					d.appendChild(a)
				}
				o.appendChild(d)
			}
			l.$slider.empty().append(o), l.$slider.children().children().children().css({
				width: 100 / l.options.slidesPerRow + "%",
				display: "inline-block"
			})
		}
	}, e.prototype.checkResponsive = function(e, t) {
		var o, s, n, r = this,
			l = !1,
			d = r.$slider.width(),
			a = window.innerWidth || i(window).width();
		if ("window" === r.respondTo ? n = a : "slider" === r.respondTo ? n = d : "min" === r.respondTo && (n = Math.min(a, d)), r.options.responsive && r.options.responsive.length && null !== r.options.responsive) {
			s = null;
			for (o in r.breakpoints) r.breakpoints.hasOwnProperty(o) && (r.originalSettings.mobileFirst === !1 ? n < r.breakpoints[o] && (s = r.breakpoints[o]) : n > r.breakpoints[o] && (s = r.breakpoints[o]));
			null !== s ? null !== r.activeBreakpoint ? (s !== r.activeBreakpoint || t) && (r.activeBreakpoint = s, "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s]), e === !0 && (r.currentSlide = r.options.initialSlide), r.refresh(e)), l = s) : (r.activeBreakpoint = s, "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s]), e === !0 && (r.currentSlide = r.options.initialSlide), r.refresh(e)), l = s) : null !== r.activeBreakpoint && (r.activeBreakpoint = null, r.options = r.originalSettings, e === !0 && (r.currentSlide = r.options.initialSlide), r.refresh(e), l = s), e || l === !1 || r.$slider.trigger("breakpoint", [r, l])
		}
	}, e.prototype.changeSlide = function(e, t) {
		var o, s, n, r = this,
			l = i(e.currentTarget);
		switch (l.is("a") && e.preventDefault(), l.is("li") || (l = l.closest("li")), n = r.slideCount % r.options.slidesToScroll !== 0, o = n ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll, e.data.message) {
			case "previous":
				s = 0 === o ? r.options.slidesToScroll : r.options.slidesToShow - o, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - s, !1, t);
				break;
			case "next":
				s = 0 === o ? r.options.slidesToScroll : o, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + s, !1, t);
				break;
			case "index":
				var d = 0 === e.data.index ? 0 : e.data.index || l.index() * r.options.slidesToScroll;
				r.slideHandler(r.checkNavigable(d), !1, t), l.children().trigger("focus");
				break;
			default:
				return
		}
	}, e.prototype.checkNavigable = function(i) {
		var e, t, o = this;
		if (e = o.getNavigableIndexes(), t = 0, i > e[e.length - 1]) i = e[e.length - 1];
		else
			for (var s in e) {
				if (i < e[s]) {
					i = t;
					break
				}
				t = e[s]
			}
		return i
	}, e.prototype.cleanUpEvents = function() {
		var e = this;
		e.options.dots && null !== e.$dots && i("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", i.proxy(e.interrupt, e, !0)).off("mouseleave.slick", i.proxy(e.interrupt, e, !1)), e.$slider.off("focus.slick blur.slick"), e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide), e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide)), e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler), e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler), e.$list.off("touchend.slick mouseup.slick", e.swipeHandler), e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler), e.$list.off("click.slick", e.clickHandler), i(document).off(e.visibilityChange, e.visibility), e.cleanUpSlideEvents(), e.options.accessibility === !0 && e.$list.off("keydown.slick", e.keyHandler), e.options.focusOnSelect === !0 && i(e.$slideTrack).children().off("click.slick", e.selectHandler), i(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange), i(window).off("resize.slick.slick-" + e.instanceUid, e.resize), i("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault), i(window).off("load.slick.slick-" + e.instanceUid, e.setPosition), i(document).off("ready.slick.slick-" + e.instanceUid, e.setPosition)
	}, e.prototype.cleanUpSlideEvents = function() {
		var e = this;
		e.$list.off("mouseenter.slick", i.proxy(e.interrupt, e, !0)), e.$list.off("mouseleave.slick", i.proxy(e.interrupt, e, !1))
	}, e.prototype.cleanUpRows = function() {
		var i, e = this;
		e.options.rows > 1 && (i = e.$slides.children().children(), i.removeAttr("style"), e.$slider.empty().append(i))
	}, e.prototype.clickHandler = function(i) {
		var e = this;
		e.shouldClick === !1 && (i.stopImmediatePropagation(), i.stopPropagation(), i.preventDefault())
	}, e.prototype.destroy = function(e) {
		var t = this;
		t.autoPlayClear(), t.touchObject = {}, t.cleanUpEvents(), i(".slick-cloned", t.$slider).detach(), t.$dots && t.$dots.remove(), t.$prevArrow && t.$prevArrow.length && (t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()), t.$nextArrow && t.$nextArrow.length && (t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()), t.$slides && (t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
			i(this).attr("style", i(this).data("originalStyling"))
		}), t.$slideTrack.children(this.options.slide).detach(), t.$slideTrack.detach(), t.$list.detach(), t.$slider.append(t.$slides)), t.cleanUpRows(), t.$slider.removeClass("slick-slider"), t.$slider.removeClass("slick-initialized"), t.$slider.removeClass("slick-dotted"), t.unslicked = !0, e || t.$slider.trigger("destroy", [t])
	}, e.prototype.disableTransition = function(i) {
		var e = this,
			t = {};
		t[e.transitionType] = "", e.options.fade === !1 ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t)
	}, e.prototype.fadeSlide = function(i, e) {
		var t = this;
		t.cssTransitions === !1 ? (t.$slides.eq(i).css({
			zIndex: t.options.zIndex
		}), t.$slides.eq(i).animate({
			opacity: 1
		}, t.options.speed, t.options.easing, e)) : (t.applyTransition(i), t.$slides.eq(i).css({
			opacity: 1,
			zIndex: t.options.zIndex
		}), e && setTimeout(function() {
			t.disableTransition(i), e.call()
		}, t.options.speed))
	}, e.prototype.fadeSlideOut = function(i) {
		var e = this;
		e.cssTransitions === !1 ? e.$slides.eq(i).animate({
			opacity: 0,
			zIndex: e.options.zIndex - 2
		}, e.options.speed, e.options.easing) : (e.applyTransition(i), e.$slides.eq(i).css({
			opacity: 0,
			zIndex: e.options.zIndex - 2
		}))
	}, e.prototype.filterSlides = e.prototype.slickFilter = function(i) {
		var e = this;
		null !== i && (e.$slidesCache = e.$slides, e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.filter(i).appendTo(e.$slideTrack), e.reinit())
	}, e.prototype.focusHandler = function() {
		var e = this;
		e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*:not(.slick-arrow)", function(t) {
			t.stopImmediatePropagation();
			var o = i(this);
			setTimeout(function() {
				e.options.pauseOnFocus && (e.focussed = o.is(":focus"), e.autoPlay())
			}, 0)
		})
	}, e.prototype.getCurrent = e.prototype.slickCurrentSlide = function() {
		var i = this;
		return i.currentSlide
	}, e.prototype.getDotCount = function() {
		var i = this,
			e = 0,
			t = 0,
			o = 0;
		if (i.options.infinite === !0)
			for (; e < i.slideCount;) ++o, e = t + i.options.slidesToScroll, t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;
		else if (i.options.centerMode === !0) o = i.slideCount;
		else if (i.options.asNavFor)
			for (; e < i.slideCount;) ++o, e = t + i.options.slidesToScroll, t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;
		else o = 1 + Math.ceil((i.slideCount - i.options.slidesToShow) / i.options.slidesToScroll);
		return o - 1
	}, e.prototype.getLeft = function(i) {
		var e, t, o, s = this,
			n = 0;
		return s.slideOffset = 0, t = s.$slides.first().outerHeight(!0), s.options.infinite === !0 ? (s.slideCount > s.options.slidesToShow && (s.slideOffset = s.slideWidth * s.options.slidesToShow * -1, n = t * s.options.slidesToShow * -1), s.slideCount % s.options.slidesToScroll !== 0 && i + s.options.slidesToScroll > s.slideCount && s.slideCount > s.options.slidesToShow && (i > s.slideCount ? (s.slideOffset = (s.options.slidesToShow - (i - s.slideCount)) * s.slideWidth * -1, n = (s.options.slidesToShow - (i - s.slideCount)) * t * -1) : (s.slideOffset = s.slideCount % s.options.slidesToScroll * s.slideWidth * -1, n = s.slideCount % s.options.slidesToScroll * t * -1))) : i + s.options.slidesToShow > s.slideCount && (s.slideOffset = (i + s.options.slidesToShow - s.slideCount) * s.slideWidth, n = (i + s.options.slidesToShow - s.slideCount) * t), s.slideCount <= s.options.slidesToShow && (s.slideOffset = 0, n = 0), s.options.centerMode === !0 && s.options.infinite === !0 ? s.slideOffset += s.slideWidth * Math.floor(s.options.slidesToShow / 2) - s.slideWidth : s.options.centerMode === !0 && (s.slideOffset = 0, s.slideOffset += s.slideWidth * Math.floor(s.options.slidesToShow / 2)), e = s.options.vertical === !1 ? i * s.slideWidth * -1 + s.slideOffset : i * t * -1 + n, s.options.variableWidth === !0 && (o = s.slideCount <= s.options.slidesToShow || s.options.infinite === !1 ? s.$slideTrack.children(".slick-slide").eq(i) : s.$slideTrack.children(".slick-slide").eq(i + s.options.slidesToShow), e = s.options.rtl === !0 ? o[0] ? -1 * (s.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, s.options.centerMode === !0 && (o = s.slideCount <= s.options.slidesToShow || s.options.infinite === !1 ? s.$slideTrack.children(".slick-slide").eq(i) : s.$slideTrack.children(".slick-slide").eq(i + s.options.slidesToShow + 1), e = s.options.rtl === !0 ? o[0] ? -1 * (s.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, e += (s.$list.width() - o.outerWidth()) / 2)), e
	}, e.prototype.getOption = e.prototype.slickGetOption = function(i) {
		var e = this;
		return e.options[i]
	}, e.prototype.getNavigableIndexes = function() {
		var i, e = this,
			t = 0,
			o = 0,
			s = [];
		for (e.options.infinite === !1 ? i = e.slideCount : (t = -1 * e.options.slidesToScroll, o = -1 * e.options.slidesToScroll, i = 2 * e.slideCount); i > t;) s.push(t), t = o + e.options.slidesToScroll, o += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
		return s
	}, e.prototype.getSlick = function() {
		return this
	}, e.prototype.getSlideCount = function() {
		var e, t, o, s = this;
		return o = s.options.centerMode === !0 ? s.slideWidth * Math.floor(s.options.slidesToShow / 2) : 0, s.options.swipeToSlide === !0 ? (s.$slideTrack.find(".slick-slide").each(function(e, n) {
			return n.offsetLeft - o + i(n).outerWidth() / 2 > -1 * s.swipeLeft ? (t = n, !1) : void 0
		}), e = Math.abs(i(t).attr("data-slick-index") - s.currentSlide) || 1) : s.options.slidesToScroll
	}, e.prototype.goTo = e.prototype.slickGoTo = function(i, e) {
		var t = this;
		t.changeSlide({
			data: {
				message: "index",
				index: parseInt(i)
			}
		}, e)
	}, e.prototype.init = function(e) {
		var t = this;
		i(t.$slider).hasClass("slick-initialized") || (i(t.$slider).addClass("slick-initialized"), t.buildRows(), t.buildOut(), t.setProps(), t.startLoad(), t.loadSlider(), t.initializeEvents(), t.updateArrows(), t.updateDots(), t.checkResponsive(!0), t.focusHandler()), e && t.$slider.trigger("init", [t]), t.options.accessibility === !0 && t.initADA(), t.options.autoplay && (t.paused = !1, t.autoPlay())
	}, e.prototype.initADA = function() {
		var e = this;
		e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({
			"aria-hidden": "true",
			tabindex: "-1"
		}).find("a, input, button, select").attr({
			tabindex: "-1"
		}), e.$slideTrack.attr("role", "listbox"), e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(t) {
			i(this).attr({
				role: "option",
				"aria-describedby": "slick-slide" + e.instanceUid + t
			})
		}), null !== e.$dots && e.$dots.attr("role", "tablist").find("li").each(function(t) {
			i(this).attr({
				role: "presentation",
				"aria-selected": "false",
				"aria-controls": "navigation" + e.instanceUid + t,
				id: "slick-slide" + e.instanceUid + t
			})
		}).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), e.activateADA()
	}, e.prototype.initArrowEvents = function() {
		var i = this;
		i.options.arrows === !0 && i.slideCount > i.options.slidesToShow && (i.$prevArrow.off("click.slick").on("click.slick", {
			message: "previous"
		}, i.changeSlide), i.$nextArrow.off("click.slick").on("click.slick", {
			message: "next"
		}, i.changeSlide))
	}, e.prototype.initDotEvents = function() {
		var e = this;
		e.options.dots === !0 && e.slideCount > e.options.slidesToShow && i("li", e.$dots).on("click.slick", {
			message: "index"
		}, e.changeSlide), e.options.dots === !0 && e.options.pauseOnDotsHover === !0 && i("li", e.$dots).on("mouseenter.slick", i.proxy(e.interrupt, e, !0)).on("mouseleave.slick", i.proxy(e.interrupt, e, !1))
	}, e.prototype.initSlideEvents = function() {
		var e = this;
		e.options.pauseOnHover && (e.$list.on("mouseenter.slick", i.proxy(e.interrupt, e, !0)), e.$list.on("mouseleave.slick", i.proxy(e.interrupt, e, !1)))
	}, e.prototype.initializeEvents = function() {
		var e = this;
		e.initArrowEvents(), e.initDotEvents(), e.initSlideEvents(), e.$list.on("touchstart.slick mousedown.slick", {
			action: "start"
		}, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick", {
			action: "move"
		}, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick", {
			action: "end"
		}, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick", {
			action: "end"
		}, e.swipeHandler), e.$list.on("click.slick", e.clickHandler), i(document).on(e.visibilityChange, i.proxy(e.visibility, e)), e.options.accessibility === !0 && e.$list.on("keydown.slick", e.keyHandler), e.options.focusOnSelect === !0 && i(e.$slideTrack).children().on("click.slick", e.selectHandler), i(window).on("orientationchange.slick.slick-" + e.instanceUid, i.proxy(e.orientationChange, e)), i(window).on("resize.slick.slick-" + e.instanceUid, i.proxy(e.resize, e)), i("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault), i(window).on("load.slick.slick-" + e.instanceUid, e.setPosition), i(document).on("ready.slick.slick-" + e.instanceUid, e.setPosition)
	}, e.prototype.initUI = function() {
		var i = this;
		i.options.arrows === !0 && i.slideCount > i.options.slidesToShow && (i.$prevArrow.show(), i.$nextArrow.show()), i.options.dots === !0 && i.slideCount > i.options.slidesToShow && i.$dots.show()
	}, e.prototype.keyHandler = function(i) {
		var e = this;
		i.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === i.keyCode && e.options.accessibility === !0 ? e.changeSlide({
			data: {
				message: e.options.rtl === !0 ? "next" : "previous"
			}
		}) : 39 === i.keyCode && e.options.accessibility === !0 && e.changeSlide({
			data: {
				message: e.options.rtl === !0 ? "previous" : "next"
			}
		}))
	}, e.prototype.lazyLoad = function() {
		function e(e) {
			i("img[data-lazy]", e).each(function() {
				var e = i(this),
					t = i(this).attr("data-lazy"),
					o = document.createElement("img");
				o.onload = function() {
					e.animate({
						opacity: 0
					}, 100, function() {
						e.attr("src", t).animate({
							opacity: 1
						}, 200, function() {
							e.removeAttr("data-lazy").removeClass("slick-loading")
						}), r.$slider.trigger("lazyLoaded", [r, e, t])
					})
				}, o.onerror = function() {
					e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), r.$slider.trigger("lazyLoadError", [r, e, t])
				}, o.src = t
			})
		}
		var t, o, s, n, r = this;
		r.options.centerMode === !0 ? r.options.infinite === !0 ? (s = r.currentSlide + (r.options.slidesToShow / 2 + 1), n = s + r.options.slidesToShow + 2) : (s = Math.max(0, r.currentSlide - (r.options.slidesToShow / 2 + 1)), n = 2 + (r.options.slidesToShow / 2 + 1) + r.currentSlide) : (s = r.options.infinite ? r.options.slidesToShow + r.currentSlide : r.currentSlide, n = Math.ceil(s + r.options.slidesToShow), r.options.fade === !0 && (s > 0 && s--, n <= r.slideCount && n++)), t = r.$slider.find(".slick-slide").slice(s, n), e(t), r.slideCount <= r.options.slidesToShow ? (o = r.$slider.find(".slick-slide"), e(o)) : r.currentSlide >= r.slideCount - r.options.slidesToShow ? (o = r.$slider.find(".slick-cloned").slice(0, r.options.slidesToShow), e(o)) : 0 === r.currentSlide && (o = r.$slider.find(".slick-cloned").slice(-1 * r.options.slidesToShow), e(o))
	}, e.prototype.loadSlider = function() {
		var i = this;
		i.setPosition(), i.$slideTrack.css({
			opacity: 1
		}), i.$slider.removeClass("slick-loading"), i.initUI(), "progressive" === i.options.lazyLoad && i.progressiveLazyLoad()
	}, e.prototype.next = e.prototype.slickNext = function() {
		var i = this;
		i.changeSlide({
			data: {
				message: "next"
			}
		})
	}, e.prototype.orientationChange = function() {
		var i = this;
		i.checkResponsive(), i.setPosition()
	}, e.prototype.pause = e.prototype.slickPause = function() {
		var i = this;
		i.autoPlayClear(), i.paused = !0
	}, e.prototype.play = e.prototype.slickPlay = function() {
		var i = this;
		i.autoPlay(), i.options.autoplay = !0, i.paused = !1, i.focussed = !1, i.interrupted = !1
	}, e.prototype.postSlide = function(i) {
		var e = this;
		e.unslicked || (e.$slider.trigger("afterChange", [e, i]), e.animating = !1, e.setPosition(), e.swipeLeft = null, e.options.autoplay && e.autoPlay(), e.options.accessibility === !0 && e.initADA())
	}, e.prototype.prev = e.prototype.slickPrev = function() {
		var i = this;
		i.changeSlide({
			data: {
				message: "previous"
			}
		})
	}, e.prototype.preventDefault = function(i) {
		i.preventDefault()
	}, e.prototype.progressiveLazyLoad = function(e) {
		e = e || 1;
		var t, o, s, n = this,
			r = i("img[data-lazy]", n.$slider);
		r.length ? (t = r.first(), o = t.attr("data-lazy"), s = document.createElement("img"), s.onload = function() {
			t.attr("src", o).removeAttr("data-lazy").removeClass("slick-loading"), n.options.adaptiveHeight === !0 && n.setPosition(), n.$slider.trigger("lazyLoaded", [n, t, o]), n.progressiveLazyLoad()
		}, s.onerror = function() {
			3 > e ? setTimeout(function() {
				n.progressiveLazyLoad(e + 1)
			}, 500) : (t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), n.$slider.trigger("lazyLoadError", [n, t, o]), n.progressiveLazyLoad())
		}, s.src = o) : n.$slider.trigger("allImagesLoaded", [n])
	}, e.prototype.refresh = function(e) {
		var t, o, s = this;
		o = s.slideCount - s.options.slidesToShow, !s.options.infinite && s.currentSlide > o && (s.currentSlide = o), s.slideCount <= s.options.slidesToShow && (s.currentSlide = 0), t = s.currentSlide, s.destroy(!0), i.extend(s, s.initials, {
			currentSlide: t
		}), s.init(), e || s.changeSlide({
			data: {
				message: "index",
				index: t
			}
		}, !1)
	}, e.prototype.registerBreakpoints = function() {
		var e, t, o, s = this,
			n = s.options.responsive || null;
		if ("array" === i.type(n) && n.length) {
			s.respondTo = s.options.respondTo || "window";
			for (e in n)
				if (o = s.breakpoints.length - 1, t = n[e].breakpoint, n.hasOwnProperty(e)) {
					for (; o >= 0;) s.breakpoints[o] && s.breakpoints[o] === t && s.breakpoints.splice(o, 1), o--;
					s.breakpoints.push(t), s.breakpointSettings[t] = n[e].settings
				} s.breakpoints.sort(function(i, e) {
				return s.options.mobileFirst ? i - e : e - i
			})
		}
	}, e.prototype.reinit = function() {
		var e = this;
		e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"), e.slideCount = e.$slides.length, e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), e.registerBreakpoints(), e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(), e.initArrowEvents(), e.buildDots(), e.updateDots(), e.initDotEvents(), e.cleanUpSlideEvents(), e.initSlideEvents(), e.checkResponsive(!1, !0), e.options.focusOnSelect === !0 && i(e.$slideTrack).children().on("click.slick", e.selectHandler), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.setPosition(), e.focusHandler(), e.paused = !e.options.autoplay, e.autoPlay(), e.$slider.trigger("reInit", [e])
	}, e.prototype.resize = function() {
		var e = this;
		i(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout(function() {
			e.windowWidth = i(window).width(), e.checkResponsive(), e.unslicked || e.setPosition()
		}, 50))
	}, e.prototype.removeSlide = e.prototype.slickRemove = function(i, e, t) {
		var o = this;
		return "boolean" == typeof i ? (e = i, i = e === !0 ? 0 : o.slideCount - 1) : i = e === !0 ? --i : i, o.slideCount < 1 || 0 > i || i > o.slideCount - 1 ? !1 : (o.unload(), t === !0 ? o.$slideTrack.children().remove() : o.$slideTrack.children(this.options.slide).eq(i).remove(), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slidesCache = o.$slides, void o.reinit())
	}, e.prototype.setCSS = function(i) {
		var e, t, o = this,
			s = {};
		o.options.rtl === !0 && (i = -i), e = "left" == o.positionProp ? Math.ceil(i) + "px" : "0px", t = "top" == o.positionProp ? Math.ceil(i) + "px" : "0px", s[o.positionProp] = i, o.transformsEnabled === !1 ? o.$slideTrack.css(s) : (s = {}, o.cssTransitions === !1 ? (s[o.animType] = "translate(" + e + ", " + t + ")", o.$slideTrack.css(s)) : (s[o.animType] = "translate3d(" + e + ", " + t + ", 0px)", o.$slideTrack.css(s)))
	}, e.prototype.setDimensions = function() {
		var i = this;
		i.options.vertical === !1 ? i.options.centerMode === !0 && i.$list.css({
			padding: "0px " + i.options.centerPadding
		}) : (i.$list.height(i.$slides.first().outerHeight(!0) * i.options.slidesToShow), i.options.centerMode === !0 && i.$list.css({
			padding: i.options.centerPadding + " 0px"
		})), i.listWidth = i.$list.width(), i.listHeight = i.$list.height(), i.options.vertical === !1 && i.options.variableWidth === !1 ? (i.slideWidth = Math.ceil(i.listWidth / i.options.slidesToShow), i.$slideTrack.width(Math.ceil(i.slideWidth * i.$slideTrack.children(".slick-slide").length))) : i.options.variableWidth === !0 ? i.$slideTrack.width(5e3 * i.slideCount) : (i.slideWidth = Math.ceil(i.listWidth), i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0) * i.$slideTrack.children(".slick-slide").length)));
		var e = i.$slides.first().outerWidth(!0) - i.$slides.first().width();
		i.options.variableWidth === !1 && i.$slideTrack.children(".slick-slide").width(i.slideWidth - e)
	}, e.prototype.setFade = function() {
		var e, t = this;
		t.$slides.each(function(o, s) {
			e = t.slideWidth * o * -1, t.options.rtl === !0 ? i(s).css({
				position: "relative",
				right: e,
				top: 0,
				zIndex: t.options.zIndex - 2,
				opacity: 0
			}) : i(s).css({
				position: "relative",
				left: e,
				top: 0,
				zIndex: t.options.zIndex - 2,
				opacity: 0
			})
		}), t.$slides.eq(t.currentSlide).css({
			zIndex: t.options.zIndex - 1,
			opacity: 1
		})
	}, e.prototype.setHeight = function() {
		var i = this;
		if (1 === i.options.slidesToShow && i.options.adaptiveHeight === !0 && i.options.vertical === !1) {
			var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
			i.$list.css("height", e)
		}
	}, e.prototype.setOption = e.prototype.slickSetOption = function() {
		var e, t, o, s, n, r = this,
			l = !1;
		if ("object" === i.type(arguments[0]) ? (o = arguments[0], l = arguments[1], n = "multiple") : "string" === i.type(arguments[0]) && (o = arguments[0], s = arguments[1], l = arguments[2], "responsive" === arguments[0] && "array" === i.type(arguments[1]) ? n = "responsive" : "undefined" != typeof arguments[1] && (n = "single")), "single" === n) r.options[o] = s;
		else if ("multiple" === n) i.each(o, function(i, e) {
			r.options[i] = e
		});
		else if ("responsive" === n)
			for (t in s)
				if ("array" !== i.type(r.options.responsive)) r.options.responsive = [s[t]];
				else {
					for (e = r.options.responsive.length - 1; e >= 0;) r.options.responsive[e].breakpoint === s[t].breakpoint && r.options.responsive.splice(e, 1), e--;
					r.options.responsive.push(s[t])
				} l && (r.unload(), r.reinit())
	}, e.prototype.setPosition = function() {
		var i = this;
		i.setDimensions(), i.setHeight(), i.options.fade === !1 ? i.setCSS(i.getLeft(i.currentSlide)) : i.setFade(), i.$slider.trigger("setPosition", [i])
	}, e.prototype.setProps = function() {
		var i = this,
			e = document.body.style;
		i.positionProp = i.options.vertical === !0 ? "top" : "left", "top" === i.positionProp ? i.$slider.addClass("slick-vertical") : i.$slider.removeClass("slick-vertical"), (void 0 !== e.WebkitTransition || void 0 !== e.MozTransition || void 0 !== e.msTransition) && i.options.useCSS === !0 && (i.cssTransitions = !0), i.options.fade && ("number" == typeof i.options.zIndex ? i.options.zIndex < 3 && (i.options.zIndex = 3) : i.options.zIndex = i.defaults.zIndex), void 0 !== e.OTransform && (i.animType = "OTransform", i.transformType = "-o-transform", i.transitionType = "OTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)), void 0 !== e.MozTransform && (i.animType = "MozTransform", i.transformType = "-moz-transform", i.transitionType = "MozTransition", void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (i.animType = !1)), void 0 !== e.webkitTransform && (i.animType = "webkitTransform", i.transformType = "-webkit-transform", i.transitionType = "webkitTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)), void 0 !== e.msTransform && (i.animType = "msTransform", i.transformType = "-ms-transform", i.transitionType = "msTransition", void 0 === e.msTransform && (i.animType = !1)), void 0 !== e.transform && i.animType !== !1 && (i.animType = "transform", i.transformType = "transform", i.transitionType = "transition"), i.transformsEnabled = i.options.useTransform && null !== i.animType && i.animType !== !1
	}, e.prototype.setSlideClasses = function(i) {
		var e, t, o, s, n = this;
		t = n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), n.$slides.eq(i).addClass("slick-current"), n.options.centerMode === !0 ? (e = Math.floor(n.options.slidesToShow / 2), n.options.infinite === !0 && (i >= e && i <= n.slideCount - 1 - e ? n.$slides.slice(i - e, i + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (o = n.options.slidesToShow + i,
			t.slice(o - e + 1, o + e + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === i ? t.eq(t.length - 1 - n.options.slidesToShow).addClass("slick-center") : i === n.slideCount - 1 && t.eq(n.options.slidesToShow).addClass("slick-center")), n.$slides.eq(i).addClass("slick-center")) : i >= 0 && i <= n.slideCount - n.options.slidesToShow ? n.$slides.slice(i, i + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : t.length <= n.options.slidesToShow ? t.addClass("slick-active").attr("aria-hidden", "false") : (s = n.slideCount % n.options.slidesToShow, o = n.options.infinite === !0 ? n.options.slidesToShow + i : i, n.options.slidesToShow == n.options.slidesToScroll && n.slideCount - i < n.options.slidesToShow ? t.slice(o - (n.options.slidesToShow - s), o + s).addClass("slick-active").attr("aria-hidden", "false") : t.slice(o, o + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === n.options.lazyLoad && n.lazyLoad()
	}, e.prototype.setupInfinite = function() {
		var e, t, o, s = this;
		if (s.options.fade === !0 && (s.options.centerMode = !1), s.options.infinite === !0 && s.options.fade === !1 && (t = null, s.slideCount > s.options.slidesToShow)) {
			for (o = s.options.centerMode === !0 ? s.options.slidesToShow + 1 : s.options.slidesToShow, e = s.slideCount; e > s.slideCount - o; e -= 1) t = e - 1, i(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t - s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");
			for (e = 0; o > e; e += 1) t = e, i(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t + s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");
			s.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
				i(this).attr("id", "")
			})
		}
	}, e.prototype.interrupt = function(i) {
		var e = this;
		i || e.autoPlay(), e.interrupted = i
	}, e.prototype.selectHandler = function(e) {
		var t = this,
			o = i(e.target).is(".slick-slide") ? i(e.target) : i(e.target).parents(".slick-slide"),
			s = parseInt(o.attr("data-slick-index"));
		return s || (s = 0), t.slideCount <= t.options.slidesToShow ? (t.setSlideClasses(s), void t.asNavFor(s)) : void t.slideHandler(s)
	}, e.prototype.slideHandler = function(i, e, t) {
		var o, s, n, r, l, d = null,
			a = this;
		return e = e || !1, a.animating === !0 && a.options.waitForAnimate === !0 || a.options.fade === !0 && a.currentSlide === i || a.slideCount <= a.options.slidesToShow ? void 0 : (e === !1 && a.asNavFor(i), o = i, d = a.getLeft(o), r = a.getLeft(a.currentSlide), a.currentLeft = null === a.swipeLeft ? r : a.swipeLeft, a.options.infinite === !1 && a.options.centerMode === !1 && (0 > i || i > a.getDotCount() * a.options.slidesToScroll) ? void(a.options.fade === !1 && (o = a.currentSlide, t !== !0 ? a.animateSlide(r, function() {
			a.postSlide(o)
		}) : a.postSlide(o))) : a.options.infinite === !1 && a.options.centerMode === !0 && (0 > i || i > a.slideCount - a.options.slidesToScroll) ? void(a.options.fade === !1 && (o = a.currentSlide, t !== !0 ? a.animateSlide(r, function() {
			a.postSlide(o)
		}) : a.postSlide(o))) : (a.options.autoplay && clearInterval(a.autoPlayTimer), s = 0 > o ? a.slideCount % a.options.slidesToScroll !== 0 ? a.slideCount - a.slideCount % a.options.slidesToScroll : a.slideCount + o : o >= a.slideCount ? a.slideCount % a.options.slidesToScroll !== 0 ? 0 : o - a.slideCount : o, a.animating = !0, a.$slider.trigger("beforeChange", [a, a.currentSlide, s]), n = a.currentSlide, a.currentSlide = s, a.setSlideClasses(a.currentSlide), a.options.asNavFor && (l = a.getNavTarget(), l = l.slick("getSlick"), l.slideCount <= l.options.slidesToShow && l.setSlideClasses(a.currentSlide)), a.updateDots(), a.updateArrows(), a.options.fade === !0 ? (t !== !0 ? (a.fadeSlideOut(n), a.fadeSlide(s, function() {
			a.postSlide(s)
		})) : a.postSlide(s), void a.animateHeight()) : void(t !== !0 ? a.animateSlide(d, function() {
			a.postSlide(s)
		}) : a.postSlide(s))))
	}, e.prototype.startLoad = function() {
		var i = this;
		i.options.arrows === !0 && i.slideCount > i.options.slidesToShow && (i.$prevArrow.hide(), i.$nextArrow.hide()), i.options.dots === !0 && i.slideCount > i.options.slidesToShow && i.$dots.hide(), i.$slider.addClass("slick-loading")
	}, e.prototype.swipeDirection = function() {
		var i, e, t, o, s = this;
		return i = s.touchObject.startX - s.touchObject.curX, e = s.touchObject.startY - s.touchObject.curY, t = Math.atan2(e, i), o = Math.round(180 * t / Math.PI), 0 > o && (o = 360 - Math.abs(o)), 45 >= o && o >= 0 ? s.options.rtl === !1 ? "left" : "right" : 360 >= o && o >= 315 ? s.options.rtl === !1 ? "left" : "right" : o >= 135 && 225 >= o ? s.options.rtl === !1 ? "right" : "left" : s.options.verticalSwiping === !0 ? o >= 35 && 135 >= o ? "down" : "up" : "vertical"
	}, e.prototype.swipeEnd = function(i) {
		var e, t, o = this;
		if (o.dragging = !1, o.interrupted = !1, o.shouldClick = !(o.touchObject.swipeLength > 10), void 0 === o.touchObject.curX) return !1;
		if (o.touchObject.edgeHit === !0 && o.$slider.trigger("edge", [o, o.swipeDirection()]), o.touchObject.swipeLength >= o.touchObject.minSwipe) {
			switch (t = o.swipeDirection()) {
				case "left":
				case "down":
					e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide + o.getSlideCount()) : o.currentSlide + o.getSlideCount(), o.currentDirection = 0;
					break;
				case "right":
				case "up":
					e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide - o.getSlideCount()) : o.currentSlide - o.getSlideCount(), o.currentDirection = 1
			}
			"vertical" != t && (o.slideHandler(e), o.touchObject = {}, o.$slider.trigger("swipe", [o, t]))
		} else o.touchObject.startX !== o.touchObject.curX && (o.slideHandler(o.currentSlide), o.touchObject = {})
	}, e.prototype.swipeHandler = function(i) {
		var e = this;
		if (!(e.options.swipe === !1 || "ontouchend" in document && e.options.swipe === !1 || e.options.draggable === !1 && -1 !== i.type.indexOf("mouse"))) switch (e.touchObject.fingerCount = i.originalEvent && void 0 !== i.originalEvent.touches ? i.originalEvent.touches.length : 1, e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold, e.options.verticalSwiping === !0 && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold), i.data.action) {
			case "start":
				e.swipeStart(i);
				break;
			case "move":
				e.swipeMove(i);
				break;
			case "end":
				e.swipeEnd(i)
		}
	}, e.prototype.swipeMove = function(i) {
		var e, t, o, s, n, r = this;
		return n = void 0 !== i.originalEvent ? i.originalEvent.touches : null, !r.dragging || n && 1 !== n.length ? !1 : (e = r.getLeft(r.currentSlide), r.touchObject.curX = void 0 !== n ? n[0].pageX : i.clientX, r.touchObject.curY = void 0 !== n ? n[0].pageY : i.clientY, r.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(r.touchObject.curX - r.touchObject.startX, 2))), r.options.verticalSwiping === !0 && (r.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(r.touchObject.curY - r.touchObject.startY, 2)))), t = r.swipeDirection(), "vertical" !== t ? (void 0 !== i.originalEvent && r.touchObject.swipeLength > 4 && i.preventDefault(), s = (r.options.rtl === !1 ? 1 : -1) * (r.touchObject.curX > r.touchObject.startX ? 1 : -1), r.options.verticalSwiping === !0 && (s = r.touchObject.curY > r.touchObject.startY ? 1 : -1), o = r.touchObject.swipeLength, r.touchObject.edgeHit = !1, r.options.infinite === !1 && (0 === r.currentSlide && "right" === t || r.currentSlide >= r.getDotCount() && "left" === t) && (o = r.touchObject.swipeLength * r.options.edgeFriction, r.touchObject.edgeHit = !0), r.options.vertical === !1 ? r.swipeLeft = e + o * s : r.swipeLeft = e + o * (r.$list.height() / r.listWidth) * s, r.options.verticalSwiping === !0 && (r.swipeLeft = e + o * s), r.options.fade === !0 || r.options.touchMove === !1 ? !1 : r.animating === !0 ? (r.swipeLeft = null, !1) : void r.setCSS(r.swipeLeft)) : void 0)
	}, e.prototype.swipeStart = function(i) {
		var e, t = this;
		return t.interrupted = !0, 1 !== t.touchObject.fingerCount || t.slideCount <= t.options.slidesToShow ? (t.touchObject = {}, !1) : (void 0 !== i.originalEvent && void 0 !== i.originalEvent.touches && (e = i.originalEvent.touches[0]), t.touchObject.startX = t.touchObject.curX = void 0 !== e ? e.pageX : i.clientX, t.touchObject.startY = t.touchObject.curY = void 0 !== e ? e.pageY : i.clientY, void(t.dragging = !0))
	}, e.prototype.unfilterSlides = e.prototype.slickUnfilter = function() {
		var i = this;
		null !== i.$slidesCache && (i.unload(), i.$slideTrack.children(this.options.slide).detach(), i.$slidesCache.appendTo(i.$slideTrack), i.reinit())
	}, e.prototype.unload = function() {
		var e = this;
		i(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(), e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(), e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
	}, e.prototype.unslick = function(i) {
		var e = this;
		e.$slider.trigger("unslick", [e, i]), e.destroy()
	}, e.prototype.updateArrows = function() {
		var i, e = this;
		i = Math.floor(e.options.slidesToShow / 2), e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && !e.options.infinite && (e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === e.currentSlide ? (e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - e.options.slidesToShow && e.options.centerMode === !1 ? (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - 1 && e.options.centerMode === !0 && (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
	}, e.prototype.updateDots = function() {
		var i = this;
		null !== i.$dots && (i.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), i.$dots.find("li").eq(Math.floor(i.currentSlide / i.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
	}, e.prototype.visibility = function() {
		var i = this;
		i.options.autoplay && (document[i.hidden] ? i.interrupted = !0 : i.interrupted = !1)
	}, i.fn.slick = function() {
		var i, t, o = this,
			s = arguments[0],
			n = Array.prototype.slice.call(arguments, 1),
			r = o.length;
		for (i = 0; r > i; i++)
			if ("object" == typeof s || "undefined" == typeof s ? o[i].slick = new e(o[i], s) : t = o[i].slick[s].apply(o[i].slick, n), "undefined" != typeof t) return t;
		return o
	}
});
! function(e, t) {
	"object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : ((e = e || self).Vimeo = e.Vimeo || {}, e.Vimeo.Player = t())
}(this, function() {
	"use strict";

	function e(e, t) {
		for (var n = 0; n < t.length; n++) {
			var r = t[n];
			r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
		}
	}

	function t(e, t) {
		return 0 === e.indexOf(t.toLowerCase()) ? e : "".concat(t.toLowerCase()).concat(e.substr(0, 1).toUpperCase()).concat(e.substr(1))
	}

	function n(e) {
		return /^(https?:)?\/\/((player|www)\.)?vimeo\.com(?=$|\/)/.test(e)
	}

	function r() {
		var e, t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
			r = t.id,
			o = t.url,
			i = r || o;
		if (!i) throw new Error("An id or url must be passed, either in an options object or as a data-vimeo-id or data-vimeo-url attribute.");
		if (e = i, !isNaN(parseFloat(e)) && isFinite(e) && Math.floor(e) == e) return "https://vimeo.com/".concat(i);
		if (n(i)) return i.replace("http:", "https:");
		if (r) throw new TypeError("“".concat(r, "” is not a valid video id."));
		throw new TypeError("“".concat(i, "” is not a vimeo.com url."))
	}

	function o(e, t, n) {
		var r = w.get(e.element) || {};
		t in r || (r[t] = []), r[t].push(n), w.set(e.element, r)
	}

	function i(e, t) {
		return (w.get(e.element) || {})[t] || []
	}

	function a(e, t, n) {
		var r = w.get(e.element) || {};
		if (!r[t]) return !0;
		if (!n) return r[t] = [], w.set(e.element, r), !0;
		var o = r[t].indexOf(n);
		return -1 !== o && r[t].splice(o, 1), w.set(e.element, r), r[t] && 0 === r[t].length
	}

	function u(e) {
		var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
		return b.reduce(function(t, n) {
			var r = e.getAttribute("data-vimeo-".concat(n));
			return (r || "" === r) && (t[n] = "" === r ? 1 : r), t
		}, t)
	}

	function c(e, t) {
		var n = e.html;
		if (!t) throw new TypeError("An element must be provided");
		if (null !== t.getAttribute("data-vimeo-initialized")) return t.querySelector("iframe");
		var r = document.createElement("div");
		return r.innerHTML = n, t.appendChild(r.firstChild), t.setAttribute("data-vimeo-initialized", "true"), t.querySelector("iframe")
	}

	function s(e) {
		var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
			r = 2 < arguments.length ? arguments[2] : void 0;
		return new Promise(function(o, i) {
			if (!n(e)) throw new TypeError("“".concat(e, "” is not a vimeo.com url."));
			var a = "https://vimeo.com/api/oembed.json?url=".concat(encodeURIComponent(e));
			for (var u in t) t.hasOwnProperty(u) && (a += "&".concat(u, "=").concat(encodeURIComponent(t[u])));
			var s = "XDomainRequest" in window ? new XDomainRequest : new XMLHttpRequest;
			s.open("GET", a, !0), s.onload = function() {
				if (404 !== s.status)
					if (403 !== s.status) try {
						var t = JSON.parse(s.responseText);
						if (403 === t.domain_status_code) return c(t, r), void i(new Error("“".concat(e, "” is not embeddable.")));
						o(t)
					} catch (t) {
						i(t)
					} else i(new Error("“".concat(e, "” is not embeddable.")));
					else i(new Error("“".concat(e, "” was not found.")))
			}, s.onerror = function() {
				var e = s.status ? " (".concat(s.status, ")") : "";
				i(new Error("There was an error fetching the embed code from Vimeo".concat(e, ".")))
			}, s.send()
		})
	}

	function l(e) {
		if ("string" == typeof e) try {
			e = JSON.parse(e)
		} catch (e) {
			return console.warn(e), {}
		}
		return e
	}

	function f(e, t, n) {
		if (e.element.contentWindow && e.element.contentWindow.postMessage) {
			var r = {
				method: t
			};
			void 0 !== n && (r.value = n);
			var o = parseFloat(navigator.userAgent.toLowerCase().replace(/^.*msie (\d+).*$/, "$1"));
			o >= 8 && 10 > o && (r = JSON.stringify(r)), e.element.contentWindow.postMessage(r, e.origin)
		}
	}

	function d(e, t) {
		var n, r = [];
		if ((t = l(t)).event) "error" === t.event && i(e, t.data.method).forEach(function(n) {
			var r = new Error(t.data.message);
			r.name = t.data.name, n.reject(r), a(e, t.data.method, n)
		}), r = i(e, "event:".concat(t.event)), n = t.data;
		else if (t.method) {
			var o = function(e, t) {
				var n = i(e, t);
				if (n.length < 1) return !1;
				var r = n.shift();
				return a(e, t, r), r
			}(e, t.method);
			o && (r.push(o), n = t.value)
		}
		r.forEach(function(t) {
			try {
				if ("function" == typeof t) return void t.call(e, n);
				t.resolve(n)
			} catch (t) {}
		})
	}
	var h = "undefined" != typeof global && "[object global]" === {}.toString.call(global),
		v = void 0 !== Array.prototype.indexOf,
		p = "undefined" != typeof window && void 0 !== window.postMessage;
	if (!(h || v && p)) throw new Error("Sorry, the Vimeo Player API is not available in this browser.");
	var y = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
	! function(e) {
		function t(e) {
			return Object(e) === e
		}
		if (!e.WeakMap) {
			var n = Object.prototype.hasOwnProperty,
				r = function(e, t, n) {
					Object.defineProperty ? Object.defineProperty(e, t, {
						configurable: !0,
						writable: !0,
						value: n
					}) : e[t] = n
				};
			e.WeakMap = function() {
				function e() {
					if (void 0 === this) throw new TypeError("Constructor WeakMap requires 'new'");
					if (r(this, "_id", "_WeakMap_" + i() + "." + i()), 0 < arguments.length) throw new TypeError("WeakMap iterable is not supported")
				}

				function o(e, r) {
					if (!t(e) || !n.call(e, "_id")) throw new TypeError(r + " method called on incompatible receiver " + typeof e)
				}

				function i() {
					return Math.random().toString().substring(2)
				}
				return r(e.prototype, "delete", function(e) {
					if (o(this, "delete"), !t(e)) return !1;
					var n = e[this._id];
					return !(!n || n[0] !== e || (delete e[this._id], 0))
				}), r(e.prototype, "get", function(e) {
					if (o(this, "get"), t(e)) {
						var n = e[this._id];
						return n && n[0] === e ? n[1] : void 0
					}
				}), r(e.prototype, "has", function(e) {
					if (o(this, "has"), !t(e)) return !1;
					var n = e[this._id];
					return !(!n || n[0] !== e)
				}), r(e.prototype, "set", function(e, n) {
					if (o(this, "set"), !t(e)) throw new TypeError("Invalid value used as weak map key");
					var i = e[this._id];
					return i && i[0] === e ? i[1] = n : r(e, this._id, [e, n]), this
				}), r(e, "_polyfill", !0), e
			}()
		}
	}("undefined" != typeof self ? self : "undefined" != typeof window ? window : y);
	var m, g = (function(e) {
			var t, n, r;
			r = function() {
				function e(e, t) {
					f.add(e, t), l || (l = h(f.drain))
				}

				function t(e) {
					var t, n = typeof e;
					return null == e || "object" != n && "function" != n || (t = e.then), "function" == typeof t && t
				}

				function n() {
					for (var e = 0; e < this.chain.length; e++) r(this, 1 === this.state ? this.chain[e].success : this.chain[e].failure, this.chain[e]);
					this.chain.length = 0
				}

				function r(e, n, r) {
					var o, i;
					try {
						!1 === n ? r.reject(e.msg) : (o = !0 === n ? e.msg : n.call(void 0, e.msg)) === r.promise ? r.reject(TypeError("Promise-chain cycle")) : (i = t(o)) ? i.call(o, r.resolve, r.reject) : r.resolve(o)
					} catch (e) {
						r.reject(e)
					}
				}

				function o(t) {
					var r = this;
					r.triggered || (r.triggered = !0, r.def && (r = r.def), r.msg = t, r.state = 2, 0 < r.chain.length && e(n, r))
				}

				function i(e, t, n, r) {
					for (var o = 0; o < t.length; o++) ! function(o) {
						e.resolve(t[o]).then(function(e) {
							n(o, e)
						}, r)
					}(o)
				}

				function a(e) {
					this.def = e, this.triggered = !1
				}

				function u(e) {
					this.promise = e, this.state = 0, this.triggered = !1, this.chain = [], this.msg = void 0
				}

				function c(r) {
					if ("function" != typeof r) throw TypeError("Not a function");
					if (0 !== this.__NPO__) throw TypeError("Not a promise");
					this.__NPO__ = 1;
					var i = new u(this);
					this.then = function(t, r) {
						var o = {
							success: "function" != typeof t || t,
							failure: "function" == typeof r && r
						};
						return o.promise = new this.constructor(function(e, t) {
							if ("function" != typeof e || "function" != typeof t) throw TypeError("Not a function");
							o.resolve = e, o.reject = t
						}), i.chain.push(o), 0 !== i.state && e(n, i), o.promise
					}, this["catch"] = function(e) {
						return this.then(void 0, e)
					};
					try {
						r.call(void 0, function(r) {
							(function u(r) {
								var i, c = this;
								if (!c.triggered) {
									c.triggered = !0, c.def && (c = c.def);
									try {
										(i = t(r)) ? e(function() {
											var e = new a(c);
											try {
												i.call(r, function() {
													t.apply(e, arguments)
												}, function() {
													o.apply(e, arguments)
												})
											} catch (t) {
												o.call(e, t)
											}
										}): (c.msg = r, c.state = 1, 0 < c.chain.length && e(n, c))
									} catch (u) {
										o.call(new a(c), u)
									}
								}
							}).call(i, r)
						}, function(e) {
							o.call(i, e)
						})
					} catch (r) {
						o.call(i, r)
					}
				}
				var s, l, f, d = Object.prototype.toString,
					h = "undefined" != typeof setImmediate ? function(e) {
						return setImmediate(e)
					} : setTimeout;
				try {
					Object.defineProperty({}, "x", {}), s = function(e, t, n, r) {
						return Object.defineProperty(e, t, {
							value: n,
							writable: !0,
							configurable: !1 !== r
						})
					}
				} catch (d) {
					s = function(e, t, n) {
						return e[t] = n, e
					}
				}
				f = function() {
					function e(e, t) {
						this.fn = e, this.self = t, this.next = void 0
					}
					var t, n, r;
					return {
						add: function(o, i) {
							r = new e(o, i), n ? n.next = r : t = r, n = r, r = void 0
						},
						drain: function() {
							var e = t;
							for (t = n = l = void 0; e;) e.fn.call(e.self), e = e.next
						}
					}
				}();
				var v = s({}, "constructor", c, !1);
				return s(c.prototype = v, "__NPO__", 0, !1), s(c, "resolve", function(e) {
					return e && "object" == typeof e && 1 === e.__NPO__ ? e : new this(function(t, n) {
						if ("function" != typeof t || "function" != typeof n) throw TypeError("Not a function");
						t(e)
					})
				}), s(c, "reject", function(e) {
					return new this(function(t, n) {
						if ("function" != typeof t || "function" != typeof n) throw TypeError("Not a function");
						n(e)
					})
				}), s(c, "all", function(e) {
					var t = this;
					return "[object Array]" != d.call(e) ? t.reject(TypeError("Not an array")) : 0 === e.length ? t.resolve([]) : new t(function(n, r) {
						if ("function" != typeof n || "function" != typeof r) throw TypeError("Not a function");
						var o = e.length,
							a = Array(o),
							u = 0;
						i(t, e, function(e, t) {
							a[e] = t, ++u === o && n(a)
						}, r)
					})
				}), s(c, "race", function(e) {
					var t = this;
					return "[object Array]" != d.call(e) ? t.reject(TypeError("Not an array")) : new t(function(n, r) {
						if ("function" != typeof n || "function" != typeof r) throw TypeError("Not a function");
						i(t, e, function(e, t) {
							n(t)
						}, r)
					})
				}), c
			}, (n = y)[t = "Promise"] = n[t] || r(), e.exports && (e.exports = n[t])
		}(m = {
			exports: {}
		}, m.exports), m.exports),
		w = new WeakMap,
		b = ["autopause", "autoplay", "background", "byline", "color", "controls", "dnt", "height", "id", "loop", "maxheight", "maxwidth", "muted", "playsinline", "portrait", "responsive", "speed", "texttrack", "title", "transparent", "url", "width"],
		k = new WeakMap,
		E = new WeakMap,
		T = function() {
			function h(e) {
				var t, o = this,
					i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
				if (function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, h), window.jQuery && e instanceof jQuery && (1 < e.length && window.console && console.warn && console.warn("A jQuery object with multiple elements was passed, using the first element."), e = e[0]), "undefined" != typeof document && "string" == typeof e && (e = document.getElementById(e)), t = e, !Boolean(t && 1 === t.nodeType && "nodeName" in t && t.ownerDocument && t.ownerDocument.defaultView)) throw new TypeError("You must pass either a valid element or a valid id.");
				var a = e.ownerDocument.defaultView;
				if ("IFRAME" !== e.nodeName) {
					var v = e.querySelector("iframe");
					v && (e = v)
				}
				if ("IFRAME" === e.nodeName && !n(e.getAttribute("src") || "")) throw new Error("The player element passed isn’t a Vimeo embed.");
				if (k.has(e)) return k.get(e);
				this.element = e, this.origin = "*";
				var p = new g(function(t, f) {
					var h = function(e) {
						if (n(e.origin) && o.element.contentWindow === e.source) {
							"*" === o.origin && (o.origin = e.origin);
							var r = l(e.data);
							if (r && "error" === r.event && r.data && "ready" === r.data.method) {
								var i = new Error(r.data.message);
								return i.name = r.data.name, void f(i)
							}
							var a = r && "ready" === r.event,
								u = r && "ping" === r.method;
							if (a || u) return o.element.setAttribute("data-ready", "true"), void t();
							d(o, r)
						}
					};
					if (a.addEventListener ? a.addEventListener("message", h, !1) : a.attachEvent && a.attachEvent("onmessage", h), "IFRAME" !== o.element.nodeName) {
						var v = u(e, i);
						s(r(v), v, e).then(function(t) {
							var n, r, i, a = c(t, e);
							return o.element = a, o._originalElement = e, n = e, r = a, i = w.get(n), w.set(r, i), w["delete"](n), k.set(o.element, o), t
						})["catch"](f)
					}
				});
				return E.set(this, p), k.set(this.element, this), "IFRAME" === this.element.nodeName && f(this, "ping"), this
			}
			var v, p, y;
			return v = h, (p = [{
				key: "callMethod",
				value: function(e) {
					var t = this,
						n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
					return new g(function(r, i) {
						return t.ready().then(function() {
							o(t, e, {
								resolve: r,
								reject: i
							}), f(t, e, n)
						})["catch"](i)
					})
				}
			}, {
				key: "get",
				value: function(e) {
					var n = this;
					return new g(function(r, i) {
						return e = t(e, "get"), n.ready().then(function() {
							o(n, e, {
								resolve: r,
								reject: i
							}), f(n, e)
						})["catch"](i)
					})
				}
			}, {
				key: "set",
				value: function(e, n) {
					var r = this;
					return new g(function(i, a) {
						if (e = t(e, "set"), null == n) throw new TypeError("There must be a value to set.");
						return r.ready().then(function() {
							o(r, e, {
								resolve: i,
								reject: a
							}), f(r, e, n)
						})["catch"](a)
					})
				}
			}, {
				key: "on",
				value: function(e, t) {
					if (!e) throw new TypeError("You must pass an event name.");
					if (!t) throw new TypeError("You must pass a callback function.");
					if ("function" != typeof t) throw new TypeError("The callback must be a function.");
					0 === i(this, "event:".concat(e)).length && this.callMethod("addEventListener", e)["catch"](function() {}), o(this, "event:".concat(e), t)
				}
			}, {
				key: "off",
				value: function(e, t) {
					if (!e) throw new TypeError("You must pass an event name.");
					if (t && "function" != typeof t) throw new TypeError("The callback must be a function.");
					a(this, "event:".concat(e), t) && this.callMethod("removeEventListener", e)["catch"](function(e) {})
				}
			}, {
				key: "loadVideo",
				value: function(e) {
					return this.callMethod("loadVideo", e)
				}
			}, {
				key: "ready",
				value: function() {
					var e = E.get(this) || new g(function(e, t) {
						t(new Error("Unknown player. Probably unloaded."))
					});
					return g.resolve(e)
				}
			}, {
				key: "addCuePoint",
				value: function(e) {
					var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
					return this.callMethod("addCuePoint", {
						time: e,
						data: t
					})
				}
			}, {
				key: "removeCuePoint",
				value: function(e) {
					return this.callMethod("removeCuePoint", e)
				}
			}, {
				key: "enableTextTrack",
				value: function(e, t) {
					if (!e) throw new TypeError("You must pass a language.");
					return this.callMethod("enableTextTrack", {
						language: e,
						kind: t
					})
				}
			}, {
				key: "disableTextTrack",
				value: function() {
					return this.callMethod("disableTextTrack")
				}
			}, {
				key: "pause",
				value: function() {
					return this.callMethod("pause")
				}
			}, {
				key: "play",
				value: function() {
					return this.callMethod("play")
				}
			}, {
				key: "unload",
				value: function() {
					return this.callMethod("unload")
				}
			}, {
				key: "destroy",
				value: function() {
					var e = this;
					return new g(function(t) {
						E["delete"](e), k["delete"](e.element), e._originalElement && (k["delete"](e._originalElement), e._originalElement.removeAttribute("data-vimeo-initialized")), e.element && "IFRAME" === e.element.nodeName && e.element.parentNode && e.element.parentNode.removeChild(e.element), t()
					})
				}
			}, {
				key: "getAutopause",
				value: function() {
					return this.get("autopause")
				}
			}, {
				key: "setAutopause",
				value: function(e) {
					return this.set("autopause", e)
				}
			}, {
				key: "getBuffered",
				value: function() {
					return this.get("buffered")
				}
			}, {
				key: "getColor",
				value: function() {
					return this.get("color")
				}
			}, {
				key: "setColor",
				value: function(e) {
					return this.set("color", e)
				}
			}, {
				key: "getCuePoints",
				value: function() {
					return this.get("cuePoints")
				}
			}, {
				key: "getCurrentTime",
				value: function() {
					return this.get("currentTime")
				}
			}, {
				key: "setCurrentTime",
				value: function(e) {
					return this.set("currentTime", e)
				}
			}, {
				key: "getDuration",
				value: function() {
					return this.get("duration")
				}
			}, {
				key: "getEnded",
				value: function() {
					return this.get("ended")
				}
			}, {
				key: "getLoop",
				value: function() {
					return this.get("loop")
				}
			}, {
				key: "setLoop",
				value: function(e) {
					return this.set("loop", e)
				}
			}, {
				key: "setMuted",
				value: function(e) {
					return this.set("muted", e)
				}
			}, {
				key: "getMuted",
				value: function() {
					return this.get("muted")
				}
			}, {
				key: "getPaused",
				value: function() {
					return this.get("paused")
				}
			}, {
				key: "getPlaybackRate",
				value: function() {
					return this.get("playbackRate")
				}
			}, {
				key: "setPlaybackRate",
				value: function(e) {
					return this.set("playbackRate", e)
				}
			}, {
				key: "getPlayed",
				value: function() {
					return this.get("played")
				}
			}, {
				key: "getSeekable",
				value: function() {
					return this.get("seekable")
				}
			}, {
				key: "getSeeking",
				value: function() {
					return this.get("seeking")
				}
			}, {
				key: "getTextTracks",
				value: function() {
					return this.get("textTracks")
				}
			}, {
				key: "getVideoEmbedCode",
				value: function() {
					return this.get("videoEmbedCode")
				}
			}, {
				key: "getVideoId",
				value: function() {
					return this.get("videoId")
				}
			}, {
				key: "getVideoTitle",
				value: function() {
					return this.get("videoTitle")
				}
			}, {
				key: "getVideoWidth",
				value: function() {
					return this.get("videoWidth")
				}
			}, {
				key: "getVideoHeight",
				value: function() {
					return this.get("videoHeight")
				}
			}, {
				key: "getVideoUrl",
				value: function() {
					return this.get("videoUrl")
				}
			}, {
				key: "getVolume",
				value: function() {
					return this.get("volume")
				}
			}, {
				key: "setVolume",
				value: function(e) {
					return this.set("volume", e)
				}
			}]) && e(v.prototype, p), y && e(v, y), h
		}();
	return h || (function() {
		var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : document,
			t = [].slice.call(e.querySelectorAll("[data-vimeo-id], [data-vimeo-url]")),
			n = function(e) {
				"console" in window && console.error && console.error("There was an error creating an embed: ".concat(e))
			};
		t.forEach(function(e) {
			try {
				if (null !== e.getAttribute("data-vimeo-defer")) return;
				var t = u(e);
				s(r(t), t, e).then(function(t) {
					return c(t, e)
				})["catch"](n)
			} catch (t) {
				n(t)
			}
		})
	}(), function() {
		var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : document;
		if (!window.VimeoPlayerResizeEmbeds_) {
			window.VimeoPlayerResizeEmbeds_ = !0;
			var t = function(t) {
				if (n(t.origin) && t.data && "spacechange" === t.data.event)
					for (var r = e.querySelectorAll("iframe"), o = 0; o < r.length; o++)
						if (r[o].contentWindow === t.source) {
							r[o].parentElement.style.paddingBottom = "".concat(t.data.data[0].bottom, "px");
							break
						}
			};
			window.addEventListener ? window.addEventListener("message", t, !1) : window.attachEvent && window.attachEvent("onmessage", t)
		}
	}()), T
});
! function(e) {
	e.cookie = function(o, i, n) {
		if (arguments.length > 1 && (!/Object/.test(Object.prototype.toString.call(i)) || null === i || void 0 === i)) {
			if (n = e.extend({}, n), null !== i && void 0 !== i || (n.expires = -1), "number" == typeof n.expires) {
				var c = n.expires,
					t = n.expires = new Date;
				t.setDate(t.getDate() + c)
			}
			return i = String(i), document.cookie = [encodeURIComponent(o), "=", n.raw ? i : encodeURIComponent(i), n.expires ? "; expires=" + n.expires.toUTCString() : "", n.path ? "; path=" + n.path : "", n.domain ? "; domain=" + n.domain : "", n.secure ? "; secure" : ""].join("")
		}
		n = i || {};
		for (var r, s = n.raw ? function(e) {
				return e
			} : decodeURIComponent, a = document.cookie.split("; "), u = 0; r = a[u] && a[u].split("="); u++)
			if (s(r[0]) === o) return s(r[1] || "");
		return null
	}, e.fn.cookieBar = function(o) {
		var i = e.extend({
			closeButton: "none",
			hideOnClose: !0,
			secure: !1,
			path: "/",
			domain: ""
		}, o);
		return this.each(function() {
			var o = e(this);
			o.hide(), "none" == i.closeButton && (e(".cookie-message p").append('<a class="cookiebar-close" href="#">Accept</a>'), e.extend(i, {
				closeButton: ".cookiebar-close"
			}), e(".cookiebar-close").on("click", function() {
				console.log(o), i.hideOnClose && o.hide(), e.cookie("cookiebar", "hide", {
					path: i.path,
					secure: i.secure,
					domain: i.domain,
					expires: 30
				})
			})), "hide" != e.cookie("cookiebar") && o.show(), o.find(i.closeButton).click(function() {
				return console.log(o), i.hideOnClose && o.hide(), e.cookie("cookiebar", "hide", {
					path: i.path,
					secure: i.secure,
					domain: i.domain,
					expires: 30
				}), o.trigger("cookieBar-close"), !1
			})
		})
	}, e.cookieBar = function(o) {
		e("body").prepend('<div style="display: none;" class="cookie-message"><p>We use cookies to deliver the best online experience for you. By using our website you agree to our use of cookies, in acceptance of our <a href="/privacy-policy/">Privacy Policy</a></p></div>'), e(".cookie-message").cookieBar(o)
	}
}(jQuery);
! function(e, t) {
	"object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((e = "undefined" != typeof globalThis ? globalThis : e || self).Popper = {})
}(this, function(e) {
	"use strict";

	function t(e) {
		if (null == e) return window;
		if ("[object Window]" !== e.toString()) {
			var t = e.ownerDocument;
			return t && t.defaultView || window
		}
		return e
	}

	function n(e) {
		return e instanceof t(e).Element || e instanceof Element
	}

	function r(e) {
		return e instanceof t(e).HTMLElement || e instanceof HTMLElement
	}

	function o(e) {
		return "undefined" != typeof ShadowRoot && (e instanceof t(e).ShadowRoot || e instanceof ShadowRoot)
	}

	function i() {
		var e = navigator.userAgentData;
		return null != e && e.brands ? e.brands.map(function(e) {
			return e.brand + "/" + e.version
		}).join(" ") : navigator.userAgent
	}

	function a() {
		return !/^((?!chrome|android).)*safari/i.test(i())
	}

	function s(e, o, i) {
		void 0 === o && (o = !1), void 0 === i && (i = !1);
		var s = e.getBoundingClientRect(),
			f = 1,
			c = 1;
		o && r(e) && (f = e.offsetWidth > 0 && z(s.width) / e.offsetWidth || 1, c = e.offsetHeight > 0 && z(s.height) / e.offsetHeight || 1);
		var p = (n(e) ? t(e) : window).visualViewport,
			u = !a() && i,
			l = (s.left + (u && p ? p.offsetLeft : 0)) / f,
			d = (s.top + (u && p ? p.offsetTop : 0)) / c,
			h = s.width / f,
			m = s.height / c;
		return {
			width: h,
			height: m,
			top: d,
			right: l + h,
			bottom: d + m,
			left: l,
			x: l,
			y: d
		}
	}

	function f(e) {
		var n = t(e);
		return {
			scrollLeft: n.pageXOffset,
			scrollTop: n.pageYOffset
		}
	}

	function c(e) {
		return e ? (e.nodeName || "").toLowerCase() : null
	}

	function p(e) {
		return ((n(e) ? e.ownerDocument : e.document) || window.document).documentElement
	}

	function u(e) {
		return s(p(e)).left + f(e).scrollLeft
	}

	function l(e) {
		return t(e).getComputedStyle(e)
	}

	function d(e) {
		var t = l(e),
			n = t.overflow,
			r = t.overflowX,
			o = t.overflowY;
		return /auto|scroll|overlay|hidden/.test(n + o + r)
	}

	function h(e, n, o) {
		void 0 === o && (o = !1);
		var i, a, l = r(n),
			h = r(n) && function(e) {
				var t = e.getBoundingClientRect(),
					n = z(t.width) / e.offsetWidth || 1,
					r = z(t.height) / e.offsetHeight || 1;
				return 1 !== n || 1 !== r
			}(n),
			m = p(n),
			v = s(e, h, o),
			y = {
				scrollLeft: 0,
				scrollTop: 0
			},
			g = {
				x: 0,
				y: 0
			};
		return (l || !l && !o) && (("body" !== c(n) || d(m)) && (y = (i = n) !== t(i) && r(i) ? {
			scrollLeft: (a = i).scrollLeft,
			scrollTop: a.scrollTop
		} : f(i)), r(n) ? ((g = s(n, !0)).x += n.clientLeft, g.y += n.clientTop) : m && (g.x = u(m))), {
			x: v.left + y.scrollLeft - g.x,
			y: v.top + y.scrollTop - g.y,
			width: v.width,
			height: v.height
		}
	}

	function m(e) {
		var t = s(e),
			n = e.offsetWidth,
			r = e.offsetHeight;
		return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
			x: e.offsetLeft,
			y: e.offsetTop,
			width: n,
			height: r
		}
	}

	function v(e) {
		return "html" === c(e) ? e : e.assignedSlot || e.parentNode || (o(e) ? e.host : null) || p(e)
	}

	function y(e) {
		return ["html", "body", "#document"].indexOf(c(e)) >= 0 ? e.ownerDocument.body : r(e) && d(e) ? e : y(v(e))
	}

	function g(e, n) {
		var r;
		void 0 === n && (n = []);
		var o = y(e),
			i = o === (null == (r = e.ownerDocument) ? void 0 : r.body),
			a = t(o),
			s = i ? [a].concat(a.visualViewport || [], d(o) ? o : []) : o,
			f = n.concat(s);
		return i ? f : f.concat(g(v(s)))
	}

	function b(e) {
		return ["table", "td", "th"].indexOf(c(e)) >= 0
	}

	function w(e) {
		return r(e) && "fixed" !== l(e).position ? e.offsetParent : null
	}

	function x(e) {
		for (var n = t(e), a = w(e); a && b(a) && "static" === l(a).position;) a = w(a);
		return a && ("html" === c(a) || "body" === c(a) && "static" === l(a).position) ? n : a || function(e) {
			var t = /firefox/i.test(i());
			if (/Trident/i.test(i()) && r(e) && "fixed" === l(e).position) return null;
			var n = v(e);
			for (o(n) && (n = n.host); r(n) && ["html", "body"].indexOf(c(n)) < 0;) {
				var a = l(n);
				if ("none" !== a.transform || "none" !== a.perspective || "paint" === a.contain || -1 !== ["transform", "perspective"].indexOf(a.willChange) || t && "filter" === a.willChange || t && a.filter && "none" !== a.filter) return n;
				n = n.parentNode
			}
			return null
		}(e) || n
	}

	function O(e) {
		function t(e) {
			r.add(e.name), [].concat(e.requires || [], e.requiresIfExists || []).forEach(function(e) {
				if (!r.has(e)) {
					var o = n.get(e);
					o && t(o)
				}
			}), o.push(e)
		}
		var n = new Map,
			r = new Set,
			o = [];
		return e.forEach(function(e) {
			n.set(e.name, e)
		}), e.forEach(function(e) {
			r.has(e.name) || t(e)
		}), o
	}

	function j(e) {
		return e.split("-")[0]
	}

	function E(e, t) {
		var n = t.getRootNode && t.getRootNode();
		if (e.contains(t)) return !0;
		if (n && o(n)) {
			var r = t;
			do {
				if (r && e.isSameNode(r)) return !0;
				r = r.parentNode || r.host
			} while (r)
		}
		return !1
	}

	function D(e) {
		return Object.assign({}, e, {
			left: e.x,
			top: e.y,
			right: e.x + e.width,
			bottom: e.y + e.height
		})
	}

	function A(e, r, o) {
		return r === ee ? D(function(e, n) {
			var r = t(e),
				o = p(e),
				i = r.visualViewport,
				s = o.clientWidth,
				f = o.clientHeight,
				c = 0,
				l = 0;
			if (i) {
				s = i.width, f = i.height;
				var d = a();
				(d || !d && "fixed" === n) && (c = i.offsetLeft, l = i.offsetTop)
			}
			return {
				width: s,
				height: f,
				x: c + u(e),
				y: l
			}
		}(e, o)) : n(r) ? function(e, t) {
			var n = s(e, !1, "fixed" === t);
			return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n
		}(r, o) : D(function(e) {
			var t, n = p(e),
				r = f(e),
				o = null == (t = e.ownerDocument) ? void 0 : t.body,
				i = F(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0),
				a = F(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0),
				s = -r.scrollLeft + u(e),
				c = -r.scrollTop;
			return "rtl" === l(o || n).direction && (s += F(n.clientWidth, o ? o.clientWidth : 0) - i), {
				width: i,
				height: a,
				x: s,
				y: c
			}
		}(p(e)))
	}

	function L(e, t, o, i) {
		var a = "clippingParents" === t ? function(e) {
				var t = g(v(e)),
					o = ["absolute", "fixed"].indexOf(l(e).position) >= 0 && r(e) ? x(e) : e;
				return n(o) ? t.filter(function(e) {
					return n(e) && E(e, o) && "body" !== c(e)
				}) : []
			}(e) : [].concat(t),
			s = [].concat(a, [o]),
			f = s[0],
			p = s.reduce(function(t, n) {
				var r = A(e, n, i);
				return t.top = F(r.top, t.top), t.right = U(r.right, t.right), t.bottom = U(r.bottom, t.bottom), t.left = F(r.left, t.left), t
			}, A(e, f, i));
		return p.width = p.right - p.left, p.height = p.bottom - p.top, p.x = p.left, p.y = p.top, p
	}

	function P(e) {
		return e.split("-")[1]
	}

	function M(e) {
		return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y"
	}

	function k(e) {
		var t, n = e.reference,
			r = e.element,
			o = e.placement,
			i = o ? j(o) : null,
			a = o ? P(o) : null,
			s = n.x + n.width / 2 - r.width / 2,
			f = n.y + n.height / 2 - r.height / 2;
		switch (i) {
			case X:
				t = {
					x: s,
					y: n.y - r.height
				};
				break;
			case Y:
				t = {
					x: s,
					y: n.y + n.height
				};
				break;
			case G:
				t = {
					x: n.x + n.width,
					y: f
				};
				break;
			case J:
				t = {
					x: n.x - r.width,
					y: f
				};
				break;
			default:
				t = {
					x: n.x,
					y: n.y
				}
		}
		var c = i ? M(i) : null;
		if (null != c) {
			var p = "y" === c ? "height" : "width";
			switch (a) {
				case Z:
					t[c] = t[c] - (n[p] / 2 - r[p] / 2);
					break;
				case $:
					t[c] = t[c] + (n[p] / 2 - r[p] / 2)
			}
		}
		return t
	}

	function W(e) {
		return Object.assign({}, {
			top: 0,
			right: 0,
			bottom: 0,
			left: 0
		}, e)
	}

	function B(e, t) {
		return t.reduce(function(t, n) {
			return t[n] = e, t
		}, {})
	}

	function H(e, t) {
		void 0 === t && (t = {});
		var r = t,
			o = r.placement,
			i = void 0 === o ? e.placement : o,
			a = r.strategy,
			f = void 0 === a ? e.strategy : a,
			c = r.boundary,
			u = void 0 === c ? "clippingParents" : c,
			l = r.rootBoundary,
			d = void 0 === l ? ee : l,
			h = r.elementContext,
			m = void 0 === h ? te : h,
			v = r.altBoundary,
			y = void 0 !== v && v,
			g = r.padding,
			b = void 0 === g ? 0 : g,
			w = W("number" != typeof b ? b : B(b, Q)),
			x = m === te ? "reference" : te,
			O = e.rects.popper,
			j = e.elements[y ? x : m],
			E = L(n(j) ? j : j.contextElement || p(e.elements.popper), u, d, f),
			A = s(e.elements.reference),
			P = k({
				reference: A,
				element: O,
				strategy: "absolute",
				placement: i
			}),
			M = D(Object.assign({}, O, P)),
			H = m === te ? M : A,
			T = {
				top: E.top - H.top + w.top,
				bottom: H.bottom - E.bottom + w.bottom,
				left: E.left - H.left + w.left,
				right: H.right - E.right + w.right
			},
			R = e.modifiersData.offset;
		if (m === te && R) {
			var S = R[i];
			Object.keys(T).forEach(function(e) {
				var t = [G, Y].indexOf(e) >= 0 ? 1 : -1,
					n = [X, Y].indexOf(e) >= 0 ? "y" : "x";
				T[e] += S[n] * t
			})
		}
		return T
	}

	function T() {
		for (var e = arguments.length, t = new Array(e), n = 0; e > n; n++) t[n] = arguments[n];
		return !t.some(function(e) {
			return !(e && "function" == typeof e.getBoundingClientRect)
		})
	}

	function R(e) {
		void 0 === e && (e = {});
		var t = e,
			r = t.defaultModifiers,
			o = void 0 === r ? [] : r,
			i = t.defaultOptions,
			a = void 0 === i ? ie : i;
		return function(e, t, r) {
			function i() {
				p.forEach(function(e) {
					return e()
				}), p = []
			}
			void 0 === r && (r = a);
			var s, f, c = {
					placement: "bottom",
					orderedModifiers: [],
					options: Object.assign({}, ie, a),
					modifiersData: {},
					elements: {
						reference: e,
						popper: t
					},
					attributes: {},
					styles: {}
				},
				p = [],
				u = !1,
				l = {
					state: c,
					setOptions: function(r) {
						var s = "function" == typeof r ? r(c.options) : r;
						i(), c.options = Object.assign({}, a, c.options, s), c.scrollParents = {
							reference: n(e) ? g(e) : e.contextElement ? g(e.contextElement) : [],
							popper: g(t)
						};
						var f, u, d = function(e) {
							var t = O(e);
							return oe.reduce(function(e, n) {
								return e.concat(t.filter(function(e) {
									return e.phase === n
								}))
							}, [])
						}((f = [].concat(o, c.options.modifiers), u = f.reduce(function(e, t) {
							var n = e[t.name];
							return e[t.name] = n ? Object.assign({}, n, t, {
								options: Object.assign({}, n.options, t.options),
								data: Object.assign({}, n.data, t.data)
							}) : t, e
						}, {}), Object.keys(u).map(function(e) {
							return u[e]
						})));
						return c.orderedModifiers = d.filter(function(e) {
							return e.enabled
						}), c.orderedModifiers.forEach(function(e) {
							var t = e.name,
								n = e.options,
								r = void 0 === n ? {} : n,
								o = e.effect;
							if ("function" == typeof o) {
								var i = o({
										state: c,
										name: t,
										instance: l,
										options: r
									}),
									a = function() {};
								p.push(i || a)
							}
						}), l.update()
					},
					forceUpdate: function() {
						if (!u) {
							var e = c.elements,
								t = e.reference,
								n = e.popper;
							if (T(t, n)) {
								c.rects = {
									reference: h(t, x(n), "fixed" === c.options.strategy),
									popper: m(n)
								}, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach(function(e) {
									return c.modifiersData[e.name] = Object.assign({}, e.data)
								});
								for (var r = 0; r < c.orderedModifiers.length; r++)
									if (!0 !== c.reset) {
										var o = c.orderedModifiers[r],
											i = o.fn,
											a = o.options,
											s = void 0 === a ? {} : a,
											f = o.name;
										"function" == typeof i && (c = i({
											state: c,
											options: s,
											name: f,
											instance: l
										}) || c)
									} else c.reset = !1, r = -1
							}
						}
					},
					update: (s = function() {
						return new Promise(function(e) {
							l.forceUpdate(), e(c)
						})
					}, function() {
						return f || (f = new Promise(function(e) {
							Promise.resolve().then(function() {
								f = void 0, e(s())
							})
						})), f
					}),
					destroy: function() {
						i(), u = !0
					}
				};
			return T(e, t) ? (l.setOptions(r).then(function(e) {
				!u && r.onFirstUpdate && r.onFirstUpdate(e)
			}), l) : l
		}
	}

	function S(e) {
		var n, r = e.popper,
			o = e.popperRect,
			i = e.placement,
			a = e.variation,
			s = e.offsets,
			f = e.position,
			c = e.gpuAcceleration,
			u = e.adaptive,
			d = e.roundOffsets,
			h = e.isFixed,
			m = s.x,
			v = void 0 === m ? 0 : m,
			y = s.y,
			g = void 0 === y ? 0 : y,
			b = "function" == typeof d ? d({
				x: v,
				y: g
			}) : {
				x: v,
				y: g
			};
		v = b.x, g = b.y;
		var w = s.hasOwnProperty("x"),
			O = s.hasOwnProperty("y"),
			j = J,
			E = X,
			D = window;
		if (u) {
			var A = x(r),
				L = "clientHeight",
				P = "clientWidth";
			A === t(r) && "static" !== l(A = p(r)).position && "absolute" === f && (L = "scrollHeight", P = "scrollWidth"), A = A, (i === X || (i === J || i === G) && a === $) && (E = Y, g -= (h && A === D && D.visualViewport ? D.visualViewport.height : A[L]) - o.height, g *= c ? 1 : -1), i !== J && (i !== X && i !== Y || a !== $) || (j = G, v -= (h && A === D && D.visualViewport ? D.visualViewport.width : A[P]) - o.width, v *= c ? 1 : -1)
		}
		var M, k = Object.assign({
				position: f
			}, u && ce),
			W = !0 === d ? function(e) {
				var t = e.x,
					n = e.y,
					r = window.devicePixelRatio || 1;
				return {
					x: z(t * r) / r || 0,
					y: z(n * r) / r || 0
				}
			}({
				x: v,
				y: g
			}) : {
				x: v,
				y: g
			};
		return v = W.x, g = W.y, c ? Object.assign({}, k, ((M = {})[E] = O ? "0" : "", M[j] = w ? "0" : "", M.transform = (D.devicePixelRatio || 1) <= 1 ? "translate(" + v + "px, " + g + "px)" : "translate3d(" + v + "px, " + g + "px, 0)", M)) : Object.assign({}, k, ((n = {})[E] = O ? g + "px" : "", n[j] = w ? v + "px" : "", n.transform = "", n))
	}

	function V(e) {
		return e.replace(/left|right|bottom|top/g, function(e) {
			return de[e]
		})
	}

	function q(e) {
		return e.replace(/start|end/g, function(e) {
			return he[e]
		})
	}

	function C(e, t) {
		void 0 === t && (t = {});
		var n = t,
			r = n.placement,
			o = n.boundary,
			i = n.rootBoundary,
			a = n.padding,
			s = n.flipVariations,
			f = n.allowedAutoPlacements,
			c = void 0 === f ? re : f,
			p = P(r),
			u = p ? s ? ne : ne.filter(function(e) {
				return P(e) === p
			}) : Q,
			l = u.filter(function(e) {
				return c.indexOf(e) >= 0
			});
		0 === l.length && (l = u);
		var d = l.reduce(function(t, n) {
			return t[n] = H(e, {
				placement: n,
				boundary: o,
				rootBoundary: i,
				padding: a
			})[j(n)], t
		}, {});
		return Object.keys(d).sort(function(e, t) {
			return d[e] - d[t]
		})
	}

	function N(e, t, n) {
		return F(e, U(t, n))
	}

	function I(e, t, n) {
		return void 0 === n && (n = {
			x: 0,
			y: 0
		}), {
			top: e.top - t.height - n.y,
			right: e.right - t.width + n.x,
			bottom: e.bottom - t.height + n.y,
			left: e.left - t.width - n.x
		}
	}

	function _(e) {
		return [X, G, Y, J].some(function(t) {
			return e[t] >= 0
		})
	}
	var F = Math.max,
		U = Math.min,
		z = Math.round,
		X = "top",
		Y = "bottom",
		G = "right",
		J = "left",
		K = "auto",
		Q = [X, Y, G, J],
		Z = "start",
		$ = "end",
		ee = "viewport",
		te = "popper",
		ne = Q.reduce(function(e, t) {
			return e.concat([t + "-" + Z, t + "-" + $])
		}, []),
		re = [].concat(Q, [K]).reduce(function(e, t) {
			return e.concat([t, t + "-" + Z, t + "-" + $])
		}, []),
		oe = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"],
		ie = {
			placement: "bottom",
			modifiers: [],
			strategy: "absolute"
		},
		ae = {
			passive: !0
		},
		se = {
			name: "eventListeners",
			enabled: !0,
			phase: "write",
			fn: function() {},
			effect: function(e) {
				var n = e.state,
					r = e.instance,
					o = e.options,
					i = o.scroll,
					a = void 0 === i || i,
					s = o.resize,
					f = void 0 === s || s,
					c = t(n.elements.popper),
					p = [].concat(n.scrollParents.reference, n.scrollParents.popper);
				return a && p.forEach(function(e) {
						e.addEventListener("scroll", r.update, ae)
					}), f && c.addEventListener("resize", r.update, ae),
					function() {
						a && p.forEach(function(e) {
							e.removeEventListener("scroll", r.update, ae)
						}), f && c.removeEventListener("resize", r.update, ae)
					}
			},
			data: {}
		},
		fe = {
			name: "popperOffsets",
			enabled: !0,
			phase: "read",
			fn: function(e) {
				var t = e.state,
					n = e.name;
				t.modifiersData[n] = k({
					reference: t.rects.reference,
					element: t.rects.popper,
					strategy: "absolute",
					placement: t.placement
				})
			},
			data: {}
		},
		ce = {
			top: "auto",
			right: "auto",
			bottom: "auto",
			left: "auto"
		},
		pe = {
			name: "computeStyles",
			enabled: !0,
			phase: "beforeWrite",
			fn: function(e) {
				var t = e.state,
					n = e.options,
					r = n.gpuAcceleration,
					o = void 0 === r || r,
					i = n.adaptive,
					a = void 0 === i || i,
					s = n.roundOffsets,
					f = void 0 === s || s,
					c = {
						placement: j(t.placement),
						variation: P(t.placement),
						popper: t.elements.popper,
						popperRect: t.rects.popper,
						gpuAcceleration: o,
						isFixed: "fixed" === t.options.strategy
					};
				null != t.modifiersData.popperOffsets && (t.styles.popper = Object.assign({}, t.styles.popper, S(Object.assign({}, c, {
					offsets: t.modifiersData.popperOffsets,
					position: t.options.strategy,
					adaptive: a,
					roundOffsets: f
				})))), null != t.modifiersData.arrow && (t.styles.arrow = Object.assign({}, t.styles.arrow, S(Object.assign({}, c, {
					offsets: t.modifiersData.arrow,
					position: "absolute",
					adaptive: !1,
					roundOffsets: f
				})))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
					"data-popper-placement": t.placement
				})
			},
			data: {}
		},
		ue = {
			name: "applyStyles",
			enabled: !0,
			phase: "write",
			fn: function(e) {
				var t = e.state;
				Object.keys(t.elements).forEach(function(e) {
					var n = t.styles[e] || {},
						o = t.attributes[e] || {},
						i = t.elements[e];
					r(i) && c(i) && (Object.assign(i.style, n), Object.keys(o).forEach(function(e) {
						var t = o[e];
						!1 === t ? i.removeAttribute(e) : i.setAttribute(e, !0 === t ? "" : t)
					}))
				})
			},
			effect: function(e) {
				var t = e.state,
					n = {
						popper: {
							position: t.options.strategy,
							left: "0",
							top: "0",
							margin: "0"
						},
						arrow: {
							position: "absolute"
						},
						reference: {}
					};
				return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
					function() {
						Object.keys(t.elements).forEach(function(e) {
							var o = t.elements[e],
								i = t.attributes[e] || {},
								a = Object.keys(t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]).reduce(function(e, t) {
									return e[t] = "", e
								}, {});
							r(o) && c(o) && (Object.assign(o.style, a), Object.keys(i).forEach(function(e) {
								o.removeAttribute(e)
							}))
						})
					}
			},
			requires: ["computeStyles"]
		},
		le = {
			name: "offset",
			enabled: !0,
			phase: "main",
			requires: ["popperOffsets"],
			fn: function(e) {
				var t = e.state,
					n = e.options,
					r = e.name,
					o = n.offset,
					i = void 0 === o ? [0, 0] : o,
					a = re.reduce(function(e, n) {
						return e[n] = function(e, t, n) {
							var r = j(e),
								o = [J, X].indexOf(r) >= 0 ? -1 : 1,
								i = "function" == typeof n ? n(Object.assign({}, t, {
									placement: e
								})) : n,
								a = i[0],
								s = i[1];
							return a = a || 0, s = (s || 0) * o, [J, G].indexOf(r) >= 0 ? {
								x: s,
								y: a
							} : {
								x: a,
								y: s
							}
						}(n, t.rects, i), e
					}, {}),
					s = a[t.placement],
					f = s.x,
					c = s.y;
				null != t.modifiersData.popperOffsets && (t.modifiersData.popperOffsets.x += f, t.modifiersData.popperOffsets.y += c), t.modifiersData[r] = a
			}
		},
		de = {
			left: "right",
			right: "left",
			bottom: "top",
			top: "bottom"
		},
		he = {
			start: "end",
			end: "start"
		},
		me = {
			name: "flip",
			enabled: !0,
			phase: "main",
			fn: function(e) {
				var t = e.state,
					n = e.options,
					r = e.name;
				if (!t.modifiersData[r]._skip) {
					for (var o = n.mainAxis, i = void 0 === o || o, a = n.altAxis, s = void 0 === a || a, f = n.fallbackPlacements, c = n.padding, p = n.boundary, u = n.rootBoundary, l = n.altBoundary, d = n.flipVariations, h = void 0 === d || d, m = n.allowedAutoPlacements, v = t.options.placement, y = j(v), g = f || (y !== v && h ? function(e) {
							if (j(e) === K) return [];
							var t = V(e);
							return [q(e), t, q(t)]
						}(v) : [V(v)]), b = [v].concat(g).reduce(function(e, n) {
							return e.concat(j(n) === K ? C(t, {
								placement: n,
								boundary: p,
								rootBoundary: u,
								padding: c,
								flipVariations: h,
								allowedAutoPlacements: m
							}) : n)
						}, []), w = t.rects.reference, x = t.rects.popper, O = new Map, E = !0, D = b[0], A = 0; A < b.length; A++) {
						var L = b[A],
							M = j(L),
							k = P(L) === Z,
							W = [X, Y].indexOf(M) >= 0,
							B = W ? "width" : "height",
							T = H(t, {
								placement: L,
								boundary: p,
								rootBoundary: u,
								altBoundary: l,
								padding: c
							}),
							R = W ? k ? G : J : k ? Y : X;
						w[B] > x[B] && (R = V(R));
						var S = V(R),
							N = [];
						if (i && N.push(T[M] <= 0), s && N.push(T[R] <= 0, T[S] <= 0), N.every(function(e) {
								return e
							})) {
							D = L, E = !1;
							break
						}
						O.set(L, N)
					}
					if (E)
						for (var I = function(e) {
								var t = b.find(function(t) {
									var n = O.get(t);
									return n ? n.slice(0, e).every(function(e) {
										return e
									}) : void 0
								});
								return t ? (D = t, "break") : void 0
							}, _ = h ? 3 : 1; _ > 0 && "break" !== I(_); _--);
					t.placement !== D && (t.modifiersData[r]._skip = !0, t.placement = D, t.reset = !0)
				}
			},
			requiresIfExists: ["offset"],
			data: {
				_skip: !1
			}
		},
		ve = {
			name: "preventOverflow",
			enabled: !0,
			phase: "main",
			fn: function(e) {
				var t = e.state,
					n = e.options,
					r = e.name,
					o = n.mainAxis,
					i = void 0 === o || o,
					a = n.altAxis,
					s = void 0 !== a && a,
					f = n.boundary,
					c = n.rootBoundary,
					p = n.altBoundary,
					u = n.padding,
					l = n.tether,
					d = void 0 === l || l,
					h = n.tetherOffset,
					v = void 0 === h ? 0 : h,
					y = H(t, {
						boundary: f,
						rootBoundary: c,
						padding: u,
						altBoundary: p
					}),
					g = j(t.placement),
					b = P(t.placement),
					w = !b,
					O = M(g),
					E = "x" === O ? "y" : "x",
					D = t.modifiersData.popperOffsets,
					A = t.rects.reference,
					L = t.rects.popper,
					k = "function" == typeof v ? v(Object.assign({}, t.rects, {
						placement: t.placement
					})) : v,
					W = "number" == typeof k ? {
						mainAxis: k,
						altAxis: k
					} : Object.assign({
						mainAxis: 0,
						altAxis: 0
					}, k),
					B = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
					T = {
						x: 0,
						y: 0
					};
				if (D) {
					if (i) {
						var R, S = "y" === O ? X : J,
							V = "y" === O ? Y : G,
							q = "y" === O ? "height" : "width",
							C = D[O],
							I = C + y[S],
							_ = C - y[V],
							z = d ? -L[q] / 2 : 0,
							K = b === Z ? A[q] : L[q],
							Q = b === Z ? -L[q] : -A[q],
							$ = t.elements.arrow,
							ee = d && $ ? m($) : {
								width: 0,
								height: 0
							},
							te = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : {
								top: 0,
								right: 0,
								bottom: 0,
								left: 0
							},
							ne = te[S],
							re = te[V],
							oe = N(0, A[q], ee[q]),
							ie = w ? A[q] / 2 - z - oe - ne - W.mainAxis : K - oe - ne - W.mainAxis,
							ae = w ? -A[q] / 2 + z + oe + re + W.mainAxis : Q + oe + re + W.mainAxis,
							se = t.elements.arrow && x(t.elements.arrow),
							fe = se ? "y" === O ? se.clientTop || 0 : se.clientLeft || 0 : 0,
							ce = null != (R = null == B ? void 0 : B[O]) ? R : 0,
							pe = C + ae - ce,
							ue = N(d ? U(I, C + ie - ce - fe) : I, C, d ? F(_, pe) : _);
						D[O] = ue, T[O] = ue - C
					}
					if (s) {
						var le, de = "x" === O ? X : J,
							he = "x" === O ? Y : G,
							me = D[E],
							ve = "y" === E ? "height" : "width",
							ye = me + y[de],
							ge = me - y[he],
							be = -1 !== [X, J].indexOf(g),
							we = null != (le = null == B ? void 0 : B[E]) ? le : 0,
							xe = be ? ye : me - A[ve] - L[ve] - we + W.altAxis,
							Oe = be ? me + A[ve] + L[ve] - we - W.altAxis : ge,
							je = d && be ? function(e, t, n) {
								var r = N(e, t, n);
								return r > n ? n : r
							}(xe, me, Oe) : N(d ? xe : ye, me, d ? Oe : ge);
						D[E] = je, T[E] = je - me
					}
					t.modifiersData[r] = T
				}
			},
			requiresIfExists: ["offset"]
		},
		ye = {
			name: "arrow",
			enabled: !0,
			phase: "main",
			fn: function(e) {
				var t, n = e.state,
					r = e.name,
					o = e.options,
					i = n.elements.arrow,
					a = n.modifiersData.popperOffsets,
					s = j(n.placement),
					f = M(s),
					c = [J, G].indexOf(s) >= 0 ? "height" : "width";
				if (i && a) {
					var p = function(e, t) {
							return W("number" != typeof(e = "function" == typeof e ? e(Object.assign({}, t.rects, {
								placement: t.placement
							})) : e) ? e : B(e, Q))
						}(o.padding, n),
						u = m(i),
						l = "y" === f ? X : J,
						d = "y" === f ? Y : G,
						h = n.rects.reference[c] + n.rects.reference[f] - a[f] - n.rects.popper[c],
						v = a[f] - n.rects.reference[f],
						y = x(i),
						g = y ? "y" === f ? y.clientHeight || 0 : y.clientWidth || 0 : 0,
						b = h / 2 - v / 2,
						w = p[l],
						O = g - u[c] - p[d],
						E = g / 2 - u[c] / 2 + b,
						D = N(w, E, O),
						A = f;
					n.modifiersData[r] = ((t = {})[A] = D, t.centerOffset = D - E, t)
				}
			},
			effect: function(e) {
				var t = e.state,
					n = e.options.element,
					r = void 0 === n ? "[data-popper-arrow]" : n;
				null != r && ("string" != typeof r || (r = t.elements.popper.querySelector(r))) && E(t.elements.popper, r) && (t.elements.arrow = r)
			},
			requires: ["popperOffsets"],
			requiresIfExists: ["preventOverflow"]
		},
		ge = {
			name: "hide",
			enabled: !0,
			phase: "main",
			requiresIfExists: ["preventOverflow"],
			fn: function(e) {
				var t = e.state,
					n = e.name,
					r = t.rects.reference,
					o = t.rects.popper,
					i = t.modifiersData.preventOverflow,
					a = H(t, {
						elementContext: "reference"
					}),
					s = H(t, {
						altBoundary: !0
					}),
					f = I(a, r),
					c = I(s, o, i),
					p = _(f),
					u = _(c);
				t.modifiersData[n] = {
					referenceClippingOffsets: f,
					popperEscapeOffsets: c,
					isReferenceHidden: p,
					hasPopperEscaped: u
				}, t.attributes.popper = Object.assign({}, t.attributes.popper, {
					"data-popper-reference-hidden": p,
					"data-popper-escaped": u
				})
			}
		},
		be = R({
			defaultModifiers: [se, fe, pe, ue]
		}),
		we = [se, fe, pe, ue, le, me, ve, ye, ge],
		xe = R({
			defaultModifiers: we
		});
	e.applyStyles = ue, e.arrow = ye, e.computeStyles = pe, e.createPopper = xe, e.createPopperLite = be, e.defaultModifiers = we, e.detectOverflow = H, e.eventListeners = se, e.flip = me, e.hide = ge, e.offset = le, e.popperGenerator = R, e.popperOffsets = fe, e.preventOverflow = ve, Object.defineProperty(e, "__esModule", {
		value: !0
	})
});
! function(e, t) {
	"object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.moment = t()
}(this, function() {
	"use strict";

	function e() {
		return ws.apply(null, arguments)
	}

	function t(e) {
		ws = e
	}

	function n(e) {
		return e instanceof Array || "[object Array]" === Object.prototype.toString.call(e)
	}

	function s(e) {
		return null != e && "[object Object]" === Object.prototype.toString.call(e)
	}

	function i(e) {
		var t;
		for (t in e) return !1;
		return !0
	}

	function r(e) {
		return void 0 === e
	}

	function a(e) {
		return "number" == typeof e || "[object Number]" === Object.prototype.toString.call(e)
	}

	function o(e) {
		return e instanceof Date || "[object Date]" === Object.prototype.toString.call(e)
	}

	function u(e, t) {
		var n, s = [];
		for (n = 0; n < e.length; ++n) s.push(t(e[n], n));
		return s
	}

	function l(e, t) {
		return Object.prototype.hasOwnProperty.call(e, t)
	}

	function d(e, t) {
		for (var n in t) l(t, n) && (e[n] = t[n]);
		return l(t, "toString") && (e.toString = t.toString), l(t, "valueOf") && (e.valueOf = t.valueOf), e
	}

	function h(e, t, n, s) {
		return pt(e, t, n, s, !0).utc()
	}

	function c() {
		return {
			empty: !1,
			unusedTokens: [],
			unusedInput: [],
			overflow: -2,
			charsLeftOver: 0,
			nullInput: !1,
			invalidMonth: null,
			invalidFormat: !1,
			userInvalidated: !1,
			iso: !1,
			parsedDateParts: [],
			meridiem: null,
			rfc2822: !1,
			weekdayMismatch: !1
		}
	}

	function f(e) {
		return null == e._pf && (e._pf = c()), e._pf
	}

	function m(e) {
		if (null == e._isValid) {
			var t = f(e),
				n = Ms.call(t.parsedDateParts, function(e) {
					return null != e
				}),
				s = !isNaN(e._d.getTime()) && t.overflow < 0 && !t.empty && !t.invalidMonth && !t.invalidWeekday && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && n);
			if (e._strict && (s = s && 0 === t.charsLeftOver && 0 === t.unusedTokens.length && void 0 === t.bigHour), null != Object.isFrozen && Object.isFrozen(e)) return s;
			e._isValid = s
		}
		return e._isValid
	}

	function _(e) {
		var t = h(NaN);
		return null != e ? d(f(t), e) : f(t).userInvalidated = !0, t
	}

	function y(e, t) {
		var n, s, i;
		if (r(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), r(t._i) || (e._i = t._i), r(t._f) || (e._f = t._f), r(t._l) || (e._l = t._l), r(t._strict) || (e._strict = t._strict), r(t._tzm) || (e._tzm = t._tzm), r(t._isUTC) || (e._isUTC = t._isUTC), r(t._offset) || (e._offset = t._offset), r(t._pf) || (e._pf = f(t)), r(t._locale) || (e._locale = t._locale), Ss.length > 0)
			for (n = 0; n < Ss.length; n++) s = Ss[n], i = t[s], r(i) || (e[s] = i);
		return e
	}

	function g(t) {
		y(this, t), this._d = new Date(null != t._d ? t._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), ks === !1 && (ks = !0, e.updateOffset(this), ks = !1)
	}

	function p(e) {
		return e instanceof g || null != e && null != e._isAMomentObject
	}

	function w(e) {
		return 0 > e ? Math.ceil(e) || 0 : Math.floor(e)
	}

	function v(e) {
		var t = +e,
			n = 0;
		return 0 !== t && isFinite(t) && (n = w(t)), n
	}

	function M(e, t, n) {
		var s, i = Math.min(e.length, t.length),
			r = Math.abs(e.length - t.length),
			a = 0;
		for (s = 0; i > s; s++)(n && e[s] !== t[s] || !n && v(e[s]) !== v(t[s])) && a++;
		return a + r
	}

	function S(t) {
		e.suppressDeprecationWarnings === !1 && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + t)
	}

	function k(t, n) {
		var s = !0;
		return d(function() {
			if (null != e.deprecationHandler && e.deprecationHandler(null, t), s) {
				for (var i, r = [], a = 0; a < arguments.length; a++) {
					if (i = "", "object" == typeof arguments[a]) {
						i += "\n[" + a + "] ";
						for (var o in arguments[0]) i += o + ": " + arguments[0][o] + ", ";
						i = i.slice(0, -2)
					} else i = arguments[a];
					r.push(i)
				}
				S(t + "\nArguments: " + Array.prototype.slice.call(r).join("") + "\n" + (new Error).stack), s = !1
			}
			return n.apply(this, arguments)
		}, n)
	}

	function D(t, n) {
		null != e.deprecationHandler && e.deprecationHandler(t, n), Ds[t] || (S(n), Ds[t] = !0)
	}

	function Y(e) {
		return e instanceof Function || "[object Function]" === Object.prototype.toString.call(e)
	}

	function O(e) {
		var t, n;
		for (n in e) t = e[n], Y(t) ? this[n] = t : this["_" + n] = t;
		this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
	}

	function x(e, t) {
		var n, i = d({}, e);
		for (n in t) l(t, n) && (s(e[n]) && s(t[n]) ? (i[n] = {}, d(i[n], e[n]), d(i[n], t[n])) : null != t[n] ? i[n] = t[n] : delete i[n]);
		for (n in e) l(e, n) && !l(t, n) && s(e[n]) && (i[n] = d({}, i[n]));
		return i
	}

	function T(e) {
		null != e && this.set(e)
	}

	function b(e, t, n) {
		var s = this._calendar[e] || this._calendar.sameElse;
		return Y(s) ? s.call(t, n) : s
	}

	function P(e) {
		var t = this._longDateFormat[e],
			n = this._longDateFormat[e.toUpperCase()];
		return t || !n ? t : (this._longDateFormat[e] = n.replace(/MMMM|MM|DD|dddd/g, function(e) {
			return e.slice(1)
		}), this._longDateFormat[e])
	}

	function W() {
		return this._invalidDate
	}

	function R(e) {
		return this._ordinal.replace("%d", e)
	}

	function C(e, t, n, s) {
		var i = this._relativeTime[n];
		return Y(i) ? i(e, t, n, s) : i.replace(/%d/i, e)
	}

	function F(e, t) {
		var n = this._relativeTime[e > 0 ? "future" : "past"];
		return Y(n) ? n(t) : n.replace(/%s/i, t)
	}

	function U(e, t) {
		var n = e.toLowerCase();
		Fs[n] = Fs[n + "s"] = Fs[t] = e
	}

	function H(e) {
		return "string" == typeof e ? Fs[e] || Fs[e.toLowerCase()] : void 0
	}

	function L(e) {
		var t, n, s = {};
		for (n in e) l(e, n) && (t = H(n), t && (s[t] = e[n]));
		return s
	}

	function G(e, t) {
		Us[e] = t
	}

	function V(e) {
		var t = [];
		for (var n in e) t.push({
			unit: n,
			priority: Us[n]
		});
		return t.sort(function(e, t) {
			return e.priority - t.priority
		}), t
	}

	function N(t, n) {
		return function(s) {
			return null != s ? (A(this, t, s), e.updateOffset(this, n), this) : j(this, t)
		}
	}

	function j(e, t) {
		return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN
	}

	function A(e, t, n) {
		e.isValid() && e._d["set" + (e._isUTC ? "UTC" : "") + t](n)
	}

	function E(e) {
		return e = H(e), Y(this[e]) ? this[e]() : this
	}

	function I(e, t) {
		if ("object" == typeof e) {
			e = L(e);
			for (var n = V(e), s = 0; s < n.length; s++) this[n[s].unit](e[n[s].unit])
		} else if (e = H(e), Y(this[e])) return this[e](t);
		return this
	}

	function Z(e, t, n) {
		var s = "" + Math.abs(e),
			i = t - s.length,
			r = e >= 0;
		return (r ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, i)).toString().substr(1) + s
	}

	function z(e, t, n, s) {
		var i = s;
		"string" == typeof s && (i = function() {
			return this[s]()
		}), e && (Vs[e] = i), t && (Vs[t[0]] = function() {
			return Z(i.apply(this, arguments), t[1], t[2])
		}), n && (Vs[n] = function() {
			return this.localeData().ordinal(i.apply(this, arguments), e)
		})
	}

	function $(e) {
		return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "")
	}

	function q(e) {
		var t, n, s = e.match(Hs);
		for (t = 0, n = s.length; n > t; t++) Vs[s[t]] ? s[t] = Vs[s[t]] : s[t] = $(s[t]);
		return function(t) {
			var i, r = "";
			for (i = 0; n > i; i++) r += Y(s[i]) ? s[i].call(t, e) : s[i];
			return r
		}
	}

	function J(e, t) {
		return e.isValid() ? (t = B(t, e.localeData()), Gs[t] = Gs[t] || q(t), Gs[t](e)) : e.localeData().invalidDate()
	}

	function B(e, t) {
		function n(e) {
			return t.longDateFormat(e) || e
		}
		var s = 5;
		for (Ls.lastIndex = 0; s >= 0 && Ls.test(e);) e = e.replace(Ls, n), Ls.lastIndex = 0, s -= 1;
		return e
	}

	function Q(e, t, n) {
		si[e] = Y(t) ? t : function(e, s) {
			return e && n ? n : t
		}
	}

	function X(e, t) {
		return l(si, e) ? si[e](t._strict, t._locale) : new RegExp(K(e))
	}

	function K(e) {
		return ee(e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(e, t, n, s, i) {
			return t || n || s || i
		}))
	}

	function ee(e) {
		return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
	}

	function te(e, t) {
		var n, s = t;
		for ("string" == typeof e && (e = [e]), a(t) && (s = function(e, n) {
				n[t] = v(e)
			}), n = 0; n < e.length; n++) ii[e[n]] = s
	}

	function ne(e, t) {
		te(e, function(e, n, s, i) {
			s._w = s._w || {}, t(e, s._w, s, i)
		})
	}

	function se(e, t, n) {
		null != t && l(ii, e) && ii[e](t, n._a, n, e)
	}

	function ie(e, t) {
		return new Date(Date.UTC(e, t + 1, 0)).getUTCDate()
	}

	function re(e, t) {
		return e ? n(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || _i).test(t) ? "format" : "standalone"][e.month()] : n(this._months) ? this._months : this._months.standalone
	}

	function ae(e, t) {
		return e ? n(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[_i.test(t) ? "format" : "standalone"][e.month()] : n(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone
	}

	function oe(e, t, n) {
		var s, i, r, a = e.toLocaleLowerCase();
		if (!this._monthsParse)
			for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], s = 0; 12 > s; ++s) r = h([2e3, s]), this._shortMonthsParse[s] = this.monthsShort(r, "").toLocaleLowerCase(), this._longMonthsParse[s] = this.months(r, "").toLocaleLowerCase();
		return n ? "MMM" === t ? (i = mi.call(this._shortMonthsParse, a), -1 !== i ? i : null) : (i = mi.call(this._longMonthsParse, a), -1 !== i ? i : null) : "MMM" === t ? (i = mi.call(this._shortMonthsParse, a), -1 !== i ? i : (i = mi.call(this._longMonthsParse, a), -1 !== i ? i : null)) : (i = mi.call(this._longMonthsParse, a), -1 !== i ? i : (i = mi.call(this._shortMonthsParse, a), -1 !== i ? i : null))
	}

	function ue(e, t, n) {
		var s, i, r;
		if (this._monthsParseExact) return oe.call(this, e, t, n);
		for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), s = 0; 12 > s; s++) {
			if (i = h([2e3, s]), n && !this._longMonthsParse[s] && (this._longMonthsParse[s] = new RegExp("^" + this.months(i, "").replace(".", "") + "$", "i"), this._shortMonthsParse[s] = new RegExp("^" + this.monthsShort(i, "").replace(".", "") + "$", "i")), n || this._monthsParse[s] || (r = "^" + this.months(i, "") + "|^" + this.monthsShort(i, ""), this._monthsParse[s] = new RegExp(r.replace(".", ""), "i")), n && "MMMM" === t && this._longMonthsParse[s].test(e)) return s;
			if (n && "MMM" === t && this._shortMonthsParse[s].test(e)) return s;
			if (!n && this._monthsParse[s].test(e)) return s
		}
	}

	function le(e, t) {
		var n;
		if (!e.isValid()) return e;
		if ("string" == typeof t)
			if (/^\d+$/.test(t)) t = v(t);
			else if (t = e.localeData().monthsParse(t), !a(t)) return e;
		return n = Math.min(e.date(), ie(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, n), e
	}

	function de(t) {
		return null != t ? (le(this, t), e.updateOffset(this, !0), this) : j(this, "Month")
	}

	function he() {
		return ie(this.year(), this.month())
	}

	function ce(e) {
		return this._monthsParseExact ? (l(this, "_monthsRegex") || me.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (l(this, "_monthsShortRegex") || (this._monthsShortRegex = pi), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex)
	}

	function fe(e) {
		return this._monthsParseExact ? (l(this, "_monthsRegex") || me.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (l(this, "_monthsRegex") || (this._monthsRegex = wi), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex)
	}

	function me() {
		function e(e, t) {
			return t.length - e.length
		}
		var t, n, s = [],
			i = [],
			r = [];
		for (t = 0; 12 > t; t++) n = h([2e3, t]), s.push(this.monthsShort(n, "")), i.push(this.months(n, "")), r.push(this.months(n, "")), r.push(this.monthsShort(n, ""));
		for (s.sort(e), i.sort(e), r.sort(e), t = 0; 12 > t; t++) s[t] = ee(s[t]), i[t] = ee(i[t]);
		for (t = 0; 24 > t; t++) r[t] = ee(r[t]);
		this._monthsRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + i.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + s.join("|") + ")", "i")
	}

	function _e(e) {
		return ye(e) ? 366 : 365
	}

	function ye(e) {
		return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0
	}

	function ge() {
		return ye(this.year())
	}

	function pe(e, t, n, s, i, r, a) {
		var o = new Date(e, t, n, s, i, r, a);
		return 100 > e && e >= 0 && isFinite(o.getFullYear()) && o.setFullYear(e), o
	}

	function we(e) {
		var t = new Date(Date.UTC.apply(null, arguments));
		return 100 > e && e >= 0 && isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e), t
	}

	function ve(e, t, n) {
		var s = 7 + t - n,
			i = (7 + we(e, 0, s).getUTCDay() - t) % 7;
		return -i + s - 1
	}

	function Me(e, t, n, s, i) {
		var r, a, o = (7 + n - s) % 7,
			u = ve(e, s, i),
			l = 1 + 7 * (t - 1) + o + u;
		return 0 >= l ? (r = e - 1, a = _e(r) + l) : l > _e(e) ? (r = e + 1, a = l - _e(e)) : (r = e, a = l), {
			year: r,
			dayOfYear: a
		}
	}

	function Se(e, t, n) {
		var s, i, r = ve(e.year(), t, n),
			a = Math.floor((e.dayOfYear() - r - 1) / 7) + 1;
		return 1 > a ? (i = e.year() - 1, s = a + ke(i, t, n)) : a > ke(e.year(), t, n) ? (s = a - ke(e.year(), t, n), i = e.year() + 1) : (i = e.year(), s = a), {
			week: s,
			year: i
		}
	}

	function ke(e, t, n) {
		var s = ve(e, t, n),
			i = ve(e + 1, t, n);
		return (_e(e) - s + i) / 7
	}

	function De(e) {
		return Se(e, this._week.dow, this._week.doy).week
	}

	function Ye() {
		return this._week.dow
	}

	function Oe() {
		return this._week.doy
	}

	function xe(e) {
		var t = this.localeData().week(this);
		return null == e ? t : this.add(7 * (e - t), "d")
	}

	function Te(e) {
		var t = Se(this, 1, 4).week;
		return null == e ? t : this.add(7 * (e - t), "d")
	}

	function be(e, t) {
		return "string" != typeof e ? e : isNaN(e) ? (e = t.weekdaysParse(e), "number" == typeof e ? e : null) : parseInt(e, 10)
	}

	function Pe(e, t) {
		return "string" == typeof e ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e
	}

	function We(e, t) {
		return e ? n(this._weekdays) ? this._weekdays[e.day()] : this._weekdays[this._weekdays.isFormat.test(t) ? "format" : "standalone"][e.day()] : n(this._weekdays) ? this._weekdays : this._weekdays.standalone
	}

	function Re(e) {
		return e ? this._weekdaysShort[e.day()] : this._weekdaysShort
	}

	function Ce(e) {
		return e ? this._weekdaysMin[e.day()] : this._weekdaysMin
	}

	function Fe(e, t, n) {
		var s, i, r, a = e.toLocaleLowerCase();
		if (!this._weekdaysParse)
			for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], s = 0; 7 > s; ++s) r = h([2e3, 1]).day(s), this._minWeekdaysParse[s] = this.weekdaysMin(r, "").toLocaleLowerCase(), this._shortWeekdaysParse[s] = this.weekdaysShort(r, "").toLocaleLowerCase(), this._weekdaysParse[s] = this.weekdays(r, "").toLocaleLowerCase();
		return n ? "dddd" === t ? (i = mi.call(this._weekdaysParse, a), -1 !== i ? i : null) : "ddd" === t ? (i = mi.call(this._shortWeekdaysParse, a), -1 !== i ? i : null) : (i = mi.call(this._minWeekdaysParse, a), -1 !== i ? i : null) : "dddd" === t ? (i = mi.call(this._weekdaysParse, a), -1 !== i ? i : (i = mi.call(this._shortWeekdaysParse, a), -1 !== i ? i : (i = mi.call(this._minWeekdaysParse, a), -1 !== i ? i : null))) : "ddd" === t ? (i = mi.call(this._shortWeekdaysParse, a), -1 !== i ? i : (i = mi.call(this._weekdaysParse, a), -1 !== i ? i : (i = mi.call(this._minWeekdaysParse, a), -1 !== i ? i : null))) : (i = mi.call(this._minWeekdaysParse, a), -1 !== i ? i : (i = mi.call(this._weekdaysParse, a), -1 !== i ? i : (i = mi.call(this._shortWeekdaysParse, a), -1 !== i ? i : null)))
	}

	function Ue(e, t, n) {
		var s, i, r;
		if (this._weekdaysParseExact) return Fe.call(this, e, t, n);
		for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), s = 0; 7 > s; s++) {
			if (i = h([2e3, 1]).day(s), n && !this._fullWeekdaysParse[s] && (this._fullWeekdaysParse[s] = new RegExp("^" + this.weekdays(i, "").replace(".", ".?") + "$", "i"), this._shortWeekdaysParse[s] = new RegExp("^" + this.weekdaysShort(i, "").replace(".", ".?") + "$", "i"), this._minWeekdaysParse[s] = new RegExp("^" + this.weekdaysMin(i, "").replace(".", ".?") + "$", "i")), this._weekdaysParse[s] || (r = "^" + this.weekdays(i, "") + "|^" + this.weekdaysShort(i, "") + "|^" + this.weekdaysMin(i, ""), this._weekdaysParse[s] = new RegExp(r.replace(".", ""), "i")), n && "dddd" === t && this._fullWeekdaysParse[s].test(e)) return s;
			if (n && "ddd" === t && this._shortWeekdaysParse[s].test(e)) return s;
			if (n && "dd" === t && this._minWeekdaysParse[s].test(e)) return s;
			if (!n && this._weekdaysParse[s].test(e)) return s
		}
	}

	function He(e) {
		if (!this.isValid()) return null != e ? this : NaN;
		var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
		return null != e ? (e = be(e, this.localeData()), this.add(e - t, "d")) : t
	}

	function Le(e) {
		if (!this.isValid()) return null != e ? this : NaN;
		var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
		return null == e ? t : this.add(e - t, "d")
	}

	function Ge(e) {
		if (!this.isValid()) return null != e ? this : NaN;
		if (null != e) {
			var t = Pe(e, this.localeData());
			return this.day(this.day() % 7 ? t : t - 7)
		}
		return this.day() || 7
	}

	function Ve(e) {
		return this._weekdaysParseExact ? (l(this, "_weekdaysRegex") || Ae.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (l(this, "_weekdaysRegex") || (this._weekdaysRegex = Yi), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex)
	}

	function Ne(e) {
		return this._weekdaysParseExact ? (l(this, "_weekdaysRegex") || Ae.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (l(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Oi), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
	}

	function je(e) {
		return this._weekdaysParseExact ? (l(this, "_weekdaysRegex") || Ae.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (l(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = xi), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
	}

	function Ae() {
		function e(e, t) {
			return t.length - e.length
		}
		var t, n, s, i, r, a = [],
			o = [],
			u = [],
			l = [];
		for (t = 0; 7 > t; t++) n = h([2e3, 1]).day(t), s = this.weekdaysMin(n, ""), i = this.weekdaysShort(n, ""), r = this.weekdays(n, ""), a.push(s), o.push(i), u.push(r), l.push(s), l.push(i), l.push(r);
		for (a.sort(e), o.sort(e), u.sort(e), l.sort(e), t = 0; 7 > t; t++) o[t] = ee(o[t]), u[t] = ee(u[t]), l[t] = ee(l[t]);
		this._weekdaysRegex = new RegExp("^(" + l.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + u.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + o.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + a.join("|") + ")", "i")
	}

	function Ee() {
		return this.hours() % 12 || 12
	}

	function Ie() {
		return this.hours() || 24
	}

	function Ze(e, t) {
		z(e, 0, 0, function() {
			return this.localeData().meridiem(this.hours(), this.minutes(), t)
		})
	}

	function ze(e, t) {
		return t._meridiemParse
	}

	function $e(e) {
		return "p" === (e + "").toLowerCase().charAt(0)
	}

	function qe(e, t, n) {
		return e > 11 ? n ? "pm" : "PM" : n ? "am" : "AM"
	}

	function Je(e) {
		return e ? e.toLowerCase().replace("_", "-") : e
	}

	function Be(e) {
		for (var t, n, s, i, r = 0; r < e.length;) {
			for (i = Je(e[r]).split("-"), t = i.length, n = Je(e[r + 1]), n = n ? n.split("-") : null; t > 0;) {
				if (s = Qe(i.slice(0, t).join("-"))) return s;
				if (n && n.length >= t && M(i, n, !0) >= t - 1) break;
				t--
			}
			r++
		}
		return null
	}

	function Qe(e) {
		var t = null;
		if (!Ri[e] && "undefined" != typeof module && module && module.exports) try {
			t = Ti._abbr, require("./locale/" + e), Xe(t)
		} catch (e) {}
		return Ri[e]
	}

	function Xe(e, t) {
		var n;
		return e && (n = r(t) ? tt(e) : Ke(e, t), n && (Ti = n)), Ti._abbr
	}

	function Ke(e, t) {
		if (null !== t) {
			var n = Wi;
			if (t.abbr = e, null != Ri[e]) D("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), n = Ri[e]._config;
			else if (null != t.parentLocale) {
				if (null == Ri[t.parentLocale]) return Ci[t.parentLocale] || (Ci[t.parentLocale] = []), Ci[t.parentLocale].push({
					name: e,
					config: t
				}), null;
				n = Ri[t.parentLocale]._config
			}
			return Ri[e] = new T(x(n, t)), Ci[e] && Ci[e].forEach(function(e) {
				Ke(e.name, e.config)
			}), Xe(e), Ri[e]
		}
		return delete Ri[e], null
	}

	function et(e, t) {
		if (null != t) {
			var n, s = Wi;
			null != Ri[e] && (s = Ri[e]._config), t = x(s, t), n = new T(t), n.parentLocale = Ri[e], Ri[e] = n, Xe(e)
		} else null != Ri[e] && (null != Ri[e].parentLocale ? Ri[e] = Ri[e].parentLocale : null != Ri[e] && delete Ri[e]);
		return Ri[e]
	}

	function tt(e) {
		var t;
		if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e) return Ti;
		if (!n(e)) {
			if (t = Qe(e)) return t;
			e = [e]
		}
		return Be(e)
	}

	function nt() {
		return xs(Ri)
	}

	function st(e) {
		var t, n = e._a;
		return n && -2 === f(e).overflow && (t = n[ai] < 0 || n[ai] > 11 ? ai : n[oi] < 1 || n[oi] > ie(n[ri], n[ai]) ? oi : n[ui] < 0 || n[ui] > 24 || 24 === n[ui] && (0 !== n[li] || 0 !== n[di] || 0 !== n[hi]) ? ui : n[li] < 0 || n[li] > 59 ? li : n[di] < 0 || n[di] > 59 ? di : n[hi] < 0 || n[hi] > 999 ? hi : -1, f(e)._overflowDayOfYear && (ri > t || t > oi) && (t = oi), f(e)._overflowWeeks && -1 === t && (t = ci), f(e)._overflowWeekday && -1 === t && (t = fi), f(e).overflow = t), e
	}

	function it(e) {
		var t, n, s, i, r, a, o = e._i,
			u = Fi.exec(o) || Ui.exec(o);
		if (u) {
			for (f(e).iso = !0, t = 0, n = Li.length; n > t; t++)
				if (Li[t][1].exec(u[1])) {
					i = Li[t][0], s = Li[t][2] !== !1;
					break
				} if (null == i) return void(e._isValid = !1);
			if (u[3]) {
				for (t = 0, n = Gi.length; n > t; t++)
					if (Gi[t][1].exec(u[3])) {
						r = (u[2] || " ") + Gi[t][0];
						break
					} if (null == r) return void(e._isValid = !1)
			}
			if (!s && null != r) return void(e._isValid = !1);
			if (u[4]) {
				if (!Hi.exec(u[4])) return void(e._isValid = !1);
				a = "Z"
			}
			e._f = i + (r || "") + (a || ""), ht(e)
		} else e._isValid = !1
	}

	function rt(e) {
		var t, n, s, i, r, a, o, u, l = {
				" GMT": " +0000",
				" EDT": " -0400",
				" EST": " -0500",
				" CDT": " -0500",
				" CST": " -0600",
				" MDT": " -0600",
				" MST": " -0700",
				" PDT": " -0700",
				" PST": " -0800"
			},
			d = "YXWVUTSRQPONZABCDEFGHIKLM";
		if (t = e._i.replace(/\([^\)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s|\s$/g, ""), n = Ni.exec(t)) {
			if (s = n[1] ? "ddd" + (5 === n[1].length ? ", " : " ") : "", i = "D MMM " + (n[2].length > 10 ? "YYYY " : "YY "), r = "HH:mm" + (n[4] ? ":ss" : ""), n[1]) {
				var h = new Date(n[2]),
					c = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][h.getDay()];
				if (n[1].substr(0, 3) !== c) return f(e).weekdayMismatch = !0, void(e._isValid = !1)
			}
			switch (n[5].length) {
				case 2:
					0 === u ? o = " +0000" : (u = d.indexOf(n[5][1].toUpperCase()) - 12, o = (0 > u ? " -" : " +") + ("" + u).replace(/^-?/, "0").match(/..$/)[0] + "00");
					break;
				case 4:
					o = l[n[5]];
					break;
				default:
					o = l[" GMT"]
			}
			n[5] = o, e._i = n.splice(1).join(""), a = " ZZ", e._f = s + i + r + a, ht(e), f(e).rfc2822 = !0
		} else e._isValid = !1
	}

	function at(t) {
		var n = Vi.exec(t._i);
		return null !== n ? void(t._d = new Date(+n[1])) : (it(t), void(t._isValid === !1 && (delete t._isValid, rt(t), t._isValid === !1 && (delete t._isValid, e.createFromInputFallback(t)))))
	}

	function ot(e, t, n) {
		return null != e ? e : null != t ? t : n
	}

	function ut(t) {
		var n = new Date(e.now());
		return t._useUTC ? [n.getUTCFullYear(), n.getUTCMonth(), n.getUTCDate()] : [n.getFullYear(), n.getMonth(), n.getDate()]
	}

	function lt(e) {
		var t, n, s, i, r = [];
		if (!e._d) {
			for (s = ut(e), e._w && null == e._a[oi] && null == e._a[ai] && dt(e), null != e._dayOfYear && (i = ot(e._a[ri], s[ri]), (e._dayOfYear > _e(i) || 0 === e._dayOfYear) && (f(e)._overflowDayOfYear = !0), n = we(i, 0, e._dayOfYear), e._a[ai] = n.getUTCMonth(), e._a[oi] = n.getUTCDate()), t = 0; 3 > t && null == e._a[t]; ++t) e._a[t] = r[t] = s[t];
			for (; 7 > t; t++) e._a[t] = r[t] = null == e._a[t] ? 2 === t ? 1 : 0 : e._a[t];
			24 === e._a[ui] && 0 === e._a[li] && 0 === e._a[di] && 0 === e._a[hi] && (e._nextDay = !0, e._a[ui] = 0), e._d = (e._useUTC ? we : pe).apply(null, r), null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[ui] = 24)
		}
	}

	function dt(e) {
		var t, n, s, i, r, a, o, u;
		if (t = e._w, null != t.GG || null != t.W || null != t.E) r = 1, a = 4, n = ot(t.GG, e._a[ri], Se(wt(), 1, 4).year), s = ot(t.W, 1), i = ot(t.E, 1), (1 > i || i > 7) && (u = !0);
		else {
			r = e._locale._week.dow, a = e._locale._week.doy;
			var l = Se(wt(), r, a);
			n = ot(t.gg, e._a[ri], l.year), s = ot(t.w, l.week), null != t.d ? (i = t.d, (0 > i || i > 6) && (u = !0)) : null != t.e ? (i = t.e + r, (t.e < 0 || t.e > 6) && (u = !0)) : i = r
		}
		1 > s || s > ke(n, r, a) ? f(e)._overflowWeeks = !0 : null != u ? f(e)._overflowWeekday = !0 : (o = Me(n, s, i, r, a), e._a[ri] = o.year, e._dayOfYear = o.dayOfYear)
	}

	function ht(t) {
		if (t._f === e.ISO_8601) return void it(t);
		if (t._f === e.RFC_2822) return void rt(t);
		t._a = [], f(t).empty = !0;
		var n, s, i, r, a, o = "" + t._i,
			u = o.length,
			l = 0;
		for (i = B(t._f, t._locale).match(Hs) || [], n = 0; n < i.length; n++) r = i[n], s = (o.match(X(r, t)) || [])[0], s && (a = o.substr(0, o.indexOf(s)), a.length > 0 && f(t).unusedInput.push(a), o = o.slice(o.indexOf(s) + s.length), l += s.length), Vs[r] ? (s ? f(t).empty = !1 : f(t).unusedTokens.push(r), se(r, s, t)) : t._strict && !s && f(t).unusedTokens.push(r);
		f(t).charsLeftOver = u - l, o.length > 0 && f(t).unusedInput.push(o), t._a[ui] <= 12 && f(t).bigHour === !0 && t._a[ui] > 0 && (f(t).bigHour = void 0), f(t).parsedDateParts = t._a.slice(0), f(t).meridiem = t._meridiem, t._a[ui] = ct(t._locale, t._a[ui], t._meridiem), lt(t), st(t)
	}

	function ct(e, t, n) {
		var s;
		return null == n ? t : null != e.meridiemHour ? e.meridiemHour(t, n) : null != e.isPM ? (s = e.isPM(n), s && 12 > t && (t += 12), s || 12 !== t || (t = 0), t) : t
	}

	function ft(e) {
		var t, n, s, i, r;
		if (0 === e._f.length) return f(e).invalidFormat = !0, void(e._d = new Date(NaN));
		for (i = 0; i < e._f.length; i++) r = 0, t = y({}, e), null != e._useUTC && (t._useUTC = e._useUTC), t._f = e._f[i], ht(t), m(t) && (r += f(t).charsLeftOver, r += 10 * f(t).unusedTokens.length, f(t).score = r, (null == s || s > r) && (s = r, n = t));
		d(e, n || t)
	}

	function mt(e) {
		if (!e._d) {
			var t = L(e._i);
			e._a = u([t.year, t.month, t.day || t.date, t.hour, t.minute, t.second, t.millisecond], function(e) {
				return e && parseInt(e, 10)
			}), lt(e)
		}
	}

	function _t(e) {
		var t = new g(st(yt(e)));
		return t._nextDay && (t.add(1, "d"), t._nextDay = void 0), t
	}

	function yt(e) {
		var t = e._i,
			s = e._f;
		return e._locale = e._locale || tt(e._l), null === t || void 0 === s && "" === t ? _({
			nullInput: !0
		}) : ("string" == typeof t && (e._i = t = e._locale.preparse(t)), p(t) ? new g(st(t)) : (o(t) ? e._d = t : n(s) ? ft(e) : s ? ht(e) : gt(e), m(e) || (e._d = null), e))
	}

	function gt(t) {
		var i = t._i;
		r(i) ? t._d = new Date(e.now()) : o(i) ? t._d = new Date(i.valueOf()) : "string" == typeof i ? at(t) : n(i) ? (t._a = u(i.slice(0), function(e) {
			return parseInt(e, 10)
		}), lt(t)) : s(i) ? mt(t) : a(i) ? t._d = new Date(i) : e.createFromInputFallback(t)
	}

	function pt(e, t, r, a, o) {
		var u = {};
		return r !== !0 && r !== !1 || (a = r, r = void 0), (s(e) && i(e) || n(e) && 0 === e.length) && (e = void 0), u._isAMomentObject = !0, u._useUTC = u._isUTC = o, u._l = r, u._i = e, u._f = t, u._strict = a, _t(u)
	}

	function wt(e, t, n, s) {
		return pt(e, t, n, s, !1)
	}

	function vt(e, t) {
		var s, i;
		if (1 === t.length && n(t[0]) && (t = t[0]), !t.length) return wt();
		for (s = t[0], i = 1; i < t.length; ++i) t[i].isValid() && !t[i][e](s) || (s = t[i]);
		return s
	}

	function Mt() {
		var e = [].slice.call(arguments, 0);
		return vt("isBefore", e)
	}

	function St() {
		var e = [].slice.call(arguments, 0);
		return vt("isAfter", e)
	}

	function kt(e) {
		for (var t in e)
			if (-1 === Ii.indexOf(t) || null != e[t] && isNaN(e[t])) return !1;
		for (var n = !1, s = 0; s < Ii.length; ++s)
			if (e[Ii[s]]) {
				if (n) return !1;
				parseFloat(e[Ii[s]]) !== v(e[Ii[s]]) && (n = !0)
			} return !0
	}

	function Dt() {
		return this._isValid
	}

	function Yt() {
		return It(NaN)
	}

	function Ot(e) {
		var t = L(e),
			n = t.year || 0,
			s = t.quarter || 0,
			i = t.month || 0,
			r = t.week || 0,
			a = t.day || 0,
			o = t.hour || 0,
			u = t.minute || 0,
			l = t.second || 0,
			d = t.millisecond || 0;
		this._isValid = kt(t), this._milliseconds = +d + 1e3 * l + 6e4 * u + 1e3 * o * 60 * 60, this._days = +a + 7 * r, this._months = +i + 3 * s + 12 * n, this._data = {}, this._locale = tt(), this._bubble()
	}

	function xt(e) {
		return e instanceof Ot
	}

	function Tt(e) {
		return 0 > e ? -1 * Math.round(-1 * e) : Math.round(e)
	}

	function bt(e, t) {
		z(e, 0, 0, function() {
			var e = this.utcOffset(),
				n = "+";
			return 0 > e && (e = -e, n = "-"), n + Z(~~(e / 60), 2) + t + Z(~~e % 60, 2)
		})
	}

	function Pt(e, t) {
		var n = (t || "").match(e);
		if (null === n) return null;
		var s = n[n.length - 1] || [],
			i = (s + "").match(Zi) || ["-", 0, 0],
			r = +(60 * i[1]) + v(i[2]);
		return 0 === r ? 0 : "+" === i[0] ? r : -r
	}

	function Wt(t, n) {
		var s, i;
		return n._isUTC ? (s = n.clone(), i = (p(t) || o(t) ? t.valueOf() : wt(t).valueOf()) - s.valueOf(), s._d.setTime(s._d.valueOf() + i), e.updateOffset(s, !1), s) : wt(t).local()
	}

	function Rt(e) {
		return 15 * -Math.round(e._d.getTimezoneOffset() / 15)
	}

	function Ct(t, n, s) {
		var i, r = this._offset || 0;
		if (!this.isValid()) return null != t ? this : NaN;
		if (null != t) {
			if ("string" == typeof t) {
				if (t = Pt(ei, t), null === t) return this
			} else Math.abs(t) < 16 && !s && (t = 60 * t);
			return !this._isUTC && n && (i = Rt(this)), this._offset = t, this._isUTC = !0, null != i && this.add(i, "m"), r !== t && (!n || this._changeInProgress ? Jt(this, It(t - r, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, e.updateOffset(this, !0), this._changeInProgress = null)), this
		}
		return this._isUTC ? r : Rt(this)
	}

	function Ft(e, t) {
		return null != e ? ("string" != typeof e && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset()
	}

	function Ut(e) {
		return this.utcOffset(0, e)
	}

	function Ht(e) {
		return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(Rt(this), "m")), this
	}

	function Lt() {
		if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);
		else if ("string" == typeof this._i) {
			var e = Pt(Ks, this._i);
			null != e ? this.utcOffset(e) : this.utcOffset(0, !0)
		}
		return this
	}

	function Gt(e) {
		return !!this.isValid() && (e = e ? wt(e).utcOffset() : 0, (this.utcOffset() - e) % 60 === 0)
	}

	function Vt() {
		return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
	}

	function Nt() {
		if (!r(this._isDSTShifted)) return this._isDSTShifted;
		var e = {};
		if (y(e, this), e = yt(e), e._a) {
			var t = e._isUTC ? h(e._a) : wt(e._a);
			this._isDSTShifted = this.isValid() && M(e._a, t.toArray()) > 0
		} else this._isDSTShifted = !1;
		return this._isDSTShifted
	}

	function jt() {
		return !!this.isValid() && !this._isUTC
	}

	function At() {
		return !!this.isValid() && this._isUTC
	}

	function Et() {
		return !!this.isValid() && this._isUTC && 0 === this._offset
	}

	function It(e, t) {
		var n, s, i, r = e,
			o = null;
		return xt(e) ? r = {
			ms: e._milliseconds,
			d: e._days,
			M: e._months
		} : a(e) ? (r = {}, t ? r[t] = e : r.milliseconds = e) : (o = zi.exec(e)) ? (n = "-" === o[1] ? -1 : 1, r = {
			y: 0,
			d: v(o[oi]) * n,
			h: v(o[ui]) * n,
			m: v(o[li]) * n,
			s: v(o[di]) * n,
			ms: v(Tt(1e3 * o[hi])) * n
		}) : (o = $i.exec(e)) ? (n = "-" === o[1] ? -1 : 1, r = {
			y: Zt(o[2], n),
			M: Zt(o[3], n),
			w: Zt(o[4], n),
			d: Zt(o[5], n),
			h: Zt(o[6], n),
			m: Zt(o[7], n),
			s: Zt(o[8], n)
		}) : null == r ? r = {} : "object" == typeof r && ("from" in r || "to" in r) && (i = $t(wt(r.from), wt(r.to)), r = {}, r.ms = i.milliseconds, r.M = i.months), s = new Ot(r), xt(e) && l(e, "_locale") && (s._locale = e._locale), s
	}

	function Zt(e, t) {
		var n = e && parseFloat(e.replace(",", "."));
		return (isNaN(n) ? 0 : n) * t
	}

	function zt(e, t) {
		var n = {
			milliseconds: 0,
			months: 0
		};
		return n.months = t.month() - e.month() + 12 * (t.year() - e.year()), e.clone().add(n.months, "M").isAfter(t) && --n.months, n.milliseconds = +t - +e.clone().add(n.months, "M"), n
	}

	function $t(e, t) {
		var n;
		return e.isValid() && t.isValid() ? (t = Wt(t, e), e.isBefore(t) ? n = zt(e, t) : (n = zt(t, e), n.milliseconds = -n.milliseconds, n.months = -n.months), n) : {
			milliseconds: 0,
			months: 0
		}
	}

	function qt(e, t) {
		return function(n, s) {
			var i, r;
			return null === s || isNaN(+s) || (D(t, "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), r = n, n = s, s = r), n = "string" == typeof n ? +n : n, i = It(n, s), Jt(this, i, e), this
		}
	}

	function Jt(t, n, s, i) {
		var r = n._milliseconds,
			a = Tt(n._days),
			o = Tt(n._months);
		t.isValid() && (i = null == i || i, r && t._d.setTime(t._d.valueOf() + r * s), a && A(t, "Date", j(t, "Date") + a * s), o && le(t, j(t, "Month") + o * s), i && e.updateOffset(t, a || o))
	}

	function Bt(e, t) {
		var n = e.diff(t, "days", !0);
		return -6 > n ? "sameElse" : -1 > n ? "lastWeek" : 0 > n ? "lastDay" : 1 > n ? "sameDay" : 2 > n ? "nextDay" : 7 > n ? "nextWeek" : "sameElse"
	}

	function Qt(t, n) {
		var s = t || wt(),
			i = Wt(s, this).startOf("day"),
			r = e.calendarFormat(this, i) || "sameElse",
			a = n && (Y(n[r]) ? n[r].call(this, s) : n[r]);
		return this.format(a || this.localeData().calendar(r, this, wt(s)))
	}

	function Xt() {
		return new g(this)
	}

	function Kt(e, t) {
		var n = p(e) ? e : wt(e);
		return !(!this.isValid() || !n.isValid()) && (t = H(r(t) ? "millisecond" : t), "millisecond" === t ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(t).valueOf())
	}

	function en(e, t) {
		var n = p(e) ? e : wt(e);
		return !(!this.isValid() || !n.isValid()) && (t = H(r(t) ? "millisecond" : t), "millisecond" === t ? this.valueOf() < n.valueOf() : this.clone().endOf(t).valueOf() < n.valueOf())
	}

	function tn(e, t, n, s) {
		return s = s || "()", ("(" === s[0] ? this.isAfter(e, n) : !this.isBefore(e, n)) && (")" === s[1] ? this.isBefore(t, n) : !this.isAfter(t, n))
	}

	function nn(e, t) {
		var n, s = p(e) ? e : wt(e);
		return !(!this.isValid() || !s.isValid()) && (t = H(t || "millisecond"), "millisecond" === t ? this.valueOf() === s.valueOf() : (n = s.valueOf(), this.clone().startOf(t).valueOf() <= n && n <= this.clone().endOf(t).valueOf()))
	}

	function sn(e, t) {
		return this.isSame(e, t) || this.isAfter(e, t)
	}

	function rn(e, t) {
		return this.isSame(e, t) || this.isBefore(e, t)
	}

	function an(e, t, n) {
		var s, i, r, a;
		return this.isValid() ? (s = Wt(e, this), s.isValid() ? (i = 6e4 * (s.utcOffset() - this.utcOffset()), t = H(t), "year" === t || "month" === t || "quarter" === t ? (a = on(this, s), "quarter" === t ? a /= 3 : "year" === t && (a /= 12)) : (r = this - s, a = "second" === t ? r / 1e3 : "minute" === t ? r / 6e4 : "hour" === t ? r / 36e5 : "day" === t ? (r - i) / 864e5 : "week" === t ? (r - i) / 6048e5 : r), n ? a : w(a)) : NaN) : NaN
	}

	function on(e, t) {
		var n, s, i = 12 * (t.year() - e.year()) + (t.month() - e.month()),
			r = e.clone().add(i, "months");
		return 0 > t - r ? (n = e.clone().add(i - 1, "months"), s = (t - r) / (r - n)) : (n = e.clone().add(i + 1, "months"), s = (t - r) / (n - r)), -(i + s) || 0
	}

	function un() {
		return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
	}

	function ln() {
		if (!this.isValid()) return null;
		var e = this.clone().utc();
		return e.year() < 0 || e.year() > 9999 ? J(e, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : Y(Date.prototype.toISOString) ? this.toDate().toISOString() : J(e, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
	}

	function dn() {
		if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
		var e = "moment",
			t = "";
		this.isLocal() || (e = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", t = "Z");
		var n = "[" + e + '("]',
			s = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY",
			i = "-MM-DD[T]HH:mm:ss.SSS",
			r = t + '[")]';
		return this.format(n + s + i + r)
	}

	function hn(t) {
		t || (t = this.isUtc() ? e.defaultFormatUtc : e.defaultFormat);
		var n = J(this, t);
		return this.localeData().postformat(n)
	}

	function cn(e, t) {
		return this.isValid() && (p(e) && e.isValid() || wt(e).isValid()) ? It({
			to: this,
			from: e
		}).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
	}

	function fn(e) {
		return this.from(wt(), e)
	}

	function mn(e, t) {
		return this.isValid() && (p(e) && e.isValid() || wt(e).isValid()) ? It({
			from: this,
			to: e
		}).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
	}

	function _n(e) {
		return this.to(wt(), e)
	}

	function yn(e) {
		var t;
		return void 0 === e ? this._locale._abbr : (t = tt(e), null != t && (this._locale = t), this)
	}

	function gn() {
		return this._locale
	}

	function pn(e) {
		switch (e = H(e)) {
			case "year":
				this.month(0);
			case "quarter":
			case "month":
				this.date(1);
			case "week":
			case "isoWeek":
			case "day":
			case "date":
				this.hours(0);
			case "hour":
				this.minutes(0);
			case "minute":
				this.seconds(0);
			case "second":
				this.milliseconds(0)
		}
		return "week" === e && this.weekday(0), "isoWeek" === e && this.isoWeekday(1), "quarter" === e && this.month(3 * Math.floor(this.month() / 3)), this
	}

	function wn(e) {
		return e = H(e), void 0 === e || "millisecond" === e ? this : ("date" === e && (e = "day"), this.startOf(e).add(1, "isoWeek" === e ? "week" : e).subtract(1, "ms"))
	}

	function vn() {
		return this._d.valueOf() - 6e4 * (this._offset || 0)
	}

	function Mn() {
		return Math.floor(this.valueOf() / 1e3)
	}

	function Sn() {
		return new Date(this.valueOf())
	}

	function kn() {
		var e = this;
		return [e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond()]
	}

	function Dn() {
		var e = this;
		return {
			years: e.year(),
			months: e.month(),
			date: e.date(),
			hours: e.hours(),
			minutes: e.minutes(),
			seconds: e.seconds(),
			milliseconds: e.milliseconds()
		}
	}

	function Yn() {
		return this.isValid() ? this.toISOString() : null
	}

	function On() {
		return m(this)
	}

	function xn() {
		return d({}, f(this))
	}

	function Tn() {
		return f(this).overflow
	}

	function bn() {
		return {
			input: this._i,
			format: this._f,
			locale: this._locale,
			isUTC: this._isUTC,
			strict: this._strict
		}
	}

	function Pn(e, t) {
		z(0, [e, e.length], 0, t)
	}

	function Wn(e) {
		return Un.call(this, e, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
	}

	function Rn(e) {
		return Un.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4)
	}

	function Cn() {
		return ke(this.year(), 1, 4)
	}

	function Fn() {
		var e = this.localeData()._week;
		return ke(this.year(), e.dow, e.doy)
	}

	function Un(e, t, n, s, i) {
		var r;
		return null == e ? Se(this, s, i).year : (r = ke(e, s, i), t > r && (t = r), Hn.call(this, e, t, n, s, i))
	}

	function Hn(e, t, n, s, i) {
		var r = Me(e, t, n, s, i),
			a = we(r.year, 0, r.dayOfYear);
		return this.year(a.getUTCFullYear()), this.month(a.getUTCMonth()), this.date(a.getUTCDate()), this
	}

	function Ln(e) {
		return null == e ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + this.month() % 3)
	}

	function Gn(e) {
		var t = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
		return null == e ? t : this.add(e - t, "d")
	}

	function Vn(e, t) {
		t[hi] = v(1e3 * ("0." + e))
	}

	function Nn() {
		return this._isUTC ? "UTC" : ""
	}

	function jn() {
		return this._isUTC ? "Coordinated Universal Time" : ""
	}

	function An(e) {
		return wt(1e3 * e)
	}

	function En() {
		return wt.apply(null, arguments).parseZone()
	}

	function In(e) {
		return e
	}

	function Zn(e, t, n, s) {
		var i = tt(),
			r = h().set(s, t);
		return i[n](r, e)
	}

	function zn(e, t, n) {
		if (a(e) && (t = e, e = void 0), e = e || "", null != t) return Zn(e, t, n, "month");
		var s, i = [];
		for (s = 0; 12 > s; s++) i[s] = Zn(e, s, n, "month");
		return i
	}

	function $n(e, t, n, s) {
		"boolean" == typeof e ? (a(t) && (n = t, t = void 0), t = t || "") : (t = e, n = t, e = !1, a(t) && (n = t, t = void 0), t = t || "");
		var i = tt(),
			r = e ? i._week.dow : 0;
		if (null != n) return Zn(t, (n + r) % 7, s, "day");
		var o, u = [];
		for (o = 0; 7 > o; o++) u[o] = Zn(t, (o + r) % 7, s, "day");
		return u
	}

	function qn(e, t) {
		return zn(e, t, "months")
	}

	function Jn(e, t) {
		return zn(e, t, "monthsShort")
	}

	function Bn(e, t, n) {
		return $n(e, t, n, "weekdays")
	}

	function Qn(e, t, n) {
		return $n(e, t, n, "weekdaysShort")
	}

	function Xn(e, t, n) {
		return $n(e, t, n, "weekdaysMin")
	}

	function Kn() {
		var e = this._data;
		return this._milliseconds = ir(this._milliseconds), this._days = ir(this._days), this._months = ir(this._months), e.milliseconds = ir(e.milliseconds), e.seconds = ir(e.seconds), e.minutes = ir(e.minutes), e.hours = ir(e.hours), e.months = ir(e.months), e.years = ir(e.years), this
	}

	function es(e, t, n, s) {
		var i = It(t, n);
		return e._milliseconds += s * i._milliseconds, e._days += s * i._days, e._months += s * i._months, e._bubble()
	}

	function ts(e, t) {
		return es(this, e, t, 1)
	}

	function ns(e, t) {
		return es(this, e, t, -1)
	}

	function ss(e) {
		return 0 > e ? Math.floor(e) : Math.ceil(e)
	}

	function is() {
		var e, t, n, s, i, r = this._milliseconds,
			a = this._days,
			o = this._months,
			u = this._data;
		return r >= 0 && a >= 0 && o >= 0 || 0 >= r && 0 >= a && 0 >= o || (r += 864e5 * ss(as(o) + a), a = 0, o = 0), u.milliseconds = r % 1e3, e = w(r / 1e3), u.seconds = e % 60, t = w(e / 60), u.minutes = t % 60, n = w(t / 60), u.hours = n % 24, a += w(n / 24), i = w(rs(a)), o += i, a -= ss(as(i)), s = w(o / 12), o %= 12, u.days = a, u.months = o, u.years = s, this
	}

	function rs(e) {
		return 4800 * e / 146097
	}

	function as(e) {
		return 146097 * e / 4800
	}

	function os(e) {
		if (!this.isValid()) return NaN;
		var t, n, s = this._milliseconds;
		if (e = H(e), "month" === e || "year" === e) return t = this._days + s / 864e5, n = this._months + rs(t), "month" === e ? n : n / 12;
		switch (t = this._days + Math.round(as(this._months)), e) {
			case "week":
				return t / 7 + s / 6048e5;
			case "day":
				return t + s / 864e5;
			case "hour":
				return 24 * t + s / 36e5;
			case "minute":
				return 1440 * t + s / 6e4;
			case "second":
				return 86400 * t + s / 1e3;
			case "millisecond":
				return Math.floor(864e5 * t) + s;
			default:
				throw new Error("Unknown unit " + e)
		}
	}

	function us() {
		return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * v(this._months / 12) : NaN
	}

	function ls(e) {
		return function() {
			return this.as(e)
		}
	}

	function ds(e) {
		return e = H(e), this.isValid() ? this[e + "s"]() : NaN
	}

	function hs(e) {
		return function() {
			return this.isValid() ? this._data[e] : NaN
		}
	}

	function cs() {
		return w(this.days() / 7)
	}

	function fs(e, t, n, s, i) {
		return i.relativeTime(t || 1, !!n, e, s)
	}

	function ms(e, t, n) {
		var s = It(e).abs(),
			i = vr(s.as("s")),
			r = vr(s.as("m")),
			a = vr(s.as("h")),
			o = vr(s.as("d")),
			u = vr(s.as("M")),
			l = vr(s.as("y")),
			d = i <= Mr.ss && ["s", i] || i < Mr.s && ["ss", i] || 1 >= r && ["m"] || r < Mr.m && ["mm", r] || 1 >= a && ["h"] || a < Mr.h && ["hh", a] || 1 >= o && ["d"] || o < Mr.d && ["dd", o] || 1 >= u && ["M"] || u < Mr.M && ["MM", u] || 1 >= l && ["y"] || ["yy", l];
		return d[2] = t, d[3] = +e > 0, d[4] = n, fs.apply(null, d)
	}

	function _s(e) {
		return void 0 === e ? vr : "function" == typeof e && (vr = e, !0)
	}

	function ys(e, t) {
		return void 0 !== Mr[e] && (void 0 === t ? Mr[e] : (Mr[e] = t, "s" === e && (Mr.ss = t - 1), !0))
	}

	function gs(e) {
		if (!this.isValid()) return this.localeData().invalidDate();
		var t = this.localeData(),
			n = ms(this, !e, t);
		return e && (n = t.pastFuture(+this, n)), t.postformat(n)
	}

	function ps() {
		if (!this.isValid()) return this.localeData().invalidDate();
		var e, t, n, s = Sr(this._milliseconds) / 1e3,
			i = Sr(this._days),
			r = Sr(this._months);
		e = w(s / 60), t = w(e / 60), s %= 60, e %= 60, n = w(r / 12), r %= 12;
		var a = n,
			o = r,
			u = i,
			l = t,
			d = e,
			h = s,
			c = this.asSeconds();
		return c ? (0 > c ? "-" : "") + "P" + (a ? a + "Y" : "") + (o ? o + "M" : "") + (u ? u + "D" : "") + (l || d || h ? "T" : "") + (l ? l + "H" : "") + (d ? d + "M" : "") + (h ? h + "S" : "") : "P0D"
	}
	var ws, vs;
	vs = Array.prototype.some ? Array.prototype.some : function(e) {
		for (var t = Object(this), n = t.length >>> 0, s = 0; n > s; s++)
			if (s in t && e.call(this, t[s], s, t)) return !0;
		return !1
	};
	var Ms = vs,
		Ss = e.momentProperties = [],
		ks = !1,
		Ds = {};
	e.suppressDeprecationWarnings = !1, e.deprecationHandler = null;
	var Ys;
	Ys = Object.keys ? Object.keys : function(e) {
		var t, n = [];
		for (t in e) l(e, t) && n.push(t);
		return n
	};
	var Os, xs = Ys,
		Ts = {
			sameDay: "[Today at] LT",
			nextDay: "[Tomorrow at] LT",
			nextWeek: "dddd [at] LT",
			lastDay: "[Yesterday at] LT",
			lastWeek: "[Last] dddd [at] LT",
			sameElse: "L"
		},
		bs = {
			LTS: "h:mm:ss A",
			LT: "h:mm A",
			L: "MM/DD/YYYY",
			LL: "MMMM D, YYYY",
			LLL: "MMMM D, YYYY h:mm A",
			LLLL: "dddd, MMMM D, YYYY h:mm A"
		},
		Ps = "Invalid date",
		Ws = "%d",
		Rs = /\d{1,2}/,
		Cs = {
			future: "in %s",
			past: "%s ago",
			s: "a few seconds",
			ss: "%d seconds",
			m: "a minute",
			mm: "%d minutes",
			h: "an hour",
			hh: "%d hours",
			d: "a day",
			dd: "%d days",
			M: "a month",
			MM: "%d months",
			y: "a year",
			yy: "%d years"
		},
		Fs = {},
		Us = {},
		Hs = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
		Ls = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
		Gs = {},
		Vs = {},
		Ns = /\d/,
		js = /\d\d/,
		As = /\d{3}/,
		Es = /\d{4}/,
		Is = /[+-]?\d{6}/,
		Zs = /\d\d?/,
		zs = /\d\d\d\d?/,
		$s = /\d\d\d\d\d\d?/,
		qs = /\d{1,3}/,
		Js = /\d{1,4}/,
		Bs = /[+-]?\d{1,6}/,
		Qs = /\d+/,
		Xs = /[+-]?\d+/,
		Ks = /Z|[+-]\d\d:?\d\d/gi,
		ei = /Z|[+-]\d\d(?::?\d\d)?/gi,
		ti = /[+-]?\d+(\.\d{1,3})?/,
		ni = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,
		si = {},
		ii = {},
		ri = 0,
		ai = 1,
		oi = 2,
		ui = 3,
		li = 4,
		di = 5,
		hi = 6,
		ci = 7,
		fi = 8;
	Os = Array.prototype.indexOf ? Array.prototype.indexOf : function(e) {
		var t;
		for (t = 0; t < this.length; ++t)
			if (this[t] === e) return t;
		return -1
	};
	var mi = Os;
	z("M", ["MM", 2], "Mo", function() {
		return this.month() + 1
	}), z("MMM", 0, 0, function(e) {
		return this.localeData().monthsShort(this, e)
	}), z("MMMM", 0, 0, function(e) {
		return this.localeData().months(this, e)
	}), U("month", "M"), G("month", 8), Q("M", Zs), Q("MM", Zs, js), Q("MMM", function(e, t) {
		return t.monthsShortRegex(e)
	}), Q("MMMM", function(e, t) {
		return t.monthsRegex(e)
	}), te(["M", "MM"], function(e, t) {
		t[ai] = v(e) - 1
	}), te(["MMM", "MMMM"], function(e, t, n, s) {
		var i = n._locale.monthsParse(e, s, n._strict);
		null != i ? t[ai] = i : f(n).invalidMonth = e
	});
	var _i = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
		yi = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
		gi = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
		pi = ni,
		wi = ni;
	z("Y", 0, 0, function() {
		var e = this.year();
		return 9999 >= e ? "" + e : "+" + e
	}), z(0, ["YY", 2], 0, function() {
		return this.year() % 100
	}), z(0, ["YYYY", 4], 0, "year"), z(0, ["YYYYY", 5], 0, "year"), z(0, ["YYYYYY", 6, !0], 0, "year"), U("year", "y"), G("year", 1), Q("Y", Xs), Q("YY", Zs, js), Q("YYYY", Js, Es), Q("YYYYY", Bs, Is), Q("YYYYYY", Bs, Is), te(["YYYYY", "YYYYYY"], ri), te("YYYY", function(t, n) {
		n[ri] = 2 === t.length ? e.parseTwoDigitYear(t) : v(t)
	}), te("YY", function(t, n) {
		n[ri] = e.parseTwoDigitYear(t)
	}), te("Y", function(e, t) {
		t[ri] = parseInt(e, 10)
	}), e.parseTwoDigitYear = function(e) {
		return v(e) + (v(e) > 68 ? 1900 : 2e3)
	};
	var vi = N("FullYear", !0);
	z("w", ["ww", 2], "wo", "week"), z("W", ["WW", 2], "Wo", "isoWeek"), U("week", "w"), U("isoWeek", "W"), G("week", 5), G("isoWeek", 5), Q("w", Zs), Q("ww", Zs, js), Q("W", Zs), Q("WW", Zs, js), ne(["w", "ww", "W", "WW"], function(e, t, n, s) {
		t[s.substr(0, 1)] = v(e)
	});
	var Mi = {
		dow: 0,
		doy: 6
	};
	z("d", 0, "do", "day"), z("dd", 0, 0, function(e) {
		return this.localeData().weekdaysMin(this, e)
	}), z("ddd", 0, 0, function(e) {
		return this.localeData().weekdaysShort(this, e)
	}), z("dddd", 0, 0, function(e) {
		return this.localeData().weekdays(this, e)
	}), z("e", 0, 0, "weekday"), z("E", 0, 0, "isoWeekday"), U("day", "d"), U("weekday", "e"), U("isoWeekday", "E"), G("day", 11), G("weekday", 11), G("isoWeekday", 11), Q("d", Zs), Q("e", Zs), Q("E", Zs), Q("dd", function(e, t) {
		return t.weekdaysMinRegex(e)
	}), Q("ddd", function(e, t) {
		return t.weekdaysShortRegex(e)
	}), Q("dddd", function(e, t) {
		return t.weekdaysRegex(e)
	}), ne(["dd", "ddd", "dddd"], function(e, t, n, s) {
		var i = n._locale.weekdaysParse(e, s, n._strict);
		null != i ? t.d = i : f(n).invalidWeekday = e
	}), ne(["d", "e", "E"], function(e, t, n, s) {
		t[s] = v(e)
	});
	var Si = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
		ki = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
		Di = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
		Yi = ni,
		Oi = ni,
		xi = ni;
	z("H", ["HH", 2], 0, "hour"), z("h", ["hh", 2], 0, Ee), z("k", ["kk", 2], 0, Ie), z("hmm", 0, 0, function() {
		return "" + Ee.apply(this) + Z(this.minutes(), 2)
	}), z("hmmss", 0, 0, function() {
		return "" + Ee.apply(this) + Z(this.minutes(), 2) + Z(this.seconds(), 2)
	}), z("Hmm", 0, 0, function() {
		return "" + this.hours() + Z(this.minutes(), 2)
	}), z("Hmmss", 0, 0, function() {
		return "" + this.hours() + Z(this.minutes(), 2) + Z(this.seconds(), 2)
	}), Ze("a", !0), Ze("A", !1), U("hour", "h"), G("hour", 13), Q("a", ze), Q("A", ze), Q("H", Zs), Q("h", Zs), Q("k", Zs), Q("HH", Zs, js), Q("hh", Zs, js), Q("kk", Zs, js), Q("hmm", zs), Q("hmmss", $s), Q("Hmm", zs), Q("Hmmss", $s), te(["H", "HH"], ui), te(["k", "kk"], function(e, t, n) {
		var s = v(e);
		t[ui] = 24 === s ? 0 : s
	}), te(["a", "A"], function(e, t, n) {
		n._isPm = n._locale.isPM(e), n._meridiem = e
	}), te(["h", "hh"], function(e, t, n) {
		t[ui] = v(e), f(n).bigHour = !0
	}), te("hmm", function(e, t, n) {
		var s = e.length - 2;
		t[ui] = v(e.substr(0, s)), t[li] = v(e.substr(s)), f(n).bigHour = !0
	}), te("hmmss", function(e, t, n) {
		var s = e.length - 4,
			i = e.length - 2;
		t[ui] = v(e.substr(0, s)), t[li] = v(e.substr(s, 2)), t[di] = v(e.substr(i)), f(n).bigHour = !0
	}), te("Hmm", function(e, t, n) {
		var s = e.length - 2;
		t[ui] = v(e.substr(0, s)), t[li] = v(e.substr(s))
	}), te("Hmmss", function(e, t, n) {
		var s = e.length - 4,
			i = e.length - 2;
		t[ui] = v(e.substr(0, s)), t[li] = v(e.substr(s, 2)), t[di] = v(e.substr(i))
	});
	var Ti, bi = /[ap]\.?m?\.?/i,
		Pi = N("Hours", !0),
		Wi = {
			calendar: Ts,
			longDateFormat: bs,
			invalidDate: Ps,
			ordinal: Ws,
			dayOfMonthOrdinalParse: Rs,
			relativeTime: Cs,
			months: yi,
			monthsShort: gi,
			week: Mi,
			weekdays: Si,
			weekdaysMin: Di,
			weekdaysShort: ki,
			meridiemParse: bi
		},
		Ri = {},
		Ci = {},
		Fi = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
		Ui = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
		Hi = /Z|[+-]\d\d(?::?\d\d)?/,
		Li = [
			["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
			["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
			["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
			["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
			["YYYY-DDD", /\d{4}-\d{3}/],
			["YYYY-MM", /\d{4}-\d\d/, !1],
			["YYYYYYMMDD", /[+-]\d{10}/],
			["YYYYMMDD", /\d{8}/],
			["GGGG[W]WWE", /\d{4}W\d{3}/],
			["GGGG[W]WW", /\d{4}W\d{2}/, !1],
			["YYYYDDD", /\d{7}/]
		],
		Gi = [
			["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
			["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
			["HH:mm:ss", /\d\d:\d\d:\d\d/],
			["HH:mm", /\d\d:\d\d/],
			["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
			["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
			["HHmmss", /\d\d\d\d\d\d/],
			["HHmm", /\d\d\d\d/],
			["HH", /\d\d/]
		],
		Vi = /^\/?Date\((\-?\d+)/i,
		Ni = /^((?:Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d?\d\s(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(?:\d\d)?\d\d\s)(\d\d:\d\d)(\:\d\d)?(\s(?:UT|GMT|[ECMP][SD]T|[A-IK-Za-ik-z]|[+-]\d{4}))$/;
	e.createFromInputFallback = k("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function(e) {
		e._d = new Date(e._i + (e._useUTC ? " UTC" : ""))
	}), e.ISO_8601 = function() {}, e.RFC_2822 = function() {};
	var ji = k("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
			var e = wt.apply(null, arguments);
			return this.isValid() && e.isValid() ? this > e ? this : e : _()
		}),
		Ai = k("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
			var e = wt.apply(null, arguments);
			return this.isValid() && e.isValid() ? e > this ? this : e : _()
		}),
		Ei = function() {
			return Date.now ? Date.now() : +new Date
		},
		Ii = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];
	bt("Z", ":"), bt("ZZ", ""), Q("Z", ei), Q("ZZ", ei), te(["Z", "ZZ"], function(e, t, n) {
		n._useUTC = !0, n._tzm = Pt(ei, e)
	});
	var Zi = /([\+\-]|\d\d)/gi;
	e.updateOffset = function() {};
	var zi = /^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
		$i = /^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;
	It.fn = Ot.prototype, It.invalid = Yt;
	var qi = qt(1, "add"),
		Ji = qt(-1, "subtract");
	e.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", e.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
	var Bi = k("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(e) {
		return void 0 === e ? this.localeData() : this.locale(e)
	});
	z(0, ["gg", 2], 0, function() {
		return this.weekYear() % 100
	}), z(0, ["GG", 2], 0, function() {
		return this.isoWeekYear() % 100
	}), Pn("gggg", "weekYear"), Pn("ggggg", "weekYear"), Pn("GGGG", "isoWeekYear"), Pn("GGGGG", "isoWeekYear"), U("weekYear", "gg"), U("isoWeekYear", "GG"), G("weekYear", 1), G("isoWeekYear", 1), Q("G", Xs), Q("g", Xs), Q("GG", Zs, js), Q("gg", Zs, js), Q("GGGG", Js, Es), Q("gggg", Js, Es), Q("GGGGG", Bs, Is), Q("ggggg", Bs, Is), ne(["gggg", "ggggg", "GGGG", "GGGGG"], function(e, t, n, s) {
		t[s.substr(0, 2)] = v(e)
	}), ne(["gg", "GG"], function(t, n, s, i) {
		n[i] = e.parseTwoDigitYear(t)
	}), z("Q", 0, "Qo", "quarter"), U("quarter", "Q"), G("quarter", 7), Q("Q", Ns), te("Q", function(e, t) {
		t[ai] = 3 * (v(e) - 1)
	}), z("D", ["DD", 2], "Do", "date"), U("date", "D"), G("date", 9), Q("D", Zs), Q("DD", Zs, js), Q("Do", function(e, t) {
		return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient
	}), te(["D", "DD"], oi), te("Do", function(e, t) {
		t[oi] = v(e.match(Zs)[0], 10)
	});
	var Qi = N("Date", !0);
	z("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), U("dayOfYear", "DDD"), G("dayOfYear", 4), Q("DDD", qs), Q("DDDD", As), te(["DDD", "DDDD"], function(e, t, n) {
		n._dayOfYear = v(e)
	}), z("m", ["mm", 2], 0, "minute"), U("minute", "m"), G("minute", 14), Q("m", Zs), Q("mm", Zs, js), te(["m", "mm"], li);
	var Xi = N("Minutes", !1);
	z("s", ["ss", 2], 0, "second"), U("second", "s"), G("second", 15), Q("s", Zs), Q("ss", Zs, js), te(["s", "ss"], di);
	var Ki = N("Seconds", !1);
	z("S", 0, 0, function() {
		return ~~(this.millisecond() / 100)
	}), z(0, ["SS", 2], 0, function() {
		return ~~(this.millisecond() / 10)
	}), z(0, ["SSS", 3], 0, "millisecond"), z(0, ["SSSS", 4], 0, function() {
		return 10 * this.millisecond()
	}), z(0, ["SSSSS", 5], 0, function() {
		return 100 * this.millisecond()
	}), z(0, ["SSSSSS", 6], 0, function() {
		return 1e3 * this.millisecond()
	}), z(0, ["SSSSSSS", 7], 0, function() {
		return 1e4 * this.millisecond()
	}), z(0, ["SSSSSSSS", 8], 0, function() {
		return 1e5 * this.millisecond()
	}), z(0, ["SSSSSSSSS", 9], 0, function() {
		return 1e6 * this.millisecond()
	}), U("millisecond", "ms"), G("millisecond", 16), Q("S", qs, Ns), Q("SS", qs, js), Q("SSS", qs, As);
	var er;
	for (er = "SSSS"; er.length <= 9; er += "S") Q(er, Qs);
	for (er = "S"; er.length <= 9; er += "S") te(er, Vn);
	var tr = N("Milliseconds", !1);
	z("z", 0, 0, "zoneAbbr"), z("zz", 0, 0, "zoneName");
	var nr = g.prototype;
	nr.add = qi, nr.calendar = Qt, nr.clone = Xt, nr.diff = an, nr.endOf = wn, nr.format = hn, nr.from = cn, nr.fromNow = fn, nr.to = mn, nr.toNow = _n, nr.get = E, nr.invalidAt = Tn, nr.isAfter = Kt, nr.isBefore = en, nr.isBetween = tn, nr.isSame = nn, nr.isSameOrAfter = sn, nr.isSameOrBefore = rn, nr.isValid = On, nr.lang = Bi, nr.locale = yn, nr.localeData = gn, nr.max = Ai, nr.min = ji, nr.parsingFlags = xn, nr.set = I, nr.startOf = pn, nr.subtract = Ji, nr.toArray = kn, nr.toObject = Dn, nr.toDate = Sn, nr.toISOString = ln, nr.inspect = dn, nr.toJSON = Yn, nr.toString = un, nr.unix = Mn, nr.valueOf = vn, nr.creationData = bn, nr.year = vi, nr.isLeapYear = ge, nr.weekYear = Wn, nr.isoWeekYear = Rn, nr.quarter = nr.quarters = Ln, nr.month = de, nr.daysInMonth = he, nr.week = nr.weeks = xe, nr.isoWeek = nr.isoWeeks = Te, nr.weeksInYear = Fn, nr.isoWeeksInYear = Cn, nr.date = Qi, nr.day = nr.days = He, nr.weekday = Le, nr.isoWeekday = Ge, nr.dayOfYear = Gn, nr.hour = nr.hours = Pi, nr.minute = nr.minutes = Xi, nr.second = nr.seconds = Ki, nr.millisecond = nr.milliseconds = tr, nr.utcOffset = Ct, nr.utc = Ut, nr.local = Ht, nr.parseZone = Lt, nr.hasAlignedHourOffset = Gt, nr.isDST = Vt, nr.isLocal = jt, nr.isUtcOffset = At, nr.isUtc = Et, nr.isUTC = Et, nr.zoneAbbr = Nn, nr.zoneName = jn, nr.dates = k("dates accessor is deprecated. Use date instead.", Qi), nr.months = k("months accessor is deprecated. Use month instead", de), nr.years = k("years accessor is deprecated. Use year instead", vi), nr.zone = k("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", Ft), nr.isDSTShifted = k("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", Nt);
	var sr = T.prototype;
	sr.calendar = b, sr.longDateFormat = P, sr.invalidDate = W, sr.ordinal = R, sr.preparse = In, sr.postformat = In, sr.relativeTime = C, sr.pastFuture = F, sr.set = O, sr.months = re, sr.monthsShort = ae, sr.monthsParse = ue, sr.monthsRegex = fe, sr.monthsShortRegex = ce, sr.week = De, sr.firstDayOfYear = Oe, sr.firstDayOfWeek = Ye, sr.weekdays = We, sr.weekdaysMin = Ce, sr.weekdaysShort = Re, sr.weekdaysParse = Ue, sr.weekdaysRegex = Ve, sr.weekdaysShortRegex = Ne, sr.weekdaysMinRegex = je, sr.isPM = $e, sr.meridiem = qe, Xe("en", {
		dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
		ordinal: function(e) {
			var t = e % 10,
				n = 1 === v(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
			return e + n
		}
	}), e.lang = k("moment.lang is deprecated. Use moment.locale instead.", Xe), e.langData = k("moment.langData is deprecated. Use moment.localeData instead.", tt);
	var ir = Math.abs,
		rr = ls("ms"),
		ar = ls("s"),
		or = ls("m"),
		ur = ls("h"),
		lr = ls("d"),
		dr = ls("w"),
		hr = ls("M"),
		cr = ls("y"),
		fr = hs("milliseconds"),
		mr = hs("seconds"),
		_r = hs("minutes"),
		yr = hs("hours"),
		gr = hs("days"),
		pr = hs("months"),
		wr = hs("years"),
		vr = Math.round,
		Mr = {
			ss: 44,
			s: 45,
			m: 45,
			h: 22,
			d: 26,
			M: 11
		},
		Sr = Math.abs,
		kr = Ot.prototype;
	return kr.isValid = Dt, kr.abs = Kn, kr.add = ts, kr.subtract = ns, kr.as = os, kr.asMilliseconds = rr, kr.asSeconds = ar, kr.asMinutes = or, kr.asHours = ur, kr.asDays = lr, kr.asWeeks = dr, kr.asMonths = hr, kr.asYears = cr, kr.valueOf = us, kr._bubble = is, kr.get = ds, kr.milliseconds = fr, kr.seconds = mr, kr.minutes = _r, kr.hours = yr, kr.days = gr, kr.weeks = cs, kr.months = pr, kr.years = wr, kr.humanize = gs, kr.toISOString = ps, kr.toString = ps, kr.toJSON = ps, kr.locale = yn, kr.localeData = gn, kr.toIsoString = k("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", ps), kr.lang = Bi, z("X", 0, 0, "unix"), z("x", 0, 0, "valueOf"), Q("x", Xs), Q("X", ti), te("X", function(e, t, n) {
		n._d = new Date(1e3 * parseFloat(e, 10))
	}), te("x", function(e, t, n) {
		n._d = new Date(v(e))
	}), e.version = "2.18.1", t(wt), e.fn = nr, e.min = Mt, e.max = St, e.now = Ei, e.utc = h, e.unix = An, e.months = qn, e.isDate = o, e.locale = Xe, e.invalid = _, e.duration = It, e.isMoment = p, e.weekdays = Bn, e.parseZone = En, e.localeData = tt, e.isDuration = xt, e.monthsShort = Jn, e.weekdaysMin = Xn, e.defineLocale = Ke, e.updateLocale = et, e.locales = nt, e.weekdaysShort = Qn, e.normalizeUnits = H, e.relativeTimeRounding = _s, e.relativeTimeThreshold = ys, e.calendarFormat = Bt, e.prototype = nr, e
});
! function(t, e) {
	if ("function" == typeof define && define.amd) define(["moment", "jquery"], function(t, a) {
		return a.fn || (a.fn = {}), "function" != typeof t && t.hasOwnProperty("default") && (t = t["default"]), e(t, a)
	});
	else if ("object" == typeof module && module.exports) {
		var a = "undefined" != typeof window ? window.jQuery : void 0;
		a || (a = require("jquery")).fn || (a.fn = {});
		var i = "undefined" != typeof window && void 0 !== window.moment ? window.moment : require("moment");
		module.exports = e(i, a)
	} else t.daterangepicker = e(t.moment, t.jQuery)
}(this, function(t, e) {
	var a = function(a, i, s) {
		if (this.parentEl = "body", this.element = e(a), this.startDate = t().startOf("day"), this.endDate = t().endOf("day"), this.minDate = !1, this.maxDate = !1, this.maxSpan = !1, this.autoApply = !1, this.singleDatePicker = !1, this.showDropdowns = !1, this.minYear = t().subtract(100, "year").format("YYYY"), this.maxYear = t().add(100, "year").format("YYYY"), this.showWeekNumbers = !1, this.showISOWeekNumbers = !1, this.showCustomRangeLabel = !0, this.timePicker = !1, this.timePicker24Hour = !1, this.timePickerIncrement = 1, this.timePickerSeconds = !1, this.linkedCalendars = !0, this.autoUpdateInput = !0, this.alwaysShowCalendars = !1, this.ranges = {}, this.opens = "right", this.element.hasClass("pull-right") && (this.opens = "left"), this.drops = "down", this.element.hasClass("dropup") && (this.drops = "up"), this.buttonClasses = "btn btn-sm", this.applyButtonClasses = "btn-primary", this.cancelButtonClasses = "btn-default", this.locale = {
				direction: "ltr",
				format: t.localeData().longDateFormat("L"),
				separator: " - ",
				applyLabel: "Apply",
				cancelLabel: "Cancel",
				weekLabel: "W",
				customRangeLabel: "Custom Range",
				daysOfWeek: t.weekdaysMin(),
				monthNames: t.monthsShort(),
				firstDay: t.localeData().firstDayOfWeek()
			}, this.callback = function() {}, this.isShowing = !1, this.leftCalendar = {}, this.rightCalendar = {}, "object" == typeof i && null !== i || (i = {}), "string" == typeof(i = e.extend(this.element.data(), i)).template || i.template instanceof e || (i.template = '<div class="daterangepicker"><div class="ranges"></div><div class="drp-calendar left"><div class="calendar-table"></div><div class="calendar-time"></div></div><div class="drp-calendar right"><div class="calendar-table"></div><div class="calendar-time"></div></div><div class="drp-buttons"><span class="drp-selected"></span><button class="cancelBtn" type="button"></button><button class="applyBtn" disabled="disabled" type="button"></button> </div></div>'), this.parentEl = e(i.parentEl && e(i.parentEl).length ? i.parentEl : this.parentEl), this.container = e(i.template).appendTo(this.parentEl), "object" == typeof i.locale && ("string" == typeof i.locale.direction && (this.locale.direction = i.locale.direction), "string" == typeof i.locale.format && (this.locale.format = i.locale.format), "string" == typeof i.locale.separator && (this.locale.separator = i.locale.separator), "object" == typeof i.locale.daysOfWeek && (this.locale.daysOfWeek = i.locale.daysOfWeek.slice()), "object" == typeof i.locale.monthNames && (this.locale.monthNames = i.locale.monthNames.slice()), "number" == typeof i.locale.firstDay && (this.locale.firstDay = i.locale.firstDay), "string" == typeof i.locale.applyLabel && (this.locale.applyLabel = i.locale.applyLabel), "string" == typeof i.locale.cancelLabel && (this.locale.cancelLabel = i.locale.cancelLabel), "string" == typeof i.locale.weekLabel && (this.locale.weekLabel = i.locale.weekLabel), "string" == typeof i.locale.customRangeLabel)) {
			(p = document.createElement("textarea")).innerHTML = i.locale.customRangeLabel;
			var n = p.value;
			this.locale.customRangeLabel = n
		}
		if (this.container.addClass(this.locale.direction), "string" == typeof i.startDate && (this.startDate = t(i.startDate, this.locale.format)), "string" == typeof i.endDate && (this.endDate = t(i.endDate, this.locale.format)), "string" == typeof i.minDate && (this.minDate = t(i.minDate, this.locale.format)), "string" == typeof i.maxDate && (this.maxDate = t(i.maxDate, this.locale.format)), "object" == typeof i.startDate && (this.startDate = t(i.startDate)), "object" == typeof i.endDate && (this.endDate = t(i.endDate)), "object" == typeof i.minDate && (this.minDate = t(i.minDate)), "object" == typeof i.maxDate && (this.maxDate = t(i.maxDate)), this.minDate && this.startDate.isBefore(this.minDate) && (this.startDate = this.minDate.clone()), this.maxDate && this.endDate.isAfter(this.maxDate) && (this.endDate = this.maxDate.clone()), "string" == typeof i.applyButtonClasses && (this.applyButtonClasses = i.applyButtonClasses), "string" == typeof i.applyClass && (this.applyButtonClasses = i.applyClass), "string" == typeof i.cancelButtonClasses && (this.cancelButtonClasses = i.cancelButtonClasses), "string" == typeof i.cancelClass && (this.cancelButtonClasses = i.cancelClass), "object" == typeof i.maxSpan && (this.maxSpan = i.maxSpan), "object" == typeof i.dateLimit && (this.maxSpan = i.dateLimit), "string" == typeof i.opens && (this.opens = i.opens), "string" == typeof i.drops && (this.drops = i.drops), "boolean" == typeof i.showWeekNumbers && (this.showWeekNumbers = i.showWeekNumbers), "boolean" == typeof i.showISOWeekNumbers && (this.showISOWeekNumbers = i.showISOWeekNumbers), "string" == typeof i.buttonClasses && (this.buttonClasses = i.buttonClasses), "object" == typeof i.buttonClasses && (this.buttonClasses = i.buttonClasses.join(" ")), "boolean" == typeof i.showDropdowns && (this.showDropdowns = i.showDropdowns), "number" == typeof i.minYear && (this.minYear = i.minYear), "number" == typeof i.maxYear && (this.maxYear = i.maxYear), "boolean" == typeof i.showCustomRangeLabel && (this.showCustomRangeLabel = i.showCustomRangeLabel), "boolean" == typeof i.singleDatePicker && (this.singleDatePicker = i.singleDatePicker, this.singleDatePicker && (this.endDate = this.startDate.clone())), "boolean" == typeof i.timePicker && (this.timePicker = i.timePicker), "boolean" == typeof i.timePickerSeconds && (this.timePickerSeconds = i.timePickerSeconds), "number" == typeof i.timePickerIncrement && (this.timePickerIncrement = i.timePickerIncrement), "boolean" == typeof i.timePicker24Hour && (this.timePicker24Hour = i.timePicker24Hour), "boolean" == typeof i.autoApply && (this.autoApply = i.autoApply), "boolean" == typeof i.autoUpdateInput && (this.autoUpdateInput = i.autoUpdateInput), "boolean" == typeof i.linkedCalendars && (this.linkedCalendars = i.linkedCalendars), "function" == typeof i.isInvalidDate && (this.isInvalidDate = i.isInvalidDate), "function" == typeof i.isCustomDate && (this.isCustomDate = i.isCustomDate), "boolean" == typeof i.alwaysShowCalendars && (this.alwaysShowCalendars = i.alwaysShowCalendars), 0 != this.locale.firstDay)
			for (var r = this.locale.firstDay; r > 0;) this.locale.daysOfWeek.push(this.locale.daysOfWeek.shift()), r--;
		var o, h, l;
		if (void 0 === i.startDate && void 0 === i.endDate && e(this.element).is(":text")) {
			var c = e(this.element).val(),
				d = c.split(this.locale.separator);
			o = h = null, 2 == d.length ? (o = t(d[0], this.locale.format), h = t(d[1], this.locale.format)) : this.singleDatePicker && "" !== c && (o = t(c, this.locale.format), h = t(c, this.locale.format)), null !== o && null !== h && (this.setStartDate(o), this.setEndDate(h))
		}
		if ("object" == typeof i.ranges) {
			for (l in i.ranges) {
				o = "string" == typeof i.ranges[l][0] ? t(i.ranges[l][0], this.locale.format) : t(i.ranges[l][0]), h = "string" == typeof i.ranges[l][1] ? t(i.ranges[l][1], this.locale.format) : t(i.ranges[l][1]), this.minDate && o.isBefore(this.minDate) && (o = this.minDate.clone());
				var m = this.maxDate;
				if (this.maxSpan && m && o.clone().add(this.maxSpan).isAfter(m) && (m = o.clone().add(this.maxSpan)), m && h.isAfter(m) && (h = m.clone()), !(this.minDate && h.isBefore(this.minDate, this.timepicker ? "minute" : "day") || m && o.isAfter(m, this.timepicker ? "minute" : "day"))) {
					var p;
					(p = document.createElement("textarea")).innerHTML = l, n = p.value, this.ranges[n] = [o, h]
				}
			}
			var f = "<ul>";
			for (l in this.ranges) f += '<li data-range-key="' + l + '">' + l + "</li>";
			this.showCustomRangeLabel && (f += '<li data-range-key="' + this.locale.customRangeLabel + '">' + this.locale.customRangeLabel + "</li>"), f += "</ul>", this.container.find(".ranges").prepend(f)
		}
		"function" == typeof s && (this.callback = s), this.timePicker || (this.startDate = this.startDate.startOf("day"), this.endDate = this.endDate.endOf("day"), this.container.find(".calendar-time").hide()), this.timePicker && this.autoApply && (this.autoApply = !1), this.autoApply && this.container.addClass("auto-apply"), "object" == typeof i.ranges && this.container.addClass("show-ranges"), this.singleDatePicker && (this.container.addClass("single"), this.container.find(".drp-calendar.left").addClass("single"), this.container.find(".drp-calendar.left").show(), this.container.find(".drp-calendar.right").hide(), !this.timePicker && this.autoApply && this.container.addClass("auto-apply")), (void 0 === i.ranges && !this.singleDatePicker || this.alwaysShowCalendars) && this.container.addClass("show-calendar"), this.container.addClass("opens" + this.opens), this.container.find(".applyBtn, .cancelBtn").addClass(this.buttonClasses), this.applyButtonClasses.length && this.container.find(".applyBtn").addClass(this.applyButtonClasses), this.cancelButtonClasses.length && this.container.find(".cancelBtn").addClass(this.cancelButtonClasses), this.container.find(".applyBtn").html(this.locale.applyLabel), this.container.find(".cancelBtn").html(this.locale.cancelLabel), this.container.find(".drp-calendar").on("click.daterangepicker", ".prev", e.proxy(this.clickPrev, this)).on("click.daterangepicker", ".next", e.proxy(this.clickNext, this)).on("mousedown.daterangepicker", "td.available", e.proxy(this.clickDate, this)).on("mouseenter.daterangepicker", "td.available", e.proxy(this.hoverDate, this)).on("change.daterangepicker", "select.yearselect", e.proxy(this.monthOrYearChanged, this)).on("change.daterangepicker", "select.monthselect", e.proxy(this.monthOrYearChanged, this)).on("change.daterangepicker", "select.hourselect,select.minuteselect,select.secondselect,select.ampmselect", e.proxy(this.timeChanged, this)), this.container.find(".ranges").on("click.daterangepicker", "li", e.proxy(this.clickRange, this)), this.container.find(".drp-buttons").on("click.daterangepicker", "button.applyBtn", e.proxy(this.clickApply, this)).on("click.daterangepicker", "button.cancelBtn", e.proxy(this.clickCancel, this)), this.element.is("input") || this.element.is("button") ? this.element.on({
			"click.daterangepicker": e.proxy(this.show, this),
			"focus.daterangepicker": e.proxy(this.show, this),
			"keyup.daterangepicker": e.proxy(this.elementChanged, this),
			"keydown.daterangepicker": e.proxy(this.keydown, this)
		}) : (this.element.on("click.daterangepicker", e.proxy(this.toggle, this)), this.element.on("keydown.daterangepicker", e.proxy(this.toggle, this))), this.updateElement()
	};
	return a.prototype = {
		constructor: a,
		setStartDate: function(e) {
			"string" == typeof e && (this.startDate = t(e, this.locale.format)), "object" == typeof e && (this.startDate = t(e)), this.timePicker || (this.startDate = this.startDate.startOf("day")), this.timePicker && this.timePickerIncrement && this.startDate.minute(Math.round(this.startDate.minute() / this.timePickerIncrement) * this.timePickerIncrement), this.minDate && this.startDate.isBefore(this.minDate) && (this.startDate = this.minDate.clone(), this.timePicker && this.timePickerIncrement && this.startDate.minute(Math.round(this.startDate.minute() / this.timePickerIncrement) * this.timePickerIncrement)), this.maxDate && this.startDate.isAfter(this.maxDate) && (this.startDate = this.maxDate.clone(), this.timePicker && this.timePickerIncrement && this.startDate.minute(Math.floor(this.startDate.minute() / this.timePickerIncrement) * this.timePickerIncrement)), this.isShowing || this.updateElement(), this.updateMonthsInView()
		},
		setEndDate: function(e) {
			"string" == typeof e && (this.endDate = t(e, this.locale.format)), "object" == typeof e && (this.endDate = t(e)), this.timePicker || (this.endDate = this.endDate.endOf("day")), this.timePicker && this.timePickerIncrement && this.endDate.minute(Math.round(this.endDate.minute() / this.timePickerIncrement) * this.timePickerIncrement), this.endDate.isBefore(this.startDate) && (this.endDate = this.startDate.clone()), this.maxDate && this.endDate.isAfter(this.maxDate) && (this.endDate = this.maxDate.clone()), this.maxSpan && this.startDate.clone().add(this.maxSpan).isBefore(this.endDate) && (this.endDate = this.startDate.clone().add(this.maxSpan)), this.previousRightTime = this.endDate.clone(), this.container.find(".drp-selected").html(this.startDate.format(this.locale.format) + this.locale.separator + this.endDate.format(this.locale.format)), this.isShowing || this.updateElement(), this.updateMonthsInView()
		},
		isInvalidDate: function() {
			return !1
		},
		isCustomDate: function() {
			return !1
		},
		updateView: function() {
			this.timePicker && (this.renderTimePicker("left"), this.renderTimePicker("right"), this.endDate ? this.container.find(".right .calendar-time select").prop("disabled", !1).removeClass("disabled") : this.container.find(".right .calendar-time select").prop("disabled", !0).addClass("disabled")), this.endDate && this.container.find(".drp-selected").html(this.startDate.format(this.locale.format) + this.locale.separator + this.endDate.format(this.locale.format)), this.updateMonthsInView(), this.updateCalendars(), this.updateFormInputs()
		},
		updateMonthsInView: function() {
			if (this.endDate) {
				if (!this.singleDatePicker && this.leftCalendar.month && this.rightCalendar.month && (this.startDate.format("YYYY-MM") == this.leftCalendar.month.format("YYYY-MM") || this.startDate.format("YYYY-MM") == this.rightCalendar.month.format("YYYY-MM")) && (this.endDate.format("YYYY-MM") == this.leftCalendar.month.format("YYYY-MM") || this.endDate.format("YYYY-MM") == this.rightCalendar.month.format("YYYY-MM"))) return;
				this.leftCalendar.month = this.startDate.clone().date(2), this.linkedCalendars || this.endDate.month() == this.startDate.month() && this.endDate.year() == this.startDate.year() ? this.rightCalendar.month = this.startDate.clone().date(2).add(1, "month") : this.rightCalendar.month = this.endDate.clone().date(2)
			} else this.leftCalendar.month.format("YYYY-MM") != this.startDate.format("YYYY-MM") && this.rightCalendar.month.format("YYYY-MM") != this.startDate.format("YYYY-MM") && (this.leftCalendar.month = this.startDate.clone().date(2), this.rightCalendar.month = this.startDate.clone().date(2).add(1, "month"));
			this.maxDate && this.linkedCalendars && !this.singleDatePicker && this.rightCalendar.month > this.maxDate && (this.rightCalendar.month = this.maxDate.clone().date(2), this.leftCalendar.month = this.maxDate.clone().date(2).subtract(1, "month"))
		},
		updateCalendars: function() {
			if (this.timePicker) {
				var t, e, a, i;
				this.endDate ? (t = parseInt(this.container.find(".left .hourselect").val(), 10), e = parseInt(this.container.find(".left .minuteselect").val(), 10), isNaN(e) && (e = parseInt(this.container.find(".left .minuteselect option:last").val(), 10)), a = this.timePickerSeconds ? parseInt(this.container.find(".left .secondselect").val(), 10) : 0, this.timePicker24Hour || ("PM" === (i = this.container.find(".left .ampmselect").val()) && 12 > t && (t += 12), "AM" === i && 12 === t && (t = 0))) : (t = parseInt(this.container.find(".right .hourselect").val(), 10), e = parseInt(this.container.find(".right .minuteselect").val(), 10), isNaN(e) && (e = parseInt(this.container.find(".right .minuteselect option:last").val(), 10)), a = this.timePickerSeconds ? parseInt(this.container.find(".right .secondselect").val(), 10) : 0, this.timePicker24Hour || ("PM" === (i = this.container.find(".right .ampmselect").val()) && 12 > t && (t += 12), "AM" === i && 12 === t && (t = 0))), this.leftCalendar.month.hour(t).minute(e).second(a), this.rightCalendar.month.hour(t).minute(e).second(a)
			}
			this.renderCalendar("left"), this.renderCalendar("right"), this.container.find(".ranges li").removeClass("active"), null != this.endDate && this.calculateChosenLabel()
		},
		renderCalendar: function(a) {
			var i, s = (i = "left" == a ? this.leftCalendar : this.rightCalendar).month.month(),
				n = i.month.year(),
				r = i.month.hour(),
				o = i.month.minute(),
				h = i.month.second(),
				l = t([n, s]).daysInMonth(),
				c = t([n, s, 1]),
				d = t([n, s, l]),
				m = t(c).subtract(1, "month").month(),
				p = t(c).subtract(1, "month").year(),
				f = t([p, m]).daysInMonth(),
				u = c.day();
			(i = []).firstDay = c, i.lastDay = d;
			for (var D = 0; 6 > D; D++) i[D] = [];
			var g = f - u + this.locale.firstDay + 1;
			g > f && (g -= 7), u == this.locale.firstDay && (g = f - 6);
			for (var y = t([p, m, g, 12, o, h]), k = (D = 0, 0), b = 0; 42 > D; D++, k++, y = t(y).add(24, "hour")) D > 0 && k % 7 == 0 && (k = 0, b++), i[b][k] = y.clone().hour(r).minute(o).second(h), y.hour(12), this.minDate && i[b][k].format("YYYY-MM-DD") == this.minDate.format("YYYY-MM-DD") && i[b][k].isBefore(this.minDate) && "left" == a && (i[b][k] = this.minDate.clone()), this.maxDate && i[b][k].format("YYYY-MM-DD") == this.maxDate.format("YYYY-MM-DD") && i[b][k].isAfter(this.maxDate) && "right" == a && (i[b][k] = this.maxDate.clone());
			"left" == a ? this.leftCalendar.calendar = i : this.rightCalendar.calendar = i;
			var v = "left" == a ? this.minDate : this.startDate,
				C = this.maxDate,
				Y = ("left" == a ? this.startDate : this.endDate, this.locale.direction, '<table class="table-condensed">');
			Y += "<thead>", Y += "<tr>", (this.showWeekNumbers || this.showISOWeekNumbers) && (Y += "<th></th>"), Y += v && !v.isBefore(i.firstDay) || this.linkedCalendars && "left" != a ? "<th></th>" : '<th class="prev available"><span></span></th>';
			var w = this.locale.monthNames[i[1][1].month()] + i[1][1].format(" YYYY");
			if (this.showDropdowns) {
				for (var P = i[1][1].month(), x = i[1][1].year(), M = C && C.year() || this.maxYear, I = v && v.year() || this.minYear, S = x == I, B = x == M, A = '<select class="monthselect">', L = 0; 12 > L; L++) A += (!S || v && L >= v.month()) && (!B || C && L <= C.month()) ? "<option value='" + L + "'" + (L === P ? " selected='selected'" : "") + ">" + this.locale.monthNames[L] + "</option>" : "<option value='" + L + "'" + (L === P ? " selected='selected'" : "") + " disabled='disabled'>" + this.locale.monthNames[L] + "</option>";
				A += "</select>";
				for (var N = '<select class="yearselect">', E = I; M >= E; E++) N += '<option value="' + E + '"' + (E === x ? ' selected="selected"' : "") + ">" + E + "</option>";
				w = A + (N += "</select>")
			}
			if (Y += '<th colspan="5" class="month">' + w + "</th>", Y += C && !C.isAfter(i.lastDay) || this.linkedCalendars && "right" != a && !this.singleDatePicker ? "<th></th>" : '<th class="next available"><span></span></th>', Y += "</tr>", Y += "<tr>", (this.showWeekNumbers || this.showISOWeekNumbers) && (Y += '<th class="week">' + this.locale.weekLabel + "</th>"), e.each(this.locale.daysOfWeek, function(t, e) {
					Y += "<th>" + e + "</th>"
				}), Y += "</tr>", Y += "</thead>", Y += "<tbody>", null == this.endDate && this.maxSpan) {
				var O = this.startDate.clone().add(this.maxSpan).endOf("day");
				C && !O.isBefore(C) || (C = O)
			}
			for (b = 0; 6 > b; b++) {
				for (Y += "<tr>", this.showWeekNumbers ? Y += '<td class="week">' + i[b][0].week() + "</td>" : this.showISOWeekNumbers && (Y += '<td class="week">' + i[b][0].isoWeek() + "</td>"), k = 0; 7 > k; k++) {
					var W = [];
					i[b][k].isSame(new Date, "day") && W.push("today"), i[b][k].isoWeekday() > 5 && W.push("weekend"), i[b][k].month() != i[1][1].month() && W.push("off", "ends"), this.minDate && i[b][k].isBefore(this.minDate, "day") && W.push("off", "disabled"), C && i[b][k].isAfter(C, "day") && W.push("off", "disabled"), this.isInvalidDate(i[b][k]) && W.push("off", "disabled"), i[b][k].format("YYYY-MM-DD") == this.startDate.format("YYYY-MM-DD") && W.push("active", "start-date"), null != this.endDate && i[b][k].format("YYYY-MM-DD") == this.endDate.format("YYYY-MM-DD") && W.push("active", "end-date"), null != this.endDate && i[b][k] > this.startDate && i[b][k] < this.endDate && W.push("in-range");
					var H = this.isCustomDate(i[b][k]);
					!1 !== H && ("string" == typeof H ? W.push(H) : Array.prototype.push.apply(W, H));
					var j = "",
						R = !1;
					for (D = 0; D < W.length; D++) j += W[D] + " ", "disabled" == W[D] && (R = !0);
					R || (j += "available"), Y += '<td class="' + j.replace(/^\s+|\s+$/g, "") + '" data-title="r' + b + "c" + k + '">' + i[b][k].date() + "</td>"
				}
				Y += "</tr>"
			}
			Y += "</tbody>", Y += "</table>", this.container.find(".drp-calendar." + a + " .calendar-table").html(Y)
		},
		renderTimePicker: function(t) {
			if ("right" != t || this.endDate) {
				var e, a, i, s = this.maxDate;
				if (!this.maxSpan || this.maxDate && !this.startDate.clone().add(this.maxSpan).isBefore(this.maxDate) || (s = this.startDate.clone().add(this.maxSpan)), "left" == t) a = this.startDate.clone(), i = this.minDate;
				else if ("right" == t) {
					a = this.endDate.clone(), i = this.startDate;
					var n = this.container.find(".drp-calendar.right .calendar-time");
					if ("" != n.html() && (a.hour(isNaN(a.hour()) ? n.find(".hourselect option:selected").val() : a.hour()), a.minute(isNaN(a.minute()) ? n.find(".minuteselect option:selected").val() : a.minute()), a.second(isNaN(a.second()) ? n.find(".secondselect option:selected").val() : a.second()), !this.timePicker24Hour)) {
						var r = n.find(".ampmselect option:selected").val();
						"PM" === r && a.hour() < 12 && a.hour(a.hour() + 12), "AM" === r && 12 === a.hour() && a.hour(0)
					}
					a.isBefore(this.startDate) && (a = this.startDate.clone()), s && a.isAfter(s) && (a = s.clone())
				}
				e = '<select class="hourselect">';
				for (var o = this.timePicker24Hour ? 0 : 1, h = this.timePicker24Hour ? 23 : 12, l = o; h >= l; l++) {
					var c = l;
					this.timePicker24Hour || (c = a.hour() >= 12 ? 12 == l ? 12 : l + 12 : 12 == l ? 0 : l);
					var d = a.clone().hour(c),
						m = !1;
					i && d.minute(59).isBefore(i) && (m = !0), s && d.minute(0).isAfter(s) && (m = !0), e += c != a.hour() || m ? m ? '<option value="' + l + '" disabled="disabled" class="disabled">' + l + "</option>" : '<option value="' + l + '">' + l + "</option>" : '<option value="' + l + '" selected="selected">' + l + "</option>"
				}
				for (e += "</select> ", e += ': <select class="minuteselect">', l = 0; 60 > l; l += this.timePickerIncrement) {
					var p = 10 > l ? "0" + l : l;
					d = a.clone().minute(l), m = !1, i && d.second(59).isBefore(i) && (m = !0), s && d.second(0).isAfter(s) && (m = !0), e += a.minute() != l || m ? m ? '<option value="' + l + '" disabled="disabled" class="disabled">' + p + "</option>" : '<option value="' + l + '">' + p + "</option>" : '<option value="' + l + '" selected="selected">' + p + "</option>"
				}
				if (e += "</select> ", this.timePickerSeconds) {
					for (e += ': <select class="secondselect">', l = 0; 60 > l; l++) p = 10 > l ? "0" + l : l, d = a.clone().second(l), m = !1, i && d.isBefore(i) && (m = !0), s && d.isAfter(s) && (m = !0), e += a.second() != l || m ? m ? '<option value="' + l + '" disabled="disabled" class="disabled">' + p + "</option>" : '<option value="' + l + '">' + p + "</option>" : '<option value="' + l + '" selected="selected">' + p + "</option>";
					e += "</select> "
				}
				if (!this.timePicker24Hour) {
					e += '<select class="ampmselect">';
					var f = "",
						u = "";
					i && a.clone().hour(12).minute(0).second(0).isBefore(i) && (f = ' disabled="disabled" class="disabled"'), s && a.clone().hour(0).minute(0).second(0).isAfter(s) && (u = ' disabled="disabled" class="disabled"'), e += a.hour() >= 12 ? '<option value="AM"' + f + '>AM</option><option value="PM" selected="selected"' + u + ">PM</option>" : '<option value="AM" selected="selected"' + f + '>AM</option><option value="PM"' + u + ">PM</option>", e += "</select>"
				}
				this.container.find(".drp-calendar." + t + " .calendar-time").html(e)
			}
		},
		updateFormInputs: function() {
			this.singleDatePicker || this.endDate && (this.startDate.isBefore(this.endDate) || this.startDate.isSame(this.endDate)) ? this.container.find("button.applyBtn").prop("disabled", !1) : this.container.find("button.applyBtn").prop("disabled", !0)
		},
		move: function() {
			var t, a = {
					top: 0,
					left: 0
				},
				i = this.drops,
				s = e(window).width();
			switch (this.parentEl.is("body") || (a = {
					top: this.parentEl.offset().top - this.parentEl.scrollTop(),
					left: this.parentEl.offset().left - this.parentEl.scrollLeft()
				}, s = this.parentEl[0].clientWidth + this.parentEl.offset().left), i) {
				case "auto":
					(t = this.element.offset().top + this.element.outerHeight() - a.top) + this.container.outerHeight() >= this.parentEl[0].scrollHeight && (t = this.element.offset().top - this.container.outerHeight() - a.top, i = "up");
					break;
				case "up":
					t = this.element.offset().top - this.container.outerHeight() - a.top;
					break;
				default:
					t = this.element.offset().top + this.element.outerHeight() - a.top
			}
			this.container.css({
				top: 0,
				left: 0,
				right: "auto"
			});
			var n = this.container.outerWidth();
			if (this.container.toggleClass("drop-up", "up" == i), "left" == this.opens) {
				var r = s - this.element.offset().left - this.element.outerWidth();
				n + r > e(window).width() ? this.container.css({
					top: t,
					right: "auto",
					left: 9
				}) : this.container.css({
					top: t,
					right: r,
					left: "auto"
				})
			} else if ("center" == this.opens)(o = this.element.offset().left - a.left + this.element.outerWidth() / 2 - n / 2) < 0 ? this.container.css({
				top: t,
				right: "auto",
				left: 9
			}) : o + n > e(window).width() ? this.container.css({
				top: t,
				left: "auto",
				right: 0
			}) : this.container.css({
				top: t,
				left: o,
				right: "auto"
			});
			else {
				var o;
				(o = this.element.offset().left - a.left) + n > e(window).width() ? this.container.css({
					top: t,
					left: "auto",
					right: 0
				}) : this.container.css({
					top: t,
					left: o,
					right: "auto"
				})
			}
		},
		show: function(t) {
			this.isShowing || (this._outsideClickProxy = e.proxy(function(t) {
				this.outsideClick(t)
			}, this), e(document).on("mousedown.daterangepicker", this._outsideClickProxy).on("touchend.daterangepicker", this._outsideClickProxy).on("click.daterangepicker", "[data-toggle=dropdown]", this._outsideClickProxy).on("focusin.daterangepicker", this._outsideClickProxy), e(window).on("resize.daterangepicker", e.proxy(function(t) {
				this.move(t)
			}, this)), this.oldStartDate = this.startDate.clone(), this.oldEndDate = this.endDate.clone(), this.previousRightTime = this.endDate.clone(), this.updateView(), this.container.show(), this.move(), this.element.trigger("show.daterangepicker", this), this.isShowing = !0)
		},
		hide: function(t) {
			this.isShowing && (this.endDate || (this.startDate = this.oldStartDate.clone(), this.endDate = this.oldEndDate.clone()), this.startDate.isSame(this.oldStartDate) && this.endDate.isSame(this.oldEndDate) || this.callback(this.startDate.clone(), this.endDate.clone(), this.chosenLabel), this.updateElement(), e(document).off(".daterangepicker"), e(window).off(".daterangepicker"), this.container.hide(), this.element.trigger("hide.daterangepicker", this), this.isShowing = !1)
		},
		toggle: function(t) {
			this.isShowing ? this.hide() : this.show()
		},
		outsideClick: function(t) {
			var a = e(t.target);
			"focusin" == t.type || a.closest(this.element).length || a.closest(this.container).length || a.closest(".calendar-table").length || (this.hide(), this.element.trigger("outsideClick.daterangepicker", this))
		},
		showCalendars: function() {
			this.container.addClass("show-calendar"), this.move(), this.element.trigger("showCalendar.daterangepicker", this)
		},
		hideCalendars: function() {
			this.container.removeClass("show-calendar"), this.element.trigger("hideCalendar.daterangepicker", this)
		},
		clickRange: function(t) {
			var e = t.target.getAttribute("data-range-key");
			if (this.chosenLabel = e, e == this.locale.customRangeLabel) this.showCalendars();
			else {
				var a = this.ranges[e];
				this.startDate = a[0], this.endDate = a[1], this.timePicker || (this.startDate.startOf("day"), this.endDate.endOf("day")), this.alwaysShowCalendars || this.hideCalendars(), this.clickApply()
			}
		},
		clickPrev: function(t) {
			e(t.target).parents(".drp-calendar").hasClass("left") ? (this.leftCalendar.month.subtract(1, "month"), this.linkedCalendars && this.rightCalendar.month.subtract(1, "month")) : this.rightCalendar.month.subtract(1, "month"), this.updateCalendars()
		},
		clickNext: function(t) {
			e(t.target).parents(".drp-calendar").hasClass("left") ? this.leftCalendar.month.add(1, "month") : (this.rightCalendar.month.add(1, "month"), this.linkedCalendars && this.leftCalendar.month.add(1, "month")), this.updateCalendars()
		},
		hoverDate: function(t) {
			if (e(t.target).hasClass("available")) {
				var a = e(t.target).attr("data-title"),
					i = a.substr(1, 1),
					s = a.substr(3, 1),
					n = e(t.target).parents(".drp-calendar").hasClass("left") ? this.leftCalendar.calendar[i][s] : this.rightCalendar.calendar[i][s],
					r = this.leftCalendar,
					o = this.rightCalendar,
					h = this.startDate;
				this.endDate || this.container.find(".drp-calendar tbody td").each(function(t, a) {
					if (!e(a).hasClass("week")) {
						var i = e(a).attr("data-title"),
							s = i.substr(1, 1),
							l = i.substr(3, 1),
							c = e(a).parents(".drp-calendar").hasClass("left") ? r.calendar[s][l] : o.calendar[s][l];
						c.isAfter(h) && c.isBefore(n) || c.isSame(n, "day") ? e(a).addClass("in-range") : e(a).removeClass("in-range")
					}
				})
			}
		},
		clickDate: function(t) {
			if (e(t.target).hasClass("available")) {
				var a = e(t.target).attr("data-title"),
					i = a.substr(1, 1),
					s = a.substr(3, 1),
					n = e(t.target).parents(".drp-calendar").hasClass("left") ? this.leftCalendar.calendar[i][s] : this.rightCalendar.calendar[i][s];
				if (this.endDate || n.isBefore(this.startDate, "day")) {
					if (this.timePicker) {
						var r = parseInt(this.container.find(".left .hourselect").val(), 10);
						this.timePicker24Hour || ("PM" === (l = this.container.find(".left .ampmselect").val()) && 12 > r && (r += 12), "AM" === l && 12 === r && (r = 0));
						var o = parseInt(this.container.find(".left .minuteselect").val(), 10);
						isNaN(o) && (o = parseInt(this.container.find(".left .minuteselect option:last").val(), 10));
						var h = this.timePickerSeconds ? parseInt(this.container.find(".left .secondselect").val(), 10) : 0;
						n = n.clone().hour(r).minute(o).second(h)
					}
					this.endDate = null, this.setStartDate(n.clone())
				} else if (!this.endDate && n.isBefore(this.startDate)) this.setEndDate(this.startDate.clone());
				else {
					if (this.timePicker) {
						var l;
						r = parseInt(this.container.find(".right .hourselect").val(), 10), this.timePicker24Hour || ("PM" === (l = this.container.find(".right .ampmselect").val()) && 12 > r && (r += 12), "AM" === l && 12 === r && (r = 0)), o = parseInt(this.container.find(".right .minuteselect").val(), 10), isNaN(o) && (o = parseInt(this.container.find(".right .minuteselect option:last").val(), 10)), h = this.timePickerSeconds ? parseInt(this.container.find(".right .secondselect").val(), 10) : 0, n = n.clone().hour(r).minute(o).second(h)
					}
					this.setEndDate(n.clone()), this.autoApply && (this.calculateChosenLabel(), this.clickApply())
				}
				this.singleDatePicker && (this.setEndDate(this.startDate), !this.timePicker && this.autoApply && this.clickApply()), this.updateView(), t.stopPropagation()
			}
		},
		calculateChosenLabel: function() {
			var t = !0,
				e = 0;
			for (var a in this.ranges) {
				if (this.timePicker) {
					var i = this.timePickerSeconds ? "YYYY-MM-DD HH:mm:ss" : "YYYY-MM-DD HH:mm";
					if (this.startDate.format(i) == this.ranges[a][0].format(i) && this.endDate.format(i) == this.ranges[a][1].format(i)) {
						t = !1, this.chosenLabel = this.container.find(".ranges li:eq(" + e + ")").addClass("active").attr("data-range-key");
						break
					}
				} else if (this.startDate.format("YYYY-MM-DD") == this.ranges[a][0].format("YYYY-MM-DD") && this.endDate.format("YYYY-MM-DD") == this.ranges[a][1].format("YYYY-MM-DD")) {
					t = !1, this.chosenLabel = this.container.find(".ranges li:eq(" + e + ")").addClass("active").attr("data-range-key");
					break
				}
				e++
			}
			t && (this.showCustomRangeLabel ? this.chosenLabel = this.container.find(".ranges li:last").addClass("active").attr("data-range-key") : this.chosenLabel = null, this.showCalendars())
		},
		clickApply: function(t) {
			this.hide(), this.element.trigger("apply.daterangepicker", this)
		},
		clickCancel: function(t) {
			this.startDate = this.oldStartDate, this.endDate = this.oldEndDate, this.hide(), this.element.trigger("cancel.daterangepicker", this)
		},
		monthOrYearChanged: function(t) {
			var a = e(t.target).closest(".drp-calendar").hasClass("left"),
				i = a ? "left" : "right",
				s = this.container.find(".drp-calendar." + i),
				n = parseInt(s.find(".monthselect").val(), 10),
				r = s.find(".yearselect").val();
			a || (r < this.startDate.year() || r == this.startDate.year() && n < this.startDate.month()) && (n = this.startDate.month(), r = this.startDate.year()), this.minDate && (r < this.minDate.year() || r == this.minDate.year() && n < this.minDate.month()) && (n = this.minDate.month(), r = this.minDate.year()), this.maxDate && (r > this.maxDate.year() || r == this.maxDate.year() && n > this.maxDate.month()) && (n = this.maxDate.month(), r = this.maxDate.year()), a ? (this.leftCalendar.month.month(n).year(r), this.linkedCalendars && (this.rightCalendar.month = this.leftCalendar.month.clone().add(1, "month"))) : (this.rightCalendar.month.month(n).year(r), this.linkedCalendars && (this.leftCalendar.month = this.rightCalendar.month.clone().subtract(1, "month"))), this.updateCalendars()
		},
		timeChanged: function(t) {
			var a = e(t.target).closest(".drp-calendar"),
				i = a.hasClass("left"),
				s = parseInt(a.find(".hourselect").val(), 10),
				n = parseInt(a.find(".minuteselect").val(), 10);
			isNaN(n) && (n = parseInt(a.find(".minuteselect option:last").val(), 10));
			var r = this.timePickerSeconds ? parseInt(a.find(".secondselect").val(), 10) : 0;
			if (!this.timePicker24Hour) {
				var o = a.find(".ampmselect").val();
				"PM" === o && 12 > s && (s += 12), "AM" === o && 12 === s && (s = 0)
			}
			if (i) {
				var h = this.startDate.clone();
				h.hour(s), h.minute(n), h.second(r), this.setStartDate(h), this.singleDatePicker ? this.endDate = this.startDate.clone() : this.endDate && this.endDate.format("YYYY-MM-DD") == h.format("YYYY-MM-DD") && this.endDate.isBefore(h) && this.setEndDate(h.clone())
			} else if (this.endDate) {
				var l = this.endDate.clone();
				l.hour(s), l.minute(n), l.second(r), this.setEndDate(l)
			}
			this.updateCalendars(), this.updateFormInputs(), this.renderTimePicker("left"), this.renderTimePicker("right")
		},
		elementChanged: function() {
			if (this.element.is("input") && this.element.val().length) {
				var e = this.element.val().split(this.locale.separator),
					a = null,
					i = null;
				2 === e.length && (a = t(e[0], this.locale.format), i = t(e[1], this.locale.format)), (this.singleDatePicker || null === a || null === i) && (i = a = t(this.element.val(), this.locale.format)), a.isValid() && i.isValid() && (this.setStartDate(a), this.setEndDate(i), this.updateView())
			}
		},
		keydown: function(t) {
			9 !== t.keyCode && 13 !== t.keyCode || this.hide(), 27 === t.keyCode && (t.preventDefault(), t.stopPropagation(), this.hide())
		},
		updateElement: function() {
			if (this.element.is("input") && this.autoUpdateInput) {
				var t = this.startDate.format(this.locale.format);
				this.singleDatePicker || (t += this.locale.separator + this.endDate.format(this.locale.format)), t !== this.element.val() && this.element.val(t).trigger("change")
			}
		},
		remove: function() {
			this.container.remove(), this.element.off(".daterangepicker"), this.element.removeData()
		}
	}, e.fn.daterangepicker = function(t, i) {
		var s = e.extend(!0, {}, e.fn.daterangepicker.defaultOptions, t);
		return this.each(function() {
			var t = e(this);
			t.data("daterangepicker") && t.data("daterangepicker").remove(), t.data("daterangepicker", new a(t, s, i))
		}), this
	}, a
});

function initAnimateInView() {
	$(window).on("DOMContentLoaded load resize scroll", animateElementsInView), animateElementsInView()
}

function animateElementsInView() {
	$("[data-animate-in-view]").each(function() {
		isElementInViewport($(this)) && $(this).addClass($(this).data("animate-in-view"))
	})
}

function isElementInViewport(e) {
	"function" == typeof jQuery && e instanceof jQuery && (e = e[0]);
	var t = e.getBoundingClientRect(),
		i = t.y,
		n = window.innerHeight - t.y - t.height,
		a = window.innerHeight;
	return i >= 0 && a >= i || n >= 0 && a >= n
}

function sliderVimeoVideo() {
	if ($(".slider__section .slider__video #vimeo-player").length > 0) {
		var e = $("iframe#vimeo-player"),
			t = new Vimeo.Player(e);
		e.attr("src").indexOf("autoplay=1") > -1 && ($("#volumeSwitch").toggleClass("off"), $("#volumeOn").fadeOut(0), $("#volumeOff").fadeIn(0), $("#volumeSwitch").prop("checked", !0)), $('.slider__video-bar input[type="checkbox"]').on("change", function() {
			t.getVolume().then(function(e) {
				0 == e || 1 == e ? (t.setVolume(.66), $("#volumeSwitch").toggleClass("on"), $("#volumeSwitch").toggleClass("off"), $("#volumeOff").fadeOut(0), $("#volumeOn").fadeIn(0), $("#volumeSwitch").prop("checked", !1)) : (t.setVolume(0), $("#volumeSwitch").toggleClass("on"), $("#volumeSwitch").toggleClass("off"), $("#volumeOff").fadeIn(0), $("#volumeOn").fadeOut(0), $("#volumeSwitch").prop("checked", !0))
			})
		})
	}
}

function coverViewport(e, t) {
	if ($(window).innerWidth() <= 1920) return $(e).css("height", ""), $(e).css("width", ""), void $(e).css("top", "");
	"undefined" == typeof t && (t = !1);
	var i, n;
	t ? (i = $(e).parent().innerWidth(), n = $(e).parent().innerHeight()) : (i = $(window).innerWidth(), n = $(window).innerHeight());
	var a = $(e),
		s = a.attr("width"),
		o = a.attr("height"),
		r = n / i,
		l = o / s,
		d = s / o * n,
		c = o / s * i;
	r > l ? (a.css("height", n), a.css("width", d), a.css("top", "0")) : l > r ? (a.css("width", i), a.css("height", c), a.css("top", "-" + (c - n) / 2 + "px")) : (a.css("height", n), a.css("width", i), a.css("top", "0"))
}

function homeVideoAnimation() {
	var e = $(".slider__video"),
		t = -24.3155;
	e.addClass("slider__video-half"), $(window).on("scroll", function() {
		var i = $(this).scrollTop(),
			n = $("header").innerHeight();
		if (n >= i) {
			e.addClass("slider__video-half");
			var a = i / n,
				s = t + a * Math.abs(t);
			e.css("transform", "translateY(" + s + "%) translateX(-50%)"), $(".slider__video").removeClass("slider__video-animate"), $("header").removeClass("header__animate")
		} else $(".slider__video").addClass("slider__video-animate"), $("header").addClass("header__animate"), e.removeClass("slider__video-half"), e.css("transform", "translateY(0%) translateX(-50%)")
	}), $(".slider__video iframe").length > 0 && (coverViewport(".slider__video iframe", !0), $(window).on("resize", function() {
		coverViewport(".slider__video iframe", !0)
	}))
}

function setArrowHeight(e, t) {
	var i = $(e).outerHeight();
	$(t).css("--arrow-height", i + "px")
}

function sliderWithFilter() {
	function e() {
		var e = i.parent(),
			t = $(window).innerWidth();
		t > 767 ? e.css("width", $(window).innerWidth() - e.offset().left) : e.css("width", "")
	}
	var t = $(".sliderfilter__item");
	if (0 != t.length) {
		var i = $(".sliderfilter__slider");
		$(t).on("click", function() {
			$(".sliderfilter__item.active").removeClass("active"), $(this).addClass("active")
		}), $(t).on("click", function() {
			var e = $(this).data("filter");
			$(i).slick("slickUnfilter"), "all" != e ? $(i).slick("slickFilter", "." + e) : $(i).slick("slickUnfilter")
		}), $(i).slick({
			autoplay: !1,
			autoplaySpeed: 1200,
			arrows: !0,
			dots: !1,
			infinite: !0,
			slidesToShow: 2,
			slidesToScroll: 1,
			speed: 2e3,
			variableWidth: !0,
			responsive: [{
				breakpoint: 1366,
				settings: {
					slidesToShow: 1
				}
			}]
		}), e(), window.addEventListener("resize", function() {
			e()
		})
	}
}

function accommodationSliderWithFilter() {
	function e() {
		setArrowHeight(".accommodation-sliderfilter__slide-image", ".accommodation-sliderfilter__slider")
	}
	var t = $(".accommodation-sliderfilter__tabs-btn");
	if (0 != t.length) {
		var i = $(".accommodation-sliderfilter__slider");
		$(t).on("click", function() {
			$(".accommodation-sliderfilter__tabs-btn.active").removeClass("active"), $(this).addClass("active")
		}), $(t).on("click", function() {
			var e = $(this).data("filter");
			$(i).slick("slickUnfilter"), "all" != e ? $(i).slick("slickFilter", "." + e) : $(i).slick("slickUnfilter")
		}), $(i).slick({
			dots: !1,
			autoplay: !0,
			arrows: !0,
			infinite: !0,
			slidesToShow: 3,
			slidesToScroll: 1,
			speed: 2e3,
			centerMode: !0,
			centerPadding: !1,
			responsive: [{
				breakpoint: 1200,
				settings: {
					slidesToShow: 2
				}
			}, {
				breakpoint: 768,
				settings: {
					slidesToShow: 1
				}
			}]
		}), e(), window.addEventListener("resize", e)
	}
}

function initializeSingleSlideSliders(e, t) {
	$("." + e + " ." + t).length > 1 && ($("." + e).hasClass("slick-initialized") && $("." + e).slick("destroy"), $("." + e).slick({
		autoplay: !1,
		arrows: !0,
		dots: !1,
		infinite: !0,
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 2e3
	}))
}

function initializeSliders() {
	function e() {
		setArrowHeight(".offers__slide-image", ".offers__slider")
	}

	function t() {
		setArrowHeight(".experiences__slide-image", ".experiences__slider")
	}

	function i() {
		setArrowHeight(".accommodation__slide-image", ".accommodation__slider")
	}

	function n() {
		setArrowHeight(".calendar-event__slide-image", ".calendar-event__slider")
	}

	function a() {
		setArrowHeight(".weddingCelebration__slide-image", ".weddingCelebration__slider")
	}

	function s() {
		setArrowHeight(".content-more__slide-image", ".content-more__slider")
	}

	function o() {
		setArrowHeight(".gallery__slide-image", ".gallery__slider")
	}

	function r() {
		setArrowHeight(".hub__slide-image", ".hub__slider")
	}
	$(".slider__carousel .slider__carousel-slide").length > 0 && $(".slider__carousel").slick({
		autoplay: !0,
		autoplaySpeed: 2e3,
		arrows: !1,
		dots: !0,
		infinite: !0,
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 1500
	}), $(".offers__slider .offers__slide").length > 0 && ($(".offers__slider").slick({
		autoplay: !0,
		autoplaySpeed: 1200,
		dots: !1,
		infinite: !0,
		slidesToShow: 2,
		slidesToScroll: 1,
		speed: 2e3,
		responsive: [{
			breakpoint: 992,
			settings: {
				slidesToShow: 1
			}
		}]
	}), e(), window.addEventListener("resize", e)), $(".experiences__slider").length > 0 && ($(".experiences__slider").each(function(e, t) {
		var i = $(t).find(".experiences__slide").length;
		i > 0 && $(t).slick({
			autoplay: !0,
			autoplaySpeed: 1200,
			dots: !1,
			infinite: !0,
			slidesToShow: 3,
			slidesToScroll: 1,
			speed: 2e3,
			centerMode: i > 1,
			centerPadding: !1,
			responsive: [{
				breakpoint: 1200,
				settings: {
					slidesToShow: 2
				}
			}, {
				breakpoint: 768,
				settings: {
					slidesToShow: 1
				}
			}]
		})
	}), t(), window.addEventListener("resize", t)), $(".accommodation__slider").length > 0 && ($(".accommodation__slider").each(function(e, t) {
		var i = $(t).find(".accommodation__slide").length;
		i > 0 && $(t).slick({
			dots: !1,
			infinite: !0,
			slidesToShow: 3,
			slidesToScroll: 1,
			speed: 2e3,
			centerMode: i > 1,
			centerPadding: !1,
			responsive: [{
				breakpoint: 1200,
				settings: {
					slidesToShow: 2
				}
			}, {
				breakpoint: 768,
				settings: {
					slidesToShow: 1
				}
			}]
		})
	}), i(), window.addEventListener("resize", i)), $(".calendar-event__slider").length > 0 && ($(".calendar-event__slider").each(function(e, t) {
		var i = $(t).find(".calendar-event__slide").length;
		i > 0 && $(t).slick({
			dots: !1,
			autoplay: !0,
			arrows: !0,
			infinite: !0,
			slidesToShow: 3,
			slidesToScroll: 1,
			speed: 2e3,
			centerMode: i > 1,
			centerPadding: !1,
			responsive: [{
				breakpoint: 1200,
				settings: {
					slidesToShow: 2
				}
			}, {
				breakpoint: 768,
				settings: {
					slidesToShow: 1
				}
			}]
		})
	}), n(), window.addEventListener("resize", n)), $(".weddingCelebration__slider").length > 0 && ($(".weddingCelebration__slider").each(function(e, t) {
		var i = $(t).find(".weddingCelebration__slide").length;
		i > 0 && $(t).slick({
			autoplay: !0,
			autoplaySpeed: 1200,
			dots: !1,
			infinite: !0,
			slidesToShow: 3,
			slidesToScroll: 1,
			speed: 2e3,
			centerMode: i > 1,
			centerPadding: !1,
			responsive: [{
				breakpoint: 1200,
				settings: {
					slidesToShow: 2
				}
			}, {
				breakpoint: 768,
				settings: {
					slidesToShow: 1
				}
			}]
		})
	}), a(), window.addEventListener("resize", a)), $(".content-more__slider").length > 0 && ($(".content-more__slider").each(function(e, t) {
		var i = $(t).find(".content-more__slide").length;
		i > 0 && $(t).slick({
			dots: !1,
			autoplay: !0,
			arrows: !0,
			infinite: !0,
			slidesToShow: 3,
			slidesToScroll: 1,
			speed: 2e3,
			centerMode: i > 1,
			centerPadding: !1,
			responsive: [{
				breakpoint: 1200,
				settings: {
					slidesToShow: 2
				}
			}, {
				breakpoint: 768,
				settings: {
					slidesToShow: 1
				}
			}]
		})
	}), s(), window.addEventListener("resize", s)), $(".gallery__slider").length > 0 && ($(".gallery__slider").each(function(e, t) {
		var i = $(t).find(".gallery__slide").length;
		i > 0 && $(t).slick({
			autoplay: !0,
			autoplaySpeed: 1200,
			dots: !1,
			infinite: !0,
			slidesToShow: 3,
			slidesToScroll: 1,
			speed: 2e3,
			centerMode: i > 1,
			centerPadding: !1,
			responsive: [{
				breakpoint: 1200,
				settings: {
					slidesToShow: 2
				}
			}, {
				breakpoint: 768,
				settings: {
					slidesToShow: 1
				}
			}]
		})
	}), o(), window.addEventListener("resize", o)), $(".hub__slider").length > 0 && ($(".hub__slider").each(function(e, t) {
		var i = $(t).find(".hub__slide").length;
		i > 0 && $(t).slick({
			dots: !1,
			infinite: !0,
			slidesToShow: 3,
			slidesToScroll: 1,
			speed: 2e3,
			centerMode: i > 1,
			centerPadding: !1,
			responsive: [{
				breakpoint: 1200,
				settings: {
					slidesToShow: 2
				}
			}, {
				breakpoint: 768,
				settings: {
					slidesToShow: 1
				}
			}]
		})
	}), r(), window.addEventListener("resize", r)), $(".social-marquee__lfr").length > 0 && $(".social-marquee__lfr").slick({
		autoplay: !0,
		autoplaySpeed: 0,
		arrows: !1,
		dots: !1,
		infinite: !0,
		cssEase: "linear",
		centerMode: !0,
		variableWidth: !0,
		pauseOnHover: !0,
		speed: 7500
	}), $(".social-marquee__rfl").length > 0 && $(".social-marquee__rfl").slick({
		autoplay: !0,
		autoplaySpeed: 0,
		arrows: !1,
		dots: !1,
		infinite: !0,
		cssEase: "linear",
		centerMode: !0,
		variableWidth: !0,
		pauseOnHover: !0,
		rtl: !0,
		speed: 7500
	}), initializeSingleSlideSliders("accommodation-gallery__slider", "accommodation-gallery__slide"), initializeSingleSlideSliders("calendar-gallery__slider", "calendar-gallery__slide"), initializeSingleSlideSliders("gridfilter__experiences-item-slider", "gridfilter__experiences-item-slide"), initializeSingleSlideSliders("content-slider__items", "content-slider__item")
}

function initializeStickyHeader() {
	window.addEventListener("scroll", function() {
		var e = 0;
		$(".slider__section").length > 0 ? e = $(".slider__section").innerHeight() : $(".single > header").length > 0 && (e = $(".single > header").innerHeight()), 0 == e || window.scrollY > e ? $("header").addClass("header__sticky") : window.scrollY < e - 50 && $("header").removeClass("header__sticky")
	})
}

function resortDropdown() {
	$(".offcanvas__resort-selected").on("show.bs.dropdown", function() {
		$(".offcanvas__main-nav .navbar-nav").addClass("invisible")
	}), $(".offcanvas__resort-selected").on("hide.bs.dropdown", function() {
		$(".offcanvas__main-nav .navbar-nav").removeClass("invisible")
	})
}

function offerFilter() {
	var e = $(".offerfilter__tabs-btn"),
		t = $(".offerfilter__item");
	$(e).on("click", function() {
		var i = $(this).data("filter");
		$(e).removeClass("active"), $(this).addClass("active"), $(t).hide(), "all" === i ? $(t).show() : $("." + i).show()
	})
}

function generateMonths() {
	const e = new Date;
	for (var t = e.getMonth(), i = e.getFullYear(), n = "", a = 0; 12 > a; a++) {
		var s = (t + a) % 12,
			o = i + Math.floor((t + a) / 12);
		0 !== a && 0 !== s || (n += "<label>" + o + "</label>");
		var r = "";
		0 === a && (r = " active"), n += '<button class="btn btn-outline-black' + r + '" data-month="' + s + '">' + months[s] + "</button>"
	}
	return n
}

function fancySelectBox(e) {
	$("." + e + "select select").each(function(t, i) {
		$(this).parent().after().append('<div class="' + e + 'select-list"><div class="' + e + 'select-option"></div><ul></ul></div>'), $(i).each(function(t, i) {
			$("option", i).each(function(t, i) {
				$(i).is(":disabled") || $("." + e + "select-list ul:last").append('<li data-value="' + $(i).val() + '">' + i.text + "</li>")
			}), $("." + e + "select-list ul").hide()
		});
		var n = $(this).find("option:selected").text();
		$("." + e + "select-list:last").children("div." + e + "select-option").text(n)
	}), $("." + e + "select-option").on("click", function() {
		$(this).next("ul").slideToggle(200), $("." + e + "select-option").not(this).next("ul").hide()
	}), $("." + e + "select-list ul li").on("click", function() {
		var t = $(this).text(),
			i = $(this).data("value");
		$(this).parent().prev("." + e + "select-option").text(t), $(this).closest("." + e + "select-list").prev("select").val(i).trigger("change"), $(this).parent("ul").hide(), enableButton()
	}), $("." + e + "select-list").show(), $("." + e + "select select").addClass("d-none")
}

function enableButton() {
	if ($("#resort").length > 0) {
		var e = $("#resort").val() || "",
			t = $("#check_in").val() || "",
			i = $("#check_out").val() || "",
			n = $("#guests").val() || "";
		"" !== e && "" !== t && "" !== i && "" !== n ? $("#checkAvailability").prop("disabled", !1) : $("#checkAvailability").prop("disabled", !0)
	}
}

function bookingWidget() {
	function e() {
		$("#check_in_text").val("Add Dates"), $("#check_out_text").val("Add Dates"), $("#check_in").val(""), $("#check_out").val(""), $("#date").val("Check In – Check Out"), $("#nightsCount").text(1);
		var e = new Date;
		$(".static-search__datepicker-range").data("daterangepicker").setStartDate(e), $(".static-search__datepicker-range").data("daterangepicker").setEndDate(new Date(e.getFullYear, e.getMonth() - 1, e.getDate() + 1)), $(".static-search__datepicker-range").data("daterangepicker").updateCalendars(), $(".static-search__datepicker-range").click(), $(".static-search__datepicker-month-selection .btn").removeClass("active"), $(".static-search__datepicker-month-selection .btn").eq(0).addClass("active")
	}

	function t() {
		var e = parseInt($("#nightsCount").text()),
			t = $(".static-search__datepicker-month-selection .btn.active"),
			i = t.attr("data-month"),
			n = t.prevAll("label").eq(0).text(),
			a = new Date(n, i, 1),
			s = new Date(n, i, 1 + e);
		$("#date").val(t.text() + " " + n), $("#check_in_text").val(days[a.getDay()] + ", " + a.toLocaleString("default", {
			month: "short"
		}) + " " + a.getFullYear().toString().slice(-2)), $("#check_out_text").val(days[s.getDay()] + ", " + s.toLocaleString("default", {
			month: "short"
		}) + " " + s.getFullYear().toString().slice(-2)), $("#check_in").val(a.getFullYear() + "/" + ("0" + (a.getMonth() + 1)).slice(-2) + "/" + ("0" + a.getDate()).slice(-2)), $("#check_out").val(s.getFullYear() + "/" + ("0" + (s.getMonth() + 1)).slice(-2) + "/" + ("0" + s.getDate()).slice(-2)), $(".static-search__datepicker-range").data("daterangepicker").setStartDate(a), $(".static-search__datepicker-range").data("daterangepicker").setEndDate(s), $(".static-search__datepicker-range").data("daterangepicker").updateCalendars()
	}
	fancySelectBox("static-search__"), $(".static-search__datepicker-range").daterangepicker({
		alwaysShowCalendars: !0,
		autoUpdateInput: !1,
		locale: {
			format: "ddd, MMM YY",
			day: "long",
			month: "long",
			year: "numeric",
			cancelLabel: "Reset"
		}
	}), $(".static-search__datepicker-range").on("apply.daterangepicker", function(e, t) {
		$("#check_in_text").val(t.startDate.format("ddd, MMM YY")), $("#check_out_text").val(t.endDate.format("ddd, MMM YY")), $("#check_in").val(t.startDate.format("YYYY-MM-DD")), $("#check_out").val(t.endDate.format("YYYY-MM-DD")), $("#date").val(t.startDate.format("ddd, MMM YY") + " - " + t.endDate.format("ddd, MMM YY")), $(".static-search__datepicker-range").click(), enableButton()
	}), $(".static-search__datepicker-range").on("cancel.daterangepicker", function(t, i) {
		e()
	}), $(".static-search__datepicker #date").on("click", function() {
		"" == $("#check_in_text").val() && $("#check_in_text").val("Add Dates"), "" == $("#check_out_text").val() && $("#check_out_text").val("Add Dates"), $(".static-search__select-list ul").hide(), $(".static-search__datepicker-dropdown").toggleClass("open"), $(".static-search__datepicker-range").click()
	}), $(document).mouseup(function(e) {
		var t = $("#date"),
			i = $(".static-search__datepicker-dropdown");
		i.is(e.target) || 0 !== i.has(e.target).length || t.is(e.target) ? $(".static-search__datepicker-range").click() : $(".static-search__datepicker-dropdown").removeClass("open")
	}), $(".static-search__datepicker-info").length > 0 && $(".static-search__datepicker-info").prepend($(".daterangepicker.show-calendar")), $('button[role="tab"]').on("show.bs.tab", function() {
		$(".static-search__datepicker-range").click()
	}), $(".static-search__datepicker-month-selection").append(generateMonths()), $(".static-search__datepicker-month-selection .btn").on("click", function(e) {
		e.preventDefault(), $(".static-search__datepicker-month-selection .btn").removeClass("active"), $(this).addClass("active"), t()
	}), $("#increaseNights").on("click", function(e) {
		e.preventDefault();
		var i = parseInt($("#nightsCount").text());
		31 > i && (i += 1, $("#nightsCount").text(i), t())
	}), $("#decreaseNights").on("click", function(e) {
		e.preventDefault();
		var i = parseInt($("#nightsCount").text());
		i > 1 && (i -= 1, $("#nightsCount").text(i), t())
	}), $(".cancelBtn").on("click", function(t) {
		t.preventDefault(), e()
	}), $(".doneBtn").on("click", function(e) {
		e.preventDefault(), $(".static-search__datepicker-dropdown").toggleClass("open"), enableButton()
	}), /*$("#checkAvailability").on("click", function(e) {
		e.preventDefault();
		var t = $("#resort option:selected").attr("data-url"),
			i = $("#mobileView").val(),
			n = $("#desktopView").val(),
			a = $("#check_in").val(),
			s = $("#check_out").val(),
			o = $("#hiddenGuest").val();
			console.log("i:",1 , " | n:", n);
		if (t) {
			var r = !1;
			window.innerWidth < 768 && "true" == i ? r = !0 : "true" == n && (r = !0), t = t + "&level=hotel&currency=USD" + o + "&arrive=" + a + "&depart=" + s, r ? window.open(t, "_blank") : window.location.href = t
		}
	})*/
	$("#checkAvailability").on("click", function(e) {
		e.preventDefault();
		var url      = $("#resort option:selected").attr("data-url");
		var checkIn  = $("#check_in").val();
		var checkOut = $("#check_out").val();
		var guests   = $("#hiddenGuest").val();

		if (!url) return;

		// build the full booking URL
		url = url
			+ "&level=hotel"
			+ "&currency=USD"
			+ guests
			+ "&arrive=" + checkIn
			+ "&depart=" + checkOut;

		// detect mobile vs desktop
		var isMobile  = window.innerWidth < 768;
		var isDesktop = !isMobile;

		// on desktop open in new tab, on mobile navigate in-place
		if (isDesktop) {
			window.open(url, "_blank", "noopener,noreferrer");
		} else {
			window.location.href = url;
		}
	});
}
// toggle dropdown when clicking the guests field
$("#guests").on("click", function(e) {
	e.preventDefault();
	$("#guestsDropdown").slideDown();
});

// close dropdown when clicking outside
$(document).mouseup(function(evt) {
	var dropdown = $("#guestsDropdown");
	if (
		!dropdown.is(evt.target) &&
		dropdown.has(evt.target).length === 0 &&
		!$("#guests").is(evt.target)
	) {
		dropdown.slideUp();
	}
});

// close dropdown on Escape key
$(document).on("keydown", function(e) {
	if (e.key === "Escape") {
		$("#guestsDropdown").slideUp();
	}
});

// close dropdown when focus leaves it
$("#guestsDropdown").on("focusout", function(e) {
	var to = e.relatedTarget;
	if (
		!to ||
		($(to).closest("#guestsDropdown").length === 0 && !$(to).is("#guests"))
	) {
		$("#guestsDropdown").slideUp();
	}
});

// Update button, hide the dropdown
$("#updateRoomsBtn").on("click", function(e) {
	e.preventDefault();
	$("#guestsDropdown").slideUp();
	var raw = $("#summaryText").text();
	var clean = raw.replace(/\s+/g, " ").trim();
	console.log(clean);  // "1 Room | 2 Adults, 0 Children"
	$("#guests").val(clean);
	function generateRoomParams() {
		var sections   = document.querySelectorAll("#roomsContainer .room-section");
		var roomCount  = sections.length;
		var adults     = [];
		var children   = [];

		sections.forEach(function(sec) {
			var a = sec.querySelector(".number-adults").textContent.trim();
			var c = sec.querySelector(".number-children").textContent.trim();
			adults.push(a);
			children.push(c);
		});

		return "&Rooms="  + roomCount +
			"&adult="   + adults.join(",") +
			"&child="   + children.join(",");
	}

	// Example usage:
	var params = generateRoomParams();
	$("#hiddenGuest").val(params);
});

// room‐section logic (same as before, just no modal)
$(document).ready(function() {
    var roomsContainer    = $("#roomsContainer");
    if (!roomsContainer.length) return;

    var addRoomBtn        = $("#addRoomBtn");
    var summaryText       = $("#summaryText");
    var roomsCountSpan    = summaryText.find(".number-rooms");    // ← here
    var totalAdultsSpan   = summaryText.find(".total-adults");
    var totalChildrenSpan = summaryText.find(".total-children");

    // delegate remove-room once, outside of updateSummary
    roomsContainer.on("click", ".remove-room", function(e) {
        e.preventDefault();
        $(this).closest(".room-section").remove();
        updateSummary();
    });

    function updateSummary() {
        var totalAdults   = 0;
        var totalChildren = 0;
        var sections      = roomsContainer.find(".room-section");

        sections.each(function() {
            var sec = $(this);
            totalAdults   += parseInt(sec.find(".number-adults").text(),   10);
            totalChildren += parseInt(sec.find(".number-children").text(), 10);
        });

        roomsCountSpan.text(sections.length);
        totalAdultsSpan.text(totalAdults);
        totalChildrenSpan.text(totalChildren);

        if (sections.length >= 4) {
            addRoomBtn.hide();
        } else {
            addRoomBtn.show();
        }
    }

    function bindSectionControls(section) {
        var adultsSpan   = section.find(".number-adults");
        var childrenSpan = section.find(".number-children");

        section.find(".decrement-adult").on("click", function(e) {
            e.preventDefault();
            var cur = parseInt(adultsSpan.text(), 10);
            if (cur > 0) {
                adultsSpan.text(--cur);
                updateSummary();
            }
        });
        section.find(".increment-adult").on("click", function(e) {
            e.preventDefault();
            var cur = parseInt(adultsSpan.text(), 10);
            if (cur < 9) {
                adultsSpan.text(++cur);
                updateSummary();
            }
        });
        section.find(".decrement-child").on("click", function(e) {
            e.preventDefault();
            var cur = parseInt(childrenSpan.text(), 10);
            if (cur > 0) {
                childrenSpan.text(--cur);
                updateSummary();
            }
        });
        section.find(".increment-child").on("click", function(e) {
            e.preventDefault();
            var cur = parseInt(childrenSpan.text(), 10);
            if (cur < 9) {
                childrenSpan.text(++cur);
                updateSummary();
            }
        });
    }

    // bind controls on existing rooms
    roomsContainer.find(".room-section").each(function() {
        bindSectionControls($(this));
    });

    // initial summary & button visibility
    updateSummary();

    // add another room (max 4)
    addRoomBtn.on("click", function(e) {
        e.preventDefault();
        var sections = roomsContainer.find(".room-section");
        var count    = sections.length;

        if (count >= 4) return;

        var template = sections.first();
        var clone    = template.clone();
        var newIdx   = count + 1;

        clone.find("h6").text("Room " + newIdx);
        clone.find(".number-adults").text("2");
        clone.find(".number-children").text("0");
        // if you have a remove link in your template, make sure it has class .remove-room

        roomsContainer.append(clone);
        bindSectionControls(clone);
        updateSummary();
    });
});



function initializeSliderAndAccordion(e, t, i, n, a) {
	function s(e) {
		var s = $(t + " " + a).eq(e).find(i);
		$(t + " " + i).removeClass("active"), s.addClass("active").next().slideDown(100), $(n).not(s.next()).slideUp(100)
	}
	var o = $(e);
	o.slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 600,
		arrows: !0,
		dots: !1,
		prevArrow: '<button class="slick-prev-arrow"></button>',
		nextArrow: '<button class="slick-next-arrow"></button>',
		responsive: [{
			breakpoint: 768,
			settings: {
				arrows: !0
			}
		}]
	}), o.on("beforeChange", function(e, t, i, n) {
		s(n)
	}), $(t).on("click", i, function() {
		if (!$(this).hasClass("active")) {
			$(t + " " + i).removeClass("active");
			var e = $(this).parent().index();
			o.slick("slickGoTo", e), $(this).toggleClass("active").next().slideDown(100), $(n).not($(this).next()).slideUp(100)
		}
	}), s(0)
}

function contentFilter(e) {
	function t() {
		var t = s.val();
		s.length > 1 && s.each(function(e, i) {
			$(i).hasClass("active") && $(i).data("filter") && (t = $(i).data("filter"))
		});
		const i = r.filter(function() {
			return "all" === t || $(this).hasClass(t)
		}).length;
		o.parent().toggle(i > d), ".gridfilter__experiences-item" == e.items && ($(".gridfilter__experiences .gridfilter__experiences-item").removeClass("even"), $(".gridfilter__experiences .gridfilter__experiences-item").removeClass("odd"), $(".gridfilter__experiences .gridfilter__experiences-item:visible").each(function(e) {
			(e + 1) % 2 === 0 ? $(this).addClass("even") : $(this).addClass("odd")
		}), $(".gridfilter__experiences-item-slider").length > 0 && $(".gridfilter__experiences-item-slider").slick("reinit"))
	}

	function i(e) {
		var i = s.val();
		s.length > 1 && ($(a).removeClass("active"), $(e.target).addClass("active"), i = $(e.target).data("filter")), r.hide(), d = l, r.filter(function() {
			return "all" === i || $(this).hasClass(i)
		}).slice(0, l).show(), t()
	}

	function n() {
		var e = s.val();
		s.length > 1 && s.each(function(t, i) {
			$(i).hasClass("active") && $(i).data("filter") && (e = $(i).data("filter"))
		});
		const i = r.filter(function() {
			return "all" === e || $(this).hasClass(e)
		});
		i.slice(d, d + l).show(), d += l, t()
	}
	const a = $(e.nav),
		s = $(e.dropdown),
		o = $(e.loadMoreButton),
		r = $(e.items);
	var l = parseInt($(e.limitInput).val() || 6),
		d = l;
	r.hide().slice(0, d).show(), t(), a.on("click", i), o.on("click", function(e) {
		e.preventDefault(), n()
	})
}

function umbracoForms() {
	$(".umbraco-forms-field-wrapper label + *").focus(function() {
		$(this).closest(".umbraco-forms-field-wrapper").addClass("focused typing")
	}).blur(function() {
		"" == $(this).val() || null == $(this).val() ? $(this).closest(".umbraco-forms-field-wrapper").removeClass("focused typing") : "" == $(this).val() && null == $(this).val() || $(this).closest(".umbraco-forms-field-wrapper").addClass("focused").removeClass("typing")
	})
}
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
	months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
$(window).on("load scroll", function() {
	var e = $(".brandSignature__parallax-image, .weddingOptions__parallax-image"),
		t = e.length;
	window.requestAnimationFrame(function() {
		for (var i = 0; t > i; i++) {
			var n = e.eq(i),
				a = $(window).scrollTop(),
				s = n.offset().top,
				o = n.height(),
				r = .5 * window.innerHeight - .5 * o,
				l = a - s + r;
			n.css({
				transform: "translate3d(0," + l * -.15 + "px, 0)"
			})
		}
	})
}), $(document).ready(function() {
	function e(e) {
		e.length && $("html, body").animate({
			scrollTop: e.offset().top
		}, 800)
	}
	$("body").hasClass("homepage") && ($(window).scrollTop(0), homeVideoAnimation()), initAnimateInView(), sliderVimeoVideo(), sliderWithFilter(), accommodationSliderWithFilter(), initializeSliders(), initializeStickyHeader(), resortDropdown(), offerFilter(), bookingWidget(), fancySelectBox("gridfilter__"), $(".gridfilter__item").length > 0 && contentFilter({
		nav: ".gridfilter__filter li",
		dropdown: "#filter",
		loadMoreButton: ".gridfilter__button button",
		items: ".gridfilter__item",
		limitInput: "#gridItemsPerPage"
	}), $(".gridfilter__offer-item").length > 0 && contentFilter({
		nav: ".gridfilter__lists li",
		dropdown: ".gridfilter__list",
		loadMoreButton: ".gridfilter__button button",
		items: ".gridfilter__offer-item",
		limitInput: "#gridItemsPerPage"
	}), $(".gridfilter__experiences-item").length > 0 && contentFilter({
		nav: ".gridfilter__filter li",
		dropdown: "#filter",
		loadMoreButton: ".gridfilter__button button",
		items: ".gridfilter__experiences-item",
		limitInput: "#gridItemsPerPage"
	}), initializeSliderAndAccordion(".tabbed__slider", ".tabbed__lists", ".tabbed__heading", ".tabbed__description", ".tabbed__list"), umbracoForms(), $('a[href*="#"]').on("click", function(t) {
		var i = $(this).attr("href"),
			n = i.split("#")[1];
		n && window.location.pathname === this.pathname && (t.preventDefault(), e($("#" + n)))
	}), window.location.hash && e($(window.location.hash))
});
//# sourceMappingURL=maps/main.js.map