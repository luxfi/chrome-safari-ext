(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["TrezorConnect"] = factory();
	else
		root["TrezorConnect"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 928:
/***/ ((module) => {

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var R = typeof Reflect === 'object' ? Reflect : null
var ReflectApply = R && typeof R.apply === 'function'
  ? R.apply
  : function ReflectApply(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
  }

var ReflectOwnKeys
if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target)
      .concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}

function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}

var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
}

function EventEmitter() {
  EventEmitter.init.call(this);
}
module.exports = EventEmitter;
module.exports.once = once;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;

function checkListener(listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
}

Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function() {
    return defaultMaxListeners;
  },
  set: function(arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }
    defaultMaxListeners = arg;
  }
});

EventEmitter.init = function() {

  if (this._events === undefined ||
      this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
};

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }
  this._maxListeners = n;
  return this;
};

function _getMaxListeners(that) {
  if (that._maxListeners === undefined)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return _getMaxListeners(this);
};

EventEmitter.prototype.emit = function emit(type) {
  var args = [];
  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
  var doError = (type === 'error');

  var events = this._events;
  if (events !== undefined)
    doError = (doError && events.error === undefined);
  else if (!doError)
    return false;

  // If there is no 'error' event listener then throw.
  if (doError) {
    var er;
    if (args.length > 0)
      er = args[0];
    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    }
    // At least give some kind of context to the user
    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];

  if (handler === undefined)
    return false;

  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      ReflectApply(listeners[i], this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  checkListener(listener);

  events = target._events;
  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type,
                  listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }

  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] =
        prepend ? [listener, existing] : [existing, listener];
      // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    }

    // Check for listener leak
    m = _getMaxListeners(target);
    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true;
      // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax
      var w = new Error('Possible EventEmitter memory leak detected. ' +
                          existing.length + ' ' + String(type) + ' listeners ' +
                          'added. Use emitter.setMaxListeners() to ' +
                          'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener =
    function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };

function onceWrapper() {
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    if (arguments.length === 0)
      return this.listener.call(this.target);
    return this.listener.apply(this.target, arguments);
  }
}

function _onceWrap(target, type, listener) {
  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  checkListener(listener);
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener =
    function prependOnceListener(type, listener) {
      checkListener(listener);
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };

// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener =
    function removeListener(type, listener) {
      var list, events, position, i, originalListener;

      checkListener(listener);

      events = this._events;
      if (events === undefined)
        return this;

      list = events[type];
      if (list === undefined)
        return this;

      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0)
          this._events = Object.create(null);
        else {
          delete events[type];
          if (events.removeListener)
            this.emit('removeListener', type, list.listener || listener);
        }
      } else if (typeof list !== 'function') {
        position = -1;

        for (i = list.length - 1; i >= 0; i--) {
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }

        if (position < 0)
          return this;

        if (position === 0)
          list.shift();
        else {
          spliceOne(list, position);
        }

        if (list.length === 1)
          events[type] = list[0];

        if (events.removeListener !== undefined)
          this.emit('removeListener', type, originalListener || listener);
      }

      return this;
    };

EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

EventEmitter.prototype.removeAllListeners =
    function removeAllListeners(type) {
      var listeners, events, i;

      events = this._events;
      if (events === undefined)
        return this;

      // not listening for removeListener, no need to emit
      if (events.removeListener === undefined) {
        if (arguments.length === 0) {
          this._events = Object.create(null);
          this._eventsCount = 0;
        } else if (events[type] !== undefined) {
          if (--this._eventsCount === 0)
            this._events = Object.create(null);
          else
            delete events[type];
        }
        return this;
      }

      // emit removeListener for all listeners on all events
      if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for (i = 0; i < keys.length; ++i) {
          key = keys[i];
          if (key === 'removeListener') continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
      }

      listeners = events[type];

      if (typeof listeners === 'function') {
        this.removeListener(type, listeners);
      } else if (listeners !== undefined) {
        // LIFO order
        for (i = listeners.length - 1; i >= 0; i--) {
          this.removeListener(type, listeners[i]);
        }
      }

      return this;
    };

function _listeners(target, type, unwrap) {
  var events = target._events;

  if (events === undefined)
    return [];

  var evlistener = events[type];
  if (evlistener === undefined)
    return [];

  if (typeof evlistener === 'function')
    return unwrap ? [evlistener.listener || evlistener] : [evlistener];

  return unwrap ?
    unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function(emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;

  if (events !== undefined) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};

function arrayClone(arr, n) {
  var copy = new Array(n);
  for (var i = 0; i < n; ++i)
    copy[i] = arr[i];
  return copy;
}

function spliceOne(list, index) {
  for (; index + 1 < list.length; index++)
    list[index] = list[index + 1];
  list.pop();
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}

function once(emitter, name) {
  return new Promise(function (resolve, reject) {
    function errorListener(err) {
      emitter.removeListener(name, resolver);
      reject(err);
    }

    function resolver() {
      if (typeof emitter.removeListener === 'function') {
        emitter.removeListener('error', errorListener);
      }
      resolve([].slice.call(arguments));
    };

    eventTargetAgnosticAddListener(emitter, name, resolver, { once: true });
    if (name !== 'error') {
      addErrorHandlerIfEventEmitter(emitter, errorListener, { once: true });
    }
  });
}

function addErrorHandlerIfEventEmitter(emitter, handler, flags) {
  if (typeof emitter.on === 'function') {
    eventTargetAgnosticAddListener(emitter, 'error', handler, flags);
  }
}

function eventTargetAgnosticAddListener(emitter, name, listener, flags) {
  if (typeof emitter.on === 'function') {
    if (flags.once) {
      emitter.once(name, listener);
    } else {
      emitter.on(name, listener);
    }
  } else if (typeof emitter.addEventListener === 'function') {
    // EventTarget does not have `error` event semantics like Node
    // EventEmitters, we do not listen for `error` events here.
    emitter.addEventListener(name, function wrapListener(arg) {
      // IE does not have builtin `{ once: true }` support so we
      // have to do it manually.
      if (flags.once) {
        emitter.removeEventListener(name, wrapListener);
      }
      listener(arg);
    });
  } else {
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof emitter);
  }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ src)
});

// UNUSED EXPORTS: BLOCKCHAIN, BLOCKCHAIN_EVENT, BinancePreparedMessage, BinancePreparedTransaction, BinanceSDKTransaction, BinanceSignTransaction, Bip32, BitcoinNetworkInfo, BlockchainLink, Bundle, CARDANO, CORE_EVENT, CardanoAddressParameters, CardanoAssetGroup, CardanoAuxiliaryData, CardanoAuxiliaryDataSupplement, CardanoCVoteRegistrationDelegation, CardanoCVoteRegistrationParameters, CardanoCertificate, CardanoCertificatePointer, CardanoCollateralInput, CardanoGetAddress, CardanoGetNativeScriptHash, CardanoGetPublicKey, CardanoInput, CardanoMint, CardanoNativeScript, CardanoNativeScriptHash, CardanoOutput, CardanoPoolMargin, CardanoPoolMetadata, CardanoPoolOwner, CardanoPoolParameters, CardanoPoolRelay, CardanoReferenceInput, CardanoRequiredSigner, CardanoSignTransaction, CardanoSignTransactionExtended, CardanoSignedTxData, CardanoSignedTxWitness, CardanoToken, CardanoWithdrawal, CoinInfo, CoinObj, CoinSupport, DEVICE, DEVICE_EVENT, DerivationPath, DeviceModelInternal, ERRORS, EosAuthorization, EosPublicKey, EosSDKTransaction, EosSignTransaction, EosTxAction, EosTxActionCommon, EosTxHeader, EthereumAccessList, EthereumNetworkInfo, EthereumSignMessage, EthereumSignTransaction, EthereumSignTypedData, EthereumSignTypedDataMessage, EthereumSignTypedDataTypes, EthereumSignTypedHash, EthereumSignedTx, EthereumTransaction, EthereumTransactionEIP1559, EthereumVerifyMessage, FeeInfo, FeeLevel, FirmwareType, GetAddress, GetPublicKey, IFRAME, IntermediaryVersion, MiscNetworkInfo, NEM, NETWORK, Network, POPUP, PROTO, PublicKey, RESPONSE_EVENT, RipplePayment, RippleSignTransaction, RippleSignedTx, RippleTransaction, SelectFeeLevel, SignMessage, SolanaPublicKey, SolanaSignTransaction, SolanaSignedTransaction, SolanaTxAdditionalInfo, SolanaTxTokenAccountInfo, StellarAccountMergeOperation, StellarAllowTrustOperation, StellarAsset, StellarBumpSequenceOperation, StellarChangeTrustOperation, StellarClaimClaimableBalanceOperation, StellarCreateAccountOperation, StellarInflationOperation, StellarManageBuyOfferOperation, StellarManageDataOperation, StellarManageSellOfferOperation, StellarOperation, StellarOperationMessage, StellarPassiveSellOfferOperation, StellarPathPaymentStrictReceiveOperation, StellarPathPaymentStrictSendOperation, StellarPaymentOperation, StellarSetOptionsOperation, StellarSignTransaction, StellarSignedTx, StellarTransaction, TRANSPORT, TRANSPORT_EVENT, TezosDelegationOperation, TezosManagerTransfer, TezosOperation, TezosOriginationOperation, TezosParametersManager, TezosRevealOperation, TezosSignTransaction, TezosTransactionOperation, UI, UI_EVENT, UI_REQUEST, UI_RESPONSE, VerifyMessage, WEBEXTENSION, createBlockchainMessage, createDeviceMessage, createErrorMessage, createIFrameMessage, createPopupMessage, createResponseMessage, createTransportMessage, createUiMessage, createUiResponse, parseConnectSettings, parseMessage

// EXTERNAL MODULE: ../../node_modules/events/events.js
var events = __webpack_require__(928);
var events_default = /*#__PURE__*/__webpack_require__.n(events);
;// CONCATENATED MODULE: ../connect/src/events/ui-request.ts
/*
 * messages to UI emitted as UI_EVENT
 */

const ui_request_UI_EVENT = 'UI_EVENT';
const UI_REQUEST = {
  TRANSPORT: 'ui-no_transport',
  BOOTLOADER: 'ui-device_bootloader_mode',
  NOT_IN_BOOTLOADER: 'ui-device_not_in_bootloader_mode',
  REQUIRE_MODE: 'ui-device_require_mode',
  INITIALIZE: 'ui-device_not_initialized',
  SEEDLESS: 'ui-device_seedless',
  FIRMWARE_OLD: 'ui-device_firmware_old',
  FIRMWARE_OUTDATED: 'ui-device_firmware_outdated',
  FIRMWARE_NOT_SUPPORTED: 'ui-device_firmware_unsupported',
  FIRMWARE_NOT_COMPATIBLE: 'ui-device_firmware_not_compatible',
  FIRMWARE_NOT_INSTALLED: 'ui-device_firmware_not_installed',
  FIRMWARE_PROGRESS: 'ui-firmware-progress',
  DEVICE_NEEDS_BACKUP: 'ui-device_needs_backup',
  REQUEST_UI_WINDOW: 'ui-request_window',
  CLOSE_UI_WINDOW: 'ui-close_window',
  REQUEST_PERMISSION: 'ui-request_permission',
  REQUEST_CONFIRMATION: 'ui-request_confirmation',
  REQUEST_PIN: 'ui-request_pin',
  INVALID_PIN: 'ui-invalid_pin',
  REQUEST_PASSPHRASE: 'ui-request_passphrase',
  REQUEST_PASSPHRASE_ON_DEVICE: 'ui-request_passphrase_on_device',
  INVALID_PASSPHRASE: 'ui-invalid_passphrase',
  CONNECT: 'ui-connect',
  LOADING: 'ui-loading',
  SET_OPERATION: 'ui-set_operation',
  SELECT_DEVICE: 'ui-select_device',
  SELECT_ACCOUNT: 'ui-select_account',
  SELECT_FEE: 'ui-select_fee',
  UPDATE_CUSTOM_FEE: 'ui-update_custom_fee',
  INSUFFICIENT_FUNDS: 'ui-insufficient_funds',
  REQUEST_BUTTON: 'ui-button',
  REQUEST_WORD: 'ui-request_word',
  LOGIN_CHALLENGE_REQUEST: 'ui-login_challenge_request',
  BUNDLE_PROGRESS: 'ui-bundle_progress',
  ADDRESS_VALIDATION: 'ui-address_validation',
  IFRAME_FAILURE: 'ui-iframe_failure'
};

