import {
    S as pe,
    A as ve,
    C as me,
    D as ge,
    E as g,
    G as z,
    H as p,
    I as A,
    J as c,
    K,
    L as y,
    M as ae,
    N as T,
    O as ie,
    P as S,
    Q as ne,
    R as ye,
    U as Ce,
    V as ee,
    W as In,
    X as F,
    Y as O,
    Z as G,
    $ as De,
    a0 as Z,
    a1 as ue,
    a2 as Ae,
    a3 as He,
    a4 as $n,
    a5 as We,
    a6 as L,
    a7 as he,
    a8 as be,
    a9 as q,
    aa as _e,
    ab as ce,
    ac as Bn,
    ad as fe,
    ae as we,
    af as Tn,
    ag as Dn,
    ah as V,
    ai as Te,
    aj as Ne,
    ak as Ee,
    al as Fe,
    am as ke,
    an as Mn,
    ao as Wn,
    ap as Nn,
    aq as je,
    ar as ze,
    as as An,
    at as En,
    au as Fn,
    av as On,
    aw as Sn,
    ax as Gn,
    ay as de,
    az as Pe,
    aA as $e,
    aB as Zn,
    aC as Ve,
    aD as Rn,
    aE as Un,
    aF as Pn,
    aG as Ln,
    aH as Jn,
    aI as Kn,
    aJ as Oe,
    aK as Qn,
    aL as Ge,
    aM as Xn,
    aN as Ze,
    aO as Le,
    aP as Re,
    aQ as Yn,
    aR as qe,
    aS as Ue,
    aT as xn,
    aU as et,
    aV as Je,
    aW as nt
} from "./index.80e3cc9b.js";
import {
    m as tt
} from "./merge.e9cc83a6.js";
import {
    s as ot,
    d as lt
} from "./skip.4d2d1681.js";
var qn = '<svg width="100%" height="24" viewBox="0 5 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 10L12 15L17 10H7Z" fill="currentColor"/></svg>',
    Se = `
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 21H23L12 2L1 21ZM13 18H11V16H13V18ZM13 14H11V10H13V14Z" fill="currentColor"/>
  </svg>
`;

function rt(e) {
    ge(e, "svelte-1uqued6", "select.svelte-1uqued6{border:none;background-image:none;background-color:transparent;-webkit-appearance:none;-webkit-box-shadow:none;-moz-box-shadow:none;box-shadow:none;appearance:none;font-size:var(--onboard-font-size-7, var(--font-size-7));line-height:var(--onboard-font-line-height-3, var(--font-line-height-3));transition:width 250ms ease-in-out;background-repeat:no-repeat, repeat;background-position:right 0px top 0px, 0 0;scrollbar-width:none;-ms-overflow-style:none;padding:0 14px 0 0;white-space:nowrap;text-overflow:ellipsis}select.minimized_ac.svelte-1uqued6{min-width:80px;max-width:80px}select.maximized_ac.svelte-1uqued6{width:auto !important}select.svelte-1uqued6:focus{outline:none}span.switching-placeholder.svelte-1uqued6{font-size:var(--onboard-font-size-7, var(--font-size-7));line-height:var(--onboard-font-line-height-3, var(--font-line-height-3));min-width:80px;max-width:80px;padding:0 8px 0 4px}")
}

function Ke(e, n, t) {
    const o = e.slice();
    return o[15] = n[t], o
}

function Qe(e) {
    let n;

    function t(r, i) {
        return r[7] ? it : at
    }
    let o = t(e),
        l = o(e);
    return {
        c() {
            l.c(), n = ue()
        },
        m(r, i) {
            l.m(r, i), A(r, n, i)
        },
        p(r, i) {
            o === (o = t(r)) && l ? l.p(r, i) : (l.d(1), l = o(r), l && (l.c(), l.m(n.parentNode, n)))
        },
        d(r) {
            l.d(r), r && S(n)
        }
    }
}

function at(e) {
    let n, t = !Ze(e[6].chains[0], e[2]),
        o, l = [],
        r = new Map,
        i, s, a, f, u, v = t && Xe(e),
        k = e[2];
    const h = b => b[15].id;
    for (let b = 0; b < k.length; b += 1) {
        let m = Ke(e, k, b),
            d = h(m);
        r.set(d, l[b] = Ye(d, m))
    }
    return {
        c() {
            n = g("select"), v && v.c(), o = ue();
            for (let b = 0; b < l.length; b += 1) l[b].c();
            p(n, "class", i = Le(`flex justify-center items-center pointer ${e[4]}`) + " svelte-1uqued6"), p(n, "style", a = `
        color: var(${e[1]},
        var(--account-center-network-selector-color, var(--gray-500)));
        background-image: url('data:image/svg+xml;utf8,${e[0]}'); ${e[3]?"font-weight: 600;":""}`)
        },
        m(b, m) {
            A(b, n, m), v && v.m(n, null), c(n, o);
            for (let d = 0; d < l.length; d += 1) l[d] && l[d].m(n, null);
            Re(n, e[6].chains[0].id), e[13](n), f || (u = K(n, "change", e[10]), f = !0)
        },
        p(b, m) {
            m & 68 && (t = !Ze(b[6].chains[0], b[2])), t ? v ? v.p(b, m) : (v = Xe(b), v.c(), v.m(n, o)) : v && (v.d(1), v = null), m & 4 && (k = b[2], l = Tn(l, m, h, 1, b, k, r, n, Yn, Ye, null, Ke)), m & 16 && i !== (i = Le(`flex justify-center items-center pointer ${b[4]}`) + " svelte-1uqued6") && p(n, "class", i), m & 64 && s !== (s = b[6].chains[0].id) && Re(n, b[6].chains[0].id), m & 11 && a !== (a = `
        color: var(${b[1]},
        var(--account-center-network-selector-color, var(--gray-500)));
        background-image: url('data:image/svg+xml;utf8,${b[0]}'); ${b[3]?"font-weight: 600;":""}`) && p(n, "style", a)
        },
        d(b) {
            b && S(n), v && v.d();
            for (let m = 0; m < l.length; m += 1) l[m].d();
            e[13](null), f = !1, u()
        }
    }
}

function it(e) {
    let n, t, o, l;
    return {
        c() {
            n = g("span"), t = q("switching..."), p(n, "class", o = Le(`switching-placeholder ${e[4]}`) + " svelte-1uqued6"), p(n, "style", l = `
        color: var(${e[1]},
        var(--account-center-network-selector-color, var(--gray-500)));
      `)
        },
        m(r, i) {
            A(r, n, i), c(n, t)
        },
        p(r, i) {
            i & 16 && o !== (o = Le(`switching-placeholder ${r[4]}`) + " svelte-1uqued6") && p(n, "class", o), i & 2 && l !== (l = `
        color: var(${r[1]},
        var(--account-center-network-selector-color, var(--gray-500)));
      `) && p(n, "style", l)
        },
        d(r) {
            r && S(n)
        }
    }
}

function Xe(e) {
    let n, t = (qe[e[6].chains[0].id] || "unrecognized") + "",
        o, l;
    return {
        c() {
            n = g("option"), o = q(t), n.__value = l = e[6].chains[0].id, n.value = n.__value
        },
        m(r, i) {
            A(r, n, i), c(n, o)
        },
        p(r, i) {
            i & 64 && t !== (t = (qe[r[6].chains[0].id] || "unrecognized") + "") && V(o, t), i & 64 && l !== (l = r[6].chains[0].id) && (n.__value = l, n.value = n.__value)
        },
        d(r) {
            r && S(n)
        }
    }
}

function Ye(e, n) {
    let t, o = (n[15].label || qe[n[15].id] || n[15].id) + "",
        l, r;
    return {
        key: e,
        first: null,
        c() {
            t = g("option"), l = q(o), t.__value = r = n[15].id, t.value = t.__value, this.first = t
        },
        m(i, s) {
            A(i, t, s), c(t, l)
        },
        p(i, s) {
            n = i, s & 4 && o !== (o = (n[15].label || qe[n[15].id] || n[15].id) + "") && V(l, o), s & 4 && r !== (r = n[15].id) && (t.__value = r, t.value = t.__value)
        },
        d(i) {
            i && S(t)
        }
    }
}

function st(e) {
    let n, t = e[6] && Qe(e);
    return {
        c() {
            t && t.c(), n = ue()
        },
        m(o, l) {
            t && t.m(o, l), A(o, n, l)
        },
        p(o, [l]) {
            o[6] ? t ? t.p(o, l) : (t = Qe(o), t.c(), t.m(n.parentNode, n)) : t && (t.d(1), t = null)
        },
        i: Z,
        o: Z,
        d(o) {
            t && t.d(o), o && S(n)
        }
    }
}

function ct(e, n, t) {
    let o, l, r, i;
    ee(e, Ae, w => t(12, r = w));
    let {
        selectIcon: s = qn
    } = n, {
        colorVar: a
    } = n, {
        chains: f
    } = n, {
        bold: u = !1
    } = n, {
        parentCSSId: v = ""
    } = n;
    const k = new Rn(!1);
    ee(e, k, w => t(7, i = w));
    let h;
    const b = tt(Ae, k.pipe(ot(1))).pipe(lt(50), Un((w, C) => typeof w == "boolean" || typeof C == "boolean" ? !1 : w[0] && C[0] && w[0].chains[0].id === C[0].chains[0].id));
    ee(e, b, w => t(11, l = w));
    async function m() {
        const w = h.selectedOptions[0].value;
        w !== o.chains[0].id && (k.next(!0), await Jn({
            chainId: w,
            chainNamespace: "evm",
            wallet: o.label
        }), k.next(!1))
    }

    function d() {
        if (!h) return;
        let w = document.createElement("option");
        w.textContent = h.selectedOptions[0].textContent;
        let C = document.createElement("select");
        C.style.visibility = "hidden", C.style.position = "fixed", C.appendChild(w), h.after(C), t(5, h.style.width = `${C.clientWidth-22}px`, h), C.remove()
    }

    function _(w) {
        Mn[w ? "unshift" : "push"](() => {
            h = w, t(5, h), t(2, f), t(6, o), t(12, r)
        })
    }
    return e.$$set = w => {
        "selectIcon" in w && t(0, s = w.selectIcon), "colorVar" in w && t(1, a = w.colorVar), "chains" in w && t(2, f = w.chains), "bold" in w && t(3, u = w.bold), "parentCSSId" in w && t(4, v = w.parentCSSId)
    }, e.$$.update = () => {
        e.$$.dirty & 4096 && t(6, [o] = r, o), e.$$.dirty & 2048 && l && d()
    }, [s, a, f, u, v, h, o, i, k, b, m, l, r, _]
}
class Hn extends pe {
    constructor(n) {
        super(), ve(this, n, ct, st, me, {
            selectIcon: 0,
            colorVar: 1,
            chains: 2,
            bold: 3,
            parentCSSId: 4
        }, rt)
    }
}
var dt = `
  <svg width="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 8C13.1 8 14 7.1 14 6C14 4.9 13.1 4 12 4C10.9 4 10 4.9 10 6C10 7.1 10.9 8 12 8ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10ZM12 16C10.9 16 10 16.9 10 18C10 19.1 10.9 20 12 20C13.1 20 14 19.1 14 18C14 16.9 13.1 16 12 16Z" fill="currentColor"/>
  </svg>
`;

