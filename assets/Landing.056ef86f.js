import {
    _ as f,
    r as c,
    o as l,
    c as C,
    w as x,
    a as t,
    b as r,
    n as $,
    d as S,
    e as y,
    t as s,
    m as v,
    f as U,
    g as i,
    F as B,
    h as q,
    i as _e,
    j as ge,
    k as O,
    l as pe,
    p as be,
    q as we,
    s as D,
    B as V,
    u as ye,
    v as ke,
    x as ve,
    y as Ce,
    T as xe,
    z as ne
} from "./index.80e3cc9b.js";
const oe = "/graphics/logo.png",
    $e = {},
    Se = t("img", {
        class: "w-16 relative top-3",
        src: oe,
        alt: ""
    }, null, -1);

function Le(e, o) {
    const n = c("router-link");
    return l(), C(n, {
        to: "/#hero"
    }, {
        default: x(() => [Se]),
        _: 1
    })
}
const Me = f($e, [
        ["render", Le]
    ]),
    Be = {},
    Ne = {
        class: "fill-current h-3 w-3",
        viewBox: "0 0 20 20",
        xmlns: "http://www.w3.org/2000/svg"
    },
    Te = t("title", null, "Menu", -1),
    Fe = t("path", {
        d: "M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"
    }, null, -1),
    Re = [Te, Fe];

function Ve(e, o) {
    return l(), r("svg", Ne, Re)
}
const Ie = f(Be, [
    ["render", Ve]
]);
const Ee = {
        props: {
            text: String,
            link: String,
            type: String,
            size: String,
            inverted: Boolean,
            disabled: Boolean,
            icon: String,
            amount: String
        }
    },
    Ue = ["disabled"],
    De = ["src"],
    je = {
        class: "relative top-0.5"
    },
    Ae = {
        key: 0,
        class: "text-base relative -top-1 opacity-65"
    },
    He = ["src"],
    ze = {
        class: "relative top-0.5"
    },
    Oe = {
        key: 0,
        class: "text-base relative -top-1 opacity-65"
    };

function Pe(e, o, n, g, u, a) {
    const d = c("router-link");
    return n.link ? (l(), C(d, {
        key: 1,
        to: n.link,
        class: $(["main-button rounded-lg", {
            "btn-large": n.size == "large",
            "btn-small": n.size == "small",
            "btn-success": n.type == "success",
            "btn-error": n.type == "error",
            "btn-disabled": n.disabled,
            inverted: n.inverted,
            "icon-right": n.icon == "right",
            disabled: n.disabled
        }])
    }, {
        default: x(() => [t("img", {
            src: "/graphics/" + n.icon + ".png",
            alt: ""
        }, null, 8, He), t("span", ze, [y(s(n.text) + " ", 1), n.amount ? (l(), r("span", Oe, s(n.amount), 1)) : S("", !0)])]),
        _: 1
    }, 8, ["to", "class"])) : (l(), r("button", {
        key: 0,
        class: $(["main-button rounded-lg button-effect relative w-full", {
            "btn-large": n.size == "large",
            "btn-small": n.size == "small",
            "btn-success": n.type == "success",
            "btn-error": n.type == "error",
            "btn-disabled": n.disabled,
            inverted: n.inverted,
            "icon-right": n.icon == "right",
            disabled: n.disabled,
            connect: n.icon == "connect"
        }]),
        disabled: n.disabled
    }, [n.icon ? (l(), r("img", {
        key: 0,
        class: $({
            "absolute -left-9 w-16 top-1 bottom-0 my-auto": n.icon == "connect"
        }),
        src: "/graphics/" + n.icon + ".png",
        alt: ""
    }, null, 10, De)) : S("", !0), t("span", je, [y(s(n.text) + " ", 1), n.amount ? (l(), r("span", Ae, s(n.amount), 1)) : S("", !0)])], 10, Ue))
}
const N = f(Ee, [
        ["render", Pe]
    ]),
    se = "/graphics/social-telegram.png",
    le = "/graphics/social-x.png",
    ae = "/graphics/social-dextools.png",
    ie = "/graphics/social-basescan.png",
    We = {
        data() {
            return {
                open: !1
            }
        },
        components: {
            Logo: Me,
            MobileButton: Ie,
            Button: N
        },
        computed: { ...v(["isConnected", "buyOnDexUrl", "links", "userAddress", "tokenSymbol"]),
            headerLinks() {
                return [{
                    name: "Vision",
                    url: "/#vision"
                }, {
                    name: "Game Theory",
                    url: "/#mechanics"
                }, {
                    name: "Mullet Board",
                    url: "/#dashboard"
                }, {
                    name: "Community",
                    url: "/#community"
                }, {
                    name: "Tokenomics",
                    url: "/#tokenomics"
                }, {
                    name: `Buy ${this.tokenSymbol}`,
                    url: this.buyOnDexUrl,
                    external: !0
                }]
            }
        },
        methods: { ...U(["init", "disconnect"])
        }
    },
    Ye = {
        class: "logo flex items-center justify-between text-white lg:w-auto w-full"
    },
    qe = {
        class: "lg:flex hidden flex-col fixed top-24 gap-2"
    },
    Ge = ["href"],
    Ze = t("img", {
        src: se,
        alt: ""
    }, null, -1),
    Je = [Ze],
    Ke = ["href"],
    Qe = t("img", {
        src: le,
        alt: ""
    }, null, -1),
    Xe = [Qe],
    et = ["href"],
    tt = t("img", {
        src: ae,
        alt: ""
    }, null, -1),
    nt = [tt],
    ot = ["href"],
    st = t("img", {
        src: ie,
        alt: ""
    }, null, -1),
    lt = [st],
    at = {
        class: "flex w-full lg:flex-row flex-col gap-5"
    },
    it = ["href"],
    rt = _e('<div class="lg:hidden flex items-center justify-between my-6 gap-2"><a href="" class="w-10"><img src="' + se + '" alt=""></a><a href="" class="w-10"><img src="' + le + '" alt=""></a><a href="" class="w-10"><img src="' + ae + '" alt=""></a><a href="" class="w-10"><img src="' + ie + '" alt=""></a></div>', 1),
    ct = {
        class: "hidden lg:flex my-6"
    };

function dt(e, o, n, g, u, a) {
    const d = c("Logo"),
        m = c("MobileButton"),
        _ = c("router-link"),
        w = c("Button");
    return l(), r("nav", {
        class: $([u.open ? "open bg-nav lg:bg-transparent" : "close", "flex lg:flex-row flex-col items-center justify-between fixed z-4 top-0 left-0 w-full"])
    }, [t("div", Ye, [i(d), t("div", qe, [t("a", {
        href: e.links.telegram,
        target: "_blank",
        rel: "noopener noreferrer",
        class: "w-10"
    }, Je, 8, Ge), t("a", {
        href: e.links.twitter,
        target: "_blank",
        rel: "noopener noreferrer",
        class: "w-10"
    }, Xe, 8, Ke), t("a", {
        href: e.links.chart,
        target: "_blank",
        rel: "noopener noreferrer",
        class: "w-10"
    }, nt, 8, et), t("a", {
        href: e.links.explorer,
        target: "_blank",
        rel: "noopener noreferrer",
        class: "w-10"
    }, lt, 8, ot)]), t("button", {
        class: "lg:hidden flex text-black",
        onClick: o[0] || (o[0] = h => u.open = !u.open)
    }, [i(m)])]), t("div", {
        class: $([u.open ? "block sm:pt-10 pt-0 mt-5" : "hidden", "w-full h-full px-10 rounded-bl-3xl rounded-br-3xl lg:flex lg:items-center lg:w-auto gap-6 lg:pb-2 bg-nav"])
    }, [t("div", at, [(l(!0), r(B, null, q(a.headerLinks, h => (l(), r(B, {
        key: h
    }, [h.external ? (l(), r("a", {
        key: 0,
        href: h.url,
        target: "_blank",
        rel: "noopener noreferrer",
        class: "no-underline block lg:inline-block lg:mt-0 text-teal-lighter hover:text-white button-nav canaro-semibold"
    }, s(h.name), 9, it)) : (l(), C(_, {
        key: 1,
        to: h.url,
        class: "no-underline block lg:inline-block lg:mt-0 text-teal-lighter hover:text-white button-nav canaro-semibold"
    }, {
        default: x(() => [y(s(h.name), 1)]),
        _: 2
    }, 1032, ["to"]))], 64))), 128))]), rt], 2), t("div", ct, [e.isConnected ? (l(), C(w, {
        key: 1,
        onClick: e.disconnect,
        text: "Disconnect Wallet",
        icon: "connect",
        class: "bg-pink button-effect"
    }, null, 8, ["onClick"])) : (l(), C(w, {
        key: 0,
        onClick: e.init,
        text: "Connect Wallet",
        icon: "connect",
        class: "bg-lightBlue button-effect"
    }, null, 8, ["onClick"]))])], 2)
}
const ut = f(We, [
        ["render", dt]
    ]),
    mt = "/graphics/hero-circle.png",
    ht = "/graphics/hero-triangle.png",
    ft = {},
    _t = t("img", {
        src: mt,
        class: "absolute top-0 bottom-0 left-0 my-auto",
        alt: ""
    }, null, -1),
    gt = t("img", {
        src: ht,
        class: "absolute top-0 bottom-0 right-0 my-auto",
        alt: ""
    }, null, -1),
    pt = [_t, gt];

function bt(e, o) {
    return l(), r("div", null, pt)
}
const P = f(ft, [
        ["render", bt]
    ]),
    wt = "/graphics/copy.png",
    yt = {
        computed: { ...v(["tokenAddress"])
        },
        methods: {
            onCopy: ge
        }
    },
    kt = {
        class: "flex items-center justify-center gap-2 bg-white text-center box-effect py-2 canaro-bold px-6"
    },
    vt = {
        class: "relative top-0.5 sm:w-max w-48 whitespace-nowrap truncate"
    },
    Ct = t("img", {
        class: "h-5",
        src: wt,
        alt: ""
    }, null, -1),
    xt = [Ct];

