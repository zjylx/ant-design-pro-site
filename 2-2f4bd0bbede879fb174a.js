(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return isZhCN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getLocalizedPathname; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getMenuItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return ping; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isLocalStorageNameSupported; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return transformerFrontmatter; });
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_array_sort__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(232);
/* harmony import */ var core_js_modules_es6_array_sort__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_sort__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(72);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(34);
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_string_starts_with__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(608);
/* harmony import */ var core_js_modules_es6_string_starts_with__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_starts_with__WEBPACK_IMPORTED_MODULE_4__);





// matchMedia polyfill for
// https://github.com/WickyNilliams/enquire.js/issues/82
function isZhCN(pathname) {
  if (pathname === '/') {
    if (typeof window !== "undefined") {
      var locale = localStorage ? localStorage.getItem('locale') : 'en-US';

      if (locale === 'zh-CN') {
        return true;
      }

      return false;
    }

    return false;
  }

  return /-cn/.test(pathname);
}
/**
 * @param {*} path url
 * @param {*} zhCN boolean
 * if(zhCN)
 *  return "avatar-list"
 * else
 *  return "avatar-list-cn"
 */

function getLocalizedPathname(path, zhCN) {
  var pathname = path.startsWith('/') ? path : "/" + path;
  pathname = pathname.replace('-cn', '');

  if (pathname === '/') {
    return '/';
  }

  if (!zhCN) {
    return "" + pathname;
  }

  return pathname + "-cn";
}
function getMenuItems(moduleData, locale) {
  var menuMeta = moduleData.map(function (item) {
    return item.meta;
  });
  var menuItems = {};
  menuMeta.sort(function (a, b) {
    return (a.order || 0) - (b.order || 0);
  }).forEach(function (meta) {
    var category = meta.category && meta.category[locale] || meta.category || 'topLevel';

    if (!menuItems[category]) {
      menuItems[category] = {};
    }

    var type = meta.type || 'topLevel';

    if (!menuItems[category][type]) {
      menuItems[category][type] = [];
    }

    menuItems[category][type].push(meta);
  });
  return menuItems;
}
function ping(callback) {
  // eslint-disable-next-line
  var url = 'https://private-a' + 'lipay' + 'objects.alip' + 'ay.com/alip' + 'ay-rmsdeploy-image/rmsportal/RKuAiriJqrUhyqW.png';
  var img = new Image();
  var done;

  var finish = function finish(status) {
    if (!done) {
      done = true;
      img.src = '';
      callback(status);
    }
  };

  img.onload = function () {
    return finish('responded');
  };

  img.onerror = function () {
    return finish('error');
  };

  img.src = url;
  return setTimeout(function () {
    return finish('timeout');
  }, 1500);
}
function isLocalStorageNameSupported() {
  var testKey = 'test';
  var storage = window.localStorage;

  try {
    storage.setItem(testKey, '1');
    storage.removeItem(testKey);
    return true;
  } catch (error) {
    return false;
  }
}
var transformerFrontmatter = function transformerFrontmatter(frontmatter) {
  var title = frontmatter.title;
  return Object.assign({}, frontmatter, {
    title: {
      'zh-CN': title.zh_CN,
      'en-US': title.en_US
    }
  });
};

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export graphql */
/* unused harmony export StaticQueryContext */
/* unused harmony export StaticQuery */
/* unused harmony export useStaticQuery */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35);
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gatsby_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "a", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2___default.a; });
/* harmony import */ var _public_page_renderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(391);
/* harmony import */ var _public_page_renderer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_page_renderer__WEBPACK_IMPORTED_MODULE_3__);




var StaticQueryContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({});

var StaticQuery = function StaticQuery(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StaticQueryContext.Consumer, null, function (staticQueryData) {
    if (props.data || staticQueryData[props.query] && staticQueryData[props.query].data) {
      return (props.render || props.children)(props.data ? props.data.data : staticQueryData[props.query].data);
    } else {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Loading (StaticQuery)");
    }
  });
};

var useStaticQuery = function useStaticQuery(query) {
  if (typeof react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext !== "function" && "production" === "development") {
    throw new Error("You're likely using a version of React that doesn't support Hooks\n" + "Please update React and ReactDOM to 16.8.0 or later to use the useStaticQuery hook.");
  }

  var context = react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(StaticQueryContext);

  if (context[query] && context[query].data) {
    return context[query].data;
  } else {
    throw new Error("The result of this StaticQuery could not be fetched.\n\n" + "This is likely a bug in Gatsby and if refreshing the page does not fix it, " + "please open an issue in https://github.com/gatsbyjs/gatsby/issues");
  }
};

StaticQuery.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  query: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  render: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};

function graphql() {
  throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls " + "are supposed to only be evaluated at compile time, and then compiled away,. " + "Unfortunately, something went wrong and the query was left in the compiled code.\n\n." + "Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.");
}



/***/ }),

/***/ 382:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/antd/lib/locale-provider/style/index.js
var style = __webpack_require__(583);

// EXTERNAL MODULE: ./node_modules/antd/lib/locale-provider/index.js
var locale_provider = __webpack_require__(425);
var locale_provider_default = /*#__PURE__*/__webpack_require__.n(locale_provider);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.assign.js
var es6_object_assign = __webpack_require__(33);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(77);
var objectWithoutPropertiesLoose_default = /*#__PURE__*/__webpack_require__.n(objectWithoutPropertiesLoose);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inheritsLoose.js
var inheritsLoose = __webpack_require__(7);
var inheritsLoose_default = /*#__PURE__*/__webpack_require__.n(inheritsLoose);

// EXTERNAL MODULE: external "React"
var external_React_ = __webpack_require__(0);
var external_React_default = /*#__PURE__*/__webpack_require__.n(external_React_);

// EXTERNAL MODULE: ./node_modules/react-intl/lib/index.es.js
var index_es = __webpack_require__(169);

// EXTERNAL MODULE: ./node_modules/antd/lib/locale-provider/en_US.js
var en_US = __webpack_require__(716);
var en_US_default = /*#__PURE__*/__webpack_require__.n(en_US);