function ut(e) {
    ge(e, "svelte-hb2n95", `.container.svelte-hb2n95.svelte-hb2n95{display:flex;align-items:center;gap:0.5rem;cursor:pointer;position:relative;z-index:0;width:100%;padding:0.25rem;margin-bottom:0.25rem;border-radius:12px;transition:background-color 150ms ease-in-out}.container.svelte-hb2n95.svelte-hb2n95::before{content:'';display:block;position:absolute;top:0;bottom:0;left:0;right:0;height:100%;width:100%;background:var(--action-color);border-radius:12px;z-index:-1;opacity:0}.container.svelte-hb2n95.svelte-hb2n95:hover::before{opacity:0.2}.container.svelte-hb2n95:hover .balance.svelte-hb2n95,.container.svelte-hb2n95:hover .elipsis-container.svelte-hb2n95{opacity:1}.container.svelte-hb2n95:hover .balance.svelte-hb2n95{color:var(--account-center-maximized-balance-color, inherit)}.container.primary.svelte-hb2n95.svelte-hb2n95:hover{background-color:var(
      --account-center-maximized-account-section-background-hover
    )}.account-details.svelte-hb2n95.svelte-hb2n95{flex:1 1;display:flex;gap:inherit;overflow:hidden}.address-domain.svelte-hb2n95.svelte-hb2n95{flex:1 0 auto;max-width:70%;white-space:nowrap;font-weight:600;color:var(--account-center-maximized-address-color, inherit);overflow:scroll;scrollbar-width:none;-ms-overflow-style:none}.address-domain.svelte-hb2n95.svelte-hb2n95::-webkit-scrollbar{display:none}.balance.svelte-hb2n95.svelte-hb2n95{flex:1 1 auto;max-width:70%;white-space:nowrap;text-align:end;opacity:0.4;transition:color 150ms ease-in-out, background-color 150ms ease-in-out;overflow:scroll;scrollbar-width:none;-ms-overflow-style:none}.balance.svelte-hb2n95.svelte-hb2n95::-webkit-scrollbar{display:none}.elipsis-container.svelte-hb2n95.svelte-hb2n95{flex:0;padding:0.25rem;border-radius:24px;transition:color 150ms ease-in-out, background-color 150ms ease-in-out;background-color:transparent;opacity:0.4}.elipsis-container.svelte-hb2n95.svelte-hb2n95:hover{color:var(--text-color)}.elipsis-container.active.svelte-hb2n95.svelte-hb2n95{color:var(--text-color)}.elipsis.svelte-hb2n95.svelte-hb2n95{width:24px}.menu.svelte-hb2n95.svelte-hb2n95{background:var(--onboard-white, var(--white));border:1px solid var(--onboard-gray-100, var(--gray-100));border-radius:8px;list-style-type:none;right:0.25rem;top:2.25rem;margin:0;padding:0;border:none;overflow:hidden;z-index:1}.menu.svelte-hb2n95 li.svelte-hb2n95{color:var(--onboard-primary-500, var(--primary-500));font-size:var(--onboard-font-size-5, var(--font-size-5));line-height:var(--onboard-font-line-height-3, var(--font-line-height-3));padding:12px 16px;background:var(--onboard-white, var(--white));transition:background-color 150ms ease-in-out;cursor:pointer}.menu.svelte-hb2n95 li.svelte-hb2n95:hover{background:var(--onboard-primary-200, var(--primary-200))}`)
}

function xe(e, n, t) {
    const o = e.slice();
    return o[14] = n[t].address, o[15] = n[t].ens, o[16] = n[t].uns, o[17] = n[t].balance, o[19] = t, o
}

function en(e) {
    let n, t, o;
    return t = new je({
        props: {
            size: 14
        }
    }), {
        c() {
            n = g("div"), F(t.$$.fragment), _e(n, "right", "-5px"), _e(n, "bottom", "-5px"), p(n, "class", "drop-shadow absolute")
        },
        m(l, r) {
            A(l, n, r), O(t, n, null), o = !0
        },
        i(l) {
            o || (y(t.$$.fragment, l), o = !0)
        },
        o(l) {
            T(t.$$.fragment, l), o = !1
        },
        d(l) {
            l && S(n), G(t)
        }
    }
}

function nn(e) {
    let n, t = rn(e[17]) + "",
        o, l;
    return {
        c() {
            n = g("div"), o = q(t), p(n, "class", "balance svelte-hb2n95")
        },
        m(r, i) {
            A(r, n, i), c(n, o)
        },
        p(r, i) {
            i & 1 && t !== (t = rn(r[17]) + "") && V(o, t)
        },
        i(r) {
            r && (l || Te(() => {
                l = Pe(n, $e, {}), l.start()
            }))
        },
        o: Z,
        d(r) {
            r && S(n)
        }
    }
}

function tn(e) {
    let n, t, o = e[4]("accountCenter.addAccount", {
            default: e[2].accountCenter.addAccount
        }) + "",
        l, r, i, s, a = e[4]("accountCenter.disconnectWallet", {
            default: e[2].accountCenter.disconnectWallet
        }) + "",
        f, u, v, k = e[2].accountCenter.copyAddress + "",
        h, b, m, d, _ = !(e[1] && e[19] === 0) && on(e);

    function w() {
        return e[13](e[15], e[16], e[14])
    }
    return {
        c() {
            n = g("ul"), t = g("li"), l = q(o), r = z(), _ && _.c(), i = z(), s = g("li"), f = q(a), u = z(), v = g("li"), h = q(k), p(t, "class", "svelte-hb2n95"), p(s, "class", "svelte-hb2n95"), p(v, "class", "svelte-hb2n95"), p(n, "class", "menu absolute svelte-hb2n95")
        },
        m(C, $) {
            A(C, n, $), c(n, t), c(t, l), c(n, r), _ && _.m(n, null), c(n, i), c(n, s), c(s, f), c(n, u), c(n, v), c(v, h), m || (d = [K(t, "click", fe(e[10])), K(s, "click", fe(e[12])), K(v, "click", fe(w))], m = !0)
        },
        p(C, $) {
            e = C, $ & 20 && o !== (o = e[4]("accountCenter.addAccount", {
                default: e[2].accountCenter.addAccount
            }) + "") && V(l, o), e[1] && e[19] === 0 ? _ && (_.d(1), _ = null) : _ ? _.p(e, $) : (_ = on(e), _.c(), _.m(n, i)), $ & 20 && a !== (a = e[4]("accountCenter.disconnectWallet", {
                default: e[2].accountCenter.disconnectWallet
            }) + "") && V(f, a), $ & 4 && k !== (k = e[2].accountCenter.copyAddress + "") && V(h, k)
        },
        i(C) {
            C && (b || Te(() => {
                b = Pe(n, $e, {}), b.start()
            }))
        },
        o: Z,
        d(C) {
            C && S(n), _ && _.d(), m = !1, ke(d)
        }
    }
}

function on(e) {
    let n, t = e[4]("accountCenter.setPrimaryAccount", {
            default: e[2].accountCenter.setPrimaryAccount
        }) + "",
        o, l, r;

    function i() {
        return e[11](e[14])
    }
    return {
        c() {
            n = g("li"), o = q(t), p(n, "class", "svelte-hb2n95")
        },
        m(s, a) {
            A(s, n, a), c(n, o), l || (r = K(n, "click", fe(i)), l = !0)
        },
        p(s, a) {
            e = s, a & 20 && t !== (t = e[4]("accountCenter.setPrimaryAccount", {
                default: e[2].accountCenter.setPrimaryAccount
            }) + "") && V(o, t)
        },
        d(s) {
            s && S(n), l = !1, r()
        }
    }
}

function ln(e) {
    let n, t, o, l, r, i, s, a, f = (e[15] ? de(e[15].name) : e[16] ? de(e[16].name) : Ve(e[14])) + "",
        u, v, k, h, b, m, d, _, w, C;
    l = new he({
        props: {
            size: 32,
            padding: 4,
            background: "custom",
            color: "#EFF1FC",
            customBackgroundColor: e[1] && e[19] === 0 ? "rgba(24, 206, 102, 0.2)" : "rgba(235, 235, 237, 0.1)",
            border: e[1] && e[19] === 0 ? "green" : "gray",
            radius: 8,
            icon: e[0].icon
        }
    });
    let $ = e[1] && e[19] === 0 && en(),
        P = e[17] && nn(e);

    function B() {
        return e[8](e[14])
    }

    function D() {
        return e[9](e[14])
    }
    let I = e[3] === e[14] && tn(e);
    return {
        c() {
            n = g("div"), t = g("div"), o = g("div"), F(l.$$.fragment), r = z(), $ && $.c(), i = z(), s = g("div"), a = g("div"), u = q(f), v = z(), P && P.c(), k = z(), h = g("div"), b = g("div"), m = z(), I && I.c(), d = z(), p(o, "class", "flex items-center relative"), p(a, "class", "address-domain svelte-hb2n95"), p(s, "class", "account-details svelte-hb2n95"), p(b, "class", "elipsis pointer flex items-center justify-center relative svelte-hb2n95"), p(h, "class", "elipsis-container svelte-hb2n95"), ce(h, "active", e[3] === e[14]), p(t, "class", "container svelte-hb2n95"), ce(t, "primary", e[1] && e[19] === 0), p(n, "class", "relative")
        },
        m(H, W) {
            A(H, n, W), c(n, t), c(t, o), O(l, o, null), c(o, r), $ && $.m(o, null), c(t, i), c(t, s), c(s, a), c(a, u), c(s, v), P && P.m(s, null), c(t, k), c(t, h), c(h, b), b.innerHTML = dt, c(n, m), I && I.m(n, null), c(n, d), _ = !0, w || (C = [K(b, "click", fe(B)), K(t, "click", D)], w = !0)
        },
        p(H, W) {
            e = H;
            const U = {};
            W & 2 && (U.customBackgroundColor = e[1] && e[19] === 0 ? "rgba(24, 206, 102, 0.2)" : "rgba(235, 235, 237, 0.1)"), W & 2 && (U.border = e[1] && e[19] === 0 ? "green" : "gray"), W & 1 && (U.icon = e[0].icon), l.$set(U), e[1] && e[19] === 0 ? $ ? W & 2 && y($, 1) : ($ = en(), $.c(), y($, 1), $.m(o, null)) : $ && (ae(), T($, 1, 1, () => {
                $ = null
            }), ie()), (!_ || W & 1) && f !== (f = (e[15] ? de(e[15].name) : e[16] ? de(e[16].name) : Ve(e[14])) + "") && V(u, f), e[17] ? P ? (P.p(e, W), W & 1 && y(P, 1)) : (P = nn(e), P.c(), y(P, 1), P.m(s, null)) : P && (P.d(1), P = null), (!_ || W & 9) && ce(h, "active", e[3] === e[14]), (!_ || W & 2) && ce(t, "primary", e[1] && e[19] === 0), e[3] === e[14] ? I ? (I.p(e, W), W & 9 && y(I, 1)) : (I = tn(e), I.c(), y(I, 1), I.m(n, d)) : I && (I.d(1), I = null)
        },
        i(H) {
            _ || (y(l.$$.fragment, H), y($), y(P), y(I), _ = !0)
        },
        o(H) {
            T(l.$$.fragment, H), T($), _ = !1
        },
        d(H) {
            H && S(n), G(l), $ && $.d(), P && P.d(), I && I.d(), w = !1, ke(C)
        }
    }
}

function ft(e) {
    let n, t, o = e[0].accounts,
        l = [];
    for (let i = 0; i < o.length; i += 1) l[i] = ln(xe(e, o, i));
    const r = i => T(l[i], 1, 1, () => {
        l[i] = null
    });
    return {
        c() {
            for (let i = 0; i < l.length; i += 1) l[i].c();
            n = ue()
        },
        m(i, s) {
            for (let a = 0; a < l.length; a += 1) l[a] && l[a].m(i, s);
            A(i, n, s), t = !0
        },
        p(i, [s]) {
            if (s & 127) {
                o = i[0].accounts;
                let a;
                for (a = 0; a < o.length; a += 1) {
                    const f = xe(i, o, a);
                    l[a] ? (l[a].p(f, s), y(l[a], 1)) : (l[a] = ln(f), l[a].c(), y(l[a], 1), l[a].m(n.parentNode, n))
                }
                for (ae(), a = o.length; a < l.length; a += 1) r(a);
                ie()
            }
        },
        i(i) {
            if (!t) {
                for (let s = 0; s < o.length; s += 1) y(l[s]);
                t = !0
            }
        },
        o(i) {
            l = l.filter(Boolean);
            for (let s = 0; s < l.length; s += 1) T(l[s]);
            t = !1
        },
        d(i) {
            Pn(l, i), i && S(n)
        }
    }
}