// ButtonRequest_FirmwareUpdate is a artificial button request thrown by "uploadFirmware" method
// at the beginning of the uploading process

// todo: not used at the moment

const createUiMessage = (type, payload) => ({
  event: ui_request_UI_EVENT,
  type,
  payload
});
;// CONCATENATED MODULE: ../connect/src/events/iframe.ts

const IFRAME = {
  // Message called from iframe.html inline script before "window.onload" event. This is first message from iframe to window.opener.
  BOOTSTRAP: 'iframe-bootstrap',
  // Message from iframe.js to window.opener, called after "window.onload" event. This is second message from iframe to window.opener.
  LOADED: 'iframe-loaded',
  // Message from window.opener to iframe.js
  INIT: 'iframe-init',
  // Error message from iframe.js to window.opener. Could be thrown during iframe initialization process
  ERROR: 'iframe-error',
  // Message from window.opener to iframe. Call method
  CALL: 'iframe-call',
  // Message from third party window to iframe to add log to shared worker logger.
  LOG: 'iframe-log'
};
const createIFrameMessage = (type, payload) => ({
  event: UI_EVENT,
  type,
  payload
});
;// CONCATENATED MODULE: ../connect/src/events/popup.ts

const POPUP = {
  // Message called from popup.html inline script before "window.onload" event. This is first message from popup to window.opener.
  BOOTSTRAP: 'popup-bootstrap',
  // Message from popup.js to window.opener, called after "window.onload" event. This is second message from popup to window.opener.
  LOADED: 'popup-loaded',
  // Message from popup run in "core" mode. Connect core has been loaded, popup is ready to handle messages
  // This is similar to IFRAME.LOADED message which signals the same but core is loaded in different context
  CORE_LOADED: 'popup-core-loaded',
  // Message from window.opener to popup.js. Send settings to popup. This is first message from window.opener to popup.
  INIT: 'popup-init',
  // Error message from popup to window.opener. Could be thrown during popup initialization process (POPUP.INIT)
  ERROR: 'popup-error',
  // Message to webextensions, opens "trezor-usb-permission.html" within webextension
  EXTENSION_USB_PERMISSIONS: 'open-usb-permissions',
  // Message called from both [popup > iframe] then [iframe > popup] in this exact order.
  // Firstly popup call iframe to resolve popup promise in Core
  // Then iframe reacts to POPUP.HANDSHAKE message and sends ConnectSettings, transport information and requested method details back to popup
  HANDSHAKE: 'popup-handshake',
  // Event emitted from PopupManager at the end of popup closing process.
  // Sent from popup thru window.opener to an iframe because message channel between popup and iframe is no longer available
  CLOSED: 'popup-closed',
  // Message called from iframe to popup, it means that popup will not be needed (example: Blockchain methods are not using popup at all)
  // This will close active popup window and/or clear opening process in PopupManager (maybe popup wasn't opened yet)
  CANCEL_POPUP_REQUEST: 'ui-cancel-popup-request',
  // Message called from inline element in popup.html (window.closeWindow), this is used only with webextensions to properly handle popup close event
  CLOSE_WINDOW: 'window.close',
  // todo: shouldn't it be UI_RESPONSE?
  ANALYTICS_RESPONSE: 'popup-analytics-response',
  /** webextension injected content script and content script notified popup */
  CONTENT_SCRIPT_LOADED: 'popup-content-script-loaded',
  /** method.info async getter result passed from core to popup */
  METHOD_INFO: 'popup-method-info'
};
const createPopupMessage = (type, payload) => ({
  event: UI_EVENT,
  type,
  payload
});
;// CONCATENATED MODULE: ../connect/src/constants/errors.ts
const ERROR_CODES = {
  Init_NotInitialized: 'TrezorConnect not initialized',
  // race condition: call on not initialized Core (usually hot-reloading)
  Init_AlreadyInitialized: 'TrezorConnect has been already initialized',
  // thrown by .init called multiple times
  Init_IframeBlocked: 'Iframe blocked',
  // iframe injection blocked (ad-blocker)
  Init_IframeTimeout: 'Iframe timeout',
  // iframe didn't load in specified time
  Init_ManifestMissing: 'Manifest not set. Read more at https://github.com/trezor/trezor-suite/blob/develop/docs/packages/connect/index.md',
  // manifest is not set

  Popup_ConnectionMissing: 'Unable to establish connection with iframe',
  // thrown by popup

  Transport_Missing: 'Transport is missing',
  // no transport available
  Transport_InvalidProtobuf: '',
  // generic error from transport layer (trezor-link)

  Method_InvalidPackage: 'This package is not suitable to work with browser. Use @trezor/connect-web package instead',
  // thrown by node and react-native env while using regular 'web' package
  Method_InvalidParameter: '',
  // replaced by generic text
  Method_NotAllowed: 'Method not allowed for this configuration',
  // example: device management in popup mode
  Method_PermissionsNotGranted: 'Permissions not granted',
  // permission/confirmation not granted in popup
  Method_Cancel: 'Cancelled',
  // permission/confirmation not granted in popup OR .cancel() custom error
  Method_Interrupted: 'Popup closed',
  // interruption: popup closed
  Method_UnknownCoin: 'Coin not found',
  // coin definition not found
  Method_AddressNotMatch: 'Addresses do not match',
  // thrown by all getAddress methods with custom UI validation
  Method_FirmwareUpdate_DownloadFailed: 'Failed to download firmware binary',
  // thrown by FirmwareUpdate method
  Method_Discovery_BundleException: '',
  // thrown by getAccountInfo method
  Method_Override: 'override',
  // inner "error", it's more like a interruption
  Method_NoResponse: 'Call resolved without response',
  // thrown by npm index(es), call to Core resolved without response, should not happen

  Backend_NotSupported: 'BlockchainLink settings not found in coins.json',
  // thrown by methods which using backends, blockchainLink not defined for this coin
  Backend_WorkerMissing: '',
  // thrown by BlockchainLink class, worker not specified
  Backend_Disconnected: 'Backend disconnected',
  // thrown by BlockchainLink class
  Backend_Invalid: 'Invalid backend',
  // thrown by BlockchainLink class, invalid backend (ie: backend for wrong coin set)
  Backend_Error: '',
  // thrown by BlockchainLink class, generic message from 'blockchain-link'

  Runtime: '',
  // thrown from several places, this shouldn't ever happen tho

  Device_NotFound: 'Device not found',
  Device_InitializeFailed: '',
  // generic error from firmware while calling "Initialize" message
  Device_FwException: '',
  // generic FirmwareException type
  Device_ModeException: '',
  // generic Device.UnexpectedMode type
  Device_Disconnected: 'Device disconnected',
  // device disconnected during call
  Device_UsedElsewhere: 'Device is used in another window',
  // interruption: current session toked by other application
  Device_InvalidState: 'Passphrase is incorrect',
  // authorization error (device state comparison)
  Device_CallInProgress: 'Device call in progress' // thrown when trying to make another call while current is still running
};
class TrezorError extends Error {
  constructor(code, message) {
    super(message);
    this.code = code;
    this.message = message;
  }
}
const TypedError = (id, message) => new TrezorError(id, message || ERROR_CODES[id]);

// serialize Error/TypeError object into payload error type (Error object/class is converted to string while sent via postMessage)
const serializeError = payload => {
  if (payload && payload.error instanceof Error) {
    return {
      error: payload.error.message,
      code: payload.error.code
    };
  }
  return payload;
};

// trezord error prefix.
// user has insufficient permissions. may occur in Linux (missing udev rules), Windows and MacOS.
const LIBUSB_ERROR_MESSAGE = 'LIBUSB_ERROR';
;// CONCATENATED MODULE: ../connect/src/events/core.ts
const CORE_EVENT = 'CORE_EVENT';
// parse MessageEvent .data into CoreMessage
const parseMessage = messageData => {
  const message = {
    event: messageData.event,
    type: messageData.type,
    payload: messageData.payload
  };
  if (typeof messageData.id === 'number') {
    message.id = messageData.id;
  }
  if (typeof messageData.success === 'boolean') {
    message.success = messageData.success;
  }
  return message;
};

// common response used straight from npm index (not from Core)
const createErrorMessage = error => ({
  success: false,
  payload: {
    error: error.message,
    code: error.code
  }
});
;// CONCATENATED MODULE: ../connect/src/events/ui-response.ts

/*
 * messages from UI sent by popup or using .uiResponse method
 */

const UI_RESPONSE = {
  RECEIVE_PERMISSION: 'ui-receive_permission',
  RECEIVE_CONFIRMATION: 'ui-receive_confirmation',
  RECEIVE_PIN: 'ui-receive_pin',
  RECEIVE_PASSPHRASE: 'ui-receive_passphrase',
  RECEIVE_DEVICE: 'ui-receive_device',
  RECEIVE_ACCOUNT: 'ui-receive_account',
  RECEIVE_FEE: 'ui-receive_fee',
  RECEIVE_WORD: 'ui-receive_word',
  INVALID_PASSPHRASE_ACTION: 'ui-invalid_passphrase_action',
  CHANGE_SETTINGS: 'ui-change_settings',
  LOGIN_CHALLENGE_RESPONSE: 'ui-login_challenge_response'
};
const createUiResponse = (type, payload) => ({
  event: UI_EVENT,
  type,
  payload
});
;// CONCATENATED MODULE: ../connect/src/events/index.ts














// NOTE: for backward compatibility wrap ui const into one
const UI = {
  ...UI_REQUEST,
  ...UI_RESPONSE
};
;// CONCATENATED MODULE: ../connect/src/factory.ts

