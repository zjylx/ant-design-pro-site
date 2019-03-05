(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Template; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageQuery", function() { return pageQuery; });
/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74);
/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75);
/* harmony import */ var core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(77);
/* harmony import */ var _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(33);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(382);
/* harmony import */ var _components_Content_MainContent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(383);
/* harmony import */ var _components_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(170);









var transformerDemos = function transformerDemos(demos) {
  if (!demos || !demos.edges) {
    return;
  }

  return demos.edges.map(function (_ref) {
    var node = _ref.node;
    return Object.assign({
      preview: node.code
    }, node.content, {
      meta: Object.assign({}, Object(_components_utils__WEBPACK_IMPORTED_MODULE_7__[/* transformerFrontmatter */ "f"])(node.frontmatter), {
        filename: node.fields.slug
      })
    });
  });
};

function Template(_ref2) {
  var data = _ref2.data,
      rest = _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_2___default()(_ref2, ["data"]);

  var markdownRemark = data.markdownRemark,
      _data$demos = data.demos,
      demos = _data$demos === void 0 ? {
    edges: []
  } : _data$demos,
      allMarkdownRemark = data.allMarkdownRemark;
  var frontmatter = markdownRemark.frontmatter,
      fields = markdownRemark.fields,
      html = markdownRemark.html,
      description = markdownRemark.description,
      tableOfContents = markdownRemark.tableOfContents;
  var edges = allMarkdownRemark.edges;
  var menuList = edges.map(function (_ref3) {
    var node = _ref3.node;
    var newFrontmatter = Object(_components_utils__WEBPACK_IMPORTED_MODULE_7__[/* transformerFrontmatter */ "f"])(node.frontmatter);
    return Object.assign({
      slug: node.fields.slug,
      meta: Object.assign({}, newFrontmatter, {
        slug: node.fields.slug,
        filename: node.fields.slug
      }),
      path: node.fields.path
    }, newFrontmatter);
  }).filter(function (_ref4) {
    var slug = _ref4.slug;
    return !slug.includes('/demo/');
  });
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], rest, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_Content_MainContent__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], Object.assign({}, rest, {
    demos: transformerDemos(demos),
    localizedPageData: Object.assign({
      meta: Object.assign({}, Object(_components_utils__WEBPACK_IMPORTED_MODULE_7__[/* transformerFrontmatter */ "f"])(frontmatter), {
        filename: fields.slug
      }),
      toc: tableOfContents,
      content: html
    }, description),
    menuList: menuList
  })));
}
var pageQuery = "2172119867";

/***/ }),

/***/ 383:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/antd/lib/row/style/index.js
var row_style = __webpack_require__(213);

// EXTERNAL MODULE: ./node_modules/antd/lib/row/index.js
var row = __webpack_require__(179);
var row_default = /*#__PURE__*/__webpack_require__.n(row);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.assign.js
var es6_object_assign = __webpack_require__(33);

// EXTERNAL MODULE: ./node_modules/antd/lib/col/style/index.js
var col_style = __webpack_require__(214);

// EXTERNAL MODULE: ./node_modules/antd/lib/col/index.js
var col = __webpack_require__(180);
var col_default = /*#__PURE__*/__webpack_require__.n(col);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.split.js
var es6_regexp_split = __webpack_require__(73);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.replace.js
var es6_regexp_replace = __webpack_require__(34);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.find-index.js
var es6_array_find_index = __webpack_require__(426);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.sort.js
var es6_array_sort = __webpack_require__(232);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__(72);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.iterator.js
var es6_array_iterator = __webpack_require__(56);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.keys.js
var es6_object_keys = __webpack_require__(427);

// EXTERNAL MODULE: ./node_modules/antd/lib/badge/style/index.js
var badge_style = __webpack_require__(322);

// EXTERNAL MODULE: ./node_modules/antd/lib/badge/index.js
var badge = __webpack_require__(240);
var badge_default = /*#__PURE__*/__webpack_require__.n(badge);

// EXTERNAL MODULE: ./node_modules/antd/lib/icon/style/index.js
var icon_style = __webpack_require__(234);

// EXTERNAL MODULE: ./node_modules/antd/lib/icon/index.js
var icon = __webpack_require__(150);
var icon_default = /*#__PURE__*/__webpack_require__.n(icon);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.link.js
var es6_string_link = __webpack_require__(428);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(36);
var assertThisInitialized_default = /*#__PURE__*/__webpack_require__.n(assertThisInitialized);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inheritsLoose.js
var inheritsLoose = __webpack_require__(7);
var inheritsLoose_default = /*#__PURE__*/__webpack_require__.n(inheritsLoose);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.array.includes.js
var es7_array_includes = __webpack_require__(74);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.includes.js
var es6_string_includes = __webpack_require__(75);

// EXTERNAL MODULE: ./node_modules/antd/lib/menu/style/index.js
var menu_style = __webpack_require__(298);

// EXTERNAL MODULE: ./node_modules/antd/lib/menu/index.js
var menu = __webpack_require__(239);
var menu_default = /*#__PURE__*/__webpack_require__.n(menu);

// EXTERNAL MODULE: external "React"
var external_React_ = __webpack_require__(0);
var external_React_default = /*#__PURE__*/__webpack_require__.n(external_React_);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(4);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js
var gatsby_browser_entry = __webpack_require__(235);

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(143);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ./node_modules/rc-drawer-menu/es/index.js + 2 modules
var es = __webpack_require__(579);

// EXTERNAL MODULE: ./node_modules/antd/lib/affix/style/index.js
var affix_style = __webpack_require__(269);