// EXTERNAL MODULE: external "BizCharts"
var external_BizCharts_ = __webpack_require__(136);

// EXTERNAL MODULE: ./node_modules/react-media/esm/react-media.js + 3 modules
var react_media = __webpack_require__(578);

// EXTERNAL MODULE: ./node_modules/react-intl/locale-data/en.js
var en = __webpack_require__(605);
var en_default = /*#__PURE__*/__webpack_require__.n(en);

// CONCATENATED MODULE: ./src/locale/en-US.js

/* harmony default export */ var locale_en_US = ({
  locale: 'en-US',
  data: en_default.a,
  messages: {
    'app.header.search': 'Search...',
    'app.header.search.all': 'Search in Google: ',
    'app.header.search.doc': 'Docs',
    'app.header.search.component': 'Components',
    'app.header.menu.home': 'Home',
    'app.header.menu.docs': 'Docs',
    'app.header.menu.components': 'Components',
    'app.header.menu.resource': 'Resources',
    'app.header.lang': '中文',
    'app.content.edit-page': 'Edit this page on GitHub!',
    'app.content.edit-demo': 'Edit this demo on GitHub!',
    'app.component.examples': 'Examples',
    'app.component.refer.title': 'Usage:',
    'app.component.refer.desc': 'Learning more to visit: ',
    'app.component.refer.link': 'Using Pro Components Alone',
    'app.demo.copy': 'Copy code',
    'app.demo.copied': 'Copied!',
    'app.demo.codepen': 'Open in CodePen',
    'app.demo.riddle': 'Open in Riddle',
    'app.demo.codesandbox': 'Open in CodeSandbox',
    'app.home.slogan': 'Out-of-box UI solution for enterprise applications',
    'app.home.preview': 'Preview',
    'app.home.start': 'Getting Started',
    'app.home.download': 'Download',
    'app.home.letspro': 'Run commands below, explore it!',
    'app.home.openbrowser': 'open browser and visit',
    'app.home.needhelp': "Need help? You can see {docs} and {faq} first, and {ask} in GitHub if they don't help.",
    'app.home.docs': 'documentation',
    'app.home.faq': 'faq',
    'app.home.ask': 'ask questions',
    'app.footer.repo': 'GitHub Repository',
    'app.footer.awesome': 'Awesome Ant Design',
    'app.footer.chinamirror': 'China Mirror 🇨🇳',
    'app.footer.primary-color-changed': 'Change primary color successfully!',
    'app.footer.scaffold': 'Scaffold',
    'app.footer.kitchen': 'Sketch Toolkit',
    'app.footer.landing': 'Landing Templates',
    'app.footer.scaffolds': 'Scaffold Market',
    'app.footer.dev-tools': 'Developer Tools',
    'app.footer.dva': 'Framework',
    'app.footer.resources': 'Resources',
    'app.footer.data-vis': 'Data Visualization',
    'app.footer.eggjs': 'Enterprise Node Framework',
    'app.footer.motion': 'Motion Solution',
    'app.footer.antd-library': 'Axure library',
    'app.footer.design-platform': 'Ant Financial Design Platform',
    'app.footer.antux': 'Sitemap Template',
    'app.footer.community': 'Community',
    'app.footer.help': 'Help',
    'app.footer.change-log': 'Change Log',
    'app.footer.faq': 'FAQ',
    'app.footer.feedback': 'Feedback',
    'app.footer.stackoverflow': 'StackOverflow',
    'app.footer.segmentfault': 'SegmentFault',
    'app.footer.discuss-en': 'Chat Room (English)',
    'app.footer.discuss-cn': 'Chat Room (中文)',
    'app.footer.bug-report': 'Bug Report',
    'app.footer.issues': 'Issues',
    'app.footer.version': 'Version: ',
    'app.footer.author': 'Created by AFX',
    'app.footer.work_with_us': 'Work with Us',
    'app.footer.more-product': 'More Products',
    'app.footer.company': 'AFX',
    'app.footer.ant-design': 'UI Design Language',
    'app.footer.yuque': 'YuQue',
    'app.footer.yuque.slogan': 'Write your document as a team',
    'app.footer.fengdie': 'FengDie',
    'app.footer.fengdie.slogan': 'Mobile web app builder',
    'app.footer.zhihu': 'Zhihu',
    'app.footer.zhihu.xtech': 'Experience Cloud Blog',
    'app.footer.seeconf': 'Seeking Experience & Engineering Conference',
    'app.footer.xcloud': 'Ant Experience Cloud',
    'app.publish.title': 'Ant Desgin Pro@2.0.0 has been released! 🎉 🎉 🎉',
    'app.publish.greeting': 'Hello, ',
    'app.publish.intro': 'has been released',
    'app.publish.tips': ', welcome to upgrade and experience. ',
    'app.publish.url': 'https://medium.com/ant-design/beautiful-and-powerful-ant-design-pro-2-0-release-51358da5af95',
    'app.publish.old-version-guide': 'If you need documentation of older version, please visit ',
    'app.publish.old-version-tips': ',It can also be viewed by clicking on the v1 menu in the top right corner of the page.'
  }
});
// EXTERNAL MODULE: ./node_modules/react-intl/locale-data/zh.js
var zh = __webpack_require__(606);
var zh_default = /*#__PURE__*/__webpack_require__.n(zh);

// CONCATENATED MODULE: ./src/locale/zh-CN.js

