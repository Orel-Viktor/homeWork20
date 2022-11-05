"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var data = [undefined, 2, 3, 4, 5, 6, 7, 8];
var myFunc = function myFunc() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Error';
  for (var _len = arguments.length, myArr = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    myArr[_key - 1] = arguments[_key];
  }
  var otherArr = myArr.slice(2);
  console.log("".concat(a, "-").concat(myArr[0], "-").concat(myArr[1]));
  console.log(_objectSpread({}, otherArr));
  arguments.length < 5 ? console.log('Error') : console.log('Good Job');
};
myFunc.apply(void 0, data);