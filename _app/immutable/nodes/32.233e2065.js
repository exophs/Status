import {
    S as me,
    i as ge,
    s as _e,
    C as Ze,
    K as Ae,
    k as w,
    a as D,
    l as $,
    m as A,
    c as T,
    h as d,
    n as g,
    p as Y,
    N as ht,
    b as k,
    G as b,
    P as lt,
    at as Al,
    a8 as ji,
    D as Qe,
    E as Ke,
    F as et,
    L as Ye,
    a9 as Vi,
    g as _,
    d as E,
    T as El,
    W as Je,
    I as zt,
    X as Me,
    e as re,
    v as ne,
    f as ie,
    y as O,
    z as q,
    A as j,
    M as st,
    B as V,
    w as Te,
    Y as Fe,
    Z as Le,
    H as se,
    q as J,
    r as X,
    _ as De,
    o as Hi,
    am as yl,
    ai as Sl,
    ar as Il,
    $ as ue,
    u as fe,
    x as ve,
    a0 as pt,
    a1 as mt
} from "../chunks/index.eaa2c7e1.js";
import {
    I as wt
} from "../chunks/Icon.46a873e3.js";
import {
    u as Ui
} from "../chunks/useActions.76e62c48.js";
import {
    r as xl
} from "../chunks/reactiveContext.f2326b52.js";
import {
    c as Nt,
    b as Cl
} from "../chunks/utils.d9c7aaa9.js";
import {
    R as Oe,
    T as je,
    a as Ve
} from "../chunks/index.0f3c41b7.js";
import {
    f as Rl,
    a as Ge,
    g as gt
} from "../chunks/crypto.1560607d.js";
import {
    f as Dl
} from "../chunks/index.fe399799.js";
import {
    B as Wt
} from "../chunks/index.59d1b34e.js";
import {
    g as zi,
    c as _t
} from "../chunks/_commonjsHelpers.23102255.js";
import {
    d as Tl
} from "../chunks/toast.8b0d2530.js";

function Fl(l) {
    let e, n, t, i, s, r, o, a, c, h, u;
    const f = l[9].default,
        p = Ze(f, l, l[8], null);
    let m = [{
            type: "button"
        }, {
            role: "checkbox"
        }, {
            "aria-checked": s = qe(l[0]) ? "mixed" : l[0]
        }, {
            "aria-required": l[2]
        }, {
            "data-state": r = bt(l[5].checked)
        }, {
            "data-disabled": o = l[1] ? "" : void 0
        }, {
            disabled: l[1]
        }, {
            value: l[4]
        }, l[7]],
        v = {};
    for (let y = 0; y < m.length; y += 1) v = Ae(v, m[y]);
    return {
        c() {
            e = w("button"), p && p.c(), n = D(), t = w("input"), this.h()
        },
        l(y) {
            e = $(y, "BUTTON", {
                type: !0,
                role: !0,
                "aria-checked": !0,
                "aria-required": !0,
                "data-state": !0,
                "data-disabled": !0
            });
            var I = A(e);
            p && p.l(I), n = T(I), t = $(I, "INPUT", {
                type: !0,
                "aria-hidden": !0,
                tabindex: !0,
                name: !0
            }), I.forEach(d), this.h()
        },
        h() {
            g(t, "type", "checkbox"), g(t, "aria-hidden", "true"), t.hidden = !0, g(t, "tabindex", -1), g(t, "name", l[3]), t.value = l[4], t.checked = i = qe(l[0]) ? !1 : l[0], t.required = l[2], t.disabled = l[1], Y(t, "position", "absolute"), Y(t, "pointer-events", "none"), Y(t, "opacity", "0"), Y(t, "margin", "0"), Y(t, "transform", "translateX(-100%)"), ht(e, v)
        },
        m(y, I) {
            k(y, e, I), p && p.m(e, null), b(e, n), b(e, t), e.autofocus && e.focus(), c = !0, h || (u = [lt(e, "click", Al(l[10])), lt(e, "keydown", Ml), ji(a = Ui.call(null, e, l[7].use))], h = !0)
        },
        p(y, [I]) {
            p && p.p && (!c || I & 256) && Qe(p, f, y, y[8], c ? et(f, y[8], I, null) : Ke(y[8]), null), (!c || I & 8) && g(t, "name", y[3]), (!c || I & 16) && (t.value = y[4]), (!c || I & 1 && i !== (i = qe(y[0]) ? !1 : y[0])) && (t.checked = i), (!c || I & 4) && (t.required = y[2]), (!c || I & 2) && (t.disabled = y[1]), ht(e, v = Ye(m, [{
                type: "button"
            }, {
                role: "checkbox"
            }, (!c || I & 1 && s !== (s = qe(y[0]) ? "mixed" : y[0])) && {
                "aria-checked": s
            }, (!c || I & 4) && {
                "aria-required": y[2]
            }, (!c || I & 32 && r !== (r = bt(y[5].checked))) && {
                "data-state": r
            }, (!c || I & 2 && o !== (o = y[1] ? "" : void 0)) && {
                "data-disabled": o
            }, (!c || I & 2) && {
                disabled: y[1]
            }, (!c || I & 16) && {
                value: y[4]
            }, I & 128 && y[7]])), a && Vi(a.update) && I & 128 && a.update.call(null, y[7].use)
        },
        i(y) {
            c || (_(p, y), c = !0)
        },
        o(y) {
            E(p, y), c = !1
        },
        d(y) {
            y && d(e), p && p.d(y), h = !1, El(u)
        }
    }
}
const Pt = {
        checked: !1,
        disabled: !1
    },
    {
        getContext: Ll,
        setContext: Nl
    } = xl(Pt),
    Pl = Ll;

function qe(l) {
    return l === "indeterminate"
}

function bt(l) {
    return qe(l) ? "indeterminate" : l ? "checked" : "unchecked"
}
const Ml = l => {
    l.key === "Enter" && l.preventDefault()
};

function Bl(l, e, n) {
    const t = ["checked", "disabled", "required", "name", "value"];
    let i = Je(e, t),
        s, {
            $$slots: r = {},
            $$scope: o
        } = e,
        {
            checked: a = Pt.checked
        } = e,
        {
            disabled: c = Pt.disabled
        } = e,
        {
            required: h = !1
        } = e,
        {
            name: u = ""
        } = e,
        {
            value: f = ""
        } = e;
    const p = Nl();
    zt(l, p, v => n(5, s = v));
    const m = () => {
        qe(a) ? n(0, a = !0) : n(0, a = !a)
    };
    return l.$$set = v => {
        e = Ae(Ae({}, e), Me(v)), n(7, i = Je(e, t)), "checked" in v && n(0, a = v.checked), "disabled" in v && n(1, c = v.disabled), "required" in v && n(2, h = v.required), "name" in v && n(3, u = v.name), "value" in v && n(4, f = v.value), "$$scope" in v && n(8, o = v.$$scope)
    }, l.$$.update = () => {
        l.$$.dirty & 3 && p.set({
            checked: a,
            disabled: c
        })
    }, [a, c, h, u, f, s, p, i, o, r, m]
}
class Ol extends me {
    constructor(e) {
        super(), ge(this, e, Bl, Fl, _e, {
            checked: 0,
            disabled: 1,
            required: 2,
            name: 3,
            value: 4
        })
    }
}

function en(l) {
    let e, n, t, i, s, r, o;
    const a = l[4].default,
        c = Ze(a, l, l[3], null);
    let h = [l[2], {
            "data-state": n = bt(l[0].checked)
        }, {
            "data-disabled": t = l[0].disabled ? "" : void 0
        }],
        u = {};
    for (let f = 0; f < h.length; f += 1) u = Ae(u, h[f]);
    return {
        c() {
            e = w("span"), c && c.c(), this.h()
        },
        l(f) {
            e = $(f, "SPAN", {
                "data-state": !0,
                "data-disabled": !0
            });
            var p = A(e);
            c && c.l(p), p.forEach(d), this.h()
        },
        h() {
            ht(e, u), Y(e, "pointer-events", "none")
        },
        m(f, p) {
            k(f, e, p), c && c.m(e, null), s = !0, r || (o = ji(i = Ui.call(null, e, l[2].use)), r = !0)
        },
        p(f, p) {
            c && c.p && (!s || p & 8) && Qe(c, a, f, f[3], s ? et(a, f[3], p, null) : Ke(f[3]), null), ht(e, u = Ye(h, [p & 4 && f[2], (!s || p & 1 && n !== (n = bt(f[0].checked))) && {
                "data-state": n
            }, (!s || p & 1 && t !== (t = f[0].disabled ? "" : void 0)) && {
                "data-disabled": t
            }])), i && Vi(i.update) && p & 4 && i.update.call(null, f[2].use), Y(e, "pointer-events", "none")
        },
        i(f) {
            s || (_(c, f), s = !0)
        },
        o(f) {
            E(c, f), s = !1
        },
        d(f) {
            f && d(e), c && c.d(f), r = !1, o()
        }
    }
}

function jl(l) {
    let e = qe(l[0].checked) || !!l[0].checked,
        n, t, i = e && en(l);
    return {
        c() {
            i && i.c(), n = re()
        },
        l(s) {
            i && i.l(s), n = re()
        },
        m(s, r) {
            i && i.m(s, r), k(s, n, r), t = !0
        },
        p(s, [r]) {
            r & 1 && (e = qe(s[0].checked) || !!s[0].checked), e ? i ? (i.p(s, r), r & 1 && _(i, 1)) : (i = en(s), i.c(), _(i, 1), i.m(n.parentNode, n)) : i && (ne(), E(i, 1, 1, () => {
                i = null
            }), ie())
        },
        i(s) {
            t || (_(i), t = !0)
        },
        o(s) {
            E(i), t = !1
        },
        d(s) {
            i && i.d(s), s && d(n)
        }
    }
}

function Vl(l, e, n) {
    const t = [];
    let i = Je(e, t),
        s, {
            $$slots: r = {},
            $$scope: o
        } = e;
    const a = Pl();
    return zt(l, a, c => n(0, s = c)), l.$$set = c => {
        e = Ae(Ae({}, e), Me(c)), n(2, i = Je(e, t)), "$$scope" in c && n(3, o = c.$$scope)
    }, [s, a, i, o, r]
}
class Hl extends me {
    constructor(e) {
        super(), ge(this, e, Vl, jl, _e, {})
    }
}
const Wi = {
    Root: Ol,
    Indicator: Hl
};

function Ul(l) {
    let e;
    const n = l[2].default,
        t = Ze(n, l, l[3], null);
    return {
        c() {
            t && t.c()
        },
        l(i) {
            t && t.l(i)
        },
        m(i, s) {
            t && t.m(i, s), e = !0
        },
        p(i, s) {
            t && t.p && (!e || s & 8) && Qe(t, n, i, i[3], e ? et(n, i[3], s, null) : Ke(i[3]), null)
        },
        i(i) {
            e || (_(t, i), e = !0)
        },
        o(i) {
            E(t, i), e = !1
        },
        d(i) {
            t && t.d(i)
        }
    }
}

function zl(l) {
    let e, n;
    const t = [{
        name: "check"
    }, l[1], {
        iconNode: l[0]
    }];
    let i = {
        $$slots: {
            default: [Ul]
        },
        $$scope: {
            ctx: l
        }
    };
    for (let s = 0; s < t.length; s += 1) i = Ae(i, t[s]);
    return e = new wt({
        props: i
    }), {
        c() {
            O(e.$$.fragment)
        },
        l(s) {
            q(e.$$.fragment, s)
        },
        m(s, r) {
            j(e, s, r), n = !0
        },
        p(s, [r]) {
            const o = r & 3 ? Ye(t, [t[0], r & 2 && st(s[1]), r & 1 && {
                iconNode: s[0]
            }]) : {};
            r & 8 && (o.$$scope = {
                dirty: r,
                ctx: s
            }), e.$set(o)
        },
        i(s) {
            n || (_(e.$$.fragment, s), n = !0)
        },
        o(s) {
            E(e.$$.fragment, s), n = !1
        },
        d(s) {
            V(e, s)
        }
    }
}

function Wl(l, e, n) {
    let {
        $$slots: t = {},
        $$scope: i
    } = e;
    const s = [
        ["polyline", {
            points: "20 6 9 17 4 12"
        }]
    ];
    return l.$$set = r => {
        n(1, e = Ae(Ae({}, e), Me(r))), "$$scope" in r && n(3, i = r.$$scope)
    }, e = Me(e), [s, e, t, i]
}
class ql extends me {
    constructor(e) {
        super(), ge(this, e, Wl, zl, _e, {})
    }
}
const Gl = ql;

function Yl(l) {
    let e;
    const n = l[2].default,
        t = Ze(n, l, l[3], null);
    return {
        c() {
            t && t.c()
        },
        l(i) {
            t && t.l(i)
        },
        m(i, s) {
            t && t.m(i, s), e = !0
        },
        p(i, s) {
            t && t.p && (!e || s & 8) && Qe(t, n, i, i[3], e ? et(n, i[3], s, null) : Ke(i[3]), null)
        },
        i(i) {
            e || (_(t, i), e = !0)
        },
        o(i) {
            E(t, i), e = !1
        },
        d(i) {
            t && t.d(i)
        }
    }
}

function Jl(l) {
    let e, n;
    const t = [{
        name: "eye"
    }, l[1], {
        iconNode: l[0]
    }];
    let i = {
        $$slots: {
            default: [Yl]
        },
        $$scope: {
            ctx: l
        }
    };
    for (let s = 0; s < t.length; s += 1) i = Ae(i, t[s]);
    return e = new wt({
        props: i
    }), {
        c() {
            O(e.$$.fragment)
        },
        l(s) {
            q(e.$$.fragment, s)
        },
        m(s, r) {
            j(e, s, r), n = !0
        },
        p(s, [r]) {
            const o = r & 3 ? Ye(t, [t[0], r & 2 && st(s[1]), r & 1 && {
                iconNode: s[0]
            }]) : {};
            r & 8 && (o.$$scope = {
                dirty: r,
                ctx: s
            }), e.$set(o)
        },
        i(s) {
            n || (_(e.$$.fragment, s), n = !0)
        },
        o(s) {
            E(e.$$.fragment, s), n = !1
        },
        d(s) {
            V(e, s)
        }
    }
}

function Xl(l, e, n) {
    let {
        $$slots: t = {},
        $$scope: i
    } = e;
    const s = [
        ["path", {
            d: "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"
        }],
        ["circle", {
            cx: "12",
            cy: "12",
            r: "3"
        }]
    ];
    return l.$$set = r => {
        n(1, e = Ae(Ae({}, e), Me(r))), "$$scope" in r && n(3, i = r.$$scope)
    }, e = Me(e), [s, e, t, i]
}
class Zl extends me {
    constructor(e) {
        super(), ge(this, e, Xl, Jl, _e, {})
    }
}
const Ql = Zl;

function Kl(l) {
    let e;
    const n = l[2].default,
        t = Ze(n, l, l[3], null);
    return {
        c() {
            t && t.c()
        },
        l(i) {
            t && t.l(i)
        },
        m(i, s) {
            t && t.m(i, s), e = !0
        },
        p(i, s) {
            t && t.p && (!e || s & 8) && Qe(t, n, i, i[3], e ? et(n, i[3], s, null) : Ke(i[3]), null)
        },
        i(i) {
            e || (_(t, i), e = !0)
        },
        o(i) {
            E(t, i), e = !1
        },
        d(i) {
            t && t.d(i)
        }
    }
}

function er(l) {
    let e, n;
    const t = [{
        name: "volume-2"
    }, l[1], {
        iconNode: l[0]
    }];
    let i = {
        $$slots: {
            default: [Kl]
        },
        $$scope: {
            ctx: l
        }
    };
    for (let s = 0; s < t.length; s += 1) i = Ae(i, t[s]);
    return e = new wt({
        props: i
    }), {
        c() {
            O(e.$$.fragment)
        },
        l(s) {
            q(e.$$.fragment, s)
        },
        m(s, r) {
            j(e, s, r), n = !0
        },
        p(s, [r]) {
            const o = r & 3 ? Ye(t, [t[0], r & 2 && st(s[1]), r & 1 && {
                iconNode: s[0]
            }]) : {};
            r & 8 && (o.$$scope = {
                dirty: r,
                ctx: s
            }), e.$set(o)
        },
        i(s) {
            n || (_(e.$$.fragment, s), n = !0)
        },
        o(s) {
            E(e.$$.fragment, s), n = !1
        },
        d(s) {
            V(e, s)
        }
    }
}

function tr(l, e, n) {
    let {
        $$slots: t = {},
        $$scope: i
    } = e;
    const s = [
        ["polygon", {
            points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5"
        }],
        ["path", {
            d: "M15.54 8.46a5 5 0 0 1 0 7.07"
        }],
        ["path", {
            d: "M19.07 4.93a10 10 0 0 1 0 14.14"
        }]
    ];
    return l.$$set = r => {
        n(1, e = Ae(Ae({}, e), Me(r))), "$$scope" in r && n(3, i = r.$$scope)
    }, e = Me(e), [s, e, t, i]
}
class nr extends me {
    constructor(e) {
        super(), ge(this, e, tr, er, _e, {})
    }
}
const ir = nr;

function lr(l) {
    let e;
    const n = l[2].default,
        t = Ze(n, l, l[3], null);
    return {
        c() {
            t && t.c()
        },
        l(i) {
            t && t.l(i)
        },
        m(i, s) {
            t && t.m(i, s), e = !0
        },
        p(i, s) {
            t && t.p && (!e || s & 8) && Qe(t, n, i, i[3], e ? et(n, i[3], s, null) : Ke(i[3]), null)
        },
        i(i) {
            e || (_(t, i), e = !0)
        },
        o(i) {
            E(t, i), e = !1
        },
        d(i) {
            t && t.d(i)
        }
    }
}

function rr(l) {
    let e, n;
    const t = [{
        name: "volume-x"
    }, l[1], {
        iconNode: l[0]
    }];
    let i = {
        $$slots: {
            default: [lr]
        },
        $$scope: {
            ctx: l
        }
    };
    for (let s = 0; s < t.length; s += 1) i = Ae(i, t[s]);
    return e = new wt({
        props: i
    }), {
        c() {
            O(e.$$.fragment)
        },
        l(s) {
            q(e.$$.fragment, s)
        },
        m(s, r) {
            j(e, s, r), n = !0
        },
        p(s, [r]) {
            const o = r & 3 ? Ye(t, [t[0], r & 2 && st(s[1]), r & 1 && {
                iconNode: s[0]
            }]) : {};
            r & 8 && (o.$$scope = {
                dirty: r,
                ctx: s
            }), e.$set(o)
        },
        i(s) {
            n || (_(e.$$.fragment, s), n = !0)
        },
        o(s) {
            E(e.$$.fragment, s), n = !1
        },
        d(s) {
            V(e, s)
        }
    }
}

function sr(l, e, n) {
    let {
        $$slots: t = {},
        $$scope: i
    } = e;
    const s = [
        ["polygon", {
            points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5"
        }],
        ["line", {
            x1: "22",
            x2: "16",
            y1: "9",
            y2: "15"
        }],
        ["line", {
            x1: "16",
            x2: "22",
            y1: "9",
            y2: "15"
        }]
    ];
    return l.$$set = r => {
        n(1, e = Ae(Ae({}, e), Me(r))), "$$scope" in r && n(3, i = r.$$scope)
    }, e = Me(e), [s, e, t, i]
}
class or extends me {
    constructor(e) {
        super(), ge(this, e, sr, rr, _e, {})
    }
}
const ar = or;

function cr(l) {
    let e, n;
    return e = new Gl({
        props: {
            class: "h-4 w-4"
        }
    }), {
        c() {
            O(e.$$.fragment)
        },
        l(t) {
            q(e.$$.fragment, t)
        },
        m(t, i) {
            j(e, t, i), n = !0
        },
        p: se,
        i(t) {
            n || (_(e.$$.fragment, t), n = !0)
        },
        o(t) {
            E(e.$$.fragment, t), n = !1
        },
        d(t) {
            V(e, t)
        }
    }
}

function fr(l) {
    let e, n;
    return e = new Wi.Indicator({
        props: {
            class: Nt("flex items-center justify-center text-current"),
            $$slots: {
                default: [cr]
            },
            $$scope: {
                ctx: l
            }
        }
    }), {
        c() {
            O(e.$$.fragment)
        },
        l(t) {
            q(e.$$.fragment, t)
        },
        m(t, i) {
            j(e, t, i), n = !0
        },
        p(t, i) {
            const s = {};
            i & 16 && (s.$$scope = {
                dirty: i,
                ctx: t
            }), e.$set(s)
        },
        i(t) {
            n || (_(e.$$.fragment, t), n = !0)
        },
        o(t) {
            E(e.$$.fragment, t), n = !1
        },
        d(t) {
            V(e, t)
        }
    }
}

function ur(l) {
    let e, n, t;
    const i = [{
        class: Nt("peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground", l[1])
    }, l[2]];

    function s(o) {
        l[3](o)
    }
    let r = {
        $$slots: {
            default: [fr]
        },
        $$scope: {
            ctx: l
        }
    };
    for (let o = 0; o < i.length; o += 1) r = Ae(r, i[o]);
    return l[0] !== void 0 && (r.checked = l[0]), e = new Wi.Root({
        props: r
    }), Te.push(() => Fe(e, "checked", s)), {
        c() {
            O(e.$$.fragment)
        },
        l(o) {
            q(e.$$.fragment, o)
        },
        m(o, a) {
            j(e, o, a), t = !0
        },
        p(o, [a]) {
            const c = a & 6 ? Ye(i, [a & 2 && {
                class: Nt("peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground", o[1])
            }, a & 4 && st(o[2])]) : {};
            a & 16 && (c.$$scope = {
                dirty: a,
                ctx: o
            }), !n && a & 1 && (n = !0, c.checked = o[0], Le(() => n = !1)), e.$set(c)
        },
        i(o) {
            t || (_(e.$$.fragment, o), t = !0)
        },
        o(o) {
            E(e.$$.fragment, o), t = !1
        },
        d(o) {
            V(e, o)
        }
    }
}

function dr(l, e, n) {
    const t = ["class", "checked"];
    let i = Je(e, t),
        {
            class: s = void 0
        } = e,
        {
            checked: r = void 0
        } = e;

    function o(a) {
        r = a, n(0, r)
    }
    return l.$$set = a => {
        e = Ae(Ae({}, e), Me(a)), n(2, i = Je(e, t)), "class" in a && n(1, s = a.class), "checked" in a && n(0, r = a.checked)
    }, [r, s, i, o]
}
class Pe extends me {
    constructor(e) {
        super(), ge(this, e, dr, ur, _e, {
            class: 1,
            checked: 0
        })
    }
}

function hr(l) {
    let e, n, t, i, s, r, o, a, c;

    function h(f) {
        l[2](f)
    }
    let u = {
        name: "effects." + l[1] + ".enabled"
    };
    return l[0] !== void 0 && (u.checked = l[0]), o = new Pe({
        props: u
    }), Te.push(() => Fe(o, "checked", h)), {
        c() {
            e = w("div"), n = w("div"), t = w("p"), i = J("Snow"), s = D(), r = w("div"), O(o.$$.fragment), this.h()
        },
        l(f) {
            e = $(f, "DIV", {
                class: !0
            });
            var p = A(e);
            n = $(p, "DIV", {
                class: !0
            });
            var m = A(n);
            t = $(m, "P", {
                class: !0
            });
            var v = A(t);
            i = X(v, "Snow"), v.forEach(d), s = T(m), r = $(m, "DIV", {
                class: !0
            });
            var y = A(r);
            q(o.$$.fragment, y), y.forEach(d), m.forEach(d), p.forEach(d), this.h()
        },
        h() {
            g(t, "class", "text-sm font-medium leading-none"), g(r, "class", "flex items-center space-x-2"), g(n, "class", "justify-between flex items-center space-x-4 w-full"), g(e, "class", "flex items-center space-x-4 rounded-md p-4 hover:bg-accent hover:text-accent-foreground")
        },
        m(f, p) {
            k(f, e, p), b(e, n), b(n, t), b(t, i), b(n, s), b(n, r), j(o, r, null), c = !0
        },
        p(f, [p]) {
            const m = {};
            p & 2 && (m.name = "effects." + f[1] + ".enabled"), !a && p & 1 && (a = !0, m.checked = f[0], Le(() => a = !1)), o.$set(m)
        },
        i(f) {
            c || (_(o.$$.fragment, f), c = !0)
        },
        o(f) {
            E(o.$$.fragment, f), c = !1
        },
        d(f) {
            f && d(e), V(o)
        }
    }
}

function pr(l, e, n) {
    let {
        enabled: t = !1
    } = e, {
        flag: i
    } = e;

    function s(r) {
        t = r, n(0, t)
    }
    return l.$$set = r => {
        "enabled" in r && n(0, t = r.enabled), "flag" in r && n(1, i = r.flag)
    }, [t, i, s]
}
let mr = class extends me {
    constructor(e) {
        super(), ge(this, e, pr, hr, _e, {
            enabled: 0,
            flag: 1
        })
    }
};

function gr(l) {
    let e, n, t, i, s, r, o, a, c;

    function h(f) {
        l[2](f)
    }
    let u = {
        name: "effects." + l[1] + ".enabled"
    };
    return l[0] !== void 0 && (u.checked = l[0]), o = new Pe({
        props: u
    }), Te.push(() => Fe(o, "checked", h)), {
        c() {
            e = w("div"), n = w("div"), t = w("p"), i = J("Title Sparkle"), s = D(), r = w("div"), O(o.$$.fragment), this.h()
        },
        l(f) {
            e = $(f, "DIV", {
                class: !0
            });
            var p = A(e);
            n = $(p, "DIV", {
                class: !0
            });
            var m = A(n);
            t = $(m, "P", {
                class: !0
            });
            var v = A(t);
            i = X(v, "Title Sparkle"), v.forEach(d), s = T(m), r = $(m, "DIV", {
                class: !0
            });
            var y = A(r);
            q(o.$$.fragment, y), y.forEach(d), m.forEach(d), p.forEach(d), this.h()
        },
        h() {
            g(t, "class", "text-sm font-medium leading-none"), g(r, "class", "flex items-center space-x-2"), g(n, "class", "justify-between flex items-center space-x-4 w-full"), g(e, "class", "flex flex-col items-center space-x-4 rounded-md p-4 hover:bg-accent hover:text-accent-foreground")
        },
        m(f, p) {
            k(f, e, p), b(e, n), b(n, t), b(t, i), b(n, s), b(n, r), j(o, r, null), c = !0
        },
        p(f, [p]) {
            const m = {};
            p & 2 && (m.name = "effects." + f[1] + ".enabled"), !a && p & 1 && (a = !0, m.checked = f[0], Le(() => a = !1)), o.$set(m)
        },
        i(f) {
            c || (_(o.$$.fragment, f), c = !0)
        },
        o(f) {
            E(o.$$.fragment, f), c = !1
        },
        d(f) {
            f && d(e), V(o)
        }
    }
}

function _r(l, e, n) {
    let {
        enabled: t = !1
    } = e, {
        flag: i
    } = e;

    function s(r) {
        t = r, n(0, t)
    }
    return l.$$set = r => {
        "enabled" in r && n(0, t = r.enabled), "flag" in r && n(1, i = r.flag)
    }, [t, i, s]
}
let br = class extends me {
    constructor(e) {
        super(), ge(this, e, _r, gr, _e, {
            enabled: 0,
            flag: 1
        })
    }
};

function vr(l) {
    let e, n, t, i, s, r, o, a, c;

    function h(f) {
        l[2](f)
    }
    let u = {
        name: "effects." + l[1] + ".enabled"
    };
    return l[0] !== void 0 && (u.checked = l[0]), o = new Pe({
        props: u
    }), Te.push(() => Fe(o, "checked", h)), {
        c() {
            e = w("div"), n = w("div"), t = w("p"), i = J("Purple Title Glow"), s = D(), r = w("div"), O(o.$$.fragment), this.h()
        },
        l(f) {
            e = $(f, "DIV", {
                class: !0
            });
            var p = A(e);
            n = $(p, "DIV", {
                class: !0
            });
            var m = A(n);
            t = $(m, "P", {
                class: !0
            });
            var v = A(t);
            i = X(v, "Purple Title Glow"), v.forEach(d), s = T(m), r = $(m, "DIV", {
                class: !0
            });
            var y = A(r);
            q(o.$$.fragment, y), y.forEach(d), m.forEach(d), p.forEach(d), this.h()
        },
        h() {
            g(t, "class", "text-sm font-medium leading-none"), g(r, "class", "flex items-center space-x-2"), g(n, "class", "justify-between flex items-center space-x-4 w-full"), g(e, "class", "flex items-center space-x-4 rounded-md p-4 hover:bg-accent hover:text-accent-foreground")
        },
        m(f, p) {
            k(f, e, p), b(e, n), b(n, t), b(t, i), b(n, s), b(n, r), j(o, r, null), c = !0
        },
        p(f, [p]) {
            const m = {};
            p & 2 && (m.name = "effects." + f[1] + ".enabled"), !a && p & 1 && (a = !0, m.checked = f[0], Le(() => a = !1)), o.$set(m)
        },
        i(f) {
            c || (_(o.$$.fragment, f), c = !0)
        },
        o(f) {
            E(o.$$.fragment, f), c = !1
        },
        d(f) {
            f && d(e), V(o)
        }
    }
}

function wr(l, e, n) {
    let {
        enabled: t = !1
    } = e, {
        flag: i
    } = e;

    function s(r) {
        t = r, n(0, t)
    }
    return l.$$set = r => {
        "enabled" in r && n(0, t = r.enabled), "flag" in r && n(1, i = r.flag)
    }, [t, i, s]
}
class $r extends me {
    constructor(e) {
        super(), ge(this, e, wr, vr, _e, {
            enabled: 0,
            flag: 1
        })
    }
}

function kr(l) {
    let e, n, t, i, s, r, o, a, c;

    function h(f) {
        l[2](f)
    }
    let u = {
        name: "effects." + l[1] + ".enabled"
    };
    return l[0] !== void 0 && (u.checked = l[0]), o = new Pe({
        props: u
    }), Te.push(() => Fe(o, "checked", h)), {
        c() {
            e = w("div"), n = w("div"), t = w("p"), i = J("Black Title Glow"), s = D(), r = w("div"), O(o.$$.fragment), this.h()
        },
        l(f) {
            e = $(f, "DIV", {
                class: !0
            });
            var p = A(e);
            n = $(p, "DIV", {
                class: !0
            });
            var m = A(n);
            t = $(m, "P", {
                class: !0
            });
            var v = A(t);
            i = X(v, "Black Title Glow"), v.forEach(d), s = T(m), r = $(m, "DIV", {
                class: !0
            });
            var y = A(r);
            q(o.$$.fragment, y), y.forEach(d), m.forEach(d), p.forEach(d), this.h()
        },
        h() {
            g(t, "class", "text-sm font-medium leading-none"), g(r, "class", "flex items-center space-x-2"), g(n, "class", "justify-between flex items-center space-x-4 w-full"), g(e, "class", "flex items-center space-x-4 rounded-md p-4 hover:bg-accent hover:text-accent-foreground")
        },
        m(f, p) {
            k(f, e, p), b(e, n), b(n, t), b(t, i), b(n, s), b(n, r), j(o, r, null), c = !0
        },
        p(f, [p]) {
            const m = {};
            p & 2 && (m.name = "effects." + f[1] + ".enabled"), !a && p & 1 && (a = !0, m.checked = f[0], Le(() => a = !1)), o.$set(m)
        },
        i(f) {
            c || (_(o.$$.fragment, f), c = !0)
        },
        o(f) {
            E(o.$$.fragment, f), c = !1
        },
        d(f) {
            f && d(e), V(o)
        }
    }
}

function Ar(l, e, n) {
    let {
        enabled: t = !1
    } = e, {
        flag: i
    } = e;

    function s(r) {
        t = r, n(0, t)
    }
    return l.$$set = r => {
        "enabled" in r && n(0, t = r.enabled), "flag" in r && n(1, i = r.flag)
    }, [t, i, s]
}
class Er extends me {
    constructor(e) {
        super(), ge(this, e, Ar, kr, _e, {
            enabled: 0,
            flag: 1
        })
    }
}

function yr(l) {
    let e, n, t, i, s, r, o, a, c;

    function h(f) {
        l[2](f)
    }
    let u = {
        name: "effects." + l[1] + ".enabled"
    };
    return l[0] !== void 0 && (u.checked = l[0]), o = new Pe({
        props: u
    }), Te.push(() => Fe(o, "checked", h)), {
        c() {
            e = w("div"), n = w("div"), t = w("p"), i = J("Blue Title Glow"), s = D(), r = w("div"), O(o.$$.fragment), this.h()
        },
        l(f) {
            e = $(f, "DIV", {
                class: !0
            });
            var p = A(e);
            n = $(p, "DIV", {
                class: !0
            });
            var m = A(n);
            t = $(m, "P", {
                class: !0
            });
            var v = A(t);
            i = X(v, "Blue Title Glow"), v.forEach(d), s = T(m), r = $(m, "DIV", {
                class: !0
            });
            var y = A(r);
            q(o.$$.fragment, y), y.forEach(d), m.forEach(d), p.forEach(d), this.h()
        },
        h() {
            g(t, "class", "text-sm font-medium leading-none"), g(r, "class", "flex items-center space-x-2"), g(n, "class", "justify-between flex items-center space-x-4 w-full"), g(e, "class", "flex items-center space-x-4 rounded-md p-4 hover:bg-accent hover:text-accent-foreground")
        },
        m(f, p) {
            k(f, e, p), b(e, n), b(n, t), b(t, i), b(n, s), b(n, r), j(o, r, null), c = !0
        },
        p(f, [p]) {
            const m = {};
            p & 2 && (m.name = "effects." + f[1] + ".enabled"), !a && p & 1 && (a = !0, m.checked = f[0], Le(() => a = !1)), o.$set(m)
        },
        i(f) {
            c || (_(o.$$.fragment, f), c = !0)
        },
        o(f) {
            E(o.$$.fragment, f), c = !1
        },
        d(f) {
            f && d(e), V(o)
        }
    }
}

function Sr(l, e, n) {
    let {
        enabled: t = !1
    } = e, {
        flag: i
    } = e;

    function s(r) {
        t = r, n(0, t)
    }
    return l.$$set = r => {
        "enabled" in r && n(0, t = r.enabled), "flag" in r && n(1, i = r.flag)
    }, [t, i, s]
}
class Ir extends me {
    constructor(e) {
        super(), ge(this, e, Sr, yr, _e, {
            enabled: 0,
            flag: 1
        })
    }
}

function xr(l) {
    let e, n, t, i, s, r, o, a, c;

    function h(f) {
        l[2](f)
    }
    let u = {
        name: "effects." + l[1] + ".enabled"
    };
    return l[0] !== void 0 && (u.checked = l[0]), o = new Pe({
        props: u
    }), Te.push(() => Fe(o, "checked", h)), {
        c() {
            e = w("div"), n = w("div"), t = w("p"), i = J("Green Title Glow"), s = D(), r = w("div"), O(o.$$.fragment), this.h()
        },
        l(f) {
            e = $(f, "DIV", {
                class: !0
            });
            var p = A(e);
            n = $(p, "DIV", {
                class: !0
            });
            var m = A(n);
            t = $(m, "P", {
                class: !0
            });
            var v = A(t);
            i = X(v, "Green Title Glow"), v.forEach(d), s = T(m), r = $(m, "DIV", {
                class: !0
            });
            var y = A(r);
            q(o.$$.fragment, y), y.forEach(d), m.forEach(d), p.forEach(d), this.h()
        },
        h() {
            g(t, "class", "text-sm font-medium leading-none"), g(r, "class", "flex items-center space-x-2"), g(n, "class", "justify-between flex items-center space-x-4 w-full"), g(e, "class", "flex items-center space-x-4 rounded-md p-4 hover:bg-accent hover:text-accent-foreground")
        },
        m(f, p) {
            k(f, e, p), b(e, n), b(n, t), b(t, i), b(n, s), b(n, r), j(o, r, null), c = !0
        },
        p(f, [p]) {
            const m = {};
            p & 2 && (m.name = "effects." + f[1] + ".enabled"), !a && p & 1 && (a = !0, m.checked = f[0], Le(() => a = !1)), o.$set(m)
        },
        i(f) {
            c || (_(o.$$.fragment, f), c = !0)
        },
        o(f) {
            E(o.$$.fragment, f), c = !1
        },
        d(f) {
            f && d(e), V(o)
        }
    }
}

function Cr(l, e, n) {
    let {
        enabled: t = !1
    } = e, {
        flag: i
    } = e;

    function s(r) {
        t = r, n(0, t)
    }
    return l.$$set = r => {
        "enabled" in r && n(0, t = r.enabled), "flag" in r && n(1, i = r.flag)
    }, [t, i, s]
}
class Rr extends me {
    constructor(e) {
        super(), ge(this, e, Cr, xr, _e, {
            enabled: 0,
            flag: 1
        })
    }
}

