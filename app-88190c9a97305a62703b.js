(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],[
/* 0 */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(49);

var plugins = __webpack_require__(106);

var _require$publicLoader = __webpack_require__(2).publicLoader,
    getResourcesForPathname = _require$publicLoader.getResourcesForPathname,
    getResourcesForPathnameSync = _require$publicLoader.getResourcesForPathnameSync,
    getResourceURLsForPathname = _require$publicLoader.getResourceURLsForPathname;

exports.apiRunner = function (api, args, defaultReturn, argTransform) {
  if (args === void 0) {
    args = {};
  }

  // Hooks for cypress-gatsby's API handler
  if (undefined) {
    if (window.___apiHandler) {
      window.___apiHandler(api);
    } else if (window.___resolvedAPIs) {
      window.___resolvedAPIs.push(api);
    } else {
      window.___resolvedAPIs = [api];
    }
  }

  var results = plugins.map(function (plugin) {
    if (!plugin.plugin[api]) {
      return undefined;
    }

    args.getResourcesForPathnameSync = getResourcesForPathnameSync;
    args.getResourcesForPathname = getResourcesForPathname;
    args.getResourceURLsForPathname = getResourceURLsForPathname;
    var result = plugin.plugin[api](args, plugin.options);

    if (result && argTransform) {
      args = argTransform({
        args: args,
        result: result,
        plugin: plugin
      });
    }

    return result;
  }); // Filter out undefined results.

  results = results.filter(function (result) {
    return typeof result !== "undefined";
  });

  if (results.length > 0) {
    return results;
  } else if (defaultReturn) {
    return [defaultReturn];
  } else {
    return [];
  }
};

exports.apiRunnerAsync = function (api, args, defaultReturn) {
  return plugins.reduce(function (previous, next) {
    return next.plugin[api] ? previous.then(function () {
      return next.plugin[api](args, next.options);
    }) : previous;
  }, Promise.resolve());
};

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.array.includes.js
var es7_array_includes = __webpack_require__(74);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.includes.js
var es6_string_includes = __webpack_require__(75);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.replace.js
var es6_regexp_replace = __webpack_require__(34);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.find.js
var es6_array_find = __webpack_require__(107);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__(72);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.iterator.js
var es6_array_iterator = __webpack_require__(56);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.iterator.js
var es6_string_iterator = __webpack_require__(116);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.promise.js
var es6_promise = __webpack_require__(49);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.split.js
var es6_regexp_split = __webpack_require__(73);

// EXTERNAL MODULE: ./node_modules/@reach/router/lib/utils.js
var utils = __webpack_require__(24);

// CONCATENATED MODULE: ./.cache/strip-prefix.js
/**
 * Remove a prefix from a string. Return the input string if the given prefix
 * isn't found.
 */
/* harmony default export */ var strip_prefix = (function (str, prefix) {
  if (prefix === void 0) {
    prefix = "";
  }

  if (str.substr(0, prefix.length) === prefix) return str.slice(prefix.length);
  return str;
});
// CONCATENATED MODULE: ./.cache/find-page.js

// TODO add tests especially for handling prefixed links.


var pageCache = {};
/* harmony default export */ var find_page = (function (pages, pathPrefix) {
  if (pathPrefix === void 0) {
    pathPrefix = "";
  }

  return function (rawPathname) {
    var pathname = decodeURIComponent(rawPathname); // Remove the pathPrefix from the pathname.

    var trimmedPathname = strip_prefix(pathname, pathPrefix); // Remove any hashfragment

    if (trimmedPathname.split("#").length > 1) {
      trimmedPathname = trimmedPathname.split("#").slice(0, -1).join("");
    } // Remove search query


    if (trimmedPathname.split("?").length > 1) {
      trimmedPathname = trimmedPathname.split("?").slice(0, -1).join("");
    }

    if (pageCache[trimmedPathname]) {
      return pageCache[trimmedPathname];
    }

    var foundPage; // Array.prototype.find is not supported in IE so we use this somewhat odd
    // work around.

    pages.some(function (page) {
      var pathToMatch = page.matchPath ? page.matchPath : page.path;

      if (Object(utils["match"])(pathToMatch, trimmedPathname)) {
        foundPage = page;
        pageCache[trimmedPathname] = page;
        return true;
      } // Finally, try and match request with default document.


      if (Object(utils["match"])(page.path + "index.html", trimmedPathname)) {
        foundPage = page;
        pageCache[trimmedPathname] = page;
        return true;
      }

      return false;
    });
    return foundPage;
  };
});
// EXTERNAL MODULE: ./.cache/emitter.js + 1 modules
var emitter = __webpack_require__(10);

// CONCATENATED MODULE: ./.cache/prefetch.js


var support = function support(feature) {
  if (typeof document === "undefined") {
    return false;
  }

  var fakeLink = document.createElement("link");

  try {
    if (fakeLink.relList && typeof fakeLink.relList.supports === "function") {
      return fakeLink.relList.supports(feature);
    }
  } catch (err) {
    return false;
  }

  return false;
};

var linkPrefetchStrategy = function linkPrefetchStrategy(url) {
  return new Promise(function (resolve, reject) {
    if (typeof document === "undefined") {
      reject();
      return;
    }

    var link = document.createElement("link");
    link.setAttribute("rel", "prefetch");
    link.setAttribute("href", url);
    link.onload = resolve;
    link.onerror = reject;
    var parentElement = document.getElementsByTagName("head")[0] || document.getElementsByName("script")[0].parentNode;
    parentElement.appendChild(link);
  });
};

var xhrPrefetchStrategy = function xhrPrefetchStrategy(url) {
  return new Promise(function (resolve, reject) {
    var req = new XMLHttpRequest();
    req.open("GET", url, true);
    req.withCredentials = true;

    req.onload = function () {
      if (req.status === 200) {
        resolve();
      } else {
        reject();
      }
    };

    req.send(null);
  });
};

var supportedPrefetchStrategy = support("prefetch") ? linkPrefetchStrategy : xhrPrefetchStrategy;
var preFetched = {};

var prefetch = function prefetch(url) {
  return new Promise(function (resolve) {
    if (preFetched[url]) {
      resolve();
      return;
    }

    supportedPrefetchStrategy(url).then(function () {
      resolve();
      preFetched[url] = true;
    }).catch(function () {}); // 404s are logged to the console anyway
  });
};

/* harmony default export */ var _cache_prefetch = (prefetch);
// CONCATENATED MODULE: ./.cache/loader.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postInitialRenderWork", function() { return postInitialRenderWork; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setApiRunnerForLoader", function() { return setApiRunnerForLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "publicLoader", function() { return publicLoader; });












var preferDefault = function preferDefault(m) {
  return m && m.default || m;
};

var devGetPageData;
var inInitialRender = true;
var hasFetched = Object.create(null);
var syncRequires = {};
var asyncRequires = {};
var jsonDataPaths = {};
var fetchHistory = [];
var fetchingPageResourceMapPromise = null;
var fetchedPageResourceMap = false;
/**
 * Indicate if pages manifest is loaded
 *  - in production it is split to separate "pages-manifest" chunk that need to be lazy loaded,
 *  - in development it is part of single "common" chunk and is available from the start.
 */

var hasPageResourceMap = "production" !== "production";
var apiRunner;
var failedPaths = {};
var MAX_HISTORY = 5;
var jsonPromiseStore = {};

if (false) {}
/**
 * Fetch resource map (pages data and paths to json files with results of
 *  queries)
 */


var fetchPageResourceMap = function fetchPageResourceMap() {
  if (!fetchingPageResourceMapPromise) {
    fetchingPageResourceMapPromise = new Promise(function (resolve) {
      asyncRequires.data().then(function (_ref) {
        var pages = _ref.pages,
            dataPaths = _ref.dataPaths;
        // TODO — expose proper way to access this data from plugins.
        // Need to come up with an API for plugins to access
        // site info.
        window.___dataPaths = dataPaths;
        queue.addPagesArray(pages);
        queue.addDataPaths(dataPaths);
        hasPageResourceMap = true;
        resolve(fetchedPageResourceMap = true);
      }).catch(function (e) {
        console.warn("Failed to fetch pages manifest. Gatsby will reload on next navigation."); // failed to grab pages metadata
        // for now let's just resolve this - on navigation this will cause missing resources
        // and will trigger page reload and then it will retry
        // this can happen with service worker updates when webpack manifest points to old
        // chunk that no longer exists on server

        resolve(fetchedPageResourceMap = true);
      });
    });
  }

  return fetchingPageResourceMapPromise;
};

var createJsonURL = function createJsonURL(jsonName) {
  return "" + "/static/d/" + jsonName + ".json";
};

var createComponentUrls = function createComponentUrls(componentChunkName) {
  return window.___chunkMapping[componentChunkName].map(function (chunk) {
    return "" + chunk;
  });
};

var fetchResource = function fetchResource(resourceName) {
  // Find resource
  var resourceFunction;

  if (resourceName.slice(0, 12) === "component---") {
    resourceFunction = asyncRequires.components[resourceName];
  } else {
    if (resourceName in jsonPromiseStore) {
      resourceFunction = function resourceFunction() {
        return jsonPromiseStore[resourceName];
      };
    } else {
      resourceFunction = function resourceFunction() {
        var fetchPromise = new Promise(function (resolve, reject) {
          var url = createJsonURL(jsonDataPaths[resourceName]);
          var req = new XMLHttpRequest();
          req.open("GET", url, true);
          req.withCredentials = true;

          req.onreadystatechange = function () {
            if (req.readyState == 4) {
              if (req.status === 200) {
                resolve(JSON.parse(req.responseText));
              } else {
                delete jsonPromiseStore[resourceName];
                reject();
              }
            }
          };

          req.send(null);
        });
        jsonPromiseStore[resourceName] = fetchPromise;
        return fetchPromise;
      };
    }
  } // Download the resource


  hasFetched[resourceName] = true;
  return new Promise(function (resolve) {
    var fetchPromise = resourceFunction();
    var failed = false;
    return fetchPromise.catch(function () {
      failed = true;
    }).then(function (component) {
      fetchHistory.push({
        resource: resourceName,
        succeeded: !failed
      });
      fetchHistory = fetchHistory.slice(-MAX_HISTORY);
      resolve(component);
    });
  });
};

var loader_prefetchResource = function prefetchResource(resourceName) {
  if (resourceName.slice(0, 12) === "component---") {
    return Promise.all(createComponentUrls(resourceName).map(function (url) {
      return _cache_prefetch(url);
    }));
  } else {
    var url = createJsonURL(jsonDataPaths[resourceName]);
    return _cache_prefetch(url);
  }
};

var getResourceModule = function getResourceModule(resourceName) {
  return fetchResource(resourceName).then(preferDefault);
};

var appearsOnLine = function appearsOnLine() {
  var isOnLine = navigator.onLine;

  if (typeof isOnLine === "boolean") {
    return isOnLine;
  } // If no navigator.onLine support assume onLine if any of last N fetches succeeded


  var succeededFetch = fetchHistory.find(function (entry) {
    return entry.succeeded;
  });
  return !!succeededFetch;
};

var handleResourceLoadError = function handleResourceLoadError(path, message) {
  if (!failedPaths[path]) {
    failedPaths[path] = message;
  }

  if (appearsOnLine() && window.location.pathname.replace(/\/$/g, "") !== path.replace(/\/$/g, "")) {
    window.location.pathname = path;
  }
};

var onPrefetchPathname = function onPrefetchPathname(pathname) {
  if (!prefetchTriggered[pathname]) {
    apiRunner("onPrefetchPathname", {
      pathname: pathname
    });
    prefetchTriggered[pathname] = true;
  }
};

var onPostPrefetchPathname = function onPostPrefetchPathname(pathname) {
  if (!prefetchCompleted[pathname]) {
    apiRunner("onPostPrefetchPathname", {
      pathname: pathname
    });
    prefetchCompleted[pathname] = true;
  }
};
/**
 * Check if we should fallback to resources for 404 page if resources for a page are not found
 *
 * We can't do that when we don't have full pages manifest - we don't know if page exist or not if we don't have it.
 * We also can't do that on initial render / mount in case we just can't load resources needed for first page.
 * Not falling back to 404 resources will cause "EnsureResources" component to handle scenarios like this with
 * potential reload
 * @param {string} path Path to a page
 */


var shouldFallbackTo404Resources = function shouldFallbackTo404Resources(path) {
  return (hasPageResourceMap || inInitialRender) && path !== "/404.html";
}; // Note we're not actively using the path data atm. There
// could be future optimizations however around trying to ensure
// we load all resources for likely-to-be-visited paths.
// let pathArray = []
// let pathCount = {}


var findPage;
var pathScriptsCache = {};
var prefetchTriggered = {};
var prefetchCompleted = {};
var disableCorePrefetching = false;
var queue = {
  addPagesArray: function addPagesArray(newPages) {
    findPage = find_page(newPages, "");
  },
  addDevRequires: function addDevRequires(devRequires) {
    syncRequires = devRequires;
  },
  addProdRequires: function addProdRequires(prodRequires) {
    asyncRequires = prodRequires;
  },
  addDataPaths: function addDataPaths(dataPaths) {
    jsonDataPaths = dataPaths;
  },
  // Hovering on a link is a very strong indication the user is going to
  // click on it soon so let's start prefetching resources for this
  // pathname.
  hovering: function hovering(path) {
    queue.getResourcesForPathname(path);
  },
  enqueue: function enqueue(path) {
    if (!apiRunner) console.error("Run setApiRunnerForLoader() before enqueing paths"); // Skip prefetching if we know user is on slow or constrained connection

    if ("connection" in navigator) {
      if ((navigator.connection.effectiveType || "").includes("2g")) {
        return false;
      }

      if (navigator.connection.saveData) {
        return false;
      }
    } // Tell plugins with custom prefetching logic that they should start
    // prefetching this path.


    onPrefetchPathname(path); // If a plugin has disabled core prefetching, stop now.

    if (disableCorePrefetching.some(function (a) {
      return a;
    })) {
      return false;
    } // Check if the page exists.


    var page = findPage(path); // In production, we lazy load page metadata. If that
    // hasn't been fetched yet, start fetching it now.

    if ( true && !page && !fetchedPageResourceMap) {
      // If page wasn't found check and we didn't fetch resources map for
      // all pages, wait for fetch to complete and try find page again
      return fetchPageResourceMap().then(function () {
        return queue.enqueue(path);
      });
    }

    if (!page) {
      return false;
    }

    if (false) {} // Prefetch resources.


    if (true) {
      Promise.all([loader_prefetchResource(page.jsonName), loader_prefetchResource(page.componentChunkName)]).then(function () {
        // Tell plugins the path has been successfully prefetched
        onPostPrefetchPathname(path);
      });
    }

    return true;
  },
  getPage: function getPage(pathname) {
    return findPage(pathname);
  },
  getResourceURLsForPathname: function getResourceURLsForPathname(path) {
    var page = findPage(path);

    if (page) {
      return [].concat(createComponentUrls(page.componentChunkName), [createJsonURL(jsonDataPaths[page.jsonName])]);
    } else {
      return null;
    }
  },
  getResourcesForPathnameSync: function getResourcesForPathnameSync(path) {
    var page = findPage(path);

    if (page) {
      return pathScriptsCache[page.path];
    } else if (shouldFallbackTo404Resources(path)) {
      return queue.getResourcesForPathnameSync("/404.html");
    } else {
      return null;
    }
  },
  // Get resources (code/data) for a path. Fetches metdata first
  // if necessary and then the code/data bundles. Used for prefetching
  // and getting resources for page changes.
  getResourcesForPathname: function getResourcesForPathname(path) {
    return new Promise(function (resolve, reject) {
      // Production code path
      if (failedPaths[path]) {
        handleResourceLoadError(path, "Previously detected load failure for \"" + path + "\"");
        reject();
        return;
      }

      var page = findPage(path); // In production, we lazy load page metadata. If that
      // hasn't been fetched yet, start fetching it now.

      if (!page && !fetchedPageResourceMap && "production" === "production") {
        // If page wasn't found check and we didn't fetch resources map for
        // all pages, wait for fetch to complete and try to get resources again
        fetchPageResourceMap().then(function () {
          return resolve(queue.getResourcesForPathname(path));
        });
        return;
      }

      if (!page) {
        if (shouldFallbackTo404Resources(path)) {
          console.log("A page wasn't found for \"" + path + "\""); // Preload the custom 404 page

          resolve(queue.getResourcesForPathname("/404.html"));
          return;
        }

        resolve();
        return;
      } // Use the path from the page so the pathScriptsCache uses
      // the normalized path.


      path = page.path; // Check if it's in the cache already.

      if (pathScriptsCache[path]) {
        emitter["a" /* default */].emit("onPostLoadPageResources", {
          page: page,
          pageResources: pathScriptsCache[path]
        });
        resolve(pathScriptsCache[path]);
        return;
      } // Nope, we need to load resource(s)


      emitter["a" /* default */].emit("onPreLoadPageResources", {
        path: path
      }); // In development we know the code is loaded already
      // so we just return with it immediately.

      if (false) { var pageResources; } else {
        Promise.all([getResourceModule(page.componentChunkName), getResourceModule(page.jsonName)]).then(function (_ref2) {
          var component = _ref2[0],
              json = _ref2[1];

          if (!(component && json)) {
            resolve(null);
            return;
          }

          var pageResources = {
            component: component,
            json: json,
            page: page
          };
          pageResources.page.jsonURL = createJsonURL(jsonDataPaths[page.jsonName]);
          pathScriptsCache[path] = pageResources;
          resolve(pageResources);
          emitter["a" /* default */].emit("onPostLoadPageResources", {
            page: page,
            pageResources: pageResources
          }); // Tell plugins the path has been successfully prefetched

          onPostPrefetchPathname(path);
        });
      }
    });
  }
};
var postInitialRenderWork = function postInitialRenderWork() {
  inInitialRender = false;

  if (true) {
    // We got all resources needed for first mount,
    // we can fetch resoures for all pages.
    fetchPageResourceMap();
  }
};
var setApiRunnerForLoader = function setApiRunnerForLoader(runner) {
  apiRunner = runner;
  disableCorePrefetching = apiRunner("disableCorePrefetching");
};
var publicLoader = {
  getResourcesForPathname: queue.getResourcesForPathname,
  getResourceURLsForPathname: queue.getResourceURLsForPathname,
  getResourcesForPathnameSync: queue.getResourcesForPathnameSync
};
/* harmony default export */ var loader = __webpack_exports__["default"] = (queue);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(41)('wks');
var uid = __webpack_require__(43);
var Symbol = __webpack_require__(6).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, ReactIs; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(118)();
}


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(12);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 6 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 7 */
/***/ (function(module, exports) {

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

module.exports = _inheritsLoose;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (false) {}

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/mitt/dist/mitt.es.js
//      
// An event handler can take an optional event argument
// and should not return a value
                                          
                                                               

// An array of all currently registered event handlers for a type
                                            
                                                            
// A map of event types and their corresponding event handlers.
                        
                                 
                                   
  

/** Mitt: Tiny (~200b) functional event emitter / pubsub.
 *  @name mitt
 *  @returns {Mitt}
 */
function mitt(all                 ) {
	all = all || Object.create(null);

	return {
		/**
		 * Register an event handler for the given type.
		 *
		 * @param  {String} type	Type of event to listen for, or `"*"` for all events
		 * @param  {Function} handler Function to call in response to given event
		 * @memberOf mitt
		 */
		on: function on(type        , handler              ) {
			(all[type] || (all[type] = [])).push(handler);
		},

		/**
		 * Remove an event handler for the given type.
		 *
		 * @param  {String} type	Type of event to unregister `handler` from, or `"*"`
		 * @param  {Function} handler Handler function to remove
		 * @memberOf mitt
		 */
		off: function off(type        , handler              ) {
			if (all[type]) {
				all[type].splice(all[type].indexOf(handler) >>> 0, 1);
			}
		},

		/**
		 * Invoke all handlers for the given type.
		 * If present, `"*"` handlers are invoked after type-matched handlers.
		 *
		 * @param {String} type  The event type to invoke
		 * @param {Any} [evt]  Any value (object is recommended and powerful), passed to each handler
		 * @memberOf mitt
		 */
		emit: function emit(type        , evt     ) {
			(all[type] || []).slice().map(function (handler) { handler(evt); });
			(all['*'] || []).slice().map(function (handler) { handler(type, evt); });
		}
	};
}

/* harmony default export */ var mitt_es = (mitt);
//# sourceMappingURL=mitt.es.js.map

// CONCATENATED MODULE: ./.cache/emitter.js

var emitter = mitt_es();
/* harmony default export */ var _cache_emitter = __webpack_exports__["a"] = (emitter);

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(6);
var core = __webpack_require__(20);
var hide = __webpack_require__(13);
var redefine = __webpack_require__(19);
var ctx = __webpack_require__(21);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(25);
var createDesc = __webpack_require__(57);
module.exports = __webpack_require__(18) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(31);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 15 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "React"
var external_React_ = __webpack_require__(0);
var external_React_default = /*#__PURE__*/__webpack_require__.n(external_React_);

// EXTERNAL MODULE: ./node_modules/@reach/router/node_modules/warning/browser.js
var browser = __webpack_require__(117);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/invariant/browser.js
var invariant_browser = __webpack_require__(9);
var invariant_browser_default = /*#__PURE__*/__webpack_require__.n(invariant_browser);

// EXTERNAL MODULE: ./.cache/create-react-context.js
var create_react_context = __webpack_require__(55);

// EXTERNAL MODULE: ./.cache/react-lifecycles-compat.js
var react_lifecycles_compat = __webpack_require__(54);

// CONCATENATED MODULE: ./node_modules/@reach/router/es/lib/utils.js


////////////////////////////////////////////////////////////////////////////////
// startsWith(string, search) - Check if `string` starts with `search`
var startsWith = function startsWith(string, search) {
  return string.substr(0, search.length) === search;
};

////////////////////////////////////////////////////////////////////////////////
// pick(routes, uri)
//
// Ranks and picks the best route to match. Each segment gets the highest
// amount of points, then the type of segment gets an additional amount of
// points where
//
//     static > dynamic > splat > root
//
// This way we don't have to worry about the order of our routes, let the
// computers do it.
//
// A route looks like this
//
//     { path, default, value }
//
// And a returned match looks like:
//
//     { route, params, uri }
//
// I know, I should use TypeScript not comments for these types.
var utils_pick = function pick(routes, uri) {
  var match = void 0;
  var default_ = void 0;

  var _uri$split = uri.split("?"),
      uriPathname = _uri$split[0];

  var uriSegments = segmentize(uriPathname);
  var isRootUri = uriSegments[0] === "";
  var ranked = rankRoutes(routes);

  for (var i = 0, l = ranked.length; i < l; i++) {
    var missed = false;
    var route = ranked[i].route;

    if (route.default) {
      default_ = {
        route: route,
        params: {},
        uri: uri
      };
      continue;
    }

    var routeSegments = segmentize(route.path);
    var params = {};
    var max = Math.max(uriSegments.length, routeSegments.length);
    var index = 0;

    for (; index < max; index++) {
      var routeSegment = routeSegments[index];
      var uriSegment = uriSegments[index];

      var _isSplat = routeSegment === "*";
      if (_isSplat) {
        // Hit a splat, just grab the rest, and return a match
        // uri:   /files/documents/work
        // route: /files/*
        params["*"] = uriSegments.slice(index).map(decodeURIComponent).join("/");
        break;
      }

      if (uriSegment === undefined) {
        // URI is shorter than the route, no match
        // uri:   /users
        // route: /users/:userId
        missed = true;
        break;
      }

      var dynamicMatch = paramRe.exec(routeSegment);

      if (dynamicMatch && !isRootUri) {
        var matchIsNotReserved = reservedNames.indexOf(dynamicMatch[1]) === -1;
        !matchIsNotReserved ?  false ? undefined : invariant_browser_default()(false) : void 0;
        var value = decodeURIComponent(uriSegment);
        params[dynamicMatch[1]] = value;
      } else if (routeSegment !== uriSegment) {
        // Current segments don't match, not dynamic, not splat, so no match
        // uri:   /users/123/settings
        // route: /users/:id/profile
        missed = true;
        break;
      }
    }

    if (!missed) {
      match = {
        route: route,
        params: params,
        uri: "/" + uriSegments.slice(0, index).join("/")
      };
      break;
    }
  }

  return match || default_ || null;
};

////////////////////////////////////////////////////////////////////////////////
// match(path, uri) - Matches just one path to a uri, also lol
var utils_match = function match(path, uri) {
  return utils_pick([{ path: path }], uri);
};

////////////////////////////////////////////////////////////////////////////////
// resolve(to, basepath)
//
// Resolves URIs as though every path is a directory, no files.  Relative URIs
// in the browser can feel awkward because not only can you be "in a directory"
// you can be "at a file", too. For example
//
//     browserSpecResolve('foo', '/bar/') => /bar/foo
//     browserSpecResolve('foo', '/bar') => /foo
//
// But on the command line of a file system, it's not as complicated, you can't
// `cd` from a file, only directories.  This way, links have to know less about
// their current path. To go deeper you can do this:
//
//     <Link to="deeper"/>
//     // instead of
//     <Link to=`{${props.uri}/deeper}`/>
//
// Just like `cd`, if you want to go deeper from the command line, you do this:
//
//     cd deeper
//     # not
//     cd $(pwd)/deeper
//
// By treating every path as a directory, linking to relative paths should
// require less contextual information and (fingers crossed) be more intuitive.
var resolve = function resolve(to, base) {
  // /foo/bar, /baz/qux => /foo/bar
  if (startsWith(to, "/")) {
    return to;
  }

  var _to$split = to.split("?"),
      toPathname = _to$split[0],
      toQuery = _to$split[1];

  var _base$split = base.split("?"),
      basePathname = _base$split[0];

  var toSegments = segmentize(toPathname);
  var baseSegments = segmentize(basePathname);

  // ?a=b, /users?b=c => /users?a=b
  if (toSegments[0] === "") {
    return addQuery(basePathname, toQuery);
  }

  // profile, /users/789 => /users/789/profile
  if (!startsWith(toSegments[0], ".")) {
    var pathname = baseSegments.concat(toSegments).join("/");
    return addQuery((basePathname === "/" ? "" : "/") + pathname, toQuery);
  }

  // ./         /users/123  =>  /users/123
  // ../        /users/123  =>  /users
  // ../..      /users/123  =>  /
  // ../../one  /a/b/c/d    =>  /a/b/one
  // .././one   /a/b/c/d    =>  /a/b/c/one
  var allSegments = baseSegments.concat(toSegments);
  var segments = [];
  for (var i = 0, l = allSegments.length; i < l; i++) {
    var segment = allSegments[i];
    if (segment === "..") segments.pop();else if (segment !== ".") segments.push(segment);
  }

  return addQuery("/" + segments.join("/"), toQuery);
};

////////////////////////////////////////////////////////////////////////////////
// insertParams(path, params)
var insertParams = function insertParams(path, params) {
  var segments = segmentize(path);
  return "/" + segments.map(function (segment) {
    var match = paramRe.exec(segment);
    return match ? params[match[1]] : segment;
  }).join("/");
};

var validateRedirect = function validateRedirect(from, to) {
  var filter = function filter(segment) {
    return isDynamic(segment);
  };
  var fromString = segmentize(from).filter(filter).sort().join("/");
  var toString = segmentize(to).filter(filter).sort().join("/");
  return fromString === toString;
};

////////////////////////////////////////////////////////////////////////////////
// Junk
var paramRe = /^:(.+)/;

var SEGMENT_POINTS = 4;
var STATIC_POINTS = 3;
var DYNAMIC_POINTS = 2;
var SPLAT_PENALTY = 1;
var ROOT_POINTS = 1;

var isRootSegment = function isRootSegment(segment) {
  return segment === "";
};
var isDynamic = function isDynamic(segment) {
  return paramRe.test(segment);
};
var isSplat = function isSplat(segment) {
  return segment === "*";
};

var rankRoute = function rankRoute(route, index) {
  var score = route.default ? 0 : segmentize(route.path).reduce(function (score, segment) {
    score += SEGMENT_POINTS;
    if (isRootSegment(segment)) score += ROOT_POINTS;else if (isDynamic(segment)) score += DYNAMIC_POINTS;else if (isSplat(segment)) score -= SEGMENT_POINTS + SPLAT_PENALTY;else score += STATIC_POINTS;
    return score;
  }, 0);
  return { route: route, score: score, index: index };
};

var rankRoutes = function rankRoutes(routes) {
  return routes.map(rankRoute).sort(function (a, b) {
    return a.score < b.score ? 1 : a.score > b.score ? -1 : a.index - b.index;
  });
};

var segmentize = function segmentize(uri) {
  return uri
  // strip starting/ending slashes
  .replace(/(^\/+|\/+$)/g, "").split("/");
};

var addQuery = function addQuery(pathname, query) {
  return pathname + (query ? "?" + query : "");
};

var reservedNames = ["uri", "path"];

////////////////////////////////////////////////////////////////////////////////

// CONCATENATED MODULE: ./node_modules/@reach/router/es/lib/history.js
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var getLocation = function getLocation(source) {
  return _extends({}, source.location, {
    state: source.history.state,
    key: source.history.state && source.history.state.key || "initial"
  });
};

var createHistory = function createHistory(source, options) {
  var listeners = [];
  var location = getLocation(source);
  var transitioning = false;
  var resolveTransition = function resolveTransition() {};

  return {
    get location() {
      return location;
    },

    get transitioning() {
      return transitioning;
    },

    _onTransitionComplete: function _onTransitionComplete() {
      transitioning = false;
      resolveTransition();
    },
    listen: function listen(listener) {
      listeners.push(listener);

      var popstateListener = function popstateListener() {
        location = getLocation(source);
        listener({ location: location, action: "POP" });
      };

      source.addEventListener("popstate", popstateListener);

      return function () {
        source.removeEventListener("popstate", popstateListener);
        listeners = listeners.filter(function (fn) {
          return fn !== listener;
        });
      };
    },
    navigate: function navigate(to) {
      var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          state = _ref.state,
          _ref$replace = _ref.replace,
          replace = _ref$replace === undefined ? false : _ref$replace;

      state = _extends({}, state, { key: Date.now() + "" });
      // try...catch iOS Safari limits to 100 pushState calls
      try {
        if (transitioning || replace) {
          source.history.replaceState(state, null, to);
        } else {
          source.history.pushState(state, null, to);
        }
      } catch (e) {
        source.location[replace ? "replace" : "assign"](to);
      }

      location = getLocation(source);
      transitioning = true;
      var transition = new Promise(function (res) {
        return resolveTransition = res;
      });
      listeners.forEach(function (listener) {
        return listener({ location: location, action: "PUSH" });
      });
      return transition;
    }
  };
};

////////////////////////////////////////////////////////////////////////////////
// Stores history entries in memory for testing or other platforms like Native
var createMemorySource = function createMemorySource() {
  var initialPathname = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "/";

  var index = 0;
  var stack = [{ pathname: initialPathname, search: "" }];
  var states = [];

  return {
    get location() {
      return stack[index];
    },
    addEventListener: function addEventListener(name, fn) {},
    removeEventListener: function removeEventListener(name, fn) {},

    history: {
      get entries() {
        return stack;
      },
      get index() {
        return index;
      },
      get state() {
        return states[index];
      },
      pushState: function pushState(state, _, uri) {
        var _uri$split = uri.split("?"),
            pathname = _uri$split[0],
            _uri$split$ = _uri$split[1],
            search = _uri$split$ === undefined ? "" : _uri$split$;

        index++;
        stack.push({ pathname: pathname, search: search });
        states.push(state);
      },
      replaceState: function replaceState(state, _, uri) {
        var _uri$split2 = uri.split("?"),
            pathname = _uri$split2[0],
            _uri$split2$ = _uri$split2[1],
            search = _uri$split2$ === undefined ? "" : _uri$split2$;

        stack[index] = { pathname: pathname, search: search };
        states[index] = state;
      }
    }
  };
};

////////////////////////////////////////////////////////////////////////////////
// global history - uses window.history as the source if available, otherwise a
// memory history
var canUseDOM = !!(typeof window !== "undefined" && window.document && window.document.createElement);
var getSource = function getSource() {
  return canUseDOM ? window : createMemorySource();
};

var globalHistory = createHistory(getSource());
var history_navigate = globalHistory.navigate;

////////////////////////////////////////////////////////////////////////////////


// CONCATENATED MODULE: ./node_modules/@reach/router/es/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return Link; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Location", function() { return es_Location; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationProvider", function() { return es_LocationProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Match", function() { return es_Match; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Redirect", function() { return es_Redirect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Router", function() { return es_Router; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerLocation", function() { return es_ServerLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRedirect", function() { return isRedirect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "redirectTo", function() { return redirectTo; });
/* concated harmony reexport createHistory */__webpack_require__.d(__webpack_exports__, "createHistory", function() { return createHistory; });
/* concated harmony reexport createMemorySource */__webpack_require__.d(__webpack_exports__, "createMemorySource", function() { return createMemorySource; });
/* concated harmony reexport navigate */__webpack_require__.d(__webpack_exports__, "navigate", function() { return history_navigate; });
/* concated harmony reexport globalHistory */__webpack_require__.d(__webpack_exports__, "globalHistory", function() { return globalHistory; });
var es_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint-disable jsx-a11y/anchor-has-content */









////////////////////////////////////////////////////////////////////////////////

var es_createNamedContext = function createNamedContext(name, defaultValue) {
  var Ctx = Object(create_react_context["default"])(defaultValue);
  Ctx.Consumer.displayName = name + ".Consumer";
  Ctx.Provider.displayName = name + ".Provider";
  return Ctx;
};

////////////////////////////////////////////////////////////////////////////////
// Location Context/Provider
var LocationContext = es_createNamedContext("Location");

// sets up a listener if there isn't one already so apps don't need to be
// wrapped in some top level provider
var es_Location = function Location(_ref) {
  var children = _ref.children;
  return external_React_default.a.createElement(
    LocationContext.Consumer,
    null,
    function (context) {
      return context ? children(context) : external_React_default.a.createElement(
        es_LocationProvider,
        null,
        children
      );
    }
  );
};

var es_LocationProvider = function (_React$Component) {
  _inherits(LocationProvider, _React$Component);

  function LocationProvider() {
    var _temp, _this, _ret;

    _classCallCheck(this, LocationProvider);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      context: _this.getContext(),
      refs: { unlisten: null }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  LocationProvider.prototype.getContext = function getContext() {
    var _props$history = this.props.history,
        navigate = _props$history.navigate,
        location = _props$history.location;

    return { navigate: navigate, location: location };
  };

  LocationProvider.prototype.componentDidCatch = function componentDidCatch(error, info) {
    if (isRedirect(error)) {
      var _navigate = this.props.history.navigate;

      _navigate(error.uri, { replace: true });
    } else {
      throw error;
    }
  };

  LocationProvider.prototype.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    if (prevState.context.location !== this.state.context.location) {
      this.props.history._onTransitionComplete();
    }
  };

  LocationProvider.prototype.componentDidMount = function componentDidMount() {
    var _this2 = this;

    var refs = this.state.refs,
        history = this.props.history;

    refs.unlisten = history.listen(function () {
      Promise.resolve().then(function () {
        // TODO: replace rAF with react deferred update API when it's ready https://github.com/facebook/react/issues/13306
        requestAnimationFrame(function () {
          if (!_this2.unmounted) {
            _this2.setState(function () {
              return { context: _this2.getContext() };
            });
          }
        });
      });
    });
  };

  LocationProvider.prototype.componentWillUnmount = function componentWillUnmount() {
    var refs = this.state.refs;

    this.unmounted = true;
    refs.unlisten();
  };

  LocationProvider.prototype.render = function render() {
    var context = this.state.context,
        children = this.props.children;

    return external_React_default.a.createElement(
      LocationContext.Provider,
      { value: context },
      typeof children === "function" ? children(context) : children || null
    );
  };

  return LocationProvider;
}(external_React_default.a.Component);

////////////////////////////////////////////////////////////////////////////////


es_LocationProvider.defaultProps = {
  history: globalHistory
};
 false ? undefined : void 0;
var es_ServerLocation = function ServerLocation(_ref2) {
  var url = _ref2.url,
      children = _ref2.children;
  return external_React_default.a.createElement(
    LocationContext.Provider,
    {
      value: {
        location: {
          pathname: url,
          search: "",
          hash: ""
        },
        navigate: function navigate() {
          throw new Error("You can't call navigate on the server.");
        }
      }
    },
    children
  );
};

////////////////////////////////////////////////////////////////////////////////
// Sets baseuri and basepath for nested routers and links
var BaseContext = es_createNamedContext("Base", { baseuri: "/", basepath: "/" });

////////////////////////////////////////////////////////////////////////////////
// The main event, welcome to the show everybody.
var es_Router = function Router(props) {
  return external_React_default.a.createElement(
    BaseContext.Consumer,
    null,
    function (baseContext) {
      return external_React_default.a.createElement(
        es_Location,
        null,
        function (locationContext) {
          return external_React_default.a.createElement(es_RouterImpl, es_extends({}, baseContext, locationContext, props));
        }
      );
    }
  );
};

var es_RouterImpl = function (_React$PureComponent) {
  _inherits(RouterImpl, _React$PureComponent);

  function RouterImpl() {
    _classCallCheck(this, RouterImpl);

    return _possibleConstructorReturn(this, _React$PureComponent.apply(this, arguments));
  }

  RouterImpl.prototype.render = function render() {
    var _props = this.props,
        location = _props.location,
        _navigate2 = _props.navigate,
        basepath = _props.basepath,
        primary = _props.primary,
        children = _props.children,
        baseuri = _props.baseuri,
        _props$component = _props.component,
        component = _props$component === undefined ? "div" : _props$component,
        domProps = _objectWithoutProperties(_props, ["location", "navigate", "basepath", "primary", "children", "baseuri", "component"]);

    var routes = external_React_default.a.Children.map(children, es_createRoute(basepath));
    var pathname = location.pathname;


    var match = utils_pick(routes, pathname);

    if (match) {
      var params = match.params,
          uri = match.uri,
          route = match.route,
          element = match.route.value;

      // remove the /* from the end for child routes relative paths

      basepath = route.default ? basepath : route.path.replace(/\*$/, "");

      var props = es_extends({}, params, {
        uri: uri,
        location: location,
        navigate: function navigate(to, options) {
          return _navigate2(resolve(to, uri), options);
        }
      });

      var clone = external_React_default.a.cloneElement(element, props, element.props.children ? external_React_default.a.createElement(
        es_Router,
        { primary: primary },
        element.props.children
      ) : undefined);

      // using 'div' for < 16.3 support
      var FocusWrapper = primary ? es_FocusHandler : component;
      // don't pass any props to 'div'
      var wrapperProps = primary ? es_extends({ uri: uri, location: location, component: component }, domProps) : domProps;

      return external_React_default.a.createElement(
        BaseContext.Provider,
        { value: { baseuri: uri, basepath: basepath } },
        external_React_default.a.createElement(
          FocusWrapper,
          wrapperProps,
          clone
        )
      );
    } else {
      // Not sure if we want this, would require index routes at every level
      // warning(
      //   false,
      //   `<Router basepath="${basepath}">\n\nNothing matched:\n\t${
      //     location.pathname
      //   }\n\nPaths checked: \n\t${routes
      //     .map(route => route.path)
      //     .join(
      //       "\n\t"
      //     )}\n\nTo get rid of this warning, add a default NotFound component as child of Router:
      //   \n\tlet NotFound = () => <div>Not Found!</div>
      //   \n\t<Router>\n\t  <NotFound default/>\n\t  {/* ... */}\n\t</Router>`
      // );
      return null;
    }
  };

  return RouterImpl;
}(external_React_default.a.PureComponent);

es_RouterImpl.defaultProps = {
  primary: true
};


var FocusContext = es_createNamedContext("Focus");

var es_FocusHandler = function FocusHandler(_ref3) {
  var uri = _ref3.uri,
      location = _ref3.location,
      component = _ref3.component,
      domProps = _objectWithoutProperties(_ref3, ["uri", "location", "component"]);

  return external_React_default.a.createElement(
    FocusContext.Consumer,
    null,
    function (requestFocus) {
      return external_React_default.a.createElement(es_FocusHandlerImpl, es_extends({}, domProps, {
        component: component,
        requestFocus: requestFocus,
        uri: uri,
        location: location
      }));
    }
  );
};

// don't focus on initial render
var initialRender = true;
var focusHandlerCount = 0;

var es_FocusHandlerImpl = function (_React$Component2) {
  _inherits(FocusHandlerImpl, _React$Component2);

  function FocusHandlerImpl() {
    var _temp2, _this4, _ret2;

    _classCallCheck(this, FocusHandlerImpl);

    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return _ret2 = (_temp2 = (_this4 = _possibleConstructorReturn(this, _React$Component2.call.apply(_React$Component2, [this].concat(args))), _this4), _this4.state = {}, _this4.requestFocus = function (node) {
      if (!_this4.state.shouldFocus) {
        node.focus();
      }
    }, _temp2), _possibleConstructorReturn(_this4, _ret2);
  }

  FocusHandlerImpl.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
    var initial = prevState.uri == null;
    if (initial) {
      return es_extends({
        shouldFocus: true
      }, nextProps);
    } else {
      var myURIChanged = nextProps.uri !== prevState.uri;
      var navigatedUpToMe = prevState.location.pathname !== nextProps.location.pathname && nextProps.location.pathname === nextProps.uri;
      return es_extends({
        shouldFocus: myURIChanged || navigatedUpToMe
      }, nextProps);
    }
  };

  FocusHandlerImpl.prototype.componentDidMount = function componentDidMount() {
    focusHandlerCount++;
    this.focus();
  };

  FocusHandlerImpl.prototype.componentWillUnmount = function componentWillUnmount() {
    focusHandlerCount--;
    if (focusHandlerCount === 0) {
      initialRender = true;
    }
  };

  FocusHandlerImpl.prototype.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    if (prevProps.location !== this.props.location && this.state.shouldFocus) {
      this.focus();
    }
  };

  FocusHandlerImpl.prototype.focus = function focus() {
    if (false) {}

    var requestFocus = this.props.requestFocus;


    if (requestFocus) {
      requestFocus(this.node);
    } else {
      if (initialRender) {
        initialRender = false;
      } else {
        // React polyfills [autofocus] and it fires earlier than cDM,
        // so we were stealing focus away, this line prevents that.
        if (!this.node.contains(document.activeElement)) {
          this.node.focus();
        }
      }
    }
  };

  FocusHandlerImpl.prototype.render = function render() {
    var _this5 = this;

    var _props2 = this.props,
        children = _props2.children,
        style = _props2.style,
        requestFocus = _props2.requestFocus,
        _props2$role = _props2.role,
        role = _props2$role === undefined ? "group" : _props2$role,
        _props2$component = _props2.component,
        Comp = _props2$component === undefined ? "div" : _props2$component,
        uri = _props2.uri,
        location = _props2.location,
        domProps = _objectWithoutProperties(_props2, ["children", "style", "requestFocus", "role", "component", "uri", "location"]);

    return external_React_default.a.createElement(
      Comp,
      es_extends({
        style: es_extends({ outline: "none" }, style),
        tabIndex: "-1",
        role: role,
        ref: function ref(n) {
          return _this5.node = n;
        }
      }, domProps),
      external_React_default.a.createElement(
        FocusContext.Provider,
        { value: this.requestFocus },
        this.props.children
      )
    );
  };

  return FocusHandlerImpl;
}(external_React_default.a.Component);

