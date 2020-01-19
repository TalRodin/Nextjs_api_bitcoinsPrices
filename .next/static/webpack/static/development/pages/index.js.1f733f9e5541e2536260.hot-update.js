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
        }, this.props.bpi.USD.code), __jsx("strong", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 11
          },
          __self: this
        }, this.props.bpi.USD.rate));
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
        }, this.props.bpi.GBP.code), __jsx("strong", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 15
          },
          __self: this
        }, this.props.bpi.GBP.rate));
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
        }, this.props.bpi.EUR.rate));
      }

      return __jsx("div", {
        className: "jsx-1555331656",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, __jsx("ul", {
        className: "jsx-1555331656",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, list), __jsx("br", {
        className: "jsx-1555331656",
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
        className: "jsx-1555331656",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, __jsx("option", {
        value: "USD",
        className: "jsx-1555331656",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, "USD"), __jsx("option", {
        value: "GBP",
        className: "jsx-1555331656",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, "GBP"), __jsx("option", {
        value: "EUR",
        className: "jsx-1555331656",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, "EUR")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "1555331656",
        __self: this
      }, "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbHlvbmFyb2Rpbi9EZXNrdG9wL2JpdHdlYi9jb21wb25lbnRzL1ByaWNlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQ2lCIiwiZmlsZSI6Ii9Vc2Vycy9hbHlvbmFyb2Rpbi9EZXNrdG9wL2JpdHdlYi9jb21wb25lbnRzL1ByaWNlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFByaWNlcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgICBzdGF0ZT17XG4gICAgICAgIGN1cnJlbmN5OidVU0QnXG4gICAgfVxuXG4gICAgcmVuZGVyKCl7XG4gICAgICAgbGV0IGxpc3QgPSAnJztcbiAgICAgICBpZih0aGlzLnN0YXRlLmN1cnJlbmN5ID09PSAnVVNEJyl7XG4gICAgICAgICAgIGxpc3QgPSA8bGk+XG4gICAgICAgICAgIEJpdGNvaW4gcmF0ZSBmb3Ige3RoaXMucHJvcHMuYnBpLlVTRC5kZXNjcmlwdGlvbn06PHNwYW4+e3RoaXMucHJvcHMuYnBpLlVTRC5jb2RlfTwvc3Bhbj5cbiAgICAgICAgICAgPHN0cm9uZz57dGhpcy5wcm9wcy5icGkuVVNELnJhdGV9PC9zdHJvbmc+PC9saT5cbiAgICAgICB9ZWxzZSBpZih0aGlzLnN0YXRlLmN1cnJlbmN5ID09PSAnR0JQJyl7XG4gICAgICAgICAgICBsaXN0ID0gPGxpPlxuICAgICAgICAgICAgQml0Y29pbiByYXRlIGZvciB7dGhpcy5wcm9wcy5icGkuR0JQLmRlc2NyaXB0aW9ufTo8c3Bhbj57dGhpcy5wcm9wcy5icGkuR0JQLmNvZGV9PC9zcGFuPlxuICAgICAgICAgICAgPHN0cm9uZz57dGhpcy5wcm9wcy5icGkuR0JQLnJhdGV9PC9zdHJvbmc+PC9saT5cbiAgICAgICB9ZWxzZSBpZih0aGlzLnN0YXRlLmN1cnJlbmN5ID09PSAnRVVSJyl7XG4gICAgICAgICAgICBsaXN0ID0gPGxpPlxuICAgICAgICAgICAgQml0Y29pbiByYXRlIGZvciB7dGhpcy5wcm9wcy5icGkuRVVSLmRlc2NyaXB0aW9ufTo8c3Bhbj4ge3RoaXMucHJvcHMuYnBpLkVVUi5jb2RlfTwvc3Bhbj5cbiAgICAgICAgICAgIDxzdHJvbmc+e3RoaXMucHJvcHMuYnBpLkVVUi5yYXRlfTwvc3Ryb25nPjwvbGk+XG4gICAgICAgfVxuICAgICAgIHJldHVybiggXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAge2xpc3R9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgIDxzZWxlY3Qgb25DaGFuZ2U9e2U9PnRoaXMuc2V0U3RhdGUoe2N1cnJlbmN5OmUudGFyZ2V0LnZhbHVlfSl9PlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9J1VTRCc+VVNEPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nR0JQJz5HQlA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSdFVVInPkVVUjwvb3B0aW9uPlxuICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAgICAgIHtgdWx7XG5cbiAgICAgICAgICAgICAgICB9YFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDwvZGl2PilcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBQcmljZXMiXX0= */\n/*@ sourceURL=/Users/alyonarodin/Desktop/bitweb/components/Prices.js */"));
    }
  }]);

  return Prices;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Prices);

/***/ })

})
//# sourceMappingURL=index.js.1f733f9e5541e2536260.hot-update.js.map