(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\Projects\angularCalc-master\src\main.ts */"zUnb");


/***/ }),

/***/ "A3xY":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".base {\n    background: darkslategray;\n    margin-top: 5vh;\n    border: 3px solid black;\n    width: 100%;\n}\n\n.maindisplay {\n    background: lightgrey;\n    height: 25vh;\n    padding: 5% !important;\n    font-size: 4rem;\n    text-align: right;\n    font-family: Courier, monospace;\n    overflow: auto;\n}\n\n.subdisplay {\n    border-bottom: 1px solid black;\n    height: 25%;\n    font-size: 2rem;\n    overflow: auto;\n}\n\n.keypad {\n    height: calc(200% / 3);\n}\n\n.keys {\n    margin: 0;\n    height: 20%;\n    background: whitesmoke;\n    color: black;\n    padding: 5%;\n    font-size: 2rem;\n    text-align: center;\n    cursor: pointer;\n    opacity: 0.9;\n}\n\n.keys:hover {\n    opacity: 1;\n}\n\n.ackey {\n    color: red;\n    background: black;\n}\n\n.equalkey {\n    color: white;\n    background-color: orangered; \n}\n\n.numkey {\n    color: skyblue;\n    background-color: black; \n}\n\n.opkey {\n    color: white;\n    background-color: black; \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7SUFDekIsZUFBZTtJQUNmLHVCQUF1QjtJQUN2QixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLCtCQUErQjtJQUMvQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksOEJBQThCO0lBQzlCLFdBQVc7SUFDWCxlQUFlO0lBQ2YsY0FBYztBQUNsQjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixXQUFXO0lBQ1gsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFVBQVU7SUFDVixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksY0FBYztJQUNkLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFlBQVk7SUFDWix1QkFBdUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYXNlIHtcbiAgICBiYWNrZ3JvdW5kOiBkYXJrc2xhdGVncmF5O1xuICAgIG1hcmdpbi10b3A6IDV2aDtcbiAgICBib3JkZXI6IDNweCBzb2xpZCBibGFjaztcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLm1haW5kaXNwbGF5IHtcbiAgICBiYWNrZ3JvdW5kOiBsaWdodGdyZXk7XG4gICAgaGVpZ2h0OiAyNXZoO1xuICAgIHBhZGRpbmc6IDUlICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiA0cmVtO1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIGZvbnQtZmFtaWx5OiBDb3VyaWVyLCBtb25vc3BhY2U7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi5zdWJkaXNwbGF5IHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XG4gICAgaGVpZ2h0OiAyNSU7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIG92ZXJmbG93OiBhdXRvO1xufVxuXG4ua2V5cGFkIHtcbiAgICBoZWlnaHQ6IGNhbGMoMjAwJSAvIDMpO1xufVxuXG4ua2V5cyB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGhlaWdodDogMjAlO1xuICAgIGJhY2tncm91bmQ6IHdoaXRlc21va2U7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIHBhZGRpbmc6IDUlO1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIG9wYWNpdHk6IDAuOTtcbn1cblxuLmtleXM6aG92ZXIge1xuICAgIG9wYWNpdHk6IDE7XG59XG5cbi5hY2tleSB7XG4gICAgY29sb3I6IHJlZDtcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcbn1cblxuLmVxdWFsa2V5IHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlcmVkOyBcbn1cblxuLm51bWtleSB7XG4gICAgY29sb3I6IHNreWJsdWU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7IFxufVxuXG4ub3BrZXkge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjazsgXG59Il19 */");