// EXTERNAL MODULE: ./node_modules/antd/lib/affix/index.js
var affix = __webpack_require__(220);
var affix_default = /*#__PURE__*/__webpack_require__.n(affix);

// EXTERNAL MODULE: ./node_modules/antd/lib/alert/style/index.js
var alert_style = __webpack_require__(270);

// EXTERNAL MODULE: ./node_modules/antd/lib/alert/index.js
var lib_alert = __webpack_require__(242);
var alert_default = /*#__PURE__*/__webpack_require__.n(lib_alert);

// EXTERNAL MODULE: ./node_modules/antd/lib/timeline/style/index.js
var timeline_style = __webpack_require__(430);

// EXTERNAL MODULE: ./node_modules/antd/lib/timeline/index.js
var timeline = __webpack_require__(323);
var timeline_default = /*#__PURE__*/__webpack_require__.n(timeline);

// EXTERNAL MODULE: ./node_modules/react-intl/lib/index.es.js
var index_es = __webpack_require__(169);

// EXTERNAL MODULE: ./node_modules/react-document-title/index.js
var react_document_title = __webpack_require__(241);
var react_document_title_default = /*#__PURE__*/__webpack_require__.n(react_document_title);

// EXTERNAL MODULE: ./node_modules/delegate/src/delegate.js
var delegate = __webpack_require__(431);
var delegate_default = /*#__PURE__*/__webpack_require__.n(delegate);

// EXTERNAL MODULE: ./node_modules/antd/lib/tooltip/style/index.js
var tooltip_style = __webpack_require__(299);

// EXTERNAL MODULE: ./node_modules/antd/lib/tooltip/index.js
var tooltip = __webpack_require__(177);
var tooltip_default = /*#__PURE__*/__webpack_require__.n(tooltip);

// CONCATENATED MODULE: ./src/components/Content/EditButton.jsx





function EditButton(_ref) {
  var title = _ref.title,
      filename = _ref.filename,
      _ref$sourcePath = _ref.sourcePath,
      sourcePath = _ref$sourcePath === void 0 ? 'https://github.com/ant-design/ant-design-pro-site/edit/master/' : _ref$sourcePath;
  return external_React_default.a.createElement(tooltip_default.a, {
    title: title
  }, external_React_default.a.createElement("a", {
    className: "edit-button",
    target: "_blank",
    href: "" + sourcePath + filename
  }, external_React_default.a.createElement(icon_default.a, {
    type: "edit"
  })));
}
// CONCATENATED MODULE: ./src/components/Content/Article.jsx










/* eslint-disable react/forbid-prop-types */

/* eslint-disable react/jsx-one-expression-per-line */

/* eslint-disable react/jsx-wrap-multilines */