/* harmony default export */ var zh_CN = ({
  locale: 'zh-CN',
  data: zh_default.a,
  messages: {
    'app.header.search': '搜索...',
    'app.header.search.all': '全文本搜索：',
    'app.header.search.doc': '文档',
    'app.header.search.component': '组件',
    'app.header.menu.home': '首页',
    'app.header.menu.docs': '文档',
    'app.header.menu.components': '组件',
    'app.header.menu.resource': '资源',
    'app.header.lang': 'English',
    'app.content.edit-page': '在 Github 上编辑此页！',
    'app.content.edit-demo': '在 Github 上编辑此示例！',
    'app.component.examples': '代码演示',
    'app.component.refer.title': '引用方式：',
    'app.component.refer.desc': '详细使用方式请参照：',
    'app.component.refer.link': '独立使用 pro 组件',
    'app.demo.copy': '复制代码',
    'app.demo.copied': '复制成功',
    'app.demo.codepen': '在 CodePen 中打开',
    'app.demo.riddle': '在 Riddle 中打开',
    'app.demo.codesandbox': '在 CodeSandbox 中打开',
    'app.home.slogan': '开箱即用的中台前端/设计解决方案',
    'app.home.preview': '预览',
    'app.home.start': '开始使用',
    'app.home.download': '下载',
    'app.home.letspro': '命令行运行下列命令，快速启动开发服务：',
    'app.home.openbrowser': '打开浏览器访问',
    'app.home.needhelp': '需要帮助？请先阅读 {docs} 和 {faq}， 如果未能解决，可以到 GitHub 上 {ask}。',
    'app.home.docs': '开发文档',
    'app.home.faq': '常见问题',
    'app.home.ask': '进行提问',
    'app.footer.repo': 'GitHub 仓库',
    'app.footer.awesome': 'Awesome Ant Design',
    'app.footer.chinamirror': '国内镜像站点 🇨🇳',
    'app.footer.primary-color-changed': '修改主题色成功！',
    'app.footer.kitchen': 'Sketch 工具集',
    'app.footer.landing': 'Landing 模板集',
    'app.footer.scaffold': '脚手架',
    'app.footer.scaffolds': '脚手架市场',
    'app.footer.dev-tools': '开发工具',
    'app.footer.dva': '应用框架',
    'app.footer.resources': '相关资源',
    'app.footer.data-vis': '数据可视化',
    'app.footer.eggjs': '企业级 Node 开发框架',
    'app.footer.motion': '设计动效',
    'app.footer.antd-library': 'Axure 部件库',
    'app.footer.design-platform': '蚂蚁金服设计平台',
    'app.footer.antux': '页面逻辑素材',
    'app.footer.community': '社区',
    'app.footer.help': '帮助',
    'app.footer.change-log': '更新记录',
    'app.footer.faq': '常见问题',
    'app.footer.feedback': '反馈和建议',
    'app.footer.stackoverflow': 'StackOverflow',
    'app.footer.segmentfault': 'SegmentFault',
    'app.footer.discuss-en': '在线讨论 (English)',
    'app.footer.discuss-cn': '在线讨论 (中文)',
    'app.footer.bug-report': '报告 Bug',
    'app.footer.issues': '讨论列表',
    'app.footer.version': '文档版本：',
    'app.footer.author': '蚂蚁金服体验技术部出品 @ AFX',
    'app.footer.work_with_us': '加入我们',
    'app.footer.more-product': '更多产品',
    'app.footer.company': 'AFX',
    'app.footer.ant-design': '蚂蚁 UI 体系',
    'app.footer.yuque': '语雀',
    'app.footer.yuque.slogan': '知识创作·协作平台',
    'app.footer.fengdie': '云凤蝶',
    'app.footer.fengdie.slogan': '移动建站平台',
    'app.footer.zhihu': '知乎专栏',
    'app.footer.zhihu.xtech': '体验科技专栏',
    'app.footer.seeconf': '蚂蚁体验科技大会',
    'app.footer.xcloud': '蚂蚁体验云',
    'app.publish.title': 'Ant Desgin Pro@2.0.0 发布！🎉 🎉 🎉',
    'app.publish.greeting': '你好，',
    'app.publish.intro': ' 已正式发布',
    'app.publish.tips': '，欢迎升级和体验。',
    'app.publish.url': 'https://www.yuque.com/ant-design/ant-design-pro/gg1e9a',
    'app.publish.old-version-guide': '如果您还需要使用旧版，请查阅 ',
    'app.publish.old-version-tips': '，也可通过点击页面右上角的 v1 菜单查看。'
  }
});
// EXTERNAL MODULE: ./src/components/utils.js
var utils = __webpack_require__(170);

// EXTERNAL MODULE: ./node_modules/react-github-button/assets/style.css
var assets_style = __webpack_require__(609);

// EXTERNAL MODULE: ./node_modules/rc-drawer-menu/assets/index.css
var assets = __webpack_require__(610);

// EXTERNAL MODULE: ./src/static/index.less
var src_static = __webpack_require__(611);

// CONCATENATED MODULE: ./src/static/style.js



// EXTERNAL MODULE: ./node_modules/antd/lib/row/style/index.js
var row_style = __webpack_require__(213);

// EXTERNAL MODULE: ./node_modules/antd/lib/row/index.js
var row = __webpack_require__(179);
var row_default = /*#__PURE__*/__webpack_require__.n(row);

// EXTERNAL MODULE: ./node_modules/antd/lib/button/style/index.js
var button_style = __webpack_require__(233);

// EXTERNAL MODULE: ./node_modules/antd/lib/button/index.js
var lib_button = __webpack_require__(172);
var button_default = /*#__PURE__*/__webpack_require__.n(lib_button);

// EXTERNAL MODULE: ./node_modules/antd/lib/col/style/index.js
var col_style = __webpack_require__(214);

// EXTERNAL MODULE: ./node_modules/antd/lib/col/index.js
var col = __webpack_require__(180);
var col_default = /*#__PURE__*/__webpack_require__.n(col);

// EXTERNAL MODULE: ./node_modules/antd/lib/popover/style/index.js
var popover_style = __webpack_require__(613);

// EXTERNAL MODULE: ./node_modules/antd/lib/popover/index.js
var popover = __webpack_require__(419);
var popover_default = /*#__PURE__*/__webpack_require__.n(popover);

// EXTERNAL MODULE: ./node_modules/antd/lib/icon/style/index.js
var icon_style = __webpack_require__(234);

// EXTERNAL MODULE: ./node_modules/antd/lib/icon/index.js
var icon = __webpack_require__(150);
var icon_default = /*#__PURE__*/__webpack_require__.n(icon);