function rn(e) {
    const [n] = Object.keys(e);
    return `${e[n].length>7?e[n].slice(0,7):e[n]} ${n}`
}

function pt(e, n, t) {
    let o;
    ee(e, He, d => t(4, o = d));
    let {
        wallet: l
    } = n, {
        primary: r
    } = n;

    function i() {
        t(3, s = "")
    }
    let s = "";
    async function a(d) {
        try {
            await Kn(d.provider)
        } catch (_) {
            const {
                code: w
            } = _;
            (w === Oe.UNSUPPORTED_METHOD || w === Oe.DOES_NOT_EXIST) && Qn.next({
                inProgress: !1,
                actionRequired: d.label
            })
        }
    }

    function f() {
        t(2, L.accountCenter.copyAddress = "Copied Successfully", L), setTimeout(i, 500), setTimeout(() => {
            t(2, L.accountCenter.copyAddress = "Copy Wallet address", L)
        }, 700)
    }
    const u = d => t(3, s = s === d ? "" : d),
        v = d => Ge(l, d),
        k = () => {
            t(3, s = ""), a(l)
        },
        h = d => {
            t(3, s = ""), Ge(l, d)
        },
        b = () => {
            t(3, s = ""), An({
                label: l.label
            })
        },
        m = (d, _, w) => {
            Xn(d ? d.name : _ ? _.name : w).then(() => {
                f()
            })
        };
    return e.$$set = d => {
        "wallet" in d && t(0, l = d.wallet), "primary" in d && t(1, r = d.primary)
    }, [l, r, L, s, o, a, f, i, u, v, k, h, b, m]
}
class vt extends pe {
    constructor(n) {
        super(), ve(this, n, pt, ft, me, {
            wallet: 0,
            primary: 1,
            hideMenu: 7
        }, ut)
    }
    get hideMenu() {
        return this.$$.ctx[7]
    }
}
var mt = `
  <svg width="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13 7H11V11H7V13H11V17H13V13H17V11H13V7ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="currentColor"/>
  </svg>
`,
    gt = `
  <svg width="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.09 15.59L11.5 17L16.5 12L11.5 7L10.09 8.41L12.67 11H3V13H12.67L10.09 15.59ZM19 3H5C3.89 3 3 3.9 3 5V9H5V5H19V19H5V15H3V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3Z" fill="currentColor"/>
  </svg>
`,
    bt = '<svg width="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.59 8.59L12 13.17L7.41 8.59L6 10L12 16L18 10L16.59 8.59Z" fill="grey"/></svg>',
    jn = `<svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.99998 17.3125C5.05553 16.8264 3.45831 15.6979 2.20831 13.9271C0.958313 12.1562 0.333313 10.2153 0.333313 8.10417V3.14583L6.99998 0.645833L13.6666 3.14583V8.10417C13.6666 10.2153 13.0416 12.1562 11.7916 13.9271C10.5416 15.6979 8.94442 16.8264 6.99998 17.3125ZM5.12498 12.3333H8.87498C9.05553 12.3333 9.20484 12.2743 9.3229 12.1562C9.44095 12.0382 9.49998 11.8889 9.49998 11.7083V8.79167C9.49998 8.61111 9.44095 8.46181 9.3229 8.34375C9.20484 8.22569 9.05553 8.16667 8.87498 8.16667H8.66665V7.33333C8.66665 6.875 8.50345 6.48264 8.17706 6.15625C7.85067 5.82986 7.45831 5.66667 6.99998 5.66667C6.54165 5.66667 6.14928 5.82986 5.8229 6.15625C5.49651 6.48264 5.33331 6.875 5.33331 7.33333V8.16667H5.12498C4.94442 8.16667 4.79512 8.22569 4.67706 8.34375C4.55901 8.46181 4.49998 8.61111 4.49998 8.79167V11.7083C4.49998 11.8889 4.55901 12.0382 4.67706 12.1562C4.79512 12.2743 4.94442 12.3333 5.12498 12.3333ZM5.95831 8.16667V7.33333C5.95831 7.05556 6.06248 6.82292 6.27081 6.63542C6.47915 6.44792 6.7222 6.35417 6.99998 6.35417C7.27776 6.35417 7.52081 6.44792 7.72915 6.63542C7.93748 6.82292 8.04165 7.05556 8.04165 7.33333V8.16667H5.95831Z" fill="#929BED"/>
</svg>
`;

function ht(e) {
    ge(e, "svelte-1ubxcdp", ".content.svelte-1ubxcdp{padding:1rem;width:300px;font-family:var(--onboard-font-family-normal, var(--font-family-normal));font-size:var(--onboard-font-size-5, var(--font-size-5));line-height:24px}.icon-container.svelte-1ubxcdp{width:3rem;height:3rem;background:var(--onboard-warning-100, var(--warning-100));border-radius:24px;padding:12px;color:var(--onboard-warning-500, var(--warning-500))}h4.svelte-1ubxcdp{margin:1.5rem 0 0.5rem 0;font-weight:600}p.svelte-1ubxcdp{margin:0;font-weight:400}button.svelte-1ubxcdp{margin-top:1.5rem;width:50%;font-weight:600}.right.svelte-1ubxcdp{margin-left:0.5rem;width:60%}")
}

function _t(e) {
    let n, t, o, l, r = e[2]("modals.confirmDisconnectAll.heading", {
            default: L.modals.confirmDisconnectAll.heading
        }) + "",
        i, s, a, f = e[2]("modals.confirmDisconnectAll.description") + "",
        u, v, k, h, b = e[2]("modals.confirmDisconnectAll.cancel", {
            default: L.modals.confirmDisconnectAll.cancel
        }) + "",
        m, d, _, w = e[2]("modals.confirmDisconnectAll.confirm", {
            default: L.modals.confirmDisconnectAll.confirm
        }) + "",
        C, $, P;
    return {
        c() {
            n = g("div"), t = g("div"), o = z(), l = g("h4"), i = q(r), s = z(), a = g("p"), u = q(f), v = z(), k = g("div"), h = g("button"), m = q(b), d = z(), _ = g("button"), C = q(w), p(t, "class", "icon-container flex justify-center items-center svelte-1ubxcdp"), p(l, "class", "svelte-1ubxcdp"), p(a, "class", "svelte-1ubxcdp"), p(h, "class", "button-neutral-solid-b rounded svelte-1ubxcdp"), p(_, "class", "right button-neutral-solid rounded svelte-1ubxcdp"), p(k, "class", "flex justify-between items-center w-100"), p(n, "class", "content svelte-1ubxcdp")
        },
        m(B, D) {
            A(B, n, D), c(n, t), t.innerHTML = Se, c(n, o), c(n, l), c(l, i), c(n, s), c(n, a), c(a, u), c(n, v), c(n, k), c(k, h), c(h, m), c(k, d), c(k, _), c(_, C), $ || (P = [K(h, "click", function() {
                we(e[1]) && e[1].apply(this, arguments)
            }), K(_, "click", function() {
                we(e[0]) && e[0].apply(this, arguments)
            })], $ = !0)
        },
        p(B, D) {
            e = B, D & 4 && r !== (r = e[2]("modals.confirmDisconnectAll.heading", {
                default: L.modals.confirmDisconnectAll.heading
            }) + "") && V(i, r), D & 4 && f !== (f = e[2]("modals.confirmDisconnectAll.description") + "") && V(u, f), D & 4 && b !== (b = e[2]("modals.confirmDisconnectAll.cancel", {
                default: L.modals.confirmDisconnectAll.cancel
            }) + "") && V(m, b), D & 4 && w !== (w = e[2]("modals.confirmDisconnectAll.confirm", {
                default: L.modals.confirmDisconnectAll.confirm
            }) + "") && V(C, w)
        },
        d(B) {
            B && S(n), $ = !1, ke(P)
        }
    }
}

function wt(e) {
    let n, t;
    return n = new Ln({
        props: {
            close: e[1],
            $$slots: {
                default: [_t]
            },
            $$scope: {
                ctx: e
            }
        }
    }), {
        c() {
            F(n.$$.fragment)
        },
        m(o, l) {
            O(n, o, l), t = !0
        },
        p(o, [l]) {
            const r = {};
            l & 2 && (r.close = o[1]), l & 15 && (r.$$scope = {
                dirty: l,
                ctx: o
            }), n.$set(r)
        },
        i(o) {
            t || (y(n.$$.fragment, o), t = !0)
        },
        o(o) {
            T(n.$$.fragment, o), t = !1
        },
        d(o) {
            G(n, o)
        }
    }
}

function kt(e, n, t) {
    let o;
    ee(e, He, i => t(2, o = i));
    let {
        onConfirm: l
    } = n, {
        onClose: r
    } = n;
    return e.$$set = i => {
        "onConfirm" in i && t(0, l = i.onConfirm), "onClose" in i && t(1, r = i.onClose)
    }, [l, r, o]
}
class yt extends pe {
    constructor(n) {
        super(), ve(this, n, kt, wt, me, {
            onConfirm: 0,
            onClose: 1
        }, ht)
    }
}

function Ct(e) {
    ge(e, "svelte-ruodf3", ".content.svelte-ruodf3{--background-color:var(--w3o-background-color);--text-color:var(--w3o-text-color);--action-color:var(--w3o-action-color, var(--primary-500));font-size:1rem;line-height:1.5rem;display:flex;flex-flow:column;gap:1.5rem;padding:1rem;max-width:320px;background:var(--background-color);color:var(--text-color)}.icon-container.svelte-ruodf3{position:relative;overflow:hidden;width:3rem;height:3rem;border-radius:24px;padding:0.75rem;background:none}.icon-container.svelte-ruodf3::before{content:'';position:absolute;height:100%;width:100%;opacity:0.2;background:var(--action-color)}.text-container.svelte-ruodf3{display:flex;flex-flow:column;gap:0.5rem;padding:0 0.5rem}.actions-container.svelte-ruodf3{display:flex;flex-flow:row nowrap;gap:1rem}.heading.svelte-ruodf3{font-weight:600}button.svelte-ruodf3{font-weight:600}button.primary.svelte-ruodf3{background:var(--action-color)}")
}

function zt(e) {
    let n, t, o, l, r, i = e[3]("modals.confirmTransactionProtection.heading", {
            default: L.modals.confirmTransactionProtection.heading
        }) + "",
        s, a, f, u = e[3]("modals.confirmTransactionProtection.description") + "",
        v, k, h, b = e[3]("modals.confirmTransactionProtection.link", {
            default: L.modals.confirmTransactionProtection.link
        }) + "",
        m, d, _, w, C = e[3]("modals.confirmTransactionProtection.dismiss", {
            default: L.modals.confirmTransactionProtection.dismiss
        }) + "",
        $, P, B, D = e[3]("modals.confirmTransactionProtection.enable", {
            default: L.modals.confirmTransactionProtection.enable
        }) + "",
        I, H, W;
    return {
        c() {
            n = g("div"), t = g("div"), o = z(), l = g("div"), r = g("div"), s = q(i), a = z(), f = g("div"), v = q(u), k = z(), h = g("a"), m = q(b), d = z(), _ = g("div"), w = g("button"), $ = q(C), P = z(), B = g("button"), I = q(D), p(t, "class", "icon-container flex justify-center items-center svelte-ruodf3"), p(r, "class", "heading svelte-ruodf3"), p(h, "href", e[2]), p(h, "target", "_blank"), p(h, "rel", "noreferrer noopener"), p(h, "class", "no-link"), p(l, "class", "text-container svelte-ruodf3"), p(w, "class", "button-neutral-solid-b svelte-ruodf3"), p(B, "class", "button-neutral-solid rounded primary svelte-ruodf3"), p(_, "class", "actions-container svelte-ruodf3"), p(n, "class", "content svelte-ruodf3")
        },
        m(U, J) {
            A(U, n, J), c(n, t), t.innerHTML = jn, c(n, o), c(n, l), c(l, r), c(r, s), c(l, a), c(l, f), c(f, v), c(l, k), c(l, h), c(h, m), c(n, d), c(n, _), c(_, w), c(w, $), c(_, P), c(_, B), c(B, I), H || (W = [K(w, "click", function() {
                we(e[1]) && e[1].apply(this, arguments)
            }), K(B, "click", function() {
                we(e[0]) && e[0].apply(this, arguments)
            })], H = !0)
        },
        p(U, J) {
            e = U, J & 8 && i !== (i = e[3]("modals.confirmTransactionProtection.heading", {
                default: L.modals.confirmTransactionProtection.heading
            }) + "") && V(s, i), J & 8 && u !== (u = e[3]("modals.confirmTransactionProtection.description") + "") && V(v, u), J & 8 && b !== (b = e[3]("modals.confirmTransactionProtection.link", {
                default: L.modals.confirmTransactionProtection.link
            }) + "") && V(m, b), J & 4 && p(h, "href", e[2]), J & 8 && C !== (C = e[3]("modals.confirmTransactionProtection.dismiss", {
                default: L.modals.confirmTransactionProtection.dismiss
            }) + "") && V($, C), J & 8 && D !== (D = e[3]("modals.confirmTransactionProtection.enable", {
                default: L.modals.confirmTransactionProtection.enable
            }) + "") && V(I, D)
        },
        d(U) {
            U && S(n), H = !1, ke(W)
        }
    }
}

