(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Emoji = exports.EmojiCollection = undefined;

	var _values = __webpack_require__(1);

	var _values2 = _interopRequireDefault(_values);

	var _classCallCheck2 = __webpack_require__(36);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(37);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _Emoji = __webpack_require__(41);

	var _Emoji2 = _interopRequireDefault(_Emoji);

	var _EmojiCollection = __webpack_require__(45);

	var _EmojiCollection2 = _interopRequireDefault(_EmojiCollection);

	var _EmojiDefinitions = __webpack_require__(52);

	var _EmojiDefinitions2 = _interopRequireDefault(_EmojiDefinitions);

	var _apple_supported_characters = __webpack_require__(53);

	var _apple_supported_characters2 = _interopRequireDefault(_apple_supported_characters);

	var _noto_supported_characters = __webpack_require__(54);

	var _noto_supported_characters2 = _interopRequireDefault(_noto_supported_characters);

	var _twemoji_supported_characters = __webpack_require__(55);

	var _twemoji_supported_characters2 = _interopRequireDefault(_twemoji_supported_characters);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Somemoji = function () {
	  function Somemoji() {
	    (0, _classCallCheck3.default)(this, Somemoji);
	  }

	  (0, _createClass3.default)(Somemoji, null, [{
	    key: 'emojiCollection',

	    // @return [Somemoji::EmojiCollection] an emoji collection including all emojis
	    // @example
	    //   Somemoji.emoji_collection.class #=> Somemoji::EmojiCollection
	    //   Somemoji.emoji_collection.count #=> 1794
	    //   Somemoji.emoji_collection.first.class #=> Somemoji::Emoji
	    get: function get() {
	      if (this.__emojiCollection === undefined) {
	        this.__emojiCollection = new _EmojiCollection2.default(this.emojis);
	      }
	      return this.__emojiCollection;
	    }
	  }, {
	    key: 'appleEmojiCollection',
	    get: function get() {
	      var _this = this;

	      if (this.__appleEmojiCollection === undefined) {
	        var appleEmojis = _apple_supported_characters2.default.map(function (character) {
	          return _this.emojiCollection.findByCharacter(character);
	        });
	        this.__appleEmojiCollection = new _EmojiCollection2.default(appleEmojis);
	      }
	      return this.__appleEmojiCollection;
	    }
	  }, {
	    key: 'emojiOneEmojiCollection',
	    get: function get() {
	      return this.__emojiCollection;
	    }
	  }, {
	    key: 'notoEmojiCollection',
	    get: function get() {
	      var _this2 = this;

	      if (this.__notoEmojiCollection === undefined) {
	        var notoEmojis = _noto_supported_characters2.default.map(function (character) {
	          return _this2.emojiCollection.findByCharacter(character);
	        });
	        this.__notoEmojiCollection = new _EmojiCollection2.default(notoEmojis);
	      }
	      return this.__notoEmojiCollection;
	    }
	  }, {
	    key: 'twemojiEmojiCollection',
	    get: function get() {
	      var _this3 = this;

	      if (this.__twemojiEmojiCollection === undefined) {
	        var twemojiEmojis = _twemoji_supported_characters2.default.map(function (character) {
	          return _this3.emojiCollection.findByCharacter(character);
	        });
	        this.__twemojiEmojiCollection = new _EmojiCollection2.default(twemojiEmojis);
	      }
	      return this.__twemojiEmojiCollection;
	    }

	    // @return [Array<Object>]

	  }, {
	    key: 'emojiDefinitions',
	    get: function get() {
	      return _EmojiDefinitions2.default;
	    }

	    // @return [Array<Somemoji.Emoji>]

	  }, {
	    key: 'emojis',
	    get: function get() {
	      return (0, _values2.default)(this.emojiDefinitions).map(function (def) {
	        var emoji = new _Emoji2.default(def);
	        return emoji;
	      });
	    }
	  }]);
	  return Somemoji;
	}();

	exports.default = Somemoji;
	exports.EmojiCollection = _EmojiCollection2.default;
	exports.Emoji = _Emoji2.default;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(2), __esModule: true };

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(3);
	module.exports = __webpack_require__(6).Object.values;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-object-values-entries
	var $export = __webpack_require__(4)
	  , $values = __webpack_require__(19)(false);

	$export($export.S, 'Object', {
	  values: function values(it){
	    return $values(it);
	  }
	});

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(5)
	  , core      = __webpack_require__(6)
	  , ctx       = __webpack_require__(7)
	  , hide      = __webpack_require__(9)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE]
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(a, b, c){
	        if(this instanceof C){
	          switch(arguments.length){
	            case 0: return new C;
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if(IS_PROTO){
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 5 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 6 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(8);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(10)
	  , createDesc = __webpack_require__(18);
	module.exports = __webpack_require__(14) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(11)
	  , IE8_DOM_DEFINE = __webpack_require__(13)
	  , toPrimitive    = __webpack_require__(17)
	  , dP             = Object.defineProperty;

	exports.f = __webpack_require__(14) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(12);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(14) && !__webpack_require__(15)(function(){
	  return Object.defineProperty(__webpack_require__(16)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(15)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(12)
	  , document = __webpack_require__(5).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(12);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(20)
	  , toIObject = __webpack_require__(23)
	  , isEnum    = __webpack_require__(35).f;
	module.exports = function(isEntries){
	  return function(it){
	    var O      = toIObject(it)
	      , keys   = getKeys(O)
	      , length = keys.length
	      , i      = 0
	      , result = []
	      , key;
	    while(length > i)if(isEnum.call(O, key = keys[i++])){
	      result.push(isEntries ? [key, O[key]] : O[key]);
	    } return result;
	  };
	};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(21)
	  , enumBugKeys = __webpack_require__(34);

	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(22)
	  , toIObject    = __webpack_require__(23)
	  , arrayIndexOf = __webpack_require__(27)(false)
	  , IE_PROTO     = __webpack_require__(31)('IE_PROTO');

	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },
/* 22 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(24)
	  , defined = __webpack_require__(26);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(25);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 25 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 26 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(23)
	  , toLength  = __webpack_require__(28)
	  , toIndex   = __webpack_require__(30);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(29)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 29 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(29)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(32)('keys')
	  , uid    = __webpack_require__(33);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(5)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 33 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 34 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 35 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 36 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;

	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _defineProperty = __webpack_require__(38);

	var _defineProperty2 = _interopRequireDefault(_defineProperty);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
	    }
	  }

	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	}();

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(39), __esModule: true };

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(40);
	var $Object = __webpack_require__(6).Object;
	module.exports = function defineProperty(it, key, desc){
	  return $Object.defineProperty(it, key, desc);
	};

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(4);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(14), 'Object', {defineProperty: __webpack_require__(10).f});

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _fromCodePoint = __webpack_require__(42);

	var _fromCodePoint2 = _interopRequireDefault(_fromCodePoint);

	var _classCallCheck2 = __webpack_require__(36);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(37);

	var _createClass3 = _interopRequireDefault(_createClass2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Emoji = function () {
	  function Emoji(_ref) {
	    var _ref$aliases = _ref.aliases,
	        aliases = _ref$aliases === undefined ? null : _ref$aliases,
	        _ref$ascii_arts = _ref.ascii_arts,
	        ascii_arts = _ref$ascii_arts === undefined ? null : _ref$ascii_arts,
	        _ref$category = _ref.category,
	        category = _ref$category === undefined ? null : _ref$category,
	        _ref$code = _ref.code,
	        code = _ref$code === undefined ? '' : _ref$code,
	        _ref$code_points = _ref.code_points,
	        code_points = _ref$code_points === undefined ? null : _ref$code_points,
	        _ref$keywords = _ref.keywords,
	        keywords = _ref$keywords === undefined ? null : _ref$keywords,
	        _ref$name = _ref.name,
	        name = _ref$name === undefined ? null : _ref$name;
	    (0, _classCallCheck3.default)(this, Emoji);

	    this.aliases = aliases || [];
	    this.asciiArts = ascii_arts || []; // eslint-disable-line camelcase
	    this.category = category;
	    this.code = code;
	    this.codePoints = code_points || []; // eslint-disable-line camelcase
	    this.keywords = keywords || [];
	    this.name = name;
	  }

	  // @return [Array<String>]


	  (0, _createClass3.default)(Emoji, [{
	    key: 'abbreviatedCodePoints',
	    value: function abbreviatedCodePoints() {
	      return this.codePoints.map(function (codePoint) {
	        return !('200D' <= codePoint && codePoint <= 'FE0F');
	      });
	    }
	    // @return [String]

	  }, {
	    key: 'basePath',
	    value: function basePath() {
	      if (this.codePoints.length === 0) {
	        return this.code;
	      } else {
	        if (this.codePoints[0].length < 4) {
	          this.codePoints[0] = ('0000' + this.codePoints[0]).slice(-4);
	        }
	        return 'unicode/' + this.codePoints.join('-');
	      }
	    }

	    // @return [String, null] a String representation from its code points

	  }, {
	    key: 'character',
	    value: function character() {
	      if (this.codePoints.length !== 0) {
	        return this.codePoints.map(function (codePoint) {
	          return (0, _fromCodePoint2.default)(parseInt(codePoint, 16));
	        }).join('');
	      }
	      return null;
	    }

	    // @return [Hash{Symbol => Object}]

	  }, {
	    key: 'toObject',
	    value: function toObject() {
	      return {
	        aliases: this.aliases,
	        asciiArts: this.asciiArts,
	        category: this.category,
	        code: this.code,
	        codePoints: this.codePoints,
	        keywords: this.keywords,
	        name: this.name
	      };
	    }
	  }]);
	  return Emoji;
	}();

	exports.default = Emoji;

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(43), __esModule: true };

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(44);
	module.exports = __webpack_require__(6).String.fromCodePoint;

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	var $export        = __webpack_require__(4)
	  , toIndex        = __webpack_require__(30)
	  , fromCharCode   = String.fromCharCode
	  , $fromCodePoint = String.fromCodePoint;

	// length should be 1, old FF problem
	$export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
	  // 21.1.2.2 String.fromCodePoint(...codePoints)
	  fromCodePoint: function fromCodePoint(x){ // eslint-disable-line no-unused-vars
	    var res  = []
	      , aLen = arguments.length
	      , i    = 0
	      , code;
	    while(aLen > i){
	      code = +arguments[i++];
	      if(toIndex(code, 0x10ffff) !== code)throw RangeError(code + ' is not a valid code point');
	      res.push(code < 0x10000
	        ? fromCharCode(code)
	        : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00)
	      );
	    } return res.join('');
	  }
	});

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _keys = __webpack_require__(46);

	var _keys2 = _interopRequireDefault(_keys);

	var _classCallCheck2 = __webpack_require__(36);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(37);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _escapeStringRegexp = __webpack_require__(51);

	var _escapeStringRegexp2 = _interopRequireDefault(_escapeStringRegexp);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var EmojiCollection = function () {
	  function EmojiCollection() {
	    var emojis = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	    (0, _classCallCheck3.default)(this, EmojiCollection);

	    this.emojis = emojis;
	    return this;
	  }

	  (0, _createClass3.default)(EmojiCollection, [{
	    key: 'addEmojiCollection',
	    value: function addEmojiCollection(emojiCollection) {
	      return new EmojiCollection(this.emojis.concat(emojiCollection.emojis));
	    }
	  }, {
	    key: 'filterByCategory',
	    value: function filterByCategory(category) {
	      var newEmojis = this.emojis.filter(function (emoji) {
	        return category === emoji.category;
	      });
	      return new EmojiCollection(newEmojis);
	    }
	  }, {
	    key: 'filterByKeyword',
	    value: function filterByKeyword(keyword) {
	      var newEmojis = this.emojis.filter(function (emoji) {
	        return emoji.keywords.some(function (emojiKeyword) {
	          return keyword === emojiKeyword;
	        });
	      });
	      return new EmojiCollection(newEmojis);
	    }
	  }, {
	    key: 'findByCharacter',
	    value: function findByCharacter(character) {
	      return this.indexByCharacter[character];
	    }
	  }, {
	    key: 'findByCode',
	    value: function findByCode(code) {
	      return this.indexByCode[code];
	    }
	  }, {
	    key: 'replaceCharacter',
	    value: function replaceCharacter(string, callback) {
	      var _this = this;

	      return string.replace(this.characterPattern, function (match) {
	        return callback(_this.findByCharacter(match));
	      });
	    }
	  }, {
	    key: 'replaceCode',
	    value: function replaceCode(str, callback) {
	      var _this2 = this;

	      return str.replace(this.codePattern, function (match, p1) {
	        return callback(_this2.findByCode(p1));
	      });
	    }
	  }, {
	    key: 'searchByCode',
	    value: function searchByCode(pattern) {
	      var newEmojis = this.emojis.filter(function (emoji) {
	        return pattern.test(emoji.code) || emoji.aliases.some(function (aliasCode) {
	          return pattern.test(aliasCode);
	        });
	      });
	      return new EmojiCollection(newEmojis);
	    }
	  }, {
	    key: 'characterPattern',
	    get: function get() {
	      return new RegExp(this.characters.map(_escapeStringRegexp2.default).join('|'));
	    }
	  }, {
	    key: 'characters',
	    get: function get() {
	      return (0, _keys2.default)(this.indexByCharacter);
	    }
	  }, {
	    key: 'codePattern',
	    get: function get() {
	      if (this.__codePattern === undefined) {
	        this.__codePattern = new RegExp(':(' + this.code.map(function (code) {
	          return (0, _escapeStringRegexp2.default)(code);
	        }).join('|') + '):', 'g');
	      }
	      return this.__codePattern;
	    }
	  }, {
	    key: 'code',
	    get: function get() {
	      return (0, _keys2.default)(this.indexByCode);
	    }
	  }, {
	    key: 'indexByCharacter',
	    get: function get() {
	      if (this.__indexByCharacter === undefined) {
	        this.__indexByCharacter = this.emojis.reduce(function (obj, emoji) {
	          obj[emoji.character()] = emoji;
	          return obj;
	        }, {});
	      }
	      return this.__indexByCharacter;
	    }
	  }, {
	    key: 'indexByCode',
	    get: function get() {
	      if (this.__indexByCode === undefined) {
	        this.__indexByCode = this.emojis.reduce(function (obj, emoji) {
	          obj[emoji.code] = emoji;
	          emoji.aliases.forEach(function (aliasCode) {
	            obj[aliasCode] = emoji;
	          });
	          return obj;
	        }, {});
	      }
	      return this.__indexByCode;
	    }
	  }]);
	  return EmojiCollection;
	}();

	exports.default = EmojiCollection;

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(47), __esModule: true };

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(48);
	module.exports = __webpack_require__(6).Object.keys;

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(49)
	  , $keys    = __webpack_require__(20);

	__webpack_require__(50)('keys', function(){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(26);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(4)
	  , core    = __webpack_require__(6)
	  , fails   = __webpack_require__(15);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 51 */
/***/ function(module, exports) {

	'use strict';

	var matchOperatorsRe = /[|\\{}()[\]^$+*?.]/g;

	module.exports = function (str) {
		if (typeof str !== 'string') {
			throw new TypeError('Expected a string');
		}

		return str.replace(matchOperatorsRe, '\\$&');
	};


/***/ },
/* 52 */
/***/ function(module, exports) {

	module.exports = {
		"100": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "100",
			"code_points": [
				"1f4af"
			],
			"keywords": [
				"100",
				"a",
				"exam",
				"numbers",
				"parties",
				"percent",
				"perfect",
				"plus",
				"quiz",
				"school",
				"score",
				"symbol",
				"test",
				"win",
				"wow"
			],
			"name": "hundred points symbol"
		},
		"1234": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "1234",
			"code_points": [
				"1f522"
			],
			"keywords": [
				"blue-square",
				"numbers",
				"symbol"
			],
			"name": "input symbol for numbers"
		},
		"8ball": {
			"aliases": [],
			"ascii_arts": [],
			"category": "activity",
			"code": "8ball",
			"code_points": [
				"1f3b1"
			],
			"keywords": [
				"ball",
				"billiards",
				"boys night",
				"cue",
				"eight ball",
				"game",
				"luck",
				"pocket ball",
				"pool",
				"sport"
			],
			"name": "billiards"
		},
		"a": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "a",
			"code_points": [
				"1f170"
			],
			"keywords": [
				"alphabet",
				"letter",
				"red-square",
				"symbol"
			],
			"name": "negative squared latin capital letter a"
		},
		"ab": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "ab",
			"code_points": [
				"1f18e"
			],
			"keywords": [
				"alphabet",
				"red-square",
				"symbol"
			],
			"name": "negative squared ab"
		},
		"abc": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "abc",
			"code_points": [
				"1f524"
			],
			"keywords": [
				"alphabet",
				"blue-square",
				"symbol"
			],
			"name": "input symbol for latin letters"
		},
		"abcd": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "abcd",
			"code_points": [
				"1f521"
			],
			"keywords": [
				"alphabet",
				"blue-square",
				"symbol"
			],
			"name": "input symbol for latin small letters"
		},
		"accept": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "accept",
			"code_points": [
				"1f251"
			],
			"keywords": [
				"agree",
				"chinese",
				"good",
				"kanji",
				"ok",
				"symbol",
				"yes"
			],
			"name": "circled ideograph accept"
		},
		"aerial_tramway": {
			"aliases": [],
			"ascii_arts": [],
			"category": "travel",
			"code": "aerial_tramway",
			"code_points": [
				"1f6a1"
			],
			"keywords": [
				"aerial",
				"cable",
				"train",
				"tram",
				"tramway",
				"transport",
				"transportation",
				"travel",
				"vehicle"
			],
			"name": "aerial tramway"
		},
		"airplane": {
			"aliases": [],
			"ascii_arts": [],
			"category": "travel",
			"code": "airplane",
			"code_points": [
				"2708",
				"fe0f"
			],
			"keywords": [
				"airbus",
				"airlines",
				"airplane",
				"airport",
				"boeing",
				"flight",
				"fly",
				"jet",
				"jumbo",
				"plane",
				"transportation",
				"travel",
				"vacation",
				"vehicle"
			],
			"name": "airplane"
		},
		"airplane_arriving": {
			"aliases": [],
			"ascii_arts": [],
			"category": "travel",
			"code": "airplane_arriving",
			"code_points": [
				"1f6ec"
			],
			"keywords": [
				"airbus",
				"airlines",
				"airport",
				"boeing",
				"flight",
				"fly",
				"jet",
				"jumbo",
				"plane",
				"transportation",
				"travel",
				"vacation",
				"vehicle"
			],
			"name": "airplane arriving"
		},
		"airplane_departure": {
			"aliases": [],
			"ascii_arts": [],
			"category": "travel",
			"code": "airplane_departure",
			"code_points": [
				"1f6eb"
			],
			"keywords": [
				"airbus",
				"airlines",
				"airport",
				"boeing",
				"flight",
				"fly",
				"jet",
				"jumbo",
				"leaving",
				"plane",
				"transportation",
				"travel",
				"vacation",
				"vehicle"
			],
			"name": "airplane departure"
		},
		"airplane_small": {
			"aliases": [
				"small_airplane"
			],
			"ascii_arts": [],
			"category": "travel",
			"code": "airplane_small",
			"code_points": [
				"1f6e9"
			],
			"keywords": [
				"airbus",
				"airlines",
				"airport",
				"boeing",
				"flight",
				"fly",
				"jet",
				"jumbo",
				"plane",
				"transportation",
				"travel",
				"vacation",
				"vehicle"
			],
			"name": "small airplane"
		},
		"alarm_clock": {
			"aliases": [],
			"ascii_arts": [],
			"category": "objects",
			"code": "alarm_clock",
			"code_points": [
				"23f0"
			],
			"keywords": [
				"object",
				"time",
				"wake"
			],
			"name": "alarm clock"
		},
		"alembic": {
			"aliases": [],
			"ascii_arts": [],
			"category": "objects",
			"code": "alembic",
			"code_points": [
				"2697"
			],
			"keywords": [
				"chemistry",
				"object",
				"science",
				"tool"
			],
			"name": "alembic"
		},
		"alien": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "alien",
			"code_points": [
				"1f47d"
			],
			"keywords": [
				"UFO",
				"alien",
				"monster",
				"paul",
				"scientology",
				"space",
				"ufo"
			],
			"name": "extraterrestrial alien"
		},
		"ambulance": {
			"aliases": [],
			"ascii_arts": [],
			"category": "travel",
			"code": "ambulance",
			"code_points": [
				"1f691"
			],
			"keywords": [
				"911",
				"ambulance",
				"assistance",
				"emergency",
				"health",
				"help",
				"medical",
				"transportation"
			],
			"name": "ambulance"
		},
		"amphora": {
			"aliases": [],
			"ascii_arts": [],
			"category": "objects",
			"code": "amphora",
			"code_points": [
				"1f3fa"
			],
			"keywords": [
				"object"
			],
			"name": "amphora"
		},
		"anchor": {
			"aliases": [],
			"ascii_arts": [],
			"category": "travel",
			"code": "anchor",
			"code_points": [
				"2693",
				"fe0f"
			],
			"keywords": [
				"anchor",
				"boat",
				"ferry",
				"harbor",
				"marina",
				"object",
				"ocean",
				"sailor",
				"ship",
				"shipyard",
				"tattoo",
				"travel",
				"vacation"
			],
			"name": "anchor"
		},
		"angel": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "angel",
			"code_points": [
				"1f47c"
			],
			"keywords": [
				"angel",
				"baby",
				"cupid",
				"diversity",
				"halo",
				"heaven",
				"jesus",
				"omg",
				"people",
				"wings"
			],
			"name": "baby angel"
		},
		"angel_tone1": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "angel_tone1",
			"code_points": [
				"1f47c",
				"1f3fb"
			],
			"keywords": [
				"cupid",
				"halo",
				"heaven",
				"jesus",
				"wings"
			],
			"name": "baby angel tone 1"
		},
		"angel_tone2": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "angel_tone2",
			"code_points": [
				"1f47c",
				"1f3fc"
			],
			"keywords": [
				"cupid",
				"halo",
				"heaven",
				"jesus",
				"wings"
			],
			"name": "baby angel tone 2"
		},
		"angel_tone3": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "angel_tone3",
			"code_points": [
				"1f47c",
				"1f3fd"
			],
			"keywords": [
				"cupid",
				"halo",
				"heaven",
				"jesus",
				"wings"
			],
			"name": "baby angel tone 3"
		},
		"angel_tone4": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "angel_tone4",
			"code_points": [
				"1f47c",
				"1f3fe"
			],
			"keywords": [
				"cupid",
				"halo",
				"heaven",
				"jesus",
				"wings"
			],
			"name": "baby angel tone 4"
		},
		"angel_tone5": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "angel_tone5",
			"code_points": [
				"1f47c",
				"1f3ff"
			],
			"keywords": [
				"cupid",
				"halo",
				"heaven",
				"jesus",
				"wings"
			],
			"name": "baby angel tone 5"
		},
		"anger": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "anger",
			"code_points": [
				"1f4a2"
			],
			"keywords": [
				"anger",
				"angry",
				"mad",
				"symbol"
			],
			"name": "anger symbol"
		},
		"anger_right": {
			"aliases": [
				"right_anger_bubble"
			],
			"ascii_arts": [],
			"category": "symbols",
			"code": "anger_right",
			"code_points": [
				"1f5ef"
			],
			"keywords": [
				"angry",
				"balloon",
				"comic",
				"communication",
				"conversation",
				"mood",
				"speech",
				"symbol",
				"talk"
			],
			"name": "right anger bubble"
		},
		"angry": {
			"aliases": [],
			"ascii_arts": [
				":@",
				">:(",
				">:-("
			],
			"category": "people",
			"code": "angry",
			"code_points": [
				"1f620"
			],
			"keywords": [
				"angry",
				"annoyed",
				"emotion",
				"face",
				"frustrated",
				"irritated",
				"livid",
				"mad",
				"smiley",
				"vexed"
			],
			"name": "angry face"
		},
		"anguished": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "anguished",
			"code_points": [
				"1f627"
			],
			"keywords": [
				"anguish",
				"distress",
				"emotion",
				"face",
				"grief",
				"misery",
				"nervous",
				"ouch",
				"pain",
				"sad",
				"smiley",
				"stunned",
				"surprised"
			],
			"name": "anguished face"
		},
		"ant": {
			"aliases": [],
			"ascii_arts": [],
			"category": "nature",
			"code": "ant",
			"code_points": [
				"1f41c"
			],
			"keywords": [
				"animal",
				"ant",
				"insect",
				"insects",
				"queen",
				"team"
			],
			"name": "ant"
		},
		"apple": {
			"aliases": [],
			"ascii_arts": [],
			"category": "food",
			"code": "apple",
			"code_points": [
				"1f34e"
			],
			"keywords": [
				"apple",
				"core",
				"creationism",
				"doctor",
				"electronics",
				"food",
				"fruit",
				"mac",
				"red",
				"school",
				"teacher"
			],
			"name": "red apple"
		},
		"aquarius": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "aquarius",
			"code_points": [
				"2652",
				"fe0f"
			],
			"keywords": [
				"aquarius",
				"astrology",
				"bearer",
				"constellation",
				"greek",
				"horoscope",
				"purple-square",
				"sign",
				"stars",
				"symbol",
				"water",
				"zodiac"
			],
			"name": "aquarius"
		},
		"aries": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "aries",
			"code_points": [
				"2648",
				"fe0f"
			],
			"keywords": [
				"aries",
				"astrology",
				"constellation",
				"greek",
				"horoscope",
				"purple-square",
				"ram",
				"sign",
				"stars",
				"symbol",
				"zodiac"
			],
			"name": "aries"
		},
		"arrow_backward": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "arrow_backward",
			"code_points": [
				"25c0",
				"fe0f"
			],
			"keywords": [
				"arrow",
				"blue-square",
				"symbol",
				"triangle"
			],
			"name": "black left-pointing triangle"
		},
		"arrow_double_down": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "arrow_double_down",
			"code_points": [
				"23ec"
			],
			"keywords": [
				"arrow",
				"blue-square",
				"symbol"
			],
			"name": "black down-pointing double triangle"
		},
		"arrow_double_up": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "arrow_double_up",
			"code_points": [
				"23eb"
			],
			"keywords": [
				"arrow",
				"blue-square",
				"symbol"
			],
			"name": "black up-pointing double triangle"
		},
		"arrow_down": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "arrow_down",
			"code_points": [
				"2b07",
				"fe0f"
			],
			"keywords": [
				"arrow",
				"blue-square",
				"symbol"
			],
			"name": "downwards black arrow"
		},
		"arrow_down_small": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "arrow_down_small",
			"code_points": [
				"1f53d"
			],
			"keywords": [
				"arrow",
				"blue-square",
				"symbol",
				"triangle"
			],
			"name": "down-pointing small red triangle"
		},
		"arrow_forward": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "arrow_forward",
			"code_points": [
				"25b6",
				"fe0f"
			],
			"keywords": [
				"arrow",
				"blue-square",
				"symbol",
				"triangle"
			],
			"name": "black right-pointing triangle"
		},
		"arrow_heading_down": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "arrow_heading_down",
			"code_points": [
				"2935",
				"fe0f"
			],
			"keywords": [
				"arrow",
				"blue-square",
				"symbol"
			],
			"name": "arrow pointing rightwards then curving downwards"
		},
		"arrow_heading_up": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "arrow_heading_up",
			"code_points": [
				"2934",
				"fe0f"
			],
			"keywords": [
				"arrow",
				"blue-square",
				"symbol"
			],
			"name": "arrow pointing rightwards then curving upwards"
		},
		"arrow_left": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "arrow_left",
			"code_points": [
				"2b05",
				"fe0f"
			],
			"keywords": [
				"arrow",
				"blue-square",
				"previous",
				"symbol"
			],
			"name": "leftwards black arrow"
		},
		"arrow_lower_left": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "arrow_lower_left",
			"code_points": [
				"2199",
				"fe0f"
			],
			"keywords": [
				"arrow",
				"blue-square",
				"symbol"
			],
			"name": "south west arrow"
		},
		"arrow_lower_right": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "arrow_lower_right",
			"code_points": [
				"2198",
				"fe0f"
			],
			"keywords": [
				"arrow",
				"blue-square",
				"symbol"
			],
			"name": "south east arrow"
		},
		"arrow_right": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "arrow_right",
			"code_points": [
				"27a1",
				"fe0f"
			],
			"keywords": [
				"arrow",
				"blue-square",
				"next",
				"symbol"
			],
			"name": "black rightwards arrow"
		},
		"arrow_right_hook": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "arrow_right_hook",
			"code_points": [
				"21aa",
				"fe0f"
			],
			"keywords": [
				"arrow",
				"blue-square",
				"symbol"
			],
			"name": "rightwards arrow with hook"
		},
		"arrow_up": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "arrow_up",
			"code_points": [
				"2b06",
				"fe0f"
			],
			"keywords": [
				"arrow",
				"blue-square",
				"symbol"
			],
			"name": "upwards black arrow"
		},
		"arrow_up_down": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "arrow_up_down",
			"code_points": [
				"2195",
				"fe0f"
			],
			"keywords": [
				"arrow",
				"blue-square",
				"symbol"
			],
			"name": "up down arrow"
		},
		"arrow_up_small": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "arrow_up_small",
			"code_points": [
				"1f53c"
			],
			"keywords": [
				"arrow",
				"blue-square",
				"symbol",
				"triangle"
			],
			"name": "up-pointing small red triangle"
		},
		"arrow_upper_left": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "arrow_upper_left",
			"code_points": [
				"2196",
				"fe0f"
			],
			"keywords": [
				"arrow",
				"blue-square",
				"symbol"
			],
			"name": "north west arrow"
		},
		"arrow_upper_right": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "arrow_upper_right",
			"code_points": [
				"2197",
				"fe0f"
			],
			"keywords": [
				"arrow",
				"blue-square",
				"symbol"
			],
			"name": "north east arrow"
		},
		"arrows_clockwise": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "arrows_clockwise",
			"code_points": [
				"1f503"
			],
			"keywords": [
				"arrow",
				"symbol",
				"sync"
			],
			"name": "clockwise downwards and upwards open circle arrows"
		},
		"arrows_counterclockwise": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "arrows_counterclockwise",
			"code_points": [
				"1f504"
			],
			"keywords": [
				"arrow",
				"blue-square",
				"symbol",
				"sync"
			],
			"name": "anticlockwise downwards and upwards open circle ar"
		},
		"art": {
			"aliases": [],
			"ascii_arts": [],
			"category": "activity",
			"code": "art",
			"code_points": [
				"1f3a8"
			],
			"keywords": [
				"art",
				"artist",
				"brush",
				"colors",
				"design",
				"draw",
				"oils",
				"paint",
				"palette",
				"pastels"
			],
			"name": "artist palette"
		},
		"articulated_lorry": {
			"aliases": [],
			"ascii_arts": [],
			"category": "travel",
			"code": "articulated_lorry",
			"code_points": [
				"1f69b"
			],
			"keywords": [
				"articulated",
				"cars",
				"delivery",
				"lorry",
				"semi",
				"transportation",
				"truck",
				"vehicle"
			],
			"name": "articulated lorry"
		},
		"asterisk": {
			"aliases": [
				"keycap_asterisk"
			],
			"ascii_arts": [],
			"category": "symbols",
			"code": "asterisk",
			"code_points": [
				"2a",
				"fe0f",
				"20e3"
			],
			"keywords": [
				"*",
				"star",
				"symbol"
			],
			"name": "keycap asterisk"
		},
		"astonished": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "astonished",
			"code_points": [
				"1f632"
			],
			"keywords": [
				"astonished",
				"emotion",
				"face",
				"omg",
				"shocked",
				"smiley",
				"surprise",
				"surprised",
				"wow",
				"xox"
			],
			"name": "astonished face"
		},
		"athletic_shoe": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "athletic_shoe",
			"code_points": [
				"1f45f"
			],
			"keywords": [
				"accessories",
				"boys night",
				"fashion",
				"shoe",
				"shoes",
				"sports"
			],
			"name": "athletic shoe"
		},
		"atm": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "atm",
			"code_points": [
				"1f3e7"
			],
			"keywords": [
				"adam",
				"atm",
				"bank",
				"blue-square",
				"cash",
				"deposit",
				"electronics",
				"financial",
				"money",
				"payday",
				"payment",
				"symbol",
				"withdrawal"
			],
			"name": "automated teller machine"
		},
		"atom": {
			"aliases": [
				"atom_symbol"
			],
			"ascii_arts": [],
			"category": "symbols",
			"code": "atom",
			"code_points": [
				"269b"
			],
			"keywords": [
				"atheist",
				"science",
				"symbol"
			],
			"name": "atom symbol"
		},
		"avocado": {
			"aliases": [],
			"ascii_arts": [],
			"category": "food",
			"code": "avocado",
			"code_points": [
				"1f951"
			],
			"keywords": [],
			"name": "avocado"
		},
		"b": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "b",
			"code_points": [
				"1f171"
			],
			"keywords": [
				"alphabet",
				"letter",
				"red-square",
				"symbol"
			],
			"name": "negative squared latin capital letter b"
		},
		"baby": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "baby",
			"code_points": [
				"1f476"
			],
			"keywords": [
				"baby",
				"boy",
				"child",
				"diversity",
				"infant",
				"people"
			],
			"name": "baby"
		},
		"baby_bottle": {
			"aliases": [],
			"ascii_arts": [],
			"category": "food",
			"code": "baby_bottle",
			"code_points": [
				"1f37c"
			],
			"keywords": [
				"baby",
				"bottle",
				"container",
				"drink",
				"food",
				"formula",
				"milk",
				"mother",
				"newborn",
				"nipple",
				"object"
			],
			"name": "baby bottle"
		},
		"baby_chick": {
			"aliases": [],
			"ascii_arts": [],
			"category": "nature",
			"code": "baby_chick",
			"code_points": [
				"1f424"
			],
			"keywords": [
				"animal",
				"baby",
				"bird",
				"chick",
				"chicken",
				"cute",
				"woman",
				"young"
			],
			"name": "baby chick"
		},
		"baby_symbol": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "baby_symbol",
			"code_points": [
				"1f6bc"
			],
			"keywords": [
				"babe",
				"baby",
				"child",
				"crawl",
				"diaper",
				"human",
				"newborn",
				"orange-square",
				"small",
				"symbol"
			],
			"name": "baby symbol"
		},
		"baby_tone1": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "baby_tone1",
			"code_points": [
				"1f476",
				"1f3fb"
			],
			"keywords": [
				"child",
				"infant",
				"toddler"
			],
			"name": "baby tone 1"
		},
		"baby_tone2": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "baby_tone2",
			"code_points": [
				"1f476",
				"1f3fc"
			],
			"keywords": [
				"child",
				"infant",
				"toddler"
			],
			"name": "baby tone 2"
		},
		"baby_tone3": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "baby_tone3",
			"code_points": [
				"1f476",
				"1f3fd"
			],
			"keywords": [
				"child",
				"infant",
				"toddler"
			],
			"name": "baby tone 3"
		},
		"baby_tone4": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "baby_tone4",
			"code_points": [
				"1f476",
				"1f3fe"
			],
			"keywords": [
				"child",
				"infant",
				"toddler"
			],
			"name": "baby tone 4"
		},
		"baby_tone5": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "baby_tone5",
			"code_points": [
				"1f476",
				"1f3ff"
			],
			"keywords": [
				"child",
				"infant",
				"toddler"
			],
			"name": "baby tone 5"
		},
		"back": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "back",
			"code_points": [
				"1f519"
			],
			"keywords": [
				"arrow",
				"symbol"
			],
			"name": "back with leftwards arrow above"
		},
		"bacon": {
			"aliases": [],
			"ascii_arts": [],
			"category": "food",
			"code": "bacon",
			"code_points": [
				"1f953"
			],
			"keywords": [
				"pig"
			],
			"name": "bacon"
		},
		"badminton": {
			"aliases": [],
			"ascii_arts": [],
			"category": "activity",
			"code": "badminton",
			"code_points": [
				"1f3f8"
			],
			"keywords": [
				"badminton",
				"game",
				"sport"
			],
			"name": "badminton racquet"
		},
		"baggage_claim": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "baggage_claim",
			"code_points": [
				"1f6c4"
			],
			"keywords": [
				"airport",
				"bag",
				"baggage",
				"blue-square",
				"luggage",
				"symbol",
				"transport",
				"travel"
			],
			"name": "baggage claim"
		},
		"balloon": {
			"aliases": [],
			"ascii_arts": [],
			"category": "objects",
			"code": "balloon",
			"code_points": [
				"1f388"
			],
			"keywords": [
				"balloon",
				"birthday",
				"celebration",
				"children",
				"float",
				"gas",
				"good",
				"helium",
				"object",
				"parties",
				"party"
			],
			"name": "balloon"
		},
		"ballot_box": {
			"aliases": [
				"ballot_box_with_ballot"
			],
			"ascii_arts": [],
			"category": "objects",
			"code": "ballot_box",
			"code_points": [
				"1f5f3"
			],
			"keywords": [
				"object",
				"office",
				"vote"
			],
			"name": "ballot box with ballot"
		},
		"ballot_box_with_check": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "ballot_box_with_check",
			"code_points": [
				"2611",
				"fe0f"
			],
			"keywords": [
				"agree",
				"ok",
				"symbol"
			],
			"name": "ballot box with check"
		},
		"bamboo": {
			"aliases": [],
			"ascii_arts": [],
			"category": "nature",
			"code": "bamboo",
			"code_points": [
				"1f38d"
			],
			"keywords": [
				"agriculture",
				"bamboo",
				"decoration",
				"farming",
				"fortune",
				"harvest",
				"longevity",
				"luck",
				"nature",
				"new",
				"pine",
				"plant",
				"prosperity",
				"spirits",
				"vegetable",
				"welcome",
				"years"
			],
			"name": "pine decoration"
		},
		"banana": {
			"aliases": [],
			"ascii_arts": [],
			"category": "food",
			"code": "banana",
			"code_points": [
				"1f34c"
			],
			"keywords": [
				"banana",
				"bunch",
				"food",
				"fruit",
				"peel",
				"penis"
			],
			"name": "banana"
		},
		"bangbang": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "bangbang",
			"code_points": [
				"203c",
				"fe0f"
			],
			"keywords": [
				"exclamation",
				"punctuation",
				"surprise",
				"symbol"
			],
			"name": "double exclamation mark"
		},
		"bank": {
			"aliases": [],
			"ascii_arts": [],
			"category": "travel",
			"code": "bank",
			"code_points": [
				"1f3e6"
			],
			"keywords": [
				"building",
				"places"
			],
			"name": "bank"
		},
		"bar_chart": {
			"aliases": [],
			"ascii_arts": [],
			"category": "objects",
			"code": "bar_chart",
			"code_points": [
				"1f4ca"
			],
			"keywords": [
				"graph",
				"office",
				"presentation",
				"stats",
				"work"
			],
			"name": "bar chart"
		},
		"barber": {
			"aliases": [],
			"ascii_arts": [],
			"category": "objects",
			"code": "barber",
			"code_points": [
				"1f488"
			],
			"keywords": [
				"hair",
				"object",
				"salon",
				"style"
			],
			"name": "barber pole"
		},
		"baseball": {
			"aliases": [],
			"ascii_arts": [],
			"category": "activity",
			"code": "baseball",
			"code_points": [
				"26be",
				"fe0f"
			],
			"keywords": [
				"MLB",
				"ball",
				"balls",
				"baseball",
				"game",
				"sport",
				"sports"
			],
			"name": "baseball"
		},
		"basketball": {
			"aliases": [],
			"ascii_arts": [],
			"category": "activity",
			"code": "basketball",
			"code_points": [
				"1f3c0"
			],
			"keywords": [
				"NBA",
				"ball",
				"balls",
				"basketball",
				"bball",
				"dribble",
				"game",
				"hoop",
				"net",
				"rip city",
				"sport",
				"sports",
				"swish"
			],
			"name": "basketball and hoop"
		},
		"basketball_player": {
			"aliases": [
				"person_with_ball"
			],
			"ascii_arts": [],
			"category": "activity",
			"code": "basketball_player",
			"code_points": [
				"26f9"
			],
			"keywords": [
				"ball",
				"basketball",
				"diversity",
				"game",
				"men",
				"sport",
				"travel"
			],
			"name": "person with ball"
		},
		"basketball_player_tone1": {
			"aliases": [
				"person_with_ball_tone1"
			],
			"ascii_arts": [],
			"category": "activity",
			"code": "basketball_player_tone1",
			"code_points": [
				"26f9",
				"1f3fb"
			],
			"keywords": [
				"ball",
				"basketball",
				"game",
				"men",
				"sport",
				"travel"
			],
			"name": "person with ball tone 1"
		},
		"basketball_player_tone2": {
			"aliases": [
				"person_with_ball_tone2"
			],
			"ascii_arts": [],
			"category": "activity",
			"code": "basketball_player_tone2",
			"code_points": [
				"26f9",
				"1f3fc"
			],
			"keywords": [
				"ball",
				"basketball",
				"game",
				"men",
				"sport",
				"travel"
			],
			"name": "person with ball tone 2"
		},
		"basketball_player_tone3": {
			"aliases": [
				"person_with_ball_tone3"
			],
			"ascii_arts": [],
			"category": "activity",
			"code": "basketball_player_tone3",
			"code_points": [
				"26f9",
				"1f3fd"
			],
			"keywords": [
				"ball",
				"basketball",
				"game",
				"men",
				"sport",
				"travel"
			],
			"name": "person with ball tone 3"
		},
		"basketball_player_tone4": {
			"aliases": [
				"person_with_ball_tone4"
			],
			"ascii_arts": [],
			"category": "activity",
			"code": "basketball_player_tone4",
			"code_points": [
				"26f9",
				"1f3fe"
			],
			"keywords": [
				"ball",
				"basketball",
				"game",
				"men",
				"sport",
				"travel"
			],
			"name": "person with ball tone 4"
		},
		"basketball_player_tone5": {
			"aliases": [
				"person_with_ball_tone5"
			],
			"ascii_arts": [],
			"category": "activity",
			"code": "basketball_player_tone5",
			"code_points": [
				"26f9",
				"1f3ff"
			],
			"keywords": [
				"ball",
				"basketball",
				"game",
				"men",
				"sport",
				"travel"
			],
			"name": "person with ball tone 5"
		},
		"bat": {
			"aliases": [],
			"ascii_arts": [],
			"category": "nature",
			"code": "bat",
			"code_points": [
				"1f987"
			],
			"keywords": [],
			"name": "bat"
		},
		"bath": {
			"aliases": [],
			"ascii_arts": [],
			"category": "activity",
			"code": "bath",
			"code_points": [
				"1f6c0"
			],
			"keywords": [
				"basin",
				"bath",
				"bathroom",
				"bubble",
				"clean",
				"diversity",
				"lather",
				"shampoo",
				"shower",
				"soak",
				"soap",
				"steam",
				"tired",
				"tub",
				"wash",
				"water"
			],
			"name": "bath"
		},
		"bath_tone1": {
			"aliases": [],
			"ascii_arts": [],
			"category": "activity",
			"code": "bath_tone1",
			"code_points": [
				"1f6c0",
				"1f3fb"
			],
			"keywords": [
				"basin",
				"bathroom",
				"bubble",
				"clean",
				"lather",
				"shampoo",
				"shower",
				"soak",
				"soap",
				"tub",
				"wash",
				"water"
			],
			"name": "bath tone 1"
		},
		"bath_tone2": {
			"aliases": [],
			"ascii_arts": [],
			"category": "activity",
			"code": "bath_tone2",
			"code_points": [
				"1f6c0",
				"1f3fc"
			],
			"keywords": [
				"basin",
				"bathroom",
				"bubble",
				"clean",
				"lather",
				"shampoo",
				"shower",
				"soak",
				"soap",
				"tub",
				"wash",
				"water"
			],
			"name": "bath tone 2"
		},
		"bath_tone3": {
			"aliases": [],
			"ascii_arts": [],
			"category": "activity",
			"code": "bath_tone3",
			"code_points": [
				"1f6c0",
				"1f3fd"
			],
			"keywords": [
				"basin",
				"bathroom",
				"bubble",
				"clean",
				"lather",
				"shampoo",
				"shower",
				"soak",
				"soap",
				"tub",
				"wash",
				"water"
			],
			"name": "bath tone 3"
		},
		"bath_tone4": {
			"aliases": [],
			"ascii_arts": [],
			"category": "activity",
			"code": "bath_tone4",
			"code_points": [
				"1f6c0",
				"1f3fe"
			],
			"keywords": [
				"basin",
				"bathroom",
				"bubble",
				"clean",
				"lather",
				"shampoo",
				"shower",
				"soak",
				"soap",
				"tub",
				"wash",
				"water"
			],
			"name": "bath tone 4"
		},
		"bath_tone5": {
			"aliases": [],
			"ascii_arts": [],
			"category": "activity",
			"code": "bath_tone5",
			"code_points": [
				"1f6c0",
				"1f3ff"
			],
			"keywords": [
				"basin",
				"bathroom",
				"bubble",
				"clean",
				"lather",
				"shampoo",
				"shower",
				"soak",
				"soap",
				"tub",
				"wash",
				"water"
			],
			"name": "bath tone 5"
		},
		"bathtub": {
			"aliases": [],
			"ascii_arts": [],
			"category": "objects",
			"code": "bathtub",
			"code_points": [
				"1f6c1"
			],
			"keywords": [
				"basin",
				"bath",
				"bathroom",
				"bubble",
				"clean",
				"lather",
				"object",
				"shampoo",
				"shower",
				"soak",
				"soap",
				"steam",
				"tired",
				"tub",
				"wash",
				"water"
			],
			"name": "bathtub"
		},
		"battery": {
			"aliases": [],
			"ascii_arts": [],
			"category": "objects",
			"code": "battery",
			"code_points": [
				"1f50b"
			],
			"keywords": [
				"energy",
				"object",
				"power",
				"sustain"
			],
			"name": "battery"
		},
		"beach": {
			"aliases": [
				"beach_with_umbrella"
			],
			"ascii_arts": [],
			"category": "travel",
			"code": "beach",
			"code_points": [
				"1f3d6"
			],
			"keywords": [
				"beach",
				"places",
				"relaxation",
				"sand",
				"sun",
				"surf",
				"swim",
				"swimming",
				"tan",
				"tanning",
				"travel",
				"tropical",
				"vacation"
			],
			"name": "beach with umbrella"
		},
		"beach_umbrella": {
			"aliases": [
				"umbrella_on_ground"
			],
			"ascii_arts": [],
			"category": "objects",
			"code": "beach_umbrella",
			"code_points": [
				"26f1"
			],
			"keywords": [
				"nature",
				"rain",
				"sun",
				"travel",
				"tropical",
				"vacation",
				"weather"
			],
			"name": "umbrella on ground"
		},
		"bear": {
			"aliases": [],
			"ascii_arts": [],
			"category": "nature",
			"code": "bear",
			"code_points": [
				"1f43b"
			],
			"keywords": [
				"animal",
				"nature",
				"roar",
				"wildlife"
			],
			"name": "bear face"
		},
		"bed": {
			"aliases": [],
			"ascii_arts": [],
			"category": "objects",
			"code": "bed",
			"code_points": [
				"1f6cf"
			],
			"keywords": [
				"full",
				"king",
				"mattress",
				"object",
				"queen",
				"sex",
				"sleep",
				"tired",
				"twin"
			],
			"name": "bed"
		},
		"bee": {
			"aliases": [
				"honeybee"
			],
			"ascii_arts": [],
			"category": "nature",
			"code": "bee",
			"code_points": [
				"1f41d"
			],
			"keywords": [
				"animal",
				"bee",
				"bumble",
				"buzz",
				"flower",
				"hive",
				"honey",
				"insect",
				"insects",
				"pollen",
				"pollination",
				"queen",
				"sting"
			],
			"name": "honeybee"
		},
		"beer": {
			"aliases": [],
			"ascii_arts": [],
			"category": "food",
			"code": "beer",
			"code_points": [
				"1f37a"
			],
			"keywords": [
				"alcohol",
				"barley",
				"beer",
				"beverage",
				"boot",
				"brewery",
				"drink",
				"drunk",
				"hops",
				"malt",
				"micro",
				"mug",
				"oregon",
				"parties",
				"party",
				"pint",
				"portland",
				"pub",
				"relax",
				"yeast"
			],
			"name": "beer mug"
		},
		"beers": {
			"aliases": [],
			"ascii_arts": [],
			"category": "food",
			"code": "beers",
			"code_points": [
				"1f37b"
			],
			"keywords": [
				"alcohol",
				"bar",
				"beer",
				"beers",
				"beverage",
				"boys night",
				"celebrate",
				"cheers",
				"clink",
				"drink",
				"drunk",
				"hops",
				"jolly",
				"mug",
				"parties",
				"party",
				"pub",
				"relax",
				"thank you",
				"toast"
			],
			"name": "clinking beer mugs"
		},
		"beetle": {
			"aliases": [],
			"ascii_arts": [],
			"category": "nature",
			"code": "beetle",
			"code_points": [
				"1f41e"
			],
			"keywords": [
				"animal",
				"beetle",
				"bug",
				"cow",
				"endearment",
				"insect",
				"insects",
				"lady",
				"lady cow",
				"ladybird",
				"ladybug",
				"nature"
			],
			"name": "lady beetle"
		},
		"beginner": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "beginner",
			"code_points": [
				"1f530"
			],
			"keywords": [
				"badge",
				"shield",
				"symbol"
			],
			"name": "japanese symbol for beginner"
		},
		"bell": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "bell",
			"code_points": [
				"1f514"
			],
			"keywords": [
				"alarm",
				"chime",
				"christmas",
				"notification",
				"object",
				"sound",
				"symbol",
				"xmas"
			],
			"name": "bell"
		},
		"bellhop": {
			"aliases": [
				"bellhop_bell"
			],
			"ascii_arts": [],
			"category": "objects",
			"code": "bellhop",
			"code_points": [
				"1f6ce"
			],
			"keywords": [
				"ding",
				"hotel",
				"object",
				"porter"
			],
			"name": "bellhop bell"
		},
		"bento": {
			"aliases": [],
			"ascii_arts": [],
			"category": "food",
			"code": "bento",
			"code_points": [
				"1f371"
			],
			"keywords": [
				"bento",
				"box",
				"convenient",
				"food",
				"japan",
				"japanese",
				"lunchbox",
				"meal",
				"obento",
				"object",
				"rice",
				"sushi"
			],
			"name": "bento box"
		},
		"bicyclist": {
			"aliases": [],
			"ascii_arts": [],
			"category": "activity",
			"code": "bicyclist",
			"code_points": [
				"1f6b4"
			],
			"keywords": [
				"bicycle",
				"bicyclist",
				"bike",
				"diversity",
				"exercise",
				"hipster",
				"men",
				"pedal",
				"road",
				"sport",
				"sports",
				"transportation",
				"workout"
			],
			"name": "bicyclist"
		},
		"bicyclist_tone1": {
			"aliases": [],
			"ascii_arts": [],
			"category": "activity",
			"code": "bicyclist_tone1",
			"code_points": [
				"1f6b4",
				"1f3fb"
			],
			"keywords": [
				"bicycle",
				"bike",
				"exercise",
				"hipster",
				"pedal",
				"road",
				"sport",
				"transportation"
			],
			"name": "bicyclist tone 1"
		},
		"bicyclist_tone2": {
			"aliases": [],
			"ascii_arts": [],
			"category": "activity",
			"code": "bicyclist_tone2",
			"code_points": [
				"1f6b4",
				"1f3fc"
			],
			"keywords": [
				"bicycle",
				"bike",
				"exercise",
				"hipster",
				"pedal",
				"road",
				"sport",
				"transportation"
			],
			"name": "bicyclist tone 2"
		},
		"bicyclist_tone3": {
			"aliases": [],
			"ascii_arts": [],
			"category": "activity",
			"code": "bicyclist_tone3",
			"code_points": [
				"1f6b4",
				"1f3fd"
			],
			"keywords": [
				"bicycle",
				"bike",
				"exercise",
				"hipster",
				"pedal",
				"road",
				"sport",
				"transportation"
			],
			"name": "bicyclist tone 3"
		},
		"bicyclist_tone4": {
			"aliases": [],
			"ascii_arts": [],
			"category": "activity",
			"code": "bicyclist_tone4",
			"code_points": [
				"1f6b4",
				"1f3fe"
			],
			"keywords": [
				"bicycle",
				"bike",
				"exercise",
				"hipster",
				"pedal",
				"road",
				"sport",
				"transportation"
			],
			"name": "bicyclist tone 4"
		},
		"bicyclist_tone5": {
			"aliases": [],
			"ascii_arts": [],
			"category": "activity",
			"code": "bicyclist_tone5",
			"code_points": [
				"1f6b4",
				"1f3ff"
			],
			"keywords": [
				"bicycle",
				"bike",
				"exercise",
				"hipster",
				"pedal",
				"road",
				"sport",
				"transportation"
			],
			"name": "bicyclist tone 5"
		},
		"bike": {
			"aliases": [],
			"ascii_arts": [],
			"category": "travel",
			"code": "bike",
			"code_points": [
				"1f6b2"
			],
			"keywords": [
				"bicycle",
				"bike",
				"exercise",
				"hipster",
				"pedal",
				"sports",
				"transportation",
				"travel"
			],
			"name": "bicycle"
		},
		"bikini": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "bikini",
			"code_points": [
				"1f459"
			],
			"keywords": [
				"beach",
				"fashion",
				"female",
				"girl",
				"sexy",
				"swim",
				"swimming",
				"tropical",
				"vacation",
				"woman",
				"women"
			],
			"name": "bikini"
		},
		"biohazard": {
			"aliases": [
				"biohazard_sign"
			],
			"ascii_arts": [],
			"category": "symbols",
			"code": "biohazard",
			"code_points": [
				"2623"
			],
			"keywords": [
				"science",
				"symbol"
			],
			"name": "biohazard sign"
		},
		"bird": {
			"aliases": [],
			"ascii_arts": [],
			"category": "nature",
			"code": "bird",
			"code_points": [
				"1f426"
			],
			"keywords": [
				"animal",
				"fly",
				"nature",
				"tweet",
				"wildlife"
			],
			"name": "bird"
		},
		"birthday": {
			"aliases": [],
			"ascii_arts": [],
			"category": "food",
			"code": "birthday",
			"code_points": [
				"1f382"
			],
			"keywords": [
				"birth",
				"birthday",
				"cake",
				"celebrate",
				"dessert",
				"food",
				"parties",
				"party",
				"wish"
			],
			"name": "birthday cake"
		},
		"black_circle": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "black_circle",
			"code_points": [
				"26ab",
				"fe0f"
			],
			"keywords": [
				"circle",
				"shape",
				"shapes",
				"symbol"
			],
			"name": "medium black circle"
		},
		"black_heart": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "black_heart",
			"code_points": [
				"1f5a4"
			],
			"keywords": [],
			"name": "black heart"
		},
		"black_joker": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "black_joker",
			"code_points": [
				"1f0cf"
			],
			"keywords": [
				"cards",
				"game",
				"object",
				"poker",
				"symbol"
			],
			"name": "playing card black joker"
		},
		"black_large_square": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "black_large_square",
			"code_points": [
				"2b1b",
				"fe0f"
			],
			"keywords": [
				"shape",
				"shapes",
				"square",
				"symbol"
			],
			"name": "black large square"
		},
		"black_medium_small_square": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "black_medium_small_square",
			"code_points": [
				"25fe",
				"fe0f"
			],
			"keywords": [
				"shapes",
				"square",
				"symbol"
			],
			"name": "black medium small square"
		},
		"black_medium_square": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "black_medium_square",
			"code_points": [
				"25fc",
				"fe0f"
			],
			"keywords": [
				"shape",
				"shapes",
				"square",
				"symbol"
			],
			"name": "black medium square"
		},
		"black_nib": {
			"aliases": [],
			"ascii_arts": [],
			"category": "objects",
			"code": "black_nib",
			"code_points": [
				"2712",
				"fe0f"
			],
			"keywords": [
				"object",
				"office",
				"pen",
				"stationery",
				"write"
			],
			"name": "black nib"
		},
		"black_small_square": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "black_small_square",
			"code_points": [
				"25aa",
				"fe0f"
			],
			"keywords": [
				"shapes",
				"square",
				"symbol"
			],
			"name": "black small square"
		},
		"black_square_button": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "black_square_button",
			"code_points": [
				"1f532"
			],
			"keywords": [
				"frame",
				"shapes",
				"square",
				"symbol"
			],
			"name": "black square button"
		},
		"blossom": {
			"aliases": [],
			"ascii_arts": [],
			"category": "nature",
			"code": "blossom",
			"code_points": [
				"1f33c"
			],
			"keywords": [
				"blossom",
				"daisy",
				"flower",
				"flowers",
				"nature",
				"plant",
				"yellow"
			],
			"name": "blossom"
		},
		"blowfish": {
			"aliases": [],
			"ascii_arts": [],
			"category": "nature",
			"code": "blowfish",
			"code_points": [
				"1f421"
			],
			"keywords": [
				"animal",
				"ballonfish",
				"blowfish",
				"food",
				"fugu fish",
				"nature",
				"ocean",
				"puffer",
				"pufferfish",
				"sea",
				"sushi",
				"toadfish",
				"wildlife"
			],
			"name": "blowfish"
		},
		"blue_book": {
			"aliases": [],
			"ascii_arts": [],
			"category": "objects",
			"code": "blue_book",
			"code_points": [
				"1f4d8"
			],
			"keywords": [
				"book",
				"knowledge",
				"library",
				"object",
				"office",
				"read",
				"write"
			],
			"name": "blue book"
		},
		"blue_car": {
			"aliases": [],
			"ascii_arts": [],
			"category": "travel",
			"code": "blue_car",
			"code_points": [
				"1f699"
			],
			"keywords": [
				"automobile",
				"car",
				"suv",
				"transportation",
				"travel",
				"wagon"
			],
			"name": "recreational vehicle"
		},
		"blue_heart": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "blue_heart",
			"code_points": [
				"1f499"
			],
			"keywords": [
				"affection",
				"blue",
				"heart",
				"like",
				"love",
				"loyalty",
				"stability",
				"symbol",
				"trust",
				"truth",
				"valentines"
			],
			"name": "blue heart"
		},
		"blush": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "blush",
			"code_points": [
				"1f60a"
			],
			"keywords": [
				"beautiful",
				"crush",
				"embarrassed",
				"emotion",
				"face",
				"flushed",
				"good",
				"happy",
				"shy",
				"smile",
				"smiley",
				"smiling"
			],
			"name": "smiling face with smiling eyes"
		},
		"boar": {
			"aliases": [],
			"ascii_arts": [],
			"category": "nature",
			"code": "boar",
			"code_points": [
				"1f417"
			],
			"keywords": [
				"animal",
				"nature",
				"wildlife"
			],
			"name": "boar"
		},
		"bomb": {
			"aliases": [],
			"ascii_arts": [],
			"category": "objects",
			"code": "bomb",
			"code_points": [
				"1f4a3"
			],
			"keywords": [
				"blast",
				"boom",
				"dead",
				"explode",
				"object",
				"weapon"
			],
			"name": "bomb"
		},
		"book": {
			"aliases": [
				"open_book"
			],
			"ascii_arts": [],
			"category": "objects",
			"code": "book",
			"code_points": [
				"1f4d6"
			],
			"keywords": [
				"book",
				"library",
				"literature",
				"object",
				"office",
				"write"
			],
			"name": "open book"
		},
		"bookmark": {
			"aliases": [],
			"ascii_arts": [],
			"category": "objects",
			"code": "bookmark",
			"code_points": [
				"1f516"
			],
			"keywords": [
				"book",
				"favorite",
				"object"
			],
			"name": "bookmark"
		},
		"bookmark_tabs": {
			"aliases": [],
			"ascii_arts": [],
			"category": "objects",
			"code": "bookmark_tabs",
			"code_points": [
				"1f4d1"
			],
			"keywords": [
				"favorite",
				"office",
				"write"
			],
			"name": "bookmark tabs"
		},
		"books": {
			"aliases": [],
			"ascii_arts": [],
			"category": "objects",
			"code": "books",
			"code_points": [
				"1f4da"
			],
			"keywords": [
				"book",
				"library",
				"literature",
				"object",
				"office",
				"write"
			],
			"name": "books"
		},
		"boom": {
			"aliases": [
				"collision"
			],
			"ascii_arts": [],
			"category": "nature",
			"code": "boom",
			"code_points": [
				"1f4a5"
			],
			"keywords": [
				"bam",
				"bang",
				"blast",
				"bomb",
				"boom",
				"collision",
				"emphasis",
				"explode",
				"explosion",
				"fire",
				"symbol",
				"wow"
			],
			"name": "collision symbol"
		},
		"boot": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "boot",
			"code_points": [
				"1f462"
			],
			"keywords": [
				"accessories",
				"fashion",
				"sexy",
				"shoe",
				"shoes",
				"women"
			],
			"name": "womans boots"
		},
		"bouquet": {
			"aliases": [],
			"ascii_arts": [],
			"category": "nature",
			"code": "bouquet",
			"code_points": [
				"1f490"
			],
			"keywords": [
				"condolence",
				"flower",
				"flowers",
				"nature",
				"plant",
				"rip"
			],
			"name": "bouquet"
		},
		"bow": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "bow",
			"code_points": [
				"1f647"
			],
			"keywords": [
				"bend",
				"bow",
				"boy",
				"curtsy",
				"diversity",
				"male",
				"man",
				"people",
				"pray",
				"respect",
				"sorry"
			],
			"name": "person bowing deeply"
		},
		"bow_and_arrow": {
			"aliases": [
				"archery"
			],
			"ascii_arts": [],
			"category": "activity",
			"code": "bow_and_arrow",
			"code_points": [
				"1f3f9"
			],
			"keywords": [
				"sport",
				"weapon"
			],
			"name": "bow and arrow"
		},
		"bow_tone1": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "bow_tone1",
			"code_points": [
				"1f647",
				"1f3fb"
			],
			"keywords": [
				"bend",
				"bow",
				"boy",
				"male",
				"man",
				"respect",
				"sorry"
			],
			"name": "person bowing deeply tone 1"
		},
		"bow_tone2": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "bow_tone2",
			"code_points": [
				"1f647",
				"1f3fc"
			],
			"keywords": [
				"bend",
				"bow",
				"boy",
				"male",
				"man",
				"respect",
				"sorry"
			],
			"name": "person bowing deeply tone 2"
		},
		"bow_tone3": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "bow_tone3",
			"code_points": [
				"1f647",
				"1f3fd"
			],
			"keywords": [
				"bend",
				"bow",
				"boy",
				"male",
				"man",
				"respect",
				"sorry"
			],
			"name": "person bowing deeply tone 3"
		},
		"bow_tone4": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "bow_tone4",
			"code_points": [
				"1f647",
				"1f3fe"
			],
			"keywords": [
				"bend",
				"bow",
				"boy",
				"male",
				"man",
				"respect",
				"sorry"
			],
			"name": "person bowing deeply tone 4"
		},
		"bow_tone5": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "bow_tone5",
			"code_points": [
				"1f647",
				"1f3ff"
			],
			"keywords": [
				"bend",
				"bow",
				"boy",
				"male",
				"man",
				"respect",
				"sorry"
			],
			"name": "person bowing deeply tone 5"
		},
		"bowling": {
			"aliases": [],
			"ascii_arts": [],
			"category": "activity",
			"code": "bowling",
			"code_points": [
				"1f3b3"
			],
			"keywords": [
				"ball",
				"bowl",
				"bowling",
				"boys night",
				"fun",
				"game",
				"pin",
				"play",
				"spare",
				"sport",
				"sports",
				"strike"
			],
			"name": "bowling"
		},
		"boxing_glove": {
			"aliases": [
				"boxing_gloves"
			],
			"ascii_arts": [],
			"category": "activity",
			"code": "boxing_glove",
			"code_points": [
				"1f94a"
			],
			"keywords": [],
			"name": "boxing glove"
		},
		"boy": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "boy",
			"code_points": [
				"1f466"
			],
			"keywords": [
				"baby",
				"diversity",
				"guy",
				"male",
				"man",
				"people"
			],
			"name": "boy"
		},
		"boy_tone1": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "boy_tone1",
			"code_points": [
				"1f466",
				"1f3fb"
			],
			"keywords": [
				"child",
				"kid",
				"male"
			],
			"name": "boy tone 1"
		},
		"boy_tone2": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "boy_tone2",
			"code_points": [
				"1f466",
				"1f3fc"
			],
			"keywords": [
				"child",
				"kid",
				"male"
			],
			"name": "boy tone 2"
		},
		"boy_tone3": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "boy_tone3",
			"code_points": [
				"1f466",
				"1f3fd"
			],
			"keywords": [
				"child",
				"kid",
				"male"
			],
			"name": "boy tone 3"
		},
		"boy_tone4": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "boy_tone4",
			"code_points": [
				"1f466",
				"1f3fe"
			],
			"keywords": [
				"child",
				"kid",
				"male"
			],
			"name": "boy tone 4"
		},
		"boy_tone5": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "boy_tone5",
			"code_points": [
				"1f466",
				"1f3ff"
			],
			"keywords": [
				"child",
				"kid",
				"male"
			],
			"name": "boy tone 5"
		},
		"bread": {
			"aliases": [],
			"ascii_arts": [],
			"category": "food",
			"code": "bread",
			"code_points": [
				"1f35e"
			],
			"keywords": [
				"bread",
				"breakfast",
				"food",
				"loaf",
				"toast",
				"wheat",
				"yeast"
			],
			"name": "bread"
		},
		"bride_with_veil": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "bride_with_veil",
			"code_points": [
				"1f470"
			],
			"keywords": [
				"bride",
				"couple",
				"diversity",
				"dress",
				"engagement",
				"gown",
				"marriage",
				"people",
				"planning",
				"veil",
				"wedding",
				"white",
				"women"
			],
			"name": "bride with veil"
		},
		"bride_with_veil_tone1": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "bride_with_veil_tone1",
			"code_points": [
				"1f470",
				"1f3fb"
			],
			"keywords": [
				"couple",
				"dress",
				"engagement",
				"gown",
				"marriage",
				"planning",
				"wedding",
				"white"
			],
			"name": "bride with veil tone 1"
		},
		"bride_with_veil_tone2": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "bride_with_veil_tone2",
			"code_points": [
				"1f470",
				"1f3fc"
			],
			"keywords": [
				"couple",
				"dress",
				"engagement",
				"gown",
				"marriage",
				"planning",
				"wedding",
				"white"
			],
			"name": "bride with veil tone 2"
		},
		"bride_with_veil_tone3": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "bride_with_veil_tone3",
			"code_points": [
				"1f470",
				"1f3fd"
			],
			"keywords": [
				"couple",
				"dress",
				"engagement",
				"gown",
				"marriage",
				"planning",
				"wedding",
				"white"
			],
			"name": "bride with veil tone 3"
		},
		"bride_with_veil_tone4": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "bride_with_veil_tone4",
			"code_points": [
				"1f470",
				"1f3fe"
			],
			"keywords": [
				"couple",
				"dress",
				"engagement",
				"gown",
				"marriage",
				"planning",
				"wedding",
				"white"
			],
			"name": "bride with veil tone 4"
		},
		"bride_with_veil_tone5": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "bride_with_veil_tone5",
			"code_points": [
				"1f470",
				"1f3ff"
			],
			"keywords": [
				"couple",
				"dress",
				"engagement",
				"gown",
				"marriage",
				"planning",
				"wedding",
				"white"
			],
			"name": "bride with veil tone 5"
		},
		"bridge_at_night": {
			"aliases": [],
			"ascii_arts": [],
			"category": "travel",
			"code": "bridge_at_night",
			"code_points": [
				"1f309"
			],
			"keywords": [
				"bridge",
				"evening",
				"gate",
				"golden",
				"goodnight",
				"night",
				"photo",
				"places",
				"road",
				"sanfrancisco",
				"suspension",
				"travel",
				"vacation",
				"water"
			],
			"name": "bridge at night"
		},
		"briefcase": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "briefcase",
			"code_points": [
				"1f4bc"
			],
			"keywords": [
				"accessories",
				"bag",
				"business",
				"documents",
				"job",
				"nutcase",
				"work"
			],
			"name": "briefcase"
		},
		"broken_heart": {
			"aliases": [],
			"ascii_arts": [
				"</3"
			],
			"category": "symbols",
			"code": "broken_heart",
			"code_points": [
				"1f494"
			],
			"keywords": [
				"heartbreak",
				"love",
				"sad",
				"sorry",
				"symbol"
			],
			"name": "broken heart"
		},
		"bug": {
			"aliases": [],
			"ascii_arts": [],
			"category": "nature",
			"code": "bug",
			"code_points": [
				"1f41b"
			],
			"keywords": [
				"animal",
				"bug",
				"error",
				"insect",
				"insects",
				"nature",
				"virus"
			],
			"name": "bug"
		},
		"bulb": {
			"aliases": [],
			"ascii_arts": [],
			"category": "objects",
			"code": "bulb",
			"code_points": [
				"1f4a1"
			],
			"keywords": [
				"bulb",
				"electricity",
				"idea",
				"light",
				"object",
				"science"
			],
			"name": "electric light bulb"
		},
		"bullettrain_front": {
			"aliases": [],
			"ascii_arts": [],
			"category": "travel",
			"code": "bullettrain_front",
			"code_points": [
				"1f685"
			],
			"keywords": [
				"bullet",
				"rail",
				"train",
				"transportation",
				"travel"
			],
			"name": "high-speed train with bullet nose"
		},
		"bullettrain_side": {
			"aliases": [],
			"ascii_arts": [],
			"category": "travel",
			"code": "bullettrain_side",
			"code_points": [
				"1f684"
			],
			"keywords": [
				"bullet",
				"rail",
				"train",
				"transportation",
				"travel",
				"vehicle"
			],
			"name": "high-speed train"
		},
		"burrito": {
			"aliases": [],
			"ascii_arts": [],
			"category": "food",
			"code": "burrito",
			"code_points": [
				"1f32f"
			],
			"keywords": [
				"food",
				"mexican"
			],
			"name": "burrito"
		},
		"bus": {
			"aliases": [],
			"ascii_arts": [],
			"category": "travel",
			"code": "bus",
			"code_points": [
				"1f68c"
			],
			"keywords": [
				"bus",
				"car",
				"city",
				"office",
				"public",
				"school",
				"transportation",
				"vehicle"
			],
			"name": "bus"
		},
		"busstop": {
			"aliases": [],
			"ascii_arts": [],
			"category": "travel",
			"code": "busstop",
			"code_points": [
				"1f68f"
			],
			"keywords": [
				"bus",
				"city",
				"object",
				"stop",
				"transport",
				"transportation"
			],
			"name": "bus stop"
		},
		"bust_in_silhouette": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "bust_in_silhouette",
			"code_points": [
				"1f464"
			],
			"keywords": [
				"account",
				"avatar",
				"guest",
				"human",
				"i",
				"icon",
				"man",
				"me",
				"member",
				"myself",
				"people",
				"person",
				"profile",
				"silhouette",
				"user"
			],
			"name": "bust in silhouette"
		},
		"busts_in_silhouette": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "busts_in_silhouette",
			"code_points": [
				"1f465"
			],
			"keywords": [
				"accounts",
				"group",
				"human",
				"man",
				"members",
				"people",
				"person",
				"relationship",
				"shadow",
				"silhouette",
				"silhouettes",
				"team",
				"user"
			],
			"name": "busts in silhouette"
		},
		"butterfly": {
			"aliases": [],
			"ascii_arts": [],
			"category": "nature",
			"code": "butterfly",
			"code_points": [
				"1f98b"
			],
			"keywords": [],
			"name": "butterfly"
		},
		"cactus": {
			"aliases": [],
			"ascii_arts": [],
			"category": "nature",
			"code": "cactus",
			"code_points": [
				"1f335"
			],
			"keywords": [
				"cactus",
				"desert",
				"drought",
				"nature",
				"plant",
				"poke",
				"spike",
				"trees",
				"vegetable"
			],
			"name": "cactus"
		},
		"cake": {
			"aliases": [],
			"ascii_arts": [],
			"category": "food",
			"code": "cake",
			"code_points": [
				"1f370"
			],
			"keywords": [
				"cake",
				"desert",
				"dessert",
				"food",
				"short",
				"strawberry"
			],
			"name": "shortcake"
		},
		"calendar": {
			"aliases": [],
			"ascii_arts": [],
			"category": "objects",
			"code": "calendar",
			"code_points": [
				"1f4c6"
			],
			"keywords": [
				"object",
				"office",
				"schedule"
			],
			"name": "tear-off calendar"
		},
		"calendar_spiral": {
			"aliases": [
				"spiral_calendar_pad"
			],
			"ascii_arts": [],
			"category": "objects",
			"code": "calendar_spiral",
			"code_points": [
				"1f5d3"
			],
			"keywords": [
				"date",
				"day",
				"object",
				"office",
				"schedule"
			],
			"name": "spiral calendar pad"
		},
		"call_me": {
			"aliases": [
				"call_me_hand"
			],
			"ascii_arts": [],
			"category": "people",
			"code": "call_me",
			"code_points": [
				"1f919"
			],
			"keywords": [],
			"name": "call me hand"
		},
		"call_me_tone1": {
			"aliases": [
				"call_me_hand_tone1"
			],
			"ascii_arts": [],
			"category": "people",
			"code": "call_me_tone1",
			"code_points": [
				"1f919",
				"1f3fb"
			],
			"keywords": [],
			"name": "call me hand tone 1"
		},
		"call_me_tone2": {
			"aliases": [
				"call_me_hand_tone2"
			],
			"ascii_arts": [],
			"category": "people",
			"code": "call_me_tone2",
			"code_points": [
				"1f919",
				"1f3fc"
			],
			"keywords": [],
			"name": "call me hand tone 2"
		},
		"call_me_tone3": {
			"aliases": [
				"call_me_hand_tone3"
			],
			"ascii_arts": [],
			"category": "people",
			"code": "call_me_tone3",
			"code_points": [
				"1f919",
				"1f3fd"
			],
			"keywords": [],
			"name": "call me hand tone 3"
		},
		"call_me_tone4": {
			"aliases": [
				"call_me_hand_tone4"
			],
			"ascii_arts": [],
			"category": "people",
			"code": "call_me_tone4",
			"code_points": [
				"1f919",
				"1f3fe"
			],
			"keywords": [],
			"name": "call me hand tone 4"
		},
		"call_me_tone5": {
			"aliases": [
				"call_me_hand_tone5"
			],
			"ascii_arts": [],
			"category": "people",
			"code": "call_me_tone5",
			"code_points": [
				"1f919",
				"1f3ff"
			],
			"keywords": [],
			"name": "call me hand tone 5"
		},
		"calling": {
			"aliases": [],
			"ascii_arts": [],
			"category": "objects",
			"code": "calling",
			"code_points": [
				"1f4f2"
			],
			"keywords": [
				"electronics",
				"incoming",
				"iphone",
				"phone",
				"selfie"
			],
			"name": "mobile phone with rightwards arrow at left"
		},
		"camel": {
			"aliases": [],
			"ascii_arts": [],
			"category": "nature",
			"code": "camel",
			"code_points": [
				"1f42b"
			],
			"keywords": [
				"animal",
				"bactrian",
				"camel",
				"central asia",
				"desert",
				"heat",
				"hot",
				"hump",
				"hump day",
				"nature",
				"sex",
				"water",
				"wednesday",
				"wildlife"
			],
			"name": "bactrian camel"
		},
		"camera": {
			"aliases": [],
			"ascii_arts": [],
			"category": "objects",
			"code": "camera",
			"code_points": [
				"1f4f7"
			],
			"keywords": [
				"camera",
				"electronics",
				"gadgets",
				"photo",
				"selfie"
			],
			"name": "camera"
		},
		"camera_with_flash": {
			"aliases": [],
			"ascii_arts": [],
			"category": "objects",
			"code": "camera_with_flash",
			"code_points": [
				"1f4f8"
			],
			"keywords": [
				"camera",
				"electronics",
				"photo",
				"picture"
			],
			"name": "camera with flash"
		},
		"camping": {
			"aliases": [],
			"ascii_arts": [],
			"category": "travel",
			"code": "camping",
			"code_points": [
				"1f3d5"
			],
			"keywords": [
				"activity",
				"camp",
				"nature",
				"outdoors",
				"places",
				"roughing",
				"travel",
				"vacation",
				"wilderness"
			],
			"name": "camping"
		},
		"cancer": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "cancer",
			"code_points": [
				"264b",
				"fe0f"
			],
			"keywords": [
				"astrology",
				"cancer",
				"constellation",
				"crab",
				"greek",
				"horoscope",
				"sign",
				"stars",
				"symbol",
				"zodiac"
			],
			"name": "cancer"
		},
		"candle": {
			"aliases": [],
			"ascii_arts": [],
			"category": "objects",
			"code": "candle",
			"code_points": [
				"1f56f"
			],
			"keywords": [
				"light",
				"object",
				"wax"
			],
			"name": "candle"
		},
		"candy": {
			"aliases": [],
			"ascii_arts": [],
			"category": "food",
			"code": "candy",
			"code_points": [
				"1f36c"
			],
			"keywords": [
				"candy",
				"desert",
				"food",
				"halloween",
				"hard",
				"snack",
				"sugar",
				"sweet"
			],
			"name": "candy"
		},
		"canoe": {
			"aliases": [
				"kayak"
			],
			"ascii_arts": [],
			"category": "travel",
			"code": "canoe",
			"code_points": [
				"1f6f6"
			],
			"keywords": [],
			"name": "canoe"
		},
		"capital_abcd": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "capital_abcd",
			"code_points": [
				"1f520"
			],
			"keywords": [
				"alphabet",
				"blue-square",
				"symbol",
				"words"
			],
			"name": "input symbol for latin capital letters"
		},
		"capricorn": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "capricorn",
			"code_points": [
				"2651",
				"fe0f"
			],
			"keywords": [
				"astrology",
				"capricorn",
				"constellation",
				"goat-horned",
				"greek",
				"horoscope",
				"sea-goat",
				"sign",
				"stars",
				"symbol",
				"zodiac"
			],
			"name": "capricorn"
		},
		"card_box": {
			"aliases": [
				"card_file_box"
			],
			"ascii_arts": [],
			"category": "objects",
			"code": "card_box",
			"code_points": [
				"1f5c3"
			],
			"keywords": [
				"index",
				"object",
				"office",
				"organization",
				"work"
			],
			"name": "card file box"
		},
		"card_index": {
			"aliases": [],
			"ascii_arts": [],
			"category": "objects",
			"code": "card_index",
			"code_points": [
				"1f4c7"
			],
			"keywords": [
				"business",
				"object",
				"office",
				"stationery",
				"work"
			],
			"name": "card index"
		},
		"carousel_horse": {
			"aliases": [],
			"ascii_arts": [],
			"category": "travel",
			"code": "carousel_horse",
			"code_points": [
				"1f3a0"
			],
			"keywords": [
				"amusement",
				"carnival",
				"carousel",
				"entertainment",
				"fair",
				"horse",
				"object",
				"park",
				"photo",
				"places",
				"ride",
				"roller coaster",
				"vacation"
			],
			"name": "carousel horse"
		},
		"carrot": {
			"aliases": [],
			"ascii_arts": [],
			"category": "food",
			"code": "carrot",
			"code_points": [
				"1f955"
			],
			"keywords": [],
			"name": "carrot"
		},
		"cartwheel": {
			"aliases": [
				"person_doing_cartwheel"
			],
			"ascii_arts": [],
			"category": "activity",
			"code": "cartwheel",
			"code_points": [
				"1f938"
			],
			"keywords": [],
			"name": "person doing cartwheel"
		},
		"cartwheel_tone1": {
			"aliases": [
				"person_doing_cartwheel_tone1"
			],
			"ascii_arts": [],
			"category": "activity",
			"code": "cartwheel_tone1",
			"code_points": [
				"1f938",
				"1f3fb"
			],
			"keywords": [],
			"name": "person doing cartwheel tone 1"
		},
		"cartwheel_tone2": {
			"aliases": [
				"person_doing_cartwheel_tone2"
			],
			"ascii_arts": [],
			"category": "activity",
			"code": "cartwheel_tone2",
			"code_points": [
				"1f938",
				"1f3fc"
			],
			"keywords": [],
			"name": "person doing cartwheel tone 2"
		},
		"cartwheel_tone3": {
			"aliases": [
				"person_doing_cartwheel_tone3"
			],
			"ascii_arts": [],
			"category": "activity",
			"code": "cartwheel_tone3",
			"code_points": [
				"1f938",
				"1f3fd"
			],
			"keywords": [],
			"name": "person doing cartwheel tone 3"
		},
		"cartwheel_tone4": {
			"aliases": [
				"person_doing_cartwheel_tone4"
			],
			"ascii_arts": [],
			"category": "activity",
			"code": "cartwheel_tone4",
			"code_points": [
				"1f938",
				"1f3fe"
			],
			"keywords": [],
			"name": "person doing cartwheel tone 4"
		},
		"cartwheel_tone5": {
			"aliases": [
				"person_doing_cartwheel_tone5"
			],
			"ascii_arts": [],
			"category": "activity",
			"code": "cartwheel_tone5",
			"code_points": [
				"1f938",
				"1f3ff"
			],
			"keywords": [],
			"name": "person doing cartwheel tone 5"
		},
		"cat": {
			"aliases": [],
			"ascii_arts": [],
			"category": "nature",
			"code": "cat",
			"code_points": [
				"1f431"
			],
			"keywords": [
				"animal",
				"cat",
				"halloween",
				"meow",
				"vagina"
			],
			"name": "cat face"
		},
		"cat2": {
			"aliases": [],
			"ascii_arts": [],
			"category": "nature",
			"code": "cat2",
			"code_points": [
				"1f408"
			],
			"keywords": [
				"animal",
				"cat",
				"halloween",
				"kitten",
				"meow",
				"pet"
			],
			"name": "cat"
		},
		"cd": {
			"aliases": [],
			"ascii_arts": [],
			"category": "objects",
			"code": "cd",
			"code_points": [
				"1f4bf"
			],
			"keywords": [
				"blu-ray",
				"cd",
				"computer",
				"disc",
				"disk",
				"dvd",
				"electronics",
				"object",
				"office",
				"technology"
			],
			"name": "optical disc"
		},
		"chains": {
			"aliases": [],
			"ascii_arts": [],
			"category": "objects",
			"code": "chains",
			"code_points": [
				"26d3"
			],
			"keywords": [
				"chain",
				"object",
				"tool"
			],
			"name": "chains"
		},
		"champagne": {
			"aliases": [
				"bottle_with_popping_cork"
			],
			"ascii_arts": [],
			"category": "food",
			"code": "champagne",
			"code_points": [
				"1f37e"
			],
			"keywords": [
				"alcohol",
				"cheers",
				"drink",
				"parties"
			],
			"name": "bottle with popping cork"
		},
		"champagne_glass": {
			"aliases": [
				"clinking_glass"
			],
			"ascii_arts": [],
			"category": "food",
			"code": "champagne_glass",
			"code_points": [
				"1f942"
			],
			"keywords": [],
			"name": "clinking glasses"
		},
		"chart": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "chart",
			"code_points": [
				"1f4b9"
			],
			"keywords": [
				"graph",
				"green-square",
				"money",
				"symbol"
			],
			"name": "chart with upwards trend and yen sign"
		},
		"chart_with_downwards_trend": {
			"aliases": [],
			"ascii_arts": [],
			"category": "objects",
			"code": "chart_with_downwards_trend",
			"code_points": [
				"1f4c9"
			],
			"keywords": [
				"graph",
				"office",
				"work"
			],
			"name": "chart with downwards trend"
		},
		"chart_with_upwards_trend": {
			"aliases": [],
			"ascii_arts": [],
			"category": "objects",
			"code": "chart_with_upwards_trend",
			"code_points": [
				"1f4c8"
			],
			"keywords": [
				"graph",
				"office",
				"work"
			],
			"name": "chart with upwards trend"
		},
		"checkered_flag": {
			"aliases": [],
			"ascii_arts": [],
			"category": "travel",
			"code": "checkered_flag",
			"code_points": [
				"1f3c1"
			],
			"keywords": [
				"checkered",
				"chequred",
				"complete",
				"contest",
				"end",
				"finish",
				"finishline",
				"flag",
				"gokart",
				"object",
				"race",
				"rase"
			],
			"name": "chequered flag"
		},
		"cheese": {
			"aliases": [
				"cheese_wedge"
			],
			"ascii_arts": [],
			"category": "food",
			"code": "cheese",
			"code_points": [
				"1f9c0"
			],
			"keywords": [
				"food"
			],
			"name": "cheese wedge"
		},
		"cherries": {
			"aliases": [],
			"ascii_arts": [],
			"category": "food",
			"code": "cherries",
			"code_points": [
				"1f352"
			],
			"keywords": [
				"cherries",
				"cherry",
				"food",
				"fruit",
				"pit",
				"tree"
			],
			"name": "cherries"
		},
		"cherry_blossom": {
			"aliases": [],
			"ascii_arts": [],
			"category": "nature",
			"code": "cherry_blossom",
			"code_points": [
				"1f338"
			],
			"keywords": [
				"blossom",
				"cherry",
				"flower",
				"nature",
				"plant",
				"tree",
				"tropical"
			],
			"name": "cherry blossom"
		},
		"chestnut": {
			"aliases": [],
			"ascii_arts": [],
			"category": "nature",
			"code": "chestnut",
			"code_points": [
				"1f330"
			],
			"keywords": [
				"chestnut",
				"food",
				"nature",
				"plant",
				"roasted",
				"squirrel",
				"tree"
			],
			"name": "chestnut"
		},
		"chicken": {
			"aliases": [],
			"ascii_arts": [],
			"category": "nature",
			"code": "chicken",
			"code_points": [
				"1f414"
			],
			"keywords": [
				"animal",
				"chicken",
				"cluck",
				"hen",
				"livestock",
				"poultry"
			],
			"name": "chicken"
		},
		"children_crossing": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "children_crossing",
			"code_points": [
				"1f6b8"
			],
			"keywords": [
				"caution",
				"children",
				"crossing",
				"crosswalk",
				"kids",
				"school",
				"slow",
				"street",
				"symbol"
			],
			"name": "children crossing"
		},
		"chipmunk": {
			"aliases": [],
			"ascii_arts": [],
			"category": "nature",
			"code": "chipmunk",
			"code_points": [
				"1f43f"
			],
			"keywords": [
				"animal",
				"nature",
				"wildlife"
			],
			"name": "chipmunk"
		},
		"chocolate_bar": {
			"aliases": [],
			"ascii_arts": [],
			"category": "food",
			"code": "chocolate_bar",
			"code_points": [
				"1f36b"
			],
			"keywords": [
				"bar",
				"candy",
				"chocolate",
				"coca",
				"desert",
				"food",
				"halloween",
				"hershey&#039;s",
				"snack"
			],
			"name": "chocolate bar"
		},
		"christmas_tree": {
			"aliases": [],
			"ascii_arts": [],
			"category": "nature",
			"code": "christmas_tree",
			"code_points": [
				"1f384"
			],
			"keywords": [
				"celebration",
				"christmas",
				"december",
				"evergreen",
				"festival",
				"gifts",
				"holiday",
				"holidays",
				"jesus",
				"ornaments",
				"plant",
				"presents",
				"santa",
				"trees",
				"vacation",
				"winter",
				"xmas"
			],
			"name": "christmas tree"
		},
		"church": {
			"aliases": [],
			"ascii_arts": [],
			"category": "travel",
			"code": "church",
			"code_points": [
				"26ea",
				"fe0f"
			],
			"keywords": [
				"building",
				"christ",
				"condolence",
				"places",
				"religion",
				"wedding"
			],
			"name": "church"
		},
		"cinema": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "cinema",
			"code_points": [
				"1f3a6"
			],
			"keywords": [
				"blue-square",
				"camera",
				"cinema",
				"film",
				"motion",
				"movie",
				"picture",
				"record",
				"symbol",
				"theater"
			],
			"name": "cinema"
		},
		"circus_tent": {
			"aliases": [],
			"ascii_arts": [],
			"category": "activity",
			"code": "circus_tent",
			"code_points": [
				"1f3aa"
			],
			"keywords": [
				"big",
				"canvas",
				"carnival",
				"circus",
				"circus tent",
				"event",
				"festival",
				"party",
				"tent",
				"top"
			],
			"name": "circus tent"
		},
		"city_dusk": {
			"aliases": [],
			"ascii_arts": [],
			"category": "travel",
			"code": "city_dusk",
			"code_points": [
				"1f306"
			],
			"keywords": [
				"building",
				"city",
				"dark",
				"dusk",
				"evening",
				"lights",
				"metropolitan",
				"night",
				"photo",
				"places",
				"scape",
				"sunset"
			],
			"name": "cityscape at dusk"
		},
		"city_sunset": {
			"aliases": [
				"city_sunrise"
			],
			"ascii_arts": [],
			"category": "travel",
			"code": "city_sunset",
			"code_points": [
				"1f307"
			],
			"keywords": [
				"building",
				"city",
				"dawn",
				"light",
				"metropolitan",
				"morning",
				"photo",
				"places",
				"rise",
				"scape",
				"sky",
				"sun",
				"sunrise",
				"vacation"
			],
			"name": "sunset over buildings"
		},
		"cityscape": {
			"aliases": [],
			"ascii_arts": [],
			"category": "travel",
			"code": "cityscape",
			"code_points": [
				"1f3d9"
			],
			"keywords": [
				"buiildings",
				"building",
				"city",
				"lights",
				"metropolis",
				"places",
				"skyscraper",
				"vacation",
				"view"
			],
			"name": "cityscape"
		},
		"cl": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "cl",
			"code_points": [
				"1f191"
			],
			"keywords": [
				"alphabet",
				"cl",
				"clear",
				"red-square",
				"symbol",
				"word",
				"words"
			],
			"name": "squared cl"
		},
		"clap": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "clap",
			"code_points": [
				"1f44f"
			],
			"keywords": [
				"applause",
				"appreciation",
				"approval",
				"beautiful",
				"body",
				"clapping",
				"congrats",
				"diversity",
				"encouragement",
				"enthusiasm",
				"good",
				"hands",
				"praise",
				"sound",
				"win"
			],
			"name": "clapping hands sign"
		},
		"clap_tone1": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "clap_tone1",
			"code_points": [
				"1f44f",
				"1f3fb"
			],
			"keywords": [
				"applause",
				"appreciation",
				"approval",
				"clap",
				"congrats",
				"encouragement",
				"enthusiasm",
				"praise",
				"sound"
			],
			"name": "clapping hands sign tone 1"
		},
		"clap_tone2": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "clap_tone2",
			"code_points": [
				"1f44f",
				"1f3fc"
			],
			"keywords": [
				"applause",
				"appreciation",
				"approval",
				"clap",
				"congrats",
				"encouragement",
				"enthusiasm",
				"praise",
				"sound"
			],
			"name": "clapping hands sign tone 2"
		},
		"clap_tone3": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "clap_tone3",
			"code_points": [
				"1f44f",
				"1f3fd"
			],
			"keywords": [
				"applause",
				"appreciation",
				"approval",
				"clap",
				"congrats",
				"encouragement",
				"enthusiasm",
				"praise",
				"sound"
			],
			"name": "clapping hands sign tone 3"
		},
		"clap_tone4": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "clap_tone4",
			"code_points": [
				"1f44f",
				"1f3fe"
			],
			"keywords": [
				"applause",
				"appreciation",
				"approval",
				"clap",
				"congrats",
				"encouragement",
				"enthusiasm",
				"praise",
				"sound"
			],
			"name": "clapping hands sign tone 4"
		},
		"clap_tone5": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "clap_tone5",
			"code_points": [
				"1f44f",
				"1f3ff"
			],
			"keywords": [
				"applause",
				"appreciation",
				"approval",
				"clap",
				"congrats",
				"encouragement",
				"enthusiasm",
				"praise",
				"sound"
			],
			"name": "clapping hands sign tone 5"
		},
		"clapper": {
			"aliases": [],
			"ascii_arts": [],
			"category": "activity",
			"code": "clapper",
			"code_points": [
				"1f3ac"
			],
			"keywords": [
				"board",
				"clapboard",
				"clapper",
				"film",
				"movie",
				"record",
				"take"
			],
			"name": "clapper board"
		},
		"classical_building": {
			"aliases": [],
			"ascii_arts": [],
			"category": "travel",
			"code": "classical_building",
			"code_points": [
				"1f3db"
			],
			"keywords": [
				"architecture",
				"building",
				"genre",
				"government",
				"history",
				"iconic",
				"places",
				"travel",
				"vacation"
			],
			"name": "classical building"
		},
		"clipboard": {
			"aliases": [],
			"ascii_arts": [],
			"category": "objects",
			"code": "clipboard",
			"code_points": [
				"1f4cb"
			],
			"keywords": [
				"documents",
				"object",
				"office",
				"stationery",
				"work",
				"write"
			],
			"name": "clipboard"
		},
		"clock": {
			"aliases": [
				"mantlepiece_clock"
			],
			"ascii_arts": [],
			"category": "objects",
			"code": "clock",
			"code_points": [
				"1f570"
			],
			"keywords": [
				"object",
				"time"
			],
			"name": "mantlepiece clock"
		},
		"clock1": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "clock1",
			"code_points": [
				"1f550"
			],
			"keywords": [
				"clock",
				"symbol",
				"time"
			],
			"name": "clock face one oclock"
		},
		"clock10": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "clock10",
			"code_points": [
				"1f559"
			],
			"keywords": [
				"clock",
				"symbol",
				"time"
			],
			"name": "clock face ten oclock"
		},
		"clock1030": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "clock1030",
			"code_points": [
				"1f565"
			],
			"keywords": [
				"clock",
				"symbol",
				"time"
			],
			"name": "clock face ten-thirty"
		},
		"clock11": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "clock11",
			"code_points": [
				"1f55a"
			],
			"keywords": [
				"clock",
				"symbol",
				"time"
			],
			"name": "clock face eleven oclock"
		},
		"clock1130": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "clock1130",
			"code_points": [
				"1f566"
			],
			"keywords": [
				"clock",
				"symbol",
				"time"
			],
			"name": "clock face eleven-thirty"
		},
		"clock12": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "clock12",
			"code_points": [
				"1f55b"
			],
			"keywords": [
				"clock",
				"symbol",
				"time"
			],
			"name": "clock face twelve oclock"
		},
		"clock1230": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "clock1230",
			"code_points": [
				"1f567"
			],
			"keywords": [
				"clock",
				"symbol",
				"time"
			],
			"name": "clock face twelve-thirty"
		},
		"clock130": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "clock130",
			"code_points": [
				"1f55c"
			],
			"keywords": [
				"clock",
				"symbol",
				"time"
			],
			"name": "clock face one-thirty"
		},
		"clock2": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "clock2",
			"code_points": [
				"1f551"
			],
			"keywords": [
				"clock",
				"symbol",
				"time"
			],
			"name": "clock face two oclock"
		},
		"clock230": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "clock230",
			"code_points": [
				"1f55d"
			],
			"keywords": [
				"clock",
				"symbol",
				"time"
			],
			"name": "clock face two-thirty"
		},
		"clock3": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "clock3",
			"code_points": [
				"1f552"
			],
			"keywords": [
				"clock",
				"symbol",
				"time"
			],
			"name": "clock face three oclock"
		},
		"clock330": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "clock330",
			"code_points": [
				"1f55e"
			],
			"keywords": [
				"clock",
				"symbol",
				"time"
			],
			"name": "clock face three-thirty"
		},
		"clock4": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "clock4",
			"code_points": [
				"1f553"
			],
			"keywords": [
				"clock",
				"symbol",
				"time"
			],
			"name": "clock face four oclock"
		},
		"clock430": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "clock430",
			"code_points": [
				"1f55f"
			],
			"keywords": [
				"clock",
				"symbol",
				"time"
			],
			"name": "clock face four-thirty"
		},
		"clock5": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "clock5",
			"code_points": [
				"1f554"
			],
			"keywords": [
				"clock",
				"symbol",
				"time"
			],
			"name": "clock face five oclock"
		},
		"clock530": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "clock530",
			"code_points": [
				"1f560"
			],
			"keywords": [
				"clock",
				"symbol",
				"time"
			],
			"name": "clock face five-thirty"
		},
		"clock6": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "clock6",
			"code_points": [
				"1f555"
			],
			"keywords": [
				"clock",
				"symbol",
				"time"
			],
			"name": "clock face six oclock"
		},
		"clock630": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "clock630",
			"code_points": [
				"1f561"
			],
			"keywords": [
				"clock",
				"symbol",
				"time"
			],
			"name": "clock face six-thirty"
		},
		"clock7": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "clock7",
			"code_points": [
				"1f556"
			],
			"keywords": [
				"clock",
				"symbol",
				"time"
			],
			"name": "clock face seven oclock"
		},
		"clock730": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "clock730",
			"code_points": [
				"1f562"
			],
			"keywords": [
				"clock",
				"symbol",
				"time"
			],
			"name": "clock face seven-thirty"
		},
		"clock8": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "clock8",
			"code_points": [
				"1f557"
			],
			"keywords": [
				"clock",
				"symbol",
				"time"
			],
			"name": "clock face eight oclock"
		},
		"clock830": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "clock830",
			"code_points": [
				"1f563"
			],
			"keywords": [
				"clock",
				"symbol",
				"time"
			],
			"name": "clock face eight-thirty"
		},
		"clock9": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "clock9",
			"code_points": [
				"1f558"
			],
			"keywords": [
				"clock",
				"symbol",
				"time"
			],
			"name": "clock face nine oclock"
		},
		"clock930": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "clock930",
			"code_points": [
				"1f564"
			],
			"keywords": [
				"clock",
				"symbol",
				"time"
			],
			"name": "clock face nine-thirty"
		},
		"closed_book": {
			"aliases": [],
			"ascii_arts": [],
			"category": "objects",
			"code": "closed_book",
			"code_points": [
				"1f4d5"
			],
			"keywords": [
				"book",
				"knowledge",
				"library",
				"object",
				"office",
				"read",
				"write"
			],
			"name": "closed book"
		},
		"closed_lock_with_key": {
			"aliases": [],
			"ascii_arts": [],
			"category": "objects",
			"code": "closed_lock_with_key",
			"code_points": [
				"1f510"
			],
			"keywords": [
				"lock",
				"object",
				"privacy",
				"security"
			],
			"name": "closed lock with key"
		},
		"closed_umbrella": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "closed_umbrella",
			"code_points": [
				"1f302"
			],
			"keywords": [
				"accessories",
				"closed",
				"drizzle",
				"moisture",
				"object",
				"protection",
				"rain",
				"sky",
				"sun",
				"ultraviolet",
				"umbrella",
				"uv",
				"weather"
			],
			"name": "closed umbrella"
		},
		"cloud": {
			"aliases": [],
			"ascii_arts": [],
			"category": "nature",
			"code": "cloud",
			"code_points": [
				"2601",
				"fe0f"
			],
			"keywords": [
				"cloud",
				"cold",
				"rain",
				"sky",
				"weather"
			],
			"name": "cloud"
		},
		"cloud_lightning": {
			"aliases": [
				"cloud_with_lightning"
			],
			"ascii_arts": [],
			"category": "nature",
			"code": "cloud_lightning",
			"code_points": [
				"1f329"
			],
			"keywords": [
				"cloud",
				"cold",
				"rain",
				"sky",
				"thunder",
				"weather"
			],
			"name": "cloud with lightning"
		},
		"cloud_rain": {
			"aliases": [
				"cloud_with_rain"
			],
			"ascii_arts": [],
			"category": "nature",
			"code": "cloud_rain",
			"code_points": [
				"1f327"
			],
			"keywords": [
				"cloud",
				"cold",
				"rain",
				"sky",
				"weather",
				"wet",
				"winter"
			],
			"name": "cloud with rain"
		},
		"cloud_snow": {
			"aliases": [
				"cloud_with_snow"
			],
			"ascii_arts": [],
			"category": "nature",
			"code": "cloud_snow",
			"code_points": [
				"1f328"
			],
			"keywords": [
				"cloud",
				"cold",
				"sky",
				"snow",
				"weather",
				"winter"
			],
			"name": "cloud with snow"
		},
		"cloud_tornado": {
			"aliases": [
				"cloud_with_tornado"
			],
			"ascii_arts": [],
			"category": "nature",
			"code": "cloud_tornado",
			"code_points": [
				"1f32a"
			],
			"keywords": [
				"cold",
				"destruction",
				"funnel",
				"sky",
				"weather"
			],
			"name": "cloud with tornado"
		},
		"clown": {
			"aliases": [
				"clown_face"
			],
			"ascii_arts": [],
			"category": "people",
			"code": "clown",
			"code_points": [
				"1f921"
			],
			"keywords": [],
			"name": "clown face"
		},
		"clubs": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "clubs",
			"code_points": [
				"2663",
				"fe0f"
			],
			"keywords": [
				"cards",
				"game",
				"poker",
				"symbol"
			],
			"name": "black club suit"
		},
		"cocktail": {
			"aliases": [],
			"ascii_arts": [],
			"category": "food",
			"code": "cocktail",
			"code_points": [
				"1f378"
			],
			"keywords": [
				"alcohol",
				"bar",
				"beverage",
				"cocktail",
				"drink",
				"drunk",
				"girls night",
				"glass",
				"martini",
				"mixed",
				"parties"
			],
			"name": "cocktail glass"
		},
		"coffee": {
			"aliases": [],
			"ascii_arts": [],
			"category": "food",
			"code": "coffee",
			"code_points": [
				"2615",
				"fe0f"
			],
			"keywords": [
				"beverage",
				"cafe",
				"caffeine",
				"drink",
				"espresso",
				"morning",
				"steam"
			],
			"name": "hot beverage"
		},
		"coffin": {
			"aliases": [],
			"ascii_arts": [],
			"category": "objects",
			"code": "coffin",
			"code_points": [
				"26b0"
			],
			"keywords": [
				"dead",
				"death",
				"object",
				"rip"
			],
			"name": "coffin"
		},
		"cold_sweat": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "cold_sweat",
			"code_points": [
				"1f630"
			],
			"keywords": [
				"emotion",
				"exasperated",
				"face",
				"frustrated",
				"nervous",
				"smiley",
				"sweat"
			],
			"name": "face with open mouth and cold sweat"
		},
		"comet": {
			"aliases": [],
			"ascii_arts": [],
			"category": "nature",
			"code": "comet",
			"code_points": [
				"2604"
			],
			"keywords": [
				"object",
				"sky",
				"space"
			],
			"name": "comet"
		},
		"compression": {
			"aliases": [],
			"ascii_arts": [],
			"category": "objects",
			"code": "compression",
			"code_points": [
				"1f5dc"
			],
			"keywords": [
				"reduce"
			],
			"name": "compression"
		},
		"computer": {
			"aliases": [],
			"ascii_arts": [],
			"category": "objects",
			"code": "computer",
			"code_points": [
				"1f4bb"
			],
			"keywords": [
				"electronics",
				"laptop",
				"office",
				"tech",
				"work"
			],
			"name": "personal computer"
		},
		"confetti_ball": {
			"aliases": [],
			"ascii_arts": [],
			"category": "objects",
			"code": "confetti_ball",
			"code_points": [
				"1f38a"
			],
			"keywords": [
				"ball",
				"birthday",
				"boys night",
				"celebrate",
				"cheers",
				"confetti",
				"congratulations",
				"festival",
				"girls night",
				"holidays",
				"new years",
				"object",
				"parties",
				"party",
				"wedding",
				"win"
			],
			"name": "confetti ball"
		},
		"confounded": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "confounded",
			"code_points": [
				"1f616"
			],
			"keywords": [
				"amaze",
				"angry",
				"confound",
				"confused",
				"emotion",
				"face",
				"mystify",
				"perplex",
				"puzzle",
				"sad",
				"sick",
				"smiley",
				"unwell"
			],
			"name": "confounded face"
		},
		"confused": {
			"aliases": [],
			"ascii_arts": [
				":-.",
				":-/",
				":/",
				":L",
				":\\",
				"=/",
				"=L",
				"=\\",
				">:/",
				">:\\"
			],
			"category": "people",
			"code": "confused",
			"code_points": [
				"1f615"
			],
			"keywords": [
				"confuse",
				"confused",
				"daze",
				"emotion",
				"hesitant",
				"indifference",
				"perplex",
				"puzzle",
				"skeptical",
				"smiley",
				"surprised",
				"undecided",
				"uneasy"
			],
			"name": "confused face"
		},
		"congratulations": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "congratulations",
			"code_points": [
				"3297",
				"fe0f"
			],
			"keywords": [
				"chinese",
				"japan",
				"japanese",
				"kanji",
				"symbol"
			],
			"name": "circled ideograph congratulation"
		},
		"construction": {
			"aliases": [],
			"ascii_arts": [],
			"category": "travel",
			"code": "construction",
			"code_points": [
				"1f6a7"
			],
			"keywords": [
				"caution",
				"object",
				"progress",
				"wip"
			],
			"name": "construction sign"
		},
		"construction_site": {
			"aliases": [
				"building_construction"
			],
			"ascii_arts": [],
			"category": "travel",
			"code": "construction_site",
			"code_points": [
				"1f3d7"
			],
			"keywords": [
				"building",
				"crane",
				"place",
				"site",
				"work"
			],
			"name": "building construction"
		},
		"construction_worker": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "construction_worker",
			"code_points": [
				"1f477"
			],
			"keywords": [
				"diversity",
				"hat",
				"human",
				"job",
				"male",
				"man",
				"men",
				"people",
				"wip"
			],
			"name": "construction worker"
		},
		"construction_worker_tone1": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "construction_worker_tone1",
			"code_points": [
				"1f477",
				"1f3fb"
			],
			"keywords": [
				"human",
				"male",
				"man",
				"wip"
			],
			"name": "construction worker tone 1"
		},
		"construction_worker_tone2": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "construction_worker_tone2",
			"code_points": [
				"1f477",
				"1f3fc"
			],
			"keywords": [
				"human",
				"male",
				"man",
				"wip"
			],
			"name": "construction worker tone 2"
		},
		"construction_worker_tone3": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "construction_worker_tone3",
			"code_points": [
				"1f477",
				"1f3fd"
			],
			"keywords": [
				"human",
				"male",
				"man",
				"wip"
			],
			"name": "construction worker tone 3"
		},
		"construction_worker_tone4": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "construction_worker_tone4",
			"code_points": [
				"1f477",
				"1f3fe"
			],
			"keywords": [
				"human",
				"male",
				"man",
				"wip"
			],
			"name": "construction worker tone 4"
		},
		"construction_worker_tone5": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "construction_worker_tone5",
			"code_points": [
				"1f477",
				"1f3ff"
			],
			"keywords": [
				"human",
				"male",
				"man",
				"wip"
			],
			"name": "construction worker tone 5"
		},
		"control_knobs": {
			"aliases": [],
			"ascii_arts": [],
			"category": "objects",
			"code": "control_knobs",
			"code_points": [
				"1f39b"
			],
			"keywords": [
				"dial",
				"time"
			],
			"name": "control knobs"
		},
		"convenience_store": {
			"aliases": [],
			"ascii_arts": [],
			"category": "travel",
			"code": "convenience_store",
			"code_points": [
				"1f3ea"
			],
			"keywords": [
				"building",
				"places"
			],
			"name": "convenience store"
		},
		"cookie": {
			"aliases": [],
			"ascii_arts": [],
			"category": "food",
			"code": "cookie",
			"code_points": [
				"1f36a"
			],
			"keywords": [
				"biscuit",
				"chocolate",
				"cookie",
				"dessert",
				"food",
				"oreo",
				"snack",
				"sweet",
				"vagina"
			],
			"name": "cookie"
		},
		"cooking": {
			"aliases": [
				"egg"
			],
			"ascii_arts": [],
			"category": "food",
			"code": "cooking",
			"code_points": [
				"1f373"
			],
			"keywords": [
				"breakfast",
				"cook",
				"cooking",
				"egg",
				"flat",
				"food",
				"fry",
				"frying",
				"pan",
				"utensil"
			],
			"name": "cooking"
		},
		"cool": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "cool",
			"code_points": [
				"1f192"
			],
			"keywords": [
				"blue-square",
				"symbol",
				"words"
			],
			"name": "squared cool"
		},
		"cop": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "cop",
			"code_points": [
				"1f46e"
			],
			"keywords": [
				"911",
				"arrest",
				"diversity",
				"enforcement",
				"hat",
				"job",
				"law",
				"man",
				"men",
				"people",
				"police"
			],
			"name": "police officer"
		},
		"cop_tone1": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "cop_tone1",
			"code_points": [
				"1f46e",
				"1f3fb"
			],
			"keywords": [
				"arrest",
				"cop",
				"enforcement",
				"law",
				"man"
			],
			"name": "police officer tone 1"
		},
		"cop_tone2": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "cop_tone2",
			"code_points": [
				"1f46e",
				"1f3fc"
			],
			"keywords": [
				"arrest",
				"cop",
				"enforcement",
				"law",
				"man"
			],
			"name": "police officer tone 2"
		},
		"cop_tone3": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "cop_tone3",
			"code_points": [
				"1f46e",
				"1f3fd"
			],
			"keywords": [
				"arrest",
				"cop",
				"enforcement",
				"law",
				"man"
			],
			"name": "police officer tone 3"
		},
		"cop_tone4": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "cop_tone4",
			"code_points": [
				"1f46e",
				"1f3fe"
			],
			"keywords": [
				"arrest",
				"cop",
				"enforcement",
				"law",
				"man"
			],
			"name": "police officer tone 4"
		},
		"cop_tone5": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "cop_tone5",
			"code_points": [
				"1f46e",
				"1f3ff"
			],
			"keywords": [
				"arrest",
				"cop",
				"enforcement",
				"law",
				"man"
			],
			"name": "police officer tone 5"
		},
		"copyright": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "copyright",
			"code_points": [
				"a9"
			],
			"keywords": [
				"ip",
				"license",
				"symbol"
			],
			"name": "copyright sign"
		},
		"corn": {
			"aliases": [],
			"ascii_arts": [],
			"category": "food",
			"code": "corn",
			"code_points": [
				"1f33d"
			],
			"keywords": [
				"cob",
				"corn",
				"ear",
				"food",
				"husk",
				"iowa",
				"kernel",
				"maize",
				"plant",
				"popcorn",
				"stalk",
				"vegetable",
				"vegetables",
				"yellow"
			],
			"name": "ear of maize"
		},
		"couch": {
			"aliases": [
				"couch_and_lamp"
			],
			"ascii_arts": [],
			"category": "objects",
			"code": "couch",
			"code_points": [
				"1f6cb"
			],
			"keywords": [
				"leather",
				"lounge",
				"loveseat",
				"microfiber",
				"object",
				"relax",
				"sectional",
				"sit",
				"sofa"
			],
			"name": "couch and lamp"
		},
		"couple": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "couple",
			"code_points": [
				"1f46b"
			],
			"keywords": [
				"affection",
				"creationism",
				"date",
				"dating",
				"human",
				"like",
				"love",
				"marriage",
				"people",
				"sex",
				"valentines"
			],
			"name": "man and woman holding hands"
		},
		"couple_mm": {
			"aliases": [
				"couple_with_heart_mm"
			],
			"ascii_arts": [],
			"category": "people",
			"code": "couple_mm",
			"code_points": [
				"1f468",
				"200d",
				"2764",
				"fe0f",
				"200d",
				"1f468"
			],
			"keywords": [
				"affection",
				"dating",
				"gay",
				"human",
				"lgbt",
				"like",
				"love",
				"marriage",
				"men",
				"people",
				"sex",
				"valentines"
			],
			"name": "couple (man,man)"
		},
		"couple_with_heart": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "couple_with_heart",
			"code_points": [
				"1f491"
			],
			"keywords": [
				"affection",
				"dating",
				"human",
				"like",
				"love",
				"marriage",
				"people",
				"sex",
				"valentines"
			],
			"name": "couple with heart"
		},
		"couple_ww": {
			"aliases": [
				"couple_with_heart_ww"
			],
			"ascii_arts": [],
			"category": "people",
			"code": "couple_ww",
			"code_points": [
				"1f469",
				"200d",
				"2764",
				"fe0f",
				"200d",
				"1f469"
			],
			"keywords": [
				"affection",
				"dating",
				"human",
				"lgbt",
				"like",
				"love",
				"marriage",
				"people",
				"sex",
				"valentines",
				"women"
			],
			"name": "couple (woman,woman)"
		},
		"couplekiss": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "couplekiss",
			"code_points": [
				"1f48f"
			],
			"keywords": [
				"dating",
				"like",
				"love",
				"marriage",
				"people",
				"sex",
				"valentines"
			],
			"name": "kiss"
		},
		"cow": {
			"aliases": [],
			"ascii_arts": [],
			"category": "nature",
			"code": "cow",
			"code_points": [
				"1f42e"
			],
			"keywords": [
				"animal",
				"beef",
				"ox"
			],
			"name": "cow face"
		},
		"cow2": {
			"aliases": [],
			"ascii_arts": [],
			"category": "nature",
			"code": "cow2",
			"code_points": [
				"1f404"
			],
			"keywords": [
				"animal",
				"beef",
				"bessie",
				"cow",
				"dairy",
				"milk",
				"moo",
				"nature",
				"ox"
			],
			"name": "cow"
		},
		"cowboy": {
			"aliases": [
				"face_with_cowboy_hat"
			],
			"ascii_arts": [],
			"category": "people",
			"code": "cowboy",
			"code_points": [
				"1f920"
			],
			"keywords": [],
			"name": "face with cowboy hat"
		},
		"crab": {
			"aliases": [],
			"ascii_arts": [],
			"category": "nature",
			"code": "crab",
			"code_points": [
				"1f980"
			],
			"keywords": [
				"animal",
				"tropical"
			],
			"name": "crab"
		},
		"crayon": {
			"aliases": [
				"lower_left_crayon"
			],
			"ascii_arts": [],
			"category": "objects",
			"code": "crayon",
			"code_points": [
				"1f58d"
			],
			"keywords": [
				"color",
				"draw",
				"object",
				"office",
				"wax",
				"write"
			],
			"name": "lower left crayon"
		},
		"credit_card": {
			"aliases": [],
			"ascii_arts": [],
			"category": "objects",
			"code": "credit_card",
			"code_points": [
				"1f4b3"
			],
			"keywords": [
				"american express",
				"bill",
				"boys night",
				"card",
				"credit",
				"dollar",
				"loan",
				"mastercard",
				"money",
				"object",
				"pay",
				"payment",
				"purchase",
				"shopping",
				"signature",
				"visa",
				"wallet"
			],
			"name": "credit card"
		},
		"crescent_moon": {
			"aliases": [],
			"ascii_arts": [],
			"category": "nature",
			"code": "crescent_moon",
			"code_points": [
				"1f319"
			],
			"keywords": [
				"cheese",
				"crescent",
				"goodnight",
				"moon",
				"night",
				"phase",
				"sky",
				"space",
				"waxing"
			],
			"name": "crescent moon"
		},
		"cricket": {
			"aliases": [
				"cricket_bat_ball"
			],
			"ascii_arts": [],
			"category": "activity",
			"code": "cricket",
			"code_points": [
				"1f3cf"
			],
			"keywords": [
				"ball",
				"cricket",
				"sport"
			],
			"name": "cricket bat and ball"
		},
		"crocodile": {
			"aliases": [],
			"ascii_arts": [],
			"category": "nature",
			"code": "crocodile",
			"code_points": [
				"1f40a"
			],
			"keywords": [
				"alligator",
				"animal",
				"cranky",
				"croc",
				"crocodile",
				"gator",
				"nature",
				"reptile",
				"wildlife"
			],
			"name": "crocodile"
		},
		"croissant": {
			"aliases": [],
			"ascii_arts": [],
			"category": "food",
			"code": "croissant",
			"code_points": [
				"1f950"
			],
			"keywords": [],
			"name": "croissant"
		},
		"cross": {
			"aliases": [
				"latin_cross"
			],
			"ascii_arts": [],
			"category": "symbols",
			"code": "cross",
			"code_points": [
				"271d"
			],
			"keywords": [
				"christian",
				"religion",
				"symbol"
			],
			"name": "latin cross"
		},
		"crossed_flags": {
			"aliases": [],
			"ascii_arts": [],
			"category": "objects",
			"code": "crossed_flags",
			"code_points": [
				"1f38c"
			],
			"keywords": [
				"japan",
				"object"
			],
			"name": "crossed flags"
		},
		"crossed_swords": {
			"aliases": [],
			"ascii_arts": [],
			"category": "objects",
			"code": "crossed_swords",
			"code_points": [
				"2694"
			],
			"keywords": [
				"object",
				"weapon"
			],
			"name": "crossed swords"
		},
		"crown": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "crown",
			"code_points": [
				"1f451"
			],
			"keywords": [
				"accessories",
				"gem",
				"king",
				"kod",
				"leader",
				"object",
				"royalty"
			],
			"name": "crown"
		},
		"cruise_ship": {
			"aliases": [
				"passenger_ship"
			],
			"ascii_arts": [],
			"category": "travel",
			"code": "cruise_ship",
			"code_points": [
				"1f6f3"
			],
			"keywords": [
				"boat",
				"titanic",
				"transportation",
				"travel",
				"vacation"
			],
			"name": "passenger ship"
		},
		"cry": {
			"aliases": [],
			"ascii_arts": [
				":'(",
				":'-(",
				";(",
				";-("
			],
			"category": "people",
			"code": "cry",
			"code_points": [
				"1f622"
			],
			"keywords": [
				"cry",
				"emotion",
				"face",
				"heartbreak",
				"rip",
				"sad",
				"smiley",
				"tear",
				"tears",
				"weep"
			],
			"name": "crying face"
		},
		"crying_cat_face": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "crying_cat_face",
			"code_points": [
				"1f63f"
			],
			"keywords": [
				"animal",
				"cat",
				"cats",
				"cry",
				"hurt",
				"melancholy",
				"morn",
				"sad",
				"sob",
				"somber",
				"tears",
				"weep"
			],
			"name": "crying cat face"
		},
		"crystal_ball": {
			"aliases": [],
			"ascii_arts": [],
			"category": "objects",
			"code": "crystal_ball",
			"code_points": [
				"1f52e"
			],
			"keywords": [
				"ball",
				"disco",
				"object",
				"party"
			],
			"name": "crystal ball"
		},
		"cucumber": {
			"aliases": [],
			"ascii_arts": [],
			"category": "food",
			"code": "cucumber",
			"code_points": [
				"1f952"
			],
			"keywords": [],
			"name": "cucumber"
		},
		"cupid": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "cupid",
			"code_points": [
				"1f498"
			],
			"keywords": [
				"affection",
				"heart",
				"like",
				"love",
				"symbol",
				"valentines"
			],
			"name": "heart with arrow"
		},
		"curly_loop": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "curly_loop",
			"code_points": [
				"27b0"
			],
			"keywords": [
				"scribble",
				"symbol"
			],
			"name": "curly loop"
		},
		"currency_exchange": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "currency_exchange",
			"code_points": [
				"1f4b1"
			],
			"keywords": [
				"dollar",
				"money",
				"symbol",
				"travel"
			],
			"name": "currency exchange"
		},
		"curry": {
			"aliases": [],
			"ascii_arts": [],
			"category": "food",
			"code": "curry",
			"code_points": [
				"1f35b"
			],
			"keywords": [
				"curry",
				"flavor",
				"food",
				"hot",
				"indian",
				"meal",
				"spice",
				"spicy"
			],
			"name": "curry and rice"
		},
		"custard": {
			"aliases": [],
			"ascii_arts": [],
			"category": "food",
			"code": "custard",
			"code_points": [
				"1f36e"
			],
			"keywords": [
				"brûlée",
				"butter",
				"cream",
				"crème",
				"custard",
				"desert",
				"dessert",
				"food",
				"french",
				"rich"
			],
			"name": "custard"
		},
		"customs": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "customs",
			"code_points": [
				"1f6c3"
			],
			"keywords": [
				"authority",
				"border",
				"check",
				"customs",
				"foreign",
				"goods",
				"government",
				"passport",
				"symbol",
				"travel"
			],
			"name": "customs"
		},
		"cyclone": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "cyclone",
			"code_points": [
				"1f300"
			],
			"keywords": [
				"blue",
				"cloud",
				"cyclone",
				"drugs",
				"hurricane",
				"ocean",
				"storm",
				"swirl",
				"symbol",
				"typhoon",
				"weather"
			],
			"name": "cyclone"
		},
		"dagger": {
			"aliases": [
				"dagger_knife"
			],
			"ascii_arts": [],
			"category": "objects",
			"code": "dagger",
			"code_points": [
				"1f5e1"
			],
			"keywords": [
				"blade",
				"knife",
				"object",
				"weapon"
			],
			"name": "dagger knife"
		},
		"dancer": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "dancer",
			"code_points": [
				"1f483"
			],
			"keywords": [
				"ballet",
				"boogy",
				"celebrate",
				"cha cha",
				"dance",
				"dancer",
				"diversity",
				"dress",
				"fancy",
				"female",
				"fun",
				"girl",
				"girls night",
				"music",
				"party",
				"people",
				"sexy",
				"tango",
				"woman",
				"women"
			],
			"name": "dancer"
		},
		"dancer_tone1": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "dancer_tone1",
			"code_points": [
				"1f483",
				"1f3fb"
			],
			"keywords": [
				"ballet",
				"boogy",
				"celebrate",
				"cha cha",
				"dress",
				"fancy",
				"female",
				"fun",
				"girl",
				"music",
				"party",
				"tango",
				"woman"
			],
			"name": "dancer tone 1"
		},
		"dancer_tone2": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "dancer_tone2",
			"code_points": [
				"1f483",
				"1f3fc"
			],
			"keywords": [
				"ballet",
				"boogy",
				"celebrate",
				"cha cha",
				"dress",
				"fancy",
				"female",
				"fun",
				"girl",
				"music",
				"party",
				"tango",
				"woman"
			],
			"name": "dancer tone 2"
		},
		"dancer_tone3": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "dancer_tone3",
			"code_points": [
				"1f483",
				"1f3fd"
			],
			"keywords": [
				"ballet",
				"boogy",
				"celebrate",
				"cha cha",
				"dress",
				"fancy",
				"female",
				"fun",
				"girl",
				"music",
				"party",
				"tango",
				"woman"
			],
			"name": "dancer tone 3"
		},
		"dancer_tone4": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "dancer_tone4",
			"code_points": [
				"1f483",
				"1f3fe"
			],
			"keywords": [
				"ballet",
				"boogy",
				"celebrate",
				"cha cha",
				"dress",
				"fancy",
				"female",
				"fun",
				"girl",
				"music",
				"party",
				"tango",
				"woman"
			],
			"name": "dancer tone 4"
		},
		"dancer_tone5": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "dancer_tone5",
			"code_points": [
				"1f483",
				"1f3ff"
			],
			"keywords": [
				"ballet",
				"boogy",
				"celebrate",
				"cha cha",
				"dress",
				"fancy",
				"female",
				"fun",
				"girl",
				"music",
				"party",
				"tango",
				"woman"
			],
			"name": "dancer tone 5"
		},
		"dancers": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "dancers",
			"code_points": [
				"1f46f"
			],
			"keywords": [
				"boys night",
				"bunny",
				"cancan",
				"costume",
				"dance",
				"dancers",
				"dancing",
				"female",
				"girls",
				"girls night",
				"parties",
				"people",
				"playboy",
				"sexy",
				"showgirl",
				"women"
			],
			"name": "woman with bunny ears"
		},
		"dango": {
			"aliases": [],
			"ascii_arts": [],
			"category": "food",
			"code": "dango",
			"code_points": [
				"1f361"
			],
			"keywords": [
				"balls",
				"dango",
				"dumpling",
				"food",
				"japanese",
				"mochi",
				"skewer"
			],
			"name": "dango"
		},
		"dark_sunglasses": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "dark_sunglasses",
			"code_points": [
				"1f576"
			],
			"keywords": [
				"accessories",
				"eyes",
				"fashion",
				"glasses",
				"shades"
			],
			"name": "dark sunglasses"
		},
		"dart": {
			"aliases": [],
			"ascii_arts": [],
			"category": "activity",
			"code": "dart",
			"code_points": [
				"1f3af"
			],
			"keywords": [
				"archery",
				"arrow",
				"bar",
				"boys night",
				"bullseye",
				"dart",
				"direct",
				"fletching",
				"game",
				"hit",
				"sport"
			],
			"name": "direct hit"
		},
		"dash": {
			"aliases": [],
			"ascii_arts": [],
			"category": "nature",
			"code": "dash",
			"code_points": [
				"1f4a8"
			],
			"keywords": [
				"air",
				"cloud",
				"cold",
				"fast",
				"shoo",
				"smoking",
				"wind"
			],
			"name": "dash symbol"
		},
		"date": {
			"aliases": [],
			"ascii_arts": [],
			"category": "objects",
			"code": "date",
			"code_points": [
				"1f4c5"
			],
			"keywords": [
				"calendar",
				"object",
				"office",
				"schedule"
			],
			"name": "calendar"
		},
		"deciduous_tree": {
			"aliases": [],
			"ascii_arts": [],
			"category": "nature",
			"code": "deciduous_tree",
			"code_points": [
				"1f333"
			],
			"keywords": [
				"camp",
				"color",
				"deciduous",
				"fall",
				"leaves",
				"nature",
				"plant",
				"tree",
				"trees"
			],
			"name": "deciduous tree"
		},
		"deer": {
			"aliases": [],
			"ascii_arts": [],
			"category": "nature",
			"code": "deer",
			"code_points": [
				"1f98c"
			],
			"keywords": [],
			"name": "deer"
		},
		"department_store": {
			"aliases": [],
			"ascii_arts": [],
			"category": "travel",
			"code": "department_store",
			"code_points": [
				"1f3ec"
			],
			"keywords": [
				"building",
				"department",
				"mall",
				"merchandise",
				"places",
				"retail",
				"sale",
				"shopping",
				"store"
			],
			"name": "department store"
		},
		"desert": {
			"aliases": [],
			"ascii_arts": [],
			"category": "travel",
			"code": "desert",
			"code_points": [
				"1f3dc"
			],
			"keywords": [
				"barren",
				"cactus",
				"dry",
				"hot",
				"places",
				"sandy",
				"sunny",
				"travel",
				"vacation"
			],
			"name": "desert"
		},
		"desktop": {
			"aliases": [
				"desktop_computer"
			],
			"ascii_arts": [],
			"category": "objects",
			"code": "desktop",
			"code_points": [
				"1f5a5"
			],
			"keywords": [
				"cpu",
				"electronics",
				"work"
			],
			"name": "desktop computer"
		},
		"diamond_shape_with_a_dot_inside": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "diamond_shape_with_a_dot_inside",
			"code_points": [
				"1f4a0"
			],
			"keywords": [
				"adorable",
				"cute",
				"cuteness",
				"diamond",
				"glyph",
				"japanese",
				"kawaii",
				"symbol"
			],
			"name": "diamond shape with a dot inside"
		},
		"diamonds": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "diamonds",
			"code_points": [
				"2666",
				"fe0f"
			],
			"keywords": [
				"cards",
				"game",
				"poker",
				"shapes",
				"symbol"
			],
			"name": "black diamond suit"
		},
		"disappointed": {
			"aliases": [],
			"ascii_arts": [
				":(",
				":-(",
				":-[",
				":[",
				"=(",
				">:["
			],
			"category": "people",
			"code": "disappointed",
			"code_points": [
				"1f61e"
			],
			"keywords": [
				"depressed",
				"disappoint",
				"disappointed",
				"discouraged",
				"emotion",
				"face",
				"frown",
				"sad",
				"smiley",
				"tired",
				"upset"
			],
			"name": "disappointed face"
		},
		"disappointed_relieved": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "disappointed_relieved",
			"code_points": [
				"1f625"
			],
			"keywords": [
				"cry",
				"disappoint",
				"emotion",
				"face",
				"nervous",
				"phew",
				"relief",
				"sad",
				"smiley",
				"stressed",
				"sweat"
			],
			"name": "disappointed but relieved face"
		},
		"dividers": {
			"aliases": [
				"card_index_dividers"
			],
			"ascii_arts": [],
			"category": "objects",
			"code": "dividers",
			"code_points": [
				"1f5c2"
			],
			"keywords": [
				"office",
				"rolodex",
				"stationery",
				"work"
			],
			"name": "card index dividers"
		},
		"dizzy": {
			"aliases": [],
			"ascii_arts": [],
			"category": "nature",
			"code": "dizzy",
			"code_points": [
				"1f4ab"
			],
			"keywords": [
				"dizzy",
				"drunk",
				"intoxicated",
				"shoot",
				"sick",
				"sparkle",
				"squeans",
				"star",
				"starburst",
				"symbol"
			],
			"name": "dizzy symbol"
		},
		"dizzy_face": {
			"aliases": [],
			"ascii_arts": [
				"#)",
				"#-)",
				"%)",
				"%-)",
				"X)",
				"X-)"
			],
			"category": "people",
			"code": "dizzy_face",
			"code_points": [
				"1f635"
			],
			"keywords": [
				"dead",
				"dizzy",
				"drunk",
				"emotion",
				"face",
				"inebriated",
				"omg",
				"smiley",
				"spent",
				"surprised",
				"unconscious",
				"wow",
				"xox"
			],
			"name": "dizzy face"
		},
		"do_not_litter": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "do_not_litter",
			"code_points": [
				"1f6af"
			],
			"keywords": [
				"bin",
				"can",
				"garbage",
				"litter",
				"no",
				"symbol",
				"trash",
				"waste"
			],
			"name": "do not litter symbol"
		},
		"dog": {
			"aliases": [],
			"ascii_arts": [],
			"category": "nature",
			"code": "dog",
			"code_points": [
				"1f436"
			],
			"keywords": [
				"animal",
				"dog",
				"friend",
				"nature",
				"pug",
				"woof"
			],
			"name": "dog face"
		},
		"dog2": {
			"aliases": [],
			"ascii_arts": [],
			"category": "nature",
			"code": "dog2",
			"code_points": [
				"1f415"
			],
			"keywords": [
				"animal",
				"bark",
				"dog",
				"doge",
				"fido",
				"friend",
				"nature",
				"pet",
				"pug",
				"puppy",
				"woof"
			],
			"name": "dog"
		},
		"dollar": {
			"aliases": [],
			"ascii_arts": [],
			"category": "objects",
			"code": "dollar",
			"code_points": [
				"1f4b5"
			],
			"keywords": [
				"australia",
				"banknote",
				"bill",
				"bills",
				"canada",
				"cash",
				"currency",
				"dollar",
				"money",
				"paper",
				"united states"
			],
			"name": "banknote with dollar sign"
		},
		"dolls": {
			"aliases": [],
			"ascii_arts": [],
			"category": "objects",
			"code": "dolls",
			"code_points": [
				"1f38e"
			],
			"keywords": [
				"blessing",
				"day",
				"dolls",
				"emperor",
				"empress",
				"family",
				"girls",
				"imperial",
				"japan",
				"japanese",
				"kimono",
				"people",
				"pray",
				"royal",
				"toy"
			],
			"name": "japanese dolls"
		},
		"dolphin": {
			"aliases": [
				"flipper"
			],
			"ascii_arts": [],
			"category": "nature",
			"code": "dolphin",
			"code_points": [
				"1f42c"
			],
			"keywords": [
				"animal",
				"fins",
				"fish",
				"flipper",
				"nature",
				"ocean",
				"sea",
				"tropical",
				"wildlife"
			],
			"name": "dolphin"
		},
		"door": {
			"aliases": [],
			"ascii_arts": [],
			"category": "objects",
			"code": "door",
			"code_points": [
				"1f6aa"
			],
			"keywords": [
				"door",
				"doorway",
				"enter",
				"entrance",
				"entry",
				"exit",
				"house",
				"object"
			],
			"name": "door"
		},
		"doughnut": {
			"aliases": [],
			"ascii_arts": [],
			"category": "food",
			"code": "doughnut",
			"code_points": [
				"1f369"
			],
			"keywords": [
				"breakfast",
				"desert",
				"dessert",
				"donut",
				"doughnut",
				"food",
				"fried",
				"homer",
				"pastry",
				"police",
				"snack",
				"sweet"
			],
			"name": "doughnut"
		},
		"dove": {
			"aliases": [
				"dove_of_peace"
			],
			"ascii_arts": [],
			"category": "nature",
			"code": "dove",
			"code_points": [
				"1f54a"
			],
			"keywords": [
				"animal",
				"bird",
				"symbol"
			],
			"name": "dove of peace"
		},
		"dragon": {
			"aliases": [],
			"ascii_arts": [],
			"category": "nature",
			"code": "dragon",
			"code_points": [
				"1f409"
			],
			"keywords": [
				"animal",
				"chinese",
				"dragon",
				"fire",
				"green",
				"legendary",
				"myth",
				"nature",
				"reptile",
				"roar"
			],
			"name": "dragon"
		},
		"dragon_face": {
			"aliases": [],
			"ascii_arts": [],
			"category": "nature",
			"code": "dragon_face",
			"code_points": [
				"1f432"
			],
			"keywords": [
				"animal",
				"chinese",
				"dragon",
				"fire",
				"green",
				"head",
				"legendary",
				"monster",
				"myth",
				"nature",
				"reptile",
				"roar"
			],
			"name": "dragon face"
		},
		"dress": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "dress",
			"code_points": [
				"1f457"
			],
			"keywords": [
				"clothes",
				"fashion",
				"girls night",
				"sexy",
				"women"
			],
			"name": "dress"
		},
		"dromedary_camel": {
			"aliases": [],
			"ascii_arts": [],
			"category": "nature",
			"code": "dromedary_camel",
			"code_points": [
				"1f42a"
			],
			"keywords": [
				"animal",
				"camel",
				"desert",
				"dromedary",
				"heat",
				"hot",
				"hump",
				"hump day",
				"middle east",
				"sex",
				"water",
				"wednesday",
				"wildlife"
			],
			"name": "dromedary camel"
		},
		"drooling_face": {
			"aliases": [
				"drool"
			],
			"ascii_arts": [],
			"category": "people",
			"code": "drooling_face",
			"code_points": [
				"1f924"
			],
			"keywords": [],
			"name": "drooling face"
		},
		"droplet": {
			"aliases": [],
			"ascii_arts": [],
			"category": "nature",
			"code": "droplet",
			"code_points": [
				"1f4a7"
			],
			"keywords": [
				"aqua",
				"drip",
				"drop",
				"droplet",
				"faucet",
				"h20",
				"moist",
				"moisture",
				"rain",
				"sky",
				"spit",
				"sweat",
				"tear",
				"water",
				"weather",
				"wet"
			],
			"name": "droplet"
		},
		"drum": {
			"aliases": [
				"drum_with_drumsticks"
			],
			"ascii_arts": [],
			"category": "activity",
			"code": "drum",
			"code_points": [
				"1f941"
			],
			"keywords": [],
			"name": "drum with drumsticks"
		},
		"duck": {
			"aliases": [],
			"ascii_arts": [],
			"category": "nature",
			"code": "duck",
			"code_points": [
				"1f986"
			],
			"keywords": [],
			"name": "duck"
		},
		"dvd": {
			"aliases": [],
			"ascii_arts": [],
			"category": "objects",
			"code": "dvd",
			"code_points": [
				"1f4c0"
			],
			"keywords": [
				"cd",
				"disc",
				"disk",
				"electronics"
			],
			"name": "dvd"
		},
		"e-mail": {
			"aliases": [
				"email"
			],
			"ascii_arts": [],
			"category": "objects",
			"code": "e-mail",
			"code_points": [
				"1f4e7"
			],
			"keywords": [
				"communication",
				"inbox",
				"office"
			],
			"name": "e-mail symbol"
		},
		"eagle": {
			"aliases": [],
			"ascii_arts": [],
			"category": "nature",
			"code": "eagle",
			"code_points": [
				"1f985"
			],
			"keywords": [],
			"name": "eagle"
		},
		"ear": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "ear",
			"code_points": [
				"1f442"
			],
			"keywords": [
				"body",
				"diversity",
				"face",
				"hear",
				"listen",
				"sound"
			],
			"name": "ear"
		},
		"ear_of_rice": {
			"aliases": [],
			"ascii_arts": [],
			"category": "nature",
			"code": "ear_of_rice",
			"code_points": [
				"1f33e"
			],
			"keywords": [
				"ear",
				"food",
				"leaf",
				"nature",
				"plant",
				"rice",
				"seed"
			],
			"name": "ear of rice"
		},
		"ear_tone1": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "ear_tone1",
			"code_points": [
				"1f442",
				"1f3fb"
			],
			"keywords": [
				"hear",
				"listen",
				"sound"
			],
			"name": "ear tone 1"
		},
		"ear_tone2": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "ear_tone2",
			"code_points": [
				"1f442",
				"1f3fc"
			],
			"keywords": [
				"hear",
				"listen",
				"sound"
			],
			"name": "ear tone 2"
		},
		"ear_tone3": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "ear_tone3",
			"code_points": [
				"1f442",
				"1f3fd"
			],
			"keywords": [
				"hear",
				"listen",
				"sound"
			],
			"name": "ear tone 3"
		},
		"ear_tone4": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "ear_tone4",
			"code_points": [
				"1f442",
				"1f3fe"
			],
			"keywords": [
				"hear",
				"listen",
				"sound"
			],
			"name": "ear tone 4"
		},
		"ear_tone5": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "ear_tone5",
			"code_points": [
				"1f442",
				"1f3ff"
			],
			"keywords": [
				"hear",
				"listen",
				"sound"
			],
			"name": "ear tone 5"
		},
		"earth_africa": {
			"aliases": [],
			"ascii_arts": [],
			"category": "nature",
			"code": "earth_africa",
			"code_points": [
				"1f30d"
			],
			"keywords": [
				"africa",
				"earth",
				"europe",
				"globe",
				"home",
				"international",
				"map",
				"planet",
				"space",
				"vacation",
				"world"
			],
			"name": "earth globe europe-africa"
		},
		"earth_americas": {
			"aliases": [],
			"ascii_arts": [],
			"category": "nature",
			"code": "earth_americas",
			"code_points": [
				"1f30e"
			],
			"keywords": [
				"USA",
				"america",
				"americas",
				"earth",
				"globe",
				"home",
				"international",
				"map",
				"north",
				"planet",
				"south",
				"space",
				"vacation",
				"world"
			],
			"name": "earth globe americas"
		},
		"earth_asia": {
			"aliases": [],
			"ascii_arts": [],
			"category": "nature",
			"code": "earth_asia",
			"code_points": [
				"1f30f"
			],
			"keywords": [
				"asia",
				"australia",
				"earth",
				"east",
				"globe",
				"home",
				"international",
				"map",
				"planet",
				"space",
				"vacation",
				"world"
			],
			"name": "earth globe asia-australia"
		},
		"egg": {
			"aliases": [],
			"ascii_arts": [],
			"category": "food",
			"code": "egg",
			"code_points": [
				"1f95a"
			],
			"keywords": [],
			"name": "egg"
		},
		"eggplant": {
			"aliases": [],
			"ascii_arts": [],
			"category": "food",
			"code": "eggplant",
			"code_points": [
				"1f346"
			],
			"keywords": [
				"aubergine",
				"eggplant",
				"food",
				"fruit",
				"nature",
				"penis",
				"purple",
				"vegetable",
				"vegetables"
			],
			"name": "aubergine"
		},
		"eight": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "eight",
			"code_points": [
				"38",
				"fe0f",
				"20e3"
			],
			"keywords": [
				"8",
				"blue-square",
				"math",
				"number",
				"numbers",
				"symbol"
			],
			"name": "keycap digit eight"
		},
		"eight_pointed_black_star": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "eight_pointed_black_star",
			"code_points": [
				"2734",
				"fe0f"
			],
			"keywords": [
				"symbol"
			],
			"name": "eight pointed black star"
		},
		"eight_spoked_asterisk": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "eight_spoked_asterisk",
			"code_points": [
				"2733",
				"fe0f"
			],
			"keywords": [
				"green-square",
				"sparkle",
				"star",
				"symbol"
			],
			"name": "eight spoked asterisk"
		},
		"eject": {
			"aliases": [
				"eject_symbol"
			],
			"ascii_arts": [],
			"category": "symbols",
			"code": "eject",
			"code_points": [
				"23cf",
				"fe0f"
			],
			"keywords": [],
			"name": "eject symbol"
		},
		"electric_plug": {
			"aliases": [],
			"ascii_arts": [],
			"category": "objects",
			"code": "electric_plug",
			"code_points": [
				"1f50c"
			],
			"keywords": [
				"charger",
				"electronics",
				"power"
			],
			"name": "electric plug"
		},
		"elephant": {
			"aliases": [],
			"ascii_arts": [],
			"category": "nature",
			"code": "elephant",
			"code_points": [
				"1f418"
			],
			"keywords": [
				"animal",
				"nature",
				"nose",
				"thailand",
				"wildlife"
			],
			"name": "elephant"
		},
		"end": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "end",
			"code_points": [
				"1f51a"
			],
			"keywords": [
				"arrow",
				"symbol",
				"words"
			],
			"name": "end with leftwards arrow above"
		},
		"envelope": {
			"aliases": [],
			"ascii_arts": [],
			"category": "objects",
			"code": "envelope",
			"code_points": [
				"2709",
				"fe0f"
			],
			"keywords": [
				"communication",
				"letter",
				"mail",
				"object",
				"office",
				"postal",
				"write"
			],
			"name": "envelope"
		},
		"envelope_with_arrow": {
			"aliases": [],
			"ascii_arts": [],
			"category": "objects",
			"code": "envelope_with_arrow",
			"code_points": [
				"1f4e9"
			],
			"keywords": [
				"email",
				"object",
				"office"
			],
			"name": "envelope with downwards arrow above"
		},
		"euro": {
			"aliases": [],
			"ascii_arts": [],
			"category": "objects",
			"code": "euro",
			"code_points": [
				"1f4b6"
			],
			"keywords": [
				"banknote",
				"bills",
				"cash",
				"currency",
				"dollar",
				"euro",
				"europe",
				"money",
				"paper"
			],
			"name": "banknote with euro sign"
		},
		"european_castle": {
			"aliases": [],
			"ascii_arts": [],
			"category": "travel",
			"code": "european_castle",
			"code_points": [
				"1f3f0"
			],
			"keywords": [
				"building",
				"castle",
				"disney",
				"disneyland",
				"european",
				"fort",
				"fortified",
				"fortress",
				"history",
				"king",
				"lord",
				"moat",
				"nobel",
				"places",
				"prince",
				"princess",
				"queen",
				"residence",
				"royalty",
				"stronghold",
				"tower",
				"travel",
				"vacation"
			],
			"name": "european castle"
		},
		"european_post_office": {
			"aliases": [],
			"ascii_arts": [],
			"category": "travel",
			"code": "european_post_office",
			"code_points": [
				"1f3e4"
			],
			"keywords": [
				"building",
				"places",
				"post office"
			],
			"name": "european post office"
		},
		"evergreen_tree": {
			"aliases": [],
			"ascii_arts": [],
			"category": "nature",
			"code": "evergreen_tree",
			"code_points": [
				"1f332"
			],
			"keywords": [
				"camp",
				"christmas",
				"evergreen",
				"holidays",
				"nature",
				"needles",
				"plant",
				"tree",
				"trees"
			],
			"name": "evergreen tree"
		},
		"exclamation": {
			"aliases": [
				"heavy_exclamation_mark"
			],
			"ascii_arts": [],
			"category": "symbols",
			"code": "exclamation",
			"code_points": [
				"2757",
				"fe0f"
			],
			"keywords": [
				"punctuation",
				"surprise",
				"symbol"
			],
			"name": "heavy exclamation mark symbol"
		},
		"expressionless": {
			"aliases": [],
			"ascii_arts": [
				"-_-",
				"-__-",
				"-___-"
			],
			"category": "people",
			"code": "expressionless",
			"code_points": [
				"1f611"
			],
			"keywords": [
				"blank",
				"emotion",
				"expressionless",
				"face",
				"indifferent",
				"mad",
				"neutral",
				"smiley",
				"vapid",
				"void",
				"without expression"
			],
			"name": "expressionless face"
		},
		"eye": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "eye",
			"code_points": [
				"1f441"
			],
			"keywords": [
				"body",
				"eyes",
				"look",
				"peek",
				"watch"
			],
			"name": "eye"
		},
		"eye_in_speech_bubble": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "eye_in_speech_bubble",
			"code_points": [
				"1f441",
				"200d",
				"1f5e8"
			],
			"keywords": [
				"eyes",
				"object",
				"symbol",
				"talk"
			],
			"name": "eye in speech bubble"
		},
		"eyeglasses": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "eyeglasses",
			"code_points": [
				"1f453"
			],
			"keywords": [
				"accessories",
				"blurry",
				"contacts",
				"eye",
				"eyeglasses",
				"eyesight",
				"farsightedness",
				"fashion",
				"frames",
				"glasses",
				"hyperopia",
				"myopia",
				"nearsightedness",
				"see",
				"sight",
				"spectacles",
				"vision"
			],
			"name": "eyeglasses"
		},
		"eyes": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "eyes",
			"code_points": [
				"1f440"
			],
			"keywords": [
				"body",
				"eyes",
				"look",
				"peek",
				"stalk",
				"watch"
			],
			"name": "eyes"
		},
		"face_palm": {
			"aliases": [
				"facepalm"
			],
			"ascii_arts": [],
			"category": "people",
			"code": "face_palm",
			"code_points": [
				"1f926"
			],
			"keywords": [],
			"name": "face palm"
		},
		"face_palm_tone1": {
			"aliases": [
				"facepalm_tone1"
			],
			"ascii_arts": [],
			"category": "people",
			"code": "face_palm_tone1",
			"code_points": [
				"1f926",
				"1f3fb"
			],
			"keywords": [],
			"name": "face palm tone 1"
		},
		"face_palm_tone2": {
			"aliases": [
				"facepalm_tone2"
			],
			"ascii_arts": [],
			"category": "people",
			"code": "face_palm_tone2",
			"code_points": [
				"1f926",
				"1f3fc"
			],
			"keywords": [],
			"name": "face palm tone 2"
		},
		"face_palm_tone3": {
			"aliases": [
				"facepalm_tone3"
			],
			"ascii_arts": [],
			"category": "people",
			"code": "face_palm_tone3",
			"code_points": [
				"1f926",
				"1f3fd"
			],
			"keywords": [],
			"name": "face palm tone 3"
		},
		"face_palm_tone4": {
			"aliases": [
				"facepalm_tone4"
			],
			"ascii_arts": [],
			"category": "people",
			"code": "face_palm_tone4",
			"code_points": [
				"1f926",
				"1f3fe"
			],
			"keywords": [],
			"name": "face palm tone 4"
		},
		"face_palm_tone5": {
			"aliases": [
				"facepalm_tone5"
			],
			"ascii_arts": [],
			"category": "people",
			"code": "face_palm_tone5",
			"code_points": [
				"1f926",
				"1f3ff"
			],
			"keywords": [],
			"name": "face palm tone 5"
		},
		"factory": {
			"aliases": [],
			"ascii_arts": [],
			"category": "travel",
			"code": "factory",
			"code_points": [
				"1f3ed"
			],
			"keywords": [
				"building",
				"places",
				"steam",
				"travel"
			],
			"name": "factory"
		},
		"fallen_leaf": {
			"aliases": [],
			"ascii_arts": [],
			"category": "nature",
			"code": "fallen_leaf",
			"code_points": [
				"1f342"
			],
			"keywords": [
				"autumn",
				"color",
				"deciduous",
				"fall",
				"leaf",
				"leaves",
				"nature",
				"plant",
				"vegetable"
			],
			"name": "fallen leaf"
		},
		"family": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "family",
			"code_points": [
				"1f46a"
			],
			"keywords": [
				"baby",
				"boy",
				"child",
				"dad",
				"family",
				"father",
				"girl",
				"group",
				"home",
				"mom",
				"mother",
				"parents",
				"people",
				"unit"
			],
			"name": "family"
		},
		"family_mmb": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "family_mmb",
			"code_points": [
				"1f468",
				"200d",
				"1f468",
				"200d",
				"1f466"
			],
			"keywords": [
				"baby",
				"boy",
				"child",
				"dad",
				"family",
				"father",
				"gay",
				"group",
				"homosexual",
				"lgbt",
				"man",
				"men",
				"parents",
				"people",
				"unit"
			],
			"name": "family (man,man,boy)"
		},
		"family_mmbb": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "family_mmbb",
			"code_points": [
				"1f468",
				"200d",
				"1f468",
				"200d",
				"1f466",
				"200d",
				"1f466"
			],
			"keywords": [
				"baby",
				"boy",
				"children",
				"dad",
				"family",
				"father",
				"gay",
				"group",
				"homosexual",
				"lgbt",
				"man",
				"men",
				"parents",
				"people",
				"unit"
			],
			"name": "family (man,man,boy,boy)"
		},
		"family_mmg": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "family_mmg",
			"code_points": [
				"1f468",
				"200d",
				"1f468",
				"200d",
				"1f467"
			],
			"keywords": [
				"baby",
				"child",
				"dad",
				"family",
				"father",
				"gay",
				"girl",
				"group",
				"homosexual",
				"lgbt",
				"man",
				"men",
				"parents",
				"people",
				"unit"
			],
			"name": "family (man,man,girl)"
		},
		"family_mmgb": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "family_mmgb",
			"code_points": [
				"1f468",
				"200d",
				"1f468",
				"200d",
				"1f467",
				"200d",
				"1f466"
			],
			"keywords": [
				"baby",
				"boy",
				"children",
				"dad",
				"family",
				"father",
				"gay",
				"girl",
				"group",
				"homosexual",
				"lgbt",
				"man",
				"men",
				"parents",
				"people",
				"unit"
			],
			"name": "family (man,man,girl,boy)"
		},
		"family_mmgg": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "family_mmgg",
			"code_points": [
				"1f468",
				"200d",
				"1f468",
				"200d",
				"1f467",
				"200d",
				"1f467"
			],
			"keywords": [
				"baby",
				"children",
				"dad",
				"family",
				"father",
				"gay",
				"girl",
				"group",
				"homosexual",
				"lgbt",
				"man",
				"men",
				"parents",
				"people",
				"unit"
			],
			"name": "family (man,man,girl,girl)"
		},
		"family_mwbb": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "family_mwbb",
			"code_points": [
				"1f468",
				"200d",
				"1f469",
				"200d",
				"1f466",
				"200d",
				"1f466"
			],
			"keywords": [
				"baby",
				"boy",
				"children",
				"dad",
				"family",
				"father",
				"group",
				"man",
				"mom",
				"mother",
				"parents",
				"people",
				"unit",
				"woman"
			],
			"name": "family (man,woman,boy,boy)"
		},
		"family_mwg": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "family_mwg",
			"code_points": [
				"1f468",
				"200d",
				"1f469",
				"200d",
				"1f467"
			],
			"keywords": [
				"baby",
				"boy",
				"child",
				"dad",
				"family",
				"father",
				"girl",
				"group",
				"man",
				"mom",
				"mother",
				"parents",
				"people",
				"unit",
				"woman"
			],
			"name": "family (man,woman,girl)"
		},
		"family_mwgb": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "family_mwgb",
			"code_points": [
				"1f468",
				"200d",
				"1f469",
				"200d",
				"1f467",
				"200d",
				"1f466"
			],
			"keywords": [
				"baby",
				"boy",
				"children",
				"dad",
				"family",
				"father",
				"girl",
				"group",
				"man",
				"mom",
				"mother",
				"parents",
				"people",
				"unit",
				"woman"
			],
			"name": "family (man,woman,girl,boy)"
		},
		"family_mwgg": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "family_mwgg",
			"code_points": [
				"1f468",
				"200d",
				"1f469",
				"200d",
				"1f467",
				"200d",
				"1f467"
			],
			"keywords": [
				"baby",
				"children",
				"dad",
				"family",
				"father",
				"girl",
				"group",
				"man",
				"mom",
				"mother",
				"parents",
				"people",
				"unit",
				"woman"
			],
			"name": "family (man,woman,girl,girl)"
		},
		"family_wwb": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "family_wwb",
			"code_points": [
				"1f469",
				"200d",
				"1f469",
				"200d",
				"1f466"
			],
			"keywords": [
				"baby",
				"boy",
				"child",
				"family",
				"gay",
				"group",
				"homosexual",
				"lesbian",
				"lgbt",
				"mom",
				"mother",
				"parents",
				"people",
				"unit",
				"woman",
				"women"
			],
			"name": "family (woman,woman,boy)"
		},
		"family_wwbb": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "family_wwbb",
			"code_points": [
				"1f469",
				"200d",
				"1f469",
				"200d",
				"1f466",
				"200d",
				"1f466"
			],
			"keywords": [
				"baby",
				"boy",
				"children",
				"family",
				"gay",
				"group",
				"homosexual",
				"lesbian",
				"lgbt",
				"mom",
				"mother",
				"parents",
				"people",
				"unit",
				"woman",
				"women"
			],
			"name": "family (woman,woman,boy,boy)"
		},
		"family_wwg": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "family_wwg",
			"code_points": [
				"1f469",
				"200d",
				"1f469",
				"200d",
				"1f467"
			],
			"keywords": [
				"baby",
				"child",
				"family",
				"gay",
				"girl",
				"group",
				"homosexual",
				"lesbian",
				"lgbt",
				"mom",
				"mother",
				"parents",
				"people",
				"unit",
				"woman",
				"women"
			],
			"name": "family (woman,woman,girl)"
		},
		"family_wwgb": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "family_wwgb",
			"code_points": [
				"1f469",
				"200d",
				"1f469",
				"200d",
				"1f467",
				"200d",
				"1f466"
			],
			"keywords": [
				"baby",
				"boy",
				"children",
				"family",
				"gay",
				"girl",
				"group",
				"homosexual",
				"lesbian",
				"lgbt",
				"mom",
				"mother",
				"parents",
				"people",
				"unit",
				"woman",
				"women"
			],
			"name": "family (woman,woman,girl,boy)"
		},
		"family_wwgg": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "family_wwgg",
			"code_points": [
				"1f469",
				"200d",
				"1f469",
				"200d",
				"1f467",
				"200d",
				"1f467"
			],
			"keywords": [
				"baby",
				"children",
				"family",
				"gay",
				"girl",
				"group",
				"homosexual",
				"lesbian",
				"lgbt",
				"mom",
				"mother",
				"parents",
				"people",
				"unit",
				"woman",
				"women"
			],
			"name": "family (woman,woman,girl,girl)"
		},
		"fast_forward": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "fast_forward",
			"code_points": [
				"23e9"
			],
			"keywords": [
				"arrow",
				"blue-square",
				"symbol"
			],
			"name": "black right-pointing double triangle"
		},
		"fax": {
			"aliases": [],
			"ascii_arts": [],
			"category": "objects",
			"code": "fax",
			"code_points": [
				"1f4e0"
			],
			"keywords": [
				"communication",
				"electronics",
				"office",
				"technology",
				"work"
			],
			"name": "fax machine"
		},
		"fearful": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "fearful",
			"code_points": [
				"1f628"
			],
			"keywords": [
				"emotion",
				"face",
				"fear",
				"fearful",
				"frightened",
				"nervous",
				"oops",
				"scared",
				"smiley",
				"surprised",
				"terrified"
			],
			"name": "fearful face"
		},
		"feet": {
			"aliases": [
				"paw_prints"
			],
			"ascii_arts": [],
			"category": "nature",
			"code": "feet",
			"code_points": [
				"1f43e"
			],
			"keywords": [
				"animal",
				"bear",
				"cat",
				"critter",
				"dog",
				"feet",
				"footprints",
				"footsteps",
				"imprints",
				"lion",
				"mark",
				"paw",
				"pawsteps",
				"pet",
				"prints",
				"raccoon",
				"tracking"
			],
			"name": "paw prints"
		},
		"fencer": {
			"aliases": [
				"fencing"
			],
			"ascii_arts": [],
			"category": "activity",
			"code": "fencer",
			"code_points": [
				"1f93a"
			],
			"keywords": [],
			"name": "fencer"
		},
		"ferris_wheel": {
			"aliases": [],
			"ascii_arts": [],
			"category": "travel",
			"code": "ferris_wheel",
			"code_points": [
				"1f3a1"
			],
			"keywords": [
				"amusement",
				"carnival",
				"entertainment",
				"fair",
				"farris",
				"ferris wheel",
				"londoneye",
				"park",
				"photo",
				"places",
				"ride",
				"vacation",
				"wheel"
			],
			"name": "ferris wheel"
		},
		"ferry": {
			"aliases": [],
			"ascii_arts": [],
			"category": "travel",
			"code": "ferry",
			"code_points": [
				"26f4"
			],
			"keywords": [
				"boat",
				"place",
				"transportation",
				"travel",
				"vacation"
			],
			"name": "ferry"
		},
		"field_hockey": {
			"aliases": [],
			"ascii_arts": [],
			"category": "activity",
			"code": "field_hockey",
			"code_points": [
				"1f3d1"
			],
			"keywords": [
				"ball",
				"hockey",
				"sport"
			],
			"name": "field hockey stick and ball"
		},
		"file_cabinet": {
			"aliases": [],
			"ascii_arts": [],
			"category": "objects",
			"code": "file_cabinet",
			"code_points": [
				"1f5c4"
			],
			"keywords": [
				"documents",
				"folders",
				"object",
				"office",
				"storage",
				"work"
			],
			"name": "file cabinet"
		},
		"file_folder": {
			"aliases": [],
			"ascii_arts": [],
			"category": "objects",
			"code": "file_folder",
			"code_points": [
				"1f4c1"
			],
			"keywords": [
				"documents",
				"office",
				"work"
			],
			"name": "file folder"
		},
		"film_frames": {
			"aliases": [],
			"ascii_arts": [],
			"category": "objects",
			"code": "film_frames",
			"code_points": [
				"1f39e"
			],
			"keywords": [
				"16mm",
				"8mm",
				"camera",
				"celluloid",
				"movie",
				"object",
				"record",
				"reel"
			],
			"name": "film frames"
		},
		"fingers_crossed": {
			"aliases": [
				"hand_with_index_and_middle_finger_crossed"
			],
			"ascii_arts": [],
			"category": "people",
			"code": "fingers_crossed",
			"code_points": [
				"1f91e"
			],
			"keywords": [],
			"name": "hand with first and index finger crossed"
		},
		"fingers_crossed_tone1": {
			"aliases": [
				"hand_with_index_and_middle_fingers_crossed_tone1"
			],
			"ascii_arts": [],
			"category": "people",
			"code": "fingers_crossed_tone1",
			"code_points": [
				"1f91e",
				"1f3fb"
			],
			"keywords": [],
			"name": "hand with index and middle fingers crossed tone 1"
		},
		"fingers_crossed_tone2": {
			"aliases": [
				"hand_with_index_and_middle_fingers_crossed_tone2"
			],
			"ascii_arts": [],
			"category": "people",
			"code": "fingers_crossed_tone2",
			"code_points": [
				"1f91e",
				"1f3fc"
			],
			"keywords": [],
			"name": "hand with index and middle fingers crossed tone 2"
		},
		"fingers_crossed_tone3": {
			"aliases": [
				"hand_with_index_and_middle_fingers_crossed_tone3"
			],
			"ascii_arts": [],
			"category": "people",
			"code": "fingers_crossed_tone3",
			"code_points": [
				"1f91e",
				"1f3fd"
			],
			"keywords": [],
			"name": "hand with index and middle fingers crossed tone 3"
		},
		"fingers_crossed_tone4": {
			"aliases": [
				"hand_with_index_and_middle_fingers_crossed_tone4"
			],
			"ascii_arts": [],
			"category": "people",
			"code": "fingers_crossed_tone4",
			"code_points": [
				"1f91e",
				"1f3fe"
			],
			"keywords": [],
			"name": "hand with index and middle fingers crossed tone 4"
		},
		"fingers_crossed_tone5": {
			"aliases": [
				"hand_with_index_and_middle_fingers_crossed_tone5"
			],
			"ascii_arts": [],
			"category": "people",
			"code": "fingers_crossed_tone5",
			"code_points": [
				"1f91e",
				"1f3ff"
			],
			"keywords": [],
			"name": "hand with index and middle fingers crossed tone 5"
		},
		"fire": {
			"aliases": [
				"flame"
			],
			"ascii_arts": [],
			"category": "nature",
			"code": "fire",
			"code_points": [
				"1f525"
			],
			"keywords": [
				"cook",
				"flame",
				"hot",
				"wth"
			],
			"name": "fire"
		},
		"fire_engine": {
			"aliases": [],
			"ascii_arts": [],
			"category": "travel",
			"code": "fire_engine",
			"code_points": [
				"1f692"
			],
			"keywords": [
				"911",
				"cars",
				"emergency",
				"engine",
				"fighter",
				"fire",
				"medical",
				"transportation",
				"truck",
				"vehicle"
			],
			"name": "fire engine"
		},
		"fireworks": {
			"aliases": [],
			"ascii_arts": [],
			"category": "travel",
			"code": "fireworks",
			"code_points": [
				"1f386"
			],
			"keywords": [
				"4th",
				"carnival",
				"celebration",
				"congratulations",
				"excitement",
				"explosion",
				"festival",
				"fireworks",
				"idea",
				"independence",
				"july",
				"parties",
				"photo",
				"rocket",
				"sky"
			],
			"name": "fireworks"
		},
		"first_place": {
			"aliases": [
				"first_place_medal"
			],
			"ascii_arts": [],
			"category": "activity",
			"code": "first_place",
			"code_points": [
				"1f947"
			],
			"keywords": [],
			"name": "first place medal"
		},
		"first_quarter_moon": {
			"aliases": [],
			"ascii_arts": [],
			"category": "nature",
			"code": "first_quarter_moon",
			"code_points": [
				"1f313"
			],
			"keywords": [
				"cheese",
				"first",
				"moon",
				"nature",
				"night",
				"phase",
				"quarter",
				"sky",
				"space"
			],
			"name": "first quarter moon symbol"
		},
		"first_quarter_moon_with_face": {
			"aliases": [],
			"ascii_arts": [],
			"category": "nature",
			"code": "first_quarter_moon_with_face",
			"code_points": [
				"1f31b"
			],
			"keywords": [
				"anthropomorphic",
				"cheese",
				"face",
				"first",
				"moon",
				"nature",
				"night",
				"phase",
				"quarter",
				"sky",
				"space"
			],
			"name": "first quarter moon with face"
		},
		"fish": {
			"aliases": [],
			"ascii_arts": [],
			"category": "nature",
			"code": "fish",
			"code_points": [
				"1f41f"
			],
			"keywords": [
				"animal",
				"food",
				"nature",
				"wildlife"
			],
			"name": "fish"
		},
		"fish_cake": {
			"aliases": [],
			"ascii_arts": [],
			"category": "food",
			"code": "fish_cake",
			"code_points": [
				"1f365"
			],
			"keywords": [
				"cake",
				"fish",
				"food",
				"kamboko",
				"naruto",
				"noodles",
				"ramen",
				"sushi",
				"swirl"
			],
			"name": "fish cake with swirl design"
		},
		"fishing_pole_and_fish": {
			"aliases": [],
			"ascii_arts": [],
			"category": "activity",
			"code": "fishing_pole_and_fish",
			"code_points": [
				"1f3a3"
			],
			"keywords": [
				"fish",
				"fishing",
				"food",
				"hobby",
				"pole",
				"sport",
				"vacation"
			],
			"name": "fishing pole and fish"
		},
		"fist": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "fist",
			"code_points": [
				"270a"
			],
			"keywords": [
				"body",
				"condolence",
				"diversity",
				"fingers",
				"fist bump",
				"grasp",
				"hand",
				"hands",
				"hi"
			],
			"name": "raised fist"
		},
		"fist_tone1": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "fist_tone1",
			"code_points": [
				"270a",
				"1f3fb"
			],
			"keywords": [
				"fingers",
				"grasp",
				"hand"
			],
			"name": "raised fist tone 1"
		},
		"fist_tone2": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "fist_tone2",
			"code_points": [
				"270a",
				"1f3fc"
			],
			"keywords": [
				"fingers",
				"grasp",
				"hand"
			],
			"name": "raised fist tone 2"
		},
		"fist_tone3": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "fist_tone3",
			"code_points": [
				"270a",
				"1f3fd"
			],
			"keywords": [
				"fingers",
				"grasp",
				"hand"
			],
			"name": "raised fist tone 3"
		},
		"fist_tone4": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "fist_tone4",
			"code_points": [
				"270a",
				"1f3fe"
			],
			"keywords": [
				"fingers",
				"grasp",
				"hand"
			],
			"name": "raised fist tone 4"
		},
		"fist_tone5": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "fist_tone5",
			"code_points": [
				"270a",
				"1f3ff"
			],
			"keywords": [
				"fingers",
				"grasp",
				"hand"
			],
			"name": "raised fist tone 5"
		},
		"five": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "five",
			"code_points": [
				"35",
				"fe0f",
				"20e3"
			],
			"keywords": [
				"blue-square",
				"math",
				"number",
				"numbers",
				"prime",
				"symbol"
			],
			"name": "keycap digit five"
		},
		"flag_ac": {
			"aliases": [
				"ac"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_ac",
			"code_points": [
				"1f1e6",
				"1f1e8"
			],
			"keywords": [
				"ac",
				"country",
				"flag",
				"nation"
			],
			"name": "ascension"
		},
		"flag_ad": {
			"aliases": [
				"ad"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_ad",
			"code_points": [
				"1f1e6",
				"1f1e9"
			],
			"keywords": [
				"ad",
				"country",
				"flag",
				"nation"
			],
			"name": "andorra"
		},
		"flag_ae": {
			"aliases": [
				"ae"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_ae",
			"code_points": [
				"1f1e6",
				"1f1ea"
			],
			"keywords": [
				"ae",
				"country",
				"flag",
				"nation"
			],
			"name": "the united arab emirates"
		},
		"flag_af": {
			"aliases": [
				"af"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_af",
			"code_points": [
				"1f1e6",
				"1f1eb"
			],
			"keywords": [
				"af",
				"afghanestan",
				"country",
				"flag",
				"nation"
			],
			"name": "afghanistan"
		},
		"flag_ag": {
			"aliases": [
				"ag"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_ag",
			"code_points": [
				"1f1e6",
				"1f1ec"
			],
			"keywords": [
				"ag",
				"country",
				"flag",
				"nation"
			],
			"name": "antigua and barbuda"
		},
		"flag_ai": {
			"aliases": [
				"ai"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_ai",
			"code_points": [
				"1f1e6",
				"1f1ee"
			],
			"keywords": [
				"ai",
				"country",
				"flag",
				"nation"
			],
			"name": "anguilla"
		},
		"flag_al": {
			"aliases": [
				"al"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_al",
			"code_points": [
				"1f1e6",
				"1f1f1"
			],
			"keywords": [
				"al",
				"country",
				"flag",
				"nation",
				"shqiperia"
			],
			"name": "albania"
		},
		"flag_am": {
			"aliases": [
				"am"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_am",
			"code_points": [
				"1f1e6",
				"1f1f2"
			],
			"keywords": [
				"am",
				"country",
				"flag",
				"hayastan",
				"nation"
			],
			"name": "armenia"
		},
		"flag_ao": {
			"aliases": [
				"ao"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_ao",
			"code_points": [
				"1f1e6",
				"1f1f4"
			],
			"keywords": [
				"ao",
				"country",
				"flag",
				"nation"
			],
			"name": "angola"
		},
		"flag_aq": {
			"aliases": [
				"aq"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_aq",
			"code_points": [
				"1f1e6",
				"1f1f6"
			],
			"keywords": [
				"country",
				"flag"
			],
			"name": "antarctica"
		},
		"flag_ar": {
			"aliases": [
				"ar"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_ar",
			"code_points": [
				"1f1e6",
				"1f1f7"
			],
			"keywords": [
				"ar",
				"country",
				"flag",
				"nation"
			],
			"name": "argentina"
		},
		"flag_as": {
			"aliases": [
				"as"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_as",
			"code_points": [
				"1f1e6",
				"1f1f8"
			],
			"keywords": [
				"country",
				"flag"
			],
			"name": "american samoa"
		},
		"flag_at": {
			"aliases": [
				"at"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_at",
			"code_points": [
				"1f1e6",
				"1f1f9"
			],
			"keywords": [
				"&ouml;sterreich",
				"at",
				"country",
				"flag",
				"nation",
				"osterreich"
			],
			"name": "austria"
		},
		"flag_au": {
			"aliases": [
				"au"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_au",
			"code_points": [
				"1f1e6",
				"1f1fa"
			],
			"keywords": [
				"au",
				"country",
				"flag",
				"nation"
			],
			"name": "australia"
		},
		"flag_aw": {
			"aliases": [
				"aw"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_aw",
			"code_points": [
				"1f1e6",
				"1f1fc"
			],
			"keywords": [
				"aw",
				"country",
				"flag",
				"nation"
			],
			"name": "aruba"
		},
		"flag_ax": {
			"aliases": [
				"ax"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_ax",
			"code_points": [
				"1f1e6",
				"1f1fd"
			],
			"keywords": [
				"country",
				"flag"
			],
			"name": "åland islands"
		},
		"flag_az": {
			"aliases": [
				"az"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_az",
			"code_points": [
				"1f1e6",
				"1f1ff"
			],
			"keywords": [
				"az",
				"azarbaycan",
				"country",
				"flag",
				"nation"
			],
			"name": "azerbaijan"
		},
		"flag_ba": {
			"aliases": [
				"ba"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_ba",
			"code_points": [
				"1f1e7",
				"1f1e6"
			],
			"keywords": [
				"ba",
				"bosna i hercegovina",
				"country",
				"flag",
				"nation"
			],
			"name": "bosnia and herzegovina"
		},
		"flag_bb": {
			"aliases": [
				"bb"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_bb",
			"code_points": [
				"1f1e7",
				"1f1e7"
			],
			"keywords": [
				"bb",
				"country",
				"flag",
				"nation"
			],
			"name": "barbados"
		},
		"flag_bd": {
			"aliases": [
				"bd"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_bd",
			"code_points": [
				"1f1e7",
				"1f1e9"
			],
			"keywords": [
				"bd",
				"country",
				"flag",
				"nation"
			],
			"name": "bangladesh"
		},
		"flag_be": {
			"aliases": [
				"be"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_be",
			"code_points": [
				"1f1e7",
				"1f1ea"
			],
			"keywords": [
				"be",
				"belgie",
				"belgique",
				"country",
				"flag",
				"nation"
			],
			"name": "belgium"
		},
		"flag_bf": {
			"aliases": [
				"bf"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_bf",
			"code_points": [
				"1f1e7",
				"1f1eb"
			],
			"keywords": [
				"bf",
				"country",
				"flag",
				"nation"
			],
			"name": "burkina faso"
		},
		"flag_bg": {
			"aliases": [
				"bg"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_bg",
			"code_points": [
				"1f1e7",
				"1f1ec"
			],
			"keywords": [
				"bg",
				"country",
				"flag",
				"nation"
			],
			"name": "bulgaria"
		},
		"flag_bh": {
			"aliases": [
				"bh"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_bh",
			"code_points": [
				"1f1e7",
				"1f1ed"
			],
			"keywords": [
				"al bahrayn",
				"bh",
				"country",
				"flag",
				"nation"
			],
			"name": "bahrain"
		},
		"flag_bi": {
			"aliases": [
				"bi"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_bi",
			"code_points": [
				"1f1e7",
				"1f1ee"
			],
			"keywords": [
				"bi",
				"country",
				"flag",
				"nation"
			],
			"name": "burundi"
		},
		"flag_bj": {
			"aliases": [
				"bj"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_bj",
			"code_points": [
				"1f1e7",
				"1f1ef"
			],
			"keywords": [
				"bj",
				"country",
				"flag",
				"nation"
			],
			"name": "benin"
		},
		"flag_bl": {
			"aliases": [
				"bl"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_bl",
			"code_points": [
				"1f1e7",
				"1f1f1"
			],
			"keywords": [
				"country",
				"flag"
			],
			"name": "saint barthélemy"
		},
		"flag_black": {
			"aliases": [
				"waving_black_flag"
			],
			"ascii_arts": [],
			"category": "objects",
			"code": "flag_black",
			"code_points": [
				"1f3f4"
			],
			"keywords": [
				"object",
				"signal",
				"symbol"
			],
			"name": "waving black flag"
		},
		"flag_bm": {
			"aliases": [
				"bm"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_bm",
			"code_points": [
				"1f1e7",
				"1f1f2"
			],
			"keywords": [
				"bm",
				"country",
				"flag",
				"nation"
			],
			"name": "bermuda"
		},
		"flag_bn": {
			"aliases": [
				"bn"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_bn",
			"code_points": [
				"1f1e7",
				"1f1f3"
			],
			"keywords": [
				"bn",
				"country",
				"flag",
				"nation"
			],
			"name": "brunei"
		},
		"flag_bo": {
			"aliases": [
				"bo"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_bo",
			"code_points": [
				"1f1e7",
				"1f1f4"
			],
			"keywords": [
				"bo",
				"country",
				"flag",
				"nation"
			],
			"name": "bolivia"
		},
		"flag_bq": {
			"aliases": [
				"bq"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_bq",
			"code_points": [
				"1f1e7",
				"1f1f6"
			],
			"keywords": [
				"country",
				"flag"
			],
			"name": "caribbean netherlands"
		},
		"flag_br": {
			"aliases": [
				"br"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_br",
			"code_points": [
				"1f1e7",
				"1f1f7"
			],
			"keywords": [
				"br",
				"brasil",
				"country",
				"flag",
				"nation"
			],
			"name": "brazil"
		},
		"flag_bs": {
			"aliases": [
				"bs"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_bs",
			"code_points": [
				"1f1e7",
				"1f1f8"
			],
			"keywords": [
				"bs",
				"country",
				"flag",
				"nation"
			],
			"name": "the bahamas"
		},
		"flag_bt": {
			"aliases": [
				"bt"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_bt",
			"code_points": [
				"1f1e7",
				"1f1f9"
			],
			"keywords": [
				"bt",
				"country",
				"flag",
				"nation"
			],
			"name": "bhutan"
		},
		"flag_bv": {
			"aliases": [
				"bv"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_bv",
			"code_points": [
				"1f1e7",
				"1f1fb"
			],
			"keywords": [
				"country",
				"flag"
			],
			"name": "bouvet island"
		},
		"flag_bw": {
			"aliases": [
				"bw"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_bw",
			"code_points": [
				"1f1e7",
				"1f1fc"
			],
			"keywords": [
				"bw",
				"country",
				"flag",
				"nation"
			],
			"name": "botswana"
		},
		"flag_by": {
			"aliases": [
				"by"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_by",
			"code_points": [
				"1f1e7",
				"1f1fe"
			],
			"keywords": [
				"by",
				"byelarus",
				"country",
				"flag",
				"nation"
			],
			"name": "belarus"
		},
		"flag_bz": {
			"aliases": [
				"bz"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_bz",
			"code_points": [
				"1f1e7",
				"1f1ff"
			],
			"keywords": [
				"bz",
				"country",
				"flag",
				"nation"
			],
			"name": "belize"
		},
		"flag_ca": {
			"aliases": [
				"ca"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_ca",
			"code_points": [
				"1f1e8",
				"1f1e6"
			],
			"keywords": [
				"ca",
				"country",
				"flag",
				"nation"
			],
			"name": "canada"
		},
		"flag_cc": {
			"aliases": [
				"cc"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_cc",
			"code_points": [
				"1f1e8",
				"1f1e8"
			],
			"keywords": [
				"country",
				"flag"
			],
			"name": "cocos (keeling) islands"
		},
		"flag_cd": {
			"aliases": [
				"congo"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_cd",
			"code_points": [
				"1f1e8",
				"1f1e9"
			],
			"keywords": [
				"cd",
				"country",
				"flag",
				"nation",
				"r&eacute;publique d&eacute;mocratique du congo",
				"republique democratique du congo"
			],
			"name": "the democratic republic of the congo"
		},
		"flag_cf": {
			"aliases": [
				"cf"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_cf",
			"code_points": [
				"1f1e8",
				"1f1eb"
			],
			"keywords": [
				"cf",
				"country",
				"flag",
				"nation"
			],
			"name": "central african republic"
		},
		"flag_cg": {
			"aliases": [
				"cg"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_cg",
			"code_points": [
				"1f1e8",
				"1f1ec"
			],
			"keywords": [
				"cg",
				"country",
				"flag",
				"nation"
			],
			"name": "the republic of the congo"
		},
		"flag_ch": {
			"aliases": [
				"ch"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_ch",
			"code_points": [
				"1f1e8",
				"1f1ed"
			],
			"keywords": [
				"country",
				"flag",
				"nation",
				"neutral",
				"swiss"
			],
			"name": "switzerland"
		},
		"flag_ci": {
			"aliases": [
				"ci"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_ci",
			"code_points": [
				"1f1e8",
				"1f1ee"
			],
			"keywords": [
				"ci",
				"country",
				"flag",
				"nation"
			],
			"name": "cote d'ivoire"
		},
		"flag_ck": {
			"aliases": [
				"ck"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_ck",
			"code_points": [
				"1f1e8",
				"1f1f0"
			],
			"keywords": [
				"country",
				"flag"
			],
			"name": "cook islands"
		},
		"flag_cl": {
			"aliases": [
				"chile"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_cl",
			"code_points": [
				"1f1e8",
				"1f1f1"
			],
			"keywords": [
				"cl",
				"country",
				"flag",
				"nation"
			],
			"name": "chile"
		},
		"flag_cm": {
			"aliases": [
				"cm"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_cm",
			"code_points": [
				"1f1e8",
				"1f1f2"
			],
			"keywords": [
				"cm",
				"country",
				"flag",
				"nation"
			],
			"name": "cameroon"
		},
		"flag_cn": {
			"aliases": [
				"cn"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_cn",
			"code_points": [
				"1f1e8",
				"1f1f3"
			],
			"keywords": [
				"chinese",
				"cn",
				"country",
				"flag",
				"nation",
				"prc",
				"zhong guo"
			],
			"name": "china"
		},
		"flag_co": {
			"aliases": [
				"co"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_co",
			"code_points": [
				"1f1e8",
				"1f1f4"
			],
			"keywords": [
				"co",
				"country",
				"flag",
				"nation"
			],
			"name": "colombia"
		},
		"flag_cp": {
			"aliases": [
				"cp"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_cp",
			"code_points": [
				"1f1e8",
				"1f1f5"
			],
			"keywords": [
				"country",
				"flag"
			],
			"name": "clipperton island"
		},
		"flag_cr": {
			"aliases": [
				"cr"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_cr",
			"code_points": [
				"1f1e8",
				"1f1f7"
			],
			"keywords": [
				"country",
				"cr",
				"flag",
				"nation"
			],
			"name": "costa rica"
		},
		"flag_cu": {
			"aliases": [
				"cu"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_cu",
			"code_points": [
				"1f1e8",
				"1f1fa"
			],
			"keywords": [
				"country",
				"cu",
				"flag",
				"nation"
			],
			"name": "cuba"
		},
		"flag_cv": {
			"aliases": [
				"cv"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_cv",
			"code_points": [
				"1f1e8",
				"1f1fb"
			],
			"keywords": [
				"cabo verde",
				"country",
				"cv",
				"flag",
				"nation"
			],
			"name": "cape verde"
		},
		"flag_cw": {
			"aliases": [
				"cw"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_cw",
			"code_points": [
				"1f1e8",
				"1f1fc"
			],
			"keywords": [
				"country",
				"flag"
			],
			"name": "curaçao"
		},
		"flag_cx": {
			"aliases": [
				"cx"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_cx",
			"code_points": [
				"1f1e8",
				"1f1fd"
			],
			"keywords": [
				"country",
				"flag"
			],
			"name": "christmas island"
		},
		"flag_cy": {
			"aliases": [
				"cy"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_cy",
			"code_points": [
				"1f1e8",
				"1f1fe"
			],
			"keywords": [
				"country",
				"cy",
				"flag",
				"kibris",
				"kypros",
				"nation"
			],
			"name": "cyprus"
		},
		"flag_cz": {
			"aliases": [
				"cz"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_cz",
			"code_points": [
				"1f1e8",
				"1f1ff"
			],
			"keywords": [
				"ceska republika",
				"country",
				"cz",
				"flag",
				"nation"
			],
			"name": "the czech republic"
		},
		"flag_de": {
			"aliases": [
				"de"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_de",
			"code_points": [
				"1f1e9",
				"1f1ea"
			],
			"keywords": [
				"country",
				"de",
				"deutschland",
				"flag",
				"german",
				"nation"
			],
			"name": "germany"
		},
		"flag_dg": {
			"aliases": [
				"dg"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_dg",
			"code_points": [
				"1f1e9",
				"1f1ec"
			],
			"keywords": [
				"country",
				"flag"
			],
			"name": "diego garcia"
		},
		"flag_dj": {
			"aliases": [
				"dj"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_dj",
			"code_points": [
				"1f1e9",
				"1f1ef"
			],
			"keywords": [
				"country",
				"dj",
				"flag",
				"nation"
			],
			"name": "djibouti"
		},
		"flag_dk": {
			"aliases": [
				"dk"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_dk",
			"code_points": [
				"1f1e9",
				"1f1f0"
			],
			"keywords": [
				"country",
				"danmark",
				"dk",
				"flag",
				"nation"
			],
			"name": "denmark"
		},
		"flag_dm": {
			"aliases": [
				"dm"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_dm",
			"code_points": [
				"1f1e9",
				"1f1f2"
			],
			"keywords": [
				"country",
				"dm",
				"flag",
				"nation"
			],
			"name": "dominica"
		},
		"flag_do": {
			"aliases": [
				"do"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_do",
			"code_points": [
				"1f1e9",
				"1f1f4"
			],
			"keywords": [
				"country",
				"do",
				"flag",
				"nation"
			],
			"name": "the dominican republic"
		},
		"flag_dz": {
			"aliases": [
				"dz"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_dz",
			"code_points": [
				"1f1e9",
				"1f1ff"
			],
			"keywords": [
				"al jaza'ir",
				"al jazair",
				"country",
				"dz",
				"flag",
				"nation"
			],
			"name": "algeria"
		},
		"flag_ea": {
			"aliases": [
				"ea"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_ea",
			"code_points": [
				"1f1ea",
				"1f1e6"
			],
			"keywords": [
				"country",
				"flag"
			],
			"name": "ceuta, melilla"
		},
		"flag_ec": {
			"aliases": [
				"ec"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_ec",
			"code_points": [
				"1f1ea",
				"1f1e8"
			],
			"keywords": [
				"country",
				"ec",
				"flag",
				"nation"
			],
			"name": "ecuador"
		},
		"flag_ee": {
			"aliases": [
				"ee"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_ee",
			"code_points": [
				"1f1ea",
				"1f1ea"
			],
			"keywords": [
				"country",
				"ee",
				"eesti vabariik",
				"flag",
				"nation"
			],
			"name": "estonia"
		},
		"flag_eg": {
			"aliases": [
				"eg"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_eg",
			"code_points": [
				"1f1ea",
				"1f1ec"
			],
			"keywords": [
				"country",
				"eg",
				"flag",
				"misr",
				"nation"
			],
			"name": "egypt"
		},
		"flag_eh": {
			"aliases": [
				"eh"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_eh",
			"code_points": [
				"1f1ea",
				"1f1ed"
			],
			"keywords": [
				"aṣ-Ṣaḥrā’ al-gharbīyah",
				"country",
				"eh",
				"flag",
				"gharbiyah",
				"nation",
				"sahra"
			],
			"name": "western sahara"
		},
		"flag_er": {
			"aliases": [
				"er"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_er",
			"code_points": [
				"1f1ea",
				"1f1f7"
			],
			"keywords": [
				"country",
				"er",
				"flag",
				"hagere ertra",
				"nation"
			],
			"name": "eritrea"
		},
		"flag_es": {
			"aliases": [
				"es"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_es",
			"code_points": [
				"1f1ea",
				"1f1f8"
			],
			"keywords": [
				"country",
				"es",
				"espa&ntilde;a",
				"espana",
				"flag",
				"nation"
			],
			"name": "spain"
		},
		"flag_et": {
			"aliases": [
				"et"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_et",
			"code_points": [
				"1f1ea",
				"1f1f9"
			],
			"keywords": [
				"country",
				"et",
				"flag",
				"ityop'iya",
				"ityopiya",
				"nation"
			],
			"name": "ethiopia"
		},
		"flag_eu": {
			"aliases": [
				"eu"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_eu",
			"code_points": [
				"1f1ea",
				"1f1fa"
			],
			"keywords": [
				"country",
				"flag"
			],
			"name": "european union"
		},
		"flag_fi": {
			"aliases": [
				"fi"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_fi",
			"code_points": [
				"1f1eb",
				"1f1ee"
			],
			"keywords": [
				"country",
				"fi",
				"flag",
				"nation",
				"suomen tasavalta"
			],
			"name": "finland"
		},
		"flag_fj": {
			"aliases": [
				"fj"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_fj",
			"code_points": [
				"1f1eb",
				"1f1ef"
			],
			"keywords": [
				"country",
				"fj",
				"flag",
				"nation"
			],
			"name": "fiji"
		},
		"flag_fk": {
			"aliases": [
				"fk"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_fk",
			"code_points": [
				"1f1eb",
				"1f1f0"
			],
			"keywords": [
				"country",
				"fk",
				"flag",
				"islas malvinas",
				"nation"
			],
			"name": "falkland islands"
		},
		"flag_fm": {
			"aliases": [
				"fm"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_fm",
			"code_points": [
				"1f1eb",
				"1f1f2"
			],
			"keywords": [
				"country",
				"flag",
				"fm",
				"nation"
			],
			"name": "micronesia"
		},
		"flag_fo": {
			"aliases": [
				"fo"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_fo",
			"code_points": [
				"1f1eb",
				"1f1f4"
			],
			"keywords": [
				"country",
				"flag",
				"fo",
				"foroyar",
				"nation"
			],
			"name": "faroe islands"
		},
		"flag_fr": {
			"aliases": [
				"fr"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_fr",
			"code_points": [
				"1f1eb",
				"1f1f7"
			],
			"keywords": [
				"country",
				"flag",
				"fr",
				"french",
				"nation"
			],
			"name": "france"
		},
		"flag_ga": {
			"aliases": [
				"ga"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_ga",
			"code_points": [
				"1f1ec",
				"1f1e6"
			],
			"keywords": [
				"country",
				"flag",
				"ga",
				"nation"
			],
			"name": "gabon"
		},
		"flag_gb": {
			"aliases": [
				"gb",
				"uk"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_gb",
			"code_points": [
				"1f1ec",
				"1f1e7"
			],
			"keywords": [
				"UK",
				"britsh",
				"country",
				"england",
				"flag",
				"gb",
				"nation",
				"united kingdom"
			],
			"name": "great britain"
		},
		"flag_gd": {
			"aliases": [
				"gd"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_gd",
			"code_points": [
				"1f1ec",
				"1f1e9"
			],
			"keywords": [
				"country",
				"flag",
				"gd",
				"nation"
			],
			"name": "grenada"
		},
		"flag_ge": {
			"aliases": [
				"ge"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_ge",
			"code_points": [
				"1f1ec",
				"1f1ea"
			],
			"keywords": [
				"country",
				"flag",
				"ge",
				"nation",
				"sak'art'velo",
				"sakartvelo"
			],
			"name": "georgia"
		},
		"flag_gf": {
			"aliases": [
				"gf"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_gf",
			"code_points": [
				"1f1ec",
				"1f1eb"
			],
			"keywords": [
				"country",
				"flag"
			],
			"name": "french guiana"
		},
		"flag_gg": {
			"aliases": [
				"gg"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_gg",
			"code_points": [
				"1f1ec",
				"1f1ec"
			],
			"keywords": [
				"country",
				"flag"
			],
			"name": "guernsey"
		},
		"flag_gh": {
			"aliases": [
				"gh"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_gh",
			"code_points": [
				"1f1ec",
				"1f1ed"
			],
			"keywords": [
				"country",
				"flag",
				"gh",
				"nation"
			],
			"name": "ghana"
		},
		"flag_gi": {
			"aliases": [
				"gi"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_gi",
			"code_points": [
				"1f1ec",
				"1f1ee"
			],
			"keywords": [
				"country",
				"flag",
				"gi",
				"nation"
			],
			"name": "gibraltar"
		},
		"flag_gl": {
			"aliases": [
				"gl"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_gl",
			"code_points": [
				"1f1ec",
				"1f1f1"
			],
			"keywords": [
				"country",
				"flag",
				"gl",
				"kalaallit nunaat",
				"nation"
			],
			"name": "greenland"
		},
		"flag_gm": {
			"aliases": [
				"gm"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_gm",
			"code_points": [
				"1f1ec",
				"1f1f2"
			],
			"keywords": [
				"country",
				"flag",
				"gm",
				"nation"
			],
			"name": "the gambia"
		},
		"flag_gn": {
			"aliases": [
				"gn"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_gn",
			"code_points": [
				"1f1ec",
				"1f1f3"
			],
			"keywords": [
				"country",
				"flag",
				"gn",
				"guinee",
				"nation"
			],
			"name": "guinea"
		},
		"flag_gp": {
			"aliases": [
				"gp"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_gp",
			"code_points": [
				"1f1ec",
				"1f1f5"
			],
			"keywords": [
				"country",
				"flag"
			],
			"name": "guadeloupe"
		},
		"flag_gq": {
			"aliases": [
				"gq"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_gq",
			"code_points": [
				"1f1ec",
				"1f1f6"
			],
			"keywords": [
				"country",
				"flag",
				"gq",
				"guinea ecuatorial",
				"nation"
			],
			"name": "equatorial guinea"
		},
		"flag_gr": {
			"aliases": [
				"gr"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_gr",
			"code_points": [
				"1f1ec",
				"1f1f7"
			],
			"keywords": [
				"country",
				"ellada",
				"ellas",
				"flag",
				"gr",
				"nation"
			],
			"name": "greece"
		},
		"flag_gs": {
			"aliases": [
				"gs"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_gs",
			"code_points": [
				"1f1ec",
				"1f1f8"
			],
			"keywords": [
				"country",
				"flag"
			],
			"name": "south georgia"
		},
		"flag_gt": {
			"aliases": [
				"gt"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_gt",
			"code_points": [
				"1f1ec",
				"1f1f9"
			],
			"keywords": [
				"country",
				"flag",
				"gt",
				"nation"
			],
			"name": "guatemala"
		},
		"flag_gu": {
			"aliases": [
				"gu"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_gu",
			"code_points": [
				"1f1ec",
				"1f1fa"
			],
			"keywords": [
				"country",
				"flag",
				"gu",
				"nation"
			],
			"name": "guam"
		},
		"flag_gw": {
			"aliases": [
				"gw"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_gw",
			"code_points": [
				"1f1ec",
				"1f1fc"
			],
			"keywords": [
				"country",
				"flag",
				"guine bissau",
				"guine-bissau",
				"gw",
				"nation"
			],
			"name": "guinea-bissau"
		},
		"flag_gy": {
			"aliases": [
				"gy"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_gy",
			"code_points": [
				"1f1ec",
				"1f1fe"
			],
			"keywords": [
				"country",
				"flag",
				"gy",
				"nation"
			],
			"name": "guyana"
		},
		"flag_hk": {
			"aliases": [
				"hk"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_hk",
			"code_points": [
				"1f1ed",
				"1f1f0"
			],
			"keywords": [
				"country",
				"flag",
				"hk",
				"nation",
				"xianggang"
			],
			"name": "hong kong"
		},
		"flag_hm": {
			"aliases": [
				"hm"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_hm",
			"code_points": [
				"1f1ed",
				"1f1f2"
			],
			"keywords": [
				"country",
				"flag"
			],
			"name": "heard island and mcdonald islands"
		},
		"flag_hn": {
			"aliases": [
				"hn"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_hn",
			"code_points": [
				"1f1ed",
				"1f1f3"
			],
			"keywords": [
				"country",
				"flag",
				"hn",
				"nation"
			],
			"name": "honduras"
		},
		"flag_hr": {
			"aliases": [
				"hr"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_hr",
			"code_points": [
				"1f1ed",
				"1f1f7"
			],
			"keywords": [
				"country",
				"flag",
				"hr",
				"hrvatska",
				"nation"
			],
			"name": "croatia"
		},
		"flag_ht": {
			"aliases": [
				"ht"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_ht",
			"code_points": [
				"1f1ed",
				"1f1f9"
			],
			"keywords": [
				"country",
				"flag",
				"ht",
				"nation"
			],
			"name": "haiti"
		},
		"flag_hu": {
			"aliases": [
				"hu"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_hu",
			"code_points": [
				"1f1ed",
				"1f1fa"
			],
			"keywords": [
				"country",
				"flag",
				"hu",
				"magyarorszag",
				"nation"
			],
			"name": "hungary"
		},
		"flag_ic": {
			"aliases": [
				"ic"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_ic",
			"code_points": [
				"1f1ee",
				"1f1e8"
			],
			"keywords": [
				"country",
				"flag"
			],
			"name": "canary islands"
		},
		"flag_id": {
			"aliases": [
				"indonesia"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_id",
			"code_points": [
				"1f1ee",
				"1f1e9"
			],
			"keywords": [
				"country",
				"flag",
				"id",
				"nation"
			],
			"name": "indonesia"
		},
		"flag_ie": {
			"aliases": [
				"ie"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_ie",
			"code_points": [
				"1f1ee",
				"1f1ea"
			],
			"keywords": [
				"&eacute;ire",
				"country",
				"eire",
				"flag",
				"ie",
				"nation"
			],
			"name": "ireland"
		},
		"flag_il": {
			"aliases": [
				"il"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_il",
			"code_points": [
				"1f1ee",
				"1f1f1"
			],
			"keywords": [
				"country",
				"flag",
				"il",
				"jew",
				"nation",
				"yisra'el",
				"yisrael"
			],
			"name": "israel"
		},
		"flag_im": {
			"aliases": [
				"im"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_im",
			"code_points": [
				"1f1ee",
				"1f1f2"
			],
			"keywords": [
				"country",
				"flag"
			],
			"name": "isle of man"
		},
		"flag_in": {
			"aliases": [
				"in"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_in",
			"code_points": [
				"1f1ee",
				"1f1f3"
			],
			"keywords": [
				"bharat",
				"country",
				"flag",
				"in",
				"nation"
			],
			"name": "india"
		},
		"flag_io": {
			"aliases": [
				"io"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_io",
			"code_points": [
				"1f1ee",
				"1f1f4"
			],
			"keywords": [
				"country",
				"flag"
			],
			"name": "british indian ocean territory"
		},
		"flag_iq": {
			"aliases": [
				"iq"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_iq",
			"code_points": [
				"1f1ee",
				"1f1f6"
			],
			"keywords": [
				"country",
				"flag",
				"iq",
				"nation"
			],
			"name": "iraq"
		},
		"flag_ir": {
			"aliases": [
				"ir"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_ir",
			"code_points": [
				"1f1ee",
				"1f1f7"
			],
			"keywords": [
				"country",
				"flag",
				"ir",
				"nation"
			],
			"name": "iran"
		},
		"flag_is": {
			"aliases": [
				"is"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_is",
			"code_points": [
				"1f1ee",
				"1f1f8"
			],
			"keywords": [
				"country",
				"flag",
				"is",
				"lyoveldio island",
				"nation"
			],
			"name": "iceland"
		},
		"flag_it": {
			"aliases": [
				"it"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_it",
			"code_points": [
				"1f1ee",
				"1f1f9"
			],
			"keywords": [
				"country",
				"flag",
				"it",
				"italia",
				"italian",
				"nation"
			],
			"name": "italy"
		},
		"flag_je": {
			"aliases": [
				"je"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_je",
			"code_points": [
				"1f1ef",
				"1f1ea"
			],
			"keywords": [
				"country",
				"flag",
				"je",
				"nation"
			],
			"name": "jersey"
		},
		"flag_jm": {
			"aliases": [
				"jm"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_jm",
			"code_points": [
				"1f1ef",
				"1f1f2"
			],
			"keywords": [
				"country",
				"flag",
				"jm",
				"nation"
			],
			"name": "jamaica"
		},
		"flag_jo": {
			"aliases": [
				"jo"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_jo",
			"code_points": [
				"1f1ef",
				"1f1f4"
			],
			"keywords": [
				"al urdun",
				"country",
				"flag",
				"jo",
				"nation"
			],
			"name": "jordan"
		},
		"flag_jp": {
			"aliases": [
				"jp"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_jp",
			"code_points": [
				"1f1ef",
				"1f1f5"
			],
			"keywords": [
				"country",
				"flag",
				"japan",
				"jp",
				"nation",
				"nippon"
			],
			"name": "japan"
		},
		"flag_ke": {
			"aliases": [
				"ke"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_ke",
			"code_points": [
				"1f1f0",
				"1f1ea"
			],
			"keywords": [
				"country",
				"flag",
				"ke",
				"nation"
			],
			"name": "kenya"
		},
		"flag_kg": {
			"aliases": [
				"kg"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_kg",
			"code_points": [
				"1f1f0",
				"1f1ec"
			],
			"keywords": [
				"country",
				"flag",
				"kg",
				"kyrgyz respublikasy",
				"nation"
			],
			"name": "kyrgyzstan"
		},
		"flag_kh": {
			"aliases": [
				"kh"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_kh",
			"code_points": [
				"1f1f0",
				"1f1ed"
			],
			"keywords": [
				"country",
				"flag",
				"kampuchea",
				"kh",
				"nation"
			],
			"name": "cambodia"
		},
		"flag_ki": {
			"aliases": [
				"ki"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_ki",
			"code_points": [
				"1f1f0",
				"1f1ee"
			],
			"keywords": [
				"country",
				"flag",
				"ki",
				"kiribas",
				"kiribati",
				"nation"
			],
			"name": "kiribati"
		},
		"flag_km": {
			"aliases": [
				"km"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_km",
			"code_points": [
				"1f1f0",
				"1f1f2"
			],
			"keywords": [
				"country",
				"flag",
				"km",
				"nation"
			],
			"name": "the comoros"
		},
		"flag_kn": {
			"aliases": [
				"kn"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_kn",
			"code_points": [
				"1f1f0",
				"1f1f3"
			],
			"keywords": [
				"country",
				"flag",
				"kn",
				"nation"
			],
			"name": "saint kitts and nevis"
		},
		"flag_kp": {
			"aliases": [
				"kp"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_kp",
			"code_points": [
				"1f1f0",
				"1f1f5"
			],
			"keywords": [
				"country",
				"flag",
				"kp",
				"nation"
			],
			"name": "north korea"
		},
		"flag_kr": {
			"aliases": [
				"kr"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_kr",
			"code_points": [
				"1f1f0",
				"1f1f7"
			],
			"keywords": [
				"country",
				"flag",
				"kr",
				"nation",
				"south korea"
			],
			"name": "korea"
		},
		"flag_kw": {
			"aliases": [
				"kw"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_kw",
			"code_points": [
				"1f1f0",
				"1f1fc"
			],
			"keywords": [
				"al kuwayt",
				"country",
				"flag",
				"kw",
				"nation"
			],
			"name": "kuwait"
		},
		"flag_ky": {
			"aliases": [
				"ky"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_ky",
			"code_points": [
				"1f1f0",
				"1f1fe"
			],
			"keywords": [
				"country",
				"flag",
				"ky",
				"nation"
			],
			"name": "cayman islands"
		},
		"flag_kz": {
			"aliases": [
				"kz"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_kz",
			"code_points": [
				"1f1f0",
				"1f1ff"
			],
			"keywords": [
				"country",
				"flag",
				"kz",
				"nation",
				"qazaqstan"
			],
			"name": "kazakhstan"
		},
		"flag_la": {
			"aliases": [
				"la"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_la",
			"code_points": [
				"1f1f1",
				"1f1e6"
			],
			"keywords": [
				"country",
				"flag",
				"la",
				"nation"
			],
			"name": "laos"
		},
		"flag_lb": {
			"aliases": [
				"lb"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_lb",
			"code_points": [
				"1f1f1",
				"1f1e7"
			],
			"keywords": [
				"country",
				"flag",
				"lb",
				"lubnan",
				"nation"
			],
			"name": "lebanon"
		},
		"flag_lc": {
			"aliases": [
				"lc"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_lc",
			"code_points": [
				"1f1f1",
				"1f1e8"
			],
			"keywords": [
				"country",
				"flag",
				"lc",
				"nation"
			],
			"name": "saint lucia"
		},
		"flag_li": {
			"aliases": [
				"li"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_li",
			"code_points": [
				"1f1f1",
				"1f1ee"
			],
			"keywords": [
				"country",
				"flag",
				"li",
				"nation"
			],
			"name": "liechtenstein"
		},
		"flag_lk": {
			"aliases": [
				"lk"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_lk",
			"code_points": [
				"1f1f1",
				"1f1f0"
			],
			"keywords": [
				"country",
				"flag",
				"lk",
				"nation"
			],
			"name": "sri lanka"
		},
		"flag_lr": {
			"aliases": [
				"lr"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_lr",
			"code_points": [
				"1f1f1",
				"1f1f7"
			],
			"keywords": [
				"country",
				"flag",
				"lr",
				"nation"
			],
			"name": "liberia"
		},
		"flag_ls": {
			"aliases": [
				"ls"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_ls",
			"code_points": [
				"1f1f1",
				"1f1f8"
			],
			"keywords": [
				"country",
				"flag",
				"ls",
				"nation"
			],
			"name": "lesotho"
		},
		"flag_lt": {
			"aliases": [
				"lt"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_lt",
			"code_points": [
				"1f1f1",
				"1f1f9"
			],
			"keywords": [
				"country",
				"flag",
				"lietuva",
				"lt",
				"nation"
			],
			"name": "lithuania"
		},
		"flag_lu": {
			"aliases": [
				"lu"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_lu",
			"code_points": [
				"1f1f1",
				"1f1fa"
			],
			"keywords": [
				"country",
				"flag",
				"letzebuerg",
				"lu",
				"luxembourg",
				"nation"
			],
			"name": "luxembourg"
		},
		"flag_lv": {
			"aliases": [
				"lv"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_lv",
			"code_points": [
				"1f1f1",
				"1f1fb"
			],
			"keywords": [
				"country",
				"flag",
				"latvija",
				"lv",
				"nation"
			],
			"name": "latvia"
		},
		"flag_ly": {
			"aliases": [
				"ly"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_ly",
			"code_points": [
				"1f1f1",
				"1f1fe"
			],
			"keywords": [
				"country",
				"flag",
				"libiyah",
				"ly",
				"nation"
			],
			"name": "libya"
		},
		"flag_ma": {
			"aliases": [
				"ma"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_ma",
			"code_points": [
				"1f1f2",
				"1f1e6"
			],
			"keywords": [
				"al maghrib",
				"country",
				"flag",
				"ma",
				"nation"
			],
			"name": "morocco"
		},
		"flag_mc": {
			"aliases": [
				"mc"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_mc",
			"code_points": [
				"1f1f2",
				"1f1e8"
			],
			"keywords": [
				"country",
				"flag",
				"mc",
				"nation"
			],
			"name": "monaco"
		},
		"flag_md": {
			"aliases": [
				"md"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_md",
			"code_points": [
				"1f1f2",
				"1f1e9"
			],
			"keywords": [
				"country",
				"flag",
				"md",
				"nation"
			],
			"name": "moldova"
		},
		"flag_me": {
			"aliases": [
				"me"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_me",
			"code_points": [
				"1f1f2",
				"1f1ea"
			],
			"keywords": [
				"country",
				"crna gora",
				"flag",
				"me",
				"nation"
			],
			"name": "montenegro"
		},
		"flag_mf": {
			"aliases": [
				"mf"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_mf",
			"code_points": [
				"1f1f2",
				"1f1eb"
			],
			"keywords": [
				"country",
				"flag"
			],
			"name": "saint martin"
		},
		"flag_mg": {
			"aliases": [
				"mg"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_mg",
			"code_points": [
				"1f1f2",
				"1f1ec"
			],
			"keywords": [
				"country",
				"flag",
				"mg",
				"nation"
			],
			"name": "madagascar"
		},
		"flag_mh": {
			"aliases": [
				"mh"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_mh",
			"code_points": [
				"1f1f2",
				"1f1ed"
			],
			"keywords": [
				"country",
				"flag",
				"mh",
				"nation"
			],
			"name": "the marshall islands"
		},
		"flag_mk": {
			"aliases": [
				"mk"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_mk",
			"code_points": [
				"1f1f2",
				"1f1f0"
			],
			"keywords": [
				"country",
				"flag",
				"mk",
				"nation"
			],
			"name": "macedonia"
		},
		"flag_ml": {
			"aliases": [
				"ml"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_ml",
			"code_points": [
				"1f1f2",
				"1f1f1"
			],
			"keywords": [
				"country",
				"flag",
				"ml",
				"nation"
			],
			"name": "mali"
		},
		"flag_mm": {
			"aliases": [
				"mm"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_mm",
			"code_points": [
				"1f1f2",
				"1f1f2"
			],
			"keywords": [
				"country",
				"flag",
				"mm",
				"myanma naingngandaw",
				"nation"
			],
			"name": "myanmar"
		},
		"flag_mn": {
			"aliases": [
				"mn"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_mn",
			"code_points": [
				"1f1f2",
				"1f1f3"
			],
			"keywords": [
				"country",
				"flag",
				"mn",
				"mongol uls",
				"nation"
			],
			"name": "mongolia"
		},
		"flag_mo": {
			"aliases": [
				"mo"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_mo",
			"code_points": [
				"1f1f2",
				"1f1f4"
			],
			"keywords": [
				"aomen",
				"country",
				"flag",
				"mo",
				"nation"
			],
			"name": "macau"
		},
		"flag_mp": {
			"aliases": [
				"mp"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_mp",
			"code_points": [
				"1f1f2",
				"1f1f5"
			],
			"keywords": [
				"country",
				"flag"
			],
			"name": "northern mariana islands"
		},
		"flag_mq": {
			"aliases": [
				"mq"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_mq",
			"code_points": [
				"1f1f2",
				"1f1f6"
			],
			"keywords": [
				"country",
				"flag"
			],
			"name": "martinique"
		},
		"flag_mr": {
			"aliases": [
				"mr"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_mr",
			"code_points": [
				"1f1f2",
				"1f1f7"
			],
			"keywords": [
				"country",
				"flag",
				"mr",
				"muritaniyah",
				"nation"
			],
			"name": "mauritania"
		},
		"flag_ms": {
			"aliases": [
				"ms"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_ms",
			"code_points": [
				"1f1f2",
				"1f1f8"
			],
			"keywords": [
				"country",
				"flag",
				"ms",
				"nation"
			],
			"name": "montserrat"
		},
		"flag_mt": {
			"aliases": [
				"mt"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_mt",
			"code_points": [
				"1f1f2",
				"1f1f9"
			],
			"keywords": [
				"country",
				"flag",
				"mt",
				"nation"
			],
			"name": "malta"
		},
		"flag_mu": {
			"aliases": [
				"mu"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_mu",
			"code_points": [
				"1f1f2",
				"1f1fa"
			],
			"keywords": [
				"country",
				"flag",
				"mu",
				"nation"
			],
			"name": "mauritius"
		},
		"flag_mv": {
			"aliases": [
				"mv"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_mv",
			"code_points": [
				"1f1f2",
				"1f1fb"
			],
			"keywords": [
				"country",
				"dhivehi raajje",
				"flag",
				"mv",
				"nation"
			],
			"name": "maldives"
		},
		"flag_mw": {
			"aliases": [
				"mw"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_mw",
			"code_points": [
				"1f1f2",
				"1f1fc"
			],
			"keywords": [
				"country",
				"flag",
				"mw",
				"nation"
			],
			"name": "malawi"
		},
		"flag_mx": {
			"aliases": [
				"mx"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_mx",
			"code_points": [
				"1f1f2",
				"1f1fd"
			],
			"keywords": [
				"country",
				"flag",
				"mexican",
				"mx",
				"nation"
			],
			"name": "mexico"
		},
		"flag_my": {
			"aliases": [
				"my"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_my",
			"code_points": [
				"1f1f2",
				"1f1fe"
			],
			"keywords": [
				"country",
				"flag",
				"my",
				"nation"
			],
			"name": "malaysia"
		},
		"flag_mz": {
			"aliases": [
				"mz"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_mz",
			"code_points": [
				"1f1f2",
				"1f1ff"
			],
			"keywords": [
				"country",
				"flag",
				"mocambique",
				"mz",
				"nation"
			],
			"name": "mozambique"
		},
		"flag_na": {
			"aliases": [
				"na"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_na",
			"code_points": [
				"1f1f3",
				"1f1e6"
			],
			"keywords": [
				"country",
				"flag",
				"na",
				"nation"
			],
			"name": "namibia"
		},
		"flag_nc": {
			"aliases": [
				"nc"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_nc",
			"code_points": [
				"1f1f3",
				"1f1e8"
			],
			"keywords": [
				"cal&eacute;donie",
				"caledonie",
				"country",
				"flag",
				"nation",
				"nc",
				"nouvelle"
			],
			"name": "new caledonia"
		},
		"flag_ne": {
			"aliases": [
				"ne"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_ne",
			"code_points": [
				"1f1f3",
				"1f1ea"
			],
			"keywords": [
				"country",
				"flag",
				"nation",
				"ne"
			],
			"name": "niger"
		},
		"flag_nf": {
			"aliases": [
				"nf"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_nf",
			"code_points": [
				"1f1f3",
				"1f1eb"
			],
			"keywords": [
				"country",
				"flag"
			],
			"name": "norfolk island"
		},
		"flag_ng": {
			"aliases": [
				"nigeria"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_ng",
			"code_points": [
				"1f1f3",
				"1f1ec"
			],
			"keywords": [
				"country",
				"flag",
				"nation",
				"ng"
			],
			"name": "nigeria"
		},
		"flag_ni": {
			"aliases": [
				"ni"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_ni",
			"code_points": [
				"1f1f3",
				"1f1ee"
			],
			"keywords": [
				"country",
				"flag",
				"nation",
				"ni"
			],
			"name": "nicaragua"
		},
		"flag_nl": {
			"aliases": [
				"nl"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_nl",
			"code_points": [
				"1f1f3",
				"1f1f1"
			],
			"keywords": [
				"country",
				"flag",
				"holland",
				"nation",
				"nederland",
				"nl"
			],
			"name": "the netherlands"
		},
		"flag_no": {
			"aliases": [
				"no"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_no",
			"code_points": [
				"1f1f3",
				"1f1f4"
			],
			"keywords": [
				"country",
				"flag",
				"nation",
				"no",
				"norge"
			],
			"name": "norway"
		},
		"flag_np": {
			"aliases": [
				"np"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_np",
			"code_points": [
				"1f1f3",
				"1f1f5"
			],
			"keywords": [
				"country",
				"flag",
				"nation",
				"np"
			],
			"name": "nepal"
		},
		"flag_nr": {
			"aliases": [
				"nr"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_nr",
			"code_points": [
				"1f1f3",
				"1f1f7"
			],
			"keywords": [
				"country",
				"flag",
				"nation",
				"nr"
			],
			"name": "nauru"
		},
		"flag_nu": {
			"aliases": [
				"nu"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_nu",
			"code_points": [
				"1f1f3",
				"1f1fa"
			],
			"keywords": [
				"country",
				"flag",
				"nation",
				"nu"
			],
			"name": "niue"
		},
		"flag_nz": {
			"aliases": [
				"nz"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_nz",
			"code_points": [
				"1f1f3",
				"1f1ff"
			],
			"keywords": [
				"aotearoa",
				"country",
				"flag",
				"nation",
				"nz"
			],
			"name": "new zealand"
		},
		"flag_om": {
			"aliases": [
				"om"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_om",
			"code_points": [
				"1f1f4",
				"1f1f2"
			],
			"keywords": [
				"country",
				"flag",
				"nation",
				"om",
				"saltanat uman"
			],
			"name": "oman"
		},
		"flag_pa": {
			"aliases": [
				"pa"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_pa",
			"code_points": [
				"1f1f5",
				"1f1e6"
			],
			"keywords": [
				"country",
				"flag",
				"nation",
				"pa"
			],
			"name": "panama"
		},
		"flag_pe": {
			"aliases": [
				"pe"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_pe",
			"code_points": [
				"1f1f5",
				"1f1ea"
			],
			"keywords": [
				"country",
				"flag",
				"nation",
				"pe"
			],
			"name": "peru"
		},
		"flag_pf": {
			"aliases": [
				"pf"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_pf",
			"code_points": [
				"1f1f5",
				"1f1eb"
			],
			"keywords": [
				"country",
				"flag",
				"nation",
				"pf",
				"polyn&eacute;sie fran&ccedil;aise",
				"polynesie francaise"
			],
			"name": "french polynesia"
		},
		"flag_pg": {
			"aliases": [
				"pg"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_pg",
			"code_points": [
				"1f1f5",
				"1f1ec"
			],
			"keywords": [
				"country",
				"flag",
				"nation",
				"papua niu gini",
				"pg"
			],
			"name": "papua new guinea"
		},
		"flag_ph": {
			"aliases": [
				"ph"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_ph",
			"code_points": [
				"1f1f5",
				"1f1ed"
			],
			"keywords": [
				"country",
				"flag",
				"nation",
				"ph",
				"pilipinas"
			],
			"name": "the philippines"
		},
		"flag_pk": {
			"aliases": [
				"pk"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_pk",
			"code_points": [
				"1f1f5",
				"1f1f0"
			],
			"keywords": [
				"country",
				"flag",
				"nation",
				"pk"
			],
			"name": "pakistan"
		},
		"flag_pl": {
			"aliases": [
				"pl"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_pl",
			"code_points": [
				"1f1f5",
				"1f1f1"
			],
			"keywords": [
				"country",
				"flag",
				"nation",
				"pl",
				"polska"
			],
			"name": "poland"
		},
		"flag_pm": {
			"aliases": [
				"pm"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_pm",
			"code_points": [
				"1f1f5",
				"1f1f2"
			],
			"keywords": [
				"country",
				"flag"
			],
			"name": "saint pierre and miquelon"
		},
		"flag_pn": {
			"aliases": [
				"pn"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_pn",
			"code_points": [
				"1f1f5",
				"1f1f3"
			],
			"keywords": [
				"country",
				"flag"
			],
			"name": "pitcairn"
		},
		"flag_pr": {
			"aliases": [
				"pr"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_pr",
			"code_points": [
				"1f1f5",
				"1f1f7"
			],
			"keywords": [
				"country",
				"flag",
				"nation",
				"pr"
			],
			"name": "puerto rico"
		},
		"flag_ps": {
			"aliases": [
				"ps"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_ps",
			"code_points": [
				"1f1f5",
				"1f1f8"
			],
			"keywords": [
				"country",
				"flag",
				"nation",
				"ps"
			],
			"name": "palestinian authority"
		},
		"flag_pt": {
			"aliases": [
				"pt"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_pt",
			"code_points": [
				"1f1f5",
				"1f1f9"
			],
			"keywords": [
				"country",
				"flag",
				"nation",
				"pt"
			],
			"name": "portugal"
		},
		"flag_pw": {
			"aliases": [
				"pw"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_pw",
			"code_points": [
				"1f1f5",
				"1f1fc"
			],
			"keywords": [
				"belau",
				"country",
				"flag",
				"nation",
				"pw"
			],
			"name": "palau"
		},
		"flag_py": {
			"aliases": [
				"py"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_py",
			"code_points": [
				"1f1f5",
				"1f1fe"
			],
			"keywords": [
				"country",
				"flag",
				"nation",
				"py"
			],
			"name": "paraguay"
		},
		"flag_qa": {
			"aliases": [
				"qa"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_qa",
			"code_points": [
				"1f1f6",
				"1f1e6"
			],
			"keywords": [
				"country",
				"dawlat qatar",
				"flag",
				"nation",
				"qa"
			],
			"name": "qatar"
		},
		"flag_re": {
			"aliases": [
				"re"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_re",
			"code_points": [
				"1f1f7",
				"1f1ea"
			],
			"keywords": [
				"country",
				"flag"
			],
			"name": "réunion"
		},
		"flag_ro": {
			"aliases": [
				"ro"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_ro",
			"code_points": [
				"1f1f7",
				"1f1f4"
			],
			"keywords": [
				"country",
				"flag",
				"nation",
				"ro"
			],
			"name": "romania"
		},
		"flag_rs": {
			"aliases": [
				"rs"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_rs",
			"code_points": [
				"1f1f7",
				"1f1f8"
			],
			"keywords": [
				"country",
				"flag",
				"nation",
				"rs",
				"srbija"
			],
			"name": "serbia"
		},
		"flag_ru": {
			"aliases": [
				"ru"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_ru",
			"code_points": [
				"1f1f7",
				"1f1fa"
			],
			"keywords": [
				"country",
				"flag",
				"nation",
				"ru",
				"russian"
			],
			"name": "russia"
		},
		"flag_rw": {
			"aliases": [
				"rw"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_rw",
			"code_points": [
				"1f1f7",
				"1f1fc"
			],
			"keywords": [
				"country",
				"flag",
				"nation",
				"rw"
			],
			"name": "rwanda"
		},
		"flag_sa": {
			"aliases": [
				"saudi",
				"saudiarabia"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_sa",
			"code_points": [
				"1f1f8",
				"1f1e6"
			],
			"keywords": [
				"al arabiyah as suudiyah",
				"country",
				"flag",
				"nation",
				"sa"
			],
			"name": "saudi arabia"
		},
		"flag_sb": {
			"aliases": [
				"sb"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_sb",
			"code_points": [
				"1f1f8",
				"1f1e7"
			],
			"keywords": [
				"country",
				"flag",
				"nation",
				"sb"
			],
			"name": "the solomon islands"
		},
		"flag_sc": {
			"aliases": [
				"sc"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_sc",
			"code_points": [
				"1f1f8",
				"1f1e8"
			],
			"keywords": [
				"country",
				"flag",
				"nation",
				"sc",
				"seychelles"
			],
			"name": "the seychelles"
		},
		"flag_sd": {
			"aliases": [
				"sd"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_sd",
			"code_points": [
				"1f1f8",
				"1f1e9"
			],
			"keywords": [
				"as-sudan",
				"country",
				"flag",
				"nation",
				"sd"
			],
			"name": "sudan"
		},
		"flag_se": {
			"aliases": [
				"se"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_se",
			"code_points": [
				"1f1f8",
				"1f1ea"
			],
			"keywords": [
				"country",
				"flag",
				"nation",
				"se",
				"sverige"
			],
			"name": "sweden"
		},
		"flag_sg": {
			"aliases": [
				"sg"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_sg",
			"code_points": [
				"1f1f8",
				"1f1ec"
			],
			"keywords": [
				"country",
				"flag",
				"nation",
				"sg"
			],
			"name": "singapore"
		},
		"flag_sh": {
			"aliases": [
				"sh"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_sh",
			"code_points": [
				"1f1f8",
				"1f1ed"
			],
			"keywords": [
				"country",
				"flag",
				"nation",
				"sh"
			],
			"name": "saint helena"
		},
		"flag_si": {
			"aliases": [
				"si"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_si",
			"code_points": [
				"1f1f8",
				"1f1ee"
			],
			"keywords": [
				"country",
				"flag",
				"nation",
				"si",
				"slovenija"
			],
			"name": "slovenia"
		},
		"flag_sj": {
			"aliases": [
				"sj"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_sj",
			"code_points": [
				"1f1f8",
				"1f1ef"
			],
			"keywords": [
				"country",
				"flag"
			],
			"name": "svalbard and jan mayen"
		},
		"flag_sk": {
			"aliases": [
				"sk"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_sk",
			"code_points": [
				"1f1f8",
				"1f1f0"
			],
			"keywords": [
				"country",
				"flag",
				"nation",
				"sk"
			],
			"name": "slovakia"
		},
		"flag_sl": {
			"aliases": [
				"sl"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_sl",
			"code_points": [
				"1f1f8",
				"1f1f1"
			],
			"keywords": [
				"country",
				"flag",
				"nation",
				"sl"
			],
			"name": "sierra leone"
		},
		"flag_sm": {
			"aliases": [
				"sm"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_sm",
			"code_points": [
				"1f1f8",
				"1f1f2"
			],
			"keywords": [
				"country",
				"flag",
				"nation",
				"sm"
			],
			"name": "san marino"
		},
		"flag_sn": {
			"aliases": [
				"sn"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_sn",
			"code_points": [
				"1f1f8",
				"1f1f3"
			],
			"keywords": [
				"country",
				"flag",
				"nation",
				"sn"
			],
			"name": "senegal"
		},
		"flag_so": {
			"aliases": [
				"so"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_so",
			"code_points": [
				"1f1f8",
				"1f1f4"
			],
			"keywords": [
				"country",
				"flag",
				"nation",
				"so"
			],
			"name": "somalia"
		},
		"flag_sr": {
			"aliases": [
				"sr"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_sr",
			"code_points": [
				"1f1f8",
				"1f1f7"
			],
			"keywords": [
				"country",
				"flag",
				"nation",
				"sr"
			],
			"name": "suriname"
		},
		"flag_ss": {
			"aliases": [
				"ss"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_ss",
			"code_points": [
				"1f1f8",
				"1f1f8"
			],
			"keywords": [
				"country",
				"flag"
			],
			"name": "south sudan"
		},
		"flag_st": {
			"aliases": [
				"st"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_st",
			"code_points": [
				"1f1f8",
				"1f1f9"
			],
			"keywords": [
				"country",
				"flag",
				"nation",
				"sao tome e principe",
				"st"
			],
			"name": "sao tome and principe"
		},
		"flag_sv": {
			"aliases": [
				"sv"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_sv",
			"code_points": [
				"1f1f8",
				"1f1fb"
			],
			"keywords": [
				"country",
				"flag",
				"nation",
				"sv"
			],
			"name": "el salvador"
		},
		"flag_sx": {
			"aliases": [
				"sx"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_sx",
			"code_points": [
				"1f1f8",
				"1f1fd"
			],
			"keywords": [
				"country",
				"flag"
			],
			"name": "sint maarten"
		},
		"flag_sy": {
			"aliases": [
				"sy"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_sy",
			"code_points": [
				"1f1f8",
				"1f1fe"
			],
			"keywords": [
				"country",
				"flag",
				"nation",
				"sy"
			],
			"name": "syria"
		},
		"flag_sz": {
			"aliases": [
				"sz"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_sz",
			"code_points": [
				"1f1f8",
				"1f1ff"
			],
			"keywords": [
				"country",
				"flag",
				"nation",
				"sz"
			],
			"name": "swaziland"
		},
		"flag_ta": {
			"aliases": [
				"ta"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_ta",
			"code_points": [
				"1f1f9",
				"1f1e6"
			],
			"keywords": [
				"country",
				"flag"
			],
			"name": "tristan da cunha"
		},
		"flag_tc": {
			"aliases": [
				"tc"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_tc",
			"code_points": [
				"1f1f9",
				"1f1e8"
			],
			"keywords": [
				"country",
				"flag"
			],
			"name": "turks and caicos islands"
		},
		"flag_td": {
			"aliases": [
				"td"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_td",
			"code_points": [
				"1f1f9",
				"1f1e9"
			],
			"keywords": [
				"country",
				"flag",
				"nation",
				"tchad",
				"td"
			],
			"name": "chad"
		},
		"flag_tf": {
			"aliases": [
				"tf"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_tf",
			"code_points": [
				"1f1f9",
				"1f1eb"
			],
			"keywords": [
				"country",
				"flag"
			],
			"name": "french southern territories"
		},
		"flag_tg": {
			"aliases": [
				"tg"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_tg",
			"code_points": [
				"1f1f9",
				"1f1ec"
			],
			"keywords": [
				"country",
				"flag",
				"nation",
				"republique togolaise",
				"tg"
			],
			"name": "togo"
		},
		"flag_th": {
			"aliases": [
				"th"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_th",
			"code_points": [
				"1f1f9",
				"1f1ed"
			],
			"keywords": [
				"country",
				"flag",
				"nation",
				"prathet thai",
				"th"
			],
			"name": "thailand"
		},
		"flag_tj": {
			"aliases": [
				"tj"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_tj",
			"code_points": [
				"1f1f9",
				"1f1ef"
			],
			"keywords": [
				"country",
				"flag",
				"jumhurii tojikiston",
				"nation",
				"tj"
			],
			"name": "tajikistan"
		},
		"flag_tk": {
			"aliases": [
				"tk"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_tk",
			"code_points": [
				"1f1f9",
				"1f1f0"
			],
			"keywords": [
				"country",
				"flag"
			],
			"name": "tokelau"
		},
		"flag_tl": {
			"aliases": [
				"tl"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_tl",
			"code_points": [
				"1f1f9",
				"1f1f1"
			],
			"keywords": [
				"country",
				"flag",
				"nation",
				"tl"
			],
			"name": "east timor"
		},
		"flag_tm": {
			"aliases": [
				"turkmenistan"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_tm",
			"code_points": [
				"1f1f9",
				"1f1f2"
			],
			"keywords": [
				"country",
				"flag",
				"nation",
				"tm"
			],
			"name": "turkmenistan"
		},
		"flag_tn": {
			"aliases": [
				"tn"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_tn",
			"code_points": [
				"1f1f9",
				"1f1f3"
			],
			"keywords": [
				"country",
				"flag",
				"nation",
				"tn",
				"tunis"
			],
			"name": "tunisia"
		},
		"flag_to": {
			"aliases": [
				"to"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_to",
			"code_points": [
				"1f1f9",
				"1f1f4"
			],
			"keywords": [
				"country",
				"flag",
				"nation",
				"to"
			],
			"name": "tonga"
		},
		"flag_tr": {
			"aliases": [
				"tr"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_tr",
			"code_points": [
				"1f1f9",
				"1f1f7"
			],
			"keywords": [
				"country",
				"flag",
				"nation",
				"turkiye"
			],
			"name": "turkey"
		},
		"flag_tt": {
			"aliases": [
				"tt"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_tt",
			"code_points": [
				"1f1f9",
				"1f1f9"
			],
			"keywords": [
				"country",
				"flag",
				"nation",
				"tt"
			],
			"name": "trinidad and tobago"
		},
		"flag_tv": {
			"aliases": [
				"tuvalu"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_tv",
			"code_points": [
				"1f1f9",
				"1f1fb"
			],
			"keywords": [
				"country",
				"flag",
				"nation",
				"tv"
			],
			"name": "tuvalu"
		},
		"flag_tw": {
			"aliases": [
				"tw"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_tw",
			"code_points": [
				"1f1f9",
				"1f1fc"
			],
			"keywords": [
				"country",
				"flag",
				"nation",
				"taiwan",
				"tw"
			],
			"name": "the republic of china"
		},
		"flag_tz": {
			"aliases": [
				"tz"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_tz",
			"code_points": [
				"1f1f9",
				"1f1ff"
			],
			"keywords": [
				"country",
				"flag",
				"nation",
				"tz"
			],
			"name": "tanzania"
		},
		"flag_ua": {
			"aliases": [
				"ua"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_ua",
			"code_points": [
				"1f1fa",
				"1f1e6"
			],
			"keywords": [
				"country",
				"flag",
				"nation",
				"ua",
				"ukrayina"
			],
			"name": "ukraine"
		},
		"flag_ug": {
			"aliases": [
				"ug"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_ug",
			"code_points": [
				"1f1fa",
				"1f1ec"
			],
			"keywords": [
				"country",
				"flag",
				"nation",
				"ug"
			],
			"name": "uganda"
		},
		"flag_um": {
			"aliases": [
				"um"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_um",
			"code_points": [
				"1f1fa",
				"1f1f2"
			],
			"keywords": [
				"country",
				"flag"
			],
			"name": "united states minor outlying islands"
		},
		"flag_us": {
			"aliases": [
				"us"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_us",
			"code_points": [
				"1f1fa",
				"1f1f8"
			],
			"keywords": [
				"america",
				"american",
				"country",
				"flag",
				"nation",
				"old glory",
				"united states of america",
				"us",
				"usa"
			],
			"name": "united states"
		},
		"flag_uy": {
			"aliases": [
				"uy"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_uy",
			"code_points": [
				"1f1fa",
				"1f1fe"
			],
			"keywords": [
				"country",
				"flag",
				"nation",
				"uy"
			],
			"name": "uruguay"
		},
		"flag_uz": {
			"aliases": [
				"uz"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_uz",
			"code_points": [
				"1f1fa",
				"1f1ff"
			],
			"keywords": [
				"country",
				"flag",
				"nation",
				"uz",
				"uzbekiston respublikasi"
			],
			"name": "uzbekistan"
		},
		"flag_va": {
			"aliases": [
				"va"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_va",
			"code_points": [
				"1f1fb",
				"1f1e6"
			],
			"keywords": [
				"country",
				"flag",
				"nation",
				"va"
			],
			"name": "the vatican city"
		},
		"flag_vc": {
			"aliases": [
				"vc"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_vc",
			"code_points": [
				"1f1fb",
				"1f1e8"
			],
			"keywords": [
				"country",
				"flag",
				"nation",
				"vc"
			],
			"name": "saint vincent and the grenadines"
		},
		"flag_ve": {
			"aliases": [
				"ve"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_ve",
			"code_points": [
				"1f1fb",
				"1f1ea"
			],
			"keywords": [
				"country",
				"flag",
				"nation",
				"ve"
			],
			"name": "venezuela"
		},
		"flag_vg": {
			"aliases": [
				"vg"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_vg",
			"code_points": [
				"1f1fb",
				"1f1ec"
			],
			"keywords": [
				"country",
				"flag"
			],
			"name": "british virgin islands"
		},
		"flag_vi": {
			"aliases": [
				"vi"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_vi",
			"code_points": [
				"1f1fb",
				"1f1ee"
			],
			"keywords": [
				"country",
				"flag",
				"nation",
				"vi"
			],
			"name": "u.s. virgin islands"
		},
		"flag_vn": {
			"aliases": [
				"vn"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_vn",
			"code_points": [
				"1f1fb",
				"1f1f3"
			],
			"keywords": [
				"country",
				"flag",
				"nation",
				"viet nam",
				"vn"
			],
			"name": "vietnam"
		},
		"flag_vu": {
			"aliases": [
				"vu"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_vu",
			"code_points": [
				"1f1fb",
				"1f1fa"
			],
			"keywords": [
				"country",
				"flag",
				"nation",
				"vu"
			],
			"name": "vanuatu"
		},
		"flag_wf": {
			"aliases": [
				"wf"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_wf",
			"code_points": [
				"1f1fc",
				"1f1eb"
			],
			"keywords": [
				"country",
				"flag",
				"nation",
				"wf"
			],
			"name": "wallis and futuna"
		},
		"flag_white": {
			"aliases": [
				"waving_white_flag"
			],
			"ascii_arts": [],
			"category": "objects",
			"code": "flag_white",
			"code_points": [
				"1f3f3"
			],
			"keywords": [
				"object",
				"signal",
				"symbol"
			],
			"name": "waving white flag"
		},
		"flag_ws": {
			"aliases": [
				"ws"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_ws",
			"code_points": [
				"1f1fc",
				"1f1f8"
			],
			"keywords": [
				"american samoa",
				"country",
				"flag",
				"nation",
				"ws"
			],
			"name": "samoa"
		},
		"flag_xk": {
			"aliases": [
				"xk"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_xk",
			"code_points": [
				"1f1fd",
				"1f1f0"
			],
			"keywords": [
				"country",
				"flag",
				"nation",
				"xk"
			],
			"name": "kosovo"
		},
		"flag_ye": {
			"aliases": [
				"ye"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_ye",
			"code_points": [
				"1f1fe",
				"1f1ea"
			],
			"keywords": [
				"al yaman",
				"country",
				"flag",
				"nation",
				"ye"
			],
			"name": "yemen"
		},
		"flag_yt": {
			"aliases": [
				"yt"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_yt",
			"code_points": [
				"1f1fe",
				"1f1f9"
			],
			"keywords": [
				"country",
				"flag"
			],
			"name": "mayotte"
		},
		"flag_za": {
			"aliases": [
				"za"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_za",
			"code_points": [
				"1f1ff",
				"1f1e6"
			],
			"keywords": [
				"country",
				"flag",
				"nation"
			],
			"name": "south africa"
		},
		"flag_zm": {
			"aliases": [
				"zm"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_zm",
			"code_points": [
				"1f1ff",
				"1f1f2"
			],
			"keywords": [
				"country",
				"flag",
				"nation",
				"zm"
			],
			"name": "zambia"
		},
		"flag_zw": {
			"aliases": [
				"zw"
			],
			"ascii_arts": [],
			"category": "flags",
			"code": "flag_zw",
			"code_points": [
				"1f1ff",
				"1f1fc"
			],
			"keywords": [
				"country",
				"flag",
				"nation",
				"zw"
			],
			"name": "zimbabwe"
		},
		"flags": {
			"aliases": [],
			"ascii_arts": [],
			"category": "objects",
			"code": "flags",
			"code_points": [
				"1f38f"
			],
			"keywords": [
				"banner",
				"boys",
				"carp",
				"celebration",
				"children",
				"fish",
				"flags",
				"happiness",
				"holiday",
				"japan",
				"japanese",
				"kids",
				"koinobori",
				"object",
				"streamers"
			],
			"name": "carp streamer"
		},
		"flashlight": {
			"aliases": [],
			"ascii_arts": [],
			"category": "objects",
			"code": "flashlight",
			"code_points": [
				"1f526"
			],
			"keywords": [
				"dark",
				"electronics",
				"object"
			],
			"name": "electric torch"
		},
		"fleur-de-lis": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "fleur-de-lis",
			"code_points": [
				"269c"
			],
			"keywords": [
				"object",
				"symbol"
			],
			"name": "fleur-de-lis"
		},
		"floppy_disk": {
			"aliases": [],
			"ascii_arts": [],
			"category": "objects",
			"code": "floppy_disk",
			"code_points": [
				"1f4be"
			],
			"keywords": [
				"computer",
				"disk",
				"drive",
				"electronics",
				"floppy",
				"information",
				"megabyte",
				"office",
				"oldschool",
				"save",
				"storage",
				"technology"
			],
			"name": "floppy disk"
		},
		"flower_playing_cards": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "flower_playing_cards",
			"code_points": [
				"1f3b4"
			],
			"keywords": [
				"august",
				"card",
				"flower",
				"game",
				"moon",
				"object",
				"playing",
				"special",
				"symbol"
			],
			"name": "flower playing cards"
		},
		"flushed": {
			"aliases": [],
			"ascii_arts": [
				":$",
				"=$"
			],
			"category": "people",
			"code": "flushed",
			"code_points": [
				"1f633"
			],
			"keywords": [
				"blush",
				"cheeks",
				"emotion",
				"face",
				"flattered",
				"flush",
				"omg",
				"pink",
				"red",
				"shy",
				"smiley"
			],
			"name": "flushed face"
		},
		"fog": {
			"aliases": [],
			"ascii_arts": [],
			"category": "nature",
			"code": "fog",
			"code_points": [
				"1f32b"
			],
			"keywords": [
				"cloud",
				"cold",
				"damp",
				"hazy",
				"sky",
				"weather"
			],
			"name": "fog"
		},
		"foggy": {
			"aliases": [],
			"ascii_arts": [],
			"category": "travel",
			"code": "foggy",
			"code_points": [
				"1f301"
			],
			"keywords": [
				"bridge",
				"building",
				"fog",
				"foggy",
				"mountain",
				"photo",
				"places",
				"sky",
				"travel",
				"vacation",
				"weather"
			],
			"name": "foggy"
		},
		"football": {
			"aliases": [],
			"ascii_arts": [],
			"category": "activity",
			"code": "football",
			"code_points": [
				"1f3c8"
			],
			"keywords": [
				"NFL",
				"america",
				"american",
				"ball",
				"balls",
				"football",
				"game",
				"sport",
				"sports"
			],
			"name": "american football"
		},
		"footprints": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "footprints",
			"code_points": [
				"1f463"
			],
			"keywords": [
				"feet"
			],
			"name": "footprints"
		},
		"fork_and_knife": {
			"aliases": [],
			"ascii_arts": [],
			"category": "food",
			"code": "fork_and_knife",
			"code_points": [
				"1f374"
			],
			"keywords": [
				"cutlery",
				"eat",
				"food",
				"fork",
				"kitchen",
				"knife",
				"meal",
				"object",
				"restaurant",
				"weapon"
			],
			"name": "fork and knife"
		},
		"fork_knife_plate": {
			"aliases": [
				"fork_and_knife_with_plate"
			],
			"ascii_arts": [],
			"category": "food",
			"code": "fork_knife_plate",
			"code_points": [
				"1f37d"
			],
			"keywords": [
				"breakfast",
				"dinner",
				"food",
				"lunch",
				"meal",
				"object",
				"setting",
				"utensils"
			],
			"name": "fork and knife with plate"
		},
		"fountain": {
			"aliases": [],
			"ascii_arts": [],
			"category": "travel",
			"code": "fountain",
			"code_points": [
				"26f2",
				"fe0f"
			],
			"keywords": [
				"photo",
				"travel",
				"vacation"
			],
			"name": "fountain"
		},
		"four": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "four",
			"code_points": [
				"34",
				"fe0f",
				"20e3"
			],
			"keywords": [
				"4",
				"blue-square",
				"math",
				"number",
				"numbers",
				"symbol"
			],
			"name": "keycap digit four"
		},
		"four_leaf_clover": {
			"aliases": [],
			"ascii_arts": [],
			"category": "nature",
			"code": "four_leaf_clover",
			"code_points": [
				"1f340"
			],
			"keywords": [
				"clover",
				"four",
				"green",
				"irish",
				"leaf",
				"luck",
				"lucky",
				"nature",
				"patrick",
				"plant",
				"saint",
				"sol",
				"vegetable"
			],
			"name": "four leaf clover"
		},
		"fox": {
			"aliases": [
				"fox_face"
			],
			"ascii_arts": [],
			"category": "nature",
			"code": "fox",
			"code_points": [
				"1f98a"
			],
			"keywords": [],
			"name": "fox face"
		},
		"frame_photo": {
			"aliases": [
				"frame_with_picture"
			],
			"ascii_arts": [],
			"category": "objects",
			"code": "frame_photo",
			"code_points": [
				"1f5bc"
			],
			"keywords": [
				"photo",
				"travel",
				"vacation"
			],
			"name": "frame with picture"
		},
		"free": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "free",
			"code_points": [
				"1f193"
			],
			"keywords": [
				"blue-square",
				"symbol",
				"words"
			],
			"name": "squared free"
		},
		"french_bread": {
			"aliases": [
				"baguette_bread"
			],
			"ascii_arts": [],
			"category": "food",
			"code": "french_bread",
			"code_points": [
				"1f956"
			],
			"keywords": [],
			"name": "baguette bread"
		},
		"fried_shrimp": {
			"aliases": [],
			"ascii_arts": [],
			"category": "food",
			"code": "fried_shrimp",
			"code_points": [
				"1f364"
			],
			"keywords": [
				"animal",
				"fish",
				"food",
				"fried",
				"seafood",
				"shrimp",
				"small"
			],
			"name": "fried shrimp"
		},
		"fries": {
			"aliases": [],
			"ascii_arts": [],
			"category": "food",
			"code": "fries",
			"code_points": [
				"1f35f"
			],
			"keywords": [
				"america",
				"chips",
				"food",
				"french",
				"fries",
				"fry",
				"idaho",
				"potato",
				"russet"
			],
			"name": "french fries"
		},
		"frog": {
			"aliases": [],
			"ascii_arts": [],
			"category": "nature",
			"code": "frog",
			"code_points": [
				"1f438"
			],
			"keywords": [
				"animal",
				"nature",
				"wildlife"
			],
			"name": "frog face"
		},
		"frowning": {
			"aliases": [
				"anguished"
			],
			"ascii_arts": [],
			"category": "people",
			"code": "frowning",
			"code_points": [
				"1f626"
			],
			"keywords": [
				"aw",
				"emotion",
				"face",
				"frown",
				"glower",
				"pout",
				"sad",
				"smiley",
				"sulk",
				"surprised"
			],
			"name": "frowning face with open mouth"
		},
		"frowning2": {
			"aliases": [
				"white_frowning_face"
			],
			"ascii_arts": [],
			"category": "people",
			"code": "frowning2",
			"code_points": [
				"2639"
			],
			"keywords": [
				"emotion",
				"frown",
				"person",
				"sad",
				"smiley"
			],
			"name": "white frowning face"
		},
		"fuelpump": {
			"aliases": [],
			"ascii_arts": [],
			"category": "travel",
			"code": "fuelpump",
			"code_points": [
				"26fd",
				"fe0f"
			],
			"keywords": [
				"gas pump",
				"gas station",
				"object",
				"petroleum"
			],
			"name": "fuel pump"
		},
		"full_moon": {
			"aliases": [],
			"ascii_arts": [],
			"category": "nature",
			"code": "full_moon",
			"code_points": [
				"1f315"
			],
			"keywords": [
				"cheese",
				"full",
				"monster",
				"moon",
				"nature",
				"night",
				"phase",
				"sky",
				"space",
				"spooky",
				"twilight",
				"werewolves",
				"yellow"
			],
			"name": "full moon symbol"
		},
		"full_moon_with_face": {
			"aliases": [],
			"ascii_arts": [],
			"category": "nature",
			"code": "full_moon_with_face",
			"code_points": [
				"1f31d"
			],
			"keywords": [
				"anthropomorphic",
				"cheese",
				"face",
				"full",
				"goodnight",
				"monsters",
				"moon",
				"night",
				"phase",
				"sky",
				"space",
				"spooky",
				"werewolves"
			],
			"name": "full moon with face"
		},
		"game_die": {
			"aliases": [],
			"ascii_arts": [],
			"category": "activity",
			"code": "game_die",
			"code_points": [
				"1f3b2"
			],
			"keywords": [
				"boys night",
				"craps",
				"dice",
				"die",
				"gamble",
				"game",
				"object",
				"play"
			],
			"name": "game die"
		},
		"gay_pride_flag": {
			"aliases": [
				"rainbow_flag"
			],
			"ascii_arts": [],
			"category": "extras",
			"code": "gay_pride_flag",
			"code_points": [
				"1f3f3",
				"1f308"
			],
			"keywords": [],
			"name": "gay_pride_flag"
		},
		"gear": {
			"aliases": [],
			"ascii_arts": [],
			"category": "objects",
			"code": "gear",
			"code_points": [
				"2699"
			],
			"keywords": [
				"object",
				"tool"
			],
			"name": "gear"
		},
		"gem": {
			"aliases": [],
			"ascii_arts": [],
			"category": "objects",
			"code": "gem",
			"code_points": [
				"1f48e"
			],
			"keywords": [
				"blue",
				"gem",
				"object",
				"ruby"
			],
			"name": "gem stone"
		},
		"gemini": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "gemini",
			"code_points": [
				"264a",
				"fe0f"
			],
			"keywords": [
				"astrology",
				"constellation",
				"gemini",
				"greek",
				"horoscope",
				"sign",
				"stars",
				"symbol",
				"twins",
				"zodiac"
			],
			"name": "gemini"
		},
		"ghost": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "ghost",
			"code_points": [
				"1f47b"
			],
			"keywords": [
				"halloween",
				"holidays",
				"monster"
			],
			"name": "ghost"
		},
		"gift": {
			"aliases": [],
			"ascii_arts": [],
			"category": "objects",
			"code": "gift",
			"code_points": [
				"1f381"
			],
			"keywords": [
				"birthday",
				"christmas",
				"gift",
				"holidays",
				"object",
				"package",
				"parties",
				"present",
				"wedding",
				"wrap",
				"xmas"
			],
			"name": "wrapped present"
		},
		"gift_heart": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "gift_heart",
			"code_points": [
				"1f49d"
			],
			"keywords": [
				"condolence",
				"love",
				"symbol",
				"valentines"
			],
			"name": "heart with ribbon"
		},
		"girl": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "girl",
			"code_points": [
				"1f467"
			],
			"keywords": [
				"baby",
				"diversity",
				"female",
				"people",
				"woman",
				"women"
			],
			"name": "girl"
		},
		"girl_tone1": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "girl_tone1",
			"code_points": [
				"1f467",
				"1f3fb"
			],
			"keywords": [
				"child",
				"female",
				"kid"
			],
			"name": "girl tone 1"
		},
		"girl_tone2": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "girl_tone2",
			"code_points": [
				"1f467",
				"1f3fc"
			],
			"keywords": [
				"child",
				"female",
				"kid"
			],
			"name": "girl tone 2"
		},
		"girl_tone3": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "girl_tone3",
			"code_points": [
				"1f467",
				"1f3fd"
			],
			"keywords": [
				"child",
				"female",
				"kid"
			],
			"name": "girl tone 3"
		},
		"girl_tone4": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "girl_tone4",
			"code_points": [
				"1f467",
				"1f3fe"
			],
			"keywords": [
				"child",
				"female",
				"kid"
			],
			"name": "girl tone 4"
		},
		"girl_tone5": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "girl_tone5",
			"code_points": [
				"1f467",
				"1f3ff"
			],
			"keywords": [
				"child",
				"female",
				"kid"
			],
			"name": "girl tone 5"
		},
		"globe_with_meridians": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "globe_with_meridians",
			"code_points": [
				"1f310"
			],
			"keywords": [
				"earth",
				"globe",
				"home",
				"international",
				"meridian",
				"planet",
				"space",
				"symbol",
				"world"
			],
			"name": "globe with meridians"
		},
		"goal": {
			"aliases": [
				"goal_net"
			],
			"ascii_arts": [],
			"category": "activity",
			"code": "goal",
			"code_points": [
				"1f945"
			],
			"keywords": [],
			"name": "goal net"
		},
		"goat": {
			"aliases": [],
			"ascii_arts": [],
			"category": "nature",
			"code": "goat",
			"code_points": [
				"1f410"
			],
			"keywords": [
				"animal",
				"billy",
				"goat",
				"kid",
				"livestock",
				"nature",
				"sheep"
			],
			"name": "goat"
		},
		"golf": {
			"aliases": [],
			"ascii_arts": [],
			"category": "activity",
			"code": "golf",
			"code_points": [
				"26f3",
				"fe0f"
			],
			"keywords": [
				"ball",
				"business",
				"game",
				"golf",
				"sport",
				"sports",
				"vacation"
			],
			"name": "flag in hole"
		},
		"golfer": {
			"aliases": [],
			"ascii_arts": [],
			"category": "activity",
			"code": "golfer",
			"code_points": [
				"1f3cc"
			],
			"keywords": [
				"ball",
				"birdie",
				"eagle",
				"game",
				"golf",
				"men",
				"mulligan",
				"par",
				"sport",
				"vacation"
			],
			"name": "golfer"
		},
		"gorilla": {
			"aliases": [],
			"ascii_arts": [],
			"category": "nature",
			"code": "gorilla",
			"code_points": [
				"1f98d"
			],
			"keywords": [],
			"name": "gorilla"
		},
		"grapes": {
			"aliases": [],
			"ascii_arts": [],
			"category": "food",
			"code": "grapes",
			"code_points": [
				"1f347"
			],
			"keywords": [
				"cluster",
				"food",
				"fruit",
				"grapes",
				"vine",
				"vinegar",
				"wine"
			],
			"name": "grapes"
		},
		"green_apple": {
			"aliases": [],
			"ascii_arts": [],
			"category": "food",
			"code": "green_apple",
			"code_points": [
				"1f34f"
			],
			"keywords": [
				"apple",
				"core",
				"food",
				"fruit",
				"granny",
				"green",
				"nature",
				"pie",
				"smith"
			],
			"name": "green apple"
		},
		"green_book": {
			"aliases": [],
			"ascii_arts": [],
			"category": "objects",
			"code": "green_book",
			"code_points": [
				"1f4d7"
			],
			"keywords": [
				"book",
				"knowledge",
				"library",
				"object",
				"office",
				"read"
			],
			"name": "green book"
		},
		"green_heart": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "green_heart",
			"code_points": [
				"1f49a"
			],
			"keywords": [
				"affection",
				"clingy",
				"envious",
				"green",
				"heart",
				"jealous",
				"like",
				"love",
				"nature",
				"possessive",
				"rebirth",
				"reborn",
				"symbol",
				"valentines"
			],
			"name": "green heart"
		},
		"grey_exclamation": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "grey_exclamation",
			"code_points": [
				"2755"
			],
			"keywords": [
				"punctuation",
				"surprise",
				"symbol"
			],
			"name": "white exclamation mark ornament"
		},
		"grey_question": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "grey_question",
			"code_points": [
				"2754"
			],
			"keywords": [
				"doubts",
				"punctuation",
				"symbol"
			],
			"name": "white question mark ornament"
		},
		"grimacing": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "grimacing",
			"code_points": [
				"1f62c"
			],
			"keywords": [
				"disapprove",
				"emotion",
				"face",
				"grimace",
				"pain",
				"selfie",
				"silly",
				"smiley",
				"teeth"
			],
			"name": "grimacing face"
		},
		"grin": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "grin",
			"code_points": [
				"1f601"
			],
			"keywords": [
				"emotion",
				"face",
				"good",
				"grin",
				"grinning",
				"happy",
				"joy",
				"selfie",
				"silly",
				"smile",
				"smiley",
				"smiling"
			],
			"name": "grinning face with smiling eyes"
		},
		"grinning": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "grinning",
			"code_points": [
				"1f600"
			],
			"keywords": [
				"emotion",
				"face",
				"grin",
				"grinning",
				"happy",
				"joy",
				"smile",
				"smiley",
				"smiling"
			],
			"name": "grinning face"
		},
		"guardsman": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "guardsman",
			"code_points": [
				"1f482"
			],
			"keywords": [
				"bearskin",
				"british",
				"ceremonial",
				"diversity",
				"gb",
				"guard",
				"guardsman",
				"hat",
				"job",
				"male",
				"man",
				"men",
				"military",
				"people",
				"queen",
				"uk"
			],
			"name": "guardsman"
		},
		"guardsman_tone1": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "guardsman_tone1",
			"code_points": [
				"1f482",
				"1f3fb"
			],
			"keywords": [
				"bearskin",
				"british",
				"ceremonial",
				"gb",
				"guard",
				"hat",
				"male",
				"man",
				"military",
				"queen",
				"uk"
			],
			"name": "guardsman tone 1"
		},
		"guardsman_tone2": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "guardsman_tone2",
			"code_points": [
				"1f482",
				"1f3fc"
			],
			"keywords": [
				"bearskin",
				"british",
				"ceremonial",
				"gb",
				"guard",
				"hat",
				"male",
				"man",
				"military",
				"queen",
				"uk"
			],
			"name": "guardsman tone 2"
		},
		"guardsman_tone3": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "guardsman_tone3",
			"code_points": [
				"1f482",
				"1f3fd"
			],
			"keywords": [
				"bearskin",
				"british",
				"ceremonial",
				"gb",
				"guard",
				"hat",
				"male",
				"man",
				"military",
				"queen",
				"uk"
			],
			"name": "guardsman tone 3"
		},
		"guardsman_tone4": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "guardsman_tone4",
			"code_points": [
				"1f482",
				"1f3fe"
			],
			"keywords": [
				"bearskin",
				"british",
				"ceremonial",
				"gb",
				"guard",
				"hat",
				"male",
				"man",
				"military",
				"queen",
				"uk"
			],
			"name": "guardsman tone 4"
		},
		"guardsman_tone5": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "guardsman_tone5",
			"code_points": [
				"1f482",
				"1f3ff"
			],
			"keywords": [
				"bearskin",
				"british",
				"ceremonial",
				"gb",
				"guard",
				"hat",
				"male",
				"man",
				"military",
				"queen",
				"uk"
			],
			"name": "guardsman tone 5"
		},
		"guitar": {
			"aliases": [],
			"ascii_arts": [],
			"category": "activity",
			"code": "guitar",
			"code_points": [
				"1f3b8"
			],
			"keywords": [
				"acoustic",
				"electric",
				"guitar",
				"instrument",
				"instruments",
				"jam",
				"music",
				"rock",
				"string"
			],
			"name": "guitar"
		},
		"gun": {
			"aliases": [],
			"ascii_arts": [],
			"category": "objects",
			"code": "gun",
			"code_points": [
				"1f52b"
			],
			"keywords": [
				"dead",
				"gun",
				"object",
				"sarcastic",
				"violence",
				"weapon"
			],
			"name": "pistol"
		},
		"haircut": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "haircut",
			"code_points": [
				"1f487"
			],
			"keywords": [
				"diversity",
				"female",
				"girl",
				"people",
				"woman",
				"women"
			],
			"name": "haircut"
		},
		"haircut_tone1": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "haircut_tone1",
			"code_points": [
				"1f487",
				"1f3fb"
			],
			"keywords": [
				"female",
				"girl",
				"woman"
			],
			"name": "haircut tone 1"
		},
		"haircut_tone2": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "haircut_tone2",
			"code_points": [
				"1f487",
				"1f3fc"
			],
			"keywords": [
				"female",
				"girl",
				"woman"
			],
			"name": "haircut tone 2"
		},
		"haircut_tone3": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "haircut_tone3",
			"code_points": [
				"1f487",
				"1f3fd"
			],
			"keywords": [
				"female",
				"girl",
				"woman"
			],
			"name": "haircut tone 3"
		},
		"haircut_tone4": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "haircut_tone4",
			"code_points": [
				"1f487",
				"1f3fe"
			],
			"keywords": [
				"female",
				"girl",
				"woman"
			],
			"name": "haircut tone 4"
		},
		"haircut_tone5": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "haircut_tone5",
			"code_points": [
				"1f487",
				"1f3ff"
			],
			"keywords": [
				"female",
				"girl",
				"woman"
			],
			"name": "haircut tone 5"
		},
		"hamburger": {
			"aliases": [],
			"ascii_arts": [],
			"category": "food",
			"code": "hamburger",
			"code_points": [
				"1f354"
			],
			"keywords": [
				"america",
				"beef",
				"burger",
				"cow",
				"food",
				"hamburger",
				"meat"
			],
			"name": "hamburger"
		},
		"hammer": {
			"aliases": [],
			"ascii_arts": [],
			"category": "objects",
			"code": "hammer",
			"code_points": [
				"1f528"
			],
			"keywords": [
				"done",
				"judge",
				"law",
				"object",
				"ruling",
				"tool",
				"tools",
				"verdict",
				"weapon"
			],
			"name": "hammer"
		},
		"hammer_pick": {
			"aliases": [
				"hammer_and_pick"
			],
			"ascii_arts": [],
			"category": "objects",
			"code": "hammer_pick",
			"code_points": [
				"2692"
			],
			"keywords": [
				"object",
				"tool",
				"weapon"
			],
			"name": "hammer and pick"
		},
		"hamster": {
			"aliases": [],
			"ascii_arts": [],
			"category": "nature",
			"code": "hamster",
			"code_points": [
				"1f439"
			],
			"keywords": [
				"animal",
				"nature"
			],
			"name": "hamster face"
		},
		"hand_splayed": {
			"aliases": [
				"raised_hand_with_fingers_splayed"
			],
			"ascii_arts": [],
			"category": "people",
			"code": "hand_splayed",
			"code_points": [
				"1f590"
			],
			"keywords": [
				"body",
				"diversity",
				"five",
				"halt",
				"hands",
				"hi",
				"stop"
			],
			"name": "raised hand with fingers splayed"
		},
		"hand_splayed_tone1": {
			"aliases": [
				"raised_hand_with_fingers_splayed_tone1"
			],
			"ascii_arts": [],
			"category": "people",
			"code": "hand_splayed_tone1",
			"code_points": [
				"1f590",
				"1f3fb"
			],
			"keywords": [
				"five",
				"halt",
				"hi",
				"stop"
			],
			"name": "raised hand with fingers splayed tone 1"
		},
		"hand_splayed_tone2": {
			"aliases": [
				"raised_hand_with_fingers_splayed_tone2"
			],
			"ascii_arts": [],
			"category": "people",
			"code": "hand_splayed_tone2",
			"code_points": [
				"1f590",
				"1f3fc"
			],
			"keywords": [
				"five",
				"halt",
				"hi",
				"stop"
			],
			"name": "raised hand with fingers splayed tone 2"
		},
		"hand_splayed_tone3": {
			"aliases": [
				"raised_hand_with_fingers_splayed_tone3"
			],
			"ascii_arts": [],
			"category": "people",
			"code": "hand_splayed_tone3",
			"code_points": [
				"1f590",
				"1f3fd"
			],
			"keywords": [
				"five",
				"halt",
				"hi",
				"stop"
			],
			"name": "raised hand with fingers splayed tone 3"
		},
		"hand_splayed_tone4": {
			"aliases": [
				"raised_hand_with_fingers_splayed_tone4"
			],
			"ascii_arts": [],
			"category": "people",
			"code": "hand_splayed_tone4",
			"code_points": [
				"1f590",
				"1f3fe"
			],
			"keywords": [
				"five",
				"halt",
				"hi",
				"stop"
			],
			"name": "raised hand with fingers splayed tone 4"
		},
		"hand_splayed_tone5": {
			"aliases": [
				"raised_hand_with_fingers_splayed_tone5"
			],
			"ascii_arts": [],
			"category": "people",
			"code": "hand_splayed_tone5",
			"code_points": [
				"1f590",
				"1f3ff"
			],
			"keywords": [
				"five",
				"halt",
				"hi",
				"stop"
			],
			"name": "raised hand with fingers splayed tone 5"
		},
		"handbag": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "handbag",
			"code_points": [
				"1f45c"
			],
			"keywords": [
				"accessories",
				"accessory",
				"bag",
				"fashion",
				"vacation",
				"women"
			],
			"name": "handbag"
		},
		"handball": {
			"aliases": [],
			"ascii_arts": [],
			"category": "activity",
			"code": "handball",
			"code_points": [
				"1f93e"
			],
			"keywords": [],
			"name": "handball"
		},
		"handball_tone1": {
			"aliases": [],
			"ascii_arts": [],
			"category": "activity",
			"code": "handball_tone1",
			"code_points": [
				"1f93e",
				"1f3fb"
			],
			"keywords": [],
			"name": "handball tone 1"
		},
		"handball_tone2": {
			"aliases": [],
			"ascii_arts": [],
			"category": "activity",
			"code": "handball_tone2",
			"code_points": [
				"1f93e",
				"1f3fc"
			],
			"keywords": [],
			"name": "handball tone 2"
		},
		"handball_tone3": {
			"aliases": [],
			"ascii_arts": [],
			"category": "activity",
			"code": "handball_tone3",
			"code_points": [
				"1f93e",
				"1f3fd"
			],
			"keywords": [],
			"name": "handball tone 3"
		},
		"handball_tone4": {
			"aliases": [],
			"ascii_arts": [],
			"category": "activity",
			"code": "handball_tone4",
			"code_points": [
				"1f93e",
				"1f3fe"
			],
			"keywords": [],
			"name": "handball tone 4"
		},
		"handball_tone5": {
			"aliases": [],
			"ascii_arts": [],
			"category": "activity",
			"code": "handball_tone5",
			"code_points": [
				"1f93e",
				"1f3ff"
			],
			"keywords": [],
			"name": "handball tone 5"
		},
		"handshake": {
			"aliases": [
				"shaking_hands"
			],
			"ascii_arts": [],
			"category": "people",
			"code": "handshake",
			"code_points": [
				"1f91d"
			],
			"keywords": [],
			"name": "handshake"
		},
		"handshake_tone1": {
			"aliases": [
				"shaking_hands_tone1"
			],
			"ascii_arts": [],
			"category": "people",
			"code": "handshake_tone1",
			"code_points": [
				"1f91d",
				"1f3fb"
			],
			"keywords": [],
			"name": "handshake tone 1"
		},
		"handshake_tone2": {
			"aliases": [
				"shaking_hands_tone2"
			],
			"ascii_arts": [],
			"category": "people",
			"code": "handshake_tone2",
			"code_points": [
				"1f91d",
				"1f3fc"
			],
			"keywords": [],
			"name": "handshake tone 2"
		},
		"handshake_tone3": {
			"aliases": [
				"shaking_hands_tone3"
			],
			"ascii_arts": [],
			"category": "people",
			"code": "handshake_tone3",
			"code_points": [
				"1f91d",
				"1f3fd"
			],
			"keywords": [],
			"name": "handshake tone 3"
		},
		"handshake_tone4": {
			"aliases": [
				"shaking_hands_tone4"
			],
			"ascii_arts": [],
			"category": "people",
			"code": "handshake_tone4",
			"code_points": [
				"1f91d",
				"1f3fe"
			],
			"keywords": [],
			"name": "handshake tone 4"
		},
		"handshake_tone5": {
			"aliases": [
				"shaking_hands_tone5"
			],
			"ascii_arts": [],
			"category": "people",
			"code": "handshake_tone5",
			"code_points": [
				"1f91d",
				"1f3ff"
			],
			"keywords": [],
			"name": "handshake tone 5"
		},
		"hash": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "hash",
			"code_points": [
				"23",
				"fe0f",
				"20e3"
			],
			"keywords": [
				"number",
				"symbol"
			],
			"name": "number sign"
		},
		"hatched_chick": {
			"aliases": [],
			"ascii_arts": [],
			"category": "nature",
			"code": "hatched_chick",
			"code_points": [
				"1f425"
			],
			"keywords": [
				"animal",
				"baby",
				"bird",
				"chick",
				"chicken",
				"cute",
				"woman",
				"young"
			],
			"name": "front-facing baby chick"
		},
		"hatching_chick": {
			"aliases": [],
			"ascii_arts": [],
			"category": "nature",
			"code": "hatching_chick",
			"code_points": [
				"1f423"
			],
			"keywords": [
				"animal",
				"baby",
				"bird",
				"born",
				"chick",
				"chicken",
				"cute",
				"egg",
				"woman",
				"young"
			],
			"name": "hatching chick"
		},
		"head_bandage": {
			"aliases": [
				"face_with_head_bandage"
			],
			"ascii_arts": [],
			"category": "people",
			"code": "head_bandage",
			"code_points": [
				"1f915"
			],
			"keywords": [
				"emotion",
				"health",
				"sick",
				"smiley"
			],
			"name": "face with head-bandage"
		},
		"headphones": {
			"aliases": [],
			"ascii_arts": [],
			"category": "activity",
			"code": "headphones",
			"code_points": [
				"1f3a7"
			],
			"keywords": [
				"audio",
				"beats",
				"buds",
				"ears",
				"gadgets",
				"headphone",
				"instruments",
				"listen",
				"music",
				"score",
				"sound"
			],
			"name": "headphone"
		},
		"hear_no_evil": {
			"aliases": [],
			"ascii_arts": [],
			"category": "nature",
			"code": "hear_no_evil",
			"code_points": [
				"1f649"
			],
			"keywords": [
				"animal",
				"ears",
				"hear",
				"kikazaru",
				"monkey",
				"sound"
			],
			"name": "hear-no-evil monkey"
		},
		"heart": {
			"aliases": [],
			"ascii_arts": [
				"<3"
			],
			"category": "symbols",
			"code": "heart",
			"code_points": [
				"2764",
				"fe0f"
			],
			"keywords": [
				"black",
				"cold",
				"death",
				"desire",
				"evil",
				"heart",
				"intense",
				"like",
				"love",
				"parties",
				"passion",
				"pink",
				"red",
				"romance",
				"symbol",
				"valentines"
			],
			"name": "heavy black heart"
		},
		"heart_decoration": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "heart_decoration",
			"code_points": [
				"1f49f"
			],
			"keywords": [
				"like",
				"love",
				"purple-square",
				"symbol"
			],
			"name": "heart decoration"
		},
		"heart_exclamation": {
			"aliases": [
				"heavy_heart_exclamation_mark_ornament"
			],
			"ascii_arts": [],
			"category": "symbols",
			"code": "heart_exclamation",
			"code_points": [
				"2763"
			],
			"keywords": [
				"emotion",
				"love",
				"punctuation",
				"symbol"
			],
			"name": "heavy heart exclamation mark ornament"
		},
		"heart_eyes": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "heart_eyes",
			"code_points": [
				"1f60d"
			],
			"keywords": [
				"affection",
				"beautiful",
				"crush",
				"emotion",
				"face",
				"flirt",
				"happy",
				"heart",
				"heart eyes",
				"heart-shaped",
				"infatuation",
				"like",
				"love",
				"lovestruck",
				"sex",
				"smile",
				"smiley",
				"smiling",
				"valentines"
			],
			"name": "smiling face with heart-shaped eyes"
		},
		"heart_eyes_cat": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "heart_eyes_cat",
			"code_points": [
				"1f63b"
			],
			"keywords": [
				"affection",
				"animal",
				"beautiful",
				"cat",
				"cats",
				"heart",
				"heart eyes",
				"like",
				"love",
				"lovestruck",
				"valentines"
			],
			"name": "smiling cat face with heart-shaped eyes"
		},
		"heartbeat": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "heartbeat",
			"code_points": [
				"1f493"
			],
			"keywords": [
				"affection",
				"like",
				"love",
				"symbol",
				"valentines"
			],
			"name": "beating heart"
		},
		"heartpulse": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "heartpulse",
			"code_points": [
				"1f497"
			],
			"keywords": [
				"affection",
				"like",
				"love",
				"symbol",
				"valentines"
			],
			"name": "growing heart"
		},
		"hearts": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "hearts",
			"code_points": [
				"2665",
				"fe0f"
			],
			"keywords": [
				"cards",
				"game",
				"love",
				"poker",
				"symbol"
			],
			"name": "black heart suit"
		},
		"heavy_check_mark": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "heavy_check_mark",
			"code_points": [
				"2714",
				"fe0f"
			],
			"keywords": [
				"nike",
				"ok",
				"symbol"
			],
			"name": "heavy check mark"
		},
		"heavy_division_sign": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "heavy_division_sign",
			"code_points": [
				"2797"
			],
			"keywords": [
				"calculation",
				"divide",
				"math",
				"symbol"
			],
			"name": "heavy division sign"
		},
		"heavy_dollar_sign": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "heavy_dollar_sign",
			"code_points": [
				"1f4b2"
			],
			"keywords": [
				"cash",
				"currency",
				"dollar",
				"math",
				"money",
				"payment",
				"purchase",
				"sale",
				"symbol",
				"value"
			],
			"name": "heavy dollar sign"
		},
		"heavy_minus_sign": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "heavy_minus_sign",
			"code_points": [
				"2796"
			],
			"keywords": [
				"calculation",
				"math",
				"symbol"
			],
			"name": "heavy minus sign"
		},
		"heavy_multiplication_x": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "heavy_multiplication_x",
			"code_points": [
				"2716",
				"fe0f"
			],
			"keywords": [
				"calculation",
				"math",
				"symbol"
			],
			"name": "heavy multiplication x"
		},
		"heavy_plus_sign": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "heavy_plus_sign",
			"code_points": [
				"2795"
			],
			"keywords": [
				"calculation",
				"math",
				"symbol"
			],
			"name": "heavy plus sign"
		},
		"helicopter": {
			"aliases": [],
			"ascii_arts": [],
			"category": "travel",
			"code": "helicopter",
			"code_points": [
				"1f681"
			],
			"keywords": [
				"fly",
				"gyro",
				"gyrocopter",
				"helicopter",
				"helo",
				"plane",
				"transportation",
				"travel",
				"vehicle"
			],
			"name": "helicopter"
		},
		"helmet_with_cross": {
			"aliases": [
				"helmet_with_white_cross"
			],
			"ascii_arts": [],
			"category": "people",
			"code": "helmet_with_cross",
			"code_points": [
				"26d1"
			],
			"keywords": [
				"accessories",
				"aid",
				"face",
				"hat",
				"job",
				"object",
				"person"
			],
			"name": "helmet with white cross"
		},
		"herb": {
			"aliases": [],
			"ascii_arts": [],
			"category": "nature",
			"code": "herb",
			"code_points": [
				"1f33f"
			],
			"keywords": [
				"cook",
				"cooking",
				"grass",
				"herb",
				"lawn",
				"leaf",
				"medicine",
				"nature",
				"plant",
				"spice",
				"vegetable",
				"weed"
			],
			"name": "herb"
		},
		"hibiscus": {
			"aliases": [],
			"ascii_arts": [],
			"category": "nature",
			"code": "hibiscus",
			"code_points": [
				"1f33a"
			],
			"keywords": [
				"flower",
				"flowers",
				"hibiscus",
				"nature",
				"plant",
				"tropical",
				"vegetable",
				"warm"
			],
			"name": "hibiscus"
		},
		"high_brightness": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "high_brightness",
			"code_points": [
				"1f506"
			],
			"keywords": [
				"light",
				"summer",
				"sun",
				"symbol"
			],
			"name": "high brightness symbol"
		},
		"high_heel": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "high_heel",
			"code_points": [
				"1f460"
			],
			"keywords": [
				"accessories",
				"fashion",
				"female",
				"girls night",
				"sexy",
				"shoe",
				"shoes",
				"women"
			],
			"name": "high-heeled shoe"
		},
		"hockey": {
			"aliases": [],
			"ascii_arts": [],
			"category": "activity",
			"code": "hockey",
			"code_points": [
				"1f3d2"
			],
			"keywords": [
				"game",
				"hockey",
				"sport"
			],
			"name": "ice hockey stick and puck"
		},
		"hole": {
			"aliases": [],
			"ascii_arts": [],
			"category": "objects",
			"code": "hole",
			"code_points": [
				"1f573"
			],
			"keywords": [
				"object",
				"pit",
				"well"
			],
			"name": "hole"
		},
		"homes": {
			"aliases": [
				"house_buildings"
			],
			"ascii_arts": [],
			"category": "travel",
			"code": "homes",
			"code_points": [
				"1f3d8"
			],
			"keywords": [
				"building",
				"bungalow",
				"craftsman",
				"dwelling",
				"home",
				"house",
				"mansion",
				"places",
				"ranch",
				"residence"
			],
			"name": "house buildings"
		},
		"honey_pot": {
			"aliases": [],
			"ascii_arts": [],
			"category": "food",
			"code": "honey_pot",
			"code_points": [
				"1f36f"
			],
			"keywords": [
				"bear",
				"bees",
				"food",
				"honey",
				"pooh",
				"pot",
				"sweet",
				"vagina"
			],
			"name": "honey pot"
		},
		"horse": {
			"aliases": [],
			"ascii_arts": [],
			"category": "nature",
			"code": "horse",
			"code_points": [
				"1f434"
			],
			"keywords": [
				"animal",
				"brown",
				"wildlife"
			],
			"name": "horse face"
		},
		"horse_racing": {
			"aliases": [],
			"ascii_arts": [],
			"category": "activity",
			"code": "horse_racing",
			"code_points": [
				"1f3c7"
			],
			"keywords": [
				"animal",
				"betting",
				"competition",
				"horse",
				"horse racing",
				"jockey",
				"men",
				"race",
				"racing",
				"sport",
				"triple crown"
			],
			"name": "horse racing"
		},
		"horse_racing_tone1": {
			"aliases": [],
			"ascii_arts": [],
			"category": "activity",
			"code": "horse_racing_tone1",
			"code_points": [
				"1f3c7",
				"1f3fb"
			],
			"keywords": [
				"animal",
				"betting",
				"competition",
				"jockey",
				"race",
				"triple crown"
			],
			"name": "horse racing tone 1"
		},
		"horse_racing_tone2": {
			"aliases": [],
			"ascii_arts": [],
			"category": "activity",
			"code": "horse_racing_tone2",
			"code_points": [
				"1f3c7",
				"1f3fc"
			],
			"keywords": [
				"animal",
				"betting",
				"competition",
				"jockey",
				"race",
				"triple crown"
			],
			"name": "horse racing tone 2"
		},
		"horse_racing_tone3": {
			"aliases": [],
			"ascii_arts": [],
			"category": "activity",
			"code": "horse_racing_tone3",
			"code_points": [
				"1f3c7",
				"1f3fd"
			],
			"keywords": [
				"animal",
				"betting",
				"competition",
				"jockey",
				"race",
				"triple crown"
			],
			"name": "horse racing tone 3"
		},
		"horse_racing_tone4": {
			"aliases": [],
			"ascii_arts": [],
			"category": "activity",
			"code": "horse_racing_tone4",
			"code_points": [
				"1f3c7",
				"1f3fe"
			],
			"keywords": [
				"animal",
				"betting",
				"competition",
				"jockey",
				"race",
				"triple crown"
			],
			"name": "horse racing tone 4"
		},
		"horse_racing_tone5": {
			"aliases": [],
			"ascii_arts": [],
			"category": "activity",
			"code": "horse_racing_tone5",
			"code_points": [
				"1f3c7",
				"1f3ff"
			],
			"keywords": [
				"animal",
				"betting",
				"competition",
				"jockey",
				"race",
				"triple crown"
			],
			"name": "horse racing tone 5"
		},
		"hospital": {
			"aliases": [],
			"ascii_arts": [],
			"category": "travel",
			"code": "hospital",
			"code_points": [
				"1f3e5"
			],
			"keywords": [
				"911",
				"building",
				"doctor",
				"health",
				"places",
				"surgery"
			],
			"name": "hospital"
		},
		"hot_pepper": {
			"aliases": [],
			"ascii_arts": [],
			"category": "food",
			"code": "hot_pepper",
			"code_points": [
				"1f336"
			],
			"keywords": [
				"cayenne",
				"chili",
				"food",
				"habanero",
				"jalapeno",
				"nature",
				"spicy",
				"vegetables"
			],
			"name": "hot pepper"
		},
		"hotdog": {
			"aliases": [
				"hot_dog"
			],
			"ascii_arts": [],
			"category": "food",
			"code": "hotdog",
			"code_points": [
				"1f32d"
			],
			"keywords": [
				"america",
				"food"
			],
			"name": "hot dog"
		},
		"hotel": {
			"aliases": [],
			"ascii_arts": [],
			"category": "travel",
			"code": "hotel",
			"code_points": [
				"1f3e8"
			],
			"keywords": [
				"accomodation",
				"building",
				"checkin",
				"holiday inn",
				"hospital",
				"hotel",
				"motel",
				"places",
				"vacation",
				"whotel"
			],
			"name": "hotel"
		},
		"hotsprings": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "hotsprings",
			"code_points": [
				"2668",
				"fe0f"
			],
			"keywords": [
				"bath",
				"relax",
				"symbol",
				"warm"
			],
			"name": "hot springs"
		},
		"hourglass": {
			"aliases": [],
			"ascii_arts": [],
			"category": "objects",
			"code": "hourglass",
			"code_points": [
				"231b",
				"fe0f"
			],
			"keywords": [
				"clock",
				"object",
				"oldschool",
				"time"
			],
			"name": "hourglass"
		},
		"hourglass_flowing_sand": {
			"aliases": [],
			"ascii_arts": [],
			"category": "objects",
			"code": "hourglass_flowing_sand",
			"code_points": [
				"23f3"
			],
			"keywords": [
				"countdown",
				"object",
				"oldschool",
				"time"
			],
			"name": "hourglass with flowing sand"
		},
		"house": {
			"aliases": [],
			"ascii_arts": [],
			"category": "travel",
			"code": "house",
			"code_points": [
				"1f3e0"
			],
			"keywords": [
				"building",
				"bungalow",
				"craftsman",
				"dwelling",
				"home",
				"house",
				"mansion",
				"places",
				"ranch",
				"residence"
			],
			"name": "house building"
		},
		"house_abandoned": {
			"aliases": [
				"derelict_house_building"
			],
			"ascii_arts": [],
			"category": "travel",
			"code": "house_abandoned",
			"code_points": [
				"1f3da"
			],
			"keywords": [
				"abandoned",
				"boarded",
				"building",
				"bungalow",
				"craftsman",
				"dwelling",
				"home",
				"house",
				"mansion",
				"places",
				"ranch",
				"residence",
				"run down",
				"shoddy",
				"vacant"
			],
			"name": "derelict house building"
		},
		"house_with_garden": {
			"aliases": [],
			"ascii_arts": [],
			"category": "travel",
			"code": "house_with_garden",
			"code_points": [
				"1f3e1"
			],
			"keywords": [
				"building",
				"home",
				"house",
				"nature",
				"places",
				"plant"
			],
			"name": "house with garden"
		},
		"hugging": {
			"aliases": [
				"hugging_face"
			],
			"ascii_arts": [],
			"category": "people",
			"code": "hugging",
			"code_points": [
				"1f917"
			],
			"keywords": [
				"hug",
				"smiley",
				"thank you"
			],
			"name": "hugging face"
		},
		"hushed": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "hushed",
			"code_points": [
				"1f62f"
			],
			"keywords": [
				"face",
				"hush",
				"quiet",
				"silent",
				"smiley",
				"surprised",
				"whisper",
				"woo",
				"wow"
			],
			"name": "hushed face"
		},
		"ice_cream": {
			"aliases": [],
			"ascii_arts": [],
			"category": "food",
			"code": "ice_cream",
			"code_points": [
				"1f368"
			],
			"keywords": [
				"cold",
				"cone",
				"cream",
				"dairy",
				"desert",
				"dessert",
				"food",
				"hot",
				"ice",
				"icecream",
				"serve",
				"soft",
				"waffle"
			],
			"name": "ice cream"
		},
		"ice_skate": {
			"aliases": [],
			"ascii_arts": [],
			"category": "activity",
			"code": "ice_skate",
			"code_points": [
				"26f8"
			],
			"keywords": [
				"cold",
				"ice skating",
				"place",
				"sport",
				"travel"
			],
			"name": "ice skate"
		},
		"icecream": {
			"aliases": [],
			"ascii_arts": [],
			"category": "food",
			"code": "icecream",
			"code_points": [
				"1f366"
			],
			"keywords": [
				"cold",
				"cone",
				"cream",
				"dairy",
				"desert",
				"dessert",
				"food",
				"hot",
				"ice",
				"icecream",
				"serve",
				"soft",
				"yogurt"
			],
			"name": "soft ice cream"
		},
		"id": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "id",
			"code_points": [
				"1f194"
			],
			"keywords": [
				"identification",
				"identity",
				"purple-square",
				"symbol",
				"word"
			],
			"name": "squared id"
		},
		"ideograph_advantage": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "ideograph_advantage",
			"code_points": [
				"1f250"
			],
			"keywords": [
				"chinese",
				"get",
				"japan",
				"kanji",
				"obtain",
				"symbol"
			],
			"name": "circled ideograph advantage"
		},
		"imp": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "imp",
			"code_points": [
				"1f47f"
			],
			"keywords": [
				"angry",
				"cute",
				"devil",
				"evil",
				"horns",
				"monster",
				"smiley",
				"wth"
			],
			"name": "imp"
		},
		"inbox_tray": {
			"aliases": [],
			"ascii_arts": [],
			"category": "objects",
			"code": "inbox_tray",
			"code_points": [
				"1f4e5"
			],
			"keywords": [
				"documents",
				"email",
				"office",
				"work"
			],
			"name": "inbox tray"
		},
		"incoming_envelope": {
			"aliases": [],
			"ascii_arts": [],
			"category": "objects",
			"code": "incoming_envelope",
			"code_points": [
				"1f4e8"
			],
			"keywords": [
				"email",
				"inbox",
				"object"
			],
			"name": "incoming envelope"
		},
		"information_desk_person": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "information_desk_person",
			"code_points": [
				"1f481"
			],
			"keywords": [
				"answer",
				"attitude",
				"diversity",
				"female",
				"girl",
				"help",
				"human",
				"information",
				"people",
				"question",
				"sassy",
				"snarky",
				"unimpressed",
				"woman",
				"women"
			],
			"name": "information desk person"
		},
		"information_desk_person_tone1": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "information_desk_person_tone1",
			"code_points": [
				"1f481",
				"1f3fb"
			],
			"keywords": [
				"answer",
				"attitude",
				"female",
				"girl",
				"help",
				"human",
				"question",
				"sassy",
				"snarky",
				"unimpressed",
				"woman"
			],
			"name": "information desk person tone 1"
		},
		"information_desk_person_tone2": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "information_desk_person_tone2",
			"code_points": [
				"1f481",
				"1f3fc"
			],
			"keywords": [
				"answer",
				"attitude",
				"female",
				"girl",
				"help",
				"human",
				"question",
				"sassy",
				"snarky",
				"unimpressed",
				"woman"
			],
			"name": "information desk person tone 2"
		},
		"information_desk_person_tone3": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "information_desk_person_tone3",
			"code_points": [
				"1f481",
				"1f3fd"
			],
			"keywords": [
				"answer",
				"attitude",
				"female",
				"girl",
				"help",
				"human",
				"question",
				"sassy",
				"snarky",
				"unimpressed",
				"woman"
			],
			"name": "information desk person tone 3"
		},
		"information_desk_person_tone4": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "information_desk_person_tone4",
			"code_points": [
				"1f481",
				"1f3fe"
			],
			"keywords": [
				"answer",
				"attitude",
				"female",
				"girl",
				"help",
				"human",
				"question",
				"sassy",
				"snarky",
				"unimpressed",
				"woman"
			],
			"name": "information desk person tone 4"
		},
		"information_desk_person_tone5": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "information_desk_person_tone5",
			"code_points": [
				"1f481",
				"1f3ff"
			],
			"keywords": [
				"answer",
				"attitude",
				"female",
				"girl",
				"help",
				"human",
				"question",
				"sassy",
				"snarky",
				"unimpressed",
				"woman"
			],
			"name": "information desk person tone 5"
		},
		"information_source": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "information_source",
			"code_points": [
				"2139",
				"fe0f"
			],
			"keywords": [
				"alphabet",
				"blue-square",
				"letter",
				"symbol"
			],
			"name": "information source"
		},
		"innocent": {
			"aliases": [],
			"ascii_arts": [
				"0:)",
				"0:-)",
				"0:-3",
				"0:3",
				"0;-)",
				"0;^)",
				"O:)",
				"O:-)",
				"O:-3",
				"O:3",
				"O;-)",
				"O=)"
			],
			"category": "people",
			"code": "innocent",
			"code_points": [
				"1f607"
			],
			"keywords": [
				"angel",
				"circle",
				"emotion",
				"face",
				"halo",
				"heaven",
				"innocent",
				"ring",
				"smiley"
			],
			"name": "smiling face with halo"
		},
		"interrobang": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "interrobang",
			"code_points": [
				"2049",
				"fe0f"
			],
			"keywords": [
				"punctuation",
				"surprise",
				"symbol",
				"wat"
			],
			"name": "exclamation question mark"
		},
		"iphone": {
			"aliases": [],
			"ascii_arts": [],
			"category": "objects",
			"code": "iphone",
			"code_points": [
				"1f4f1"
			],
			"keywords": [
				"apple",
				"dial",
				"electronics",
				"gadgets",
				"phone",
				"selfie",
				"technology"
			],
			"name": "mobile phone"
		},
		"island": {
			"aliases": [
				"desert_island"
			],
			"ascii_arts": [],
			"category": "travel",
			"code": "island",
			"code_points": [
				"1f3dd"
			],
			"keywords": [
				"alone",
				"beach",
				"land",
				"places",
				"solitude",
				"swim",
				"travel",
				"tropical",
				"vacation"
			],
			"name": "desert island"
		},
		"izakaya_lantern": {
			"aliases": [
				"lantern"
			],
			"ascii_arts": [],
			"category": "objects",
			"code": "izakaya_lantern",
			"code_points": [
				"1f3ee"
			],
			"keywords": [
				"alcohol",
				"bar",
				"drink",
				"izakaya",
				"japan",
				"lantern",
				"light",
				"object",
				"restaurant",
				"sake",
				"stay"
			],
			"name": "izakaya lantern"
		},
		"jack_o_lantern": {
			"aliases": [],
			"ascii_arts": [],
			"category": "nature",
			"code": "jack_o_lantern",
			"code_points": [
				"1f383"
			],
			"keywords": [
				"autumn",
				"carve",
				"costume",
				"dead",
				"fall",
				"halloween",
				"holiday",
				"holidays",
				"horror",
				"jack-o-lantern",
				"october",
				"pumpkin",
				"saints",
				"scared",
				"scary",
				"spooky"
			],
			"name": "jack-o-lantern"
		},
		"japan": {
			"aliases": [],
			"ascii_arts": [],
			"category": "travel",
			"code": "japan",
			"code_points": [
				"1f5fe"
			],
			"keywords": [
				"map",
				"nation",
				"places",
				"travel",
				"tropical",
				"vacation"
			],
			"name": "silhouette of japan"
		},
		"japanese_castle": {
			"aliases": [],
			"ascii_arts": [],
			"category": "travel",
			"code": "japanese_castle",
			"code_points": [
				"1f3ef"
			],
			"keywords": [
				"building",
				"castle",
				"fort",
				"fortified",
				"fortress",
				"japanese",
				"photo",
				"places",
				"residence",
				"royalty",
				"travel",
				"vacation"
			],
			"name": "japanese castle"
		},
		"japanese_goblin": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "japanese_goblin",
			"code_points": [
				"1f47a"
			],
			"keywords": [
				"anger",
				"angry",
				"avian",
				"demon",
				"evil",
				"frown",
				"frustration",
				"goblin",
				"japanese",
				"mask",
				"monster",
				"mustache",
				"nose",
				"red",
				"supernatural",
				"tengu",
				"theater"
			],
			"name": "japanese goblin"
		},
		"japanese_ogre": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "japanese_ogre",
			"code_points": [
				"1f479"
			],
			"keywords": [
				"demon",
				"devil",
				"folklore",
				"horns",
				"japanese",
				"mask",
				"monster",
				"ogre",
				"oni",
				"teeth",
				"theater",
				"troll"
			],
			"name": "japanese ogre"
		},
		"jeans": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "jeans",
			"code_points": [
				"1f456"
			],
			"keywords": [
				"blue",
				"denim",
				"designer",
				"fashion",
				"jeans",
				"levi",
				"levi&#039;s",
				"pants",
				"shopping",
				"skinny",
				"work"
			],
			"name": "jeans"
		},
		"joy": {
			"aliases": [],
			"ascii_arts": [
				":')",
				":'-)"
			],
			"category": "people",
			"code": "joy",
			"code_points": [
				"1f602"
			],
			"keywords": [
				"cry",
				"emotion",
				"face",
				"haha",
				"happy",
				"joy",
				"laugh",
				"sarcastic",
				"silly",
				"smiley",
				"tears",
				"weep"
			],
			"name": "face with tears of joy"
		},
		"joy_cat": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "joy_cat",
			"code_points": [
				"1f639"
			],
			"keywords": [
				"animal",
				"cat",
				"cats",
				"cry",
				"haha",
				"happy",
				"joy",
				"laugh",
				"sarcastic",
				"silly",
				"tears"
			],
			"name": "cat face with tears of joy"
		},
		"joystick": {
			"aliases": [],
			"ascii_arts": [],
			"category": "objects",
			"code": "joystick",
			"code_points": [
				"1f579"
			],
			"keywords": [
				"atari",
				"boys night",
				"controller",
				"electronics",
				"game",
				"games"
			],
			"name": "joystick"
		},
		"juggling": {
			"aliases": [
				"juggler"
			],
			"ascii_arts": [],
			"category": "activity",
			"code": "juggling",
			"code_points": [
				"1f939"
			],
			"keywords": [],
			"name": "juggling"
		},
		"juggling_tone1": {
			"aliases": [
				"juggler_tone1"
			],
			"ascii_arts": [],
			"category": "activity",
			"code": "juggling_tone1",
			"code_points": [
				"1f939",
				"1f3fb"
			],
			"keywords": [],
			"name": "juggling tone 1"
		},
		"juggling_tone2": {
			"aliases": [
				"juggler_tone2"
			],
			"ascii_arts": [],
			"category": "activity",
			"code": "juggling_tone2",
			"code_points": [
				"1f939",
				"1f3fc"
			],
			"keywords": [],
			"name": "juggling tone 2"
		},
		"juggling_tone3": {
			"aliases": [
				"juggler_tone3"
			],
			"ascii_arts": [],
			"category": "activity",
			"code": "juggling_tone3",
			"code_points": [
				"1f939",
				"1f3fd"
			],
			"keywords": [],
			"name": "juggling tone 3"
		},
		"juggling_tone4": {
			"aliases": [
				"juggler_tone4"
			],
			"ascii_arts": [],
			"category": "activity",
			"code": "juggling_tone4",
			"code_points": [
				"1f939",
				"1f3fe"
			],
			"keywords": [],
			"name": "juggling tone 4"
		},
		"juggling_tone5": {
			"aliases": [
				"juggler_tone5"
			],
			"ascii_arts": [],
			"category": "activity",
			"code": "juggling_tone5",
			"code_points": [
				"1f939",
				"1f3ff"
			],
			"keywords": [],
			"name": "juggling tone 5"
		},
		"kaaba": {
			"aliases": [],
			"ascii_arts": [],
			"category": "travel",
			"code": "kaaba",
			"code_points": [
				"1f54b"
			],
			"keywords": [
				"building",
				"condolence",
				"places",
				"religion"
			],
			"name": "kaaba"
		},
		"key": {
			"aliases": [],
			"ascii_arts": [],
			"category": "objects",
			"code": "key",
			"code_points": [
				"1f511"
			],
			"keywords": [
				"door",
				"lock",
				"object",
				"password"
			],
			"name": "key"
		},
		"key2": {
			"aliases": [
				"old_key"
			],
			"ascii_arts": [],
			"category": "objects",
			"code": "key2",
			"code_points": [
				"1f5dd"
			],
			"keywords": [
				"door",
				"lock",
				"object",
				"password",
				"skeleton"
			],
			"name": "old key"
		},
		"keyboard": {
			"aliases": [],
			"ascii_arts": [],
			"category": "objects",
			"code": "keyboard",
			"code_points": [
				"2328",
				"fe0f"
			],
			"keywords": [
				"electronics",
				"office",
				"work"
			],
			"name": "keyboard"
		},
		"kimono": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "kimono",
			"code_points": [
				"1f458"
			],
			"keywords": [
				"dress",
				"fashion",
				"female",
				"japanese",
				"women"
			],
			"name": "kimono"
		},
		"kiss": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "kiss",
			"code_points": [
				"1f48b"
			],
			"keywords": [
				"affection",
				"beautiful",
				"face",
				"girls night",
				"like",
				"lip",
				"lips",
				"love",
				"sexy",
				"valentines",
				"women"
			],
			"name": "kiss mark"
		},
		"kiss_mm": {
			"aliases": [
				"couplekiss_mm"
			],
			"ascii_arts": [],
			"category": "people",
			"code": "kiss_mm",
			"code_points": [
				"1f468",
				"200d",
				"2764",
				"fe0f",
				"200d",
				"1f48b",
				"200d",
				"1f468"
			],
			"keywords": [
				"couple",
				"dating",
				"gay",
				"lgbt",
				"like",
				"love",
				"marriage",
				"men",
				"people",
				"sex",
				"valentines"
			],
			"name": "kiss (man,man)"
		},
		"kiss_ww": {
			"aliases": [
				"couplekiss_ww"
			],
			"ascii_arts": [],
			"category": "people",
			"code": "kiss_ww",
			"code_points": [
				"1f469",
				"200d",
				"2764",
				"fe0f",
				"200d",
				"1f48b",
				"200d",
				"1f469"
			],
			"keywords": [
				"couple",
				"dating",
				"lesbian",
				"lgbt",
				"like",
				"love",
				"marriage",
				"people",
				"sex",
				"valentines",
				"women"
			],
			"name": "kiss (woman,woman)"
		},
		"kissing": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "kissing",
			"code_points": [
				"1f617"
			],
			"keywords": [
				"3",
				"face",
				"infatuation",
				"kiss",
				"kissing",
				"like",
				"lips",
				"love",
				"pucker",
				"sexy",
				"smiley",
				"smooch",
				"valentines"
			],
			"name": "kissing face"
		},
		"kissing_cat": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "kissing_cat",
			"code_points": [
				"1f63d"
			],
			"keywords": [
				"animal",
				"cat",
				"cats",
				"heart",
				"kiss",
				"love",
				"passion",
				"puckered"
			],
			"name": "kissing cat face with closed eyes"
		},
		"kissing_closed_eyes": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "kissing_closed_eyes",
			"code_points": [
				"1f61a"
			],
			"keywords": [
				"affection",
				"face",
				"heart",
				"infatuation",
				"kiss",
				"kissing",
				"like",
				"love",
				"passion",
				"puckered",
				"sexy",
				"smiley",
				"smooch",
				"valentines"
			],
			"name": "kissing face with closed eyes"
		},
		"kissing_heart": {
			"aliases": [],
			"ascii_arts": [
				":*",
				":-*",
				":^*",
				"=*"
			],
			"category": "people",
			"code": "kissing_heart",
			"code_points": [
				"1f618"
			],
			"keywords": [
				"affection",
				"blowing kiss",
				"face",
				"heart",
				"infatuation",
				"kiss",
				"like",
				"lips",
				"love",
				"sexy",
				"smiley",
				"valentines"
			],
			"name": "face throwing a kiss"
		},
		"kissing_smiling_eyes": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "kissing_smiling_eyes",
			"code_points": [
				"1f619"
			],
			"keywords": [
				"affection",
				"face",
				"infatuation",
				"kiss",
				"kissing",
				"lips",
				"pucker",
				"sexy",
				"smile",
				"smiley",
				"smooch",
				"valentines"
			],
			"name": "kissing face with smiling eyes"
		},
		"kiwi": {
			"aliases": [
				"kiwifruit"
			],
			"ascii_arts": [],
			"category": "food",
			"code": "kiwi",
			"code_points": [
				"1f95d"
			],
			"keywords": [],
			"name": "kiwifruit"
		},
		"knife": {
			"aliases": [
				"hocho"
			],
			"ascii_arts": [],
			"category": "objects",
			"code": "knife",
			"code_points": [
				"1f52a"
			],
			"keywords": [
				"object",
				"weapon"
			],
			"name": "hocho"
		},
		"koala": {
			"aliases": [],
			"ascii_arts": [],
			"category": "nature",
			"code": "koala",
			"code_points": [
				"1f428"
			],
			"keywords": [
				"animal",
				"nature",
				"wildlife"
			],
			"name": "koala"
		},
		"koko": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "koko",
			"code_points": [
				"1f201"
			],
			"keywords": [
				"blue-square",
				"destination",
				"here",
				"japanese",
				"katakana",
				"symbol"
			],
			"name": "squared katakana koko"
		},
		"label": {
			"aliases": [],
			"ascii_arts": [],
			"category": "objects",
			"code": "label",
			"code_points": [
				"1f3f7"
			],
			"keywords": [
				"object",
				"tag"
			],
			"name": "label"
		},
		"large_blue_circle": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "large_blue_circle",
			"code_points": [
				"1f535"
			],
			"keywords": [
				"circle",
				"shapes",
				"symbol"
			],
			"name": "large blue circle"
		},
		"large_blue_diamond": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "large_blue_diamond",
			"code_points": [
				"1f537"
			],
			"keywords": [
				"shape",
				"shapes",
				"symbol"
			],
			"name": "large blue diamond"
		},
		"large_orange_diamond": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "large_orange_diamond",
			"code_points": [
				"1f536"
			],
			"keywords": [
				"shape",
				"shapes",
				"symbol"
			],
			"name": "large orange diamond"
		},
		"last_quarter_moon": {
			"aliases": [],
			"ascii_arts": [],
			"category": "nature",
			"code": "last_quarter_moon",
			"code_points": [
				"1f317"
			],
			"keywords": [
				"cheese",
				"last",
				"moon",
				"nature",
				"night",
				"phase",
				"quarter",
				"sky",
				"space"
			],
			"name": "last quarter moon symbol"
		},
		"last_quarter_moon_with_face": {
			"aliases": [],
			"ascii_arts": [],
			"category": "nature",
			"code": "last_quarter_moon_with_face",
			"code_points": [
				"1f31c"
			],
			"keywords": [
				"anthropomorphic",
				"cheese",
				"face",
				"last",
				"moon",
				"nature",
				"night",
				"phase",
				"quarter",
				"sky",
				"space"
			],
			"name": "last quarter moon with face"
		},
		"laughing": {
			"aliases": [
				"satisfied"
			],
			"ascii_arts": [
				">:)",
				">:-)",
				">;)",
				">=)"
			],
			"category": "people",
			"code": "laughing",
			"code_points": [
				"1f606"
			],
			"keywords": [
				"emotion",
				"happy",
				"joy",
				"laugh",
				"laughing",
				"lol",
				"smiley",
				"smiling"
			],
			"name": "smiling face with open mouth and tightly-closed ey"
		},
		"leaves": {
			"aliases": [],
			"ascii_arts": [],
			"category": "nature",
			"code": "leaves",
			"code_points": [
				"1f343"
			],
			"keywords": [
				"float",
				"fluttering",
				"grass",
				"lawn",
				"leaf",
				"leaves",
				"nature",
				"plant",
				"tree",
				"vegetable",
				"wind"
			],
			"name": "leaf fluttering in wind"
		},
		"ledger": {
			"aliases": [],
			"ascii_arts": [],
			"category": "objects",
			"code": "ledger",
			"code_points": [
				"1f4d2"
			],
			"keywords": [
				"notes",
				"object",
				"office",
				"paper",
				"write"
			],
			"name": "ledger"
		},
		"left_facing_fist": {
			"aliases": [
				"left_fist"
			],
			"ascii_arts": [],
			"category": "people",
			"code": "left_facing_fist",
			"code_points": [
				"1f91b"
			],
			"keywords": [],
			"name": "left-facing fist"
		},
		"left_facing_fist_tone1": {
			"aliases": [
				"left_fist_tone1"
			],
			"ascii_arts": [],
			"category": "people",
			"code": "left_facing_fist_tone1",
			"code_points": [
				"1f91b",
				"1f3fb"
			],
			"keywords": [],
			"name": "left facing fist tone 1"
		},
		"left_facing_fist_tone2": {
			"aliases": [
				"left_fist_tone2"
			],
			"ascii_arts": [],
			"category": "people",
			"code": "left_facing_fist_tone2",
			"code_points": [
				"1f91b",
				"1f3fc"
			],
			"keywords": [],
			"name": "left facing fist tone 2"
		},
		"left_facing_fist_tone3": {
			"aliases": [
				"left_fist_tone3"
			],
			"ascii_arts": [],
			"category": "people",
			"code": "left_facing_fist_tone3",
			"code_points": [
				"1f91b",
				"1f3fd"
			],
			"keywords": [],
			"name": "left facing fist tone 3"
		},
		"left_facing_fist_tone4": {
			"aliases": [
				"left_fist_tone4"
			],
			"ascii_arts": [],
			"category": "people",
			"code": "left_facing_fist_tone4",
			"code_points": [
				"1f91b",
				"1f3fe"
			],
			"keywords": [],
			"name": "left facing fist tone 4"
		},
		"left_facing_fist_tone5": {
			"aliases": [
				"left_fist_tone5"
			],
			"ascii_arts": [],
			"category": "people",
			"code": "left_facing_fist_tone5",
			"code_points": [
				"1f91b",
				"1f3ff"
			],
			"keywords": [],
			"name": "left facing fist tone 5"
		},
		"left_luggage": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "left_luggage",
			"code_points": [
				"1f6c5"
			],
			"keywords": [
				"bag",
				"baggage",
				"blue-square",
				"luggage",
				"symbol",
				"travel"
			],
			"name": "left luggage"
		},
		"left_right_arrow": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "left_right_arrow",
			"code_points": [
				"2194",
				"fe0f"
			],
			"keywords": [
				"arrow",
				"shape",
				"symbol"
			],
			"name": "left right arrow"
		},
		"leftwards_arrow_with_hook": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "leftwards_arrow_with_hook",
			"code_points": [
				"21a9",
				"fe0f"
			],
			"keywords": [
				"arrow",
				"symbol"
			],
			"name": "leftwards arrow with hook"
		},
		"lemon": {
			"aliases": [],
			"ascii_arts": [],
			"category": "food",
			"code": "lemon",
			"code_points": [
				"1f34b"
			],
			"keywords": [
				"citrus",
				"food",
				"fruit",
				"lemon",
				"nature",
				"yellow"
			],
			"name": "lemon"
		},
		"leo": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "leo",
			"code_points": [
				"264c",
				"fe0f"
			],
			"keywords": [
				"astrology",
				"constellation",
				"greek",
				"horoscope",
				"leo",
				"lion",
				"purple-square",
				"sign",
				"stars",
				"symbol",
				"zodiac"
			],
			"name": "leo"
		},
		"leopard": {
			"aliases": [],
			"ascii_arts": [],
			"category": "nature",
			"code": "leopard",
			"code_points": [
				"1f406"
			],
			"keywords": [
				"animal",
				"cat",
				"leopard",
				"nature",
				"roar",
				"sexy",
				"spot",
				"spotted",
				"wildlife"
			],
			"name": "leopard"
		},
		"level_slider": {
			"aliases": [],
			"ascii_arts": [],
			"category": "objects",
			"code": "level_slider",
			"code_points": [
				"1f39a"
			],
			"keywords": [
				"controls"
			],
			"name": "level slider"
		},
		"levitate": {
			"aliases": [
				"man_in_business_suit_levitating"
			],
			"ascii_arts": [],
			"category": "activity",
			"code": "levitate",
			"code_points": [
				"1f574"
			],
			"keywords": [
				"exclamation",
				"hover",
				"job",
				"men"
			],
			"name": "man in business suit levitating"
		},
		"libra": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "libra",
			"code_points": [
				"264e",
				"fe0f"
			],
			"keywords": [
				"astrology",
				"constellation",
				"greek",
				"horoscope",
				"libra",
				"purple-square",
				"scales",
				"sign",
				"stars",
				"symbol",
				"zodiac"
			],
			"name": "libra"
		},
		"lifter": {
			"aliases": [
				"weight_lifter"
			],
			"ascii_arts": [],
			"category": "activity",
			"code": "lifter",
			"code_points": [
				"1f3cb"
			],
			"keywords": [
				"bench",
				"deadlift",
				"diversity",
				"flex",
				"men",
				"press",
				"sport",
				"squats",
				"weight lifting",
				"win",
				"workout"
			],
			"name": "weight lifter"
		},
		"lifter_tone1": {
			"aliases": [
				"weight_lifter_tone1"
			],
			"ascii_arts": [],
			"category": "activity",
			"code": "lifter_tone1",
			"code_points": [
				"1f3cb",
				"1f3fb"
			],
			"keywords": [
				"bench",
				"deadlift",
				"press",
				"squats"
			],
			"name": "weight lifter tone 1"
		},
		"lifter_tone2": {
			"aliases": [
				"weight_lifter_tone2"
			],
			"ascii_arts": [],
			"category": "activity",
			"code": "lifter_tone2",
			"code_points": [
				"1f3cb",
				"1f3fc"
			],
			"keywords": [
				"bench",
				"deadlift",
				"press",
				"squats"
			],
			"name": "weight lifter tone 2"
		},
		"lifter_tone3": {
			"aliases": [
				"weight_lifter_tone3"
			],
			"ascii_arts": [],
			"category": "activity",
			"code": "lifter_tone3",
			"code_points": [
				"1f3cb",
				"1f3fd"
			],
			"keywords": [
				"bench",
				"deadlift",
				"press",
				"squats"
			],
			"name": "weight lifter tone 3"
		},
		"lifter_tone4": {
			"aliases": [
				"weight_lifter_tone4"
			],
			"ascii_arts": [],
			"category": "activity",
			"code": "lifter_tone4",
			"code_points": [
				"1f3cb",
				"1f3fe"
			],
			"keywords": [
				"bench",
				"deadlift",
				"press",
				"squats"
			],
			"name": "weight lifter tone 4"
		},
		"lifter_tone5": {
			"aliases": [
				"weight_lifter_tone5"
			],
			"ascii_arts": [],
			"category": "activity",
			"code": "lifter_tone5",
			"code_points": [
				"1f3cb",
				"1f3ff"
			],
			"keywords": [
				"bench",
				"deadlift",
				"press",
				"squats"
			],
			"name": "weight lifter tone 5"
		},
		"light_rail": {
			"aliases": [],
			"ascii_arts": [],
			"category": "travel",
			"code": "light_rail",
			"code_points": [
				"1f688"
			],
			"keywords": [
				"light",
				"rail",
				"train",
				"transportation",
				"travel",
				"vehicle"
			],
			"name": "light rail"
		},
		"link": {
			"aliases": [],
			"ascii_arts": [],
			"category": "objects",
			"code": "link",
			"code_points": [
				"1f517"
			],
			"keywords": [
				"office",
				"rings",
				"symbol",
				"url"
			],
			"name": "link symbol"
		},
		"lion_face": {
			"aliases": [
				"lion"
			],
			"ascii_arts": [],
			"category": "nature",
			"code": "lion_face",
			"code_points": [
				"1f981"
			],
			"keywords": [
				"animal",
				"cat",
				"roar",
				"wildlife"
			],
			"name": "lion face"
		},
		"lips": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "lips",
			"code_points": [
				"1f444"
			],
			"keywords": [
				"body",
				"kiss",
				"lip",
				"mouth",
				"sexy",
				"women"
			],
			"name": "mouth"
		},
		"lipstick": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "lipstick",
			"code_points": [
				"1f484"
			],
			"keywords": [
				"fashion",
				"female",
				"girl",
				"lip",
				"object",
				"sexy",
				"women"
			],
			"name": "lipstick"
		},
		"lizard": {
			"aliases": [],
			"ascii_arts": [],
			"category": "nature",
			"code": "lizard",
			"code_points": [
				"1f98e"
			],
			"keywords": [],
			"name": "lizard"
		},
		"lock": {
			"aliases": [],
			"ascii_arts": [],
			"category": "objects",
			"code": "lock",
			"code_points": [
				"1f512"
			],
			"keywords": [
				"lock",
				"object",
				"password",
				"security"
			],
			"name": "lock"
		},
		"lock_with_ink_pen": {
			"aliases": [],
			"ascii_arts": [],
			"category": "objects",
			"code": "lock_with_ink_pen",
			"code_points": [
				"1f50f"
			],
			"keywords": [
				"lock",
				"object",
				"secret",
				"security"
			],
			"name": "lock with ink pen"
		},
		"lollipop": {
			"aliases": [],
			"ascii_arts": [],
			"category": "food",
			"code": "lollipop",
			"code_points": [
				"1f36d"
			],
			"keywords": [
				"candy",
				"food",
				"halloween",
				"lick",
				"lollipop",
				"snack",
				"stick",
				"sugar",
				"sweet"
			],
			"name": "lollipop"
		},
		"loop": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "loop",
			"code_points": [
				"27bf"
			],
			"keywords": [
				"curly",
				"symbol"
			],
			"name": "double curly loop"
		},
		"loud_sound": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "loud_sound",
			"code_points": [
				"1f50a"
			],
			"keywords": [
				"alarm",
				"symbol"
			],
			"name": "speaker with three sound waves"
		},
		"loudspeaker": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "loudspeaker",
			"code_points": [
				"1f4e2"
			],
			"keywords": [
				"alarm",
				"object",
				"sound",
				"symbol",
				"volume"
			],
			"name": "public address loudspeaker"
		},
		"love_hotel": {
			"aliases": [],
			"ascii_arts": [],
			"category": "travel",
			"code": "love_hotel",
			"code_points": [
				"1f3e9"
			],
			"keywords": [
				"adultery",
				"affection",
				"birth",
				"building",
				"dating",
				"happy",
				"hospital",
				"hotel",
				"leisure",
				"like",
				"love",
				"places",
				"prostitution",
				"romance",
				"sex"
			],
			"name": "love hotel"
		},
		"love_letter": {
			"aliases": [],
			"ascii_arts": [],
			"category": "objects",
			"code": "love_letter",
			"code_points": [
				"1f48c"
			],
			"keywords": [
				"affection",
				"email",
				"envelope",
				"heart",
				"kiss",
				"letter",
				"like",
				"love",
				"object",
				"valentines"
			],
			"name": "love letter"
		},
		"low_brightness": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "low_brightness",
			"code_points": [
				"1f505"
			],
			"keywords": [
				"summer",
				"sun",
				"symbol"
			],
			"name": "low brightness symbol"
		},
		"lying_face": {
			"aliases": [
				"liar"
			],
			"ascii_arts": [],
			"category": "people",
			"code": "lying_face",
			"code_points": [
				"1f925"
			],
			"keywords": [],
			"name": "lying face"
		},
		"m": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "m",
			"code_points": [
				"24c2",
				"fe0f"
			],
			"keywords": [
				"alphabet",
				"blue-circle",
				"letter",
				"symbol"
			],
			"name": "circled latin capital letter m"
		},
		"mag": {
			"aliases": [],
			"ascii_arts": [],
			"category": "objects",
			"code": "mag",
			"code_points": [
				"1f50d"
			],
			"keywords": [
				"detail",
				"details",
				"detective",
				"investigator",
				"object",
				"search",
				"zoom"
			],
			"name": "left-pointing magnifying glass"
		},
		"mag_right": {
			"aliases": [],
			"ascii_arts": [],
			"category": "objects",
			"code": "mag_right",
			"code_points": [
				"1f50e"
			],
			"keywords": [
				"detail",
				"details",
				"detective",
				"investigator",
				"object",
				"search",
				"zoom"
			],
			"name": "right-pointing magnifying glass"
		},
		"mahjong": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "mahjong",
			"code_points": [
				"1f004",
				"fe0f"
			],
			"keywords": [
				"chinese",
				"game",
				"kanji",
				"object",
				"symbol"
			],
			"name": "mahjong tile red dragon"
		},
		"mailbox": {
			"aliases": [],
			"ascii_arts": [],
			"category": "objects",
			"code": "mailbox",
			"code_points": [
				"1f4eb"
			],
			"keywords": [
				"communication",
				"email",
				"inbox",
				"object"
			],
			"name": "closed mailbox with raised flag"
		},
		"mailbox_closed": {
			"aliases": [],
			"ascii_arts": [],
			"category": "objects",
			"code": "mailbox_closed",
			"code_points": [
				"1f4ea"
			],
			"keywords": [
				"communication",
				"email",
				"inbox",
				"object",
				"office"
			],
			"name": "closed mailbox with lowered flag"
		},
		"mailbox_with_mail": {
			"aliases": [],
			"ascii_arts": [],
			"category": "objects",
			"code": "mailbox_with_mail",
			"code_points": [
				"1f4ec"
			],
			"keywords": [
				"communication",
				"email",
				"inbox",
				"object"
			],
			"name": "open mailbox with raised flag"
		},
		"mailbox_with_no_mail": {
			"aliases": [],
			"ascii_arts": [],
			"category": "objects",
			"code": "mailbox_with_no_mail",
			"code_points": [
				"1f4ed"
			],
			"keywords": [
				"email",
				"inbox",
				"object"
			],
			"name": "open mailbox with lowered flag"
		},
		"man": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "man",
			"code_points": [
				"1f468"
			],
			"keywords": [
				"boys night",
				"classy",
				"dad",
				"diversity",
				"father",
				"guy",
				"men",
				"mustashe",
				"people",
				"selfie",
				"sex"
			],
			"name": "man"
		},
		"man_dancing": {
			"aliases": [
				"male_dancer"
			],
			"ascii_arts": [],
			"category": "people",
			"code": "man_dancing",
			"code_points": [
				"1f57a"
			],
			"keywords": [],
			"name": "man dancing"
		},
		"man_dancing_tone1": {
			"aliases": [
				"male_dancer_tone1"
			],
			"ascii_arts": [],
			"category": "activity",
			"code": "man_dancing_tone1",
			"code_points": [
				"1f57a",
				"1f3fb"
			],
			"keywords": [],
			"name": "man dancing tone 1"
		},
		"man_dancing_tone2": {
			"aliases": [
				"male_dancer_tone2"
			],
			"ascii_arts": [],
			"category": "activity",
			"code": "man_dancing_tone2",
			"code_points": [
				"1f57a",
				"1f3fc"
			],
			"keywords": [],
			"name": "man dancing tone 2"
		},
		"man_dancing_tone3": {
			"aliases": [
				"male_dancer_tone3"
			],
			"ascii_arts": [],
			"category": "activity",
			"code": "man_dancing_tone3",
			"code_points": [
				"1f57a",
				"1f3fd"
			],
			"keywords": [],
			"name": "man dancing tone 3"
		},
		"man_dancing_tone4": {
			"aliases": [
				"male_dancer_tone4"
			],
			"ascii_arts": [],
			"category": "activity",
			"code": "man_dancing_tone4",
			"code_points": [
				"1f57a",
				"1f3fe"
			],
			"keywords": [],
			"name": "man dancing tone 4"
		},
		"man_dancing_tone5": {
			"aliases": [
				"male_dancer_tone5"
			],
			"ascii_arts": [],
			"category": "activity",
			"code": "man_dancing_tone5",
			"code_points": [
				"1f57a",
				"1f3ff"
			],
			"keywords": [],
			"name": "man dancing tone 5"
		},
		"man_in_tuxedo": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "man_in_tuxedo",
			"code_points": [
				"1f935"
			],
			"keywords": [],
			"name": "man in tuxedo"
		},
		"man_in_tuxedo_tone1": {
			"aliases": [
				"tuxedo_tone1"
			],
			"ascii_arts": [],
			"category": "people",
			"code": "man_in_tuxedo_tone1",
			"code_points": [
				"1f935",
				"1f3fb"
			],
			"keywords": [],
			"name": "man in tuxedo tone 1"
		},
		"man_in_tuxedo_tone2": {
			"aliases": [
				"tuxedo_tone2"
			],
			"ascii_arts": [],
			"category": "people",
			"code": "man_in_tuxedo_tone2",
			"code_points": [
				"1f935",
				"1f3fc"
			],
			"keywords": [],
			"name": "man in tuxedo tone 2"
		},
		"man_in_tuxedo_tone3": {
			"aliases": [
				"tuxedo_tone3"
			],
			"ascii_arts": [],
			"category": "people",
			"code": "man_in_tuxedo_tone3",
			"code_points": [
				"1f935",
				"1f3fd"
			],
			"keywords": [],
			"name": "man in tuxedo tone 3"
		},
		"man_in_tuxedo_tone4": {
			"aliases": [
				"tuxedo_tone4"
			],
			"ascii_arts": [],
			"category": "people",
			"code": "man_in_tuxedo_tone4",
			"code_points": [
				"1f935",
				"1f3fe"
			],
			"keywords": [],
			"name": "man in tuxedo tone 4"
		},
		"man_in_tuxedo_tone5": {
			"aliases": [
				"tuxedo_tone5"
			],
			"ascii_arts": [],
			"category": "people",
			"code": "man_in_tuxedo_tone5",
			"code_points": [
				"1f935",
				"1f3ff"
			],
			"keywords": [],
			"name": "man in tuxedo tone 5"
		},
		"man_tone1": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "man_tone1",
			"code_points": [
				"1f468",
				"1f3fb"
			],
			"keywords": [
				"classy",
				"dad",
				"father",
				"guy",
				"mustache"
			],
			"name": "man tone 1"
		},
		"man_tone2": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "man_tone2",
			"code_points": [
				"1f468",
				"1f3fc"
			],
			"keywords": [
				"classy",
				"dad",
				"father",
				"guy",
				"mustache"
			],
			"name": "man tone 2"
		},
		"man_tone3": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "man_tone3",
			"code_points": [
				"1f468",
				"1f3fd"
			],
			"keywords": [
				"classy",
				"dad",
				"father",
				"guy",
				"mustache"
			],
			"name": "man tone 3"
		},
		"man_tone4": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "man_tone4",
			"code_points": [
				"1f468",
				"1f3fe"
			],
			"keywords": [
				"classy",
				"dad",
				"father",
				"guy",
				"mustache"
			],
			"name": "man tone 4"
		},
		"man_tone5": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "man_tone5",
			"code_points": [
				"1f468",
				"1f3ff"
			],
			"keywords": [
				"classy",
				"dad",
				"father",
				"guy",
				"mustache"
			],
			"name": "man tone 5"
		},
		"man_with_gua_pi_mao": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "man_with_gua_pi_mao",
			"code_points": [
				"1f472"
			],
			"keywords": [
				"asian",
				"boy",
				"chinese",
				"diversity",
				"hat",
				"male",
				"men",
				"people",
				"qing",
				"skullcap"
			],
			"name": "man with gua pi mao"
		},
		"man_with_gua_pi_mao_tone1": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "man_with_gua_pi_mao_tone1",
			"code_points": [
				"1f472",
				"1f3fb"
			],
			"keywords": [
				"asian",
				"boy",
				"chinese",
				"male",
				"qing",
				"skullcap"
			],
			"name": "man with gua pi mao tone 1"
		},
		"man_with_gua_pi_mao_tone2": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "man_with_gua_pi_mao_tone2",
			"code_points": [
				"1f472",
				"1f3fc"
			],
			"keywords": [
				"asian",
				"boy",
				"chinese",
				"male",
				"qing",
				"skullcap"
			],
			"name": "man with gua pi mao tone 2"
		},
		"man_with_gua_pi_mao_tone3": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "man_with_gua_pi_mao_tone3",
			"code_points": [
				"1f472",
				"1f3fd"
			],
			"keywords": [
				"asian",
				"boy",
				"chinese",
				"male",
				"qing",
				"skullcap"
			],
			"name": "man with gua pi mao tone 3"
		},
		"man_with_gua_pi_mao_tone4": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "man_with_gua_pi_mao_tone4",
			"code_points": [
				"1f472",
				"1f3fe"
			],
			"keywords": [
				"asian",
				"boy",
				"chinese",
				"male",
				"qing",
				"skullcap"
			],
			"name": "man with gua pi mao tone 4"
		},
		"man_with_gua_pi_mao_tone5": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "man_with_gua_pi_mao_tone5",
			"code_points": [
				"1f472",
				"1f3ff"
			],
			"keywords": [
				"asian",
				"boy",
				"chinese",
				"male",
				"qing",
				"skullcap"
			],
			"name": "man with gua pi mao tone 5"
		},
		"man_with_turban": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "man_with_turban",
			"code_points": [
				"1f473"
			],
			"keywords": [
				"diversity",
				"hat",
				"headdress",
				"headwear",
				"india",
				"indian",
				"male",
				"mummy",
				"pagri",
				"peace",
				"people",
				"turban",
				"wisdom"
			],
			"name": "man with turban"
		},
		"man_with_turban_tone1": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "man_with_turban_tone1",
			"code_points": [
				"1f473",
				"1f3fb"
			],
			"keywords": [
				"headdress",
				"headwear",
				"india",
				"indian",
				"male",
				"mummy",
				"pagri",
				"peace",
				"wisdom"
			],
			"name": "man with turban tone 1"
		},
		"man_with_turban_tone2": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "man_with_turban_tone2",
			"code_points": [
				"1f473",
				"1f3fc"
			],
			"keywords": [
				"headdress",
				"headwear",
				"india",
				"indian",
				"male",
				"mummy",
				"pagri",
				"peace",
				"wisdom"
			],
			"name": "man with turban tone 2"
		},
		"man_with_turban_tone3": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "man_with_turban_tone3",
			"code_points": [
				"1f473",
				"1f3fd"
			],
			"keywords": [
				"headdress",
				"headwear",
				"india",
				"indian",
				"male",
				"mummy",
				"pagri",
				"peace",
				"wisdom"
			],
			"name": "man with turban tone 3"
		},
		"man_with_turban_tone4": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "man_with_turban_tone4",
			"code_points": [
				"1f473",
				"1f3fe"
			],
			"keywords": [
				"headdress",
				"headwear",
				"india",
				"indian",
				"male",
				"mummy",
				"pagri",
				"peace",
				"wisdom"
			],
			"name": "man with turban tone 4"
		},
		"man_with_turban_tone5": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "man_with_turban_tone5",
			"code_points": [
				"1f473",
				"1f3ff"
			],
			"keywords": [
				"headdress",
				"headwear",
				"india",
				"indian",
				"male",
				"mummy",
				"pagri",
				"peace",
				"wisdom"
			],
			"name": "man with turban tone 5"
		},
		"mans_shoe": {
			"aliases": [
				"shoe"
			],
			"ascii_arts": [],
			"category": "people",
			"code": "mans_shoe",
			"code_points": [
				"1f45e"
			],
			"keywords": [
				"accessories",
				"fashion",
				"male",
				"shoe"
			],
			"name": "mans shoe"
		},
		"map": {
			"aliases": [
				"world_map"
			],
			"ascii_arts": [],
			"category": "objects",
			"code": "map",
			"code_points": [
				"1f5fa"
			],
			"keywords": [
				"atlas",
				"cartography",
				"earth",
				"map",
				"travel",
				"vacation"
			],
			"name": "world map"
		},
		"maple_leaf": {
			"aliases": [],
			"ascii_arts": [],
			"category": "nature",
			"code": "maple_leaf",
			"code_points": [
				"1f341"
			],
			"keywords": [
				"canada",
				"leaf",
				"maple",
				"nature",
				"plant",
				"syrup",
				"tree",
				"vegetable"
			],
			"name": "maple leaf"
		},
		"martial_arts_uniform": {
			"aliases": [
				"karate_uniform"
			],
			"ascii_arts": [],
			"category": "activity",
			"code": "martial_arts_uniform",
			"code_points": [
				"1f94b"
			],
			"keywords": [],
			"name": "martial arts uniform"
		},
		"mask": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "mask",
			"code_points": [
				"1f637"
			],
			"keywords": [
				"dead",
				"face",
				"flu",
				"health",
				"ill",
				"mask",
				"medical",
				"sick",
				"smiley",
				"virus"
			],
			"name": "face with medical mask"
		},
		"massage": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "massage",
			"code_points": [
				"1f486"
			],
			"keywords": [
				"diversity",
				"female",
				"girl",
				"people",
				"woman",
				"women"
			],
			"name": "face massage"
		},
		"massage_tone1": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "massage_tone1",
			"code_points": [
				"1f486",
				"1f3fb"
			],
			"keywords": [
				"female",
				"girl",
				"woman"
			],
			"name": "face massage tone 1"
		},
		"massage_tone2": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "massage_tone2",
			"code_points": [
				"1f486",
				"1f3fc"
			],
			"keywords": [
				"female",
				"girl",
				"woman"
			],
			"name": "face massage tone 2"
		},
		"massage_tone3": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "massage_tone3",
			"code_points": [
				"1f486",
				"1f3fd"
			],
			"keywords": [
				"female",
				"girl",
				"woman"
			],
			"name": "face massage tone 3"
		},
		"massage_tone4": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "massage_tone4",
			"code_points": [
				"1f486",
				"1f3fe"
			],
			"keywords": [
				"female",
				"girl",
				"woman"
			],
			"name": "face massage tone 4"
		},
		"massage_tone5": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "massage_tone5",
			"code_points": [
				"1f486",
				"1f3ff"
			],
			"keywords": [
				"female",
				"girl",
				"woman"
			],
			"name": "face massage tone 5"
		},
		"meat_on_bone": {
			"aliases": [],
			"ascii_arts": [],
			"category": "food",
			"code": "meat_on_bone",
			"code_points": [
				"1f356"
			],
			"keywords": [
				"animal",
				"bone",
				"cooked",
				"food",
				"good",
				"meat"
			],
			"name": "meat on bone"
		},
		"medal": {
			"aliases": [
				"sports_medal"
			],
			"ascii_arts": [],
			"category": "activity",
			"code": "medal",
			"code_points": [
				"1f3c5"
			],
			"keywords": [
				"achievement",
				"award",
				"ceremony",
				"contest",
				"first",
				"ftw",
				"object",
				"perfect",
				"place",
				"reward",
				"show",
				"sport",
				"win"
			],
			"name": "sports medal"
		},
		"mega": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "mega",
			"code_points": [
				"1f4e3"
			],
			"keywords": [
				"object",
				"sound",
				"speaker",
				"sport",
				"volume"
			],
			"name": "cheering megaphone"
		},
		"melon": {
			"aliases": [],
			"ascii_arts": [],
			"category": "food",
			"code": "melon",
			"code_points": [
				"1f348"
			],
			"keywords": [
				"boobs",
				"cantaloupe",
				"food",
				"fruit",
				"honeydew",
				"melon",
				"nature"
			],
			"name": "melon"
		},
		"menorah": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "menorah",
			"code_points": [
				"1f54e"
			],
			"keywords": [
				"holidays",
				"jew",
				"object",
				"religion",
				"symbol"
			],
			"name": "menorah with nine branches"
		},
		"mens": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "mens",
			"code_points": [
				"1f6b9"
			],
			"keywords": [
				"avatar",
				"bathroom",
				"boy",
				"male",
				"men",
				"restroom",
				"sign",
				"symbol",
				"toilet",
				"wc"
			],
			"name": "mens symbol"
		},
		"metal": {
			"aliases": [
				"sign_of_the_horns"
			],
			"ascii_arts": [],
			"category": "people",
			"code": "metal",
			"code_points": [
				"1f918"
			],
			"keywords": [
				"band",
				"body",
				"boys night",
				"concert",
				"diversity",
				"fingers",
				"hands",
				"hi",
				"parties",
				"rocknroll"
			],
			"name": "sign of the horns"
		},
		"metal_tone1": {
			"aliases": [
				"sign_of_the_horns_tone1"
			],
			"ascii_arts": [],
			"category": "people",
			"code": "metal_tone1",
			"code_points": [
				"1f918",
				"1f3fb"
			],
			"keywords": [
				"band",
				"concert",
				"fingers",
				"rocknroll"
			],
			"name": "sign of the horns tone 1"
		},
		"metal_tone2": {
			"aliases": [
				"sign_of_the_horns_tone2"
			],
			"ascii_arts": [],
			"category": "people",
			"code": "metal_tone2",
			"code_points": [
				"1f918",
				"1f3fc"
			],
			"keywords": [
				"band",
				"concert",
				"fingers",
				"rocknroll"
			],
			"name": "sign of the horns tone 2"
		},
		"metal_tone3": {
			"aliases": [
				"sign_of_the_horns_tone3"
			],
			"ascii_arts": [],
			"category": "people",
			"code": "metal_tone3",
			"code_points": [
				"1f918",
				"1f3fd"
			],
			"keywords": [
				"band",
				"concert",
				"fingers",
				"rocknroll"
			],
			"name": "sign of the horns tone 3"
		},
		"metal_tone4": {
			"aliases": [
				"sign_of_the_horns_tone4"
			],
			"ascii_arts": [],
			"category": "people",
			"code": "metal_tone4",
			"code_points": [
				"1f918",
				"1f3fe"
			],
			"keywords": [
				"band",
				"concert",
				"fingers",
				"rocknroll"
			],
			"name": "sign of the horns tone 4"
		},
		"metal_tone5": {
			"aliases": [
				"sign_of_the_horns_tone5"
			],
			"ascii_arts": [],
			"category": "people",
			"code": "metal_tone5",
			"code_points": [
				"1f918",
				"1f3ff"
			],
			"keywords": [
				"band",
				"concert",
				"fingers",
				"rocknroll"
			],
			"name": "sign of the horns tone 5"
		},
		"metro": {
			"aliases": [],
			"ascii_arts": [],
			"category": "travel",
			"code": "metro",
			"code_points": [
				"1f687"
			],
			"keywords": [
				"blue-square",
				"metro",
				"mrt",
				"subway",
				"train",
				"transportation",
				"travel",
				"tube",
				"underground"
			],
			"name": "metro"
		},
		"microphone": {
			"aliases": [],
			"ascii_arts": [],
			"category": "activity",
			"code": "microphone",
			"code_points": [
				"1f3a4"
			],
			"keywords": [
				"PA",
				"audio",
				"instruments",
				"karaoke",
				"mic",
				"microphone",
				"music",
				"sound",
				"voice"
			],
			"name": "microphone"
		},
		"microphone2": {
			"aliases": [
				"studio_microphone"
			],
			"ascii_arts": [],
			"category": "objects",
			"code": "microphone2",
			"code_points": [
				"1f399"
			],
			"keywords": [
				"audio",
				"electronics",
				"mic",
				"object",
				"recording"
			],
			"name": "studio microphone"
		},
		"microscope": {
			"aliases": [],
			"ascii_arts": [],
			"category": "objects",
			"code": "microscope",
			"code_points": [
				"1f52c"
			],
			"keywords": [
				"experiment",
				"laboratory",
				"object",
				"science",
				"zoomin"
			],
			"name": "microscope"
		},
		"middle_finger": {
			"aliases": [
				"reversed_hand_with_middle_finger_extended"
			],
			"ascii_arts": [],
			"category": "people",
			"code": "middle_finger",
			"code_points": [
				"1f595"
			],
			"keywords": [
				"body",
				"diversity",
				"fu",
				"hands",
				"middle finger"
			],
			"name": "reversed hand with middle finger extended"
		},
		"middle_finger_tone1": {
			"aliases": [
				"reversed_hand_with_middle_finger_extended_tone1"
			],
			"ascii_arts": [],
			"category": "people",
			"code": "middle_finger_tone1",
			"code_points": [
				"1f595",
				"1f3fb"
			],
			"keywords": [
				"fu"
			],
			"name": "reversed hand with middle finger extended tone 1"
		},
		"middle_finger_tone2": {
			"aliases": [
				"reversed_hand_with_middle_finger_extended_tone2"
			],
			"ascii_arts": [],
			"category": "people",
			"code": "middle_finger_tone2",
			"code_points": [
				"1f595",
				"1f3fc"
			],
			"keywords": [
				"fu"
			],
			"name": "reversed hand with middle finger extended tone 2"
		},
		"middle_finger_tone3": {
			"aliases": [
				"reversed_hand_with_middle_finger_extended_tone3"
			],
			"ascii_arts": [],
			"category": "people",
			"code": "middle_finger_tone3",
			"code_points": [
				"1f595",
				"1f3fd"
			],
			"keywords": [
				"fu"
			],
			"name": "reversed hand with middle finger extended tone 3"
		},
		"middle_finger_tone4": {
			"aliases": [
				"reversed_hand_with_middle_finger_extended_tone4"
			],
			"ascii_arts": [],
			"category": "people",
			"code": "middle_finger_tone4",
			"code_points": [
				"1f595",
				"1f3fe"
			],
			"keywords": [
				"fu"
			],
			"name": "reversed hand with middle finger extended tone 4"
		},
		"middle_finger_tone5": {
			"aliases": [
				"reversed_hand_with_middle_finger_extended_tone5"
			],
			"ascii_arts": [],
			"category": "people",
			"code": "middle_finger_tone5",
			"code_points": [
				"1f595",
				"1f3ff"
			],
			"keywords": [
				"fu"
			],
			"name": "reversed hand with middle finger extended tone 5"
		},
		"military_medal": {
			"aliases": [],
			"ascii_arts": [],
			"category": "activity",
			"code": "military_medal",
			"code_points": [
				"1f396"
			],
			"keywords": [
				"acknowledgment",
				"award",
				"heroism",
				"honor",
				"object",
				"purple heart",
				"veteran",
				"win"
			],
			"name": "military medal"
		},
		"milk": {
			"aliases": [
				"glass_of_milk"
			],
			"ascii_arts": [],
			"category": "food",
			"code": "milk",
			"code_points": [
				"1f95b"
			],
			"keywords": [],
			"name": "glass of milk"
		},
		"milky_way": {
			"aliases": [],
			"ascii_arts": [],
			"category": "travel",
			"code": "milky_way",
			"code_points": [
				"1f30c"
			],
			"keywords": [
				"galaxy",
				"milky",
				"photo",
				"places",
				"planets",
				"sky",
				"space",
				"star",
				"stars",
				"travel",
				"vacation"
			],
			"name": "milky way"
		},
		"minibus": {
			"aliases": [],
			"ascii_arts": [],
			"category": "travel",
			"code": "minibus",
			"code_points": [
				"1f690"
			],
			"keywords": [
				"bus",
				"car",
				"city",
				"transport",
				"transportation",
				"vehicle"
			],
			"name": "minibus"
		},
		"minidisc": {
			"aliases": [],
			"ascii_arts": [],
			"category": "objects",
			"code": "minidisc",
			"code_points": [
				"1f4bd"
			],
			"keywords": [
				"data",
				"disc",
				"disk",
				"electronics",
				"record",
				"technology"
			],
			"name": "minidisc"
		},
		"mobile_phone_off": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "mobile_phone_off",
			"code_points": [
				"1f4f4"
			],
			"keywords": [
				"mute",
				"symbol"
			],
			"name": "mobile phone off"
		},
		"money_mouth": {
			"aliases": [
				"money_mouth_face"
			],
			"ascii_arts": [],
			"category": "people",
			"code": "money_mouth",
			"code_points": [
				"1f911"
			],
			"keywords": [
				"boys night",
				"emotion",
				"money",
				"smiley",
				"win"
			],
			"name": "money-mouth face"
		},
		"money_with_wings": {
			"aliases": [],
			"ascii_arts": [],
			"category": "objects",
			"code": "money_with_wings",
			"code_points": [
				"1f4b8"
			],
			"keywords": [
				"bills",
				"blown",
				"boys night",
				"burned",
				"cash",
				"dollar",
				"easy",
				"gift",
				"lost",
				"money",
				"payment",
				"spend",
				"wings",
				"work"
			],
			"name": "money with wings"
		},
		"moneybag": {
			"aliases": [],
			"ascii_arts": [],
			"category": "objects",
			"code": "moneybag",
			"code_points": [
				"1f4b0"
			],
			"keywords": [
				"award",
				"bag",
				"coins",
				"dollar",
				"money",
				"payment"
			],
			"name": "money bag"
		},
		"monkey": {
			"aliases": [],
			"ascii_arts": [],
			"category": "nature",
			"code": "monkey",
			"code_points": [
				"1f412"
			],
			"keywords": [
				"animal",
				"banana",
				"monkey",
				"nature",
				"primate",
				"silly",
				"wildlife"
			],
			"name": "monkey"
		},
		"monkey_face": {
			"aliases": [],
			"ascii_arts": [],
			"category": "nature",
			"code": "monkey_face",
			"code_points": [
				"1f435"
			],
			"keywords": [
				"animal",
				"nature"
			],
			"name": "monkey face"
		},
		"monorail": {
			"aliases": [],
			"ascii_arts": [],
			"category": "travel",
			"code": "monorail",
			"code_points": [
				"1f69d"
			],
			"keywords": [
				"mono",
				"rail",
				"train",
				"transport",
				"transportation",
				"travel",
				"vacation",
				"vehicle"
			],
			"name": "monorail"
		},
		"mortar_board": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "mortar_board",
			"code_points": [
				"1f393"
			],
			"keywords": [
				"academic",
				"accessories",
				"cap",
				"ceremony",
				"college",
				"degree",
				"education",
				"graduation",
				"hat",
				"mortarboard",
				"office",
				"school",
				"square",
				"tassel",
				"university"
			],
			"name": "graduation cap"
		},
		"mosque": {
			"aliases": [],
			"ascii_arts": [],
			"category": "travel",
			"code": "mosque",
			"code_points": [
				"1f54c"
			],
			"keywords": [
				"building",
				"condolence",
				"places",
				"religion",
				"vacation"
			],
			"name": "mosque"
		},
		"motor_scooter": {
			"aliases": [
				"motorbike"
			],
			"ascii_arts": [],
			"category": "travel",
			"code": "motor_scooter",
			"code_points": [
				"1f6f5"
			],
			"keywords": [
				"moped"
			],
			"name": "motor scooter"
		},
		"motorboat": {
			"aliases": [],
			"ascii_arts": [],
			"category": "travel",
			"code": "motorboat",
			"code_points": [
				"1f6e5"
			],
			"keywords": [
				"boat",
				"powerboat",
				"speedboat",
				"transportation",
				"travel",
				"vehicle"
			],
			"name": "motorboat"
		},
		"motorcycle": {
			"aliases": [
				"racing_motorcycle"
			],
			"ascii_arts": [],
			"category": "travel",
			"code": "motorcycle",
			"code_points": [
				"1f3cd"
			],
			"keywords": [
				"bike",
				"speed",
				"transportation",
				"travel"
			],
			"name": "racing motorcycle"
		},
		"motorway": {
			"aliases": [],
			"ascii_arts": [],
			"category": "travel",
			"code": "motorway",
			"code_points": [
				"1f6e3"
			],
			"keywords": [
				"camp",
				"freeway",
				"highway",
				"road",
				"traffic",
				"travel",
				"vacation"
			],
			"name": "motorway"
		},
		"mount_fuji": {
			"aliases": [],
			"ascii_arts": [],
			"category": "travel",
			"code": "mount_fuji",
			"code_points": [
				"1f5fb"
			],
			"keywords": [
				"camp",
				"cold",
				"japan",
				"mountain",
				"nature",
				"photo",
				"places",
				"travel",
				"vacation"
			],
			"name": "mount fuji"
		},
		"mountain": {
			"aliases": [],
			"ascii_arts": [],
			"category": "travel",
			"code": "mountain",
			"code_points": [
				"26f0"
			],
			"keywords": [
				"camp",
				"place",
				"places",
				"travel",
				"vacation"
			],
			"name": "mountain"
		},
		"mountain_bicyclist": {
			"aliases": [],
			"ascii_arts": [],
			"category": "activity",
			"code": "mountain_bicyclist",
			"code_points": [
				"1f6b5"
			],
			"keywords": [
				"bicycle",
				"bicyclist",
				"bike",
				"diversity",
				"human",
				"men",
				"mountain",
				"pedal",
				"sport",
				"sports",
				"transportation"
			],
			"name": "mountain bicyclist"
		},
		"mountain_bicyclist_tone1": {
			"aliases": [],
			"ascii_arts": [],
			"category": "activity",
			"code": "mountain_bicyclist_tone1",
			"code_points": [
				"1f6b5",
				"1f3fb"
			],
			"keywords": [
				"bicycle",
				"bike",
				"pedal",
				"sport",
				"transportation"
			],
			"name": "mountain bicyclist tone 1"
		},
		"mountain_bicyclist_tone2": {
			"aliases": [],
			"ascii_arts": [],
			"category": "activity",
			"code": "mountain_bicyclist_tone2",
			"code_points": [
				"1f6b5",
				"1f3fc"
			],
			"keywords": [
				"bicycle",
				"bike",
				"pedal",
				"sport",
				"transportation"
			],
			"name": "mountain bicyclist tone 2"
		},
		"mountain_bicyclist_tone3": {
			"aliases": [],
			"ascii_arts": [],
			"category": "activity",
			"code": "mountain_bicyclist_tone3",
			"code_points": [
				"1f6b5",
				"1f3fd"
			],
			"keywords": [
				"bicycle",
				"bike",
				"pedal",
				"sport",
				"transportation"
			],
			"name": "mountain bicyclist tone 3"
		},
		"mountain_bicyclist_tone4": {
			"aliases": [],
			"ascii_arts": [],
			"category": "activity",
			"code": "mountain_bicyclist_tone4",
			"code_points": [
				"1f6b5",
				"1f3fe"
			],
			"keywords": [
				"bicycle",
				"bike",
				"pedal",
				"sport",
				"transportation"
			],
			"name": "mountain bicyclist tone 4"
		},
		"mountain_bicyclist_tone5": {
			"aliases": [],
			"ascii_arts": [],
			"category": "activity",
			"code": "mountain_bicyclist_tone5",
			"code_points": [
				"1f6b5",
				"1f3ff"
			],
			"keywords": [
				"bicycle",
				"bike",
				"pedal",
				"sport",
				"transportation"
			],
			"name": "mountain bicyclist tone 5"
		},
		"mountain_cableway": {
			"aliases": [],
			"ascii_arts": [],
			"category": "travel",
			"code": "mountain_cableway",
			"code_points": [
				"1f6a0"
			],
			"keywords": [
				"cable",
				"mountain",
				"rail",
				"railway",
				"train",
				"transportation",
				"travel",
				"vehicle"
			],
			"name": "mountain cableway"
		},
		"mountain_railway": {
			"aliases": [],
			"ascii_arts": [],
			"category": "travel",
			"code": "mountain_railway",
			"code_points": [
				"1f69e"
			],
			"keywords": [
				"mountain",
				"rail",
				"railway",
				"train",
				"transport",
				"transportation",
				"travel"
			],
			"name": "mountain railway"
		},
		"mountain_snow": {
			"aliases": [
				"snow_capped_mountain"
			],
			"ascii_arts": [],
			"category": "travel",
			"code": "mountain_snow",
			"code_points": [
				"1f3d4"
			],
			"keywords": [
				"camp",
				"cold",
				"elevation",
				"hiking",
				"peak",
				"places",
				"travel",
				"vacation"
			],
			"name": "snow capped mountain"
		},
		"mouse": {
			"aliases": [],
			"ascii_arts": [],
			"category": "nature",
			"code": "mouse",
			"code_points": [
				"1f42d"
			],
			"keywords": [
				"animal",
				"nature"
			],
			"name": "mouse face"
		},
		"mouse2": {
			"aliases": [],
			"ascii_arts": [],
			"category": "nature",
			"code": "mouse2",
			"code_points": [
				"1f401"
			],
			"keywords": [
				"animal",
				"mice",
				"mouse",
				"nature",
				"rodent"
			],
			"name": "mouse"
		},
		"mouse_three_button": {
			"aliases": [
				"three_button_mouse"
			],
			"ascii_arts": [],
			"category": "objects",
			"code": "mouse_three_button",
			"code_points": [
				"1f5b1"
			],
			"keywords": [
				"3",
				"computer",
				"electronics",
				"game",
				"object",
				"office",
				"work"
			],
			"name": "three button mouse"
		},
		"movie_camera": {
			"aliases": [],
			"ascii_arts": [],
			"category": "objects",
			"code": "movie_camera",
			"code_points": [
				"1f3a5"
			],
			"keywords": [
				"camcorder",
				"camera",
				"film",
				"motion",
				"movie",
				"object",
				"picture",
				"record",
				"video"
			],
			"name": "movie camera"
		},
		"moyai": {
			"aliases": [],
			"ascii_arts": [],
			"category": "objects",
			"code": "moyai",
			"code_points": [
				"1f5ff"
			],
			"keywords": [
				"island",
				"stone",
				"travel",
				"vacation"
			],
			"name": "moyai"
		},
		"mrs_claus": {
			"aliases": [
				"mother_christmas"
			],
			"ascii_arts": [],
			"category": "people",
			"code": "mrs_claus",
			"code_points": [
				"1f936"
			],
			"keywords": [],
			"name": "mother christmas"
		},
		"mrs_claus_tone1": {
			"aliases": [
				"mother_christmas_tone1"
			],
			"ascii_arts": [],
			"category": "people",
			"code": "mrs_claus_tone1",
			"code_points": [
				"1f936",
				"1f3fb"
			],
			"keywords": [],
			"name": "mother christmas tone 1"
		},
		"mrs_claus_tone2": {
			"aliases": [
				"mother_christmas_tone2"
			],
			"ascii_arts": [],
			"category": "people",
			"code": "mrs_claus_tone2",
			"code_points": [
				"1f936",
				"1f3fc"
			],
			"keywords": [],
			"name": "mother christmas tone 2"
		},
		"mrs_claus_tone3": {
			"aliases": [
				"mother_christmas_tone3"
			],
			"ascii_arts": [],
			"category": "people",
			"code": "mrs_claus_tone3",
			"code_points": [
				"1f936",
				"1f3fd"
			],
			"keywords": [],
			"name": "mother christmas tone 3"
		},
		"mrs_claus_tone4": {
			"aliases": [
				"mother_christmas_tone4"
			],
			"ascii_arts": [],
			"category": "people",
			"code": "mrs_claus_tone4",
			"code_points": [
				"1f936",
				"1f3fe"
			],
			"keywords": [],
			"name": "mother christmas tone 4"
		},
		"mrs_claus_tone5": {
			"aliases": [
				"mother_christmas_tone5"
			],
			"ascii_arts": [],
			"category": "people",
			"code": "mrs_claus_tone5",
			"code_points": [
				"1f936",
				"1f3ff"
			],
			"keywords": [],
			"name": "mother christmas tone 5"
		},
		"muscle": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "muscle",
			"code_points": [
				"1f4aa"
			],
			"keywords": [
				"arm",
				"bicep",
				"body",
				"boys night",
				"diversity",
				"feminist",
				"flex",
				"hand",
				"hands",
				"muscle",
				"strong",
				"win",
				"workout"
			],
			"name": "flexed biceps"
		},
		"muscle_tone1": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "muscle_tone1",
			"code_points": [
				"1f4aa",
				"1f3fb"
			],
			"keywords": [
				"arm",
				"bicep",
				"flex",
				"hand",
				"muscle",
				"strong"
			],
			"name": "flexed biceps tone 1"
		},
		"muscle_tone2": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "muscle_tone2",
			"code_points": [
				"1f4aa",
				"1f3fc"
			],
			"keywords": [
				"arm",
				"bicep",
				"flex",
				"hand",
				"muscle",
				"strong"
			],
			"name": "flexed biceps tone 2"
		},
		"muscle_tone3": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "muscle_tone3",
			"code_points": [
				"1f4aa",
				"1f3fd"
			],
			"keywords": [
				"arm",
				"bicep",
				"flex",
				"hand",
				"muscle",
				"strong"
			],
			"name": "flexed biceps tone 3"
		},
		"muscle_tone4": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "muscle_tone4",
			"code_points": [
				"1f4aa",
				"1f3fe"
			],
			"keywords": [
				"arm",
				"bicep",
				"flex",
				"hand",
				"muscle",
				"strong"
			],
			"name": "flexed biceps tone 4"
		},
		"muscle_tone5": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "muscle_tone5",
			"code_points": [
				"1f4aa",
				"1f3ff"
			],
			"keywords": [
				"arm",
				"bicep",
				"flex",
				"hand",
				"muscle",
				"strong"
			],
			"name": "flexed biceps tone 5"
		},
		"mushroom": {
			"aliases": [],
			"ascii_arts": [],
			"category": "nature",
			"code": "mushroom",
			"code_points": [
				"1f344"
			],
			"keywords": [
				"drugs",
				"food",
				"fungi",
				"fungus",
				"mushroom",
				"nature",
				"plant",
				"vegetable"
			],
			"name": "mushroom"
		},
		"musical_keyboard": {
			"aliases": [],
			"ascii_arts": [],
			"category": "activity",
			"code": "musical_keyboard",
			"code_points": [
				"1f3b9"
			],
			"keywords": [
				"electric",
				"instrument",
				"instruments",
				"keyboard",
				"music",
				"organ",
				"piano"
			],
			"name": "musical keyboard"
		},
		"musical_note": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "musical_note",
			"code_points": [
				"1f3b5"
			],
			"keywords": [
				"instruments",
				"music",
				"musical",
				"note",
				"score",
				"sound",
				"symbol"
			],
			"name": "musical note"
		},
		"musical_score": {
			"aliases": [],
			"ascii_arts": [],
			"category": "activity",
			"code": "musical_score",
			"code_points": [
				"1f3bc"
			],
			"keywords": [
				"clef",
				"g-clef",
				"instruments",
				"music",
				"musical",
				"score",
				"staff",
				"stave",
				"treble"
			],
			"name": "musical score"
		},
		"mute": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "mute",
			"code_points": [
				"1f507"
			],
			"keywords": [
				"alarm",
				"sound",
				"symbol",
				"volume"
			],
			"name": "speaker with cancellation stroke"
		},
		"nail_care": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "nail_care",
			"code_points": [
				"1f485"
			],
			"keywords": [
				"beauty",
				"body",
				"diversity",
				"girls night",
				"hands",
				"manicure",
				"nailpolish",
				"women"
			],
			"name": "nail polish"
		},
		"nail_care_tone1": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "nail_care_tone1",
			"code_points": [
				"1f485",
				"1f3fb"
			],
			"keywords": [
				"beauty",
				"manicure"
			],
			"name": "nail polish tone 1"
		},
		"nail_care_tone2": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "nail_care_tone2",
			"code_points": [
				"1f485",
				"1f3fc"
			],
			"keywords": [
				"beauty",
				"manicure"
			],
			"name": "nail polish tone 2"
		},
		"nail_care_tone3": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "nail_care_tone3",
			"code_points": [
				"1f485",
				"1f3fd"
			],
			"keywords": [
				"beauty",
				"manicure"
			],
			"name": "nail polish tone 3"
		},
		"nail_care_tone4": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "nail_care_tone4",
			"code_points": [
				"1f485",
				"1f3fe"
			],
			"keywords": [
				"beauty",
				"manicure"
			],
			"name": "nail polish tone 4"
		},
		"nail_care_tone5": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "nail_care_tone5",
			"code_points": [
				"1f485",
				"1f3ff"
			],
			"keywords": [
				"beauty",
				"manicure"
			],
			"name": "nail polish tone 5"
		},
		"name_badge": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "name_badge",
			"code_points": [
				"1f4db"
			],
			"keywords": [
				"fire",
				"forbid",
				"work"
			],
			"name": "name badge"
		},
		"nauseated_face": {
			"aliases": [
				"sick"
			],
			"ascii_arts": [],
			"category": "people",
			"code": "nauseated_face",
			"code_points": [
				"1f922"
			],
			"keywords": [],
			"name": "nauseated face"
		},
		"necktie": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "necktie",
			"code_points": [
				"1f454"
			],
			"keywords": [
				"cloth",
				"fashion",
				"formal",
				"shirt",
				"suitup"
			],
			"name": "necktie"
		},
		"negative_squared_cross_mark": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "negative_squared_cross_mark",
			"code_points": [
				"274e"
			],
			"keywords": [
				"deny",
				"green-square",
				"no",
				"symbol",
				"x"
			],
			"name": "negative squared cross mark"
		},
		"nerd": {
			"aliases": [
				"nerd_face"
			],
			"ascii_arts": [],
			"category": "people",
			"code": "nerd",
			"code_points": [
				"1f913"
			],
			"keywords": [
				"glasses",
				"smiley"
			],
			"name": "nerd face"
		},
		"neutral_face": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "neutral_face",
			"code_points": [
				"1f610"
			],
			"keywords": [
				"blank",
				"emotion",
				"face",
				"impartial",
				"indifference",
				"mad",
				"neutral",
				"objective",
				"shrug",
				"smiley"
			],
			"name": "neutral face"
		},
		"new": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "new",
			"code_points": [
				"1f195"
			],
			"keywords": [
				"blue-square",
				"symbol"
			],
			"name": "squared new"
		},
		"new_moon": {
			"aliases": [],
			"ascii_arts": [],
			"category": "nature",
			"code": "new_moon",
			"code_points": [
				"1f311"
			],
			"keywords": [
				"cheese",
				"moon",
				"nature",
				"new",
				"night",
				"phase",
				"sky",
				"space"
			],
			"name": "new moon symbol"
		},
		"new_moon_with_face": {
			"aliases": [],
			"ascii_arts": [],
			"category": "nature",
			"code": "new_moon_with_face",
			"code_points": [
				"1f31a"
			],
			"keywords": [
				"anthropomorphic",
				"cheese",
				"face",
				"goodnight",
				"moon",
				"nature",
				"new",
				"night",
				"phase",
				"sky",
				"space"
			],
			"name": "new moon with face"
		},
		"newspaper": {
			"aliases": [],
			"ascii_arts": [],
			"category": "objects",
			"code": "newspaper",
			"code_points": [
				"1f4f0"
			],
			"keywords": [
				"headline",
				"office",
				"press",
				"write"
			],
			"name": "newspaper"
		},
		"newspaper2": {
			"aliases": [
				"rolled_up_newspaper"
			],
			"ascii_arts": [],
			"category": "objects",
			"code": "newspaper2",
			"code_points": [
				"1f5de"
			],
			"keywords": [
				"headline",
				"office",
				"press",
				"write"
			],
			"name": "rolled-up newspaper"
		},
		"ng": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "ng",
			"code_points": [
				"1f196"
			],
			"keywords": [
				"blue-square",
				"no good",
				"symbol",
				"word"
			],
			"name": "squared ng"
		},
		"night_with_stars": {
			"aliases": [],
			"ascii_arts": [],
			"category": "travel",
			"code": "night_with_stars",
			"code_points": [
				"1f303"
			],
			"keywords": [
				"building",
				"cloudless",
				"evening",
				"goodnight",
				"night",
				"places",
				"planets",
				"sky",
				"space",
				"star",
				"vacation"
			],
			"name": "night with stars"
		},
		"nine": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "nine",
			"code_points": [
				"39",
				"fe0f",
				"20e3"
			],
			"keywords": [
				"9",
				"blue-square",
				"math",
				"number",
				"numbers",
				"symbol"
			],
			"name": "keycap digit nine"
		},
		"no_bell": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "no_bell",
			"code_points": [
				"1f515"
			],
			"keywords": [
				"alarm",
				"mute",
				"sound",
				"symbol",
				"volume"
			],
			"name": "bell with cancellation stroke"
		},
		"no_bicycles": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "no_bicycles",
			"code_points": [
				"1f6b3"
			],
			"keywords": [
				"bicycle",
				"bike pedal",
				"cyclist",
				"no",
				"prohibited",
				"symbol"
			],
			"name": "no bicycles"
		},
		"no_entry": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "no_entry",
			"code_points": [
				"26d4",
				"fe0f"
			],
			"keywords": [
				"bad",
				"circle",
				"denied",
				"limit",
				"privacy",
				"security",
				"stop",
				"symbol"
			],
			"name": "no entry"
		},
		"no_entry_sign": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "no_entry_sign",
			"code_points": [
				"1f6ab"
			],
			"keywords": [
				"circle",
				"denied",
				"disallow",
				"entry",
				"forbid",
				"limit",
				"no",
				"stop",
				"symbol"
			],
			"name": "no entry sign"
		},
		"no_good": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "no_good",
			"code_points": [
				"1f645"
			],
			"keywords": [
				"diversity",
				"don&#039;t",
				"female",
				"girl",
				"girls night",
				"no",
				"nope",
				"not",
				"people",
				"stop",
				"woman",
				"women"
			],
			"name": "face with no good gesture"
		},
		"no_good_tone1": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "no_good_tone1",
			"code_points": [
				"1f645",
				"1f3fb"
			],
			"keywords": [
				"don't",
				"female",
				"forbidden",
				"girl",
				"hand",
				"nope",
				"not",
				"person",
				"prohibited",
				"stop",
				"woman"
			],
			"name": "face with no good gesture tone 1"
		},
		"no_good_tone2": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "no_good_tone2",
			"code_points": [
				"1f645",
				"1f3fc"
			],
			"keywords": [
				"don't",
				"female",
				"forbidden",
				"girl",
				"hand",
				"nope",
				"not",
				"person",
				"prohibited",
				"stop",
				"woman"
			],
			"name": "face with no good gesture tone 2"
		},
		"no_good_tone3": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "no_good_tone3",
			"code_points": [
				"1f645",
				"1f3fd"
			],
			"keywords": [
				"don't",
				"female",
				"forbidden",
				"girl",
				"hand",
				"nope",
				"not",
				"person",
				"prohibited",
				"stop",
				"woman"
			],
			"name": "face with no good gesture tone 3"
		},
		"no_good_tone4": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "no_good_tone4",
			"code_points": [
				"1f645",
				"1f3fe"
			],
			"keywords": [
				"don't",
				"female",
				"forbidden",
				"girl",
				"hand",
				"nope",
				"not",
				"person",
				"prohibited",
				"stop",
				"woman"
			],
			"name": "face with no good gesture tone 4"
		},
		"no_good_tone5": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "no_good_tone5",
			"code_points": [
				"1f645",
				"1f3ff"
			],
			"keywords": [
				"don't",
				"female",
				"forbidden",
				"girl",
				"hand",
				"nope",
				"not",
				"person",
				"prohibited",
				"stop",
				"woman"
			],
			"name": "face with no good gesture tone 5"
		},
		"no_mobile_phones": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "no_mobile_phones",
			"code_points": [
				"1f4f5"
			],
			"keywords": [
				"iphone",
				"mute",
				"phone",
				"symbol"
			],
			"name": "no mobile phones"
		},
		"no_mouth": {
			"aliases": [],
			"ascii_arts": [
				":#",
				":-#",
				":-X",
				":-x",
				":X",
				":x",
				"=#",
				"=X",
				"=x"
			],
			"category": "people",
			"code": "no_mouth",
			"code_points": [
				"1f636"
			],
			"keywords": [
				"emotion",
				"face",
				"hellokitty",
				"mad",
				"mouth",
				"neutral",
				"silent",
				"smiley",
				"vapid"
			],
			"name": "face without mouth"
		},
		"no_pedestrians": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "no_pedestrians",
			"code_points": [
				"1f6b7"
			],
			"keywords": [
				"crossing",
				"feet",
				"foot",
				"no",
				"pedestrian",
				"rules",
				"stride",
				"stroll",
				"symbol",
				"walk",
				"walking"
			],
			"name": "no pedestrians"
		},
		"no_smoking": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "no_smoking",
			"code_points": [
				"1f6ad"
			],
			"keywords": [
				"cancer",
				"cigarette",
				"inhale",
				"lungs",
				"nicotine",
				"no",
				"smoke",
				"smoking",
				"symbol",
				"tar"
			],
			"name": "no smoking symbol"
		},
		"non-potable_water": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "non-potable_water",
			"code_points": [
				"1f6b1"
			],
			"keywords": [
				"aqua",
				"dirty",
				"drink",
				"faucet",
				"gross",
				"h20",
				"non-potable",
				"not drinkable",
				"symbol",
				"tap",
				"water"
			],
			"name": "non-potable water symbol"
		},
		"nose": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "nose",
			"code_points": [
				"1f443"
			],
			"keywords": [
				"body",
				"diversity",
				"smell",
				"sniff"
			],
			"name": "nose"
		},
		"nose_tone1": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "nose_tone1",
			"code_points": [
				"1f443",
				"1f3fb"
			],
			"keywords": [
				"smell",
				"sniff"
			],
			"name": "nose tone 1"
		},
		"nose_tone2": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "nose_tone2",
			"code_points": [
				"1f443",
				"1f3fc"
			],
			"keywords": [
				"smell",
				"sniff"
			],
			"name": "nose tone 2"
		},
		"nose_tone3": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "nose_tone3",
			"code_points": [
				"1f443",
				"1f3fd"
			],
			"keywords": [
				"smell",
				"sniff"
			],
			"name": "nose tone 3"
		},
		"nose_tone4": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "nose_tone4",
			"code_points": [
				"1f443",
				"1f3fe"
			],
			"keywords": [
				"smell",
				"sniff"
			],
			"name": "nose tone 4"
		},
		"nose_tone5": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "nose_tone5",
			"code_points": [
				"1f443",
				"1f3ff"
			],
			"keywords": [
				"smell",
				"sniff"
			],
			"name": "nose tone 5"
		},
		"notebook": {
			"aliases": [],
			"ascii_arts": [],
			"category": "objects",
			"code": "notebook",
			"code_points": [
				"1f4d3"
			],
			"keywords": [
				"notes",
				"object",
				"office",
				"paper",
				"record",
				"stationery",
				"write"
			],
			"name": "notebook"
		},
		"notebook_with_decorative_cover": {
			"aliases": [],
			"ascii_arts": [],
			"category": "objects",
			"code": "notebook_with_decorative_cover",
			"code_points": [
				"1f4d4"
			],
			"keywords": [
				"classroom",
				"notes",
				"object",
				"office",
				"paper",
				"record",
				"write"
			],
			"name": "notebook with decorative cover"
		},
		"notepad_spiral": {
			"aliases": [
				"spiral_note_pad"
			],
			"ascii_arts": [],
			"category": "objects",
			"code": "notepad_spiral",
			"code_points": [
				"1f5d2"
			],
			"keywords": [
				"office",
				"stationery",
				"work",
				"write"
			],
			"name": "spiral note pad"
		},
		"notes": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "notes",
			"code_points": [
				"1f3b6"
			],
			"keywords": [
				"instruments",
				"melody",
				"music",
				"musical",
				"notes",
				"score",
				"sound",
				"symbol"
			],
			"name": "multiple musical notes"
		},
		"nut_and_bolt": {
			"aliases": [],
			"ascii_arts": [],
			"category": "objects",
			"code": "nut_and_bolt",
			"code_points": [
				"1f529"
			],
			"keywords": [
				"handy",
				"nutcase",
				"object",
				"tool",
				"tools"
			],
			"name": "nut and bolt"
		},
		"o": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "o",
			"code_points": [
				"2b55",
				"fe0f"
			],
			"keywords": [
				"circle",
				"round",
				"symbol"
			],
			"name": "heavy large circle"
		},
		"o2": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "o2",
			"code_points": [
				"1f17e"
			],
			"keywords": [
				"alphabet",
				"letter",
				"red-square",
				"symbol"
			],
			"name": "negative squared latin capital letter o"
		},
		"ocean": {
			"aliases": [],
			"ascii_arts": [],
			"category": "nature",
			"code": "ocean",
			"code_points": [
				"1f30a"
			],
			"keywords": [
				"beach",
				"boat",
				"ocean",
				"sea",
				"surf",
				"swim",
				"tide",
				"tropical",
				"water",
				"wave",
				"weather"
			],
			"name": "water wave"
		},
		"octagonal_sign": {
			"aliases": [
				"stop_sign"
			],
			"ascii_arts": [],
			"category": "symbols",
			"code": "octagonal_sign",
			"code_points": [
				"1f6d1"
			],
			"keywords": [],
			"name": "octagonal sign"
		},
		"octopus": {
			"aliases": [],
			"ascii_arts": [],
			"category": "nature",
			"code": "octopus",
			"code_points": [
				"1f419"
			],
			"keywords": [
				"animal",
				"creature",
				"ocean",
				"sea",
				"wildlife"
			],
			"name": "octopus"
		},
		"oden": {
			"aliases": [],
			"ascii_arts": [],
			"category": "food",
			"code": "oden",
			"code_points": [
				"1f362"
			],
			"keywords": [
				"casserole",
				"food",
				"japanese",
				"oden",
				"seafood",
				"stew"
			],
			"name": "oden"
		},
		"office": {
			"aliases": [],
			"ascii_arts": [],
			"category": "travel",
			"code": "office",
			"code_points": [
				"1f3e2"
			],
			"keywords": [
				"building",
				"bureau",
				"places",
				"work"
			],
			"name": "office building"
		},
		"oil": {
			"aliases": [
				"oil_drum"
			],
			"ascii_arts": [],
			"category": "objects",
			"code": "oil",
			"code_points": [
				"1f6e2"
			],
			"keywords": [
				"object",
				"petroleum"
			],
			"name": "oil drum"
		},
		"ok": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "ok",
			"code_points": [
				"1f197"
			],
			"keywords": [
				"agree",
				"blue-square",
				"good",
				"symbol",
				"yes"
			],
			"name": "squared ok"
		},
		"ok_hand": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "ok_hand",
			"code_points": [
				"1f44c"
			],
			"keywords": [
				"420",
				"beautiful",
				"body",
				"diversity",
				"fingers",
				"good",
				"hands",
				"hi",
				"joint",
				"limbs",
				"marijuana",
				"ok",
				"okay",
				"perfect",
				"pot",
				"smoke",
				"smoking"
			],
			"name": "ok hand sign"
		},
		"ok_hand_tone1": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "ok_hand_tone1",
			"code_points": [
				"1f44c",
				"1f3fb"
			],
			"keywords": [
				"420",
				"fingers",
				"joint",
				"limbs",
				"marijuana",
				"okay",
				"perfect",
				"pot",
				"smoke",
				"smoking"
			],
			"name": "ok hand sign tone 1"
		},
		"ok_hand_tone2": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "ok_hand_tone2",
			"code_points": [
				"1f44c",
				"1f3fc"
			],
			"keywords": [
				"420",
				"fingers",
				"joint",
				"limbs",
				"marijuana",
				"okay",
				"perfect",
				"pot",
				"smoke",
				"smoking"
			],
			"name": "ok hand sign tone 2"
		},
		"ok_hand_tone3": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "ok_hand_tone3",
			"code_points": [
				"1f44c",
				"1f3fd"
			],
			"keywords": [
				"420",
				"fingers",
				"joint",
				"limbs",
				"marijuana",
				"okay",
				"perfect",
				"pot",
				"smoke",
				"smoking"
			],
			"name": "ok hand sign tone 3"
		},
		"ok_hand_tone4": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "ok_hand_tone4",
			"code_points": [
				"1f44c",
				"1f3fe"
			],
			"keywords": [
				"420",
				"fingers",
				"joint",
				"limbs",
				"marijuana",
				"okay",
				"perfect",
				"pot",
				"smoke",
				"smoking"
			],
			"name": "ok hand sign tone 4"
		},
		"ok_hand_tone5": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "ok_hand_tone5",
			"code_points": [
				"1f44c",
				"1f3ff"
			],
			"keywords": [
				"420",
				"fingers",
				"joint",
				"limbs",
				"marijuana",
				"okay",
				"perfect",
				"pot",
				"smoke",
				"smoking"
			],
			"name": "ok hand sign tone 5"
		},
		"ok_woman": {
			"aliases": [],
			"ascii_arts": [
				"*\\0/*",
				"*\\O/*",
				"\\0/",
				"\\O/"
			],
			"category": "people",
			"code": "ok_woman",
			"code_points": [
				"1f646"
			],
			"keywords": [
				"accept",
				"diversity",
				"female",
				"girl",
				"human",
				"ok",
				"okay",
				"people",
				"pink",
				"women",
				"yes"
			],
			"name": "face with ok gesture"
		},
		"ok_woman_tone1": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "ok_woman_tone1",
			"code_points": [
				"1f646",
				"1f3fb"
			],
			"keywords": [
				"accept",
				"female",
				"girl",
				"human",
				"okay",
				"pink",
				"women",
				"yes"
			],
			"name": "face with ok gesture tone1"
		},
		"ok_woman_tone2": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "ok_woman_tone2",
			"code_points": [
				"1f646",
				"1f3fc"
			],
			"keywords": [
				"accept",
				"female",
				"girl",
				"human",
				"okay",
				"pink",
				"women",
				"yes"
			],
			"name": "face with ok gesture tone2"
		},
		"ok_woman_tone3": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "ok_woman_tone3",
			"code_points": [
				"1f646",
				"1f3fd"
			],
			"keywords": [
				"accept",
				"female",
				"girl",
				"human",
				"okay",
				"pink",
				"women",
				"yes"
			],
			"name": "face with ok gesture tone3"
		},
		"ok_woman_tone4": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "ok_woman_tone4",
			"code_points": [
				"1f646",
				"1f3fe"
			],
			"keywords": [
				"accept",
				"female",
				"girl",
				"human",
				"okay",
				"pink",
				"women",
				"yes"
			],
			"name": "face with ok gesture tone4"
		},
		"ok_woman_tone5": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "ok_woman_tone5",
			"code_points": [
				"1f646",
				"1f3ff"
			],
			"keywords": [
				"accept",
				"female",
				"girl",
				"human",
				"okay",
				"pink",
				"women",
				"yes"
			],
			"name": "face with ok gesture tone5"
		},
		"older_man": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "older_man",
			"code_points": [
				"1f474"
			],
			"keywords": [
				"diversity",
				"human",
				"male",
				"men",
				"old people",
				"people"
			],
			"name": "older man"
		},
		"older_man_tone1": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "older_man_tone1",
			"code_points": [
				"1f474",
				"1f3fb"
			],
			"keywords": [
				"grandfather",
				"grandpa",
				"male",
				"men"
			],
			"name": "older man tone 1"
		},
		"older_man_tone2": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "older_man_tone2",
			"code_points": [
				"1f474",
				"1f3fc"
			],
			"keywords": [
				"grandfather",
				"grandpa",
				"male",
				"men"
			],
			"name": "older man tone 2"
		},
		"older_man_tone3": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "older_man_tone3",
			"code_points": [
				"1f474",
				"1f3fd"
			],
			"keywords": [
				"grandfather",
				"grandpa",
				"male",
				"men"
			],
			"name": "older man tone 3"
		},
		"older_man_tone4": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "older_man_tone4",
			"code_points": [
				"1f474",
				"1f3fe"
			],
			"keywords": [
				"grandfather",
				"grandpa",
				"male",
				"men"
			],
			"name": "older man tone 4"
		},
		"older_man_tone5": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "older_man_tone5",
			"code_points": [
				"1f474",
				"1f3ff"
			],
			"keywords": [
				"grandfather",
				"grandpa",
				"male",
				"men"
			],
			"name": "older man tone 5"
		},
		"older_woman": {
			"aliases": [
				"grandma"
			],
			"ascii_arts": [],
			"category": "people",
			"code": "older_woman",
			"code_points": [
				"1f475"
			],
			"keywords": [
				"diversity",
				"female",
				"girl",
				"grandma",
				"grandmother",
				"old people",
				"people",
				"women"
			],
			"name": "older woman"
		},
		"older_woman_tone1": {
			"aliases": [
				"grandma_tone1"
			],
			"ascii_arts": [],
			"category": "people",
			"code": "older_woman_tone1",
			"code_points": [
				"1f475",
				"1f3fb"
			],
			"keywords": [
				"female",
				"grandma",
				"grandmother",
				"lady",
				"women"
			],
			"name": "older woman tone 1"
		},
		"older_woman_tone2": {
			"aliases": [
				"grandma_tone2"
			],
			"ascii_arts": [],
			"category": "people",
			"code": "older_woman_tone2",
			"code_points": [
				"1f475",
				"1f3fc"
			],
			"keywords": [
				"female",
				"grandma",
				"grandmother",
				"lady",
				"women"
			],
			"name": "older woman tone 2"
		},
		"older_woman_tone3": {
			"aliases": [
				"grandma_tone3"
			],
			"ascii_arts": [],
			"category": "people",
			"code": "older_woman_tone3",
			"code_points": [
				"1f475",
				"1f3fd"
			],
			"keywords": [
				"female",
				"grandma",
				"grandmother",
				"lady",
				"women"
			],
			"name": "older woman tone 3"
		},
		"older_woman_tone4": {
			"aliases": [
				"grandma_tone4"
			],
			"ascii_arts": [],
			"category": "people",
			"code": "older_woman_tone4",
			"code_points": [
				"1f475",
				"1f3fe"
			],
			"keywords": [
				"female",
				"grandma",
				"grandmother",
				"lady",
				"women"
			],
			"name": "older woman tone 4"
		},
		"older_woman_tone5": {
			"aliases": [
				"grandma_tone5"
			],
			"ascii_arts": [],
			"category": "people",
			"code": "older_woman_tone5",
			"code_points": [
				"1f475",
				"1f3ff"
			],
			"keywords": [
				"female",
				"grandma",
				"grandmother",
				"lady",
				"women"
			],
			"name": "older woman tone 5"
		},
		"om_symbol": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "om_symbol",
			"code_points": [
				"1f549"
			],
			"keywords": [
				"buddhism",
				"dharmic",
				"hinduism",
				"icon",
				"jainism",
				"meditate",
				"religion",
				"sound",
				"spiritual",
				"symbol"
			],
			"name": "om symbol"
		},
		"on": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "on",
			"code_points": [
				"1f51b"
			],
			"keywords": [
				"arrow",
				"symbol",
				"words"
			],
			"name": "on with exclamation mark with left right arrow abo"
		},
		"oncoming_automobile": {
			"aliases": [],
			"ascii_arts": [],
			"category": "travel",
			"code": "oncoming_automobile",
			"code_points": [
				"1f698"
			],
			"keywords": [
				"automobile",
				"car",
				"sedan",
				"transportation",
				"travel",
				"vehicle"
			],
			"name": "oncoming automobile"
		},
		"oncoming_bus": {
			"aliases": [],
			"ascii_arts": [],
			"category": "travel",
			"code": "oncoming_bus",
			"code_points": [
				"1f68d"
			],
			"keywords": [
				"bus",
				"city",
				"public",
				"school",
				"transportation",
				"travel",
				"vehicle"
			],
			"name": "oncoming bus"
		},
		"oncoming_police_car": {
			"aliases": [],
			"ascii_arts": [],
			"category": "travel",
			"code": "oncoming_police_car",
			"code_points": [
				"1f694"
			],
			"keywords": [
				"911",
				"car",
				"citation",
				"crime",
				"emergency",
				"enforcement",
				"help",
				"law",
				"officer",
				"police",
				"ticket",
				"transportation",
				"vehicle"
			],
			"name": "oncoming police car"
		},
		"oncoming_taxi": {
			"aliases": [],
			"ascii_arts": [],
			"category": "travel",
			"code": "oncoming_taxi",
			"code_points": [
				"1f696"
			],
			"keywords": [
				"automobile",
				"car",
				"cars",
				"city",
				"service",
				"taxi",
				"transport",
				"transportation",
				"travel",
				"uber",
				"vehicle"
			],
			"name": "oncoming taxi"
		},
		"one": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "one",
			"code_points": [
				"31",
				"fe0f",
				"20e3"
			],
			"keywords": [
				"1",
				"blue-square",
				"math",
				"number",
				"numbers",
				"symbol"
			],
			"name": "keycap digit one"
		},
		"open_file_folder": {
			"aliases": [],
			"ascii_arts": [],
			"category": "objects",
			"code": "open_file_folder",
			"code_points": [
				"1f4c2"
			],
			"keywords": [
				"documents",
				"load",
				"office",
				"work"
			],
			"name": "open file folder"
		},
		"open_hands": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "open_hands",
			"code_points": [
				"1f450"
			],
			"keywords": [
				"body",
				"butterfly",
				"condolence",
				"diversity",
				"fingers",
				"hands"
			],
			"name": "open hands sign"
		},
		"open_hands_tone1": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "open_hands_tone1",
			"code_points": [
				"1f450",
				"1f3fb"
			],
			"keywords": [
				"butterfly",
				"fingers"
			],
			"name": "open hands sign tone 1"
		},
		"open_hands_tone2": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "open_hands_tone2",
			"code_points": [
				"1f450",
				"1f3fc"
			],
			"keywords": [
				"butterfly",
				"fingers"
			],
			"name": "open hands sign tone 2"
		},
		"open_hands_tone3": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "open_hands_tone3",
			"code_points": [
				"1f450",
				"1f3fd"
			],
			"keywords": [
				"butterfly",
				"fingers"
			],
			"name": "open hands sign tone 3"
		},
		"open_hands_tone4": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "open_hands_tone4",
			"code_points": [
				"1f450",
				"1f3fe"
			],
			"keywords": [
				"butterfly",
				"fingers"
			],
			"name": "open hands sign tone 4"
		},
		"open_hands_tone5": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "open_hands_tone5",
			"code_points": [
				"1f450",
				"1f3ff"
			],
			"keywords": [
				"butterfly",
				"fingers"
			],
			"name": "open hands sign tone 5"
		},
		"open_mouth": {
			"aliases": [],
			"ascii_arts": [
				":-O",
				":-o",
				":O",
				":o",
				">:O",
				"O_O"
			],
			"category": "people",
			"code": "open_mouth",
			"code_points": [
				"1f62e"
			],
			"keywords": [
				"emotion",
				"face",
				"gapping",
				"impressed",
				"jaw",
				"mouth",
				"open",
				"smiley",
				"surprise",
				"surprised",
				"wow"
			],
			"name": "face with open mouth"
		},
		"ophiuchus": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "ophiuchus",
			"code_points": [
				"26ce"
			],
			"keywords": [
				"astrology",
				"constellation",
				"greek",
				"horoscope",
				"ophiuchus",
				"purple-square",
				"serpent",
				"sign",
				"snake",
				"stars",
				"symbol",
				"zodiac"
			],
			"name": "ophiuchus"
		},
		"orange_book": {
			"aliases": [],
			"ascii_arts": [],
			"category": "objects",
			"code": "orange_book",
			"code_points": [
				"1f4d9"
			],
			"keywords": [
				"book",
				"knowledge",
				"library",
				"object",
				"office",
				"read",
				"write"
			],
			"name": "orange book"
		},
		"orthodox_cross": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "orthodox_cross",
			"code_points": [
				"2626"
			],
			"keywords": [
				"christian",
				"religion",
				"symbol"
			],
			"name": "orthodox cross"
		},
		"outbox_tray": {
			"aliases": [],
			"ascii_arts": [],
			"category": "objects",
			"code": "outbox_tray",
			"code_points": [
				"1f4e4"
			],
			"keywords": [
				"email",
				"inbox",
				"office",
				"work"
			],
			"name": "outbox tray"
		},
		"owl": {
			"aliases": [],
			"ascii_arts": [],
			"category": "nature",
			"code": "owl",
			"code_points": [
				"1f989"
			],
			"keywords": [],
			"name": "owl"
		},
		"ox": {
			"aliases": [],
			"ascii_arts": [],
			"category": "nature",
			"code": "ox",
			"code_points": [
				"1f402"
			],
			"keywords": [
				"animal",
				"beef",
				"cow"
			],
			"name": "ox"
		},
		"package": {
			"aliases": [],
			"ascii_arts": [],
			"category": "objects",
			"code": "package",
			"code_points": [
				"1f4e6"
			],
			"keywords": [
				"gift",
				"mail",
				"object",
				"office"
			],
			"name": "package"
		},
		"page_facing_up": {
			"aliases": [],
			"ascii_arts": [],
			"category": "objects",
			"code": "page_facing_up",
			"code_points": [
				"1f4c4"
			],
			"keywords": [
				"documents",
				"office",
				"work",
				"write"
			],
			"name": "page facing up"
		},
		"page_with_curl": {
			"aliases": [],
			"ascii_arts": [],
			"category": "objects",
			"code": "page_with_curl",
			"code_points": [
				"1f4c3"
			],
			"keywords": [
				"documents",
				"office",
				"write"
			],
			"name": "page with curl"
		},
		"pager": {
			"aliases": [],
			"ascii_arts": [],
			"category": "objects",
			"code": "pager",
			"code_points": [
				"1f4df"
			],
			"keywords": [
				"bbcall",
				"electronics",
				"oldschool",
				"work"
			],
			"name": "pager"
		},
		"paintbrush": {
			"aliases": [
				"lower_left_paintbrush"
			],
			"ascii_arts": [],
			"category": "objects",
			"code": "paintbrush",
			"code_points": [
				"1f58c"
			],
			"keywords": [
				"art",
				"brush",
				"object",
				"office",
				"painting",
				"write"
			],
			"name": "lower left paintbrush"
		},
		"palm_tree": {
			"aliases": [],
			"ascii_arts": [],
			"category": "nature",
			"code": "palm_tree",
			"code_points": [
				"1f334"
			],
			"keywords": [
				"coconuts",
				"fronds",
				"nature",
				"palm",
				"plant",
				"tree",
				"trees",
				"tropical",
				"vegetable",
				"warm"
			],
			"name": "palm tree"
		},
		"pancakes": {
			"aliases": [],
			"ascii_arts": [],
			"category": "food",
			"code": "pancakes",
			"code_points": [
				"1f95e"
			],
			"keywords": [],
			"name": "pancakes"
		},
		"panda_face": {
			"aliases": [],
			"ascii_arts": [],
			"category": "nature",
			"code": "panda_face",
			"code_points": [
				"1f43c"
			],
			"keywords": [
				"animal",
				"bamboo",
				"bear",
				"black",
				"china",
				"cub",
				"cute",
				"endearment",
				"face",
				"friendship",
				"love",
				"nature",
				"panda",
				"roar",
				"white",
				"wildlife"
			],
			"name": "panda face"
		},
		"paperclip": {
			"aliases": [],
			"ascii_arts": [],
			"category": "objects",
			"code": "paperclip",
			"code_points": [
				"1f4ce"
			],
			"keywords": [
				"documents",
				"object",
				"office",
				"stationery",
				"work"
			],
			"name": "paperclip"
		},
		"paperclips": {
			"aliases": [
				"linked_paperclips"
			],
			"ascii_arts": [],
			"category": "objects",
			"code": "paperclips",
			"code_points": [
				"1f587"
			],
			"keywords": [
				"documents",
				"object",
				"office",
				"stationery",
				"work"
			],
			"name": "linked paperclips"
		},
		"park": {
			"aliases": [
				"national_park"
			],
			"ascii_arts": [],
			"category": "travel",
			"code": "park",
			"code_points": [
				"1f3de"
			],
			"keywords": [
				"camp",
				"forest",
				"national",
				"nature",
				"park",
				"travel",
				"vacation",
				"wilderness",
				"wildlife",
				"woods"
			],
			"name": "national park"
		},
		"parking": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "parking",
			"code_points": [
				"1f17f",
				"fe0f"
			],
			"keywords": [
				"alphabet",
				"blue-square",
				"cars",
				"letter",
				"symbol"
			],
			"name": "negative squared latin capital letter p"
		},
		"part_alternation_mark": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "part_alternation_mark",
			"code_points": [
				"303d",
				"fe0f"
			],
			"keywords": [
				"cue",
				"graph",
				"japanese",
				"karaoke",
				"letter",
				"m",
				"music",
				"sing",
				"song",
				"symbol",
				"vocal"
			],
			"name": "part alternation mark"
		},
		"partly_sunny": {
			"aliases": [],
			"ascii_arts": [],
			"category": "nature",
			"code": "partly_sunny",
			"code_points": [
				"26c5",
				"fe0f"
			],
			"keywords": [
				"cloud",
				"morning",
				"nature",
				"sky",
				"sun",
				"weather"
			],
			"name": "sun behind cloud"
		},
		"passport_control": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "passport_control",
			"code_points": [
				"1f6c2"
			],
			"keywords": [
				"blue-square",
				"control",
				"custom",
				"foreign",
				"identification",
				"official",
				"passport",
				"symbol",
				"travel"
			],
			"name": "passport control"
		},
		"pause_button": {
			"aliases": [
				"double_vertical_bar"
			],
			"ascii_arts": [],
			"category": "symbols",
			"code": "pause_button",
			"code_points": [
				"23f8"
			],
			"keywords": [
				"pause",
				"sound",
				"symbol"
			],
			"name": "double vertical bar"
		},
		"peace": {
			"aliases": [
				"peace_symbol"
			],
			"ascii_arts": [],
			"category": "symbols",
			"code": "peace",
			"code_points": [
				"262e"
			],
			"keywords": [
				"drugs",
				"peace",
				"sign",
				"symbol"
			],
			"name": "peace symbol"
		},
		"peach": {
			"aliases": [],
			"ascii_arts": [],
			"category": "food",
			"code": "peach",
			"code_points": [
				"1f351"
			],
			"keywords": [
				"butt",
				"food",
				"fruit",
				"juicy",
				"nature",
				"peach",
				"pit"
			],
			"name": "peach"
		},
		"peanuts": {
			"aliases": [
				"shelled_peanut"
			],
			"ascii_arts": [],
			"category": "food",
			"code": "peanuts",
			"code_points": [
				"1f95c"
			],
			"keywords": [],
			"name": "peanuts"
		},
		"pear": {
			"aliases": [],
			"ascii_arts": [],
			"category": "food",
			"code": "pear",
			"code_points": [
				"1f350"
			],
			"keywords": [
				"food",
				"fruit",
				"nature",
				"pear",
				"shape"
			],
			"name": "pear"
		},
		"pen_ballpoint": {
			"aliases": [
				"lower_left_ballpoint_pen"
			],
			"ascii_arts": [],
			"category": "objects",
			"code": "pen_ballpoint",
			"code_points": [
				"1f58a"
			],
			"keywords": [
				"bic",
				"ink",
				"object",
				"office",
				"write"
			],
			"name": "lower left ballpoint pen"
		},
		"pen_fountain": {
			"aliases": [
				"lower_left_fountain_pen"
			],
			"ascii_arts": [],
			"category": "objects",
			"code": "pen_fountain",
			"code_points": [
				"1f58b"
			],
			"keywords": [
				"calligraphy",
				"ink",
				"object",
				"office",
				"write"
			],
			"name": "lower left fountain pen"
		},
		"pencil": {
			"aliases": [
				"memo"
			],
			"ascii_arts": [],
			"category": "objects",
			"code": "pencil",
			"code_points": [
				"1f4dd"
			],
			"keywords": [
				"documents",
				"office",
				"paper",
				"station",
				"work",
				"write"
			],
			"name": "memo"
		},
		"pencil2": {
			"aliases": [],
			"ascii_arts": [],
			"category": "objects",
			"code": "pencil2",
			"code_points": [
				"270f",
				"fe0f"
			],
			"keywords": [
				"object",
				"office",
				"paper",
				"stationery",
				"write"
			],
			"name": "pencil"
		},
		"penguin": {
			"aliases": [],
			"ascii_arts": [],
			"category": "nature",
			"code": "penguin",
			"code_points": [
				"1f427"
			],
			"keywords": [
				"animal",
				"nature",
				"wildlife"
			],
			"name": "penguin"
		},
		"pensive": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "pensive",
			"code_points": [
				"1f614"
			],
			"keywords": [
				"emotion",
				"face",
				"meditate",
				"okay",
				"pensive",
				"reflective",
				"rip",
				"sad",
				"serious",
				"smiley",
				"think",
				"thoughtful",
				"wistful"
			],
			"name": "pensive face"
		},
		"performing_arts": {
			"aliases": [],
			"ascii_arts": [],
			"category": "activity",
			"code": "performing_arts",
			"code_points": [
				"1f3ad"
			],
			"keywords": [
				"acting",
				"arts",
				"drama",
				"entertainment",
				"mask",
				"masks",
				"movie",
				"performance",
				"performing",
				"story",
				"theater",
				"theatre"
			],
			"name": "performing arts"
		},
		"persevere": {
			"aliases": [],
			"ascii_arts": [
				">.<"
			],
			"category": "people",
			"code": "persevere",
			"code_points": [
				"1f623"
			],
			"keywords": [
				"angry",
				"emotion",
				"endure",
				"face",
				"no",
				"persevere",
				"sad",
				"sick",
				"smiley",
				"upset"
			],
			"name": "persevering face"
		},
		"person_frowning": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "person_frowning",
			"code_points": [
				"1f64d"
			],
			"keywords": [
				"dejected",
				"diversity",
				"female",
				"frown",
				"girl",
				"people",
				"rejected",
				"sad",
				"woman",
				"women"
			],
			"name": "person frowning"
		},
		"person_frowning_tone1": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "person_frowning_tone1",
			"code_points": [
				"1f64d",
				"1f3fb"
			],
			"keywords": [
				"dejected",
				"female",
				"frown",
				"girl",
				"rejected",
				"sad",
				"woman"
			],
			"name": "person frowning tone 1"
		},
		"person_frowning_tone2": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "person_frowning_tone2",
			"code_points": [
				"1f64d",
				"1f3fc"
			],
			"keywords": [
				"dejected",
				"female",
				"frown",
				"girl",
				"rejected",
				"sad",
				"woman"
			],
			"name": "person frowning tone 2"
		},
		"person_frowning_tone3": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "person_frowning_tone3",
			"code_points": [
				"1f64d",
				"1f3fd"
			],
			"keywords": [
				"dejected",
				"female",
				"frown",
				"girl",
				"rejected",
				"sad",
				"woman"
			],
			"name": "person frowning tone 3"
		},
		"person_frowning_tone4": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "person_frowning_tone4",
			"code_points": [
				"1f64d",
				"1f3fe"
			],
			"keywords": [
				"dejected",
				"female",
				"frown",
				"girl",
				"rejected",
				"sad",
				"woman"
			],
			"name": "person frowning tone 4"
		},
		"person_frowning_tone5": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "person_frowning_tone5",
			"code_points": [
				"1f64d",
				"1f3ff"
			],
			"keywords": [
				"dejected",
				"female",
				"frown",
				"girl",
				"rejected",
				"sad",
				"woman"
			],
			"name": "person frowning tone 5"
		},
		"person_with_blond_hair": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "person_with_blond_hair",
			"code_points": [
				"1f471"
			],
			"keywords": [
				"blonde",
				"diversity",
				"male",
				"man",
				"men",
				"occidental",
				"people",
				"western",
				"westerner",
				"young"
			],
			"name": "person with blond hair"
		},
		"person_with_blond_hair_tone1": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "person_with_blond_hair_tone1",
			"code_points": [
				"1f471",
				"1f3fb"
			],
			"keywords": [
				"blonde",
				"male",
				"man",
				"occidental",
				"western",
				"westerner",
				"young"
			],
			"name": "person with blond hair tone 1"
		},
		"person_with_blond_hair_tone2": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "person_with_blond_hair_tone2",
			"code_points": [
				"1f471",
				"1f3fc"
			],
			"keywords": [
				"blonde",
				"male",
				"man",
				"occidental",
				"western",
				"westerner",
				"young"
			],
			"name": "person with blond hair tone 2"
		},
		"person_with_blond_hair_tone3": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "person_with_blond_hair_tone3",
			"code_points": [
				"1f471",
				"1f3fd"
			],
			"keywords": [
				"blonde",
				"male",
				"man",
				"occidental",
				"western",
				"westerner",
				"young"
			],
			"name": "person with blond hair tone 3"
		},
		"person_with_blond_hair_tone4": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "person_with_blond_hair_tone4",
			"code_points": [
				"1f471",
				"1f3fe"
			],
			"keywords": [
				"blonde",
				"male",
				"man",
				"occidental",
				"western",
				"westerner",
				"young"
			],
			"name": "person with blond hair tone 4"
		},
		"person_with_blond_hair_tone5": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "person_with_blond_hair_tone5",
			"code_points": [
				"1f471",
				"1f3ff"
			],
			"keywords": [
				"blonde",
				"male",
				"man",
				"occidental",
				"western",
				"westerner",
				"young"
			],
			"name": "person with blond hair tone 5"
		},
		"person_with_pouting_face": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "person_with_pouting_face",
			"code_points": [
				"1f64e"
			],
			"keywords": [
				"annoyed",
				"cute",
				"diversity",
				"female",
				"girl",
				"people",
				"pout",
				"sexy",
				"woman",
				"women"
			],
			"name": "person with pouting face"
		},
		"person_with_pouting_face_tone1": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "person_with_pouting_face_tone1",
			"code_points": [
				"1f64e",
				"1f3fb"
			],
			"keywords": [
				"annoyed",
				"cute",
				"female",
				"girl",
				"pout",
				"sexy",
				"woman"
			],
			"name": "person with pouting face tone1"
		},
		"person_with_pouting_face_tone2": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "person_with_pouting_face_tone2",
			"code_points": [
				"1f64e",
				"1f3fc"
			],
			"keywords": [
				"annoyed",
				"cute",
				"female",
				"girl",
				"pout",
				"sexy",
				"woman"
			],
			"name": "person with pouting face tone2"
		},
		"person_with_pouting_face_tone3": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "person_with_pouting_face_tone3",
			"code_points": [
				"1f64e",
				"1f3fd"
			],
			"keywords": [
				"annoyed",
				"cute",
				"female",
				"girl",
				"pout",
				"sexy",
				"woman"
			],
			"name": "person with pouting face tone3"
		},
		"person_with_pouting_face_tone4": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "person_with_pouting_face_tone4",
			"code_points": [
				"1f64e",
				"1f3fe"
			],
			"keywords": [
				"annoyed",
				"cute",
				"female",
				"girl",
				"pout",
				"sexy",
				"woman"
			],
			"name": "person with pouting face tone4"
		},
		"person_with_pouting_face_tone5": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "person_with_pouting_face_tone5",
			"code_points": [
				"1f64e",
				"1f3ff"
			],
			"keywords": [
				"annoyed",
				"cute",
				"female",
				"girl",
				"pout",
				"sexy",
				"woman"
			],
			"name": "person with pouting face tone5"
		},
		"pick": {
			"aliases": [],
			"ascii_arts": [],
			"category": "objects",
			"code": "pick",
			"code_points": [
				"26cf"
			],
			"keywords": [
				"mining",
				"object",
				"tool",
				"weapon"
			],
			"name": "pick"
		},
		"pig": {
			"aliases": [],
			"ascii_arts": [],
			"category": "nature",
			"code": "pig",
			"code_points": [
				"1f437"
			],
			"keywords": [
				"animal",
				"oink"
			],
			"name": "pig face"
		},
		"pig2": {
			"aliases": [],
			"ascii_arts": [],
			"category": "nature",
			"code": "pig2",
			"code_points": [
				"1f416"
			],
			"keywords": [
				"animal",
				"bacon",
				"greed",
				"greedy",
				"ham",
				"hog",
				"livestock",
				"nature",
				"oink",
				"pig",
				"piggy",
				"pork",
				"slop"
			],
			"name": "pig"
		},
		"pig_nose": {
			"aliases": [],
			"ascii_arts": [],
			"category": "nature",
			"code": "pig_nose",
			"code_points": [
				"1f43d"
			],
			"keywords": [
				"animal",
				"cute",
				"eat",
				"food",
				"nose",
				"oink",
				"pig",
				"pink",
				"smell",
				"snout",
				"truffle"
			],
			"name": "pig nose"
		},
		"pill": {
			"aliases": [],
			"ascii_arts": [],
			"category": "objects",
			"code": "pill",
			"code_points": [
				"1f48a"
			],
			"keywords": [
				"drugs",
				"health",
				"medicine",
				"object"
			],
			"name": "pill"
		},
		"pineapple": {
			"aliases": [],
			"ascii_arts": [],
			"category": "food",
			"code": "pineapple",
			"code_points": [
				"1f34d"
			],
			"keywords": [
				"flower",
				"food",
				"fruit",
				"nature",
				"pina",
				"pineapple",
				"tropical"
			],
			"name": "pineapple"
		},
		"ping_pong": {
			"aliases": [
				"table_tennis"
			],
			"ascii_arts": [],
			"category": "activity",
			"code": "ping_pong",
			"code_points": [
				"1f3d3"
			],
			"keywords": [
				"ball",
				"game",
				"ping pong",
				"sport"
			],
			"name": "table tennis paddle and ball"
		},
		"pisces": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "pisces",
			"code_points": [
				"2653",
				"fe0f"
			],
			"keywords": [
				"astrology",
				"constellation",
				"fish",
				"greek",
				"horoscope",
				"pisces",
				"purple-square",
				"sign",
				"stars",
				"symbol",
				"zodiac"
			],
			"name": "pisces"
		},
		"pizza": {
			"aliases": [],
			"ascii_arts": [],
			"category": "food",
			"code": "pizza",
			"code_points": [
				"1f355"
			],
			"keywords": [
				"boys night",
				"food",
				"italian",
				"italy",
				"new york",
				"party",
				"peperoni",
				"pie",
				"pizza",
				"slice"
			],
			"name": "slice of pizza"
		},
		"place_of_worship": {
			"aliases": [
				"worship_symbol"
			],
			"ascii_arts": [],
			"category": "symbols",
			"code": "place_of_worship",
			"code_points": [
				"1f6d0"
			],
			"keywords": [
				"pray",
				"religion",
				"symbol"
			],
			"name": "place of worship"
		},
		"play_pause": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "play_pause",
			"code_points": [
				"23ef"
			],
			"keywords": [
				"arrow",
				"pause",
				"play",
				"right",
				"sound",
				"symbol"
			],
			"name": "black right-pointing double triangle with double vertical bar"
		},
		"point_down": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "point_down",
			"code_points": [
				"1f447"
			],
			"keywords": [
				"body",
				"direction",
				"diversity",
				"fingers",
				"hand",
				"hands"
			],
			"name": "white down pointing backhand index"
		},
		"point_down_tone1": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "point_down_tone1",
			"code_points": [
				"1f447",
				"1f3fb"
			],
			"keywords": [
				"direction",
				"finger",
				"hand"
			],
			"name": "white down pointing backhand index tone 1"
		},
		"point_down_tone2": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "point_down_tone2",
			"code_points": [
				"1f447",
				"1f3fc"
			],
			"keywords": [
				"direction",
				"finger",
				"hand"
			],
			"name": "white down pointing backhand index tone 2"
		},
		"point_down_tone3": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "point_down_tone3",
			"code_points": [
				"1f447",
				"1f3fd"
			],
			"keywords": [
				"direction",
				"finger",
				"hand"
			],
			"name": "white down pointing backhand index tone 3"
		},
		"point_down_tone4": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "point_down_tone4",
			"code_points": [
				"1f447",
				"1f3fe"
			],
			"keywords": [
				"direction",
				"finger",
				"hand"
			],
			"name": "white down pointing backhand index tone 4"
		},
		"point_down_tone5": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "point_down_tone5",
			"code_points": [
				"1f447",
				"1f3ff"
			],
			"keywords": [
				"direction",
				"finger",
				"hand"
			],
			"name": "white down pointing backhand index tone 5"
		},
		"point_left": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "point_left",
			"code_points": [
				"1f448"
			],
			"keywords": [
				"body",
				"direction",
				"diversity",
				"fingers",
				"hand",
				"hands",
				"hi"
			],
			"name": "white left pointing backhand index"
		},
		"point_left_tone1": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "point_left_tone1",
			"code_points": [
				"1f448",
				"1f3fb"
			],
			"keywords": [
				"direction",
				"finger",
				"hand"
			],
			"name": "white left pointing backhand index tone 1"
		},
		"point_left_tone2": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "point_left_tone2",
			"code_points": [
				"1f448",
				"1f3fc"
			],
			"keywords": [
				"direction",
				"finger",
				"hand"
			],
			"name": "white left pointing backhand index tone 2"
		},
		"point_left_tone3": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "point_left_tone3",
			"code_points": [
				"1f448",
				"1f3fd"
			],
			"keywords": [
				"direction",
				"finger",
				"hand"
			],
			"name": "white left pointing backhand index tone 3"
		},
		"point_left_tone4": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "point_left_tone4",
			"code_points": [
				"1f448",
				"1f3fe"
			],
			"keywords": [
				"direction",
				"finger",
				"hand"
			],
			"name": "white left pointing backhand index tone 4"
		},
		"point_left_tone5": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "point_left_tone5",
			"code_points": [
				"1f448",
				"1f3ff"
			],
			"keywords": [
				"direction",
				"finger",
				"hand"
			],
			"name": "white left pointing backhand index tone 5"
		},
		"point_right": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "point_right",
			"code_points": [
				"1f449"
			],
			"keywords": [
				"body",
				"direction",
				"diversity",
				"fingers",
				"hand",
				"hands",
				"hi"
			],
			"name": "white right pointing backhand index"
		},
		"point_right_tone1": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "point_right_tone1",
			"code_points": [
				"1f449",
				"1f3fb"
			],
			"keywords": [
				"direction",
				"finger",
				"hand"
			],
			"name": "white right pointing backhand index tone 1"
		},
		"point_right_tone2": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "point_right_tone2",
			"code_points": [
				"1f449",
				"1f3fc"
			],
			"keywords": [
				"direction",
				"finger",
				"hand"
			],
			"name": "white right pointing backhand index tone 2"
		},
		"point_right_tone3": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "point_right_tone3",
			"code_points": [
				"1f449",
				"1f3fd"
			],
			"keywords": [
				"direction",
				"finger",
				"hand"
			],
			"name": "white right pointing backhand index tone 3"
		},
		"point_right_tone4": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "point_right_tone4",
			"code_points": [
				"1f449",
				"1f3fe"
			],
			"keywords": [
				"direction",
				"finger",
				"hand"
			],
			"name": "white right pointing backhand index tone 4"
		},
		"point_right_tone5": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "point_right_tone5",
			"code_points": [
				"1f449",
				"1f3ff"
			],
			"keywords": [
				"direction",
				"finger",
				"hand"
			],
			"name": "white right pointing backhand index tone 5"
		},
		"point_up": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "point_up",
			"code_points": [
				"261d",
				"fe0f"
			],
			"keywords": [
				"body",
				"direction",
				"diversity",
				"emojione",
				"fingers",
				"hand",
				"hands"
			],
			"name": "white up pointing index"
		},
		"point_up_2": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "point_up_2",
			"code_points": [
				"1f446"
			],
			"keywords": [
				"body",
				"direction",
				"diversity",
				"fingers",
				"hand",
				"hands"
			],
			"name": "white up pointing backhand index"
		},
		"point_up_2_tone1": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "point_up_2_tone1",
			"code_points": [
				"1f446",
				"1f3fb"
			],
			"keywords": [
				"direction",
				"finger",
				"hand",
				"one"
			],
			"name": "white up pointing backhand index tone 1"
		},
		"point_up_2_tone2": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "point_up_2_tone2",
			"code_points": [
				"1f446",
				"1f3fc"
			],
			"keywords": [
				"direction",
				"finger",
				"hand",
				"one"
			],
			"name": "white up pointing backhand index tone 2"
		},
		"point_up_2_tone3": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "point_up_2_tone3",
			"code_points": [
				"1f446",
				"1f3fd"
			],
			"keywords": [
				"direction",
				"finger",
				"hand",
				"one"
			],
			"name": "white up pointing backhand index tone 3"
		},
		"point_up_2_tone4": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "point_up_2_tone4",
			"code_points": [
				"1f446",
				"1f3fe"
			],
			"keywords": [
				"direction",
				"finger",
				"hand",
				"one"
			],
			"name": "white up pointing backhand index tone 4"
		},
		"point_up_2_tone5": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "point_up_2_tone5",
			"code_points": [
				"1f446",
				"1f3ff"
			],
			"keywords": [
				"direction",
				"finger",
				"hand",
				"one"
			],
			"name": "white up pointing backhand index tone 5"
		},
		"point_up_tone1": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "point_up_tone1",
			"code_points": [
				"261d",
				"1f3fb"
			],
			"keywords": [
				"direction",
				"finger",
				"hand",
				"one"
			],
			"name": "white up pointing index tone 1"
		},
		"point_up_tone2": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "point_up_tone2",
			"code_points": [
				"261d",
				"1f3fc"
			],
			"keywords": [
				"direction",
				"finger",
				"hand",
				"one"
			],
			"name": "white up pointing index tone 2"
		},
		"point_up_tone3": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "point_up_tone3",
			"code_points": [
				"261d",
				"1f3fd"
			],
			"keywords": [
				"direction",
				"finger",
				"hand",
				"one"
			],
			"name": "white up pointing index tone 3"
		},
		"point_up_tone4": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "point_up_tone4",
			"code_points": [
				"261d",
				"1f3fe"
			],
			"keywords": [
				"direction",
				"finger",
				"hand",
				"one"
			],
			"name": "white up pointing index tone 4"
		},
		"point_up_tone5": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "point_up_tone5",
			"code_points": [
				"261d",
				"1f3ff"
			],
			"keywords": [
				"direction",
				"finger",
				"hand",
				"one"
			],
			"name": "white up pointing index tone 5"
		},
		"police_car": {
			"aliases": [],
			"ascii_arts": [],
			"category": "travel",
			"code": "police_car",
			"code_points": [
				"1f693"
			],
			"keywords": [
				"911",
				"car",
				"cars",
				"citation",
				"crime",
				"emergency",
				"enforcement",
				"help",
				"law",
				"officer",
				"police",
				"ticket",
				"transportation",
				"vehicle"
			],
			"name": "police car"
		},
		"poodle": {
			"aliases": [],
			"ascii_arts": [],
			"category": "nature",
			"code": "poodle",
			"code_points": [
				"1f429"
			],
			"keywords": [
				"101",
				"animal",
				"clip",
				"dog",
				"nature",
				"poodle",
				"showy",
				"sophisticated",
				"vain"
			],
			"name": "poodle"
		},
		"poop": {
			"aliases": [
				"hankey",
				"poo",
				"shit"
			],
			"ascii_arts": [],
			"category": "people",
			"code": "poop",
			"code_points": [
				"1f4a9"
			],
			"keywords": [
				"bathroom",
				"diarrhea",
				"poo",
				"poop",
				"shit",
				"shitface",
				"sol",
				"turd"
			],
			"name": "pile of poo"
		},
		"popcorn": {
			"aliases": [],
			"ascii_arts": [],
			"category": "food",
			"code": "popcorn",
			"code_points": [
				"1f37f"
			],
			"keywords": [
				"food",
				"parties"
			],
			"name": "popcorn"
		},
		"post_office": {
			"aliases": [],
			"ascii_arts": [],
			"category": "travel",
			"code": "post_office",
			"code_points": [
				"1f3e3"
			],
			"keywords": [
				"building",
				"communication",
				"email",
				"places",
				"post office"
			],
			"name": "japanese post office"
		},
		"postal_horn": {
			"aliases": [],
			"ascii_arts": [],
			"category": "objects",
			"code": "postal_horn",
			"code_points": [
				"1f4ef"
			],
			"keywords": [
				"instrument",
				"music",
				"object"
			],
			"name": "postal horn"
		},
		"postbox": {
			"aliases": [],
			"ascii_arts": [],
			"category": "objects",
			"code": "postbox",
			"code_points": [
				"1f4ee"
			],
			"keywords": [
				"email",
				"envelope",
				"letter",
				"object"
			],
			"name": "postbox"
		},
		"potable_water": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "potable_water",
			"code_points": [
				"1f6b0"
			],
			"keywords": [
				"aqua",
				"blue-square",
				"clean",
				"cleaning",
				"clear",
				"drinkable",
				"faucet",
				"h20",
				"liquid",
				"potable",
				"pure",
				"restroom",
				"symbol",
				"water"
			],
			"name": "potable water symbol"
		},
		"potato": {
			"aliases": [],
			"ascii_arts": [],
			"category": "food",
			"code": "potato",
			"code_points": [
				"1f954"
			],
			"keywords": [],
			"name": "potato"
		},
		"pouch": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "pouch",
			"code_points": [
				"1f45d"
			],
			"keywords": [
				"accessories",
				"bag",
				"cosmetic",
				"fashion",
				"grandma",
				"makeup",
				"packing",
				"pouch",
				"women"
			],
			"name": "pouch"
		},
		"poultry_leg": {
			"aliases": [],
			"ascii_arts": [],
			"category": "food",
			"code": "poultry_leg",
			"code_points": [
				"1f357"
			],
			"keywords": [
				"chicken",
				"food",
				"fried",
				"holidays",
				"leg",
				"meat",
				"poultry"
			],
			"name": "poultry leg"
		},
		"pound": {
			"aliases": [],
			"ascii_arts": [],
			"category": "objects",
			"code": "pound",
			"code_points": [
				"1f4b7"
			],
			"keywords": [
				"banknote",
				"bills",
				"britain",
				"british",
				"cash",
				"currency",
				"england",
				"money",
				"paper",
				"pound",
				"sterling",
				"uk"
			],
			"name": "banknote with pound sign"
		},
		"pouting_cat": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "pouting_cat",
			"code_points": [
				"1f63e"
			],
			"keywords": [
				"animal",
				"annoyed",
				"cat",
				"cats",
				"frown",
				"glower",
				"miffed",
				"pout"
			],
			"name": "pouting cat face"
		},
		"pray": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "pray",
			"code_points": [
				"1f64f"
			],
			"keywords": [
				"body",
				"diversity",
				"hands",
				"hi",
				"high five",
				"highfive",
				"hope",
				"luck",
				"namaste",
				"please",
				"pray",
				"regret",
				"scientology",
				"sorrow",
				"sorry",
				"thank you",
				"wish"
			],
			"name": "person with folded hands"
		},
		"pray_tone1": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "pray_tone1",
			"code_points": [
				"1f64f",
				"1f3fb"
			],
			"keywords": [
				"high five",
				"highfive",
				"hope",
				"namaste",
				"please",
				"pray",
				"regret",
				"sorrow",
				"sorry",
				"wish"
			],
			"name": "person with folded hands tone 1"
		},
		"pray_tone2": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "pray_tone2",
			"code_points": [
				"1f64f",
				"1f3fc"
			],
			"keywords": [
				"high five",
				"highfive",
				"hope",
				"namaste",
				"please",
				"pray",
				"regret",
				"sorrow",
				"sorry",
				"wish"
			],
			"name": "person with folded hands tone 2"
		},
		"pray_tone3": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "pray_tone3",
			"code_points": [
				"1f64f",
				"1f3fd"
			],
			"keywords": [
				"high five",
				"highfive",
				"hope",
				"namaste",
				"please",
				"pray",
				"regret",
				"sorrow",
				"sorry",
				"wish"
			],
			"name": "person with folded hands tone 3"
		},
		"pray_tone4": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "pray_tone4",
			"code_points": [
				"1f64f",
				"1f3fe"
			],
			"keywords": [
				"high five",
				"highfive",
				"hope",
				"namaste",
				"please",
				"pray",
				"regret",
				"sorrow",
				"sorry",
				"wish"
			],
			"name": "person with folded hands tone 4"
		},
		"pray_tone5": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "pray_tone5",
			"code_points": [
				"1f64f",
				"1f3ff"
			],
			"keywords": [
				"high five",
				"highfive",
				"hope",
				"namaste",
				"please",
				"pray",
				"regret",
				"sorrow",
				"sorry",
				"wish"
			],
			"name": "person with folded hands tone 5"
		},
		"prayer_beads": {
			"aliases": [],
			"ascii_arts": [],
			"category": "objects",
			"code": "prayer_beads",
			"code_points": [
				"1f4ff"
			],
			"keywords": [
				"object",
				"rosary"
			],
			"name": "prayer beads"
		},
		"pregnant_woman": {
			"aliases": [
				"expecting_woman"
			],
			"ascii_arts": [],
			"category": "people",
			"code": "pregnant_woman",
			"code_points": [
				"1f930"
			],
			"keywords": [],
			"name": "pregnant woman"
		},
		"pregnant_woman_tone1": {
			"aliases": [
				"expecting_woman_tone1"
			],
			"ascii_arts": [],
			"category": "people",
			"code": "pregnant_woman_tone1",
			"code_points": [
				"1f930",
				"1f3fb"
			],
			"keywords": [],
			"name": "pregnant woman tone 1"
		},
		"pregnant_woman_tone2": {
			"aliases": [
				"expecting_woman_tone2"
			],
			"ascii_arts": [],
			"category": "people",
			"code": "pregnant_woman_tone2",
			"code_points": [
				"1f930",
				"1f3fc"
			],
			"keywords": [],
			"name": "pregnant woman tone 2"
		},
		"pregnant_woman_tone3": {
			"aliases": [
				"expecting_woman_tone3"
			],
			"ascii_arts": [],
			"category": "people",
			"code": "pregnant_woman_tone3",
			"code_points": [
				"1f930",
				"1f3fd"
			],
			"keywords": [],
			"name": "pregnant woman tone 3"
		},
		"pregnant_woman_tone4": {
			"aliases": [
				"expecting_woman_tone4"
			],
			"ascii_arts": [],
			"category": "people",
			"code": "pregnant_woman_tone4",
			"code_points": [
				"1f930",
				"1f3fe"
			],
			"keywords": [],
			"name": "pregnant woman tone 4"
		},
		"pregnant_woman_tone5": {
			"aliases": [
				"expecting_woman_tone5"
			],
			"ascii_arts": [],
			"category": "people",
			"code": "pregnant_woman_tone5",
			"code_points": [
				"1f930",
				"1f3ff"
			],
			"keywords": [],
			"name": "pregnant woman tone 5"
		},
		"prince": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "prince",
			"code_points": [
				"1f934"
			],
			"keywords": [],
			"name": "prince"
		},
		"prince_tone1": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "prince_tone1",
			"code_points": [
				"1f934",
				"1f3fb"
			],
			"keywords": [],
			"name": "prince tone 1"
		},
		"prince_tone2": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "prince_tone2",
			"code_points": [
				"1f934",
				"1f3fc"
			],
			"keywords": [],
			"name": "prince tone 2"
		},
		"prince_tone3": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "prince_tone3",
			"code_points": [
				"1f934",
				"1f3fd"
			],
			"keywords": [],
			"name": "prince tone 3"
		},
		"prince_tone4": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "prince_tone4",
			"code_points": [
				"1f934",
				"1f3fe"
			],
			"keywords": [],
			"name": "prince tone 4"
		},
		"prince_tone5": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "prince_tone5",
			"code_points": [
				"1f934",
				"1f3ff"
			],
			"keywords": [],
			"name": "prince tone 5"
		},
		"princess": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "princess",
			"code_points": [
				"1f478"
			],
			"keywords": [
				"beautiful",
				"blond",
				"crown",
				"daughter",
				"disney",
				"diversity",
				"female",
				"girl",
				"girls night",
				"high-maintenance",
				"king",
				"people",
				"princess",
				"queen",
				"royal",
				"royalty",
				"woman",
				"women"
			],
			"name": "princess"
		},
		"princess_tone1": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "princess_tone1",
			"code_points": [
				"1f478",
				"1f3fb"
			],
			"keywords": [
				"blond",
				"crown",
				"daughter",
				"disney",
				"female",
				"girl",
				"high-maintenance",
				"king",
				"queen",
				"royal",
				"royalty",
				"woman"
			],
			"name": "princess tone 1"
		},
		"princess_tone2": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "princess_tone2",
			"code_points": [
				"1f478",
				"1f3fc"
			],
			"keywords": [
				"blond",
				"crown",
				"daughter",
				"disney",
				"female",
				"girl",
				"high-maintenance",
				"king",
				"queen",
				"royal",
				"royalty",
				"woman"
			],
			"name": "princess tone 2"
		},
		"princess_tone3": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "princess_tone3",
			"code_points": [
				"1f478",
				"1f3fd"
			],
			"keywords": [
				"blond",
				"crown",
				"daughter",
				"disney",
				"female",
				"girl",
				"high-maintenance",
				"king",
				"queen",
				"royal",
				"royalty",
				"woman"
			],
			"name": "princess tone 3"
		},
		"princess_tone4": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "princess_tone4",
			"code_points": [
				"1f478",
				"1f3fe"
			],
			"keywords": [
				"blond",
				"crown",
				"daughter",
				"disney",
				"female",
				"girl",
				"high-maintenance",
				"king",
				"queen",
				"royal",
				"royalty",
				"woman"
			],
			"name": "princess tone 4"
		},
		"princess_tone5": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "princess_tone5",
			"code_points": [
				"1f478",
				"1f3ff"
			],
			"keywords": [
				"blond",
				"crown",
				"daughter",
				"disney",
				"female",
				"girl",
				"high-maintenance",
				"king",
				"queen",
				"royal",
				"royalty",
				"woman"
			],
			"name": "princess tone 5"
		},
		"printer": {
			"aliases": [],
			"ascii_arts": [],
			"category": "objects",
			"code": "printer",
			"code_points": [
				"1f5a8"
			],
			"keywords": [
				"electronics",
				"hardcopy",
				"inkjet",
				"laser",
				"office",
				"paper",
				"work"
			],
			"name": "printer"
		},
		"projector": {
			"aliases": [
				"film_projector"
			],
			"ascii_arts": [],
			"category": "objects",
			"code": "projector",
			"code_points": [
				"1f4fd"
			],
			"keywords": [
				"16mm",
				"8mm",
				"camera",
				"motion",
				"movie",
				"object",
				"picture",
				"video"
			],
			"name": "film projector"
		},
		"punch": {
			"aliases": [
				"facepunch"
			],
			"ascii_arts": [],
			"category": "people",
			"code": "punch",
			"code_points": [
				"1f44a"
			],
			"keywords": [
				"body",
				"boys night",
				"diversity",
				"fist",
				"fist bump",
				"hand",
				"hands",
				"hi"
			],
			"name": "fisted hand sign"
		},
		"punch_tone1": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "punch_tone1",
			"code_points": [
				"1f44a",
				"1f3fb"
			],
			"keywords": [
				"fist",
				"punch"
			],
			"name": "fisted hand sign tone 1"
		},
		"punch_tone2": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "punch_tone2",
			"code_points": [
				"1f44a",
				"1f3fc"
			],
			"keywords": [
				"fist",
				"punch"
			],
			"name": "fisted hand sign tone 2"
		},
		"punch_tone3": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "punch_tone3",
			"code_points": [
				"1f44a",
				"1f3fd"
			],
			"keywords": [
				"fist",
				"punch"
			],
			"name": "fisted hand sign tone 3"
		},
		"punch_tone4": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "punch_tone4",
			"code_points": [
				"1f44a",
				"1f3fe"
			],
			"keywords": [
				"fist",
				"punch"
			],
			"name": "fisted hand sign tone 4"
		},
		"punch_tone5": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "punch_tone5",
			"code_points": [
				"1f44a",
				"1f3ff"
			],
			"keywords": [
				"fist",
				"punch"
			],
			"name": "fisted hand sign tone 5"
		},
		"purple_heart": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "purple_heart",
			"code_points": [
				"1f49c"
			],
			"keywords": [
				"affection",
				"compassion",
				"compassionate",
				"duty",
				"heart",
				"honor",
				"like",
				"love",
				"purple",
				"royalty",
				"sacrifice",
				"sensitive",
				"symbol",
				"understanding",
				"valentines",
				"veteran",
				"violet"
			],
			"name": "purple heart"
		},
		"purse": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "purse",
			"code_points": [
				"1f45b"
			],
			"keywords": [
				"accessories",
				"accessory",
				"bag",
				"clutch",
				"coin bag",
				"fashion",
				"handbag",
				"ladies",
				"money",
				"purse",
				"shopping",
				"women"
			],
			"name": "purse"
		},
		"pushpin": {
			"aliases": [],
			"ascii_arts": [],
			"category": "objects",
			"code": "pushpin",
			"code_points": [
				"1f4cc"
			],
			"keywords": [
				"object",
				"office",
				"stationery"
			],
			"name": "pushpin"
		},
		"put_litter_in_its_place": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "put_litter_in_its_place",
			"code_points": [
				"1f6ae"
			],
			"keywords": [
				"blue-square",
				"can",
				"garbage",
				"litter",
				"receptacle",
				"symbol",
				"trash",
				"waste"
			],
			"name": "put litter in its place symbol"
		},
		"question": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "question",
			"code_points": [
				"2753"
			],
			"keywords": [
				"confused",
				"doubt",
				"punctuation",
				"symbol",
				"wth"
			],
			"name": "black question mark ornament"
		},
		"rabbit": {
			"aliases": [],
			"ascii_arts": [],
			"category": "nature",
			"code": "rabbit",
			"code_points": [
				"1f430"
			],
			"keywords": [
				"animal",
				"nature",
				"wildlife"
			],
			"name": "rabbit face"
		},
		"rabbit2": {
			"aliases": [],
			"ascii_arts": [],
			"category": "nature",
			"code": "rabbit2",
			"code_points": [
				"1f407"
			],
			"keywords": [
				"animal",
				"bunny",
				"easter",
				"nature",
				"prolific",
				"rabbit",
				"reproduction",
				"wildlife"
			],
			"name": "rabbit"
		},
		"race_car": {
			"aliases": [
				"racing_car"
			],
			"ascii_arts": [],
			"category": "travel",
			"code": "race_car",
			"code_points": [
				"1f3ce"
			],
			"keywords": [
				"car",
				"drive",
				"formula 1",
				"nascar",
				"race",
				"speed",
				"stock",
				"transportation"
			],
			"name": "racing car"
		},
		"racehorse": {
			"aliases": [],
			"ascii_arts": [],
			"category": "nature",
			"code": "racehorse",
			"code_points": [
				"1f40e"
			],
			"keywords": [
				"animal",
				"calvary",
				"colt",
				"cowboy",
				"cowgirl",
				"draft",
				"filly",
				"gallop",
				"gamble",
				"gelding",
				"horse",
				"mare",
				"mounted",
				"pony",
				"powerful",
				"race",
				"ride",
				"stallion",
				"thoroughbred",
				"trot",
				"wildlife",
				"yearling"
			],
			"name": "horse"
		},
		"radio": {
			"aliases": [],
			"ascii_arts": [],
			"category": "objects",
			"code": "radio",
			"code_points": [
				"1f4fb"
			],
			"keywords": [
				"communication",
				"electronics",
				"music",
				"podcast",
				"program"
			],
			"name": "radio"
		},
		"radio_button": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "radio_button",
			"code_points": [
				"1f518"
			],
			"keywords": [
				"circle",
				"input",
				"symbol"
			],
			"name": "radio button"
		},
		"radioactive": {
			"aliases": [
				"radioactive_sign"
			],
			"ascii_arts": [],
			"category": "symbols",
			"code": "radioactive",
			"code_points": [
				"2622"
			],
			"keywords": [
				"science",
				"symbol"
			],
			"name": "radioactive sign"
		},
		"rage": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "rage",
			"code_points": [
				"1f621"
			],
			"keywords": [
				"anger",
				"angry",
				"despise",
				"emotion",
				"hate",
				"irate",
				"mad",
				"pout",
				"rage",
				"smiley"
			],
			"name": "pouting face"
		},
		"railway_car": {
			"aliases": [],
			"ascii_arts": [],
			"category": "travel",
			"code": "railway_car",
			"code_points": [
				"1f683"
			],
			"keywords": [
				"car",
				"coach",
				"rail",
				"railway",
				"train",
				"transportation",
				"travel",
				"vehicle"
			],
			"name": "railway car"
		},
		"railway_track": {
			"aliases": [
				"railroad_track"
			],
			"ascii_arts": [],
			"category": "travel",
			"code": "railway_track",
			"code_points": [
				"1f6e4"
			],
			"keywords": [
				"locomotive",
				"subway",
				"train",
				"transit",
				"travel",
				"trolley",
				"vacation"
			],
			"name": "railway track"
		},
		"rainbow": {
			"aliases": [],
			"ascii_arts": [],
			"category": "travel",
			"code": "rainbow",
			"code_points": [
				"1f308"
			],
			"keywords": [
				"color",
				"diversity",
				"gay",
				"gold",
				"happy",
				"leprechaun",
				"nature",
				"photo",
				"pride",
				"rain",
				"rainbow",
				"refract",
				"sky",
				"spectrum",
				"unicorn",
				"weather"
			],
			"name": "rainbow"
		},
		"raised_back_of_hand": {
			"aliases": [
				"back_of_hand"
			],
			"ascii_arts": [],
			"category": "people",
			"code": "raised_back_of_hand",
			"code_points": [
				"1f91a"
			],
			"keywords": [],
			"name": "raised back of hand"
		},
		"raised_back_of_hand_tone1": {
			"aliases": [
				"back_of_hand_tone1"
			],
			"ascii_arts": [],
			"category": "people",
			"code": "raised_back_of_hand_tone1",
			"code_points": [
				"1f91a",
				"1f3fb"
			],
			"keywords": [],
			"name": "raised back of hand tone 1"
		},
		"raised_back_of_hand_tone2": {
			"aliases": [
				"back_of_hand_tone2"
			],
			"ascii_arts": [],
			"category": "people",
			"code": "raised_back_of_hand_tone2",
			"code_points": [
				"1f91a",
				"1f3fc"
			],
			"keywords": [],
			"name": "raised back of hand tone 2"
		},
		"raised_back_of_hand_tone3": {
			"aliases": [
				"back_of_hand_tone3"
			],
			"ascii_arts": [],
			"category": "people",
			"code": "raised_back_of_hand_tone3",
			"code_points": [
				"1f91a",
				"1f3fd"
			],
			"keywords": [],
			"name": "raised back of hand tone 3"
		},
		"raised_back_of_hand_tone4": {
			"aliases": [
				"back_of_hand_tone4"
			],
			"ascii_arts": [],
			"category": "people",
			"code": "raised_back_of_hand_tone4",
			"code_points": [
				"1f91a",
				"1f3fe"
			],
			"keywords": [],
			"name": "raised back of hand tone 4"
		},
		"raised_back_of_hand_tone5": {
			"aliases": [
				"back_of_hand_tone5"
			],
			"ascii_arts": [],
			"category": "people",
			"code": "raised_back_of_hand_tone5",
			"code_points": [
				"1f91a",
				"1f3ff"
			],
			"keywords": [],
			"name": "raised back of hand tone 5"
		},
		"raised_hand": {
			"aliases": [
				"hand"
			],
			"ascii_arts": [],
			"category": "people",
			"code": "raised_hand",
			"code_points": [
				"270b"
			],
			"keywords": [
				"body",
				"diversity",
				"female",
				"girl",
				"girls night",
				"hands",
				"hi",
				"woman"
			],
			"name": "raised hand"
		},
		"raised_hand_tone1": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "raised_hand_tone1",
			"code_points": [
				"270b",
				"1f3fb"
			],
			"keywords": [
				"female",
				"girl",
				"woman"
			],
			"name": "raised hand tone 1"
		},
		"raised_hand_tone2": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "raised_hand_tone2",
			"code_points": [
				"270b",
				"1f3fc"
			],
			"keywords": [
				"female",
				"girl",
				"woman"
			],
			"name": "raised hand tone 2"
		},
		"raised_hand_tone3": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "raised_hand_tone3",
			"code_points": [
				"270b",
				"1f3fd"
			],
			"keywords": [
				"female",
				"girl",
				"woman"
			],
			"name": "raised hand tone 3"
		},
		"raised_hand_tone4": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "raised_hand_tone4",
			"code_points": [
				"270b",
				"1f3fe"
			],
			"keywords": [
				"female",
				"girl",
				"woman"
			],
			"name": "raised hand tone 4"
		},
		"raised_hand_tone5": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "raised_hand_tone5",
			"code_points": [
				"270b",
				"1f3ff"
			],
			"keywords": [
				"female",
				"girl",
				"woman"
			],
			"name": "raised hand tone 5"
		},
		"raised_hands": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "raised_hands",
			"code_points": [
				"1f64c"
			],
			"keywords": [
				"banzai",
				"body",
				"diversity",
				"gesture",
				"good",
				"hands",
				"hooray",
				"parties",
				"perfect",
				"winning",
				"woot",
				"yay"
			],
			"name": "person raising both hands in celebration"
		},
		"raised_hands_tone1": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "raised_hands_tone1",
			"code_points": [
				"1f64c",
				"1f3fb"
			],
			"keywords": [
				"banzai",
				"gesture",
				"hooray",
				"raised",
				"winning",
				"woot",
				"yay"
			],
			"name": "person raising both hands in celebration tone 1"
		},
		"raised_hands_tone2": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "raised_hands_tone2",
			"code_points": [
				"1f64c",
				"1f3fc"
			],
			"keywords": [
				"banzai",
				"gesture",
				"hooray",
				"raised",
				"winning",
				"woot",
				"yay"
			],
			"name": "person raising both hands in celebration tone 2"
		},
		"raised_hands_tone3": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "raised_hands_tone3",
			"code_points": [
				"1f64c",
				"1f3fd"
			],
			"keywords": [
				"banzai",
				"gesture",
				"hooray",
				"raised",
				"winning",
				"woot",
				"yay"
			],
			"name": "person raising both hands in celebration tone 3"
		},
		"raised_hands_tone4": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "raised_hands_tone4",
			"code_points": [
				"1f64c",
				"1f3fe"
			],
			"keywords": [
				"banzai",
				"gesture",
				"hooray",
				"raised",
				"winning",
				"woot",
				"yay"
			],
			"name": "person raising both hands in celebration tone 4"
		},
		"raised_hands_tone5": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "raised_hands_tone5",
			"code_points": [
				"1f64c",
				"1f3ff"
			],
			"keywords": [
				"banzai",
				"gesture",
				"hooray",
				"raised",
				"winning",
				"woot",
				"yay"
			],
			"name": "person raising both hands in celebration tone 5"
		},
		"raising_hand": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "raising_hand",
			"code_points": [
				"1f64b"
			],
			"keywords": [
				"answer",
				"attention",
				"diversity",
				"female",
				"girl",
				"hand",
				"notice",
				"people",
				"raise",
				"woman",
				"women"
			],
			"name": "happy person raising one hand"
		},
		"raising_hand_tone1": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "raising_hand_tone1",
			"code_points": [
				"1f64b",
				"1f3fb"
			],
			"keywords": [
				"answer",
				"attention",
				"female",
				"girl",
				"notice",
				"raise",
				"woman"
			],
			"name": "happy person raising one hand tone1"
		},
		"raising_hand_tone2": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "raising_hand_tone2",
			"code_points": [
				"1f64b",
				"1f3fc"
			],
			"keywords": [
				"answer",
				"attention",
				"female",
				"girl",
				"notice",
				"raise",
				"woman"
			],
			"name": "happy person raising one hand tone2"
		},
		"raising_hand_tone3": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "raising_hand_tone3",
			"code_points": [
				"1f64b",
				"1f3fd"
			],
			"keywords": [
				"answer",
				"attention",
				"female",
				"girl",
				"notice",
				"raise",
				"woman"
			],
			"name": "happy person raising one hand tone3"
		},
		"raising_hand_tone4": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "raising_hand_tone4",
			"code_points": [
				"1f64b",
				"1f3fe"
			],
			"keywords": [
				"answer",
				"attention",
				"female",
				"girl",
				"notice",
				"raise",
				"woman"
			],
			"name": "happy person raising one hand tone4"
		},
		"raising_hand_tone5": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "raising_hand_tone5",
			"code_points": [
				"1f64b",
				"1f3ff"
			],
			"keywords": [
				"answer",
				"attention",
				"female",
				"girl",
				"notice",
				"raise",
				"woman"
			],
			"name": "happy person raising one hand tone5"
		},
		"ram": {
			"aliases": [],
			"ascii_arts": [],
			"category": "nature",
			"code": "ram",
			"code_points": [
				"1f40f"
			],
			"keywords": [
				"animal",
				"horn",
				"horns",
				"male",
				"nature",
				"ram",
				"sheep",
				"wildlife"
			],
			"name": "ram"
		},
		"ramen": {
			"aliases": [],
			"ascii_arts": [],
			"category": "food",
			"code": "ramen",
			"code_points": [
				"1f35c"
			],
			"keywords": [
				"bowl",
				"chipsticks",
				"food",
				"japan",
				"japanese",
				"noodle",
				"noodles",
				"ramen",
				"soup",
				"steaming"
			],
			"name": "steaming bowl"
		},
		"rat": {
			"aliases": [],
			"ascii_arts": [],
			"category": "nature",
			"code": "rat",
			"code_points": [
				"1f400"
			],
			"keywords": [
				"animal",
				"crooked",
				"mouse",
				"rat",
				"rodent",
				"snitch"
			],
			"name": "rat"
		},
		"record_button": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "record_button",
			"code_points": [
				"23fa"
			],
			"keywords": [
				"circle",
				"sound",
				"symbol"
			],
			"name": "black circle for record"
		},
		"recycle": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "recycle",
			"code_points": [
				"267b",
				"fe0f"
			],
			"keywords": [
				"arrow",
				"environment",
				"garbage",
				"symbol",
				"trash"
			],
			"name": "black universal recycling symbol"
		},
		"red_car": {
			"aliases": [
				"car"
			],
			"ascii_arts": [],
			"category": "travel",
			"code": "red_car",
			"code_points": [
				"1f697"
			],
			"keywords": [
				"car",
				"transportation",
				"travel",
				"vehicle"
			],
			"name": "automobile"
		},
		"red_circle": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "red_circle",
			"code_points": [
				"1f534"
			],
			"keywords": [
				"circle",
				"shape",
				"shapes",
				"symbol"
			],
			"name": "large red circle"
		},
		"registered": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "registered",
			"code_points": [
				"ae"
			],
			"keywords": [
				"alphabet",
				"circle",
				"symbol"
			],
			"name": "registered sign"
		},
		"relaxed": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "relaxed",
			"code_points": [
				"263a",
				"fe0f"
			],
			"keywords": [
				"blush",
				"face",
				"happiness",
				"happy",
				"massage",
				"smile",
				"smiley"
			],
			"name": "white smiling face"
		},
		"relieved": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "relieved",
			"code_points": [
				"1f60c"
			],
			"keywords": [
				"emotion",
				"face",
				"happiness",
				"massage",
				"phew",
				"relaxed",
				"relief",
				"relieved",
				"satisfied",
				"smiley"
			],
			"name": "relieved face"
		},
		"reminder_ribbon": {
			"aliases": [],
			"ascii_arts": [],
			"category": "activity",
			"code": "reminder_ribbon",
			"code_points": [
				"1f397"
			],
			"keywords": [
				"award",
				"awareness"
			],
			"name": "reminder ribbon"
		},
		"repeat": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "repeat",
			"code_points": [
				"1f501"
			],
			"keywords": [
				"arrow",
				"loop",
				"record",
				"symbol"
			],
			"name": "clockwise rightwards and leftwards open circle arr"
		},
		"repeat_one": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "repeat_one",
			"code_points": [
				"1f502"
			],
			"keywords": [
				"arrow",
				"blue-square",
				"loop",
				"symbol"
			],
			"name": "clockwise rightwards and leftwards open circle arr"
		},
		"restroom": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "restroom",
			"code_points": [
				"1f6bb"
			],
			"keywords": [
				"bathroom",
				"blue-square",
				"man",
				"restroom",
				"shared",
				"sign",
				"symbol",
				"toilet",
				"unisex",
				"woman"
			],
			"name": "restroom"
		},
		"revolving_hearts": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "revolving_hearts",
			"code_points": [
				"1f49e"
			],
			"keywords": [
				"affection",
				"circle",
				"heart",
				"hearts",
				"like",
				"love",
				"lovers",
				"moving",
				"multiple",
				"revolving",
				"symbol",
				"valentines"
			],
			"name": "revolving hearts"
		},
		"rewind": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "rewind",
			"code_points": [
				"23ea"
			],
			"keywords": [
				"arrow",
				"blue-square",
				"play",
				"symbol"
			],
			"name": "black left-pointing double triangle"
		},
		"rhino": {
			"aliases": [
				"rhinoceros"
			],
			"ascii_arts": [],
			"category": "nature",
			"code": "rhino",
			"code_points": [
				"1f98f"
			],
			"keywords": [],
			"name": "rhinoceros"
		},
		"ribbon": {
			"aliases": [],
			"ascii_arts": [],
			"category": "objects",
			"code": "ribbon",
			"code_points": [
				"1f380"
			],
			"keywords": [
				"birthday",
				"bowtie",
				"decorate",
				"decoration",
				"gift",
				"girl",
				"lace",
				"object",
				"pink",
				"ribbon",
				"wrap"
			],
			"name": "ribbon"
		},
		"rice": {
			"aliases": [],
			"ascii_arts": [],
			"category": "food",
			"code": "rice",
			"code_points": [
				"1f35a"
			],
			"keywords": [
				"bowl",
				"food",
				"grain",
				"japan",
				"rice",
				"sushi",
				"white"
			],
			"name": "cooked rice"
		},
		"rice_ball": {
			"aliases": [],
			"ascii_arts": [],
			"category": "food",
			"code": "rice_ball",
			"code_points": [
				"1f359"
			],
			"keywords": [
				"ball",
				"food",
				"japan",
				"japanese",
				"nori",
				"rice",
				"seaweed",
				"sushi",
				"white"
			],
			"name": "rice ball"
		},
		"rice_cracker": {
			"aliases": [],
			"ascii_arts": [],
			"category": "food",
			"code": "rice_cracker",
			"code_points": [
				"1f358"
			],
			"keywords": [
				"cracker",
				"food",
				"japanese",
				"rice",
				"seaweed",
				"sushi"
			],
			"name": "rice cracker"
		},
		"rice_scene": {
			"aliases": [],
			"ascii_arts": [],
			"category": "travel",
			"code": "rice_scene",
			"code_points": [
				"1f391"
			],
			"keywords": [
				"autumn",
				"festival",
				"moon",
				"observing",
				"otsukimi",
				"photo",
				"places",
				"rice",
				"scene",
				"sky",
				"space",
				"travel",
				"tsukimi",
				"viewing"
			],
			"name": "moon viewing ceremony"
		},
		"right_facing_fist": {
			"aliases": [
				"right_fist"
			],
			"ascii_arts": [],
			"category": "people",
			"code": "right_facing_fist",
			"code_points": [
				"1f91c"
			],
			"keywords": [],
			"name": "right-facing fist"
		},
		"right_facing_fist_tone1": {
			"aliases": [
				"right_fist_tone1"
			],
			"ascii_arts": [],
			"category": "people",
			"code": "right_facing_fist_tone1",
			"code_points": [
				"1f91c",
				"1f3fb"
			],
			"keywords": [],
			"name": "right facing fist tone 1"
		},
		"right_facing_fist_tone2": {
			"aliases": [
				"right_fist_tone2"
			],
			"ascii_arts": [],
			"category": "people",
			"code": "right_facing_fist_tone2",
			"code_points": [
				"1f91c",
				"1f3fc"
			],
			"keywords": [],
			"name": "right facing fist tone 2"
		},
		"right_facing_fist_tone3": {
			"aliases": [
				"right_fist_tone3"
			],
			"ascii_arts": [],
			"category": "people",
			"code": "right_facing_fist_tone3",
			"code_points": [
				"1f91c",
				"1f3fd"
			],
			"keywords": [],
			"name": "right facing fist tone 3"
		},
		"right_facing_fist_tone4": {
			"aliases": [
				"right_fist_tone4"
			],
			"ascii_arts": [],
			"category": "people",
			"code": "right_facing_fist_tone4",
			"code_points": [
				"1f91c",
				"1f3fe"
			],
			"keywords": [],
			"name": "right facing fist tone 4"
		},
		"right_facing_fist_tone5": {
			"aliases": [
				"right_fist_tone5"
			],
			"ascii_arts": [],
			"category": "people",
			"code": "right_facing_fist_tone5",
			"code_points": [
				"1f91c",
				"1f3ff"
			],
			"keywords": [],
			"name": "right facing fist tone 5"
		},
		"ring": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "ring",
			"code_points": [
				"1f48d"
			],
			"keywords": [
				"accessories",
				"fashion",
				"gem",
				"marriage",
				"object",
				"propose",
				"valentines",
				"wedding"
			],
			"name": "ring"
		},
		"robot": {
			"aliases": [
				"robot_face"
			],
			"ascii_arts": [],
			"category": "people",
			"code": "robot",
			"code_points": [
				"1f916"
			],
			"keywords": [
				"monster",
				"robot"
			],
			"name": "robot face"
		},
		"rocket": {
			"aliases": [],
			"ascii_arts": [],
			"category": "travel",
			"code": "rocket",
			"code_points": [
				"1f680"
			],
			"keywords": [
				"astronaut",
				"blast",
				"cosmonaut",
				"fly",
				"launch",
				"object",
				"rocket",
				"ship",
				"space",
				"spacecraft",
				"staffmode",
				"transportation"
			],
			"name": "rocket"
		},
		"rofl": {
			"aliases": [
				"rolling_on_the_floor_laughing"
			],
			"ascii_arts": [],
			"category": "people",
			"code": "rofl",
			"code_points": [
				"1f923"
			],
			"keywords": [],
			"name": "rolling on the floor laughing"
		},
		"roller_coaster": {
			"aliases": [],
			"ascii_arts": [],
			"category": "travel",
			"code": "roller_coaster",
			"code_points": [
				"1f3a2"
			],
			"keywords": [
				"amusement",
				"carnival",
				"coaster",
				"entertainment",
				"fair",
				"fun",
				"park",
				"photo",
				"places",
				"play",
				"playground",
				"ride",
				"roller",
				"roller coaster",
				"vacation"
			],
			"name": "roller coaster"
		},
		"rolling_eyes": {
			"aliases": [
				"face_with_rolling_eyes"
			],
			"ascii_arts": [],
			"category": "people",
			"code": "rolling_eyes",
			"code_points": [
				"1f644"
			],
			"keywords": [
				"emotion",
				"mad",
				"rolling eyes",
				"sarcastic",
				"smiley"
			],
			"name": "face with rolling eyes"
		},
		"rooster": {
			"aliases": [],
			"ascii_arts": [],
			"category": "nature",
			"code": "rooster",
			"code_points": [
				"1f413"
			],
			"keywords": [
				"animal",
				"chicken",
				"cock",
				"cock-a-doodle-doo",
				"cockerel",
				"crowing",
				"male",
				"nature",
				"rooster"
			],
			"name": "rooster"
		},
		"rose": {
			"aliases": [],
			"ascii_arts": [],
			"category": "nature",
			"code": "rose",
			"code_points": [
				"1f339"
			],
			"keywords": [
				"beautiful",
				"condolence",
				"flower",
				"flowers",
				"fragrant",
				"love",
				"nature",
				"petals",
				"plant",
				"rip",
				"romance",
				"rose",
				"thorns",
				"valentines"
			],
			"name": "rose"
		},
		"rosette": {
			"aliases": [],
			"ascii_arts": [],
			"category": "activity",
			"code": "rosette",
			"code_points": [
				"1f3f5"
			],
			"keywords": [
				"flower",
				"tropical"
			],
			"name": "rosette"
		},
		"rotating_light": {
			"aliases": [],
			"ascii_arts": [],
			"category": "travel",
			"code": "rotating_light",
			"code_points": [
				"1f6a8"
			],
			"keywords": [
				"911",
				"ambulance",
				"emergency",
				"light",
				"object",
				"police",
				"transportation"
			],
			"name": "police cars revolving light"
		},
		"round_pushpin": {
			"aliases": [],
			"ascii_arts": [],
			"category": "objects",
			"code": "round_pushpin",
			"code_points": [
				"1f4cd"
			],
			"keywords": [
				"object",
				"office",
				"stationery"
			],
			"name": "round pushpin"
		},
		"rowboat": {
			"aliases": [],
			"ascii_arts": [],
			"category": "activity",
			"code": "rowboat",
			"code_points": [
				"1f6a3"
			],
			"keywords": [
				"boat",
				"diversity",
				"hobby",
				"men",
				"oar",
				"paddle",
				"row",
				"rowing",
				"ship",
				"sport",
				"sports",
				"water",
				"workout"
			],
			"name": "rowboat"
		},
		"rowboat_tone1": {
			"aliases": [],
			"ascii_arts": [],
			"category": "activity",
			"code": "rowboat_tone1",
			"code_points": [
				"1f6a3",
				"1f3fb"
			],
			"keywords": [
				"boat",
				"hobby",
				"oar",
				"paddle",
				"row",
				"ship",
				"water"
			],
			"name": "rowboat tone 1"
		},
		"rowboat_tone2": {
			"aliases": [],
			"ascii_arts": [],
			"category": "activity",
			"code": "rowboat_tone2",
			"code_points": [
				"1f6a3",
				"1f3fc"
			],
			"keywords": [
				"boat",
				"hobby",
				"oar",
				"paddle",
				"row",
				"ship",
				"water"
			],
			"name": "rowboat tone 2"
		},
		"rowboat_tone3": {
			"aliases": [],
			"ascii_arts": [],
			"category": "activity",
			"code": "rowboat_tone3",
			"code_points": [
				"1f6a3",
				"1f3fd"
			],
			"keywords": [
				"boat",
				"hobby",
				"oar",
				"paddle",
				"row",
				"ship",
				"water"
			],
			"name": "rowboat tone 3"
		},
		"rowboat_tone4": {
			"aliases": [],
			"ascii_arts": [],
			"category": "activity",
			"code": "rowboat_tone4",
			"code_points": [
				"1f6a3",
				"1f3fe"
			],
			"keywords": [
				"boat",
				"hobby",
				"oar",
				"paddle",
				"row",
				"ship",
				"water"
			],
			"name": "rowboat tone 4"
		},
		"rowboat_tone5": {
			"aliases": [],
			"ascii_arts": [],
			"category": "activity",
			"code": "rowboat_tone5",
			"code_points": [
				"1f6a3",
				"1f3ff"
			],
			"keywords": [
				"boat",
				"hobby",
				"oar",
				"paddle",
				"row",
				"ship",
				"water"
			],
			"name": "rowboat tone 5"
		},
		"rugby_football": {
			"aliases": [],
			"ascii_arts": [],
			"category": "activity",
			"code": "rugby_football",
			"code_points": [
				"1f3c9"
			],
			"keywords": [
				"ball",
				"england",
				"football",
				"game",
				"rugby",
				"sport",
				"sports",
				"team"
			],
			"name": "rugby football"
		},
		"runner": {
			"aliases": [
				"running"
			],
			"ascii_arts": [],
			"category": "people",
			"code": "runner",
			"code_points": [
				"1f3c3"
			],
			"keywords": [
				"boys night",
				"dash",
				"diversity",
				"exercise",
				"jog",
				"man",
				"men",
				"people",
				"race",
				"run",
				"runner",
				"sprint",
				"walking"
			],
			"name": "runner"
		},
		"runner_tone1": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "runner_tone1",
			"code_points": [
				"1f3c3",
				"1f3fb"
			],
			"keywords": [
				"dash",
				"exercise",
				"jog",
				"man",
				"marathon",
				"race",
				"run",
				"sprint"
			],
			"name": "runner tone 1"
		},
		"runner_tone2": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "runner_tone2",
			"code_points": [
				"1f3c3",
				"1f3fc"
			],
			"keywords": [
				"dash",
				"exercise",
				"jog",
				"man",
				"marathon",
				"race",
				"run",
				"sprint"
			],
			"name": "runner tone 2"
		},
		"runner_tone3": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "runner_tone3",
			"code_points": [
				"1f3c3",
				"1f3fd"
			],
			"keywords": [
				"dash",
				"exercise",
				"jog",
				"man",
				"marathon",
				"race",
				"run",
				"sprint"
			],
			"name": "runner tone 3"
		},
		"runner_tone4": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "runner_tone4",
			"code_points": [
				"1f3c3",
				"1f3fe"
			],
			"keywords": [
				"dash",
				"exercise",
				"jog",
				"man",
				"marathon",
				"race",
				"run",
				"sprint"
			],
			"name": "runner tone 4"
		},
		"runner_tone5": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "runner_tone5",
			"code_points": [
				"1f3c3",
				"1f3ff"
			],
			"keywords": [
				"dash",
				"exercise",
				"jog",
				"man",
				"marathon",
				"race",
				"run",
				"sprint"
			],
			"name": "runner tone 5"
		},
		"running_shirt_with_sash": {
			"aliases": [],
			"ascii_arts": [],
			"category": "activity",
			"code": "running_shirt_with_sash",
			"code_points": [
				"1f3bd"
			],
			"keywords": [
				"award",
				"cloths",
				"compete",
				"pageant",
				"play",
				"run",
				"running",
				"shirt",
				"sports"
			],
			"name": "running shirt with sash"
		},
		"sa": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "sa",
			"code_points": [
				"1f202"
			],
			"keywords": [
				"blue-square",
				"japanese",
				"symbol",
				"word"
			],
			"name": "squared katakana sa"
		},
		"sagittarius": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "sagittarius",
			"code_points": [
				"2650",
				"fe0f"
			],
			"keywords": [
				"archer",
				"astrology",
				"centaur",
				"constellation",
				"greek",
				"horoscope",
				"sagittarius",
				"sign",
				"stars",
				"symbol",
				"zodiac"
			],
			"name": "sagittarius"
		},
		"sailboat": {
			"aliases": [
				"boat"
			],
			"ascii_arts": [],
			"category": "travel",
			"code": "sailboat",
			"code_points": [
				"26f5",
				"fe0f"
			],
			"keywords": [
				"boat",
				"ship",
				"transportation",
				"travel",
				"vacation"
			],
			"name": "sailboat"
		},
		"sake": {
			"aliases": [],
			"ascii_arts": [],
			"category": "food",
			"code": "sake",
			"code_points": [
				"1f376"
			],
			"keywords": [
				"alcohol",
				"beverage",
				"drink",
				"drunk",
				"ferment",
				"girls night",
				"japan",
				"japanese",
				"rice",
				"sake",
				"wine"
			],
			"name": "sake bottle and cup"
		},
		"salad": {
			"aliases": [
				"green_salad"
			],
			"ascii_arts": [],
			"category": "food",
			"code": "salad",
			"code_points": [
				"1f957"
			],
			"keywords": [],
			"name": "green salad"
		},
		"sandal": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "sandal",
			"code_points": [
				"1f461"
			],
			"keywords": [
				"accessories",
				"fashion",
				"shoe",
				"shoes"
			],
			"name": "womans sandal"
		},
		"santa": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "santa",
			"code_points": [
				"1f385"
			],
			"keywords": [
				"christmas",
				"diversity",
				"father",
				"father christmas",
				"festival",
				"gifts",
				"hat",
				"ho ho ho",
				"holiday",
				"holidays",
				"jolly",
				"male",
				"man",
				"naughty",
				"nice",
				"north pole",
				"people",
				"presents",
				"saint nick",
				"santa",
				"sleigh",
				"winter",
				"xmas"
			],
			"name": "father christmas"
		},
		"santa_tone1": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "santa_tone1",
			"code_points": [
				"1f385",
				"1f3fb"
			],
			"keywords": [
				"festival",
				"gifts",
				"ho ho ho",
				"holiday",
				"jolly",
				"male",
				"man",
				"naughty",
				"nice",
				"north pole",
				"presents",
				"saint nick",
				"santa",
				"sleigh",
				"xmas"
			],
			"name": "father christmas tone 1"
		},
		"santa_tone2": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "santa_tone2",
			"code_points": [
				"1f385",
				"1f3fc"
			],
			"keywords": [
				"festival",
				"gifts",
				"ho ho ho",
				"holiday",
				"jolly",
				"male",
				"man",
				"naughty",
				"nice",
				"north pole",
				"presents",
				"saint nick",
				"santa",
				"sleigh",
				"xmas"
			],
			"name": "father christmas tone 2"
		},
		"santa_tone3": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "santa_tone3",
			"code_points": [
				"1f385",
				"1f3fd"
			],
			"keywords": [
				"festival",
				"gifts",
				"ho ho ho",
				"holiday",
				"jolly",
				"male",
				"man",
				"naughty",
				"nice",
				"north pole",
				"presents",
				"saint nick",
				"santa",
				"sleigh",
				"xmas"
			],
			"name": "father christmas tone 3"
		},
		"santa_tone4": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "santa_tone4",
			"code_points": [
				"1f385",
				"1f3fe"
			],
			"keywords": [
				"festival",
				"gifts",
				"ho ho ho",
				"holiday",
				"jolly",
				"male",
				"man",
				"naughty",
				"nice",
				"north pole",
				"presents",
				"saint nick",
				"santa",
				"sleigh",
				"xmas"
			],
			"name": "father christmas tone 4"
		},
		"santa_tone5": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "santa_tone5",
			"code_points": [
				"1f385",
				"1f3ff"
			],
			"keywords": [
				"festival",
				"gifts",
				"ho ho ho",
				"holiday",
				"jolly",
				"male",
				"man",
				"naughty",
				"nice",
				"north pole",
				"presents",
				"saint nick",
				"santa",
				"sleigh",
				"xmas"
			],
			"name": "father christmas tone 5"
		},
		"satellite": {
			"aliases": [],
			"ascii_arts": [],
			"category": "objects",
			"code": "satellite",
			"code_points": [
				"1f4e1"
			],
			"keywords": [
				"communication",
				"object"
			],
			"name": "satellite antenna"
		},
		"satellite_orbital": {
			"aliases": [],
			"ascii_arts": [],
			"category": "travel",
			"code": "satellite_orbital",
			"code_points": [
				"1f6f0"
			],
			"keywords": [
				"communication",
				"object",
				"orbital",
				"space"
			],
			"name": "satellite"
		},
		"saxophone": {
			"aliases": [],
			"ascii_arts": [],
			"category": "activity",
			"code": "saxophone",
			"code_points": [
				"1f3b7"
			],
			"keywords": [
				"instrument",
				"instruments",
				"music",
				"sax",
				"saxophone",
				"woodwind"
			],
			"name": "saxophone"
		},
		"scales": {
			"aliases": [],
			"ascii_arts": [],
			"category": "objects",
			"code": "scales",
			"code_points": [
				"2696"
			],
			"keywords": [
				"balance",
				"justice",
				"libra",
				"object",
				"tool",
				"weight",
				"zodiac"
			],
			"name": "scales"
		},
		"school": {
			"aliases": [],
			"ascii_arts": [],
			"category": "travel",
			"code": "school",
			"code_points": [
				"1f3eb"
			],
			"keywords": [
				"building",
				"college",
				"education",
				"elementary",
				"high",
				"middle",
				"places",
				"school",
				"teach",
				"university"
			],
			"name": "school"
		},
		"school_satchel": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "school_satchel",
			"code_points": [
				"1f392"
			],
			"keywords": [
				"accessories",
				"adventure",
				"backpack",
				"bag",
				"education",
				"fashion",
				"hike",
				"office",
				"pack",
				"packing",
				"satchel",
				"school",
				"sightsee",
				"student",
				"travel",
				"vacation"
			],
			"name": "school satchel"
		},
		"scissors": {
			"aliases": [],
			"ascii_arts": [],
			"category": "objects",
			"code": "scissors",
			"code_points": [
				"2702",
				"fe0f"
			],
			"keywords": [
				"cut",
				"object",
				"office",
				"stationery",
				"tool",
				"weapon"
			],
			"name": "black scissors"
		},
		"scooter": {
			"aliases": [],
			"ascii_arts": [],
			"category": "travel",
			"code": "scooter",
			"code_points": [
				"1f6f4"
			],
			"keywords": [],
			"name": "scooter"
		},
		"scorpion": {
			"aliases": [],
			"ascii_arts": [],
			"category": "nature",
			"code": "scorpion",
			"code_points": [
				"1f982"
			],
			"keywords": [
				"animal",
				"insects",
				"reptile"
			],
			"name": "scorpion"
		},
		"scorpius": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "scorpius",
			"code_points": [
				"264f",
				"fe0f"
			],
			"keywords": [
				"astrology",
				"constellation",
				"greek",
				"horoscope",
				"scorpio",
				"scorpion",
				"scorpius",
				"sign",
				"stars",
				"symbol",
				"zodiac"
			],
			"name": "scorpius"
		},
		"scream": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "scream",
			"code_points": [
				"1f631"
			],
			"keywords": [
				"alien",
				"artist",
				"emotion",
				"face",
				"munch",
				"omg",
				"painting",
				"scream",
				"smiley",
				"surprised",
				"wow"
			],
			"name": "face screaming in fear"
		},
		"scream_cat": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "scream_cat",
			"code_points": [
				"1f640"
			],
			"keywords": [
				"animal",
				"artist",
				"cat",
				"cats",
				"exhausted",
				"finals",
				"munch",
				"painting",
				"school",
				"scream",
				"sleepy",
				"study",
				"tired",
				"tiredness",
				"weary"
			],
			"name": "weary cat face"
		},
		"scroll": {
			"aliases": [],
			"ascii_arts": [],
			"category": "objects",
			"code": "scroll",
			"code_points": [
				"1f4dc"
			],
			"keywords": [
				"documents",
				"object",
				"office"
			],
			"name": "scroll"
		},
		"seat": {
			"aliases": [],
			"ascii_arts": [],
			"category": "travel",
			"code": "seat",
			"code_points": [
				"1f4ba"
			],
			"keywords": [
				"object",
				"sit",
				"transportation",
				"travel",
				"vacation"
			],
			"name": "seat"
		},
		"second_place": {
			"aliases": [
				"second_place_medal"
			],
			"ascii_arts": [],
			"category": "activity",
			"code": "second_place",
			"code_points": [
				"1f948"
			],
			"keywords": [],
			"name": "second place medal"
		},
		"secret": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "secret",
			"code_points": [
				"3299",
				"fe0f"
			],
			"keywords": [
				"japan",
				"privacy",
				"symbol"
			],
			"name": "circled ideograph secret"
		},
		"see_no_evil": {
			"aliases": [],
			"ascii_arts": [],
			"category": "nature",
			"code": "see_no_evil",
			"code_points": [
				"1f648"
			],
			"keywords": [
				"animal",
				"eyes",
				"mizaru",
				"monkey",
				"nature",
				"see",
				"sight",
				"vision"
			],
			"name": "see-no-evil monkey"
		},
		"seedling": {
			"aliases": [],
			"ascii_arts": [],
			"category": "nature",
			"code": "seedling",
			"code_points": [
				"1f331"
			],
			"keywords": [
				"grass",
				"grow",
				"lawn",
				"leaf",
				"nature",
				"new",
				"plant",
				"seedling",
				"start"
			],
			"name": "seedling"
		},
		"selfie": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "selfie",
			"code_points": [
				"1f933"
			],
			"keywords": [],
			"name": "selfie"
		},
		"selfie_tone1": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "selfie_tone1",
			"code_points": [
				"1f933",
				"1f3fb"
			],
			"keywords": [],
			"name": "selfie tone 1"
		},
		"selfie_tone2": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "selfie_tone2",
			"code_points": [
				"1f933",
				"1f3fc"
			],
			"keywords": [],
			"name": "selfie tone 2"
		},
		"selfie_tone3": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "selfie_tone3",
			"code_points": [
				"1f933",
				"1f3fd"
			],
			"keywords": [],
			"name": "selfie tone 3"
		},
		"selfie_tone4": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "selfie_tone4",
			"code_points": [
				"1f933",
				"1f3fe"
			],
			"keywords": [],
			"name": "selfie tone 4"
		},
		"selfie_tone5": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "selfie_tone5",
			"code_points": [
				"1f933",
				"1f3ff"
			],
			"keywords": [],
			"name": "selfie tone 5"
		},
		"seven": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "seven",
			"code_points": [
				"37",
				"fe0f",
				"20e3"
			],
			"keywords": [
				"7",
				"blue-square",
				"math",
				"number",
				"numbers",
				"prime",
				"symbol"
			],
			"name": "keycap digit seven"
		},
		"shallow_pan_of_food": {
			"aliases": [
				"paella"
			],
			"ascii_arts": [],
			"category": "food",
			"code": "shallow_pan_of_food",
			"code_points": [
				"1f958"
			],
			"keywords": [
				"pan of food"
			],
			"name": "shallow pan of food"
		},
		"shamrock": {
			"aliases": [],
			"ascii_arts": [],
			"category": "nature",
			"code": "shamrock",
			"code_points": [
				"2618"
			],
			"keywords": [
				"leaf",
				"luck",
				"nature",
				"plant"
			],
			"name": "shamrock"
		},
		"shark": {
			"aliases": [],
			"ascii_arts": [],
			"category": "nature",
			"code": "shark",
			"code_points": [
				"1f988"
			],
			"keywords": [],
			"name": "shark"
		},
		"shaved_ice": {
			"aliases": [],
			"ascii_arts": [],
			"category": "food",
			"code": "shaved_ice",
			"code_points": [
				"1f367"
			],
			"keywords": [
				"desert",
				"dessert",
				"flavoring",
				"food",
				"hot",
				"ice",
				"shaved",
				"syrup",
				"treat"
			],
			"name": "shaved ice"
		},
		"sheep": {
			"aliases": [],
			"ascii_arts": [],
			"category": "nature",
			"code": "sheep",
			"code_points": [
				"1f411"
			],
			"keywords": [
				"animal",
				"ewe",
				"female",
				"flock",
				"follower",
				"lamb",
				"nature",
				"sheep",
				"wool"
			],
			"name": "sheep"
		},
		"shell": {
			"aliases": [],
			"ascii_arts": [],
			"category": "nature",
			"code": "shell",
			"code_points": [
				"1f41a"
			],
			"keywords": [
				"beach",
				"crab",
				"nature",
				"nautilus",
				"sand",
				"sea",
				"shell",
				"spiral"
			],
			"name": "spiral shell"
		},
		"shield": {
			"aliases": [],
			"ascii_arts": [],
			"category": "objects",
			"code": "shield",
			"code_points": [
				"1f6e1"
			],
			"keywords": [
				"highway",
				"interstate",
				"object",
				"route",
				"sign"
			],
			"name": "shield"
		},
		"shinto_shrine": {
			"aliases": [],
			"ascii_arts": [],
			"category": "travel",
			"code": "shinto_shrine",
			"code_points": [
				"26e9"
			],
			"keywords": [
				"building",
				"places",
				"religion",
				"symbol",
				"travel",
				"vacation"
			],
			"name": "shinto shrine"
		},
		"ship": {
			"aliases": [],
			"ascii_arts": [],
			"category": "travel",
			"code": "ship",
			"code_points": [
				"1f6a2"
			],
			"keywords": [
				"boat",
				"ferry",
				"ship",
				"titanic",
				"transportation",
				"travel",
				"vacation"
			],
			"name": "ship"
		},
		"shirt": {
			"aliases": [
				"tshirt"
			],
			"ascii_arts": [],
			"category": "people",
			"code": "shirt",
			"code_points": [
				"1f455"
			],
			"keywords": [
				"cloth",
				"fashion"
			],
			"name": "t-shirt"
		},
		"shopping_bags": {
			"aliases": [],
			"ascii_arts": [],
			"category": "objects",
			"code": "shopping_bags",
			"code_points": [
				"1f6cd"
			],
			"keywords": [
				"birthday",
				"buy",
				"mall",
				"object",
				"parties",
				"purchase",
				"shop",
				"store"
			],
			"name": "shopping bags"
		},
		"shopping_cart": {
			"aliases": [
				"shopping_trolley"
			],
			"ascii_arts": [],
			"category": "objects",
			"code": "shopping_cart",
			"code_points": [
				"1f6d2"
			],
			"keywords": [],
			"name": "shopping trolley"
		},
		"shower": {
			"aliases": [],
			"ascii_arts": [],
			"category": "objects",
			"code": "shower",
			"code_points": [
				"1f6bf"
			],
			"keywords": [
				"bath",
				"bathroom",
				"clean",
				"lather",
				"object",
				"shampoo",
				"shower",
				"soap",
				"wash",
				"water"
			],
			"name": "shower"
		},
		"shrimp": {
			"aliases": [],
			"ascii_arts": [],
			"category": "nature",
			"code": "shrimp",
			"code_points": [
				"1f990"
			],
			"keywords": [],
			"name": "shrimp"
		},
		"shrug": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "shrug",
			"code_points": [
				"1f937"
			],
			"keywords": [],
			"name": "shrug"
		},
		"shrug_tone1": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "shrug_tone1",
			"code_points": [
				"1f937",
				"1f3fb"
			],
			"keywords": [],
			"name": "shrug tone 1"
		},
		"shrug_tone2": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "shrug_tone2",
			"code_points": [
				"1f937",
				"1f3fc"
			],
			"keywords": [],
			"name": "shrug tone 2"
		},
		"shrug_tone3": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "shrug_tone3",
			"code_points": [
				"1f937",
				"1f3fd"
			],
			"keywords": [],
			"name": "shrug tone 3"
		},
		"shrug_tone4": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "shrug_tone4",
			"code_points": [
				"1f937",
				"1f3fe"
			],
			"keywords": [],
			"name": "shrug tone 4"
		},
		"shrug_tone5": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "shrug_tone5",
			"code_points": [
				"1f937",
				"1f3ff"
			],
			"keywords": [],
			"name": "shrug tone 5"
		},
		"signal_strength": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "signal_strength",
			"code_points": [
				"1f4f6"
			],
			"keywords": [
				"blue-square",
				"symbol"
			],
			"name": "antenna with bars"
		},
		"six": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "six",
			"code_points": [
				"36",
				"fe0f",
				"20e3"
			],
			"keywords": [
				"6",
				"blue-square",
				"math",
				"number",
				"numbers",
				"symbol"
			],
			"name": "keycap digit six"
		},
		"six_pointed_star": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "six_pointed_star",
			"code_points": [
				"1f52f"
			],
			"keywords": [
				"jew",
				"purple-square",
				"religion",
				"star",
				"symbol"
			],
			"name": "six pointed star with middle dot"
		},
		"ski": {
			"aliases": [],
			"ascii_arts": [],
			"category": "activity",
			"code": "ski",
			"code_points": [
				"1f3bf"
			],
			"keywords": [
				"alpine",
				"cold",
				"cross-country",
				"downhill",
				"freestyle",
				"mountain",
				"poles",
				"powder",
				"ski",
				"skiing",
				"slalom",
				"snow",
				"sport",
				"sports",
				"winter"
			],
			"name": "ski and ski boot"
		},
		"skier": {
			"aliases": [],
			"ascii_arts": [],
			"category": "activity",
			"code": "skier",
			"code_points": [
				"26f7"
			],
			"keywords": [
				"cold",
				"hat",
				"person",
				"ski",
				"skiing",
				"snow",
				"sport",
				"travel",
				"vacation"
			],
			"name": "skier"
		},
		"skull": {
			"aliases": [
				"skeleton"
			],
			"ascii_arts": [],
			"category": "people",
			"code": "skull",
			"code_points": [
				"1f480"
			],
			"keywords": [
				"dead",
				"dying",
				"halloween",
				"skeleton",
				"skull"
			],
			"name": "skull"
		},
		"skull_crossbones": {
			"aliases": [
				"skull_and_crossbones"
			],
			"ascii_arts": [],
			"category": "objects",
			"code": "skull_crossbones",
			"code_points": [
				"2620"
			],
			"keywords": [
				"body",
				"dead",
				"death",
				"face",
				"monster",
				"person",
				"skull",
				"symbol"
			],
			"name": "skull and crossbones"
		},
		"sleeping": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "sleeping",
			"code_points": [
				"1f634"
			],
			"keywords": [
				"emotion",
				"face",
				"goodnight",
				"sleep",
				"sleeping",
				"sleepy",
				"smiley",
				"snore",
				"tired"
			],
			"name": "sleeping face"
		},
		"sleeping_accommodation": {
			"aliases": [],
			"ascii_arts": [],
			"category": "objects",
			"code": "sleeping_accommodation",
			"code_points": [
				"1f6cc"
			],
			"keywords": [
				"hotel",
				"motel",
				"rest",
				"tired"
			],
			"name": "sleeping accommodation"
		},
		"sleepy": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "sleepy",
			"code_points": [
				"1f62a"
			],
			"keywords": [
				"emotion",
				"exhausted",
				"face",
				"rest",
				"sick",
				"sleepy",
				"smiley",
				"tired"
			],
			"name": "sleepy face"
		},
		"slight_frown": {
			"aliases": [
				"slightly_frowning_face"
			],
			"ascii_arts": [],
			"category": "people",
			"code": "slight_frown",
			"code_points": [
				"1f641"
			],
			"keywords": [
				"disappointed",
				"emotion",
				"frown",
				"sad",
				"slight",
				"smiley",
				"unhappy"
			],
			"name": "slightly frowning face"
		},
		"slight_smile": {
			"aliases": [
				"slightly_smiling_face"
			],
			"ascii_arts": [],
			"category": "people",
			"code": "slight_smile",
			"code_points": [
				"1f642"
			],
			"keywords": [
				"happy",
				"slight",
				"smile",
				"smiley"
			],
			"name": "slightly smiling face"
		},
		"slot_machine": {
			"aliases": [],
			"ascii_arts": [],
			"category": "activity",
			"code": "slot_machine",
			"code_points": [
				"1f3b0"
			],
			"keywords": [
				"bet",
				"boys night",
				"gamble",
				"game",
				"luck",
				"machine",
				"one-armed bandit",
				"slot",
				"slots",
				"vegas"
			],
			"name": "slot machine"
		},
		"small_blue_diamond": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "small_blue_diamond",
			"code_points": [
				"1f539"
			],
			"keywords": [
				"shape",
				"shapes",
				"symbol"
			],
			"name": "small blue diamond"
		},
		"small_orange_diamond": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "small_orange_diamond",
			"code_points": [
				"1f538"
			],
			"keywords": [
				"shape",
				"shapes",
				"symbol"
			],
			"name": "small orange diamond"
		},
		"small_red_triangle": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "small_red_triangle",
			"code_points": [
				"1f53a"
			],
			"keywords": [
				"shape",
				"shapes",
				"symbol",
				"triangle"
			],
			"name": "up-pointing red triangle"
		},
		"small_red_triangle_down": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "small_red_triangle_down",
			"code_points": [
				"1f53b"
			],
			"keywords": [
				"shape",
				"shapes",
				"symbol",
				"triangle"
			],
			"name": "down-pointing red triangle"
		},
		"smile": {
			"aliases": [],
			"ascii_arts": [
				":)",
				":-)",
				":]",
				"=)",
				"=]"
			],
			"category": "people",
			"code": "smile",
			"code_points": [
				"1f604"
			],
			"keywords": [
				"emotion",
				"face",
				"funny",
				"haha",
				"happy",
				"joy",
				"laugh",
				"smile",
				"smiley",
				"smiling"
			],
			"name": "smiling face with open mouth and smiling eyes"
		},
		"smile_cat": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "smile_cat",
			"code_points": [
				"1f638"
			],
			"keywords": [
				"animal",
				"cat",
				"cats",
				"grin",
				"grinning",
				"happy",
				"smile"
			],
			"name": "grinning cat face with smiling eyes"
		},
		"smiley": {
			"aliases": [],
			"ascii_arts": [
				":-D",
				":D",
				"=D"
			],
			"category": "people",
			"code": "smiley",
			"code_points": [
				"1f603"
			],
			"keywords": [
				"emotion",
				"face",
				"good",
				"haha",
				"happy",
				"joy",
				"smile",
				"smiley",
				"smiling"
			],
			"name": "smiling face with open mouth"
		},
		"smiley_cat": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "smiley_cat",
			"code_points": [
				"1f63a"
			],
			"keywords": [
				"animal",
				"cat",
				"cats",
				"happy",
				"smile",
				"smiley"
			],
			"name": "smiling cat face with open mouth"
		},
		"smiling_imp": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "smiling_imp",
			"code_points": [
				"1f608"
			],
			"keywords": [
				"angry",
				"boys night",
				"devil",
				"horns",
				"impish",
				"monster",
				"silly",
				"smiley",
				"trouble"
			],
			"name": "smiling face with horns"
		},
		"smirk": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "smirk",
			"code_points": [
				"1f60f"
			],
			"keywords": [
				"conceited",
				"half-smile",
				"mean",
				"prank",
				"sarcastic",
				"sexy",
				"silly",
				"smile",
				"smiley",
				"smirk",
				"smirking",
				"smug"
			],
			"name": "smirking face"
		},
		"smirk_cat": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "smirk_cat",
			"code_points": [
				"1f63c"
			],
			"keywords": [
				"animal",
				"cat",
				"cats",
				"confidence",
				"confident",
				"smirk",
				"smirking",
				"wry"
			],
			"name": "cat face with wry smile"
		},
		"smoking": {
			"aliases": [],
			"ascii_arts": [],
			"category": "objects",
			"code": "smoking",
			"code_points": [
				"1f6ac"
			],
			"keywords": [
				"cancer",
				"cigarette",
				"drugs",
				"inhale",
				"kills",
				"lungs",
				"nicotine",
				"smoke",
				"smoking",
				"symbol",
				"tar",
				"tobacco"
			],
			"name": "smoking symbol"
		},
		"snail": {
			"aliases": [],
			"ascii_arts": [],
			"category": "nature",
			"code": "snail",
			"code_points": [
				"1f40c"
			],
			"keywords": [
				"animal",
				"appetizer",
				"escargot",
				"french",
				"insects",
				"shell",
				"slow",
				"snail"
			],
			"name": "snail"
		},
		"snake": {
			"aliases": [],
			"ascii_arts": [],
			"category": "nature",
			"code": "snake",
			"code_points": [
				"1f40d"
			],
			"keywords": [
				"animal",
				"creationism",
				"evil",
				"reptile",
				"wildlife"
			],
			"name": "snake"
		},
		"sneezing_face": {
			"aliases": [
				"sneeze"
			],
			"ascii_arts": [],
			"category": "people",
			"code": "sneezing_face",
			"code_points": [
				"1f927"
			],
			"keywords": [],
			"name": "sneezing face"
		},
		"snowboarder": {
			"aliases": [],
			"ascii_arts": [],
			"category": "activity",
			"code": "snowboarder",
			"code_points": [
				"1f3c2"
			],
			"keywords": [
				"alpine",
				"board",
				"boarding",
				"cold",
				"freestyle",
				"halfpipe",
				"hat",
				"mountain",
				"snow",
				"snowboarding",
				"sport",
				"sports",
				"vacation",
				"winter"
			],
			"name": "snowboarder"
		},
		"snowflake": {
			"aliases": [],
			"ascii_arts": [],
			"category": "nature",
			"code": "snowflake",
			"code_points": [
				"2744",
				"fe0f"
			],
			"keywords": [
				"below zero",
				"chilly",
				"christmas",
				"cold",
				"crystal",
				"droplet",
				"elsa",
				"frozen",
				"holidays",
				"ice",
				"season",
				"sky",
				"snow",
				"snowflake",
				"special",
				"unique",
				"weather",
				"winter",
				"xmas"
			],
			"name": "snowflake"
		},
		"snowman": {
			"aliases": [],
			"ascii_arts": [],
			"category": "nature",
			"code": "snowman",
			"code_points": [
				"26c4",
				"fe0f"
			],
			"keywords": [
				"christmas",
				"cold",
				"holidays",
				"season",
				"snow",
				"weather",
				"winter",
				"xmas"
			],
			"name": "snowman without snow"
		},
		"snowman2": {
			"aliases": [],
			"ascii_arts": [],
			"category": "nature",
			"code": "snowman2",
			"code_points": [
				"2603"
			],
			"keywords": [
				"christmas",
				"cold",
				"holidays",
				"nature",
				"snow",
				"weather",
				"winter"
			],
			"name": "snowman"
		},
		"sob": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "sob",
			"code_points": [
				"1f62d"
			],
			"keywords": [
				"cry",
				"emotion",
				"face",
				"heartbreak",
				"hurt",
				"melancholy",
				"morn",
				"sad",
				"smiley",
				"sob",
				"somber",
				"tears",
				"upset"
			],
			"name": "loudly crying face"
		},
		"soccer": {
			"aliases": [],
			"ascii_arts": [],
			"category": "activity",
			"code": "soccer",
			"code_points": [
				"26bd",
				"fe0f"
			],
			"keywords": [
				"ball",
				"balls",
				"european",
				"fifa",
				"football",
				"game",
				"soccer",
				"sport",
				"sports"
			],
			"name": "soccer ball"
		},
		"soon": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "soon",
			"code_points": [
				"1f51c"
			],
			"keywords": [
				"arrow",
				"symbol",
				"words"
			],
			"name": "soon with rightwards arrow above"
		},
		"sos": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "sos",
			"code_points": [
				"1f198"
			],
			"keywords": [
				"emergency",
				"help",
				"red-square",
				"symbol",
				"words"
			],
			"name": "squared sos"
		},
		"sound": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "sound",
			"code_points": [
				"1f509"
			],
			"keywords": [
				"alarm",
				"speaker",
				"symbol",
				"volume"
			],
			"name": "speaker with one sound wave"
		},
		"space_invader": {
			"aliases": [],
			"ascii_arts": [],
			"category": "activity",
			"code": "space_invader",
			"code_points": [
				"1f47e"
			],
			"keywords": [
				"alien",
				"arcade",
				"game",
				"monster"
			],
			"name": "alien monster"
		},
		"spades": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "spades",
			"code_points": [
				"2660",
				"fe0f"
			],
			"keywords": [
				"cards",
				"game",
				"poker",
				"symbol"
			],
			"name": "black spade suit"
		},
		"spaghetti": {
			"aliases": [],
			"ascii_arts": [],
			"category": "food",
			"code": "spaghetti",
			"code_points": [
				"1f35d"
			],
			"keywords": [
				"food",
				"italian",
				"noodle",
				"noodles",
				"pasta",
				"sauce",
				"spaghetti",
				"tomato"
			],
			"name": "spaghetti"
		},
		"sparkle": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "sparkle",
			"code_points": [
				"2747",
				"fe0f"
			],
			"keywords": [
				"green-square",
				"stars",
				"symbol"
			],
			"name": "sparkle"
		},
		"sparkler": {
			"aliases": [],
			"ascii_arts": [],
			"category": "travel",
			"code": "sparkler",
			"code_points": [
				"1f387"
			],
			"keywords": [
				"night",
				"parties",
				"shine",
				"stars"
			],
			"name": "firework sparkler"
		},
		"sparkles": {
			"aliases": [],
			"ascii_arts": [],
			"category": "nature",
			"code": "sparkles",
			"code_points": [
				"2728"
			],
			"keywords": [
				"cool",
				"girls night",
				"shine",
				"shiny",
				"star",
				"stars"
			],
			"name": "sparkles"
		},
		"sparkling_heart": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "sparkling_heart",
			"code_points": [
				"1f496"
			],
			"keywords": [
				"affection",
				"girls night",
				"like",
				"love",
				"symbol",
				"valentines"
			],
			"name": "sparkling heart"
		},
		"speak_no_evil": {
			"aliases": [],
			"ascii_arts": [],
			"category": "nature",
			"code": "speak_no_evil",
			"code_points": [
				"1f64a"
			],
			"keywords": [
				"animal",
				"iwazaru",
				"monkey",
				"mouth",
				"oral",
				"say",
				"talk",
				"verbal",
				"verbalize",
				"words"
			],
			"name": "speak-no-evil monkey"
		},
		"speaker": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "speaker",
			"code_points": [
				"1f508"
			],
			"keywords": [
				"alarm",
				"hear",
				"listen",
				"noise",
				"sound",
				"symbol"
			],
			"name": "speaker"
		},
		"speaking_head": {
			"aliases": [
				"speaking_head_in_silhouette"
			],
			"ascii_arts": [],
			"category": "people",
			"code": "speaking_head",
			"code_points": [
				"1f5e3"
			],
			"keywords": [
				"people",
				"talk"
			],
			"name": "speaking head in silhouette"
		},
		"speech_balloon": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "speech_balloon",
			"code_points": [
				"1f4ac"
			],
			"keywords": [
				"balloon",
				"bubble",
				"comic",
				"communication",
				"conversation",
				"dialogue",
				"free speech",
				"speech",
				"symbol",
				"talk",
				"words"
			],
			"name": "speech balloon"
		},
		"speech_left": {
			"aliases": [
				"left_speech_bubble"
			],
			"ascii_arts": [],
			"category": "symbols",
			"code": "speech_left",
			"code_points": [
				"1f5e8",
				"fe0f"
			],
			"keywords": [],
			"name": "left speech bubble"
		},
		"speedboat": {
			"aliases": [],
			"ascii_arts": [],
			"category": "travel",
			"code": "speedboat",
			"code_points": [
				"1f6a4"
			],
			"keywords": [
				"boat",
				"motor",
				"power",
				"ship",
				"ski",
				"speed",
				"transportation",
				"travel",
				"tropical",
				"vacation",
				"vehicle"
			],
			"name": "speedboat"
		},
		"spider": {
			"aliases": [],
			"ascii_arts": [],
			"category": "nature",
			"code": "spider",
			"code_points": [
				"1f577"
			],
			"keywords": [
				"animal",
				"arachnid",
				"eight-legged",
				"halloween",
				"insects"
			],
			"name": "spider"
		},
		"spider_web": {
			"aliases": [],
			"ascii_arts": [],
			"category": "nature",
			"code": "spider_web",
			"code_points": [
				"1f578"
			],
			"keywords": [
				"cobweb",
				"halloween"
			],
			"name": "spider web"
		},
		"spoon": {
			"aliases": [],
			"ascii_arts": [],
			"category": "food",
			"code": "spoon",
			"code_points": [
				"1f944"
			],
			"keywords": [],
			"name": "spoon"
		},
		"spy": {
			"aliases": [
				"sleuth_or_spy"
			],
			"ascii_arts": [],
			"category": "people",
			"code": "spy",
			"code_points": [
				"1f575"
			],
			"keywords": [
				"diversity",
				"glasses",
				"hat",
				"investigator",
				"job",
				"men",
				"people",
				"pi",
				"undercover"
			],
			"name": "sleuth or spy"
		},
		"spy_tone1": {
			"aliases": [
				"sleuth_or_spy_tone1"
			],
			"ascii_arts": [],
			"category": "people",
			"code": "spy_tone1",
			"code_points": [
				"1f575",
				"1f3fb"
			],
			"keywords": [
				"investigator",
				"person",
				"pi",
				"undercover"
			],
			"name": "sleuth or spy tone 1"
		},
		"spy_tone2": {
			"aliases": [
				"sleuth_or_spy_tone2"
			],
			"ascii_arts": [],
			"category": "people",
			"code": "spy_tone2",
			"code_points": [
				"1f575",
				"1f3fc"
			],
			"keywords": [
				"investigator",
				"person",
				"pi",
				"undercover"
			],
			"name": "sleuth or spy tone 2"
		},
		"spy_tone3": {
			"aliases": [
				"sleuth_or_spy_tone3"
			],
			"ascii_arts": [],
			"category": "people",
			"code": "spy_tone3",
			"code_points": [
				"1f575",
				"1f3fd"
			],
			"keywords": [
				"investigator",
				"person",
				"pi",
				"undercover"
			],
			"name": "sleuth or spy tone 3"
		},
		"spy_tone4": {
			"aliases": [
				"sleuth_or_spy_tone4"
			],
			"ascii_arts": [],
			"category": "people",
			"code": "spy_tone4",
			"code_points": [
				"1f575",
				"1f3fe"
			],
			"keywords": [
				"investigator",
				"person",
				"pi",
				"undercover"
			],
			"name": "sleuth or spy tone 4"
		},
		"spy_tone5": {
			"aliases": [
				"sleuth_or_spy_tone5"
			],
			"ascii_arts": [],
			"category": "people",
			"code": "spy_tone5",
			"code_points": [
				"1f575",
				"1f3ff"
			],
			"keywords": [
				"investigator",
				"person",
				"pi",
				"undercover"
			],
			"name": "sleuth or spy tone 5"
		},
		"squid": {
			"aliases": [],
			"ascii_arts": [],
			"category": "nature",
			"code": "squid",
			"code_points": [
				"1f991"
			],
			"keywords": [],
			"name": "squid"
		},
		"stadium": {
			"aliases": [],
			"ascii_arts": [],
			"category": "travel",
			"code": "stadium",
			"code_points": [
				"1f3df"
			],
			"keywords": [
				"boys night",
				"building",
				"concert",
				"convention",
				"event",
				"game",
				"places",
				"sport",
				"travel",
				"vacation"
			],
			"name": "stadium"
		},
		"star": {
			"aliases": [],
			"ascii_arts": [],
			"category": "nature",
			"code": "star",
			"code_points": [
				"2b50",
				"fe0f"
			],
			"keywords": [
				"night",
				"sky",
				"space",
				"star",
				"yellow"
			],
			"name": "white medium star"
		},
		"star2": {
			"aliases": [],
			"ascii_arts": [],
			"category": "nature",
			"code": "star2",
			"code_points": [
				"1f31f"
			],
			"keywords": [
				"classic",
				"five",
				"glow",
				"glowing",
				"night",
				"points",
				"sky",
				"space",
				"sparkle",
				"star"
			],
			"name": "glowing star"
		},
		"star_and_crescent": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "star_and_crescent",
			"code_points": [
				"262a"
			],
			"keywords": [
				"islam",
				"muslim",
				"religion",
				"symbol"
			],
			"name": "star and crescent"
		},
		"star_of_david": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "star_of_david",
			"code_points": [
				"2721"
			],
			"keywords": [
				"jew",
				"jewish",
				"religion",
				"star",
				"symbol"
			],
			"name": "star of david"
		},
		"stars": {
			"aliases": [],
			"ascii_arts": [],
			"category": "travel",
			"code": "stars",
			"code_points": [
				"1f320"
			],
			"keywords": [
				"comet",
				"meteoroid",
				"night",
				"photo",
				"shoot",
				"shooting",
				"sky",
				"space",
				"star"
			],
			"name": "shooting star"
		},
		"station": {
			"aliases": [],
			"ascii_arts": [],
			"category": "travel",
			"code": "station",
			"code_points": [
				"1f689"
			],
			"keywords": [
				"public",
				"station",
				"subway",
				"train",
				"transportation",
				"travel",
				"vehicle"
			],
			"name": "station"
		},
		"statue_of_liberty": {
			"aliases": [],
			"ascii_arts": [],
			"category": "travel",
			"code": "statue_of_liberty",
			"code_points": [
				"1f5fd"
			],
			"keywords": [
				"america",
				"american",
				"free speech",
				"newyork",
				"places",
				"statue of liberty",
				"travel",
				"vacation"
			],
			"name": "statue of liberty"
		},
		"steam_locomotive": {
			"aliases": [],
			"ascii_arts": [],
			"category": "travel",
			"code": "steam_locomotive",
			"code_points": [
				"1f682"
			],
			"keywords": [
				"engine",
				"locomotive",
				"steam",
				"train",
				"transportation",
				"travel",
				"vehicle"
			],
			"name": "steam locomotive"
		},
		"stew": {
			"aliases": [],
			"ascii_arts": [],
			"category": "food",
			"code": "stew",
			"code_points": [
				"1f372"
			],
			"keywords": [
				"food",
				"hearty",
				"hot",
				"meat",
				"pot",
				"soup",
				"steam",
				"stew",
				"thick"
			],
			"name": "pot of food"
		},
		"stop_button": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "stop_button",
			"code_points": [
				"23f9"
			],
			"keywords": [
				"sound",
				"square",
				"symbol"
			],
			"name": "black square for stop"
		},
		"stopwatch": {
			"aliases": [],
			"ascii_arts": [],
			"category": "objects",
			"code": "stopwatch",
			"code_points": [
				"23f1"
			],
			"keywords": [
				"clock",
				"electronics",
				"object",
				"time"
			],
			"name": "stopwatch"
		},
		"straight_ruler": {
			"aliases": [],
			"ascii_arts": [],
			"category": "objects",
			"code": "straight_ruler",
			"code_points": [
				"1f4cf"
			],
			"keywords": [
				"object",
				"office",
				"stationery",
				"tool"
			],
			"name": "straight ruler"
		},
		"strawberry": {
			"aliases": [],
			"ascii_arts": [],
			"category": "food",
			"code": "strawberry",
			"code_points": [
				"1f353"
			],
			"keywords": [
				"berry",
				"cake",
				"food",
				"fruit",
				"nature",
				"short",
				"strawberry"
			],
			"name": "strawberry"
		},
		"stuck_out_tongue": {
			"aliases": [],
			"ascii_arts": [
				":-P",
				":-b",
				":-p",
				":-Þ",
				":-þ",
				":P",
				":b",
				":p",
				":Þ",
				":þ",
				"=P",
				"=p",
				"d:"
			],
			"category": "people",
			"code": "stuck_out_tongue",
			"code_points": [
				"1f61b"
			],
			"keywords": [
				"cheeky",
				"childish",
				"emotion",
				"face",
				"mischievous",
				"playful",
				"prank",
				"sex",
				"silly",
				"smiley",
				"tongue"
			],
			"name": "face with stuck-out tongue"
		},
		"stuck_out_tongue_closed_eyes": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "stuck_out_tongue_closed_eyes",
			"code_points": [
				"1f61d"
			],
			"keywords": [
				"ecstatic",
				"emotion",
				"face",
				"happy",
				"kidding",
				"mischievous",
				"playful",
				"prank",
				"silly",
				"smiley",
				"tongue"
			],
			"name": "face with stuck-out tongue and tightly-closed eyes"
		},
		"stuck_out_tongue_winking_eye": {
			"aliases": [],
			"ascii_arts": [
				">:P",
				"X-P",
				"x-p"
			],
			"category": "people",
			"code": "stuck_out_tongue_winking_eye",
			"code_points": [
				"1f61c"
			],
			"keywords": [
				"childish",
				"crazy",
				"emotion",
				"face",
				"happy",
				"kidding",
				"mischievous",
				"parties",
				"playful",
				"prank",
				"silly",
				"smiley",
				"tongue",
				"wink",
				"winking"
			],
			"name": "face with stuck-out tongue and winking eye"
		},
		"stuffed_flatbread": {
			"aliases": [
				"stuffed_pita"
			],
			"ascii_arts": [],
			"category": "food",
			"code": "stuffed_flatbread",
			"code_points": [
				"1f959"
			],
			"keywords": [],
			"name": "stuffed flatbread"
		},
		"sun_with_face": {
			"aliases": [],
			"ascii_arts": [],
			"category": "nature",
			"code": "sun_with_face",
			"code_points": [
				"1f31e"
			],
			"keywords": [
				"anthropomorphic",
				"day",
				"face",
				"hump day",
				"morning",
				"sky",
				"sun"
			],
			"name": "sun with face"
		},
		"sunflower": {
			"aliases": [],
			"ascii_arts": [],
			"category": "nature",
			"code": "sunflower",
			"code_points": [
				"1f33b"
			],
			"keywords": [
				"flower",
				"nature",
				"plant",
				"seeds",
				"sun",
				"sunflower",
				"yellow"
			],
			"name": "sunflower"
		},
		"sunglasses": {
			"aliases": [],
			"ascii_arts": [
				"8)",
				"8-)",
				"8-D",
				"B)",
				"B-)",
				"B-D"
			],
			"category": "people",
			"code": "sunglasses",
			"code_points": [
				"1f60e"
			],
			"keywords": [
				"boys night",
				"cool",
				"emojione",
				"face",
				"glasses",
				"silly",
				"smiley",
				"smiling",
				"smooth",
				"sun",
				"sunglasses",
				"sunny"
			],
			"name": "smiling face with sunglasses"
		},
		"sunny": {
			"aliases": [],
			"ascii_arts": [],
			"category": "nature",
			"code": "sunny",
			"code_points": [
				"2600",
				"fe0f"
			],
			"keywords": [
				"brightness",
				"day",
				"hot",
				"morning",
				"sky",
				"sun",
				"weather"
			],
			"name": "black sun with rays"
		},
		"sunrise": {
			"aliases": [],
			"ascii_arts": [],
			"category": "travel",
			"code": "sunrise",
			"code_points": [
				"1f305"
			],
			"keywords": [
				"color",
				"day",
				"hump day",
				"morning",
				"photo",
				"places",
				"sky",
				"sun",
				"sunrise",
				"travel",
				"tropical",
				"vacation",
				"view"
			],
			"name": "sunrise"
		},
		"sunrise_over_mountains": {
			"aliases": [],
			"ascii_arts": [],
			"category": "travel",
			"code": "sunrise_over_mountains",
			"code_points": [
				"1f304"
			],
			"keywords": [
				"camp",
				"color",
				"day",
				"morning",
				"mountain",
				"photo",
				"places",
				"rural",
				"sky",
				"sun",
				"sunrise",
				"travel",
				"vacation",
				"view"
			],
			"name": "sunrise over mountains"
		},
		"surfer": {
			"aliases": [],
			"ascii_arts": [],
			"category": "activity",
			"code": "surfer",
			"code_points": [
				"1f3c4"
			],
			"keywords": [
				"diversity",
				"men",
				"ocean",
				"ride",
				"sea",
				"sport",
				"sports",
				"surf",
				"surfer",
				"swell",
				"tropical",
				"vacation",
				"wave"
			],
			"name": "surfer"
		},
		"surfer_tone1": {
			"aliases": [],
			"ascii_arts": [],
			"category": "activity",
			"code": "surfer_tone1",
			"code_points": [
				"1f3c4",
				"1f3fb"
			],
			"keywords": [
				"ocean",
				"ride",
				"sea",
				"sport",
				"surf",
				"swell",
				"wave"
			],
			"name": "surfer tone 1"
		},
		"surfer_tone2": {
			"aliases": [],
			"ascii_arts": [],
			"category": "activity",
			"code": "surfer_tone2",
			"code_points": [
				"1f3c4",
				"1f3fc"
			],
			"keywords": [
				"ocean",
				"ride",
				"sea",
				"sport",
				"surf",
				"swell",
				"wave"
			],
			"name": "surfer tone 2"
		},
		"surfer_tone3": {
			"aliases": [],
			"ascii_arts": [],
			"category": "activity",
			"code": "surfer_tone3",
			"code_points": [
				"1f3c4",
				"1f3fd"
			],
			"keywords": [
				"ocean",
				"ride",
				"sea",
				"sport",
				"surf",
				"swell",
				"wave"
			],
			"name": "surfer tone 3"
		},
		"surfer_tone4": {
			"aliases": [],
			"ascii_arts": [],
			"category": "activity",
			"code": "surfer_tone4",
			"code_points": [
				"1f3c4",
				"1f3fe"
			],
			"keywords": [
				"ocean",
				"ride",
				"sea",
				"sport",
				"surf",
				"swell",
				"wave"
			],
			"name": "surfer tone 4"
		},
		"surfer_tone5": {
			"aliases": [],
			"ascii_arts": [],
			"category": "activity",
			"code": "surfer_tone5",
			"code_points": [
				"1f3c4",
				"1f3ff"
			],
			"keywords": [
				"ocean",
				"ride",
				"sea",
				"sport",
				"surf",
				"swell",
				"wave"
			],
			"name": "surfer tone 5"
		},
		"sushi": {
			"aliases": [],
			"ascii_arts": [],
			"category": "food",
			"code": "sushi",
			"code_points": [
				"1f363"
			],
			"keywords": [
				"fish",
				"food",
				"japan",
				"japanese",
				"nigiri",
				"raw",
				"sushi"
			],
			"name": "sushi"
		},
		"suspension_railway": {
			"aliases": [],
			"ascii_arts": [],
			"category": "travel",
			"code": "suspension_railway",
			"code_points": [
				"1f69f"
			],
			"keywords": [
				"rail",
				"railway",
				"suspension",
				"train",
				"transportation",
				"travel",
				"vehicle"
			],
			"name": "suspension railway"
		},
		"sweat": {
			"aliases": [],
			"ascii_arts": [
				"':(",
				"':-(",
				"'=("
			],
			"category": "people",
			"code": "sweat",
			"code_points": [
				"1f613"
			],
			"keywords": [
				"anxious",
				"clammy",
				"cold",
				"diaphoresis",
				"emotion",
				"face",
				"hot",
				"sad",
				"sick",
				"smiley",
				"stressed",
				"sweat",
				"worried"
			],
			"name": "face with cold sweat"
		},
		"sweat_drops": {
			"aliases": [],
			"ascii_arts": [],
			"category": "nature",
			"code": "sweat_drops",
			"code_points": [
				"1f4a6"
			],
			"keywords": [
				"rain",
				"stressed",
				"sweat",
				"water"
			],
			"name": "splashing sweat symbol"
		},
		"sweat_smile": {
			"aliases": [],
			"ascii_arts": [
				"':)",
				"':-)",
				"':-D",
				"':D",
				"'=)",
				"'=D"
			],
			"category": "people",
			"code": "sweat_smile",
			"code_points": [
				"1f605"
			],
			"keywords": [
				"cold",
				"emotion",
				"face",
				"happy",
				"hot",
				"perspiration",
				"smiley",
				"smiling",
				"sweat",
				"workout"
			],
			"name": "smiling face with open mouth and cold sweat"
		},
		"sweet_potato": {
			"aliases": [],
			"ascii_arts": [],
			"category": "food",
			"code": "sweet_potato",
			"code_points": [
				"1f360"
			],
			"keywords": [
				"food",
				"nature",
				"potassium",
				"potato",
				"roast",
				"roasted",
				"sweet",
				"vegetables"
			],
			"name": "roasted sweet potato"
		},
		"swimmer": {
			"aliases": [],
			"ascii_arts": [],
			"category": "activity",
			"code": "swimmer",
			"code_points": [
				"1f3ca"
			],
			"keywords": [
				"backstroke",
				"breaststroke",
				"butterfly",
				"diversity",
				"freestyle",
				"laps",
				"pool",
				"sport",
				"sports",
				"swim",
				"swimmer",
				"water",
				"workout"
			],
			"name": "swimmer"
		},
		"swimmer_tone1": {
			"aliases": [],
			"ascii_arts": [],
			"category": "activity",
			"code": "swimmer_tone1",
			"code_points": [
				"1f3ca",
				"1f3fb"
			],
			"keywords": [
				"backstroke",
				"breaststroke",
				"butterfly",
				"freestyle",
				"laps",
				"pool",
				"sport",
				"swim",
				"water"
			],
			"name": "swimmer tone 1"
		},
		"swimmer_tone2": {
			"aliases": [],
			"ascii_arts": [],
			"category": "activity",
			"code": "swimmer_tone2",
			"code_points": [
				"1f3ca",
				"1f3fc"
			],
			"keywords": [
				"backstroke",
				"breaststroke",
				"butterfly",
				"freestyle",
				"laps",
				"pool",
				"sport",
				"swim",
				"water"
			],
			"name": "swimmer tone 2"
		},
		"swimmer_tone3": {
			"aliases": [],
			"ascii_arts": [],
			"category": "activity",
			"code": "swimmer_tone3",
			"code_points": [
				"1f3ca",
				"1f3fd"
			],
			"keywords": [
				"backstroke",
				"breaststroke",
				"butterfly",
				"freestyle",
				"laps",
				"pool",
				"sport",
				"swim",
				"water"
			],
			"name": "swimmer tone 3"
		},
		"swimmer_tone4": {
			"aliases": [],
			"ascii_arts": [],
			"category": "activity",
			"code": "swimmer_tone4",
			"code_points": [
				"1f3ca",
				"1f3fe"
			],
			"keywords": [
				"backstroke",
				"breaststroke",
				"butterfly",
				"freestyle",
				"laps",
				"pool",
				"sport",
				"swim",
				"water"
			],
			"name": "swimmer tone 4"
		},
		"swimmer_tone5": {
			"aliases": [],
			"ascii_arts": [],
			"category": "activity",
			"code": "swimmer_tone5",
			"code_points": [
				"1f3ca",
				"1f3ff"
			],
			"keywords": [
				"backstroke",
				"breaststroke",
				"butterfly",
				"freestyle",
				"laps",
				"pool",
				"sport",
				"swim",
				"water"
			],
			"name": "swimmer tone 5"
		},
		"symbols": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "symbols",
			"code_points": [
				"1f523"
			],
			"keywords": [
				"blue-square",
				"symbol"
			],
			"name": "input symbol for symbols"
		},
		"synagogue": {
			"aliases": [],
			"ascii_arts": [],
			"category": "travel",
			"code": "synagogue",
			"code_points": [
				"1f54d"
			],
			"keywords": [
				"building",
				"condolence",
				"places",
				"religion",
				"travel",
				"vacation"
			],
			"name": "synagogue"
		},
		"syringe": {
			"aliases": [],
			"ascii_arts": [],
			"category": "objects",
			"code": "syringe",
			"code_points": [
				"1f489"
			],
			"keywords": [
				"blood",
				"drugs",
				"health",
				"hospital",
				"medicine",
				"needle",
				"object",
				"weapon"
			],
			"name": "syringe"
		},
		"taco": {
			"aliases": [],
			"ascii_arts": [],
			"category": "food",
			"code": "taco",
			"code_points": [
				"1f32e"
			],
			"keywords": [
				"food",
				"mexican",
				"vagina"
			],
			"name": "taco"
		},
		"tada": {
			"aliases": [],
			"ascii_arts": [],
			"category": "objects",
			"code": "tada",
			"code_points": [
				"1f389"
			],
			"keywords": [
				"announcement",
				"birthday",
				"boys night",
				"celebration",
				"cheers",
				"climax",
				"congratulations",
				"contulations",
				"girls night",
				"good",
				"holidays",
				"object",
				"parties",
				"party",
				"popper",
				"tada",
				"victory"
			],
			"name": "party popper"
		},
		"tanabata_tree": {
			"aliases": [],
			"ascii_arts": [],
			"category": "nature",
			"code": "tanabata_tree",
			"code_points": [
				"1f38b"
			],
			"keywords": [
				"festival",
				"holiday",
				"nature",
				"plant",
				"star",
				"tanabata",
				"tree",
				"trees",
				"wish"
			],
			"name": "tanabata tree"
		},
		"tangerine": {
			"aliases": [],
			"ascii_arts": [],
			"category": "food",
			"code": "tangerine",
			"code_points": [
				"1f34a"
			],
			"keywords": [
				"citrus",
				"food",
				"fruit",
				"nature",
				"orange",
				"tangerine"
			],
			"name": "tangerine"
		},
		"taurus": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "taurus",
			"code_points": [
				"2649",
				"fe0f"
			],
			"keywords": [
				"astrology",
				"bull",
				"constellation",
				"greek",
				"horoscope",
				"purple-square",
				"sign",
				"stars",
				"symbol",
				"taurus",
				"zodiac"
			],
			"name": "taurus"
		},
		"taxi": {
			"aliases": [],
			"ascii_arts": [],
			"category": "travel",
			"code": "taxi",
			"code_points": [
				"1f695"
			],
			"keywords": [
				"automobile",
				"car",
				"cars",
				"city",
				"service",
				"taxi",
				"transport",
				"transportation",
				"travel",
				"uber",
				"vehicle"
			],
			"name": "taxi"
		},
		"tea": {
			"aliases": [],
			"ascii_arts": [],
			"category": "food",
			"code": "tea",
			"code_points": [
				"1f375"
			],
			"keywords": [
				"beverage",
				"bowl",
				"breakfast",
				"british",
				"caffeine",
				"drink",
				"green",
				"hot",
				"japan",
				"leaf",
				"morning",
				"steam",
				"tea",
				"teacup"
			],
			"name": "teacup without handle"
		},
		"telephone": {
			"aliases": [
				"phone"
			],
			"ascii_arts": [],
			"category": "objects",
			"code": "telephone",
			"code_points": [
				"260e",
				"fe0f"
			],
			"keywords": [
				"communication",
				"dial",
				"electronics",
				"phone",
				"technology"
			],
			"name": "black telephone"
		},
		"telephone_receiver": {
			"aliases": [],
			"ascii_arts": [],
			"category": "objects",
			"code": "telephone_receiver",
			"code_points": [
				"1f4de"
			],
			"keywords": [
				"communication",
				"dial",
				"electronics",
				"phone",
				"technology"
			],
			"name": "telephone receiver"
		},
		"telescope": {
			"aliases": [],
			"ascii_arts": [],
			"category": "objects",
			"code": "telescope",
			"code_points": [
				"1f52d"
			],
			"keywords": [
				"object",
				"science",
				"space",
				"stars"
			],
			"name": "telescope"
		},
		"ten": {
			"aliases": [
				"keycap_ten"
			],
			"ascii_arts": [],
			"category": "symbols",
			"code": "ten",
			"code_points": [
				"1f51f"
			],
			"keywords": [
				"10",
				"blue-square",
				"math",
				"number",
				"numbers",
				"symbol",
				"word"
			],
			"name": "keycap ten"
		},
		"tennis": {
			"aliases": [],
			"ascii_arts": [],
			"category": "activity",
			"code": "tennis",
			"code_points": [
				"1f3be"
			],
			"keywords": [
				"ball",
				"balls",
				"court",
				"game",
				"green",
				"love",
				"net",
				"racket",
				"racquet",
				"sport",
				"sports",
				"tennis"
			],
			"name": "tennis racquet and ball"
		},
		"tent": {
			"aliases": [],
			"ascii_arts": [],
			"category": "travel",
			"code": "tent",
			"code_points": [
				"26fa",
				"fe0f"
			],
			"keywords": [
				"camp",
				"outdoors",
				"photo",
				"places",
				"travel",
				"vacation"
			],
			"name": "tent"
		},
		"thermometer": {
			"aliases": [],
			"ascii_arts": [],
			"category": "objects",
			"code": "thermometer",
			"code_points": [
				"1f321"
			],
			"keywords": [
				"health",
				"hot",
				"object",
				"science",
				"temperature"
			],
			"name": "thermometer"
		},
		"thermometer_face": {
			"aliases": [
				"face_with_thermometer"
			],
			"ascii_arts": [],
			"category": "people",
			"code": "thermometer_face",
			"code_points": [
				"1f912"
			],
			"keywords": [
				"emotion",
				"health",
				"sick",
				"smiley"
			],
			"name": "face with thermometer"
		},
		"thinking": {
			"aliases": [
				"thinking_face"
			],
			"ascii_arts": [],
			"category": "people",
			"code": "thinking",
			"code_points": [
				"1f914"
			],
			"keywords": [
				"boys night",
				"smiley",
				"thinking"
			],
			"name": "thinking face"
		},
		"third_place": {
			"aliases": [
				"third_place_medal"
			],
			"ascii_arts": [],
			"category": "activity",
			"code": "third_place",
			"code_points": [
				"1f949"
			],
			"keywords": [],
			"name": "third place medal"
		},
		"thought_balloon": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "thought_balloon",
			"code_points": [
				"1f4ad"
			],
			"keywords": [
				"balloon",
				"bubble",
				"cloud",
				"comic",
				"day dream",
				"speech",
				"symbol",
				"think",
				"thought",
				"wonder"
			],
			"name": "thought balloon"
		},
		"three": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "three",
			"code_points": [
				"33",
				"fe0f",
				"20e3"
			],
			"keywords": [
				"3",
				"blue-square",
				"math",
				"number",
				"numbers",
				"prime",
				"symbol"
			],
			"name": "keycap digit three"
		},
		"thumbsdown": {
			"aliases": [
				"-1"
			],
			"ascii_arts": [],
			"category": "people",
			"code": "thumbsdown",
			"code_points": [
				"1f44e"
			],
			"keywords": [
				"body",
				"diversity",
				"hand",
				"hands",
				"no"
			],
			"name": "thumbs down sign"
		},
		"thumbsdown_tone1": {
			"aliases": [
				"-1_tone1"
			],
			"ascii_arts": [],
			"category": "people",
			"code": "thumbsdown_tone1",
			"code_points": [
				"1f44e",
				"1f3fb"
			],
			"keywords": [
				"-1",
				"hand",
				"no"
			],
			"name": "thumbs down sign tone 1"
		},
		"thumbsdown_tone2": {
			"aliases": [
				"-1_tone2"
			],
			"ascii_arts": [],
			"category": "people",
			"code": "thumbsdown_tone2",
			"code_points": [
				"1f44e",
				"1f3fc"
			],
			"keywords": [
				"-1",
				"hand",
				"no"
			],
			"name": "thumbs down sign tone 2"
		},
		"thumbsdown_tone3": {
			"aliases": [
				"-1_tone3"
			],
			"ascii_arts": [],
			"category": "people",
			"code": "thumbsdown_tone3",
			"code_points": [
				"1f44e",
				"1f3fd"
			],
			"keywords": [
				"-1",
				"hand",
				"no"
			],
			"name": "thumbs down sign tone 3"
		},
		"thumbsdown_tone4": {
			"aliases": [
				"-1_tone4"
			],
			"ascii_arts": [],
			"category": "people",
			"code": "thumbsdown_tone4",
			"code_points": [
				"1f44e",
				"1f3fe"
			],
			"keywords": [
				"-1",
				"hand",
				"no"
			],
			"name": "thumbs down sign tone 4"
		},
		"thumbsdown_tone5": {
			"aliases": [
				"-1_tone5"
			],
			"ascii_arts": [],
			"category": "people",
			"code": "thumbsdown_tone5",
			"code_points": [
				"1f44e",
				"1f3ff"
			],
			"keywords": [
				"-1",
				"hand",
				"no"
			],
			"name": "thumbs down sign tone 5"
		},
		"thumbsup": {
			"aliases": [
				"+1"
			],
			"ascii_arts": [],
			"category": "people",
			"code": "thumbsup",
			"code_points": [
				"1f44d"
			],
			"keywords": [
				"beautiful",
				"body",
				"cool",
				"diversity",
				"good",
				"hand",
				"hands",
				"hi",
				"like",
				"luck",
				"perfect",
				"thank you",
				"yes"
			],
			"name": "thumbs up sign"
		},
		"thumbsup_tone1": {
			"aliases": [
				"+1_tone1"
			],
			"ascii_arts": [],
			"category": "people",
			"code": "thumbsup_tone1",
			"code_points": [
				"1f44d",
				"1f3fb"
			],
			"keywords": [
				"+1",
				"cool",
				"hand",
				"like",
				"yes"
			],
			"name": "thumbs up sign tone 1"
		},
		"thumbsup_tone2": {
			"aliases": [
				"+1_tone2"
			],
			"ascii_arts": [],
			"category": "people",
			"code": "thumbsup_tone2",
			"code_points": [
				"1f44d",
				"1f3fc"
			],
			"keywords": [
				"+1",
				"cool",
				"hand",
				"like",
				"yes"
			],
			"name": "thumbs up sign tone 2"
		},
		"thumbsup_tone3": {
			"aliases": [
				"+1_tone3"
			],
			"ascii_arts": [],
			"category": "people",
			"code": "thumbsup_tone3",
			"code_points": [
				"1f44d",
				"1f3fd"
			],
			"keywords": [
				"+1",
				"cool",
				"hand",
				"like",
				"yes"
			],
			"name": "thumbs up sign tone 3"
		},
		"thumbsup_tone4": {
			"aliases": [
				"+1_tone4"
			],
			"ascii_arts": [],
			"category": "people",
			"code": "thumbsup_tone4",
			"code_points": [
				"1f44d",
				"1f3fe"
			],
			"keywords": [
				"+1",
				"cool",
				"hand",
				"like",
				"yes"
			],
			"name": "thumbs up sign tone 4"
		},
		"thumbsup_tone5": {
			"aliases": [
				"+1_tone5"
			],
			"ascii_arts": [],
			"category": "people",
			"code": "thumbsup_tone5",
			"code_points": [
				"1f44d",
				"1f3ff"
			],
			"keywords": [
				"+1",
				"cool",
				"hand",
				"like",
				"yes"
			],
			"name": "thumbs up sign tone 5"
		},
		"thunder_cloud_rain": {
			"aliases": [
				"thunder_cloud_and_rain"
			],
			"ascii_arts": [],
			"category": "nature",
			"code": "thunder_cloud_rain",
			"code_points": [
				"26c8"
			],
			"keywords": [
				"cloud",
				"cold",
				"nature",
				"rain",
				"sky",
				"weather"
			],
			"name": "thunder cloud and rain"
		},
		"ticket": {
			"aliases": [],
			"ascii_arts": [],
			"category": "activity",
			"code": "ticket",
			"code_points": [
				"1f3ab"
			],
			"keywords": [
				"admission",
				"concert",
				"entertainment",
				"event",
				"movie",
				"parties",
				"pass",
				"proof",
				"purchase",
				"show",
				"stub",
				"theatre",
				"ticket"
			],
			"name": "ticket"
		},
		"tickets": {
			"aliases": [
				"admission_tickets"
			],
			"ascii_arts": [],
			"category": "activity",
			"code": "tickets",
			"code_points": [
				"1f39f"
			],
			"keywords": [
				"concert",
				"entertainment",
				"event",
				"movie",
				"parties",
				"pass",
				"proof",
				"purchase",
				"show",
				"stub",
				"theatre"
			],
			"name": "admission tickets"
		},
		"tiger": {
			"aliases": [],
			"ascii_arts": [],
			"category": "nature",
			"code": "tiger",
			"code_points": [
				"1f42f"
			],
			"keywords": [
				"animal",
				"cat",
				"roar",
				"wildlife"
			],
			"name": "tiger face"
		},
		"tiger2": {
			"aliases": [],
			"ascii_arts": [],
			"category": "nature",
			"code": "tiger2",
			"code_points": [
				"1f405"
			],
			"keywords": [
				"animal",
				"cat",
				"hobs",
				"nature",
				"roar",
				"striped",
				"tiger",
				"tigger",
				"tony",
				"wildlife"
			],
			"name": "tiger"
		},
		"timer": {
			"aliases": [
				"timer_clock"
			],
			"ascii_arts": [],
			"category": "objects",
			"code": "timer",
			"code_points": [
				"23f2"
			],
			"keywords": [
				"object",
				"time"
			],
			"name": "timer clock"
		},
		"tired_face": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "tired_face",
			"code_points": [
				"1f62b"
			],
			"keywords": [
				"emotion",
				"exhausted",
				"face",
				"frustrated",
				"sad",
				"sick",
				"sleepy",
				"smiley",
				"tired",
				"upset",
				"whine"
			],
			"name": "tired face"
		},
		"tm": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "tm",
			"code_points": [
				"2122",
				"fe0f"
			],
			"keywords": [
				"brand",
				"symbol",
				"tm",
				"trademark",
				"word"
			],
			"name": "trade mark sign"
		},
		"toilet": {
			"aliases": [],
			"ascii_arts": [],
			"category": "objects",
			"code": "toilet",
			"code_points": [
				"1f6bd"
			],
			"keywords": [
				"bathroom",
				"flush",
				"object",
				"plumbing",
				"porcelain",
				"restroom",
				"throne",
				"toilet",
				"waste",
				"wc"
			],
			"name": "toilet"
		},
		"tokyo_tower": {
			"aliases": [],
			"ascii_arts": [],
			"category": "travel",
			"code": "tokyo_tower",
			"code_points": [
				"1f5fc"
			],
			"keywords": [
				"eiffel tower",
				"japan",
				"photo",
				"places",
				"travel",
				"vacation"
			],
			"name": "tokyo tower"
		},
		"tomato": {
			"aliases": [],
			"ascii_arts": [],
			"category": "food",
			"code": "tomato",
			"code_points": [
				"1f345"
			],
			"keywords": [
				"food",
				"fruit",
				"italian",
				"nature",
				"sauce",
				"tomato",
				"vegetable",
				"vegetables"
			],
			"name": "tomato"
		},
		"tone1": {
			"aliases": [],
			"ascii_arts": [],
			"category": "modifier",
			"code": "tone1",
			"code_points": [
				"1f3fb"
			],
			"keywords": [],
			"name": "emoji modifier Fitzpatrick type-1-2"
		},
		"tone2": {
			"aliases": [],
			"ascii_arts": [],
			"category": "modifier",
			"code": "tone2",
			"code_points": [
				"1f3fc"
			],
			"keywords": [],
			"name": "emoji modifier Fitzpatrick type-3"
		},
		"tone3": {
			"aliases": [],
			"ascii_arts": [],
			"category": "modifier",
			"code": "tone3",
			"code_points": [
				"1f3fd"
			],
			"keywords": [],
			"name": "emoji modifier Fitzpatrick type-4"
		},
		"tone4": {
			"aliases": [],
			"ascii_arts": [],
			"category": "modifier",
			"code": "tone4",
			"code_points": [
				"1f3fe"
			],
			"keywords": [],
			"name": "emoji modifier Fitzpatrick type-5"
		},
		"tone5": {
			"aliases": [],
			"ascii_arts": [],
			"category": "modifier",
			"code": "tone5",
			"code_points": [
				"1f3ff"
			],
			"keywords": [],
			"name": "emoji modifier Fitzpatrick type-6"
		},
		"tongue": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "tongue",
			"code_points": [
				"1f445"
			],
			"keywords": [
				"body",
				"buds",
				"food",
				"french kiss",
				"intimacy",
				"kiss",
				"lick",
				"lip",
				"mouth",
				"playful",
				"playfulness",
				"sexy",
				"silliness",
				"silly",
				"taste",
				"tasty",
				"tease",
				"tongue"
			],
			"name": "tongue"
		},
		"tools": {
			"aliases": [
				"hammer_and_wrench"
			],
			"ascii_arts": [],
			"category": "objects",
			"code": "tools",
			"code_points": [
				"1f6e0"
			],
			"keywords": [
				"object",
				"tool",
				"tools"
			],
			"name": "hammer and wrench"
		},
		"top": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "top",
			"code_points": [
				"1f51d"
			],
			"keywords": [
				"arrow",
				"blue-square",
				"symbol",
				"words"
			],
			"name": "top with upwards arrow above"
		},
		"tophat": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "tophat",
			"code_points": [
				"1f3a9"
			],
			"keywords": [
				"accessories",
				"beaver",
				"cap",
				"chimney",
				"classy",
				"fashion",
				"gentleman",
				"hat",
				"high",
				"london",
				"magic",
				"magician",
				"period piece",
				"pipe",
				"stove",
				"tall",
				"top",
				"topper"
			],
			"name": "top hat"
		},
		"track_next": {
			"aliases": [
				"next_track"
			],
			"ascii_arts": [],
			"category": "symbols",
			"code": "track_next",
			"code_points": [
				"23ed"
			],
			"keywords": [
				"arrow",
				"next scene",
				"next track",
				"sound",
				"symbol"
			],
			"name": "black right-pointing double triangle with vertical bar"
		},
		"track_previous": {
			"aliases": [
				"previous_track"
			],
			"ascii_arts": [],
			"category": "symbols",
			"code": "track_previous",
			"code_points": [
				"23ee"
			],
			"keywords": [
				"arrow",
				"previous scene",
				"previous track",
				"sound",
				"symbol"
			],
			"name": "black left-pointing double triangle with vertical bar"
		},
		"trackball": {
			"aliases": [],
			"ascii_arts": [],
			"category": "objects",
			"code": "trackball",
			"code_points": [
				"1f5b2"
			],
			"keywords": [
				"device",
				"electronics",
				"gadget",
				"game",
				"input",
				"office",
				"work"
			],
			"name": "trackball"
		},
		"tractor": {
			"aliases": [],
			"ascii_arts": [],
			"category": "travel",
			"code": "tractor",
			"code_points": [
				"1f69c"
			],
			"keywords": [
				"agriculture",
				"car",
				"construction",
				"digger",
				"farm",
				"farming",
				"machine",
				"tractor",
				"transportation",
				"vehicle"
			],
			"name": "tractor"
		},
		"traffic_light": {
			"aliases": [],
			"ascii_arts": [],
			"category": "travel",
			"code": "traffic_light",
			"code_points": [
				"1f6a5"
			],
			"keywords": [
				"go",
				"horizontal",
				"light",
				"object",
				"stop",
				"stop light",
				"traffic",
				"transportation",
				"yield"
			],
			"name": "horizontal traffic light"
		},
		"train": {
			"aliases": [],
			"ascii_arts": [],
			"category": "travel",
			"code": "train",
			"code_points": [
				"1f68b"
			],
			"keywords": [
				"rail",
				"train",
				"tram",
				"transportation",
				"travel"
			],
			"name": "Tram Car"
		},
		"train2": {
			"aliases": [],
			"ascii_arts": [],
			"category": "travel",
			"code": "train2",
			"code_points": [
				"1f686"
			],
			"keywords": [
				"locomotive",
				"rail",
				"train",
				"transportation",
				"travel",
				"vehicle"
			],
			"name": "train"
		},
		"tram": {
			"aliases": [],
			"ascii_arts": [],
			"category": "travel",
			"code": "tram",
			"code_points": [
				"1f68a"
			],
			"keywords": [
				"train",
				"tram",
				"transport",
				"transportation",
				"travel",
				"vehicle"
			],
			"name": "tram"
		},
		"triangular_flag_on_post": {
			"aliases": [],
			"ascii_arts": [],
			"category": "objects",
			"code": "triangular_flag_on_post",
			"code_points": [
				"1f6a9"
			],
			"keywords": [
				"flag",
				"flagpole",
				"golf",
				"object",
				"post",
				"triangle",
				"triangular"
			],
			"name": "triangular flag on post"
		},
		"triangular_ruler": {
			"aliases": [],
			"ascii_arts": [],
			"category": "objects",
			"code": "triangular_ruler",
			"code_points": [
				"1f4d0"
			],
			"keywords": [
				"architect",
				"math",
				"object",
				"office",
				"sketch",
				"stationery",
				"tool"
			],
			"name": "triangular ruler"
		},
		"trident": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "trident",
			"code_points": [
				"1f531"
			],
			"keywords": [
				"object",
				"spear",
				"symbol",
				"weapon"
			],
			"name": "trident emblem"
		},
		"triumph": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "triumph",
			"code_points": [
				"1f624"
			],
			"keywords": [
				"angry",
				"breath",
				"emotion",
				"face",
				"gas",
				"mad",
				"phew",
				"smiley",
				"steam",
				"triumph"
			],
			"name": "face with look of triumph"
		},
		"trolleybus": {
			"aliases": [],
			"ascii_arts": [],
			"category": "travel",
			"code": "trolleybus",
			"code_points": [
				"1f68e"
			],
			"keywords": [
				"bart",
				"bus",
				"city",
				"transport",
				"transportation",
				"travel",
				"trolley",
				"vehicle"
			],
			"name": "trolleybus"
		},
		"trophy": {
			"aliases": [],
			"ascii_arts": [],
			"category": "activity",
			"code": "trophy",
			"code_points": [
				"1f3c6"
			],
			"keywords": [
				"achievement",
				"award",
				"ceremony",
				"contest",
				"first",
				"ftw",
				"game",
				"medal",
				"object",
				"parties",
				"perfect",
				"place",
				"reward",
				"show",
				"trophy",
				"win"
			],
			"name": "trophy"
		},
		"tropical_drink": {
			"aliases": [],
			"ascii_arts": [],
			"category": "food",
			"code": "tropical_drink",
			"code_points": [
				"1f379"
			],
			"keywords": [
				"alcohol",
				"beverage",
				"cocktail",
				"coconut",
				"drink",
				"fruit",
				"mixed",
				"pina",
				"pineapple",
				"tropical",
				"umbrella"
			],
			"name": "tropical drink"
		},
		"tropical_fish": {
			"aliases": [],
			"ascii_arts": [],
			"category": "nature",
			"code": "tropical_fish",
			"code_points": [
				"1f420"
			],
			"keywords": [
				"animal",
				"swim",
				"wildlife"
			],
			"name": "tropical fish"
		},
		"truck": {
			"aliases": [],
			"ascii_arts": [],
			"category": "travel",
			"code": "truck",
			"code_points": [
				"1f69a"
			],
			"keywords": [
				"cars",
				"delivery",
				"package",
				"transportation",
				"truck"
			],
			"name": "delivery truck"
		},
		"trumpet": {
			"aliases": [],
			"ascii_arts": [],
			"category": "activity",
			"code": "trumpet",
			"code_points": [
				"1f3ba"
			],
			"keywords": [
				"brass",
				"instrument",
				"instruments",
				"music",
				"trumpet"
			],
			"name": "trumpet"
		},
		"tulip": {
			"aliases": [],
			"ascii_arts": [],
			"category": "nature",
			"code": "tulip",
			"code_points": [
				"1f337"
			],
			"keywords": [
				"bulb",
				"easter",
				"flower",
				"flowers",
				"girls night",
				"nature",
				"plant",
				"spring",
				"tulip",
				"vagina"
			],
			"name": "tulip"
		},
		"tumbler_glass": {
			"aliases": [
				"whisky"
			],
			"ascii_arts": [],
			"category": "food",
			"code": "tumbler_glass",
			"code_points": [
				"1f943"
			],
			"keywords": [
				"booze"
			],
			"name": "tumbler glass"
		},
		"turkey": {
			"aliases": [],
			"ascii_arts": [],
			"category": "nature",
			"code": "turkey",
			"code_points": [
				"1f983"
			],
			"keywords": [
				"animal",
				"wildlife"
			],
			"name": "turkey"
		},
		"turtle": {
			"aliases": [],
			"ascii_arts": [],
			"category": "nature",
			"code": "turtle",
			"code_points": [
				"1f422"
			],
			"keywords": [
				"animal",
				"chelonian",
				"reptile",
				"shell",
				"slow",
				"snap",
				"steady",
				"tortoise",
				"turtle",
				"wildlife"
			],
			"name": "turtle"
		},
		"tv": {
			"aliases": [],
			"ascii_arts": [],
			"category": "objects",
			"code": "tv",
			"code_points": [
				"1f4fa"
			],
			"keywords": [
				"electronics",
				"entertainment",
				"object",
				"oldschool",
				"program",
				"show",
				"technology",
				"tv",
				"video"
			],
			"name": "television"
		},
		"twisted_rightwards_arrows": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "twisted_rightwards_arrows",
			"code_points": [
				"1f500"
			],
			"keywords": [
				"arrow",
				"blue-square",
				"symbol"
			],
			"name": "twisted rightwards arrows"
		},
		"two": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "two",
			"code_points": [
				"32",
				"fe0f",
				"20e3"
			],
			"keywords": [
				"2",
				"blue-square",
				"math",
				"number",
				"numbers",
				"prime",
				"symbol"
			],
			"name": "keycap digit two"
		},
		"two_hearts": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "two_hearts",
			"code_points": [
				"1f495"
			],
			"keywords": [
				"affection",
				"emotion",
				"heart",
				"hearts",
				"like",
				"love",
				"symbol",
				"two",
				"valentines"
			],
			"name": "two hearts"
		},
		"two_men_holding_hands": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "two_men_holding_hands",
			"code_points": [
				"1f46c"
			],
			"keywords": [
				"bromance",
				"couple",
				"friends",
				"gay",
				"hands",
				"holding",
				"homosexual",
				"lgbt",
				"like",
				"love",
				"men",
				"people",
				"sex",
				"team",
				"unity"
			],
			"name": "two men holding hands"
		},
		"two_women_holding_hands": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "two_women_holding_hands",
			"code_points": [
				"1f46d"
			],
			"keywords": [
				"couple",
				"daughter",
				"female",
				"friends",
				"gay",
				"girlfriends",
				"girls night",
				"hands",
				"homosexual",
				"lesbian",
				"lgbt",
				"like",
				"love",
				"mother",
				"people",
				"sex",
				"sisters",
				"unity",
				"women"
			],
			"name": "two women holding hands"
		},
		"u5272": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "u5272",
			"code_points": [
				"1f239"
			],
			"keywords": [
				"chinese",
				"cut",
				"divide",
				"kanji",
				"pink",
				"symbol"
			],
			"name": "squared cjk unified ideograph-5272"
		},
		"u5408": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "u5408",
			"code_points": [
				"1f234"
			],
			"keywords": [
				"chinese",
				"japan",
				"japanese",
				"join",
				"kanji",
				"symbol"
			],
			"name": "squared cjk unified ideograph-5408"
		},
		"u55b6": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "u55b6",
			"code_points": [
				"1f23a"
			],
			"keywords": [
				"japanese",
				"opening hours",
				"symbol"
			],
			"name": "squared cjk unified ideograph-55b6"
		},
		"u6307": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "u6307",
			"code_points": [
				"1f22f",
				"fe0f"
			],
			"keywords": [
				"chinese",
				"green-square",
				"kanji",
				"point",
				"symbol"
			],
			"name": "squared cjk unified ideograph-6307"
		},
		"u6708": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "u6708",
			"code_points": [
				"1f237"
			],
			"keywords": [
				"chinese",
				"japanese",
				"kanji",
				"moon",
				"orange-square",
				"symbol"
			],
			"name": "squared cjk unified ideograph-6708"
		},
		"u6709": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "u6709",
			"code_points": [
				"1f236"
			],
			"keywords": [
				"chinese",
				"have",
				"kanji",
				"orange-square",
				"symbol"
			],
			"name": "squared cjk unified ideograph-6709"
		},
		"u6e80": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "u6e80",
			"code_points": [
				"1f235"
			],
			"keywords": [
				"chinese",
				"full",
				"japan",
				"japanese",
				"kanji",
				"red-square",
				"symbol"
			],
			"name": "squared cjk unified ideograph-6e80"
		},
		"u7121": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "u7121",
			"code_points": [
				"1f21a",
				"fe0f"
			],
			"keywords": [
				"chinese",
				"japanese",
				"kanji",
				"no",
				"nothing",
				"orange-square",
				"symbol"
			],
			"name": "squared cjk unified ideograph-7121"
		},
		"u7533": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "u7533",
			"code_points": [
				"1f238"
			],
			"keywords": [
				"chinese",
				"japanese",
				"kanji",
				"symbol"
			],
			"name": "squared cjk unified ideograph-7533"
		},
		"u7981": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "u7981",
			"code_points": [
				"1f232"
			],
			"keywords": [
				"chinese",
				"forbidden",
				"japan",
				"japanese",
				"kanji",
				"limit",
				"restricted",
				"symbol"
			],
			"name": "squared cjk unified ideograph-7981"
		},
		"u7a7a": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "u7a7a",
			"code_points": [
				"1f233"
			],
			"keywords": [
				"chinese",
				"empty",
				"japanese",
				"kanji",
				"symbol"
			],
			"name": "squared cjk unified ideograph-7a7a"
		},
		"umbrella": {
			"aliases": [],
			"ascii_arts": [],
			"category": "nature",
			"code": "umbrella",
			"code_points": [
				"2614",
				"fe0f"
			],
			"keywords": [
				"cold",
				"rain",
				"sky",
				"weather"
			],
			"name": "umbrella with rain drops"
		},
		"umbrella2": {
			"aliases": [],
			"ascii_arts": [],
			"category": "nature",
			"code": "umbrella2",
			"code_points": [
				"2602"
			],
			"keywords": [
				"clothing",
				"cold",
				"nature",
				"object",
				"rain",
				"sky",
				"weather"
			],
			"name": "umbrella"
		},
		"unamused": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "unamused",
			"code_points": [
				"1f612"
			],
			"keywords": [
				"bored",
				"depressed",
				"disapprove",
				"emotion",
				"face",
				"indifference",
				"lame",
				"mad",
				"not amused",
				"sad",
				"serious",
				"smiley",
				"straight face",
				"tired",
				"unamused",
				"unhappy"
			],
			"name": "unamused face"
		},
		"underage": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "underage",
			"code_points": [
				"1f51e"
			],
			"keywords": [
				"18",
				"drink",
				"night",
				"pub",
				"symbol"
			],
			"name": "no one under eighteen symbol"
		},
		"unicorn": {
			"aliases": [
				"unicorn_face"
			],
			"ascii_arts": [],
			"category": "nature",
			"code": "unicorn",
			"code_points": [
				"1f984"
			],
			"keywords": [
				"animal"
			],
			"name": "unicorn face"
		},
		"unlock": {
			"aliases": [],
			"ascii_arts": [],
			"category": "objects",
			"code": "unlock",
			"code_points": [
				"1f513"
			],
			"keywords": [
				"lock",
				"object",
				"privacy",
				"security"
			],
			"name": "open lock"
		},
		"up": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "up",
			"code_points": [
				"1f199"
			],
			"keywords": [
				"blue-square",
				"symbol"
			],
			"name": "squared up with exclamation mark"
		},
		"upside_down": {
			"aliases": [
				"upside_down_face"
			],
			"ascii_arts": [],
			"category": "people",
			"code": "upside_down",
			"code_points": [
				"1f643"
			],
			"keywords": [
				"sarcastic",
				"silly",
				"smiley"
			],
			"name": "upside-down face"
		},
		"urn": {
			"aliases": [
				"funeral_urn"
			],
			"ascii_arts": [],
			"category": "objects",
			"code": "urn",
			"code_points": [
				"26b1"
			],
			"keywords": [
				"dead",
				"death",
				"object",
				"rip"
			],
			"name": "funeral urn"
		},
		"v": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "v",
			"code_points": [
				"270c",
				"fe0f"
			],
			"keywords": [
				"body",
				"diversity",
				"fingers",
				"girls night",
				"hand",
				"hands",
				"hi",
				"ohyeah",
				"peace",
				"thank you",
				"two",
				"victory"
			],
			"name": "victory hand"
		},
		"v_tone1": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "v_tone1",
			"code_points": [
				"270c",
				"1f3fb"
			],
			"keywords": [
				"fingers",
				"ohyeah",
				"peace",
				"two",
				"v"
			],
			"name": "victory hand tone 1"
		},
		"v_tone2": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "v_tone2",
			"code_points": [
				"270c",
				"1f3fc"
			],
			"keywords": [
				"fingers",
				"ohyeah",
				"peace",
				"two",
				"v"
			],
			"name": "victory hand tone 2"
		},
		"v_tone3": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "v_tone3",
			"code_points": [
				"270c",
				"1f3fd"
			],
			"keywords": [
				"fingers",
				"ohyeah",
				"peace",
				"two",
				"v"
			],
			"name": "victory hand tone 3"
		},
		"v_tone4": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "v_tone4",
			"code_points": [
				"270c",
				"1f3fe"
			],
			"keywords": [
				"fingers",
				"ohyeah",
				"peace",
				"two",
				"v"
			],
			"name": "victory hand tone 4"
		},
		"v_tone5": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "v_tone5",
			"code_points": [
				"270c",
				"1f3ff"
			],
			"keywords": [
				"fingers",
				"ohyeah",
				"peace",
				"two",
				"v"
			],
			"name": "victory hand tone 5"
		},
		"vertical_traffic_light": {
			"aliases": [],
			"ascii_arts": [],
			"category": "travel",
			"code": "vertical_traffic_light",
			"code_points": [
				"1f6a6"
			],
			"keywords": [
				"go",
				"light",
				"object",
				"stop",
				"stop light",
				"traffic",
				"transportation",
				"vertical",
				"yield"
			],
			"name": "vertical traffic light"
		},
		"vhs": {
			"aliases": [],
			"ascii_arts": [],
			"category": "objects",
			"code": "vhs",
			"code_points": [
				"1f4fc"
			],
			"keywords": [
				"electronics",
				"oldschool",
				"record",
				"video"
			],
			"name": "videocassette"
		},
		"vibration_mode": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "vibration_mode",
			"code_points": [
				"1f4f3"
			],
			"keywords": [
				"orange-square",
				"phone",
				"symbol"
			],
			"name": "vibration mode"
		},
		"video_camera": {
			"aliases": [],
			"ascii_arts": [],
			"category": "objects",
			"code": "video_camera",
			"code_points": [
				"1f4f9"
			],
			"keywords": [
				"camera",
				"electronics",
				"film",
				"movie",
				"record"
			],
			"name": "video camera"
		},
		"video_game": {
			"aliases": [],
			"ascii_arts": [],
			"category": "activity",
			"code": "video_game",
			"code_points": [
				"1f3ae"
			],
			"keywords": [
				"PS4",
				"boys night",
				"console",
				"controller",
				"electronics",
				"game",
				"nintendo",
				"play",
				"playstation",
				"video",
				"xbox"
			],
			"name": "video game"
		},
		"violin": {
			"aliases": [],
			"ascii_arts": [],
			"category": "activity",
			"code": "violin",
			"code_points": [
				"1f3bb"
			],
			"keywords": [
				"fiddle",
				"instrument",
				"instruments",
				"music",
				"sarcastic",
				"violin"
			],
			"name": "violin"
		},
		"virgo": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "virgo",
			"code_points": [
				"264d",
				"fe0f"
			],
			"keywords": [
				"astrology",
				"constellation",
				"greek",
				"horoscope",
				"maiden",
				"sign",
				"stars",
				"symbol",
				"virgo",
				"zodiac"
			],
			"name": "virgo"
		},
		"volcano": {
			"aliases": [],
			"ascii_arts": [],
			"category": "travel",
			"code": "volcano",
			"code_points": [
				"1f30b"
			],
			"keywords": [
				"explode",
				"hot",
				"lava",
				"magma",
				"nature",
				"photo",
				"places",
				"tropical",
				"volcano"
			],
			"name": "volcano"
		},
		"volleyball": {
			"aliases": [],
			"ascii_arts": [],
			"category": "activity",
			"code": "volleyball",
			"code_points": [
				"1f3d0"
			],
			"keywords": [
				"ball",
				"game",
				"sport",
				"volleyball"
			],
			"name": "volleyball"
		},
		"vs": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "vs",
			"code_points": [
				"1f19a"
			],
			"keywords": [
				"orange-square",
				"symbol",
				"words"
			],
			"name": "squared vs"
		},
		"vulcan": {
			"aliases": [
				"raised_hand_with_part_between_middle_and_ring_fingers"
			],
			"ascii_arts": [],
			"category": "people",
			"code": "vulcan",
			"code_points": [
				"1f596"
			],
			"keywords": [
				"body",
				"diversity",
				"hands",
				"hi",
				"leonard",
				"live long",
				"nimoy",
				"spock",
				"star trek",
				"vulcan"
			],
			"name": "raised hand with part between middle and ring fingers"
		},
		"vulcan_tone1": {
			"aliases": [
				"raised_hand_with_part_between_middle_and_ring_fingers_tone1"
			],
			"ascii_arts": [],
			"category": "people",
			"code": "vulcan_tone1",
			"code_points": [
				"1f596",
				"1f3fb"
			],
			"keywords": [
				"leonard",
				"live long",
				"nimoy",
				"spock",
				"star trek",
				"vulcan"
			],
			"name": "raised hand with part between middle and ring fingers tone 1"
		},
		"vulcan_tone2": {
			"aliases": [
				"raised_hand_with_part_between_middle_and_ring_fingers_tone2"
			],
			"ascii_arts": [],
			"category": "people",
			"code": "vulcan_tone2",
			"code_points": [
				"1f596",
				"1f3fc"
			],
			"keywords": [
				"leonard",
				"live long",
				"nimoy",
				"spock",
				"star trek",
				"vulcan"
			],
			"name": "raised hand with part between middle and ring fingers tone 2"
		},
		"vulcan_tone3": {
			"aliases": [
				"raised_hand_with_part_between_middle_and_ring_fingers_tone3"
			],
			"ascii_arts": [],
			"category": "people",
			"code": "vulcan_tone3",
			"code_points": [
				"1f596",
				"1f3fd"
			],
			"keywords": [
				"leonard",
				"live long",
				"nimoy",
				"spock",
				"star trek",
				"vulcan"
			],
			"name": "raised hand with part between middle and ring fingers tone 3"
		},
		"vulcan_tone4": {
			"aliases": [
				"raised_hand_with_part_between_middle_and_ring_fingers_tone4"
			],
			"ascii_arts": [],
			"category": "people",
			"code": "vulcan_tone4",
			"code_points": [
				"1f596",
				"1f3fe"
			],
			"keywords": [
				"leonard",
				"live long",
				"nimoy",
				"spock",
				"star trek",
				"vulcan"
			],
			"name": "raised hand with part between middle and ring fingers tone 4"
		},
		"vulcan_tone5": {
			"aliases": [
				"raised_hand_with_part_between_middle_and_ring_fingers_tone5"
			],
			"ascii_arts": [],
			"category": "people",
			"code": "vulcan_tone5",
			"code_points": [
				"1f596",
				"1f3ff"
			],
			"keywords": [
				"leonard",
				"live long",
				"nimoy",
				"spock",
				"star trek",
				"vulcan"
			],
			"name": "raised hand with part between middle and ring fingers tone 5"
		},
		"walking": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "walking",
			"code_points": [
				"1f6b6"
			],
			"keywords": [
				"diversity",
				"feet",
				"foot",
				"human",
				"man",
				"men",
				"pedestrian",
				"people",
				"stride",
				"stroll",
				"walk"
			],
			"name": "pedestrian"
		},
		"walking_tone1": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "walking_tone1",
			"code_points": [
				"1f6b6",
				"1f3fb"
			],
			"keywords": [
				"hike",
				"hiking",
				"man",
				"stride",
				"stroll",
				"walk"
			],
			"name": "pedestrian tone 1"
		},
		"walking_tone2": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "walking_tone2",
			"code_points": [
				"1f6b6",
				"1f3fc"
			],
			"keywords": [
				"hike",
				"hiking",
				"man",
				"stride",
				"stroll",
				"walk"
			],
			"name": "pedestrian tone 2"
		},
		"walking_tone3": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "walking_tone3",
			"code_points": [
				"1f6b6",
				"1f3fd"
			],
			"keywords": [
				"hike",
				"hiking",
				"man",
				"stride",
				"stroll",
				"walk"
			],
			"name": "pedestrian tone 3"
		},
		"walking_tone4": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "walking_tone4",
			"code_points": [
				"1f6b6",
				"1f3fe"
			],
			"keywords": [
				"hike",
				"hiking",
				"man",
				"stride",
				"stroll",
				"walk"
			],
			"name": "pedestrian tone 4"
		},
		"walking_tone5": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "walking_tone5",
			"code_points": [
				"1f6b6",
				"1f3ff"
			],
			"keywords": [
				"hike",
				"hiking",
				"man",
				"stride",
				"stroll",
				"walk"
			],
			"name": "pedestrian tone 5"
		},
		"waning_crescent_moon": {
			"aliases": [],
			"ascii_arts": [],
			"category": "nature",
			"code": "waning_crescent_moon",
			"code_points": [
				"1f318"
			],
			"keywords": [
				"cheese",
				"crescent",
				"moon",
				"nature",
				"night",
				"phase",
				"sky",
				"space",
				"waning"
			],
			"name": "waning crescent moon symbol"
		},
		"waning_gibbous_moon": {
			"aliases": [],
			"ascii_arts": [],
			"category": "nature",
			"code": "waning_gibbous_moon",
			"code_points": [
				"1f316"
			],
			"keywords": [
				"cheese",
				"gibbous",
				"moon",
				"nature",
				"night",
				"phase",
				"sky",
				"space",
				"waning"
			],
			"name": "waning gibbous moon symbol"
		},
		"warning": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "warning",
			"code_points": [
				"26a0",
				"fe0f"
			],
			"keywords": [
				"exclamation",
				"punctuation",
				"symbol",
				"wip"
			],
			"name": "warning sign"
		},
		"wastebasket": {
			"aliases": [],
			"ascii_arts": [],
			"category": "objects",
			"code": "wastebasket",
			"code_points": [
				"1f5d1"
			],
			"keywords": [
				"dispose",
				"garbage",
				"object",
				"trash",
				"work"
			],
			"name": "wastebasket"
		},
		"watch": {
			"aliases": [],
			"ascii_arts": [],
			"category": "objects",
			"code": "watch",
			"code_points": [
				"231a",
				"fe0f"
			],
			"keywords": [
				"accessories",
				"electronics",
				"time"
			],
			"name": "watch"
		},
		"water_buffalo": {
			"aliases": [],
			"ascii_arts": [],
			"category": "nature",
			"code": "water_buffalo",
			"code_points": [
				"1f403"
			],
			"keywords": [
				"animal",
				"asia",
				"bovine",
				"buffalo",
				"cow",
				"dairy",
				"milk",
				"nature",
				"ox",
				"water",
				"wildlife"
			],
			"name": "water buffalo"
		},
		"water_polo": {
			"aliases": [],
			"ascii_arts": [],
			"category": "activity",
			"code": "water_polo",
			"code_points": [
				"1f93d"
			],
			"keywords": [],
			"name": "water polo"
		},
		"water_polo_tone1": {
			"aliases": [],
			"ascii_arts": [],
			"category": "activity",
			"code": "water_polo_tone1",
			"code_points": [
				"1f93d",
				"1f3fb"
			],
			"keywords": [],
			"name": "water polo tone 1"
		},
		"water_polo_tone2": {
			"aliases": [],
			"ascii_arts": [],
			"category": "activity",
			"code": "water_polo_tone2",
			"code_points": [
				"1f93d",
				"1f3fc"
			],
			"keywords": [],
			"name": "water polo tone 2"
		},
		"water_polo_tone3": {
			"aliases": [],
			"ascii_arts": [],
			"category": "activity",
			"code": "water_polo_tone3",
			"code_points": [
				"1f93d",
				"1f3fd"
			],
			"keywords": [],
			"name": "water polo tone 3"
		},
		"water_polo_tone4": {
			"aliases": [],
			"ascii_arts": [],
			"category": "activity",
			"code": "water_polo_tone4",
			"code_points": [
				"1f93d",
				"1f3fe"
			],
			"keywords": [],
			"name": "water polo tone 4"
		},
		"water_polo_tone5": {
			"aliases": [],
			"ascii_arts": [],
			"category": "activity",
			"code": "water_polo_tone5",
			"code_points": [
				"1f93d",
				"1f3ff"
			],
			"keywords": [],
			"name": "water polo tone 5"
		},
		"watermelon": {
			"aliases": [],
			"ascii_arts": [],
			"category": "food",
			"code": "watermelon",
			"code_points": [
				"1f349"
			],
			"keywords": [
				"food",
				"fruit",
				"large",
				"melon",
				"summer",
				"watermelon"
			],
			"name": "watermelon"
		},
		"wave": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "wave",
			"code_points": [
				"1f44b"
			],
			"keywords": [
				"body",
				"diversity",
				"farewell",
				"gesture",
				"goodbye",
				"hands",
				"hi",
				"solong"
			],
			"name": "waving hand sign"
		},
		"wave_tone1": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "wave_tone1",
			"code_points": [
				"1f44b",
				"1f3fb"
			],
			"keywords": [
				"farewell",
				"gesture",
				"goodbye",
				"hi",
				"solong",
				"wave"
			],
			"name": "waving hand sign tone 1"
		},
		"wave_tone2": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "wave_tone2",
			"code_points": [
				"1f44b",
				"1f3fc"
			],
			"keywords": [
				"farewell",
				"gesture",
				"goodbye",
				"hi",
				"solong",
				"wave"
			],
			"name": "waving hand sign tone 2"
		},
		"wave_tone3": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "wave_tone3",
			"code_points": [
				"1f44b",
				"1f3fd"
			],
			"keywords": [
				"farewell",
				"gesture",
				"goodbye",
				"hi",
				"solong",
				"wave"
			],
			"name": "waving hand sign tone 3"
		},
		"wave_tone4": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "wave_tone4",
			"code_points": [
				"1f44b",
				"1f3fe"
			],
			"keywords": [
				"farewell",
				"gesture",
				"goodbye",
				"hi",
				"solong",
				"wave"
			],
			"name": "waving hand sign tone 4"
		},
		"wave_tone5": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "wave_tone5",
			"code_points": [
				"1f44b",
				"1f3ff"
			],
			"keywords": [
				"farewell",
				"gesture",
				"goodbye",
				"hi",
				"solong",
				"wave"
			],
			"name": "waving hand sign tone 5"
		},
		"wavy_dash": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "wavy_dash",
			"code_points": [
				"3030"
			],
			"keywords": [
				"draw",
				"line",
				"symbol"
			],
			"name": "wavy dash"
		},
		"waxing_crescent_moon": {
			"aliases": [],
			"ascii_arts": [],
			"category": "nature",
			"code": "waxing_crescent_moon",
			"code_points": [
				"1f312"
			],
			"keywords": [
				"cheese",
				"moon",
				"nature",
				"night",
				"phase",
				"sky",
				"space",
				"waxing"
			],
			"name": "waxing crescent moon symbol"
		},
		"waxing_gibbous_moon": {
			"aliases": [
				"moon"
			],
			"ascii_arts": [],
			"category": "nature",
			"code": "waxing_gibbous_moon",
			"code_points": [
				"1f314"
			],
			"keywords": [
				"moon",
				"nature",
				"sky",
				"space"
			],
			"name": "waxing gibbous moon symbol"
		},
		"wc": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "wc",
			"code_points": [
				"1f6be"
			],
			"keywords": [
				"bathroom",
				"blue-square",
				"closet",
				"flush",
				"plumbing",
				"porcelain",
				"restroom",
				"symbol",
				"throne",
				"toilet",
				"waste",
				"water"
			],
			"name": "water closet"
		},
		"weary": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "weary",
			"code_points": [
				"1f629"
			],
			"keywords": [
				"emotion",
				"exhausted",
				"face",
				"finals",
				"frustrated",
				"sad",
				"school",
				"sleepy",
				"smiley",
				"stressed",
				"study",
				"tired",
				"tiredness",
				"weary"
			],
			"name": "weary face"
		},
		"wedding": {
			"aliases": [],
			"ascii_arts": [],
			"category": "travel",
			"code": "wedding",
			"code_points": [
				"1f492"
			],
			"keywords": [
				"affection",
				"bride",
				"building",
				"couple",
				"groom",
				"like",
				"love",
				"marriage",
				"parties",
				"places",
				"wedding"
			],
			"name": "wedding"
		},
		"whale": {
			"aliases": [],
			"ascii_arts": [],
			"category": "nature",
			"code": "whale",
			"code_points": [
				"1f433"
			],
			"keywords": [
				"animal",
				"nature",
				"ocean",
				"sea",
				"tropical",
				"whales",
				"wildlife"
			],
			"name": "spouting whale"
		},
		"whale2": {
			"aliases": [],
			"ascii_arts": [],
			"category": "nature",
			"code": "whale2",
			"code_points": [
				"1f40b"
			],
			"keywords": [
				"animal",
				"bloated",
				"blubber",
				"fat",
				"large",
				"massive",
				"nature",
				"ocean",
				"sea",
				"tropical",
				"whale",
				"whales",
				"wildlife"
			],
			"name": "whale"
		},
		"wheel_of_dharma": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "wheel_of_dharma",
			"code_points": [
				"2638"
			],
			"keywords": [
				"buddhist",
				"religion",
				"symbol"
			],
			"name": "wheel of dharma"
		},
		"wheelchair": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "wheelchair",
			"code_points": [
				"267f",
				"fe0f"
			],
			"keywords": [
				"blue-square",
				"disabled",
				"symbol"
			],
			"name": "wheelchair symbol"
		},
		"white_check_mark": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "white_check_mark",
			"code_points": [
				"2705"
			],
			"keywords": [
				"agree",
				"green-square",
				"ok",
				"symbol"
			],
			"name": "white heavy check mark"
		},
		"white_circle": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "white_circle",
			"code_points": [
				"26aa",
				"fe0f"
			],
			"keywords": [
				"circle",
				"shape",
				"shapes",
				"symbol"
			],
			"name": "medium white circle"
		},
		"white_flower": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "white_flower",
			"code_points": [
				"1f4ae"
			],
			"keywords": [
				"assignment",
				"brilliance",
				"flower",
				"grade",
				"homework",
				"intelligence",
				"japanese",
				"praise",
				"school",
				"score",
				"student",
				"symbol",
				"teacher",
				"white"
			],
			"name": "white flower"
		},
		"white_large_square": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "white_large_square",
			"code_points": [
				"2b1c",
				"fe0f"
			],
			"keywords": [
				"shape",
				"shapes",
				"square",
				"symbol"
			],
			"name": "white large square"
		},
		"white_medium_small_square": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "white_medium_small_square",
			"code_points": [
				"25fd",
				"fe0f"
			],
			"keywords": [
				"shape",
				"shapes",
				"square",
				"symbol"
			],
			"name": "white medium small square"
		},
		"white_medium_square": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "white_medium_square",
			"code_points": [
				"25fb",
				"fe0f"
			],
			"keywords": [
				"shape",
				"shapes",
				"square",
				"symbol"
			],
			"name": "white medium square"
		},
		"white_small_square": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "white_small_square",
			"code_points": [
				"25ab",
				"fe0f"
			],
			"keywords": [
				"shape",
				"shapes",
				"square",
				"symbol"
			],
			"name": "white small square"
		},
		"white_square_button": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "white_square_button",
			"code_points": [
				"1f533"
			],
			"keywords": [
				"shape",
				"shapes",
				"square",
				"symbol"
			],
			"name": "white square button"
		},
		"white_sun_cloud": {
			"aliases": [
				"white_sun_behind_cloud"
			],
			"ascii_arts": [],
			"category": "nature",
			"code": "white_sun_cloud",
			"code_points": [
				"1f325"
			],
			"keywords": [
				"cloud",
				"cold",
				"nature",
				"sky",
				"sun",
				"weather"
			],
			"name": "white sun behind cloud"
		},
		"white_sun_rain_cloud": {
			"aliases": [
				"white_sun_behind_cloud_with_rain"
			],
			"ascii_arts": [],
			"category": "nature",
			"code": "white_sun_rain_cloud",
			"code_points": [
				"1f326"
			],
			"keywords": [
				"cloud",
				"cold",
				"nature",
				"rain",
				"sky",
				"sun",
				"weather"
			],
			"name": "white sun behind cloud with rain"
		},
		"white_sun_small_cloud": {
			"aliases": [
				"white_sun_with_small_cloud"
			],
			"ascii_arts": [],
			"category": "nature",
			"code": "white_sun_small_cloud",
			"code_points": [
				"1f324"
			],
			"keywords": [
				"cloud",
				"nature",
				"sky",
				"sun",
				"weather"
			],
			"name": "white sun with small cloud"
		},
		"wilted_rose": {
			"aliases": [
				"wilted_flower"
			],
			"ascii_arts": [],
			"category": "nature",
			"code": "wilted_rose",
			"code_points": [
				"1f940"
			],
			"keywords": [],
			"name": "wilted flower"
		},
		"wind_blowing_face": {
			"aliases": [],
			"ascii_arts": [],
			"category": "nature",
			"code": "wind_blowing_face",
			"code_points": [
				"1f32c"
			],
			"keywords": [
				"cold",
				"mother",
				"nature",
				"weather"
			],
			"name": "wind blowing face"
		},
		"wind_chime": {
			"aliases": [],
			"ascii_arts": [],
			"category": "objects",
			"code": "wind_chime",
			"code_points": [
				"1f390"
			],
			"keywords": [
				"bell",
				"chime",
				"ding",
				"fūrin",
				"instrument",
				"japan",
				"music",
				"nature",
				"object",
				"protective",
				"soothing",
				"sound",
				"spirits",
				"spiritual",
				"wind"
			],
			"name": "wind chime"
		},
		"wine_glass": {
			"aliases": [],
			"ascii_arts": [],
			"category": "food",
			"code": "wine_glass",
			"code_points": [
				"1f377"
			],
			"keywords": [
				"alcohol",
				"beverage",
				"booze",
				"bottle",
				"drink",
				"drunk",
				"fermented",
				"girls night",
				"glass",
				"grapes",
				"italian",
				"parties",
				"tasting",
				"wine",
				"winery"
			],
			"name": "wine glass"
		},
		"wink": {
			"aliases": [],
			"ascii_arts": [
				"*)",
				"*-)",
				";)",
				";-)",
				";-]",
				";D",
				";]",
				";^)"
			],
			"category": "people",
			"code": "wink",
			"code_points": [
				"1f609"
			],
			"keywords": [
				"emotion",
				"face",
				"friendly",
				"happy",
				"joke",
				"mischievous",
				"secret",
				"silly",
				"smiley",
				"wink",
				"winking"
			],
			"name": "winking face"
		},
		"wolf": {
			"aliases": [],
			"ascii_arts": [],
			"category": "nature",
			"code": "wolf",
			"code_points": [
				"1f43a"
			],
			"keywords": [
				"animal",
				"nature",
				"roar",
				"wildlife"
			],
			"name": "wolf face"
		},
		"woman": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "woman",
			"code_points": [
				"1f469"
			],
			"keywords": [
				"diversity",
				"female",
				"feminist",
				"girls",
				"girls night",
				"people",
				"selfie",
				"sex",
				"women"
			],
			"name": "woman"
		},
		"woman_tone1": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "woman_tone1",
			"code_points": [
				"1f469",
				"1f3fb"
			],
			"keywords": [
				"female",
				"girl",
				"lady"
			],
			"name": "woman tone 1"
		},
		"woman_tone2": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "woman_tone2",
			"code_points": [
				"1f469",
				"1f3fc"
			],
			"keywords": [
				"female",
				"girl",
				"lady"
			],
			"name": "woman tone 2"
		},
		"woman_tone3": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "woman_tone3",
			"code_points": [
				"1f469",
				"1f3fd"
			],
			"keywords": [
				"female",
				"girl",
				"lady"
			],
			"name": "woman tone 3"
		},
		"woman_tone4": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "woman_tone4",
			"code_points": [
				"1f469",
				"1f3fe"
			],
			"keywords": [
				"female",
				"girl",
				"lady"
			],
			"name": "woman tone 4"
		},
		"woman_tone5": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "woman_tone5",
			"code_points": [
				"1f469",
				"1f3ff"
			],
			"keywords": [
				"female",
				"girl",
				"lady"
			],
			"name": "woman tone 5"
		},
		"womans_clothes": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "womans_clothes",
			"code_points": [
				"1f45a"
			],
			"keywords": [
				"blouse",
				"breasts",
				"cleavage",
				"clothes",
				"clothing",
				"dressed",
				"dressing",
				"fashion",
				"shirt",
				"shop",
				"shopping",
				"wardrobe",
				"woman",
				"women"
			],
			"name": "womans clothes"
		},
		"womans_hat": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "womans_hat",
			"code_points": [
				"1f452"
			],
			"keywords": [
				"accessories",
				"fashion",
				"female",
				"women"
			],
			"name": "womans hat"
		},
		"womens": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "womens",
			"code_points": [
				"1f6ba"
			],
			"keywords": [
				"avatar",
				"bathroom",
				"female",
				"girl",
				"purple-square",
				"restroom",
				"sign",
				"symbol",
				"woman"
			],
			"name": "womens symbol"
		},
		"worried": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "worried",
			"code_points": [
				"1f61f"
			],
			"keywords": [
				"anxious",
				"concern",
				"distressed",
				"emotion",
				"face",
				"nervous",
				"sad",
				"smiley",
				"tense",
				"worried"
			],
			"name": "worried face"
		},
		"wrench": {
			"aliases": [],
			"ascii_arts": [],
			"category": "objects",
			"code": "wrench",
			"code_points": [
				"1f527"
			],
			"keywords": [
				"diy",
				"ikea",
				"object",
				"tool",
				"tools"
			],
			"name": "wrench"
		},
		"wrestlers": {
			"aliases": [
				"wrestling"
			],
			"ascii_arts": [],
			"category": "activity",
			"code": "wrestlers",
			"code_points": [
				"1f93c"
			],
			"keywords": [],
			"name": "wrestlers"
		},
		"wrestlers_tone1": {
			"aliases": [
				"wrestling_tone1"
			],
			"ascii_arts": [],
			"category": "activity",
			"code": "wrestlers_tone1",
			"code_points": [
				"1f93c",
				"1f3fb"
			],
			"keywords": [],
			"name": "wrestlers tone 1"
		},
		"wrestlers_tone2": {
			"aliases": [
				"wrestling_tone2"
			],
			"ascii_arts": [],
			"category": "activity",
			"code": "wrestlers_tone2",
			"code_points": [
				"1f93c",
				"1f3fc"
			],
			"keywords": [],
			"name": "wrestlers tone 2"
		},
		"wrestlers_tone3": {
			"aliases": [
				"wrestling_tone3"
			],
			"ascii_arts": [],
			"category": "activity",
			"code": "wrestlers_tone3",
			"code_points": [
				"1f93c",
				"1f3fd"
			],
			"keywords": [],
			"name": "wrestlers tone 3"
		},
		"wrestlers_tone4": {
			"aliases": [
				"wrestling_tone4"
			],
			"ascii_arts": [],
			"category": "activity",
			"code": "wrestlers_tone4",
			"code_points": [
				"1f93c",
				"1f3fe"
			],
			"keywords": [],
			"name": "wrestlers tone 4"
		},
		"wrestlers_tone5": {
			"aliases": [
				"wrestling_tone5"
			],
			"ascii_arts": [],
			"category": "activity",
			"code": "wrestlers_tone5",
			"code_points": [
				"1f93c",
				"1f3ff"
			],
			"keywords": [],
			"name": "wrestlers tone 5"
		},
		"writing_hand": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "writing_hand",
			"code_points": [
				"270d",
				"fe0f"
			],
			"keywords": [
				"body",
				"diversity",
				"hands",
				"write"
			],
			"name": "writing hand"
		},
		"writing_hand_tone1": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "writing_hand_tone1",
			"code_points": [
				"270d",
				"1f3fb"
			],
			"keywords": [
				"draw",
				"sign",
				"signature",
				"write"
			],
			"name": "writing hand tone 1"
		},
		"writing_hand_tone2": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "writing_hand_tone2",
			"code_points": [
				"270d",
				"1f3fc"
			],
			"keywords": [
				"draw",
				"sign",
				"signature",
				"write"
			],
			"name": "writing hand tone 2"
		},
		"writing_hand_tone3": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "writing_hand_tone3",
			"code_points": [
				"270d",
				"1f3fd"
			],
			"keywords": [
				"draw",
				"sign",
				"signature",
				"write"
			],
			"name": "writing hand tone 3"
		},
		"writing_hand_tone4": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "writing_hand_tone4",
			"code_points": [
				"270d",
				"1f3fe"
			],
			"keywords": [
				"draw",
				"sign",
				"signature",
				"write"
			],
			"name": "writing hand tone 4"
		},
		"writing_hand_tone5": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "writing_hand_tone5",
			"code_points": [
				"270d",
				"1f3ff"
			],
			"keywords": [
				"draw",
				"sign",
				"signature",
				"write"
			],
			"name": "writing hand tone 5"
		},
		"x": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "x",
			"code_points": [
				"274c"
			],
			"keywords": [
				"delete",
				"no",
				"remove",
				"sol",
				"symbol"
			],
			"name": "cross mark"
		},
		"yellow_heart": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "yellow_heart",
			"code_points": [
				"1f49b"
			],
			"keywords": [
				"affection",
				"caring",
				"compassionate",
				"friendship",
				"gold",
				"happiness",
				"happy",
				"heart",
				"honest",
				"like",
				"love",
				"respectful",
				"selfless",
				"symbol",
				"trust",
				"valentines",
				"yellow"
			],
			"name": "yellow heart"
		},
		"yen": {
			"aliases": [],
			"ascii_arts": [],
			"category": "objects",
			"code": "yen",
			"code_points": [
				"1f4b4"
			],
			"keywords": [
				"banknote",
				"bill",
				"cash",
				"currency",
				"dollar",
				"japan",
				"japanese",
				"money",
				"paper",
				"yen"
			],
			"name": "banknote with yen sign"
		},
		"yin_yang": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "yin_yang",
			"code_points": [
				"262f"
			],
			"keywords": [
				"religion",
				"sign",
				"symbol",
				"tao",
				"taoist"
			],
			"name": "yin yang"
		},
		"yum": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "yum",
			"code_points": [
				"1f60b"
			],
			"keywords": [
				"delicious",
				"eat",
				"emotion",
				"face",
				"food",
				"good",
				"happy",
				"joy",
				"sarcastic",
				"savoring",
				"savory",
				"silly",
				"smile",
				"smiley",
				"tasty",
				"tongue",
				"yum",
				"yummy"
			],
			"name": "face savouring delicious food"
		},
		"zap": {
			"aliases": [],
			"ascii_arts": [],
			"category": "nature",
			"code": "zap",
			"code_points": [
				"26a1",
				"fe0f"
			],
			"keywords": [
				"diarrhea",
				"lightning bolt",
				"sky",
				"thunder",
				"weather"
			],
			"name": "high voltage sign"
		},
		"zero": {
			"aliases": [],
			"ascii_arts": [],
			"category": "symbols",
			"code": "zero",
			"code_points": [
				"30",
				"fe0f",
				"20e3"
			],
			"keywords": [
				"blue-square",
				"math",
				"null",
				"number",
				"numbers",
				"symbol"
			],
			"name": "keycap digit zero"
		},
		"zipper_mouth": {
			"aliases": [
				"zipper_mouth_face"
			],
			"ascii_arts": [],
			"category": "people",
			"code": "zipper_mouth",
			"code_points": [
				"1f910"
			],
			"keywords": [
				"mad",
				"smiley"
			],
			"name": "zipper-mouth face"
		},
		"zzz": {
			"aliases": [],
			"ascii_arts": [],
			"category": "people",
			"code": "zzz",
			"code_points": [
				"1f4a4"
			],
			"keywords": [
				"goodnight",
				"sleepy",
				"tired"
			],
			"name": "sleeping symbol"
		}
	};

/***/ },
/* 53 */
/***/ function(module, exports) {

	module.exports = [
		"#️⃣",
		"*️⃣",
		"0️⃣",
		"1️⃣",
		"2️⃣",
		"3️⃣",
		"4️⃣",
		"5️⃣",
		"6️⃣",
		"7️⃣",
		"8️⃣",
		"9️⃣",
		"©",
		"®",
		"‼️",
		"⁉️",
		"™️",
		"ℹ️",
		"↔️",
		"↕️",
		"↖️",
		"↗️",
		"↘️",
		"↙️",
		"↩️",
		"↪️",
		"⌚️",
		"⌛️",
		"⌨️",
		"⏩",
		"⏪",
		"⏫",
		"⏬",
		"⏭",
		"⏮",
		"⏯",
		"⏰",
		"⏱",
		"⏲",
		"⏳",
		"⏸",
		"⏹",
		"⏺",
		"Ⓜ️",
		"▪️",
		"▫️",
		"▶️",
		"◀️",
		"◻️",
		"◼️",
		"◽️",
		"◾️",
		"☀️",
		"☁️",
		"☂",
		"☃",
		"☄",
		"☎️",
		"☑️",
		"☔️",
		"☕️",
		"☘",
		"☝️",
		"☠",
		"☢",
		"☣",
		"☦",
		"☪",
		"☮",
		"☯",
		"☸",
		"☹",
		"☺️",
		"♈️",
		"♉️",
		"♊️",
		"♋️",
		"♌️",
		"♍️",
		"♎️",
		"♏️",
		"♐️",
		"♑️",
		"♒️",
		"♓️",
		"♠️",
		"♣️",
		"♥️",
		"♦️",
		"♨️",
		"♻️",
		"♿️",
		"⚒",
		"⚓️",
		"⚔",
		"⚖",
		"⚗",
		"⚙",
		"⚛",
		"⚜",
		"⚠️",
		"⚡️",
		"⚪️",
		"⚫️",
		"⚰",
		"⚱",
		"⚽️",
		"⚾️",
		"⛄️",
		"⛅️",
		"⛈",
		"⛎",
		"⛏",
		"⛑",
		"⛓",
		"⛔️",
		"⛩",
		"⛪️",
		"⛰",
		"⛱",
		"⛲️",
		"⛳️",
		"⛴",
		"⛵️",
		"⛷",
		"⛸",
		"⛹",
		"⛺️",
		"⛽️",
		"✂️",
		"✅",
		"✈️",
		"✉️",
		"✊",
		"✋",
		"✌️",
		"✍️",
		"✏️",
		"✒️",
		"✔️",
		"✖️",
		"✝",
		"✡",
		"✨",
		"✳️",
		"✴️",
		"❄️",
		"❇️",
		"❌",
		"❎",
		"❓",
		"❔",
		"❕",
		"❗️",
		"❣",
		"❤️",
		"➕",
		"➖",
		"➗",
		"➡️",
		"➰",
		"➿",
		"⤴️",
		"⤵️",
		"⬅️",
		"⬆️",
		"⬇️",
		"⬛️",
		"⬜️",
		"⭐️",
		"⭕️",
		"〰",
		"〽️",
		"㊗️",
		"㊙️",
		"🀄️",
		"🃏",
		"🅰",
		"🅱",
		"🅾",
		"🅿️",
		"🆎",
		"🆑",
		"🆒",
		"🆓",
		"🆔",
		"🆕",
		"🆖",
		"🆗",
		"🆘",
		"🆙",
		"🆚",
		"🇦🇩",
		"🇦🇪",
		"🇦🇫",
		"🇦🇬",
		"🇦🇮",
		"🇦🇱",
		"🇦🇲",
		"🇦🇴",
		"🇦🇶",
		"🇦🇷",
		"🇦🇸",
		"🇦🇹",
		"🇦🇺",
		"🇦🇼",
		"🇦🇽",
		"🇦🇿",
		"🇧🇦",
		"🇧🇧",
		"🇧🇩",
		"🇧🇪",
		"🇧🇫",
		"🇧🇬",
		"🇧🇭",
		"🇧🇮",
		"🇧🇯",
		"🇧🇱",
		"🇧🇲",
		"🇧🇳",
		"🇧🇴",
		"🇧🇶",
		"🇧🇷",
		"🇧🇸",
		"🇧🇹",
		"🇧🇼",
		"🇧🇾",
		"🇧🇿",
		"🇨🇦",
		"🇨🇨",
		"🇨🇩",
		"🇨🇫",
		"🇨🇬",
		"🇨🇭",
		"🇨🇮",
		"🇨🇰",
		"🇨🇱",
		"🇨🇲",
		"🇨🇳",
		"🇨🇴",
		"🇨🇷",
		"🇨🇺",
		"🇨🇻",
		"🇨🇼",
		"🇨🇽",
		"🇨🇾",
		"🇨🇿",
		"🇩🇪",
		"🇩🇯",
		"🇩🇰",
		"🇩🇲",
		"🇩🇴",
		"🇩🇿",
		"🇪🇨",
		"🇪🇪",
		"🇪🇬",
		"🇪🇭",
		"🇪🇷",
		"🇪🇸",
		"🇪🇹",
		"🇪🇺",
		"🇫🇮",
		"🇫🇯",
		"🇫🇰",
		"🇫🇲",
		"🇫🇴",
		"🇫🇷",
		"🇬🇦",
		"🇬🇧",
		"🇬🇩",
		"🇬🇪",
		"🇬🇫",
		"🇬🇬",
		"🇬🇭",
		"🇬🇮",
		"🇬🇱",
		"🇬🇲",
		"🇬🇳",
		"🇬🇵",
		"🇬🇶",
		"🇬🇷",
		"🇬🇸",
		"🇬🇹",
		"🇬🇺",
		"🇬🇼",
		"🇬🇾",
		"🇭🇰",
		"🇭🇳",
		"🇭🇷",
		"🇭🇹",
		"🇭🇺",
		"🇮🇨",
		"🇮🇩",
		"🇮🇪",
		"🇮🇱",
		"🇮🇲",
		"🇮🇳",
		"🇮🇴",
		"🇮🇶",
		"🇮🇷",
		"🇮🇸",
		"🇮🇹",
		"🇯🇪",
		"🇯🇲",
		"🇯🇴",
		"🇯🇵",
		"🇰🇪",
		"🇰🇬",
		"🇰🇭",
		"🇰🇮",
		"🇰🇲",
		"🇰🇳",
		"🇰🇵",
		"🇰🇷",
		"🇰🇼",
		"🇰🇾",
		"🇰🇿",
		"🇱🇦",
		"🇱🇧",
		"🇱🇨",
		"🇱🇮",
		"🇱🇰",
		"🇱🇷",
		"🇱🇸",
		"🇱🇹",
		"🇱🇺",
		"🇱🇻",
		"🇱🇾",
		"🇲🇦",
		"🇲🇨",
		"🇲🇩",
		"🇲🇪",
		"🇲🇬",
		"🇲🇭",
		"🇲🇰",
		"🇲🇱",
		"🇲🇲",
		"🇲🇳",
		"🇲🇴",
		"🇲🇵",
		"🇲🇶",
		"🇲🇷",
		"🇲🇸",
		"🇲🇹",
		"🇲🇺",
		"🇲🇻",
		"🇲🇼",
		"🇲🇽",
		"🇲🇾",
		"🇲🇿",
		"🇳🇦",
		"🇳🇨",
		"🇳🇪",
		"🇳🇫",
		"🇳🇬",
		"🇳🇮",
		"🇳🇱",
		"🇳🇴",
		"🇳🇵",
		"🇳🇷",
		"🇳🇺",
		"🇳🇿",
		"🇴🇲",
		"🇵🇦",
		"🇵🇪",
		"🇵🇫",
		"🇵🇬",
		"🇵🇭",
		"🇵🇰",
		"🇵🇱",
		"🇵🇲",
		"🇵🇳",
		"🇵🇷",
		"🇵🇸",
		"🇵🇹",
		"🇵🇼",
		"🇵🇾",
		"🇶🇦",
		"🇷🇪",
		"🇷🇴",
		"🇷🇸",
		"🇷🇺",
		"🇷🇼",
		"🇸🇦",
		"🇸🇧",
		"🇸🇨",
		"🇸🇩",
		"🇸🇪",
		"🇸🇬",
		"🇸🇭",
		"🇸🇮",
		"🇸🇰",
		"🇸🇱",
		"🇸🇲",
		"🇸🇳",
		"🇸🇴",
		"🇸🇷",
		"🇸🇸",
		"🇸🇹",
		"🇸🇻",
		"🇸🇽",
		"🇸🇾",
		"🇸🇿",
		"🇹🇨",
		"🇹🇩",
		"🇹🇫",
		"🇹🇬",
		"🇹🇭",
		"🇹🇯",
		"🇹🇰",
		"🇹🇱",
		"🇹🇲",
		"🇹🇳",
		"🇹🇴",
		"🇹🇷",
		"🇹🇹",
		"🇹🇻",
		"🇹🇼",
		"🇹🇿",
		"🇺🇦",
		"🇺🇬",
		"🇺🇸",
		"🇺🇾",
		"🇺🇿",
		"🇻🇦",
		"🇻🇨",
		"🇻🇪",
		"🇻🇬",
		"🇻🇮",
		"🇻🇳",
		"🇻🇺",
		"🇼🇫",
		"🇼🇸",
		"🇽🇰",
		"🇾🇪",
		"🇾🇹",
		"🇿🇦",
		"🇿🇲",
		"🇿🇼",
		"🈁",
		"🈂",
		"🈚️",
		"🈯️",
		"🈲",
		"🈳",
		"🈴",
		"🈵",
		"🈶",
		"🈷",
		"🈸",
		"🈹",
		"🈺",
		"🉐",
		"🉑",
		"🌀",
		"🌁",
		"🌂",
		"🌃",
		"🌄",
		"🌅",
		"🌆",
		"🌇",
		"🌈",
		"🌉",
		"🌊",
		"🌋",
		"🌌",
		"🌍",
		"🌎",
		"🌏",
		"🌐",
		"🌑",
		"🌒",
		"🌓",
		"🌔",
		"🌕",
		"🌖",
		"🌗",
		"🌘",
		"🌙",
		"🌚",
		"🌛",
		"🌜",
		"🌝",
		"🌞",
		"🌟",
		"🌠",
		"🌡",
		"🌤",
		"🌥",
		"🌦",
		"🌧",
		"🌨",
		"🌩",
		"🌪",
		"🌫",
		"🌬",
		"🌭",
		"🌮",
		"🌯",
		"🌰",
		"🌱",
		"🌲",
		"🌳",
		"🌴",
		"🌵",
		"🌶",
		"🌷",
		"🌸",
		"🌹",
		"🌺",
		"🌻",
		"🌼",
		"🌽",
		"🌾",
		"🌿",
		"🍀",
		"🍁",
		"🍂",
		"🍃",
		"🍄",
		"🍅",
		"🍆",
		"🍇",
		"🍈",
		"🍉",
		"🍊",
		"🍋",
		"🍌",
		"🍍",
		"🍎",
		"🍏",
		"🍐",
		"🍑",
		"🍒",
		"🍓",
		"🍔",
		"🍕",
		"🍖",
		"🍗",
		"🍘",
		"🍙",
		"🍚",
		"🍛",
		"🍜",
		"🍝",
		"🍞",
		"🍟",
		"🍠",
		"🍡",
		"🍢",
		"🍣",
		"🍤",
		"🍥",
		"🍦",
		"🍧",
		"🍨",
		"🍩",
		"🍪",
		"🍫",
		"🍬",
		"🍭",
		"🍮",
		"🍯",
		"🍰",
		"🍱",
		"🍲",
		"🍳",
		"🍴",
		"🍵",
		"🍶",
		"🍷",
		"🍸",
		"🍹",
		"🍺",
		"🍻",
		"🍼",
		"🍽",
		"🍾",
		"🍿",
		"🎀",
		"🎁",
		"🎂",
		"🎃",
		"🎄",
		"🎅",
		"🎆",
		"🎇",
		"🎈",
		"🎉",
		"🎊",
		"🎋",
		"🎌",
		"🎍",
		"🎎",
		"🎏",
		"🎐",
		"🎑",
		"🎒",
		"🎓",
		"🎖",
		"🎗",
		"🎙",
		"🎚",
		"🎛",
		"🎞",
		"🎟",
		"🎠",
		"🎡",
		"🎢",
		"🎣",
		"🎤",
		"🎥",
		"🎦",
		"🎧",
		"🎨",
		"🎩",
		"🎪",
		"🎫",
		"🎬",
		"🎭",
		"🎮",
		"🎯",
		"🎰",
		"🎱",
		"🎲",
		"🎳",
		"🎴",
		"🎵",
		"🎶",
		"🎷",
		"🎸",
		"🎹",
		"🎺",
		"🎻",
		"🎼",
		"🎽",
		"🎾",
		"🎿",
		"🏀",
		"🏁",
		"🏂",
		"🏃",
		"🏄",
		"🏅",
		"🏆",
		"🏇",
		"🏈",
		"🏉",
		"🏊",
		"🏋",
		"🏌",
		"🏍",
		"🏎",
		"🏏",
		"🏐",
		"🏑",
		"🏒",
		"🏓",
		"🏔",
		"🏕",
		"🏖",
		"🏗",
		"🏘",
		"🏙",
		"🏚",
		"🏛",
		"🏜",
		"🏝",
		"🏞",
		"🏟",
		"🏠",
		"🏡",
		"🏢",
		"🏣",
		"🏤",
		"🏥",
		"🏦",
		"🏧",
		"🏨",
		"🏩",
		"🏪",
		"🏫",
		"🏬",
		"🏭",
		"🏮",
		"🏯",
		"🏰",
		"🏳",
		"🏳🌈",
		"🏴",
		"🏵",
		"🏷",
		"🏸",
		"🏹",
		"🏺",
		"🐀",
		"🐁",
		"🐂",
		"🐃",
		"🐄",
		"🐅",
		"🐆",
		"🐇",
		"🐈",
		"🐉",
		"🐊",
		"🐋",
		"🐌",
		"🐍",
		"🐎",
		"🐏",
		"🐐",
		"🐑",
		"🐒",
		"🐓",
		"🐔",
		"🐕",
		"🐖",
		"🐗",
		"🐘",
		"🐙",
		"🐚",
		"🐛",
		"🐜",
		"🐝",
		"🐞",
		"🐟",
		"🐠",
		"🐡",
		"🐢",
		"🐣",
		"🐤",
		"🐥",
		"🐦",
		"🐧",
		"🐨",
		"🐩",
		"🐪",
		"🐫",
		"🐬",
		"🐭",
		"🐮",
		"🐯",
		"🐰",
		"🐱",
		"🐲",
		"🐳",
		"🐴",
		"🐵",
		"🐶",
		"🐷",
		"🐸",
		"🐹",
		"🐺",
		"🐻",
		"🐼",
		"🐽",
		"🐾",
		"🐿",
		"👀",
		"👁",
		"👁‍🗨",
		"👂",
		"👃",
		"👄",
		"👅",
		"👆",
		"👇",
		"👈",
		"👉",
		"👊",
		"👋",
		"👌",
		"👍",
		"👎",
		"👏",
		"👐",
		"👑",
		"👒",
		"👓",
		"👔",
		"👕",
		"👖",
		"👗",
		"👘",
		"👙",
		"👚",
		"👛",
		"👜",
		"👝",
		"👞",
		"👟",
		"👠",
		"👡",
		"👢",
		"👣",
		"👤",
		"👥",
		"👦",
		"👧",
		"👨",
		"👨‍❤️‍👨",
		"👨‍❤️‍💋‍👨",
		"👨‍👨‍👦",
		"👨‍👨‍👦‍👦",
		"👨‍👨‍👧",
		"👨‍👨‍👧‍👦",
		"👨‍👨‍👧‍👧",
		"👨‍👩‍👦‍👦",
		"👨‍👩‍👧",
		"👨‍👩‍👧‍👦",
		"👨‍👩‍👧‍👧",
		"👩",
		"👩‍❤️‍👩",
		"👩‍❤️‍💋‍👩",
		"👩‍👩‍👦",
		"👩‍👩‍👦‍👦",
		"👩‍👩‍👧",
		"👩‍👩‍👧‍👦",
		"👩‍👩‍👧‍👧",
		"👪",
		"👫",
		"👬",
		"👭",
		"👮",
		"👯",
		"👰",
		"👱",
		"👲",
		"👳",
		"👴",
		"👵",
		"👶",
		"👷",
		"👸",
		"👹",
		"👺",
		"👻",
		"👼",
		"👽",
		"👾",
		"👿",
		"💀",
		"💁",
		"💂",
		"💃",
		"💄",
		"💅",
		"💆",
		"💇",
		"💈",
		"💉",
		"💊",
		"💋",
		"💌",
		"💍",
		"💎",
		"💏",
		"💐",
		"💑",
		"💒",
		"💓",
		"💔",
		"💕",
		"💖",
		"💗",
		"💘",
		"💙",
		"💚",
		"💛",
		"💜",
		"💝",
		"💞",
		"💟",
		"💠",
		"💡",
		"💢",
		"💣",
		"💤",
		"💥",
		"💦",
		"💧",
		"💨",
		"💩",
		"💪",
		"💫",
		"💬",
		"💭",
		"💮",
		"💯",
		"💰",
		"💱",
		"💲",
		"💳",
		"💴",
		"💵",
		"💶",
		"💷",
		"💸",
		"💹",
		"💺",
		"💻",
		"💼",
		"💽",
		"💾",
		"💿",
		"📀",
		"📁",
		"📂",
		"📃",
		"📄",
		"📅",
		"📆",
		"📇",
		"📈",
		"📉",
		"📊",
		"📋",
		"📌",
		"📍",
		"📎",
		"📏",
		"📐",
		"📑",
		"📒",
		"📓",
		"📔",
		"📕",
		"📖",
		"📗",
		"📘",
		"📙",
		"📚",
		"📛",
		"📜",
		"📝",
		"📞",
		"📟",
		"📠",
		"📡",
		"📢",
		"📣",
		"📤",
		"📥",
		"📦",
		"📧",
		"📨",
		"📩",
		"📪",
		"📫",
		"📬",
		"📭",
		"📮",
		"📯",
		"📰",
		"📱",
		"📲",
		"📳",
		"📴",
		"📵",
		"📶",
		"📷",
		"📸",
		"📹",
		"📺",
		"📻",
		"📼",
		"📽",
		"📿",
		"🔀",
		"🔁",
		"🔂",
		"🔃",
		"🔄",
		"🔅",
		"🔆",
		"🔇",
		"🔈",
		"🔉",
		"🔊",
		"🔋",
		"🔌",
		"🔍",
		"🔎",
		"🔏",
		"🔐",
		"🔑",
		"🔒",
		"🔓",
		"🔔",
		"🔕",
		"🔖",
		"🔗",
		"🔘",
		"🔙",
		"🔚",
		"🔛",
		"🔜",
		"🔝",
		"🔞",
		"🔟",
		"🔠",
		"🔡",
		"🔢",
		"🔣",
		"🔤",
		"🔥",
		"🔦",
		"🔧",
		"🔨",
		"🔩",
		"🔪",
		"🔫",
		"🔬",
		"🔭",
		"🔮",
		"🔯",
		"🔰",
		"🔱",
		"🔲",
		"🔳",
		"🔴",
		"🔵",
		"🔶",
		"🔷",
		"🔸",
		"🔹",
		"🔺",
		"🔻",
		"🔼",
		"🔽",
		"🕉",
		"🕊",
		"🕋",
		"🕌",
		"🕍",
		"🕎",
		"🕐",
		"🕑",
		"🕒",
		"🕓",
		"🕔",
		"🕕",
		"🕖",
		"🕗",
		"🕘",
		"🕙",
		"🕚",
		"🕛",
		"🕜",
		"🕝",
		"🕞",
		"🕟",
		"🕠",
		"🕡",
		"🕢",
		"🕣",
		"🕤",
		"🕥",
		"🕦",
		"🕧",
		"🕯",
		"🕰",
		"🕳",
		"🕴",
		"🕵",
		"🕶",
		"🕷",
		"🕸",
		"🕹",
		"🖇",
		"🖊",
		"🖋",
		"🖌",
		"🖍",
		"🖐",
		"🖕",
		"🖖",
		"🖥",
		"🖨",
		"🖱",
		"🖲",
		"🖼",
		"🗂",
		"🗃",
		"🗄",
		"🗑",
		"🗒",
		"🗓",
		"🗜",
		"🗝",
		"🗞",
		"🗡",
		"🗣",
		"🗯",
		"🗳",
		"🗺",
		"🗻",
		"🗼",
		"🗽",
		"🗾",
		"🗿",
		"😀",
		"😁",
		"😂",
		"😃",
		"😄",
		"😅",
		"😆",
		"😇",
		"😈",
		"😉",
		"😊",
		"😋",
		"😌",
		"😍",
		"😎",
		"😏",
		"😐",
		"😑",
		"😒",
		"😓",
		"😔",
		"😕",
		"😖",
		"😗",
		"😘",
		"😙",
		"😚",
		"😛",
		"😜",
		"😝",
		"😞",
		"😟",
		"😠",
		"😡",
		"😢",
		"😣",
		"😤",
		"😥",
		"😦",
		"😧",
		"😨",
		"😩",
		"😪",
		"😫",
		"😬",
		"😭",
		"😮",
		"😯",
		"😰",
		"😱",
		"😲",
		"😳",
		"😴",
		"😵",
		"😶",
		"😷",
		"😸",
		"😹",
		"😺",
		"😻",
		"😼",
		"😽",
		"😾",
		"😿",
		"🙀",
		"🙁",
		"🙂",
		"🙃",
		"🙄",
		"🙅",
		"🙆",
		"🙇",
		"🙈",
		"🙉",
		"🙊",
		"🙋",
		"🙌",
		"🙍",
		"🙎",
		"🙏",
		"🚀",
		"🚁",
		"🚂",
		"🚃",
		"🚄",
		"🚅",
		"🚆",
		"🚇",
		"🚈",
		"🚉",
		"🚊",
		"🚋",
		"🚌",
		"🚍",
		"🚎",
		"🚏",
		"🚐",
		"🚑",
		"🚒",
		"🚓",
		"🚔",
		"🚕",
		"🚖",
		"🚗",
		"🚘",
		"🚙",
		"🚚",
		"🚛",
		"🚜",
		"🚝",
		"🚞",
		"🚟",
		"🚠",
		"🚡",
		"🚢",
		"🚣",
		"🚤",
		"🚥",
		"🚦",
		"🚧",
		"🚨",
		"🚩",
		"🚪",
		"🚫",
		"🚬",
		"🚭",
		"🚮",
		"🚯",
		"🚰",
		"🚱",
		"🚲",
		"🚳",
		"🚴",
		"🚵",
		"🚶",
		"🚷",
		"🚸",
		"🚹",
		"🚺",
		"🚻",
		"🚼",
		"🚽",
		"🚾",
		"🚿",
		"🛀",
		"🛁",
		"🛂",
		"🛃",
		"🛄",
		"🛅",
		"🛋",
		"🛌",
		"🛍",
		"🛎",
		"🛏",
		"🛐",
		"🛠",
		"🛡",
		"🛢",
		"🛣",
		"🛤",
		"🛥",
		"🛩",
		"🛫",
		"🛬",
		"🛰",
		"🛳",
		"🤐",
		"🤑",
		"🤒",
		"🤓",
		"🤔",
		"🤕",
		"🤖",
		"🤗",
		"🤘",
		"🦀",
		"🦁",
		"🦂",
		"🦃",
		"🦄",
		"🧀"
	];

/***/ },
/* 54 */
/***/ function(module, exports) {

	module.exports = [
		"#️⃣",
		"*️⃣",
		"0️⃣",
		"1️⃣",
		"2️⃣",
		"3️⃣",
		"4️⃣",
		"5️⃣",
		"6️⃣",
		"7️⃣",
		"8️⃣",
		"9️⃣",
		"©",
		"®",
		"‼️",
		"⁉️",
		"™️",
		"ℹ️",
		"↔️",
		"↕️",
		"↖️",
		"↗️",
		"↘️",
		"↙️",
		"↩️",
		"↪️",
		"⌚️",
		"⌛️",
		"⌨️",
		"⏏️",
		"⏩",
		"⏪",
		"⏫",
		"⏬",
		"⏭",
		"⏮",
		"⏯",
		"⏰",
		"⏱",
		"⏲",
		"⏳",
		"⏸",
		"⏹",
		"⏺",
		"Ⓜ️",
		"▪️",
		"▫️",
		"▶️",
		"◀️",
		"◻️",
		"◼️",
		"◽️",
		"◾️",
		"☀️",
		"☁️",
		"☂",
		"☃",
		"☄",
		"☎️",
		"☑️",
		"☔️",
		"☕️",
		"☘",
		"☝️",
		"☝🏻",
		"☝🏼",
		"☝🏽",
		"☝🏾",
		"☝🏿",
		"☠",
		"☢",
		"☣",
		"☦",
		"☪",
		"☮",
		"☯",
		"☸",
		"☹",
		"☺️",
		"♈️",
		"♉️",
		"♊️",
		"♋️",
		"♌️",
		"♍️",
		"♎️",
		"♏️",
		"♐️",
		"♑️",
		"♒️",
		"♓️",
		"♠️",
		"♣️",
		"♥️",
		"♦️",
		"♨️",
		"♻️",
		"♿️",
		"⚒",
		"⚓️",
		"⚔",
		"⚖",
		"⚗",
		"⚙",
		"⚛",
		"⚜",
		"⚠️",
		"⚡️",
		"⚪️",
		"⚫️",
		"⚰",
		"⚱",
		"⚽️",
		"⚾️",
		"⛄️",
		"⛅️",
		"⛈",
		"⛎",
		"⛏",
		"⛑",
		"⛓",
		"⛔️",
		"⛩",
		"⛪️",
		"⛰",
		"⛱",
		"⛲️",
		"⛳️",
		"⛴",
		"⛵️",
		"⛷",
		"⛸",
		"⛹",
		"⛹🏻",
		"⛹🏼",
		"⛹🏽",
		"⛹🏾",
		"⛹🏿",
		"⛺️",
		"⛽️",
		"✂️",
		"✅",
		"✈️",
		"✉️",
		"✊",
		"✊🏻",
		"✊🏼",
		"✊🏽",
		"✊🏾",
		"✊🏿",
		"✋",
		"✋🏻",
		"✋🏼",
		"✋🏽",
		"✋🏾",
		"✋🏿",
		"✌️",
		"✌🏻",
		"✌🏼",
		"✌🏽",
		"✌🏾",
		"✌🏿",
		"✍️",
		"✍🏻",
		"✍🏼",
		"✍🏽",
		"✍🏾",
		"✍🏿",
		"✏️",
		"✒️",
		"✔️",
		"✖️",
		"✝",
		"✡",
		"✨",
		"✳️",
		"✴️",
		"❄️",
		"❇️",
		"❌",
		"❎",
		"❓",
		"❔",
		"❕",
		"❗️",
		"❣",
		"❤️",
		"➕",
		"➖",
		"➗",
		"➡️",
		"➰",
		"➿",
		"⤴️",
		"⤵️",
		"⬅️",
		"⬆️",
		"⬇️",
		"⬛️",
		"⬜️",
		"⭐️",
		"⭕️",
		"〰",
		"〽️",
		"㊗️",
		"㊙️",
		"🀄️",
		"🃏",
		"🅰",
		"🅱",
		"🅾",
		"🅿️",
		"🆎",
		"🆑",
		"🆒",
		"🆓",
		"🆔",
		"🆕",
		"🆖",
		"🆗",
		"🆘",
		"🆙",
		"🆚",
		"🇨🇳",
		"🇩🇪",
		"🇪🇸",
		"🇫🇷",
		"🇬🇧",
		"🇮🇹",
		"🇯🇵",
		"🇰🇷",
		"🇷🇺",
		"🇺🇸",
		"🈁",
		"🈂",
		"🈚️",
		"🈯️",
		"🈲",
		"🈳",
		"🈴",
		"🈵",
		"🈶",
		"🈷",
		"🈸",
		"🈹",
		"🈺",
		"🉐",
		"🉑",
		"🌀",
		"🌁",
		"🌂",
		"🌃",
		"🌄",
		"🌅",
		"🌆",
		"🌇",
		"🌈",
		"🌉",
		"🌊",
		"🌋",
		"🌌",
		"🌍",
		"🌎",
		"🌏",
		"🌐",
		"🌑",
		"🌒",
		"🌓",
		"🌔",
		"🌕",
		"🌖",
		"🌗",
		"🌘",
		"🌙",
		"🌚",
		"🌛",
		"🌜",
		"🌝",
		"🌞",
		"🌟",
		"🌠",
		"🌡",
		"🌤",
		"🌥",
		"🌦",
		"🌧",
		"🌨",
		"🌩",
		"🌪",
		"🌫",
		"🌬",
		"🌭",
		"🌮",
		"🌯",
		"🌰",
		"🌱",
		"🌲",
		"🌳",
		"🌴",
		"🌵",
		"🌶",
		"🌷",
		"🌸",
		"🌹",
		"🌺",
		"🌻",
		"🌼",
		"🌽",
		"🌾",
		"🌿",
		"🍀",
		"🍁",
		"🍂",
		"🍃",
		"🍄",
		"🍅",
		"🍆",
		"🍇",
		"🍈",
		"🍉",
		"🍊",
		"🍋",
		"🍌",
		"🍍",
		"🍎",
		"🍏",
		"🍐",
		"🍑",
		"🍒",
		"🍓",
		"🍔",
		"🍕",
		"🍖",
		"🍗",
		"🍘",
		"🍙",
		"🍚",
		"🍛",
		"🍜",
		"🍝",
		"🍞",
		"🍟",
		"🍠",
		"🍡",
		"🍢",
		"🍣",
		"🍤",
		"🍥",
		"🍦",
		"🍧",
		"🍨",
		"🍩",
		"🍪",
		"🍫",
		"🍬",
		"🍭",
		"🍮",
		"🍯",
		"🍰",
		"🍱",
		"🍲",
		"🍳",
		"🍴",
		"🍵",
		"🍶",
		"🍷",
		"🍸",
		"🍹",
		"🍺",
		"🍻",
		"🍼",
		"🍽",
		"🍾",
		"🍿",
		"🎀",
		"🎁",
		"🎂",
		"🎃",
		"🎄",
		"🎅",
		"🎅🏻",
		"🎅🏼",
		"🎅🏽",
		"🎅🏾",
		"🎅🏿",
		"🎆",
		"🎇",
		"🎈",
		"🎉",
		"🎊",
		"🎋",
		"🎌",
		"🎍",
		"🎎",
		"🎏",
		"🎐",
		"🎑",
		"🎒",
		"🎓",
		"🎖",
		"🎗",
		"🎙",
		"🎚",
		"🎛",
		"🎞",
		"🎟",
		"🎠",
		"🎡",
		"🎢",
		"🎣",
		"🎤",
		"🎥",
		"🎦",
		"🎧",
		"🎨",
		"🎩",
		"🎪",
		"🎫",
		"🎬",
		"🎭",
		"🎮",
		"🎯",
		"🎰",
		"🎱",
		"🎲",
		"🎳",
		"🎴",
		"🎵",
		"🎶",
		"🎷",
		"🎸",
		"🎹",
		"🎺",
		"🎻",
		"🎼",
		"🎽",
		"🎾",
		"🎿",
		"🏀",
		"🏁",
		"🏂",
		"🏃",
		"🏃🏻",
		"🏃🏼",
		"🏃🏽",
		"🏃🏾",
		"🏃🏿",
		"🏄",
		"🏄🏻",
		"🏄🏼",
		"🏄🏽",
		"🏄🏾",
		"🏄🏿",
		"🏅",
		"🏆",
		"🏇",
		"🏈",
		"🏉",
		"🏊",
		"🏊🏻",
		"🏊🏼",
		"🏊🏽",
		"🏊🏾",
		"🏊🏿",
		"🏋",
		"🏋🏻",
		"🏋🏼",
		"🏋🏽",
		"🏋🏾",
		"🏋🏿",
		"🏌",
		"🏍",
		"🏎",
		"🏏",
		"🏐",
		"🏑",
		"🏒",
		"🏓",
		"🏔",
		"🏕",
		"🏖",
		"🏗",
		"🏘",
		"🏙",
		"🏚",
		"🏛",
		"🏜",
		"🏝",
		"🏞",
		"🏟",
		"🏠",
		"🏡",
		"🏢",
		"🏣",
		"🏤",
		"🏥",
		"🏦",
		"🏧",
		"🏨",
		"🏩",
		"🏪",
		"🏫",
		"🏬",
		"🏭",
		"🏮",
		"🏯",
		"🏰",
		"🏳",
		"🏴",
		"🏵",
		"🏷",
		"🏸",
		"🏹",
		"🏺",
		"🏻",
		"🏼",
		"🏽",
		"🏾",
		"🏿",
		"🐀",
		"🐁",
		"🐂",
		"🐃",
		"🐄",
		"🐅",
		"🐆",
		"🐇",
		"🐈",
		"🐉",
		"🐊",
		"🐋",
		"🐌",
		"🐍",
		"🐎",
		"🐏",
		"🐐",
		"🐑",
		"🐒",
		"🐓",
		"🐔",
		"🐕",
		"🐖",
		"🐗",
		"🐘",
		"🐙",
		"🐚",
		"🐛",
		"🐜",
		"🐝",
		"🐞",
		"🐟",
		"🐠",
		"🐡",
		"🐢",
		"🐣",
		"🐤",
		"🐥",
		"🐦",
		"🐧",
		"🐨",
		"🐩",
		"🐪",
		"🐫",
		"🐬",
		"🐭",
		"🐮",
		"🐯",
		"🐰",
		"🐱",
		"🐲",
		"🐳",
		"🐴",
		"🐵",
		"🐶",
		"🐷",
		"🐸",
		"🐹",
		"🐺",
		"🐻",
		"🐼",
		"🐽",
		"🐾",
		"🐿",
		"👀",
		"👁",
		"👁‍🗨",
		"👂",
		"👂🏻",
		"👂🏼",
		"👂🏽",
		"👂🏾",
		"👂🏿",
		"👃",
		"👃🏻",
		"👃🏼",
		"👃🏽",
		"👃🏾",
		"👃🏿",
		"👄",
		"👅",
		"👆",
		"👆🏻",
		"👆🏼",
		"👆🏽",
		"👆🏾",
		"👆🏿",
		"👇",
		"👇🏻",
		"👇🏼",
		"👇🏽",
		"👇🏾",
		"👇🏿",
		"👈",
		"👈🏻",
		"👈🏼",
		"👈🏽",
		"👈🏾",
		"👈🏿",
		"👉",
		"👉🏻",
		"👉🏼",
		"👉🏽",
		"👉🏾",
		"👉🏿",
		"👊",
		"👊🏻",
		"👊🏼",
		"👊🏽",
		"👊🏾",
		"👊🏿",
		"👋",
		"👋🏻",
		"👋🏼",
		"👋🏽",
		"👋🏾",
		"👋🏿",
		"👌",
		"👌🏻",
		"👌🏼",
		"👌🏽",
		"👌🏾",
		"👌🏿",
		"👍",
		"👍🏻",
		"👍🏼",
		"👍🏽",
		"👍🏾",
		"👍🏿",
		"👎",
		"👎🏻",
		"👎🏼",
		"👎🏽",
		"👎🏾",
		"👎🏿",
		"👏",
		"👏🏻",
		"👏🏼",
		"👏🏽",
		"👏🏾",
		"👏🏿",
		"👐",
		"👐🏻",
		"👐🏼",
		"👐🏽",
		"👐🏾",
		"👐🏿",
		"👑",
		"👒",
		"👓",
		"👔",
		"👕",
		"👖",
		"👗",
		"👘",
		"👙",
		"👚",
		"👛",
		"👜",
		"👝",
		"👞",
		"👟",
		"👠",
		"👡",
		"👢",
		"👣",
		"👤",
		"👥",
		"👦",
		"👦🏻",
		"👦🏼",
		"👦🏽",
		"👦🏾",
		"👦🏿",
		"👧",
		"👧🏻",
		"👧🏼",
		"👧🏽",
		"👧🏾",
		"👧🏿",
		"👨",
		"👨‍❤️‍👨",
		"👨‍❤️‍💋‍👨",
		"👨‍👨‍👦",
		"👨‍👨‍👦‍👦",
		"👨‍👨‍👧",
		"👨‍👨‍👧‍👦",
		"👨‍👨‍👧‍👧",
		"👨‍👩‍👦‍👦",
		"👨‍👩‍👧",
		"👨‍👩‍👧‍👦",
		"👨‍👩‍👧‍👧",
		"👨🏻",
		"👨🏼",
		"👨🏽",
		"👨🏾",
		"👨🏿",
		"👩",
		"👩‍❤️‍👩",
		"👩‍❤️‍💋‍👩",
		"👩‍👩‍👦",
		"👩‍👩‍👦‍👦",
		"👩‍👩‍👧",
		"👩‍👩‍👧‍👦",
		"👩‍👩‍👧‍👧",
		"👩🏻",
		"👩🏼",
		"👩🏽",
		"👩🏾",
		"👩🏿",
		"👪",
		"👫",
		"👬",
		"👭",
		"👮",
		"👮🏻",
		"👮🏼",
		"👮🏽",
		"👮🏾",
		"👮🏿",
		"👯",
		"👰",
		"👰🏻",
		"👰🏼",
		"👰🏽",
		"👰🏾",
		"👰🏿",
		"👱",
		"👱🏻",
		"👱🏼",
		"👱🏽",
		"👱🏾",
		"👱🏿",
		"👲",
		"👲🏻",
		"👲🏼",
		"👲🏽",
		"👲🏾",
		"👲🏿",
		"👳",
		"👳🏻",
		"👳🏼",
		"👳🏽",
		"👳🏾",
		"👳🏿",
		"👴",
		"👴🏻",
		"👴🏼",
		"👴🏽",
		"👴🏾",
		"👴🏿",
		"👵",
		"👵🏻",
		"👵🏼",
		"👵🏽",
		"👵🏾",
		"👵🏿",
		"👶",
		"👶🏻",
		"👶🏼",
		"👶🏽",
		"👶🏾",
		"👶🏿",
		"👷",
		"👷🏻",
		"👷🏼",
		"👷🏽",
		"👷🏾",
		"👷🏿",
		"👸",
		"👸🏻",
		"👸🏼",
		"👸🏽",
		"👸🏾",
		"👸🏿",
		"👹",
		"👺",
		"👻",
		"👼",
		"👼🏻",
		"👼🏼",
		"👼🏽",
		"👼🏾",
		"👼🏿",
		"👽",
		"👾",
		"👿",
		"💀",
		"💁",
		"💁🏻",
		"💁🏼",
		"💁🏽",
		"💁🏾",
		"💁🏿",
		"💂",
		"💂🏻",
		"💂🏼",
		"💂🏽",
		"💂🏾",
		"💂🏿",
		"💃",
		"💃🏻",
		"💃🏼",
		"💃🏽",
		"💃🏾",
		"💃🏿",
		"💄",
		"💅",
		"💅🏻",
		"💅🏼",
		"💅🏽",
		"💅🏾",
		"💅🏿",
		"💆",
		"💆🏻",
		"💆🏼",
		"💆🏽",
		"💆🏾",
		"💆🏿",
		"💇",
		"💇🏻",
		"💇🏼",
		"💇🏽",
		"💇🏾",
		"💇🏿",
		"💈",
		"💉",
		"💊",
		"💋",
		"💌",
		"💍",
		"💎",
		"💏",
		"💐",
		"💑",
		"💒",
		"💓",
		"💔",
		"💕",
		"💖",
		"💗",
		"💘",
		"💙",
		"💚",
		"💛",
		"💜",
		"💝",
		"💞",
		"💟",
		"💠",
		"💡",
		"💢",
		"💣",
		"💤",
		"💥",
		"💦",
		"💧",
		"💨",
		"💩",
		"💪",
		"💪🏻",
		"💪🏼",
		"💪🏽",
		"💪🏾",
		"💪🏿",
		"💫",
		"💬",
		"💭",
		"💮",
		"💯",
		"💰",
		"💱",
		"💲",
		"💳",
		"💴",
		"💵",
		"💶",
		"💷",
		"💸",
		"💹",
		"💺",
		"💻",
		"💼",
		"💽",
		"💾",
		"💿",
		"📀",
		"📁",
		"📂",
		"📃",
		"📄",
		"📅",
		"📆",
		"📇",
		"📈",
		"📉",
		"📊",
		"📋",
		"📌",
		"📍",
		"📎",
		"📏",
		"📐",
		"📑",
		"📒",
		"📓",
		"📔",
		"📕",
		"📖",
		"📗",
		"📘",
		"📙",
		"📚",
		"📛",
		"📜",
		"📝",
		"📞",
		"📟",
		"📠",
		"📡",
		"📢",
		"📣",
		"📤",
		"📥",
		"📦",
		"📧",
		"📨",
		"📩",
		"📪",
		"📫",
		"📬",
		"📭",
		"📮",
		"📯",
		"📰",
		"📱",
		"📲",
		"📳",
		"📴",
		"📵",
		"📶",
		"📷",
		"📸",
		"📹",
		"📺",
		"📻",
		"📼",
		"📽",
		"📿",
		"🔀",
		"🔁",
		"🔂",
		"🔃",
		"🔄",
		"🔅",
		"🔆",
		"🔇",
		"🔈",
		"🔉",
		"🔊",
		"🔋",
		"🔌",
		"🔍",
		"🔎",
		"🔏",
		"🔐",
		"🔑",
		"🔒",
		"🔓",
		"🔔",
		"🔕",
		"🔖",
		"🔗",
		"🔘",
		"🔙",
		"🔚",
		"🔛",
		"🔜",
		"🔝",
		"🔞",
		"🔟",
		"🔠",
		"🔡",
		"🔢",
		"🔣",
		"🔤",
		"🔥",
		"🔦",
		"🔧",
		"🔨",
		"🔩",
		"🔪",
		"🔫",
		"🔬",
		"🔭",
		"🔮",
		"🔯",
		"🔰",
		"🔱",
		"🔲",
		"🔳",
		"🔴",
		"🔵",
		"🔶",
		"🔷",
		"🔸",
		"🔹",
		"🔺",
		"🔻",
		"🔼",
		"🔽",
		"🕉",
		"🕊",
		"🕋",
		"🕌",
		"🕍",
		"🕎",
		"🕐",
		"🕑",
		"🕒",
		"🕓",
		"🕔",
		"🕕",
		"🕖",
		"🕗",
		"🕘",
		"🕙",
		"🕚",
		"🕛",
		"🕜",
		"🕝",
		"🕞",
		"🕟",
		"🕠",
		"🕡",
		"🕢",
		"🕣",
		"🕤",
		"🕥",
		"🕦",
		"🕧",
		"🕯",
		"🕰",
		"🕳",
		"🕴",
		"🕵",
		"🕵🏻",
		"🕵🏼",
		"🕵🏽",
		"🕵🏾",
		"🕵🏿",
		"🕶",
		"🕷",
		"🕸",
		"🕹",
		"🕺",
		"🕺🏻",
		"🕺🏼",
		"🕺🏽",
		"🕺🏾",
		"🕺🏿",
		"🖇",
		"🖊",
		"🖋",
		"🖌",
		"🖍",
		"🖐",
		"🖐🏻",
		"🖐🏼",
		"🖐🏽",
		"🖐🏾",
		"🖐🏿",
		"🖕",
		"🖕🏻",
		"🖕🏼",
		"🖕🏽",
		"🖕🏾",
		"🖕🏿",
		"🖖",
		"🖖🏻",
		"🖖🏼",
		"🖖🏽",
		"🖖🏾",
		"🖖🏿",
		"🖤",
		"🖥",
		"🖨",
		"🖱",
		"🖲",
		"🖼",
		"🗂",
		"🗃",
		"🗄",
		"🗑",
		"🗒",
		"🗓",
		"🗜",
		"🗝",
		"🗞",
		"🗡",
		"🗣",
		"🗨️",
		"🗯",
		"🗳",
		"🗺",
		"🗻",
		"🗼",
		"🗽",
		"🗾",
		"🗿",
		"😀",
		"😁",
		"😂",
		"😃",
		"😄",
		"😅",
		"😆",
		"😇",
		"😈",
		"😉",
		"😊",
		"😋",
		"😌",
		"😍",
		"😎",
		"😏",
		"😐",
		"😑",
		"😒",
		"😓",
		"😔",
		"😕",
		"😖",
		"😗",
		"😘",
		"😙",
		"😚",
		"😛",
		"😜",
		"😝",
		"😞",
		"😟",
		"😠",
		"😡",
		"😢",
		"😣",
		"😤",
		"😥",
		"😦",
		"😧",
		"😨",
		"😩",
		"😪",
		"😫",
		"😬",
		"😭",
		"😮",
		"😯",
		"😰",
		"😱",
		"😲",
		"😳",
		"😴",
		"😵",
		"😶",
		"😷",
		"😸",
		"😹",
		"😺",
		"😻",
		"😼",
		"😽",
		"😾",
		"😿",
		"🙀",
		"🙁",
		"🙂",
		"🙃",
		"🙄",
		"🙅",
		"🙅🏻",
		"🙅🏼",
		"🙅🏽",
		"🙅🏾",
		"🙅🏿",
		"🙆",
		"🙆🏻",
		"🙆🏼",
		"🙆🏽",
		"🙆🏾",
		"🙆🏿",
		"🙇",
		"🙇🏻",
		"🙇🏼",
		"🙇🏽",
		"🙇🏾",
		"🙇🏿",
		"🙈",
		"🙉",
		"🙊",
		"🙋",
		"🙋🏻",
		"🙋🏼",
		"🙋🏽",
		"🙋🏾",
		"🙋🏿",
		"🙌",
		"🙌🏻",
		"🙌🏼",
		"🙌🏽",
		"🙌🏾",
		"🙌🏿",
		"🙍",
		"🙍🏻",
		"🙍🏼",
		"🙍🏽",
		"🙍🏾",
		"🙍🏿",
		"🙎",
		"🙎🏻",
		"🙎🏼",
		"🙎🏽",
		"🙎🏾",
		"🙎🏿",
		"🙏",
		"🙏🏻",
		"🙏🏼",
		"🙏🏽",
		"🙏🏾",
		"🙏🏿",
		"🚀",
		"🚁",
		"🚂",
		"🚃",
		"🚄",
		"🚅",
		"🚆",
		"🚇",
		"🚈",
		"🚉",
		"🚊",
		"🚋",
		"🚌",
		"🚍",
		"🚎",
		"🚏",
		"🚐",
		"🚑",
		"🚒",
		"🚓",
		"🚔",
		"🚕",
		"🚖",
		"🚗",
		"🚘",
		"🚙",
		"🚚",
		"🚛",
		"🚜",
		"🚝",
		"🚞",
		"🚟",
		"🚠",
		"🚡",
		"🚢",
		"🚣",
		"🚣🏻",
		"🚣🏼",
		"🚣🏽",
		"🚣🏾",
		"🚣🏿",
		"🚤",
		"🚥",
		"🚦",
		"🚧",
		"🚨",
		"🚩",
		"🚪",
		"🚫",
		"🚬",
		"🚭",
		"🚮",
		"🚯",
		"🚰",
		"🚱",
		"🚲",
		"🚳",
		"🚴",
		"🚴🏻",
		"🚴🏼",
		"🚴🏽",
		"🚴🏾",
		"🚴🏿",
		"🚵",
		"🚵🏻",
		"🚵🏼",
		"🚵🏽",
		"🚵🏾",
		"🚵🏿",
		"🚶",
		"🚶🏻",
		"🚶🏼",
		"🚶🏽",
		"🚶🏾",
		"🚶🏿",
		"🚷",
		"🚸",
		"🚹",
		"🚺",
		"🚻",
		"🚼",
		"🚽",
		"🚾",
		"🚿",
		"🛀",
		"🛀🏻",
		"🛀🏼",
		"🛀🏽",
		"🛀🏾",
		"🛀🏿",
		"🛁",
		"🛂",
		"🛃",
		"🛄",
		"🛅",
		"🛋",
		"🛌",
		"🛍",
		"🛎",
		"🛏",
		"🛐",
		"🛑",
		"🛒",
		"🛠",
		"🛡",
		"🛢",
		"🛣",
		"🛤",
		"🛥",
		"🛩",
		"🛫",
		"🛬",
		"🛰",
		"🛳",
		"🛴",
		"🛵",
		"🛶",
		"🤐",
		"🤑",
		"🤒",
		"🤓",
		"🤔",
		"🤕",
		"🤖",
		"🤗",
		"🤘",
		"🤘🏻",
		"🤘🏼",
		"🤘🏽",
		"🤘🏾",
		"🤘🏿",
		"🤙",
		"🤙🏻",
		"🤙🏼",
		"🤙🏽",
		"🤙🏾",
		"🤙🏿",
		"🤚",
		"🤚🏻",
		"🤚🏼",
		"🤚🏽",
		"🤚🏾",
		"🤚🏿",
		"🤛",
		"🤛🏻",
		"🤛🏼",
		"🤛🏽",
		"🤛🏾",
		"🤛🏿",
		"🤜",
		"🤜🏻",
		"🤜🏼",
		"🤜🏽",
		"🤜🏾",
		"🤜🏿",
		"🤝",
		"🤝🏻",
		"🤝🏼",
		"🤝🏽",
		"🤝🏾",
		"🤝🏿",
		"🤞",
		"🤞🏻",
		"🤞🏼",
		"🤞🏽",
		"🤞🏾",
		"🤞🏿",
		"🤠",
		"🤡",
		"🤢",
		"🤣",
		"🤤",
		"🤥",
		"🤦",
		"🤦🏻",
		"🤦🏼",
		"🤦🏽",
		"🤦🏾",
		"🤦🏿",
		"🤧",
		"🤰",
		"🤰🏻",
		"🤰🏼",
		"🤰🏽",
		"🤰🏾",
		"🤰🏿",
		"🤳",
		"🤳🏻",
		"🤳🏼",
		"🤳🏽",
		"🤳🏾",
		"🤳🏿",
		"🤴",
		"🤴🏻",
		"🤴🏼",
		"🤴🏽",
		"🤴🏾",
		"🤴🏿",
		"🤵",
		"🤵🏻",
		"🤵🏼",
		"🤵🏽",
		"🤵🏾",
		"🤵🏿",
		"🤶",
		"🤶🏻",
		"🤶🏼",
		"🤶🏽",
		"🤶🏾",
		"🤶🏿",
		"🤷",
		"🤷🏻",
		"🤷🏼",
		"🤷🏽",
		"🤷🏾",
		"🤷🏿",
		"🤸",
		"🤸🏻",
		"🤸🏼",
		"🤸🏽",
		"🤸🏾",
		"🤸🏿",
		"🤹",
		"🤹🏻",
		"🤹🏼",
		"🤹🏽",
		"🤹🏾",
		"🤹🏿",
		"🤺",
		"🤼",
		"🤼🏻",
		"🤼🏼",
		"🤼🏽",
		"🤼🏾",
		"🤼🏿",
		"🤽",
		"🤽🏻",
		"🤽🏼",
		"🤽🏽",
		"🤽🏾",
		"🤽🏿",
		"🤾",
		"🤾🏻",
		"🤾🏼",
		"🤾🏽",
		"🤾🏾",
		"🤾🏿",
		"🥀",
		"🥁",
		"🥂",
		"🥃",
		"🥄",
		"🥅",
		"🥇",
		"🥈",
		"🥉",
		"🥊",
		"🥋",
		"🥐",
		"🥑",
		"🥒",
		"🥓",
		"🥔",
		"🥕",
		"🥖",
		"🥗",
		"🥘",
		"🥙",
		"🥚",
		"🥛",
		"🥜",
		"🥝",
		"🥞",
		"🦀",
		"🦁",
		"🦂",
		"🦃",
		"🦄",
		"🦅",
		"🦆",
		"🦇",
		"🦈",
		"🦉",
		"🦊",
		"🦋",
		"🦌",
		"🦍",
		"🦎",
		"🦏",
		"🦐",
		"🦑",
		"🧀"
	];

/***/ },
/* 55 */
/***/ function(module, exports) {

	module.exports = [
		"#️⃣",
		"*️⃣",
		"0️⃣",
		"1️⃣",
		"2️⃣",
		"3️⃣",
		"4️⃣",
		"5️⃣",
		"6️⃣",
		"7️⃣",
		"8️⃣",
		"9️⃣",
		"©",
		"®",
		"‼️",
		"⁉️",
		"™️",
		"ℹ️",
		"↔️",
		"↕️",
		"↖️",
		"↗️",
		"↘️",
		"↙️",
		"↩️",
		"↪️",
		"⌚️",
		"⌛️",
		"⌨️",
		"⏏️",
		"⏩",
		"⏪",
		"⏫",
		"⏬",
		"⏭",
		"⏮",
		"⏯",
		"⏰",
		"⏱",
		"⏲",
		"⏳",
		"⏸",
		"⏹",
		"⏺",
		"Ⓜ️",
		"▪️",
		"▫️",
		"▶️",
		"◀️",
		"◻️",
		"◼️",
		"◽️",
		"◾️",
		"☀️",
		"☁️",
		"☂",
		"☃",
		"☄",
		"☎️",
		"☑️",
		"☔️",
		"☕️",
		"☘",
		"☝️",
		"☝🏻",
		"☝🏼",
		"☝🏽",
		"☝🏾",
		"☝🏿",
		"☠",
		"☢",
		"☣",
		"☦",
		"☪",
		"☮",
		"☯",
		"☸",
		"☹",
		"☺️",
		"♈️",
		"♉️",
		"♊️",
		"♋️",
		"♌️",
		"♍️",
		"♎️",
		"♏️",
		"♐️",
		"♑️",
		"♒️",
		"♓️",
		"♠️",
		"♣️",
		"♥️",
		"♦️",
		"♨️",
		"♻️",
		"♿️",
		"⚒",
		"⚓️",
		"⚔",
		"⚖",
		"⚗",
		"⚙",
		"⚛",
		"⚜",
		"⚠️",
		"⚡️",
		"⚪️",
		"⚫️",
		"⚰",
		"⚱",
		"⚽️",
		"⚾️",
		"⛄️",
		"⛅️",
		"⛈",
		"⛎",
		"⛏",
		"⛑",
		"⛓",
		"⛔️",
		"⛩",
		"⛪️",
		"⛰",
		"⛱",
		"⛲️",
		"⛳️",
		"⛴",
		"⛵️",
		"⛷",
		"⛸",
		"⛹",
		"⛹🏻",
		"⛹🏼",
		"⛹🏽",
		"⛹🏾",
		"⛹🏿",
		"⛺️",
		"⛽️",
		"✂️",
		"✅",
		"✈️",
		"✉️",
		"✊",
		"✊🏻",
		"✊🏼",
		"✊🏽",
		"✊🏾",
		"✊🏿",
		"✋",
		"✋🏻",
		"✋🏼",
		"✋🏽",
		"✋🏾",
		"✋🏿",
		"✌️",
		"✌🏻",
		"✌🏼",
		"✌🏽",
		"✌🏾",
		"✌🏿",
		"✍️",
		"✍🏻",
		"✍🏼",
		"✍🏽",
		"✍🏾",
		"✍🏿",
		"✏️",
		"✒️",
		"✔️",
		"✖️",
		"✝",
		"✡",
		"✨",
		"✳️",
		"✴️",
		"❄️",
		"❇️",
		"❌",
		"❎",
		"❓",
		"❔",
		"❕",
		"❗️",
		"❣",
		"❤️",
		"➕",
		"➖",
		"➗",
		"➡️",
		"➰",
		"➿",
		"⤴️",
		"⤵️",
		"⬅️",
		"⬆️",
		"⬇️",
		"⬛️",
		"⬜️",
		"⭐️",
		"⭕️",
		"〰",
		"〽️",
		"㊗️",
		"㊙️",
		"🀄️",
		"🃏",
		"🅰",
		"🅱",
		"🅾",
		"🅿️",
		"🆎",
		"🆑",
		"🆒",
		"🆓",
		"🆔",
		"🆕",
		"🆖",
		"🆗",
		"🆘",
		"🆙",
		"🆚",
		"🇦🇨",
		"🇦🇩",
		"🇦🇪",
		"🇦🇫",
		"🇦🇬",
		"🇦🇮",
		"🇦🇱",
		"🇦🇲",
		"🇦🇴",
		"🇦🇶",
		"🇦🇷",
		"🇦🇸",
		"🇦🇹",
		"🇦🇺",
		"🇦🇼",
		"🇦🇽",
		"🇦🇿",
		"🇧🇦",
		"🇧🇧",
		"🇧🇩",
		"🇧🇪",
		"🇧🇫",
		"🇧🇬",
		"🇧🇭",
		"🇧🇮",
		"🇧🇯",
		"🇧🇱",
		"🇧🇲",
		"🇧🇳",
		"🇧🇴",
		"🇧🇶",
		"🇧🇷",
		"🇧🇸",
		"🇧🇹",
		"🇧🇻",
		"🇧🇼",
		"🇧🇾",
		"🇧🇿",
		"🇨🇦",
		"🇨🇨",
		"🇨🇩",
		"🇨🇫",
		"🇨🇬",
		"🇨🇭",
		"🇨🇮",
		"🇨🇰",
		"🇨🇱",
		"🇨🇲",
		"🇨🇳",
		"🇨🇴",
		"🇨🇵",
		"🇨🇷",
		"🇨🇺",
		"🇨🇻",
		"🇨🇼",
		"🇨🇽",
		"🇨🇾",
		"🇨🇿",
		"🇩🇪",
		"🇩🇬",
		"🇩🇯",
		"🇩🇰",
		"🇩🇲",
		"🇩🇴",
		"🇩🇿",
		"🇪🇦",
		"🇪🇨",
		"🇪🇪",
		"🇪🇬",
		"🇪🇭",
		"🇪🇷",
		"🇪🇸",
		"🇪🇹",
		"🇪🇺",
		"🇫🇮",
		"🇫🇯",
		"🇫🇰",
		"🇫🇲",
		"🇫🇴",
		"🇫🇷",
		"🇬🇦",
		"🇬🇧",
		"🇬🇩",
		"🇬🇪",
		"🇬🇫",
		"🇬🇬",
		"🇬🇭",
		"🇬🇮",
		"🇬🇱",
		"🇬🇲",
		"🇬🇳",
		"🇬🇵",
		"🇬🇶",
		"🇬🇷",
		"🇬🇸",
		"🇬🇹",
		"🇬🇺",
		"🇬🇼",
		"🇬🇾",
		"🇭🇰",
		"🇭🇲",
		"🇭🇳",
		"🇭🇷",
		"🇭🇹",
		"🇭🇺",
		"🇮🇨",
		"🇮🇩",
		"🇮🇪",
		"🇮🇱",
		"🇮🇲",
		"🇮🇳",
		"🇮🇴",
		"🇮🇶",
		"🇮🇷",
		"🇮🇸",
		"🇮🇹",
		"🇯🇪",
		"🇯🇲",
		"🇯🇴",
		"🇯🇵",
		"🇰🇪",
		"🇰🇬",
		"🇰🇭",
		"🇰🇮",
		"🇰🇲",
		"🇰🇳",
		"🇰🇵",
		"🇰🇷",
		"🇰🇼",
		"🇰🇾",
		"🇰🇿",
		"🇱🇦",
		"🇱🇧",
		"🇱🇨",
		"🇱🇮",
		"🇱🇰",
		"🇱🇷",
		"🇱🇸",
		"🇱🇹",
		"🇱🇺",
		"🇱🇻",
		"🇱🇾",
		"🇲🇦",
		"🇲🇨",
		"🇲🇩",
		"🇲🇪",
		"🇲🇫",
		"🇲🇬",
		"🇲🇭",
		"🇲🇰",
		"🇲🇱",
		"🇲🇲",
		"🇲🇳",
		"🇲🇴",
		"🇲🇵",
		"🇲🇶",
		"🇲🇷",
		"🇲🇸",
		"🇲🇹",
		"🇲🇺",
		"🇲🇻",
		"🇲🇼",
		"🇲🇽",
		"🇲🇾",
		"🇲🇿",
		"🇳🇦",
		"🇳🇨",
		"🇳🇪",
		"🇳🇫",
		"🇳🇬",
		"🇳🇮",
		"🇳🇱",
		"🇳🇴",
		"🇳🇵",
		"🇳🇷",
		"🇳🇺",
		"🇳🇿",
		"🇴🇲",
		"🇵🇦",
		"🇵🇪",
		"🇵🇫",
		"🇵🇬",
		"🇵🇭",
		"🇵🇰",
		"🇵🇱",
		"🇵🇲",
		"🇵🇳",
		"🇵🇷",
		"🇵🇸",
		"🇵🇹",
		"🇵🇼",
		"🇵🇾",
		"🇶🇦",
		"🇷🇪",
		"🇷🇴",
		"🇷🇸",
		"🇷🇺",
		"🇷🇼",
		"🇸🇦",
		"🇸🇧",
		"🇸🇨",
		"🇸🇩",
		"🇸🇪",
		"🇸🇬",
		"🇸🇭",
		"🇸🇮",
		"🇸🇯",
		"🇸🇰",
		"🇸🇱",
		"🇸🇲",
		"🇸🇳",
		"🇸🇴",
		"🇸🇷",
		"🇸🇸",
		"🇸🇹",
		"🇸🇻",
		"🇸🇽",
		"🇸🇾",
		"🇸🇿",
		"🇹🇦",
		"🇹🇨",
		"🇹🇩",
		"🇹🇫",
		"🇹🇬",
		"🇹🇭",
		"🇹🇯",
		"🇹🇰",
		"🇹🇱",
		"🇹🇲",
		"🇹🇳",
		"🇹🇴",
		"🇹🇷",
		"🇹🇹",
		"🇹🇻",
		"🇹🇼",
		"🇹🇿",
		"🇺🇦",
		"🇺🇬",
		"🇺🇲",
		"🇺🇸",
		"🇺🇾",
		"🇺🇿",
		"🇻🇦",
		"🇻🇨",
		"🇻🇪",
		"🇻🇬",
		"🇻🇮",
		"🇻🇳",
		"🇻🇺",
		"🇼🇫",
		"🇼🇸",
		"🇽🇰",
		"🇾🇪",
		"🇾🇹",
		"🇿🇦",
		"🇿🇲",
		"🇿🇼",
		"🈁",
		"🈂",
		"🈚️",
		"🈯️",
		"🈲",
		"🈳",
		"🈴",
		"🈵",
		"🈶",
		"🈷",
		"🈸",
		"🈹",
		"🈺",
		"🉐",
		"🉑",
		"🌀",
		"🌁",
		"🌂",
		"🌃",
		"🌄",
		"🌅",
		"🌆",
		"🌇",
		"🌈",
		"🌉",
		"🌊",
		"🌋",
		"🌌",
		"🌍",
		"🌎",
		"🌏",
		"🌐",
		"🌑",
		"🌒",
		"🌓",
		"🌔",
		"🌕",
		"🌖",
		"🌗",
		"🌘",
		"🌙",
		"🌚",
		"🌛",
		"🌜",
		"🌝",
		"🌞",
		"🌟",
		"🌠",
		"🌡",
		"🌤",
		"🌥",
		"🌦",
		"🌧",
		"🌨",
		"🌩",
		"🌪",
		"🌫",
		"🌬",
		"🌭",
		"🌮",
		"🌯",
		"🌰",
		"🌱",
		"🌲",
		"🌳",
		"🌴",
		"🌵",
		"🌶",
		"🌷",
		"🌸",
		"🌹",
		"🌺",
		"🌻",
		"🌼",
		"🌽",
		"🌾",
		"🌿",
		"🍀",
		"🍁",
		"🍂",
		"🍃",
		"🍄",
		"🍅",
		"🍆",
		"🍇",
		"🍈",
		"🍉",
		"🍊",
		"🍋",
		"🍌",
		"🍍",
		"🍎",
		"🍏",
		"🍐",
		"🍑",
		"🍒",
		"🍓",
		"🍔",
		"🍕",
		"🍖",
		"🍗",
		"🍘",
		"🍙",
		"🍚",
		"🍛",
		"🍜",
		"🍝",
		"🍞",
		"🍟",
		"🍠",
		"🍡",
		"🍢",
		"🍣",
		"🍤",
		"🍥",
		"🍦",
		"🍧",
		"🍨",
		"🍩",
		"🍪",
		"🍫",
		"🍬",
		"🍭",
		"🍮",
		"🍯",
		"🍰",
		"🍱",
		"🍲",
		"🍳",
		"🍴",
		"🍵",
		"🍶",
		"🍷",
		"🍸",
		"🍹",
		"🍺",
		"🍻",
		"🍼",
		"🍽",
		"🍾",
		"🍿",
		"🎀",
		"🎁",
		"🎂",
		"🎃",
		"🎄",
		"🎅",
		"🎅🏻",
		"🎅🏼",
		"🎅🏽",
		"🎅🏾",
		"🎅🏿",
		"🎆",
		"🎇",
		"🎈",
		"🎉",
		"🎊",
		"🎋",
		"🎌",
		"🎍",
		"🎎",
		"🎏",
		"🎐",
		"🎑",
		"🎒",
		"🎓",
		"🎖",
		"🎗",
		"🎙",
		"🎚",
		"🎛",
		"🎞",
		"🎟",
		"🎠",
		"🎡",
		"🎢",
		"🎣",
		"🎤",
		"🎥",
		"🎦",
		"🎧",
		"🎨",
		"🎩",
		"🎪",
		"🎫",
		"🎬",
		"🎭",
		"🎮",
		"🎯",
		"🎰",
		"🎱",
		"🎲",
		"🎳",
		"🎴",
		"🎵",
		"🎶",
		"🎷",
		"🎸",
		"🎹",
		"🎺",
		"🎻",
		"🎼",
		"🎽",
		"🎾",
		"🎿",
		"🏀",
		"🏁",
		"🏂",
		"🏃",
		"🏃🏻",
		"🏃🏼",
		"🏃🏽",
		"🏃🏾",
		"🏃🏿",
		"🏄",
		"🏄🏻",
		"🏄🏼",
		"🏄🏽",
		"🏄🏾",
		"🏄🏿",
		"🏅",
		"🏆",
		"🏇",
		"🏇🏻",
		"🏇🏼",
		"🏇🏽",
		"🏇🏾",
		"🏇🏿",
		"🏈",
		"🏉",
		"🏊",
		"🏊🏻",
		"🏊🏼",
		"🏊🏽",
		"🏊🏾",
		"🏊🏿",
		"🏋",
		"🏋🏻",
		"🏋🏼",
		"🏋🏽",
		"🏋🏾",
		"🏋🏿",
		"🏌",
		"🏍",
		"🏎",
		"🏏",
		"🏐",
		"🏑",
		"🏒",
		"🏓",
		"🏔",
		"🏕",
		"🏖",
		"🏗",
		"🏘",
		"🏙",
		"🏚",
		"🏛",
		"🏜",
		"🏝",
		"🏞",
		"🏟",
		"🏠",
		"🏡",
		"🏢",
		"🏣",
		"🏤",
		"🏥",
		"🏦",
		"🏧",
		"🏨",
		"🏩",
		"🏪",
		"🏫",
		"🏬",
		"🏭",
		"🏮",
		"🏯",
		"🏰",
		"🏳",
		"🏴",
		"🏵",
		"🏷",
		"🏸",
		"🏹",
		"🏺",
		"🏻",
		"🏼",
		"🏽",
		"🏾",
		"🏿",
		"🐀",
		"🐁",
		"🐂",
		"🐃",
		"🐄",
		"🐅",
		"🐆",
		"🐇",
		"🐈",
		"🐉",
		"🐊",
		"🐋",
		"🐌",
		"🐍",
		"🐎",
		"🐏",
		"🐐",
		"🐑",
		"🐒",
		"🐓",
		"🐔",
		"🐕",
		"🐖",
		"🐗",
		"🐘",
		"🐙",
		"🐚",
		"🐛",
		"🐜",
		"🐝",
		"🐞",
		"🐟",
		"🐠",
		"🐡",
		"🐢",
		"🐣",
		"🐤",
		"🐥",
		"🐦",
		"🐧",
		"🐨",
		"🐩",
		"🐪",
		"🐫",
		"🐬",
		"🐭",
		"🐮",
		"🐯",
		"🐰",
		"🐱",
		"🐲",
		"🐳",
		"🐴",
		"🐵",
		"🐶",
		"🐷",
		"🐸",
		"🐹",
		"🐺",
		"🐻",
		"🐼",
		"🐽",
		"🐾",
		"🐿",
		"👀",
		"👁",
		"👁‍🗨",
		"👂",
		"👂🏻",
		"👂🏼",
		"👂🏽",
		"👂🏾",
		"👂🏿",
		"👃",
		"👃🏻",
		"👃🏼",
		"👃🏽",
		"👃🏾",
		"👃🏿",
		"👄",
		"👅",
		"👆",
		"👆🏻",
		"👆🏼",
		"👆🏽",
		"👆🏾",
		"👆🏿",
		"👇",
		"👇🏻",
		"👇🏼",
		"👇🏽",
		"👇🏾",
		"👇🏿",
		"👈",
		"👈🏻",
		"👈🏼",
		"👈🏽",
		"👈🏾",
		"👈🏿",
		"👉",
		"👉🏻",
		"👉🏼",
		"👉🏽",
		"👉🏾",
		"👉🏿",
		"👊",
		"👊🏻",
		"👊🏼",
		"👊🏽",
		"👊🏾",
		"👊🏿",
		"👋",
		"👋🏻",
		"👋🏼",
		"👋🏽",
		"👋🏾",
		"👋🏿",
		"👌",
		"👌🏻",
		"👌🏼",
		"👌🏽",
		"👌🏾",
		"👌🏿",
		"👍",
		"👍🏻",
		"👍🏼",
		"👍🏽",
		"👍🏾",
		"👍🏿",
		"👎",
		"👎🏻",
		"👎🏼",
		"👎🏽",
		"👎🏾",
		"👎🏿",
		"👏",
		"👏🏻",
		"👏🏼",
		"👏🏽",
		"👏🏾",
		"👏🏿",
		"👐",
		"👐🏻",
		"👐🏼",
		"👐🏽",
		"👐🏾",
		"👐🏿",
		"👑",
		"👒",
		"👓",
		"👔",
		"👕",
		"👖",
		"👗",
		"👘",
		"👙",
		"👚",
		"👛",
		"👜",
		"👝",
		"👞",
		"👟",
		"👠",
		"👡",
		"👢",
		"👣",
		"👤",
		"👥",
		"👦",
		"👦🏻",
		"👦🏼",
		"👦🏽",
		"👦🏾",
		"👦🏿",
		"👧",
		"👧🏻",
		"👧🏼",
		"👧🏽",
		"👧🏾",
		"👧🏿",
		"👨",
		"👨‍❤️‍👨",
		"👨‍❤️‍💋‍👨",
		"👨‍👨‍👦",
		"👨‍👨‍👦‍👦",
		"👨‍👨‍👧",
		"👨‍👨‍👧‍👦",
		"👨‍👨‍👧‍👧",
		"👨‍👩‍👦‍👦",
		"👨‍👩‍👧",
		"👨‍👩‍👧‍👦",
		"👨‍👩‍👧‍👧",
		"👨🏻",
		"👨🏼",
		"👨🏽",
		"👨🏾",
		"👨🏿",
		"👩",
		"👩‍❤️‍👩",
		"👩‍❤️‍💋‍👩",
		"👩‍👩‍👦",
		"👩‍👩‍👦‍👦",
		"👩‍👩‍👧",
		"👩‍👩‍👧‍👦",
		"👩‍👩‍👧‍👧",
		"👩🏻",
		"👩🏼",
		"👩🏽",
		"👩🏾",
		"👩🏿",
		"👪",
		"👫",
		"👬",
		"👭",
		"👮",
		"👮🏻",
		"👮🏼",
		"👮🏽",
		"👮🏾",
		"👮🏿",
		"👯",
		"👰",
		"👰🏻",
		"👰🏼",
		"👰🏽",
		"👰🏾",
		"👰🏿",
		"👱",
		"👱🏻",
		"👱🏼",
		"👱🏽",
		"👱🏾",
		"👱🏿",
		"👲",
		"👲🏻",
		"👲🏼",
		"👲🏽",
		"👲🏾",
		"👲🏿",
		"👳",
		"👳🏻",
		"👳🏼",
		"👳🏽",
		"👳🏾",
		"👳🏿",
		"👴",
		"👴🏻",
		"👴🏼",
		"👴🏽",
		"👴🏾",
		"👴🏿",
		"👵",
		"👵🏻",
		"👵🏼",
		"👵🏽",
		"👵🏾",
		"👵🏿",
		"👶",
		"👶🏻",
		"👶🏼",
		"👶🏽",
		"👶🏾",
		"👶🏿",
		"👷",
		"👷🏻",
		"👷🏼",
		"👷🏽",
		"👷🏾",
		"👷🏿",
		"👸",
		"👸🏻",
		"👸🏼",
		"👸🏽",
		"👸🏾",
		"👸🏿",
		"👹",
		"👺",
		"👻",
		"👼",
		"👼🏻",
		"👼🏼",
		"👼🏽",
		"👼🏾",
		"👼🏿",
		"👽",
		"👾",
		"👿",
		"💀",
		"💁",
		"💁🏻",
		"💁🏼",
		"💁🏽",
		"💁🏾",
		"💁🏿",
		"💂",
		"💂🏻",
		"💂🏼",
		"💂🏽",
		"💂🏾",
		"💂🏿",
		"💃",
		"💃🏻",
		"💃🏼",
		"💃🏽",
		"💃🏾",
		"💃🏿",
		"💄",
		"💅",
		"💅🏻",
		"💅🏼",
		"💅🏽",
		"💅🏾",
		"💅🏿",
		"💆",
		"💆🏻",
		"💆🏼",
		"💆🏽",
		"💆🏾",
		"💆🏿",
		"💇",
		"💇🏻",
		"💇🏼",
		"💇🏽",
		"💇🏾",
		"💇🏿",
		"💈",
		"💉",
		"💊",
		"💋",
		"💌",
		"💍",
		"💎",
		"💏",
		"💐",
		"💑",
		"💒",
		"💓",
		"💔",
		"💕",
		"💖",
		"💗",
		"💘",
		"💙",
		"💚",
		"💛",
		"💜",
		"💝",
		"💞",
		"💟",
		"💠",
		"💡",
		"💢",
		"💣",
		"💤",
		"💥",
		"💦",
		"💧",
		"💨",
		"💩",
		"💪",
		"💪🏻",
		"💪🏼",
		"💪🏽",
		"💪🏾",
		"💪🏿",
		"💫",
		"💬",
		"💭",
		"💮",
		"💯",
		"💰",
		"💱",
		"💲",
		"💳",
		"💴",
		"💵",
		"💶",
		"💷",
		"💸",
		"💹",
		"💺",
		"💻",
		"💼",
		"💽",
		"💾",
		"💿",
		"📀",
		"📁",
		"📂",
		"📃",
		"📄",
		"📅",
		"📆",
		"📇",
		"📈",
		"📉",
		"📊",
		"📋",
		"📌",
		"📍",
		"📎",
		"📏",
		"📐",
		"📑",
		"📒",
		"📓",
		"📔",
		"📕",
		"📖",
		"📗",
		"📘",
		"📙",
		"📚",
		"📛",
		"📜",
		"📝",
		"📞",
		"📟",
		"📠",
		"📡",
		"📢",
		"📣",
		"📤",
		"📥",
		"📦",
		"📧",
		"📨",
		"📩",
		"📪",
		"📫",
		"📬",
		"📭",
		"📮",
		"📯",
		"📰",
		"📱",
		"📲",
		"📳",
		"📴",
		"📵",
		"📶",
		"📷",
		"📸",
		"📹",
		"📺",
		"📻",
		"📼",
		"📽",
		"📿",
		"🔀",
		"🔁",
		"🔂",
		"🔃",
		"🔄",
		"🔅",
		"🔆",
		"🔇",
		"🔈",
		"🔉",
		"🔊",
		"🔋",
		"🔌",
		"🔍",
		"🔎",
		"🔏",
		"🔐",
		"🔑",
		"🔒",
		"🔓",
		"🔔",
		"🔕",
		"🔖",
		"🔗",
		"🔘",
		"🔙",
		"🔚",
		"🔛",
		"🔜",
		"🔝",
		"🔞",
		"🔟",
		"🔠",
		"🔡",
		"🔢",
		"🔣",
		"🔤",
		"🔥",
		"🔦",
		"🔧",
		"🔨",
		"🔩",
		"🔪",
		"🔫",
		"🔬",
		"🔭",
		"🔮",
		"🔯",
		"🔰",
		"🔱",
		"🔲",
		"🔳",
		"🔴",
		"🔵",
		"🔶",
		"🔷",
		"🔸",
		"🔹",
		"🔺",
		"🔻",
		"🔼",
		"🔽",
		"🕉",
		"🕊",
		"🕋",
		"🕌",
		"🕍",
		"🕎",
		"🕐",
		"🕑",
		"🕒",
		"🕓",
		"🕔",
		"🕕",
		"🕖",
		"🕗",
		"🕘",
		"🕙",
		"🕚",
		"🕛",
		"🕜",
		"🕝",
		"🕞",
		"🕟",
		"🕠",
		"🕡",
		"🕢",
		"🕣",
		"🕤",
		"🕥",
		"🕦",
		"🕧",
		"🕯",
		"🕰",
		"🕳",
		"🕴",
		"🕵",
		"🕵🏻",
		"🕵🏼",
		"🕵🏽",
		"🕵🏾",
		"🕵🏿",
		"🕶",
		"🕷",
		"🕸",
		"🕹",
		"🖇",
		"🖊",
		"🖋",
		"🖌",
		"🖍",
		"🖐",
		"🖐🏻",
		"🖐🏼",
		"🖐🏽",
		"🖐🏾",
		"🖐🏿",
		"🖕",
		"🖕🏻",
		"🖕🏼",
		"🖕🏽",
		"🖕🏾",
		"🖕🏿",
		"🖖",
		"🖖🏻",
		"🖖🏼",
		"🖖🏽",
		"🖖🏾",
		"🖖🏿",
		"🖥",
		"🖨",
		"🖱",
		"🖲",
		"🖼",
		"🗂",
		"🗃",
		"🗄",
		"🗑",
		"🗒",
		"🗓",
		"🗜",
		"🗝",
		"🗞",
		"🗡",
		"🗣",
		"🗨️",
		"🗯",
		"🗳",
		"🗺",
		"🗻",
		"🗼",
		"🗽",
		"🗾",
		"🗿",
		"😀",
		"😁",
		"😂",
		"😃",
		"😄",
		"😅",
		"😆",
		"😇",
		"😈",
		"😉",
		"😊",
		"😋",
		"😌",
		"😍",
		"😎",
		"😏",
		"😐",
		"😑",
		"😒",
		"😓",
		"😔",
		"😕",
		"😖",
		"😗",
		"😘",
		"😙",
		"😚",
		"😛",
		"😜",
		"😝",
		"😞",
		"😟",
		"😠",
		"😡",
		"😢",
		"😣",
		"😤",
		"😥",
		"😦",
		"😧",
		"😨",
		"😩",
		"😪",
		"😫",
		"😬",
		"😭",
		"😮",
		"😯",
		"😰",
		"😱",
		"😲",
		"😳",
		"😴",
		"😵",
		"😶",
		"😷",
		"😸",
		"😹",
		"😺",
		"😻",
		"😼",
		"😽",
		"😾",
		"😿",
		"🙀",
		"🙁",
		"🙂",
		"🙃",
		"🙄",
		"🙅",
		"🙅🏻",
		"🙅🏼",
		"🙅🏽",
		"🙅🏾",
		"🙅🏿",
		"🙆",
		"🙆🏻",
		"🙆🏼",
		"🙆🏽",
		"🙆🏾",
		"🙆🏿",
		"🙇",
		"🙇🏻",
		"🙇🏼",
		"🙇🏽",
		"🙇🏾",
		"🙇🏿",
		"🙈",
		"🙉",
		"🙊",
		"🙋",
		"🙋🏻",
		"🙋🏼",
		"🙋🏽",
		"🙋🏾",
		"🙋🏿",
		"🙌",
		"🙌🏻",
		"🙌🏼",
		"🙌🏽",
		"🙌🏾",
		"🙌🏿",
		"🙍",
		"🙍🏻",
		"🙍🏼",
		"🙍🏽",
		"🙍🏾",
		"🙍🏿",
		"🙎",
		"🙎🏻",
		"🙎🏼",
		"🙎🏽",
		"🙎🏾",
		"🙎🏿",
		"🙏",
		"🙏🏻",
		"🙏🏼",
		"🙏🏽",
		"🙏🏾",
		"🙏🏿",
		"🚀",
		"🚁",
		"🚂",
		"🚃",
		"🚄",
		"🚅",
		"🚆",
		"🚇",
		"🚈",
		"🚉",
		"🚊",
		"🚋",
		"🚌",
		"🚍",
		"🚎",
		"🚏",
		"🚐",
		"🚑",
		"🚒",
		"🚓",
		"🚔",
		"🚕",
		"🚖",
		"🚗",
		"🚘",
		"🚙",
		"🚚",
		"🚛",
		"🚜",
		"🚝",
		"🚞",
		"🚟",
		"🚠",
		"🚡",
		"🚢",
		"🚣",
		"🚣🏻",
		"🚣🏼",
		"🚣🏽",
		"🚣🏾",
		"🚣🏿",
		"🚤",
		"🚥",
		"🚦",
		"🚧",
		"🚨",
		"🚩",
		"🚪",
		"🚫",
		"🚬",
		"🚭",
		"🚮",
		"🚯",
		"🚰",
		"🚱",
		"🚲",
		"🚳",
		"🚴",
		"🚴🏻",
		"🚴🏼",
		"🚴🏽",
		"🚴🏾",
		"🚴🏿",
		"🚵",
		"🚵🏻",
		"🚵🏼",
		"🚵🏽",
		"🚵🏾",
		"🚵🏿",
		"🚶",
		"🚶🏻",
		"🚶🏼",
		"🚶🏽",
		"🚶🏾",
		"🚶🏿",
		"🚷",
		"🚸",
		"🚹",
		"🚺",
		"🚻",
		"🚼",
		"🚽",
		"🚾",
		"🚿",
		"🛀",
		"🛀🏻",
		"🛀🏼",
		"🛀🏽",
		"🛀🏾",
		"🛀🏿",
		"🛁",
		"🛂",
		"🛃",
		"🛄",
		"🛅",
		"🛋",
		"🛌",
		"🛍",
		"🛎",
		"🛏",
		"🛐",
		"🛠",
		"🛡",
		"🛢",
		"🛣",
		"🛤",
		"🛥",
		"🛩",
		"🛫",
		"🛬",
		"🛰",
		"🛳",
		"🤐",
		"🤑",
		"🤒",
		"🤓",
		"🤔",
		"🤕",
		"🤖",
		"🤗",
		"🤘",
		"🤘🏻",
		"🤘🏼",
		"🤘🏽",
		"🤘🏾",
		"🤘🏿",
		"🦀",
		"🦁",
		"🦂",
		"🦃",
		"🦄",
		"🧀"
	];

/***/ }
/******/ ])
});
;