var Article_Article =
/*#__PURE__*/
function (_React$PureComponent) {
  inheritsLoose_default()(Article, _React$PureComponent);

  function Article() {
    return _React$PureComponent.apply(this, arguments) || this;
  }

  var _proto = Article.prototype;

  _proto.componentDidMount = function componentDidMount() {
    // Add ga event click
    this.delegation = delegate_default()(this.node, '.resource-card', 'click', function (e) {
      if (window.ga) {
        window.ga('send', 'event', 'Download', 'resource', e.delegateTarget.href);
      }
    }, false);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    clearTimeout(this.pingTimer);

    if (this.delegation) {
      this.delegation.destroy();
    }
  };

  _proto.getArticle = function getArticle(article) {
    var content = this.props.content;
    var meta = content.meta;

    if (!meta.timeline) {
      return article;
    }

    var timelineItems = [];
    var temp = [];
    var i = 1;
    external_React_["Children"].forEach(article.props.children, function (child) {
      if (child.type === 'h2' && temp.length > 0) {
        timelineItems.push(external_React_default.a.createElement(timeline_default.a.Item, {
          key: i
        }, temp));
        temp = [];
        i += 1;
      }

      temp.push(child);
    });

    if (temp.length > 0) {
      timelineItems.push(external_React_default.a.createElement(timeline_default.a.Item, {
        key: i
      }, temp));
    }

    return Object(external_React_["cloneElement"])(article, {
      children: external_React_default.a.createElement(timeline_default.a, null, timelineItems)
    });
  };

  _proto.render = function render() {
    var _this = this;

    var props = this.props;
    var content = props.content;
    var meta = content.meta;
    var title = meta.title,
        subtitle = meta.subtitle,
        filename = meta.filename;
    var locale = this.context.intl.locale;
    var isNotTranslated = locale === 'en-US' && typeof title === 'object';
    return external_React_default.a.createElement(react_document_title_default.a, {
      title: (title[locale] || title) + " - Ant Design"
    }, external_React_default.a.createElement("article", {
      className: "markdown",
      ref: function ref(node) {
        _this.node = node;
      }
    }, isNotTranslated && external_React_default.a.createElement(alert_default.a, {
      type: "warning",
      message: external_React_default.a.createElement("span", null, "This article has not been translated yet. Wan't to help us out?", ' ', external_React_default.a.createElement("a", {
        href: "https://github.com/ant-design/ant-design-pro/issues/120"
      }, "See this issue on GitHub.")),
      style: {
        marginBottom: 24
      }
    }), external_React_default.a.createElement("h1", null, title[locale] || title, !subtitle || locale === 'en-US' ? null : external_React_default.a.createElement("span", {
      className: "subtitle"
    }, subtitle), external_React_default.a.createElement(EditButton, {
      title: external_React_default.a.createElement(index_es["a" /* FormattedMessage */], {
        id: "app.content.edit-page"
      }),
      filename: filename.indexOf('scaffold/src/components') >= 0 ? 'xxx' : filename
    })), !content.toc || content.toc.length <= 1 || meta.toc === false ? null : external_React_default.a.createElement(affix_default.a, {
      className: "toc-affix",
      offsetTop: 16
    }, external_React_default.a.createElement("div", {
      dangerouslySetInnerHTML: {
        __html: content.toc.replace(/<ul>/g, '<ul class="toc">').replace(/\/#/g, '#')
      }
    })), external_React_default.a.createElement("section", {
      className: "markdown api-container",
      dangerouslySetInnerHTML: {
        __html: content.content
      }
    })));
  };

  return Article;
}(external_React_default.a.PureComponent);

Article_Article.contextTypes = {
  intl: prop_types_default.a.object.isRequired
};

// EXTERNAL MODULE: ./src/components/utils.js
var components_utils = __webpack_require__(170);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.match.js
var es6_regexp_match = __webpack_require__(78);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.constructor.js
var es6_regexp_constructor = __webpack_require__(434);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.anchor.js
var es6_string_anchor = __webpack_require__(435);

// EXTERNAL MODULE: external "ReactDOM"
var external_ReactDOM_ = __webpack_require__(32);
var external_ReactDOM_default = /*#__PURE__*/__webpack_require__.n(external_ReactDOM_);

// EXTERNAL MODULE: ./node_modules/ant-design-pro/lib/index.js
var lib = __webpack_require__(436);

// EXTERNAL MODULE: ./node_modules/react-copy-to-clipboard/lib/index.js
var react_copy_to_clipboard_lib = __webpack_require__(494);
var react_copy_to_clipboard_lib_default = /*#__PURE__*/__webpack_require__.n(react_copy_to_clipboard_lib);

// EXTERNAL MODULE: ./node_modules/antd/lib/index.js
var antd_lib = __webpack_require__(497);

// EXTERNAL MODULE: ./node_modules/lz-string/libs/lz-string.js
var lz_string = __webpack_require__(495);
var lz_string_default = /*#__PURE__*/__webpack_require__.n(lz_string);

// EXTERNAL MODULE: ./node_modules/numeral/numeral.js
var numeral = __webpack_require__(325);
var numeral_default = /*#__PURE__*/__webpack_require__.n(numeral);

// EXTERNAL MODULE: ./node_modules/moment/moment.js
var moment = __webpack_require__(156);
var moment_default = /*#__PURE__*/__webpack_require__.n(moment);

// EXTERNAL MODULE: ./node_modules/ant-design-pro/dist/ant-design-pro.min.css
var ant_design_pro_min = __webpack_require__(496);

// CONCATENATED MODULE: ./src/components/Content/Demo.jsx









/* eslint-disable no-new-func */

/* eslint-disable react/jsx-wrap-multilines */

/* eslint-disable react/forbid-prop-types */














var Icon = antd_lib["Icon"],
    Tooltip = antd_lib["Tooltip"];

var Demo_requireLib = function requireLib(path) {
  var libs = path.split('/');

  if (libs[0] === 'ant-design-pro') {
    return lib[libs.pop()];
  }

  if (libs[0] === 'antd') {
    return antd_lib;
  }

  if (libs[0] === 'numeral') {
    return numeral_default.a;
  }

  if (libs[0] === 'moment') {
    return moment_default.a;
  }
};

function antdProCodeFormat(c) {
  var code = c;
  code = code.replace(/import\s+\{\s+(.*)\s+\}\s+from\s+'ant-design-pro\/lib\/(.*)';/gi, 'import { $2 } from "ant-design-pro";\nconst { $1 } = $2;');
  code = code.replace(/import\s+(.*)\s+from\s+'ant-design-pro\/lib\/(.*)';/gi, 'import { $1 } from "ant-design-pro";');
  return code;
}

function compress(string) {
  return lz_string_default.a.compressToBase64(string).replace(/\+/g, '-') // Convert '+' to '-'
  .replace(/\//g, '_') // Convert '/' to '_'
  .replace(/=+$/, ''); // Remove ending '='
}

function antdProCodeFormatCodepen(c) {
  var code = c;
  code = code.replace(/import\s+\{\s+(.*)\s+\}\s+from\s+'antd';/gi, 'const { $1 } = antd;');
  code = code.replace(/import\s+\{\s+(.*)\s+\}\s+from\s+'ant-design-pro\/lib\/(.*)';/gi, 'const { $1 } = $2;');
  code = code.replace(/import\s+(.*)\s+from\s+'ant-design-pro\/lib\/(.*)';/gi, '');
  return code;
}

var Demo_Demo =
/*#__PURE__*/
function (_React$Component) {
  inheritsLoose_default()(Demo, _React$Component);

  function Demo(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;

    _this.handleCodeExpand = function () {
      var codeExpand = _this.state.codeExpand;

      _this.setState({
        codeExpand: !codeExpand
      });
    };

    _this.saveAnchor = function (anchor) {
      _this.anchor = anchor;
    };

    _this.handleCodeCopied = function () {
      _this.setState({
        copied: true
      });
    };

    _this.onCopyTooltipVisibleChange = function (visible) {
      if (visible) {
        _this.setState({
          copyTooltipVisible: visible,
          copied: false
        });

        return;
      }

      _this.setState({
        copyTooltipVisible: visible
      });
    };

    _this.state = {
      codeExpand: false,
      sourceCode: '',
      copied: false,
      copyTooltipVisible: false,
      showRiddleButton: false
    };
    return _this;
  }

  var _proto = Demo.prototype;

  _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var highlightedCode = nextProps.highlightedCode;
    var div = document.createElement('div');
    div.innerHTML = highlightedCode;
    this.setState({
      sourceCode: div.textContent
    });
  };

  _proto.componentDidMount = function componentDidMount() {
    var _this2 = this;

    var _this$props = this.props,
        meta = _this$props.meta,
        location = _this$props.location,
        preview = _this$props.preview;

    if (meta.id === location.hash.slice(1)) {
      this.anchor.click();
    }

    this.componentWillReceiveProps(this.props);
    this.pingTimer = Object(components_utils["e" /* ping */])(function (status) {
      if (status !== 'timeout' && status !== 'error') {
        _this2.setState({
          showRiddleButton: true
        });
      }
    });
    var myrender = new Function('React', 'ReactDOM', 'require', 'mountNode', preview);

    if (this.dom) {
      myrender(external_React_default.a, external_ReactDOM_default.a, Demo_requireLib, this.dom);
    }
  };

  _proto.render = function render() {
    var _this3 = this;

    var state = this.state;
    var props = this.props;
    var meta = props.meta,
        id = props.id,
        content = props.content,
        highlightedCode = props.highlightedCode,
        style = props.style,
        highlightedStyle = props.highlightedStyle,
        expand = props.expand;
    var showRiddleButton = this.state.showRiddleButton;
    var codeExpand = state.codeExpand || expand;
    var codeBoxClass = classnames_default()({
      'code-box': true,
      expand: codeExpand
    });
    var locale = this.context.intl.locale;
    var localizedTitle = meta.title[locale] || meta.title;
    var localizeIntro = content[locale] || localizedTitle;
    var highlightClass = classnames_default()({
      'highlight-wrapper': true,
      'highlight-wrapper-expand': codeExpand
    });
    var prefillStyle = ("@import 'antd@next/dist/antd.css';\n\n@import 'ant-design-pro/dist/ant-design-pro.min.css';\n\n" + (style || '')).replace(new RegExp("#" + meta.id + "\\s*", 'g'), '');
    var prefillStyleCodepen = ("" + (style || '')).replace(new RegExp("#" + meta.id + "\\s*", 'g'), '');
    var html = "<div id=\"container\" style=\"padding: 24px\"></div>\n    <script>\n      var mountNode = document.getElementById('container');\n    </script>";
    var dependencies = state.sourceCode.split('\n').reduce(function (acc, line) {
      var matches = line.match(/import .+? from '(.+)';$/);

      if (matches && matches[1] && !line.includes('ant-design-pro/lib/')) {
        if (line.includes('lodash/')) {
          acc.lodash = 'latest';
        } else {
          acc[matches[1]] = 'latest';
        }
      }

      return acc;
    }, {
      react: 'latest',
      'react-dom': 'latest',
      antd: 'latest',
      'ant-design-pro': 'latest'
    });
    var codepenPrefillConfig = {
      title: localizedTitle + " - Ant Design Demo",
      html: html,
      js: antdProCodeFormatCodepen(state.sourceCode),
      css: prefillStyleCodepen,
      editors: '001',
      css_external: 'https://unpkg.com/antd@next/dist/antd.css;https://unpkg.com/ant-design-pro/dist/ant-design-pro.css',
      js_external: ['react@16.1.1/umd/react.development.js', 'react-dom@16.1.1/umd/react-dom.development.js', 'moment/min/moment-with-locales.js', 'numeral@2.0.6/numeral.js', 'antd@next/dist/antd-with-locales.js', 'ant-design-pro/dist/ant-design-pro.js'].map(function (url) {
        return "https://unpkg.com/" + url;
      }).join(';'),
      js_pre_processor: 'typescript'
    };
    var codesanboxPrefillConfig = {
      files: {
        'package.json': {
          content: {
            dependencies: dependencies
          }
        },
        'index.css': {
          content: (style || '').replace(new RegExp("#" + meta.id + "\\s*", 'g'), '')
        },
        'index.js': {
          content: "\n              import React from 'react';\n              import ReactDOM from 'react-dom';\n              import 'antd/dist/antd.css';\n              import './index.css';\n              import 'ant-design-pro/dist/ant-design-pro.css';\n              " + state.sourceCode.replace('mountNode', "document.getElementById('container')") + "\n          "
        },
        'index.html': {
          content: html
        }
      }
    };
    var riddlePrefillConfig = {
      title: localizedTitle + " - Ant Design Demo",
      js: antdProCodeFormat(state.sourceCode),
      css: prefillStyle
    };
    return external_React_default.a.createElement("section", {
      className: codeBoxClass,
      id: id
    }, external_React_default.a.createElement("section", {
      className: "code-box-demo"
    }, external_React_default.a.createElement("div", {
      ref: function ref(_ref) {
        return _this3.dom = _ref;
      }
    }), style ? external_React_default.a.createElement("style", {
      dangerouslySetInnerHTML: {
        __html: style
      }
    }) : null), external_React_default.a.createElement("section", {
      className: "code-box-meta markdown"
    }, external_React_default.a.createElement("div", {
      className: "code-box-title"
    }, external_React_default.a.createElement("a", {
      href: "#" + localizedTitle,
      ref: this.saveAnchor
    }, localizedTitle), external_React_default.a.createElement(EditButton, {
      title: external_React_default.a.createElement(index_es["a" /* FormattedMessage */], {
        id: "app.content.edit-page"
      }),
      filename: meta.filename.replace('scaffold/', ''),
      sourcePath: "https://github.com/ant-design/ant-design-pro/edit/master/"
    })), external_React_default.a.createElement("div", {
      dangerouslySetInnerHTML: {
        __html: localizeIntro
      }
    }), external_React_default.a.createElement(Tooltip, {
      title: codeExpand ? 'Hide Code' : 'Show Code'
    }, external_React_default.a.createElement("span", {
      className: "code-expand-icon"
    }, external_React_default.a.createElement("img", {
      alt: "expand code",
      src: "https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg",
      className: codeExpand ? 'code-expand-icon-hide' : 'code-expand-icon-show',
      onClick: this.handleCodeExpand
    }), external_React_default.a.createElement("img", {
      alt: "expand code",
      src: "https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg",
      className: codeExpand ? 'code-expand-icon-show' : 'code-expand-icon-hide',
      onClick: this.handleCodeExpand
    })))), external_React_default.a.createElement("section", {
      className: highlightClass,
      key: "code"
    }, external_React_default.a.createElement("div", {
      className: "highlight"
    }, external_React_default.a.createElement("div", {
      className: "code-box-actions"
    }, showRiddleButton ? external_React_default.a.createElement("form", {
      action: "//riddle.alibaba-inc.com/riddles/define",
      method: "POST",
      target: "_blank"
    }, external_React_default.a.createElement("input", {
      type: "hidden",
      name: "data",
      value: compress(JSON.stringify(riddlePrefillConfig))
    }), external_React_default.a.createElement(Tooltip, {
      title: external_React_default.a.createElement(index_es["a" /* FormattedMessage */], {
        id: "app.demo.riddle"
      })
    }, external_React_default.a.createElement("input", {
      type: "submit",
      value: "Create New Riddle with Prefilled Data",
      className: "code-box-riddle"
    }))) : null, external_React_default.a.createElement("form", {
      action: "https://codesandbox.io/api/v1/sandboxes/define",
      method: "POST",
      target: "_blank"
    }, external_React_default.a.createElement("input", {
      type: "hidden",
      name: "parameters",
      value: compress(JSON.stringify(codesanboxPrefillConfig))
    }), external_React_default.a.createElement(Tooltip, {
      title: external_React_default.a.createElement(index_es["a" /* FormattedMessage */], {
        id: "app.demo.codesandbox"
      })
    }, external_React_default.a.createElement("input", {
      type: "submit",
      value: "Create New Sandbox with Prefilled Data",
      className: "code-box-codesandbox"
    }))), external_React_default.a.createElement("form", {
      action: "https://codepen.io/pen/define",
      method: "POST",
      target: "_blank"
    }, external_React_default.a.createElement("input", {
      type: "hidden",
      name: "data",
      value: JSON.stringify(codepenPrefillConfig)
    }), external_React_default.a.createElement(Tooltip, {
      title: external_React_default.a.createElement(index_es["a" /* FormattedMessage */], {
        id: "app.demo.codepen"
      })
    }, external_React_default.a.createElement("input", {
      type: "submit",
      value: "Create New Pen with Prefilled Data",
      className: "code-box-codepen"
    }))), external_React_default.a.createElement(react_copy_to_clipboard_lib_default.a, {
      text: state.sourceCode,
      onCopy: this.handleCodeCopied
    }, external_React_default.a.createElement(Tooltip, {
      visible: state.copyTooltipVisible,
      onVisibleChange: this.onCopyTooltipVisibleChange,
      title: external_React_default.a.createElement(index_es["a" /* FormattedMessage */], {
        id: "app.demo." + (state.copied ? 'copied' : 'copy')
      })
    }, external_React_default.a.createElement(Icon, {
      type: state.copied && state.copyTooltipVisible ? 'check' : 'copy',
      className: "code-box-code-copy"
    })))), external_React_default.a.createElement("div", {
      dangerouslySetInnerHTML: {
        __html: highlightedCode
      }
    })), highlightedStyle ? external_React_default.a.createElement("div", {
      key: "style",
      className: "highlight"
    }, external_React_default.a.createElement("pre", null, external_React_default.a.createElement("code", {
      className: "css",
      dangerouslySetInnerHTML: {
        __html: highlightedStyle
      }
    }))) : null));
  };

  return Demo;
}(external_React_default.a.Component);

Demo_Demo.contextTypes = {
  intl: prop_types_default.a.object
};

// CONCATENATED MODULE: ./src/components/Content/ComponentDoc.jsx















/* eslint-disable react/jsx-closing-tag-location */

/* eslint-disable react/forbid-prop-types */

/* eslint-disable react/forbid-prop-types */

/* eslint-disable react/jsx-one-expression-per-line */

/* eslint-disable react/jsx-wrap-multilines */








var ComponentDoc_ComponentDoc =
/*#__PURE__*/
function (_React$PureComponent) {
  inheritsLoose_default()(ComponentDoc, _React$PureComponent);

  function ComponentDoc() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$PureComponent.call.apply(_React$PureComponent, [this].concat(args)) || this;
    _this.state = {
      affixMode: true
    };

    _this.handleScroll = function () {
      var tocNode = document.getElementById('demo-toc');
      var dh = document.body.scrollHeight;
      var of = window.scrollY + (tocNode && tocNode.offsetHeight || _this.tocHeight);
      var affixMode = _this.state;

      if (dh - of <= 600) {
        if (affixMode) {
          _this.tocHeight = tocNode.offsetHeight;

          _this.setState({
            affixMode: false
          });
        }
      } else if (!affixMode) {
        _this.setState({
          affixMode: true
        });
      }
    };

    _this.getShowDemos = function (localTitle) {
      var locale = _this.context.intl.locale;
      var leftChildren = [];
      var rightChildren = [];
      var demosJump = [];
      var expand = _this.state.expand;
      var isSingleCol = true;
      var _this$props = _this.props,
          location = _this$props.location,
          demos = _this$props.demos,
          themeConfig = _this$props.themeConfig,
          utils = _this$props.utils;
      var showedDemo = demos.filter(function (demo) {
        return demo.preview;
      }).sort(function (a, b) {
        return a.meta.order - b.meta.order;
      });
      showedDemo.forEach(function (_ref) {
        var col = _ref.meta.col;

        if (col && col !== 1) {
          isSingleCol = false;
        }
      });
      showedDemo.forEach(function (demoData, index) {
        var _demoData$meta = demoData.meta,
            filename = _demoData$meta.filename,
            title = _demoData$meta.title;
        var id = "scaffold-src-components-" + localTitle + "-demo-" + filename.split('/').pop().split('.')[0];
        demosJump.push({
          title: title[locale],
          id: id
        });
        var demoElem = external_React_default.a.createElement(Demo_Demo, Object.assign({}, demoData, {
          themeConfig: themeConfig,
          key: filename,
          utils: utils,
          expand: expand,
          id: id,
          location: location
        }));

        if (index % 2 === 0 || isSingleCol) {
          leftChildren.push(demoElem);
        } else {
          rightChildren.push(demoElem);
        }
      });
      return {
        leftChildren: leftChildren,
        rightChildren: rightChildren,
        isSingleCol: isSingleCol,
        demosJump: demosJump
      };
    };

    return _this;
  }

  var _proto = ComponentDoc.prototype;

  _proto.componentDidMount = function componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  };

  _proto.render = function render() {
    var props = this.props;
    var _props$doc = props.doc,
        _props$doc$meta = _props$doc.meta,
        title = _props$doc$meta.title,
        subtitle = _props$doc$meta.subtitle,
        filename = _props$doc$meta.filename,
        toc = _props$doc.toc,
        descriptionHtml = _props$doc.descriptionHtml,
        apiHtml = _props$doc.apiHtml;
    var pathname = props.location.pathname;
    var locale = this.context.intl.locale;
    var isZhCN = locale === 'zh-CN';
    var affixMode = this.state.affixMode;
    var localTitle = title[locale] || title;

    var _this$getShowDemos = this.getShowDemos(localTitle),
        leftChildren = _this$getShowDemos.leftChildren,
        demosJump = _this$getShowDemos.demosJump,
        rightChildren = _this$getShowDemos.rightChildren,
        isSingleCol = _this$getShowDemos.isSingleCol;

    var isNotTranslated = locale === 'en-US' && typeof title === 'object';
    return external_React_default.a.createElement(react_document_title_default.a, {
      title: (subtitle || '') + " " + localTitle + " - Ant Design"
    }, external_React_default.a.createElement("article", null, external_React_default.a.createElement(affix_default.a, {
      className: "toc-affix",
      offsetTop: 16,
      style: affixMode ? {
        opacity: 1
      } : {
        opacity: 0,
        zIndex: -99
      }
    }, external_React_default.a.createElement("ul", {
      className: "toc"
    }, external_React_default.a.createElement("li", null, external_React_default.a.createElement("p", null, external_React_default.a.createElement("a", {
      href: pathname + "#demos"
    }, "Demo")), external_React_default.a.createElement("ul", {
      className: "toc"
    }, demosJump.map(function (jump) {
      return external_React_default.a.createElement("li", null, external_React_default.a.createElement("a", {
        href: pathname + "#" + jump.id
      }, jump.title));
    })))), external_React_default.a.createElement("div", {
      id: "demo-toc-bottom",
      dangerouslySetInnerHTML: {
        __html: toc.replace(/<ul>/g, '<ul class="toc">').replace(/\/#/g, '#')
      }
    })), isNotTranslated && external_React_default.a.createElement(alert_default.a, {
      type: "warning",
      message: external_React_default.a.createElement("span", null, "This article has not been translated, hope that your can PR to translated it.", external_React_default.a.createElement("a", {
        href: "https://github.com/ant-design/ant-design-pro/issues/120"
      }, " Help us!")),
      style: {
        marginBottom: 24
      }
    }), external_React_default.a.createElement("section", {
      className: "markdown"
    }, external_React_default.a.createElement("h1", null, title[locale] || title, !subtitle ? null : external_React_default.a.createElement("span", {
      className: "subtitle"
    }, subtitle), external_React_default.a.createElement(EditButton, {
      title: external_React_default.a.createElement(index_es["a" /* FormattedMessage */], {
        id: "app.content.edit-page"
      }),
      filename: filename.replace('scaffold/', ''),
      sourcePath: "https://github.com/ant-design/ant-design-pro/edit/master/"
    })), external_React_default.a.createElement("section", {
      className: "markdown api-container",
      dangerouslySetInnerHTML: {
        __html: descriptionHtml
      }
    }), external_React_default.a.createElement("p", null, external_React_default.a.createElement(index_es["a" /* FormattedMessage */], {
      id: "app.component.refer.title"
    })), external_React_default.a.createElement("pre", {
      className: "language-jsx"
    }, external_React_default.a.createElement("code", null, external_React_default.a.createElement("span", {
      className: "token keyword"
    }, "import "), title[locale] || title, external_React_default.a.createElement("span", {
      className: "token keyword"
    }, " from "), external_React_default.a.createElement("span", {
      className: "token string"
    }, "'ant-design-pro/lib/" + (title[locale] || title) + "'"), external_React_default.a.createElement("span", {
      className: "token punctuation"
    }, ";"))), external_React_default.a.createElement("p", null, external_React_default.a.createElement(index_es["a" /* FormattedMessage */], {
      id: "app.component.refer.desc"
    }), external_React_default.a.createElement("a", {
      href: Object(components_utils["a" /* getLocalizedPathname */])('/docs/use-components-alone', isZhCN)
    }, external_React_default.a.createElement(index_es["a" /* FormattedMessage */], {
      id: "app.component.refer.link"
    }))), external_React_default.a.createElement("h2", {
      style: {
        marginBottom: 32
      },
      id: "demos"
    }, external_React_default.a.createElement(index_es["a" /* FormattedMessage */], {
      id: "app.component.examples"
    }))), external_React_default.a.createElement(row_default.a, {
      gutter: 16
    }, external_React_default.a.createElement(col_default.a, {
      span: isSingleCol ? '24' : '12',
      className: isSingleCol ? 'code-boxes-col-1-1' : 'code-boxes-col-2-1'
    }, leftChildren), isSingleCol ? null : external_React_default.a.createElement(col_default.a, {
      className: "code-boxes-col-2-1",
      span: 12
    }, rightChildren)), external_React_default.a.createElement("section", {
      className: "markdown api-container",
      dangerouslySetInnerHTML: {
        __html: apiHtml
      }
    })));
  };

  return ComponentDoc;
}(external_React_default.a.PureComponent);