const factory = ({
  eventEmitter,
  manifest,
  init,
  call,
  requestLogin,
  uiResponse,
  renderWebUSBButton,
  disableWebUSB,
  requestWebUSBDevice,
  cancel,
  dispose
}) => {
  const api = {
    manifest,
    init,
    getSettings: () => call({
      method: 'getSettings'
    }),
    on: (type, fn) => {
      eventEmitter.on(type, fn);
    },
    off: (type, fn) => {
      eventEmitter.removeListener(type, fn);
    },
    removeAllListeners: type => {
      if (typeof type === 'string') {
        eventEmitter.removeAllListeners(type);
      } else {
        eventEmitter.removeAllListeners();
      }
    },
    uiResponse,
    // methods

    blockchainGetAccountBalanceHistory: params => call({
      ...params,
      method: 'blockchainGetAccountBalanceHistory'
    }),
    blockchainGetCurrentFiatRates: params => call({
      ...params,
      method: 'blockchainGetCurrentFiatRates'
    }),
    blockchainGetFiatRatesForTimestamps: params => call({
      ...params,
      method: 'blockchainGetFiatRatesForTimestamps'
    }),
    blockchainDisconnect: params => call({
      ...params,
      method: 'blockchainDisconnect'
    }),
    blockchainEstimateFee: params => call({
      ...params,
      method: 'blockchainEstimateFee'
    }),
    blockchainGetTransactions: params => call({
      ...params,
      method: 'blockchainGetTransactions'
    }),
    blockchainSetCustomBackend: params => call({
      ...params,
      method: 'blockchainSetCustomBackend'
    }),
    blockchainSubscribe: params => call({
      ...params,
      method: 'blockchainSubscribe'
    }),
    blockchainSubscribeFiatRates: params => call({
      ...params,
      method: 'blockchainSubscribeFiatRates'
    }),
    blockchainUnsubscribe: params => call({
      ...params,
      method: 'blockchainUnsubscribe'
    }),
    blockchainUnsubscribeFiatRates: params => call({
      ...params,
      method: 'blockchainUnsubscribeFiatRates'
    }),
    requestLogin: params => requestLogin(params),
    cardanoGetAddress: params => call({
      ...params,
      method: 'cardanoGetAddress',
      useEventListener: eventEmitter.listenerCount(UI.ADDRESS_VALIDATION) > 0
    }),
    cardanoGetNativeScriptHash: params => call({
      ...params,
      method: 'cardanoGetNativeScriptHash'
    }),
    cardanoGetPublicKey: params => call({
      ...params,
      method: 'cardanoGetPublicKey'
    }),
    cardanoSignTransaction: params => call({
      ...params,
      method: 'cardanoSignTransaction'
    }),
    cardanoComposeTransaction: params => call({
      ...params,
      method: 'cardanoComposeTransaction'
    }),
    cipherKeyValue: params => call({
      ...params,
      method: 'cipherKeyValue'
    }),
    composeTransaction: params => call({
      ...params,
      method: 'composeTransaction'
    }),
    ethereumGetAddress: params => call({
      ...params,
      method: 'ethereumGetAddress',
      useEventListener: eventEmitter.listenerCount(UI.ADDRESS_VALIDATION) > 0
    }),
    ethereumGetPublicKey: params => call({
      ...params,
      method: 'ethereumGetPublicKey'
    }),
    ethereumSignMessage: params => call({
      ...params,
      method: 'ethereumSignMessage'
    }),
    ethereumSignTransaction: params => call({
      ...params,
      method: 'ethereumSignTransaction'
    }),
    // @ts-expect-error generic param
    ethereumSignTypedData: params => call({
      ...params,
      method: 'ethereumSignTypedData'
    }),
    ethereumVerifyMessage: params => call({
      ...params,
      method: 'ethereumVerifyMessage'
    }),
    getAccountDescriptor: params => call({
      ...params,
      method: 'getAccountDescriptor'
    }),
    getAccountInfo: params => call({
      ...params,
      method: 'getAccountInfo'
    }),
    getAddress: params => call({
      ...params,
      method: 'getAddress',
      useEventListener: eventEmitter.listenerCount(UI.ADDRESS_VALIDATION) > 0
    }),
    getDeviceState: params => call({
      ...params,
      method: 'getDeviceState'
    }),
    getFeatures: params => call({
      ...params,
      method: 'getFeatures'
    }),
    getFirmwareHash: params => call({
      ...params,
      method: 'getFirmwareHash'
    }),
    getOwnershipId: params => call({
      ...params,
      method: 'getOwnershipId'
    }),
    getOwnershipProof: params => call({
      ...params,
      method: 'getOwnershipProof'
    }),
    getPublicKey: params => call({
      ...params,
      method: 'getPublicKey'
    }),
    nemGetAddress: params => call({
      ...params,
      method: 'nemGetAddress',
      useEventListener: eventEmitter.listenerCount(UI.ADDRESS_VALIDATION) > 0
    }),
    nemSignTransaction: params => call({
      ...params,
      method: 'nemSignTransaction'
    }),
    pushTransaction: params => call({
      ...params,
      method: 'pushTransaction'
    }),
    rippleGetAddress: params => call({
      ...params,
      method: 'rippleGetAddress',
      useEventListener: eventEmitter.listenerCount(UI.ADDRESS_VALIDATION) > 0
    }),
    rippleSignTransaction: params => call({
      ...params,
      method: 'rippleSignTransaction'
    }),
    signMessage: params => call({
      ...params,
      method: 'signMessage'
    }),
    signTransaction: params => call({
      ...params,
      method: 'signTransaction'
    }),
    solanaGetPublicKey: params => call({
      ...params,
      method: 'solanaGetPublicKey'
    }),
    solanaGetAddress: params => call({
      ...params,
      method: 'solanaGetAddress'
    }),
    solanaSignTransaction: params => call({
      ...params,
      method: 'solanaSignTransaction'
    }),
    stellarGetAddress: params => call({
      ...params,
      method: 'stellarGetAddress',
      useEventListener: eventEmitter.listenerCount(UI.ADDRESS_VALIDATION) > 0
    }),
    stellarSignTransaction: params => call({
      ...params,
      method: 'stellarSignTransaction'
    }),
    tezosGetAddress: params => call({
      ...params,
      method: 'tezosGetAddress',
      useEventListener: eventEmitter.listenerCount(UI.ADDRESS_VALIDATION) > 0
    }),
    tezosGetPublicKey: params => call({
      ...params,
      method: 'tezosGetPublicKey'
    }),
    tezosSignTransaction: params => call({
      ...params,
      method: 'tezosSignTransaction'
    }),
    unlockPath: params => call({
      ...params,
      method: 'unlockPath'
    }),
    eosGetPublicKey: params => call({
      ...params,
      method: 'eosGetPublicKey'
    }),
    eosSignTransaction: params => call({
      ...params,
      method: 'eosSignTransaction'
    }),
    binanceGetAddress: params => call({
      ...params,
      method: 'binanceGetAddress',
      useEventListener: eventEmitter.listenerCount(UI.ADDRESS_VALIDATION) > 0
    }),
    binanceGetPublicKey: params => call({
      ...params,
      method: 'binanceGetPublicKey'
    }),
    binanceSignTransaction: params => call({
      ...params,
      method: 'binanceSignTransaction'
    }),
    verifyMessage: params => call({
      ...params,
      method: 'verifyMessage'
    }),
    resetDevice: params => call({
      ...params,
      method: 'resetDevice'
    }),
    wipeDevice: params => call({
      ...params,
      method: 'wipeDevice'
    }),
    checkFirmwareAuthenticity: params => call({
      ...params,
      method: 'checkFirmwareAuthenticity'
    }),
    applyFlags: params => call({
      ...params,
      method: 'applyFlags'
    }),
    applySettings: params => call({
      ...params,
      method: 'applySettings'
    }),
    authenticateDevice: params => call({
      ...params,
      method: 'authenticateDevice'
    }),
    authorizeCoinjoin: params => call({
      ...params,
      method: 'authorizeCoinjoin'
    }),
    cancelCoinjoinAuthorization: params => call({
      ...params,
      method: 'cancelCoinjoinAuthorization'
    }),
    showDeviceTutorial: params => call({
      ...params,
      method: 'showDeviceTutorial'
    }),
    backupDevice: params => call({
      ...params,
      method: 'backupDevice'
    }),
    changeLanguage: params => call({
      ...params,
      method: 'changeLanguage'
    }),
    changePin: params => call({
      ...params,
      method: 'changePin'
    }),
    changeWipeCode: params => call({
      ...params,
      method: 'changeWipeCode'
    }),
    firmwareUpdate: params => call({
      ...params,
      method: 'firmwareUpdate'
    }),
    recoveryDevice: params => call({
      ...params,
      method: 'recoveryDevice'
    }),
    getCoinInfo: params => call({
      ...params,
      method: 'getCoinInfo'
    }),
    rebootToBootloader: params => call({
      ...params,
      method: 'rebootToBootloader'
    }),
    setBusy: params => call({
      ...params,
      method: 'setBusy'
    }),
    setProxy: params => call({
      ...params,
      method: 'setProxy'
    }),
    dispose,
    cancel,
    renderWebUSBButton,
    disableWebUSB,
    requestWebUSBDevice
  };
  return api;
};
;// CONCATENATED MODULE: ../utils/src/logs.ts
class Log {
  css = '';
  MAX_ENTRIES = 100;
  constructor(prefix, enabled, logWriter) {
    this.prefix = prefix;
    this.enabled = enabled;
    this.messages = [];
    if (logWriter) {
      this.logWriter = logWriter;
    }
  }
  setColors(colors) {
    this.css = typeof window !== 'undefined' && colors[this.prefix] ? colors[this.prefix] : '';
  }
  addMessage({
    level,
    prefix,
    timestamp
  }, ...args) {
    const message = {
      level,
      prefix,
      css: this.css,
      message: args,
      timestamp: timestamp || Date.now()
    };
    this.messages.push(message);
    if (this.logWriter) {
      try {
        this.logWriter.add(message);
      } catch (err) {
        // If this error happens it probably means that we are logging an object with a circular reference.
        // If there is any `device` logged, do it with `device.toMessageObject()` instead.
        console.error('There was an error adding log message', err, message);
      }
    }
    if (this.messages.length > this.MAX_ENTRIES) {
      this.messages.shift();
    }
  }
  setWriter(logWriter) {
    this.logWriter = logWriter;
  }
  log(...args) {
    this.addMessage({
      level: 'log',
      prefix: this.prefix
    }, ...args);
    if (this.enabled) {
      console.log(`%c${this.prefix}`, this.css, ...args);
    }
  }
  error(...args) {
    this.addMessage({
      level: 'error',
      prefix: this.prefix
    }, ...args);
    if (this.enabled) {
      console.error(`%c${this.prefix}`, this.css, ...args);
    }
  }
  info(...args) {
    this.addMessage({
      level: 'info',
      prefix: this.prefix
    }, ...args);
    if (this.enabled) {
      console.info(`%c${this.prefix}`, this.css, ...args);
    }
  }
  warn(...args) {
    this.addMessage({
      level: 'warn',
      prefix: this.prefix
    }, ...args);
    if (this.enabled) {
      console.warn(`%c${this.prefix}`, this.css, ...args);
    }
  }
  debug(...args) {
    this.addMessage({
      level: 'debug',
      prefix: this.prefix
    }, ...args);
    if (this.enabled) {
      if (this.css) {
        console.log(`%c${this.prefix}`, this.css, ...args);
      } else {
        console.log(this.prefix, ...args);
      }
    }
  }
  getLog() {
    return this.messages;
  }
}
;// CONCATENATED MODULE: ../utils/src/logsManager.ts

class LogsManager {
  logs = {};
  colors = {};
  constructor({
    colors
  }) {
    this.colors = colors;
  }
  initLog(prefix, enabled, logWriter) {
    const instanceWriter = logWriter || this.writer;
    const instance = new Log(prefix, !!enabled, instanceWriter);
    if (this.colors) {
      instance.setColors(this.colors);
    }
    this.logs[prefix] = instance;
    return instance;
  }
  setLogWriter(logWriterFactory) {
    Object.keys(this.logs).forEach(key => {
      this.writer = logWriterFactory();
      if (this.writer) {
        this.logs[key].setWriter(this.writer);
        const {
          messages
        } = this.logs[key];
        // If there are any messages in the log when init, add them to the writer.
        messages.forEach(message => {
          this.writer?.add(message);
        });
      }
    });
  }
  enableLog(enabled) {
    Object.keys(this.logs).forEach(key => {
      this.logs[key].enabled = !!enabled;
    });
  }
  enableLogByPrefix(prefix, enabled) {
    if (this.logs[prefix]) {
      this.logs[prefix].enabled = enabled;
    }
  }
  getLog() {
    let logs = [];
    Object.keys(this.logs).forEach(key => {
      logs = logs.concat(this.logs[key].messages);
    });
    logs.sort((a, b) => a.timestamp - b.timestamp);
    return logs;
  }
}
;// CONCATENATED MODULE: ../connect/src/utils/debug.ts

const green = '#bada55';
const blue = '#20abd8';
const orange = '#f4a744';
const yellow = '#fbd948';
const colors = {
  // blue, npm package related
  '@trezor/connect': `color: ${blue}; background: #000;`,
  '@trezor/connect-web': `color: ${blue}; background: #000;`,
  '@trezor/connect-webextension': `color: ${blue}; background: #000;`,
  // orange, api related
  IFrame: `color: ${orange}; background: #000;`,
  Core: `color: ${orange}; background: #000;`,
  // green, device related
  DeviceList: `color: ${green}; background: #000;`,
  Device: `color: ${green}; background: #000;`,
  DeviceCommands: `color: ${green}; background: #000;`,
  '@trezor/transport': `color: ${green}; background: #000;`,
  InteractionTimeout: `color: ${green}; background: #000;`,
  // yellow, ui related
  '@trezor/connect-popup': `color: ${yellow}; background: #000;`
};
const logsManager = new LogsManager({
  colors
});
const initLog = logsManager.initLog.bind(logsManager);
const setLogWriter = logsManager.setLogWriter.bind(logsManager);
const enableLog = logsManager.enableLog.bind(logsManager);
const enableLogByPrefix = logsManager.enableLogByPrefix.bind(logsManager);
const getLog = logsManager.getLog.bind(logsManager);
;// CONCATENATED MODULE: ../utils/src/typedEventEmitter.ts
/*
Usage example:
type EventMap = {
    obj: { id: string };
    primitive: boolean | number | string | symbol;
    noArgs: undefined;
    multipleArgs: (a: number, b: string, c: boolean) => void;
    [type: `dynamic/${string}`]: boolean;
};
*/


// NOTE: case 1. looks like case 4. but works differently. the order matters

// 4. default

// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
class TypedEmitter extends events.EventEmitter {
  // implement at least one function
  listenerCount(eventName) {
    return super.listenerCount(eventName);
  }
}
;// CONCATENATED MODULE: ../connect-common/src/storage.ts
// https://github.com/trezor/connect/blob/develop/src/js/storage/index.js


const storageVersion = 2;
const storageName = `storage_v${storageVersion}`;

/**
 * remembered:
 *  - physical device from webusb pairing dialogue
 *  - passphrase to be used
 */

// TODO: move storage somewhere else. Having it here brings couple of problems:
// - We can not import types from connect (would cause cyclic dependency)
// - it has here dependency on window object, not good