function $t(e, o, n, g, u, a) {
    return l(), r("div", kt, [t("span", vt, s(e.tokenAddress), 1), t("button", {
        onClick: o[0] || (o[0] = d => a.onCopy(e.tokenAddress))
    }, xt)])
}
const re = f(yt, [
        ["render", $t]
    ]),
    ce = "/graphics/hero-message.png",
    St = "/graphics/hero.png",
    Lt = "/graphics/mullet.png",
    Mt = {
        components: {
            Button: N,
            BgEffect: P,
            Contract: re
        },
        computed: { ...v(["buyOnDexUrl", "nativeCurrencySymbol", "tokenSymbol", "totalRewardsFormatted", "totalRewardsUSDFormatted"])
        }
    },
    Bt = {
        id: "hero",
        class: "lg:h-screen min-h-hero w-full flex flex-col justify-start lg:justify-center items-center mx-auto px-4 relative pt-10"
    },
    Nt = t("div", {
        class: "flex lg:flex-row flex-col items-center w-full max-w-7xl -space-y-24 gap-10 relative z-2"
    }, [t("img", {
        src: ce,
        alt: "",
        class: "w-2/3 lg:w-1/2 object-contain"
    }), t("img", {
        src: St,
        alt: "",
        class: "w-2/3 lg:w-1/2 object-contain relative top-32 md:top-0 z-0"
    })], -1),
    Tt = {
        class: "flex lg:flex-row flex-col gap-5 max-w-7xl justify-start w-full relative z-1 mt-28 lg:mt-0"
    },
    Ft = {
        class: "flex flex-col gap-4"
    },
    Rt = t("div", {
        class: "flex items-center w-92 bg-yellow box-effect px-8 gap-5 py-2"
    }, [t("img", {
        src: oe,
        class: "object-contain w-32 -ml-12",
        alt: ""
    }), t("div", {
        class: "lg:text-2xl flex flex-col gap-2 leading-none"
    }, [t("img", {
        src: Lt,
        class: "w-80",
        alt: ""
    }), y(" More than a hairstyle, it's an identity ")])], -1),
    Vt = {
        class: "flex flex-col items-center justify-center w-92 bg-darkBlue box-effect pt-4 pb-6 px-8 gap-0"
    },
    It = {
        class: "canaro-black text-white text-effect text-5xl lg:text-6xl z-2 relative stroke-effect leading-none"
    },
    Et = t("h3", {
        class: "canaro-bold text-white leading-none text-2xl lg:text-3xl"
    }, [y(" GAME THEORY "), t("span", {
        class: "text-yellow"
    }, "REWARDS")], -1),
    Ut = ["href"];

function Dt(e, o, n, g, u, a) {
    const d = c("BgEffect"),
        m = c("Contract"),
        _ = c("Button");
    return l(), r("div", Bt, [i(d), Nt, t("div", Tt, [t("div", Ft, [Rt, i(m)]), t("div", Vt, [t("h2", It, s(e.totalRewardsFormatted) + " " + s(e.nativeCurrencySymbol), 1), Et, t("a", {
        href: e.buyOnDexUrl,
        target: "_blank",
        rel: "noopener noreferrer",
        class: "w-full"
    }, [i(_, {
        class: "bg-green text-black canaro-black large mt-2 w-full",
        size: "large",
        text: `BUY ${e.tokenSymbol}`,
        icon: "uniswap"
    }, null, 8, ["text"])], 8, Ut)])])])
}
const jt = f(Mt, [
        ["render", Dt]
    ]),
    At = {
        props: {
            title: String,
            subtitle: String
        }
    },
    Ht = {
        class: "max-w-section py-16 relative z-2"
    },
    zt = {
        class: "mb-5 text-center"
    },
    Ot = {
        class: "krungthep-title canaro-title w-full text-center uppercase flex justify-center mb-5 relative z-1 whitespace-pre leading-none text-wrap"
    },
    Pt = {
        class: "text-white text-center flex items-center justify-center"
    };

function Wt(e, o, n, g, u, a) {
    return l(), r("section", Ht, [t("div", zt, [t("h2", Ot, s(n.title), 1), t("span", Pt, [O(e.$slots, "subtitle")])]), O(e.$slots, "default")])
}
const I = f(At, [
        ["render", Wt]
    ]),
    Yt = {
        props: {
            name: {
                type: String
            },
            amount: {
                type: [Number, String]
            },
            image: {
                type: String
            },
            imageLink: {
                type: String
            },
            reverse: {
                type: Boolean,
                default: !1
            },
            white: {
                type: Boolean,
                default: !1
            }
        }
    },
    qt = ["href"],
    Gt = ["src"],
    Zt = ["src"],
    Jt = {
        class: "text-sm tracking-tighter"
    },
    Kt = {
        class: "text-4xl leading-none"
    };

function Qt(e, o, n, g, u, a) {
    return l(), r("div", {
        class: $([{
            "flex-row-reverse justify-between": n.reverse,
            "text-white": n.white
        }, "w-full box-effect flex p-4 items-center gap-5 text-xl canaro-bold"])
    }, [n.image ? (l(), r(B, {
        key: 0
    }, [n.imageLink ? (l(), r("a", {
        key: 0,
        href: n.imageLink,
        target: "_blank",
        rel: "noopener noreferrer"
    }, [t("img", {
        src: `/graphics/${n.image}.png`,
        class: "h-20",
        alt: ""
    }, null, 8, Gt)], 8, qt)) : (l(), r("img", {
        key: 1,
        src: `/graphics/${n.image}.png`,
        class: "h-20",
        alt: ""
    }, null, 8, Zt))], 64)) : S("", !0), t("div", {
        class: $({
            "text-white": n.white
        })
    }, [t("span", Jt, s(n.name), 1), t("h3", Kt, s(n.amount), 1)], 2)], 2)
}
const de = f(Yt, [
        ["render", Qt]
    ]),
    Xt = "/graphics/connect.png",
    en = {
        name: "Wallet",
        components: {},
        computed: { ...v(["userAddress"])
        },
        methods: {
            getShortAddress: pe
        }
    },
    tn = {
        class: "flex items-center h-auto gap-3"
    },
    nn = t("img", {
        src: Xt,
        class: "h-7",
        alt: ""
    }, null, -1),
    on = {
        class: "text-sm canaro-bold text-black relative top-0.5"
    };

function sn(e, o, n, g, u, a) {
    return l(), r("div", tn, [nn, t("h1", on, " Welcome, " + s(a.getShortAddress(e.userAddress)), 1)])
}
const ue = f(en, [
    ["render", sn]
]); /*! vue-countdown v2.1.2 | (c) 2018-present Chen Fengyuan | MIT */
const A = 1e3,
    H = 60 * A,
    z = 60 * H,
    J = 24 * z,
    K = "abort",
    Q = "end",
    X = "progress",
    ee = "start",
    te = "visibilitychange";
var ln = be({
    name: "VueCountdown",
    props: {
        autoStart: {
            type: Boolean,
            default: !0
        },
        emitEvents: {
            type: Boolean,
            default: !0
        },
        interval: {
            type: Number,
            default: 1e3,
            validator: e => e >= 0
        },
        now: {
            type: Function,
            default: () => Date.now()
        },
        tag: {
            type: String,
            default: "span"
        },
        time: {
            type: Number,
            default: 0,
            validator: e => e >= 0
        },
        transform: {
            type: Function,
            default: e => e
        }
    },
    emits: [K, Q, X, ee],
    data() {
        return {
            counting: !1,
            endTime: 0,
            totalMilliseconds: 0,
            requestId: 0
        }
    },
    computed: {
        days() {
            return Math.floor(this.totalMilliseconds / J)
        },
        hours() {
            return Math.floor(this.totalMilliseconds % J / z)
        },
        minutes() {
            return Math.floor(this.totalMilliseconds % z / H)
        },
        seconds() {
            return Math.floor(this.totalMilliseconds % H / A)
        },
        milliseconds() {
            return Math.floor(this.totalMilliseconds % A)
        },
        totalDays() {
            return this.days
        },
        totalHours() {
            return Math.floor(this.totalMilliseconds / z)
        },
        totalMinutes() {
            return Math.floor(this.totalMilliseconds / H)
        },
        totalSeconds() {
            return Math.floor(this.totalMilliseconds / A)
        }
    },
    watch: {
        $props: {
            deep: !0,
            immediate: !0,
            handler() {
                this.totalMilliseconds = this.time, this.endTime = this.now() + this.time, this.autoStart && this.start()
            }
        }
    },
    mounted() {
        document.addEventListener(te, this.handleVisibilityChange)
    },
    beforeUnmount() {
        document.removeEventListener(te, this.handleVisibilityChange), this.pause()
    },
    methods: {
        start() {
            this.counting || (this.counting = !0, this.autoStart || (this.totalMilliseconds = this.time, this.endTime = this.now() + this.time), this.emitEvents && this.$emit(ee), document.visibilityState === "visible" && this.continue())
        },
        continue () {
            if (!this.counting) return;
            const e = Math.min(this.totalMilliseconds, this.interval);
            if (e > 0) {
                let o, n;
                const g = u => {
                    o || (o = u), n || (n = u);
                    const a = u - o;
                    a >= e || a + (u - n) / 2 >= e ? this.progress() : this.requestId = requestAnimationFrame(g), n = u
                };
                this.requestId = requestAnimationFrame(g)
            } else this.end()
        },
        pause() {
            cancelAnimationFrame(this.requestId)
        },
        progress() {
            !this.counting || (this.update(), this.emitEvents && this.totalMilliseconds > 0 && this.$emit(X, {
                days: this.days,
                hours: this.hours,
                minutes: this.minutes,
                seconds: this.seconds,
                milliseconds: this.milliseconds,
                totalDays: this.totalDays,
                totalHours: this.totalHours,
                totalMinutes: this.totalMinutes,
                totalSeconds: this.totalSeconds,
                totalMilliseconds: this.totalMilliseconds
            }), this.continue())
        },
        abort() {
            !this.counting || (this.pause(), this.counting = !1, this.emitEvents && this.$emit(K))
        },
        end() {
            !this.counting || (this.pause(), this.totalMilliseconds = 0, this.counting = !1, this.emitEvents && this.$emit(Q))
        },
        update() {
            this.counting && (this.totalMilliseconds = Math.max(0, this.endTime - this.now()))
        },
        restart() {
            this.pause(), this.totalMilliseconds = this.time, this.endTime = this.now() + this.time, this.counting = !1, this.start()
        },
        handleVisibilityChange() {
            switch (document.visibilityState) {
                case "visible":
                    this.update(), this.continue();
                    break;
                case "hidden":
                    this.pause();
                    break
            }
        }
    },
    render() {
        return we(this.tag, this.$slots.default ? [this.$slots.default(this.transform({
            days: this.days,
            hours: this.hours,
            minutes: this.minutes,
            seconds: this.seconds,
            milliseconds: this.milliseconds,
            totalDays: this.totalDays,
            totalHours: this.totalHours,
            totalMinutes: this.totalMinutes,
            totalSeconds: this.totalSeconds,
            totalMilliseconds: this.totalMilliseconds
        }))] : void 0)
    }
});
const an = {},
    rn = {
        xmlns: "http://www.w3.org/2000/svg",
        width: "45",
        height: "46",
        viewBox: "0 0 45 46",
        fill: "none"
    },
    cn = t("g", {
        "clip-path": "url(#clip0_124_423)"
    }, [t("path", {
        d: "M11.25 16.5H12.25V15.5C12.25 12.7815 13.3299 10.1744 15.2522 8.25216C17.1744 6.32991 19.7815 5.25 22.5 5.25C25.2185 5.25 27.8256 6.32991 29.7478 8.25216C31.6701 10.1744 32.75 12.7815 32.75 15.5V16.5H33.75H35.625C36.3543 16.5 37.0538 16.7897 37.5695 17.3055C38.0853 17.8212 38.375 18.5207 38.375 19.25V38C38.375 38.7293 38.0853 39.4288 37.5695 39.9445C37.0538 40.4603 36.3543 40.75 35.625 40.75H9.375C8.64565 40.75 7.94618 40.4603 7.43046 39.9445C6.91473 39.4288 6.625 38.7293 6.625 38V19.25C6.625 18.5207 6.91473 17.8212 7.43046 17.3055C7.94618 16.7897 8.64566 16.5 9.375 16.5H11.25ZM30 16.5H31V15.5C31 13.2457 30.1045 11.0837 28.5104 9.48959C26.9163 7.89553 24.7543 7 22.5 7C20.2457 7 18.0837 7.89553 16.4896 9.48959C14.8955 11.0837 14 13.2457 14 15.5V16.5H15H30ZM22.5 22H22.5C21.4544 22 20.438 22.3451 19.6085 22.9816C18.779 23.6182 18.1826 24.5106 17.912 25.5206C17.6414 26.5306 17.7116 27.6016 18.1117 28.5676C18.4348 29.3478 18.9585 30.0242 19.625 30.531V32.375C19.625 33.1375 19.9279 33.8688 20.4671 34.4079C21.0062 34.9471 21.7375 35.25 22.5 35.25C23.2625 35.25 23.9938 34.9471 24.5329 34.4079C25.0721 33.8688 25.375 33.1375 25.375 32.375V30.531C25.8755 30.1504 26.2972 29.673 26.6136 29.125C27.0305 28.4029 27.25 27.5838 27.25 26.75C27.25 25.4902 26.7496 24.282 25.8588 23.3912C24.968 22.5004 23.7598 22 22.5 22Z",
        fill: "#F7EC78",
        stroke: "black",
        "stroke-width": "2"
    })], -1),
    dn = t("defs", null, [t("clipPath", {
        id: "clip0_124_423"
    }, [t("rect", {
        width: "45",
        height: "45",
        fill: "white",
        transform: "translate(0 0.5)"
    })])], -1),
    un = [cn, dn];