Object(react_lifecycles_compat["polyfill"])(es_FocusHandlerImpl);

var k = function k() {};

////////////////////////////////////////////////////////////////////////////////
var forwardRef = external_React_default.a.forwardRef;

if (typeof forwardRef === "undefined") {
  forwardRef = function forwardRef(C) {
    return C;
  };
}

var Link = forwardRef(function (_ref4, ref) {
  var innerRef = _ref4.innerRef,
      props = _objectWithoutProperties(_ref4, ["innerRef"]);

  return external_React_default.a.createElement(
    BaseContext.Consumer,
    null,
    function (_ref5) {
      var basepath = _ref5.basepath,
          baseuri = _ref5.baseuri;
      return external_React_default.a.createElement(
        es_Location,
        null,
        function (_ref6) {
          var location = _ref6.location,
              navigate = _ref6.navigate;

          var to = props.to,
              state = props.state,
              replace = props.replace,
              _props$getProps = props.getProps,
              getProps = _props$getProps === undefined ? k : _props$getProps,
              anchorProps = _objectWithoutProperties(props, ["to", "state", "replace", "getProps"]);

          var href = resolve(to, baseuri);
          var isCurrent = location.pathname === href;
          var isPartiallyCurrent = startsWith(location.pathname, href);

          return external_React_default.a.createElement("a", es_extends({
            ref: ref || innerRef,
            "aria-current": isCurrent ? "page" : undefined
          }, anchorProps, getProps({ isCurrent: isCurrent, isPartiallyCurrent: isPartiallyCurrent, href: href, location: location }), {
            href: href,
            onClick: function onClick(event) {
              if (anchorProps.onClick) anchorProps.onClick(event);
              if (shouldNavigate(event)) {
                event.preventDefault();
                navigate(href, { state: state, replace: replace });
              }
            }
          }));
        }
      );
    }
  );
});

