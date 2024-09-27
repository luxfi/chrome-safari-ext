/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/eth-rpc-errors/dist/classes.js":
/*!*****************************************************!*\
  !*** ./node_modules/eth-rpc-errors/dist/classes.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EthereumProviderError = exports.EthereumRpcError = void 0;
const fast_safe_stringify_1 = __webpack_require__(/*! fast-safe-stringify */ "./node_modules/fast-safe-stringify/index.js");
/**
 * Error subclass implementing JSON RPC 2.0 errors and Ethereum RPC errors
 * per EIP-1474.
 * Permits any integer error code.
 */
class EthereumRpcError extends Error {
    constructor(code, message, data) {
        if (!Number.isInteger(code)) {
            throw new Error('"code" must be an integer.');
        }
        if (!message || typeof message !== 'string') {
            throw new Error('"message" must be a nonempty string.');
        }
        super(message);
        this.code = code;
        if (data !== undefined) {
            this.data = data;
        }
    }
    /**
     * Returns a plain object with all public class properties.
     */
    serialize() {
        const serialized = {
            code: this.code,
            message: this.message,
        };
        if (this.data !== undefined) {
            serialized.data = this.data;
        }
        if (this.stack) {
            serialized.stack = this.stack;
        }
        return serialized;
    }
    /**
     * Return a string representation of the serialized error, omitting
     * any circular references.
     */
    toString() {
        return fast_safe_stringify_1.default(this.serialize(), stringifyReplacer, 2);
    }
}
exports.EthereumRpcError = EthereumRpcError;
/**
 * Error subclass implementing Ethereum Provider errors per EIP-1193.
 * Permits integer error codes in the [ 1000 <= 4999 ] range.
 */
class EthereumProviderError extends EthereumRpcError {
    /**
     * Create an Ethereum Provider JSON-RPC error.
     * `code` must be an integer in the 1000 <= 4999 range.
     */
    constructor(code, message, data) {
        if (!isValidEthProviderCode(code)) {
            throw new Error('"code" must be an integer such that: 1000 <= code <= 4999');
        }
        super(code, message, data);
    }
}
exports.EthereumProviderError = EthereumProviderError;
// Internal
function isValidEthProviderCode(code) {
    return Number.isInteger(code) && code >= 1000 && code <= 4999;
}
function stringifyReplacer(_, value) {
    if (value === '[Circular]') {
        return undefined;
    }
    return value;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xhc3Nlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9jbGFzc2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDZEQUFnRDtBQVNoRDs7OztHQUlHO0FBQ0gsTUFBYSxnQkFBb0IsU0FBUSxLQUFLO0lBTTVDLFlBQVksSUFBWSxFQUFFLE9BQWUsRUFBRSxJQUFRO1FBRWpELElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQzNCLE1BQU0sSUFBSSxLQUFLLENBQ2IsNEJBQTRCLENBQzdCLENBQUM7U0FDSDtRQUNELElBQUksQ0FBQyxPQUFPLElBQUksT0FBTyxPQUFPLEtBQUssUUFBUSxFQUFFO1lBQzNDLE1BQU0sSUFBSSxLQUFLLENBQ2Isc0NBQXNDLENBQ3ZDLENBQUM7U0FDSDtRQUVELEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNmLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksSUFBSSxLQUFLLFNBQVMsRUFBRTtZQUN0QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztTQUNsQjtJQUNILENBQUM7SUFFRDs7T0FFRztJQUNILFNBQVM7UUFDUCxNQUFNLFVBQVUsR0FBK0I7WUFDN0MsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2YsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO1NBQ3RCLENBQUM7UUFDRixJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssU0FBUyxFQUFFO1lBQzNCLFVBQVUsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztTQUM3QjtRQUNELElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNkLFVBQVUsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztTQUMvQjtRQUNELE9BQU8sVUFBVSxDQUFDO0lBQ3BCLENBQUM7SUFFRDs7O09BR0c7SUFDSCxRQUFRO1FBQ04sT0FBTyw2QkFBYSxDQUNsQixJQUFJLENBQUMsU0FBUyxFQUFFLEVBQ2hCLGlCQUFpQixFQUNqQixDQUFDLENBQ0YsQ0FBQztJQUNKLENBQUM7Q0FDRjtBQXRERCw0Q0FzREM7QUFFRDs7O0dBR0c7QUFDSCxNQUFhLHFCQUF5QixTQUFRLGdCQUFtQjtJQUUvRDs7O09BR0c7SUFDSCxZQUFZLElBQVksRUFBRSxPQUFlLEVBQUUsSUFBUTtRQUVqRCxJQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDakMsTUFBTSxJQUFJLEtBQUssQ0FDYiwyREFBMkQsQ0FDNUQsQ0FBQztTQUNIO1FBRUQsS0FBSyxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDN0IsQ0FBQztDQUNGO0FBaEJELHNEQWdCQztBQUVELFdBQVc7QUFFWCxTQUFTLHNCQUFzQixDQUFDLElBQVk7SUFDMUMsT0FBTyxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQztBQUNoRSxDQUFDO0FBRUQsU0FBUyxpQkFBaUIsQ0FBQyxDQUFVLEVBQUUsS0FBYztJQUNuRCxJQUFJLEtBQUssS0FBSyxZQUFZLEVBQUU7UUFDMUIsT0FBTyxTQUFTLENBQUM7S0FDbEI7SUFDRCxPQUFPLEtBQUssQ0FBQztBQUNmLENBQUMifQ==

/***/ }),

/***/ "./node_modules/eth-rpc-errors/dist/error-constants.js":
/*!*************************************************************!*\
  !*** ./node_modules/eth-rpc-errors/dist/error-constants.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.errorValues = exports.errorCodes = void 0;
exports.errorCodes = {
    rpc: {
        invalidInput: -32000,
        resourceNotFound: -32001,
        resourceUnavailable: -32002,
        transactionRejected: -32003,
        methodNotSupported: -32004,
        limitExceeded: -32005,
        parse: -32700,
        invalidRequest: -32600,
        methodNotFound: -32601,
        invalidParams: -32602,
        internal: -32603,
    },
    provider: {
        userRejectedRequest: 4001,
        unauthorized: 4100,
        unsupportedMethod: 4200,
        disconnected: 4900,
        chainDisconnected: 4901,
    },
};
exports.errorValues = {
    '-32700': {
        standard: 'JSON RPC 2.0',
        message: 'Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text.',
    },
    '-32600': {
        standard: 'JSON RPC 2.0',
        message: 'The JSON sent is not a valid Request object.',
    },
    '-32601': {
        standard: 'JSON RPC 2.0',
        message: 'The method does not exist / is not available.',
    },
    '-32602': {
        standard: 'JSON RPC 2.0',
        message: 'Invalid method parameter(s).',
    },
    '-32603': {
        standard: 'JSON RPC 2.0',
        message: 'Internal JSON-RPC error.',
    },
    '-32000': {
        standard: 'EIP-1474',
        message: 'Invalid input.',
    },
    '-32001': {
        standard: 'EIP-1474',
        message: 'Resource not found.',
    },
    '-32002': {
        standard: 'EIP-1474',
        message: 'Resource unavailable.',
    },
    '-32003': {
        standard: 'EIP-1474',
        message: 'Transaction rejected.',
    },
    '-32004': {
        standard: 'EIP-1474',
        message: 'Method not supported.',
    },
    '-32005': {
        standard: 'EIP-1474',
        message: 'Request limit exceeded.',
    },
    '4001': {
        standard: 'EIP-1193',
        message: 'User rejected the request.',
    },
    '4100': {
        standard: 'EIP-1193',
        message: 'The requested account and/or method has not been authorized by the user.',
    },
    '4200': {
        standard: 'EIP-1193',
        message: 'The requested method is not supported by this Ethereum provider.',
    },
    '4900': {
        standard: 'EIP-1193',
        message: 'The provider is disconnected from all chains.',
    },
    '4901': {
        standard: 'EIP-1193',
        message: 'The provider is disconnected from the specified chain.',
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3ItY29uc3RhbnRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2Vycm9yLWNvbnN0YW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUF1QmEsUUFBQSxVQUFVLEdBQWU7SUFDcEMsR0FBRyxFQUFFO1FBQ0gsWUFBWSxFQUFFLENBQUMsS0FBSztRQUNwQixnQkFBZ0IsRUFBRSxDQUFDLEtBQUs7UUFDeEIsbUJBQW1CLEVBQUUsQ0FBQyxLQUFLO1FBQzNCLG1CQUFtQixFQUFFLENBQUMsS0FBSztRQUMzQixrQkFBa0IsRUFBRSxDQUFDLEtBQUs7UUFDMUIsYUFBYSxFQUFFLENBQUMsS0FBSztRQUNyQixLQUFLLEVBQUUsQ0FBQyxLQUFLO1FBQ2IsY0FBYyxFQUFFLENBQUMsS0FBSztRQUN0QixjQUFjLEVBQUUsQ0FBQyxLQUFLO1FBQ3RCLGFBQWEsRUFBRSxDQUFDLEtBQUs7UUFDckIsUUFBUSxFQUFFLENBQUMsS0FBSztLQUNqQjtJQUNELFFBQVEsRUFBRTtRQUNSLG1CQUFtQixFQUFFLElBQUk7UUFDekIsWUFBWSxFQUFFLElBQUk7UUFDbEIsaUJBQWlCLEVBQUUsSUFBSTtRQUN2QixZQUFZLEVBQUUsSUFBSTtRQUNsQixpQkFBaUIsRUFBRSxJQUFJO0tBQ3hCO0NBQ0YsQ0FBQztBQUVXLFFBQUEsV0FBVyxHQUFHO0lBQ3pCLFFBQVEsRUFBRTtRQUNSLFFBQVEsRUFBRSxjQUFjO1FBQ3hCLE9BQU8sRUFBRSx1R0FBdUc7S0FDakg7SUFDRCxRQUFRLEVBQUU7UUFDUixRQUFRLEVBQUUsY0FBYztRQUN4QixPQUFPLEVBQUUsOENBQThDO0tBQ3hEO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsUUFBUSxFQUFFLGNBQWM7UUFDeEIsT0FBTyxFQUFFLCtDQUErQztLQUN6RDtJQUNELFFBQVEsRUFBRTtRQUNSLFFBQVEsRUFBRSxjQUFjO1FBQ3hCLE9BQU8sRUFBRSw4QkFBOEI7S0FDeEM7SUFDRCxRQUFRLEVBQUU7UUFDUixRQUFRLEVBQUUsY0FBYztRQUN4QixPQUFPLEVBQUUsMEJBQTBCO0tBQ3BDO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsUUFBUSxFQUFFLFVBQVU7UUFDcEIsT0FBTyxFQUFFLGdCQUFnQjtLQUMxQjtJQUNELFFBQVEsRUFBRTtRQUNSLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLE9BQU8sRUFBRSxxQkFBcUI7S0FDL0I7SUFDRCxRQUFRLEVBQUU7UUFDUixRQUFRLEVBQUUsVUFBVTtRQUNwQixPQUFPLEVBQUUsdUJBQXVCO0tBQ2pDO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsUUFBUSxFQUFFLFVBQVU7UUFDcEIsT0FBTyxFQUFFLHVCQUF1QjtLQUNqQztJQUNELFFBQVEsRUFBRTtRQUNSLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLE9BQU8sRUFBRSx1QkFBdUI7S0FDakM7SUFDRCxRQUFRLEVBQUU7UUFDUixRQUFRLEVBQUUsVUFBVTtRQUNwQixPQUFPLEVBQUUseUJBQXlCO0tBQ25DO0lBQ0QsTUFBTSxFQUFFO1FBQ04sUUFBUSxFQUFFLFVBQVU7UUFDcEIsT0FBTyxFQUFFLDRCQUE0QjtLQUN0QztJQUNELE1BQU0sRUFBRTtRQUNOLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLE9BQU8sRUFBRSwwRUFBMEU7S0FDcEY7SUFDRCxNQUFNLEVBQUU7UUFDTixRQUFRLEVBQUUsVUFBVTtRQUNwQixPQUFPLEVBQUUsa0VBQWtFO0tBQzVFO0lBQ0QsTUFBTSxFQUFFO1FBQ04sUUFBUSxFQUFFLFVBQVU7UUFDcEIsT0FBTyxFQUFFLCtDQUErQztLQUN6RDtJQUNELE1BQU0sRUFBRTtRQUNOLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLE9BQU8sRUFBRSx3REFBd0Q7S0FDbEU7Q0FDRixDQUFDIn0=

/***/ }),

/***/ "./node_modules/eth-rpc-errors/dist/errors.js":
/*!****************************************************!*\
  !*** ./node_modules/eth-rpc-errors/dist/errors.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ethErrors = void 0;
const classes_1 = __webpack_require__(/*! ./classes */ "./node_modules/eth-rpc-errors/dist/classes.js");
const utils_1 = __webpack_require__(/*! ./utils */ "./node_modules/eth-rpc-errors/dist/utils.js");
const error_constants_1 = __webpack_require__(/*! ./error-constants */ "./node_modules/eth-rpc-errors/dist/error-constants.js");
exports.ethErrors = {
    rpc: {
        /**
         * Get a JSON RPC 2.0 Parse (-32700) error.
         */
        parse: (arg) => getEthJsonRpcError(error_constants_1.errorCodes.rpc.parse, arg),
        /**
         * Get a JSON RPC 2.0 Invalid Request (-32600) error.
         */
        invalidRequest: (arg) => getEthJsonRpcError(error_constants_1.errorCodes.rpc.invalidRequest, arg),
        /**
         * Get a JSON RPC 2.0 Invalid Params (-32602) error.
         */
        invalidParams: (arg) => getEthJsonRpcError(error_constants_1.errorCodes.rpc.invalidParams, arg),
        /**
         * Get a JSON RPC 2.0 Method Not Found (-32601) error.
         */
        methodNotFound: (arg) => getEthJsonRpcError(error_constants_1.errorCodes.rpc.methodNotFound, arg),
        /**
         * Get a JSON RPC 2.0 Internal (-32603) error.
         */
        internal: (arg) => getEthJsonRpcError(error_constants_1.errorCodes.rpc.internal, arg),
        /**
         * Get a JSON RPC 2.0 Server error.
         * Permits integer error codes in the [ -32099 <= -32005 ] range.
         * Codes -32000 through -32004 are reserved by EIP-1474.
         */
        server: (opts) => {
            if (!opts || typeof opts !== 'object' || Array.isArray(opts)) {
                throw new Error('Ethereum RPC Server errors must provide single object argument.');
            }
            const { code } = opts;
            if (!Number.isInteger(code) || code > -32005 || code < -32099) {
                throw new Error('"code" must be an integer such that: -32099 <= code <= -32005');
            }
            return getEthJsonRpcError(code, opts);
        },
        /**
         * Get an Ethereum JSON RPC Invalid Input (-32000) error.
         */
        invalidInput: (arg) => getEthJsonRpcError(error_constants_1.errorCodes.rpc.invalidInput, arg),
        /**
         * Get an Ethereum JSON RPC Resource Not Found (-32001) error.
         */
        resourceNotFound: (arg) => getEthJsonRpcError(error_constants_1.errorCodes.rpc.resourceNotFound, arg),
        /**
         * Get an Ethereum JSON RPC Resource Unavailable (-32002) error.
         */
        resourceUnavailable: (arg) => getEthJsonRpcError(error_constants_1.errorCodes.rpc.resourceUnavailable, arg),
        /**
         * Get an Ethereum JSON RPC Transaction Rejected (-32003) error.
         */
        transactionRejected: (arg) => getEthJsonRpcError(error_constants_1.errorCodes.rpc.transactionRejected, arg),
        /**
         * Get an Ethereum JSON RPC Method Not Supported (-32004) error.
         */
        methodNotSupported: (arg) => getEthJsonRpcError(error_constants_1.errorCodes.rpc.methodNotSupported, arg),
        /**
         * Get an Ethereum JSON RPC Limit Exceeded (-32005) error.
         */
        limitExceeded: (arg) => getEthJsonRpcError(error_constants_1.errorCodes.rpc.limitExceeded, arg),
    },
    provider: {
        /**
         * Get an Ethereum Provider User Rejected Request (4001) error.
         */
        userRejectedRequest: (arg) => {
            return getEthProviderError(error_constants_1.errorCodes.provider.userRejectedRequest, arg);
        },
        /**
         * Get an Ethereum Provider Unauthorized (4100) error.
         */
        unauthorized: (arg) => {
            return getEthProviderError(error_constants_1.errorCodes.provider.unauthorized, arg);
        },
        /**
         * Get an Ethereum Provider Unsupported Method (4200) error.
         */
        unsupportedMethod: (arg) => {
            return getEthProviderError(error_constants_1.errorCodes.provider.unsupportedMethod, arg);
        },
        /**
         * Get an Ethereum Provider Not Connected (4900) error.
         */
        disconnected: (arg) => {
            return getEthProviderError(error_constants_1.errorCodes.provider.disconnected, arg);
        },
        /**
         * Get an Ethereum Provider Chain Not Connected (4901) error.
         */
        chainDisconnected: (arg) => {
            return getEthProviderError(error_constants_1.errorCodes.provider.chainDisconnected, arg);
        },
        /**
         * Get a custom Ethereum Provider error.
         */
        custom: (opts) => {
            if (!opts || typeof opts !== 'object' || Array.isArray(opts)) {
                throw new Error('Ethereum Provider custom errors must provide single object argument.');
            }
            const { code, message, data } = opts;
            if (!message || typeof message !== 'string') {
                throw new Error('"message" must be a nonempty string');
            }
            return new classes_1.EthereumProviderError(code, message, data);
        },
    },
};
// Internal
function getEthJsonRpcError(code, arg) {
    const [message, data] = parseOpts(arg);
    return new classes_1.EthereumRpcError(code, message || utils_1.getMessageFromCode(code), data);
}
function getEthProviderError(code, arg) {
    const [message, data] = parseOpts(arg);
    return new classes_1.EthereumProviderError(code, message || utils_1.getMessageFromCode(code), data);
}
function parseOpts(arg) {
    if (arg) {
        if (typeof arg === 'string') {
            return [arg];
        }
        else if (typeof arg === 'object' && !Array.isArray(arg)) {
            const { message, data } = arg;
            if (message && typeof message !== 'string') {
                throw new Error('Must specify string message.');
            }
            return [message || undefined, data];
        }
    }
    return [];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3JzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2Vycm9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx1Q0FBb0U7QUFDcEUsbUNBQTZDO0FBQzdDLHVEQUErQztBQWVsQyxRQUFBLFNBQVMsR0FBRztJQUN2QixHQUFHLEVBQUU7UUFFSDs7V0FFRztRQUNILEtBQUssRUFBRSxDQUFJLEdBQXFCLEVBQUUsRUFBRSxDQUFDLGtCQUFrQixDQUNyRCw0QkFBVSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUMxQjtRQUVEOztXQUVHO1FBQ0gsY0FBYyxFQUFFLENBQUksR0FBcUIsRUFBRSxFQUFFLENBQUMsa0JBQWtCLENBQzlELDRCQUFVLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxHQUFHLENBQ25DO1FBRUQ7O1dBRUc7UUFDSCxhQUFhLEVBQUUsQ0FBSSxHQUFxQixFQUFFLEVBQUUsQ0FBQyxrQkFBa0IsQ0FDN0QsNEJBQVUsQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FDbEM7UUFFRDs7V0FFRztRQUNILGNBQWMsRUFBRSxDQUFJLEdBQXFCLEVBQUUsRUFBRSxDQUFDLGtCQUFrQixDQUM5RCw0QkFBVSxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsR0FBRyxDQUNuQztRQUVEOztXQUVHO1FBQ0gsUUFBUSxFQUFFLENBQUksR0FBcUIsRUFBRSxFQUFFLENBQUMsa0JBQWtCLENBQ3hELDRCQUFVLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQzdCO1FBRUQ7Ozs7V0FJRztRQUNILE1BQU0sRUFBRSxDQUFJLElBQTJCLEVBQUUsRUFBRTtZQUN6QyxJQUFJLENBQUMsSUFBSSxJQUFJLE9BQU8sSUFBSSxLQUFLLFFBQVEsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUM1RCxNQUFNLElBQUksS0FBSyxDQUFDLGlFQUFpRSxDQUFDLENBQUM7YUFDcEY7WUFDRCxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDO1lBQ3RCLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksR0FBRyxDQUFDLEtBQUssSUFBSSxJQUFJLEdBQUcsQ0FBQyxLQUFLLEVBQUU7Z0JBQzdELE1BQU0sSUFBSSxLQUFLLENBQ2IsK0RBQStELENBQ2hFLENBQUM7YUFDSDtZQUNELE9BQU8sa0JBQWtCLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3hDLENBQUM7UUFFRDs7V0FFRztRQUNILFlBQVksRUFBRSxDQUFJLEdBQXFCLEVBQUUsRUFBRSxDQUFDLGtCQUFrQixDQUM1RCw0QkFBVSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsR0FBRyxDQUNqQztRQUVEOztXQUVHO1FBQ0gsZ0JBQWdCLEVBQUUsQ0FBSSxHQUFxQixFQUFFLEVBQUUsQ0FBQyxrQkFBa0IsQ0FDaEUsNEJBQVUsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsR0FBRyxDQUNyQztRQUVEOztXQUVHO1FBQ0gsbUJBQW1CLEVBQUUsQ0FBSSxHQUFxQixFQUFFLEVBQUUsQ0FBQyxrQkFBa0IsQ0FDbkUsNEJBQVUsQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEVBQUUsR0FBRyxDQUN4QztRQUVEOztXQUVHO1FBQ0gsbUJBQW1CLEVBQUUsQ0FBSSxHQUFxQixFQUFFLEVBQUUsQ0FBQyxrQkFBa0IsQ0FDbkUsNEJBQVUsQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEVBQUUsR0FBRyxDQUN4QztRQUVEOztXQUVHO1FBQ0gsa0JBQWtCLEVBQUUsQ0FBSSxHQUFxQixFQUFFLEVBQUUsQ0FBQyxrQkFBa0IsQ0FDbEUsNEJBQVUsQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEVBQUUsR0FBRyxDQUN2QztRQUVEOztXQUVHO1FBQ0gsYUFBYSxFQUFFLENBQUksR0FBcUIsRUFBRSxFQUFFLENBQUMsa0JBQWtCLENBQzdELDRCQUFVLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxHQUFHLENBQ2xDO0tBQ0Y7SUFFRCxRQUFRLEVBQUU7UUFFUjs7V0FFRztRQUNILG1CQUFtQixFQUFFLENBQUksR0FBcUIsRUFBRSxFQUFFO1lBQ2hELE9BQU8sbUJBQW1CLENBQ3hCLDRCQUFVLENBQUMsUUFBUSxDQUFDLG1CQUFtQixFQUFFLEdBQUcsQ0FDN0MsQ0FBQztRQUNKLENBQUM7UUFFRDs7V0FFRztRQUNILFlBQVksRUFBRSxDQUFJLEdBQXFCLEVBQUUsRUFBRTtZQUN6QyxPQUFPLG1CQUFtQixDQUN4Qiw0QkFBVSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsR0FBRyxDQUN0QyxDQUFDO1FBQ0osQ0FBQztRQUVEOztXQUVHO1FBQ0gsaUJBQWlCLEVBQUUsQ0FBSSxHQUFxQixFQUFFLEVBQUU7WUFDOUMsT0FBTyxtQkFBbUIsQ0FDeEIsNEJBQVUsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxDQUMzQyxDQUFDO1FBQ0osQ0FBQztRQUVEOztXQUVHO1FBQ0gsWUFBWSxFQUFFLENBQUksR0FBcUIsRUFBRSxFQUFFO1lBQ3pDLE9BQU8sbUJBQW1CLENBQ3hCLDRCQUFVLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRSxHQUFHLENBQ3RDLENBQUM7UUFDSixDQUFDO1FBRUQ7O1dBRUc7UUFDSCxpQkFBaUIsRUFBRSxDQUFJLEdBQXFCLEVBQUUsRUFBRTtZQUM5QyxPQUFPLG1CQUFtQixDQUN4Qiw0QkFBVSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxHQUFHLENBQzNDLENBQUM7UUFDSixDQUFDO1FBRUQ7O1dBRUc7UUFDSCxNQUFNLEVBQUUsQ0FBSSxJQUF1QixFQUFFLEVBQUU7WUFDckMsSUFBSSxDQUFDLElBQUksSUFBSSxPQUFPLElBQUksS0FBSyxRQUFRLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDNUQsTUFBTSxJQUFJLEtBQUssQ0FBQyxzRUFBc0UsQ0FBQyxDQUFDO2FBQ3pGO1lBRUQsTUFBTSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDO1lBRXJDLElBQUksQ0FBQyxPQUFPLElBQUksT0FBTyxPQUFPLEtBQUssUUFBUSxFQUFFO2dCQUMzQyxNQUFNLElBQUksS0FBSyxDQUNiLHFDQUFxQyxDQUN0QyxDQUFDO2FBQ0g7WUFDRCxPQUFPLElBQUksK0JBQXFCLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN4RCxDQUFDO0tBQ0Y7Q0FDRixDQUFDO0FBRUYsV0FBVztBQUVYLFNBQVMsa0JBQWtCLENBQUksSUFBWSxFQUFFLEdBQXFCO0lBQ2hFLE1BQU0sQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3ZDLE9BQU8sSUFBSSwwQkFBZ0IsQ0FDekIsSUFBSSxFQUNKLE9BQU8sSUFBSSwwQkFBa0IsQ0FBQyxJQUFJLENBQUMsRUFDbkMsSUFBSSxDQUNMLENBQUM7QUFDSixDQUFDO0FBRUQsU0FBUyxtQkFBbUIsQ0FBSSxJQUFZLEVBQUUsR0FBcUI7SUFDakUsTUFBTSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDdkMsT0FBTyxJQUFJLCtCQUFxQixDQUM5QixJQUFJLEVBQ0osT0FBTyxJQUFJLDBCQUFrQixDQUFDLElBQUksQ0FBQyxFQUNuQyxJQUFJLENBQ0wsQ0FBQztBQUNKLENBQUM7QUFFRCxTQUFTLFNBQVMsQ0FBSSxHQUFxQjtJQUN6QyxJQUFJLEdBQUcsRUFBRTtRQUNQLElBQUksT0FBTyxHQUFHLEtBQUssUUFBUSxFQUFFO1lBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNkO2FBQU0sSUFBSSxPQUFPLEdBQUcsS0FBSyxRQUFRLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ3pELE1BQU0sRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLEdBQUcsR0FBRyxDQUFDO1lBRTlCLElBQUksT0FBTyxJQUFJLE9BQU8sT0FBTyxLQUFLLFFBQVEsRUFBRTtnQkFDMUMsTUFBTSxJQUFJLEtBQUssQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO2FBQ2pEO1lBQ0QsT0FBTyxDQUFDLE9BQU8sSUFBSSxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDckM7S0FDRjtJQUNELE9BQU8sRUFBRSxDQUFDO0FBQ1osQ0FBQyJ9

/***/ }),

/***/ "./node_modules/eth-rpc-errors/dist/index.js":
/*!***************************************************!*\
  !*** ./node_modules/eth-rpc-errors/dist/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getMessageFromCode = exports.serializeError = exports.EthereumProviderError = exports.EthereumRpcError = exports.ethErrors = exports.errorCodes = void 0;
const classes_1 = __webpack_require__(/*! ./classes */ "./node_modules/eth-rpc-errors/dist/classes.js");
Object.defineProperty(exports, "EthereumRpcError", ({ enumerable: true, get: function () { return classes_1.EthereumRpcError; } }));
Object.defineProperty(exports, "EthereumProviderError", ({ enumerable: true, get: function () { return classes_1.EthereumProviderError; } }));
const utils_1 = __webpack_require__(/*! ./utils */ "./node_modules/eth-rpc-errors/dist/utils.js");
Object.defineProperty(exports, "serializeError", ({ enumerable: true, get: function () { return utils_1.serializeError; } }));
Object.defineProperty(exports, "getMessageFromCode", ({ enumerable: true, get: function () { return utils_1.getMessageFromCode; } }));
const errors_1 = __webpack_require__(/*! ./errors */ "./node_modules/eth-rpc-errors/dist/errors.js");
Object.defineProperty(exports, "ethErrors", ({ enumerable: true, get: function () { return errors_1.ethErrors; } }));
const error_constants_1 = __webpack_require__(/*! ./error-constants */ "./node_modules/eth-rpc-errors/dist/error-constants.js");
Object.defineProperty(exports, "errorCodes", ({ enumerable: true, get: function () { return error_constants_1.errorCodes; } }));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsdUNBQW9FO0FBVWxFLGlHQVZPLDBCQUFnQixPQVVQO0FBQ2hCLHNHQVh5QiwrQkFBcUIsT0FXekI7QUFWdkIsbUNBRWlCO0FBU2YsK0ZBVkEsc0JBQWMsT0FVQTtBQUNkLG1HQVhnQiwwQkFBa0IsT0FXaEI7QUFUcEIscUNBQXFDO0FBS25DLDBGQUxPLGtCQUFTLE9BS1A7QUFKWCx1REFBK0M7QUFHN0MsMkZBSE8sNEJBQVUsT0FHUCJ9

/***/ }),

/***/ "./node_modules/eth-rpc-errors/dist/utils.js":
/*!***************************************************!*\
  !*** ./node_modules/eth-rpc-errors/dist/utils.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.serializeError = exports.isValidCode = exports.getMessageFromCode = exports.JSON_RPC_SERVER_ERROR_MESSAGE = void 0;
const error_constants_1 = __webpack_require__(/*! ./error-constants */ "./node_modules/eth-rpc-errors/dist/error-constants.js");
const classes_1 = __webpack_require__(/*! ./classes */ "./node_modules/eth-rpc-errors/dist/classes.js");
const FALLBACK_ERROR_CODE = error_constants_1.errorCodes.rpc.internal;
const FALLBACK_MESSAGE = 'Unspecified error message. This is a bug, please report it.';
const FALLBACK_ERROR = {
    code: FALLBACK_ERROR_CODE,
    message: getMessageFromCode(FALLBACK_ERROR_CODE),
};
exports.JSON_RPC_SERVER_ERROR_MESSAGE = 'Unspecified server error.';
/**
 * Gets the message for a given code, or a fallback message if the code has
 * no corresponding message.
 */
function getMessageFromCode(code, fallbackMessage = FALLBACK_MESSAGE) {
    if (Number.isInteger(code)) {
        const codeString = code.toString();
        if (hasKey(error_constants_1.errorValues, codeString)) {
            return error_constants_1.errorValues[codeString].message;
        }
        if (isJsonRpcServerError(code)) {
            return exports.JSON_RPC_SERVER_ERROR_MESSAGE;
        }
    }
    return fallbackMessage;
}
exports.getMessageFromCode = getMessageFromCode;
/**
 * Returns whether the given code is valid.
 * A code is only valid if it has a message.
 */
function isValidCode(code) {
    if (!Number.isInteger(code)) {
        return false;
    }
    const codeString = code.toString();
    if (error_constants_1.errorValues[codeString]) {
        return true;
    }
    if (isJsonRpcServerError(code)) {
        return true;
    }
    return false;
}
exports.isValidCode = isValidCode;
/**
 * Serializes the given error to an Ethereum JSON RPC-compatible error object.
 * Merely copies the given error's values if it is already compatible.
 * If the given error is not fully compatible, it will be preserved on the
 * returned object's data.originalError property.
 */
function serializeError(error, { fallbackError = FALLBACK_ERROR, shouldIncludeStack = false, } = {}) {
    var _a, _b;
    if (!fallbackError ||
        !Number.isInteger(fallbackError.code) ||
        typeof fallbackError.message !== 'string') {
        throw new Error('Must provide fallback error with integer number code and string message.');
    }
    if (error instanceof classes_1.EthereumRpcError) {
        return error.serialize();
    }
    const serialized = {};
    if (error &&
        typeof error === 'object' &&
        !Array.isArray(error) &&
        hasKey(error, 'code') &&
        isValidCode(error.code)) {
        const _error = error;
        serialized.code = _error.code;
        if (_error.message && typeof _error.message === 'string') {
            serialized.message = _error.message;
            if (hasKey(_error, 'data')) {
                serialized.data = _error.data;
            }
        }
        else {
            serialized.message = getMessageFromCode(serialized.code);
            serialized.data = { originalError: assignOriginalError(error) };
        }
    }
    else {
        serialized.code = fallbackError.code;
        const message = (_a = error) === null || _a === void 0 ? void 0 : _a.message;
        serialized.message = (message && typeof message === 'string'
            ? message
            : fallbackError.message);
        serialized.data = { originalError: assignOriginalError(error) };
    }
    const stack = (_b = error) === null || _b === void 0 ? void 0 : _b.stack;
    if (shouldIncludeStack && error && stack && typeof stack === 'string') {
        serialized.stack = stack;
    }
    return serialized;
}
exports.serializeError = serializeError;
// Internal
function isJsonRpcServerError(code) {
    return code >= -32099 && code <= -32000;
}
function assignOriginalError(error) {
    if (error && typeof error === 'object' && !Array.isArray(error)) {
        return Object.assign({}, error);
    }
    return error;
}
function hasKey(obj, key) {
    return Object.prototype.hasOwnProperty.call(obj, key);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsdURBQTREO0FBQzVELHVDQUF5RTtBQUV6RSxNQUFNLG1CQUFtQixHQUFHLDRCQUFVLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQztBQUNwRCxNQUFNLGdCQUFnQixHQUFHLDZEQUE2RCxDQUFDO0FBQ3ZGLE1BQU0sY0FBYyxHQUErQjtJQUNqRCxJQUFJLEVBQUUsbUJBQW1CO0lBQ3pCLE9BQU8sRUFBRSxrQkFBa0IsQ0FBQyxtQkFBbUIsQ0FBQztDQUNqRCxDQUFDO0FBRVcsUUFBQSw2QkFBNkIsR0FBRywyQkFBMkIsQ0FBQztBQUl6RTs7O0dBR0c7QUFDSCxTQUFnQixrQkFBa0IsQ0FDaEMsSUFBWSxFQUNaLGtCQUEwQixnQkFBZ0I7SUFFMUMsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFO1FBQzFCLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUVuQyxJQUFJLE1BQU0sQ0FBQyw2QkFBVyxFQUFFLFVBQVUsQ0FBQyxFQUFFO1lBQ25DLE9BQU8sNkJBQVcsQ0FBQyxVQUEyQixDQUFDLENBQUMsT0FBTyxDQUFDO1NBQ3pEO1FBQ0QsSUFBSSxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUM5QixPQUFPLHFDQUE2QixDQUFDO1NBQ3RDO0tBQ0Y7SUFDRCxPQUFPLGVBQWUsQ0FBQztBQUN6QixDQUFDO0FBZkQsZ0RBZUM7QUFFRDs7O0dBR0c7QUFDSCxTQUFnQixXQUFXLENBQUMsSUFBWTtJQUN0QyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUMzQixPQUFPLEtBQUssQ0FBQztLQUNkO0lBRUQsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ25DLElBQUksNkJBQVcsQ0FBQyxVQUEyQixDQUFDLEVBQUU7UUFDNUMsT0FBTyxJQUFJLENBQUM7S0FDYjtJQUVELElBQUksb0JBQW9CLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFDOUIsT0FBTyxJQUFJLENBQUM7S0FDYjtJQUNELE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQztBQWRELGtDQWNDO0FBRUQ7Ozs7O0dBS0c7QUFDSCxTQUFnQixjQUFjLENBQzVCLEtBQWMsRUFDZCxFQUNFLGFBQWEsR0FBRyxjQUFjLEVBQzlCLGtCQUFrQixHQUFHLEtBQUssR0FDM0IsR0FBRyxFQUFFOztJQUdOLElBQ0UsQ0FBQyxhQUFhO1FBQ2QsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUM7UUFDckMsT0FBTyxhQUFhLENBQUMsT0FBTyxLQUFLLFFBQVEsRUFDekM7UUFDQSxNQUFNLElBQUksS0FBSyxDQUNiLDBFQUEwRSxDQUMzRSxDQUFDO0tBQ0g7SUFFRCxJQUFJLEtBQUssWUFBWSwwQkFBZ0IsRUFBRTtRQUNyQyxPQUFPLEtBQUssQ0FBQyxTQUFTLEVBQUUsQ0FBQztLQUMxQjtJQUVELE1BQU0sVUFBVSxHQUF3QyxFQUFFLENBQUM7SUFFM0QsSUFDRSxLQUFLO1FBQ0wsT0FBTyxLQUFLLEtBQUssUUFBUTtRQUN6QixDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO1FBQ3JCLE1BQU0sQ0FBQyxLQUFnQyxFQUFFLE1BQU0sQ0FBQztRQUNoRCxXQUFXLENBQUUsS0FBb0MsQ0FBQyxJQUFJLENBQUMsRUFDdkQ7UUFDQSxNQUFNLE1BQU0sR0FBRyxLQUE0QyxDQUFDO1FBQzVELFVBQVUsQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztRQUU5QixJQUFJLE1BQU0sQ0FBQyxPQUFPLElBQUksT0FBTyxNQUFNLENBQUMsT0FBTyxLQUFLLFFBQVEsRUFBRTtZQUN4RCxVQUFVLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUM7WUFFcEMsSUFBSSxNQUFNLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxFQUFFO2dCQUMxQixVQUFVLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUM7YUFDL0I7U0FDRjthQUFNO1lBQ0wsVUFBVSxDQUFDLE9BQU8sR0FBRyxrQkFBa0IsQ0FDcEMsVUFBeUMsQ0FBQyxJQUFJLENBQ2hELENBQUM7WUFFRixVQUFVLENBQUMsSUFBSSxHQUFHLEVBQUUsYUFBYSxFQUFFLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUM7U0FDakU7S0FDRjtTQUFNO1FBQ0wsVUFBVSxDQUFDLElBQUksR0FBRyxhQUFhLENBQUMsSUFBSSxDQUFDO1FBRXJDLE1BQU0sT0FBTyxTQUFJLEtBQWEsMENBQUUsT0FBTyxDQUFDO1FBRXhDLFVBQVUsQ0FBQyxPQUFPLEdBQUcsQ0FDbkIsT0FBTyxJQUFJLE9BQU8sT0FBTyxLQUFLLFFBQVE7WUFDcEMsQ0FBQyxDQUFDLE9BQU87WUFDVCxDQUFDLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FDMUIsQ0FBQztRQUNGLFVBQVUsQ0FBQyxJQUFJLEdBQUcsRUFBRSxhQUFhLEVBQUUsbUJBQW1CLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQztLQUNqRTtJQUVELE1BQU0sS0FBSyxTQUFJLEtBQWEsMENBQUUsS0FBSyxDQUFDO0lBRXBDLElBQUksa0JBQWtCLElBQUksS0FBSyxJQUFJLEtBQUssSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLEVBQUU7UUFDckUsVUFBVSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7S0FDMUI7SUFDRCxPQUFPLFVBQXdDLENBQUM7QUFDbEQsQ0FBQztBQWxFRCx3Q0FrRUM7QUFFRCxXQUFXO0FBRVgsU0FBUyxvQkFBb0IsQ0FBQyxJQUFZO0lBQ3hDLE9BQU8sSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQztBQUMxQyxDQUFDO0FBRUQsU0FBUyxtQkFBbUIsQ0FBQyxLQUFjO0lBQ3pDLElBQUksS0FBSyxJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFDL0QsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztLQUNqQztJQUNELE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQztBQUVELFNBQVMsTUFBTSxDQUFDLEdBQTRCLEVBQUUsR0FBVztJQUN2RCxPQUFPLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDeEQsQ0FBQyJ9

/***/ }),

/***/ "./node_modules/events/events.js":
/*!***************************************!*\
  !*** ./node_modules/events/events.js ***!
  \***************************************/
/***/ ((module) => {

"use strict";
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


/***/ }),

/***/ "./node_modules/fast-safe-stringify/index.js":
/*!***************************************************!*\
  !*** ./node_modules/fast-safe-stringify/index.js ***!
  \***************************************************/
/***/ ((module) => {

module.exports = stringify
stringify.default = stringify
stringify.stable = deterministicStringify
stringify.stableStringify = deterministicStringify

var LIMIT_REPLACE_NODE = '[...]'
var CIRCULAR_REPLACE_NODE = '[Circular]'

var arr = []
var replacerStack = []

function defaultOptions () {
  return {
    depthLimit: Number.MAX_SAFE_INTEGER,
    edgesLimit: Number.MAX_SAFE_INTEGER
  }
}

// Regular stringify
function stringify (obj, replacer, spacer, options) {
  if (typeof options === 'undefined') {
    options = defaultOptions()
  }

  decirc(obj, '', 0, [], undefined, 0, options)
  var res
  try {
    if (replacerStack.length === 0) {
      res = JSON.stringify(obj, replacer, spacer)
    } else {
      res = JSON.stringify(obj, replaceGetterValues(replacer), spacer)
    }
  } catch (_) {
    return JSON.stringify('[unable to serialize, circular reference is too complex to analyze]')
  } finally {
    while (arr.length !== 0) {
      var part = arr.pop()
      if (part.length === 4) {
        Object.defineProperty(part[0], part[1], part[3])
      } else {
        part[0][part[1]] = part[2]
      }
    }
  }
  return res
}

function setReplace (replace, val, k, parent) {
  var propertyDescriptor = Object.getOwnPropertyDescriptor(parent, k)
  if (propertyDescriptor.get !== undefined) {
    if (propertyDescriptor.configurable) {
      Object.defineProperty(parent, k, { value: replace })
      arr.push([parent, k, val, propertyDescriptor])
    } else {
      replacerStack.push([val, k, replace])
    }
  } else {
    parent[k] = replace
    arr.push([parent, k, val])
  }
}

function decirc (val, k, edgeIndex, stack, parent, depth, options) {
  depth += 1
  var i
  if (typeof val === 'object' && val !== null) {
    for (i = 0; i < stack.length; i++) {
      if (stack[i] === val) {
        setReplace(CIRCULAR_REPLACE_NODE, val, k, parent)
        return
      }
    }

    if (
      typeof options.depthLimit !== 'undefined' &&
      depth > options.depthLimit
    ) {
      setReplace(LIMIT_REPLACE_NODE, val, k, parent)
      return
    }

    if (
      typeof options.edgesLimit !== 'undefined' &&
      edgeIndex + 1 > options.edgesLimit
    ) {
      setReplace(LIMIT_REPLACE_NODE, val, k, parent)
      return
    }

    stack.push(val)
    // Optimize for Arrays. Big arrays could kill the performance otherwise!
    if (Array.isArray(val)) {
      for (i = 0; i < val.length; i++) {
        decirc(val[i], i, i, stack, val, depth, options)
      }
    } else {
      var keys = Object.keys(val)
      for (i = 0; i < keys.length; i++) {
        var key = keys[i]
        decirc(val[key], key, i, stack, val, depth, options)
      }
    }
    stack.pop()
  }
}

// Stable-stringify
function compareFunction (a, b) {
  if (a < b) {
    return -1
  }
  if (a > b) {
    return 1
  }
  return 0
}

function deterministicStringify (obj, replacer, spacer, options) {
  if (typeof options === 'undefined') {
    options = defaultOptions()
  }

  var tmp = deterministicDecirc(obj, '', 0, [], undefined, 0, options) || obj
  var res
  try {
    if (replacerStack.length === 0) {
      res = JSON.stringify(tmp, replacer, spacer)
    } else {
      res = JSON.stringify(tmp, replaceGetterValues(replacer), spacer)
    }
  } catch (_) {
    return JSON.stringify('[unable to serialize, circular reference is too complex to analyze]')
  } finally {
    // Ensure that we restore the object as it was.
    while (arr.length !== 0) {
      var part = arr.pop()
      if (part.length === 4) {
        Object.defineProperty(part[0], part[1], part[3])
      } else {
        part[0][part[1]] = part[2]
      }
    }
  }
  return res
}

function deterministicDecirc (val, k, edgeIndex, stack, parent, depth, options) {
  depth += 1
  var i
  if (typeof val === 'object' && val !== null) {
    for (i = 0; i < stack.length; i++) {
      if (stack[i] === val) {
        setReplace(CIRCULAR_REPLACE_NODE, val, k, parent)
        return
      }
    }
    try {
      if (typeof val.toJSON === 'function') {
        return
      }
    } catch (_) {
      return
    }

    if (
      typeof options.depthLimit !== 'undefined' &&
      depth > options.depthLimit
    ) {
      setReplace(LIMIT_REPLACE_NODE, val, k, parent)
      return
    }

    if (
      typeof options.edgesLimit !== 'undefined' &&
      edgeIndex + 1 > options.edgesLimit
    ) {
      setReplace(LIMIT_REPLACE_NODE, val, k, parent)
      return
    }

    stack.push(val)
    // Optimize for Arrays. Big arrays could kill the performance otherwise!
    if (Array.isArray(val)) {
      for (i = 0; i < val.length; i++) {
        deterministicDecirc(val[i], i, i, stack, val, depth, options)
      }
    } else {
      // Create a temporary object in the required way
      var tmp = {}
      var keys = Object.keys(val).sort(compareFunction)
      for (i = 0; i < keys.length; i++) {
        var key = keys[i]
        deterministicDecirc(val[key], key, i, stack, val, depth, options)
        tmp[key] = val[key]
      }
      if (typeof parent !== 'undefined') {
        arr.push([parent, k, val])
        parent[k] = tmp
      } else {
        return tmp
      }
    }
    stack.pop()
  }
}

// wraps replacer function to handle values we couldn't replace
// and mark them as replaced value
function replaceGetterValues (replacer) {
  replacer =
    typeof replacer !== 'undefined'
      ? replacer
      : function (k, v) {
        return v
      }
  return function (key, val) {
    if (replacerStack.length > 0) {
      for (var i = 0; i < replacerStack.length; i++) {
        var part = replacerStack[i]
        if (part[1] === key && part[0] === val) {
          val = part[2]
          replacerStack.splice(i, 1)
          break
        }
      }
    }
    return replacer.call(this, key, val)
  }
}


/***/ }),

/***/ "./node_modules/p-queue/node_modules/eventemitter3/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/p-queue/node_modules/eventemitter3/index.js ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";


var has = Object.prototype.hasOwnProperty
  , prefix = '~';

/**
 * Constructor to create a storage for our `EE` objects.
 * An `Events` instance is a plain object whose properties are event names.
 *
 * @constructor
 * @private
 */
function Events() {}

//
// We try to not inherit from `Object.prototype`. In some engines creating an
// instance in this way is faster than calling `Object.create(null)` directly.
// If `Object.create(null)` is not supported we prefix the event names with a
// character to make sure that the built-in object properties are not
// overridden or used as an attack vector.
//
if (Object.create) {
  Events.prototype = Object.create(null);

  //
  // This hack is needed because the `__proto__` property is still inherited in
  // some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.
  //
  if (!new Events().__proto__) prefix = false;
}

/**
 * Representation of a single event listener.
 *
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
 * @constructor
 * @private
 */
function EE(fn, context, once) {
  this.fn = fn;
  this.context = context;
  this.once = once || false;
}

/**
 * Add a listener for a given event.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} once Specify if the listener is a one-time listener.
 * @returns {EventEmitter}
 * @private
 */
function addListener(emitter, event, fn, context, once) {
  if (typeof fn !== 'function') {
    throw new TypeError('The listener must be a function');
  }

  var listener = new EE(fn, context || emitter, once)
    , evt = prefix ? prefix + event : event;

  if (!emitter._events[evt]) emitter._events[evt] = listener, emitter._eventsCount++;
  else if (!emitter._events[evt].fn) emitter._events[evt].push(listener);
  else emitter._events[evt] = [emitter._events[evt], listener];

  return emitter;
}

/**
 * Clear event by name.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} evt The Event name.
 * @private
 */
function clearEvent(emitter, evt) {
  if (--emitter._eventsCount === 0) emitter._events = new Events();
  else delete emitter._events[evt];
}

/**
 * Minimal `EventEmitter` interface that is molded against the Node.js
 * `EventEmitter` interface.
 *
 * @constructor
 * @public
 */
function EventEmitter() {
  this._events = new Events();
  this._eventsCount = 0;
}

/**
 * Return an array listing the events for which the emitter has registered
 * listeners.
 *
 * @returns {Array}
 * @public
 */
EventEmitter.prototype.eventNames = function eventNames() {
  var names = []
    , events
    , name;

  if (this._eventsCount === 0) return names;

  for (name in (events = this._events)) {
    if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
  }

  if (Object.getOwnPropertySymbols) {
    return names.concat(Object.getOwnPropertySymbols(events));
  }

  return names;
};

/**
 * Return the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Array} The registered listeners.
 * @public
 */
EventEmitter.prototype.listeners = function listeners(event) {
  var evt = prefix ? prefix + event : event
    , handlers = this._events[evt];

  if (!handlers) return [];
  if (handlers.fn) return [handlers.fn];

  for (var i = 0, l = handlers.length, ee = new Array(l); i < l; i++) {
    ee[i] = handlers[i].fn;
  }

  return ee;
};

/**
 * Return the number of listeners listening to a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Number} The number of listeners.
 * @public
 */
EventEmitter.prototype.listenerCount = function listenerCount(event) {
  var evt = prefix ? prefix + event : event
    , listeners = this._events[evt];

  if (!listeners) return 0;
  if (listeners.fn) return 1;
  return listeners.length;
};

/**
 * Calls each of the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Boolean} `true` if the event had listeners, else `false`.
 * @public
 */
EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
  var evt = prefix ? prefix + event : event;

  if (!this._events[evt]) return false;

  var listeners = this._events[evt]
    , len = arguments.length
    , args
    , i;

  if (listeners.fn) {
    if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);

    switch (len) {
      case 1: return listeners.fn.call(listeners.context), true;
      case 2: return listeners.fn.call(listeners.context, a1), true;
      case 3: return listeners.fn.call(listeners.context, a1, a2), true;
      case 4: return listeners.fn.call(listeners.context, a1, a2, a3), true;
      case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
      case 6: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
    }

    for (i = 1, args = new Array(len -1); i < len; i++) {
      args[i - 1] = arguments[i];
    }

    listeners.fn.apply(listeners.context, args);
  } else {
    var length = listeners.length
      , j;

    for (i = 0; i < length; i++) {
      if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);

      switch (len) {
        case 1: listeners[i].fn.call(listeners[i].context); break;
        case 2: listeners[i].fn.call(listeners[i].context, a1); break;
        case 3: listeners[i].fn.call(listeners[i].context, a1, a2); break;
        case 4: listeners[i].fn.call(listeners[i].context, a1, a2, a3); break;
        default:
          if (!args) for (j = 1, args = new Array(len -1); j < len; j++) {
            args[j - 1] = arguments[j];
          }

          listeners[i].fn.apply(listeners[i].context, args);
      }
    }
  }

  return true;
};

/**
 * Add a listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.on = function on(event, fn, context) {
  return addListener(this, event, fn, context, false);
};

/**
 * Add a one-time listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.once = function once(event, fn, context) {
  return addListener(this, event, fn, context, true);
};

/**
 * Remove the listeners of a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn Only remove the listeners that match this function.
 * @param {*} context Only remove the listeners that have this context.
 * @param {Boolean} once Only remove one-time listeners.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
  var evt = prefix ? prefix + event : event;

  if (!this._events[evt]) return this;
  if (!fn) {
    clearEvent(this, evt);
    return this;
  }

  var listeners = this._events[evt];

  if (listeners.fn) {
    if (
      listeners.fn === fn &&
      (!once || listeners.once) &&
      (!context || listeners.context === context)
    ) {
      clearEvent(this, evt);
    }
  } else {
    for (var i = 0, events = [], length = listeners.length; i < length; i++) {
      if (
        listeners[i].fn !== fn ||
        (once && !listeners[i].once) ||
        (context && listeners[i].context !== context)
      ) {
        events.push(listeners[i]);
      }
    }

    //
    // Reset the array, or remove it completely if we have no more listeners.
    //
    if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
    else clearEvent(this, evt);
  }

  return this;
};

/**
 * Remove all listeners, or those of the specified event.
 *
 * @param {(String|Symbol)} [event] The event name.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
  var evt;

  if (event) {
    evt = prefix ? prefix + event : event;
    if (this._events[evt]) clearEvent(this, evt);
  } else {
    this._events = new Events();
    this._eventsCount = 0;
  }

  return this;
};

//
// Alias methods names because people roll like that.
//
EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
EventEmitter.prototype.addListener = EventEmitter.prototype.on;

//
// Expose the prefix.
//
EventEmitter.prefixed = prefix;

//
// Allow `EventEmitter` to be imported as module namespace.
//
EventEmitter.EventEmitter = EventEmitter;

//
// Expose the module.
//
if (true) {
  module.exports = EventEmitter;
}


/***/ }),

/***/ "./src/content-script/index.ts":
/*!*************************************!*\
  !*** ./src/content-script/index.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_message__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/message */ "./src/utils/message.ts");
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nanoid */ "./node_modules/nanoid/index.browser.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var webextension_polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! webextension-polyfill */ "./node_modules/webextension-polyfill/dist/browser-polyfill.js");
/* harmony import */ var webextension_polyfill__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(webextension_polyfill__WEBPACK_IMPORTED_MODULE_1__);




const channelName = (0,nanoid__WEBPACK_IMPORTED_MODULE_2__.nanoid)();
const isOpera = /Opera|OPR\//i.test(navigator.userAgent);
localStorage.setItem('lux:channelName', channelName);
localStorage.setItem('lux:isDefaultWallet', 'true');
localStorage.setItem('lux:uuid', (0,uuid__WEBPACK_IMPORTED_MODULE_3__["default"])());
localStorage.setItem('lux:isOpera', isOpera.toString());
const injectProviderScript = (isDefaultWallet) => {
    // the script element with src won't execute immediately
    // use inline script element instead!
    const container = document.head || document.documentElement;
    const ele = document.createElement('script');
    // in prevent of webpack optimized code do some magic(e.g. double/sigle quote wrap),
    // separate content assignment to two line
    // use AssetReplacePlugin to replace pageprovider content
    ele.setAttribute('src', webextension_polyfill__WEBPACK_IMPORTED_MODULE_1___default().runtime.getURL('pageProvider.js'));
    container.insertBefore(ele, container.children[0]);
    container.removeChild(ele);
};
const { BroadcastChannelMessage, PortMessage } = _utils_message__WEBPACK_IMPORTED_MODULE_0__.Message;
const pm = new PortMessage().connect();
const bcm = new BroadcastChannelMessage(channelName).listen((data) => pm.request(data));
// background notification
pm.on('message', (data) => bcm.send('message', data));
document.addEventListener('beforeunload', () => {
    bcm.dispose();
    pm.dispose();
});
injectProviderScript(false);


/***/ }),

/***/ "./src/utils/message.ts":
/*!******************************!*\
  !*** ./src/utils/message.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Message": () => (/* binding */ Message)
/* harmony export */ });
/* harmony import */ var _message_broadcastChannelMessage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./message/broadcastChannelMessage */ "./src/utils/message/broadcastChannelMessage.ts");
/* harmony import */ var _message_portMessage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./message/portMessage */ "./src/utils/message/portMessage.ts");


const Message = {
    BroadcastChannelMessage: _message_broadcastChannelMessage__WEBPACK_IMPORTED_MODULE_0__["default"],
    PortMessage: _message_portMessage__WEBPACK_IMPORTED_MODULE_1__["default"],
};


/***/ }),

/***/ "./src/utils/message/broadcastChannelMessage.ts":
/*!******************************************************!*\
  !*** ./src/utils/message/broadcastChannelMessage.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BroadcastChannelMessage)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/utils/message/index.ts");

class BroadcastChannelMessage extends _index__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(name) {
        super();
        this.connect = () => {
            this._channel.onmessage = ({ data: { type, data } }) => {
                if (type === 'message') {
                    this.emit('message', data);
                }
                else if (type === 'response') {
                    this.onResponse(data);
                }
            };
            return this;
        };
        this.listen = (listenCallback) => {
            this.listenCallback = listenCallback;
            this._channel.onmessage = ({ data: { type, data } }) => {
                if (type === 'request') {
                    this.onRequest(data);
                }
            };
            return this;
        };
        this.send = (type, data) => {
            this._channel.postMessage({
                type,
                data,
            });
        };
        this.dispose = () => {
            this._dispose();
            this._channel.close();
        };
        if (!name) {
            throw new Error('the broadcastChannel name is missing');
        }
        this._channel = new BroadcastChannel(name);
    }
}


/***/ }),

/***/ "./src/utils/message/index.ts":
/*!************************************!*\
  !*** ./src/utils/message/index.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! events */ "./node_modules/events/events.js");
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var eth_rpc_errors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! eth-rpc-errors */ "./node_modules/eth-rpc-errors/dist/index.js");
/* harmony import */ var p_queue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! p-queue */ "./node_modules/p-queue/dist/index.js");
/**
 * this script is live in content-script / dapp's page
 */



const pQueue = new p_queue__WEBPACK_IMPORTED_MODULE_2__["default"]({ concurrency: 1000 });
class Message extends events__WEBPACK_IMPORTED_MODULE_0__.EventEmitter {
    constructor() {
        super(...arguments);
        // available id list
        // max concurrent request limit
        this._requestIdPool = [...Array(1000).keys()];
        this._EVENT_PRE = 'ETH_WALLET_';
        this._waitingMap = new Map();
        this.request = (data) => {
            return pQueue.add(() => {
                if (!this._requestIdPool.length) {
                    throw eth_rpc_errors__WEBPACK_IMPORTED_MODULE_1__.ethErrors.rpc.limitExceeded();
                }
                const ident = this._requestIdPool.shift();
                return new Promise((resolve, reject) => {
                    this._waitingMap.set(ident, {
                        data,
                        resolve,
                        reject,
                    });
                    this.send('request', { ident, data });
                });
            });
        };
        this.onResponse = async ({ ident, res, err } = {}) => {
            // the url may update
            if (!this._waitingMap.has(ident)) {
                return;
            }
            const { resolve, reject } = this._waitingMap.get(ident);
            this._requestIdPool.push(ident);
            this._waitingMap.delete(ident);
            err ? reject(err) : resolve(res);
        };
        this.onRequest = async ({ ident, data }) => {
            if (this.listenCallback) {
                let res, err;
                try {
                    res = await this.listenCallback(data);
                }
                catch (e) {
                    err = {
                        message: e.message,
                        stack: e.stack,
                    };
                    e.code && (err.code = e.code);
                    e.data && (err.data = e.data);
                }
                this.send('response', { ident, res, err });
            }
        };
        this._dispose = () => {
            for (const request of this._waitingMap.values()) {
                request.reject(eth_rpc_errors__WEBPACK_IMPORTED_MODULE_1__.ethErrors.provider.userRejectedRequest());
            }
            this._waitingMap.clear();
        };
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Message);


/***/ }),

/***/ "./src/utils/message/portMessage.ts":
/*!******************************************!*\
  !*** ./src/utils/message/portMessage.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var webextension_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webextension-polyfill */ "./node_modules/webextension-polyfill/dist/browser-polyfill.js");
/* harmony import */ var webextension_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(webextension_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./src/utils/message/index.ts");


class PortMessage extends _index__WEBPACK_IMPORTED_MODULE_1__["default"] {
    constructor(port) {
        super();
        this.port = null;
        this.connect = (name) => {
            this.port = webextension_polyfill__WEBPACK_IMPORTED_MODULE_0___default().runtime.connect(undefined, name ? { name } : undefined);
            this.port.onMessage.addListener(({ _type_, data }) => {
                if (_type_ === `${this._EVENT_PRE}message`) {
                    this.emit('message', data);
                    return;
                }
                if (_type_ === `${this._EVENT_PRE}response`) {
                    this.onResponse(data);
                }
            });
            return this;
        };
        this.listen = (listenCallback) => {
            if (!this.port)
                return;
            this.listenCallback = listenCallback;
            this.port.onMessage.addListener(({ _type_, data }) => {
                if (_type_ === `${this._EVENT_PRE}request`) {
                    this.onRequest(data);
                }
            });
            return this;
        };
        this.send = (type, data) => {
            if (!this.port)
                return;
            try {
                this.port.postMessage({ _type_: `${this._EVENT_PRE}${type}`, data });
            }
            catch (e) {
                // DO NOTHING BUT CATCH THIS ERROR
            }
        };
        this.dispose = () => {
            this._dispose();
            this.port?.disconnect();
        };
        if (port) {
            this.port = port;
        }
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PortMessage);


/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/native.js":
/*!******************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/native.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  randomUUID
});

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ rng)
/* harmony export */ });
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
let getRandomValues;
const rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "unsafeStringify": () => (/* binding */ unsafeStringify)
/* harmony export */ });
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/esm-browser/validate.js");

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

const byteToHex = [];

for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).slice(1));
}

function unsafeStringify(arr, offset = 0) {
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
}

function stringify(arr, offset = 0) {
  const uuid = unsafeStringify(arr, offset); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _native_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./native.js */ "./node_modules/uuid/dist/esm-browser/native.js");
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rng.js */ "./node_modules/uuid/dist/esm-browser/rng.js");
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/esm-browser/stringify.js");




function v4(options, buf, offset) {
  if (_native_js__WEBPACK_IMPORTED_MODULE_0__["default"].randomUUID && !buf && !options) {
    return _native_js__WEBPACK_IMPORTED_MODULE_0__["default"].randomUUID();
  }

  options = options || {};
  const rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_1__["default"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (let i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_2__.unsafeStringify)(rnds);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ "./node_modules/uuid/dist/esm-browser/regex.js");


function validate(uuid) {
  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__["default"].test(uuid);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);

/***/ }),

/***/ "./node_modules/nanoid/index.browser.js":
/*!**********************************************!*\
  !*** ./node_modules/nanoid/index.browser.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "customAlphabet": () => (/* binding */ customAlphabet),
/* harmony export */   "customRandom": () => (/* binding */ customRandom),
/* harmony export */   "nanoid": () => (/* binding */ nanoid),
/* harmony export */   "random": () => (/* binding */ random),
/* harmony export */   "urlAlphabet": () => (/* reexport safe */ _url_alphabet_index_js__WEBPACK_IMPORTED_MODULE_0__.urlAlphabet)
/* harmony export */ });
/* harmony import */ var _url_alphabet_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./url-alphabet/index.js */ "./node_modules/nanoid/url-alphabet/index.js");

let random = bytes => crypto.getRandomValues(new Uint8Array(bytes))
let customRandom = (alphabet, defaultSize, getRandom) => {
  let mask = (2 << (Math.log(alphabet.length - 1) / Math.LN2)) - 1
  let step = -~((1.6 * mask * defaultSize) / alphabet.length)
  return (size = defaultSize) => {
    let id = ''
    while (true) {
      let bytes = getRandom(step)
      let j = step
      while (j--) {
        id += alphabet[bytes[j] & mask] || ''
        if (id.length === size) return id
      }
    }
  }
}
let customAlphabet = (alphabet, size = 21) =>
  customRandom(alphabet, size, random)
let nanoid = (size = 21) =>
  crypto.getRandomValues(new Uint8Array(size)).reduce((id, byte) => {
    byte &= 63
    if (byte < 36) {
      id += byte.toString(36)
    } else if (byte < 62) {
      id += (byte - 26).toString(36).toUpperCase()
    } else if (byte > 62) {
      id += '-'
    } else {
      id += '_'
    }
    return id
  }, '')



/***/ }),

/***/ "./node_modules/nanoid/url-alphabet/index.js":
/*!***************************************************!*\
  !*** ./node_modules/nanoid/url-alphabet/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "urlAlphabet": () => (/* binding */ urlAlphabet)
/* harmony export */ });
let urlAlphabet =
  'useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict'



/***/ }),

/***/ "./node_modules/p-queue/dist/index.js":
/*!********************************************!*\
  !*** ./node_modules/p-queue/dist/index.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AbortError": () => (/* binding */ AbortError),
/* harmony export */   "default": () => (/* binding */ PQueue)
/* harmony export */ });
/* harmony import */ var eventemitter3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! eventemitter3 */ "./node_modules/p-queue/node_modules/eventemitter3/index.js");
/* harmony import */ var p_timeout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! p-timeout */ "./node_modules/p-timeout/index.js");
/* harmony import */ var _priority_queue_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./priority-queue.js */ "./node_modules/p-queue/dist/priority-queue.js");
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _PQueue_instances, _PQueue_carryoverConcurrencyCount, _PQueue_isIntervalIgnored, _PQueue_intervalCount, _PQueue_intervalCap, _PQueue_interval, _PQueue_intervalEnd, _PQueue_intervalId, _PQueue_timeoutId, _PQueue_queue, _PQueue_queueClass, _PQueue_pendingCount, _PQueue_concurrency, _PQueue_isPaused, _PQueue_throwOnTimeout, _PQueue_doesIntervalAllowAnother_get, _PQueue_doesConcurrentAllowAnother_get, _PQueue_next, _PQueue_emitEvents, _PQueue_onResumeInterval, _PQueue_isIntervalPaused_get, _PQueue_tryToStartAnother, _PQueue_initializeIntervalIfNeeded, _PQueue_onInterval, _PQueue_processQueue, _PQueue_onEvent;



const timeoutError = new p_timeout__WEBPACK_IMPORTED_MODULE_1__.TimeoutError();
/**
The error thrown by `queue.add()` when a job is aborted before it is run. See `signal`.
*/
class AbortError extends Error {
}
/**
Promise queue with concurrency control.
*/
class PQueue extends eventemitter3__WEBPACK_IMPORTED_MODULE_0__ {
    constructor(options) {
        var _a, _b, _c, _d;
        super();
        _PQueue_instances.add(this);
        _PQueue_carryoverConcurrencyCount.set(this, void 0);
        _PQueue_isIntervalIgnored.set(this, void 0);
        _PQueue_intervalCount.set(this, 0);
        _PQueue_intervalCap.set(this, void 0);
        _PQueue_interval.set(this, void 0);
        _PQueue_intervalEnd.set(this, 0);
        _PQueue_intervalId.set(this, void 0);
        _PQueue_timeoutId.set(this, void 0);
        _PQueue_queue.set(this, void 0);
        _PQueue_queueClass.set(this, void 0);
        _PQueue_pendingCount.set(this, 0);
        // The `!` is needed because of https://github.com/microsoft/TypeScript/issues/32194
        _PQueue_concurrency.set(this, void 0);
        _PQueue_isPaused.set(this, void 0);
        _PQueue_throwOnTimeout.set(this, void 0);
        /**
        Per-operation timeout in milliseconds. Operations fulfill once `timeout` elapses if they haven't already.
    
        Applies to each future operation.
        */
        Object.defineProperty(this, "timeout", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
        options = {
            carryoverConcurrencyCount: false,
            intervalCap: Number.POSITIVE_INFINITY,
            interval: 0,
            concurrency: Number.POSITIVE_INFINITY,
            autoStart: true,
            queueClass: _priority_queue_js__WEBPACK_IMPORTED_MODULE_2__["default"],
            ...options,
        };
        if (!(typeof options.intervalCap === 'number' && options.intervalCap >= 1)) {
            throw new TypeError(`Expected \`intervalCap\` to be a number from 1 and up, got \`${(_b = (_a = options.intervalCap) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : ''}\` (${typeof options.intervalCap})`);
        }
        if (options.interval === undefined || !(Number.isFinite(options.interval) && options.interval >= 0)) {
            throw new TypeError(`Expected \`interval\` to be a finite number >= 0, got \`${(_d = (_c = options.interval) === null || _c === void 0 ? void 0 : _c.toString()) !== null && _d !== void 0 ? _d : ''}\` (${typeof options.interval})`);
        }
        __classPrivateFieldSet(this, _PQueue_carryoverConcurrencyCount, options.carryoverConcurrencyCount, "f");
        __classPrivateFieldSet(this, _PQueue_isIntervalIgnored, options.intervalCap === Number.POSITIVE_INFINITY || options.interval === 0, "f");
        __classPrivateFieldSet(this, _PQueue_intervalCap, options.intervalCap, "f");
        __classPrivateFieldSet(this, _PQueue_interval, options.interval, "f");
        __classPrivateFieldSet(this, _PQueue_queue, new options.queueClass(), "f");
        __classPrivateFieldSet(this, _PQueue_queueClass, options.queueClass, "f");
        this.concurrency = options.concurrency;
        this.timeout = options.timeout;
        __classPrivateFieldSet(this, _PQueue_throwOnTimeout, options.throwOnTimeout === true, "f");
        __classPrivateFieldSet(this, _PQueue_isPaused, options.autoStart === false, "f");
    }
    get concurrency() {
        return __classPrivateFieldGet(this, _PQueue_concurrency, "f");
    }
    set concurrency(newConcurrency) {
        if (!(typeof newConcurrency === 'number' && newConcurrency >= 1)) {
            throw new TypeError(`Expected \`concurrency\` to be a number from 1 and up, got \`${newConcurrency}\` (${typeof newConcurrency})`);
        }
        __classPrivateFieldSet(this, _PQueue_concurrency, newConcurrency, "f");
        __classPrivateFieldGet(this, _PQueue_instances, "m", _PQueue_processQueue).call(this);
    }
    /**
    Adds a sync or async task to the queue. Always returns a promise.
    */
    async add(fn, options = {}) {
        return new Promise((resolve, reject) => {
            const run = async () => {
                var _a;
                var _b, _c;
                __classPrivateFieldSet(this, _PQueue_pendingCount, (_b = __classPrivateFieldGet(this, _PQueue_pendingCount, "f"), _b++, _b), "f");
                __classPrivateFieldSet(this, _PQueue_intervalCount, (_c = __classPrivateFieldGet(this, _PQueue_intervalCount, "f"), _c++, _c), "f");
                try {
                    if ((_a = options.signal) === null || _a === void 0 ? void 0 : _a.aborted) {
                        // TODO: Use ABORT_ERR code when targeting Node.js 16 (https://nodejs.org/docs/latest-v16.x/api/errors.html#abort_err)
                        reject(new AbortError('The task was aborted.'));
                        return;
                    }
                    const operation = (this.timeout === undefined && options.timeout === undefined) ? fn({ signal: options.signal }) : (0,p_timeout__WEBPACK_IMPORTED_MODULE_1__["default"])(Promise.resolve(fn({ signal: options.signal })), (options.timeout === undefined ? this.timeout : options.timeout), () => {
                        if (options.throwOnTimeout === undefined ? __classPrivateFieldGet(this, _PQueue_throwOnTimeout, "f") : options.throwOnTimeout) {
                            reject(timeoutError);
                        }
                        return undefined;
                    });
                    const result = await operation;
                    resolve(result);
                    this.emit('completed', result);
                }
                catch (error) {
                    reject(error);
                    this.emit('error', error);
                }
                __classPrivateFieldGet(this, _PQueue_instances, "m", _PQueue_next).call(this);
            };
            __classPrivateFieldGet(this, _PQueue_queue, "f").enqueue(run, options);
            __classPrivateFieldGet(this, _PQueue_instances, "m", _PQueue_tryToStartAnother).call(this);
            this.emit('add');
        });
    }
    /**
    Same as `.add()`, but accepts an array of sync or async functions.

    @returns A promise that resolves when all functions are resolved.
    */
    async addAll(functions, options) {
        return Promise.all(functions.map(async (function_) => this.add(function_, options)));
    }
    /**
    Start (or resume) executing enqueued tasks within concurrency limit. No need to call this if queue is not paused (via `options.autoStart = false` or by `.pause()` method.)
    */
    start() {
        if (!__classPrivateFieldGet(this, _PQueue_isPaused, "f")) {
            return this;
        }
        __classPrivateFieldSet(this, _PQueue_isPaused, false, "f");
        __classPrivateFieldGet(this, _PQueue_instances, "m", _PQueue_processQueue).call(this);
        return this;
    }
    /**
    Put queue execution on hold.
    */
    pause() {
        __classPrivateFieldSet(this, _PQueue_isPaused, true, "f");
    }
    /**
    Clear the queue.
    */
    clear() {
        __classPrivateFieldSet(this, _PQueue_queue, new (__classPrivateFieldGet(this, _PQueue_queueClass, "f"))(), "f");
    }
    /**
    Can be called multiple times. Useful if you for example add additional items at a later time.

    @returns A promise that settles when the queue becomes empty.
    */
    async onEmpty() {
        // Instantly resolve if the queue is empty
        if (__classPrivateFieldGet(this, _PQueue_queue, "f").size === 0) {
            return;
        }
        await __classPrivateFieldGet(this, _PQueue_instances, "m", _PQueue_onEvent).call(this, 'empty');
    }
    /**
    @returns A promise that settles when the queue size is less than the given limit: `queue.size < limit`.

    If you want to avoid having the queue grow beyond a certain size you can `await queue.onSizeLessThan()` before adding a new item.

    Note that this only limits the number of items waiting to start. There could still be up to `concurrency` jobs already running that this call does not include in its calculation.
    */
    async onSizeLessThan(limit) {
        // Instantly resolve if the queue is empty.
        if (__classPrivateFieldGet(this, _PQueue_queue, "f").size < limit) {
            return;
        }
        await __classPrivateFieldGet(this, _PQueue_instances, "m", _PQueue_onEvent).call(this, 'next', () => __classPrivateFieldGet(this, _PQueue_queue, "f").size < limit);
    }
    /**
    The difference with `.onEmpty` is that `.onIdle` guarantees that all work from the queue has finished. `.onEmpty` merely signals that the queue is empty, but it could mean that some promises haven't completed yet.

    @returns A promise that settles when the queue becomes empty, and all promises have completed; `queue.size === 0 && queue.pending === 0`.
    */
    async onIdle() {
        // Instantly resolve if none pending and if nothing else is queued
        if (__classPrivateFieldGet(this, _PQueue_pendingCount, "f") === 0 && __classPrivateFieldGet(this, _PQueue_queue, "f").size === 0) {
            return;
        }
        await __classPrivateFieldGet(this, _PQueue_instances, "m", _PQueue_onEvent).call(this, 'idle');
    }
    /**
    Size of the queue, the number of queued items waiting to run.
    */
    get size() {
        return __classPrivateFieldGet(this, _PQueue_queue, "f").size;
    }
    /**
    Size of the queue, filtered by the given options.

    For example, this can be used to find the number of items remaining in the queue with a specific priority level.
    */
    sizeBy(options) {
        // eslint-disable-next-line unicorn/no-array-callback-reference
        return __classPrivateFieldGet(this, _PQueue_queue, "f").filter(options).length;
    }
    /**
    Number of running items (no longer in the queue).
    */
    get pending() {
        return __classPrivateFieldGet(this, _PQueue_pendingCount, "f");
    }
    /**
    Whether the queue is currently paused.
    */
    get isPaused() {
        return __classPrivateFieldGet(this, _PQueue_isPaused, "f");
    }
}
_PQueue_carryoverConcurrencyCount = new WeakMap(), _PQueue_isIntervalIgnored = new WeakMap(), _PQueue_intervalCount = new WeakMap(), _PQueue_intervalCap = new WeakMap(), _PQueue_interval = new WeakMap(), _PQueue_intervalEnd = new WeakMap(), _PQueue_intervalId = new WeakMap(), _PQueue_timeoutId = new WeakMap(), _PQueue_queue = new WeakMap(), _PQueue_queueClass = new WeakMap(), _PQueue_pendingCount = new WeakMap(), _PQueue_concurrency = new WeakMap(), _PQueue_isPaused = new WeakMap(), _PQueue_throwOnTimeout = new WeakMap(), _PQueue_instances = new WeakSet(), _PQueue_doesIntervalAllowAnother_get = function _PQueue_doesIntervalAllowAnother_get() {
    return __classPrivateFieldGet(this, _PQueue_isIntervalIgnored, "f") || __classPrivateFieldGet(this, _PQueue_intervalCount, "f") < __classPrivateFieldGet(this, _PQueue_intervalCap, "f");
}, _PQueue_doesConcurrentAllowAnother_get = function _PQueue_doesConcurrentAllowAnother_get() {
    return __classPrivateFieldGet(this, _PQueue_pendingCount, "f") < __classPrivateFieldGet(this, _PQueue_concurrency, "f");
}, _PQueue_next = function _PQueue_next() {
    var _a;
    __classPrivateFieldSet(this, _PQueue_pendingCount, (_a = __classPrivateFieldGet(this, _PQueue_pendingCount, "f"), _a--, _a), "f");
    __classPrivateFieldGet(this, _PQueue_instances, "m", _PQueue_tryToStartAnother).call(this);
    this.emit('next');
}, _PQueue_emitEvents = function _PQueue_emitEvents() {
    this.emit('empty');
    if (__classPrivateFieldGet(this, _PQueue_pendingCount, "f") === 0) {
        this.emit('idle');
    }
}, _PQueue_onResumeInterval = function _PQueue_onResumeInterval() {
    __classPrivateFieldGet(this, _PQueue_instances, "m", _PQueue_onInterval).call(this);
    __classPrivateFieldGet(this, _PQueue_instances, "m", _PQueue_initializeIntervalIfNeeded).call(this);
    __classPrivateFieldSet(this, _PQueue_timeoutId, undefined, "f");
}, _PQueue_isIntervalPaused_get = function _PQueue_isIntervalPaused_get() {
    const now = Date.now();
    if (__classPrivateFieldGet(this, _PQueue_intervalId, "f") === undefined) {
        const delay = __classPrivateFieldGet(this, _PQueue_intervalEnd, "f") - now;
        if (delay < 0) {
            // Act as the interval was done
            // We don't need to resume it here because it will be resumed on line 160
            __classPrivateFieldSet(this, _PQueue_intervalCount, (__classPrivateFieldGet(this, _PQueue_carryoverConcurrencyCount, "f")) ? __classPrivateFieldGet(this, _PQueue_pendingCount, "f") : 0, "f");
        }
        else {
            // Act as the interval is pending
            if (__classPrivateFieldGet(this, _PQueue_timeoutId, "f") === undefined) {
                __classPrivateFieldSet(this, _PQueue_timeoutId, setTimeout(() => {
                    __classPrivateFieldGet(this, _PQueue_instances, "m", _PQueue_onResumeInterval).call(this);
                }, delay), "f");
            }
            return true;
        }
    }
    return false;
}, _PQueue_tryToStartAnother = function _PQueue_tryToStartAnother() {
    if (__classPrivateFieldGet(this, _PQueue_queue, "f").size === 0) {
        // We can clear the interval ("pause")
        // Because we can redo it later ("resume")
        if (__classPrivateFieldGet(this, _PQueue_intervalId, "f")) {
            clearInterval(__classPrivateFieldGet(this, _PQueue_intervalId, "f"));
        }
        __classPrivateFieldSet(this, _PQueue_intervalId, undefined, "f");
        __classPrivateFieldGet(this, _PQueue_instances, "m", _PQueue_emitEvents).call(this);
        return false;
    }
    if (!__classPrivateFieldGet(this, _PQueue_isPaused, "f")) {
        const canInitializeInterval = !__classPrivateFieldGet(this, _PQueue_instances, "a", _PQueue_isIntervalPaused_get);
        if (__classPrivateFieldGet(this, _PQueue_instances, "a", _PQueue_doesIntervalAllowAnother_get) && __classPrivateFieldGet(this, _PQueue_instances, "a", _PQueue_doesConcurrentAllowAnother_get)) {
            const job = __classPrivateFieldGet(this, _PQueue_queue, "f").dequeue();
            if (!job) {
                return false;
            }
            this.emit('active');
            job();
            if (canInitializeInterval) {
                __classPrivateFieldGet(this, _PQueue_instances, "m", _PQueue_initializeIntervalIfNeeded).call(this);
            }
            return true;
        }
    }
    return false;
}, _PQueue_initializeIntervalIfNeeded = function _PQueue_initializeIntervalIfNeeded() {
    if (__classPrivateFieldGet(this, _PQueue_isIntervalIgnored, "f") || __classPrivateFieldGet(this, _PQueue_intervalId, "f") !== undefined) {
        return;
    }
    __classPrivateFieldSet(this, _PQueue_intervalId, setInterval(() => {
        __classPrivateFieldGet(this, _PQueue_instances, "m", _PQueue_onInterval).call(this);
    }, __classPrivateFieldGet(this, _PQueue_interval, "f")), "f");
    __classPrivateFieldSet(this, _PQueue_intervalEnd, Date.now() + __classPrivateFieldGet(this, _PQueue_interval, "f"), "f");
}, _PQueue_onInterval = function _PQueue_onInterval() {
    if (__classPrivateFieldGet(this, _PQueue_intervalCount, "f") === 0 && __classPrivateFieldGet(this, _PQueue_pendingCount, "f") === 0 && __classPrivateFieldGet(this, _PQueue_intervalId, "f")) {
        clearInterval(__classPrivateFieldGet(this, _PQueue_intervalId, "f"));
        __classPrivateFieldSet(this, _PQueue_intervalId, undefined, "f");
    }
    __classPrivateFieldSet(this, _PQueue_intervalCount, __classPrivateFieldGet(this, _PQueue_carryoverConcurrencyCount, "f") ? __classPrivateFieldGet(this, _PQueue_pendingCount, "f") : 0, "f");
    __classPrivateFieldGet(this, _PQueue_instances, "m", _PQueue_processQueue).call(this);
}, _PQueue_processQueue = function _PQueue_processQueue() {
    // eslint-disable-next-line no-empty
    while (__classPrivateFieldGet(this, _PQueue_instances, "m", _PQueue_tryToStartAnother).call(this)) { }
}, _PQueue_onEvent = async function _PQueue_onEvent(event, filter) {
    return new Promise(resolve => {
        const listener = () => {
            if (filter && !filter()) {
                return;
            }
            this.off(event, listener);
            resolve();
        };
        this.on(event, listener);
    });
};


/***/ }),

/***/ "./node_modules/p-queue/dist/lower-bound.js":
/*!**************************************************!*\
  !*** ./node_modules/p-queue/dist/lower-bound.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ lowerBound)
/* harmony export */ });
// Port of lower_bound from https://en.cppreference.com/w/cpp/algorithm/lower_bound
// Used to compute insertion index to keep queue sorted after insertion
function lowerBound(array, value, comparator) {
    let first = 0;
    let count = array.length;
    while (count > 0) {
        const step = Math.trunc(count / 2);
        let it = first + step;
        if (comparator(array[it], value) <= 0) {
            first = ++it;
            count -= step + 1;
        }
        else {
            count = step;
        }
    }
    return first;
}


/***/ }),

/***/ "./node_modules/p-queue/dist/priority-queue.js":
/*!*****************************************************!*\
  !*** ./node_modules/p-queue/dist/priority-queue.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PriorityQueue)
/* harmony export */ });
/* harmony import */ var _lower_bound_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lower-bound.js */ "./node_modules/p-queue/dist/lower-bound.js");
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _PriorityQueue_queue;

class PriorityQueue {
    constructor() {
        _PriorityQueue_queue.set(this, []);
    }
    enqueue(run, options) {
        options = {
            priority: 0,
            ...options,
        };
        const element = {
            priority: options.priority,
            run,
        };
        if (this.size && __classPrivateFieldGet(this, _PriorityQueue_queue, "f")[this.size - 1].priority >= options.priority) {
            __classPrivateFieldGet(this, _PriorityQueue_queue, "f").push(element);
            return;
        }
        const index = (0,_lower_bound_js__WEBPACK_IMPORTED_MODULE_0__["default"])(__classPrivateFieldGet(this, _PriorityQueue_queue, "f"), element, (a, b) => b.priority - a.priority);
        __classPrivateFieldGet(this, _PriorityQueue_queue, "f").splice(index, 0, element);
    }
    dequeue() {
        const item = __classPrivateFieldGet(this, _PriorityQueue_queue, "f").shift();
        return item === null || item === void 0 ? void 0 : item.run;
    }
    filter(options) {
        return __classPrivateFieldGet(this, _PriorityQueue_queue, "f").filter((element) => element.priority === options.priority).map((element) => element.run);
    }
    get size() {
        return __classPrivateFieldGet(this, _PriorityQueue_queue, "f").length;
    }
}
_PriorityQueue_queue = new WeakMap();


/***/ }),

/***/ "./node_modules/p-timeout/index.js":
/*!*****************************************!*\
  !*** ./node_modules/p-timeout/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AbortError": () => (/* binding */ AbortError),
/* harmony export */   "TimeoutError": () => (/* binding */ TimeoutError),
/* harmony export */   "default": () => (/* binding */ pTimeout)
/* harmony export */ });
class TimeoutError extends Error {
	constructor(message) {
		super(message);
		this.name = 'TimeoutError';
	}
}

/**
An error to be thrown when the request is aborted by AbortController.
DOMException is thrown instead of this Error when DOMException is available.
*/
class AbortError extends Error {
	constructor(message) {
		super();
		this.name = 'AbortError';
		this.message = message;
	}
}

/**
TODO: Remove AbortError and just throw DOMException when targeting Node 18.
*/
const getDOMException = errorMessage => globalThis.DOMException === undefined ?
	new AbortError(errorMessage) :
	new DOMException(errorMessage);

/**
TODO: Remove below function and just 'reject(signal.reason)' when targeting Node 18.
*/
const getAbortedReason = signal => {
	const reason = signal.reason === undefined ?
		getDOMException('This operation was aborted.') :
		signal.reason;

	return reason instanceof Error ? reason : getDOMException(reason);
};

function pTimeout(promise, milliseconds, fallback, options) {
	let timer;

	const cancelablePromise = new Promise((resolve, reject) => {
		if (typeof milliseconds !== 'number' || Math.sign(milliseconds) !== 1) {
			throw new TypeError(`Expected \`milliseconds\` to be a positive number, got \`${milliseconds}\``);
		}

		if (milliseconds === Number.POSITIVE_INFINITY) {
			resolve(promise);
			return;
		}

		options = {
			customTimers: {setTimeout, clearTimeout},
			...options
		};

		if (options.signal) {
			const {signal} = options;
			if (signal.aborted) {
				reject(getAbortedReason(signal));
			}

			signal.addEventListener('abort', () => {
				reject(getAbortedReason(signal));
			});
		}

		timer = options.customTimers.setTimeout.call(undefined, () => {
			if (typeof fallback === 'function') {
				try {
					resolve(fallback());
				} catch (error) {
					reject(error);
				}

				return;
			}

			const message = typeof fallback === 'string' ? fallback : `Promise timed out after ${milliseconds} milliseconds`;
			const timeoutError = fallback instanceof Error ? fallback : new TimeoutError(message);

			if (typeof promise.cancel === 'function') {
				promise.cancel();
			}

			reject(timeoutError);
		}, milliseconds);

		(async () => {
			try {
				resolve(await promise);
			} catch (error) {
				reject(error);
			} finally {
				options.customTimers.clearTimeout.call(undefined, timer);
			}
		})();
	});

	cancelablePromise.clear = () => {
		clearTimeout(timer);
		timer = undefined;
	};

	return cancelablePromise;
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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"content-script": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk_luxwallet_x"] = self["webpackChunk_luxwallet_x"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["webextension-polyfill"], () => (__webpack_require__("./src/content-script/index.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC1zY3JpcHQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQzNFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQzNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUMxSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDOUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDaGZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNwT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvVUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFJQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0NBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUVBO0FBR0E7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQXpDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBcUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pEQTs7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFBQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUpBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQTdDQTtBQUNBO0FBQ0E7QUFDQTtBQTJDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDekRBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNIQTs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDakNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUN4R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDUEE7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FFaERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AbHV4d2FsbGV0L3gvLi9ub2RlX21vZHVsZXMvZXRoLXJwYy1lcnJvcnMvZGlzdC9jbGFzc2VzLmpzIiwid2VicGFjazovL0BsdXh3YWxsZXQveC8uL25vZGVfbW9kdWxlcy9ldGgtcnBjLWVycm9ycy9kaXN0L2Vycm9yLWNvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly9AbHV4d2FsbGV0L3gvLi9ub2RlX21vZHVsZXMvZXRoLXJwYy1lcnJvcnMvZGlzdC9lcnJvcnMuanMiLCJ3ZWJwYWNrOi8vQGx1eHdhbGxldC94Ly4vbm9kZV9tb2R1bGVzL2V0aC1ycGMtZXJyb3JzL2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQGx1eHdhbGxldC94Ly4vbm9kZV9tb2R1bGVzL2V0aC1ycGMtZXJyb3JzL2Rpc3QvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vQGx1eHdhbGxldC94Ly4vbm9kZV9tb2R1bGVzL2V2ZW50cy9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vQGx1eHdhbGxldC94Ly4vbm9kZV9tb2R1bGVzL2Zhc3Qtc2FmZS1zdHJpbmdpZnkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQGx1eHdhbGxldC94Ly4vbm9kZV9tb2R1bGVzL3AtcXVldWUvbm9kZV9tb2R1bGVzL2V2ZW50ZW1pdHRlcjMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQGx1eHdhbGxldC94Ly4vc3JjL2NvbnRlbnQtc2NyaXB0L2luZGV4LnRzIiwid2VicGFjazovL0BsdXh3YWxsZXQveC8uL3NyYy91dGlscy9tZXNzYWdlLnRzIiwid2VicGFjazovL0BsdXh3YWxsZXQveC8uL3NyYy91dGlscy9tZXNzYWdlL2Jyb2FkY2FzdENoYW5uZWxNZXNzYWdlLnRzIiwid2VicGFjazovL0BsdXh3YWxsZXQveC8uL3NyYy91dGlscy9tZXNzYWdlL2luZGV4LnRzIiwid2VicGFjazovL0BsdXh3YWxsZXQveC8uL3NyYy91dGlscy9tZXNzYWdlL3BvcnRNZXNzYWdlLnRzIiwid2VicGFjazovL0BsdXh3YWxsZXQveC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvbmF0aXZlLmpzIiwid2VicGFjazovL0BsdXh3YWxsZXQveC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvcmVnZXguanMiLCJ3ZWJwYWNrOi8vQGx1eHdhbGxldC94Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9ybmcuanMiLCJ3ZWJwYWNrOi8vQGx1eHdhbGxldC94Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9zdHJpbmdpZnkuanMiLCJ3ZWJwYWNrOi8vQGx1eHdhbGxldC94Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92NC5qcyIsIndlYnBhY2s6Ly9AbHV4d2FsbGV0L3gvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3ZhbGlkYXRlLmpzIiwid2VicGFjazovL0BsdXh3YWxsZXQveC8uL25vZGVfbW9kdWxlcy9uYW5vaWQvaW5kZXguYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly9AbHV4d2FsbGV0L3gvLi9ub2RlX21vZHVsZXMvbmFub2lkL3VybC1hbHBoYWJldC9pbmRleC5qcyIsIndlYnBhY2s6Ly9AbHV4d2FsbGV0L3gvLi9ub2RlX21vZHVsZXMvcC1xdWV1ZS9kaXN0L2luZGV4LmpzIiwid2VicGFjazovL0BsdXh3YWxsZXQveC8uL25vZGVfbW9kdWxlcy9wLXF1ZXVlL2Rpc3QvbG93ZXItYm91bmQuanMiLCJ3ZWJwYWNrOi8vQGx1eHdhbGxldC94Ly4vbm9kZV9tb2R1bGVzL3AtcXVldWUvZGlzdC9wcmlvcml0eS1xdWV1ZS5qcyIsIndlYnBhY2s6Ly9AbHV4d2FsbGV0L3gvLi9ub2RlX21vZHVsZXMvcC10aW1lb3V0L2luZGV4LmpzIiwid2VicGFjazovL0BsdXh3YWxsZXQveC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9AbHV4d2FsbGV0L3gvd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly9AbHV4d2FsbGV0L3gvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vQGx1eHdhbGxldC94L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9AbHV4d2FsbGV0L3gvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9AbHV4d2FsbGV0L3gvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9AbHV4d2FsbGV0L3gvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vQGx1eHdhbGxldC94L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vQGx1eHdhbGxldC94L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9AbHV4d2FsbGV0L3gvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5FdGhlcmV1bVByb3ZpZGVyRXJyb3IgPSBleHBvcnRzLkV0aGVyZXVtUnBjRXJyb3IgPSB2b2lkIDA7XG5jb25zdCBmYXN0X3NhZmVfc3RyaW5naWZ5XzEgPSByZXF1aXJlKFwiZmFzdC1zYWZlLXN0cmluZ2lmeVwiKTtcbi8qKlxuICogRXJyb3Igc3ViY2xhc3MgaW1wbGVtZW50aW5nIEpTT04gUlBDIDIuMCBlcnJvcnMgYW5kIEV0aGVyZXVtIFJQQyBlcnJvcnNcbiAqIHBlciBFSVAtMTQ3NC5cbiAqIFBlcm1pdHMgYW55IGludGVnZXIgZXJyb3IgY29kZS5cbiAqL1xuY2xhc3MgRXRoZXJldW1ScGNFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgICBjb25zdHJ1Y3Rvcihjb2RlLCBtZXNzYWdlLCBkYXRhKSB7XG4gICAgICAgIGlmICghTnVtYmVyLmlzSW50ZWdlcihjb2RlKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdcImNvZGVcIiBtdXN0IGJlIGFuIGludGVnZXIuJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFtZXNzYWdlIHx8IHR5cGVvZiBtZXNzYWdlICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdcIm1lc3NhZ2VcIiBtdXN0IGJlIGEgbm9uZW1wdHkgc3RyaW5nLicpO1xuICAgICAgICB9XG4gICAgICAgIHN1cGVyKG1lc3NhZ2UpO1xuICAgICAgICB0aGlzLmNvZGUgPSBjb2RlO1xuICAgICAgICBpZiAoZGF0YSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBwbGFpbiBvYmplY3Qgd2l0aCBhbGwgcHVibGljIGNsYXNzIHByb3BlcnRpZXMuXG4gICAgICovXG4gICAgc2VyaWFsaXplKCkge1xuICAgICAgICBjb25zdCBzZXJpYWxpemVkID0ge1xuICAgICAgICAgICAgY29kZTogdGhpcy5jb2RlLFxuICAgICAgICAgICAgbWVzc2FnZTogdGhpcy5tZXNzYWdlLFxuICAgICAgICB9O1xuICAgICAgICBpZiAodGhpcy5kYXRhICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHNlcmlhbGl6ZWQuZGF0YSA9IHRoaXMuZGF0YTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5zdGFjaykge1xuICAgICAgICAgICAgc2VyaWFsaXplZC5zdGFjayA9IHRoaXMuc3RhY2s7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNlcmlhbGl6ZWQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybiBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgc2VyaWFsaXplZCBlcnJvciwgb21pdHRpbmdcbiAgICAgKiBhbnkgY2lyY3VsYXIgcmVmZXJlbmNlcy5cbiAgICAgKi9cbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgcmV0dXJuIGZhc3Rfc2FmZV9zdHJpbmdpZnlfMS5kZWZhdWx0KHRoaXMuc2VyaWFsaXplKCksIHN0cmluZ2lmeVJlcGxhY2VyLCAyKTtcbiAgICB9XG59XG5leHBvcnRzLkV0aGVyZXVtUnBjRXJyb3IgPSBFdGhlcmV1bVJwY0Vycm9yO1xuLyoqXG4gKiBFcnJvciBzdWJjbGFzcyBpbXBsZW1lbnRpbmcgRXRoZXJldW0gUHJvdmlkZXIgZXJyb3JzIHBlciBFSVAtMTE5My5cbiAqIFBlcm1pdHMgaW50ZWdlciBlcnJvciBjb2RlcyBpbiB0aGUgWyAxMDAwIDw9IDQ5OTkgXSByYW5nZS5cbiAqL1xuY2xhc3MgRXRoZXJldW1Qcm92aWRlckVycm9yIGV4dGVuZHMgRXRoZXJldW1ScGNFcnJvciB7XG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGFuIEV0aGVyZXVtIFByb3ZpZGVyIEpTT04tUlBDIGVycm9yLlxuICAgICAqIGBjb2RlYCBtdXN0IGJlIGFuIGludGVnZXIgaW4gdGhlIDEwMDAgPD0gNDk5OSByYW5nZS5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihjb2RlLCBtZXNzYWdlLCBkYXRhKSB7XG4gICAgICAgIGlmICghaXNWYWxpZEV0aFByb3ZpZGVyQ29kZShjb2RlKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdcImNvZGVcIiBtdXN0IGJlIGFuIGludGVnZXIgc3VjaCB0aGF0OiAxMDAwIDw9IGNvZGUgPD0gNDk5OScpO1xuICAgICAgICB9XG4gICAgICAgIHN1cGVyKGNvZGUsIG1lc3NhZ2UsIGRhdGEpO1xuICAgIH1cbn1cbmV4cG9ydHMuRXRoZXJldW1Qcm92aWRlckVycm9yID0gRXRoZXJldW1Qcm92aWRlckVycm9yO1xuLy8gSW50ZXJuYWxcbmZ1bmN0aW9uIGlzVmFsaWRFdGhQcm92aWRlckNvZGUoY29kZSkge1xuICAgIHJldHVybiBOdW1iZXIuaXNJbnRlZ2VyKGNvZGUpICYmIGNvZGUgPj0gMTAwMCAmJiBjb2RlIDw9IDQ5OTk7XG59XG5mdW5jdGlvbiBzdHJpbmdpZnlSZXBsYWNlcihfLCB2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSA9PT0gJ1tDaXJjdWxhcl0nKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVkyeGhjM05sY3k1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1TDNOeVl5OWpiR0Z6YzJWekxuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenRCUVVGQkxEWkVRVUZuUkR0QlFWTm9SRHM3T3p0SFFVbEhPMEZCUTBnc1RVRkJZU3huUWtGQmIwSXNVMEZCVVN4TFFVRkxPMGxCVFRWRExGbEJRVmtzU1VGQldTeEZRVUZGTEU5QlFXVXNSVUZCUlN4SlFVRlJPMUZCUldwRUxFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNVMEZCVXl4RFFVRkRMRWxCUVVrc1EwRkJReXhGUVVGRk8xbEJRek5DTEUxQlFVMHNTVUZCU1N4TFFVRkxMRU5CUTJJc05FSkJRVFJDTEVOQlF6ZENMRU5CUVVNN1UwRkRTRHRSUVVORUxFbEJRVWtzUTBGQlF5eFBRVUZQTEVsQlFVa3NUMEZCVHl4UFFVRlBMRXRCUVVzc1VVRkJVU3hGUVVGRk8xbEJRek5ETEUxQlFVMHNTVUZCU1N4TFFVRkxMRU5CUTJJc2MwTkJRWE5ETEVOQlEzWkRMRU5CUVVNN1UwRkRTRHRSUVVWRUxFdEJRVXNzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXp0UlFVTm1MRWxCUVVrc1EwRkJReXhKUVVGSkxFZEJRVWNzU1VGQlNTeERRVUZETzFGQlEycENMRWxCUVVrc1NVRkJTU3hMUVVGTExGTkJRVk1zUlVGQlJUdFpRVU4wUWl4SlFVRkpMRU5CUVVNc1NVRkJTU3hIUVVGSExFbEJRVWtzUTBGQlF6dFRRVU5zUWp0SlFVTklMRU5CUVVNN1NVRkZSRHM3VDBGRlJ6dEpRVU5JTEZOQlFWTTdVVUZEVUN4TlFVRk5MRlZCUVZVc1IwRkJLMEk3V1VGRE4wTXNTVUZCU1N4RlFVRkZMRWxCUVVrc1EwRkJReXhKUVVGSk8xbEJRMllzVDBGQlR5eEZRVUZGTEVsQlFVa3NRMEZCUXl4UFFVRlBPMU5CUTNSQ0xFTkJRVU03VVVGRFJpeEpRVUZKTEVsQlFVa3NRMEZCUXl4SlFVRkpMRXRCUVVzc1UwRkJVeXhGUVVGRk8xbEJRek5DTEZWQlFWVXNRMEZCUXl4SlFVRkpMRWRCUVVjc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF6dFRRVU0zUWp0UlFVTkVMRWxCUVVrc1NVRkJTU3hEUVVGRExFdEJRVXNzUlVGQlJUdFpRVU5rTEZWQlFWVXNRMEZCUXl4TFFVRkxMRWRCUVVjc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF6dFRRVU12UWp0UlFVTkVMRTlCUVU4c1ZVRkJWU3hEUVVGRE8wbEJRM0JDTEVOQlFVTTdTVUZGUkRzN08wOUJSMGM3U1VGRFNDeFJRVUZSTzFGQlEwNHNUMEZCVHl3MlFrRkJZU3hEUVVOc1FpeEpRVUZKTEVOQlFVTXNVMEZCVXl4RlFVRkZMRVZCUTJoQ0xHbENRVUZwUWl4RlFVTnFRaXhEUVVGRExFTkJRMFlzUTBGQlF6dEpRVU5LTEVOQlFVTTdRMEZEUmp0QlFYUkVSQ3cwUTBGelJFTTdRVUZGUkRzN08wZEJSMGM3UVVGRFNDeE5RVUZoTEhGQ1FVRjVRaXhUUVVGUkxHZENRVUZ0UWp0SlFVVXZSRHM3TzA5QlIwYzdTVUZEU0N4WlFVRlpMRWxCUVZrc1JVRkJSU3hQUVVGbExFVkJRVVVzU1VGQlVUdFJRVVZxUkN4SlFVRkpMRU5CUVVNc2MwSkJRWE5DTEVOQlFVTXNTVUZCU1N4RFFVRkRMRVZCUVVVN1dVRkRha01zVFVGQlRTeEpRVUZKTEV0QlFVc3NRMEZEWWl3eVJFRkJNa1FzUTBGRE5VUXNRMEZCUXp0VFFVTklPMUZCUlVRc1MwRkJTeXhEUVVGRExFbEJRVWtzUlVGQlJTeFBRVUZQTEVWQlFVVXNTVUZCU1N4RFFVRkRMRU5CUVVNN1NVRkROMElzUTBGQlF6dERRVU5HTzBGQmFFSkVMSE5FUVdkQ1F6dEJRVVZFTEZkQlFWYzdRVUZGV0N4VFFVRlRMSE5DUVVGelFpeERRVUZETEVsQlFWazdTVUZETVVNc1QwRkJUeXhOUVVGTkxFTkJRVU1zVTBGQlV5eERRVUZETEVsQlFVa3NRMEZCUXl4SlFVRkpMRWxCUVVrc1NVRkJTU3hKUVVGSkxFbEJRVWtzU1VGQlNTeEpRVUZKTEVsQlFVa3NRMEZCUXp0QlFVTm9SU3hEUVVGRE8wRkJSVVFzVTBGQlV5eHBRa0ZCYVVJc1EwRkJReXhEUVVGVkxFVkJRVVVzUzBGQll6dEpRVU51UkN4SlFVRkpMRXRCUVVzc1MwRkJTeXhaUVVGWkxFVkJRVVU3VVVGRE1VSXNUMEZCVHl4VFFVRlRMRU5CUVVNN1MwRkRiRUk3U1VGRFJDeFBRVUZQTEV0QlFVc3NRMEZCUXp0QlFVTm1MRU5CUVVNaWZRPT0iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZXJyb3JWYWx1ZXMgPSBleHBvcnRzLmVycm9yQ29kZXMgPSB2b2lkIDA7XG5leHBvcnRzLmVycm9yQ29kZXMgPSB7XG4gICAgcnBjOiB7XG4gICAgICAgIGludmFsaWRJbnB1dDogLTMyMDAwLFxuICAgICAgICByZXNvdXJjZU5vdEZvdW5kOiAtMzIwMDEsXG4gICAgICAgIHJlc291cmNlVW5hdmFpbGFibGU6IC0zMjAwMixcbiAgICAgICAgdHJhbnNhY3Rpb25SZWplY3RlZDogLTMyMDAzLFxuICAgICAgICBtZXRob2ROb3RTdXBwb3J0ZWQ6IC0zMjAwNCxcbiAgICAgICAgbGltaXRFeGNlZWRlZDogLTMyMDA1LFxuICAgICAgICBwYXJzZTogLTMyNzAwLFxuICAgICAgICBpbnZhbGlkUmVxdWVzdDogLTMyNjAwLFxuICAgICAgICBtZXRob2ROb3RGb3VuZDogLTMyNjAxLFxuICAgICAgICBpbnZhbGlkUGFyYW1zOiAtMzI2MDIsXG4gICAgICAgIGludGVybmFsOiAtMzI2MDMsXG4gICAgfSxcbiAgICBwcm92aWRlcjoge1xuICAgICAgICB1c2VyUmVqZWN0ZWRSZXF1ZXN0OiA0MDAxLFxuICAgICAgICB1bmF1dGhvcml6ZWQ6IDQxMDAsXG4gICAgICAgIHVuc3VwcG9ydGVkTWV0aG9kOiA0MjAwLFxuICAgICAgICBkaXNjb25uZWN0ZWQ6IDQ5MDAsXG4gICAgICAgIGNoYWluRGlzY29ubmVjdGVkOiA0OTAxLFxuICAgIH0sXG59O1xuZXhwb3J0cy5lcnJvclZhbHVlcyA9IHtcbiAgICAnLTMyNzAwJzoge1xuICAgICAgICBzdGFuZGFyZDogJ0pTT04gUlBDIDIuMCcsXG4gICAgICAgIG1lc3NhZ2U6ICdJbnZhbGlkIEpTT04gd2FzIHJlY2VpdmVkIGJ5IHRoZSBzZXJ2ZXIuIEFuIGVycm9yIG9jY3VycmVkIG9uIHRoZSBzZXJ2ZXIgd2hpbGUgcGFyc2luZyB0aGUgSlNPTiB0ZXh0LicsXG4gICAgfSxcbiAgICAnLTMyNjAwJzoge1xuICAgICAgICBzdGFuZGFyZDogJ0pTT04gUlBDIDIuMCcsXG4gICAgICAgIG1lc3NhZ2U6ICdUaGUgSlNPTiBzZW50IGlzIG5vdCBhIHZhbGlkIFJlcXVlc3Qgb2JqZWN0LicsXG4gICAgfSxcbiAgICAnLTMyNjAxJzoge1xuICAgICAgICBzdGFuZGFyZDogJ0pTT04gUlBDIDIuMCcsXG4gICAgICAgIG1lc3NhZ2U6ICdUaGUgbWV0aG9kIGRvZXMgbm90IGV4aXN0IC8gaXMgbm90IGF2YWlsYWJsZS4nLFxuICAgIH0sXG4gICAgJy0zMjYwMic6IHtcbiAgICAgICAgc3RhbmRhcmQ6ICdKU09OIFJQQyAyLjAnLFxuICAgICAgICBtZXNzYWdlOiAnSW52YWxpZCBtZXRob2QgcGFyYW1ldGVyKHMpLicsXG4gICAgfSxcbiAgICAnLTMyNjAzJzoge1xuICAgICAgICBzdGFuZGFyZDogJ0pTT04gUlBDIDIuMCcsXG4gICAgICAgIG1lc3NhZ2U6ICdJbnRlcm5hbCBKU09OLVJQQyBlcnJvci4nLFxuICAgIH0sXG4gICAgJy0zMjAwMCc6IHtcbiAgICAgICAgc3RhbmRhcmQ6ICdFSVAtMTQ3NCcsXG4gICAgICAgIG1lc3NhZ2U6ICdJbnZhbGlkIGlucHV0LicsXG4gICAgfSxcbiAgICAnLTMyMDAxJzoge1xuICAgICAgICBzdGFuZGFyZDogJ0VJUC0xNDc0JyxcbiAgICAgICAgbWVzc2FnZTogJ1Jlc291cmNlIG5vdCBmb3VuZC4nLFxuICAgIH0sXG4gICAgJy0zMjAwMic6IHtcbiAgICAgICAgc3RhbmRhcmQ6ICdFSVAtMTQ3NCcsXG4gICAgICAgIG1lc3NhZ2U6ICdSZXNvdXJjZSB1bmF2YWlsYWJsZS4nLFxuICAgIH0sXG4gICAgJy0zMjAwMyc6IHtcbiAgICAgICAgc3RhbmRhcmQ6ICdFSVAtMTQ3NCcsXG4gICAgICAgIG1lc3NhZ2U6ICdUcmFuc2FjdGlvbiByZWplY3RlZC4nLFxuICAgIH0sXG4gICAgJy0zMjAwNCc6IHtcbiAgICAgICAgc3RhbmRhcmQ6ICdFSVAtMTQ3NCcsXG4gICAgICAgIG1lc3NhZ2U6ICdNZXRob2Qgbm90IHN1cHBvcnRlZC4nLFxuICAgIH0sXG4gICAgJy0zMjAwNSc6IHtcbiAgICAgICAgc3RhbmRhcmQ6ICdFSVAtMTQ3NCcsXG4gICAgICAgIG1lc3NhZ2U6ICdSZXF1ZXN0IGxpbWl0IGV4Y2VlZGVkLicsXG4gICAgfSxcbiAgICAnNDAwMSc6IHtcbiAgICAgICAgc3RhbmRhcmQ6ICdFSVAtMTE5MycsXG4gICAgICAgIG1lc3NhZ2U6ICdVc2VyIHJlamVjdGVkIHRoZSByZXF1ZXN0LicsXG4gICAgfSxcbiAgICAnNDEwMCc6IHtcbiAgICAgICAgc3RhbmRhcmQ6ICdFSVAtMTE5MycsXG4gICAgICAgIG1lc3NhZ2U6ICdUaGUgcmVxdWVzdGVkIGFjY291bnQgYW5kL29yIG1ldGhvZCBoYXMgbm90IGJlZW4gYXV0aG9yaXplZCBieSB0aGUgdXNlci4nLFxuICAgIH0sXG4gICAgJzQyMDAnOiB7XG4gICAgICAgIHN0YW5kYXJkOiAnRUlQLTExOTMnLFxuICAgICAgICBtZXNzYWdlOiAnVGhlIHJlcXVlc3RlZCBtZXRob2QgaXMgbm90IHN1cHBvcnRlZCBieSB0aGlzIEV0aGVyZXVtIHByb3ZpZGVyLicsXG4gICAgfSxcbiAgICAnNDkwMCc6IHtcbiAgICAgICAgc3RhbmRhcmQ6ICdFSVAtMTE5MycsXG4gICAgICAgIG1lc3NhZ2U6ICdUaGUgcHJvdmlkZXIgaXMgZGlzY29ubmVjdGVkIGZyb20gYWxsIGNoYWlucy4nLFxuICAgIH0sXG4gICAgJzQ5MDEnOiB7XG4gICAgICAgIHN0YW5kYXJkOiAnRUlQLTExOTMnLFxuICAgICAgICBtZXNzYWdlOiAnVGhlIHByb3ZpZGVyIGlzIGRpc2Nvbm5lY3RlZCBmcm9tIHRoZSBzcGVjaWZpZWQgY2hhaW4uJyxcbiAgICB9LFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVpYSnliM0l0WTI5dWMzUmhiblJ6TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2YzNKakwyVnljbTl5TFdOdmJuTjBZVzUwY3k1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdRVUYxUW1Fc1VVRkJRU3hWUVVGVkxFZEJRV1U3U1VGRGNFTXNSMEZCUnl4RlFVRkZPMUZCUTBnc1dVRkJXU3hGUVVGRkxFTkJRVU1zUzBGQlN6dFJRVU53UWl4blFrRkJaMElzUlVGQlJTeERRVUZETEV0QlFVczdVVUZEZUVJc2JVSkJRVzFDTEVWQlFVVXNRMEZCUXl4TFFVRkxPMUZCUXpOQ0xHMUNRVUZ0UWl4RlFVRkZMRU5CUVVNc1MwRkJTenRSUVVNelFpeHJRa0ZCYTBJc1JVRkJSU3hEUVVGRExFdEJRVXM3VVVGRE1VSXNZVUZCWVN4RlFVRkZMRU5CUVVNc1MwRkJTenRSUVVOeVFpeExRVUZMTEVWQlFVVXNRMEZCUXl4TFFVRkxPMUZCUTJJc1kwRkJZeXhGUVVGRkxFTkJRVU1zUzBGQlN6dFJRVU4wUWl4alFVRmpMRVZCUVVVc1EwRkJReXhMUVVGTE8xRkJRM1JDTEdGQlFXRXNSVUZCUlN4RFFVRkRMRXRCUVVzN1VVRkRja0lzVVVGQlVTeEZRVUZGTEVOQlFVTXNTMEZCU3p0TFFVTnFRanRKUVVORUxGRkJRVkVzUlVGQlJUdFJRVU5TTEcxQ1FVRnRRaXhGUVVGRkxFbEJRVWs3VVVGRGVrSXNXVUZCV1N4RlFVRkZMRWxCUVVrN1VVRkRiRUlzYVVKQlFXbENMRVZCUVVVc1NVRkJTVHRSUVVOMlFpeFpRVUZaTEVWQlFVVXNTVUZCU1R0UlFVTnNRaXhwUWtGQmFVSXNSVUZCUlN4SlFVRkpPMHRCUTNoQ08wTkJRMFlzUTBGQlF6dEJRVVZYTEZGQlFVRXNWMEZCVnl4SFFVRkhPMGxCUTNwQ0xGRkJRVkVzUlVGQlJUdFJRVU5TTEZGQlFWRXNSVUZCUlN4alFVRmpPMUZCUTNoQ0xFOUJRVThzUlVGQlJTeDFSMEZCZFVjN1MwRkRha2c3U1VGRFJDeFJRVUZSTEVWQlFVVTdVVUZEVWl4UlFVRlJMRVZCUVVVc1kwRkJZenRSUVVONFFpeFBRVUZQTEVWQlFVVXNPRU5CUVRoRE8wdEJRM2hFTzBsQlEwUXNVVUZCVVN4RlFVRkZPMUZCUTFJc1VVRkJVU3hGUVVGRkxHTkJRV003VVVGRGVFSXNUMEZCVHl4RlFVRkZMQ3REUVVFclF6dExRVU42UkR0SlFVTkVMRkZCUVZFc1JVRkJSVHRSUVVOU0xGRkJRVkVzUlVGQlJTeGpRVUZqTzFGQlEzaENMRTlCUVU4c1JVRkJSU3c0UWtGQk9FSTdTMEZEZUVNN1NVRkRSQ3hSUVVGUkxFVkJRVVU3VVVGRFVpeFJRVUZSTEVWQlFVVXNZMEZCWXp0UlFVTjRRaXhQUVVGUExFVkJRVVVzTUVKQlFUQkNPMHRCUTNCRE8wbEJRMFFzVVVGQlVTeEZRVUZGTzFGQlExSXNVVUZCVVN4RlFVRkZMRlZCUVZVN1VVRkRjRUlzVDBGQlR5eEZRVUZGTEdkQ1FVRm5RanRMUVVNeFFqdEpRVU5FTEZGQlFWRXNSVUZCUlR0UlFVTlNMRkZCUVZFc1JVRkJSU3hWUVVGVk8xRkJRM0JDTEU5QlFVOHNSVUZCUlN4eFFrRkJjVUk3UzBGREwwSTdTVUZEUkN4UlFVRlJMRVZCUVVVN1VVRkRVaXhSUVVGUkxFVkJRVVVzVlVGQlZUdFJRVU53UWl4UFFVRlBMRVZCUVVVc2RVSkJRWFZDTzB0QlEycERPMGxCUTBRc1VVRkJVU3hGUVVGRk8xRkJRMUlzVVVGQlVTeEZRVUZGTEZWQlFWVTdVVUZEY0VJc1QwRkJUeXhGUVVGRkxIVkNRVUYxUWp0TFFVTnFRenRKUVVORUxGRkJRVkVzUlVGQlJUdFJRVU5TTEZGQlFWRXNSVUZCUlN4VlFVRlZPMUZCUTNCQ0xFOUJRVThzUlVGQlJTeDFRa0ZCZFVJN1MwRkRha003U1VGRFJDeFJRVUZSTEVWQlFVVTdVVUZEVWl4UlFVRlJMRVZCUVVVc1ZVRkJWVHRSUVVOd1FpeFBRVUZQTEVWQlFVVXNlVUpCUVhsQ08wdEJRMjVETzBsQlEwUXNUVUZCVFN4RlFVRkZPMUZCUTA0c1VVRkJVU3hGUVVGRkxGVkJRVlU3VVVGRGNFSXNUMEZCVHl4RlFVRkZMRFJDUVVFMFFqdExRVU4wUXp0SlFVTkVMRTFCUVUwc1JVRkJSVHRSUVVOT0xGRkJRVkVzUlVGQlJTeFZRVUZWTzFGQlEzQkNMRTlCUVU4c1JVRkJSU3d3UlVGQk1FVTdTMEZEY0VZN1NVRkRSQ3hOUVVGTkxFVkJRVVU3VVVGRFRpeFJRVUZSTEVWQlFVVXNWVUZCVlR0UlFVTndRaXhQUVVGUExFVkJRVVVzYTBWQlFXdEZPMHRCUXpWRk8wbEJRMFFzVFVGQlRTeEZRVUZGTzFGQlEwNHNVVUZCVVN4RlFVRkZMRlZCUVZVN1VVRkRjRUlzVDBGQlR5eEZRVUZGTEN0RFFVRXJRenRMUVVONlJEdEpRVU5FTEUxQlFVMHNSVUZCUlR0UlFVTk9MRkZCUVZFc1JVRkJSU3hWUVVGVk8xRkJRM0JDTEU5QlFVOHNSVUZCUlN4M1JFRkJkMFE3UzBGRGJFVTdRMEZEUml4RFFVRkRJbjA9IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmV0aEVycm9ycyA9IHZvaWQgMDtcbmNvbnN0IGNsYXNzZXNfMSA9IHJlcXVpcmUoXCIuL2NsYXNzZXNcIik7XG5jb25zdCB1dGlsc18xID0gcmVxdWlyZShcIi4vdXRpbHNcIik7XG5jb25zdCBlcnJvcl9jb25zdGFudHNfMSA9IHJlcXVpcmUoXCIuL2Vycm9yLWNvbnN0YW50c1wiKTtcbmV4cG9ydHMuZXRoRXJyb3JzID0ge1xuICAgIHJwYzoge1xuICAgICAgICAvKipcbiAgICAgICAgICogR2V0IGEgSlNPTiBSUEMgMi4wIFBhcnNlICgtMzI3MDApIGVycm9yLlxuICAgICAgICAgKi9cbiAgICAgICAgcGFyc2U6IChhcmcpID0+IGdldEV0aEpzb25ScGNFcnJvcihlcnJvcl9jb25zdGFudHNfMS5lcnJvckNvZGVzLnJwYy5wYXJzZSwgYXJnKSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdldCBhIEpTT04gUlBDIDIuMCBJbnZhbGlkIFJlcXVlc3QgKC0zMjYwMCkgZXJyb3IuXG4gICAgICAgICAqL1xuICAgICAgICBpbnZhbGlkUmVxdWVzdDogKGFyZykgPT4gZ2V0RXRoSnNvblJwY0Vycm9yKGVycm9yX2NvbnN0YW50c18xLmVycm9yQ29kZXMucnBjLmludmFsaWRSZXF1ZXN0LCBhcmcpLFxuICAgICAgICAvKipcbiAgICAgICAgICogR2V0IGEgSlNPTiBSUEMgMi4wIEludmFsaWQgUGFyYW1zICgtMzI2MDIpIGVycm9yLlxuICAgICAgICAgKi9cbiAgICAgICAgaW52YWxpZFBhcmFtczogKGFyZykgPT4gZ2V0RXRoSnNvblJwY0Vycm9yKGVycm9yX2NvbnN0YW50c18xLmVycm9yQ29kZXMucnBjLmludmFsaWRQYXJhbXMsIGFyZyksXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHZXQgYSBKU09OIFJQQyAyLjAgTWV0aG9kIE5vdCBGb3VuZCAoLTMyNjAxKSBlcnJvci5cbiAgICAgICAgICovXG4gICAgICAgIG1ldGhvZE5vdEZvdW5kOiAoYXJnKSA9PiBnZXRFdGhKc29uUnBjRXJyb3IoZXJyb3JfY29uc3RhbnRzXzEuZXJyb3JDb2Rlcy5ycGMubWV0aG9kTm90Rm91bmQsIGFyZyksXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHZXQgYSBKU09OIFJQQyAyLjAgSW50ZXJuYWwgKC0zMjYwMykgZXJyb3IuXG4gICAgICAgICAqL1xuICAgICAgICBpbnRlcm5hbDogKGFyZykgPT4gZ2V0RXRoSnNvblJwY0Vycm9yKGVycm9yX2NvbnN0YW50c18xLmVycm9yQ29kZXMucnBjLmludGVybmFsLCBhcmcpLFxuICAgICAgICAvKipcbiAgICAgICAgICogR2V0IGEgSlNPTiBSUEMgMi4wIFNlcnZlciBlcnJvci5cbiAgICAgICAgICogUGVybWl0cyBpbnRlZ2VyIGVycm9yIGNvZGVzIGluIHRoZSBbIC0zMjA5OSA8PSAtMzIwMDUgXSByYW5nZS5cbiAgICAgICAgICogQ29kZXMgLTMyMDAwIHRocm91Z2ggLTMyMDA0IGFyZSByZXNlcnZlZCBieSBFSVAtMTQ3NC5cbiAgICAgICAgICovXG4gICAgICAgIHNlcnZlcjogKG9wdHMpID0+IHtcbiAgICAgICAgICAgIGlmICghb3B0cyB8fCB0eXBlb2Ygb3B0cyAhPT0gJ29iamVjdCcgfHwgQXJyYXkuaXNBcnJheShvcHRzKSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRXRoZXJldW0gUlBDIFNlcnZlciBlcnJvcnMgbXVzdCBwcm92aWRlIHNpbmdsZSBvYmplY3QgYXJndW1lbnQuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCB7IGNvZGUgfSA9IG9wdHM7XG4gICAgICAgICAgICBpZiAoIU51bWJlci5pc0ludGVnZXIoY29kZSkgfHwgY29kZSA+IC0zMjAwNSB8fCBjb2RlIDwgLTMyMDk5KSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdcImNvZGVcIiBtdXN0IGJlIGFuIGludGVnZXIgc3VjaCB0aGF0OiAtMzIwOTkgPD0gY29kZSA8PSAtMzIwMDUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBnZXRFdGhKc29uUnBjRXJyb3IoY29kZSwgb3B0cyk7XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHZXQgYW4gRXRoZXJldW0gSlNPTiBSUEMgSW52YWxpZCBJbnB1dCAoLTMyMDAwKSBlcnJvci5cbiAgICAgICAgICovXG4gICAgICAgIGludmFsaWRJbnB1dDogKGFyZykgPT4gZ2V0RXRoSnNvblJwY0Vycm9yKGVycm9yX2NvbnN0YW50c18xLmVycm9yQ29kZXMucnBjLmludmFsaWRJbnB1dCwgYXJnKSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdldCBhbiBFdGhlcmV1bSBKU09OIFJQQyBSZXNvdXJjZSBOb3QgRm91bmQgKC0zMjAwMSkgZXJyb3IuXG4gICAgICAgICAqL1xuICAgICAgICByZXNvdXJjZU5vdEZvdW5kOiAoYXJnKSA9PiBnZXRFdGhKc29uUnBjRXJyb3IoZXJyb3JfY29uc3RhbnRzXzEuZXJyb3JDb2Rlcy5ycGMucmVzb3VyY2VOb3RGb3VuZCwgYXJnKSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdldCBhbiBFdGhlcmV1bSBKU09OIFJQQyBSZXNvdXJjZSBVbmF2YWlsYWJsZSAoLTMyMDAyKSBlcnJvci5cbiAgICAgICAgICovXG4gICAgICAgIHJlc291cmNlVW5hdmFpbGFibGU6IChhcmcpID0+IGdldEV0aEpzb25ScGNFcnJvcihlcnJvcl9jb25zdGFudHNfMS5lcnJvckNvZGVzLnJwYy5yZXNvdXJjZVVuYXZhaWxhYmxlLCBhcmcpLFxuICAgICAgICAvKipcbiAgICAgICAgICogR2V0IGFuIEV0aGVyZXVtIEpTT04gUlBDIFRyYW5zYWN0aW9uIFJlamVjdGVkICgtMzIwMDMpIGVycm9yLlxuICAgICAgICAgKi9cbiAgICAgICAgdHJhbnNhY3Rpb25SZWplY3RlZDogKGFyZykgPT4gZ2V0RXRoSnNvblJwY0Vycm9yKGVycm9yX2NvbnN0YW50c18xLmVycm9yQ29kZXMucnBjLnRyYW5zYWN0aW9uUmVqZWN0ZWQsIGFyZyksXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHZXQgYW4gRXRoZXJldW0gSlNPTiBSUEMgTWV0aG9kIE5vdCBTdXBwb3J0ZWQgKC0zMjAwNCkgZXJyb3IuXG4gICAgICAgICAqL1xuICAgICAgICBtZXRob2ROb3RTdXBwb3J0ZWQ6IChhcmcpID0+IGdldEV0aEpzb25ScGNFcnJvcihlcnJvcl9jb25zdGFudHNfMS5lcnJvckNvZGVzLnJwYy5tZXRob2ROb3RTdXBwb3J0ZWQsIGFyZyksXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHZXQgYW4gRXRoZXJldW0gSlNPTiBSUEMgTGltaXQgRXhjZWVkZWQgKC0zMjAwNSkgZXJyb3IuXG4gICAgICAgICAqL1xuICAgICAgICBsaW1pdEV4Y2VlZGVkOiAoYXJnKSA9PiBnZXRFdGhKc29uUnBjRXJyb3IoZXJyb3JfY29uc3RhbnRzXzEuZXJyb3JDb2Rlcy5ycGMubGltaXRFeGNlZWRlZCwgYXJnKSxcbiAgICB9LFxuICAgIHByb3ZpZGVyOiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHZXQgYW4gRXRoZXJldW0gUHJvdmlkZXIgVXNlciBSZWplY3RlZCBSZXF1ZXN0ICg0MDAxKSBlcnJvci5cbiAgICAgICAgICovXG4gICAgICAgIHVzZXJSZWplY3RlZFJlcXVlc3Q6IChhcmcpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBnZXRFdGhQcm92aWRlckVycm9yKGVycm9yX2NvbnN0YW50c18xLmVycm9yQ29kZXMucHJvdmlkZXIudXNlclJlamVjdGVkUmVxdWVzdCwgYXJnKTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdldCBhbiBFdGhlcmV1bSBQcm92aWRlciBVbmF1dGhvcml6ZWQgKDQxMDApIGVycm9yLlxuICAgICAgICAgKi9cbiAgICAgICAgdW5hdXRob3JpemVkOiAoYXJnKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gZ2V0RXRoUHJvdmlkZXJFcnJvcihlcnJvcl9jb25zdGFudHNfMS5lcnJvckNvZGVzLnByb3ZpZGVyLnVuYXV0aG9yaXplZCwgYXJnKTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdldCBhbiBFdGhlcmV1bSBQcm92aWRlciBVbnN1cHBvcnRlZCBNZXRob2QgKDQyMDApIGVycm9yLlxuICAgICAgICAgKi9cbiAgICAgICAgdW5zdXBwb3J0ZWRNZXRob2Q6IChhcmcpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBnZXRFdGhQcm92aWRlckVycm9yKGVycm9yX2NvbnN0YW50c18xLmVycm9yQ29kZXMucHJvdmlkZXIudW5zdXBwb3J0ZWRNZXRob2QsIGFyZyk7XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHZXQgYW4gRXRoZXJldW0gUHJvdmlkZXIgTm90IENvbm5lY3RlZCAoNDkwMCkgZXJyb3IuXG4gICAgICAgICAqL1xuICAgICAgICBkaXNjb25uZWN0ZWQ6IChhcmcpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBnZXRFdGhQcm92aWRlckVycm9yKGVycm9yX2NvbnN0YW50c18xLmVycm9yQ29kZXMucHJvdmlkZXIuZGlzY29ubmVjdGVkLCBhcmcpO1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogR2V0IGFuIEV0aGVyZXVtIFByb3ZpZGVyIENoYWluIE5vdCBDb25uZWN0ZWQgKDQ5MDEpIGVycm9yLlxuICAgICAgICAgKi9cbiAgICAgICAgY2hhaW5EaXNjb25uZWN0ZWQ6IChhcmcpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBnZXRFdGhQcm92aWRlckVycm9yKGVycm9yX2NvbnN0YW50c18xLmVycm9yQ29kZXMucHJvdmlkZXIuY2hhaW5EaXNjb25uZWN0ZWQsIGFyZyk7XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHZXQgYSBjdXN0b20gRXRoZXJldW0gUHJvdmlkZXIgZXJyb3IuXG4gICAgICAgICAqL1xuICAgICAgICBjdXN0b206IChvcHRzKSA9PiB7XG4gICAgICAgICAgICBpZiAoIW9wdHMgfHwgdHlwZW9mIG9wdHMgIT09ICdvYmplY3QnIHx8IEFycmF5LmlzQXJyYXkob3B0cykpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0V0aGVyZXVtIFByb3ZpZGVyIGN1c3RvbSBlcnJvcnMgbXVzdCBwcm92aWRlIHNpbmdsZSBvYmplY3QgYXJndW1lbnQuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCB7IGNvZGUsIG1lc3NhZ2UsIGRhdGEgfSA9IG9wdHM7XG4gICAgICAgICAgICBpZiAoIW1lc3NhZ2UgfHwgdHlwZW9mIG1lc3NhZ2UgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdcIm1lc3NhZ2VcIiBtdXN0IGJlIGEgbm9uZW1wdHkgc3RyaW5nJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbmV3IGNsYXNzZXNfMS5FdGhlcmV1bVByb3ZpZGVyRXJyb3IoY29kZSwgbWVzc2FnZSwgZGF0YSk7XG4gICAgICAgIH0sXG4gICAgfSxcbn07XG4vLyBJbnRlcm5hbFxuZnVuY3Rpb24gZ2V0RXRoSnNvblJwY0Vycm9yKGNvZGUsIGFyZykge1xuICAgIGNvbnN0IFttZXNzYWdlLCBkYXRhXSA9IHBhcnNlT3B0cyhhcmcpO1xuICAgIHJldHVybiBuZXcgY2xhc3Nlc18xLkV0aGVyZXVtUnBjRXJyb3IoY29kZSwgbWVzc2FnZSB8fCB1dGlsc18xLmdldE1lc3NhZ2VGcm9tQ29kZShjb2RlKSwgZGF0YSk7XG59XG5mdW5jdGlvbiBnZXRFdGhQcm92aWRlckVycm9yKGNvZGUsIGFyZykge1xuICAgIGNvbnN0IFttZXNzYWdlLCBkYXRhXSA9IHBhcnNlT3B0cyhhcmcpO1xuICAgIHJldHVybiBuZXcgY2xhc3Nlc18xLkV0aGVyZXVtUHJvdmlkZXJFcnJvcihjb2RlLCBtZXNzYWdlIHx8IHV0aWxzXzEuZ2V0TWVzc2FnZUZyb21Db2RlKGNvZGUpLCBkYXRhKTtcbn1cbmZ1bmN0aW9uIHBhcnNlT3B0cyhhcmcpIHtcbiAgICBpZiAoYXJnKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYXJnID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgcmV0dXJuIFthcmddO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBhcmcgPT09ICdvYmplY3QnICYmICFBcnJheS5pc0FycmF5KGFyZykpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgbWVzc2FnZSwgZGF0YSB9ID0gYXJnO1xuICAgICAgICAgICAgaWYgKG1lc3NhZ2UgJiYgdHlwZW9mIG1lc3NhZ2UgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNdXN0IHNwZWNpZnkgc3RyaW5nIG1lc3NhZ2UuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gW21lc3NhZ2UgfHwgdW5kZWZpbmVkLCBkYXRhXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gW107XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2laWEp5YjNKekxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dmMzSmpMMlZ5Y205eWN5NTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3UVVGQlFTeDFRMEZCYjBVN1FVRkRjRVVzYlVOQlFUWkRPMEZCUXpkRExIVkVRVUVyUXp0QlFXVnNReXhSUVVGQkxGTkJRVk1zUjBGQlJ6dEpRVU4yUWl4SFFVRkhMRVZCUVVVN1VVRkZTRHM3VjBGRlJ6dFJRVU5JTEV0QlFVc3NSVUZCUlN4RFFVRkpMRWRCUVhGQ0xFVkJRVVVzUlVGQlJTeERRVUZETEd0Q1FVRnJRaXhEUVVOeVJDdzBRa0ZCVlN4RFFVRkRMRWRCUVVjc1EwRkJReXhMUVVGTExFVkJRVVVzUjBGQlJ5eERRVU14UWp0UlFVVkVPenRYUVVWSE8xRkJRMGdzWTBGQll5eEZRVUZGTEVOQlFVa3NSMEZCY1VJc1JVRkJSU3hGUVVGRkxFTkJRVU1zYTBKQlFXdENMRU5CUXpsRUxEUkNRVUZWTEVOQlFVTXNSMEZCUnl4RFFVRkRMR05CUVdNc1JVRkJSU3hIUVVGSExFTkJRMjVETzFGQlJVUTdPMWRCUlVjN1VVRkRTQ3hoUVVGaExFVkJRVVVzUTBGQlNTeEhRVUZ4UWl4RlFVRkZMRVZCUVVVc1EwRkJReXhyUWtGQmEwSXNRMEZETjBRc05FSkJRVlVzUTBGQlF5eEhRVUZITEVOQlFVTXNZVUZCWVN4RlFVRkZMRWRCUVVjc1EwRkRiRU03VVVGRlJEczdWMEZGUnp0UlFVTklMR05CUVdNc1JVRkJSU3hEUVVGSkxFZEJRWEZDTEVWQlFVVXNSVUZCUlN4RFFVRkRMR3RDUVVGclFpeERRVU01UkN3MFFrRkJWU3hEUVVGRExFZEJRVWNzUTBGQlF5eGpRVUZqTEVWQlFVVXNSMEZCUnl4RFFVTnVRenRSUVVWRU96dFhRVVZITzFGQlEwZ3NVVUZCVVN4RlFVRkZMRU5CUVVrc1IwRkJjVUlzUlVGQlJTeEZRVUZGTEVOQlFVTXNhMEpCUVd0Q0xFTkJRM2hFTERSQ1FVRlZMRU5CUVVNc1IwRkJSeXhEUVVGRExGRkJRVkVzUlVGQlJTeEhRVUZITEVOQlF6ZENPMUZCUlVRN096czdWMEZKUnp0UlFVTklMRTFCUVUwc1JVRkJSU3hEUVVGSkxFbEJRVEpDTEVWQlFVVXNSVUZCUlR0WlFVTjZReXhKUVVGSkxFTkJRVU1zU1VGQlNTeEpRVUZKTEU5QlFVOHNTVUZCU1N4TFFVRkxMRkZCUVZFc1NVRkJTU3hMUVVGTExFTkJRVU1zVDBGQlR5eERRVUZETEVsQlFVa3NRMEZCUXl4RlFVRkZPMmRDUVVNMVJDeE5RVUZOTEVsQlFVa3NTMEZCU3l4RFFVRkRMR2xGUVVGcFJTeERRVUZETEVOQlFVTTdZVUZEY0VZN1dVRkRSQ3hOUVVGTkxFVkJRVVVzU1VGQlNTeEZRVUZGTEVkQlFVY3NTVUZCU1N4RFFVRkRPMWxCUTNSQ0xFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNVMEZCVXl4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFbEJRVWtzUjBGQlJ5eERRVUZETEV0QlFVc3NTVUZCU1N4SlFVRkpMRWRCUVVjc1EwRkJReXhMUVVGTExFVkJRVVU3WjBKQlF6ZEVMRTFCUVUwc1NVRkJTU3hMUVVGTExFTkJRMklzSzBSQlFTdEVMRU5CUTJoRkxFTkJRVU03WVVGRFNEdFpRVU5FTEU5QlFVOHNhMEpCUVd0Q0xFTkJRVU1zU1VGQlNTeEZRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkRPMUZCUTNoRExFTkJRVU03VVVGRlJEczdWMEZGUnp0UlFVTklMRmxCUVZrc1JVRkJSU3hEUVVGSkxFZEJRWEZDTEVWQlFVVXNSVUZCUlN4RFFVRkRMR3RDUVVGclFpeERRVU0xUkN3MFFrRkJWU3hEUVVGRExFZEJRVWNzUTBGQlF5eFpRVUZaTEVWQlFVVXNSMEZCUnl4RFFVTnFRenRSUVVWRU96dFhRVVZITzFGQlEwZ3NaMEpCUVdkQ0xFVkJRVVVzUTBGQlNTeEhRVUZ4UWl4RlFVRkZMRVZCUVVVc1EwRkJReXhyUWtGQmEwSXNRMEZEYUVVc05FSkJRVlVzUTBGQlF5eEhRVUZITEVOQlFVTXNaMEpCUVdkQ0xFVkJRVVVzUjBGQlJ5eERRVU55UXp0UlFVVkVPenRYUVVWSE8xRkJRMGdzYlVKQlFXMUNMRVZCUVVVc1EwRkJTU3hIUVVGeFFpeEZRVUZGTEVWQlFVVXNRMEZCUXl4clFrRkJhMElzUTBGRGJrVXNORUpCUVZVc1EwRkJReXhIUVVGSExFTkJRVU1zYlVKQlFXMUNMRVZCUVVVc1IwRkJSeXhEUVVONFF6dFJRVVZFT3p0WFFVVkhPMUZCUTBnc2JVSkJRVzFDTEVWQlFVVXNRMEZCU1N4SFFVRnhRaXhGUVVGRkxFVkJRVVVzUTBGQlF5eHJRa0ZCYTBJc1EwRkRia1VzTkVKQlFWVXNRMEZCUXl4SFFVRkhMRU5CUVVNc2JVSkJRVzFDTEVWQlFVVXNSMEZCUnl4RFFVTjRRenRSUVVWRU96dFhRVVZITzFGQlEwZ3NhMEpCUVd0Q0xFVkJRVVVzUTBGQlNTeEhRVUZ4UWl4RlFVRkZMRVZCUVVVc1EwRkJReXhyUWtGQmEwSXNRMEZEYkVVc05FSkJRVlVzUTBGQlF5eEhRVUZITEVOQlFVTXNhMEpCUVd0Q0xFVkJRVVVzUjBGQlJ5eERRVU4yUXp0UlFVVkVPenRYUVVWSE8xRkJRMGdzWVVGQllTeEZRVUZGTEVOQlFVa3NSMEZCY1VJc1JVRkJSU3hGUVVGRkxFTkJRVU1zYTBKQlFXdENMRU5CUXpkRUxEUkNRVUZWTEVOQlFVTXNSMEZCUnl4RFFVRkRMR0ZCUVdFc1JVRkJSU3hIUVVGSExFTkJRMnhETzB0QlEwWTdTVUZGUkN4UlFVRlJMRVZCUVVVN1VVRkZVanM3VjBGRlJ6dFJRVU5JTEcxQ1FVRnRRaXhGUVVGRkxFTkJRVWtzUjBGQmNVSXNSVUZCUlN4RlFVRkZPMWxCUTJoRUxFOUJRVThzYlVKQlFXMUNMRU5CUTNoQ0xEUkNRVUZWTEVOQlFVTXNVVUZCVVN4RFFVRkRMRzFDUVVGdFFpeEZRVUZGTEVkQlFVY3NRMEZETjBNc1EwRkJRenRSUVVOS0xFTkJRVU03VVVGRlJEczdWMEZGUnp0UlFVTklMRmxCUVZrc1JVRkJSU3hEUVVGSkxFZEJRWEZDTEVWQlFVVXNSVUZCUlR0WlFVTjZReXhQUVVGUExHMUNRVUZ0UWl4RFFVTjRRaXcwUWtGQlZTeERRVUZETEZGQlFWRXNRMEZCUXl4WlFVRlpMRVZCUVVVc1IwRkJSeXhEUVVOMFF5eERRVUZETzFGQlEwb3NRMEZCUXp0UlFVVkVPenRYUVVWSE8xRkJRMGdzYVVKQlFXbENMRVZCUVVVc1EwRkJTU3hIUVVGeFFpeEZRVUZGTEVWQlFVVTdXVUZET1VNc1QwRkJUeXh0UWtGQmJVSXNRMEZEZUVJc05FSkJRVlVzUTBGQlF5eFJRVUZSTEVOQlFVTXNhVUpCUVdsQ0xFVkJRVVVzUjBGQlJ5eERRVU16UXl4RFFVRkRPMUZCUTBvc1EwRkJRenRSUVVWRU96dFhRVVZITzFGQlEwZ3NXVUZCV1N4RlFVRkZMRU5CUVVrc1IwRkJjVUlzUlVGQlJTeEZRVUZGTzFsQlEzcERMRTlCUVU4c2JVSkJRVzFDTEVOQlEzaENMRFJDUVVGVkxFTkJRVU1zVVVGQlVTeERRVUZETEZsQlFWa3NSVUZCUlN4SFFVRkhMRU5CUTNSRExFTkJRVU03VVVGRFNpeERRVUZETzFGQlJVUTdPMWRCUlVjN1VVRkRTQ3hwUWtGQmFVSXNSVUZCUlN4RFFVRkpMRWRCUVhGQ0xFVkJRVVVzUlVGQlJUdFpRVU01UXl4UFFVRlBMRzFDUVVGdFFpeERRVU40UWl3MFFrRkJWU3hEUVVGRExGRkJRVkVzUTBGQlF5eHBRa0ZCYVVJc1JVRkJSU3hIUVVGSExFTkJRek5ETEVOQlFVTTdVVUZEU2l4RFFVRkRPMUZCUlVRN08xZEJSVWM3VVVGRFNDeE5RVUZOTEVWQlFVVXNRMEZCU1N4SlFVRjFRaXhGUVVGRkxFVkJRVVU3V1VGRGNrTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1NVRkJTU3hQUVVGUExFbEJRVWtzUzBGQlN5eFJRVUZSTEVsQlFVa3NTMEZCU3l4RFFVRkRMRTlCUVU4c1EwRkJReXhKUVVGSkxFTkJRVU1zUlVGQlJUdG5Ra0ZETlVRc1RVRkJUU3hKUVVGSkxFdEJRVXNzUTBGQlF5eHpSVUZCYzBVc1EwRkJReXhEUVVGRE8yRkJRM3BHTzFsQlJVUXNUVUZCVFN4RlFVRkZMRWxCUVVrc1JVRkJSU3hQUVVGUExFVkJRVVVzU1VGQlNTeEZRVUZGTEVkQlFVY3NTVUZCU1N4RFFVRkRPMWxCUlhKRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVsQlFVa3NUMEZCVHl4UFFVRlBMRXRCUVVzc1VVRkJVU3hGUVVGRk8yZENRVU16UXl4TlFVRk5MRWxCUVVrc1MwRkJTeXhEUVVOaUxIRkRRVUZ4UXl4RFFVTjBReXhEUVVGRE8yRkJRMGc3V1VGRFJDeFBRVUZQTEVsQlFVa3NLMEpCUVhGQ0xFTkJRVU1zU1VGQlNTeEZRVUZGTEU5QlFVOHNSVUZCUlN4SlFVRkpMRU5CUVVNc1EwRkJRenRSUVVONFJDeERRVUZETzB0QlEwWTdRMEZEUml4RFFVRkRPMEZCUlVZc1YwRkJWenRCUVVWWUxGTkJRVk1zYTBKQlFXdENMRU5CUVVrc1NVRkJXU3hGUVVGRkxFZEJRWEZDTzBsQlEyaEZMRTFCUVUwc1EwRkJReXhQUVVGUExFVkJRVVVzU1VGQlNTeERRVUZETEVkQlFVY3NVMEZCVXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8wbEJRM1pETEU5QlFVOHNTVUZCU1N3d1FrRkJaMElzUTBGRGVrSXNTVUZCU1N4RlFVTktMRTlCUVU4c1NVRkJTU3d3UWtGQmEwSXNRMEZCUXl4SlFVRkpMRU5CUVVNc1JVRkRia01zU1VGQlNTeERRVU5NTEVOQlFVTTdRVUZEU2l4RFFVRkRPMEZCUlVRc1UwRkJVeXh0UWtGQmJVSXNRMEZCU1N4SlFVRlpMRVZCUVVVc1IwRkJjVUk3U1VGRGFrVXNUVUZCVFN4RFFVRkRMRTlCUVU4c1JVRkJSU3hKUVVGSkxFTkJRVU1zUjBGQlJ5eFRRVUZUTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1NVRkRka01zVDBGQlR5eEpRVUZKTEN0Q1FVRnhRaXhEUVVNNVFpeEpRVUZKTEVWQlEwb3NUMEZCVHl4SlFVRkpMREJDUVVGclFpeERRVUZETEVsQlFVa3NRMEZCUXl4RlFVTnVReXhKUVVGSkxFTkJRMHdzUTBGQlF6dEJRVU5LTEVOQlFVTTdRVUZGUkN4VFFVRlRMRk5CUVZNc1EwRkJTU3hIUVVGeFFqdEpRVU42UXl4SlFVRkpMRWRCUVVjc1JVRkJSVHRSUVVOUUxFbEJRVWtzVDBGQlR5eEhRVUZITEV0QlFVc3NVVUZCVVN4RlFVRkZPMWxCUXpOQ0xFOUJRVThzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0VFFVTmtPMkZCUVUwc1NVRkJTU3hQUVVGUExFZEJRVWNzUzBGQlN5eFJRVUZSTEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1QwRkJUeXhEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTzFsQlEzcEVMRTFCUVUwc1JVRkJSU3hQUVVGUExFVkJRVVVzU1VGQlNTeEZRVUZGTEVkQlFVY3NSMEZCUnl4RFFVRkRPMWxCUlRsQ0xFbEJRVWtzVDBGQlR5eEpRVUZKTEU5QlFVOHNUMEZCVHl4TFFVRkxMRkZCUVZFc1JVRkJSVHRuUWtGRE1VTXNUVUZCVFN4SlFVRkpMRXRCUVVzc1EwRkJReXc0UWtGQk9FSXNRMEZCUXl4RFFVRkRPMkZCUTJwRU8xbEJRMFFzVDBGQlR5eERRVUZETEU5QlFVOHNTVUZCU1N4VFFVRlRMRVZCUVVVc1NVRkJTU3hEUVVGRExFTkJRVU03VTBGRGNrTTdTMEZEUmp0SlFVTkVMRTlCUVU4c1JVRkJSU3hEUVVGRE8wRkJRMW9zUTBGQlF5SjkiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZ2V0TWVzc2FnZUZyb21Db2RlID0gZXhwb3J0cy5zZXJpYWxpemVFcnJvciA9IGV4cG9ydHMuRXRoZXJldW1Qcm92aWRlckVycm9yID0gZXhwb3J0cy5FdGhlcmV1bVJwY0Vycm9yID0gZXhwb3J0cy5ldGhFcnJvcnMgPSBleHBvcnRzLmVycm9yQ29kZXMgPSB2b2lkIDA7XG5jb25zdCBjbGFzc2VzXzEgPSByZXF1aXJlKFwiLi9jbGFzc2VzXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiRXRoZXJldW1ScGNFcnJvclwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gY2xhc3Nlc18xLkV0aGVyZXVtUnBjRXJyb3I7IH0gfSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJFdGhlcmV1bVByb3ZpZGVyRXJyb3JcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNsYXNzZXNfMS5FdGhlcmV1bVByb3ZpZGVyRXJyb3I7IH0gfSk7XG5jb25zdCB1dGlsc18xID0gcmVxdWlyZShcIi4vdXRpbHNcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJzZXJpYWxpemVFcnJvclwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdXRpbHNfMS5zZXJpYWxpemVFcnJvcjsgfSB9KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImdldE1lc3NhZ2VGcm9tQ29kZVwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdXRpbHNfMS5nZXRNZXNzYWdlRnJvbUNvZGU7IH0gfSk7XG5jb25zdCBlcnJvcnNfMSA9IHJlcXVpcmUoXCIuL2Vycm9yc1wiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImV0aEVycm9yc1wiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZXJyb3JzXzEuZXRoRXJyb3JzOyB9IH0pO1xuY29uc3QgZXJyb3JfY29uc3RhbnRzXzEgPSByZXF1aXJlKFwiLi9lcnJvci1jb25zdGFudHNcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJlcnJvckNvZGVzXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBlcnJvcl9jb25zdGFudHNfMS5lcnJvckNvZGVzOyB9IH0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYVc1a1pYZ3Vhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOXpjbU12YVc1a1pYZ3VkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3TzBGQlFVRXNkVU5CUVc5Rk8wRkJWV3hGTEdsSFFWWlBMREJDUVVGblFpeFBRVlZRTzBGQlEyaENMSE5IUVZoNVFpd3JRa0ZCY1VJc1QwRlhla0k3UVVGV2RrSXNiVU5CUldsQ08wRkJVMllzSzBaQlZrRXNjMEpCUVdNc1QwRlZRVHRCUVVOa0xHMUhRVmhuUWl3d1FrRkJhMElzVDBGWGFFSTdRVUZVY0VJc2NVTkJRWEZETzBGQlMyNURMREJHUVV4UExHdENRVUZUTEU5QlMxQTdRVUZLV0N4MVJFRkJLME03UVVGSE4wTXNNa1pCU0U4c05FSkJRVlVzVDBGSFVDSjkiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuc2VyaWFsaXplRXJyb3IgPSBleHBvcnRzLmlzVmFsaWRDb2RlID0gZXhwb3J0cy5nZXRNZXNzYWdlRnJvbUNvZGUgPSBleHBvcnRzLkpTT05fUlBDX1NFUlZFUl9FUlJPUl9NRVNTQUdFID0gdm9pZCAwO1xuY29uc3QgZXJyb3JfY29uc3RhbnRzXzEgPSByZXF1aXJlKFwiLi9lcnJvci1jb25zdGFudHNcIik7XG5jb25zdCBjbGFzc2VzXzEgPSByZXF1aXJlKFwiLi9jbGFzc2VzXCIpO1xuY29uc3QgRkFMTEJBQ0tfRVJST1JfQ09ERSA9IGVycm9yX2NvbnN0YW50c18xLmVycm9yQ29kZXMucnBjLmludGVybmFsO1xuY29uc3QgRkFMTEJBQ0tfTUVTU0FHRSA9ICdVbnNwZWNpZmllZCBlcnJvciBtZXNzYWdlLiBUaGlzIGlzIGEgYnVnLCBwbGVhc2UgcmVwb3J0IGl0Lic7XG5jb25zdCBGQUxMQkFDS19FUlJPUiA9IHtcbiAgICBjb2RlOiBGQUxMQkFDS19FUlJPUl9DT0RFLFxuICAgIG1lc3NhZ2U6IGdldE1lc3NhZ2VGcm9tQ29kZShGQUxMQkFDS19FUlJPUl9DT0RFKSxcbn07XG5leHBvcnRzLkpTT05fUlBDX1NFUlZFUl9FUlJPUl9NRVNTQUdFID0gJ1Vuc3BlY2lmaWVkIHNlcnZlciBlcnJvci4nO1xuLyoqXG4gKiBHZXRzIHRoZSBtZXNzYWdlIGZvciBhIGdpdmVuIGNvZGUsIG9yIGEgZmFsbGJhY2sgbWVzc2FnZSBpZiB0aGUgY29kZSBoYXNcbiAqIG5vIGNvcnJlc3BvbmRpbmcgbWVzc2FnZS5cbiAqL1xuZnVuY3Rpb24gZ2V0TWVzc2FnZUZyb21Db2RlKGNvZGUsIGZhbGxiYWNrTWVzc2FnZSA9IEZBTExCQUNLX01FU1NBR0UpIHtcbiAgICBpZiAoTnVtYmVyLmlzSW50ZWdlcihjb2RlKSkge1xuICAgICAgICBjb25zdCBjb2RlU3RyaW5nID0gY29kZS50b1N0cmluZygpO1xuICAgICAgICBpZiAoaGFzS2V5KGVycm9yX2NvbnN0YW50c18xLmVycm9yVmFsdWVzLCBjb2RlU3RyaW5nKSkge1xuICAgICAgICAgICAgcmV0dXJuIGVycm9yX2NvbnN0YW50c18xLmVycm9yVmFsdWVzW2NvZGVTdHJpbmddLm1lc3NhZ2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzSnNvblJwY1NlcnZlckVycm9yKGNvZGUpKSB7XG4gICAgICAgICAgICByZXR1cm4gZXhwb3J0cy5KU09OX1JQQ19TRVJWRVJfRVJST1JfTUVTU0FHRTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsbGJhY2tNZXNzYWdlO1xufVxuZXhwb3J0cy5nZXRNZXNzYWdlRnJvbUNvZGUgPSBnZXRNZXNzYWdlRnJvbUNvZGU7XG4vKipcbiAqIFJldHVybnMgd2hldGhlciB0aGUgZ2l2ZW4gY29kZSBpcyB2YWxpZC5cbiAqIEEgY29kZSBpcyBvbmx5IHZhbGlkIGlmIGl0IGhhcyBhIG1lc3NhZ2UuXG4gKi9cbmZ1bmN0aW9uIGlzVmFsaWRDb2RlKGNvZGUpIHtcbiAgICBpZiAoIU51bWJlci5pc0ludGVnZXIoY29kZSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjb25zdCBjb2RlU3RyaW5nID0gY29kZS50b1N0cmluZygpO1xuICAgIGlmIChlcnJvcl9jb25zdGFudHNfMS5lcnJvclZhbHVlc1tjb2RlU3RyaW5nXSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKGlzSnNvblJwY1NlcnZlckVycm9yKGNvZGUpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5leHBvcnRzLmlzVmFsaWRDb2RlID0gaXNWYWxpZENvZGU7XG4vKipcbiAqIFNlcmlhbGl6ZXMgdGhlIGdpdmVuIGVycm9yIHRvIGFuIEV0aGVyZXVtIEpTT04gUlBDLWNvbXBhdGlibGUgZXJyb3Igb2JqZWN0LlxuICogTWVyZWx5IGNvcGllcyB0aGUgZ2l2ZW4gZXJyb3IncyB2YWx1ZXMgaWYgaXQgaXMgYWxyZWFkeSBjb21wYXRpYmxlLlxuICogSWYgdGhlIGdpdmVuIGVycm9yIGlzIG5vdCBmdWxseSBjb21wYXRpYmxlLCBpdCB3aWxsIGJlIHByZXNlcnZlZCBvbiB0aGVcbiAqIHJldHVybmVkIG9iamVjdCdzIGRhdGEub3JpZ2luYWxFcnJvciBwcm9wZXJ0eS5cbiAqL1xuZnVuY3Rpb24gc2VyaWFsaXplRXJyb3IoZXJyb3IsIHsgZmFsbGJhY2tFcnJvciA9IEZBTExCQUNLX0VSUk9SLCBzaG91bGRJbmNsdWRlU3RhY2sgPSBmYWxzZSwgfSA9IHt9KSB7XG4gICAgdmFyIF9hLCBfYjtcbiAgICBpZiAoIWZhbGxiYWNrRXJyb3IgfHxcbiAgICAgICAgIU51bWJlci5pc0ludGVnZXIoZmFsbGJhY2tFcnJvci5jb2RlKSB8fFxuICAgICAgICB0eXBlb2YgZmFsbGJhY2tFcnJvci5tZXNzYWdlICE9PSAnc3RyaW5nJykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ011c3QgcHJvdmlkZSBmYWxsYmFjayBlcnJvciB3aXRoIGludGVnZXIgbnVtYmVyIGNvZGUgYW5kIHN0cmluZyBtZXNzYWdlLicpO1xuICAgIH1cbiAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBjbGFzc2VzXzEuRXRoZXJldW1ScGNFcnJvcikge1xuICAgICAgICByZXR1cm4gZXJyb3Iuc2VyaWFsaXplKCk7XG4gICAgfVxuICAgIGNvbnN0IHNlcmlhbGl6ZWQgPSB7fTtcbiAgICBpZiAoZXJyb3IgJiZcbiAgICAgICAgdHlwZW9mIGVycm9yID09PSAnb2JqZWN0JyAmJlxuICAgICAgICAhQXJyYXkuaXNBcnJheShlcnJvcikgJiZcbiAgICAgICAgaGFzS2V5KGVycm9yLCAnY29kZScpICYmXG4gICAgICAgIGlzVmFsaWRDb2RlKGVycm9yLmNvZGUpKSB7XG4gICAgICAgIGNvbnN0IF9lcnJvciA9IGVycm9yO1xuICAgICAgICBzZXJpYWxpemVkLmNvZGUgPSBfZXJyb3IuY29kZTtcbiAgICAgICAgaWYgKF9lcnJvci5tZXNzYWdlICYmIHR5cGVvZiBfZXJyb3IubWVzc2FnZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHNlcmlhbGl6ZWQubWVzc2FnZSA9IF9lcnJvci5tZXNzYWdlO1xuICAgICAgICAgICAgaWYgKGhhc0tleShfZXJyb3IsICdkYXRhJykpIHtcbiAgICAgICAgICAgICAgICBzZXJpYWxpemVkLmRhdGEgPSBfZXJyb3IuZGF0YTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHNlcmlhbGl6ZWQubWVzc2FnZSA9IGdldE1lc3NhZ2VGcm9tQ29kZShzZXJpYWxpemVkLmNvZGUpO1xuICAgICAgICAgICAgc2VyaWFsaXplZC5kYXRhID0geyBvcmlnaW5hbEVycm9yOiBhc3NpZ25PcmlnaW5hbEVycm9yKGVycm9yKSB9O1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBzZXJpYWxpemVkLmNvZGUgPSBmYWxsYmFja0Vycm9yLmNvZGU7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSAoX2EgPSBlcnJvcikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLm1lc3NhZ2U7XG4gICAgICAgIHNlcmlhbGl6ZWQubWVzc2FnZSA9IChtZXNzYWdlICYmIHR5cGVvZiBtZXNzYWdlID09PSAnc3RyaW5nJ1xuICAgICAgICAgICAgPyBtZXNzYWdlXG4gICAgICAgICAgICA6IGZhbGxiYWNrRXJyb3IubWVzc2FnZSk7XG4gICAgICAgIHNlcmlhbGl6ZWQuZGF0YSA9IHsgb3JpZ2luYWxFcnJvcjogYXNzaWduT3JpZ2luYWxFcnJvcihlcnJvcikgfTtcbiAgICB9XG4gICAgY29uc3Qgc3RhY2sgPSAoX2IgPSBlcnJvcikgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLnN0YWNrO1xuICAgIGlmIChzaG91bGRJbmNsdWRlU3RhY2sgJiYgZXJyb3IgJiYgc3RhY2sgJiYgdHlwZW9mIHN0YWNrID09PSAnc3RyaW5nJykge1xuICAgICAgICBzZXJpYWxpemVkLnN0YWNrID0gc3RhY2s7XG4gICAgfVxuICAgIHJldHVybiBzZXJpYWxpemVkO1xufVxuZXhwb3J0cy5zZXJpYWxpemVFcnJvciA9IHNlcmlhbGl6ZUVycm9yO1xuLy8gSW50ZXJuYWxcbmZ1bmN0aW9uIGlzSnNvblJwY1NlcnZlckVycm9yKGNvZGUpIHtcbiAgICByZXR1cm4gY29kZSA+PSAtMzIwOTkgJiYgY29kZSA8PSAtMzIwMDA7XG59XG5mdW5jdGlvbiBhc3NpZ25PcmlnaW5hbEVycm9yKGVycm9yKSB7XG4gICAgaWYgKGVycm9yICYmIHR5cGVvZiBlcnJvciA9PT0gJ29iamVjdCcgJiYgIUFycmF5LmlzQXJyYXkoZXJyb3IpKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBlcnJvcik7XG4gICAgfVxuICAgIHJldHVybiBlcnJvcjtcbn1cbmZ1bmN0aW9uIGhhc0tleShvYmosIGtleSkge1xuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pZFhScGJITXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOXpjbU12ZFhScGJITXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3TzBGQlFVRXNkVVJCUVRSRU8wRkJRelZFTEhWRFFVRjVSVHRCUVVWNlJTeE5RVUZOTEcxQ1FVRnRRaXhIUVVGSExEUkNRVUZWTEVOQlFVTXNSMEZCUnl4RFFVRkRMRkZCUVZFc1EwRkJRenRCUVVOd1JDeE5RVUZOTEdkQ1FVRm5RaXhIUVVGSExEWkVRVUUyUkN4RFFVRkRPMEZCUTNaR0xFMUJRVTBzWTBGQll5eEhRVUVyUWp0SlFVTnFSQ3hKUVVGSkxFVkJRVVVzYlVKQlFXMUNPMGxCUTNwQ0xFOUJRVThzUlVGQlJTeHJRa0ZCYTBJc1EwRkJReXh0UWtGQmJVSXNRMEZCUXp0RFFVTnFSQ3hEUVVGRE8wRkJSVmNzVVVGQlFTdzJRa0ZCTmtJc1IwRkJSeXd5UWtGQk1rSXNRMEZCUXp0QlFVbDZSVHM3TzBkQlIwYzdRVUZEU0N4VFFVRm5RaXhyUWtGQmEwSXNRMEZEYUVNc1NVRkJXU3hGUVVOYUxHdENRVUV3UWl4blFrRkJaMEk3U1VGRk1VTXNTVUZCU1N4TlFVRk5MRU5CUVVNc1UwRkJVeXhEUVVGRExFbEJRVWtzUTBGQlF5eEZRVUZGTzFGQlF6RkNMRTFCUVUwc1ZVRkJWU3hIUVVGSExFbEJRVWtzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXp0UlFVVnVReXhKUVVGSkxFMUJRVTBzUTBGQlF5dzJRa0ZCVnl4RlFVRkZMRlZCUVZVc1EwRkJReXhGUVVGRk8xbEJRMjVETEU5QlFVOHNOa0pCUVZjc1EwRkJReXhWUVVFeVFpeERRVUZETEVOQlFVTXNUMEZCVHl4RFFVRkRPMU5CUTNwRU8xRkJRMFFzU1VGQlNTeHZRa0ZCYjBJc1EwRkJReXhKUVVGSkxFTkJRVU1zUlVGQlJUdFpRVU01UWl4UFFVRlBMSEZEUVVFMlFpeERRVUZETzFOQlEzUkRPMHRCUTBZN1NVRkRSQ3hQUVVGUExHVkJRV1VzUTBGQlF6dEJRVU42UWl4RFFVRkRPMEZCWmtRc1owUkJaVU03UVVGRlJEczdPMGRCUjBjN1FVRkRTQ3hUUVVGblFpeFhRVUZYTEVOQlFVTXNTVUZCV1R0SlFVTjBReXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEZOQlFWTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1JVRkJSVHRSUVVNelFpeFBRVUZQTEV0QlFVc3NRMEZCUXp0TFFVTmtPMGxCUlVRc1RVRkJUU3hWUVVGVkxFZEJRVWNzU1VGQlNTeERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRPMGxCUTI1RExFbEJRVWtzTmtKQlFWY3NRMEZCUXl4VlFVRXlRaXhEUVVGRExFVkJRVVU3VVVGRE5VTXNUMEZCVHl4SlFVRkpMRU5CUVVNN1MwRkRZanRKUVVWRUxFbEJRVWtzYjBKQlFXOUNMRU5CUVVNc1NVRkJTU3hEUVVGRExFVkJRVVU3VVVGRE9VSXNUMEZCVHl4SlFVRkpMRU5CUVVNN1MwRkRZanRKUVVORUxFOUJRVThzUzBGQlN5eERRVUZETzBGQlEyWXNRMEZCUXp0QlFXUkVMR3REUVdORE8wRkJSVVE3T3pzN08wZEJTMGM3UVVGRFNDeFRRVUZuUWl4alFVRmpMRU5CUXpWQ0xFdEJRV01zUlVGRFpDeEZRVU5GTEdGQlFXRXNSMEZCUnl4alFVRmpMRVZCUXpsQ0xHdENRVUZyUWl4SFFVRkhMRXRCUVVzc1IwRkRNMElzUjBGQlJ5eEZRVUZGT3p0SlFVZE9MRWxCUTBVc1EwRkJReXhoUVVGaE8xRkJRMlFzUTBGQlF5eE5RVUZOTEVOQlFVTXNVMEZCVXl4RFFVRkRMR0ZCUVdFc1EwRkJReXhKUVVGSkxFTkJRVU03VVVGRGNrTXNUMEZCVHl4aFFVRmhMRU5CUVVNc1QwRkJUeXhMUVVGTExGRkJRVkVzUlVGRGVrTTdVVUZEUVN4TlFVRk5MRWxCUVVrc1MwRkJTeXhEUVVOaUxEQkZRVUV3UlN4RFFVTXpSU3hEUVVGRE8wdEJRMGc3U1VGRlJDeEpRVUZKTEV0QlFVc3NXVUZCV1N3d1FrRkJaMElzUlVGQlJUdFJRVU55UXl4UFFVRlBMRXRCUVVzc1EwRkJReXhUUVVGVExFVkJRVVVzUTBGQlF6dExRVU14UWp0SlFVVkVMRTFCUVUwc1ZVRkJWU3hIUVVGM1F5eEZRVUZGTEVOQlFVTTdTVUZGTTBRc1NVRkRSU3hMUVVGTE8xRkJRMHdzVDBGQlR5eExRVUZMTEV0QlFVc3NVVUZCVVR0UlFVTjZRaXhEUVVGRExFdEJRVXNzUTBGQlF5eFBRVUZQTEVOQlFVTXNTMEZCU3l4RFFVRkRPMUZCUTNKQ0xFMUJRVTBzUTBGQlF5eExRVUZuUXl4RlFVRkZMRTFCUVUwc1EwRkJRenRSUVVOb1JDeFhRVUZYTEVOQlFVVXNTMEZCYjBNc1EwRkJReXhKUVVGSkxFTkJRVU1zUlVGRGRrUTdVVUZEUVN4TlFVRk5MRTFCUVUwc1IwRkJSeXhMUVVFMFF5eERRVUZETzFGQlF6VkVMRlZCUVZVc1EwRkJReXhKUVVGSkxFZEJRVWNzVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXp0UlFVVTVRaXhKUVVGSkxFMUJRVTBzUTBGQlF5eFBRVUZQTEVsQlFVa3NUMEZCVHl4TlFVRk5MRU5CUVVNc1QwRkJUeXhMUVVGTExGRkJRVkVzUlVGQlJUdFpRVU40UkN4VlFVRlZMRU5CUVVNc1QwRkJUeXhIUVVGSExFMUJRVTBzUTBGQlF5eFBRVUZQTEVOQlFVTTdXVUZGY0VNc1NVRkJTU3hOUVVGTkxFTkJRVU1zVFVGQlRTeEZRVUZGTEUxQlFVMHNRMEZCUXl4RlFVRkZPMmRDUVVNeFFpeFZRVUZWTEVOQlFVTXNTVUZCU1N4SFFVRkhMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU03WVVGREwwSTdVMEZEUmp0aFFVRk5PMWxCUTB3c1ZVRkJWU3hEUVVGRExFOUJRVThzUjBGQlJ5eHJRa0ZCYTBJc1EwRkRjRU1zVlVGQmVVTXNRMEZCUXl4SlFVRkpMRU5CUTJoRUxFTkJRVU03V1VGRlJpeFZRVUZWTEVOQlFVTXNTVUZCU1N4SFFVRkhMRVZCUVVVc1lVRkJZU3hGUVVGRkxHMUNRVUZ0UWl4RFFVRkRMRXRCUVVzc1EwRkJReXhGUVVGRkxFTkJRVU03VTBGRGFrVTdTMEZEUmp0VFFVRk5PMUZCUTB3c1ZVRkJWU3hEUVVGRExFbEJRVWtzUjBGQlJ5eGhRVUZoTEVOQlFVTXNTVUZCU1N4RFFVRkRPMUZCUlhKRExFMUJRVTBzVDBGQlR5eFRRVUZKTEV0QlFXRXNNRU5CUVVVc1QwRkJUeXhEUVVGRE8xRkJSWGhETEZWQlFWVXNRMEZCUXl4UFFVRlBMRWRCUVVjc1EwRkRia0lzVDBGQlR5eEpRVUZKTEU5QlFVOHNUMEZCVHl4TFFVRkxMRkZCUVZFN1dVRkRjRU1zUTBGQlF5eERRVUZETEU5QlFVODdXVUZEVkN4RFFVRkRMRU5CUVVNc1lVRkJZU3hEUVVGRExFOUJRVThzUTBGRE1VSXNRMEZCUXp0UlFVTkdMRlZCUVZVc1EwRkJReXhKUVVGSkxFZEJRVWNzUlVGQlJTeGhRVUZoTEVWQlFVVXNiVUpCUVcxQ0xFTkJRVU1zUzBGQlN5eERRVUZETEVWQlFVVXNRMEZCUXp0TFFVTnFSVHRKUVVWRUxFMUJRVTBzUzBGQlN5eFRRVUZKTEV0QlFXRXNNRU5CUVVVc1MwRkJTeXhEUVVGRE8wbEJSWEJETEVsQlFVa3NhMEpCUVd0Q0xFbEJRVWtzUzBGQlN5eEpRVUZKTEV0QlFVc3NTVUZCU1N4UFFVRlBMRXRCUVVzc1MwRkJTeXhSUVVGUkxFVkJRVVU3VVVGRGNrVXNWVUZCVlN4RFFVRkRMRXRCUVVzc1IwRkJSeXhMUVVGTExFTkJRVU03UzBGRE1VSTdTVUZEUkN4UFFVRlBMRlZCUVhkRExFTkJRVU03UVVGRGJFUXNRMEZCUXp0QlFXeEZSQ3gzUTBGclJVTTdRVUZGUkN4WFFVRlhPMEZCUlZnc1UwRkJVeXh2UWtGQmIwSXNRMEZCUXl4SlFVRlpPMGxCUTNoRExFOUJRVThzU1VGQlNTeEpRVUZKTEVOQlFVTXNTMEZCU3l4SlFVRkpMRWxCUVVrc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF6dEJRVU14UXl4RFFVRkRPMEZCUlVRc1UwRkJVeXh0UWtGQmJVSXNRMEZCUXl4TFFVRmpPMGxCUTNwRExFbEJRVWtzUzBGQlN5eEpRVUZKTEU5QlFVOHNTMEZCU3l4TFFVRkxMRkZCUVZFc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eFBRVUZQTEVOQlFVTXNTMEZCU3l4RFFVRkRMRVZCUVVVN1VVRkRMMFFzVDBGQlR5eE5RVUZOTEVOQlFVTXNUVUZCVFN4RFFVRkRMRVZCUVVVc1JVRkJSU3hMUVVGTExFTkJRVU1zUTBGQlF6dExRVU5xUXp0SlFVTkVMRTlCUVU4c1MwRkJTeXhEUVVGRE8wRkJRMllzUTBGQlF6dEJRVVZFTEZOQlFWTXNUVUZCVFN4RFFVRkRMRWRCUVRSQ0xFVkJRVVVzUjBGQlZ6dEpRVU4yUkN4UFFVRlBMRTFCUVUwc1EwRkJReXhUUVVGVExFTkJRVU1zWTBGQll5eERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRVZCUVVVc1IwRkJSeXhEUVVGRExFTkJRVU03UVVGRGVFUXNRMEZCUXlKOSIsIi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSID0gdHlwZW9mIFJlZmxlY3QgPT09ICdvYmplY3QnID8gUmVmbGVjdCA6IG51bGxcbnZhciBSZWZsZWN0QXBwbHkgPSBSICYmIHR5cGVvZiBSLmFwcGx5ID09PSAnZnVuY3Rpb24nXG4gID8gUi5hcHBseVxuICA6IGZ1bmN0aW9uIFJlZmxlY3RBcHBseSh0YXJnZXQsIHJlY2VpdmVyLCBhcmdzKSB7XG4gICAgcmV0dXJuIEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseS5jYWxsKHRhcmdldCwgcmVjZWl2ZXIsIGFyZ3MpO1xuICB9XG5cbnZhciBSZWZsZWN0T3duS2V5c1xuaWYgKFIgJiYgdHlwZW9mIFIub3duS2V5cyA9PT0gJ2Z1bmN0aW9uJykge1xuICBSZWZsZWN0T3duS2V5cyA9IFIub3duS2V5c1xufSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gIFJlZmxlY3RPd25LZXlzID0gZnVuY3Rpb24gUmVmbGVjdE93bktleXModGFyZ2V0KSB7XG4gICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRhcmdldClcbiAgICAgIC5jb25jYXQoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyh0YXJnZXQpKTtcbiAgfTtcbn0gZWxzZSB7XG4gIFJlZmxlY3RPd25LZXlzID0gZnVuY3Rpb24gUmVmbGVjdE93bktleXModGFyZ2V0KSB7XG4gICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRhcmdldCk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIFByb2Nlc3NFbWl0V2FybmluZyh3YXJuaW5nKSB7XG4gIGlmIChjb25zb2xlICYmIGNvbnNvbGUud2FybikgY29uc29sZS53YXJuKHdhcm5pbmcpO1xufVxuXG52YXIgTnVtYmVySXNOYU4gPSBOdW1iZXIuaXNOYU4gfHwgZnVuY3Rpb24gTnVtYmVySXNOYU4odmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9PSB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gRXZlbnRFbWl0dGVyKCkge1xuICBFdmVudEVtaXR0ZXIuaW5pdC5jYWxsKHRoaXMpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBFdmVudEVtaXR0ZXI7XG5tb2R1bGUuZXhwb3J0cy5vbmNlID0gb25jZTtcblxuLy8gQmFja3dhcmRzLWNvbXBhdCB3aXRoIG5vZGUgMC4xMC54XG5FdmVudEVtaXR0ZXIuRXZlbnRFbWl0dGVyID0gRXZlbnRFbWl0dGVyO1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLl9ldmVudHMgPSB1bmRlZmluZWQ7XG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLl9ldmVudHNDb3VudCA9IDA7XG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLl9tYXhMaXN0ZW5lcnMgPSB1bmRlZmluZWQ7XG5cbi8vIEJ5IGRlZmF1bHQgRXZlbnRFbWl0dGVycyB3aWxsIHByaW50IGEgd2FybmluZyBpZiBtb3JlIHRoYW4gMTAgbGlzdGVuZXJzIGFyZVxuLy8gYWRkZWQgdG8gaXQuIFRoaXMgaXMgYSB1c2VmdWwgZGVmYXVsdCB3aGljaCBoZWxwcyBmaW5kaW5nIG1lbW9yeSBsZWFrcy5cbnZhciBkZWZhdWx0TWF4TGlzdGVuZXJzID0gMTA7XG5cbmZ1bmN0aW9uIGNoZWNrTGlzdGVuZXIobGlzdGVuZXIpIHtcbiAgaWYgKHR5cGVvZiBsaXN0ZW5lciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBcImxpc3RlbmVyXCIgYXJndW1lbnQgbXVzdCBiZSBvZiB0eXBlIEZ1bmN0aW9uLiBSZWNlaXZlZCB0eXBlICcgKyB0eXBlb2YgbGlzdGVuZXIpO1xuICB9XG59XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShFdmVudEVtaXR0ZXIsICdkZWZhdWx0TWF4TGlzdGVuZXJzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBkZWZhdWx0TWF4TGlzdGVuZXJzO1xuICB9LFxuICBzZXQ6IGZ1bmN0aW9uKGFyZykge1xuICAgIGlmICh0eXBlb2YgYXJnICE9PSAnbnVtYmVyJyB8fCBhcmcgPCAwIHx8IE51bWJlcklzTmFOKGFyZykpIHtcbiAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdUaGUgdmFsdWUgb2YgXCJkZWZhdWx0TWF4TGlzdGVuZXJzXCIgaXMgb3V0IG9mIHJhbmdlLiBJdCBtdXN0IGJlIGEgbm9uLW5lZ2F0aXZlIG51bWJlci4gUmVjZWl2ZWQgJyArIGFyZyArICcuJyk7XG4gICAgfVxuICAgIGRlZmF1bHRNYXhMaXN0ZW5lcnMgPSBhcmc7XG4gIH1cbn0pO1xuXG5FdmVudEVtaXR0ZXIuaW5pdCA9IGZ1bmN0aW9uKCkge1xuXG4gIGlmICh0aGlzLl9ldmVudHMgPT09IHVuZGVmaW5lZCB8fFxuICAgICAgdGhpcy5fZXZlbnRzID09PSBPYmplY3QuZ2V0UHJvdG90eXBlT2YodGhpcykuX2V2ZW50cykge1xuICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgdGhpcy5fZXZlbnRzQ291bnQgPSAwO1xuICB9XG5cbiAgdGhpcy5fbWF4TGlzdGVuZXJzID0gdGhpcy5fbWF4TGlzdGVuZXJzIHx8IHVuZGVmaW5lZDtcbn07XG5cbi8vIE9idmlvdXNseSBub3QgYWxsIEVtaXR0ZXJzIHNob3VsZCBiZSBsaW1pdGVkIHRvIDEwLiBUaGlzIGZ1bmN0aW9uIGFsbG93c1xuLy8gdGhhdCB0byBiZSBpbmNyZWFzZWQuIFNldCB0byB6ZXJvIGZvciB1bmxpbWl0ZWQuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnNldE1heExpc3RlbmVycyA9IGZ1bmN0aW9uIHNldE1heExpc3RlbmVycyhuKSB7XG4gIGlmICh0eXBlb2YgbiAhPT0gJ251bWJlcicgfHwgbiA8IDAgfHwgTnVtYmVySXNOYU4obikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignVGhlIHZhbHVlIG9mIFwiblwiIGlzIG91dCBvZiByYW5nZS4gSXQgbXVzdCBiZSBhIG5vbi1uZWdhdGl2ZSBudW1iZXIuIFJlY2VpdmVkICcgKyBuICsgJy4nKTtcbiAgfVxuICB0aGlzLl9tYXhMaXN0ZW5lcnMgPSBuO1xuICByZXR1cm4gdGhpcztcbn07XG5cbmZ1bmN0aW9uIF9nZXRNYXhMaXN0ZW5lcnModGhhdCkge1xuICBpZiAodGhhdC5fbWF4TGlzdGVuZXJzID09PSB1bmRlZmluZWQpXG4gICAgcmV0dXJuIEV2ZW50RW1pdHRlci5kZWZhdWx0TWF4TGlzdGVuZXJzO1xuICByZXR1cm4gdGhhdC5fbWF4TGlzdGVuZXJzO1xufVxuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmdldE1heExpc3RlbmVycyA9IGZ1bmN0aW9uIGdldE1heExpc3RlbmVycygpIHtcbiAgcmV0dXJuIF9nZXRNYXhMaXN0ZW5lcnModGhpcyk7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmVtaXQgPSBmdW5jdGlvbiBlbWl0KHR5cGUpIHtcbiAgdmFyIGFyZ3MgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIGFyZ3MucHVzaChhcmd1bWVudHNbaV0pO1xuICB2YXIgZG9FcnJvciA9ICh0eXBlID09PSAnZXJyb3InKTtcblxuICB2YXIgZXZlbnRzID0gdGhpcy5fZXZlbnRzO1xuICBpZiAoZXZlbnRzICE9PSB1bmRlZmluZWQpXG4gICAgZG9FcnJvciA9IChkb0Vycm9yICYmIGV2ZW50cy5lcnJvciA9PT0gdW5kZWZpbmVkKTtcbiAgZWxzZSBpZiAoIWRvRXJyb3IpXG4gICAgcmV0dXJuIGZhbHNlO1xuXG4gIC8vIElmIHRoZXJlIGlzIG5vICdlcnJvcicgZXZlbnQgbGlzdGVuZXIgdGhlbiB0aHJvdy5cbiAgaWYgKGRvRXJyb3IpIHtcbiAgICB2YXIgZXI7XG4gICAgaWYgKGFyZ3MubGVuZ3RoID4gMClcbiAgICAgIGVyID0gYXJnc1swXTtcbiAgICBpZiAoZXIgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgLy8gTm90ZTogVGhlIGNvbW1lbnRzIG9uIHRoZSBgdGhyb3dgIGxpbmVzIGFyZSBpbnRlbnRpb25hbCwgdGhleSBzaG93XG4gICAgICAvLyB1cCBpbiBOb2RlJ3Mgb3V0cHV0IGlmIHRoaXMgcmVzdWx0cyBpbiBhbiB1bmhhbmRsZWQgZXhjZXB0aW9uLlxuICAgICAgdGhyb3cgZXI7IC8vIFVuaGFuZGxlZCAnZXJyb3InIGV2ZW50XG4gICAgfVxuICAgIC8vIEF0IGxlYXN0IGdpdmUgc29tZSBraW5kIG9mIGNvbnRleHQgdG8gdGhlIHVzZXJcbiAgICB2YXIgZXJyID0gbmV3IEVycm9yKCdVbmhhbmRsZWQgZXJyb3IuJyArIChlciA/ICcgKCcgKyBlci5tZXNzYWdlICsgJyknIDogJycpKTtcbiAgICBlcnIuY29udGV4dCA9IGVyO1xuICAgIHRocm93IGVycjsgLy8gVW5oYW5kbGVkICdlcnJvcicgZXZlbnRcbiAgfVxuXG4gIHZhciBoYW5kbGVyID0gZXZlbnRzW3R5cGVdO1xuXG4gIGlmIChoYW5kbGVyID09PSB1bmRlZmluZWQpXG4gICAgcmV0dXJuIGZhbHNlO1xuXG4gIGlmICh0eXBlb2YgaGFuZGxlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIFJlZmxlY3RBcHBseShoYW5kbGVyLCB0aGlzLCBhcmdzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgbGVuID0gaGFuZGxlci5sZW5ndGg7XG4gICAgdmFyIGxpc3RlbmVycyA9IGFycmF5Q2xvbmUoaGFuZGxlciwgbGVuKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgKytpKVxuICAgICAgUmVmbGVjdEFwcGx5KGxpc3RlbmVyc1tpXSwgdGhpcywgYXJncyk7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbmZ1bmN0aW9uIF9hZGRMaXN0ZW5lcih0YXJnZXQsIHR5cGUsIGxpc3RlbmVyLCBwcmVwZW5kKSB7XG4gIHZhciBtO1xuICB2YXIgZXZlbnRzO1xuICB2YXIgZXhpc3Rpbmc7XG5cbiAgY2hlY2tMaXN0ZW5lcihsaXN0ZW5lcik7XG5cbiAgZXZlbnRzID0gdGFyZ2V0Ll9ldmVudHM7XG4gIGlmIChldmVudHMgPT09IHVuZGVmaW5lZCkge1xuICAgIGV2ZW50cyA9IHRhcmdldC5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICB0YXJnZXQuX2V2ZW50c0NvdW50ID0gMDtcbiAgfSBlbHNlIHtcbiAgICAvLyBUbyBhdm9pZCByZWN1cnNpb24gaW4gdGhlIGNhc2UgdGhhdCB0eXBlID09PSBcIm5ld0xpc3RlbmVyXCIhIEJlZm9yZVxuICAgIC8vIGFkZGluZyBpdCB0byB0aGUgbGlzdGVuZXJzLCBmaXJzdCBlbWl0IFwibmV3TGlzdGVuZXJcIi5cbiAgICBpZiAoZXZlbnRzLm5ld0xpc3RlbmVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRhcmdldC5lbWl0KCduZXdMaXN0ZW5lcicsIHR5cGUsXG4gICAgICAgICAgICAgICAgICBsaXN0ZW5lci5saXN0ZW5lciA/IGxpc3RlbmVyLmxpc3RlbmVyIDogbGlzdGVuZXIpO1xuXG4gICAgICAvLyBSZS1hc3NpZ24gYGV2ZW50c2AgYmVjYXVzZSBhIG5ld0xpc3RlbmVyIGhhbmRsZXIgY291bGQgaGF2ZSBjYXVzZWQgdGhlXG4gICAgICAvLyB0aGlzLl9ldmVudHMgdG8gYmUgYXNzaWduZWQgdG8gYSBuZXcgb2JqZWN0XG4gICAgICBldmVudHMgPSB0YXJnZXQuX2V2ZW50cztcbiAgICB9XG4gICAgZXhpc3RpbmcgPSBldmVudHNbdHlwZV07XG4gIH1cblxuICBpZiAoZXhpc3RpbmcgPT09IHVuZGVmaW5lZCkge1xuICAgIC8vIE9wdGltaXplIHRoZSBjYXNlIG9mIG9uZSBsaXN0ZW5lci4gRG9uJ3QgbmVlZCB0aGUgZXh0cmEgYXJyYXkgb2JqZWN0LlxuICAgIGV4aXN0aW5nID0gZXZlbnRzW3R5cGVdID0gbGlzdGVuZXI7XG4gICAgKyt0YXJnZXQuX2V2ZW50c0NvdW50O1xuICB9IGVsc2Uge1xuICAgIGlmICh0eXBlb2YgZXhpc3RpbmcgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIC8vIEFkZGluZyB0aGUgc2Vjb25kIGVsZW1lbnQsIG5lZWQgdG8gY2hhbmdlIHRvIGFycmF5LlxuICAgICAgZXhpc3RpbmcgPSBldmVudHNbdHlwZV0gPVxuICAgICAgICBwcmVwZW5kID8gW2xpc3RlbmVyLCBleGlzdGluZ10gOiBbZXhpc3RpbmcsIGxpc3RlbmVyXTtcbiAgICAgIC8vIElmIHdlJ3ZlIGFscmVhZHkgZ290IGFuIGFycmF5LCBqdXN0IGFwcGVuZC5cbiAgICB9IGVsc2UgaWYgKHByZXBlbmQpIHtcbiAgICAgIGV4aXN0aW5nLnVuc2hpZnQobGlzdGVuZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBleGlzdGluZy5wdXNoKGxpc3RlbmVyKTtcbiAgICB9XG5cbiAgICAvLyBDaGVjayBmb3IgbGlzdGVuZXIgbGVha1xuICAgIG0gPSBfZ2V0TWF4TGlzdGVuZXJzKHRhcmdldCk7XG4gICAgaWYgKG0gPiAwICYmIGV4aXN0aW5nLmxlbmd0aCA+IG0gJiYgIWV4aXN0aW5nLndhcm5lZCkge1xuICAgICAgZXhpc3Rpbmcud2FybmVkID0gdHJ1ZTtcbiAgICAgIC8vIE5vIGVycm9yIGNvZGUgZm9yIHRoaXMgc2luY2UgaXQgaXMgYSBXYXJuaW5nXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXhcbiAgICAgIHZhciB3ID0gbmV3IEVycm9yKCdQb3NzaWJsZSBFdmVudEVtaXR0ZXIgbWVtb3J5IGxlYWsgZGV0ZWN0ZWQuICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZy5sZW5ndGggKyAnICcgKyBTdHJpbmcodHlwZSkgKyAnIGxpc3RlbmVycyAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ2FkZGVkLiBVc2UgZW1pdHRlci5zZXRNYXhMaXN0ZW5lcnMoKSB0byAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ2luY3JlYXNlIGxpbWl0Jyk7XG4gICAgICB3Lm5hbWUgPSAnTWF4TGlzdGVuZXJzRXhjZWVkZWRXYXJuaW5nJztcbiAgICAgIHcuZW1pdHRlciA9IHRhcmdldDtcbiAgICAgIHcudHlwZSA9IHR5cGU7XG4gICAgICB3LmNvdW50ID0gZXhpc3RpbmcubGVuZ3RoO1xuICAgICAgUHJvY2Vzc0VtaXRXYXJuaW5nKHcpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuYWRkTGlzdGVuZXIgPSBmdW5jdGlvbiBhZGRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcikge1xuICByZXR1cm4gX2FkZExpc3RlbmVyKHRoaXMsIHR5cGUsIGxpc3RlbmVyLCBmYWxzZSk7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uID0gRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5hZGRMaXN0ZW5lcjtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5wcmVwZW5kTGlzdGVuZXIgPVxuICAgIGZ1bmN0aW9uIHByZXBlbmRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcikge1xuICAgICAgcmV0dXJuIF9hZGRMaXN0ZW5lcih0aGlzLCB0eXBlLCBsaXN0ZW5lciwgdHJ1ZSk7XG4gICAgfTtcblxuZnVuY3Rpb24gb25jZVdyYXBwZXIoKSB7XG4gIGlmICghdGhpcy5maXJlZCkge1xuICAgIHRoaXMudGFyZ2V0LnJlbW92ZUxpc3RlbmVyKHRoaXMudHlwZSwgdGhpcy53cmFwRm4pO1xuICAgIHRoaXMuZmlyZWQgPSB0cnVlO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKVxuICAgICAgcmV0dXJuIHRoaXMubGlzdGVuZXIuY2FsbCh0aGlzLnRhcmdldCk7XG4gICAgcmV0dXJuIHRoaXMubGlzdGVuZXIuYXBwbHkodGhpcy50YXJnZXQsIGFyZ3VtZW50cyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gX29uY2VXcmFwKHRhcmdldCwgdHlwZSwgbGlzdGVuZXIpIHtcbiAgdmFyIHN0YXRlID0geyBmaXJlZDogZmFsc2UsIHdyYXBGbjogdW5kZWZpbmVkLCB0YXJnZXQ6IHRhcmdldCwgdHlwZTogdHlwZSwgbGlzdGVuZXI6IGxpc3RlbmVyIH07XG4gIHZhciB3cmFwcGVkID0gb25jZVdyYXBwZXIuYmluZChzdGF0ZSk7XG4gIHdyYXBwZWQubGlzdGVuZXIgPSBsaXN0ZW5lcjtcbiAgc3RhdGUud3JhcEZuID0gd3JhcHBlZDtcbiAgcmV0dXJuIHdyYXBwZWQ7XG59XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub25jZSA9IGZ1bmN0aW9uIG9uY2UodHlwZSwgbGlzdGVuZXIpIHtcbiAgY2hlY2tMaXN0ZW5lcihsaXN0ZW5lcik7XG4gIHRoaXMub24odHlwZSwgX29uY2VXcmFwKHRoaXMsIHR5cGUsIGxpc3RlbmVyKSk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5wcmVwZW5kT25jZUxpc3RlbmVyID1cbiAgICBmdW5jdGlvbiBwcmVwZW5kT25jZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKSB7XG4gICAgICBjaGVja0xpc3RlbmVyKGxpc3RlbmVyKTtcbiAgICAgIHRoaXMucHJlcGVuZExpc3RlbmVyKHR5cGUsIF9vbmNlV3JhcCh0aGlzLCB0eXBlLCBsaXN0ZW5lcikpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuLy8gRW1pdHMgYSAncmVtb3ZlTGlzdGVuZXInIGV2ZW50IGlmIGFuZCBvbmx5IGlmIHRoZSBsaXN0ZW5lciB3YXMgcmVtb3ZlZC5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXIgPVxuICAgIGZ1bmN0aW9uIHJlbW92ZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKSB7XG4gICAgICB2YXIgbGlzdCwgZXZlbnRzLCBwb3NpdGlvbiwgaSwgb3JpZ2luYWxMaXN0ZW5lcjtcblxuICAgICAgY2hlY2tMaXN0ZW5lcihsaXN0ZW5lcik7XG5cbiAgICAgIGV2ZW50cyA9IHRoaXMuX2V2ZW50cztcbiAgICAgIGlmIChldmVudHMgPT09IHVuZGVmaW5lZClcbiAgICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICAgIGxpc3QgPSBldmVudHNbdHlwZV07XG4gICAgICBpZiAobGlzdCA9PT0gdW5kZWZpbmVkKVxuICAgICAgICByZXR1cm4gdGhpcztcblxuICAgICAgaWYgKGxpc3QgPT09IGxpc3RlbmVyIHx8IGxpc3QubGlzdGVuZXIgPT09IGxpc3RlbmVyKSB7XG4gICAgICAgIGlmICgtLXRoaXMuX2V2ZW50c0NvdW50ID09PSAwKVxuICAgICAgICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGRlbGV0ZSBldmVudHNbdHlwZV07XG4gICAgICAgICAgaWYgKGV2ZW50cy5yZW1vdmVMaXN0ZW5lcilcbiAgICAgICAgICAgIHRoaXMuZW1pdCgncmVtb3ZlTGlzdGVuZXInLCB0eXBlLCBsaXN0Lmxpc3RlbmVyIHx8IGxpc3RlbmVyKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgbGlzdCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBwb3NpdGlvbiA9IC0xO1xuXG4gICAgICAgIGZvciAoaSA9IGxpc3QubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICBpZiAobGlzdFtpXSA9PT0gbGlzdGVuZXIgfHwgbGlzdFtpXS5saXN0ZW5lciA9PT0gbGlzdGVuZXIpIHtcbiAgICAgICAgICAgIG9yaWdpbmFsTGlzdGVuZXIgPSBsaXN0W2ldLmxpc3RlbmVyO1xuICAgICAgICAgICAgcG9zaXRpb24gPSBpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBvc2l0aW9uIDwgMClcbiAgICAgICAgICByZXR1cm4gdGhpcztcblxuICAgICAgICBpZiAocG9zaXRpb24gPT09IDApXG4gICAgICAgICAgbGlzdC5zaGlmdCgpO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBzcGxpY2VPbmUobGlzdCwgcG9zaXRpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGxpc3QubGVuZ3RoID09PSAxKVxuICAgICAgICAgIGV2ZW50c1t0eXBlXSA9IGxpc3RbMF07XG5cbiAgICAgICAgaWYgKGV2ZW50cy5yZW1vdmVMaXN0ZW5lciAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgIHRoaXMuZW1pdCgncmVtb3ZlTGlzdGVuZXInLCB0eXBlLCBvcmlnaW5hbExpc3RlbmVyIHx8IGxpc3RlbmVyKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vZmYgPSBFdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyO1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUFsbExpc3RlbmVycyA9XG4gICAgZnVuY3Rpb24gcmVtb3ZlQWxsTGlzdGVuZXJzKHR5cGUpIHtcbiAgICAgIHZhciBsaXN0ZW5lcnMsIGV2ZW50cywgaTtcblxuICAgICAgZXZlbnRzID0gdGhpcy5fZXZlbnRzO1xuICAgICAgaWYgKGV2ZW50cyA9PT0gdW5kZWZpbmVkKVxuICAgICAgICByZXR1cm4gdGhpcztcblxuICAgICAgLy8gbm90IGxpc3RlbmluZyBmb3IgcmVtb3ZlTGlzdGVuZXIsIG5vIG5lZWQgdG8gZW1pdFxuICAgICAgaWYgKGV2ZW50cy5yZW1vdmVMaXN0ZW5lciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgdGhpcy5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgICB0aGlzLl9ldmVudHNDb3VudCA9IDA7XG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnRzW3R5cGVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBpZiAoLS10aGlzLl9ldmVudHNDb3VudCA9PT0gMClcbiAgICAgICAgICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgICAgZWxzZVxuICAgICAgICAgICAgZGVsZXRlIGV2ZW50c1t0eXBlXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cblxuICAgICAgLy8gZW1pdCByZW1vdmVMaXN0ZW5lciBmb3IgYWxsIGxpc3RlbmVycyBvbiBhbGwgZXZlbnRzXG4gICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGV2ZW50cyk7XG4gICAgICAgIHZhciBrZXk7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAga2V5ID0ga2V5c1tpXTtcbiAgICAgICAgICBpZiAoa2V5ID09PSAncmVtb3ZlTGlzdGVuZXInKSBjb250aW51ZTtcbiAgICAgICAgICB0aGlzLnJlbW92ZUFsbExpc3RlbmVycyhrZXkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVtb3ZlQWxsTGlzdGVuZXJzKCdyZW1vdmVMaXN0ZW5lcicpO1xuICAgICAgICB0aGlzLl9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICB0aGlzLl9ldmVudHNDb3VudCA9IDA7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuXG4gICAgICBsaXN0ZW5lcnMgPSBldmVudHNbdHlwZV07XG5cbiAgICAgIGlmICh0eXBlb2YgbGlzdGVuZXJzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXJzKTtcbiAgICAgIH0gZWxzZSBpZiAobGlzdGVuZXJzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgLy8gTElGTyBvcmRlclxuICAgICAgICBmb3IgKGkgPSBsaXN0ZW5lcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVyc1tpXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuZnVuY3Rpb24gX2xpc3RlbmVycyh0YXJnZXQsIHR5cGUsIHVud3JhcCkge1xuICB2YXIgZXZlbnRzID0gdGFyZ2V0Ll9ldmVudHM7XG5cbiAgaWYgKGV2ZW50cyA9PT0gdW5kZWZpbmVkKVxuICAgIHJldHVybiBbXTtcblxuICB2YXIgZXZsaXN0ZW5lciA9IGV2ZW50c1t0eXBlXTtcbiAgaWYgKGV2bGlzdGVuZXIgPT09IHVuZGVmaW5lZClcbiAgICByZXR1cm4gW107XG5cbiAgaWYgKHR5cGVvZiBldmxpc3RlbmVyID09PSAnZnVuY3Rpb24nKVxuICAgIHJldHVybiB1bndyYXAgPyBbZXZsaXN0ZW5lci5saXN0ZW5lciB8fCBldmxpc3RlbmVyXSA6IFtldmxpc3RlbmVyXTtcblxuICByZXR1cm4gdW53cmFwID9cbiAgICB1bndyYXBMaXN0ZW5lcnMoZXZsaXN0ZW5lcikgOiBhcnJheUNsb25lKGV2bGlzdGVuZXIsIGV2bGlzdGVuZXIubGVuZ3RoKTtcbn1cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5saXN0ZW5lcnMgPSBmdW5jdGlvbiBsaXN0ZW5lcnModHlwZSkge1xuICByZXR1cm4gX2xpc3RlbmVycyh0aGlzLCB0eXBlLCB0cnVlKTtcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmF3TGlzdGVuZXJzID0gZnVuY3Rpb24gcmF3TGlzdGVuZXJzKHR5cGUpIHtcbiAgcmV0dXJuIF9saXN0ZW5lcnModGhpcywgdHlwZSwgZmFsc2UpO1xufTtcblxuRXZlbnRFbWl0dGVyLmxpc3RlbmVyQ291bnQgPSBmdW5jdGlvbihlbWl0dGVyLCB0eXBlKSB7XG4gIGlmICh0eXBlb2YgZW1pdHRlci5saXN0ZW5lckNvdW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIGVtaXR0ZXIubGlzdGVuZXJDb3VudCh0eXBlKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbGlzdGVuZXJDb3VudC5jYWxsKGVtaXR0ZXIsIHR5cGUpO1xuICB9XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVyQ291bnQgPSBsaXN0ZW5lckNvdW50O1xuZnVuY3Rpb24gbGlzdGVuZXJDb3VudCh0eXBlKSB7XG4gIHZhciBldmVudHMgPSB0aGlzLl9ldmVudHM7XG5cbiAgaWYgKGV2ZW50cyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIGV2bGlzdGVuZXIgPSBldmVudHNbdHlwZV07XG5cbiAgICBpZiAodHlwZW9mIGV2bGlzdGVuZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiAxO1xuICAgIH0gZWxzZSBpZiAoZXZsaXN0ZW5lciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gZXZsaXN0ZW5lci5sZW5ndGg7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIDA7XG59XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuZXZlbnROYW1lcyA9IGZ1bmN0aW9uIGV2ZW50TmFtZXMoKSB7XG4gIHJldHVybiB0aGlzLl9ldmVudHNDb3VudCA+IDAgPyBSZWZsZWN0T3duS2V5cyh0aGlzLl9ldmVudHMpIDogW107XG59O1xuXG5mdW5jdGlvbiBhcnJheUNsb25lKGFyciwgbikge1xuICB2YXIgY29weSA9IG5ldyBBcnJheShuKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBuOyArK2kpXG4gICAgY29weVtpXSA9IGFycltpXTtcbiAgcmV0dXJuIGNvcHk7XG59XG5cbmZ1bmN0aW9uIHNwbGljZU9uZShsaXN0LCBpbmRleCkge1xuICBmb3IgKDsgaW5kZXggKyAxIDwgbGlzdC5sZW5ndGg7IGluZGV4KyspXG4gICAgbGlzdFtpbmRleF0gPSBsaXN0W2luZGV4ICsgMV07XG4gIGxpc3QucG9wKCk7XG59XG5cbmZ1bmN0aW9uIHVud3JhcExpc3RlbmVycyhhcnIpIHtcbiAgdmFyIHJldCA9IG5ldyBBcnJheShhcnIubGVuZ3RoKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXQubGVuZ3RoOyArK2kpIHtcbiAgICByZXRbaV0gPSBhcnJbaV0ubGlzdGVuZXIgfHwgYXJyW2ldO1xuICB9XG4gIHJldHVybiByZXQ7XG59XG5cbmZ1bmN0aW9uIG9uY2UoZW1pdHRlciwgbmFtZSkge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgIGZ1bmN0aW9uIGVycm9yTGlzdGVuZXIoZXJyKSB7XG4gICAgICBlbWl0dGVyLnJlbW92ZUxpc3RlbmVyKG5hbWUsIHJlc29sdmVyKTtcbiAgICAgIHJlamVjdChlcnIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlc29sdmVyKCkge1xuICAgICAgaWYgKHR5cGVvZiBlbWl0dGVyLnJlbW92ZUxpc3RlbmVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGVtaXR0ZXIucmVtb3ZlTGlzdGVuZXIoJ2Vycm9yJywgZXJyb3JMaXN0ZW5lcik7XG4gICAgICB9XG4gICAgICByZXNvbHZlKFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKSk7XG4gICAgfTtcblxuICAgIGV2ZW50VGFyZ2V0QWdub3N0aWNBZGRMaXN0ZW5lcihlbWl0dGVyLCBuYW1lLCByZXNvbHZlciwgeyBvbmNlOiB0cnVlIH0pO1xuICAgIGlmIChuYW1lICE9PSAnZXJyb3InKSB7XG4gICAgICBhZGRFcnJvckhhbmRsZXJJZkV2ZW50RW1pdHRlcihlbWl0dGVyLCBlcnJvckxpc3RlbmVyLCB7IG9uY2U6IHRydWUgfSk7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gYWRkRXJyb3JIYW5kbGVySWZFdmVudEVtaXR0ZXIoZW1pdHRlciwgaGFuZGxlciwgZmxhZ3MpIHtcbiAgaWYgKHR5cGVvZiBlbWl0dGVyLm9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZXZlbnRUYXJnZXRBZ25vc3RpY0FkZExpc3RlbmVyKGVtaXR0ZXIsICdlcnJvcicsIGhhbmRsZXIsIGZsYWdzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBldmVudFRhcmdldEFnbm9zdGljQWRkTGlzdGVuZXIoZW1pdHRlciwgbmFtZSwgbGlzdGVuZXIsIGZsYWdzKSB7XG4gIGlmICh0eXBlb2YgZW1pdHRlci5vbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGlmIChmbGFncy5vbmNlKSB7XG4gICAgICBlbWl0dGVyLm9uY2UobmFtZSwgbGlzdGVuZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbWl0dGVyLm9uKG5hbWUsIGxpc3RlbmVyKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAodHlwZW9mIGVtaXR0ZXIuYWRkRXZlbnRMaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIC8vIEV2ZW50VGFyZ2V0IGRvZXMgbm90IGhhdmUgYGVycm9yYCBldmVudCBzZW1hbnRpY3MgbGlrZSBOb2RlXG4gICAgLy8gRXZlbnRFbWl0dGVycywgd2UgZG8gbm90IGxpc3RlbiBmb3IgYGVycm9yYCBldmVudHMgaGVyZS5cbiAgICBlbWl0dGVyLmFkZEV2ZW50TGlzdGVuZXIobmFtZSwgZnVuY3Rpb24gd3JhcExpc3RlbmVyKGFyZykge1xuICAgICAgLy8gSUUgZG9lcyBub3QgaGF2ZSBidWlsdGluIGB7IG9uY2U6IHRydWUgfWAgc3VwcG9ydCBzbyB3ZVxuICAgICAgLy8gaGF2ZSB0byBkbyBpdCBtYW51YWxseS5cbiAgICAgIGlmIChmbGFncy5vbmNlKSB7XG4gICAgICAgIGVtaXR0ZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcihuYW1lLCB3cmFwTGlzdGVuZXIpO1xuICAgICAgfVxuICAgICAgbGlzdGVuZXIoYXJnKTtcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgXCJlbWl0dGVyXCIgYXJndW1lbnQgbXVzdCBiZSBvZiB0eXBlIEV2ZW50RW1pdHRlci4gUmVjZWl2ZWQgdHlwZSAnICsgdHlwZW9mIGVtaXR0ZXIpO1xuICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHN0cmluZ2lmeVxuc3RyaW5naWZ5LmRlZmF1bHQgPSBzdHJpbmdpZnlcbnN0cmluZ2lmeS5zdGFibGUgPSBkZXRlcm1pbmlzdGljU3RyaW5naWZ5XG5zdHJpbmdpZnkuc3RhYmxlU3RyaW5naWZ5ID0gZGV0ZXJtaW5pc3RpY1N0cmluZ2lmeVxuXG52YXIgTElNSVRfUkVQTEFDRV9OT0RFID0gJ1suLi5dJ1xudmFyIENJUkNVTEFSX1JFUExBQ0VfTk9ERSA9ICdbQ2lyY3VsYXJdJ1xuXG52YXIgYXJyID0gW11cbnZhciByZXBsYWNlclN0YWNrID0gW11cblxuZnVuY3Rpb24gZGVmYXVsdE9wdGlvbnMgKCkge1xuICByZXR1cm4ge1xuICAgIGRlcHRoTGltaXQ6IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSLFxuICAgIGVkZ2VzTGltaXQ6IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSXG4gIH1cbn1cblxuLy8gUmVndWxhciBzdHJpbmdpZnlcbmZ1bmN0aW9uIHN0cmluZ2lmeSAob2JqLCByZXBsYWNlciwgc3BhY2VyLCBvcHRpb25zKSB7XG4gIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBvcHRpb25zID0gZGVmYXVsdE9wdGlvbnMoKVxuICB9XG5cbiAgZGVjaXJjKG9iaiwgJycsIDAsIFtdLCB1bmRlZmluZWQsIDAsIG9wdGlvbnMpXG4gIHZhciByZXNcbiAgdHJ5IHtcbiAgICBpZiAocmVwbGFjZXJTdGFjay5sZW5ndGggPT09IDApIHtcbiAgICAgIHJlcyA9IEpTT04uc3RyaW5naWZ5KG9iaiwgcmVwbGFjZXIsIHNwYWNlcilcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzID0gSlNPTi5zdHJpbmdpZnkob2JqLCByZXBsYWNlR2V0dGVyVmFsdWVzKHJlcGxhY2VyKSwgc3BhY2VyKVxuICAgIH1cbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSgnW3VuYWJsZSB0byBzZXJpYWxpemUsIGNpcmN1bGFyIHJlZmVyZW5jZSBpcyB0b28gY29tcGxleCB0byBhbmFseXplXScpXG4gIH0gZmluYWxseSB7XG4gICAgd2hpbGUgKGFyci5sZW5ndGggIT09IDApIHtcbiAgICAgIHZhciBwYXJ0ID0gYXJyLnBvcCgpXG4gICAgICBpZiAocGFydC5sZW5ndGggPT09IDQpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHBhcnRbMF0sIHBhcnRbMV0sIHBhcnRbM10pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJ0WzBdW3BhcnRbMV1dID0gcGFydFsyXVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbmZ1bmN0aW9uIHNldFJlcGxhY2UgKHJlcGxhY2UsIHZhbCwgaywgcGFyZW50KSB7XG4gIHZhciBwcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHBhcmVudCwgaylcbiAgaWYgKHByb3BlcnR5RGVzY3JpcHRvci5nZXQgIT09IHVuZGVmaW5lZCkge1xuICAgIGlmIChwcm9wZXJ0eURlc2NyaXB0b3IuY29uZmlndXJhYmxlKSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocGFyZW50LCBrLCB7IHZhbHVlOiByZXBsYWNlIH0pXG4gICAgICBhcnIucHVzaChbcGFyZW50LCBrLCB2YWwsIHByb3BlcnR5RGVzY3JpcHRvcl0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlcGxhY2VyU3RhY2sucHVzaChbdmFsLCBrLCByZXBsYWNlXSlcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcGFyZW50W2tdID0gcmVwbGFjZVxuICAgIGFyci5wdXNoKFtwYXJlbnQsIGssIHZhbF0pXG4gIH1cbn1cblxuZnVuY3Rpb24gZGVjaXJjICh2YWwsIGssIGVkZ2VJbmRleCwgc3RhY2ssIHBhcmVudCwgZGVwdGgsIG9wdGlvbnMpIHtcbiAgZGVwdGggKz0gMVxuICB2YXIgaVxuICBpZiAodHlwZW9mIHZhbCA9PT0gJ29iamVjdCcgJiYgdmFsICE9PSBudWxsKSB7XG4gICAgZm9yIChpID0gMDsgaSA8IHN0YWNrLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoc3RhY2tbaV0gPT09IHZhbCkge1xuICAgICAgICBzZXRSZXBsYWNlKENJUkNVTEFSX1JFUExBQ0VfTk9ERSwgdmFsLCBrLCBwYXJlbnQpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChcbiAgICAgIHR5cGVvZiBvcHRpb25zLmRlcHRoTGltaXQgIT09ICd1bmRlZmluZWQnICYmXG4gICAgICBkZXB0aCA+IG9wdGlvbnMuZGVwdGhMaW1pdFxuICAgICkge1xuICAgICAgc2V0UmVwbGFjZShMSU1JVF9SRVBMQUNFX05PREUsIHZhbCwgaywgcGFyZW50KVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgdHlwZW9mIG9wdGlvbnMuZWRnZXNMaW1pdCAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgIGVkZ2VJbmRleCArIDEgPiBvcHRpb25zLmVkZ2VzTGltaXRcbiAgICApIHtcbiAgICAgIHNldFJlcGxhY2UoTElNSVRfUkVQTEFDRV9OT0RFLCB2YWwsIGssIHBhcmVudClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHN0YWNrLnB1c2godmFsKVxuICAgIC8vIE9wdGltaXplIGZvciBBcnJheXMuIEJpZyBhcnJheXMgY291bGQga2lsbCB0aGUgcGVyZm9ybWFuY2Ugb3RoZXJ3aXNlIVxuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbCkpIHtcbiAgICAgIGZvciAoaSA9IDA7IGkgPCB2YWwubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgZGVjaXJjKHZhbFtpXSwgaSwgaSwgc3RhY2ssIHZhbCwgZGVwdGgsIG9wdGlvbnMpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXModmFsKVxuICAgICAgZm9yIChpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXNbaV1cbiAgICAgICAgZGVjaXJjKHZhbFtrZXldLCBrZXksIGksIHN0YWNrLCB2YWwsIGRlcHRoLCBvcHRpb25zKVxuICAgICAgfVxuICAgIH1cbiAgICBzdGFjay5wb3AoKVxuICB9XG59XG5cbi8vIFN0YWJsZS1zdHJpbmdpZnlcbmZ1bmN0aW9uIGNvbXBhcmVGdW5jdGlvbiAoYSwgYikge1xuICBpZiAoYSA8IGIpIHtcbiAgICByZXR1cm4gLTFcbiAgfVxuICBpZiAoYSA+IGIpIHtcbiAgICByZXR1cm4gMVxuICB9XG4gIHJldHVybiAwXG59XG5cbmZ1bmN0aW9uIGRldGVybWluaXN0aWNTdHJpbmdpZnkgKG9iaiwgcmVwbGFjZXIsIHNwYWNlciwgb3B0aW9ucykge1xuICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgb3B0aW9ucyA9IGRlZmF1bHRPcHRpb25zKClcbiAgfVxuXG4gIHZhciB0bXAgPSBkZXRlcm1pbmlzdGljRGVjaXJjKG9iaiwgJycsIDAsIFtdLCB1bmRlZmluZWQsIDAsIG9wdGlvbnMpIHx8IG9ialxuICB2YXIgcmVzXG4gIHRyeSB7XG4gICAgaWYgKHJlcGxhY2VyU3RhY2subGVuZ3RoID09PSAwKSB7XG4gICAgICByZXMgPSBKU09OLnN0cmluZ2lmeSh0bXAsIHJlcGxhY2VyLCBzcGFjZXIpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlcyA9IEpTT04uc3RyaW5naWZ5KHRtcCwgcmVwbGFjZUdldHRlclZhbHVlcyhyZXBsYWNlciksIHNwYWNlcilcbiAgICB9XG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoJ1t1bmFibGUgdG8gc2VyaWFsaXplLCBjaXJjdWxhciByZWZlcmVuY2UgaXMgdG9vIGNvbXBsZXggdG8gYW5hbHl6ZV0nKVxuICB9IGZpbmFsbHkge1xuICAgIC8vIEVuc3VyZSB0aGF0IHdlIHJlc3RvcmUgdGhlIG9iamVjdCBhcyBpdCB3YXMuXG4gICAgd2hpbGUgKGFyci5sZW5ndGggIT09IDApIHtcbiAgICAgIHZhciBwYXJ0ID0gYXJyLnBvcCgpXG4gICAgICBpZiAocGFydC5sZW5ndGggPT09IDQpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHBhcnRbMF0sIHBhcnRbMV0sIHBhcnRbM10pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJ0WzBdW3BhcnRbMV1dID0gcGFydFsyXVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbmZ1bmN0aW9uIGRldGVybWluaXN0aWNEZWNpcmMgKHZhbCwgaywgZWRnZUluZGV4LCBzdGFjaywgcGFyZW50LCBkZXB0aCwgb3B0aW9ucykge1xuICBkZXB0aCArPSAxXG4gIHZhciBpXG4gIGlmICh0eXBlb2YgdmFsID09PSAnb2JqZWN0JyAmJiB2YWwgIT09IG51bGwpIHtcbiAgICBmb3IgKGkgPSAwOyBpIDwgc3RhY2subGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChzdGFja1tpXSA9PT0gdmFsKSB7XG4gICAgICAgIHNldFJlcGxhY2UoQ0lSQ1VMQVJfUkVQTEFDRV9OT0RFLCB2YWwsIGssIHBhcmVudClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICBpZiAodHlwZW9mIHZhbC50b0pTT04gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfSBjYXRjaCAoXykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgdHlwZW9mIG9wdGlvbnMuZGVwdGhMaW1pdCAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgIGRlcHRoID4gb3B0aW9ucy5kZXB0aExpbWl0XG4gICAgKSB7XG4gICAgICBzZXRSZXBsYWNlKExJTUlUX1JFUExBQ0VfTk9ERSwgdmFsLCBrLCBwYXJlbnQpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICB0eXBlb2Ygb3B0aW9ucy5lZGdlc0xpbWl0ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgZWRnZUluZGV4ICsgMSA+IG9wdGlvbnMuZWRnZXNMaW1pdFxuICAgICkge1xuICAgICAgc2V0UmVwbGFjZShMSU1JVF9SRVBMQUNFX05PREUsIHZhbCwgaywgcGFyZW50KVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgc3RhY2sucHVzaCh2YWwpXG4gICAgLy8gT3B0aW1pemUgZm9yIEFycmF5cy4gQmlnIGFycmF5cyBjb3VsZCBraWxsIHRoZSBwZXJmb3JtYW5jZSBvdGhlcndpc2UhXG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsKSkge1xuICAgICAgZm9yIChpID0gMDsgaSA8IHZhbC5sZW5ndGg7IGkrKykge1xuICAgICAgICBkZXRlcm1pbmlzdGljRGVjaXJjKHZhbFtpXSwgaSwgaSwgc3RhY2ssIHZhbCwgZGVwdGgsIG9wdGlvbnMpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIENyZWF0ZSBhIHRlbXBvcmFyeSBvYmplY3QgaW4gdGhlIHJlcXVpcmVkIHdheVxuICAgICAgdmFyIHRtcCA9IHt9XG4gICAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHZhbCkuc29ydChjb21wYXJlRnVuY3Rpb24pXG4gICAgICBmb3IgKGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIga2V5ID0ga2V5c1tpXVxuICAgICAgICBkZXRlcm1pbmlzdGljRGVjaXJjKHZhbFtrZXldLCBrZXksIGksIHN0YWNrLCB2YWwsIGRlcHRoLCBvcHRpb25zKVxuICAgICAgICB0bXBba2V5XSA9IHZhbFtrZXldXG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIHBhcmVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgYXJyLnB1c2goW3BhcmVudCwgaywgdmFsXSlcbiAgICAgICAgcGFyZW50W2tdID0gdG1wXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdG1wXG4gICAgICB9XG4gICAgfVxuICAgIHN0YWNrLnBvcCgpXG4gIH1cbn1cblxuLy8gd3JhcHMgcmVwbGFjZXIgZnVuY3Rpb24gdG8gaGFuZGxlIHZhbHVlcyB3ZSBjb3VsZG4ndCByZXBsYWNlXG4vLyBhbmQgbWFyayB0aGVtIGFzIHJlcGxhY2VkIHZhbHVlXG5mdW5jdGlvbiByZXBsYWNlR2V0dGVyVmFsdWVzIChyZXBsYWNlcikge1xuICByZXBsYWNlciA9XG4gICAgdHlwZW9mIHJlcGxhY2VyICE9PSAndW5kZWZpbmVkJ1xuICAgICAgPyByZXBsYWNlclxuICAgICAgOiBmdW5jdGlvbiAoaywgdikge1xuICAgICAgICByZXR1cm4gdlxuICAgICAgfVxuICByZXR1cm4gZnVuY3Rpb24gKGtleSwgdmFsKSB7XG4gICAgaWYgKHJlcGxhY2VyU3RhY2subGVuZ3RoID4gMCkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXBsYWNlclN0YWNrLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBwYXJ0ID0gcmVwbGFjZXJTdGFja1tpXVxuICAgICAgICBpZiAocGFydFsxXSA9PT0ga2V5ICYmIHBhcnRbMF0gPT09IHZhbCkge1xuICAgICAgICAgIHZhbCA9IHBhcnRbMl1cbiAgICAgICAgICByZXBsYWNlclN0YWNrLnNwbGljZShpLCAxKVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlcGxhY2VyLmNhbGwodGhpcywga2V5LCB2YWwpXG4gIH1cbn1cbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGhhcyA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHlcbiAgLCBwcmVmaXggPSAnfic7XG5cbi8qKlxuICogQ29uc3RydWN0b3IgdG8gY3JlYXRlIGEgc3RvcmFnZSBmb3Igb3VyIGBFRWAgb2JqZWN0cy5cbiAqIEFuIGBFdmVudHNgIGluc3RhbmNlIGlzIGEgcGxhaW4gb2JqZWN0IHdob3NlIHByb3BlcnRpZXMgYXJlIGV2ZW50IG5hbWVzLlxuICpcbiAqIEBjb25zdHJ1Y3RvclxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gRXZlbnRzKCkge31cblxuLy9cbi8vIFdlIHRyeSB0byBub3QgaW5oZXJpdCBmcm9tIGBPYmplY3QucHJvdG90eXBlYC4gSW4gc29tZSBlbmdpbmVzIGNyZWF0aW5nIGFuXG4vLyBpbnN0YW5jZSBpbiB0aGlzIHdheSBpcyBmYXN0ZXIgdGhhbiBjYWxsaW5nIGBPYmplY3QuY3JlYXRlKG51bGwpYCBkaXJlY3RseS5cbi8vIElmIGBPYmplY3QuY3JlYXRlKG51bGwpYCBpcyBub3Qgc3VwcG9ydGVkIHdlIHByZWZpeCB0aGUgZXZlbnQgbmFtZXMgd2l0aCBhXG4vLyBjaGFyYWN0ZXIgdG8gbWFrZSBzdXJlIHRoYXQgdGhlIGJ1aWx0LWluIG9iamVjdCBwcm9wZXJ0aWVzIGFyZSBub3Rcbi8vIG92ZXJyaWRkZW4gb3IgdXNlZCBhcyBhbiBhdHRhY2sgdmVjdG9yLlxuLy9cbmlmIChPYmplY3QuY3JlYXRlKSB7XG4gIEV2ZW50cy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXG4gIC8vXG4gIC8vIFRoaXMgaGFjayBpcyBuZWVkZWQgYmVjYXVzZSB0aGUgYF9fcHJvdG9fX2AgcHJvcGVydHkgaXMgc3RpbGwgaW5oZXJpdGVkIGluXG4gIC8vIHNvbWUgb2xkIGJyb3dzZXJzIGxpa2UgQW5kcm9pZCA0LCBpUGhvbmUgNS4xLCBPcGVyYSAxMSBhbmQgU2FmYXJpIDUuXG4gIC8vXG4gIGlmICghbmV3IEV2ZW50cygpLl9fcHJvdG9fXykgcHJlZml4ID0gZmFsc2U7XG59XG5cbi8qKlxuICogUmVwcmVzZW50YXRpb24gb2YgYSBzaW5nbGUgZXZlbnQgbGlzdGVuZXIuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGxpc3RlbmVyIGZ1bmN0aW9uLlxuICogQHBhcmFtIHsqfSBjb250ZXh0IFRoZSBjb250ZXh0IHRvIGludm9rZSB0aGUgbGlzdGVuZXIgd2l0aC5cbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29uY2U9ZmFsc2VdIFNwZWNpZnkgaWYgdGhlIGxpc3RlbmVyIGlzIGEgb25lLXRpbWUgbGlzdGVuZXIuXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIEVFKGZuLCBjb250ZXh0LCBvbmNlKSB7XG4gIHRoaXMuZm4gPSBmbjtcbiAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgdGhpcy5vbmNlID0gb25jZSB8fCBmYWxzZTtcbn1cblxuLyoqXG4gKiBBZGQgYSBsaXN0ZW5lciBmb3IgYSBnaXZlbiBldmVudC5cbiAqXG4gKiBAcGFyYW0ge0V2ZW50RW1pdHRlcn0gZW1pdHRlciBSZWZlcmVuY2UgdG8gdGhlIGBFdmVudEVtaXR0ZXJgIGluc3RhbmNlLlxuICogQHBhcmFtIHsoU3RyaW5nfFN5bWJvbCl9IGV2ZW50IFRoZSBldmVudCBuYW1lLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGxpc3RlbmVyIGZ1bmN0aW9uLlxuICogQHBhcmFtIHsqfSBjb250ZXh0IFRoZSBjb250ZXh0IHRvIGludm9rZSB0aGUgbGlzdGVuZXIgd2l0aC5cbiAqIEBwYXJhbSB7Qm9vbGVhbn0gb25jZSBTcGVjaWZ5IGlmIHRoZSBsaXN0ZW5lciBpcyBhIG9uZS10aW1lIGxpc3RlbmVyLlxuICogQHJldHVybnMge0V2ZW50RW1pdHRlcn1cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGFkZExpc3RlbmVyKGVtaXR0ZXIsIGV2ZW50LCBmbiwgY29udGV4dCwgb25jZSkge1xuICBpZiAodHlwZW9mIGZuICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIGxpc3RlbmVyIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuICB9XG5cbiAgdmFyIGxpc3RlbmVyID0gbmV3IEVFKGZuLCBjb250ZXh0IHx8IGVtaXR0ZXIsIG9uY2UpXG4gICAgLCBldnQgPSBwcmVmaXggPyBwcmVmaXggKyBldmVudCA6IGV2ZW50O1xuXG4gIGlmICghZW1pdHRlci5fZXZlbnRzW2V2dF0pIGVtaXR0ZXIuX2V2ZW50c1tldnRdID0gbGlzdGVuZXIsIGVtaXR0ZXIuX2V2ZW50c0NvdW50Kys7XG4gIGVsc2UgaWYgKCFlbWl0dGVyLl9ldmVudHNbZXZ0XS5mbikgZW1pdHRlci5fZXZlbnRzW2V2dF0ucHVzaChsaXN0ZW5lcik7XG4gIGVsc2UgZW1pdHRlci5fZXZlbnRzW2V2dF0gPSBbZW1pdHRlci5fZXZlbnRzW2V2dF0sIGxpc3RlbmVyXTtcblxuICByZXR1cm4gZW1pdHRlcjtcbn1cblxuLyoqXG4gKiBDbGVhciBldmVudCBieSBuYW1lLlxuICpcbiAqIEBwYXJhbSB7RXZlbnRFbWl0dGVyfSBlbWl0dGVyIFJlZmVyZW5jZSB0byB0aGUgYEV2ZW50RW1pdHRlcmAgaW5zdGFuY2UuXG4gKiBAcGFyYW0geyhTdHJpbmd8U3ltYm9sKX0gZXZ0IFRoZSBFdmVudCBuYW1lLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gY2xlYXJFdmVudChlbWl0dGVyLCBldnQpIHtcbiAgaWYgKC0tZW1pdHRlci5fZXZlbnRzQ291bnQgPT09IDApIGVtaXR0ZXIuX2V2ZW50cyA9IG5ldyBFdmVudHMoKTtcbiAgZWxzZSBkZWxldGUgZW1pdHRlci5fZXZlbnRzW2V2dF07XG59XG5cbi8qKlxuICogTWluaW1hbCBgRXZlbnRFbWl0dGVyYCBpbnRlcmZhY2UgdGhhdCBpcyBtb2xkZWQgYWdhaW5zdCB0aGUgTm9kZS5qc1xuICogYEV2ZW50RW1pdHRlcmAgaW50ZXJmYWNlLlxuICpcbiAqIEBjb25zdHJ1Y3RvclxuICogQHB1YmxpY1xuICovXG5mdW5jdGlvbiBFdmVudEVtaXR0ZXIoKSB7XG4gIHRoaXMuX2V2ZW50cyA9IG5ldyBFdmVudHMoKTtcbiAgdGhpcy5fZXZlbnRzQ291bnQgPSAwO1xufVxuXG4vKipcbiAqIFJldHVybiBhbiBhcnJheSBsaXN0aW5nIHRoZSBldmVudHMgZm9yIHdoaWNoIHRoZSBlbWl0dGVyIGhhcyByZWdpc3RlcmVkXG4gKiBsaXN0ZW5lcnMuXG4gKlxuICogQHJldHVybnMge0FycmF5fVxuICogQHB1YmxpY1xuICovXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmV2ZW50TmFtZXMgPSBmdW5jdGlvbiBldmVudE5hbWVzKCkge1xuICB2YXIgbmFtZXMgPSBbXVxuICAgICwgZXZlbnRzXG4gICAgLCBuYW1lO1xuXG4gIGlmICh0aGlzLl9ldmVudHNDb3VudCA9PT0gMCkgcmV0dXJuIG5hbWVzO1xuXG4gIGZvciAobmFtZSBpbiAoZXZlbnRzID0gdGhpcy5fZXZlbnRzKSkge1xuICAgIGlmIChoYXMuY2FsbChldmVudHMsIG5hbWUpKSBuYW1lcy5wdXNoKHByZWZpeCA/IG5hbWUuc2xpY2UoMSkgOiBuYW1lKTtcbiAgfVxuXG4gIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgcmV0dXJuIG5hbWVzLmNvbmNhdChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKGV2ZW50cykpO1xuICB9XG5cbiAgcmV0dXJuIG5hbWVzO1xufTtcblxuLyoqXG4gKiBSZXR1cm4gdGhlIGxpc3RlbmVycyByZWdpc3RlcmVkIGZvciBhIGdpdmVuIGV2ZW50LlxuICpcbiAqIEBwYXJhbSB7KFN0cmluZ3xTeW1ib2wpfSBldmVudCBUaGUgZXZlbnQgbmFtZS5cbiAqIEByZXR1cm5zIHtBcnJheX0gVGhlIHJlZ2lzdGVyZWQgbGlzdGVuZXJzLlxuICogQHB1YmxpY1xuICovXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVycyA9IGZ1bmN0aW9uIGxpc3RlbmVycyhldmVudCkge1xuICB2YXIgZXZ0ID0gcHJlZml4ID8gcHJlZml4ICsgZXZlbnQgOiBldmVudFxuICAgICwgaGFuZGxlcnMgPSB0aGlzLl9ldmVudHNbZXZ0XTtcblxuICBpZiAoIWhhbmRsZXJzKSByZXR1cm4gW107XG4gIGlmIChoYW5kbGVycy5mbikgcmV0dXJuIFtoYW5kbGVycy5mbl07XG5cbiAgZm9yICh2YXIgaSA9IDAsIGwgPSBoYW5kbGVycy5sZW5ndGgsIGVlID0gbmV3IEFycmF5KGwpOyBpIDwgbDsgaSsrKSB7XG4gICAgZWVbaV0gPSBoYW5kbGVyc1tpXS5mbjtcbiAgfVxuXG4gIHJldHVybiBlZTtcbn07XG5cbi8qKlxuICogUmV0dXJuIHRoZSBudW1iZXIgb2YgbGlzdGVuZXJzIGxpc3RlbmluZyB0byBhIGdpdmVuIGV2ZW50LlxuICpcbiAqIEBwYXJhbSB7KFN0cmluZ3xTeW1ib2wpfSBldmVudCBUaGUgZXZlbnQgbmFtZS5cbiAqIEByZXR1cm5zIHtOdW1iZXJ9IFRoZSBudW1iZXIgb2YgbGlzdGVuZXJzLlxuICogQHB1YmxpY1xuICovXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVyQ291bnQgPSBmdW5jdGlvbiBsaXN0ZW5lckNvdW50KGV2ZW50KSB7XG4gIHZhciBldnQgPSBwcmVmaXggPyBwcmVmaXggKyBldmVudCA6IGV2ZW50XG4gICAgLCBsaXN0ZW5lcnMgPSB0aGlzLl9ldmVudHNbZXZ0XTtcblxuICBpZiAoIWxpc3RlbmVycykgcmV0dXJuIDA7XG4gIGlmIChsaXN0ZW5lcnMuZm4pIHJldHVybiAxO1xuICByZXR1cm4gbGlzdGVuZXJzLmxlbmd0aDtcbn07XG5cbi8qKlxuICogQ2FsbHMgZWFjaCBvZiB0aGUgbGlzdGVuZXJzIHJlZ2lzdGVyZWQgZm9yIGEgZ2l2ZW4gZXZlbnQuXG4gKlxuICogQHBhcmFtIHsoU3RyaW5nfFN5bWJvbCl9IGV2ZW50IFRoZSBldmVudCBuYW1lLlxuICogQHJldHVybnMge0Jvb2xlYW59IGB0cnVlYCBpZiB0aGUgZXZlbnQgaGFkIGxpc3RlbmVycywgZWxzZSBgZmFsc2VgLlxuICogQHB1YmxpY1xuICovXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmVtaXQgPSBmdW5jdGlvbiBlbWl0KGV2ZW50LCBhMSwgYTIsIGEzLCBhNCwgYTUpIHtcbiAgdmFyIGV2dCA9IHByZWZpeCA/IHByZWZpeCArIGV2ZW50IDogZXZlbnQ7XG5cbiAgaWYgKCF0aGlzLl9ldmVudHNbZXZ0XSkgcmV0dXJuIGZhbHNlO1xuXG4gIHZhciBsaXN0ZW5lcnMgPSB0aGlzLl9ldmVudHNbZXZ0XVxuICAgICwgbGVuID0gYXJndW1lbnRzLmxlbmd0aFxuICAgICwgYXJnc1xuICAgICwgaTtcblxuICBpZiAobGlzdGVuZXJzLmZuKSB7XG4gICAgaWYgKGxpc3RlbmVycy5vbmNlKSB0aGlzLnJlbW92ZUxpc3RlbmVyKGV2ZW50LCBsaXN0ZW5lcnMuZm4sIHVuZGVmaW5lZCwgdHJ1ZSk7XG5cbiAgICBzd2l0Y2ggKGxlbikge1xuICAgICAgY2FzZSAxOiByZXR1cm4gbGlzdGVuZXJzLmZuLmNhbGwobGlzdGVuZXJzLmNvbnRleHQpLCB0cnVlO1xuICAgICAgY2FzZSAyOiByZXR1cm4gbGlzdGVuZXJzLmZuLmNhbGwobGlzdGVuZXJzLmNvbnRleHQsIGExKSwgdHJ1ZTtcbiAgICAgIGNhc2UgMzogcmV0dXJuIGxpc3RlbmVycy5mbi5jYWxsKGxpc3RlbmVycy5jb250ZXh0LCBhMSwgYTIpLCB0cnVlO1xuICAgICAgY2FzZSA0OiByZXR1cm4gbGlzdGVuZXJzLmZuLmNhbGwobGlzdGVuZXJzLmNvbnRleHQsIGExLCBhMiwgYTMpLCB0cnVlO1xuICAgICAgY2FzZSA1OiByZXR1cm4gbGlzdGVuZXJzLmZuLmNhbGwobGlzdGVuZXJzLmNvbnRleHQsIGExLCBhMiwgYTMsIGE0KSwgdHJ1ZTtcbiAgICAgIGNhc2UgNjogcmV0dXJuIGxpc3RlbmVycy5mbi5jYWxsKGxpc3RlbmVycy5jb250ZXh0LCBhMSwgYTIsIGEzLCBhNCwgYTUpLCB0cnVlO1xuICAgIH1cblxuICAgIGZvciAoaSA9IDEsIGFyZ3MgPSBuZXcgQXJyYXkobGVuIC0xKTsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICB9XG5cbiAgICBsaXN0ZW5lcnMuZm4uYXBwbHkobGlzdGVuZXJzLmNvbnRleHQsIGFyZ3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBsZW5ndGggPSBsaXN0ZW5lcnMubGVuZ3RoXG4gICAgICAsIGo7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChsaXN0ZW5lcnNbaV0ub25jZSkgdGhpcy5yZW1vdmVMaXN0ZW5lcihldmVudCwgbGlzdGVuZXJzW2ldLmZuLCB1bmRlZmluZWQsIHRydWUpO1xuXG4gICAgICBzd2l0Y2ggKGxlbikge1xuICAgICAgICBjYXNlIDE6IGxpc3RlbmVyc1tpXS5mbi5jYWxsKGxpc3RlbmVyc1tpXS5jb250ZXh0KTsgYnJlYWs7XG4gICAgICAgIGNhc2UgMjogbGlzdGVuZXJzW2ldLmZuLmNhbGwobGlzdGVuZXJzW2ldLmNvbnRleHQsIGExKTsgYnJlYWs7XG4gICAgICAgIGNhc2UgMzogbGlzdGVuZXJzW2ldLmZuLmNhbGwobGlzdGVuZXJzW2ldLmNvbnRleHQsIGExLCBhMik7IGJyZWFrO1xuICAgICAgICBjYXNlIDQ6IGxpc3RlbmVyc1tpXS5mbi5jYWxsKGxpc3RlbmVyc1tpXS5jb250ZXh0LCBhMSwgYTIsIGEzKTsgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgaWYgKCFhcmdzKSBmb3IgKGogPSAxLCBhcmdzID0gbmV3IEFycmF5KGxlbiAtMSk7IGogPCBsZW47IGorKykge1xuICAgICAgICAgICAgYXJnc1tqIC0gMV0gPSBhcmd1bWVudHNbal07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbGlzdGVuZXJzW2ldLmZuLmFwcGx5KGxpc3RlbmVyc1tpXS5jb250ZXh0LCBhcmdzKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbi8qKlxuICogQWRkIGEgbGlzdGVuZXIgZm9yIGEgZ2l2ZW4gZXZlbnQuXG4gKlxuICogQHBhcmFtIHsoU3RyaW5nfFN5bWJvbCl9IGV2ZW50IFRoZSBldmVudCBuYW1lLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGxpc3RlbmVyIGZ1bmN0aW9uLlxuICogQHBhcmFtIHsqfSBbY29udGV4dD10aGlzXSBUaGUgY29udGV4dCB0byBpbnZva2UgdGhlIGxpc3RlbmVyIHdpdGguXG4gKiBAcmV0dXJucyB7RXZlbnRFbWl0dGVyfSBgdGhpc2AuXG4gKiBAcHVibGljXG4gKi9cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub24gPSBmdW5jdGlvbiBvbihldmVudCwgZm4sIGNvbnRleHQpIHtcbiAgcmV0dXJuIGFkZExpc3RlbmVyKHRoaXMsIGV2ZW50LCBmbiwgY29udGV4dCwgZmFsc2UpO1xufTtcblxuLyoqXG4gKiBBZGQgYSBvbmUtdGltZSBsaXN0ZW5lciBmb3IgYSBnaXZlbiBldmVudC5cbiAqXG4gKiBAcGFyYW0geyhTdHJpbmd8U3ltYm9sKX0gZXZlbnQgVGhlIGV2ZW50IG5hbWUuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgbGlzdGVuZXIgZnVuY3Rpb24uXG4gKiBAcGFyYW0geyp9IFtjb250ZXh0PXRoaXNdIFRoZSBjb250ZXh0IHRvIGludm9rZSB0aGUgbGlzdGVuZXIgd2l0aC5cbiAqIEByZXR1cm5zIHtFdmVudEVtaXR0ZXJ9IGB0aGlzYC5cbiAqIEBwdWJsaWNcbiAqL1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbmNlID0gZnVuY3Rpb24gb25jZShldmVudCwgZm4sIGNvbnRleHQpIHtcbiAgcmV0dXJuIGFkZExpc3RlbmVyKHRoaXMsIGV2ZW50LCBmbiwgY29udGV4dCwgdHJ1ZSk7XG59O1xuXG4vKipcbiAqIFJlbW92ZSB0aGUgbGlzdGVuZXJzIG9mIGEgZ2l2ZW4gZXZlbnQuXG4gKlxuICogQHBhcmFtIHsoU3RyaW5nfFN5bWJvbCl9IGV2ZW50IFRoZSBldmVudCBuYW1lLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gT25seSByZW1vdmUgdGhlIGxpc3RlbmVycyB0aGF0IG1hdGNoIHRoaXMgZnVuY3Rpb24uXG4gKiBAcGFyYW0geyp9IGNvbnRleHQgT25seSByZW1vdmUgdGhlIGxpc3RlbmVycyB0aGF0IGhhdmUgdGhpcyBjb250ZXh0LlxuICogQHBhcmFtIHtCb29sZWFufSBvbmNlIE9ubHkgcmVtb3ZlIG9uZS10aW1lIGxpc3RlbmVycy5cbiAqIEByZXR1cm5zIHtFdmVudEVtaXR0ZXJ9IGB0aGlzYC5cbiAqIEBwdWJsaWNcbiAqL1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lciA9IGZ1bmN0aW9uIHJlbW92ZUxpc3RlbmVyKGV2ZW50LCBmbiwgY29udGV4dCwgb25jZSkge1xuICB2YXIgZXZ0ID0gcHJlZml4ID8gcHJlZml4ICsgZXZlbnQgOiBldmVudDtcblxuICBpZiAoIXRoaXMuX2V2ZW50c1tldnRdKSByZXR1cm4gdGhpcztcbiAgaWYgKCFmbikge1xuICAgIGNsZWFyRXZlbnQodGhpcywgZXZ0KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHZhciBsaXN0ZW5lcnMgPSB0aGlzLl9ldmVudHNbZXZ0XTtcblxuICBpZiAobGlzdGVuZXJzLmZuKSB7XG4gICAgaWYgKFxuICAgICAgbGlzdGVuZXJzLmZuID09PSBmbiAmJlxuICAgICAgKCFvbmNlIHx8IGxpc3RlbmVycy5vbmNlKSAmJlxuICAgICAgKCFjb250ZXh0IHx8IGxpc3RlbmVycy5jb250ZXh0ID09PSBjb250ZXh0KVxuICAgICkge1xuICAgICAgY2xlYXJFdmVudCh0aGlzLCBldnQpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBmb3IgKHZhciBpID0gMCwgZXZlbnRzID0gW10sIGxlbmd0aCA9IGxpc3RlbmVycy5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgaWYgKFxuICAgICAgICBsaXN0ZW5lcnNbaV0uZm4gIT09IGZuIHx8XG4gICAgICAgIChvbmNlICYmICFsaXN0ZW5lcnNbaV0ub25jZSkgfHxcbiAgICAgICAgKGNvbnRleHQgJiYgbGlzdGVuZXJzW2ldLmNvbnRleHQgIT09IGNvbnRleHQpXG4gICAgICApIHtcbiAgICAgICAgZXZlbnRzLnB1c2gobGlzdGVuZXJzW2ldKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvL1xuICAgIC8vIFJlc2V0IHRoZSBhcnJheSwgb3IgcmVtb3ZlIGl0IGNvbXBsZXRlbHkgaWYgd2UgaGF2ZSBubyBtb3JlIGxpc3RlbmVycy5cbiAgICAvL1xuICAgIGlmIChldmVudHMubGVuZ3RoKSB0aGlzLl9ldmVudHNbZXZ0XSA9IGV2ZW50cy5sZW5ndGggPT09IDEgPyBldmVudHNbMF0gOiBldmVudHM7XG4gICAgZWxzZSBjbGVhckV2ZW50KHRoaXMsIGV2dCk7XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogUmVtb3ZlIGFsbCBsaXN0ZW5lcnMsIG9yIHRob3NlIG9mIHRoZSBzcGVjaWZpZWQgZXZlbnQuXG4gKlxuICogQHBhcmFtIHsoU3RyaW5nfFN5bWJvbCl9IFtldmVudF0gVGhlIGV2ZW50IG5hbWUuXG4gKiBAcmV0dXJucyB7RXZlbnRFbWl0dGVyfSBgdGhpc2AuXG4gKiBAcHVibGljXG4gKi9cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlQWxsTGlzdGVuZXJzID0gZnVuY3Rpb24gcmVtb3ZlQWxsTGlzdGVuZXJzKGV2ZW50KSB7XG4gIHZhciBldnQ7XG5cbiAgaWYgKGV2ZW50KSB7XG4gICAgZXZ0ID0gcHJlZml4ID8gcHJlZml4ICsgZXZlbnQgOiBldmVudDtcbiAgICBpZiAodGhpcy5fZXZlbnRzW2V2dF0pIGNsZWFyRXZlbnQodGhpcywgZXZ0KTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLl9ldmVudHMgPSBuZXcgRXZlbnRzKCk7XG4gICAgdGhpcy5fZXZlbnRzQ291bnQgPSAwO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vL1xuLy8gQWxpYXMgbWV0aG9kcyBuYW1lcyBiZWNhdXNlIHBlb3BsZSByb2xsIGxpa2UgdGhhdC5cbi8vXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9mZiA9IEV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXI7XG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmFkZExpc3RlbmVyID0gRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbjtcblxuLy9cbi8vIEV4cG9zZSB0aGUgcHJlZml4LlxuLy9cbkV2ZW50RW1pdHRlci5wcmVmaXhlZCA9IHByZWZpeDtcblxuLy9cbi8vIEFsbG93IGBFdmVudEVtaXR0ZXJgIHRvIGJlIGltcG9ydGVkIGFzIG1vZHVsZSBuYW1lc3BhY2UuXG4vL1xuRXZlbnRFbWl0dGVyLkV2ZW50RW1pdHRlciA9IEV2ZW50RW1pdHRlcjtcblxuLy9cbi8vIEV4cG9zZSB0aGUgbW9kdWxlLlxuLy9cbmlmICgndW5kZWZpbmVkJyAhPT0gdHlwZW9mIG1vZHVsZSkge1xuICBtb2R1bGUuZXhwb3J0cyA9IEV2ZW50RW1pdHRlcjtcbn1cbiIsImltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tICdAL3V0aWxzL21lc3NhZ2UnO1xyXG5pbXBvcnQgeyBuYW5vaWQgfSBmcm9tICduYW5vaWQnO1xyXG5cclxuaW1wb3J0IHsgdjQgYXMgdXVpZCB9IGZyb20gJ3V1aWQnO1xyXG5pbXBvcnQgYnJvd3NlciBmcm9tICd3ZWJleHRlbnNpb24tcG9seWZpbGwnO1xyXG5cclxuY29uc3QgY2hhbm5lbE5hbWUgPSBuYW5vaWQoKTtcclxuY29uc3QgaXNPcGVyYSA9IC9PcGVyYXxPUFJcXC8vaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xyXG5cclxubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2x1eDpjaGFubmVsTmFtZScsIGNoYW5uZWxOYW1lKTtcclxubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2x1eDppc0RlZmF1bHRXYWxsZXQnLCAndHJ1ZScpO1xyXG5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbHV4OnV1aWQnLCB1dWlkKCkpO1xyXG5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbHV4OmlzT3BlcmEnLCBpc09wZXJhLnRvU3RyaW5nKCkpO1xyXG5cclxuY29uc3QgaW5qZWN0UHJvdmlkZXJTY3JpcHQgPSAoaXNEZWZhdWx0V2FsbGV0OiBib29sZWFuKSA9PiB7XHJcbiAgLy8gdGhlIHNjcmlwdCBlbGVtZW50IHdpdGggc3JjIHdvbid0IGV4ZWN1dGUgaW1tZWRpYXRlbHlcclxuICAvLyB1c2UgaW5saW5lIHNjcmlwdCBlbGVtZW50IGluc3RlYWQhXHJcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XHJcbiAgY29uc3QgZWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XHJcbiAgLy8gaW4gcHJldmVudCBvZiB3ZWJwYWNrIG9wdGltaXplZCBjb2RlIGRvIHNvbWUgbWFnaWMoZS5nLiBkb3VibGUvc2lnbGUgcXVvdGUgd3JhcCksXHJcbiAgLy8gc2VwYXJhdGUgY29udGVudCBhc3NpZ25tZW50IHRvIHR3byBsaW5lXHJcbiAgLy8gdXNlIEFzc2V0UmVwbGFjZVBsdWdpbiB0byByZXBsYWNlIHBhZ2Vwcm92aWRlciBjb250ZW50XHJcbiAgZWxlLnNldEF0dHJpYnV0ZSgnc3JjJywgYnJvd3Nlci5ydW50aW1lLmdldFVSTCgncGFnZVByb3ZpZGVyLmpzJykpO1xyXG4gIGNvbnRhaW5lci5pbnNlcnRCZWZvcmUoZWxlLCBjb250YWluZXIuY2hpbGRyZW5bMF0pO1xyXG4gIGNvbnRhaW5lci5yZW1vdmVDaGlsZChlbGUpO1xyXG59O1xyXG5cclxuY29uc3QgeyBCcm9hZGNhc3RDaGFubmVsTWVzc2FnZSwgUG9ydE1lc3NhZ2UgfSA9IE1lc3NhZ2U7XHJcblxyXG5jb25zdCBwbSA9IG5ldyBQb3J0TWVzc2FnZSgpLmNvbm5lY3QoKTtcclxuXHJcbmNvbnN0IGJjbSA9IG5ldyBCcm9hZGNhc3RDaGFubmVsTWVzc2FnZShjaGFubmVsTmFtZSkubGlzdGVuKChkYXRhKSA9PlxyXG4gIHBtLnJlcXVlc3QoZGF0YSlcclxuKTtcclxuXHJcbi8vIGJhY2tncm91bmQgbm90aWZpY2F0aW9uXHJcbnBtLm9uKCdtZXNzYWdlJywgKGRhdGEpID0+IGJjbS5zZW5kKCdtZXNzYWdlJywgZGF0YSkpO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignYmVmb3JldW5sb2FkJywgKCkgPT4ge1xyXG4gIGJjbS5kaXNwb3NlKCk7XHJcbiAgcG0uZGlzcG9zZSgpO1xyXG59KTtcclxuXHJcbmluamVjdFByb3ZpZGVyU2NyaXB0KGZhbHNlKTtcclxuIiwiaW1wb3J0IEJyb2FkY2FzdENoYW5uZWxNZXNzYWdlIGZyb20gJy4vbWVzc2FnZS9icm9hZGNhc3RDaGFubmVsTWVzc2FnZSc7XHJcbmltcG9ydCBQb3J0TWVzc2FnZSBmcm9tICcuL21lc3NhZ2UvcG9ydE1lc3NhZ2UnO1xyXG5cclxuZXhwb3J0IGNvbnN0IE1lc3NhZ2UgPSB7XHJcbiAgQnJvYWRjYXN0Q2hhbm5lbE1lc3NhZ2UsXHJcbiAgUG9ydE1lc3NhZ2UsXHJcbn07XHJcbiIsImltcG9ydCBNZXNzYWdlIGZyb20gJy4vaW5kZXgnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnJvYWRjYXN0Q2hhbm5lbE1lc3NhZ2UgZXh0ZW5kcyBNZXNzYWdlIHtcclxuICBwcml2YXRlIF9jaGFubmVsOiBCcm9hZGNhc3RDaGFubmVsO1xyXG5cclxuICBjb25zdHJ1Y3RvcihuYW1lPzogc3RyaW5nKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgaWYgKCFuYW1lKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcigndGhlIGJyb2FkY2FzdENoYW5uZWwgbmFtZSBpcyBtaXNzaW5nJyk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fY2hhbm5lbCA9IG5ldyBCcm9hZGNhc3RDaGFubmVsKG5hbWUpO1xyXG4gIH1cclxuXHJcbiAgY29ubmVjdCA9ICgpID0+IHtcclxuICAgIHRoaXMuX2NoYW5uZWwub25tZXNzYWdlID0gKHsgZGF0YTogeyB0eXBlLCBkYXRhIH0gfSkgPT4ge1xyXG4gICAgICBpZiAodHlwZSA9PT0gJ21lc3NhZ2UnKSB7XHJcbiAgICAgICAgdGhpcy5lbWl0KCdtZXNzYWdlJywgZGF0YSk7XHJcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ3Jlc3BvbnNlJykge1xyXG4gICAgICAgIHRoaXMub25SZXNwb25zZShkYXRhKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9O1xyXG5cclxuICBsaXN0ZW4gPSAobGlzdGVuQ2FsbGJhY2spID0+IHtcclxuICAgIHRoaXMubGlzdGVuQ2FsbGJhY2sgPSBsaXN0ZW5DYWxsYmFjaztcclxuXHJcbiAgICB0aGlzLl9jaGFubmVsLm9ubWVzc2FnZSA9ICh7IGRhdGE6IHsgdHlwZSwgZGF0YSB9IH0pID0+IHtcclxuICAgICAgaWYgKHR5cGUgPT09ICdyZXF1ZXN0Jykge1xyXG4gICAgICAgIHRoaXMub25SZXF1ZXN0KGRhdGEpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH07XHJcblxyXG4gIHNlbmQgPSAodHlwZSwgZGF0YSkgPT4ge1xyXG4gICAgdGhpcy5fY2hhbm5lbC5wb3N0TWVzc2FnZSh7XHJcbiAgICAgIHR5cGUsXHJcbiAgICAgIGRhdGEsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBkaXNwb3NlID0gKCkgPT4ge1xyXG4gICAgdGhpcy5fZGlzcG9zZSgpO1xyXG4gICAgdGhpcy5fY2hhbm5lbC5jbG9zZSgpO1xyXG4gIH07XHJcbn1cclxuIiwiLyoqXHJcbiAqIHRoaXMgc2NyaXB0IGlzIGxpdmUgaW4gY29udGVudC1zY3JpcHQgLyBkYXBwJ3MgcGFnZVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gJ2V2ZW50cyc7XHJcbmltcG9ydCB7IGV0aEVycm9ycyB9IGZyb20gJ2V0aC1ycGMtZXJyb3JzJztcclxuaW1wb3J0IFBRdWV1ZSBmcm9tICdwLXF1ZXVlJztcclxuXHJcbmNvbnN0IHBRdWV1ZSA9IG5ldyBQUXVldWUoeyBjb25jdXJyZW5jeTogMTAwMCB9KTtcclxuXHJcbmFic3RyYWN0IGNsYXNzIE1lc3NhZ2UgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xyXG4gIC8vIGF2YWlsYWJsZSBpZCBsaXN0XHJcbiAgLy8gbWF4IGNvbmN1cnJlbnQgcmVxdWVzdCBsaW1pdFxyXG4gIHByaXZhdGUgX3JlcXVlc3RJZFBvb2wgPSBbLi4uQXJyYXkoMTAwMCkua2V5cygpXTtcclxuICBwcm90ZWN0ZWQgX0VWRU5UX1BSRSA9ICdFVEhfV0FMTEVUXyc7XHJcbiAgcHJvdGVjdGVkIGxpc3RlbkNhbGxiYWNrOiBhbnk7XHJcblxyXG4gIHByaXZhdGUgX3dhaXRpbmdNYXAgPSBuZXcgTWFwPFxyXG4gICAgbnVtYmVyLFxyXG4gICAge1xyXG4gICAgICBkYXRhOiBhbnk7XHJcbiAgICAgIHJlc29sdmU6IChhcmc6IGFueSkgPT4gYW55O1xyXG4gICAgICByZWplY3Q6IChhcmc6IGFueSkgPT4gYW55O1xyXG4gICAgfVxyXG4gID4oKTtcclxuXHJcbiAgYWJzdHJhY3Qgc2VuZCh0eXBlOiBzdHJpbmcsIGRhdGE6IGFueSk6IHZvaWQ7XHJcblxyXG4gIHJlcXVlc3QgPSAoZGF0YSkgPT4ge1xyXG4gICAgcmV0dXJuIHBRdWV1ZS5hZGQoKCkgPT4ge1xyXG4gICAgICBpZiAoIXRoaXMuX3JlcXVlc3RJZFBvb2wubGVuZ3RoKSB7XHJcbiAgICAgICAgdGhyb3cgZXRoRXJyb3JzLnJwYy5saW1pdEV4Y2VlZGVkKCk7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgaWRlbnQgPSB0aGlzLl9yZXF1ZXN0SWRQb29sLnNoaWZ0KCkhO1xyXG5cclxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICB0aGlzLl93YWl0aW5nTWFwLnNldChpZGVudCwge1xyXG4gICAgICAgICAgZGF0YSxcclxuICAgICAgICAgIHJlc29sdmUsXHJcbiAgICAgICAgICByZWplY3QsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuc2VuZCgncmVxdWVzdCcsIHsgaWRlbnQsIGRhdGEgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgb25SZXNwb25zZSA9IGFzeW5jICh7IGlkZW50LCByZXMsIGVyciB9OiBhbnkgPSB7fSkgPT4ge1xyXG4gICAgLy8gdGhlIHVybCBtYXkgdXBkYXRlXHJcbiAgICBpZiAoIXRoaXMuX3dhaXRpbmdNYXAuaGFzKGlkZW50KSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgeyByZXNvbHZlLCByZWplY3QgfSA9IHRoaXMuX3dhaXRpbmdNYXAuZ2V0KGlkZW50KSE7XHJcblxyXG4gICAgdGhpcy5fcmVxdWVzdElkUG9vbC5wdXNoKGlkZW50KTtcclxuICAgIHRoaXMuX3dhaXRpbmdNYXAuZGVsZXRlKGlkZW50KTtcclxuICAgIGVyciA/IHJlamVjdChlcnIpIDogcmVzb2x2ZShyZXMpO1xyXG4gIH07XHJcblxyXG4gIG9uUmVxdWVzdCA9IGFzeW5jICh7IGlkZW50LCBkYXRhIH0pID0+IHtcclxuICAgIGlmICh0aGlzLmxpc3RlbkNhbGxiYWNrKSB7XHJcbiAgICAgIGxldCByZXMsIGVycjtcclxuXHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgcmVzID0gYXdhaXQgdGhpcy5saXN0ZW5DYWxsYmFjayhkYXRhKTtcclxuICAgICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgZXJyID0ge1xyXG4gICAgICAgICAgbWVzc2FnZTogZS5tZXNzYWdlLFxyXG4gICAgICAgICAgc3RhY2s6IGUuc3RhY2ssXHJcbiAgICAgICAgfTtcclxuICAgICAgICBlLmNvZGUgJiYgKGVyci5jb2RlID0gZS5jb2RlKTtcclxuICAgICAgICBlLmRhdGEgJiYgKGVyci5kYXRhID0gZS5kYXRhKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5zZW5kKCdyZXNwb25zZScsIHsgaWRlbnQsIHJlcywgZXJyIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIF9kaXNwb3NlID0gKCkgPT4ge1xyXG4gICAgZm9yIChjb25zdCByZXF1ZXN0IG9mIHRoaXMuX3dhaXRpbmdNYXAudmFsdWVzKCkpIHtcclxuICAgICAgcmVxdWVzdC5yZWplY3QoZXRoRXJyb3JzLnByb3ZpZGVyLnVzZXJSZWplY3RlZFJlcXVlc3QoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fd2FpdGluZ01hcC5jbGVhcigpO1xyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lc3NhZ2U7XHJcbiIsImltcG9ydCBicm93c2VyLCB7IFJ1bnRpbWUgfSBmcm9tICd3ZWJleHRlbnNpb24tcG9seWZpbGwnO1xyXG5pbXBvcnQgTWVzc2FnZSBmcm9tICcuL2luZGV4JztcclxuY2xhc3MgUG9ydE1lc3NhZ2UgZXh0ZW5kcyBNZXNzYWdlIHtcclxuICBwb3J0OiBSdW50aW1lLlBvcnQgfCBudWxsID0gbnVsbDtcclxuICBsaXN0ZW5DYWxsYmFjazogYW55O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwb3J0PzogUnVudGltZS5Qb3J0KSB7XHJcbiAgICBzdXBlcigpO1xyXG5cclxuICAgIGlmIChwb3J0KSB7XHJcbiAgICAgIHRoaXMucG9ydCA9IHBvcnQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25uZWN0ID0gKG5hbWU/OiBzdHJpbmcpID0+IHtcclxuICAgIHRoaXMucG9ydCA9IGJyb3dzZXIucnVudGltZS5jb25uZWN0KHVuZGVmaW5lZCwgbmFtZSA/IHsgbmFtZSB9IDogdW5kZWZpbmVkKTtcclxuICAgIHRoaXMucG9ydC5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoKHsgX3R5cGVfLCBkYXRhIH0pID0+IHtcclxuICAgICAgaWYgKF90eXBlXyA9PT0gYCR7dGhpcy5fRVZFTlRfUFJFfW1lc3NhZ2VgKSB7XHJcbiAgICAgICAgdGhpcy5lbWl0KCdtZXNzYWdlJywgZGF0YSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoX3R5cGVfID09PSBgJHt0aGlzLl9FVkVOVF9QUkV9cmVzcG9uc2VgKSB7XHJcbiAgICAgICAgdGhpcy5vblJlc3BvbnNlKGRhdGEpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9O1xyXG5cclxuICBsaXN0ZW4gPSAobGlzdGVuQ2FsbGJhY2s6IGFueSkgPT4ge1xyXG4gICAgaWYgKCF0aGlzLnBvcnQpIHJldHVybjtcclxuICAgIHRoaXMubGlzdGVuQ2FsbGJhY2sgPSBsaXN0ZW5DYWxsYmFjaztcclxuICAgIHRoaXMucG9ydC5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoKHsgX3R5cGVfLCBkYXRhIH0pID0+IHtcclxuICAgICAgaWYgKF90eXBlXyA9PT0gYCR7dGhpcy5fRVZFTlRfUFJFfXJlcXVlc3RgKSB7XHJcbiAgICAgICAgdGhpcy5vblJlcXVlc3QoZGF0YSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH07XHJcblxyXG4gIHNlbmQgPSAodHlwZSwgZGF0YSkgPT4ge1xyXG4gICAgaWYgKCF0aGlzLnBvcnQpIHJldHVybjtcclxuICAgIHRyeSB7XHJcbiAgICAgIHRoaXMucG9ydC5wb3N0TWVzc2FnZSh7IF90eXBlXzogYCR7dGhpcy5fRVZFTlRfUFJFfSR7dHlwZX1gLCBkYXRhIH0pO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAvLyBETyBOT1RISU5HIEJVVCBDQVRDSCBUSElTIEVSUk9SXHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgZGlzcG9zZSA9ICgpID0+IHtcclxuICAgIHRoaXMuX2Rpc3Bvc2UoKTtcclxuICAgIHRoaXMucG9ydD8uZGlzY29ubmVjdCgpO1xyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvcnRNZXNzYWdlO1xyXG4iLCJjb25zdCByYW5kb21VVUlEID0gdHlwZW9mIGNyeXB0byAhPT0gJ3VuZGVmaW5lZCcgJiYgY3J5cHRvLnJhbmRvbVVVSUQgJiYgY3J5cHRvLnJhbmRvbVVVSUQuYmluZChjcnlwdG8pO1xuZXhwb3J0IGRlZmF1bHQge1xuICByYW5kb21VVUlEXG59OyIsImV4cG9ydCBkZWZhdWx0IC9eKD86WzAtOWEtZl17OH0tWzAtOWEtZl17NH0tWzEtNV1bMC05YS1mXXszfS1bODlhYl1bMC05YS1mXXszfS1bMC05YS1mXXsxMn18MDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwKSQvaTsiLCIvLyBVbmlxdWUgSUQgY3JlYXRpb24gcmVxdWlyZXMgYSBoaWdoIHF1YWxpdHkgcmFuZG9tICMgZ2VuZXJhdG9yLiBJbiB0aGUgYnJvd3NlciB3ZSB0aGVyZWZvcmVcbi8vIHJlcXVpcmUgdGhlIGNyeXB0byBBUEkgYW5kIGRvIG5vdCBzdXBwb3J0IGJ1aWx0LWluIGZhbGxiYWNrIHRvIGxvd2VyIHF1YWxpdHkgcmFuZG9tIG51bWJlclxuLy8gZ2VuZXJhdG9ycyAobGlrZSBNYXRoLnJhbmRvbSgpKS5cbmxldCBnZXRSYW5kb21WYWx1ZXM7XG5jb25zdCBybmRzOCA9IG5ldyBVaW50OEFycmF5KDE2KTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJuZygpIHtcbiAgLy8gbGF6eSBsb2FkIHNvIHRoYXQgZW52aXJvbm1lbnRzIHRoYXQgbmVlZCB0byBwb2x5ZmlsbCBoYXZlIGEgY2hhbmNlIHRvIGRvIHNvXG4gIGlmICghZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgLy8gZ2V0UmFuZG9tVmFsdWVzIG5lZWRzIHRvIGJlIGludm9rZWQgaW4gYSBjb250ZXh0IHdoZXJlIFwidGhpc1wiIGlzIGEgQ3J5cHRvIGltcGxlbWVudGF0aW9uLlxuICAgIGdldFJhbmRvbVZhbHVlcyA9IHR5cGVvZiBjcnlwdG8gIT09ICd1bmRlZmluZWQnICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcy5iaW5kKGNyeXB0byk7XG5cbiAgICBpZiAoIWdldFJhbmRvbVZhbHVlcykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKCkgbm90IHN1cHBvcnRlZC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZCNnZXRyYW5kb212YWx1ZXMtbm90LXN1cHBvcnRlZCcpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBnZXRSYW5kb21WYWx1ZXMocm5kczgpO1xufSIsImltcG9ydCB2YWxpZGF0ZSBmcm9tICcuL3ZhbGlkYXRlLmpzJztcbi8qKlxuICogQ29udmVydCBhcnJheSBvZiAxNiBieXRlIHZhbHVlcyB0byBVVUlEIHN0cmluZyBmb3JtYXQgb2YgdGhlIGZvcm06XG4gKiBYWFhYWFhYWC1YWFhYLVhYWFgtWFhYWC1YWFhYWFhYWFhYWFhcbiAqL1xuXG5jb25zdCBieXRlVG9IZXggPSBbXTtcblxuZm9yIChsZXQgaSA9IDA7IGkgPCAyNTY7ICsraSkge1xuICBieXRlVG9IZXgucHVzaCgoaSArIDB4MTAwKS50b1N0cmluZygxNikuc2xpY2UoMSkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5zYWZlU3RyaW5naWZ5KGFyciwgb2Zmc2V0ID0gMCkge1xuICAvLyBOb3RlOiBCZSBjYXJlZnVsIGVkaXRpbmcgdGhpcyBjb2RlISAgSXQncyBiZWVuIHR1bmVkIGZvciBwZXJmb3JtYW5jZVxuICAvLyBhbmQgd29ya3MgaW4gd2F5cyB5b3UgbWF5IG5vdCBleHBlY3QuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQvcHVsbC80MzRcbiAgcmV0dXJuIChieXRlVG9IZXhbYXJyW29mZnNldCArIDBdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMV1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAyXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDNdXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA1XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDZdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgN11dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA4XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDldXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTBdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTFdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTJdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTNdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTRdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTVdXSkudG9Mb3dlckNhc2UoKTtcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5KGFyciwgb2Zmc2V0ID0gMCkge1xuICBjb25zdCB1dWlkID0gdW5zYWZlU3RyaW5naWZ5KGFyciwgb2Zmc2V0KTsgLy8gQ29uc2lzdGVuY3kgY2hlY2sgZm9yIHZhbGlkIFVVSUQuICBJZiB0aGlzIHRocm93cywgaXQncyBsaWtlbHkgZHVlIHRvIG9uZVxuICAvLyBvZiB0aGUgZm9sbG93aW5nOlxuICAvLyAtIE9uZSBvciBtb3JlIGlucHV0IGFycmF5IHZhbHVlcyBkb24ndCBtYXAgdG8gYSBoZXggb2N0ZXQgKGxlYWRpbmcgdG9cbiAgLy8gXCJ1bmRlZmluZWRcIiBpbiB0aGUgdXVpZClcbiAgLy8gLSBJbnZhbGlkIGlucHV0IHZhbHVlcyBmb3IgdGhlIFJGQyBgdmVyc2lvbmAgb3IgYHZhcmlhbnRgIGZpZWxkc1xuXG4gIGlmICghdmFsaWRhdGUodXVpZCkpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ1N0cmluZ2lmaWVkIFVVSUQgaXMgaW52YWxpZCcpO1xuICB9XG5cbiAgcmV0dXJuIHV1aWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN0cmluZ2lmeTsiLCJpbXBvcnQgbmF0aXZlIGZyb20gJy4vbmF0aXZlLmpzJztcbmltcG9ydCBybmcgZnJvbSAnLi9ybmcuanMnO1xuaW1wb3J0IHsgdW5zYWZlU3RyaW5naWZ5IH0gZnJvbSAnLi9zdHJpbmdpZnkuanMnO1xuXG5mdW5jdGlvbiB2NChvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICBpZiAobmF0aXZlLnJhbmRvbVVVSUQgJiYgIWJ1ZiAmJiAhb3B0aW9ucykge1xuICAgIHJldHVybiBuYXRpdmUucmFuZG9tVVVJRCgpO1xuICB9XG5cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGNvbnN0IHJuZHMgPSBvcHRpb25zLnJhbmRvbSB8fCAob3B0aW9ucy5ybmcgfHwgcm5nKSgpOyAvLyBQZXIgNC40LCBzZXQgYml0cyBmb3IgdmVyc2lvbiBhbmQgYGNsb2NrX3NlcV9oaV9hbmRfcmVzZXJ2ZWRgXG5cbiAgcm5kc1s2XSA9IHJuZHNbNl0gJiAweDBmIHwgMHg0MDtcbiAgcm5kc1s4XSA9IHJuZHNbOF0gJiAweDNmIHwgMHg4MDsgLy8gQ29weSBieXRlcyB0byBidWZmZXIsIGlmIHByb3ZpZGVkXG5cbiAgaWYgKGJ1Zikge1xuICAgIG9mZnNldCA9IG9mZnNldCB8fCAwO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxNjsgKytpKSB7XG4gICAgICBidWZbb2Zmc2V0ICsgaV0gPSBybmRzW2ldO1xuICAgIH1cblxuICAgIHJldHVybiBidWY7XG4gIH1cblxuICByZXR1cm4gdW5zYWZlU3RyaW5naWZ5KHJuZHMpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB2NDsiLCJpbXBvcnQgUkVHRVggZnJvbSAnLi9yZWdleC5qcyc7XG5cbmZ1bmN0aW9uIHZhbGlkYXRlKHV1aWQpIHtcbiAgcmV0dXJuIHR5cGVvZiB1dWlkID09PSAnc3RyaW5nJyAmJiBSRUdFWC50ZXN0KHV1aWQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB2YWxpZGF0ZTsiLCJpbXBvcnQgeyB1cmxBbHBoYWJldCB9IGZyb20gJy4vdXJsLWFscGhhYmV0L2luZGV4LmpzJ1xubGV0IHJhbmRvbSA9IGJ5dGVzID0+IGNyeXB0by5nZXRSYW5kb21WYWx1ZXMobmV3IFVpbnQ4QXJyYXkoYnl0ZXMpKVxubGV0IGN1c3RvbVJhbmRvbSA9IChhbHBoYWJldCwgZGVmYXVsdFNpemUsIGdldFJhbmRvbSkgPT4ge1xuICBsZXQgbWFzayA9ICgyIDw8IChNYXRoLmxvZyhhbHBoYWJldC5sZW5ndGggLSAxKSAvIE1hdGguTE4yKSkgLSAxXG4gIGxldCBzdGVwID0gLX4oKDEuNiAqIG1hc2sgKiBkZWZhdWx0U2l6ZSkgLyBhbHBoYWJldC5sZW5ndGgpXG4gIHJldHVybiAoc2l6ZSA9IGRlZmF1bHRTaXplKSA9PiB7XG4gICAgbGV0IGlkID0gJydcbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgbGV0IGJ5dGVzID0gZ2V0UmFuZG9tKHN0ZXApXG4gICAgICBsZXQgaiA9IHN0ZXBcbiAgICAgIHdoaWxlIChqLS0pIHtcbiAgICAgICAgaWQgKz0gYWxwaGFiZXRbYnl0ZXNbal0gJiBtYXNrXSB8fCAnJ1xuICAgICAgICBpZiAoaWQubGVuZ3RoID09PSBzaXplKSByZXR1cm4gaWRcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbmxldCBjdXN0b21BbHBoYWJldCA9IChhbHBoYWJldCwgc2l6ZSA9IDIxKSA9PlxuICBjdXN0b21SYW5kb20oYWxwaGFiZXQsIHNpemUsIHJhbmRvbSlcbmxldCBuYW5vaWQgPSAoc2l6ZSA9IDIxKSA9PlxuICBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKG5ldyBVaW50OEFycmF5KHNpemUpKS5yZWR1Y2UoKGlkLCBieXRlKSA9PiB7XG4gICAgYnl0ZSAmPSA2M1xuICAgIGlmIChieXRlIDwgMzYpIHtcbiAgICAgIGlkICs9IGJ5dGUudG9TdHJpbmcoMzYpXG4gICAgfSBlbHNlIGlmIChieXRlIDwgNjIpIHtcbiAgICAgIGlkICs9IChieXRlIC0gMjYpLnRvU3RyaW5nKDM2KS50b1VwcGVyQ2FzZSgpXG4gICAgfSBlbHNlIGlmIChieXRlID4gNjIpIHtcbiAgICAgIGlkICs9ICctJ1xuICAgIH0gZWxzZSB7XG4gICAgICBpZCArPSAnXydcbiAgICB9XG4gICAgcmV0dXJuIGlkXG4gIH0sICcnKVxuZXhwb3J0IHsgbmFub2lkLCBjdXN0b21BbHBoYWJldCwgY3VzdG9tUmFuZG9tLCB1cmxBbHBoYWJldCwgcmFuZG9tIH1cbiIsImxldCB1cmxBbHBoYWJldCA9XG4gICd1c2VhbmRvbS0yNlQxOTgzNDBQWDc1cHhKQUNLVkVSWU1JTkRCVVNIV09MRl9HUVpiZmdoamtscXZ3eXpyaWN0J1xuZXhwb3J0IHsgdXJsQWxwaGFiZXQgfVxuIiwidmFyIF9fY2xhc3NQcml2YXRlRmllbGRTZXQgPSAodGhpcyAmJiB0aGlzLl9fY2xhc3NQcml2YXRlRmllbGRTZXQpIHx8IGZ1bmN0aW9uIChyZWNlaXZlciwgc3RhdGUsIHZhbHVlLCBraW5kLCBmKSB7XG4gICAgaWYgKGtpbmQgPT09IFwibVwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBtZXRob2QgaXMgbm90IHdyaXRhYmxlXCIpO1xuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIHNldHRlclwiKTtcbiAgICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCB3cml0ZSBwcml2YXRlIG1lbWJlciB0byBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xuICAgIHJldHVybiAoa2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIsIHZhbHVlKSA6IGYgPyBmLnZhbHVlID0gdmFsdWUgOiBzdGF0ZS5zZXQocmVjZWl2ZXIsIHZhbHVlKSksIHZhbHVlO1xufTtcbnZhciBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0ID0gKHRoaXMgJiYgdGhpcy5fX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KSB8fCBmdW5jdGlvbiAocmVjZWl2ZXIsIHN0YXRlLCBraW5kLCBmKSB7XG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgZ2V0dGVyXCIpO1xuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHJlYWQgcHJpdmF0ZSBtZW1iZXIgZnJvbSBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xuICAgIHJldHVybiBraW5kID09PSBcIm1cIiA/IGYgOiBraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlcikgOiBmID8gZi52YWx1ZSA6IHN0YXRlLmdldChyZWNlaXZlcik7XG59O1xudmFyIF9QUXVldWVfaW5zdGFuY2VzLCBfUFF1ZXVlX2NhcnJ5b3ZlckNvbmN1cnJlbmN5Q291bnQsIF9QUXVldWVfaXNJbnRlcnZhbElnbm9yZWQsIF9QUXVldWVfaW50ZXJ2YWxDb3VudCwgX1BRdWV1ZV9pbnRlcnZhbENhcCwgX1BRdWV1ZV9pbnRlcnZhbCwgX1BRdWV1ZV9pbnRlcnZhbEVuZCwgX1BRdWV1ZV9pbnRlcnZhbElkLCBfUFF1ZXVlX3RpbWVvdXRJZCwgX1BRdWV1ZV9xdWV1ZSwgX1BRdWV1ZV9xdWV1ZUNsYXNzLCBfUFF1ZXVlX3BlbmRpbmdDb3VudCwgX1BRdWV1ZV9jb25jdXJyZW5jeSwgX1BRdWV1ZV9pc1BhdXNlZCwgX1BRdWV1ZV90aHJvd09uVGltZW91dCwgX1BRdWV1ZV9kb2VzSW50ZXJ2YWxBbGxvd0Fub3RoZXJfZ2V0LCBfUFF1ZXVlX2RvZXNDb25jdXJyZW50QWxsb3dBbm90aGVyX2dldCwgX1BRdWV1ZV9uZXh0LCBfUFF1ZXVlX2VtaXRFdmVudHMsIF9QUXVldWVfb25SZXN1bWVJbnRlcnZhbCwgX1BRdWV1ZV9pc0ludGVydmFsUGF1c2VkX2dldCwgX1BRdWV1ZV90cnlUb1N0YXJ0QW5vdGhlciwgX1BRdWV1ZV9pbml0aWFsaXplSW50ZXJ2YWxJZk5lZWRlZCwgX1BRdWV1ZV9vbkludGVydmFsLCBfUFF1ZXVlX3Byb2Nlc3NRdWV1ZSwgX1BRdWV1ZV9vbkV2ZW50O1xuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICdldmVudGVtaXR0ZXIzJztcbmltcG9ydCBwVGltZW91dCwgeyBUaW1lb3V0RXJyb3IgfSBmcm9tICdwLXRpbWVvdXQnO1xuaW1wb3J0IFByaW9yaXR5UXVldWUgZnJvbSAnLi9wcmlvcml0eS1xdWV1ZS5qcyc7XG5jb25zdCB0aW1lb3V0RXJyb3IgPSBuZXcgVGltZW91dEVycm9yKCk7XG4vKipcblRoZSBlcnJvciB0aHJvd24gYnkgYHF1ZXVlLmFkZCgpYCB3aGVuIGEgam9iIGlzIGFib3J0ZWQgYmVmb3JlIGl0IGlzIHJ1bi4gU2VlIGBzaWduYWxgLlxuKi9cbmV4cG9ydCBjbGFzcyBBYm9ydEVycm9yIGV4dGVuZHMgRXJyb3Ige1xufVxuLyoqXG5Qcm9taXNlIHF1ZXVlIHdpdGggY29uY3VycmVuY3kgY29udHJvbC5cbiovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQUXVldWUgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIF9hLCBfYiwgX2MsIF9kO1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBfUFF1ZXVlX2luc3RhbmNlcy5hZGQodGhpcyk7XG4gICAgICAgIF9QUXVldWVfY2FycnlvdmVyQ29uY3VycmVuY3lDb3VudC5zZXQodGhpcywgdm9pZCAwKTtcbiAgICAgICAgX1BRdWV1ZV9pc0ludGVydmFsSWdub3JlZC5zZXQodGhpcywgdm9pZCAwKTtcbiAgICAgICAgX1BRdWV1ZV9pbnRlcnZhbENvdW50LnNldCh0aGlzLCAwKTtcbiAgICAgICAgX1BRdWV1ZV9pbnRlcnZhbENhcC5zZXQodGhpcywgdm9pZCAwKTtcbiAgICAgICAgX1BRdWV1ZV9pbnRlcnZhbC5zZXQodGhpcywgdm9pZCAwKTtcbiAgICAgICAgX1BRdWV1ZV9pbnRlcnZhbEVuZC5zZXQodGhpcywgMCk7XG4gICAgICAgIF9QUXVldWVfaW50ZXJ2YWxJZC5zZXQodGhpcywgdm9pZCAwKTtcbiAgICAgICAgX1BRdWV1ZV90aW1lb3V0SWQuc2V0KHRoaXMsIHZvaWQgMCk7XG4gICAgICAgIF9QUXVldWVfcXVldWUuc2V0KHRoaXMsIHZvaWQgMCk7XG4gICAgICAgIF9QUXVldWVfcXVldWVDbGFzcy5zZXQodGhpcywgdm9pZCAwKTtcbiAgICAgICAgX1BRdWV1ZV9wZW5kaW5nQ291bnQuc2V0KHRoaXMsIDApO1xuICAgICAgICAvLyBUaGUgYCFgIGlzIG5lZWRlZCBiZWNhdXNlIG9mIGh0dHBzOi8vZ2l0aHViLmNvbS9taWNyb3NvZnQvVHlwZVNjcmlwdC9pc3N1ZXMvMzIxOTRcbiAgICAgICAgX1BRdWV1ZV9jb25jdXJyZW5jeS5zZXQodGhpcywgdm9pZCAwKTtcbiAgICAgICAgX1BRdWV1ZV9pc1BhdXNlZC5zZXQodGhpcywgdm9pZCAwKTtcbiAgICAgICAgX1BRdWV1ZV90aHJvd09uVGltZW91dC5zZXQodGhpcywgdm9pZCAwKTtcbiAgICAgICAgLyoqXG4gICAgICAgIFBlci1vcGVyYXRpb24gdGltZW91dCBpbiBtaWxsaXNlY29uZHMuIE9wZXJhdGlvbnMgZnVsZmlsbCBvbmNlIGB0aW1lb3V0YCBlbGFwc2VzIGlmIHRoZXkgaGF2ZW4ndCBhbHJlYWR5LlxuICAgIFxuICAgICAgICBBcHBsaWVzIHRvIGVhY2ggZnV0dXJlIG9wZXJhdGlvbi5cbiAgICAgICAgKi9cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIFwidGltZW91dFwiLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgICAgICB2YWx1ZTogdm9pZCAwXG4gICAgICAgIH0pO1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2NvbnNpc3RlbnQtdHlwZS1hc3NlcnRpb25zXG4gICAgICAgIG9wdGlvbnMgPSB7XG4gICAgICAgICAgICBjYXJyeW92ZXJDb25jdXJyZW5jeUNvdW50OiBmYWxzZSxcbiAgICAgICAgICAgIGludGVydmFsQ2FwOiBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFksXG4gICAgICAgICAgICBpbnRlcnZhbDogMCxcbiAgICAgICAgICAgIGNvbmN1cnJlbmN5OiBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFksXG4gICAgICAgICAgICBhdXRvU3RhcnQ6IHRydWUsXG4gICAgICAgICAgICBxdWV1ZUNsYXNzOiBQcmlvcml0eVF1ZXVlLFxuICAgICAgICAgICAgLi4ub3B0aW9ucyxcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKCEodHlwZW9mIG9wdGlvbnMuaW50ZXJ2YWxDYXAgPT09ICdudW1iZXInICYmIG9wdGlvbnMuaW50ZXJ2YWxDYXAgPj0gMSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYEV4cGVjdGVkIFxcYGludGVydmFsQ2FwXFxgIHRvIGJlIGEgbnVtYmVyIGZyb20gMSBhbmQgdXAsIGdvdCBcXGAkeyhfYiA9IChfYSA9IG9wdGlvbnMuaW50ZXJ2YWxDYXApID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS50b1N0cmluZygpKSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiAnJ31cXGAgKCR7dHlwZW9mIG9wdGlvbnMuaW50ZXJ2YWxDYXB9KWApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRpb25zLmludGVydmFsID09PSB1bmRlZmluZWQgfHwgIShOdW1iZXIuaXNGaW5pdGUob3B0aW9ucy5pbnRlcnZhbCkgJiYgb3B0aW9ucy5pbnRlcnZhbCA+PSAwKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgRXhwZWN0ZWQgXFxgaW50ZXJ2YWxcXGAgdG8gYmUgYSBmaW5pdGUgbnVtYmVyID49IDAsIGdvdCBcXGAkeyhfZCA9IChfYyA9IG9wdGlvbnMuaW50ZXJ2YWwpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy50b1N0cmluZygpKSAhPT0gbnVsbCAmJiBfZCAhPT0gdm9pZCAwID8gX2QgOiAnJ31cXGAgKCR7dHlwZW9mIG9wdGlvbnMuaW50ZXJ2YWx9KWApO1xuICAgICAgICB9XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX1BRdWV1ZV9jYXJyeW92ZXJDb25jdXJyZW5jeUNvdW50LCBvcHRpb25zLmNhcnJ5b3ZlckNvbmN1cnJlbmN5Q291bnQsIFwiZlwiKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfUFF1ZXVlX2lzSW50ZXJ2YWxJZ25vcmVkLCBvcHRpb25zLmludGVydmFsQ2FwID09PSBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFkgfHwgb3B0aW9ucy5pbnRlcnZhbCA9PT0gMCwgXCJmXCIpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9QUXVldWVfaW50ZXJ2YWxDYXAsIG9wdGlvbnMuaW50ZXJ2YWxDYXAsIFwiZlwiKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfUFF1ZXVlX2ludGVydmFsLCBvcHRpb25zLmludGVydmFsLCBcImZcIik7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX1BRdWV1ZV9xdWV1ZSwgbmV3IG9wdGlvbnMucXVldWVDbGFzcygpLCBcImZcIik7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX1BRdWV1ZV9xdWV1ZUNsYXNzLCBvcHRpb25zLnF1ZXVlQ2xhc3MsIFwiZlwiKTtcbiAgICAgICAgdGhpcy5jb25jdXJyZW5jeSA9IG9wdGlvbnMuY29uY3VycmVuY3k7XG4gICAgICAgIHRoaXMudGltZW91dCA9IG9wdGlvbnMudGltZW91dDtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfUFF1ZXVlX3Rocm93T25UaW1lb3V0LCBvcHRpb25zLnRocm93T25UaW1lb3V0ID09PSB0cnVlLCBcImZcIik7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX1BRdWV1ZV9pc1BhdXNlZCwgb3B0aW9ucy5hdXRvU3RhcnQgPT09IGZhbHNlLCBcImZcIik7XG4gICAgfVxuICAgIGdldCBjb25jdXJyZW5jeSgpIHtcbiAgICAgICAgcmV0dXJuIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1BRdWV1ZV9jb25jdXJyZW5jeSwgXCJmXCIpO1xuICAgIH1cbiAgICBzZXQgY29uY3VycmVuY3kobmV3Q29uY3VycmVuY3kpIHtcbiAgICAgICAgaWYgKCEodHlwZW9mIG5ld0NvbmN1cnJlbmN5ID09PSAnbnVtYmVyJyAmJiBuZXdDb25jdXJyZW5jeSA+PSAxKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgRXhwZWN0ZWQgXFxgY29uY3VycmVuY3lcXGAgdG8gYmUgYSBudW1iZXIgZnJvbSAxIGFuZCB1cCwgZ290IFxcYCR7bmV3Q29uY3VycmVuY3l9XFxgICgke3R5cGVvZiBuZXdDb25jdXJyZW5jeX0pYCk7XG4gICAgICAgIH1cbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfUFF1ZXVlX2NvbmN1cnJlbmN5LCBuZXdDb25jdXJyZW5jeSwgXCJmXCIpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9QUXVldWVfaW5zdGFuY2VzLCBcIm1cIiwgX1BRdWV1ZV9wcm9jZXNzUXVldWUpLmNhbGwodGhpcyk7XG4gICAgfVxuICAgIC8qKlxuICAgIEFkZHMgYSBzeW5jIG9yIGFzeW5jIHRhc2sgdG8gdGhlIHF1ZXVlLiBBbHdheXMgcmV0dXJucyBhIHByb21pc2UuXG4gICAgKi9cbiAgICBhc3luYyBhZGQoZm4sIG9wdGlvbnMgPSB7fSkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcnVuID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgICAgICB2YXIgX2IsIF9jO1xuICAgICAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX1BRdWV1ZV9wZW5kaW5nQ291bnQsIChfYiA9IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1BRdWV1ZV9wZW5kaW5nQ291bnQsIFwiZlwiKSwgX2IrKywgX2IpLCBcImZcIik7XG4gICAgICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfUFF1ZXVlX2ludGVydmFsQ291bnQsIChfYyA9IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1BRdWV1ZV9pbnRlcnZhbENvdW50LCBcImZcIiksIF9jKyssIF9jKSwgXCJmXCIpO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgoX2EgPSBvcHRpb25zLnNpZ25hbCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmFib3J0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRPRE86IFVzZSBBQk9SVF9FUlIgY29kZSB3aGVuIHRhcmdldGluZyBOb2RlLmpzIDE2IChodHRwczovL25vZGVqcy5vcmcvZG9jcy9sYXRlc3QtdjE2LngvYXBpL2Vycm9ycy5odG1sI2Fib3J0X2VycilcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChuZXcgQWJvcnRFcnJvcignVGhlIHRhc2sgd2FzIGFib3J0ZWQuJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9wZXJhdGlvbiA9ICh0aGlzLnRpbWVvdXQgPT09IHVuZGVmaW5lZCAmJiBvcHRpb25zLnRpbWVvdXQgPT09IHVuZGVmaW5lZCkgPyBmbih7IHNpZ25hbDogb3B0aW9ucy5zaWduYWwgfSkgOiBwVGltZW91dChQcm9taXNlLnJlc29sdmUoZm4oeyBzaWduYWw6IG9wdGlvbnMuc2lnbmFsIH0pKSwgKG9wdGlvbnMudGltZW91dCA9PT0gdW5kZWZpbmVkID8gdGhpcy50aW1lb3V0IDogb3B0aW9ucy50aW1lb3V0KSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMudGhyb3dPblRpbWVvdXQgPT09IHVuZGVmaW5lZCA/IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1BRdWV1ZV90aHJvd09uVGltZW91dCwgXCJmXCIpIDogb3B0aW9ucy50aHJvd09uVGltZW91dCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdCh0aW1lb3V0RXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG9wZXJhdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ2NvbXBsZXRlZCcsIHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ2Vycm9yJywgZXJyb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9QUXVldWVfaW5zdGFuY2VzLCBcIm1cIiwgX1BRdWV1ZV9uZXh0KS5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1BRdWV1ZV9xdWV1ZSwgXCJmXCIpLmVucXVldWUocnVuLCBvcHRpb25zKTtcbiAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1BRdWV1ZV9pbnN0YW5jZXMsIFwibVwiLCBfUFF1ZXVlX3RyeVRvU3RhcnRBbm90aGVyKS5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5lbWl0KCdhZGQnKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgIFNhbWUgYXMgYC5hZGQoKWAsIGJ1dCBhY2NlcHRzIGFuIGFycmF5IG9mIHN5bmMgb3IgYXN5bmMgZnVuY3Rpb25zLlxuXG4gICAgQHJldHVybnMgQSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiBhbGwgZnVuY3Rpb25zIGFyZSByZXNvbHZlZC5cbiAgICAqL1xuICAgIGFzeW5jIGFkZEFsbChmdW5jdGlvbnMsIG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKGZ1bmN0aW9ucy5tYXAoYXN5bmMgKGZ1bmN0aW9uXykgPT4gdGhpcy5hZGQoZnVuY3Rpb25fLCBvcHRpb25zKSkpO1xuICAgIH1cbiAgICAvKipcbiAgICBTdGFydCAob3IgcmVzdW1lKSBleGVjdXRpbmcgZW5xdWV1ZWQgdGFza3Mgd2l0aGluIGNvbmN1cnJlbmN5IGxpbWl0LiBObyBuZWVkIHRvIGNhbGwgdGhpcyBpZiBxdWV1ZSBpcyBub3QgcGF1c2VkICh2aWEgYG9wdGlvbnMuYXV0b1N0YXJ0ID0gZmFsc2VgIG9yIGJ5IGAucGF1c2UoKWAgbWV0aG9kLilcbiAgICAqL1xuICAgIHN0YXJ0KCkge1xuICAgICAgICBpZiAoIV9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1BRdWV1ZV9pc1BhdXNlZCwgXCJmXCIpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9QUXVldWVfaXNQYXVzZWQsIGZhbHNlLCBcImZcIik7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1BRdWV1ZV9pbnN0YW5jZXMsIFwibVwiLCBfUFF1ZXVlX3Byb2Nlc3NRdWV1ZSkuY2FsbCh0aGlzKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgIFB1dCBxdWV1ZSBleGVjdXRpb24gb24gaG9sZC5cbiAgICAqL1xuICAgIHBhdXNlKCkge1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9QUXVldWVfaXNQYXVzZWQsIHRydWUsIFwiZlwiKTtcbiAgICB9XG4gICAgLyoqXG4gICAgQ2xlYXIgdGhlIHF1ZXVlLlxuICAgICovXG4gICAgY2xlYXIoKSB7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX1BRdWV1ZV9xdWV1ZSwgbmV3IChfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9QUXVldWVfcXVldWVDbGFzcywgXCJmXCIpKSgpLCBcImZcIik7XG4gICAgfVxuICAgIC8qKlxuICAgIENhbiBiZSBjYWxsZWQgbXVsdGlwbGUgdGltZXMuIFVzZWZ1bCBpZiB5b3UgZm9yIGV4YW1wbGUgYWRkIGFkZGl0aW9uYWwgaXRlbXMgYXQgYSBsYXRlciB0aW1lLlxuXG4gICAgQHJldHVybnMgQSBwcm9taXNlIHRoYXQgc2V0dGxlcyB3aGVuIHRoZSBxdWV1ZSBiZWNvbWVzIGVtcHR5LlxuICAgICovXG4gICAgYXN5bmMgb25FbXB0eSgpIHtcbiAgICAgICAgLy8gSW5zdGFudGx5IHJlc29sdmUgaWYgdGhlIHF1ZXVlIGlzIGVtcHR5XG4gICAgICAgIGlmIChfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9QUXVldWVfcXVldWUsIFwiZlwiKS5zaXplID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgYXdhaXQgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfUFF1ZXVlX2luc3RhbmNlcywgXCJtXCIsIF9QUXVldWVfb25FdmVudCkuY2FsbCh0aGlzLCAnZW1wdHknKTtcbiAgICB9XG4gICAgLyoqXG4gICAgQHJldHVybnMgQSBwcm9taXNlIHRoYXQgc2V0dGxlcyB3aGVuIHRoZSBxdWV1ZSBzaXplIGlzIGxlc3MgdGhhbiB0aGUgZ2l2ZW4gbGltaXQ6IGBxdWV1ZS5zaXplIDwgbGltaXRgLlxuXG4gICAgSWYgeW91IHdhbnQgdG8gYXZvaWQgaGF2aW5nIHRoZSBxdWV1ZSBncm93IGJleW9uZCBhIGNlcnRhaW4gc2l6ZSB5b3UgY2FuIGBhd2FpdCBxdWV1ZS5vblNpemVMZXNzVGhhbigpYCBiZWZvcmUgYWRkaW5nIGEgbmV3IGl0ZW0uXG5cbiAgICBOb3RlIHRoYXQgdGhpcyBvbmx5IGxpbWl0cyB0aGUgbnVtYmVyIG9mIGl0ZW1zIHdhaXRpbmcgdG8gc3RhcnQuIFRoZXJlIGNvdWxkIHN0aWxsIGJlIHVwIHRvIGBjb25jdXJyZW5jeWAgam9icyBhbHJlYWR5IHJ1bm5pbmcgdGhhdCB0aGlzIGNhbGwgZG9lcyBub3QgaW5jbHVkZSBpbiBpdHMgY2FsY3VsYXRpb24uXG4gICAgKi9cbiAgICBhc3luYyBvblNpemVMZXNzVGhhbihsaW1pdCkge1xuICAgICAgICAvLyBJbnN0YW50bHkgcmVzb2x2ZSBpZiB0aGUgcXVldWUgaXMgZW1wdHkuXG4gICAgICAgIGlmIChfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9QUXVldWVfcXVldWUsIFwiZlwiKS5zaXplIDwgbGltaXQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBhd2FpdCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9QUXVldWVfaW5zdGFuY2VzLCBcIm1cIiwgX1BRdWV1ZV9vbkV2ZW50KS5jYWxsKHRoaXMsICduZXh0JywgKCkgPT4gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfUFF1ZXVlX3F1ZXVlLCBcImZcIikuc2l6ZSA8IGxpbWl0KTtcbiAgICB9XG4gICAgLyoqXG4gICAgVGhlIGRpZmZlcmVuY2Ugd2l0aCBgLm9uRW1wdHlgIGlzIHRoYXQgYC5vbklkbGVgIGd1YXJhbnRlZXMgdGhhdCBhbGwgd29yayBmcm9tIHRoZSBxdWV1ZSBoYXMgZmluaXNoZWQuIGAub25FbXB0eWAgbWVyZWx5IHNpZ25hbHMgdGhhdCB0aGUgcXVldWUgaXMgZW1wdHksIGJ1dCBpdCBjb3VsZCBtZWFuIHRoYXQgc29tZSBwcm9taXNlcyBoYXZlbid0IGNvbXBsZXRlZCB5ZXQuXG5cbiAgICBAcmV0dXJucyBBIHByb21pc2UgdGhhdCBzZXR0bGVzIHdoZW4gdGhlIHF1ZXVlIGJlY29tZXMgZW1wdHksIGFuZCBhbGwgcHJvbWlzZXMgaGF2ZSBjb21wbGV0ZWQ7IGBxdWV1ZS5zaXplID09PSAwICYmIHF1ZXVlLnBlbmRpbmcgPT09IDBgLlxuICAgICovXG4gICAgYXN5bmMgb25JZGxlKCkge1xuICAgICAgICAvLyBJbnN0YW50bHkgcmVzb2x2ZSBpZiBub25lIHBlbmRpbmcgYW5kIGlmIG5vdGhpbmcgZWxzZSBpcyBxdWV1ZWRcbiAgICAgICAgaWYgKF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1BRdWV1ZV9wZW5kaW5nQ291bnQsIFwiZlwiKSA9PT0gMCAmJiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9QUXVldWVfcXVldWUsIFwiZlwiKS5zaXplID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgYXdhaXQgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfUFF1ZXVlX2luc3RhbmNlcywgXCJtXCIsIF9QUXVldWVfb25FdmVudCkuY2FsbCh0aGlzLCAnaWRsZScpO1xuICAgIH1cbiAgICAvKipcbiAgICBTaXplIG9mIHRoZSBxdWV1ZSwgdGhlIG51bWJlciBvZiBxdWV1ZWQgaXRlbXMgd2FpdGluZyB0byBydW4uXG4gICAgKi9cbiAgICBnZXQgc2l6ZSgpIHtcbiAgICAgICAgcmV0dXJuIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1BRdWV1ZV9xdWV1ZSwgXCJmXCIpLnNpemU7XG4gICAgfVxuICAgIC8qKlxuICAgIFNpemUgb2YgdGhlIHF1ZXVlLCBmaWx0ZXJlZCBieSB0aGUgZ2l2ZW4gb3B0aW9ucy5cblxuICAgIEZvciBleGFtcGxlLCB0aGlzIGNhbiBiZSB1c2VkIHRvIGZpbmQgdGhlIG51bWJlciBvZiBpdGVtcyByZW1haW5pbmcgaW4gdGhlIHF1ZXVlIHdpdGggYSBzcGVjaWZpYyBwcmlvcml0eSBsZXZlbC5cbiAgICAqL1xuICAgIHNpemVCeShvcHRpb25zKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSB1bmljb3JuL25vLWFycmF5LWNhbGxiYWNrLXJlZmVyZW5jZVxuICAgICAgICByZXR1cm4gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfUFF1ZXVlX3F1ZXVlLCBcImZcIikuZmlsdGVyKG9wdGlvbnMpLmxlbmd0aDtcbiAgICB9XG4gICAgLyoqXG4gICAgTnVtYmVyIG9mIHJ1bm5pbmcgaXRlbXMgKG5vIGxvbmdlciBpbiB0aGUgcXVldWUpLlxuICAgICovXG4gICAgZ2V0IHBlbmRpbmcoKSB7XG4gICAgICAgIHJldHVybiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9QUXVldWVfcGVuZGluZ0NvdW50LCBcImZcIik7XG4gICAgfVxuICAgIC8qKlxuICAgIFdoZXRoZXIgdGhlIHF1ZXVlIGlzIGN1cnJlbnRseSBwYXVzZWQuXG4gICAgKi9cbiAgICBnZXQgaXNQYXVzZWQoKSB7XG4gICAgICAgIHJldHVybiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9QUXVldWVfaXNQYXVzZWQsIFwiZlwiKTtcbiAgICB9XG59XG5fUFF1ZXVlX2NhcnJ5b3ZlckNvbmN1cnJlbmN5Q291bnQgPSBuZXcgV2Vha01hcCgpLCBfUFF1ZXVlX2lzSW50ZXJ2YWxJZ25vcmVkID0gbmV3IFdlYWtNYXAoKSwgX1BRdWV1ZV9pbnRlcnZhbENvdW50ID0gbmV3IFdlYWtNYXAoKSwgX1BRdWV1ZV9pbnRlcnZhbENhcCA9IG5ldyBXZWFrTWFwKCksIF9QUXVldWVfaW50ZXJ2YWwgPSBuZXcgV2Vha01hcCgpLCBfUFF1ZXVlX2ludGVydmFsRW5kID0gbmV3IFdlYWtNYXAoKSwgX1BRdWV1ZV9pbnRlcnZhbElkID0gbmV3IFdlYWtNYXAoKSwgX1BRdWV1ZV90aW1lb3V0SWQgPSBuZXcgV2Vha01hcCgpLCBfUFF1ZXVlX3F1ZXVlID0gbmV3IFdlYWtNYXAoKSwgX1BRdWV1ZV9xdWV1ZUNsYXNzID0gbmV3IFdlYWtNYXAoKSwgX1BRdWV1ZV9wZW5kaW5nQ291bnQgPSBuZXcgV2Vha01hcCgpLCBfUFF1ZXVlX2NvbmN1cnJlbmN5ID0gbmV3IFdlYWtNYXAoKSwgX1BRdWV1ZV9pc1BhdXNlZCA9IG5ldyBXZWFrTWFwKCksIF9QUXVldWVfdGhyb3dPblRpbWVvdXQgPSBuZXcgV2Vha01hcCgpLCBfUFF1ZXVlX2luc3RhbmNlcyA9IG5ldyBXZWFrU2V0KCksIF9QUXVldWVfZG9lc0ludGVydmFsQWxsb3dBbm90aGVyX2dldCA9IGZ1bmN0aW9uIF9QUXVldWVfZG9lc0ludGVydmFsQWxsb3dBbm90aGVyX2dldCgpIHtcbiAgICByZXR1cm4gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfUFF1ZXVlX2lzSW50ZXJ2YWxJZ25vcmVkLCBcImZcIikgfHwgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfUFF1ZXVlX2ludGVydmFsQ291bnQsIFwiZlwiKSA8IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1BRdWV1ZV9pbnRlcnZhbENhcCwgXCJmXCIpO1xufSwgX1BRdWV1ZV9kb2VzQ29uY3VycmVudEFsbG93QW5vdGhlcl9nZXQgPSBmdW5jdGlvbiBfUFF1ZXVlX2RvZXNDb25jdXJyZW50QWxsb3dBbm90aGVyX2dldCgpIHtcbiAgICByZXR1cm4gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfUFF1ZXVlX3BlbmRpbmdDb3VudCwgXCJmXCIpIDwgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfUFF1ZXVlX2NvbmN1cnJlbmN5LCBcImZcIik7XG59LCBfUFF1ZXVlX25leHQgPSBmdW5jdGlvbiBfUFF1ZXVlX25leHQoKSB7XG4gICAgdmFyIF9hO1xuICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX1BRdWV1ZV9wZW5kaW5nQ291bnQsIChfYSA9IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1BRdWV1ZV9wZW5kaW5nQ291bnQsIFwiZlwiKSwgX2EtLSwgX2EpLCBcImZcIik7XG4gICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfUFF1ZXVlX2luc3RhbmNlcywgXCJtXCIsIF9QUXVldWVfdHJ5VG9TdGFydEFub3RoZXIpLmNhbGwodGhpcyk7XG4gICAgdGhpcy5lbWl0KCduZXh0Jyk7XG59LCBfUFF1ZXVlX2VtaXRFdmVudHMgPSBmdW5jdGlvbiBfUFF1ZXVlX2VtaXRFdmVudHMoKSB7XG4gICAgdGhpcy5lbWl0KCdlbXB0eScpO1xuICAgIGlmIChfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9QUXVldWVfcGVuZGluZ0NvdW50LCBcImZcIikgPT09IDApIHtcbiAgICAgICAgdGhpcy5lbWl0KCdpZGxlJyk7XG4gICAgfVxufSwgX1BRdWV1ZV9vblJlc3VtZUludGVydmFsID0gZnVuY3Rpb24gX1BRdWV1ZV9vblJlc3VtZUludGVydmFsKCkge1xuICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1BRdWV1ZV9pbnN0YW5jZXMsIFwibVwiLCBfUFF1ZXVlX29uSW50ZXJ2YWwpLmNhbGwodGhpcyk7XG4gICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfUFF1ZXVlX2luc3RhbmNlcywgXCJtXCIsIF9QUXVldWVfaW5pdGlhbGl6ZUludGVydmFsSWZOZWVkZWQpLmNhbGwodGhpcyk7XG4gICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfUFF1ZXVlX3RpbWVvdXRJZCwgdW5kZWZpbmVkLCBcImZcIik7XG59LCBfUFF1ZXVlX2lzSW50ZXJ2YWxQYXVzZWRfZ2V0ID0gZnVuY3Rpb24gX1BRdWV1ZV9pc0ludGVydmFsUGF1c2VkX2dldCgpIHtcbiAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpO1xuICAgIGlmIChfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9QUXVldWVfaW50ZXJ2YWxJZCwgXCJmXCIpID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29uc3QgZGVsYXkgPSBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9QUXVldWVfaW50ZXJ2YWxFbmQsIFwiZlwiKSAtIG5vdztcbiAgICAgICAgaWYgKGRlbGF5IDwgMCkge1xuICAgICAgICAgICAgLy8gQWN0IGFzIHRoZSBpbnRlcnZhbCB3YXMgZG9uZVxuICAgICAgICAgICAgLy8gV2UgZG9uJ3QgbmVlZCB0byByZXN1bWUgaXQgaGVyZSBiZWNhdXNlIGl0IHdpbGwgYmUgcmVzdW1lZCBvbiBsaW5lIDE2MFxuICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfUFF1ZXVlX2ludGVydmFsQ291bnQsIChfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9QUXVldWVfY2FycnlvdmVyQ29uY3VycmVuY3lDb3VudCwgXCJmXCIpKSA/IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1BRdWV1ZV9wZW5kaW5nQ291bnQsIFwiZlwiKSA6IDAsIFwiZlwiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIEFjdCBhcyB0aGUgaW50ZXJ2YWwgaXMgcGVuZGluZ1xuICAgICAgICAgICAgaWYgKF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1BRdWV1ZV90aW1lb3V0SWQsIFwiZlwiKSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfUFF1ZXVlX3RpbWVvdXRJZCwgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1BRdWV1ZV9pbnN0YW5jZXMsIFwibVwiLCBfUFF1ZXVlX29uUmVzdW1lSW50ZXJ2YWwpLmNhbGwodGhpcyk7XG4gICAgICAgICAgICAgICAgfSwgZGVsYXkpLCBcImZcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59LCBfUFF1ZXVlX3RyeVRvU3RhcnRBbm90aGVyID0gZnVuY3Rpb24gX1BRdWV1ZV90cnlUb1N0YXJ0QW5vdGhlcigpIHtcbiAgICBpZiAoX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfUFF1ZXVlX3F1ZXVlLCBcImZcIikuc2l6ZSA9PT0gMCkge1xuICAgICAgICAvLyBXZSBjYW4gY2xlYXIgdGhlIGludGVydmFsIChcInBhdXNlXCIpXG4gICAgICAgIC8vIEJlY2F1c2Ugd2UgY2FuIHJlZG8gaXQgbGF0ZXIgKFwicmVzdW1lXCIpXG4gICAgICAgIGlmIChfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9QUXVldWVfaW50ZXJ2YWxJZCwgXCJmXCIpKSB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1BRdWV1ZV9pbnRlcnZhbElkLCBcImZcIikpO1xuICAgICAgICB9XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX1BRdWV1ZV9pbnRlcnZhbElkLCB1bmRlZmluZWQsIFwiZlwiKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfUFF1ZXVlX2luc3RhbmNlcywgXCJtXCIsIF9QUXVldWVfZW1pdEV2ZW50cykuY2FsbCh0aGlzKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAoIV9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1BRdWV1ZV9pc1BhdXNlZCwgXCJmXCIpKSB7XG4gICAgICAgIGNvbnN0IGNhbkluaXRpYWxpemVJbnRlcnZhbCA9ICFfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9QUXVldWVfaW5zdGFuY2VzLCBcImFcIiwgX1BRdWV1ZV9pc0ludGVydmFsUGF1c2VkX2dldCk7XG4gICAgICAgIGlmIChfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9QUXVldWVfaW5zdGFuY2VzLCBcImFcIiwgX1BRdWV1ZV9kb2VzSW50ZXJ2YWxBbGxvd0Fub3RoZXJfZ2V0KSAmJiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9QUXVldWVfaW5zdGFuY2VzLCBcImFcIiwgX1BRdWV1ZV9kb2VzQ29uY3VycmVudEFsbG93QW5vdGhlcl9nZXQpKSB7XG4gICAgICAgICAgICBjb25zdCBqb2IgPSBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9QUXVldWVfcXVldWUsIFwiZlwiKS5kZXF1ZXVlKCk7XG4gICAgICAgICAgICBpZiAoIWpvYikge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZW1pdCgnYWN0aXZlJyk7XG4gICAgICAgICAgICBqb2IoKTtcbiAgICAgICAgICAgIGlmIChjYW5Jbml0aWFsaXplSW50ZXJ2YWwpIHtcbiAgICAgICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9QUXVldWVfaW5zdGFuY2VzLCBcIm1cIiwgX1BRdWV1ZV9pbml0aWFsaXplSW50ZXJ2YWxJZk5lZWRlZCkuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn0sIF9QUXVldWVfaW5pdGlhbGl6ZUludGVydmFsSWZOZWVkZWQgPSBmdW5jdGlvbiBfUFF1ZXVlX2luaXRpYWxpemVJbnRlcnZhbElmTmVlZGVkKCkge1xuICAgIGlmIChfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9QUXVldWVfaXNJbnRlcnZhbElnbm9yZWQsIFwiZlwiKSB8fCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9QUXVldWVfaW50ZXJ2YWxJZCwgXCJmXCIpICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9QUXVldWVfaW50ZXJ2YWxJZCwgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9QUXVldWVfaW5zdGFuY2VzLCBcIm1cIiwgX1BRdWV1ZV9vbkludGVydmFsKS5jYWxsKHRoaXMpO1xuICAgIH0sIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1BRdWV1ZV9pbnRlcnZhbCwgXCJmXCIpKSwgXCJmXCIpO1xuICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX1BRdWV1ZV9pbnRlcnZhbEVuZCwgRGF0ZS5ub3coKSArIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1BRdWV1ZV9pbnRlcnZhbCwgXCJmXCIpLCBcImZcIik7XG59LCBfUFF1ZXVlX29uSW50ZXJ2YWwgPSBmdW5jdGlvbiBfUFF1ZXVlX29uSW50ZXJ2YWwoKSB7XG4gICAgaWYgKF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1BRdWV1ZV9pbnRlcnZhbENvdW50LCBcImZcIikgPT09IDAgJiYgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfUFF1ZXVlX3BlbmRpbmdDb3VudCwgXCJmXCIpID09PSAwICYmIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1BRdWV1ZV9pbnRlcnZhbElkLCBcImZcIikpIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbChfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9QUXVldWVfaW50ZXJ2YWxJZCwgXCJmXCIpKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfUFF1ZXVlX2ludGVydmFsSWQsIHVuZGVmaW5lZCwgXCJmXCIpO1xuICAgIH1cbiAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9QUXVldWVfaW50ZXJ2YWxDb3VudCwgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfUFF1ZXVlX2NhcnJ5b3ZlckNvbmN1cnJlbmN5Q291bnQsIFwiZlwiKSA/IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1BRdWV1ZV9wZW5kaW5nQ291bnQsIFwiZlwiKSA6IDAsIFwiZlwiKTtcbiAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9QUXVldWVfaW5zdGFuY2VzLCBcIm1cIiwgX1BRdWV1ZV9wcm9jZXNzUXVldWUpLmNhbGwodGhpcyk7XG59LCBfUFF1ZXVlX3Byb2Nlc3NRdWV1ZSA9IGZ1bmN0aW9uIF9QUXVldWVfcHJvY2Vzc1F1ZXVlKCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1lbXB0eVxuICAgIHdoaWxlIChfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9QUXVldWVfaW5zdGFuY2VzLCBcIm1cIiwgX1BRdWV1ZV90cnlUb1N0YXJ0QW5vdGhlcikuY2FsbCh0aGlzKSkgeyB9XG59LCBfUFF1ZXVlX29uRXZlbnQgPSBhc3luYyBmdW5jdGlvbiBfUFF1ZXVlX29uRXZlbnQoZXZlbnQsIGZpbHRlcikge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgY29uc3QgbGlzdGVuZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoZmlsdGVyICYmICFmaWx0ZXIoKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMub2ZmKGV2ZW50LCBsaXN0ZW5lcik7XG4gICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMub24oZXZlbnQsIGxpc3RlbmVyKTtcbiAgICB9KTtcbn07XG4iLCIvLyBQb3J0IG9mIGxvd2VyX2JvdW5kIGZyb20gaHR0cHM6Ly9lbi5jcHByZWZlcmVuY2UuY29tL3cvY3BwL2FsZ29yaXRobS9sb3dlcl9ib3VuZFxuLy8gVXNlZCB0byBjb21wdXRlIGluc2VydGlvbiBpbmRleCB0byBrZWVwIHF1ZXVlIHNvcnRlZCBhZnRlciBpbnNlcnRpb25cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvd2VyQm91bmQoYXJyYXksIHZhbHVlLCBjb21wYXJhdG9yKSB7XG4gICAgbGV0IGZpcnN0ID0gMDtcbiAgICBsZXQgY291bnQgPSBhcnJheS5sZW5ndGg7XG4gICAgd2hpbGUgKGNvdW50ID4gMCkge1xuICAgICAgICBjb25zdCBzdGVwID0gTWF0aC50cnVuYyhjb3VudCAvIDIpO1xuICAgICAgICBsZXQgaXQgPSBmaXJzdCArIHN0ZXA7XG4gICAgICAgIGlmIChjb21wYXJhdG9yKGFycmF5W2l0XSwgdmFsdWUpIDw9IDApIHtcbiAgICAgICAgICAgIGZpcnN0ID0gKytpdDtcbiAgICAgICAgICAgIGNvdW50IC09IHN0ZXAgKyAxO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY291bnQgPSBzdGVwO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmaXJzdDtcbn1cbiIsInZhciBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0ID0gKHRoaXMgJiYgdGhpcy5fX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KSB8fCBmdW5jdGlvbiAocmVjZWl2ZXIsIHN0YXRlLCBraW5kLCBmKSB7XG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgZ2V0dGVyXCIpO1xuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHJlYWQgcHJpdmF0ZSBtZW1iZXIgZnJvbSBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xuICAgIHJldHVybiBraW5kID09PSBcIm1cIiA/IGYgOiBraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlcikgOiBmID8gZi52YWx1ZSA6IHN0YXRlLmdldChyZWNlaXZlcik7XG59O1xudmFyIF9Qcmlvcml0eVF1ZXVlX3F1ZXVlO1xuaW1wb3J0IGxvd2VyQm91bmQgZnJvbSAnLi9sb3dlci1ib3VuZC5qcyc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcmlvcml0eVF1ZXVlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgX1ByaW9yaXR5UXVldWVfcXVldWUuc2V0KHRoaXMsIFtdKTtcbiAgICB9XG4gICAgZW5xdWV1ZShydW4sIG9wdGlvbnMpIHtcbiAgICAgICAgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHByaW9yaXR5OiAwLFxuICAgICAgICAgICAgLi4ub3B0aW9ucyxcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IHtcbiAgICAgICAgICAgIHByaW9yaXR5OiBvcHRpb25zLnByaW9yaXR5LFxuICAgICAgICAgICAgcnVuLFxuICAgICAgICB9O1xuICAgICAgICBpZiAodGhpcy5zaXplICYmIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1ByaW9yaXR5UXVldWVfcXVldWUsIFwiZlwiKVt0aGlzLnNpemUgLSAxXS5wcmlvcml0eSA+PSBvcHRpb25zLnByaW9yaXR5KSB7XG4gICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9Qcmlvcml0eVF1ZXVlX3F1ZXVlLCBcImZcIikucHVzaChlbGVtZW50KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpbmRleCA9IGxvd2VyQm91bmQoX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfUHJpb3JpdHlRdWV1ZV9xdWV1ZSwgXCJmXCIpLCBlbGVtZW50LCAoYSwgYikgPT4gYi5wcmlvcml0eSAtIGEucHJpb3JpdHkpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9Qcmlvcml0eVF1ZXVlX3F1ZXVlLCBcImZcIikuc3BsaWNlKGluZGV4LCAwLCBlbGVtZW50KTtcbiAgICB9XG4gICAgZGVxdWV1ZSgpIHtcbiAgICAgICAgY29uc3QgaXRlbSA9IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1ByaW9yaXR5UXVldWVfcXVldWUsIFwiZlwiKS5zaGlmdCgpO1xuICAgICAgICByZXR1cm4gaXRlbSA9PT0gbnVsbCB8fCBpdGVtID09PSB2b2lkIDAgPyB2b2lkIDAgOiBpdGVtLnJ1bjtcbiAgICB9XG4gICAgZmlsdGVyKG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1ByaW9yaXR5UXVldWVfcXVldWUsIFwiZlwiKS5maWx0ZXIoKGVsZW1lbnQpID0+IGVsZW1lbnQucHJpb3JpdHkgPT09IG9wdGlvbnMucHJpb3JpdHkpLm1hcCgoZWxlbWVudCkgPT4gZWxlbWVudC5ydW4pO1xuICAgIH1cbiAgICBnZXQgc2l6ZSgpIHtcbiAgICAgICAgcmV0dXJuIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1ByaW9yaXR5UXVldWVfcXVldWUsIFwiZlwiKS5sZW5ndGg7XG4gICAgfVxufVxuX1ByaW9yaXR5UXVldWVfcXVldWUgPSBuZXcgV2Vha01hcCgpO1xuIiwiZXhwb3J0IGNsYXNzIFRpbWVvdXRFcnJvciBleHRlbmRzIEVycm9yIHtcblx0Y29uc3RydWN0b3IobWVzc2FnZSkge1xuXHRcdHN1cGVyKG1lc3NhZ2UpO1xuXHRcdHRoaXMubmFtZSA9ICdUaW1lb3V0RXJyb3InO1xuXHR9XG59XG5cbi8qKlxuQW4gZXJyb3IgdG8gYmUgdGhyb3duIHdoZW4gdGhlIHJlcXVlc3QgaXMgYWJvcnRlZCBieSBBYm9ydENvbnRyb2xsZXIuXG5ET01FeGNlcHRpb24gaXMgdGhyb3duIGluc3RlYWQgb2YgdGhpcyBFcnJvciB3aGVuIERPTUV4Y2VwdGlvbiBpcyBhdmFpbGFibGUuXG4qL1xuZXhwb3J0IGNsYXNzIEFib3J0RXJyb3IgZXh0ZW5kcyBFcnJvciB7XG5cdGNvbnN0cnVjdG9yKG1lc3NhZ2UpIHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMubmFtZSA9ICdBYm9ydEVycm9yJztcblx0XHR0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuXHR9XG59XG5cbi8qKlxuVE9ETzogUmVtb3ZlIEFib3J0RXJyb3IgYW5kIGp1c3QgdGhyb3cgRE9NRXhjZXB0aW9uIHdoZW4gdGFyZ2V0aW5nIE5vZGUgMTguXG4qL1xuY29uc3QgZ2V0RE9NRXhjZXB0aW9uID0gZXJyb3JNZXNzYWdlID0+IGdsb2JhbFRoaXMuRE9NRXhjZXB0aW9uID09PSB1bmRlZmluZWQgP1xuXHRuZXcgQWJvcnRFcnJvcihlcnJvck1lc3NhZ2UpIDpcblx0bmV3IERPTUV4Y2VwdGlvbihlcnJvck1lc3NhZ2UpO1xuXG4vKipcblRPRE86IFJlbW92ZSBiZWxvdyBmdW5jdGlvbiBhbmQganVzdCAncmVqZWN0KHNpZ25hbC5yZWFzb24pJyB3aGVuIHRhcmdldGluZyBOb2RlIDE4LlxuKi9cbmNvbnN0IGdldEFib3J0ZWRSZWFzb24gPSBzaWduYWwgPT4ge1xuXHRjb25zdCByZWFzb24gPSBzaWduYWwucmVhc29uID09PSB1bmRlZmluZWQgP1xuXHRcdGdldERPTUV4Y2VwdGlvbignVGhpcyBvcGVyYXRpb24gd2FzIGFib3J0ZWQuJykgOlxuXHRcdHNpZ25hbC5yZWFzb247XG5cblx0cmV0dXJuIHJlYXNvbiBpbnN0YW5jZW9mIEVycm9yID8gcmVhc29uIDogZ2V0RE9NRXhjZXB0aW9uKHJlYXNvbik7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwVGltZW91dChwcm9taXNlLCBtaWxsaXNlY29uZHMsIGZhbGxiYWNrLCBvcHRpb25zKSB7XG5cdGxldCB0aW1lcjtcblxuXHRjb25zdCBjYW5jZWxhYmxlUHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRpZiAodHlwZW9mIG1pbGxpc2Vjb25kcyAhPT0gJ251bWJlcicgfHwgTWF0aC5zaWduKG1pbGxpc2Vjb25kcykgIT09IDEpIHtcblx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoYEV4cGVjdGVkIFxcYG1pbGxpc2Vjb25kc1xcYCB0byBiZSBhIHBvc2l0aXZlIG51bWJlciwgZ290IFxcYCR7bWlsbGlzZWNvbmRzfVxcYGApO1xuXHRcdH1cblxuXHRcdGlmIChtaWxsaXNlY29uZHMgPT09IE51bWJlci5QT1NJVElWRV9JTkZJTklUWSkge1xuXHRcdFx0cmVzb2x2ZShwcm9taXNlKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRvcHRpb25zID0ge1xuXHRcdFx0Y3VzdG9tVGltZXJzOiB7c2V0VGltZW91dCwgY2xlYXJUaW1lb3V0fSxcblx0XHRcdC4uLm9wdGlvbnNcblx0XHR9O1xuXG5cdFx0aWYgKG9wdGlvbnMuc2lnbmFsKSB7XG5cdFx0XHRjb25zdCB7c2lnbmFsfSA9IG9wdGlvbnM7XG5cdFx0XHRpZiAoc2lnbmFsLmFib3J0ZWQpIHtcblx0XHRcdFx0cmVqZWN0KGdldEFib3J0ZWRSZWFzb24oc2lnbmFsKSk7XG5cdFx0XHR9XG5cblx0XHRcdHNpZ25hbC5hZGRFdmVudExpc3RlbmVyKCdhYm9ydCcsICgpID0+IHtcblx0XHRcdFx0cmVqZWN0KGdldEFib3J0ZWRSZWFzb24oc2lnbmFsKSk7XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHR0aW1lciA9IG9wdGlvbnMuY3VzdG9tVGltZXJzLnNldFRpbWVvdXQuY2FsbCh1bmRlZmluZWQsICgpID0+IHtcblx0XHRcdGlmICh0eXBlb2YgZmFsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRyZXNvbHZlKGZhbGxiYWNrKCkpO1xuXHRcdFx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0XHRcdHJlamVjdChlcnJvcik7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IG1lc3NhZ2UgPSB0eXBlb2YgZmFsbGJhY2sgPT09ICdzdHJpbmcnID8gZmFsbGJhY2sgOiBgUHJvbWlzZSB0aW1lZCBvdXQgYWZ0ZXIgJHttaWxsaXNlY29uZHN9IG1pbGxpc2Vjb25kc2A7XG5cdFx0XHRjb25zdCB0aW1lb3V0RXJyb3IgPSBmYWxsYmFjayBpbnN0YW5jZW9mIEVycm9yID8gZmFsbGJhY2sgOiBuZXcgVGltZW91dEVycm9yKG1lc3NhZ2UpO1xuXG5cdFx0XHRpZiAodHlwZW9mIHByb21pc2UuY2FuY2VsID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdHByb21pc2UuY2FuY2VsKCk7XG5cdFx0XHR9XG5cblx0XHRcdHJlamVjdCh0aW1lb3V0RXJyb3IpO1xuXHRcdH0sIG1pbGxpc2Vjb25kcyk7XG5cblx0XHQoYXN5bmMgKCkgPT4ge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0cmVzb2x2ZShhd2FpdCBwcm9taXNlKTtcblx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRcdHJlamVjdChlcnJvcik7XG5cdFx0XHR9IGZpbmFsbHkge1xuXHRcdFx0XHRvcHRpb25zLmN1c3RvbVRpbWVycy5jbGVhclRpbWVvdXQuY2FsbCh1bmRlZmluZWQsIHRpbWVyKTtcblx0XHRcdH1cblx0XHR9KSgpO1xuXHR9KTtcblxuXHRjYW5jZWxhYmxlUHJvbWlzZS5jbGVhciA9ICgpID0+IHtcblx0XHRjbGVhclRpbWVvdXQodGltZXIpO1xuXHRcdHRpbWVyID0gdW5kZWZpbmVkO1xuXHR9O1xuXG5cdHJldHVybiBjYW5jZWxhYmxlUHJvbWlzZTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSAocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSA9PiB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV0gPSBkZWZlcnJlZFtpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiY29udGVudC1zY3JpcHRcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSAoY2h1bmtJZCkgPT4gKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMCk7XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rX2x1eHdhbGxldF94XCJdID0gc2VsZltcIndlYnBhY2tDaHVua19sdXh3YWxsZXRfeFwiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1wid2ViZXh0ZW5zaW9uLXBvbHlmaWxsXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2NvbnRlbnQtc2NyaXB0L2luZGV4LnRzXCIpKSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=