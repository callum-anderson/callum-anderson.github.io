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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/numbers_app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/helpers/pub_sub.js":
/*!********************************!*\
  !*** ./src/helpers/pub_sub.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const PubSub = {\n  publish: function (channel, payload) {\n    const event = new CustomEvent(channel, {\n      detail: payload\n    });\n    document.dispatchEvent(event);\n  },\n\n  subscribe: function (channel, callback) {\n    document.addEventListener(channel, callback);\n  }\n};\n\nmodule.exports = PubSub;\n\n\n//# sourceURL=webpack:///./src/helpers/pub_sub.js?");

/***/ }),

/***/ "./src/helpers/xhr_request.js":
/*!************************************!*\
  !*** ./src/helpers/xhr_request.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const Request = function(url) {\n  this.url = url;\n};\n\nRequest.prototype.get = function () {\n  return fetch(this.url)\n    .then((response) => response.json());\n};\n\nmodule.exports = Request;\n\n\n\n\n\n\n\n// Just hit http://numbersapi.com/number/type to get a plain text response, where\n//\n// type is one of trivia, math, date, or year. Defaults to trivia if omitted.\n// number is\n// an integer, or\n// the keyword random, for which we will try to return a random available fact, or\n// a day of year in the form month/day (eg. 2/29, 1/09, 04/1), if type is date\n// ranges of numbers\n\n\n//# sourceURL=webpack:///./src/helpers/xhr_request.js?");

/***/ }),

/***/ "./src/models/numbers.js":
/*!*******************************!*\
  !*** ./src/models/numbers.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./src/helpers/pub_sub.js\");\nconst Request = __webpack_require__(/*! ../helpers/xhr_request.js */ \"./src/helpers/xhr_request.js\");\n\nconst Numbers = function() {\n  this.data = null;\n  this.url = 'http://numbersapi.com/';\n};\n\nNumbers.prototype.bindEvents = function () {\n  PubSub.subscribe('Numbers:number-selected', (e) => {\n    publishNumber(e.detail, this.url, 'trivia');\n  });\n  PubSub.subscribe('Numbers:year-selected', (e) => {\n    publishNumber(e.detail, this.url, 'year');\n  });\n  PubSub.subscribe('Numbers:date-selected', (e) => {\n    const dateValue = `${e.detail.month.value}/${e.detail.day.value}`;\n    publishNumber(dateValue, this.url, 'date');\n  });\n  PubSub.subscribe('Numbers:random-selected', (e) => {\n    publishNumber('random', this.url, 'trivia');\n  });\n};\n\nfunction publishNumber(number, url, type) {\n    const urlString = url + `${number}/${type}?json`;\n    const request = new Request(urlString);\n    request.get().then((data) => {\n      if (data.type === 'date') {\n        data.number = convertDaysToDayMonth(data.number);\n      }\n      PubSub.publish('Numbers:number-ready', data);\n    });\n};\n\nfunction convertDaysToDayMonth(daysValue) {\n  const dayCount = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335, 366];\n  for (i=0; i<dayCount.length; i++) {\n    if (daysValue<=dayCount[i+1]-dayCount[i]) {\n      daysValue = [daysValue, i+1];\n      break;\n    };\n    daysValue -= dayCount[i+1]-dayCount[i];\n  }\n  daysValue = daysValue.join(' / ');\n  return daysValue;\n}\n\nmodule.exports = Numbers;\n\n\n//# sourceURL=webpack:///./src/models/numbers.js?");

/***/ }),

/***/ "./src/numbers_app.js":
/*!****************************!*\
  !*** ./src/numbers_app.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ./helpers/pub_sub.js */ \"./src/helpers/pub_sub.js\");\nconst Request = __webpack_require__(/*! ./helpers/xhr_request.js */ \"./src/helpers/xhr_request.js\");\nconst Numbers = __webpack_require__(/*! ./models/numbers.js */ \"./src/models/numbers.js\");\nconst NumberSelect = __webpack_require__(/*! ./views/number_select.js */ \"./src/views/number_select.js\");\nconst YearSelect = __webpack_require__(/*! ./views/year_select.js */ \"./src/views/year_select.js\");\nconst DateSelect = __webpack_require__(/*! ./views/date_select.js */ \"./src/views/date_select.js\");\nconst RandomSelect = __webpack_require__(/*! ./views/random_select.js */ \"./src/views/random_select.js\");\nconst NumbersOutput = __webpack_require__(/*! ./views/numbers_output.js */ \"./src/views/numbers_output.js\");\n\ndocument.addEventListener('DOMContentLoaded', () => {\n\n  const numbersArea = document.querySelector('main');\n  const numbersOutput = new NumbersOutput(numbersArea);\n  numbersOutput.bindEvents();\n\n  const numbers = new Numbers();\n  numbers.bindEvents();\n\n  const numberForm = document.querySelector('#number-form');\n  const numberSelect = new NumberSelect(numberForm);\n  numberSelect.bindEvents();\n\n  const yearForm = document.querySelector('#year-form');\n  const yearSelect = new YearSelect(yearForm);\n  yearSelect.bindEvents();\n\n  const dateForm = document.querySelector('#date-form');\n  const dateSelect = new DateSelect(dateForm);\n  dateSelect.bindEvents();\n\n  const randomForm = document.querySelector('#random-form');\n  const randomSelect = new RandomSelect(randomForm);\n  randomSelect.bindEvents();\n\n});\n\n\n//# sourceURL=webpack:///./src/numbers_app.js?");