const getEmptyState = () => ({
  origin: {}
});
let memoryStorage = getEmptyState();
const getPermanentStorage = () => {
  const ls = localStorage.getItem(storageName);
  return ls ? JSON.parse(ls) : getEmptyState();
};
class Storage extends TypedEmitter {
  save(getNewState, temporary = false) {
    if (temporary || !__webpack_require__.g.window) {
      memoryStorage = getNewState(memoryStorage);
      return;
    }
    try {
      const newState = getNewState(getPermanentStorage());
      localStorage.setItem(storageName, JSON.stringify(newState));
      this.emit('changed', newState);
    } catch (err) {
      // memory storage is fallback of the last resort
      console.warn('long term storage not available');
      memoryStorage = getNewState(memoryStorage);
    }
  }
  saveForOrigin(getNewState, origin, temporary = false) {
    this.save(state => ({
      ...state,
      origin: {
        ...state.origin,
        [origin]: getNewState(state.origin?.[origin] || {})
      }
    }), temporary);
  }
  load(temporary = false) {
    if (temporary || !__webpack_require__.g?.window?.localStorage) {
      return memoryStorage;
    }
    try {
      return getPermanentStorage();
    } catch (err) {
      // memory storage is fallback of the last resort
      console.warn('long term storage not available');
      return memoryStorage;
    }
  }
  loadForOrigin(origin, temporary = false) {
    const state = this.load(temporary);
    return state.origin?.[origin] || {};
  }
}
const storage = new Storage();

;// CONCATENATED MODULE: ../utils/src/createDeferred.ts
// unwrap promise response from Deferred

const createDeferred = id => {
  let localResolve = () => {};
  let localReject = () => {};
  const promise = new Promise((resolve, reject) => {
    localResolve = resolve;
    localReject = reject;
  });
  return {
    id,
    resolve: localResolve,
    reject: localReject,
    promise
  };
};
;// CONCATENATED MODULE: ../utils/src/scheduleAction.ts
// Ignored when attempts is AttemptParams[]

const isArray = attempts => Array.isArray(attempts);
const abortedBySignal = () => new Error('Aborted by signal');
const abortedByDeadline = () => new Error('Aborted by deadline');
const abortedByTimeout = () => new Error('Aborted by timeout');
const resolveAfterMs = (ms, clear) => new Promise((resolve, reject) => {
  if (clear.aborted) return reject();
  if (ms === undefined) return resolve();
  const timeout = setTimeout(resolve, ms);
  const onClear = () => {
    clearTimeout(timeout);
    clear.removeEventListener('abort', onClear);
    reject();
  };
  clear.addEventListener('abort', onClear);
});
const rejectAfterMs = (ms, reason, clear) => new Promise((_, reject) => {
  if (clear.aborted) return reject();
  const timeout = ms !== undefined ? setTimeout(() => reject(reason()), ms) : undefined;
  const onClear = () => {
    clearTimeout(timeout);
    clear.removeEventListener('abort', onClear);
    reject();
  };
  clear.addEventListener('abort', onClear);
});
const rejectWhenAborted = (signal, clear) => new Promise((_, reject) => {
  if (clear.aborted) return reject();
  if (signal?.aborted) return reject(abortedBySignal());
  const onAbort = () => reject(abortedBySignal());
  signal?.addEventListener('abort', onAbort);
  const onClear = () => {
    signal?.removeEventListener('abort', onAbort);
    clear.removeEventListener('abort', onClear);
    reject();
  };
  clear.addEventListener('abort', onClear);
});
const resolveAction = async (action, clear) => {
  const aborter = new AbortController();
  const onClear = () => aborter.abort();
  if (clear.aborted) onClear();
  clear.addEventListener('abort', onClear);
  try {
    return await new Promise(resolve => resolve(action(aborter.signal)));
  } finally {
    clear.removeEventListener('abort', onClear);
  }
};
const attemptLoop = async (attempts, attempt, failure, clear) => {
  // Tries only (attempts - 1) times, because the last attempt throws its error
  for (let a = 0; a < attempts - 1; a++) {
    if (clear.aborted) break;
    const aborter = new AbortController();
    const onClear = () => aborter.abort();
    clear.addEventListener('abort', onClear);
    try {
      return await attempt(a, aborter.signal);
    } catch {
      onClear();
      await failure(a);
    } finally {
      clear.removeEventListener('abort', onClear);
    }
  }
  return clear.aborted ? Promise.reject() : attempt(attempts - 1, clear);
};
const scheduleAction = async (action, params) => {
  const {
    signal,
    delay,
    attempts,
    timeout,
    deadline,
    gap
  } = params;
  const deadlineMs = deadline && deadline - Date.now();
  const attemptCount = isArray(attempts) ? attempts.length : attempts ?? (deadline ? Infinity : 1);
  const clearAborter = new AbortController();
  const clear = clearAborter.signal;
  const getParams = isArray(attempts) ? attempt => attempts[attempt] : () => ({
    timeout,
    gap
  });
  try {
    return await Promise.race([rejectWhenAborted(signal, clear), rejectAfterMs(deadlineMs, abortedByDeadline, clear), resolveAfterMs(delay, clear).then(() => attemptLoop(attemptCount, (attempt, abort) => Promise.race([rejectAfterMs(getParams(attempt).timeout, abortedByTimeout, clear), resolveAction(action, abort)]), attempt => resolveAfterMs(getParams(attempt).gap ?? 0, clear), clear))]);
  } finally {
    clearAborter.abort();
  }
};
;// CONCATENATED MODULE: ../connect-common/src/messageChannel/abstract.ts
/**
 * IMPORTS WARNING
 * this file is bundled into content script so be careful what you are importing not to bloat the bundle
 */





// TODO: so logger should be probably moved to connect common, or this file should be moved to connect
// import type { Log } from '@trezor/connect/src/utils/debug';

/**
 * concepts:
 * - it handshakes automatically with the other side of the channel
 * - it queues messages fired before handshake and sends them after handshake is done
 */
class AbstractMessageChannel extends TypedEmitter {
  messagePromises = {};
  /** queue of messages that were scheduled before handshake */
  messagesQueue = [];
  messageID = 0;
  isConnected = false;
  handshakeMaxRetries = 5;
  handshakeRetryInterval = 2000;

  /**
   * function that passes data to the other side of the channel
   */

  /**
   * channel identifiers that pairs AbstractMessageChannel instances on sending and receiving end together
   */

  constructor({
    sendFn,
    channel,
    logger,
    lazyHandshake = false,
    legacyMode = false
  }) {
    super();
    this.channel = channel;
    this.sendFn = sendFn;
    this.lazyHandshake = lazyHandshake;
    this.legacyMode = legacyMode;
    this.logger = logger;
  }

  /**
   * initiates handshake sequence with peer. resolves after communication with peer is established
   */
  init() {
    if (!this.handshakeFinished) {
      this.handshakeFinished = createDeferred();
      if (this.legacyMode) {
        // Bypass handshake for communication with legacy components
        // We add a delay for enough time for the other side to be ready
        setTimeout(() => {
          this.handshakeFinished?.resolve();
        }, 500);
      }
      if (!this.lazyHandshake) {
        // When `lazyHandshake` handshakeWithPeer will start when received channel-handshake-request.
        this.handshakeWithPeer();
      }
    }
    return this.handshakeFinished.promise;
  }

  /**
   * handshake between both parties of the channel.
   * both parties initiate handshake procedure and keep asking over time in a loop until they time out or receive confirmation from peer
   */
  handshakeWithPeer() {
    this.logger?.log(this.channel.here, 'handshake');
    return scheduleAction(async () => {
      this.postMessage({
        type: 'channel-handshake-request',
        data: {
          success: true,
          payload: undefined
        }
      }, {
        usePromise: false,
        useQueue: false
      });
      await this.handshakeFinished?.promise;
    }, {
      attempts: this.handshakeMaxRetries,
      timeout: this.handshakeRetryInterval
    }).then(() => {
      this.logger?.log(this.channel.here, 'handshake confirmed');
      this.messagesQueue.forEach(message => {
        message.channel = this.channel;
        this.sendFn(message);
      });
      this.messagesQueue = [];
    }).catch(() => {
      this.handshakeFinished?.reject(new Error('handshake failed'));
      this.handshakeFinished = undefined;
    });
  }

  /**
   * message received from communication channel in descendants of this class
   * should be handled by this common onMessage method
   */
  onMessage(_message) {
    // Older code used to send message as a data property of the message object.
    // This is a workaround to keep backward compatibility.
    let message = _message;
    if (this.legacyMode && message.type === undefined && 'data' in message && typeof message.data === 'object' && message.data !== null && 'type' in message.data && typeof message.data.type === 'string') {
      // @ts-expect-error
      message = message.data;
    }
    const {
      channel,
      id,
      type,
      payload,
      success
    } = message;

    // Don't verify channel in legacy mode
    if (!this.legacyMode) {
      if (!channel?.peer || channel.peer !== this.channel.here) {
        // To wrong peer
        return;
      }
      if (!channel?.here || this.channel.peer !== channel.here) {
        // From wrong peer
        return;
      }
    }
    if (type === 'channel-handshake-request') {
      this.postMessage({
        type: 'channel-handshake-confirm',
        data: {
          success: true,
          payload: undefined
        }
      }, {
        usePromise: false,
        useQueue: false
      });
      if (this.lazyHandshake) {
        // When received channel-handshake-request in lazyHandshake mode we start from this side.
        this.handshakeWithPeer();
      }
      return;
    }
    if (type === 'channel-handshake-confirm') {
      this.handshakeFinished?.resolve(undefined);
      return;
    }
    if (this.messagePromises[id]) {
      this.messagePromises[id].resolve({
        id,
        payload,
        success
      });
      delete this.messagePromises[id];
    }
    const messagePromisesLength = Object.keys(this.messagePromises).length;
    if (messagePromisesLength > 5) {
      this.logger?.warn(`too many message promises (${messagePromisesLength}). this feels unexpected!`);
    }

    // @ts-expect-error TS complains for odd reasons
    this.emit('message', message);
  }

  // todo: outgoing messages should be typed
  postMessage(message, {
    usePromise = true,
    useQueue = true
  } = {}) {
    message.channel = this.channel;
    if (!usePromise) {
      try {
        this.sendFn(message);
      } catch (err) {
        if (useQueue) {
          this.messagesQueue.push(message);
        }
      }
      return;
    }
    this.messageID++;
    message.id = this.messageID;
    this.messagePromises[message.id] = createDeferred();
    try {
      this.sendFn(message);
    } catch (err) {
      if (useQueue) {
        this.messagesQueue.push(message);
      }
    }
    return this.messagePromises[message.id].promise;
  }
  resolveMessagePromises(resolvePayload) {
    // This is used when we know that the connection has been interrupted but there might be something waiting for it.
    Object.keys(this.messagePromises).forEach(id => this.messagePromises[id].resolve({
      id,
      payload: resolvePayload
    }));
  }
  clear() {
    this.handshakeFinished = undefined;
  }
}
;// CONCATENATED MODULE: ../connect-common/src/index.ts



;// CONCATENATED MODULE: ../connect-web/src/channels/serviceworker-window.ts


/**
 * Communication channel between:
 * - here: chrome message port (in service worker)
 * - peer: window.onMessage in trezor-content-script
 */
class ServiceWorkerWindowChannel extends AbstractMessageChannel {
  constructor({
    name,
    channel,
    logger,
    lazyHandshake,
    legacyMode,
    allowSelfOrigin = false,
    currentId
  }) {
    super({
      channel,
      sendFn: message => {
        if (!this.port) throw new Error('port not assigned');
        this.port.postMessage(message);
      },
      logger,
      lazyHandshake,
      legacyMode
    });
    this.name = name;
    this.allowSelfOrigin = allowSelfOrigin;
    this.currentId = currentId;
    this.connect();
  }
  connect() {
    chrome.runtime.onConnect.addListener(port => {
      if (port.name !== this.name) return;
      // Ignore port if name does match, but port created by different popup
      if (this.currentId?.() && this.currentId?.() !== port.sender?.tab?.id) return;
      this.port = port;
      this.port.onMessage.addListener((message, {
        sender
      }) => {
        if (!sender) {
          this.logger?.error('service-worker-window', 'no sender');
          return;
        }
        const {
          origin
        } = sender;
        const whitelist = ['https://connect.trezor.io', 'https://staging-connect.trezor.io', 'https://suite.corp.sldev.cz', 'https://dev.suite.sldev.cz', 'http://localhost:8088'];

        // If service worker is running in web extension and other env of this webextension
        // want to communicate with service worker it should be whitelisted.
        const webextensionId = chrome?.runtime?.id;
        if (webextensionId) {
          whitelist.push(`chrome-extension://${webextensionId}`);
        }
        if (!origin) {
          this.logger?.error('connect-webextension/messageChannel/extensionPort/onMessage', 'no origin');
          return;
        }
        if (!whitelist.includes(origin)) {
          this.logger?.error('connect-webextension/messageChannel/extensionPort/onMessage', 'origin not whitelisted', origin);
          return;
        }

        // TODO: not completely sure that is necessary to prevent self origin communication sometimes.
        if (origin === self.origin && !this.allowSelfOrigin) {
          return;
        }
        this.onMessage(message);
      });
    });
    this.isConnected = true;
  }
  disconnect() {
    if (!this.isConnected) return;
    this.port?.disconnect();
    this.clear();
    this.isConnected = false;
  }
}
;// CONCATENATED MODULE: ../connect/src/utils/urlUtils.ts
// origin: https://github.com/trezor/connect/blob/develop/src/js/utils/urlUtils.js


