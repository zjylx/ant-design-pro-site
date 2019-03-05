(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.assign.js
var es6_object_assign = __webpack_require__(33);

// EXTERNAL MODULE: external "React"
var external_React_ = __webpack_require__(0);
var external_React_default = /*#__PURE__*/__webpack_require__.n(external_React_);

// EXTERNAL MODULE: ./node_modules/react-media/esm/react-media.js + 3 modules
var react_media = __webpack_require__(578);

// EXTERNAL MODULE: ./node_modules/react-intl/lib/index.es.js
var index_es = __webpack_require__(169);

// EXTERNAL MODULE: ./node_modules/react-document-title/index.js
var react_document_title = __webpack_require__(241);
var react_document_title_default = /*#__PURE__*/__webpack_require__.n(react_document_title);

// EXTERNAL MODULE: ./node_modules/antd/lib/button/style/index.js
var style = __webpack_require__(233);

// EXTERNAL MODULE: ./node_modules/antd/lib/button/index.js
var lib_button = __webpack_require__(172);
var button_default = /*#__PURE__*/__webpack_require__.n(lib_button);

// EXTERNAL MODULE: ./node_modules/react-github-button/lib/index.js
var lib = __webpack_require__(1187);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// EXTERNAL MODULE: ./node_modules/rc-queue-anim/es/index.js + 3 modules
var es = __webpack_require__(384);

// EXTERNAL MODULE: ./node_modules/rc-tween-one/es/index.js + 8 modules
var rc_tween_one_es = __webpack_require__(296);

// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js
var gatsby_browser_entry = __webpack_require__(235);

// EXTERNAL MODULE: ./node_modules/rc-tween-one/lib/plugin/SvgDrawPlugin.js
var SvgDrawPlugin = __webpack_require__(1190);
var SvgDrawPlugin_default = /*#__PURE__*/__webpack_require__.n(SvgDrawPlugin);

// CONCATENATED MODULE: ./src/components/Home/BannerSVGAnim.jsx


/* eslint-disable */



rc_tween_one_es["a" /* default */].plugins.push(SvgDrawPlugin_default.a);
var animate = {
  scale: {
    scale: 0,
    opacity: 0,
    type: 'from',
    ease: 'easeOutQuad'
  },
  alpha: {
    opacity: 0,
    type: 'from',
    ease: 'easeOutQuad'
  },
  y: {
    y: 30,
    opacity: 0,
    type: 'from',
    ease: 'easeOutQuad'
  },
  y2: {
    y: -30,
    opacity: 0,
    type: 'from',
    ease: 'easeOutQuad'
  },
  x: {
    x: 30,
    opacity: 0,
    type: 'from',
    ease: 'easeOutQuad'
  },
  x2: {
    x: -30,
    opacity: 0,
    type: 'from',
    ease: 'easeOutQuad'
  },
  draw: {
    SVGDraw: 0,
    type: 'from',
    ease: 'easeOutQuad'
  },
  loop: {
    yoyo: true,
    repeat: -1,
    duration: 2500
  }
};
/* harmony default export */ var BannerSVGAnim = (function () {
  // safari 下取不到 transform 值，，所有动画在外层增加 g 标签。
  return external_React_default.a.createElement("svg", {
    className: "home-banner-anim",
    width: "100%",
    height: "100%",
    viewBox: "0 0 598 342",
    xmlns: "http://www.w3.org/2000/svg",
    version: "1.1"
  }, external_React_default.a.createElement("defs", null, external_React_default.a.createElement("filter", {
    x: "-4.6%",
    y: "-6.1%",
    width: "109.1%",
    height: "116.7%",
    filterUnits: "objectBoundingBox",
    id: "filter-1"
  }, external_React_default.a.createElement("feOffset", {
    dx: "0",
    dy: "7",
    in: "SourceAlpha",
    result: "shadowOffsetOuter1"
  }), external_React_default.a.createElement("feGaussianBlur", {
    stdDeviation: "7.5",
    in: "shadowOffsetOuter1",
    result: "shadowBlurOuter1"
  }), external_React_default.a.createElement("feColorMatrix", {
    values: "0 0 0 0 0.411764706   0 0 0 0 0.482352941   0 0 0 0 0.549019608  0 0 0 0.2 0",
    type: "matrix",
    in: "shadowBlurOuter1",
    result: "shadowMatrixOuter1"
  }), external_React_default.a.createElement("feMerge", null, external_React_default.a.createElement("feMergeNode", {
    in: "shadowMatrixOuter1"
  }), external_React_default.a.createElement("feMergeNode", {
    in: "SourceGraphic"
  }))), external_React_default.a.createElement("rect", {
    id: "path-2",
    x: "0",
    y: "0.432276657",
    width: "10.7772021",
    height: "10.7896254"
  }), external_React_default.a.createElement("linearGradient", {
    x1: "24.3804028%",
    y1: "50%",
    x2: "107.642915%",
    y2: "50%",
    id: "linearGradient-3"
  }, external_React_default.a.createElement("stop", {
    stopColor: "#65D0E6",
    offset: "0%"
  }), external_React_default.a.createElement("stop", {
    stopColor: "#D3F3BA",
    offset: "100%"
  })), external_React_default.a.createElement("rect", {
    id: "path-4",
    x: "0.7582038",
    y: "0.544668588",
    width: "35.9240069",
    height: "43.1585014"
  }), external_React_default.a.createElement("linearGradient", {
    x1: "143.292387%",
    y1: "50%",
    x2: "0%",
    y2: "50%",
    id: "linearGradient-5"
  }, external_React_default.a.createElement("stop", {
    stopColor: "#76AEFF",
    stopOpacity: "0.5",
    offset: "0%"
  }), external_React_default.a.createElement("stop", {
    stopColor: "#1D22F2",
    stopOpacity: "0.5",
    offset: "100%"
  })), external_React_default.a.createElement("rect", {
    id: "path-6",
    x: "39.3765112",
    y: "99.4495677",
    width: "43.1088083",
    height: "10.7896254"
  }), external_React_default.a.createElement("rect", {
    id: "path-7",
    x: "76.1986183",
    y: "130.919308",
    width: "10.7772021",
    height: "7.19308357"
  }), external_React_default.a.createElement("rect", {
    id: "path-8",
    x: "0",
    y: "0",
    width: "101",
    height: "79"
  }), external_React_default.a.createElement("rect", {
    id: "path-10",
    x: "0",
    y: "0",
    width: "337.685665",
    height: "57.5446686"
  }), external_React_default.a.createElement("rect", {
    id: "path-12",
    x: "0",
    y: "0",
    width: "122.141623",
    height: "86.3170029"
  }), external_React_default.a.createElement("ellipse", {
    id: "path-14",
    cx: "39.5164076",
    cy: "78.2247839",
    rx: "53.8860104",
    ry: "53.9481268"
  }), external_React_default.a.createElement("linearGradient", {
    x1: "100%",
    y1: "50%",
    x2: "0%",
    y2: "50%",
    id: "linearGradient-15"
  }, external_React_default.a.createElement("stop", {
    stopColor: "#FFF53D",
    stopOpacity: "0.5",
    offset: "0%"
  }), external_React_default.a.createElement("stop", {
    stopColor: "#1B5DF5",
    stopOpacity: "0.616225091",
    offset: "100%"
  })), external_React_default.a.createElement("rect", {
    id: "path-16",
    x: "89.7685665",
    y: "26.3659942",
    width: "26.044905",
    height: "28.7723343"
  }), external_React_default.a.createElement("linearGradient", {
    x1: "50%",
    y1: "2.77822066%",
    x2: "50%",
    y2: "100%",
    id: "linearGradient-17"
  }, external_React_default.a.createElement("stop", {
    stopColor: "#5292FD",
    offset: "0%"
  }), external_React_default.a.createElement("stop", {
    stopColor: "#532AF8",
    offset: "100%"
  })), external_React_default.a.createElement("linearGradient", {
    x1: "416.261243%",
    y1: "-19.5474797%",
    x2: "416.261244%",
    y2: "218.694286%",
    id: "linearGradient-18"
  }, external_React_default.a.createElement("stop", {
    stopColor: "#76AEFF",
    stopOpacity: "0.5",
    offset: "0%"
  }), external_React_default.a.createElement("stop", {
    stopColor: "#1D22F2",
    stopOpacity: "0.5",
    offset: "100%"
  })), external_React_default.a.createElement("rect", {
    id: "path-19",
    x: "47.5993092",
    y: "36.2247839",
    width: "8.08290155",
    height: "57.5446686"
  }), external_React_default.a.createElement("rect", {
    id: "path-20",
    x: "65.5613126",
    y: "50.610951",
    width: "10.7772021",
    height: "43.1585014"
  }), external_React_default.a.createElement("rect", {
    id: "path-21",
    x: "101.48532",
    y: "75.7867435",
    width: "10.7772021",
    height: "17.9827089"
  }), external_React_default.a.createElement("rect", {
    id: "path-22",
    x: "119.447323",
    y: "68.5936599",
    width: "10.7772021",
    height: "25.1757925"
  }), external_React_default.a.createElement("rect", {
    id: "path-23",
    x: "83.5233161",
    y: "21.8386167",
    width: "10.7772021",
    height: "71.9308357"
  }), external_React_default.a.createElement("linearGradient", {
    x1: "24.3804028%",
    y1: "50%",
    x2: "107.642915%",
    y2: "50%",
    id: "linearGradient-24"
  }, external_React_default.a.createElement("stop", {
    stopColor: "#4CCAE9",
    offset: "0%"
  }), external_React_default.a.createElement("stop", {
    stopColor: "#D3F3BA",
    offset: "100%"
  })), external_React_default.a.createElement("linearGradient", {
    x1: "196.877572%",
    y1: "11.6518021%",
    x2: "-49.8197415%",
    y2: "11.6518021%",
    id: "linearGradient-25"
  }, external_React_default.a.createElement("stop", {
    stopColor: "#75D4E1",
    offset: "0%"
  }), external_React_default.a.createElement("stop", {
    stopColor: "#4E56FB",
    offset: "100%"
  })), external_React_default.a.createElement("rect", {
    id: "path-26",
    x: "29.0846287",
    y: "37.4639769",
    width: "28.7392055",
    height: "28.7723343"
  }), external_React_default.a.createElement("linearGradient", {
    x1: "50%",
    y1: "110.15691%",
    x2: "50%",
    y2: "-14.8990438%",
    id: "linearGradient-27"
  }, external_React_default.a.createElement("stop", {
    stopColor: "#4CCAE9",
    stopOpacity: "0.551120924",
    offset: "0%"
  }), external_React_default.a.createElement("stop", {
    stopColor: "#C3FF94",
    stopOpacity: "0.4356601",
    offset: "100%"
  }))), external_React_default.a.createElement("g", {
    id: "\u9996\u9875",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, external_React_default.a.createElement("g", {
    transform: "translate(-800.000000, -162.000000)",
    id: "\u9996\u5C4F"
  }, external_React_default.a.createElement("g", {
    transform: "translate(130.000000, 170.000000)"
  }, external_React_default.a.createElement("g", {
    id: "\u63D2\u56FE-\u9875\u9762",
    filter: "url(#filter-1)",
    transform: "translate(685.000000, 0.000000)"
  }, external_React_default.a.createElement("g", {
    id: "s0"
  }, external_React_default.a.createElement("g", {
    className: "abc",
    id: "Group-24",
    transform: "translate(1.000000, 0.000000)"
  }, external_React_default.a.createElement(rc_tween_one_es["a" /* default */], {
    component: "g",
    animation: [Object.assign({}, animate.scale), Object.assign({
      y: 10
    }, animate.loop)]
  }, external_React_default.a.createElement("rect", {
    id: "Rectangle-17-Copy-16",
    fill: "#85A5FF",
    transform: "translate(47.497409, 7.193084) scale(1, -1) translate(-47.497409, -7.193084) ",
    x: "40.3126079",
    y: "1.13686838e-13",
    width: "14.3696028",
    height: "14.3861671"
  })), external_React_default.a.createElement(rc_tween_one_es["a" /* default */], {
    component: "g",
    animation: [Object.assign({}, animate.scale, {
      delay: 50
    }), Object.assign({
      y: -10
    }, animate.loop)]
  }, external_React_default.a.createElement("g", {
    id: "Group-4",
    transform: "translate(11.000000, 14.000000)"
  }, external_React_default.a.createElement("polygon", {
    id: "Rectangle-17-Copy-15",
    fill: "#4060FF",
    opacity: "0.634736474",
    transform: "translate(14.943005, 14.772334) scale(1, -1) translate(-14.943005, -14.772334) ",
    points: "0.573402418 0.386167147 29.3126079 0.386167147 0.573402418 29.1585014"
  }), external_React_default.a.createElement("rect", {
    id: "Rectangle-17-Copy-15",
    fill: "#4060FF",
    opacity: "0.888701026",
    transform: "translate(14.943005, 14.772334) scale(1, -1) translate(-14.943005, -14.772334) ",
    x: "0.573402418",
    y: "0.386167147",
    width: "28.7392055",
    height: "28.7723343"
  }), external_React_default.a.createElement("polygon", {
    id: "Rectangle-17-Copy-15",
    fill: "#294CF7",
    opacity: "0.888701026",
    transform: "translate(14.943005, 14.772334) scale(1, -1) translate(-14.943005, -14.772334) ",
    points: "0.573402418 0.386167147 29.3126079 0.386167147 29.3126079 29.1585014"
  }))), external_React_default.a.createElement("g", {
    id: "Group-7",
    transform: "translate(0.000000, 265.000000)"
  }, external_React_default.a.createElement(rc_tween_one_es["a" /* default */], {
    component: "g",
    animation: [Object.assign({}, animate.scale, {
      delay: 1000
    }), Object.assign({
      y: 5
    }, animate.loop)]
  }, external_React_default.a.createElement("rect", {
    id: "Rectangle-17-Copy-20",
    fill: "#339AFF",
    opacity: "0.625583022",
    transform: "translate(492.955095, 5.639769) scale(1, -1) translate(-492.955095, -5.639769) ",
    x: "487.566494",
    y: "0.244956772",
    width: "10.7772021",
    height: "10.7896254"
  })), external_React_default.a.createElement(rc_tween_one_es["a" /* default */], {
    component: "g",
    animation: [Object.assign({}, animate.scale, {
      delay: 1150
    }), Object.assign({
      y: -5
    }, animate.loop)]
  }, external_React_default.a.createElement("rect", {
    id: "Rectangle-17-Copy-43",
    fill: "#1890FF",
    opacity: "0.907940765",
    transform: "translate(20.554404, 41.605187) scale(1, -1) translate(-20.554404, -41.605187) ",
    x: "15.1658031",
    y: "36.2103746",
    width: "10.7772021",
    height: "10.7896254"
  })), external_React_default.a.createElement(rc_tween_one_es["a" /* default */], {
    component: "g",
    animation: [Object.assign({}, animate.scale, {
      delay: 1200
    }), Object.assign({
      y: 5
    }, animate.loop)]
  }, external_React_default.a.createElement("rect", {
    id: "Rectangle-17-Copy-44",
    fill: "#91D5FF",
    opacity: "0.907940765",
    transform: "translate(4.388601, 35.311239) scale(1, -1) translate(-4.388601, -35.311239) ",
    x: "0.796200345",
    y: "31.7146974",
    width: "7.18480138",
    height: "7.19308357"
  })), external_React_default.a.createElement(rc_tween_one_es["a" /* default */], {
    component: "g",
    animation: Object.assign({}, animate.y, {
      delay: 1050
    })
  }, external_React_default.a.createElement("rect", {
    id: "Rectangle-17-Copy-9",
    fill: "#1890FF",
    x: "40.3126079",
    y: "27.2190202",
    width: "452.642487",
    height: "7.19308357"
  })), external_React_default.a.createElement(rc_tween_one_es["a" /* default */], {
    component: "g",
    animation: Object.assign({}, animate.y, {
      delay: 1000
    })
  }, external_React_default.a.createElement("rect", {
    id: "Rectangle-17-Copy-10",
    fill: "#69C0FF",
    x: "4.38860104",
    y: "20.0259366",
    width: "493.955095",
    height: "7.19308357"
  }))))), external_React_default.a.createElement("g", {
    id: "s1"
  }, external_React_default.a.createElement("g", {
    id: "Group-21",
    transform: "translate(0.000000, 174.000000)"
  }, external_React_default.a.createElement(rc_tween_one_es["a" /* default */], {
    component: "g",
    animation: Object.assign({}, animate.x, {
      delay: 700
    })
  }, external_React_default.a.createElement("path", {
    d: "M42.2107081,5.82708934 L6.28670121,5.82708934",
    id: "Path-5",
    stroke: "#2F54EB",
    strokeWidth: "0.89775",
    strokeLinecap: "round",
    transform: "translate(24.248705, 5.827089) scale(-1, 1) translate(-24.248705, -5.827089) "
  }), external_React_default.a.createElement("g", {
    id: "Rectangle-17-Copy-34"
  }, external_React_default.a.createElement("use", {
    fill: "#FFFFFF",
    fillRule: "evenodd",
    xlinkHref: "#path-2"
  }), external_React_default.a.createElement("rect", {
    stroke: "#2F54EB",
    strokeWidth: "0.89775",
    x: "0.448875",
    y: "0.881151657",
    width: "9.87945207",
    height: "9.89187536"
  }))))), external_React_default.a.createElement("g", {
    id: "s2"
  }, external_React_default.a.createElement("g", {
    id: "Group-18",
    transform: "translate(19.000000, 57.000000)"
  }, external_React_default.a.createElement("g", {
    id: "Group-17",
    transform: "translate(0.758204, 0.544669)"
  }, external_React_default.a.createElement(rc_tween_one_es["a" /* default */], {
    component: "g",
    animation: Object.assign({}, animate.y, {
      delay: 300
    })
  }, external_React_default.a.createElement("rect", {
    id: "Rectangle-17-Copy-2",
    fill: "#1890FF",
    x: "0",
    y: "0",
    width: "100.587219",
    height: "151.054755"
  })), external_React_default.a.createElement(rc_tween_one_es["a" /* default */], {
    component: "g",
    animation: Object.assign({}, animate.y, {
      delay: 320
    })
  }, external_React_default.a.createElement("rect", {
    id: "Rectangle-17-Copy-2",
    fill: "#95DE64",
    opacity: "0.819204757",
    x: "0",
    y: "43.1585014",
    width: "100.587219",
    height: "107.896254"
  }), external_React_default.a.createElement("polygon", {
    id: "Rectangle-17-Copy-2",
    fill: "#95DE64",
    points: "100.587219 43.1585014 100.587219 151.054755 0 151.054755"
  }))), external_React_default.a.createElement(rc_tween_one_es["a" /* default */], {
    animation: Object.assign({}, animate.draw, {
      delay: 500
    }),
    component: "polyline",
    id: "Path-9",
    stroke: "#FFFFFF",
    strokeWidth: "0.89775",
    points: "63.4561007,20.9071232 83.2184056,20.9071232 83.2184056,43.4136061"
  }), external_React_default.a.createElement(rc_tween_one_es["a" /* default */], {
    component: "g",
    animation: Object.assign({}, animate.x2, {
      x: -5,
      delay: 450
    })
  }, external_React_default.a.createElement("rect", {
    id: "Rectangle-17-Copy-23",
    fill: "#FADB14",
    transform: "translate(40.274611, 17.628242) scale(1, -1) rotate(90.000000) translate(-40.274611, -17.628242) ",
    x: "33.08981",
    y: "14.0317003",
    width: "14.3696028",
    height: "7.19308357"
  })), external_React_default.a.createElement(rc_tween_one_es["a" /* default */], {
    component: "g",
    animation: Object.assign({}, animate.x2, {
      x: -5,
      delay: 470
    })
  }, external_React_default.a.createElement("rect", {
    id: "Rectangle-17-Copy-28",
    fill: "#FADB14",
    transform: "translate(54.644214, 17.628242) scale(1, -1) rotate(90.000000) translate(-54.644214, -17.628242) ",
    x: "47.4594128",
    y: "14.0317003",
    width: "14.3696028",
    height: "7.19308357"
  })), external_React_default.a.createElement(rc_tween_one_es["a" /* default */], {
    component: "g",
    animation: Object.assign({}, animate.x2, {
      x: -5,
      delay: 460
    })
  }, external_React_default.a.createElement("rect", {
    id: "Rectangle-17-Copy-27",
    fill: "#06080A",
    transform: "translate(47.459413, 22.123919) scale(1, -1) rotate(90.000000) translate(-47.459413, -22.123919) ",
    x: "40.2746114",
    y: "18.5273775",
    width: "14.3696028",
    height: "7.19308357"
  })), external_React_default.a.createElement(rc_tween_one_es["a" /* default */], {
    component: "g",
    animation: Object.assign({}, animate.x2, {
      x: -5,
      delay: 480
    })
  }, external_React_default.a.createElement("rect", {
    id: "Rectangle-17-Copy-29",
    fill: "#06080A",
    transform: "translate(61.829016, 19.426513) scale(1, -1) rotate(90.000000) translate(-61.829016, -19.426513) ",
    x: "58.2366149",
    y: "15.8299712",
    width: "7.18480138",
    height: "7.19308357"
  })), external_React_default.a.createElement("g", {
    id: "Rectangle-17-Copy-25",
    opacity: "0.892432369",
    transform: "translate(18.720207, 22.123919) scale(1, -1) translate(-18.720207, -22.123919) "
  }, external_React_default.a.createElement(rc_tween_one_es["a" /* default */], {
    component: "g",
    animation: Object.assign({}, animate.y2, {
      delay: 340
    })
  }, external_React_default.a.createElement("use", {
    fill: "url(#linearGradient-3)",
    xlinkHref: "#path-4"
  }), external_React_default.a.createElement("use", {
    fillOpacity: "0.550000012",
    fill: "#91D5FF",
    xlinkHref: "#path-4"
  }))), external_React_default.a.createElement(rc_tween_one_es["a" /* default */], {
    component: "g",
    animation: Object.assign({}, animate.y, {
      delay: 360
    })
  }, external_React_default.a.createElement("rect", {
    id: "Rectangle-17-Copy-25",
    fill: "#06080A",
    transform: "translate(18.720207, 40.106628) scale(1, -1) translate(-18.720207, -40.106628) ",
    x: "0.7582038",
    y: "36.5100865",
    width: "35.9240069",
    height: "7.19308357"
  })), external_React_default.a.createElement(rc_tween_one_es["a" /* default */], {
    component: "g",
    animation: Object.assign({}, animate.alpha, {
      y: 5,
      delay: 600
    })
  }, external_React_default.a.createElement("rect", {
    id: "Rectangle-17-Copy-17",
    fill: "#FA541C",
    transform: "translate(83.383420, 43.703170) scale(1, -1) translate(-83.383420, -43.703170) ",
    x: "76.1986183",
    y: "41.9048991",
    width: "14.3696028",
    height: "3.59654179"
  })), external_React_default.a.createElement(rc_tween_one_es["a" /* default */], {
    component: "g",
    animation: Object.assign({}, animate.y, {
      delay: 470
    })
  }, external_React_default.a.createElement("rect", {
    id: "Rectangle-17-Copy-37",
    fill: "#1890FF",
    transform: "translate(22.312608, 68.878963) scale(1, -1) rotate(90.000000) translate(-22.312608, -68.878963) ",
    x: "15.1278066",
    y: "61.685879",
    width: "14.3696028",
    height: "14.3861671",
    rx: "7.18480138"
  }), external_React_default.a.createElement("ellipse", {
    id: "Oval-3",
    fill: "#06080A",
    cx: "22.3126079",
    cy: "68.8789625",
    rx: "2.69430052",
    ry: "2.69740634"
  })), external_React_default.a.createElement(rc_tween_one_es["a" /* default */], {
    component: "g",
    animation: Object.assign({}, animate.scale, {
      delay: 450
    })
  }, external_React_default.a.createElement("ellipse", {
    id: "Oval-3",
    fill: "#06080A",
    cx: "18.7202073",
    cy: "19.426513",
    rx: "2.69430052",
    ry: "2.69740634"
  })), external_React_default.a.createElement(rc_tween_one_es["a" /* default */], {
    component: "g",
    animation: Object.assign({}, animate.y, {
      delay: 480
    })
  }, external_React_default.a.createElement("rect", {
    id: "Rectangle-17-Copy-37",
    fill: "#1890FF",
    transform: "translate(22.312608, 104.844380) scale(1, -1) rotate(90.000000) translate(-22.312608, -104.844380) ",
    x: "15.1278066",
    y: "97.6512968",
    width: "14.3696028",
    height: "14.3861671",
    rx: "7.18480138"
  }), external_React_default.a.createElement("ellipse", {
    id: "Oval-3-Copy-7",
    fill: "#06080A",
    cx: "22.3126079",
    cy: "104.84438",
    rx: "2.69430052",
    ry: "2.69740634"
  })), external_React_default.a.createElement(rc_tween_one_es["a" /* default */], {
    component: "g",
    animation: Object.assign({}, animate.y, {
      delay: 490
    })
  }, external_React_default.a.createElement("path", {
    d: "M22.3126079,68.8789625 L22.3126079,104.84438",
    id: "Path-18-Copy",
    stroke: "#2F54EB",
    strokeWidth: "0.53865",
    strokeLinecap: "round"
  })), external_React_default.a.createElement(rc_tween_one_es["a" /* default */], {
    component: "g",
    animation: Object.assign({}, animate.y, {
      delay: 500
    })
  }, external_React_default.a.createElement("polyline", {
    id: "Path-19",
    stroke: "#2F54EB",
    strokeWidth: "0.7182",
    opacity: "0.573344216",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    points: "76.7111668 66.1815562 76.7111668 79.8272874 80.6891192 82.2584505 73.5225397 82.2584505 80.6891192 85.5560721 73.5043178 85.5560721 80.6891192 89.1260808 73.5043178 89.1260808 80.6891192 92.7076803 73.5225397 92.7076803 77.0967185 96.0586202 77.0967185 101.247839"
  })), external_React_default.a.createElement(rc_tween_one_es["a" /* default */], {
    component: "g",
    animation: Object.assign({}, animate.y, {
      delay: 510
    })
  }, external_React_default.a.createElement("rect", {
    id: "Rectangle-17-Copy-39",
    fill: "#FFC53D",
    x: "39.3765112",
    y: "63.4841499",
    width: "43.1088083",
    height: "10.7896254"
  })), external_React_default.a.createElement(rc_tween_one_es["a" /* default */], {
    component: "g",
    animation: Object.assign({}, animate.y, {
      delay: 520
    })
  }, external_React_default.a.createElement("rect", {
    id: "Rectangle-17-Copy-39",
    fill: "#000000",
    x: "71.7081174",
    y: "63.4841499",
    width: "10.7772021",
    height: "10.7896254"
  })), external_React_default.a.createElement(rc_tween_one_es["a" /* default */], {
    component: "g",
    animation: Object.assign({}, animate.y, {
      delay: 530
    })
  }, external_React_default.a.createElement("g", {
    id: "Rectangle-17-Copy-40"
  }, external_React_default.a.createElement("use", {
    fill: "#2471F5",
    xlinkHref: "#path-6"
  }), external_React_default.a.createElement("use", {
    fillOpacity: "0.370000005",
    fill: "url(#linearGradient-5)",
    xlinkHref: "#path-6"
  }))), external_React_default.a.createElement(rc_tween_one_es["a" /* default */], {
    component: "g",
    animation: Object.assign({}, animate.y, {
      delay: 540
    })
  }, external_React_default.a.createElement("rect", {
    id: "Rectangle-17-Copy-40",
    fill: "#2459F5",
    x: "71.7081174",
    y: "99.4495677",
    width: "10.7772021",
    height: "10.7896254"
  })), external_React_default.a.createElement(rc_tween_one_es["a" /* default */], {
    component: "g",
    animation: Object.assign({}, animate.y, {
      delay: 400
    })
  }, external_React_default.a.createElement("use", {
    fill: "#2471F5",
    xlinkHref: "#path-7"
  }), external_React_default.a.createElement("use", {
    fillOpacity: "0.370000005",
    fill: "url(#linearGradient-5)",
    xlinkHref: "#path-7"
  })), external_React_default.a.createElement(rc_tween_one_es["a" /* default */], {
    animation: Object.assign({}, animate.draw, {
      delay: 700
    }),
    component: "polyline",
    id: "Path-20",
    stroke: "#2668F4",
    strokeWidth: "0.7182",
    points: "43.8670121 110.239193 43.8670121 125.632262 81.3129252 125.632262 81.3129252 131.566266"
  }))), external_React_default.a.createElement("g", {
    id: "s3"
  }, external_React_default.a.createElement("g", {
    id: "Group-3",
    transform: "translate(5.000000, 195.000000)"
  }, external_React_default.a.createElement(rc_tween_one_es["a" /* default */], {
    component: "g",
    animation: Object.assign({}, animate.y, {
      delay: 520
    })
  }, external_React_default.a.createElement("mask", {
    id: "mask-9",
    fill: "white"
  }, external_React_default.a.createElement("use", {
    xlinkHref: "#path-8"
  })), external_React_default.a.createElement("use", {
    id: "Rectangle-17-Copy-18",
    fill: "#1778FF",
    xlinkHref: "#path-8"
  }), external_React_default.a.createElement("ellipse", {
    id: "Oval-5",
    fill: "#1793FF",
    opacity: "0.499125466",
    mask: "url(#mask-9)",
    cx: "12.1741071",
    cy: "-8.43258427",
    rx: "88.8258929",
    ry: "87.4325843"
  })), external_React_default.a.createElement("g", {
    id: "Group-15",
    transform: "translate(54.500000, 21.500000) scale(-1, 1) translate(-54.500000, -21.500000) translate(15.000000, 7.000000)"
  }, external_React_default.a.createElement(rc_tween_one_es["a" /* default */], {
    component: "g",
    animation: Object.assign({}, animate.y, {
      delay: 520
    })
  }, external_React_default.a.createElement("rect", {
    id: "Rectangle-17-Copy-30",
    fill: "#40A9FF",
    transform: "translate(21.545455, 10.875000) scale(1, -1) translate(-21.545455, -10.875000) ",
    x: "0",
    y: "0",
    width: "43.0909091",
    height: "21.75"
  })), external_React_default.a.createElement(rc_tween_one_es["a" /* default */], {
    component: "g",
    animation: Object.assign({}, animate.y, {
      delay: 530
    })
  }, external_React_default.a.createElement("rect", {
    id: "Rectangle-17-Copy-30",
    fill: "#FFFFFF",
    transform: "translate(21.545455, 18.125000) scale(1, -1) translate(-21.545455, -18.125000) ",
    x: "0",
    y: "14.5",
    width: "43.0909091",
    height: "7.25"
  })), external_React_default.a.createElement(rc_tween_one_es["a" /* default */], {
    component: "g",
    animation: Object.assign({}, animate.y, {
      delay: 540
    })
  }, external_React_default.a.createElement("rect", {
    id: "Rectangle-17-Copy-30",
    fill: "#2A6FF5",
    transform: "translate(5.386364, 10.875000) scale(1, -1) translate(-5.386364, -10.875000) ",
    x: "0",
    y: "0",
    width: "10.7727273",
    height: "21.75"
  })), external_React_default.a.createElement(rc_tween_one_es["a" /* default */], {
    component: "g",
    animation: Object.assign({}, animate.y, {
      delay: 550
    })
  }, external_React_default.a.createElement("rect", {
    id: "Rectangle-17-Copy-30",
    fill: "#40A9FF",
    transform: "translate(5.386364, 18.125000) scale(1, -1) translate(-5.386364, -18.125000) ",
    x: "0",
    y: "14.5",
    width: "10.7727273",
    height: "7.25"
  })), external_React_default.a.createElement(rc_tween_one_es["a" /* default */], {
    component: "g",
    animation: Object.assign({}, animate.y, {
      delay: 560
    })
  }, external_React_default.a.createElement("rect", {
    id: "Rectangle-17-Copy-31",
    fill: "#06080A",
    transform: "translate(61.045455, 21.750000) scale(-1, -1) translate(-61.045455, -21.750000) ",
    x: "57.4545455",
    y: "14.5",
    width: "7.18181818",
    height: "14.5"
  })), external_React_default.a.createElement(rc_tween_one_es["a" /* default */], {
    component: "g",
    animation: Object.assign({}, animate.y, {
      delay: 570
    })
  }, external_React_default.a.createElement("rect", {
    id: "Rectangle-17-Copy-31",
    fill: "#FFFFFF",
    transform: "translate(61.045455, 25.375000) scale(-1, -1) translate(-61.045455, -25.375000) ",
    x: "57.4545455",
    y: "21.75",
    width: "7.18181818",
    height: "7.25"
  })), external_React_default.a.createElement(rc_tween_one_es["a" /* default */], {
    component: "g",
    animation: Object.assign({}, animate.y, {
      delay: 580
    })
  }, external_React_default.a.createElement("rect", {
    id: "Rectangle-17-Copy-31",
    fill: "#FFEC3D",
    transform: "translate(75.409091, 25.375000) scale(-1, -1) translate(-75.409091, -25.375000) ",
    x: "71.8181818",
    y: "21.75",
    width: "7.18181818",
    height: "7.25"
  })), external_React_default.a.createElement(rc_tween_one_es["a" /* default */], {
    component: "g",
    animation: Object.assign({}, animate.y, {
      delay: 590
    })
  }, external_React_default.a.createElement("ellipse", {
    id: "Oval-3",
    fill: "#06080A",
    cx: "10.7727273",
    cy: "14.5",
    rx: "2.69318182",
    ry: "2.71875"
  }))), external_React_default.a.createElement(rc_tween_one_es["a" /* default */], {
    component: "g",
    animation: Object.assign({}, animate.y, {
      delay: 600
    })
  }, external_React_default.a.createElement("circle", {
    id: "Oval-3-Copy-5",
    fill: "#06080A",
    cx: "84",
    cy: "44",
    r: "2"
  })), external_React_default.a.createElement(rc_tween_one_es["a" /* default */], {
    component: "g",
    animation: Object.assign({}, animate.y, {
      delay: 610
    })
  }, external_React_default.a.createElement("circle", {
    id: "Oval-3-Copy-6",
    fill: "#06080A",
    cx: "84",
    cy: "67",
    r: "2"
  })), external_React_default.a.createElement(rc_tween_one_es["a" /* default */], {
    component: "g",
    animation: Object.assign({}, animate.y, {
      delay: 605
    })
  }, external_React_default.a.createElement("path", {
    d: "M84.5,45 L84.5,67",
    id: "Path-18",
    stroke: "#FFFFFF",
    strokeWidth: "0.53865",
    strokeLinecap: "round"
  })), external_React_default.a.createElement(rc_tween_one_es["a" /* default */], {
    component: "g",
    animation: Object.assign({}, animate.y, {
      delay: 610
    })
  }, external_React_default.a.createElement("rect", {
    id: "Rectangle-17-Copy-48",
    fill: "#95DE64",
    x: "15",
    y: "50",
    width: "36",
    height: "11"
  })))), external_React_default.a.createElement("g", {
    id: "s4"
  }, external_React_default.a.createElement("g", {
    id: "Group-25",
    transform: "translate(120.000000, 57.000000)"
  }, external_React_default.a.createElement("g", {
    id: "Group-19",
    transform: "translate(0.345423, 0.544669)"
  }, external_React_default.a.createElement(rc_tween_one_es["a" /* default */], {
    component: "g",
    animation: Object.assign({}, animate.x, {
      delay: 300
    })
  }, external_React_default.a.createElement("mask", {
    id: "mask-11",
    fill: "white"
  }, external_React_default.a.createElement("use", {
    xlinkHref: "#path-10"
  }))), external_React_default.a.createElement(rc_tween_one_es["a" /* default */], {
    component: "g",
    animation: Object.assign({}, animate.x, {
      delay: 310
    })
  }, external_React_default.a.createElement("use", {
    id: "Rectangle-17-Copy-4",
    fill: "#D9F2FF",
    xlinkHref: "#path-10"
  })), external_React_default.a.createElement(rc_tween_one_es["a" /* default */], {
    component: "g",
    animation: Object.assign({}, animate.x, {
      delay: 320
    })
  }, external_React_default.a.createElement("ellipse", {
    id: "Oval-2",
    fill: "#597EF7",
    style: {
      mixBlendMode: 'multiply'
    },
    mask: "url(#mask-11)",
    cx: "267.633851",
    cy: "49.4524496",
    rx: "84.4214162",
    ry: "84.518732"
  })), external_React_default.a.createElement(rc_tween_one_es["a" /* default */], {
    component: "g",
    animation: Object.assign({}, animate.x, {
      delay: 330
    })
  }, external_React_default.a.createElement("polygon", {
    id: "Rectangle-17-Copy-12",
    fillOpacity: "0.09",
    fill: "#000000",
    mask: "url(#mask-11)",
    points: "231.709845 0 265.837651 0 265.837651 34.167147 231.709845 34.167147"
  })), external_React_default.a.createElement(rc_tween_one_es["a" /* default */], {
    component: "g",
    animation: Object.assign({}, animate.x, {
      delay: 340
    })
  }, external_React_default.a.createElement("polygon", {
    id: "Rectangle-17-Copy-14",
    fillOpacity: "0.09",
    fill: "#000000",
    mask: "url(#mask-11)",
    points: "199.378238 34.167147 231.709845 34.167147 231.709845 57.5446686 199.378238 57.5446686"
  })), external_React_default.a.createElement(rc_tween_one_es["a" /* default */], {
    component: "g",
    animation: Object.assign({}, animate.x, {
      delay: 350
    })
  }, external_React_default.a.createElement("ellipse", {
    id: "Oval-9-Copy",
    fill: "#06080A",
    mask: "url(#mask-11)",
    cx: "210.15544",
    cy: "19.7809798",
    rx: "3.59240069",
    ry: "3.59654179"
  })), external_React_default.a.createElement(rc_tween_one_es["a" /* default */], {
    component: "g",
    animation: Object.assign({}, animate.x, {
      delay: 360
    })
  }, external_React_default.a.createElement("ellipse", {
    id: "Oval-9-Copy",
    fill: "#06080A",
    mask: "url(#mask-11)",
    cx: "283.799655",
    cy: "18.8818444",
    rx: "3.59240069",
    ry: "3.59654179"
  })), external_React_default.a.createElement(rc_tween_one_es["a" /* default */], {
    component: "g",
    animation: Object.assign({}, animate.x, {
      delay: 370
    })
  }, external_React_default.a.createElement("ellipse", {
    id: "Oval-9-Copy",
    fill: "#06080A",
    mask: "url(#mask-11)",
    cx: "319.723661",
    cy: "18.8818444",
    rx: "3.59240069",
    ry: "3.59654179"
  })), external_React_default.a.createElement(rc_tween_one_es["a" /* default */], {
    animation: Object.assign({}, animate.draw, {
      delay: 700
    }),
    component: "path",
    d: "M283.799655,18.8818444 L320.079974,18.8818444",
    id: "Path-15",
    stroke: "#FFFFFF",
    strokeWidth: "0.89775",
    strokeLinecap: "round"
  }), external_React_default.a.createElement(rc_tween_one_es["a" /* default */], {
    component: "g",
    animation: Object.assign({}, animate.x, {
      delay: 380
    })
  }, external_React_default.a.createElement("ellipse", {
    id: "Oval-3",
    fill: "#06080A",
    mask: "url(#mask-11)",
    cx: "14.3696028",
    cy: "32.3688761",
    rx: "2.69430052",
    ry: "2.69740634"
  })), external_React_default.a.createElement(rc_tween_one_es["a" /* default */], {
    component: "g",
    animation: Object.assign({}, animate.x, {
      delay: 390
    })
  }, external_React_default.a.createElement("rect", {
    id: "Rectangle-17-Copy-38",
    fill: "#FFFFFF",
    mask: "url(#mask-11)",
    transform: "translate(248.773748, 20.680115) scale(1, -1) translate(-248.773748, -20.680115) ",
    x: "245.181347",
    y: "17.0835735",
    width: "7.18480138",
    height: "7.19308357"
  })), external_React_default.a.createElement(rc_tween_one_es["a" /* default */], {
    component: "g",
    animation: Object.assign({}, animate.x, {
      delay: 400
    })
  }, external_React_default.a.createElement("rect", {
    id: "Rectangle-17-Copy-45",
    fill: "#000000",
    mask: "url(#mask-11)",
    transform: "translate(248.773748, 13.487032) scale(1, -1) translate(-248.773748, -13.487032) ",
    x: "245.181347",
    y: "9.89048991",
    width: "7.18480138",
    height: "7.19308357"
  }))), external_React_default.a.createElement(rc_tween_one_es["a" /* default */], {
    component: "polyline",
    animation: Object.assign({}, animate.draw, {
      delay: 800
    }),
    id: "Path-8-Copy-2",
    stroke: "#020B3C",
    strokeWidth: "0.89775",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    points: "14.6158175 32.1958978 21.5551548 12.414918 27.9131733 32.1958978 34.2803138 12.414918 40.5554052 32.1958978 47.1995221 12.414918 53.2540275 32.1958978 60.1104377 12.414918 65.9999182 32.1958978 72.551986 12.414918 78.9017118 32.1958978 85.5275847 12.414918 91.7205784 32.1958978 98.0611822 12.414918 104.400957 32.1958978 109 20 208.00505 20"
  }), external_React_default.a.createElement(rc_tween_one_es["a" /* default */], {
    component: "polyline",
    animation: [{
      duration: 0,
      SVGDraw: '-5% 0'
    }, {
      delay: 1200,
      SVGDraw: '100% 105%',
      duration: 1500,
      repeat: -1,
      repeatDelay: 2000
    }],
    id: "Path-8-Copy-2",
    stroke: "#ffffff",
    strokeWidth: "1.3",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    points: "14.6158175 32.1958978 21.5551548 12.414918 27.9131733 32.1958978 34.2803138 12.414918 40.5554052 32.1958978 47.1995221 12.414918 53.2540275 32.1958978 60.1104377 12.414918 65.9999182 32.1958978 72.551986 12.414918 78.9017118 32.1958978 85.5275847 12.414918 91.7205784 32.1958978 98.0611822 12.414918 104.400957 32.1958978 109 20 208.00505 20"
  }))), external_React_default.a.createElement("g", {
    id: "s5"
  }, external_React_default.a.createElement("g", {
    id: "Group-9",
    transform: "translate(443.000000, 7.000000)",
    fill: "#1890FF"
  }, external_React_default.a.createElement(rc_tween_one_es["a" /* default */], {
    component: "g",
    animation: [Object.assign({}, animate.scale, {
      delay: 300,
      ease: 'easeOutBack'
    }), Object.assign({}, animate.loop, {
      y: -5
    })]
  }, external_React_default.a.createElement("ellipse", {
    id: "Oval-8-Copy-2",
    cx: "22.2158895",
    cy: "21.7723343",
    rx: "21.5544041",
    ry: "21.5792507"
  }), external_React_default.a.createElement("path", {
    d: "M0.66148532,21.7723343 C0.66148532,33.6902254 10.3117208,43.351585 22.2158895,43.351585 L22.2158895,43.351585 C34.1200582,43.351585 43.7702936,33.6902254 43.7702936,21.7723343",
    id: "Oval-8-Copy-2",
    style: {
      mixBlendMode: 'screen'
    },
    opacity: "0.963677705"
  })))), external_React_default.a.createElement("g", {
    id: "s6"
  }, external_React_default.a.createElement("g", {
    id: "Group-23",
    transform: "translate(55.000000, 28.000000)"
  }, external_React_default.a.createElement(rc_tween_one_es["a" /* default */], {
    component: "g",
    animation: Object.assign({}, animate.x)
  }, external_React_default.a.createElement("rect", {
    id: "Rectangle-17",
    fill: "#A3DCFF",
    opacity: "0.543901586",
    x: "0.682210708",
    y: "0.772334294",
    width: "402.348877",
    height: "28.7723343"
  })), external_React_default.a.createElement(rc_tween_one_es["a" /* default */], {
    component: "g",
    animation: Object.assign({}, animate.x, {
      delay: 100
    })
  }, external_React_default.a.createElement("rect", {
    id: "Rectangle-17",
    fill: "url(#linearGradient-3)",
    x: "0.682210708",
    y: "0.772334294",
    width: "296.373057",
    height: "28.7723343"
  })), external_React_default.a.createElement(rc_tween_one_es["a" /* default */], {
    component: "g",
    animation: Object.assign({}, animate.x, {
      delay: 200
    })
  }, external_React_default.a.createElement("polygon", {
    id: "Rectangle-17-Copy-13",
    fill: "#40A9FF",
    transform: "translate(351.839378, 25.948127) scale(-1, -1) translate(-351.839378, -25.948127) ",
    points: "331.183074 22.351585 372.495682 22.351585 372.495682 29.5446686 331.183074 29.5446686"
  })))), external_React_default.a.createElement("g", {
    id: "s7"
  }, external_React_default.a.createElement("g", {
    id: "Group-12",
    transform: "translate(256.000000, 113.000000)"
  }, external_React_default.a.createElement("g", {
    id: "Group-14",
    transform: "translate(0.856649, 0.291066)"
  }, external_React_default.a.createElement(rc_tween_one_es["a" /* default */], {
    component: "g",
    animation: Object.assign({}, animate.x2, {
      delay: 500
    })
  }, external_React_default.a.createElement("mask", {
    id: "mask-13",
    fill: "white"
  }, external_React_default.a.createElement("use", {
    xlinkHref: "#path-12"
  }))), external_React_default.a.createElement(rc_tween_one_es["a" /* default */], {
    component: "g",
    animation: Object.assign({}, animate.x2, {
      delay: 550
    })
  }, external_React_default.a.createElement("use", {
    id: "Rectangle-17-Copy-6",
    fill: "#37ABFF",
    opacity: "0.777693563",
    xlinkHref: "#path-12"
  })), external_React_default.a.createElement(rc_tween_one_es["a" /* default */], {
    component: "g",
    animation: Object.assign({}, animate.x2, {
      delay: 600
    })
  }, external_React_default.a.createElement("g", {
    id: "Oval-4",
    mask: "url(#mask-13)"
  }, external_React_default.a.createElement("use", {
    fill: "#466CFF",
    fillRule: "evenodd",
    xlinkHref: "#path-14"
  }), external_React_default.a.createElement("ellipse", {
    strokeOpacity: "0",
    stroke: "#4B4EE6",
    strokeWidth: "7.182",
    cx: "39.5164076",
    cy: "78.2247839",
    rx: "50.2950104",
    ry: "50.3571268"
  }))), external_React_default.a.createElement("path", {
    d: "M39.5164076,24.2766571 C9.75598585,24.2766571 -14.3696028,48.4300561 -14.3696028,78.2247839 C-14.3696028,108.019512 9.75598585,132.172911 39.5164076,132.172911 L39.5164076,132.172911",
    id: "Oval-4",
    fill: "#40A9FF",
    opacity: "0",
    mask: "url(#mask-13)"
  })), external_React_default.a.createElement(rc_tween_one_es["a" /* default */], {
    component: "g",
    animation: Object.assign({}, animate.y2, {
      delay: 700,
      ease: 'easeOutBack'
    })
  }, external_React_default.a.createElement("rect", {
    id: "Rectangle-21-Copy",
    stroke: "#FFFFFF",
    strokeWidth: "0.7182",
    x: "102.701069",
    y: "75.2784084",
    width: "8.26280173",
    height: "6.47488357"
  }), external_React_default.a.createElement("path", {
    d: "M106.83247,54.2391931 L106.83247,74.9193084",
    id: "Path-13",
    stroke: "#FFFFFF",
    strokeWidth: "0.7182"
  })), external_React_default.a.createElement(rc_tween_one_es["a" /* default */], {
    component: "g",
    animation: Object.assign({}, animate.y, {
      delay: 630
    })
  }, external_React_default.a.createElement("g", {
    id: "Rectangle-21"
  }, external_React_default.a.createElement("use", {
    fill: "#5FACFF",
    xlinkHref: "#path-16"
  }), external_React_default.a.createElement("use", {
    fillOpacity: "0.560000002",
    fill: "url(#linearGradient-15)",
    xlinkHref: "#path-16"
  }))), external_React_default.a.createElement(rc_tween_one_es["a" /* default */], {
    component: "g",
    animation: Object.assign({}, animate.scale, {
      delay: 650
    })
  }, external_React_default.a.createElement("ellipse", {
    id: "Oval-3-Copy-4",
    fill: "#06080A",
    cx: "111.322971",
    cy: "47.0461095",
    rx: "2.69430052",
    ry: "2.69740634"
  })), external_React_default.a.createElement(rc_tween_one_es["a" /* default */], {
    component: "polyline",
    animation: Object.assign({}, animate.draw, {
      delay: 900,
      duration: 2000
    }),
    id: "line1",
    stroke: "#FFFFFF",
    strokeWidth: "0.7182",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    points: "111.21759 47.1541214 94.4492377 47.1541214 94.4492377 68.9613531 23.986392 68.9613531 67.6019908 60.459878 23.986392 58.0577373 67.6019908 49.9726914 23.986392 47.1541214 94.4492377 32.987828 94.4492377 16.9029855 12.2720998 16.9029855"
  }))), external_React_default.a.createElement("g", {
    id: "s8"
  }, external_React_default.a.createElement("g", {
    id: "Group-2",
    transform: "translate(131.122625, 99.544669)"
  }, external_React_default.a.createElement(rc_tween_one_es["a" /* default */], {
    component: "g",
    animation: Object.assign({}, animate.y, {
      delay: 400
    })
  }, external_React_default.a.createElement("polygon", {
    id: "Rectangle-17-Copy-5",
    fill: "#1890FF",
    points: "125.734024 7.45244957 136.511226 0.259365994 136.511226 93.7694524 125.734024 100.063401"
  })), external_React_default.a.createElement(rc_tween_one_es["a" /* default */], {
    component: "g",
    animation: Object.assign({}, animate.y, {
      delay: 430
    })
  }, external_React_default.a.createElement("polygon", {
    id: "Rectangle-17-Copy-5",
    fill: "#77C2FF",
    points: "0 0.259365994 136.511226 0.259365994 136.511226 93.7694524 0 93.7694524"
  })), external_React_default.a.createElement(rc_tween_one_es["a" /* default */], {
    component: "g",
    animation: Object.assign({}, animate.y, {
      delay: 460
    })
  }, external_React_default.a.createElement("polygon", {
    id: "Rectangle-17-Copy-5",
    fill: "#FADB14",
    points: "0 0.259365994 35.9240069 0.259365994 35.9240069 47.0144092 0 47.0144092"
  })), external_React_default.a.createElement(rc_tween_one_es["a" /* default */], {
    component: "g",
    animation: Object.assign({}, animate.y, {
      delay: 490
    })
  }, external_React_default.a.createElement("polygon", {
    id: "Rectangle-17-Copy-5",
    fill: "url(#linearGradient-17)",
    opacity: "0.777693563",
    points: "0 47.0144092 43.1088083 47.0144092 43.1088083 93.7694524 0 93.7694524"
  })), external_React_default.a.createElement(rc_tween_one_es["a" /* default */], {
    component: "g",
    animation: Object.assign({}, animate.y, {
      delay: 520
    })
  }, external_React_default.a.createElement("polygon", {
    id: "Rectangle-17-Copy-5",
    fill: "#1890FF",
    points: "0 0.259365994 39.5164076 0.259365994 39.5164076 25.4351585 0 25.4351585"
  })), external_React_default.a.createElement(rc_tween_one_es["a" /* default */], {
    component: "g",
    animation: Object.assign({}, animate.y, {
      delay: 550
    })
  }, external_React_default.a.createElement("polygon", {
    id: "Rectangle-17-Copy-5",
    fill: "#06080A",
    transform: "translate(58.376511, 47.014409) scale(-1, 1) translate(-58.376511, -47.014409) ",
    points: "55.6822107 0.259365994 61.0708117 0.259365994 61.0708117 93.7694524 55.6822107 93.7694524"
  })), external_React_default.a.createElement(rc_tween_one_es["a" /* default */], {
    component: "g",
    animation: Object.assign({}, animate.y, {
      delay: 570
    })
  }, external_React_default.a.createElement("ellipse", {
    id: "Oval-3",
    fill: "#000000",
    cx: "17.9620035",
    cy: "35.3256484",
    rx: "2.69430052",
    ry: "2.69740634"
  })), external_React_default.a.createElement(rc_tween_one_es["a" /* default */], {
    component: "g",
    animation: Object.assign({}, animate.y, {
      delay: 580
    })
  }, external_React_default.a.createElement("ellipse", {
    id: "Oval-3-Copy",
    fill: "#000000",
    cx: "119.447323",
    cy: "16.443804",
    rx: "3.59240069",
    ry: "3.59654179"
  })), external_React_default.a.createElement(rc_tween_one_es["a" /* default */], {
    component: "g",
    animation: Object.assign({}, animate.y, {
      delay: 520
    })
  }, external_React_default.a.createElement("g", {
    id: "Rectangle-20-Copy-7",
    opacity: "0.419484608"
  }, external_React_default.a.createElement("use", {
    fill: "#2471F5",
    xlinkHref: "#path-19"
  }), external_React_default.a.createElement("use", {
    fillOpacity: "0.370000005",
    fill: "url(#linearGradient-18)",
    xlinkHref: "#path-19"
  })), external_React_default.a.createElement("g", {
    id: "Rectangle-20-Copy-8",
    opacity: "0.419484608"
  }, external_React_default.a.createElement("use", {
    fill: "#2471F5",
    xlinkHref: "#path-20"
  }), external_React_default.a.createElement("use", {
    fillOpacity: "0.370000005",
    fill: "url(#linearGradient-18)",
    xlinkHref: "#path-20"
  })), external_React_default.a.createElement("g", {
    id: "Rectangle-20-Copy-9",
    opacity: "0.419484608"
  }, external_React_default.a.createElement("use", {
    fill: "#2471F5",
    xlinkHref: "#path-21"
  }), external_React_default.a.createElement("use", {
    fillOpacity: "0.370000005",
    fill: "url(#linearGradient-18)",
    xlinkHref: "#path-21"
  })), external_React_default.a.createElement("g", {
    id: "Rectangle-20-Copy-10",
    opacity: "0.419484608"
  }, external_React_default.a.createElement("use", {
    fill: "#2471F5",
    xlinkHref: "#path-22"
  }), external_React_default.a.createElement("use", {
    fillOpacity: "0.370000005",
    fill: "url(#linearGradient-18)",
    xlinkHref: "#path-22"
  })), external_React_default.a.createElement("g", {
    id: "Rectangle-20-Copy-11",
    opacity: "0.419484608"
  }, external_React_default.a.createElement("use", {
    fill: "#2471F5",
    xlinkHref: "#path-23"
  }), external_React_default.a.createElement("use", {
    fillOpacity: "0.370000005",
    fill: "url(#linearGradient-18)",
    xlinkHref: "#path-23"
  }))), external_React_default.a.createElement(rc_tween_one_es["a" /* default */], {
    component: "g",
    animation: Object.assign({}, animate.scale, {
      delay: 600,
      ease: 'easeOutBack'
    })
  }, external_React_default.a.createElement("ellipse", {
    id: "Oval-8-Copy-5",
    fill: "#FFFFFF",
    cx: "82.6252159",
    cy: "48.8126801",
    rx: "21.5544041",
    ry: "21.5792507"
  }), external_React_default.a.createElement("path", {
    d: "M104.17962,48.8126801 C104.17962,36.894789 94.5293846,27.2334294 82.6252159,27.2334294 C70.7210472,27.2334294 61.0708117,36.894789 61.0708117,48.8126801",
    id: "Oval-8-Copy-5",
    fill: "#06080A"
  })), external_React_default.a.createElement(rc_tween_one_es["a" /* default */], {
    component: "g",
    animation: Object.assign({}, animate.scale, {
      delay: 700,
      ease: 'easeOutBack'
    })
  }, external_React_default.a.createElement("ellipse", {
    id: "Oval-8-Copy-6",
    fill: "#FFFFFF",
    cx: "57.4784111",
    cy: "74.8876081",
    rx: "14.3696028",
    ry: "14.3861671"
  }), external_React_default.a.createElement("path", {
    d: "M57.4784111,89.2737752 L57.4784111,89.2737752 C65.4145235,89.2737752 71.8480138,82.8328688 71.8480138,74.8876081 C71.8480138,66.9423473 65.4145235,60.5014409 57.4784111,60.5014409",
    id: "Oval-8-Copy-6",
    fill: "#FA541C"
  })), external_React_default.a.createElement(rc_tween_one_es["a" /* default */], {
    component: "polyline",
    animation: Object.assign({}, animate.draw, {
      delay: 1000,
      duration: 1200
    }),
    id: "Path-12",
    stroke: "#F5222D",
    strokeWidth: "0.89775",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    points: "17.9620035 36.0139709 17.9620035 74.8876081 57.8206649 74.8876081 83.039186 49.0506578 119.447323 49.0506578 119.447323 16.443804"
  }))), external_React_default.a.createElement("g", {
    id: "s9"
  }, external_React_default.a.createElement("g", {
    id: "Group-22",
    transform: "translate(399.000000, 91.000000)"
  }, external_React_default.a.createElement(rc_tween_one_es["a" /* default */], {
    component: "g",
    animation: Object.assign({}, animate.x2, {
      delay: 650
    })
  }, external_React_default.a.createElement("polygon", {
    id: "Rectangle-17-Copy-7",
    fill: "#1890FF",
    points: "32.8134715 0.711815562 39.9982729 29.4841499 39.9982729 108.608069 32.8134715 79.8357349"
  })), external_React_default.a.createElement(rc_tween_one_es["a" /* default */], {
    component: "g",
    animation: Object.assign({}, animate.x2, {
      delay: 680
    })
  }, external_React_default.a.createElement("rect", {
    id: "Rectangle-17-Copy-7",
    fill: "#40A9FF",
    x: "32.8134715",
    y: "0.711815562",
    width: "107.772021",
    height: "79.1239193"
  })), external_React_default.a.createElement(rc_tween_one_es["a" /* default */], {
    component: "g",
    animation: Object.assign({}, animate.x2, {
      delay: 700
    })
  }, external_React_default.a.createElement("rect", {
    id: "Rectangle-17-Copy-7",
    fill: "#2F54EB",
    x: "39.9982729",
    y: "0.711815562",
    width: "100.587219",
    height: "50.351585"
  })), external_React_default.a.createElement(rc_tween_one_es["a" /* default */], {
    component: "g",
    animation: Object.assign({}, animate.x2, {
      delay: 720
    })
  }, external_React_default.a.createElement("rect", {
    id: "Rectangle-17-Copy-7",
    fill: "#FADB14",
    transform: "translate(72.329879, 65.449568) scale(1, -1) translate(-72.329879, -65.449568) ",
    x: "32.8134715",
    y: "51.0634006",
    width: "79.0328152",
    height: "28.7723343"
  })), external_React_default.a.createElement(rc_tween_one_es["a" /* default */], {
    component: "g",
    animation: Object.assign({}, animate.alpha, {
      delay: 1000
    })
  }, external_React_default.a.createElement("path", {
    d: "M169.324698,79.8357349 C169.324698,63.9452134 156.457717,51.0634006 140.585492,51.0634006 C124.713267,51.0634006 111.846287,63.9452134 111.846287,79.8357349",
    id: "Oval-3-Copy-2",
    fill: "url(#linearGradient-24)",
    style: {
      mixBlendMode: 'multiply'
    },
    opacity: "0.892432369"
  })), external_React_default.a.createElement(rc_tween_one_es["a" /* default */], {
    component: "g",
    animation: Object.assign({}, animate.scale, {
      delay: 700,
      ease: 'easeOutBack'
    })
  }, external_React_default.a.createElement("ellipse", {
    id: "Oval-8-Copy-7",
    fill: "#06080A",
    cx: "126.215889",
    cy: "15.0979827",
    rx: "3.59240069",
    ry: "3.59654179"
  })), external_React_default.a.createElement(rc_tween_one_es["a" /* default */], {
    component: "g",
    animation: Object.assign({}, animate.scale, {
      delay: 730,
      ease: 'easeOutBack'
    })
  }, external_React_default.a.createElement("ellipse", {
    id: "Oval-8-Copy-7",
    fill: "#06080A",
    cx: "66.2158895",
    cy: "15.0979827",
    rx: "3.59240069",
    ry: "3.59654179"
  })), external_React_default.a.createElement(rc_tween_one_es["a" /* default */], {
    component: "polyline",
    animation: Object.assign({}, animate.draw, {
      delay: 1000,
      duration: 2000
    }),
    id: "Path-14",
    stroke: "#40A9FF",
    strokeWidth: "0.89775",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    points: "65.3177893 15.0979827 0.654576857 15.0979827 33.9100503 28.0247718 1.27412828 28.0247718 33.9100503 40.6309287 1.27412828 40.6309287 33.9100503 54.2730979 0.654576857 54.2730979 0.654576857 97.8184438"
  }))), external_React_default.a.createElement("g", {
    id: "s10"
  }, external_React_default.a.createElement("g", {
    id: "Group-5",
    transform: "translate(120.000000, 208.000000)"
  }, external_React_default.a.createElement(rc_tween_one_es["a" /* default */], {
    component: "g",
    animation: Object.assign({}, animate.y, {
      delay: 700
    })
  }, external_React_default.a.createElement("rect", {
    id: "Rectangle-17-Copy-8",
    fill: "#597AFF",
    x: "0.345423143",
    y: "0.599423631",
    width: "359.240069",
    height: "98.0057637"
  })), external_React_default.a.createElement(rc_tween_one_es["a" /* default */], {
    component: "g",
    animation: Object.assign({}, animate.y, {
      delay: 750
    })
  }, external_React_default.a.createElement("rect", {
    id: "Rectangle-17-Copy-8",
    fill: "#06080A",
    x: "14.7150259",
    y: "14.9855908",
    width: "330.500864",
    height: "70.1325648"
  })), external_React_default.a.createElement(rc_tween_one_es["a" /* default */], {
    component: "g",
    animation: Object.assign({}, animate.y, {
      delay: 800
    })
  }, external_React_default.a.createElement("ellipse", {
    id: "Oval-8-Copy-4",
    fill: "#4E56FB",
    cx: "326.355786",
    cy: "50.0518732",
    rx: "8.08290155",
    ry: "8.09221902"
  })), external_React_default.a.createElement(rc_tween_one_es["a" /* default */], {
    component: "g",
    animation: Object.assign({}, animate.y, {
      delay: 850
    })
  }, external_React_default.a.createElement("use", {
    fill: "#4E56FB",
    xlinkHref: "#path-26"
  }), external_React_default.a.createElement("use", {
    fillOpacity: "0.659999967",
    fill: "url(#linearGradient-25)",
    xlinkHref: "#path-26"
  })), external_React_default.a.createElement(rc_tween_one_es["a" /* default */], {
    component: "path",
    animation: Object.assign({}, animate.draw, {
      delay: 1000,
      duration: 1200
    }),
    d: "M39,62 L101,62 C106.620648,60.6554657 109.953981,56.3221324 111,49 C112.569028,38.0168014 108.5,27 106,27 C103.5,27 100.069028,42.4831986 101,49 C101.930972,55.5168014 110,62 111,62 C111.666667,62 113.333333,62 116,62 C121.620648,60.6554657 124.953981,56.3221324 126,49 C127.569028,38.0168014 123.5,27 121,27 C118.5,27 115.069028,42.4831986 116,49 C116.930972,55.5168014 125,62 126,62 C126.666667,62 128.333333,62 131,62 C136.620648,60.6554657 139.953981,56.3221324 141,49 C142.569028,38.0168014 138.5,27 136,27 C133.5,27 130.069028,42.4831986 131,49 C131.930972,55.5168014 140,62 141,62 C141.666667,62 143.333333,62 146,62 C151.620648,60.6554657 154.953981,56.3221324 156,49 C157.569028,38.0168014 153.5,27 151,27 C148.5,27 145.069028,42.4831986 146,49 C146.930972,55.5168014 156,62 156,62 C156,62 157.666667,62 161,62 C166.620648,60.6554657 169.953981,56.3221324 171,49 C172.569028,38.0168014 168.5,27 166,27 C163.5,27 160.069028,42.4831986 161,49 C161.930972,55.5168014 170,62 171,62 C171.666667,62 173.333333,62 176,62 C181.620648,60.6554657 184.953981,56.3221324 186,49 C187.569028,38.0168014 183.5,27 181,27 C178.5,27 175.069028,42.4831986 176,49 C176.930972,55.5168014 185,62 186,62 C186.666667,62 188.333333,62 191,62 C196.620648,60.6554657 199.953981,56.3221324 201,49 C202.569028,38.0168014 198.5,27 196,27 C193.5,27 190.069028,42.4831986 191,49 C191.620648,53.3445343 194.953981,57.6778676 201,62 C203.666667,62.6666667 205.666667,62.3333333 207,61 C209,59 211,50 217,50 C221,50 256,50 322,50",
    id: "Path",
    stroke: "#6991FF",
    strokeWidth: "1.4"
  }), external_React_default.a.createElement(rc_tween_one_es["a" /* default */], {
    component: "path",
    animation: [{
      duration: 0,
      SVGDraw: '-5% 0'
    }, {
      delay: 2700,
      SVGDraw: '100% 105%',
      duration: 2000,
      repeat: -1,
      repeatDelay: 1500
    }],
    d: "M39,62 L101,62 C106.620648,60.6554657 109.953981,56.3221324 111,49 C112.569028,38.0168014 108.5,27 106,27 C103.5,27 100.069028,42.4831986 101,49 C101.930972,55.5168014 110,62 111,62 C111.666667,62 113.333333,62 116,62 C121.620648,60.6554657 124.953981,56.3221324 126,49 C127.569028,38.0168014 123.5,27 121,27 C118.5,27 115.069028,42.4831986 116,49 C116.930972,55.5168014 125,62 126,62 C126.666667,62 128.333333,62 131,62 C136.620648,60.6554657 139.953981,56.3221324 141,49 C142.569028,38.0168014 138.5,27 136,27 C133.5,27 130.069028,42.4831986 131,49 C131.930972,55.5168014 140,62 141,62 C141.666667,62 143.333333,62 146,62 C151.620648,60.6554657 154.953981,56.3221324 156,49 C157.569028,38.0168014 153.5,27 151,27 C148.5,27 145.069028,42.4831986 146,49 C146.930972,55.5168014 156,62 156,62 C156,62 157.666667,62 161,62 C166.620648,60.6554657 169.953981,56.3221324 171,49 C172.569028,38.0168014 168.5,27 166,27 C163.5,27 160.069028,42.4831986 161,49 C161.930972,55.5168014 170,62 171,62 C171.666667,62 173.333333,62 176,62 C181.620648,60.6554657 184.953981,56.3221324 186,49 C187.569028,38.0168014 183.5,27 181,27 C178.5,27 175.069028,42.4831986 176,49 C176.930972,55.5168014 185,62 186,62 C186.666667,62 188.333333,62 191,62 C196.620648,60.6554657 199.953981,56.3221324 201,49 C202.569028,38.0168014 198.5,27 196,27 C193.5,27 190.069028,42.4831986 191,49 C191.620648,53.3445343 194.953981,57.6778676 201,62 C203.666667,62.6666667 205.666667,62.3333333 207,61 C209,59 211,50 217,50 C221,50 256,50 322,50",
    id: "Path",
    stroke: "rgba(255,255,255,.45)",
    strokeWidth: "2"
  }))), external_React_default.a.createElement("g", {
    id: "s11"
  }, external_React_default.a.createElement("g", {
    id: "Group-11",
    transform: "translate(55.000000, 28.000000)"
  }, external_React_default.a.createElement(rc_tween_one_es["a" /* default */], {
    component: "g",
    animation: Object.assign({}, animate.x, {
      delay: 50
    })
  }, external_React_default.a.createElement("rect", {
    id: "Rectangle-17-Copy-2",
    fill: "#06080A",
    transform: "translate(33.013817, 15.158501) scale(1, -1) translate(-33.013817, -15.158501) ",
    x: "0.682210708",
    y: "0.772334294",
    width: "64.6632124",
    height: "28.7723343"
  })), external_React_default.a.createElement(rc_tween_one_es["a" /* default */], {
    component: "g",
    animation: Object.assign({}, animate.scale, {
      delay: 100
    })
  }, external_React_default.a.createElement("ellipse", {
    id: "Oval-8-Copy-3",
    fill: "#FA541C",
    cx: "13.2556131",
    cy: "15.1585014",
    rx: "3.59240069",
    ry: "3.59654179"
  })), external_React_default.a.createElement(rc_tween_one_es["a" /* default */], {
    component: "g",
    animation: Object.assign({}, animate.x, {
      delay: 150
    })
  }, external_React_default.a.createElement("rect", {
    id: "Rectangle-17-Copy-36",
    fill: "#FFFFFF",
    transform: "translate(39.300518, 15.158501) scale(1, -1) translate(-39.300518, -15.158501) ",
    x: "24.9309154",
    y: "10.6628242",
    width: "28.7392055",
    height: "8.99135447"
  })), external_React_default.a.createElement(rc_tween_one_es["a" /* default */], {
    component: "g",
    animation: Object.assign({}, animate.x, {
      delay: 200
    })
  }, external_React_default.a.createElement("rect", {
    id: "Rectangle-17-Copy-36",
    fill: "#5471FE",
    transform: "translate(33.911917, 15.158501) scale(1, -1) translate(-33.911917, -15.158501) ",
    x: "24.9309154",
    y: "10.6628242",
    width: "17.9620035",
    height: "8.99135447"
  })))), external_React_default.a.createElement("g", {
    id: "s12"
  }, external_React_default.a.createElement("g", {
    id: "Group-26",
    transform: "translate(37.000000, 77.000000)",
    stroke: "#FFFFFF",
    strokeWidth: "0.89775",
    strokeLinecap: "round"
  }, external_React_default.a.createElement(rc_tween_one_es["a" /* default */], {
    animation: Object.assign({}, animate.draw, {
      delay: 750
    }),
    component: "path",
    d: "M0.933191213,0.0542562538 L50.9075638,139.096936",
    id: "Path-17"
  }))), external_React_default.a.createElement("g", {
    id: "s13"
  }, external_React_default.a.createElement("g", {
    id: "Group-6",
    transform: "translate(386.000000, 176.000000)"
  }, external_React_default.a.createElement(rc_tween_one_es["a" /* default */], {
    component: "g",
    animation: Object.assign({}, animate.alpha, {
      y: 10,
      delay: 600
    })
  }, external_React_default.a.createElement("ellipse", {
    id: "Oval-3-Copy-4",
    fill: "#06080A",
    cx: "13.6545769",
    cy: "2.8184438",
    rx: "2.69430052",
    ry: "2.69740634"
  })), external_React_default.a.createElement(rc_tween_one_es["a" /* default */], {
    component: "g",
    animation: Object.assign({}, animate.alpha, {
      y: 10,
      delay: 600
    })
  }, external_React_default.a.createElement("rect", {
    id: "Rectangle-17-Copy-11",
    fill: "#E9ECF0",
    x: "0.183074266",
    y: "2.02881844",
    width: "122.141623",
    height: "21.5792507"
  })), external_React_default.a.createElement(rc_tween_one_es["a" /* default */], {
    component: "g",
    animation: Object.assign({}, animate.alpha, {
      y: 10,
      delay: 700
    })
  }, external_React_default.a.createElement("rect", {
    id: "Rectangle-17-Copy-11",
    fill: "url(#linearGradient-24)",
    opacity: "0.892432369",
    x: "0.183074266",
    y: "2.02881844",
    width: "81.7271157",
    height: "21.5792507"
  })), external_React_default.a.createElement(rc_tween_one_es["a" /* default */], {
    component: "g",
    animation: [Object.assign({}, animate.scale, {
      delay: 1200
    }), Object.assign({
      y: 10
    }, animate.loop)]
  }, external_React_default.a.createElement("rect", {
    id: "Rectangle-17-Copy-22",
    fill: "#73D13D",
    opacity: "0.471898321",
    transform: "translate(98.075993, 13.717579) scale(1, -1) translate(-98.075993, -13.717579) ",
    x: "95.3816926",
    y: "11.0201729",
    width: "5.38860104",
    height: "5.39481268"
  })), external_React_default.a.createElement(rc_tween_one_es["a" /* default */], {
    component: "g",
    animation: [Object.assign({}, animate.scale, {
      delay: 1250
    }), Object.assign({
      y: -10
    }, animate.loop)]
  }, external_React_default.a.createElement("rect", {
    id: "Rectangle-17-Copy-24",
    fill: "#73D13D",
    opacity: "0.471898321",
    transform: "translate(107.955095, 20.910663) scale(1, -1) translate(-107.955095, -20.910663) ",
    x: "105.260794",
    y: "18.2132565",
    width: "5.38860104",
    height: "5.39481268"
  })), external_React_default.a.createElement(rc_tween_one_es["a" /* default */], {
    component: "g",
    animation: [Object.assign({}, animate.scale, {
      delay: 1300
    }), Object.assign({
      y: 15
    }, animate.loop)]
  }, external_React_default.a.createElement("rect", {
    id: "Rectangle-17-Copy-26",
    fill: "#73D13D",
    opacity: "0.471898321",
    transform: "translate(131.305699, 6.524496) scale(1, -1) translate(-131.305699, -6.524496) ",
    x: "128.611399",
    y: "3.82708934",
    width: "5.38860104",
    height: "5.39481268"
  })))), external_React_default.a.createElement("g", {
    id: "s14"
  }, external_React_default.a.createElement("g", {
    transform: "translate(386.000000, 199.000000)"
  }, external_React_default.a.createElement(rc_tween_one_es["a" /* default */], {
    component: "g",
    animation: Object.assign({}, animate.alpha, {
      repeat: -1,
      repeatDelay: 300,
      yoyo: true,
      delay: 1200
    })
  }, external_React_default.a.createElement("polygon", {
    id: "Rectangle-17-Copy-11",
    fill: "url(#linearGradient-27)",
    opacity: "0.73046875",
    points: "52.2728843 58.8090207 68.4386874 58.8090207 122.324698 0.608069164 0.183074266 0.608069164"
  })), external_React_default.a.createElement(rc_tween_one_es["a" /* default */], {
    component: "g",
    animation: Object.assign({}, animate.alpha, {
      delay: 1000
    })
  }, external_React_default.a.createElement("rect", {
    id: "Rectangle-17-Copy-49",
    fill: "#57DF83",
    opacity: "0.907940765",
    transform: "translate(58.559585, 35.674352) scale(1, -1) translate(-58.559585, -35.674352) ",
    x: "55.865285",
    y: "32.9769452",
    width: "5.38860104",
    height: "5.39481268"
  }), external_React_default.a.createElement("rect", {
    id: "Rectangle-17-Copy-49",
    fill: "#FADB14",
    opacity: "0.907940765",
    transform: "translate(67.540587, 35.674352) scale(1, -1) translate(-67.540587, -35.674352) ",
    x: "64.8462867",
    y: "32.9769452",
    width: "5.38860104",
    height: "5.39481268"
  }), external_React_default.a.createElement("rect", {
    id: "Rectangle-17-Copy-49",
    fill: "#FFFFFF",
    opacity: "0.907940765",
    transform: "translate(49.578584, 35.674352) scale(1, -1) translate(-49.578584, -35.674352) ",
    x: "46.8842832",
    y: "32.9769452",
    width: "5.38860104",
    height: "5.39481268"
  })))))))));
});
// EXTERNAL MODULE: ./src/components/utils.js
var utils = __webpack_require__(170);

// CONCATENATED MODULE: ./src/components/Home/Banner.jsx











function Banner(props) {
  var isMobile = props.isMobile,
      location = props.location;
  return external_React_default.a.createElement("div", {
    className: "banner-wrapper"
  }, isMobile && external_React_default.a.createElement(rc_tween_one_es["a" /* default */], {
    animation: {
      opacity: 1
    },
    className: "banner-image-wrapper"
  }, external_React_default.a.createElement("div", {
    className: "home-banner-image"
  }, external_React_default.a.createElement("img", {
    alt: "banner",
    src: "https://gw.alipayobjects.com/zos/rmsportal/rqKQOpnMxeJKngVvulsF.svg",
    width: "100%"
  }))), external_React_default.a.createElement(es["a" /* default */], {
    className: "banner-title-wrapper",
    type: isMobile ? 'bottom' : 'right'
  }, external_React_default.a.createElement("div", {
    key: "line",
    className: "title-line-wrapper"
  }, external_React_default.a.createElement("div", {
    className: "title-line",
    style: {
      transform: 'translateX(-64px)'
    }
  })), external_React_default.a.createElement("h1", {
    key: "h1"
  }, "ANT DESIGN PRO"), external_React_default.a.createElement("p", {
    key: "content"
  }, external_React_default.a.createElement(index_es["a" /* FormattedMessage */], {
    id: "app.home.slogan"
  })), external_React_default.a.createElement("div", {
    key: "button",
    className: "button-wrapper"
  }, external_React_default.a.createElement("a", {
    href: "http://preview.pro.ant.design",
    target: "_blank",
    rel: "noopener noreferrer"
  }, external_React_default.a.createElement(button_default.a, {
    type: "primary"
  }, external_React_default.a.createElement(index_es["a" /* FormattedMessage */], {
    id: "app.home.preview"
  }))), external_React_default.a.createElement(gatsby_browser_entry["a" /* Link */], {
    to: Object(utils["a" /* getLocalizedPathname */])('/docs/getting-started', Object(utils["d" /* isZhCN */])(location.pathname))
  }, external_React_default.a.createElement(button_default.a, {
    style: {
      margin: '0 16px'
    },
    type: "primary",
    ghost: true
  }, external_React_default.a.createElement(index_es["a" /* FormattedMessage */], {
    id: "app.home.start"
  }))), external_React_default.a.createElement(lib_default.a, {
    key: "github-button",
    type: "stargazers",
    namespace: "ant-design",
    repo: "ant-design-pro"
  }))), !isMobile && external_React_default.a.createElement(rc_tween_one_es["a" /* default */], {
    animation: {
      opacity: 1
    },
    className: "banner-image-wrapper"
  }, external_React_default.a.createElement(BannerSVGAnim, null)));
}

/* harmony default export */ var Home_Banner = (Banner);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.to-string.js
var es6_regexp_to_string = __webpack_require__(1191);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__(72);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inheritsLoose.js
var inheritsLoose = __webpack_require__(7);
var inheritsLoose_default = /*#__PURE__*/__webpack_require__.n(inheritsLoose);

// EXTERNAL MODULE: ./node_modules/rc-scroll-anim/lib/ScrollOverPack.js
var ScrollOverPack = __webpack_require__(571);
var ScrollOverPack_default = /*#__PURE__*/__webpack_require__.n(ScrollOverPack);

// EXTERNAL MODULE: ./node_modules/rc-scroll-anim/lib/ScrollParallax.js
var ScrollParallax = __webpack_require__(1195);
var ScrollParallax_default = /*#__PURE__*/__webpack_require__.n(ScrollParallax);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(4);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// CONCATENATED MODULE: ./src/components/Home/Page1.jsx





/* eslint-disable react/forbid-prop-types */

/* eslint-disable react/jsx-one-expression-per-line */







var TweenOneGroup = rc_tween_one_es["a" /* default */].TweenOneGroup;
var featuresCN = [{
  title: '优雅美观',
  content: '基于 Ant Design 体系精心设计',
  src: 'https://gw.alipayobjects.com/zos/rmsportal/VriUmzNjDnjoFoFFZvuh.svg',
  color: '#13C2C2',
  shadowColor: 'rgba(19,194,194,.12)'
}, {
  title: '常见设计模式',
  content: '提炼自中后台应用的典型页面和场景',
  src: 'https://gw.alipayobjects.com/zos/rmsportal/smwQOoxCjXVbNAKMqvWk.svg',
  color: '#2F54EB',
  shadowColor: 'rgba(47,84,235,.12)'
}, {
  title: '最新技术栈',
  content: '使用 React/dva/antd 等前端前沿技术开发',
  src: 'https://gw.alipayobjects.com/zos/rmsportal/hBbIHzUsSbSxrhoRFYzi.svg',
  color: '#F5222D',
  shadowColor: 'rgba(245,34,45,.12)'
}, {
  title: '响应式',
  content: '针对不同屏幕大小设计',
  src: 'https://gw.alipayobjects.com/zos/rmsportal/BISfzKcCNCYFmTYcUygW.svg',
  color: '#1AC44D',
  shadowColor: 'rgba(26,196,77,.12)'
}, {
  title: '主题',
  content: '可配置的主题满足多样化的品牌诉求',
  src: 'https://gw.alipayobjects.com/zos/rmsportal/XxqEexmShHOofjMYOCHi.svg',
  color: '#FAAD14',
  shadowColor: 'rgba(250,173,20,.12)'
}, {
  title: '国际化',
  content: '内建业界通用的国际化方案',
  src: 'https://gw.alipayobjects.com/zos/rmsportal/JsixxWSViARJnQbAAPkI.svg',
  color: '#722ED1',
  shadowColor: 'rgba(114,46,209,.12)'
}, {
  title: '最佳实践',
  content: '良好的工程实践助你持续产出高质量代码',
  src: 'https://gw.alipayobjects.com/zos/rmsportal/pbmKMSFpLurLALLNliUQ.svg',
  color: '#FA8C16',
  shadowColor: 'rgba(250,140,22,.12)'
}, {
  title: 'Mock 数据',
  content: '实用的本地数据调试方案',
  src: 'https://gw.alipayobjects.com/zos/rmsportal/aLQyKyUyssIUhHTZqCIb.svg',
  color: '#EB2F96',
  shadowColor: 'rgba(235,45,150,.12)'
}, {
  title: 'UI 测试',
  content: '自动化测试保障前端产品质量',
  src: 'https://gw.alipayobjects.com/zos/rmsportal/RpJIQitGbSCHwLMimybX.svg',
  color: '#1890FF',
  shadowColor: 'rgba(24,144,255,.12)'
}];
var featuresEN = [{
  title: ' Neat Design',
  content: 'Follow Ant Design specification',
  src: 'https://gw.alipayobjects.com/zos/rmsportal/VriUmzNjDnjoFoFFZvuh.svg',
  color: '#13C2C2',
  shadowColor: 'rgba(19,194,194,.12)'
}, {
  title: 'Common Templates',
  content: 'Typical templates for enterprise applications',
  src: 'https://gw.alipayobjects.com/zos/rmsportal/smwQOoxCjXVbNAKMqvWk.svg',
  color: '#2F54EB',
  shadowColor: 'rgba(47,84,235,.12)'
}, {
  title: 'Up-to-date Dev Stack',
  content: 'Newest development stack of React/dva/antd',
  src: 'https://gw.alipayobjects.com/zos/rmsportal/hBbIHzUsSbSxrhoRFYzi.svg',
  color: '#F5222D',
  shadowColor: 'rgba(245,34,45,.12)'
}, {
  title: 'Responsive',
  content: 'Designed for varies of screen size',
  src: 'https://gw.alipayobjects.com/zos/rmsportal/BISfzKcCNCYFmTYcUygW.svg',
  color: '#1AC44D',
  shadowColor: 'rgba(26,196,77,.12)'
}, {
  title: 'Theming',
  content: 'Customizable theme with simple config',
  src: 'https://gw.alipayobjects.com/zos/rmsportal/XxqEexmShHOofjMYOCHi.svg',
  color: '#FAAD14',
  shadowColor: 'rgba(250,173,20,.12)'
}, {
  title: 'International',
  content: 'Built-in i18n solution (Comming soon)',
  src: 'https://gw.alipayobjects.com/zos/rmsportal/JsixxWSViARJnQbAAPkI.svg',
  color: '#722ED1',
  shadowColor: 'rgba(114,46,209,.12)'
}, {
  title: 'Best Practice',
  content: 'Solid workflow make your code health',
  src: 'https://gw.alipayobjects.com/zos/rmsportal/pbmKMSFpLurLALLNliUQ.svg',
  color: '#FA8C16',
  shadowColor: 'rgba(250,140,22,.12)'
}, {
  title: 'Mock Data',
  content: 'Easy to use mock development solution',
  src: 'https://gw.alipayobjects.com/zos/rmsportal/aLQyKyUyssIUhHTZqCIb.svg',
  color: '#EB2F96',
  shadowColor: 'rgba(235,45,150,.12)'
}, {
  title: 'UI Test',
  content: 'Fly safely with unit test and e2e test',
  src: 'https://gw.alipayobjects.com/zos/rmsportal/RpJIQitGbSCHwLMimybX.svg',
  color: '#1890FF',
  shadowColor: 'rgba(24,144,255,.12)'
}];
var pointPos = [{
  x: -30,
  y: -10
}, {
  x: 20,
  y: -20
}, {
  x: -65,
  y: 15
}, {
  x: -45,
  y: 80
}, {
  x: 35,
  y: 5
}, {
  x: 50,
  y: 50,
  opacity: 0.2
}];

var Page1_Page1 =
/*#__PURE__*/
function (_React$PureComponent) {
  inheritsLoose_default()(Page1, _React$PureComponent);

  function Page1(props) {
    var _this;

    _this = _React$PureComponent.call(this, props) || this;

    _this.onMouseOver = function (i) {
      _this.setState({
        hoverNum: i
      });
    };

    _this.onMouseOut = function () {
      _this.setState({
        hoverNum: null
      });
    };

    _this.getEnter = function (e) {
      var i = e.index;
      var r = Math.random() * 2 - 1;
      var y = Math.random() * 10 + 5;
      var delay = Math.round(Math.random() * (i * 50));
      return [Object.assign({
        delay: delay,
        opacity: 0.4
      }, pointPos[e.index], {
        ease: 'easeOutBack',
        duration: 300
      }), {
        y: r > 0 ? "+=" + y : "-=" + y,
        duration: Math.random() * 1000 + 2000,
        yoyo: true,
        repeat: -1
      }];
    };

    _this.state = {
      hoverNum: null
    };
    return _this;
  }

  var _proto = Page1.prototype;

  _proto.render = function render() {
    var _this2 = this;

    var hoverNum = this.state.hoverNum;
    var _this$props = this.props,
        intl = _this$props.intl,
        isMobile = _this$props.isMobile;
    var children = [[], [], []];
    (intl.locale === 'zh-CN' ? featuresCN : featuresEN).forEach(function (item, i) {
      var isHover = hoverNum === i;
      var pointChild = ['point-0 left', 'point-0 right', 'point-ring', 'point-1', 'point-2', 'point-3'].map(function (className) {
        return external_React_default.a.createElement(rc_tween_one_es["a" /* default */], {
          component: "i",
          className: className,
          key: className,
          style: {
            background: item.color,
            borderColor: item.color
          }
        });
      });
      var child = external_React_default.a.createElement("li", {
        key: i.toString()
      }, external_React_default.a.createElement("div", {
        className: "page1-box",
        onMouseEnter: function onMouseEnter() {
          _this2.onMouseOver(i);
        },
        onMouseLeave: _this2.onMouseOut
      }, external_React_default.a.createElement(TweenOneGroup, {
        className: "page1-point-wrapper",
        enter: _this2.getEnter,
        leave: {
          x: 0,
          y: 30,
          opacity: 0,
          duration: 300,
          ease: 'easeInBack'
        },
        resetStyle: false,
        exclusive: true
      }, (isMobile || isHover) && pointChild), external_React_default.a.createElement("div", {
        className: "page1-image",
        style: {
          boxShadow: (isHover ? '0 12px 24px' : '0 6px 12px') + " " + item.shadowColor
        }
      }, external_React_default.a.createElement("img", {
        src: item.src,
        alt: "img",
        style: i === 4 ? {
          marginLeft: -15
        } : {}
      })), external_React_default.a.createElement("h3", null, item.title), external_React_default.a.createElement("p", null, item.content)));
      children[Math.floor(i / 3)].push(child);
    });
    children = children.map(function (item, i) {
      return external_React_default.a.createElement(es["a" /* default */], {
        className: "page1-box-wrapper",
        key: i.toString(),
        type: "bottom",
        leaveReverse: true,
        delay: [i * 100, (children.length - 1 - i) * 100],
        component: "ul"
      }, item);
    });
    return external_React_default.a.createElement("div", {
      className: "home-page page1"
    }, external_React_default.a.createElement("div", {
      className: "home-page-wrapper",
      id: "page1-wrapper"
    }, !isMobile && external_React_default.a.createElement(ScrollParallax_default.a, {
      className: "page1-bg",
      animation: {
        translateY: 200,
        ease: 'linear',
        playScale: [0, 1.65]
      },
      location: "page1-wrapper"
    }, "Feature"), external_React_default.a.createElement("h2", null, "What can ", external_React_default.a.createElement("span", null, "Pro"), " do for you", ' '), external_React_default.a.createElement("div", {
      className: "title-line-wrapper page1-line"
    }, external_React_default.a.createElement("div", {
      className: "title-line"
    })), external_React_default.a.createElement(ScrollOverPack_default.a, null, children)));
  };

  return Page1;
}(external_React_default.a.PureComponent);

Page1_Page1.contextTypes = {
  intl: prop_types_default.a.object.isRequired
};
/* harmony default export */ var Home_Page1 = (Object(index_es["d" /* injectIntl */])(Page1_Page1));
// CONCATENATED MODULE: ./src/components/Home/Page2.jsx



/* eslint-disable react/jsx-one-expression-per-line */







function Page2(_ref) {
  var location = _ref.location;
  var isZhCN = utils["d" /* isZhCN */](location.pathname);
  return external_React_default.a.createElement("div", {
    className: "home-page page2"
  }, external_React_default.a.createElement("div", {
    className: "home-page-wrapper"
  }, external_React_default.a.createElement("div", {
    className: "title-line-wrapper page2-line"
  }, external_React_default.a.createElement("div", {
    className: "title-line"
  })), external_React_default.a.createElement("h2", null, "Let\u2019s ", external_React_default.a.createElement("span", null, "Pro")), external_React_default.a.createElement(ScrollOverPack_default.a, null, external_React_default.a.createElement(es["a" /* default */], {
    key: "queue",
    type: "bottom",
    leaveReverse: true,
    className: "page2-content"
  }, external_React_default.a.createElement("p", {
    key: "p",
    className: "page-content"
  }, external_React_default.a.createElement(index_es["a" /* FormattedMessage */], {
    id: "app.home.letspro"
  })), external_React_default.a.createElement("div", {
    key: "code1",
    className: "home-code"
  }, external_React_default.a.createElement("div", null, "$ ", external_React_default.a.createElement("span", null, "git clone"), " git@github.com:ant-design/ant-design-pro.git --depth=1"), external_React_default.a.createElement("div", null, "$ cd ant-design-pro"), external_React_default.a.createElement("div", null, "$ npm install"), external_React_default.a.createElement("div", null, "$ npm start", ' ', external_React_default.a.createElement("span", {
    className: "home-code-comment"
  }, '#', " ", external_React_default.a.createElement(index_es["a" /* FormattedMessage */], {
    id: "app.home.openbrowser"
  }), " http://localhost:8000"))), external_React_default.a.createElement("p", {
    key: "p2",
    className: "page-content"
  }, external_React_default.a.createElement(index_es["a" /* FormattedMessage */], {
    id: "app.home.needhelp",
    values: {
      docs: external_React_default.a.createElement(gatsby_browser_entry["a" /* Link */], {
        to: utils["a" /* getLocalizedPathname */]('/docs/getting-started', isZhCN)
      }, external_React_default.a.createElement(index_es["a" /* FormattedMessage */], {
        id: "app.home.docs"
      })),
      faq: external_React_default.a.createElement(gatsby_browser_entry["a" /* Link */], {
        to: utils["a" /* getLocalizedPathname */]('/docs/faq', isZhCN)
      }, external_React_default.a.createElement(index_es["a" /* FormattedMessage */], {
        id: "app.home.faq"
      })),
      ask: external_React_default.a.createElement("a", {
        href: "https://github.com/ant-design/ant-design-pro/issues"
      }, external_React_default.a.createElement(index_es["a" /* FormattedMessage */], {
        id: "app.home.ask"
      }))
    }
  })), external_React_default.a.createElement("div", {
    key: "button",
    style: {
      marginTop: 88
    }
  }, external_React_default.a.createElement("a", {
    href: "http://github.com/ant-design/ant-design-pro",
    target: "_blank",
    rel: "noopener noreferrer"
  }, external_React_default.a.createElement(button_default.a, {
    type: "primary"
  }, external_React_default.a.createElement(index_es["a" /* FormattedMessage */], {
    id: "app.home.download"
  }), " Pro")))))));
}

/* harmony default export */ var Home_Page2 = (Page2);
// CONCATENATED MODULE: ./src/components/Home/index.jsx







function Home(props) {
  var intl = props.intl;
  return external_React_default.a.createElement(react_document_title_default.a, {
    title: "Ant Design Pro - " + intl.formatMessage({
      id: 'app.home.slogan'
    })
  }, external_React_default.a.createElement("div", {
    className: "home-wrapper"
  }, external_React_default.a.createElement(Home_Banner, props), external_React_default.a.createElement(Home_Page1, props), external_React_default.a.createElement(Home_Page2, props)));
}

/* harmony default export */ var components_Home = (Object(index_es["d" /* injectIntl */])(Home));
// EXTERNAL MODULE: ./src/components/layout/index.js + 5 modules
var layout = __webpack_require__(382);

// CONCATENATED MODULE: ./src/pages/index.js






var pages_IndexPage = function IndexPage(props) {
  var isNode = typeof window === "undefined";
  return external_React_default.a.createElement(layout["a" /* default */], props, external_React_default.a.createElement(react_media["a" /* default */], {
    query: "(max-width: 599px)"
  }, function (isMobile) {
    return external_React_default.a.createElement(components_Home, Object.assign({}, props, {
      isMobile: isMobile && !isNode
    }));
  }));
};

/* harmony default export */ var pages = __webpack_exports__["default"] = (pages_IndexPage);

/***/ })

}]);
//# sourceMappingURL=component---src-pages-index-js-26d61c165f04f0c8e4cd.js.map