function $t(e) {
    let n, t;
    return n = new Ln({
        props: {
            close: e[1],
            $$slots: {
                default: [zt]
            },
            $$scope: {
                ctx: e
            }
        }
    }), {
        c() {
            F(n.$$.fragment)
        },
        m(o, l) {
            O(n, o, l), t = !0
        },
        p(o, [l]) {
            const r = {};
            l & 2 && (r.close = o[1]), l & 31 && (r.$$scope = {
                dirty: l,
                ctx: o
            }), n.$set(r)
        },
        i(o) {
            t || (y(n.$$.fragment, o), t = !0)
        },
        o(o) {
            T(n.$$.fragment, o), t = !1
        },
        d(o) {
            G(n, o)
        }
    }
}

function Tt(e, n, t) {
    let o;
    ee(e, He, s => t(3, o = s));
    let {
        onEnable: l
    } = n, {
        onDismiss: r
    } = n, {
        infoLink: i
    } = n;
    return e.$$set = s => {
        "onEnable" in s && t(0, l = s.onEnable), "onDismiss" in s && t(1, r = s.onDismiss), "infoLink" in s && t(2, i = s.infoLink)
    }, [l, r, i, o]
}
class Mt extends pe {
    constructor(n) {
        super(), ve(this, n, Tt, $t, me, {
            onEnable: 0,
            onDismiss: 1,
            infoLink: 2
        }, Ct)
    }
}

function At(e) {
    ge(e, "svelte-b848yl", ".secondary-token-container.svelte-b848yl.svelte-b848yl{width:100%}table.svelte-b848yl.svelte-b848yl{width:100%}tr.svelte-b848yl.svelte-b848yl{padding:0.25rem 1rem;line-height:1rem;border-bottom:1px solid var(--border-color);display:flex;flex-direction:row;align-items:flex-start;gap:1rem}thead.svelte-b848yl .secondary-token-table-header.svelte-b848yl{text-align:inherit;font-size:var(--onboard-font-size-7, var(--font-size-7))}.token-icon.svelte-b848yl.svelte-b848yl{width:30%;font-weight:700;font-size:var(--onboard-font-size-6, var(--font-size-6));color:var(--text-color)}.icon-name-container.svelte-b848yl.svelte-b848yl{display:flex;flex-direction:row;align-items:flex-start;padding:0px;gap:0.5rem}.icon.svelte-b848yl.svelte-b848yl{width:1rem;height:1rem}img.svelte-b848yl.svelte-b848yl{height:100%;width:100%}.token-balance.svelte-b848yl.svelte-b848yl{width:70%;font-weight:200;font-size:var(--onboard-font-size-6, var(--font-size-6));color:var(--text-color)}")
}

function an(e, n, t) {
    const o = e.slice();
    return o[1] = n[t], o
}

function sn(e) {
    let n, t, o, l, r = e[1].name.toUpperCase() + "",
        i, s, a, f = (e[1].balance.length > 7 ? e[1].balance.slice(0, 7) : e[1].balance) + "",
        u, v;

    function k(m, d) {
        return m[1].icon ? Pt : St
    }
    let h = k(e),
        b = h(e);
    return {
        c() {
            n = g("tr"), t = g("td"), o = g("div"), b.c(), l = z(), i = q(r), s = z(), a = g("td"), u = q(f), v = z(), p(o, "class", "icon-name-container svelte-b848yl"), p(t, "class", "token-icon svelte-b848yl"), p(a, "class", "token-balance svelte-b848yl"), p(n, "class", "token-row svelte-b848yl")
        },
        m(m, d) {
            A(m, n, d), c(n, t), c(t, o), b.m(o, null), c(o, l), c(o, i), c(n, s), c(n, a), c(a, u), c(n, v)
        },
        p(m, d) {
            h === (h = k(m)) && b ? b.p(m, d) : (b.d(1), b = h(m), b && (b.c(), b.m(o, l))), d & 1 && r !== (r = m[1].name.toUpperCase() + "") && V(i, r), d & 1 && f !== (f = (m[1].balance.length > 7 ? m[1].balance.slice(0, 7) : m[1].balance) + "") && V(u, f)
        },
        d(m) {
            m && S(n), b.d()
        }
    }
}

function St(e) {
    let n;
    return {
        c() {
            n = g("div"), p(n, "class", "icon svelte-b848yl")
        },
        m(t, o) {
            A(t, n, o)
        },
        p: Z,
        d(t) {
            t && S(n)
        }
    }
}

function Pt(e) {
    let n, t, o = {
        ctx: e,
        current: null,
        token: null,
        hasCatch: !1,
        pending: Vt,
        then: qt,
        catch: Lt,
        value: 4
    };
    return Ue(t = e[1].icon, o), {
        c() {
            n = ue(), o.block.c()
        },
        m(l, r) {
            A(l, n, r), o.block.m(l, o.anchor = r), o.mount = () => n.parentNode, o.anchor = n
        },
        p(l, r) {
            e = l, o.ctx = e, r & 1 && t !== (t = e[1].icon) && Ue(t, o) || xn(o, e, r)
        },
        d(l) {
            l && S(n), o.block.d(l), o.token = null, o = null
        }
    }
}

function Lt(e) {
    return {
        c: Z,
        m: Z,
        p: Z,
        i: Z,
        o: Z,
        d: Z
    }
}

function qt(e) {
    let n, t, o;

    function l(s, a) {
        return a & 1 && (t = null), t == null && (t = !!et(s[4])), t ? jt : Ht
    }
    let r = l(e, -1),
        i = r(e);
    return {
        c() {
            n = g("div"), i.c(), p(n, "class", "icon svelte-b848yl")
        },
        m(s, a) {
            A(s, n, a), i.m(n, null)
        },
        p(s, a) {
            r === (r = l(s, a)) && i ? i.p(s, a) : (i.d(1), i = r(s), i && (i.c(), i.m(n, null)))
        },
        i(s) {
            s && (o || Te(() => {
                o = Pe(n, $e, {}), o.start()
            }))
        },
        o: Z,
        d(s) {
            s && S(n), i.d()
        }
    }
}

function Ht(e) {
    let n, t;
    return {
        c() {
            n = g("img"), Je(n.src, t = e[4]) || p(n, "src", t), p(n, "alt", "logo"), p(n, "class", "svelte-b848yl")
        },
        m(o, l) {
            A(o, n, l)
        },
        p(o, l) {
            l & 1 && !Je(n.src, t = o[4]) && p(n, "src", t)
        },
        d(o) {
            o && S(n)
        }
    }
}

function jt(e) {
    let n, t = e[4] + "",
        o;
    return {
        c() {
            n = new nt(!1), o = ue(), n.a = o
        },
        m(l, r) {
            n.m(t, l, r), A(l, o, r)
        },
        p(l, r) {
            r & 1 && t !== (t = l[4] + "") && n.p(t)
        },
        d(l) {
            l && S(o), l && n.d()
        }
    }
}

function Vt(e) {
    return {
        c: Z,
        m: Z,
        p: Z,
        i: Z,
        o: Z,
        d: Z
    }
}

function cn(e) {
    let n, t = e[1] && e[1].name && e[1].balance && sn(e);
    return {
        c() {
            t && t.c(), n = ue()
        },
        m(o, l) {
            t && t.m(o, l), A(o, n, l)
        },
        p(o, l) {
            o[1] && o[1].name && o[1].balance ? t ? t.p(o, l) : (t = sn(o), t.c(), t.m(n.parentNode, n)) : t && (t.d(1), t = null)
        },
        d(o) {
            t && t.d(o), o && S(n)
        }
    }
}

function It(e) {
    let n, t, o, l, r, i = e[0],
        s = [];
    for (let a = 0; a < i.length; a += 1) s[a] = cn(an(e, i, a));
    return {
        c() {
            n = g("div"), t = g("table"), o = g("thead"), o.innerHTML = '<tr class="svelte-b848yl"><th colspan="3" class="secondary-token-table-header svelte-b848yl">Token Balances:</th></tr>', l = z(), r = g("tbody");
            for (let a = 0; a < s.length; a += 1) s[a].c();
            p(o, "class", "svelte-b848yl"), p(t, "class", "balance-change-table table-radius svelte-b848yl"), p(n, "class", "secondary-token-container svelte-b848yl")
        },
        m(a, f) {
            A(a, n, f), c(n, t), c(t, o), c(t, l), c(t, r);
            for (let u = 0; u < s.length; u += 1) s[u] && s[u].m(r, null)
        },
        p(a, [f]) {
            if (f & 1) {
                i = a[0];
                let u;
                for (u = 0; u < i.length; u += 1) {
                    const v = an(a, i, u);
                    s[u] ? s[u].p(v, f) : (s[u] = cn(v), s[u].c(), s[u].m(r, null))
                }
                for (; u < s.length; u += 1) s[u].d(1);
                s.length = i.length
            }
        },
        i: Z,
        o: Z,
        d(a) {
            a && S(n), Pn(s, a)
        }
    }
}

function Bt(e, n, t) {
    let {
        secondaryTokens: o
    } = n;
    return e.$$set = l => {
        "secondaryTokens" in l && t(0, o = l.secondaryTokens)
    }, [o]
}
class Dt extends pe {
    constructor(n) {
        super(), ve(this, n, Bt, It, me, {
            secondaryTokens: 0
        }, At)
    }
}