const getOrigin = url => {
  if (typeof url !== 'string') return 'unknown';
  if (url.indexOf('file://') === 0) return 'file://';
  const [origin] = url.match(/^https?:\/\/[^/]+/) ?? [];
  return origin ?? 'unknown';
};
const getHost = url => {
  if (typeof url !== 'string') return;
  const [,, uri] = url.match(/^(https?):\/\/([^:/]+)?/i) ?? [];
  if (uri) {
    const parts = uri.split('.');
    return parts.length > 2 ?
    // slice subdomain
    parts.slice(parts.length - 2, parts.length).join('.') : uri;
  }
};
const getOnionDomain = (url, dict) => {
  if (Array.isArray(url)) return url.map(u => urlToOnion(u, dict) ?? u);
  if (typeof url === 'string') return urlToOnion(url, dict) ?? url;
  return url;
};
;// CONCATENATED MODULE: ../connect-web/src/popup/showPopupRequest.ts
// origin: https://github.com/trezor/connect/blob/develop/src/js/popup/showPopupRequest.js

const LAYER_ID = 'TrezorConnectInteractionLayer';
const HTML = `
    <div class="trezorconnect-container" id="${LAYER_ID}">
        <div class="trezorconnect-window">
            <div class="trezorconnect-head">
                <svg class="trezorconnect-logo" x="0px" y="0px" viewBox="0 0 163.7 41.9" width="78px" height="20px" preserveAspectRatio="xMinYMin meet">
                    <polygon points="101.1,12.8 118.2,12.8 118.2,17.3 108.9,29.9 118.2,29.9 118.2,35.2 101.1,35.2 101.1,30.7 110.4,18.1 101.1,18.1"/>
                    <path d="M158.8,26.9c2.1-0.8,4.3-2.9,4.3-6.6c0-4.5-3.1-7.4-7.7-7.4h-10.5v22.3h5.8v-7.5h2.2l4.1,7.5h6.7L158.8,26.9z M154.7,22.5 h-4V18h4c1.5,0,2.5,0.9,2.5,2.2C157.2,21.6,156.2,22.5,154.7,22.5z"/>
                    <path d="M130.8,12.5c-6.8,0-11.6,4.9-11.6,11.5s4.9,11.5,11.6,11.5s11.7-4.9,11.7-11.5S137.6,12.5,130.8,12.5z M130.8,30.3 c-3.4,0-5.7-2.6-5.7-6.3c0-3.8,2.3-6.3,5.7-6.3c3.4,0,5.8,2.6,5.8,6.3C136.6,27.7,134.2,30.3,130.8,30.3z"/>
                    <polygon points="82.1,12.8 98.3,12.8 98.3,18 87.9,18 87.9,21.3 98,21.3 98,26.4 87.9,26.4 87.9,30 98.3,30 98.3,35.2 82.1,35.2 "/>
                    <path d="M24.6,9.7C24.6,4.4,20,0,14.4,0S4.2,4.4,4.2,9.7v3.1H0v22.3h0l14.4,6.7l14.4-6.7h0V12.9h-4.2V9.7z M9.4,9.7 c0-2.5,2.2-4.5,5-4.5s5,2,5,4.5v3.1H9.4V9.7z M23,31.5l-8.6,4l-8.6-4V18.1H23V31.5z"/>
                    <path d="M79.4,20.3c0-4.5-3.1-7.4-7.7-7.4H61.2v22.3H67v-7.5h2.2l4.1,7.5H80l-4.9-8.3C77.2,26.1,79.4,24,79.4,20.3z M71,22.5h-4V18 h4c1.5,0,2.5,0.9,2.5,2.2C73.5,21.6,72.5,22.5,71,22.5z"/>
                    <polygon points="40.5,12.8 58.6,12.8 58.6,18.1 52.4,18.1 52.4,35.2 46.6,35.2 46.6,18.1 40.5,18.1 "/>
                </svg>
                <div class="trezorconnect-close">
                    <svg x="0px" y="0px" viewBox="24 24 60 60" width="24px" height="24px" preserveAspectRatio="xMinYMin meet">
                        <polygon class="st0" points="40,67.9 42.1,70 55,57.1 67.9,70 70,67.9 57.1,55 70,42.1 67.9,40 55,52.9 42.1,40 40,42.1 52.9,55 "/>
                    </svg>
                </div>
            </div>
            <div class="trezorconnect-body">
                <h3>Popup was blocked</h3>
                <p>Please click to "Continue" to open popup manually</p>
                <button class="trezorconnect-open">Continue</button>
            </div>
        </div>
    </div>
`;
const showPopupRequest = (open, cancel) => {
  if (document.getElementById(LAYER_ID)) {
    return;
  }
  const div = document.createElement('div');
  div.id = LAYER_ID;
  div.className = 'trezorconnect-container';
  div.innerHTML = HTML;
  if (document.body) {
    document.body.appendChild(div);
  }
  const button = div.getElementsByClassName('trezorconnect-open')[0];
  button.onclick = () => {
    open();
    if (document.body) {
      document.body.removeChild(div);
    }
  };
  const close = div.getElementsByClassName('trezorconnect-close')[0];
  close.onclick = () => {
    cancel();
    if (document.body) {
      document.body.removeChild(div);
    }
  };
};
;// CONCATENATED MODULE: ../connect-web/src/channels/window-window.ts


/**
 * Communication channel between:
 * - here: window.postMessage
 * - peer: window.onMessage
 */

class WindowWindowChannel extends AbstractMessageChannel {
  constructor({
    windowHere,
    windowPeer,
    channel,
    logger,
    origin
  }) {
    super({
      channel,
      sendFn: message => {
        windowPeer()?.postMessage(message, origin);
      },
      logger
    });
    this._listener = this.listener.bind(this);
    this._windowHere = windowHere;
    this.connect();
  }
  listener(event) {
    const message = {
      ...event.data,
      success: true,
      origin: event.origin,
      payload: event.data.payload || {},
      // This is added for compatibility when communicating with iframe/popup that doesn't have channel defined yet
      channel: event.data.channel || {
        peer: this.channel.here,
        here: this.channel.peer
      }
    };
    this.onMessage(message);
  }
  connect() {
    this._windowHere.addEventListener('message', this._listener);
    this.isConnected = true;
  }
  disconnect() {
    if (!this.isConnected) return;
    this._windowHere.removeEventListener('message', this._listener);
    this.isConnected = false;
  }
}
;// CONCATENATED MODULE: ../connect-web/src/popup/index.ts
// origin: https://github.com/trezor/connect/blob/develop/src/js/popup/PopupManager.js









// Util
const checkIfTabExists = tabId => new Promise(resolve => {
  if (!tabId) return resolve(false);
  function callback() {
    if (chrome.runtime.lastError) {
      resolve(false);
    } else {
      // Tab exists
      resolve(true);
    }
  }
  chrome.tabs.get(tabId, callback);
});

// Event `POPUP_REQUEST_TIMEOUT` is used to close Popup window when there was no handshake from iframe.
const POPUP_REQUEST_TIMEOUT = 850;
const POPUP_CLOSE_INTERVAL = 500;
const POPUP_OPEN_TIMEOUT = 3000;
class PopupManager extends (events_default()) {
  locked = false;
  extensionTabId = 0;
  constructor(settings, {
    logger
  }) {
    super();
    this.settings = settings;
    this.origin = getOrigin(settings.popupSrc);
    this.logger = logger;
    if (this.settings.env === 'webextension') {
      this.channel = new ServiceWorkerWindowChannel({
        name: 'trezor-connect',
        channel: {
          here: '@trezor/connect-webextension',
          peer: '@trezor/connect-content-script'
        },
        logger,
        currentId: () => {
          if (this.popupWindow?.mode === 'tab') return this.popupWindow?.tab.id;
        },
        legacyMode: !this.settings.useCoreInPopup
      });
    } else {
      this.channel = new WindowWindowChannel({
        windowHere: window,
        windowPeer: () => {
          if (this.popupWindow?.mode === 'window') return this.popupWindow?.window;
        },
        channel: {
          here: '@trezor/connect-web',
          peer: '@trezor/connect-popup'
        },
        logger,
        origin: this.origin
      });
    }
    if (!this.settings.useCoreInPopup) {
      // If not in core, we need to create a channel for the iframe
      this.iframeHandshakePromise = createDeferred(IFRAME.LOADED);
      this.channelIframe = new WindowWindowChannel({
        windowHere: window,
        windowPeer: () => window,
        channel: {
          here: '@trezor/connect-web',
          peer: '@trezor/connect-iframe'
        },
        logger,
        origin: this.origin
      });
      this.channelIframe?.on('message', this.handleMessage.bind(this));
    }
    if (this.settings.useCoreInPopup) {
      // Core mode
      this.handshakePromise = createDeferred();
      this.channel.on('message', this.handleCoreMessage.bind(this));
    } else if (this.settings.env === 'webextension') {
      // Webextension iframe
      this.channel.on('message', this.handleExtensionMessage.bind(this));
    } else {
      // Web
      this.channel.on('message', this.handleMessage.bind(this));
    }
    this.channel.init();
  }
  async request() {
    // popup request

    // check if current popup window is still open
    if (this.settings.useCoreInPopup && this.popupWindow?.mode === 'tab') {
      const currentPopupExists = await checkIfTabExists(this.popupWindow?.tab?.id);
      if (!currentPopupExists) {
        this.clear();
      }
    }

    // bring popup window to front
    if (this.locked) {
      if (this.popupWindow?.mode === 'tab' && this.popupWindow.tab.id) {
        chrome.tabs.update(this.popupWindow.tab.id, {
          active: true
        });
      } else if (this.popupWindow?.mode === 'window') {
        this.popupWindow.window.focus();
      }
      return;
    }

    // When requesting a popup window and there is a reference to popup window and it is not locked
    // we close it so we can open a new one.
    // This is necessary when popup window is in error state and we want to open a new one.
    if (this.popupWindow && !this.locked) {
      this.close();
    }
    const openFn = this.open.bind(this);
    this.locked = true;
    const timeout = this.settings.env === 'webextension' ? 1 : POPUP_REQUEST_TIMEOUT;
    this.requestTimeout = setTimeout(() => {
      this.requestTimeout = undefined;
      openFn();
    }, timeout);
  }
  unlock() {
    this.locked = false;
  }
  open() {
    const src = this.settings.popupSrc;
    if (this.settings.useCoreInPopup) {
      // Timeout not used in Core mode, we can't run showPopupRequest with no DOM
      this.openWrapper(src);
      return;
    }
    this.popupPromise = createDeferred(POPUP.LOADED);
    this.openWrapper(src);
    this.closeInterval = setInterval(() => {
      if (!this.popupWindow) return;
      if (this.popupWindow.mode === 'tab' && this.popupWindow.tab.id) {
        chrome.tabs.get(this.popupWindow.tab.id, tab => {
          if (!tab) {
            // If no reference to popup window, it was closed by user or by this.close() method.
            this.emit(POPUP.CLOSED);
            this.clear();
          }
        });
      } else if (this.popupWindow.mode === 'window' && this.popupWindow.window.closed) {
        this.clear();
        this.emit(POPUP.CLOSED);
      }
    }, POPUP_CLOSE_INTERVAL);

    // open timeout will be cancelled by POPUP.BOOTSTRAP message
    this.openTimeout = setTimeout(() => {
      this.clear();
      showPopupRequest(this.open.bind(this), () => {
        this.emit(POPUP.CLOSED);
      });
    }, POPUP_OPEN_TIMEOUT);
  }
  openWrapper(url) {
    if (this.settings.env === 'webextension') {
      chrome.windows.getCurrent(currentWindow => {
        this.logger.debug('opening popup. currentWindow: ', currentWindow);
        // Request coming from extension popup,
        // create new window above instead of opening new tab
        if (currentWindow.type !== 'normal') {
          chrome.windows.create({
            url
          }, newWindow => {
            chrome.tabs.query({
              windowId: newWindow?.id,
              active: true
            }, tabs => {
              this.popupWindow = {
                mode: 'tab',
                tab: tabs[0]
              };
              this.injectContentScript(tabs[0].id);
            });
          });
        } else {
          chrome.tabs.query({
            currentWindow: true,
            active: true
          }, tabs => {
            this.extensionTabId = tabs[0].id;
            chrome.tabs.create({
              url,
              index: tabs[0].index + 1
            }, tab => {
              this.popupWindow = {
                mode: 'tab',
                tab
              };
              this.injectContentScript(tab.id);
            });
          });
        }
      });
    } else {
      const windowResult = window.open(url, 'modal');
      if (!windowResult) return;
      this.popupWindow = {
        mode: 'window',
        window: windowResult
      };
    }
    if (!this.channel.isConnected) {
      this.channel.connect();
    }
  }
  injectContentScript = tabId => {
    chrome.permissions.getAll(permissions => {
      if (permissions.permissions?.includes('scripting')) {
        chrome.scripting.executeScript({
          target: {
            tabId
          },
          // content script is injected into body of func in build time.
          func: () => {
            /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 928:
/***/ ((module) => {

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var R = typeof Reflect === 'object' ? Reflect : null
var ReflectApply = R && typeof R.apply === 'function'
  ? R.apply
  : function ReflectApply(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
  }

var ReflectOwnKeys
if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target)
      .concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}

function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}

var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
}

function EventEmitter() {
  EventEmitter.init.call(this);
}
module.exports = EventEmitter;
module.exports.once = once;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;

function checkListener(listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
}

Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function() {
    return defaultMaxListeners;
  },
  set: function(arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }
    defaultMaxListeners = arg;
  }
});

EventEmitter.init = function() {

  if (this._events === undefined ||
      this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
};

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }
  this._maxListeners = n;
  return this;
};

function _getMaxListeners(that) {
  if (that._maxListeners === undefined)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return _getMaxListeners(this);
};

EventEmitter.prototype.emit = function emit(type) {
  var args = [];
  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
  var doError = (type === 'error');

  var events = this._events;
  if (events !== undefined)
    doError = (doError && events.error === undefined);
  else if (!doError)
    return false;

  // If there is no 'error' event listener then throw.
  if (doError) {
    var er;
    if (args.length > 0)
      er = args[0];
    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    }
    // At least give some kind of context to the user
    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];

  if (handler === undefined)
    return false;

  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      ReflectApply(listeners[i], this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  checkListener(listener);

  events = target._events;
  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type,
                  listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }

  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] =
        prepend ? [listener, existing] : [existing, listener];
      // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    }