function mn(e, o) {
    return l(), r("svg", rn, un)
}
const hn = f(an, [
        ["render", mn]
    ]),
    fn = {},
    _n = {
        xmlns: "http://www.w3.org/2000/svg",
        width: "44",
        height: "45",
        viewBox: "0 0 44 45",
        fill: "none"
    },
    gn = t("g", {
        "clip-path": "url(#clip0_124_431)"
    }, [t("path", {
        d: "M34.4907 6.31899L34.4908 6.31844C34.5192 6.21272 34.5264 6.10246 34.5122 5.99394C34.4979 5.88542 34.4624 5.78078 34.4077 5.68598C34.353 5.59118 34.2801 5.50809 34.1933 5.44146C34.1065 5.37484 34.0074 5.32598 33.9018 5.29764L34.4907 6.31899ZM34.4907 6.31899L34.2542 7.20265L34.253 7.20719M34.4907 6.31899L34.253 7.20719M34.253 7.20719C34.2251 7.31335 34.1765 7.41296 34.11 7.5003C34.0435 7.58763 33.9605 7.66097 33.8655 7.71611L34.3678 8.5808M34.253 7.20719L34.3678 8.5808M34.3678 8.5808L33.8655 7.71611C33.7706 7.77124 33.6658 7.80708 33.557 7.82157C33.4482 7.83606 33.3376 7.82891 33.2315 7.80054C33.1255 7.77216 33.0261 7.72312 32.9391 7.65623L32.3297 8.44907L32.9391 7.65623C32.8521 7.58934 32.7791 7.50592 32.7244 7.41075C32.6697 7.31558 32.6344 7.21055 32.6204 7.10168C32.6064 6.99281 32.6141 6.88226 32.643 6.77636L32.6438 6.77326M34.3678 8.5808L32.6438 6.77326M32.6438 6.77326L32.8821 5.88776L32.8824 5.88696M32.6438 6.77326L32.8824 5.88696M32.8824 5.88696C32.9396 5.67363 33.0792 5.49175 33.2704 5.38127M32.8824 5.88696L33.2704 5.38127M33.2704 5.38127C33.4615 5.27092 33.6885 5.24084 33.9016 5.2976L33.2704 5.38127ZM26.9984 6.50578L27.0172 6.51669L27.0365 6.52677C27.1361 6.57887 27.2241 6.65057 27.2952 6.73756C27.3664 6.82456 27.4192 6.92505 27.4505 7.033C27.4819 7.14093 27.491 7.25409 27.4775 7.36566C27.4639 7.47723 27.4279 7.58491 27.3717 7.68221C27.3154 7.77952 27.2401 7.86444 27.1502 7.93186C27.0603 7.9993 26.9576 8.04784 26.8485 8.07458C26.7393 8.10132 26.6259 8.1057 26.515 8.08746C26.4041 8.06922 26.298 8.02873 26.2031 7.96844L26.1851 7.95699L26.1667 7.94633C24.8995 7.21476 23.4622 6.8297 21.999 6.82987C20.5359 6.83005 19.0986 7.21545 17.8316 7.94732C16.5647 8.67919 15.5128 9.73173 14.7816 10.9991C14.0505 12.2665 13.666 13.704 13.6667 15.1672L13.6671 16.1666L14.6666 16.1667L34.8332 16.1685H34.8333C35.5406 16.1685 36.2189 16.4495 36.719 16.9496C37.219 17.4497 37.5 18.1279 37.5 18.8352V37.1685C37.5 37.8758 37.219 38.554 36.719 39.0541C36.2189 39.5542 35.5406 39.8352 34.8333 39.8352H9.16667C8.45942 39.8352 7.78114 39.5542 7.28105 39.0541C6.78095 38.554 6.5 37.8758 6.5 37.1685V18.8334C6.5 18.1261 6.78095 17.4478 7.28105 16.9477L6.57394 16.2406L7.28105 16.9477C7.78115 16.4476 8.45942 16.1667 9.16667 16.1667H11H12V15.1667C12 12.5145 13.0536 9.97098 14.9289 8.09562C16.8043 6.22026 19.3478 5.16669 22 5.16669C23.8198 5.16669 25.5283 5.65335 26.9984 6.50578ZM22 21.5H22C20.9727 21.5001 19.9742 21.8391 19.1592 22.4644C18.3442 23.0898 17.7584 23.9666 17.4925 24.9589C17.2266 25.9511 17.2956 27.0034 17.6887 27.9524C18.0047 28.7155 18.516 29.3775 19.1667 29.8747V31.6667C19.1667 32.4181 19.4652 33.1388 19.9965 33.6702C20.5279 34.2015 21.2486 34.5 22 34.5C22.7514 34.5 23.4721 34.2015 24.0035 33.6702C24.5348 33.1388 24.8333 32.4181 24.8333 31.6667V29.8747C25.484 29.3775 25.9953 28.7155 26.3113 27.9524C26.7044 27.0034 26.7734 25.9511 26.5075 24.9588C26.2416 23.9666 25.6558 23.0898 24.8408 22.4644C24.0258 21.8391 23.0273 21.5001 22 21.5ZM36.2623 10.6724L38.0041 11.1412C38.2025 11.2076 38.3689 11.3463 38.4699 11.53L39.3462 11.0483L38.4699 11.53C38.5735 11.7185 38.6002 11.9398 38.5445 12.1475C38.4887 12.3552 38.3548 12.5333 38.1708 12.6446C37.9913 12.7531 37.7778 12.7898 37.5728 12.7479L35.8315 12.2824C35.8309 12.2822 35.8303 12.2821 35.8297 12.2819C35.6179 12.2236 35.4376 12.0841 35.3282 11.8936C35.2184 11.7026 35.1887 11.4758 35.2457 11.263C35.3026 11.0501 35.4416 10.8685 35.6321 10.7578C35.8219 10.6475 36.0476 10.6167 36.26 10.6718C36.2608 10.672 36.2616 10.6722 36.2623 10.6724Z",
        fill: "#F8FF6D",
        stroke: "black",
        "stroke-width": "2"
    })], -1),
    pn = t("defs", null, [t("clipPath", {
        id: "clip0_124_431"
    }, [t("rect", {
        width: "44",
        height: "44",
        fill: "white",
        transform: "translate(0 0.5)"
    })])], -1),
    bn = [gn, pn];

function wn(e, o) {
    return l(), r("svg", _n, bn)
}
const yn = f(fn, [
        ["render", wn]
    ]),
    kn = {},
    vn = {
        xmlns: "http://www.w3.org/2000/svg",
        width: "54",
        height: "54",
        viewBox: "0 0 54 54",
        fill: "none"
    },
    Cn = t("path", {
        d: "M28.194 12.7168L28.1946 12.7168C30.6011 12.9178 32.9178 13.7236 34.9296 15.0593C36.9414 16.395 38.5832 18.2174 39.7024 20.3572C40.8217 22.497 41.3821 24.8849 41.3318 27.2993C41.2814 29.7136 40.6219 32.0761 39.4144 34.1674C38.2069 36.2587 36.4906 38.0111 34.4249 39.2617C32.3591 40.5124 30.0108 41.2209 27.598 41.3213C25.1852 41.4218 22.7862 40.9111 20.6236 39.8365C18.461 38.762 16.6049 37.1584 15.2277 35.1748L15.2259 35.1722C15.1851 35.1138 15.1493 35.0625 15.1175 35.0163C15.1748 34.9825 15.2393 34.9451 15.3141 34.9018L15.328 34.8937L15.3294 34.8929L26.8588 28.2353C26.8593 28.235 26.8599 28.2347 26.8604 28.2344C26.8681 28.23 26.8759 28.2255 26.8837 28.221C27.0173 28.1445 27.1736 28.0549 27.3039 27.9617C27.4594 27.8506 27.6406 27.6925 27.7791 27.4516C27.9185 27.2114 27.9653 26.9754 27.9842 26.7852C28.0002 26.6253 28.0001 26.4446 28 26.2901C28 26.2804 28 26.2709 28 26.2614V12.9444C28 12.8513 28 12.7715 28.0006 12.7009C28.0576 12.7054 28.1213 12.7107 28.194 12.7168Z",
        fill: "#76B5F9",
        stroke: "black",
        "stroke-width": "2"
    }, null, -1),
    xn = t("path", {
        d: "M27 50C39.7025 50 50 39.7025 50 27C50 14.2975 39.7025 4 27 4C14.2975 4 4 14.2975 4 27C4 39.7025 14.2975 50 27 50Z",
        stroke: "black",
        "stroke-width": "5"
    }, null, -1),
    $n = [Cn, xn];