function Wt(e) {
    ge(e, "svelte-177u10y", `.outer-container.svelte-177u10y{--background-color:var(--w3o-background-color);--text-color:var(--w3o-text-color);--border-color:var(--w3o-border-color, var(--gray-500));--action-color:var(--w3o-action-color, var(--primary-500));--border-radius:var(--w3o-border-radius, 1rem);--account-center-network-selector-color:var(--text-color, white);width:100%;overflow:hidden;pointer-events:auto;border:1px solid transparent;background:var(
      --account-center-maximized-upper-background,
      var(--background-color)
    );border-color:var(--border-color);border-radius:var(--account-center-border-radius, var(--border-radius))}.wallets-section.svelte-177u10y{width:100%;color:var(--text-color, var(--gray-100));background:var(--background-color, var(--gray-700))}.p5.svelte-177u10y{padding:var(--onboard-spacing-5, var(--spacing-5))}.wallets.svelte-177u10y{width:100%;margin-bottom:0.5rem}.actions.svelte-177u10y{color:var(
      --account-center-maximized-upper-action-color,
      var(--action-color)
    );padding-left:2px}.action-container.svelte-177u10y{padding:0.25rem 12px 0.25rem 0.5rem;border-radius:0.5rem;transition:background-color 150ms ease-in-out}.action-container.svelte-177u10y:hover{background-color:var(
      --account-center-maximized-upper-action-background-hover,
      rgba(146, 155, 237, 0.2)
    )}.plus-icon.svelte-177u10y{width:20px}.arrow-forward.svelte-177u10y{width:20px}.mt.svelte-177u10y{margin-top:0.25rem}.action-text.svelte-177u10y{font-size:var(--onboard-font-size-6, var(--font-size-6));line-height:var(--onboard-font-line-height-3, var(--font-line-height-3));margin-left:0.5rem}.background-blue.svelte-177u10y{background:var(
      --account-center-maximized-network-section-background,
      var(--onboard-primary-100, var(--primary-100))
    )}.background-gray.svelte-177u10y{background:var(--onboard-gray-100, var(--gray-100))}.background-yellow.svelte-177u10y{background:var(--onboard-warning-100, var(--warning-100))}.network-container.svelte-177u10y{background:var(--background-color);border-top:1px solid var(--border-color);width:100%;display:flex;flex-direction:column;align-items:flex-start;padding:0.75rem;gap:0.5rem;border-radius:var(
      --account-center-border-radius,
      var(--onboard-border-radius-3, var(--border-radius-3))
    );color:var(
      --account-center-maximized-network-text-color,
      var(--account-center-maximized-network-section, inherit)
    )}.network-section.svelte-177u10y{flex-direction:row;align-items:flex-start;padding:0px;gap:16px}.network-selector-container.svelte-177u10y{width:100%}.protect.svelte-177u10y{flex-direction:row;padding:0.25rem 0.375rem 0;gap:0.375rem;width:100%}.shield.svelte-177u10y{width:20px;height:20px;display:flex;justify-content:center}.protect-text.svelte-177u10y{font-size:var(--onboard-font-size-6, var(--font-size-6));color:var(
      --account-center-maximized-upper-action-color,
      var(--action-color)
    );line-height:1.75rem;display:flex;align-items:center}.network-selector-container.svelte-177u10y{margin-left:1rem;width:100%}.network-selector-label.svelte-177u10y{font-size:var(--onboard-font-size-7, var(--font-size-7));line-height:var(--onboard-font-line-height-3, var(--font-line-height-3))}.app-info-container.svelte-177u10y{color:var(--text-color, var(--gray-700));background:var(
      --account-center-maximized-info-section-background-color,
      var(
        --account-center-maximized-info-section,
        var(--background-color, #fff)
      )
    );border-top:1px solid var(--border-color);border-radius:var(--account-center-border-radius, inherit);display:flex;flex-direction:column;align-items:flex-start;padding:0px}.app-info-header.svelte-177u10y{width:100%;flex-direction:column;align-items:flex-start;padding:0.75rem;gap:0.5rem;border-bottom:1px solid var(--border-color)}.app-icon-name.svelte-177u10y{display:flex;align-items:center;flex-direction:row;gap:0.75rem}.app-name.svelte-177u10y{font-size:1rem;font-weight:600;line-height:1rem;margin-bottom:0.25rem;color:var(--account-center-maximized-app-name-color, inherit)}.app-description.svelte-177u10y{margin:0;font-size:var(--onboard-font-size-7, var(--font-size-7));line-height:var(--onboard-font-line-height-3, var(--font-line-height-3));color:var(--account-center-maximized-app-info-color, inherit);display:flex;flex-direction:row;align-items:flex-start;padding:0px 0.25rem;gap:1rem}.app-info.svelte-177u10y{width:100%;font-size:var(--onboard-font-size-7, var(--font-size-7));line-height:var(--onboard-font-line-height-3, var(--font-line-height-3));color:var(--account-center-maximized-app-info-color, inherit);border-bottom:1px solid var(--border-color);display:flex;flex-direction:column;align-items:flex-start;padding:0.5rem 1rem;gap:0.25rem}.app-info-heading.svelte-177u10y{font-weight:700;color:var(--account-center-maximized-app-info-color, inherit)}.w100.svelte-177u10y{width:100%}a.svelte-177u10y{font-weight:700}.powered-by-container.svelte-177u10y{color:var(--text-color);padding:0.75rem}`)
}

function dn(e, n, t) {
    const o = e.slice();
    return o[29] = n[t], o[31] = t, o
}

function un(e) {
    let n, t;
    return n = new yt({
        props: {
            onClose: e[22],
            onConfirm: e[13]
        }
    }), {
        c() {
            F(n.$$.fragment)
        },
        m(o, l) {
            O(n, o, l), t = !0
        },
        p(o, l) {
            const r = {};
            l[0] & 4 && (r.onClose = o[22]), n.$set(r)
        },
        i(o) {
            t || (y(n.$$.fragment, o), t = !0)
        },
        o(o) {
            T(n.$$.fragment, o), t = !1
        },
        d(o) {
            G(n, o)
        }
    }
}

function fn(e) {
    let n, t;
    return n = new Mt({
        props: {
            onDismiss: e[23],
            onEnable: e[24],
            infoLink: e[9].transactionProtectionInfoLink || We
        }
    }), {
        c() {
            F(n.$$.fragment)
        },
        m(o, l) {
            O(n, o, l), t = !0
        },
        p(o, l) {
            const r = {};
            l[0] & 16 && (r.onDismiss = o[23]), l[0] & 512 && (r.infoLink = o[9].transactionProtectionInfoLink || We), n.$set(r)
        },
        i(o) {
            t || (y(n.$$.fragment, o), t = !0)
        },
        o(o) {
            T(n.$$.fragment, o), t = !1
        },
        d(o) {
            G(n, o)
        }
    }
}

function pn(e) {
    var Ie;
    let n, t, o, l, r = [],
        i = new Map,
        s, a, f, u, v, k, h, b, m, d, _, w = e[10]("accountCenter.currentNetwork", {
            default: L.accountCenter.currentNetwork
        }) + "",
        C, $, P, B, D, I, H, W, U, J, Y, te, oe, M, N, x = e[1];
    const Me = E => E[29].label;
    for (let E = 0; E < x.length; E += 1) {
        let j = dn(e, x, E),
            re = Me(j);
        i.set(re, r[E] = vn(re, j))
    }
    let se = e[17].type === "desktop" && Nt(e);
    h = new he({
        props: {
            size: 32,
            padding: 4,
            background: "custom",
            color: e[5] ? e[5].icon ? void 0 : "#EFF1FC" : "#FFAF00",
            customBackgroundColor: e[5] ? e[5].color || e[7] && e[7].color || be.color : "#FFE7B3",
            border: "transparent",
            radius: 8,
            icon: e[5] ? e[5].icon || e[7] && e[7].icon || be.icon : Se
        }
    });
    let R = e[5] && mn();
    B = new Hn({
        props: {
            chains: e[14],
            colorVar: "--account-center-maximized-network-selector-color",
            bold: !0,
            selectIcon: bt,
            parentCSSId: "maximized_ac"
        }
    });
    let le = !e[9].hideTransactionProtectionBtn && (e[6] || ((Ie = e[5]) == null ? void 0 : Ie.protectedRpcUrl)) && gn(e),
        Q = e[11] && bn(e),
        X = e[8] && e[8].length && kn(e);
    return {
        c() {
            n = g("div"), t = g("div"), o = g("div"), l = g("div");
            for (let E = 0; E < r.length; E += 1) r[E].c();
            s = z(), a = g("div"), se && se.c(), f = z(), u = g("div"), v = g("div"), k = g("div"), F(h.$$.fragment), b = z(), R && R.c(), m = z(), d = g("div"), _ = g("div"), C = q(w), $ = z(), P = g("div"), F(B.$$.fragment), D = z(), le && le.c(), I = z(), H = g("div"), Q && Q.c(), W = z(), X && X.c(), U = z(), J = g("div"), Y = g("a"), p(l, "class", "wallets svelte-177u10y"), p(a, "class", "actions flex flex-column items-start svelte-177u10y"), p(o, "class", "p5 svelte-177u10y"), p(k, "class", "relative flex"), p(_, "class", "network-selector-label svelte-177u10y"), p(P, "class", "flex items-center"), _e(P, "width", "100%"), p(d, "class", "network-selector-container svelte-177u10y"), p(v, "class", "network-section flex items-center svelte-177u10y"), p(u, "class", "network-container svelte-177u10y"), ce(u, "background-blue", e[5] && e[5].icon || e[7]), ce(u, "background-yellow", !e[5]), ce(u, "background-gray", e[5] && !e[7]), p(Y, "href", "https://blocknative.com"), p(Y, "target", "_blank"), p(Y, "rel", "noopener noreferrer"), p(Y, "class", "flex justify-center items-center powered-by-container svelte-177u10y"), p(J, "class", "w100 svelte-177u10y"), p(H, "class", "app-info-container svelte-177u10y"), p(t, "class", "wallets-section svelte-177u10y"), p(n, "class", "outer-container svelte-177u10y")
        },
        m(E, j) {
            A(E, n, j), c(n, t), c(t, o), c(o, l);
            for (let re = 0; re < r.length; re += 1) r[re] && r[re].m(l, null);
            c(o, s), c(o, a), se && se.m(a, null), c(t, f), c(t, u), c(u, v), c(v, k), O(h, k, null), c(k, b), R && R.m(k, null), c(v, m), c(v, d), c(d, _), c(_, C), c(d, $), c(d, P), O(B, P, null), c(u, D), le && le.m(u, null), c(t, I), c(t, H), Q && Q.m(H, null), c(H, W), X && X.m(H, null), c(H, U), c(H, J), c(J, Y), Y.innerHTML = Bn, oe = !0, M || (N = [K(P, "click", e[21]), K(n, "click", fe(function() {
                we(e[3]) && e[3].apply(this, arguments)
            }))], M = !0)
        },
        p(E, j) {
            var Be;
            e = E, j[0] & 10 && (x = e[1], ae(), r = Tn(r, j, Me, 1, e, x, i, l, Dn, vn, null, dn), ie()), e[17].type === "desktop" && se.p(e, j);
            const re = {};
            j[0] & 32 && (re.color = e[5] ? e[5].icon ? void 0 : "#EFF1FC" : "#FFAF00"), j[0] & 160 && (re.customBackgroundColor = e[5] ? e[5].color || e[7] && e[7].color || be.color : "#FFE7B3"), j[0] & 160 && (re.icon = e[5] ? e[5].icon || e[7] && e[7].icon || be.icon : Se), h.$set(re), e[5] ? R ? j[0] & 32 && y(R, 1) : (R = mn(), R.c(), y(R, 1), R.m(k, null)) : R && (ae(), T(R, 1, 1, () => {
                R = null
            }), ie()), (!oe || j[0] & 1024) && w !== (w = e[10]("accountCenter.currentNetwork", {
                default: L.accountCenter.currentNetwork
            }) + "") && V(C, w), !e[9].hideTransactionProtectionBtn && (e[6] || ((Be = e[5]) == null ? void 0 : Be.protectedRpcUrl)) ? le ? le.p(e, j) : (le = gn(e), le.c(), le.m(u, null)) : le && (le.d(1), le = null), (!oe || j[0] & 160) && ce(u, "background-blue", e[5] && e[5].icon || e[7]), (!oe || j[0] & 32) && ce(u, "background-yellow", !e[5]), (!oe || j[0] & 160) && ce(u, "background-gray", e[5] && !e[7]), e[11] ? Q ? (Q.p(e, j), j[0] & 2048 && y(Q, 1)) : (Q = bn(e), Q.c(), y(Q, 1), Q.m(H, W)) : Q && (ae(), T(Q, 1, 1, () => {
                Q = null
            }), ie()), e[8] && e[8].length ? X ? (X.p(e, j), j[0] & 256 && y(X, 1)) : (X = kn(e), X.c(), y(X, 1), X.m(H, U)) : X && (ae(), T(X, 1, 1, () => {
                X = null
            }), ie())
        },
        i(E) {
            if (!oe) {
                for (let j = 0; j < x.length; j += 1) y(r[j]);
                y(h.$$.fragment, E), y(R), y(B.$$.fragment, E), y(Q), y(X), E && Te(() => {
                    !oe || (te || (te = Ne(n, Fe, {
                        duration: 600,
                        y: e[16].includes("bottom") ? 56 : -76,
                        easing: Ee,
                        opacity: 0
                    }, !0)), te.run(1))
                }), oe = !0
            }
        },
        o(E) {
            for (let j = 0; j < r.length; j += 1) T(r[j]);
            T(h.$$.fragment, E), T(R), T(B.$$.fragment, E), T(Q), T(X), E && (te || (te = Ne(n, Fe, {
                duration: 600,
                y: e[16].includes("bottom") ? 56 : -76,
                easing: Ee,
                opacity: 0
            }, !1)), te.run(0)), oe = !1
        },
        d(E) {
            E && S(n);
            for (let j = 0; j < r.length; j += 1) r[j].d();
            se && se.d(), G(h), R && R.d(), G(B), le && le.d(), Q && Q.d(), X && X.d(), E && te && te.end(), M = !1, ke(N)
        }
    }
}