function Dr(l) {
    let e, n, t, i, s, r, o, a, c;

    function h(f) {
        l[2](f)
    }
    let u = {
        name: "effects." + l[1] + ".enabled"
    };
    return l[0] !== void 0 && (u.checked = l[0]), o = new Pe({
        props: u
    }), Te.push(() => Fe(o, "checked", h)), {
        c() {
            e = w("div"), n = w("div"), t = w("p"), i = J("Orange Title Glow"), s = D(), r = w("div"), O(o.$$.fragment), this.h()
        },
        l(f) {
            e = $(f, "DIV", {
                class: !0
            });
            var p = A(e);
            n = $(p, "DIV", {
                class: !0
            });
            var m = A(n);
            t = $(m, "P", {
                class: !0
            });
            var v = A(t);
            i = X(v, "Orange Title Glow"), v.forEach(d), s = T(m), r = $(m, "DIV", {
                class: !0
            });
            var y = A(r);
            q(o.$$.fragment, y), y.forEach(d), m.forEach(d), p.forEach(d), this.h()
        },
        h() {
            g(t, "class", "text-sm font-medium leading-none"), g(r, "class", "flex items-center space-x-2"), g(n, "class", "justify-between flex items-center space-x-4 w-full"), g(e, "class", "flex items-center space-x-4 rounded-md p-4 hover:bg-accent hover:text-accent-foreground")
        },
        m(f, p) {
            k(f, e, p), b(e, n), b(n, t), b(t, i), b(n, s), b(n, r), j(o, r, null), c = !0
        },
        p(f, [p]) {
            const m = {};
            p & 2 && (m.name = "effects." + f[1] + ".enabled"), !a && p & 1 && (a = !0, m.checked = f[0], Le(() => a = !1)), o.$set(m)
        },
        i(f) {
            c || (_(o.$$.fragment, f), c = !0)
        },
        o(f) {
            E(o.$$.fragment, f), c = !1
        },
        d(f) {
            f && d(e), V(o)
        }
    }
}

function Tr(l, e, n) {
    let {
        enabled: t = !1
    } = e, {
        flag: i
    } = e;

    function s(r) {
        t = r, n(0, t)
    }
    return l.$$set = r => {
        "enabled" in r && n(0, t = r.enabled), "flag" in r && n(1, i = r.flag)
    }, [t, i, s]
}
class Fr extends me {
    constructor(e) {
        super(), ge(this, e, Tr, Dr, _e, {
            enabled: 0,
            flag: 1
        })
    }
}

function Lr(l) {
    let e, n, t, i, s, r, o, a, c;

    function h(f) {
        l[2](f)
    }
    let u = {
        name: "effects." + l[1] + ".enabled"
    };
    return l[0] !== void 0 && (u.checked = l[0]), o = new Pe({
        props: u
    }), Te.push(() => Fe(o, "checked", h)), {
        c() {
            e = w("div"), n = w("div"), t = w("p"), i = J("Red Title Glow"), s = D(), r = w("div"), O(o.$$.fragment), this.h()
        },
        l(f) {
            e = $(f, "DIV", {
                class: !0
            });
            var p = A(e);
            n = $(p, "DIV", {
                class: !0
            });
            var m = A(n);
            t = $(m, "P", {
                class: !0
            });
            var v = A(t);
            i = X(v, "Red Title Glow"), v.forEach(d), s = T(m), r = $(m, "DIV", {
                class: !0
            });
            var y = A(r);
            q(o.$$.fragment, y), y.forEach(d), m.forEach(d), p.forEach(d), this.h()
        },
        h() {
            g(t, "class", "text-sm font-medium leading-none"), g(r, "class", "flex items-center space-x-2"), g(n, "class", "justify-between flex items-center space-x-4 w-full"), g(e, "class", "flex items-center space-x-4 rounded-md p-4 hover:bg-accent hover:text-accent-foreground")
        },
        m(f, p) {
            k(f, e, p), b(e, n), b(n, t), b(t, i), b(n, s), b(n, r), j(o, r, null), c = !0
        },
        p(f, [p]) {
            const m = {};
            p & 2 && (m.name = "effects." + f[1] + ".enabled"), !a && p & 1 && (a = !0, m.checked = f[0], Le(() => a = !1)), o.$set(m)
        },
        i(f) {
            c || (_(o.$$.fragment, f), c = !0)
        },
        o(f) {
            E(o.$$.fragment, f), c = !1
        },
        d(f) {
            f && d(e), V(o)
        }
    }
}

function Nr(l, e, n) {
    let {
        enabled: t = !1
    } = e, {
        flag: i
    } = e;

    function s(r) {
        t = r, n(0, t)
    }
    return l.$$set = r => {
        "enabled" in r && n(0, t = r.enabled), "flag" in r && n(1, i = r.flag)
    }, [t, i, s]
}
class Pr extends me {
    constructor(e) {
        super(), ge(this, e, Nr, Lr, _e, {
            enabled: 0,
            flag: 1
        })
    }
}

function Mr(l) {
    let e, n, t, i, s, r, o, a, c;

    function h(f) {
        l[2](f)
    }
    let u = {
        name: "effects." + l[1] + ".enabled"
    };
    return l[0] !== void 0 && (u.checked = l[0]), o = new Pe({
        props: u
    }), Te.push(() => Fe(o, "checked", h)), {
        c() {
            e = w("div"), n = w("div"), t = w("p"), i = J("White Title Glow"), s = D(), r = w("div"), O(o.$$.fragment), this.h()
        },
        l(f) {
            e = $(f, "DIV", {
                class: !0
            });
            var p = A(e);
            n = $(p, "DIV", {
                class: !0
            });
            var m = A(n);
            t = $(m, "P", {
                class: !0
            });
            var v = A(t);
            i = X(v, "White Title Glow"), v.forEach(d), s = T(m), r = $(m, "DIV", {
                class: !0
            });
            var y = A(r);
            q(o.$$.fragment, y), y.forEach(d), m.forEach(d), p.forEach(d), this.h()
        },
        h() {
            g(t, "class", "text-sm font-medium leading-none"), g(r, "class", "flex items-center space-x-2"), g(n, "class", "justify-between flex items-center space-x-4 w-full"), g(e, "class", "flex items-center space-x-4 rounded-md p-4 hover:bg-accent hover:text-accent-foreground")
        },
        m(f, p) {
            k(f, e, p), b(e, n), b(n, t), b(t, i), b(n, s), b(n, r), j(o, r, null), c = !0
        },
        p(f, [p]) {
            const m = {};
            p & 2 && (m.name = "effects." + f[1] + ".enabled"), !a && p & 1 && (a = !0, m.checked = f[0], Le(() => a = !1)), o.$set(m)
        },
        i(f) {
            c || (_(o.$$.fragment, f), c = !0)
        },
        o(f) {
            E(o.$$.fragment, f), c = !1
        },
        d(f) {
            f && d(e), V(o)
        }
    }
}

function Br(l, e, n) {
    let {
        enabled: t = !1
    } = e, {
        flag: i
    } = e;

    function s(r) {
        t = r, n(0, t)
    }
    return l.$$set = r => {
        "enabled" in r && n(0, t = r.enabled), "flag" in r && n(1, i = r.flag)
    }, [t, i, s]
}
class Or extends me {
    constructor(e) {
        super(), ge(this, e, Br, Mr, _e, {
            enabled: 0,
            flag: 1
        })
    }
}

function jr(l) {
    let e, n, t, i, s, r, o, a, c;

    function h(f) {
        l[2](f)
    }
    let u = {
        name: "effects." + l[1] + ".enabled"
    };
    return l[0] !== void 0 && (u.checked = l[0]), o = new Pe({
        props: u
    }), Te.push(() => Fe(o, "checked", h)), {
        c() {
            e = w("div"), n = w("div"), t = w("p"), i = J("Yellow Title Glow"), s = D(), r = w("div"), O(o.$$.fragment), this.h()
        },
        l(f) {
            e = $(f, "DIV", {
                class: !0
            });
            var p = A(e);
            n = $(p, "DIV", {
                class: !0
            });
            var m = A(n);
            t = $(m, "P", {
                class: !0
            });
            var v = A(t);
            i = X(v, "Yellow Title Glow"), v.forEach(d), s = T(m), r = $(m, "DIV", {
                class: !0
            });
            var y = A(r);
            q(o.$$.fragment, y), y.forEach(d), m.forEach(d), p.forEach(d), this.h()
        },
        h() {
            g(t, "class", "text-sm font-medium leading-none"), g(r, "class", "flex items-center space-x-2"), g(n, "class", "justify-between flex items-center space-x-4 w-full"), g(e, "class", "flex items-center space-x-4 rounded-md p-4 hover:bg-accent hover:text-accent-foreground")
        },
        m(f, p) {
            k(f, e, p), b(e, n), b(n, t), b(t, i), b(n, s), b(n, r), j(o, r, null), c = !0
        },
        p(f, [p]) {
            const m = {};
            p & 2 && (m.name = "effects." + f[1] + ".enabled"), !a && p & 1 && (a = !0, m.checked = f[0], Le(() => a = !1)), o.$set(m)
        },
        i(f) {
            c || (_(o.$$.fragment, f), c = !0)
        },
        o(f) {
            E(o.$$.fragment, f), c = !1
        },
        d(f) {
            f && d(e), V(o)
        }
    }
}

function Vr(l, e, n) {
    let {
        enabled: t = !1
    } = e, {
        flag: i
    } = e;

    function s(r) {
        t = r, n(0, t)
    }
    return l.$$set = r => {
        "enabled" in r && n(0, t = r.enabled), "flag" in r && n(1, i = r.flag)
    }, [t, i, s]
}
class Hr extends me {
    constructor(e) {
        super(), ge(this, e, Vr, jr, _e, {
            enabled: 0,
            flag: 1
        })
    }
}

function Ur(l) {
    let e, n, t, i, s, r, o, a, c;

    function h(f) {
        l[2](f)
    }
    let u = {
        name: "effects." + l[1] + ".enabled"
    };
    return l[0] !== void 0 && (u.checked = l[0]), o = new Pe({
        props: u
    }), Te.push(() => Fe(o, "checked", h)), {
        c() {
            e = w("div"), n = w("div"), t = w("p"), i = J("Typewriter"), s = D(), r = w("div"), O(o.$$.fragment), this.h()
        },
        l(f) {
            e = $(f, "DIV", {
                class: !0
            });
            var p = A(e);
            n = $(p, "DIV", {
                class: !0
            });
            var m = A(n);
            t = $(m, "P", {
                class: !0
            });
            var v = A(t);
            i = X(v, "Typewriter"), v.forEach(d), s = T(m), r = $(m, "DIV", {
                class: !0
            });
            var y = A(r);
            q(o.$$.fragment, y), y.forEach(d), m.forEach(d), p.forEach(d), this.h()
        },
        h() {
            g(t, "class", "text-sm font-medium leading-none"), g(r, "class", "flex items-center space-x-2"), g(n, "class", "justify-between flex items-center space-x-4 w-full"), g(e, "class", "flex flex-col items-center space-x-4 rounded-md p-4 hover:bg-accent hover:text-accent-foreground")
        },
        m(f, p) {
            k(f, e, p), b(e, n), b(n, t), b(t, i), b(n, s), b(n, r), j(o, r, null), c = !0
        },
        p(f, [p]) {
            const m = {};
            p & 2 && (m.name = "effects." + f[1] + ".enabled"), !a && p & 1 && (a = !0, m.checked = f[0], Le(() => a = !1)), o.$set(m)
        },
        i(f) {
            c || (_(o.$$.fragment, f), c = !0)
        },
        o(f) {
            E(o.$$.fragment, f), c = !1
        },
        d(f) {
            f && d(e), V(o)
        }
    }
}

function zr(l, e, n) {
    let {
        enabled: t = !1
    } = e, {
        flag: i
    } = e;

    function s(r) {
        t = r, n(0, t)
    }
    return l.$$set = r => {
        "enabled" in r && n(0, t = r.enabled), "flag" in r && n(1, i = r.flag)
    }, [t, i, s]
}
let Wr = class extends me {
    constructor(e) {
        super(), ge(this, e, zr, Ur, _e, {
            enabled: 0,
            flag: 1
        })
    }
};

function qr(l, e, n) {
    const t = l.slice();
    return t[0] = e[n], t[2] = n, t
}

function Gr(l) {
    let e;
    return {
        c() {
            e = w("div"), this.h()
        },
        l(n) {
            e = $(n, "DIV", {
                class: !0
            }), A(e).forEach(d), this.h()
        },
        h() {
            g(e, "class", "snow svelte-1h4qjtf")
        },
        m(n, t) {
            k(n, e, t)
        },
        p: se,
        d(n) {
            n && d(e)
        }
    }
}

function Yr(l) {
    let e, n = Array(200),
        t = [];
    for (let i = 0; i < n.length; i += 1) t[i] = Gr(qr(l, n, i));
    return {
        c() {
            e = w("div");
            for (let i = 0; i < t.length; i += 1) t[i].c();
            this.h()
        },
        l(i) {
            e = $(i, "DIV", {
                class: !0
            });
            var s = A(e);
            for (let r = 0; r < t.length; r += 1) t[r].l(s);
            s.forEach(d), this.h()
        },
        h() {
            g(e, "class", "snow-container svelte-1h4qjtf")
        },
        m(i, s) {
            k(i, e, s);
            for (let r = 0; r < t.length; r += 1) t[r] && t[r].m(e, null)
        },
        p: se,
        i: se,
        o: se,
        d(i) {
            i && d(e), De(t, i)
        }
    }
}
class Jr extends me {
    constructor(e) {
        super(), ge(this, e, null, Yr, _e, {})
    }
}
class Xr extends me {
    constructor(e) {
        super(), ge(this, e, null, null, _e, {})
    }
}

function Zr(l) {
    let e;
    return {
        c() {
            e = w("span"), this.h()
        },
        l(n) {
            e = $(n, "SPAN", {
                class: !0,
                id: !0
            }), A(e).forEach(d), this.h()
        },
        h() {
            g(e, "class", "font-medium text-center svelte-385gfl"), g(e, "id", "typewriter")
        },
        m(n, t) {
            k(n, e, t)
        },
        p: se,
        i: se,
        o: se,
        d(n) {
            n && d(e)
        }
    }
}
async function qi(l) {
    const e = document.getElementById("typewriter");
    for (let n = 0; n < l.length; n++) e.innerHTML += l.charAt(n), await new Promise(t => setTimeout(t, 100));
    await new Promise(n => setTimeout(n, 1e3));
    for (let n = 0; n < l.length; n++) e.innerHTML = e.innerHTML.slice(0, -1), await new Promise(t => setTimeout(t, 100));
    await new Promise(n => setTimeout(n, 1e3)), qi(l)
}

function Qr(l, e, n) {
    let {
        text: t = ""
    } = e;
    return Hi(() => {
        qi(t)
    }), l.$$set = i => {
        "text" in i && n(0, t = i.text)
    }, [t]
}
class Kr extends me {
    constructor(e) {
        super(), ge(this, e, Qr, Zr, _e, {
            text: 0
        })
    }
}

function es(l) {
    let e, n, t, i, s, r, o, a, c;

    function h(f) {
        l[2](f)
    }
    let u = {
        name: "effects." + l[1] + ".enabled"
    };
    return l[0] !== void 0 && (u.checked = l[0]), o = new Pe({
        props: u
    }), Te.push(() => Fe(o, "checked", h)), {
        c() {
            e = w("div"), n = w("div"), t = w("p"), i = J("RGB Title Glow"), s = D(), r = w("div"), O(o.$$.fragment), this.h()
        },
        l(f) {
            e = $(f, "DIV", {
                class: !0
            });
            var p = A(e);
            n = $(p, "DIV", {
                class: !0
            });
            var m = A(n);
            t = $(m, "P", {
                class: !0
            });
            var v = A(t);
            i = X(v, "RGB Title Glow"), v.forEach(d), s = T(m), r = $(m, "DIV", {
                class: !0
            });
            var y = A(r);
            q(o.$$.fragment, y), y.forEach(d), m.forEach(d), p.forEach(d), this.h()
        },
        h() {
            g(t, "class", "text-sm font-medium leading-none"), g(r, "class", "flex items-center space-x-2"), g(n, "class", "justify-between flex items-center space-x-4 w-full"), g(e, "class", "flex items-center space-x-4 rounded-md p-4 hover:bg-accent hover:text-accent-foreground")
        },
        m(f, p) {
            k(f, e, p), b(e, n), b(n, t), b(t, i), b(n, s), b(n, r), j(o, r, null), c = !0
        },
        p(f, [p]) {
            const m = {};
            p & 2 && (m.name = "effects." + f[1] + ".enabled"), !a && p & 1 && (a = !0, m.checked = f[0], Le(() => a = !1)), o.$set(m)
        },
        i(f) {
            c || (_(o.$$.fragment, f), c = !0)
        },
        o(f) {
            E(o.$$.fragment, f), c = !1
        },
        d(f) {
            f && d(e), V(o)
        }
    }
}

function ts(l, e, n) {
    let {
        enabled: t = !1
    } = e, {
        flag: i
    } = e;

    function s(r) {
        t = r, n(0, t)
    }
    return l.$$set = r => {
        "enabled" in r && n(0, t = r.enabled), "flag" in r && n(1, i = r.flag)
    }, [t, i, s]
}
class ns extends me {
    constructor(e) {
        super(), ge(this, e, ts, es, _e, {
            enabled: 0,
            flag: 1
        })
    }
}

function tn(l, e, n) {
    const t = l.slice();
    return t[0] = e[n], t[2] = n, t
}

function nn(l) {
    let e, n = `${Math.random()*100}vw`,
        t = `${Math.random()*3+1}s`,
        i = `${Math.random()*3}s`;
    return {
        c() {
            e = w("span"), this.h()
        },
        l(s) {
            e = $(s, "SPAN", {
                class: !0
            }), A(e).forEach(d), this.h()
        },
        h() {
            g(e, "class", "star svelte-1n45xel"), Y(e, "top", "0"), Y(e, "left", n), Y(e, "animation-duration", t), Y(e, "animation-delay", i)
        },
        m(s, r) {
            k(s, e, r)
        },
        p: se,
        d(s) {
            s && d(e)
        }
    }
}

function is(l) {
    let e, n = Array(25),
        t = [];
    for (let i = 0; i < n.length; i += 1) t[i] = nn(tn(l, n, i));
    return {
        c() {
            e = w("div");
            for (let i = 0; i < t.length; i += 1) t[i].c();
            this.h()
        },
        l(i) {
            e = $(i, "DIV", {
                class: !0
            });
            var s = A(e);
            for (let r = 0; r < t.length; r += 1) t[r].l(s);
            s.forEach(d), this.h()
        },
        h() {
            g(e, "class", "star-container svelte-1n45xel")
        },
        m(i, s) {
            k(i, e, s);
            for (let r = 0; r < t.length; r += 1) t[r] && t[r].m(e, null)
        },
        p(i, [s]) {
            if (s & 0) {
                n = Array(25);
                let r;
                for (r = 0; r < n.length; r += 1) {
                    const o = tn(i, n, r);
                    t[r] ? t[r].p(o, s) : (t[r] = nn(), t[r].c(), t[r].m(e, null))
                }
                for (; r < t.length; r += 1) t[r].d(1);
                t.length = n.length
            }
        },
        i: se,
        o: se,
        d(i) {
            i && d(e), De(t, i)
        }
    }
}
class ls extends me {
    constructor(e) {
        super(), ge(this, e, null, is, _e, {})
    }
}

function rs(l, e, n) {
    const t = l.slice();
    return t[0] = e[n], t[2] = n, t
}

function ss(l) {
    let e;
    return {
        c() {
            e = w("div"), this.h()
        },
        l(n) {
            e = $(n, "DIV", {
                class: !0
            }), A(e).forEach(d), this.h()
        },
        h() {
            g(e, "class", "firefly svelte-gr29bq")
        },
        m(n, t) {
            k(n, e, t)
        },
        p: se,
        d(n) {
            n && d(e)
        }
    }
}

function os(l) {
    let e, n = Array(20),
        t = [];
    for (let i = 0; i < n.length; i += 1) t[i] = ss(rs(l, n, i));
    return {
        c() {
            e = w("div");
            for (let i = 0; i < t.length; i += 1) t[i].c();
            this.h()
        },
        l(i) {
            e = $(i, "DIV", {
                class: !0
            });
            var s = A(e);
            for (let r = 0; r < t.length; r += 1) t[r].l(s);
            s.forEach(d), this.h()
        },
        h() {
            g(e, "class", "firefly-container svelte-gr29bq")
        },
        m(i, s) {
            k(i, e, s);
            for (let r = 0; r < t.length; r += 1) t[r] && t[r].m(e, null)
        },
        p: se,
        i: se,
        o: se,
        d(i) {
            i && d(e), De(t, i)
        }
    }
}
class as extends me {
    constructor(e) {
        super(), ge(this, e, null, os, _e, {})
    }
}

function cs(l, e, n) {
    const t = l.slice();
    return t[0] = e[n], t[2] = n, t
}

function fs(l) {
    let e;
    return {
        c() {
            e = w("div"), this.h()
        },
        l(n) {
            e = $(n, "DIV", {
                class: !0
            }), A(e).forEach(d), this.h()
        },
        h() {
            g(e, "class", "raindrop svelte-3i2f09")
        },
        m(n, t) {
            k(n, e, t)
        },
        p: se,
        d(n) {
            n && d(e)
        }
    }
}

function us(l) {
    let e, n = Array(200),
        t = [];
    for (let i = 0; i < n.length; i += 1) t[i] = fs(cs(l, n, i));
    return {
        c() {
            e = w("div");
            for (let i = 0; i < t.length; i += 1) t[i].c();
            this.h()
        },
        l(i) {
            e = $(i, "DIV", {
                class: !0
            });
            var s = A(e);
            for (let r = 0; r < t.length; r += 1) t[r].l(s);
            s.forEach(d), this.h()
        },
        h() {
            g(e, "class", "rain-container svelte-3i2f09")
        },
        m(i, s) {
            k(i, e, s);
            for (let r = 0; r < t.length; r += 1) t[r] && t[r].m(e, null)
        },
        p: se,
        i: se,
        o: se,
        d(i) {
            i && d(e), De(t, i)
        }
    }
}
class ds extends me {
    constructor(e) {
        super(), ge(this, e, null, us, _e, {})
    }
}

function hs(l) {
    let e;
    return {
        c() {
            e = w("div"), this.h()
        },
        l(n) {
            e = $(n, "DIV", {
                class: !0
            });
            var t = A(e);
            t.forEach(d), this.h()
        },
        h() {
            g(e, "class", "blossom-container svelte-w7z9na")
        },
        m(n, t) {
            k(n, e, t)
        },
        p: se,
        i: se,
        o: se,
        d(n) {
            n && d(e)
        }
    }
}
class ps extends me {
    constructor(e) {
        super(), ge(this, e, null, hs, _e, {})
    }
}

function ms(l, e, n) {
    const t = l.slice();
    return t[0] = e[n], t[2] = n, t
}

function gs(l) {
    let e;
    return {
        c() {
            e = w("div"), this.h()
        },
        l(n) {
            e = $(n, "DIV", {
                class: !0
            }), A(e).forEach(d), this.h()
        },
        h() {
            g(e, "class", "bubble svelte-1kqdnle")
        },
        m(n, t) {
            k(n, e, t)
        },
        p: se,
        d(n) {
            n && d(e)
        }
    }
}

function _s(l) {
    let e, n = Array(10),
        t = [];
    for (let i = 0; i < n.length; i += 1) t[i] = gs(ms(l, n, i));
    return {
        c() {
            e = w("div");
            for (let i = 0; i < t.length; i += 1) t[i].c();
            this.h()
        },
        l(i) {
            e = $(i, "DIV", {
                class: !0
            });
            var s = A(e);
            for (let r = 0; r < t.length; r += 1) t[r].l(s);
            s.forEach(d), this.h()
        },
        h() {
            g(e, "class", "bubbles svelte-1kqdnle")
        },
        m(i, s) {
            k(i, e, s);
            for (let r = 0; r < t.length; r += 1) t[r] && t[r].m(e, null)
        },
        p: se,
        i: se,
        o: se,
        d(i) {
            i && d(e), De(t, i)
        }
    }
}
class bs extends me {
    constructor(e) {
        super(), ge(this, e, null, _s, _e, {})
    }
}

function vs(l) {
    let e, n;
    return {
        c() {
            e = w("div"), n = w("div"), this.h()
        },
        l(t) {
            e = $(t, "DIV", {
                class: !0
            });
            var i = A(e);
            n = $(i, "DIV", {
                class: !0
            }), A(n).forEach(d), i.forEach(d), this.h()
        },
        h() {
            g(n, "class", "clouds svelte-wf4nux"), g(e, "class", "background-container svelte-wf4nux")
        },
        m(t, i) {
            k(t, e, i), b(e, n)
        },
        p: se,
        i: se,
        o: se,
        d(t) {
            t && d(e)
        }
    }
}
class ws extends me {
    constructor(e) {
        super(), ge(this, e, null, vs, _e, {})
    }
}
const $s = [{
        flag: 0,
        configure: mr,
        display: Jr
    }, {
        flag: 1,
        configure: br,
        display: Xr
    }, {
        flag: 2,
        configure: $r
    }, {
        flag: 3,
        configure: Er
    }, {
        flag: 4,
        configure: Ir
    }, {
        flag: 5,
        configure: Rr
    }, {
        flag: 6,
        configure: Fr
    }, {
        flag: 7,
        configure: Pr
    }, {
        flag: 8,
        configure: Or
    }, {
        flag: 9,
        configure: Hr
    }, {
        flag: 10,
        configure: Wr,
        display: Kr
    }, {
        flag: 11,
        configure: ns
    }, {
        flag: 20
    }, {
        flag: 21
    }, {
        flag: 22,
        display: ls
    }, {
        flag: 23,
        display: as
    }, {
        flag: 24,
        display: ds
    }, {
        flag: 25,
        display: ps
    }, {
        flag: 26,
        display: bs
    }, {
        flag: 27,
        display: ws
    }],
    le = l => {
        console.log("nigga retard", l);
        const e = [];
        for (const n of $s) l & 1 << n.flag && (console.log("a"), e.push(n));
        return e
    },
    ks = (l, e) => {
        const n = [];
        for (const t of e) l & 1 << t.flag && n.push(t);
        return n
    };

function Gi(l, e) {
    return function() {
        return l.apply(e, arguments)
    }
}
const {
    toString: As
} = Object.prototype, {
    getPrototypeOf: qt
} = Object, $t = (l => e => {
    const n = As.call(e);
    return l[n] || (l[n] = n.slice(8, -1).toLowerCase())
})(Object.create(null)), He = l => (l = l.toLowerCase(), e => $t(e) === l), kt = l => e => typeof e === l, {
    isArray: tt
} = Array, rt = kt("undefined");

function Es(l) {
    return l !== null && !rt(l) && l.constructor !== null && !rt(l.constructor) && Ne(l.constructor.isBuffer) && l.constructor.isBuffer(l)
}
const Yi = He("ArrayBuffer");

function ys(l) {
    let e;
    return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? e = ArrayBuffer.isView(l) : e = l && l.buffer && Yi(l.buffer), e
}
const Ss = kt("string"),
    Ne = kt("function"),
    Ji = kt("number"),
    At = l => l !== null && typeof l == "object",
    Is = l => l === !0 || l === !1,
    ct = l => {
        if ($t(l) !== "object") return !1;
        const e = qt(l);
        return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(Symbol.toStringTag in l) && !(Symbol.iterator in l)
    },
    xs = He("Date"),
    Cs = He("File"),
    Rs = He("Blob"),
    Ds = He("FileList"),
    Ts = l => At(l) && Ne(l.pipe),
    Fs = l => {
        let e;
        return l && (typeof FormData == "function" && l instanceof FormData || Ne(l.append) && ((e = $t(l)) === "formdata" || e === "object" && Ne(l.toString) && l.toString() === "[object FormData]"))
    },
    Ls = He("URLSearchParams"),
    Ns = l => l.trim ? l.trim() : l.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");

function ot(l, e, {
    allOwnKeys: n = !1
} = {}) {
    if (l === null || typeof l > "u") return;
    let t, i;
    if (typeof l != "object" && (l = [l]), tt(l))
        for (t = 0, i = l.length; t < i; t++) e.call(null, l[t], t, l);
    else {
        const s = n ? Object.getOwnPropertyNames(l) : Object.keys(l),
            r = s.length;
        let o;
        for (t = 0; t < r; t++) o = s[t], e.call(null, l[o], o, l)
    }
}

function Xi(l, e) {
    e = e.toLowerCase();
    const n = Object.keys(l);
    let t = n.length,
        i;
    for (; t-- > 0;)
        if (i = n[t], e === i.toLowerCase()) return i;
    return null
}
const Zi = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(),
    Qi = l => !rt(l) && l !== Zi;

function Mt() {
    const {
        caseless: l
    } = Qi(this) && this || {}, e = {}, n = (t, i) => {
        const s = l && Xi(e, i) || i;
        ct(e[s]) && ct(t) ? e[s] = Mt(e[s], t) : ct(t) ? e[s] = Mt({}, t) : tt(t) ? e[s] = t.slice() : e[s] = t
    };
    for (let t = 0, i = arguments.length; t < i; t++) arguments[t] && ot(arguments[t], n);
    return e
}
const Ps = (l, e, n, {
        allOwnKeys: t
    } = {}) => (ot(e, (i, s) => {
        n && Ne(i) ? l[s] = Gi(i, n) : l[s] = i
    }, {
        allOwnKeys: t
    }), l),
    Ms = l => (l.charCodeAt(0) === 65279 && (l = l.slice(1)), l),
    Bs = (l, e, n, t) => {
        l.prototype = Object.create(e.prototype, t), l.prototype.constructor = l, Object.defineProperty(l, "super", {
            value: e.prototype
        }), n && Object.assign(l.prototype, n)
    },
    Os = (l, e, n, t) => {
        let i, s, r;
        const o = {};
        if (e = e || {}, l == null) return e;
        do {
            for (i = Object.getOwnPropertyNames(l), s = i.length; s-- > 0;) r = i[s], (!t || t(r, l, e)) && !o[r] && (e[r] = l[r], o[r] = !0);
            l = n !== !1 && qt(l)
        } while (l && (!n || n(l, e)) && l !== Object.prototype);
        return e
    },
    js = (l, e, n) => {
        l = String(l), (n === void 0 || n > l.length) && (n = l.length), n -= e.length;
        const t = l.indexOf(e, n);
        return t !== -1 && t === n
    },
    Vs = l => {
        if (!l) return null;
        if (tt(l)) return l;
        let e = l.length;
        if (!Ji(e)) return null;
        const n = new Array(e);
        for (; e-- > 0;) n[e] = l[e];
        return n
    },
    Hs = (l => e => l && e instanceof l)(typeof Uint8Array < "u" && qt(Uint8Array)),
    Us = (l, e) => {
        const t = (l && l[Symbol.iterator]).call(l);
        let i;
        for (;
            (i = t.next()) && !i.done;) {
            const s = i.value;
            e.call(l, s[0], s[1])
        }
    },
    zs = (l, e) => {
        let n;
        const t = [];
        for (;
            (n = l.exec(e)) !== null;) t.push(n);
        return t
    },
    Ws = He("HTMLFormElement"),
    qs = l => l.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(n, t, i) {
        return t.toUpperCase() + i
    }),
    ln = (({
        hasOwnProperty: l
    }) => (e, n) => l.call(e, n))(Object.prototype),
    Gs = He("RegExp"),
    Ki = (l, e) => {
        const n = Object.getOwnPropertyDescriptors(l),
            t = {};
        ot(n, (i, s) => {
            let r;
            (r = e(i, s, l)) !== !1 && (t[s] = r || i)
        }), Object.defineProperties(l, t)
    },
    Ys = l => {
        Ki(l, (e, n) => {
            if (Ne(l) && ["arguments", "caller", "callee"].indexOf(n) !== -1) return !1;
            const t = l[n];
            if (Ne(t)) {
                if (e.enumerable = !1, "writable" in e) {
                    e.writable = !1;
                    return
                }
                e.set || (e.set = () => {
                    throw Error("Can not rewrite read-only method '" + n + "'")
                })
            }
        })
    },
    Js = (l, e) => {
        const n = {},
            t = i => {
                i.forEach(s => {
                    n[s] = !0
                })
            };
        return tt(l) ? t(l) : t(String(l).split(e)), n
    },
    Xs = () => {},
    Zs = (l, e) => (l = +l, Number.isFinite(l) ? l : e),
    xt = "abcdefghijklmnopqrstuvwxyz",
    rn = "0123456789",
    el = {
        DIGIT: rn,
        ALPHA: xt,
        ALPHA_DIGIT: xt + xt.toUpperCase() + rn
    },
    Qs = (l = 16, e = el.ALPHA_DIGIT) => {
        let n = "";
        const {
            length: t
        } = e;
        for (; l--;) n += e[Math.random() * t | 0];
        return n
    };

function Ks(l) {
    return !!(l && Ne(l.append) && l[Symbol.toStringTag] === "FormData" && l[Symbol.iterator])
}
const eo = l => {
        const e = new Array(10),
            n = (t, i) => {
                if (At(t)) {
                    if (e.indexOf(t) >= 0) return;
                    if (!("toJSON" in t)) {
                        e[i] = t;
                        const s = tt(t) ? [] : {};
                        return ot(t, (r, o) => {
                            const a = n(r, i + 1);
                            !rt(a) && (s[o] = a)
                        }), e[i] = void 0, s
                    }
                }
                return t
            };
        return n(l, 0)
    },
    to = He("AsyncFunction"),
    no = l => l && (At(l) || Ne(l)) && Ne(l.then) && Ne(l.catch),
    R = {
        isArray: tt,
        isArrayBuffer: Yi,
        isBuffer: Es,
        isFormData: Fs,
        isArrayBufferView: ys,
        isString: Ss,
        isNumber: Ji,
        isBoolean: Is,
        isObject: At,
        isPlainObject: ct,
        isUndefined: rt,
        isDate: xs,
        isFile: Cs,
        isBlob: Rs,
        isRegExp: Gs,
        isFunction: Ne,
        isStream: Ts,
        isURLSearchParams: Ls,
        isTypedArray: Hs,
        isFileList: Ds,
        forEach: ot,
        merge: Mt,
        extend: Ps,
        trim: Ns,
        stripBOM: Ms,
        inherits: Bs,
        toFlatObject: Os,
        kindOf: $t,
        kindOfTest: He,
        endsWith: js,
        toArray: Vs,
        forEachEntry: Us,
        matchAll: zs,
        isHTMLForm: Ws,
        hasOwnProperty: ln,
        hasOwnProp: ln,
        reduceDescriptors: Ki,
        freezeMethods: Ys,
        toObjectSet: Js,
        toCamelCase: qs,
        noop: Xs,
        toFiniteNumber: Zs,
        findKey: Xi,
        global: Zi,
        isContextDefined: Qi,
        ALPHABET: el,
        generateString: Qs,
        isSpecCompliantForm: Ks,
        toJSONObject: eo,
        isAsyncFn: to,
        isThenable: no
    };

function ce(l, e, n, t, i) {
    Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = l, this.name = "AxiosError", e && (this.code = e), n && (this.config = n), t && (this.request = t), i && (this.response = i)
}
R.inherits(ce, Error, {
    toJSON: function() {
        return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: R.toJSONObject(this.config),
            code: this.code,
            status: this.response && this.response.status ? this.response.status : null
        }
    }
});
const tl = ce.prototype,
    nl = {};
["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach(l => {
    nl[l] = {
        value: l
    }
});
Object.defineProperties(ce, nl);
Object.defineProperty(tl, "isAxiosError", {
    value: !0
});
ce.from = (l, e, n, t, i, s) => {
    const r = Object.create(tl);
    return R.toFlatObject(l, r, function(a) {
        return a !== Error.prototype
    }, o => o !== "isAxiosError"), ce.call(r, l.message, e, n, t, i), r.cause = l, r.name = l.name, s && Object.assign(r, s), r
};
const io = null;

function Bt(l) {
    return R.isPlainObject(l) || R.isArray(l)
}

function il(l) {
    return R.endsWith(l, "[]") ? l.slice(0, -2) : l
}

function sn(l, e, n) {
    return l ? l.concat(e).map(function(i, s) {
        return i = il(i), !n && s ? "[" + i + "]" : i
    }).join(n ? "." : "") : e
}

function lo(l) {
    return R.isArray(l) && !l.some(Bt)
}
const ro = R.toFlatObject(R, {}, null, function(e) {
    return /^is[A-Z]/.test(e)
});

function Et(l, e, n) {
    if (!R.isObject(l)) throw new TypeError("target must be an object");
    e = e || new FormData, n = R.toFlatObject(n, {
        metaTokens: !0,
        dots: !1,
        indexes: !1
    }, !1, function(v, y) {
        return !R.isUndefined(y[v])
    });
    const t = n.metaTokens,
        i = n.visitor || h,
        s = n.dots,
        r = n.indexes,
        a = (n.Blob || typeof Blob < "u" && Blob) && R.isSpecCompliantForm(e);
    if (!R.isFunction(i)) throw new TypeError("visitor must be a function");

    function c(m) {
        if (m === null) return "";
        if (R.isDate(m)) return m.toISOString();
        if (!a && R.isBlob(m)) throw new ce("Blob is not supported. Use a Buffer instead.");
        return R.isArrayBuffer(m) || R.isTypedArray(m) ? a && typeof Blob == "function" ? new Blob([m]) : Buffer.from(m) : m
    }

    function h(m, v, y) {
        let I = m;
        if (m && !y && typeof m == "object") {
            if (R.endsWith(v, "{}")) v = t ? v : v.slice(0, -2), m = JSON.stringify(m);
            else if (R.isArray(m) && lo(m) || (R.isFileList(m) || R.endsWith(v, "[]")) && (I = R.toArray(m))) return v = il(v), I.forEach(function(ee, L) {
                !(R.isUndefined(ee) || ee === null) && e.append(r === !0 ? sn([v], L, s) : r === null ? v : v + "[]", c(ee))
            }), !1
        }
        return Bt(m) ? !0 : (e.append(sn(y, v, s), c(m)), !1)
    }
    const u = [],
        f = Object.assign(ro, {
            defaultVisitor: h,
            convertValue: c,
            isVisitable: Bt
        });

    function p(m, v) {
        if (!R.isUndefined(m)) {
            if (u.indexOf(m) !== -1) throw Error("Circular reference detected in " + v.join("."));
            u.push(m), R.forEach(m, function(I, Q) {
                (!(R.isUndefined(I) || I === null) && i.call(e, I, R.isString(Q) ? Q.trim() : Q, v, f)) === !0 && p(I, v ? v.concat(Q) : [Q])
            }), u.pop()
        }
    }
    if (!R.isObject(l)) throw new TypeError("data must be an object");
    return p(l), e
}