ComponentDoc_ComponentDoc.contextTypes = {
  intl: prop_types_default.a.object
};

// CONCATENATED MODULE: ./src/components/Content/MainContent.jsx
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainContent_MainContent; });
























/* eslint-disable react/jsx-one-expression-per-line */

/* eslint-disable react/forbid-prop-types */








var SubMenu = menu_default.a.SubMenu;

function getActiveMenuItem(props) {
  var pathname = props.location.pathname;
  return pathname;
}

function getModuleDataWithProps(props) {
  var moduleData = props.menuList;
  var excludedSuffix = Object(components_utils["d" /* isZhCN */])(props.location.pathname) ? 'zh-CN' : 'en-US';
  return moduleData.filter(function (_ref) {
    var path = _ref.path;

    if (!path) {
      return false;
    }

    if (!path.includes('zh-CN') && !path.includes('en-US')) {
      return true;
    }

    return path.includes(excludedSuffix);
  });
}

function isNotTopLevel(level) {
  return level !== 'topLevel';
}

var MainContent_MainContent =
/*#__PURE__*/
function (_React$PureComponent) {
  inheritsLoose_default()(MainContent, _React$PureComponent);

  function MainContent(props) {
    var _this;

    _this = _React$PureComponent.call(this, props) || this;

    _this.handleMenuOpenChange = function (openKeys) {
      _this.setState({
        openKeys: openKeys
      });
    };

    _this.generateMenuItem = function (_ref2, item) {
      var _ref2$before = _ref2.before,
          before = _ref2$before === void 0 ? null : _ref2$before,
          _ref2$after = _ref2.after,
          after = _ref2$after === void 0 ? null : _ref2$after;

      if (!item.title) {
        return;
      }

      var locale = _this.context.intl.locale;
      var key = item.slug;
      var text = [external_React_default.a.createElement("span", {
        key: "english"
      }, item.title[locale] || item.title), external_React_default.a.createElement("span", {
        className: "chinese",
        key: "chinese"
      }, item.subtitle)];
      var disabled = item.disabled;
      var child = !item.link ? external_React_default.a.createElement(gatsby_browser_entry["a" /* Link */], {
        to: "" + item.filename,
        disabled: disabled
      }, before, text, after) : external_React_default.a.createElement("a", {
        href: item.link,
        target: "_blank",
        rel: "noopener noreferrer",
        disabled: disabled,
        className: "menu-item-link-outside"
      }, before, text, " ", external_React_default.a.createElement(icon_default.a, {
        type: "export"
      }), after);
      return external_React_default.a.createElement(menu_default.a.Item, {
        key: "" + key,
        disabled: disabled
      }, item.important ? external_React_default.a.createElement(badge_default.a, {
        dot: item.important
      }, child) : child);
    };

    _this.generateSubMenuItems = function (obj, footerNavIcons) {
      if (footerNavIcons === void 0) {
        footerNavIcons = {};
      }

      if (!obj) return [];
      var topLevel = (obj.topLevel || []).map(_this.generateMenuItem.bind(assertThisInitialized_default()(_this), footerNavIcons));
      var itemGroups = Object.keys(obj).filter(isNotTopLevel).map(function (type) {
        var groupItems = obj[type].sort(function (a, b) {
          if ('order' in a && 'order' in b) {
            return a.order - b.order;
          }

          return a.title.charCodeAt(0) - b.title.charCodeAt(0);
        }).map(_this.generateMenuItem.bind(assertThisInitialized_default()(_this), footerNavIcons));
        return external_React_default.a.createElement(menu_default.a.ItemGroup, {
          title: type,
          key: type
        }, groupItems);
      });
      return [].concat(topLevel, itemGroups);
    };

    _this.getMenuItems = function (footerNavIcons) {
      if (footerNavIcons === void 0) {
        footerNavIcons = {};
      }

      var moduleData = getModuleDataWithProps(_this.props) || null;
      var locale = _this.context.intl.locale;
      var menuItems = Object(components_utils["b" /* getMenuItems */])(moduleData, locale);
      var topLevel = {};

      if (menuItems.topLevel) {
        topLevel = _this.generateSubMenuItems(menuItems.topLevel, footerNavIcons);
      }

      console.log(menuItems);
      var subMenu = Object.keys(menuItems).filter(isNotTopLevel).map(function (category) {
        var subMenuItems = _this.generateSubMenuItems(menuItems[category], footerNavIcons);

        return external_React_default.a.createElement(SubMenu, {
          title: external_React_default.a.createElement("h4", null, category),
          key: category
        }, subMenuItems);
      });
      var result = [].concat(topLevel, subMenu);
      return result;
    };

    _this.getPreAndNext = function (menuItems) {
      var filename = _this.props.localizedPageData.meta.filename;
      var list = menuItems.length ? menuItems : Object.keys(menuItems).reduce(function (pre, key) {
        return pre.concat(menuItems[key].props.children);
      }, []);
      var index = list.findIndex(function (item) {
        return item.key === filename + "/";
      });

      if (index === -1) {
        return {};
      }

      return {
        prev: list[index - 1],
        next: list[index + 1]
      };
    };

    _this.state = {
      openKeys: _this.getSideBarOpenKeys(props) || []
    };
    return _this;
  }

  var _proto = MainContent.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.componentDidUpdate();
  };

  _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var openKeys = this.getSideBarOpenKeys(nextProps);

    if (openKeys) {
      this.setState({
        openKeys: openKeys
      });
    }
  };

  _proto.componentDidUpdate = function componentDidUpdate() {
    if (!location.hash) {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    } else {
      if (this.timer) {
        clearTimeout(this.timer);
      }

      this.timer = setTimeout(function () {
        var dom = document.getElementById(decodeURI(location.hash.replace('#', '')));

        if (dom) {
          dom.scrollIntoView();
        }
      }, 10);
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    clearTimeout(this.timer);
  };

  _proto.getSideBarOpenKeys = function getSideBarOpenKeys(nextProps) {
    var pathname = nextProps.location.pathname;
    var prevModule = this.currentModule;
    this.currentModule = pathname.replace(/^\//).split('/')[1] || 'components';

    if (this.currentModule === 'react') {
      this.currentModule = 'components';
    }

    var locale = Object(components_utils["d" /* isZhCN */])(pathname) ? 'zh-CN' : 'en-US';

    if (prevModule !== this.currentModule) {
      var moduleData = getModuleDataWithProps(nextProps);
      var shouldOpenKeys = Object.keys(Object(components_utils["b" /* getMenuItems */])(moduleData, locale));
      return shouldOpenKeys;
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        localizedPageData = _this$props.localizedPageData,
        demos = _this$props.demos,
        isMobile = _this$props.isMobile;
    var activeMenuItem = getActiveMenuItem(this.props);
    var menuItems = this.getMenuItems();

    var _this$getPreAndNext = this.getPreAndNext(menuItems),
        prev = _this$getPreAndNext.prev,
        next = _this$getPreAndNext.next;

    var mainContainerClass = classnames_default()('main-container', {
      'main-container-component': !!demos
    });
    var openKeys = this.state.openKeys;
    var menuChild = external_React_default.a.createElement(menu_default.a, {
      inlineIndent: "54",
      className: "aside-container",
      mode: "inline",
      openKeys: openKeys,
      selectedKeys: [activeMenuItem],
      onOpenChange: this.handleMenuOpenChange
    }, menuItems);
    return external_React_default.a.createElement("div", {
      className: "main-wrapper"
    }, external_React_default.a.createElement(row_default.a, null, isMobile ? external_React_default.a.createElement(es["a" /* default */], {
      iconChild: [external_React_default.a.createElement(icon_default.a, {
        type: "menu-unfold"
      }), external_React_default.a.createElement(icon_default.a, {
        type: "menu-fold"
      })],
      key: "mobile-menu",
      wrapperClassName: "drawer-wrapper"
    }, menuChild) : external_React_default.a.createElement(col_default.a, {
      xxl: 4,
      xl: 5,
      lg: 6,
      md: 24,
      sm: 24,
      xs: 24,
      className: "main-menu"
    }, menuChild), external_React_default.a.createElement(col_default.a, {
      xxl: 20,
      xl: 19,
      lg: 18,
      md: 24,
      sm: 24,
      xs: 24
    }, external_React_default.a.createElement("div", {
      className: mainContainerClass
    }, demos ? external_React_default.a.createElement(ComponentDoc_ComponentDoc, Object.assign({}, this.props, {
      doc: localizedPageData,
      demos: demos
    })) : external_React_default.a.createElement(Article_Article, Object.assign({}, this.props, {
      content: localizedPageData
    }))))), external_React_default.a.createElement(row_default.a, null, external_React_default.a.createElement(col_default.a, {
      lg: {
        span: 20,
        offset: 4
      },
      md: 24,
      sm: 24,
      xs: 24
    }, external_React_default.a.createElement("section", {
      className: "prev-next-nav"
    }, prev ? external_React_default.a.createElement("a", {
      className: "prev-page"
    }, external_React_default.a.createElement(icon_default.a, {
      className: "footer-nav-icon-before",
      type: "left"
    }), prev.props.children) : null, next ? external_React_default.a.createElement("a", {
      className: "next-page"
    }, next.props.children, external_React_default.a.createElement(icon_default.a, {
      className: "footer-nav-icon-after",
      type: "right"
    })) : null))));
  };

  return MainContent;
}(external_React_default.a.PureComponent);

MainContent_MainContent.contextTypes = {
  intl: prop_types_default.a.object.isRequired
};


/***/ })

}]);
//# sourceMappingURL=component---src-templates-components-js-1bd889a394ff5c2d9fd2.js.map