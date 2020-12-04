if (typeof WebFontConfig === "undefined") {
    WebFontConfig = new Object
}
WebFontConfig["google"] = {families: ["Montserrat:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic&display=swap"]};
(function () {
    var wf = document.createElement("script");
    wf.src = "https://ajax.googleapis.com/ajax/libs/webfont/1.5.3/webfont.js";
    wf.type = "text/javascript";
    wf.async = "true";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(wf, s)
})();
"undefined" == typeof jQuery.migrateMute && (jQuery.migrateMute = !0), function (a, b, c) {
    function d(c) {
        var d = b.console;
        f[c] || (f[c] = !0, a.migrateWarnings.push(c), d && d.warn && !a.migrateMute && (d.warn("JQMIGRATE: " + c), a.migrateTrace && d.trace && d.trace()))
    }

    function e(b, c, e, f) {
        if (Object.defineProperty) try {
            return void Object.defineProperty(b, c, {
                configurable: !0, enumerable: !0, get: function () {
                    return d(f), e
                }, set: function (a) {
                    d(f), e = a
                }
            })
        } catch (g) {
        }
        a._definePropertyBroken = !0, b[c] = e
    }

    a.migrateVersion = "1.4.1";
    var f = {};
    a.migrateWarnings = [], b.console && b.console.log && b.console.log("JQMIGRATE: Migrate is installed" + (a.migrateMute ? "" : " with logging active") + ", version " + a.migrateVersion), a.migrateTrace === c && (a.migrateTrace = !0), a.migrateReset = function () {
        f = {}, a.migrateWarnings.length = 0
    }, "BackCompat" === document.compatMode && d("jQuery is not compatible with Quirks Mode");
    var g = a("<input/>", {size: 1}).attr("size") && a.attrFn, h = a.attr,
        i = a.attrHooks.value && a.attrHooks.value.get || function () {
            return null
        }, j = a.attrHooks.value && a.attrHooks.value.set || function () {
            return c
        }, k = /^(?:input|button)$/i, l = /^[238]$/,
        m = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
        n = /^(?:checked|selected)$/i;
    e(a, "attrFn", g || {}, "jQuery.attrFn is deprecated"), a.attr = function (b, e, f, i) {
        var j = e.toLowerCase(), o = b && b.nodeType;
        return i && (h.length < 4 && d("jQuery.fn.attr( props, pass ) is deprecated"), b && !l.test(o) && (g ? e in g : a.isFunction(a.fn[e]))) ? a(b)[e](f) : ("type" === e && f !== c && k.test(b.nodeName) && b.parentNode && d("Can't change the 'type' of an input or button in IE 6/7/8"), !a.attrHooks[j] && m.test(j) && (a.attrHooks[j] = {
            get: function (b, d) {
                var e, f = a.prop(b, d);
                return f === !0 || "boolean" != typeof f && (e = b.getAttributeNode(d)) && e.nodeValue !== !1 ? d.toLowerCase() : c
            }, set: function (b, c, d) {
                var e;
                return c === !1 ? a.removeAttr(b, d) : (e = a.propFix[d] || d, e in b && (b[e] = !0), b.setAttribute(d, d.toLowerCase())), d
            }
        }, n.test(j) && d("jQuery.fn.attr('" + j + "') might use property instead of attribute")), h.call(a, b, e, f))
    }, a.attrHooks.value = {
        get: function (a, b) {
            var c = (a.nodeName || "").toLowerCase();
            return "button" === c ? i.apply(this, arguments) : ("input" !== c && "option" !== c && d("jQuery.fn.attr('value') no longer gets properties"), b in a ? a.value : null)
        }, set: function (a, b) {
            var c = (a.nodeName || "").toLowerCase();
            return "button" === c ? j.apply(this, arguments) : ("input" !== c && "option" !== c && d("jQuery.fn.attr('value', val) no longer sets properties"), void (a.value = b))
        }
    };
    var o, p, q = a.fn.init, r = a.find, s = a.parseJSON, t = /^\s*</,
        u = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,
        v = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g, w = /^([^<]*)(<[\w\W]+>)([^>]*)$/;
    a.fn.init = function (b, e, f) {
        var g, h;
        return b && "string" == typeof b && !a.isPlainObject(e) && (g = w.exec(a.trim(b))) && g[0] && (t.test(b) || d("$(html) HTML strings must start with '<' character"), g[3] && d("$(html) HTML text after last tag is ignored"), "#" === g[0].charAt(0) && (d("HTML string cannot start with a '#' character"), a.error("JQMIGRATE: Invalid selector string (XSS)")), e && e.context && e.context.nodeType && (e = e.context), a.parseHTML) ? q.call(this, a.parseHTML(g[2], e && e.ownerDocument || e || document, !0), e, f) : (h = q.apply(this, arguments), b && b.selector !== c ? (h.selector = b.selector, h.context = b.context) : (h.selector = "string" == typeof b ? b : "", b && (h.context = b.nodeType ? b : e || document)), h)
    }, a.fn.init.prototype = a.fn, a.find = function (a) {
        var b = Array.prototype.slice.call(arguments);
        if ("string" == typeof a && u.test(a)) try {
            document.querySelector(a)
        } catch (c) {
            a = a.replace(v, function (a, b, c, d) {
                return "[" + b + c + '"' + d + '"]'
            });
            try {
                document.querySelector(a), d("Attribute selector with '#' must be quoted: " + b[0]), b[0] = a
            } catch (e) {
                d("Attribute selector with '#' was not fixed: " + b[0])
            }
        }
        return r.apply(this, b)
    };
    var x;
    for (x in r) Object.prototype.hasOwnProperty.call(r, x) && (a.find[x] = r[x]);
    a.parseJSON = function (a) {
        return a ? s.apply(this, arguments) : (d("jQuery.parseJSON requires a valid JSON string"), null)
    }, a.uaMatch = function (a) {
        a = a.toLowerCase();
        var b = /(chrome)[ \/]([\w.]+)/.exec(a) || /(webkit)[ \/]([\w.]+)/.exec(a) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a) || /(msie) ([\w.]+)/.exec(a) || a.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a) || [];
        return {browser: b[1] || "", version: b[2] || "0"}
    }, a.browser || (o = a.uaMatch(navigator.userAgent), p = {}, o.browser && (p[o.browser] = !0, p.version = o.version), p.chrome ? p.webkit = !0 : p.webkit && (p.safari = !0), a.browser = p), e(a, "browser", a.browser, "jQuery.browser is deprecated"), a.boxModel = a.support.boxModel = "CSS1Compat" === document.compatMode, e(a, "boxModel", a.boxModel, "jQuery.boxModel is deprecated"), e(a.support, "boxModel", a.support.boxModel, "jQuery.support.boxModel is deprecated"), a.sub = function () {
        function b(a, c) {
            return new b.fn.init(a, c)
        }

        a.extend(!0, b, this), b.superclass = this, b.fn = b.prototype = this(), b.fn.constructor = b, b.sub = this.sub, b.fn.init = function (d, e) {
            var f = a.fn.init.call(this, d, e, c);
            return f instanceof b ? f : b(f)
        }, b.fn.init.prototype = b.fn;
        var c = b(document);
        return d("jQuery.sub() is deprecated"), b
    }, a.fn.size = function () {
        return d("jQuery.fn.size() is deprecated; use the .length property"), this.length
    };
    var y = !1;
    a.swap && a.each(["height", "width", "reliableMarginRight"], function (b, c) {
        var d = a.cssHooks[c] && a.cssHooks[c].get;
        d && (a.cssHooks[c].get = function () {
            var a;
            return y = !0, a = d.apply(this, arguments), y = !1, a
        })
    }), a.swap = function (a, b, c, e) {
        var f, g, h = {};
        y || d("jQuery.swap() is undocumented and deprecated");
        for (g in b) h[g] = a.style[g], a.style[g] = b[g];
        f = c.apply(a, e || []);
        for (g in b) a.style[g] = h[g];
        return f
    }, a.ajaxSetup({converters: {"text json": a.parseJSON}});
    var z = a.fn.data;
    a.fn.data = function (b) {
        var e, f, g = this[0];
        return !g || "events" !== b || 1 !== arguments.length || (e = a.data(g, b), f = a._data(g, b), e !== c && e !== f || f === c) ? z.apply(this, arguments) : (d("Use of jQuery.fn.data('events') is deprecated"), f)
    };
    var A = /\/(java|ecma)script/i;
    a.clean || (a.clean = function (b, c, e, f) {
        c = c || document, c = !c.nodeType && c[0] || c, c = c.ownerDocument || c, d("jQuery.clean() is deprecated");
        var g, h, i, j, k = [];
        if (a.merge(k, a.buildFragment(b, c).childNodes), e) for (i = function (a) {
            return !a.type || A.test(a.type) ? f ? f.push(a.parentNode ? a.parentNode.removeChild(a) : a) : e.appendChild(a) : void 0
        }, g = 0; null != (h = k[g]); g++) a.nodeName(h, "script") && i(h) || (e.appendChild(h), "undefined" != typeof h.getElementsByTagName && (j = a.grep(a.merge([], h.getElementsByTagName("script")), i), k.splice.apply(k, [g + 1, 0].concat(j)), g += j.length));
        return k
    });
    var B = a.event.add, C = a.event.remove, D = a.event.trigger, E = a.fn.toggle, F = a.fn.live, G = a.fn.die,
        H = a.fn.load, I = "ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",
        J = new RegExp("\\b(?:" + I + ")\\b"), K = /(?:^|\s)hover(\.\S+|)\b/, L = function (b) {
            return "string" != typeof b || a.event.special.hover ? b : (K.test(b) && d("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"), b && b.replace(K, "mouseenter$1 mouseleave$1"))
        };
    a.event.props && "attrChange" !== a.event.props[0] && a.event.props.unshift("attrChange", "attrName", "relatedNode", "srcElement"), a.event.dispatch && e(a.event, "handle", a.event.dispatch, "jQuery.event.handle is undocumented and deprecated"), a.event.add = function (a, b, c, e, f) {
        a !== document && J.test(b) && d("AJAX events should be attached to document: " + b), B.call(this, a, L(b || ""), c, e, f)
    }, a.event.remove = function (a, b, c, d, e) {
        C.call(this, a, L(b) || "", c, d, e)
    }, a.each(["load", "unload", "error"], function (b, c) {
        a.fn[c] = function () {
            var a = Array.prototype.slice.call(arguments, 0);
            return "load" === c && "string" == typeof a[0] ? H.apply(this, a) : (d("jQuery.fn." + c + "() is deprecated"), a.splice(0, 0, c), arguments.length ? this.bind.apply(this, a) : (this.triggerHandler.apply(this, a), this))
        }
    }), a.fn.toggle = function (b, c) {
        if (!a.isFunction(b) || !a.isFunction(c)) return E.apply(this, arguments);
        d("jQuery.fn.toggle(handler, handler...) is deprecated");
        var e = arguments, f = b.guid || a.guid++, g = 0, h = function (c) {
            var d = (a._data(this, "lastToggle" + b.guid) || 0) % g;
            return a._data(this, "lastToggle" + b.guid, d + 1), c.preventDefault(), e[d].apply(this, arguments) || !1
        };
        for (h.guid = f; g < e.length;) e[g++].guid = f;
        return this.click(h)
    }, a.fn.live = function (b, c, e) {
        return d("jQuery.fn.live() is deprecated"), F ? F.apply(this, arguments) : (a(this.context).on(b, this.selector, c, e), this)
    }, a.fn.die = function (b, c) {
        return d("jQuery.fn.die() is deprecated"), G ? G.apply(this, arguments) : (a(this.context).off(b, this.selector || "**", c), this)
    }, a.event.trigger = function (a, b, c, e) {
        return c || J.test(a) || d("Global events are undocumented and deprecated"), D.call(this, a, b, c || document, e)
    }, a.each(I.split("|"), function (b, c) {
        a.event.special[c] = {
            setup: function () {
                var b = this;
                return b !== document && (a.event.add(document, c + "." + a.guid, function () {
                    a.event.trigger(c, Array.prototype.slice.call(arguments, 1), b, !0)
                }), a._data(this, c, a.guid++)), !1
            }, teardown: function () {
                return this !== document && a.event.remove(document, c + "." + a._data(this, c)), !1
            }
        }
    }), a.event.special.ready = {
        setup: function () {
            this === document && d("'ready' event is deprecated")
        }
    };
    var M = a.fn.andSelf || a.fn.addBack, N = a.fn.find;
    if (a.fn.andSelf = function () {
        return d("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"), M.apply(this, arguments)
    }, a.fn.find = function (a) {
        var b = N.apply(this, arguments);
        return b.context = this.context, b.selector = this.selector ? this.selector + " " + a : a, b
    }, a.Callbacks) {
        var O = a.Deferred,
            P = [["resolve", "done", a.Callbacks("once memory"), a.Callbacks("once memory"), "resolved"], ["reject", "fail", a.Callbacks("once memory"), a.Callbacks("once memory"), "rejected"], ["notify", "progress", a.Callbacks("memory"), a.Callbacks("memory")]];
        a.Deferred = function (b) {
            var c = O(), e = c.promise();
            return c.pipe = e.pipe = function () {
                var b = arguments;
                return d("deferred.pipe() is deprecated"), a.Deferred(function (d) {
                    a.each(P, function (f, g) {
                        var h = a.isFunction(b[f]) && b[f];
                        c[g[1]](function () {
                            var b = h && h.apply(this, arguments);
                            b && a.isFunction(b.promise) ? b.promise().done(d.resolve).fail(d.reject).progress(d.notify) : d[g[0] + "With"](this === e ? d.promise() : this, h ? [b] : arguments)
                        })
                    }), b = null
                }).promise()
            }, c.isResolved = function () {
                return d("deferred.isResolved is deprecated"), "resolved" === c.state()
            }, c.isRejected = function () {
                return d("deferred.isRejected is deprecated"), "rejected" === c.state()
            }, b && b.call(c, c), c
        }
    }
}(jQuery, window);
(function () {
    if (typeof window.CustomEvent === "function") return false;

    function CustomEvent(event, params) {
        params = params || {bubbles: false, cancelable: false, detail: undefined};
        var evt = document.createEvent("CustomEvent");
        evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
        return evt
    }

    CustomEvent.prototype = window.Event.prototype;
    window.CustomEvent = CustomEvent
})();
var pixproof = {
    ajaxurl: "https://promo-theme.com/novo/dark/wp-admin/admin-ajax.php",
    pixproof_settings: {zip_archive_generation: "manual"},
    l10n: {select: "Select", deselect: "Deselect", ofCounter: "of", next: "Next", previous: "Previous"}
};
(function ($) {
    (function (a) {
        var b = "Close", c = "BeforeClose", d = "AfterClose", e = "BeforeAppend", f = "MarkupParse", g = "Open",
            h = "Change", i = "mfp", j = "." + i, k = "mfp-ready", l = "mfp-removing", m = "mfp-prevent-close", n,
            o = function () {
            }, p = !!window.jQuery, q, r = a(window), s, t, u, v, w, x = function (a, b) {
                n.ev.on(i + a + j, b)
            }, y = function (b, c, d, e) {
                var f = document.createElement("div");
                return f.className = "mfp-" + b, d && (f.innerHTML = d), e ? c && c.appendChild(f) : (f = a(f), c && f.appendTo(c)), f
            }, z = function (b, c) {
                n.ev.triggerHandler(i + b, c), n.st.callbacks && (b = b.charAt(0).toLowerCase() + b.slice(1), n.st.callbacks[b] && n.st.callbacks[b].apply(n, a.isArray(c) ? c : [c]))
            }, A = function (b) {
                if (b !== w || !n.currTemplate.closeBtn) n.currTemplate.closeBtn = a(n.st.closeMarkup.replace("%title%", n.st.tClose)), w = b;
                return n.currTemplate.closeBtn
            }, B = function () {
                a.magnificPopup.instance || (n = new o, n.init(), a.magnificPopup.instance = n)
            }, C = function () {
                var a = document.createElement("p").style, b = ["ms", "O", "Moz", "Webkit"];
                if (a.transition !== undefined) return !0;
                while (b.length) if (b.pop() + "Transition" in a) return !0;
                return !1
            };
        o.prototype = {
            constructor: o, init: function () {
                var b = navigator.appVersion;
                n.isIE7 = b.indexOf("MSIE 7.") !== -1, n.isIE8 = b.indexOf("MSIE 8.") !== -1, n.isLowIE = n.isIE7 || n.isIE8, n.isAndroid = /android/gi.test(b), n.isIOS = /iphone|ipad|ipod/gi.test(b), n.supportsTransition = C(), n.probablyMobile = n.isAndroid || n.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), t = a(document), n.popupsCache = {}
            }, open: function (b) {
                s || (s = a(document.body));
                var c;
                if (b.isObj === !1) {
                    n.items = b.items.toArray(), n.index = 0;
                    var d = b.items, e;
                    for (c = 0; c < d.length; c++) {
                        e = d[c], e.parsed && (e = e.el[0]);
                        if (e === b.el[0]) {
                            n.index = c;
                            break
                        }
                    }
                } else n.items = a.isArray(b.items) ? b.items : [b.items], n.index = b.index || 0;
                if (n.isOpen) {
                    n.updateItemHTML();
                    return
                }
                n.types = [], v = "", b.mainEl && b.mainEl.length ? n.ev = b.mainEl.eq(0) : n.ev = t, b.key ? (n.popupsCache[b.key] || (n.popupsCache[b.key] = {}), n.currTemplate = n.popupsCache[b.key]) : n.currTemplate = {}, n.st = a.extend(!0, {}, a.magnificPopup.defaults, b), n.fixedContentPos = n.st.fixedContentPos === "auto" ? !n.probablyMobile : n.st.fixedContentPos, n.st.modal && (n.st.closeOnContentClick = !1, n.st.closeOnBgClick = !1, n.st.showCloseBtn = !1, n.st.enableEscapeKey = !1), n.bgOverlay || (n.bgOverlay = y("bg").on("click" + j, function () {
                    n.close()
                }), n.wrap = y("wrap").attr("tabindex", -1).on("click" + j, function (a) {
                    n._checkIfClose(a.target) && n.close()
                }), n.container = y("container", n.wrap)), n.contentContainer = y("content"), n.st.preloader && (n.preloader = y("preloader", n.container, n.st.tLoading));
                var h = a.magnificPopup.modules;
                for (c = 0; c < h.length; c++) {
                    var i = h[c];
                    i = i.charAt(0).toUpperCase() + i.slice(1), n["init" + i].call(n)
                }
                z("BeforeOpen"), n.st.showCloseBtn && (n.st.closeBtnInside ? (x(f, function (a, b, c, d) {
                    c.close_replaceWith = A(d.type)
                }), v += " mfp-close-btn-in") : n.wrap.append(A())), n.st.alignTop && (v += " mfp-align-top"), n.fixedContentPos ? n.wrap.css({
                    overflow: n.st.overflowY,
                    overflowX: "hidden",
                    overflowY: n.st.overflowY
                }) : n.wrap.css({
                    top: r.scrollTop(),
                    position: "absolute"
                }), (n.st.fixedBgPos === !1 || n.st.fixedBgPos === "auto" && !n.fixedContentPos) && n.bgOverlay.css({
                    height: t.height(),
                    position: "absolute"
                }), n.st.enableEscapeKey && t.on("keyup" + j, function (a) {
                    a.keyCode === 27 && n.close()
                }), r.on("resize" + j, function () {
                    n.updateSize()
                }), n.st.closeOnContentClick || (v += " mfp-auto-cursor"), v && n.wrap.addClass(v);
                var l = n.wH = r.height(), m = {};
                if (n.fixedContentPos && n._hasScrollBar(l)) {
                    var o = n._getScrollbarSize();
                    o && (m.marginRight = o)
                }
                n.fixedContentPos && (n.isIE7 ? a("body, html").css("overflow", "hidden") : m.overflow = "hidden");
                var p = n.st.mainClass;
                return n.isIE7 && (p += " mfp-ie7"), p && n._addClassToMFP(p), n.updateItemHTML(), z("BuildControls"), a("html").css(m), n.bgOverlay.add(n.wrap).prependTo(n.st.prependTo || s), n._lastFocusedEl = document.activeElement, setTimeout(function () {
                    n.content ? (n._addClassToMFP(k), n._setFocus()) : n.bgOverlay.addClass(k), t.on("focusin" + j, n._onFocusIn)
                }, 16), n.isOpen = !0, n.updateSize(l), z(g), b
            }, close: function () {
                if (!n.isOpen) return;
                z(c), n.isOpen = !1, n.st.removalDelay && !n.isLowIE && n.supportsTransition ? (n._addClassToMFP(l), setTimeout(function () {
                    n._close()
                }, n.st.removalDelay)) : n._close()
            }, _close: function () {
                z(b);
                var c = l + " " + k + " ";
                n.bgOverlay.detach(), n.wrap.detach(), n.container.empty(), n.st.mainClass && (c += n.st.mainClass + " "), n._removeClassFromMFP(c);
                if (n.fixedContentPos) {
                    var e = {marginRight: ""};
                    n.isIE7 ? a("body, html").css("overflow", "") : e.overflow = "", a("html").css(e)
                }
                t.off("keyup" + j + " focusin" + j), n.ev.off(j), n.wrap.attr("class", "mfp-wrap").removeAttr("style"), n.bgOverlay.attr("class", "mfp-bg"), n.container.attr("class", "mfp-container"), n.st.showCloseBtn && (!n.st.closeBtnInside || n.currTemplate[n.currItem.type] === !0) && n.currTemplate.closeBtn && n.currTemplate.closeBtn.detach(), n._lastFocusedEl && a(n._lastFocusedEl).focus(), n.currItem = null, n.content = null, n.currTemplate = null, n.prevHeight = 0, z(d)
            }, updateSize: function (a) {
                if (n.isIOS) {
                    var b = document.documentElement.clientWidth / window.innerWidth, c = window.innerHeight * b;
                    n.wrap.css("height", c), n.wH = c
                } else n.wH = a || r.height();
                n.fixedContentPos || n.wrap.css("height", n.wH), z("Resize")
            }, updateItemHTML: function () {
                var b = n.items[n.index];
                n.contentContainer.detach(), n.content && n.content.detach(), b.parsed || (b = n.parseEl(n.index));
                var c = b.type;
                z("BeforeChange", [n.currItem ? n.currItem.type : "", c]), n.currItem = b;
                if (!n.currTemplate[c]) {
                    var d = n.st[c] ? n.st[c].markup : !1;
                    z("FirstMarkupParse", d), d ? n.currTemplate[c] = a(d) : n.currTemplate[c] = !0
                }
                u && u !== b.type && n.container.removeClass("mfp-" + u + "-holder");
                var e = n["get" + c.charAt(0).toUpperCase() + c.slice(1)](b, n.currTemplate[c]);
                n.appendContent(e, c), b.preloaded = !0, z(h, b), u = b.type, n.container.prepend(n.contentContainer), z("AfterChange")
            }, appendContent: function (a, b) {
                n.content = a, a ? n.st.showCloseBtn && n.st.closeBtnInside && n.currTemplate[b] === !0 ? n.content.find(".mfp-close").length || n.content.append(A()) : n.content = a : n.content = "", z(e), n.container.addClass("mfp-" + b + "-holder"), n.contentContainer.append(n.content)
            }, parseEl: function (b) {
                var c = n.items[b], d;
                c.tagName ? c = {el: a(c)} : (d = c.type, c = {data: c, src: c.src});
                if (c.el) {
                    var e = n.types;
                    for (var f = 0; f < e.length; f++) if (c.el.hasClass("mfp-" + e[f])) {
                        d = e[f];
                        break
                    }
                    c.src = c.el.attr("data-mfp-src"), c.src || (c.src = c.el.attr("href"))
                }
                return c.type = d || n.st.type || "inline", c.index = b, c.parsed = !0, n.items[b] = c, z("ElementParse", c), n.items[b]
            }, addGroup: function (a, b) {
                var c = function (c) {
                    c.mfpEl = this, n._openClick(c, a, b)
                };
                b || (b = {});
                var d = "click.magnificPopup";
                b.mainEl = a, b.items ? (b.isObj = !0, a.off(d).on(d, c)) : (b.isObj = !1, b.delegate ? a.off(d).on(d, b.delegate, c) : (b.items = a, a.off(d).on(d, c)))
            }, _openClick: function (b, c, d) {
                var e = d.midClick !== undefined ? d.midClick : a.magnificPopup.defaults.midClick;
                if (!e && (b.which === 2 || b.ctrlKey || b.metaKey)) return;
                var f = d.disableOn !== undefined ? d.disableOn : a.magnificPopup.defaults.disableOn;
                if (f) if (a.isFunction(f)) {
                    if (!f.call(n)) return !0
                } else if (r.width() < f) return !0;
                b.type && (b.preventDefault(), n.isOpen && b.stopPropagation()), d.el = a(b.mfpEl), d.delegate && (d.items = c.find(d.delegate)), n.open(d)
            }, updateStatus: function (a, b) {
                if (n.preloader) {
                    q !== a && n.container.removeClass("mfp-s-" + q), !b && a === "loading" && (b = n.st.tLoading);
                    var c = {status: a, text: b};
                    z("UpdateStatus", c), a = c.status, b = c.text, n.preloader.html(b), n.preloader.find("a").on("click", function (a) {
                        a.stopImmediatePropagation()
                    }), n.container.addClass("mfp-s-" + a), q = a
                }
            }, _checkIfClose: function (b) {
                if (a(b).hasClass(m)) return;
                var c = n.st.closeOnContentClick, d = n.st.closeOnBgClick;
                if (c && d) return !0;
                if (!n.content || a(b).hasClass("mfp-close") || n.preloader && b === n.preloader[0]) return !0;
                if (b !== n.content[0] && !a.contains(n.content[0], b)) {
                    if (d && a.contains(document, b)) return !0
                } else if (c) return !0;
                return !1
            }, _addClassToMFP: function (a) {
                n.bgOverlay.addClass(a), n.wrap.addClass(a)
            }, _removeClassFromMFP: function (a) {
                this.bgOverlay.removeClass(a), n.wrap.removeClass(a)
            }, _hasScrollBar: function (a) {
                return (n.isIE7 ? t.height() : document.body.scrollHeight) > (a || r.height())
            }, _setFocus: function () {
                (n.st.focus ? n.content.find(n.st.focus).eq(0) : n.wrap).focus()
            }, _onFocusIn: function (b) {
                if (b.target !== n.wrap[0] && !a.contains(n.wrap[0], b.target)) return n._setFocus(), !1
            }, _parseMarkup: function (b, c, d) {
                var e;
                d.data && (c = a.extend(d.data, c)), z(f, [b, c, d]), a.each(c, function (a, c) {
                    if (c === undefined || c === !1) return !0;
                    e = a.split("_");
                    if (e.length > 1) {
                        var d = b.find(j + "-" + e[0]);
                        if (d.length > 0) {
                            var f = e[1];
                            f === "replaceWith" ? d[0] !== c[0] && d.replaceWith(c) : f === "img" ? d.is("img") ? d.attr("src", c) : d.replaceWith('<img src="' + c + '" class="' + d.attr("class") + '" />') : d.attr(e[1], c)
                        }
                    } else b.find(j + "-" + a).html(c)
                })
            }, _getScrollbarSize: function () {
                if (n.scrollbarSize === undefined) {
                    var a = document.createElement("div");
                    a.id = "mfp-sbm", a.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(a), n.scrollbarSize = a.offsetWidth - a.clientWidth, document.body.removeChild(a)
                }
                return n.scrollbarSize
            }
        }, a.magnificPopup = {
            instance: null,
            proto: o.prototype,
            modules: [],
            open: function (b, c) {
                return B(), b ? b = a.extend(!0, {}, b) : b = {}, b.isObj = !0, b.index = c || 0, this.instance.open(b)
            },
            close: function () {
                return a.magnificPopup.instance && a.magnificPopup.instance.close()
            },
            registerModule: function (b, c) {
                c.options && (a.magnificPopup.defaults[b] = c.options), a.extend(this.proto, c.proto), this.modules.push(b)
            },
            defaults: {
                disableOn: 0,
                key: null,
                midClick: !1,
                mainClass: "",
                preloader: !0,
                focus: "",
                closeOnContentClick: !1,
                closeOnBgClick: !0,
                closeBtnInside: !0,
                showCloseBtn: !0,
                enableEscapeKey: !0,
                modal: !1,
                alignTop: !1,
                removalDelay: 0,
                prependTo: null,
                fixedContentPos: "auto",
                fixedBgPos: "auto",
                overflowY: "auto",
                closeMarkup: '<button title="%title%" type="button" class="mfp-close">&times;</button>',
                tClose: "Close (Esc)",
                tLoading: "Loading..."
            }
        }, a.fn.magnificPopup = function (b) {
            B();
            var c = a(this);
            if (typeof b == "string") if (b === "open") {
                var d, e = p ? c.data("magnificPopup") : c[0].magnificPopup, f = parseInt(arguments[1], 10) || 0;
                e.items ? d = e.items[f] : (d = c, e.delegate && (d = d.find(e.delegate)), d = d.eq(f)), n._openClick({mfpEl: d}, c, e)
            } else n.isOpen && n[b].apply(n, Array.prototype.slice.call(arguments, 1)); else b = a.extend(!0, {}, b), p ? c.data("magnificPopup", b) : c[0].magnificPopup = b, n.addGroup(c, b);
            return c
        };
        var D = "ajax", E, F = function () {
            E && s.removeClass(E)
        }, G = function () {
            F(), n.req && n.req.abort()
        };
        a.magnificPopup.registerModule(D, {
            options: {
                settings: null,
                cursor: "mfp-ajax-cur",
                tError: '<a href="%url%">The content</a> could not be loaded.'
            }, proto: {
                initAjax: function () {
                    n.types.push(D), E = n.st.ajax.cursor, x(b + "." + D, G), x("BeforeChange." + D, G)
                }, getAjax: function (b) {
                    E && s.addClass(E), n.updateStatus("loading");
                    var c = a.extend({
                        url: b.src, success: function (c, d, e) {
                            var f = {data: c, xhr: e};
                            z("ParseAjax", f), n.appendContent(a(f.data), D), b.finished = !0, F(), n._setFocus(), setTimeout(function () {
                                n.wrap.addClass(k)
                            }, 16), n.updateStatus("ready"), z("AjaxContentAdded")
                        }, error: function () {
                            F(), b.finished = b.loadError = !0, n.updateStatus("error", n.st.ajax.tError.replace("%url%", b.src))
                        }
                    }, n.st.ajax.settings);
                    return n.req = a.ajax(c), ""
                }
            }
        });
        var H, I = function (b) {
            if (b.data && b.data.title !== undefined) return b.data.title;
            var c = n.st.image.titleSrc;
            if (c) {
                if (a.isFunction(c)) return c.call(n, b);
                if (b.el) return b.el.attr(c) || ""
            }
            return ""
        };
        a.magnificPopup.registerModule("image", {
            options: {
                markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
                cursor: "mfp-zoom-out-cur",
                titleSrc: "title",
                verticalFit: !0,
                tError: '<a href="%url%">The image</a> could not be loaded.'
            }, proto: {
                initImage: function () {
                    var a = n.st.image, c = ".image";
                    n.types.push("image"), x(g + c, function () {
                        n.currItem.type === "image" && a.cursor && s.addClass(a.cursor)
                    }), x(b + c, function () {
                        a.cursor && s.removeClass(a.cursor), r.off("resize" + j)
                    }), x("Resize" + c, n.resizeImage), n.isLowIE && x("AfterChange", n.resizeImage)
                }, resizeImage: function () {
                    var a = n.currItem;
                    if (!a || !a.img) return;
                    if (n.st.image.verticalFit) {
                        var b = 0;
                        n.isLowIE && (b = parseInt(a.img.css("padding-top"), 10) + parseInt(a.img.css("padding-bottom"), 10)), a.img.css("max-height", n.wH - b)
                    }
                }, _onImageHasSize: function (a) {
                    a.img && (a.hasSize = !0, H && clearInterval(H), a.isCheckingImgSize = !1, z("ImageHasSize", a), a.imgHidden && (n.content && n.content.removeClass("mfp-loading"), a.imgHidden = !1))
                }, findImageSize: function (a) {
                    var b = 0, c = a.img[0], d = function (e) {
                        H && clearInterval(H), H = setInterval(function () {
                            if (c.naturalWidth > 0) {
                                n._onImageHasSize(a);
                                return
                            }
                            b > 200 && clearInterval(H), b++, b === 3 ? d(10) : b === 40 ? d(50) : b === 100 && d(500)
                        }, e)
                    };
                    d(1)
                }, getImage: function (b, c) {
                    var d = 0, e = function () {
                        b && (b.img[0].complete ? (b.img.off(".mfploader"), b === n.currItem && (n._onImageHasSize(b), n.updateStatus("ready")), b.hasSize = !0, b.loaded = !0, z("ImageLoadComplete")) : (d++, d < 200 ? setTimeout(e, 100) : f()))
                    }, f = function () {
                        b && (b.img.off(".mfploader"), b === n.currItem && (n._onImageHasSize(b), n.updateStatus("error", g.tError.replace("%url%", b.src))), b.hasSize = !0, b.loaded = !0, b.loadError = !0)
                    }, g = n.st.image, h = c.find(".mfp-img");
                    if (h.length) {
                        var i = document.createElement("img");
                        i.className = "mfp-img", b.img = a(i).on("load.mfploader", e).on("error.mfploader", f), i.src = b.src, h.is("img") && (b.img = b.img.clone()), i = b.img[0], i.naturalWidth > 0 ? b.hasSize = !0 : i.width || (b.hasSize = !1)
                    }
                    return n._parseMarkup(c, {
                        title: I(b),
                        img_replaceWith: b.img
                    }, b), n.resizeImage(), b.hasSize ? (H && clearInterval(H), b.loadError ? (c.addClass("mfp-loading"), n.updateStatus("error", g.tError.replace("%url%", b.src))) : (c.removeClass("mfp-loading"), n.updateStatus("ready")), c) : (n.updateStatus("loading"), b.loading = !0, b.hasSize || (b.imgHidden = !0, c.addClass("mfp-loading"), n.findImageSize(b)), c)
                }
            }
        });
        var J, K = function () {
            return J === undefined && (J = document.createElement("p").style.MozTransform !== undefined), J
        };
        a.magnificPopup.registerModule("zoom", {
            options: {
                enabled: !1, easing: "ease-in-out", duration: 300, opener: function (a) {
                    return a.is("img") ? a : a.find("img")
                }
            }, proto: {
                initZoom: function () {
                    var a = n.st.zoom, d = ".zoom", e;
                    if (!a.enabled || !n.supportsTransition) return;
                    var f = a.duration, g = function (b) {
                        var c = b.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                            d = "all " + a.duration / 1e3 + "s " + a.easing, e = {
                                position: "fixed",
                                zIndex: 9999,
                                left: 0,
                                top: 0,
                                "-webkit-backface-visibility": "hidden"
                            }, f = "transition";
                        return e["-webkit-" + f] = e["-moz-" + f] = e["-o-" + f] = e[f] = d, c.css(e), c
                    }, h = function () {
                        n.content.css("visibility", "visible")
                    }, i, j;
                    x("BuildControls" + d, function () {
                        if (n._allowZoom()) {
                            clearTimeout(i), n.content.css("visibility", "hidden"), e = n._getItemToZoom();
                            if (!e) {
                                h();
                                return
                            }
                            j = g(e), j.css(n._getOffset()), n.wrap.append(j), i = setTimeout(function () {
                                j.css(n._getOffset(!0)), i = setTimeout(function () {
                                    h(), setTimeout(function () {
                                        j.remove(), e = j = null, z("ZoomAnimationEnded")
                                    }, 16)
                                }, f)
                            }, 16)
                        }
                    }), x(c + d, function () {
                        if (n._allowZoom()) {
                            clearTimeout(i), n.st.removalDelay = f;
                            if (!e) {
                                e = n._getItemToZoom();
                                if (!e) return;
                                j = g(e)
                            }
                            j.css(n._getOffset(!0)), n.wrap.append(j), n.content.css("visibility", "hidden"), setTimeout(function () {
                                j.css(n._getOffset())
                            }, 16)
                        }
                    }), x(b + d, function () {
                        n._allowZoom() && (h(), j && j.remove(), e = null)
                    })
                }, _allowZoom: function () {
                    return n.currItem.type === "image"
                }, _getItemToZoom: function () {
                    return n.currItem.hasSize ? n.currItem.img : !1
                }, _getOffset: function (b) {
                    var c;
                    b ? c = n.currItem.img : c = n.st.zoom.opener(n.currItem.el || n.currItem);
                    var d = c.offset(), e = parseInt(c.css("padding-top"), 10),
                        f = parseInt(c.css("padding-bottom"), 10);
                    d.top -= a(window).scrollTop() - e;
                    var g = {width: c.width(), height: (p ? c.innerHeight() : c[0].offsetHeight) - f - e};
                    return K() ? g["-moz-transform"] = g.transform = "translate(" + d.left + "px," + d.top + "px)" : (g.left = d.left, g.top = d.top), g
                }
            }
        });
        var L = "iframe", M = "//about:blank", N = function (a) {
            if (n.currTemplate[L]) {
                var b = n.currTemplate[L].find("iframe");
                b.length && (a || (b[0].src = M), n.isIE8 && b.css("display", a ? "block" : "none"))
            }
        };
        a.magnificPopup.registerModule(L, {
            options: {
                markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
                srcAction: "iframe_src",
                patterns: {
                    youtube: {index: "youtube.com", id: "v=", src: "//www.youtube.com/embed/%id%?autoplay=1"},
                    vimeo: {index: "vimeo.com/", id: "/", src: "//player.vimeo.com/video/%id%?autoplay=1"},
                    gmaps: {index: "//maps.google.", src: "%id%&output=embed"}
                }
            }, proto: {
                initIframe: function () {
                    n.types.push(L), x("BeforeChange", function (a, b, c) {
                        b !== c && (b === L ? N() : c === L && N(!0))
                    }), x(b + "." + L, function () {
                        N()
                    })
                }, getIframe: function (b, c) {
                    var d = b.src, e = n.st.iframe;
                    a.each(e.patterns, function () {
                        if (d.indexOf(this.index) > -1) return this.id && (typeof this.id == "string" ? d = d.substr(d.lastIndexOf(this.id) + this.id.length, d.length) : d = this.id.call(this, d)), d = this.src.replace("%id%", d), !1
                    });
                    var f = {};
                    return e.srcAction && (f[e.srcAction] = d), n._parseMarkup(c, f, b), n.updateStatus("ready"), c
                }
            }
        });
        var O = function (a) {
            var b = n.items.length;
            return a > b - 1 ? a - b : a < 0 ? b + a : a
        }, P = function (a, b, c) {
            return a.replace(/%curr%/gi, b + 1).replace(/%total%/gi, c)
        };
        a.magnificPopup.registerModule("gallery", {
            options: {
                enabled: !1,
                arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
                preload: [0, 2],
                navigateByImgClick: !0,
                arrows: !0,
                tPrev: "Previous (Left arrow key)",
                tNext: "Next (Right arrow key)",
                tCounter: "%curr% of %total%"
            }, proto: {
                initGallery: function () {
                    var c = n.st.gallery, d = ".mfp-gallery", e = Boolean(a.fn.mfpFastClick);
                    n.direction = !0;
                    if (!c || !c.enabled) return !1;
                    v += " mfp-gallery", x(g + d, function () {
                        c.navigateByImgClick && n.wrap.on("click" + d, ".mfp-img", function () {
                            if (n.items.length > 1) return n.next(), !1
                        }), t.on("keydown" + d, function (a) {
                            a.keyCode === 37 ? n.prev() : a.keyCode === 39 && n.next()
                        })
                    }), x("UpdateStatus" + d, function (a, b) {
                        b.text && (b.text = P(b.text, n.currItem.index, n.items.length))
                    }), x(f + d, function (a, b, d, e) {
                        var f = n.items.length;
                        d.counter = f > 1 ? P(c.tCounter, e.index, f) : ""
                    }), x("BuildControls" + d, function () {
                        if (n.items.length > 1 && c.arrows && !n.arrowLeft) {
                            var b = c.arrowMarkup,
                                d = n.arrowLeft = a(b.replace(/%title%/gi, c.tPrev).replace(/%dir%/gi, "left")).addClass(m),
                                f = n.arrowRight = a(b.replace(/%title%/gi, c.tNext).replace(/%dir%/gi, "right")).addClass(m),
                                g = e ? "mfpFastClick" : "click";
                            d[g](function () {
                                n.prev()
                            }), f[g](function () {
                                n.next()
                            }), n.isIE7 && (y("b", d[0], !1, !0), y("a", d[0], !1, !0), y("b", f[0], !1, !0), y("a", f[0], !1, !0)), n.container.append(d.add(f))
                        }
                    }), x(h + d, function () {
                        n._preloadTimeout && clearTimeout(n._preloadTimeout), n._preloadTimeout = setTimeout(function () {
                            n.preloadNearbyImages(), n._preloadTimeout = null
                        }, 16)
                    }), x(b + d, function () {
                        t.off(d), n.wrap.off("click" + d), n.arrowLeft && e && n.arrowLeft.add(n.arrowRight).destroyMfpFastClick(), n.arrowRight = n.arrowLeft = null
                    })
                }, next: function () {
                    n.direction = !0, n.index = O(n.index + 1), n.updateItemHTML()
                }, prev: function () {
                    n.direction = !1, n.index = O(n.index - 1), n.updateItemHTML()
                }, goTo: function (a) {
                    n.direction = a >= n.index, n.index = a, n.updateItemHTML()
                }, preloadNearbyImages: function () {
                    var a = n.st.gallery.preload, b = Math.min(a[0], n.items.length),
                        c = Math.min(a[1], n.items.length), d;
                    for (d = 1; d <= (n.direction ? c : b); d++) n._preloadItem(n.index + d);
                    for (d = 1; d <= (n.direction ? b : c); d++) n._preloadItem(n.index - d)
                }, _preloadItem: function (b) {
                    b = O(b);
                    if (n.items[b].preloaded) return;
                    var c = n.items[b];
                    c.parsed || (c = n.parseEl(b)), z("LazyLoad", c), c.type === "image" && (c.img = a('<img class="mfp-img" />').on("load.mfploader", function () {
                        c.hasSize = !0
                    }).on("error.mfploader", function () {
                        c.hasSize = !0, c.loadError = !0, z("LazyLoadError", c)
                    }).attr("src", c.src)), c.preloaded = !0
                }
            }
        });
        var Q = "retina";
        a.magnificPopup.registerModule(Q, {
            options: {
                replaceSrc: function (a) {
                    return a.src.replace(/\.\w+$/, function (a) {
                        return "@2x" + a
                    })
                }, ratio: 1
            }, proto: {
                initRetina: function () {
                    if (window.devicePixelRatio > 1) {
                        var a = n.st.retina, b = a.ratio;
                        b = isNaN(b) ? b() : b, b > 1 && (x("ImageHasSize." + Q, function (a, c) {
                            c.img.css({"max-width": c.img[0].naturalWidth / b, width: "100%"})
                        }), x("ElementParse." + Q, function (c, d) {
                            d.src = a.replaceSrc(d, b)
                        }))
                    }
                }
            }
        }), function () {
            var b = 1e3, c = "ontouchstart" in window, d = function () {
                r.off("touchmove" + f + " touchend" + f)
            }, e = "mfpFastClick", f = "." + e;
            a.fn.mfpFastClick = function (e) {
                return a(this).each(function () {
                    var g = a(this), h;
                    if (c) {
                        var i, j, k, l, m, n;
                        g.on("touchstart" + f, function (a) {
                            l = !1, n = 1, m = a.originalEvent ? a.originalEvent.touches[0] : a.touches[0], j = m.clientX, k = m.clientY, r.on("touchmove" + f, function (a) {
                                m = a.originalEvent ? a.originalEvent.touches : a.touches, n = m.length, m = m[0];
                                if (Math.abs(m.clientX - j) > 10 || Math.abs(m.clientY - k) > 10) l = !0, d()
                            }).on("touchend" + f, function (a) {
                                d();
                                if (l || n > 1) return;
                                h = !0, a.preventDefault(), clearTimeout(i), i = setTimeout(function () {
                                    h = !1
                                }, b), e()
                            })
                        })
                    }
                    g.on("click" + f, function () {
                        h || e()
                    })
                })
            }, a.fn.destroyMfpFastClick = function () {
                a(this).off("touchstart" + f + " click" + f), c && r.off("touchmove" + f + " touchend" + f)
            }
        }(), B()
    })(window.jQuery || window.Zepto);
    $(document).ready(function () {
        var prepare_download_button = function () {
            if (pixproof.pixproof_settings.zip_archive_generation !== "automatic") return;
            var download_button = $(".js-download");
            download_button.attr("disabled", "disabled");
            $(".proof-photo").each(function (i, el) {
                if ($(this).hasClass("selected")) {
                    download_button.removeAttr("disabled")
                }
            })
        };
        var bound_reference_links = function () {
            if (typeof bound_reference_links.bound === "undefined") {
                bound_reference_links.bound = true;
                $(document).on("click", "span.pixproof_photo_ref", function () {
                    var target = $($(this).data("href"));
                    target = target.length ? target : $("[name=" + $(this).data("href").slice(1) + "]");
                    if (target.length) {
                        $("body").animate({scrollTop: target.offset().top - 200}, 500, function () {
                            $(target).addClass("scrooled_from_comments");
                            setTimeout(function () {
                                $(target).removeClass("scrooled_from_comments")
                            }, 800)
                        })
                    }
                })
            }
        }
        $(document).on("click", ".select-action", function (ev) {
            ev.preventDefault();
            ev.stopPropagation();
            var photo = $("[id=" + $(this).data("photoid") + "]");
            $(photo).toggleClass("selected");
            $(photo).addClass("selecting");
            var selected = $(photo).hasClass("selected"), attachment_id = $(photo).data("attachment_id");
            if (selected) {
                jQuery(this).find(".button-text").html(pixproof.l10n.deselect);
                photo.find(".select-action  .button-text").html(pixproof.l10n.deselect)
            } else {
                jQuery(this).find(".button-text").html(pixproof.l10n.select);
                photo.find(".select-action .button-text").html(pixproof.l10n.select)
            }
            $.ajax({
                type: "post",
                url: pixproof.ajaxurl,
                data: {action: "pixproof_image_click", attachment_id: attachment_id, selected: selected},
                beforeSend: function () {
                },
                complete: function () {
                    setTimeout(function () {
                        $(photo).removeClass("selecting")
                    }, 600)
                },
                success: function (response) {
                }
            });
            prepare_download_button()
        });
        prepare_download_button();
        $(".js-pixproof-gallery").each(function () {
            $(this).magnificPopup({
                delegate: "a.zoom-action",
                type: "image",
                removalDelay: 500,
                mainClass: "mfp-fade",
                image: {
                    titleSrc: function (item) {
                        var text = $("#" + item.el.data("photoid")).hasClass("selected") == true ? pixproof.l10n.deselect : pixproof.l10n.select;
                        return '<a class="meta__action  meta__action--popup  select-action"  id="popup-selector" href="#" data-photoid="' + item.el.data("photoid") + '"><span class="button-text">' + text + "</span></a>"
                    }
                },
                gallery: {
                    enabled: true,
                    navigateByImgClick: true,
                    tPrev: pixproof.l10n.previous,
                    tNext: pixproof.l10n.next,
                    tCounter: '<span class="mfp-counter">%curr% ' + pixproof.l10n.ofCounter + "%total%</span>"
                }
            })
        });
        bound_reference_links()
    });


})(jQuery);
!function () {

    function e(e) {
        function t(t, n) {
            var s, h, k = t == window, y = n && n.message !== undefined ? n.message : undefined;
            if (!(n = e.extend({}, e.blockUI.defaults, n || {})).ignoreIfBlocked || !e(t).data("blockUI.isBlocked")) {
                if (n.overlayCSS = e.extend({}, e.blockUI.defaults.overlayCSS, n.overlayCSS || {}), s = e.extend({}, e.blockUI.defaults.css, n.css || {}), n.onOverlayClick && (n.overlayCSS.cursor = "pointer"), h = e.extend({}, e.blockUI.defaults.themedCSS, n.themedCSS || {}), y = y === undefined ? n.message : y, k && p && o(window, {fadeOut: 0}), y && "string" != typeof y && (y.parentNode || y.jquery)) {
                    var m = y.jquery ? y[0] : y, g = {};
                    e(t).data("blockUI.history", g), g.el = m, g.parent = m.parentNode, g.display = m.style.display, g.position = m.style.position, g.parent && g.parent.removeChild(m)
                }
                e(t).data("blockUI.onUnblock", n.onUnblock);
                var v, I, w, U, x = n.baseZ;
                v = e(r || n.forceIframe ? '<iframe class="blockUI" style="z-index:' + x++ + ';display:none;border:none;margin:0;padding:0;position:absolute;width:100%;height:100%;top:0;left:0" src="' + n.iframeSrc + '"></iframe>' : '<div class="blockUI" style="display:none"></div>'), I = e(n.theme ? '<div class="blockUI blockOverlay ui-widget-overlay" style="z-index:' + x++ + ';display:none"></div>' : '<div class="blockUI blockOverlay" style="z-index:' + x++ + ';display:none;border:none;margin:0;padding:0;width:100%;height:100%;top:0;left:0"></div>'), n.theme && k ? (U = '<div class="blockUI ' + n.blockMsgClass + ' blockPage ui-dialog ui-widget ui-corner-all" style="z-index:' + (x + 10) + ';display:none;position:fixed">', n.title && (U += '<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">' + (n.title || "&nbsp;") + "</div>"), U += '<div class="ui-widget-content ui-dialog-content"></div>', U += "</div>") : n.theme ? (U = '<div class="blockUI ' + n.blockMsgClass + ' blockElement ui-dialog ui-widget ui-corner-all" style="z-index:' + (x + 10) + ';display:none;position:absolute">', n.title && (U += '<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">' + (n.title || "&nbsp;") + "</div>"), U += '<div class="ui-widget-content ui-dialog-content"></div>', U += "</div>") : U = k ? '<div class="blockUI ' + n.blockMsgClass + ' blockPage" style="z-index:' + (x + 10) + ';display:none;position:fixed"></div>' : '<div class="blockUI ' + n.blockMsgClass + ' blockElement" style="z-index:' + (x + 10) + ';display:none;position:absolute"></div>', w = e(U), y && (n.theme ? (w.css(h), w.addClass("ui-widget-content")) : w.css(s)), n.theme || I.css(n.overlayCSS), I.css("position", k ? "fixed" : "absolute"), (r || n.forceIframe) && v.css("opacity", 0);
                var C = [v, I, w], S = e(k ? "body" : t);
                e.each(C, function () {
                    this.appendTo(S)
                }), n.theme && n.draggable && e.fn.draggable && w.draggable({
                    handle: ".ui-dialog-titlebar",
                    cancel: "li"
                });
                var O = f && (!e.support.boxModel || e("object,embed", k ? null : t).length > 0);
                if (u || O) {
                    if (k && n.allowBodyStretch && e.support.boxModel && e("html,body").css("height", "100%"), (u || !e.support.boxModel) && !k) var E = a(t, "borderTopWidth"),
                        T = a(t, "borderLeftWidth"), M = E ? "(0 - " + E + ")" : 0, B = T ? "(0 - " + T + ")" : 0;
                    e.each(C, function (e, t) {
                        var o = t[0].style;
                        if (o.position = "absolute", e < 2) k ? o.setExpression("height", "Math.max(document.body.scrollHeight, document.body.offsetHeight) - (jQuery.support.boxModel?0:" + n.quirksmodeOffsetHack + ') + "px"') : o.setExpression("height", 'this.parentNode.offsetHeight + "px"'), k ? o.setExpression("width", 'jQuery.support.boxModel && document.documentElement.clientWidth || document.body.clientWidth + "px"') : o.setExpression("width", 'this.parentNode.offsetWidth + "px"'), B && o.setExpression("left", B), M && o.setExpression("top", M); else if (n.centerY) k && o.setExpression("top", '(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (blah = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"'), o.marginTop = 0; else if (!n.centerY && k) {
                            var i = "((document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + " + (n.css && n.css.top ? parseInt(n.css.top, 10) : 0) + ') + "px"';
                            o.setExpression("top", i)
                        }
                    })
                }
                if (y && (n.theme ? w.find(".ui-widget-content").append(y) : w.append(y), (y.jquery || y.nodeType) && e(y).show()), (r || n.forceIframe) && n.showOverlay && v.show(), n.fadeIn) {
                    var j = n.onBlock ? n.onBlock : c, H = n.showOverlay && !y ? j : c, z = y ? j : c;
                    n.showOverlay && I._fadeIn(n.fadeIn, H), y && w._fadeIn(n.fadeIn, z)
                } else n.showOverlay && I.show(), y && w.show(), n.onBlock && n.onBlock.bind(w)();
                if (i(1, t, n), k ? (p = w[0], b = e(n.focusableElements, p), n.focusInput && setTimeout(l, 20)) : d(w[0], n.centerX, n.centerY), n.timeout) {
                    var W = setTimeout(function () {
                        k ? e.unblockUI(n) : e(t).unblock(n)
                    }, n.timeout);
                    e(t).data("blockUI.timeout", W)
                }
            }
        }

        function o(t, o) {
            var s, l = t == window, d = e(t), a = d.data("blockUI.history"), c = d.data("blockUI.timeout");
            c && (clearTimeout(c), d.removeData("blockUI.timeout")), o = e.extend({}, e.blockUI.defaults, o || {}), i(0, t, o), null === o.onUnblock && (o.onUnblock = d.data("blockUI.onUnblock"), d.removeData("blockUI.onUnblock"));
            var r;
            r = l ? e(document.body).children().filter(".blockUI").add("body > .blockUI") : d.find(">.blockUI"), o.cursorReset && (r.length > 1 && (r[1].style.cursor = o.cursorReset), r.length > 2 && (r[2].style.cursor = o.cursorReset)), l && (p = b = null), o.fadeOut ? (s = r.length, r.stop().fadeOut(o.fadeOut, function () {
                0 == --s && n(r, a, o, t)
            })) : n(r, a, o, t)
        }

        function n(t, o, n, i) {
            var s = e(i);
            if (!s.data("blockUI.isBlocked")) {
                t.each(function (e, t) {
                    this.parentNode && this.parentNode.removeChild(this)
                }), o && o.el && (o.el.style.display = o.display, o.el.style.position = o.position, o.el.style.cursor = "default", o.parent && o.parent.appendChild(o.el), s.removeData("blockUI.history")), s.data("blockUI.static") && s.css("position", "static"), "function" == typeof n.onUnblock && n.onUnblock(i, n);
                var l = e(document.body), d = l.width(), a = l[0].style.width;
                l.width(d - 1).width(d), l[0].style.width = a
            }
        }

        function i(t, o, n) {
            var i = o == window, l = e(o);
            if ((t || (!i || p) && (i || l.data("blockUI.isBlocked"))) && (l.data("blockUI.isBlocked", t), i && n.bindEvents && (!t || n.showOverlay))) {
                var d = "mousedown mouseup keydown keypress keyup touchstart touchend touchmove";
                t ? e(document).bind(d, n, s) : e(document).unbind(d, s)
            }
        }

        function s(t) {
            if ("keydown" === t.type && t.keyCode && 9 == t.keyCode && p && t.data.constrainTabKey) {
                var o = b, n = !t.shiftKey && t.target === o[o.length - 1], i = t.shiftKey && t.target === o[0];
                if (n || i) return setTimeout(function () {
                    l(i)
                }, 10), !1
            }
            var s = t.data, d = e(t.target);
            return d.hasClass("blockOverlay") && s.onOverlayClick && s.onOverlayClick(t), d.parents("div." + s.blockMsgClass).length > 0 || 0 === d.parents().children().filter("div.blockUI").length
        }

        function l(e) {
            if (b) {
                var t = b[!0 === e ? b.length - 1 : 0];
                t && t.focus()
            }
        }

        function d(e, t, o) {
            var n = e.parentNode, i = e.style, s = (n.offsetWidth - e.offsetWidth) / 2 - a(n, "borderLeftWidth"),
                l = (n.offsetHeight - e.offsetHeight) / 2 - a(n, "borderTopWidth");
            t && (i.left = s > 0 ? s + "px" : "0"), o && (i.top = l > 0 ? l + "px" : "0")
        }

        function a(t, o) {
            return parseInt(e.css(t, o), 10) || 0
        }

        e.fn._fadeIn = e.fn.fadeIn;
        var c = e.noop || function () {
            }, r = /MSIE/.test(navigator.userAgent),
            u = /MSIE 6.0/.test(navigator.userAgent) && !/MSIE 8.0/.test(navigator.userAgent),
            f = (document.documentMode, e.isFunction(document.createElement("div").style.setExpression));
        e.blockUI = function (e) {
            t(window, e)
        }, e.unblockUI = function (e) {
            o(window, e)
        }, e.growlUI = function (t, o, n, i) {
            var s = e('<div class="growlUI"></div>');
            t && s.append("<h1>" + t + "</h1>"), o && s.append("<h2>" + o + "</h2>"), n === undefined && (n = 3e3);
            var l = function (t) {
                t = t || {}, e.blockUI({
                    message: s,
                    fadeIn: "undefined" != typeof t.fadeIn ? t.fadeIn : 700,
                    fadeOut: "undefined" != typeof t.fadeOut ? t.fadeOut : 1e3,
                    timeout: "undefined" != typeof t.timeout ? t.timeout : n,
                    centerY: !1,
                    showOverlay: !1,
                    onUnblock: i,
                    css: e.blockUI.defaults.growlCSS
                })
            };
            l();
            s.css("opacity");
            s.mouseover(function () {
                l({fadeIn: 0, timeout: 3e4});
                var t = e(".blockMsg");
                t.stop(), t.fadeTo(300, 1)
            }).mouseout(function () {
                e(".blockMsg").fadeOut(1e3)
            })
        }, e.fn.block = function (o) {
            if (this[0] === window) return e.blockUI(o), this;
            var n = e.extend({}, e.blockUI.defaults, o || {});
            return this.each(function () {
                var t = e(this);
                n.ignoreIfBlocked && t.data("blockUI.isBlocked") || t.unblock({fadeOut: 0})
            }), this.each(function () {
                "static" == e.css(this, "position") && (this.style.position = "relative", e(this).data("blockUI.static", !0)), this.style.zoom = 1, t(this, o)
            })
        }, e.fn.unblock = function (t) {
            return this[0] === window ? (e.unblockUI(t), this) : this.each(function () {
                o(this, t)
            })
        }, e.blockUI.version = 2.7, e.blockUI.defaults = {
            message: "<h1>Please wait...</h1>",
            title: null,
            draggable: !0,
            theme: !1,
            css: {
                padding: 0,
                margin: 0,
                width: "30%",
                top: "40%",
                left: "35%",
                textAlign: "center",
                color: "#000",
                border: "3px solid #aaa",
                backgroundColor: "#fff",
                cursor: "wait"
            },
            themedCSS: {width: "30%", top: "40%", left: "35%"},
            overlayCSS: {backgroundColor: "#000", opacity: .6, cursor: "wait"},
            cursorReset: "default",
            growlCSS: {
                width: "350px",
                top: "10px",
                left: "",
                right: "10px",
                border: "none",
                padding: "5px",
                opacity: .6,
                cursor: "default",
                color: "#fff",
                backgroundColor: "#000",
                "-webkit-border-radius": "10px",
                "-moz-border-radius": "10px",
                "border-radius": "10px"
            },
            iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank",
            forceIframe: !1,
            baseZ: 1e3,
            centerX: !0,
            centerY: !0,
            allowBodyStretch: !0,
            bindEvents: !0,
            constrainTabKey: !0,
            fadeIn: 200,
            fadeOut: 400,
            timeout: 0,
            showOverlay: !0,
            focusInput: !0,
            focusableElements: ":input:enabled:visible",
            onBlock: null,
            onUnblock: null,
            onOverlayClick: null,
            quirksmodeOffsetHack: 4,
            blockMsgClass: "blockMsg",
            ignoreIfBlocked: !1
        };
        var p = null, b = []
    }

    "function" == typeof define && define.amd && define.amd.jQuery ? define(["jquery"], e) : e(jQuery)
}();
!function (e) {
    var n = !1;
    if ("function" == typeof define && define.amd && (define(e), n = !0), "object" == typeof exports && (module.exports = e(), n = !0), !n) {
        var o = window.Cookies, t = window.Cookies = e();
        t.noConflict = function () {
            return window.Cookies = o, t
        }
    }
}(function () {
    function e() {
        for (var e = 0, n = {}; e < arguments.length; e++) {
            var o = arguments[e];
            for (var t in o) n[t] = o[t]
        }
        return n
    }

    function n(o) {
        function t(n, r, i) {
            var c;
            if ("undefined" != typeof document) {
                if (arguments.length > 1) {
                    if ("number" == typeof (i = e({path: "/"}, t.defaults, i)).expires) {
                        var a = new Date;
                        a.setMilliseconds(a.getMilliseconds() + 864e5 * i.expires), i.expires = a
                    }
                    i.expires = i.expires ? i.expires.toUTCString() : "";
                    try {
                        c = JSON.stringify(r), /^[\{\[]/.test(c) && (r = c)
                    } catch (m) {
                    }
                    r = o.write ? o.write(r, n) : encodeURIComponent(String(r)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), n = (n = (n = encodeURIComponent(String(n))).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)).replace(/[\(\)]/g, escape);
                    var f = "";
                    for (var s in i) i[s] && (f += "; " + s, !0 !== i[s] && (f += "=" + i[s]));
                    return document.cookie = n + "=" + r + f
                }
                n || (c = {});
                for (var p = document.cookie ? document.cookie.split("; ") : [], d = /(%[0-9A-Z]{2})+/g, u = 0; u < p.length; u++) {
                    var l = p[u].split("="), C = l.slice(1).join("=");
                    '"' === C.charAt(0) && (C = C.slice(1, -1));
                    try {
                        var g = l[0].replace(d, decodeURIComponent);
                        if (C = o.read ? o.read(C, g) : o(C, g) || C.replace(d, decodeURIComponent), this.json) try {
                            C = JSON.parse(C)
                        } catch (m) {
                        }
                        if (n === g) {
                            c = C;
                            break
                        }
                        n || (c[g] = C)
                    } catch (m) {
                    }
                }
                return c
            }
        }

        return t.set = t, t.get = function (e) {
            return t.call(t, e)
        }, t.getJSON = function () {
            return t.apply({json: !0}, [].slice.call(arguments))
        }, t.defaults = {}, t.remove = function (n, o) {
            t(n, "", e(o, {expires: -1}))
        }, t.withConverter = n, t
    }

    return n(function () {
    })
});

function vc_js() {
    vc_toggleBehaviour(), vc_tabsBehaviour(), vc_accordionBehaviour(), vc_teaserGrid(), vc_carouselBehaviour(), vc_slidersBehaviour(), vc_prettyPhoto(), vc_googleplus(), vc_pinterest(), vc_progress_bar(), vc_plugin_flexslider(), vc_google_fonts(), vc_gridBehaviour(), vc_rowBehaviour(), vc_prepareHoverBox(), vc_googleMapsPointer(), vc_ttaActivation(), jQuery(document).trigger("vc_js"), window.setTimeout(vc_waypoints, 500)
}

function getSizeName() {
    var screen_w = jQuery(window).width();
    return 1170 < screen_w ? "desktop_wide" : 960 < screen_w && 1169 > screen_w ? "desktop" : 768 < screen_w && 959 > screen_w ? "tablet" : 300 < screen_w && 767 > screen_w ? "mobile" : 300 > screen_w ? "mobile_portrait" : ""
}

function vc_ttaActivation() {
    jQuery("[data-vc-accordion]").on("show.vc.accordion", function (e) {
        var $ = window.jQuery, ui = {};
        ui.newPanel = $(this).data("vc.accordion").getTarget(), window.wpb_prepare_tab_content(e, ui)
    })
}

function vc_accordionActivate(event, ui) {
    if (ui.newPanel.length && ui.newHeader.length) {
        var $pie_charts = ui.newPanel.find(".vc_pie_chart:not(.vc_ready)"),
            $round_charts = ui.newPanel.find(".vc_round-chart"), $line_charts = ui.newPanel.find(".vc_line-chart"),
            $carousel = ui.newPanel.find('[data-ride="vc_carousel"]');
        void 0 !== jQuery.fn.isotope && ui.newPanel.find(".isotope, .wpb_image_grid_ul").isotope("layout"), ui.newPanel.find(".vc_masonry_media_grid, .vc_masonry_grid").length && ui.newPanel.find(".vc_masonry_media_grid, .vc_masonry_grid").each(function () {
            var grid = jQuery(this).data("vcGrid");
            grid && grid.gridBuilder && grid.gridBuilder.setMasonry && grid.gridBuilder.setMasonry()
        }), vc_carouselBehaviour(ui.newPanel), vc_plugin_flexslider(ui.newPanel), $pie_charts.length && jQuery.fn.vcChat && $pie_charts.vcChat(), $round_charts.length && jQuery.fn.vcRoundChart && $round_charts.vcRoundChart({reload: !1}), $line_charts.length && jQuery.fn.vcLineChart && $line_charts.vcLineChart({reload: !1}), $carousel.length && jQuery.fn.carousel && $carousel.carousel("resizeAction"), ui.newPanel.parents(".isotope").length && ui.newPanel.parents(".isotope").each(function () {
            jQuery(this).isotope("layout")
        })
    }
}

function vc_initVideoBackgrounds() {
    jQuery("[data-vc-video-bg]").each(function () {
        var youtubeUrl, youtubeId, $element = jQuery(this);
        $element.data("vcVideoBg") ? (youtubeUrl = $element.data("vcVideoBg"), youtubeId = vcExtractYoutubeId(youtubeUrl), youtubeId && ($element.find(".vc_video-bg").remove(), insertYoutubeVideoAsBackground($element, youtubeId)), jQuery(window).on("grid:items:added", function (event, $grid) {
            $element.has($grid).length && vcResizeVideoBackground($element)
        })) : $element.find(".vc_video-bg").remove()
    })
}

function insertYoutubeVideoAsBackground($element, youtubeId, counter) {
    if ("undefined" == typeof YT || void 0 === YT.Player) return 100 < (counter = void 0 === counter ? 0 : counter) ? void console.warn("Too many attempts to load YouTube api") : void setTimeout(function () {
        insertYoutubeVideoAsBackground($element, youtubeId, counter++)
    }, 100);
    var $container = $element.prepend('<div class="vc_video-bg vc_hidden-xs"><div class="inner"></div></div>').find(".inner");
    new YT.Player($container[0], {
        width: "100%",
        height: "100%",
        videoId: youtubeId,
        playerVars: {
            playlist: youtubeId,
            iv_load_policy: 3,
            enablejsapi: 1,
            disablekb: 1,
            autoplay: 1,
            controls: 0,
            showinfo: 0,
            rel: 0,
            loop: 1,
            wmode: "transparent"
        },
        events: {
            onReady: function (event) {
                event.target.mute().setLoop(!0)
            }
        }
    }), vcResizeVideoBackground($element), jQuery(window).bind("resize", function () {
        vcResizeVideoBackground($element)
    })
}

function vcResizeVideoBackground($element) {
    var iframeW, iframeH, marginLeft, marginTop, containerW = $element.innerWidth(),
        containerH = $element.innerHeight();
    containerW / containerH < 16 / 9 ? (iframeW = containerH * (16 / 9), iframeH = containerH, marginLeft = -Math.round((iframeW - containerW) / 2) + "px", marginTop = -Math.round((iframeH - containerH) / 2) + "px", iframeW += "px", iframeH += "px") : (iframeW = containerW, iframeH = containerW * (9 / 16), marginTop = -Math.round((iframeH - containerH) / 2) + "px", marginLeft = -Math.round((iframeW - containerW) / 2) + "px", iframeW += "px", iframeH += "px"), $element.find(".vc_video-bg iframe").css({
        maxWidth: "1000%",
        marginLeft: marginLeft,
        marginTop: marginTop,
        width: iframeW,
        height: iframeH
    })
}

function vcExtractYoutubeId(url) {
    if (void 0 === url) return !1;
    var id = url.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/);
    return null !== id && id[1]
}

function vc_googleMapsPointer() {
    var $ = window.jQuery, $wpbGmapsWidget = $(".wpb_gmaps_widget");
    $wpbGmapsWidget.on("click", function () {
        $("iframe", this).css("pointer-events", "auto")
    }), $wpbGmapsWidget.mouseleave(function () {
        $("iframe", this).css("pointer-events", "none")
    }), $(".wpb_gmaps_widget iframe").css("pointer-events", "none")
}

function vc_setHoverBoxPerspective(hoverBox) {
    hoverBox.each(function () {
        var $this = jQuery(this), width = $this.width(), perspective = 4 * width + "px";
        $this.css("perspective", perspective)
    })
}

function vc_setHoverBoxHeight(hoverBox) {
    hoverBox.each(function () {
        var $this = jQuery(this), hoverBoxInner = $this.find(".vc-hoverbox-inner");
        hoverBoxInner.css("min-height", 0);
        var frontHeight = $this.find(".vc-hoverbox-front-inner").outerHeight(),
            backHeight = $this.find(".vc-hoverbox-back-inner").outerHeight(),
            hoverBoxHeight = frontHeight > backHeight ? frontHeight : backHeight;
        hoverBoxHeight < 250 && (hoverBoxHeight = 250), hoverBoxInner.css("min-height", hoverBoxHeight + "px")
    })
}

function vc_prepareHoverBox() {
    var hoverBox = jQuery(".vc-hoverbox");
    vc_setHoverBoxHeight(hoverBox), vc_setHoverBoxPerspective(hoverBox)
}

document.documentElement.className += " js_active ", document.documentElement.className += "ontouchstart" in document.documentElement ? " vc_mobile " : " vc_desktop ", function () {
    for (var prefix = ["-webkit-", "-moz-", "-ms-", "-o-", ""], i = 0; i < prefix.length; i++) prefix[i] + "transform" in document.documentElement.style && (document.documentElement.className += " vc_transform ")
}(), "function" != typeof window.vc_plugin_flexslider && (window.vc_plugin_flexslider = function ($parent) {
    ($parent ? $parent.find(".wpb_flexslider") : jQuery(".wpb_flexslider")).each(function () {
        var this_element = jQuery(this), sliderTimeout = 1e3 * parseInt(this_element.attr("data-interval")),
            sliderFx = this_element.attr("data-flex_fx"), slideshow = !0;
        0 === sliderTimeout && (slideshow = !1), this_element.is(":visible") && this_element.flexslider({
            animation: sliderFx,
            slideshow: slideshow,
            slideshowSpeed: sliderTimeout,
            sliderSpeed: 800,
            smoothHeight: !0
        })
    })
}), "function" != typeof window.vc_googleplus && (window.vc_googleplus = function () {
    0 < jQuery(".wpb_googleplus").length && function () {
        var po = document.createElement("script");
        po.type = "text/javascript", po.async = !0, po.src = "//apis.google.com/js/plusone.js";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(po, s)
    }()
}), "function" != typeof window.vc_pinterest && (window.vc_pinterest = function () {
    0 < jQuery(".wpb_pinterest").length && function () {
        var po = document.createElement("script");
        po.type = "text/javascript", po.async = !0, po.src = "//assets.pinterest.com/js/pinit.js";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(po, s)
    }()
}), "function" != typeof window.vc_progress_bar && (window.vc_progress_bar = function () {
    void 0 !== jQuery.fn.waypoint && jQuery(".vc_progress_bar").waypoint(function () {
        jQuery(this).find(".vc_single_bar").each(function (index) {
            var $this = jQuery(this), bar = $this.find(".vc_bar"), val = bar.data("percentage-value");
            setTimeout(function () {
                bar.css({width: val + "%"})
            }, 200 * index)
        })
    }, {offset: "85%"})
}), "function" != typeof window.vc_waypoints && (window.vc_waypoints = function () {
    void 0 !== jQuery.fn.vcwaypoint && jQuery(".wpb_animate_when_almost_visible:not(.wpb_start_animation)").each(function () {
        var $el = jQuery(this);
        $el.vcwaypoint(function () {
            $el.addClass("wpb_start_animation animated")
        }, {offset: "85%"})
    })
}), "function" != typeof window.vc_toggleBehaviour && (window.vc_toggleBehaviour = function ($el) {
    function event(e) {
        e && e.preventDefault && e.preventDefault();
        var title = jQuery(this), element = title.closest(".vc_toggle"), content = element.find(".vc_toggle_content");
        element.hasClass("vc_toggle_active") ? content.slideUp({
            duration: 300, complete: function () {
                element.removeClass("vc_toggle_active")
            }
        }) : content.slideDown({
            duration: 300, complete: function () {
                element.addClass("vc_toggle_active")
            }
        })
    }

    $el ? $el.hasClass("vc_toggle_title") ? $el.unbind("click").on("click", event) : $el.find(".vc_toggle_title").unbind("click").on("click", event) : jQuery(".vc_toggle_title").unbind("click").on("click", event)
}), "function" != typeof window.vc_tabsBehaviour && (window.vc_tabsBehaviour = function ($tab) {
    if (jQuery.ui) {
        var $call = $tab || jQuery(".wpb_tabs, .wpb_tour"),
            ver = jQuery.ui && jQuery.ui.version ? jQuery.ui.version.split(".") : "1.10",
            old_version = 1 === parseInt(ver[0]) && 9 > parseInt(ver[1]);
        $call.each(function (index) {
            var $tabs, interval = jQuery(this).attr("data-interval"), tabs_array = [];
            if ($tabs = jQuery(this).find(".wpb_tour_tabs_wrapper").tabs({
                show: function (event, ui) {
                    wpb_prepare_tab_content(event, ui)
                }, beforeActivate: function (event, ui) {
                    1 !== ui.newPanel.index() && ui.newPanel.find(".vc_pie_chart:not(.vc_ready)")
                }, activate: function (event, ui) {
                    wpb_prepare_tab_content(event, ui)
                }
            }), interval && 0 < interval) try {
                $tabs.tabs("rotate", 1e3 * interval)
            } catch (e) {
                window.console && window.console.log && console.log(e)
            }
            jQuery(this).find(".wpb_tab").each(function () {
                tabs_array.push(this.id)
            }), jQuery(this).find(".wpb_tabs_nav li").on("click", function (e) {
                return e.preventDefault(), old_version ? $tabs.tabs("select", jQuery("a", this).attr("href")) : $tabs.tabs("option", "active", jQuery(this).index()), !1
            }), jQuery(this).find(".wpb_prev_slide a, .wpb_next_slide a").on("click", function (e) {
                if (e.preventDefault(), old_version) {
                    var index = $tabs.tabs("option", "selected");
                    jQuery(this).parent().hasClass("wpb_next_slide") ? index++ : index--, 0 > index ? index = $tabs.tabs("length") - 1 : index >= $tabs.tabs("length") && (index = 0), $tabs.tabs("select", index)
                } else {
                    var index = $tabs.tabs("option", "active"), length = $tabs.find(".wpb_tab").length;
                    index = jQuery(this).parent().hasClass("wpb_next_slide") ? index + 1 >= length ? 0 : index + 1 : 0 > index - 1 ? length - 1 : index - 1, $tabs.tabs("option", "active", index)
                }
            })
        })
    }
}), "function" != typeof window.vc_accordionBehaviour && (window.vc_accordionBehaviour = function () {
    jQuery(".wpb_accordion").each(function (index) {
        var $tabs, $this = jQuery(this),
            active_tab = ($this.attr("data-interval"), !isNaN(jQuery(this).data("active-tab")) && 0 < parseInt($this.data("active-tab")) && parseInt($this.data("active-tab")) - 1),
            collapsible = !1 === active_tab || "yes" === $this.data("collapsible");
        $tabs = $this.find(".wpb_accordion_wrapper").accordion({
            header: "> div > h3",
            autoHeight: !1,
            heightStyle: "content",
            active: active_tab,
            collapsible: collapsible,
            navigation: !0,
            activate: vc_accordionActivate,
            change: function (event, ui) {
                void 0 !== jQuery.fn.isotope && ui.newContent.find(".isotope").isotope("layout"), vc_carouselBehaviour(ui.newPanel)
            }
        }), !0 === $this.data("vcDisableKeydown") && ($tabs.data("uiAccordion")._keydown = function () {
        })
    })
}), "function" != typeof window.vc_teaserGrid && (window.vc_teaserGrid = function () {
    var layout_modes = {fitrows: "fitRows", masonry: "masonry"};
    jQuery(".wpb_grid .teaser_grid_container:not(.wpb_carousel), .wpb_filtered_grid .teaser_grid_container:not(.wpb_carousel)").each(function () {
        var $container = jQuery(this), $thumbs = $container.find(".wpb_thumbnails"),
            layout_mode = $thumbs.attr("data-layout-mode");
        $thumbs.isotope({
            itemSelector: ".isotope-item",
            layoutMode: void 0 === layout_modes[layout_mode] ? "fitRows" : layout_modes[layout_mode]
        }), $container.find(".categories_filter a").data("isotope", $thumbs).on("click", function (e) {
            e.preventDefault();
            var $thumbs = jQuery(this).data("isotope");
            jQuery(this).parent().parent().find(".active").removeClass("active"), jQuery(this).parent().addClass("active"), $thumbs.isotope({filter: jQuery(this).attr("data-filter")})
        }), jQuery(window).bind("load resize", function () {
            $thumbs.isotope("layout")
        })
    })
}), "function" != typeof window.vc_carouselBehaviour && (window.vc_carouselBehaviour = function ($parent) {
    ($parent ? $parent.find(".wpb_carousel") : jQuery(".wpb_carousel")).each(function () {
        var $this = jQuery(this);
        if (!0 !== $this.data("carousel_enabled") && $this.is(":visible")) {
            $this.data("carousel_enabled", !0), getColumnsCount(jQuery(this)), jQuery(this).hasClass("columns_count_1");
            var carousele_li = jQuery(this).find(".wpb_thumbnails-fluid li");
            carousele_li.css({"margin-right": carousele_li.css("margin-left"), "margin-left": 0});
            var fluid_ul = jQuery(this).find("ul.wpb_thumbnails-fluid");
            fluid_ul.width(fluid_ul.width() + 300), jQuery(window).resize(function () {
                var before_resize = screen_size;
                screen_size = getSizeName(), before_resize != screen_size && window.setTimeout("location.reload()", 20)
            })
        }
    })
}), "function" != typeof window.vc_slidersBehaviour && (window.vc_slidersBehaviour = function () {
    jQuery(".wpb_gallery_slides").each(function (index) {
        var $imagesGrid, this_element = jQuery(this);
        if (this_element.hasClass("wpb_slider_nivo")) {
            var sliderTimeout = 1e3 * this_element.attr("data-interval");
            0 === sliderTimeout && (sliderTimeout = 9999999999), this_element.find(".nivoSlider").nivoSlider({
                effect: "boxRainGrow,boxRain,boxRainReverse,boxRainGrowReverse",
                slices: 15,
                boxCols: 8,
                boxRows: 4,
                animSpeed: 800,
                pauseTime: sliderTimeout,
                startSlide: 0,
                directionNav: !0,
                directionNavHide: !0,
                controlNav: !0,
                keyboardNav: !1,
                pauseOnHover: !0,
                manualAdvance: !1,
                prevText: "Prev",
                nextText: "Next"
            })
        } else this_element.hasClass("wpb_image_grid") && (jQuery.fn.imagesLoaded ? $imagesGrid = this_element.find(".wpb_image_grid_ul").imagesLoaded(function () {
            $imagesGrid.isotope({itemSelector: ".isotope-item", layoutMode: "fitRows"})
        }) : this_element.find(".wpb_image_grid_ul").isotope({itemSelector: ".isotope-item", layoutMode: "fitRows"}))
    })
}), "function" != typeof window.vc_prettyPhoto && (window.vc_prettyPhoto = function () {
    try {
        jQuery && jQuery.fn && jQuery.fn.prettyPhoto && jQuery('a.prettyphoto, .gallery-icon a[href*=".jpg"]').prettyPhoto({
            animationSpeed: "normal",
            hook: "data-rel",
            padding: 15,
            opacity: .7,
            showTitle: !0,
            allowresize: !0,
            counter_separator_label: "/",
            hideflash: !1,
            deeplinking: !1,
            modal: !1,
            callback: function () {
                location.href.indexOf("#!prettyPhoto") > -1 && (location.hash = "")
            },
            social_tools: ""
        })
    } catch (err) {
        window.console && window.console.log && console.log(err)
    }
}), "function" != typeof window.vc_google_fonts && (window.vc_google_fonts = function () {
    return !1
}), window.vcParallaxSkroll = !1, "function" != typeof window.vc_rowBehaviour && (window.vc_rowBehaviour = function () {
    function fullWidthRow() {
        var $elements = $('[data-vc-full-width="true"]');
        $.each($elements, function (key, item) {
            var $el = $(this);
            $el.addClass("vc_hidden");
            var $el_full = $el.next(".vc_row-full-width");
            if ($el_full.length || ($el_full = $el.parent().next(".vc_row-full-width")), $el_full.length) {
                var el_body = parseInt($("#all").css("padding-left"), 10), padding, paddingRight,
                    el_margin_left = parseInt($el.css("margin-left"), 10) - el_body,
                    el_margin_right = parseInt($el.css("margin-right"), 10) - el_body,
                    offset = 0 - $el_full.offset().left - el_margin_left, width = $(window).width() - el_body;
                if ($el.css({
                    position: "relative",
                    left: offset,
                    "box-sizing": "border-box",
                    width: $("#all main.main-row").width()
                }), !$el.data("vcStretchContent")) {
                    var padding = -1 * offset;
                    0 > padding && (padding = 0);
                    var paddingRight = width - padding - $el_full.width() + el_margin_left + el_margin_right;
                    0 > paddingRight && (paddingRight = 0), $el.css({
                        "padding-left": padding + "px",
                        "padding-right": paddingRight + "px"
                    })
                }
                $el.attr("data-vc-full-width-init", "true"), $el.removeClass("vc_hidden"), $(document).trigger("vc-full-width-row-single", {
                    el: $el,
                    offset: offset,
                    marginLeft: el_margin_left,
                    marginRight: el_margin_right,
                    elFull: $el_full,
                    width: width
                })
            }
        }), $(document).trigger("vc-full-width-row", $elements)
    }

    function fullHeightRow() {
        var $element = $(".vc_row-o-full-height:first");
        if ($element.length) {
            var $window, windowHeight, offsetTop, fullHeight;
            $window = $(window), windowHeight = $window.height(), offsetTop = $element.offset().top, offsetTop < windowHeight && (fullHeight = 100 - offsetTop / (windowHeight / 100), $element.css("min-height", fullHeight + "vh"))
        }
        $(document).trigger("vc-full-height-row", $element)
    }

    var $ = window.jQuery;
    $(window).off("resize.vcRowBehaviour").on("resize.vcRowBehaviour", fullWidthRow).on("resize.vcRowBehaviour", fullHeightRow), fullWidthRow(), fullHeightRow(), function () {
        (window.navigator.userAgent.indexOf("MSIE ") > 0 || navigator.userAgent.match(/Trident.*rv\:11\./)) && $(".vc_row-o-full-height").each(function () {
            "flex" === $(this).css("display") && $(this).wrap('<div class="vc_ie-flexbox-fixer"></div>')
        })
    }(), vc_initVideoBackgrounds(), function () {
        var vcSkrollrOptions, callSkrollInit = !1;
        window.vcParallaxSkroll && window.vcParallaxSkroll.destroy(), $(".vc_parallax-inner").remove(), $("[data-5p-top-bottom]").removeAttr("data-5p-top-bottom data-30p-top-bottom"), $("[data-vc-parallax]").each(function () {
            var skrollrSpeed, skrollrSize, skrollrStart, skrollrEnd, $parallaxElement, parallaxImage, youtubeId;
            callSkrollInit = !0, "on" === $(this).data("vcParallaxOFade") && $(this).children().attr("data-5p-top-bottom", "opacity:0;").attr("data-30p-top-bottom", "opacity:1;"), skrollrSize = 100 * $(this).data("vcParallax"), $parallaxElement = $("<div />").addClass("vc_parallax-inner").appendTo($(this)), $parallaxElement.height(skrollrSize + "%"), parallaxImage = $(this).data("vcParallaxImage"), youtubeId = vcExtractYoutubeId(parallaxImage), youtubeId ? insertYoutubeVideoAsBackground($parallaxElement, youtubeId) : void 0 !== parallaxImage && $parallaxElement.css("background-image", "url(" + parallaxImage + ")"), skrollrSpeed = skrollrSize - 100, skrollrStart = -skrollrSpeed, skrollrEnd = 0, $parallaxElement.attr("data-bottom-top", "top: " + skrollrStart + "%;").attr("data-top-bottom", "top: " + skrollrEnd + "%;")
        }), !(!callSkrollInit || !window.skrollr) && (vcSkrollrOptions = {
            forceHeight: !1,
            smoothScrolling: !1,
            mobileCheck: function () {
                return !1
            }
        }, window.vcParallaxSkroll = skrollr.init(vcSkrollrOptions), window.vcParallaxSkroll)
    }()
}), "function" != typeof window.vc_gridBehaviour && (window.vc_gridBehaviour = function () {
    jQuery.fn.vcGrid && jQuery("[data-vc-grid]").vcGrid()
}), "function" != typeof window.getColumnsCount && (window.getColumnsCount = function (el) {
    for (var find = !1, i = 1; !1 === find;) {
        if (el.hasClass("columns_count_" + i)) return find = !0, i;
        i++
    }
});
var screen_size = getSizeName();
"function" != typeof window.wpb_prepare_tab_content && (window.wpb_prepare_tab_content = function (event, ui) {
    var $ui_panel, $google_maps, panel = ui.panel || ui.newPanel,
        $pie_charts = panel.find(".vc_pie_chart:not(.vc_ready)"), $round_charts = panel.find(".vc_round-chart"),
        $line_charts = panel.find(".vc_line-chart"), $carousel = panel.find('[data-ride="vc_carousel"]');
    if (vc_carouselBehaviour(), vc_plugin_flexslider(panel), ui.newPanel.find(".vc_masonry_media_grid, .vc_masonry_grid").length && ui.newPanel.find(".vc_masonry_media_grid, .vc_masonry_grid").each(function () {
        var grid = jQuery(this).data("vcGrid");
        grid && grid.gridBuilder && grid.gridBuilder.setMasonry && grid.gridBuilder.setMasonry()
    }), panel.find(".vc_masonry_media_grid, .vc_masonry_grid").length && panel.find(".vc_masonry_media_grid, .vc_masonry_grid").each(function () {
        var grid = jQuery(this).data("vcGrid");
        grid && grid.gridBuilder && grid.gridBuilder.setMasonry && grid.gridBuilder.setMasonry()
    }), $pie_charts.length && jQuery.fn.vcChat && $pie_charts.vcChat(), $round_charts.length && jQuery.fn.vcRoundChart && $round_charts.vcRoundChart({reload: !1}), $line_charts.length && jQuery.fn.vcLineChart && $line_charts.vcLineChart({reload: !1}), $carousel.length && jQuery.fn.carousel && $carousel.carousel("resizeAction"), $ui_panel = panel.find(".isotope, .wpb_image_grid_ul"), $google_maps = panel.find(".wpb_gmaps_widget"), 0 < $ui_panel.length && $ui_panel.isotope("layout"), $google_maps.length && !$google_maps.is(".map_ready")) {
        var $frame = $google_maps.find("iframe");
        $frame.attr("src", $frame.attr("src")), $google_maps.addClass("map_ready")
    }
    panel.parents(".isotope").length && panel.parents(".isotope").each(function () {
        jQuery(this).isotope("layout")
    })
}), window.vc_googleMapsPointer, jQuery(document).ready(vc_prepareHoverBox), jQuery(window).resize(vc_prepareHoverBox), jQuery(document).ready(function ($) {
    window.vc_js()
});
(function () {
    var isIe = /(trident|msie)/i.test(navigator.userAgent);
    if (isIe && document.getElementById && window.addEventListener) {
        window.addEventListener("hashchange", function () {
            var id = location.hash.substring(1), element;
            if (!/^[A-z0-9_-]+$/.test(id)) {
                return
            }
            element = document.getElementById(id);
            if (element) {
                if (!/^(?:a|select|input|button|textarea)$/i.test(element.tagName)) {
                    element.tabIndex = -1
                }
                element.focus()
            }
        }, false)
    }
})();
jQuery(document).ready(function ($) {
    jQuery(".load-button a").each(function () {
        var pageNum = parseInt(jQuery(this).attr("data-start-page")) + 1, max = parseInt(jQuery(this).attr("data-max")),
            nextLink = jQuery(this).attr("data-next-link"), load_wrap = jQuery(jQuery(this).attr("data-wrap"));
        jQuery(this).on("click", function () {
            jQuery(this).parent().before('<div class="load-items-area load-items-' + pageNum + '"></div>');
            var button = jQuery(this);
            button.addClass("loading");
            var $items = load_wrap.next(".load-items-" + parseInt(pageNum)).find("article");
            load_wrap.next(".load-items-" + pageNum).load(nextLink + " " + jQuery(this).attr("data-wrap") + " article", function () {
                var $html = jQuery(this).find("article");
                load_wrap.append($html);
                var load_s = jQuery(this);
                load_wrap.imagesLoaded(function () {
                    load_s.remove();
                    load_wrap.isotope("appended", $html);
                    button.removeClass("loading");
                    jQuery(window).trigger("resize").trigger("scroll")
                });
                pageNum++;
                nextLink = nextLink.replace(/\/page\/[0-9]?/, "/page/" + pageNum)
            });
            if (pageNum >= max) {
                jQuery(this).parent().fadeOut()
            }
            setTimeout(function () {
                jQuery(window).trigger("resize").trigger("scroll")
            }, 500);
            return false
        })
    })
});
(function () {

    function a() {
    }

    function b(a, b) {
        for (var c = a.length; c--;) if (a[c].listener === b) return c;
        return -1
    }

    function c(a) {
        return function () {
            return this[a].apply(this, arguments)
        }
    }

    var d = a.prototype, e = this, f = e.EventEmitter;
    d.getListeners = function (a) {
        var b, c, d = this._getEvents();
        if ("object" == typeof a) {
            b = {};
            for (c in d) d.hasOwnProperty(c) && a.test(c) && (b[c] = d[c])
        } else b = d[a] || (d[a] = []);
        return b
    }, d.flattenListeners = function (a) {
        var b, c = [];
        for (b = 0; b < a.length; b += 1) c.push(a[b].listener);
        return c
    }, d.getListenersAsObject = function (a) {
        var b, c = this.getListeners(a);
        return c instanceof Array && (b = {}, b[a] = c), b || c
    }, d.addListener = function (a, c) {
        var d, e = this.getListenersAsObject(a), f = "object" == typeof c;
        for (d in e) e.hasOwnProperty(d) && -1 === b(e[d], c) && e[d].push(f ? c : {listener: c, once: !1});
        return this
    }, d.on = c("addListener"), d.addOnceListener = function (a, b) {
        return this.addListener(a, {listener: b, once: !0})
    }, d.once = c("addOnceListener"), d.defineEvent = function (a) {
        return this.getListeners(a), this
    }, d.defineEvents = function (a) {
        for (var b = 0; b < a.length; b += 1) this.defineEvent(a[b]);
        return this
    }, d.removeListener = function (a, c) {
        var d, e, f = this.getListenersAsObject(a);
        for (e in f) f.hasOwnProperty(e) && (d = b(f[e], c), -1 !== d && f[e].splice(d, 1));
        return this
    }, d.off = c("removeListener"), d.addListeners = function (a, b) {
        return this.manipulateListeners(!1, a, b)
    }, d.removeListeners = function (a, b) {
        return this.manipulateListeners(!0, a, b)
    }, d.manipulateListeners = function (a, b, c) {
        var d, e, f = a ? this.removeListener : this.addListener, g = a ? this.removeListeners : this.addListeners;
        if ("object" != typeof b || b instanceof RegExp) for (d = c.length; d--;) f.call(this, b, c[d]); else for (d in b) b.hasOwnProperty(d) && (e = b[d]) && ("function" == typeof e ? f.call(this, d, e) : g.call(this, d, e));
        return this
    }, d.removeEvent = function (a) {
        var b, c = typeof a, d = this._getEvents();
        if ("string" === c) delete d[a]; else if ("object" === c) for (b in d) d.hasOwnProperty(b) && a.test(b) && delete d[b]; else delete this._events;
        return this
    }, d.removeAllListeners = c("removeEvent"), d.emitEvent = function (a, b) {
        var c, d, e, f, g = this.getListenersAsObject(a);
        for (e in g) if (g.hasOwnProperty(e)) for (d = g[e].length; d--;) c = g[e][d], c.once === !0 && this.removeListener(a, c.listener), f = c.listener.apply(this, b || []), f === this._getOnceReturnValue() && this.removeListener(a, c.listener);
        return this
    }, d.trigger = c("emitEvent"), d.emit = function (a) {
        var b = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(a, b)
    }, d.setOnceReturnValue = function (a) {
        return this._onceReturnValue = a, this
    }, d._getOnceReturnValue = function () {
        return !this.hasOwnProperty("_onceReturnValue") || this._onceReturnValue
    }, d._getEvents = function () {
        return this._events || (this._events = {})
    }, a.noConflict = function () {
        return e.EventEmitter = f, a
    }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function () {
        return a
    }) : "object" == typeof module && module.exports ? module.exports = a : this.EventEmitter = a
}).call(this), function (a) {
    function b(b) {
        var c = a.event;
        return c.target = c.target || c.srcElement || b, c
    }

    var c = document.documentElement, d = function () {
    };
    c.addEventListener ? d = function (a, b, c) {
        a.addEventListener(b, c, !1)
    } : c.attachEvent && (d = function (a, c, d) {
        a[c + d] = d.handleEvent ? function () {
            var c = b(a);
            d.handleEvent.call(d, c)
        } : function () {
            var c = b(a);
            d.call(a, c)
        }, a.attachEvent("on" + c, a[c + d])
    });
    var e = function () {
    };
    c.removeEventListener ? e = function (a, b, c) {
        a.removeEventListener(b, c, !1)
    } : c.detachEvent && (e = function (a, b, c) {
        a.detachEvent("on" + b, a[b + c]);
        try {
            delete a[b + c]
        } catch (d) {
            a[b + c] = void 0
        }
    });
    var f = {bind: d, unbind: e};
    "function" == typeof define && define.amd ? define("eventie/eventie", f) : a.eventie = f
}(this), function (a, b) {
    "function" == typeof define && define.amd ? define(["eventEmitter/EventEmitter", "eventie/eventie"], function (c, d) {
        return b(a, c, d)
    }) : "object" == typeof module && module.exports ? module.exports = b(a, require("wolfy87-eventemitter"), require("eventie")) : a.imagesLoaded = b(a, a.EventEmitter, a.eventie)
}(window, function (a, b, c) {
    function d(a, b) {
        for (var c in b) a[c] = b[c];
        return a
    }

    function e(a) {
        return "[object Array]" == l.call(a)
    }

    function f(a) {
        var b = [];
        if (e(a)) b = a; else if ("number" == typeof a.length) for (var c = 0; c < a.length; c++) b.push(a[c]); else b.push(a);
        return b
    }

    function g(a, b, c) {
        if (!(this instanceof g)) return new g(a, b, c);
        "string" == typeof a && (a = document.querySelectorAll(a)), this.elements = f(a), this.options = d({}, this.options), "function" == typeof b ? c = b : d(this.options, b), c && this.on("always", c), this.getImages(), j && (this.jqDeferred = new j.Deferred);
        var e = this;
        setTimeout(function () {
            e.check()
        })
    }

    function h(a) {
        this.img = a
    }

    function i(a, b) {
        this.url = a, this.element = b, this.img = new Image
    }

    var j = a.jQuery, k = a.console, l = Object.prototype.toString;
    g.prototype = new b, g.prototype.options = {}, g.prototype.getImages = function () {
        this.images = [];
        for (var a = 0; a < this.elements.length; a++) {
            var b = this.elements[a];
            this.addElementImages(b)
        }
    }, g.prototype.addElementImages = function (a) {
        "IMG" == a.nodeName && this.addImage(a), this.options.background === !0 && this.addElementBackgroundImages(a);
        var b = a.nodeType;
        if (b && m[b]) {
            for (var c = a.querySelectorAll("img"), d = 0; d < c.length; d++) {
                var e = c[d];
                this.addImage(e)
            }
            if ("string" == typeof this.options.background) {
                var f = a.querySelectorAll(this.options.background);
                for (d = 0; d < f.length; d++) {
                    var g = f[d];
                    this.addElementBackgroundImages(g)
                }
            }
        }
    };
    var m = {1: !0, 9: !0, 11: !0};
    g.prototype.addElementBackgroundImages = function (a) {
        for (var b = n(a), c = /url\(['"]*([^'"\)]+)['"]*\)/gi, d = c.exec(b.backgroundImage); null !== d;) {
            var e = d && d[1];
            e && this.addBackground(e, a), d = c.exec(b.backgroundImage)
        }
    };
    var n = a.getComputedStyle || function (a) {
        return a.currentStyle
    };
    return g.prototype.addImage = function (a) {
        var b = new h(a);
        this.images.push(b)
    }, g.prototype.addBackground = function (a, b) {
        var c = new i(a, b);
        this.images.push(c)
    }, g.prototype.check = function () {
        function a(a, c, d) {
            setTimeout(function () {
                b.progress(a, c, d)
            })
        }

        var b = this;
        if (this.progressedCount = 0, this.hasAnyBroken = !1, !this.images.length) return void this.complete();
        for (var c = 0; c < this.images.length; c++) {
            var d = this.images[c];
            d.once("progress", a), d.check()
        }
    }, g.prototype.progress = function (a, b, c) {
        this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !a.isLoaded, this.emit("progress", this, a, b), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, a), this.progressedCount == this.images.length && this.complete(), this.options.debug && k && k.log("progress: " + c, a, b)
    }, g.prototype.complete = function () {
        var a = this.hasAnyBroken ? "fail" : "done";
        if (this.isComplete = !0, this.emit(a, this), this.emit("always", this), this.jqDeferred) {
            var b = this.hasAnyBroken ? "reject" : "resolve";
            this.jqDeferred[b](this)
        }
    }, h.prototype = new b, h.prototype.check = function () {
        var a = this.getIsImageComplete();
        return a ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, c.bind(this.proxyImage, "load", this), c.bind(this.proxyImage, "error", this), c.bind(this.img, "load", this), c.bind(this.img, "error", this), void (this.proxyImage.src = this.img.src))
    }, h.prototype.getIsImageComplete = function () {
        return this.img.complete && void 0 !== this.img.naturalWidth
    }, h.prototype.confirm = function (a, b) {
        this.isLoaded = a, this.emit("progress", this, this.img, b)
    }, h.prototype.handleEvent = function (a) {
        var b = "on" + a.type;
        this[b] && this[b](a)
    }, h.prototype.onload = function () {
        this.confirm(!0, "onload"), this.unbindEvents()
    }, h.prototype.onerror = function () {
        this.confirm(!1, "onerror"), this.unbindEvents()
    }, h.prototype.unbindEvents = function () {
        c.unbind(this.proxyImage, "load", this), c.unbind(this.proxyImage, "error", this), c.unbind(this.img, "load", this), c.unbind(this.img, "error", this)
    }, i.prototype = new h, i.prototype.check = function () {
        c.bind(this.img, "load", this), c.bind(this.img, "error", this), this.img.src = this.url;
        var a = this.getIsImageComplete();
        a && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
    }, i.prototype.unbindEvents = function () {
        c.unbind(this.img, "load", this), c.unbind(this.img, "error", this)
    }, i.prototype.confirm = function (a, b) {
        this.isLoaded = a, this.emit("progress", this, this.element, b)
    }, g.makeJQueryPlugin = function (b) {
        b = b || a.jQuery, b && (j = b, j.fn.imagesLoaded = function (a, b) {
            var c = new g(this, a, b);
            return c.jqDeferred.promise(j(this))
        })
    }, g.makeJQueryPlugin(), g
});
!function (t, e) {
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function (i) {
        return e(t, i)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("jquery")) : t.jQueryBridget = e(t, t.jQuery)
}(window, function (t, e) {

    function i(i, s, a) {
        function u(t, e, o) {
            var n, s = "$()." + i + '("' + e + '")';
            return t.each(function (t, u) {
                var h = a.data(u, i);
                if (!h) return void r(i + " not initialized. Cannot call methods, i.e. " + s);
                var d = h[e];
                if (!d || "_" == e.charAt(0)) return void r(s + " is not a valid method");
                var l = d.apply(h, o);
                n = void 0 === n ? l : n
            }), void 0 !== n ? n : t
        }

        function h(t, e) {
            t.each(function (t, o) {
                var n = a.data(o, i);
                n ? (n.option(e), n._init()) : (n = new s(o, e), a.data(o, i, n))
            })
        }

        a = a || e || t.jQuery, a && (s.prototype.option || (s.prototype.option = function (t) {
            a.isPlainObject(t) && (this.options = a.extend(!0, this.options, t))
        }), a.fn[i] = function (t) {
            if ("string" == typeof t) {
                var e = n.call(arguments, 1);
                return u(this, t, e)
            }
            return h(this, t), this
        }, o(a))
    }

    function o(t) {
        !t || t && t.bridget || (t.bridget = i)
    }

    var n = Array.prototype.slice, s = t.console, r = "undefined" == typeof s ? function () {
    } : function (t) {
        s.error(t)
    };
    return o(e || t.jQuery), i
}), function (t, e) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
}("undefined" != typeof window ? window : this, function () {
    function t() {
    }

    var e = t.prototype;
    return e.on = function (t, e) {
        if (t && e) {
            var i = this._events = this._events || {}, o = i[t] = i[t] || [];
            return o.indexOf(e) == -1 && o.push(e), this
        }
    }, e.once = function (t, e) {
        if (t && e) {
            this.on(t, e);
            var i = this._onceEvents = this._onceEvents || {}, o = i[t] = i[t] || {};
            return o[e] = !0, this
        }
    }, e.off = function (t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            var o = i.indexOf(e);
            return o != -1 && i.splice(o, 1), this
        }
    }, e.emitEvent = function (t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            i = i.slice(0), e = e || [];
            for (var o = this._onceEvents && this._onceEvents[t], n = 0; n < i.length; n++) {
                var s = i[n], r = o && o[s];
                r && (this.off(t, s), delete o[s]), s.apply(this, e)
            }
            return this
        }
    }, e.allOff = function () {
        delete this._events, delete this._onceEvents
    }, t
}), function (t, e) {
    "function" == typeof define && define.amd ? define("get-size/get-size", [], function () {
        return e()
    }) : "object" == typeof module && module.exports ? module.exports = e() : t.getSize = e()
}(window, function () {

    function t(t) {
        var e = parseFloat(t), i = t.indexOf("%") == -1 && !isNaN(e);
        return i && e
    }

    function e() {
    }

    function i() {
        for (var t = {
            width: 0,
            height: 0,
            innerWidth: 0,
            innerHeight: 0,
            outerWidth: 0,
            outerHeight: 0
        }, e = 0; e < h; e++) {
            var i = u[e];
            t[i] = 0
        }
        return t
    }

    function o(t) {
        var e = getComputedStyle(t);
        return e || a("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), e
    }

    function n() {
        if (!d) {
            d = !0;
            var e = document.createElement("div");
            e.style.width = "200px", e.style.padding = "1px 2px 3px 4px", e.style.borderStyle = "solid", e.style.borderWidth = "1px 2px 3px 4px", e.style.boxSizing = "border-box";
            var i = document.body || document.documentElement;
            i.appendChild(e);
            var n = o(e);
            s.isBoxSizeOuter = r = 200 == t(n.width), i.removeChild(e)
        }
    }

    function s(e) {
        if (n(), "string" == typeof e && (e = document.querySelector(e)), e && "object" == typeof e && e.nodeType) {
            var s = o(e);
            if ("none" == s.display) return i();
            var a = {};
            a.width = e.offsetWidth, a.height = e.offsetHeight;
            for (var d = a.isBorderBox = "border-box" == s.boxSizing, l = 0; l < h; l++) {
                var f = u[l], c = s[f], m = parseFloat(c);
                a[f] = isNaN(m) ? 0 : m
            }
            var p = a.paddingLeft + a.paddingRight, y = a.paddingTop + a.paddingBottom,
                g = a.marginLeft + a.marginRight, v = a.marginTop + a.marginBottom,
                _ = a.borderLeftWidth + a.borderRightWidth, I = a.borderTopWidth + a.borderBottomWidth, z = d && r,
                x = t(s.width);
            x !== !1 && (a.width = x + (z ? 0 : p + _));
            var S = t(s.height);
            return S !== !1 && (a.height = S + (z ? 0 : y + I)), a.innerWidth = a.width - (p + _), a.innerHeight = a.height - (y + I), a.outerWidth = a.width + g, a.outerHeight = a.height + v, a
        }
    }

    var r, a = "undefined" == typeof console ? e : function (t) {
            console.error(t)
        },
        u = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
        h = u.length, d = !1;
    return s
}), function (t, e) {
    "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? module.exports = e() : t.matchesSelector = e()
}(window, function () {
    var t = function () {
        var t = window.Element.prototype;
        if (t.matches) return "matches";
        if (t.matchesSelector) return "matchesSelector";
        for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
            var o = e[i], n = o + "MatchesSelector";
            if (t[n]) return n
        }
    }();
    return function (e, i) {
        return e[t](i)
    }
}), function (t, e) {
    "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function (i) {
        return e(t, i)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.matchesSelector)
}(window, function (t, e) {
    var i = {};
    i.extend = function (t, e) {
        for (var i in e) t[i] = e[i];
        return t
    }, i.modulo = function (t, e) {
        return (t % e + e) % e
    }, i.makeArray = function (t) {
        var e = [];
        if (Array.isArray(t)) e = t; else if (t && "object" == typeof t && "number" == typeof t.length) for (var i = 0; i < t.length; i++) e.push(t[i]); else e.push(t);
        return e
    }, i.removeFrom = function (t, e) {
        var i = t.indexOf(e);
        i != -1 && t.splice(i, 1)
    }, i.getParent = function (t, i) {
        for (; t.parentNode && t != document.body;) if (t = t.parentNode, e(t, i)) return t
    }, i.getQueryElement = function (t) {
        return "string" == typeof t ? document.querySelector(t) : t
    }, i.handleEvent = function (t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }, i.filterFindElements = function (t, o) {
        t = i.makeArray(t);
        var n = [];
        return t.forEach(function (t) {
            if (t instanceof HTMLElement) {
                if (!o) return void n.push(t);
                e(t, o) && n.push(t);
                for (var i = t.querySelectorAll(o), s = 0; s < i.length; s++) n.push(i[s])
            }
        }), n
    }, i.debounceMethod = function (t, e, i) {
        var o = t.prototype[e], n = e + "Timeout";
        t.prototype[e] = function () {
            var t = this[n];
            t && clearTimeout(t);
            var e = arguments, s = this;
            this[n] = setTimeout(function () {
                o.apply(s, e), delete s[n]
            }, i || 100)
        }
    }, i.docReady = function (t) {
        var e = document.readyState;
        "complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t)
    }, i.toDashed = function (t) {
        return t.replace(/(.)([A-Z])/g, function (t, e, i) {
            return e + "-" + i
        }).toLowerCase()
    };
    var o = t.console;
    return i.htmlInit = function (e, n) {
        i.docReady(function () {
            var s = i.toDashed(n), r = "data-" + s, a = document.querySelectorAll("[" + r + "]"),
                u = document.querySelectorAll(".js-" + s), h = i.makeArray(a).concat(i.makeArray(u)),
                d = r + "-options", l = t.jQuery;
            h.forEach(function (t) {
                var i, s = t.getAttribute(r) || t.getAttribute(d);
                try {
                    i = s && JSON.parse(s)
                } catch (a) {
                    return void (o && o.error("Error parsing " + r + " on " + t.className + ": " + a))
                }
                var u = new e(t, i);
                l && l.data(t, n, u)
            })
        })
    }, i
}), function (t, e) {
    "function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("ev-emitter"), require("get-size")) : (t.Outlayer = {}, t.Outlayer.Item = e(t.EvEmitter, t.getSize))
}(window, function (t, e) {

    function i(t) {
        for (var e in t) return !1;
        return e = null, !0
    }

    function o(t, e) {
        t && (this.element = t, this.layout = e, this.position = {x: 0, y: 0}, this._create())
    }

    function n(t) {
        return t.replace(/([A-Z])/g, function (t) {
            return "-" + t.toLowerCase()
        })
    }

    var s = document.documentElement.style, r = "string" == typeof s.transition ? "transition" : "WebkitTransition",
        a = "string" == typeof s.transform ? "transform" : "WebkitTransform",
        u = {WebkitTransition: "webkitTransitionEnd", transition: "transitionend"}[r], h = {
            transform: a,
            transition: r,
            transitionDuration: r + "Duration",
            transitionProperty: r + "Property",
            transitionDelay: r + "Delay"
        }, d = o.prototype = Object.create(t.prototype);
    d.constructor = o, d._create = function () {
        this._transn = {ingProperties: {}, clean: {}, onEnd: {}}, this.css({position: "absolute"})
    }, d.handleEvent = function (t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }, d.getSize = function () {
        this.size = e(this.element)
    }, d.css = function (t) {
        var e = this.element.style;
        for (var i in t) {
            var o = h[i] || i;
            e[o] = t[i]
        }
    }, d.getPosition = function () {
        var t = getComputedStyle(this.element), e = this.layout._getOption("originLeft"),
            i = this.layout._getOption("originTop"), o = t[e ? "left" : "right"], n = t[i ? "top" : "bottom"],
            s = this.layout.size, r = o.indexOf("%") != -1 ? parseFloat(o) / 100 * s.width : parseInt(o, 10),
            a = n.indexOf("%") != -1 ? parseFloat(n) / 100 * s.height : parseInt(n, 10);
        r = isNaN(r) ? 0 : r, a = isNaN(a) ? 0 : a, r -= e ? s.paddingLeft : s.paddingRight, a -= i ? s.paddingTop : s.paddingBottom, this.position.x = r, this.position.y = a
    }, d.layoutPosition = function () {
        var t = this.layout.size, e = {}, i = this.layout._getOption("originLeft"),
            o = this.layout._getOption("originTop"), n = i ? "paddingLeft" : "paddingRight", s = i ? "left" : "right",
            r = i ? "right" : "left", a = this.position.x + t[n];
        e[s] = this.getXValue(a), e[r] = "";
        var u = o ? "paddingTop" : "paddingBottom", h = o ? "top" : "bottom", d = o ? "bottom" : "top",
            l = this.position.y + t[u];
        e[h] = this.getYValue(l), e[d] = "", this.css(e), this.emitEvent("layout", [this])
    }, d.getXValue = function (t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && !e ? t / this.layout.size.width * 100 + "%" : t + "px"
    }, d.getYValue = function (t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && e ? t / this.layout.size.height * 100 + "%" : t + "px"
    }, d._transitionTo = function (t, e) {
        this.getPosition();
        var i = this.position.x, o = this.position.y, n = parseInt(t, 10), s = parseInt(e, 10),
            r = n === this.position.x && s === this.position.y;
        if (this.setPosition(t, e), r && !this.isTransitioning) return void this.layoutPosition();
        var a = t - i, u = e - o, h = {};
        h.transform = this.getTranslate(a, u), this.transition({
            to: h,
            onTransitionEnd: {transform: this.layoutPosition},
            isCleaning: !0
        })
    }, d.getTranslate = function (t, e) {
        var i = this.layout._getOption("originLeft"), o = this.layout._getOption("originTop");
        return t = i ? t : -t, e = o ? e : -e, "translate3d(" + t + "px, " + e + "px, 0)"
    }, d.goTo = function (t, e) {
        this.setPosition(t, e), this.layoutPosition()
    }, d.moveTo = d._transitionTo, d.setPosition = function (t, e) {
        this.position.x = parseInt(t, 10), this.position.y = parseInt(e, 10)
    }, d._nonTransition = function (t) {
        this.css(t.to), t.isCleaning && this._removeStyles(t.to);
        for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this)
    }, d.transition = function (t) {
        if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(t);
        var e = this._transn;
        for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
        for (i in t.to) e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0);
        if (t.from) {
            this.css(t.from);
            var o = this.element.offsetHeight;
            o = null
        }
        this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0
    };
    var l = "opacity," + n(a);
    d.enableTransition = function () {
        if (!this.isTransitioning) {
            var t = this.layout.options.transitionDuration;
            t = "number" == typeof t ? t + "ms" : t, this.css({
                transitionProperty: l,
                transitionDuration: t,
                transitionDelay: this.staggerDelay || 0
            }), this.element.addEventListener(u, this, !1)
        }
    }, d.onwebkitTransitionEnd = function (t) {
        this.ontransitionend(t)
    }, d.onotransitionend = function (t) {
        this.ontransitionend(t)
    };
    var f = {"-webkit-transform": "transform"};
    d.ontransitionend = function (t) {
        if (t.target === this.element) {
            var e = this._transn, o = f[t.propertyName] || t.propertyName;
            if (delete e.ingProperties[o], i(e.ingProperties) && this.disableTransition(), o in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[o]), o in e.onEnd) {
                var n = e.onEnd[o];
                n.call(this), delete e.onEnd[o]
            }
            this.emitEvent("transitionEnd", [this])
        }
    }, d.disableTransition = function () {
        this.removeTransitionStyles(), this.element.removeEventListener(u, this, !1), this.isTransitioning = !1
    }, d._removeStyles = function (t) {
        var e = {};
        for (var i in t) e[i] = "";
        this.css(e)
    };
    var c = {transitionProperty: "", transitionDuration: "", transitionDelay: ""};
    return d.removeTransitionStyles = function () {
        this.css(c)
    }, d.stagger = function (t) {
        t = isNaN(t) ? 0 : t, this.staggerDelay = t + "ms"
    }, d.removeElem = function () {
        this.element.parentNode.removeChild(this.element), this.css({display: ""}), this.emitEvent("remove", [this])
    }, d.remove = function () {
        return r && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function () {
            this.removeElem()
        }), void this.hide()) : void this.removeElem()
    }, d.reveal = function () {
        delete this.isHidden, this.css({display: ""});
        var t = this.layout.options, e = {}, i = this.getHideRevealTransitionEndProperty("visibleStyle");
        e[i] = this.onRevealTransitionEnd, this.transition({
            from: t.hiddenStyle,
            to: t.visibleStyle,
            isCleaning: !0,
            onTransitionEnd: e
        })
    }, d.onRevealTransitionEnd = function () {
        this.isHidden || this.emitEvent("reveal")
    }, d.getHideRevealTransitionEndProperty = function (t) {
        var e = this.layout.options[t];
        if (e.opacity) return "opacity";
        for (var i in e) return i
    }, d.hide = function () {
        this.isHidden = !0, this.css({display: ""});
        var t = this.layout.options, e = {}, i = this.getHideRevealTransitionEndProperty("hiddenStyle");
        e[i] = this.onHideTransitionEnd, this.transition({
            from: t.visibleStyle,
            to: t.hiddenStyle,
            isCleaning: !0,
            onTransitionEnd: e
        })
    }, d.onHideTransitionEnd = function () {
        this.isHidden && (this.css({display: "none"}), this.emitEvent("hide"))
    }, d.destroy = function () {
        this.css({position: "", left: "", right: "", top: "", bottom: "", transition: "", transform: ""})
    }, o
}), function (t, e) {
    "function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function (i, o, n, s) {
        return e(t, i, o, n, s)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : t.Outlayer = e(t, t.EvEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item)
}(window, function (t, e, i, o, n) {

    function s(t, e) {
        var i = o.getQueryElement(t);
        if (!i) return void (u && u.error("Bad element for " + this.constructor.namespace + ": " + (i || t)));
        this.element = i, h && (this.$element = h(this.element)), this.options = o.extend({}, this.constructor.defaults), this.option(e);
        var n = ++l;
        this.element.outlayerGUID = n, f[n] = this, this._create();
        var s = this._getOption("initLayout");
        s && this.layout()
    }

    function r(t) {
        function e() {
            t.apply(this, arguments)
        }

        return e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e
    }

    function a(t) {
        if ("number" == typeof t) return t;
        var e = t.match(/(^\d*\.?\d*)(\w*)/), i = e && e[1], o = e && e[2];
        if (!i.length) return 0;
        i = parseFloat(i);
        var n = m[o] || 1;
        return i * n
    }

    var u = t.console, h = t.jQuery, d = function () {
    }, l = 0, f = {};
    s.namespace = "outlayer", s.Item = n, s.defaults = {
        containerStyle: {position: "relative"},
        initLayout: !0,
        originLeft: !0,
        originTop: !0,
        resize: !0,
        resizeContainer: !0,
        transitionDuration: "0.4s",
        hiddenStyle: {opacity: 0, transform: "scale(0.001)"},
        visibleStyle: {opacity: 1, transform: "scale(1)"}
    };
    var c = s.prototype;
    o.extend(c, e.prototype), c.option = function (t) {
        o.extend(this.options, t)
    }, c._getOption = function (t) {
        var e = this.constructor.compatOptions[t];
        return e && void 0 !== this.options[e] ? this.options[e] : this.options[t]
    }, s.compatOptions = {
        initLayout: "isInitLayout",
        horizontal: "isHorizontal",
        layoutInstant: "isLayoutInstant",
        originLeft: "isOriginLeft",
        originTop: "isOriginTop",
        resize: "isResizeBound",
        resizeContainer: "isResizingContainer"
    }, c._create = function () {
        this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), o.extend(this.element.style, this.options.containerStyle);
        var t = this._getOption("resize");
        t && this.bindResize()
    }, c.reloadItems = function () {
        this.items = this._itemize(this.element.children)
    }, c._itemize = function (t) {
        for (var e = this._filterFindItemElements(t), i = this.constructor.Item, o = [], n = 0; n < e.length; n++) {
            var s = e[n], r = new i(s, this);
            o.push(r)
        }
        return o
    }, c._filterFindItemElements = function (t) {
        return o.filterFindElements(t, this.options.itemSelector)
    }, c.getItemElements = function () {
        return this.items.map(function (t) {
            return t.element
        })
    }, c.layout = function () {
        this._resetLayout(), this._manageStamps();
        var t = this._getOption("layoutInstant"), e = void 0 !== t ? t : !this._isLayoutInited;
        this.layoutItems(this.items, e), this._isLayoutInited = !0
    }, c._init = c.layout, c._resetLayout = function () {
        this.getSize()
    }, c.getSize = function () {
        this.size = i(this.element)
    }, c._getMeasurement = function (t, e) {
        var o, n = this.options[t];
        n ? ("string" == typeof n ? o = this.element.querySelector(n) : n instanceof HTMLElement && (o = n), this[t] = o ? i(o)[e] : n) : this[t] = 0
    }, c.layoutItems = function (t, e) {
        t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout()
    }, c._getItemsForLayout = function (t) {
        return t.filter(function (t) {
            return !t.isIgnored
        })
    }, c._layoutItems = function (t, e) {
        if (this._emitCompleteOnItems("layout", t), t && t.length) {
            var i = [];
            t.forEach(function (t) {
                var o = this._getItemLayoutPosition(t);
                o.item = t, o.isInstant = e || t.isLayoutInstant, i.push(o)
            }, this), this._processLayoutQueue(i)
        }
    }, c._getItemLayoutPosition = function () {
        return {x: 0, y: 0}
    }, c._processLayoutQueue = function (t) {
        this.updateStagger(), t.forEach(function (t, e) {
            this._positionItem(t.item, t.x, t.y, t.isInstant, e)
        }, this)
    }, c.updateStagger = function () {
        var t = this.options.stagger;
        return null === t || void 0 === t ? void (this.stagger = 0) : (this.stagger = a(t), this.stagger)
    }, c._positionItem = function (t, e, i, o, n) {
        o ? t.goTo(e, i) : (t.stagger(n * this.stagger), t.moveTo(e, i))
    }, c._postLayout = function () {
        this.resizeContainer()
    }, c.resizeContainer = function () {
        var t = this._getOption("resizeContainer");
        if (t) {
            var e = this._getContainerSize();
            e && (this._setContainerMeasure(e.width, !0), this._setContainerMeasure(e.height, !1))
        }
    }, c._getContainerSize = d, c._setContainerMeasure = function (t, e) {
        if (void 0 !== t) {
            var i = this.size;
            i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px"
        }
    }, c._emitCompleteOnItems = function (t, e) {
        function i() {
            n.dispatchEvent(t + "Complete", null, [e])
        }

        function o() {
            r++, r == s && i()
        }

        var n = this, s = e.length;
        if (!e || !s) return void i();
        var r = 0;
        e.forEach(function (e) {
            e.once(t, o)
        })
    }, c.dispatchEvent = function (t, e, i) {
        var o = e ? [e].concat(i) : i;
        if (this.emitEvent(t, o), h) if (this.$element = this.$element || h(this.element), e) {
            var n = h.Event(e);
            n.type = t, this.$element.trigger(n, i)
        } else this.$element.trigger(t, i)
    }, c.ignore = function (t) {
        var e = this.getItem(t);
        e && (e.isIgnored = !0)
    }, c.unignore = function (t) {
        var e = this.getItem(t);
        e && delete e.isIgnored
    }, c.stamp = function (t) {
        t = this._find(t), t && (this.stamps = this.stamps.concat(t), t.forEach(this.ignore, this))
    }, c.unstamp = function (t) {
        t = this._find(t), t && t.forEach(function (t) {
            o.removeFrom(this.stamps, t), this.unignore(t)
        }, this)
    }, c._find = function (t) {
        if (t) return "string" == typeof t && (t = this.element.querySelectorAll(t)), t = o.makeArray(t)
    }, c._manageStamps = function () {
        this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this))
    }, c._getBoundingRect = function () {
        var t = this.element.getBoundingClientRect(), e = this.size;
        this._boundingRect = {
            left: t.left + e.paddingLeft + e.borderLeftWidth,
            top: t.top + e.paddingTop + e.borderTopWidth,
            right: t.right - (e.paddingRight + e.borderRightWidth),
            bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
        }
    }, c._manageStamp = d, c._getElementOffset = function (t) {
        var e = t.getBoundingClientRect(), o = this._boundingRect, n = i(t), s = {
            left: e.left - o.left - n.marginLeft,
            top: e.top - o.top - n.marginTop,
            right: o.right - e.right - n.marginRight,
            bottom: o.bottom - e.bottom - n.marginBottom
        };
        return s
    }, c.handleEvent = o.handleEvent, c.bindResize = function () {
        t.addEventListener("resize", this), this.isResizeBound = !0
    }, c.unbindResize = function () {
        t.removeEventListener("resize", this), this.isResizeBound = !1
    }, c.onresize = function () {
        this.resize()
    }, o.debounceMethod(s, "onresize", 100), c.resize = function () {
        this.isResizeBound && this.needsResizeLayout() && this.layout()
    }, c.needsResizeLayout = function () {
        var t = i(this.element), e = this.size && t;
        return e && t.innerWidth !== this.size.innerWidth
    }, c.addItems = function (t) {
        var e = this._itemize(t);
        return e.length && (this.items = this.items.concat(e)), e
    }, c.appended = function (t) {
        var e = this.addItems(t);
        e.length && (this.layoutItems(e, !0), this.reveal(e))
    }, c.prepended = function (t) {
        var e = this._itemize(t);
        if (e.length) {
            var i = this.items.slice(0);
            this.items = e.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i)
        }
    }, c.reveal = function (t) {
        if (this._emitCompleteOnItems("reveal", t), t && t.length) {
            var e = this.updateStagger();
            t.forEach(function (t, i) {
                t.stagger(i * e), t.reveal()
            })
        }
    }, c.hide = function (t) {
        if (this._emitCompleteOnItems("hide", t), t && t.length) {
            var e = this.updateStagger();
            t.forEach(function (t, i) {
                t.stagger(i * e), t.hide()
            })
        }
    }, c.revealItemElements = function (t) {
        var e = this.getItems(t);
        this.reveal(e)
    }, c.hideItemElements = function (t) {
        var e = this.getItems(t);
        this.hide(e)
    }, c.getItem = function (t) {
        for (var e = 0; e < this.items.length; e++) {
            var i = this.items[e];
            if (i.element == t) return i
        }
    }, c.getItems = function (t) {
        t = o.makeArray(t);
        var e = [];
        return t.forEach(function (t) {
            var i = this.getItem(t);
            i && e.push(i)
        }, this), e
    }, c.remove = function (t) {
        var e = this.getItems(t);
        this._emitCompleteOnItems("remove", e), e && e.length && e.forEach(function (t) {
            t.remove(), o.removeFrom(this.items, t)
        }, this)
    }, c.destroy = function () {
        var t = this.element.style;
        t.height = "", t.position = "", t.width = "", this.items.forEach(function (t) {
            t.destroy()
        }), this.unbindResize();
        var e = this.element.outlayerGUID;
        delete f[e], delete this.element.outlayerGUID, h && h.removeData(this.element, this.constructor.namespace)
    }, s.data = function (t) {
        t = o.getQueryElement(t);
        var e = t && t.outlayerGUID;
        return e && f[e]
    }, s.create = function (t, e) {
        var i = r(s);
        return i.defaults = o.extend({}, s.defaults), o.extend(i.defaults, e), i.compatOptions = o.extend({}, s.compatOptions), i.namespace = t, i.data = s.data, i.Item = r(n), o.htmlInit(i, t), h && h.bridget && h.bridget(t, i), i
    };
    var m = {ms: 1, s: 1e3};
    return s.Item = n, s
}), function (t, e) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/item", ["outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.Item = e(t.Outlayer))
}(window, function (t) {

    function e() {
        t.Item.apply(this, arguments)
    }

    var i = e.prototype = Object.create(t.Item.prototype), o = i._create;
    i._create = function () {
        this.id = this.layout.itemGUID++, o.call(this), this.sortData = {}
    }, i.updateSortData = function () {
        if (!this.isIgnored) {
            this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
            var t = this.layout.options.getSortData, e = this.layout._sorters;
            for (var i in t) {
                var o = e[i];
                this.sortData[i] = o(this.element, this)
            }
        }
    };
    var n = i.destroy;
    return i.destroy = function () {
        n.apply(this, arguments), this.css({display: ""})
    }, e
}), function (t, e) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("get-size"), require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.LayoutMode = e(t.getSize, t.Outlayer))
}(window, function (t, e) {

    function i(t) {
        this.isotope = t, t && (this.options = t.options[this.namespace], this.element = t.element, this.items = t.filteredItems, this.size = t.size)
    }

    var o = i.prototype,
        n = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout", "_getOption"];
    return n.forEach(function (t) {
        o[t] = function () {
            return e.prototype[t].apply(this.isotope, arguments)
        }
    }), o.needsVerticalResizeLayout = function () {
        var e = t(this.isotope.element), i = this.isotope.size && e;
        return i && e.innerHeight != this.isotope.size.innerHeight
    }, o._getMeasurement = function () {
        this.isotope._getMeasurement.apply(this, arguments)
    }, o.getColumnWidth = function () {
        this.getSegmentSize("column", "Width")
    }, o.getRowHeight = function () {
        this.getSegmentSize("row", "Height")
    }, o.getSegmentSize = function (t, e) {
        var i = t + e, o = "outer" + e;
        if (this._getMeasurement(i, o), !this[i]) {
            var n = this.getFirstItemSize();
            this[i] = n && n[o] || this.isotope.size["inner" + e]
        }
    }, o.getFirstItemSize = function () {
        var e = this.isotope.filteredItems[0];
        return e && e.element && t(e.element)
    }, o.layout = function () {
        this.isotope.layout.apply(this.isotope, arguments)
    }, o.getSize = function () {
        this.isotope.getSize(), this.size = this.isotope.size
    }, i.modes = {}, i.create = function (t, e) {
        function n() {
            i.apply(this, arguments)
        }

        return n.prototype = Object.create(o), n.prototype.constructor = n, e && (n.options = e), n.prototype.namespace = t, i.modes[t] = n, n
    }, i
}), function (t, e) {
    "function" == typeof define && define.amd ? define("masonry-layout/masonry", ["outlayer/outlayer", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer"), require("get-size")) : t.Masonry = e(t.Outlayer, t.getSize)
}(window, function (t, e) {
    var i = t.create("masonry");
    i.compatOptions.fitWidth = "isFitWidth";
    var o = i.prototype;
    return o._resetLayout = function () {
        this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), this.colYs = [];
        for (var t = 0; t < this.cols; t++) this.colYs.push(0);
        this.maxY = 0, this.horizontalColIndex = 0
    }, o.measureColumns = function () {
        if (this.getContainerWidth(), !this.columnWidth) {
            var t = this.items[0], i = t && t.element;
            this.columnWidth = i && e(i).outerWidth || this.containerWidth
        }
        var o = this.columnWidth += this.gutter, n = this.containerWidth + this.gutter, s = n / o, r = o - n % o,
            a = r && r < 1 ? "round" : "floor";
        s = Math[a](s), this.cols = Math.max(s, 1)
    }, o.getContainerWidth = function () {
        var t = this._getOption("fitWidth"), i = t ? this.element.parentNode : this.element, o = e(i);
        this.containerWidth = o && o.innerWidth
    }, o._getItemLayoutPosition = function (t) {
        t.getSize();
        var e = t.size.outerWidth % this.columnWidth, i = e && e < 1 ? "round" : "ceil",
            o = Math[i](t.size.outerWidth / this.columnWidth);
        o = Math.min(o, this.cols);
        for (var n = this.options.horizontalOrder ? "_getHorizontalColPosition" : "_getTopColPosition", s = this[n](o, t), r = {
            x: this.columnWidth * s.col,
            y: s.y
        }, a = s.y + t.size.outerHeight, u = o + s.col, h = s.col; h < u; h++) this.colYs[h] = a;
        return r
    }, o._getTopColPosition = function (t) {
        var e = this._getTopColGroup(t), i = Math.min.apply(Math, e);
        return {col: e.indexOf(i), y: i}
    }, o._getTopColGroup = function (t) {
        if (t < 2) return this.colYs;
        for (var e = [], i = this.cols + 1 - t, o = 0; o < i; o++) e[o] = this._getColGroupY(o, t);
        return e
    }, o._getColGroupY = function (t, e) {
        if (e < 2) return this.colYs[t];
        var i = this.colYs.slice(t, t + e);
        return Math.max.apply(Math, i)
    }, o._getHorizontalColPosition = function (t, e) {
        var i = this.horizontalColIndex % this.cols, o = t > 1 && i + t > this.cols;
        i = o ? 0 : i;
        var n = e.size.outerWidth && e.size.outerHeight;
        return this.horizontalColIndex = n ? i + t : this.horizontalColIndex, {col: i, y: this._getColGroupY(i, t)}
    }, o._manageStamp = function (t) {
        var i = e(t), o = this._getElementOffset(t), n = this._getOption("originLeft"), s = n ? o.left : o.right,
            r = s + i.outerWidth, a = Math.floor(s / this.columnWidth);
        a = Math.max(0, a);
        var u = Math.floor(r / this.columnWidth);
        u -= r % this.columnWidth ? 0 : 1, u = Math.min(this.cols - 1, u);
        for (var h = this._getOption("originTop"), d = (h ? o.top : o.bottom) + i.outerHeight, l = a; l <= u; l++) this.colYs[l] = Math.max(d, this.colYs[l])
    }, o._getContainerSize = function () {
        this.maxY = Math.max.apply(Math, this.colYs);
        var t = {height: this.maxY};
        return this._getOption("fitWidth") && (t.width = this._getContainerFitWidth()), t
    }, o._getContainerFitWidth = function () {
        for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];) t++;
        return (this.cols - t) * this.columnWidth - this.gutter
    }, o.needsResizeLayout = function () {
        var t = this.containerWidth;
        return this.getContainerWidth(), t != this.containerWidth
    }, i
}), function (t, e) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/masonry", ["../layout-mode", "masonry-layout/masonry"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode"), require("masonry-layout")) : e(t.Isotope.LayoutMode, t.Masonry)
}(window, function (t, e) {
    var i = t.create("masonry"), o = i.prototype, n = {_getElementOffset: !0, layout: !0, _getMeasurement: !0};
    for (var s in e.prototype) n[s] || (o[s] = e.prototype[s]);
    var r = o.measureColumns;
    o.measureColumns = function () {
        this.items = this.isotope.filteredItems, r.call(this)
    };
    var a = o._getOption;
    return o._getOption = function (t) {
        return "fitWidth" == t ? void 0 !== this.options.isFitWidth ? this.options.isFitWidth : this.options.fitWidth : a.apply(this.isotope, arguments)
    }, i
}), function (t, e) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/fit-rows", ["../layout-mode"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
}(window, function (t) {
    var e = t.create("fitRows"), i = e.prototype;
    return i._resetLayout = function () {
        this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth")
    }, i._getItemLayoutPosition = function (t) {
        t.getSize();
        var e = t.size.outerWidth + this.gutter, i = this.isotope.size.innerWidth + this.gutter;
        0 !== this.x && e + this.x > i && (this.x = 0, this.y = this.maxY);
        var o = {x: this.x, y: this.y};
        return this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight), this.x += e, o
    }, i._getContainerSize = function () {
        return {height: this.maxY}
    }, e
}), function (t, e) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/vertical", ["../layout-mode"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
}(window, function (t) {
    var e = t.create("vertical", {horizontalAlignment: 0}), i = e.prototype;
    return i._resetLayout = function () {
        this.y = 0
    }, i._getItemLayoutPosition = function (t) {
        t.getSize();
        var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment, i = this.y;
        return this.y += t.size.outerHeight, {x: e, y: i}
    }, i._getContainerSize = function () {
        return {height: this.y}
    }, e
}), function (t, e) {
    "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "desandro-matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope-layout/js/item", "isotope-layout/js/layout-mode", "isotope-layout/js/layout-modes/masonry", "isotope-layout/js/layout-modes/fit-rows", "isotope-layout/js/layout-modes/vertical"], function (i, o, n, s, r, a) {
        return e(t, i, o, n, s, r, a)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("isotope-layout/js/item"), require("isotope-layout/js/layout-mode"), require("isotope-layout/js/layout-modes/masonry"), require("isotope-layout/js/layout-modes/fit-rows"), require("isotope-layout/js/layout-modes/vertical")) : t.Isotope = e(t, t.Outlayer, t.getSize, t.matchesSelector, t.fizzyUIUtils, t.Isotope.Item, t.Isotope.LayoutMode)
}(window, function (t, e, i, o, n, s, r) {
    function a(t, e) {
        return function (i, o) {
            for (var n = 0; n < t.length; n++) {
                var s = t[n], r = i.sortData[s], a = o.sortData[s];
                if (r > a || r < a) {
                    var u = void 0 !== e[s] ? e[s] : e, h = u ? 1 : -1;
                    return (r > a ? 1 : -1) * h
                }
            }
            return 0
        }
    }

    var u = t.jQuery, h = String.prototype.trim ? function (t) {
        return t.trim()
    } : function (t) {
        return t.replace(/^\s+|\s+$/g, "")
    }, d = e.create("isotope", {layoutMode: "masonry", isJQueryFiltering: !0, sortAscending: !0});
    d.Item = s, d.LayoutMode = r;
    var l = d.prototype;
    l._create = function () {
        this.itemGUID = 0, this._sorters = {}, this._getSorters(), e.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"];
        for (var t in r.modes) this._initLayoutMode(t)
    }, l.reloadItems = function () {
        this.itemGUID = 0, e.prototype.reloadItems.call(this)
    }, l._itemize = function () {
        for (var t = e.prototype._itemize.apply(this, arguments), i = 0; i < t.length; i++) {
            var o = t[i];
            o.id = this.itemGUID++
        }
        return this._updateItemsSortData(t), t
    }, l._initLayoutMode = function (t) {
        var e = r.modes[t], i = this.options[t] || {};
        this.options[t] = e.options ? n.extend(e.options, i) : i, this.modes[t] = new e(this)
    }, l.layout = function () {
        return !this._isLayoutInited && this._getOption("initLayout") ? void this.arrange() : void this._layout()
    }, l._layout = function () {
        var t = this._getIsInstant();
        this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, t), this._isLayoutInited = !0
    }, l.arrange = function (t) {
        this.option(t), this._getIsInstant();
        var e = this._filter(this.items);
        this.filteredItems = e.matches, this._bindArrangeComplete(), this._isInstant ? this._noTransition(this._hideReveal, [e]) : this._hideReveal(e), this._sort(), this._layout()
    }, l._init = l.arrange, l._hideReveal = function (t) {
        this.reveal(t.needReveal), this.hide(t.needHide)
    }, l._getIsInstant = function () {
        var t = this._getOption("layoutInstant"), e = void 0 !== t ? t : !this._isLayoutInited;
        return this._isInstant = e, e
    }, l._bindArrangeComplete = function () {
        function t() {
            e && i && o && n.dispatchEvent("arrangeComplete", null, [n.filteredItems])
        }

        var e, i, o, n = this;
        this.once("layoutComplete", function () {
            e = !0, t()
        }), this.once("hideComplete", function () {
            i = !0, t()
        }), this.once("revealComplete", function () {
            o = !0, t()
        })
    }, l._filter = function (t) {
        var e = this.options.filter;
        e = e || "*";
        for (var i = [], o = [], n = [], s = this._getFilterTest(e), r = 0; r < t.length; r++) {
            var a = t[r];
            if (!a.isIgnored) {
                var u = s(a);
                u && i.push(a), u && a.isHidden ? o.push(a) : u || a.isHidden || n.push(a)
            }
        }
        return {matches: i, needReveal: o, needHide: n}
    }, l._getFilterTest = function (t) {
        return u && this.options.isJQueryFiltering ? function (e) {
            return u(e.element).is(t)
        } : "function" == typeof t ? function (e) {
            return t(e.element)
        } : function (e) {
            return o(e.element, t)
        }
    }, l.updateSortData = function (t) {
        var e;
        t ? (t = n.makeArray(t), e = this.getItems(t)) : e = this.items, this._getSorters(), this._updateItemsSortData(e)
    }, l._getSorters = function () {
        var t = this.options.getSortData;
        for (var e in t) {
            var i = t[e];
            this._sorters[e] = f(i)
        }
    }, l._updateItemsSortData = function (t) {
        for (var e = t && t.length, i = 0; e && i < e; i++) {
            var o = t[i];
            o.updateSortData()
        }
    };
    var f = function () {
        function t(t) {
            if ("string" != typeof t) return t;
            var i = h(t).split(" "), o = i[0], n = o.match(/^\[(.+)\]$/), s = n && n[1], r = e(s, o),
                a = d.sortDataParsers[i[1]];
            return t = a ? function (t) {
                return t && a(r(t))
            } : function (t) {
                return t && r(t)
            }
        }

        function e(t, e) {
            return t ? function (e) {
                return e.getAttribute(t)
            } : function (t) {
                var i = t.querySelector(e);
                return i && i.textContent
            }
        }

        return t
    }();
    d.sortDataParsers = {
        parseInt: function (t) {
            return parseInt(t, 10)
        }, parseFloat: function (t) {
            return parseFloat(t)
        }
    }, l._sort = function () {
        if (this.options.sortBy) {
            var t = n.makeArray(this.options.sortBy);
            this._getIsSameSortBy(t) || (this.sortHistory = t.concat(this.sortHistory));
            var e = a(this.sortHistory, this.options.sortAscending);
            this.filteredItems.sort(e)
        }
    }, l._getIsSameSortBy = function (t) {
        for (var e = 0; e < t.length; e++) if (t[e] != this.sortHistory[e]) return !1;
        return !0
    }, l._mode = function () {
        var t = this.options.layoutMode, e = this.modes[t];
        if (!e) throw new Error("No layout mode: " + t);
        return e.options = this.options[t], e
    }, l._resetLayout = function () {
        e.prototype._resetLayout.call(this), this._mode()._resetLayout()
    }, l._getItemLayoutPosition = function (t) {
        return this._mode()._getItemLayoutPosition(t)
    }, l._manageStamp = function (t) {
        this._mode()._manageStamp(t)
    }, l._getContainerSize = function () {
        return this._mode()._getContainerSize()
    }, l.needsResizeLayout = function () {
        return this._mode().needsResizeLayout()
    }, l.appended = function (t) {
        var e = this.addItems(t);
        if (e.length) {
            var i = this._filterRevealAdded(e);
            this.filteredItems = this.filteredItems.concat(i)
        }
    }, l.prepended = function (t) {
        var e = this._itemize(t);
        if (e.length) {
            this._resetLayout(), this._manageStamps();
            var i = this._filterRevealAdded(e);
            this.layoutItems(this.filteredItems), this.filteredItems = i.concat(this.filteredItems), this.items = e.concat(this.items)
        }
    }, l._filterRevealAdded = function (t) {
        var e = this._filter(t);
        return this.hide(e.needHide), this.reveal(e.matches), this.layoutItems(e.matches, !0), e.matches
    }, l.insert = function (t) {
        var e = this.addItems(t);
        if (e.length) {
            var i, o, n = e.length;
            for (i = 0; i < n; i++) o = e[i], this.element.appendChild(o.element);
            var s = this._filter(e).matches;
            for (i = 0; i < n; i++) e[i].isLayoutInstant = !0;
            for (this.arrange(), i = 0; i < n; i++) delete e[i].isLayoutInstant;
            this.reveal(s)
        }
    };
    var c = l.remove;
    return l.remove = function (t) {
        t = n.makeArray(t);
        var e = this.getItems(t);
        c.call(this, t);
        for (var i = e && e.length, o = 0; i && o < i; o++) {
            var s = e[o];
            n.removeFrom(this.filteredItems, s)
        }
    }, l.shuffle = function () {
        for (var t = 0; t < this.items.length; t++) {
            var e = this.items[t];
            e.sortData.random = Math.random()
        }
        this.options.sortBy = "random", this._sort(), this._layout()
    }, l._noTransition = function (t, e) {
        var i = this.options.transitionDuration;
        this.options.transitionDuration = 0;
        var o = t.apply(this, e);
        return this.options.transitionDuration = i, o
    }, l.getFilteredItemElements = function () {
        return this.filteredItems.map(function (t) {
            return t.element
        })
    }, d
});
!function (e, t) {
    "function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t() : e.PhotoSwipe = t()
}(this, function () {
    return function (e, t, n, i) {
        var o = {
            features: null, bind: function (e, t, n, i) {
                var o = (i ? "remove" : "add") + "EventListener";
                t = t.split(" ");
                for (var a = 0; a < t.length; a++) t[a] && e[o](t[a], n, !1)
            }, isArray: function (e) {
                return e instanceof Array
            }, createEl: function (e, t) {
                var n = document.createElement(t || "div");
                return e && (n.className = e), n
            }, getScrollY: function () {
                var e = window.pageYOffset;
                return e !== undefined ? e : document.documentElement.scrollTop
            }, unbind: function (e, t, n) {
                o.bind(e, t, n, !0)
            }, removeClass: function (e, t) {
                var n = new RegExp("(\\s|^)" + t + "(\\s|$)");
                e.className = e.className.replace(n, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "")
            }, addClass: function (e, t) {
                o.hasClass(e, t) || (e.className += (e.className ? " " : "") + t)
            }, hasClass: function (e, t) {
                return e.className && new RegExp("(^|\\s)" + t + "(\\s|$)").test(e.className)
            }, getChildByClass: function (e, t) {
                for (var n = e.firstChild; n;) {
                    if (o.hasClass(n, t)) return n;
                    n = n.nextSibling
                }
            }, arraySearch: function (e, t, n) {
                for (var i = e.length; i--;) if (e[i][n] === t) return i;
                return -1
            }, extend: function (e, t, n) {
                for (var i in t) if (t.hasOwnProperty(i)) {
                    if (n && e.hasOwnProperty(i)) continue;
                    e[i] = t[i]
                }
            }, easing: {
                sine: {
                    out: function (e) {
                        return Math.sin(e * (Math.PI / 2))
                    }, inOut: function (e) {
                        return -(Math.cos(Math.PI * e) - 1) / 2
                    }
                }, cubic: {
                    out: function (e) {
                        return --e * e * e + 1
                    }
                }
            }, detectFeatures: function () {
                if (o.features) return o.features;
                var e = o.createEl().style, t = "", n = {};
                if (n.oldIE = document.all && !document.addEventListener, n.touch = "ontouchstart" in window, window.requestAnimationFrame && (n.raf = window.requestAnimationFrame, n.caf = window.cancelAnimationFrame), n.pointerEvent = navigator.pointerEnabled || navigator.msPointerEnabled, !n.pointerEvent) {
                    var i = navigator.userAgent;
                    if (/iP(hone|od)/.test(navigator.platform)) {
                        var a = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
                        a && a.length > 0 && (a = parseInt(a[1], 10)) >= 1 && a < 8 && (n.isOldIOSPhone = !0)
                    }
                    var r = i.match(/Android\s([0-9\.]*)/), l = r ? r[1] : 0;
                    (l = parseFloat(l)) >= 1 && (l < 4.4 && (n.isOldAndroid = !0), n.androidVersion = l), n.isMobileOpera = /opera mini|opera mobi/i.test(i)
                }
                for (var s, u, c = ["transform", "perspective", "animationName"], d = ["", "webkit", "Moz", "ms", "O"], p = 0; p < 4; p++) {
                    t = d[p];
                    for (var m = 0; m < 3; m++) s = c[m], u = t + (t ? s.charAt(0).toUpperCase() + s.slice(1) : s), !n[s] && u in e && (n[s] = u);
                    t && !n.raf && (t = t.toLowerCase(), n.raf = window[t + "RequestAnimationFrame"], n.raf && (n.caf = window[t + "CancelAnimationFrame"] || window[t + "CancelRequestAnimationFrame"]))
                }
                if (!n.raf) {
                    var f = 0;
                    n.raf = function (e) {
                        var t = (new Date).getTime(), n = Math.max(0, 16 - (t - f)), i = window.setTimeout(function () {
                            e(t + n)
                        }, n);
                        return f = t + n, i
                    }, n.caf = function (e) {
                        clearTimeout(e)
                    }
                }
                return n.svg = !!document.createElementNS && !!document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect, o.features = n, n
            }
        };
        o.detectFeatures(), o.features.oldIE && (o.bind = function (e, t, n, i) {
            t = t.split(" ");
            for (var o, a = (i ? "detach" : "attach") + "Event", r = 0; r < t.length; r++) if (o = t[r]) if ("object" == typeof n && n.handleEvent) {
                if (i) {
                    if (!n["oldIE" + o]) return !1
                } else n["oldIE" + o] = function () {
                    n.handleEvent.call(n)
                };
                e[a]("on" + o, n["oldIE" + o])
            } else e[a]("on" + o, n)
        });
        var a = this, r = {
            allowPanToNext: !0,
            spacing: .12,
            bgOpacity: 1,
            mouseUsed: !1,
            loop: !0,
            pinchToClose: !0,
            closeOnScroll: !0,
            closeOnVerticalDrag: !0,
            verticalDragRange: .75,
            hideAnimationDuration: 333,
            showAnimationDuration: 333,
            showHideOpacity: !1,
            focus: !0,
            escKey: !0,
            arrowKeys: !0,
            mainScrollEndFriction: .35,
            panEndFriction: .35,
            isClickableElement: function (e) {
                return "A" === e.tagName
            },
            getDoubleTapZoom: function (e, t) {
                return e ? 1 : t.initialZoomLevel < .7 ? 1 : 1.33
            },
            maxSpreadZoom: 1.33,
            modal: !0,
            scaleMode: "fit"
        };
        o.extend(r, i);
        var l, s, u, c, d, p, m, f, h, y, x, v, g, w, b, I, C, D, M, T, S, A, E, O, k, R, Z, P, F, L, _, z, N, U, H, Y,
            B, W, G, X, V, K, q, $, j, J, Q, ee, te, ne, ie, oe, ae, re, le, se, ue = {x: 0, y: 0}, ce = {x: 0, y: 0},
            de = {x: 0, y: 0}, pe = {}, me = 0, fe = {}, he = {x: 0, y: 0}, ye = 0, xe = !0, ve = [], ge = {}, we = !1,
            be = function (e, t) {
                o.extend(a, t.publicMethods), ve.push(e)
            }, Ie = function (e) {
                var t = Kt();
                return e > t - 1 ? e - t : e < 0 ? t + e : e
            }, Ce = {}, De = function (e, t) {
                return Ce[e] || (Ce[e] = []), Ce[e].push(t)
            }, Me = function (e) {
                var t = Ce[e];
                if (t) {
                    var n = Array.prototype.slice.call(arguments);
                    n.shift();
                    for (var i = 0; i < t.length; i++) t[i].apply(a, n)
                }
            }, Te = function () {
                return (new Date).getTime()
            }, Se = function (e) {
                re = e, a.bg.style.opacity = e * r.bgOpacity
            }, Ae = function (e, t, n, i, o) {
                (!we || o && o !== a.currItem) && (i /= o ? o.fitRatio : a.currItem.fitRatio), e[A] = v + t + "px, " + n + "px" + g + " scale(" + i + ")"
            }, Ee = function (e) {
                te && (e && (y > a.currItem.fitRatio ? we || (rn(a.currItem, !1, !0), we = !0) : we && (rn(a.currItem), we = !1)), Ae(te, de.x, de.y, y))
            }, Oe = function (e) {
                e.container && Ae(e.container.style, e.initialPosition.x, e.initialPosition.y, e.initialZoomLevel, e)
            }, ke = function (e, t) {
                t[A] = v + e + "px, 0px" + g
            }, Re = function (e, t) {
                if (!r.loop && t) {
                    var n = c + (he.x * me - e) / he.x, i = Math.round(e - mt.x);
                    (n < 0 && i > 0 || n >= Kt() - 1 && i < 0) && (e = mt.x + i * r.mainScrollEndFriction)
                }
                mt.x = e, ke(e, d)
            }, Ze = function (e, t) {
                var n = ft[e] - fe[e];
                return ce[e] + ue[e] + n - n * (t / x)
            }, Pe = function (e, t) {
                e.x = t.x, e.y = t.y, t.id && (e.id = t.id)
            }, Fe = function (e) {
                e.x = Math.round(e.x), e.y = Math.round(e.y)
            }, Le = null, _e = function () {
                Le && (o.unbind(document, "mousemove", _e), o.addClass(e, "pswp--has_mouse"), r.mouseUsed = !0, Me("mouseUsed")), Le = setTimeout(function () {
                    Le = null
                }, 100)
            }, ze = function () {
                o.bind(document, "keydown", a), _.transform && o.bind(a.scrollWrap, "click", a), r.mouseUsed || o.bind(document, "mousemove", _e), o.bind(window, "resize scroll", a), Me("bindEvents")
            }, Ne = function () {
                o.unbind(window, "resize", a), o.unbind(window, "scroll", h.scroll), o.unbind(document, "keydown", a), o.unbind(document, "mousemove", _e), _.transform && o.unbind(a.scrollWrap, "click", a), W && o.unbind(window, m, a), Me("unbindEvents")
            }, Ue = function (e, t) {
                var n = tn(a.currItem, pe, e);
                return t && (ee = n), n
            }, He = function (e) {
                return e || (e = a.currItem), e.initialZoomLevel
            }, Ye = function (e) {
                return e || (e = a.currItem), e.w > 0 ? r.maxSpreadZoom : 1
            }, Be = function (e, t, n, i) {
                return i === a.currItem.initialZoomLevel ? (n[e] = a.currItem.initialPosition[e], !0) : (n[e] = Ze(e, i), n[e] > t.min[e] ? (n[e] = t.min[e], !0) : n[e] < t.max[e] && (n[e] = t.max[e], !0))
            }, We = function () {
                if (A) {
                    var t = _.perspective && !O;
                    return v = "translate" + (t ? "3d(" : "("), void (g = _.perspective ? ", 0px)" : ")")
                }
                A = "left", o.addClass(e, "pswp--ie"), ke = function (e, t) {
                    t.left = e + "px"
                }, Oe = function (e) {
                    var t = e.fitRatio > 1 ? 1 : e.fitRatio, n = e.container.style, i = t * e.w, o = t * e.h;
                    n.width = i + "px", n.height = o + "px", n.left = e.initialPosition.x + "px", n.top = e.initialPosition.y + "px"
                }, Ee = function () {
                    if (te) {
                        var e = te, t = a.currItem, n = t.fitRatio > 1 ? 1 : t.fitRatio, i = n * t.w, o = n * t.h;
                        e.width = i + "px", e.height = o + "px", e.left = de.x + "px", e.top = de.y + "px"
                    }
                }
            }, Ge = function (e) {
                var t = "";
                r.escKey && 27 === e.keyCode ? t = "close" : r.arrowKeys && (37 === e.keyCode ? t = "prev" : 39 === e.keyCode && (t = "next")), t && (e.ctrlKey || e.altKey || e.shiftKey || e.metaKey || (e.preventDefault ? e.preventDefault() : e.returnValue = !1, a[t]()))
            }, Xe = function (e) {
                e && (V || X || ne || Y) && (e.preventDefault(), e.stopPropagation())
            }, Ve = function () {
                a.setScrollOffset(0, o.getScrollY())
            }, Ke = {}, qe = 0, $e = function (e) {
                Ke[e] && (Ke[e].raf && R(Ke[e].raf), qe--, delete Ke[e])
            }, je = function (e) {
                Ke[e] && $e(e), Ke[e] || (qe++, Ke[e] = {})
            }, Je = function () {
                for (var e in Ke) Ke.hasOwnProperty(e) && $e(e)
            }, Qe = function (e, t, n, i, o, a, r) {
                var l, s = Te();
                je(e);
                var u = function () {
                    if (Ke[e]) {
                        if ((l = Te() - s) >= i) return $e(e), a(n), void (r && r());
                        a((n - t) * o(l / i) + t), Ke[e].raf = k(u)
                    }
                };
                u()
            }, et = {
                shout: Me, listen: De, viewportSize: pe, options: r, isMainScrollAnimating: function () {
                    return ne
                }, getZoomLevel: function () {
                    return y
                }, getCurrentIndex: function () {
                    return c
                }, isDragging: function () {
                    return W
                }, isZooming: function () {
                    return j
                }, setScrollOffset: function (e, t) {
                    fe.x = e, L = fe.y = t, Me("updateScrollOffset", fe)
                }, applyZoomPan: function (e, t, n, i) {
                    de.x = t, de.y = n, y = e, Ee(i)
                }, init: function () {
                    if (!l && !s) {
                        var n;
                        a.framework = o, a.template = e, a.bg = o.getChildByClass(e, "pswp__bg"), Z = e.className, l = !0, _ = o.detectFeatures(), k = _.raf, R = _.caf, A = _.transform, F = _.oldIE, a.scrollWrap = o.getChildByClass(e, "pswp__scroll-wrap"), a.container = o.getChildByClass(a.scrollWrap, "pswp__container"), d = a.container.style, a.itemHolders = I = [{
                            el: a.container.children[0],
                            wrap: 0,
                            index: -1
                        }, {el: a.container.children[1], wrap: 0, index: -1}, {
                            el: a.container.children[2],
                            wrap: 0,
                            index: -1
                        }], I[0].el.style.display = I[2].el.style.display = "none", We(), h = {
                            resize: a.updateSize,
                            scroll: Ve,
                            keydown: Ge,
                            click: Xe
                        };
                        var i = _.isOldIOSPhone || _.isOldAndroid || _.isMobileOpera;
                        for (_.animationName && _.transform && !i || (r.showAnimationDuration = r.hideAnimationDuration = 0), n = 0; n < ve.length; n++) a["init" + ve[n]]();
                        t && (a.ui = new t(a, o)).init(), Me("firstUpdate"), c = c || r.index || 0, (isNaN(c) || c < 0 || c >= Kt()) && (c = 0), a.currItem = Vt(c), (_.isOldIOSPhone || _.isOldAndroid) && (xe = !1), e.setAttribute("aria-hidden", "false"), r.modal && (xe ? e.style.position = "fixed" : (e.style.position = "absolute", e.style.top = o.getScrollY() + "px")), L === undefined && (Me("initialLayout"), L = P = o.getScrollY());
                        var u = "pswp--open ";
                        for (r.mainClass && (u += r.mainClass + " "), r.showHideOpacity && (u += "pswp--animate_opacity "), u += O ? "pswp--touch" : "pswp--notouch", u += _.animationName ? " pswp--css_animation" : "", u += _.svg ? " pswp--svg" : "", o.addClass(e, u), a.updateSize(), p = -1, ye = null, n = 0; n < 3; n++) ke((n + p) * he.x, I[n].el.style);
                        F || o.bind(a.scrollWrap, f, a), De("initialZoomInEnd", function () {
                            a.setContent(I[0], c - 1), a.setContent(I[2], c + 1), I[0].el.style.display = I[2].el.style.display = "block", r.focus && e.focus(), ze()
                        }), a.setContent(I[1], c), a.updateCurrItem(), Me("afterInit"), xe || (w = setInterval(function () {
                            qe || W || j || y !== a.currItem.initialZoomLevel || a.updateSize()
                        }, 1e3)), o.addClass(e, "pswp--visible")
                    }
                }, close: function () {
                    l && (l = !1, s = !0, Me("close"), Ne(), $t(a.currItem, null, !0, a.destroy))
                }, destroy: function () {
                    Me("destroy"), Bt && clearTimeout(Bt), e.setAttribute("aria-hidden", "true"), e.className = Z, w && clearInterval(w), o.unbind(a.scrollWrap, f, a), o.unbind(window, "scroll", a), gt(), Je(), Ce = null
                }, panTo: function (e, t, n) {
                    n || (e > ee.min.x ? e = ee.min.x : e < ee.max.x && (e = ee.max.x), t > ee.min.y ? t = ee.min.y : t < ee.max.y && (t = ee.max.y)), de.x = e, de.y = t, Ee()
                }, handleEvent: function (e) {
                    e = e || window.event, h[e.type] && h[e.type](e)
                }, goTo: function (e) {
                    var t = (e = Ie(e)) - c;
                    ye = t, c = e, a.currItem = Vt(c), me -= t, Re(he.x * me), Je(), ne = !1, a.updateCurrItem()
                }, next: function () {
                    a.goTo(c + 1)
                }, prev: function () {
                    a.goTo(c - 1)
                }, updateCurrZoomItem: function (e) {
                    if (e && Me("beforeChange", 0), I[1].el.children.length) {
                        var t = I[1].el.children[0];
                        te = o.hasClass(t, "pswp__zoom-wrap") ? t.style : null
                    } else te = null;
                    ee = a.currItem.bounds, x = y = a.currItem.initialZoomLevel, de.x = ee.center.x, de.y = ee.center.y, e && Me("afterChange")
                }, invalidateCurrItems: function () {
                    b = !0;
                    for (var e = 0; e < 3; e++) I[e].item && (I[e].item.needsUpdate = !0)
                }, updateCurrItem: function (e) {
                    if (0 !== ye) {
                        var t, n = Math.abs(ye);
                        if (!(e && n < 2)) {
                            a.currItem = Vt(c), we = !1, Me("beforeChange", ye), n >= 3 && (p += ye + (ye > 0 ? -3 : 3), n = 3);
                            for (var i = 0; i < n; i++) ye > 0 ? (t = I.shift(), I[2] = t, ke((++p + 2) * he.x, t.el.style), a.setContent(t, c - n + i + 1 + 1)) : (t = I.pop(), I.unshift(t), ke(--p * he.x, t.el.style), a.setContent(t, c + n - i - 1 - 1));
                            if (te && 1 === Math.abs(ye)) {
                                var o = Vt(C);
                                o.initialZoomLevel !== y && (tn(o, pe), rn(o), Oe(o))
                            }
                            ye = 0, a.updateCurrZoomItem(), C = c, Me("afterChange")
                        }
                    }
                }, updateSize: function (t) {
                    if (!xe && r.modal) {
                        var n = o.getScrollY();
                        if (L !== n && (e.style.top = n + "px", L = n), !t && ge.x === window.innerWidth && ge.y === window.innerHeight) return;
                        ge.x = window.innerWidth, ge.y = window.innerHeight, e.style.height = ge.y + "px"
                    }
                    if (pe.x = a.scrollWrap.clientWidth, pe.y = a.scrollWrap.clientHeight, Ve(), he.x = pe.x + Math.round(pe.x * r.spacing), he.y = pe.y, Re(he.x * me), Me("beforeResize"), p !== undefined) {
                        for (var i, l, s, u = 0; u < 3; u++) i = I[u], ke((u + p) * he.x, i.el.style), s = c + u - 1, r.loop && Kt() > 2 && (s = Ie(s)), (l = Vt(s)) && (b || l.needsUpdate || !l.bounds) ? (a.cleanSlide(l), a.setContent(i, s), 1 === u && (a.currItem = l, a.updateCurrZoomItem(!0)), l.needsUpdate = !1) : -1 === i.index && s >= 0 && a.setContent(i, s), l && l.container && (tn(l, pe), rn(l), Oe(l));
                        b = !1
                    }
                    x = y = a.currItem.initialZoomLevel, (ee = a.currItem.bounds) && (de.x = ee.center.x, de.y = ee.center.y, Ee(!0)), Me("resize")
                }, zoomTo: function (e, t, n, i, a) {
                    t && (x = y, ft.x = Math.abs(t.x) - de.x, ft.y = Math.abs(t.y) - de.y, Pe(ce, de));
                    var r = Ue(e, !1), l = {};
                    Be("x", r, l, e), Be("y", r, l, e);
                    var s = y, u = {x: de.x, y: de.y};
                    Fe(l);
                    var c = function (t) {
                        1 === t ? (y = e, de.x = l.x, de.y = l.y) : (y = (e - s) * t + s, de.x = (l.x - u.x) * t + u.x, de.y = (l.y - u.y) * t + u.y), a && a(t), Ee(1 === t)
                    };
                    n ? Qe("customZoomTo", 0, 1, n, i || o.easing.sine.inOut, c) : c(1)
                }
            }, tt = {}, nt = {}, it = {}, ot = {}, at = {}, rt = [], lt = {}, st = [], ut = {}, ct = 0, dt = {x: 0, y: 0},
            pt = 0, mt = {x: 0, y: 0}, ft = {x: 0, y: 0}, ht = {x: 0, y: 0}, yt = function (e, t) {
                return e.x === t.x && e.y === t.y
            }, xt = function (e, t) {
                return Math.abs(e.x - t.x) < 25 && Math.abs(e.y - t.y) < 25
            }, vt = function (e, t) {
                return ut.x = Math.abs(e.x - t.x), ut.y = Math.abs(e.y - t.y), Math.sqrt(ut.x * ut.x + ut.y * ut.y)
            }, gt = function () {
                K && (R(K), K = null)
            }, wt = function () {
                W && (K = k(wt), Lt())
            }, bt = function () {
                return !("fit" === r.scaleMode && y === a.currItem.initialZoomLevel)
            }, It = function (e, t) {
                return !(!e || e === document) && !(e.getAttribute("class") && e.getAttribute("class").indexOf("pswp__scroll-wrap") > -1) && (t(e) ? e : It(e.parentNode, t))
            }, Ct = {}, Dt = function (e, t) {
                return Ct.prevent = !It(e.target, r.isClickableElement), Me("preventDragEvent", e, t, Ct), Ct.prevent
            }, Mt = function (e, t) {
                return t.x = e.pageX, t.y = e.pageY, t.id = e.identifier, t
            }, Tt = function (e, t, n) {
                n.x = .5 * (e.x + t.x), n.y = .5 * (e.y + t.y)
            }, St = function (e, t, n) {
                if (e - N > 50) {
                    var i = st.length > 2 ? st.shift() : {};
                    i.x = t, i.y = n, st.push(i), N = e
                }
            }, At = function () {
                var e = de.y - a.currItem.initialPosition.y;
                return 1 - Math.abs(e / (pe.y / 2))
            }, Et = {}, Ot = {}, kt = [], Rt = function (e) {
                for (; kt.length > 0;) kt.pop();
                return E ? (se = 0, rt.forEach(function (e) {
                    0 === se ? kt[0] = e : 1 === se && (kt[1] = e), se++
                })) : e.type.indexOf("touch") > -1 ? e.touches && e.touches.length > 0 && (kt[0] = Mt(e.touches[0], Et), e.touches.length > 1 && (kt[1] = Mt(e.touches[1], Ot))) : (Et.x = e.pageX, Et.y = e.pageY, Et.id = "", kt[0] = Et), kt
            }, Zt = function (e, t) {
                var n, i, o, l, s = de[e] + t[e], u = t[e] > 0, c = mt.x + t.x, d = mt.x - lt.x;
                if (n = s > ee.min[e] || s < ee.max[e] ? r.panEndFriction : 1, s = de[e] + t[e] * n, (r.allowPanToNext || y === a.currItem.initialZoomLevel) && (te ? "h" !== ie || "x" !== e || X || (u ? (s > ee.min[e] && (n = r.panEndFriction, ee.min[e], i = ee.min[e] - ce[e]), (i <= 0 || d < 0) && Kt() > 1 ? (l = c, d < 0 && c > lt.x && (l = lt.x)) : ee.min.x !== ee.max.x && (o = s)) : (s < ee.max[e] && (n = r.panEndFriction, ee.max[e], i = ce[e] - ee.max[e]), (i <= 0 || d > 0) && Kt() > 1 ? (l = c, d > 0 && c < lt.x && (l = lt.x)) : ee.min.x !== ee.max.x && (o = s))) : l = c, "x" === e)) return l !== undefined && (Re(l, !0), q = l !== lt.x), ee.min.x !== ee.max.x && (o !== undefined ? de.x = o : q || (de.x += t.x * n)), l !== undefined;
                ne || q || y > a.currItem.fitRatio && (de[e] += t[e] * n)
            }, Pt = function (e) {
                if (!("mousedown" === e.type && e.button > 0)) if (Xt) e.preventDefault(); else if (!B || "mousedown" !== e.type) {
                    if (Dt(e, !0) && e.preventDefault(), Me("pointerDown"), E) {
                        var t = o.arraySearch(rt, e.pointerId, "id");
                        t < 0 && (t = rt.length), rt[t] = {x: e.pageX, y: e.pageY, id: e.pointerId}
                    }
                    var n = Rt(e), i = n.length;
                    $ = null, Je(), W && 1 !== i || (W = oe = !0, o.bind(window, m, a), H = le = ae = Y = q = V = G = X = !1, ie = null, Me("firstTouchStart", n), Pe(ce, de), ue.x = ue.y = 0, Pe(ot, n[0]), Pe(at, ot), lt.x = he.x * me, st = [{
                        x: ot.x,
                        y: ot.y
                    }], N = z = Te(), Ue(y, !0), gt(), wt()), !j && i > 1 && !ne && !q && (x = y, X = !1, j = G = !0, ue.y = ue.x = 0, Pe(ce, de), Pe(tt, n[0]), Pe(nt, n[1]), Tt(tt, nt, ht), ft.x = Math.abs(ht.x) - de.x, ft.y = Math.abs(ht.y) - de.y, J = Q = vt(tt, nt))
                }
            }, Ft = function (e) {
                if (e.preventDefault(), E) {
                    var t = o.arraySearch(rt, e.pointerId, "id");
                    if (t > -1) {
                        var n = rt[t];
                        n.x = e.pageX, n.y = e.pageY
                    }
                }
                if (W) {
                    var i = Rt(e);
                    if (ie || V || j) $ = i; else if (mt.x !== he.x * me) ie = "h"; else {
                        var a = Math.abs(i[0].x - ot.x) - Math.abs(i[0].y - ot.y);
                        Math.abs(a) >= 10 && (ie = a > 0 ? "h" : "v", $ = i)
                    }
                }
            }, Lt = function () {
                if ($) {
                    var e = $.length;
                    if (0 !== e) if (Pe(tt, $[0]), it.x = tt.x - ot.x, it.y = tt.y - ot.y, j && e > 1) {
                        if (ot.x = tt.x, ot.y = tt.y, !it.x && !it.y && yt($[1], nt)) return;
                        Pe(nt, $[1]), X || (X = !0, Me("zoomGestureStarted"));
                        var t = vt(tt, nt), n = Ht(t);
                        n > a.currItem.initialZoomLevel + a.currItem.initialZoomLevel / 15 && (le = !0);
                        var i = 1, o = He(), l = Ye();
                        if (n < o) if (r.pinchToClose && !le && x <= a.currItem.initialZoomLevel) {
                            var s = 1 - (o - n) / (o / 1.2);
                            Se(s), Me("onPinchClose", s), ae = !0
                        } else (i = (o - n) / o) > 1 && (i = 1), n = o - i * (o / 3); else n > l && ((i = (n - l) / (6 * o)) > 1 && (i = 1), n = l + i * o);
                        i < 0 && (i = 0), J = t, Tt(tt, nt, dt), ue.x += dt.x - ht.x, ue.y += dt.y - ht.y, Pe(ht, dt), de.x = Ze("x", n), de.y = Ze("y", n), H = n > y, y = n, Ee()
                    } else {
                        if (!ie) return;
                        if (oe && (oe = !1, Math.abs(it.x) >= 10 && (it.x -= $[0].x - at.x), Math.abs(it.y) >= 10 && (it.y -= $[0].y - at.y)), ot.x = tt.x, ot.y = tt.y, 0 === it.x && 0 === it.y) return;
                        if ("v" === ie && r.closeOnVerticalDrag && !bt()) {
                            ue.y += it.y, de.y += it.y;
                            var u = At();
                            return Y = !0, Me("onVerticalDrag", u), Se(u), void Ee()
                        }
                        St(Te(), tt.x, tt.y), V = !0, ee = a.currItem.bounds, Zt("x", it) || (Zt("y", it), Fe(de), Ee())
                    }
                }
            }, _t = function (e) {
                if (_.isOldAndroid) {
                    if (B && "mouseup" === e.type) return;
                    e.type.indexOf("touch") > -1 && (clearTimeout(B), B = setTimeout(function () {
                        B = 0
                    }, 600))
                }
                Me("pointerUp"), Dt(e, !1) && e.preventDefault();
                var t;
                if (E) {
                    var n = o.arraySearch(rt, e.pointerId, "id");
                    if (n > -1) if (t = rt.splice(n, 1)[0], navigator.pointerEnabled) t.type = e.pointerType || "mouse"; else {
                        var i = {4: "mouse", 2: "touch", 3: "pen"};
                        t.type = i[e.pointerType], t.type || (t.type = e.pointerType || "mouse")
                    }
                }
                var l, s = Rt(e), u = s.length;
                if ("mouseup" === e.type && (u = 0), 2 === u) return $ = null, !0;
                1 === u && Pe(at, s[0]), 0 !== u || ie || ne || (t || ("mouseup" === e.type ? t = {
                    x: e.pageX,
                    y: e.pageY,
                    type: "mouse"
                } : e.changedTouches && e.changedTouches[0] && (t = {
                    x: e.changedTouches[0].pageX,
                    y: e.changedTouches[0].pageY,
                    type: "touch"
                })), Me("touchRelease", e, t));
                var c = -1;
                if (0 === u && (W = !1, o.unbind(window, m, a), gt(), j ? c = 0 : -1 !== pt && (c = Te() - pt)), pt = 1 === u ? Te() : -1, l = -1 !== c && c < 150 ? "zoom" : "swipe", j && u < 2 && (j = !1, 1 === u && (l = "zoomPointerUp"), Me("zoomGestureEnded")), $ = null, V || X || ne || Y) if (Je(), U || (U = zt()), U.calculateSwipeSpeed("x"), Y) if (At() < r.verticalDragRange) a.close(); else {
                    var d = de.y, p = re;
                    Qe("verticalDrag", 0, 1, 300, o.easing.cubic.out, function (e) {
                        de.y = (a.currItem.initialPosition.y - d) * e + d, Se((1 - p) * e + p), Ee()
                    }), Me("onVerticalDrag", 1)
                } else {
                    if ((q || ne) && 0 === u) {
                        if (Ut(l, U)) return;
                        l = "zoomPointerUp"
                    }
                    ne || ("swipe" === l ? !q && y > a.currItem.fitRatio && Nt(U) : Yt())
                }
            }, zt = function () {
                var e, t, n = {
                    lastFlickOffset: {},
                    lastFlickDist: {},
                    lastFlickSpeed: {},
                    slowDownRatio: {},
                    slowDownRatioReverse: {},
                    speedDecelerationRatio: {},
                    speedDecelerationRatioAbs: {},
                    distanceOffset: {},
                    backAnimDestination: {},
                    backAnimStarted: {},
                    calculateSwipeSpeed: function (i) {
                        st.length > 1 ? (e = Te() - N + 50, t = st[st.length - 2][i]) : (e = Te() - z, t = at[i]), n.lastFlickOffset[i] = ot[i] - t, n.lastFlickDist[i] = Math.abs(n.lastFlickOffset[i]), n.lastFlickDist[i] > 20 ? n.lastFlickSpeed[i] = n.lastFlickOffset[i] / e : n.lastFlickSpeed[i] = 0, Math.abs(n.lastFlickSpeed[i]) < .1 && (n.lastFlickSpeed[i] = 0), n.slowDownRatio[i] = .95, n.slowDownRatioReverse[i] = 1 - n.slowDownRatio[i], n.speedDecelerationRatio[i] = 1
                    },
                    calculateOverBoundsAnimOffset: function (e, t) {
                        n.backAnimStarted[e] || (de[e] > ee.min[e] ? n.backAnimDestination[e] = ee.min[e] : de[e] < ee.max[e] && (n.backAnimDestination[e] = ee.max[e]), n.backAnimDestination[e] !== undefined && (n.slowDownRatio[e] = .7, n.slowDownRatioReverse[e] = 1 - n.slowDownRatio[e], n.speedDecelerationRatioAbs[e] < .05 && (n.lastFlickSpeed[e] = 0, n.backAnimStarted[e] = !0, Qe("bounceZoomPan" + e, de[e], n.backAnimDestination[e], t || 300, o.easing.sine.out, function (t) {
                            de[e] = t, Ee()
                        }))))
                    },
                    calculateAnimOffset: function (e) {
                        n.backAnimStarted[e] || (n.speedDecelerationRatio[e] = n.speedDecelerationRatio[e] * (n.slowDownRatio[e] + n.slowDownRatioReverse[e] - n.slowDownRatioReverse[e] * n.timeDiff / 10), n.speedDecelerationRatioAbs[e] = Math.abs(n.lastFlickSpeed[e] * n.speedDecelerationRatio[e]), n.distanceOffset[e] = n.lastFlickSpeed[e] * n.speedDecelerationRatio[e] * n.timeDiff, de[e] += n.distanceOffset[e])
                    },
                    panAnimLoop: function () {
                        if (Ke.zoomPan && (Ke.zoomPan.raf = k(n.panAnimLoop), n.now = Te(), n.timeDiff = n.now - n.lastNow, n.lastNow = n.now, n.calculateAnimOffset("x"), n.calculateAnimOffset("y"), Ee(), n.calculateOverBoundsAnimOffset("x"), n.calculateOverBoundsAnimOffset("y"), n.speedDecelerationRatioAbs.x < .05 && n.speedDecelerationRatioAbs.y < .05)) return de.x = Math.round(de.x), de.y = Math.round(de.y), Ee(), void $e("zoomPan")
                    }
                };
                return n
            }, Nt = function (e) {
                if (e.calculateSwipeSpeed("y"), ee = a.currItem.bounds, e.backAnimDestination = {}, e.backAnimStarted = {}, Math.abs(e.lastFlickSpeed.x) <= .05 && Math.abs(e.lastFlickSpeed.y) <= .05) return e.speedDecelerationRatioAbs.x = e.speedDecelerationRatioAbs.y = 0, e.calculateOverBoundsAnimOffset("x"), e.calculateOverBoundsAnimOffset("y"), !0;
                je("zoomPan"), e.lastNow = Te(), e.panAnimLoop()
            }, Ut = function (e, t) {
                var n;
                ne || (ct = c);
                var i;
                if ("swipe" === e) {
                    var l = ot.x - at.x, s = t.lastFlickDist.x < 10;
                    l > 30 && (s || t.lastFlickOffset.x > 20) ? i = -1 : l < -30 && (s || t.lastFlickOffset.x < -20) && (i = 1)
                }
                var u;
                i && ((c += i) < 0 ? (c = r.loop ? Kt() - 1 : 0, u = !0) : c >= Kt() && (c = r.loop ? 0 : Kt() - 1, u = !0), u && !r.loop || (ye += i, me -= i, n = !0));
                var d, p = he.x * me, m = Math.abs(p - mt.x);
                return n || p > mt.x == t.lastFlickSpeed.x > 0 ? (d = Math.abs(t.lastFlickSpeed.x) > 0 ? m / Math.abs(t.lastFlickSpeed.x) : 333, d = Math.min(d, 400), d = Math.max(d, 250)) : d = 333, ct === c && (n = !1), ne = !0, Me("mainScrollAnimStart"), Qe("mainScroll", mt.x, p, d, o.easing.cubic.out, Re, function () {
                    Je(), ne = !1, ct = -1, (n || ct !== c) && a.updateCurrItem(), Me("mainScrollAnimComplete")
                }), n && a.updateCurrItem(!0), n
            }, Ht = function (e) {
                return 1 / Q * e * x
            }, Yt = function () {
                var e = y, t = He(), n = Ye();
                y < t ? e = t : y > n && (e = n);
                var i, r = re;
                return ae && !H && !le && y < t ? (a.close(), !0) : (ae && (i = function (e) {
                    Se((1 - r) * e + r)
                }), a.zoomTo(e, 0, 200, o.easing.cubic.out, i), !0)
            };
        be("Gestures", {
            publicMethods: {
                initGestures: function () {
                    var e = function (e, t, n, i, o) {
                        D = e + t, M = e + n, T = e + i, S = o ? e + o : ""
                    };
                    (E = _.pointerEvent) && _.touch && (_.touch = !1), E ? navigator.pointerEnabled ? e("pointer", "down", "move", "up", "cancel") : e("MSPointer", "Down", "Move", "Up", "Cancel") : _.touch ? (e("touch", "start", "move", "end", "cancel"), O = !0) : e("mouse", "down", "move", "up"), m = M + " " + T + " " + S, f = D, E && !O && (O = navigator.maxTouchPoints > 1 || navigator.msMaxTouchPoints > 1), a.likelyTouchDevice = O, h[D] = Pt, h[M] = Ft, h[T] = _t, S && (h[S] = h[T]), _.touch && (f += " mousedown", m += " mousemove mouseup", h.mousedown = h[D], h.mousemove = h[M], h.mouseup = h[T]), O || (r.allowPanToNext = !1)
                }
            }
        });
        var Bt, Wt, Gt, Xt, Vt, Kt, qt, $t = function (t, n, i, l) {
            Bt && clearTimeout(Bt), Xt = !0, Gt = !0;
            var s;
            t.initialLayout ? (s = t.initialLayout, t.initialLayout = null) : s = r.getThumbBoundsFn && r.getThumbBoundsFn(c);
            var d = i ? r.hideAnimationDuration : r.showAnimationDuration, p = function () {
                $e("initialZoom"), i ? (a.template.removeAttribute("style"), a.bg.removeAttribute("style")) : (Se(1), n && (n.style.display = "block"), o.addClass(e, "pswp--animated-in"), Me("initialZoom" + (i ? "OutEnd" : "InEnd"))), l && l(), Xt = !1
            };
            if (!d || !s || s.x === undefined) return Me("initialZoom" + (i ? "Out" : "In")), y = t.initialZoomLevel, Pe(de, t.initialPosition), Ee(), e.style.opacity = i ? 0 : 1, Se(1), void (d ? setTimeout(function () {
                p()
            }, d) : p());
            !function () {
                var n = u, l = !a.currItem.src || a.currItem.loadError || r.showHideOpacity;
                t.miniImg && (t.miniImg.style.webkitBackfaceVisibility = "hidden"), i || (y = s.w / t.w, de.x = s.x, de.y = s.y - P, a[l ? "template" : "bg"].style.opacity = .001, Ee()), je("initialZoom"), i && !n && o.removeClass(e, "pswp--animated-in"), l && (i ? o[(n ? "remove" : "add") + "Class"](e, "pswp--animate_opacity") : setTimeout(function () {
                    o.addClass(e, "pswp--animate_opacity")
                }, 30)), Bt = setTimeout(function () {
                    if (Me("initialZoom" + (i ? "Out" : "In")), i) {
                        var a = s.w / t.w, r = {x: de.x, y: de.y}, u = y, c = re, m = function (t) {
                            1 === t ? (y = a, de.x = s.x, de.y = s.y - L) : (y = (a - u) * t + u, de.x = (s.x - r.x) * t + r.x, de.y = (s.y - L - r.y) * t + r.y), Ee(), l ? e.style.opacity = 1 - t : Se(c - t * c)
                        };
                        n ? Qe("initialZoom", 0, 1, d, o.easing.cubic.out, m, p) : (m(1), Bt = setTimeout(p, d + 20))
                    } else y = t.initialZoomLevel, Pe(de, t.initialPosition), Ee(), Se(1), l ? e.style.opacity = 1 : Se(1), Bt = setTimeout(p, d + 20)
                }, i ? 25 : 90)
            }()
        }, jt = {}, Jt = [], Qt = {
            index: 0,
            errorMsg: '<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>',
            forceProgressiveLoading: !1,
            preload: [1, 1],
            getNumItemsFn: function () {
                return Wt.length
            }
        }, en = function (e, t, n) {
            var i = e.bounds;
            i.center.x = Math.round((jt.x - t) / 2), i.center.y = Math.round((jt.y - n) / 2) + e.vGap.top, i.max.x = t > jt.x ? Math.round(jt.x - t) : i.center.x, i.max.y = n > jt.y ? Math.round(jt.y - n) + e.vGap.top : i.center.y, i.min.x = t > jt.x ? 0 : i.center.x, i.min.y = n > jt.y ? e.vGap.top : i.center.y
        }, tn = function (e, t, n) {
            if (e.src && !e.loadError) {
                var i = !n;
                if (i && (e.vGap || (e.vGap = {
                    top: 0,
                    bottom: 0
                }), Me("parseVerticalMargin", e)), jt.x = t.x, jt.y = t.y - e.vGap.top - e.vGap.bottom, i) {
                    var o = jt.x / e.w, a = jt.y / e.h;
                    e.fitRatio = o < a ? o : a;
                    var l = r.scaleMode;
                    "orig" === l ? n = 1 : "fit" === l && (n = e.fitRatio), n > 1 && (n = 1), e.initialZoomLevel = n, e.bounds || (e.bounds = {
                        center: {
                            x: 0,
                            y: 0
                        }, max: {x: 0, y: 0}, min: {x: 0, y: 0}
                    })
                }
                if (!n) return;
                return en(e, e.w * n, e.h * n), i && n === e.initialZoomLevel && (e.initialPosition = e.bounds.center), e.bounds
            }
            return e.w = e.h = 0, e.initialZoomLevel = e.fitRatio = 1, e.bounds = {
                center: {x: 0, y: 0},
                max: {x: 0, y: 0},
                min: {x: 0, y: 0}
            }, e.initialPosition = e.bounds.center, e.bounds
        }, nn = function (e, t, n, i, o, r) {
            t.loadError || i && (t.imageAppended = !0, rn(t, i, t === a.currItem && we), n.appendChild(i), r && setTimeout(function () {
                t && t.loaded && t.placeholder && (t.placeholder.style.display = "none", t.placeholder = null)
            }, 500))
        }, on = function (e) {
            e.loading = !0, e.loaded = !1;
            var t = e.img = o.createEl("pswp__img", "img"), n = function () {
                e.loading = !1, e.loaded = !0, e.loadComplete ? e.loadComplete(e) : e.img = null, t.onload = t.onerror = null, t = null
            };
            return t.onload = n, t.onerror = function () {
                e.loadError = !0, n()
            }, t.src = e.src, t
        }, an = function (e, t) {
            if (e.src && e.loadError && e.container) return t && (e.container.innerHTML = ""), e.container.innerHTML = r.errorMsg.replace("%url%", e.src), !0
        }, rn = function (e, t, n) {
            if (e.src) {
                t || (t = e.container.lastChild);
                var i = n ? e.w : Math.round(e.w * e.fitRatio), o = n ? e.h : Math.round(e.h * e.fitRatio);
                e.placeholder && !e.loaded && (e.placeholder.style.width = i + "px", e.placeholder.style.height = o + "px"), t.style.width = i + "px", t.style.height = o + "px"
            }
        }, ln = function () {
            if (Jt.length) {
                for (var e, t = 0; t < Jt.length; t++) (e = Jt[t]).holder.index === e.index && nn(e.index, e.item, e.baseDiv, e.img, 0, e.clearPlaceholder);
                Jt = []
            }
        };
        be("Controller", {
            publicMethods: {
                lazyLoadItem: function (e) {
                    e = Ie(e);
                    var t = Vt(e);
                    t && (!t.loaded && !t.loading || b) && (Me("gettingData", e, t), t.src && on(t))
                }, initController: function () {
                    o.extend(r, Qt, !0), a.items = Wt = n, Vt = a.getItemAt, Kt = r.getNumItemsFn, qt = r.loop, Kt() < 3 && (r.loop = !1), De("beforeChange", function (e) {
                        var t, n = r.preload, i = null === e || e >= 0, o = Math.min(n[0], Kt()),
                            l = Math.min(n[1], Kt());
                        for (t = 1; t <= (i ? l : o); t++) a.lazyLoadItem(c + t);
                        for (t = 1; t <= (i ? o : l); t++) a.lazyLoadItem(c - t)
                    }), De("initialLayout", function () {
                        a.currItem.initialLayout = r.getThumbBoundsFn && r.getThumbBoundsFn(c)
                    }), De("mainScrollAnimComplete", ln), De("initialZoomInEnd", ln), De("destroy", function () {
                        for (var e, t = 0; t < Wt.length; t++) (e = Wt[t]).container && (e.container = null), e.placeholder && (e.placeholder = null), e.img && (e.img = null), e.preloader && (e.preloader = null), e.loadError && (e.loaded = e.loadError = !1);
                        Jt = null
                    })
                }, getItemAt: function (e) {
                    return e >= 0 && Wt[e] !== undefined && Wt[e]
                }, allowProgressiveImg: function () {
                    return r.forceProgressiveLoading || !O || r.mouseUsed || screen.width > 1200
                }, setContent: function (e, t) {
                    r.loop && (t = Ie(t));
                    var n = a.getItemAt(e.index);
                    n && (n.container = null);
                    var i, s = a.getItemAt(t);
                    if (s) {
                        Me("gettingData", t, s), e.index = t, e.item = s;
                        var u = s.container = o.createEl("pswp__zoom-wrap");
                        if (!s.src && s.html && (s.html.tagName ? u.appendChild(s.html) : u.innerHTML = s.html), an(s), tn(s, pe), !s.src || s.loadError || s.loaded) s.src && !s.loadError && ((i = o.createEl("pswp__img", "img")).style.opacity = 1, i.src = s.src, rn(s, i), nn(0, s, u, i)); else {
                            if (s.loadComplete = function (n) {
                                if (l) {
                                    if (e && e.index === t) {
                                        if (an(n, !0)) return n.loadComplete = n.img = null, tn(n, pe), Oe(n), void (e.index === c && a.updateCurrZoomItem());
                                        n.imageAppended ? !Xt && n.placeholder && (n.placeholder.style.display = "none", n.placeholder = null) : _.transform && (ne || Xt) ? Jt.push({
                                            item: n,
                                            baseDiv: u,
                                            img: n.img,
                                            index: t,
                                            holder: e,
                                            clearPlaceholder: !0
                                        }) : nn(0, n, u, n.img, 0, !0)
                                    }
                                    n.loadComplete = null, n.img = null, Me("imageLoadComplete", t, n)
                                }
                            }, o.features.transform) {
                                var d = "pswp__img pswp__img--placeholder";
                                d += s.msrc ? "" : " pswp__img--placeholder--blank";
                                var p = o.createEl(d, s.msrc ? "img" : "");
                                s.msrc && (p.src = s.msrc), rn(s, p), u.appendChild(p), s.placeholder = p
                            }
                            s.loading || on(s), a.allowProgressiveImg() && (!Gt && _.transform ? Jt.push({
                                item: s,
                                baseDiv: u,
                                img: s.img,
                                index: t,
                                holder: e
                            }) : nn(0, s, u, s.img, 0, !0))
                        }
                        Gt || t !== c ? Oe(s) : (te = u.style, $t(s, i || s.img)), e.el.innerHTML = "", e.el.appendChild(u)
                    } else e.el.innerHTML = ""
                }, cleanSlide: function (e) {
                    e.img && (e.img.onload = e.img.onerror = null), e.loaded = e.loading = e.img = e.imageAppended = !1
                }
            }
        });
        var sn, un = {}, cn = function (e, t, n) {
            var i = document.createEvent("CustomEvent"),
                o = {origEvent: e, target: e.target, releasePoint: t, pointerType: n || "touch"};
            i.initCustomEvent("pswpTap", !0, !0, o), e.target.dispatchEvent(i)
        };
        be("Tap", {
            publicMethods: {
                initTap: function () {
                    De("firstTouchStart", a.onTapStart), De("touchRelease", a.onTapRelease), De("destroy", function () {
                        un = {}, sn = null
                    })
                }, onTapStart: function (e) {
                    e.length > 1 && (clearTimeout(sn), sn = null)
                }, onTapRelease: function (e, t) {
                    if (t && !V && !G && !qe) {
                        var n = t;
                        if (sn && (clearTimeout(sn), sn = null, xt(n, un))) return void Me("doubleTap", n);
                        if ("mouse" === t.type) return void cn(e, t, "mouse");
                        if ("BUTTON" === e.target.tagName.toUpperCase() || o.hasClass(e.target, "pswp__single-tap")) return void cn(e, t);
                        Pe(un, n), sn = setTimeout(function () {
                            cn(e, t), sn = null
                        }, 300)
                    }
                }
            }
        });
        var dn;
        be("DesktopZoom", {
            publicMethods: {
                initDesktopZoom: function () {
                    F || (O ? De("mouseUsed", function () {
                        a.setupDesktopZoom()
                    }) : a.setupDesktopZoom(!0))
                }, setupDesktopZoom: function (t) {
                    dn = {};
                    var n = "wheel mousewheel DOMMouseScroll";
                    De("bindEvents", function () {
                        o.bind(e, n, a.handleMouseWheel)
                    }), De("unbindEvents", function () {
                        dn && o.unbind(e, n, a.handleMouseWheel)
                    }), a.mouseZoomedIn = !1;
                    var i, r = function () {
                        a.mouseZoomedIn && (o.removeClass(e, "pswp--zoomed-in"), a.mouseZoomedIn = !1), y < 1 ? o.addClass(e, "pswp--zoom-allowed") : o.removeClass(e, "pswp--zoom-allowed"), l()
                    }, l = function () {
                        i && (o.removeClass(e, "pswp--dragging"), i = !1)
                    };
                    De("resize", r), De("afterChange", r), De("pointerDown", function () {
                        a.mouseZoomedIn && (i = !0, o.addClass(e, "pswp--dragging"))
                    }), De("pointerUp", l), t || r()
                }, handleMouseWheel: function (e) {
                    if (y <= a.currItem.fitRatio) return r.modal && (!r.closeOnScroll || qe || W ? e.preventDefault() : A && Math.abs(e.deltaY) > 2 && (u = !0, a.close())), !0;
                    if (e.stopPropagation(), dn.x = 0, "deltaX" in e) 1 === e.deltaMode ? (dn.x = 18 * e.deltaX, dn.y = 18 * e.deltaY) : (dn.x = e.deltaX, dn.y = e.deltaY); else if ("wheelDelta" in e) e.wheelDeltaX && (dn.x = -.16 * e.wheelDeltaX), e.wheelDeltaY ? dn.y = -.16 * e.wheelDeltaY : dn.y = -.16 * e.wheelDelta; else {
                        if (!("detail" in e)) return;
                        dn.y = e.detail
                    }
                    Ue(y, !0);
                    var t = de.x - dn.x, n = de.y - dn.y;
                    (r.modal || t <= ee.min.x && t >= ee.max.x && n <= ee.min.y && n >= ee.max.y) && e.preventDefault(), a.panTo(t, n)
                }, toggleDesktopZoom: function (t) {
                    t = t || {x: pe.x / 2 + fe.x, y: pe.y / 2 + fe.y};
                    var n = r.getDoubleTapZoom(!0, a.currItem), i = y === n;
                    a.mouseZoomedIn = !i, a.zoomTo(i ? a.currItem.initialZoomLevel : n, t, 333), o[(i ? "remove" : "add") + "Class"](e, "pswp--zoomed-in")
                }
            }
        });
        var pn, mn, fn, hn, yn, xn, vn, gn, wn, bn, In, Cn, Dn = {history: !0, galleryUID: 1}, Mn = function () {
            return In.hash.substring(1)
        }, Tn = function () {
            pn && clearTimeout(pn), fn && clearTimeout(fn)
        }, Sn = function () {
            var e = Mn(), t = {};
            if (e.length < 5) return t;
            var n, i = e.split("&");
            for (n = 0; n < i.length; n++) if (i[n]) {
                var o = i[n].split("=");
                o.length < 2 || (t[o[0]] = o[1])
            }
            if (r.galleryPIDs) {
                var a = t.pid;
                for (t.pid = 0, n = 0; n < Wt.length; n++) if (Wt[n].pid === a) {
                    t.pid = n;
                    break
                }
            } else t.pid = parseInt(t.pid, 10) - 1;
            return t.pid < 0 && (t.pid = 0), t
        }, An = function () {
            if (fn && clearTimeout(fn), qe || W) fn = setTimeout(An, 500); else {
                hn ? clearTimeout(mn) : hn = !0;
                var e = c + 1, t = Vt(c);
                t.hasOwnProperty("pid") && (e = t.pid);
                var n = vn + "&gid=" + r.galleryUID + "&pid=" + e;
                gn || -1 === In.hash.indexOf(n) && (bn = !0);
                var i = In.href.split("#")[0] + "#" + n;
                Cn ? "#" + n !== window.location.hash && history[gn ? "replaceState" : "pushState"]("", document.title, i) : gn ? In.replace(i) : In.hash = n, gn = !0, mn = setTimeout(function () {
                    hn = !1
                }, 60)
            }
        };
        be("History", {
            publicMethods: {
                initHistory: function () {
                    if (o.extend(r, Dn, !0), r.history) {
                        In = window.location, bn = !1, wn = !1, gn = !1, vn = Mn(), Cn = "pushState" in history, vn.indexOf("gid=") > -1 && (vn = vn.split("&gid=")[0], vn = vn.split("?gid=")[0]), De("afterChange", a.updateURL), De("unbindEvents", function () {
                            o.unbind(window, "hashchange", a.onHashChange)
                        });
                        var e = function () {
                            xn = !0, wn || (bn ? history.back() : vn ? In.hash = vn : Cn ? history.pushState("", document.title, In.pathname + In.search) : In.hash = ""), Tn()
                        };
                        De("unbindEvents", function () {
                            u && e()
                        }), De("destroy", function () {
                            xn || e()
                        }), De("firstUpdate", function () {
                            c = Sn().pid
                        });
                        var t = vn.indexOf("pid=");
                        t > -1 && "&" === (vn = vn.substring(0, t)).slice(-1) && (vn = vn.slice(0, -1)), setTimeout(function () {
                            l && o.bind(window, "hashchange", a.onHashChange)
                        }, 40)
                    }
                }, onHashChange: function () {
                    if (Mn() === vn) return wn = !0, void a.close();
                    hn || (yn = !0, a.goTo(Sn().pid), yn = !1)
                }, updateURL: function () {
                    Tn(), yn || (gn ? pn = setTimeout(An, 800) : An())
                }
            }
        }), o.extend(a, et)
    }
});
!function (e, t) {
    "function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t() : e.PhotoSwipeUI_Default = t()
}(this, function () {
    return function (e, t) {
        var n, o, l, r, i, s, a, u, c, p, d, m, f, h, w, g, v, b, _, C = this, T = !1, I = !0, E = !0, F = {
            barsSize: {top: 44, bottom: "auto"},
            closeElClasses: ["item", "caption", "zoom-wrap", "ui", "top-bar"],
            timeToIdle: 4e3,
            timeToIdleOutside: 1e3,
            loadingIndicatorDelay: 1e3,
            addCaptionHTMLFn: function (e, t) {
                return e.title ? (t.children[0].innerHTML = e.title, !0) : (t.children[0].innerHTML = "", !1)
            },
            closeEl: !0,
            captionEl: !0,
            fullscreenEl: !0,
            zoomEl: !0,
            shareEl: !0,
            counterEl: !0,
            arrowEl: !0,
            preloaderEl: !0,
            tapToClose: !1,
            tapToToggleControls: !0,
            clickToCloseNonZoomable: !0,
            shareButtons: [{
                id: "facebook",
                label: "Share on Facebook",
                url: "https://www.facebook.com/sharer/sharer.php?u={{url}}"
            }, {
                id: "twitter",
                label: "Tweet",
                url: "https://twitter.com/intent/tweet?text={{text}}&url={{url}}"
            }, {
                id: "pinterest",
                label: "Pin it",
                url: "http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}"
            }, {id: "download", label: "Download image", url: "{{raw_image_url}}", download: !0}],
            getImageURLForShare: function () {
                return e.currItem.src || ""
            },
            getPageURLForShare: function () {
                return window.location.href
            },
            getTextForShare: function () {
                return e.currItem.title || ""
            },
            indexIndicatorSep: " / ",
            fitControlsWidth: 1200
        }, x = function (e) {
            if (g) return !0;
            e = e || window.event, w.timeToIdle && w.mouseUsed && !c && D();
            for (var n, o, l = (e.target || e.srcElement).getAttribute("class") || "", r = 0; r < N.length; r++) (n = N[r]).onTap && l.indexOf("pswp__" + n.name) > -1 && (n.onTap(), o = !0);
            if (o) {
                e.stopPropagation && e.stopPropagation(), g = !0;
                var i = t.features.isOldAndroid ? 600 : 30;
                v = setTimeout(function () {
                    g = !1
                }, i)
            }
        }, S = function () {
            return !e.likelyTouchDevice || w.mouseUsed || screen.width > w.fitControlsWidth
        }, k = function (e, n, o) {
            t[(o ? "add" : "remove") + "Class"](e, "pswp__" + n)
        }, K = function () {
            var e = 1 === w.getNumItemsFn();
            e !== h && (k(o, "ui--one-slide", e), h = e)
        }, L = function () {
            k(a, "share-modal--hidden", E)
        }, O = function () {
            return (E = !E) ? (t.removeClass(a, "pswp__share-modal--fade-in"), setTimeout(function () {
                E && L()
            }, 300)) : (L(), setTimeout(function () {
                E || t.addClass(a, "pswp__share-modal--fade-in")
            }, 30)), E || y(), !1
        }, R = function (t) {
            var n = (t = t || window.event).target || t.srcElement;
            return e.shout("shareLinkClick", t, n), !(!n.href || !n.hasAttribute("download") && (window.open(n.href, "pswp_share", "scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420,top=100,left=" + (window.screen ? Math.round(screen.width / 2 - 275) : 100)), E || O(), 1))
        }, y = function () {
            for (var e, t, n, o, l = "", r = 0; r < w.shareButtons.length; r++) e = w.shareButtons[r], t = w.getImageURLForShare(e), n = w.getPageURLForShare(e), o = w.getTextForShare(e), l += '<a href="' + e.url.replace("{{url}}", encodeURIComponent(n)).replace("{{image_url}}", encodeURIComponent(t)).replace("{{raw_image_url}}", t).replace("{{text}}", encodeURIComponent(o)) + '" target="_blank" class="pswp__share--' + e.id + '"' + (e.download ? "download" : "") + ">" + e.label + "</a>", w.parseShareButtonOut && (l = w.parseShareButtonOut(e, l));
            a.children[0].innerHTML = l, a.children[0].onclick = R
        }, z = function (e) {
            for (var n = 0; n < w.closeElClasses.length; n++) if (t.hasClass(e, "pswp__" + w.closeElClasses[n])) return !0
        }, M = 0, D = function () {
            clearTimeout(_), M = 0, c && C.setIdle(!1)
        }, A = function (e) {
            var t = (e = e || window.event).relatedTarget || e.toElement;
            t && "HTML" !== t.nodeName || (clearTimeout(_), _ = setTimeout(function () {
                C.setIdle(!0)
            }, w.timeToIdleOutside))
        }, P = function () {
            w.fullscreenEl && !t.features.isOldAndroid && (n || (n = C.getFullscreenAPI()), n ? (t.bind(document, n.eventK, C.updateFullscreen), C.updateFullscreen(), t.addClass(e.template, "pswp--supports-fs")) : t.removeClass(e.template, "pswp--supports-fs"))
        }, U = function () {
            w.preloaderEl && (Z(!0), p("beforeChange", function () {
                clearTimeout(f), f = setTimeout(function () {
                    e.currItem && e.currItem.loading ? (!e.allowProgressiveImg() || e.currItem.img && !e.currItem.img.naturalWidth) && Z(!1) : Z(!0)
                }, w.loadingIndicatorDelay)
            }), p("imageLoadComplete", function (t, n) {
                e.currItem === n && Z(!0)
            }))
        }, Z = function (e) {
            m !== e && (k(d, "preloader--active", !e), m = e)
        }, q = function (e) {
            var n = e.vGap;
            if (S()) {
                var i = w.barsSize;
                if (w.captionEl && "auto" === i.bottom) if (r || ((r = t.createEl("pswp__caption pswp__caption--fake")).appendChild(t.createEl("pswp__caption__center")), o.insertBefore(r, l), t.addClass(o, "pswp__ui--fit")), w.addCaptionHTMLFn(e, r, !0)) {
                    var s = r.clientHeight;
                    n.bottom = parseInt(s, 10) || 44
                } else n.bottom = i.top; else n.bottom = "auto" === i.bottom ? 0 : i.bottom;
                n.top = i.top
            } else n.top = n.bottom = 0
        }, B = function () {
            w.timeToIdle && p("mouseUsed", function () {
                t.bind(document, "mousemove", D), t.bind(document, "mouseout", A), b = setInterval(function () {
                    2 == ++M && C.setIdle(!0)
                }, w.timeToIdle / 2)
            })
        }, H = function () {
            p("onVerticalDrag", function (e) {
                I && e < .95 ? C.hideControls() : !I && e >= .95 && C.showControls()
            });
            var e;
            p("onPinchClose", function (t) {
                I && t < .9 ? (C.hideControls(), e = !0) : e && !I && t > .9 && C.showControls()
            }), p("zoomGestureEnded", function () {
                (e = !1) && !I && C.showControls()
            })
        }, N = [{
            name: "caption", option: "captionEl", onInit: function (e) {
                l = e
            }
        }, {
            name: "share-modal", option: "shareEl", onInit: function (e) {
                a = e
            }, onTap: function () {
                O()
            }
        }, {
            name: "button--share", option: "shareEl", onInit: function (e) {
                s = e
            }, onTap: function () {
                O()
            }
        }, {name: "button--zoom", option: "zoomEl", onTap: e.toggleDesktopZoom}, {
            name: "counter",
            option: "counterEl",
            onInit: function (e) {
                i = e
            }
        }, {name: "button--close", option: "closeEl", onTap: e.close}, {
            name: "button--arrow--left",
            option: "arrowEl",
            onTap: e.prev
        }, {name: "button--arrow--right", option: "arrowEl", onTap: e.next}, {
            name: "button--fs",
            option: "fullscreenEl",
            onTap: function () {
                n.isFullscreen() ? n.exit() : n.enter()
            }
        }, {
            name: "preloader", option: "preloaderEl", onInit: function (e) {
                d = e
            }
        }], W = function () {
            var e, n, l, r = function (o) {
                if (o) for (var r = o.length, i = 0; i < r; i++) {
                    e = o[i], n = e.className;
                    for (var s = 0; s < N.length; s++) l = N[s], n.indexOf("pswp__" + l.name) > -1 && (w[l.option] ? (t.removeClass(e, "pswp__element--disabled"), l.onInit && l.onInit(e)) : t.addClass(e, "pswp__element--disabled"))
                }
            };
            r(o.children);
            var i = t.getChildByClass(o, "pswp__top-bar");
            i && r(i.children)
        };
        C.init = function () {
            t.extend(e.options, F, !0), w = e.options, o = t.getChildByClass(e.scrollWrap, "pswp__ui"), p = e.listen, H(), p("beforeChange", C.update), p("doubleTap", function (t) {
                var n = e.currItem.initialZoomLevel;
                e.getZoomLevel() !== n ? e.zoomTo(n, t, 333) : e.zoomTo(w.getDoubleTapZoom(!1, e.currItem), t, 333)
            }), p("preventDragEvent", function (e, t, n) {
                var o = e.target || e.srcElement;
                o && o.getAttribute("class") && e.type.indexOf("mouse") > -1 && (o.getAttribute("class").indexOf("__caption") > 0 || /(SMALL|STRONG|EM)/i.test(o.tagName)) && (n.prevent = !1)
            }), p("bindEvents", function () {
                t.bind(o, "pswpTap click", x), t.bind(e.scrollWrap, "pswpTap", C.onGlobalTap), e.likelyTouchDevice || t.bind(e.scrollWrap, "mouseover", C.onMouseOver)
            }), p("unbindEvents", function () {
                E || O(), b && clearInterval(b), t.unbind(document, "mouseout", A), t.unbind(document, "mousemove", D), t.unbind(o, "pswpTap click", x), t.unbind(e.scrollWrap, "pswpTap", C.onGlobalTap), t.unbind(e.scrollWrap, "mouseover", C.onMouseOver), n && (t.unbind(document, n.eventK, C.updateFullscreen), n.isFullscreen() && (w.hideAnimationDuration = 0, n.exit()), n = null)
            }), p("destroy", function () {
                w.captionEl && (r && o.removeChild(r), t.removeClass(l, "pswp__caption--empty")), a && (a.children[0].onclick = null), t.removeClass(o, "pswp__ui--over-close"), t.addClass(o, "pswp__ui--hidden"), C.setIdle(!1)
            }), w.showAnimationDuration || t.removeClass(o, "pswp__ui--hidden"), p("initialZoomIn", function () {
                w.showAnimationDuration && t.removeClass(o, "pswp__ui--hidden")
            }), p("initialZoomOut", function () {
                t.addClass(o, "pswp__ui--hidden")
            }), p("parseVerticalMargin", q), W(), w.shareEl && s && a && (E = !0), K(), B(), P(), U()
        }, C.setIdle = function (e) {
            c = e, k(o, "ui--idle", e)
        }, C.update = function () {
            I && e.currItem ? (C.updateIndexIndicator(), w.captionEl && (w.addCaptionHTMLFn(e.currItem, l), k(l, "caption--empty", !e.currItem.title)), T = !0) : T = !1, E || O(), K()
        }, C.updateFullscreen = function (o) {
            o && setTimeout(function () {
                e.setScrollOffset(0, t.getScrollY())
            }, 50), t[(n.isFullscreen() ? "add" : "remove") + "Class"](e.template, "pswp--fs")
        }, C.updateIndexIndicator = function () {
            w.counterEl && (i.innerHTML = e.getCurrentIndex() + 1 + w.indexIndicatorSep + w.getNumItemsFn())
        }, C.onGlobalTap = function (n) {
            var o = (n = n || window.event).target || n.srcElement;
            if (!g) if (n.detail && "mouse" === n.detail.pointerType) {
                if (z(o)) return void e.close();
                t.hasClass(o, "pswp__img") && (1 === e.getZoomLevel() && e.getZoomLevel() <= e.currItem.fitRatio ? w.clickToCloseNonZoomable && e.close() : e.toggleDesktopZoom(n.detail.releasePoint))
            } else if (w.tapToToggleControls && (I ? C.hideControls() : C.showControls()), w.tapToClose && (t.hasClass(o, "pswp__img") || z(o))) return void e.close()
        }, C.onMouseOver = function (e) {
            var t = (e = e || window.event).target || e.srcElement;
            k(o, "ui--over-close", z(t))
        }, C.hideControls = function () {
            t.addClass(o, "pswp__ui--hidden"), I = !1
        }, C.showControls = function () {
            I = !0, T || C.update(), t.removeClass(o, "pswp__ui--hidden")
        }, C.supportsFullscreen = function () {
            var e = document;
            return !!(e.exitFullscreen || e.mozCancelFullScreen || e.webkitExitFullscreen || e.msExitFullscreen)
        }, C.getFullscreenAPI = function () {
            var t, n = document.documentElement, o = "fullscreenchange";
            return n.requestFullscreen ? t = {
                enterK: "requestFullscreen",
                exitK: "exitFullscreen",
                elementK: "fullscreenElement",
                eventK: o
            } : n.mozRequestFullScreen ? t = {
                enterK: "mozRequestFullScreen",
                exitK: "mozCancelFullScreen",
                elementK: "mozFullScreenElement",
                eventK: "moz" + o
            } : n.webkitRequestFullscreen ? t = {
                enterK: "webkitRequestFullscreen",
                exitK: "webkitExitFullscreen",
                elementK: "webkitFullscreenElement",
                eventK: "webkit" + o
            } : n.msRequestFullscreen && (t = {
                enterK: "msRequestFullscreen",
                exitK: "msExitFullscreen",
                elementK: "msFullscreenElement",
                eventK: "MSFullscreenChange"
            }), t && (t.enter = function () {
                if (u = w.closeOnScroll, w.closeOnScroll = !1, "webkitRequestFullscreen" !== this.enterK) return e.template[this.enterK]();
                e.template[this.enterK](Element.ALLOW_KEYBOARD_INPUT)
            }, t.exit = function () {
                return w.closeOnScroll = u, document[this.exitK]()
            }, t.isFullscreen = function () {
                return document[this.elementK]
            }), t
        }
    }
});
jQuery(window).on("load", function () {
    jQuery(window).trigger("resize").trigger("scroll");
    var $preloader = jQuery(".preloader"), $spinner = $preloader.find(".spinner");
    $spinner.fadeOut();
    $preloader.delay(350).fadeOut("slow");
    jQuery(".owl-carousel").each(function () {
        jQuery(this).trigger("refresh.owl.carousel")
    });
    if (typeof skrollr !== "undefined") {
        skrollr.get().refresh()
    }
});
jQuery(".tabs-head").on("click", ".item:not(.active-tab)", function () {
    jQuery(this).addClass("active-tab").siblings().removeClass("active-tab").parents(".tabs").find(".tabs-body .item").eq(jQuery(this).index()).fadeIn(150).siblings().hide()
});

function leadZero(n) {
    return (n < 10 ? "0" : "") + n
}

jQuery(document).ready(function () {
    jQuery(".tabs").each(function () {
        var item = jQuery(this).find(".tabs-body > .item"), tabs_head = jQuery(this).find(".tabs-head");
        item.each(function () {
            var name = jQuery(this).data("name");
            tabs_head.append('<div class="item">' + name + "</div>")
        });
        tabs_head.find(".item:first-of-type").addClass("active-tab");
        jQuery(this).find(".tabs-body > .item:first-of-type").css("display", "block")
    });
    jQuery(".vertical-parallax-slider").each(function () {
        jQuery("body").addClass("body-one-screen");
        var this_el = jQuery(this), el = this_el.find(".item"), delay = 800,
            dots = this_el.parent().find(".pagination-dots"), nav = this_el.parent().find(".nav-arrows"),
            status = false;
        el.each(function () {
            jQuery(this).css("z-index", parseInt(el.length - jQuery(this).index()));
            dots.append("<span></span>")
        });

        function vertical_parallax(coef, index) {
            index = index === undefined ? false : index;
            if (coef != false) {
                var index = this_el.find(".item.active").index() - coef
            }
            el.eq(index).removeClass("prev next").addClass("active").siblings().removeClass("active");
            el.eq(index).prevAll().removeClass("next").addClass("prev");
            el.eq(index).nextAll().removeClass("prev").addClass("next");
            dots.find("span").eq(index).addClass("active").siblings().removeClass("active")
        }

        vertical_parallax(false, 0);
        this_el.on("mousewheel wheel", function (e) {
            if (jQuery(window).width() > 992) {
                e.preventDefault();
                var cur = this_el.find(".item.active").index();
                if (status != true) {
                    status = true;
                    if (e.originalEvent.deltaY > 0 && cur != parseInt(el.length - 1)) {
                        vertical_parallax("-1");
                        setTimeout(function () {
                            status = false
                        }, delay)
                    } else if (e.originalEvent.deltaY < 0 && cur != 0) {
                        vertical_parallax("1");
                        setTimeout(function () {
                            status = false
                        }, delay)
                    } else {
                        status = false
                    }
                }
            }
        });
        dots.on("click", "span:not(.active)", function () {
            jQuery(this).addClass("active").siblings().removeClass("active");
            vertical_parallax(false, jQuery(this).index())
        });
        nav.on("click", ".prev", function () {
            var cur = this_el.find(".item.active").index();
            if (cur != parseInt(el.length - 1)) {
                vertical_parallax("-1")
            }
        }).on("click", ".next", function () {
            var cur = this_el.find(".item.active").index();
            if (cur != 0) {
                vertical_parallax("1")
            }
        })
    });

    function equalHeight(group) {
        if (jQuery(window).width() > "768") {
            var tallest = 0;
            jQuery(group).each(function () {
                var thisHeight = jQuery(this).css("height", "").height();
                if (thisHeight > tallest) {
                    tallest = thisHeight
                }
            });
            jQuery(group).height(tallest)
        } else {
            jQuery(group).height("auto")
        }
    }

    if (jQuery(".navigation > ul > li").length > 6) {
        jQuery(".navigation").addClass("min")
    }
    jQuery(".project-slider").each(function () {
        var head_slider = jQuery(this);
        if (head_slider.find(".item").length == 1) {
            head_slider.parent().removeClass("with-carousel-nav")
        }
        if (jQuery(this).find(".item").length > 1) {
            head_slider.addClass("owl-carousel").owlCarousel({
                items: 1,
                nav: true,
                dots: false,
                autoplay: false,
                navClass: ["owl-prev basic-ui-icon-left-arrow", "owl-next basic-ui-icon-right-arrow"],
                navText: false,
                autoHeight: true,
                responsive: {0: {nav: false}, 480: {}, 768: {nav: true}}
            });
            var child_carousel = head_slider.next(".project-slider-carousel");
            var i = 0;
            var flag = false;
            var c_items = "4";
            if (head_slider.find(".owl-item:not(.cloned)").find(".item").length < 4) {
                c_items = head_slider.find(".owl-item:not(.cloned)").find(".item").length
            }
            var child_carousel_c = child_carousel.addClass("owl-carousel").owlCarousel({
                items: 1,
                nav: true,
                dots: false,
                autoplay: false,
                navClass: ["owl-prev basic-ui-icon-left-arrow", "owl-next basic-ui-icon-right-arrow"],
                navText: false,
                margin: 15,
                responsive: {0: {nav: false}, 480: {}, 768: {nav: true, items: c_items}}
            }).on("click initialized.owl.carousel", ".item", function (e) {
                e.preventDefault();
                head_slider.trigger("to.owl.carousel", [jQuery(e.target).parents(".owl-item").index(), 300, true]);
                jQuery(e.target).parents(".owl-item").addClass("active-item").siblings().removeClass("active-item")
            }).data("owl.carousel");
            var child_carousel_item = child_carousel.find(".owl-item.active");
            head_slider.on("change.owl.carousel", function (e) {
                if (e.namespace && e.property.name === "position" && !flag) {
                    flag = true;
                    child_carousel_c.to(e.relatedTarget.relative(e.property.value), 300, true);
                    head_slider.parent().find(".banner-carousel .owl-item.active").first().addClass("active-item").siblings().removeClass("active-item");
                    flag = false
                }
            }).data("owl.carousel")
        }
    });
    jQuery(document).ready(function () {
        jQuery(".image-comparison-slider").each(function () {
            var cur = jQuery(this);
            var width = cur.width() + "px";
            cur.find(".resize .old").css("width", width);
            drags(cur.find(".line"), cur.find(".resize"), cur)
        })
    });
    jQuery(window).resize(function () {
        jQuery(".image-comparison-slider").each(function () {
            var cur = jQuery(this);
            var width = cur.width() + "px";
            cur.find(".resize .old").css("width", width)
        })
    });

    function drags(dragElement, resizeElement, container) {
        dragElement.on("mousedown touchstart", function (e) {
            dragElement.addClass("draggable");
            resizeElement.addClass("resizable");
            var startX = e.pageX ? e.pageX : e.originalEvent.touches[0].pageX, dragWidth = dragElement.outerWidth(),
                posX = dragElement.offset().left + dragWidth - startX, containerOffset = container.offset().left,
                containerWidth = container.outerWidth(), minLeft = containerOffset + 25,
                maxLeft = containerOffset + containerWidth - dragWidth - 25;
            dragElement.parents().on("mousemove touchmove", function (e) {
                var moveX = e.pageX ? e.pageX : e.originalEvent.touches[0].pageX, leftValue = moveX + posX - dragWidth;
                if (leftValue < minLeft) {
                    leftValue = minLeft
                } else if (leftValue > maxLeft) {
                    leftValue = maxLeft
                }
                var widthValue = (leftValue + dragWidth / 2 - containerOffset) * 100 / containerWidth + "%";
                jQuery(".draggable").css("left", widthValue).on("mouseup touchend touchcancel", function () {
                    jQuery(this).removeClass("draggable");
                    resizeElement.removeClass("resizable")
                });
                jQuery(".resizable").css("width", widthValue)
            }).on("mouseup touchend touchcancel", function () {
                dragElement.removeClass("draggable");
                resizeElement.removeClass("resizable")
            });
            e.preventDefault()
        }).on("mouseup touchend touchcancel", function (e) {
            dragElement.removeClass("draggable");
            resizeElement.removeClass("resizable")
        })
    }

    jQuery(".right-click-disable").on("contextmenu", function () {
        jQuery(".right-click-disable-message").addClass("active");
        return false
    });
    jQuery(".right-click-disable-message:not(.lic)").on("click", function () {
        jQuery(this).removeClass("active");
        return false
    });
    jQuery(".category-slider-area").each(function () {
        var el_area = jQuery(this), items = el_area.find(".item"),
            images_area = el_area.find(".category-slider-images");
        items.each(function () {
            jQuery(this).attr("data-eq", jQuery(this).index());
            images_area.append('<div class="img-item" style="background-image: url(' + jQuery(this).data("image") + ')"><div class="num">' + leadZero(jQuery(this).index() + 1) + "</div></div>")
        });
        el_area.find(".category-slider").on("initialized.owl.carousel translated.owl.carousel", function (e) {
            var eq = jQuery(this).find(".center .item").data("eq");
            images_area.find(".img-item").eq(eq).addClass("active").siblings().removeClass("active")
        });
        el_area.find(".category-slider").owlCarousel({
            loop: true,
            items: 1,
            center: true,
            autoWidth: true,
            nav: false,
            dots: false,
            autoplay: false,
            autoplayHoverPause: true,
            navText: false,
            slideBy: 1
        });
        el_area.on("mousewheel wheel", function (e) {
            var d = e.originalEvent.deltaY;
            if (e.originalEvent.deltaY) {
                d = e.originalEvent.deltaY
            } else {
                d = e.deltaY
            }
            if (d > 0) {
                el_area.find(".category-slider").trigger("next.owl")
            } else {
                el_area.find(".category-slider").trigger("prev.owl")
            }
            e.preventDefault()
        })
    });
    jQuery(".accordion-items .item .top").on("click", function () {
        if (jQuery(this).parent().hasClass("active")) {
            jQuery(this).parent().removeClass("active").find(".wrap").slideUp()
        } else {
            jQuery(this).parent().addClass("active").find(".wrap").slideDown()
        }
    });
    jQuery(".split-screen").each(function () {
        var this_el = jQuery(this), slider = jQuery(this).find(".image"), item = this_el.find(".item"), nav_html = "";
        slider.each(function () {
            if (jQuery(this).find(".img-item").length > 1) {
                jQuery(this).addClass("owl-carousel").owlCarousel({
                    items: 1,
                    nav: true,
                    dots: true,
                    autoplay: false,
                    navClass: ["owl-prev basic-ui-icon-left-arrow", "owl-next basic-ui-icon-right-arrow"],
                    navText: false
                })
            }
        });
        if (item.length > 1) {
            nav_html = '<div class="portfolio-navigation">';
            nav_html += '<div class="numbers">';
            item.each(function () {
                nav_html += '<div class="num" data-index="' + jQuery(this).index() + '"><span>' + leadZero(jQuery(this).index() + 1) + "</span></div>"
            });
            nav_html += "</div>";
            nav_html += "</div>";
            this_el.append(nav_html)
        }
        jQuery(window).on("load", function () {
            this_el.find(".item:eq(0), .num:eq(0)").addClass("active")
        });
        this_el.on("click", ".num:not(.active)", function () {
            var el = jQuery(this), index = el.data("index");
            item.removeClass("active");
            item.eq(index).delay(500).queue(function (next) {
                jQuery(this).addClass("active");
                next()
            });
            el.addClass("active").siblings().removeClass("active")
        })
    });
    jQuery(".split-screen-type2").each(function () {
        jQuery("body").addClass("body-one-screen");
        var this_el = jQuery(this), el = this_el.find(".screen-item"), delay = 1e3,
            dots = this_el.parent().find(".pagination-dots"), status = false;
        el.each(function () {
            dots.append("<span></span>")
        });

        function vertical_parallax(coef, index) {
            index = index === undefined ? false : index;
            if (coef != false) {
                var index = this_el.find(".screen-item.active").index() - coef
            }
            el.eq(index).removeClass("prev next").addClass("active").siblings().removeClass("active");
            el.eq(index).prevAll().removeClass("next").addClass("prev");
            el.eq(index).nextAll().removeClass("prev").addClass("next");
            dots.find("span").eq(index).addClass("active").siblings().removeClass("active");
            if (el.eq(index).find(".item-left").hasClass("black")) {
                jQuery("body").addClass("header-left-white-color").removeClass("header-left-dark-color")
            } else {
                jQuery("body").addClass("header-left-dark-color").removeClass("header-left-white-color")
            }
            if (el.eq(index).find(".item-right").hasClass("black")) {
                jQuery("body").addClass("header-right-white-color").removeClass("header-right-dark-color")
            } else {
                jQuery("body").addClass("header-right-dark-color").removeClass("header-right-white-color")
            }
        }

        vertical_parallax(false, 0);
        this_el.on("mousewheel wheel", function (e) {
            e.preventDefault();
            var cur = this_el.find(".screen-item.active").index();
            if (status != true) {
                status = true;
                if (e.originalEvent.deltaY > 0 && cur != parseInt(el.length - 1)) {
                    vertical_parallax("-1");
                    setTimeout(function () {
                        status = false
                    }, delay)
                } else if (e.originalEvent.deltaY < 0 && cur != 0) {
                    vertical_parallax("1");
                    setTimeout(function () {
                        status = false
                    }, delay)
                } else {
                    status = false
                }
            }
        });
        dots.on("click", "span:not(.active)", function () {
            jQuery(this).addClass("active").siblings().removeClass("active");
            vertical_parallax(false, jQuery(this).index())
        });
        el.find(".item-left").each(function () {
            jQuery(this).swipe({
                swipeUp: function () {
                    vertical_parallax("-1")
                }, swipeDown: function () {
                    vertical_parallax("1")
                }
            })
        });
        el.find(".item-right").each(function () {
            jQuery(this).swipe({
                swipeUp: function () {
                    vertical_parallax("1")
                }, swipeDown: function () {
                    vertical_parallax("-1")
                }
            })
        })
    });
    jQuery(".site-header .search-button").on("click", function () {
        if (jQuery(this).hasClass("active")) {
            jQuery(this).removeClass("active");
            jQuery(".search-popup").fadeOut()
        } else {
            jQuery(this).addClass("active");
            jQuery(".search-popup").fadeIn()
        }
    });
    jQuery(".search-popup .close").on("click", function () {
        jQuery(".site-header .search-button").removeClass("active");
        jQuery(".search-popup").fadeOut()
    });
    jQuery(".nav-button.hidden_menu, .nav-button.visible_menu").on("click", function () {
        if (jQuery(this).hasClass("active")) {
            jQuery(this).removeClass("active");
            jQuery(".navigation").removeClass("active")
        } else {
            jQuery(this).addClass("active");
            jQuery(".navigation").addClass("active")
        }
    });
    jQuery(".nav-button.full_screen").on("click", function () {
        if (jQuery(this).hasClass("active")) {
            jQuery(this).removeClass("active");
            jQuery(".full-screen-nav").fadeOut()
        } else {
            jQuery(this).addClass("active");
            jQuery(".full-screen-nav").fadeIn()
        }
    });
    jQuery(".full-screen-nav .close").on("click", function () {
        jQuery(".nav-button.full_screen").removeClass("active");
        jQuery(".full-screen-nav").fadeOut()
    });
    jQuery(".full-screen-nav .menu-item-has-children > a").on("click", function () {
        if (!jQuery(this).hasClass("active")) {
            jQuery(this).addClass("active").parent().children(".sub-menu").slideDown().parent().siblings().children("a").removeClass("active").next(".sub-menu").slideUp();
            return false
        }
    });
    jQuery(".side-navigation ul li.menu-item-has-children > a,.side-navigation ul li.page_item_has_children > a").on("click", function () {
        jQuery(this).parents("li").addClass("active-child");
        return false
    });
    jQuery(".side-navigation .sub-menu .back,.side-navigation .children .back").on("click", function () {
        jQuery(this).parent().parent().removeClass("active-child");
        return false
    });
    jQuery(".side-bar-button").on("click", function () {
        jQuery(".side-bar-area").addClass("active")
    });
    jQuery(".side-bar-area .close").on("click", function () {
        jQuery(".side-bar-area").removeClass("active")
    });
    jQuery(".banner-right-buttons div.category").on("click", function () {
        if (jQuery(this).hasClass("active")) {
            jQuery(this).parents(".banner-area").find(".banner-categories").removeClass("active");
            jQuery(this).removeClass("active")
        } else {
            jQuery(this).parents(".banner-area").find(".banner-categories").addClass("active");
            jQuery(this).addClass("active").siblings().removeClass("active");
            jQuery(this).parents(".banner-area").find(".banner-about").removeClass("active")
        }
    });
    jQuery(".banner-right-buttons div.about").on("click", function () {
        if (jQuery(this).hasClass("active")) {
            jQuery(this).parents(".banner-area").find(".banner-about").removeClass("active");
            jQuery(this).removeClass("active")
        } else {
            jQuery(this).parents(".banner-area").find(".banner-about").addClass("active");
            jQuery(this).addClass("active").siblings().removeClass("active");
            jQuery(this).parents(".banner-area").find(".banner-categories").removeClass("active")
        }
    });
    jQuery(window).on("load resize", function () {
        if (jQuery(window).width() <= "1200") {
            jQuery(".navigation .menu-item-has-children > a").on("click", function () {
                if (!jQuery(this).hasClass("active")) {
                    jQuery(this).addClass("active").parent().children(".sub-menu").slideDown().siblings().children(".sub-menu").slideUp();
                    return false
                }
            })
        }
    });
    jQuery(window).on("load resize scroll", function () {
        if (jQuery(document).scrollTop() > 0) {
            jQuery(".site-header").addClass("fixed")
        } else {
            jQuery(".site-header").removeClass("fixed")
        }
    });
    jQuery(document).on("click", ".price-list .item .options .button-style1", function () {
        if (jQuery(this).parent().hasClass("active")) {
            jQuery(this).removeClass("active").parent().removeClass("active").find(".wrap").slideUp();
            if (jQuery(window).width() < 768) {
                jQuery(this).closest('.owl-carousel').toggleClass('view-opened');
            }
        } else {
            jQuery(this).addClass("active").parent().addClass("active").find(".wrap").slideDown();
            if (jQuery(window).width() < 768) {
                jQuery(this).closest('.owl-carousel').toggleClass('view-opened');
            }
        }
        return false
    });
    jQuery("#wpadminbar").addClass("wpadminbar");
    var nav_el = "";
    if (jQuery(".navigation").hasClass("visible_menu")) {
        nav_el = "yes"
    }
    jQuery(window).on("load resize", function () {
        jQuery(".header-space").css("height", jQuery(".site-header").outerHeight() + jQuery(".header + .navigation").outerHeight() + jQuery(".ypromo-site-bar").outerHeight());
        jQuery("main.main-row").css("min-height", jQuery(window).outerHeight() - jQuery(".site-footer").outerHeight() - jQuery(".footer-social-button").outerHeight() - jQuery(".header-space:not(.hide)").outerHeight() - jQuery(".ypromo-site-bar").outerHeight() - jQuery("#wpadminbar").outerHeight());
        jQuery(".protected-post-form .cell").css("height", jQuery(window).outerHeight() - jQuery(".site-footer").outerHeight() - jQuery(".footer-social-button").outerHeight() - jQuery(".header-space:not(.hide)").outerHeight() - jQuery(".ypromo-site-bar").outerHeight() - jQuery("#wpadminbar").outerHeight());
        jQuery(".banner:not(.fixed-height)").each(function () {
            var coef = 0;
            if (jQuery(this).parents(".banner-area").hasClass("external-indent") && !jQuery(this).parents(".banner-area").hasClass("with-carousel-nav")) {
                coef = 70
            }
            jQuery(this).css("height", jQuery(window).outerHeight() - jQuery(".header-space:not(.hide)").outerHeight() - jQuery("#wpadminbar").outerHeight() - coef);
            jQuery(this).find(".cell").css("height", jQuery(this).height());
            jQuery(this).parent().find(".banner-categories .item").css("height", jQuery(this).height());
            jQuery(this).parent().find(".banner-about .cell").css("height", jQuery(this).height() - 20);
            jQuery(this).parent().find(".banner-about .image").css("height", jQuery(this).height());
            jQuery(this).parent().find(".banner-about .text").css("height", jQuery(this).height());
            jQuery(this).parent().find(".banner-right-buttons .cell").css("height", jQuery(this).height())
        });
        jQuery(".banner.fixed-height").each(function () {
            jQuery(this).find(".cell").css("height", jQuery(this).height());
            jQuery(this).parent().find(".banner-categories .item").css("height", jQuery(this).height());
            jQuery(this).parent().find(".banner-about .cell").css("height", jQuery(this).height() - 20);
            jQuery(this).parent().find(".banner-about .image").css("height", jQuery(this).height());
            jQuery(this).parent().find(".banner-about .text").css("height", jQuery(this).height());
            jQuery(this).parent().find(".banner-right-buttons .cell").css("height", jQuery(this).height())
        });
        jQuery(".full-screen-nav .cell").css("height", jQuery(window).height() - 20 - jQuery("#wpadminbar").height());
        jQuery(".side-header .cell").css("height", jQuery(".side-header .wrap").height());
        if (nav_el == "yes") {
            if (jQuery(window).width() >= 1200) {
                jQuery(".navigation").addClass("visible_menu");
                jQuery(".nav-button").addClass("hidden")
            } else {
                jQuery(".navigation").removeClass("visible_menu");
                jQuery(".nav-button").removeClass("hidden").removeClass("active")
            }
        }
        if (jQuery(window).width() <= "768") {
            jQuery("body").addClass("is-mobile-body")
        } else {
            jQuery("body").removeClass("is-mobile-body")
        }
        jQuery('div[data-vc-full-width-mod="true"]').each(function () {
            var coef = (jQuery(".container").outerWidth() - jQuery("#all").width()) / 2;
            jQuery(this).css("left", coef).css("width", jQuery("#all").width())
        });
        jQuery(".price-list").each(function () {
            var h = 0;
            jQuery(this).find(".item").each(function () {
                if (h < jQuery(this).find(".wrap").outerHeight()) {
                    h = jQuery(this).find(".wrap").outerHeight()
                }
            });
            jQuery(this).find(".item").css("padding-bottom", h + 130)
        });
        jQuery(".blog-type-grid").each(function () {
        });
        jQuery(".woocommerce .products").each(function () {
            equalHeight(jQuery(this).find("article div.product"))
        });
        jQuery(".project-horizontal-slider img, .project-horizontal, .project-horizontal-img").css("height", jQuery(window).outerHeight() - jQuery(".header-space:not(.hide)").height() - jQuery(".site-footer").outerHeight() - jQuery("#wpadminbar").outerHeight());
        jQuery(".project-horizontal .cell").css("height", jQuery(".project-horizontal").outerHeight());
        jQuery(".split-screen").each(function () {
            var this_el = jQuery(this);
            this_el.css("height", jQuery(window).height() - jQuery("#wpadminbar").outerHeight());
            this_el.find(".img-item").css("height", this_el.height());
            this_el.find(".cell").css("height", this_el.height())
        });
        jQuery(".category-slider-area").each(function () {
            var this_el = jQuery(this);
            this_el.css("height", jQuery(window).height() - jQuery("#wpadminbar").outerHeight());
            this_el.find(".category-slider-images").css("height", this_el.height());
            this_el.find(".cell").css("height", this_el.height())
        });
        jQuery(".vertical-parallax-slider").each(function () {
            jQuery(this).css("height", jQuery(window).outerHeight() - jQuery(".header-space:not(.hide)").height() - jQuery("#wpadminbar").outerHeight());
            jQuery(this).find(".cell").css("height", jQuery(this).height())
        });
        jQuery(".split-screen-type2").each(function () {
            jQuery(this).css("height", jQuery(window).outerHeight() - jQuery(".header-space:not(.hide)").height() - jQuery("#wpadminbar").outerHeight());
            jQuery(this).find(".items .item").css("height", jQuery(this).height())
        });
        jQuery(".navigation > ul > li > .sub-menu").each(function () {
            var left = jQuery(this).offset().left, width = jQuery(this).outerWidth(), window_w = jQuery(window).width();
            if (!jQuery(this).hasClass("right") && window_w < left + width) {
                jQuery(this).addClass("right")
            }
        });
        jQuery(".album-area").each(function () {
            if (jQuery(this).find(".album-cover").length > 0) {
                var cover_height = jQuery(this).find(".album-cover").outerHeight(),
                    top_height = jQuery(this).find(".top").outerHeight();
                jQuery(this).find(".jp-playlist").css("height", cover_height - top_height)
            }
        })
    });
    jQuery(".project-horizontal-slider").each(function () {
        var head_slider = jQuery(this);
        if (head_slider.find(".item").length > 1) {
            head_slider.imagesLoaded(function () {
                head_slider.addClass("owl-carousel").owlCarousel({
                    items: 1,
                    nav: true,
                    dots: false,
                    autoplay: false,
                    autoWidth: true,
                    navClass: ["owl-prev basic-ui-icon-left-arrow", "owl-next basic-ui-icon-right-arrow"],
                    navText: false,
                    margin: 30,
                    responsive: {0: {nav: false}, 480: {}, 768: {nav: true}}
                })
            })
        }
    });
    jQuery("#scroll-top").on("click", function () {
        jQuery("body, html").animate({scrollTop: "0"}, 1100);
        return false
    });
    jQuery(window).on("load resize", function () {
        jQuery(".centered-container").each(function () {
            var width = parseInt(Math.round(jQuery(this).width()).toFixed(0)),
                height = parseInt(Math.round(jQuery(this).height()).toFixed(0));
            jQuery(this).css("width", "").css("height", "");
            if (width & 1) {
                jQuery(this).css("width", width + 1 + "px")
            }
            if (height & 1) {
                jQuery(this).css("height", height + 1 + "px")
            }
        })
    });
    jQuery(window).bind("load", function () {
        jQuery(".portfolio-items").each(function () {
            var wrap = jQuery(this);
            wrap.imagesLoaded(function () {
                var $grid = wrap.isotope({itemSelector: "article", masonry: {horizontalOrder: true}})
            });
            jQuery(this).prev(".filter-button-group").on("click", "button", function () {
                jQuery(this).addClass("active").siblings().removeClass("active");
                var filterValue = jQuery(this).attr("data-filter");
                wrap.isotope({filter: filterValue});
                jQuery(window).trigger("resize").trigger("scroll")
            })
        });
        jQuery(".post-gallery-grid:not(.disable-iso)").each(function () {
            var $grid = jQuery(this).addClass("isotope").isotope({itemSelector: ".col-xs-12", horizontalOrder: true})
        });
        jQuery(".js-pixproof-gallery").each(function () {
            var $grid = jQuery(this).addClass("isotope").isotope({itemSelector: ".proof-photo", horizontalOrder: true})
        })
    });
    jQuery(window).bind("load", function () {
        jQuery(".blog-items").each(function () {
            var wrap = jQuery(this);
            var $grid = jQuery(this).isotope({itemSelector: "article"});
            jQuery(this).prev(".filter-button-group").on("click", "button", function () {
                jQuery(this).addClass("active").siblings().removeClass("active");
                var filterValue = jQuery(this).attr("data-filter");
                wrap.isotope({filter: filterValue});
                jQuery(window).trigger("resize").trigger("scroll")
            })
        })
    });
    jQuery(window).on("load", function () {
        jQuery(".post-gallery-masonry").each(function () {
            var $grid = jQuery(this).isotope({itemSelector: "div"})
        })
    });
    jQuery(".replytocom").on("click", function () {
        var id_parent = jQuery(this).attr("data-id");
        jQuery("#comment_parent").val(id_parent);
        jQuery("#respond").appendTo(jQuery(this).parents(".comment-item"));
        jQuery("#cancel-comment-reply-link").show();
        return false
    });
    jQuery("#cancel-comment-reply-link").on("click", function () {
        jQuery("#comment_parent").val("0");
        jQuery("#respond").appendTo(jQuery("#commentform-area"));
        jQuery("#cancel-comment-reply-link").hide();
        return false
    });
    jQuery(window).on("load scroll", function () {
        jQuery(".background-parallax").each(function () {
            var wScroll = jQuery(window).scrollTop() - jQuery(this).parent().offset().top + jQuery("#wpadminbar").height() + jQuery(".header-space").height();
            jQuery(this).css("transform", "translate(0px," + wScroll + "px)");
            jQuery(this).parents(".owl-carousel").find(".owl-nav div").css("margin-top", wScroll)
        })
    });
    var l_button_index = 0;
    jQuery(".project-image-load-button .button-style1").on("click", function () {
        var $this = jQuery(this), $wrap = $this.parents(".project-grid-page"), $load_items = $wrap.find(".load-items"),
            cout_pages = $load_items.length;
        l_button_index++;
        if (cout_pages == 1) {
            jQuery(this).parent().fadeOut()
        }
        var items = $wrap.find(".load-items" + l_button_index).find(".col-xs-12");
        $wrap.find(".load-items" + l_button_index).remove();
        $wrap.find(".post-gallery-grid").append(items).isotope("appended", items);
        return false
    });
    jQuery(".quantity .down").on("click", function () {
        var val = jQuery(this).parent().find(".input-text").val();
        if (val > 1) {
            val = parseInt(val) - 1;
            jQuery(this).parent().find(".input-text").val(val)
        }
        return false
    });
    jQuery(".quantity .up").on("click", function () {
        var val = jQuery(this).parent().find(".input-text").val();
        val = parseInt(val) + 1;
        jQuery(this).parent().find(".input-text").val(val);
        return false
    });
    jQuery(window).on("load scroll", function () {
        jQuery(".skill-item .chart").each(function () {
            var top = jQuery(document).scrollTop() + jQuery(window).height();
            var pos_top = jQuery(this).offset().top;
            if (top > pos_top) {
                jQuery(this).addClass("animated")
            }
        })
    });
    jQuery(".jquery-background-video").each(function () {
        jQuery(this).bgVideo({showPausePlay: false})
    });
    jQuery(document).on("click", '[href="#"]', function () {
        return false
    });
    jQuery(".photo-carousel .carousel").each(function () {
        var head_slider = jQuery(this);
        if (head_slider.find(".item").length > 1) {
            head_slider.addClass("owl-carousel").owlCarousel({
                loop: true,
                items: 1,
                nav: false,
                dots: false,
                autoplay: true,
                autoplayTimeout: 3e3,
                smartSpeed: 2e3,
                autoWidth: false,
                navText: false,
                responsive: {
                    0: {items: 2},
                    480: {items: 3},
                    768: {items: 4},
                    980: {items: 5},
                    1200: {items: 6},
                    1400: {items: 7},
                    1700: {items: 8},
                    1980: {items: 9}
                }
            })
        }
    });
    jQuery(".testimonial-carousel .carousel").each(function () {
        var head_slider = jQuery(this);
        if (head_slider.find(".item").length > 1) {
            head_slider.addClass("owl-carousel").owlCarousel({
                loop: true,
                items: 1,
                nav: false,
                dots: false,
                autoplay: true,
                autoplayTimeout: 14000,
                autoplaySpeed: 1500,
                smartSpeed: 1500,
                autoWidth: false,
                navText: false
            })
        }
    });
    if (jQuery(".popup-gallery").length > 0) {
        jQuery("body").append('<div class="pswp" tabindex="-1" role="dialog" aria-hidden="true"> <div class="pswp__bg"></div><div class="pswp__scroll-wrap"> <div class="pswp__container"> <div class="pswp__item"></div><div class="pswp__item"></div><div class="pswp__item"></div></div><div class="pswp__ui pswp__ui--hidden"> <div class="pswp__top-bar"> <div class="pswp__counter"></div><button class="pswp__button pswp__button--close" title="Close (Esc)"></button> <button class="pswp__button pswp__button--share" title="Share"></button> <button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button> <button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button> <div class="pswp__preloader"> <div class="pswp__preloader__icn"> <div class="pswp__preloader__cut"> <div class="pswp__preloader__donut"></div></div></div></div></div><div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap"> <div class="pswp__share-tooltip"></div></div><button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)"> </button> <button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)"> </button> <div class="pswp__caption"> <div class="pswp__caption__center"></div></div></div></div></div>');
        var $pswp = jQuery(".pswp")[0];
        jQuery(document).on("click", ".popup-gallery .popup-item a, .popup-gallery.images a", function (event) {
            if (!jQuery(this).hasClass("permalink")) {
                console.log(jQuery(this).hasClass("permalink"));
                event.preventDefault();
                var image = [];
                var $pic = jQuery(this).parents(".popup-gallery");
                var getItems = function () {
                    var items = [], $el = "";
                    if ($pic.hasClass("owl-carousel")) {
                        $el = $pic.find(".owl-item:not(.cloned) a:not(.permalink):visible")
                    } else if ($pic.hasClass("images")) {
                        $el = $pic.find("a[data-size]")
                    } else {
                        $el = $pic.find(".popup-item a:not(.permalink)")
                    }
                    $el.each(function () {
                        var $href = jQuery(this).attr("href"), $size = jQuery(this).data("size").split("x"),
                            $width = $size[0], $height = $size[1];
                        if (jQuery(this).data("type") == "video") {
                            var item = {html: jQuery(this).data("video")}
                        } else {
                            var item = {src: $href, w: $width, h: $height}
                        }
                        items.push(item)
                    });
                    return items
                };
                var items = getItems();
                jQuery.each(items, function (index, value) {
                    image[index] = new Image;
                    if (value["src"]) {
                        image[index].src = value["src"]
                    }
                });
                var $index = jQuery(this).parents(".popup-item").index();
                if ($pic.hasClass("owl-carousel")) {
                    $index = jQuery(this).parents(".portfolio-item").data("id")
                } else if (jQuery(this).parent().hasClass("thumbnails")) {
                    $index = jQuery(this).index();
                    $index++
                } else if (jQuery(this).parents(".popup-gallery").find(".grid-sizer").length > 0) {
                    $index = $index - 1
                }
                var options = {index: $index, bgOpacity: .7, showHideOpacity: true};
                var lightBox = new PhotoSwipe($pswp, PhotoSwipeUI_Default, items, options);
                lightBox.listen("beforeChange", function () {
                    var currItem = jQuery(lightBox.currItem.container);
                    jQuery(".pswp__video").removeClass("active");
                    var currItemIframe = currItem.find(".pswp__video").addClass("active");
                    jQuery(".pswp__video").each(function () {
                        if (!jQuery(this).hasClass("active")) {
                            jQuery(this).attr("src", jQuery(this).attr("src"))
                        }
                    })
                });
                lightBox.listen("close", function () {
                    jQuery(".pswp__item .pswp__zoom-wrap").remove()
                });
                lightBox.init()
            }
        })
    }
});
jQuery(document).ready(function (jQuery) {
    jQuery(".banner-59b29bddb0de2").each(function () {
        function leadZero(n) {
            return (n < 10 ? "0" : "") + n
        }

        jQuery(this).on("initialize.owl.carousel", function (property) {
            jQuery(this).find(".item").each(function () {
                var num = leadZero(jQuery(this).index() + 1);
                jQuery(this).find(".num").text(num)
            })
        });
        var head_slider = jQuery(this);
        if (head_slider.find(".item").length == 1) {
            head_slider.parent().removeClass("with-carousel-nav")
        }
        if (jQuery(this).find(".item").length > 1) {
            head_slider.addClass("owl-carousel").owlCarousel({
                loop: false,
                items: 1,
                nav: false,
                dots: true,
                autoplay: true,
                autoplayTimeout: 3e3,
                autoplayHoverPause: true,
                smartSpeed: 500,
                navClass: ["owl-prev basic-ui-icon-left-arrow", "owl-next basic-ui-icon-right-arrow"],
                navText: false,
                responsive: {0: {nav: false}, 480: {}, 768: {nav: false}}
            });
            var child_carousel = head_slider.parent().find(".banner-carousel");
            var i = 0;
            var flag = false;
            var c_items = "3";
            head_slider.find(".owl-item:not(.cloned)").find(".item").each(function () {
                i++;
                var heading = jQuery(this).data("heading");
                var text = jQuery(this).data("text");
                if (!child_carousel.hasClass("owl-carousel")) {
                    child_carousel.append('<div class="item"><div class="num">' + leadZero(i) + '</div><div class="h">' + heading + '</div><div class="p">' + text + "</div></div>")
                }
            });
            if (head_slider.find(".owl-item:not(.cloned)").find(".item").length < 3) {
                c_items = head_slider.find(".owl-item:not(.cloned)").find(".item").length
            }
            var child_carousel_item = child_carousel.find(".owl-item.active");
            child_carousel_c = child_carousel.addClass("owl-carousel").owlCarousel({
                items: 1,
                nav: true,
                dots: false,
                autoplay: false,
                smartSpeed: 500,
                navClass: ["owl-prev basic-ui-icon-left-arrow", "owl-next basic-ui-icon-right-arrow"],
                navText: false,
                margin: 30,
                responsive: {0: {nav: false}, 480: {}, 768: {nav: true, items: c_items}}
            }).on("click", ".item", function (e) {
                e.preventDefault();
                head_slider.trigger("to.owl.carousel", [jQuery(e.target).parents(".owl-item").index(), 300, true]);
                jQuery(e.target).parents(".owl-item").addClass("active-item").siblings().removeClass("active-item")
            }).data("owl.carousel");
            head_slider.on("change.owl.carousel", function (e) {
                if (e.namespace && e.property.name === "position" && !flag) {
                    flag = true;
                    child_carousel_c.to(e.relatedTarget.relative(e.property.value), 300, true);
                    flag = false
                }
                head_slider.parent().find(".banner-carousel .owl-item.active").first().addClass("active-item").siblings().removeClass("active-item")
            }).data("owl.carousel");
            head_slider.on("changed.owl.carousel", function (property) {
                var current = property.item.index;
                if (jQuery(property.target).find(".owl-item").eq(current).find("video").length > 0) {
                    jQuery(property.target).find(".owl-item").eq(current).find("video").get(0).play()
                }
            })
        }
    })
});
jQuery(document).ready(function (jQuery) {
    jQuery(".price-list-59bbbd75471e6").each(function () {
        var head_slider = jQuery(this);
        if (jQuery(this).find(".item").length > 1) {
            head_slider.addClass("owl-carousel").owlCarousel({
                loop: true,
                items: 1,
                nav: true,
                dots: false,
                autoplay: true,
                autoplayTimeout: 20000,
                autoplayHoverPause: true,
                smartSpeed: 500,
                navClass: ["owl-prev basic-ui-icon-left-arrow", "owl-next basic-ui-icon-right-arrow"],
                navText: false,
                responsive: {
                    0: {nav: false, items: 1},
                    480: {},
                    768: {nav: true, items: 1},
                    980: {items: 2},
                    1200: {items: 3}
                }
            })
        }
    })
});
!function (a, b) {

    function c() {
        if (!e) {
            e = !0;
            var a, c, d, f, g = -1 !== navigator.appVersion.indexOf("MSIE 10"),
                h = !!navigator.userAgent.match(/Trident.*rv:11\./),
                i = b.querySelectorAll("iframe.wp-embedded-content");
            for (c = 0; c < i.length; c++) {
                if (d = i[c], !d.getAttribute("data-secret")) f = Math.random().toString(36).substr(2, 10), d.src += "#?secret=" + f, d.setAttribute("data-secret", f);
                if (g || h) a = d.cloneNode(!0), a.removeAttribute("security"), d.parentNode.replaceChild(a, d)
            }
        }
    }

    var d = !1, e = !1;
    if (b.querySelector) if (a.addEventListener) d = !0;
    if (a.wp = a.wp || {}, !a.wp.receiveEmbedMessage) if (a.wp.receiveEmbedMessage = function (c) {
        var d = c.data;
        if (d) if (d.secret || d.message || d.value) if (!/[^a-zA-Z0-9]/.test(d.secret)) {
            var e, f, g, h, i, j = b.querySelectorAll('iframe[data-secret="' + d.secret + '"]'),
                k = b.querySelectorAll('blockquote[data-secret="' + d.secret + '"]');
            for (e = 0; e < k.length; e++) k[e].style.display = "none";
            for (e = 0; e < j.length; e++) if (f = j[e], c.source === f.contentWindow) {
                if (f.removeAttribute("style"), "height" === d.message) {
                    if (g = parseInt(d.value, 10), g > 1e3) g = 1e3; else if (~~g < 200) g = 200;
                    f.height = g
                }
                if ("link" === d.message) if (h = b.createElement("a"), i = b.createElement("a"), h.href = f.getAttribute("src"), i.href = d.value, i.host === h.host) if (b.activeElement === f) a.top.location.href = d.value
            } else ;
        }
    }, d) a.addEventListener("message", a.wp.receiveEmbedMessage, !1), b.addEventListener("DOMContentLoaded", c, !1), a.addEventListener("load", c, !1)
}(window, document);
(function ($, window, document, undefined) {
    function Owl(element, options) {
        this.settings = null;
        this.options = $.extend({}, Owl.Defaults, options);
        this.$element = $(element);
        this._handlers = {};
        this._plugins = {};
        this._supress = {};
        this._current = null;
        this._speed = null;
        this._coordinates = [];
        this._breakpoint = null;
        this._width = null;
        this._items = [];
        this._clones = [];
        this._mergers = [];
        this._widths = [];
        this._invalidated = {};
        this._pipe = [];
        this._drag = {time: null, target: null, pointer: null, stage: {start: null, current: null}, direction: null};
        this._states = {current: {}, tags: {initializing: ["busy"], animating: ["busy"], dragging: ["interacting"]}};
        $.each(["onResize", "onThrottledResize"], $.proxy(function (i, handler) {
            this._handlers[handler] = $.proxy(this[handler], this)
        }, this));
        $.each(Owl.Plugins, $.proxy(function (key, plugin) {
            this._plugins[key.charAt(0).toLowerCase() + key.slice(1)] = new plugin(this)
        }, this));
        $.each(Owl.Workers, $.proxy(function (priority, worker) {
            this._pipe.push({filter: worker.filter, run: $.proxy(worker.run, this)})
        }, this));
        this.setup();
        this.initialize()
    }

    Owl.Defaults = {
        items: 3,
        loop: false,
        center: false,
        rewind: false,
        mouseDrag: true,
        touchDrag: true,
        pullDrag: true,
        freeDrag: false,
        margin: 0,
        stagePadding: 0,
        merge: false,
        mergeFit: true,
        autoWidth: false,
        startPosition: 0,
        rtl: false,
        smartSpeed: 250,
        fluidSpeed: false,
        dragEndSpeed: false,
        responsive: {},
        responsiveRefreshRate: 200,
        responsiveBaseElement: window,
        fallbackEasing: "swing",
        info: false,
        nestedItemSelector: false,
        itemElement: "div",
        stageElement: "div",
        refreshClass: "owl-refresh",
        loadedClass: "owl-loaded",
        loadingClass: "owl-loading",
        rtlClass: "owl-rtl",
        responsiveClass: "owl-responsive",
        dragClass: "owl-drag",
        itemClass: "owl-item",
        stageClass: "owl-stage",
        stageOuterClass: "owl-stage-outer",
        grabClass: "owl-grab"
    };
    Owl.Width = {Default: "default", Inner: "inner", Outer: "outer"};
    Owl.Type = {Event: "event", State: "state"};
    Owl.Plugins = {};
    Owl.Workers = [{
        filter: ["width", "settings"], run: function () {
            this._width = this.$element.width()
        }
    }, {
        filter: ["width", "items", "settings"], run: function (cache) {
            cache.current = this._items && this._items[this.relative(this._current)]
        }
    }, {
        filter: ["items", "settings"], run: function () {
            this.$stage.children(".cloned").remove()
        }
    }, {
        filter: ["width", "items", "settings"], run: function (cache) {
            var margin = this.settings.margin || "", grid = !this.settings.autoWidth, rtl = this.settings.rtl,
                css = {width: "auto", "margin-left": rtl ? margin : "", "margin-right": rtl ? "" : margin};
            !grid && this.$stage.children().css(css);
            cache.css = css
        }
    }, {
        filter: ["width", "items", "settings"], run: function (cache) {
            var width = (this.width() / this.settings.items).toFixed(3) - this.settings.margin, merge = null,
                iterator = this._items.length, grid = !this.settings.autoWidth, widths = [];
            cache.items = {merge: false, width: width};
            while (iterator--) {
                merge = this._mergers[iterator];
                merge = this.settings.mergeFit && Math.min(merge, this.settings.items) || merge;
                cache.items.merge = merge > 1 || cache.items.merge;
                widths[iterator] = !grid ? this._items[iterator].width() : width * merge
            }
            this._widths = widths
        }
    }, {
        filter: ["items", "settings"], run: function () {
            var clones = [], items = this._items, settings = this.settings, view = Math.max(settings.items * 2, 4),
                size = Math.ceil(items.length / 2) * 2,
                repeat = settings.loop && items.length ? settings.rewind ? view : Math.max(view, size) : 0, append = "",
                prepend = "";
            repeat /= 2;
            while (repeat--) {
                clones.push(this.normalize(clones.length / 2, true));
                append = append + items[clones[clones.length - 1]][0].outerHTML;
                clones.push(this.normalize(items.length - 1 - (clones.length - 1) / 2, true));
                prepend = items[clones[clones.length - 1]][0].outerHTML + prepend
            }
            this._clones = clones;
            $(append).addClass("cloned").appendTo(this.$stage);
            $(prepend).addClass("cloned").prependTo(this.$stage)
        }
    }, {
        filter: ["width", "items", "settings"], run: function () {
            var rtl = this.settings.rtl ? 1 : -1, size = this._clones.length + this._items.length, iterator = -1,
                previous = 0, current = 0, coordinates = [];
            while (++iterator < size) {
                previous = coordinates[iterator - 1] || 0;
                current = this._widths[this.relative(iterator)] + this.settings.margin;
                coordinates.push(previous + current * rtl)
            }
            this._coordinates = coordinates
        }
    }, {
        filter: ["width", "items", "settings"], run: function () {
            var padding = this.settings.stagePadding, coordinates = this._coordinates, css = {
                width: Math.ceil(Math.abs(coordinates[coordinates.length - 1])) + padding * 2,
                "padding-left": padding || "",
                "padding-right": padding || ""
            };
            this.$stage.css(css)
        }
    }, {
        filter: ["width", "items", "settings"], run: function (cache) {
            var iterator = this._coordinates.length, grid = !this.settings.autoWidth, items = this.$stage.children();
            if (grid && cache.items.merge) {
                while (iterator--) {
                    cache.css.width = this._widths[this.relative(iterator)];
                    items.eq(iterator).css(cache.css)
                }
            } else if (grid) {
                cache.css.width = cache.items.width;
                items.css(cache.css)
            }
        }
    }, {
        filter: ["items"], run: function () {
            this._coordinates.length < 1 && this.$stage.removeAttr("style")
        }
    }, {
        filter: ["width", "items", "settings"], run: function (cache) {
            cache.current = cache.current ? this.$stage.children().index(cache.current) : 0;
            cache.current = Math.max(this.minimum(), Math.min(this.maximum(), cache.current));
            this.reset(cache.current)
        }
    }, {
        filter: ["position"], run: function () {
            this.animate(this.coordinates(this._current))
        }
    }, {
        filter: ["width", "position", "items", "settings"], run: function () {
            var rtl = this.settings.rtl ? 1 : -1, padding = this.settings.stagePadding * 2,
                begin = this.coordinates(this.current()) + padding, end = begin + this.width() * rtl, inner, outer,
                matches = [], i, n;
            for (i = 0, n = this._coordinates.length; i < n; i++) {
                inner = this._coordinates[i - 1] || 0;
                outer = Math.abs(this._coordinates[i]) + padding * rtl;
                if (this.op(inner, "<=", begin) && this.op(inner, ">", end) || this.op(outer, "<", begin) && this.op(outer, ">", end)) {
                    matches.push(i)
                }
            }
            this.$stage.children(".active").removeClass("active");
            this.$stage.children(":eq(" + matches.join("), :eq(") + ")").addClass("active");
            if (this.settings.center) {
                this.$stage.children(".center").removeClass("center");
                this.$stage.children().eq(this.current()).addClass("center")
            }
        }
    }];
    Owl.prototype.initialize = function () {
        this.enter("initializing");
        this.trigger("initialize");
        this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl);
        if (this.settings.autoWidth && !this.is("pre-loading")) {
            var imgs, nestedSelector, width;
            imgs = this.$element.find("img");
            nestedSelector = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : undefined;
            width = this.$element.children(nestedSelector).width();
            if (imgs.length && width <= 0) {
                this.preloadAutoWidthImages(imgs)
            }
        }
        this.$element.addClass(this.options.loadingClass);
        this.$stage = $("<" + this.settings.stageElement + ' class="' + this.settings.stageClass + '"/>').wrap('<div class="' + this.settings.stageOuterClass + '"/>');
        this.$element.append(this.$stage.parent());
        this.replace(this.$element.children().not(this.$stage.parent()));
        if (this.$element.is(":visible")) {
            this.refresh()
        } else {
            this.invalidate("width")
        }
        this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass);
        this.registerEventHandlers();
        this.leave("initializing");
        this.trigger("initialized")
    };
    Owl.prototype.setup = function () {
        var viewport = this.viewport(), overwrites = this.options.responsive, match = -1, settings = null;
        if (!overwrites) {
            settings = $.extend({}, this.options)
        } else {
            $.each(overwrites, function (breakpoint) {
                if (breakpoint <= viewport && breakpoint > match) {
                    match = Number(breakpoint)
                }
            });
            settings = $.extend({}, this.options, overwrites[match]);
            if (typeof settings.stagePadding === "function") {
                settings.stagePadding = settings.stagePadding()
            }
            delete settings.responsive;
            if (settings.responsiveClass) {
                this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + match))
            }
        }
        this.trigger("change", {property: {name: "settings", value: settings}});
        this._breakpoint = match;
        this.settings = settings;
        this.invalidate("settings");
        this.trigger("changed", {property: {name: "settings", value: this.settings}})
    };
    Owl.prototype.optionsLogic = function () {
        if (this.settings.autoWidth) {
            this.settings.stagePadding = false;
            this.settings.merge = false
        }
    };
    Owl.prototype.prepare = function (item) {
        var event = this.trigger("prepare", {content: item});
        if (!event.data) {
            event.data = $("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(item)
        }
        this.trigger("prepared", {content: event.data});
        return event.data
    };
    Owl.prototype.update = function () {
        var i = 0, n = this._pipe.length, filter = $.proxy(function (p) {
            return this[p]
        }, this._invalidated), cache = {};
        while (i < n) {
            if (this._invalidated.all || $.grep(this._pipe[i].filter, filter).length > 0) {
                this._pipe[i].run(cache)
            }
            i++
        }
        this._invalidated = {};
        !this.is("valid") && this.enter("valid")
    };
    Owl.prototype.width = function (dimension) {
        dimension = dimension || Owl.Width.Default;
        switch (dimension) {
            case Owl.Width.Inner:
            case Owl.Width.Outer:
                return this._width;
            default:
                return this._width - this.settings.stagePadding * 2 + this.settings.margin
        }
    };
    Owl.prototype.refresh = function () {
        this.enter("refreshing");
        this.trigger("refresh");
        this.setup();
        this.optionsLogic();
        this.$element.addClass(this.options.refreshClass);
        this.update();
        this.$element.removeClass(this.options.refreshClass);
        this.leave("refreshing");
        this.trigger("refreshed")
    };
    Owl.prototype.onThrottledResize = function () {
        window.clearTimeout(this.resizeTimer);
        this.resizeTimer = window.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate)
    };
    Owl.prototype.onResize = function () {
        if (!this._items.length) {
            return false
        }
        if (this._width === this.$element.width()) {
            return false
        }
        if (!this.$element.is(":visible")) {
            return false
        }
        this.enter("resizing");
        if (this.trigger("resize").isDefaultPrevented()) {
            this.leave("resizing");
            return false
        }
        this.invalidate("width");
        this.refresh();
        this.leave("resizing");
        this.trigger("resized")
    };
    Owl.prototype.registerEventHandlers = function () {
        if ($.support.transition) {
            this.$stage.on($.support.transition.end + ".owl.core", $.proxy(this.onTransitionEnd, this))
        }
        if (this.settings.responsive !== false) {
            this.on(window, "resize", this._handlers.onThrottledResize)
        }
        if (this.settings.mouseDrag) {
            this.$element.addClass(this.options.dragClass);
            this.$stage.on("mousedown.owl.core", $.proxy(this.onDragStart, this));
            this.$stage.on("dragstart.owl.core selectstart.owl.core", function () {
                return false
            })
        }
        if (this.settings.touchDrag) {
            this.$stage.on("touchstart.owl.core", $.proxy(this.onDragStart, this));
            this.$stage.on("touchcancel.owl.core", $.proxy(this.onDragEnd, this))
        }
    };
    Owl.prototype.onDragStart = function (event) {
        var stage = null;
        if (event.which === 3) {
            return
        }
        if ($.support.transform) {
            stage = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(",");
            stage = {x: stage[stage.length === 16 ? 12 : 4], y: stage[stage.length === 16 ? 13 : 5]}
        } else {
            stage = this.$stage.position();
            stage = {
                x: this.settings.rtl ? stage.left + this.$stage.width() - this.width() + this.settings.margin : stage.left,
                y: stage.top
            }
        }
        if (this.is("animating")) {
            $.support.transform ? this.animate(stage.x) : this.$stage.stop();
            this.invalidate("position")
        }
        this.$element.toggleClass(this.options.grabClass, event.type === "mousedown");
        this.speed(0);
        this._drag.time = (new Date).getTime();
        this._drag.target = $(event.target);
        this._drag.stage.start = stage;
        this._drag.stage.current = stage;
        this._drag.pointer = this.pointer(event);
        $(document).on("mouseup.owl.core touchend.owl.core", $.proxy(this.onDragEnd, this));
        $(document).one("mousemove.owl.core touchmove.owl.core", $.proxy(function (event) {
            var delta = this.difference(this._drag.pointer, this.pointer(event));
            $(document).on("mousemove.owl.core touchmove.owl.core", $.proxy(this.onDragMove, this));
            if (Math.abs(delta.x) < Math.abs(delta.y) && this.is("valid")) {
                return
            }
            event.preventDefault();
            this.enter("dragging");
            this.trigger("drag")
        }, this))
    };
    Owl.prototype.onDragMove = function (event) {
        var minimum = null, maximum = null, pull = null,
            delta = this.difference(this._drag.pointer, this.pointer(event)),
            stage = this.difference(this._drag.stage.start, delta);
        if (!this.is("dragging")) {
            return
        }
        event.preventDefault();
        if (this.settings.loop) {
            minimum = this.coordinates(this.minimum());
            maximum = this.coordinates(this.maximum() + 1) - minimum;
            stage.x = ((stage.x - minimum) % maximum + maximum) % maximum + minimum
        } else {
            minimum = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum());
            maximum = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum());
            pull = this.settings.pullDrag ? -1 * delta.x / 5 : 0;
            stage.x = Math.max(Math.min(stage.x, minimum + pull), maximum + pull)
        }
        this._drag.stage.current = stage;
        this.animate(stage.x)
    };
    Owl.prototype.onDragEnd = function (event) {
        var delta = this.difference(this._drag.pointer, this.pointer(event)), stage = this._drag.stage.current,
            direction = delta.x > 0 ^ this.settings.rtl ? "left" : "right";
        $(document).off(".owl.core");
        this.$element.removeClass(this.options.grabClass);
        if (delta.x !== 0 && this.is("dragging") || !this.is("valid")) {
            this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed);
            this.current(this.closest(stage.x, delta.x !== 0 ? direction : this._drag.direction));
            this.invalidate("position");
            this.update();
            this._drag.direction = direction;
            if (Math.abs(delta.x) > 3 || (new Date).getTime() - this._drag.time > 300) {
                this._drag.target.one("click.owl.core", function () {
                    return false
                })
            }
        }
        if (!this.is("dragging")) {
            return
        }
        this.leave("dragging");
        this.trigger("dragged")
    };
    Owl.prototype.closest = function (coordinate, direction) {
        var position = -1, pull = 30, width = this.width(), coordinates = this.coordinates();
        if (!this.settings.freeDrag) {
            $.each(coordinates, $.proxy(function (index, value) {
                if (direction === "left" && coordinate > value - pull && coordinate < value + pull) {
                    position = index
                } else if (direction === "right" && coordinate > value - width - pull && coordinate < value - width + pull) {
                    position = index + 1
                } else if (this.op(coordinate, "<", value) && this.op(coordinate, ">", coordinates[index + 1] || value - width)) {
                    position = direction === "left" ? index + 1 : index
                }
                return position === -1
            }, this))
        }
        if (!this.settings.loop) {
            if (this.op(coordinate, ">", coordinates[this.minimum()])) {
                position = coordinate = this.minimum()
            } else if (this.op(coordinate, "<", coordinates[this.maximum()])) {
                position = coordinate = this.maximum()
            }
        }
        return position
    };
    Owl.prototype.animate = function (coordinate) {
        var animate = this.speed() > 0;
        this.is("animating") && this.onTransitionEnd();
        if (animate) {
            this.enter("animating");
            this.trigger("translate")
        }
        if ($.support.transform3d && $.support.transition) {
            this.$stage.css({
                transform: "translate3d(" + coordinate + "px,0px,0px)",
                transition: this.speed() / 1e3 + "s"
            })
        } else if (animate) {
            this.$stage.animate({left: coordinate + "px"}, this.speed(), this.settings.fallbackEasing, $.proxy(this.onTransitionEnd, this))
        } else {
            this.$stage.css({left: coordinate + "px"})
        }
    };
    Owl.prototype.is = function (state) {
        return this._states.current[state] && this._states.current[state] > 0
    };
    Owl.prototype.current = function (position) {
        if (position === undefined) {
            return this._current
        }
        if (this._items.length === 0) {
            return undefined
        }
        position = this.normalize(position);
        if (this._current !== position) {
            var event = this.trigger("change", {property: {name: "position", value: position}});
            if (event.data !== undefined) {
                position = this.normalize(event.data)
            }
            this._current = position;
            this.invalidate("position");
            this.trigger("changed", {property: {name: "position", value: this._current}})
        }
        return this._current
    };
    Owl.prototype.invalidate = function (part) {
        if ($.type(part) === "string") {
            this._invalidated[part] = true;
            this.is("valid") && this.leave("valid")
        }
        return $.map(this._invalidated, function (v, i) {
            return i
        })
    };
    Owl.prototype.reset = function (position) {
        position = this.normalize(position);
        if (position === undefined) {
            return
        }
        this._speed = 0;
        this._current = position;
        this.suppress(["translate", "translated"]);
        this.animate(this.coordinates(position));
        this.release(["translate", "translated"])
    };
    Owl.prototype.normalize = function (position, relative) {
        var n = this._items.length, m = relative ? 0 : this._clones.length;
        if (!this.isNumeric(position) || n < 1) {
            position = undefined
        } else if (position < 0 || position >= n + m) {
            position = ((position - m / 2) % n + n) % n + m / 2
        }
        return position
    };
    Owl.prototype.relative = function (position) {
        position -= this._clones.length / 2;
        return this.normalize(position, true)
    };
    Owl.prototype.maximum = function (relative) {
        var settings = this.settings, maximum = this._coordinates.length, iterator, reciprocalItemsWidth, elementWidth;
        if (settings.loop) {
            maximum = this._clones.length / 2 + this._items.length - 1
        } else if (settings.autoWidth || settings.merge) {
            iterator = this._items.length;
            reciprocalItemsWidth = this._items[--iterator].width();
            elementWidth = this.$element.width();
            while (iterator--) {
                reciprocalItemsWidth += this._items[iterator].width() + this.settings.margin;
                if (reciprocalItemsWidth > elementWidth) {
                    break
                }
            }
            maximum = iterator + 1
        } else if (settings.center) {
            maximum = this._items.length - 1
        } else {
            maximum = this._items.length - settings.items
        }
        if (relative) {
            maximum -= this._clones.length / 2
        }
        return Math.max(maximum, 0)
    };
    Owl.prototype.minimum = function (relative) {
        return relative ? 0 : this._clones.length / 2
    };
    Owl.prototype.items = function (position) {
        if (position === undefined) {
            return this._items.slice()
        }
        position = this.normalize(position, true);
        return this._items[position]
    };
    Owl.prototype.mergers = function (position) {
        if (position === undefined) {
            return this._mergers.slice()
        }
        position = this.normalize(position, true);
        return this._mergers[position]
    };
    Owl.prototype.clones = function (position) {
        var odd = this._clones.length / 2, even = odd + this._items.length, map = function (index) {
            return index % 2 === 0 ? even + index / 2 : odd - (index + 1) / 2
        };
        if (position === undefined) {
            return $.map(this._clones, function (v, i) {
                return map(i)
            })
        }
        return $.map(this._clones, function (v, i) {
            return v === position ? map(i) : null
        })
    };
    Owl.prototype.speed = function (speed) {
        if (speed !== undefined) {
            this._speed = speed
        }
        return this._speed
    };
    Owl.prototype.coordinates = function (position) {
        var multiplier = 1, newPosition = position - 1, coordinate;
        if (position === undefined) {
            return $.map(this._coordinates, $.proxy(function (coordinate, index) {
                return this.coordinates(index)
            }, this))
        }
        if (this.settings.center) {
            if (this.settings.rtl) {
                multiplier = -1;
                newPosition = position + 1
            }
            coordinate = this._coordinates[position];
            coordinate += (this.width() - coordinate + (this._coordinates[newPosition] || 0)) / 2 * multiplier
        } else {
            coordinate = this._coordinates[newPosition] || 0
        }
        coordinate = Math.ceil(coordinate);
        return coordinate
    };
    Owl.prototype.duration = function (from, to, factor) {
        if (factor === 0) {
            return 0
        }
        return Math.min(Math.max(Math.abs(to - from), 1), 6) * Math.abs(factor || this.settings.smartSpeed)
    };
    Owl.prototype.to = function (position, speed) {
        var current = this.current(), revert = null, distance = position - this.relative(current),
            direction = (distance > 0) - (distance < 0), items = this._items.length, minimum = this.minimum(),
            maximum = this.maximum();
        if (this.settings.loop) {
            if (!this.settings.rewind && Math.abs(distance) > items / 2) {
                distance += direction * -1 * items
            }
            position = current + distance;
            revert = ((position - minimum) % items + items) % items + minimum;
            if (revert !== position && revert - distance <= maximum && revert - distance > 0) {
                current = revert - distance;
                position = revert;
                this.reset(current)
            }
        } else if (this.settings.rewind) {
            maximum += 1;
            position = (position % maximum + maximum) % maximum
        } else {
            position = Math.max(minimum, Math.min(maximum, position))
        }
        this.speed(this.duration(current, position, speed));
        this.current(position);
        if (this.$element.is(":visible")) {
            this.update()
        }
    };
    Owl.prototype.next = function (speed) {
        speed = speed || false;
        this.to(this.relative(this.current()) + 1, speed)
    };
    Owl.prototype.prev = function (speed) {
        speed = speed || false;
        this.to(this.relative(this.current()) - 1, speed)
    };
    Owl.prototype.onTransitionEnd = function (event) {
        if (event !== undefined) {
            event.stopPropagation();
            if ((event.target || event.srcElement || event.originalTarget) !== this.$stage.get(0)) {
                return false
            }
        }
        this.leave("animating");
        this.trigger("translated")
    };
    Owl.prototype.viewport = function () {
        var width;
        if (this.options.responsiveBaseElement !== window) {
            width = $(this.options.responsiveBaseElement).width()
        } else if (window.innerWidth) {
            width = window.innerWidth
        } else if (document.documentElement && document.documentElement.clientWidth) {
            width = document.documentElement.clientWidth
        } else {
            console.warn("Can not detect viewport width.")
        }
        return width
    };
    Owl.prototype.replace = function (content) {
        this.$stage.empty();
        this._items = [];
        if (content) {
            content = content instanceof jQuery ? content : $(content)
        }
        if (this.settings.nestedItemSelector) {
            content = content.find("." + this.settings.nestedItemSelector)
        }
        content.filter(function () {
            return this.nodeType === 1
        }).each($.proxy(function (index, item) {
            item = this.prepare(item);
            this.$stage.append(item);
            this._items.push(item);
            this._mergers.push(item.find("[data-merge]").addBack("[data-merge]").attr("data-merge") * 1 || 1)
        }, this));
        this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0);
        this.invalidate("items")
    };
    Owl.prototype.add = function (content, position) {
        var current = this.relative(this._current);
        position = position === undefined ? this._items.length : this.normalize(position, true);
        content = content instanceof jQuery ? content : $(content);
        this.trigger("add", {content: content, position: position});
        content = this.prepare(content);
        if (this._items.length === 0 || position === this._items.length) {
            this._items.length === 0 && this.$stage.append(content);
            this._items.length !== 0 && this._items[position - 1].after(content);
            this._items.push(content);
            this._mergers.push(content.find("[data-merge]").addBack("[data-merge]").attr("data-merge") * 1 || 1)
        } else {
            this._items[position].before(content);
            this._items.splice(position, 0, content);
            this._mergers.splice(position, 0, content.find("[data-merge]").addBack("[data-merge]").attr("data-merge") * 1 || 1)
        }
        this._items[current] && this.reset(this._items[current].index());
        this.invalidate("items");
        this.trigger("added", {content: content, position: position})
    };
    Owl.prototype.remove = function (position) {
        position = this.normalize(position, true);
        if (position === undefined) {
            return
        }
        this.trigger("remove", {content: this._items[position], position: position});
        this._items[position].remove();
        this._items.splice(position, 1);
        this._mergers.splice(position, 1);
        this.invalidate("items");
        this.trigger("removed", {content: null, position: position})
    };
    Owl.prototype.preloadAutoWidthImages = function (images) {
        images.each($.proxy(function (i, element) {
            this.enter("pre-loading");
            element = $(element);
            $(new Image).one("load", $.proxy(function (e) {
                element.attr("src", e.target.src);
                element.css("opacity", 1);
                this.leave("pre-loading");
                !this.is("pre-loading") && !this.is("initializing") && this.refresh()
            }, this)).attr("src", element.attr("src") || element.attr("data-src") || element.attr("data-src-retina"))
        }, this))
    };
    Owl.prototype.destroy = function () {
        this.$element.off(".owl.core");
        this.$stage.off(".owl.core");
        $(document).off(".owl.core");
        if (this.settings.responsive !== false) {
            window.clearTimeout(this.resizeTimer);
            this.off(window, "resize", this._handlers.onThrottledResize)
        }
        for (var i in this._plugins) {
            this._plugins[i].destroy()
        }
        this.$stage.children(".cloned").remove();
        this.$stage.unwrap();
        this.$stage.children().contents().unwrap();
        this.$stage.children().unwrap();
        this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel")
    };
    Owl.prototype.op = function (a, o, b) {
        var rtl = this.settings.rtl;
        switch (o) {
            case"<":
                return rtl ? a > b : a < b;
            case">":
                return rtl ? a < b : a > b;
            case">=":
                return rtl ? a <= b : a >= b;
            case"<=":
                return rtl ? a >= b : a <= b;
            default:
                break
        }
    };
    Owl.prototype.on = function (element, event, listener, capture) {
        if (element.addEventListener) {
            element.addEventListener(event, listener, capture)
        } else if (element.attachEvent) {
            element.attachEvent("on" + event, listener)
        }
    };
    Owl.prototype.off = function (element, event, listener, capture) {
        if (element.removeEventListener) {
            element.removeEventListener(event, listener, capture)
        } else if (element.detachEvent) {
            element.detachEvent("on" + event, listener)
        }
    };
    Owl.prototype.trigger = function (name, data, namespace, state, enter) {
        var status = {item: {count: this._items.length, index: this.current()}},
            handler = $.camelCase($.grep(["on", name, namespace], function (v) {
                return v
            }).join("-").toLowerCase()),
            event = $.Event([name, "owl", namespace || "carousel"].join(".").toLowerCase(), $.extend({relatedTarget: this}, status, data));
        if (!this._supress[name]) {
            $.each(this._plugins, function (name, plugin) {
                if (plugin.onTrigger) {
                    plugin.onTrigger(event)
                }
            });
            this.register({type: Owl.Type.Event, name: name});
            this.$element.trigger(event);
            if (this.settings && typeof this.settings[handler] === "function") {
                this.settings[handler].call(this, event)
            }
        }
        return event
    };
    Owl.prototype.enter = function (name) {
        $.each([name].concat(this._states.tags[name] || []), $.proxy(function (i, name) {
            if (this._states.current[name] === undefined) {
                this._states.current[name] = 0
            }
            this._states.current[name]++
        }, this))
    };
    Owl.prototype.leave = function (name) {
        $.each([name].concat(this._states.tags[name] || []), $.proxy(function (i, name) {
            this._states.current[name]--
        }, this))
    };
    Owl.prototype.register = function (object) {
        if (object.type === Owl.Type.Event) {
            if (!$.event.special[object.name]) {
                $.event.special[object.name] = {}
            }
            if (!$.event.special[object.name].owl) {
                var _default = $.event.special[object.name]._default;
                $.event.special[object.name]._default = function (e) {
                    if (_default && _default.apply && (!e.namespace || e.namespace.indexOf("owl") === -1)) {
                        return _default.apply(this, arguments)
                    }
                    return e.namespace && e.namespace.indexOf("owl") > -1
                };
                $.event.special[object.name].owl = true
            }
        } else if (object.type === Owl.Type.State) {
            if (!this._states.tags[object.name]) {
                this._states.tags[object.name] = object.tags
            } else {
                this._states.tags[object.name] = this._states.tags[object.name].concat(object.tags)
            }
            this._states.tags[object.name] = $.grep(this._states.tags[object.name], $.proxy(function (tag, i) {
                return $.inArray(tag, this._states.tags[object.name]) === i
            }, this))
        }
    };
    Owl.prototype.suppress = function (events) {
        $.each(events, $.proxy(function (index, event) {
            this._supress[event] = true
        }, this))
    };
    Owl.prototype.release = function (events) {
        $.each(events, $.proxy(function (index, event) {
            delete this._supress[event]
        }, this))
    };
    Owl.prototype.pointer = function (event) {
        var result = {x: null, y: null};
        event = event.originalEvent || event || window.event;
        event = event.touches && event.touches.length ? event.touches[0] : event.changedTouches && event.changedTouches.length ? event.changedTouches[0] : event;
        if (event.pageX) {
            result.x = event.pageX;
            result.y = event.pageY
        } else {
            result.x = event.clientX;
            result.y = event.clientY
        }
        return result
    };
    Owl.prototype.isNumeric = function (number) {
        return !isNaN(parseFloat(number))
    };
    Owl.prototype.difference = function (first, second) {
        return {x: first.x - second.x, y: first.y - second.y}
    };
    $.fn.owlCarousel = function (option) {
        var args = Array.prototype.slice.call(arguments, 1);
        return this.each(function () {
            var $this = $(this), data = $this.data("owl.carousel");
            if (!data) {
                data = new Owl(this, typeof option == "object" && option);
                $this.data("owl.carousel", data);
                $.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function (i, event) {
                    data.register({type: Owl.Type.Event, name: event});
                    data.$element.on(event + ".owl.carousel.core", $.proxy(function (e) {
                        if (e.namespace && e.relatedTarget !== this) {
                            this.suppress([event]);
                            data[event].apply(this, [].slice.call(arguments, 1));
                            this.release([event])
                        }
                    }, data))
                })
            }
            if (typeof option == "string" && option.charAt(0) !== "_") {
                data[option].apply(data, args)
            }
        })
    };
    $.fn.owlCarousel.Constructor = Owl
})(window.Zepto || window.jQuery, window, document);
(function ($, window, document, undefined) {
    var AutoRefresh = function (carousel) {
        this._core = carousel;
        this._interval = null;
        this._visible = null;
        this._handlers = {
            "initialized.owl.carousel": $.proxy(function (e) {
                if (e.namespace && this._core.settings.autoRefresh) {
                    this.watch()
                }
            }, this)
        };
        this._core.options = $.extend({}, AutoRefresh.Defaults, this._core.options);
        this._core.$element.on(this._handlers)
    };
    AutoRefresh.Defaults = {autoRefresh: true, autoRefreshInterval: 500};
    AutoRefresh.prototype.watch = function () {
        if (this._interval) {
            return
        }
        this._visible = this._core.$element.is(":visible");
        this._interval = window.setInterval($.proxy(this.refresh, this), this._core.settings.autoRefreshInterval)
    };
    AutoRefresh.prototype.refresh = function () {
        if (this._core.$element.is(":visible") === this._visible) {
            return
        }
        this._visible = !this._visible;
        this._core.$element.toggleClass("owl-hidden", !this._visible);
        this._visible && (this._core.invalidate("width") && this._core.refresh())
    };
    AutoRefresh.prototype.destroy = function () {
        var handler, property;
        window.clearInterval(this._interval);
        for (handler in this._handlers) {
            this._core.$element.off(handler, this._handlers[handler])
        }
        for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] != "function" && (this[property] = null)
        }
    };
    $.fn.owlCarousel.Constructor.Plugins.AutoRefresh = AutoRefresh
})(window.Zepto || window.jQuery, window, document);
(function ($, window, document, undefined) {
    var Lazy = function (carousel) {
        this._core = carousel;
        this._loaded = [];
        this._handlers = {
            "initialized.owl.carousel change.owl.carousel resized.owl.carousel": $.proxy(function (e) {
                if (!e.namespace) {
                    return
                }
                if (!this._core.settings || !this._core.settings.lazyLoad) {
                    return
                }
                if (e.property && e.property.name == "position" || e.type == "initialized") {
                    var settings = this._core.settings,
                        n = settings.center && Math.ceil(settings.items / 2) || settings.items,
                        i = settings.center && n * -1 || 0,
                        position = (e.property && e.property.value !== undefined ? e.property.value : this._core.current()) + i,
                        clones = this._core.clones().length, load = $.proxy(function (i, v) {
                            this.load(v)
                        }, this);
                    while (i++ < n) {
                        this.load(clones / 2 + this._core.relative(position));
                        clones && $.each(this._core.clones(this._core.relative(position)), load);
                        position++
                    }
                }
            }, this)
        };
        this._core.options = $.extend({}, Lazy.Defaults, this._core.options);
        this._core.$element.on(this._handlers)
    };
    Lazy.Defaults = {lazyLoad: false};
    Lazy.prototype.load = function (position) {
        var $item = this._core.$stage.children().eq(position), $elements = $item && $item.find(".owl-lazy");
        if (!$elements || $.inArray($item.get(0), this._loaded) > -1) {
            return
        }
        $elements.each($.proxy(function (index, element) {
            var $element = $(element), image,
                url = window.devicePixelRatio > 1 && $element.attr("data-src-retina") || $element.attr("data-src");
            this._core.trigger("load", {element: $element, url: url}, "lazy");
            if ($element.is("img")) {
                $element.one("load.owl.lazy", $.proxy(function () {
                    $element.css("opacity", 1);
                    this._core.trigger("loaded", {element: $element, url: url}, "lazy")
                }, this)).attr("src", url)
            } else {
                image = new Image;
                image.onload = $.proxy(function () {
                    $element.css({"background-image": 'url("' + url + '")', opacity: "1"});
                    this._core.trigger("loaded", {element: $element, url: url}, "lazy")
                }, this);
                image.src = url
            }
        }, this));
        this._loaded.push($item.get(0))
    };
    Lazy.prototype.destroy = function () {
        var handler, property;
        for (handler in this.handlers) {
            this._core.$element.off(handler, this.handlers[handler])
        }
        for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] != "function" && (this[property] = null)
        }
    };
    $.fn.owlCarousel.Constructor.Plugins.Lazy = Lazy
})(window.Zepto || window.jQuery, window, document);
(function ($, window, document, undefined) {
    var AutoHeight = function (carousel) {
        this._core = carousel;
        this._handlers = {
            "initialized.owl.carousel refreshed.owl.carousel": $.proxy(function (e) {
                if (e.namespace && this._core.settings.autoHeight) {
                    this.update()
                }
            }, this), "changed.owl.carousel": $.proxy(function (e) {
                if (e.namespace && this._core.settings.autoHeight && e.property.name == "position") {
                    this.update()
                }
            }, this), "loaded.owl.lazy": $.proxy(function (e) {
                if (e.namespace && this._core.settings.autoHeight && e.element.closest("." + this._core.settings.itemClass).index() === this._core.current()) {
                    this.update()
                }
            }, this)
        };
        this._core.options = $.extend({}, AutoHeight.Defaults, this._core.options);
        this._core.$element.on(this._handlers)
    };
    AutoHeight.Defaults = {autoHeight: false, autoHeightClass: "owl-height"};
    AutoHeight.prototype.update = function () {
        var start = this._core._current, end = start + this._core.settings.items,
            visible = this._core.$stage.children().toArray().slice(start, end), heights = [], maxheight = 0;
        $.each(visible, function (index, item) {
            heights.push($(item).height())
        });
        maxheight = Math.max.apply(null, heights);
        this._core.$stage.parent().height(maxheight).addClass(this._core.settings.autoHeightClass)
    };
    AutoHeight.prototype.destroy = function () {
        var handler, property;
        for (handler in this._handlers) {
            this._core.$element.off(handler, this._handlers[handler])
        }
        for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] != "function" && (this[property] = null)
        }
    };
    $.fn.owlCarousel.Constructor.Plugins.AutoHeight = AutoHeight
})(window.Zepto || window.jQuery, window, document);
(function ($, window, document, undefined) {
    var Video = function (carousel) {
        this._core = carousel;
        this._videos = {};
        this._playing = null;
        this._handlers = {
            "initialized.owl.carousel": $.proxy(function (e) {
                if (e.namespace) {
                    this._core.register({type: "state", name: "playing", tags: ["interacting"]})
                }
            }, this), "resize.owl.carousel": $.proxy(function (e) {
                if (e.namespace && this._core.settings.video && this.isInFullScreen()) {
                    e.preventDefault()
                }
            }, this), "refreshed.owl.carousel": $.proxy(function (e) {
                if (e.namespace && this._core.is("resizing")) {
                    this._core.$stage.find(".cloned .owl-video-frame").remove()
                }
            }, this), "changed.owl.carousel": $.proxy(function (e) {
                if (e.namespace && e.property.name === "position" && this._playing) {
                    this.stop()
                }
            }, this), "prepared.owl.carousel": $.proxy(function (e) {
                if (!e.namespace) {
                    return
                }
                var $element = $(e.content).find(".owl-video");
                if ($element.length) {
                    $element.css("display", "none");
                    this.fetch($element, $(e.content))
                }
            }, this)
        };
        this._core.options = $.extend({}, Video.Defaults, this._core.options);
        this._core.$element.on(this._handlers);
        this._core.$element.on("click.owl.video", ".owl-video-play-icon", $.proxy(function (e) {
            this.play(e)
        }, this))
    };
    Video.Defaults = {video: false, videoHeight: false, videoWidth: false};
    Video.prototype.fetch = function (target, item) {
        var type = function () {
                if (target.attr("data-vimeo-id")) {
                    return "vimeo"
                } else if (target.attr("data-vzaar-id")) {
                    return "vzaar"
                } else {
                    return "youtube"
                }
            }(), id = target.attr("data-vimeo-id") || target.attr("data-youtube-id") || target.attr("data-vzaar-id"),
            width = target.attr("data-width") || this._core.settings.videoWidth,
            height = target.attr("data-height") || this._core.settings.videoHeight, url = target.attr("href");
        if (url) {
            id = url.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/);
            if (id[3].indexOf("youtu") > -1) {
                type = "youtube"
            } else if (id[3].indexOf("vimeo") > -1) {
                type = "vimeo"
            } else if (id[3].indexOf("vzaar") > -1) {
                type = "vzaar"
            } else {
                throw new Error("Video URL not supported.")
            }
            id = id[6]
        } else {
            throw new Error("Missing video URL.")
        }
        this._videos[url] = {type: type, id: id, width: width, height: height};
        item.attr("data-video", url);
        this.thumbnail(target, this._videos[url])
    };
    Video.prototype.thumbnail = function (target, video) {
        var tnLink, icon, path,
            dimensions = video.width && video.height ? 'style="width:' + video.width + "px;height:" + video.height + 'px;"' : "",
            customTn = target.find("img"), srcType = "src", lazyClass = "", settings = this._core.settings,
            create = function (path) {
                icon = '<div class="owl-video-play-icon"></div>';
                if (settings.lazyLoad) {
                    tnLink = '<div class="owl-video-tn ' + lazyClass + '" ' + srcType + '="' + path + '"></div>'
                } else {
                    tnLink = '<div class="owl-video-tn" style="opacity:1;background-image:url(' + path + ')"></div>'
                }
                target.after(tnLink);
                target.after(icon)
            };
        target.wrap('<div class="owl-video-wrapper"' + dimensions + "></div>");
        if (this._core.settings.lazyLoad) {
            srcType = "data-src";
            lazyClass = "owl-lazy"
        }
        if (customTn.length) {
            create(customTn.attr(srcType));
            customTn.remove();
            return false
        }
        if (video.type === "youtube") {
            path = "//img.youtube.com/vi/" + video.id + "/hqdefault.jpg";
            create(path)
        } else if (video.type === "vimeo") {
            $.ajax({
                type: "GET",
                url: "//vimeo.com/api/v2/video/" + video.id + ".json",
                jsonp: "callback",
                dataType: "jsonp",
                success: function (data) {
                    path = data[0].thumbnail_large;
                    create(path)
                }
            })
        } else if (video.type === "vzaar") {
            $.ajax({
                type: "GET",
                url: "//vzaar.com/api/videos/" + video.id + ".json",
                jsonp: "callback",
                dataType: "jsonp",
                success: function (data) {
                    path = data.framegrab_url;
                    create(path)
                }
            })
        }
    };
    Video.prototype.stop = function () {
        this._core.trigger("stop", null, "video");
        this._playing.find(".owl-video-frame").remove();
        this._playing.removeClass("owl-video-playing");
        this._playing = null;
        this._core.leave("playing");
        this._core.trigger("stopped", null, "video")
    };
    Video.prototype.play = function (event) {
        var target = $(event.target), item = target.closest("." + this._core.settings.itemClass),
            video = this._videos[item.attr("data-video")], width = video.width || "100%",
            height = video.height || this._core.$stage.height(), html;
        if (this._playing) {
            return
        }
        this._core.enter("playing");
        this._core.trigger("play", null, "video");
        item = this._core.items(this._core.relative(item.index()));
        this._core.reset(item.index());
        if (video.type === "youtube") {
            html = '<iframe width="' + width + '" height="' + height + '" src="//www.youtube.com/embed/' + video.id + "?autoplay=1&rel=0&v=" + video.id + '" frameborder="0" allowfullscreen></iframe>'
        } else if (video.type === "vimeo") {
            html = '<iframe src="//player.vimeo.com/video/' + video.id + '?autoplay=1" width="' + width + '" height="' + height + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'
        } else if (video.type === "vzaar") {
            html = '<iframe frameborder="0"' + 'height="' + height + '"' + 'width="' + width + '" allowfullscreen mozallowfullscreen webkitAllowFullScreen ' + 'src="//view.vzaar.com/' + video.id + '/player?autoplay=true"></iframe>'
        }
        $('<div class="owl-video-frame">' + html + "</div>").insertAfter(item.find(".owl-video"));
        this._playing = item.addClass("owl-video-playing")
    };
    Video.prototype.isInFullScreen = function () {
        var element = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement;
        return element && $(element).parent().hasClass("owl-video-frame")
    };
    Video.prototype.destroy = function () {
        var handler, property;
        this._core.$element.off("click.owl.video");
        for (handler in this._handlers) {
            this._core.$element.off(handler, this._handlers[handler])
        }
        for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] != "function" && (this[property] = null)
        }
    };
    $.fn.owlCarousel.Constructor.Plugins.Video = Video
})(window.Zepto || window.jQuery, window, document);
(function ($, window, document, undefined) {
    var Animate = function (scope) {
        this.core = scope;
        this.core.options = $.extend({}, Animate.Defaults, this.core.options);
        this.swapping = true;
        this.previous = undefined;
        this.next = undefined;
        this.handlers = {
            "change.owl.carousel": $.proxy(function (e) {
                if (e.namespace && e.property.name == "position") {
                    this.previous = this.core.current();
                    this.next = e.property.value
                }
            }, this), "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": $.proxy(function (e) {
                if (e.namespace) {
                    this.swapping = e.type == "translated"
                }
            }, this), "translate.owl.carousel": $.proxy(function (e) {
                if (e.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn)) {
                    this.swap()
                }
            }, this)
        };
        this.core.$element.on(this.handlers)
    };
    Animate.Defaults = {animateOut: false, animateIn: false};
    Animate.prototype.swap = function () {
        if (this.core.settings.items !== 1) {
            return
        }
        if (!$.support.animation || !$.support.transition) {
            return
        }
        this.core.speed(0);
        var left, clear = $.proxy(this.clear, this), previous = this.core.$stage.children().eq(this.previous),
            next = this.core.$stage.children().eq(this.next), incoming = this.core.settings.animateIn,
            outgoing = this.core.settings.animateOut;
        if (this.core.current() === this.previous) {
            return
        }
        if (outgoing) {
            left = this.core.coordinates(this.previous) - this.core.coordinates(this.next);
            previous.one($.support.animation.end, clear).css({left: left + "px"}).addClass("animated owl-animated-out").addClass(outgoing)
        }
        if (incoming) {
            next.one($.support.animation.end, clear).addClass("animated owl-animated-in").addClass(incoming)
        }
    };
    Animate.prototype.clear = function (e) {
        $(e.target).css({left: ""}).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut);
        this.core.onTransitionEnd()
    };
    Animate.prototype.destroy = function () {
        var handler, property;
        for (handler in this.handlers) {
            this.core.$element.off(handler, this.handlers[handler])
        }
        for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] != "function" && (this[property] = null)
        }
    };
    $.fn.owlCarousel.Constructor.Plugins.Animate = Animate
})(window.Zepto || window.jQuery, window, document);
(function ($, window, document, undefined) {
    var Autoplay = function (carousel) {
        this._core = carousel;
        this._timeout = null;
        this._paused = false;
        this._handlers = {
            "changed.owl.carousel": $.proxy(function (e) {
                if (e.namespace && e.property.name === "settings") {
                    if (this._core.settings.autoplay) {
                        this.play()
                    } else {
                        this.stop()
                    }
                } else if (e.namespace && e.property.name === "position") {
                    if (this._core.settings.autoplay) {
                        this._setAutoPlayInterval()
                    }
                }
            }, this), "initialized.owl.carousel": $.proxy(function (e) {
                if (e.namespace && this._core.settings.autoplay) {
                    this.play()
                }
            }, this), "play.owl.autoplay": $.proxy(function (e, t, s) {
                if (e.namespace) {
                    this.play(t, s)
                }
            }, this), "stop.owl.autoplay": $.proxy(function (e) {
                if (e.namespace) {
                    this.stop()
                }
            }, this), "mouseover.owl.autoplay": $.proxy(function () {
                if (this._core.settings.autoplayHoverPause && this._core.is("rotating")) {
                    this.pause()
                }
            }, this), "mouseleave.owl.autoplay": $.proxy(function () {
                if (this._core.settings.autoplayHoverPause && this._core.is("rotating")) {
                    this.play()
                }
            }, this), "touchstart.owl.core": $.proxy(function () {
                if (this._core.settings.autoplayHoverPause && this._core.is("rotating")) {
                    this.pause()
                }
            }, this), "touchend.owl.core": $.proxy(function () {
                if (this._core.settings.autoplayHoverPause) {
                    this.play()
                }
            }, this)
        };
        this._core.$element.on(this._handlers);
        this._core.options = $.extend({}, Autoplay.Defaults, this._core.options)
    };
    Autoplay.Defaults = {autoplay: false, autoplayTimeout: 5e3, autoplayHoverPause: false, autoplaySpeed: false};
    Autoplay.prototype.play = function (timeout, speed) {
        this._paused = false;
        if (this._core.is("rotating")) {
            return
        }
        this._core.enter("rotating");
        this._setAutoPlayInterval()
    };
    Autoplay.prototype._getNextTimeout = function (timeout, speed) {
        if (this._timeout) {
            window.clearTimeout(this._timeout)
        }
        return window.setTimeout($.proxy(function () {
            if (this._paused || this._core.is("busy") || this._core.is("interacting") || document.hidden) {
                return
            }
            this._core.next(speed || this._core.settings.autoplaySpeed)
        }, this), timeout || this._core.settings.autoplayTimeout)
    };
    Autoplay.prototype._setAutoPlayInterval = function () {
        this._timeout = this._getNextTimeout()
    };
    Autoplay.prototype.stop = function () {
        if (!this._core.is("rotating")) {
            return
        }
        window.clearTimeout(this._timeout);
        this._core.leave("rotating")
    };
    Autoplay.prototype.pause = function () {
        if (!this._core.is("rotating")) {
            return
        }
        this._paused = true
    };
    Autoplay.prototype.destroy = function () {
        var handler, property;
        this.stop();
        for (handler in this._handlers) {
            this._core.$element.off(handler, this._handlers[handler])
        }
        for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] != "function" && (this[property] = null)
        }
    };
    $.fn.owlCarousel.Constructor.Plugins.autoplay = Autoplay
})(window.Zepto || window.jQuery, window, document);
(function ($, window, document, undefined) {
    var Navigation = function (carousel) {
        this._core = carousel;
        this._initialized = false;
        this._pages = [];
        this._controls = {};
        this._templates = [];
        this.$element = this._core.$element;
        this._overrides = {next: this._core.next, prev: this._core.prev, to: this._core.to};
        this._handlers = {
            "prepared.owl.carousel": $.proxy(function (e) {
                if (e.namespace && this._core.settings.dotsData) {
                    this._templates.push('<div class="' + this._core.settings.dotClass + '">' + $(e.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>")
                }
            }, this), "added.owl.carousel": $.proxy(function (e) {
                if (e.namespace && this._core.settings.dotsData) {
                    this._templates.splice(e.position, 0, this._templates.pop())
                }
            }, this), "remove.owl.carousel": $.proxy(function (e) {
                if (e.namespace && this._core.settings.dotsData) {
                    this._templates.splice(e.position, 1)
                }
            }, this), "changed.owl.carousel": $.proxy(function (e) {
                if (e.namespace && e.property.name == "position") {
                    this.draw()
                }
            }, this), "initialized.owl.carousel": $.proxy(function (e) {
                if (e.namespace && !this._initialized) {
                    this._core.trigger("initialize", null, "navigation");
                    this.initialize();
                    this.update();
                    this.draw();
                    this._initialized = true;
                    this._core.trigger("initialized", null, "navigation")
                }
            }, this), "refreshed.owl.carousel": $.proxy(function (e) {
                if (e.namespace && this._initialized) {
                    this._core.trigger("refresh", null, "navigation");
                    this.update();
                    this.draw();
                    this._core.trigger("refreshed", null, "navigation")
                }
            }, this)
        };
        this._core.options = $.extend({}, Navigation.Defaults, this._core.options);
        this.$element.on(this._handlers)
    };
    Navigation.Defaults = {
        nav: false,
        navText: ["prev", "next"],
        navSpeed: false,
        navElement: "div",
        navContainer: false,
        navContainerClass: "owl-nav",
        navClass: ["owl-prev", "owl-next"],
        slideBy: 1,
        dotClass: "owl-dot",
        dotsClass: "owl-dots",
        dots: true,
        dotsEach: false,
        dotsData: false,
        dotsSpeed: false,
        dotsContainer: false
    };
    Navigation.prototype.initialize = function () {
        var override, settings = this._core.settings;
        this._controls.$relative = (settings.navContainer ? $(settings.navContainer) : $("<div>").addClass(settings.navContainerClass).appendTo(this.$element)).addClass("disabled");
        this._controls.$previous = $("<" + settings.navElement + ">").addClass(settings.navClass[0]).html(settings.navText[0]).prependTo(this._controls.$relative).on("click", $.proxy(function (e) {
            this.prev(settings.navSpeed)
        }, this));
        this._controls.$next = $("<" + settings.navElement + ">").addClass(settings.navClass[1]).html(settings.navText[1]).appendTo(this._controls.$relative).on("click", $.proxy(function (e) {
            this.next(settings.navSpeed)
        }, this));
        if (!settings.dotsData) {
            this._templates = [$("<div>").addClass(settings.dotClass).append($("<span>")).prop("outerHTML")]
        }
        this._controls.$absolute = (settings.dotsContainer ? $(settings.dotsContainer) : $("<div>").addClass(settings.dotsClass).appendTo(this.$element)).addClass("disabled");
        this._controls.$absolute.on("click", "div", $.proxy(function (e) {
            var index = $(e.target).parent().is(this._controls.$absolute) ? $(e.target).index() : $(e.target).parent().index();
            e.preventDefault();
            this.to(index, settings.dotsSpeed)
        }, this));
        for (override in this._overrides) {
            this._core[override] = $.proxy(this[override], this)
        }
    };
    Navigation.prototype.destroy = function () {
        var handler, control, property, override;
        for (handler in this._handlers) {
            this.$element.off(handler, this._handlers[handler])
        }
        for (control in this._controls) {
            this._controls[control].remove()
        }
        for (override in this.overides) {
            this._core[override] = this._overrides[override]
        }
        for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] != "function" && (this[property] = null)
        }
    };
    Navigation.prototype.update = function () {
        var i, j, k, lower = this._core.clones().length / 2, upper = lower + this._core.items().length,
            maximum = this._core.maximum(true), settings = this._core.settings,
            size = settings.center || settings.autoWidth || settings.dotsData ? 1 : settings.dotsEach || settings.items;
        if (settings.slideBy !== "page") {
            settings.slideBy = Math.min(settings.slideBy, settings.items)
        }
        if (settings.dots || settings.slideBy == "page") {
            this._pages = [];
            for (i = lower, j = 0, k = 0; i < upper; i++) {
                if (j >= size || j === 0) {
                    this._pages.push({start: Math.min(maximum, i - lower), end: i - lower + size - 1});
                    if (Math.min(maximum, i - lower) === maximum) {
                        break
                    }
                    j = 0, ++k
                }
                j += this._core.mergers(this._core.relative(i))
            }
        }
    };
    Navigation.prototype.draw = function () {
        var difference, settings = this._core.settings, disabled = this._core.items().length <= settings.items,
            index = this._core.relative(this._core.current()), loop = settings.loop || settings.rewind;
        this._controls.$relative.toggleClass("disabled", !settings.nav || disabled);
        if (settings.nav) {
            this._controls.$previous.toggleClass("disabled", !loop && index <= this._core.minimum(true));
            this._controls.$next.toggleClass("disabled", !loop && index >= this._core.maximum(true))
        }
        this._controls.$absolute.toggleClass("disabled", !settings.dots || disabled);
        if (settings.dots) {
            difference = this._pages.length - this._controls.$absolute.children().length;
            if (settings.dotsData && difference !== 0) {
                this._controls.$absolute.html(this._templates.join(""))
            } else if (difference > 0) {
                this._controls.$absolute.append(new Array(difference + 1).join(this._templates[0]))
            } else if (difference < 0) {
                this._controls.$absolute.children().slice(difference).remove()
            }
            this._controls.$absolute.find(".active").removeClass("active");
            this._controls.$absolute.children().eq($.inArray(this.current(), this._pages)).addClass("active")
        }
    };
    Navigation.prototype.onTrigger = function (event) {
        var settings = this._core.settings;
        event.page = {
            index: $.inArray(this.current(), this._pages),
            count: this._pages.length,
            size: settings && (settings.center || settings.autoWidth || settings.dotsData ? 1 : settings.dotsEach || settings.items)
        }
    };
    Navigation.prototype.current = function () {
        var current = this._core.relative(this._core.current());
        return $.grep(this._pages, $.proxy(function (page, index) {
            return page.start <= current && page.end >= current
        }, this)).pop()
    };
    Navigation.prototype.getPosition = function (successor) {
        var position, length, settings = this._core.settings;
        if (settings.slideBy == "page") {
            position = $.inArray(this.current(), this._pages);
            length = this._pages.length;
            successor ? ++position : --position;
            position = this._pages[(position % length + length) % length].start
        } else {
            position = this._core.relative(this._core.current());
            length = this._core.items().length;
            successor ? position += settings.slideBy : position -= settings.slideBy
        }
        return position
    };
    Navigation.prototype.next = function (speed) {
        $.proxy(this._overrides.to, this._core)(this.getPosition(true), speed)
    };
    Navigation.prototype.prev = function (speed) {
        $.proxy(this._overrides.to, this._core)(this.getPosition(false), speed)
    };
    Navigation.prototype.to = function (position, speed, standard) {
        var length;
        if (!standard && this._pages.length) {
            length = this._pages.length;
            $.proxy(this._overrides.to, this._core)(this._pages[(position % length + length) % length].start, speed)
        } else {
            $.proxy(this._overrides.to, this._core)(position, speed)
        }
    };
    $.fn.owlCarousel.Constructor.Plugins.Navigation = Navigation
})(window.Zepto || window.jQuery, window, document);
(function ($, window, document, undefined) {
    var Hash = function (carousel) {
        this._core = carousel;
        this._hashes = {};
        this.$element = this._core.$element;
        this._handlers = {
            "initialized.owl.carousel": $.proxy(function (e) {
                if (e.namespace && this._core.settings.startPosition === "URLHash") {
                    $(window).trigger("hashchange.owl.navigation")
                }
            }, this), "prepared.owl.carousel": $.proxy(function (e) {
                if (e.namespace) {
                    var hash = $(e.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
                    if (!hash) {
                        return
                    }
                    this._hashes[hash] = e.content
                }
            }, this), "changed.owl.carousel": $.proxy(function (e) {
                if (e.namespace && e.property.name === "position") {
                    var current = this._core.items(this._core.relative(this._core.current())),
                        hash = $.map(this._hashes, function (item, hash) {
                            return item === current ? hash : null
                        }).join();
                    if (!hash || window.location.hash.slice(1) === hash) {
                        return
                    }
                    window.location.hash = hash
                }
            }, this)
        };
        this._core.options = $.extend({}, Hash.Defaults, this._core.options);
        this.$element.on(this._handlers);
        $(window).on("hashchange.owl.navigation", $.proxy(function (e) {
            var hash = window.location.hash.substring(1), items = this._core.$stage.children(),
                position = this._hashes[hash] && items.index(this._hashes[hash]);
            if (position === undefined || position === this._core.current()) {
                return
            }
            this._core.to(this._core.relative(position), false, true)
        }, this))
    };
    Hash.Defaults = {URLhashListener: false};
    Hash.prototype.destroy = function () {
        var handler, property;
        $(window).off("hashchange.owl.navigation");
        for (handler in this._handlers) {
            this._core.$element.off(handler, this._handlers[handler])
        }
        for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] != "function" && (this[property] = null)
        }
    };
    $.fn.owlCarousel.Constructor.Plugins.Hash = Hash
})(window.Zepto || window.jQuery, window, document);
(function ($, window, document, undefined) {
    var style = $("<support>").get(0).style, prefixes = "Webkit Moz O ms".split(" "), events = {
        transition: {
            end: {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd",
                transition: "transitionend"
            }
        },
        animation: {
            end: {
                WebkitAnimation: "webkitAnimationEnd",
                MozAnimation: "animationend",
                OAnimation: "oAnimationEnd",
                animation: "animationend"
            }
        }
    }, tests = {
        csstransforms: function () {
            return !!test("transform")
        }, csstransforms3d: function () {
            return !!test("perspective")
        }, csstransitions: function () {
            return !!test("transition")
        }, cssanimations: function () {
            return !!test("animation")
        }
    };

    function test(property, prefixed) {
        var result = false, upper = property.charAt(0).toUpperCase() + property.slice(1);
        $.each((property + " " + prefixes.join(upper + " ") + upper).split(" "), function (i, property) {
            if (style[property] !== undefined) {
                result = prefixed ? property : true;
                return false
            }
        });
        return result
    }

    function prefixed(property) {
        return test(property, true)
    }

    if (tests.csstransitions()) {
        $.support.transition = new String(prefixed("transition"));
        $.support.transition.end = events.transition.end[$.support.transition]
    }
    if (tests.cssanimations()) {
        $.support.animation = new String(prefixed("animation"));
        $.support.animation.end = events.animation.end[$.support.animation]
    }
    if (tests.csstransforms()) {
        $.support.transform = new String(prefixed("transform"));
        $.support.transform3d = tests.csstransforms3d()
    }
})(window.Zepto || window.jQuery, window, document);
!function () {
    var e = 0, r = {};

    function i(t) {
        if (!t) throw new Error("No options passed to Waypoint constructor");
        if (!t.element) throw new Error("No element option passed to Waypoint constructor");
        if (!t.handler) throw new Error("No handler option passed to Waypoint constructor");
        this.key = "waypoint-" + e, this.options = i.Adapter.extend({}, i.defaults, t), this.element = this.options.element, this.adapter = new i.Adapter(this.element), this.callback = t.handler, this.axis = this.options.horizontal ? "horizontal" : "vertical", this.enabled = this.options.enabled, this.triggerPoint = null, this.group = i.Group.findOrCreate({
            name: this.options.group,
            axis: this.axis
        }), this.context = i.Context.findOrCreateByElement(this.options.context), i.offsetAliases[this.options.offset] && (this.options.offset = i.offsetAliases[this.options.offset]), this.group.add(this), this.context.add(this), r[this.key] = this, e += 1
    }

    i.prototype.queueTrigger = function (t) {
        this.group.queueTrigger(this, t)
    }, i.prototype.trigger = function (t) {
        this.enabled && this.callback && this.callback.apply(this, t)
    }, i.prototype.destroy = function () {
        this.context.remove(this), this.group.remove(this), delete r[this.key]
    }, i.prototype.disable = function () {
        return this.enabled = !1, this
    }, i.prototype.enable = function () {
        return this.context.refresh(), this.enabled = !0, this
    }, i.prototype.next = function () {
        return this.group.next(this)
    }, i.prototype.previous = function () {
        return this.group.previous(this)
    }, i.invokeAll = function (t) {
        var e = [];
        for (var i in r) e.push(r[i]);
        for (var o = 0, n = e.length; o < n; o++) e[o][t]()
    }, i.destroyAll = function () {
        i.invokeAll("destroy")
    }, i.disableAll = function () {
        i.invokeAll("disable")
    }, i.enableAll = function () {
        for (var t in i.Context.refreshAll(), r) r[t].enabled = !0;
        return this
    }, i.refreshAll = function () {
        i.Context.refreshAll()
    }, i.viewportHeight = function () {
        return window.innerHeight || document.documentElement.clientHeight
    }, i.viewportWidth = function () {
        return document.documentElement.clientWidth
    }, i.adapters = [], i.defaults = {
        context: window,
        continuous: !0,
        enabled: !0,
        group: "default",
        horizontal: !1,
        offset: 0
    }, i.offsetAliases = {
        "bottom-in-view": function () {
            return this.context.innerHeight() - this.adapter.outerHeight()
        }, "right-in-view": function () {
            return this.context.innerWidth() - this.adapter.outerWidth()
        }
    }, window.VcWaypoint = i
}(), function () {

    function e(t) {
        window.setTimeout(t, 1e3 / 60)
    }

    var i = 0, o = {}, y = window.VcWaypoint, t = window.onload;

    function n(t) {
        this.element = t, this.Adapter = y.Adapter, this.adapter = new this.Adapter(t), this.key = "waypoint-context-" + i, this.didScroll = !1, this.didResize = !1, this.oldScroll = {
            x: this.adapter.scrollLeft(),
            y: this.adapter.scrollTop()
        }, this.waypoints = {
            vertical: {},
            horizontal: {}
        }, t.waypointContextKey = this.key, o[t.waypointContextKey] = this, i += 1, y.windowContext || (y.windowContext = !0, y.windowContext = new n(window)), this.createThrottledScrollHandler(), this.createThrottledResizeHandler()
    }

    n.prototype.add = function (t) {
        var e = t.options.horizontal ? "horizontal" : "vertical";
        this.waypoints[e][t.key] = t, this.refresh()
    }, n.prototype.checkEmpty = function () {
        var t = this.Adapter.isEmptyObject(this.waypoints.horizontal),
            e = this.Adapter.isEmptyObject(this.waypoints.vertical), i = this.element == this.element.window;
        t && e && !i && (this.adapter.off(".vcwaypoints"), delete o[this.key])
    }, n.prototype.createThrottledResizeHandler = function () {
        var t = this;

        function e() {
            t.handleResize(), t.didResize = !1
        }

        this.adapter.on("resize.vcwaypoints", function () {
            t.didResize || (t.didResize = !0, y.requestAnimationFrame(e))
        })
    }, n.prototype.createThrottledScrollHandler = function () {
        var t = this;

        function e() {
            t.handleScroll(), t.didScroll = !1
        }

        this.adapter.on("scroll.vcwaypoints", function () {
            t.didScroll && !y.isTouch || (t.didScroll = !0, y.requestAnimationFrame(e))
        })
    }, n.prototype.handleResize = function () {
        y.Context.refreshAll()
    }, n.prototype.handleScroll = function () {
        var t = {}, e = {
            horizontal: {
                newScroll: this.adapter.scrollLeft(),
                oldScroll: this.oldScroll.x,
                forward: "right",
                backward: "left"
            },
            vertical: {
                newScroll: this.adapter.scrollTop(),
                oldScroll: this.oldScroll.y,
                forward: "down",
                backward: "up"
            }
        };
        for (var i in e) {
            var o = e[i], n = o.newScroll > o.oldScroll ? o.forward : o.backward;
            for (var r in this.waypoints[i]) {
                var s = this.waypoints[i][r];
                if (null !== s.triggerPoint) {
                    var a = o.oldScroll < s.triggerPoint, l = o.newScroll >= s.triggerPoint;
                    (a && l || !a && !l) && (s.queueTrigger(n), t[s.group.id] = s.group)
                }
            }
        }
        for (var h in t) t[h].flushTriggers();
        this.oldScroll = {x: e.horizontal.newScroll, y: e.vertical.newScroll}
    }, n.prototype.innerHeight = function () {
        return this.element == this.element.window ? y.viewportHeight() : this.adapter.innerHeight()
    }, n.prototype.remove = function (t) {
        delete this.waypoints[t.axis][t.key], this.checkEmpty()
    }, n.prototype.innerWidth = function () {
        return this.element == this.element.window ? y.viewportWidth() : this.adapter.innerWidth()
    }, n.prototype.destroy = function () {
        var t = [];
        for (var e in this.waypoints) for (var i in this.waypoints[e]) t.push(this.waypoints[e][i]);
        for (var o = 0, n = t.length; o < n; o++) t[o].destroy()
    }, n.prototype.refresh = function () {
        var t, e = this.element == this.element.window, i = e ? void 0 : this.adapter.offset(), o = {};
        for (var n in this.handleScroll(), t = {
            horizontal: {
                contextOffset: e ? 0 : i.left,
                contextScroll: e ? 0 : this.oldScroll.x,
                contextDimension: this.innerWidth(),
                oldScroll: this.oldScroll.x,
                forward: "right",
                backward: "left",
                offsetProp: "left"
            },
            vertical: {
                contextOffset: e ? 0 : i.top,
                contextScroll: e ? 0 : this.oldScroll.y,
                contextDimension: this.innerHeight(),
                oldScroll: this.oldScroll.y,
                forward: "down",
                backward: "up",
                offsetProp: "top"
            }
        }) {
            var r = t[n];
            for (var s in this.waypoints[n]) {
                var a, l, h, p, c = this.waypoints[n][s], u = c.options.offset, d = c.triggerPoint, f = 0,
                    w = null == d;
                c.element !== c.element.window && (f = c.adapter.offset()[r.offsetProp]), "function" == typeof u ? u = u.apply(c) : "string" == typeof u && (u = parseFloat(u), -1 < c.options.offset.indexOf("%") && (u = Math.ceil(r.contextDimension * u / 100))), a = r.contextScroll - r.contextOffset, c.triggerPoint = Math.floor(f + a - u), l = d < r.oldScroll, h = c.triggerPoint >= r.oldScroll, p = !l && !h, !w && (l && h) ? (c.queueTrigger(r.backward), o[c.group.id] = c.group) : !w && p ? (c.queueTrigger(r.forward), o[c.group.id] = c.group) : w && r.oldScroll >= c.triggerPoint && (c.queueTrigger(r.forward), o[c.group.id] = c.group)
            }
        }
        return y.requestAnimationFrame(function () {
            for (var t in o) o[t].flushTriggers()
        }), this
    }, n.findOrCreateByElement = function (t) {
        return n.findByElement(t) || new n(t)
    }, n.refreshAll = function () {
        for (var t in o) o[t].refresh()
    }, n.findByElement = function (t) {
        return o[t.waypointContextKey]
    }, window.onload = function () {
        t && t(), n.refreshAll()
    }, y.requestAnimationFrame = function (t) {
        (window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || e).call(window, t)
    }, y.Context = n
}(), function () {

    function s(t, e) {
        return t.triggerPoint - e.triggerPoint
    }

    function a(t, e) {
        return e.triggerPoint - t.triggerPoint
    }

    var e = {vertical: {}, horizontal: {}}, i = window.VcWaypoint;

    function o(t) {
        this.name = t.name, this.axis = t.axis, this.id = this.name + "-" + this.axis, this.waypoints = [], this.clearTriggerQueues(), e[this.axis][this.name] = this
    }

    o.prototype.add = function (t) {
        this.waypoints.push(t)
    }, o.prototype.clearTriggerQueues = function () {
        this.triggerQueues = {up: [], down: [], left: [], right: []}
    }, o.prototype.flushTriggers = function () {
        for (var t in this.triggerQueues) {
            var e = this.triggerQueues[t], i = "up" === t || "left" === t;
            e.sort(i ? a : s);
            for (var o = 0, n = e.length; o < n; o += 1) {
                var r = e[o];
                (r.options.continuous || o === e.length - 1) && r.trigger([t])
            }
        }
        this.clearTriggerQueues()
    }, o.prototype.next = function (t) {
        this.waypoints.sort(s);
        var e = i.Adapter.inArray(t, this.waypoints);
        return e === this.waypoints.length - 1 ? null : this.waypoints[e + 1]
    }, o.prototype.previous = function (t) {
        this.waypoints.sort(s);
        var e = i.Adapter.inArray(t, this.waypoints);
        return e ? this.waypoints[e - 1] : null
    }, o.prototype.queueTrigger = function (t, e) {
        this.triggerQueues[e].push(t)
    }, o.prototype.remove = function (t) {
        var e = i.Adapter.inArray(t, this.waypoints);
        -1 < e && this.waypoints.splice(e, 1)
    }, o.prototype.first = function () {
        return this.waypoints[0]
    }, o.prototype.last = function () {
        return this.waypoints[this.waypoints.length - 1]
    }, o.findOrCreate = function (t) {
        return e[t.axis][t.name] || new o(t)
    }, i.Group = o
}(), function () {
    var i = window.jQuery, t = window.VcWaypoint;

    function o(t) {
        this.$element = i(t)
    }

    i.each(["innerHeight", "innerWidth", "off", "offset", "on", "outerHeight", "outerWidth", "scrollLeft", "scrollTop"], function (t, e) {
        o.prototype[e] = function () {
            var t = Array.prototype.slice.call(arguments);
            return this.$element[e].apply(this.$element, t)
        }
    }), i.each(["extend", "inArray", "isEmptyObject"], function (t, e) {
        o[e] = i[e]
    }), t.adapters.push({name: "jquery", Adapter: o}), t.Adapter = o
}(), function () {
    var n = window.VcWaypoint;

    function t(o) {
        return function () {
            var e = [], i = arguments[0];
            return o.isFunction(arguments[0]) && ((i = o.extend({}, arguments[1])).handler = arguments[0]), this.each(function () {
                var t = o.extend({}, i, {element: this});
                "string" == typeof t.context && (t.context = o(this).closest(t.context)[0]), e.push(new n(t))
            }), e
        }
    }

    window.jQuery && (window.jQuery.fn.vcwaypoint = t(window.jQuery)), window.Zepto && (window.Zepto.fn.vcwaypoint = t(window.Zepto))
}();