// EXTERNAL MODULE: ./node_modules/antd/lib/menu/style/index.js
var menu_style = __webpack_require__(298);

// EXTERNAL MODULE: ./node_modules/antd/lib/menu/index.js
var lib_menu = __webpack_require__(239);
var menu_default = /*#__PURE__*/__webpack_require__.n(lib_menu);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.split.js
var es6_regexp_split = __webpack_require__(73);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.replace.js
var es6_regexp_replace = __webpack_require__(34);

// EXTERNAL MODULE: ./node_modules/antd/lib/modal/style/index.js
var modal_style = __webpack_require__(618);

// EXTERNAL MODULE: ./node_modules/antd/lib/modal/index.js
var modal = __webpack_require__(416);
var modal_default = /*#__PURE__*/__webpack_require__.n(modal);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.search.js
var es6_regexp_search = __webpack_require__(79);

// EXTERNAL MODULE: ./node_modules/antd/lib/select/style/index.js
var select_style = __webpack_require__(620);

// EXTERNAL MODULE: ./node_modules/antd/lib/select/index.js
var lib_select = __webpack_require__(215);
var select_default = /*#__PURE__*/__webpack_require__.n(lib_select);

// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js
var gatsby_browser_entry = __webpack_require__(235);

// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(627);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);

// CONCATENATED MODULE: ./src/components/layout/header.js





















/* eslint-disable react/jsx-one-expression-per-line */





var Option = select_default.a.Option,
    OptGroup = select_default.a.OptGroup;
var LOGO_URL = 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg';
var textSearchUrl = 'https://www.google.com/search?q=site:pro.ant.design+'; // https://www.algolia.com/apps/YEWBNYLVLW/

var searchUrl = 'https://yewbnylvlw-dsn.algolia.net/1/indexes/antd pro/query?x-algolia-agent=Algolia for vanilla JavaScript 3.21.1&x-algolia-application-id=YEWBNYLVLW&x-algolia-api-key=b42bc1a0c8ab7be447666944228a3176';
var key = 'antd-pro@2.0.0-notification-sent';

