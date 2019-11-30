webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/page */ "./components/page.tsx");
/* harmony import */ var _utils_app_stores__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/app-stores */ "./utils/app-stores.ts");
var _jsxFileName = "/Users/afshawnlotfi/Desktop/app.conva.website/pages/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2__["createElement"];






var useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function () {
  return {
    topImg: {
      position: "absolute"
    },
    bottomImg: {
      width: 269.1,
      height: 532.8
    },
    imageIcon: {
      width: 158.625,
      height: 47.8125
    },
    iconRoot: {
      textAlign: "center"
    }
  };
});

var IndexPage = function IndexPage() {
  var classes = useStyles();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      phoneLoad = _useState[0],
      changePhoneLoad = _useState[1];

  return __jsx(_components_page__WEBPACK_IMPORTED_MODULE_3__["default"], {
    showFooter: true,
    title: "Conva - Home",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Grow"], {
    onEntered: function onEntered() {
      return changePhoneLoad(true);
    },
    timeout: 1000,
    "in": true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx("div", {
    style: {
      display: "flex",
      alignItems: "center",
      marginTop: "2vh",
      justifyContent: "center"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx("div", {
    style: {
      width: "100"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx("img", {
    src: __webpack_require__(/*! ../assets/imgs/final.png */ "./assets/imgs/final.png"),
    className: classes.bottomImg,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Fade"], {
    timeout: 1000,
    "in": phoneLoad,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx("div", {
    style: {
      textAlign: "center",
      marginTop: 20
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Link"], {
    href: _utils_app_stores__WEBPACK_IMPORTED_MODULE_4__["AppStoreLink"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Icon"], {
    classes: {
      root: classes.iconRoot
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, __jsx("img", {
    className: classes.imageIcon,
    src: __webpack_require__(/*! ../assets/imgs/app-store.svg */ "./assets/imgs/app-store.svg"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Link"], {
    href: _utils_app_stores__WEBPACK_IMPORTED_MODULE_4__["GooglePlayLink"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Icon"], {
    classes: {
      root: classes.iconRoot
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, __jsx("img", {
    className: classes.imageIcon,
    src: __webpack_require__(/*! ../assets/imgs/google-play.png */ "./assets/imgs/google-play.png"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

/***/ })

})
//# sourceMappingURL=index.js.e9d53149d023c0ec9224.hot-update.js.map