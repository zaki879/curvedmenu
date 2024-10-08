(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [931],
  {
    9904: function (t, e, n) {
      Promise.resolve().then(n.bind(n, 1429));
    },
    1429: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          default: function () {
            return tc;
          },
        });
      var i,
        r = n(7437),
        s = n(8358),
        o = n.n(s),
        a = n(2265),
        l = n(816),
        u = n.n(l),
        h = n(8733);
      function c(t) {
        let { children: e } = t,
          n = (0, a.useRef)(null),
          [i, s] = (0, a.useState)({ x: 0, y: 0 }),
          { x: o, y: l } = i;
        return (0, r.jsx)(h.E.div, {
          style: { position: "relative" },
          ref: n,
          onMouseMove: (t) => {
            let { clientX: e, clientY: i } = t,
              {
                height: r,
                width: o,
                left: a,
                top: l,
              } = n.current.getBoundingClientRect();
            s({ x: 0.1 * (e - (a + o / 2)), y: 0.1 * (i - (l + r / 2)) });
          },
          onMouseLeave: () => {
            s({ x: 0, y: 0 });
          },
          animate: { x: o, y: l },
          transition: { type: "spring", stiffness: 350, damping: 5, mass: 0.5 },
          children: e,
        });
      }
      let d = (0, a.forwardRef)(function (t, e) {
        let { isActive: n } = t;
        return (0,
        r.jsx)("div", { className: u().header, children: (0, r.jsx)(c, { children: (0, r.jsxs)("div", { className: "".concat(u().burger, " ").concat(n ? u().active : ""), children: [(0, r.jsx)("div", { ref: e, className: u().bounds }), (0, r.jsx)("span", { className: "".concat(u().text, " ").concat(u().menu), children: "Menu" }), (0, r.jsx)("span", { className: "".concat(u().text, " ").concat(u().close), children: "Close" })] }) }) });
      });
      var f = n(4101),
        p = n(5968),
        m = n(961);
      function v(t) {
        let e = (0, m.h)(() => (0, f.BX)(t)),
          { isStatic: n } = (0, a.useContext)(p._);
        if (n) {
          let [, n] = (0, a.useState)(t);
          (0, a.useEffect)(() => e.on("change", n), []);
        }
        return e;
      }
      var g = n(5735),
        y = n(538),
        x = n(1705),
        P = n(1356),
        w = n(3041);
      function b(t, e = {}) {
        let { isStatic: n } = (0, a.useContext)(p._),
          i = (0, a.useRef)(null),
          r = v((0, g.i)(t) ? t.get() : t),
          s = () => {
            i.current && i.current.stop();
          };
        return (
          (0, a.useInsertionEffect)(
            () =>
              r.attach((t, o) => {
                if (n) return o(t);
                if (
                  (s(),
                  (i.current = (0, x.y)({
                    keyframes: [r.get(), t],
                    velocity: r.getVelocity(),
                    type: "spring",
                    restDelta: 0.001,
                    restSpeed: 0.01,
                    ...e,
                    onUpdate: o,
                  })),
                  !w.frameData.isProcessing)
                ) {
                  let t = performance.now() - w.frameData.timestamp;
                  t < 30 && (i.current.time = (0, P.X)(t));
                }
                return r.get();
              }, s),
            [JSON.stringify(e)]
          ),
          (0, y.L)(() => {
            if ((0, g.i)(t)) return t.on("change", (t) => r.set(parseFloat(t)));
          }, [r]),
          r
        );
      }
      var A = n(6567);
      function T(t, e, n) {
        var i;
        if ("string" == typeof t) {
          let r = document;
          e &&
            ((0, A.k)(!!e.current, "Scope provided, but no element detected."),
            (r = e.current)),
            n
              ? ((null !== (i = n[t]) && void 0 !== i) ||
                  (n[t] = r.querySelectorAll(t)),
                (t = n[t]))
              : (t = r.querySelectorAll(t));
        } else t instanceof Element && (t = [t]);
        return Array.from(t || []);
      }
      var C = n(4900),
        E = n(9648);
      let S = (0, E.X)(() => void 0 !== window.ScrollTimeline);
      class V {
        constructor(t) {
          this.animations = t.filter(Boolean);
        }
        then(t, e) {
          return Promise.all(this.animations).then(t).catch(e);
        }
        getAll(t) {
          return this.animations[0][t];
        }
        setAll(t, e) {
          for (let n = 0; n < this.animations.length; n++)
            this.animations[n][t] = e;
        }
        attachTimeline(t) {
          let e = this.animations.map((e) => {
            if (!S() || !e.attachTimeline)
              return (
                e.pause(),
                (function (t, e) {
                  let n;
                  let i = () => {
                    let { currentTime: i } = e,
                      r = null === i ? 0 : i.value,
                      s = r / 100;
                    n !== s && t(s), (n = s);
                  };
                  return w.Wi.update(i, !0), () => (0, w.Pn)(i);
                })((t) => {
                  e.time = e.duration * t;
                }, t)
              );
            e.attachTimeline(t);
          });
          return () => {
            e.forEach((t, e) => {
              t && t(), this.animations[e].stop();
            });
          };
        }
        get time() {
          return this.getAll("time");
        }
        set time(t) {
          this.setAll("time", t);
        }
        get speed() {
          return this.getAll("speed");
        }
        set speed(t) {
          this.setAll("speed", t);
        }
        get duration() {
          let t = 0;
          for (let e = 0; e < this.animations.length; e++)
            t = Math.max(t, this.animations[e].duration);
          return t;
        }
        runAll(t) {
          this.animations.forEach((e) => e[t]());
        }
        play() {
          this.runAll("play");
        }
        pause() {
          this.runAll("pause");
        }
        stop() {
          this.runAll("stop");
        }
        cancel() {
          this.runAll("cancel");
        }
        complete() {
          this.runAll("complete");
        }
      }
      var M = n(5430),
        D = n(4457),
        R = n(2210),
        k = n(4478),
        L = n(4854),
        j = n(3816),
        B = n(1064),
        F = n(9448),
        O = n(4233),
        W = n(2868);
      function N(t, e, n, i) {
        var r;
        return "number" == typeof e
          ? e
          : e.startsWith("-") || e.startsWith("+")
          ? Math.max(0, t + parseFloat(e))
          : "<" === e
          ? n
          : null !== (r = i.get(e)) && void 0 !== r
          ? r
          : t;
      }
      let $ = (t, e, n) => {
        let i = e - t;
        return ((((n - t) % i) + i) % i) + t;
      };
      var I = n(7565),
        _ = n(7081),
        U = n(7);
      function H(t, e) {
        return t.at !== e.at
          ? t.at - e.at
          : null === t.value
          ? 1
          : null === e.value
          ? -1
          : 0;
      }
      function z(t, e) {
        return e.has(t) || e.set(t, {}), e.get(t);
      }
      function X(t, e) {
        return e[t] || (e[t] = []), e[t];
      }
      let Y = (t) => "number" == typeof t,
        Z = (t) => t.every(Y);
      function G(t, e, n, i) {
        let r = T(t, i),
          s = r.length;
        (0, A.k)(!!s, "No valid element provided.");
        let o = [];
        for (let t = 0; t < s; t++) {
          let i = r[t];
          C.R.has(i) ||
            (function (t) {
              let e = {
                  presenceContext: null,
                  props: {},
                  visualState: {
                    renderState: {
                      transform: {},
                      transformOrigin: {},
                      style: {},
                      vars: {},
                      attrs: {},
                    },
                    latestValues: {},
                  },
                },
                n = (0, D.v)(t)
                  ? new R.e(e, { enableHardwareAcceleration: !1 })
                  : new k.W(e, { enableHardwareAcceleration: !0 });
              n.mount(t), C.R.set(t, n);
            })(i);
          let a = C.R.get(i),
            l = { ...n };
          "function" == typeof l.delay && (l.delay = l.delay(t, s)),
            o.push(...(0, M.w)(a, { ...e, transition: l }, {}));
        }
        return new V(o);
      }
      let q = (t) => Array.isArray(t) && Array.isArray(t[0]),
        K = function (t, e, n) {
          let r;
          return (
            (r = q(t)
              ? (function (t, e, n) {
                  let i = [],
                    r = (function (
                      t,
                      { defaultTransition: e = {}, ...n } = {},
                      i
                    ) {
                      let r = e.duration || 0.3,
                        s = new Map(),
                        o = new Map(),
                        a = {},
                        l = new Map(),
                        u = 0,
                        h = 0,
                        c = 0;
                      for (let n = 0; n < t.length; n++) {
                        let s = t[n];
                        if ("string" == typeof s) {
                          l.set(s, h);
                          continue;
                        }
                        if (!Array.isArray(s)) {
                          l.set(s.name, N(h, s.at, u, l));
                          continue;
                        }
                        let [d, f, p = {}] = s;
                        void 0 !== p.at && (h = N(h, p.at, u, l));
                        let m = 0,
                          v = (t, n, i, s = 0, o = 0) => {
                            let a = Array.isArray(t) ? t : [t],
                              {
                                delay: l = 0,
                                times: u = (0, F.Y)(a),
                                type: d = "keyframes",
                                ...f
                              } = n,
                              { ease: p = e.ease || "easeOut", duration: v } =
                                n,
                              g = "function" == typeof l ? l(s, o) : l,
                              y = a.length;
                            if (y <= 2 && "spring" === d) {
                              let t = 100;
                              if (2 === y && Z(a)) {
                                let e = a[1] - a[0];
                                t = Math.abs(e);
                              }
                              let e = { ...f };
                              void 0 !== v && (e.duration = (0, P.w)(v));
                              let n = (function (t, e = 100) {
                                let n = (0, j.S)({ keyframes: [0, e], ...t }),
                                  i = Math.min((0, B.i)(n), B.E);
                                return {
                                  type: "keyframes",
                                  ease: (t) => n.next(i * t).value / e,
                                  duration: (0, P.X)(i),
                                };
                              })(e, t);
                              (p = n.ease), (v = n.duration);
                            }
                            null != v || (v = r);
                            let x = h + g,
                              w = x + v;
                            1 === u.length && 0 === u[0] && (u[1] = 1);
                            let b = u.length - a.length;
                            b > 0 && (0, O.c)(u, b),
                              1 === a.length && a.unshift(null),
                              (function (t, e, n, i, r, s) {
                                !(function (t, e, n) {
                                  for (let i = 0; i < t.length; i++) {
                                    let r = t[i];
                                    r.at > e &&
                                      r.at < n &&
                                      ((0, _.cl)(t, r), i--);
                                  }
                                })(t, r, s);
                                for (let a = 0; a < e.length; a++) {
                                  var o;
                                  t.push({
                                    value: e[a],
                                    at: (0, U.C)(r, s, i[a]),
                                    easing:
                                      ((o = a),
                                      (0, I.N)(n) ? n[$(0, n.length, o)] : n),
                                  });
                                }
                              })(i, a, p, u, x, w),
                              (m = Math.max(g + v, m)),
                              (c = Math.max(w, c));
                          };
                        if ((0, g.i)(d)) {
                          let t = z(d, o);
                          v(f, p, X("default", t));
                        } else {
                          let t = T(d, i, a),
                            e = t.length;
                          for (let n = 0; n < e; n++) {
                            let i = t[n],
                              r = z(i, o);
                            for (let t in f)
                              v(
                                f[t],
                                p[t] ? { ...p, ...p[t] } : { ...p },
                                X(t, r),
                                n,
                                e
                              );
                          }
                        }
                        (u = h), (h += m);
                      }
                      return (
                        o.forEach((t, i) => {
                          for (let r in t) {
                            let o = t[r];
                            o.sort(H);
                            let a = [],
                              l = [],
                              u = [];
                            for (let t = 0; t < o.length; t++) {
                              let { at: e, value: n, easing: i } = o[t];
                              a.push(n),
                                l.push((0, W.Y)(0, c, e)),
                                u.push(i || "easeOut");
                            }
                            0 !== l[0] &&
                              (l.unshift(0),
                              a.unshift(a[0]),
                              u.unshift("easeInOut")),
                              1 !== l[l.length - 1] &&
                                (l.push(1), a.push(null)),
                              s.has(i) ||
                                s.set(i, { keyframes: {}, transition: {} });
                            let h = s.get(i);
                            (h.keyframes[r] = a),
                              (h.transition[r] = {
                                ...e,
                                duration: c,
                                ease: u,
                                times: l,
                                ...n,
                              });
                          }
                        }),
                        s
                      );
                    })(t, e, n);
                  return (
                    r.forEach(({ keyframes: t, transition: e }, n) => {
                      let r;
                      (r = (0, g.i)(n)
                        ? (0, L.D)(n, t.default, e.default)
                        : G(n, t, e)),
                        i.push(r);
                    }),
                    new V(i)
                  );
                })(t, e, i)
              : "object" != typeof e || Array.isArray(e)
              ? (0, L.D)(t, e, n)
              : G(t, e, n, i)),
            i && i.animations.push(r),
            r
          );
        };
      var J = n(3245);
      let Q = (t) => t && "object" == typeof t && t.mix,
        tt = (t) => (Q(t) ? t.mix : void 0);
      function te(...t) {
        let e = !Array.isArray(t[0]),
          n = e ? 0 : -1,
          i = t[0 + n],
          r = t[1 + n],
          s = t[2 + n],
          o = t[3 + n],
          a = (0, J.s)(r, s, { mixer: tt(s[0]), ...o });
        return e ? a(i) : a;
      }
      var tn = n(3854),
        ti = n.n(tn);
      function tr(t) {
        let { stickyElement: e } = t,
          [n, i] = (0, a.useState)(!1),
          s = (0, a.useRef)(null),
          o = n ? 60 : 15,
          l = { x: v(0), y: v(0) },
          u = { x: v(1), y: v(1) },
          c = { damping: 20, stiffness: 300, mass: 0.5 },
          d = { x: b(l.x, c), y: b(l.y, c) },
          f = (0, a.useCallback)((t) => {
            let e = Math.atan2(t.y, t.x);
            K(s.current, { rotate: "".concat(e, "rad") }, { duration: 0 });
          }, []),
          p = (0, a.useCallback)(
            (t) => {
              let { clientX: i, clientY: r } = t,
                {
                  left: s,
                  top: a,
                  height: h,
                  width: c,
                } = e.current.getBoundingClientRect(),
                d = { x: s + c / 2, y: a + h / 2 };
              if (n) {
                let t = { x: i - d.x, y: r - d.y };
                f(t);
                let e = Math.max(Math.abs(t.x), Math.abs(t.y)),
                  n = te(e, [0, h / 2], [1, 1.3]),
                  s = te(e, [0, c / 2], [1, 0.8]);
                u.x.set(n),
                  u.y.set(s),
                  l.x.set(d.x - o / 2 + 0.1 * t.x),
                  l.y.set(d.y - o / 2 + 0.1 * t.y);
              } else l.x.set(i - o / 2), l.y.set(r - o / 2);
            },
            [n, f, u.x, u.y, e, o]
          ),
          m = (0, a.useCallback)(() => {
            i(!0);
          }, []),
          g = (0, a.useCallback)(() => {
            i(!1),
              K(
                s.current,
                { scaleX: 1, scaleY: 1 },
                { duration: 0.1 },
                { type: "spring" }
              );
          }, []);
        return (
          (0, a.useEffect)(() => {
            let t = e.current;
            return (
              t &&
                (t.addEventListener("mouseenter", m),
                t.addEventListener("mouseleave", g)),
              window.addEventListener("mousemove", p),
              () => {
                t &&
                  (t.removeEventListener("mouseenter", m),
                  t.removeEventListener("mouseleave", g)),
                  window.removeEventListener("mousemove", p);
              }
            );
          }, [e, m, g, p]),
          (0, r.jsx)("div", {
            className: ti().cursorContainer,
            children: (0, r.jsx)(h.E.div, {
              transformTemplate: (t) => {
                let { rotate: e, scaleX: n, scaleY: i } = t;
                return "rotate("
                  .concat(e, ") scaleX(")
                  .concat(n, ") scaleY(")
                  .concat(i, ")");
              },
              style: { left: d.x, top: d.y, scaleX: u.x, scaleY: u.y },
              animate: { width: o, height: o },
              className: ti().cursor,
              ref: s,
            }),
          })
        );
      }
      var ts = n(429),
        to = n.n(ts);
      let ta = (0, a.forwardRef)(function (t, e) {
        return (0,
        r.jsx)("div", { className: to().header, children: (0, r.jsx)(c, { children: (0, r.jsx)("div", { className: to().burger, children: (0, r.jsx)("div", { ref: e, className: to().bounds }) }) }) });
      });
      var tl = n(2491),
        tu = n(2167),
        th = n(4033);
      function tc() {
        let [t, e] = (0, a.useState)(!1),
          n = (0, th.usePathname)(),
          i = (0, a.useRef)(null),
          s = (0, a.useRef)(null),
          l = (0, a.useRef)(null),
          u = (0, a.useRef)(null);
        return (
          (0, a.useEffect)(() => {
            t && e(!1);
          }, [n]),
          (0, a.useEffect)(() => {
            function t(t) {
              l.current &&
                !l.current.contains(t.target) &&
                u.current &&
                !u.current.contains(t.target) &&
                e(!1);
            }
            return (
              document.addEventListener("mousedown", t),
              () => {
                document.removeEventListener("mousedown", t);
              }
            );
          }, []),
          (0, r.jsxs)("main", {
            className: o().main,
            children: [
              (0, r.jsx)("div", {
                className: o().header,
                children: (0, r.jsxs)("div", {
                  ref: u,
                  onClick: () => {
                    e((t) => !t);
                  },
                  className: o().button,
                  children: [
                    (0, r.jsx)(d, { ref: i, isActive: t }),
                    (0, r.jsx)(ta, { ref: s }),
                    (0, r.jsx)(tr, { stickyElement: i }),
                    (0, r.jsx)(tr, { stickyElement: s }),
                  ],
                }),
              }),
              (0, r.jsx)(tu.M, {
                mode: "wait",
                children:
                  t &&
                  (0, r.jsx)("div", { ref: l, children: (0, r.jsx)(tl.Z, {}) }),
              }),
            ],
          })
        );
      }
    },
    2491: function (t, e, n) {
      "use strict";
      n.d(e, {
        Z: function () {
          return f;
        },
      });
      var i = n(7437),
        r = n(2265),
        s = n(9190),
        o = n.n(s),
        a = n(8733),
        l = n(4033);
      let u = {
        initial: { x: "calc(100% + 100px)" },
        enter: {
          x: "0",
          transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
        },
        exit: {
          x: "calc(100% + 100px)",
          transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
        },
      };
      var h = n(9405),
        c = n.n(h);
      function d() {
        let t = "M100 0 L200 0 L200 "
            .concat(window.innerHeight, " L100 ")
            .concat(window.innerHeight, " Q-100 ")
            .concat(window.innerHeight / 2, " 100 0"),
          e = "M100 0 L200 0 L200 "
            .concat(window.innerHeight, " L100 ")
            .concat(window.innerHeight, " Q100 ")
            .concat(window.innerHeight / 2, " 100 0");
        return (0, i.jsx)("svg", {
          className: c().svgCurve,
          children: (0, i.jsx)(a.E.path, {
            variants: {
              initial: { d: t },
              enter: {
                d: e,
                transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
              },
              exit: {
                d: t,
                transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
              },
            },
            initial: "initial",
            animate: "enter",
            exit: "exit",
          }),
        });
      }
      function f() {
        let t = (0, l.usePathname)(),
          [e, n] = (0, r.useState)(t);
        return (0, i.jsxs)(a.E.div, {
          variants: u,
          initial: "initial",
          animate: "enter",
          exit: "exit",
          className: o().menu,
          children: [
            (0, i.jsx)("div", {
              className: o().body,
              children: (0, i.jsx)("div", {
                onMouseLeave: () => {
                  n(t);
                },
                className: o().nav,
                children: (0, i.jsx)("div", {
                  className: o().header,
                  children: (0, i.jsx)("p", { children: "Navigation" }),
                }),
              }),
            }),
            (0, i.jsx)(d, {}),
          ],
        });
      }
    },
    8358: function (t) {
      t.exports = { main: "page_main__akH3E" };
    },
    816: function (t) {
      t.exports = {
        header: "style_header__ZRQhb",
        burger: "style_burger__chxHD",
        text: "style_text__6Et_a",
        menu: "style_menu__3tNzQ",
        close: "style_close__kLHSK",
        active: "style_active__P3crq",
        bounds: "style_bounds__Qabmx",
      };
    },
    429: function (t) {
      t.exports = {
        header: "style_header__VzC4L",
        burger: "style_burger__5uoPm",
        bounds: "style_bounds__lqEAW",
      };
    },
    9405: function (t) {
      t.exports = { svgCurve: "styles_svgCurve__P7K6h" };
    },
    9190: function (t) {
      t.exports = {
        menu: "style_menu__Oumh3",
        body: "style_body__vAuIc",
        nav: "style_nav__iO7J9",
        header: "style_header__Yu2e7",
      };
    },
    3854: function (t) {
      t.exports = { cursor: "style_cursor__1gLJs" };
    },
    622: function (t, e, n) {
      "use strict";
      /**
       * @license React
       * react-jsx-runtime.production.min.js
       *
       * Copyright (c) Meta Platforms, Inc. and affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */ var i = n(2265),
        r = Symbol.for("react.element"),
        s = Symbol.for("react.fragment"),
        o = Object.prototype.hasOwnProperty,
        a =
          i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        l = { key: !0, ref: !0, __self: !0, __source: !0 };
      function u(t, e, n) {
        var i,
          s = {},
          u = null,
          h = null;
        for (i in (void 0 !== n && (u = "" + n),
        void 0 !== e.key && (u = "" + e.key),
        void 0 !== e.ref && (h = e.ref),
        e))
          o.call(e, i) && !l.hasOwnProperty(i) && (s[i] = e[i]);
        if (t && t.defaultProps)
          for (i in (e = t.defaultProps)) void 0 === s[i] && (s[i] = e[i]);
        return {
          $$typeof: r,
          type: t,
          key: u,
          ref: h,
          props: s,
          _owner: a.current,
        };
      }
      (e.Fragment = s), (e.jsx = u), (e.jsxs = u);
    },
    7437: function (t, e, n) {
      "use strict";
      t.exports = n(622);
    },
    4033: function (t, e, n) {
      t.exports = n(8165);
    },
    1705: function (t, e, n) {
      "use strict";
      n.d(e, {
        y: function () {
          return R;
        },
      });
      var i = n(6977);
      let r = (t, e, n) =>
        (((1 - 3 * n + 3 * e) * t + (3 * n - 6 * e)) * t + 3 * e) * t;
      function s(t, e, n, s) {
        if (t === e && n === s) return i.Z;
        let o = (e) =>
          (function (t, e, n, i, s) {
            let o, a;
            let l = 0;
            do (o = r((a = e + (n - e) / 2), i, s) - t) > 0 ? (n = a) : (e = a);
            while (Math.abs(o) > 1e-7 && ++l < 12);
            return a;
          })(e, 0, 1, t, n);
        return (t) => (0 === t || 1 === t ? t : r(o(t), e, s));
      }
      let o = s(0.42, 0, 1, 1),
        a = s(0, 0, 0.58, 1),
        l = s(0.42, 0, 0.58, 1);
      var u = n(7565),
        h = n(6567),
        c = n(927),
        d = n(933),
        f = n(484);
      let p = s(0.33, 1.53, 0.69, 0.99),
        m = (0, f.M)(p),
        v = (0, d.o)(m),
        g = {
          linear: i.Z,
          easeIn: o,
          easeInOut: l,
          easeOut: a,
          circIn: c.Z7,
          circInOut: c.X7,
          circOut: c.Bn,
          backIn: m,
          backInOut: v,
          backOut: p,
          anticipate: (t) =>
            (t *= 2) < 1 ? 0.5 * m(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1))),
        },
        y = (t) => {
          if (Array.isArray(t)) {
            (0, h.k)(
              4 === t.length,
              "Cubic bezier arrays must contain four numerical values."
            );
            let [e, n, i, r] = t;
            return s(e, n, i, r);
          }
          return "string" == typeof t
            ? ((0, h.k)(void 0 !== g[t], `Invalid easing type '${t}'`), g[t])
            : t;
        };
      var x = n(3245),
        P = n(9448);
      function w({
        duration: t = 300,
        keyframes: e,
        times: n,
        ease: i = "easeInOut",
      }) {
        let r = (0, u.N)(i) ? i.map(y) : y(i),
          s = { done: !1, value: e[0] },
          o = (n && n.length === e.length ? n : (0, P.Y)(e)).map((e) => e * t),
          a = (0, x.s)(o, e, {
            ease: Array.isArray(r)
              ? r
              : e.map(() => r || l).splice(0, e.length - 1),
          });
        return {
          calculatedDuration: t,
          next: (e) => ((s.value = a(e)), (s.done = e >= t), s),
        };
      }
      var b = n(3816),
        A = n(2252);
      function T({
        keyframes: t,
        velocity: e = 0,
        power: n = 0.8,
        timeConstant: i = 325,
        bounceDamping: r = 10,
        bounceStiffness: s = 500,
        modifyTarget: o,
        min: a,
        max: l,
        restDelta: u = 0.5,
        restSpeed: h,
      }) {
        let c, d;
        let f = t[0],
          p = { done: !1, value: f },
          m = (t) => (void 0 !== a && t < a) || (void 0 !== l && t > l),
          v = (t) =>
            void 0 === a
              ? l
              : void 0 === l
              ? a
              : Math.abs(a - t) < Math.abs(l - t)
              ? a
              : l,
          g = n * e,
          y = f + g,
          x = void 0 === o ? y : o(y);
        x !== y && (g = x - f);
        let P = (t) => -g * Math.exp(-t / i),
          w = (t) => x + P(t),
          T = (t) => {
            let e = P(t),
              n = w(t);
            (p.done = Math.abs(e) <= u), (p.value = p.done ? x : n);
          },
          C = (t) => {
            m(p.value) &&
              ((c = t),
              (d = (0, b.S)({
                keyframes: [p.value, v(p.value)],
                velocity: (0, A.P)(w, t, p.value),
                damping: r,
                stiffness: s,
                restDelta: u,
                restSpeed: h,
              })));
          };
        return (
          C(0),
          {
            calculatedDuration: null,
            next: (t) => {
              let e = !1;
              return (d || void 0 !== c || ((e = !0), T(t), C(t)),
              void 0 !== c && t > c)
                ? d.next(t - c)
                : (e || T(t), p);
            },
          }
        );
      }
      var C = n(3041);
      let E = (t) => {
        let e = ({ timestamp: e }) => t(e);
        return {
          start: () => C.Wi.update(e, !0),
          stop: () => (0, C.Pn)(e),
          now: () =>
            C.frameData.isProcessing
              ? C.frameData.timestamp
              : performance.now(),
        };
      };
      var S = n(3021),
        V = n(1356),
        M = n(1064);
      let D = { decay: T, inertia: T, tween: w, keyframes: w, spring: b.S };
      function R({
        autoplay: t = !0,
        delay: e = 0,
        driver: n = E,
        keyframes: i,
        type: r = "keyframes",
        repeat: s = 0,
        repeatDelay: o = 0,
        repeatType: a = "loop",
        onPlay: l,
        onStop: u,
        onComplete: h,
        onUpdate: c,
        ...d
      }) {
        let f,
          p,
          m,
          v,
          g,
          y = 1,
          P = !1,
          b = () => {
            p = new Promise((t) => {
              f = t;
            });
          };
        b();
        let A = D[r] || w;
        A !== w &&
          "number" != typeof i[0] &&
          ((v = (0, x.s)([0, 100], i, { clamp: !1 })), (i = [0, 100]));
        let T = A({ ...d, keyframes: i });
        "mirror" === a &&
          (g = A({
            ...d,
            keyframes: [...i].reverse(),
            velocity: -(d.velocity || 0),
          }));
        let C = "idle",
          R = null,
          k = null,
          L = null;
        null === T.calculatedDuration &&
          s &&
          (T.calculatedDuration = (0, M.i)(T));
        let { calculatedDuration: j } = T,
          B = 1 / 0,
          F = 1 / 0;
        null !== j && (F = (B = j + o) * (s + 1) - o);
        let O = 0,
          W = (t) => {
            if (null === k) return;
            y > 0 && (k = Math.min(k, t)),
              y < 0 && (k = Math.min(t - F / y, k)),
              (O = null !== R ? R : Math.round(t - k) * y);
            let n = O - e * (y >= 0 ? 1 : -1),
              r = y >= 0 ? n < 0 : n > F;
            (O = Math.max(n, 0)), "finished" === C && null === R && (O = F);
            let l = O,
              u = T;
            if (s) {
              let t = Math.min(O, F) / B,
                e = Math.floor(t),
                n = t % 1;
              !n && t >= 1 && (n = 1), 1 === n && e--, (e = Math.min(e, s + 1));
              let i = !!(e % 2);
              i &&
                ("reverse" === a
                  ? ((n = 1 - n), o && (n -= o / B))
                  : "mirror" === a && (u = g)),
                (l = (0, S.u)(0, 1, n) * B);
            }
            let h = r ? { done: !1, value: i[0] } : u.next(l);
            v && (h.value = v(h.value));
            let { done: d } = h;
            r || null === j || (d = y >= 0 ? O >= F : O <= 0);
            let f = null === R && ("finished" === C || ("running" === C && d));
            return c && c(h.value), f && I(), h;
          },
          N = () => {
            m && m.stop(), (m = void 0);
          },
          $ = () => {
            (C = "idle"), N(), f(), b(), (k = L = null);
          },
          I = () => {
            (C = "finished"), h && h(), N(), f();
          },
          _ = () => {
            if (P) return;
            m || (m = n(W));
            let t = m.now();
            l && l(),
              null !== R ? (k = t - R) : (k && "finished" !== C) || (k = t),
              "finished" === C && b(),
              (L = k),
              (R = null),
              (C = "running"),
              m.start();
          };
        t && _();
        let U = {
          then: (t, e) => p.then(t, e),
          get time() {
            return (0, V.X)(O);
          },
          set time(newTime) {
            (O = newTime = (0, V.w)(newTime)),
              null === R && m && 0 !== y
                ? (k = m.now() - newTime / y)
                : (R = newTime);
          },
          get duration() {
            let t =
              null === T.calculatedDuration
                ? (0, M.i)(T)
                : T.calculatedDuration;
            return (0, V.X)(t);
          },
          get speed() {
            return y;
          },
          set speed(newSpeed) {
            if (newSpeed === y || !m) return;
            (y = newSpeed), (U.time = (0, V.X)(O));
          },
          get state() {
            return C;
          },
          play: _,
          pause: () => {
            (C = "paused"), (R = O);
          },
          stop: () => {
            (P = !0), "idle" !== C && ((C = "idle"), u && u(), $());
          },
          cancel: () => {
            null !== L && W(L), $();
          },
          complete: () => {
            C = "finished";
          },
          sample: (t) => ((k = 0), W(t)),
        };
        return U;
      }
    },
    3816: function (t, e, n) {
      "use strict";
      n.d(e, {
        S: function () {
          return c;
        },
      });
      var i = n(1356),
        r = n(2252),
        s = n(6567),
        o = n(3021);
      function a(t, e) {
        return t * Math.sqrt(1 - e * e);
      }
      let l = ["duration", "bounce"],
        u = ["stiffness", "damping", "mass"];
      function h(t, e) {
        return e.some((e) => void 0 !== t[e]);
      }
      function c({ keyframes: t, restDelta: e, restSpeed: n, ...c }) {
        let d;
        let f = t[0],
          p = t[t.length - 1],
          m = { done: !1, value: f },
          {
            stiffness: v,
            damping: g,
            mass: y,
            duration: x,
            velocity: P,
            isResolvedFromDuration: w,
          } = (function (t) {
            let e = {
              velocity: 0,
              stiffness: 100,
              damping: 10,
              mass: 1,
              isResolvedFromDuration: !1,
              ...t,
            };
            if (!h(t, u) && h(t, l)) {
              let n = (function ({
                duration: t = 800,
                bounce: e = 0.25,
                velocity: n = 0,
                mass: r = 1,
              }) {
                let l, u;
                (0, s.K)(
                  t <= (0, i.w)(10),
                  "Spring duration must be 10 seconds or less"
                );
                let h = 1 - e;
                (h = (0, o.u)(0.05, 1, h)),
                  (t = (0, o.u)(0.01, 10, (0, i.X)(t))),
                  h < 1
                    ? ((l = (e) => {
                        let i = e * h,
                          r = i * t,
                          s = a(e, h);
                        return 0.001 - ((i - n) / s) * Math.exp(-r);
                      }),
                      (u = (e) => {
                        let i = e * h,
                          r = i * t,
                          s = Math.pow(h, 2) * Math.pow(e, 2) * t,
                          o = a(Math.pow(e, 2), h),
                          u = -l(e) + 0.001 > 0 ? -1 : 1;
                        return (u * ((r * n + n - s) * Math.exp(-r))) / o;
                      }))
                    : ((l = (e) => {
                        let i = Math.exp(-e * t),
                          r = (e - n) * t + 1;
                        return -0.001 + i * r;
                      }),
                      (u = (e) => {
                        let i = Math.exp(-e * t),
                          r = (n - e) * (t * t);
                        return i * r;
                      }));
                let c = 5 / t,
                  d = (function (t, e, n) {
                    let i = n;
                    for (let n = 1; n < 12; n++) i -= t(i) / e(i);
                    return i;
                  })(l, u, c);
                if (((t = (0, i.w)(t)), isNaN(d)))
                  return { stiffness: 100, damping: 10, duration: t };
                {
                  let e = Math.pow(d, 2) * r;
                  return {
                    stiffness: e,
                    damping: 2 * h * Math.sqrt(r * e),
                    duration: t,
                  };
                }
              })(t);
              (e = { ...e, ...n, mass: 1 }).isResolvedFromDuration = !0;
            }
            return e;
          })({ ...c, velocity: -(0, i.X)(c.velocity || 0) }),
          b = P || 0,
          A = g / (2 * Math.sqrt(v * y)),
          T = p - f,
          C = (0, i.X)(Math.sqrt(v / y)),
          E = 5 > Math.abs(T);
        if ((n || (n = E ? 0.01 : 2), e || (e = E ? 0.005 : 0.5), A < 1)) {
          let t = a(C, A);
          d = (e) => {
            let n = Math.exp(-A * C * e);
            return (
              p -
              n *
                (((b + A * C * T) / t) * Math.sin(t * e) + T * Math.cos(t * e))
            );
          };
        } else if (1 === A)
          d = (t) => p - Math.exp(-C * t) * (T + (b + C * T) * t);
        else {
          let t = C * Math.sqrt(A * A - 1);
          d = (e) => {
            let n = Math.exp(-A * C * e),
              i = Math.min(t * e, 300);
            return (
              p -
              (n * ((b + A * C * T) * Math.sinh(i) + t * T * Math.cosh(i))) / t
            );
          };
        }
        return {
          calculatedDuration: (w && x) || null,
          next: (t) => {
            let i = d(t);
            if (w) m.done = t >= x;
            else {
              let s = b;
              0 !== t && (s = A < 1 ? (0, r.P)(d, t, i) : 0);
              let o = Math.abs(s) <= n,
                a = Math.abs(p - i) <= e;
              m.done = o && a;
            }
            return (m.value = m.done ? p : i), m;
          },
        };
      }
    },
    1064: function (t, e, n) {
      "use strict";
      n.d(e, {
        E: function () {
          return i;
        },
        i: function () {
          return r;
        },
      });
      let i = 2e4;
      function r(t) {
        let e = 0,
          n = t.next(e);
        for (; !n.done && e < i; ) (e += 50), (n = t.next(e));
        return e >= i ? 1 / 0 : e;
      }
    },
    2252: function (t, e, n) {
      "use strict";
      n.d(e, {
        P: function () {
          return r;
        },
      });
      var i = n(9815);
      function r(t, e, n) {
        let r = Math.max(e - 5, 0);
        return (0, i.R)(n - t(r), e - r);
      }
    },
    9883: function (t, e, n) {
      "use strict";
      n.d(e, {
        v: function () {
          return V;
        },
      });
      var i = n(6567),
        r = n(1356);
      let s = { current: !1 },
        o = (t) => Array.isArray(t) && "number" == typeof t[0],
        a = ([t, e, n, i]) => `cubic-bezier(${t}, ${e}, ${n}, ${i})`,
        l = {
          linear: "linear",
          ease: "ease",
          easeIn: "ease-in",
          easeOut: "ease-out",
          easeInOut: "ease-in-out",
          circIn: a([0, 0.65, 0.55, 1]),
          circOut: a([0.55, 0, 1, 0.45]),
          backIn: a([0.31, 0.01, 0.66, -0.59]),
          backOut: a([0.33, 1.53, 0.69, 0.99]),
        };
      var u = n(1705),
        h = n(9648),
        c = n(6977),
        d = n(3041);
      let f = (0, h.X)(() =>
          Object.hasOwnProperty.call(Element.prototype, "animate")
        ),
        p = new Set([
          "opacity",
          "clipPath",
          "filter",
          "transform",
          "backgroundColor",
        ]),
        m = (t, e) =>
          "spring" === e.type ||
          "backgroundColor" === t ||
          !(function t(e) {
            return !!(
              !e ||
              ("string" == typeof e && l[e]) ||
              o(e) ||
              (Array.isArray(e) && e.every(t))
            );
          })(e.ease);
      var v = n(9303);
      let g = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
        y = (t) => ({
          type: "spring",
          stiffness: 550,
          damping: 0 === t ? 2 * Math.sqrt(550) : 30,
          restSpeed: 10,
        }),
        x = { type: "keyframes", duration: 0.8 },
        P = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
        w = (t, { keyframes: e }) =>
          e.length > 2
            ? x
            : v.G.has(t)
            ? t.startsWith("scale")
              ? y(e[1])
              : g
            : P;
      var b = n(9155);
      let A = (t, e) =>
        "zIndex" !== t &&
        !!(
          "number" == typeof e ||
          Array.isArray(e) ||
          ("string" == typeof e &&
            (b.P.test(e) || "0" === e) &&
            !e.startsWith("url("))
        );
      var T = n(9006),
        C = n(5243),
        E = n(7924);
      let S = { skipAnimations: !1 },
        V =
          (t, e, n, h = {}) =>
          (v) => {
            let g = (0, E.e)(h, t) || {},
              y = g.delay || h.delay || 0,
              { elapsed: x = 0 } = h;
            x -= (0, r.w)(y);
            let P = (function (t, e, n, i) {
                let r, s;
                let o = A(e, n);
                r = Array.isArray(n) ? [...n] : [null, n];
                let a = void 0 !== i.from ? i.from : t.get(),
                  l = [];
                for (let t = 0; t < r.length; t++) {
                  var u;
                  null === r[t] && (r[t] = 0 === t ? a : r[t - 1]),
                    ("number" == typeof (u = r[t])
                      ? 0 === u
                      : null !== u
                      ? "none" === u || "0" === u || (0, C.W)(u)
                      : void 0) && l.push(t),
                    "string" == typeof r[t] &&
                      "none" !== r[t] &&
                      "0" !== r[t] &&
                      (s = r[t]);
                }
                if (o && l.length && s)
                  for (let t = 0; t < l.length; t++) {
                    let n = l[t];
                    r[n] = (0, T.T)(e, s);
                  }
                return r;
              })(e, t, n, g),
              b = P[0],
              V = P[P.length - 1],
              M = A(t, b),
              D = A(t, V);
            (0, i.K)(
              M === D,
              `You are trying to animate ${t} from "${b}" to "${V}". ${b} is not an animatable value - to enable this animation set ${b} to a value animatable to ${V} via the \`style\` property.`
            );
            let R = {
              keyframes: P,
              velocity: e.getVelocity(),
              ease: "easeOut",
              ...g,
              delay: -x,
              onUpdate: (t) => {
                e.set(t), g.onUpdate && g.onUpdate(t);
              },
              onComplete: () => {
                v(), g.onComplete && g.onComplete();
              },
            };
            if (
              ((0, E.r)(g) || (R = { ...R, ...w(t, R) }),
              R.duration && (R.duration = (0, r.w)(R.duration)),
              R.repeatDelay && (R.repeatDelay = (0, r.w)(R.repeatDelay)),
              !M || !D || s.current || !1 === g.type || S.skipAnimations)
            )
              return (function ({
                keyframes: t,
                delay: e,
                onUpdate: n,
                onComplete: i,
              }) {
                let r = () => (
                  n && n(t[t.length - 1]),
                  i && i(),
                  {
                    time: 0,
                    speed: 1,
                    duration: 0,
                    play: c.Z,
                    pause: c.Z,
                    stop: c.Z,
                    then: (t) => (t(), Promise.resolve()),
                    cancel: c.Z,
                    complete: c.Z,
                  }
                );
                return e
                  ? (0, u.y)({
                      keyframes: [0, 1],
                      duration: 0,
                      delay: e,
                      onComplete: r,
                    })
                  : r();
              })(s.current ? { ...R, delay: 0 } : R);
            if (
              !h.isHandoff &&
              e.owner &&
              e.owner.current instanceof HTMLElement &&
              !e.owner.getProps().onUpdate
            ) {
              let n = (function (t, e, { onUpdate: n, onComplete: i, ...s }) {
                let h, v;
                let g =
                  f() &&
                  p.has(e) &&
                  !s.repeatDelay &&
                  "mirror" !== s.repeatType &&
                  0 !== s.damping &&
                  "inertia" !== s.type;
                if (!g) return !1;
                let y = !1,
                  x = !1,
                  P = () => {
                    v = new Promise((t) => {
                      h = t;
                    });
                  };
                P();
                let { keyframes: w, duration: b = 300, ease: A, times: T } = s;
                if (m(e, s)) {
                  let t = (0, u.y)({ ...s, repeat: 0, delay: 0 }),
                    e = { done: !1, value: w[0] },
                    n = [],
                    i = 0;
                  for (; !e.done && i < 2e4; )
                    n.push((e = t.sample(i)).value), (i += 10);
                  (T = void 0), (w = n), (b = i - 10), (A = "linear");
                }
                let C = (function (
                    t,
                    e,
                    n,
                    {
                      delay: i = 0,
                      duration: r,
                      repeat: s = 0,
                      repeatType: u = "loop",
                      ease: h,
                      times: c,
                    } = {}
                  ) {
                    let d = { [e]: n };
                    c && (d.offset = c);
                    let f = (function t(e) {
                      if (e)
                        return o(e) ? a(e) : Array.isArray(e) ? e.map(t) : l[e];
                    })(h);
                    return (
                      Array.isArray(f) && (d.easing = f),
                      t.animate(d, {
                        delay: i,
                        duration: r,
                        easing: Array.isArray(f) ? "linear" : f,
                        fill: "both",
                        iterations: s + 1,
                        direction: "reverse" === u ? "alternate" : "normal",
                      })
                    );
                  })(t.owner.current, e, w, {
                    ...s,
                    duration: b,
                    ease: A,
                    times: T,
                  }),
                  E = () => {
                    (x = !1), C.cancel();
                  },
                  S = () => {
                    (x = !0), d.Wi.update(E), h(), P();
                  };
                return (
                  (C.onfinish = () => {
                    x ||
                      (t.set(
                        (function (t, { repeat: e, repeatType: n = "loop" }) {
                          let i =
                            e && "loop" !== n && e % 2 == 1 ? 0 : t.length - 1;
                          return t[i];
                        })(w, s)
                      ),
                      i && i(),
                      S());
                  }),
                  {
                    then: (t, e) => v.then(t, e),
                    attachTimeline: (t) => (
                      (C.timeline = t), (C.onfinish = null), c.Z
                    ),
                    get time() {
                      return (0, r.X)(C.currentTime || 0);
                    },
                    set time(newTime) {
                      C.currentTime = (0, r.w)(newTime);
                    },
                    get speed() {
                      return C.playbackRate;
                    },
                    set speed(newSpeed) {
                      C.playbackRate = newSpeed;
                    },
                    get duration() {
                      return (0, r.X)(b);
                    },
                    play: () => {
                      y || (C.play(), (0, d.Pn)(E));
                    },
                    pause: () => C.pause(),
                    stop: () => {
                      if (((y = !0), "idle" === C.playState)) return;
                      let { currentTime: e } = C;
                      if (e) {
                        let n = (0, u.y)({ ...s, autoplay: !1 });
                        t.setWithVelocity(
                          n.sample(e - 10).value,
                          n.sample(e).value,
                          10
                        );
                      }
                      S();
                    },
                    complete: () => {
                      x || C.finish();
                    },
                    cancel: S,
                  }
                );
              })(e, t, R);
              if (n) return n;
            }
            return (0, u.y)(R);
          };
    },
    4854: function (t, e, n) {
      "use strict";
      n.d(e, {
        D: function () {
          return o;
        },
      });
      var i = n(9883),
        r = n(4101),
        s = n(5735);
      function o(t, e, n) {
        let o = (0, s.i)(t) ? t : (0, r.BX)(t);
        return o.start((0, i.v)("", o, e, n)), o.animation;
      }
    },
    5430: function (t, e, n) {
      "use strict";
      n.d(e, {
        w: function () {
          return h;
        },
      });
      var i = n(9303),
        r = n(6348),
        s = n(9883),
        o = n(3227),
        a = n(7798),
        l = n(7924),
        u = n(3041);
      function h(t, e, { delay: n = 0, transitionOverride: h, type: c } = {}) {
        let {
            transition: d = t.getDefaultTransition(),
            transitionEnd: f,
            ...p
          } = t.makeTargetAnimatable(e),
          m = t.getValue("willChange");
        h && (d = h);
        let v = [],
          g = c && t.animationState && t.animationState.getState()[c];
        for (let e in p) {
          let a = t.getValue(e),
            h = p[e];
          if (
            !a ||
            void 0 === h ||
            (g &&
              (function ({ protectedKeys: t, needsAnimating: e }, n) {
                let i = t.hasOwnProperty(n) && !0 !== e[n];
                return (e[n] = !1), i;
              })(g, e))
          )
            continue;
          let c = { delay: n, elapsed: 0, ...(0, l.e)(d || {}, e) };
          if (window.HandoffAppearAnimations) {
            let n = t.getProps()[r.M];
            if (n) {
              let t = window.HandoffAppearAnimations(n, e, a, u.Wi);
              null !== t && ((c.elapsed = t), (c.isHandoff = !0));
            }
          }
          let f =
            !c.isHandoff &&
            !(function (t, e) {
              let n = t.get();
              if (!Array.isArray(e)) return n !== e;
              for (let t = 0; t < e.length; t++) if (e[t] !== n) return !0;
            })(a, h);
          if (
            ("spring" === c.type && (a.getVelocity() || c.velocity) && (f = !1),
            a.animation && (f = !1),
            f)
          )
            continue;
          a.start(
            (0, s.v)(
              e,
              a,
              h,
              t.shouldReduceMotion && i.G.has(e) ? { type: !1 } : c
            )
          );
          let y = a.animation;
          (0, o.L)(m) && (m.add(e), y.then(() => m.remove(e))), v.push(y);
        }
        return (
          f &&
            Promise.all(v).then(() => {
              f && (0, a.CD)(t, f);
            }),
          v
        );
      }
    },
    6348: function (t, e, n) {
      "use strict";
      n.d(e, {
        M: function () {
          return r;
        },
      });
      var i = n(7905);
      let r = "data-" + (0, i.D)("framerAppearId");
    },
    7866: function (t, e, n) {
      "use strict";
      function i(t) {
        return (
          null !== t && "object" == typeof t && "function" == typeof t.start
        );
      }
      n.d(e, {
        H: function () {
          return i;
        },
      });
    },
    363: function (t, e, n) {
      "use strict";
      n.d(e, {
        C: function () {
          return i;
        },
      });
      let i = (t) => Array.isArray(t);
    },
    7924: function (t, e, n) {
      "use strict";
      function i({
        when: t,
        delay: e,
        delayChildren: n,
        staggerChildren: i,
        staggerDirection: r,
        repeat: s,
        repeatType: o,
        repeatDelay: a,
        from: l,
        elapsed: u,
        ...h
      }) {
        return !!Object.keys(h).length;
      }
      function r(t, e) {
        return t[e] || t.default || t;
      }
      n.d(e, {
        e: function () {
          return r;
        },
        r: function () {
          return i;
        },
      });
    },
    2167: function (t, e, n) {
      "use strict";
      n.d(e, {
        M: function () {
          return v;
        },
      });
      var i = n(2265),
        r = n(538);
      function s() {
        let t = (0, i.useRef)(!1);
        return (
          (0, r.L)(
            () => (
              (t.current = !0),
              () => {
                t.current = !1;
              }
            ),
            []
          ),
          t
        );
      }
      var o = n(3041),
        a = n(8243),
        l = n(961);
      class u extends i.Component {
        getSnapshotBeforeUpdate(t) {
          let e = this.props.childRef.current;
          if (e && t.isPresent && !this.props.isPresent) {
            let t = this.props.sizeRef.current;
            (t.height = e.offsetHeight || 0),
              (t.width = e.offsetWidth || 0),
              (t.top = e.offsetTop),
              (t.left = e.offsetLeft);
          }
          return null;
        }
        componentDidUpdate() {}
        render() {
          return this.props.children;
        }
      }
      function h({ children: t, isPresent: e }) {
        let n = (0, i.useId)(),
          r = (0, i.useRef)(null),
          s = (0, i.useRef)({ width: 0, height: 0, top: 0, left: 0 });
        return (
          (0, i.useInsertionEffect)(() => {
            let { width: t, height: i, top: o, left: a } = s.current;
            if (e || !r.current || !t || !i) return;
            r.current.dataset.motionPopId = n;
            let l = document.createElement("style");
            return (
              document.head.appendChild(l),
              l.sheet &&
                l.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${t}px !important;
            height: ${i}px !important;
            top: ${o}px !important;
            left: ${a}px !important;
          }
        `),
              () => {
                document.head.removeChild(l);
              }
            );
          }, [e]),
          i.createElement(
            u,
            { isPresent: e, childRef: r, sizeRef: s },
            i.cloneElement(t, { ref: r })
          )
        );
      }
      let c = ({
        children: t,
        initial: e,
        isPresent: n,
        onExitComplete: r,
        custom: s,
        presenceAffectsLayout: o,
        mode: u,
      }) => {
        let c = (0, l.h)(d),
          f = (0, i.useId)(),
          p = (0, i.useMemo)(
            () => ({
              id: f,
              initial: e,
              isPresent: n,
              custom: s,
              onExitComplete: (t) => {
                for (let e of (c.set(t, !0), c.values())) if (!e) return;
                r && r();
              },
              register: (t) => (c.set(t, !1), () => c.delete(t)),
            }),
            o ? void 0 : [n]
          );
        return (
          (0, i.useMemo)(() => {
            c.forEach((t, e) => c.set(e, !1));
          }, [n]),
          i.useEffect(() => {
            n || c.size || !r || r();
          }, [n]),
          "popLayout" === u && (t = i.createElement(h, { isPresent: n }, t)),
          i.createElement(a.O.Provider, { value: p }, t)
        );
      };
      function d() {
        return new Map();
      }
      var f = n(781),
        p = n(6567);
      let m = (t) => t.key || "",
        v = ({
          children: t,
          custom: e,
          initial: n = !0,
          onExitComplete: a,
          exitBeforeEnter: l,
          presenceAffectsLayout: u = !0,
          mode: h = "sync",
        }) => {
          var d;
          (0, p.k)(!l, "Replace exitBeforeEnter with mode='wait'");
          let v =
              (0, i.useContext)(f.p).forceRender ||
              (function () {
                let t = s(),
                  [e, n] = (0, i.useState)(0),
                  r = (0, i.useCallback)(() => {
                    t.current && n(e + 1);
                  }, [e]),
                  a = (0, i.useCallback)(() => o.Wi.postRender(r), [r]);
                return [a, e];
              })()[0],
            g = s(),
            y = (function (t) {
              let e = [];
              return (
                i.Children.forEach(t, (t) => {
                  (0, i.isValidElement)(t) && e.push(t);
                }),
                e
              );
            })(t),
            x = y,
            P = (0, i.useRef)(new Map()).current,
            w = (0, i.useRef)(x),
            b = (0, i.useRef)(new Map()).current,
            A = (0, i.useRef)(!0);
          if (
            ((0, r.L)(() => {
              (A.current = !1),
                (function (t, e) {
                  t.forEach((t) => {
                    let n = m(t);
                    e.set(n, t);
                  });
                })(y, b),
                (w.current = x);
            }),
            (d = () => {
              (A.current = !0), b.clear(), P.clear();
            }),
            (0, i.useEffect)(() => () => d(), []),
            A.current)
          )
            return i.createElement(
              i.Fragment,
              null,
              x.map((t) =>
                i.createElement(
                  c,
                  {
                    key: m(t),
                    isPresent: !0,
                    initial: !!n && void 0,
                    presenceAffectsLayout: u,
                    mode: h,
                  },
                  t
                )
              )
            );
          x = [...x];
          let T = w.current.map(m),
            C = y.map(m),
            E = T.length;
          for (let t = 0; t < E; t++) {
            let e = T[t];
            -1 !== C.indexOf(e) || P.has(e) || P.set(e, void 0);
          }
          return (
            "wait" === h && P.size && (x = []),
            P.forEach((t, n) => {
              if (-1 !== C.indexOf(n)) return;
              let r = b.get(n);
              if (!r) return;
              let s = T.indexOf(n),
                o = t;
              o ||
                ((o = i.createElement(
                  c,
                  {
                    key: m(r),
                    isPresent: !1,
                    onExitComplete: () => {
                      P.delete(n);
                      let t = Array.from(b.keys()).filter(
                        (t) => !C.includes(t)
                      );
                      if (
                        (t.forEach((t) => b.delete(t)),
                        (w.current = y.filter((e) => {
                          let i = m(e);
                          return i === n || t.includes(i);
                        })),
                        !P.size)
                      ) {
                        if (!1 === g.current) return;
                        v(), a && a();
                      }
                    },
                    custom: e,
                    presenceAffectsLayout: u,
                    mode: h,
                  },
                  r
                )),
                P.set(n, o)),
                x.splice(s, 0, o);
            }),
            (x = x.map((t) => {
              let e = t.key;
              return P.has(e)
                ? t
                : i.createElement(
                    c,
                    {
                      key: m(t),
                      isPresent: !0,
                      presenceAffectsLayout: u,
                      mode: h,
                    },
                    t
                  );
            })),
            i.createElement(
              i.Fragment,
              null,
              P.size ? x : x.map((t) => (0, i.cloneElement)(t))
            )
          );
        };
    },
    781: function (t, e, n) {
      "use strict";
      n.d(e, {
        p: function () {
          return r;
        },
      });
      var i = n(2265);
      let r = (0, i.createContext)({});
    },
    5968: function (t, e, n) {
      "use strict";
      n.d(e, {
        _: function () {
          return r;
        },
      });
      var i = n(2265);
      let r = (0, i.createContext)({
        transformPagePoint: (t) => t,
        isStatic: !1,
        reducedMotion: "never",
      });
    },
    8243: function (t, e, n) {
      "use strict";
      n.d(e, {
        O: function () {
          return r;
        },
      });
      var i = n(2265);
      let r = (0, i.createContext)(null);
    },
    927: function (t, e, n) {
      "use strict";
      n.d(e, {
        Bn: function () {
          return o;
        },
        X7: function () {
          return a;
        },
        Z7: function () {
          return s;
        },
      });
      var i = n(933),
        r = n(484);
      let s = (t) => 1 - Math.sin(Math.acos(t)),
        o = (0, r.M)(s),
        a = (0, i.o)(s);
    },
    933: function (t, e, n) {
      "use strict";
      n.d(e, {
        o: function () {
          return i;
        },
      });
      let i = (t) => (e) => e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2;
    },
    484: function (t, e, n) {
      "use strict";
      n.d(e, {
        M: function () {
          return i;
        },
      });
      let i = (t) => (e) => 1 - t(1 - e);
    },
    7565: function (t, e, n) {
      "use strict";
      n.d(e, {
        N: function () {
          return i;
        },
      });
      let i = (t) => Array.isArray(t) && "number" != typeof t[0];
    },
    3041: function (t, e, n) {
      "use strict";
      n.d(e, {
        Pn: function () {
          return a;
        },
        Wi: function () {
          return o;
        },
        frameData: function () {
          return l;
        },
        S6: function () {
          return u;
        },
      });
      var i = n(6977);
      class r {
        constructor() {
          (this.order = []), (this.scheduled = new Set());
        }
        add(t) {
          if (!this.scheduled.has(t))
            return this.scheduled.add(t), this.order.push(t), !0;
        }
        remove(t) {
          let e = this.order.indexOf(t);
          -1 !== e && (this.order.splice(e, 1), this.scheduled.delete(t));
        }
        clear() {
          (this.order.length = 0), this.scheduled.clear();
        }
      }
      let s = [
          "prepare",
          "read",
          "update",
          "preRender",
          "render",
          "postRender",
        ],
        {
          schedule: o,
          cancel: a,
          state: l,
          steps: u,
        } = (function (t, e) {
          let n = !1,
            i = !0,
            o = { delta: 0, timestamp: 0, isProcessing: !1 },
            a = s.reduce(
              (t, e) => (
                (t[e] = (function (t) {
                  let e = new r(),
                    n = new r(),
                    i = 0,
                    s = !1,
                    o = !1,
                    a = new WeakSet(),
                    l = {
                      schedule: (t, r = !1, o = !1) => {
                        let l = o && s,
                          u = l ? e : n;
                        return (
                          r && a.add(t),
                          u.add(t) && l && s && (i = e.order.length),
                          t
                        );
                      },
                      cancel: (t) => {
                        n.remove(t), a.delete(t);
                      },
                      process: (r) => {
                        if (s) {
                          o = !0;
                          return;
                        }
                        if (
                          ((s = !0),
                          ([e, n] = [n, e]),
                          n.clear(),
                          (i = e.order.length))
                        )
                          for (let n = 0; n < i; n++) {
                            let i = e.order[n];
                            i(r), a.has(i) && (l.schedule(i), t());
                          }
                        (s = !1), o && ((o = !1), l.process(r));
                      },
                    };
                  return l;
                })(() => (n = !0))),
                t
              ),
              {}
            ),
            l = (t) => a[t].process(o),
            u = () => {
              let r = performance.now();
              (n = !1),
                (o.delta = i
                  ? 1e3 / 60
                  : Math.max(Math.min(r - o.timestamp, 40), 1)),
                (o.timestamp = r),
                (o.isProcessing = !0),
                s.forEach(l),
                (o.isProcessing = !1),
                n && e && ((i = !1), t(u));
            },
            h = () => {
              (n = !0), (i = !0), o.isProcessing || t(u);
            },
            c = s.reduce((t, e) => {
              let i = a[e];
              return (
                (t[e] = (t, e = !1, r = !1) => (n || h(), i.schedule(t, e, r))),
                t
              );
            }, {});
          return {
            schedule: c,
            cancel: (t) => s.forEach((e) => a[e].cancel(t)),
            state: o,
            steps: a,
          };
        })(
          "undefined" != typeof requestAnimationFrame
            ? requestAnimationFrame
            : i.Z,
          !0
        );
    },
    9001: function (t, e, n) {
      "use strict";
      n.d(e, {
        A: function () {
          return r;
        },
      });
      let i = {
          animation: [
            "animate",
            "variants",
            "whileHover",
            "whileTap",
            "exit",
            "whileInView",
            "whileFocus",
            "whileDrag",
          ],
          exit: ["exit"],
          drag: ["drag", "dragControls"],
          focus: ["whileFocus"],
          hover: ["whileHover", "onHoverStart", "onHoverEnd"],
          tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
          pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
          inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
          layout: ["layout", "layoutId"],
        },
        r = {};
      for (let t in i) r[t] = { isEnabled: (e) => i[t].some((t) => !!e[t]) };
    },
    1118: function (t, e, n) {
      "use strict";
      n.d(e, {
        j: function () {
          return s;
        },
      });
      var i = n(611),
        r = n(9303);
      function s(t, { layout: e, layoutId: n }) {
        return (
          r.G.has(t) ||
          t.startsWith("origin") ||
          ((e || void 0 !== n) && (!!i.P[t] || "opacity" === t))
        );
      }
    },
    4902: function (t, e, n) {
      "use strict";
      function i({ top: t, left: e, right: n, bottom: i }) {
        return { x: { min: e, max: n }, y: { min: t, max: i } };
      }
      function r({ x: t, y: e }) {
        return { top: e.min, right: t.max, bottom: e.max, left: t.min };
      }
      function s(t, e) {
        if (!e) return t;
        let n = e({ x: t.left, y: t.top }),
          i = e({ x: t.right, y: t.bottom });
        return { top: n.y, left: n.x, bottom: i.y, right: i.x };
      }
      n.d(e, {
        d7: function () {
          return s;
        },
        i8: function () {
          return i;
        },
        z2: function () {
          return r;
        },
      });
    },
    1841: function (t, e, n) {
      "use strict";
      n.d(e, {
        D2: function () {
          return m;
        },
        YY: function () {
          return u;
        },
        am: function () {
          return c;
        },
        o2: function () {
          return l;
        },
        q2: function () {
          return s;
        },
      });
      var i = n(7),
        r = n(121);
      function s(t, e, n) {
        return n + e * (t - n);
      }
      function o(t, e, n, i, r) {
        return void 0 !== r && (t = i + r * (t - i)), i + n * (t - i) + e;
      }
      function a(t, e = 0, n = 1, i, r) {
        (t.min = o(t.min, e, n, i, r)), (t.max = o(t.max, e, n, i, r));
      }
      function l(t, { x: e, y: n }) {
        a(t.x, e.translate, e.scale, e.originPoint),
          a(t.y, n.translate, n.scale, n.originPoint);
      }
      function u(t, e, n, i = !1) {
        let s, o;
        let a = n.length;
        if (a) {
          e.x = e.y = 1;
          for (let u = 0; u < a; u++) {
            o = (s = n[u]).projectionDelta;
            let a = s.instance;
            (!a || !a.style || "contents" !== a.style.display) &&
              (i &&
                s.options.layoutScroll &&
                s.scroll &&
                s !== s.root &&
                m(t, { x: -s.scroll.offset.x, y: -s.scroll.offset.y }),
              o && ((e.x *= o.x.scale), (e.y *= o.y.scale), l(t, o)),
              i && (0, r.ud)(s.latestValues) && m(t, s.latestValues));
          }
          (e.x = h(e.x)), (e.y = h(e.y));
        }
      }
      function h(t) {
        return Number.isInteger(t)
          ? t
          : t > 1.0000000000001 || t < 0.999999999999
          ? t
          : 1;
      }
      function c(t, e) {
        (t.min = t.min + e), (t.max = t.max + e);
      }
      function d(t, e, [n, r, s]) {
        let o = void 0 !== e[s] ? e[s] : 0.5,
          l = (0, i.C)(t.min, t.max, o);
        a(t, e[n], e[r], l, e.scale);
      }
      let f = ["x", "scaleX", "originX"],
        p = ["y", "scaleY", "originY"];
      function m(t, e) {
        d(t.x, e, f), d(t.y, e, p);
      }
    },
    4597: function (t, e, n) {
      "use strict";
      n.d(e, {
        dO: function () {
          return o;
        },
        wc: function () {
          return r;
        },
      });
      let i = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
        r = () => ({ x: i(), y: i() }),
        s = () => ({ min: 0, max: 0 }),
        o = () => ({ x: s(), y: s() });
    },
    611: function (t, e, n) {
      "use strict";
      n.d(e, {
        B: function () {
          return r;
        },
        P: function () {
          return i;
        },
      });
      let i = {};
      function r(t) {
        Object.assign(i, t);
      }
    },
    121: function (t, e, n) {
      "use strict";
      function i(t) {
        return void 0 === t || 1 === t;
      }
      function r({ scale: t, scaleX: e, scaleY: n }) {
        return !i(t) || !i(e) || !i(n);
      }
      function s(t) {
        return r(t) || o(t) || t.z || t.rotate || t.rotateX || t.rotateY;
      }
      function o(t) {
        var e, n;
        return ((e = t.x) && "0%" !== e) || ((n = t.y) && "0%" !== n);
      }
      n.d(e, {
        D_: function () {
          return o;
        },
        Lj: function () {
          return r;
        },
        ud: function () {
          return s;
        },
      });
    },
    3937: function (t, e, n) {
      "use strict";
      n.d(e, {
        J: function () {
          return s;
        },
        z: function () {
          return o;
        },
      });
      var i = n(4902),
        r = n(1841);
      function s(t, e) {
        return (0, i.i8)((0, i.d7)(t.getBoundingClientRect(), e));
      }
      function o(t, e, n) {
        let i = s(t, n),
          { scroll: o } = e;
        return o && ((0, r.am)(i.x, o.offset.x), (0, r.am)(i.y, o.offset.y)), i;
      }
    },
    1923: function (t, e, n) {
      "use strict";
      n.d(e, {
        J: function () {
          return Y;
        },
      });
      var i = n(7798),
        r = n(6567),
        s = n(4747),
        o = n(417);
      let a = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
      function l(t, e, n = 1) {
        (0, r.k)(
          n <= 4,
          `Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`
        );
        let [i, u] = (function (t) {
          let e = a.exec(t);
          if (!e) return [,];
          let [, n, i] = e;
          return [n, i];
        })(t);
        if (!i) return;
        let h = window.getComputedStyle(e).getPropertyValue(i);
        if (h) {
          let t = h.trim();
          return (0, s.P)(t) ? parseFloat(t) : t;
        }
        return (0, o.tm)(u) ? l(u, e, n + 1) : u;
      }
      var u = n(363),
        h = n(9303),
        c = n(8824),
        d = n(6613),
        f = n(2980),
        p = n(3681);
      let m = new Set([
          "width",
          "height",
          "top",
          "left",
          "right",
          "bottom",
          "x",
          "y",
          "translateX",
          "translateY",
        ]),
        v = (t) => m.has(t),
        g = (t) => Object.keys(t).some(v),
        y = (t) => t === f.Rx || t === p.px,
        x = (t, e) => parseFloat(t.split(", ")[e]),
        P =
          (t, e) =>
          (n, { transform: i }) => {
            if ("none" === i || !i) return 0;
            let r = i.match(/^matrix3d\((.+)\)$/);
            if (r) return x(r[1], e);
            {
              let e = i.match(/^matrix\((.+)\)$/);
              return e ? x(e[1], t) : 0;
            }
          },
        w = new Set(["x", "y", "z"]),
        b = h._.filter((t) => !w.has(t)),
        A = {
          width: ({ x: t }, { paddingLeft: e = "0", paddingRight: n = "0" }) =>
            t.max - t.min - parseFloat(e) - parseFloat(n),
          height: ({ y: t }, { paddingTop: e = "0", paddingBottom: n = "0" }) =>
            t.max - t.min - parseFloat(e) - parseFloat(n),
          top: (t, { top: e }) => parseFloat(e),
          left: (t, { left: e }) => parseFloat(e),
          bottom: ({ y: t }, { top: e }) => parseFloat(e) + (t.max - t.min),
          right: ({ x: t }, { left: e }) => parseFloat(e) + (t.max - t.min),
          x: P(4, 13),
          y: P(5, 14),
        };
      (A.translateX = A.x), (A.translateY = A.y);
      let T = (t, e, n) => {
          let i = e.measureViewportBox(),
            r = e.current,
            s = getComputedStyle(r),
            { display: o } = s,
            a = {};
          "none" === o && e.setStaticValue("display", t.display || "block"),
            n.forEach((t) => {
              a[t] = A[t](i, s);
            }),
            e.render();
          let l = e.measureViewportBox();
          return (
            n.forEach((n) => {
              let i = e.getValue(n);
              i && i.jump(a[n]), (t[n] = A[n](l, s));
            }),
            t
          );
        },
        C = (t, e, n = {}, i = {}) => {
          (e = { ...e }), (i = { ...i });
          let s = Object.keys(e).filter(v),
            o = [],
            a = !1,
            l = [];
          if (
            (s.forEach((s) => {
              let h;
              let d = t.getValue(s);
              if (!t.hasValue(s)) return;
              let f = n[s],
                m = (0, c.C)(f),
                v = e[s];
              if ((0, u.C)(v)) {
                let t = v.length,
                  e = null === v[0] ? 1 : 0;
                (f = v[e]), (m = (0, c.C)(f));
                for (let n = e; n < t && null !== v[n]; n++)
                  h
                    ? (0, r.k)(
                        (0, c.C)(v[n]) === h,
                        "All keyframes must be of the same type"
                      )
                    : ((h = (0, c.C)(v[n])),
                      (0, r.k)(
                        h === m || (y(m) && y(h)),
                        "Keyframes must be of the same dimension as the current value"
                      ));
              } else h = (0, c.C)(v);
              if (m !== h) {
                if (y(m) && y(h)) {
                  let t = d.get();
                  "string" == typeof t && d.set(parseFloat(t)),
                    "string" == typeof v
                      ? (e[s] = parseFloat(v))
                      : Array.isArray(v) &&
                        h === p.px &&
                        (e[s] = v.map(parseFloat));
                } else
                  (null == m ? void 0 : m.transform) &&
                  (null == h ? void 0 : h.transform) &&
                  (0 === f || 0 === v)
                    ? 0 === f
                      ? d.set(h.transform(f))
                      : (e[s] = m.transform(v))
                    : (a ||
                        ((o = (function (t) {
                          let e = [];
                          return (
                            b.forEach((n) => {
                              let i = t.getValue(n);
                              void 0 !== i &&
                                (e.push([n, i.get()]),
                                i.set(n.startsWith("scale") ? 1 : 0));
                            }),
                            e.length && t.render(),
                            e
                          );
                        })(t)),
                        (a = !0)),
                      l.push(s),
                      (i[s] = void 0 !== i[s] ? i[s] : e[s]),
                      d.jump(v));
              }
            }),
            !l.length)
          )
            return { target: e, transitionEnd: i };
          {
            let n = l.indexOf("height") >= 0 ? window.pageYOffset : null,
              r = T(e, t, l);
            return (
              o.length &&
                o.forEach(([e, n]) => {
                  t.getValue(e).set(n);
                }),
              t.render(),
              d.j && null !== n && window.scrollTo({ top: n }),
              { target: r, transitionEnd: i }
            );
          }
        },
        E = (t, e, n, i) => {
          var r, s;
          let a = (function (t, { ...e }, n) {
            let i = t.current;
            if (!(i instanceof Element)) return { target: e, transitionEnd: n };
            for (let r in (n && (n = { ...n }),
            t.values.forEach((t) => {
              let e = t.get();
              if (!(0, o.tm)(e)) return;
              let n = l(e, i);
              n && t.set(n);
            }),
            e)) {
              let t = e[r];
              if (!(0, o.tm)(t)) continue;
              let s = l(t, i);
              s && ((e[r] = s), n || (n = {}), void 0 === n[r] && (n[r] = t));
            }
            return { target: e, transitionEnd: n };
          })(t, e, i);
          return (
            (e = a.target),
            (i = a.transitionEnd),
            (r = e),
            (s = i),
            g(r) ? C(t, r, n, s) : { target: r, transitionEnd: s }
          );
        };
      var S = n(4597),
        V = n(5503);
      let M = { current: null },
        D = { current: !1 };
      var R = n(7026),
        k = n(4101),
        L = n(3227),
        j = n(5735),
        B = n(6049),
        F = n(3345),
        O = n(3331),
        W = n(9001),
        N = n(5247),
        $ = n(4900),
        I = n(3041);
      let _ = Object.keys(W.A),
        U = _.length,
        H = [
          "AnimationStart",
          "AnimationComplete",
          "Update",
          "BeforeLayoutMeasure",
          "LayoutMeasure",
          "LayoutAnimationStart",
          "LayoutAnimationComplete",
        ],
        z = N.V.length;
      class X {
        constructor(
          {
            parent: t,
            props: e,
            presenceContext: n,
            reducedMotionConfig: i,
            visualState: r,
          },
          s = {}
        ) {
          (this.current = null),
            (this.children = new Set()),
            (this.isVariantNode = !1),
            (this.isControllingVariants = !1),
            (this.shouldReduceMotion = null),
            (this.values = new Map()),
            (this.features = {}),
            (this.valueSubscriptions = new Map()),
            (this.prevMotionValues = {}),
            (this.events = {}),
            (this.propEventSubscriptions = {}),
            (this.notifyUpdate = () =>
              this.notify("Update", this.latestValues)),
            (this.render = () => {
              this.current &&
                (this.triggerBuild(),
                this.renderInstance(
                  this.current,
                  this.renderState,
                  this.props.style,
                  this.projection
                ));
            }),
            (this.scheduleRender = () => I.Wi.render(this.render, !1, !0));
          let { latestValues: o, renderState: a } = r;
          (this.latestValues = o),
            (this.baseTarget = { ...o }),
            (this.initialValues = e.initial ? { ...o } : {}),
            (this.renderState = a),
            (this.parent = t),
            (this.props = e),
            (this.presenceContext = n),
            (this.depth = t ? t.depth + 1 : 0),
            (this.reducedMotionConfig = i),
            (this.options = s),
            (this.isControllingVariants = (0, B.G)(e)),
            (this.isVariantNode = (0, B.M)(e)),
            this.isVariantNode && (this.variantChildren = new Set()),
            (this.manuallyAnimateOnMount = !!(t && t.current));
          let { willChange: l, ...u } = this.scrapeMotionValuesFromProps(e, {});
          for (let t in u) {
            let e = u[t];
            void 0 !== o[t] &&
              (0, j.i)(e) &&
              (e.set(o[t], !1), (0, L.L)(l) && l.add(t));
          }
        }
        scrapeMotionValuesFromProps(t, e) {
          return {};
        }
        mount(t) {
          (this.current = t),
            $.R.set(t, this),
            this.projection &&
              !this.projection.instance &&
              this.projection.mount(t),
            this.parent &&
              this.isVariantNode &&
              !this.isControllingVariants &&
              (this.removeFromVariantTree = this.parent.addVariantChild(this)),
            this.values.forEach((t, e) => this.bindToMotionValue(e, t)),
            D.current ||
              (function () {
                if (((D.current = !0), d.j)) {
                  if (window.matchMedia) {
                    let t = window.matchMedia("(prefers-reduced-motion)"),
                      e = () => (M.current = t.matches);
                    t.addListener(e), e();
                  } else M.current = !1;
                }
              })(),
            (this.shouldReduceMotion =
              "never" !== this.reducedMotionConfig &&
              ("always" === this.reducedMotionConfig || M.current)),
            this.parent && this.parent.children.add(this),
            this.update(this.props, this.presenceContext);
        }
        unmount() {
          for (let t in ($.R.delete(this.current),
          this.projection && this.projection.unmount(),
          (0, I.Pn)(this.notifyUpdate),
          (0, I.Pn)(this.render),
          this.valueSubscriptions.forEach((t) => t()),
          this.removeFromVariantTree && this.removeFromVariantTree(),
          this.parent && this.parent.children.delete(this),
          this.events))
            this.events[t].clear();
          for (let t in this.features) this.features[t].unmount();
          this.current = null;
        }
        bindToMotionValue(t, e) {
          let n = h.G.has(t),
            i = e.on("change", (e) => {
              (this.latestValues[t] = e),
                this.props.onUpdate && I.Wi.update(this.notifyUpdate, !1, !0),
                n && this.projection && (this.projection.isTransformDirty = !0);
            }),
            r = e.on("renderRequest", this.scheduleRender);
          this.valueSubscriptions.set(t, () => {
            i(), r();
          });
        }
        sortNodePosition(t) {
          return this.current &&
            this.sortInstanceNodePosition &&
            this.type === t.type
            ? this.sortInstanceNodePosition(this.current, t.current)
            : 0;
        }
        loadFeatures({ children: t, ...e }, n, i, r) {
          let s, o;
          for (let t = 0; t < U; t++) {
            let n = _[t],
              {
                isEnabled: i,
                Feature: r,
                ProjectionNode: a,
                MeasureLayout: l,
              } = W.A[n];
            a && (s = a),
              i(e) &&
                (!this.features[n] && r && (this.features[n] = new r(this)),
                l && (o = l));
          }
          if (
            ("html" === this.type || "svg" === this.type) &&
            !this.projection &&
            s
          ) {
            this.projection = new s(
              this.latestValues,
              this.parent && this.parent.projection
            );
            let {
              layoutId: t,
              layout: n,
              drag: i,
              dragConstraints: o,
              layoutScroll: a,
              layoutRoot: l,
            } = e;
            this.projection.setOptions({
              layoutId: t,
              layout: n,
              alwaysMeasureLayout: !!i || (o && (0, V.I)(o)),
              visualElement: this,
              scheduleRender: () => this.scheduleRender(),
              animationType: "string" == typeof n ? n : "both",
              initialPromotionConfig: r,
              layoutScroll: a,
              layoutRoot: l,
            });
          }
          return o;
        }
        updateFeatures() {
          for (let t in this.features) {
            let e = this.features[t];
            e.isMounted ? e.update() : (e.mount(), (e.isMounted = !0));
          }
        }
        triggerBuild() {
          this.build(
            this.renderState,
            this.latestValues,
            this.options,
            this.props
          );
        }
        measureViewportBox() {
          return this.current
            ? this.measureInstanceViewportBox(this.current, this.props)
            : (0, S.dO)();
        }
        getStaticValue(t) {
          return this.latestValues[t];
        }
        setStaticValue(t, e) {
          this.latestValues[t] = e;
        }
        makeTargetAnimatable(t, e = !0) {
          return this.makeTargetAnimatableFromInstance(t, this.props, e);
        }
        update(t, e) {
          (t.transformTemplate || this.props.transformTemplate) &&
            this.scheduleRender(),
            (this.prevProps = this.props),
            (this.props = t),
            (this.prevPresenceContext = this.presenceContext),
            (this.presenceContext = e);
          for (let e = 0; e < H.length; e++) {
            let n = H[e];
            this.propEventSubscriptions[n] &&
              (this.propEventSubscriptions[n](),
              delete this.propEventSubscriptions[n]);
            let i = t["on" + n];
            i && (this.propEventSubscriptions[n] = this.on(n, i));
          }
          (this.prevMotionValues = (function (t, e, n) {
            let { willChange: i } = e;
            for (let r in e) {
              let s = e[r],
                o = n[r];
              if ((0, j.i)(s)) t.addValue(r, s), (0, L.L)(i) && i.add(r);
              else if ((0, j.i)(o))
                t.addValue(r, (0, k.BX)(s, { owner: t })),
                  (0, L.L)(i) && i.remove(r);
              else if (o !== s) {
                if (t.hasValue(r)) {
                  let e = t.getValue(r);
                  e.hasAnimated || e.set(s);
                } else {
                  let e = t.getStaticValue(r);
                  t.addValue(r, (0, k.BX)(void 0 !== e ? e : s, { owner: t }));
                }
              }
            }
            for (let i in n) void 0 === e[i] && t.removeValue(i);
            return e;
          })(
            this,
            this.scrapeMotionValuesFromProps(t, this.prevProps),
            this.prevMotionValues
          )),
            this.handleChildMotionValue && this.handleChildMotionValue();
        }
        getProps() {
          return this.props;
        }
        getVariant(t) {
          return this.props.variants ? this.props.variants[t] : void 0;
        }
        getDefaultTransition() {
          return this.props.transition;
        }
        getTransformPagePoint() {
          return this.props.transformPagePoint;
        }
        getClosestVariantNode() {
          return this.isVariantNode
            ? this
            : this.parent
            ? this.parent.getClosestVariantNode()
            : void 0;
        }
        getVariantContext(t = !1) {
          if (t) return this.parent ? this.parent.getVariantContext() : void 0;
          if (!this.isControllingVariants) {
            let t = (this.parent && this.parent.getVariantContext()) || {};
            return (
              void 0 !== this.props.initial && (t.initial = this.props.initial),
              t
            );
          }
          let e = {};
          for (let t = 0; t < z; t++) {
            let n = N.V[t],
              i = this.props[n];
            ((0, F.$)(i) || !1 === i) && (e[n] = i);
          }
          return e;
        }
        addVariantChild(t) {
          let e = this.getClosestVariantNode();
          if (e)
            return (
              e.variantChildren && e.variantChildren.add(t),
              () => e.variantChildren.delete(t)
            );
        }
        addValue(t, e) {
          e !== this.values.get(t) &&
            (this.removeValue(t), this.bindToMotionValue(t, e)),
            this.values.set(t, e),
            (this.latestValues[t] = e.get());
        }
        removeValue(t) {
          this.values.delete(t);
          let e = this.valueSubscriptions.get(t);
          e && (e(), this.valueSubscriptions.delete(t)),
            delete this.latestValues[t],
            this.removeValueFromRenderState(t, this.renderState);
        }
        hasValue(t) {
          return this.values.has(t);
        }
        getValue(t, e) {
          if (this.props.values && this.props.values[t])
            return this.props.values[t];
          let n = this.values.get(t);
          return (
            void 0 === n &&
              void 0 !== e &&
              ((n = (0, k.BX)(e, { owner: this })), this.addValue(t, n)),
            n
          );
        }
        readValue(t) {
          var e;
          return void 0 === this.latestValues[t] && this.current
            ? null !== (e = this.getBaseTargetFromProps(this.props, t)) &&
              void 0 !== e
              ? e
              : this.readValueFromInstance(this.current, t, this.options)
            : this.latestValues[t];
        }
        setBaseTarget(t, e) {
          this.baseTarget[t] = e;
        }
        getBaseTarget(t) {
          var e;
          let { initial: n } = this.props,
            i =
              "string" == typeof n || "object" == typeof n
                ? null === (e = (0, O.o)(this.props, n)) || void 0 === e
                  ? void 0
                  : e[t]
                : void 0;
          if (n && void 0 !== i) return i;
          let r = this.getBaseTargetFromProps(this.props, t);
          return void 0 === r || (0, j.i)(r)
            ? void 0 !== this.initialValues[t] && void 0 === i
              ? void 0
              : this.baseTarget[t]
            : r;
        }
        on(t, e) {
          return (
            this.events[t] || (this.events[t] = new R.L()),
            this.events[t].add(e)
          );
        }
        notify(t, ...e) {
          this.events[t] && this.events[t].notify(...e);
        }
      }
      class Y extends X {
        sortInstanceNodePosition(t, e) {
          return 2 & t.compareDocumentPosition(e) ? 1 : -1;
        }
        getBaseTargetFromProps(t, e) {
          return t.style ? t.style[e] : void 0;
        }
        removeValueFromRenderState(t, { vars: e, style: n }) {
          delete e[t], delete n[t];
        }
        makeTargetAnimatableFromInstance(
          { transition: t, transitionEnd: e, ...n },
          { transformValues: r },
          s
        ) {
          let o = (0, i.P$)(n, t || {}, this);
          if ((r && (e && (e = r(e)), n && (n = r(n)), o && (o = r(o))), s)) {
            (0, i.GJ)(this, n, o);
            let t = E(this, n, o, e);
            (e = t.transitionEnd), (n = t.target);
          }
          return { transition: t, transitionEnd: e, ...n };
        }
      }
    },
    8733: function (t, e, n) {
      "use strict";
      n.d(e, {
        E: function () {
          return nn;
        },
      });
      var i,
        r = n(2265),
        s = n(5968);
      let o = (0, r.createContext)({});
      var a = n(8243),
        l = n(538);
      let u = (0, r.createContext)({ strict: !1 });
      var h = n(6348),
        c = n(5503),
        d = n(3345),
        f = n(6049);
      function p(t) {
        return Array.isArray(t) ? t.join(" ") : t;
      }
      var m = n(9001),
        v = n(6613),
        g = n(781);
      let y = (0, r.createContext)({}),
        x = Symbol.for("motionComponentSymbol"),
        P = [
          "animate",
          "circle",
          "defs",
          "desc",
          "ellipse",
          "g",
          "image",
          "line",
          "filter",
          "marker",
          "mask",
          "metadata",
          "path",
          "pattern",
          "polygon",
          "polyline",
          "rect",
          "stop",
          "switch",
          "symbol",
          "svg",
          "text",
          "tspan",
          "use",
          "view",
        ];
      function w(t) {
        if ("string" != typeof t || t.includes("-"));
        else if (P.indexOf(t) > -1 || /[A-Z]/.test(t)) return !0;
        return !1;
      }
      var b = n(1118),
        A = n(5735),
        T = n(458);
      let C = () => ({
        style: {},
        transform: {},
        transformOrigin: {},
        vars: {},
      });
      function E(t, e, n) {
        for (let i in e) (0, A.i)(e[i]) || (0, b.j)(i, n) || (t[i] = e[i]);
      }
      function S(t, e, n) {
        let i = {},
          s = (function (t, e, n) {
            let i = t.style || {},
              s = {};
            return (
              E(s, i, t),
              Object.assign(
                s,
                (function ({ transformTemplate: t }, e, n) {
                  return (0, r.useMemo)(() => {
                    let i = C();
                    return (
                      (0, T.r)(i, e, { enableHardwareAcceleration: !n }, t),
                      Object.assign({}, i.vars, i.style)
                    );
                  }, [e]);
                })(t, e, n)
              ),
              t.transformValues ? t.transformValues(s) : s
            );
          })(t, e, n);
        return (
          t.drag &&
            !1 !== t.dragListener &&
            ((i.draggable = !1),
            (s.userSelect = s.WebkitUserSelect = s.WebkitTouchCallout = "none"),
            (s.touchAction =
              !0 === t.drag ? "none" : `pan-${"x" === t.drag ? "y" : "x"}`)),
          void 0 === t.tabIndex &&
            (t.onTap || t.onTapStart || t.whileTap) &&
            (i.tabIndex = 0),
          (i.style = s),
          i
        );
      }
      let V = new Set([
        "animate",
        "exit",
        "variants",
        "initial",
        "style",
        "values",
        "variants",
        "transition",
        "transformTemplate",
        "transformValues",
        "custom",
        "inherit",
        "onBeforeLayoutMeasure",
        "onAnimationStart",
        "onAnimationComplete",
        "onUpdate",
        "onDragStart",
        "onDrag",
        "onDragEnd",
        "onMeasureDragConstraints",
        "onDirectionLock",
        "onDragTransitionEnd",
        "_dragX",
        "_dragY",
        "onHoverStart",
        "onHoverEnd",
        "onViewportEnter",
        "onViewportLeave",
        "globalTapTarget",
        "ignoreStrict",
        "viewport",
      ]);
      function M(t) {
        return (
          t.startsWith("while") ||
          (t.startsWith("drag") && "draggable" !== t) ||
          t.startsWith("layout") ||
          t.startsWith("onTap") ||
          t.startsWith("onPan") ||
          t.startsWith("onLayout") ||
          V.has(t)
        );
      }
      let D = (t) => !M(t);
      try {
        (i = require("@emotion/is-prop-valid").default) &&
          (D = (t) => (t.startsWith("on") ? !M(t) : i(t)));
      } catch (t) {}
      var R = n(1524);
      let k = () => ({ ...C(), attrs: {} });
      var L = n(922);
      function j(t, e, n, i) {
        let s = (0, r.useMemo)(() => {
          let n = k();
          return (
            (0, R.i)(
              n,
              e,
              { enableHardwareAcceleration: !1 },
              (0, L.a)(i),
              t.transformTemplate
            ),
            { ...n.attrs, style: { ...n.style } }
          );
        }, [e]);
        if (t.style) {
          let e = {};
          E(e, t.style, t), (s.style = { ...e, ...s.style });
        }
        return s;
      }
      var B = n(8239),
        F = n(5625),
        O = n(7866),
        W = n(3331),
        N = n(961),
        $ = n(1832);
      function I(t) {
        let e = (0, A.i)(t) ? t.get() : t;
        return (0, $.p)(e) ? e.toValue() : e;
      }
      let _ = (t) => (e, n) => {
        let i = (0, r.useContext)(o),
          s = (0, r.useContext)(a.O),
          l = () =>
            (function (
              {
                scrapeMotionValuesFromProps: t,
                createRenderState: e,
                onMount: n,
              },
              i,
              r,
              s
            ) {
              let o = {
                latestValues: (function (t, e, n, i) {
                  let r = {},
                    s = i(t, {});
                  for (let t in s) r[t] = I(s[t]);
                  let { initial: o, animate: a } = t,
                    l = (0, f.G)(t),
                    u = (0, f.M)(t);
                  e &&
                    u &&
                    !l &&
                    !1 !== t.inherit &&
                    (void 0 === o && (o = e.initial),
                    void 0 === a && (a = e.animate));
                  let h = !!n && !1 === n.initial;
                  h = h || !1 === o;
                  let c = h ? a : o;
                  if (c && "boolean" != typeof c && !(0, O.H)(c)) {
                    let e = Array.isArray(c) ? c : [c];
                    e.forEach((e) => {
                      let n = (0, W.o)(t, e);
                      if (!n) return;
                      let { transitionEnd: i, transition: s, ...o } = n;
                      for (let t in o) {
                        let e = o[t];
                        if (Array.isArray(e)) {
                          let t = h ? e.length - 1 : 0;
                          e = e[t];
                        }
                        null !== e && (r[t] = e);
                      }
                      for (let t in i) r[t] = i[t];
                    });
                  }
                  return r;
                })(i, r, s, t),
                renderState: e(),
              };
              return n && (o.mount = (t) => n(i, t, o)), o;
            })(t, e, i, s);
        return n ? l() : (0, N.h)(l);
      };
      var U = n(3041);
      let H = {
        useVisualState: _({
          scrapeMotionValuesFromProps: F.U,
          createRenderState: k,
          onMount: (t, e, { renderState: n, latestValues: i }) => {
            U.Wi.read(() => {
              try {
                n.dimensions =
                  "function" == typeof e.getBBox
                    ? e.getBBox()
                    : e.getBoundingClientRect();
              } catch (t) {
                n.dimensions = { x: 0, y: 0, width: 0, height: 0 };
              }
            }),
              U.Wi.render(() => {
                (0, R.i)(
                  n,
                  i,
                  { enableHardwareAcceleration: !1 },
                  (0, L.a)(e.tagName),
                  t.transformTemplate
                ),
                  (0, B.K)(e, n);
              });
          },
        }),
      };
      var z = n(3495);
      let X = {
        useVisualState: _({
          scrapeMotionValuesFromProps: z.U,
          createRenderState: C,
        }),
      };
      function Y(t, e, n, i = { passive: !0 }) {
        return t.addEventListener(e, n, i), () => t.removeEventListener(e, n);
      }
      let Z = (t) =>
        "mouse" === t.pointerType
          ? "number" != typeof t.button || t.button <= 0
          : !1 !== t.isPrimary;
      function G(t, e = "page") {
        return { point: { x: t[e + "X"], y: t[e + "Y"] } };
      }
      let q = (t) => (e) => Z(e) && t(e, G(e));
      function K(t, e, n, i) {
        return Y(t, e, q(n), i);
      }
      var J = n(4694);
      function Q(t) {
        let e = null;
        return () =>
          null === e &&
          ((e = t),
          () => {
            e = null;
          });
      }
      let tt = Q("dragHorizontal"),
        te = Q("dragVertical");
      function tn(t) {
        let e = !1;
        if ("y" === t) e = te();
        else if ("x" === t) e = tt();
        else {
          let t = tt(),
            n = te();
          t && n
            ? (e = () => {
                t(), n();
              })
            : (t && t(), n && n());
        }
        return e;
      }
      function ti() {
        let t = tn(!0);
        return !t || (t(), !1);
      }
      class tr {
        constructor(t) {
          (this.isMounted = !1), (this.node = t);
        }
        update() {}
      }
      function ts(t, e) {
        let n = "pointer" + (e ? "enter" : "leave"),
          i = "onHover" + (e ? "Start" : "End");
        return K(
          t.current,
          n,
          (n, r) => {
            if ("touch" === n.pointerType || ti()) return;
            let s = t.getProps();
            t.animationState &&
              s.whileHover &&
              t.animationState.setActive("whileHover", e),
              s[i] && U.Wi.update(() => s[i](n, r));
          },
          { passive: !t.getProps()[i] }
        );
      }
      let to = (t, e) => !!e && (t === e || to(t, e.parentElement));
      var ta = n(6977);
      function tl(t, e) {
        if (!e) return;
        let n = new PointerEvent("pointer" + t);
        e(n, G(n));
      }
      let tu = new WeakMap(),
        th = new WeakMap(),
        tc = (t) => {
          let e = tu.get(t.target);
          e && e(t);
        },
        td = (t) => {
          t.forEach(tc);
        },
        tf = { some: 0, all: 1 };
      var tp = n(363);
      function tm(t, e) {
        if (!Array.isArray(e)) return !1;
        let n = e.length;
        if (n !== t.length) return !1;
        for (let i = 0; i < n; i++) if (e[i] !== t[i]) return !1;
        return !0;
      }
      var tv = n(2593),
        tg = n(5247),
        ty = n(5430);
      function tx(t, e, n = {}) {
        let i = (0, tv.x)(t, e, n.custom),
          { transition: r = t.getDefaultTransition() || {} } = i || {};
        n.transitionOverride && (r = n.transitionOverride);
        let s = i
            ? () => Promise.all((0, ty.w)(t, i, n))
            : () => Promise.resolve(),
          o =
            t.variantChildren && t.variantChildren.size
              ? (i = 0) => {
                  let {
                    delayChildren: s = 0,
                    staggerChildren: o,
                    staggerDirection: a,
                  } = r;
                  return (function (t, e, n = 0, i = 0, r = 1, s) {
                    let o = [],
                      a = (t.variantChildren.size - 1) * i,
                      l = 1 === r ? (t = 0) => t * i : (t = 0) => a - t * i;
                    return (
                      Array.from(t.variantChildren)
                        .sort(tP)
                        .forEach((t, i) => {
                          t.notify("AnimationStart", e),
                            o.push(
                              tx(t, e, { ...s, delay: n + l(i) }).then(() =>
                                t.notify("AnimationComplete", e)
                              )
                            );
                        }),
                      Promise.all(o)
                    );
                  })(t, e, s + i, o, a, n);
                }
              : () => Promise.resolve(),
          { when: a } = r;
        if (!a) return Promise.all([s(), o(n.delay)]);
        {
          let [t, e] = "beforeChildren" === a ? [s, o] : [o, s];
          return t().then(() => e());
        }
      }
      function tP(t, e) {
        return t.sortNodePosition(e);
      }
      let tw = [...tg.e].reverse(),
        tb = tg.e.length;
      function tA(t = !1) {
        return {
          isActive: t,
          protectedKeys: {},
          needsAnimating: {},
          prevResolvedValues: {},
        };
      }
      let tT = 0;
      var tC = n(6567),
        tE = n(1356);
      let tS = (t, e) => Math.abs(t - e);
      class tV {
        constructor(
          t,
          e,
          {
            transformPagePoint: n,
            contextWindow: i,
            dragSnapToOrigin: r = !1,
          } = {}
        ) {
          if (
            ((this.startEvent = null),
            (this.lastMoveEvent = null),
            (this.lastMoveEventInfo = null),
            (this.handlers = {}),
            (this.contextWindow = window),
            (this.updatePoint = () => {
              if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
              let t = tR(this.lastMoveEventInfo, this.history),
                e = null !== this.startEvent,
                n =
                  (function (t, e) {
                    let n = tS(t.x, e.x),
                      i = tS(t.y, e.y);
                    return Math.sqrt(n ** 2 + i ** 2);
                  })(t.offset, { x: 0, y: 0 }) >= 3;
              if (!e && !n) return;
              let { point: i } = t,
                { timestamp: r } = U.frameData;
              this.history.push({ ...i, timestamp: r });
              let { onStart: s, onMove: o } = this.handlers;
              e ||
                (s && s(this.lastMoveEvent, t),
                (this.startEvent = this.lastMoveEvent)),
                o && o(this.lastMoveEvent, t);
            }),
            (this.handlePointerMove = (t, e) => {
              (this.lastMoveEvent = t),
                (this.lastMoveEventInfo = tM(e, this.transformPagePoint)),
                U.Wi.update(this.updatePoint, !0);
            }),
            (this.handlePointerUp = (t, e) => {
              this.end();
              let {
                onEnd: n,
                onSessionEnd: i,
                resumeAnimation: r,
              } = this.handlers;
              if (
                (this.dragSnapToOrigin && r && r(),
                !(this.lastMoveEvent && this.lastMoveEventInfo))
              )
                return;
              let s = tR(
                "pointercancel" === t.type
                  ? this.lastMoveEventInfo
                  : tM(e, this.transformPagePoint),
                this.history
              );
              this.startEvent && n && n(t, s), i && i(t, s);
            }),
            !Z(t))
          )
            return;
          (this.dragSnapToOrigin = r),
            (this.handlers = e),
            (this.transformPagePoint = n),
            (this.contextWindow = i || window);
          let s = G(t),
            o = tM(s, this.transformPagePoint),
            { point: a } = o,
            { timestamp: l } = U.frameData;
          this.history = [{ ...a, timestamp: l }];
          let { onSessionStart: u } = e;
          u && u(t, tR(o, this.history)),
            (this.removeListeners = (0, J.z)(
              K(this.contextWindow, "pointermove", this.handlePointerMove),
              K(this.contextWindow, "pointerup", this.handlePointerUp),
              K(this.contextWindow, "pointercancel", this.handlePointerUp)
            ));
        }
        updateHandlers(t) {
          this.handlers = t;
        }
        end() {
          this.removeListeners && this.removeListeners(),
            (0, U.Pn)(this.updatePoint);
        }
      }
      function tM(t, e) {
        return e ? { point: e(t.point) } : t;
      }
      function tD(t, e) {
        return { x: t.x - e.x, y: t.y - e.y };
      }
      function tR({ point: t }, e) {
        return {
          point: t,
          delta: tD(t, tk(e)),
          offset: tD(t, e[0]),
          velocity: (function (t, e) {
            if (t.length < 2) return { x: 0, y: 0 };
            let n = t.length - 1,
              i = null,
              r = tk(t);
            for (
              ;
              n >= 0 &&
              ((i = t[n]), !(r.timestamp - i.timestamp > (0, tE.w)(0.1)));

            )
              n--;
            if (!i) return { x: 0, y: 0 };
            let s = (0, tE.X)(r.timestamp - i.timestamp);
            if (0 === s) return { x: 0, y: 0 };
            let o = { x: (r.x - i.x) / s, y: (r.y - i.y) / s };
            return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o;
          })(e, 0),
        };
      }
      function tk(t) {
        return t[t.length - 1];
      }
      var tL = n(2868),
        tj = n(7);
      function tB(t) {
        return t.max - t.min;
      }
      function tF(t, e = 0, n = 0.01) {
        return Math.abs(t - e) <= n;
      }
      function tO(t, e, n, i = 0.5) {
        (t.origin = i),
          (t.originPoint = (0, tj.C)(e.min, e.max, t.origin)),
          (t.scale = tB(n) / tB(e)),
          (tF(t.scale, 1, 1e-4) || isNaN(t.scale)) && (t.scale = 1),
          (t.translate = (0, tj.C)(n.min, n.max, t.origin) - t.originPoint),
          (tF(t.translate) || isNaN(t.translate)) && (t.translate = 0);
      }
      function tW(t, e, n, i) {
        tO(t.x, e.x, n.x, i ? i.originX : void 0),
          tO(t.y, e.y, n.y, i ? i.originY : void 0);
      }
      function tN(t, e, n) {
        (t.min = n.min + e.min), (t.max = t.min + tB(e));
      }
      function t$(t, e, n) {
        (t.min = e.min - n.min), (t.max = t.min + tB(e));
      }
      function tI(t, e, n) {
        t$(t.x, e.x, n.x), t$(t.y, e.y, n.y);
      }
      var t_ = n(3021);
      function tU(t, e, n) {
        return {
          min: void 0 !== e ? t.min + e : void 0,
          max: void 0 !== n ? t.max + n - (t.max - t.min) : void 0,
        };
      }
      function tH(t, e) {
        let n = e.min - t.min,
          i = e.max - t.max;
        return (
          e.max - e.min < t.max - t.min && ([n, i] = [i, n]), { min: n, max: i }
        );
      }
      function tz(t, e, n) {
        return { min: tX(t, e), max: tX(t, n) };
      }
      function tX(t, e) {
        return "number" == typeof t ? t : t[e] || 0;
      }
      var tY = n(4597);
      function tZ(t) {
        return [t("x"), t("y")];
      }
      var tG = n(3937),
        tq = n(4902),
        tK = n(3681),
        tJ = n(9883);
      let tQ = ({ current: t }) => (t ? t.ownerDocument.defaultView : null),
        t0 = new WeakMap();
      class t1 {
        constructor(t) {
          (this.openGlobalLock = null),
            (this.isDragging = !1),
            (this.currentDirection = null),
            (this.originPoint = { x: 0, y: 0 }),
            (this.constraints = !1),
            (this.hasMutatedConstraints = !1),
            (this.elastic = (0, tY.dO)()),
            (this.visualElement = t);
        }
        start(t, { snapToCursor: e = !1 } = {}) {
          let { presenceContext: n } = this.visualElement;
          if (n && !1 === n.isPresent) return;
          let { dragSnapToOrigin: i } = this.getProps();
          this.panSession = new tV(
            t,
            {
              onSessionStart: (t) => {
                let { dragSnapToOrigin: n } = this.getProps();
                n ? this.pauseAnimation() : this.stopAnimation(),
                  e && this.snapToCursor(G(t, "page").point);
              },
              onStart: (t, e) => {
                let {
                  drag: n,
                  dragPropagation: i,
                  onDragStart: r,
                } = this.getProps();
                if (
                  n &&
                  !i &&
                  (this.openGlobalLock && this.openGlobalLock(),
                  (this.openGlobalLock = tn(n)),
                  !this.openGlobalLock)
                )
                  return;
                (this.isDragging = !0),
                  (this.currentDirection = null),
                  this.resolveConstraints(),
                  this.visualElement.projection &&
                    ((this.visualElement.projection.isAnimationBlocked = !0),
                    (this.visualElement.projection.target = void 0)),
                  tZ((t) => {
                    let e = this.getAxisMotionValue(t).get() || 0;
                    if (tK.aQ.test(e)) {
                      let { projection: n } = this.visualElement;
                      if (n && n.layout) {
                        let i = n.layout.layoutBox[t];
                        if (i) {
                          let t = tB(i);
                          e = t * (parseFloat(e) / 100);
                        }
                      }
                    }
                    this.originPoint[t] = e;
                  }),
                  r && U.Wi.update(() => r(t, e), !1, !0);
                let { animationState: s } = this.visualElement;
                s && s.setActive("whileDrag", !0);
              },
              onMove: (t, e) => {
                let {
                  dragPropagation: n,
                  dragDirectionLock: i,
                  onDirectionLock: r,
                  onDrag: s,
                } = this.getProps();
                if (!n && !this.openGlobalLock) return;
                let { offset: o } = e;
                if (i && null === this.currentDirection) {
                  (this.currentDirection = (function (t, e = 10) {
                    let n = null;
                    return (
                      Math.abs(t.y) > e
                        ? (n = "y")
                        : Math.abs(t.x) > e && (n = "x"),
                      n
                    );
                  })(o)),
                    null !== this.currentDirection &&
                      r &&
                      r(this.currentDirection);
                  return;
                }
                this.updateAxis("x", e.point, o),
                  this.updateAxis("y", e.point, o),
                  this.visualElement.render(),
                  s && s(t, e);
              },
              onSessionEnd: (t, e) => this.stop(t, e),
              resumeAnimation: () =>
                tZ((t) => {
                  var e;
                  return (
                    "paused" === this.getAnimationState(t) &&
                    (null === (e = this.getAxisMotionValue(t).animation) ||
                    void 0 === e
                      ? void 0
                      : e.play())
                  );
                }),
            },
            {
              transformPagePoint: this.visualElement.getTransformPagePoint(),
              dragSnapToOrigin: i,
              contextWindow: tQ(this.visualElement),
            }
          );
        }
        stop(t, e) {
          let n = this.isDragging;
          if ((this.cancel(), !n)) return;
          let { velocity: i } = e;
          this.startAnimation(i);
          let { onDragEnd: r } = this.getProps();
          r && U.Wi.update(() => r(t, e));
        }
        cancel() {
          this.isDragging = !1;
          let { projection: t, animationState: e } = this.visualElement;
          t && (t.isAnimationBlocked = !1),
            this.panSession && this.panSession.end(),
            (this.panSession = void 0);
          let { dragPropagation: n } = this.getProps();
          !n &&
            this.openGlobalLock &&
            (this.openGlobalLock(), (this.openGlobalLock = null)),
            e && e.setActive("whileDrag", !1);
        }
        updateAxis(t, e, n) {
          let { drag: i } = this.getProps();
          if (!n || !t2(t, i, this.currentDirection)) return;
          let r = this.getAxisMotionValue(t),
            s = this.originPoint[t] + n[t];
          this.constraints &&
            this.constraints[t] &&
            (s = (function (t, { min: e, max: n }, i) {
              return (
                void 0 !== e && t < e
                  ? (t = i ? (0, tj.C)(e, t, i.min) : Math.max(t, e))
                  : void 0 !== n &&
                    t > n &&
                    (t = i ? (0, tj.C)(n, t, i.max) : Math.min(t, n)),
                t
              );
            })(s, this.constraints[t], this.elastic[t])),
            r.set(s);
        }
        resolveConstraints() {
          var t;
          let { dragConstraints: e, dragElastic: n } = this.getProps(),
            i =
              this.visualElement.projection &&
              !this.visualElement.projection.layout
                ? this.visualElement.projection.measure(!1)
                : null === (t = this.visualElement.projection) || void 0 === t
                ? void 0
                : t.layout,
            r = this.constraints;
          e && (0, c.I)(e)
            ? this.constraints ||
              (this.constraints = this.resolveRefConstraints())
            : e && i
            ? (this.constraints = (function (
                t,
                { top: e, left: n, bottom: i, right: r }
              ) {
                return { x: tU(t.x, n, r), y: tU(t.y, e, i) };
              })(i.layoutBox, e))
            : (this.constraints = !1),
            (this.elastic = (function (t = 0.35) {
              return (
                !1 === t ? (t = 0) : !0 === t && (t = 0.35),
                { x: tz(t, "left", "right"), y: tz(t, "top", "bottom") }
              );
            })(n)),
            r !== this.constraints &&
              i &&
              this.constraints &&
              !this.hasMutatedConstraints &&
              tZ((t) => {
                this.getAxisMotionValue(t) &&
                  (this.constraints[t] = (function (t, e) {
                    let n = {};
                    return (
                      void 0 !== e.min && (n.min = e.min - t.min),
                      void 0 !== e.max && (n.max = e.max - t.min),
                      n
                    );
                  })(i.layoutBox[t], this.constraints[t]));
              });
        }
        resolveRefConstraints() {
          var t;
          let { dragConstraints: e, onMeasureDragConstraints: n } =
            this.getProps();
          if (!e || !(0, c.I)(e)) return !1;
          let i = e.current;
          (0, tC.k)(
            null !== i,
            "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop."
          );
          let { projection: r } = this.visualElement;
          if (!r || !r.layout) return !1;
          let s = (0, tG.z)(
              i,
              r.root,
              this.visualElement.getTransformPagePoint()
            ),
            o = { x: tH((t = r.layout.layoutBox).x, s.x), y: tH(t.y, s.y) };
          if (n) {
            let t = n((0, tq.z2)(o));
            (this.hasMutatedConstraints = !!t), t && (o = (0, tq.i8)(t));
          }
          return o;
        }
        startAnimation(t) {
          let {
              drag: e,
              dragMomentum: n,
              dragElastic: i,
              dragTransition: r,
              dragSnapToOrigin: s,
              onDragTransitionEnd: o,
            } = this.getProps(),
            a = this.constraints || {},
            l = tZ((o) => {
              if (!t2(o, e, this.currentDirection)) return;
              let l = (a && a[o]) || {};
              s && (l = { min: 0, max: 0 });
              let u = {
                type: "inertia",
                velocity: n ? t[o] : 0,
                bounceStiffness: i ? 200 : 1e6,
                bounceDamping: i ? 40 : 1e7,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...r,
                ...l,
              };
              return this.startAxisValueAnimation(o, u);
            });
          return Promise.all(l).then(o);
        }
        startAxisValueAnimation(t, e) {
          let n = this.getAxisMotionValue(t);
          return n.start((0, tJ.v)(t, n, 0, e));
        }
        stopAnimation() {
          tZ((t) => this.getAxisMotionValue(t).stop());
        }
        pauseAnimation() {
          tZ((t) => {
            var e;
            return null === (e = this.getAxisMotionValue(t).animation) ||
              void 0 === e
              ? void 0
              : e.pause();
          });
        }
        getAnimationState(t) {
          var e;
          return null === (e = this.getAxisMotionValue(t).animation) ||
            void 0 === e
            ? void 0
            : e.state;
        }
        getAxisMotionValue(t) {
          let e = "_drag" + t.toUpperCase(),
            n = this.visualElement.getProps(),
            i = n[e];
          return (
            i ||
            this.visualElement.getValue(
              t,
              (n.initial ? n.initial[t] : void 0) || 0
            )
          );
        }
        snapToCursor(t) {
          tZ((e) => {
            let { drag: n } = this.getProps();
            if (!t2(e, n, this.currentDirection)) return;
            let { projection: i } = this.visualElement,
              r = this.getAxisMotionValue(e);
            if (i && i.layout) {
              let { min: n, max: s } = i.layout.layoutBox[e];
              r.set(t[e] - (0, tj.C)(n, s, 0.5));
            }
          });
        }
        scalePositionWithinConstraints() {
          if (!this.visualElement.current) return;
          let { drag: t, dragConstraints: e } = this.getProps(),
            { projection: n } = this.visualElement;
          if (!(0, c.I)(e) || !n || !this.constraints) return;
          this.stopAnimation();
          let i = { x: 0, y: 0 };
          tZ((t) => {
            let e = this.getAxisMotionValue(t);
            if (e) {
              let n = e.get();
              i[t] = (function (t, e) {
                let n = 0.5,
                  i = tB(t),
                  r = tB(e);
                return (
                  r > i
                    ? (n = (0, tL.Y)(e.min, e.max - i, t.min))
                    : i > r && (n = (0, tL.Y)(t.min, t.max - r, e.min)),
                  (0, t_.u)(0, 1, n)
                );
              })({ min: n, max: n }, this.constraints[t]);
            }
          });
          let { transformTemplate: r } = this.visualElement.getProps();
          (this.visualElement.current.style.transform = r ? r({}, "") : "none"),
            n.root && n.root.updateScroll(),
            n.updateLayout(),
            this.resolveConstraints(),
            tZ((e) => {
              if (!t2(e, t, null)) return;
              let n = this.getAxisMotionValue(e),
                { min: r, max: s } = this.constraints[e];
              n.set((0, tj.C)(r, s, i[e]));
            });
        }
        addListeners() {
          if (!this.visualElement.current) return;
          t0.set(this.visualElement, this);
          let t = this.visualElement.current,
            e = K(t, "pointerdown", (t) => {
              let { drag: e, dragListener: n = !0 } = this.getProps();
              e && n && this.start(t);
            }),
            n = () => {
              let { dragConstraints: t } = this.getProps();
              (0, c.I)(t) && (this.constraints = this.resolveRefConstraints());
            },
            { projection: i } = this.visualElement,
            r = i.addEventListener("measure", n);
          i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()),
            n();
          let s = Y(window, "resize", () =>
              this.scalePositionWithinConstraints()
            ),
            o = i.addEventListener(
              "didUpdate",
              ({ delta: t, hasLayoutChanged: e }) => {
                this.isDragging &&
                  e &&
                  (tZ((e) => {
                    let n = this.getAxisMotionValue(e);
                    n &&
                      ((this.originPoint[e] += t[e].translate),
                      n.set(n.get() + t[e].translate));
                  }),
                  this.visualElement.render());
              }
            );
          return () => {
            s(), e(), r(), o && o();
          };
        }
        getProps() {
          let t = this.visualElement.getProps(),
            {
              drag: e = !1,
              dragDirectionLock: n = !1,
              dragPropagation: i = !1,
              dragConstraints: r = !1,
              dragElastic: s = 0.35,
              dragMomentum: o = !0,
            } = t;
          return {
            ...t,
            drag: e,
            dragDirectionLock: n,
            dragPropagation: i,
            dragConstraints: r,
            dragElastic: s,
            dragMomentum: o,
          };
        }
      }
      function t2(t, e, n) {
        return (!0 === e || e === t) && (null === n || n === t);
      }
      let t3 = (t) => (e, n) => {
          t && U.Wi.update(() => t(e, n));
        },
        t5 = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
      function t4(t, e) {
        return e.max === e.min ? 0 : (t / (e.max - e.min)) * 100;
      }
      let t9 = {
        correct: (t, e) => {
          if (!e.target) return t;
          if ("string" == typeof t) {
            if (!tK.px.test(t)) return t;
            t = parseFloat(t);
          }
          let n = t4(t, e.target.x),
            i = t4(t, e.target.y);
          return `${n}% ${i}%`;
        },
      };
      var t8 = n(9155),
        t6 = n(611);
      class t7 extends r.Component {
        componentDidMount() {
          let {
              visualElement: t,
              layoutGroup: e,
              switchLayoutGroup: n,
              layoutId: i,
            } = this.props,
            { projection: r } = t;
          (0, t6.B)(ee),
            r &&
              (e.group && e.group.add(r),
              n && n.register && i && n.register(r),
              r.root.didUpdate(),
              r.addEventListener("animationComplete", () => {
                this.safeToRemove();
              }),
              r.setOptions({
                ...r.options,
                onExitComplete: () => this.safeToRemove(),
              })),
            (t5.hasEverUpdated = !0);
        }
        getSnapshotBeforeUpdate(t) {
          let {
              layoutDependency: e,
              visualElement: n,
              drag: i,
              isPresent: r,
            } = this.props,
            s = n.projection;
          return (
            s &&
              ((s.isPresent = r),
              i || t.layoutDependency !== e || void 0 === e
                ? s.willUpdate()
                : this.safeToRemove(),
              t.isPresent === r ||
                (r
                  ? s.promote()
                  : s.relegate() ||
                    U.Wi.postRender(() => {
                      let t = s.getStack();
                      (t && t.members.length) || this.safeToRemove();
                    }))),
            null
          );
        }
        componentDidUpdate() {
          let { projection: t } = this.props.visualElement;
          t &&
            (t.root.didUpdate(),
            queueMicrotask(() => {
              !t.currentAnimation && t.isLead() && this.safeToRemove();
            }));
        }
        componentWillUnmount() {
          let {
              visualElement: t,
              layoutGroup: e,
              switchLayoutGroup: n,
            } = this.props,
            { projection: i } = t;
          i &&
            (i.scheduleCheckAfterUnmount(),
            e && e.group && e.group.remove(i),
            n && n.deregister && n.deregister(i));
        }
        safeToRemove() {
          let { safeToRemove: t } = this.props;
          t && t();
        }
        render() {
          return null;
        }
      }
      function et(t) {
        let [e, n] = (function () {
            let t = (0, r.useContext)(a.O);
            if (null === t) return [!0, null];
            let { isPresent: e, onExitComplete: n, register: i } = t,
              s = (0, r.useId)();
            return (
              (0, r.useEffect)(() => i(s), []),
              !e && n ? [!1, () => n && n(s)] : [!0]
            );
          })(),
          i = (0, r.useContext)(g.p);
        return r.createElement(t7, {
          ...t,
          layoutGroup: i,
          switchLayoutGroup: (0, r.useContext)(y),
          isPresent: e,
          safeToRemove: n,
        });
      }
      let ee = {
        borderRadius: {
          ...t9,
          applyTo: [
            "borderTopLeftRadius",
            "borderTopRightRadius",
            "borderBottomLeftRadius",
            "borderBottomRightRadius",
          ],
        },
        borderTopLeftRadius: t9,
        borderTopRightRadius: t9,
        borderBottomLeftRadius: t9,
        borderBottomRightRadius: t9,
        boxShadow: {
          correct: (t, { treeScale: e, projectionDelta: n }) => {
            let i = t8.P.parse(t);
            if (i.length > 5) return t;
            let r = t8.P.createTransformer(t),
              s = "number" != typeof i[0] ? 1 : 0,
              o = n.x.scale * e.x,
              a = n.y.scale * e.y;
            (i[0 + s] /= o), (i[1 + s] /= a);
            let l = (0, tj.C)(o, a, 0.5);
            return (
              "number" == typeof i[2 + s] && (i[2 + s] /= l),
              "number" == typeof i[3 + s] && (i[3 + s] /= l),
              r(i)
            );
          },
        },
      };
      var en = n(7026),
        ei = n(927);
      let er = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
        es = er.length,
        eo = (t) => ("string" == typeof t ? parseFloat(t) : t),
        ea = (t) => "number" == typeof t || tK.px.test(t);
      function el(t, e) {
        return void 0 !== t[e] ? t[e] : t.borderRadius;
      }
      let eu = ec(0, 0.5, ei.Bn),
        eh = ec(0.5, 0.95, ta.Z);
      function ec(t, e, n) {
        return (i) => (i < t ? 0 : i > e ? 1 : n((0, tL.Y)(t, e, i)));
      }
      function ed(t, e) {
        (t.min = e.min), (t.max = e.max);
      }
      function ef(t, e) {
        ed(t.x, e.x), ed(t.y, e.y);
      }
      var ep = n(1841);
      function em(t, e, n, i, r) {
        return (
          (t -= e),
          (t = (0, ep.q2)(t, 1 / n, i)),
          void 0 !== r && (t = (0, ep.q2)(t, 1 / r, i)),
          t
        );
      }
      function ev(t, e, [n, i, r], s, o) {
        !(function (t, e = 0, n = 1, i = 0.5, r, s = t, o = t) {
          if (tK.aQ.test(e)) {
            e = parseFloat(e);
            let t = (0, tj.C)(o.min, o.max, e / 100);
            e = t - o.min;
          }
          if ("number" != typeof e) return;
          let a = (0, tj.C)(s.min, s.max, i);
          t === s && (a -= e),
            (t.min = em(t.min, e, n, a, r)),
            (t.max = em(t.max, e, n, a, r));
        })(t, e[n], e[i], e[r], e.scale, s, o);
      }
      let eg = ["x", "scaleX", "originX"],
        ey = ["y", "scaleY", "originY"];
      function ex(t, e, n, i) {
        ev(t.x, e, eg, n ? n.x : void 0, i ? i.x : void 0),
          ev(t.y, e, ey, n ? n.y : void 0, i ? i.y : void 0);
      }
      var eP = n(7924);
      function ew(t) {
        return 0 === t.translate && 1 === t.scale;
      }
      function eb(t) {
        return ew(t.x) && ew(t.y);
      }
      function eA(t, e) {
        return (
          Math.round(t.x.min) === Math.round(e.x.min) &&
          Math.round(t.x.max) === Math.round(e.x.max) &&
          Math.round(t.y.min) === Math.round(e.y.min) &&
          Math.round(t.y.max) === Math.round(e.y.max)
        );
      }
      function eT(t) {
        return tB(t.x) / tB(t.y);
      }
      var eC = n(7081);
      class eE {
        constructor() {
          this.members = [];
        }
        add(t) {
          (0, eC.y4)(this.members, t), t.scheduleRender();
        }
        remove(t) {
          if (
            ((0, eC.cl)(this.members, t),
            t === this.prevLead && (this.prevLead = void 0),
            t === this.lead)
          ) {
            let t = this.members[this.members.length - 1];
            t && this.promote(t);
          }
        }
        relegate(t) {
          let e;
          let n = this.members.findIndex((e) => t === e);
          if (0 === n) return !1;
          for (let t = n; t >= 0; t--) {
            let n = this.members[t];
            if (!1 !== n.isPresent) {
              e = n;
              break;
            }
          }
          return !!e && (this.promote(e), !0);
        }
        promote(t, e) {
          let n = this.lead;
          if (t !== n && ((this.prevLead = n), (this.lead = t), t.show(), n)) {
            n.instance && n.scheduleRender(),
              t.scheduleRender(),
              (t.resumeFrom = n),
              e && (t.resumeFrom.preserveOpacity = !0),
              n.snapshot &&
                ((t.snapshot = n.snapshot),
                (t.snapshot.latestValues =
                  n.animationValues || n.latestValues)),
              t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
            let { crossfade: i } = t.options;
            !1 === i && n.hide();
          }
        }
        exitAnimationComplete() {
          this.members.forEach((t) => {
            let { options: e, resumingFrom: n } = t;
            e.onExitComplete && e.onExitComplete(),
              n && n.options.onExitComplete && n.options.onExitComplete();
          });
        }
        scheduleRender() {
          this.members.forEach((t) => {
            t.instance && t.scheduleRender(!1);
          });
        }
        removeLeadSnapshot() {
          this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
        }
      }
      function eS(t, e, n) {
        let i = "",
          r = t.x.translate / e.x,
          s = t.y.translate / e.y;
        if (
          ((r || s) && (i = `translate3d(${r}px, ${s}px, 0) `),
          (1 !== e.x || 1 !== e.y) && (i += `scale(${1 / e.x}, ${1 / e.y}) `),
          n)
        ) {
          let { rotate: t, rotateX: e, rotateY: r } = n;
          t && (i += `rotate(${t}deg) `),
            e && (i += `rotateX(${e}deg) `),
            r && (i += `rotateY(${r}deg) `);
        }
        let o = t.x.scale * e.x,
          a = t.y.scale * e.y;
        return (1 !== o || 1 !== a) && (i += `scale(${o}, ${a})`), i || "none";
      }
      var eV = n(121);
      let eM = (t, e) => t.depth - e.depth;
      class eD {
        constructor() {
          (this.children = []), (this.isDirty = !1);
        }
        add(t) {
          (0, eC.y4)(this.children, t), (this.isDirty = !0);
        }
        remove(t) {
          (0, eC.cl)(this.children, t), (this.isDirty = !0);
        }
        forEach(t) {
          this.isDirty && this.children.sort(eM),
            (this.isDirty = !1),
            this.children.forEach(t);
        }
      }
      var eR = n(4457),
        ek = n(4854);
      let eL = ["", "X", "Y", "Z"],
        ej = { visibility: "hidden" },
        eB = 0,
        eF = {
          type: "projectionFrame",
          totalNodes: 0,
          resolvedTargetDeltas: 0,
          recalculatedProjection: 0,
        };
      function eO({
        attachResizeListener: t,
        defaultParent: e,
        measureScroll: n,
        checkIsScrollRoot: i,
        resetTransform: r,
      }) {
        return class {
          constructor(t = {}, n = null == e ? void 0 : e()) {
            (this.id = eB++),
              (this.animationId = 0),
              (this.children = new Set()),
              (this.options = {}),
              (this.isTreeAnimating = !1),
              (this.isAnimationBlocked = !1),
              (this.isLayoutDirty = !1),
              (this.isProjectionDirty = !1),
              (this.isSharedProjectionDirty = !1),
              (this.isTransformDirty = !1),
              (this.updateManuallyBlocked = !1),
              (this.updateBlockedByResize = !1),
              (this.isUpdating = !1),
              (this.isSVG = !1),
              (this.needsReset = !1),
              (this.shouldResetTransform = !1),
              (this.treeScale = { x: 1, y: 1 }),
              (this.eventHandlers = new Map()),
              (this.hasTreeAnimated = !1),
              (this.updateScheduled = !1),
              (this.projectionUpdateScheduled = !1),
              (this.checkUpdateFailed = () => {
                this.isUpdating &&
                  ((this.isUpdating = !1), this.clearAllSnapshots());
              }),
              (this.updateProjection = () => {
                (this.projectionUpdateScheduled = !1),
                  (eF.totalNodes =
                    eF.resolvedTargetDeltas =
                    eF.recalculatedProjection =
                      0),
                  this.nodes.forEach(e$),
                  this.nodes.forEach(eY),
                  this.nodes.forEach(eZ),
                  this.nodes.forEach(eI),
                  window.MotionDebug && window.MotionDebug.record(eF);
              }),
              (this.hasProjected = !1),
              (this.isVisible = !0),
              (this.animationProgress = 0),
              (this.sharedNodes = new Map()),
              (this.latestValues = t),
              (this.root = n ? n.root || n : this),
              (this.path = n ? [...n.path, n] : []),
              (this.parent = n),
              (this.depth = n ? n.depth + 1 : 0);
            for (let t = 0; t < this.path.length; t++)
              this.path[t].shouldResetTransform = !0;
            this.root === this && (this.nodes = new eD());
          }
          addEventListener(t, e) {
            return (
              this.eventHandlers.has(t) ||
                this.eventHandlers.set(t, new en.L()),
              this.eventHandlers.get(t).add(e)
            );
          }
          notifyListeners(t, ...e) {
            let n = this.eventHandlers.get(t);
            n && n.notify(...e);
          }
          hasListeners(t) {
            return this.eventHandlers.has(t);
          }
          mount(e, n = this.root.hasTreeAnimated) {
            if (this.instance) return;
            (this.isSVG = (0, eR.v)(e)), (this.instance = e);
            let { layoutId: i, layout: r, visualElement: s } = this.options;
            if (
              (s && !s.current && s.mount(e),
              this.root.nodes.add(this),
              this.parent && this.parent.children.add(this),
              n && (r || i) && (this.isLayoutDirty = !0),
              t)
            ) {
              let n;
              let i = () => (this.root.updateBlockedByResize = !1);
              t(e, () => {
                (this.root.updateBlockedByResize = !0),
                  n && n(),
                  (n = (function (t, e) {
                    let n = performance.now(),
                      i = ({ timestamp: r }) => {
                        let s = r - n;
                        s >= e && ((0, U.Pn)(i), t(s - e));
                      };
                    return U.Wi.read(i, !0), () => (0, U.Pn)(i);
                  })(i, 250)),
                  t5.hasAnimatedSinceResize &&
                    ((t5.hasAnimatedSinceResize = !1), this.nodes.forEach(eX));
              });
            }
            i && this.root.registerSharedNode(i, this),
              !1 !== this.options.animate &&
                s &&
                (i || r) &&
                this.addEventListener(
                  "didUpdate",
                  ({
                    delta: t,
                    hasLayoutChanged: e,
                    hasRelativeTargetChanged: n,
                    layout: i,
                  }) => {
                    if (this.isTreeAnimationBlocked()) {
                      (this.target = void 0), (this.relativeTarget = void 0);
                      return;
                    }
                    let r =
                        this.options.transition ||
                        s.getDefaultTransition() ||
                        e0,
                      {
                        onLayoutAnimationStart: o,
                        onLayoutAnimationComplete: a,
                      } = s.getProps(),
                      l = !this.targetLayout || !eA(this.targetLayout, i) || n,
                      u = !e && n;
                    if (
                      this.options.layoutRoot ||
                      (this.resumeFrom && this.resumeFrom.instance) ||
                      u ||
                      (e && (l || !this.currentAnimation))
                    ) {
                      this.resumeFrom &&
                        ((this.resumingFrom = this.resumeFrom),
                        (this.resumingFrom.resumingFrom = void 0)),
                        this.setAnimationOrigin(t, u);
                      let e = {
                        ...(0, eP.e)(r, "layout"),
                        onPlay: o,
                        onComplete: a,
                      };
                      (s.shouldReduceMotion || this.options.layoutRoot) &&
                        ((e.delay = 0), (e.type = !1)),
                        this.startAnimation(e);
                    } else
                      e || eX(this),
                        this.isLead() &&
                          this.options.onExitComplete &&
                          this.options.onExitComplete();
                    this.targetLayout = i;
                  }
                );
          }
          unmount() {
            this.options.layoutId && this.willUpdate(),
              this.root.nodes.remove(this);
            let t = this.getStack();
            t && t.remove(this),
              this.parent && this.parent.children.delete(this),
              (this.instance = void 0),
              (0, U.Pn)(this.updateProjection);
          }
          blockUpdate() {
            this.updateManuallyBlocked = !0;
          }
          unblockUpdate() {
            this.updateManuallyBlocked = !1;
          }
          isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize;
          }
          isTreeAnimationBlocked() {
            return (
              this.isAnimationBlocked ||
              (this.parent && this.parent.isTreeAnimationBlocked()) ||
              !1
            );
          }
          startUpdate() {
            !this.isUpdateBlocked() &&
              ((this.isUpdating = !0),
              this.nodes && this.nodes.forEach(eG),
              this.animationId++);
          }
          getTransformTemplate() {
            let { visualElement: t } = this.options;
            return t && t.getProps().transformTemplate;
          }
          willUpdate(t = !0) {
            if (
              ((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())
            ) {
              this.options.onExitComplete && this.options.onExitComplete();
              return;
            }
            if (
              (this.root.isUpdating || this.root.startUpdate(),
              this.isLayoutDirty)
            )
              return;
            this.isLayoutDirty = !0;
            for (let t = 0; t < this.path.length; t++) {
              let e = this.path[t];
              (e.shouldResetTransform = !0),
                e.updateScroll("snapshot"),
                e.options.layoutRoot && e.willUpdate(!1);
            }
            let { layoutId: e, layout: n } = this.options;
            if (void 0 === e && !n) return;
            let i = this.getTransformTemplate();
            (this.prevTransformTemplateValue = i
              ? i(this.latestValues, "")
              : void 0),
              this.updateSnapshot(),
              t && this.notifyListeners("willUpdate");
          }
          update() {
            this.updateScheduled = !1;
            let t = this.isUpdateBlocked();
            if (t) {
              this.unblockUpdate(),
                this.clearAllSnapshots(),
                this.nodes.forEach(eU);
              return;
            }
            this.isUpdating || this.nodes.forEach(eH),
              (this.isUpdating = !1),
              this.nodes.forEach(ez),
              this.nodes.forEach(eW),
              this.nodes.forEach(eN),
              this.clearAllSnapshots();
            let e = performance.now();
            (U.frameData.delta = (0, t_.u)(
              0,
              1e3 / 60,
              e - U.frameData.timestamp
            )),
              (U.frameData.timestamp = e),
              (U.frameData.isProcessing = !0),
              U.S6.update.process(U.frameData),
              U.S6.preRender.process(U.frameData),
              U.S6.render.process(U.frameData),
              (U.frameData.isProcessing = !1);
          }
          didUpdate() {
            this.updateScheduled ||
              ((this.updateScheduled = !0),
              queueMicrotask(() => this.update()));
          }
          clearAllSnapshots() {
            this.nodes.forEach(e_), this.sharedNodes.forEach(eq);
          }
          scheduleUpdateProjection() {
            this.projectionUpdateScheduled ||
              ((this.projectionUpdateScheduled = !0),
              U.Wi.preRender(this.updateProjection, !1, !0));
          }
          scheduleCheckAfterUnmount() {
            U.Wi.postRender(() => {
              this.isLayoutDirty
                ? this.root.didUpdate()
                : this.root.checkUpdateFailed();
            });
          }
          updateSnapshot() {
            !this.snapshot && this.instance && (this.snapshot = this.measure());
          }
          updateLayout() {
            if (
              !this.instance ||
              (this.updateScroll(),
              !(this.options.alwaysMeasureLayout && this.isLead()) &&
                !this.isLayoutDirty)
            )
              return;
            if (this.resumeFrom && !this.resumeFrom.instance)
              for (let t = 0; t < this.path.length; t++) {
                let e = this.path[t];
                e.updateScroll();
              }
            let t = this.layout;
            (this.layout = this.measure(!1)),
              (this.layoutCorrected = (0, tY.dO)()),
              (this.isLayoutDirty = !1),
              (this.projectionDelta = void 0),
              this.notifyListeners("measure", this.layout.layoutBox);
            let { visualElement: e } = this.options;
            e &&
              e.notify(
                "LayoutMeasure",
                this.layout.layoutBox,
                t ? t.layoutBox : void 0
              );
          }
          updateScroll(t = "measure") {
            let e = !!(this.options.layoutScroll && this.instance);
            this.scroll &&
              this.scroll.animationId === this.root.animationId &&
              this.scroll.phase === t &&
              (e = !1),
              e &&
                (this.scroll = {
                  animationId: this.root.animationId,
                  phase: t,
                  isRoot: i(this.instance),
                  offset: n(this.instance),
                });
          }
          resetTransform() {
            if (!r) return;
            let t = this.isLayoutDirty || this.shouldResetTransform,
              e = this.projectionDelta && !eb(this.projectionDelta),
              n = this.getTransformTemplate(),
              i = n ? n(this.latestValues, "") : void 0,
              s = i !== this.prevTransformTemplateValue;
            t &&
              (e || (0, eV.ud)(this.latestValues) || s) &&
              (r(this.instance, i),
              (this.shouldResetTransform = !1),
              this.scheduleRender());
          }
          measure(t = !0) {
            var e;
            let n = this.measurePageBox(),
              i = this.removeElementScroll(n);
            return (
              t && (i = this.removeTransform(i)),
              e3((e = i).x),
              e3(e.y),
              {
                animationId: this.root.animationId,
                measuredBox: n,
                layoutBox: i,
                latestValues: {},
                source: this.id,
              }
            );
          }
          measurePageBox() {
            let { visualElement: t } = this.options;
            if (!t) return (0, tY.dO)();
            let e = t.measureViewportBox(),
              { scroll: n } = this.root;
            return (
              n && ((0, ep.am)(e.x, n.offset.x), (0, ep.am)(e.y, n.offset.y)), e
            );
          }
          removeElementScroll(t) {
            let e = (0, tY.dO)();
            ef(e, t);
            for (let n = 0; n < this.path.length; n++) {
              let i = this.path[n],
                { scroll: r, options: s } = i;
              if (i !== this.root && r && s.layoutScroll) {
                if (r.isRoot) {
                  ef(e, t);
                  let { scroll: n } = this.root;
                  n &&
                    ((0, ep.am)(e.x, -n.offset.x),
                    (0, ep.am)(e.y, -n.offset.y));
                }
                (0, ep.am)(e.x, r.offset.x), (0, ep.am)(e.y, r.offset.y);
              }
            }
            return e;
          }
          applyTransform(t, e = !1) {
            let n = (0, tY.dO)();
            ef(n, t);
            for (let t = 0; t < this.path.length; t++) {
              let i = this.path[t];
              !e &&
                i.options.layoutScroll &&
                i.scroll &&
                i !== i.root &&
                (0, ep.D2)(n, { x: -i.scroll.offset.x, y: -i.scroll.offset.y }),
                (0, eV.ud)(i.latestValues) && (0, ep.D2)(n, i.latestValues);
            }
            return (
              (0, eV.ud)(this.latestValues) && (0, ep.D2)(n, this.latestValues),
              n
            );
          }
          removeTransform(t) {
            let e = (0, tY.dO)();
            ef(e, t);
            for (let t = 0; t < this.path.length; t++) {
              let n = this.path[t];
              if (!n.instance || !(0, eV.ud)(n.latestValues)) continue;
              (0, eV.Lj)(n.latestValues) && n.updateSnapshot();
              let i = (0, tY.dO)(),
                r = n.measurePageBox();
              ef(i, r),
                ex(
                  e,
                  n.latestValues,
                  n.snapshot ? n.snapshot.layoutBox : void 0,
                  i
                );
            }
            return (0, eV.ud)(this.latestValues) && ex(e, this.latestValues), e;
          }
          setTargetDelta(t) {
            (this.targetDelta = t),
              this.root.scheduleUpdateProjection(),
              (this.isProjectionDirty = !0);
          }
          setOptions(t) {
            this.options = {
              ...this.options,
              ...t,
              crossfade: void 0 === t.crossfade || t.crossfade,
            };
          }
          clearMeasurements() {
            (this.scroll = void 0),
              (this.layout = void 0),
              (this.snapshot = void 0),
              (this.prevTransformTemplateValue = void 0),
              (this.targetDelta = void 0),
              (this.target = void 0),
              (this.isLayoutDirty = !1);
          }
          forceRelativeParentToResolveTarget() {
            this.relativeParent &&
              this.relativeParent.resolvedRelativeTargetAt !==
                U.frameData.timestamp &&
              this.relativeParent.resolveTargetDelta(!0);
          }
          resolveTargetDelta(t = !1) {
            var e, n, i, r;
            let s = this.getLead();
            this.isProjectionDirty ||
              (this.isProjectionDirty = s.isProjectionDirty),
              this.isTransformDirty ||
                (this.isTransformDirty = s.isTransformDirty),
              this.isSharedProjectionDirty ||
                (this.isSharedProjectionDirty = s.isSharedProjectionDirty);
            let o = !!this.resumingFrom || this !== s,
              a = !(
                t ||
                (o && this.isSharedProjectionDirty) ||
                this.isProjectionDirty ||
                (null === (e = this.parent) || void 0 === e
                  ? void 0
                  : e.isProjectionDirty) ||
                this.attemptToResolveRelativeTarget
              );
            if (a) return;
            let { layout: l, layoutId: u } = this.options;
            if (this.layout && (l || u)) {
              if (
                ((this.resolvedRelativeTargetAt = U.frameData.timestamp),
                !this.targetDelta && !this.relativeTarget)
              ) {
                let t = this.getClosestProjectingParent();
                t && t.layout && 1 !== this.animationProgress
                  ? ((this.relativeParent = t),
                    this.forceRelativeParentToResolveTarget(),
                    (this.relativeTarget = (0, tY.dO)()),
                    (this.relativeTargetOrigin = (0, tY.dO)()),
                    tI(
                      this.relativeTargetOrigin,
                      this.layout.layoutBox,
                      t.layout.layoutBox
                    ),
                    ef(this.relativeTarget, this.relativeTargetOrigin))
                  : (this.relativeParent = this.relativeTarget = void 0);
              }
              if (this.relativeTarget || this.targetDelta) {
                if (
                  ((this.target ||
                    ((this.target = (0, tY.dO)()),
                    (this.targetWithTransforms = (0, tY.dO)())),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.relativeParent &&
                    this.relativeParent.target)
                    ? (this.forceRelativeParentToResolveTarget(),
                      (n = this.target),
                      (i = this.relativeTarget),
                      (r = this.relativeParent.target),
                      tN(n.x, i.x, r.x),
                      tN(n.y, i.y, r.y))
                    : this.targetDelta
                    ? (this.resumingFrom
                        ? (this.target = this.applyTransform(
                            this.layout.layoutBox
                          ))
                        : ef(this.target, this.layout.layoutBox),
                      (0, ep.o2)(this.target, this.targetDelta))
                    : ef(this.target, this.layout.layoutBox),
                  this.attemptToResolveRelativeTarget)
                ) {
                  this.attemptToResolveRelativeTarget = !1;
                  let t = this.getClosestProjectingParent();
                  t &&
                  !!t.resumingFrom == !!this.resumingFrom &&
                  !t.options.layoutScroll &&
                  t.target &&
                  1 !== this.animationProgress
                    ? ((this.relativeParent = t),
                      this.forceRelativeParentToResolveTarget(),
                      (this.relativeTarget = (0, tY.dO)()),
                      (this.relativeTargetOrigin = (0, tY.dO)()),
                      tI(this.relativeTargetOrigin, this.target, t.target),
                      ef(this.relativeTarget, this.relativeTargetOrigin))
                    : (this.relativeParent = this.relativeTarget = void 0);
                }
                eF.resolvedTargetDeltas++;
              }
            }
          }
          getClosestProjectingParent() {
            return !this.parent ||
              (0, eV.Lj)(this.parent.latestValues) ||
              (0, eV.D_)(this.parent.latestValues)
              ? void 0
              : this.parent.isProjecting()
              ? this.parent
              : this.parent.getClosestProjectingParent();
          }
          isProjecting() {
            return !!(
              (this.relativeTarget ||
                this.targetDelta ||
                this.options.layoutRoot) &&
              this.layout
            );
          }
          calcProjection() {
            var t;
            let e = this.getLead(),
              n = !!this.resumingFrom || this !== e,
              i = !0;
            if (
              ((this.isProjectionDirty ||
                (null === (t = this.parent) || void 0 === t
                  ? void 0
                  : t.isProjectionDirty)) &&
                (i = !1),
              n &&
                (this.isSharedProjectionDirty || this.isTransformDirty) &&
                (i = !1),
              this.resolvedRelativeTargetAt === U.frameData.timestamp &&
                (i = !1),
              i)
            )
              return;
            let { layout: r, layoutId: s } = this.options;
            if (
              ((this.isTreeAnimating = !!(
                (this.parent && this.parent.isTreeAnimating) ||
                this.currentAnimation ||
                this.pendingAnimation
              )),
              this.isTreeAnimating ||
                (this.targetDelta = this.relativeTarget = void 0),
              !this.layout || !(r || s))
            )
              return;
            ef(this.layoutCorrected, this.layout.layoutBox);
            let o = this.treeScale.x,
              a = this.treeScale.y;
            (0, ep.YY)(this.layoutCorrected, this.treeScale, this.path, n),
              e.layout &&
                !e.target &&
                (1 !== this.treeScale.x || 1 !== this.treeScale.y) &&
                (e.target = e.layout.layoutBox);
            let { target: l } = e;
            if (!l) {
              this.projectionTransform &&
                ((this.projectionDelta = (0, tY.wc)()),
                (this.projectionTransform = "none"),
                this.scheduleRender());
              return;
            }
            this.projectionDelta ||
              ((this.projectionDelta = (0, tY.wc)()),
              (this.projectionDeltaWithTransform = (0, tY.wc)()));
            let u = this.projectionTransform;
            tW(
              this.projectionDelta,
              this.layoutCorrected,
              l,
              this.latestValues
            ),
              (this.projectionTransform = eS(
                this.projectionDelta,
                this.treeScale
              )),
              (this.projectionTransform !== u ||
                this.treeScale.x !== o ||
                this.treeScale.y !== a) &&
                ((this.hasProjected = !0),
                this.scheduleRender(),
                this.notifyListeners("projectionUpdate", l)),
              eF.recalculatedProjection++;
          }
          hide() {
            this.isVisible = !1;
          }
          show() {
            this.isVisible = !0;
          }
          scheduleRender(t = !0) {
            if (
              (this.options.scheduleRender && this.options.scheduleRender(), t)
            ) {
              let t = this.getStack();
              t && t.scheduleRender();
            }
            this.resumingFrom &&
              !this.resumingFrom.instance &&
              (this.resumingFrom = void 0);
          }
          setAnimationOrigin(t, e = !1) {
            let n;
            let i = this.snapshot,
              r = i ? i.latestValues : {},
              s = { ...this.latestValues },
              o = (0, tY.wc)();
            (this.relativeParent && this.relativeParent.options.layoutRoot) ||
              (this.relativeTarget = this.relativeTargetOrigin = void 0),
              (this.attemptToResolveRelativeTarget = !e);
            let a = (0, tY.dO)(),
              l = i ? i.source : void 0,
              u = this.layout ? this.layout.source : void 0,
              h = l !== u,
              c = this.getStack(),
              d = !c || c.members.length <= 1,
              f = !!(
                h &&
                !d &&
                !0 === this.options.crossfade &&
                !this.path.some(eQ)
              );
            (this.animationProgress = 0),
              (this.mixTargetDelta = (e) => {
                let i = e / 1e3;
                if (
                  (eK(o.x, t.x, i),
                  eK(o.y, t.y, i),
                  this.setTargetDelta(o),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.layout &&
                    this.relativeParent &&
                    this.relativeParent.layout)
                ) {
                  var l, u, c, p;
                  tI(
                    a,
                    this.layout.layoutBox,
                    this.relativeParent.layout.layoutBox
                  ),
                    (c = this.relativeTarget),
                    (p = this.relativeTargetOrigin),
                    eJ(c.x, p.x, a.x, i),
                    eJ(c.y, p.y, a.y, i),
                    n &&
                      ((l = this.relativeTarget),
                      (u = n),
                      l.x.min === u.x.min &&
                        l.x.max === u.x.max &&
                        l.y.min === u.y.min &&
                        l.y.max === u.y.max) &&
                      (this.isProjectionDirty = !1),
                    n || (n = (0, tY.dO)()),
                    ef(n, this.relativeTarget);
                }
                h &&
                  ((this.animationValues = s),
                  (function (t, e, n, i, r, s) {
                    r
                      ? ((t.opacity = (0, tj.C)(
                          0,
                          void 0 !== n.opacity ? n.opacity : 1,
                          eu(i)
                        )),
                        (t.opacityExit = (0, tj.C)(
                          void 0 !== e.opacity ? e.opacity : 1,
                          0,
                          eh(i)
                        )))
                      : s &&
                        (t.opacity = (0, tj.C)(
                          void 0 !== e.opacity ? e.opacity : 1,
                          void 0 !== n.opacity ? n.opacity : 1,
                          i
                        ));
                    for (let r = 0; r < es; r++) {
                      let s = `border${er[r]}Radius`,
                        o = el(e, s),
                        a = el(n, s);
                      if (void 0 === o && void 0 === a) continue;
                      o || (o = 0), a || (a = 0);
                      let l = 0 === o || 0 === a || ea(o) === ea(a);
                      l
                        ? ((t[s] = Math.max((0, tj.C)(eo(o), eo(a), i), 0)),
                          (tK.aQ.test(a) || tK.aQ.test(o)) && (t[s] += "%"))
                        : (t[s] = a);
                    }
                    (e.rotate || n.rotate) &&
                      (t.rotate = (0, tj.C)(e.rotate || 0, n.rotate || 0, i));
                  })(s, r, this.latestValues, i, f, d)),
                  this.root.scheduleUpdateProjection(),
                  this.scheduleRender(),
                  (this.animationProgress = i);
              }),
              this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
          }
          startAnimation(t) {
            this.notifyListeners("animationStart"),
              this.currentAnimation && this.currentAnimation.stop(),
              this.resumingFrom &&
                this.resumingFrom.currentAnimation &&
                this.resumingFrom.currentAnimation.stop(),
              this.pendingAnimation &&
                ((0, U.Pn)(this.pendingAnimation),
                (this.pendingAnimation = void 0)),
              (this.pendingAnimation = U.Wi.update(() => {
                (t5.hasAnimatedSinceResize = !0),
                  (this.currentAnimation = (0, ek.D)(0, 1e3, {
                    ...t,
                    onUpdate: (e) => {
                      this.mixTargetDelta(e), t.onUpdate && t.onUpdate(e);
                    },
                    onComplete: () => {
                      t.onComplete && t.onComplete(), this.completeAnimation();
                    },
                  })),
                  this.resumingFrom &&
                    (this.resumingFrom.currentAnimation =
                      this.currentAnimation),
                  (this.pendingAnimation = void 0);
              }));
          }
          completeAnimation() {
            this.resumingFrom &&
              ((this.resumingFrom.currentAnimation = void 0),
              (this.resumingFrom.preserveOpacity = void 0));
            let t = this.getStack();
            t && t.exitAnimationComplete(),
              (this.resumingFrom =
                this.currentAnimation =
                this.animationValues =
                  void 0),
              this.notifyListeners("animationComplete");
          }
          finishAnimation() {
            this.currentAnimation &&
              (this.mixTargetDelta && this.mixTargetDelta(1e3),
              this.currentAnimation.stop()),
              this.completeAnimation();
          }
          applyTransformsToTarget() {
            let t = this.getLead(),
              {
                targetWithTransforms: e,
                target: n,
                layout: i,
                latestValues: r,
              } = t;
            if (e && n && i) {
              if (
                this !== t &&
                this.layout &&
                i &&
                e5(
                  this.options.animationType,
                  this.layout.layoutBox,
                  i.layoutBox
                )
              ) {
                n = this.target || (0, tY.dO)();
                let e = tB(this.layout.layoutBox.x);
                (n.x.min = t.target.x.min), (n.x.max = n.x.min + e);
                let i = tB(this.layout.layoutBox.y);
                (n.y.min = t.target.y.min), (n.y.max = n.y.min + i);
              }
              ef(e, n),
                (0, ep.D2)(e, r),
                tW(
                  this.projectionDeltaWithTransform,
                  this.layoutCorrected,
                  e,
                  r
                );
            }
          }
          registerSharedNode(t, e) {
            this.sharedNodes.has(t) || this.sharedNodes.set(t, new eE());
            let n = this.sharedNodes.get(t);
            n.add(e);
            let i = e.options.initialPromotionConfig;
            e.promote({
              transition: i ? i.transition : void 0,
              preserveFollowOpacity:
                i && i.shouldPreserveFollowOpacity
                  ? i.shouldPreserveFollowOpacity(e)
                  : void 0,
            });
          }
          isLead() {
            let t = this.getStack();
            return !t || t.lead === this;
          }
          getLead() {
            var t;
            let { layoutId: e } = this.options;
            return (
              (e &&
                (null === (t = this.getStack()) || void 0 === t
                  ? void 0
                  : t.lead)) ||
              this
            );
          }
          getPrevLead() {
            var t;
            let { layoutId: e } = this.options;
            return e
              ? null === (t = this.getStack()) || void 0 === t
                ? void 0
                : t.prevLead
              : void 0;
          }
          getStack() {
            let { layoutId: t } = this.options;
            if (t) return this.root.sharedNodes.get(t);
          }
          promote({
            needsReset: t,
            transition: e,
            preserveFollowOpacity: n,
          } = {}) {
            let i = this.getStack();
            i && i.promote(this, n),
              t && ((this.projectionDelta = void 0), (this.needsReset = !0)),
              e && this.setOptions({ transition: e });
          }
          relegate() {
            let t = this.getStack();
            return !!t && t.relegate(this);
          }
          resetRotation() {
            let { visualElement: t } = this.options;
            if (!t) return;
            let e = !1,
              { latestValues: n } = t;
            if (
              ((n.rotate || n.rotateX || n.rotateY || n.rotateZ) && (e = !0),
              !e)
            )
              return;
            let i = {};
            for (let e = 0; e < eL.length; e++) {
              let r = "rotate" + eL[e];
              n[r] && ((i[r] = n[r]), t.setStaticValue(r, 0));
            }
            for (let e in (t.render(), i)) t.setStaticValue(e, i[e]);
            t.scheduleRender();
          }
          getProjectionStyles(t) {
            var e, n;
            if (!this.instance || this.isSVG) return;
            if (!this.isVisible) return ej;
            let i = { visibility: "" },
              r = this.getTransformTemplate();
            if (this.needsReset)
              return (
                (this.needsReset = !1),
                (i.opacity = ""),
                (i.pointerEvents =
                  I(null == t ? void 0 : t.pointerEvents) || ""),
                (i.transform = r ? r(this.latestValues, "") : "none"),
                i
              );
            let s = this.getLead();
            if (!this.projectionDelta || !this.layout || !s.target) {
              let e = {};
              return (
                this.options.layoutId &&
                  ((e.opacity =
                    void 0 !== this.latestValues.opacity
                      ? this.latestValues.opacity
                      : 1),
                  (e.pointerEvents =
                    I(null == t ? void 0 : t.pointerEvents) || "")),
                this.hasProjected &&
                  !(0, eV.ud)(this.latestValues) &&
                  ((e.transform = r ? r({}, "") : "none"),
                  (this.hasProjected = !1)),
                e
              );
            }
            let o = s.animationValues || s.latestValues;
            this.applyTransformsToTarget(),
              (i.transform = eS(
                this.projectionDeltaWithTransform,
                this.treeScale,
                o
              )),
              r && (i.transform = r(o, i.transform));
            let { x: a, y: l } = this.projectionDelta;
            for (let t in ((i.transformOrigin = `${100 * a.origin}% ${
              100 * l.origin
            }% 0`),
            s.animationValues
              ? (i.opacity =
                  s === this
                    ? null !==
                        (n =
                          null !== (e = o.opacity) && void 0 !== e
                            ? e
                            : this.latestValues.opacity) && void 0 !== n
                      ? n
                      : 1
                    : this.preserveOpacity
                    ? this.latestValues.opacity
                    : o.opacityExit)
              : (i.opacity =
                  s === this
                    ? void 0 !== o.opacity
                      ? o.opacity
                      : ""
                    : void 0 !== o.opacityExit
                    ? o.opacityExit
                    : 0),
            t6.P)) {
              if (void 0 === o[t]) continue;
              let { correct: e, applyTo: n } = t6.P[t],
                r = "none" === i.transform ? o[t] : e(o[t], s);
              if (n) {
                let t = n.length;
                for (let e = 0; e < t; e++) i[n[e]] = r;
              } else i[t] = r;
            }
            return (
              this.options.layoutId &&
                (i.pointerEvents =
                  s === this
                    ? I(null == t ? void 0 : t.pointerEvents) || ""
                    : "none"),
              i
            );
          }
          clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0;
          }
          resetTree() {
            this.root.nodes.forEach((t) => {
              var e;
              return null === (e = t.currentAnimation) || void 0 === e
                ? void 0
                : e.stop();
            }),
              this.root.nodes.forEach(eU),
              this.root.sharedNodes.clear();
          }
        };
      }
      function eW(t) {
        t.updateLayout();
      }
      function eN(t) {
        var e;
        let n =
          (null === (e = t.resumeFrom) || void 0 === e ? void 0 : e.snapshot) ||
          t.snapshot;
        if (t.isLead() && t.layout && n && t.hasListeners("didUpdate")) {
          let { layoutBox: e, measuredBox: i } = t.layout,
            { animationType: r } = t.options,
            s = n.source !== t.layout.source;
          "size" === r
            ? tZ((t) => {
                let i = s ? n.measuredBox[t] : n.layoutBox[t],
                  r = tB(i);
                (i.min = e[t].min), (i.max = i.min + r);
              })
            : e5(r, n.layoutBox, e) &&
              tZ((i) => {
                let r = s ? n.measuredBox[i] : n.layoutBox[i],
                  o = tB(e[i]);
                (r.max = r.min + o),
                  t.relativeTarget &&
                    !t.currentAnimation &&
                    ((t.isProjectionDirty = !0),
                    (t.relativeTarget[i].max = t.relativeTarget[i].min + o));
              });
          let o = (0, tY.wc)();
          tW(o, e, n.layoutBox);
          let a = (0, tY.wc)();
          s
            ? tW(a, t.applyTransform(i, !0), n.measuredBox)
            : tW(a, e, n.layoutBox);
          let l = !eb(o),
            u = !1;
          if (!t.resumeFrom) {
            let i = t.getClosestProjectingParent();
            if (i && !i.resumeFrom) {
              let { snapshot: r, layout: s } = i;
              if (r && s) {
                let o = (0, tY.dO)();
                tI(o, n.layoutBox, r.layoutBox);
                let a = (0, tY.dO)();
                tI(a, e, s.layoutBox),
                  eA(o, a) || (u = !0),
                  i.options.layoutRoot &&
                    ((t.relativeTarget = a),
                    (t.relativeTargetOrigin = o),
                    (t.relativeParent = i));
              }
            }
          }
          t.notifyListeners("didUpdate", {
            layout: e,
            snapshot: n,
            delta: a,
            layoutDelta: o,
            hasLayoutChanged: l,
            hasRelativeTargetChanged: u,
          });
        } else if (t.isLead()) {
          let { onExitComplete: e } = t.options;
          e && e();
        }
        t.options.transition = void 0;
      }
      function e$(t) {
        eF.totalNodes++,
          t.parent &&
            (t.isProjecting() ||
              (t.isProjectionDirty = t.parent.isProjectionDirty),
            t.isSharedProjectionDirty ||
              (t.isSharedProjectionDirty = !!(
                t.isProjectionDirty ||
                t.parent.isProjectionDirty ||
                t.parent.isSharedProjectionDirty
              )),
            t.isTransformDirty ||
              (t.isTransformDirty = t.parent.isTransformDirty));
      }
      function eI(t) {
        t.isProjectionDirty =
          t.isSharedProjectionDirty =
          t.isTransformDirty =
            !1;
      }
      function e_(t) {
        t.clearSnapshot();
      }
      function eU(t) {
        t.clearMeasurements();
      }
      function eH(t) {
        t.isLayoutDirty = !1;
      }
      function ez(t) {
        let { visualElement: e } = t.options;
        e &&
          e.getProps().onBeforeLayoutMeasure &&
          e.notify("BeforeLayoutMeasure"),
          t.resetTransform();
      }
      function eX(t) {
        t.finishAnimation(),
          (t.targetDelta = t.relativeTarget = t.target = void 0),
          (t.isProjectionDirty = !0);
      }
      function eY(t) {
        t.resolveTargetDelta();
      }
      function eZ(t) {
        t.calcProjection();
      }
      function eG(t) {
        t.resetRotation();
      }
      function eq(t) {
        t.removeLeadSnapshot();
      }
      function eK(t, e, n) {
        (t.translate = (0, tj.C)(e.translate, 0, n)),
          (t.scale = (0, tj.C)(e.scale, 1, n)),
          (t.origin = e.origin),
          (t.originPoint = e.originPoint);
      }
      function eJ(t, e, n, i) {
        (t.min = (0, tj.C)(e.min, n.min, i)),
          (t.max = (0, tj.C)(e.max, n.max, i));
      }
      function eQ(t) {
        return t.animationValues && void 0 !== t.animationValues.opacityExit;
      }
      let e0 = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
        e1 = (t) =>
          "undefined" != typeof navigator &&
          navigator.userAgent.toLowerCase().includes(t),
        e2 = e1("applewebkit/") && !e1("chrome/") ? Math.round : ta.Z;
      function e3(t) {
        (t.min = e2(t.min)), (t.max = e2(t.max));
      }
      function e5(t, e, n) {
        return (
          "position" === t ||
          ("preserve-aspect" === t && !tF(eT(e), eT(n), 0.2))
        );
      }
      let e4 = eO({
          attachResizeListener: (t, e) => Y(t, "resize", e),
          measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop,
          }),
          checkIsScrollRoot: () => !0,
        }),
        e9 = { current: void 0 },
        e8 = eO({
          measureScroll: (t) => ({ x: t.scrollLeft, y: t.scrollTop }),
          defaultParent: () => {
            if (!e9.current) {
              let t = new e4({});
              t.mount(window),
                t.setOptions({ layoutScroll: !0 }),
                (e9.current = t);
            }
            return e9.current;
          },
          resetTransform: (t, e) => {
            t.style.transform = void 0 !== e ? e : "none";
          },
          checkIsScrollRoot: (t) =>
            "fixed" === window.getComputedStyle(t).position,
        });
      var e6 = n(4478),
        e7 = n(2210);
      let nt = (t, e) =>
          w(t)
            ? new e7.e(e, { enableHardwareAcceleration: !1 })
            : new e6.W(e, { enableHardwareAcceleration: !0 }),
        ne = {
          animation: {
            Feature: class extends tr {
              constructor(t) {
                super(t),
                  t.animationState ||
                    (t.animationState = (function (t) {
                      let e = (e) =>
                          Promise.all(
                            e.map(({ animation: e, options: n }) =>
                              (function (t, e, n = {}) {
                                let i;
                                if (
                                  (t.notify("AnimationStart", e),
                                  Array.isArray(e))
                                ) {
                                  let r = e.map((e) => tx(t, e, n));
                                  i = Promise.all(r);
                                } else if ("string" == typeof e)
                                  i = tx(t, e, n);
                                else {
                                  let r =
                                    "function" == typeof e
                                      ? (0, tv.x)(t, e, n.custom)
                                      : e;
                                  i = Promise.all((0, ty.w)(t, r, n));
                                }
                                return i.then(() =>
                                  t.notify("AnimationComplete", e)
                                );
                              })(t, e, n)
                            )
                          ),
                        n = {
                          animate: tA(!0),
                          whileInView: tA(),
                          whileHover: tA(),
                          whileTap: tA(),
                          whileDrag: tA(),
                          whileFocus: tA(),
                          exit: tA(),
                        },
                        i = !0,
                        r = (e, n) => {
                          let i = (0, tv.x)(t, n);
                          if (i) {
                            let { transition: t, transitionEnd: n, ...r } = i;
                            e = { ...e, ...r, ...n };
                          }
                          return e;
                        };
                      function s(s, o) {
                        let a = t.getProps(),
                          l = t.getVariantContext(!0) || {},
                          u = [],
                          h = new Set(),
                          c = {},
                          f = 1 / 0;
                        for (let e = 0; e < tb; e++) {
                          var p;
                          let m = tw[e],
                            v = n[m],
                            g = void 0 !== a[m] ? a[m] : l[m],
                            y = (0, d.$)(g),
                            x = m === o ? v.isActive : null;
                          !1 === x && (f = e);
                          let P = g === l[m] && g !== a[m] && y;
                          if (
                            (P && i && t.manuallyAnimateOnMount && (P = !1),
                            (v.protectedKeys = { ...c }),
                            (!v.isActive && null === x) ||
                              (!g && !v.prevProp) ||
                              (0, O.H)(g) ||
                              "boolean" == typeof g)
                          )
                            continue;
                          let w =
                              ((p = v.prevProp),
                              "string" == typeof g
                                ? g !== p
                                : !!Array.isArray(g) && !tm(g, p)),
                            b =
                              w ||
                              (m === o && v.isActive && !P && y) ||
                              (e > f && y),
                            A = !1,
                            T = Array.isArray(g) ? g : [g],
                            C = T.reduce(r, {});
                          !1 === x && (C = {});
                          let { prevResolvedValues: E = {} } = v,
                            S = { ...E, ...C },
                            V = (t) => {
                              (b = !0),
                                h.has(t) && ((A = !0), h.delete(t)),
                                (v.needsAnimating[t] = !0);
                            };
                          for (let t in S) {
                            let e = C[t],
                              n = E[t];
                            if (!c.hasOwnProperty(t))
                              (
                                (0, tp.C)(e) && (0, tp.C)(n)
                                  ? tm(e, n)
                                  : e === n
                              )
                                ? void 0 !== e && h.has(t)
                                  ? V(t)
                                  : (v.protectedKeys[t] = !0)
                                : void 0 !== e
                                ? V(t)
                                : h.add(t);
                          }
                          (v.prevProp = g),
                            (v.prevResolvedValues = C),
                            v.isActive && (c = { ...c, ...C }),
                            i && t.blockInitialAnimation && (b = !1),
                            b &&
                              (!P || A) &&
                              u.push(
                                ...T.map((t) => ({
                                  animation: t,
                                  options: { type: m, ...s },
                                }))
                              );
                        }
                        if (h.size) {
                          let e = {};
                          h.forEach((n) => {
                            let i = t.getBaseTarget(n);
                            void 0 !== i && (e[n] = i);
                          }),
                            u.push({ animation: e });
                        }
                        let m = !!u.length;
                        return (
                          i &&
                            (!1 === a.initial || a.initial === a.animate) &&
                            !t.manuallyAnimateOnMount &&
                            (m = !1),
                          (i = !1),
                          m ? e(u) : Promise.resolve()
                        );
                      }
                      return {
                        animateChanges: s,
                        setActive: function (e, i, r) {
                          var o;
                          if (n[e].isActive === i) return Promise.resolve();
                          null === (o = t.variantChildren) ||
                            void 0 === o ||
                            o.forEach((t) => {
                              var n;
                              return null === (n = t.animationState) ||
                                void 0 === n
                                ? void 0
                                : n.setActive(e, i);
                            }),
                            (n[e].isActive = i);
                          let a = s(r, e);
                          for (let t in n) n[t].protectedKeys = {};
                          return a;
                        },
                        setAnimateFunction: function (n) {
                          e = n(t);
                        },
                        getState: () => n,
                      };
                    })(t));
              }
              updateAnimationControlsSubscription() {
                let { animate: t } = this.node.getProps();
                this.unmount(),
                  (0, O.H)(t) && (this.unmount = t.subscribe(this.node));
              }
              mount() {
                this.updateAnimationControlsSubscription();
              }
              update() {
                let { animate: t } = this.node.getProps(),
                  { animate: e } = this.node.prevProps || {};
                t !== e && this.updateAnimationControlsSubscription();
              }
              unmount() {}
            },
          },
          exit: {
            Feature: class extends tr {
              constructor() {
                super(...arguments), (this.id = tT++);
              }
              update() {
                if (!this.node.presenceContext) return;
                let {
                    isPresent: t,
                    onExitComplete: e,
                    custom: n,
                  } = this.node.presenceContext,
                  { isPresent: i } = this.node.prevPresenceContext || {};
                if (!this.node.animationState || t === i) return;
                let r = this.node.animationState.setActive("exit", !t, {
                  custom: null != n ? n : this.node.getProps().custom,
                });
                e && !t && r.then(() => e(this.id));
              }
              mount() {
                let { register: t } = this.node.presenceContext || {};
                t && (this.unmount = t(this.id));
              }
              unmount() {}
            },
          },
          inView: {
            Feature: class extends tr {
              constructor() {
                super(...arguments),
                  (this.hasEnteredView = !1),
                  (this.isInView = !1);
              }
              startObserver() {
                this.unmount();
                let { viewport: t = {} } = this.node.getProps(),
                  { root: e, margin: n, amount: i = "some", once: r } = t,
                  s = {
                    root: e ? e.current : void 0,
                    rootMargin: n,
                    threshold: "number" == typeof i ? i : tf[i],
                  };
                return (function (t, e, n) {
                  let i = (function ({ root: t, ...e }) {
                    let n = t || document;
                    th.has(n) || th.set(n, {});
                    let i = th.get(n),
                      r = JSON.stringify(e);
                    return (
                      i[r] ||
                        (i[r] = new IntersectionObserver(td, {
                          root: t,
                          ...e,
                        })),
                      i[r]
                    );
                  })(e);
                  return (
                    tu.set(t, n),
                    i.observe(t),
                    () => {
                      tu.delete(t), i.unobserve(t);
                    }
                  );
                })(this.node.current, s, (t) => {
                  let { isIntersecting: e } = t;
                  if (
                    this.isInView === e ||
                    ((this.isInView = e), r && !e && this.hasEnteredView)
                  )
                    return;
                  e && (this.hasEnteredView = !0),
                    this.node.animationState &&
                      this.node.animationState.setActive("whileInView", e);
                  let { onViewportEnter: n, onViewportLeave: i } =
                      this.node.getProps(),
                    s = e ? n : i;
                  s && s(t);
                });
              }
              mount() {
                this.startObserver();
              }
              update() {
                if ("undefined" == typeof IntersectionObserver) return;
                let { props: t, prevProps: e } = this.node,
                  n = ["amount", "margin", "root"].some(
                    (function (
                      { viewport: t = {} },
                      { viewport: e = {} } = {}
                    ) {
                      return (n) => t[n] !== e[n];
                    })(t, e)
                  );
                n && this.startObserver();
              }
              unmount() {}
            },
          },
          tap: {
            Feature: class extends tr {
              constructor() {
                super(...arguments),
                  (this.removeStartListeners = ta.Z),
                  (this.removeEndListeners = ta.Z),
                  (this.removeAccessibleListeners = ta.Z),
                  (this.startPointerPress = (t, e) => {
                    if (this.isPressing) return;
                    this.removeEndListeners();
                    let n = this.node.getProps(),
                      i = K(
                        window,
                        "pointerup",
                        (t, e) => {
                          if (!this.checkPressEnd()) return;
                          let {
                            onTap: n,
                            onTapCancel: i,
                            globalTapTarget: r,
                          } = this.node.getProps();
                          U.Wi.update(() => {
                            r || to(this.node.current, t.target)
                              ? n && n(t, e)
                              : i && i(t, e);
                          });
                        },
                        { passive: !(n.onTap || n.onPointerUp) }
                      ),
                      r = K(
                        window,
                        "pointercancel",
                        (t, e) => this.cancelPress(t, e),
                        { passive: !(n.onTapCancel || n.onPointerCancel) }
                      );
                    (this.removeEndListeners = (0, J.z)(i, r)),
                      this.startPress(t, e);
                  }),
                  (this.startAccessiblePress = () => {
                    let t = Y(this.node.current, "keydown", (t) => {
                        "Enter" !== t.key ||
                          this.isPressing ||
                          (this.removeEndListeners(),
                          (this.removeEndListeners = Y(
                            this.node.current,
                            "keyup",
                            (t) => {
                              "Enter" === t.key &&
                                this.checkPressEnd() &&
                                tl("up", (t, e) => {
                                  let { onTap: n } = this.node.getProps();
                                  n && U.Wi.update(() => n(t, e));
                                });
                            }
                          )),
                          tl("down", (t, e) => {
                            this.startPress(t, e);
                          }));
                      }),
                      e = Y(this.node.current, "blur", () => {
                        this.isPressing &&
                          tl("cancel", (t, e) => this.cancelPress(t, e));
                      });
                    this.removeAccessibleListeners = (0, J.z)(t, e);
                  });
              }
              startPress(t, e) {
                this.isPressing = !0;
                let { onTapStart: n, whileTap: i } = this.node.getProps();
                i &&
                  this.node.animationState &&
                  this.node.animationState.setActive("whileTap", !0),
                  n && U.Wi.update(() => n(t, e));
              }
              checkPressEnd() {
                this.removeEndListeners(), (this.isPressing = !1);
                let t = this.node.getProps();
                return (
                  t.whileTap &&
                    this.node.animationState &&
                    this.node.animationState.setActive("whileTap", !1),
                  !ti()
                );
              }
              cancelPress(t, e) {
                if (!this.checkPressEnd()) return;
                let { onTapCancel: n } = this.node.getProps();
                n && U.Wi.update(() => n(t, e));
              }
              mount() {
                let t = this.node.getProps(),
                  e = K(
                    t.globalTapTarget ? window : this.node.current,
                    "pointerdown",
                    this.startPointerPress,
                    { passive: !(t.onTapStart || t.onPointerStart) }
                  ),
                  n = Y(this.node.current, "focus", this.startAccessiblePress);
                this.removeStartListeners = (0, J.z)(e, n);
              }
              unmount() {
                this.removeStartListeners(),
                  this.removeEndListeners(),
                  this.removeAccessibleListeners();
              }
            },
          },
          focus: {
            Feature: class extends tr {
              constructor() {
                super(...arguments), (this.isActive = !1);
              }
              onFocus() {
                let t = !1;
                try {
                  t = this.node.current.matches(":focus-visible");
                } catch (e) {
                  t = !0;
                }
                t &&
                  this.node.animationState &&
                  (this.node.animationState.setActive("whileFocus", !0),
                  (this.isActive = !0));
              }
              onBlur() {
                this.isActive &&
                  this.node.animationState &&
                  (this.node.animationState.setActive("whileFocus", !1),
                  (this.isActive = !1));
              }
              mount() {
                this.unmount = (0, J.z)(
                  Y(this.node.current, "focus", () => this.onFocus()),
                  Y(this.node.current, "blur", () => this.onBlur())
                );
              }
              unmount() {}
            },
          },
          hover: {
            Feature: class extends tr {
              mount() {
                this.unmount = (0, J.z)(ts(this.node, !0), ts(this.node, !1));
              }
              unmount() {}
            },
          },
          pan: {
            Feature: class extends tr {
              constructor() {
                super(...arguments), (this.removePointerDownListener = ta.Z);
              }
              onPointerDown(t) {
                this.session = new tV(t, this.createPanHandlers(), {
                  transformPagePoint: this.node.getTransformPagePoint(),
                  contextWindow: tQ(this.node),
                });
              }
              createPanHandlers() {
                let {
                  onPanSessionStart: t,
                  onPanStart: e,
                  onPan: n,
                  onPanEnd: i,
                } = this.node.getProps();
                return {
                  onSessionStart: t3(t),
                  onStart: t3(e),
                  onMove: n,
                  onEnd: (t, e) => {
                    delete this.session, i && U.Wi.update(() => i(t, e));
                  },
                };
              }
              mount() {
                this.removePointerDownListener = K(
                  this.node.current,
                  "pointerdown",
                  (t) => this.onPointerDown(t)
                );
              }
              update() {
                this.session &&
                  this.session.updateHandlers(this.createPanHandlers());
              }
              unmount() {
                this.removePointerDownListener(),
                  this.session && this.session.end();
              }
            },
          },
          drag: {
            Feature: class extends tr {
              constructor(t) {
                super(t),
                  (this.removeGroupControls = ta.Z),
                  (this.removeListeners = ta.Z),
                  (this.controls = new t1(t));
              }
              mount() {
                let { dragControls: t } = this.node.getProps();
                t && (this.removeGroupControls = t.subscribe(this.controls)),
                  (this.removeListeners = this.controls.addListeners() || ta.Z);
              }
              unmount() {
                this.removeGroupControls(), this.removeListeners();
              }
            },
            ProjectionNode: e8,
            MeasureLayout: et,
          },
          layout: { ProjectionNode: e8, MeasureLayout: et },
        },
        nn = (function (t) {
          function e(e, n = {}) {
            return (function ({
              preloadedFeatures: t,
              createVisualElement: e,
              useRender: n,
              useVisualState: i,
              Component: P,
            }) {
              t &&
                (function (t) {
                  for (let e in t) m.A[e] = { ...m.A[e], ...t[e] };
                })(t);
              let w = (0, r.forwardRef)(function (m, x) {
                var w;
                let b;
                let A = {
                    ...(0, r.useContext)(s._),
                    ...m,
                    layoutId: (function ({ layoutId: t }) {
                      let e = (0, r.useContext)(g.p).id;
                      return e && void 0 !== t ? e + "-" + t : t;
                    })(m),
                  },
                  { isStatic: T } = A,
                  C = (function (t) {
                    let { initial: e, animate: n } = (function (t, e) {
                      if ((0, f.G)(t)) {
                        let { initial: e, animate: n } = t;
                        return {
                          initial: !1 === e || (0, d.$)(e) ? e : void 0,
                          animate: (0, d.$)(n) ? n : void 0,
                        };
                      }
                      return !1 !== t.inherit ? e : {};
                    })(t, (0, r.useContext)(o));
                    return (0, r.useMemo)(
                      () => ({ initial: e, animate: n }),
                      [p(e), p(n)]
                    );
                  })(m),
                  E = i(m, T);
                if (!T && v.j) {
                  C.visualElement = (function (t, e, n, i) {
                    let { visualElement: c } = (0, r.useContext)(o),
                      d = (0, r.useContext)(u),
                      f = (0, r.useContext)(a.O),
                      p = (0, r.useContext)(s._).reducedMotion,
                      m = (0, r.useRef)();
                    (i = i || d.renderer),
                      !m.current &&
                        i &&
                        (m.current = i(t, {
                          visualState: e,
                          parent: c,
                          props: n,
                          presenceContext: f,
                          blockInitialAnimation: !!f && !1 === f.initial,
                          reducedMotionConfig: p,
                        }));
                    let v = m.current;
                    (0, r.useInsertionEffect)(() => {
                      v && v.update(n, f);
                    });
                    let g = (0, r.useRef)(
                      !!(n[h.M] && !window.HandoffComplete)
                    );
                    return (
                      (0, l.L)(() => {
                        v &&
                          (v.render(),
                          g.current &&
                            v.animationState &&
                            v.animationState.animateChanges());
                      }),
                      (0, r.useEffect)(() => {
                        v &&
                          (v.updateFeatures(),
                          !g.current &&
                            v.animationState &&
                            v.animationState.animateChanges(),
                          g.current &&
                            ((g.current = !1), (window.HandoffComplete = !0)));
                      }),
                      v
                    );
                  })(P, E, A, e);
                  let n = (0, r.useContext)(y),
                    i = (0, r.useContext)(u).strict;
                  C.visualElement &&
                    (b = C.visualElement.loadFeatures(A, i, t, n));
                }
                return r.createElement(
                  o.Provider,
                  { value: C },
                  b && C.visualElement
                    ? r.createElement(b, {
                        visualElement: C.visualElement,
                        ...A,
                      })
                    : null,
                  n(
                    P,
                    m,
                    ((w = C.visualElement),
                    (0, r.useCallback)(
                      (t) => {
                        t && E.mount && E.mount(t),
                          w && (t ? w.mount(t) : w.unmount()),
                          x &&
                            ("function" == typeof x
                              ? x(t)
                              : (0, c.I)(x) && (x.current = t));
                      },
                      [w]
                    )),
                    E,
                    T,
                    C.visualElement
                  )
                );
              });
              return (w[x] = P), w;
            })(t(e, n));
          }
          if ("undefined" == typeof Proxy) return e;
          let n = new Map();
          return new Proxy(e, {
            get: (t, i) => (n.has(i) || n.set(i, e(i)), n.get(i)),
          });
        })((t, e) =>
          (function (t, { forwardMotionProps: e = !1 }, n, i) {
            let s = w(t) ? H : X;
            return {
              ...s,
              preloadedFeatures: n,
              useRender: (function (t = !1) {
                return (e, n, i, { latestValues: s }, o) => {
                  let a = w(e) ? j : S,
                    l = a(n, s, o, e),
                    u = (function (t, e, n) {
                      let i = {};
                      for (let r in t)
                        ("values" !== r || "object" != typeof t.values) &&
                          (D(r) ||
                            (!0 === n && M(r)) ||
                            (!e && !M(r)) ||
                            (t.draggable && r.startsWith("onDrag"))) &&
                          (i[r] = t[r]);
                      return i;
                    })(n, "string" == typeof e, t),
                    h = { ...u, ...l, ref: i },
                    { children: c } = n,
                    d = (0, r.useMemo)(() => ((0, A.i)(c) ? c.get() : c), [c]);
                  return (0, r.createElement)(e, { ...h, children: d });
                };
              })(e),
              createVisualElement: i,
              Component: t,
            };
          })(t, e, ne, nt)
        );
    },
    7905: function (t, e, n) {
      "use strict";
      n.d(e, {
        D: function () {
          return i;
        },
      });
      let i = (t) => t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
    },
    417: function (t, e, n) {
      "use strict";
      n.d(e, {
        Xp: function () {
          return o;
        },
        f9: function () {
          return r;
        },
        tm: function () {
          return s;
        },
      });
      let i = (t) => (e) => "string" == typeof e && e.startsWith(t),
        r = i("--"),
        s = i("var(--"),
        o =
          /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g;
    },
    4457: function (t, e, n) {
      "use strict";
      function i(t) {
        return t instanceof SVGElement && "svg" !== t.tagName;
      }
      n.d(e, {
        v: function () {
          return i;
        },
      });
    },
    9006: function (t, e, n) {
      "use strict";
      n.d(e, {
        T: function () {
          return o;
        },
      });
      var i = n(9155),
        r = n(4875),
        s = n(5008);
      function o(t, e) {
        let n = (0, s.A)(t);
        return (
          n !== r.h && (n = i.P),
          n.getAnimatableNone ? n.getAnimatableNone(e) : void 0
        );
      }
    },
    5008: function (t, e, n) {
      "use strict";
      n.d(e, {
        A: function () {
          return a;
        },
      });
      var i = n(2199),
        r = n(4875),
        s = n(3002);
      let o = {
          ...s.j,
          color: i.$,
          backgroundColor: i.$,
          outlineColor: i.$,
          fill: i.$,
          stroke: i.$,
          borderColor: i.$,
          borderTopColor: i.$,
          borderRightColor: i.$,
          borderBottomColor: i.$,
          borderLeftColor: i.$,
          filter: r.h,
          WebkitFilter: r.h,
        },
        a = (t) => o[t];
    },
    8824: function (t, e, n) {
      "use strict";
      n.d(e, {
        $: function () {
          return o;
        },
        C: function () {
          return a;
        },
      });
      var i = n(2980),
        r = n(3681),
        s = n(8598);
      let o = [
          i.Rx,
          r.px,
          r.aQ,
          r.RW,
          r.vw,
          r.vh,
          { test: (t) => "auto" === t, parse: (t) => t },
        ],
        a = (t) => o.find((0, s.l)(t));
    },
    3002: function (t, e, n) {
      "use strict";
      n.d(e, {
        j: function () {
          return o;
        },
      });
      var i = n(2980),
        r = n(3681);
      let s = { ...i.Rx, transform: Math.round },
        o = {
          borderWidth: r.px,
          borderTopWidth: r.px,
          borderRightWidth: r.px,
          borderBottomWidth: r.px,
          borderLeftWidth: r.px,
          borderRadius: r.px,
          radius: r.px,
          borderTopLeftRadius: r.px,
          borderTopRightRadius: r.px,
          borderBottomRightRadius: r.px,
          borderBottomLeftRadius: r.px,
          width: r.px,
          maxWidth: r.px,
          height: r.px,
          maxHeight: r.px,
          size: r.px,
          top: r.px,
          right: r.px,
          bottom: r.px,
          left: r.px,
          padding: r.px,
          paddingTop: r.px,
          paddingRight: r.px,
          paddingBottom: r.px,
          paddingLeft: r.px,
          margin: r.px,
          marginTop: r.px,
          marginRight: r.px,
          marginBottom: r.px,
          marginLeft: r.px,
          rotate: r.RW,
          rotateX: r.RW,
          rotateY: r.RW,
          rotateZ: r.RW,
          scale: i.bA,
          scaleX: i.bA,
          scaleY: i.bA,
          scaleZ: i.bA,
          skew: r.RW,
          skewX: r.RW,
          skewY: r.RW,
          distance: r.px,
          translateX: r.px,
          translateY: r.px,
          translateZ: r.px,
          x: r.px,
          y: r.px,
          z: r.px,
          perspective: r.px,
          transformPerspective: r.px,
          opacity: i.Fq,
          originX: r.$C,
          originY: r.$C,
          originZ: r.px,
          zIndex: s,
          fillOpacity: i.Fq,
          strokeOpacity: i.Fq,
          numOctaves: s,
        };
    },
    8598: function (t, e, n) {
      "use strict";
      n.d(e, {
        l: function () {
          return i;
        },
      });
      let i = (t) => (e) => e.test(t);
    },
    4478: function (t, e, n) {
      "use strict";
      n.d(e, {
        W: function () {
          return d;
        },
      });
      var i = n(458),
        r = n(417),
        s = n(9303),
        o = n(3495),
        a = n(2449),
        l = n(5008),
        u = n(3937),
        h = n(1923),
        c = n(5735);
      class d extends h.J {
        constructor() {
          super(...arguments), (this.type = "html");
        }
        readValueFromInstance(t, e) {
          if (s.G.has(e)) {
            let t = (0, l.A)(e);
            return (t && t.default) || 0;
          }
          {
            let n = window.getComputedStyle(t),
              i = ((0, r.f9)(e) ? n.getPropertyValue(e) : n[e]) || 0;
            return "string" == typeof i ? i.trim() : i;
          }
        }
        measureInstanceViewportBox(t, { transformPagePoint: e }) {
          return (0, u.J)(t, e);
        }
        build(t, e, n, r) {
          (0, i.r)(t, e, n, r.transformTemplate);
        }
        scrapeMotionValuesFromProps(t, e) {
          return (0, o.U)(t, e);
        }
        handleChildMotionValue() {
          this.childSubscription &&
            (this.childSubscription(), delete this.childSubscription);
          let { children: t } = this.props;
          (0, c.i)(t) &&
            (this.childSubscription = t.on("change", (t) => {
              this.current && (this.current.textContent = `${t}`);
            }));
        }
        renderInstance(t, e, n, i) {
          (0, a.N)(t, e, n, i);
        }
      }
    },
    458: function (t, e, n) {
      "use strict";
      n.d(e, {
        r: function () {
          return u;
        },
      });
      var i = n(9303);
      let r = {
          x: "translateX",
          y: "translateY",
          z: "translateZ",
          transformPerspective: "perspective",
        },
        s = i._.length;
      var o = n(417);
      let a = (t, e) => (e && "number" == typeof t ? e.transform(t) : t);
      var l = n(3002);
      function u(t, e, n, u) {
        let { style: h, vars: c, transform: d, transformOrigin: f } = t,
          p = !1,
          m = !1,
          v = !0;
        for (let t in e) {
          let n = e[t];
          if ((0, o.f9)(t)) {
            c[t] = n;
            continue;
          }
          let r = l.j[t],
            s = a(n, r);
          if (i.G.has(t)) {
            if (((p = !0), (d[t] = s), !v)) continue;
            n !== (r.default || 0) && (v = !1);
          } else t.startsWith("origin") ? ((m = !0), (f[t] = s)) : (h[t] = s);
        }
        if (
          (!e.transform &&
            (p || u
              ? (h.transform = (function (
                  t,
                  {
                    enableHardwareAcceleration: e = !0,
                    allowTransformNone: n = !0,
                  },
                  o,
                  a
                ) {
                  let l = "";
                  for (let e = 0; e < s; e++) {
                    let n = i._[e];
                    if (void 0 !== t[n]) {
                      let e = r[n] || n;
                      l += `${e}(${t[n]}) `;
                    }
                  }
                  return (
                    e && !t.z && (l += "translateZ(0)"),
                    (l = l.trim()),
                    a ? (l = a(t, o ? "" : l)) : n && o && (l = "none"),
                    l
                  );
                })(t.transform, n, v, u))
              : h.transform && (h.transform = "none")),
          m)
        ) {
          let { originX: t = "50%", originY: e = "50%", originZ: n = 0 } = f;
          h.transformOrigin = `${t} ${e} ${n}`;
        }
      }
    },
    2449: function (t, e, n) {
      "use strict";
      function i(t, { style: e, vars: n }, i, r) {
        for (let s in (Object.assign(t.style, e, r && r.getProjectionStyles(i)),
        n))
          t.style.setProperty(s, n[s]);
      }
      n.d(e, {
        N: function () {
          return i;
        },
      });
    },
    3495: function (t, e, n) {
      "use strict";
      n.d(e, {
        U: function () {
          return s;
        },
      });
      var i = n(1118),
        r = n(5735);
      function s(t, e) {
        let { style: n } = t,
          s = {};
        for (let o in n)
          ((0, r.i)(n[o]) ||
            (e.style && (0, r.i)(e.style[o])) ||
            (0, i.j)(o, t)) &&
            (s[o] = n[o]);
        return s;
      }
    },
    9303: function (t, e, n) {
      "use strict";
      n.d(e, {
        G: function () {
          return r;
        },
        _: function () {
          return i;
        },
      });
      let i = [
          "transformPerspective",
          "x",
          "y",
          "z",
          "translateX",
          "translateY",
          "translateZ",
          "scale",
          "scaleX",
          "scaleY",
          "rotate",
          "rotateX",
          "rotateY",
          "rotateZ",
          "skew",
          "skewX",
          "skewY",
        ],
        r = new Set(i);
    },
    4900: function (t, e, n) {
      "use strict";
      n.d(e, {
        R: function () {
          return i;
        },
      });
      let i = new WeakMap();
    },
    2210: function (t, e, n) {
      "use strict";
      n.d(e, {
        e: function () {
          return f;
        },
      });
      var i = n(5625),
        r = n(1923),
        s = n(1524),
        o = n(7905),
        a = n(888),
        l = n(9303),
        u = n(8239),
        h = n(5008),
        c = n(4597),
        d = n(922);
      class f extends r.J {
        constructor() {
          super(...arguments), (this.type = "svg"), (this.isSVGTag = !1);
        }
        getBaseTargetFromProps(t, e) {
          return t[e];
        }
        readValueFromInstance(t, e) {
          if (l.G.has(e)) {
            let t = (0, h.A)(e);
            return (t && t.default) || 0;
          }
          return (e = a.s.has(e) ? e : (0, o.D)(e)), t.getAttribute(e);
        }
        measureInstanceViewportBox() {
          return (0, c.dO)();
        }
        scrapeMotionValuesFromProps(t, e) {
          return (0, i.U)(t, e);
        }
        build(t, e, n, i) {
          (0, s.i)(t, e, n, this.isSVGTag, i.transformTemplate);
        }
        renderInstance(t, e, n, i) {
          (0, u.K)(t, e, n, i);
        }
        mount(t) {
          (this.isSVGTag = (0, d.a)(t.tagName)), super.mount(t);
        }
      }
    },
    1524: function (t, e, n) {
      "use strict";
      n.d(e, {
        i: function () {
          return l;
        },
      });
      var i = n(458),
        r = n(3681);
      function s(t, e, n) {
        return "string" == typeof t ? t : r.px.transform(e + n * t);
      }
      let o = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
        a = { offset: "strokeDashoffset", array: "strokeDasharray" };
      function l(
        t,
        {
          attrX: e,
          attrY: n,
          attrScale: l,
          originX: u,
          originY: h,
          pathLength: c,
          pathSpacing: d = 1,
          pathOffset: f = 0,
          ...p
        },
        m,
        v,
        g
      ) {
        if (((0, i.r)(t, p, m, g), v)) {
          t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
          return;
        }
        (t.attrs = t.style), (t.style = {});
        let { attrs: y, style: x, dimensions: P } = t;
        y.transform && (P && (x.transform = y.transform), delete y.transform),
          P &&
            (void 0 !== u || void 0 !== h || x.transform) &&
            (x.transformOrigin = (function (t, e, n) {
              let i = s(e, t.x, t.width),
                r = s(n, t.y, t.height);
              return `${i} ${r}`;
            })(P, void 0 !== u ? u : 0.5, void 0 !== h ? h : 0.5)),
          void 0 !== e && (y.x = e),
          void 0 !== n && (y.y = n),
          void 0 !== l && (y.scale = l),
          void 0 !== c &&
            (function (t, e, n = 1, i = 0, s = !0) {
              t.pathLength = 1;
              let l = s ? o : a;
              t[l.offset] = r.px.transform(-i);
              let u = r.px.transform(e),
                h = r.px.transform(n);
              t[l.array] = `${u} ${h}`;
            })(y, c, d, f, !1);
      }
    },
    888: function (t, e, n) {
      "use strict";
      n.d(e, {
        s: function () {
          return i;
        },
      });
      let i = new Set([
        "baseFrequency",
        "diffuseConstant",
        "kernelMatrix",
        "kernelUnitLength",
        "keySplines",
        "keyTimes",
        "limitingConeAngle",
        "markerHeight",
        "markerWidth",
        "numOctaves",
        "targetX",
        "targetY",
        "surfaceScale",
        "specularConstant",
        "specularExponent",
        "stdDeviation",
        "tableValues",
        "viewBox",
        "gradientTransform",
        "pathLength",
        "startOffset",
        "textLength",
        "lengthAdjust",
      ]);
    },
    922: function (t, e, n) {
      "use strict";
      n.d(e, {
        a: function () {
          return i;
        },
      });
      let i = (t) => "string" == typeof t && "svg" === t.toLowerCase();
    },
    8239: function (t, e, n) {
      "use strict";
      n.d(e, {
        K: function () {
          return o;
        },
      });
      var i = n(7905),
        r = n(2449),
        s = n(888);
      function o(t, e, n, o) {
        for (let n in ((0, r.N)(t, e, void 0, o), e.attrs))
          t.setAttribute(s.s.has(n) ? n : (0, i.D)(n), e.attrs[n]);
      }
    },
    5625: function (t, e, n) {
      "use strict";
      n.d(e, {
        U: function () {
          return o;
        },
      });
      var i = n(5735),
        r = n(3495),
        s = n(9303);
      function o(t, e) {
        let n = (0, r.U)(t, e);
        for (let r in t)
          if ((0, i.i)(t[r]) || (0, i.i)(e[r])) {
            let e =
              -1 !== s._.indexOf(r)
                ? "attr" + r.charAt(0).toUpperCase() + r.substring(1)
                : r;
            n[e] = t[r];
          }
        return n;
      }
    },
    6049: function (t, e, n) {
      "use strict";
      n.d(e, {
        G: function () {
          return o;
        },
        M: function () {
          return a;
        },
      });
      var i = n(7866),
        r = n(3345),
        s = n(5247);
      function o(t) {
        return (0, i.H)(t.animate) || s.V.some((e) => (0, r.$)(t[e]));
      }
      function a(t) {
        return !!(o(t) || t.variants);
      }
    },
    3345: function (t, e, n) {
      "use strict";
      function i(t) {
        return "string" == typeof t || Array.isArray(t);
      }
      n.d(e, {
        $: function () {
          return i;
        },
      });
    },
    2593: function (t, e, n) {
      "use strict";
      n.d(e, {
        x: function () {
          return r;
        },
      });
      var i = n(3331);
      function r(t, e, n) {
        let r = t.getProps();
        return (0, i.o)(
          r,
          e,
          void 0 !== n ? n : r.custom,
          (function (t) {
            let e = {};
            return t.values.forEach((t, n) => (e[n] = t.get())), e;
          })(t),
          (function (t) {
            let e = {};
            return t.values.forEach((t, n) => (e[n] = t.getVelocity())), e;
          })(t)
        );
      }
    },
    3331: function (t, e, n) {
      "use strict";
      function i(t, e, n, i = {}, r = {}) {
        return (
          "function" == typeof e && (e = e(void 0 !== n ? n : t.custom, i, r)),
          "string" == typeof e && (e = t.variants && t.variants[e]),
          "function" == typeof e && (e = e(void 0 !== n ? n : t.custom, i, r)),
          e
        );
      }
      n.d(e, {
        o: function () {
          return i;
        },
      });
    },
    7798: function (t, e, n) {
      "use strict";
      n.d(e, {
        GJ: function () {
          return v;
        },
        P$: function () {
          return g;
        },
        CD: function () {
          return m;
        },
      });
      var i = n(4747),
        r = n(5243),
        s = n(1832),
        o = n(4101),
        a = n(9155),
        l = n(9006),
        u = n(2199),
        h = n(8824),
        c = n(8598);
      let d = [...h.$, u.$, a.P],
        f = (t) => d.find((0, c.l)(t));
      var p = n(2593);
      function m(t, e) {
        let n = (0, p.x)(t, e),
          {
            transitionEnd: i = {},
            transition: r = {},
            ...a
          } = n ? t.makeTargetAnimatable(n, !1) : {};
        for (let e in (a = { ...a, ...i })) {
          let n = (0, s.Y)(a[e]);
          t.hasValue(e) ? t.getValue(e).set(n) : t.addValue(e, (0, o.BX)(n));
        }
      }
      function v(t, e, n) {
        var s, u;
        let h = Object.keys(e).filter((e) => !t.hasValue(e)),
          c = h.length;
        if (c)
          for (let d = 0; d < c; d++) {
            let c = h[d],
              p = e[c],
              m = null;
            Array.isArray(p) && (m = p[0]),
              null === m &&
                (m =
                  null !==
                    (u =
                      null !== (s = n[c]) && void 0 !== s
                        ? s
                        : t.readValue(c)) && void 0 !== u
                    ? u
                    : e[c]),
              null != m &&
                ("string" == typeof m && ((0, i.P)(m) || (0, r.W)(m))
                  ? (m = parseFloat(m))
                  : !f(m) && a.P.test(p) && (m = (0, l.T)(c, p)),
                t.addValue(c, (0, o.BX)(m, { owner: t })),
                void 0 === n[c] && (n[c] = m),
                null !== m && t.setBaseTarget(c, m));
          }
      }
      function g(t, e, n) {
        let i = {};
        for (let r in t) {
          let t = (function (t, e) {
            if (!e) return;
            let n = e[t] || e.default || e;
            return n.from;
          })(r, e);
          if (void 0 !== t) i[r] = t;
          else {
            let t = n.getValue(r);
            t && (i[r] = t.get());
          }
        }
        return i;
      }
    },
    5247: function (t, e, n) {
      "use strict";
      n.d(e, {
        V: function () {
          return r;
        },
        e: function () {
          return i;
        },
      });
      let i = [
          "animate",
          "whileInView",
          "whileFocus",
          "whileHover",
          "whileTap",
          "whileDrag",
          "exit",
        ],
        r = ["initial", ...i];
    },
    7081: function (t, e, n) {
      "use strict";
      function i(t, e) {
        -1 === t.indexOf(e) && t.push(e);
      }
      function r(t, e) {
        let n = t.indexOf(e);
        n > -1 && t.splice(n, 1);
      }
      n.d(e, {
        cl: function () {
          return r;
        },
        y4: function () {
          return i;
        },
      });
    },
    3021: function (t, e, n) {
      "use strict";
      n.d(e, {
        u: function () {
          return i;
        },
      });
      let i = (t, e, n) => Math.min(Math.max(n, t), e);
    },
    6567: function (t, e, n) {
      "use strict";
      n.d(e, {
        K: function () {
          return r;
        },
        k: function () {
          return s;
        },
      });
      var i = n(6977);
      let r = i.Z,
        s = i.Z;
    },
    3245: function (t, e, n) {
      "use strict";
      n.d(e, {
        s: function () {
          return E;
        },
      });
      var i = n(6567),
        r = n(2199),
        s = n(3021),
        o = n(7);
      function a(t, e, n) {
        return (n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6)
          ? t + (e - t) * 6 * n
          : n < 0.5
          ? e
          : n < 2 / 3
          ? t + (e - t) * (2 / 3 - n) * 6
          : t;
      }
      var l = n(3257),
        u = n(2808),
        h = n(6002);
      let c = (t, e, n) => {
          let i = t * t;
          return Math.sqrt(Math.max(0, n * (e * e - i) + i));
        },
        d = [l.$, u.m, h.J],
        f = (t) => d.find((e) => e.test(t));
      function p(t) {
        let e = f(t);
        (0, i.k)(
          !!e,
          `'${t}' is not an animatable color. Use the equivalent color code instead.`
        );
        let n = e.parse(t);
        return (
          e === h.J &&
            (n = (function ({ hue: t, saturation: e, lightness: n, alpha: i }) {
              (t /= 360), (n /= 100);
              let r = 0,
                s = 0,
                o = 0;
              if ((e /= 100)) {
                let i = n < 0.5 ? n * (1 + e) : n + e - n * e,
                  l = 2 * n - i;
                (r = a(l, i, t + 1 / 3)),
                  (s = a(l, i, t)),
                  (o = a(l, i, t - 1 / 3));
              } else r = s = o = n;
              return {
                red: Math.round(255 * r),
                green: Math.round(255 * s),
                blue: Math.round(255 * o),
                alpha: i,
              };
            })(n)),
          n
        );
      }
      let m = (t, e) => {
        let n = p(t),
          i = p(e),
          r = { ...n };
        return (t) => (
          (r.red = c(n.red, i.red, t)),
          (r.green = c(n.green, i.green, t)),
          (r.blue = c(n.blue, i.blue, t)),
          (r.alpha = (0, o.C)(n.alpha, i.alpha, t)),
          u.m.transform(r)
        );
      };
      var v = n(4694),
        g = n(9155);
      let y = (t, e) => (n) => `${n > 0 ? e : t}`;
      function x(t, e) {
        return "number" == typeof t
          ? (n) => (0, o.C)(t, e, n)
          : r.$.test(t)
          ? m(t, e)
          : t.startsWith("var(")
          ? y(t, e)
          : b(t, e);
      }
      let P = (t, e) => {
          let n = [...t],
            i = n.length,
            r = t.map((t, n) => x(t, e[n]));
          return (t) => {
            for (let e = 0; e < i; e++) n[e] = r[e](t);
            return n;
          };
        },
        w = (t, e) => {
          let n = { ...t, ...e },
            i = {};
          for (let r in n)
            void 0 !== t[r] && void 0 !== e[r] && (i[r] = x(t[r], e[r]));
          return (t) => {
            for (let e in i) n[e] = i[e](t);
            return n;
          };
        },
        b = (t, e) => {
          let n = g.P.createTransformer(e),
            r = (0, g.V)(t),
            s = (0, g.V)(e),
            o =
              r.numVars === s.numVars &&
              r.numColors === s.numColors &&
              r.numNumbers >= s.numNumbers;
          return o
            ? (0, v.z)(P(r.values, s.values), n)
            : ((0, i.K)(
                !0,
                `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`
              ),
              y(t, e));
        };
      var A = n(2868),
        T = n(6977);
      let C = (t, e) => (n) => (0, o.C)(t, e, n);
      function E(t, e, { clamp: n = !0, ease: o, mixer: a } = {}) {
        let l = t.length;
        if (
          ((0, i.k)(
            l === e.length,
            "Both input and output ranges must be the same length"
          ),
          1 === l)
        )
          return () => e[0];
        t[0] > t[l - 1] && ((t = [...t].reverse()), (e = [...e].reverse()));
        let u = (function (t, e, n) {
            let i = [],
              s =
                n ||
                (function (t) {
                  if ("number" == typeof t);
                  else if ("string" == typeof t) return r.$.test(t) ? m : b;
                  else if (Array.isArray(t)) return P;
                  else if ("object" == typeof t) return w;
                  return C;
                })(t[0]),
              o = t.length - 1;
            for (let n = 0; n < o; n++) {
              let r = s(t[n], t[n + 1]);
              if (e) {
                let t = Array.isArray(e) ? e[n] || T.Z : e;
                r = (0, v.z)(t, r);
              }
              i.push(r);
            }
            return i;
          })(e, o, a),
          h = u.length,
          c = (e) => {
            let n = 0;
            if (h > 1) for (; n < t.length - 2 && !(e < t[n + 1]); n++);
            let i = (0, A.Y)(t[n], t[n + 1], e);
            return u[n](i);
          };
        return n ? (e) => c((0, s.u)(t[0], t[l - 1], e)) : c;
      }
    },
    6613: function (t, e, n) {
      "use strict";
      n.d(e, {
        j: function () {
          return i;
        },
      });
      let i = "undefined" != typeof document;
    },
    4747: function (t, e, n) {
      "use strict";
      n.d(e, {
        P: function () {
          return i;
        },
      });
      let i = (t) => /^\-?\d*\.?\d+$/.test(t);
    },
    5503: function (t, e, n) {
      "use strict";
      function i(t) {
        return (
          t &&
          "object" == typeof t &&
          Object.prototype.hasOwnProperty.call(t, "current")
        );
      }
      n.d(e, {
        I: function () {
          return i;
        },
      });
    },
    5243: function (t, e, n) {
      "use strict";
      n.d(e, {
        W: function () {
          return i;
        },
      });
      let i = (t) => /^0[^.\s]+$/.test(t);
    },
    9648: function (t, e, n) {
      "use strict";
      function i(t) {
        let e;
        return () => (void 0 === e && (e = t()), e);
      }
      n.d(e, {
        X: function () {
          return i;
        },
      });
    },
    7: function (t, e, n) {
      "use strict";
      n.d(e, {
        C: function () {
          return i;
        },
      });
      let i = (t, e, n) => -n * t + n * e + t;
    },
    6977: function (t, e, n) {
      "use strict";
      n.d(e, {
        Z: function () {
          return i;
        },
      });
      let i = (t) => t;
    },
    9448: function (t, e, n) {
      "use strict";
      n.d(e, {
        Y: function () {
          return r;
        },
      });
      var i = n(4233);
      function r(t) {
        let e = [0];
        return (0, i.c)(e, t.length - 1), e;
      }
    },
    4233: function (t, e, n) {
      "use strict";
      n.d(e, {
        c: function () {
          return s;
        },
      });
      var i = n(7),
        r = n(2868);
      function s(t, e) {
        let n = t[t.length - 1];
        for (let s = 1; s <= e; s++) {
          let o = (0, r.Y)(0, e, s);
          t.push((0, i.C)(n, 1, o));
        }
      }
    },
    4694: function (t, e, n) {
      "use strict";
      n.d(e, {
        z: function () {
          return r;
        },
      });
      let i = (t, e) => (n) => e(t(n)),
        r = (...t) => t.reduce(i);
    },
    2868: function (t, e, n) {
      "use strict";
      n.d(e, {
        Y: function () {
          return i;
        },
      });
      let i = (t, e, n) => {
        let i = e - t;
        return 0 === i ? 1 : (n - t) / i;
      };
    },
    1832: function (t, e, n) {
      "use strict";
      n.d(e, {
        Y: function () {
          return s;
        },
        p: function () {
          return r;
        },
      });
      var i = n(363);
      let r = (t) => !!(t && "object" == typeof t && t.mix && t.toValue),
        s = (t) => ((0, i.C)(t) ? t[t.length - 1] || 0 : t);
    },
    7026: function (t, e, n) {
      "use strict";
      n.d(e, {
        L: function () {
          return r;
        },
      });
      var i = n(7081);
      class r {
        constructor() {
          this.subscriptions = [];
        }
        add(t) {
          return (
            (0, i.y4)(this.subscriptions, t),
            () => (0, i.cl)(this.subscriptions, t)
          );
        }
        notify(t, e, n) {
          let i = this.subscriptions.length;
          if (i) {
            if (1 === i) this.subscriptions[0](t, e, n);
            else
              for (let r = 0; r < i; r++) {
                let i = this.subscriptions[r];
                i && i(t, e, n);
              }
          }
        }
        getSize() {
          return this.subscriptions.length;
        }
        clear() {
          this.subscriptions.length = 0;
        }
      }
    },
    1356: function (t, e, n) {
      "use strict";
      n.d(e, {
        X: function () {
          return r;
        },
        w: function () {
          return i;
        },
      });
      let i = (t) => 1e3 * t,
        r = (t) => t / 1e3;
    },
    961: function (t, e, n) {
      "use strict";
      n.d(e, {
        h: function () {
          return r;
        },
      });
      var i = n(2265);
      function r(t) {
        let e = (0, i.useRef)(null);
        return null === e.current && (e.current = t()), e.current;
      }
    },
    538: function (t, e, n) {
      "use strict";
      n.d(e, {
        L: function () {
          return s;
        },
      });
      var i = n(2265),
        r = n(6613);
      let s = r.j ? i.useLayoutEffect : i.useEffect;
    },
    9815: function (t, e, n) {
      "use strict";
      function i(t, e) {
        return e ? t * (1e3 / e) : 0;
      }
      n.d(e, {
        R: function () {
          return i;
        },
      });
    },
    4101: function (t, e, n) {
      "use strict";
      n.d(e, {
        BX: function () {
          return u;
        },
      });
      var i = n(7026),
        r = n(9815),
        s = n(3041);
      let o = (t) => !isNaN(parseFloat(t)),
        a = { current: void 0 };
      class l {
        constructor(t, e = {}) {
          (this.version = "10.18.0"),
            (this.timeDelta = 0),
            (this.lastUpdated = 0),
            (this.canTrackVelocity = !1),
            (this.events = {}),
            (this.updateAndNotify = (t, e = !0) => {
              (this.prev = this.current), (this.current = t);
              let { delta: n, timestamp: i } = s.frameData;
              this.lastUpdated !== i &&
                ((this.timeDelta = n),
                (this.lastUpdated = i),
                s.Wi.postRender(this.scheduleVelocityCheck)),
                this.prev !== this.current &&
                  this.events.change &&
                  this.events.change.notify(this.current),
                this.events.velocityChange &&
                  this.events.velocityChange.notify(this.getVelocity()),
                e &&
                  this.events.renderRequest &&
                  this.events.renderRequest.notify(this.current);
            }),
            (this.scheduleVelocityCheck = () =>
              s.Wi.postRender(this.velocityCheck)),
            (this.velocityCheck = ({ timestamp: t }) => {
              t !== this.lastUpdated &&
                ((this.prev = this.current),
                this.events.velocityChange &&
                  this.events.velocityChange.notify(this.getVelocity()));
            }),
            (this.hasAnimated = !1),
            (this.prev = this.current = t),
            (this.canTrackVelocity = o(this.current)),
            (this.owner = e.owner);
        }
        onChange(t) {
          return this.on("change", t);
        }
        on(t, e) {
          this.events[t] || (this.events[t] = new i.L());
          let n = this.events[t].add(e);
          return "change" === t
            ? () => {
                n(),
                  s.Wi.read(() => {
                    this.events.change.getSize() || this.stop();
                  });
              }
            : n;
        }
        clearListeners() {
          for (let t in this.events) this.events[t].clear();
        }
        attach(t, e) {
          (this.passiveEffect = t), (this.stopPassiveEffect = e);
        }
        set(t, e = !0) {
          e && this.passiveEffect
            ? this.passiveEffect(t, this.updateAndNotify)
            : this.updateAndNotify(t, e);
        }
        setWithVelocity(t, e, n) {
          this.set(e), (this.prev = t), (this.timeDelta = n);
        }
        jump(t) {
          this.updateAndNotify(t),
            (this.prev = t),
            this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
        get() {
          return a.current && a.current.push(this), this.current;
        }
        getPrevious() {
          return this.prev;
        }
        getVelocity() {
          return this.canTrackVelocity
            ? (0, r.R)(
                parseFloat(this.current) - parseFloat(this.prev),
                this.timeDelta
              )
            : 0;
        }
        start(t) {
          return (
            this.stop(),
            new Promise((e) => {
              (this.hasAnimated = !0),
                (this.animation = t(e)),
                this.events.animationStart &&
                  this.events.animationStart.notify();
            }).then(() => {
              this.events.animationComplete &&
                this.events.animationComplete.notify(),
                this.clearAnimation();
            })
          );
        }
        stop() {
          this.animation &&
            (this.animation.stop(),
            this.events.animationCancel &&
              this.events.animationCancel.notify()),
            this.clearAnimation();
        }
        isAnimating() {
          return !!this.animation;
        }
        clearAnimation() {
          delete this.animation;
        }
        destroy() {
          this.clearListeners(),
            this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
      }
      function u(t, e) {
        return new l(t, e);
      }
    },
    3257: function (t, e, n) {
      "use strict";
      n.d(e, {
        $: function () {
          return s;
        },
      });
      var i = n(2808),
        r = n(686);
      let s = {
        test: (0, r.i)("#"),
        parse: function (t) {
          let e = "",
            n = "",
            i = "",
            r = "";
          return (
            t.length > 5
              ? ((e = t.substring(1, 3)),
                (n = t.substring(3, 5)),
                (i = t.substring(5, 7)),
                (r = t.substring(7, 9)))
              : ((e = t.substring(1, 2)),
                (n = t.substring(2, 3)),
                (i = t.substring(3, 4)),
                (r = t.substring(4, 5)),
                (e += e),
                (n += n),
                (i += i),
                (r += r)),
            {
              red: parseInt(e, 16),
              green: parseInt(n, 16),
              blue: parseInt(i, 16),
              alpha: r ? parseInt(r, 16) / 255 : 1,
            }
          );
        },
        transform: i.m.transform,
      };
    },
    6002: function (t, e, n) {
      "use strict";
      n.d(e, {
        J: function () {
          return a;
        },
      });
      var i = n(2980),
        r = n(3681),
        s = n(2038),
        o = n(686);
      let a = {
        test: (0, o.i)("hsl", "hue"),
        parse: (0, o.d)("hue", "saturation", "lightness"),
        transform: ({ hue: t, saturation: e, lightness: n, alpha: o = 1 }) =>
          "hsla(" +
          Math.round(t) +
          ", " +
          r.aQ.transform((0, s.Nw)(e)) +
          ", " +
          r.aQ.transform((0, s.Nw)(n)) +
          ", " +
          (0, s.Nw)(i.Fq.transform(o)) +
          ")",
      };
    },
    2199: function (t, e, n) {
      "use strict";
      n.d(e, {
        $: function () {
          return a;
        },
      });
      var i = n(2038),
        r = n(3257),
        s = n(6002),
        o = n(2808);
      let a = {
        test: (t) => o.m.test(t) || r.$.test(t) || s.J.test(t),
        parse: (t) =>
          o.m.test(t)
            ? o.m.parse(t)
            : s.J.test(t)
            ? s.J.parse(t)
            : r.$.parse(t),
        transform: (t) =>
          (0, i.HD)(t)
            ? t
            : t.hasOwnProperty("red")
            ? o.m.transform(t)
            : s.J.transform(t),
      };
    },
    2808: function (t, e, n) {
      "use strict";
      n.d(e, {
        m: function () {
          return u;
        },
      });
      var i = n(3021),
        r = n(2980),
        s = n(2038),
        o = n(686);
      let a = (t) => (0, i.u)(0, 255, t),
        l = { ...r.Rx, transform: (t) => Math.round(a(t)) },
        u = {
          test: (0, o.i)("rgb", "red"),
          parse: (0, o.d)("red", "green", "blue"),
          transform: ({ red: t, green: e, blue: n, alpha: i = 1 }) =>
            "rgba(" +
            l.transform(t) +
            ", " +
            l.transform(e) +
            ", " +
            l.transform(n) +
            ", " +
            (0, s.Nw)(r.Fq.transform(i)) +
            ")",
        };
    },
    686: function (t, e, n) {
      "use strict";
      n.d(e, {
        d: function () {
          return s;
        },
        i: function () {
          return r;
        },
      });
      var i = n(2038);
      let r = (t, e) => (n) =>
          !!(
            ((0, i.HD)(n) && i.mj.test(n) && n.startsWith(t)) ||
            (e && Object.prototype.hasOwnProperty.call(n, e))
          ),
        s = (t, e, n) => (r) => {
          if (!(0, i.HD)(r)) return r;
          let [s, o, a, l] = r.match(i.KP);
          return {
            [t]: parseFloat(s),
            [e]: parseFloat(o),
            [n]: parseFloat(a),
            alpha: void 0 !== l ? parseFloat(l) : 1,
          };
        };
    },
    4875: function (t, e, n) {
      "use strict";
      n.d(e, {
        h: function () {
          return l;
        },
      });
      var i = n(9155),
        r = n(2038);
      let s = new Set(["brightness", "contrast", "saturate", "opacity"]);
      function o(t) {
        let [e, n] = t.slice(0, -1).split("(");
        if ("drop-shadow" === e) return t;
        let [i] = n.match(r.KP) || [];
        if (!i) return t;
        let o = n.replace(i, ""),
          a = s.has(e) ? 1 : 0;
        return i !== n && (a *= 100), e + "(" + a + o + ")";
      }
      let a = /([a-z-]*)\(.*?\)/g,
        l = {
          ...i.P,
          getAnimatableNone: (t) => {
            let e = t.match(a);
            return e ? e.map(o).join(" ") : t;
          },
        };
    },
    9155: function (t, e, n) {
      "use strict";
      n.d(e, {
        P: function () {
          return v;
        },
        V: function () {
          return d;
        },
      });
      var i = n(417),
        r = n(6977),
        s = n(2199),
        o = n(2980),
        a = n(2038);
      let l = { regex: i.Xp, countKey: "Vars", token: "${v}", parse: r.Z },
        u = {
          regex: a.dA,
          countKey: "Colors",
          token: "${c}",
          parse: s.$.parse,
        },
        h = {
          regex: a.KP,
          countKey: "Numbers",
          token: "${n}",
          parse: o.Rx.parse,
        };
      function c(t, { regex: e, countKey: n, token: i, parse: r }) {
        let s = t.tokenised.match(e);
        s &&
          ((t["num" + n] = s.length),
          (t.tokenised = t.tokenised.replace(e, i)),
          t.values.push(...s.map(r)));
      }
      function d(t) {
        let e = t.toString(),
          n = {
            value: e,
            tokenised: e,
            values: [],
            numVars: 0,
            numColors: 0,
            numNumbers: 0,
          };
        return n.value.includes("var(--") && c(n, l), c(n, u), c(n, h), n;
      }
      function f(t) {
        return d(t).values;
      }
      function p(t) {
        let { values: e, numColors: n, numVars: i, tokenised: r } = d(t),
          o = e.length;
        return (t) => {
          let e = r;
          for (let r = 0; r < o; r++)
            e =
              r < i
                ? e.replace(l.token, t[r])
                : r < i + n
                ? e.replace(u.token, s.$.transform(t[r]))
                : e.replace(h.token, (0, a.Nw)(t[r]));
          return e;
        };
      }
      let m = (t) => ("number" == typeof t ? 0 : t),
        v = {
          test: function (t) {
            var e, n;
            return (
              isNaN(t) &&
              (0, a.HD)(t) &&
              ((null === (e = t.match(a.KP)) || void 0 === e
                ? void 0
                : e.length) || 0) +
                ((null === (n = t.match(a.dA)) || void 0 === n
                  ? void 0
                  : n.length) || 0) >
                0
            );
          },
          parse: f,
          createTransformer: p,
          getAnimatableNone: function (t) {
            let e = f(t),
              n = p(t);
            return n(e.map(m));
          },
        };
    },
    2980: function (t, e, n) {
      "use strict";
      n.d(e, {
        Fq: function () {
          return s;
        },
        Rx: function () {
          return r;
        },
        bA: function () {
          return o;
        },
      });
      var i = n(3021);
      let r = {
          test: (t) => "number" == typeof t,
          parse: parseFloat,
          transform: (t) => t,
        },
        s = { ...r, transform: (t) => (0, i.u)(0, 1, t) },
        o = { ...r, default: 1 };
    },
    3681: function (t, e, n) {
      "use strict";
      n.d(e, {
        $C: function () {
          return h;
        },
        RW: function () {
          return s;
        },
        aQ: function () {
          return o;
        },
        px: function () {
          return a;
        },
        vh: function () {
          return l;
        },
        vw: function () {
          return u;
        },
      });
      var i = n(2038);
      let r = (t) => ({
          test: (e) =>
            (0, i.HD)(e) && e.endsWith(t) && 1 === e.split(" ").length,
          parse: parseFloat,
          transform: (e) => `${e}${t}`,
        }),
        s = r("deg"),
        o = r("%"),
        a = r("px"),
        l = r("vh"),
        u = r("vw"),
        h = {
          ...o,
          parse: (t) => o.parse(t) / 100,
          transform: (t) => o.transform(100 * t),
        };
    },
    2038: function (t, e, n) {
      "use strict";
      n.d(e, {
        HD: function () {
          return a;
        },
        KP: function () {
          return r;
        },
        Nw: function () {
          return i;
        },
        dA: function () {
          return s;
        },
        mj: function () {
          return o;
        },
      });
      let i = (t) => Math.round(1e5 * t) / 1e5,
        r = /(-)?([\d]*\.?[\d])+/g,
        s =
          /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
        o =
          /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
      function a(t) {
        return "string" == typeof t;
      }
    },
    3227: function (t, e, n) {
      "use strict";
      n.d(e, {
        L: function () {
          return r;
        },
      });
      var i = n(5735);
      function r(t) {
        return !!((0, i.i)(t) && t.add);
      }
    },
    5735: function (t, e, n) {
      "use strict";
      n.d(e, {
        i: function () {
          return i;
        },
      });
      let i = (t) => !!(t && t.getVelocity);
    },
  },
  function (t) {
    _N_E = t((t.s = 9904));
  },
]);