var header_Header =
/*#__PURE__*/
function (_React$Component) {
  inheritsLoose_default()(Header, _React$Component);

  function Header() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.state = {
      inputValue: '',
      menuVisible: false,
      menuMode: 'horizontal',
      searchOption: [],
      searching: false
    };

    _this.setMenuMode = function (isMobile) {
      _this.setState({
        menuMode: isMobile ? 'inline' : 'horizontal'
      });
    };

    _this.search = function (searchKey, success, error) {
      clearTimeout(_this.timer);

      if (!searchKey) {
        success();
        return;
      }

      _this.timer = setTimeout(function () {
        _this.setState({
          searching: true
        });

        axios_default.a.post(searchUrl, {
          params: "query=" + searchKey + "&hitsPerPage=20&facets=*&maxValuesPerFacet=10&facetFilters=[]"
        }).then(function (response) {
          _this.setState({
            searching: false
          });

          if (success) {
            success(response);
          }
        }).catch(function (err) {
          _this.setState({
            searching: false
          });

          if (error) {
            error(err);
          }
        });
      }, 200);
    };

    _this.handleHideMenu = function () {
      _this.setState({
        menuVisible: false
      });
    };

    _this.handleShowMenu = function () {
      _this.setState({
        menuVisible: true
      });
    };

    _this.onMenuVisibleChange = function (visible) {
      _this.setState({
        menuVisible: visible
      });
    };

    _this.handleSelect = function (value) {
      window.location.href = value;
    };

    _this.handleChange = function (value) {
      _this.setState({
        inputValue: value
      });

      _this.search(value, function (data) {
        if (data && data.data && data.data.hits) {
          _this.setState({
            searchOption: data.data.hits
          });
        }
      });
    };

    _this.infoNewVersion = function () {
      var formatMessage = _this.props.intl.formatMessage;

      modal_default.a.info({
        title: formatMessage({
          id: 'app.publish.title'
        }),
        content: external_React_default.a.createElement("div", null, external_React_default.a.createElement("img", {
          src: "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",
          alt: "Ant Design"
        }), external_React_default.a.createElement("p", null, formatMessage({
          id: 'app.publish.greeting'
        }), external_React_default.a.createElement("a", {
          target: "_blank",
          rel: "noopener noreferrer",
          href: formatMessage({
            id: 'app.publish.url'
          })
        }, "Ant Desgin Pro ", formatMessage({
          id: 'app.publish.intro'
        })), formatMessage({
          id: 'app.publish.tips'
        }), formatMessage({
          id: 'app.publish.old-version-guide'
        }), external_React_default.a.createElement("a", {
          target: "_blank",
          rel: "noopener noreferrer",
          href: "https://v1.pro.ant.design"
        }, "v1.pro.ant.design"), formatMessage({
          id: 'app.publish.old-version-tips'
        }))),
        okText: 'OK',
        onOk: function onOk() {
          return localStorage.setItem(key, 'true');
        },
        className: 'new-version-info-modal',
        width: 470
      });
    };

    _this.handleLangChange = function () {
      var pathname = _this.props.location.pathname;
      var currentProtocol = window.location.protocol + "//";
      var currentHref = window.location.href.substr(currentProtocol.length);

      if (utils["c" /* isLocalStorageNameSupported */]()) {
        localStorage.setItem('locale', utils["d" /* isZhCN */](pathname) ? 'en-US' : 'zh-CN');
      }

      window.location.href = currentProtocol + currentHref.replace(window.location.pathname, utils["a" /* getLocalizedPathname */](pathname, !utils["d" /* isZhCN */](pathname)));
    };

    return _this;
  }

  var _proto = Header.prototype;

  _proto.componentDidMount = function componentDidMount() {
    // this.props.router.listen(this.handleHideMenu)
    var searchInput = this.searchInput;
    document.addEventListener('keyup', function (event) {
      if (event.keyCode === 83 && event.target === document.body) {
        searchInput.focus();
      }
    });

    if (localStorage.getItem(key) !== 'true' && Date.now() < new Date('2018/9/5').getTime()) {
      this.infoNewVersion();
    }
  };

  _proto.componentDidUpdate = function componentDidUpdate(preProps) {
    var isMobile = this.props.isMobile;

    if (isMobile !== preProps.isMobile) {
      this.setMenuMode(isMobile);
    }
  };

  _proto.render = function render() {
    var _this$state = this.state,
        inputValue = _this$state.inputValue,
        menuMode = _this$state.menuMode,
        menuVisible = _this$state.menuVisible,
        searchOption = _this$state.searchOption,
        searching = _this$state.searching;
    var _this$props = this.props,
        location = _this$props.location,
        intl = _this$props.intl;
    var path = location.pathname;
    var module = location.pathname.replace(/(^\/|\/$)/g, '').split('/').slice(0, -1).join('/');
    var activeMenuItem = module || 'home';

    if (/^components/.test(path)) {
      activeMenuItem = 'components';
    } else if (/docs/.test(path)) {
      activeMenuItem = 'docs';
    } else if (path === '/') {
      activeMenuItem = 'home';
    }

    var isZhCN = intl.locale === 'zh-CN';
    var menu = [external_React_default.a.createElement(menu_default.a, {
      mode: menuMode,
      selectedKeys: [activeMenuItem],
      id: "nav",
      key: "nav"
    }, external_React_default.a.createElement(menu_default.a.Item, {
      key: "home"
    }, external_React_default.a.createElement(gatsby_browser_entry["a" /* Link */], {
      to: utils["a" /* getLocalizedPathname */]('/', isZhCN)
    }, external_React_default.a.createElement(index_es["a" /* FormattedMessage */], {
      id: "app.header.menu.home"
    }))), external_React_default.a.createElement(menu_default.a.Item, {
      key: "docs"
    }, external_React_default.a.createElement(gatsby_browser_entry["a" /* Link */], {
      to: utils["a" /* getLocalizedPathname */]('/docs/getting-started', isZhCN)
    }, external_React_default.a.createElement(index_es["a" /* FormattedMessage */], {
      id: "app.header.menu.docs"
    }))), external_React_default.a.createElement(menu_default.a.Item, {
      key: "components"
    }, external_React_default.a.createElement(gatsby_browser_entry["a" /* Link */], {
      to: utils["a" /* getLocalizedPathname */]('/components/avatar-list', isZhCN)
    }, external_React_default.a.createElement(index_es["a" /* FormattedMessage */], {
      id: "app.header.menu.components"
    }))), external_React_default.a.createElement(menu_default.a.Item, {
      key: "v1"
    }, external_React_default.a.createElement("a", {
      href: "https://v1.pro.ant.design",
      target: "_blank",
      rel: "noopener noreferrer"
    }, "v1")), menuMode === 'inline' && external_React_default.a.createElement(menu_default.a.Item, {
      key: "preview"
    }, external_React_default.a.createElement("a", {
      target: "_blank",
      href: "http://preview.pro.ant.design/",
      rel: "noopener noreferrer"
    }, external_React_default.a.createElement(index_es["a" /* FormattedMessage */], {
      id: "app.home.preview"
    }))))];
    var componentSearchOption = searchOption.filter(function (v) {
      return v.type === 'component';
    }).map(function (d) {
      return external_React_default.a.createElement(Option, {
        key: d.url
      }, d.title, " ", isZhCN && d.subTitle);
    });
    var docSearchOption = searchOption.filter(function (v) {
      return v.type === 'doc';
    }).map(function (d) {
      return external_React_default.a.createElement(Option, {
        key: d.url
      }, isZhCN ? d.title : d['title-en'] || d.title);
    });
    var options = [];

    if (componentSearchOption) {
      options.push(external_React_default.a.createElement(OptGroup, {
        label: intl.formatMessage({
          id: 'app.header.search.component'
        }),
        key: "component"
      }, componentSearchOption));
    }

    if (docSearchOption) {
      options.push(external_React_default.a.createElement(OptGroup, {
        label: intl.formatMessage({
          id: 'app.header.search.doc'
        }),
        key: "doc"
      }, docSearchOption));
    }

    if (inputValue) {
      options.push(external_React_default.a.createElement(Option, {
        key: "" + textSearchUrl + inputValue
      }, external_React_default.a.createElement(index_es["a" /* FormattedMessage */], {
        id: "app.header.search.all"
      }), inputValue));
    }

    return external_React_default.a.createElement("div", {
      id: "header",
      className: "header"
    }, menuMode === 'inline' ? external_React_default.a.createElement(popover_default.a, {
      overlayClassName: "popover-menu",
      placement: "bottomRight",
      content: menu,
      trigger: "click",
      visible: menuVisible,
      arrowPointAtCenter: true,
      onVisibleChange: this.onMenuVisibleChange
    }, external_React_default.a.createElement(icon_default.a, {
      className: "nav-phone-icon",
      type: "menu",
      onClick: this.handleShowMenu
    })) : null, external_React_default.a.createElement(row_default.a, null, external_React_default.a.createElement(col_default.a, {
      xxl: 4,
      xl: 5,
      lg: 8,
      md: 8,
      sm: 24,
      xs: 24
    }, external_React_default.a.createElement(gatsby_browser_entry["a" /* Link */], {
      id: "logo",
      to: "/"
    }, external_React_default.a.createElement("img", {
      src: LOGO_URL,
      alt: "logo"
    }), external_React_default.a.createElement("img", {
      src: "https://gw.alipayobjects.com/zos/rmsportal/tNoOLUAkyuGLXoZvaibF.svg",
      alt: "Ant Design Pro"
    }))), external_React_default.a.createElement(col_default.a, {
      xxl: 20,
      xl: 19,
      lg: 16,
      md: 16,
      sm: 0,
      xs: 0
    }, external_React_default.a.createElement("div", {
      id: "search-box"
    }, external_React_default.a.createElement(icon_default.a, {
      type: "search"
    }), external_React_default.a.createElement(select_default.a, {
      mode: "combobox",
      value: inputValue,
      placeholder: intl.formatMessage({
        id: 'app.header.search'
      }),
      notFoundContent: "",
      defaultActiveFirstOption: false,
      showArrow: false,
      filterOption: false,
      optionLabelProp: "label",
      onSelect: this.handleSelect,
      onChange: this.handleChange
    }, searching && external_React_default.a.createElement(Option, {
      className: "search-loading",
      key: "search"
    }, external_React_default.a.createElement(icon_default.a, {
      type: "loading"
    })), options)), external_React_default.a.createElement("div", {
      className: "header-meta"
    }, external_React_default.a.createElement("div", {
      id: "preview"
    }, external_React_default.a.createElement("a", {
      id: "preview-button",
      target: "_blank",
      href: "http://preview.pro.ant.design",
      rel: "noopener noreferrer"
    }, external_React_default.a.createElement(button_default.a, {
      icon: "eye-o"
    }, external_React_default.a.createElement(index_es["a" /* FormattedMessage */], {
      id: "app.home.preview"
    })))), external_React_default.a.createElement("div", {
      id: "lang"
    }, external_React_default.a.createElement(button_default.a, {
      onClick: this.handleLangChange
    }, external_React_default.a.createElement(index_es["a" /* FormattedMessage */], {
      id: "app.header.lang"
    }))), menuMode === 'horizontal' ? external_React_default.a.createElement("div", {
      id: "menu"
    }, menu) : null))));
  };

  return Header;
}(external_React_default.a.Component);