////////////////////////////////////////////////////////////////////////////////
function RedirectRequest(uri) {
  this.uri = uri;
}

var isRedirect = function isRedirect(o) {
  return o instanceof RedirectRequest;
};

var redirectTo = function redirectTo(to) {
  throw new RedirectRequest(to);
};

var es_RedirectImpl = function (_React$Component3) {
  _inherits(RedirectImpl, _React$Component3);

  function RedirectImpl() {
    _classCallCheck(this, RedirectImpl);

    return _possibleConstructorReturn(this, _React$Component3.apply(this, arguments));
  }

  // Support React < 16 with this hook
  RedirectImpl.prototype.componentDidMount = function componentDidMount() {
    var _props3 = this.props,
        navigate = _props3.navigate,
        to = _props3.to,
        from = _props3.from,
        _props3$replace = _props3.replace,
        replace = _props3$replace === undefined ? true : _props3$replace,
        state = _props3.state,
        noThrow = _props3.noThrow,
        props = _objectWithoutProperties(_props3, ["navigate", "to", "from", "replace", "state", "noThrow"]);

    Promise.resolve().then(function () {
      navigate(insertParams(to, props), { replace: replace, state: state });
    });
  };

  RedirectImpl.prototype.render = function render() {
    var _props4 = this.props,
        navigate = _props4.navigate,
        to = _props4.to,
        from = _props4.from,
        replace = _props4.replace,
        state = _props4.state,
        noThrow = _props4.noThrow,
        props = _objectWithoutProperties(_props4, ["navigate", "to", "from", "replace", "state", "noThrow"]);

    if (!noThrow) redirectTo(insertParams(to, props));
    return null;
  };

  return RedirectImpl;
}(external_React_default.a.Component);

var es_Redirect = function Redirect(props) {
  return external_React_default.a.createElement(
    es_Location,
    null,
    function (locationContext) {
      return external_React_default.a.createElement(es_RedirectImpl, es_extends({}, locationContext, props));
    }
  );
};

 false ? undefined : void 0;

////////////////////////////////////////////////////////////////////////////////
var es_Match = function Match(_ref7) {
  var path = _ref7.path,
      children = _ref7.children;
  return external_React_default.a.createElement(
    BaseContext.Consumer,
    null,
    function (_ref8) {
      var baseuri = _ref8.baseuri;
      return external_React_default.a.createElement(
        es_Location,
        null,
        function (_ref9) {
          var navigate = _ref9.navigate,
              location = _ref9.location;

          var resolvedPath = resolve(path, baseuri);
          var result = utils_match(resolvedPath, location.pathname);
          return children({
            navigate: navigate,
            location: location,
            match: result ? es_extends({}, result.params, {
              uri: result.uri,
              path: path
            }) : null
          });
        }
      );
    }
  );
};

////////////////////////////////////////////////////////////////////////////////
// Junk
var stripSlashes = function stripSlashes(str) {
  return str.replace(/(^\/+|\/+$)/g, "");
};

var es_createRoute = function createRoute(basepath) {
  return function (element) {
    if (!element) {
      return null;
    }

    !(element.props.path || element.props.default || element.type === es_Redirect) ?  false ? undefined : invariant_browser_default()(false) : void 0;

    !!(element.type === es_Redirect && (!element.props.from || !element.props.to)) ?  false ? undefined : invariant_browser_default()(false) : void 0;

    !!(element.type === es_Redirect && !validateRedirect(element.props.from, element.props.to)) ?  false ? undefined : invariant_browser_default()(false) : void 0;

    if (element.props.default) {
      return { value: element, default: true };
    }

    var elementPath = element.type === es_Redirect ? element.props.from : element.props.path;

    var path = elementPath === "/" ? basepath : stripSlashes(basepath) + "/" + stripSlashes(elementPath);

    return {
      value: element,
      default: element.props.default,
      path: element.props.children ? stripSlashes(path) + "/*" : path
    };
  };
};

