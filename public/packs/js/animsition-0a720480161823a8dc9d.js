/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/animsition.min.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/animsition.min.js":
/*!************************************************!*\
  !*** ./app/javascript/packs/animsition.min.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * animsition v4.0.2
 * A simple and easy jQuery plugin for CSS animated page transitions.
 * http://blivesta.github.io/animsition
 * License : MIT
 * Author : blivesta (http://blivesta.com/)
 */
!function (t) {
  "use strict";

   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [!(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(function (t) {
  "use strict";

  var n = "animsition",
      i = {
    init: function init(a) {
      a = t.extend({
        inClass: "fade-in",
        outClass: "fade-out",
        inDuration: 1500,
        outDuration: 800,
        linkElement: ".animsition-link",
        loading: !0,
        loadingParentElement: "body",
        loadingClass: "animsition-loading",
        loadingInner: "",
        timeout: !1,
        timeoutCountdown: 5e3,
        onLoadEvent: !0,
        browser: ["animation-duration", "-webkit-animation-duration"],
        overlay: !1,
        overlayClass: "animsition-overlay-slide",
        overlayParentElement: "body",
        transition: function transition(t) {
          window.location.href = t;
        }
      }, a), i.settings = {
        timer: !1,
        data: {
          inClass: "animsition-in-class",
          inDuration: "animsition-in-duration",
          outClass: "animsition-out-class",
          outDuration: "animsition-out-duration",
          overlay: "animsition-overlay"
        },
        events: {
          inStart: "animsition.inStart",
          inEnd: "animsition.inEnd",
          outStart: "animsition.outStart",
          outEnd: "animsition.outEnd"
        }
      };
      var o = i.supportCheck.call(this, a);
      if (!o && a.browser.length > 0 && (!o || !this.length)) return "console" in window || (window.console = {}, window.console.log = function (t) {
        return t;
      }), this.length || console.log("Animsition: Element does not exist on page."), o || console.log("Animsition: Does not support this browser."), i.destroy.call(this);
      var e = i.optionCheck.call(this, a);
      return e && t("." + a.overlayClass).length <= 0 && i.addOverlay.call(this, a), a.loading && t("." + a.loadingClass).length <= 0 && i.addLoading.call(this, a), this.each(function () {
        var o = this,
            e = t(this),
            s = t(window),
            r = t(document),
            l = e.data(n);
        l || (a = t.extend({}, a), e.data(n, {
          options: a
        }), a.timeout && i.addTimer.call(o), a.onLoadEvent && s.on("load." + n, function () {
          i.settings.timer && clearTimeout(i.settings.timer), i["in"].call(o);
        }), s.on("pageshow." + n, function (t) {
          t.originalEvent.persisted && i["in"].call(o);
        }), s.on("unload." + n, function () {}), r.on("click." + n, a.linkElement, function (n) {
          n.preventDefault();
          var a = t(this),
              e = a.attr("href");
          2 === n.which || n.metaKey || n.shiftKey || -1 !== navigator.platform.toUpperCase().indexOf("WIN") && n.ctrlKey ? window.open(e, "_blank") : i.out.call(o, a, e);
        }));
      });
    },
    addOverlay: function addOverlay(n) {
      t(n.overlayParentElement).prepend('<div class="' + n.overlayClass + '"></div>');
    },
    addLoading: function addLoading(n) {
      t(n.loadingParentElement).append('<div class="' + n.loadingClass + '">' + n.loadingInner + "</div>");
    },
    removeLoading: function removeLoading() {
      var i = t(this),
          a = i.data(n).options,
          o = t(a.loadingParentElement).children("." + a.loadingClass);
      o.fadeOut().remove();
    },
    addTimer: function addTimer() {
      var a = this,
          o = t(this),
          e = o.data(n).options;
      i.settings.timer = setTimeout(function () {
        i["in"].call(a), t(window).off("load." + n);
      }, e.timeoutCountdown);
    },
    supportCheck: function supportCheck(n) {
      var i = t(this),
          a = n.browser,
          o = a.length,
          e = !1;
      0 === o && (e = !0);

      for (var s = 0; o > s; s++) {
        if ("string" == typeof i.css(a[s])) {
          e = !0;
          break;
        }
      }

      return e;
    },
    optionCheck: function optionCheck(n) {
      var a,
          o = t(this);
      return a = n.overlay || o.data(i.settings.data.overlay) ? !0 : !1;
    },
    animationCheck: function animationCheck(i, a, o) {
      var e = t(this),
          s = e.data(n).options,
          r = typeof i,
          l = !a && "number" === r,
          d = a && "string" === r && i.length > 0;
      return l || d ? i = i : a && o ? i = s.inClass : !a && o ? i = s.inDuration : a && !o ? i = s.outClass : a || o || (i = s.outDuration), i;
    },
    "in": function _in() {
      var a = this,
          o = t(this),
          e = o.data(n).options,
          s = o.data(i.settings.data.inDuration),
          r = o.data(i.settings.data.inClass),
          l = i.animationCheck.call(a, s, !1, !0),
          d = i.animationCheck.call(a, r, !0, !0),
          u = i.optionCheck.call(a, e),
          c = o.data(n).outClass;
      e.loading && i.removeLoading.call(a), c && o.removeClass(c), u ? i.inOverlay.call(a, d, l) : i.inDefault.call(a, d, l);
    },
    inDefault: function inDefault(n, a) {
      var o = t(this);
      o.css({
        "animation-duration": a + "ms"
      }).addClass(n).trigger(i.settings.events.inStart).animateCallback(function () {
        o.removeClass(n).css({
          opacity: 1
        }).trigger(i.settings.events.inEnd);
      });
    },
    inOverlay: function inOverlay(a, o) {
      var e = t(this),
          s = e.data(n).options;
      e.css({
        opacity: 1
      }).trigger(i.settings.events.inStart), t(s.overlayParentElement).children("." + s.overlayClass).css({
        "animation-duration": o + "ms"
      }).addClass(a).animateCallback(function () {
        e.trigger(i.settings.events.inEnd);
      });
    },
    out: function out(a, o) {
      var e = this,
          s = t(this),
          r = s.data(n).options,
          l = a.data(i.settings.data.outClass),
          d = s.data(i.settings.data.outClass),
          u = a.data(i.settings.data.outDuration),
          c = s.data(i.settings.data.outDuration),
          m = l ? l : d,
          g = u ? u : c,
          f = i.animationCheck.call(e, m, !0, !1),
          v = i.animationCheck.call(e, g, !1, !1),
          h = i.optionCheck.call(e, r);
      s.data(n).outClass = f, h ? i.outOverlay.call(e, f, v, o) : i.outDefault.call(e, f, v, o);
    },
    outDefault: function outDefault(a, o, e) {
      var s = t(this),
          r = s.data(n).options;
      s.css({
        "animation-duration": o + 1 + "ms"
      }).addClass(a).trigger(i.settings.events.outStart).animateCallback(function () {
        s.trigger(i.settings.events.outEnd), r.transition(e);
      });
    },
    outOverlay: function outOverlay(a, o, e) {
      var s = this,
          r = t(this),
          l = r.data(n).options,
          d = r.data(i.settings.data.inClass),
          u = i.animationCheck.call(s, d, !0, !0);
      t(l.overlayParentElement).children("." + l.overlayClass).css({
        "animation-duration": o + 1 + "ms"
      }).removeClass(u).addClass(a).trigger(i.settings.events.outStart).animateCallback(function () {
        r.trigger(i.settings.events.outEnd), l.transition(e);
      });
    },
    destroy: function destroy() {
      return this.each(function () {
        var i = t(this);
        t(window).off("." + n), i.css({
          opacity: 1
        }).removeData(n);
      });
    }
  };
  t.fn.animateCallback = function (n) {
    var i = "animationend webkitAnimationEnd";
    return this.each(function () {
      var a = t(this);
      a.on(i, function () {
        return a.off(i), n.call(this);
      });
    });
  }, t.fn.animsition = function (a) {
    return i[a] ? i[a].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof a && a ? void t.error("Method " + a + " does not exist on jQuery." + n) : i.init.apply(this, arguments);
  };
});

/***/ })

/******/ });
//# sourceMappingURL=animsition-0a720480161823a8dc9d.js.map