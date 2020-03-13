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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("let tableHeros = document.getElementById('table');\nlet btnLink = document.querySelector('#button'); //button of short link\n//link with the API that we will consume\n//https://api.github.com/repos/italosilva01/chaordic--front-end--challenge/git/blobs/169214b4abe0ff3ad647288091b95991aee83e89 \n//https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json\n\nlet requestURL = 'https://api.github.com/repos/italosilva01/chaordic--front-end--challenge/git/blobs/169214b4abe0ff3ad647288091b95991aee83e89';\nlet request = new XMLHttpRequest();\nrequest.open('GET', requestURL, true);\nrequest.setRequestHeader('Accept', 'application/vnd.github.v3.raw');\nrequest.responseType = 'json';\nrequest.send();\n\nrequest.onload = () => {\n  console.log(\"helo\");\n  console.log(request.response); //when the requisition is loaded\n\n  let topHits = request.response; //Guard the requisition\n\n  let size = 5; //takes the amount of vector elements\n\n  getHeros(topHits, size);\n};\n\nfunction getHeros(result, size = 0) {\n  console.log(result[0].url);\n\n  for (let i = 0; i < size; i++) {\n    //moving on in the array\n    let name = result[i].url; //catch the name of heros\n\n    let tableTr = document.createElement('tr');\n    let tableTd = document.createElement('td');\n    let tableTdnumbres = document.createElement('td'); //creating row and table cells\n\n    tableTd.classList.add('link-table');\n    tableTdnumbres.classList.add('number-table'); //adding class in the table cell\n\n    tableTd.appendChild(document.createTextNode(name));\n    tableTdnumbres.appendChild(document.createTextNode(result[i].hits)); //putting name as a child element of the cell\n\n    tableTr.appendChild(tableTd);\n    tableTr.appendChild(tableTdnumbres); //putting cell as a child element of the row \n\n    tableHeros.appendChild(tableTr); //putting row as a child element of the table\n  }\n}\n\nbtnLink.onclick = () => {//function \n};\n\n//# sourceURL=webpack:///./js/main.js?");

/***/ })

/******/ });