var shouldNavigate = function shouldNavigate(event) {
  return !event.defaultPrevented && event.button === 0 && !(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
};

////////////////////////////////////////////////////////////////////////


/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(17)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(6);
var hide = __webpack_require__(13);
var has = __webpack_require__(27);
var SRC = __webpack_require__(43)('src');
var $toString = __webpack_require__(90);
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(20).inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),
/* 20 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.5' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(28);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 22 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.validateRedirect = exports.insertParams = exports.resolve = exports.match = exports.pick = exports.startsWith = undefined;

var _invariant = __webpack_require__(9);

var _invariant2 = _interopRequireDefault(_invariant);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

////////////////////////////////////////////////////////////////////////////////
// startsWith(string, search) - Check if `string` starts with `search`
var startsWith = function startsWith(string, search) {
  return string.substr(0, search.length) === search;
};

////////////////////////////////////////////////////////////////////////////////
// pick(routes, uri)
//
// Ranks and picks the best route to match. Each segment gets the highest
// amount of points, then the type of segment gets an additional amount of
// points where
//
//     static > dynamic > splat > root
//
// This way we don't have to worry about the order of our routes, let the
// computers do it.
//
// A route looks like this
//
//     { path, default, value }
//
// And a returned match looks like:
//
//     { route, params, uri }
//
// I know, I should use TypeScript not comments for these types.
var pick = function pick(routes, uri) {
  var match = void 0;
  var default_ = void 0;

  var _uri$split = uri.split("?"),
      uriPathname = _uri$split[0];

  var uriSegments = segmentize(uriPathname);
  var isRootUri = uriSegments[0] === "";
  var ranked = rankRoutes(routes);

  for (var i = 0, l = ranked.length; i < l; i++) {
    var missed = false;
    var route = ranked[i].route;

    if (route.default) {
      default_ = {
        route: route,
        params: {},
        uri: uri
      };
      continue;
    }

    var routeSegments = segmentize(route.path);
    var params = {};
    var max = Math.max(uriSegments.length, routeSegments.length);
    var index = 0;

    for (; index < max; index++) {
      var routeSegment = routeSegments[index];
      var uriSegment = uriSegments[index];

      var _isSplat = routeSegment === "*";
      if (_isSplat) {
        // Hit a splat, just grab the rest, and return a match
        // uri:   /files/documents/work
        // route: /files/*
        params["*"] = uriSegments.slice(index).map(decodeURIComponent).join("/");
        break;
      }

      if (uriSegment === undefined) {
        // URI is shorter than the route, no match
        // uri:   /users
        // route: /users/:userId
        missed = true;
        break;
      }

      var dynamicMatch = paramRe.exec(routeSegment);

      if (dynamicMatch && !isRootUri) {
        var matchIsNotReserved = reservedNames.indexOf(dynamicMatch[1]) === -1;
        !matchIsNotReserved ?  false ? undefined : (0, _invariant2.default)(false) : void 0;
        var value = decodeURIComponent(uriSegment);
        params[dynamicMatch[1]] = value;
      } else if (routeSegment !== uriSegment) {
        // Current segments don't match, not dynamic, not splat, so no match
        // uri:   /users/123/settings
        // route: /users/:id/profile
        missed = true;
        break;
      }
    }

    if (!missed) {
      match = {
        route: route,
        params: params,
        uri: "/" + uriSegments.slice(0, index).join("/")
      };
      break;
    }
  }

  return match || default_ || null;
};

////////////////////////////////////////////////////////////////////////////////
// match(path, uri) - Matches just one path to a uri, also lol
var match = function match(path, uri) {
  return pick([{ path: path }], uri);
};

////////////////////////////////////////////////////////////////////////////////
// resolve(to, basepath)
//
// Resolves URIs as though every path is a directory, no files.  Relative URIs
// in the browser can feel awkward because not only can you be "in a directory"
// you can be "at a file", too. For example
//
//     browserSpecResolve('foo', '/bar/') => /bar/foo
//     browserSpecResolve('foo', '/bar') => /foo
//
// But on the command line of a file system, it's not as complicated, you can't
// `cd` from a file, only directories.  This way, links have to know less about
// their current path. To go deeper you can do this:
//
//     <Link to="deeper"/>
//     // instead of
//     <Link to=`{${props.uri}/deeper}`/>
//
// Just like `cd`, if you want to go deeper from the command line, you do this:
//
//     cd deeper
//     # not
//     cd $(pwd)/deeper
//
// By treating every path as a directory, linking to relative paths should
// require less contextual information and (fingers crossed) be more intuitive.
var resolve = function resolve(to, base) {
  // /foo/bar, /baz/qux => /foo/bar
  if (startsWith(to, "/")) {
    return to;
  }

  var _to$split = to.split("?"),
      toPathname = _to$split[0],
      toQuery = _to$split[1];

  var _base$split = base.split("?"),
      basePathname = _base$split[0];

  var toSegments = segmentize(toPathname);
  var baseSegments = segmentize(basePathname);

  // ?a=b, /users?b=c => /users?a=b
  if (toSegments[0] === "") {
    return addQuery(basePathname, toQuery);
  }

  // profile, /users/789 => /users/789/profile
  if (!startsWith(toSegments[0], ".")) {
    var pathname = baseSegments.concat(toSegments).join("/");
    return addQuery((basePathname === "/" ? "" : "/") + pathname, toQuery);
  }

  // ./         /users/123  =>  /users/123
  // ../        /users/123  =>  /users
  // ../..      /users/123  =>  /
  // ../../one  /a/b/c/d    =>  /a/b/one
  // .././one   /a/b/c/d    =>  /a/b/c/one
  var allSegments = baseSegments.concat(toSegments);
  var segments = [];
  for (var i = 0, l = allSegments.length; i < l; i++) {
    var segment = allSegments[i];
    if (segment === "..") segments.pop();else if (segment !== ".") segments.push(segment);
  }

  return addQuery("/" + segments.join("/"), toQuery);
};

////////////////////////////////////////////////////////////////////////////////
// insertParams(path, params)
var insertParams = function insertParams(path, params) {
  var segments = segmentize(path);
  return "/" + segments.map(function (segment) {
    var match = paramRe.exec(segment);
    return match ? params[match[1]] : segment;
  }).join("/");
};

var validateRedirect = function validateRedirect(from, to) {
  var filter = function filter(segment) {
    return isDynamic(segment);
  };
  var fromString = segmentize(from).filter(filter).sort().join("/");
  var toString = segmentize(to).filter(filter).sort().join("/");
  return fromString === toString;
};

////////////////////////////////////////////////////////////////////////////////
// Junk
var paramRe = /^:(.+)/;

var SEGMENT_POINTS = 4;
var STATIC_POINTS = 3;
var DYNAMIC_POINTS = 2;
var SPLAT_PENALTY = 1;
var ROOT_POINTS = 1;

var isRootSegment = function isRootSegment(segment) {
  return segment === "";
};
var isDynamic = function isDynamic(segment) {
  return paramRe.test(segment);
};
var isSplat = function isSplat(segment) {
  return segment === "*";
};

var rankRoute = function rankRoute(route, index) {
  var score = route.default ? 0 : segmentize(route.path).reduce(function (score, segment) {
    score += SEGMENT_POINTS;
    if (isRootSegment(segment)) score += ROOT_POINTS;else if (isDynamic(segment)) score += DYNAMIC_POINTS;else if (isSplat(segment)) score -= SEGMENT_POINTS + SPLAT_PENALTY;else score += STATIC_POINTS;
    return score;
  }, 0);
  return { route: route, score: score, index: index };
};

var rankRoutes = function rankRoutes(routes) {
  return routes.map(rankRoute).sort(function (a, b) {
    return a.score < b.score ? 1 : a.score > b.score ? -1 : a.index - b.index;
  });
};

var segmentize = function segmentize(uri) {
  return uri
  // strip starting/ending slashes
  .replace(/(^\/+|\/+$)/g, "").split("/");
};

var addQuery = function addQuery(pathname, query) {
  return pathname + (query ? "?" + query : "");
};

var reservedNames = ["uri", "path"];

////////////////////////////////////////////////////////////////////////////////
exports.startsWith = startsWith;
exports.pick = pick;
exports.match = match;
exports.resolve = resolve;
exports.insertParams = insertParams;
exports.validateRedirect = validateRedirect;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(5);
var IE8_DOM_DEFINE = __webpack_require__(80);
var toPrimitive = __webpack_require__(81);
var dP = Object.defineProperty;

exports.f = __webpack_require__(18) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(22);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 27 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var classof = __webpack_require__(40);
var builtinExec = RegExp.prototype.exec;

 // `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw new TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }
  if (classof(R) !== 'RegExp') {
    throw new TypeError('RegExp#exec called on incompatible receiver');
  }
  return builtinExec.call(R, S);
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__(89);
var redefine = __webpack_require__(19);
var hide = __webpack_require__(13);
var fails = __webpack_require__(17);
var defined = __webpack_require__(22);
var wks = __webpack_require__(3);
var regexpExec = __webpack_require__(44);

var SPECIES = wks('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = (function () {
  // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length === 2 && result[0] === 'a' && result[1] === 'b';
})();

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;
    re.exec = function () { execCalled = true; return null; };
    if (KEY === 'split') {
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
    }
    re[SYMBOL]('');
    return !execCalled;
  }) : undefined;

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var fns = exec(
      defined,
      SYMBOL,
      ''[KEY],
      function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {
        if (regexp.exec === regexpExec) {
          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
            // The native String method already delegates to @@method (this
            // polyfilled function), leasing to infinite recursion.
            // We avoid it by directly calling the native @@method method.
            return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
          }
          return { done: true, value: nativeMethod.call(str, regexp, arg2) };
        }
        return { done: false };
      }
    );
    var strfn = fns[0];
    var rxfn = fns[1];

    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return rxfn.call(string, this); }
    );
  }
};


/***/ }),
/* 31 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(11);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(91) });


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__(5);
var toObject = __webpack_require__(26);
var toLength = __webpack_require__(14);
var toInteger = __webpack_require__(31);
var advanceStringIndex = __webpack_require__(46);
var regExpExec = __webpack_require__(29);
var max = Math.max;
var min = Math.min;
var floor = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&`']|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&`']|\d\d?)/g;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
__webpack_require__(30)('replace', 2, function (defined, REPLACE, $replace, maybeCallNative) {
  return [
    // `String.prototype.replace` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = defined(this);
      var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
      return fn !== undefined
        ? fn.call(searchValue, O, replaceValue)
        : $replace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      var res = maybeCallNative($replace, regexp, this, replaceValue);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);
      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;
        results.push(result);
        if (!global) break;
        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }
      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];
        var matched = String(result[0]);
        var position = max(min(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];

    // https://tc39.github.io/ecma262/#sec-getsubstitution
  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
      namedCaptures = toObject(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return $replace.call(replacement, symbols, function (match, ch) {
      var capture;
      switch (ch.charAt(0)) {
        case '$': return '$';
        case '&': return matched;
        case '`': return str.slice(0, position);
        case "'": return str.slice(tailPos);
        case '<':
          capture = namedCaptures[ch.slice(1, -1)];
          break;
        default: // \d\d?
          var n = +ch;
          if (n === 0) return match;
          if (n > m) {
            var f = floor(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
            return match;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  }
});


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(8);

exports.__esModule = true;
exports.withPrefix = withPrefix;
exports.navigateTo = exports.replace = exports.push = exports.navigate = exports.default = void 0;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(77));

var _extends2 = _interopRequireDefault(__webpack_require__(132));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(7));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(36));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(51));

var _propTypes = _interopRequireDefault(__webpack_require__(4));

var _react = _interopRequireDefault(__webpack_require__(0));

var _router = __webpack_require__(16);

var _parsePath = __webpack_require__(133);

exports.parsePath = _parsePath.parsePath;

/*global __PATH_PREFIX__ */
function withPrefix(path) {
  return normalizePath("" + "/" + path);
}

function normalizePath(path) {
  return path.replace(/\/+/g, "/");
}

var NavLinkPropTypes = {
  activeClassName: _propTypes.default.string,
  activeStyle: _propTypes.default.object // Set up IntersectionObserver

};

var handleIntersection = function handleIntersection(el, cb) {
  var io = new window.IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (el === entry.target) {
        // Check if element is within viewport, remove listener, destroy observer, and run link callback.
        // MSEdge doesn't currently support isIntersecting, so also test for  an intersectionRatio > 0
        if (entry.isIntersecting || entry.intersectionRatio > 0) {
          io.unobserve(el);
          io.disconnect();
          cb();
        }
      }
    });
  }); // Add element to the observer

  io.observe(el);
};

var GatsbyLink =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(GatsbyLink, _React$Component);

  function GatsbyLink(props) {
    var _this;

    _this = _React$Component.call(this, props) || this; // Default to no support for IntersectionObserver

    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "defaultGetProps", function (_ref) {
      var isCurrent = _ref.isCurrent;

      if (isCurrent) {
        return {
          className: [_this.props.className, _this.props.activeClassName].filter(Boolean).join(" "),
          style: (0, _extends2.default)({}, _this.props.style, _this.props.activeStyle)
        };
      }

      return null;
    });
    var IOSupported = false;

    if (typeof window !== "undefined" && window.IntersectionObserver) {
      IOSupported = true;
    }

    _this.state = {
      IOSupported: IOSupported
    };
    _this.handleRef = _this.handleRef.bind((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
    return _this;
  }

  var _proto = GatsbyLink.prototype;

  _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    // Preserve non IO functionality if no support
    if (this.props.to !== prevProps.to && !this.state.IOSupported) {
      ___loader.enqueue((0, _parsePath.parsePath)(this.props.to).pathname);
    }
  };

  _proto.componentDidMount = function componentDidMount() {
    // Preserve non IO functionality if no support
    if (!this.state.IOSupported) {
      ___loader.enqueue((0, _parsePath.parsePath)(this.props.to).pathname);
    }
  };

  _proto.handleRef = function handleRef(ref) {
    var _this2 = this;

    if (this.props.innerRef) {
      this.props.innerRef(ref);
    }

    if (this.state.IOSupported && ref) {
      // If IO supported and element reference found, setup Observer functionality
      handleIntersection(ref, function () {
        ___loader.enqueue((0, _parsePath.parsePath)(_this2.props.to).pathname);
      });
    }
  };

  _proto.render = function render() {
    var _this3 = this;

    var _this$props = this.props,
        to = _this$props.to,
        _this$props$getProps = _this$props.getProps,
        getProps = _this$props$getProps === void 0 ? this.defaultGetProps : _this$props$getProps,
        _onClick = _this$props.onClick,
        _onMouseEnter = _this$props.onMouseEnter,
        $activeClassName = _this$props.activeClassName,
        $activeStyle = _this$props.activeStyle,
        $innerRef = _this$props.innerRef,
        state = _this$props.state,
        replace = _this$props.replace,
        rest = (0, _objectWithoutPropertiesLoose2.default)(_this$props, ["to", "getProps", "onClick", "onMouseEnter", "activeClassName", "activeStyle", "innerRef", "state", "replace"]);
    var LOCAL_URL = /^\/(?!\/)/;

    if (false) {}

    var prefixedTo = withPrefix(to);
    return _react.default.createElement(_router.Link, (0, _extends2.default)({
      to: prefixedTo,
      state: state,
      getProps: getProps,
      innerRef: this.handleRef,
      onMouseEnter: function onMouseEnter(e) {
        if (_onMouseEnter) {
          _onMouseEnter(e);
        }

        ___loader.hovering((0, _parsePath.parsePath)(to).pathname);
      },
      onClick: function onClick(e) {
        if (_onClick) {
          _onClick(e);
        }

        if (e.button === 0 && // ignore right clicks
        !_this3.props.target && // let browser handle "target=_blank"
        !e.defaultPrevented && // onClick prevented default
        !e.metaKey && // ignore clicks with modifier keys...
        !e.altKey && !e.ctrlKey && !e.shiftKey) {
          e.preventDefault(); // Make sure the necessary scripts and data are
          // loaded before continuing.

          navigate(to, {
            state: state,
            replace: replace
          });
        }

        return true;
      }
    }, rest));
  };

  return GatsbyLink;
}(_react.default.Component);

GatsbyLink.propTypes = (0, _extends2.default)({}, NavLinkPropTypes, {
  innerRef: _propTypes.default.func,
  onClick: _propTypes.default.func,
  to: _propTypes.default.string.isRequired,
  replace: _propTypes.default.bool
});

var _default = _react.default.forwardRef(function (props, ref) {
  return _react.default.createElement(GatsbyLink, (0, _extends2.default)({
    innerRef: ref
  }, props));
});

exports.default = _default;

var navigate = function navigate(to, options) {
  window.___navigate(withPrefix(to), options);
};

exports.navigate = navigate;

var push = function push(to) {
  console.warn("The \"push\" method is now deprecated and will be removed in Gatsby v3. Please use \"navigate\" instead.");

  window.___push(withPrefix(to));
};

exports.push = push;

var replace = function replace(to) {
  console.warn("The \"replace\" method is now deprecated and will be removed in Gatsby v3. Please use \"navigate\" instead.");

  window.___replace(withPrefix(to));
}; // TODO: Remove navigateTo for Gatsby v3


exports.replace = replace;

var navigateTo = function navigateTo(to) {
  console.warn("The \"navigateTo\" method is now deprecated and will be removed in Gatsby v3. Please use \"navigate\" instead.");
  return push(to);
};

exports.navigateTo = navigateTo;

/***/ }),
/* 36 */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(82);
var enumBugKeys = __webpack_require__(58);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(47);
var defined = __webpack_require__(22);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__(3)('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(13)(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(15);
var TAG = __webpack_require__(3)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(20);
var global = __webpack_require__(6);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(42) ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),
/* 43 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var regexpFlags = __webpack_require__(76);

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var LAST_INDEX = 'lastIndex';

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/,
      re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;
})();

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + re.source + '$(?!\\s)', regexpFlags.call(re));
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX];

    match = nativeExec.call(re, str);

    if (UPDATES_LAST_INDEX_WRONG && match) {
      re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      // eslint-disable-next-line no-loop-func
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(12);
var document = __webpack_require__(6).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var at = __webpack_require__(60)(true);

 // `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? at(S, index).length : 1);
};


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(15);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(41)('keys');
var uid = __webpack_require__(43);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(42);
var global = __webpack_require__(6);
var ctx = __webpack_require__(21);
var classof = __webpack_require__(40);
var $export = __webpack_require__(11);
var isObject = __webpack_require__(12);
var aFunction = __webpack_require__(28);
var anInstance = __webpack_require__(94);
var forOf = __webpack_require__(95);
var speciesConstructor = __webpack_require__(62);
var task = __webpack_require__(63).set;
var microtask = __webpack_require__(100)();
var newPromiseCapabilityModule = __webpack_require__(65);
var perform = __webpack_require__(101);
var userAgent = __webpack_require__(102);
var promiseResolve = __webpack_require__(103);
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__(3)('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function')
      && promise.then(empty) instanceof FakePromise
      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0
      && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(104)($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__(50)($Promise, PROMISE);
__webpack_require__(84)(PROMISE);
Wrapper = __webpack_require__(20)[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(105)(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(25).f;
var has = __webpack_require__(27);
var TAG = __webpack_require__(3)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 51 */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _default = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

exports.default = _default;
module.exports = exports["default"];

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

