import {
    S as l,
    i,
    s as r,
    C as u,
    D as f,
    E as c,
    F as p,
    g as _,
    d as m,
    o as d
} from "../chunks/index.eaa2c7e1.js";
import "../chunks/supabase.bf996505.js";
import "../chunks/paths.8879dda4.js";
new TextEncoder;

function $(n) {
    let s;
    const a = n[1].default,
        e = u(a, n, n[0], null);
    return {
        c() {
            e && e.c()
        },
        l(t) {
            e && e.l(t)
        },
        m(t, o) {
            e && e.m(t, o), s = !0
        },
        p(t, [o]) {
            e && e.p && (!s || o & 1) && f(e, a, t, t[0], s ? p(a, t[0], o, null) : c(t[0]), null)
        },
        i(t) {
            s || (_(e, t), s = !0)
        },
        o(t) {
            m(e, t), s = !1
        },
        d(t) {
            e && e.d(t)
        }
    }
}

function g(n, s, a) {
    let {
        $$slots: e = {},
        $$scope: t
    } = s;
    return d(() => {}), n.$$set = o => {
        "$$scope" in o && a(0, t = o.$$scope)
    }, [t, e]
}
class S extends l {
    constructor(s) {
        super(), i(this, s, g, $, r, {})
    }
}
export {
    S as component
};