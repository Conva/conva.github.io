webpackHotUpdate("static/development/pages/appstore.js",{

/***/ "./pages/appstore.tsx":
/*!****************************!*\
  !*** ./pages/appstore.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_app_stores__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/app-stores */ "./utils/app-stores.ts");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/utils */ "./utils/utils.ts");
var _jsxFileName = "/Users/afshawnlotfi/Desktop/app.conva.website/pages/appstore.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var AppStoreComponent = function AppStoreComponent() {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    // @ts-ignore
    var md = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["getMobileOperatingSystem"])();

    if (md === "ios") {
      // @ts-ignore
      window.location = _utils_app_stores__WEBPACK_IMPORTED_MODULE_1__["AppStoreLink"];
    } else {
      // @ts-ignore
      window.location = _utils_app_stores__WEBPACK_IMPORTED_MODULE_1__["GooglePlayLink"];
    }
  }, []);
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  });
};

/* harmony default export */ __webpack_exports__["default"] = (AppStoreComponent);

/***/ })

})
//# sourceMappingURL=appstore.js.6a7968a1471527547412.hot-update.js.map