/* harmony default export */ var header = (Object(index_es["d" /* injectIntl */])(header_Header));
// EXTERNAL MODULE: ./node_modules/antd/lib/badge/style/index.js
var badge_style = __webpack_require__(322);

// EXTERNAL MODULE: ./node_modules/antd/lib/badge/index.js
var badge = __webpack_require__(240);
var badge_default = /*#__PURE__*/__webpack_require__.n(badge);

// CONCATENATED MODULE: ./src/components/layout/Footer.js









/* eslint-disable react/jsx-one-expression-per-line */




var Footer_Footer =
/*#__PURE__*/
function (_React$Component) {
  inheritsLoose_default()(Footer, _React$Component);

  function Footer() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _this.handleLangChange = function () {
      var pathname = _this.props.location.pathname;
      var currentProtocol = window.location.protocol + "//";
      var currentHref = window.location.href.substr(currentProtocol.length);

      if (utils["c" /* isLocalStorageNameSupported */]()) {
        localStorage.setItem('locale', utils["d" /* isZhCN */](pathname) ? 'en-US' : 'zh-CN');
      }

      window.location.href = currentProtocol + currentHref.replace(window.location.pathname, utils["a" /* getLocalizedPathname */](pathname, !utils["d" /* isZhCN */](pathname)));
    };

    return _this;
  }

  var _proto = Footer.prototype;

  _proto.render = function render() {
    return external_React_default.a.createElement("footer", {
      id: "footer"
    }, external_React_default.a.createElement("div", {
      className: "footer-wrap"
    }, external_React_default.a.createElement(row_default.a, null, external_React_default.a.createElement(col_default.a, {
      md: 6,
      sm: 24,
      xs: 24
    }, external_React_default.a.createElement("div", {
      className: "footer-center"
    }, external_React_default.a.createElement("h2", null, external_React_default.a.createElement(index_es["a" /* FormattedMessage */], {
      id: "app.footer.resources"
    })), external_React_default.a.createElement("div", null, external_React_default.a.createElement("a", {
      href: "http://ant.design"
    }, "Ant Design")), external_React_default.a.createElement("div", null, external_React_default.a.createElement("a", {
      href: "http://mobile.ant.design"
    }, "Ant Design Mobile")), external_React_default.a.createElement("div", null, external_React_default.a.createElement("a", {
      href: "http://ng.ant.design"
    }, "NG-ZORRO"), external_React_default.a.createElement("span", null, " - "), "Ant Design of Angular"), external_React_default.a.createElement("div", null, external_React_default.a.createElement("a", {
      href: "https://ng.mobile.ant.design/"
    }, "NG-ZORRO-MOBILE")), external_React_default.a.createElement("div", null, external_React_default.a.createElement("a", {
      target: "_blank ",
      href: "https://github.com/websemantics/awesome-ant-design"
    }, external_React_default.a.createElement(index_es["a" /* FormattedMessage */], {
      id: "app.footer.awesome"
    }))), external_React_default.a.createElement("div", null, external_React_default.a.createElement("a", {
      target: "_blank",
      rel: "noopener noreferrer",
      href: "http://kitchen.alipay.com"
    }, "Kitchen"), external_React_default.a.createElement("span", null, " - "), external_React_default.a.createElement(index_es["a" /* FormattedMessage */], {
      id: "app.footer.kitchen"
    })), external_React_default.a.createElement("div", null, external_React_default.a.createElement(badge_default.a, {
      dot: true,
      offset: [3, 0]
    }, external_React_default.a.createElement("a", {
      target: "_blank",
      rel: "noopener noreferrer",
      href: "http://landing.ant.design"
    }, "Ant Design Landing"), external_React_default.a.createElement("span", null, " - "), external_React_default.a.createElement(index_es["a" /* FormattedMessage */], {
      id: "app.footer.landing"
    }))), external_React_default.a.createElement("div", null, external_React_default.a.createElement("a", {
      href: "http://scaffold.ant.design"
    }, "Scaffolds"), external_React_default.a.createElement("span", null, " - "), external_React_default.a.createElement(index_es["a" /* FormattedMessage */], {
      id: "app.footer.scaffolds"
    })), external_React_default.a.createElement("div", null, external_React_default.a.createElement("a", {
      target: "_blank",
      rel: "noopener noreferrer",
      href: "https://github.com/dvajs/dva"
    }, "dva"), ' ', "- ", external_React_default.a.createElement(index_es["a" /* FormattedMessage */], {
      id: "app.footer.dva"
    })), external_React_default.a.createElement("div", null, external_React_default.a.createElement("a", {
      target: "_blank",
      rel: "noopener noreferrer",
      href: "http://motion.ant.design"
    }, "Ant Motion"), external_React_default.a.createElement("span", null, " - "), external_React_default.a.createElement(index_es["a" /* FormattedMessage */], {
      id: "app.footer.motion"
    })), external_React_default.a.createElement("div", null, external_React_default.a.createElement("a", {
      target: "_blank",
      rel: "noopener noreferrer",
      href: "http://library.ant.design/"
    }, "Axure Library"), external_React_default.a.createElement("span", null, " - "), external_React_default.a.createElement(index_es["a" /* FormattedMessage */], {
      id: "app.footer.antd-library"
    })), external_React_default.a.createElement("div", null, external_React_default.a.createElement("a", {
      target: "_blank",
      rel: "noopener noreferrer",
      href: "http://ux.ant.design"
    }, "Ant UX"), external_React_default.a.createElement("span", null, " - "), external_React_default.a.createElement(index_es["a" /* FormattedMessage */], {
      id: "app.footer.antux"
    })), external_React_default.a.createElement("div", null, external_React_default.a.createElement("a", {
      target: "_blank ",
      href: "https://ant-design-pro.gitee.io/"
    }, external_React_default.a.createElement(index_es["a" /* FormattedMessage */], {
      id: "app.footer.chinamirror"
    }))))), external_React_default.a.createElement(col_default.a, {
      md: 6,
      sm: 24,
      xs: 24
    }, external_React_default.a.createElement("div", {
      className: "footer-center"
    }, external_React_default.a.createElement("h2", null, external_React_default.a.createElement(index_es["a" /* FormattedMessage */], {
      id: "app.footer.community"
    })), external_React_default.a.createElement("div", null, external_React_default.a.createElement("a", {
      target: "_blank",
      rel: "noopener noreferrer",
      href: "http://zhuanlan.zhihu.com/antdesign"
    }, external_React_default.a.createElement(index_es["a" /* FormattedMessage */], {
      id: "app.footer.zhihu"
    }))), external_React_default.a.createElement("div", null, external_React_default.a.createElement("a", {
      target: "_blank",
      rel: "noopener noreferrer",
      href: "http://medium.com/ant-design/"
    }, "Medium")), external_React_default.a.createElement("div", null, external_React_default.a.createElement("a", {
      target: "_blank",
      rel: "noopener noreferrer",
      href: "http://twitter.com/antdesignui"
    }, "Twitter")), external_React_default.a.createElement("div", null, external_React_default.a.createElement("a", {
      target: "_blank",
      rel: "noopener noreferrer",
      href: "http://zhuanlan.zhihu.com/xtech"
    }, external_React_default.a.createElement(index_es["a" /* FormattedMessage */], {
      id: "app.footer.zhihu.xtech"
    }))), external_React_default.a.createElement("div", null, external_React_default.a.createElement("a", {
      target: "_blank",
      rel: "noopener noreferrer",
      href: "http://seeconf.alipay.com/"
    }, "SEE Conf"), external_React_default.a.createElement("span", null, " - "), external_React_default.a.createElement(index_es["a" /* FormattedMessage */], {
      id: "app.footer.seeconf"
    })))), external_React_default.a.createElement(col_default.a, {
      md: 6,
      sm: 24,
      xs: 24
    }, external_React_default.a.createElement("div", {
      className: "footer-center"
    }, external_React_default.a.createElement("h2", null, external_React_default.a.createElement(index_es["a" /* FormattedMessage */], {
      id: "app.footer.help"
    })), external_React_default.a.createElement("div", null, external_React_default.a.createElement("a", {
      target: "_blank ",
      href: "https://github.com/ant-design/ant-design-pro"
    }, "GitHub")), external_React_default.a.createElement("div", null, external_React_default.a.createElement("a", {
      href: "/docs/changelog"
    }, external_React_default.a.createElement(index_es["a" /* FormattedMessage */], {
      id: "app.footer.change-log"
    }))), external_React_default.a.createElement("div", null, external_React_default.a.createElement("a", {
      target: "_blank",
      rel: "noopener noreferrer",
      href: "https://github.com/ant-design/ant-design/wiki/FAQ"
    }, external_React_default.a.createElement(index_es["a" /* FormattedMessage */], {
      id: "app.footer.faq"
    }))), external_React_default.a.createElement("div", null, external_React_default.a.createElement("a", {
      target: "_blank",
      rel: "noopener noreferrer",
      href: "https://gitter.im/ant-design/ant-design-pro"
    }, external_React_default.a.createElement(index_es["a" /* FormattedMessage */], {
      id: "app.footer.discuss-cn"
    }))), external_React_default.a.createElement("div", null, external_React_default.a.createElement("a", {
      target: "_blank",
      rel: "noopener noreferrer",
      href: "https://github.com/ant-design/ant-design/issues"
    }, external_React_default.a.createElement(index_es["a" /* FormattedMessage */], {
      id: "app.footer.issues"
    }))), external_React_default.a.createElement("div", null, external_React_default.a.createElement("a", {
      target: "_blank",
      rel: "noopener noreferrer",
      href: "http://stackoverflow.com/questions/tagged/antd"
    }, external_React_default.a.createElement(index_es["a" /* FormattedMessage */], {
      id: "app.footer.stackoverflow"
    }))), external_React_default.a.createElement("div", null, external_React_default.a.createElement("a", {
      target: "_blank",
      rel: "noopener noreferrer",
      href: "https://segmentfault.com/t/antd"
    }, external_React_default.a.createElement(index_es["a" /* FormattedMessage */], {
      id: "app.footer.segmentfault"
    }))))), external_React_default.a.createElement(col_default.a, {
      md: 6,
      sm: 24,
      xs: 24
    }, external_React_default.a.createElement("div", {
      className: "footer-center"
    }, external_React_default.a.createElement("h2", null, external_React_default.a.createElement("img", {
      className: "title-icon",
      src: "https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg",
      alt: "AFX Cloud"
    }), external_React_default.a.createElement(index_es["a" /* FormattedMessage */], {
      id: "app.footer.more-product"
    })), external_React_default.a.createElement("div", null, external_React_default.a.createElement("a", {
      target: "_blank",
      rel: "noopener noreferrer",
      href: "https://yuque.com/"
    }, external_React_default.a.createElement(index_es["a" /* FormattedMessage */], {
      id: "app.footer.yuque"
    })), external_React_default.a.createElement("span", null, " - "), external_React_default.a.createElement(index_es["a" /* FormattedMessage */], {
      id: "app.footer.yuque.slogan"
    })), external_React_default.a.createElement("div", null, external_React_default.a.createElement("a", {
      target: "_blank",
      rel: "noopener noreferrer",
      href: "https://yunfengdie.com/"
    }, external_React_default.a.createElement(index_es["a" /* FormattedMessage */], {
      id: "app.footer.fengdie"
    })), external_React_default.a.createElement("span", null, " - "), external_React_default.a.createElement(index_es["a" /* FormattedMessage */], {
      id: "app.footer.fengdie.slogan"
    })), external_React_default.a.createElement("div", null, external_React_default.a.createElement("a", {
      target: "_blank",
      rel: "noopener noreferrer",
      href: "https://antv.alipay.com/"
    }, "AntV"), external_React_default.a.createElement("span", null, " - "), external_React_default.a.createElement(index_es["a" /* FormattedMessage */], {
      id: "app.footer.data-vis"
    })), external_React_default.a.createElement("div", null, external_React_default.a.createElement("a", {
      target: "_blank",
      rel: "noopener noreferrer",
      href: "https://eggjs.org/"
    }, "Egg"), external_React_default.a.createElement("span", null, " - "), external_React_default.a.createElement(index_es["a" /* FormattedMessage */], {
      id: "app.footer.eggjs"
    })), external_React_default.a.createElement("div", null, external_React_default.a.createElement("a", {
      target: "_blank",
      rel: "noopener noreferrer",
      href: "http://xcloud.alipay.com/"
    }, external_React_default.a.createElement(index_es["a" /* FormattedMessage */], {
      id: "app.footer.xcloud"
    }))))))), external_React_default.a.createElement("div", {
      className: "bottom-bar"
    }, "Made with ", external_React_default.a.createElement("span", {
      className: "heart"
    }, "\u2764"), " by", external_React_default.a.createElement("a", {
      target: "_blank",
      rel: "noopener noreferrer",
      href: "https://yuque.com/afx/blog"
    }, external_React_default.a.createElement(index_es["a" /* FormattedMessage */], {
      id: "app.footer.company"
    }))));
  };

  return Footer;
}(external_React_default.a.Component);

