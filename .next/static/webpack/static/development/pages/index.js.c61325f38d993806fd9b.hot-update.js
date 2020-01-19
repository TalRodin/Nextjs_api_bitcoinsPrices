webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Prices.js":
/*!******************************!*\
  !*** ./components/Prices.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);







var _jsxFileName = "/Users/alyonarodin/Desktop/bitweb/components/Prices.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

var Prices =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Prices, _React$Component);

  function Prices() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Prices);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Prices)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      currency: 'USD'
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Prices, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var list = '';

      if (this.state.currency === 'USD') {
        list = __jsx("li", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 8
          },
          __self: this
        }, "Bitcoin rate for ", this.props.bpi.USD.description, ":", __jsx("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 8
          },
          __self: this
        }, " ", this.props.bpi.USD.code), __jsx("strong", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 9
          },
          __self: this
        }, "   ", this.props.bpi.USD.rate));
      } else if (this.state.currency === 'GBP') {
        list = __jsx("li", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 11
          },
          __self: this
        }, "Bitcoin rate for ", this.props.bpi.GBP.description, ":", __jsx("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 11
          },
          __self: this
        }, " ", this.props.bpi.GBP.code), __jsx("strong", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 12
          },
          __self: this
        }, "   ", this.props.bpi.GBP.rate));
      } else if (this.state.currency === 'EUR') {
        list = __jsx("li", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 14
          },
          __self: this
        }, "Bitcoin rate for ", this.props.bpi.EUR.description, ":", __jsx("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 14
          },
          __self: this
        }, " ", this.props.bpi.EUR.code), __jsx("strong", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 15
          },
          __self: this
        }, "   ", this.props.bpi.EUR.rate));
      }

      return __jsx("div", {
        className: "jsx-617493040",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, __jsx("ul", {
        className: "jsx-617493040",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, list), __jsx("br", {
        className: "jsx-617493040",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }), __jsx("select", {
        onChange: function onChange(e) {
          return _this2.setState({
            currency: e.target.value
          });
        },
        className: "jsx-617493040",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, __jsx("option", {
        value: "USD",
        className: "jsx-617493040",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, "USD"), __jsx("option", {
        value: "GBP",
        className: "jsx-617493040",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, "GBP"), __jsx("option", {
        value: "EUR",
        className: "jsx-617493040",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, "EUR")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "617493040",
        __self: this
      }, "ul.jsx-617493040{color:#424242;margin-left:25%;margin-top:2%;}select.jsx-617493040{margin-left:35%;width:100px;height:50px;border-radius:20px;background-color:#fff;box-shadow:9px 9px 16px rgb(66,66,66,0.6),-9px -9px 16px rgba(255,255,255,0.5);border:none;outline:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbHlvbmFyb2Rpbi9EZXNrdG9wL2JpdHdlYi9jb21wb25lbnRzL1ByaWNlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0QmlCLEFBRWtDLEFBS0UsY0FKQyxFQUtMLFlBQ0EsRUFMRyxVQU1JLElBTHRCLGVBTXlCLHNCQUN1RCwrRUFDaEUsWUFDQSxhQUNoQiIsImZpbGUiOiIvVXNlcnMvYWx5b25hcm9kaW4vRGVza3RvcC9iaXR3ZWIvY29tcG9uZW50cy9QcmljZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBQcmljZXMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG4gICAgc3RhdGU9e1xuICAgICAgICBjdXJyZW5jeTonVVNEJ1xuICAgIH1cbiAgICByZW5kZXIoKXtcbiAgICAgICBsZXQgbGlzdCA9ICcnO1xuICAgICAgIGlmKHRoaXMuc3RhdGUuY3VycmVuY3kgPT09ICdVU0QnKXtcbiAgICAgICAgICAgbGlzdCA9IDxsaT5CaXRjb2luIHJhdGUgZm9yIHt0aGlzLnByb3BzLmJwaS5VU0QuZGVzY3JpcHRpb259OjxzcGFuPiB7dGhpcy5wcm9wcy5icGkuVVNELmNvZGV9PC9zcGFuPlxuICAgICAgICAgICA8c3Ryb25nPiAgIHt0aGlzLnByb3BzLmJwaS5VU0QucmF0ZX08L3N0cm9uZz48L2xpPlxuICAgICAgIH1lbHNlIGlmKHRoaXMuc3RhdGUuY3VycmVuY3kgPT09ICdHQlAnKXtcbiAgICAgICAgICAgIGxpc3QgPSA8bGk+Qml0Y29pbiByYXRlIGZvciB7dGhpcy5wcm9wcy5icGkuR0JQLmRlc2NyaXB0aW9ufTo8c3Bhbj4ge3RoaXMucHJvcHMuYnBpLkdCUC5jb2RlfTwvc3Bhbj5cbiAgICAgICAgICAgIDxzdHJvbmc+ICAge3RoaXMucHJvcHMuYnBpLkdCUC5yYXRlfTwvc3Ryb25nPjwvbGk+XG4gICAgICAgfWVsc2UgaWYodGhpcy5zdGF0ZS5jdXJyZW5jeSA9PT0gJ0VVUicpe1xuICAgICAgICAgICAgbGlzdCA9IDxsaT5CaXRjb2luIHJhdGUgZm9yIHt0aGlzLnByb3BzLmJwaS5FVVIuZGVzY3JpcHRpb259OjxzcGFuPiB7dGhpcy5wcm9wcy5icGkuRVVSLmNvZGV9PC9zcGFuPlxuICAgICAgICAgICAgPHN0cm9uZz4gICB7dGhpcy5wcm9wcy5icGkuRVVSLnJhdGV9PC9zdHJvbmc+PC9saT5cbiAgICAgICB9XG4gICAgICAgcmV0dXJuKCBcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICB7bGlzdH1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgPHNlbGVjdCBvbkNoYW5nZT17ZT0+dGhpcy5zZXRTdGF0ZSh7Y3VycmVuY3k6ZS50YXJnZXQudmFsdWV9KX0+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nVVNEJz5VU0Q8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSdHQlAnPkdCUDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9J0VVUic+RVVSPC9vcHRpb24+XG4gICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICAgICAge2B1bHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IzQyNDI0MjtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDI1JTtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMiU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNlbGVjdHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6MzUlO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDoxMDBweDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OjUwcHg7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6MjBweDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojZmZmO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogOXB4IDlweCAxNnB4IHJnYig2NiwgNjYsIDY2LDAuNiksIC05cHggLTlweCAxNnB4ICByZ2JhKDI1NSwyNTUsMjU1LCAwLjUpO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIG91dGxpbmU6bm9uZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDwvZGl2PilcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBQcmljZXMiXX0= */\n/*@ sourceURL=/Users/alyonarodin/Desktop/bitweb/components/Prices.js */"));
    }
  }]);

  return Prices;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Prices);

/***/ })

})
//# sourceMappingURL=index.js.c61325f38d993806fd9b.hot-update.js.map