function Sn(e, o) {
    return l(), r("svg", vn, $n)
}
const Ln = f(kn, [
        ["render", Sn]
    ]),
    Mn = {
        name: "Payback",
        components: {
            Button: N,
            VueCountdown: ln,
            IconLock: hn,
            IconUnlock: yn,
            IconTimer: Ln
        },
        computed: { ...D({
                minLockupTimeSeconds: ({
                    main: e
                }) => e.gameTheoryRewardsData && e.gameTheoryRewardsData.MIN_LOCKUP_TIME || 0
            }),
            ...v(["nativeCurrencySymbol", "tokenSymbol", "userLastClaimAmtFormatted", "userLastClaimUnix", "userUnclaimedRewardsFixed", "userUnclaimedRewardsFormatted"]),
            unlockedIn() {
                const o = this.$dayjs.unix(this.userLastClaimUnix).add(this.minLockupTimeSeconds, "seconds");
                return o.diff(this.$dayjs.utc()) > 0 ? o.diff(this.$dayjs.utc()) : 0
            }
        },
        methods: { ...U(["payBackLastClaim"]),
            async payback() {
                try {
                    if (new V(this.userUnclaimedRewardsFixed).gt(0) && !(await this.$swal.fire({
                            customClass: {
                                confirmButton: "main-button",
                                cancelButton: "main-button"
                            },
                            iconHtml: "<img src='/graphics/market-cap.png' />",
                            title: "Forfeiting Unclaimed",
                            text: `Paying back rewards to unlock your ${this.tokenSymbol} also forfeits your unclaimed rewards which are currently ${this.userUnclaimedRewardsFormatted} ${this.nativeCurrencySymbol}. Are you sure you want to pay back your last claim and forfeit your unclaimed rewards?`,
                            icon: "warning",
                            showCancelButton: !0,
                            confirmButtonText: `Yes, pay back & unlock my ${this.tokenSymbol}`
                        })).isConfirmed) return;
                    await this.payBackLastClaim()
                } catch (e) {
                    this.$notify({
                        type: "error",
                        text: e.message
                    })
                }
            }
        }
    },
    Bn = {
        class: "flex flex-col items-start w-full p-5 bg-pink rounded-lg border-4 border-black mt-5 gap-5"
    },
    Nn = {
        class: "flex sm:flex-row flex-col sm:gap-0 gap-5 items-center justify-between w-full"
    },
    Tn = {
        class: "flex items-center gap-3.5"
    },
    Fn = {
        class: "text-black canaro-bold text-2xl relative top-1.5"
    },
    Rn = {
        class: "flex items-center gap-3.5"
    };

function Vn(e, o, n, g, u, a) {
    const d = c("IconLock"),
        m = c("IconTimer"),
        _ = c("vue-countdown"),
        w = c("Button");
    return l(), r("div", Bn, [t("div", Nn, [t("div", Tn, [i(d), t("span", Fn, " Your Wallet's " + s(e.tokenSymbol) + " are Locked ", 1)]), t("div", Rn, [i(m, {
        class: "h-10 w-10"
    }), i(_, {
        time: a.unlockedIn,
        class: "text-2xl relative top-1"
    }, {
        default: x(({
            days: h,
            hours: b,
            minutes: p,
            seconds: T
        }) => [y(" Minimum Lockup Countdown: " + s(h) + "d " + s(b) + "h " + s(p) + "m " + s(T) + "s ", 1)]),
        _: 1
    }, 8, ["time"])])]), i(w, {
        text: "Unlock by Paying Back Last Claim",
        amount: `(${e.userLastClaimAmtFormatted} ${e.nativeCurrencySymbol})`,
        size: "large",
        class: "bg-yellow canaro-black",
        icon: "unlock",
        onClick: a.payback
    }, null, 8, ["amount", "onClick"])])
}
const In = f(Mn, [
        ["render", Vn]
    ]),
    En = "/x-spread.png",
    Un = "/flowchart.png",
    Dn = {
        components: {
            Section: I,
            BoardBlock: de,
            Button: N,
            Wallet: ue,
            Payback: In
        },
        computed: { ...D({
                isUnlocked: ({
                    main: e
                }) => e.gameTheoryRewardsUserData && e.gameTheoryRewardsUserData.isUnlocked
            }),
            ...v(["isConnected", "userAddress", "nativeCurrencySymbol", "tokenSymbol", "tokenMarketCapUSDFormatted", "tokensLockedFormatted", "totalRewardsUSDFormatted", "canClaimRewardsFromFirstClaimDelay", "firstClaimTimeLocal", "userLastClaimAmtFormatted", "userLastClaimAmtUSDFormatted", "userTotalRewardsFormatted", "userTotalRewardsUSDFormatted", "userUnclaimedRewardsFixed", "userUnclaimedRewardsFormatted", "userUnclaimedRewardsUSDFormatted", "userTokenBalanceFormatted", "totalHolders", "tweetBtnText"]),
            claimRewBtnText() {
                return this.canClaimRewardsFromFirstClaimDelay ? `Claim ${this.nativeCurrencySymbol} Rewards` : `First claim at ${this.firstClaimTimeLocal}`
            },
            hasUnclaimedRewards() {
                return this.userUnclaimedRewardsFixed && new V(this.userUnclaimedRewardsFixed).gt(0)
            }
        },
        methods: { ...U(["init", "disconnect", "claimRewards"]),
            formatNumberCompact: ye,
            async claimGameTheoryRewards(e) {
                try {
                    if (e && !this.isUnlocked && !(await this.$swal.fire({
                            customClass: {
                                confirmButton: "main-button",
                                cancelButton: "main-button"
                            },
                            iconHtml: "<img src='/graphics/market-cap.png' />",
                            title: "Compounding While Locked",
                            text: `Compounding your rewards while locked will add ${this.userUnclaimedRewardsFormatted} ${this.nativeCurrencySymbol} to the amount you need to accumulate or pay back (currently ${this.userLastClaimAmtFormatted} ${this.nativeCurrencySymbol}) to unlock your ${this.tokenSymbol} later.`,
                            icon: "success",
                            showCancelButton: !0,
                            confirmButtonText: "Compound my rewards!"
                        })).isConfirmed) return;
                    await this.claimRewards(e), this.$notify({
                        type: "success",
                        text: "Successfully claimed your rewards!"
                    })
                } catch (o) {
                    this.$notify({
                        type: "error",
                        text: o.message
                    })
                }
            }
        }
    },
    jn = {
        id: "dashboard",
        class: "dots bg-lightYellow relative"
    },
    An = {
        class: "flex flex-col lg:flex-row gap-5 w-full"
    },
    Hn = {
        class: "mt-10"
    },
    zn = {
        class: "flex flex-col lg:flex-row justify-between items-center bg-yellow px-5 py-3 border-4 border-black text-xl"
    },
    On = {
        class: "canaro-black"
    },
    Pn = {
        class: "bg-white border-4 border-t-0 border-black py-9 lg:py-16 px-8 lg:px-10"
    },
    Wn = ["href"],
    Yn = t("img", {
        class: "h-7",
        src: En
    }, null, -1),
    qn = [Yn],
    Gn = {
        class: "grid grid-cols-1 lg:grid-cols-3 gap-7 mt-2 mb-7"
    },
    Zn = {
        class: "border-blue bg-green bg-opacity-20 border-2 p-4 flex flex-col box-effect-gray text-2xl"
    },
    Jn = t("span", null, "Your Unclaimed Rewards", -1),
    Kn = {
        class: "canaro-semibold text-5xl leading-none"
    },
    Qn = {
        class: "border-orange border-2 p-4 flex flex-col box-effect-gray text-2xl"
    },
    Xn = t("span", null, "Your Last Claim", -1),
    eo = {
        class: "canaro-semibold text-5xl leading-none"
    },
    to = {
        class: "border-blue border-2 p-4 flex flex-col box-effect-gray text-2xl"
    },
    no = t("span", null, "Your Aggregate Rewards", -1),
    oo = {
        class: "canaro-semibold text-5xl leading-none"
    },
    so = {
        class: "flex border-t mt-10 pt-6 text-gray-500"
    },
    lo = t("br", null, null, -1),
    ao = t("br", null, null, -1),
    io = t("br", null, null, -1),
    ro = t("br", null, null, -1),
    co = t("div", null, [t("div", {
        class: "mt-4 p-4 border rounded-2xl lg:w-2/3 m-auto"
    }, [t("img", {
        class: "object-contain",
        src: Un
    })])], -1);