/* harmony default export */ var layout_Footer = (Object(index_es["d" /* injectIntl */])(Footer_Footer));
// CONCATENATED MODULE: ./src/components/layout/index.js
/* unused harmony export Layout */
















var layout_Layout =
/*#__PURE__*/
function (_React$PureComponent) {
  inheritsLoose_default()(Layout, _React$PureComponent);

  function Layout(props) {
    var _this;

    _this = _React$PureComponent.call(this, props) || this;
    var pathname = props.location.pathname;
    var appLocale = utils["d" /* isZhCN */](pathname) ? zh_CN : locale_en_US;
    Object(index_es["c" /* addLocaleData */])(appLocale.data);
    _this.state = {
      appLocale: appLocale
    };
    return _this;
  }

  var _proto = Layout.prototype;

  _proto.componentDidMount = function componentDidMount() {
    // 全局 G2 设置
    var config = {
      defaultColor: '#1089ff',
      shape: {
        interval: {
          fillOpacity: 1
        }
      }
    };
    Object(external_BizCharts_["setTheme"])(config);
  };

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        location = _this$props.location,
        restProps = objectWithoutPropertiesLoose_default()(_this$props, ["children", "location"]);

    var pathname = location.pathname;
    var appLocale = this.state.appLocale;
    return external_React_default.a.createElement(index_es["b" /* IntlProvider */], {
      locale: appLocale.locale,
      messages: appLocale.messages
    }, external_React_default.a.createElement(locale_provider_default.a, {
      locale: en_US_default.a
    }, external_React_default.a.createElement("div", {
      className: "page-wrapper " + ((pathname === '/' || pathname === 'index-cn') && 'index-page-wrapper')
    }, external_React_default.a.createElement(header, Object.assign({}, restProps, {
      location: location
    })), external_React_default.a.cloneElement(children, Object.assign({}, children.props, {
      isMobile: restProps.isMobile
    })), external_React_default.a.createElement(layout_Footer, Object.assign({}, restProps, {
      location: location
    })))));
  };

  return Layout;
}(external_React_default.a.PureComponent);