function vn(e, n) {
    let t, o, l, r;

    function i(a) {
        n[25](a)
    }
    let s = {
        wallet: n[29],
        primary: n[31] === 0
    };
    return n[3] !== void 0 && (s.hideMenu = n[3]), o = new vt({
        props: s
    }), Mn.push(() => Wn(o, "hideMenu", i)), {
        key: e,
        first: null,
        c() {
            t = ue(), F(o.$$.fragment), this.first = t
        },
        m(a, f) {
            A(a, t, f), O(o, a, f), r = !0
        },
        p(a, f) {
            n = a;
            const u = {};
            f[0] & 2 && (u.wallet = n[29]), f[0] & 2 && (u.primary = n[31] === 0), !l && f[0] & 8 && (l = !0, u.hideMenu = n[3], Nn(() => l = !1)), o.$set(u)
        },
        i(a) {
            r || (y(o.$$.fragment, a), r = !0)
        },
        o(a) {
            T(o.$$.fragment, a), r = !1
        },
        d(a) {
            a && S(t), G(o, a)
        }
    }
}

function Nt(e) {
    let n, t, o, l, r = e[10]("accountCenter.connectAnotherWallet", {
            default: L.accountCenter.connectAnotherWallet
        }) + "",
        i, s, a, f, u, v, k = e[10]("accountCenter.disconnectAllWallets", {
            default: L.accountCenter.disconnectAllWallets
        }) + "",
        h, b, m;
    return {
        c() {
            n = g("div"), t = g("div"), o = z(), l = g("span"), i = q(r), s = z(), a = g("div"), f = g("div"), u = z(), v = g("span"), h = q(k), p(t, "class", "plus-icon flex items-center justify-center svelte-177u10y"), p(l, "class", "action-text svelte-177u10y"), p(n, "class", "action-container flex items-center pointer svelte-177u10y"), p(f, "class", "arrow-forward flex items-center justify-center svelte-177u10y"), p(v, "class", "action-text svelte-177u10y"), p(a, "class", "action-container flex items-center mt pointer svelte-177u10y")
        },
        m(d, _) {
            A(d, n, _), c(n, t), t.innerHTML = mt, c(n, o), c(n, l), c(l, i), A(d, s, _), A(d, a, _), c(a, f), f.innerHTML = gt, c(a, u), c(a, v), c(v, h), b || (m = [K(n, "click", e[26]), K(a, "click", e[27])], b = !0)
        },
        p(d, _) {
            _[0] & 1024 && r !== (r = d[10]("accountCenter.connectAnotherWallet", {
                default: L.accountCenter.connectAnotherWallet
            }) + "") && V(i, r), _[0] & 1024 && k !== (k = d[10]("accountCenter.disconnectAllWallets", {
                default: L.accountCenter.disconnectAllWallets
            }) + "") && V(h, k)
        },
        d(d) {
            d && S(n), d && S(s), d && S(a), b = !1, ke(m)
        }
    }
}

function mn(e) {
    let n, t, o;
    return t = new je({
        props: {
            size: 14
        }
    }), {
        c() {
            n = g("div"), F(t.$$.fragment), _e(n, "right", "-5px"), _e(n, "bottom", "-5px"), p(n, "class", "drop-shadow absolute")
        },
        m(l, r) {
            A(l, n, r), O(t, n, null), o = !0
        },
        i(l) {
            o || (y(t.$$.fragment, l), o = !0)
        },
        o(l) {
            T(t.$$.fragment, l), o = !1
        },
        d(l) {
            l && S(n), G(t)
        }
    }
}

function gn(e) {
    let n, t, o, l, r = e[10]("accountCenter.enableTransactionProtection", {
            default: L.accountCenter.enableTransactionProtection
        }) + "",
        i, s, a;
    return {
        c() {
            n = g("div"), t = g("div"), o = z(), l = g("span"), i = q(r), p(t, "class", "shield svelte-177u10y"), p(l, "class", "protect-text svelte-177u10y"), p(n, "class", "protect action-container flex items-center pointer svelte-177u10y")
        },
        m(f, u) {
            A(f, n, u), c(n, t), t.innerHTML = jn, c(n, o), c(n, l), c(l, i), s || (a = K(n, "click", e[28]), s = !0)
        },
        p(f, u) {
            u[0] & 1024 && r !== (r = f[10]("accountCenter.enableTransactionProtection", {
                default: L.accountCenter.enableTransactionProtection
            }) + "") && V(i, r)
        },
        d(f) {
            f && S(n), s = !1, a()
        }
    }
}

function bn(e) {
    let n, t, o, l, r, i = (e[11] && e[11].name || "App Name") + "",
        s, a, f, u = (e[11] && e[11].description || "This app has not added a description.") + "",
        v, k, h, b;
    o = new he({
        props: {
            size: 32,
            padding: 4,
            background: "white",
            border: "black",
            radius: 8,
            icon: e[11] && e[11].icon || ze
        }
    });
    let m = (e[11].gettingStartedGuide || e[11].explore) && hn(e);
    return {
        c() {
            n = g("div"), t = g("div"), F(o.$$.fragment), l = z(), r = g("div"), s = q(i), a = z(), f = g("div"), v = q(u), k = z(), m && m.c(), h = ue(), p(r, "class", "app-name svelte-177u10y"), p(t, "class", "relative flex app-icon-name svelte-177u10y"), p(f, "class", "app-description svelte-177u10y"), p(n, "class", "flex items-start app-info-header svelte-177u10y")
        },
        m(d, _) {
            A(d, n, _), c(n, t), O(o, t, null), c(t, l), c(t, r), c(r, s), c(n, a), c(n, f), c(f, v), A(d, k, _), m && m.m(d, _), A(d, h, _), b = !0
        },
        p(d, _) {
            const w = {};
            _[0] & 2048 && (w.icon = d[11] && d[11].icon || ze), o.$set(w), (!b || _[0] & 2048) && i !== (i = (d[11] && d[11].name || "App Name") + "") && V(s, i), (!b || _[0] & 2048) && u !== (u = (d[11] && d[11].description || "This app has not added a description.") + "") && V(v, u), d[11].gettingStartedGuide || d[11].explore ? m ? m.p(d, _) : (m = hn(d), m.c(), m.m(h.parentNode, h)) : m && (m.d(1), m = null)
        },
        i(d) {
            b || (y(o.$$.fragment, d), b = !0)
        },
        o(d) {
            T(o.$$.fragment, d), b = !1
        },
        d(d) {
            d && S(n), G(o), d && S(k), m && m.d(d), d && S(h)
        }
    }
}

function hn(e) {
    let n, t, o = e[10]("accountCenter.appInfo", {
            default: L.accountCenter.appInfo
        }) + "",
        l, r, i, s = e[11].gettingStartedGuide && _n(e),
        a = e[11].explore && wn(e);
    return {
        c() {
            n = g("div"), t = g("div"), l = q(o), r = z(), s && s.c(), i = z(), a && a.c(), p(t, "class", "app-info-heading svelte-177u10y"), p(n, "class", "app-info svelte-177u10y")
        },
        m(f, u) {
            A(f, n, u), c(n, t), c(t, l), c(n, r), s && s.m(n, null), c(n, i), a && a.m(n, null)
        },
        p(f, u) {
            u[0] & 1024 && o !== (o = f[10]("accountCenter.appInfo", {
                default: L.accountCenter.appInfo
            }) + "") && V(l, o), f[11].gettingStartedGuide ? s ? s.p(f, u) : (s = _n(f), s.c(), s.m(n, i)) : s && (s.d(1), s = null), f[11].explore ? a ? a.p(f, u) : (a = wn(f), a.c(), a.m(n, null)) : a && (a.d(1), a = null)
        },
        d(f) {
            f && S(n), s && s.d(), a && a.d()
        }
    }
}

function _n(e) {
    let n, t, o = e[10]("accountCenter.learnMore", {
            default: L.accountCenter.learnMore
        }) + "",
        l, r, i, s = e[10]("accountCenter.gettingStartedGuide", {
            default: L.accountCenter.gettingStartedGuide
        }) + "",
        a, f;
    return {
        c() {
            n = g("div"), t = g("div"), l = q(o), r = z(), i = g("a"), a = q(s), p(i, "href", f = e[11].gettingStartedGuide), p(i, "target", "_blank"), p(i, "rel", "noreferrer noopener"), p(i, "class", "svelte-177u10y"), p(n, "class", "flex justify-between items-center w100 svelte-177u10y")
        },
        m(u, v) {
            A(u, n, v), c(n, t), c(t, l), c(n, r), c(n, i), c(i, a)
        },
        p(u, v) {
            v[0] & 1024 && o !== (o = u[10]("accountCenter.learnMore", {
                default: L.accountCenter.learnMore
            }) + "") && V(l, o), v[0] & 1024 && s !== (s = u[10]("accountCenter.gettingStartedGuide", {
                default: L.accountCenter.gettingStartedGuide
            }) + "") && V(a, s), v[0] & 2048 && f !== (f = u[11].gettingStartedGuide) && p(i, "href", f)
        },
        d(u) {
            u && S(n)
        }
    }
}

function wn(e) {
    let n, t, o = e[10]("accountCenter.smartContracts", {
            default: L.accountCenter.smartContracts
        }) + "",
        l, r, i, s = e[10]("accountCenter.explore", {
            default: L.accountCenter.explore
        }) + "",
        a, f;
    return {
        c() {
            n = g("div"), t = g("div"), l = q(o), r = z(), i = g("a"), a = q(s), p(i, "href", f = e[11].explore), p(i, "target", "_blank"), p(i, "rel", "noreferrer noopener"), p(i, "class", "svelte-177u10y"), p(n, "class", "flex justify-between items-center w100 svelte-177u10y")
        },
        m(u, v) {
            A(u, n, v), c(n, t), c(t, l), c(n, r), c(n, i), c(i, a)
        },
        p(u, v) {
            v[0] & 1024 && o !== (o = u[10]("accountCenter.smartContracts", {
                default: L.accountCenter.smartContracts
            }) + "") && V(l, o), v[0] & 1024 && s !== (s = u[10]("accountCenter.explore", {
                default: L.accountCenter.explore
            }) + "") && V(a, s), v[0] & 2048 && f !== (f = u[11].explore) && p(i, "href", f)
        },
        d(u) {
            u && S(n)
        }
    }
}

function kn(e) {
    let n, t;
    return n = new Dt({
        props: {
            secondaryTokens: e[8]
        }
    }), {
        c() {
            F(n.$$.fragment)
        },
        m(o, l) {
            O(n, o, l), t = !0
        },
        p(o, l) {
            const r = {};
            l[0] & 256 && (r.secondaryTokens = o[8]), n.$set(r)
        },
        i(o) {
            t || (y(n.$$.fragment, o), t = !0)
        },
        o(o) {
            T(n.$$.fragment, o), t = !1
        },
        d(o) {
            G(n, o)
        }
    }
}