function uo(e, o, n, g, u, a) {
    const d = c("BoardBlock"),
        m = c("Wallet"),
        _ = c("Button"),
        w = c("Payback"),
        h = c("Section");
    return l(), r("div", jn, [i(h, {
        title: "mullet board"
    }, {
        default: x(() => [t("div", An, [i(d, {
            image: "holders",
            name: `${e.tokenSymbol} Holders`,
            amount: e.totalHolders,
            class: "bg-yellow"
        }, null, 8, ["name", "amount"]), i(d, {
            image: "market-cap",
            name: "Market Cap",
            amount: `$${e.tokenMarketCapUSDFormatted}`,
            class: "bg-blue",
            white: ""
        }, null, 8, ["amount"]), i(d, {
            image: "eth",
            name: "Total Rewards",
            amount: `$${e.totalRewardsUSDFormatted}`,
            class: "bg-green"
        }, null, 8, ["amount"]), i(d, {
            image: "locked",
            name: `${e.tokenSymbol} Locked`,
            amount: e.tokensLockedFormatted,
            class: "bg-darkPink",
            white: ""
        }, null, 8, ["name", "amount"])]), t("div", Hn, [t("div", zn, [t("div", null, [y(" Your wallet balance: "), t("span", On, s(e.isConnected ? e.userTokenBalanceFormatted : "...") + " " + s(e.tokenSymbol), 1)]), t("div", null, [i(m)])]), t("div", Pn, [e.isConnected ? (l(), r(B, {
            key: 0
        }, [t("div", null, [t("a", {
            class: "twitter-share-button",
            href: `https://twitter.com/intent/tweet?text=${e.tweetBtnText}`,
            target: "_blank",
            rel: "noopener noreferrer",
            "data-size": "large"
        }, qn, 8, Wn)]), t("div", Gn, [t("div", Zn, [Jn, t("b", Kn, s(e.userUnclaimedRewardsFormatted) + " " + s(e.nativeCurrencySymbol), 1), t("small", null, " \u2248 $" + s(e.userUnclaimedRewardsUSDFormatted), 1)]), t("div", Qn, [Xn, t("b", eo, s(e.userLastClaimAmtFormatted) + " " + s(e.nativeCurrencySymbol), 1), t("small", null, "\u2248 $" + s(e.userLastClaimAmtUSDFormatted), 1)]), t("div", to, [no, t("b", oo, s(e.userTotalRewardsFormatted) + " " + s(e.nativeCurrencySymbol), 1), t("small", null, "\u2248 $" + s(e.userTotalRewardsUSDFormatted), 1)])])], 64)) : S("", !0), e.isConnected ? (l(), r(B, {
            key: 2
        }, [e.isUnlocked ? (l(), C(_, {
            key: 0,
            onClick: o[0] || (o[0] = b => a.claimGameTheoryRewards(!1)),
            disabled: !a.hasUnclaimedRewards || !e.canClaimRewardsFromFirstClaimDelay,
            text: a.claimRewBtnText,
            size: "large",
            class: "bg-yellow canaro-black w-full",
            icon: "collect"
        }, null, 8, ["disabled", "text"])) : (l(), C(w, {
            key: 1
        })), e.canClaimRewardsFromFirstClaimDelay && a.hasUnclaimedRewards ? (l(), C(_, {
            key: 2,
            onClick: o[1] || (o[1] = b => a.claimGameTheoryRewards(!0)),
            text: `Compound ${e.nativeCurrencySymbol} Rewards to ${e.tokenSymbol}`,
            size: "large",
            class: "mt-4 bg-green canaro-black w-full",
            icon: "collect"
        }, null, 8, ["text"])) : S("", !0)], 64)) : (l(), C(_, {
            key: 1,
            onClick: e.init,
            text: "Connect Wallet",
            size: "large",
            class: "bg-lightBlue canaro-black",
            icon: "collect"
        }, null, 8, ["onClick"])), t("span", so, [y(" Game theory " + s(e.nativeCurrencySymbol) + " rewards are continuously accumulated through " + s(e.tokenSymbol) + " trading. As long as you're holding " + s(e.tokenSymbol) + ", you're accumulating " + s(e.nativeCurrencySymbol) + ". If you transfer " + s(e.tokenSymbol) + " to another wallet or sell, any unclaimed rewards are distributed to all other " + s(e.tokenSymbol) + " holders. If you decide to claim your unclaimed rewards, " + s(e.nativeCurrencySymbol) + " is instantly delivered to your wallet, however at that time all of your " + s(e.tokenSymbol) + " becomes locked for a minimum duration of 3 days. Your " + s(e.tokenSymbol) + " will be unlocked once 3 days have passed and your newly accumulated unclaimed " + s(e.nativeCurrencySymbol) + " rewards reach or exceed the last " + s(e.nativeCurrencySymbol) + " rewards you claimed. ", 1), lo, ao, y(" If at any time your " + s(e.tokenSymbol) + " are locked from claiming rewards and you'd like to unlock them, you can pay back the most recent amount of " + s(e.nativeCurrencySymbol) + " you claimed. This paid back " + s(e.nativeCurrencySymbol) + " and all newly accumulated unclaimed rewards are forfeited to all other " + s(e.tokenSymbol) + " holders. ", 1), io, ro, y(" You may also claim & compound " + s(e.nativeCurrencySymbol) + " rewards anytime including while you're locked. This converts all unclaimed " + s(e.nativeCurrencySymbol) + " to " + s(e.tokenSymbol) + " by market buying and adding it to your wallet. Again this can be done anytime you have unclaimed " + s(e.nativeCurrencySymbol) + " available even while your " + s(e.tokenSymbol) + " is locked, however it will add to the amount of " + s(e.nativeCurrencySymbol) + " rewards needed to unlock your wallet. ", 1)]), co])])]),
        _: 1
    })])
}
const mo = f(Dn, [
        ["render", uo]
    ]),
    ho = {},
    fo = {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "25",
        viewBox: "0 0 24 25",
        fill: "none"
    },
    _o = t("path", {
        d: "M12.0015 3.49994C13.6555 3.49994 15.0015 4.84594 15.0015 6.49994L15.0015 11.2639C16.1445 10.2399 18.0265 10.2849 19.1225 11.3789C19.6844 11.9418 20 12.7046 20 13.4999C20 14.2953 19.6844 15.0581 19.1225 15.6209L12.0015 22.7419L4.88047 15.6209C4.31854 15.0581 4.00294 14.2953 4.00294 13.4999C4.00294 12.7046 4.31854 11.9418 4.88047 11.3789C5.97447 10.2839 7.85947 10.2389 9.00147 11.2639L9.00147 6.49994C9.00147 4.84594 10.3475 3.49994 12.0015 3.49994ZM13.0015 16.0859L13.0015 6.49994C12.99 6.24246 12.8796 5.99935 12.6933 5.82122C12.507 5.64309 12.2592 5.54367 12.0015 5.54367C11.7437 5.54367 11.4959 5.64309 11.3097 5.82122C11.1234 5.99935 11.013 6.24246 11.0015 6.49994L11.0015 16.0859L7.70847 12.7929C7.5181 12.6109 7.26486 12.5093 7.00147 12.5093C6.73808 12.5093 6.48483 12.6109 6.29447 12.7929C6.20152 12.8857 6.12779 12.9959 6.07747 13.1172C6.02716 13.2386 6.00127 13.3686 6.00127 13.4999C6.00127 13.6313 6.02716 13.7613 6.07747 13.8826C6.12779 14.004 6.20152 14.1142 6.29447 14.2069L12.0015 19.9139L17.7085 14.2069C17.8014 14.1142 17.8752 14.004 17.9255 13.8826C17.9758 13.7613 18.0017 13.6313 18.0017 13.4999C18.0017 13.3686 17.9758 13.2386 17.9255 13.1173C17.8752 12.9959 17.8014 12.8857 17.7085 12.7929C17.5181 12.6109 17.2649 12.5093 17.0015 12.5093C16.7381 12.5093 16.4848 12.6109 16.2945 12.7929L13.0015 16.0859Z",
        fill: "black"
    }, null, -1),
    go = [_o];

function po(e, o) {
    return l(), r("svg", fo, go)
}
const bo = f(ho, [
    ["render", po]
]);
var me = {
    exports: {}
};
(function(e, o) {
    (function(n, g) {
        e.exports = g()
    })(ke, function() {
        var n = "__v-click-outside",
            g = typeof window < "u",
            u = typeof navigator < "u",
            a = g && ("ontouchstart" in window || u && navigator.msMaxTouchPoints > 0) ? ["touchstart"] : ["click"],
            d = function(h) {
                var b = h.event,
                    p = h.handler;
                (0, h.middleware)(b) && p(b)
            },
            m = function(h, b) {
                var p = function(k) {
                        var L = typeof k == "function";
                        if (!L && typeof k != "object") throw new Error("v-click-outside: Binding value must be a function or an object");
                        return {
                            handler: L ? k : k.handler,
                            middleware: k.middleware || function(M) {
                                return M
                            },
                            events: k.events || a,
                            isActive: k.isActive !== !1,
                            detectIframe: k.detectIframe !== !1,
                            capture: Boolean(k.capture)
                        }
                    }(b.value),
                    T = p.handler,
                    j = p.middleware,
                    he = p.detectIframe,
                    W = p.capture;
                if (p.isActive) {
                    if (h[n] = p.events.map(function(k) {
                            return {
                                event: k,
                                srcTarget: document.documentElement,
                                handler: function(L) {
                                    return function(M) {
                                        var R = M.el,
                                            F = M.event,
                                            Y = M.handler,
                                            E = M.middleware,
                                            Z = F.path || F.composedPath && F.composedPath();
                                        (Z ? Z.indexOf(R) < 0 : !R.contains(F.target)) && d({
                                            event: F,
                                            handler: Y,
                                            middleware: E
                                        })
                                    }({
                                        el: h,
                                        event: L,
                                        handler: T,
                                        middleware: j
                                    })
                                },
                                capture: W
                            }
                        }), he) {
                        var fe = {
                            event: "blur",
                            srcTarget: window,
                            handler: function(k) {
                                return function(L) {
                                    var M = L.el,
                                        R = L.event,
                                        F = L.handler,
                                        Y = L.middleware;
                                    setTimeout(function() {
                                        var E = document.activeElement;
                                        E && E.tagName === "IFRAME" && !M.contains(E) && d({
                                            event: R,
                                            handler: F,
                                            middleware: Y
                                        })
                                    }, 0)
                                }({
                                    el: h,
                                    event: k,
                                    handler: T,
                                    middleware: j
                                })
                            },
                            capture: W
                        };
                        h[n] = [].concat(h[n], [fe])
                    }
                    h[n].forEach(function(k) {
                        var L = k.event,
                            M = k.srcTarget,
                            R = k.handler;
                        return setTimeout(function() {
                            h[n] && M.addEventListener(L, R, W)
                        }, 0)
                    })
                }
            },
            _ = function(h) {
                (h[n] || []).forEach(function(b) {
                    return b.srcTarget.removeEventListener(b.event, b.handler, b.capture)
                }), delete h[n]
            },
            w = g ? {
                beforeMount: m,
                updated: function(h, b) {
                    var p = b.value,
                        T = b.oldValue;
                    JSON.stringify(p) !== JSON.stringify(T) && (_(h), m(h, {
                        value: p
                    }))
                },
                unmounted: _
            } : {};
        return {
            install: function(h) {
                h.directive("click-outside", w)
            },
            directive: w
        }
    })
})(me);
const wo = me.exports,
    yo = {
        name: "Modal",
        components: {},
        directives: {
            clickOutside: wo.directive
        },
        props: {
            title: {
                type: String
            },
            subText: {
                type: String
            },
            large: {
                type: Boolean
            },
            noPadding: {
                type: Boolean
            },
            blank: {
                type: Boolean
            },
            disableClickOutside: {
                type: Boolean,
                default: !1
            }
        },
        data() {
            return {}
        },
        emits: ["close"],
        methods: {
            onHide() {
                this.disableClickOutside || this.$emit("close")
            }
        }
    },
    ko = {
        class: "fixed z-50 w-full",
        "aria-labelledby": "modal-title",
        role: "dialog",
        "aria-modal": "true"
    },
    vo = t("div", {
        class: "fixed inset-0 transition-opacity bg-blue/[0.9] h-full"
    }, null, -1),
    Co = {
        class: "fixed inset-0 z-10 overflow-y-auto"
    },
    xo = {
        class: "w-full flex h-screen items-start justify-center p-2 md:p-4 text-center sm:items-start sm:p-0"
    },
    $o = t("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        "stroke-width": "5",
        stroke: "currentColor",
        class: "size-6"
    }, [t("path", {
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        d: "M6 18 18 6M6 6l12 12"
    })], -1),
    So = [$o],
    Lo = {
        class: "relative flex items-center justify-start md:justify-center w-full gap-3"
    },
    Mo = {
        class: "flex flex-col pb-3"
    },
    Bo = {
        key: 0,
        class: "mt-3 text-md md:text-center sm:mt-2 text-gray-600"
    },
    No = {
        class: "mt-4"
    };

function To(e, o, n, g, u, a) {
    const d = ve("click-outside");
    return l(), C(xe, {
        to: "body"
    }, [t("div", ko, [vo, t("div", Co, [t("div", xo, [Ce((l(), r("div", {
        class: $(["relative text-left transition-all transform w-full my-auto overflow-hidden", {
            "sm:max-w-md": !n.large,
            "sm:max-w-3xl": n.large,
            "p-7 md:p-10": !n.noPadding,
            "bg-white box-effect backdrop-blur-xl": !n.blank
        }])
    }, [t("button", {
        class: $(["absolute top-4 right-5", {
            "pt-7 pr-7": n.noPadding
        }]),
        onClick: o[0] || (o[0] = m => e.$emit("close"))
    }, So, 2), t("div", Lo, [n.title ? (l(), r("h1", {
        key: 0,
        class: $(["text-black canaro-black text-3xl", {
            "pt-7": n.noPadding
        }])
    }, s(n.title), 3)) : S("", !0), O(e.$slots, "title")]), t("div", Mo, [n.subText ? (l(), r("h3", Bo, s(n.subText), 1)) : S("", !0), t("div", No, [O(e.$slots, "default")])])], 2)), [
        [d, a.onHide]
    ])])])])])
}
const Fo = f(yo, [
        ["render", To]
    ]),
    Ro = {
        name: "NetworkSelect",
        components: {
            IconArrow: bo,
            Modal: Fo
        },
        props: {
            modelValue: {
                type: [String, Object]
            },
            options: {
                type: Array,
                required: !0
            },
            isChangeNetwork: {
                type: Boolean,
                default: !1
            }
        },
        computed: { ...v(["isConnected"]),
            selectedNetwork: {
                get() {
                    return this.options.filter(e => e.short_name == this.modelValue)[0]
                },
                async set(e) {
                    const o = this.options.filter(n => n.short_name == e)[0];
                    this.isChangeNetwork ? await this.switchNetwork(o) : this.$emit("update:modelValue", o.short_name)
                }
            }
        },
        data() {
            return {
                showModal: !1
            }
        },
        methods: {
            async switchNetwork(e) {
                try {
                    if (!this.isConnected) return this.setSelectedNetwork(e.short_name);
                    this.showModal = !1, await window.ethereum.request({
                        method: "wallet_switchEthereumChain",
                        params: [{
                            chainId: `0x${e.chain_id.toString(16)}`
                        }]
                    })
                } catch (o) {
                    o.code == 4902 && await window.ethereum.request({
                        method: "wallet_addEthereumChain",
                        params: [{
                            chainId: `0x${e.chain_id.toString(16)}`,
                            chainName: e.name,
                            rpcUrls: [e.rpc_url],
                            nativeCurrency: { ...e.native_currency
                            }
                        }]
                    })
                } finally {}
            }
        }
    },
    Vo = {
        class: "flex items-center gap-1.5"
    },
    Io = ["src", "alt"],
    Eo = {
        class: "uppercase relative top-0.5"
    },
    Uo = {
        class: "flex flex-col items-start w-full gap-3"
    },
    Do = ["onClick"],
    jo = ["src", "alt"],
    Ao = {
        class: "relative top-0.5 uppercase"
    };