    // Check for listener leak
    m = _getMaxListeners(target);
    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true;
      // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax
      var w = new Error('Possible EventEmitter memory leak detected. ' +
                          existing.length + ' ' + String(type) + ' listeners ' +
                          'added. Use emitter.setMaxListeners() to ' +
                          'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener =
    function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };

function onceWrapper() {
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    if (arguments.length === 0)
      return this.listener.call(this.target);
    return this.listener.apply(this.target, arguments);
  }
}

function _onceWrap(target, type, listener) {
  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  checkListener(listener);
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener =
    function prependOnceListener(type, listener) {
      checkListener(listener);
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };

// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener =
    function removeListener(type, listener) {
      var list, events, position, i, originalListener;

      checkListener(listener);

      events = this._events;
      if (events === undefined)
        return this;

      list = events[type];
      if (list === undefined)
        return this;

      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0)
          this._events = Object.create(null);
        else {
          delete events[type];
          if (events.removeListener)
            this.emit('removeListener', type, list.listener || listener);
        }
      } else if (typeof list !== 'function') {
        position = -1;

        for (i = list.length - 1; i >= 0; i--) {
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }

        if (position < 0)
          return this;

        if (position === 0)
          list.shift();
        else {
          spliceOne(list, position);
        }

        if (list.length === 1)
          events[type] = list[0];

        if (events.removeListener !== undefined)
          this.emit('removeListener', type, originalListener || listener);
      }

      return this;
    };

EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

EventEmitter.prototype.removeAllListeners =
    function removeAllListeners(type) {
      var listeners, events, i;

      events = this._events;
      if (events === undefined)
        return this;

      // not listening for removeListener, no need to emit
      if (events.removeListener === undefined) {
        if (arguments.length === 0) {
          this._events = Object.create(null);
          this._eventsCount = 0;
        } else if (events[type] !== undefined) {
          if (--this._eventsCount === 0)
            this._events = Object.create(null);
          else
            delete events[type];
        }
        return this;
      }

      // emit removeListener for all listeners on all events
      if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for (i = 0; i < keys.length; ++i) {
          key = keys[i];
          if (key === 'removeListener') continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
      }

      listeners = events[type];

      if (typeof listeners === 'function') {
        this.removeListener(type, listeners);
      } else if (listeners !== undefined) {
        // LIFO order
        for (i = listeners.length - 1; i >= 0; i--) {
          this.removeListener(type, listeners[i]);
        }
      }

      return this;
    };

