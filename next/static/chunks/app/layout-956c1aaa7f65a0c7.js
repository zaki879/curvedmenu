(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [185],
  {
    8214: function (t, e, i) {
      Promise.resolve().then(i.bind(i, 7444)),
        Promise.resolve().then(i.t.bind(i, 1641, 23)),
        Promise.resolve().then(i.t.bind(i, 2471, 23));
    },
    7444: function (t, e, i) {
      "use strict";
      i.r(e),
        i.d(e, {
          default: function () {
            return h;
          },
        });
      var n = i(7437),
        r = i(3963),
        s = i.n(r),
        o = i(2265),
        a = i(2491),
        l = i(2167),
        u = i(4033);
      function h() {
        let [t, e] = (0, o.useState)(!1),
          i = (0, u.usePathname)();
        return (
          (0, o.useEffect)(() => {
            t && e(!1);
          }, [i, t]),
          (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsx)("div", {
                className: s().main,
                children: (0, n.jsx)("div", {
                  className: s().header,
                  children: (0, n.jsx)("div", {
                    onClick: () => {
                      e(!t);
                    },
                    className: s().button,
                    children: (0, n.jsx)("div", {
                      className: ""
                        .concat(s().burger, " ")
                        .concat(t ? s().burgerActive : ""),
                    }),
                  }),
                }),
              }),
              (0, n.jsx)(l.M, {
                mode: "wait",
                children: t && (0, n.jsx)(a.Z, {}),
              }),
            ],
          })
        );
      }
    },
    2491: function (t, e, i) {
      "use strict";
      i.d(e, {
        Z: function () {
          return f;
        },
      });
      var n = i(7437),
        r = i(2265),
        s = i(9190),
        o = i.n(s),
        a = i(8733),
        l = i(4033);
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
      var h = i(9405),
        c = i.n(h);
      function d() {
        let t = "M100 0 L200 0 L200 "
            .concat(window.innerHeight, " L100 ")
            .concat(window.innerHeight, " Q-100 ")
            .concat(window.innerHeight / 2, " 100 0"),
          e = "M100 0 L200 0 L200 "
            .concat(window.innerHeight, " L100 ")
            .concat(window.innerHeight, " Q100 ")
            .concat(window.innerHeight / 2, " 100 0");
        return (0, n.jsx)("svg", {
          className: c().svgCurve,
          children: (0, n.jsx)(a.E.path, {
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
          [e, i] = (0, r.useState)(t);
        return (0, n.jsxs)(a.E.div, {
          variants: u,
          initial: "initial",
          animate: "enter",
          exit: "exit",
          className: o().menu,
          children: [
            (0, n.jsx)("div", {
              className: o().body,
              children: (0, n.jsx)("div", {
                onMouseLeave: () => {
                  i(t);
                },
                className: o().nav,
                children: (0, n.jsx)("div", {
                  className: o().header,
                  children: (0, n.jsx)("p", { children: "Navigation" }),
                }),
              }),
            }),
            (0, n.jsx)(d, {}),
          ],
        });
      }
    },
    2471: function () {},
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
    3963: function (t) {
      t.exports = {
        header: "style_header__vLaIN",
        button: "style_button__kkeEW",
        burgerActive: "style_burgerActive__DLlmq",
      };
    },
    1641: function (t) {
      t.exports = {
        style: {
          fontFamily: "'__Inter_36bd41', '__Inter_Fallback_36bd41'",
          fontStyle: "normal",
        },
        className: "__className_36bd41",
      };
    },
    622: function (t, e, i) {
      "use strict";
      /**
       * @license React
       * react-jsx-runtime.production.min.js
       *
       * Copyright (c) Meta Platforms, Inc. and affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */ var n = i(2265),
        r = Symbol.for("react.element"),
        s = Symbol.for("react.fragment"),
        o = Object.prototype.hasOwnProperty,
        a =
          n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        l = { key: !0, ref: !0, __self: !0, __source: !0 };
      function u(t, e, i) {
        var n,
          s = {},
          u = null,
          h = null;
        for (n in (void 0 !== i && (u = "" + i),
        void 0 !== e.key && (u = "" + e.key),
        void 0 !== e.ref && (h = e.ref),
        e))
          o.call(e, n) && !l.hasOwnProperty(n) && (s[n] = e[n]);
        if (t && t.defaultProps)
          for (n in (e = t.defaultProps)) void 0 === s[n] && (s[n] = e[n]);
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
    7437: function (t, e, i) {
      "use strict";
      t.exports = i(622);
    },
    4033: function (t, e, i) {
      t.exports = i(8165);
    },
    1705: function (t, e, i) {
      "use strict";
      i.d(e, {
        y: function () {
          return R;
        },
      });
      var n = i(6977);
      let r = (t, e, i) =>
        (((1 - 3 * i + 3 * e) * t + (3 * i - 6 * e)) * t + 3 * e) * t;
      function s(t, e, i, s) {
        if (t === e && i === s) return n.Z;
        let o = (e) =>
          (function (t, e, i, n, s) {
            let o, a;
            let l = 0;
            do (o = r((a = e + (i - e) / 2), n, s) - t) > 0 ? (i = a) : (e = a);
            while (Math.abs(o) > 1e-7 && ++l < 12);
            return a;
          })(e, 0, 1, t, i);
        return (t) => (0 === t || 1 === t ? t : r(o(t), e, s));
      }
      let o = s(0.42, 0, 1, 1),
        a = s(0, 0, 0.58, 1),
        l = s(0.42, 0, 0.58, 1);
      var u = i(7565),
        h = i(6567),
        c = i(927),
        d = i(933),
        f = i(484);
      let p = s(0.33, 1.53, 0.69, 0.99),
        m = (0, f.M)(p),
        v = (0, d.o)(m),
        g = {
          linear: n.Z,
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
            let [e, i, n, r] = t;
            return s(e, i, n, r);
          }
          return "string" == typeof t
            ? ((0, h.k)(void 0 !== g[t], `Invalid easing type '${t}'`), g[t])
            : t;
        };
      var x = i(3245),
        P = i(9448);
      function b({
        duration: t = 300,
        keyframes: e,
        times: i,
        ease: n = "easeInOut",
      }) {
        let r = (0, u.N)(n) ? n.map(y) : y(n),
          s = { done: !1, value: e[0] },
          o = (i && i.length === e.length ? i : (0, P.Y)(e)).map((e) => e * t),
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
      var w = i(3816),
        A = i(2252);
      function T({
        keyframes: t,
        velocity: e = 0,
        power: i = 0.8,
        timeConstant: n = 325,
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
          g = i * e,
          y = f + g,
          x = void 0 === o ? y : o(y);
        x !== y && (g = x - f);
        let P = (t) => -g * Math.exp(-t / n),
          b = (t) => x + P(t),
          T = (t) => {
            let e = P(t),
              i = b(t);
            (p.done = Math.abs(e) <= u), (p.value = p.done ? x : i);
          },
          C = (t) => {
            m(p.value) &&
              ((c = t),
              (d = (0, w.S)({
                keyframes: [p.value, v(p.value)],
                velocity: (0, A.P)(b, t, p.value),
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
      var C = i(3041);
      let S = (t) => {
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
      var E = i(3021),
        V = i(1356),
        D = i(1064);
      let M = { decay: T, inertia: T, tween: b, keyframes: b, spring: w.S };
      function R({
        autoplay: t = !0,
        delay: e = 0,
        driver: i = S,
        keyframes: n,
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
          w = () => {
            p = new Promise((t) => {
              f = t;
            });
          };
        w();
        let A = M[r] || b;
        A !== b &&
          "number" != typeof n[0] &&
          ((v = (0, x.s)([0, 100], n, { clamp: !1 })), (n = [0, 100]));
        let T = A({ ...d, keyframes: n });
        "mirror" === a &&
          (g = A({
            ...d,
            keyframes: [...n].reverse(),
            velocity: -(d.velocity || 0),
          }));
        let C = "idle",
          R = null,
          k = null,
          L = null;
        null === T.calculatedDuration &&
          s &&
          (T.calculatedDuration = (0, D.i)(T));
        let { calculatedDuration: j } = T,
          F = 1 / 0,
          B = 1 / 0;
        null !== j && (B = (F = j + o) * (s + 1) - o);
        let O = 0,
          $ = (t) => {
            if (null === k) return;
            y > 0 && (k = Math.min(k, t)),
              y < 0 && (k = Math.min(t - B / y, k)),
              (O = null !== R ? R : Math.round(t - k) * y);
            let i = O - e * (y >= 0 ? 1 : -1),
              r = y >= 0 ? i < 0 : i > B;
            (O = Math.max(i, 0)), "finished" === C && null === R && (O = B);
            let l = O,
              u = T;
            if (s) {
              let t = Math.min(O, B) / F,
                e = Math.floor(t),
                i = t % 1;
              !i && t >= 1 && (i = 1), 1 === i && e--, (e = Math.min(e, s + 1));
              let n = !!(e % 2);
              n &&
                ("reverse" === a
                  ? ((i = 1 - i), o && (i -= o / F))
                  : "mirror" === a && (u = g)),
                (l = (0, E.u)(0, 1, i) * F);
            }
            let h = r ? { done: !1, value: n[0] } : u.next(l);
            v && (h.value = v(h.value));
            let { done: d } = h;
            r || null === j || (d = y >= 0 ? O >= B : O <= 0);
            let f = null === R && ("finished" === C || ("running" === C && d));
            return c && c(h.value), f && U(), h;
          },
          W = () => {
            m && m.stop(), (m = void 0);
          },
          I = () => {
            (C = "idle"), W(), f(), w(), (k = L = null);
          },
          U = () => {
            (C = "finished"), h && h(), W(), f();
          },
          N = () => {
            if (P) return;
            m || (m = i($));
            let t = m.now();
            l && l(),
              null !== R ? (k = t - R) : (k && "finished" !== C) || (k = t),
              "finished" === C && w(),
              (L = k),
              (R = null),
              (C = "running"),
              m.start();
          };
        t && N();
        let _ = {
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
                ? (0, D.i)(T)
                : T.calculatedDuration;
            return (0, V.X)(t);
          },
          get speed() {
            return y;
          },
          set speed(newSpeed) {
            if (newSpeed === y || !m) return;
            (y = newSpeed), (_.time = (0, V.X)(O));
          },
          get state() {
            return C;
          },
          play: N,
          pause: () => {
            (C = "paused"), (R = O);
          },
          stop: () => {
            (P = !0), "idle" !== C && ((C = "idle"), u && u(), I());
          },
          cancel: () => {
            null !== L && $(L), I();
          },
          complete: () => {
            C = "finished";
          },
          sample: (t) => ((k = 0), $(t)),
        };
        return _;
      }
    },
    3816: function (t, e, i) {
      "use strict";
      i.d(e, {
        S: function () {
          return c;
        },
      });
      var n = i(1356),
        r = i(2252),
        s = i(6567),
        o = i(3021);
      function a(t, e) {
        return t * Math.sqrt(1 - e * e);
      }
      let l = ["duration", "bounce"],
        u = ["stiffness", "damping", "mass"];
      function h(t, e) {
        return e.some((e) => void 0 !== t[e]);
      }
      function c({ keyframes: t, restDelta: e, restSpeed: i, ...c }) {
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
            isResolvedFromDuration: b,
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
              let i = (function ({
                duration: t = 800,
                bounce: e = 0.25,
                velocity: i = 0,
                mass: r = 1,
              }) {
                let l, u;
                (0, s.K)(
                  t <= (0, n.w)(10),
                  "Spring duration must be 10 seconds or less"
                );
                let h = 1 - e;
                (h = (0, o.u)(0.05, 1, h)),
                  (t = (0, o.u)(0.01, 10, (0, n.X)(t))),
                  h < 1
                    ? ((l = (e) => {
                        let n = e * h,
                          r = n * t,
                          s = a(e, h);
                        return 0.001 - ((n - i) / s) * Math.exp(-r);
                      }),
                      (u = (e) => {
                        let n = e * h,
                          r = n * t,
                          s = Math.pow(h, 2) * Math.pow(e, 2) * t,
                          o = a(Math.pow(e, 2), h),
                          u = -l(e) + 0.001 > 0 ? -1 : 1;
                        return (u * ((r * i + i - s) * Math.exp(-r))) / o;
                      }))
                    : ((l = (e) => {
                        let n = Math.exp(-e * t),
                          r = (e - i) * t + 1;
                        return -0.001 + n * r;
                      }),
                      (u = (e) => {
                        let n = Math.exp(-e * t),
                          r = (i - e) * (t * t);
                        return n * r;
                      }));
                let c = 5 / t,
                  d = (function (t, e, i) {
                    let n = i;
                    for (let i = 1; i < 12; i++) n -= t(n) / e(n);
                    return n;
                  })(l, u, c);
                if (((t = (0, n.w)(t)), isNaN(d)))
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
              (e = { ...e, ...i, mass: 1 }).isResolvedFromDuration = !0;
            }
            return e;
          })({ ...c, velocity: -(0, n.X)(c.velocity || 0) }),
          w = P || 0,
          A = g / (2 * Math.sqrt(v * y)),
          T = p - f,
          C = (0, n.X)(Math.sqrt(v / y)),
          S = 5 > Math.abs(T);
        if ((i || (i = S ? 0.01 : 2), e || (e = S ? 0.005 : 0.5), A < 1)) {
          let t = a(C, A);
          d = (e) => {
            let i = Math.exp(-A * C * e);
            return (
              p -
              i *
                (((w + A * C * T) / t) * Math.sin(t * e) + T * Math.cos(t * e))
            );
          };
        } else if (1 === A)
          d = (t) => p - Math.exp(-C * t) * (T + (w + C * T) * t);
        else {
          let t = C * Math.sqrt(A * A - 1);
          d = (e) => {
            let i = Math.exp(-A * C * e),
              n = Math.min(t * e, 300);
            return (
              p -
              (i * ((w + A * C * T) * Math.sinh(n) + t * T * Math.cosh(n))) / t
            );
          };
        }
        return {
          calculatedDuration: (b && x) || null,
          next: (t) => {
            let n = d(t);
            if (b) m.done = t >= x;
            else {
              let s = w;
              0 !== t && (s = A < 1 ? (0, r.P)(d, t, n) : 0);
              let o = Math.abs(s) <= i,
                a = Math.abs(p - n) <= e;
              m.done = o && a;
            }
            return (m.value = m.done ? p : n), m;
          },
        };
      }
    },
    1064: function (t, e, i) {
      "use strict";
      i.d(e, {
        E: function () {
          return n;
        },
        i: function () {
          return r;
        },
      });
      let n = 2e4;
      function r(t) {
        let e = 0,
          i = t.next(e);
        for (; !i.done && e < n; ) (e += 50), (i = t.next(e));
        return e >= n ? 1 / 0 : e;
      }
    },
    2252: function (t, e, i) {
      "use strict";
      i.d(e, {
        P: function () {
          return r;
        },
      });
      var n = i(9815);
      function r(t, e, i) {
        let r = Math.max(e - 5, 0);
        return (0, n.R)(i - t(r), e - r);
      }
    },
    9883: function (t, e, i) {
      "use strict";
      i.d(e, {
        v: function () {
          return V;
        },
      });
      var n = i(6567),
        r = i(1356);
      let s = { current: !1 },
        o = (t) => Array.isArray(t) && "number" == typeof t[0],
        a = ([t, e, i, n]) => `cubic-bezier(${t}, ${e}, ${i}, ${n})`,
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
      var u = i(1705),
        h = i(9648),
        c = i(6977),
        d = i(3041);
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
      var v = i(9303);
      let g = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
        y = (t) => ({
          type: "spring",
          stiffness: 550,
          damping: 0 === t ? 2 * Math.sqrt(550) : 30,
          restSpeed: 10,
        }),
        x = { type: "keyframes", duration: 0.8 },
        P = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
        b = (t, { keyframes: e }) =>
          e.length > 2
            ? x
            : v.G.has(t)
            ? t.startsWith("scale")
              ? y(e[1])
              : g
            : P;
      var w = i(9155);
      let A = (t, e) =>
        "zIndex" !== t &&
        !!(
          "number" == typeof e ||
          Array.isArray(e) ||
          ("string" == typeof e &&
            (w.P.test(e) || "0" === e) &&
            !e.startsWith("url("))
        );
      var T = i(9006),
        C = i(5243),
        S = i(7924);
      let E = { skipAnimations: !1 },
        V =
          (t, e, i, h = {}) =>
          (v) => {
            let g = (0, S.e)(h, t) || {},
              y = g.delay || h.delay || 0,
              { elapsed: x = 0 } = h;
            x -= (0, r.w)(y);
            let P = (function (t, e, i, n) {
                let r, s;
                let o = A(e, i);
                r = Array.isArray(i) ? [...i] : [null, i];
                let a = void 0 !== n.from ? n.from : t.get(),
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
                    let i = l[t];
                    r[i] = (0, T.T)(e, s);
                  }
                return r;
              })(e, t, i, g),
              w = P[0],
              V = P[P.length - 1],
              D = A(t, w),
              M = A(t, V);
            (0, n.K)(
              D === M,
              `You are trying to animate ${t} from "${w}" to "${V}". ${w} is not an animatable value - to enable this animation set ${w} to a value animatable to ${V} via the \`style\` property.`
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
              ((0, S.r)(g) || (R = { ...R, ...b(t, R) }),
              R.duration && (R.duration = (0, r.w)(R.duration)),
              R.repeatDelay && (R.repeatDelay = (0, r.w)(R.repeatDelay)),
              !D || !M || s.current || !1 === g.type || E.skipAnimations)
            )
              return (function ({
                keyframes: t,
                delay: e,
                onUpdate: i,
                onComplete: n,
              }) {
                let r = () => (
                  i && i(t[t.length - 1]),
                  n && n(),
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
              let i = (function (t, e, { onUpdate: i, onComplete: n, ...s }) {
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
                let { keyframes: b, duration: w = 300, ease: A, times: T } = s;
                if (m(e, s)) {
                  let t = (0, u.y)({ ...s, repeat: 0, delay: 0 }),
                    e = { done: !1, value: b[0] },
                    i = [],
                    n = 0;
                  for (; !e.done && n < 2e4; )
                    i.push((e = t.sample(n)).value), (n += 10);
                  (T = void 0), (b = i), (w = n - 10), (A = "linear");
                }
                let C = (function (
                    t,
                    e,
                    i,
                    {
                      delay: n = 0,
                      duration: r,
                      repeat: s = 0,
                      repeatType: u = "loop",
                      ease: h,
                      times: c,
                    } = {}
                  ) {
                    let d = { [e]: i };
                    c && (d.offset = c);
                    let f = (function t(e) {
                      if (e)
                        return o(e) ? a(e) : Array.isArray(e) ? e.map(t) : l[e];
                    })(h);
                    return (
                      Array.isArray(f) && (d.easing = f),
                      t.animate(d, {
                        delay: n,
                        duration: r,
                        easing: Array.isArray(f) ? "linear" : f,
                        fill: "both",
                        iterations: s + 1,
                        direction: "reverse" === u ? "alternate" : "normal",
                      })
                    );
                  })(t.owner.current, e, b, {
                    ...s,
                    duration: w,
                    ease: A,
                    times: T,
                  }),
                  S = () => {
                    (x = !1), C.cancel();
                  },
                  E = () => {
                    (x = !0), d.Wi.update(S), h(), P();
                  };
                return (
                  (C.onfinish = () => {
                    x ||
                      (t.set(
                        (function (t, { repeat: e, repeatType: i = "loop" }) {
                          let n =
                            e && "loop" !== i && e % 2 == 1 ? 0 : t.length - 1;
                          return t[n];
                        })(b, s)
                      ),
                      n && n(),
                      E());
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
                      return (0, r.X)(w);
                    },
                    play: () => {
                      y || (C.play(), (0, d.Pn)(S));
                    },
                    pause: () => C.pause(),
                    stop: () => {
                      if (((y = !0), "idle" === C.playState)) return;
                      let { currentTime: e } = C;
                      if (e) {
                        let i = (0, u.y)({ ...s, autoplay: !1 });
                        t.setWithVelocity(
                          i.sample(e - 10).value,
                          i.sample(e).value,
                          10
                        );
                      }
                      E();
                    },
                    complete: () => {
                      x || C.finish();
                    },
                    cancel: E,
                  }
                );
              })(e, t, R);
              if (i) return i;
            }
            return (0, u.y)(R);
          };
    },
    4854: function (t, e, i) {
      "use strict";
      i.d(e, {
        D: function () {
          return o;
        },
      });
      var n = i(9883),
        r = i(4101),
        s = i(5735);
      function o(t, e, i) {
        let o = (0, s.i)(t) ? t : (0, r.BX)(t);
        return o.start((0, n.v)("", o, e, i)), o.animation;
      }
    },
    5430: function (t, e, i) {
      "use strict";
      i.d(e, {
        w: function () {
          return h;
        },
      });
      var n = i(9303),
        r = i(6348),
        s = i(9883),
        o = i(3227),
        a = i(7798),
        l = i(7924),
        u = i(3041);
      function h(t, e, { delay: i = 0, transitionOverride: h, type: c } = {}) {
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
              (function ({ protectedKeys: t, needsAnimating: e }, i) {
                let n = t.hasOwnProperty(i) && !0 !== e[i];
                return (e[i] = !1), n;
              })(g, e))
          )
            continue;
          let c = { delay: i, elapsed: 0, ...(0, l.e)(d || {}, e) };
          if (window.HandoffAppearAnimations) {
            let i = t.getProps()[r.M];
            if (i) {
              let t = window.HandoffAppearAnimations(i, e, a, u.Wi);
              null !== t && ((c.elapsed = t), (c.isHandoff = !0));
            }
          }
          let f =
            !c.isHandoff &&
            !(function (t, e) {
              let i = t.get();
              if (!Array.isArray(e)) return i !== e;
              for (let t = 0; t < e.length; t++) if (e[t] !== i) return !0;
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
              t.shouldReduceMotion && n.G.has(e) ? { type: !1 } : c
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
    6348: function (t, e, i) {
      "use strict";
      i.d(e, {
        M: function () {
          return r;
        },
      });
      var n = i(7905);
      let r = "data-" + (0, n.D)("framerAppearId");
    },
    7866: function (t, e, i) {
      "use strict";
      function n(t) {
        return (
          null !== t && "object" == typeof t && "function" == typeof t.start
        );
      }
      i.d(e, {
        H: function () {
          return n;
        },
      });
    },
    363: function (t, e, i) {
      "use strict";
      i.d(e, {
        C: function () {
          return n;
        },
      });
      let n = (t) => Array.isArray(t);
    },
    7924: function (t, e, i) {
      "use strict";
      function n({
        when: t,
        delay: e,
        delayChildren: i,
        staggerChildren: n,
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
      i.d(e, {
        e: function () {
          return r;
        },
        r: function () {
          return n;
        },
      });
    },
    2167: function (t, e, i) {
      "use strict";
      i.d(e, {
        M: function () {
          return v;
        },
      });
      var n = i(2265),
        r = i(538);
      function s() {
        let t = (0, n.useRef)(!1);
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
      var o = i(3041),
        a = i(8243),
        l = i(961);
      class u extends n.Component {
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
        let i = (0, n.useId)(),
          r = (0, n.useRef)(null),
          s = (0, n.useRef)({ width: 0, height: 0, top: 0, left: 0 });
        return (
          (0, n.useInsertionEffect)(() => {
            let { width: t, height: n, top: o, left: a } = s.current;
            if (e || !r.current || !t || !n) return;
            r.current.dataset.motionPopId = i;
            let l = document.createElement("style");
            return (
              document.head.appendChild(l),
              l.sheet &&
                l.sheet.insertRule(`
          [data-motion-pop-id="${i}"] {
            position: absolute !important;
            width: ${t}px !important;
            height: ${n}px !important;
            top: ${o}px !important;
            left: ${a}px !important;
          }
        `),
              () => {
                document.head.removeChild(l);
              }
            );
          }, [e]),
          n.createElement(
            u,
            { isPresent: e, childRef: r, sizeRef: s },
            n.cloneElement(t, { ref: r })
          )
        );
      }
      let c = ({
        children: t,
        initial: e,
        isPresent: i,
        onExitComplete: r,
        custom: s,
        presenceAffectsLayout: o,
        mode: u,
      }) => {
        let c = (0, l.h)(d),
          f = (0, n.useId)(),
          p = (0, n.useMemo)(
            () => ({
              id: f,
              initial: e,
              isPresent: i,
              custom: s,
              onExitComplete: (t) => {
                for (let e of (c.set(t, !0), c.values())) if (!e) return;
                r && r();
              },
              register: (t) => (c.set(t, !1), () => c.delete(t)),
            }),
            o ? void 0 : [i]
          );
        return (
          (0, n.useMemo)(() => {
            c.forEach((t, e) => c.set(e, !1));
          }, [i]),
          n.useEffect(() => {
            i || c.size || !r || r();
          }, [i]),
          "popLayout" === u && (t = n.createElement(h, { isPresent: i }, t)),
          n.createElement(a.O.Provider, { value: p }, t)
        );
      };
      function d() {
        return new Map();
      }
      var f = i(781),
        p = i(6567);
      let m = (t) => t.key || "",
        v = ({
          children: t,
          custom: e,
          initial: i = !0,
          onExitComplete: a,
          exitBeforeEnter: l,
          presenceAffectsLayout: u = !0,
          mode: h = "sync",
        }) => {
          var d;
          (0, p.k)(!l, "Replace exitBeforeEnter with mode='wait'");
          let v =
              (0, n.useContext)(f.p).forceRender ||
              (function () {
                let t = s(),
                  [e, i] = (0, n.useState)(0),
                  r = (0, n.useCallback)(() => {
                    t.current && i(e + 1);
                  }, [e]),
                  a = (0, n.useCallback)(() => o.Wi.postRender(r), [r]);
                return [a, e];
              })()[0],
            g = s(),
            y = (function (t) {
              let e = [];
              return (
                n.Children.forEach(t, (t) => {
                  (0, n.isValidElement)(t) && e.push(t);
                }),
                e
              );
            })(t),
            x = y,
            P = (0, n.useRef)(new Map()).current,
            b = (0, n.useRef)(x),
            w = (0, n.useRef)(new Map()).current,
            A = (0, n.useRef)(!0);
          if (
            ((0, r.L)(() => {
              (A.current = !1),
                (function (t, e) {
                  t.forEach((t) => {
                    let i = m(t);
                    e.set(i, t);
                  });
                })(y, w),
                (b.current = x);
            }),
            (d = () => {
              (A.current = !0), w.clear(), P.clear();
            }),
            (0, n.useEffect)(() => () => d(), []),
            A.current)
          )
            return n.createElement(
              n.Fragment,
              null,
              x.map((t) =>
                n.createElement(
                  c,
                  {
                    key: m(t),
                    isPresent: !0,
                    initial: !!i && void 0,
                    presenceAffectsLayout: u,
                    mode: h,
                  },
                  t
                )
              )
            );
          x = [...x];
          let T = b.current.map(m),
            C = y.map(m),
            S = T.length;
          for (let t = 0; t < S; t++) {
            let e = T[t];
            -1 !== C.indexOf(e) || P.has(e) || P.set(e, void 0);
          }
          return (
            "wait" === h && P.size && (x = []),
            P.forEach((t, i) => {
              if (-1 !== C.indexOf(i)) return;
              let r = w.get(i);
              if (!r) return;
              let s = T.indexOf(i),
                o = t;
              o ||
                ((o = n.createElement(
                  c,
                  {
                    key: m(r),
                    isPresent: !1,
                    onExitComplete: () => {
                      P.delete(i);
                      let t = Array.from(w.keys()).filter(
                        (t) => !C.includes(t)
                      );
                      if (
                        (t.forEach((t) => w.delete(t)),
                        (b.current = y.filter((e) => {
                          let n = m(e);
                          return n === i || t.includes(n);
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
                P.set(i, o)),
                x.splice(s, 0, o);
            }),
            (x = x.map((t) => {
              let e = t.key;
              return P.has(e)
                ? t
                : n.createElement(
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
            n.createElement(
              n.Fragment,
              null,
              P.size ? x : x.map((t) => (0, n.cloneElement)(t))
            )
          );
        };
    },
    781: function (t, e, i) {
      "use strict";
      i.d(e, {
        p: function () {
          return r;
        },
      });
      var n = i(2265);
      let r = (0, n.createContext)({});
    },
    5968: function (t, e, i) {
      "use strict";
      i.d(e, {
        _: function () {
          return r;
        },
      });
      var n = i(2265);
      let r = (0, n.createContext)({
        transformPagePoint: (t) => t,
        isStatic: !1,
        reducedMotion: "never",
      });
    },
    8243: function (t, e, i) {
      "use strict";
      i.d(e, {
        O: function () {
          return r;
        },
      });
      var n = i(2265);
      let r = (0, n.createContext)(null);
    },
    927: function (t, e, i) {
      "use strict";
      i.d(e, {
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
      var n = i(933),
        r = i(484);
      let s = (t) => 1 - Math.sin(Math.acos(t)),
        o = (0, r.M)(s),
        a = (0, n.o)(s);
    },
    933: function (t, e, i) {
      "use strict";
      i.d(e, {
        o: function () {
          return n;
        },
      });
      let n = (t) => (e) => e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2;
    },
    484: function (t, e, i) {
      "use strict";
      i.d(e, {
        M: function () {
          return n;
        },
      });
      let n = (t) => (e) => 1 - t(1 - e);
    },
    7565: function (t, e, i) {
      "use strict";
      i.d(e, {
        N: function () {
          return n;
        },
      });
      let n = (t) => Array.isArray(t) && "number" != typeof t[0];
    },
    3041: function (t, e, i) {
      "use strict";
      i.d(e, {
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
      var n = i(6977);
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
          let i = !1,
            n = !0,
            o = { delta: 0, timestamp: 0, isProcessing: !1 },
            a = s.reduce(
              (t, e) => (
                (t[e] = (function (t) {
                  let e = new r(),
                    i = new r(),
                    n = 0,
                    s = !1,
                    o = !1,
                    a = new WeakSet(),
                    l = {
                      schedule: (t, r = !1, o = !1) => {
                        let l = o && s,
                          u = l ? e : i;
                        return (
                          r && a.add(t),
                          u.add(t) && l && s && (n = e.order.length),
                          t
                        );
                      },
                      cancel: (t) => {
                        i.remove(t), a.delete(t);
                      },
                      process: (r) => {
                        if (s) {
                          o = !0;
                          return;
                        }
                        if (
                          ((s = !0),
                          ([e, i] = [i, e]),
                          i.clear(),
                          (n = e.order.length))
                        )
                          for (let i = 0; i < n; i++) {
                            let n = e.order[i];
                            n(r), a.has(n) && (l.schedule(n), t());
                          }
                        (s = !1), o && ((o = !1), l.process(r));
                      },
                    };
                  return l;
                })(() => (i = !0))),
                t
              ),
              {}
            ),
            l = (t) => a[t].process(o),
            u = () => {
              let r = performance.now();
              (i = !1),
                (o.delta = n
                  ? 1e3 / 60
                  : Math.max(Math.min(r - o.timestamp, 40), 1)),
                (o.timestamp = r),
                (o.isProcessing = !0),
                s.forEach(l),
                (o.isProcessing = !1),
                i && e && ((n = !1), t(u));
            },
            h = () => {
              (i = !0), (n = !0), o.isProcessing || t(u);
            },
            c = s.reduce((t, e) => {
              let n = a[e];
              return (
                (t[e] = (t, e = !1, r = !1) => (i || h(), n.schedule(t, e, r))),
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
            : n.Z,
          !0
        );
    },
    9001: function (t, e, i) {
      "use strict";
      i.d(e, {
        A: function () {
          return r;
        },
      });
      let n = {
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
      for (let t in n) r[t] = { isEnabled: (e) => n[t].some((t) => !!e[t]) };
    },
    1118: function (t, e, i) {
      "use strict";
      i.d(e, {
        j: function () {
          return s;
        },
      });
      var n = i(611),
        r = i(9303);
      function s(t, { layout: e, layoutId: i }) {
        return (
          r.G.has(t) ||
          t.startsWith("origin") ||
          ((e || void 0 !== i) && (!!n.P[t] || "opacity" === t))
        );
      }
    },
    4902: function (t, e, i) {
      "use strict";
      function n({ top: t, left: e, right: i, bottom: n }) {
        return { x: { min: e, max: i }, y: { min: t, max: n } };
      }
      function r({ x: t, y: e }) {
        return { top: e.min, right: t.max, bottom: e.max, left: t.min };
      }
      function s(t, e) {
        if (!e) return t;
        let i = e({ x: t.left, y: t.top }),
          n = e({ x: t.right, y: t.bottom });
        return { top: i.y, left: i.x, bottom: n.y, right: n.x };
      }
      i.d(e, {
        d7: function () {
          return s;
        },
        i8: function () {
          return n;
        },
        z2: function () {
          return r;
        },
      });
    },
    1841: function (t, e, i) {
      "use strict";
      i.d(e, {
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
      var n = i(7),
        r = i(121);
      function s(t, e, i) {
        return i + e * (t - i);
      }
      function o(t, e, i, n, r) {
        return void 0 !== r && (t = n + r * (t - n)), n + i * (t - n) + e;
      }
      function a(t, e = 0, i = 1, n, r) {
        (t.min = o(t.min, e, i, n, r)), (t.max = o(t.max, e, i, n, r));
      }
      function l(t, { x: e, y: i }) {
        a(t.x, e.translate, e.scale, e.originPoint),
          a(t.y, i.translate, i.scale, i.originPoint);
      }
      function u(t, e, i, n = !1) {
        let s, o;
        let a = i.length;
        if (a) {
          e.x = e.y = 1;
          for (let u = 0; u < a; u++) {
            o = (s = i[u]).projectionDelta;
            let a = s.instance;
            (!a || !a.style || "contents" !== a.style.display) &&
              (n &&
                s.options.layoutScroll &&
                s.scroll &&
                s !== s.root &&
                m(t, { x: -s.scroll.offset.x, y: -s.scroll.offset.y }),
              o && ((e.x *= o.x.scale), (e.y *= o.y.scale), l(t, o)),
              n && (0, r.ud)(s.latestValues) && m(t, s.latestValues));
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
      function d(t, e, [i, r, s]) {
        let o = void 0 !== e[s] ? e[s] : 0.5,
          l = (0, n.C)(t.min, t.max, o);
        a(t, e[i], e[r], l, e.scale);
      }
      let f = ["x", "scaleX", "originX"],
        p = ["y", "scaleY", "originY"];
      function m(t, e) {
        d(t.x, e, f), d(t.y, e, p);
      }
    },
    4597: function (t, e, i) {
      "use strict";
      i.d(e, {
        dO: function () {
          return o;
        },
        wc: function () {
          return r;
        },
      });
      let n = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
        r = () => ({ x: n(), y: n() }),
        s = () => ({ min: 0, max: 0 }),
        o = () => ({ x: s(), y: s() });
    },
    611: function (t, e, i) {
      "use strict";
      i.d(e, {
        B: function () {
          return r;
        },
        P: function () {
          return n;
        },
      });
      let n = {};
      function r(t) {
        Object.assign(n, t);
      }
    },
    121: function (t, e, i) {
      "use strict";
      function n(t) {
        return void 0 === t || 1 === t;
      }
      function r({ scale: t, scaleX: e, scaleY: i }) {
        return !n(t) || !n(e) || !n(i);
      }
      function s(t) {
        return r(t) || o(t) || t.z || t.rotate || t.rotateX || t.rotateY;
      }
      function o(t) {
        var e, i;
        return ((e = t.x) && "0%" !== e) || ((i = t.y) && "0%" !== i);
      }
      i.d(e, {
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
    3937: function (t, e, i) {
      "use strict";
      i.d(e, {
        J: function () {
          return s;
        },
        z: function () {
          return o;
        },
      });
      var n = i(4902),
        r = i(1841);
      function s(t, e) {
        return (0, n.i8)((0, n.d7)(t.getBoundingClientRect(), e));
      }
      function o(t, e, i) {
        let n = s(t, i),
          { scroll: o } = e;
        return o && ((0, r.am)(n.x, o.offset.x), (0, r.am)(n.y, o.offset.y)), n;
      }
    },
    1923: function (t, e, i) {
      "use strict";
      i.d(e, {
        J: function () {
          return Y;
        },
      });
      var n = i(7798),
        r = i(6567),
        s = i(4747),
        o = i(417);
      let a = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
      function l(t, e, i = 1) {
        (0, r.k)(
          i <= 4,
          `Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`
        );
        let [n, u] = (function (t) {
          let e = a.exec(t);
          if (!e) return [,];
          let [, i, n] = e;
          return [i, n];
        })(t);
        if (!n) return;
        let h = window.getComputedStyle(e).getPropertyValue(n);
        if (h) {
          let t = h.trim();
          return (0, s.P)(t) ? parseFloat(t) : t;
        }
        return (0, o.tm)(u) ? l(u, e, i + 1) : u;
      }
      var u = i(363),
        h = i(9303),
        c = i(8824),
        d = i(6613),
        f = i(2980),
        p = i(3681);
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
          (i, { transform: n }) => {
            if ("none" === n || !n) return 0;
            let r = n.match(/^matrix3d\((.+)\)$/);
            if (r) return x(r[1], e);
            {
              let e = n.match(/^matrix\((.+)\)$/);
              return e ? x(e[1], t) : 0;
            }
          },
        b = new Set(["x", "y", "z"]),
        w = h._.filter((t) => !b.has(t)),
        A = {
          width: ({ x: t }, { paddingLeft: e = "0", paddingRight: i = "0" }) =>
            t.max - t.min - parseFloat(e) - parseFloat(i),
          height: ({ y: t }, { paddingTop: e = "0", paddingBottom: i = "0" }) =>
            t.max - t.min - parseFloat(e) - parseFloat(i),
          top: (t, { top: e }) => parseFloat(e),
          left: (t, { left: e }) => parseFloat(e),
          bottom: ({ y: t }, { top: e }) => parseFloat(e) + (t.max - t.min),
          right: ({ x: t }, { left: e }) => parseFloat(e) + (t.max - t.min),
          x: P(4, 13),
          y: P(5, 14),
        };
      (A.translateX = A.x), (A.translateY = A.y);
      let T = (t, e, i) => {
          let n = e.measureViewportBox(),
            r = e.current,
            s = getComputedStyle(r),
            { display: o } = s,
            a = {};
          "none" === o && e.setStaticValue("display", t.display || "block"),
            i.forEach((t) => {
              a[t] = A[t](n, s);
            }),
            e.render();
          let l = e.measureViewportBox();
          return (
            i.forEach((i) => {
              let n = e.getValue(i);
              n && n.jump(a[i]), (t[i] = A[i](l, s));
            }),
            t
          );
        },
        C = (t, e, i = {}, n = {}) => {
          (e = { ...e }), (n = { ...n });
          let s = Object.keys(e).filter(v),
            o = [],
            a = !1,
            l = [];
          if (
            (s.forEach((s) => {
              let h;
              let d = t.getValue(s);
              if (!t.hasValue(s)) return;
              let f = i[s],
                m = (0, c.C)(f),
                v = e[s];
              if ((0, u.C)(v)) {
                let t = v.length,
                  e = null === v[0] ? 1 : 0;
                (f = v[e]), (m = (0, c.C)(f));
                for (let i = e; i < t && null !== v[i]; i++)
                  h
                    ? (0, r.k)(
                        (0, c.C)(v[i]) === h,
                        "All keyframes must be of the same type"
                      )
                    : ((h = (0, c.C)(v[i])),
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
                            w.forEach((i) => {
                              let n = t.getValue(i);
                              void 0 !== n &&
                                (e.push([i, n.get()]),
                                n.set(i.startsWith("scale") ? 1 : 0));
                            }),
                            e.length && t.render(),
                            e
                          );
                        })(t)),
                        (a = !0)),
                      l.push(s),
                      (n[s] = void 0 !== n[s] ? n[s] : e[s]),
                      d.jump(v));
              }
            }),
            !l.length)
          )
            return { target: e, transitionEnd: n };
          {
            let i = l.indexOf("height") >= 0 ? window.pageYOffset : null,
              r = T(e, t, l);
            return (
              o.length &&
                o.forEach(([e, i]) => {
                  t.getValue(e).set(i);
                }),
              t.render(),
              d.j && null !== i && window.scrollTo({ top: i }),
              { target: r, transitionEnd: n }
            );
          }
        },
        S = (t, e, i, n) => {
          var r, s;
          let a = (function (t, { ...e }, i) {
            let n = t.current;
            if (!(n instanceof Element)) return { target: e, transitionEnd: i };
            for (let r in (i && (i = { ...i }),
            t.values.forEach((t) => {
              let e = t.get();
              if (!(0, o.tm)(e)) return;
              let i = l(e, n);
              i && t.set(i);
            }),
            e)) {
              let t = e[r];
              if (!(0, o.tm)(t)) continue;
              let s = l(t, n);
              s && ((e[r] = s), i || (i = {}), void 0 === i[r] && (i[r] = t));
            }
            return { target: e, transitionEnd: i };
          })(t, e, n);
          return (
            (e = a.target),
            (n = a.transitionEnd),
            (r = e),
            (s = n),
            g(r) ? C(t, r, i, s) : { target: r, transitionEnd: s }
          );
        };
      var E = i(4597),
        V = i(5503);
      let D = { current: null },
        M = { current: !1 };
      var R = i(7026),
        k = i(4101),
        L = i(3227),
        j = i(5735),
        F = i(6049),
        B = i(3345),
        O = i(3331),
        $ = i(9001),
        W = i(5247),
        I = i(4900),
        U = i(3041);
      let N = Object.keys($.A),
        _ = N.length,
        H = [
          "AnimationStart",
          "AnimationComplete",
          "Update",
          "BeforeLayoutMeasure",
          "LayoutMeasure",
          "LayoutAnimationStart",
          "LayoutAnimationComplete",
        ],
        z = W.V.length;
      class X {
        constructor(
          {
            parent: t,
            props: e,
            presenceContext: i,
            reducedMotionConfig: n,
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
            (this.scheduleRender = () => U.Wi.render(this.render, !1, !0));
          let { latestValues: o, renderState: a } = r;
          (this.latestValues = o),
            (this.baseTarget = { ...o }),
            (this.initialValues = e.initial ? { ...o } : {}),
            (this.renderState = a),
            (this.parent = t),
            (this.props = e),
            (this.presenceContext = i),
            (this.depth = t ? t.depth + 1 : 0),
            (this.reducedMotionConfig = n),
            (this.options = s),
            (this.isControllingVariants = (0, F.G)(e)),
            (this.isVariantNode = (0, F.M)(e)),
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
            I.R.set(t, this),
            this.projection &&
              !this.projection.instance &&
              this.projection.mount(t),
            this.parent &&
              this.isVariantNode &&
              !this.isControllingVariants &&
              (this.removeFromVariantTree = this.parent.addVariantChild(this)),
            this.values.forEach((t, e) => this.bindToMotionValue(e, t)),
            M.current ||
              (function () {
                if (((M.current = !0), d.j)) {
                  if (window.matchMedia) {
                    let t = window.matchMedia("(prefers-reduced-motion)"),
                      e = () => (D.current = t.matches);
                    t.addListener(e), e();
                  } else D.current = !1;
                }
              })(),
            (this.shouldReduceMotion =
              "never" !== this.reducedMotionConfig &&
              ("always" === this.reducedMotionConfig || D.current)),
            this.parent && this.parent.children.add(this),
            this.update(this.props, this.presenceContext);
        }
        unmount() {
          for (let t in (I.R.delete(this.current),
          this.projection && this.projection.unmount(),
          (0, U.Pn)(this.notifyUpdate),
          (0, U.Pn)(this.render),
          this.valueSubscriptions.forEach((t) => t()),
          this.removeFromVariantTree && this.removeFromVariantTree(),
          this.parent && this.parent.children.delete(this),
          this.events))
            this.events[t].clear();
          for (let t in this.features) this.features[t].unmount();
          this.current = null;
        }
        bindToMotionValue(t, e) {
          let i = h.G.has(t),
            n = e.on("change", (e) => {
              (this.latestValues[t] = e),
                this.props.onUpdate && U.Wi.update(this.notifyUpdate, !1, !0),
                i && this.projection && (this.projection.isTransformDirty = !0);
            }),
            r = e.on("renderRequest", this.scheduleRender);
          this.valueSubscriptions.set(t, () => {
            n(), r();
          });
        }
        sortNodePosition(t) {
          return this.current &&
            this.sortInstanceNodePosition &&
            this.type === t.type
            ? this.sortInstanceNodePosition(this.current, t.current)
            : 0;
        }
        loadFeatures({ children: t, ...e }, i, n, r) {
          let s, o;
          for (let t = 0; t < _; t++) {
            let i = N[t],
              {
                isEnabled: n,
                Feature: r,
                ProjectionNode: a,
                MeasureLayout: l,
              } = $.A[i];
            a && (s = a),
              n(e) &&
                (!this.features[i] && r && (this.features[i] = new r(this)),
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
              layout: i,
              drag: n,
              dragConstraints: o,
              layoutScroll: a,
              layoutRoot: l,
            } = e;
            this.projection.setOptions({
              layoutId: t,
              layout: i,
              alwaysMeasureLayout: !!n || (o && (0, V.I)(o)),
              visualElement: this,
              scheduleRender: () => this.scheduleRender(),
              animationType: "string" == typeof i ? i : "both",
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
            : (0, E.dO)();
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
            let i = H[e];
            this.propEventSubscriptions[i] &&
              (this.propEventSubscriptions[i](),
              delete this.propEventSubscriptions[i]);
            let n = t["on" + i];
            n && (this.propEventSubscriptions[i] = this.on(i, n));
          }
          (this.prevMotionValues = (function (t, e, i) {
            let { willChange: n } = e;
            for (let r in e) {
              let s = e[r],
                o = i[r];
              if ((0, j.i)(s)) t.addValue(r, s), (0, L.L)(n) && n.add(r);
              else if ((0, j.i)(o))
                t.addValue(r, (0, k.BX)(s, { owner: t })),
                  (0, L.L)(n) && n.remove(r);
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
            for (let n in i) void 0 === e[n] && t.removeValue(n);
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
            let i = W.V[t],
              n = this.props[i];
            ((0, B.$)(n) || !1 === n) && (e[i] = n);
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
          let i = this.values.get(t);
          return (
            void 0 === i &&
              void 0 !== e &&
              ((i = (0, k.BX)(e, { owner: this })), this.addValue(t, i)),
            i
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
          let { initial: i } = this.props,
            n =
              "string" == typeof i || "object" == typeof i
                ? null === (e = (0, O.o)(this.props, i)) || void 0 === e
                  ? void 0
                  : e[t]
                : void 0;
          if (i && void 0 !== n) return n;
          let r = this.getBaseTargetFromProps(this.props, t);
          return void 0 === r || (0, j.i)(r)
            ? void 0 !== this.initialValues[t] && void 0 === n
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
        removeValueFromRenderState(t, { vars: e, style: i }) {
          delete e[t], delete i[t];
        }
        makeTargetAnimatableFromInstance(
          { transition: t, transitionEnd: e, ...i },
          { transformValues: r },
          s
        ) {
          let o = (0, n.P$)(i, t || {}, this);
          if ((r && (e && (e = r(e)), i && (i = r(i)), o && (o = r(o))), s)) {
            (0, n.GJ)(this, i, o);
            let t = S(this, i, o, e);
            (e = t.transitionEnd), (i = t.target);
          }
          return { transition: t, transitionEnd: e, ...i };
        }
      }
    },
    8733: function (t, e, i) {
      "use strict";
      i.d(e, {
        E: function () {
          return ii;
        },
      });
      var n,
        r = i(2265),
        s = i(5968);
      let o = (0, r.createContext)({});
      var a = i(8243),
        l = i(538);
      let u = (0, r.createContext)({ strict: !1 });
      var h = i(6348),
        c = i(5503),
        d = i(3345),
        f = i(6049);
      function p(t) {
        return Array.isArray(t) ? t.join(" ") : t;
      }
      var m = i(9001),
        v = i(6613),
        g = i(781);
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
      function b(t) {
        if ("string" != typeof t || t.includes("-"));
        else if (P.indexOf(t) > -1 || /[A-Z]/.test(t)) return !0;
        return !1;
      }
      var w = i(1118),
        A = i(5735),
        T = i(458);
      let C = () => ({
        style: {},
        transform: {},
        transformOrigin: {},
        vars: {},
      });
      function S(t, e, i) {
        for (let n in e) (0, A.i)(e[n]) || (0, w.j)(n, i) || (t[n] = e[n]);
      }
      function E(t, e, i) {
        let n = {},
          s = (function (t, e, i) {
            let n = t.style || {},
              s = {};
            return (
              S(s, n, t),
              Object.assign(
                s,
                (function ({ transformTemplate: t }, e, i) {
                  return (0, r.useMemo)(() => {
                    let n = C();
                    return (
                      (0, T.r)(n, e, { enableHardwareAcceleration: !i }, t),
                      Object.assign({}, n.vars, n.style)
                    );
                  }, [e]);
                })(t, e, i)
              ),
              t.transformValues ? t.transformValues(s) : s
            );
          })(t, e, i);
        return (
          t.drag &&
            !1 !== t.dragListener &&
            ((n.draggable = !1),
            (s.userSelect = s.WebkitUserSelect = s.WebkitTouchCallout = "none"),
            (s.touchAction =
              !0 === t.drag ? "none" : `pan-${"x" === t.drag ? "y" : "x"}`)),
          void 0 === t.tabIndex &&
            (t.onTap || t.onTapStart || t.whileTap) &&
            (n.tabIndex = 0),
          (n.style = s),
          n
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
      function D(t) {
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
      let M = (t) => !D(t);
      try {
        (n = require("@emotion/is-prop-valid").default) &&
          (M = (t) => (t.startsWith("on") ? !D(t) : n(t)));
      } catch (t) {}
      var R = i(1524);
      let k = () => ({ ...C(), attrs: {} });
      var L = i(922);
      function j(t, e, i, n) {
        let s = (0, r.useMemo)(() => {
          let i = k();
          return (
            (0, R.i)(
              i,
              e,
              { enableHardwareAcceleration: !1 },
              (0, L.a)(n),
              t.transformTemplate
            ),
            { ...i.attrs, style: { ...i.style } }
          );
        }, [e]);
        if (t.style) {
          let e = {};
          S(e, t.style, t), (s.style = { ...e, ...s.style });
        }
        return s;
      }
      var F = i(8239),
        B = i(5625),
        O = i(7866),
        $ = i(3331),
        W = i(961),
        I = i(1832);
      function U(t) {
        let e = (0, A.i)(t) ? t.get() : t;
        return (0, I.p)(e) ? e.toValue() : e;
      }
      let N = (t) => (e, i) => {
        let n = (0, r.useContext)(o),
          s = (0, r.useContext)(a.O),
          l = () =>
            (function (
              {
                scrapeMotionValuesFromProps: t,
                createRenderState: e,
                onMount: i,
              },
              n,
              r,
              s
            ) {
              let o = {
                latestValues: (function (t, e, i, n) {
                  let r = {},
                    s = n(t, {});
                  for (let t in s) r[t] = U(s[t]);
                  let { initial: o, animate: a } = t,
                    l = (0, f.G)(t),
                    u = (0, f.M)(t);
                  e &&
                    u &&
                    !l &&
                    !1 !== t.inherit &&
                    (void 0 === o && (o = e.initial),
                    void 0 === a && (a = e.animate));
                  let h = !!i && !1 === i.initial;
                  h = h || !1 === o;
                  let c = h ? a : o;
                  if (c && "boolean" != typeof c && !(0, O.H)(c)) {
                    let e = Array.isArray(c) ? c : [c];
                    e.forEach((e) => {
                      let i = (0, $.o)(t, e);
                      if (!i) return;
                      let { transitionEnd: n, transition: s, ...o } = i;
                      for (let t in o) {
                        let e = o[t];
                        if (Array.isArray(e)) {
                          let t = h ? e.length - 1 : 0;
                          e = e[t];
                        }
                        null !== e && (r[t] = e);
                      }
                      for (let t in n) r[t] = n[t];
                    });
                  }
                  return r;
                })(n, r, s, t),
                renderState: e(),
              };
              return i && (o.mount = (t) => i(n, t, o)), o;
            })(t, e, n, s);
        return i ? l() : (0, W.h)(l);
      };
      var _ = i(3041);
      let H = {
        useVisualState: N({
          scrapeMotionValuesFromProps: B.U,
          createRenderState: k,
          onMount: (t, e, { renderState: i, latestValues: n }) => {
            _.Wi.read(() => {
              try {
                i.dimensions =
                  "function" == typeof e.getBBox
                    ? e.getBBox()
                    : e.getBoundingClientRect();
              } catch (t) {
                i.dimensions = { x: 0, y: 0, width: 0, height: 0 };
              }
            }),
              _.Wi.render(() => {
                (0, R.i)(
                  i,
                  n,
                  { enableHardwareAcceleration: !1 },
                  (0, L.a)(e.tagName),
                  t.transformTemplate
                ),
                  (0, F.K)(e, i);
              });
          },
        }),
      };
      var z = i(3495);
      let X = {
        useVisualState: N({
          scrapeMotionValuesFromProps: z.U,
          createRenderState: C,
        }),
      };
      function Y(t, e, i, n = { passive: !0 }) {
        return t.addEventListener(e, i, n), () => t.removeEventListener(e, i);
      }
      let Z = (t) =>
        "mouse" === t.pointerType
          ? "number" != typeof t.button || t.button <= 0
          : !1 !== t.isPrimary;
      function G(t, e = "page") {
        return { point: { x: t[e + "X"], y: t[e + "Y"] } };
      }
      let q = (t) => (e) => Z(e) && t(e, G(e));
      function K(t, e, i, n) {
        return Y(t, e, q(i), n);
      }
      var J = i(4694);
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
      function ti(t) {
        let e = !1;
        if ("y" === t) e = te();
        else if ("x" === t) e = tt();
        else {
          let t = tt(),
            i = te();
          t && i
            ? (e = () => {
                t(), i();
              })
            : (t && t(), i && i());
        }
        return e;
      }
      function tn() {
        let t = ti(!0);
        return !t || (t(), !1);
      }
      class tr {
        constructor(t) {
          (this.isMounted = !1), (this.node = t);
        }
        update() {}
      }
      function ts(t, e) {
        let i = "pointer" + (e ? "enter" : "leave"),
          n = "onHover" + (e ? "Start" : "End");
        return K(
          t.current,
          i,
          (i, r) => {
            if ("touch" === i.pointerType || tn()) return;
            let s = t.getProps();
            t.animationState &&
              s.whileHover &&
              t.animationState.setActive("whileHover", e),
              s[n] && _.Wi.update(() => s[n](i, r));
          },
          { passive: !t.getProps()[n] }
        );
      }
      let to = (t, e) => !!e && (t === e || to(t, e.parentElement));
      var ta = i(6977);
      function tl(t, e) {
        if (!e) return;
        let i = new PointerEvent("pointer" + t);
        e(i, G(i));
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
      var tp = i(363);
      function tm(t, e) {
        if (!Array.isArray(e)) return !1;
        let i = e.length;
        if (i !== t.length) return !1;
        for (let n = 0; n < i; n++) if (e[n] !== t[n]) return !1;
        return !0;
      }
      var tv = i(2593),
        tg = i(5247),
        ty = i(5430);
      function tx(t, e, i = {}) {
        let n = (0, tv.x)(t, e, i.custom),
          { transition: r = t.getDefaultTransition() || {} } = n || {};
        i.transitionOverride && (r = i.transitionOverride);
        let s = n
            ? () => Promise.all((0, ty.w)(t, n, i))
            : () => Promise.resolve(),
          o =
            t.variantChildren && t.variantChildren.size
              ? (n = 0) => {
                  let {
                    delayChildren: s = 0,
                    staggerChildren: o,
                    staggerDirection: a,
                  } = r;
                  return (function (t, e, i = 0, n = 0, r = 1, s) {
                    let o = [],
                      a = (t.variantChildren.size - 1) * n,
                      l = 1 === r ? (t = 0) => t * n : (t = 0) => a - t * n;
                    return (
                      Array.from(t.variantChildren)
                        .sort(tP)
                        .forEach((t, n) => {
                          t.notify("AnimationStart", e),
                            o.push(
                              tx(t, e, { ...s, delay: i + l(n) }).then(() =>
                                t.notify("AnimationComplete", e)
                              )
                            );
                        }),
                      Promise.all(o)
                    );
                  })(t, e, s + n, o, a, i);
                }
              : () => Promise.resolve(),
          { when: a } = r;
        if (!a) return Promise.all([s(), o(i.delay)]);
        {
          let [t, e] = "beforeChildren" === a ? [s, o] : [o, s];
          return t().then(() => e());
        }
      }
      function tP(t, e) {
        return t.sortNodePosition(e);
      }
      let tb = [...tg.e].reverse(),
        tw = tg.e.length;
      function tA(t = !1) {
        return {
          isActive: t,
          protectedKeys: {},
          needsAnimating: {},
          prevResolvedValues: {},
        };
      }
      let tT = 0;
      var tC = i(6567),
        tS = i(1356);
      let tE = (t, e) => Math.abs(t - e);
      class tV {
        constructor(
          t,
          e,
          {
            transformPagePoint: i,
            contextWindow: n,
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
                i =
                  (function (t, e) {
                    let i = tE(t.x, e.x),
                      n = tE(t.y, e.y);
                    return Math.sqrt(i ** 2 + n ** 2);
                  })(t.offset, { x: 0, y: 0 }) >= 3;
              if (!e && !i) return;
              let { point: n } = t,
                { timestamp: r } = _.frameData;
              this.history.push({ ...n, timestamp: r });
              let { onStart: s, onMove: o } = this.handlers;
              e ||
                (s && s(this.lastMoveEvent, t),
                (this.startEvent = this.lastMoveEvent)),
                o && o(this.lastMoveEvent, t);
            }),
            (this.handlePointerMove = (t, e) => {
              (this.lastMoveEvent = t),
                (this.lastMoveEventInfo = tD(e, this.transformPagePoint)),
                _.Wi.update(this.updatePoint, !0);
            }),
            (this.handlePointerUp = (t, e) => {
              this.end();
              let {
                onEnd: i,
                onSessionEnd: n,
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
                  : tD(e, this.transformPagePoint),
                this.history
              );
              this.startEvent && i && i(t, s), n && n(t, s);
            }),
            !Z(t))
          )
            return;
          (this.dragSnapToOrigin = r),
            (this.handlers = e),
            (this.transformPagePoint = i),
            (this.contextWindow = n || window);
          let s = G(t),
            o = tD(s, this.transformPagePoint),
            { point: a } = o,
            { timestamp: l } = _.frameData;
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
            (0, _.Pn)(this.updatePoint);
        }
      }
      function tD(t, e) {
        return e ? { point: e(t.point) } : t;
      }
      function tM(t, e) {
        return { x: t.x - e.x, y: t.y - e.y };
      }
      function tR({ point: t }, e) {
        return {
          point: t,
          delta: tM(t, tk(e)),
          offset: tM(t, e[0]),
          velocity: (function (t, e) {
            if (t.length < 2) return { x: 0, y: 0 };
            let i = t.length - 1,
              n = null,
              r = tk(t);
            for (
              ;
              i >= 0 &&
              ((n = t[i]), !(r.timestamp - n.timestamp > (0, tS.w)(0.1)));

            )
              i--;
            if (!n) return { x: 0, y: 0 };
            let s = (0, tS.X)(r.timestamp - n.timestamp);
            if (0 === s) return { x: 0, y: 0 };
            let o = { x: (r.x - n.x) / s, y: (r.y - n.y) / s };
            return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o;
          })(e, 0),
        };
      }
      function tk(t) {
        return t[t.length - 1];
      }
      var tL = i(2868),
        tj = i(7);
      function tF(t) {
        return t.max - t.min;
      }
      function tB(t, e = 0, i = 0.01) {
        return Math.abs(t - e) <= i;
      }
      function tO(t, e, i, n = 0.5) {
        (t.origin = n),
          (t.originPoint = (0, tj.C)(e.min, e.max, t.origin)),
          (t.scale = tF(i) / tF(e)),
          (tB(t.scale, 1, 1e-4) || isNaN(t.scale)) && (t.scale = 1),
          (t.translate = (0, tj.C)(i.min, i.max, t.origin) - t.originPoint),
          (tB(t.translate) || isNaN(t.translate)) && (t.translate = 0);
      }
      function t$(t, e, i, n) {
        tO(t.x, e.x, i.x, n ? n.originX : void 0),
          tO(t.y, e.y, i.y, n ? n.originY : void 0);
      }
      function tW(t, e, i) {
        (t.min = i.min + e.min), (t.max = t.min + tF(e));
      }
      function tI(t, e, i) {
        (t.min = e.min - i.min), (t.max = t.min + tF(e));
      }
      function tU(t, e, i) {
        tI(t.x, e.x, i.x), tI(t.y, e.y, i.y);
      }
      var tN = i(3021);
      function t_(t, e, i) {
        return {
          min: void 0 !== e ? t.min + e : void 0,
          max: void 0 !== i ? t.max + i - (t.max - t.min) : void 0,
        };
      }
      function tH(t, e) {
        let i = e.min - t.min,
          n = e.max - t.max;
        return (
          e.max - e.min < t.max - t.min && ([i, n] = [n, i]), { min: i, max: n }
        );
      }
      function tz(t, e, i) {
        return { min: tX(t, e), max: tX(t, i) };
      }
      function tX(t, e) {
        return "number" == typeof t ? t : t[e] || 0;
      }
      var tY = i(4597);
      function tZ(t) {
        return [t("x"), t("y")];
      }
      var tG = i(3937),
        tq = i(4902),
        tK = i(3681),
        tJ = i(9883);
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
          let { presenceContext: i } = this.visualElement;
          if (i && !1 === i.isPresent) return;
          let { dragSnapToOrigin: n } = this.getProps();
          this.panSession = new tV(
            t,
            {
              onSessionStart: (t) => {
                let { dragSnapToOrigin: i } = this.getProps();
                i ? this.pauseAnimation() : this.stopAnimation(),
                  e && this.snapToCursor(G(t, "page").point);
              },
              onStart: (t, e) => {
                let {
                  drag: i,
                  dragPropagation: n,
                  onDragStart: r,
                } = this.getProps();
                if (
                  i &&
                  !n &&
                  (this.openGlobalLock && this.openGlobalLock(),
                  (this.openGlobalLock = ti(i)),
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
                      let { projection: i } = this.visualElement;
                      if (i && i.layout) {
                        let n = i.layout.layoutBox[t];
                        if (n) {
                          let t = tF(n);
                          e = t * (parseFloat(e) / 100);
                        }
                      }
                    }
                    this.originPoint[t] = e;
                  }),
                  r && _.Wi.update(() => r(t, e), !1, !0);
                let { animationState: s } = this.visualElement;
                s && s.setActive("whileDrag", !0);
              },
              onMove: (t, e) => {
                let {
                  dragPropagation: i,
                  dragDirectionLock: n,
                  onDirectionLock: r,
                  onDrag: s,
                } = this.getProps();
                if (!i && !this.openGlobalLock) return;
                let { offset: o } = e;
                if (n && null === this.currentDirection) {
                  (this.currentDirection = (function (t, e = 10) {
                    let i = null;
                    return (
                      Math.abs(t.y) > e
                        ? (i = "y")
                        : Math.abs(t.x) > e && (i = "x"),
                      i
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
              dragSnapToOrigin: n,
              contextWindow: tQ(this.visualElement),
            }
          );
        }
        stop(t, e) {
          let i = this.isDragging;
          if ((this.cancel(), !i)) return;
          let { velocity: n } = e;
          this.startAnimation(n);
          let { onDragEnd: r } = this.getProps();
          r && _.Wi.update(() => r(t, e));
        }
        cancel() {
          this.isDragging = !1;
          let { projection: t, animationState: e } = this.visualElement;
          t && (t.isAnimationBlocked = !1),
            this.panSession && this.panSession.end(),
            (this.panSession = void 0);
          let { dragPropagation: i } = this.getProps();
          !i &&
            this.openGlobalLock &&
            (this.openGlobalLock(), (this.openGlobalLock = null)),
            e && e.setActive("whileDrag", !1);
        }
        updateAxis(t, e, i) {
          let { drag: n } = this.getProps();
          if (!i || !t2(t, n, this.currentDirection)) return;
          let r = this.getAxisMotionValue(t),
            s = this.originPoint[t] + i[t];
          this.constraints &&
            this.constraints[t] &&
            (s = (function (t, { min: e, max: i }, n) {
              return (
                void 0 !== e && t < e
                  ? (t = n ? (0, tj.C)(e, t, n.min) : Math.max(t, e))
                  : void 0 !== i &&
                    t > i &&
                    (t = n ? (0, tj.C)(i, t, n.max) : Math.min(t, i)),
                t
              );
            })(s, this.constraints[t], this.elastic[t])),
            r.set(s);
        }
        resolveConstraints() {
          var t;
          let { dragConstraints: e, dragElastic: i } = this.getProps(),
            n =
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
            : e && n
            ? (this.constraints = (function (
                t,
                { top: e, left: i, bottom: n, right: r }
              ) {
                return { x: t_(t.x, i, r), y: t_(t.y, e, n) };
              })(n.layoutBox, e))
            : (this.constraints = !1),
            (this.elastic = (function (t = 0.35) {
              return (
                !1 === t ? (t = 0) : !0 === t && (t = 0.35),
                { x: tz(t, "left", "right"), y: tz(t, "top", "bottom") }
              );
            })(i)),
            r !== this.constraints &&
              n &&
              this.constraints &&
              !this.hasMutatedConstraints &&
              tZ((t) => {
                this.getAxisMotionValue(t) &&
                  (this.constraints[t] = (function (t, e) {
                    let i = {};
                    return (
                      void 0 !== e.min && (i.min = e.min - t.min),
                      void 0 !== e.max && (i.max = e.max - t.min),
                      i
                    );
                  })(n.layoutBox[t], this.constraints[t]));
              });
        }
        resolveRefConstraints() {
          var t;
          let { dragConstraints: e, onMeasureDragConstraints: i } =
            this.getProps();
          if (!e || !(0, c.I)(e)) return !1;
          let n = e.current;
          (0, tC.k)(
            null !== n,
            "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop."
          );
          let { projection: r } = this.visualElement;
          if (!r || !r.layout) return !1;
          let s = (0, tG.z)(
              n,
              r.root,
              this.visualElement.getTransformPagePoint()
            ),
            o = { x: tH((t = r.layout.layoutBox).x, s.x), y: tH(t.y, s.y) };
          if (i) {
            let t = i((0, tq.z2)(o));
            (this.hasMutatedConstraints = !!t), t && (o = (0, tq.i8)(t));
          }
          return o;
        }
        startAnimation(t) {
          let {
              drag: e,
              dragMomentum: i,
              dragElastic: n,
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
                velocity: i ? t[o] : 0,
                bounceStiffness: n ? 200 : 1e6,
                bounceDamping: n ? 40 : 1e7,
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
          let i = this.getAxisMotionValue(t);
          return i.start((0, tJ.v)(t, i, 0, e));
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
            i = this.visualElement.getProps(),
            n = i[e];
          return (
            n ||
            this.visualElement.getValue(
              t,
              (i.initial ? i.initial[t] : void 0) || 0
            )
          );
        }
        snapToCursor(t) {
          tZ((e) => {
            let { drag: i } = this.getProps();
            if (!t2(e, i, this.currentDirection)) return;
            let { projection: n } = this.visualElement,
              r = this.getAxisMotionValue(e);
            if (n && n.layout) {
              let { min: i, max: s } = n.layout.layoutBox[e];
              r.set(t[e] - (0, tj.C)(i, s, 0.5));
            }
          });
        }
        scalePositionWithinConstraints() {
          if (!this.visualElement.current) return;
          let { drag: t, dragConstraints: e } = this.getProps(),
            { projection: i } = this.visualElement;
          if (!(0, c.I)(e) || !i || !this.constraints) return;
          this.stopAnimation();
          let n = { x: 0, y: 0 };
          tZ((t) => {
            let e = this.getAxisMotionValue(t);
            if (e) {
              let i = e.get();
              n[t] = (function (t, e) {
                let i = 0.5,
                  n = tF(t),
                  r = tF(e);
                return (
                  r > n
                    ? (i = (0, tL.Y)(e.min, e.max - n, t.min))
                    : n > r && (i = (0, tL.Y)(t.min, t.max - r, e.min)),
                  (0, tN.u)(0, 1, i)
                );
              })({ min: i, max: i }, this.constraints[t]);
            }
          });
          let { transformTemplate: r } = this.visualElement.getProps();
          (this.visualElement.current.style.transform = r ? r({}, "") : "none"),
            i.root && i.root.updateScroll(),
            i.updateLayout(),
            this.resolveConstraints(),
            tZ((e) => {
              if (!t2(e, t, null)) return;
              let i = this.getAxisMotionValue(e),
                { min: r, max: s } = this.constraints[e];
              i.set((0, tj.C)(r, s, n[e]));
            });
        }
        addListeners() {
          if (!this.visualElement.current) return;
          t0.set(this.visualElement, this);
          let t = this.visualElement.current,
            e = K(t, "pointerdown", (t) => {
              let { drag: e, dragListener: i = !0 } = this.getProps();
              e && i && this.start(t);
            }),
            i = () => {
              let { dragConstraints: t } = this.getProps();
              (0, c.I)(t) && (this.constraints = this.resolveRefConstraints());
            },
            { projection: n } = this.visualElement,
            r = n.addEventListener("measure", i);
          n && !n.layout && (n.root && n.root.updateScroll(), n.updateLayout()),
            i();
          let s = Y(window, "resize", () =>
              this.scalePositionWithinConstraints()
            ),
            o = n.addEventListener(
              "didUpdate",
              ({ delta: t, hasLayoutChanged: e }) => {
                this.isDragging &&
                  e &&
                  (tZ((e) => {
                    let i = this.getAxisMotionValue(e);
                    i &&
                      ((this.originPoint[e] += t[e].translate),
                      i.set(i.get() + t[e].translate));
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
              dragDirectionLock: i = !1,
              dragPropagation: n = !1,
              dragConstraints: r = !1,
              dragElastic: s = 0.35,
              dragMomentum: o = !0,
            } = t;
          return {
            ...t,
            drag: e,
            dragDirectionLock: i,
            dragPropagation: n,
            dragConstraints: r,
            dragElastic: s,
            dragMomentum: o,
          };
        }
      }
      function t2(t, e, i) {
        return (!0 === e || e === t) && (null === i || i === t);
      }
      let t3 = (t) => (e, i) => {
          t && _.Wi.update(() => t(e, i));
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
          let i = t4(t, e.target.x),
            n = t4(t, e.target.y);
          return `${i}% ${n}%`;
        },
      };
      var t8 = i(9155),
        t6 = i(611);
      class t7 extends r.Component {
        componentDidMount() {
          let {
              visualElement: t,
              layoutGroup: e,
              switchLayoutGroup: i,
              layoutId: n,
            } = this.props,
            { projection: r } = t;
          (0, t6.B)(ee),
            r &&
              (e.group && e.group.add(r),
              i && i.register && n && i.register(r),
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
              visualElement: i,
              drag: n,
              isPresent: r,
            } = this.props,
            s = i.projection;
          return (
            s &&
              ((s.isPresent = r),
              n || t.layoutDependency !== e || void 0 === e
                ? s.willUpdate()
                : this.safeToRemove(),
              t.isPresent === r ||
                (r
                  ? s.promote()
                  : s.relegate() ||
                    _.Wi.postRender(() => {
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
              switchLayoutGroup: i,
            } = this.props,
            { projection: n } = t;
          n &&
            (n.scheduleCheckAfterUnmount(),
            e && e.group && e.group.remove(n),
            i && i.deregister && i.deregister(n));
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
        let [e, i] = (function () {
            let t = (0, r.useContext)(a.O);
            if (null === t) return [!0, null];
            let { isPresent: e, onExitComplete: i, register: n } = t,
              s = (0, r.useId)();
            return (
              (0, r.useEffect)(() => n(s), []),
              !e && i ? [!1, () => i && i(s)] : [!0]
            );
          })(),
          n = (0, r.useContext)(g.p);
        return r.createElement(t7, {
          ...t,
          layoutGroup: n,
          switchLayoutGroup: (0, r.useContext)(y),
          isPresent: e,
          safeToRemove: i,
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
          correct: (t, { treeScale: e, projectionDelta: i }) => {
            let n = t8.P.parse(t);
            if (n.length > 5) return t;
            let r = t8.P.createTransformer(t),
              s = "number" != typeof n[0] ? 1 : 0,
              o = i.x.scale * e.x,
              a = i.y.scale * e.y;
            (n[0 + s] /= o), (n[1 + s] /= a);
            let l = (0, tj.C)(o, a, 0.5);
            return (
              "number" == typeof n[2 + s] && (n[2 + s] /= l),
              "number" == typeof n[3 + s] && (n[3 + s] /= l),
              r(n)
            );
          },
        },
      };
      var ei = i(7026),
        en = i(927);
      let er = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
        es = er.length,
        eo = (t) => ("string" == typeof t ? parseFloat(t) : t),
        ea = (t) => "number" == typeof t || tK.px.test(t);
      function el(t, e) {
        return void 0 !== t[e] ? t[e] : t.borderRadius;
      }
      let eu = ec(0, 0.5, en.Bn),
        eh = ec(0.5, 0.95, ta.Z);
      function ec(t, e, i) {
        return (n) => (n < t ? 0 : n > e ? 1 : i((0, tL.Y)(t, e, n)));
      }
      function ed(t, e) {
        (t.min = e.min), (t.max = e.max);
      }
      function ef(t, e) {
        ed(t.x, e.x), ed(t.y, e.y);
      }
      var ep = i(1841);
      function em(t, e, i, n, r) {
        return (
          (t -= e),
          (t = (0, ep.q2)(t, 1 / i, n)),
          void 0 !== r && (t = (0, ep.q2)(t, 1 / r, n)),
          t
        );
      }
      function ev(t, e, [i, n, r], s, o) {
        !(function (t, e = 0, i = 1, n = 0.5, r, s = t, o = t) {
          if (tK.aQ.test(e)) {
            e = parseFloat(e);
            let t = (0, tj.C)(o.min, o.max, e / 100);
            e = t - o.min;
          }
          if ("number" != typeof e) return;
          let a = (0, tj.C)(s.min, s.max, n);
          t === s && (a -= e),
            (t.min = em(t.min, e, i, a, r)),
            (t.max = em(t.max, e, i, a, r));
        })(t, e[i], e[n], e[r], e.scale, s, o);
      }
      let eg = ["x", "scaleX", "originX"],
        ey = ["y", "scaleY", "originY"];
      function ex(t, e, i, n) {
        ev(t.x, e, eg, i ? i.x : void 0, n ? n.x : void 0),
          ev(t.y, e, ey, i ? i.y : void 0, n ? n.y : void 0);
      }
      var eP = i(7924);
      function eb(t) {
        return 0 === t.translate && 1 === t.scale;
      }
      function ew(t) {
        return eb(t.x) && eb(t.y);
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
        return tF(t.x) / tF(t.y);
      }
      var eC = i(7081);
      class eS {
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
          let i = this.members.findIndex((e) => t === e);
          if (0 === i) return !1;
          for (let t = i; t >= 0; t--) {
            let i = this.members[t];
            if (!1 !== i.isPresent) {
              e = i;
              break;
            }
          }
          return !!e && (this.promote(e), !0);
        }
        promote(t, e) {
          let i = this.lead;
          if (t !== i && ((this.prevLead = i), (this.lead = t), t.show(), i)) {
            i.instance && i.scheduleRender(),
              t.scheduleRender(),
              (t.resumeFrom = i),
              e && (t.resumeFrom.preserveOpacity = !0),
              i.snapshot &&
                ((t.snapshot = i.snapshot),
                (t.snapshot.latestValues =
                  i.animationValues || i.latestValues)),
              t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
            let { crossfade: n } = t.options;
            !1 === n && i.hide();
          }
        }
        exitAnimationComplete() {
          this.members.forEach((t) => {
            let { options: e, resumingFrom: i } = t;
            e.onExitComplete && e.onExitComplete(),
              i && i.options.onExitComplete && i.options.onExitComplete();
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
      function eE(t, e, i) {
        let n = "",
          r = t.x.translate / e.x,
          s = t.y.translate / e.y;
        if (
          ((r || s) && (n = `translate3d(${r}px, ${s}px, 0) `),
          (1 !== e.x || 1 !== e.y) && (n += `scale(${1 / e.x}, ${1 / e.y}) `),
          i)
        ) {
          let { rotate: t, rotateX: e, rotateY: r } = i;
          t && (n += `rotate(${t}deg) `),
            e && (n += `rotateX(${e}deg) `),
            r && (n += `rotateY(${r}deg) `);
        }
        let o = t.x.scale * e.x,
          a = t.y.scale * e.y;
        return (1 !== o || 1 !== a) && (n += `scale(${o}, ${a})`), n || "none";
      }
      var eV = i(121);
      let eD = (t, e) => t.depth - e.depth;
      class eM {
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
          this.isDirty && this.children.sort(eD),
            (this.isDirty = !1),
            this.children.forEach(t);
        }
      }
      var eR = i(4457),
        ek = i(4854);
      let eL = ["", "X", "Y", "Z"],
        ej = { visibility: "hidden" },
        eF = 0,
        eB = {
          type: "projectionFrame",
          totalNodes: 0,
          resolvedTargetDeltas: 0,
          recalculatedProjection: 0,
        };
      function eO({
        attachResizeListener: t,
        defaultParent: e,
        measureScroll: i,
        checkIsScrollRoot: n,
        resetTransform: r,
      }) {
        return class {
          constructor(t = {}, i = null == e ? void 0 : e()) {
            (this.id = eF++),
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
                  (eB.totalNodes =
                    eB.resolvedTargetDeltas =
                    eB.recalculatedProjection =
                      0),
                  this.nodes.forEach(eI),
                  this.nodes.forEach(eY),
                  this.nodes.forEach(eZ),
                  this.nodes.forEach(eU),
                  window.MotionDebug && window.MotionDebug.record(eB);
              }),
              (this.hasProjected = !1),
              (this.isVisible = !0),
              (this.animationProgress = 0),
              (this.sharedNodes = new Map()),
              (this.latestValues = t),
              (this.root = i ? i.root || i : this),
              (this.path = i ? [...i.path, i] : []),
              (this.parent = i),
              (this.depth = i ? i.depth + 1 : 0);
            for (let t = 0; t < this.path.length; t++)
              this.path[t].shouldResetTransform = !0;
            this.root === this && (this.nodes = new eM());
          }
          addEventListener(t, e) {
            return (
              this.eventHandlers.has(t) ||
                this.eventHandlers.set(t, new ei.L()),
              this.eventHandlers.get(t).add(e)
            );
          }
          notifyListeners(t, ...e) {
            let i = this.eventHandlers.get(t);
            i && i.notify(...e);
          }
          hasListeners(t) {
            return this.eventHandlers.has(t);
          }
          mount(e, i = this.root.hasTreeAnimated) {
            if (this.instance) return;
            (this.isSVG = (0, eR.v)(e)), (this.instance = e);
            let { layoutId: n, layout: r, visualElement: s } = this.options;
            if (
              (s && !s.current && s.mount(e),
              this.root.nodes.add(this),
              this.parent && this.parent.children.add(this),
              i && (r || n) && (this.isLayoutDirty = !0),
              t)
            ) {
              let i;
              let n = () => (this.root.updateBlockedByResize = !1);
              t(e, () => {
                (this.root.updateBlockedByResize = !0),
                  i && i(),
                  (i = (function (t, e) {
                    let i = performance.now(),
                      n = ({ timestamp: r }) => {
                        let s = r - i;
                        s >= e && ((0, _.Pn)(n), t(s - e));
                      };
                    return _.Wi.read(n, !0), () => (0, _.Pn)(n);
                  })(n, 250)),
                  t5.hasAnimatedSinceResize &&
                    ((t5.hasAnimatedSinceResize = !1), this.nodes.forEach(eX));
              });
            }
            n && this.root.registerSharedNode(n, this),
              !1 !== this.options.animate &&
                s &&
                (n || r) &&
                this.addEventListener(
                  "didUpdate",
                  ({
                    delta: t,
                    hasLayoutChanged: e,
                    hasRelativeTargetChanged: i,
                    layout: n,
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
                      l = !this.targetLayout || !eA(this.targetLayout, n) || i,
                      u = !e && i;
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
                    this.targetLayout = n;
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
              (0, _.Pn)(this.updateProjection);
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
            let { layoutId: e, layout: i } = this.options;
            if (void 0 === e && !i) return;
            let n = this.getTransformTemplate();
            (this.prevTransformTemplateValue = n
              ? n(this.latestValues, "")
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
                this.nodes.forEach(e_);
              return;
            }
            this.isUpdating || this.nodes.forEach(eH),
              (this.isUpdating = !1),
              this.nodes.forEach(ez),
              this.nodes.forEach(e$),
              this.nodes.forEach(eW),
              this.clearAllSnapshots();
            let e = performance.now();
            (_.frameData.delta = (0, tN.u)(
              0,
              1e3 / 60,
              e - _.frameData.timestamp
            )),
              (_.frameData.timestamp = e),
              (_.frameData.isProcessing = !0),
              _.S6.update.process(_.frameData),
              _.S6.preRender.process(_.frameData),
              _.S6.render.process(_.frameData),
              (_.frameData.isProcessing = !1);
          }
          didUpdate() {
            this.updateScheduled ||
              ((this.updateScheduled = !0),
              queueMicrotask(() => this.update()));
          }
          clearAllSnapshots() {
            this.nodes.forEach(eN), this.sharedNodes.forEach(eq);
          }
          scheduleUpdateProjection() {
            this.projectionUpdateScheduled ||
              ((this.projectionUpdateScheduled = !0),
              _.Wi.preRender(this.updateProjection, !1, !0));
          }
          scheduleCheckAfterUnmount() {
            _.Wi.postRender(() => {
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
                  isRoot: n(this.instance),
                  offset: i(this.instance),
                });
          }
          resetTransform() {
            if (!r) return;
            let t = this.isLayoutDirty || this.shouldResetTransform,
              e = this.projectionDelta && !ew(this.projectionDelta),
              i = this.getTransformTemplate(),
              n = i ? i(this.latestValues, "") : void 0,
              s = n !== this.prevTransformTemplateValue;
            t &&
              (e || (0, eV.ud)(this.latestValues) || s) &&
              (r(this.instance, n),
              (this.shouldResetTransform = !1),
              this.scheduleRender());
          }
          measure(t = !0) {
            var e;
            let i = this.measurePageBox(),
              n = this.removeElementScroll(i);
            return (
              t && (n = this.removeTransform(n)),
              e3((e = n).x),
              e3(e.y),
              {
                animationId: this.root.animationId,
                measuredBox: i,
                layoutBox: n,
                latestValues: {},
                source: this.id,
              }
            );
          }
          measurePageBox() {
            let { visualElement: t } = this.options;
            if (!t) return (0, tY.dO)();
            let e = t.measureViewportBox(),
              { scroll: i } = this.root;
            return (
              i && ((0, ep.am)(e.x, i.offset.x), (0, ep.am)(e.y, i.offset.y)), e
            );
          }
          removeElementScroll(t) {
            let e = (0, tY.dO)();
            ef(e, t);
            for (let i = 0; i < this.path.length; i++) {
              let n = this.path[i],
                { scroll: r, options: s } = n;
              if (n !== this.root && r && s.layoutScroll) {
                if (r.isRoot) {
                  ef(e, t);
                  let { scroll: i } = this.root;
                  i &&
                    ((0, ep.am)(e.x, -i.offset.x),
                    (0, ep.am)(e.y, -i.offset.y));
                }
                (0, ep.am)(e.x, r.offset.x), (0, ep.am)(e.y, r.offset.y);
              }
            }
            return e;
          }
          applyTransform(t, e = !1) {
            let i = (0, tY.dO)();
            ef(i, t);
            for (let t = 0; t < this.path.length; t++) {
              let n = this.path[t];
              !e &&
                n.options.layoutScroll &&
                n.scroll &&
                n !== n.root &&
                (0, ep.D2)(i, { x: -n.scroll.offset.x, y: -n.scroll.offset.y }),
                (0, eV.ud)(n.latestValues) && (0, ep.D2)(i, n.latestValues);
            }
            return (
              (0, eV.ud)(this.latestValues) && (0, ep.D2)(i, this.latestValues),
              i
            );
          }
          removeTransform(t) {
            let e = (0, tY.dO)();
            ef(e, t);
            for (let t = 0; t < this.path.length; t++) {
              let i = this.path[t];
              if (!i.instance || !(0, eV.ud)(i.latestValues)) continue;
              (0, eV.Lj)(i.latestValues) && i.updateSnapshot();
              let n = (0, tY.dO)(),
                r = i.measurePageBox();
              ef(n, r),
                ex(
                  e,
                  i.latestValues,
                  i.snapshot ? i.snapshot.layoutBox : void 0,
                  n
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
                _.frameData.timestamp &&
              this.relativeParent.resolveTargetDelta(!0);
          }
          resolveTargetDelta(t = !1) {
            var e, i, n, r;
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
                ((this.resolvedRelativeTargetAt = _.frameData.timestamp),
                !this.targetDelta && !this.relativeTarget)
              ) {
                let t = this.getClosestProjectingParent();
                t && t.layout && 1 !== this.animationProgress
                  ? ((this.relativeParent = t),
                    this.forceRelativeParentToResolveTarget(),
                    (this.relativeTarget = (0, tY.dO)()),
                    (this.relativeTargetOrigin = (0, tY.dO)()),
                    tU(
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
                      (i = this.target),
                      (n = this.relativeTarget),
                      (r = this.relativeParent.target),
                      tW(i.x, n.x, r.x),
                      tW(i.y, n.y, r.y))
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
                      tU(this.relativeTargetOrigin, this.target, t.target),
                      ef(this.relativeTarget, this.relativeTargetOrigin))
                    : (this.relativeParent = this.relativeTarget = void 0);
                }
                eB.resolvedTargetDeltas++;
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
              i = !!this.resumingFrom || this !== e,
              n = !0;
            if (
              ((this.isProjectionDirty ||
                (null === (t = this.parent) || void 0 === t
                  ? void 0
                  : t.isProjectionDirty)) &&
                (n = !1),
              i &&
                (this.isSharedProjectionDirty || this.isTransformDirty) &&
                (n = !1),
              this.resolvedRelativeTargetAt === _.frameData.timestamp &&
                (n = !1),
              n)
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
            (0, ep.YY)(this.layoutCorrected, this.treeScale, this.path, i),
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
            t$(
              this.projectionDelta,
              this.layoutCorrected,
              l,
              this.latestValues
            ),
              (this.projectionTransform = eE(
                this.projectionDelta,
                this.treeScale
              )),
              (this.projectionTransform !== u ||
                this.treeScale.x !== o ||
                this.treeScale.y !== a) &&
                ((this.hasProjected = !0),
                this.scheduleRender(),
                this.notifyListeners("projectionUpdate", l)),
              eB.recalculatedProjection++;
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
            let i;
            let n = this.snapshot,
              r = n ? n.latestValues : {},
              s = { ...this.latestValues },
              o = (0, tY.wc)();
            (this.relativeParent && this.relativeParent.options.layoutRoot) ||
              (this.relativeTarget = this.relativeTargetOrigin = void 0),
              (this.attemptToResolveRelativeTarget = !e);
            let a = (0, tY.dO)(),
              l = n ? n.source : void 0,
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
                let n = e / 1e3;
                if (
                  (eK(o.x, t.x, n),
                  eK(o.y, t.y, n),
                  this.setTargetDelta(o),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.layout &&
                    this.relativeParent &&
                    this.relativeParent.layout)
                ) {
                  var l, u, c, p;
                  tU(
                    a,
                    this.layout.layoutBox,
                    this.relativeParent.layout.layoutBox
                  ),
                    (c = this.relativeTarget),
                    (p = this.relativeTargetOrigin),
                    eJ(c.x, p.x, a.x, n),
                    eJ(c.y, p.y, a.y, n),
                    i &&
                      ((l = this.relativeTarget),
                      (u = i),
                      l.x.min === u.x.min &&
                        l.x.max === u.x.max &&
                        l.y.min === u.y.min &&
                        l.y.max === u.y.max) &&
                      (this.isProjectionDirty = !1),
                    i || (i = (0, tY.dO)()),
                    ef(i, this.relativeTarget);
                }
                h &&
                  ((this.animationValues = s),
                  (function (t, e, i, n, r, s) {
                    r
                      ? ((t.opacity = (0, tj.C)(
                          0,
                          void 0 !== i.opacity ? i.opacity : 1,
                          eu(n)
                        )),
                        (t.opacityExit = (0, tj.C)(
                          void 0 !== e.opacity ? e.opacity : 1,
                          0,
                          eh(n)
                        )))
                      : s &&
                        (t.opacity = (0, tj.C)(
                          void 0 !== e.opacity ? e.opacity : 1,
                          void 0 !== i.opacity ? i.opacity : 1,
                          n
                        ));
                    for (let r = 0; r < es; r++) {
                      let s = `border${er[r]}Radius`,
                        o = el(e, s),
                        a = el(i, s);
                      if (void 0 === o && void 0 === a) continue;
                      o || (o = 0), a || (a = 0);
                      let l = 0 === o || 0 === a || ea(o) === ea(a);
                      l
                        ? ((t[s] = Math.max((0, tj.C)(eo(o), eo(a), n), 0)),
                          (tK.aQ.test(a) || tK.aQ.test(o)) && (t[s] += "%"))
                        : (t[s] = a);
                    }
                    (e.rotate || i.rotate) &&
                      (t.rotate = (0, tj.C)(e.rotate || 0, i.rotate || 0, n));
                  })(s, r, this.latestValues, n, f, d)),
                  this.root.scheduleUpdateProjection(),
                  this.scheduleRender(),
                  (this.animationProgress = n);
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
                ((0, _.Pn)(this.pendingAnimation),
                (this.pendingAnimation = void 0)),
              (this.pendingAnimation = _.Wi.update(() => {
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
                target: i,
                layout: n,
                latestValues: r,
              } = t;
            if (e && i && n) {
              if (
                this !== t &&
                this.layout &&
                n &&
                e5(
                  this.options.animationType,
                  this.layout.layoutBox,
                  n.layoutBox
                )
              ) {
                i = this.target || (0, tY.dO)();
                let e = tF(this.layout.layoutBox.x);
                (i.x.min = t.target.x.min), (i.x.max = i.x.min + e);
                let n = tF(this.layout.layoutBox.y);
                (i.y.min = t.target.y.min), (i.y.max = i.y.min + n);
              }
              ef(e, i),
                (0, ep.D2)(e, r),
                t$(
                  this.projectionDeltaWithTransform,
                  this.layoutCorrected,
                  e,
                  r
                );
            }
          }
          registerSharedNode(t, e) {
            this.sharedNodes.has(t) || this.sharedNodes.set(t, new eS());
            let i = this.sharedNodes.get(t);
            i.add(e);
            let n = e.options.initialPromotionConfig;
            e.promote({
              transition: n ? n.transition : void 0,
              preserveFollowOpacity:
                n && n.shouldPreserveFollowOpacity
                  ? n.shouldPreserveFollowOpacity(e)
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
            preserveFollowOpacity: i,
          } = {}) {
            let n = this.getStack();
            n && n.promote(this, i),
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
              { latestValues: i } = t;
            if (
              ((i.rotate || i.rotateX || i.rotateY || i.rotateZ) && (e = !0),
              !e)
            )
              return;
            let n = {};
            for (let e = 0; e < eL.length; e++) {
              let r = "rotate" + eL[e];
              i[r] && ((n[r] = i[r]), t.setStaticValue(r, 0));
            }
            for (let e in (t.render(), n)) t.setStaticValue(e, n[e]);
            t.scheduleRender();
          }
          getProjectionStyles(t) {
            var e, i;
            if (!this.instance || this.isSVG) return;
            if (!this.isVisible) return ej;
            let n = { visibility: "" },
              r = this.getTransformTemplate();
            if (this.needsReset)
              return (
                (this.needsReset = !1),
                (n.opacity = ""),
                (n.pointerEvents =
                  U(null == t ? void 0 : t.pointerEvents) || ""),
                (n.transform = r ? r(this.latestValues, "") : "none"),
                n
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
                    U(null == t ? void 0 : t.pointerEvents) || "")),
                this.hasProjected &&
                  !(0, eV.ud)(this.latestValues) &&
                  ((e.transform = r ? r({}, "") : "none"),
                  (this.hasProjected = !1)),
                e
              );
            }
            let o = s.animationValues || s.latestValues;
            this.applyTransformsToTarget(),
              (n.transform = eE(
                this.projectionDeltaWithTransform,
                this.treeScale,
                o
              )),
              r && (n.transform = r(o, n.transform));
            let { x: a, y: l } = this.projectionDelta;
            for (let t in ((n.transformOrigin = `${100 * a.origin}% ${
              100 * l.origin
            }% 0`),
            s.animationValues
              ? (n.opacity =
                  s === this
                    ? null !==
                        (i =
                          null !== (e = o.opacity) && void 0 !== e
                            ? e
                            : this.latestValues.opacity) && void 0 !== i
                      ? i
                      : 1
                    : this.preserveOpacity
                    ? this.latestValues.opacity
                    : o.opacityExit)
              : (n.opacity =
                  s === this
                    ? void 0 !== o.opacity
                      ? o.opacity
                      : ""
                    : void 0 !== o.opacityExit
                    ? o.opacityExit
                    : 0),
            t6.P)) {
              if (void 0 === o[t]) continue;
              let { correct: e, applyTo: i } = t6.P[t],
                r = "none" === n.transform ? o[t] : e(o[t], s);
              if (i) {
                let t = i.length;
                for (let e = 0; e < t; e++) n[i[e]] = r;
              } else n[t] = r;
            }
            return (
              this.options.layoutId &&
                (n.pointerEvents =
                  s === this
                    ? U(null == t ? void 0 : t.pointerEvents) || ""
                    : "none"),
              n
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
              this.root.nodes.forEach(e_),
              this.root.sharedNodes.clear();
          }
        };
      }
      function e$(t) {
        t.updateLayout();
      }
      function eW(t) {
        var e;
        let i =
          (null === (e = t.resumeFrom) || void 0 === e ? void 0 : e.snapshot) ||
          t.snapshot;
        if (t.isLead() && t.layout && i && t.hasListeners("didUpdate")) {
          let { layoutBox: e, measuredBox: n } = t.layout,
            { animationType: r } = t.options,
            s = i.source !== t.layout.source;
          "size" === r
            ? tZ((t) => {
                let n = s ? i.measuredBox[t] : i.layoutBox[t],
                  r = tF(n);
                (n.min = e[t].min), (n.max = n.min + r);
              })
            : e5(r, i.layoutBox, e) &&
              tZ((n) => {
                let r = s ? i.measuredBox[n] : i.layoutBox[n],
                  o = tF(e[n]);
                (r.max = r.min + o),
                  t.relativeTarget &&
                    !t.currentAnimation &&
                    ((t.isProjectionDirty = !0),
                    (t.relativeTarget[n].max = t.relativeTarget[n].min + o));
              });
          let o = (0, tY.wc)();
          t$(o, e, i.layoutBox);
          let a = (0, tY.wc)();
          s
            ? t$(a, t.applyTransform(n, !0), i.measuredBox)
            : t$(a, e, i.layoutBox);
          let l = !ew(o),
            u = !1;
          if (!t.resumeFrom) {
            let n = t.getClosestProjectingParent();
            if (n && !n.resumeFrom) {
              let { snapshot: r, layout: s } = n;
              if (r && s) {
                let o = (0, tY.dO)();
                tU(o, i.layoutBox, r.layoutBox);
                let a = (0, tY.dO)();
                tU(a, e, s.layoutBox),
                  eA(o, a) || (u = !0),
                  n.options.layoutRoot &&
                    ((t.relativeTarget = a),
                    (t.relativeTargetOrigin = o),
                    (t.relativeParent = n));
              }
            }
          }
          t.notifyListeners("didUpdate", {
            layout: e,
            snapshot: i,
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
      function eI(t) {
        eB.totalNodes++,
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
      function eU(t) {
        t.isProjectionDirty =
          t.isSharedProjectionDirty =
          t.isTransformDirty =
            !1;
      }
      function eN(t) {
        t.clearSnapshot();
      }
      function e_(t) {
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
      function eK(t, e, i) {
        (t.translate = (0, tj.C)(e.translate, 0, i)),
          (t.scale = (0, tj.C)(e.scale, 1, i)),
          (t.origin = e.origin),
          (t.originPoint = e.originPoint);
      }
      function eJ(t, e, i, n) {
        (t.min = (0, tj.C)(e.min, i.min, n)),
          (t.max = (0, tj.C)(e.max, i.max, n));
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
      function e5(t, e, i) {
        return (
          "position" === t ||
          ("preserve-aspect" === t && !tB(eT(e), eT(i), 0.2))
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
      var e6 = i(4478),
        e7 = i(2210);
      let it = (t, e) =>
          b(t)
            ? new e7.e(e, { enableHardwareAcceleration: !1 })
            : new e6.W(e, { enableHardwareAcceleration: !0 }),
        ie = {
          animation: {
            Feature: class extends tr {
              constructor(t) {
                super(t),
                  t.animationState ||
                    (t.animationState = (function (t) {
                      let e = (e) =>
                          Promise.all(
                            e.map(({ animation: e, options: i }) =>
                              (function (t, e, i = {}) {
                                let n;
                                if (
                                  (t.notify("AnimationStart", e),
                                  Array.isArray(e))
                                ) {
                                  let r = e.map((e) => tx(t, e, i));
                                  n = Promise.all(r);
                                } else if ("string" == typeof e)
                                  n = tx(t, e, i);
                                else {
                                  let r =
                                    "function" == typeof e
                                      ? (0, tv.x)(t, e, i.custom)
                                      : e;
                                  n = Promise.all((0, ty.w)(t, r, i));
                                }
                                return n.then(() =>
                                  t.notify("AnimationComplete", e)
                                );
                              })(t, e, i)
                            )
                          ),
                        i = {
                          animate: tA(!0),
                          whileInView: tA(),
                          whileHover: tA(),
                          whileTap: tA(),
                          whileDrag: tA(),
                          whileFocus: tA(),
                          exit: tA(),
                        },
                        n = !0,
                        r = (e, i) => {
                          let n = (0, tv.x)(t, i);
                          if (n) {
                            let { transition: t, transitionEnd: i, ...r } = n;
                            e = { ...e, ...r, ...i };
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
                        for (let e = 0; e < tw; e++) {
                          var p;
                          let m = tb[e],
                            v = i[m],
                            g = void 0 !== a[m] ? a[m] : l[m],
                            y = (0, d.$)(g),
                            x = m === o ? v.isActive : null;
                          !1 === x && (f = e);
                          let P = g === l[m] && g !== a[m] && y;
                          if (
                            (P && n && t.manuallyAnimateOnMount && (P = !1),
                            (v.protectedKeys = { ...c }),
                            (!v.isActive && null === x) ||
                              (!g && !v.prevProp) ||
                              (0, O.H)(g) ||
                              "boolean" == typeof g)
                          )
                            continue;
                          let b =
                              ((p = v.prevProp),
                              "string" == typeof g
                                ? g !== p
                                : !!Array.isArray(g) && !tm(g, p)),
                            w =
                              b ||
                              (m === o && v.isActive && !P && y) ||
                              (e > f && y),
                            A = !1,
                            T = Array.isArray(g) ? g : [g],
                            C = T.reduce(r, {});
                          !1 === x && (C = {});
                          let { prevResolvedValues: S = {} } = v,
                            E = { ...S, ...C },
                            V = (t) => {
                              (w = !0),
                                h.has(t) && ((A = !0), h.delete(t)),
                                (v.needsAnimating[t] = !0);
                            };
                          for (let t in E) {
                            let e = C[t],
                              i = S[t];
                            if (!c.hasOwnProperty(t))
                              (
                                (0, tp.C)(e) && (0, tp.C)(i)
                                  ? tm(e, i)
                                  : e === i
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
                            n && t.blockInitialAnimation && (w = !1),
                            w &&
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
                          h.forEach((i) => {
                            let n = t.getBaseTarget(i);
                            void 0 !== n && (e[i] = n);
                          }),
                            u.push({ animation: e });
                        }
                        let m = !!u.length;
                        return (
                          n &&
                            (!1 === a.initial || a.initial === a.animate) &&
                            !t.manuallyAnimateOnMount &&
                            (m = !1),
                          (n = !1),
                          m ? e(u) : Promise.resolve()
                        );
                      }
                      return {
                        animateChanges: s,
                        setActive: function (e, n, r) {
                          var o;
                          if (i[e].isActive === n) return Promise.resolve();
                          null === (o = t.variantChildren) ||
                            void 0 === o ||
                            o.forEach((t) => {
                              var i;
                              return null === (i = t.animationState) ||
                                void 0 === i
                                ? void 0
                                : i.setActive(e, n);
                            }),
                            (i[e].isActive = n);
                          let a = s(r, e);
                          for (let t in i) i[t].protectedKeys = {};
                          return a;
                        },
                        setAnimateFunction: function (i) {
                          e = i(t);
                        },
                        getState: () => i,
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
                    custom: i,
                  } = this.node.presenceContext,
                  { isPresent: n } = this.node.prevPresenceContext || {};
                if (!this.node.animationState || t === n) return;
                let r = this.node.animationState.setActive("exit", !t, {
                  custom: null != i ? i : this.node.getProps().custom,
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
                  { root: e, margin: i, amount: n = "some", once: r } = t,
                  s = {
                    root: e ? e.current : void 0,
                    rootMargin: i,
                    threshold: "number" == typeof n ? n : tf[n],
                  };
                return (function (t, e, i) {
                  let n = (function ({ root: t, ...e }) {
                    let i = t || document;
                    th.has(i) || th.set(i, {});
                    let n = th.get(i),
                      r = JSON.stringify(e);
                    return (
                      n[r] ||
                        (n[r] = new IntersectionObserver(td, {
                          root: t,
                          ...e,
                        })),
                      n[r]
                    );
                  })(e);
                  return (
                    tu.set(t, i),
                    n.observe(t),
                    () => {
                      tu.delete(t), n.unobserve(t);
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
                  let { onViewportEnter: i, onViewportLeave: n } =
                      this.node.getProps(),
                    s = e ? i : n;
                  s && s(t);
                });
              }
              mount() {
                this.startObserver();
              }
              update() {
                if ("undefined" == typeof IntersectionObserver) return;
                let { props: t, prevProps: e } = this.node,
                  i = ["amount", "margin", "root"].some(
                    (function (
                      { viewport: t = {} },
                      { viewport: e = {} } = {}
                    ) {
                      return (i) => t[i] !== e[i];
                    })(t, e)
                  );
                i && this.startObserver();
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
                    let i = this.node.getProps(),
                      n = K(
                        window,
                        "pointerup",
                        (t, e) => {
                          if (!this.checkPressEnd()) return;
                          let {
                            onTap: i,
                            onTapCancel: n,
                            globalTapTarget: r,
                          } = this.node.getProps();
                          _.Wi.update(() => {
                            r || to(this.node.current, t.target)
                              ? i && i(t, e)
                              : n && n(t, e);
                          });
                        },
                        { passive: !(i.onTap || i.onPointerUp) }
                      ),
                      r = K(
                        window,
                        "pointercancel",
                        (t, e) => this.cancelPress(t, e),
                        { passive: !(i.onTapCancel || i.onPointerCancel) }
                      );
                    (this.removeEndListeners = (0, J.z)(n, r)),
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
                                  let { onTap: i } = this.node.getProps();
                                  i && _.Wi.update(() => i(t, e));
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
                let { onTapStart: i, whileTap: n } = this.node.getProps();
                n &&
                  this.node.animationState &&
                  this.node.animationState.setActive("whileTap", !0),
                  i && _.Wi.update(() => i(t, e));
              }
              checkPressEnd() {
                this.removeEndListeners(), (this.isPressing = !1);
                let t = this.node.getProps();
                return (
                  t.whileTap &&
                    this.node.animationState &&
                    this.node.animationState.setActive("whileTap", !1),
                  !tn()
                );
              }
              cancelPress(t, e) {
                if (!this.checkPressEnd()) return;
                let { onTapCancel: i } = this.node.getProps();
                i && _.Wi.update(() => i(t, e));
              }
              mount() {
                let t = this.node.getProps(),
                  e = K(
                    t.globalTapTarget ? window : this.node.current,
                    "pointerdown",
                    this.startPointerPress,
                    { passive: !(t.onTapStart || t.onPointerStart) }
                  ),
                  i = Y(this.node.current, "focus", this.startAccessiblePress);
                this.removeStartListeners = (0, J.z)(e, i);
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
                  onPan: i,
                  onPanEnd: n,
                } = this.node.getProps();
                return {
                  onSessionStart: t3(t),
                  onStart: t3(e),
                  onMove: i,
                  onEnd: (t, e) => {
                    delete this.session, n && _.Wi.update(() => n(t, e));
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
        ii = (function (t) {
          function e(e, i = {}) {
            return (function ({
              preloadedFeatures: t,
              createVisualElement: e,
              useRender: i,
              useVisualState: n,
              Component: P,
            }) {
              t &&
                (function (t) {
                  for (let e in t) m.A[e] = { ...m.A[e], ...t[e] };
                })(t);
              let b = (0, r.forwardRef)(function (m, x) {
                var b;
                let w;
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
                    let { initial: e, animate: i } = (function (t, e) {
                      if ((0, f.G)(t)) {
                        let { initial: e, animate: i } = t;
                        return {
                          initial: !1 === e || (0, d.$)(e) ? e : void 0,
                          animate: (0, d.$)(i) ? i : void 0,
                        };
                      }
                      return !1 !== t.inherit ? e : {};
                    })(t, (0, r.useContext)(o));
                    return (0, r.useMemo)(
                      () => ({ initial: e, animate: i }),
                      [p(e), p(i)]
                    );
                  })(m),
                  S = n(m, T);
                if (!T && v.j) {
                  C.visualElement = (function (t, e, i, n) {
                    let { visualElement: c } = (0, r.useContext)(o),
                      d = (0, r.useContext)(u),
                      f = (0, r.useContext)(a.O),
                      p = (0, r.useContext)(s._).reducedMotion,
                      m = (0, r.useRef)();
                    (n = n || d.renderer),
                      !m.current &&
                        n &&
                        (m.current = n(t, {
                          visualState: e,
                          parent: c,
                          props: i,
                          presenceContext: f,
                          blockInitialAnimation: !!f && !1 === f.initial,
                          reducedMotionConfig: p,
                        }));
                    let v = m.current;
                    (0, r.useInsertionEffect)(() => {
                      v && v.update(i, f);
                    });
                    let g = (0, r.useRef)(
                      !!(i[h.M] && !window.HandoffComplete)
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
                  })(P, S, A, e);
                  let i = (0, r.useContext)(y),
                    n = (0, r.useContext)(u).strict;
                  C.visualElement &&
                    (w = C.visualElement.loadFeatures(A, n, t, i));
                }
                return r.createElement(
                  o.Provider,
                  { value: C },
                  w && C.visualElement
                    ? r.createElement(w, {
                        visualElement: C.visualElement,
                        ...A,
                      })
                    : null,
                  i(
                    P,
                    m,
                    ((b = C.visualElement),
                    (0, r.useCallback)(
                      (t) => {
                        t && S.mount && S.mount(t),
                          b && (t ? b.mount(t) : b.unmount()),
                          x &&
                            ("function" == typeof x
                              ? x(t)
                              : (0, c.I)(x) && (x.current = t));
                      },
                      [b]
                    )),
                    S,
                    T,
                    C.visualElement
                  )
                );
              });
              return (b[x] = P), b;
            })(t(e, i));
          }
          if ("undefined" == typeof Proxy) return e;
          let i = new Map();
          return new Proxy(e, {
            get: (t, n) => (i.has(n) || i.set(n, e(n)), i.get(n)),
          });
        })((t, e) =>
          (function (t, { forwardMotionProps: e = !1 }, i, n) {
            let s = b(t) ? H : X;
            return {
              ...s,
              preloadedFeatures: i,
              useRender: (function (t = !1) {
                return (e, i, n, { latestValues: s }, o) => {
                  let a = b(e) ? j : E,
                    l = a(i, s, o, e),
                    u = (function (t, e, i) {
                      let n = {};
                      for (let r in t)
                        ("values" !== r || "object" != typeof t.values) &&
                          (M(r) ||
                            (!0 === i && D(r)) ||
                            (!e && !D(r)) ||
                            (t.draggable && r.startsWith("onDrag"))) &&
                          (n[r] = t[r]);
                      return n;
                    })(i, "string" == typeof e, t),
                    h = { ...u, ...l, ref: n },
                    { children: c } = i,
                    d = (0, r.useMemo)(() => ((0, A.i)(c) ? c.get() : c), [c]);
                  return (0, r.createElement)(e, { ...h, children: d });
                };
              })(e),
              createVisualElement: n,
              Component: t,
            };
          })(t, e, ie, it)
        );
    },
    7905: function (t, e, i) {
      "use strict";
      i.d(e, {
        D: function () {
          return n;
        },
      });
      let n = (t) => t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
    },
    417: function (t, e, i) {
      "use strict";
      i.d(e, {
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
      let n = (t) => (e) => "string" == typeof e && e.startsWith(t),
        r = n("--"),
        s = n("var(--"),
        o =
          /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g;
    },
    4457: function (t, e, i) {
      "use strict";
      function n(t) {
        return t instanceof SVGElement && "svg" !== t.tagName;
      }
      i.d(e, {
        v: function () {
          return n;
        },
      });
    },
    9006: function (t, e, i) {
      "use strict";
      i.d(e, {
        T: function () {
          return o;
        },
      });
      var n = i(9155),
        r = i(4875),
        s = i(5008);
      function o(t, e) {
        let i = (0, s.A)(t);
        return (
          i !== r.h && (i = n.P),
          i.getAnimatableNone ? i.getAnimatableNone(e) : void 0
        );
      }
    },
    5008: function (t, e, i) {
      "use strict";
      i.d(e, {
        A: function () {
          return a;
        },
      });
      var n = i(2199),
        r = i(4875),
        s = i(3002);
      let o = {
          ...s.j,
          color: n.$,
          backgroundColor: n.$,
          outlineColor: n.$,
          fill: n.$,
          stroke: n.$,
          borderColor: n.$,
          borderTopColor: n.$,
          borderRightColor: n.$,
          borderBottomColor: n.$,
          borderLeftColor: n.$,
          filter: r.h,
          WebkitFilter: r.h,
        },
        a = (t) => o[t];
    },
    8824: function (t, e, i) {
      "use strict";
      i.d(e, {
        $: function () {
          return o;
        },
        C: function () {
          return a;
        },
      });
      var n = i(2980),
        r = i(3681),
        s = i(8598);
      let o = [
          n.Rx,
          r.px,
          r.aQ,
          r.RW,
          r.vw,
          r.vh,
          { test: (t) => "auto" === t, parse: (t) => t },
        ],
        a = (t) => o.find((0, s.l)(t));
    },
    3002: function (t, e, i) {
      "use strict";
      i.d(e, {
        j: function () {
          return o;
        },
      });
      var n = i(2980),
        r = i(3681);
      let s = { ...n.Rx, transform: Math.round },
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
          scale: n.bA,
          scaleX: n.bA,
          scaleY: n.bA,
          scaleZ: n.bA,
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
          opacity: n.Fq,
          originX: r.$C,
          originY: r.$C,
          originZ: r.px,
          zIndex: s,
          fillOpacity: n.Fq,
          strokeOpacity: n.Fq,
          numOctaves: s,
        };
    },
    8598: function (t, e, i) {
      "use strict";
      i.d(e, {
        l: function () {
          return n;
        },
      });
      let n = (t) => (e) => e.test(t);
    },
    4478: function (t, e, i) {
      "use strict";
      i.d(e, {
        W: function () {
          return d;
        },
      });
      var n = i(458),
        r = i(417),
        s = i(9303),
        o = i(3495),
        a = i(2449),
        l = i(5008),
        u = i(3937),
        h = i(1923),
        c = i(5735);
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
            let i = window.getComputedStyle(t),
              n = ((0, r.f9)(e) ? i.getPropertyValue(e) : i[e]) || 0;
            return "string" == typeof n ? n.trim() : n;
          }
        }
        measureInstanceViewportBox(t, { transformPagePoint: e }) {
          return (0, u.J)(t, e);
        }
        build(t, e, i, r) {
          (0, n.r)(t, e, i, r.transformTemplate);
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
        renderInstance(t, e, i, n) {
          (0, a.N)(t, e, i, n);
        }
      }
    },
    458: function (t, e, i) {
      "use strict";
      i.d(e, {
        r: function () {
          return u;
        },
      });
      var n = i(9303);
      let r = {
          x: "translateX",
          y: "translateY",
          z: "translateZ",
          transformPerspective: "perspective",
        },
        s = n._.length;
      var o = i(417);
      let a = (t, e) => (e && "number" == typeof t ? e.transform(t) : t);
      var l = i(3002);
      function u(t, e, i, u) {
        let { style: h, vars: c, transform: d, transformOrigin: f } = t,
          p = !1,
          m = !1,
          v = !0;
        for (let t in e) {
          let i = e[t];
          if ((0, o.f9)(t)) {
            c[t] = i;
            continue;
          }
          let r = l.j[t],
            s = a(i, r);
          if (n.G.has(t)) {
            if (((p = !0), (d[t] = s), !v)) continue;
            i !== (r.default || 0) && (v = !1);
          } else t.startsWith("origin") ? ((m = !0), (f[t] = s)) : (h[t] = s);
        }
        if (
          (!e.transform &&
            (p || u
              ? (h.transform = (function (
                  t,
                  {
                    enableHardwareAcceleration: e = !0,
                    allowTransformNone: i = !0,
                  },
                  o,
                  a
                ) {
                  let l = "";
                  for (let e = 0; e < s; e++) {
                    let i = n._[e];
                    if (void 0 !== t[i]) {
                      let e = r[i] || i;
                      l += `${e}(${t[i]}) `;
                    }
                  }
                  return (
                    e && !t.z && (l += "translateZ(0)"),
                    (l = l.trim()),
                    a ? (l = a(t, o ? "" : l)) : i && o && (l = "none"),
                    l
                  );
                })(t.transform, i, v, u))
              : h.transform && (h.transform = "none")),
          m)
        ) {
          let { originX: t = "50%", originY: e = "50%", originZ: i = 0 } = f;
          h.transformOrigin = `${t} ${e} ${i}`;
        }
      }
    },
    2449: function (t, e, i) {
      "use strict";
      function n(t, { style: e, vars: i }, n, r) {
        for (let s in (Object.assign(t.style, e, r && r.getProjectionStyles(n)),
        i))
          t.style.setProperty(s, i[s]);
      }
      i.d(e, {
        N: function () {
          return n;
        },
      });
    },
    3495: function (t, e, i) {
      "use strict";
      i.d(e, {
        U: function () {
          return s;
        },
      });
      var n = i(1118),
        r = i(5735);
      function s(t, e) {
        let { style: i } = t,
          s = {};
        for (let o in i)
          ((0, r.i)(i[o]) ||
            (e.style && (0, r.i)(e.style[o])) ||
            (0, n.j)(o, t)) &&
            (s[o] = i[o]);
        return s;
      }
    },
    9303: function (t, e, i) {
      "use strict";
      i.d(e, {
        G: function () {
          return r;
        },
        _: function () {
          return n;
        },
      });
      let n = [
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
        r = new Set(n);
    },
    4900: function (t, e, i) {
      "use strict";
      i.d(e, {
        R: function () {
          return n;
        },
      });
      let n = new WeakMap();
    },
    2210: function (t, e, i) {
      "use strict";
      i.d(e, {
        e: function () {
          return f;
        },
      });
      var n = i(5625),
        r = i(1923),
        s = i(1524),
        o = i(7905),
        a = i(888),
        l = i(9303),
        u = i(8239),
        h = i(5008),
        c = i(4597),
        d = i(922);
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
          return (0, n.U)(t, e);
        }
        build(t, e, i, n) {
          (0, s.i)(t, e, i, this.isSVGTag, n.transformTemplate);
        }
        renderInstance(t, e, i, n) {
          (0, u.K)(t, e, i, n);
        }
        mount(t) {
          (this.isSVGTag = (0, d.a)(t.tagName)), super.mount(t);
        }
      }
    },
    1524: function (t, e, i) {
      "use strict";
      i.d(e, {
        i: function () {
          return l;
        },
      });
      var n = i(458),
        r = i(3681);
      function s(t, e, i) {
        return "string" == typeof t ? t : r.px.transform(e + i * t);
      }
      let o = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
        a = { offset: "strokeDashoffset", array: "strokeDasharray" };
      function l(
        t,
        {
          attrX: e,
          attrY: i,
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
        if (((0, n.r)(t, p, m, g), v)) {
          t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
          return;
        }
        (t.attrs = t.style), (t.style = {});
        let { attrs: y, style: x, dimensions: P } = t;
        y.transform && (P && (x.transform = y.transform), delete y.transform),
          P &&
            (void 0 !== u || void 0 !== h || x.transform) &&
            (x.transformOrigin = (function (t, e, i) {
              let n = s(e, t.x, t.width),
                r = s(i, t.y, t.height);
              return `${n} ${r}`;
            })(P, void 0 !== u ? u : 0.5, void 0 !== h ? h : 0.5)),
          void 0 !== e && (y.x = e),
          void 0 !== i && (y.y = i),
          void 0 !== l && (y.scale = l),
          void 0 !== c &&
            (function (t, e, i = 1, n = 0, s = !0) {
              t.pathLength = 1;
              let l = s ? o : a;
              t[l.offset] = r.px.transform(-n);
              let u = r.px.transform(e),
                h = r.px.transform(i);
              t[l.array] = `${u} ${h}`;
            })(y, c, d, f, !1);
      }
    },
    888: function (t, e, i) {
      "use strict";
      i.d(e, {
        s: function () {
          return n;
        },
      });
      let n = new Set([
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
    922: function (t, e, i) {
      "use strict";
      i.d(e, {
        a: function () {
          return n;
        },
      });
      let n = (t) => "string" == typeof t && "svg" === t.toLowerCase();
    },
    8239: function (t, e, i) {
      "use strict";
      i.d(e, {
        K: function () {
          return o;
        },
      });
      var n = i(7905),
        r = i(2449),
        s = i(888);
      function o(t, e, i, o) {
        for (let i in ((0, r.N)(t, e, void 0, o), e.attrs))
          t.setAttribute(s.s.has(i) ? i : (0, n.D)(i), e.attrs[i]);
      }
    },
    5625: function (t, e, i) {
      "use strict";
      i.d(e, {
        U: function () {
          return o;
        },
      });
      var n = i(5735),
        r = i(3495),
        s = i(9303);
      function o(t, e) {
        let i = (0, r.U)(t, e);
        for (let r in t)
          if ((0, n.i)(t[r]) || (0, n.i)(e[r])) {
            let e =
              -1 !== s._.indexOf(r)
                ? "attr" + r.charAt(0).toUpperCase() + r.substring(1)
                : r;
            i[e] = t[r];
          }
        return i;
      }
    },
    6049: function (t, e, i) {
      "use strict";
      i.d(e, {
        G: function () {
          return o;
        },
        M: function () {
          return a;
        },
      });
      var n = i(7866),
        r = i(3345),
        s = i(5247);
      function o(t) {
        return (0, n.H)(t.animate) || s.V.some((e) => (0, r.$)(t[e]));
      }
      function a(t) {
        return !!(o(t) || t.variants);
      }
    },
    3345: function (t, e, i) {
      "use strict";
      function n(t) {
        return "string" == typeof t || Array.isArray(t);
      }
      i.d(e, {
        $: function () {
          return n;
        },
      });
    },
    2593: function (t, e, i) {
      "use strict";
      i.d(e, {
        x: function () {
          return r;
        },
      });
      var n = i(3331);
      function r(t, e, i) {
        let r = t.getProps();
        return (0, n.o)(
          r,
          e,
          void 0 !== i ? i : r.custom,
          (function (t) {
            let e = {};
            return t.values.forEach((t, i) => (e[i] = t.get())), e;
          })(t),
          (function (t) {
            let e = {};
            return t.values.forEach((t, i) => (e[i] = t.getVelocity())), e;
          })(t)
        );
      }
    },
    3331: function (t, e, i) {
      "use strict";
      function n(t, e, i, n = {}, r = {}) {
        return (
          "function" == typeof e && (e = e(void 0 !== i ? i : t.custom, n, r)),
          "string" == typeof e && (e = t.variants && t.variants[e]),
          "function" == typeof e && (e = e(void 0 !== i ? i : t.custom, n, r)),
          e
        );
      }
      i.d(e, {
        o: function () {
          return n;
        },
      });
    },
    7798: function (t, e, i) {
      "use strict";
      i.d(e, {
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
      var n = i(4747),
        r = i(5243),
        s = i(1832),
        o = i(4101),
        a = i(9155),
        l = i(9006),
        u = i(2199),
        h = i(8824),
        c = i(8598);
      let d = [...h.$, u.$, a.P],
        f = (t) => d.find((0, c.l)(t));
      var p = i(2593);
      function m(t, e) {
        let i = (0, p.x)(t, e),
          {
            transitionEnd: n = {},
            transition: r = {},
            ...a
          } = i ? t.makeTargetAnimatable(i, !1) : {};
        for (let e in (a = { ...a, ...n })) {
          let i = (0, s.Y)(a[e]);
          t.hasValue(e) ? t.getValue(e).set(i) : t.addValue(e, (0, o.BX)(i));
        }
      }
      function v(t, e, i) {
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
                      null !== (s = i[c]) && void 0 !== s
                        ? s
                        : t.readValue(c)) && void 0 !== u
                    ? u
                    : e[c]),
              null != m &&
                ("string" == typeof m && ((0, n.P)(m) || (0, r.W)(m))
                  ? (m = parseFloat(m))
                  : !f(m) && a.P.test(p) && (m = (0, l.T)(c, p)),
                t.addValue(c, (0, o.BX)(m, { owner: t })),
                void 0 === i[c] && (i[c] = m),
                null !== m && t.setBaseTarget(c, m));
          }
      }
      function g(t, e, i) {
        let n = {};
        for (let r in t) {
          let t = (function (t, e) {
            if (!e) return;
            let i = e[t] || e.default || e;
            return i.from;
          })(r, e);
          if (void 0 !== t) n[r] = t;
          else {
            let t = i.getValue(r);
            t && (n[r] = t.get());
          }
        }
        return n;
      }
    },
    5247: function (t, e, i) {
      "use strict";
      i.d(e, {
        V: function () {
          return r;
        },
        e: function () {
          return n;
        },
      });
      let n = [
          "animate",
          "whileInView",
          "whileFocus",
          "whileHover",
          "whileTap",
          "whileDrag",
          "exit",
        ],
        r = ["initial", ...n];
    },
    7081: function (t, e, i) {
      "use strict";
      function n(t, e) {
        -1 === t.indexOf(e) && t.push(e);
      }
      function r(t, e) {
        let i = t.indexOf(e);
        i > -1 && t.splice(i, 1);
      }
      i.d(e, {
        cl: function () {
          return r;
        },
        y4: function () {
          return n;
        },
      });
    },
    3021: function (t, e, i) {
      "use strict";
      i.d(e, {
        u: function () {
          return n;
        },
      });
      let n = (t, e, i) => Math.min(Math.max(i, t), e);
    },
    6567: function (t, e, i) {
      "use strict";
      i.d(e, {
        K: function () {
          return r;
        },
        k: function () {
          return s;
        },
      });
      var n = i(6977);
      let r = n.Z,
        s = n.Z;
    },
    3245: function (t, e, i) {
      "use strict";
      i.d(e, {
        s: function () {
          return S;
        },
      });
      var n = i(6567),
        r = i(2199),
        s = i(3021),
        o = i(7);
      function a(t, e, i) {
        return (i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6)
          ? t + (e - t) * 6 * i
          : i < 0.5
          ? e
          : i < 2 / 3
          ? t + (e - t) * (2 / 3 - i) * 6
          : t;
      }
      var l = i(3257),
        u = i(2808),
        h = i(6002);
      let c = (t, e, i) => {
          let n = t * t;
          return Math.sqrt(Math.max(0, i * (e * e - n) + n));
        },
        d = [l.$, u.m, h.J],
        f = (t) => d.find((e) => e.test(t));
      function p(t) {
        let e = f(t);
        (0, n.k)(
          !!e,
          `'${t}' is not an animatable color. Use the equivalent color code instead.`
        );
        let i = e.parse(t);
        return (
          e === h.J &&
            (i = (function ({ hue: t, saturation: e, lightness: i, alpha: n }) {
              (t /= 360), (i /= 100);
              let r = 0,
                s = 0,
                o = 0;
              if ((e /= 100)) {
                let n = i < 0.5 ? i * (1 + e) : i + e - i * e,
                  l = 2 * i - n;
                (r = a(l, n, t + 1 / 3)),
                  (s = a(l, n, t)),
                  (o = a(l, n, t - 1 / 3));
              } else r = s = o = i;
              return {
                red: Math.round(255 * r),
                green: Math.round(255 * s),
                blue: Math.round(255 * o),
                alpha: n,
              };
            })(i)),
          i
        );
      }
      let m = (t, e) => {
        let i = p(t),
          n = p(e),
          r = { ...i };
        return (t) => (
          (r.red = c(i.red, n.red, t)),
          (r.green = c(i.green, n.green, t)),
          (r.blue = c(i.blue, n.blue, t)),
          (r.alpha = (0, o.C)(i.alpha, n.alpha, t)),
          u.m.transform(r)
        );
      };
      var v = i(4694),
        g = i(9155);
      let y = (t, e) => (i) => `${i > 0 ? e : t}`;
      function x(t, e) {
        return "number" == typeof t
          ? (i) => (0, o.C)(t, e, i)
          : r.$.test(t)
          ? m(t, e)
          : t.startsWith("var(")
          ? y(t, e)
          : w(t, e);
      }
      let P = (t, e) => {
          let i = [...t],
            n = i.length,
            r = t.map((t, i) => x(t, e[i]));
          return (t) => {
            for (let e = 0; e < n; e++) i[e] = r[e](t);
            return i;
          };
        },
        b = (t, e) => {
          let i = { ...t, ...e },
            n = {};
          for (let r in i)
            void 0 !== t[r] && void 0 !== e[r] && (n[r] = x(t[r], e[r]));
          return (t) => {
            for (let e in n) i[e] = n[e](t);
            return i;
          };
        },
        w = (t, e) => {
          let i = g.P.createTransformer(e),
            r = (0, g.V)(t),
            s = (0, g.V)(e),
            o =
              r.numVars === s.numVars &&
              r.numColors === s.numColors &&
              r.numNumbers >= s.numNumbers;
          return o
            ? (0, v.z)(P(r.values, s.values), i)
            : ((0, n.K)(
                !0,
                `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`
              ),
              y(t, e));
        };
      var A = i(2868),
        T = i(6977);
      let C = (t, e) => (i) => (0, o.C)(t, e, i);
      function S(t, e, { clamp: i = !0, ease: o, mixer: a } = {}) {
        let l = t.length;
        if (
          ((0, n.k)(
            l === e.length,
            "Both input and output ranges must be the same length"
          ),
          1 === l)
        )
          return () => e[0];
        t[0] > t[l - 1] && ((t = [...t].reverse()), (e = [...e].reverse()));
        let u = (function (t, e, i) {
            let n = [],
              s =
                i ||
                (function (t) {
                  if ("number" == typeof t);
                  else if ("string" == typeof t) return r.$.test(t) ? m : w;
                  else if (Array.isArray(t)) return P;
                  else if ("object" == typeof t) return b;
                  return C;
                })(t[0]),
              o = t.length - 1;
            for (let i = 0; i < o; i++) {
              let r = s(t[i], t[i + 1]);
              if (e) {
                let t = Array.isArray(e) ? e[i] || T.Z : e;
                r = (0, v.z)(t, r);
              }
              n.push(r);
            }
            return n;
          })(e, o, a),
          h = u.length,
          c = (e) => {
            let i = 0;
            if (h > 1) for (; i < t.length - 2 && !(e < t[i + 1]); i++);
            let n = (0, A.Y)(t[i], t[i + 1], e);
            return u[i](n);
          };
        return i ? (e) => c((0, s.u)(t[0], t[l - 1], e)) : c;
      }
    },
    6613: function (t, e, i) {
      "use strict";
      i.d(e, {
        j: function () {
          return n;
        },
      });
      let n = "undefined" != typeof document;
    },
    4747: function (t, e, i) {
      "use strict";
      i.d(e, {
        P: function () {
          return n;
        },
      });
      let n = (t) => /^\-?\d*\.?\d+$/.test(t);
    },
    5503: function (t, e, i) {
      "use strict";
      function n(t) {
        return (
          t &&
          "object" == typeof t &&
          Object.prototype.hasOwnProperty.call(t, "current")
        );
      }
      i.d(e, {
        I: function () {
          return n;
        },
      });
    },
    5243: function (t, e, i) {
      "use strict";
      i.d(e, {
        W: function () {
          return n;
        },
      });
      let n = (t) => /^0[^.\s]+$/.test(t);
    },
    9648: function (t, e, i) {
      "use strict";
      function n(t) {
        let e;
        return () => (void 0 === e && (e = t()), e);
      }
      i.d(e, {
        X: function () {
          return n;
        },
      });
    },
    7: function (t, e, i) {
      "use strict";
      i.d(e, {
        C: function () {
          return n;
        },
      });
      let n = (t, e, i) => -i * t + i * e + t;
    },
    6977: function (t, e, i) {
      "use strict";
      i.d(e, {
        Z: function () {
          return n;
        },
      });
      let n = (t) => t;
    },
    9448: function (t, e, i) {
      "use strict";
      i.d(e, {
        Y: function () {
          return r;
        },
      });
      var n = i(4233);
      function r(t) {
        let e = [0];
        return (0, n.c)(e, t.length - 1), e;
      }
    },
    4233: function (t, e, i) {
      "use strict";
      i.d(e, {
        c: function () {
          return s;
        },
      });
      var n = i(7),
        r = i(2868);
      function s(t, e) {
        let i = t[t.length - 1];
        for (let s = 1; s <= e; s++) {
          let o = (0, r.Y)(0, e, s);
          t.push((0, n.C)(i, 1, o));
        }
      }
    },
    4694: function (t, e, i) {
      "use strict";
      i.d(e, {
        z: function () {
          return r;
        },
      });
      let n = (t, e) => (i) => e(t(i)),
        r = (...t) => t.reduce(n);
    },
    2868: function (t, e, i) {
      "use strict";
      i.d(e, {
        Y: function () {
          return n;
        },
      });
      let n = (t, e, i) => {
        let n = e - t;
        return 0 === n ? 1 : (i - t) / n;
      };
    },
    1832: function (t, e, i) {
      "use strict";
      i.d(e, {
        Y: function () {
          return s;
        },
        p: function () {
          return r;
        },
      });
      var n = i(363);
      let r = (t) => !!(t && "object" == typeof t && t.mix && t.toValue),
        s = (t) => ((0, n.C)(t) ? t[t.length - 1] || 0 : t);
    },
    7026: function (t, e, i) {
      "use strict";
      i.d(e, {
        L: function () {
          return r;
        },
      });
      var n = i(7081);
      class r {
        constructor() {
          this.subscriptions = [];
        }
        add(t) {
          return (
            (0, n.y4)(this.subscriptions, t),
            () => (0, n.cl)(this.subscriptions, t)
          );
        }
        notify(t, e, i) {
          let n = this.subscriptions.length;
          if (n) {
            if (1 === n) this.subscriptions[0](t, e, i);
            else
              for (let r = 0; r < n; r++) {
                let n = this.subscriptions[r];
                n && n(t, e, i);
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
    1356: function (t, e, i) {
      "use strict";
      i.d(e, {
        X: function () {
          return r;
        },
        w: function () {
          return n;
        },
      });
      let n = (t) => 1e3 * t,
        r = (t) => t / 1e3;
    },
    961: function (t, e, i) {
      "use strict";
      i.d(e, {
        h: function () {
          return r;
        },
      });
      var n = i(2265);
      function r(t) {
        let e = (0, n.useRef)(null);
        return null === e.current && (e.current = t()), e.current;
      }
    },
    538: function (t, e, i) {
      "use strict";
      i.d(e, {
        L: function () {
          return s;
        },
      });
      var n = i(2265),
        r = i(6613);
      let s = r.j ? n.useLayoutEffect : n.useEffect;
    },
    9815: function (t, e, i) {
      "use strict";
      function n(t, e) {
        return e ? t * (1e3 / e) : 0;
      }
      i.d(e, {
        R: function () {
          return n;
        },
      });
    },
    4101: function (t, e, i) {
      "use strict";
      i.d(e, {
        BX: function () {
          return u;
        },
      });
      var n = i(7026),
        r = i(9815),
        s = i(3041);
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
              let { delta: i, timestamp: n } = s.frameData;
              this.lastUpdated !== n &&
                ((this.timeDelta = i),
                (this.lastUpdated = n),
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
          this.events[t] || (this.events[t] = new n.L());
          let i = this.events[t].add(e);
          return "change" === t
            ? () => {
                i(),
                  s.Wi.read(() => {
                    this.events.change.getSize() || this.stop();
                  });
              }
            : i;
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
        setWithVelocity(t, e, i) {
          this.set(e), (this.prev = t), (this.timeDelta = i);
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
    3257: function (t, e, i) {
      "use strict";
      i.d(e, {
        $: function () {
          return s;
        },
      });
      var n = i(2808),
        r = i(686);
      let s = {
        test: (0, r.i)("#"),
        parse: function (t) {
          let e = "",
            i = "",
            n = "",
            r = "";
          return (
            t.length > 5
              ? ((e = t.substring(1, 3)),
                (i = t.substring(3, 5)),
                (n = t.substring(5, 7)),
                (r = t.substring(7, 9)))
              : ((e = t.substring(1, 2)),
                (i = t.substring(2, 3)),
                (n = t.substring(3, 4)),
                (r = t.substring(4, 5)),
                (e += e),
                (i += i),
                (n += n),
                (r += r)),
            {
              red: parseInt(e, 16),
              green: parseInt(i, 16),
              blue: parseInt(n, 16),
              alpha: r ? parseInt(r, 16) / 255 : 1,
            }
          );
        },
        transform: n.m.transform,
      };
    },
    6002: function (t, e, i) {
      "use strict";
      i.d(e, {
        J: function () {
          return a;
        },
      });
      var n = i(2980),
        r = i(3681),
        s = i(2038),
        o = i(686);
      let a = {
        test: (0, o.i)("hsl", "hue"),
        parse: (0, o.d)("hue", "saturation", "lightness"),
        transform: ({ hue: t, saturation: e, lightness: i, alpha: o = 1 }) =>
          "hsla(" +
          Math.round(t) +
          ", " +
          r.aQ.transform((0, s.Nw)(e)) +
          ", " +
          r.aQ.transform((0, s.Nw)(i)) +
          ", " +
          (0, s.Nw)(n.Fq.transform(o)) +
          ")",
      };
    },
    2199: function (t, e, i) {
      "use strict";
      i.d(e, {
        $: function () {
          return a;
        },
      });
      var n = i(2038),
        r = i(3257),
        s = i(6002),
        o = i(2808);
      let a = {
        test: (t) => o.m.test(t) || r.$.test(t) || s.J.test(t),
        parse: (t) =>
          o.m.test(t)
            ? o.m.parse(t)
            : s.J.test(t)
            ? s.J.parse(t)
            : r.$.parse(t),
        transform: (t) =>
          (0, n.HD)(t)
            ? t
            : t.hasOwnProperty("red")
            ? o.m.transform(t)
            : s.J.transform(t),
      };
    },
    2808: function (t, e, i) {
      "use strict";
      i.d(e, {
        m: function () {
          return u;
        },
      });
      var n = i(3021),
        r = i(2980),
        s = i(2038),
        o = i(686);
      let a = (t) => (0, n.u)(0, 255, t),
        l = { ...r.Rx, transform: (t) => Math.round(a(t)) },
        u = {
          test: (0, o.i)("rgb", "red"),
          parse: (0, o.d)("red", "green", "blue"),
          transform: ({ red: t, green: e, blue: i, alpha: n = 1 }) =>
            "rgba(" +
            l.transform(t) +
            ", " +
            l.transform(e) +
            ", " +
            l.transform(i) +
            ", " +
            (0, s.Nw)(r.Fq.transform(n)) +
            ")",
        };
    },
    686: function (t, e, i) {
      "use strict";
      i.d(e, {
        d: function () {
          return s;
        },
        i: function () {
          return r;
        },
      });
      var n = i(2038);
      let r = (t, e) => (i) =>
          !!(
            ((0, n.HD)(i) && n.mj.test(i) && i.startsWith(t)) ||
            (e && Object.prototype.hasOwnProperty.call(i, e))
          ),
        s = (t, e, i) => (r) => {
          if (!(0, n.HD)(r)) return r;
          let [s, o, a, l] = r.match(n.KP);
          return {
            [t]: parseFloat(s),
            [e]: parseFloat(o),
            [i]: parseFloat(a),
            alpha: void 0 !== l ? parseFloat(l) : 1,
          };
        };
    },
    4875: function (t, e, i) {
      "use strict";
      i.d(e, {
        h: function () {
          return l;
        },
      });
      var n = i(9155),
        r = i(2038);
      let s = new Set(["brightness", "contrast", "saturate", "opacity"]);
      function o(t) {
        let [e, i] = t.slice(0, -1).split("(");
        if ("drop-shadow" === e) return t;
        let [n] = i.match(r.KP) || [];
        if (!n) return t;
        let o = i.replace(n, ""),
          a = s.has(e) ? 1 : 0;
        return n !== i && (a *= 100), e + "(" + a + o + ")";
      }
      let a = /([a-z-]*)\(.*?\)/g,
        l = {
          ...n.P,
          getAnimatableNone: (t) => {
            let e = t.match(a);
            return e ? e.map(o).join(" ") : t;
          },
        };
    },
    9155: function (t, e, i) {
      "use strict";
      i.d(e, {
        P: function () {
          return v;
        },
        V: function () {
          return d;
        },
      });
      var n = i(417),
        r = i(6977),
        s = i(2199),
        o = i(2980),
        a = i(2038);
      let l = { regex: n.Xp, countKey: "Vars", token: "${v}", parse: r.Z },
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
      function c(t, { regex: e, countKey: i, token: n, parse: r }) {
        let s = t.tokenised.match(e);
        s &&
          ((t["num" + i] = s.length),
          (t.tokenised = t.tokenised.replace(e, n)),
          t.values.push(...s.map(r)));
      }
      function d(t) {
        let e = t.toString(),
          i = {
            value: e,
            tokenised: e,
            values: [],
            numVars: 0,
            numColors: 0,
            numNumbers: 0,
          };
        return i.value.includes("var(--") && c(i, l), c(i, u), c(i, h), i;
      }
      function f(t) {
        return d(t).values;
      }
      function p(t) {
        let { values: e, numColors: i, numVars: n, tokenised: r } = d(t),
          o = e.length;
        return (t) => {
          let e = r;
          for (let r = 0; r < o; r++)
            e =
              r < n
                ? e.replace(l.token, t[r])
                : r < n + i
                ? e.replace(u.token, s.$.transform(t[r]))
                : e.replace(h.token, (0, a.Nw)(t[r]));
          return e;
        };
      }
      let m = (t) => ("number" == typeof t ? 0 : t),
        v = {
          test: function (t) {
            var e, i;
            return (
              isNaN(t) &&
              (0, a.HD)(t) &&
              ((null === (e = t.match(a.KP)) || void 0 === e
                ? void 0
                : e.length) || 0) +
                ((null === (i = t.match(a.dA)) || void 0 === i
                  ? void 0
                  : i.length) || 0) >
                0
            );
          },
          parse: f,
          createTransformer: p,
          getAnimatableNone: function (t) {
            let e = f(t),
              i = p(t);
            return i(e.map(m));
          },
        };
    },
    2980: function (t, e, i) {
      "use strict";
      i.d(e, {
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
      var n = i(3021);
      let r = {
          test: (t) => "number" == typeof t,
          parse: parseFloat,
          transform: (t) => t,
        },
        s = { ...r, transform: (t) => (0, n.u)(0, 1, t) },
        o = { ...r, default: 1 };
    },
    3681: function (t, e, i) {
      "use strict";
      i.d(e, {
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
      var n = i(2038);
      let r = (t) => ({
          test: (e) =>
            (0, n.HD)(e) && e.endsWith(t) && 1 === e.split(" ").length,
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
    2038: function (t, e, i) {
      "use strict";
      i.d(e, {
        HD: function () {
          return a;
        },
        KP: function () {
          return r;
        },
        Nw: function () {
          return n;
        },
        dA: function () {
          return s;
        },
        mj: function () {
          return o;
        },
      });
      let n = (t) => Math.round(1e5 * t) / 1e5,
        r = /(-)?([\d]*\.?[\d])+/g,
        s =
          /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
        o =
          /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
      function a(t) {
        return "string" == typeof t;
      }
    },
    3227: function (t, e, i) {
      "use strict";
      i.d(e, {
        L: function () {
          return r;
        },
      });
      var n = i(5735);
      function r(t) {
        return !!((0, n.i)(t) && t.add);
      }
    },
    5735: function (t, e, i) {
      "use strict";
      i.d(e, {
        i: function () {
          return n;
        },
      });
      let n = (t) => !!(t && t.getVelocity);
    },
  },
  function (t) {
    _N_E = t((t.s = 8214));
  },
]);