function on(l) {
    const e = {
        "!": "%21",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "~": "%7E",
        "%20": "+",
        "%00": "\0"
    };
    return encodeURIComponent(l).replace(/[!'()~]|%20|%00/g, function(t) {
        return e[t]
    })
}

function Gt(l, e) {
    this._pairs = [], l && Et(l, this, e)
}
const ll = Gt.prototype;
ll.append = function(e, n) {
    this._pairs.push([e, n])
};
ll.toString = function(e) {
    const n = e ? function(t) {
        return e.call(this, t, on)
    } : on;
    return this._pairs.map(function(i) {
        return n(i[0]) + "=" + n(i[1])
    }, "").join("&")
};

function so(l) {
    return encodeURIComponent(l).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
}

function rl(l, e, n) {
    if (!e) return l;
    const t = n && n.encode || so,
        i = n && n.serialize;
    let s;
    if (i ? s = i(e, n) : s = R.isURLSearchParams(e) ? e.toString() : new Gt(e, n).toString(t), s) {
        const r = l.indexOf("#");
        r !== -1 && (l = l.slice(0, r)), l += (l.indexOf("?") === -1 ? "?" : "&") + s
    }
    return l
}
class oo {
    constructor() {
        this.handlers = []
    }
    use(e, n, t) {
        return this.handlers.push({
            fulfilled: e,
            rejected: n,
            synchronous: t ? t.synchronous : !1,
            runWhen: t ? t.runWhen : null
        }), this.handlers.length - 1
    }
    eject(e) {
        this.handlers[e] && (this.handlers[e] = null)
    }
    clear() {
        this.handlers && (this.handlers = [])
    }
    forEach(e) {
        R.forEach(this.handlers, function(t) {
            t !== null && e(t)
        })
    }
}
const an = oo,
    sl = {
        silentJSONParsing: !0,
        forcedJSONParsing: !0,
        clarifyTimeoutError: !1
    },
    ao = typeof URLSearchParams < "u" ? URLSearchParams : Gt,
    co = typeof FormData < "u" ? FormData : null,
    fo = typeof Blob < "u" ? Blob : null,
    uo = {
        isBrowser: !0,
        classes: {
            URLSearchParams: ao,
            FormData: co,
            Blob: fo
        },
        protocols: ["http", "https", "file", "blob", "url", "data"]
    },
    ol = typeof window < "u" && typeof document < "u",
    ho = (l => ol && ["ReactNative", "NativeScript", "NS"].indexOf(l) < 0)(typeof navigator < "u" && navigator.product),
    po = (() => typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(),
    mo = Object.freeze(Object.defineProperty({
        __proto__: null,
        hasBrowserEnv: ol,
        hasStandardBrowserEnv: ho,
        hasStandardBrowserWebWorkerEnv: po
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Be = {
        ...mo,
        ...uo
    };

function go(l, e) {
    return Et(l, new Be.classes.URLSearchParams, Object.assign({
        visitor: function(n, t, i, s) {
            return Be.isNode && R.isBuffer(n) ? (this.append(t, n.toString("base64")), !1) : s.defaultVisitor.apply(this, arguments)
        }
    }, e))
}

function _o(l) {
    return R.matchAll(/\w+|\[(\w*)]/g, l).map(e => e[0] === "[]" ? "" : e[1] || e[0])
}

function bo(l) {
    const e = {},
        n = Object.keys(l);
    let t;
    const i = n.length;
    let s;
    for (t = 0; t < i; t++) s = n[t], e[s] = l[s];
    return e
}

function al(l) {
    function e(n, t, i, s) {
        let r = n[s++];
        if (r === "__proto__") return !0;
        const o = Number.isFinite(+r),
            a = s >= n.length;
        return r = !r && R.isArray(i) ? i.length : r, a ? (R.hasOwnProp(i, r) ? i[r] = [i[r], t] : i[r] = t, !o) : ((!i[r] || !R.isObject(i[r])) && (i[r] = []), e(n, t, i[r], s) && R.isArray(i[r]) && (i[r] = bo(i[r])), !o)
    }
    if (R.isFormData(l) && R.isFunction(l.entries)) {
        const n = {};
        return R.forEachEntry(l, (t, i) => {
            e(_o(t), i, n, 0)
        }), n
    }
    return null
}

function vo(l, e, n) {
    if (R.isString(l)) try {
        return (e || JSON.parse)(l), R.trim(l)
    } catch (t) {
        if (t.name !== "SyntaxError") throw t
    }
    return (n || JSON.stringify)(l)
}
const Yt = {
    transitional: sl,
    adapter: ["xhr", "http"],
    transformRequest: [function(e, n) {
        const t = n.getContentType() || "",
            i = t.indexOf("application/json") > -1,
            s = R.isObject(e);
        if (s && R.isHTMLForm(e) && (e = new FormData(e)), R.isFormData(e)) return i ? JSON.stringify(al(e)) : e;
        if (R.isArrayBuffer(e) || R.isBuffer(e) || R.isStream(e) || R.isFile(e) || R.isBlob(e)) return e;
        if (R.isArrayBufferView(e)) return e.buffer;
        if (R.isURLSearchParams(e)) return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
        let o;
        if (s) {
            if (t.indexOf("application/x-www-form-urlencoded") > -1) return go(e, this.formSerializer).toString();
            if ((o = R.isFileList(e)) || t.indexOf("multipart/form-data") > -1) {
                const a = this.env && this.env.FormData;
                return Et(o ? {
                    "files[]": e
                } : e, a && new a, this.formSerializer)
            }
        }
        return s || i ? (n.setContentType("application/json", !1), vo(e)) : e
    }],
    transformResponse: [function(e) {
        const n = this.transitional || Yt.transitional,
            t = n && n.forcedJSONParsing,
            i = this.responseType === "json";
        if (e && R.isString(e) && (t && !this.responseType || i)) {
            const r = !(n && n.silentJSONParsing) && i;
            try {
                return JSON.parse(e)
            } catch (o) {
                if (r) throw o.name === "SyntaxError" ? ce.from(o, ce.ERR_BAD_RESPONSE, this, null, this.response) : o
            }
        }
        return e
    }],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {
        FormData: Be.classes.FormData,
        Blob: Be.classes.Blob
    },
    validateStatus: function(e) {
        return e >= 200 && e < 300
    },
    headers: {
        common: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": void 0
        }
    }
};
R.forEach(["delete", "get", "head", "post", "put", "patch"], l => {
    Yt.headers[l] = {}
});
const Jt = Yt,
    wo = R.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"]),
    $o = l => {
        const e = {};
        let n, t, i;
        return l && l.split(`
`).forEach(function(r) {
            i = r.indexOf(":"), n = r.substring(0, i).trim().toLowerCase(), t = r.substring(i + 1).trim(), !(!n || e[n] && wo[n]) && (n === "set-cookie" ? e[n] ? e[n].push(t) : e[n] = [t] : e[n] = e[n] ? e[n] + ", " + t : t)
        }), e
    },
    cn = Symbol("internals");

function nt(l) {
    return l && String(l).trim().toLowerCase()
}

function ft(l) {
    return l === !1 || l == null ? l : R.isArray(l) ? l.map(ft) : String(l)
}

function ko(l) {
    const e = Object.create(null),
        n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let t;
    for (; t = n.exec(l);) e[t[1]] = t[2];
    return e
}
const Ao = l => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(l.trim());

function Ct(l, e, n, t, i) {
    if (R.isFunction(t)) return t.call(this, e, n);
    if (i && (e = n), !!R.isString(e)) {
        if (R.isString(t)) return e.indexOf(t) !== -1;
        if (R.isRegExp(t)) return t.test(e)
    }
}

function Eo(l) {
    return l.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, n, t) => n.toUpperCase() + t)
}

function yo(l, e) {
    const n = R.toCamelCase(" " + e);
    ["get", "set", "has"].forEach(t => {
        Object.defineProperty(l, t + n, {
            value: function(i, s, r) {
                return this[t].call(this, e, i, s, r)
            },
            configurable: !0
        })
    })
}
class yt {
    constructor(e) {
        e && this.set(e)
    }
    set(e, n, t) {
        const i = this;

        function s(o, a, c) {
            const h = nt(a);
            if (!h) throw new Error("header name must be a non-empty string");
            const u = R.findKey(i, h);
            (!u || i[u] === void 0 || c === !0 || c === void 0 && i[u] !== !1) && (i[u || a] = ft(o))
        }
        const r = (o, a) => R.forEach(o, (c, h) => s(c, h, a));
        return R.isPlainObject(e) || e instanceof this.constructor ? r(e, n) : R.isString(e) && (e = e.trim()) && !Ao(e) ? r($o(e), n) : e != null && s(n, e, t), this
    }
    get(e, n) {
        if (e = nt(e), e) {
            const t = R.findKey(this, e);
            if (t) {
                const i = this[t];
                if (!n) return i;
                if (n === !0) return ko(i);
                if (R.isFunction(n)) return n.call(this, i, t);
                if (R.isRegExp(n)) return n.exec(i);
                throw new TypeError("parser must be boolean|regexp|function")
            }
        }
    }
    has(e, n) {
        if (e = nt(e), e) {
            const t = R.findKey(this, e);
            return !!(t && this[t] !== void 0 && (!n || Ct(this, this[t], t, n)))
        }
        return !1
    }
    delete(e, n) {
        const t = this;
        let i = !1;

        function s(r) {
            if (r = nt(r), r) {
                const o = R.findKey(t, r);
                o && (!n || Ct(t, t[o], o, n)) && (delete t[o], i = !0)
            }
        }
        return R.isArray(e) ? e.forEach(s) : s(e), i
    }
    clear(e) {
        const n = Object.keys(this);
        let t = n.length,
            i = !1;
        for (; t--;) {
            const s = n[t];
            (!e || Ct(this, this[s], s, e, !0)) && (delete this[s], i = !0)
        }
        return i
    }
    normalize(e) {
        const n = this,
            t = {};
        return R.forEach(this, (i, s) => {
            const r = R.findKey(t, s);
            if (r) {
                n[r] = ft(i), delete n[s];
                return
            }
            const o = e ? Eo(s) : String(s).trim();
            o !== s && delete n[s], n[o] = ft(i), t[o] = !0
        }), this
    }
    concat(...e) {
        return this.constructor.concat(this, ...e)
    }
    toJSON(e) {
        const n = Object.create(null);
        return R.forEach(this, (t, i) => {
            t != null && t !== !1 && (n[i] = e && R.isArray(t) ? t.join(", ") : t)
        }), n
    } [Symbol.iterator]() {
        return Object.entries(this.toJSON())[Symbol.iterator]()
    }
    toString() {
        return Object.entries(this.toJSON()).map(([e, n]) => e + ": " + n).join(`
`)
    }
    get[Symbol.toStringTag]() {
        return "AxiosHeaders"
    }
    static from(e) {
        return e instanceof this ? e : new this(e)
    }
    static concat(e, ...n) {
        const t = new this(e);
        return n.forEach(i => t.set(i)), t
    }
    static accessor(e) {
        const t = (this[cn] = this[cn] = {
                accessors: {}
            }).accessors,
            i = this.prototype;

        function s(r) {
            const o = nt(r);
            t[o] || (yo(i, r), t[o] = !0)
        }
        return R.isArray(e) ? e.forEach(s) : s(e), this
    }
}
yt.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
R.reduceDescriptors(yt.prototype, ({
    value: l
}, e) => {
    let n = e[0].toUpperCase() + e.slice(1);
    return {
        get: () => l,
        set(t) {
            this[n] = t
        }
    }
});
R.freezeMethods(yt);
const Ue = yt;

function Rt(l, e) {
    const n = this || Jt,
        t = e || n,
        i = Ue.from(t.headers);
    let s = t.data;
    return R.forEach(l, function(o) {
        s = o.call(n, s, i.normalize(), e ? e.status : void 0)
    }), i.normalize(), s
}

function cl(l) {
    return !!(l && l.__CANCEL__)
}

function at(l, e, n) {
    ce.call(this, l ?? "canceled", ce.ERR_CANCELED, e, n), this.name = "CanceledError"
}
R.inherits(at, ce, {
    __CANCEL__: !0
});

function So(l, e, n) {
    const t = n.config.validateStatus;
    !n.status || !t || t(n.status) ? l(n) : e(new ce("Request failed with status code " + n.status, [ce.ERR_BAD_REQUEST, ce.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4], n.config, n.request, n))
}
const Io = Be.hasStandardBrowserEnv ? {
    write(l, e, n, t, i, s) {
        const r = [l + "=" + encodeURIComponent(e)];
        R.isNumber(n) && r.push("expires=" + new Date(n).toGMTString()), R.isString(t) && r.push("path=" + t), R.isString(i) && r.push("domain=" + i), s === !0 && r.push("secure"), document.cookie = r.join("; ")
    },
    read(l) {
        const e = document.cookie.match(new RegExp("(^|;\\s*)(" + l + ")=([^;]*)"));
        return e ? decodeURIComponent(e[3]) : null
    },
    remove(l) {
        this.write(l, "", Date.now() - 864e5)
    }
} : {
    write() {},
    read() {
        return null
    },
    remove() {}
};

function xo(l) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(l)
}

function Co(l, e) {
    return e ? l.replace(/\/?\/$/, "") + "/" + e.replace(/^\/+/, "") : l
}

function fl(l, e) {
    return l && !xo(e) ? Co(l, e) : e
}
const Ro = Be.hasStandardBrowserEnv ? function() {
    const e = /(msie|trident)/i.test(navigator.userAgent),
        n = document.createElement("a");
    let t;

    function i(s) {
        let r = s;
        return e && (n.setAttribute("href", r), r = n.href), n.setAttribute("href", r), {
            href: n.href,
            protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
            host: n.host,
            search: n.search ? n.search.replace(/^\?/, "") : "",
            hash: n.hash ? n.hash.replace(/^#/, "") : "",
            hostname: n.hostname,
            port: n.port,
            pathname: n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname
        }
    }
    return t = i(window.location.href),
        function(r) {
            const o = R.isString(r) ? i(r) : r;
            return o.protocol === t.protocol && o.host === t.host
        }
}() : function() {
    return function() {
        return !0
    }
}();

function Do(l) {
    const e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(l);
    return e && e[1] || ""
}

function To(l, e) {
    l = l || 10;
    const n = new Array(l),
        t = new Array(l);
    let i = 0,
        s = 0,
        r;
    return e = e !== void 0 ? e : 1e3,
        function(a) {
            const c = Date.now(),
                h = t[s];
            r || (r = c), n[i] = a, t[i] = c;
            let u = s,
                f = 0;
            for (; u !== i;) f += n[u++], u = u % l;
            if (i = (i + 1) % l, i === s && (s = (s + 1) % l), c - r < e) return;
            const p = h && c - h;
            return p ? Math.round(f * 1e3 / p) : void 0
        }
}

function fn(l, e) {
    let n = 0;
    const t = To(50, 250);
    return i => {
        const s = i.loaded,
            r = i.lengthComputable ? i.total : void 0,
            o = s - n,
            a = t(o),
            c = s <= r;
        n = s;
        const h = {
            loaded: s,
            total: r,
            progress: r ? s / r : void 0,
            bytes: o,
            rate: a || void 0,
            estimated: a && r && c ? (r - s) / a : void 0,
            event: i
        };
        h[e ? "download" : "upload"] = !0, l(h)
    }
}
const Fo = typeof XMLHttpRequest < "u",
    Lo = Fo && function(l) {
        return new Promise(function(n, t) {
            let i = l.data;
            const s = Ue.from(l.headers).normalize();
            let {
                responseType: r,
                withXSRFToken: o
            } = l, a;

            function c() {
                l.cancelToken && l.cancelToken.unsubscribe(a), l.signal && l.signal.removeEventListener("abort", a)
            }
            let h;
            if (R.isFormData(i)) {
                if (Be.hasStandardBrowserEnv || Be.hasStandardBrowserWebWorkerEnv) s.setContentType(!1);
                else if ((h = s.getContentType()) !== !1) {
                    const [v, ...y] = h ? h.split(";").map(I => I.trim()).filter(Boolean) : [];
                    s.setContentType([v || "multipart/form-data", ...y].join("; "))
                }
            }
            let u = new XMLHttpRequest;
            if (l.auth) {
                const v = l.auth.username || "",
                    y = l.auth.password ? unescape(encodeURIComponent(l.auth.password)) : "";
                s.set("Authorization", "Basic " + btoa(v + ":" + y))
            }
            const f = fl(l.baseURL, l.url);
            u.open(l.method.toUpperCase(), rl(f, l.params, l.paramsSerializer), !0), u.timeout = l.timeout;

            function p() {
                if (!u) return;
                const v = Ue.from("getAllResponseHeaders" in u && u.getAllResponseHeaders()),
                    I = {
                        data: !r || r === "text" || r === "json" ? u.responseText : u.response,
                        status: u.status,
                        statusText: u.statusText,
                        headers: v,
                        config: l,
                        request: u
                    };
                So(function(ee) {
                    n(ee), c()
                }, function(ee) {
                    t(ee), c()
                }, I), u = null
            }
            if ("onloadend" in u ? u.onloadend = p : u.onreadystatechange = function() {
                    !u || u.readyState !== 4 || u.status === 0 && !(u.responseURL && u.responseURL.indexOf("file:") === 0) || setTimeout(p)
                }, u.onabort = function() {
                    u && (t(new ce("Request aborted", ce.ECONNABORTED, l, u)), u = null)
                }, u.onerror = function() {
                    t(new ce("Network Error", ce.ERR_NETWORK, l, u)), u = null
                }, u.ontimeout = function() {
                    let y = l.timeout ? "timeout of " + l.timeout + "ms exceeded" : "timeout exceeded";
                    const I = l.transitional || sl;
                    l.timeoutErrorMessage && (y = l.timeoutErrorMessage), t(new ce(y, I.clarifyTimeoutError ? ce.ETIMEDOUT : ce.ECONNABORTED, l, u)), u = null
                }, Be.hasStandardBrowserEnv && (o && R.isFunction(o) && (o = o(l)), o || o !== !1 && Ro(f))) {
                const v = l.xsrfHeaderName && l.xsrfCookieName && Io.read(l.xsrfCookieName);
                v && s.set(l.xsrfHeaderName, v)
            }
            i === void 0 && s.setContentType(null), "setRequestHeader" in u && R.forEach(s.toJSON(), function(y, I) {
                u.setRequestHeader(I, y)
            }), R.isUndefined(l.withCredentials) || (u.withCredentials = !!l.withCredentials), r && r !== "json" && (u.responseType = l.responseType), typeof l.onDownloadProgress == "function" && u.addEventListener("progress", fn(l.onDownloadProgress, !0)), typeof l.onUploadProgress == "function" && u.upload && u.upload.addEventListener("progress", fn(l.onUploadProgress)), (l.cancelToken || l.signal) && (a = v => {
                u && (t(!v || v.type ? new at(null, l, u) : v), u.abort(), u = null)
            }, l.cancelToken && l.cancelToken.subscribe(a), l.signal && (l.signal.aborted ? a() : l.signal.addEventListener("abort", a)));
            const m = Do(f);
            if (m && Be.protocols.indexOf(m) === -1) {
                t(new ce("Unsupported protocol " + m + ":", ce.ERR_BAD_REQUEST, l));
                return
            }
            u.send(i || null)
        })
    },
    Ot = {
        http: io,
        xhr: Lo
    };
R.forEach(Ot, (l, e) => {
    if (l) {
        try {
            Object.defineProperty(l, "name", {
                value: e
            })
        } catch {}
        Object.defineProperty(l, "adapterName", {
            value: e
        })
    }
});
const un = l => `- ${l}`,
    No = l => R.isFunction(l) || l === null || l === !1,
    ul = {
        getAdapter: l => {
            l = R.isArray(l) ? l : [l];
            const {
                length: e
            } = l;
            let n, t;
            const i = {};
            for (let s = 0; s < e; s++) {
                n = l[s];
                let r;
                if (t = n, !No(n) && (t = Ot[(r = String(n)).toLowerCase()], t === void 0)) throw new ce(`Unknown adapter '${r}'`);
                if (t) break;
                i[r || "#" + s] = t
            }
            if (!t) {
                const s = Object.entries(i).map(([o, a]) => `adapter ${o} ` + (a === !1 ? "is not supported by the environment" : "is not available in the build"));
                let r = e ? s.length > 1 ? `since :
` + s.map(un).join(`
`) : " " + un(s[0]) : "as no adapter specified";
                throw new ce("There is no suitable adapter to dispatch the request " + r, "ERR_NOT_SUPPORT")
            }
            return t
        },
        adapters: Ot
    };

function Dt(l) {
    if (l.cancelToken && l.cancelToken.throwIfRequested(), l.signal && l.signal.aborted) throw new at(null, l)
}

function dn(l) {
    return Dt(l), l.headers = Ue.from(l.headers), l.data = Rt.call(l, l.transformRequest), ["post", "put", "patch"].indexOf(l.method) !== -1 && l.headers.setContentType("application/x-www-form-urlencoded", !1), ul.getAdapter(l.adapter || Jt.adapter)(l).then(function(t) {
        return Dt(l), t.data = Rt.call(l, l.transformResponse, t), t.headers = Ue.from(t.headers), t
    }, function(t) {
        return cl(t) || (Dt(l), t && t.response && (t.response.data = Rt.call(l, l.transformResponse, t.response), t.response.headers = Ue.from(t.response.headers))), Promise.reject(t)
    })
}
const hn = l => l instanceof Ue ? {
    ...l
} : l;

function Xe(l, e) {
    e = e || {};
    const n = {};

    function t(c, h, u) {
        return R.isPlainObject(c) && R.isPlainObject(h) ? R.merge.call({
            caseless: u
        }, c, h) : R.isPlainObject(h) ? R.merge({}, h) : R.isArray(h) ? h.slice() : h
    }

    function i(c, h, u) {
        if (R.isUndefined(h)) {
            if (!R.isUndefined(c)) return t(void 0, c, u)
        } else return t(c, h, u)
    }

    function s(c, h) {
        if (!R.isUndefined(h)) return t(void 0, h)
    }

    function r(c, h) {
        if (R.isUndefined(h)) {
            if (!R.isUndefined(c)) return t(void 0, c)
        } else return t(void 0, h)
    }

    function o(c, h, u) {
        if (u in e) return t(c, h);
        if (u in l) return t(void 0, c)
    }
    const a = {
        url: s,
        method: s,
        data: s,
        baseURL: r,
        transformRequest: r,
        transformResponse: r,
        paramsSerializer: r,
        timeout: r,
        timeoutMessage: r,
        withCredentials: r,
        withXSRFToken: r,
        adapter: r,
        responseType: r,
        xsrfCookieName: r,
        xsrfHeaderName: r,
        onUploadProgress: r,
        onDownloadProgress: r,
        decompress: r,
        maxContentLength: r,
        maxBodyLength: r,
        beforeRedirect: r,
        transport: r,
        httpAgent: r,
        httpsAgent: r,
        cancelToken: r,
        socketPath: r,
        responseEncoding: r,
        validateStatus: o,
        headers: (c, h) => i(hn(c), hn(h), !0)
    };
    return R.forEach(Object.keys(Object.assign({}, l, e)), function(h) {
        const u = a[h] || i,
            f = u(l[h], e[h], h);
        R.isUndefined(f) && u !== o || (n[h] = f)
    }), n
}
const dl = "1.6.8",
    Xt = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((l, e) => {
    Xt[l] = function(t) {
        return typeof t === l || "a" + (e < 1 ? "n " : " ") + l
    }
});
const pn = {};
Xt.transitional = function(e, n, t) {
    function i(s, r) {
        return "[Axios v" + dl + "] Transitional option '" + s + "'" + r + (t ? ". " + t : "")
    }
    return (s, r, o) => {
        if (e === !1) throw new ce(i(r, " has been removed" + (n ? " in " + n : "")), ce.ERR_DEPRECATED);
        return n && !pn[r] && (pn[r] = !0, console.warn(i(r, " has been deprecated since v" + n + " and will be removed in the near future"))), e ? e(s, r, o) : !0
    }
};

function Po(l, e, n) {
    if (typeof l != "object") throw new ce("options must be an object", ce.ERR_BAD_OPTION_VALUE);
    const t = Object.keys(l);
    let i = t.length;
    for (; i-- > 0;) {
        const s = t[i],
            r = e[s];
        if (r) {
            const o = l[s],
                a = o === void 0 || r(o, s, l);
            if (a !== !0) throw new ce("option " + s + " must be " + a, ce.ERR_BAD_OPTION_VALUE);
            continue
        }
        if (n !== !0) throw new ce("Unknown option " + s, ce.ERR_BAD_OPTION)
    }
}
const jt = {
        assertOptions: Po,
        validators: Xt
    },
    ze = jt.validators;
class vt {
    constructor(e) {
        this.defaults = e, this.interceptors = {
            request: new an,
            response: new an
        }
    }
    async request(e, n) {
        try {
            return await this._request(e, n)
        } catch (t) {
            if (t instanceof Error) {
                let i;
                Error.captureStackTrace ? Error.captureStackTrace(i = {}) : i = new Error;
                const s = i.stack ? i.stack.replace(/^.+\n/, "") : "";
                t.stack ? s && !String(t.stack).endsWith(s.replace(/^.+\n.+\n/, "")) && (t.stack += `
` + s) : t.stack = s
            }
            throw t
        }
    }
    _request(e, n) {
        typeof e == "string" ? (n = n || {}, n.url = e) : n = e || {}, n = Xe(this.defaults, n);
        const {
            transitional: t,
            paramsSerializer: i,
            headers: s
        } = n;
        t !== void 0 && jt.assertOptions(t, {
            silentJSONParsing: ze.transitional(ze.boolean),
            forcedJSONParsing: ze.transitional(ze.boolean),
            clarifyTimeoutError: ze.transitional(ze.boolean)
        }, !1), i != null && (R.isFunction(i) ? n.paramsSerializer = {
            serialize: i
        } : jt.assertOptions(i, {
            encode: ze.function,
            serialize: ze.function
        }, !0)), n.method = (n.method || this.defaults.method || "get").toLowerCase();
        let r = s && R.merge(s.common, s[n.method]);
        s && R.forEach(["delete", "get", "head", "post", "put", "patch", "common"], m => {
            delete s[m]
        }), n.headers = Ue.concat(r, s);
        const o = [];
        let a = !0;
        this.interceptors.request.forEach(function(v) {
            typeof v.runWhen == "function" && v.runWhen(n) === !1 || (a = a && v.synchronous, o.unshift(v.fulfilled, v.rejected))
        });
        const c = [];
        this.interceptors.response.forEach(function(v) {
            c.push(v.fulfilled, v.rejected)
        });
        let h, u = 0,
            f;
        if (!a) {
            const m = [dn.bind(this), void 0];
            for (m.unshift.apply(m, o), m.push.apply(m, c), f = m.length, h = Promise.resolve(n); u < f;) h = h.then(m[u++], m[u++]);
            return h
        }
        f = o.length;
        let p = n;
        for (u = 0; u < f;) {
            const m = o[u++],
                v = o[u++];
            try {
                p = m(p)
            } catch (y) {
                v.call(this, y);
                break
            }
        }
        try {
            h = dn.call(this, p)
        } catch (m) {
            return Promise.reject(m)
        }
        for (u = 0, f = c.length; u < f;) h = h.then(c[u++], c[u++]);
        return h
    }
    getUri(e) {
        e = Xe(this.defaults, e);
        const n = fl(e.baseURL, e.url);
        return rl(n, e.params, e.paramsSerializer)
    }
}
R.forEach(["delete", "get", "head", "options"], function(e) {
    vt.prototype[e] = function(n, t) {
        return this.request(Xe(t || {}, {
            method: e,
            url: n,
            data: (t || {}).data
        }))
    }
});
R.forEach(["post", "put", "patch"], function(e) {
    function n(t) {
        return function(s, r, o) {
            return this.request(Xe(o || {}, {
                method: e,
                headers: t ? {
                    "Content-Type": "multipart/form-data"
                } : {},
                url: s,
                data: r
            }))
        }
    }
    vt.prototype[e] = n(), vt.prototype[e + "Form"] = n(!0)
});
const ut = vt;
class Zt {
    constructor(e) {
        if (typeof e != "function") throw new TypeError("executor must be a function.");
        let n;
        this.promise = new Promise(function(s) {
            n = s
        });
        const t = this;
        this.promise.then(i => {
            if (!t._listeners) return;
            let s = t._listeners.length;
            for (; s-- > 0;) t._listeners[s](i);
            t._listeners = null
        }), this.promise.then = i => {
            let s;
            const r = new Promise(o => {
                t.subscribe(o), s = o
            }).then(i);
            return r.cancel = function() {
                t.unsubscribe(s)
            }, r
        }, e(function(s, r, o) {
            t.reason || (t.reason = new at(s, r, o), n(t.reason))
        })
    }
    throwIfRequested() {
        if (this.reason) throw this.reason
    }
    subscribe(e) {
        if (this.reason) {
            e(this.reason);
            return
        }
        this._listeners ? this._listeners.push(e) : this._listeners = [e]
    }
    unsubscribe(e) {
        if (!this._listeners) return;
        const n = this._listeners.indexOf(e);
        n !== -1 && this._listeners.splice(n, 1)
    }
    static source() {
        let e;
        return {
            token: new Zt(function(i) {
                e = i
            }),
            cancel: e
        }
    }
}
const Mo = Zt;

function Bo(l) {
    return function(n) {
        return l.apply(null, n)
    }
}

function Oo(l) {
    return R.isObject(l) && l.isAxiosError === !0
}
const Vt = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511
};
Object.entries(Vt).forEach(([l, e]) => {
    Vt[e] = l
});
const jo = Vt;

function hl(l) {
    const e = new ut(l),
        n = Gi(ut.prototype.request, e);
    return R.extend(n, ut.prototype, e, {
        allOwnKeys: !0
    }), R.extend(n, e, null, {
        allOwnKeys: !0
    }), n.create = function(i) {
        return hl(Xe(l, i))
    }, n
}
const Ie = hl(Jt);
Ie.Axios = ut;
Ie.CanceledError = at;
Ie.CancelToken = Mo;
Ie.isCancel = cl;
Ie.VERSION = dl;
Ie.toFormData = Et;
Ie.AxiosError = ce;
Ie.Cancel = Ie.CanceledError;
Ie.all = function(e) {
    return Promise.all(e)
};
Ie.spread = Bo;
Ie.isAxiosError = Oo;
Ie.mergeConfig = Xe;
Ie.AxiosHeaders = Ue;
Ie.formToJSON = l => al(R.isHTMLForm(l) ? new FormData(l) : l);
Ie.getAdapter = ul.getAdapter;
Ie.HttpStatusCode = jo;
Ie.default = Ie;
const Vo = Ie;

function Ho(l) {
    let e = l && l.colors || ["#D61C59", "#E7D84B", "#1B8798"],
        n = l && l.element,
        t = n || document.body,
        i = window.innerWidth,
        s = window.innerHeight;
    const r = {
            x: i / 2,
            y: i / 2
        },
        o = {
            x: i / 2,
            y: i / 2
        },
        a = [],
        c = [];
    let h, u, f;
    const p = window.matchMedia("(prefers-reduced-motion: reduce)");

    function m() {
        h = document.createElement("canvas"), u = h.getContext("2d"), h.style.top = "0px", h.style.left = "0px", h.style.pointerEvents = "none", n ? (h.style.position = "absolute", t.appendChild(h), h.width = t.clientWidth, h.height = t.clientHeight) : (h.style.position = "fixed", t.appendChild(h), h.width = i, h.height = s), u.font = "21px serif", u.textBaseline = "middle", u.textAlign = "center", e.forEach(S => {
            let C = u.measureText("*"),
                F = document.createElement("canvas"),
                U = F.getContext("2d");
            F.width = C.width, F.height = C.actualBoundingBoxAscent + C.actualBoundingBoxDescent, U.fillStyle = S, U.textAlign = "center", U.font = "21px serif", U.textBaseline = "middle", U.fillText("*", F.width / 2, C.actualBoundingBoxAscent), c.push(F)
        }), t.addEventListener("mousemove", I), t.addEventListener("touchmove", y, {
            passive: !0
        }), t.addEventListener("touchstart", y, {
            passive: !0
        }), window.addEventListener("resize", v), ee()
    }

    function v(S) {
        i = window.innerWidth, s = window.innerHeight, n ? (h.width = t.clientWidth, h.height = t.clientHeight) : (h.width = i, h.height = s)
    }

    function y(S) {
        if (S.touches.length > 0)
            for (let C = 0; C < S.touches.length; C++) Q(S.touches[C].clientX, S.touches[C].clientY, c[Math.floor(Math.random() * c.length)])
    }

    function I(S) {
        window.requestAnimationFrame(() => {
            if (n) {
                const C = t.getBoundingClientRect();
                r.x = S.clientX - C.left, r.y = S.clientY - C.top
            } else r.x = S.clientX, r.y = S.clientY;
            Math.hypot(r.x - o.x, r.y - o.y) > 1.5 && (Q(r.x, r.y, c[Math.floor(Math.random() * e.length)]), o.x = r.x, o.y = r.y)
        })
    }

    function Q(S, C, F) {
        a.push(new x(S, C, F))
    }

    function ee() {
        (function() {
            if (a.length != 0) {
                u.clearRect(0, 0, i, s);
                for (let S = 0; S < a.length; S++) a[S].update(u);
                for (let S = a.length - 1; S >= 0; S--) a[S].lifeSpan < 0 && a.splice(S, 1);
                a.length == 0 && u.clearRect(0, 0, i, s)
            }
        })(), f = requestAnimationFrame(ee)
    }

    function L() {
        h.remove(), cancelAnimationFrame(f), t.removeEventListener("mousemove", I), t.removeEventListener("touchmove", y), t.removeEventListener("touchstart", y), window.addEventListener("resize", v)
    }

    function x(S, C, F) {
        const U = Math.floor(30 * Math.random() + 60);
        this.initialLifeSpan = U, this.lifeSpan = U, this.velocity = {
            x: (Math.random() < .5 ? -1 : 1) * (Math.random() / 2),
            y: .7 * Math.random() + .9
        }, this.position = {
            x: S,
            y: C
        }, this.canv = F, this.update = function(N) {
            this.position.x += this.velocity.x, this.position.y += this.velocity.y, this.lifeSpan--, this.velocity.y += .02;
            const Z = Math.max(this.lifeSpan / this.initialLifeSpan, 0);
            N.drawImage(this.canv, this.position.x - this.canv.width / 2 * Z, this.position.y - this.canv.height / 2, this.canv.width * Z, this.canv.height * Z)
        }
    }
    return p.onchange = () => {
        p.matches ? L() : m()
    }, m(), {
        destroy: L
    }
}

function Uo(l) {
    let e, n, t, i = l && l.element,
        s = i || document.body,
        r = ["❄️"],
        o = window.innerWidth,
        a = window.innerHeight,
        c = {
            x: o / 2,
            y: o / 2
        },
        h = [],
        u = [];
    const f = window.matchMedia("(prefers-reduced-motion: reduce)");

    function p() {
        e = document.createElement("canvas"), n = e.getContext("2d"), e.style.top = "0px", e.style.left = "0px", e.style.pointerEvents = "none", i ? (e.style.position = "absolute", s.appendChild(e), e.width = s.clientWidth, e.height = s.clientHeight) : (e.style.position = "fixed", document.body.appendChild(e), e.width = o, e.height = a), n.font = "12px serif", n.textBaseline = "middle", n.textAlign = "center", r.forEach(x => {
            let S = n.measureText(x),
                C = document.createElement("canvas"),
                F = C.getContext("2d");
            C.width = S.width, C.height = 2 * S.actualBoundingBoxAscent, F.textAlign = "center", F.font = "12px serif", F.textBaseline = "middle", F.fillText(x, C.width / 2, S.actualBoundingBoxAscent), u.push(C)
        }), s.addEventListener("mousemove", y), s.addEventListener("touchmove", v, {
            passive: !0
        }), s.addEventListener("touchstart", v, {
            passive: !0
        }), window.addEventListener("resize", m), Q()
    }

    function m(x) {
        o = window.innerWidth, a = window.innerHeight, i ? (e.width = s.clientWidth, e.height = s.clientHeight) : (e.width = o, e.height = a)
    }

    function v(x) {
        if (x.touches.length > 0)
            for (let S = 0; S < x.touches.length; S++) I(x.touches[S].clientX, x.touches[S].clientY, u[Math.floor(Math.random() * u.length)])
    }

    function y(x) {
        if (i) {
            const S = s.getBoundingClientRect();
            c.x = x.clientX - S.left, c.y = x.clientY - S.top
        } else c.x = x.clientX, c.y = x.clientY;
        I(c.x, c.y, u[Math.floor(Math.random() * r.length)])
    }

    function I(x, S, C) {
        h.push(new L(x, S, C))
    }

    function Q() {
        (function() {
            if (h.length != 0) {
                n.clearRect(0, 0, o, a);
                for (let x = 0; x < h.length; x++) h[x].update(n);
                for (let x = h.length - 1; x >= 0; x--) h[x].lifeSpan < 0 && h.splice(x, 1);
                h.length == 0 && n.clearRect(0, 0, o, a)
            }
        })(), t = requestAnimationFrame(Q)
    }

    function ee() {
        e.remove(), cancelAnimationFrame(t), s.removeEventListener("mousemove", y), s.removeEventListener("touchmove", v), s.removeEventListener("touchstart", v), window.addEventListener("resize", m)
    }

    function L(x, S, C) {
        const F = Math.floor(60 * Math.random() + 80);
        this.initialLifeSpan = F, this.lifeSpan = F, this.velocity = {
            x: (Math.random() < .5 ? -1 : 1) * (Math.random() / 2),
            y: 1 + Math.random()
        }, this.position = {
            x,
            y: S
        }, this.canv = C, this.update = function(U) {
            this.position.x += this.velocity.x, this.position.y += this.velocity.y, this.lifeSpan--, this.velocity.x += 2 * (Math.random() < .5 ? -1 : 1) / 75, this.velocity.y -= Math.random() / 300;
            const N = Math.max(this.lifeSpan / this.initialLifeSpan, 0),
                Z = .0174533 * (2 * this.lifeSpan);
            U.translate(this.position.x, this.position.y), U.rotate(Z), U.drawImage(this.canv, -this.canv.width / 2 * N, -this.canv.height / 2, this.canv.width * N, this.canv.height * N), U.rotate(-Z), U.translate(-this.position.x, -this.position.y)
        }
    }
    return f.onchange = () => {
        f.matches ? ee() : p()
    }, p(), {
        destroy: ee
    }
}