// prefer default export if available
var preferDefault = function preferDefault(m) {
  return m && m.default || m;
};

exports.components = {
  "component---src-templates-components-js": function componentSrcTemplatesComponentsJs() {
    return Promise.all(/* import() | component---src-templates-components-js */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(3), __webpack_require__.e(2), __webpack_require__.e(7)]).then(__webpack_require__.bind(null, 138));
  },
  "component---src-templates-docs-js": function componentSrcTemplatesDocsJs() {
    return Promise.all(/* import() | component---src-templates-docs-js */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(3), __webpack_require__.e(2), __webpack_require__.e(8)]).then(__webpack_require__.bind(null, 139));
  },
  "component---src-pages-index-js": function componentSrcPagesIndexJs() {
    return Promise.all(/* import() | component---src-pages-index-js */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(11), __webpack_require__.e(2), __webpack_require__.e(6)]).then(__webpack_require__.bind(null, 142));
  },
  "component---src-pages-404-js": function componentSrcPages404Js() {
    return Promise.all(/* import() | component---src-pages-404-js */[__webpack_require__.e(0), __webpack_require__.e(5)]).then(__webpack_require__.bind(null, 140));
  }
};

exports.data = function () {
  return __webpack_require__.e(/* import() | pages-manifest */ 9).then(__webpack_require__.t.bind(null, 141, 3));
};

/***/ }),
/* 54 */
/***/ (function(module, exports) {

exports.polyfill = function (Component) {
  return Component;
};

/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext);

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(39);
var step = __webpack_require__(111);
var Iterators = __webpack_require__(23);
var toIObject = __webpack_require__(38);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(66)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 58 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.8 IsRegExp(argument)
var isObject = __webpack_require__(12);
var cof = __webpack_require__(15);
var MATCH = __webpack_require__(3)('match');
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(31);
var defined = __webpack_require__(22);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(38);
var toLength = __webpack_require__(14);
var toAbsoluteIndex = __webpack_require__(92);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(5);
var aFunction = __webpack_require__(28);
var SPECIES = __webpack_require__(3)('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(21);
var invoke = __webpack_require__(99);
var html = __webpack_require__(64);
var cel = __webpack_require__(45);
var global = __webpack_require__(6);
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__(15)(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(6).document;
module.exports = document && document.documentElement;


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(28);

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(42);
var $export = __webpack_require__(11);
var redefine = __webpack_require__(19);
var hide = __webpack_require__(13);
var Iterators = __webpack_require__(23);
var $iterCreate = __webpack_require__(112);
var setToStringTag = __webpack_require__(50);
var getPrototypeOf = __webpack_require__(115);
var ITERATOR = __webpack_require__(3)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = getWindow;

function getWindow(node) {
  return node === node.window ? node : node.nodeType === 9 ? node.defaultView || node.parentWindow : false;
}

module.exports = exports["default"];

/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2);
/* harmony import */ var _api_runner_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1);
/* harmony import */ var _api_runner_browser__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_api_runner_browser__WEBPACK_IMPORTED_MODULE_5__);





 // Renders page

var PageRenderer =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default()(PageRenderer, _React$Component);

  function PageRenderer() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = PageRenderer.prototype;

  _proto.render = function render() {
    var props = Object.assign({}, this.props, {
      pathContext: this.props.pageContext
    });

    var _apiRunner = Object(_api_runner_browser__WEBPACK_IMPORTED_MODULE_5__["apiRunner"])("replaceComponentRenderer", {
      props: this.props,
      loader: _loader__WEBPACK_IMPORTED_MODULE_4__["publicLoader"]
    }),
        replacementElement = _apiRunner[0];

    var pageElement = replacementElement || Object(react__WEBPACK_IMPORTED_MODULE_2__["createElement"])(this.props.pageResources.component, Object.assign({}, props, {
      key: this.props.pageResources.page.path
    }));
    var wrappedPage = Object(_api_runner_browser__WEBPACK_IMPORTED_MODULE_5__["apiRunner"])("wrapPageElement", {
      element: pageElement,
      props: props
    }, pageElement, function (_ref) {
      var result = _ref.result;
      return {
        element: result,
        props: props
      };
    }).pop();
    return wrappedPage;
  };

  return PageRenderer;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);

