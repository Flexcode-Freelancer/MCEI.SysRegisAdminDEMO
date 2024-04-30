/*! JsBarcode v3.11.6 | (c) Johan Lindell | MIT license */
!function (t) { var e = {}; function n(r) { if (e[r]) return e[r].exports; var i = e[r] = { i: r, l: !1, exports: {} }; return t[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports } n.m = t, n.c = e, n.d = function (t, e, r) { n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r }) }, n.r = function (t) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 }) }, n.t = function (t, e) { if (1 & e && (t = n(t)), 8 & e) return t; if (4 & e && "object" == typeof t && t && t.__esModule) return t; var r = Object.create(null); if (n.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t) for (var i in t) n.d(r, i, function (e) { return t[e] }.bind(null, i)); return r }, n.n = function (t) { var e = t && t.__esModule ? function () { return t.default } : function () { return t }; return n.d(e, "a", e), e }, n.o = function (t, e) { return Object.prototype.hasOwnProperty.call(t, e) }, n.p = "", n(n.s = 5) }([function (t, e, n) { "use strict"; Object.defineProperty(e, "__esModule", { value: !0 }); var r = Object.assign || function (t) { for (var e = 1; e < arguments.length; e++) { var n = arguments[e]; for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]) } return t }; e.default = function (t, e) { return r({}, t, e) } }, function (t, e, n) { "use strict"; Object.defineProperty(e, "__esModule", { value: !0 }), e.default = function (t) { var e = ["width", "height", "textMargin", "fontSize", "margin", "marginTop", "marginBottom", "marginLeft", "marginRight"]; for (var n in e) e.hasOwnProperty(n) && (n = e[n], "string" == typeof t[n] && (t[n] = parseInt(t[n], 10))); "string" == typeof t.displayValue && (t.displayValue = "false" != t.displayValue); return t } }, function (t, e, n) { "use strict"; Object.defineProperty(e, "__esModule", { value: !0 }); var r = { width: 2, height: 100, format: "auto", displayValue: !0, fontOptions: "", font: "monospace", text: void 0, textAlign: "center", textPosition: "bottom", textMargin: 2, fontSize: 20, background: "#ffffff", lineColor: "#000000", margin: 10, marginTop: void 0, marginBottom: void 0, marginLeft: void 0, marginRight: void 0, valid: function () { } }; e.default = r }, function (t, e, n) { "use strict"; Object.defineProperty(e, "__esModule", { value: !0 }), e.getTotalWidthOfEncodings = e.calculateEncodingAttributes = e.getBarcodePadding = e.getEncodingHeight = e.getMaximumHeightOfEncodings = void 0; var r, i = n(0), o = (r = i) && r.__esModule ? r : { default: r }; function a(t, e) { return e.height + (e.displayValue && t.text.length > 0 ? e.fontSize + e.textMargin : 0) + e.marginTop + e.marginBottom } function u(t, e, n) { if (n.displayValue && e < t) { if ("center" == n.textAlign) return Math.floor((t - e) / 2); if ("left" == n.textAlign) return 0; if ("right" == n.textAlign) return Math.floor(t - e) } return 0 } function s(t, e, n) { var r; if (n) r = n; else { if ("undefined" == typeof document) return 0; r = document.createElement("canvas").getContext("2d") } r.font = e.fontOptions + " " + e.fontSize + "px " + e.font; var i = r.measureText(t); return i ? i.width : 0 } e.getMaximumHeightOfEncodings = function (t) { for (var e = 0, n = 0; n < t.length; n++)t[n].height > e && (e = t[n].height); return e }, e.getEncodingHeight = a, e.getBarcodePadding = u, e.calculateEncodingAttributes = function (t, e, n) { for (var r = 0; r < t.length; r++) { var i, f = t[r], l = (0, o.default)(e, f.options); i = l.displayValue ? s(f.text, l, n) : 0; var c = f.data.length * l.width; f.width = Math.ceil(Math.max(i, c)), f.height = a(f, l), f.barcodePadding = u(i, c, l) } }, e.getTotalWidthOfEncodings = function (t) { for (var e = 0, n = 0; n < t.length; n++)e += t[n].width; return e } }, function (t, e, n) { "use strict"; function r(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") } function i(t, e) { if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" != typeof e && "function" != typeof e ? t : e } function o(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e) } Object.defineProperty(e, "__esModule", { value: !0 }); var a = function (t) { function e(t, n) { r(this, e); var o = i(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this)); return o.name = "InvalidInputException", o.symbology = t, o.input = n, o.message = '"' + o.input + '" is not a valid input for ' + o.symbology, o } return o(e, Error), e }(), u = function (t) { function e() { r(this, e); var t = i(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this)); return t.name = "InvalidElementException", t.message = "Not supported type to render on", t } return o(e, Error), e }(), s = function (t) { function e() { r(this, e); var t = i(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this)); return t.name = "NoElementException", t.message = "No element to render on.", t } return o(e, Error), e }(); e.InvalidInputException = a, e.InvalidElementException = u, e.NoElementException = s }, function (t, e, n) { "use strict"; var r = d(n(6)), i = d(n(0)), o = d(n(9)), a = d(n(10)), u = d(n(11)), s = d(n(1)), f = d(n(17)), l = n(4), c = d(n(2)); function d(t) { return t && t.__esModule ? t : { default: t } } var h = function () { }, p = function (t, e, n) { var r = new h; if (void 0 === t) throw Error("No element to render on was provided."); return r._renderProperties = (0, u.default)(t), r._encodings = [], r._options = c.default, r._errorHandler = new f.default(r), void 0 !== e && ((n = n || {}).format || (n.format = b()), r.options(n)[n.format](e, n).render()), r }; for (var g in p.getModule = function (t) { return r.default[t] }, r.default) r.default.hasOwnProperty(g) && v(r.default, g); function v(t, e) { h.prototype[e] = h.prototype[e.toUpperCase()] = h.prototype[e.toLowerCase()] = function (n, r) { var o = this; return o._errorHandler.wrapBarcodeCall((function () { r.text = void 0 === r.text ? void 0 : "" + r.text; var a = (0, i.default)(o._options, r); a = (0, s.default)(a); var u = t[e], f = y(n, u, a); return o._encodings.push(f), o })) } } function y(t, e, n) { var r = new e(t = "" + t, n); if (!r.valid()) throw new l.InvalidInputException(r.constructor.name, t); var a = r.encode(); a = (0, o.default)(a); for (var u = 0; u < a.length; u++)a[u].options = (0, i.default)(n, a[u].options); return a } function b() { return r.default.CODE128 ? "CODE128" : Object.keys(r.default)[0] } function m(t, e, n) { e = (0, o.default)(e); for (var r = 0; r < e.length; r++)e[r].options = (0, i.default)(n, e[r].options), (0, a.default)(e[r].options); (0, a.default)(n), new (0, t.renderer)(t.element, e, n).render(), t.afterRender && t.afterRender() } h.prototype.options = function (t) { return this._options = (0, i.default)(this._options, t), this }, h.prototype.blank = function (t) { var e = new Array(t + 1).join("0"); return this._encodings.push({ data: e }), this }, h.prototype.init = function () { var t; if (this._renderProperties) for (var e in Array.isArray(this._renderProperties) || (this._renderProperties = [this._renderProperties]), this._renderProperties) { t = this._renderProperties[e]; var n = (0, i.default)(this._options, t.options); "auto" == n.format && (n.format = b()), this._errorHandler.wrapBarcodeCall((function () { var e = y(n.value, r.default[n.format.toUpperCase()], n); m(t, e, n) })) } }, h.prototype.render = function () { if (!this._renderProperties) throw new l.NoElementException; if (Array.isArray(this._renderProperties)) for (var t = 0; t < this._renderProperties.length; t++)m(this._renderProperties[t], this._encodings, this._options); else m(this._renderProperties, this._encodings, this._options); return this }, h.prototype._defaults = c.default, "undefined" != typeof window && (window.JsBarcode = p), "undefined" != typeof jQuery && (jQuery.fn.JsBarcode = function (t, e) { var n = []; return jQuery(this).each((function () { n.push(this) })), p(n, t, e) }), t.exports = p }, function (t, e, n) { "use strict"; Object.defineProperty(e, "__esModule", { value: !0 }); var r = n(7); e.default = { CODE39: r.CODE39 } }, function (t, e, n) { "use strict"; Object.defineProperty(e, "__esModule", { value: !0 }), e.CODE39 = void 0; var r, i = function () { function t(t, e) { for (var n = 0; n < e.length; n++) { var r = e[n]; r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r) } } return function (e, n, r) { return n && t(e.prototype, n), r && t(e, r), e } }(), o = n(8); var a = function (t) { function e(t, n) { return function (t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, e), t = t.toUpperCase(), n.mod43 && (t += function (t) { return u[t] }(function (t) { for (var e = 0, n = 0; n < t.length; n++)e += l(t[n]); return e %= 43 }(t))), function (t, e) { if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" != typeof e && "function" != typeof e ? t : e }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n)) } return function (t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e) }(e, t), i(e, [{ key: "encode", value: function () { for (var t = f("*"), e = 0; e < this.data.length; e++)t += f(this.data[e]) + "0"; return { data: t += f("*"), text: this.text } } }, { key: "valid", value: function () { return -1 !== this.data.search(/^[0-9A-Z\-\.\ \$\/\+\%]+$/) } }]), e }(((r = o) && r.__esModule ? r : { default: r }).default), u = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "-", ".", " ", "$", "/", "+", "%", "*"], s = [20957, 29783, 23639, 30485, 20951, 29813, 23669, 20855, 29789, 23645, 29975, 23831, 30533, 22295, 30149, 24005, 21623, 29981, 23837, 22301, 30023, 23879, 30545, 22343, 30161, 24017, 21959, 30065, 23921, 22385, 29015, 18263, 29141, 17879, 29045, 18293, 17783, 29021, 18269, 17477, 17489, 17681, 20753, 35770]; function f(t) { return function (t) { return s[t].toString(2) }(l(t)) } function l(t) { return u.indexOf(t) } e.CODE39 = a }, function (t, e, n) { "use strict"; Object.defineProperty(e, "__esModule", { value: !0 }); e.default = function t(e, n) { !function (t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, t), this.data = e, this.text = n.text || e, this.options = n } }, function (t, e, n) { "use strict"; Object.defineProperty(e, "__esModule", { value: !0 }), e.default = function (t) { var e = []; return function t(n) { if (Array.isArray(n)) for (var r = 0; r < n.length; r++)t(n[r]); else n.text = n.text || "", n.data = n.data || "", e.push(n) }(t), e } }, function (t, e, n) { "use strict"; Object.defineProperty(e, "__esModule", { value: !0 }), e.default = function (t) { return t.marginTop = t.marginTop || t.margin, t.marginBottom = t.marginBottom || t.margin, t.marginRight = t.marginRight || t.margin, t.marginLeft = t.marginLeft || t.margin, t } }, function (t, e, n) { "use strict"; Object.defineProperty(e, "__esModule", { value: !0 }); var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) { return typeof t } : function (t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t }, i = u(n(12)), o = u(n(13)), a = n(4); function u(t) { return t && t.__esModule ? t : { default: t } } function s(t) { if ("string" == typeof t) return function (t) { var e = document.querySelectorAll(t); if (0 === e.length) return; for (var n = [], r = 0; r < e.length; r++)n.push(s(e[r])); return n }(t); if (Array.isArray(t)) { for (var e = [], n = 0; n < t.length; n++)e.push(s(t[n])); return e } if ("undefined" != typeof HTMLCanvasElement && t instanceof HTMLImageElement) return u = t, { element: f = document.createElement("canvas"), options: (0, i.default)(u), renderer: o.default.CanvasRenderer, afterRender: function () { u.setAttribute("src", f.toDataURL()) } }; if (t && t.nodeName && "svg" === t.nodeName.toLowerCase() || "undefined" != typeof SVGElement && t instanceof SVGElement) return { element: t, options: (0, i.default)(t), renderer: o.default.SVGRenderer }; if ("undefined" != typeof HTMLCanvasElement && t instanceof HTMLCanvasElement) return { element: t, options: (0, i.default)(t), renderer: o.default.CanvasRenderer }; if (t && t.getContext) return { element: t, renderer: o.default.CanvasRenderer }; if (t && "object" === (void 0 === t ? "undefined" : r(t)) && !t.nodeName) return { element: t, renderer: o.default.ObjectRenderer }; throw new a.InvalidElementException; var u, f } e.default = s }, function (t, e, n) { "use strict"; Object.defineProperty(e, "__esModule", { value: !0 }); var r = o(n(1)), i = o(n(2)); function o(t) { return t && t.__esModule ? t : { default: t } } e.default = function (t) { var e = {}; for (var n in i.default) i.default.hasOwnProperty(n) && (t.hasAttribute("jsbarcode-" + n.toLowerCase()) && (e[n] = t.getAttribute("jsbarcode-" + n.toLowerCase())), t.hasAttribute("data-" + n.toLowerCase()) && (e[n] = t.getAttribute("data-" + n.toLowerCase()))); return e.value = t.getAttribute("jsbarcode-value") || t.getAttribute("data-value"), e = (0, r.default)(e) } }, function (t, e, n) { "use strict"; Object.defineProperty(e, "__esModule", { value: !0 }); var r = a(n(14)), i = a(n(15)), o = a(n(16)); function a(t) { return t && t.__esModule ? t : { default: t } } e.default = { CanvasRenderer: r.default, SVGRenderer: i.default, ObjectRenderer: o.default } }, function (t, e, n) { "use strict"; Object.defineProperty(e, "__esModule", { value: !0 }); var r, i = function () { function t(t, e) { for (var n = 0; n < e.length; n++) { var r = e[n]; r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r) } } return function (e, n, r) { return n && t(e.prototype, n), r && t(e, r), e } }(), o = n(0), a = (r = o) && r.__esModule ? r : { default: r }, u = n(3); var s = function () { function t(e, n, r) { !function (t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, t), this.canvas = e, this.encodings = n, this.options = r } return i(t, [{ key: "render", value: function () { if (!this.canvas.getContext) throw new Error("The browser does not support canvas."); this.prepareCanvas(); for (var t = 0; t < this.encodings.length; t++) { var e = (0, a.default)(this.options, this.encodings[t].options); this.drawCanvasBarcode(e, this.encodings[t]), this.drawCanvasText(e, this.encodings[t]), this.moveCanvasDrawing(this.encodings[t]) } this.restoreCanvas() } }, { key: "prepareCanvas", value: function () { var t = this.canvas.getContext("2d"); t.save(), (0, u.calculateEncodingAttributes)(this.encodings, this.options, t); var e = (0, u.getTotalWidthOfEncodings)(this.encodings), n = (0, u.getMaximumHeightOfEncodings)(this.encodings); this.canvas.width = e + this.options.marginLeft + this.options.marginRight, this.canvas.height = n, t.clearRect(0, 0, this.canvas.width, this.canvas.height), this.options.background && (t.fillStyle = this.options.background, t.fillRect(0, 0, this.canvas.width, this.canvas.height)), t.translate(this.options.marginLeft, 0) } }, { key: "drawCanvasBarcode", value: function (t, e) { var n, r = this.canvas.getContext("2d"), i = e.data; n = "top" == t.textPosition ? t.marginTop + t.fontSize + t.textMargin : t.marginTop, r.fillStyle = t.lineColor; for (var o = 0; o < i.length; o++) { var a = o * t.width + e.barcodePadding; "1" === i[o] ? r.fillRect(a, n, t.width, t.height) : i[o] && r.fillRect(a, n, t.width, t.height * i[o]) } } }, { key: "drawCanvasText", value: function (t, e) { var n, r, i = this.canvas.getContext("2d"), o = t.fontOptions + " " + t.fontSize + "px " + t.font; t.displayValue && (r = "top" == t.textPosition ? t.marginTop + t.fontSize - t.textMargin : t.height + t.textMargin + t.marginTop + t.fontSize, i.font = o, "left" == t.textAlign || e.barcodePadding > 0 ? (n = 0, i.textAlign = "left") : "right" == t.textAlign ? (n = e.width - 1, i.textAlign = "right") : (n = e.width / 2, i.textAlign = "center"), i.fillText(e.text, n, r)) } }, { key: "moveCanvasDrawing", value: function (t) { this.canvas.getContext("2d").translate(t.width, 0) } }, { key: "restoreCanvas", value: function () { this.canvas.getContext("2d").restore() } }]), t }(); e.default = s }, function (t, e, n) { "use strict"; Object.defineProperty(e, "__esModule", { value: !0 }); var r, i = function () { function t(t, e) { for (var n = 0; n < e.length; n++) { var r = e[n]; r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r) } } return function (e, n, r) { return n && t(e.prototype, n), r && t(e, r), e } }(), o = n(0), a = (r = o) && r.__esModule ? r : { default: r }, u = n(3); var s = "http://www.w3.org/2000/svg", f = function () { function t(e, n, r) { !function (t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, t), this.svg = e, this.encodings = n, this.options = r, this.document = r.xmlDocument || document } return i(t, [{ key: "render", value: function () { var t = this.options.marginLeft; this.prepareSVG(); for (var e = 0; e < this.encodings.length; e++) { var n = this.encodings[e], r = (0, a.default)(this.options, n.options), i = this.createGroup(t, r.marginTop, this.svg); this.setGroupOptions(i, r), this.drawSvgBarcode(i, r, n), this.drawSVGText(i, r, n), t += n.width } } }, { key: "prepareSVG", value: function () { for (; this.svg.firstChild;)this.svg.removeChild(this.svg.firstChild); (0, u.calculateEncodingAttributes)(this.encodings, this.options); var t = (0, u.getTotalWidthOfEncodings)(this.encodings), e = (0, u.getMaximumHeightOfEncodings)(this.encodings), n = t + this.options.marginLeft + this.options.marginRight; this.setSvgAttributes(n, e), this.options.background && this.drawRect(0, 0, n, e, this.svg).setAttribute("style", "fill:" + this.options.background + ";") } }, { key: "drawSvgBarcode", value: function (t, e, n) { var r, i = n.data; r = "top" == e.textPosition ? e.fontSize + e.textMargin : 0; for (var o = 0, a = 0, u = 0; u < i.length; u++)a = u * e.width + n.barcodePadding, "1" === i[u] ? o++ : o > 0 && (this.drawRect(a - e.width * o, r, e.width * o, e.height, t), o = 0); o > 0 && this.drawRect(a - e.width * (o - 1), r, e.width * o, e.height, t) } }, { key: "drawSVGText", value: function (t, e, n) { var r, i, o = this.document.createElementNS(s, "text"); e.displayValue && (o.setAttribute("style", "font:" + e.fontOptions + " " + e.fontSize + "px " + e.font), i = "top" == e.textPosition ? e.fontSize - e.textMargin : e.height + e.textMargin + e.fontSize, "left" == e.textAlign || n.barcodePadding > 0 ? (r = 0, o.setAttribute("text-anchor", "start")) : "right" == e.textAlign ? (r = n.width - 1, o.setAttribute("text-anchor", "end")) : (r = n.width / 2, o.setAttribute("text-anchor", "middle")), o.setAttribute("x", r), o.setAttribute("y", i), o.appendChild(this.document.createTextNode(n.text)), t.appendChild(o)) } }, { key: "setSvgAttributes", value: function (t, e) { var n = this.svg; n.setAttribute("width", t + "px"), n.setAttribute("height", e + "px"), n.setAttribute("x", "0px"), n.setAttribute("y", "0px"), n.setAttribute("viewBox", "0 0 " + t + " " + e), n.setAttribute("xmlns", s), n.setAttribute("version", "1.1"), n.setAttribute("style", "transform: translate(0,0)") } }, { key: "createGroup", value: function (t, e, n) { var r = this.document.createElementNS(s, "g"); return r.setAttribute("transform", "translate(" + t + ", " + e + ")"), n.appendChild(r), r } }, { key: "setGroupOptions", value: function (t, e) { t.setAttribute("style", "fill:" + e.lineColor + ";") } }, { key: "drawRect", value: function (t, e, n, r, i) { var o = this.document.createElementNS(s, "rect"); return o.setAttribute("x", t), o.setAttribute("y", e), o.setAttribute("width", n), o.setAttribute("height", r), i.appendChild(o), o } }]), t }(); e.default = f }, function (t, e, n) { "use strict"; Object.defineProperty(e, "__esModule", { value: !0 }); var r = function () { function t(t, e) { for (var n = 0; n < e.length; n++) { var r = e[n]; r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r) } } return function (e, n, r) { return n && t(e.prototype, n), r && t(e, r), e } }(); var i = function () { function t(e, n, r) { !function (t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, t), this.object = e, this.encodings = n, this.options = r } return r(t, [{ key: "render", value: function () { this.object.encodings = this.encodings } }]), t }(); e.default = i }, function (t, e, n) { "use strict"; Object.defineProperty(e, "__esModule", { value: !0 }); var r = function () { function t(t, e) { for (var n = 0; n < e.length; n++) { var r = e[n]; r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r) } } return function (e, n, r) { return n && t(e.prototype, n), r && t(e, r), e } }(); var i = function () { function t(e) { !function (t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, t), this.api = e } return r(t, [{ key: "handleCatch", value: function (t) { if ("InvalidInputException" !== t.name) throw t; if (this.api._options.valid === this.api._defaults.valid) throw t.message; this.api._options.valid(!1), this.api.render = function () { } } }, { key: "wrapBarcodeCall", value: function (t) { try { var e = t.apply(void 0, arguments); return this.api._options.valid(!0), e } catch (t) { return this.handleCatch(t), this.api } } }]), t }(); e.default = i }]);