function zo(l) {
    let e, n, t, i = l && l.element,
        s = i || document.body,
        r = window.innerWidth,
        o = window.innerHeight,
        a = {
            x: r / 2,
            y: r / 2
        },
        c = [];
    const h = (l == null ? void 0 : l.particles) || 15,
        u = (l == null ? void 0 : l.rate) || .4,
        f = (l == null ? void 0 : l.baseImageSrc) || "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAATCAYAAACk9eypAAAAAXNSR0IArs4c6QAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAhGVYSWZNTQAqAAAACAAFARIAAwAAAAEAAQAAARoABQAAAAEAAABKARsABQAAAAEAAABSASgAAwAAAAEAAgAAh2kABAAAAAEAAABaAAAAAAAAAEgAAAABAAAASAAAAAEAA6ABAAMAAAABAAEAAKACAAQAAAABAAAADKADAAQAAAABAAAAEwAAAAAChpcNAAAACXBIWXMAAAsTAAALEwEAmpwYAAABWWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS40LjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyI+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgpMwidZAAABqElEQVQoFY3SPUvDQBgH8BREpRHExYiDgmLFl6WC+AYmWeyLg4i7buJX8DMpOujgyxGvUYeCgzhUQUSKKLUS0+ZyptXh8Z5Ti621ekPyJHl+uftfomhaf9Ei5JyxXKfynyEA6EYcLHpwyflT958GAQ7DTABNHd8EbtDbEH2BD5QEQmi2mM8P/Iq+A0SzszEg+3sPjDnDdVEtQKQbMUidHD3xVzf6A9UDEmEm+8h9KTqTVUjT+vB53aHrCbAPiceYq1dQI1Aqv4EhMll0jzv+Y0yiRgCnLRSYyDQHVoqUXe4uKL9l+L7GXC4vkMhE6eW/AOJs9k583ORDUyXMZ8F5SVHVVnllmPNKSFagAJ5DofaqGXw/gHBYg51dIldkmknY3tguv3jOtHR4+MqAzaraJXbEhqHhcQlwGSOi5pytVQHZLN5s0WNe8HPrLYlFsO20RPHkImxsbmHdLJFI76th7Z4SeuF53hTeFLvhRCJRCTKZKxgdnRDbW+iozFJbBMw14/ElwGYc0egMBMFzT21f5Rog33Z7dX02GBm7WV5ZfT5Nn5bE3zuCDe9UxdTpNvK+5AAAAABJRU5ErkJggg==";
    let p = !1,
        m = new Image;
    m.src = f;
    const v = window.matchMedia("(prefers-reduced-motion: reduce)");

    function y() {
        e = document.createElement("canvas"), n = e.getContext("2d"), e.style.top = "0px", e.style.left = "0px", e.style.pointerEvents = "none", i ? (e.style.position = "absolute", s.appendChild(e), e.width = s.clientWidth, e.height = s.clientHeight) : (e.style.position = "fixed", document.body.appendChild(e), e.width = r, e.height = o), s.addEventListener("mousemove", Q), window.addEventListener("resize", I), ee()
    }

    function I(S) {
        r = window.innerWidth, o = window.innerHeight, i ? (e.width = s.clientWidth, e.height = s.clientHeight) : (e.width = r, e.height = o)
    }

    function Q(S) {
        if (i) {
            const N = s.getBoundingClientRect();
            a.x = S.clientX - N.left, a.y = S.clientY - N.top
        } else a.x = S.clientX, a.y = S.clientY;
        if (p === !1) {
            p = !0;
            for (let N = 0; N < h; N++) C = a.x, F = a.y, U = m, c.push(new x(C, F, U))
        }
        var C, F, U
    }

    function ee() {
        (function() {
            n.clearRect(0, 0, r, o);
            let S = a.x,
                C = a.y;
            c.forEach(function(F, U, N) {
                let Z = N[U + 1] || N[0];
                F.position.x = S, F.position.y = C, F.move(n), S += (Z.position.x - F.position.x) * u, C += (Z.position.y - F.position.y) * u
            })
        })(), t = requestAnimationFrame(ee)
    }

    function L() {
        e.remove(), cancelAnimationFrame(t), s.removeEventListener("mousemove", Q), window.addEventListener("resize", I)
    }

    function x(S, C, F) {
        this.position = {
            x: S,
            y: C
        }, this.image = F, this.move = function(U) {
            U.drawImage(this.image, this.position.x, this.position.y)
        }
    }
    return v.onchange = () => {
        v.matches ? L() : y()
    }, y(), {
        destroy: L
    }
}

function Wo(l) {
    let e, n, t = l && l.element,
        i = t || document.body,
        s = window.innerWidth,
        r = window.innerHeight,
        o = {
            x: s / 2,
            y: s / 2
        },
        a = new function(y, I, Q, ee) {
            this.position = {
                x: y,
                y: I
            }, this.width = Q, this.lag = ee, this.moveTowards = function(L, x, S) {
                this.position.x += (L - this.position.x) / this.lag, this.position.y += (x - this.position.y) / this.lag, S.fillStyle = c, S.beginPath(), S.arc(this.position.x, this.position.y, this.width, 0, 2 * Math.PI), S.fill(), S.closePath()
            }
        }(s / 2, r / 2, 10, 10),
        c = (l == null ? void 0 : l.color) || "#323232a6";
    const h = window.matchMedia("(prefers-reduced-motion: reduce)");

    function u() {
        e = document.createElement("canvas"), n = e.getContext("2d"), e.style.top = "0px", e.style.left = "0px", e.style.pointerEvents = "none", t ? (e.style.position = "absolute", i.appendChild(e), e.width = i.clientWidth, e.height = i.clientHeight) : (e.style.position = "fixed", document.body.appendChild(e), e.width = s, e.height = r), i.addEventListener("mousemove", p), window.addEventListener("resize", f), m()
    }

    function f(y) {
        s = window.innerWidth, r = window.innerHeight, t ? (e.width = i.clientWidth, e.height = i.clientHeight) : (e.width = s, e.height = r)
    }

    function p(y) {
        if (t) {
            const I = i.getBoundingClientRect();
            o.x = y.clientX - I.left, o.y = y.clientY - I.top
        } else o.x = y.clientX, o.y = y.clientY
    }

    function m() {
        n.clearRect(0, 0, s, r), a.moveTowards(o.x, o.y, n), requestAnimationFrame(m)
    }

    function v() {
        e.remove(), cancelAnimationFrame(m), i.removeEventListener("mousemove", p), window.addEventListener("resize", f)
    }
    return h.onchange = () => {
        h.matches ? v() : u()
    }, u(), {
        destroy: v
    }
}

function qo(l) {
    let e, n, t, i = l && l.element,
        s = i || document.body,
        r = window.innerWidth,
        o = window.innerHeight,
        a = {
            x: r / 2,
            y: r / 2
        },
        c = [],
        h = [];
    const u = window.matchMedia("(prefers-reduced-motion: reduce)");

    function f() {
        e = document.createElement("canvas"), n = e.getContext("2d"), e.style.top = "0px", e.style.left = "0px", e.style.pointerEvents = "none", i ? (e.style.position = "absolute", s.appendChild(e), e.width = s.clientWidth, e.height = s.clientHeight) : (e.style.position = "fixed", document.body.appendChild(e), e.width = r, e.height = o), s.addEventListener("mousemove", v), s.addEventListener("touchmove", m, {
            passive: !0
        }), s.addEventListener("touchstart", m, {
            passive: !0
        }), window.addEventListener("resize", p), I()
    }

    function p(L) {
        r = window.innerWidth, o = window.innerHeight, i ? (e.width = s.clientWidth, e.height = s.clientHeight) : (e.width = r, e.height = o)
    }

    function m(L) {
        if (L.touches.length > 0)
            for (let x = 0; x < L.touches.length; x++) y(L.touches[x].clientX, L.touches[x].clientY, h[Math.floor(Math.random() * h.length)])
    }

    function v(L) {
        if (i) {
            const x = s.getBoundingClientRect();
            a.x = L.clientX - x.left, a.y = L.clientY - x.top
        } else a.x = L.clientX, a.y = L.clientY;
        y(a.x, a.y)
    }

    function y(L, x, S) {
        c.push(new ee(L, x, S))
    }

    function I() {
        (function() {
            if (c.length != 0) {
                n.clearRect(0, 0, r, o);
                for (let L = 0; L < c.length; L++) c[L].update(n);
                for (let L = c.length - 1; L >= 0; L--) c[L].lifeSpan < 0 && c.splice(L, 1);
                c.length == 0 && n.clearRect(0, 0, r, o)
            }
        })(), t = requestAnimationFrame(I)
    }

    function Q() {
        e.remove(), cancelAnimationFrame(t), s.removeEventListener("mousemove", v), s.removeEventListener("touchmove", m), s.removeEventListener("touchstart", m), window.addEventListener("resize", p)
    }

    function ee(L, x, S) {
        const C = Math.floor(60 * Math.random() + 60);
        this.initialLifeSpan = C, this.lifeSpan = C, this.velocity = {
            x: (Math.random() < .5 ? -1 : 1) * (Math.random() / 10),
            y: -1 * Math.random() - .4
        }, this.position = {
            x: L,
            y: x
        }, this.canv = S, this.baseDimension = 4, this.update = function(F) {
            this.position.x += this.velocity.x, this.position.y += this.velocity.y, this.velocity.x += 2 * (Math.random() < .5 ? -1 : 1) / 75, this.velocity.y -= Math.random() / 600, this.lifeSpan--;
            const U = .2 + (this.initialLifeSpan - this.lifeSpan) / this.initialLifeSpan;
            F.fillStyle = "#e6f1f7", F.strokeStyle = "#3a92c5", F.beginPath(), F.arc(this.position.x - this.baseDimension / 2 * U, this.position.y - this.baseDimension / 2, this.baseDimension * U, 0, 2 * Math.PI), F.stroke(), F.fill(), F.closePath()
        }
    }
    return u.onchange = () => {
        u.matches ? Q() : f()
    }, f(), {
        destroy: Q
    }
}

function Go(l) {
    let e, n, t, i = l && l.element,
        s = i || document.body,
        r = l && l.randomDelay,
        o = l && l.minDelay || 5,
        a = l && l.maxDelay || 50,
        c = window.innerWidth,
        h = window.innerHeight,
        u = {
            x: c / 2,
            y: c / 2
        },
        f = [],
        p = new Image;
    l && l.image ? p.src = l.image : p.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAATCAYAAACk9eypAAAAAXNSR0IArs4c6QAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAhGVYSWZNTQAqAAAACAAFARIAAwAAAAEAAQAAARoABQAAAAEAAABKARsABQAAAAEAAABSASgAAwAAAAEAAgAAh2kABAAAAAEAAABaAAAAAAAAAEgAAAABAAAASAAAAAEAA6ABAAMAAAABAAEAAKACAAQAAAABAAAADKADAAQAAAABAAAAEwAAAAAChpcNAAAACXBIWXMAAAsTAAALEwEAmpwYAAABWWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS40LjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyI+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgpMwidZAAABqElEQVQoFY3SPUvDQBgH8BREpRHExYiDgmLFl6WC+AYmWeyLg4i7buJX8DMpOujgyxGvUYeCgzhUQUSKKLUS0+ZyptXh8Z5Ti621ekPyJHl+uftfomhaf9Ei5JyxXKfynyEA6EYcLHpwyflT958GAQ7DTABNHd8EbtDbEH2BD5QEQmi2mM8P/Iq+A0SzszEg+3sPjDnDdVEtQKQbMUidHD3xVzf6A9UDEmEm+8h9KTqTVUjT+vB53aHrCbAPiceYq1dQI1Aqv4EhMll0jzv+Y0yiRgCnLRSYyDQHVoqUXe4uKL9l+L7GXC4vkMhE6eW/AOJs9k583ORDUyXMZ8F5SVHVVnllmPNKSFagAJ5DofaqGXw/gHBYg51dIldkmknY3tguv3jOtHR4+MqAzaraJXbEhqHhcQlwGSOi5pytVQHZLN5s0WNe8HPrLYlFsO20RPHkImxsbmHdLJFI76th7Z4SeuF53hTeFLvhRCJRCTKZKxgdnRDbW+iozFJbBMw14/ElwGYc0egMBMFzT21f5Rog33Z7dX02GBm7WV5ZfT5Nn5bE3zuCDe9UxdTpNvK+5AAAAABJRU5ErkJggg==";
    const m = window.matchMedia("(prefers-reduced-motion: reduce)");

    function v() {
        e = document.createElement("canvas"), n = e.getContext("2d"), e.style.top = "0px", e.style.left = "0px", e.style.pointerEvents = "none", i ? (e.style.position = "absolute", s.appendChild(e), e.width = s.clientWidth, e.height = s.clientHeight) : (e.style.position = "fixed", document.body.appendChild(e), e.width = c, e.height = h), s.addEventListener("mousemove", x), s.addEventListener("touchmove", I, {
            passive: !0
        }), s.addEventListener("touchstart", I, {
            passive: !0
        }), window.addEventListener("resize", y), C()
    }

    function y(N) {
        c = window.innerWidth, h = window.innerHeight, i ? (e.width = s.clientWidth, e.height = s.clientHeight) : (e.width = c, e.height = h)
    }

    function I(N) {
        if (N.touches.length > 0)
            for (let Z = 0; Z < N.touches.length; Z++) S(N.touches[Z].clientX, N.touches[Z].clientY, p)
    }
    m.onchange = () => {
        m.matches ? F() : v()
    };
    let Q = () => Math.floor(Math.random() * (a - o + 1)) + o,
        ee = Date.now(),
        L = Q();

    function x(N) {
        if (r) {
            if (ee + L > Date.now()) return;
            ee = Date.now(), L = Q()
        }
        if (i) {
            const Z = s.getBoundingClientRect();
            u.x = N.clientX - Z.left, u.y = N.clientY - Z.top
        } else u.x = N.clientX, u.y = N.clientY;
        S(u.x, u.y, p)
    }

    function S(N, Z, te) {
        f.push(new U(N, Z, te))
    }

    function C() {
        (function() {
            if (f.length != 0) {
                n.clearRect(0, 0, c, h);
                for (let N = 0; N < f.length; N++) f[N].update(n);
                for (let N = f.length - 1; N >= 0; N--) f[N].lifeSpan < 0 && f.splice(N, 1);
                f.length == 0 && n.clearRect(0, 0, c, h)
            }
        })(), t = requestAnimationFrame(C)
    }

    function F() {
        e.remove(), cancelAnimationFrame(t), s.removeEventListener("mousemove", x), s.removeEventListener("touchmove", I), s.removeEventListener("touchstart", I), window.addEventListener("resize", y)
    }

    function U(N, Z, te) {
        this.initialLifeSpan = 40, this.lifeSpan = 40, this.position = {
            x: N,
            y: Z
        }, this.image = te, this.update = function(H) {
            this.lifeSpan--;
            const z = Math.max(this.lifeSpan / this.initialLifeSpan, 0);
            H.globalAlpha = z, H.drawImage(this.image, this.position.x, this.position.y)
        }
    }
    return v(), {
        destroy: F
    }
}

function Yo(l) {
    console.log("this is a new cursor");
    let e, n, t, i = l && l.element,
        s = i || document.body,
        r = window.innerWidth,
        o = window.innerHeight,
        a = {
            x: r / 2,
            y: r / 2
        },
        c = [];
    const h = (l == null ? void 0 : l.length) || 20,
        u = (l == null ? void 0 : l.colors) || ["#FE0000", "#FD8C00", "#FFE500", "#119F0B", "#0644B3", "#C22EDC"],
        f = (l == null ? void 0 : l.size) || 3;
    let p = !1;
    const m = window.matchMedia("(prefers-reduced-motion: reduce)");

    function v() {
        e = document.createElement("canvas"), n = e.getContext("2d"), e.style.top = "0px", e.style.left = "0px", e.style.pointerEvents = "none", i ? (e.style.position = "absolute", s.appendChild(e), e.width = s.clientWidth, e.height = s.clientHeight) : (e.style.position = "fixed", document.body.appendChild(e), e.width = r, e.height = o), s.addEventListener("mousemove", I), window.addEventListener("resize", y), Q()
    }

    function y(x) {
        r = window.innerWidth, o = window.innerHeight, i ? (e.width = s.clientWidth, e.height = s.clientHeight) : (e.width = r, e.height = o)
    }

    function I(x) {
        if (i) {
            const F = s.getBoundingClientRect();
            a.x = x.clientX - F.left, a.y = x.clientY - F.top
        } else a.x = x.clientX, a.y = x.clientY;
        if (p === !1) {
            p = !0;
            for (let F = 0; F < h; F++) S = a.x, C = a.y, c.push(new L(S, C))
        }
        var S, C
    }

    function Q() {
        (function() {
            n.clearRect(0, 0, r, o), n.lineJoin = "round";
            let x = [],
                S = a.x,
                C = a.y;
            c.forEach(function(F, U, N) {
                let Z = N[U + 1] || N[0];
                F.position.x = S, F.position.y = C, x.push({
                    x: S,
                    y: C
                }), S += .4 * (Z.position.x - F.position.x), C += .4 * (Z.position.y - F.position.y)
            }), u.forEach((F, U) => {
                n.beginPath(), n.strokeStyle = F, x.length && n.moveTo(x[0].x, x[0].y + U * (f - 1)), x.forEach((N, Z) => {
                    Z !== 0 && n.lineTo(N.x, N.y + U * f)
                }), n.lineWidth = f, n.lineCap = "round", n.stroke()
            })
        })(), t = requestAnimationFrame(Q)
    }

    function ee() {
        e.remove(), cancelAnimationFrame(t), s.removeEventListener("mousemove", I), window.addEventListener("resize", y)
    }

    function L(x, S) {
        this.position = {
            x,
            y: S
        }
    }
    return m.onchange = () => {
        m.matches ? ee() : v()
    }, v(), {
        destroy: ee
    }
}
var Qt = {},
    St = {};

function Ht(l, e, n = 0, t = l.length) {
    if (t % e) throw new Error("Bad buffer length.");
    for (let i = n; i < t; i += e) Jo(l, e, i)
}

function Jo(l, e, n) {
    e--;
    for (let t = 0; t < e; t++) {
        let i = l[n + t];
        l[n + t] = l[n + e], l[n + e] = i, e--
    }
}

function Xo(l, e = 0, n = l.length) {
    let t = "";
    for (let i = e; i < n;) {
        let s = 128,
            r = 191,
            o = !1,
            a = l[i++];
        if (a >= 0 && a <= 127) t += String.fromCharCode(a);
        else {
            let c = 0;
            a >= 194 && a <= 223 ? c = 1 : a >= 224 && a <= 239 ? (c = 2, l[i] === 224 && (s = 160), l[i] === 237 && (r = 159)) : a >= 240 && a <= 244 ? (c = 3, l[i] === 240 && (s = 144), l[i] === 244 && (r = 143)) : o = !0, a = a & (1 << 8 - c - 1) - 1;
            for (let h = 0; h < c; h++)(l[i] < s || l[i] > r) && (o = !0), a = a << 6 | l[i] & 63, i++;
            o ? t += String.fromCharCode(65533) : a <= 65535 ? t += String.fromCharCode(a) : (a -= 65536, t += String.fromCharCode((a >> 10 & 1023) + 55296, (a & 1023) + 56320))
        }
    }
    return t
}

function pl(l, e, n = 0) {
    for (let t = 0, i = l.length; t < i; t++) {
        let s = l.codePointAt(t);
        if (s < 128) e[n] = s, n++;
        else {
            let r = 0,
                o = 0;
            for (s <= 2047 ? (r = 1, o = 192) : s <= 65535 ? (r = 2, o = 224) : s <= 1114111 && (r = 3, o = 240, t++), e[n] = (s >> 6 * r) + o, n++; r > 0;) e[n] = 128 | s >> 6 * (r - 1) & 63, n++, r--
        }
    }
    return n
}
class Zo {
    constructor(e, n = !1, t = !1) {
        this.bits = e, this.bytes = e < 8 ? 1 : Math.ceil(e / 8), this.max = Math.pow(2, e) - 1, this.min = 0;
        let i = 8 - ((e - 1 | 7) + 1 - e);
        this.lastByteMask_ = Math.pow(2, i > 0 ? i : 8) - 1, this.unpack = this.unpackUnsigned_, n && (this.max = Math.pow(2, e) / 2 - 1, this.min = -this.max - 1, this.unpack = this.unpackSigned_), t && (this.overflow_ = this.overflowClamp_)
    }
    pack(e, n, t = 0) {
        if (n !== n || n.constructor != Number) throw new TypeError;
        n = this.overflow_(n), e[t] = (n < 0 ? n + Math.pow(2, this.bits) : n) & 255, t++;
        for (let i = 2, s = this.bytes; i < s; i++) e[t] = Math.floor(n / Math.pow(2, (i - 1) * 8)) & 255, t++;
        return this.bits > 8 && (e[t] = Math.floor(n / Math.pow(2, (this.bytes - 1) * 8)) & this.lastByteMask_, t++), t
    }
    unpack_(e, n = 0) {
        let t = 0;
        for (let i = 0; i < this.bytes; i++) t += e[n + i] * Math.pow(256, i);
        return t
    }
    unpackUnsigned_(e, n = 0) {
        return this.overflow_(this.unpack_(e, n))
    }
    unpackSigned_(e, n = 0) {
        return this.overflow_(this.sign_(this.unpack_(e, n)))
    }
    overflow_(e) {
        if (e > this.max || e < this.min) throw new RangeError;
        return e
    }
    overflowClamp_(e) {
        return e > this.max ? this.max : e < this.min ? this.min : e
    }
    sign_(e) {
        return e > this.max && (e -= this.max * 2 + 2), e
    }
}
class Tt {
    constructor(e, n) {
        this.ebits = e, this.fbits = n, this.bias = (1 << e - 1) - 1, this.numBytes = Math.ceil((e + n) / 8), this.biasP2 = Math.pow(2, this.bias + 1), this.ebitsFbits = e + n, this.fbias = Math.pow(2, -(8 * this.numBytes - 1 - e))
    }
    pack(e, n, t) {
        if (typeof n != "number") throw new TypeError;
        Math.abs(n) > this.biasP2 - this.ebitsFbits * 2 && (n = n < 0 ? -1 / 0 : 1 / 0);
        let i = ((n = +n) || 1 / n) < 0 || n < 0 ? 1 : 0;
        n = Math.abs(n);
        let s = Math.min(Math.floor(Math.log(n) / Math.LN2), 1023),
            r = Ft(n / Math.pow(2, s) * Math.pow(2, this.fbits));
        return n !== n ? (r = Math.pow(2, this.fbits - 1), s = (1 << this.ebits) - 1) : n !== 0 && (n >= Math.pow(2, 1 - this.bias) ? (r / Math.pow(2, this.fbits) >= 2 && (s = s + 1, r = 1), s > this.bias ? (s = (1 << this.ebits) - 1, r = 0) : (s = s + this.bias, r = Ft(r) - Math.pow(2, this.fbits))) : (r = Ft(n / Math.pow(2, 1 - this.bias - this.fbits)), s = 0)), this.packFloatBits_(e, t, i, s, r)
    }
    unpack(e, n) {
        let t = (1 << this.ebits) - 1,
            i, s = "";
        for (let a = this.numBytes - 1; a >= 0; a--) {
            let c = e[a + n].toString(2);
            s += "00000000".substring(c.length) + c
        }
        let r = s.charAt(0) == "1" ? -1 : 1;
        s = s.substring(1);
        let o = parseInt(s.substring(0, this.ebits), 2);
        return s = s.substring(this.ebits), o == t ? parseInt(s, 2) !== 0 ? NaN : r * (1 / 0) : (o === 0 ? (o += 1, i = parseInt(s, 2)) : i = parseInt("1" + s, 2), r * i * this.fbias * Math.pow(2, o - this.bias))
    }
    packFloatBits_(e, n, t, i, s) {
        let r = [];
        r.push(t);
        for (let u = this.ebits; u > 0; u -= 1) r[u] = i % 2 ? 1 : 0, i = Math.floor(i / 2);
        let o = r.length;
        for (let u = this.fbits; u > 0; u -= 1) r[o + u] = s % 2 ? 1 : 0, s = Math.floor(s / 2);
        let a = r.join(""),
            c = this.numBytes + n - 1,
            h = n;
        for (; c >= n;) e[c] = parseInt(a.substring(0, 8), 2), a = a.substring(8), c--, h++;
        return h
    }
}

function Ft(l) {
    let e = Math.floor(l),
        n = l - e;
    return n < .5 ? e : n > .5 || e % 2 ? e + 1 : e
}

function dt(l, e = 0, n = l.length) {
    return Xo(l, e, n)
}

function Qo(l) {
    let e = [];
    return pl(l, e, 0), e
}

function Ko(l, e, n = 0) {
    return pl(l, e, n)
}

function Kt(l, e, n, t = 0, i = !1) {
    e = e || {};
    let s = vl(e.bits, e.fp, e.signed, i),
        r = Math.ceil(e.bits / 8),
        o = 0,
        a = t;
    try {
        for (let c = l.length; o < c; o++) t = s.pack(n, l[o], t);
        e.be && Ht(n, r, a, t)
    } catch (c) {
        bl(c, l[o], o)
    }
    return t
}

function ml(l, e, n, t = 0, i = l.length, s = !1, r = !1) {
    e = e || {};
    let o = vl(e.bits, e.fp, e.signed, r),
        a = Math.ceil(e.bits / 8);
    i = na(l, t, i, a, s);
    let c = 0,
        h = t;
    try {
        for (e.be && Ht(l, a, t, i); h < i; h += a, c++) n[c] = o.unpack(l, h);
        e.be && Ht(l, a, t, i)
    } catch (u) {
        bl(u, l.slice(h, h + a), h)
    }
}

function gl(l, e, n, t = 0, i = !1) {
    return Kt([l], e, n, t, i)
}

function ea(l, e, n = !1) {
    let t = [];
    return gl(l, e, t, 0, n), t
}

function ta(l, e, n = !1) {
    let t = [];
    return Kt(l, e, t, 0, n), t
}

function _l(l, e, n = 0, t = l.length, i = !1, s = !1) {
    let r = [];
    return ml(l, e, r, n, t, i, s), r
}

function Ut(l, e, n = 0, t = !1) {
    return _l(l, e, n, n + Math.ceil(e.bits / 8), !0, t)[0]
}

function bl(l, e, n) {
    throw l.message = l.constructor.name + " at index " + n + ": " + e, l
}

function na(l, e, n, t, i) {
    let s = (n - e) % t;
    if (i && (s || l.length < t)) throw new Error("Bad buffer length");
    return n - s
}

function vl(l, e, n, t) {
    return e ? ia(l) : la(l), e && l === 16 ? new Tt(5, 11) : e && l == 32 ? new Tt(8, 23) : e && l == 64 ? new Tt(11, 52) : new Zo(l, n, t)
}
const wl = "Unsupported type";

function ia(l) {
    if (!l || l !== 16 && l !== 32 && l !== 64) throw new Error(wl + ": float, bits: " + l)
}

