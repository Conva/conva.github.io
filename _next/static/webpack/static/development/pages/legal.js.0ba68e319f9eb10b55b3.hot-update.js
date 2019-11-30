webpackHotUpdate("static/development/pages/legal.js",{

/***/ "./components/page.tsx":
/*!*****************************!*\
  !*** ./components/page.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "./node_modules/@material-ui/core/esm/CssBaseline/index.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hideAppBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hideAppBar */ "./components/hideAppBar.tsx");
var _jsxFileName = "/Users/afshawnlotfi/Desktop/app.conva.website/components/page.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;





var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])(function () {
  return {
    footer: {
      marginTop: "7vh",
      textAlign: "center"
    },
    container: {
      display: "flex",
      flexDirection: "column"
    }
  };
});

var PageComponent = function PageComponent(_ref) {
  var title = _ref.title,
      children = _ref.children,
      _ref$showFooter = _ref.showFooter,
      showFooter = _ref$showFooter === void 0 ? false : _ref$showFooter,
      _ref$disableHide = _ref.disableHide,
      disableHide = _ref$disableHide === void 0 ? true : _ref$disableHide;
  var classes = useStyles();
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "Conva - " + title)), __jsx(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }), __jsx(_hideAppBar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    disableHide: disableHide,
    inverted: false,
    homeButton: {
      title: "Conva",
      path: "/"
    },
    buttons: [{
      title: "Legal",
      path: "/legal"
    }, {
      title: "About",
      path: "/about"
    }, {
      title: "Contact",
      path: "/contact"
    }],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, children), __jsx("footer", {
    className: classes.footer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, showFooter ? __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Fade"], {
    timeout: 1000,
    "in": showFooter,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    variant: "caption",
    component: "h3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "\xA9 Conva LLC. All Rights Reserved")) : null));
};

/* harmony default export */ __webpack_exports__["default"] = (PageComponent);

/***/ })

})
//# sourceMappingURL=legal.js.0ba68e319f9eb10b55b3.hot-update.js.map