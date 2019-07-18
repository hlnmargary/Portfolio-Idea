// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"src/scss/style.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"/Users/helene/Desktop/portfolioPaule/Portfolio-Idea/assets/fonts/rajdhani/rajdhani-v8-latin-300.eot":[["rajdhani-v8-latin-300.5b0bc40e.eot","assets/fonts/rajdhani/rajdhani-v8-latin-300.eot"],"assets/fonts/rajdhani/rajdhani-v8-latin-300.eot"],"/Users/helene/Desktop/portfolioPaule/Portfolio-Idea/assets/fonts/rajdhani/rajdhani-v8-latin-300.woff2":[["rajdhani-v8-latin-300.2d2be70f.woff2","assets/fonts/rajdhani/rajdhani-v8-latin-300.woff2"],"assets/fonts/rajdhani/rajdhani-v8-latin-300.woff2"],"/Users/helene/Desktop/portfolioPaule/Portfolio-Idea/assets/fonts/rajdhani/rajdhani-v8-latin-300.woff":[["rajdhani-v8-latin-300.643e8b21.woff","assets/fonts/rajdhani/rajdhani-v8-latin-300.woff"],"assets/fonts/rajdhani/rajdhani-v8-latin-300.woff"],"/Users/helene/Desktop/portfolioPaule/Portfolio-Idea/assets/fonts/rajdhani/rajdhani-v8-latin-300.ttf":[["rajdhani-v8-latin-300.9e2f8c80.ttf","assets/fonts/rajdhani/rajdhani-v8-latin-300.ttf"],"assets/fonts/rajdhani/rajdhani-v8-latin-300.ttf"],"/Users/helene/Desktop/portfolioPaule/Portfolio-Idea/assets/fonts/rajdhani/rajdhani-v8-latin-300.svg":[["rajdhani-v8-latin-300.1b470ba9.svg","assets/fonts/rajdhani/rajdhani-v8-latin-300.svg"],"assets/fonts/rajdhani/rajdhani-v8-latin-300.svg"],"/Users/helene/Desktop/portfolioPaule/Portfolio-Idea/assets/fonts/rajdhani/rajdhani-v8-latin-regular.eot":[["rajdhani-v8-latin-regular.e7ffbd94.eot","assets/fonts/rajdhani/rajdhani-v8-latin-regular.eot"],"assets/fonts/rajdhani/rajdhani-v8-latin-regular.eot"],"/Users/helene/Desktop/portfolioPaule/Portfolio-Idea/assets/fonts/rajdhani/rajdhani-v8-latin-regular.woff2":[["rajdhani-v8-latin-regular.4e36293d.woff2","assets/fonts/rajdhani/rajdhani-v8-latin-regular.woff2"],"assets/fonts/rajdhani/rajdhani-v8-latin-regular.woff2"],"/Users/helene/Desktop/portfolioPaule/Portfolio-Idea/assets/fonts/rajdhani/rajdhani-v8-latin-regular.woff":[["rajdhani-v8-latin-regular.5a25e55c.woff","assets/fonts/rajdhani/rajdhani-v8-latin-regular.woff"],"assets/fonts/rajdhani/rajdhani-v8-latin-regular.woff"],"/Users/helene/Desktop/portfolioPaule/Portfolio-Idea/assets/fonts/rajdhani/rajdhani-v8-latin-regular.ttf":[["rajdhani-v8-latin-regular.ddae8c95.ttf","assets/fonts/rajdhani/rajdhani-v8-latin-regular.ttf"],"assets/fonts/rajdhani/rajdhani-v8-latin-regular.ttf"],"/Users/helene/Desktop/portfolioPaule/Portfolio-Idea/assets/fonts/rajdhani/rajdhani-v8-latin-regular.svg":[["rajdhani-v8-latin-regular.52fa31c5.svg","assets/fonts/rajdhani/rajdhani-v8-latin-regular.svg"],"assets/fonts/rajdhani/rajdhani-v8-latin-regular.svg"],"/Users/helene/Desktop/portfolioPaule/Portfolio-Idea/assets/fonts/rajdhani/rajdhani-v8-latin-500.eot":[["rajdhani-v8-latin-500.f426db9e.eot","assets/fonts/rajdhani/rajdhani-v8-latin-500.eot"],"assets/fonts/rajdhani/rajdhani-v8-latin-500.eot"],"/Users/helene/Desktop/portfolioPaule/Portfolio-Idea/assets/fonts/rajdhani/rajdhani-v8-latin-500.woff2":[["rajdhani-v8-latin-500.7f9e5ec5.woff2","assets/fonts/rajdhani/rajdhani-v8-latin-500.woff2"],"assets/fonts/rajdhani/rajdhani-v8-latin-500.woff2"],"/Users/helene/Desktop/portfolioPaule/Portfolio-Idea/assets/fonts/rajdhani/rajdhani-v8-latin-500.woff":[["rajdhani-v8-latin-500.4604a461.woff","assets/fonts/rajdhani/rajdhani-v8-latin-500.woff"],"assets/fonts/rajdhani/rajdhani-v8-latin-500.woff"],"/Users/helene/Desktop/portfolioPaule/Portfolio-Idea/assets/fonts/rajdhani/rajdhani-v8-latin-500.ttf":[["rajdhani-v8-latin-500.c0ee9d4e.ttf","assets/fonts/rajdhani/rajdhani-v8-latin-500.ttf"],"assets/fonts/rajdhani/rajdhani-v8-latin-500.ttf"],"/Users/helene/Desktop/portfolioPaule/Portfolio-Idea/assets/fonts/rajdhani/rajdhani-v8-latin-500.svg":[["rajdhani-v8-latin-500.79e8bb0c.svg","assets/fonts/rajdhani/rajdhani-v8-latin-500.svg"],"assets/fonts/rajdhani/rajdhani-v8-latin-500.svg"],"/Users/helene/Desktop/portfolioPaule/Portfolio-Idea/assets/fonts/rajdhani/rajdhani-v8-latin-600.eot":[["rajdhani-v8-latin-600.592d968c.eot","assets/fonts/rajdhani/rajdhani-v8-latin-600.eot"],"assets/fonts/rajdhani/rajdhani-v8-latin-600.eot"],"/Users/helene/Desktop/portfolioPaule/Portfolio-Idea/assets/fonts/rajdhani/rajdhani-v8-latin-600.woff2":[["rajdhani-v8-latin-600.472afc7d.woff2","assets/fonts/rajdhani/rajdhani-v8-latin-600.woff2"],"assets/fonts/rajdhani/rajdhani-v8-latin-600.woff2"],"/Users/helene/Desktop/portfolioPaule/Portfolio-Idea/assets/fonts/rajdhani/rajdhani-v8-latin-600.woff":[["rajdhani-v8-latin-600.9fd088cc.woff","assets/fonts/rajdhani/rajdhani-v8-latin-600.woff"],"assets/fonts/rajdhani/rajdhani-v8-latin-600.woff"],"/Users/helene/Desktop/portfolioPaule/Portfolio-Idea/assets/fonts/rajdhani/rajdhani-v8-latin-600.ttf":[["rajdhani-v8-latin-600.55126355.ttf","assets/fonts/rajdhani/rajdhani-v8-latin-600.ttf"],"assets/fonts/rajdhani/rajdhani-v8-latin-600.ttf"],"/Users/helene/Desktop/portfolioPaule/Portfolio-Idea/assets/fonts/rajdhani/rajdhani-v8-latin-600.svg":[["rajdhani-v8-latin-600.0146b473.svg","assets/fonts/rajdhani/rajdhani-v8-latin-600.svg"],"assets/fonts/rajdhani/rajdhani-v8-latin-600.svg"],"/Users/helene/Desktop/portfolioPaule/Portfolio-Idea/assets/fonts/rajdhani/rajdhani-v8-latin-700.eot":[["rajdhani-v8-latin-700.5c7bcffc.eot","assets/fonts/rajdhani/rajdhani-v8-latin-700.eot"],"assets/fonts/rajdhani/rajdhani-v8-latin-700.eot"],"/Users/helene/Desktop/portfolioPaule/Portfolio-Idea/assets/fonts/rajdhani/rajdhani-v8-latin-700.woff2":[["rajdhani-v8-latin-700.e427e9e9.woff2","assets/fonts/rajdhani/rajdhani-v8-latin-700.woff2"],"assets/fonts/rajdhani/rajdhani-v8-latin-700.woff2"],"/Users/helene/Desktop/portfolioPaule/Portfolio-Idea/assets/fonts/rajdhani/rajdhani-v8-latin-700.woff":[["rajdhani-v8-latin-700.9b46fd89.woff","assets/fonts/rajdhani/rajdhani-v8-latin-700.woff"],"assets/fonts/rajdhani/rajdhani-v8-latin-700.woff"],"/Users/helene/Desktop/portfolioPaule/Portfolio-Idea/assets/fonts/rajdhani/rajdhani-v8-latin-700.ttf":[["rajdhani-v8-latin-700.a9eaf502.ttf","assets/fonts/rajdhani/rajdhani-v8-latin-700.ttf"],"assets/fonts/rajdhani/rajdhani-v8-latin-700.ttf"],"/Users/helene/Desktop/portfolioPaule/Portfolio-Idea/assets/fonts/rajdhani/rajdhani-v8-latin-700.svg":[["rajdhani-v8-latin-700.f876bbe0.svg","assets/fonts/rajdhani/rajdhani-v8-latin-700.svg"],"assets/fonts/rajdhani/rajdhani-v8-latin-700.svg"],"/Users/helene/Desktop/portfolioPaule/Portfolio-Idea/assets/img/newyork.jpg":[["newyork.3bb04f4c.jpg","assets/img/newyork.jpg"],"assets/img/newyork.jpg"],"/Users/helene/Desktop/portfolioPaule/Portfolio-Idea/assets/img/paris.jpg":[["paris.cd31f03b.jpg","assets/img/paris.jpg"],"assets/img/paris.jpg"],"/Users/helene/Desktop/portfolioPaule/Portfolio-Idea/assets/img/rio.jpeg":[["rio.b5a0d1f0.jpeg","assets/img/rio.jpeg"],"assets/img/rio.jpeg"],"_css_loader":"../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "57633" + '/');

  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js"], null)