function Ho(e, o, n, g, u, a) {
    const d = c("IconArrow"),
        m = c("Modal");
    return l(), r(B, null, [t("button", {
        onClick: o[0] || (o[0] = _ => u.showModal = !0),
        class: "p-2.5 button-effect bg-lightGreen rounded-lg w-full flex items-center justify-between"
    }, [t("div", Vo, [t("img", {
        src: a.selectedNetwork && a.selectedNetwork.logo,
        alt: a.selectedNetwork && a.selectedNetwork.short_name
    }, null, 8, Io), t("span", Eo, s(a.selectedNetwork && a.selectedNetwork.short_name), 1)]), i(d)]), u.showModal ? (l(), C(m, {
        key: 0,
        onClose: o[1] || (o[1] = _ => u.showModal = !1),
        title: "Select Network"
    }, {
        default: x(() => [t("div", Uo, [(l(!0), r(B, null, q(n.options, (_, w) => (l(), r("button", {
            key: w,
            class: $(["flex items-center gap-1.5 w-full button-effect p-2.5 rounded-lg", {
                "bg-blue": _.short_name == (a.selectedNetwork && a.selectedNetwork.short_name)
            }]),
            onClick: h => a.selectedNetwork = _.short_name
        }, [t("img", {
            src: _.logo,
            alt: _.short_name
        }, null, 8, jo), t("span", Ao, s(_.name), 1)], 10, Do))), 128))])]),
        _: 1
    })) : S("", !0)], 64)
}
const zo = f(Ro, [
        ["render", Ho]
    ]),
    Oo = {},
    Po = {
        xmlns: "http://www.w3.org/2000/svg",
        width: "39",
        height: "39",
        viewBox: "0 0 39 39",
        fill: "none"
    },
    Wo = t("path", {
        d: "M13.5776 29.4225L13.5776 29.4224L10.532 26.3767C10.5317 26.3764 10.5313 26.3761 10.531 26.3758C10.2678 26.1132 10.0589 25.8014 9.91638 25.458C9.77364 25.1143 9.70016 24.7457 9.70016 24.3735C9.70016 24.0013 9.77364 23.6327 9.91638 23.2889C10.0589 22.9457 10.2677 22.6339 10.5307 22.3714L13.5776 29.4225ZM13.5776 29.4225L13.5876 29.4322C13.8883 29.7246 14.2473 29.9437 14.6367 30.0781H8.65625V17.4531H20.0886C20.0806 17.5645 20.0792 17.6768 20.0846 17.7895C20.1194 18.5186 20.4347 19.206 20.9647 19.708C21.4947 20.2099 22.1982 20.4876 22.9281 20.4827C23.6581 20.4779 24.3579 20.1911 24.8812 19.6822L24.8813 19.6822L24.8911 19.6724L27.9368 16.6267C27.9371 16.6264 27.9374 16.6261 27.9377 16.6258C28.2009 16.3632 28.4098 16.0514 28.5524 15.708L27.6288 15.3245L28.5524 15.708C28.6951 15.3643 28.7686 14.9957 28.7686 14.6235C28.7686 14.2512 28.6951 13.8827 28.5524 13.5389L27.6288 13.9224L28.5524 13.5389C28.4098 13.1956 28.2009 12.8837 27.9377 12.6212C27.9374 12.6209 27.9371 12.6205 27.9368 12.6202L24.8934 9.57688C24.893 9.57641 24.8925 9.57595 24.892 9.57548C24.6028 9.28472 24.2567 9.06319 23.8796 8.92188H29.8125V21.5469H18.4006C18.4095 21.4361 18.412 21.3244 18.4077 21.2122C18.3795 20.4741 18.0636 19.7763 17.5277 19.268C16.9917 18.7597 16.2781 18.4813 15.5395 18.4923C14.8015 18.5033 14.0971 18.8024 13.5766 19.3256C13.5762 19.326 13.5758 19.3264 13.5753 19.3269L10.532 22.3702L13.5776 29.4225ZM22.6827 30.0781H16.4817C16.8594 29.9478 17.2087 29.7377 17.504 29.458C18.034 28.956 18.3494 28.2686 18.3842 27.5395C18.3895 27.4268 18.3881 27.3145 18.3802 27.2031H31.4219C32.4952 27.2031 33.5245 26.7768 34.2834 26.0178C35.0424 25.2589 35.4688 24.2295 35.4688 23.1562V7.3125C35.4688 6.2392 35.0424 5.20986 34.2834 4.45093C33.5245 3.69199 32.4952 3.26562 31.4219 3.26562H14.3594C13.2861 3.26562 12.2567 3.69199 11.4978 4.45093C10.7389 5.20986 10.3125 6.2392 10.3125 7.3125V7.92188C10.3125 8.67194 10.6105 9.39128 11.1408 9.92166C11.6712 10.452 12.3906 10.75 13.1406 10.75C13.8907 10.75 14.61 10.452 15.1404 9.92166C15.4269 9.63521 15.6455 9.29364 15.7861 8.92188H21.8947C21.5434 9.05354 21.2185 9.255 20.9411 9.51802C20.4051 10.0263 20.0893 10.7241 20.0611 11.4622C20.0568 11.5744 20.0592 11.6861 20.0681 11.7969H7.04688C5.97358 11.7969 4.94424 12.2232 4.1853 12.9822C3.42637 13.7411 3 14.7705 3 15.8438V31.6875C3 32.7608 3.42637 33.7901 4.1853 34.5491C4.94424 35.308 5.97358 35.7344 7.04688 35.7344H24.1094C25.1827 35.7344 26.212 35.308 26.9709 34.5491C27.7299 33.7901 28.1562 32.7608 28.1562 31.6875V31.0781C28.1562 30.3281 27.8583 29.6087 27.3279 29.0783C26.7975 28.548 26.0782 28.25 25.3281 28.25C24.5781 28.25 23.8587 28.548 23.3283 29.0783C23.0419 29.3648 22.8232 29.7064 22.6827 30.0781Z",
        fill: "#7CEFDA",
        stroke: "black",
        "stroke-width": "2"
    }, null, -1),
    Yo = [Wo];

function qo(e, o) {
    return l(), r("svg", Po, Yo)
}
const Go = f(Oo, [
        ["render", qo]
    ]),
    Zo = {
        name: "Input",
        props: {
            modelValue: {
                type: [String, Number]
            },
            label: {
                type: String
            },
            placeholder: {
                type: String
            },
            disabled: {
                type: Boolean,
                default: !1
            },
            max: {
                type: [String, Number]
            },
            balance: {
                type: [String, Number]
            }
        },
        emits: ["change", "update:modelValue"],
        watch: {
            modelValue(e) {
                const o = this.checkValAndReset(e);
                o != e && this.updateInput({
                    target: {
                        value: o
                    }
                })
            }
        },
        computed: { ...v(["activeNetwork"]),
            balanceFormatted() {
                return this.balance && ne(this.balance) || "0"
            }
        },
        methods: {
            checkValAndReset(e) {
                return typeof this.max < "u" && new V(this.max).gte(0) && new V(e).gt(this.max) ? this.max : e
            },
            updateInput(e) {
                this.disabled || (this.$emit("update:modelValue", this.checkValAndReset(e.target.value)), this.$emit("change"))
            },
            setToMax() {
                this.updateInput({
                    target: {
                        value: this.max
                    }
                })
            }
        }
    },
    Jo = {
        class: "flex flex-col items-start w-full gap-2.5"
    },
    Ko = {
        for: "amount",
        class: "relative top-0.5"
    },
    Qo = {
        class: "flex items-center gap-5 w-full"
    },
    Xo = {
        key: 0,
        class: "flex items-center justify-center h-16 bg-green button-effect rounded-lg px-5 gap-1.5"
    },
    es = ["src"],
    ts = {
        class: "uppercase relative top-0.5"
    },
    ns = {
        class: "bg-green h-16 px-5 button-effect rounded-lg w-full flex items-center justify-between gap-5"
    },
    os = ["value", "placeholder", "disabled"],
    ss = {
        key: 0,
        class: "flex flex-col items-end text-right w-44 text-sm"
    };