function _listeners(target, type, unwrap) {
  var events = target._events;

  if (events === undefined)
    return [];

  var evlistener = events[type];
  if (evlistener === undefined)
    return [];

  if (typeof evlistener === 'function')
    return unwrap ? [evlistener.listener || evlistener] : [evlistener];

  return unwrap ?
    unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function(emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;

  if (events !== undefined) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};

function arrayClone(arr, n) {
  var copy = new Array(n);
  for (var i = 0; i < n; ++i)
    copy[i] = arr[i];
  return copy;
}

function spliceOne(list, index) {
  for (; index + 1 < list.length; index++)
    list[index] = list[index + 1];
  list.pop();
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}

function once(emitter, name) {
  return new Promise(function (resolve, reject) {
    function errorListener(err) {
      emitter.removeListener(name, resolver);
      reject(err);
    }

    function resolver() {
      if (typeof emitter.removeListener === 'function') {
        emitter.removeListener('error', errorListener);
      }
      resolve([].slice.call(arguments));
    };

    eventTargetAgnosticAddListener(emitter, name, resolver, { once: true });
    if (name !== 'error') {
      addErrorHandlerIfEventEmitter(emitter, errorListener, { once: true });
    }
  });
}

function addErrorHandlerIfEventEmitter(emitter, handler, flags) {
  if (typeof emitter.on === 'function') {
    eventTargetAgnosticAddListener(emitter, 'error', handler, flags);
  }
}

function eventTargetAgnosticAddListener(emitter, name, listener, flags) {
  if (typeof emitter.on === 'function') {
    if (flags.once) {
      emitter.once(name, listener);
    } else {
      emitter.on(name, listener);
    }
  } else if (typeof emitter.addEventListener === 'function') {
    // EventTarget does not have `error` event semantics like Node
    // EventEmitters, we do not listen for `error` events here.
    emitter.addEventListener(name, function wrapListener(arg) {
      // IE does not have builtin `{ once: true }` support so we
      // have to do it manually.
      if (flags.once) {
        emitter.removeEventListener(name, wrapListener);
      }
      listener(arg);
    });
  } else {
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof emitter);
  }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {

// EXTERNAL MODULE: ../../node_modules/events/events.js
var events = __webpack_require__(928);
;// CONCATENATED MODULE: ../utils/src/typedEventEmitter.ts
/*
Usage example:
type EventMap = {
    obj: { id: string };
    primitive: boolean | number | string | symbol;
    noArgs: undefined;
    multipleArgs: (a: number, b: string, c: boolean) => void;
    [type: `dynamic/${string}`]: boolean;
};
*/


// NOTE: case 1. looks like case 4. but works differently. the order matters

// 4. default

// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
class TypedEmitter extends events.EventEmitter {
  // implement at least one function
  listenerCount(eventName) {
    return super.listenerCount(eventName);
  }
}
;// CONCATENATED MODULE: ../connect-common/src/storage.ts
// https://github.com/trezor/connect/blob/develop/src/js/storage/index.js


const storageVersion = 2;
const storageName = `storage_v${storageVersion}`;

/**
 * remembered:
 *  - physical device from webusb pairing dialogue
 *  - passphrase to be used
 */

// TODO: move storage somewhere else. Having it here brings couple of problems:
// - We can not import types from connect (would cause cyclic dependency)
// - it has here dependency on window object, not good

const getEmptyState = () => ({
  origin: {}
});
let memoryStorage = getEmptyState();
const getPermanentStorage = () => {
  const ls = localStorage.getItem(storageName);
  return ls ? JSON.parse(ls) : getEmptyState();
};
class Storage extends TypedEmitter {
  save(getNewState, temporary = false) {
    if (temporary || !__webpack_require__.g.window) {
      memoryStorage = getNewState(memoryStorage);
      return;
    }
    try {
      const newState = getNewState(getPermanentStorage());
      localStorage.setItem(storageName, JSON.stringify(newState));
      this.emit('changed', newState);
    } catch (err) {
      // memory storage is fallback of the last resort
      console.warn('long term storage not available');
      memoryStorage = getNewState(memoryStorage);
    }
  }
  saveForOrigin(getNewState, origin, temporary = false) {
    this.save(state => ({
      ...state,
      origin: {
        ...state.origin,
        [origin]: getNewState(state.origin?.[origin] || {})
      }
    }), temporary);
  }
  load(temporary = false) {
    if (temporary || !__webpack_require__.g?.window?.localStorage) {
      return memoryStorage;
    }
    try {
      return getPermanentStorage();
    } catch (err) {
      // memory storage is fallback of the last resort
      console.warn('long term storage not available');
      return memoryStorage;
    }
  }
  loadForOrigin(origin, temporary = false) {
    const state = this.load(temporary);
    return state.origin?.[origin] || {};
  }
}
const storage = new Storage();

;// CONCATENATED MODULE: ../utils/src/createDeferred.ts
// unwrap promise response from Deferred

const createDeferred = id => {
  let localResolve = () => {};
  let localReject = () => {};
  const promise = new Promise((resolve, reject) => {
    localResolve = resolve;
    localReject = reject;
  });
  return {
    id,
    resolve: localResolve,
    reject: localReject,
    promise
  };
};
;// CONCATENATED MODULE: ../utils/src/scheduleAction.ts
// Ignored when attempts is AttemptParams[]

const isArray = attempts => Array.isArray(attempts);
const abortedBySignal = () => new Error('Aborted by signal');
const abortedByDeadline = () => new Error('Aborted by deadline');
const abortedByTimeout = () => new Error('Aborted by timeout');
const resolveAfterMs = (ms, clear) => new Promise((resolve, reject) => {
  if (clear.aborted) return reject();
  if (ms === undefined) return resolve();
  const timeout = setTimeout(resolve, ms);
  const onClear = () => {
    clearTimeout(timeout);
    clear.removeEventListener('abort', onClear);
    reject();
  };
  clear.addEventListener('abort', onClear);
});
const rejectAfterMs = (ms, reason, clear) => new Promise((_, reject) => {
  if (clear.aborted) return reject();
  const timeout = ms !== undefined ? setTimeout(() => reject(reason()), ms) : undefined;
  const onClear = () => {
    clearTimeout(timeout);
    clear.removeEventListener('abort', onClear);
    reject();
  };
  clear.addEventListener('abort', onClear);
});
const rejectWhenAborted = (signal, clear) => new Promise((_, reject) => {
  if (clear.aborted) return reject();
  if (signal?.aborted) return reject(abortedBySignal());
  const onAbort = () => reject(abortedBySignal());
  signal?.addEventListener('abort', onAbort);
  const onClear = () => {
    signal?.removeEventListener('abort', onAbort);
    clear.removeEventListener('abort', onClear);
    reject();
  };
  clear.addEventListener('abort', onClear);
});
const resolveAction = async (action, clear) => {
  const aborter = new AbortController();
  const onClear = () => aborter.abort();
  if (clear.aborted) onClear();
  clear.addEventListener('abort', onClear);
  try {
    return await new Promise(resolve => resolve(action(aborter.signal)));
  } finally {
    clear.removeEventListener('abort', onClear);
  }
};
const attemptLoop = async (attempts, attempt, failure, clear) => {
  // Tries only (attempts - 1) times, because the last attempt throws its error
  for (let a = 0; a < attempts - 1; a++) {
    if (clear.aborted) break;
    const aborter = new AbortController();
    const onClear = () => aborter.abort();
    clear.addEventListener('abort', onClear);
    try {
      return await attempt(a, aborter.signal);
    } catch {
      onClear();
      await failure(a);
    } finally {
      clear.removeEventListener('abort', onClear);
    }
  }
  return clear.aborted ? Promise.reject() : attempt(attempts - 1, clear);
};
const scheduleAction = async (action, params) => {
  const {
    signal,
    delay,
    attempts,
    timeout,
    deadline,
    gap
  } = params;
  const deadlineMs = deadline && deadline - Date.now();
  const attemptCount = isArray(attempts) ? attempts.length : attempts ?? (deadline ? Infinity : 1);
  const clearAborter = new AbortController();
  const clear = clearAborter.signal;
  const getParams = isArray(attempts) ? attempt => attempts[attempt] : () => ({
    timeout,
    gap
  });
  try {
    return await Promise.race([rejectWhenAborted(signal, clear), rejectAfterMs(deadlineMs, abortedByDeadline, clear), resolveAfterMs(delay, clear).then(() => attemptLoop(attemptCount, (attempt, abort) => Promise.race([rejectAfterMs(getParams(attempt).timeout, abortedByTimeout, clear), resolveAction(action, abort)]), attempt => resolveAfterMs(getParams(attempt).gap ?? 0, clear), clear))]);
  } finally {
    clearAborter.abort();
  }
};
;// CONCATENATED MODULE: ../connect-common/src/messageChannel/abstract.ts
/**
 * IMPORTS WARNING
 * this file is bundled into content script so be careful what you are importing not to bloat the bundle
 */





// TODO: so logger should be probably moved to connect common, or this file should be moved to connect
// import type { Log } from '@trezor/connect/src/utils/debug';

/**
 * concepts:
 * - it handshakes automatically with the other side of the channel
 * - it queues messages fired before handshake and sends them after handshake is done
 */
class AbstractMessageChannel extends TypedEmitter {
  messagePromises = {};
  /** queue of messages that were scheduled before handshake */
  messagesQueue = [];
  messageID = 0;
  isConnected = false;
  handshakeMaxRetries = 5;
  handshakeRetryInterval = 2000;

  /**
   * function that passes data to the other side of the channel
   */

  /**
   * channel identifiers that pairs AbstractMessageChannel instances on sending and receiving end together
   */

  constructor({
    sendFn,
    channel,
    logger,
    lazyHandshake = false,
    legacyMode = false
  }) {
    super();
    this.channel = channel;
    this.sendFn = sendFn;
    this.lazyHandshake = lazyHandshake;
    this.legacyMode = legacyMode;
    this.logger = logger;
  }

  /**
   * initiates handshake sequence with peer. resolves after communication with peer is established
   */
  init() {
    if (!this.handshakeFinished) {
      this.handshakeFinished = createDeferred();
      if (this.legacyMode) {
        // Bypass handshake for communication with legacy components
        // We add a delay for enough time for the other side to be ready
        setTimeout(() => {
          this.handshakeFinished?.resolve();
        }, 500);
      }
      if (!this.lazyHandshake) {
        // When `lazyHandshake` handshakeWithPeer will start when received channel-handshake-request.
        this.handshakeWithPeer();
      }
    }
    return this.handshakeFinished.promise;
  }

  /**
   * handshake between both parties of the channel.
   * both parties initiate handshake procedure and keep asking over time in a loop until they time out or receive confirmation from peer
   */
  handshakeWithPeer() {
    this.logger?.log(this.channel.here, 'handshake');
    return scheduleAction(async () => {
      this.postMessage({
        type: 'channel-handshake-request',
        data: {
          success: true,
          payload: undefined
        }
      }, {
        usePromise: false,
        useQueue: false
      });
      await this.handshakeFinished?.promise;
    }, {
      attempts: this.handshakeMaxRetries,
      timeout: this.handshakeRetryInterval
    }).then(() => {
      this.logger?.log(this.channel.here, 'handshake confirmed');
      this.messagesQueue.forEach(message => {
        message.channel = this.channel;
        this.sendFn(message);
      });
      this.messagesQueue = [];
    }).catch(() => {
      this.handshakeFinished?.reject(new Error('handshake failed'));
      this.handshakeFinished = undefined;
    });
  }

  /**
   * message received from communication channel in descendants of this class
   * should be handled by this common onMessage method
   */
  onMessage(_message) {
    // Older code used to send message as a data property of the message object.
    // This is a workaround to keep backward compatibility.
    let message = _message;
    if (this.legacyMode && message.type === undefined && 'data' in message && typeof message.data === 'object' && message.data !== null && 'type' in message.data && typeof message.data.type === 'string') {
      // @ts-expect-error
      message = message.data;
    }
    const {
      channel,
      id,
      type,
      payload,
      success
    } = message;

    // Don't verify channel in legacy mode
    if (!this.legacyMode) {
      if (!channel?.peer || channel.peer !== this.channel.here) {
        // To wrong peer
        return;
      }
      if (!channel?.here || this.channel.peer !== channel.here) {
        // From wrong peer
        return;
      }
    }
    if (type === 'channel-handshake-request') {
      this.postMessage({
        type: 'channel-handshake-confirm',
        data: {
          success: true,
          payload: undefined
        }
      }, {
        usePromise: false,
        useQueue: false
      });
      if (this.lazyHandshake) {
        // When received channel-handshake-request in lazyHandshake mode we start from this side.
        this.handshakeWithPeer();
      }
      return;
    }
    if (type === 'channel-handshake-confirm') {
      this.handshakeFinished?.resolve(undefined);
      return;
    }
    if (this.messagePromises[id]) {
      this.messagePromises[id].resolve({
        id,
        payload,
        success
      });
      delete this.messagePromises[id];
    }
    const messagePromisesLength = Object.keys(this.messagePromises).length;
    if (messagePromisesLength > 5) {
      this.logger?.warn(`too many message promises (${messagePromisesLength}). this feels unexpected!`);
    }

    // @ts-expect-error TS complains for odd reasons
    this.emit('message', message);
  }

  // todo: outgoing messages should be typed
  postMessage(message, {
    usePromise = true,
    useQueue = true
  } = {}) {
    message.channel = this.channel;
    if (!usePromise) {
      try {
        this.sendFn(message);
      } catch (err) {
        if (useQueue) {
          this.messagesQueue.push(message);
        }
      }
      return;
    }
    this.messageID++;
    message.id = this.messageID;
    this.messagePromises[message.id] = createDeferred();
    try {
      this.sendFn(message);
    } catch (err) {
      if (useQueue) {
        this.messagesQueue.push(message);
      }
    }
    return this.messagePromises[message.id].promise;
  }
  resolveMessagePromises(resolvePayload) {
    // This is used when we know that the connection has been interrupted but there might be something waiting for it.
    Object.keys(this.messagePromises).forEach(id => this.messagePromises[id].resolve({
      id,
      payload: resolvePayload
    }));
  }
  clear() {
    this.handshakeFinished = undefined;
  }
}
;// CONCATENATED MODULE: ../connect-common/src/index.ts



;// CONCATENATED MODULE: ../connect-web/src/channels/window-serviceworker.ts


/**
 * Communication channel between:
 * - here: chrome message port (in service worker)
 * - peer: window.onMessage in trezor-content-script
 */

class WindowServiceWorkerChannel extends AbstractMessageChannel {
  constructor({
    name,
    channel
  }) {
    super({
      channel,
      sendFn: message => {
        if (!this.port) throw new Error('port not assigned');
        this.port.postMessage(message);
      }
    });
    const port = chrome.runtime.connect({
      name
    });
    this.port = port;
    this.connect();
  }
  connect() {
    this.port?.onMessage.addListener(message => {
      if (message.channel.here === this.channel.here) return;
      this.onMessage(message);
    });
    this.isConnected = true;
  }
  disconnect() {
    if (!this.isConnected) return;
    this.port?.disconnect();
    this.isConnected = false;
  }
}
;// CONCATENATED MODULE: ./src/contentScript.ts


/**
 * communication between service worker and both webextension and popup manager
 */
const channel = new WindowServiceWorkerChannel({
  name: 'trezor-connect',
  channel: {
    here: '@trezor/connect-content-script',
    peer: '@trezor/connect-webextension'
  }
});
channel.init().then(() => {
  // once script is loaded. send information about the webextension that injected it into the popup
  window.postMessage({
    type: 'popup-content-script-loaded',
    payload: {
      ...chrome.runtime.getManifest(),
      id: chrome.runtime.id
    }
  }, window.location.origin);

  /**
   * Passing messages from service worker to popup
   */
  channel.on('message', message => {
    window.postMessage(message, window.location.origin);
  });

  /*
   * Passing messages from popup to service worker
   */
  window.addEventListener('message', event => {
    if (event.data?.channel?.here === '@trezor/connect-webextension' || event.data?.type === 'popup-content-script-loaded') {
      return;
    }
    if (event.source === window && event.data) {
      channel.postMessage(event.data, {
        usePromise: false
      });
    }
  });
  window.addEventListener('beforeunload', () => {
    window.postMessage({
      type: 'popup-closed'
    }, window.location.origin);
  });
});
})();

/******/ })()
;
          }
        }).then(() => this.logger.debug('content script injected')).catch(error => this.logger.error('content script injection error', error));
      } else {
        // When permissions for `scripting` are not provided 3rd party integrations have include content-script.js manually.
      }
    });
  };
  handleCoreMessage(message) {
    if (message.type === POPUP.CORE_LOADED) {
      this.channel.postMessage({
        type: POPUP.HANDSHAKE,
        // in this case, settings will be validated in popup
        payload: {
          settings: this.settings
        }
      });
      this.handshakePromise?.resolve();
    } else if (message.type === POPUP.CLOSED) {
      // When popup is closed we should create a not-real response as if the request was interrupted.
      // Because when popup closes and TrezorConnect is living there it cannot respond, but we know
      // it was interrupted so we safely fake it.
      this.channel.resolveMessagePromises({
        code: 'Method_Interrupted',
        error: POPUP.CLOSED
      });
    }
  }
  handleExtensionMessage(data) {
    if (data.type === POPUP.ERROR || data.type === POPUP.LOADED || data.type === POPUP.BOOTSTRAP) {
      this.handleMessage(data);
    } else if (data.type === POPUP.EXTENSION_USB_PERMISSIONS) {
      chrome.tabs.query({
        currentWindow: true,
        active: true
      }, tabs => {
        chrome.tabs.create({
          url: 'trezor-usb-permissions.html',
          index: tabs[0].index + 1
        }, _tab => {
          // do nothing
        });
      });
    } else if (data.type === POPUP.CLOSE_WINDOW) {
      this.clear();
    }
  }
  handleMessage(data) {
    if (data.type === IFRAME.LOADED) {
      this.iframeHandshakePromise?.resolve(data.payload);
    } else if (data.type === POPUP.BOOTSTRAP) {
      // popup is opened properly, now wait for POPUP.LOADED message
      if (this.openTimeout) clearTimeout(this.openTimeout);
    } else if (data.type === POPUP.ERROR && this.popupWindow) {
      // handle popup error
      const errorMessage = data.payload && typeof data.payload.error === 'string' ? data.payload.error : null;
      this.emit(POPUP.CLOSED, errorMessage ? `Popup error: ${errorMessage}` : null);
      this.clear();
    } else if (data.type === POPUP.LOADED) {
      // in case of webextension where bootstrap message is not sent
      if (this.openTimeout) clearTimeout(this.openTimeout);
      if (this.popupPromise) {
        this.popupPromise.resolve();
      }
      // popup is successfully loaded
      this.iframeHandshakePromise?.promise.then(payload => {
        // send ConnectSettings to popup
        // note this settings and iframe.ConnectSettings could be different (especially: origin, popup, webusb, debug)
        // now popup is able to load assets
        this.channel.postMessage({
          type: POPUP.INIT,
          payload: {
            ...payload,
            settings: this.settings
          }
        });
      });
    } else if (data.type === POPUP.CANCEL_POPUP_REQUEST || data.type === UI.CLOSE_UI_WINDOW) {
      this.clear(false);
    }
  }
  clear(focus = true) {
    this.locked = false;
    this.popupPromise = undefined;
    this.handshakePromise = createDeferred();
    if (this.channel) {
      this.channel.disconnect();
    }
    if (this.requestTimeout) {
      clearTimeout(this.requestTimeout);
      this.requestTimeout = undefined;
    }
    if (this.openTimeout) {
      clearTimeout(this.openTimeout);
      this.openTimeout = undefined;
    }
    if (this.closeInterval) {
      clearInterval(this.closeInterval);
      this.closeInterval = undefined;
    }

    // switch to previously focused tab

    if (focus && this.extensionTabId) {
      chrome.tabs.update(this.extensionTabId, {
        active: true
      });
      this.extensionTabId = 0;
    }
  }
  close() {
    if (!this.popupWindow) return;
    this.logger.debug('closing popup');
    if (this.popupWindow.mode === 'tab') {
      let _e = chrome.runtime.lastError;
      if (this.popupWindow.tab.id) {
        chrome.tabs.remove(this.popupWindow.tab.id, () => {
          _e = chrome.runtime.lastError;
          if (_e) {
            this.logger.error('closed with error', _e);
          }
        });
      }
    } else if (this.popupWindow.mode === 'window') {
      this.popupWindow.window.close();
    }
    this.popupWindow = undefined;
  }
  async postMessage(message) {
    // NOTE: This method only seems to be used in one case to show UI.IFRAME_FAILURE
    // Maybe we could handle this in a simpler way?

    // device needs interaction but there is no popup/ui
    // maybe popup request wasn't handled
    // ignore "ui_request_window" type
    if (!this.popupWindow && message.type !== UI.REQUEST_UI_WINDOW && this.openTimeout) {
      this.clear();
      showPopupRequest(this.open.bind(this), () => {
        this.emit(POPUP.CLOSED);
      });
      return;
    }

    // post message before popup request finalized
    if (this.popupPromise) {
      await this.popupPromise.promise;
    }
    // post message to popup window
    if (this.popupWindow?.mode === 'window') {
      this.popupWindow.window.postMessage(message, this.origin);
    } else if (this.popupWindow?.mode === 'tab') {
      this.channel.postMessage(message);
    }
  }
}
;// CONCATENATED MODULE: ../connect/src/data/version.ts
const VERSION = '9.2.2';
const versionN = VERSION.split('.').map(s => parseInt(s, 10));
const DEFAULT_DOMAIN = `https://connect.trezor.io/${versionN[0]}/`;
;// CONCATENATED MODULE: ../connect/src/data/connectSettings.ts
// origin: https://github.com/trezor/connect/blob/develop/src/js/data/ConnectSettings.js