/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.css */ "A3xY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.subText = '';
        this.mainText = '';
        this.operator = '';
        this.calculationString = '';
        this.answered = false;
        this.operatorSet = false;
    }
    AppComponent.prototype.pressKey = function (key) {
        if (key === '/' || key === 'x' || key === '-' || key === '+') {
            var lastKey = this.mainText[this.mainText.length - 1];
            if (lastKey === '/' || lastKey === 'x' || lastKey === '-' || lastKey === '+') {
                this.operatorSet = true;
            }
            if ((this.operatorSet) || (this.mainText === '')) {
                return;
            }
            this.operand1 = parseFloat(this.mainText);
            this.operator = key;
            this.operatorSet = true;
        }
        if (this.mainText.length === 10) {
            return;
        }
        this.mainText += key;
    };
    AppComponent.prototype.allClear = function () {
        this.mainText = '';
        this.subText = '';
        this.operatorSet = false;
    };
    AppComponent.prototype.getAnswer = function () {
        this.calculationString = this.mainText;
        this.operand2 = parseFloat(this.mainText.split(this.operator)[1]);
        if (this.operator === '/') {
            this.subText = this.mainText;
            this.mainText = (this.operand1 / this.operand2).toString();
            this.subText = this.calculationString;
            if (this.mainText.length > 9) {
                this.mainText = this.mainText.substr(0, 9);
            }
        }
        else if (this.operator === 'x') {
            this.subText = this.mainText;
            this.mainText = (this.operand1 * this.operand2).toString();
            this.subText = this.calculationString;
            if (this.mainText.length > 9) {
                this.mainText = 'ERROR';
                this.subText = 'Range Exceeded';
            }
        }
        else if (this.operator === '-') {
            this.subText = this.mainText;
            this.mainText = (this.operand1 - this.operand2).toString();
            this.subText = this.calculationString;
        }
        else if (this.operator === '+') {
            this.subText = this.mainText;
            this.mainText = (this.operand1 + this.operand2).toString();
            this.subText = this.calculationString;
            if (this.mainText.length > 9) {
                this.mainText = 'ERROR';
                this.subText = 'Range Exceeded';
            }
        }
        else {
            this.subText = 'ERROR: Invalid Operation';
        }
        this.answered = true;
    };
    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-root',
            template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_app_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-4\"></div>\n    <div class=\"col-md-4\">\n      <div class=\"base\">\n        <div class=\"maindisplay\">\n          <div class=\"subdisplay\">{{ subText }}</div>\n          {{ mainText }}\n        </div>\n        <div class=\"keypad\">\n          <table style=\"width: 100%;\">\n            <tr>\n              <td class=\"keys ackey\" colspan=\"3\" (click)=\"allClear()\">AC</td>\n              <td class=\"keys opkey\" colspan=\"1\" (click)=\"pressKey('/')\">/</td>\n            </tr>\n            <tr>\n              <td class=\"keys numkey\" (click)=\"pressKey('7')\">7</td>  \n              <td class=\"keys numkey\" (click)=\"pressKey('8')\">8</td>\n              <td class=\"keys numkey\" (click)=\"pressKey('9')\">9</td>  \n              <td class=\"keys opkey\" (click)=\"pressKey('x')\">x</td>\n            </tr>\n            <tr>\n              <td class=\"keys numkey\" (click)=\"pressKey('4')\">4</td>  \n              <td class=\"keys numkey\" (click)=\"pressKey('5')\">5</td>\n              <td class=\"keys numkey\" (click)=\"pressKey('6')\">6</td>  \n              <td class=\"keys opkey\" (click)=\"pressKey('-')\">-</td>\n            </tr>\n            <tr>\n              <td class=\"keys numkey\" (click)=\"pressKey('3')\">3</td>  \n              <td class=\"keys numkey\" (click)=\"pressKey('2')\">2</td>\n              <td class=\"keys numkey\" (click)=\"pressKey('1')\">1</td>  \n              <td class=\"keys opkey\" (click)=\"pressKey('+')\">+</td>\n            </tr>\n            <tr>\n              <td colspan=\"2\" class=\"keys numkey\" (click)=\"pressKey('0')\">0</td>\n              <td class=\"keys numkey\" (click)=\"pressKey('.')\">.</td>  \n              <td class=\"keys equalkey\" (click)=\"getAnswer()\">=</td>\n            </tr>\n          </table>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-4\"></div>\n  </div>\n</div>");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "crnd":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "crnd";

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map