function ls(e, o, n, g, u, a) {
    return l(), r("div", Jo, [t("label", Ko, s(n.label), 1), t("div", Qo, [n.disabled ? S("", !0) : (l(), r("div", Xo, [t("img", {
        src: e.activeNetwork.logo,
        alt: ""
    }, null, 8, es), t("span", ts, s(e.activeNetwork.short_name), 1)])), t("div", ns, [t("input", {
        id: "amount",
        type: "text",
        class: $(["w-full h-full bg-transparent outline-none placeholder-black", {
            "pointer-events-none": n.disabled
        }]),
        value: n.modelValue,
        placeholder: n.placeholder,
        disabled: n.disabled,
        onInput: o[0] || (o[0] = (...d) => a.updateInput && a.updateInput(...d))
    }, null, 42, os), n.disabled ? S("", !0) : (l(), r("div", ss, [t("button", {
        onClick: o[1] || (o[1] = (...d) => a.setToMax && a.setToMax(...d))
    }, "max"), t("span", null, "Balance: " + s(a.balanceFormatted), 1)]))])])])
}
const as = f(Zo, [
        ["render", ls]
    ]),
    is = {
        components: {
            Section: I,
            Button: N,
            Wallet: ue,
            NetworkSelect: zo,
            IconSwap: Go,
            Input: as
        },
        data() {
            return {
                selectedNetwork: "",
                amountToSend: 0
            }
        },
        watch: {
            ["activeNetwork.short_name"](e) {
                this.defaultSelect()
            }
        },
        computed: { ...D({
                networks: ({
                    main: e
                }) => e.networks
            }),
            ...v(["isConnected", "activeNetwork", "userAddress", "nativeCurrencySymbol", "userTokenBalanceFormatted", "tokenSymbol"]),
            selectableNetworks() {
                return this.networks.filter(e => e.short_name !== this.activeNetwork.short_name)
            }
        },
        methods: { ...U(["init", "disconnect"]),
            async defaultSelect() {
                this.selectedNetwork = this.selectableNetworks[0].short_name
            }
        },
        mounted() {
            this.defaultSelect()
        }
    },
    rs = {
        id: "bridge",
        class: "dots bg-lightYellow relative"
    },
    cs = {
        class: "flex flex-col lg:flex-row justify-between items-center bg-yellow px-5 py-3 border-4 border-black text-xl"
    },
    ds = {
        class: "canaro-black"
    },
    us = {
        class: "bg-white border-4 border-t-0 border-black flex flex-col items-start w-full"
    },
    ms = {
        class: "py-9 px-8 lg:px-10 w-full flex flex-col items-start gap-9"
    },
    hs = {
        class: "flex flex-col items-start w-full p-5 bg-lightPink rounded-lg border-2 border-black gap-5"
    },
    fs = {
        class: "flex lg:flex-row flex-col lg:items-center gap-5 w-full"
    },
    _s = t("h1", {
        class: "relative top-0.5 w-64"
    }, "Select Network to Bridge", -1),
    gs = {
        class: "flex lg:flex-row flex-col items-center gap-5 w-full"
    },
    ps = {
        class: "flex flex-col items-start w-full p-5 bg-lighterBlue rounded-lg border-2 border-black gap-10"
    },
    bs = {
        class: "w-full relative"
    },
    ws = t("div", {
        class: "h-0.5 bg-black w-full"
    }, null, -1),
    ys = t("div", {
        class: "grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 w-full"
    }, [t("div", {
        class: "border-blue border-2 p-4 flex flex-col box-effect-gray text-2xl"
    }, [t("span", null, "You are bridging"), t("b", {
        class: "canaro-semibold text-5xl leading-none"
    }, " 10,000 $Mullet "), t("small", null, "\u2248 $300")]), t("div", {
        class: "border-orange border-2 p-4 flex flex-col box-effect-gray text-2xl"
    }, [t("span", null, "You are receiving"), t("b", {
        class: "canaro-semibold text-5xl leading-none"
    }, " 10,000 $Mullet "), t("small", null, "\u2248 $300")]), t("div", {
        class: "border-green border-2 p-4 flex flex-col box-effect-gray text-2xl"
    }, [t("span", null, "Bridge Fee"), t("b", {
        class: "canaro-semibold text-5xl leading-none"
    }, " 0.0001 ETH "), t("small", null, "\u2248 $0.377895")])], -1),
    ks = {
        class: "bg-black py-9 px-8 lg:px-10 w-full flex lg:flex-row flex-col lg:gap-0 gap-5 items-center justify-between"
    },
    vs = t("div", {
        class: "text-white flex items-center gap-2.5"
    }, [t("span", null, "Bridge Tokens:"), t("span", {
        class: "canaro-black text-3xl relative"
    }, "0.125 ETH (ERC 20)")], -1);

function Cs(e, o, n, g, u, a) {
    const d = c("Wallet"),
        m = c("NetworkSelect"),
        _ = c("IconSwap"),
        w = c("Input"),
        h = c("Button"),
        b = c("Section");
    return l(), r("div", rs, [i(b, {
        title: "Bridge"
    }, {
        default: x(() => [t("div", null, [t("div", cs, [t("div", null, [y(" Your wallet balance: "), t("span", ds, s(e.isConnected ? e.userTokenBalanceFormatted : "...") + " " + s(e.tokenSymbol), 1)]), t("div", null, [i(d)])]), t("div", us, [t("div", ms, [t("div", hs, [t("div", fs, [_s, t("div", gs, [i(m, {
            modelValue: e.activeNetwork.short_name,
            "onUpdate:modelValue": o[0] || (o[0] = p => e.activeNetwork.short_name = p),
            options: e.networks,
            "is-change-network": ""
        }, null, 8, ["modelValue", "options"]), i(_, {
            class: "shrink-0"
        }), i(m, {
            modelValue: u.selectedNetwork,
            "onUpdate:modelValue": o[1] || (o[1] = p => u.selectedNetwork = p),
            options: a.selectableNetworks
        }, null, 8, ["modelValue", "options"])])])]), t("div", ps, [i(w, {
            modelValue: u.amountToSend,
            "onUpdate:modelValue": o[2] || (o[2] = p => u.amountToSend = p),
            label: "Enter amount to send",
            placeholder: "Amount"
        }, null, 8, ["modelValue"]), t("div", bs, [ws, i(_, {
            class: "absolute inset-0 w-full -top-5"
        })]), i(w, {
            label: "Amount to receive",
            disabled: "",
            placeholder: "Amount"
        }), e.isConnected ? (l(), C(h, {
            key: 1,
            text: "Bridge",
            size: "large",
            class: "bg-yellow canaro-black w-full",
            icon: "collect"
        })) : (l(), C(h, {
            key: 0,
            onClick: e.init,
            text: "Connect Wallet",
            size: "large",
            class: "bg-lightBlue canaro-black",
            icon: "collect"
        }, null, 8, ["onClick"]))]), ys]), t("div", ks, [vs, i(h, {
            text: "Claim Tokens",
            size: "large",
            class: "bg-green canaro-black lg:w-max w-full"
        })])])])]),
        _: 1
    })])
}
const xs = f(is, [
        ["render", Cs]
    ]),
    $s = {
        props: {
            number: {
                type: String
            },
            name: {
                type: String
            },
            description: {
                type: String
            },
            image: {
                type: String
            },
            color: {
                type: String
            }
        }
    },
    Ss = {
        class: "w-full flex flex-col items-start gap-5 text-xl canaro-bold"
    },
    Ls = {
        class: "flex space-x-4"
    },
    Ms = {
        class: "leading-none text-effect stroke-effect canaro-black text-7xl mt-4"
    },
    Bs = {
        class: "text-effect stroke-effect text-4xl canaro-black tracking-tighter"
    },
    Ns = ["src"],
    Ts = {
        class: "bg-black bg-opacity-30 pt-24 pb-6 px-6 canaro-book text-white -mt-10 rounded-bl-2xl rounded-br-2xl h-full"
    };

function Fs(e, o, n, g, u, a) {
    return l(), r("div", Ss, [t("div", {
        class: $(["box-effect flex flex-col items-center lg:items-start justify-center w-full relative z-1 p-4", n.color])
    }, [t("div", Ls, [t("h3", Ms, s(n.number), 1), t("h2", Bs, s(n.name), 1)]), t("img", {
        src: `/graphics/${n.image}.png`,
        class: "h-72 scale-125 mt-10 -mb-10 object-contain",
        alt: ""
    }, null, 8, Ns)], 2), t("span", Ts, s(n.description), 1)])
}
const G = f($s, [
        ["render", Fs]
    ]),
    Rs = {
        components: {
            Section: I,
            MechanicBlock: G,
            Button: N,
            BgEffect: P
        },
        computed: { ...v(["nativeCurrencySymbol", "tokenSymbol"])
        }
    },
    Vs = {
        id: "mechanics",
        class: "bg-blue relative"
    },
    Is = t("br", null, null, -1),
    Es = {
        class: "flex flex-col lg:flex-row gap-14 w-full"
    };

function Us(e, o, n, g, u, a) {
    const d = c("BgEffect"),
        m = c("MechanicBlock"),
        _ = c("Section");
    return l(), r("div", Vs, [i(d, {
        class: "opacity-15 lg:opacity-100"
    }), i(_, {
        title: "game theory mechanics"
    }, {
        subtitle: x(() => [y(" Unlike vanilla memes, " + s(e.tokenSymbol) + " offers a unique game theory approach to " + s(e.nativeCurrencySymbol) + " reflections. ", 1), Is, y(" Here is how it works: ")]),
        default: x(() => [t("div", Es, [i(m, {
            image: "mechanics-3",
            name: `Buy ${e.tokenSymbol}`,
            number: "1",
            color: "bg-yellow",
            description: `Trade ${e.tokenSymbol} freely at any time. Careful though, selling or transferring ${e.tokenSymbol} out of your wallet forfeits all unclaimed ${e.nativeCurrencySymbol} rewards. These forfeited rewards are distributed across all other ${e.tokenSymbol} holders.`
        }, null, 8, ["name", "description"]), i(m, {
            image: "mechanics-1",
            name: "Game Theory",
            number: "2",
            color: "bg-green",
            description: `Game theory ${e.nativeCurrencySymbol} rewards accumulate for all ${e.tokenSymbol} holders continuously, passively, and without the need to stake. Each holder must make a strategic decision on what they do next. Do you trade your ${e.tokenSymbol}, claim ${e.nativeCurrencySymbol} rewards, or just hold and see what others do?`
        }, null, 8, ["description"]), i(m, {
            image: "mechanics-2",
            name: "Claim Rewards",
            number: "3",
            color: "bg-pink",
            description: `When claiming ${e.nativeCurrencySymbol} rewards your ${e.tokenSymbol} gets locked in your wallet. Your tokens will be unlocked by waiting a minimum of 3 days and accumulating more rewards than your most recent rewards claim OR by paying back the most recent ${e.nativeCurrencySymbol} rewards you last claimed.`
        }, null, 8, ["description"])])]),
        _: 1
    })])
}
const Ds = f(Rs, [
        ["render", Us]
    ]),
    js = "/graphics/triangle-large.png",
    As = {
        components: {
            Section: I,
            MechanicBlock: G,
            Button: N,
            BgEffect: P
        },
        computed: { ...v(["links", "nativeCurrencySymbol", "tokenName", "tokenSymbol"])
        }
    },
    Hs = {
        id: "vision",
        class: "dots relative mt-16 md:mt-28 lg:mt-0"
    },
    zs = t("img", {
        class: "absolute -top-10 right-0 z-1",
        src: js,
        alt: ""
    }, null, -1),
    Os = {
        class: "flex items-center justify-end relative"
    },
    Ps = {
        class: "bg-white border-4 border-black h-full box-effect w-full lg:w-4/5 mt-2 gap-8 flex flex-col py-9 lg:py-16 px-8 lg:px-48"
    },
    Ws = {
        class: "relative vision-robot"
    },
    Ys = t("br", null, null, -1),
    qs = t("br", null, null, -1),
    Gs = {
        class: "text-center mt-4"
    },
    Zs = ["href"];