var layout_WrapperLayout = function WrapperLayout(props) {
  return external_React_default.a.createElement(react_media["a" /* default */], {
    query: "(max-width: 599px)"
  }, function (isMobile) {
    var isNode = typeof window === "undefined";
    return external_React_default.a.createElement(layout_Layout, Object.assign({}, props, {
      isMobile: isMobile && !isNode
    }));
  });
};

/* harmony default export */ var layout = __webpack_exports__["a"] = (layout_WrapperLayout);

/***/ }),

/***/ 391:
/***/ (function(module, exports, __webpack_require__) {

var preferDefault = function preferDefault(m) {
  return m && m.default || m;
};

if (false) {} else if (true) {
  module.exports = preferDefault(__webpack_require__(626));
} else {}

/***/ }),

/***/ 585:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 593:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 600:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 626:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _page_renderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(68);
/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2);






var ProdPageRenderer = function ProdPageRenderer(_ref) {
  var location = _ref.location;
  var pageResources = _loader__WEBPACK_IMPORTED_MODULE_4__["default"].getResourcesForPathnameSync(location.pathname);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_page_renderer__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], Object.assign({
    location: location,
    pageResources: pageResources
  }, pageResources.json));
};

ProdPageRenderer.propTypes = {
  location: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    pathname: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired
  }).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (ProdPageRenderer);

/***/ })

}]);
//# sourceMappingURL=2-2f4bd0bbede879fb174a.js.map