function la(l) {
    if (!l || l < 1 || l > 53) throw new Error(wl + ": int, bits: " + l)
}
const ra = Object.freeze(Object.defineProperty({
    __proto__: null,
    pack: ea,
    packArray: ta,
    packArrayTo: Kt,
    packString: Qo,
    packStringTo: Ko,
    packTo: gl,
    unpack: Ut,
    unpackArray: _l,
    unpackArrayTo: ml,
    unpackString: dt
}, Symbol.toStringTag, {
    value: "Module"
}));
class sa {
    constructor() {
        this.container = "", this.chunkSize = 0, this.format = "", this.signature = null, this.head = 0, this.uInt32 = {
            bits: 32,
            be: !1,
            signed: !1,
            fp: !1
        }, this.supported_containers = ["RIFF", "RIFX"]
    }
    setSignature(e) {
        if (this.head = 0, this.container = this.readString(e, 4), this.supported_containers.indexOf(this.container) === -1) throw Error("Not a supported format.");
        this.uInt32.be = this.container === "RIFX", this.chunkSize = this.readUInt32(e), this.format = this.readString(e, 4), this.signature = {
            chunkId: this.container,
            chunkSize: this.chunkSize,
            format: this.format,
            subChunks: this.getSubChunksIndex_(e),
            chunkData: {
                start: 0,
                end: this.chunkSize
            }
        }
    }
    findChunk(e, n = !1) {
        let t = this.signature.subChunks,
            i = [];
        for (let s = 0; s < t.length; s++)
            if (t[s].chunkId == e)
                if (n) i.push(t[s]);
                else return t[s];
        return e == "LIST" && i.length ? i : null
    }
    readString(e, n) {
        let t = "";
        return t = dt(e, this.head, this.head + n), this.head += n, t
    }
    readUInt32(e) {
        let n = Ut(e, this.uInt32, this.head);
        return this.head += 4, n
    }
    getSubChunksIndex_(e) {
        let n = [],
            t = this.head;
        for (; t <= e.length - 8;) n.push(this.getSubChunkIndex_(e, t)), t += 8 + n[n.length - 1].chunkSize, t = t % 2 ? t + 1 : t;
        return n
    }
    getSubChunkIndex_(e, n) {
        let t = {
            chunkId: this.getChunkId_(e, n),
            chunkSize: this.getChunkSize_(e, n)
        };
        if (t.chunkId == "LIST") t.format = dt(e, n + 8, n + 12), this.head += 4, t.subChunks = this.getSubChunksIndex_(e);
        else {
            let i = t.chunkSize % 2 ? t.chunkSize + 1 : t.chunkSize;
            this.head = n + 8 + i, t.chunkData = {
                start: n + 8,
                end: this.head
            }
        }
        return t
    }
    getChunkId_(e, n) {
        return this.head += 4, dt(e, n, n + 4)
    }
    getChunkSize_(e, n) {
        return this.head += 4, Ut(e, this.uInt32, n + 4)
    }
}
const oa = Object.freeze(Object.defineProperty({
        __proto__: null,
        RIFFFile: sa
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    aa = zi(oa),
    ca = zi(ra);
Object.defineProperty(St, "__esModule", {
    value: !0
});
St.parseAni = void 0;
var fa = aa,
    it = ca,
    Lt = {
        bits: 32,
        be: !1,
        signed: !1,
        fp: !1
    };

function ua(l) {
    var e = new fa.RIFFFile;
    e.setSignature(l);
    var n = e.signature;
    if (n.format !== "ACON") throw new Error('Expected format. Expected "ACON", got "' + n.format + '"');

    function t(m, v) {
        var y = e.findChunk(m);
        return y == null ? null : v(y)
    }

    function i(m, v) {
        return m.subChunks.slice(0, v).map(function(y) {
            if (y.chunkId !== "icon") throw new Error("Unexpected chunk type in fram: " + y.chunkId);
            return l.slice(y.chunkData.start, y.chunkData.end)
        })
    }
    var s = t("anih", function(m) {
        var v = it.unpackArray(l, Lt, m.chunkData.start, m.chunkData.end);
        return {
            cbSize: v[0],
            nFrames: v[1],
            nSteps: v[2],
            iWidth: v[3],
            iHeight: v[4],
            iBitCount: v[5],
            nPlanes: v[6],
            iDispRate: v[7],
            bfAttributes: v[8]
        }
    });
    if (s == null) throw new Error("Did not find anih");
    var r = t("rate", function(m) {
            return it.unpackArray(l, Lt, m.chunkData.start, m.chunkData.end)
        }),
        o = t("seq ", function(m) {
            return it.unpackArray(l, Lt, m.chunkData.start, m.chunkData.end)
        }),
        a = e.findChunk("LIST", !0),
        c = a == null ? void 0 : a.find(function(m) {
            return m.format === "fram"
        });
    if (c == null) throw new Error("Did not find fram LIST");
    var h = i(c, s.nFrames),
        u = null,
        f = null,
        p = a == null ? void 0 : a.find(function(m) {
            return m.format === "INFO"
        });
    return p != null && p.subChunks.forEach(function(m) {
        switch (m.chunkId) {
            case "INAM":
                u = it.unpackString(l, m.chunkData.start, m.chunkData.end);
                break;
            case "IART":
                f = it.unpackString(l, m.chunkData.start, m.chunkData.end);
                break;
            case "LIST":
                m.format === "fram" && (h = i(m, s.nFrames));
                break
        }
    }), {
        images: h,
        rate: r,
        seq: o,
        metadata: s,
        artist: f,
        title: u
    }
}
St.parseAni = ua;
var da = _t && _t.__read || function(l, e) {
        var n = typeof Symbol == "function" && l[Symbol.iterator];
        if (!n) return l;
        var t = n.call(l),
            i, s = [],
            r;
        try {
            for (;
                (e === void 0 || e-- > 0) && !(i = t.next()).done;) s.push(i.value)
        } catch (o) {
            r = {
                error: o
            }
        } finally {
            try {
                i && !i.done && (n = t.return) && n.call(t)
            } finally {
                if (r) throw r.error
            }
        }
        return s
    },
    ha = _t && _t.__spread || function() {
        for (var l = [], e = 0; e < arguments.length; e++) l = l.concat(da(arguments[e]));
        return l
    };
Object.defineProperty(Qt, "__esModule", {
    value: !0
});
Qt.convertAniBinaryToCSS = void 0;
var pa = St,
    ma = 1e3 / 60;

function ga(l, e) {
    var n = _a(e),
        t = "ani-cursor-" + va(),
        i = n.frames.map(function(o) {
            var a = o.url,
                c = o.percents,
                h = c.map(function(u) {
                    return u + "%"
                }).join(", ");
            return h + " { cursor: url(" + a + "), auto; }"
        }),
        s = "step-end",
        r = ":hover";
    return `
    @keyframes ` + t + ` {
        ` + i.join(`
`) + `
    }
    ` + l + r + ` {
        animation: ` + t + " " + n.duration + "ms " + s + ` infinite;
    }
   `
}
Qt.convertAniBinaryToCSS = ga;

function _a(l) {
    var e, n = pa.parseAni(l),
        t = (e = n.rate) !== null && e !== void 0 ? e : n.images.map(function() {
            return n.metadata.iDispRate
        }),
        i = ka(t),
        s = n.images.map(function(o) {
            return {
                url: $a(o),
                percents: []
            }
        }),
        r = 0;
    return t.forEach(function(o, a) {
        var c = n.seq ? n.seq[a] : a;
        s[c].percents.push(r / i * 100), r += o
    }), {
        duration: i * ma,
        frames: s
    }
}
var ba = 0,
    va = function() {
        return ba++
    };

function wa(l) {
    return window.btoa(String.fromCharCode.apply(String, ha(l)))
}

function $a(l) {
    var e = wa(l);
    return "data:image/x-win-bitmap;base64," + e
}

function ka(l) {
    return l.reduce(function(e, n) {
        return e + n
    }, 0)
}
const {
    document: We
} = Sl;

function mn(l, e, n) {
    const t = l.slice();
    return t[26] = e[n], t
}

function gn(l, e, n) {
    const t = l.slice();
    return t[29] = e[n], t
}

function _n(l, e, n) {
    const t = l.slice();
    return t[32] = e[n], t
}

function bn(l, e, n) {
    const t = l.slice();
    return t[35] = e[n], t[37] = n, t
}

function vn(l, e, n) {
    const t = l.slice();
    return t[38] = e[n], t
}

function wn(l, e, n) {
    const t = l.slice();
    return t[26] = e[n], t
}

function $n(l, e, n) {
    const t = l.slice();
    return t[29] = e[n], t
}

function kn(l, e, n) {
    const t = l.slice();
    return t[32] = e[n], t
}

function An(l, e, n) {
    const t = l.slice();
    return t[35] = e[n], t[37] = n, t
}

function En(l, e, n) {
    const t = l.slice();
    return t[38] = e[n], t
}

function yn(l) {
    let e, n, t, i, s, r, o, a, c, h, u, f;
    return {
        c() {
            e = w("div"), n = w("div"), t = w("div"), i = D(), s = w("div"), r = w("p"), o = J("welcome to exophs.github.io"), a = D(), c = w("p"), h = J("loading profile..."), this.h()
        },
        l(p) {
            e = $(p, "DIV", {
                class: !0
            });
            var m = A(e);
            n = $(m, "DIV", {
                class: !0
            });
            var v = A(n);
            t = $(v, "DIV", {
                id: !0,
                class: !0
            }), A(t).forEach(d), i = T(v), s = $(v, "DIV", {
                class: !0
            });
            var y = A(s);
            r = $(y, "P", {
                class: !0
            });
            var I = A(r);
            o = X(I, "welcome to exophs.github.io"), I.forEach(d), a = T(y), c = $(y, "P", {
                class: !0
            });
            var Q = A(c);
            h = X(Q, "loading profile..."), Q.forEach(d), y.forEach(d), v.forEach(d), m.forEach(d), this.h()
        },
        h() {
            g(t, "id", "blinker"), g(t, "class", "svelte-90t6g4"), g(r, "class", "text-sm sm:text-lg leading-8 text-center"), g(c, "class", "text-xs sm:text-base leading-8 text-center text-muted-foreground"), g(s, "class", "flex flex-col items-center justify-center space-x-2"), g(n, "class", "flex flex-row items-center justify-center h-full w-full space-x-2 font-semibold"), g(e, "class", "flex flex-col items-center justify-center min-h-screen w-screen overflow-x-hidden overflow-y-hidden absolute top-0 left-0 z-50")
        },
        m(p, m) {
            k(p, e, m), b(e, n), b(n, t), b(n, i), b(n, s), b(s, r), b(r, o), b(s, a), b(s, c), b(c, h), f = !0
        },
        p(p, m) {},
        i(p) {
            f || (u && u.end(1), f = !0)
        },
        o(p) {
            u = Il(e, Dl, {
                duration: 1e3,
                easing: Cl
            }), f = !1
        },
        d(p) {
            p && d(e), p && u && u.end()
        }
    }
}

function Sn(l) {
    let e, n, t, i, s, r, o;
    return {
        c() {
            e = w("video"), n = w("source"), i = w("track"), s = D(), r = w("style"), o = J(`#bg-video {\r
   width: 100%;\r
   height: 100%;\r
   object-fit: cover;\r
   position: fixed;\r
   left: 0;\r
   right: 0;\r
   top: 0;\r
   bottom: 0;\r
   z-index: 0					;\r
}`), this.h()
        },
        l(a) {
            e = $(a, "VIDEO", {
                id: !0
            });
            var c = A(e);
            n = $(c, "SOURCE", {
                src: !0,
                type: !0
            }), i = $(c, "TRACK", {
                kind: !0
            }), c.forEach(d), s = T(a), r = $(a, "STYLE", {});
            var h = A(r);
            o = X(h, `#bg-video {\r
   width: 100%;\r
   height: 100%;\r
   object-fit: cover;\r
   position: fixed;\r
   left: 0;\r
   right: 0;\r
   top: 0;\r
   bottom: 0;\r
   z-index: 0					;\r
}`), h.forEach(d), this.h()
        },
        h() {
            ue(n.src, t = l[5].background) || g(n, "src", t), g(n, "type", "video/mp4"), g(i, "kind", "captions"), g(e, "id", "bg-video"), e.loop = !0
        },
        m(a, c) {
            k(a, e, c), b(e, n), b(e, i), k(a, s, c), k(a, r, c), b(r, o)
        },
        p(a, c) {
            c[0] & 32 && !ue(n.src, t = a[5].background) && g(n, "src", t)
        },
        d(a) {
            a && d(e), a && d(s), a && d(r)
        }
    }
}

function In(l) {
    let e, n, t = l[5].enter + "",
        i, s, r, o;
    return {
        c() {
            e = w("div"), n = w("button"), i = J(t), this.h()
        },
        l(a) {
            e = $(a, "DIV", {
                class: !0,
                id: !0
            });
            var c = A(e);
            n = $(c, "BUTTON", {
                class: !0,
                style: !0
            });
            var h = A(n);
            i = X(h, t), h.forEach(d), c.forEach(d), this.h()
        },
        h() {
            g(n, "class", "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#000000de] border-0 text-white font-bold text-2xl uppercase w-full h-full text-center"), Y(n, "cursor", "url('" + l[5].cursor + "'), auto", 1), g(e, "class", s = "absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40 backdrop-blur-sm; cursor: url('" + l[5].cursor + "'), auto !important; svelte-90t6g4"), g(e, "id", "entry")
        },
        m(a, c) {
            k(a, e, c), b(e, n), b(n, i), r || (o = lt(n, "click", l[15]), r = !0)
        },
        p(a, c) {
            c[0] & 32 && t !== (t = a[5].enter + "") && fe(i, t), c[0] & 32 && Y(n, "cursor", "url('" + a[5].cursor + "'), auto", 1), c[0] & 32 && s !== (s = "absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40 backdrop-blur-sm; cursor: url('" + a[5].cursor + "'), auto !important; svelte-90t6g4") && g(e, "class", s)
        },
        d(a) {
            a && d(e), r = !1, o()
        }
    }
}

function Aa(l) {
    let e, n, t = l[5].showmute && xn(l);
    return {
        c() {
            t && t.c(), e = re()
        },
        l(i) {
            t && t.l(i), e = re()
        },
        m(i, s) {
            t && t.m(i, s), k(i, e, s), n = !0
        },
        p(i, s) {
            i[5].showmute ? t ? (t.p(i, s), s[0] & 32 && _(t, 1)) : (t = xn(i), t.c(), _(t, 1), t.m(e.parentNode, e)) : t && (ne(), E(t, 1, 1, () => {
                t = null
            }), ie())
        },
        i(i) {
            n || (_(t), n = !0)
        },
        o(i) {
            E(t), n = !1
        },
        d(i) {
            t && t.d(i), i && d(e)
        }
    }
}

function xn(l) {
    let e, n, t;
    return n = new Wt({
        props: {
            class: "bg-transparent hover:bg-transparent",
            $$slots: {
                default: [Sa]
            },
            $$scope: {
                ctx: l
            }
        }
    }), n.$on("click", l[16]), {
        c() {
            e = w("div"), O(n.$$.fragment), this.h()
        },
        l(i) {
            e = $(i, "DIV", {
                class: !0
            });
            var s = A(e);
            q(n.$$.fragment, s), s.forEach(d), this.h()
        },
        h() {
            g(e, "class", "fixed right-0 mt-[10px] mr-[10px] z-[10] bg-transparent text-[#ffff]")
        },
        m(i, s) {
            k(i, e, s), j(n, e, null), t = !0
        },
        p(i, s) {
            const r = {};
            s[0] & 8 | s[1] & 524288 && (r.$$scope = {
                dirty: s,
                ctx: i
            }), n.$set(r)
        },
        i(i) {
            t || (_(n.$$.fragment, i), t = !0)
        },
        o(i) {
            E(n.$$.fragment, i), t = !1
        },
        d(i) {
            i && d(e), V(n)
        }
    }
}

function Ea(l) {
    let e, n;
    return e = new ar({
        props: {
            class: "h-8 w-8 text-[#ffff]"
        }
    }), {
        c() {
            O(e.$$.fragment)
        },
        l(t) {
            q(e.$$.fragment, t)
        },
        m(t, i) {
            j(e, t, i), n = !0
        },
        i(t) {
            n || (_(e.$$.fragment, t), n = !0)
        },
        o(t) {
            E(e.$$.fragment, t), n = !1
        },
        d(t) {
            V(e, t)
        }
    }
}

function ya(l) {
    let e, n;
    return e = new ir({
        props: {
            class: "h-8 w-8 text-[#ffff]"
        }
    }), {
        c() {
            O(e.$$.fragment)
        },
        l(t) {
            q(e.$$.fragment, t)
        },
        m(t, i) {
            j(e, t, i), n = !0
        },
        i(t) {
            n || (_(e.$$.fragment, t), n = !0)
        },
        o(t) {
            E(e.$$.fragment, t), n = !1
        },
        d(t) {
            V(e, t)
        }
    }
}

function Sa(l) {
    let e, n, t, i;
    const s = [ya, Ea],
        r = [];

    function o(a, c) {
        return a[3] ? 0 : 1
    }
    return e = o(l), n = r[e] = s[e](l), {
        c() {
            n.c(), t = re()
        },
        l(a) {
            n.l(a), t = re()
        },
        m(a, c) {
            r[e].m(a, c), k(a, t, c), i = !0
        },
        p(a, c) {
            let h = e;
            e = o(a), e !== h && (ne(), E(r[h], 1, 1, () => {
                r[h] = null
            }), ie(), n = r[e], n || (n = r[e] = s[e](a), n.c()), _(n, 1), n.m(t.parentNode, t))
        },
        i(a) {
            i || (_(n), i = !0)
        },
        o(a) {
            E(n), i = !1
        },
        d(a) {
            r[e].d(a), a && d(t)
        }
    }
}

function Cn(l) {
    let e, n, t;
    var i = le(l[5].publicEffectFlags).find(yi).display;

    function s(r) {
        return {}
    }
    return i && (e = ve(i, s())), {
        c() {
            e && O(e.$$.fragment), n = re()
        },
        l(r) {
            e && q(e.$$.fragment, r), n = re()
        },
        m(r, o) {
            e && j(e, r, o), k(r, n, o), t = !0
        },
        p(r, o) {
            if (o[0] & 32 && i !== (i = le(r[5].publicEffectFlags).find(yi).display)) {
                if (e) {
                    ne();
                    const a = e;
                    E(a.$$.fragment, 1, 0, () => {
                        V(a, 1)
                    }), ie()
                }
                i ? (e = ve(i, s()), O(e.$$.fragment), _(e.$$.fragment, 1), j(e, n.parentNode, n)) : e = null
            }
        },
        i(r) {
            t || (e && _(e.$$.fragment, r), t = !0)
        },
        o(r) {
            e && E(e.$$.fragment, r), t = !1
        },
        d(r) {
            r && d(n), e && V(e, r)
        }
    }
}

function Rn(l) {
    let e, n, t;
    var i = le(l[5].publicEffectFlags).find(Si).display;

    function s(r) {
        return {}
    }
    return i && (e = ve(i, s())), {
        c() {
            e && O(e.$$.fragment), n = re()
        },
        l(r) {
            e && q(e.$$.fragment, r), n = re()
        },
        m(r, o) {
            e && j(e, r, o), k(r, n, o), t = !0
        },
        p(r, o) {
            if (o[0] & 32 && i !== (i = le(r[5].publicEffectFlags).find(Si).display)) {
                if (e) {
                    ne();
                    const a = e;
                    E(a.$$.fragment, 1, 0, () => {
                        V(a, 1)
                    }), ie()
                }
                i ? (e = ve(i, s()), O(e.$$.fragment), _(e.$$.fragment, 1), j(e, n.parentNode, n)) : e = null
            }
        },
        i(r) {
            t || (e && _(e.$$.fragment, r), t = !0)
        },
        o(r) {
            e && E(e.$$.fragment, r), t = !1
        },
        d(r) {
            r && d(n), e && V(e, r)
        }
    }
}

function Dn(l) {
    let e, n, t;
    var i = le(l[5].publicEffectFlags).find(Ii).display;

    function s(r) {
        return {}
    }
    return i && (e = ve(i, s())), {
        c() {
            e && O(e.$$.fragment), n = re()
        },
        l(r) {
            e && q(e.$$.fragment, r), n = re()
        },
        m(r, o) {
            e && j(e, r, o), k(r, n, o), t = !0
        },
        p(r, o) {
            if (o[0] & 32 && i !== (i = le(r[5].publicEffectFlags).find(Ii).display)) {
                if (e) {
                    ne();
                    const a = e;
                    E(a.$$.fragment, 1, 0, () => {
                        V(a, 1)
                    }), ie()
                }
                i ? (e = ve(i, s()), O(e.$$.fragment), _(e.$$.fragment, 1), j(e, n.parentNode, n)) : e = null
            }
        },
        i(r) {
            t || (e && _(e.$$.fragment, r), t = !0)
        },
        o(r) {
            e && E(e.$$.fragment, r), t = !1
        },
        d(r) {
            r && d(n), e && V(e, r)
        }
    }
}

function Tn(l) {
    let e, n, t;
    var i = le(l[5].publicEffectFlags).find(xi).display;

    function s(r) {
        return {}
    }
    return i && (e = ve(i, s())), {
        c() {
            e && O(e.$$.fragment), n = re()
        },
        l(r) {
            e && q(e.$$.fragment, r), n = re()
        },
        m(r, o) {
            e && j(e, r, o), k(r, n, o), t = !0
        },
        p(r, o) {
            if (o[0] & 32 && i !== (i = le(r[5].publicEffectFlags).find(xi).display)) {
                if (e) {
                    ne();
                    const a = e;
                    E(a.$$.fragment, 1, 0, () => {
                        V(a, 1)
                    }), ie()
                }
                i ? (e = ve(i, s()), O(e.$$.fragment), _(e.$$.fragment, 1), j(e, n.parentNode, n)) : e = null
            }
        },
        i(r) {
            t || (e && _(e.$$.fragment, r), t = !0)
        },
        o(r) {
            e && E(e.$$.fragment, r), t = !1
        },
        d(r) {
            r && d(n), e && V(e, r)
        }
    }
}

function Fn(l) {
    let e, n, t;
    var i = le(l[5].publicEffectFlags).find(Ci).display;

    function s(r) {
        return {}
    }
    return i && (e = ve(i, s())), {
        c() {
            e && O(e.$$.fragment), n = re()
        },
        l(r) {
            e && q(e.$$.fragment, r), n = re()
        },
        m(r, o) {
            e && j(e, r, o), k(r, n, o), t = !0
        },
        p(r, o) {
            if (o[0] & 32 && i !== (i = le(r[5].publicEffectFlags).find(Ci).display)) {
                if (e) {
                    ne();
                    const a = e;
                    E(a.$$.fragment, 1, 0, () => {
                        V(a, 1)
                    }), ie()
                }
                i ? (e = ve(i, s()), O(e.$$.fragment), _(e.$$.fragment, 1), j(e, n.parentNode, n)) : e = null
            }
        },
        i(r) {
            t || (e && _(e.$$.fragment, r), t = !0)
        },
        o(r) {
            e && E(e.$$.fragment, r), t = !1
        },
        d(r) {
            r && d(n), e && V(e, r)
        }
    }
}

function Ln(l) {
    let e, n, t;
    var i = le(l[5].publicEffectFlags).find(Ri).display;

    function s(r) {
        return {}
    }
    return i && (e = ve(i, s())), {
        c() {
            e && O(e.$$.fragment), n = re()
        },
        l(r) {
            e && q(e.$$.fragment, r), n = re()
        },
        m(r, o) {
            e && j(e, r, o), k(r, n, o), t = !0
        },
        p(r, o) {
            if (o[0] & 32 && i !== (i = le(r[5].publicEffectFlags).find(Ri).display)) {
                if (e) {
                    ne();
                    const a = e;
                    E(a.$$.fragment, 1, 0, () => {
                        V(a, 1)
                    }), ie()
                }
                i ? (e = ve(i, s()), O(e.$$.fragment), _(e.$$.fragment, 1), j(e, n.parentNode, n)) : e = null
            }
        },
        i(r) {
            t || (e && _(e.$$.fragment, r), t = !0)
        },
        o(r) {
            e && E(e.$$.fragment, r), t = !1
        },
        d(r) {
            r && d(n), e && V(e, r)
        }
    }
}

function Nn(l) {
    let e, n, t;
    var i = le(l[5].publicEffectFlags).find(Di).display;

    function s(r) {
        return {}
    }
    return i && (e = ve(i, s())), {
        c() {
            e && O(e.$$.fragment), n = re()
        },
        l(r) {
            e && q(e.$$.fragment, r), n = re()
        },
        m(r, o) {
            e && j(e, r, o), k(r, n, o), t = !0
        },
        p(r, o) {
            if (o[0] & 32 && i !== (i = le(r[5].publicEffectFlags).find(Di).display)) {
                if (e) {
                    ne();
                    const a = e;
                    E(a.$$.fragment, 1, 0, () => {
                        V(a, 1)
                    }), ie()
                }
                i ? (e = ve(i, s()), O(e.$$.fragment), _(e.$$.fragment, 1), j(e, n.parentNode, n)) : e = null
            }
        },
        i(r) {
            t || (e && _(e.$$.fragment, r), t = !0)
        },
        o(r) {
            e && E(e.$$.fragment, r), t = !1
        },
        d(r) {
            r && d(n), e && V(e, r)
        }
    }
}

function Ia(l) {
    let e, n, t, i, s, r, o, a, c, h, u, f, p, m, v, y, I, Q, ee, L, x, S, C = l[5].avatar && Pn(l);
    o = new Oe({
        props: {
            $$slots: {
                default: [Da]
            },
            $$scope: {
                ctx: l
            }
        }
    });
    let F = l[5].showbadges && Bn(l);
    const U = [Oa, Ba],
        N = [];

    function Z(P, G) {
        return G[0] & 32 && (u = null), u == null && (u = !!le(P[5].publicEffectFlags).some(Fc)), u ? 0 : 1
    }
    f = Z(l, [-1, -1]), p = N[f] = U[f](l);
    let te = l[5].links.length !== 0 && Hn(l),
        H = l[5].crypto.length > 0 && zn(l),
        z = l[5].spotify && Gn(l),
        de = l[1] && l[1].success && Yn(l),
        W = l[5].buttons,
        B = [];
    for (let P = 0; P < W.length; P += 1) B[P] = Qn(mn(l, W, P));
    const xe = P => E(B[P], 1, 1, () => {
        B[P] = null
    });
    let oe = l[5].showviews && Kn(l);
    return {
        c() {
            e = w("div"), n = w("div"), t = w("div"), C && C.c(), i = D(), s = w("div"), r = w("div"), O(o.$$.fragment), a = D(), F && F.c(), h = D(), p.c(), m = D(), v = w("div"), te && te.c(), y = D(), H && H.c(), I = D(), z && z.c(), Q = D(), de && de.c(), ee = D(), L = w("div");
            for (let P = 0; P < B.length; P += 1) B[P].c();
            x = D(), oe && oe.c(), this.h()
        },
        l(P) {
            e = $(P, "DIV", {
                class: !0
            });
            var G = A(e);
            n = $(G, "DIV", {
                style: !0,
                class: !0
            });
            var ae = A(n);
            t = $(ae, "DIV", {
                class: !0
            });
            var pe = A(t);
            C && C.l(pe), i = T(pe), s = $(pe, "DIV", {
                class: !0
            });
            var he = A(s);
            r = $(he, "DIV", {
                class: !0
            });
            var be = A(r);
            q(o.$$.fragment, be), a = T(be), F && F.l(be), be.forEach(d), h = T(he), p.l(he), he.forEach(d), m = T(pe), v = $(pe, "DIV", {
                class: !0
            });
            var we = A(v);
            te && te.l(we), y = T(we), H && H.l(we), we.forEach(d), I = T(pe), z && z.l(pe), Q = T(pe), de && de.l(pe), pe.forEach(d), ee = T(ae), L = $(ae, "DIV", {
                class: !0
            });
            var ke = A(L);
            for (let $e = 0; $e < B.length; $e += 1) B[$e].l(ke);
            ke.forEach(d), x = T(ae), oe && oe.l(ae), ae.forEach(d), G.forEach(d), this.h()
        },
        h() {
            g(r, "class", c = "flex mt-[30px] " + (Number(l[5].badgeposition) === 2 ? "justify-center items-center gap-[5px]" : "flex-col justify-center items-center gap-[5px]")), g(s, "class", "flex flex-col items-center"), g(v, "class", "flex flex-row space-x-2 mt-[21px]"), g(t, "class", "flex flex-col items-center space-y-2"), g(L, "class", "flex justify-center items-center flex-col w-[100%] mt-[11px] gap-[5px]"), Y(n, "background", "rgba(0,0,0," + l[5].opacity / 100 + ")"), Y(n, "backdrop-filter", "blur(" + l[5].cardblur / 2.5 + "px)"), Y(n, "-webkit-backdrop-filter", "blur(" + l[5].cardblur / 2.5 + "px)"), g(n, "class", "drop-shadow-2xl max-w-[900px] w-full p-4 rounded-3xl mx-auto "), g(e, "class", "h-[100vh] w-[100%] flex justify-center items-center")
        },
        m(P, G) {
            k(P, e, G), b(e, n), b(n, t), C && C.m(t, null), b(t, i), b(t, s), b(s, r), j(o, r, null), b(r, a), F && F.m(r, null), b(s, h), N[f].m(s, null), b(t, m), b(t, v), te && te.m(v, null), b(v, y), H && H.m(v, null), b(t, I), z && z.m(t, null), b(t, Q), de && de.m(t, null), b(n, ee), b(n, L);
            for (let ae = 0; ae < B.length; ae += 1) B[ae] && B[ae].m(L, null);
            b(n, x), oe && oe.m(n, null), S = !0
        },
        p(P, G) {
            P[5].avatar ? C ? C.p(P, G) : (C = Pn(P), C.c(), C.m(t, i)) : C && (C.d(1), C = null);
            const ae = {};
            G[0] & 32 | G[1] & 524288 && (ae.$$scope = {
                dirty: G,
                ctx: P
            }), o.$set(ae), P[5].showbadges ? F ? (F.p(P, G), G[0] & 32 && _(F, 1)) : (F = Bn(P), F.c(), _(F, 1), F.m(r, null)) : F && (ne(), E(F, 1, 1, () => {
                F = null
            }), ie()), (!S || G[0] & 32 && c !== (c = "flex mt-[30px] " + (Number(P[5].badgeposition) === 2 ? "justify-center items-center gap-[5px]" : "flex-col justify-center items-center gap-[5px]"))) && g(r, "class", c);
            let pe = f;
            if (f = Z(P, G), f === pe ? N[f].p(P, G) : (ne(), E(N[pe], 1, 1, () => {
                    N[pe] = null
                }), ie(), p = N[f], p ? p.p(P, G) : (p = N[f] = U[f](P), p.c()), _(p, 1), p.m(s, null)), P[5].links.length !== 0 ? te ? (te.p(P, G), G[0] & 32 && _(te, 1)) : (te = Hn(P), te.c(), _(te, 1), te.m(v, y)) : te && (ne(), E(te, 1, 1, () => {
                    te = null
                }), ie()), P[5].crypto.length > 0 ? H ? (H.p(P, G), G[0] & 32 && _(H, 1)) : (H = zn(P), H.c(), _(H, 1), H.m(v, null)) : H && (ne(), E(H, 1, 1, () => {
                    H = null
                }), ie()), P[5].spotify ? z ? z.p(P, G) : (z = Gn(P), z.c(), z.m(t, Q)) : z && (z.d(1), z = null), P[1] && P[1].success ? de ? de.p(P, G) : (de = Yn(P), de.c(), de.m(t, null)) : de && (de.d(1), de = null), G[0] & 32) {
                W = P[5].buttons;
                let he;
                for (he = 0; he < W.length; he += 1) {
                    const be = mn(P, W, he);
                    B[he] ? (B[he].p(be, G), _(B[he], 1)) : (B[he] = Qn(be), B[he].c(), _(B[he], 1), B[he].m(L, null))
                }
                for (ne(), he = W.length; he < B.length; he += 1) xe(he);
                ie()
            }
            P[5].showviews ? oe ? (oe.p(P, G), G[0] & 32 && _(oe, 1)) : (oe = Kn(P), oe.c(), _(oe, 1), oe.m(n, null)) : oe && (ne(), E(oe, 1, 1, () => {
                oe = null
            }), ie()), (!S || G[0] & 32) && Y(n, "background", "rgba(0,0,0," + P[5].opacity / 100 + ")"), (!S || G[0] & 32) && Y(n, "backdrop-filter", "blur(" + P[5].cardblur / 2.5 + "px)"), (!S || G[0] & 32) && Y(n, "-webkit-backdrop-filter", "blur(" + P[5].cardblur / 2.5 + "px)")
        },
        i(P) {
            if (!S) {
                _(o.$$.fragment, P), _(F), _(p), _(te), _(H);
                for (let G = 0; G < W.length; G += 1) _(B[G]);
                _(oe), S = !0
            }
        },
        o(P) {
            E(o.$$.fragment, P), E(F), E(p), E(te), E(H), B = B.filter(Boolean);
            for (let G = 0; G < B.length; G += 1) E(B[G]);
            E(oe), S = !1
        },
        d(P) {
            P && d(e), C && C.d(), V(o), F && F.d(), N[f].d(), te && te.d(), H && H.d(), z && z.d(), de && de.d(), De(B, P), oe && oe.d()
        }
    }
}

function xa(l) {
    let e, n, t, i, s, r, o, a, c, h, u, f, p, m, v, y, I, Q, ee, L = l[5].avatar && ei(l);
    s = new Oe({
        props: {
            $$slots: {
                default: [rc]
            },
            $$scope: {
                ctx: l
            }
        }
    });
    let x = l[5].showbadges && ni(l);
    const S = [hc, dc],
        C = [];

    function F(W, B) {
        return B[0] & 32 && (c = null), c == null && (c = !!le(W[5].publicEffectFlags).some(Tc)), c ? 0 : 1
    }
    h = F(l, [-1, -1]), u = C[h] = S[h](l);
    let U = l[5].links.length !== 0 && si(l),
        N = l[5].crypto.length > 0 && ai(l),
        Z = l[5].spotify && ui(l),
        te = l[1] && l[1].success && di(l),
        H = l[5].buttons,
        z = [];
    for (let W = 0; W < H.length; W += 1) z[W] = gi(wn(l, H, W));
    const de = W => E(z[W], 1, 1, () => {
        z[W] = null
    });
    return {
        c() {
            e = w("div"), L && L.c(), n = D(), t = w("div"), i = w("div"), O(s.$$.fragment), r = D(), x && x.c(), a = D(), u.c(), f = D(), p = w("div"), U && U.c(), m = D(), N && N.c(), v = D(), Z && Z.c(), y = D(), te && te.c(), I = D(), Q = w("div");
            for (let W = 0; W < z.length; W += 1) z[W].c();
            this.h()
        },
        l(W) {
            e = $(W, "DIV", {
                class: !0
            });
            var B = A(e);
            L && L.l(B), n = T(B), t = $(B, "DIV", {
                class: !0,
                style: !0
            });
            var xe = A(t);
            i = $(xe, "DIV", {
                class: !0
            });
            var oe = A(i);
            q(s.$$.fragment, oe), r = T(oe), x && x.l(oe), oe.forEach(d), xe.forEach(d), a = T(B), u.l(B), f = T(B), p = $(B, "DIV", {
                class: !0
            });
            var P = A(p);
            U && U.l(P), m = T(P), N && N.l(P), P.forEach(d), v = T(B), Z && Z.l(B), y = T(B), te && te.l(B), I = T(B), Q = $(B, "DIV", {
                class: !0
            });
            var G = A(Q);
            for (let ae = 0; ae < z.length; ae += 1) z[ae].l(G);
            G.forEach(d), B.forEach(d), this.h()
        },
        h() {
            g(i, "class", o = "flex mt-[30px] " + (Number(l[5].badgeposition) === 2 ? "justify-center items-center gap-[5px]" : "flex-col justify-center items-center gap-[5px]")), g(t, "class", "mt-[30px]"), Y(t, "display", "flex"), Y(t, "flex-direction", "column"), Y(t, "color", "white"), Y(t, "z-index", "20"), g(p, "class", "flex flex-row space-x-2 mt-[21px]"), g(Q, "class", "flex flex-col justify-center items-center w-[30vw] mt-[21px] gap-[5px]"), g(e, "class", "flex " + (l[9] === 2 ? "mt-[80px]" : "") + " flex-col items-center space-y-2")
        },
        m(W, B) {
            k(W, e, B), L && L.m(e, null), b(e, n), b(e, t), b(t, i), j(s, i, null), b(i, r), x && x.m(i, null), b(e, a), C[h].m(e, null), b(e, f), b(e, p), U && U.m(p, null), b(p, m), N && N.m(p, null), b(e, v), Z && Z.m(e, null), b(e, y), te && te.m(e, null), b(e, I), b(e, Q);
            for (let xe = 0; xe < z.length; xe += 1) z[xe] && z[xe].m(Q, null);
            ee = !0
        },
        p(W, B) {
            W[5].avatar ? L ? L.p(W, B) : (L = ei(W), L.c(), L.m(e, n)) : L && (L.d(1), L = null);
            const xe = {};
            B[0] & 32 | B[1] & 524288 && (xe.$$scope = {
                dirty: B,
                ctx: W
            }), s.$set(xe), W[5].showbadges ? x ? (x.p(W, B), B[0] & 32 && _(x, 1)) : (x = ni(W), x.c(), _(x, 1), x.m(i, null)) : x && (ne(), E(x, 1, 1, () => {
                x = null
            }), ie()), (!ee || B[0] & 32 && o !== (o = "flex mt-[30px] " + (Number(W[5].badgeposition) === 2 ? "justify-center items-center gap-[5px]" : "flex-col justify-center items-center gap-[5px]"))) && g(i, "class", o);
            let oe = h;
            if (h = F(W, B), h === oe ? C[h].p(W, B) : (ne(), E(C[oe], 1, 1, () => {
                    C[oe] = null
                }), ie(), u = C[h], u ? u.p(W, B) : (u = C[h] = S[h](W), u.c()), _(u, 1), u.m(e, f)), W[5].links.length !== 0 ? U ? (U.p(W, B), B[0] & 32 && _(U, 1)) : (U = si(W), U.c(), _(U, 1), U.m(p, m)) : U && (ne(), E(U, 1, 1, () => {
                    U = null
                }), ie()), W[5].crypto.length > 0 ? N ? (N.p(W, B), B[0] & 32 && _(N, 1)) : (N = ai(W), N.c(), _(N, 1), N.m(p, null)) : N && (ne(), E(N, 1, 1, () => {
                    N = null
                }), ie()), W[5].spotify ? Z ? Z.p(W, B) : (Z = ui(W), Z.c(), Z.m(e, y)) : Z && (Z.d(1), Z = null), W[1] && W[1].success ? te ? te.p(W, B) : (te = di(W), te.c(), te.m(e, I)) : te && (te.d(1), te = null), B[0] & 32) {
                H = W[5].buttons;
                let P;
                for (P = 0; P < H.length; P += 1) {
                    const G = wn(W, H, P);
                    z[P] ? (z[P].p(G, B), _(z[P], 1)) : (z[P] = gi(G), z[P].c(), _(z[P], 1), z[P].m(Q, null))
                }
                for (ne(), P = H.length; P < z.length; P += 1) de(P);
                ie()
            }
        },
        i(W) {
            if (!ee) {
                _(s.$$.fragment, W), _(x), _(u), _(U), _(N);
                for (let B = 0; B < H.length; B += 1) _(z[B]);
                ee = !0
            }
        },
        o(W) {
            E(s.$$.fragment, W), E(x), E(u), E(U), E(N), z = z.filter(Boolean);
            for (let B = 0; B < z.length; B += 1) E(z[B]);
            ee = !1
        },
        d(W) {
            W && d(e), L && L.d(), V(s), x && x.d(), C[h].d(), U && U.d(), N && N.d(), Z && Z.d(), te && te.d(), De(z, W)
        }
    }
}

function Pn(l) {
    let e, n;
    return {
        c() {
            e = w("img"), this.h()
        },
        l(t) {
            e = $(t, "IMG", {
                src: !0,
                class: !0,
                alt: !0
            }), this.h()
        },
        h() {
            ue(e.src, n = l[5].avatar) || g(e, "src", n), g(e, "class", "rounded-full w-32 h-32 object-cover drop-shadow-2xl"), g(e, "alt", "avatar")
        },
        m(t, i) {
            k(t, e, i)
        },
        p(t, i) {
            i[0] & 32 && !ue(e.src, n = t[5].avatar) && g(e, "src", n)
        },
        d(t) {
            t && d(e)
        }
    }
}

function Ca(l) {
    let e, n, t, i, s = l[5].title + "",
        r, o, a;
    return {
        c() {
            e = w("style"), n = J(`@keyframes lightsweep { \r
									0% { \r
										background-position: -20em;\r
									}\r
									50% {\r
										\r
									}\r
									100% {\r
										background-position: 20em ;\r
									}\r
									}`), t = D(), i = w("span"), r = J(s), this.h()
        },
        l(c) {
            e = $(c, "STYLE", {});
            var h = A(e);
            n = X(h, `@keyframes lightsweep { \r
									0% { \r
										background-position: -20em;\r
									}\r
									50% {\r
										\r
									}\r
									100% {\r
										background-position: 20em ;\r
									}\r
									}`), h.forEach(d), t = T(c), i = $(c, "SPAN", {
                class: !0,
                style: !0
            });
            var u = A(i);
            r = X(u, s), u.forEach(d), this.h()
        },
        h() {
            g(i, "class", o = "text-2xl flex justify-center items-center font-semibold text-center " + l[12](l[5].publicEffectFlags, l[14]) + " svelte-90t6g4"), g(i, "style", a = "color: " + (l[5].titlehex ? l[5].titlehex.split(";")[0] : "white") + " ; " + (le(l[5].publicEffectFlags).some(Pi) ? "background-image: url(img/sparkle.gif); width: fit-content;" : "") + " " + (le(l[5].publicEffectFlags).some(Mi) ? "background-image: url(img/thunder.webp); width: fit-content;  background-repeat: repeat-x;background-size:5em;" : "") + " " + (le(l[5].publicEffectFlags).some(Bi) ? ` font-weight: 800!important; text-shadow: 1px 2px 15px ${l[5].titlehex}; -webkit-text-fill-color:transparent; -webkit-background-clip: text !important; background: linear-gradient(145deg, ${l[5].titlehex} 0%, #ffffff 50%, #ffffff 70%, ${l[5].titlehex} 100%);  background-size: 25em; animation:lightsweep 3s linear infinite;` : ""))
        },
        m(c, h) {
            k(c, e, h), b(e, n), k(c, t, h), k(c, i, h), b(i, r)
        },
        p(c, h) {
            h[0] & 32 && s !== (s = c[5].title + "") && fe(r, s), h[0] & 32 && o !== (o = "text-2xl flex justify-center items-center font-semibold text-center " + c[12](c[5].publicEffectFlags, c[14]) + " svelte-90t6g4") && g(i, "class", o), h[0] & 32 && a !== (a = "color: " + (c[5].titlehex ? c[5].titlehex.split(";")[0] : "white") + " ; " + (le(c[5].publicEffectFlags).some(Pi) ? "background-image: url(img/sparkle.gif); width: fit-content;" : "") + " " + (le(c[5].publicEffectFlags).some(Mi) ? "background-image: url(img/thunder.webp); width: fit-content;  background-repeat: repeat-x;background-size:5em;" : "") + " " + (le(c[5].publicEffectFlags).some(Bi) ? ` font-weight: 800!important; text-shadow: 1px 2px 15px ${c[5].titlehex}; -webkit-text-fill-color:transparent; -webkit-background-clip: text !important; background: linear-gradient(145deg, ${c[5].titlehex} 0%, #ffffff 50%, #ffffff 70%, ${c[5].titlehex} 100%);  background-size: 25em; animation:lightsweep 3s linear infinite;` : "")) && g(i, "style", a)
        },
        d(c) {
            c && d(e), c && d(t), c && d(i)
        }
    }
}

function Mn(l) {
    let e, n;
    return e = new Ve({
        props: {
            $$slots: {
                default: [Ra]
            },
            $$scope: {
                ctx: l
            }
        }
    }), {
        c() {
            O(e.$$.fragment)
        },
        l(t) {
            q(e.$$.fragment, t)
        },
        m(t, i) {
            j(e, t, i), n = !0
        },
        p(t, i) {
            const s = {};
            i[0] & 32 | i[1] & 524288 && (s.$$scope = {
                dirty: i,
                ctx: t
            }), e.$set(s)
        },
        i(t) {
            n || (_(e.$$.fragment, t), n = !0)
        },
        o(t) {
            E(e.$$.fragment, t), n = !1
        },
        d(t) {
            V(e, t)
        }
    }
}

function Ra(l) {
    let e, n, t = l[5].uid + "",
        i;
    return {
        c() {
            e = w("p"), n = J("UID: "), i = J(t)
        },
        l(s) {
            e = $(s, "P", {});
            var r = A(e);
            n = X(r, "UID: "), i = X(r, t), r.forEach(d)
        },
        m(s, r) {
            k(s, e, r), b(e, n), b(e, i)
        },
        p(s, r) {
            r[0] & 32 && t !== (t = s[5].uid + "") && fe(i, t)
        },
        d(s) {
            s && d(e)
        }
    }
}

function Da(l) {
    let e, n, t, i;
    e = new je({
        props: {
            $$slots: {
                default: [Ca]
            },
            $$scope: {
                ctx: l
            }
        }
    });
    let s = l[5].showuid && Mn(l);
    return {
        c() {
            O(e.$$.fragment), n = D(), s && s.c(), t = re()
        },
        l(r) {
            q(e.$$.fragment, r), n = T(r), s && s.l(r), t = re()
        },
        m(r, o) {
            j(e, r, o), k(r, n, o), s && s.m(r, o), k(r, t, o), i = !0
        },
        p(r, o) {
            const a = {};
            o[0] & 32 | o[1] & 524288 && (a.$$scope = {
                dirty: o,
                ctx: r
            }), e.$set(a), r[5].showuid ? s ? (s.p(r, o), o[0] & 32 && _(s, 1)) : (s = Mn(r), s.c(), _(s, 1), s.m(t.parentNode, t)) : s && (ne(), E(s, 1, 1, () => {
                s = null
            }), ie())
        },
        i(r) {
            i || (_(e.$$.fragment, r), _(s), i = !0)
        },
        o(r) {
            E(e.$$.fragment, r), E(s), i = !1
        },
        d(r) {
            V(e, r), r && d(n), s && s.d(r), r && d(t)
        }
    }
}

function Bn(l) {
    let e, n, t = l[4] ?? [],
        i = [];
    for (let r = 0; r < t.length; r += 1) i[r] = Vn(bn(l, t, r));
    const s = r => E(i[r], 1, 1, () => {
        i[r] = null
    });
    return {
        c() {
            e = w("div");
            for (let r = 0; r < i.length; r += 1) i[r].c();
            this.h()
        },
        l(r) {
            e = $(r, "DIV", {
                class: !0
            });
            var o = A(e);
            for (let a = 0; a < i.length; a += 1) i[a].l(o);
            o.forEach(d), this.h()
        },
        h() {
            g(e, "class", "flex flex-col")
        },
        m(r, o) {
            k(r, e, o);
            for (let a = 0; a < i.length; a += 1) i[a] && i[a].m(e, null);
            n = !0
        },
        p(r, o) {
            if (o[0] & 48) {
                t = r[4] ?? [];
                let a;
                for (a = 0; a < t.length; a += 1) {
                    const c = bn(r, t, a);
                    i[a] ? (i[a].p(c, o), _(i[a], 1)) : (i[a] = Vn(c), i[a].c(), _(i[a], 1), i[a].m(e, null))
                }
                for (ne(), a = t.length; a < i.length; a += 1) s(a);
                ie()
            }
        },
        i(r) {
            if (!n) {
                for (let o = 0; o < t.length; o += 1) _(i[o]);
                n = !0
            }
        },
        o(r) {
            i = i.filter(Boolean);
            for (let o = 0; o < i.length; o += 1) E(i[o]);
            n = !1
        },
        d(r) {
            r && d(e), De(i, r)
        }
    }
}

function Ta(l) {
    let e, n;
    return {
        c() {
            e = w("img"), this.h()
        },
        l(t) {
            e = $(t, "IMG", {
                src: !0,
                class: !0,
                alt: !0
            }), this.h()
        },
        h() {
            ue(e.src, n = l[38].url) || g(e, "src", n), g(e, "class", "w-6 h-6 hover:scale-105 transition-all duration-200 ease-in-out"), g(e, "alt", "badge")
        },
        m(t, i) {
            k(t, e, i)
        },
        p(t, i) {
            i[0] & 16 && !ue(e.src, n = t[38].url) && g(e, "src", n)
        },
        d(t) {
            t && d(e)
        }
    }
}

function Fa(l) {
    let e, n = (l[38].description ? l[38].description : "") + "",
        t;
    return {
        c() {
            e = w("p"), t = J(n)
        },
        l(i) {
            e = $(i, "P", {});
            var s = A(e);
            t = X(s, n), s.forEach(d)
        },
        m(i, s) {
            k(i, e, s), b(e, t)
        },
        p(i, s) {
            s[0] & 16 && n !== (n = (i[38].description ? i[38].description : "") + "") && fe(t, n)
        },
        d(i) {
            i && d(e)
        }
    }
}

function La(l) {
    let e, n, t, i, s;
    return e = new je({
        props: {
            $$slots: {
                default: [Ta]
            },
            $$scope: {
                ctx: l
            }
        }
    }), t = new Ve({
        props: {
            $$slots: {
                default: [Fa]
            },
            $$scope: {
                ctx: l
            }
        }
    }), {
        c() {
            O(e.$$.fragment), n = D(), O(t.$$.fragment), i = D()
        },
        l(r) {
            q(e.$$.fragment, r), n = T(r), q(t.$$.fragment, r), i = T(r)
        },
        m(r, o) {
            j(e, r, o), k(r, n, o), j(t, r, o), k(r, i, o), s = !0
        },
        p(r, o) {
            const a = {};
            o[0] & 16 | o[1] & 524288 && (a.$$scope = {
                dirty: o,
                ctx: r
            }), e.$set(a);
            const c = {};
            o[0] & 16 | o[1] & 524288 && (c.$$scope = {
                dirty: o,
                ctx: r
            }), t.$set(c)
        },
        i(r) {
            s || (_(e.$$.fragment, r), _(t.$$.fragment, r), s = !0)
        },
        o(r) {
            E(e.$$.fragment, r), E(t.$$.fragment, r), s = !1
        },
        d(r) {
            V(e, r), r && d(n), V(t, r), r && d(i)
        }
    }
}

function On(l) {
    let e, n;
    return e = new Oe({
        props: {
            $$slots: {
                default: [La]
            },
            $$scope: {
                ctx: l
            }
        }
    }), {
        c() {
            O(e.$$.fragment)
        },
        l(t) {
            q(e.$$.fragment, t)
        },
        m(t, i) {
            j(e, t, i), n = !0
        },
        p(t, i) {
            const s = {};
            i[0] & 16 | i[1] & 524288 && (s.$$scope = {
                dirty: i,
                ctx: t
            }), e.$set(s)
        },
        i(t) {
            n || (_(e.$$.fragment, t), n = !0)
        },
        o(t) {
            E(e.$$.fragment, t), n = !1
        },
        d(t) {
            V(e, t)
        }
    }
}

function jn(l) {
    let e, n;
    return e = new Oe({
        props: {
            $$slots: {
                default: [Ma]
            },
            $$scope: {
                ctx: l
            }
        }
    }), {
        c() {
            O(e.$$.fragment)
        },
        l(t) {
            q(e.$$.fragment, t)
        },
        m(t, i) {
            j(e, t, i), n = !0
        },
        i(t) {
            n || (_(e.$$.fragment, t), n = !0)
        },
        o(t) {
            E(e.$$.fragment, t), n = !1
        },
        d(t) {
            V(e, t)
        }
    }
}

function Na(l) {
    let e, n;
    return {
        c() {
            e = pt("svg"), n = pt("path"), this.h()
        },
        l(t) {
            e = mt(t, "svg", {
                width: !0,
                height: !0,
                viewBox: !0,
                fill: !0,
                xmlns: !0
            });
            var i = A(e);
            n = mt(i, "path", {
                "fill-rule": !0,
                "clip-rule": !0,
                d: !0,
                fill: !0
            }), A(n).forEach(d), i.forEach(d), this.h()
        },
        h() {
            g(n, "fill-rule", "evenodd"), g(n, "clip-rule", "evenodd"), g(n, "d", "M6.23607 1C5.09976 1 4.06097 1.64201 3.55279 2.65836L1.14806 7.46782C0.647975 8.46799 0.745665 9.66329 1.40152 10.569L9.57018 21.8495C10.7679 23.5035 13.2321 23.5035 14.4298 21.8495L22.5985 10.569C23.2543 9.66329 23.352 8.468 22.852 7.46782L20.4472 2.65836C19.939 1.64201 18.9003 1 17.7639 1H6.23607ZM5.34165 3.55279C5.51104 3.214 5.8573 3 6.23607 3H8.67428L7.24571 8H3.11804L5.34165 3.55279ZM9.32574 8L10.7543 3H13.2457L14.6743 8H9.32574ZM14.646 10H9.35397L12 18.5996L14.646 10ZM13.929 19.1312L16.7386 10H20.5412L13.929 19.1312ZM16.7543 8L15.3257 3H17.7639C18.1427 3 18.489 3.214 18.6584 3.55279L20.882 8H16.7543ZM3.4588 10H7.26143L10.071 19.1312L3.4588 10Z"), g(n, "fill", "white"), g(e, "width", "24px"), g(e, "height", "24px"), g(e, "viewBox", "0 0 24 24"), g(e, "fill", "none"), g(e, "xmlns", "http://www.w3.org/2000/svg")
        },
        m(t, i) {
            k(t, e, i), b(e, n)
        },
        p: se,
        d(t) {
            t && d(e)
        }
    }
}

function Pa(l) {
    let e, n;
    return {
        c() {
            e = w("p"), n = J("Premium")
        },
        l(t) {
            e = $(t, "P", {});
            var i = A(e);
            n = X(i, "Premium"), i.forEach(d)
        },
        m(t, i) {
            k(t, e, i), b(e, n)
        },
        p: se,
        d(t) {
            t && d(e)
        }
    }
}

function Ma(l) {
    let e, n, t, i;
    return e = new je({
        props: {
            $$slots: {
                default: [Na]
            },
            $$scope: {
                ctx: l
            }
        }
    }), t = new Ve({
        props: {
            $$slots: {
                default: [Pa]
            },
            $$scope: {
                ctx: l
            }
        }
    }), {
        c() {
            O(e.$$.fragment), n = D(), O(t.$$.fragment)
        },
        l(s) {
            q(e.$$.fragment, s), n = T(s), q(t.$$.fragment, s)
        },
        m(s, r) {
            j(e, s, r), k(s, n, r), j(t, s, r), i = !0
        },
        p(s, r) {
            const o = {};
            r[1] & 524288 && (o.$$scope = {
                dirty: r,
                ctx: s
            }), e.$set(o);
            const a = {};
            r[1] & 524288 && (a.$$scope = {
                dirty: r,
                ctx: s
            }), t.$set(a)
        },
        i(s) {
            i || (_(e.$$.fragment, s), _(t.$$.fragment, s), i = !0)
        },
        o(s) {
            E(e.$$.fragment, s), E(t.$$.fragment, s), i = !1
        },
        d(s) {
            V(e, s), s && d(n), V(t, s)
        }
    }
}

function Vn(l) {
    let e, n, t = Math.floor(l[4].length) === l[37] + 1 && l[5].premium && l[5].premiumbadge === !0,
        i, s, r, o = l[35],
        a = [];
    for (let u = 0; u < o.length; u += 1) a[u] = On(vn(l, o, u));
    const c = u => E(a[u], 1, 1, () => {
        a[u] = null
    });
    let h = t && jn(l);
    return {
        c() {
            e = w("div");
            for (let u = 0; u < a.length; u += 1) a[u].c();
            n = D(), h && h.c(), i = D(), this.h()
        },
        l(u) {
            e = $(u, "DIV", {
                class: !0
            });
            var f = A(e);
            for (let p = 0; p < a.length; p += 1) a[p].l(f);
            n = T(f), h && h.l(f), i = T(f), f.forEach(d), this.h()
        },
        h() {
            g(e, "class", s = "flex flex-row " + (Math.floor(l[4].length) === l[37] + 1 ? "justify-center" : ""))
        },
        m(u, f) {
            k(u, e, f);
            for (let p = 0; p < a.length; p += 1) a[p] && a[p].m(e, null);
            b(e, n), h && h.m(e, null), b(e, i), r = !0
        },
        p(u, f) {
            if (f[0] & 16) {
                o = u[35];
                let p;
                for (p = 0; p < o.length; p += 1) {
                    const m = vn(u, o, p);
                    a[p] ? (a[p].p(m, f), _(a[p], 1)) : (a[p] = On(m), a[p].c(), _(a[p], 1), a[p].m(e, n))
                }
                for (ne(), p = o.length; p < a.length; p += 1) c(p);
                ie()
            }
            f[0] & 48 && (t = Math.floor(u[4].length) === u[37] + 1 && u[5].premium && u[5].premiumbadge === !0), t ? h ? f[0] & 48 && _(h, 1) : (h = jn(u), h.c(), _(h, 1), h.m(e, i)) : h && (ne(), E(h, 1, 1, () => {
                h = null
            }), ie()), (!r || f[0] & 16 && s !== (s = "flex flex-row " + (Math.floor(u[4].length) === u[37] + 1 ? "justify-center" : ""))) && g(e, "class", s)
        },
        i(u) {
            if (!r) {
                for (let f = 0; f < o.length; f += 1) _(a[f]);
                _(h), r = !0
            }
        },
        o(u) {
            a = a.filter(Boolean);
            for (let f = 0; f < a.length; f += 1) E(a[f]);
            E(h), r = !1
        },
        d(u) {
            u && d(e), De(a, u), h && h.d()
        }
    }
}

function Ba(l) {
    let e, n = l[5].description + "",
        t;
    return {
        c() {
            e = w("span"), t = J(n), this.h()
        },
        l(i) {
            e = $(i, "SPAN", {
                class: !0,
                style: !0
            });
            var s = A(e);
            t = X(s, n), s.forEach(d), this.h()
        },
        h() {
            g(e, "class", "font-medium text-center my-3"), Y(e, "color", l[5].descriptionhex ? l[5].descriptionhex.split(";")[0] : "white")
        },
        m(i, s) {
            k(i, e, s), b(e, t)
        },
        p(i, s) {
            s[0] & 32 && n !== (n = i[5].description + "") && fe(t, n), s[0] & 32 && Y(e, "color", i[5].descriptionhex ? i[5].descriptionhex.split(";")[0] : "white")
        },
        i: se,
        o: se,
        d(i) {
            i && d(e)
        }
    }
}

function Oa(l) {
    let e, n, t;
    var i = le(l[5].publicEffectFlags).find(Oi).display;

    function s(r) {
        return {
            props: {
                text: r[5].description
            }
        }
    }
    return i && (e = ve(i, s(l))), {
        c() {
            e && O(e.$$.fragment), n = re()
        },
        l(r) {
            e && q(e.$$.fragment, r), n = re()
        },
        m(r, o) {
            e && j(e, r, o), k(r, n, o), t = !0
        },
        p(r, o) {
            const a = {};
            if (o[0] & 32 && (a.text = r[5].description), o[0] & 32 && i !== (i = le(r[5].publicEffectFlags).find(Oi).display)) {
                if (e) {
                    ne();
                    const c = e;
                    E(c.$$.fragment, 1, 0, () => {
                        V(c, 1)
                    }), ie()
                }
                i ? (e = ve(i, s(r)), O(e.$$.fragment), _(e.$$.fragment, 1), j(e, n.parentNode, n)) : e = null
            } else i && e.$set(a)
        },
        i(r) {
            t || (e && _(e.$$.fragment, r), t = !0)
        },
        o(r) {
            e && E(e.$$.fragment, r), t = !1
        },
        d(r) {
            r && d(n), e && V(e, r)
        }
    }
}

function Hn(l) {
    let e, n, t = l[5].links,
        i = [];
    for (let r = 0; r < t.length; r += 1) i[r] = Un(_n(l, t, r));
    const s = r => E(i[r], 1, 1, () => {
        i[r] = null
    });
    return {
        c() {
            for (let r = 0; r < i.length; r += 1) i[r].c();
            e = re()
        },
        l(r) {
            for (let o = 0; o < i.length; o += 1) i[o].l(r);
            e = re()
        },
        m(r, o) {
            for (let a = 0; a < i.length; a += 1) i[a] && i[a].m(r, o);
            k(r, e, o), n = !0
        },
        p(r, o) {
            if (o[0] & 32) {
                t = r[5].links;
                let a;
                for (a = 0; a < t.length; a += 1) {
                    const c = _n(r, t, a);
                    i[a] ? (i[a].p(c, o), _(i[a], 1)) : (i[a] = Un(c), i[a].c(), _(i[a], 1), i[a].m(e.parentNode, e))
                }
                for (ne(), a = t.length; a < i.length; a += 1) s(a);
                ie()
            }
        },
        i(r) {
            if (!n) {
                for (let o = 0; o < t.length; o += 1) _(i[o]);
                n = !0
            }
        },
        o(r) {
            i = i.filter(Boolean);
            for (let o = 0; o < i.length; o += 1) E(i[o]);
            n = !1
        },
        d(r) {
            De(i, r), r && d(e)
        }
    }
}

function ja(l) {
    let e, n, t, i;
    var s = gt(l[32]).icon;

    function r(o) {
        return {
            props: {
                class: "w-9 h-9 hover:scale-105 transition-all duration-200 ease-in-out",
                style: "filter: drop-shadow(0 0 0.2rem " + (o[5].socialhex ? o[5].socialhex.split(";")[0] : "white") + "); fill: " + (o[5].socialhex ? o[5].socialhex.split(";")[0] : "white")
            }
        }
    }
    return s && (n = ve(s, r(l))), {
        c() {
            e = w("a"), n && O(n.$$.fragment), this.h()
        },
        l(o) {
            e = $(o, "A", {
                href: !0,
                target: !0,
                rel: !0
            });
            var a = A(e);
            n && q(n.$$.fragment, a), a.forEach(d), this.h()
        },
        h() {
            g(e, "href", l[32]), g(e, "target", "_blank"), g(e, "rel", "noopener noreferrer")
        },
        m(o, a) {
            k(o, e, a), n && j(n, e, null), i = !0
        },
        p(o, a) {
            const c = {};
            if (a[0] & 32 && (c.style = "filter: drop-shadow(0 0 0.2rem " + (o[5].socialhex ? o[5].socialhex.split(";")[0] : "white") + "); fill: " + (o[5].socialhex ? o[5].socialhex.split(";")[0] : "white")), a[0] & 32 && s !== (s = gt(o[32]).icon)) {
                if (n) {
                    ne();
                    const h = n;
                    E(h.$$.fragment, 1, 0, () => {
                        V(h, 1)
                    }), ie()
                }
                s ? (n = ve(s, r(o)), O(n.$$.fragment), _(n.$$.fragment, 1), j(n, e, null)) : n = null
            } else s && n.$set(c);
            (!i || a[0] & 32 && t !== (t = o[32])) && g(e, "href", t)
        },
        i(o) {
            i || (n && _(n.$$.fragment, o), i = !0)
        },
        o(o) {
            n && E(n.$$.fragment, o), i = !1
        },
        d(o) {
            o && d(e), n && V(n)
        }
    }
}

function Va(l) {
    let e, n = l[32].replace(/(^\w+:|^)\/\//, "") + "",
        t;
    return {
        c() {
            e = w("p"), t = J(n)
        },
        l(i) {
            e = $(i, "P", {});
            var s = A(e);
            t = X(s, n), s.forEach(d)
        },
        m(i, s) {
            k(i, e, s), b(e, t)
        },
        p(i, s) {
            s[0] & 32 && n !== (n = i[32].replace(/(^\w+:|^)\/\//, "") + "") && fe(t, n)
        },
        d(i) {
            i && d(e)
        }
    }
}

function Ha(l) {
    let e, n, t, i, s;
    return e = new je({
        props: {
            $$slots: {
                default: [ja]
            },
            $$scope: {
                ctx: l
            }
        }
    }), t = new Ve({
        props: {
            $$slots: {
                default: [Va]
            },
            $$scope: {
                ctx: l
            }
        }
    }), {
        c() {
            O(e.$$.fragment), n = D(), O(t.$$.fragment), i = D()
        },
        l(r) {
            q(e.$$.fragment, r), n = T(r), q(t.$$.fragment, r), i = T(r)
        },
        m(r, o) {
            j(e, r, o), k(r, n, o), j(t, r, o), k(r, i, o), s = !0
        },
        p(r, o) {
            const a = {};
            o[0] & 32 | o[1] & 524288 && (a.$$scope = {
                dirty: o,
                ctx: r
            }), e.$set(a);
            const c = {};
            o[0] & 32 | o[1] & 524288 && (c.$$scope = {
                dirty: o,
                ctx: r
            }), t.$set(c)
        },
        i(r) {
            s || (_(e.$$.fragment, r), _(t.$$.fragment, r), s = !0)
        },
        o(r) {
            E(e.$$.fragment, r), E(t.$$.fragment, r), s = !1
        },
        d(r) {
            V(e, r), r && d(n), V(t, r), r && d(i)
        }
    }
}

function Un(l) {
    let e, n;
    return e = new Oe({
        props: {
            $$slots: {
                default: [Ha]
            },
            $$scope: {
                ctx: l
            }
        }
    }), {
        c() {
            O(e.$$.fragment)
        },
        l(t) {
            q(e.$$.fragment, t)
        },
        m(t, i) {
            j(e, t, i), n = !0
        },
        p(t, i) {
            const s = {};
            i[0] & 32 | i[1] & 524288 && (s.$$scope = {
                dirty: i,
                ctx: t
            }), e.$set(s)
        },
        i(t) {
            n || (_(e.$$.fragment, t), n = !0)
        },
        o(t) {
            E(e.$$.fragment, t), n = !1
        },
        d(t) {
            V(e, t)
        }
    }
}

function zn(l) {
    let e, n, t = l[5].crypto,
        i = [];
    for (let r = 0; r < t.length; r += 1) i[r] = qn(gn(l, t, r));
    const s = r => E(i[r], 1, 1, () => {
        i[r] = null
    });
    return {
        c() {
            for (let r = 0; r < i.length; r += 1) i[r].c();
            e = re()
        },
        l(r) {
            for (let o = 0; o < i.length; o += 1) i[o].l(r);
            e = re()
        },
        m(r, o) {
            for (let a = 0; a < i.length; a += 1) i[a] && i[a].m(r, o);
            k(r, e, o), n = !0
        },
        p(r, o) {
            if (o[0] & 8224) {
                t = r[5].crypto;
                let a;
                for (a = 0; a < t.length; a += 1) {
                    const c = gn(r, t, a);
                    i[a] ? (i[a].p(c, o), _(i[a], 1)) : (i[a] = qn(c), i[a].c(), _(i[a], 1), i[a].m(e.parentNode, e))
                }
                for (ne(), a = t.length; a < i.length; a += 1) s(a);
                ie()
            }
        },
        i(r) {
            if (!n) {
                for (let o = 0; o < t.length; o += 1) _(i[o]);
                n = !0
            }
        },
        o(r) {
            i = i.filter(Boolean);
            for (let o = 0; o < i.length; o += 1) E(i[o]);
            n = !1
        },
        d(r) {
            De(i, r), r && d(e)
        }
    }
}

function Wn(l) {
    let e, n;
    return e = new Oe({
        props: {
            $$slots: {
                default: [Wa]
            },
            $$scope: {
                ctx: l
            }
        }
    }), {
        c() {
            O(e.$$.fragment)
        },
        l(t) {
            q(e.$$.fragment, t)
        },
        m(t, i) {
            j(e, t, i), n = !0
        },
        p(t, i) {
            const s = {};
            i[0] & 32 | i[1] & 524288 && (s.$$scope = {
                dirty: i,
                ctx: t
            }), e.$set(s)
        },
        i(t) {
            n || (_(e.$$.fragment, t), n = !0)
        },
        o(t) {
            E(e.$$.fragment, t), n = !1
        },
        d(t) {
            V(e, t)
        }
    }
}

function Ua(l) {
    let e, n, t, i, s;
    var r = Ge(l[29].type).icon;

    function o(c) {
        return {
            props: {
                class: "w-9 h-9 hover:scale-105 transition-all duration-200 ease-in-out",
                style: "filter: drop-shadow(0 0 0.2rem " + (c[5].socialhex ? c[5].socialhex.split(";")[0] : "white") + "); fill: " + (c[5].socialhex ? c[5].socialhex.split(";")[0] : "white")
            }
        }
    }
    r && (n = ve(r, o(l)));

    function a() {
        return l[19](l[29])
    }
    return {
        c() {
            e = w("span"), n && O(n.$$.fragment)
        },
        l(c) {
            e = $(c, "SPAN", {});
            var h = A(e);
            n && q(n.$$.fragment, h), h.forEach(d)
        },
        m(c, h) {
            k(c, e, h), n && j(n, e, null), t = !0, i || (s = lt(e, "click", a), i = !0)
        },
        p(c, h) {
            l = c;
            const u = {};
            if (h[0] & 32 && (u.style = "filter: drop-shadow(0 0 0.2rem " + (l[5].socialhex ? l[5].socialhex.split(";")[0] : "white") + "); fill: " + (l[5].socialhex ? l[5].socialhex.split(";")[0] : "white")), h[0] & 32 && r !== (r = Ge(l[29].type).icon)) {
                if (n) {
                    ne();
                    const f = n;
                    E(f.$$.fragment, 1, 0, () => {
                        V(f, 1)
                    }), ie()
                }
                r ? (n = ve(r, o(l)), O(n.$$.fragment), _(n.$$.fragment, 1), j(n, e, null)) : n = null
            } else r && n.$set(u)
        },
        i(c) {
            t || (n && _(n.$$.fragment, c), t = !0)
        },
        o(c) {
            n && E(n.$$.fragment, c), t = !1
        },
        d(c) {
            c && d(e), n && V(n), i = !1, s()
        }
    }
}

function za(l) {
    let e, n = l[29].address + "",
        t;
    return {
        c() {
            e = w("p"), t = J(n)
        },
        l(i) {
            e = $(i, "P", {});
            var s = A(e);
            t = X(s, n), s.forEach(d)
        },
        m(i, s) {
            k(i, e, s), b(e, t)
        },
        p(i, s) {
            s[0] & 32 && n !== (n = i[29].address + "") && fe(t, n)
        },
        d(i) {
            i && d(e)
        }
    }
}

function Wa(l) {
    let e, n, t, i, s;
    return e = new je({
        props: {
            $$slots: {
                default: [Ua]
            },
            $$scope: {
                ctx: l
            }
        }
    }), t = new Ve({
        props: {
            $$slots: {
                default: [za]
            },
            $$scope: {
                ctx: l
            }
        }
    }), {
        c() {
            O(e.$$.fragment), n = D(), O(t.$$.fragment), i = D()
        },
        l(r) {
            q(e.$$.fragment, r), n = T(r), q(t.$$.fragment, r), i = T(r)
        },
        m(r, o) {
            j(e, r, o), k(r, n, o), j(t, r, o), k(r, i, o), s = !0
        },
        p(r, o) {
            const a = {};
            o[0] & 32 | o[1] & 524288 && (a.$$scope = {
                dirty: o,
                ctx: r
            }), e.$set(a);
            const c = {};
            o[0] & 32 | o[1] & 524288 && (c.$$scope = {
                dirty: o,
                ctx: r
            }), t.$set(c)
        },
        i(r) {
            s || (_(e.$$.fragment, r), _(t.$$.fragment, r), s = !0)
        },
        o(r) {
            E(e.$$.fragment, r), E(t.$$.fragment, r), s = !1
        },
        d(r) {
            V(e, r), r && d(n), V(t, r), r && d(i)
        }
    }
}

function qn(l) {
    let e = Ge(l[29].type),
        n, t, i = e && Wn(l);
    return {
        c() {
            i && i.c(), n = re()
        },
        l(s) {
            i && i.l(s), n = re()
        },
        m(s, r) {
            i && i.m(s, r), k(s, n, r), t = !0
        },
        p(s, r) {
            r[0] & 32 && (e = Ge(s[29].type)), e ? i ? (i.p(s, r), r[0] & 32 && _(i, 1)) : (i = Wn(s), i.c(), _(i, 1), i.m(n.parentNode, n)) : i && (ne(), E(i, 1, 1, () => {
                i = null
            }), ie())
        },
        i(s) {
            t || (_(i), t = !0)
        },
        o(s) {
            E(i), t = !1
        },
        d(s) {
            i && i.d(s), s && d(n)
        }
    }
}

function Gn(l) {
    let e, n;
    return {
        c() {
            e = w("iframe"), this.h()
        },
        l(t) {
            e = $(t, "IFRAME", {
                style: !0,
                class: !0,
                src: !0,
                frameborder: !0,
                allow: !0,
                loading: !0
            }), A(e).forEach(d), this.h()
        },
        h() {
            Y(e, "border-radius", "12px"), g(e, "class", "w-[100%] h-[80px] overflow-hidden md:w-[50%]"), ue(e.src, n = "https://open.spotify.com/embed/track/" + ((l[5].spotify ?? "").split("/track/")[1] ?? ["a"][1].split("?")[0]) + "?utm_source=generator") || g(e, "src", n), g(e, "frameborder", "0"), e.allowFullscreen = "", g(e, "allow", "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"), g(e, "loading", "lazy")
        },
        m(t, i) {
            k(t, e, i)
        },
        p(t, i) {
            i[0] & 32 && !ue(e.src, n = "https://open.spotify.com/embed/track/" + ((t[5].spotify ?? "").split("/track/")[1] ?? ["a"][1].split("?")[0]) + "?utm_source=generator") && g(e, "src", n)
        },
        d(t) {
            t && d(e)
        }
    }
}

function Yn(l) {
    let e, n, t, i, s, r, o, a = l[1].data.discord_user.username + "",
        c, h, u, f = (l[7] || l[1].data.discord_status) + "",
        p, m;

    function v(S, C) {
        return S[1].data.discord_user.avatar ? Ga : qa
    }
    let y = v(l),
        I = y(l);

    function Q(S, C) {
        return S[1].data.discord_status === "online" ? Za : S[1].data.discord_status === "dnd" ? Xa : S[1].data.discord_status === "idle" ? Ja : Ya
    }
    let ee = Q(l),
        L = ee(l),
        x = l[2] && Jn(l);
    return {
        c() {
            e = w("div"), n = w("div"), t = w("div"), I.c(), i = D(), L.c(), s = D(), r = w("div"), o = w("div"), c = J(a), h = D(), u = w("div"), p = J(f), m = D(), x && x.c(), this.h()
        },
        l(S) {
            e = $(S, "DIV", {
                class: !0,
                style: !0
            });
            var C = A(e);
            n = $(C, "DIV", {
                class: !0
            });
            var F = A(n);
            t = $(F, "DIV", {
                class: !0
            });
            var U = A(t);
            I.l(U), i = T(U), L.l(U), U.forEach(d), s = T(F), r = $(F, "DIV", {
                class: !0
            });
            var N = A(r);
            o = $(N, "DIV", {
                class: !0
            });
            var Z = A(o);
            c = X(Z, a), Z.forEach(d), h = T(N), u = $(N, "DIV", {
                class: !0
            });
            var te = A(u);
            p = X(te, f), te.forEach(d), N.forEach(d), F.forEach(d), m = T(C), x && x.l(C), C.forEach(d), this.h()
        },
        h() {
            g(t, "class", "flex justify-center items-center relative rounded-full"), g(o, "class", "text-white font-semibold"), g(u, "class", "text-white"), g(r, "class", "flex flex-col"), g(n, "class", "flex flex-row space-x-4"), g(e, "class", "min-h-fit min-w-fit rounded-3xl p-4 flex flex-col space-x-0 sm:space-x-8 sm:space-y-0 space-y-4 items-center justify-center gap-5"), Y(e, "background", "rgba(0,0,0," + l[5].opacity / 100 + ")"), Y(e, "backdrop-filter", "blur(" + l[5].cardblur / 2.5 + "px)"), Y(e, "-webkit-backdrop-filter", "blur(" + l[5].cardblur / 2.5 + "px)")
        },
        m(S, C) {
            k(S, e, C), b(e, n), b(n, t), I.m(t, null), b(t, i), L.m(t, null), b(n, s), b(n, r), b(r, o), b(o, c), b(r, h), b(r, u), b(u, p), b(e, m), x && x.m(e, null)
        },
        p(S, C) {
            y === (y = v(S)) && I ? I.p(S, C) : (I.d(1), I = y(S), I && (I.c(), I.m(t, i))), ee !== (ee = Q(S)) && (L.d(1), L = ee(S), L && (L.c(), L.m(t, null))), C[0] & 2 && a !== (a = S[1].data.discord_user.username + "") && fe(c, a), C[0] & 130 && f !== (f = (S[7] || S[1].data.discord_status) + "") && fe(p, f), S[2] ? x ? x.p(S, C) : (x = Jn(S), x.c(), x.m(e, null)) : x && (x.d(1), x = null), C[0] & 32 && Y(e, "background", "rgba(0,0,0," + S[5].opacity / 100 + ")"), C[0] & 32 && Y(e, "backdrop-filter", "blur(" + S[5].cardblur / 2.5 + "px)"), C[0] & 32 && Y(e, "-webkit-backdrop-filter", "blur(" + S[5].cardblur / 2.5 + "px)")
        },
        d(S) {
            S && d(e), I.d(), L.d(), x && x.d()
        }
    }
}

function qa(l) {
    let e, n;
    return {
        c() {
            e = w("img"), this.h()
        },
        l(t) {
            e = $(t, "IMG", {
                src: !0,
                alt: !0,
                class: !0
            }), this.h()
        },
        h() {
            ue(e.src, n = "https://cdn.discordapp.com/embed/avatars/" + l[1].data.discord_user.discriminator % 5 + ".png") || g(e, "src", n), g(e, "alt", "Avatar"), g(e, "class", "rounded-full h-12 w-12")
        },
        m(t, i) {
            k(t, e, i)
        },
        p(t, i) {
            i[0] & 2 && !ue(e.src, n = "https://cdn.discordapp.com/embed/avatars/" + t[1].data.discord_user.discriminator % 5 + ".png") && g(e, "src", n)
        },
        d(t) {
            t && d(e)
        }
    }
}

function Ga(l) {
    let e, n;
    return {
        c() {
            e = w("img"), this.h()
        },
        l(t) {
            e = $(t, "IMG", {
                src: !0,
                alt: !0,
                class: !0
            }), this.h()
        },
        h() {
            ue(e.src, n = l[1].data.discord_user.avatar) || g(e, "src", n), g(e, "alt", "Avatar"), g(e, "class", "rounded-full h-12 w-12")
        },
        m(t, i) {
            k(t, e, i)
        },
        p(t, i) {
            i[0] & 2 && !ue(e.src, n = t[1].data.discord_user.avatar) && g(e, "src", n)
        },
        d(t) {
            t && d(e)
        }
    }
}

function Ya(l) {
    let e;
    return {
        c() {
            e = w("span"), this.h()
        },
        l(n) {
            e = $(n, "SPAN", {
                class: !0
            }), A(e).forEach(d), this.h()
        },
        h() {
            g(e, "class", "w-4 h-4 bg-zinc-900 absolute bottom-0 right-0 rounded-full")
        },
        m(n, t) {
            k(n, e, t)
        },
        d(n) {
            n && d(e)
        }
    }
}

function Ja(l) {
    let e;
    return {
        c() {
            e = w("span"), this.h()
        },
        l(n) {
            e = $(n, "SPAN", {
                class: !0
            }), A(e).forEach(d), this.h()
        },
        h() {
            g(e, "class", "w-4 h-4 bg-yellow-300 absolute bottom-0 right-0 rounded-full")
        },
        m(n, t) {
            k(n, e, t)
        },
        d(n) {
            n && d(e)
        }
    }
}

function Xa(l) {
    let e;
    return {
        c() {
            e = w("span"), this.h()
        },
        l(n) {
            e = $(n, "SPAN", {
                class: !0
            }), A(e).forEach(d), this.h()
        },
        h() {
            g(e, "class", "w-4 h-4 bg-red-500 absolute bottom-0 right-0 rounded-full")
        },
        m(n, t) {
            k(n, e, t)
        },
        d(n) {
            n && d(e)
        }
    }
}

function Za(l) {
    let e;
    return {
        c() {
            e = w("span"), this.h()
        },
        l(n) {
            e = $(n, "SPAN", {
                class: !0
            }), A(e).forEach(d), this.h()
        },
        h() {
            g(e, "class", "w-4 h-4 bg-green-500 absolute bottom-0 right-0 rounded-full")
        },
        m(n, t) {
            k(n, e, t)
        },
        d(n) {
            n && d(e)
        }
    }
}

function Jn(l) {
    let e, n, t, i, s, r = l[2].assets.largeImage && Xn(l);

    function o(u, f) {
        return u[2].type === "LISTENING" ? tc : ec
    }
    let a = o(l),
        c = a(l),
        h = l[2].type === "LISTENING" && Zn(l);
    return {
        c() {
            e = w("div"), n = w("div"), r && r.c(), t = D(), i = w("div"), c.c(), s = D(), h && h.c(), this.h()
        },
        l(u) {
            e = $(u, "DIV", {
                class: !0,
                style: !0
            });
            var f = A(e);
            n = $(f, "DIV", {
                class: !0
            });
            var p = A(n);
            r && r.l(p), p.forEach(d), t = T(f), i = $(f, "DIV", {
                class: !0
            });
            var m = A(i);
            c.l(m), m.forEach(d), s = T(f), h && h.l(f), f.forEach(d), this.h()
        },
        h() {
            g(n, "class", "flex flex-col items-center justify-center"), g(i, "class", "text-white flex flex-col justify-center"), g(e, "class", "rounded-2xl p-5 flex flex-row space-x-4 relative overflow-hidden max-w-lg"), Y(e, "margin", "0", 1), Y(e, "background", "rgba(0,0,0," + l[5].opacity / 100 + ")"), Y(e, "backdrop-filter", "blur(" + l[5].cardblur / 2.5 + "px)"), Y(e, "-webkit-backdrop-filter", "blur(" + l[5].cardblur / 2.5 + "px)")
        },
        m(u, f) {
            k(u, e, f), b(e, n), r && r.m(n, null), b(e, t), b(e, i), c.m(i, null), b(e, s), h && h.m(e, null)
        },
        p(u, f) {
            u[2].assets.largeImage ? r ? r.p(u, f) : (r = Xn(u), r.c(), r.m(n, null)) : r && (r.d(1), r = null), a === (a = o(u)) && c ? c.p(u, f) : (c.d(1), c = a(u), c && (c.c(), c.m(i, null))), u[2].type === "LISTENING" ? h ? h.p(u, f) : (h = Zn(u), h.c(), h.m(e, null)) : h && (h.d(1), h = null), f[0] & 32 && Y(e, "background", "rgba(0,0,0," + u[5].opacity / 100 + ")"), f[0] & 32 && Y(e, "backdrop-filter", "blur(" + u[5].cardblur / 2.5 + "px)"), f[0] & 32 && Y(e, "-webkit-backdrop-filter", "blur(" + u[5].cardblur / 2.5 + "px)")
        },
        d(u) {
            u && d(e), r && r.d(), c.d(), h && h.d()
        }
    }
}

function Xn(l) {
    let e;

    function n(s, r) {
        return s[2].type === "LISTENING" ? Ka : Qa
    }
    let t = n(l),
        i = t(l);
    return {
        c() {
            i.c(), e = re()
        },
        l(s) {
            i.l(s), e = re()
        },
        m(s, r) {
            i.m(s, r), k(s, e, r)
        },
        p(s, r) {
            t === (t = n(s)) && i ? i.p(s, r) : (i.d(1), i = t(s), i && (i.c(), i.m(e.parentNode, e)))
        },
        d(s) {
            i.d(s), s && d(e)
        }
    }
}

function Qa(l) {
    let e, n = (l[2].type || "") + "",
        t, i, s, r;
    return {
        c() {
            e = w("span"), t = J(n), i = D(), s = w("img"), this.h()
        },
        l(o) {
            e = $(o, "SPAN", {
                class: !0
            });
            var a = A(e);
            t = X(a, n), a.forEach(d), i = T(o), s = $(o, "IMG", {
                src: !0,
                alt: !0,
                class: !0
            }), this.h()
        },
        h() {
            g(e, "class", "text-[10px]"), ue(s.src, r = "https://cdn.discordapp.com/app-assets/" + l[2].application_id + "/" + l[2].assets.largeImage + ".png") || g(s, "src", r), g(s, "alt", "Activity"), g(s, "class", "rounded h-14 w-14")
        },
        m(o, a) {
            k(o, e, a), b(e, t), k(o, i, a), k(o, s, a)
        },
        p(o, a) {
            a[0] & 4 && n !== (n = (o[2].type || "") + "") && fe(t, n), a[0] & 4 && !ue(s.src, r = "https://cdn.discordapp.com/app-assets/" + o[2].application_id + "/" + o[2].assets.largeImage + ".png") && g(s, "src", r)
        },
        d(o) {
            o && d(e), o && d(i), o && d(s)
        }
    }
}

function Ka(l) {
    let e, n = (l[2].type || "") + "",
        t, i, s, r;
    return {
        c() {
            e = w("span"), t = J(n), i = D(), s = w("img"), this.h()
        },
        l(o) {
            e = $(o, "SPAN", {
                class: !0
            });
            var a = A(e);
            t = X(a, n), a.forEach(d), i = T(o), s = $(o, "IMG", {
                src: !0,
                alt: !0,
                class: !0
            }), this.h()
        },
        h() {
            g(e, "class", "text-[10px]"), ue(s.src, r = "https://i.scdn.co/image/" + l[2].assets.largeImage.slice(8)) || g(s, "src", r), g(s, "alt", "Activity"), g(s, "class", "rounded h-14 w-14")
        },
        m(o, a) {
            k(o, e, a), b(e, t), k(o, i, a), k(o, s, a)
        },
        p(o, a) {
            a[0] & 4 && n !== (n = (o[2].type || "") + "") && fe(t, n), a[0] & 4 && !ue(s.src, r = "https://i.scdn.co/image/" + o[2].assets.largeImage.slice(8)) && g(s, "src", r)
        },
        d(o) {
            o && d(e), o && d(i), o && d(s)
        }
    }
}

function ec(l) {
    let e, n = (l[2].name || "") + "",
        t, i, s, r = (l[2].details || "") + "",
        o, a, c, h = (l[2].state || "") + "",
        u;
    return {
        c() {
            e = w("p"), t = J(n), i = D(), s = w("p"), o = J(r), a = D(), c = w("p"), u = J(h), this.h()
        },
        l(f) {
            e = $(f, "P", {
                class: !0
            });
            var p = A(e);
            t = X(p, n), p.forEach(d), i = T(f), s = $(f, "P", {});
            var m = A(s);
            o = X(m, r), m.forEach(d), a = T(f), c = $(f, "P", {});
            var v = A(c);
            u = X(v, h), v.forEach(d), this.h()
        },
        h() {
            g(e, "class", "font-semibold")
        },
        m(f, p) {
            k(f, e, p), b(e, t), k(f, i, p), k(f, s, p), b(s, o), k(f, a, p), k(f, c, p), b(c, u)
        },
        p(f, p) {
            p[0] & 4 && n !== (n = (f[2].name || "") + "") && fe(t, n), p[0] & 4 && r !== (r = (f[2].details || "") + "") && fe(o, r), p[0] & 4 && h !== (h = (f[2].state || "") + "") && fe(u, h)
        },
        d(f) {
            f && d(e), f && d(i), f && d(s), f && d(a), f && d(c)
        }
    }
}

function tc(l) {
    let e, n, t = (l[1].data.spotify.song || "") + "",
        i, s, r, o, a, c = (l[2].state.split(";").join(", ") || "") + "",
        h;
    return {
        c() {
            e = w("p"), n = J('Listening to "'), i = J(t), s = J('"'), r = D(), o = w("p"), a = J("by "), h = J(c), this.h()
        },
        l(u) {
            e = $(u, "P", {
                class: !0
            });
            var f = A(e);
            n = X(f, 'Listening to "'), i = X(f, t), s = X(f, '"'), f.forEach(d), r = T(u), o = $(u, "P", {});
            var p = A(o);
            a = X(p, "by "), h = X(p, c), p.forEach(d), this.h()
        },
        h() {
            g(e, "class", "font-semibold")
        },
        m(u, f) {
            k(u, e, f), b(e, n), b(e, i), b(e, s), k(u, r, f), k(u, o, f), b(o, a), b(o, h)
        },
        p(u, f) {
            f[0] & 2 && t !== (t = (u[1].data.spotify.song || "") + "") && fe(i, t), f[0] & 4 && c !== (c = (u[2].state.split(";").join(", ") || "") + "") && fe(h, c)
        },
        d(u) {
            u && d(e), u && d(r), u && d(o)
        }
    }
}

function Zn(l) {
    let e, n, t, i;
    return {
        c() {
            e = w("div"), n = D(), t = w("img"), this.h()
        },
        l(s) {
            e = $(s, "DIV", {
                class: !0
            }), A(e).forEach(d), n = T(s), t = $(s, "IMG", {
                src: !0,
                alt: !0,
                class: !0
            }), this.h()
        },
        h() {
            g(e, "class", "absolute w-full top-0 -left-4 h-full z-[-5] bg-gradient-to-r from-80% from-black to-[#000000ad] to-100% "), ue(t.src, i = "https://i.scdn.co/image/" + l[2].assets.largeImage.slice(8)) || g(t, "src", i), g(t, "alt", "Activity"), g(t, "class", "blur-sm absolute -bottom-0.5 -right-3 w-32 h-32 z-[-10]")
        },
        m(s, r) {
            k(s, e, r), k(s, n, r), k(s, t, r)
        },
        p(s, r) {
            r[0] & 4 && !ue(t.src, i = "https://i.scdn.co/image/" + s[2].assets.largeImage.slice(8)) && g(t, "src", i)
        },
        d(s) {
            s && d(e), s && d(n), s && d(t)
        }
    }
}

function nc(l) {
    let e = l[26].title + "",
        n;
    return {
        c() {
            n = J(e)
        },
        l(t) {
            n = X(t, e)
        },
        m(t, i) {
            k(t, n, i)
        },
        p(t, i) {
            i[0] & 32 && e !== (e = t[26].title + "") && fe(n, e)
        },
        d(t) {
            t && d(n)
        }
    }
}

function Qn(l) {
    let e, n;

    function t() {
        return l[20](l[26])
    }
    return e = new Wt({
        props: {
            class: "w-[50%] bg-[#00000070] text-white hover:text-black",
            style: "backdrop-filter: blur(20px);",
            $$slots: {
                default: [nc]
            },
            $$scope: {
                ctx: l
            }
        }
    }), e.$on("click", t), {
        c() {
            O(e.$$.fragment)
        },
        l(i) {
            q(e.$$.fragment, i)
        },
        m(i, s) {
            j(e, i, s), n = !0
        },
        p(i, s) {
            l = i;
            const r = {};
            s[0] & 32 | s[1] & 524288 && (r.$$scope = {
                dirty: s,
                ctx: l
            }), e.$set(r)
        },
        i(i) {
            n || (_(e.$$.fragment, i), n = !0)
        },
        o(i) {
            E(e.$$.fragment, i), n = !1
        },
        d(i) {
            V(e, i)
        }
    }
}

function Kn(l) {
    let e, n, t, i = l[0].props.views + "",
        s, r;
    return n = new Ql({
        props: {
            class: "h-6 w-6 ml-[auto] mr-0"
        }
    }), {
        c() {
            e = w("div"), O(n.$$.fragment), t = D(), s = J(i), this.h()
        },
        l(o) {
            e = $(o, "DIV", {
                class: !0
            });
            var a = A(e);
            q(n.$$.fragment, a), t = T(a), s = X(a, i), a.forEach(d), this.h()
        },
        h() {
            g(e, "class", "flex gap-[5px] text-[15px] items-center ")
        },
        m(o, a) {
            k(o, e, a), j(n, e, null), b(e, t), b(e, s), r = !0
        },
        p(o, a) {
            (!r || a[0] & 1) && i !== (i = o[0].props.views + "") && fe(s, i)
        },
        i(o) {
            r || (_(n.$$.fragment, o), r = !0)
        },
        o(o) {
            E(n.$$.fragment, o), r = !1
        },
        d(o) {
            o && d(e), V(n)
        }
    }
}

function ei(l) {
    let e, n;
    return {
        c() {
            e = w("img"), this.h()
        },
        l(t) {
            e = $(t, "IMG", {
                src: !0,
                class: !0,
                alt: !0
            }), this.h()
        },
        h() {
            ue(e.src, n = l[5].avatar) || g(e, "src", n), g(e, "class", "rounded-full w-[170px] h-[170px] object-cover drop-shadow-2xl"), g(e, "alt", "avatar")
        },
        m(t, i) {
            k(t, e, i)
        },
        p(t, i) {
            i[0] & 32 && !ue(e.src, n = t[5].avatar) && g(e, "src", n)
        },
        d(t) {
            t && d(e)
        }
    }
}

function ic(l) {
    let e, n, t, i, s = l[5].title + "",
        r, o, a;
    return {
        c() {
            e = w("style"), n = J(`@keyframes lightsweep { \r
										0% { \r
											background-position: -20em;\r
										}\r
										50% {\r
											\r
										}\r
										100% {\r
											background-position: 20em ;\r
										}\r
										}`), t = D(), i = w("span"), r = J(s), this.h()
        },
        l(c) {
            e = $(c, "STYLE", {});
            var h = A(e);
            n = X(h, `@keyframes lightsweep { \r
										0% { \r
											background-position: -20em;\r
										}\r
										50% {\r
											\r
										}\r
										100% {\r
											background-position: 20em ;\r
										}\r
										}`), h.forEach(d), t = T(c), i = $(c, "SPAN", {
                class: !0,
                style: !0
            });
            var u = A(i);
            r = X(u, s), u.forEach(d), this.h()
        },
        h() {
            g(i, "class", o = "text-2xl flex justify-center items-center font-semibold text-center " + l[12](l[5].publicEffectFlags, l[14]) + " svelte-90t6g4"), g(i, "style", a = "color: " + (l[5].titlehex ? l[5].titlehex.split(";")[0] : "white") + " ; " + (le(l[5].publicEffectFlags).some(Ti) ? "background-image: url(img/sparkle.gif); width: fit-content;" : "") + " " + (le(l[5].publicEffectFlags).some(Fi) ? "background-image: url(img/thunder.webp); width: fit-content;" : "") + " " + (le(l[5].publicEffectFlags).some(Li) ? ` font-weight: 800!important; text-shadow: 1px 2px 35px ${l[5].titlehex}; -webkit-text-fill-color:transparent; -webkit-background-clip: text !important; background: linear-gradient(145deg, ${l[5].titlehex} 0%, #ffffff 50%, #ffffff 70%, ${l[5].titlehex} 100%);  background-size: 25em; animation:lightsweep 3s linear infinite;` : ""))
        },
        m(c, h) {
            k(c, e, h), b(e, n), k(c, t, h), k(c, i, h), b(i, r)
        },
        p(c, h) {
            h[0] & 32 && s !== (s = c[5].title + "") && fe(r, s), h[0] & 32 && o !== (o = "text-2xl flex justify-center items-center font-semibold text-center " + c[12](c[5].publicEffectFlags, c[14]) + " svelte-90t6g4") && g(i, "class", o), h[0] & 32 && a !== (a = "color: " + (c[5].titlehex ? c[5].titlehex.split(";")[0] : "white") + " ; " + (le(c[5].publicEffectFlags).some(Ti) ? "background-image: url(img/sparkle.gif); width: fit-content;" : "") + " " + (le(c[5].publicEffectFlags).some(Fi) ? "background-image: url(img/thunder.webp); width: fit-content;" : "") + " " + (le(c[5].publicEffectFlags).some(Li) ? ` font-weight: 800!important; text-shadow: 1px 2px 35px ${c[5].titlehex}; -webkit-text-fill-color:transparent; -webkit-background-clip: text !important; background: linear-gradient(145deg, ${c[5].titlehex} 0%, #ffffff 50%, #ffffff 70%, ${c[5].titlehex} 100%);  background-size: 25em; animation:lightsweep 3s linear infinite;` : "")) && g(i, "style", a)
        },
        d(c) {
            c && d(e), c && d(t), c && d(i)
        }
    }
}

function ti(l) {
    let e, n;
    return e = new Ve({
        props: {
            $$slots: {
                default: [lc]
            },
            $$scope: {
                ctx: l
            }
        }
    }), {
        c() {
            O(e.$$.fragment)
        },
        l(t) {
            q(e.$$.fragment, t)
        },
        m(t, i) {
            j(e, t, i), n = !0
        },
        p(t, i) {
            const s = {};
            i[0] & 32 | i[1] & 524288 && (s.$$scope = {
                dirty: i,
                ctx: t
            }), e.$set(s)
        },
        i(t) {
            n || (_(e.$$.fragment, t), n = !0)
        },
        o(t) {
            E(e.$$.fragment, t), n = !1
        },
        d(t) {
            V(e, t)
        }
    }
}

function lc(l) {
    let e, n, t = l[5].uid + "",
        i;
    return {
        c() {
            e = w("p"), n = J("UID: "), i = J(t)
        },
        l(s) {
            e = $(s, "P", {});
            var r = A(e);
            n = X(r, "UID: "), i = X(r, t), r.forEach(d)
        },
        m(s, r) {
            k(s, e, r), b(e, n), b(e, i)
        },
        p(s, r) {
            r[0] & 32 && t !== (t = s[5].uid + "") && fe(i, t)
        },
        d(s) {
            s && d(e)
        }
    }
}

function rc(l) {
    let e, n, t, i;
    e = new je({
        props: {
            $$slots: {
                default: [ic]
            },
            $$scope: {
                ctx: l
            }
        }
    });
    let s = l[5].showuid && ti(l);
    return {
        c() {
            O(e.$$.fragment), n = D(), s && s.c(), t = re()
        },
        l(r) {
            q(e.$$.fragment, r), n = T(r), s && s.l(r), t = re()
        },
        m(r, o) {
            j(e, r, o), k(r, n, o), s && s.m(r, o), k(r, t, o), i = !0
        },
        p(r, o) {
            const a = {};
            o[0] & 32 | o[1] & 524288 && (a.$$scope = {
                dirty: o,
                ctx: r
            }), e.$set(a), r[5].showuid ? s ? (s.p(r, o), o[0] & 32 && _(s, 1)) : (s = ti(r), s.c(), _(s, 1), s.m(t.parentNode, t)) : s && (ne(), E(s, 1, 1, () => {
                s = null
            }), ie())
        },
        i(r) {
            i || (_(e.$$.fragment, r), _(s), i = !0)
        },
        o(r) {
            E(e.$$.fragment, r), E(s), i = !1
        },
        d(r) {
            V(e, r), r && d(n), s && s.d(r), r && d(t)
        }
    }
}

function ni(l) {
    let e, n, t = l[4] ?? [],
        i = [];
    for (let r = 0; r < t.length; r += 1) i[r] = ri(An(l, t, r));
    const s = r => E(i[r], 1, 1, () => {
        i[r] = null
    });
    return {
        c() {
            e = w("div");
            for (let r = 0; r < i.length; r += 1) i[r].c();
            this.h()
        },
        l(r) {
            e = $(r, "DIV", {
                class: !0
            });
            var o = A(e);
            for (let a = 0; a < i.length; a += 1) i[a].l(o);
            o.forEach(d), this.h()
        },
        h() {
            g(e, "class", "flex flex-col")
        },
        m(r, o) {
            k(r, e, o);
            for (let a = 0; a < i.length; a += 1) i[a] && i[a].m(e, null);
            n = !0
        },
        p(r, o) {
            if (o[0] & 48) {
                t = r[4] ?? [];
                let a;
                for (a = 0; a < t.length; a += 1) {
                    const c = An(r, t, a);
                    i[a] ? (i[a].p(c, o), _(i[a], 1)) : (i[a] = ri(c), i[a].c(), _(i[a], 1), i[a].m(e, null))
                }
                for (ne(), a = t.length; a < i.length; a += 1) s(a);
                ie()
            }
        },
        i(r) {
            if (!n) {
                for (let o = 0; o < t.length; o += 1) _(i[o]);
                n = !0
            }
        },
        o(r) {
            i = i.filter(Boolean);
            for (let o = 0; o < i.length; o += 1) E(i[o]);
            n = !1
        },
        d(r) {
            r && d(e), De(i, r)
        }
    }
}

function sc(l) {
    let e, n;
    return {
        c() {
            e = w("img"), this.h()
        },
        l(t) {
            e = $(t, "IMG", {
                src: !0,
                class: !0,
                alt: !0
            }), this.h()
        },
        h() {
            ue(e.src, n = l[38].url) || g(e, "src", n), g(e, "class", "w-6 h-6 hover:scale-105 transition-all duration-200 ease-in-out"), g(e, "alt", "badge")
        },
        m(t, i) {
            k(t, e, i)
        },
        p(t, i) {
            i[0] & 16 && !ue(e.src, n = t[38].url) && g(e, "src", n)
        },
        d(t) {
            t && d(e)
        }
    }
}

function oc(l) {
    let e, n = (l[38].description ? l[38].description : "") + "",
        t;
    return {
        c() {
            e = w("p"), t = J(n)
        },
        l(i) {
            e = $(i, "P", {});
            var s = A(e);
            t = X(s, n), s.forEach(d)
        },
        m(i, s) {
            k(i, e, s), b(e, t)
        },
        p(i, s) {
            s[0] & 16 && n !== (n = (i[38].description ? i[38].description : "") + "") && fe(t, n)
        },
        d(i) {
            i && d(e)
        }
    }
}

function ac(l) {
    let e, n, t, i, s;
    return e = new je({
        props: {
            $$slots: {
                default: [sc]
            },
            $$scope: {
                ctx: l
            }
        }
    }), t = new Ve({
        props: {
            $$slots: {
                default: [oc]
            },
            $$scope: {
                ctx: l
            }
        }
    }), {
        c() {
            O(e.$$.fragment), n = D(), O(t.$$.fragment), i = D()
        },
        l(r) {
            q(e.$$.fragment, r), n = T(r), q(t.$$.fragment, r), i = T(r)
        },
        m(r, o) {
            j(e, r, o), k(r, n, o), j(t, r, o), k(r, i, o), s = !0
        },
        p(r, o) {
            const a = {};
            o[0] & 16 | o[1] & 524288 && (a.$$scope = {
                dirty: o,
                ctx: r
            }), e.$set(a);
            const c = {};
            o[0] & 16 | o[1] & 524288 && (c.$$scope = {
                dirty: o,
                ctx: r
            }), t.$set(c)
        },
        i(r) {
            s || (_(e.$$.fragment, r), _(t.$$.fragment, r), s = !0)
        },
        o(r) {
            E(e.$$.fragment, r), E(t.$$.fragment, r), s = !1
        },
        d(r) {
            V(e, r), r && d(n), V(t, r), r && d(i)
        }
    }
}

function ii(l) {
    let e, n;
    return e = new Oe({
        props: {
            $$slots: {
                default: [ac]
            },
            $$scope: {
                ctx: l
            }
        }
    }), {
        c() {
            O(e.$$.fragment)
        },
        l(t) {
            q(e.$$.fragment, t)
        },
        m(t, i) {
            j(e, t, i), n = !0
        },
        p(t, i) {
            const s = {};
            i[0] & 16 | i[1] & 524288 && (s.$$scope = {
                dirty: i,
                ctx: t
            }), e.$set(s)
        },
        i(t) {
            n || (_(e.$$.fragment, t), n = !0)
        },
        o(t) {
            E(e.$$.fragment, t), n = !1
        },
        d(t) {
            V(e, t)
        }
    }
}

function li(l) {
    let e, n;
    return e = new Oe({
        props: {
            $$slots: {
                default: [uc]
            },
            $$scope: {
                ctx: l
            }
        }
    }), {
        c() {
            O(e.$$.fragment)
        },
        l(t) {
            q(e.$$.fragment, t)
        },
        m(t, i) {
            j(e, t, i), n = !0
        },
        i(t) {
            n || (_(e.$$.fragment, t), n = !0)
        },
        o(t) {
            E(e.$$.fragment, t), n = !1
        },
        d(t) {
            V(e, t)
        }
    }
}

function cc(l) {
    let e, n;
    return {
        c() {
            e = pt("svg"), n = pt("path"), this.h()
        },
        l(t) {
            e = mt(t, "svg", {
                width: !0,
                height: !0,
                viewBox: !0,
                fill: !0,
                xmlns: !0
            });
            var i = A(e);
            n = mt(i, "path", {
                "fill-rule": !0,
                "clip-rule": !0,
                d: !0,
                fill: !0
            }), A(n).forEach(d), i.forEach(d), this.h()
        },
        h() {
            g(n, "fill-rule", "evenodd"), g(n, "clip-rule", "evenodd"), g(n, "d", "M6.23607 1C5.09976 1 4.06097 1.64201 3.55279 2.65836L1.14806 7.46782C0.647975 8.46799 0.745665 9.66329 1.40152 10.569L9.57018 21.8495C10.7679 23.5035 13.2321 23.5035 14.4298 21.8495L22.5985 10.569C23.2543 9.66329 23.352 8.468 22.852 7.46782L20.4472 2.65836C19.939 1.64201 18.9003 1 17.7639 1H6.23607ZM5.34165 3.55279C5.51104 3.214 5.8573 3 6.23607 3H8.67428L7.24571 8H3.11804L5.34165 3.55279ZM9.32574 8L10.7543 3H13.2457L14.6743 8H9.32574ZM14.646 10H9.35397L12 18.5996L14.646 10ZM13.929 19.1312L16.7386 10H20.5412L13.929 19.1312ZM16.7543 8L15.3257 3H17.7639C18.1427 3 18.489 3.214 18.6584 3.55279L20.882 8H16.7543ZM3.4588 10H7.26143L10.071 19.1312L3.4588 10Z"), g(n, "fill", "white"), g(e, "width", "24px"), g(e, "height", "24px"), g(e, "viewBox", "0 0 24 24"), g(e, "fill", "none"), g(e, "xmlns", "http://www.w3.org/2000/svg")
        },
        m(t, i) {
            k(t, e, i), b(e, n)
        },
        p: se,
        d(t) {
            t && d(e)
        }
    }
}

function fc(l) {
    let e, n;
    return {
        c() {
            e = w("p"), n = J("Premium")
        },
        l(t) {
            e = $(t, "P", {});
            var i = A(e);
            n = X(i, "Premium"), i.forEach(d)
        },
        m(t, i) {
            k(t, e, i), b(e, n)
        },
        p: se,
        d(t) {
            t && d(e)
        }
    }
}

function uc(l) {
    let e, n, t, i;
    return e = new je({
        props: {
            $$slots: {
                default: [cc]
            },
            $$scope: {
                ctx: l
            }
        }
    }), t = new Ve({
        props: {
            $$slots: {
                default: [fc]
            },
            $$scope: {
                ctx: l
            }
        }
    }), {
        c() {
            O(e.$$.fragment), n = D(), O(t.$$.fragment)
        },
        l(s) {
            q(e.$$.fragment, s), n = T(s), q(t.$$.fragment, s)
        },
        m(s, r) {
            j(e, s, r), k(s, n, r), j(t, s, r), i = !0
        },
        p(s, r) {
            const o = {};
            r[1] & 524288 && (o.$$scope = {
                dirty: r,
                ctx: s
            }), e.$set(o);
            const a = {};
            r[1] & 524288 && (a.$$scope = {
                dirty: r,
                ctx: s
            }), t.$set(a)
        },
        i(s) {
            i || (_(e.$$.fragment, s), _(t.$$.fragment, s), i = !0)
        },
        o(s) {
            E(e.$$.fragment, s), E(t.$$.fragment, s), i = !1
        },
        d(s) {
            V(e, s), s && d(n), V(t, s)
        }
    }
}

function ri(l) {
    let e, n, t = Math.floor(l[4].length) === l[37] + 1 && l[5].premium && l[5].premiumbadge === !0,
        i, s, r, o = l[35],
        a = [];
    for (let u = 0; u < o.length; u += 1) a[u] = ii(En(l, o, u));
    const c = u => E(a[u], 1, 1, () => {
        a[u] = null
    });
    let h = t && li(l);
    return {
        c() {
            e = w("div");
            for (let u = 0; u < a.length; u += 1) a[u].c();
            n = D(), h && h.c(), i = D(), this.h()
        },
        l(u) {
            e = $(u, "DIV", {
                class: !0
            });
            var f = A(e);
            for (let p = 0; p < a.length; p += 1) a[p].l(f);
            n = T(f), h && h.l(f), i = T(f), f.forEach(d), this.h()
        },
        h() {
            g(e, "class", s = "flex flex-row " + (Math.floor(l[4].length) === l[37] + 1 ? "justify-center" : ""))
        },
        m(u, f) {
            k(u, e, f);
            for (let p = 0; p < a.length; p += 1) a[p] && a[p].m(e, null);
            b(e, n), h && h.m(e, null), b(e, i), r = !0
        },
        p(u, f) {
            if (f[0] & 16) {
                o = u[35];
                let p;
                for (p = 0; p < o.length; p += 1) {
                    const m = En(u, o, p);
                    a[p] ? (a[p].p(m, f), _(a[p], 1)) : (a[p] = ii(m), a[p].c(), _(a[p], 1), a[p].m(e, n))
                }
                for (ne(), p = o.length; p < a.length; p += 1) c(p);
                ie()
            }
            f[0] & 48 && (t = Math.floor(u[4].length) === u[37] + 1 && u[5].premium && u[5].premiumbadge === !0), t ? h ? f[0] & 48 && _(h, 1) : (h = li(u), h.c(), _(h, 1), h.m(e, i)) : h && (ne(), E(h, 1, 1, () => {
                h = null
            }), ie()), (!r || f[0] & 16 && s !== (s = "flex flex-row " + (Math.floor(u[4].length) === u[37] + 1 ? "justify-center" : ""))) && g(e, "class", s)
        },
        i(u) {
            if (!r) {
                for (let f = 0; f < o.length; f += 1) _(a[f]);
                _(h), r = !0
            }
        },
        o(u) {
            a = a.filter(Boolean);
            for (let f = 0; f < a.length; f += 1) E(a[f]);
            E(h), r = !1
        },
        d(u) {
            u && d(e), De(a, u), h && h.d()
        }
    }
}

function dc(l) {
    let e, n = l[5].description + "",
        t, i;
    return {
        c() {
            e = w("span"), t = J(n), this.h()
        },
        l(s) {
            e = $(s, "SPAN", {
                style: !0,
                class: !0
            });
            var r = A(e);
            t = X(r, n), r.forEach(d), this.h()
        },
        h() {
            Y(e, "color", l[5].descriptionhex ? l[5].descriptionhex.split(";")[0] : "white"), g(e, "class", i = "font-medium mt-[8px] my-3 " + (l[5].descriptionhex ? "text-[" + l[5].descriptionhex + "]" : "text-white-500") + " text-center svelte-90t6g4")
        },
        m(s, r) {
            k(s, e, r), b(e, t)
        },
        p(s, r) {
            r[0] & 32 && n !== (n = s[5].description + "") && fe(t, n), r[0] & 32 && Y(e, "color", s[5].descriptionhex ? s[5].descriptionhex.split(";")[0] : "white"), r[0] & 32 && i !== (i = "font-medium mt-[8px] my-3 " + (s[5].descriptionhex ? "text-[" + s[5].descriptionhex + "]" : "text-white-500") + " text-center svelte-90t6g4") && g(e, "class", i)
        },
        i: se,
        o: se,
        d(s) {
            s && d(e)
        }
    }
}

function hc(l) {
    let e, n, t;
    var i = le(l[5].publicEffectFlags).find(Ni).display;

    function s(r) {
        return {
            props: {
                text: r[5].description
            }
        }
    }
    return i && (e = ve(i, s(l))), {
        c() {
            e && O(e.$$.fragment), n = re()
        },
        l(r) {
            e && q(e.$$.fragment, r), n = re()
        },
        m(r, o) {
            e && j(e, r, o), k(r, n, o), t = !0
        },
        p(r, o) {
            const a = {};
            if (o[0] & 32 && (a.text = r[5].description), o[0] & 32 && i !== (i = le(r[5].publicEffectFlags).find(Ni).display)) {
                if (e) {
                    ne();
                    const c = e;
                    E(c.$$.fragment, 1, 0, () => {
                        V(c, 1)
                    }), ie()
                }
                i ? (e = ve(i, s(r)), O(e.$$.fragment), _(e.$$.fragment, 1), j(e, n.parentNode, n)) : e = null
            } else i && e.$set(a)
        },
        i(r) {
            t || (e && _(e.$$.fragment, r), t = !0)
        },
        o(r) {
            e && E(e.$$.fragment, r), t = !1
        },
        d(r) {
            r && d(n), e && V(e, r)
        }
    }
}

function si(l) {
    let e, n, t = l[5].links,
        i = [];
    for (let r = 0; r < t.length; r += 1) i[r] = oi(kn(l, t, r));
    const s = r => E(i[r], 1, 1, () => {
        i[r] = null
    });
    return {
        c() {
            for (let r = 0; r < i.length; r += 1) i[r].c();
            e = re()
        },
        l(r) {
            for (let o = 0; o < i.length; o += 1) i[o].l(r);
            e = re()
        },
        m(r, o) {
            for (let a = 0; a < i.length; a += 1) i[a] && i[a].m(r, o);
            k(r, e, o), n = !0
        },
        p(r, o) {
            if (o[0] & 32) {
                t = r[5].links;
                let a;
                for (a = 0; a < t.length; a += 1) {
                    const c = kn(r, t, a);
                    i[a] ? (i[a].p(c, o), _(i[a], 1)) : (i[a] = oi(c), i[a].c(), _(i[a], 1), i[a].m(e.parentNode, e))
                }
                for (ne(), a = t.length; a < i.length; a += 1) s(a);
                ie()
            }
        },
        i(r) {
            if (!n) {
                for (let o = 0; o < t.length; o += 1) _(i[o]);
                n = !0
            }
        },
        o(r) {
            i = i.filter(Boolean);
            for (let o = 0; o < i.length; o += 1) E(i[o]);
            n = !1
        },
        d(r) {
            De(i, r), r && d(e)
        }
    }
}

function pc(l) {
    let e, n, t, i;
    var s = gt(l[32]).icon;

    function r(o) {
        return {
            props: {
                class: "w-9 h-9 hover:scale-105 transition-all duration-200 ease-in-out",
                style: "filter: drop-shadow(0 0 0.2rem " + (o[5].socialhex ? o[5].socialhex.split(";")[0] : "white") + "); fill: " + (o[5].socialhex ? o[5].socialhex.split(";")[0] : "white")
            }
        }
    }
    return s && (n = ve(s, r(l))), {
        c() {
            e = w("a"), n && O(n.$$.fragment), this.h()
        },
        l(o) {
            e = $(o, "A", {
                href: !0,
                target: !0,
                rel: !0
            });
            var a = A(e);
            n && q(n.$$.fragment, a), a.forEach(d), this.h()
        },
        h() {
            g(e, "href", l[32]), g(e, "target", "_blank"), g(e, "rel", "noopener noreferrer")
        },
        m(o, a) {
            k(o, e, a), n && j(n, e, null), i = !0
        },
        p(o, a) {
            const c = {};
            if (a[0] & 32 && (c.style = "filter: drop-shadow(0 0 0.2rem " + (o[5].socialhex ? o[5].socialhex.split(";")[0] : "white") + "); fill: " + (o[5].socialhex ? o[5].socialhex.split(";")[0] : "white")), a[0] & 32 && s !== (s = gt(o[32]).icon)) {
                if (n) {
                    ne();
                    const h = n;
                    E(h.$$.fragment, 1, 0, () => {
                        V(h, 1)
                    }), ie()
                }
                s ? (n = ve(s, r(o)), O(n.$$.fragment), _(n.$$.fragment, 1), j(n, e, null)) : n = null
            } else s && n.$set(c);
            (!i || a[0] & 32 && t !== (t = o[32])) && g(e, "href", t)
        },
        i(o) {
            i || (n && _(n.$$.fragment, o), i = !0)
        },
        o(o) {
            n && E(n.$$.fragment, o), i = !1
        },
        d(o) {
            o && d(e), n && V(n)
        }
    }
}

function mc(l) {
    let e, n = l[32].replace(/(^\w+:|^)\/\//, "") + "",
        t;
    return {
        c() {
            e = w("p"), t = J(n)
        },
        l(i) {
            e = $(i, "P", {});
            var s = A(e);
            t = X(s, n), s.forEach(d)
        },
        m(i, s) {
            k(i, e, s), b(e, t)
        },
        p(i, s) {
            s[0] & 32 && n !== (n = i[32].replace(/(^\w+:|^)\/\//, "") + "") && fe(t, n)
        },
        d(i) {
            i && d(e)
        }
    }
}

function gc(l) {
    let e, n, t, i, s;
    return e = new je({
        props: {
            $$slots: {
                default: [pc]
            },
            $$scope: {
                ctx: l
            }
        }
    }), t = new Ve({
        props: {
            $$slots: {
                default: [mc]
            },
            $$scope: {
                ctx: l
            }
        }
    }), {
        c() {
            O(e.$$.fragment), n = D(), O(t.$$.fragment), i = D()
        },
        l(r) {
            q(e.$$.fragment, r), n = T(r), q(t.$$.fragment, r), i = T(r)
        },
        m(r, o) {
            j(e, r, o), k(r, n, o), j(t, r, o), k(r, i, o), s = !0
        },
        p(r, o) {
            const a = {};
            o[0] & 32 | o[1] & 524288 && (a.$$scope = {
                dirty: o,
                ctx: r
            }), e.$set(a);
            const c = {};
            o[0] & 32 | o[1] & 524288 && (c.$$scope = {
                dirty: o,
                ctx: r
            }), t.$set(c)
        },
        i(r) {
            s || (_(e.$$.fragment, r), _(t.$$.fragment, r), s = !0)
        },
        o(r) {
            E(e.$$.fragment, r), E(t.$$.fragment, r), s = !1
        },
        d(r) {
            V(e, r), r && d(n), V(t, r), r && d(i)
        }
    }
}

function oi(l) {
    let e, n;
    return e = new Oe({
        props: {
            $$slots: {
                default: [gc]
            },
            $$scope: {
                ctx: l
            }
        }
    }), {
        c() {
            O(e.$$.fragment)
        },
        l(t) {
            q(e.$$.fragment, t)
        },
        m(t, i) {
            j(e, t, i), n = !0
        },
        p(t, i) {
            const s = {};
            i[0] & 32 | i[1] & 524288 && (s.$$scope = {
                dirty: i,
                ctx: t
            }), e.$set(s)
        },
        i(t) {
            n || (_(e.$$.fragment, t), n = !0)
        },
        o(t) {
            E(e.$$.fragment, t), n = !1
        },
        d(t) {
            V(e, t)
        }
    }
}

function ai(l) {
    let e, n, t = l[5].crypto,
        i = [];
    for (let r = 0; r < t.length; r += 1) i[r] = fi($n(l, t, r));
    const s = r => E(i[r], 1, 1, () => {
        i[r] = null
    });
    return {
        c() {
            for (let r = 0; r < i.length; r += 1) i[r].c();
            e = re()
        },
        l(r) {
            for (let o = 0; o < i.length; o += 1) i[o].l(r);
            e = re()
        },
        m(r, o) {
            for (let a = 0; a < i.length; a += 1) i[a] && i[a].m(r, o);
            k(r, e, o), n = !0
        },
        p(r, o) {
            if (o[0] & 8224) {
                t = r[5].crypto;
                let a;
                for (a = 0; a < t.length; a += 1) {
                    const c = $n(r, t, a);
                    i[a] ? (i[a].p(c, o), _(i[a], 1)) : (i[a] = fi(c), i[a].c(), _(i[a], 1), i[a].m(e.parentNode, e))
                }
                for (ne(), a = t.length; a < i.length; a += 1) s(a);
                ie()
            }
        },
        i(r) {
            if (!n) {
                for (let o = 0; o < t.length; o += 1) _(i[o]);
                n = !0
            }
        },
        o(r) {
            i = i.filter(Boolean);
            for (let o = 0; o < i.length; o += 1) E(i[o]);
            n = !1
        },
        d(r) {
            De(i, r), r && d(e)
        }
    }
}

function ci(l) {
    let e, n;
    return e = new Oe({
        props: {
            $$slots: {
                default: [vc]
            },
            $$scope: {
                ctx: l
            }
        }
    }), {
        c() {
            O(e.$$.fragment)
        },
        l(t) {
            q(e.$$.fragment, t)
        },
        m(t, i) {
            j(e, t, i), n = !0
        },
        p(t, i) {
            const s = {};
            i[0] & 32 | i[1] & 524288 && (s.$$scope = {
                dirty: i,
                ctx: t
            }), e.$set(s)
        },
        i(t) {
            n || (_(e.$$.fragment, t), n = !0)
        },
        o(t) {
            E(e.$$.fragment, t), n = !1
        },
        d(t) {
            V(e, t)
        }
    }
}

function _c(l) {
    let e, n, t, i, s;
    var r = Ge(l[29].type).icon;

    function o(c) {
        return {
            props: {
                class: "w-9 h-9 hover:scale-105 transition-all duration-200 ease-in-out",
                style: "filter: drop-shadow(0 0 0.2rem " + (c[5].socialhex ? c[5].socialhex.split(";")[0] : "white") + "); fill: " + (c[5].socialhex ? c[5].socialhex.split(";")[0] : "white")
            }
        }
    }
    r && (n = ve(r, o(l)));

    function a() {
        return l[17](l[29])
    }
    return {
        c() {
            e = w("span"), n && O(n.$$.fragment)
        },
        l(c) {
            e = $(c, "SPAN", {});
            var h = A(e);
            n && q(n.$$.fragment, h), h.forEach(d)
        },
        m(c, h) {
            k(c, e, h), n && j(n, e, null), t = !0, i || (s = lt(e, "click", a), i = !0)
        },
        p(c, h) {
            l = c;
            const u = {};
            if (h[0] & 32 && (u.style = "filter: drop-shadow(0 0 0.2rem " + (l[5].socialhex ? l[5].socialhex.split(";")[0] : "white") + "); fill: " + (l[5].socialhex ? l[5].socialhex.split(";")[0] : "white")), h[0] & 32 && r !== (r = Ge(l[29].type).icon)) {
                if (n) {
                    ne();
                    const f = n;
                    E(f.$$.fragment, 1, 0, () => {
                        V(f, 1)
                    }), ie()
                }
                r ? (n = ve(r, o(l)), O(n.$$.fragment), _(n.$$.fragment, 1), j(n, e, null)) : n = null
            } else r && n.$set(u)
        },
        i(c) {
            t || (n && _(n.$$.fragment, c), t = !0)
        },
        o(c) {
            n && E(n.$$.fragment, c), t = !1
        },
        d(c) {
            c && d(e), n && V(n), i = !1, s()
        }
    }
}

function bc(l) {
    let e, n = l[29].address + "",
        t;
    return {
        c() {
            e = w("p"), t = J(n)
        },
        l(i) {
            e = $(i, "P", {});
            var s = A(e);
            t = X(s, n), s.forEach(d)
        },
        m(i, s) {
            k(i, e, s), b(e, t)
        },
        p(i, s) {
            s[0] & 32 && n !== (n = i[29].address + "") && fe(t, n)
        },
        d(i) {
            i && d(e)
        }
    }
}

function vc(l) {
    let e, n, t, i, s;
    return e = new je({
        props: {
            $$slots: {
                default: [_c]
            },
            $$scope: {
                ctx: l
            }
        }
    }), t = new Ve({
        props: {
            $$slots: {
                default: [bc]
            },
            $$scope: {
                ctx: l
            }
        }
    }), {
        c() {
            O(e.$$.fragment), n = D(), O(t.$$.fragment), i = D()
        },
        l(r) {
            q(e.$$.fragment, r), n = T(r), q(t.$$.fragment, r), i = T(r)
        },
        m(r, o) {
            j(e, r, o), k(r, n, o), j(t, r, o), k(r, i, o), s = !0
        },
        p(r, o) {
            const a = {};
            o[0] & 32 | o[1] & 524288 && (a.$$scope = {
                dirty: o,
                ctx: r
            }), e.$set(a);
            const c = {};
            o[0] & 32 | o[1] & 524288 && (c.$$scope = {
                dirty: o,
                ctx: r
            }), t.$set(c)
        },
        i(r) {
            s || (_(e.$$.fragment, r), _(t.$$.fragment, r), s = !0)
        },
        o(r) {
            E(e.$$.fragment, r), E(t.$$.fragment, r), s = !1
        },
        d(r) {
            V(e, r), r && d(n), V(t, r), r && d(i)
        }
    }
}

function fi(l) {
    let e = Ge(l[29].type),
        n, t, i = e && ci(l);
    return {
        c() {
            i && i.c(), n = re()
        },
        l(s) {
            i && i.l(s), n = re()
        },
        m(s, r) {
            i && i.m(s, r), k(s, n, r), t = !0
        },
        p(s, r) {
            r[0] & 32 && (e = Ge(s[29].type)), e ? i ? (i.p(s, r), r[0] & 32 && _(i, 1)) : (i = ci(s), i.c(), _(i, 1), i.m(n.parentNode, n)) : i && (ne(), E(i, 1, 1, () => {
                i = null
            }), ie())
        },
        i(s) {
            t || (_(i), t = !0)
        },
        o(s) {
            E(i), t = !1
        },
        d(s) {
            i && i.d(s), s && d(n)
        }
    }
}

function ui(l) {
    let e, n;
    return {
        c() {
            e = w("iframe"), this.h()
        },
        l(t) {
            e = $(t, "IFRAME", {
                style: !0,
                class: !0,
                src: !0,
                frameborder: !0,
                allow: !0,
                loading: !0
            }), A(e).forEach(d), this.h()
        },
        h() {
            Y(e, "border-radius", "12px"), g(e, "class", "w-[100%] h-[80px] overflow-hidden md:w-[50%]"), ue(e.src, n = "https://open.spotify.com/embed/track/" + ((l[5].spotify ?? "").split("/track/")[1] ?? ["a"][1].split("?")[0]) + "?utm_source=generator") || g(e, "src", n), g(e, "frameborder", "0"), e.allowFullscreen = "", g(e, "allow", "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"), g(e, "loading", "lazy")
        },
        m(t, i) {
            k(t, e, i)
        },
        p(t, i) {
            i[0] & 32 && !ue(e.src, n = "https://open.spotify.com/embed/track/" + ((t[5].spotify ?? "").split("/track/")[1] ?? ["a"][1].split("?")[0]) + "?utm_source=generator") && g(e, "src", n)
        },
        d(t) {
            t && d(e)
        }
    }
}

function di(l) {
    let e, n, t, i, s, r, o, a = l[1].data.discord_user.username + "",
        c, h, u, f = (l[7] || l[1].data.discord_status) + "",
        p, m;

    function v(S, C) {
        return S[1].data.discord_user.avatar ? $c : wc
    }
    let y = v(l),
        I = y(l);

    function Q(S, C) {
        return S[1].data.discord_status === "online" ? yc : S[1].data.discord_status === "dnd" ? Ec : S[1].data.discord_status === "idle" ? Ac : kc
    }
    let ee = Q(l),
        L = ee(l),
        x = l[2] && hi(l);
    return {
        c() {
            e = w("div"), n = w("div"), t = w("div"), I.c(), i = D(), L.c(), s = D(), r = w("div"), o = w("div"), c = J(a), h = D(), u = w("div"), p = J(f), m = D(), x && x.c(), this.h()
        },
        l(S) {
            e = $(S, "DIV", {
                class: !0,
                style: !0
            });
            var C = A(e);
            n = $(C, "DIV", {
                class: !0
            });
            var F = A(n);
            t = $(F, "DIV", {
                class: !0
            });
            var U = A(t);
            I.l(U), i = T(U), L.l(U), U.forEach(d), s = T(F), r = $(F, "DIV", {
                class: !0
            });
            var N = A(r);
            o = $(N, "DIV", {
                class: !0
            });
            var Z = A(o);
            c = X(Z, a), Z.forEach(d), h = T(N), u = $(N, "DIV", {
                class: !0
            });
            var te = A(u);
            p = X(te, f), te.forEach(d), N.forEach(d), F.forEach(d), m = T(C), x && x.l(C), C.forEach(d), this.h()
        },
        h() {
            g(t, "class", "flex justify-center items-center relative rounded-full"), g(o, "class", "text-white font-semibold"), g(u, "class", "text-white"), g(r, "class", "flex flex-col"), g(n, "class", "flex flex-row space-x-4"), g(e, "class", "min-h-fit min-w-fit rounded-3xl p-4 flex flex-col space-x-0 sm:space-x-8 sm:space-y-0 space-y-4 items-center justify-center gap-5"), Y(e, "background", "rgba(0,0,0," + l[5].opacity / 100 + ")"), Y(e, "backdrop-filter", "blur(" + l[5].cardblur / 2.5 + "px)"), Y(e, "-webkit-backdrop-filter", "blur(" + l[5].cardblur / 2.5 + "px)")
        },
        m(S, C) {
            k(S, e, C), b(e, n), b(n, t), I.m(t, null), b(t, i), L.m(t, null), b(n, s), b(n, r), b(r, o), b(o, c), b(r, h), b(r, u), b(u, p), b(e, m), x && x.m(e, null)
        },
        p(S, C) {
            y === (y = v(S)) && I ? I.p(S, C) : (I.d(1), I = y(S), I && (I.c(), I.m(t, i))), ee !== (ee = Q(S)) && (L.d(1), L = ee(S), L && (L.c(), L.m(t, null))), C[0] & 2 && a !== (a = S[1].data.discord_user.username + "") && fe(c, a), C[0] & 130 && f !== (f = (S[7] || S[1].data.discord_status) + "") && fe(p, f), S[2] ? x ? x.p(S, C) : (x = hi(S), x.c(), x.m(e, null)) : x && (x.d(1), x = null), C[0] & 32 && Y(e, "background", "rgba(0,0,0," + S[5].opacity / 100 + ")"), C[0] & 32 && Y(e, "backdrop-filter", "blur(" + S[5].cardblur / 2.5 + "px)"), C[0] & 32 && Y(e, "-webkit-backdrop-filter", "blur(" + S[5].cardblur / 2.5 + "px)")
        },
        d(S) {
            S && d(e), I.d(), L.d(), x && x.d()
        }
    }
}

function wc(l) {
    let e, n;
    return {
        c() {
            e = w("img"), this.h()
        },
        l(t) {
            e = $(t, "IMG", {
                src: !0,
                alt: !0,
                class: !0
            }), this.h()
        },
        h() {
            ue(e.src, n = "https://cdn.discordapp.com/embed/avatars/" + l[1].data.discord_user.discriminator % 5 + ".png") || g(e, "src", n), g(e, "alt", "Avatar"), g(e, "class", "rounded-full h-12 w-12")
        },
        m(t, i) {
            k(t, e, i)
        },
        p(t, i) {
            i[0] & 2 && !ue(e.src, n = "https://cdn.discordapp.com/embed/avatars/" + t[1].data.discord_user.discriminator % 5 + ".png") && g(e, "src", n)
        },
        d(t) {
            t && d(e)
        }
    }
}

function $c(l) {
    let e, n;
    return {
        c() {
            e = w("img"), this.h()
        },
        l(t) {
            e = $(t, "IMG", {
                src: !0,
                alt: !0,
                class: !0
            }), this.h()
        },
        h() {
            ue(e.src, n = l[1].data.discord_user.avatar) || g(e, "src", n), g(e, "alt", "Avatar"), g(e, "class", "rounded-full h-12 w-12")
        },
        m(t, i) {
            k(t, e, i)
        },
        p(t, i) {
            i[0] & 2 && !ue(e.src, n = t[1].data.discord_user.avatar) && g(e, "src", n)
        },
        d(t) {
            t && d(e)
        }
    }
}

function kc(l) {
    let e;
    return {
        c() {
            e = w("span"), this.h()
        },
        l(n) {
            e = $(n, "SPAN", {
                class: !0
            }), A(e).forEach(d), this.h()
        },
        h() {
            g(e, "class", "w-4 h-4 bg-zinc-900 absolute bottom-0 right-0 rounded-full")
        },
        m(n, t) {
            k(n, e, t)
        },
        d(n) {
            n && d(e)
        }
    }
}

function Ac(l) {
    let e;
    return {
        c() {
            e = w("span"), this.h()
        },
        l(n) {
            e = $(n, "SPAN", {
                class: !0
            }), A(e).forEach(d), this.h()
        },
        h() {
            g(e, "class", "w-4 h-4 bg-yellow-300 absolute bottom-0 right-0 rounded-full")
        },
        m(n, t) {
            k(n, e, t)
        },
        d(n) {
            n && d(e)
        }
    }
}

function Ec(l) {
    let e;
    return {
        c() {
            e = w("span"), this.h()
        },
        l(n) {
            e = $(n, "SPAN", {
                class: !0
            }), A(e).forEach(d), this.h()
        },
        h() {
            g(e, "class", "w-4 h-4 bg-red-500 absolute bottom-0 right-0 rounded-full")
        },
        m(n, t) {
            k(n, e, t)
        },
        d(n) {
            n && d(e)
        }
    }
}

function yc(l) {
    let e;
    return {
        c() {
            e = w("span"), this.h()
        },
        l(n) {
            e = $(n, "SPAN", {
                class: !0
            }), A(e).forEach(d), this.h()
        },
        h() {
            g(e, "class", "w-4 h-4 bg-green-500 absolute bottom-0 right-0 rounded-full")
        },
        m(n, t) {
            k(n, e, t)
        },
        d(n) {
            n && d(e)
        }
    }
}

function hi(l) {
    let e, n, t, i, s, r = l[2].assets.largeImage && pi(l);

    function o(u, f) {
        return u[2].type === "LISTENING" ? Cc : xc
    }
    let a = o(l),
        c = a(l),
        h = l[2].type === "LISTENING" && mi(l);
    return {
        c() {
            e = w("div"), n = w("div"), r && r.c(), t = D(), i = w("div"), c.c(), s = D(), h && h.c(), this.h()
        },
        l(u) {
            e = $(u, "DIV", {
                class: !0,
                style: !0
            });
            var f = A(e);
            n = $(f, "DIV", {
                class: !0
            });
            var p = A(n);
            r && r.l(p), p.forEach(d), t = T(f), i = $(f, "DIV", {
                class: !0
            });
            var m = A(i);
            c.l(m), m.forEach(d), s = T(f), h && h.l(f), f.forEach(d), this.h()
        },
        h() {
            g(n, "class", "flex flex-col items-center justify-center"), g(i, "class", "text-white flex flex-col justify-center"), g(e, "class", "rounded-2xl p-5 flex flex-row space-x-4 relative overflow-hidden max-w-lg"), Y(e, "margin", "0", 1), Y(e, "background", "rgba(0,0,0," + l[5].opacity / 100 + ")"), Y(e, "backdrop-filter", "blur(" + l[5].cardblur / 2.5 + "px)"), Y(e, "-webkit-backdrop-filter", "blur(" + l[5].cardblur / 2.5 + "px)")
        },
        m(u, f) {
            k(u, e, f), b(e, n), r && r.m(n, null), b(e, t), b(e, i), c.m(i, null), b(e, s), h && h.m(e, null)
        },
        p(u, f) {
            u[2].assets.largeImage ? r ? r.p(u, f) : (r = pi(u), r.c(), r.m(n, null)) : r && (r.d(1), r = null), a === (a = o(u)) && c ? c.p(u, f) : (c.d(1), c = a(u), c && (c.c(), c.m(i, null))), u[2].type === "LISTENING" ? h ? h.p(u, f) : (h = mi(u), h.c(), h.m(e, null)) : h && (h.d(1), h = null), f[0] & 32 && Y(e, "background", "rgba(0,0,0," + u[5].opacity / 100 + ")"), f[0] & 32 && Y(e, "backdrop-filter", "blur(" + u[5].cardblur / 2.5 + "px)"), f[0] & 32 && Y(e, "-webkit-backdrop-filter", "blur(" + u[5].cardblur / 2.5 + "px)")
        },
        d(u) {
            u && d(e), r && r.d(), c.d(), h && h.d()
        }
    }
}

function pi(l) {
    let e;

    function n(s, r) {
        return s[2].type === "LISTENING" ? Ic : Sc
    }
    let t = n(l),
        i = t(l);
    return {
        c() {
            i.c(), e = re()
        },
        l(s) {
            i.l(s), e = re()
        },
        m(s, r) {
            i.m(s, r), k(s, e, r)
        },
        p(s, r) {
            t === (t = n(s)) && i ? i.p(s, r) : (i.d(1), i = t(s), i && (i.c(), i.m(e.parentNode, e)))
        },
        d(s) {
            i.d(s), s && d(e)
        }
    }
}

function Sc(l) {
    let e, n = (l[2].type || "") + "",
        t, i, s, r;
    return {
        c() {
            e = w("span"), t = J(n), i = D(), s = w("img"), this.h()
        },
        l(o) {
            e = $(o, "SPAN", {
                class: !0
            });
            var a = A(e);
            t = X(a, n), a.forEach(d), i = T(o), s = $(o, "IMG", {
                src: !0,
                alt: !0,
                class: !0
            }), this.h()
        },
        h() {
            g(e, "class", "text-[10px]"), ue(s.src, r = "https://cdn.discordapp.com/app-assets/" + l[2].application_id + "/" + l[2].assets.largeImage + ".png") || g(s, "src", r), g(s, "alt", "Activity"), g(s, "class", "rounded h-14 w-14")
        },
        m(o, a) {
            k(o, e, a), b(e, t), k(o, i, a), k(o, s, a)
        },
        p(o, a) {
            a[0] & 4 && n !== (n = (o[2].type || "") + "") && fe(t, n), a[0] & 4 && !ue(s.src, r = "https://cdn.discordapp.com/app-assets/" + o[2].application_id + "/" + o[2].assets.largeImage + ".png") && g(s, "src", r)
        },
        d(o) {
            o && d(e), o && d(i), o && d(s)
        }
    }
}

function Ic(l) {
    let e, n = (l[2].type || "") + "",
        t, i, s, r;
    return {
        c() {
            e = w("span"), t = J(n), i = D(), s = w("img"), this.h()
        },
        l(o) {
            e = $(o, "SPAN", {
                class: !0
            });
            var a = A(e);
            t = X(a, n), a.forEach(d), i = T(o), s = $(o, "IMG", {
                src: !0,
                alt: !0,
                class: !0
            }), this.h()
        },
        h() {
            g(e, "class", "text-[10px]"), ue(s.src, r = "https://i.scdn.co/image/" + l[2].assets.largeImage.slice(8)) || g(s, "src", r), g(s, "alt", "Activity"), g(s, "class", "rounded h-14 w-14")
        },
        m(o, a) {
            k(o, e, a), b(e, t), k(o, i, a), k(o, s, a)
        },
        p(o, a) {
            a[0] & 4 && n !== (n = (o[2].type || "") + "") && fe(t, n), a[0] & 4 && !ue(s.src, r = "https://i.scdn.co/image/" + o[2].assets.largeImage.slice(8)) && g(s, "src", r)
        },
        d(o) {
            o && d(e), o && d(i), o && d(s)
        }
    }
}

function xc(l) {
    let e, n = (l[2].name || "") + "",
        t, i, s, r = (l[2].details || "") + "",
        o, a, c, h = (l[2].state || "") + "",
        u;
    return {
        c() {
            e = w("p"), t = J(n), i = D(), s = w("p"), o = J(r), a = D(), c = w("p"), u = J(h), this.h()
        },
        l(f) {
            e = $(f, "P", {
                class: !0
            });
            var p = A(e);
            t = X(p, n), p.forEach(d), i = T(f), s = $(f, "P", {});
            var m = A(s);
            o = X(m, r), m.forEach(d), a = T(f), c = $(f, "P", {});
            var v = A(c);
            u = X(v, h), v.forEach(d), this.h()
        },
        h() {
            g(e, "class", "font-semibold")
        },
        m(f, p) {
            k(f, e, p), b(e, t), k(f, i, p), k(f, s, p), b(s, o), k(f, a, p), k(f, c, p), b(c, u)
        },
        p(f, p) {
            p[0] & 4 && n !== (n = (f[2].name || "") + "") && fe(t, n), p[0] & 4 && r !== (r = (f[2].details || "") + "") && fe(o, r), p[0] & 4 && h !== (h = (f[2].state || "") + "") && fe(u, h)
        },
        d(f) {
            f && d(e), f && d(i), f && d(s), f && d(a), f && d(c)
        }
    }
}

function Cc(l) {
    let e, n, t = (l[1].data.spotify.song || "") + "",
        i, s, r, o, a, c = (l[2].state.split(";").join(", ") || "") + "",
        h;
    return {
        c() {
            e = w("p"), n = J('Listening to "'), i = J(t), s = J('"'), r = D(), o = w("p"), a = J("by "), h = J(c), this.h()
        },
        l(u) {
            e = $(u, "P", {
                class: !0
            });
            var f = A(e);
            n = X(f, 'Listening to "'), i = X(f, t), s = X(f, '"'), f.forEach(d), r = T(u), o = $(u, "P", {});
            var p = A(o);
            a = X(p, "by "), h = X(p, c), p.forEach(d), this.h()
        },
        h() {
            g(e, "class", "font-semibold")
        },
        m(u, f) {
            k(u, e, f), b(e, n), b(e, i), b(e, s), k(u, r, f), k(u, o, f), b(o, a), b(o, h)
        },
        p(u, f) {
            f[0] & 2 && t !== (t = (u[1].data.spotify.song || "") + "") && fe(i, t), f[0] & 4 && c !== (c = (u[2].state.split(";").join(", ") || "") + "") && fe(h, c)
        },
        d(u) {
            u && d(e), u && d(r), u && d(o)
        }
    }
}

function mi(l) {
    let e, n, t, i;
    return {
        c() {
            e = w("div"), n = D(), t = w("img"), this.h()
        },
        l(s) {
            e = $(s, "DIV", {
                class: !0
            }), A(e).forEach(d), n = T(s), t = $(s, "IMG", {
                src: !0,
                alt: !0,
                class: !0
            }), this.h()
        },
        h() {
            g(e, "class", "absolute w-full top-0 -left-4 h-full z-[-5] bg-gradient-to-r from-80% from-black to-[#000000ad] to-100% "), ue(t.src, i = "https://i.scdn.co/image/" + l[2].assets.largeImage.slice(8)) || g(t, "src", i), g(t, "alt", "Activity"), g(t, "class", "blur-sm absolute -bottom-0.5 -right-3 w-32 h-32 z-[-10]")
        },
        m(s, r) {
            k(s, e, r), k(s, n, r), k(s, t, r)
        },
        p(s, r) {
            r[0] & 4 && !ue(t.src, i = "https://i.scdn.co/image/" + s[2].assets.largeImage.slice(8)) && g(t, "src", i)
        },
        d(s) {
            s && d(e), s && d(n), s && d(t)
        }
    }
}

function Rc(l) {
    let e = l[26].title + "",
        n;
    return {
        c() {
            n = J(e)
        },
        l(t) {
            n = X(t, e)
        },
        m(t, i) {
            k(t, n, i)
        },
        p(t, i) {
            i[0] & 32 && e !== (e = t[26].title + "") && fe(n, e)
        },
        d(t) {
            t && d(n)
        }
    }
}

function gi(l) {
    let e, n;

    function t() {
        return l[18](l[26])
    }
    return e = new Wt({
        props: {
            class: "w-[100%] bg-[#00000070] text-white hover:text-black",
            style: "backdrop-filter: blur(20px);",
            $$slots: {
                default: [Rc]
            },
            $$scope: {
                ctx: l
            }
        }
    }), e.$on("click", t), {
        c() {
            O(e.$$.fragment)
        },
        l(i) {
            q(e.$$.fragment, i)
        },
        m(i, s) {
            j(e, i, s), n = !0
        },
        p(i, s) {
            l = i;
            const r = {};
            s[0] & 32 | s[1] & 524288 && (r.$$scope = {
                dirty: s,
                ctx: l
            }), e.$set(r)
        },
        i(i) {
            n || (_(e.$$.fragment, i), n = !0)
        },
        o(i) {
            E(e.$$.fragment, i), n = !1
        },
        d(i) {
            V(e, i)
        }
    }
}

function _i(l) {
    let e, n;
    return {
        c() {
            e = w("style"), n = J(`body {\r
		cursor: url('{profileData.cursor}'), auto !important ;\r
	}\r
	*{\r
		cursor: inherit !important;\r
	}`)
        },
        l(t) {
            e = $(t, "STYLE", {});
            var i = A(e);
            n = X(i, `body {\r
		cursor: url('{profileData.cursor}'), auto !important ;\r
	}\r
	*{\r
		cursor: inherit !important;\r
	}`), i.forEach(d)
        },
        m(t, i) {
            k(t, e, i), b(e, n)
        },
        d(t) {
            t && d(e)
        }
    }
}

function Dc(l) {
    let e, n, t, i, s, r, o, a, c, h, u, f = String(l[5].background).endsWith(".mp4"),
        p, m = l[10] || String(l[5].background).endsWith(".mp4"),
        v, y, I, Q = le(l[5].publicEffectFlags).some(Ei),
        ee, L = le(l[5].publicEffectFlags).some(Ai),
        x, S = le(l[5].publicEffectFlags).some(ki),
        C, F = le(l[5].publicEffectFlags).some($i),
        U, N = le(l[5].publicEffectFlags).some(wi),
        Z, te = le(l[5].publicEffectFlags).some(vi),
        H, z = le(l[5].publicEffectFlags).some(bi),
        de, W, B, xe, oe, P;
    We.title = c = "/" + l[5].slug;
    let G = !l[8] && yn(),
        ae = f && Sn(l),
        pe = m && In(l),
        he = l[10] && Aa(l),
        be = Q && Cn(l),
        we = L && Rn(l),
        ke = S && Dn(l),
        $e = F && Tn(l),
        Ee = N && Fn(l),
        ye = te && Ln(l),
        Se = z && Nn(l);
    const $l = [xa, Ia],
        It = [];

    function kl(M, K) {
        return M[9] === 2 ? 0 : 1
    }
    W = kl(l), B = It[W] = $l[W](l);
    let Re = l[5].cursor && _i();
    return {
        c() {
            e = w("meta"), t = w("meta"), i = w("meta"), r = w("meta"), a = w("meta"), h = D(), G && G.c(), u = D(), ae && ae.c(), p = D(), pe && pe.c(), v = D(), he && he.c(), y = D(), I = w("div"), be && be.c(), ee = D(), we && we.c(), x = D(), ke && ke.c(), C = D(), $e && $e.c(), U = D(), Ee && Ee.c(), Z = D(), ye && ye.c(), H = D(), Se && Se.c(), de = D(), B.c(), xe = D(), Re && Re.c(), oe = re(), this.h()
        },
        l(M) {
            const K = yl("svelte-e0c4o9", We.head);
            e = $(K, "META", {
                property: !0,
                content: !0
            }), t = $(K, "META", {
                property: !0,
                content: !0
            }), i = $(K, "META", {
                property: !0,
                content: !0
            }), r = $(K, "META", {
                property: !0,
                content: !0
            }), a = $(K, "META", {
                property: !0,
                content: !0
            }), K.forEach(d), h = T(M), G && G.l(M), u = T(M), ae && ae.l(M), p = T(M), pe && pe.l(M), v = T(M), he && he.l(M), y = T(M), I = $(M, "DIV", {
                class: !0,
                id: !0,
                style: !0
            });
            var Ce = A(I);
            be && be.l(Ce), ee = T(Ce), we && we.l(Ce), x = T(Ce), ke && ke.l(Ce), C = T(Ce), $e && $e.l(Ce), U = T(Ce), Ee && Ee.l(Ce), Z = T(Ce), ye && ye.l(Ce), H = T(Ce), Se && Se.l(Ce), de = T(Ce), B.l(Ce), Ce.forEach(d), xe = T(M), Re && Re.l(M), oe = re(), this.h()
        },
        h() {
            g(e, "property", "og:title"), g(e, "content", n = "/" + l[5].slug), g(t, "property", "og:description"), g(t, "content", "@ exophs"), g(i, "property", "og:image"), g(i, "content", s = l[5].avatar), g(r, "property", "og:url"), g(r, "content", o = "https://wanted.lol/" + l[5].slug), g(a, "property", "theme-color"), g(a, "content", "#2b2d31"), g(I, "class", "h-screen w-screen min-h-[100dvh] min-w-[100dvw] max-h-[100dvh] max-w-[100dvw] flex flex-col " + (l[9] === 1 ? "justify-center" : "") + " items-center"), g(I, "id", "main"), Y(I, "background-image", "url(" + l[5].background + ")"), Y(I, "background-size", "cover"), Y(I, "background-position", "center"), Y(I, "object-fit", "cover"), Y(I, "cursor", "url('" + l[5].cursor + "'), auto", 1)
        },
        m(M, K) {
            b(We.head, e), b(We.head, t), b(We.head, i), b(We.head, r), b(We.head, a), k(M, h, K), G && G.m(M, K), k(M, u, K), ae && ae.m(M, K), k(M, p, K), pe && pe.m(M, K), k(M, v, K), he && he.m(M, K), k(M, y, K), k(M, I, K), be && be.m(I, null), b(I, ee), we && we.m(I, null), b(I, x), ke && ke.m(I, null), b(I, C), $e && $e.m(I, null), b(I, U), Ee && Ee.m(I, null), b(I, Z), ye && ye.m(I, null), b(I, H), Se && Se.m(I, null), b(I, de), It[W].m(I, null), k(M, xe, K), Re && Re.m(M, K), k(M, oe, K), P = !0
        },
        p(M, K) {
            (!P || K[0] & 32 && n !== (n = "/" + M[5].slug)) && g(e, "content", n), (!P || K[0] & 32 && s !== (s = M[5].avatar)) && g(i, "content", s), (!P || K[0] & 32 && o !== (o = "https://wanted.lol/" + M[5].slug)) && g(r, "content", o), (!P || K[0] & 32) && c !== (c = "/" + M[5].slug) && (We.title = c), M[8] ? G && (ne(), E(G, 1, 1, () => {
                G = null
            }), ie()) : G ? (G.p(M, K), K[0] & 256 && _(G, 1)) : (G = yn(), G.c(), _(G, 1), G.m(u.parentNode, u)), K[0] & 32 && (f = String(M[5].background).endsWith(".mp4")), f ? ae ? ae.p(M, K) : (ae = Sn(M), ae.c(), ae.m(p.parentNode, p)) : ae && (ae.d(1), ae = null), K[0] & 32 && (m = M[10] || String(M[5].background).endsWith(".mp4")), m ? pe ? pe.p(M, K) : (pe = In(M), pe.c(), pe.m(v.parentNode, v)) : pe && (pe.d(1), pe = null), M[10] && he.p(M, K), K[0] & 32 && (Q = le(M[5].publicEffectFlags).some(Ei)), Q ? be ? (be.p(M, K), K[0] & 32 && _(be, 1)) : (be = Cn(M), be.c(), _(be, 1), be.m(I, ee)) : be && (ne(), E(be, 1, 1, () => {
                be = null
            }), ie()), K[0] & 32 && (L = le(M[5].publicEffectFlags).some(Ai)), L ? we ? (we.p(M, K), K[0] & 32 && _(we, 1)) : (we = Rn(M), we.c(), _(we, 1), we.m(I, x)) : we && (ne(), E(we, 1, 1, () => {
                we = null
            }), ie()), K[0] & 32 && (S = le(M[5].publicEffectFlags).some(ki)), S ? ke ? (ke.p(M, K), K[0] & 32 && _(ke, 1)) : (ke = Dn(M), ke.c(), _(ke, 1), ke.m(I, C)) : ke && (ne(), E(ke, 1, 1, () => {
                ke = null
            }), ie()), K[0] & 32 && (F = le(M[5].publicEffectFlags).some($i)), F ? $e ? ($e.p(M, K), K[0] & 32 && _($e, 1)) : ($e = Tn(M), $e.c(), _($e, 1), $e.m(I, U)) : $e && (ne(), E($e, 1, 1, () => {
                $e = null
            }), ie()), K[0] & 32 && (N = le(M[5].publicEffectFlags).some(wi)), N ? Ee ? (Ee.p(M, K), K[0] & 32 && _(Ee, 1)) : (Ee = Fn(M), Ee.c(), _(Ee, 1), Ee.m(I, Z)) : Ee && (ne(), E(Ee, 1, 1, () => {
                Ee = null
            }), ie()), K[0] & 32 && (te = le(M[5].publicEffectFlags).some(vi)), te ? ye ? (ye.p(M, K), K[0] & 32 && _(ye, 1)) : (ye = Ln(M), ye.c(), _(ye, 1), ye.m(I, H)) : ye && (ne(), E(ye, 1, 1, () => {
                ye = null
            }), ie()), K[0] & 32 && (z = le(M[5].publicEffectFlags).some(bi)), z ? Se ? (Se.p(M, K), K[0] & 32 && _(Se, 1)) : (Se = Nn(M), Se.c(), _(Se, 1), Se.m(I, de)) : Se && (ne(), E(Se, 1, 1, () => {
                Se = null
            }), ie()), B.p(M, K), (!P || K[0] & 32) && Y(I, "background-image", "url(" + M[5].background + ")"), (!P || K[0] & 32) && Y(I, "cursor", "url('" + M[5].cursor + "'), auto", 1), M[5].cursor ? Re || (Re = _i(), Re.c(), Re.m(oe.parentNode, oe)) : Re && (Re.d(1), Re = null)
        },
        i(M) {
            P || (_(G), _(he), _(be), _(we), _(ke), _($e), _(Ee), _(ye), _(Se), _(B), P = !0)
        },
        o(M) {
            E(G), E(he), E(be), E(we), E(ke), E($e), E(Ee), E(ye), E(Se), E(B), P = !1
        },
        d(M) {
            d(e), d(t), d(i), d(r), d(a), M && d(h), G && G.d(M), M && d(u), ae && ae.d(M), M && d(p), pe && pe.d(M), M && d(v), he && he.d(M), M && d(y), M && d(I), be && be.d(), we && we.d(), ke && ke.d(), $e && $e.d(), Ee && Ee.d(), ye && ye.d(), Se && Se.d(), It[W].d(), M && d(xe), Re && Re.d(M), M && d(oe)
        }
    }
}
const Tc = l => l.flag === 10,
    Fc = l => l.flag === 10,
    bi = l => l.flag === 27,
    vi = l => l.flag === 26,
    wi = l => l.flag === 25,
    $i = l => l.flag === 24,
    ki = l => l.flag === 23,
    Ai = l => l.flag === 22,
    Ei = l => l.flag === 0,
    yi = l => l.flag === 0,
    Si = l => l.flag === 22,
    Ii = l => l.flag === 23,
    xi = l => l.flag === 24,
    Ci = l => l.flag === 25,
    Ri = l => l.flag === 26,
    Di = l => l.flag === 27,
    Ti = l => l.flag === 1,
    Fi = l => l.flag === 20,
    Li = l => l.flag === 21,
    Ni = l => l.flag === 10,
    Pi = l => l.flag === 1,
    Mi = l => l.flag === 20,
    Bi = l => l.flag === 21,
    Oi = l => l.flag === 10;

function Lc(l, e, n) {
    let t;
    zt(l, Tl, H => n(21, t = H));
    let {
        data: i
    } = e, s, r, o = !1, a = [];
    const c = i.props.profileData,
        h = i.props.pageLayout;
    c.displayed = Number(c.displayed) === -1 ? c.badgeFlags : c.displayed;
    const u = Rl(c.displayed, i.props.badges),
        f = i.props.effects;
    console.log(f);
    let p = c.music,
        m;
    const v = async H => {
        const {
            data: z
        } = await Vo.get(`https://wanted.lol/p/user/${H}`);
        return console.log("x", z), z
    };
    let y = "";
    const I = () => {
        const H = document.getElementById("entry");
        H.addEventListener("transitionend", () => {
            if (H.remove(), String(c.background).endsWith(".mp4")) {
                var z = document.getElementById("bg-video");
                z ? z.play() : console.error('Element with ID "bg-video" not found.')
            } else n(6, m = new Audio(p)), n(6, m.volume = .25, m), n(6, m.loop = !0, m), m.addEventListener("canplaythrough", () => {
                m.play(), n(3, o = !0)
            }), m.load()
        }), H.style.transitionDuration = "1s", H.style.opacity = "0"
    };
    let Q = !1;
    Hi(async () => {
        for (const H of c.ebadges) H.startsWith("[]12") || u.push({
            flag: 22,
            url: H,
            name: "",
            description: ""
        });
        if (n(4, a = Array.from({
                length: Math.ceil(u.length / 10)
            }, (H, z) => u.slice(z * 10, z * 10 + 10))), console.log("don't be silly", a, u), ee(S), c.fonturl !== "" && c.premium) {
            console.log("fontxd");
            const H = document.createElement("link");
            H.rel = "stylesheet", H.href = c.fonturl, document.head.appendChild(H), console.log(document.head);
            const z = document.createElement("style");
            z.innerHTML = `
        * {
            font-family: ${c.font} !important;
        }
    `, document.head.appendChild(z), console.log(document.body.style.fontFamily)
        }
        if (c.cursor != "" && c.cursor, console.log(c, "2"), console.log(c.pagetitle), document.title = c.pagetitle != "" ? c.pagetitle ?? `/${c.slug}` : "/" + c.slug, c.animate) {
            let H = (c.pagetitle != "" ? c.pagetitle : "/" + c.slug).length,
                z = 1,
                de = !1;
            setInterval(() => {
                document.title = (c.pagetitle != "" ? c.pagetitle : "/" + c.slug).slice(0, z), console.log(z), z === H && (de = !0), de && z === 1 && (de = !1), de ? z -= 1 : z += 1
            }, 500)
        }
        n(8, Q = !0), n(1, s = await v(c.discord)), console.log(c, s);
        for (const H of s.data.activities) H.type === "CUSTOM" && n(7, y = H.state);
        n(1, s.data.activities = s.data.activities.filter(H => H.type !== "CUSTOM"), s), n(2, r = s.data.activities.find(H => H.type === "LISTENING") || s.data.activities[0] || null)
    });
    const ee = H => {
            const z = [{
                flag: 13,
                function: qo
            }, {
                flag: 14,
                function: Ho
            }, {
                flag: 15,
                function: Wo
            }, {
                flag: 16,
                function: Go
            }, {
                flag: 17,
                function: Yo
            }, {
                flag: 18,
                function: Uo
            }, {
                flag: 19,
                function: zo
            }];
            for (let de of z)
                for (let W of H) de.flag === W.flag && new de.function
        },
        L = (H, z) => {
            const de = [2, 3, 4, 5, 6, 7, 8, 9, 11],
                W = new Set(z.map(B => B.flag));
            if (W.has(11)) return "rgb";
            for (let B of de)
                if (W.has(B)) return `glow-${B}`;
            return ""
        };

    function x(H) {
        navigator.clipboard.writeText(H).then(() => {
            t.success("Address copied to clipboard", {
                style: "background: rgba(0, 0, 0, 0.44); backdrop-filter: blur(20px);border: 1px solid #713200; padding: 16px; color: #fff;",
                position: "top-center"
            })
        }).catch(z => {
            t.error("Failed to copy address to clipboard")
        })
    }
    const S = ks(c.publicEffectFlags, f);
    console.log(S, "@a");
    const C = () => I(),
        F = () => {
            o ? n(6, m.volume = 0, m) : n(6, m.volume = .25, m), n(3, o = !o)
        },
        U = H => x(H.address),
        N = H => {
            window.open('/')
        },
        Z = H => x(H.address),
        te = H => {
            window.open('/')
        };
    return l.$$set = H => {
        "data" in H && n(0, i = H.data)
    }, [i, s, r, o, a, c, m, y, Q, h, p, I, L, x, S, C, F, U, N, Z, te]
}
class Jc extends me {
    constructor(e) {
        super(), ge(this, e, Lc, Dc, _e, {
            data: 0
        }, null, [-1, -1])
    }
}
export {
    Jc as component
};