/*
 * Initial settings for connect.
 * It could be changed by passing values into TrezorConnect.init(...) method
 */

const DEFAULT_PRIORITY = 2;
const initialSettings = {
  configSrc: './data/config.json',
  // constant
  version: VERSION,
  // constant
  debug: false,
  priority: DEFAULT_PRIORITY,
  trustedHost: true,
  connectSrc: DEFAULT_DOMAIN,
  iframeSrc: `${DEFAULT_DOMAIN}iframe.html`,
  popup: false,
  popupSrc: `${DEFAULT_DOMAIN}popup.html`,
  webusbSrc: `${DEFAULT_DOMAIN}webusb.html`,
  transports: undefined,
  pendingTransportEvent: true,
  env: 'node',
  lazyLoad: false,
  timestamp: new Date().getTime(),
  interactionTimeout: 600,
  // 5 minutes
  sharedLogger: true
};
const parseManifest = manifest => {
  if (!manifest) return;
  if (typeof manifest.email !== 'string') return;
  if (typeof manifest.appUrl !== 'string') return;
  return {
    email: manifest.email,
    appUrl: manifest.appUrl
  };
};

// Cors validation copied from Trezor Bridge
// see: https://github.com/trezor/trezord-go/blob/05991cea5900d18bcc6ece5ae5e319d138fc5551/server/api/api.go#L229
// Its pointless to allow `@trezor/connect` endpoints { connectSrc } for domains other than listed below
// `trezord` will block communication anyway
const corsValidator = url => {
  if (typeof url !== 'string') return;
  if (url.match(/^https:\/\/([A-Za-z0-9\-_]+\.)*trezor\.io\//)) return url;
  if (url.match(/^https?:\/\/localhost:[58][0-9]{3}\//)) return url;
  if (url.match(/^https:\/\/([A-Za-z0-9\-_]+\.)*sldev\.cz\//)) return url;
  if (url.match(/^https?:\/\/([A-Za-z0-9\-_]+\.)*trezoriovpjcahpzkrewelclulmszwbqpzmzgub37gbcjlvluxtruqad\.onion\//)) return url;
};
const parseConnectSettings = (input = {}) => {
  const settings = {
    ...initialSettings
  };
  if ('debug' in input) {
    if (typeof input.debug === 'boolean') {
      settings.debug = input.debug;
    } else if (typeof input.debug === 'string') {
      settings.debug = input.debug === 'true';
    }
  }

  // trust level can only be lowered by implementator!
  if (input.trustedHost === false) {
    settings.trustedHost = input.trustedHost;
  }
  if (typeof input.connectSrc === 'string' && input.connectSrc?.startsWith('http')) {
    settings.connectSrc = corsValidator(input.connectSrc);
  } else if (settings.trustedHost) {
    settings.connectSrc = input.connectSrc;
  }
  const src = settings.connectSrc || DEFAULT_DOMAIN;
  settings.iframeSrc = `${src}iframe.html`;
  settings.popupSrc = `${src}popup.html`;
  settings.webusbSrc = `${src}webusb.html`;
  if (typeof input.transportReconnect === 'boolean') {
    settings.transportReconnect = input.transportReconnect;
  }

  // deprecated, settings.transport should be used instead
  if (typeof input.webusb === 'boolean') {
    settings.webusb = input.webusb;
  }
  if (Array.isArray(input.transports)) {
    settings.transports = input.transports;
  }
  if (typeof input.popup === 'boolean') {
    settings.popup = input.popup;
  }
  if (typeof input.lazyLoad === 'boolean') {
    settings.lazyLoad = input.lazyLoad;
  }
  if (typeof input.pendingTransportEvent === 'boolean') {
    settings.pendingTransportEvent = input.pendingTransportEvent;
  }
  if (typeof input.extension === 'string') {
    settings.extension = input.extension;
  }
  if (typeof input.env === 'string') {
    settings.env = input.env;
  }
  if (typeof input.timestamp === 'number') {
    settings.timestamp = input.timestamp;
  }
  if (typeof input.interactionTimeout === 'number') {
    settings.interactionTimeout = input.interactionTimeout;
  }
  if (typeof input.manifest === 'object') {
    settings.manifest = parseManifest(input.manifest);
  }
  if (typeof input.sharedLogger === 'boolean') {
    settings.sharedLogger = input.sharedLogger;
  }
  if (typeof input.useCoreInPopup === 'boolean') {
    settings.useCoreInPopup = input.useCoreInPopup;
  }
  return settings;
};
;// CONCATENATED MODULE: ./src/connectSettings.ts

const getEnv = () => 'webextension';

/**
 * Settings from host
 * @param input Partial<ConnectSettings>
 */
const connectSettings_parseConnectSettings = (input = {}) => {
  const settings = {
    popup: true,
    ...input
  };
  if (typeof input.env !== 'string') {
    settings.env = getEnv();
  }
  return parseConnectSettings(settings);
};
;// CONCATENATED MODULE: ./src/index.ts


// NOTE: @trezor/connect part is intentionally not imported from the index so we do include the whole library.



// Import as src not lib due to webpack issues with inlining content script later



const eventEmitter = new (events_default())();
let _settings = connectSettings_parseConnectSettings();

/**
 * setup logger.
 * service worker cant communicate directly with sharedworker logger so the communication is as follows:
 * - service worker -> content script -> popup -> sharedworker
 * todo: this could be simplified by injecting additional content script into log.html
 */
const logger = initLog('@trezor/connect-webextension');
const popupManagerLogger = initLog('@trezor/connect-webextension/popupManager');
let _popupManager;
const logWriterFactory = popupManager => ({
  add: message => {
    popupManager.channel.postMessage({
      event: ui_request_UI_EVENT,
      type: IFRAME.LOG,
      payload: message
    }, {
      usePromise: false,
      useQueue: true
    });
  }
});
const manifest = data => {
  _settings = connectSettings_parseConnectSettings({
    ..._settings,
    manifest: data
  });
};
const dispose = () => {
  eventEmitter.removeAllListeners();
  _settings = connectSettings_parseConnectSettings();
  if (_popupManager) {
    _popupManager.close();
  }
  return Promise.resolve(undefined);
};
const cancel = error => {
  if (_popupManager) {
    _popupManager.emit(POPUP.CLOSED, error);
  }
};
const init = (settings = {}) => {
  const oldSettings = connectSettings_parseConnectSettings({
    ..._settings
  });
  const newSettings = connectSettings_parseConnectSettings({
    ..._settings,
    ...settings
  });
  // defaults for connect-webextension
  if (!newSettings.transports?.length) {
    newSettings.transports = ['BridgeTransport', 'WebUsbTransport'];
  }
  newSettings.useCoreInPopup = true;
  const equalSettings = JSON.stringify(oldSettings) === JSON.stringify(newSettings);
  _settings = newSettings;
  if (!_popupManager || !equalSettings) {
    if (_popupManager) _popupManager.close();
    _popupManager = new PopupManager(_settings, {
      logger: popupManagerLogger
    });
    setLogWriter(() => logWriterFactory(_popupManager));
  }
  logger.enabled = !!settings.debug;
  if (!_settings.manifest) {
    throw TypedError('Init_ManifestMissing');
  }
  logger.debug('initiated');
  return Promise.resolve();
};

/**
 * 1. opens popup
 * 2. sends request to popup where the request is handled by core
 * 3. returns response
 */
const call = async params => {
  logger.debug('call', params);

  // request popup window it might be used in the future
  if (_settings.popup) {
    await _popupManager.request();
  }
  await _popupManager.channel.init();
  _popupManager.channel.postMessage({
    type: POPUP.INIT,
    payload: {
      settings: _settings,
      useCore: true
    }
  });
  await _popupManager.handshakePromise?.promise;

  // post message to core in popup
  try {
    const response = await _popupManager.channel.postMessage({
      type: IFRAME.CALL,
      payload: params
    });
    logger.debug('call: response: ', response);
    if (response) {
      if (_popupManager && response.success) {
        _popupManager.clear();
      }
      return response;
    }
    return createErrorMessage(TypedError('Method_NoResponse'));
  } catch (error) {
    logger.error('call: error', error);
    _popupManager.clear(false);
    return createErrorMessage(error);
  }
};
const uiResponse = response => {
  const {
    type,
    payload
  } = response;
  _popupManager.channel.postMessage({
    event: ui_request_UI_EVENT,
    type,
    payload
  });
};
const renderWebUSBButton = () => {};
const requestLogin = () => {
  // todo: not supported yet
  throw TypedError('Method_InvalidPackage');
};
const disableWebUSB = () => {
  // todo: not supported yet, probably not needed
  throw TypedError('Method_InvalidPackage');
};
const requestWebUSBDevice = () => {
  // not needed - webusb pairing happens in popup
  throw TypedError('Method_InvalidPackage');
};
const TrezorConnect = factory({
  eventEmitter,
  manifest,
  init,
  call,
  requestLogin,
  uiResponse,
  renderWebUSBButton,
  disableWebUSB,
  requestWebUSBDevice,
  cancel,
  dispose
});
const initProxyChannel = () => {
  const channel = new ServiceWorkerWindowChannel({
    name: 'trezor-connect-proxy',
    channel: {
      here: '@trezor/connect-service-worker-proxy',
      peer: '@trezor/connect-foreground-proxy'
    },
    lazyHandshake: true,
    allowSelfOrigin: true
  });
  let proxySettings = connectSettings_parseConnectSettings();
  channel.init();
  channel.on('message', message => {
    const {
      id,
      payload,
      type
    } = message;
    if (!payload) return;
    const {
      method,
      settings
    } = payload;
    if (type === POPUP.INIT) {
      proxySettings = connectSettings_parseConnectSettings({
        ..._settings,
        ...settings
      });
      return;
    }

    // Core is loaded in popup and initialized every time, so we send the settings from here.
    TrezorConnect.init(proxySettings).then(() => {
      TrezorConnect[method](payload).then(response => {
        channel.postMessage({
          id,
          payload: response.payload
        });
      });
    });
  });
};
initProxyChannel();

// eslint-disable-next-line import/no-default-export
/* harmony default export */ const src = (TrezorConnect);

})();

__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});