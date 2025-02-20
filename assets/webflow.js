
/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */

(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // packages/shared/render/plugins/BaseSiteModules/tram-min.js
  var require_tram_min = __commonJS({
    "packages/shared/render/plugins/BaseSiteModules/tram-min.js"() {
      "use strict";
      window.tram = function(a) {
        function b(a2, b2) {
          var c2 = new M.Bare();
          return c2.init(a2, b2);
        }
        function c(a2) {
          return a2.replace(/[A-Z]/g, function(a3) {
            return "-" + a3.toLowerCase();
          });
        }
        function d(a2) {
          var b2 = parseInt(a2.slice(1), 16), c2 = b2 >> 16 & 255, d2 = b2 >> 8 & 255, e2 = 255 & b2;
          return [c2, d2, e2];
        }
        function e(a2, b2, c2) {
          return "#" + (1 << 24 | a2 << 16 | b2 << 8 | c2).toString(16).slice(1);
        }
        function f() {
        }
        function g(a2, b2) {
          j("Type warning: Expected: [" + a2 + "] Got: [" + typeof b2 + "] " + b2);
        }
        function h(a2, b2, c2) {
          j("Units do not match [" + a2 + "]: " + b2 + ", " + c2);
        }
        function i(a2, b2, c2) {
          if (void 0 !== b2 && (c2 = b2), void 0 === a2)
            return c2;
          var d2 = c2;
          return $.test(a2) || !_.test(a2) ? d2 = parseInt(a2, 10) : _.test(a2) && (d2 = 1e3 * parseFloat(a2)), 0 > d2 && (d2 = 0), d2 === d2 ? d2 : c2;
        }
        function j(a2) {
          U.debug && window && window.console.warn(a2);
        }
        function k(a2) {
          for (var b2 = -1, c2 = a2 ? a2.length : 0, d2 = []; ++b2 < c2; ) {
            var e2 = a2[b2];
            e2 && d2.push(e2);
          }
          return d2;
        }
        var l = function(a2, b2, c2) {
          function d2(a3) {
            return "object" == typeof a3;
          }
          function e2(a3) {
            return "function" == typeof a3;
          }
          function f2() {
          }
          function g2(h2, i2) {
            function j2() {
              var a3 = new k2();
              return e2(a3.init) && a3.init.apply(a3, arguments), a3;
            }
            function k2() {
            }
            i2 === c2 && (i2 = h2, h2 = Object), j2.Bare = k2;
            var l2, m2 = f2[a2] = h2[a2], n2 = k2[a2] = j2[a2] = new f2();
            return n2.constructor = j2, j2.mixin = function(b3) {
              return k2[a2] = j2[a2] = g2(j2, b3)[a2], j2;
            }, j2.open = function(a3) {
              if (l2 = {}, e2(a3) ? l2 = a3.call(j2, n2, m2, j2, h2) : d2(a3) && (l2 = a3), d2(l2))
                for (var c3 in l2)
                  b2.call(l2, c3) && (n2[c3] = l2[c3]);
              return e2(n2.init) || (n2.init = h2), j2;
            }, j2.open(i2);
          }
          return g2;
        }("prototype", {}.hasOwnProperty), m = {
          ease: ["ease", function(a2, b2, c2, d2) {
            var e2 = (a2 /= d2) * a2, f2 = e2 * a2;
            return b2 + c2 * (-2.75 * f2 * e2 + 11 * e2 * e2 + -15.5 * f2 + 8 * e2 + 0.25 * a2);
          }],
          "ease-in": ["ease-in", function(a2, b2, c2, d2) {
            var e2 = (a2 /= d2) * a2, f2 = e2 * a2;
            return b2 + c2 * (-1 * f2 * e2 + 3 * e2 * e2 + -3 * f2 + 2 * e2);
          }],
          "ease-out": ["ease-out", function(a2, b2, c2, d2) {
            var e2 = (a2 /= d2) * a2, f2 = e2 * a2;
            return b2 + c2 * (0.3 * f2 * e2 + -1.6 * e2 * e2 + 2.2 * f2 + -1.8 * e2 + 1.9 * a2);
          }],
          "ease-in-out": ["ease-in-out", function(a2, b2, c2, d2) {
            var e2 = (a2 /= d2) * a2, f2 = e2 * a2;
            return b2 + c2 * (2 * f2 * e2 + -5 * e2 * e2 + 2 * f2 + 2 * e2);
          }],
          linear: ["linear", function(a2, b2, c2, d2) {
            return c2 * a2 / d2 + b2;
          }],
          "ease-in-quad": ["cubic-bezier(0.550, 0.085, 0.680, 0.530)", function(a2, b2, c2, d2) {
            return c2 * (a2 /= d2) * a2 + b2;
          }],
          "ease-out-quad": ["cubic-bezier(0.250, 0.460, 0.450, 0.940)", function(a2, b2, c2, d2) {
            return -c2 * (a2 /= d2) * (a2 - 2) + b2;
          }],
          "ease-in-out-quad": ["cubic-bezier(0.455, 0.030, 0.515, 0.955)", function(a2, b2, c2, d2) {
            return (a2 /= d2 / 2) < 1 ? c2 / 2 * a2 * a2 + b2 : -c2 / 2 * (--a2 * (a2 - 2) - 1) + b2;
          }],
          "ease-in-cubic": ["cubic-bezier(0.550, 0.055, 0.675, 0.190)", function(a2, b2, c2, d2) {
            return c2 * (a2 /= d2) * a2 * a2 + b2;
          }],
          "ease-out-cubic": ["cubic-bezier(0.215, 0.610, 0.355, 1)", function(a2, b2, c2, d2) {
            return c2 * ((a2 = a2 / d2 - 1) * a2 * a2 + 1) + b2;
          }],
          "ease-in-out-cubic": ["cubic-bezier(0.645, 0.045, 0.355, 1)", function(a2, b2, c2, d2) {
            return (a2 /= d2 / 2) < 1 ? c2 / 2 * a2 * a2 * a2 + b2 : c2 / 2 * ((a2 -= 2) * a2 * a2 + 2) + b2;
          }],
          "ease-in-quart": ["cubic-bezier(0.895, 0.030, 0.685, 0.220)", function(a2, b2, c2, d2) {
            return c2 * (a2 /= d2) * a2 * a2 * a2 + b2;
          }],
          "ease-out-quart": ["cubic-bezier(0.165, 0.840, 0.440, 1)", function(a2, b2, c2, d2) {
            return -c2 * ((a2 = a2 / d2 - 1) * a2 * a2 * a2 - 1) + b2;
          }],
          "ease-in-out-quart": ["cubic-bezier(0.770, 0, 0.175, 1)", function(a2, b2, c2, d2) {
            return (a2 /= d2 / 2) < 1 ? c2 / 2 * a2 * a2 * a2 * a2 + b2 : -c2 / 2 * ((a2 -= 2) * a2 * a2 * a2 - 2) + b2;
          }],
          "ease-in-quint": ["cubic-bezier(0.755, 0.050, 0.855, 0.060)", function(a2, b2, c2, d2) {
            return c2 * (a2 /= d2) * a2 * a2 * a2 * a2 + b2;
          }],
          "ease-out-quint": ["cubic-bezier(0.230, 1, 0.320, 1)", function(a2, b2, c2, d2) {
            return c2 * ((a2 = a2 / d2 - 1) * a2 * a2 * a2 * a2 + 1) + b2;
          }],
          "ease-in-out-quint": ["cubic-bezier(0.860, 0, 0.070, 1)", function(a2, b2, c2, d2) {
            return (a2 /= d2 / 2) < 1 ? c2 / 2 * a2 * a2 * a2 * a2 * a2 + b2 : c2 / 2 * ((a2 -= 2) * a2 * a2 * a2 * a2 + 2) + b2;
          }],
          "ease-in-sine": ["cubic-bezier(0.470, 0, 0.745, 0.715)", function(a2, b2, c2, d2) {
            return -c2 * Math.cos(a2 / d2 * (Math.PI / 2)) + c2 + b2;
          }],
          "ease-out-sine": ["cubic-bezier(0.390, 0.575, 0.565, 1)", function(a2, b2, c2, d2) {
            return c2 * Math.sin(a2 / d2 * (Math.PI / 2)) + b2;
          }],
          "ease-in-out-sine": ["cubic-bezier(0.445, 0.050, 0.550, 0.950)", function(a2, b2, c2, d2) {
            return -c2 / 2 * (Math.cos(Math.PI * a2 / d2) - 1) + b2;
          }],
          "ease-in-expo": ["cubic-bezier(0.950, 0.050, 0.795, 0.035)", function(a2, b2, c2, d2) {
            return 0 === a2 ? b2 : c2 * Math.pow(2, 10 * (a2 / d2 - 1)) + b2;
          }],
          "ease-out-expo": ["cubic-bezier(0.190, 1, 0.220, 1)", function(a2, b2, c2, d2) {
            return a2 === d2 ? b2 + c2 : c2 * (-Math.pow(2, -10 * a2 / d2) + 1) + b2;
          }],
          "ease-in-out-expo": ["cubic-bezier(1, 0, 0, 1)", function(a2, b2, c2, d2) {
            return 0 === a2 ? b2 : a2 === d2 ? b2 + c2 : (a2 /= d2 / 2) < 1 ? c2 / 2 * Math.pow(2, 10 * (a2 - 1)) + b2 : c2 / 2 * (-Math.pow(2, -10 * --a2) + 2) + b2;
          }],
          "ease-in-circ": ["cubic-bezier(0.600, 0.040, 0.980, 0.335)", function(a2, b2, c2, d2) {
            return -c2 * (Math.sqrt(1 - (a2 /= d2) * a2) - 1) + b2;
          }],
          "ease-out-circ": ["cubic-bezier(0.075, 0.820, 0.165, 1)", function(a2, b2, c2, d2) {
            return c2 * Math.sqrt(1 - (a2 = a2 / d2 - 1) * a2) + b2;
          }],
          "ease-in-out-circ": ["cubic-bezier(0.785, 0.135, 0.150, 0.860)", function(a2, b2, c2, d2) {
            return (a2 /= d2 / 2) < 1 ? -c2 / 2 * (Math.sqrt(1 - a2 * a2) - 1) + b2 : c2 / 2 * (Math.sqrt(1 - (a2 -= 2) * a2) + 1) + b2;
          }],
          "ease-in-back": ["cubic-bezier(0.600, -0.280, 0.735, 0.045)", function(a2, b2, c2, d2, e2) {
            return void 0 === e2 && (e2 = 1.70158), c2 * (a2 /= d2) * a2 * ((e2 + 1) * a2 - e2) + b2;
          }],
          "ease-out-back": ["cubic-bezier(0.175, 0.885, 0.320, 1.275)", function(a2, b2, c2, d2, e2) {
            return void 0 === e2 && (e2 = 1.70158), c2 * ((a2 = a2 / d2 - 1) * a2 * ((e2 + 1) * a2 + e2) + 1) + b2;
          }],
          "ease-in-out-back": ["cubic-bezier(0.680, -0.550, 0.265, 1.550)", function(a2, b2, c2, d2, e2) {
            return void 0 === e2 && (e2 = 1.70158), (a2 /= d2 / 2) < 1 ? c2 / 2 * a2 * a2 * (((e2 *= 1.525) + 1) * a2 - e2) + b2 : c2 / 2 * ((a2 -= 2) * a2 * (((e2 *= 1.525) + 1) * a2 + e2) + 2) + b2;
          }]
        }, n = {
          "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
          "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
          "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)"
        }, o = document, p = window, q = "bkwld-tram", r = /[\-\.0-9]/g, s = /[A-Z]/, t = "number", u = /^(rgb|#)/, v = /(em|cm|mm|in|pt|pc|px)$/, w = /(em|cm|mm|in|pt|pc|px|%)$/, x = /(deg|rad|turn)$/, y = "unitless", z = /(all|none) 0s ease 0s/, A = /^(width|height)$/, B = " ", C = o.createElement("a"), D = ["Webkit", "Moz", "O", "ms"], E = ["-webkit-", "-moz-", "-o-", "-ms-"], F = function(a2) {
          if (a2 in C.style)
            return {
              dom: a2,
              css: a2
            };
          var b2, c2, d2 = "", e2 = a2.split("-");
          for (b2 = 0; b2 < e2.length; b2++)
            d2 += e2[b2].charAt(0).toUpperCase() + e2[b2].slice(1);
          for (b2 = 0; b2 < D.length; b2++)
            if (c2 = D[b2] + d2, c2 in C.style)
              return {
                dom: c2,
                css: E[b2] + a2
              };
        }, G = b.support = {
          bind: Function.prototype.bind,
          transform: F("transform"),
          transition: F("transition"),
          backface: F("backface-visibility"),
          timing: F("transition-timing-function")
        };
        if (G.transition) {
          var H = G.timing.dom;
          if (C.style[H] = m["ease-in-back"][0], !C.style[H])
            for (var I in n)
              m[I][0] = n[I];
        }
        var J = b.frame = function() {
          var a2 = p.requestAnimationFrame || p.webkitRequestAnimationFrame || p.mozRequestAnimationFrame || p.oRequestAnimationFrame || p.msRequestAnimationFrame;
          return a2 && G.bind ? a2.bind(p) : function(a3) {
            p.setTimeout(a3, 16);
          };
        }(), K = b.now = function() {
          var a2 = p.performance, b2 = a2 && (a2.now || a2.webkitNow || a2.msNow || a2.mozNow);
          return b2 && G.bind ? b2.bind(a2) : Date.now || function() {
            return +/* @__PURE__ */ new Date();
          };
        }(), L = l(function(b2) {
          function d2(a2, b3) {
            var c2 = k(("" + a2).split(B)), d3 = c2[0];
            b3 = b3 || {};
            var e3 = Y[d3];
            if (!e3)
              return j("Unsupported property: " + d3);
            if (!b3.weak || !this.props[d3]) {
              var f3 = e3[0], g3 = this.props[d3];
              return g3 || (g3 = this.props[d3] = new f3.Bare()), g3.init(this.$el, c2, e3, b3), g3;
            }
          }
          function e2(a2, b3, c2) {
            if (a2) {
              var e3 = typeof a2;
              if (b3 || (this.timer && this.timer.destroy(), this.queue = [], this.active = false), "number" == e3 && b3)
                return this.timer = new S({
                  duration: a2,
                  context: this,
                  complete: h2
                }), void (this.active = true);
              if ("string" == e3 && b3) {
                switch (a2) {
                  case "hide":
                    o2.call(this);
                    break;
                  case "stop":
                    l2.call(this);
                    break;
                  case "redraw":
                    p2.call(this);
                    break;
                  default:
                    d2.call(this, a2, c2 && c2[1]);
                }
                return h2.call(this);
              }
              if ("function" == e3)
                return void a2.call(this, this);
              if ("object" == e3) {
                var f3 = 0;
                u2.call(this, a2, function(a3, b4) {
                  a3.span > f3 && (f3 = a3.span), a3.stop(), a3.animate(b4);
                }, function(a3) {
                  "wait" in a3 && (f3 = i(a3.wait, 0));
                }), t2.call(this), f3 > 0 && (this.timer = new S({
                  duration: f3,
                  context: this
                }), this.active = true, b3 && (this.timer.complete = h2));
                var g3 = this, j2 = false, k2 = {};
                J(function() {
                  u2.call(g3, a2, function(a3) {
                    a3.active && (j2 = true, k2[a3.name] = a3.nextStyle);
                  }), j2 && g3.$el.css(k2);
                });
              }
            }
          }
          function f2(a2) {
            a2 = i(a2, 0), this.active ? this.queue.push({
              options: a2
            }) : (this.timer = new S({
              duration: a2,
              context: this,
              complete: h2
            }), this.active = true);
          }
          function g2(a2) {
            return this.active ? (this.queue.push({
              options: a2,
              args: arguments
            }), void (this.timer.complete = h2)) : j("No active transition timer. Use start() or wait() before then().");
          }
          function h2() {
            if (this.timer && this.timer.destroy(), this.active = false, this.queue.length) {
              var a2 = this.queue.shift();
              e2.call(this, a2.options, true, a2.args);
            }
          }
          function l2(a2) {
            this.timer && this.timer.destroy(), this.queue = [], this.active = false;
            var b3;
            "string" == typeof a2 ? (b3 = {}, b3[a2] = 1) : b3 = "object" == typeof a2 && null != a2 ? a2 : this.props, u2.call(this, b3, v2), t2.call(this);
          }
          function m2(a2) {
            l2.call(this, a2), u2.call(this, a2, w2, x2);
          }
          function n2(a2) {
            "string" != typeof a2 && (a2 = "block"), this.el.style.display = a2;
          }
          function o2() {
            l2.call(this), this.el.style.display = "none";
          }
          function p2() {
            this.el.offsetHeight;
          }
          function r2() {
            l2.call(this), a.removeData(this.el, q), this.$el = this.el = null;
          }
          function t2() {
            var a2, b3, c2 = [];
            this.upstream && c2.push(this.upstream);
            for (a2 in this.props)
              b3 = this.props[a2], b3.active && c2.push(b3.string);
            c2 = c2.join(","), this.style !== c2 && (this.style = c2, this.el.style[G.transition.dom] = c2);
          }
          function u2(a2, b3, e3) {
            var f3, g3, h3, i2, j2 = b3 !== v2, k2 = {};
            for (f3 in a2)
              h3 = a2[f3], f3 in Z ? (k2.transform || (k2.transform = {}), k2.transform[f3] = h3) : (s.test(f3) && (f3 = c(f3)), f3 in Y ? k2[f3] = h3 : (i2 || (i2 = {}), i2[f3] = h3));
            for (f3 in k2) {
              if (h3 = k2[f3], g3 = this.props[f3], !g3) {
                if (!j2)
                  continue;
                g3 = d2.call(this, f3);
              }
              b3.call(this, g3, h3);
            }
            e3 && i2 && e3.call(this, i2);
          }
          function v2(a2) {
            a2.stop();
          }
          function w2(a2, b3) {
            a2.set(b3);
          }
          function x2(a2) {
            this.$el.css(a2);
          }
          function y2(a2, c2) {
            b2[a2] = function() {
              return this.children ? A2.call(this, c2, arguments) : (this.el && c2.apply(this, arguments), this);
            };
          }
          function A2(a2, b3) {
            var c2, d3 = this.children.length;
            for (c2 = 0; d3 > c2; c2++)
              a2.apply(this.children[c2], b3);
            return this;
          }
          b2.init = function(b3) {
            if (this.$el = a(b3), this.el = this.$el[0], this.props = {}, this.queue = [], this.style = "", this.active = false, U.keepInherited && !U.fallback) {
              var c2 = W(this.el, "transition");
              c2 && !z.test(c2) && (this.upstream = c2);
            }
            G.backface && U.hideBackface && V(this.el, G.backface.css, "hidden");
          }, y2("add", d2), y2("start", e2), y2("wait", f2), y2("then", g2), y2("next", h2), y2("stop", l2), y2("set", m2), y2("show", n2), y2("hide", o2), y2("redraw", p2), y2("destroy", r2);
        }), M = l(L, function(b2) {
          function c2(b3, c3) {
            var d2 = a.data(b3, q) || a.data(b3, q, new L.Bare());
            return d2.el || d2.init(b3), c3 ? d2.start(c3) : d2;
          }
          b2.init = function(b3, d2) {
            var e2 = a(b3);
            if (!e2.length)
              return this;
            if (1 === e2.length)
              return c2(e2[0], d2);
            var f2 = [];
            return e2.each(function(a2, b4) {
              f2.push(c2(b4, d2));
            }), this.children = f2, this;
          };
        }), N = l(function(a2) {
          function b2() {
            var a3 = this.get();
            this.update("auto");
            var b3 = this.get();
            return this.update(a3), b3;
          }
          function c2(a3, b3, c3) {
            return void 0 !== b3 && (c3 = b3), a3 in m ? a3 : c3;
          }
          function d2(a3) {
            var b3 = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(a3);
            return (b3 ? e(b3[1], b3[2], b3[3]) : a3).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3");
          }
          var f2 = {
            duration: 500,
            ease: "ease",
            delay: 0
          };
          a2.init = function(a3, b3, d3, e2) {
            this.$el = a3, this.el = a3[0];
            var g2 = b3[0];
            d3[2] && (g2 = d3[2]), X[g2] && (g2 = X[g2]), this.name = g2, this.type = d3[1], this.duration = i(b3[1], this.duration, f2.duration), this.ease = c2(b3[2], this.ease, f2.ease), this.delay = i(b3[3], this.delay, f2.delay), this.span = this.duration + this.delay, this.active = false, this.nextStyle = null, this.auto = A.test(this.name), this.unit = e2.unit || this.unit || U.defaultUnit, this.angle = e2.angle || this.angle || U.defaultAngle, U.fallback || e2.fallback ? this.animate = this.fallback : (this.animate = this.transition, this.string = this.name + B + this.duration + "ms" + ("ease" != this.ease ? B + m[this.ease][0] : "") + (this.delay ? B + this.delay + "ms" : ""));
          }, a2.set = function(a3) {
            a3 = this.convert(a3, this.type), this.update(a3), this.redraw();
          }, a2.transition = function(a3) {
            this.active = true, a3 = this.convert(a3, this.type), this.auto && ("auto" == this.el.style[this.name] && (this.update(this.get()), this.redraw()), "auto" == a3 && (a3 = b2.call(this))), this.nextStyle = a3;
          }, a2.fallback = function(a3) {
            var c3 = this.el.style[this.name] || this.convert(this.get(), this.type);
            a3 = this.convert(a3, this.type), this.auto && ("auto" == c3 && (c3 = this.convert(this.get(), this.type)), "auto" == a3 && (a3 = b2.call(this))), this.tween = new R({
              from: c3,
              to: a3,
              duration: this.duration,
              delay: this.delay,
              ease: this.ease,
              update: this.update,
              context: this
            });
          }, a2.get = function() {
            return W(this.el, this.name);
          }, a2.update = function(a3) {
            V(this.el, this.name, a3);
          }, a2.stop = function() {
            (this.active || this.nextStyle) && (this.active = false, this.nextStyle = null, V(this.el, this.name, this.get()));
            var a3 = this.tween;
            a3 && a3.context && a3.destroy();
          }, a2.convert = function(a3, b3) {
            if ("auto" == a3 && this.auto)
              return a3;
            var c3, e2 = "number" == typeof a3, f3 = "string" == typeof a3;
            switch (b3) {
              case t:
                if (e2)
                  return a3;
                if (f3 && "" === a3.replace(r, ""))
                  return +a3;
                c3 = "number(unitless)";
                break;
              case u:
                if (f3) {
                  if ("" === a3 && this.original)
                    return this.original;
                  if (b3.test(a3))
                    return "#" == a3.charAt(0) && 7 == a3.length ? a3 : d2(a3);
                }
                c3 = "hex or rgb string";
                break;
              case v:
                if (e2)
                  return a3 + this.unit;
                if (f3 && b3.test(a3))
                  return a3;
                c3 = "number(px) or string(unit)";
                break;
              case w:
                if (e2)
                  return a3 + this.unit;
                if (f3 && b3.test(a3))
                  return a3;
                c3 = "number(px) or string(unit or %)";
                break;
              case x:
                if (e2)
                  return a3 + this.angle;
                if (f3 && b3.test(a3))
                  return a3;
                c3 = "number(deg) or string(angle)";
                break;
              case y:
                if (e2)
                  return a3;
                if (f3 && w.test(a3))
                  return a3;
                c3 = "number(unitless) or string(unit or %)";
            }
            return g(c3, a3), a3;
          }, a2.redraw = function() {
            this.el.offsetHeight;
          };
        }), O = l(N, function(a2, b2) {
          a2.init = function() {
            b2.init.apply(this, arguments), this.original || (this.original = this.convert(this.get(), u));
          };
        }), P = l(N, function(a2, b2) {
          a2.init = function() {
            b2.init.apply(this, arguments), this.animate = this.fallback;
          }, a2.get = function() {
            return this.$el[this.name]();
          }, a2.update = function(a3) {
            this.$el[this.name](a3);
          };
        }), Q = l(N, function(a2, b2) {
          function c2(a3, b3) {
            var c3, d2, e2, f2, g2;
            for (c3 in a3)
              f2 = Z[c3], e2 = f2[0], d2 = f2[1] || c3, g2 = this.convert(a3[c3], e2), b3.call(this, d2, g2, e2);
          }
          a2.init = function() {
            b2.init.apply(this, arguments), this.current || (this.current = {}, Z.perspective && U.perspective && (this.current.perspective = U.perspective, V(this.el, this.name, this.style(this.current)), this.redraw()));
          }, a2.set = function(a3) {
            c2.call(this, a3, function(a4, b3) {
              this.current[a4] = b3;
            }), V(this.el, this.name, this.style(this.current)), this.redraw();
          }, a2.transition = function(a3) {
            var b3 = this.values(a3);
            this.tween = new T({
              current: this.current,
              values: b3,
              duration: this.duration,
              delay: this.delay,
              ease: this.ease
            });
            var c3, d2 = {};
            for (c3 in this.current)
              d2[c3] = c3 in b3 ? b3[c3] : this.current[c3];
            this.active = true, this.nextStyle = this.style(d2);
          }, a2.fallback = function(a3) {
            var b3 = this.values(a3);
            this.tween = new T({
              current: this.current,
              values: b3,
              duration: this.duration,
              delay: this.delay,
              ease: this.ease,
              update: this.update,
              context: this
            });
          }, a2.update = function() {
            V(this.el, this.name, this.style(this.current));
          }, a2.style = function(a3) {
            var b3, c3 = "";
            for (b3 in a3)
              c3 += b3 + "(" + a3[b3] + ") ";
            return c3;
          }, a2.values = function(a3) {
            var b3, d2 = {};
            return c2.call(this, a3, function(a4, c3, e2) {
              d2[a4] = c3, void 0 === this.current[a4] && (b3 = 0, ~a4.indexOf("scale") && (b3 = 1), this.current[a4] = this.convert(b3, e2));
            }), d2;
          };
        }), R = l(function(b2) {
          function c2(a2) {
            1 === n2.push(a2) && J(g2);
          }
          function g2() {
            var a2, b3, c3, d2 = n2.length;
            if (d2)
              for (J(g2), b3 = K(), a2 = d2; a2--; )
                c3 = n2[a2], c3 && c3.render(b3);
          }
          function i2(b3) {
            var c3, d2 = a.inArray(b3, n2);
            d2 >= 0 && (c3 = n2.slice(d2 + 1), n2.length = d2, c3.length && (n2 = n2.concat(c3)));
          }
          function j2(a2) {
            return Math.round(a2 * o2) / o2;
          }
          function k2(a2, b3, c3) {
            return e(a2[0] + c3 * (b3[0] - a2[0]), a2[1] + c3 * (b3[1] - a2[1]), a2[2] + c3 * (b3[2] - a2[2]));
          }
          var l2 = {
            ease: m.ease[1],
            from: 0,
            to: 1
          };
          b2.init = function(a2) {
            this.duration = a2.duration || 0, this.delay = a2.delay || 0;
            var b3 = a2.ease || l2.ease;
            m[b3] && (b3 = m[b3][1]), "function" != typeof b3 && (b3 = l2.ease), this.ease = b3, this.update = a2.update || f, this.complete = a2.complete || f, this.context = a2.context || this, this.name = a2.name;
            var c3 = a2.from, d2 = a2.to;
            void 0 === c3 && (c3 = l2.from), void 0 === d2 && (d2 = l2.to), this.unit = a2.unit || "", "number" == typeof c3 && "number" == typeof d2 ? (this.begin = c3, this.change = d2 - c3) : this.format(d2, c3), this.value = this.begin + this.unit, this.start = K(), a2.autoplay !== false && this.play();
          }, b2.play = function() {
            this.active || (this.start || (this.start = K()), this.active = true, c2(this));
          }, b2.stop = function() {
            this.active && (this.active = false, i2(this));
          }, b2.render = function(a2) {
            var b3, c3 = a2 - this.start;
            if (this.delay) {
              if (c3 <= this.delay)
                return;
              c3 -= this.delay;
            }
            if (c3 < this.duration) {
              var d2 = this.ease(c3, 0, 1, this.duration);
              return b3 = this.startRGB ? k2(this.startRGB, this.endRGB, d2) : j2(this.begin + d2 * this.change), this.value = b3 + this.unit, void this.update.call(this.context, this.value);
            }
            b3 = this.endHex || this.begin + this.change, this.value = b3 + this.unit, this.update.call(this.context, this.value), this.complete.call(this.context), this.destroy();
          }, b2.format = function(a2, b3) {
            if (b3 += "", a2 += "", "#" == a2.charAt(0))
              return this.startRGB = d(b3), this.endRGB = d(a2), this.endHex = a2, this.begin = 0, void (this.change = 1);
            if (!this.unit) {
              var c3 = b3.replace(r, ""), e2 = a2.replace(r, "");
              c3 !== e2 && h("tween", b3, a2), this.unit = c3;
            }
            b3 = parseFloat(b3), a2 = parseFloat(a2), this.begin = this.value = b3, this.change = a2 - b3;
          }, b2.destroy = function() {
            this.stop(), this.context = null, this.ease = this.update = this.complete = f;
          };
          var n2 = [], o2 = 1e3;
        }), S = l(R, function(a2) {
          a2.init = function(a3) {
            this.duration = a3.duration || 0, this.complete = a3.complete || f, this.context = a3.context, this.play();
          }, a2.render = function(a3) {
            var b2 = a3 - this.start;
            b2 < this.duration || (this.complete.call(this.context), this.destroy());
          };
        }), T = l(R, function(a2, b2) {
          a2.init = function(a3) {
            this.context = a3.context, this.update = a3.update, this.tweens = [], this.current = a3.current;
            var b3, c2;
            for (b3 in a3.values)
              c2 = a3.values[b3], this.current[b3] !== c2 && this.tweens.push(new R({
                name: b3,
                from: this.current[b3],
                to: c2,
                duration: a3.duration,
                delay: a3.delay,
                ease: a3.ease,
                autoplay: false
              }));
            this.play();
          }, a2.render = function(a3) {
            var b3, c2, d2 = this.tweens.length, e2 = false;
            for (b3 = d2; b3--; )
              c2 = this.tweens[b3], c2.context && (c2.render(a3), this.current[c2.name] = c2.value, e2 = true);
            return e2 ? void (this.update && this.update.call(this.context)) : this.destroy();
          }, a2.destroy = function() {
            if (b2.destroy.call(this), this.tweens) {
              var a3, c2 = this.tweens.length;
              for (a3 = c2; a3--; )
                this.tweens[a3].destroy();
              this.tweens = null, this.current = null;
            }
          };
        }), U = b.config = {
          debug: false,
          defaultUnit: "px",
          defaultAngle: "deg",
          keepInherited: false,
          hideBackface: false,
          perspective: "",
          fallback: !G.transition,
          agentTests: []
        };
        b.fallback = function(a2) {
          if (!G.transition)
            return U.fallback = true;
          U.agentTests.push("(" + a2 + ")");
          var b2 = new RegExp(U.agentTests.join("|"), "i");
          U.fallback = b2.test(navigator.userAgent);
        }, b.fallback("6.0.[2-5] Safari"), b.tween = function(a2) {
          return new R(a2);
        }, b.delay = function(a2, b2, c2) {
          return new S({
            complete: b2,
            duration: a2,
            context: c2
          });
        }, a.fn.tram = function(a2) {
          return b.call(null, this, a2);
        };
        var V = a.style, W = a.css, X = {
          transform: G.transform && G.transform.css
        }, Y = {
          color: [O, u],
          background: [O, u, "background-color"],
          "outline-color": [O, u],
          "border-color": [O, u],
          "border-top-color": [O, u],
          "border-right-color": [O, u],
          "border-bottom-color": [O, u],
          "border-left-color": [O, u],
          "border-width": [N, v],
          "border-top-width": [N, v],
          "border-right-width": [N, v],
          "border-bottom-width": [N, v],
          "border-left-width": [N, v],
          "border-spacing": [N, v],
          "letter-spacing": [N, v],
          margin: [N, v],
          "margin-top": [N, v],
          "margin-right": [N, v],
          "margin-bottom": [N, v],
          "margin-left": [N, v],
          padding: [N, v],
          "padding-top": [N, v],
          "padding-right": [N, v],
          "padding-bottom": [N, v],
          "padding-left": [N, v],
          "outline-width": [N, v],
          opacity: [N, t],
          top: [N, w],
          right: [N, w],
          bottom: [N, w],
          left: [N, w],
          "font-size": [N, w],
          "text-indent": [N, w],
          "word-spacing": [N, w],
          width: [N, w],
          "min-width": [N, w],
          "max-width": [N, w],
          height: [N, w],
          "min-height": [N, w],
          "max-height": [N, w],
          "line-height": [N, y],
          "scroll-top": [P, t, "scrollTop"],
          "scroll-left": [P, t, "scrollLeft"]
        }, Z = {};
        G.transform && (Y.transform = [Q], Z = {
          x: [w, "translateX"],
          y: [w, "translateY"],
          rotate: [x],
          rotateX: [x],
          rotateY: [x],
          scale: [t],
          scaleX: [t],
          scaleY: [t],
          skew: [x],
          skewX: [x],
          skewY: [x]
        }), G.transform && G.backface && (Z.z = [w, "translateZ"], Z.rotateZ = [x], Z.scaleZ = [t], Z.perspective = [v]);
        var $ = /ms/, _ = /s|\./;
        return a.tram = b;
      }(window.jQuery);
    }
  });

  // packages/shared/render/plugins/BaseSiteModules/underscore-custom.js
  var require_underscore_custom = __commonJS({
    "packages/shared/render/plugins/BaseSiteModules/underscore-custom.js"(exports, module) {
      "use strict";
      var $ = window.$;
      var tram = require_tram_min() && $.tram;
      module.exports = function() {
        var _ = {};
        _.VERSION = "1.6.0-Webflow";
        var breaker = {};
        var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;
        var push = ArrayProto.push, slice = ArrayProto.slice, concat = ArrayProto.concat, toString = ObjProto.toString, hasOwnProperty = ObjProto.hasOwnProperty;
        var nativeForEach = ArrayProto.forEach, nativeMap = ArrayProto.map, nativeReduce = ArrayProto.reduce, nativeReduceRight = ArrayProto.reduceRight, nativeFilter = ArrayProto.filter, nativeEvery = ArrayProto.every, nativeSome = ArrayProto.some, nativeIndexOf = ArrayProto.indexOf, nativeLastIndexOf = ArrayProto.lastIndexOf, nativeIsArray = Array.isArray, nativeKeys = Object.keys, nativeBind = FuncProto.bind;
        var each = _.each = _.forEach = function(obj, iterator, context) {
          if (obj == null)
            return obj;
          if (nativeForEach && obj.forEach === nativeForEach) {
            obj.forEach(iterator, context);
          } else if (obj.length === +obj.length) {
            for (var i = 0, length = obj.length; i < length; i++) {
              if (iterator.call(context, obj[i], i, obj) === breaker)
                return;
            }
          } else {
            var keys = _.keys(obj);
            for (var i = 0, length = keys.length; i < length; i++) {
              if (iterator.call(context, obj[keys[i]], keys[i], obj) === breaker)
                return;
            }
          }
          return obj;
        };
        _.map = _.collect = function(obj, iterator, context) {
          var results = [];
          if (obj == null)
            return results;
          if (nativeMap && obj.map === nativeMap)
            return obj.map(iterator, context);
          each(obj, function(value, index, list) {
            results.push(iterator.call(context, value, index, list));
          });
          return results;
        };
        _.find = _.detect = function(obj, predicate, context) {
          var result;
          any(obj, function(value, index, list) {
            if (predicate.call(context, value, index, list)) {
              result = value;
              return true;
            }
          });
          return result;
        };
        _.filter = _.select = function(obj, predicate, context) {
          var results = [];
          if (obj == null)
            return results;
          if (nativeFilter && obj.filter === nativeFilter)
            return obj.filter(predicate, context);
          each(obj, function(value, index, list) {
            if (predicate.call(context, value, index, list))
              results.push(value);
          });
          return results;
        };
        var any = _.some = _.any = function(obj, predicate, context) {
          predicate || (predicate = _.identity);
          var result = false;
          if (obj == null)
            return result;
          if (nativeSome && obj.some === nativeSome)
            return obj.some(predicate, context);
          each(obj, function(value, index, list) {
            if (result || (result = predicate.call(context, value, index, list)))
              return breaker;
          });
          return !!result;
        };
        _.contains = _.include = function(obj, target) {
          if (obj == null)
            return false;
          if (nativeIndexOf && obj.indexOf === nativeIndexOf)
            return obj.indexOf(target) != -1;
          return any(obj, function(value) {
            return value === target;
          });
        };
        _.delay = function(func, wait) {
          var args = slice.call(arguments, 2);
          return setTimeout(function() {
            return func.apply(null, args);
          }, wait);
        };
        _.defer = function(func) {
          return _.delay.apply(_, [func, 1].concat(slice.call(arguments, 1)));
        };
        _.throttle = function(func) {
          var wait, args, context;
          return function() {
            if (wait)
              return;
            wait = true;
            args = arguments;
            context = this;
            tram.frame(function() {
              wait = false;
              func.apply(context, args);
            });
          };
        };
        _.debounce = function(func, wait, immediate) {
          var timeout, args, context, timestamp, result;
          var later = function() {
            var last = _.now() - timestamp;
            if (last < wait) {
              timeout = setTimeout(later, wait - last);
            } else {
              timeout = null;
              if (!immediate) {
                result = func.apply(context, args);
                context = args = null;
              }
            }
          };
          return function() {
            context = this;
            args = arguments;
            timestamp = _.now();
            var callNow = immediate && !timeout;
            if (!timeout) {
              timeout = setTimeout(later, wait);
            }
            if (callNow) {
              result = func.apply(context, args);
              context = args = null;
            }
            return result;
          };
        };
        _.defaults = function(obj) {
          if (!_.isObject(obj))
            return obj;
          for (var i = 1, length = arguments.length; i < length; i++) {
            var source = arguments[i];
            for (var prop in source) {
              if (obj[prop] === void 0)
                obj[prop] = source[prop];
            }
          }
          return obj;
        };
        _.keys = function(obj) {
          if (!_.isObject(obj))
            return [];
          if (nativeKeys)
            return nativeKeys(obj);
          var keys = [];
          for (var key in obj)
            if (_.has(obj, key))
              keys.push(key);
          return keys;
        };
        _.has = function(obj, key) {
          return hasOwnProperty.call(obj, key);
        };
        _.isObject = function(obj) {
          return obj === Object(obj);
        };
        _.now = Date.now || function() {
          return (/* @__PURE__ */ new Date()).getTime();
        };
        _.templateSettings = {
          evaluate: /<%([\s\S]+?)%>/g,
          interpolate: /<%=([\s\S]+?)%>/g,
          escape: /<%-([\s\S]+?)%>/g
        };
        var noMatch = /(.)^/;
        var escapes = {
          "'": "'",
          "\\": "\\",
          "\r": "r",
          "\n": "n",
          "\u2028": "u2028",
          "\u2029": "u2029"
        };
        var escapeRegExp = /\\|'|\r|\n|\u2028|\u2029/g;
        var escapeChar = function(match) {
          return "\\" + escapes[match];
        };
        var bareIdentifier = /^\s*(\w|\$)+\s*$/;
        _.template = function(text, settings, oldSettings) {
          if (!settings && oldSettings)
            settings = oldSettings;
          settings = _.defaults({}, settings, _.templateSettings);
          var matcher = RegExp([(settings.escape || noMatch).source, (settings.interpolate || noMatch).source, (settings.evaluate || noMatch).source].join("|") + "|$", "g");
          var index = 0;
          var source = "__p+='";
          text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
            source += text.slice(index, offset).replace(escapeRegExp, escapeChar);
            index = offset + match.length;
            if (escape) {
              source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
            } else if (interpolate) {
              source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
            } else if (evaluate) {
              source += "';\n" + evaluate + "\n__p+='";
            }
            return match;
          });
          source += "';\n";
          var argument = settings.variable;
          if (argument) {
            if (!bareIdentifier.test(argument))
              throw new Error("variable is not a bare identifier: " + argument);
          } else {
            source = "with(obj||{}){\n" + source + "}\n";
            argument = "obj";
          }
          source = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + source + "return __p;\n";
          var render;
          try {
            render = new Function(settings.variable || "obj", "_", source);
          } catch (e) {
            e.source = source;
            throw e;
          }
          var template = function(data) {
            return render.call(this, data, _);
          };
          template.source = "function(" + argument + "){\n" + source + "}";
          return template;
        };
        return _;
      }();
    }
  });

  // packages/shared/render/plugins/BaseSiteModules/webflow-lib.js
  var require_webflow_lib = __commonJS({
    "packages/shared/render/plugins/BaseSiteModules/webflow-lib.js"(exports, module) {
      "use strict";
      var Webflow = {};
      var modules = {};
      var primary = [];
      var secondary = window.Webflow || [];
      var $ = window.jQuery;
      var $win = $(window);
      var $doc = $(document);
      var isFunction = $.isFunction;
      var _ = Webflow._ = require_underscore_custom();
      var tram = Webflow.tram = require_tram_min() && $.tram;
      var domready = false;
      var destroyed = false;
      tram.config.hideBackface = false;
      tram.config.keepInherited = true;
      Webflow.define = function(name, factory, options) {
        if (modules[name]) {
          unbindModule(modules[name]);
        }
        var instance = modules[name] = factory($, _, options) || {};
        bindModule(instance);
        return instance;
      };
      Webflow.require = function(name) {
        return modules[name];
      };
      function bindModule(module2) {
        if (Webflow.env()) {
          isFunction(module2.design) && $win.on("__wf_design", module2.design);
          isFunction(module2.preview) && $win.on("__wf_preview", module2.preview);
        }
        isFunction(module2.destroy) && $win.on("__wf_destroy", module2.destroy);
        if (module2.ready && isFunction(module2.ready)) {
          addReady(module2);
        }
      }
      function addReady(module2) {
        if (domready) {
          module2.ready();
          return;
        }
        if (_.contains(primary, module2.ready)) {
          return;
        }
        primary.push(module2.ready);
      }
      function unbindModule(module2) {
        isFunction(module2.design) && $win.off("__wf_design", module2.design);
        isFunction(module2.preview) && $win.off("__wf_preview", module2.preview);
        isFunction(module2.destroy) && $win.off("__wf_destroy", module2.destroy);
        if (module2.ready && isFunction(module2.ready)) {
          removeReady(module2);
        }
      }
      function removeReady(module2) {
        primary = _.filter(primary, function(readyFn) {
          return readyFn !== module2.ready;
        });
      }
      Webflow.push = function(ready) {
        if (domready) {
          isFunction(ready) && ready();
          return;
        }
        secondary.push(ready);
      };
      Webflow.env = function(mode) {
        var designFlag = window.__wf_design;
        var inApp = typeof designFlag !== "undefined";
        if (!mode) {
          return inApp;
        }
        if (mode === "design") {
          return inApp && designFlag;
        }
        if (mode === "preview") {
          return inApp && !designFlag;
        }
        if (mode === "slug") {
          return inApp && window.__wf_slug;
        }
        if (mode === "editor") {
          return window.WebflowEditor;
        }
        if (mode === "test") {
          return window.__wf_test;
        }
        if (mode === "frame") {
          return window !== window.top;
        }
      };
      var userAgent = navigator.userAgent.toLowerCase();
      var touch = Webflow.env.touch = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch;
      var chrome = Webflow.env.chrome = /chrome/.test(userAgent) && /Google/.test(navigator.vendor) && parseInt(userAgent.match(/chrome\/(\d+)\./)[1], 10);
      var ios = Webflow.env.ios = /(ipod|iphone|ipad)/.test(userAgent);
      Webflow.env.safari = /safari/.test(userAgent) && !chrome && !ios;
      var touchTarget;
      touch && $doc.on("touchstart mousedown", function(evt) {
        touchTarget = evt.target;
      });
      Webflow.validClick = touch ? function(clickTarget) {
        return clickTarget === touchTarget || $.contains(clickTarget, touchTarget);
      } : function() {
        return true;
      };
      var resizeEvents = "resize.webflow orientationchange.webflow load.webflow";
      var scrollEvents = "scroll.webflow " + resizeEvents;
      Webflow.resize = eventProxy($win, resizeEvents);
      Webflow.scroll = eventProxy($win, scrollEvents);
      Webflow.redraw = eventProxy();
      function eventProxy(target, types) {
        var handlers = [];
        var proxy = {};
        proxy.up = _.throttle(function(evt) {
          _.each(handlers, function(h) {
            h(evt);
          });
        });
        if (target && types) {
          target.on(types, proxy.up);
        }
        proxy.on = function(handler) {
          if (typeof handler !== "function") {
            return;
          }
          if (_.contains(handlers, handler)) {
            return;
          }
          handlers.push(handler);
        };
        proxy.off = function(handler) {
          if (!arguments.length) {
            handlers = [];
            return;
          }
          handlers = _.filter(handlers, function(h) {
            return h !== handler;
          });
        };
        return proxy;
      }
      Webflow.location = function(url) {
        window.location = url;
      };
      if (Webflow.env()) {
        Webflow.location = function() {
        };
      }
      Webflow.ready = function() {
        domready = true;
        if (destroyed) {
          restoreModules();
        } else {
          _.each(primary, callReady);
        }
        _.each(secondary, callReady);
        Webflow.resize.up();
      };
      function callReady(readyFn) {
        isFunction(readyFn) && readyFn();
      }
      function restoreModules() {
        destroyed = false;
        _.each(modules, bindModule);
      }
      var deferLoad;
      Webflow.load = function(handler) {
        deferLoad.then(handler);
      };
      function bindLoad() {
        if (deferLoad) {
          deferLoad.reject();
          $win.off("load", deferLoad.resolve);
        }
        deferLoad = new $.Deferred();
        $win.on("load", deferLoad.resolve);
      }
      Webflow.destroy = function(options) {
        options = options || {};
        destroyed = true;
        $win.triggerHandler("__wf_destroy");
        if (options.domready != null) {
          domready = options.domready;
        }
        _.each(modules, unbindModule);
        Webflow.resize.off();
        Webflow.scroll.off();
        Webflow.redraw.off();
        primary = [];
        secondary = [];
        if (deferLoad.state() === "pending") {
          bindLoad();
        }
      };
      $(Webflow.ready);
      bindLoad();
      module.exports = window.Webflow = Webflow;
    }
  });

  // packages/shared/render/plugins/BaseSiteModules/webflow-brand.js
  var require_webflow_brand = __commonJS({
    "packages/shared/render/plugins/BaseSiteModules/webflow-brand.js"(exports, module) {
      "use strict";
      var Webflow = require_webflow_lib();
      Webflow.define("brand", module.exports = function($) {
        var api = {};
        var doc = document;
        var $html = $("html");
        var $body = $("body");
        var namespace = ".w-webflow-badge";
        var location = window.location;
        var isPhantom = /PhantomJS/i.test(navigator.userAgent);
        var fullScreenEvents = "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange";
        var brandElement;
        api.ready = function() {
          var shouldBrand = $html.attr("data-wf-status");
          var publishedDomain = $html.attr("data-wf-domain") || "";
          if (/\.webflow\.io$/i.test(publishedDomain) && location.hostname !== publishedDomain) {
            shouldBrand = true;
          }
          if (shouldBrand && !isPhantom) {
            brandElement = brandElement || createBadge();
            ensureBrand();
            setTimeout(ensureBrand, 500);
            $(doc).off(fullScreenEvents, onFullScreenChange).on(fullScreenEvents, onFullScreenChange);
          }
        };
        function onFullScreenChange() {
          var fullScreen = doc.fullScreen || doc.mozFullScreen || doc.webkitIsFullScreen || doc.msFullscreenElement || Boolean(doc.webkitFullscreenElement);
          $(brandElement).attr("style", fullScreen ? "display: none !important;" : "");
        }
        function createBadge() {
          var $brand = $('<a class="w-webflow-badge"></a>').attr("href", "https://webflow.com?utm_campaign=brandjs");
          var $logoArt = $("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon-d2.89e12c322e.svg").attr("alt", "").css({
            marginRight: "4px",
            width: "26px"
          });
          var $logoText = $("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-text-d2.c82cec3b78.svg").attr("alt", "Made in Webflow");
          $brand.append($logoArt, $logoText);
          return $brand[0];
        }
        function ensureBrand() {
          var found = $body.children(namespace);
          var match = found.length && found.get(0) === brandElement;
          var inEditor = Webflow.env("editor");
          if (match) {
            if (inEditor) {
              found.remove();
            }
            return;
          }
          if (found.length) {
            found.remove();
          }
          if (!inEditor) {
            $body.append(brandElement);
          }
        }
        return api;
      });
    }
  });

  // packages/shared/render/plugins/BaseSiteModules/webflow-focus-visible.js
  var require_webflow_focus_visible = __commonJS({
    "packages/shared/render/plugins/BaseSiteModules/webflow-focus-visible.js"(exports, module) {
      "use strict";
      var Webflow = require_webflow_lib();
      Webflow.define("focus-visible", module.exports = function() {
        function applyFocusVisiblePolyfill(scope) {
          var hadKeyboardEvent = true;
          var hadFocusVisibleRecently = false;
          var hadFocusVisibleRecentlyTimeout = null;
          var inputTypesAllowlist = {
            text: true,
            search: true,
            url: true,
            tel: true,
            email: true,
            password: true,
            number: true,
            date: true,
            month: true,
            week: true,
            time: true,
            datetime: true,
            "datetime-local": true
          };
          function isValidFocusTarget(el) {
            if (el && el !== document && el.nodeName !== "HTML" && el.nodeName !== "BODY" && "classList" in el && "contains" in el.classList) {
              return true;
            }
            return false;
          }
          function focusTriggersKeyboardModality(el) {
            var type = el.type;
            var tagName = el.tagName;
            if (tagName === "INPUT" && inputTypesAllowlist[type] && !el.readOnly) {
              return true;
            }
            if (tagName === "TEXTAREA" && !el.readOnly) {
              return true;
            }
            if (el.isContentEditable) {
              return true;
            }
            return false;
          }
          function addFocusVisibleAttribute(el) {
            if (el.getAttribute("data-wf-focus-visible")) {
              return;
            }
            el.setAttribute("data-wf-focus-visible", "true");
          }
          function removeFocusVisibleAttribute(el) {
            if (!el.getAttribute("data-wf-focus-visible")) {
              return;
            }
            el.removeAttribute("data-wf-focus-visible");
          }
          function onKeyDown(e) {
            if (e.metaKey || e.altKey || e.ctrlKey) {
              return;
            }
            if (isValidFocusTarget(scope.activeElement)) {
              addFocusVisibleAttribute(scope.activeElement);
            }
            hadKeyboardEvent = true;
          }
          function onPointerDown() {
            hadKeyboardEvent = false;
          }
          function onFocus(e) {
            if (!isValidFocusTarget(e.target)) {
              return;
            }
            if (hadKeyboardEvent || focusTriggersKeyboardModality(e.target)) {
              addFocusVisibleAttribute(e.target);
            }
          }
          function onBlur(e) {
            if (!isValidFocusTarget(e.target)) {
              return;
            }
            if (e.target.hasAttribute("data-wf-focus-visible")) {
              hadFocusVisibleRecently = true;
              window.clearTimeout(hadFocusVisibleRecentlyTimeout);
              hadFocusVisibleRecentlyTimeout = window.setTimeout(function() {
                hadFocusVisibleRecently = false;
              }, 100);
              removeFocusVisibleAttribute(e.target);
            }
          }
          function onVisibilityChange() {
            if (document.visibilityState === "hidden") {
              if (hadFocusVisibleRecently) {
                hadKeyboardEvent = true;
              }
              addInitialPointerMoveListeners();
            }
          }
          function addInitialPointerMoveListeners() {
            document.addEventListener("mousemove", onInitialPointerMove);
            document.addEventListener("mousedown", onInitialPointerMove);
            document.addEventListener("mouseup", onInitialPointerMove);
            document.addEventListener("pointermove", onInitialPointerMove);
            document.addEventListener("pointerdown", onInitialPointerMove);
            document.addEventListener("pointerup", onInitialPointerMove);
            document.addEventListener("touchmove", onInitialPointerMove);
            document.addEventListener("touchstart", onInitialPointerMove);
            document.addEventListener("touchend", onInitialPointerMove);
          }
          function removeInitialPointerMoveListeners() {
            document.removeEventListener("mousemove", onInitialPointerMove);
            document.removeEventListener("mousedown", onInitialPointerMove);
            document.removeEventListener("mouseup", onInitialPointerMove);
            document.removeEventListener("pointermove", onInitialPointerMove);
            document.removeEventListener("pointerdown", onInitialPointerMove);
            document.removeEventListener("pointerup", onInitialPointerMove);
            document.removeEventListener("touchmove", onInitialPointerMove);
            document.removeEventListener("touchstart", onInitialPointerMove);
            document.removeEventListener("touchend", onInitialPointerMove);
          }
          function onInitialPointerMove(e) {
            if (e.target.nodeName && e.target.nodeName.toLowerCase() === "html") {
              return;
            }
            hadKeyboardEvent = false;
            removeInitialPointerMoveListeners();
          }
          document.addEventListener("keydown", onKeyDown, true);
          document.addEventListener("mousedown", onPointerDown, true);
          document.addEventListener("pointerdown", onPointerDown, true);
          document.addEventListener("touchstart", onPointerDown, true);
          document.addEventListener("visibilitychange", onVisibilityChange, true);
          addInitialPointerMoveListeners();
          scope.addEventListener("focus", onFocus, true);
          scope.addEventListener("blur", onBlur, true);
        }
        function ready() {
          if (typeof document !== "undefined") {
            try {
              document.querySelector(":focus-visible");
            } catch (e) {
              applyFocusVisiblePolyfill(document);
            }
          }
        }
        return {
          ready
        };
      });
    }
  });

  // packages/shared/render/plugins/BaseSiteModules/webflow-focus.js
  var require_webflow_focus = __commonJS({
    "packages/shared/render/plugins/BaseSiteModules/webflow-focus.js"(exports, module) {
      "use strict";
      var Webflow = require_webflow_lib();
      Webflow.define("focus", module.exports = function() {
        var capturedEvents = [];
        var capturing = false;
        function captureEvent(e) {
          if (capturing) {
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();
            capturedEvents.unshift(e);
          }
        }
        function isPolyfilledFocusEvent(e) {
          var el = e.target;
          var tag = el.tagName;
          return /^a$/i.test(tag) && el.href != null || // (A)
          /^(button|textarea)$/i.test(tag) && el.disabled !== true || // (B) (C)
          /^input$/i.test(tag) && /^(button|reset|submit|radio|checkbox)$/i.test(el.type) && !el.disabled || // (D)
          !/^(button|input|textarea|select|a)$/i.test(tag) && !Number.isNaN(Number.parseFloat(el.tabIndex)) || // (E)
          /^audio$/i.test(tag) || // (F)
          /^video$/i.test(tag) && el.controls === true;
        }
        function handler(e) {
          if (isPolyfilledFocusEvent(e)) {
            capturing = true;
            setTimeout(() => {
              capturing = false;
              e.target.focus();
              while (capturedEvents.length > 0) {
                var event = capturedEvents.pop();
                event.target.dispatchEvent(new MouseEvent(event.type, event));
              }
            }, 0);
          }
        }
        function ready() {
          if (typeof document !== "undefined" && document.body.hasAttribute("data-wf-focus-within") && Webflow.env.safari) {
            document.addEventListener("mousedown", handler, true);
            document.addEventListener("mouseup", captureEvent, true);
            document.addEventListener("click", captureEvent, true);
          }
        }
        return {
          ready
        };
      });
    }
  });

  // packages/shared/render/plugins/BaseSiteModules/webflow-ix-events.js
  var require_webflow_ix_events = __commonJS({
    "packages/shared/render/plugins/BaseSiteModules/webflow-ix-events.js"(exports, module) {
      "use strict";
      var $ = window.jQuery;
      var api = {};
      var eventQueue = [];
      var namespace = ".w-ix";
      var eventTriggers = {
        reset: function(i, el) {
          el.__wf_intro = null;
        },
        intro: function(i, el) {
          if (el.__wf_intro) {
            return;
          }
          el.__wf_intro = true;
          $(el).triggerHandler(api.types.INTRO);
        },
        outro: function(i, el) {
          if (!el.__wf_intro) {
            return;
          }
          el.__wf_intro = null;
          $(el).triggerHandler(api.types.OUTRO);
        }
      };
      api.triggers = {};
      api.types = {
        INTRO: "w-ix-intro" + namespace,
        OUTRO: "w-ix-outro" + namespace
      };
      api.init = function() {
        var count = eventQueue.length;
        for (var i = 0; i < count; i++) {
          var memo = eventQueue[i];
          memo[0](0, memo[1]);
        }
        eventQueue = [];
        $.extend(api.triggers, eventTriggers);
      };
      api.async = function() {
        for (var key in eventTriggers) {
          var func = eventTriggers[key];
          if (!eventTriggers.hasOwnProperty(key)) {
            continue;
          }
          api.triggers[key] = function(i, el) {
            eventQueue.push([func, el]);
          };
        }
      };
      api.async();
      module.exports = api;
    }
  });

  // packages/shared/render/plugins/BaseSiteModules/webflow-ix.js
  var require_webflow_ix = __commonJS({
    "packages/shared/render/plugins/BaseSiteModules/webflow-ix.js"(exports, module) {
      "use strict";
      var Webflow = require_webflow_lib();
      var IXEvents = require_webflow_ix_events();
      Webflow.define("ix", module.exports = function($, _) {
        var api = {};
        var designer;
        var $win = $(window);
        var namespace = ".w-ix";
        var tram = $.tram;
        var env = Webflow.env;
        var inApp = env();
        var emptyFix = env.chrome && env.chrome < 35;
        var transNone = "none 0s ease 0s";
        var $subs = $();
        var config = {};
        var anchors = [];
        var loads = [];
        var readys = [];
        var destroyed;
        var readyDelay = 1;
        var components = {
          tabs: ".w-tab-link, .w-tab-pane",
          dropdown: ".w-dropdown",
          slider: ".w-slide",
          navbar: ".w-nav"
        };
        api.init = function(list) {
          setTimeout(function() {
            configure(list);
          }, 1);
        };
        api.preview = function() {
          designer = false;
          readyDelay = 100;
          setTimeout(function() {
            configure(window.__wf_ix);
          }, 1);
        };
        api.design = function() {
          designer = true;
          api.destroy();
        };
        api.destroy = function() {
          destroyed = true;
          $subs.each(teardown);
          Webflow.scroll.off(scroll);
          IXEvents.async();
          anchors = [];
          loads = [];
          readys = [];
        };
        api.ready = function() {
          if (inApp) {
            return env("design") ? api.design() : api.preview();
          }
          if (config && destroyed) {
            destroyed = false;
            init();
          }
        };
        api.run = run;
        api.style = inApp ? styleApp : stylePub;
        function configure(list) {
          if (!list) {
            return;
          }
          config = {};
          _.each(list, function(item) {
            config[item.slug] = item.value;
          });
          init();
        }
        function init() {
          initIX1Engine();
          IXEvents.init();
          Webflow.redraw.up();
        }
        function initIX1Engine() {
          var els = $("[data-ix]");
          if (!els.length) {
            return;
          }
          els.each(teardown);
          els.each(build);
          if (anchors.length) {
            Webflow.scroll.on(scroll);
            setTimeout(scroll, 1);
          }
          if (loads.length) {
            Webflow.load(runLoads);
          }
          if (readys.length) {
            setTimeout(runReadys, readyDelay);
          }
        }
        function build(i, el) {
          var $el = $(el);
          var id = $el.attr("data-ix");
          var ix = config[id];
          if (!ix) {
            return;
          }
          var triggers = ix.triggers;
          if (!triggers) {
            return;
          }
          api.style($el, ix.style);
          _.each(triggers, function(trigger) {
            var state = {};
            var type = trigger.type;
            var stepsB = trigger.stepsB && trigger.stepsB.length;
            function runA() {
              run(trigger, $el, {
                group: "A"
              });
            }
            function runB() {
              run(trigger, $el, {
                group: "B"
              });
            }
            if (type === "load") {
              trigger.preload && !inApp ? loads.push(runA) : readys.push(runA);
              return;
            }
            if (type === "click") {
              $el.on("click" + namespace, function(evt) {
                if (!Webflow.validClick(evt.currentTarget)) {
                  return;
                }
                if ($el.attr("href") === "#") {
                  evt.preventDefault();
                }
                run(trigger, $el, {
                  group: state.clicked ? "B" : "A"
                });
                if (stepsB) {
                  state.clicked = !state.clicked;
                }
              });
              $subs = $subs.add($el);
              return;
            }
            if (type === "hover") {
              $el.on("mouseenter" + namespace, runA);
              $el.on("mouseleave" + namespace, runB);
              $subs = $subs.add($el);
              return;
            }
            if (type === "scroll") {
              anchors.push({
                el: $el,
                trigger,
                state: {
                  active: false
                },
                offsetTop: convert(trigger.offsetTop),
                offsetBot: convert(trigger.offsetBot)
              });
              return;
            }
            var proxy = components[type];
            if (proxy) {
              var $proxy = $el.closest(proxy);
              $proxy.on(IXEvents.types.INTRO, runA).on(IXEvents.types.OUTRO, runB);
              $subs = $subs.add($proxy);
              return;
            }
          });
        }
        function convert(offset) {
          if (!offset) {
            return 0;
          }
          offset = String(offset);
          var result = parseInt(offset, 10);
          if (result !== result) {
            return 0;
          }
          if (offset.indexOf("%") > 0) {
            result /= 100;
            if (result >= 1) {
              result = 0.999;
            }
          }
          return result;
        }
        function teardown(i, el) {
          $(el).off(namespace);
        }
        function scroll() {
          var viewTop = $win.scrollTop();
          var viewHeight = $win.height();
          var count = anchors.length;
          for (var i = 0; i < count; i++) {
            var anchor = anchors[i];
            var $el = anchor.el;
            var trigger = anchor.trigger;
            var stepsB = trigger.stepsB && trigger.stepsB.length;
            var state = anchor.state;
            var top = $el.offset().top;
            var height = $el.outerHeight();
            var offsetTop = anchor.offsetTop;
            var offsetBot = anchor.offsetBot;
            if (offsetTop < 1 && offsetTop > 0) {
              offsetTop *= viewHeight;
            }
            if (offsetBot < 1 && offsetBot > 0) {
              offsetBot *= viewHeight;
            }
            var active = top + height - offsetTop >= viewTop && top + offsetBot <= viewTop + viewHeight;
            if (active === state.active) {
              continue;
            }
            if (active === false && !stepsB) {
              continue;
            }
            state.active = active;
            run(trigger, $el, {
              group: active ? "A" : "B"
            });
          }
        }
        function runLoads() {
          var count = loads.length;
          for (var i = 0; i < count; i++) {
            loads[i]();
          }
        }
        function runReadys() {
          var count = readys.length;
          for (var i = 0; i < count; i++) {
            readys[i]();
          }
        }
        function run(trigger, $el, opts, replay) {
          opts = opts || {};
          var done = opts.done;
          var preserve3d = trigger.preserve3d;
          if (designer && !opts.force) {
            return;
          }
          var group = opts.group || "A";
          var loop = trigger["loop" + group];
          var steps = trigger["steps" + group];
          if (!steps || !steps.length) {
            return;
          }
          if (steps.length < 2) {
            loop = false;
          }
          if (!replay) {
            var selector = trigger.selector;
            if (selector) {
              if (trigger.descend) {
                $el = $el.find(selector);
              } else if (trigger.siblings) {
                $el = $el.siblings(selector);
              } else {
                $el = $(selector);
              }
              if (inApp) {
                $el.attr("data-ix-affect", 1);
              }
            }
            if (emptyFix) {
              $el.addClass("w-ix-emptyfix");
            }
            if (preserve3d) {
              $el.css("transform-style", "preserve-3d");
            }
          }
          var _tram = tram($el);
          var meta = {
            omit3d: !preserve3d
          };
          for (var i = 0; i < steps.length; i++) {
            addStep(_tram, steps[i], meta);
          }
          function fin() {
            if (loop) {
              return run(trigger, $el, opts, true);
            }
            if (meta.width === "auto") {
              _tram.set({
                width: "auto"
              });
            }
            if (meta.height === "auto") {
              _tram.set({
                height: "auto"
              });
            }
            done && done();
          }
          meta.start ? _tram.then(fin) : fin();
        }
        function addStep(_tram, step, meta) {
          var addMethod = "add";
          var startMethod = "start";
          if (meta.start) {
            addMethod = startMethod = "then";
          }
          var transitions = step.transition;
          if (transitions) {
            transitions = transitions.split(",");
            for (var i = 0; i < transitions.length; i++) {
              var transition = transitions[i];
              _tram[addMethod](transition);
            }
          }
          var clean = tramify(step, meta) || {};
          if (clean.width != null) {
            meta.width = clean.width;
          }
          if (clean.height != null) {
            meta.height = clean.height;
          }
          if (transitions == null) {
            if (meta.start) {
              _tram.then(function() {
                var queue = this.queue;
                this.set(clean);
                if (clean.display) {
                  _tram.redraw();
                  Webflow.redraw.up();
                }
                this.queue = queue;
                this.next();
              });
            } else {
              _tram.set(clean);
              if (clean.display) {
                _tram.redraw();
                Webflow.redraw.up();
              }
            }
            var wait = clean.wait;
            if (wait != null) {
              _tram.wait(wait);
              meta.start = true;
            }
          } else {
            if (clean.display) {
              var display = clean.display;
              delete clean.display;
              if (meta.start) {
                _tram.then(function() {
                  var queue = this.queue;
                  this.set({
                    display
                  }).redraw();
                  Webflow.redraw.up();
                  this.queue = queue;
                  this.next();
                });
              } else {
                _tram.set({
                  display
                }).redraw();
                Webflow.redraw.up();
              }
            }
            _tram[startMethod](clean);
            meta.start = true;
          }
        }
        function styleApp(el, data) {
          var _tram = tram(el);
          if ($.isEmptyObject(data)) {
            return;
          }
          el.css("transition", "");
          var computed = el.css("transition");
          if (computed === transNone) {
            computed = _tram.upstream = null;
          }
          _tram.upstream = transNone;
          _tram.set(tramify(data));
          _tram.upstream = computed;
        }
        function stylePub(el, data) {
          tram(el).set(tramify(data));
        }
        function tramify(obj, meta) {
          var omit3d = meta && meta.omit3d;
          var result = {};
          var found = false;
          for (var key in obj) {
            if (key === "transition") {
              continue;
            }
            if (key === "keysort") {
              continue;
            }
            if (omit3d) {
              if (key === "z" || key === "rotateX" || key === "rotateY" || key === "scaleZ") {
                continue;
              }
            }
            result[key] = obj[key];
            found = true;
          }
          return found ? result : null;
        }
        return api;
      });
    }
  });

  // packages/shared/render/plugins/BaseSiteModules/webflow-links.js
  var require_webflow_links = __commonJS({
    "packages/shared/render/plugins/BaseSiteModules/webflow-links.js"(exports, module) {
      "use strict";
      var Webflow = require_webflow_lib();
      Webflow.define("links", module.exports = function($, _) {
        var api = {};
        var $win = $(window);
        var designer;
        var inApp = Webflow.env();
        var location = window.location;
        var tempLink = document.createElement("a");
        var linkCurrent = "w--current";
        var indexPage = /index\.(html|php)$/;
        var dirList = /\/$/;
        var anchors;
        var slug;
        api.ready = api.design = api.preview = init;
        function init() {
          designer = inApp && Webflow.env("design");
          slug = Webflow.env("slug") || location.pathname || "";
          Webflow.scroll.off(scroll);
          anchors = [];
          var links = document.links;
          for (var i = 0; i < links.length; ++i) {
            select(links[i]);
          }
          if (anchors.length) {
            Webflow.scroll.on(scroll);
            scroll();
          }
        }
        function select(link) {
          if (link.getAttribute("hreflang")) {
            return;
          }
          var href = designer && link.getAttribute("href-disabled") || link.getAttribute("href");
          tempLink.href = href;
          if (href.indexOf(":") >= 0) {
            return;
          }
          var $link = $(link);
          if (tempLink.hash.length > 1 && tempLink.host + tempLink.pathname === location.host + location.pathname) {
            if (!/^#[a-zA-Z0-9\-\_]+$/.test(tempLink.hash)) {
              return;
            }
            var $section = $(tempLink.hash);
            $section.length && anchors.push({
              link: $link,
              sec: $section,
              active: false
            });
            return;
          }
          if (href === "#" || href === "") {
            return;
          }
          var match = tempLink.href === location.href || href === slug || indexPage.test(href) && dirList.test(slug);
          setClass($link, linkCurrent, match);
        }
        function scroll() {
          var viewTop = $win.scrollTop();
          var viewHeight = $win.height();
          _.each(anchors, function(anchor) {
            if (anchor.link.attr("hreflang")) {
              return;
            }
            var $link = anchor.link;
            var $section = anchor.sec;
            var top = $section.offset().top;
            var height = $section.outerHeight();
            var offset = viewHeight * 0.5;
            var active = $section.is(":visible") && top + height - offset >= viewTop && top + offset <= viewTop + viewHeight;
            if (anchor.active === active) {
              return;
            }
            anchor.active = active;
            setClass($link, linkCurrent, active);
          });
        }
        function setClass($elem, className, add) {
          var exists = $elem.hasClass(className);
          if (add && exists) {
            return;
          }
          if (!add && !exists) {
            return;
          }
          add ? $elem.addClass(className) : $elem.removeClass(className);
        }
        return api;
      });
    }
  });

  // packages/shared/render/plugins/BaseSiteModules/webflow-scroll.js
  var require_webflow_scroll = __commonJS({
    "packages/shared/render/plugins/BaseSiteModules/webflow-scroll.js"(exports, module) {
      "use strict";
      var Webflow = require_webflow_lib();
      Webflow.define("scroll", module.exports = function($) {
        var NS_EVENTS = {
          WF_CLICK_EMPTY: "click.wf-empty-link",
          WF_CLICK_SCROLL: "click.wf-scroll"
        };
        var loc = window.location;
        var history = inIframe() ? null : window.history;
        var $win = $(window);
        var $doc = $(document);
        var $body = $(document.body);
        var animate = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function(fn) {
          window.setTimeout(fn, 15);
        };
        var rootTag = Webflow.env("editor") ? ".w-editor-body" : "body";
        var headerSelector = "header, " + rootTag + " > .header, " + rootTag + " > .w-nav:not([data-no-scroll])";
        var emptyHrefSelector = 'a[href="#"]';
        var localHrefSelector = 'a[href*="#"]:not(.w-tab-link):not(' + emptyHrefSelector + ")";
        var scrollTargetOutlineCSS = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}';
        var focusStylesEl = document.createElement("style");
        focusStylesEl.appendChild(document.createTextNode(scrollTargetOutlineCSS));
        function inIframe() {
          try {
            return Boolean(window.frameElement);
          } catch (e) {
            return true;
          }
        }
        var validHash = /^#[a-zA-Z0-9][\w:.-]*$/;
        function linksToCurrentPage(link) {
          return validHash.test(link.hash) && link.host + link.pathname === loc.host + loc.pathname;
        }
        const reducedMotionMediaQuery = typeof window.matchMedia === "function" && window.matchMedia("(prefers-reduced-motion: reduce)");
        function reducedMotionEnabled() {
          return document.body.getAttribute("data-wf-scroll-motion") === "none" || reducedMotionMediaQuery.matches;
        }
        function setFocusable($el, action) {
          var initialTabindex;
          switch (action) {
            case "add":
              initialTabindex = $el.attr("tabindex");
              if (initialTabindex) {
                $el.attr("data-wf-tabindex-swap", initialTabindex);
              } else {
                $el.attr("tabindex", "-1");
              }
              break;
            case "remove":
              initialTabindex = $el.attr("data-wf-tabindex-swap");
              if (initialTabindex) {
                $el.attr("tabindex", initialTabindex);
                $el.removeAttr("data-wf-tabindex-swap");
              } else {
                $el.removeAttr("tabindex");
              }
              break;
          }
          $el.toggleClass("wf-force-outline-none", action === "add");
        }
        function validateScroll(evt) {
          var target = evt.currentTarget;
          if (
            // Bail if in Designer
            Webflow.env("design") || // Ignore links being used by jQuery mobile
            window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(target.className)
          ) {
            return;
          }
          var hash = linksToCurrentPage(target) ? target.hash : "";
          if (hash === "")
            return;
          var $el = $(hash);
          if (!$el.length) {
            return;
          }
          if (evt) {
            evt.preventDefault();
            evt.stopPropagation();
          }
          updateHistory(hash, evt);
          window.setTimeout(function() {
            scroll($el, function setFocus() {
              setFocusable($el, "add");
              $el.get(0).focus({
                preventScroll: true
              });
              setFocusable($el, "remove");
            });
          }, evt ? 0 : 300);
        }
        function updateHistory(hash) {
          if (loc.hash !== hash && history && history.pushState && // Navigation breaks Chrome when the protocol is `file:`.
          !(Webflow.env.chrome && loc.protocol === "file:")) {
            var oldHash = history.state && history.state.hash;
            if (oldHash !== hash) {
              history.pushState({
                hash
              }, "", hash);
            }
          }
        }
        function scroll($targetEl, cb) {
          var start = $win.scrollTop();
          var end = calculateScrollEndPosition($targetEl);
          if (start === end)
            return;
          var duration = calculateScrollDuration($targetEl, start, end);
          var clock = Date.now();
          var step = function() {
            var elapsed = Date.now() - clock;
            window.scroll(0, getY(start, end, elapsed, duration));
            if (elapsed <= duration) {
              animate(step);
            } else if (typeof cb === "function") {
              cb();
            }
          };
          animate(step);
        }
        function calculateScrollEndPosition($targetEl) {
          var $header = $(headerSelector);
          var offsetY = $header.css("position") === "fixed" ? $header.outerHeight() : 0;
          var end = $targetEl.offset().top - offsetY;
          if ($targetEl.data("scroll") === "mid") {
            var available = $win.height() - offsetY;
            var elHeight = $targetEl.outerHeight();
            if (elHeight < available) {
              end -= Math.round((available - elHeight) / 2);
            }
          }
          return end;
        }
        function calculateScrollDuration($targetEl, start, end) {
          if (reducedMotionEnabled())
            return 0;
          var mult = 1;
          $body.add($targetEl).each(function(_, el) {
            var time = parseFloat(el.getAttribute("data-scroll-time"));
            if (!isNaN(time) && time >= 0) {
              mult = time;
            }
          });
          return (472.143 * Math.log(Math.abs(start - end) + 125) - 2e3) * mult;
        }
        function getY(start, end, elapsed, duration) {
          if (elapsed > duration) {
            return end;
          }
          return start + (end - start) * ease(elapsed / duration);
        }
        function ease(t) {
          return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
        }
        function ready() {
          var {
            WF_CLICK_EMPTY,
            WF_CLICK_SCROLL
          } = NS_EVENTS;
          $doc.on(WF_CLICK_SCROLL, localHrefSelector, validateScroll);
          $doc.on(WF_CLICK_EMPTY, emptyHrefSelector, function(e) {
            e.preventDefault();
          });
          document.head.insertBefore(focusStylesEl, document.head.firstChild);
        }
        return {
          ready
        };
      });
    }
  });

  // packages/shared/render/plugins/BaseSiteModules/webflow-touch.js
  var require_webflow_touch = __commonJS({
    "packages/shared/render/plugins/BaseSiteModules/webflow-touch.js"(exports, module) {
      "use strict";
      var Webflow = require_webflow_lib();
      Webflow.define("touch", module.exports = function($) {
        var api = {};
        var getSelection = window.getSelection;
        $.event.special.tap = {
          bindType: "click",
          delegateType: "click"
        };
        api.init = function(el) {
          el = typeof el === "string" ? $(el).get(0) : el;
          return el ? new Touch(el) : null;
        };
        function Touch(el) {
          var active = false;
          var useTouch = false;
          var thresholdX = Math.min(Math.round(window.innerWidth * 0.04), 40);
          var startX;
          var lastX;
          el.addEventListener("touchstart", start, false);
          el.addEventListener("touchmove", move, false);
          el.addEventListener("touchend", end, false);
          el.addEventListener("touchcancel", cancel, false);
          el.addEventListener("mousedown", start, false);
          el.addEventListener("mousemove", move, false);
          el.addEventListener("mouseup", end, false);
          el.addEventListener("mouseout", cancel, false);
          function start(evt) {
            var touches = evt.touches;
            if (touches && touches.length > 1) {
              return;
            }
            active = true;
            if (touches) {
              useTouch = true;
              startX = touches[0].clientX;
            } else {
              startX = evt.clientX;
            }
            lastX = startX;
          }
          function move(evt) {
            if (!active) {
              return;
            }
            if (useTouch && evt.type === "mousemove") {
              evt.preventDefault();
              evt.stopPropagation();
              return;
            }
            var touches = evt.touches;
            var x = touches ? touches[0].clientX : evt.clientX;
            var velocityX = x - lastX;
            lastX = x;
            if (Math.abs(velocityX) > thresholdX && getSelection && String(getSelection()) === "") {
              triggerEvent("swipe", evt, {
                direction: velocityX > 0 ? "right" : "left"
              });
              cancel();
            }
          }
          function end(evt) {
            if (!active) {
              return;
            }
            active = false;
            if (useTouch && evt.type === "mouseup") {
              evt.preventDefault();
              evt.stopPropagation();
              useTouch = false;
              return;
            }
          }
          function cancel() {
            active = false;
          }
          function destroy() {
            el.removeEventListener("touchstart", start, false);
            el.removeEventListener("touchmove", move, false);
            el.removeEventListener("touchend", end, false);
            el.removeEventListener("touchcancel", cancel, false);
            el.removeEventListener("mousedown", start, false);
            el.removeEventListener("mousemove", move, false);
            el.removeEventListener("mouseup", end, false);
            el.removeEventListener("mouseout", cancel, false);
            el = null;
          }
          this.destroy = destroy;
        }
        function triggerEvent(type, evt, data) {
          var newEvent = $.Event(type, {
            originalEvent: evt
          });
          $(evt.target).trigger(newEvent, data);
        }
        api.instance = api.init(document);
        return api;
      });
    }
  });

  // <stdin>
  require_webflow_brand();
  require_webflow_focus_visible();
  require_webflow_focus();
  require_webflow_ix_events();
  require_webflow_ix();
  require_webflow_links();
  require_webflow_scroll();
  require_webflow_touch();
})();
/*!
 * tram.js v0.8.2-global
 * Cross-browser CSS3 transitions in JavaScript
 * https://github.com/bkwld/tram
 * MIT License
 */
/*!
 * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
 *
 * http://underscorejs.org
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
 * @license MIT
 */
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions: Init
 */
Webflow.require('ix').init([
  {"slug":"new-interaction","name":"New Interaction","value":{"style":{},"triggers":[]}}
]);
