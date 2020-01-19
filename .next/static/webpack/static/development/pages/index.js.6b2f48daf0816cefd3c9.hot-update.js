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
            lineNumber: 9
          },
          __self: this
        }, "Bitcoin rate for ", this.props.bpi.USD.description, ":", __jsx("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 10
          },
          __self: this
        }, " ", this.props.bpi.USD.code), __jsx("strong", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 11
          },
          __self: this
        }, "   ", this.props.bpi.USD.rate));
      } else if (this.state.currency === 'GBP') {
        list = __jsx("li", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 13
          },
          __self: this
        }, "Bitcoin rate for ", this.props.bpi.GBP.description, ":", __jsx("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 14
          },
          __self: this
        }, " ", this.props.bpi.GBP.code), __jsx("strong", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 15
          },
          __self: this
        }, "   ", this.props.bpi.GBP.rate));
      } else if (this.state.currency === 'EUR') {
        list = __jsx("li", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 17
          },
          __self: this
        }, "Bitcoin rate for ", this.props.bpi.EUR.description, ":", __jsx("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 18
          },
          __self: this
        }, " ", this.props.bpi.EUR.code), __jsx("strong", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 19
          },
          __self: this
        }, "   ", this.props.bpi.EUR.rate));
      }

      return __jsx("div", {
        className: "jsx-3211891463",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, __jsx("ul", {
        className: "jsx-3211891463",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, list), __jsx("br", {
        className: "jsx-3211891463",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }), __jsx("select", {
        onChange: function onChange(e) {
          return _this2.setState({
            currency: e.target.value
          });
        },
        className: "jsx-3211891463",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, __jsx("option", {
        value: "USD",
        className: "jsx-3211891463",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, "USD"), __jsx("option", {
        value: "GBP",
        className: "jsx-3211891463",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, "GBP"), __jsx("option", {
        value: "EUR",
        className: "jsx-3211891463",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, "EUR")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "3211891463",
        __self: this
      }, "ul.jsx-3211891463{color:#424242;margin-left:25%;margin-top:2%;}select.jsx-3211891463{width:100px;height:50px;border-radius:20px;background:linear-gradient(145deg,#fff,#eeeeee);box-shadow:7px 7px 12px #424242,-7px -7px 12px #bdbdbd;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbHlvbmFyb2Rpbi9EZXNrdG9wL2JpdHdlYi9jb21wb25lbnRzL1ByaWNlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQ2lCLEFBRWtDLEFBS0YsWUFDQSxFQUxLLFVBTUUsTUFMSixhQU1tQyxDQUxyRCwrQ0FNNEQsdURBQzVEIiwiZmlsZSI6Ii9Vc2Vycy9hbHlvbmFyb2Rpbi9EZXNrdG9wL2JpdHdlYi9jb21wb25lbnRzL1ByaWNlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFByaWNlcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgICBzdGF0ZT17XG4gICAgICAgIGN1cnJlbmN5OidVU0QnXG4gICAgfVxuXG4gICAgcmVuZGVyKCl7XG4gICAgICAgbGV0IGxpc3QgPSAnJztcbiAgICAgICBpZih0aGlzLnN0YXRlLmN1cnJlbmN5ID09PSAnVVNEJyl7XG4gICAgICAgICAgIGxpc3QgPSA8bGk+XG4gICAgICAgICAgIEJpdGNvaW4gcmF0ZSBmb3Ige3RoaXMucHJvcHMuYnBpLlVTRC5kZXNjcmlwdGlvbn06PHNwYW4+IHt0aGlzLnByb3BzLmJwaS5VU0QuY29kZX08L3NwYW4+XG4gICAgICAgICAgIDxzdHJvbmc+ICAge3RoaXMucHJvcHMuYnBpLlVTRC5yYXRlfTwvc3Ryb25nPjwvbGk+XG4gICAgICAgfWVsc2UgaWYodGhpcy5zdGF0ZS5jdXJyZW5jeSA9PT0gJ0dCUCcpe1xuICAgICAgICAgICAgbGlzdCA9IDxsaT5cbiAgICAgICAgICAgIEJpdGNvaW4gcmF0ZSBmb3Ige3RoaXMucHJvcHMuYnBpLkdCUC5kZXNjcmlwdGlvbn06PHNwYW4+IHt0aGlzLnByb3BzLmJwaS5HQlAuY29kZX08L3NwYW4+XG4gICAgICAgICAgICA8c3Ryb25nPiAgIHt0aGlzLnByb3BzLmJwaS5HQlAucmF0ZX08L3N0cm9uZz48L2xpPlxuICAgICAgIH1lbHNlIGlmKHRoaXMuc3RhdGUuY3VycmVuY3kgPT09ICdFVVInKXtcbiAgICAgICAgICAgIGxpc3QgPSA8bGk+XG4gICAgICAgICAgICBCaXRjb2luIHJhdGUgZm9yIHt0aGlzLnByb3BzLmJwaS5FVVIuZGVzY3JpcHRpb259OjxzcGFuPiB7dGhpcy5wcm9wcy5icGkuRVVSLmNvZGV9PC9zcGFuPlxuICAgICAgICAgICAgPHN0cm9uZz4gICB7dGhpcy5wcm9wcy5icGkuRVVSLnJhdGV9PC9zdHJvbmc+PC9saT5cbiAgICAgICB9XG4gICAgICAgcmV0dXJuKCBcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICB7bGlzdH1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgPHNlbGVjdCBvbkNoYW5nZT17ZT0+dGhpcy5zZXRTdGF0ZSh7Y3VycmVuY3k6ZS50YXJnZXQudmFsdWV9KX0+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nVVNEJz5VU0Q8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSdHQlAnPkdCUDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9J0VVUic+RVVSPC9vcHRpb24+XG4gICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICAgICAge2B1bHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IzQyNDI0MjtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDI1JTtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMiU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNlbGVjdHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6MTAwcHg7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDo1MHB4O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOjIwcHg7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNDVkZWcsICNmZmYsI2VlZWVlZSk7XG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDdweCA3cHggMTJweCAjNDI0MjQyLCAtN3B4IC03cHggMTJweCAjYmRiZGJkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPC9kaXY+KVxuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IFByaWNlcyJdfQ== */\n/*@ sourceURL=/Users/alyonarodin/Desktop/bitweb/components/Prices.js */"));
    }
  }]);

  return Prices;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Prices);

/***/ })

})
//# sourceMappingURL=index.js.6b2f48daf0816cefd3c9.hot-update.js.map