/***/ }),

/***/ "./src/views/date_select.js":
/*!**********************************!*\
  !*** ./src/views/date_select.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./src/helpers/pub_sub.js\");\n\nconst DateSelect = function(inputForm) {\n  this.inputForm = inputForm;\n};\nDateSelect.prototype.bindEvents = function () {\n      this.inputForm.addEventListener('submit', (e) => {\n      e.preventDefault();\n      PubSub.publish('Numbers:date-selected', e.target);\n    });\n};\n\nmodule.exports = DateSelect;\n\n\n//# sourceURL=webpack:///./src/views/date_select.js?");

/***/ }),

/***/ "./src/views/number_select.js":
/*!************************************!*\
  !*** ./src/views/number_select.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./src/helpers/pub_sub.js\");\n\nconst NumberSelect = function(inputForm) {\n  this.inputForm = inputForm;\n};\nNumberSelect.prototype.bindEvents = function () {\n  this.inputForm.addEventListener('submit', (e) => {\n    e.preventDefault();\n    PubSub.publish('Numbers:number-selected', e.target.number.value);\n  });\n};\n\nmodule.exports = NumberSelect;\n\n\n//# sourceURL=webpack:///./src/views/number_select.js?");

/***/ }),

/***/ "./src/views/numbers_output.js":
/*!*************************************!*\
  !*** ./src/views/numbers_output.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./src/helpers/pub_sub.js\");\n\nconst NumbersOutput = function(container_div) {\n  this.containerDiv = container_div;\n};\nNumbersOutput.prototype.bindEvents = function () {\n  PubSub.subscribe('Numbers:number-ready', (e) => {\n    clearOutput(this.containerDiv);\n    const numberText = document.createElement('p');\n    numberText.textContent = e.detail.text;\n    this.containerDiv.appendChild(numberText);\n    let times = (n) => {while (n-- > 0) randBackground(this.containerDiv, e.detail.number);}\n    times(20);\n  });\n};\n\nfunction clearOutput(element) {\n  while (element.firstChild) {\n    element.removeChild(element.firstChild);\n  }\n}\n\nrandBackground = function(element, number) {\n  const randNumber = document.createElement('span');\n  randNumber.classList.add(\"random-number\");\n  randNumber.textContent = number;\n  const rand = Array(3).fill().map(() => Math.floor(Math.random()*10+1));\n  randNumber.style.fontSize = rand[0]/2 + 'em';\n  randNumber.style.color = 'rgba('+rand[0]*20+','+rand[1]*20+','+rand[2]*20+','+rand[0]/10+')';\n  randNumber.style.top = (rand[1]+2)*40 + '%';\n  randNumber.style.left = rand[2]*8 + '%';\n  element.appendChild(randNumber);\n}\n\nmodule.exports = NumbersOutput;\n\n\n//# sourceURL=webpack:///./src/views/numbers_output.js?");

/***/ }),

/***/ "./src/views/random_select.js":
/*!************************************!*\
  !*** ./src/views/random_select.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./src/helpers/pub_sub.js\");\n\nconst RandomSelect = function(inputForm) {\n  this.inputForm = inputForm;\n};\nRandomSelect.prototype.bindEvents = function () {\n      this.inputForm.addEventListener('submit', (e) => {\n      e.preventDefault();\n      PubSub.publish('Numbers:random-selected', e.target);\n    });\n};\n\nmodule.exports = RandomSelect;\n\n\n//# sourceURL=webpack:///./src/views/random_select.js?");

/***/ }),

/***/ "./src/views/year_select.js":
/*!**********************************!*\
  !*** ./src/views/year_select.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./src/helpers/pub_sub.js\");\n\nconst YearSelect = function(inputForm) {\n  this.inputForm = inputForm;\n};\nYearSelect.prototype.bindEvents = function () {\n      this.inputForm.addEventListener('submit', (e) => {\n      e.preventDefault();\n      PubSub.publish('Numbers:year-selected', e.target.year.value);\n    });\n};\n\nmodule.exports = YearSelect;\n\n\n//# sourceURL=webpack:///./src/views/year_select.js?");

/***/ })

/******/ });