function Et(e) {
    let n, t, o, l, r = e[2] && un(e),
        i = e[4] && fn(e),
        s = e[0] && pn(e);
    return {
        c() {
            r && r.c(), n = z(), i && i.c(), t = z(), s && s.c(), o = ue()
        },
        m(a, f) {
            r && r.m(a, f), A(a, n, f), i && i.m(a, f), A(a, t, f), s && s.m(a, f), A(a, o, f), l = !0
        },
        p(a, f) {
            a[2] ? r ? (r.p(a, f), f[0] & 4 && y(r, 1)) : (r = un(a), r.c(), y(r, 1), r.m(n.parentNode, n)) : r && (ae(), T(r, 1, 1, () => {
                r = null
            }), ie()), a[4] ? i ? (i.p(a, f), f[0] & 16 && y(i, 1)) : (i = fn(a), i.c(), y(i, 1), i.m(t.parentNode, t)) : i && (ae(), T(i, 1, 1, () => {
                i = null
            }), ie()), a[0] ? s ? (s.p(a, f), f[0] & 1 && y(s, 1)) : (s = pn(a), s.c(), y(s, 1), s.m(o.parentNode, o)) : s && (ae(), T(s, 1, 1, () => {
                s = null
            }), ie())
        },
        i(a) {
            l || (y(r), y(i), y(s), l = !0)
        },
        o(a) {
            T(r), T(i), T(s), l = !1
        },
        d(a) {
            r && r.d(a), a && S(n), i && i.d(a), a && S(t), s && s.d(a), a && S(o)
        }
    }
}

function Ft(e, n, t) {
    let o, l, r, i, s, a, f, u, v, k;
    ee(e, Ae, M => t(1, f = M)), ee(e, He, M => t(10, v = M));
    let {
        expanded: h
    } = n;
    const b = ne.select("accountCenter").pipe(ye(ne.get().accountCenter), Ce(1));
    ee(e, b, M => t(9, u = M));

    function m() {
        f.forEach(({
            label: M
        }) => An({
            label: M
        }))
    }
    const {
        chains: d
    } = ne.get();
    let _ = !1,
        w, C = !1;
    const $ = ne.select("appMetadata").pipe(ye(ne.get().appMetadata), Ce(1));
    ee(e, $, M => t(11, k = M));
    const {
        position: P
    } = ne.get().accountCenter, {
        device: B
    } = En, D = async () => {
        try {
            await Fn(o.provider, i, (i == null ? void 0 : i.protectedRpcUrl) || On), t(4, C = !1)
        } catch (M) {
            const {
                code: N
            } = M;
            console.log(M, N)
        }
    };

    function I(M) {
        Sn.call(this, e, M)
    }
    const H = () => t(2, _ = !1),
        W = () => t(4, C = !1),
        U = () => D();

    function J(M) {
        w = M, t(3, w)
    }
    const Y = () => Gn(),
        te = () => t(2, _ = !0),
        oe = () => t(4, C = !0);
    return e.$$set = M => {
        "expanded" in M && t(0, h = M.expanded)
    }, e.$$.update = () => {
        e.$$.dirty[0] & 2 && t(19, [o] = f, o), e.$$.dirty[0] & 524288 && t(20, [l] = o ? o.chains : [], l), e.$$.dirty[0] & 524288 && t(8, r = o && o.accounts.length && o.accounts[0].secondaryTokens), e.$$.dirty[0] & 1048576 && t(5, i = d.find(({
            id: M,
            namespace: N
        }) => l ? M === l.id && N === l.namespace : !1)), e.$$.dirty[0] & 1048576 && t(7, s = $n(l && l.id)), e.$$.dirty[0] & 1048576 && t(6, a = l && l.id === "0x1")
    }, [h, f, _, w, C, i, a, s, r, u, v, k, b, m, d, $, P, B, D, o, l, I, H, W, U, J, Y, te, oe]
}
class Vn extends pe {
    constructor(n) {
        super(), ve(this, n, Ft, Et, me, {
            expanded: 0
        }, Wt, [-1, -1])
    }
}

function Ot(e) {
    ge(e, "svelte-1xsvwqj", `.ac-trigger.svelte-1xsvwqj{--background-color:var(
      --account-center-minimized-background,
      var(--w3o-background-color, white)
    );--text-color:var(--w3o-text-color, var(--gray-700));--border-color:var(
      --account-center-border,
      var(--w3o-border-color, var(--onboard-gray-200, var(--gray-200)))
    );--border-radius:var(
      --account-center-border-radius,
      var(--w3o-border-radius, 1rem)
    );cursor:pointer;pointer-events:auto;width:100%;padding:0.5rem;border:1px solid;background:var(--background-color);color:var(--text-color);border-color:var(--border-color);border-radius:var(--border-radius);box-shadow:var(
      --account-center-box-shadow,
      var(--onboard-shadow-3, var(--shadow-3))
    );z-index:var(--account-center-z-index, 1)}.inner-row.svelte-1xsvwqj{display:flex;flex-flow:row nowrap;align-items:center;gap:0.5rem;padding:0 0.25rem}.wallet-info.svelte-1xsvwqj{display:flex;flex:1;flex-flow:column;height:2.5rem;overflow:hidden}.address.svelte-1xsvwqj{font-weight:600;line-height:1.25rem;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;color:var(--account-center-minimized-address-color, inherit)}.balance.svelte-1xsvwqj{font-weight:400;line-height:1.25rem;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;opacity:0.6;color:var(--account-center-minimized-balance-color, inherit)}.chain-icon-container.svelte-1xsvwqj{margin-right:4px}.container.svelte-1xsvwqj{border:1px solid transparent;border-radius:16px;padding:1px;transition:border-color 250ms ease-in-out, backround 250ms ease-in-out;max-width:128px;cursor:default}.drop-shadow.svelte-1xsvwqj{filter:drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.2))}`)
}

function yn(e) {
    let n, t = (e[5].length > 7 ? e[5].slice(0, 7) : e[5]) + "",
        o, l, r, i;
    return {
        c() {
            n = g("div"), o = q(t), l = z(), r = q(e[2]), p(n, "class", "balance svelte-1xsvwqj")
        },
        m(s, a) {
            A(s, n, a), c(n, o), c(n, l), c(n, r)
        },
        p(s, a) {
            a & 32 && t !== (t = (s[5].length > 7 ? s[5].slice(0, 7) : s[5]) + "") && V(o, t), a & 4 && V(r, s[2])
        },
        i(s) {
            s && (i || Te(() => {
                i = Pe(n, $e, {}), i.start()
            }))
        },
        o: Z,
        d(s) {
            s && S(n)
        }
    }
}

function Gt(e) {
    let n, t, o, l, r, i, s, a, f, u, v, k, h, b, m = (e[8] ? de(e[8]) : e[7] ? de(e[7]) : e[6]) + "",
        d, _, w, C, $, P, B, D, I, H, W, U, J, Y, te, oe;
    r = new he({
        props: {
            size: 32,
            padding: 4,
            background: "white",
            border: "darkGreen",
            radius: 8,
            icon: e[9] && e[9].icon || ze
        }
    }), a = new he({
        props: {
            size: 32,
            padding: 4,
            background: "green",
            border: "darkGreen",
            radius: 8,
            icon: e[1] ? e[1].icon : ""
        }
    }), v = new je({
        props: {
            size: 14
        }
    });
    let M = e[5] && yn(e);
    return D = new he({
        props: {
            size: 22,
            padding: 4,
            background: "custom",
            color: e[4] ? e[4].icon ? void 0 : "var(--onboard-primary-100, var(--primary-100))" : `var(
                    --account-center-chain-warning,
                    var(--onboard-warning-500, var(--warning-500))
                  )`,
            customBackgroundColor: e[4] ? e[4].color || e[3] && e[3].color || be.color : "var(--onboard-warning-200, var(--warning-200))",
            border: "transparent",
            radius: 25,
            icon: e[4] ? e[4].icon || e[3] && e[3].icon || be.icon : Se
        }
    }), H = new Hn({
        props: {
            chains: e[11],
            colorVar: "--account-center-minimized-network-selector-color",
            selectIcon: qn,
            parentCSSId: "minimized_ac"
        }
    }), {
        c() {
            n = g("div"), t = g("div"), o = g("div"), l = g("div"), F(r.$$.fragment), i = z(), s = g("div"), F(a.$$.fragment), f = z(), u = g("div"), F(v.$$.fragment), k = z(), h = g("div"), b = g("div"), d = q(m), _ = z(), M && M.c(), w = z(), C = g("div"), $ = g("div"), P = g("div"), B = g("div"), F(D.$$.fragment), I = z(), F(H.$$.fragment), p(l, "class", "drop-shadow svelte-1xsvwqj"), _e(s, "margin-left", "-0.5rem"), p(s, "class", "drop-shadow svelte-1xsvwqj"), _e(u, "right", "-4px"), _e(u, "bottom", "-4px"), p(u, "class", "drop-shadow absolute svelte-1xsvwqj"), p(o, "class", "flex relative"), p(b, "class", "address svelte-1xsvwqj"), p(h, "class", "wallet-info svelte-1xsvwqj"), p(B, "class", "chain-icon-container svelte-1xsvwqj"), p(P, "class", "flex items-center"), p($, "class", "container shadow-1 flex items-center svelte-1xsvwqj"), p($, "style", W = `border-color: var(${e[4]?"--onboard-primary-200, var(--primary-200)":"--onboard-warning-500, var(--warning-500)"}); background-color: var(${e[4]?"--account-center-minimized-chain-select-background, var(--primary-100)":"--account-center-minimized-chain-select-background-warning, var(--warning-100)"})`), p(C, "class", "network"), p(t, "class", "inner-row svelte-1xsvwqj"), p(n, "class", "ac-trigger svelte-1xsvwqj")
        },
        m(N, x) {
            A(N, n, x), c(n, t), c(t, o), c(o, l), O(r, l, null), c(o, i), c(o, s), O(a, s, null), c(o, f), c(o, u), O(v, u, null), c(t, k), c(t, h), c(h, b), c(b, d), c(h, _), M && M.m(h, null), c(t, w), c(t, C), c(C, $), c($, P), c(P, B), O(D, B, null), c(P, I), O(H, P, null), Y = !0, te || (oe = [K($, "click", fe(e[15])), K(n, "click", fe(function() {
                we(e[0]) && e[0].apply(this, arguments)
            }))], te = !0)
        },
        p(N, [x]) {
            e = N;
            const Me = {};
            x & 512 && (Me.icon = e[9] && e[9].icon || ze), r.$set(Me);
            const se = {};
            x & 2 && (se.icon = e[1] ? e[1].icon : ""), a.$set(se), (!Y || x & 448) && m !== (m = (e[8] ? de(e[8]) : e[7] ? de(e[7]) : e[6]) + "") && V(d, m), e[5] ? M ? (M.p(e, x), x & 32 && y(M, 1)) : (M = yn(e), M.c(), y(M, 1), M.m(h, null)) : M && (M.d(1), M = null);
            const R = {};
            x & 16 && (R.color = e[4] ? e[4].icon ? void 0 : "var(--onboard-primary-100, var(--primary-100))" : `var(
                    --account-center-chain-warning,
                    var(--onboard-warning-500, var(--warning-500))
                  )`), x & 24 && (R.customBackgroundColor = e[4] ? e[4].color || e[3] && e[3].color || be.color : "var(--onboard-warning-200, var(--warning-200))"), x & 24 && (R.icon = e[4] ? e[4].icon || e[3] && e[3].icon || be.icon : Se), D.$set(R), (!Y || x & 16 && W !== (W = `border-color: var(${e[4]?"--onboard-primary-200, var(--primary-200)":"--onboard-warning-500, var(--warning-500)"}); background-color: var(${e[4]?"--account-center-minimized-chain-select-background, var(--primary-100)":"--account-center-minimized-chain-select-background-warning, var(--warning-100)"})`)) && p($, "style", W)
        },
        i(N) {
            Y || (y(r.$$.fragment, N), y(a.$$.fragment, N), y(v.$$.fragment, N), y(M), y(D.$$.fragment, N), y(H.$$.fragment, N), N && Te(() => {
                !Y || (J && J.end(1), U = Pe(n, $e, {
                    duration: 250
                }), U.start())
            }), Y = !0)
        },
        o(N) {
            T(r.$$.fragment, N), T(a.$$.fragment, N), T(v.$$.fragment, N), T(D.$$.fragment, N), T(H.$$.fragment, N), U && U.invalidate(), J = Zn(n, $e, {
                duration: 100
            }), Y = !1
        },
        d(N) {
            N && S(n), G(r), G(a), G(v), M && M.d(), G(D), G(H), N && J && J.end(), te = !1, ke(oe)
        }
    }
}

