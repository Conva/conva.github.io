webpackHotUpdate("static/development/pages/appstore.js",{

/***/ "./utils/utils.ts":
/*!************************!*\
  !*** ./utils/utils.ts ***!
  \************************/
/*! exports provided: getMobileOperatingSystem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMobileOperatingSystem", function() { return getMobileOperatingSystem; });
/**
 * Determine the mobile operating system.
 * This function returns one of 'iOS', 'Android', 'Windows Phone', or 'unknown'.
 *
 * @returns {String}
 */
var getMobileOperatingSystem = function getMobileOperatingSystem() {
  // @ts-ignore
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;

  if (/android/i.test(userAgent)) {
    return "android";
  } // iOS detection from: http://stackoverflow.com/a/9039885/177710


  if (/iPad|iPhone|iPod/.test(userAgent)) {
    return "ios";
  }

  return "unknown";
};

/***/ })

})
//# sourceMappingURL=appstore.js.1bdcd11bfdf6791e7661.hot-update.js.map