function Js(e, o, n, g, u, a) {
    const d = c("Button"),
        m = c("Section");
    return l(), r("div", Hs, [zs, i(m, {
        title: "THE VISION"
    }, {
        default: x(() => [t("div", Os, [t("div", Ps, [t("span", Ws, [y(" Embracing the " + s(e.tokenSymbol) + " spirit means being unapologetically ourselves. Ripping through a carton of cigs a day? Do it. Giving your wife dutch ovens on the reg because it's funny? Nice. Want to eat pancakes for dinner? Get after it. We capitalize on our unique strengths and stay resilient in the face of adversity. We thrive on defying convention and embracing the power of individuality. " + s(e.tokenName) + " is more than a brand, it's a movement celebrating self-expression and the joy of standing out. ", 1), Ys, qs, y(" On top of the core vision to spread " + s(e.tokenSymbol) + " vibes everywhere, we also showcase new unique game theory mechanics to reward the most diamond handed mulleteers with " + s(e.nativeCurrencySymbol) + " who are committed to building a strong community of bold, creative individuals. ", 1), t("ul", Gs, [t("li", null, s(e.tokenSymbol) + " is a mindset", 1), t("li", null, s(e.tokenSymbol) + " is a state of being", 1), t("li", null, s(e.tokenSymbol) + " is a zeitgeist", 1), t("li", null, s(e.tokenSymbol) + " is culture", 1)])]), t("a", {
            href: e.links.whitepaper,
            target: "_blank",
            rel: "noopener noreferrer"
        }, [i(d, {
            text: "Whitepaper",
            size: "large",
            class: "bg-blue canaro-black"
        })], 8, Zs)])])]),
        _: 1
    })])
}
const Ks = f(As, [
        ["render", Js]
    ]),
    Qs = "/graphics/arrow-down.png",
    Xs = "/graphics/party-front.png",
    el = "/graphics/party-back.png",
    tl = {
        components: {
            Section: I,
            MechanicBlock: G,
            Button: N,
            BgEffect: P
        },
        computed: { ...v(["links", "nativeCurrencySymbol", "tokenName", "tokenSymbol"])
        }
    },
    nl = {
        id: "community",
        class: "relative bg-lightYellow bg-movement"
    },
    ol = t("img", {
        src: Qs,
        class: "w-24 h-2w-24 relative z-1 mb-5",
        alt: ""
    }, null, -1),
    sl = {
        class: "flex flex-col lg:flex-row items-center justify-end relative lg:-mt-56"
    },
    ll = t("img", {
        src: Xs,
        alt: ""
    }, null, -1),
    al = {
        class: "flex bg-white border-4 border-black h-full box-effect w-full mt-2 gap-8 py-16 px-16 relative z-0"
    },
    il = {
        class: "relative text-center"
    },
    rl = t("br", null, null, -1),
    cl = t("br", null, null, -1),
    dl = ["href"],
    ul = t("img", {
        src: el,
        alt: ""
    }, null, -1);

function ml(e, o, n, g, u, a) {
    const d = c("Button"),
        m = c("Section");
    return l(), r("div", nl, [i(m, {
        title: `join the 
 movement`,
        class: "pt-28"
    }, {
        subtitle: x(() => [ol]),
        default: x(() => [t("div", sl, [ll, t("div", al, [t("span", il, [y(" Our community honors the mullet\u2019s cultural legacy while pushing boundaries to keep it fresh and relevant. We're a collective of individuals driven by the thrill of innovation, the buzz of the days first dart, big clapping cheeks, and the confidence to take the risks necessary to reap rewards. Cool under pressure, we navigate life\u2019s highs and lows with unwavering confidence and adaptability. "), rl, cl, y(" Join the " + s(e.tokenSymbol) + " movement and turn bold self-expression into tangible success. ", 1), t("a", {
            href: e.links.telegram,
            target: "_blank",
            rel: "noopener noreferrer"
        }, [i(d, {
            text: "JOIN COMMUNITY",
            size: "large",
            class: "bg-yellow canaro-black absolute -bottom-7 left-0 right-0 mx-auto xl:w-3/4",
            icon: "social-telegram"
        })], 8, dl)])]), ul])]),
        _: 1
    })])
}
const hl = f(tl, [
        ["render", ml]
    ]),
    fl = "/graphics/tokenomics.png",
    _l = {
        components: {
            Section: I,
            BoardBlock: de,
            Contract: re,
            Button: N
        },
        computed: { ...v(["activeNetwork", "buyOnDexUrl", "tokenSymbol", "links"]),
            ...D({
                mulletData: ({
                    main: e
                }) => e.mulletData
            }),
            activeChain() {
                return this.activeNetwork && this.activeNetwork.short_name.toUpperCase() || "BASE"
            },
            totalSupplyFormatted() {
                return this.mulletData && ne(new V(this.mulletData.totalSupply).div(new V(10).pow(this.mulletData.decimals))) || 0
            }
        }
    },
    gl = {
        id: "tokenomics",
        class: "bg-lightyellow"
    },
    pl = {
        class: "flex flex-col lg:flex-row-reverse items-center justify-center gap-10 mt-0"
    },
    bl = t("img", {
        src: fl,
        class: "object-contain",
        alt: ""
    }, null, -1),
    wl = {
        class: "grid grid-cols-1 lg:grid-cols-2 gap-5 w-full"
    },
    yl = ["href"];

function kl(e, o, n, g, u, a) {
    const d = c("BoardBlock"),
        m = c("Contract"),
        _ = c("Button"),
        w = c("Section");
    return l(), r("div", gl, [i(w, {
        title: "tokenomics"
    }, {
        default: x(() => [t("div", pl, [bl, t("div", null, [t("div", wl, [i(d, {
            image: "logo",
            name: "Token",
            amount: e.tokenSymbol,
            class: "bg-yellow",
            reverse: ""
        }, null, 8, ["amount"]), i(d, {
            name: "Total Supply",
            amount: a.totalSupplyFormatted,
            class: "bg-orange",
            reverse: "",
            white: ""
        }, null, 8, ["amount"]), i(d, {
            image: "see-dextools",
            "image-link": e.links.chart,
            name: "Tax",
            amount: "0%",
            class: "bg-green",
            reverse: ""
        }, null, 8, ["image-link"]), i(d, {
            image: "see-base",
            "image-link": e.links.explorer,
            name: "Chain",
            amount: a.activeChain,
            class: "bg-darkBlue",
            reverse: "",
            white: ""
        }, null, 8, ["image-link", "amount"]), i(m, {
            class: "lg:col-span-2"
        })]), t("a", {
            href: e.buyOnDexUrl,
            target: "_blank",
            rel: "noopener noreferrer",
            class: "w-96 mx-auto"
        }, [i(_, {
            text: `BUY ${e.tokenSymbol}`,
            size: "large",
            class: "bg-green canaro-black mt-6 w-full",
            icon: "uniswap"
        }, null, 8, ["text"])], 8, yl)])])]),
        _: 1
    })])
}
const vl = f(_l, [
        ["render", kl]
    ]),
    Cl = "/graphics/footer-right.png",
    xl = {
        computed: { ...v(["isConnected", "links", "tokenSymbol"]),
            linksAry() {
                return [{
                    name: "Audit",
                    url: this.links.audit,
                    external: !0
                }, {
                    name: "Whitepaper",
                    url: this.links.whitepaper,
                    external: !0
                }, {
                    name: "Explorer",
                    url: this.links.explorer,
                    external: !0
                }, {
                    name: "Twitter",
                    url: this.links.twitter,
                    external: !0
                }, {
                    name: "Telegram",
                    url: this.links.telegram,
                    external: !0
                }, {
                    name: "Contact Us",
                    url: this.links.contact,
                    external: !0
                }]
            }
        },
        methods: { ...U(["depositRewards"]),
            async checkAndDepositRewards() {
                !this.isConnected || await this.depositRewards()
            }
        }
    },
    $l = {
        class: "h-50 w-full flex items-center justify-center bg-blue mt-20"
    },
    Sl = {
        class: "flex flex-col md:flex-row gap-10 justify-between w-full max-w-section items-center px-0 md:px-10 pt-10 md:pt-0"
    },
    Ll = {
        class: "grid md:grid-cols-2 gap-x-10 md:border-r pr-10 mb-10 md:mb-0"
    },
    Ml = ["href"],
    Bl = t("img", {
        src: Cl,
        class: "h-60 -mt-10",
        alt: ""
    }, null, -1);

function Nl(e, o, n, g, u, a) {
    const d = c("router-link");
    return l(), r("div", $l, [t("div", Sl, [t("img", {
        onClick: o[0] || (o[0] = (...m) => a.checkAndDepositRewards && a.checkAndDepositRewards(...m)),
        src: ce,
        class: "h-40",
        alt: ""
    }), t("div", null, [t("ul", Ll, [(l(!0), r(B, null, q(a.linksAry, m => (l(), r(B, {
        key: m
    }, [m.external ? (l(), r("a", {
        key: 0,
        href: m.url,
        target: "_blank",
        rel: "noopener noreferrer",
        class: "text-white md:border-l md:pl-10"
    }, s(m.name), 9, Ml)) : (l(), C(d, {
        key: 1,
        to: m.url,
        class: "text-white md:border-l md:pl-10"
    }, {
        default: x(() => [y(s(m.name), 1)]),
        _: 2
    }, 1032, ["to"]))], 64))), 128))])]), Bl])])
}
const Tl = f(xl, [
        ["render", Nl]
    ]),
    Fl = {},
    Rl = {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        "stroke-width": "3",
        stroke: "currentColor",
        class: "w-6 h-6"
    },
    Vl = t("path", {
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        d: "M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
    }, null, -1),
    Il = [Vl];

function El(e, o) {
    return l(), r("svg", Rl, Il)
}
const Ul = f(Fl, [
        ["render", El]
    ]),
    Dl = {
        name: "NetworkSwitch",
        components: {
            IconSwitch: Ul
        },
        computed: { ...v(["isConnected"]),
            ...D({
                networks: ({
                    main: e
                }) => e.networks
            })
        },
        methods: {
            async switchNetwork(e) {
                let o = this.networks.find(n => n.short_name == e);
                try {
                    if (!this.isConnected) return;
                    await window.ethereum.request({
                        method: "wallet_switchEthereumChain",
                        params: [{
                            chainId: `0x${o.chain_id.toString(16)}`
                        }]
                    })
                } catch (n) {
                    n.code == 4902 && await window.ethereum.request({
                        method: "wallet_addEthereumChain",
                        params: [{
                            chainId: `0x${o.chain_id.toString(16)}`,
                            chainName: o.name,
                            rpcUrls: [o.rpc_url],
                            nativeCurrency: { ...o.native_currency
                            }
                        }]
                    })
                }
            }
        }
    },
    jl = {
        class: "flex items-center justify-between w-full border-4 border-black p-5 bg-darkPink box-effect fixed z-10 bottom-24 sm:right-8 right-0 sm:max-w-md max-w-none gap-5"
    },
    Al = t("span", {
        class: "text-white"
    }, " The network is invalid. Please switch to the ETH network. ", -1);

function Hl(e, o, n, g, u, a) {
    const d = c("IconSwitch");
    return l(), r("div", jl, [Al, t("button", {
        class: "text-white z-5 shrink-0",
        onClick: o[0] || (o[0] = m => a.switchNetwork("eth"))
    }, [i(d)])])
}
const zl = f(Dl, [
        ["render", Hl]
    ]),
    Ol = {
        components: {
            Nav: ut,
            Hero: jt,
            Board: mo,
            Bridge: xs,
            Mechanics: Ds,
            Vision: Ks,
            Movement: hl,
            Tokenomics: vl,
            Footer: Tl,
            NetworkSwitch: zl
        },
        computed: { ...v(["isOnValidNetwork", "isConnected"])
        }
    };

function Pl(e, o, n, g, u, a) {
    const d = c("Nav"),
        m = c("Hero"),
        _ = c("Vision"),
        w = c("Mechanics"),
        h = c("Board"),
        b = c("Movement"),
        p = c("Tokenomics"),
        T = c("Footer"),
        j = c("NetworkSwitch");
    return l(), r(B, null, [i(d), i(m), i(_), i(w), i(h), i(b), i(p), i(T), !e.isOnValidNetwork && e.isConnected ? (l(), C(j, {
        key: 0
    })) : S("", !0)], 64)
}
const Yl = f(Ol, [
    ["render", Pl]
]);
export {
    Yl as
    default
};