PageRenderer.propTypes = {
  location: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,
  pageResources: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,
  data: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  pageContext: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["a"] = (PageRenderer);

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(8);

var _ScrollBehaviorContext = _interopRequireDefault(__webpack_require__(120));

var _ScrollContainer = _interopRequireDefault(__webpack_require__(130));

exports.ScrollContainer = _ScrollContainer.default;
exports.ScrollContext = _ScrollBehaviorContext.default;

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

/*!
  * domready (c) Dustin Diaz 2014 - License MIT
  */
!function (name, definition) {

  if (true) module.exports = definition()
  else {}

}('domready', function () {

  var fns = [], listener
    , doc = document
    , hack = doc.documentElement.doScroll
    , domContentLoaded = 'DOMContentLoaded'
    , loaded = (hack ? /^loaded|^c/ : /^loaded|^i|^c/).test(doc.readyState)


  if (!loaded)
  doc.addEventListener(domContentLoaded, listener = function () {
    doc.removeEventListener(domContentLoaded, listener)
    loaded = 1
    while (listener = fns.shift()) listener()
  })

  return function (fn) {
    loaded ? setTimeout(fn, 0) : fns.push(fn)
  }

});


/***/ }),
/* 71 */
/***/ (function(module) {

module.exports = [{"fromPath":"/index.html","isPermanent":false,"redirectInBrowser":true,"toPath":"/"},{"fromPath":"/docs/","isPermanent":false,"redirectInBrowser":true,"toPath":"/docs/getting-started"},{"fromPath":"/components/","isPermanent":false,"redirectInBrowser":true,"toPath":"/components/avatar-list"},{"fromPath":"/components/Authorized","isPermanent":false,"redirectInBrowser":true,"toPath":"/components/authorized"},{"fromPath":"/components/AvatarList","isPermanent":false,"redirectInBrowser":true,"toPath":"/components/avatar-list"},{"fromPath":"/components/AvatarList-cn","isPermanent":false,"redirectInBrowser":true,"toPath":"/components/avatar-list-cn"},{"fromPath":"/components/CountDown","isPermanent":false,"redirectInBrowser":true,"toPath":"/components/count-down"},{"fromPath":"/components/CountDown-cn","isPermanent":false,"redirectInBrowser":true,"toPath":"/components/count-down-cn"},{"fromPath":"/components/DescriptionList","isPermanent":false,"redirectInBrowser":true,"toPath":"/components/description-list"},{"fromPath":"/components/DescriptionList-cn","isPermanent":false,"redirectInBrowser":true,"toPath":"/components/description-list-cn"},{"fromPath":"/components/Ellipsis","isPermanent":false,"redirectInBrowser":true,"toPath":"/components/ellipsis"},{"fromPath":"/components/Charts","isPermanent":false,"redirectInBrowser":true,"toPath":"/components/charts"},{"fromPath":"/components/Ellipsis-cn","isPermanent":false,"redirectInBrowser":true,"toPath":"/components/ellipsis-cn"},{"fromPath":"/components/GlobalFooter","isPermanent":false,"redirectInBrowser":true,"toPath":"/components/global-footer"},{"fromPath":"/components/Exception","isPermanent":false,"redirectInBrowser":true,"toPath":"/components/exception"},{"fromPath":"/components/Exception-cn","isPermanent":false,"redirectInBrowser":true,"toPath":"/components/exception-cn"},{"fromPath":"/components/HeaderSearch","isPermanent":false,"redirectInBrowser":true,"toPath":"/components/header-search"},{"fromPath":"/components/HeaderSearch-cn","isPermanent":false,"redirectInBrowser":true,"toPath":"/components/header-search-cn"},{"fromPath":"/components/FooterToolbar","isPermanent":false,"redirectInBrowser":true,"toPath":"/components/footer-toolbar"},{"fromPath":"/components/FooterToolbar-cn","isPermanent":false,"redirectInBrowser":true,"toPath":"/components/footer-toolbar-cn"},{"fromPath":"/components/Login","isPermanent":false,"redirectInBrowser":true,"toPath":"/components/login"},{"fromPath":"/components/Login-cn","isPermanent":false,"redirectInBrowser":true,"toPath":"/components/login-cn"},{"fromPath":"/components/NoticeIcon","isPermanent":false,"redirectInBrowser":true,"toPath":"/components/notice-icon"},{"fromPath":"/components/NoticeIcon-cn","isPermanent":false,"redirectInBrowser":true,"toPath":"/components/notice-icon-cn"},{"fromPath":"/components/NumberInfo","isPermanent":false,"redirectInBrowser":true,"toPath":"/components/number-info"},{"fromPath":"/components/NumberInfo-cn","isPermanent":false,"redirectInBrowser":true,"toPath":"/components/number-info-cn"},{"fromPath":"/components/PageHeader","isPermanent":false,"redirectInBrowser":true,"toPath":"/components/page-header"},{"fromPath":"/components/Result","isPermanent":false,"redirectInBrowser":true,"toPath":"/components/result"},{"fromPath":"/components/TagSelect","isPermanent":false,"redirectInBrowser":true,"toPath":"/components/tag-select"},{"fromPath":"/components/Trend","isPermanent":false,"redirectInBrowser":true,"toPath":"/components/trend"},{"fromPath":"/components/Authorized/demo/AuthorizedArray","isPermanent":false,"redirectInBrowser":true,"toPath":"/components/authorized/demo/authorized-array"},{"fromPath":"/components/Authorized/demo/AuthorizedFunction","isPermanent":false,"redirectInBrowser":true,"toPath":"/components/authorized/demo/authorized-function"},{"fromPath":"/components/Authorized/demo/basic","isPermanent":false,"redirectInBrowser":true,"toPath":"/components/authorized/demo/basic"},{"fromPath":"/components/Authorized/demo/secured","isPermanent":false,"redirectInBrowser":true,"toPath":"/components/authorized/demo/secured"},{"fromPath":"/components/AvatarList/demo/maxLength","isPermanent":false,"redirectInBrowser":true,"toPath":"/components/avatar-list/demo/max-length"},{"fromPath":"/components/AvatarList/demo/simple","isPermanent":false,"redirectInBrowser":true,"toPath":"/components/avatar-list/demo/simple"},{"fromPath":"/components/CountDown/demo/simple","isPermanent":false,"redirectInBrowser":true,"toPath":"/components/count-down/demo/simple"},{"fromPath":"/components/Charts/demo/bar","isPermanent":false,"redirectInBrowser":true,"toPath":"/components/charts/demo/bar"},{"fromPath":"/components/Charts/demo/chart-card","isPermanent":false,"redirectInBrowser":true,"toPath":"/components/charts/demo/chart-card"},{"fromPath":"/components/Charts/demo/gauge","isPermanent":false,"redirectInBrowser":true,"toPath":"/components/charts/demo/gauge"},{"fromPath":"/components/Charts/demo/mini-area","isPermanent":false,"redirectInBrowser":true,"toPath":"/components/charts/demo/mini-area"},{"fromPath":"/components/Charts/demo/mini-bar","isPermanent":false,"redirectInBrowser":true,"toPath":"/components/charts/demo/mini-bar"},{"fromPath":"/components/Charts/demo/mini-pie","isPermanent":false,"redirectInBrowser":true,"toPath":"/components/charts/demo/mini-pie"},{"fromPath":"/components/Charts/demo/mini-progress","isPermanent":false,"redirectInBrowser":true,"toPath":"/components/charts/demo/mini-progress"},{"fromPath":"/components/Charts/demo/mix","isPermanent":false,"redirectInBrowser":true,"toPath":"/components/charts/demo/mix"},{"fromPath":"/components/Charts/demo/radar","isPermanent":false,"redirectInBrowser":true,"toPath":"/components/charts/demo/radar"},{"fromPath":"/components/Charts/demo/pie","isPermanent":false,"redirectInBrowser":true,"toPath":"/components/charts/demo/pie"},{"fromPath":"/components/Charts/demo/tag-cloud","isPermanent":false,"redirectInBrowser":true,"toPath":"/components/charts/demo/tag-cloud"},{"fromPath":"/components/Charts/demo/timeline-chart","isPermanent":false,"redirectInBrowser":true,"toPath":"/components/charts/demo/timeline-chart"},{"fromPath":"/components/Charts/demo/waterwave","isPermanent":false,"redirectInBrowser":true,"toPath":"/components/charts/demo/waterwave"},{"fromPath":"/components/DescriptionList/demo/basic","isPermanent":false,"redirectInBrowser":true,"toPath":"/components/description-list/demo/basic"},{"fromPath":"/components/DescriptionList/demo/vertical","isPermanent":false,"redirectInBrowser":true,"toPath":"/components/description-list/demo/vertical"},{"fromPath":"/components/Ellipsis/demo/number","isPermanent":false,"redirectInBrowser":true,"toPath":"/components/ellipsis/demo/number"},{"fromPath":"/components/Ellipsis/demo/line","isPermanent":false,"redirectInBrowser":true,"toPath":"/components/ellipsis/demo/line"},{"fromPath":"/components/GlobalFooter/demo/basic","isPermanent":false,"redirectInBrowser":true,"toPath":"/components/global-footer/demo/basic"},{"fromPath":"/components/Exception/demo/403","isPermanent":false,"redirectInBrowser":true,"toPath":"/components/exception/demo/403"},{"fromPath":"/components/Exception/demo/404","isPermanent":false,"redirectInBrowser":true,"toPath":"/components/exception/demo/404"},{"fromPath":"/components/Exception/demo/500","isPermanent":false,"redirectInBrowser":true,"toPath":"/components/exception/demo/500"},{"fromPath":"/components/HeaderSearch/demo/basic","isPermanent":false,"redirectInBrowser":true,"toPath":"/components/header-search/demo/basic"},{"fromPath":"/components/FooterToolbar/demo/basic","isPermanent":false,"redirectInBrowser":true,"toPath":"/components/footer-toolbar/demo/basic"},{"fromPath":"/components/Login/demo/basic","isPermanent":false,"redirectInBrowser":true,"toPath":"/components/login/demo/basic"},{"fromPath":"/components/NoticeIcon/demo/basic","isPermanent":false,"redirectInBrowser":true,"toPath":"/components/notice-icon/demo/basic"},{"fromPath":"/components/NumberInfo/demo/basic","isPermanent":false,"redirectInBrowser":true,"toPath":"/components/number-info/demo/basic"},{"fromPath":"/components/PageHeader/demo/image","isPermanent":false,"redirectInBrowser":true,"toPath":"/components/page-header/demo/image"},{"fromPath":"/components/PageHeader/demo/simple","isPermanent":false,"redirectInBrowser":true,"toPath":"/components/page-header/demo/simple"},{"fromPath":"/components/PageHeader/demo/standard","isPermanent":false,"redirectInBrowser":true,"toPath":"/components/page-header/demo/standard"},{"fromPath":"/components/PageHeader/demo/structure","isPermanent":false,"redirectInBrowser":true,"toPath":"/components/page-header/demo/structure"},{"fromPath":"/components/Result/demo/classic","isPermanent":false,"redirectInBrowser":true,"toPath":"/components/result/demo/classic"},{"fromPath":"/components/Result/demo/error","isPermanent":false,"redirectInBrowser":true,"toPath":"/components/result/demo/error"},{"fromPath":"/components/NoticeIcon/demo/popover","isPermanent":false,"redirectInBrowser":true,"toPath":"/components/notice-icon/demo/popover"},{"fromPath":"/components/Result/demo/structure","isPermanent":false,"redirectInBrowser":true,"toPath":"/components/result/demo/structure"},{"fromPath":"/components/TagSelect/demo/controlled","isPermanent":false,"redirectInBrowser":true,"toPath":"/components/tag-select/demo/controlled"},{"fromPath":"/components/TagSelect/demo/expandable","isPermanent":false,"redirectInBrowser":true,"toPath":"/components/tag-select/demo/expandable"},{"fromPath":"/components/TagSelect/demo/simple","isPermanent":false,"redirectInBrowser":true,"toPath":"/components/tag-select/demo/simple"},{"fromPath":"/components/Trend/demo/basic","isPermanent":false,"redirectInBrowser":true,"toPath":"/components/trend/demo/basic"},{"fromPath":"/components/Trend/demo/reverse","isPermanent":false,"redirectInBrowser":true,"toPath":"/components/trend/demo/reverse"}];

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

var $iterators = __webpack_require__(56);
var getKeys = __webpack_require__(37);
var redefine = __webpack_require__(19);
var global = __webpack_require__(6);
var hide = __webpack_require__(13);
var Iterators = __webpack_require__(23);
var wks = __webpack_require__(3);
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isRegExp = __webpack_require__(59);
var anObject = __webpack_require__(5);
var speciesConstructor = __webpack_require__(62);
var advanceStringIndex = __webpack_require__(46);
var toLength = __webpack_require__(14);
var callRegExpExec = __webpack_require__(29);
var regexpExec = __webpack_require__(44);
var fails = __webpack_require__(17);
var $min = Math.min;
var $push = [].push;
var $SPLIT = 'split';
var LENGTH = 'length';
var LAST_INDEX = 'lastIndex';
var MAX_UINT32 = 0xffffffff;

// babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
var SUPPORTS_Y = !fails(function () { RegExp(MAX_UINT32, 'y'); });

// @@split logic
__webpack_require__(30)('split', 2, function (defined, SPLIT, $split, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
    ''[$SPLIT](/.?/)[LENGTH]
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = String(this);
      if (separator === undefined && limit === 0) return [];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) return $split.call(string, separator, limit);
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      var splitLimit = limit === undefined ? MAX_UINT32 : limit >>> 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = regexpExec.call(separatorCopy, string)) {
        lastIndex = separatorCopy[LAST_INDEX];
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
          lastLength = match[0][LENGTH];
          lastLastIndex = lastIndex;
          if (output[LENGTH] >= splitLimit) break;
        }
        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
      }
      if (lastLastIndex === string[LENGTH]) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
    };
  // Chakra, V8
  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : $split.call(this, separator, limit);
    };
  } else {
    internalSplit = $split;
  }

  return [
    // `String.prototype.split` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = defined(this);
      var splitter = separator == undefined ? undefined : separator[SPLIT];
      return splitter !== undefined
        ? splitter.call(separator, O, limit)
        : internalSplit.call(String(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (regexp, limit) {
      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== $split);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var C = speciesConstructor(rx, RegExp);

      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (SUPPORTS_Y ? 'y' : 'g');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = SUPPORTS_Y ? q : 0;
        var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
        var e;
        if (
          z === null ||
          (e = $min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          A.push(S.slice(p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            A.push(z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      A.push(S.slice(p));
      return A;
    }
  ];
});


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/Array.prototype.includes
var $export = __webpack_require__(11);
var $includes = __webpack_require__(61)(true);

$export($export.P, 'Array', {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

__webpack_require__(39)('includes');


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.7 String.prototype.includes(searchString, position = 0)

var $export = __webpack_require__(11);
var context = __webpack_require__(85);
var INCLUDES = 'includes';

$export($export.P + $export.F * __webpack_require__(86)(INCLUDES), 'String', {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~context(this, searchString, INCLUDES)
      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 21.2.5.3 get RegExp.prototype.flags
var anObject = __webpack_require__(5);
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),
/* 77 */
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__(5);
var toLength = __webpack_require__(14);
var advanceStringIndex = __webpack_require__(46);
var regExpExec = __webpack_require__(29);

// @@match logic
__webpack_require__(30)('match', 1, function (defined, MATCH, $match, maybeCallNative) {
  return [
    // `String.prototype.match` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = defined(this);
      var fn = regexp == undefined ? undefined : regexp[MATCH];
      return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match
    function (regexp) {
      var res = maybeCallNative($match, regexp, this);
      if (res.done) return res.value;
      var rx = anObject(regexp);
      var S = String(this);
      if (!rx.global) return regExpExec(rx, S);
      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;
      while ((result = regExpExec(rx, S)) !== null) {
        var matchStr = String(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
        n++;
      }
      return n === 0 ? null : A;
    }
  ];
});


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__(5);
var sameValue = __webpack_require__(88);
var regExpExec = __webpack_require__(29);

// @@search logic
__webpack_require__(30)('search', 1, function (defined, SEARCH, $search, maybeCallNative) {
  return [
    // `String.prototype.search` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.search
    function search(regexp) {
      var O = defined(this);
      var fn = regexp == undefined ? undefined : regexp[SEARCH];
      return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
    },
    // `RegExp.prototype[@@search]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@search
    function (regexp) {
      var res = maybeCallNative($search, regexp, this);
      if (res.done) return res.value;
      var rx = anObject(regexp);
      var S = String(this);
      var previousLastIndex = rx.lastIndex;
      if (!sameValue(previousLastIndex, 0)) rx.lastIndex = 0;
      var result = regExpExec(rx, S);
      if (!sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;
      return result === null ? -1 : result.index;
    }
  ];
});


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(18) && !__webpack_require__(17)(function () {
  return Object.defineProperty(__webpack_require__(45)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(12);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(27);
var toIObject = __webpack_require__(38);
var arrayIndexOf = __webpack_require__(61)(false);
var IE_PROTO = __webpack_require__(48)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 83 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(6);
var dP = __webpack_require__(25);
var DESCRIPTORS = __webpack_require__(18);
var SPECIES = __webpack_require__(3)('species');

module.exports = function (KEY) {
  var C = global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

// helper for String#{startsWith, endsWith, includes}
var isRegExp = __webpack_require__(59);
var defined = __webpack_require__(22);

module.exports = function (that, searchString, NAME) {
  if (isRegExp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
  return String(defined(that));
};


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

var MATCH = __webpack_require__(3)('match');
module.exports = function (KEY) {
  var re = /./;
  try {
    '/./'[KEY](re);
  } catch (e) {
    try {
      re[MATCH] = false;
      return !'/./'[KEY](re);
    } catch (f) { /* empty */ }
  } return true;
};


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(21);
var IObject = __webpack_require__(47);
var toObject = __webpack_require__(26);
var toLength = __webpack_require__(14);
var asc = __webpack_require__(108);
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),
/* 88 */
/***/ (function(module, exports) {

// 7.2.9 SameValue(x, y)
module.exports = Object.is || function is(x, y) {
  // eslint-disable-next-line no-self-compare
  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var regexpExec = __webpack_require__(44);
__webpack_require__(11)({
  target: 'RegExp',
  proto: true,
  forced: regexpExec !== /./.exec
}, {
  exec: regexpExec
});


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(41)('native-function-to-string', Function.toString);


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(37);
var gOPS = __webpack_require__(93);
var pIE = __webpack_require__(83);
var toObject = __webpack_require__(26);
var IObject = __webpack_require__(47);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(17)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(31);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 93 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 94 */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(21);
var call = __webpack_require__(96);
var isArrayIter = __webpack_require__(97);
var anObject = __webpack_require__(5);
var toLength = __webpack_require__(14);
var getIterFn = __webpack_require__(98);
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(5);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(23);
var ITERATOR = __webpack_require__(3)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(40);
var ITERATOR = __webpack_require__(3)('iterator');
var Iterators = __webpack_require__(23);
module.exports = __webpack_require__(20).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 99 */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(6);
var macrotask = __webpack_require__(63).set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(15)(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),
/* 101 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(6);
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(5);
var isObject = __webpack_require__(12);
var newPromiseCapability = __webpack_require__(65);

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(19);
module.exports = function (target, src, safe) {
  for (var key in src) redefine(target, key, src[key], safe);
  return target;
};


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(3)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),
/* 106 */
/***/ (function(module, exports) {

module.exports = [];

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
var $export = __webpack_require__(11);
var $find = __webpack_require__(87)(5);
var KEY = 'find';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__(39)(KEY);


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(109);

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(12);
var isArray = __webpack_require__(110);
var SPECIES = __webpack_require__(3)('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(15);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 111 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(113);
var descriptor = __webpack_require__(57);
var setToStringTag = __webpack_require__(50);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(13)(IteratorPrototype, __webpack_require__(3)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(5);
var dPs = __webpack_require__(114);
var enumBugKeys = __webpack_require__(58);
var IE_PROTO = __webpack_require__(48)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(45)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(64).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(25);
var anObject = __webpack_require__(5);
var getKeys = __webpack_require__(37);

module.exports = __webpack_require__(18) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(27);
var toObject = __webpack_require__(26);
var IE_PROTO = __webpack_require__(48)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(60)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(66)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = function() {};

if (false) {}

module.exports = warning;


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(119);

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(8);

exports.__esModule = true;
exports.default = void 0;

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(7));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(36));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(51));

var _react = _interopRequireDefault(__webpack_require__(0));

var _scrollBehavior = _interopRequireDefault(__webpack_require__(121));

var _propTypes = _interopRequireDefault(__webpack_require__(4));

var _history = __webpack_require__(128);

var _StateStorage = _interopRequireDefault(__webpack_require__(129));

var propTypes = {
  shouldUpdateScroll: _propTypes.default.func,
  children: _propTypes.default.element.isRequired,
  location: _propTypes.default.object.isRequired
};
var childContextTypes = {
  scrollBehavior: _propTypes.default.object.isRequired
};

var ScrollContext =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(ScrollContext, _React$Component);

  function ScrollContext(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "shouldUpdateScroll", function (prevRouterProps, routerProps) {
      var shouldUpdateScroll = _this.props.shouldUpdateScroll;

      if (!shouldUpdateScroll) {
        return true;
      } // Hack to allow accessing scrollBehavior._stateStorage.


      return shouldUpdateScroll.call(_this.scrollBehavior, prevRouterProps, routerProps);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "registerElement", function (key, element, shouldUpdateScroll) {
      _this.scrollBehavior.registerElement(key, element, shouldUpdateScroll, _this.getRouterProps());
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "unregisterElement", function (key) {
      _this.scrollBehavior.unregisterElement(key);
    });
    _this.scrollBehavior = new _scrollBehavior.default({
      addTransitionHook: _history.globalHistory.listen,
      stateStorage: new _StateStorage.default(),
      getCurrentLocation: function getCurrentLocation() {
        return _this.props.location;
      },
      shouldUpdateScroll: _this.shouldUpdateScroll
    });
    return _this;
  }

  var _proto = ScrollContext.prototype;

  _proto.getChildContext = function getChildContext() {
    return {
      scrollBehavior: this
    };
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var location = this.props.location;
    var prevLocation = prevProps.location;

    if (location === prevLocation) {
      return;
    }

    var prevRouterProps = {
      location: prevProps.location // The "scroll-behavior" package expects the "action" to be on the location
      // object so let's copy it over.
      // Temp hack while awaiting https://github.com/reach/router/issues/119

    };

    if (window.__navigatingToLink) {
      location.action = "PUSH";
    } else {
      location.action = "POP";
    }

    this.scrollBehavior.updateScroll(prevRouterProps, {
      history: _history.globalHistory,
      location: location
    });
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.scrollBehavior.stop();
  };

  _proto.getRouterProps = function getRouterProps() {
    var location = this.props.location;
    return {
      location: location,
      history: _history.globalHistory
    };
  };

  _proto.render = function render() {
    return _react.default.Children.only(this.props.children);
  };

  return ScrollContext;
}(_react.default.Component);

ScrollContext.propTypes = propTypes;
ScrollContext.childContextTypes = childContextTypes;
var _default = ScrollContext;
exports.default = _default;

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _off = __webpack_require__(122);

var _off2 = _interopRequireDefault(_off);

var _on = __webpack_require__(123);

var _on2 = _interopRequireDefault(_on);

var _scrollLeft = __webpack_require__(124);

var _scrollLeft2 = _interopRequireDefault(_scrollLeft);

var _scrollTop = __webpack_require__(125);

var _scrollTop2 = _interopRequireDefault(_scrollTop);

var _requestAnimationFrame = __webpack_require__(126);

var _requestAnimationFrame2 = _interopRequireDefault(_requestAnimationFrame);

var _invariant = __webpack_require__(9);

var _invariant2 = _interopRequireDefault(_invariant);

var _utils = __webpack_require__(127);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /* eslint-disable no-underscore-dangle */

// Try at most this many times to scroll, to avoid getting stuck.
var MAX_SCROLL_ATTEMPTS = 2;

var ScrollBehavior = function () {
  function ScrollBehavior(_ref) {
    var _this = this;

    var addTransitionHook = _ref.addTransitionHook,
        stateStorage = _ref.stateStorage,
        getCurrentLocation = _ref.getCurrentLocation,
        shouldUpdateScroll = _ref.shouldUpdateScroll;

    _classCallCheck(this, ScrollBehavior);

    this._restoreScrollRestoration = function () {
      /* istanbul ignore if: not supported by any browsers on Travis */
      if (_this._oldScrollRestoration) {
        try {
          window.history.scrollRestoration = _this._oldScrollRestoration;
        } catch (e) {
          /* silence */
        }
      }
    };

    this._onWindowScroll = function () {
      // It's possible that this scroll operation was triggered by what will be a
      // `POP` transition. Instead of updating the saved location immediately, we
      // have to enqueue the update, then potentially cancel it if we observe a
      // location update.
      if (!_this._saveWindowPositionHandle) {
        _this._saveWindowPositionHandle = (0, _requestAnimationFrame2.default)(_this._saveWindowPosition);
      }

      if (_this._windowScrollTarget) {
        var _windowScrollTarget = _this._windowScrollTarget,
            xTarget = _windowScrollTarget[0],
            yTarget = _windowScrollTarget[1];

        var x = (0, _scrollLeft2.default)(window);
        var y = (0, _scrollTop2.default)(window);

        if (x === xTarget && y === yTarget) {
          _this._windowScrollTarget = null;
          _this._cancelCheckWindowScroll();
        }
      }
    };

    this._saveWindowPosition = function () {
      _this._saveWindowPositionHandle = null;

      _this._savePosition(null, window);
    };

    this._checkWindowScrollPosition = function () {
      _this._checkWindowScrollHandle = null;

      // We can only get here if scrollTarget is set. Every code path that unsets
      // scroll target also cancels the handle to avoid calling this handler.
      // Still, check anyway just in case.
      /* istanbul ignore if: paranoid guard */
      if (!_this._windowScrollTarget) {
        return;
      }

      _this.scrollToTarget(window, _this._windowScrollTarget);

      ++_this._numWindowScrollAttempts;

      /* istanbul ignore if: paranoid guard */
      if (_this._numWindowScrollAttempts >= MAX_SCROLL_ATTEMPTS) {
        _this._windowScrollTarget = null;
        return;
      }

      _this._checkWindowScrollHandle = (0, _requestAnimationFrame2.default)(_this._checkWindowScrollPosition);
    };

    this._stateStorage = stateStorage;
    this._getCurrentLocation = getCurrentLocation;
    this._shouldUpdateScroll = shouldUpdateScroll;

    // This helps avoid some jankiness in fighting against the browser's
    // default scroll behavior on `POP` transitions.
    /* istanbul ignore else: Travis browsers all support this */
    if ('scrollRestoration' in window.history &&
    // Unfortunately, Safari on iOS freezes for 2-6s after the user swipes to
    // navigate through history with scrollRestoration being 'manual', so we
    // need to detect this browser and exclude it from the following code
    // until this bug is fixed by Apple.
    !(0, _utils.isMobileSafari)()) {
      this._oldScrollRestoration = window.history.scrollRestoration;
      try {
        window.history.scrollRestoration = 'manual';

        // Scroll restoration persists across page reloads. We want to reset
        // this to the original value, so that we can let the browser handle
        // restoring the initial scroll position on server-rendered pages.
        (0, _on2.default)(window, 'beforeunload', this._restoreScrollRestoration);
      } catch (e) {
        this._oldScrollRestoration = null;
      }
    } else {
      this._oldScrollRestoration = null;
    }

    this._saveWindowPositionHandle = null;
    this._checkWindowScrollHandle = null;
    this._windowScrollTarget = null;
    this._numWindowScrollAttempts = 0;

    this._scrollElements = {};

    // We have to listen to each window scroll update rather than to just
    // location updates, because some browsers will update scroll position
    // before emitting the location change.
    (0, _on2.default)(window, 'scroll', this._onWindowScroll);

    this._removeTransitionHook = addTransitionHook(function () {
      _requestAnimationFrame2.default.cancel(_this._saveWindowPositionHandle);
      _this._saveWindowPositionHandle = null;

      Object.keys(_this._scrollElements).forEach(function (key) {
        var scrollElement = _this._scrollElements[key];
        _requestAnimationFrame2.default.cancel(scrollElement.savePositionHandle);
        scrollElement.savePositionHandle = null;

        // It's fine to save element scroll positions here, though; the browser
        // won't modify them.
        _this._saveElementPosition(key);
      });
    });
  }

  ScrollBehavior.prototype.registerElement = function registerElement(key, element, shouldUpdateScroll, context) {
    var _this2 = this;

    !!this._scrollElements[key] ?  false ? undefined : (0, _invariant2.default)(false) : void 0;

    var saveElementPosition = function saveElementPosition() {
      _this2._saveElementPosition(key);
    };

    var scrollElement = {
      element: element,
      shouldUpdateScroll: shouldUpdateScroll,
      savePositionHandle: null,

      onScroll: function onScroll() {
        if (!scrollElement.savePositionHandle) {
          scrollElement.savePositionHandle = (0, _requestAnimationFrame2.default)(saveElementPosition);
        }
      }
    };

    this._scrollElements[key] = scrollElement;
    (0, _on2.default)(element, 'scroll', scrollElement.onScroll);

    this._updateElementScroll(key, null, context);
  };

  ScrollBehavior.prototype.unregisterElement = function unregisterElement(key) {
    !this._scrollElements[key] ?  false ? undefined : (0, _invariant2.default)(false) : void 0;

    var _scrollElements$key = this._scrollElements[key],
        element = _scrollElements$key.element,
        onScroll = _scrollElements$key.onScroll,
        savePositionHandle = _scrollElements$key.savePositionHandle;


    (0, _off2.default)(element, 'scroll', onScroll);
    _requestAnimationFrame2.default.cancel(savePositionHandle);

    delete this._scrollElements[key];
  };

  ScrollBehavior.prototype.updateScroll = function updateScroll(prevContext, context) {
    var _this3 = this;

    this._updateWindowScroll(prevContext, context);

    Object.keys(this._scrollElements).forEach(function (key) {
      _this3._updateElementScroll(key, prevContext, context);
    });
  };

  ScrollBehavior.prototype.stop = function stop() {
    this._restoreScrollRestoration();

    (0, _off2.default)(window, 'scroll', this._onWindowScroll);
    this._cancelCheckWindowScroll();

    this._removeTransitionHook();
  };

  ScrollBehavior.prototype._cancelCheckWindowScroll = function _cancelCheckWindowScroll() {
    _requestAnimationFrame2.default.cancel(this._checkWindowScrollHandle);
    this._checkWindowScrollHandle = null;
  };

  ScrollBehavior.prototype._saveElementPosition = function _saveElementPosition(key) {
    var scrollElement = this._scrollElements[key];
    scrollElement.savePositionHandle = null;

    this._savePosition(key, scrollElement.element);
  };

  ScrollBehavior.prototype._savePosition = function _savePosition(key, element) {
    this._stateStorage.save(this._getCurrentLocation(), key, [(0, _scrollLeft2.default)(element), (0, _scrollTop2.default)(element)]);
  };

  ScrollBehavior.prototype._updateWindowScroll = function _updateWindowScroll(prevContext, context) {
    // Whatever we were doing before isn't relevant any more.
    this._cancelCheckWindowScroll();

    this._windowScrollTarget = this._getScrollTarget(null, this._shouldUpdateScroll, prevContext, context);

    // Updating the window scroll position is really flaky. Just trying to
    // scroll it isn't enough. Instead, try to scroll a few times until it
    // works.
    this._numWindowScrollAttempts = 0;
    this._checkWindowScrollPosition();
  };

  ScrollBehavior.prototype._updateElementScroll = function _updateElementScroll(key, prevContext, context) {
    var _scrollElements$key2 = this._scrollElements[key],
        element = _scrollElements$key2.element,
        shouldUpdateScroll = _scrollElements$key2.shouldUpdateScroll;


    var scrollTarget = this._getScrollTarget(key, shouldUpdateScroll, prevContext, context);
    if (!scrollTarget) {
      return;
    }

    // Unlike with the window, there shouldn't be any flakiness to deal with
    // here.
    this.scrollToTarget(element, scrollTarget);
  };

  ScrollBehavior.prototype._getDefaultScrollTarget = function _getDefaultScrollTarget(location) {
    var hash = location.hash;
    if (hash && hash !== '#') {
      return hash.charAt(0) === '#' ? hash.slice(1) : hash;
    }
    return [0, 0];
  };

  ScrollBehavior.prototype._getScrollTarget = function _getScrollTarget(key, shouldUpdateScroll, prevContext, context) {
    var scrollTarget = shouldUpdateScroll ? shouldUpdateScroll.call(this, prevContext, context) : true;

    if (!scrollTarget || Array.isArray(scrollTarget) || typeof scrollTarget === 'string') {
      return scrollTarget;
    }

    var location = this._getCurrentLocation();

    return this._getSavedScrollTarget(key, location) || this._getDefaultScrollTarget(location);
  };

  ScrollBehavior.prototype._getSavedScrollTarget = function _getSavedScrollTarget(key, location) {
    if (location.action === 'PUSH') {
      return null;
    }

    return this._stateStorage.read(location, key);
  };

  ScrollBehavior.prototype.scrollToTarget = function scrollToTarget(element, target) {
    if (typeof target === 'string') {
      var targetElement = document.getElementById(target) || document.getElementsByName(target)[0];
      if (targetElement) {
        targetElement.scrollIntoView();
        return;
      }

      // Fallback to scrolling to top when target fragment doesn't exist.
      target = [0, 0]; // eslint-disable-line no-param-reassign
    }

    var _target = target,
        left = _target[0],
        top = _target[1];

    (0, _scrollLeft2.default)(element, left);
    (0, _scrollTop2.default)(element, top);
  };

  return ScrollBehavior;
}();

exports.default = ScrollBehavior;
module.exports = exports['default'];

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(8);

exports.__esModule = true;
exports.default = void 0;

var _inDOM = _interopRequireDefault(__webpack_require__(52));

var off = function off() {};

if (_inDOM.default) {
  off = function () {
    if (document.addEventListener) return function (node, eventName, handler, capture) {
      return node.removeEventListener(eventName, handler, capture || false);
    };else if (document.attachEvent) return function (node, eventName, handler) {
      return node.detachEvent('on' + eventName, handler);
    };
  }();
}

var _default = off;
exports.default = _default;
module.exports = exports["default"];

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(8);

exports.__esModule = true;
exports.default = void 0;

var _inDOM = _interopRequireDefault(__webpack_require__(52));

var on = function on() {};

if (_inDOM.default) {
  on = function () {
    if (document.addEventListener) return function (node, eventName, handler, capture) {
      return node.addEventListener(eventName, handler, capture || false);
    };else if (document.attachEvent) return function (node, eventName, handler) {
      return node.attachEvent('on' + eventName, function (e) {
        e = e || window.event;
        e.target = e.target || e.srcElement;
        e.currentTarget = node;
        handler.call(node, e);
      });
    };
  }();
}

var _default = on;
exports.default = _default;
module.exports = exports["default"];

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(8);

exports.__esModule = true;
exports.default = scrollTop;

var _isWindow = _interopRequireDefault(__webpack_require__(67));

function scrollTop(node, val) {
  var win = (0, _isWindow.default)(node);
  if (val === undefined) return win ? 'pageXOffset' in win ? win.pageXOffset : win.document.documentElement.scrollLeft : node.scrollLeft;
  if (win) win.scrollTo(val, 'pageYOffset' in win ? win.pageYOffset : win.document.documentElement.scrollTop);else node.scrollLeft = val;
}

module.exports = exports["default"];

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(8);

exports.__esModule = true;
exports.default = scrollTop;

var _isWindow = _interopRequireDefault(__webpack_require__(67));

function scrollTop(node, val) {
  var win = (0, _isWindow.default)(node);
  if (val === undefined) return win ? 'pageYOffset' in win ? win.pageYOffset : win.document.documentElement.scrollTop : node.scrollTop;
  if (win) win.scrollTo('pageXOffset' in win ? win.pageXOffset : win.document.documentElement.scrollLeft, val);else node.scrollTop = val;
}

module.exports = exports["default"];

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(8);

exports.__esModule = true;
exports.default = void 0;

var _inDOM = _interopRequireDefault(__webpack_require__(52));

var vendors = ['', 'webkit', 'moz', 'o', 'ms'];
var cancel = 'clearTimeout';
var raf = fallback;
var compatRaf;

var getKey = function getKey(vendor, k) {
  return vendor + (!vendor ? k : k[0].toUpperCase() + k.substr(1)) + 'AnimationFrame';
};

if (_inDOM.default) {
  vendors.some(function (vendor) {
    var rafKey = getKey(vendor, 'request');

    if (rafKey in window) {
      cancel = getKey(vendor, 'cancel');
      return raf = function raf(cb) {
        return window[rafKey](cb);
      };
    }
  });
}
/* https://github.com/component/raf */


var prev = new Date().getTime();

function fallback(fn) {
  var curr = new Date().getTime(),
      ms = Math.max(0, 16 - (curr - prev)),
      req = setTimeout(fn, ms);
  prev = curr;
  return req;
}

compatRaf = function compatRaf(cb) {
  return raf(cb);
};

compatRaf.cancel = function (id) {
  window[cancel] && typeof window[cancel] === 'function' && window[cancel](id);
};

var _default = compatRaf;
exports.default = _default;
module.exports = exports["default"];

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isMobileSafari = isMobileSafari;
function isMobileSafari() {
  return (/iPad|iPhone|iPod/.test(window.navigator.platform) && /^((?!CriOS).)*Safari/.test(window.navigator.userAgent)
  );
}

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var getLocation = function getLocation(source) {
  return _extends({}, source.location, {
    state: source.history.state,
    key: source.history.state && source.history.state.key || "initial"
  });
};

var createHistory = function createHistory(source, options) {
  var listeners = [];
  var location = getLocation(source);
  var transitioning = false;
  var resolveTransition = function resolveTransition() {};

  return {
    get location() {
      return location;
    },

    get transitioning() {
      return transitioning;
    },

    _onTransitionComplete: function _onTransitionComplete() {
      transitioning = false;
      resolveTransition();
    },
    listen: function listen(listener) {
      listeners.push(listener);

      var popstateListener = function popstateListener() {
        location = getLocation(source);
        listener({ location: location, action: "POP" });
      };

      source.addEventListener("popstate", popstateListener);

      return function () {
        source.removeEventListener("popstate", popstateListener);
        listeners = listeners.filter(function (fn) {
          return fn !== listener;
        });
      };
    },
    navigate: function navigate(to) {
      var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          state = _ref.state,
          _ref$replace = _ref.replace,
          replace = _ref$replace === undefined ? false : _ref$replace;

      state = _extends({}, state, { key: Date.now() + "" });
      // try...catch iOS Safari limits to 100 pushState calls
      try {
        if (transitioning || replace) {
          source.history.replaceState(state, null, to);
        } else {
          source.history.pushState(state, null, to);
        }
      } catch (e) {
        source.location[replace ? "replace" : "assign"](to);
      }

      location = getLocation(source);
      transitioning = true;
      var transition = new Promise(function (res) {
        return resolveTransition = res;
      });
      listeners.forEach(function (listener) {
        return listener({ location: location, action: "PUSH" });
      });
      return transition;
    }
  };
};

////////////////////////////////////////////////////////////////////////////////
// Stores history entries in memory for testing or other platforms like Native
var createMemorySource = function createMemorySource() {
  var initialPathname = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "/";

  var index = 0;
  var stack = [{ pathname: initialPathname, search: "" }];
  var states = [];

  return {
    get location() {
      return stack[index];
    },
    addEventListener: function addEventListener(name, fn) {},
    removeEventListener: function removeEventListener(name, fn) {},

    history: {
      get entries() {
        return stack;
      },
      get index() {
        return index;
      },
      get state() {
        return states[index];
      },
      pushState: function pushState(state, _, uri) {
        var _uri$split = uri.split("?"),
            pathname = _uri$split[0],
            _uri$split$ = _uri$split[1],
            search = _uri$split$ === undefined ? "" : _uri$split$;

        index++;
        stack.push({ pathname: pathname, search: search });
        states.push(state);
      },
      replaceState: function replaceState(state, _, uri) {
        var _uri$split2 = uri.split("?"),
            pathname = _uri$split2[0],
            _uri$split2$ = _uri$split2[1],
            search = _uri$split2$ === undefined ? "" : _uri$split2$;

        stack[index] = { pathname: pathname, search: search };
        states[index] = state;
      }
    }
  };
};

////////////////////////////////////////////////////////////////////////////////
// global history - uses window.history as the source if available, otherwise a
// memory history
var canUseDOM = !!(typeof window !== "undefined" && window.document && window.document.createElement);
var getSource = function getSource() {
  return canUseDOM ? window : createMemorySource();
};

var globalHistory = createHistory(getSource());
var navigate = globalHistory.navigate;

////////////////////////////////////////////////////////////////////////////////

exports.globalHistory = globalHistory;
exports.navigate = navigate;
exports.createHistory = createHistory;
exports.createMemorySource = createMemorySource;

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;
var STATE_KEY_PREFIX = "@@scroll|";
var GATSBY_ROUTER_SCROLL_STATE = "___GATSBY_REACT_ROUTER_SCROLL";

var SessionStorage =
/*#__PURE__*/
function () {
  function SessionStorage() {}

  var _proto = SessionStorage.prototype;

  _proto.read = function read(location, key) {
    var stateKey = this.getStateKey(location, key);

    try {
      var value = window.sessionStorage.getItem(stateKey);
      return JSON.parse(value);
    } catch (e) {
      console.warn("[gatsby-react-router-scroll] Unable to access sessionStorage; sessionStorage is not available.");

      if (window && window[GATSBY_ROUTER_SCROLL_STATE] && window[GATSBY_ROUTER_SCROLL_STATE][stateKey]) {
        return window[GATSBY_ROUTER_SCROLL_STATE][stateKey];
      }

      return {};
    }
  };

  _proto.save = function save(location, key, value) {
    var stateKey = this.getStateKey(location, key);
    var storedValue = JSON.stringify(value);

    try {
      window.sessionStorage.setItem(stateKey, storedValue);
    } catch (e) {
      if (window && window[GATSBY_ROUTER_SCROLL_STATE]) {
        window[GATSBY_ROUTER_SCROLL_STATE][stateKey] = JSON.parse(storedValue);
      } else {
        window[GATSBY_ROUTER_SCROLL_STATE] = {};
        window[GATSBY_ROUTER_SCROLL_STATE][stateKey] = JSON.parse(storedValue);
      }

      console.warn("[gatsby-react-router-scroll] Unable to save state in sessionStorage; sessionStorage is not available.");
    }
  };

  _proto.getStateKey = function getStateKey(location, key) {
    var stateKeyBase = "" + STATE_KEY_PREFIX + location.pathname;
    return key === null || typeof key === "undefined" ? stateKeyBase : stateKeyBase + "|" + key;
  };

  return SessionStorage;
}();

exports.default = SessionStorage;

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(8);

exports.__esModule = true;
exports.default = void 0;

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(7));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(36));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(51));

var _react = _interopRequireDefault(__webpack_require__(0));

var _reactDom = _interopRequireDefault(__webpack_require__(32));

var _warning = _interopRequireDefault(__webpack_require__(131));

var _propTypes = _interopRequireDefault(__webpack_require__(4));

var propTypes = {
  scrollKey: _propTypes.default.string.isRequired,
  shouldUpdateScroll: _propTypes.default.func,
  children: _propTypes.default.element.isRequired
};
var contextTypes = {
  // This is necessary when rendering on the client. However, when rendering on
  // the server, this container will do nothing, and thus does not require the
  // scroll behavior context.
  scrollBehavior: _propTypes.default.object
};

var ScrollContainer =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(ScrollContainer, _React$Component);

  function ScrollContainer(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this; // We don't re-register if the scroll key changes, so make sure we
    // unregister with the initial scroll key just in case the user changes it.

    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "shouldUpdateScroll", function (prevRouterProps, routerProps) {
      var shouldUpdateScroll = _this.props.shouldUpdateScroll;

      if (!shouldUpdateScroll) {
        return true;
      } // Hack to allow accessing scrollBehavior._stateStorage.


      return shouldUpdateScroll.call(_this.context.scrollBehavior.scrollBehavior, prevRouterProps, routerProps);
    });
    _this.scrollKey = props.scrollKey;
    return _this;
  }

  var _proto = ScrollContainer.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.context.scrollBehavior.registerElement(this.props.scrollKey, _reactDom.default.findDOMNode(this), // eslint-disable-line react/no-find-dom-node
    this.shouldUpdateScroll); // Only keep around the current DOM node in development, as this is only
    // for emitting the appropriate warning.

    if (false) {}
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
     false ? undefined : void 0;

    if (false) { var prevDomNode; }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.context.scrollBehavior.unregisterElement(this.scrollKey);
  };

  _proto.render = function render() {
    return this.props.children;
  };

  return ScrollContainer;
}(_react.default.Component);

ScrollContainer.propTypes = propTypes;
ScrollContainer.contextTypes = contextTypes;
var _default = ScrollContainer;
exports.default = _default;

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = function() {};

if (false) {}

module.exports = warning;


/***/ }),
/* 132 */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parsePath = parsePath;

function parsePath(path) {
  var pathname = path || "/";
  var search = "";
  var hash = "";
  var hashIndex = pathname.indexOf("#");

  if (hashIndex !== -1) {
    hash = pathname.substr(hashIndex);
    pathname = pathname.substr(0, hashIndex);
  }

  var searchIndex = pathname.indexOf("?");

  if (searchIndex !== -1) {
    search = pathname.substr(searchIndex);
    pathname = pathname.substr(0, searchIndex);
  }

  return {
    pathname: pathname,
    search: search === "?" ? "" : search,
    hash: hash === "#" ? "" : hash
  };
}

/***/ }),
/* 134 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_runner_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _api_runner_browser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_api_runner_browser__WEBPACK_IMPORTED_MODULE_0__);


if (window.location.protocol !== "https:" && window.location.hostname !== "localhost") {
  console.error("Service workers can only be used over HTTPS, or on localhost for development");
} else if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("" + "/sw.js").then(function (reg) {
    reg.addEventListener("updatefound", function () {
      Object(_api_runner_browser__WEBPACK_IMPORTED_MODULE_0__["apiRunner"])("onServiceWorkerUpdateFound", {
        serviceWorker: reg
      }); // The updatefound event implies that reg.installing is set; see
      // https://w3c.github.io/ServiceWorker/#service-worker-registration-updatefound-event

      var installingWorker = reg.installing;
      console.log("installingWorker", installingWorker);
      installingWorker.addEventListener("statechange", function () {
        switch (installingWorker.state) {
          case "installed":
            if (navigator.serviceWorker.controller) {
              // At this point, the old content will have been purged and the fresh content will
              // have been added to the cache.
              // We set a flag so Gatsby Link knows to refresh the page on next navigation attempt
              window.___swUpdated = true; // We call the onServiceWorkerUpdateReady API so users can show update prompts.

              Object(_api_runner_browser__WEBPACK_IMPORTED_MODULE_0__["apiRunner"])("onServiceWorkerUpdateReady", {
                serviceWorker: reg
              }); // If resources failed for the current page, reload.

              if (window.___failedResources) {
                console.log("resources failed, SW updated - reloading");
                window.location.reload();
              }
            } else {
              // At this point, everything has been precached.
              // It's the perfect time to display a "Content is cached for offline use." message.
              console.log("Content is now available offline!"); // Post to service worker that install is complete.
              // Delay to allow time for the event listener to be added --
              // otherwise fetch is called too soon and resources aren't cached.

              Object(_api_runner_browser__WEBPACK_IMPORTED_MODULE_0__["apiRunner"])("onServiceWorkerInstalled", {
                serviceWorker: reg
              });
            }

            break;

          case "redundant":
            console.error("The installing service worker became redundant.");
            Object(_api_runner_browser__WEBPACK_IMPORTED_MODULE_0__["apiRunner"])("onServiceWorkerRedundant", {
              serviceWorker: reg
            });
            break;

          case "activated":
            Object(_api_runner_browser__WEBPACK_IMPORTED_MODULE_0__["apiRunner"])("onServiceWorkerActive", {
              serviceWorker: reg
            });
            break;
        }
      });
    });
  }).catch(function (e) {
    console.error("Error during service worker registration:", e);
  });
}

/***/ }),
/* 135 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.search.js
var es6_regexp_search = __webpack_require__(79);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.match.js
var es6_regexp_match = __webpack_require__(78);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.assign.js
var es6_object_assign = __webpack_require__(33);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inheritsLoose.js
var inheritsLoose = __webpack_require__(7);
var inheritsLoose_default = /*#__PURE__*/__webpack_require__.n(inheritsLoose);

// EXTERNAL MODULE: ./.cache/api-runner-browser.js
var api_runner_browser = __webpack_require__(1);

// EXTERNAL MODULE: external "React"
var external_React_ = __webpack_require__(0);
var external_React_default = /*#__PURE__*/__webpack_require__.n(external_React_);

// EXTERNAL MODULE: external "ReactDOM"
var external_ReactDOM_ = __webpack_require__(32);
var external_ReactDOM_default = /*#__PURE__*/__webpack_require__.n(external_ReactDOM_);

// EXTERNAL MODULE: ./node_modules/@reach/router/es/index.js + 2 modules
var es = __webpack_require__(16);

// EXTERNAL MODULE: ./node_modules/@reach/router/lib/utils.js
var utils = __webpack_require__(24);

// EXTERNAL MODULE: ./node_modules/gatsby-react-router-scroll/index.js
var gatsby_react_router_scroll = __webpack_require__(69);

// EXTERNAL MODULE: ./node_modules/domready/ready.js
var ready = __webpack_require__(70);
var ready_default = /*#__PURE__*/__webpack_require__.n(ready);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.replace.js
var es6_regexp_replace = __webpack_require__(34);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(4);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: ./.cache/loader.js + 3 modules
var loader = __webpack_require__(2);

// EXTERNAL MODULE: ./.cache/redirects.json
var redirects = __webpack_require__(71);

// EXTERNAL MODULE: ./.cache/emitter.js + 1 modules
var emitter = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/gatsby-link/index.js
var gatsby_link = __webpack_require__(35);

// CONCATENATED MODULE: ./.cache/navigation.js









 // Convert to a map for faster lookup in maybeRedirect()

var redirectMap = redirects.reduce(function (map, redirect) {
  map[redirect.fromPath] = redirect;
  return map;
}, {});

function maybeRedirect(pathname) {
  var redirect = redirectMap[pathname];

  if (redirect != null) {
    if (false) { var pageResources; }

    window.___replace(redirect.toPath);

    return true;
  } else {
    return false;
  }
}

var navigation_onPreRouteUpdate = function onPreRouteUpdate(location, prevLocation) {
  if (!maybeRedirect(location.pathname)) {
    Object(api_runner_browser["apiRunner"])("onPreRouteUpdate", {
      location: location,
      prevLocation: prevLocation
    });
  }
};

var navigation_onRouteUpdate = function onRouteUpdate(location, prevLocation) {
  if (!maybeRedirect(location.pathname)) {
    Object(api_runner_browser["apiRunner"])("onRouteUpdate", {
      location: location,
      prevLocation: prevLocation
    }); // Temp hack while awaiting https://github.com/reach/router/issues/119

    window.__navigatingToLink = false;
  }
};

var navigation_navigate = function navigate(to, options) {
  if (options === void 0) {
    options = {};
  }

  // Temp hack while awaiting https://github.com/reach/router/issues/119
  if (!options.replace) {
    window.__navigatingToLink = true;
  }

  var _parsePath = Object(gatsby_link["parsePath"])(to),
      pathname = _parsePath.pathname;

  var redirect = redirectMap[pathname]; // If we're redirecting, just replace the passed in pathname
  // to the one we want to redirect to.

  if (redirect) {
    to = redirect.toPath;
    pathname = Object(gatsby_link["parsePath"])(to).pathname;
  } // If we had a service worker update, no matter the path, reload window and
  // reset the pathname whitelist


  if (window.___swUpdated) {
    window.location = pathname;
    return;
  } // Start a timer to wait for a second before transitioning and showing a
  // loader in case resources aren't around yet.


  var timeoutId = setTimeout(function () {
    emitter["a" /* default */].emit("onDelayedLoadPageResources", {
      pathname: pathname
    });
    Object(api_runner_browser["apiRunner"])("onRouteUpdateDelayed", {
      location: window.location
    });
  }, 1000);
  loader["default"].getResourcesForPathname(pathname).then(function (pageResources) {
    Object(es["navigate"])(to, options);
    clearTimeout(timeoutId);
  });
};

function shouldUpdateScroll(prevRouterProps, _ref) {
  var _this = this;

  var location = _ref.location;
  var pathname = location.pathname,
      hash = location.hash;
  var results = Object(api_runner_browser["apiRunner"])("shouldUpdateScroll", {
    prevRouterProps: prevRouterProps,
    // `pathname` for backwards compatibility
    pathname: pathname,
    routerProps: {
      location: location
    },
    getSavedScrollPosition: function getSavedScrollPosition(args) {
      return _this._stateStorage.read(args);
    }
  });

  if (results.length > 0) {
    return results[0];
  }

  if (prevRouterProps) {
    var oldPathname = prevRouterProps.location.pathname;

    if (oldPathname === pathname) {
      // Scroll to element if it exists, if it doesn't, or no hash is provided,
      // scroll to top.
      return hash ? hash.slice(1) : [0, 0];
    }
  }

  return true;
}

function init() {
  // Temp hack while awaiting https://github.com/reach/router/issues/119
  window.__navigatingToLink = false;
  window.___loader = loader["default"];

  window.___push = function (to) {
    return navigation_navigate(to, {
      replace: false
    });
  };

  window.___replace = function (to) {
    return navigation_navigate(to, {
      replace: true
    });
  };

  window.___navigate = function (to, options) {
    return navigation_navigate(to, options);
  }; // Check for initial page-load redirect


  maybeRedirect(window.location.pathname);
} // Fire on(Pre)RouteUpdate APIs


var navigation_RouteUpdates =
/*#__PURE__*/
function (_React$Component) {
  inheritsLoose_default()(RouteUpdates, _React$Component);

  function RouteUpdates(props) {
    var _this2;

    _this2 = _React$Component.call(this, props) || this;
    navigation_onPreRouteUpdate(props.location, null);
    return _this2;
  }

  var _proto = RouteUpdates.prototype;

  _proto.componentDidMount = function componentDidMount() {
    navigation_onRouteUpdate(this.props.location, null);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState, shouldFireRouteUpdate) {
    if (shouldFireRouteUpdate) {
      navigation_onRouteUpdate(this.props.location, prevProps.location);
    }
  };

  _proto.getSnapshotBeforeUpdate = function getSnapshotBeforeUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      navigation_onPreRouteUpdate(this.props.location, prevProps.location);
      return true;
    }

    return false;
  };

  _proto.render = function render() {
    return this.props.children;
  };

  return RouteUpdates;
}(external_React_default.a.Component);

navigation_RouteUpdates.propTypes = {
  location: prop_types_default.a.object.isRequired
};

// EXTERNAL MODULE: ./.cache/page-renderer.js
var page_renderer = __webpack_require__(68);

// EXTERNAL MODULE: ./.cache/async-requires.js
var async_requires = __webpack_require__(53);
var async_requires_default = /*#__PURE__*/__webpack_require__.n(async_requires);

// CONCATENATED MODULE: ./node_modules/shallow-compare/es/index.js
// Pulled from react-compat
// https://github.com/developit/preact-compat/blob/7c5de00e7c85e2ffd011bf3af02899b63f699d3a/src/index.js#L349
function shallowDiffers(a, b) {
  for (var i in a) {
    if (!(i in b)) return true;
  }for (var _i in b) {
    if (a[_i] !== b[_i]) return true;
  }return false;
}

/* harmony default export */ var shallow_compare_es = (function (instance, nextProps, nextState) {
  return shallowDiffers(instance.props, nextProps) || shallowDiffers(instance.state, nextState);
});
// CONCATENATED MODULE: ./.cache/ensure-resources.js







var isInitialRender = true; // Pass pathname in as prop.
// component will try fetching resources. If they exist,
// will just render, else will render null.
// It will also wait for pageResources
// before propagating location change to children.

var ensure_resources_EnsureResources =
/*#__PURE__*/
function (_React$Component) {
  inheritsLoose_default()(EnsureResources, _React$Component);

  function EnsureResources(props) {
    var _this;

    _this = _React$Component.call(this) || this;
    var location = props.location;
    _this.state = {
      location: Object.assign({}, location),
      pageResources: loader["default"].getResourcesForPathnameSync(location.pathname)
    };
    return _this;
  }

  var _proto = EnsureResources.prototype;

  _proto.reloadPage = function reloadPage(prevHref) {
    // Do this, rather than simply `window.location.reload()`, so that
    // pressing the back/forward buttons work - otherwise when pressing
    // back, the browser will just change the URL and expect JS to handle
    // the change, which won't always work since it might not be a Gatsby
    // page.
    var href = window.location.href;
    window.history.replaceState({}, "", prevHref);
    window.location.replace(href);
  };

  EnsureResources.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var location = _ref.location;

    if (prevState.location !== location) {
      var pageResources = loader["default"].getResourcesForPathnameSync(location.pathname);
      return {
        pageResources: pageResources,
        location: Object.assign({}, location)
      };
    }

    return null;
  };

  _proto.hasResources = function hasResources(pageResources) {
    if (pageResources && pageResources.json) {
      return true;
    }

    if (pageResources && "production" !== "production") {
      return true;
    }

    return false;
  };

  _proto.retryResources = function retryResources(nextProps) {
    var _this2 = this;

    var pathname = nextProps.location.pathname;

    if (!loader["default"].getResourcesForPathnameSync(pathname)) {
      // Store the previous and next location before resolving resources
      var prevLocation = this.props.location;
      this.nextLocation = nextProps.location; // Page resources won't be set in cases where the browser back button
      // or forward button is pushed as we can't wait as normal for resources
      // to load before changing the page.

      loader["default"].getResourcesForPathname(pathname).then(function (pageResources) {
        // The page may have changed since we started this, in which case doesn't update
        if (_this2.nextLocation !== nextProps.location) {
          return;
        }

        if (_this2.hasResources(pageResources)) {
          _this2.setState({
            location: Object.assign({}, window.location),
            pageResources: pageResources
          });

          return;
        } // If we still don't have resources, reload the page.
        // (This won't happen on initial render, since shouldComponentUpdate
        // is only called when the component updates.)


        _this2.reloadPage(prevLocation.href);
      });
    }
  };

  _proto.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
    // Always return false if we're missing resources.
    if (!this.hasResources(nextState.pageResources)) {
      this.retryResources(nextProps);
      return false;
    } // Check if the component or json have changed.


    if (this.state.pageResources !== nextState.pageResources) {
      return true;
    }

    if (this.state.pageResources.component !== nextState.pageResources.component) {
      return true;
    }

    if (this.state.pageResources.json !== nextState.pageResources.json) {
      return true;
    } // Check if location has changed on a page using internal routing
    // via matchPath configuration.


    if (this.state.location.key !== nextState.location.key && nextState.pageResources.page && (nextState.pageResources.page.matchPath || nextState.pageResources.page.path)) {
      return true;
    }

    return shallow_compare_es(this, nextProps, nextState);
  };

  _proto.render = function render() {
    if (!this.hasResources(this.state.pageResources) && isInitialRender) {
      window.___failedResources = true; // prevent hydrating

      throw new Error("Missing resources for " + this.state.location.pathname);
    }

    isInitialRender = false;
    return this.props.children(this.state);
  };

  return EnsureResources;
}(external_React_default.a.Component);

ensure_resources_EnsureResources.propTypes = {
  location: prop_types_default.a.object.isRequired,
  pageResources: prop_types_default.a.object
};
/* harmony default export */ var ensure_resources = (ensure_resources_EnsureResources);
// CONCATENATED MODULE: ./.cache/production-app.js





var _loader$addDataPaths;














window.asyncRequires = async_requires_default.a;
window.___emitter = emitter["a" /* default */];
window.___loader = loader["default"];
loader["default"].addPagesArray([window.page]);
loader["default"].addDataPaths((_loader$addDataPaths = {}, _loader$addDataPaths[window.page.jsonName] = window.dataPath, _loader$addDataPaths));
loader["default"].addProdRequires(async_requires_default.a);
Object(loader["setApiRunnerForLoader"])(api_runner_browser["apiRunner"]);
init(); // Let the site/plugins run code very early.

Object(api_runner_browser["apiRunnerAsync"])("onClientEntry").then(function () {
  // Let plugins register a service worker. The plugin just needs
  // to return true.
  if (Object(api_runner_browser["apiRunner"])("registerServiceWorker").length > 0) {
    __webpack_require__(134);
  }

  var RouteHandler =
  /*#__PURE__*/
  function (_React$Component) {
    inheritsLoose_default()(RouteHandler, _React$Component);

    function RouteHandler() {
      return _React$Component.apply(this, arguments) || this;
    }

    var _proto = RouteHandler.prototype;

    _proto.render = function render() {
      var _this = this;

      var location = this.props.location;
      return external_React_default.a.createElement(ensure_resources, {
        location: location
      }, function (_ref) {
        var pageResources = _ref.pageResources,
            location = _ref.location;
        return external_React_default.a.createElement(navigation_RouteUpdates, {
          location: location
        }, external_React_default.a.createElement(gatsby_react_router_scroll["ScrollContext"], {
          location: location,
          shouldUpdateScroll: shouldUpdateScroll
        }, external_React_default.a.createElement(page_renderer["a" /* default */], Object.assign({}, _this.props, {
          location: location,
          pageResources: pageResources
        }, pageResources.json))));
      });
    };

    return RouteHandler;
  }(external_React_default.a.Component);

  var _window = window,
      page = _window.page,
      browserLoc = _window.location;

  if ( // Make sure the window.page object is defined
  page && // The canonical path doesn't match the actual path (i.e. the address bar)
  "" + page.path !== browserLoc.pathname && ( // ...and if matchPage is specified, it also doesn't match the actual path
  !page.matchPath || !Object(utils["match"])("" + page.matchPath, browserLoc.pathname)) && // Ignore 404 pages, since we want to keep the same URL
  page.path !== "/404.html" && !page.path.match(/^\/404\/?$/) && // Also ignore the offline shell (since when using the offline plugin, all
  // pages have this canonical path)
  !page.path.match(/^\/offline-plugin-app-shell-fallback\/?$/)) {
    Object(es["navigate"])("" + page.path + browserLoc.search + browserLoc.hash, {
      replace: true
    });
  }

  loader["default"].getResourcesForPathname(browserLoc.pathname).then(function () {
    var Root = function Root() {
      return Object(external_React_["createElement"])(es["Router"], {
        basepath: ""
      }, Object(external_React_["createElement"])(RouteHandler, {
        path: "/*"
      }));
    };

    var WrappedRoot = Object(api_runner_browser["apiRunner"])("wrapRootElement", {
      element: external_React_default.a.createElement(Root, null)
    }, external_React_default.a.createElement(Root, null), function (_ref2) {
      var result = _ref2.result;
      return {
        element: result
      };
    }).pop();

    var NewRoot = function NewRoot() {
      return WrappedRoot;
    };

    var renderer = Object(api_runner_browser["apiRunner"])("replaceHydrateFunction", undefined, external_ReactDOM_default.a.hydrate)[0];
    ready_default()(function () {
      renderer(external_React_default.a.createElement(NewRoot, null), typeof window !== "undefined" ? document.getElementById("___gatsby") : void 0, function () {
        Object(loader["postInitialRenderWork"])();
        Object(api_runner_browser["apiRunner"])("onInitialClientRender");
      });
    });
  });
});

/***/ }),
/* 136 */
/***/ (function(module, exports) {

module.exports = BizCharts;

/***/ }),
/* 137 */
/***/ (function(module, exports) {

module.exports = DataSet;

/***/ })
],[[135,10]]]);
//# sourceMappingURL=app-88190c9a97305a62703b.js.map