function Zt(e, n, t) {
    let o, l, r, i, s, a, f, u, v, k, h, b;
    ee(e, Ae, C => t(14, h = C));
    let {
        toggle: m
    } = n;
    const d = ne.select("appMetadata").pipe(ye(ne.get().appMetadata), Ce(1));
    ee(e, d, C => t(9, b = C));
    const _ = ne.get().chains;

    function w(C) {
        Sn.call(this, e, C)
    }
    return e.$$set = C => {
        "toggle" in C && t(0, m = C.toggle)
    }, e.$$.update = () => {
        e.$$.dirty & 16384 && t(1, [o] = h, o), e.$$.dirty & 2 && t(13, [l] = o ? o.accounts : [], l), e.$$.dirty & 8192 && t(8, r = l && l.ens && de(l.ens.name)), e.$$.dirty & 8192 && t(7, i = l && l.uns && de(l.uns.name)), e.$$.dirty & 8192 && t(6, s = l ? Ve(l.address) : ""), e.$$.dirty & 8192 && t(2, [a] = l && l.balance ? Object.keys(l.balance) : [], a), e.$$.dirty & 8196 && t(5, f = l && l.balance ? l.balance[a] : null), e.$$.dirty & 2 && t(12, u = o && o.chains[0]), e.$$.dirty & 4096 && t(4, v = _.find(({
            id: C,
            namespace: $
        }) => u ? C === u.id && $ === u.namespace : !1)), e.$$.dirty & 4096 && t(3, k = $n(u && u.id))
    }, [m, o, a, k, v, f, s, i, r, b, d, _, u, l, h, w]
}
class Rt extends pe {
    constructor(n) {
        super(), ve(this, n, Zt, Gt, me, {
            toggle: 0
        }, Ot)
    }
}

function Ut(e) {
    ge(e, "svelte-1o9vinu", `.ac-trigger.svelte-1o9vinu{--background-color:var(
      --account-center-minimized-background,
      var(--w3o-background-color, white)
    );--text-color:var(--w3o-text-color, var(--gray-700));--border-color:var(
      --account-center-border,
      var(--w3o-border-color, var(--onboard-gray-200, var(--gray-200)))
    );--border-radius:var(
      --account-center-border-radius,
      var(--w3o-border-radius, 1rem)
    );position:relative;cursor:pointer;pointer-events:auto;min-width:80px;background:var(--background-color);color:var(--text-color);border:1px solid var(--border-color);border-radius:var(--border-radius);box-shadow:var(
      --account-center-box-shadow,
      var(--onboard-shadow-3, var(--shadow-3))
    );z-index:var(--account-center-z-index, 1)}.wallet-square-wrapper.svelte-1o9vinu{position:relative;margin-left:-8px}.check-icon-wrapper.svelte-1o9vinu{position:absolute;right:-4px;bottom:-4px}.inner-row.svelte-1o9vinu{display:flex;flex-flow:row nowrap;width:80px;padding:0.75rem}.drop-shadow.svelte-1o9vinu{filter:drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.2))}`)
}

function Jt(e) {
    let n, t, o, l, r, i, s, a, f, u, v, k, h, b, m;
    return l = new he({
        props: {
            size: 32,
            padding: 4,
            background: "white",
            border: "darkGreen",
            radius: 8,
            icon: e[3] && e[3].icon || ze
        }
    }), a = new he({
        props: {
            size: 32,
            padding: 4,
            background: "green",
            border: "darkGreen",
            radius: 8,
            icon: e[1] ? e[1].icon : ""
        }
    }), v = new je({
        props: {
            size: 14
        }
    }), {
        c() {
            n = g("div"), t = g("div"), o = g("div"), F(l.$$.fragment), r = z(), i = g("div"), s = g("div"), F(a.$$.fragment), f = z(), u = g("div"), F(v.$$.fragment), p(o, "class", "drop-shadow svelte-1o9vinu"), p(s, "class", "drop-shadow svelte-1o9vinu"), p(u, "class", "check-icon-wrapper drop-shadow svelte-1o9vinu"), p(i, "class", "wallet-square-wrapper svelte-1o9vinu"), p(t, "class", "inner-row svelte-1o9vinu"), p(n, "class", "ac-trigger svelte-1o9vinu"), p(n, "style", k = e[2].position.includes("Left") ? "align-self: flex-start" : null)
        },
        m(d, _) {
            A(d, n, _), c(n, t), c(t, o), O(l, o, null), c(t, r), c(t, i), c(i, s), O(a, s, null), c(i, f), c(i, u), O(v, u, null), h = !0, b || (m = K(n, "click", fe(function() {
                we(e[0]) && e[0].apply(this, arguments)
            })), b = !0)
        },
        p(d, [_]) {
            e = d;
            const w = {};
            _ & 8 && (w.icon = e[3] && e[3].icon || ze), l.$set(w);
            const C = {};
            _ & 2 && (C.icon = e[1] ? e[1].icon : ""), a.$set(C), (!h || _ & 4 && k !== (k = e[2].position.includes("Left") ? "align-self: flex-start" : null)) && p(n, "style", k)
        },
        i(d) {
            h || (y(l.$$.fragment, d), y(a.$$.fragment, d), y(v.$$.fragment, d), h = !0)
        },
        o(d) {
            T(l.$$.fragment, d), T(a.$$.fragment, d), T(v.$$.fragment, d), h = !1
        },
        d(d) {
            d && S(n), G(l), G(a), G(v), b = !1, m()
        }
    }
}

function Kt(e, n, t) {
    let o, l, r, i;
    ee(e, Ae, u => t(6, l = u));
    let {
        toggle: s
    } = n;
    const a = ne.select("appMetadata").pipe(ye(ne.get().appMetadata), Ce(1));
    ee(e, a, u => t(3, i = u));
    const f = ne.select("accountCenter").pipe(ye(ne.get().accountCenter), Ce(1));
    return ee(e, f, u => t(2, r = u)), e.$$set = u => {
        "toggle" in u && t(0, s = u.toggle)
    }, e.$$.update = () => {
        e.$$.dirty & 64 && t(1, [o] = l, o)
    }, [s, o, r, i, a, f, l]
}
class Qt extends pe {
    constructor(n) {
        super(), ve(this, n, Kt, Jt, me, {
            toggle: 0
        }, Ut)
    }
}

function Xt(e) {
    ge(e, "svelte-1nua59o", ".ac-container.svelte-1nua59o{display:flex;flex-flow:column;align-items:flex-end;gap:0.5rem}")
}

function Cn(e) {
    let n, t;
    return n = new Vn({
        props: {
            expanded: e[0]
        }
    }), {
        c() {
            F(n.$$.fragment)
        },
        m(o, l) {
            O(n, o, l), t = !0
        },
        p(o, l) {
            const r = {};
            l & 1 && (r.expanded = o[0]), n.$set(r)
        },
        i(o) {
            t || (y(n.$$.fragment, o), t = !0)
        },
        o(o) {
            T(n.$$.fragment, o), t = !1
        },
        d(o) {
            G(n, o)
        }
    }
}

function Yt(e) {
    let n, t;
    return n = new Rt({
        props: {
            toggle: e[4]
        }
    }), {
        c() {
            F(n.$$.fragment)
        },
        m(o, l) {
            O(n, o, l), t = !0
        },
        p: Z,
        i(o) {
            t || (y(n.$$.fragment, o), t = !0)
        },
        o(o) {
            T(n.$$.fragment, o), t = !1
        },
        d(o) {
            G(n, o)
        }
    }
}

function xt(e) {
    let n, t;
    return n = new Qt({
        props: {
            toggle: e[4]
        }
    }), {
        c() {
            F(n.$$.fragment)
        },
        m(o, l) {
            O(n, o, l), t = !0
        },
        p: Z,
        i(o) {
            t || (y(n.$$.fragment, o), t = !0)
        },
        o(o) {
            T(n.$$.fragment, o), t = !1
        },
        d(o) {
            G(n, o)
        }
    }
}

function zn(e) {
    let n, t;
    return n = new Vn({
        props: {
            expanded: e[0]
        }
    }), {
        c() {
            F(n.$$.fragment)
        },
        m(o, l) {
            O(n, o, l), t = !0
        },
        p(o, l) {
            const r = {};
            l & 1 && (r.expanded = o[0]), n.$set(r)
        },
        i(o) {
            t || (y(n.$$.fragment, o), t = !0)
        },
        o(o) {
            T(n.$$.fragment, o), t = !1
        },
        d(o) {
            G(n, o)
        }
    }
}

function eo(e) {
    let n, t = e[1].position.includes("bottom"),
        o, l, r, i, s = e[1].position.includes("top"),
        a, f, u, v = t && Cn(e);
    const k = [xt, Yt],
        h = [];

    function b(d, _) {
        return d[1].minimal ? 0 : 1
    }
    l = b(e), r = h[l] = k[l](e);
    let m = s && zn(e);
    return {
        c() {
            n = g("div"), v && v.c(), o = z(), r.c(), i = z(), m && m.c(), p(n, "class", "ac-container svelte-1nua59o")
        },
        m(d, _) {
            A(d, n, _), v && v.m(n, null), c(n, o), h[l].m(n, null), c(n, i), m && m.m(n, null), a = !0, f || (u = K(window, "click", e[3]), f = !0)
        },
        p(d, [_]) {
            _ & 2 && (t = d[1].position.includes("bottom")), t ? v ? (v.p(d, _), _ & 2 && y(v, 1)) : (v = Cn(d), v.c(), y(v, 1), v.m(n, o)) : v && (ae(), T(v, 1, 1, () => {
                v = null
            }), ie());
            let w = l;
            l = b(d), l === w ? h[l].p(d, _) : (ae(), T(h[w], 1, 1, () => {
                h[w] = null
            }), ie(), r = h[l], r ? r.p(d, _) : (r = h[l] = k[l](d), r.c()), y(r, 1), r.m(n, i)), _ & 2 && (s = d[1].position.includes("top")), s ? m ? (m.p(d, _), _ & 2 && y(m, 1)) : (m = zn(d), m.c(), y(m, 1), m.m(n, null)) : m && (ae(), T(m, 1, 1, () => {
                m = null
            }), ie())
        },
        i(d) {
            a || (y(v), y(r), y(m), a = !0)
        },
        o(d) {
            T(v), T(r), T(m), a = !1
        },
        d(d) {
            d && S(n), v && v.d(), h[l].d(), m && m.d(), f = !1, u()
        }
    }
}

function no(e, n, t) {
    let o, l = !1;
    const r = ne.select("accountCenter").pipe(ye(ne.get().accountCenter), Ce(1));
    ee(e, r, a => t(1, o = a)), In(i);

    function i() {
        o.expanded && (De({
            expanded: !1
        }), t(0, l = !1))
    }

    function s() {
        De({
            expanded: !o.expanded
        }), t(0, l = !l)
    }
    return [l, o, r, i, s]
}
class ro extends pe {
    constructor(n) {
        super(), ve(this, n, no, eo, me, {}, Xt)
    }
}
export {
    ro as
    default
};