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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./src/config.js

/** Default configuration Class for BNotifications */

var BNotificationsConfig = {
  /**
   * Enum for localized texts
   * @readonly
   * @property {string} lang
   */
  lang: 'EN'
};
// CONCATENATED MODULE: ./src/localization.js

/**
 * @typedef {Object} LocalizationType
 * @property {string} tittleSufix
 * @property {string} genericBody
 * @property {string} acceptButtonText
 * @property {string} cancelButtonText
 */

/**Localization Class */

var Localization = Object.freeze({
  /**
   * Enum for localized texts
   * @readonly
   * @enum {LocalizationType}
   */
  EN: {
    tittleSufix: 'SAYS',
    genericBody: '!--- This is a generic modal body. </br> place your html here --',
    acceptButtonText: 'Ok',
    cancelButtonText: 'Cancel'
  },

  /**
   * Enum for localized texts
   * @readonly
   * @enum {LocalizationType}
   */
  ES: {
    tittleSufix: 'DICE',
    genericBody: '!-- Esto es un modal gen&eacute;rico. </br> inserta tu c&oacute;digo html aqu&iacute; --',
    acceptButtonText: 'Aceptar',
    cancelButtonText: 'Cancelar'
  }
});
// CONCATENATED MODULE: ./src/modal.module.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var modalCount = 0;
var _locale = {};
var _config = {};
/**
 * @typedef {Object} ModalData
 * @property {string} title
 * @property {string} size
 * @property {string} body
 * @property {string} cancelBtnText
 * @property {string} acceptBtn.Text
 * @property {boolean} autoClose
 * @property {boolean} isInfo
 * @property {boolean} closeOutside
 * @property {boolean} centered
 */

/** Class for Bottrstrap notifications plugin */

var BNotification =
/*#__PURE__*/
function () {
  /**
   * 
   * @param {BNotificationsConfig} config 
   * @param {Localization} locale 
   * @param {window} w
   */
  function BNotification(config, locale, w) {
    _classCallCheck(this, BNotification);

    _config = config;
    _locale = locale;
    w.$notifications = this;
  }
  /**  
   * @function dialog 
   * @description Function that generates a modal whit options to accept or cancel
   * it has two methods then and catch to define the actions of both buttons
   * @param {ModalData} [customData] Object containing the informatión of the modal
   * @see $[util/genDialogModal,flow] 
   * @memberof BNotification 
   * */


  _createClass(BNotification, [{
    key: "dialog",
    value: function dialog(customData) {
      var defaultObject = {
        title: $("title").text().toUpperCase() + " " + _locale[_config.lang].tittleSufix + ":",
        size: "modal-sm",
        body: _locale[_config.lang].genericBody,
        cancelBtn: _locale[_config.lang].cancelButtonText,
        acceptBtn: _locale[_config.lang].acceptButtonText,
        autoClose: true,
        isInfo: false,
        closeOutside: false,
        centered: false
      };

      var dataObj = _objectSpread({}, defaultObject, {}, customData);

      var currentIndex = modalCount;
      console.log(currentIndex);
      $("body").append(genHtml(dataObj, dataObj.isInfo, currentIndex));
      $('#general-modal-' + currentIndex).modal('show');
      $('#general-modal-' + currentIndex).on('hidden.bs.modal', function (e) {
        $('#general-modal-' + currentIndex).remove();
      });
      $('#accept-modal-buton-' + currentIndex).on('click', function () {
        console.log("se dio click en aceptar", currentIndex);
        console.log(dataObj.autoClose);
        if (dataObj.autoClose) closeModal(currentIndex);
      });
      $('#cancel-modal-buton-' + currentIndex).on('click', function () {
        if (dataObj.autoClose) closeModal(currentIndex);
      });

      if (dataObj.closeOutside) {
        $('#general-modal-' + currentIndex).modal({
          backdrop: 'static',
          keyboard: false
        });
      }

      modalCount++;
      var modalInstance = this;
      return {
        then: function then() {
          var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};
          $('#accept-modal-buton-' + currentIndex).on('click', function () {
            callback();
            if (dataObj.autoClose) closeModal(currentIndex);
          });
          return modalInstance;
        },
        "catch": function _catch() {
          var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};
          $('#cancel-modal-buton-' + currentIndex).on('click', function () {
            callback();
            if (dataObj.autoClose) closeModal(currentIndex);
          });
          return modalInstance;
        }
      };
    }
    /**
     * @function config
     * @param {BNotificationsConfig} newConfig
     * @memberof BNotification
     * @description Function that changes the confugaration if the plugin
     */

  }, {
    key: "config",
    value: function config(newConfig) {
      return _config = _objectSpread({}, _config, {}, newConfig);
    }
  }]);

  return BNotification;
}();
/** 
 * @function genHTML 
 * @description Función que genera el html con el contenido del modal 
 * @param {Modal} modalParams Objeto con la información del modal 
 * @param {boolean} isInfo Booleano determina si se trata de un cuadro de dialogo o un modal 
 * @memberof BNotification 
 * @returns {jQuery(element)} 
 * */

function genHtml(modalParams, isInfo, modalCount) {
  var modalHtml;
  var modalFooter = $("<div>").addClass("modal-footer");

  if (!isInfo) {
    modalFooter.append($("<button>").addClass("btn btn-secondary").html(modalParams.cancelBtn).attr({
      type: "button",
      id: "cancel-modal-buton-" + modalCount
    }));
  }

  modalFooter.append($("<button>").addClass("btn btn-primary").html(modalParams.acceptBtn).attr({
    id: "accept-modal-buton-" + modalCount,
    type: "button"
  }));
  modalHtml = $("<div>").addClass("modal fade").attr({
    "tabindex": "-1",
    "role": "dialog",
    "id": "general-modal-" + modalCount,
    "data-backdrop": "static",
    "data-keyboard": "false"
  }).append($("<div>").addClass("modal-dialog " + (modalParams.centered ? 'modalParams' : '') + " " + modalParams.size).attr("role", "document").append($("<div>").addClass("modal-content").append($("<div>").addClass("modal-header").append($("<h4>").addClass("modal-title tittle2-text").html(modalParams.title))).append($("<div>").addClass("modal-body").html(modalParams.body)).append(modalFooter)));
  return modalHtml;
}
/** 
 * @function closeModal 
 * @description esconde todos los modales generados 
 * @memberof BNotification
 */


function closeModal(id) {
  $('#general-modal-' + id).modal('hide');
  $('#accept-modal-buton-' + id).off('click');
  $('#cancel-modal-buton-' + id).off('click');
  setTimeout(function () {
    $('#general-modal-' + id).remove();
  }, 200);
  console.log("Modal closed", '#general-modal-' + id);
}
// CONCATENATED MODULE: ./src/index.js





new BNotification(BNotificationsConfig, Localization, window);

/***/ })
/******/ ]);