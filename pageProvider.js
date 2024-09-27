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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
var exports = __webpack_exports__;
/*!*********************************************************!*\
  !*** ./node_modules/@luxfi/page-provider/dist/index.js ***!
  \*********************************************************/


Object.defineProperty(exports, "__esModule", ({ value: true }));

var events = __webpack_require__(/*! events */ "./node_modules/events/events.js");
var ethRpcErrors = __webpack_require__(/*! eth-rpc-errors */ "./node_modules/eth-rpc-errors/dist/index.js");

/**
 * this script is live in content-script / dapp's page
 */
class Message extends events.EventEmitter {
    constructor() {
        super(...arguments);
        // avaiable id list
        // max concurrent request limit
        this._requestIdPool = [...Array(1000).keys()];
        this._EVENT_PRE = 'ETH_WALLET_';
        this._waitingMap = new Map();
        this.request = (data) => {
            if (!this._requestIdPool.length) {
                throw ethRpcErrors.ethErrors.rpc.limitExceeded();
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
                request.reject(ethRpcErrors.ethErrors.provider.userRejectedRequest());
            }
            this._waitingMap.clear();
        };
    }
}

class BroadcastChannelMessage extends Message {
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

class PushEventHandlers {
    constructor(provider) {
        this.connect = (data) => {
            if (!this.provider._isConnected) {
                this.provider._isConnected = true;
                this.provider._state.isConnected = true;
                this._emit("connect", data);
            }
        };
        this.unlock = () => {
            this.provider._isUnlocked = true;
            this.provider._state.isUnlocked = true;
        };
        this.lock = () => {
            this.provider._isUnlocked = false;
        };
        this.disconnect = () => {
            this.provider._isConnected = false;
            this.provider._state.isConnected = false;
            this.provider._state.accounts = null;
            this.provider.selectedAddress = null;
            const disconnectError = ethRpcErrors.ethErrors.provider.disconnected();
            this._emit("accountsChanged", []);
            this._emit("disconnect", disconnectError);
            this._emit("close", disconnectError);
        };
        this.accountsChanged = (accounts) => {
            if ((accounts === null || accounts === void 0 ? void 0 : accounts[0]) === this.provider.selectedAddress) {
                return;
            }
            this.provider.selectedAddress = accounts === null || accounts === void 0 ? void 0 : accounts[0];
            this.provider._state.accounts = accounts;
            this._emit("accountsChanged", accounts);
        };
        this.chainChanged = ({ chain, networkVersion }) => {
            this.connect({ chainId: chain });
            if (chain !== this.provider.chainId) {
                this.provider.chainId = chain;
                this._emit("chainChanged", chain);
            }
            if (networkVersion !== this.provider.networkVersion) {
                this.provider.networkVersion = networkVersion;
                this._emit("networkChanged", networkVersion);
            }
        };
        this["lux:chainChanged"] = (chain) => {
            var _a, _b;
            if (chain &&
                ((_a = chain.hex) === null || _a === void 0 ? void 0 : _a.toLowerCase()) !== ((_b = this.provider.chainId) === null || _b === void 0 ? void 0 : _b.toLowerCase())) {
                this._emit("lux:chainChanged", chain);
            }
        };
        this.provider = provider;
    }
    _emit(event, data) {
        if (this.provider._initialized && this.provider._isReady) {
            this.provider.emit(event, data);
        }
    }
}

const domReadyCall = (callback) => {
    if (document.readyState === "loading") {
        const domContentLoadedHandler = () => {
            callback();
            document.removeEventListener("DOMContentLoaded", domContentLoadedHandler);
        };
        document.addEventListener("DOMContentLoaded", domContentLoadedHandler);
    }
    else {
        callback();
    }
};
const $ = document.querySelector.bind(document);

class ReadyPromise {
    constructor(count) {
        this._allCheck = [];
        this._tasks = [];
        this.check = (index) => {
            this._allCheck[index - 1] = true;
            this._proceed();
        };
        this.uncheck = (index) => {
            this._allCheck[index - 1] = false;
        };
        this._proceed = () => {
            if (this._allCheck.some((_) => !_)) {
                return;
            }
            while (this._tasks.length) {
                const { resolve, fn } = this._tasks.shift();
                resolve(fn());
            }
        };
        this.call = (fn) => {
            return new Promise((resolve) => {
                this._tasks.push({
                    fn,
                    resolve,
                });
                this._proceed();
            });
        };
        this._allCheck = [...Array(count)];
    }
}

class DedupePromise {
    constructor(blackList) {
        this._tasks = {};
        this._blackList = blackList;
    }
    async call(key, defer) {
        if (this._blackList.includes(key) && this._tasks[key]) {
            throw ethRpcErrors.ethErrors.rpc.transactionRejected('there is a pending request, please request after it resolved');
        }
        return new Promise((resolve) => {
            this._tasks[key] = (this._tasks[key] || 0) + 1;
            resolve(defer().finally(() => {
                this._tasks[key]--;
                if (!this._tasks[key]) {
                    delete this._tasks[key];
                }
            }));
        });
    }
}

var img$2 = "data:image/svg+xml,%3csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M19.3841 11.1807C20.1288 9.51697 16.4471 4.86883 12.9297 2.93232C10.7126 1.43213 8.40245 1.63823 7.93457 2.29693C6.90774 3.7425 11.3347 4.9674 14.2953 6.39678C13.6589 6.67319 13.0591 7.16923 12.7065 7.8036C11.6027 6.59859 9.18013 5.56091 6.33748 6.39678C4.42188 6.96005 2.82987 8.28799 2.21457 10.2937C2.06506 10.2273 1.89953 10.1903 1.72537 10.1903C1.0594 10.1903 0.519531 10.7302 0.519531 11.3962C0.519531 12.0621 1.0594 12.602 1.72537 12.602C1.84881 12.602 2.23477 12.5192 2.23477 12.5192L8.40245 12.5639C5.93586 16.4769 3.98656 17.0489 3.98656 17.7268C3.98656 18.4047 5.8517 18.221 6.55201 17.9683C9.90451 16.7587 13.5053 12.9887 14.1231 11.9035C16.7179 12.2272 18.8985 12.2655 19.3841 11.1807Z' fill='url(%23paint0_linear_12614_21962)'/%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M14.294 6.40006C14.2941 6.40013 14.2943 6.40021 14.2945 6.40028C14.4317 6.34622 14.4095 6.14354 14.3718 5.98438C14.2852 5.61855 12.7909 4.14293 11.3876 3.48199C9.47551 2.58142 8.0675 2.6278 7.85938 3.04284C8.24884 3.84115 10.0546 4.59066 11.9405 5.37346C12.7451 5.70743 13.5643 6.04745 14.2943 6.39991C14.2942 6.39996 14.2941 6.40001 14.294 6.40006Z' fill='url(%23paint1_linear_12614_21962)'/%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M11.8691 14.4333C11.4824 14.2855 11.0455 14.15 10.5489 14.0269C11.0784 13.0794 11.1895 11.6767 10.6894 10.7899C9.98761 9.54527 9.10659 8.88281 7.05932 8.88281C5.93332 8.88281 2.90163 9.26209 2.84781 11.7929C2.84216 12.0584 2.84767 12.3018 2.86689 12.5256L8.40299 12.5657C7.65665 13.7497 6.95767 14.6278 6.34572 15.2955C7.08045 15.4838 7.68677 15.6419 8.24342 15.787C8.77163 15.9247 9.25511 16.0507 9.76112 16.1798C10.5244 15.6237 11.242 15.0173 11.8691 14.4333Z' fill='url(%23paint2_linear_12614_21962)'/%3e%3cpath d='M2.14044 12.263C2.36659 14.1855 3.4592 14.9389 5.69184 15.1619C7.92448 15.3849 9.20516 15.2353 10.9102 15.3904C12.3342 15.52 13.6057 16.2456 14.0773 15.9948C14.5019 15.7692 14.2644 14.9538 13.6963 14.4307C12.96 13.7526 11.941 13.2811 10.1479 13.1138C10.5052 12.1354 10.4051 10.7636 9.85009 10.0172C9.04764 8.93801 7.56647 8.45009 5.69184 8.66327C3.73329 8.88598 1.85661 9.85023 2.14044 12.263Z' fill='url(%23paint3_linear_12614_21962)'/%3e%3cdefs%3e%3clinearGradient id='paint0_linear_12614_21962' x1='6.11443' y1='9.70738' x2='19.2237' y2='13.4249' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%238797FF'/%3e%3cstop offset='1' stop-color='%23AAA8FF'/%3e%3c/linearGradient%3e%3clinearGradient id='paint1_linear_12614_21962' x1='17.0152' y1='9.46126' x2='7.55628' y2='-0.020789' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%233B22A0'/%3e%3cstop offset='1' stop-color='%235156D8' stop-opacity='0'/%3e%3c/linearGradient%3e%3clinearGradient id='paint2_linear_12614_21962' x1='12.1323' y1='14.7636' x2='3.04589' y2='9.5396' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%233B1E8F'/%3e%3cstop offset='1' stop-color='%236A6FFB' stop-opacity='0'/%3e%3c/linearGradient%3e%3clinearGradient id='paint3_linear_12614_21962' x1='6.89681' y1='9.6088' x2='13.0385' y2='17.4125' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%238898FF'/%3e%3cstop offset='0.983895' stop-color='%235F47F1'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e";

var img$1 = "data:image/svg+xml,%3csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M16 0H0V16H16V0Z' fill='white' fill-opacity='0.01'/%3e%3cpath d='M2.66663 2.66663L13.3333 13.3333' stroke='%23707280' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3e%3cpath d='M2.66663 13.3333L13.3333 2.66663' stroke='%23707280' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3e%3c/svg%3e";

class Notice {
    constructor(options) {
        this.options = options;
        this.el = document.createElement("div");
        this.el.className = `lux-notice ${this.options.className ? this.options.className : ""}`;
        // initial events
        this.events = {};
        // inner element
        this.insert();
        // auto hide animation
        if (this.options.timeout) {
            this.startTimer();
        }
        // mouse events
        this.registerEvents();
    }
    insert() {
        var _a;
        if (!this.el) {
            return;
        }
        // main
        const elMain = document.createElement("div");
        elMain.className = "lux-notice-content";
        elMain.innerHTML = this.options.content;
        (_a = this.el) === null || _a === void 0 ? void 0 : _a.appendChild(elMain);
        // close button
        if (this.options.closeable) {
            this.closeButton = document.createElement("img");
            this.closeButton.setAttribute("src", img$1);
            this.closeButton.className = "lux-notice-close";
            this.el.appendChild(this.closeButton);
        }
        this.options.container.appendChild(this.el);
    }
    registerEvents() {
        var _a;
        this.events.hide = () => this.hide();
        (_a = this.closeButton) === null || _a === void 0 ? void 0 : _a.addEventListener("click", this.events.hide, false);
    }
    startTimer(timeout = this.options.timeout) {
        this.timer = setTimeout(() => {
            this.hide();
        }, timeout);
    }
    stopTimer() {
        if (this.timer) {
            clearTimeout(this.timer);
            this.timer = null;
        }
    }
    hide() {
        if (!this.el) {
            return;
        }
        this.el.classList.add(".lux-notice-is-hide");
        // setTimeout(() => {
        this.options.container.removeChild(this.el);
        this.el = null;
        if (this.options.onHide) {
            this.options.onHide();
        }
        this.stopTimer();
        // }, 300);
    }
}
let container = null;
let style = null;
const styles = `
    .lux-notice-container {
      position: fixed;
      z-index: 99999;
      top: 60px;
      right: 42px;
      font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Roboto, sans-serif;
    }
    .lux-notice-container * {
      font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Roboto, sans-serif;
      color: #192945; 
    }

    .lux-notice {
      min-width: 230px;
      min-height: 44px;
      background: #FFFFFF;
      border: 1px solid #7084FF;
      border: 1.5px solid #7084FF;
      box-sizing: border-box;
      box-shadow: 0px 24px 40px rgba(134, 151, 255, 0.12);
      border-radius: 8px;
      display: flex;
      align-items: center;

      font-family: 'Arial', sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 16px;
      color: #192945;

      padding: 12px;
      gap: 8px;

      opacity: 1;
    }
    .lux-notice + .lux-notice {
      margin-top: 30px;
    }
    .lux-notice-content {
      display: flex;
      align-items: center;
      color: #192945;
    }
    .lux-notice-is-hide {
      opacity: 0;
      transition: 0.3s;
    }

    .lux-notice-icon {
      width: 20px;
    }
    .lux-notice-close {
      flex-shrink: 0;
      margin-left: 16px;
      width: 16px;
      height: 16px;
      cursor: pointer;
    }
    .lux-strong {
      font-weight: bold;
      color: #192945;
    }
    .lux-notice-default-wallet {
      border-radius: 12px;
      height: 64px;
      padding-left: 16px;
      padding-right: 20px;

      font-size: 12px;
      line-height: 16px;

      color: #192945;
    }
  `;
function notice(options) {
    const { content = "", 
    // timeout = 3000,
    timeout = 0, closeButton = "×", className = "", closeable = false, } = options || {};
    if (!container) {
        container = document.createElement("div");
        container.classList.add("lux-notice-container");
        style = document.createElement("style");
        style.innerHTML = styles;
        document.body.appendChild(style);
        document.body.appendChild(container);
    }
    return new Notice({
        content,
        timeout,
        closeButton,
        container,
        className,
        closeable,
        onHide: () => {
            if (container && !(container === null || container === void 0 ? void 0 : container.hasChildNodes())) {
                document.body.removeChild(container);
                style && document.body.removeChild(style);
                style = null;
                container = null;
            }
        },
    });
}

const isInIframe = () => {
    return window.self !== window.top;
};
const isInSameOriginIframe = () => {
    var _a, _b;
    if (!isInIframe()) {
        return false;
    }
    try {
        return window.self.location.origin === ((_b = (_a = window.top) === null || _a === void 0 ? void 0 : _a.location) === null || _b === void 0 ? void 0 : _b.origin);
    }
    catch (e) {
        return false;
    }
};

let instance$1;
const switchChainNotice = (chain) => {
    if (isInSameOriginIframe()) {
        return;
    }
    if (instance$1) {
        instance$1.hide();
        instance$1 = null;
    }
    const rawContent = `<img style="width: 20px; height: 20px; margin-right: 8px;" src="${img$2}"/> <div style="color: #192945; padding-right: 2px;">Network switched to <span class="lux-strong" style="margin: 0;">${chain === null || chain === void 0 ? void 0 : chain.name}</span><div>`;
    let content = rawContent;
    instance$1 = notice({
        timeout: 3000,
        content,
    });
};

var img = "data:image/svg+xml,%3csvg width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M34.5002 5.11523L21.9277 14.4177L24.2652 8.93523L34.5015 5.11523H34.5002Z' fill='%23E17726'/%3e%3cpath d='M34.6389 5.03915C34.6569 5.07236 34.6625 5.11097 34.6544 5.14792C34.6464 5.18487 34.6253 5.2177 34.5951 5.2404L22.0214 14.5442C21.9935 14.5643 21.9598 14.5748 21.9255 14.574C21.8911 14.5733 21.8579 14.5613 21.831 14.5399C21.8041 14.5185 21.7849 14.4889 21.7764 14.4556C21.7679 14.4223 21.7705 14.3871 21.7839 14.3554L24.1214 8.87291C24.1297 8.85316 24.142 8.83533 24.1575 8.8205C24.1729 8.80567 24.1913 8.79415 24.2114 8.78666L34.4464 4.96665C34.4818 4.95366 34.5207 4.95383 34.5561 4.96714C34.5914 4.98045 34.6208 5.006 34.6389 5.03915V5.03915ZM24.3839 9.05791L22.3001 13.9454L33.5076 5.6529L24.3839 9.05791Z' fill='%23E17726'/%3e%3cpath d='M5.5 5.11523L17.96 14.5052L15.735 8.93523L5.5 5.11523Z' fill='%23E27625'/%3e%3cpath d='M5.36134 5.0385C5.37965 5.00529 5.40932 4.9798 5.44492 4.96671C5.48051 4.95362 5.51963 4.95381 5.55509 4.96725L15.7901 8.78725C15.8313 8.8035 15.8651 8.836 15.8801 8.876L18.1063 14.446C18.1186 14.4778 18.1202 14.5126 18.111 14.5454C18.1018 14.5782 18.0822 14.607 18.0551 14.6277C18.0281 14.6484 17.9951 14.6598 17.9611 14.6602C17.927 14.6605 17.8938 14.6499 17.8663 14.6298L5.40384 5.23975C5.37412 5.21692 5.35352 5.18424 5.34573 5.14759C5.33794 5.11093 5.34347 5.0727 5.36134 5.03975V5.0385ZM6.46134 5.641L17.6051 14.0398L15.6138 9.0585L6.46009 5.641H6.46134Z' fill='%23E27625'/%3e%3cpath d='M29.9739 26.6868L26.6289 31.7968L33.7914 33.7693L35.8439 26.798L29.9739 26.6855V26.6868Z' fill='%23E27625'/%3e%3cpath d='M29.8414 26.6006C29.856 26.5782 29.8761 26.56 29.8997 26.5475C29.9233 26.535 29.9497 26.5288 29.9764 26.5293L35.8464 26.6418C35.8704 26.6423 35.8941 26.6482 35.9155 26.6592C35.9369 26.6702 35.9555 26.686 35.9699 26.7053C35.9842 26.7246 35.994 26.747 35.9983 26.7706C36.0027 26.7943 36.0016 26.8187 35.9951 26.8418L33.9426 33.8143C33.931 33.8539 33.9043 33.8873 33.8683 33.9074C33.8323 33.9275 33.7899 33.9327 33.7501 33.9218L26.5876 31.9493C26.5637 31.9429 26.5416 31.9308 26.5232 31.9142C26.5048 31.8976 26.4906 31.8769 26.4817 31.8538C26.4728 31.8306 26.4695 31.8057 26.472 31.781C26.4746 31.7564 26.4829 31.7327 26.4964 31.7118L29.8426 26.5993L29.8414 26.6006ZM30.0576 26.8456L26.8789 31.7031L33.6839 33.5768L35.6339 26.9518L30.0589 26.8456H30.0576Z' fill='%23E27625'/%3e%3cpath d='M4.16895 26.7968L6.2077 33.768L13.3589 31.7955L10.0264 26.6855L4.16895 26.7968V26.7968Z' fill='%23E27625'/%3e%3cpath d='M10.0226 26.5293C10.0776 26.5281 10.1288 26.5543 10.1576 26.6006L13.4913 31.7106C13.5048 31.7313 13.5132 31.755 13.5158 31.7796C13.5184 31.8041 13.5153 31.829 13.5065 31.8521C13.4977 31.8753 13.4836 31.896 13.4654 31.9127C13.4471 31.9293 13.4252 31.9415 13.4013 31.9481L6.25008 33.9218C6.21031 33.9327 6.16787 33.9275 6.13188 33.9074C6.09589 33.8873 6.06921 33.8539 6.05758 33.8143L4.01758 26.8431C4.0111 26.82 4.00998 26.7958 4.01429 26.7722C4.0186 26.7486 4.02824 26.7263 4.04246 26.7071C4.05669 26.6878 4.07513 26.672 4.09637 26.6609C4.11762 26.6498 4.14112 26.6437 4.16508 26.6431L10.0226 26.5306V26.5293ZM4.37758 26.9518L6.31508 33.5768L13.1088 31.7018L9.94133 26.8456L4.37883 26.9518H4.37758Z' fill='%23E27625'/%3e%3cpath d='M12.9739 18.0525L10.9839 21.0537L18.0714 21.3762L17.8376 13.75L12.9751 18.0537L12.9739 18.0525Z' fill='%23E27625'/%3e%3cpath d='M17.8987 13.6031C17.955 13.6281 17.9912 13.6818 17.9937 13.7431L18.23 21.3718C18.2307 21.3936 18.2269 21.4152 18.2188 21.4354C18.2107 21.4556 18.1986 21.474 18.1831 21.4892C18.1676 21.5045 18.1491 21.5164 18.1287 21.5241C18.1084 21.5319 18.0867 21.5354 18.065 21.5343L10.9775 21.2106C10.9497 21.2094 10.9226 21.2009 10.8992 21.1858C10.8758 21.1708 10.8567 21.1499 10.844 21.1251C10.8313 21.1003 10.8254 21.0726 10.8269 21.0448C10.8284 21.017 10.8372 20.9901 10.8525 20.9668L12.8425 17.9643C12.8499 17.9533 12.8587 17.9432 12.8687 17.9343L17.7312 13.6293C17.7537 13.6094 17.7815 13.5964 17.8111 13.5917C17.8408 13.5871 17.8712 13.591 17.8987 13.6031V13.6031ZM13.0937 18.1556L11.2687 20.9093L17.91 21.2106L17.6887 14.0881L13.0937 18.1556V18.1556Z' fill='%23E27625'/%3e%3cpath d='M27.0265 18.0534L22.089 13.6621L21.9277 21.3784L29.0152 21.0559L27.0265 18.0534V18.0534Z' fill='%23E27625'/%3e%3cpath d='M22.025 13.5175C22.0527 13.5052 22.0834 13.5011 22.1133 13.5058C22.1432 13.5104 22.1712 13.5236 22.1938 13.5438L27.1313 17.935C27.1413 17.9439 27.1501 17.954 27.1575 17.965L29.1475 20.9675C29.1628 20.9908 29.1716 21.0177 29.1731 21.0455C29.1746 21.0733 29.1687 21.101 29.156 21.1258C29.1433 21.1506 29.1242 21.1715 29.1008 21.1865C29.0774 21.2016 29.0504 21.2101 29.0225 21.2113L21.935 21.5338C21.9135 21.5348 21.892 21.5314 21.8719 21.5238C21.8517 21.5162 21.8333 21.5045 21.8179 21.4895C21.8024 21.4745 21.7902 21.4565 21.782 21.4366C21.7737 21.4167 21.7697 21.3953 21.77 21.3738L21.9325 13.6588C21.9331 13.6287 21.9422 13.5995 21.9588 13.5744C21.9754 13.5494 21.9988 13.5297 22.0263 13.5175H22.025ZM22.2388 14.005L22.0888 21.2125L28.7313 20.91L26.9063 18.1563L22.24 14.0063L22.2388 14.005Z' fill='%23E27625'/%3e%3cpath d='M13.3589 31.7957L17.6501 29.7245L13.9564 26.8457L13.3589 31.7957Z' fill='%23E27625'/%3e%3cpath d='M13.8952 26.7016C13.921 26.6908 13.9492 26.6871 13.9768 26.6909C14.0045 26.6946 14.0307 26.7056 14.0527 26.7228L17.7465 29.6003C17.7677 29.6167 17.7843 29.6382 17.7949 29.6629C17.8054 29.6875 17.8095 29.7144 17.8068 29.7411C17.804 29.7678 17.7945 29.7933 17.7792 29.8152C17.7638 29.8372 17.7431 29.8549 17.719 29.8666L13.4277 31.9378C13.4023 31.9501 13.3741 31.9553 13.346 31.953C13.3178 31.9506 13.2909 31.9407 13.2679 31.9244C13.2449 31.908 13.2267 31.8858 13.2152 31.86C13.2038 31.8342 13.1995 31.8058 13.2027 31.7778L13.8002 26.8278C13.8037 26.8005 13.8144 26.7746 13.831 26.7526C13.8477 26.7307 13.8698 26.7135 13.8952 26.7028V26.7016ZM14.079 27.1428L13.5502 31.5303L17.3527 29.6928L14.079 27.1428V27.1428Z' fill='%23E27625'/%3e%3cpath d='M22.3501 29.7245L26.6288 31.7957L26.0438 26.8457L22.3501 29.7245V29.7245Z' fill='%23E27625'/%3e%3cpath d='M26.1048 26.7016C26.1305 26.7125 26.1529 26.73 26.1696 26.7524C26.1863 26.7749 26.1967 26.8013 26.1998 26.8291L26.7848 31.7791C26.7878 31.807 26.7833 31.8352 26.7717 31.8608C26.7602 31.8864 26.742 31.9084 26.719 31.9246C26.6961 31.9408 26.6692 31.9506 26.6412 31.9529C26.6132 31.9552 26.5851 31.95 26.5598 31.9378L22.2823 29.8666C22.2581 29.855 22.2373 29.8374 22.2218 29.8155C22.2063 29.7936 22.1967 29.7681 22.1938 29.7414C22.1909 29.7148 22.1949 29.6878 22.2053 29.6631C22.2158 29.6384 22.2324 29.6168 22.2535 29.6003L25.9473 26.7228C25.9693 26.7056 25.9955 26.6946 26.0232 26.6909C26.0509 26.6871 26.079 26.6908 26.1048 26.7016ZM22.6473 29.6941L26.4386 31.5291L25.9198 27.1428L22.6473 29.6928V29.6941Z' fill='%23E27625'/%3e%3cpath d='M26.6288 31.7959L22.3501 29.7246L22.6988 32.5034L22.6613 33.6821L26.6288 31.7959V31.7959Z' fill='%23D5BFB2'/%3e%3cpath d='M22.2586 29.5977C22.2815 29.5813 22.3085 29.5714 22.3367 29.5689C22.3648 29.5665 22.3931 29.5717 22.4186 29.584L26.6973 31.6552C26.724 31.6682 26.7464 31.6885 26.762 31.7136C26.7777 31.7388 26.7859 31.7679 26.7858 31.7975C26.7857 31.8271 26.7772 31.8561 26.7613 31.8812C26.7454 31.9062 26.7228 31.9262 26.6961 31.939L22.7286 33.824C22.7042 33.8355 22.6774 33.8406 22.6505 33.8389C22.6237 33.8371 22.5977 33.8284 22.5752 33.8138C22.5526 33.7991 22.5342 33.7789 22.5216 33.7551C22.5091 33.7313 22.5029 33.7046 22.5036 33.6777L22.5411 32.5115L22.1936 29.7452C22.1901 29.7171 22.1943 29.6885 22.2058 29.6625C22.2172 29.6366 22.2354 29.6142 22.2586 29.5977V29.5977ZM22.5423 29.994L22.8548 32.484C22.8554 32.4923 22.8554 32.5007 22.8548 32.509L22.8273 33.429L26.2648 31.7952L22.5423 29.994V29.994Z' fill='%23D5BFB2'/%3e%3cpath d='M13.3589 31.7959L17.3389 33.6821L17.3139 32.5034L17.6501 29.7246L13.3589 31.7959Z' fill='%23D5BFB2'/%3e%3cpath d='M17.7413 29.5982C17.7642 29.6146 17.7823 29.6368 17.7937 29.6625C17.8051 29.6882 17.8095 29.7165 17.8063 29.7445L17.4713 32.512L17.4963 33.6795C17.4967 33.7063 17.4903 33.7328 17.4777 33.7564C17.4651 33.78 17.4466 33.8001 17.4241 33.8146C17.4016 33.8291 17.3757 33.8376 17.349 33.8394C17.3222 33.8411 17.2955 33.836 17.2713 33.8245L13.2913 31.9395C13.2646 31.9266 13.242 31.9065 13.2263 31.8814C13.2105 31.8563 13.2021 31.8273 13.2021 31.7976C13.2021 31.768 13.2105 31.7389 13.2263 31.7139C13.242 31.6888 13.2646 31.6686 13.2913 31.6557L17.5813 29.5845C17.6066 29.572 17.6348 29.5666 17.663 29.5688C17.6911 29.571 17.7182 29.5808 17.7413 29.597V29.5982ZM13.7238 31.7957L17.1763 33.4307L17.1563 32.5082L17.1575 32.4857L17.4575 29.9932L13.7238 31.7957Z' fill='%23D5BFB2'/%3e%3cpath d='M17.4127 25.0127L13.8564 23.9702L16.3689 22.8164L17.4127 25.0114V25.0127Z' fill='%23233447'/%3e%3cpath d='M16.3024 22.673C16.34 22.6554 16.3831 22.6534 16.4222 22.6675C16.4613 22.6815 16.4933 22.7105 16.5111 22.748L17.5549 24.9442C17.5679 24.9716 17.5727 25.0022 17.5687 25.0323C17.5648 25.0624 17.5522 25.0907 17.5325 25.1138C17.5128 25.1369 17.4869 25.1539 17.4578 25.1626C17.4288 25.1713 17.3978 25.1714 17.3686 25.163L13.8124 24.1205C13.7817 24.1115 13.7545 24.0933 13.7343 24.0685C13.7142 24.0436 13.7021 24.0132 13.6997 23.9814C13.6972 23.9495 13.7046 23.9176 13.7207 23.89C13.7368 23.8623 13.7609 23.8403 13.7899 23.8267L16.3024 22.673V22.673ZM14.3049 23.9367L17.1199 24.7617L16.2924 23.0242L14.3049 23.9367V23.9367Z' fill='%23233447'/%3e%3cpath d='M22.5877 25.0127L23.6314 22.8164L26.1564 23.9702L22.5864 25.0114L22.5877 25.0127Z' fill='%23233447'/%3e%3cpath d='M23.4886 22.7475C23.5065 22.7103 23.5382 22.6816 23.5771 22.6676C23.6159 22.6536 23.6586 22.6553 23.6961 22.6725L26.2211 23.8262C26.2501 23.8397 26.2743 23.8617 26.2905 23.8892C26.3067 23.9168 26.3142 23.9486 26.3119 23.9804C26.3096 24.0123 26.2976 24.0427 26.2776 24.0677C26.2576 24.0926 26.2305 24.1108 26.1999 24.12L22.6311 25.1625C22.6019 25.1713 22.5708 25.1714 22.5415 25.1628C22.5122 25.1543 22.486 25.1374 22.4661 25.1142C22.4463 25.091 22.4336 25.0626 22.4296 25.0323C22.4256 25.002 22.4305 24.9713 22.4436 24.9437L23.4886 22.7475V22.7475ZM23.7074 23.0225L22.8799 24.7612L25.7049 23.9362L23.7074 23.0237V23.0225Z' fill='%23233447'/%3e%3cpath d='M13.3589 31.7955L13.9814 26.6855L10.0264 26.7968L13.3589 31.7968V31.7955Z' fill='%23CC6228'/%3e%3cpath d='M14.0977 26.5799C14.113 26.5966 14.1245 26.6164 14.1314 26.638C14.1383 26.6596 14.1405 26.6824 14.1377 26.7049L13.5152 31.8149C13.5114 31.8469 13.4979 31.8769 13.4765 31.901C13.4551 31.9251 13.4268 31.942 13.3955 31.9495C13.3641 31.957 13.3312 31.9547 13.3012 31.9429C13.2713 31.9311 13.2456 31.9104 13.2277 31.8836L9.89524 26.8849C9.8796 26.8615 9.87051 26.8343 9.86891 26.8063C9.86731 26.7782 9.87326 26.7502 9.88615 26.7252C9.89903 26.7002 9.91838 26.6791 9.94218 26.6641C9.96599 26.6491 9.99337 26.6407 10.0215 26.6399L13.9765 26.5274C13.9993 26.5269 14.0219 26.5314 14.0428 26.5404C14.0638 26.5495 14.0825 26.5629 14.0977 26.5799V26.5799ZM10.3152 26.9474L13.254 31.3549L13.8027 26.8486L10.3152 26.9474V26.9474Z' fill='%23CC6228'/%3e%3cpath d='M26.0186 26.6868L26.6286 31.7968L29.9736 26.798L26.0186 26.6855V26.6868Z' fill='%23CC6228'/%3e%3cpath d='M25.9025 26.5806C25.9178 26.5638 25.9365 26.5506 25.9575 26.5417C25.9784 26.5329 26.001 26.5287 26.0237 26.5294L29.9787 26.6419C30.0065 26.6431 30.0335 26.6516 30.057 26.6666C30.0804 26.6816 30.0995 26.7026 30.1122 26.7274C30.1249 26.7521 30.1308 26.7798 30.1293 26.8076C30.1278 26.8354 30.119 26.8623 30.1037 26.8856L26.76 31.8856C26.742 31.9125 26.7163 31.9332 26.6862 31.9449C26.6561 31.9566 26.6231 31.9588 26.5917 31.9512C26.5603 31.9435 26.5321 31.9264 26.5107 31.9022C26.4894 31.8779 26.476 31.8477 26.4725 31.8156L25.8625 26.7056C25.8597 26.6831 25.8619 26.6603 25.8688 26.6388C25.8757 26.6172 25.8872 26.5974 25.9025 26.5806V26.5806ZM26.1975 26.8494L26.735 31.3556L29.685 26.9481L26.1975 26.8481V26.8494Z' fill='%23CC6228'/%3e%3cpath d='M29.0165 21.0547L21.9277 21.3772L22.5865 25.0122L23.6315 22.8159L26.1565 23.9697L29.0165 21.0547V21.0547Z' fill='%23CC6228'/%3e%3cpath d='M29.1602 20.9904C29.1732 21.0193 29.1772 21.0515 29.1716 21.0827C29.166 21.1139 29.1512 21.1427 29.1289 21.1654L26.2689 24.0804C26.2462 24.1036 26.2167 24.1192 26.1847 24.125C26.1527 24.1308 26.1197 24.1266 26.0902 24.1129L23.7064 23.0241L22.7289 25.0791C22.7147 25.1093 22.6911 25.1342 22.6618 25.1502C22.6324 25.1661 22.5987 25.1723 22.5656 25.1679C22.5324 25.1634 22.5016 25.1485 22.4775 25.1254C22.4534 25.1022 22.4372 25.072 22.4314 25.0391L21.7727 21.4054C21.7686 21.3832 21.7692 21.3605 21.7746 21.3386C21.78 21.3167 21.7901 21.2963 21.804 21.2787C21.818 21.261 21.8356 21.2466 21.8557 21.2363C21.8757 21.226 21.8977 21.2202 21.9202 21.2191L29.0089 20.8966C29.0739 20.8941 29.1339 20.9316 29.1589 20.9904H29.1602ZM22.1152 21.5266L22.6539 24.5016L23.4889 22.7479C23.5068 22.7107 23.5386 22.682 23.5774 22.6679C23.6162 22.6539 23.6589 22.6557 23.6964 22.6729L26.1214 23.7804L28.6227 21.2304L22.1152 21.5266V21.5266Z' fill='%23CC6228'/%3e%3cpath d='M13.8564 23.9697L16.3689 22.8159L17.4126 25.0122L18.0726 21.3772L10.9839 21.0547L13.8564 23.9697V23.9697Z' fill='%23CC6228'/%3e%3cpath d='M10.84 20.9903C10.8528 20.9615 10.8739 20.9371 10.9006 20.9204C10.9274 20.9037 10.9585 20.8954 10.99 20.8966L18.0801 21.2191C18.1025 21.2201 18.1245 21.226 18.1446 21.2363C18.1646 21.2465 18.1822 21.261 18.1962 21.2786C18.2102 21.2963 18.2202 21.3167 18.2256 21.3386C18.231 21.3605 18.2317 21.3832 18.2276 21.4053L17.5688 25.0391C17.563 25.072 17.5469 25.1022 17.5228 25.1254C17.4987 25.1485 17.4678 25.1634 17.4347 25.1679C17.4015 25.1723 17.3679 25.1661 17.3385 25.1502C17.3091 25.1342 17.2856 25.1093 17.2713 25.0791L16.2926 23.0241L13.9225 24.1116C13.8932 24.1255 13.8602 24.1299 13.8282 24.1243C13.7962 24.1187 13.7667 24.1034 13.7438 24.0803L10.8713 21.1653C10.8491 21.1427 10.8342 21.1139 10.8286 21.0827C10.823 21.0515 10.827 21.0193 10.84 20.9903V20.9903ZM11.3775 21.2303L13.8901 23.7803L16.3026 22.6728C16.3402 22.6553 16.3833 22.6533 16.4224 22.6674C16.4615 22.6814 16.4934 22.7103 16.5113 22.7478L17.3451 24.5028L17.885 21.5266L11.3775 21.2303Z' fill='%23CC6228'/%3e%3cpath d='M10.9839 21.0547L13.9564 26.8472L13.8564 23.9697L10.9839 21.0547Z' fill='%23E27525'/%3e%3cpath d='M10.8913 20.9258C10.9538 20.8808 11.0413 20.8883 11.0963 20.9433L13.9688 23.8583C13.9964 23.8865 14.0125 23.9239 14.0138 23.9633L14.1138 26.8408C14.1151 26.8766 14.1041 26.9117 14.0827 26.9405C14.0613 26.9692 14.0308 26.9897 13.9961 26.9988C13.9615 27.0078 13.9248 27.0047 13.8921 26.9901C13.8594 26.9755 13.8327 26.9502 13.8163 26.9183L10.8438 21.1258C10.8265 21.0923 10.8217 21.0537 10.8304 21.017C10.8392 20.9803 10.8608 20.9479 10.8913 20.9258V20.9258ZM11.5938 21.8971L13.7738 26.1471L13.7013 24.0346L11.5938 21.8971V21.8971Z' fill='%23E27525'/%3e%3cpath d='M26.1564 23.9697L26.0439 26.8472L29.0164 21.0547L26.1564 23.9697Z' fill='%23E27525'/%3e%3cpath d='M29.1088 20.9264C29.1713 20.9727 29.1926 21.0564 29.1563 21.1264L26.1838 26.9189C26.1675 26.9508 26.1407 26.9761 26.1081 26.9907C26.0754 27.0053 26.0387 27.0084 26.004 26.9994C25.9694 26.9903 25.9388 26.9698 25.9174 26.941C25.896 26.9123 25.8851 26.8772 25.8863 26.8414L25.9988 23.9627C26.0005 23.9237 26.0165 23.8867 26.0438 23.8589L28.9038 20.9439C28.9302 20.9169 28.9654 20.9003 29.0031 20.8971C29.0407 20.8938 29.0782 20.9043 29.1088 20.9264V20.9264ZM26.3113 24.0364L26.2288 26.1414L28.4038 21.9039L26.3113 24.0364Z' fill='%23E27525'/%3e%3cpath d='M18.0723 21.377L17.4136 25.012L18.2461 29.3032L18.4336 23.647L18.0723 21.377V21.377Z' fill='%23E27525'/%3e%3cpath d='M18.0749 21.2188C18.1511 21.22 18.2161 21.2763 18.2286 21.3525L18.5886 23.6225C18.5905 23.6324 18.5913 23.6425 18.5911 23.6525L18.4036 29.3088C18.4029 29.3479 18.3877 29.3853 18.3609 29.4138C18.3342 29.4423 18.2977 29.4598 18.2587 29.463C18.2197 29.4661 18.181 29.4546 18.15 29.4307C18.119 29.4068 18.0981 29.3723 18.0911 29.3338L17.2586 25.0413C17.2549 25.0219 17.2549 25.0019 17.2586 24.9825L17.9174 21.3488C17.9239 21.3119 17.9434 21.2786 17.9722 21.2548C18.0011 21.231 18.0375 21.2182 18.0749 21.2188V21.2188ZM17.5736 25.01L18.1361 27.9025L18.2749 23.6563L18.0624 22.3163L17.5736 25.01V25.01Z' fill='%23E27525'/%3e%3cpath d='M21.9274 21.377L21.5786 23.6345L21.7536 29.3032L22.5861 25.012L21.9274 21.377Z' fill='%23E27525'/%3e%3cpath d='M21.9251 21.2188C22.0026 21.2188 22.0689 21.2725 22.0826 21.3488L22.7414 24.9825C22.7451 25.0019 22.7451 25.0218 22.7414 25.0412L21.9089 29.3325C21.902 29.371 21.881 29.4055 21.85 29.4294C21.819 29.4533 21.7803 29.4648 21.7413 29.4617C21.7023 29.4586 21.6659 29.441 21.6391 29.4125C21.6123 29.384 21.5971 29.3466 21.5964 29.3075L21.4214 23.6387C21.4214 23.63 21.4214 23.62 21.4239 23.61L21.7726 21.3525C21.7783 21.3156 21.7968 21.2819 21.825 21.2574C21.8531 21.2329 21.8891 21.2192 21.9264 21.2188H21.9251ZM21.9401 22.3287L21.7376 23.6437L21.8676 27.8887L22.4264 25.01L21.9401 22.3287Z' fill='%23E27525'/%3e%3cpath d='M22.5877 25.0125L21.7539 29.3038L22.3502 29.725L26.0439 26.8475L26.1564 23.9688L22.5864 25.0113L22.5877 25.0125Z' fill='%23F5841F'/%3e%3cpath d='M26.2527 23.8451C26.2927 23.8763 26.3152 23.9251 26.314 23.9751L26.2015 26.8538C26.2006 26.8766 26.1947 26.8989 26.1844 26.9191C26.174 26.9394 26.1594 26.9572 26.1415 26.9713L22.4477 29.8488C22.4211 29.8696 22.3886 29.8814 22.3548 29.8823C22.321 29.8832 22.2879 29.8732 22.2602 29.8538L21.6627 29.4326C21.6382 29.4149 21.6192 29.3905 21.6081 29.3624C21.597 29.3342 21.5943 29.3035 21.6002 29.2738L22.4327 24.9813C22.4382 24.953 22.4513 24.9266 22.4707 24.9053C22.4901 24.8839 22.515 24.8682 22.5427 24.8601L26.1127 23.8188C26.1365 23.8119 26.1615 23.8106 26.1859 23.8152C26.2102 23.8198 26.2331 23.83 26.2527 23.8451V23.8451ZM22.7252 25.1376L21.929 29.2351L22.3477 29.5301L25.8915 26.7688L25.9915 24.1838L22.724 25.1376H22.7252Z' fill='%23F5841F'/%3e%3cpath d='M13.8564 23.9688L13.9564 26.8475L17.6502 29.725L18.2464 29.3038L17.4139 25.0113L13.8564 23.9688Z' fill='%23F5841F'/%3e%3cpath d='M13.7601 23.8453C13.7798 23.8301 13.803 23.8197 13.8275 23.8152C13.8521 23.8106 13.8774 23.8119 13.9013 23.8191L17.4576 24.8603C17.5138 24.8766 17.5576 24.9228 17.5676 24.9816L18.4013 29.2741C18.4071 29.3039 18.4042 29.3347 18.3929 29.3629C18.3816 29.391 18.3624 29.4153 18.3376 29.4328L17.7401 29.8541C17.7125 29.8736 17.6795 29.8838 17.6457 29.8831C17.6119 29.8825 17.5793 29.871 17.5526 29.8503L13.8588 26.9716C13.8408 26.9574 13.826 26.9394 13.8157 26.9188C13.8053 26.8983 13.7995 26.8758 13.7988 26.8528L13.6988 23.9753C13.698 23.9503 13.7031 23.9255 13.7138 23.9029C13.7244 23.8803 13.7403 23.8606 13.7601 23.8453V23.8453ZM14.0226 24.1828L14.1101 26.7691L17.6538 29.5291L18.0726 29.2341L17.2776 25.1353L14.0213 24.1828H14.0226Z' fill='%23F5841F'/%3e%3cpath d='M22.6626 33.6819L22.6989 32.5044L22.3751 32.2306H17.6251L17.3139 32.5044L17.3389 33.6819L13.3589 31.7969L14.7526 32.9381L17.5751 34.8856H22.4126L25.2476 32.9381L26.6289 31.7969L22.6614 33.6819H22.6626Z' fill='%23C0AC9D'/%3e%3cpath d='M13.2252 31.7127C13.2457 31.6799 13.2775 31.6558 13.3146 31.645C13.3517 31.6341 13.3915 31.6373 13.4264 31.654L17.1764 33.4302L17.1564 32.5065C17.1564 32.4602 17.1752 32.4165 17.2102 32.3852L17.5214 32.1127C17.55 32.0872 17.5869 32.073 17.6252 32.0727H22.3752C22.4127 32.0727 22.4489 32.0852 22.4777 32.1102L22.8002 32.3827C22.8377 32.414 22.8577 32.4602 22.8564 32.5077L22.8277 33.429L26.5614 31.654C26.5961 31.6377 26.6355 31.6346 26.6723 31.6453C26.7091 31.6561 26.7407 31.6798 26.7612 31.7121C26.7817 31.7445 26.7898 31.7832 26.7838 31.821C26.7779 31.8589 26.7584 31.8932 26.7289 31.9177L25.3377 33.0677L22.5027 35.0152C22.4762 35.0333 22.4448 35.0429 22.4127 35.0427H17.5752C17.5431 35.043 17.5116 35.0334 17.4852 35.0152L14.6514 33.0602L13.2589 31.919C13.2293 31.8945 13.2096 31.86 13.2036 31.822C13.1976 31.784 13.2057 31.7451 13.2264 31.7127H13.2252ZM14.4527 32.489L14.8464 32.8115L17.6239 34.7277H22.3639L25.1539 32.8115L25.5502 32.4827L22.7289 33.824C22.7046 33.8355 22.6777 33.8406 22.6509 33.8388C22.624 33.837 22.5981 33.8284 22.5755 33.8137C22.553 33.7991 22.5345 33.7789 22.522 33.755C22.5095 33.7312 22.5032 33.7046 22.5039 33.6777L22.5389 32.5752L22.3177 32.3877H17.6839L17.4727 32.574L17.4964 33.679C17.4969 33.7058 17.4905 33.7322 17.4779 33.7559C17.4652 33.7795 17.4468 33.7995 17.4243 33.8141C17.4017 33.8286 17.3759 33.8371 17.3491 33.8388C17.3224 33.8406 17.2956 33.8354 17.2714 33.824L14.4527 32.489V32.489Z' fill='%23C0AC9D'/%3e%3cpath d='M22.3502 29.7252L21.754 29.3027H18.2465L17.6502 29.7252L17.314 32.504L17.6252 32.2302H22.3752L22.699 32.504L22.3502 29.7252Z' fill='%23161616'/%3e%3cpath d='M18.1549 29.1745C18.1814 29.1553 18.2133 29.1448 18.2461 29.1445H21.7536C21.7861 29.1445 21.8174 29.1558 21.8449 29.1745L22.4411 29.5958C22.4774 29.6208 22.5011 29.6608 22.5061 29.7045L22.8549 32.4833C22.8588 32.5147 22.8531 32.5465 22.8386 32.5746C22.8242 32.6027 22.8016 32.6259 22.7738 32.641C22.746 32.6561 22.7143 32.6625 22.6829 32.6593C22.6514 32.6561 22.6216 32.6436 22.5974 32.6233L22.3174 32.387H17.6836L17.4174 32.6208C17.3934 32.6417 17.3636 32.6549 17.332 32.6586C17.3003 32.6623 17.2683 32.6563 17.2401 32.6414C17.212 32.6265 17.189 32.6034 17.1742 32.5752C17.1594 32.547 17.1536 32.5149 17.1574 32.4833L17.4924 29.7058C17.4951 29.6838 17.5024 29.6627 17.5138 29.6437C17.5252 29.6248 17.5405 29.6084 17.5586 29.5958L18.1549 29.1745V29.1745ZM18.2961 29.4595L17.7974 29.812L17.5199 32.112C17.5488 32.0862 17.5862 32.072 17.6249 32.072H22.3749C22.4124 32.072 22.4486 32.0845 22.4774 32.1095L22.4924 32.122L22.2024 29.8133L21.7024 29.4595H18.2961V29.4595Z' fill='%23161616'/%3e%3cpath d='M35.0348 15.0252L36.0923 9.89023L34.5011 5.11523L22.3511 14.1077L27.0261 18.0527L33.6298 19.9752L35.0848 18.2752L34.4511 17.8165L35.4586 16.899L34.6873 16.304L35.6948 15.5352L35.0348 15.0265V15.0252Z' fill='%23763E1A'/%3e%3cpath d='M34.5486 4.96548C34.5722 4.97303 34.5936 4.98602 34.6112 5.00339C34.6288 5.02077 34.6421 5.04204 34.6499 5.06548L36.2424 9.84048C36.2509 9.86717 36.2522 9.89563 36.2461 9.92298L35.2086 14.9605L35.7911 15.4105C35.8103 15.4252 35.8259 15.4441 35.8366 15.4658C35.8473 15.4875 35.8528 15.5113 35.8528 15.5355C35.8528 15.5597 35.8473 15.5835 35.8366 15.6052C35.8259 15.6269 35.8103 15.6458 35.7911 15.6605L34.9461 16.3042L35.5549 16.7742C35.5731 16.7883 35.5881 16.8061 35.5987 16.8266C35.6093 16.847 35.6152 16.8695 35.6162 16.8925C35.6172 16.9155 35.6131 16.9385 35.6042 16.9597C35.5953 16.9809 35.5819 17 35.5649 17.0155L34.6999 17.803L35.1774 18.148C35.1952 18.1607 35.2102 18.1771 35.2214 18.1959C35.2325 18.2148 35.2396 18.2358 35.2422 18.2575C35.2448 18.2793 35.2428 18.3014 35.2364 18.3223C35.23 18.3433 35.2192 18.3627 35.2049 18.3792L33.7499 20.0792C33.73 20.102 33.704 20.1186 33.675 20.1271C33.646 20.1355 33.6151 20.1354 33.5861 20.1267L26.9824 18.2042C26.9613 18.1979 26.9417 18.1873 26.9249 18.173L22.2499 14.2292C22.2315 14.214 22.2169 14.1949 22.207 14.1732C22.1971 14.1515 22.1923 14.1278 22.1929 14.104C22.1935 14.0801 22.1995 14.0568 22.2105 14.0356C22.2214 14.0144 22.237 13.996 22.2561 13.9817L34.4061 4.98923C34.4262 4.97398 34.4496 4.96375 34.4744 4.9594C34.4992 4.95505 34.5246 4.95671 34.5486 4.96423V4.96548ZM22.6049 14.1155L27.1024 17.9105L33.5774 19.7955L34.8549 18.303L34.3586 17.9442C34.3397 17.9305 34.3241 17.9127 34.3129 17.8922C34.3017 17.8717 34.2952 17.849 34.2939 17.8256C34.2926 17.8023 34.2965 17.779 34.3053 17.7573C34.3141 17.7357 34.3276 17.7163 34.3449 17.7005L35.2136 16.9092L34.5911 16.4292C34.572 16.4145 34.5564 16.3956 34.5457 16.3739C34.535 16.3523 34.5295 16.3284 34.5295 16.3042C34.5295 16.2801 34.535 16.2562 34.5457 16.2345C34.5564 16.2129 34.572 16.1939 34.5911 16.1792L35.4361 15.5342L34.9386 15.1505C34.9154 15.1324 34.8977 15.1082 34.8876 15.0806C34.8774 15.053 34.8752 15.023 34.8811 14.9942L35.9299 9.90048L34.4199 5.37048L22.6036 14.1167L22.6049 14.1155Z' fill='%23763E1A'/%3e%3cpath d='M3.90869 9.89219L4.97744 15.0272L4.29369 15.5359L5.31369 16.3047L4.54244 16.9009L5.54994 17.8184L4.91494 18.2772L6.36994 19.9772L12.9737 18.0547L17.6499 14.1097L5.49994 5.11719L3.90869 9.89219V9.89219Z' fill='%23763E1A'/%3e%3cpath d='M5.45232 4.96405C5.47589 4.95677 5.50083 4.95512 5.52515 4.95925C5.54947 4.96338 5.57247 4.97315 5.59232 4.9878L17.7423 13.9803C17.7616 13.9944 17.7774 14.0126 17.7886 14.0337C17.7997 14.0548 17.806 14.0781 17.8068 14.1019C17.8077 14.1258 17.8031 14.1495 17.7934 14.1713C17.7838 14.1931 17.7693 14.2124 17.7511 14.2278L13.0761 18.1716C13.0589 18.186 13.0389 18.1967 13.0173 18.2028L6.41357 20.1241C6.38466 20.1323 6.35399 20.1321 6.32519 20.1234C6.2964 20.1148 6.27068 20.0981 6.25107 20.0753L4.79482 18.3753C4.78068 18.3588 4.77012 18.3395 4.76381 18.3186C4.7575 18.2978 4.75558 18.2759 4.75816 18.2543C4.76075 18.2327 4.76778 18.2118 4.77882 18.1931C4.78987 18.1743 4.80468 18.158 4.82232 18.1453L5.29982 17.8003L4.43607 17.0128C4.41898 16.9974 4.40548 16.9784 4.39651 16.9572C4.38754 16.936 4.38332 16.9131 4.38416 16.8901C4.38499 16.8671 4.39086 16.8446 4.40134 16.8241C4.41182 16.8036 4.42666 16.7857 4.44482 16.7716L5.05357 16.3028L4.19857 15.6578C4.17891 15.6431 4.16295 15.6241 4.15196 15.6022C4.14096 15.5803 4.13524 15.5561 4.13524 15.5316C4.13524 15.507 4.14096 15.4828 4.15196 15.4609C4.16295 15.439 4.17891 15.42 4.19857 15.4053L4.80232 14.9566L3.75232 9.9203C3.74661 9.89285 3.74834 9.86436 3.75732 9.8378L5.34982 5.0628C5.35779 5.03922 5.37123 5.01786 5.38905 5.00048C5.40686 4.98309 5.42855 4.97018 5.45232 4.9628V4.96405ZM5.57982 5.36905L4.06982 9.89905L5.13107 14.9928C5.13727 15.0222 5.13491 15.0528 5.12428 15.081C5.11365 15.1091 5.09518 15.1336 5.07107 15.1516L4.55607 15.5341L5.40732 16.1766C5.42658 16.1912 5.44221 16.21 5.45302 16.2316C5.46382 16.2533 5.46951 16.2771 5.46963 16.3012C5.46975 16.3254 5.4643 16.3493 5.45372 16.371C5.44313 16.3928 5.42768 16.4118 5.40857 16.4266L4.78607 16.9078L5.65482 17.6991C5.67214 17.7147 5.68576 17.7341 5.69469 17.7557C5.70361 17.7773 5.70762 17.8006 5.70643 17.8239C5.70523 17.8472 5.69886 17.87 5.68777 17.8906C5.67668 17.9111 5.66116 17.929 5.64232 17.9428L5.14607 18.3016L6.42357 19.7941L12.8973 17.9091L17.3948 14.1153L5.57982 5.36905V5.36905Z' fill='%23763E1A'/%3e%3cpath d='M33.6302 19.9752L27.0264 18.0527L29.0164 21.054L26.0439 26.8477L29.9739 26.7977H35.8439L33.6314 19.9752H33.6302Z' fill='%23F5841F'/%3e%3cpath d='M26.9002 17.9582C26.9193 17.9324 26.9458 17.9131 26.9762 17.9028C27.0066 17.8926 27.0394 17.8918 27.0702 17.9007L33.6739 19.8232C33.7239 19.8382 33.7639 19.8757 33.7802 19.9257L35.9927 26.7482C36.0003 26.7717 36.0023 26.7968 35.9985 26.8212C35.9947 26.8457 35.9851 26.869 35.9706 26.889C35.9561 26.9091 35.9371 26.9255 35.9151 26.9369C35.8931 26.9482 35.8687 26.9543 35.8439 26.9544H29.9752L26.0464 27.0044C26.0192 27.0049 25.9922 26.9983 25.9683 26.9852C25.9443 26.9721 25.9242 26.9531 25.9098 26.9299C25.8955 26.9067 25.8874 26.8802 25.8863 26.8529C25.8853 26.8257 25.8914 26.7986 25.9039 26.7744L28.8339 21.0632L26.8964 18.1382C26.8786 18.1114 26.8694 18.0798 26.87 18.0476C26.8707 18.0154 26.8812 17.9842 26.9002 17.9582V17.9582ZM27.3952 18.3232L29.1477 20.9669C29.1631 20.9902 29.172 21.0172 29.1735 21.0451C29.1751 21.073 29.1692 21.1008 29.1564 21.1257L26.3039 26.6857L29.9739 26.6394H35.6277L33.5064 20.1019L27.3952 18.3232V18.3232Z' fill='%23F5841F'/%3e%3cpath d='M12.9739 18.0527L6.3702 19.9752L4.16895 26.7977H10.0252L13.9552 26.8477L10.9827 21.054L12.9727 18.0527H12.9739Z' fill='%23F5841F'/%3e%3cpath d='M13.1002 17.9582C13.1402 18.0119 13.1415 18.0832 13.1052 18.1394L11.1665 21.0644L14.0965 26.7744C14.109 26.7986 14.1151 26.8257 14.114 26.8529C14.113 26.8802 14.1049 26.9067 14.0905 26.9299C14.0762 26.9531 14.056 26.9721 14.0321 26.9852C14.0082 26.9983 13.9812 27.0049 13.954 27.0044L10.0252 26.9544H4.16897C4.14408 26.9544 4.11955 26.9486 4.09737 26.9373C4.07518 26.926 4.05599 26.9097 4.04135 26.8895C4.02672 26.8694 4.01706 26.8461 4.01317 26.8215C4.00928 26.797 4.01126 26.7718 4.01897 26.7482L6.21896 19.9257C6.22707 19.9011 6.24112 19.8788 6.25987 19.8609C6.27862 19.8431 6.3015 19.8301 6.32646 19.8232L12.9302 17.9007C12.961 17.8918 12.9938 17.8926 13.0242 17.9028C13.0546 17.9131 13.0811 17.9324 13.1002 17.9582V17.9582ZM6.49396 20.1019L4.38522 26.6394H10.0277L13.6965 26.6857L10.844 21.1257C10.8312 21.1008 10.8253 21.073 10.8268 21.0451C10.8284 21.0172 10.8373 20.9902 10.8527 20.9669L12.6052 18.3232L6.49396 20.1019V20.1019Z' fill='%23F5841F'/%3e%3cpath d='M21.9276 21.3768L22.3501 14.108L24.2651 8.93555H15.7339L17.6501 14.108L18.0726 21.3768L18.2351 23.6593L18.2476 29.3031H21.7539L21.7664 23.6593L21.9276 21.3768V21.3768Z' fill='%23F5841F'/%3e%3cpath d='M15.6052 8.84485C15.6196 8.82408 15.6389 8.8071 15.6613 8.79536C15.6837 8.78361 15.7086 8.77743 15.7339 8.77735H24.2652C24.2907 8.77716 24.3159 8.78317 24.3386 8.79488C24.3612 8.80658 24.3807 8.82362 24.3954 8.84452C24.41 8.86543 24.4193 8.88958 24.4226 8.9149C24.4258 8.94021 24.4228 8.96593 24.4139 8.98985L22.5064 14.1399L22.0852 21.3874L21.9227 23.6649L21.9102 29.3024C21.9102 29.3899 21.8402 29.4611 21.7539 29.4611H18.2464C18.2047 29.4611 18.1646 29.4445 18.1351 29.415C18.1055 29.3854 18.0889 29.3454 18.0889 29.3036L18.0764 23.6649L17.9152 21.3874V21.3861L17.4939 14.1399L15.5864 8.98985C15.5776 8.96596 15.5747 8.94029 15.578 8.91504C15.5812 8.88979 15.5906 8.8657 15.6052 8.84485V8.84485ZM15.9602 9.09235L17.7977 14.0523C17.8029 14.0672 17.8058 14.0828 17.8064 14.0986L18.2302 21.3661V21.3674L18.3927 23.6586L18.4039 29.1461H21.5964L21.6089 23.6474L21.7714 21.3674V21.3649L22.1927 14.0986C22.1939 14.0836 22.1977 14.0673 22.2027 14.0523L24.0402 9.09235H15.9614H15.9602Z' fill='%23F5841F'/%3e%3c/svg%3e";

let instance;
const switchWalletNotice = (type) => {
    if (isInSameOriginIframe()) {
        return;
    }
    const titles = {
        lux: "Lux",
        metamask: "MetaMask",
    };
    if (instance) {
        instance.hide();
        instance = null;
    }
    instance = notice({
        closeable: true,
        timeout: 0,
        className: "lux-notice-default-wallet",
        content: `<div style="display: flex; align-items: center; gap: 12px; color: #192945;">
      <img style="width: 28px;" src="${type === "lux" ? img$2 : img}"/>
      <div style="color: #192945;">
        <div style="color: #192945;"><span style="font-weight: bold; color: #192945;">${titles[type]}</span> is your default wallet now. </div>
        <div style="color: #192945;">
        Please <a
          href="javascript:window.location.reload();"
          style="color: #7084FF; text-decoration: underline;">refresh the web page</a> 
        and retry
        </div>
      </div>
    </div>
    `,
    });
};

// keep isMetaMask and remove isLux
const impersonateMetamaskWhitelist = [
    // layerzero
    "bitcoinbridge.network",
    "bridge.liquidswap.com",
    "theaptosbridge.com",
    "app.actafi.org",
    "bridge.linea.build",
    "bridge.coredao.org",
    // rainbow
    "telx.network",
    "portfolio.metamask.io",
];
// keep isLux and remove isMetaMask
const luxHostList = [];
/**
 * Detect current host is includes target host
 * @param current
 * @param target
 * @returns
 */
const isIncludesHost = (current, target) => {
    return current === target || current.endsWith(`.${target}`);
};
const isInHostList = (list, host) => {
    return list.some((target) => isIncludesHost(host, target));
};
const getProviderMode = (host) => {
    if (isInHostList(impersonateMetamaskWhitelist, host)) {
        return "metamask";
    }
    if (isInHostList(luxHostList, host)) {
        return "lux";
    }
    return "default";
};
const patchProvider = (provider) => {
    const mode = getProviderMode(window.location.hostname);
    try {
        if (mode === "metamask") {
            delete provider.isLux;
            provider.isMetaMask = true;
            return;
        }
        if (mode === "lux") {
            delete provider.isMetaMask;
            provider.isLux = true;
            return;
        }
        if (mode === "default") {
            provider.isMetaMask = true;
            provider.isLux = true;
            return;
        }
    }
    catch (e) {
        console.error(e);
    }
};

// this script is injected into webpage's context
const log = (event, ...args) => {
    if (true) {
        console.log(`%c [lux] (${new Date().toTimeString().substr(0, 8)}) ${event}`, "font-weight: bold; background-color: #7d6ef9; color: white;", ...args);
    }
};
let channelName = typeof __lux__channelName !== "undefined" ? __lux__channelName : "";
typeof __lux__isDefaultWallet !== "undefined"
    ? __lux__isDefaultWallet
    : false;
let isOpera = typeof __lux__isOpera !== "undefined" ? __lux__isOpera : false;
let uuid = typeof __lux__uuid !== "undefined" ? __lux__uuid : "";
const getParams = () => {
    if (localStorage.getItem("lux:channelName")) {
        channelName = localStorage.getItem("lux:channelName");
        localStorage.removeItem("lux:channelName");
    }
    if (localStorage.getItem("lux:isDefaultWallet")) {
        localStorage.getItem("lux:isDefaultWallet") === "true";
        localStorage.removeItem("lux:isDefaultWallet");
    }
    if (localStorage.getItem("lux:uuid")) {
        uuid = localStorage.getItem("lux:uuid");
        localStorage.removeItem("lux:uuid");
    }
    if (localStorage.getItem("lux:isOpera")) {
        isOpera = localStorage.getItem("lux:isOpera") === "true";
        localStorage.removeItem("lux:isOpera");
    }
};
getParams();
class EthereumProvider extends events.EventEmitter {
    constructor({ maxListeners = 100 } = {}) {
        super();
        this.chainId = null;
        this.selectedAddress = null;
        /**
         * The network ID of the currently connected Ethereum chain.
         * @deprecated
         */
        this.networkVersion = null;
        this.isLux = true;
        this.isMetaMask = true;
        this._isLux = true;
        this._isReady = false;
        this._isConnected = false;
        this._initialized = false;
        this._isUnlocked = false;
        this._cacheRequestsBeforeReady = [];
        this._cacheEventListenersBeforeReady = [];
        this._state = {
            accounts: null,
            isConnected: false,
            isUnlocked: false,
            initialized: false,
            isPermanentlyDisconnected: false,
        };
        this._metamask = {
            isUnlocked: () => {
                return new Promise((resolve) => {
                    resolve(this._isUnlocked);
                });
            },
        };
        this._requestPromise = new ReadyPromise(2);
        this._dedupePromise = new DedupePromise([]);
        this._bcm = new BroadcastChannelMessage(channelName);
        this.initialize = async () => {
            document.addEventListener("visibilitychange", this._requestPromiseCheckVisibility);
            this._bcm.connect().on("message", this._handleBackgroundMessage);
            domReadyCall(() => {
                var _a, _b, _c;
                const origin = location.origin;
                const icon = ((_a = $('head > link[rel~="icon"]')) === null || _a === void 0 ? void 0 : _a.href) ||
                    ((_b = $('head > meta[itemprop="image"]')) === null || _b === void 0 ? void 0 : _b.content);
                const name = document.title ||
                    ((_c = $('head > meta[name="title"]')) === null || _c === void 0 ? void 0 : _c.content) ||
                    origin;
                this._bcm.request({
                    method: "tabCheckin",
                    params: { icon, name, origin },
                });
                this._requestPromise.check(2);
            });
            try {
                const { chainId, accounts, networkVersion, isUnlocked } = await this.requestInternalMethods({
                    method: "getProviderState",
                });
                if (isUnlocked) {
                    this._isUnlocked = true;
                    this._state.isUnlocked = true;
                }
                this.chainId = chainId;
                this.networkVersion = networkVersion;
                this.emit("connect", { chainId });
                this._pushEventHandlers.chainChanged({
                    chain: chainId,
                    networkVersion,
                });
                this._pushEventHandlers.accountsChanged(accounts);
            }
            catch {
                //
            }
            finally {
                this._initialized = true;
                this._state.initialized = true;
                this.emit("_initialized");
            }
        };
        this._requestPromiseCheckVisibility = () => {
            if (document.visibilityState === "visible") {
                this._requestPromise.check(1);
            }
            else {
                this._requestPromise.uncheck(1);
            }
        };
        this._handleBackgroundMessage = ({ event, data }) => {
            log("[push event]", event, data);
            if (this._pushEventHandlers[event]) {
                return this._pushEventHandlers[event](data);
            }
            this.emit(event, data);
        };
        this.isConnected = () => {
            return true;
        };
        // TODO: support multi request!
        this.request = async (data) => {
            if (!this._isReady) {
                const promise = new Promise((resolve, reject) => {
                    this._cacheRequestsBeforeReady.push({
                        data,
                        resolve,
                        reject,
                    });
                });
                return promise;
            }
            return this._dedupePromise.call(data.method, () => this._request(data));
        };
        this._request = async (data) => {
            if (!data) {
                throw ethRpcErrors.ethErrors.rpc.invalidRequest();
            }
            this._requestPromiseCheckVisibility();
            return this._requestPromise.call(() => {
                if (data.method !== "eth_call") {
                    log("[request]", JSON.stringify(data, null, 2));
                }
                return this._bcm
                    .request(data)
                    .then((res) => {
                    if (data.method !== "eth_call") {
                        log("[request: success]", data.method, res);
                    }
                    return res;
                })
                    .catch((err) => {
                    if (data.method !== "eth_call") {
                        log("[request: error]", data.method, ethRpcErrors.serializeError(err));
                    }
                    throw ethRpcErrors.serializeError(err);
                });
            });
        };
        this.requestInternalMethods = (data) => {
            return this._dedupePromise.call(data.method, () => this._request(data));
        };
        // shim to matamask legacy api
        this.sendAsync = (payload, callback) => {
            if (Array.isArray(payload)) {
                return Promise.all(payload.map((item) => new Promise((resolve) => {
                    this.sendAsync(item, (err, res) => {
                        // ignore error
                        resolve(res);
                    });
                }))).then((result) => callback(null, result));
            }
            const { method, params, ...rest } = payload;
            this.request({ method, params })
                .then((result) => callback(null, { ...rest, method, result }))
                .catch((error) => callback(error, { ...rest, method, error }));
        };
        this.send = (payload, callback) => {
            if (typeof payload === "string" && (!callback || Array.isArray(callback))) {
                // send(method, params? = [])
                return this.request({
                    method: payload,
                    params: callback,
                }).then((result) => ({
                    id: undefined,
                    jsonrpc: "2.0",
                    result,
                }));
            }
            if (typeof payload === "object" && typeof callback === "function") {
                return this.sendAsync(payload, callback);
            }
            let result;
            switch (payload.method) {
                case "eth_accounts":
                    result = this.selectedAddress ? [this.selectedAddress] : [];
                    break;
                case "eth_coinbase":
                    result = this.selectedAddress || null;
                    break;
                default:
                    throw new Error("sync method doesnt support");
            }
            return {
                id: payload.id,
                jsonrpc: payload.jsonrpc,
                result,
            };
        };
        this.shimLegacy = () => {
            const legacyMethods = [
                ["enable", "eth_requestAccounts"],
                ["net_version", "net_version"],
            ];
            for (const [_method, method] of legacyMethods) {
                this[_method] = () => this.request({ method });
            }
        };
        this.on = (event, handler) => {
            if (!this._isReady) {
                this._cacheEventListenersBeforeReady.push([event, handler]);
                return this;
            }
            return super.on(event, handler);
        };
        this.setMaxListeners(maxListeners);
        this.initialize();
        this.shimLegacy();
        this._pushEventHandlers = new PushEventHandlers(this);
    }
}
const provider = new EthereumProvider();
patchProvider(provider);
const luxProvider = new Proxy(provider, {
    deleteProperty: (target, prop) => {
        if (typeof prop === "string" &&
            ["on", "isLux", "isMetaMask", "_isLux"].includes(prop)) {
            // @ts-ignore
            delete target[prop];
        }
        return true;
    },
});
const requestHasOtherProvider = () => {
    return provider.requestInternalMethods({
        method: "hasOtherProvider",
        params: [],
    });
};
const requestIsDefaultWallet = () => {
    return provider.requestInternalMethods({
        method: "isDefaultWallet",
        params: [],
    });
};
const initOperaProvider = () => {
    window.ethereum = luxProvider;
    luxProvider._isReady = true;
    window.lux = luxProvider;
    patchProvider(luxProvider);
    luxProvider.on("lux:chainChanged", switchChainNotice);
};
const initProvider = () => {
    luxProvider._isReady = true;
    luxProvider.on("defaultWalletChanged", switchWalletNotice);
    patchProvider(luxProvider);
    if (window.ethereum) {
        requestHasOtherProvider();
    }
    if (!window.web3) {
        window.web3 = {
            currentProvider: luxProvider,
        };
    }
    const descriptor = Object.getOwnPropertyDescriptor(window, "ethereum");
    const canDefine = !descriptor || descriptor.configurable;
    if (canDefine) {
        try {
            Object.defineProperties(window, {
                lux: {
                    value: luxProvider,
                    configurable: false,
                    writable: false,
                },
                ethereum: {
                    get() {
                        return window.luxWalletRouter.currentProvider;
                    },
                    set(newProvider) {
                        window.luxWalletRouter.addProvider(newProvider);
                    },
                    configurable: false,
                },
                luxWalletRouter: {
                    value: {
                        luxProvider,
                        lastInjectedProvider: window.ethereum,
                        currentProvider: luxProvider,
                        providers: [
                            luxProvider,
                            ...(window.ethereum ? [window.ethereum] : []),
                        ],
                        setDefaultProvider(luxAsDefault) {
                            var _a;
                            if (luxAsDefault) {
                                window.luxWalletRouter.currentProvider = window.lux;
                            }
                            else {
                                const nonDefaultProvider = (_a = window.luxWalletRouter.lastInjectedProvider) !== null && _a !== void 0 ? _a : window.ethereum;
                                window.luxWalletRouter.currentProvider = nonDefaultProvider;
                            }
                            if (luxAsDefault ||
                                !window.luxWalletRouter.lastInjectedProvider) {
                                luxProvider.on("lux:chainChanged", switchChainNotice);
                            }
                        },
                        addProvider(provider) {
                            if (!window.luxWalletRouter.providers.includes(provider)) {
                                window.luxWalletRouter.providers.push(provider);
                            }
                            if (luxProvider !== provider) {
                                requestHasOtherProvider();
                                window.luxWalletRouter.lastInjectedProvider = provider;
                            }
                        },
                    },
                    configurable: false,
                    writable: false,
                },
            });
        }
        catch (e) {
            // think that defineProperty failed means there is any other wallet
            requestHasOtherProvider();
            console.error(e);
            window.ethereum = luxProvider;
            window.lux = luxProvider;
        }
    }
    else {
        window.ethereum = luxProvider;
        window.lux = luxProvider;
    }
};
if (isOpera) {
    initOperaProvider();
}
else {
    initProvider();
}
requestIsDefaultWallet().then((luxAsDefault) => {
    var _a;
    (_a = window.luxWalletRouter) === null || _a === void 0 ? void 0 : _a.setDefaultProvider(luxAsDefault);
});
const announceEip6963Provider = (provider) => {
    const info = {
        uuid: uuid,
        name: "Lux Wallet",
        icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzc0MV8yNzUxKSI+CjxtYXNrIGlkPSJtYXNrMF83NDFfMjc1MSIgc3R5bGU9Im1hc2stdHlwZTpsdW1pbmFuY2UiIG1hc2tVbml0cz0idXNlclNwYWNlT25Vc2UiIHg9IjAiIHk9IjAiIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiI+CjxwYXRoIGQ9Ik0zMiAxNkMzMiA3LjE2MzQ0IDI0LjgzNjYgMCAxNiAwQzcuMTYzNDQgMCAwIDcuMTYzNDQgMCAxNkMwIDI0LjgzNjYgNy4xNjM0NCAzMiAxNiAzMkMyNC44MzY2IDMyIDMyIDI0LjgzNjYgMzIgMTZaIiBmaWxsPSJ3aGl0ZSIvPgo8L21hc2s+CjxnIG1hc2s9InVybCgjbWFzazBfNzQxXzI3NTEpIj4KPHBhdGggZD0iTTMyIDE2QzMyIDcuMTYzNDQgMjQuODM2NiAwIDE2IDBDNy4xNjM0NCAwIDAgNy4xNjM0NCAwIDE2QzAgMjQuODM2NiA3LjE2MzQ0IDMyIDE2IDMyQzI0LjgzNjYgMzIgMzIgMjQuODM2NiAzMiAxNloiIGZpbGw9IiM3MDg0RkYiLz4KPGcgZmlsdGVyPSJ1cmwoI2ZpbHRlcjBfZF83NDFfMjc1MSkiPgo8cGF0aCBkPSJNMjcuNjAxOSAxNy4zODc2QzI4LjUyMTYgMTUuMzI2MSAyMy45NzQ4IDkuNTY2MzIgMTkuNjMxIDcuMTY2NzZDMTYuODkyOSA1LjMwNzc5IDE0LjAzOTkgNS41NjMxOCAxMy40NjIgNi4zNzkzOEMxMi4xOTQgOC4xNzA2OSAxNy42NjExIDkuNjg4NTEgMjEuMzE3NCAxMS40NTk3QzIwLjUzMTQgMTEuODAyMiAxOS43OTA4IDEyLjQxNjkgMTkuMzU1MiAxMy4yMDI5QzE3Ljk5MjEgMTEuNzA5OCAxNS4wMDAzIDEwLjQyMzkgMTEuNDg5NyAxMS40NTk3QzkuMTIzOTcgMTIuMTU3NyA3LjE1NzkxIDEzLjgwMzIgNi4zOTgwNCAxNi4yODg1QzYuMjEzMzcgMTYuMjA2MiA2LjAwODk0IDE2LjE2MDQgNS43OTM4NyAxNi4xNjA0QzQuOTcxNDIgMTYuMTYwNCA0LjMwNDY5IDE2LjgyOTQgNC4zMDQ2OSAxNy42NTQ2QzQuMzA0NjkgMTguNDc5OSA0Ljk3MTQyIDE5LjE0ODggNS43OTM4NyAxOS4xNDg4QzUuOTQ2MzIgMTkuMTQ4OCA2LjQyMjk4IDE5LjA0NjMgNi40MjI5OCAxOS4wNDYzTDE0LjAzOTkgMTkuMTAxNkMxMC45OTM3IDIzLjk1MDQgOC41ODYzNSAyNC42NTkxIDguNTg2MzUgMjUuNDk5MkM4LjU4NjM1IDI2LjMzOTIgMTAuODg5OCAyNi4xMTE2IDExLjc1NDcgMjUuNzk4NEMxNS44OTQ5IDI0LjI5OTUgMjAuMzQxNyAxOS42MjggMjEuMTA0OCAxOC4yODMzQzI0LjMwOTIgMTguNjg0NCAyNy4wMDIyIDE4LjczMTggMjcuNjAxOSAxNy4zODc2WiIgZmlsbD0idXJsKCNwYWludDBfbGluZWFyXzc0MV8yNzUxKSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTIxLjMwMjkgMTEuNDUzOEMyMS4zMDY3IDExLjQ1NTUgMjEuMzEwNiAxMS40NTcxIDIxLjMxNDQgMTEuNDU4OEMyMS40ODM5IDExLjM5MTggMjEuNDU2NSAxMS4xNDA3IDIxLjQwOTkgMTAuOTQzNUMyMS4zMDMgMTAuNDkwMSAxOS40NTc1IDguNjYxNjUgMTcuNzI0NSA3Ljg0MjY1QzE1LjM2MjkgNi43MjY2NSAxMy42MjQgNi43ODQyMSAxMy4zNjcyIDcuMjk4NjVDMTMuODQ3MiA4LjI4ODIxIDE2LjA3NzkgOS4yMTcyNyAxOC40MDc3IDEwLjE4NzZDMTkuMzk3MSAxMC41OTk2IDIwLjQwNDMgMTEuMDE5MSAyMS4zMDI5IDExLjQ1MzhaIiBmaWxsPSJ1cmwoI3BhaW50MV9saW5lYXJfNzQxXzI3NTEpIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTguMzIyOCAyMS40MTY3QzE3Ljg0NTMgMjEuMjMzNyAxNy4zMDYgMjEuMDY1OCAxNi42OTI5IDIwLjkxMzNDMTcuMzQ2OSAxOS43MzkzIDE3LjQ4NDEgMTguMDAxMSAxNi44NjY1IDE2LjkwMjJDMTUuOTk5OCAxNS4zNTk5IDE0LjkxMTcgMTQuNTM5MSAxMi4zODM0IDE0LjUzOTFDMTAuOTkyOCAxNC41MzkxIDcuMjQ4NzcgMTUuMDA5IDcuMTgyMjcgMTguMTQ1QzcuMTc1MzQgMTguNDczOCA3LjE4MjA5IDE4Ljc3NTEgNy4yMDU3NyAxOS4wNTIxTDE0LjA0MyAxOS4xMDE5QzEzLjEyMSAyMC41Njk0IDEyLjI1NzUgMjEuNjU3NyAxMS41MDE2IDIyLjQ4NTJDMTIuNDA5MiAyMi43MTg2IDEzLjE1ODEgMjIuOTE0NCAxMy44NDU3IDIzLjA5NDNDMTQuNDk3OCAyMy4yNjQ4IDE1LjA5NDYgMjMuNDIwOSAxNS43MTkzIDIzLjU4MDlDMTYuNjYyIDIyLjg5MTggMTcuNTQ4MyAyMi4xNDA0IDE4LjMyMjggMjEuNDE2N1oiIGZpbGw9InVybCgjcGFpbnQyX2xpbmVhcl83NDFfMjc1MSkiLz4KPHBhdGggZD0iTTYuMzA4NzQgMTguNzI4M0M2LjU4ODA1IDIxLjExMDUgNy45MzczNiAyMi4wNDQxIDEwLjY5NDYgMjIuMzIwNUMxMy40NTE5IDIyLjU5NjggMTUuMDMzNSAyMi40MTE0IDE3LjEzOTEgMjIuNjAzNkMxOC44OTc3IDIyLjc2NDEgMjAuNDY4IDIzLjY2MzMgMjEuMDUwNSAyMy4zNTI2QzIxLjU3NDcgMjMuMDczIDIxLjI4MTQgMjIuMDYyNiAyMC41Nzk5IDIxLjQxNDRDMTkuNjcwNiAyMC41NzQxIDE4LjQxMjEgMTkuOTkgMTYuMTk3NyAxOS43ODI2QzE2LjYzOSAxOC41NzAyIDE2LjUxNTQgMTYuODcwMyAxNS44Mjk5IDE1Ljk0NTVDMTQuODM4OSAxNC42MDgyIDEzLjAwOTcgMTQuMDAzNiAxMC42OTQ2IDE0LjI2NzhDOC4yNzU4NiAxNC41NDM4IDUuOTU4MjEgMTUuNzM4NiA2LjMwODc0IDE4LjcyODNaIiBmaWxsPSJ1cmwoI3BhaW50M19saW5lYXJfNzQxXzI3NTEpIi8+CjwvZz4KPC9nPgo8L2c+CjxkZWZzPgo8ZmlsdGVyIGlkPSJmaWx0ZXIwX2RfNzQxXzI3NTEiIHg9Ii03Ny42MTUzIiB5PSItNzYuMTYwMiIgd2lkdGg9IjE4Ny4yNTQiIGhlaWdodD0iMTg0LjE2MiIgZmlsdGVyVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM9InNSR0IiPgo8ZmVGbG9vZCBmbG9vZC1vcGFjaXR5PSIwIiByZXN1bHQ9IkJhY2tncm91bmRJbWFnZUZpeCIvPgo8ZmVDb2xvck1hdHJpeCBpbj0iU291cmNlQWxwaGEiIHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAxMjcgMCIgcmVzdWx0PSJoYXJkQWxwaGEiLz4KPGZlT2Zmc2V0Lz4KPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iNDAuOTYiLz4KPGZlQ29tcG9zaXRlIGluMj0iaGFyZEFscGhhIiBvcGVyYXRvcj0ib3V0Ii8+CjxmZUNvbG9yTWF0cml4IHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIwIDAgMCAwIDAuMTUxOTMzIDAgMCAwIDAgMC4yMzkyMzggMCAwIDAgMCAwLjQ5MDI0MSAwIDAgMCAwLjU0IDAiLz4KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbjI9IkJhY2tncm91bmRJbWFnZUZpeCIgcmVzdWx0PSJlZmZlY3QxX2Ryb3BTaGFkb3dfNzQxXzI3NTEiLz4KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJlZmZlY3QxX2Ryb3BTaGFkb3dfNzQxXzI3NTEiIHJlc3VsdD0ic2hhcGUiLz4KPC9maWx0ZXI+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhcl83NDFfMjc1MSIgeDE9IjExLjIxNDIiIHkxPSIxNS41NjIiIHgyPSIyNy40MTE5IiB5Mj0iMjAuMTM5OSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSJ3aGl0ZSIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IndoaXRlIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQxX2xpbmVhcl83NDFfMjc1MSIgeDE9IjI0LjY3NDUiIHkxPSIxNS4yNTE4IiB4Mj0iMTIuOTUzNiIgeTI9IjMuNTQxNjMiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iIzg2OTdGRiIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM4Njk3RkYiIHN0b3Atb3BhY2l0eT0iMCIvPgo8L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50Ml9saW5lYXJfNzQxXzI3NTEiIHgxPSIxOC42NDc4IiB5MT0iMjEuODI2MSIgeDI9IjcuNDA4MDIiIHkyPSIxNS4zODU5IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiM4Njk3RkYiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjODY5N0ZGIiBzdG9wLW9wYWNpdHk9IjAiLz4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDNfbGluZWFyXzc0MV8yNzUxIiB4MT0iMTIuMTgyNyIgeTE9IjE1LjQzOTQiIHgyPSIxOS43OTkxIiB5Mj0iMjUuMDg0MyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSJ3aGl0ZSIvPgo8c3RvcCBvZmZzZXQ9IjAuOTgzODk1IiBzdG9wLWNvbG9yPSIjRDFEOEZGIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxjbGlwUGF0aCBpZD0iY2xpcDBfNzQxXzI3NTEiPgo8cmVjdCB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIGZpbGw9IndoaXRlIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg==",
        rdns: "io.lux",
    };
    window.dispatchEvent(new CustomEvent("eip6963:announceProvider", {
        detail: Object.freeze({ info, provider }),
    }));
};
window.addEventListener("eip6963:requestProvider", (event) => {
    announceEip6963Provider(luxProvider);
});
announceEip6963Provider(luxProvider);
window.dispatchEvent(new Event("ethereum#initialized"));

exports.EthereumProvider = EthereumProvider;

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZVByb3ZpZGVyLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUMzRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUMzRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDMUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQzlHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ2hmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ3BPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL0BsdXh3YWxsZXQveC8uL25vZGVfbW9kdWxlcy9ldGgtcnBjLWVycm9ycy9kaXN0L2NsYXNzZXMuanMiLCJ3ZWJwYWNrOi8vQGx1eHdhbGxldC94Ly4vbm9kZV9tb2R1bGVzL2V0aC1ycGMtZXJyb3JzL2Rpc3QvZXJyb3ItY29uc3RhbnRzLmpzIiwid2VicGFjazovL0BsdXh3YWxsZXQveC8uL25vZGVfbW9kdWxlcy9ldGgtcnBjLWVycm9ycy9kaXN0L2Vycm9ycy5qcyIsIndlYnBhY2s6Ly9AbHV4d2FsbGV0L3gvLi9ub2RlX21vZHVsZXMvZXRoLXJwYy1lcnJvcnMvZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9AbHV4d2FsbGV0L3gvLi9ub2RlX21vZHVsZXMvZXRoLXJwYy1lcnJvcnMvZGlzdC91dGlscy5qcyIsIndlYnBhY2s6Ly9AbHV4d2FsbGV0L3gvLi9ub2RlX21vZHVsZXMvZXZlbnRzL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly9AbHV4d2FsbGV0L3gvLi9ub2RlX21vZHVsZXMvZmFzdC1zYWZlLXN0cmluZ2lmeS9pbmRleC5qcyIsIndlYnBhY2s6Ly9AbHV4d2FsbGV0L3gvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vQGx1eHdhbGxldC94Ly4vbm9kZV9tb2R1bGVzL0BsdXhmaS9wYWdlLXByb3ZpZGVyL2Rpc3QvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkV0aGVyZXVtUHJvdmlkZXJFcnJvciA9IGV4cG9ydHMuRXRoZXJldW1ScGNFcnJvciA9IHZvaWQgMDtcbmNvbnN0IGZhc3Rfc2FmZV9zdHJpbmdpZnlfMSA9IHJlcXVpcmUoXCJmYXN0LXNhZmUtc3RyaW5naWZ5XCIpO1xuLyoqXG4gKiBFcnJvciBzdWJjbGFzcyBpbXBsZW1lbnRpbmcgSlNPTiBSUEMgMi4wIGVycm9ycyBhbmQgRXRoZXJldW0gUlBDIGVycm9yc1xuICogcGVyIEVJUC0xNDc0LlxuICogUGVybWl0cyBhbnkgaW50ZWdlciBlcnJvciBjb2RlLlxuICovXG5jbGFzcyBFdGhlcmV1bVJwY0Vycm9yIGV4dGVuZHMgRXJyb3Ige1xuICAgIGNvbnN0cnVjdG9yKGNvZGUsIG1lc3NhZ2UsIGRhdGEpIHtcbiAgICAgICAgaWYgKCFOdW1iZXIuaXNJbnRlZ2VyKGNvZGUpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1wiY29kZVwiIG11c3QgYmUgYW4gaW50ZWdlci4nKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIW1lc3NhZ2UgfHwgdHlwZW9mIG1lc3NhZ2UgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1wibWVzc2FnZVwiIG11c3QgYmUgYSBub25lbXB0eSBzdHJpbmcuJyk7XG4gICAgICAgIH1cbiAgICAgICAgc3VwZXIobWVzc2FnZSk7XG4gICAgICAgIHRoaXMuY29kZSA9IGNvZGU7XG4gICAgICAgIGlmIChkYXRhICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIHBsYWluIG9iamVjdCB3aXRoIGFsbCBwdWJsaWMgY2xhc3MgcHJvcGVydGllcy5cbiAgICAgKi9cbiAgICBzZXJpYWxpemUoKSB7XG4gICAgICAgIGNvbnN0IHNlcmlhbGl6ZWQgPSB7XG4gICAgICAgICAgICBjb2RlOiB0aGlzLmNvZGUsXG4gICAgICAgICAgICBtZXNzYWdlOiB0aGlzLm1lc3NhZ2UsXG4gICAgICAgIH07XG4gICAgICAgIGlmICh0aGlzLmRhdGEgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgc2VyaWFsaXplZC5kYXRhID0gdGhpcy5kYXRhO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnN0YWNrKSB7XG4gICAgICAgICAgICBzZXJpYWxpemVkLnN0YWNrID0gdGhpcy5zdGFjaztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2VyaWFsaXplZDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJuIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBzZXJpYWxpemVkIGVycm9yLCBvbWl0dGluZ1xuICAgICAqIGFueSBjaXJjdWxhciByZWZlcmVuY2VzLlxuICAgICAqL1xuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gZmFzdF9zYWZlX3N0cmluZ2lmeV8xLmRlZmF1bHQodGhpcy5zZXJpYWxpemUoKSwgc3RyaW5naWZ5UmVwbGFjZXIsIDIpO1xuICAgIH1cbn1cbmV4cG9ydHMuRXRoZXJldW1ScGNFcnJvciA9IEV0aGVyZXVtUnBjRXJyb3I7XG4vKipcbiAqIEVycm9yIHN1YmNsYXNzIGltcGxlbWVudGluZyBFdGhlcmV1bSBQcm92aWRlciBlcnJvcnMgcGVyIEVJUC0xMTkzLlxuICogUGVybWl0cyBpbnRlZ2VyIGVycm9yIGNvZGVzIGluIHRoZSBbIDEwMDAgPD0gNDk5OSBdIHJhbmdlLlxuICovXG5jbGFzcyBFdGhlcmV1bVByb3ZpZGVyRXJyb3IgZXh0ZW5kcyBFdGhlcmV1bVJwY0Vycm9yIHtcbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYW4gRXRoZXJldW0gUHJvdmlkZXIgSlNPTi1SUEMgZXJyb3IuXG4gICAgICogYGNvZGVgIG11c3QgYmUgYW4gaW50ZWdlciBpbiB0aGUgMTAwMCA8PSA0OTk5IHJhbmdlLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGNvZGUsIG1lc3NhZ2UsIGRhdGEpIHtcbiAgICAgICAgaWYgKCFpc1ZhbGlkRXRoUHJvdmlkZXJDb2RlKGNvZGUpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1wiY29kZVwiIG11c3QgYmUgYW4gaW50ZWdlciBzdWNoIHRoYXQ6IDEwMDAgPD0gY29kZSA8PSA0OTk5Jyk7XG4gICAgICAgIH1cbiAgICAgICAgc3VwZXIoY29kZSwgbWVzc2FnZSwgZGF0YSk7XG4gICAgfVxufVxuZXhwb3J0cy5FdGhlcmV1bVByb3ZpZGVyRXJyb3IgPSBFdGhlcmV1bVByb3ZpZGVyRXJyb3I7XG4vLyBJbnRlcm5hbFxuZnVuY3Rpb24gaXNWYWxpZEV0aFByb3ZpZGVyQ29kZShjb2RlKSB7XG4gICAgcmV0dXJuIE51bWJlci5pc0ludGVnZXIoY29kZSkgJiYgY29kZSA+PSAxMDAwICYmIGNvZGUgPD0gNDk5OTtcbn1cbmZ1bmN0aW9uIHN0cmluZ2lmeVJlcGxhY2VyKF8sIHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlID09PSAnW0NpcmN1bGFyXScpIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWTJ4aGMzTmxjeTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMM055WXk5amJHRnpjMlZ6TG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096dEJRVUZCTERaRVFVRm5SRHRCUVZOb1JEczdPenRIUVVsSE8wRkJRMGdzVFVGQllTeG5Ra0ZCYjBJc1UwRkJVU3hMUVVGTE8wbEJUVFZETEZsQlFWa3NTVUZCV1N4RlFVRkZMRTlCUVdVc1JVRkJSU3hKUVVGUk8xRkJSV3BFTEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1UwRkJVeXhEUVVGRExFbEJRVWtzUTBGQlF5eEZRVUZGTzFsQlF6TkNMRTFCUVUwc1NVRkJTU3hMUVVGTExFTkJRMklzTkVKQlFUUkNMRU5CUXpkQ0xFTkJRVU03VTBGRFNEdFJRVU5FTEVsQlFVa3NRMEZCUXl4UFFVRlBMRWxCUVVrc1QwRkJUeXhQUVVGUExFdEJRVXNzVVVGQlVTeEZRVUZGTzFsQlF6TkRMRTFCUVUwc1NVRkJTU3hMUVVGTExFTkJRMklzYzBOQlFYTkRMRU5CUTNaRExFTkJRVU03VTBGRFNEdFJRVVZFTEV0QlFVc3NRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJRenRSUVVObUxFbEJRVWtzUTBGQlF5eEpRVUZKTEVkQlFVY3NTVUZCU1N4RFFVRkRPMUZCUTJwQ0xFbEJRVWtzU1VGQlNTeExRVUZMTEZOQlFWTXNSVUZCUlR0WlFVTjBRaXhKUVVGSkxFTkJRVU1zU1VGQlNTeEhRVUZITEVsQlFVa3NRMEZCUXp0VFFVTnNRanRKUVVOSUxFTkJRVU03U1VGRlJEczdUMEZGUnp0SlFVTklMRk5CUVZNN1VVRkRVQ3hOUVVGTkxGVkJRVlVzUjBGQkswSTdXVUZETjBNc1NVRkJTU3hGUVVGRkxFbEJRVWtzUTBGQlF5eEpRVUZKTzFsQlEyWXNUMEZCVHl4RlFVRkZMRWxCUVVrc1EwRkJReXhQUVVGUE8xTkJRM1JDTEVOQlFVTTdVVUZEUml4SlFVRkpMRWxCUVVrc1EwRkJReXhKUVVGSkxFdEJRVXNzVTBGQlV5eEZRVUZGTzFsQlF6TkNMRlZCUVZVc1EwRkJReXhKUVVGSkxFZEJRVWNzU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXp0VFFVTTNRanRSUVVORUxFbEJRVWtzU1VGQlNTeERRVUZETEV0QlFVc3NSVUZCUlR0WlFVTmtMRlZCUVZVc1EwRkJReXhMUVVGTExFZEJRVWNzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXp0VFFVTXZRanRSUVVORUxFOUJRVThzVlVGQlZTeERRVUZETzBsQlEzQkNMRU5CUVVNN1NVRkZSRHM3TzA5QlIwYzdTVUZEU0N4UlFVRlJPMUZCUTA0c1QwRkJUeXcyUWtGQllTeERRVU5zUWl4SlFVRkpMRU5CUVVNc1UwRkJVeXhGUVVGRkxFVkJRMmhDTEdsQ1FVRnBRaXhGUVVOcVFpeERRVUZETEVOQlEwWXNRMEZCUXp0SlFVTktMRU5CUVVNN1EwRkRSanRCUVhSRVJDdzBRMEZ6UkVNN1FVRkZSRHM3TzBkQlIwYzdRVUZEU0N4TlFVRmhMSEZDUVVGNVFpeFRRVUZSTEdkQ1FVRnRRanRKUVVVdlJEczdPMDlCUjBjN1NVRkRTQ3haUVVGWkxFbEJRVmtzUlVGQlJTeFBRVUZsTEVWQlFVVXNTVUZCVVR0UlFVVnFSQ3hKUVVGSkxFTkJRVU1zYzBKQlFYTkNMRU5CUVVNc1NVRkJTU3hEUVVGRExFVkJRVVU3V1VGRGFrTXNUVUZCVFN4SlFVRkpMRXRCUVVzc1EwRkRZaXd5UkVGQk1rUXNRMEZETlVRc1EwRkJRenRUUVVOSU8xRkJSVVFzUzBGQlN5eERRVUZETEVsQlFVa3NSVUZCUlN4UFFVRlBMRVZCUVVVc1NVRkJTU3hEUVVGRExFTkJRVU03U1VGRE4wSXNRMEZCUXp0RFFVTkdPMEZCYUVKRUxITkVRV2RDUXp0QlFVVkVMRmRCUVZjN1FVRkZXQ3hUUVVGVExITkNRVUZ6UWl4RFFVRkRMRWxCUVZrN1NVRkRNVU1zVDBGQlR5eE5RVUZOTEVOQlFVTXNVMEZCVXl4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFbEJRVWtzU1VGQlNTeEpRVUZKTEVsQlFVa3NTVUZCU1N4SlFVRkpMRWxCUVVrc1EwRkJRenRCUVVOb1JTeERRVUZETzBGQlJVUXNVMEZCVXl4cFFrRkJhVUlzUTBGQlF5eERRVUZWTEVWQlFVVXNTMEZCWXp0SlFVTnVSQ3hKUVVGSkxFdEJRVXNzUzBGQlN5eFpRVUZaTEVWQlFVVTdVVUZETVVJc1QwRkJUeXhUUVVGVExFTkJRVU03UzBGRGJFSTdTVUZEUkN4UFFVRlBMRXRCUVVzc1EwRkJRenRCUVVObUxFTkJRVU1pZlE9PSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5lcnJvclZhbHVlcyA9IGV4cG9ydHMuZXJyb3JDb2RlcyA9IHZvaWQgMDtcbmV4cG9ydHMuZXJyb3JDb2RlcyA9IHtcbiAgICBycGM6IHtcbiAgICAgICAgaW52YWxpZElucHV0OiAtMzIwMDAsXG4gICAgICAgIHJlc291cmNlTm90Rm91bmQ6IC0zMjAwMSxcbiAgICAgICAgcmVzb3VyY2VVbmF2YWlsYWJsZTogLTMyMDAyLFxuICAgICAgICB0cmFuc2FjdGlvblJlamVjdGVkOiAtMzIwMDMsXG4gICAgICAgIG1ldGhvZE5vdFN1cHBvcnRlZDogLTMyMDA0LFxuICAgICAgICBsaW1pdEV4Y2VlZGVkOiAtMzIwMDUsXG4gICAgICAgIHBhcnNlOiAtMzI3MDAsXG4gICAgICAgIGludmFsaWRSZXF1ZXN0OiAtMzI2MDAsXG4gICAgICAgIG1ldGhvZE5vdEZvdW5kOiAtMzI2MDEsXG4gICAgICAgIGludmFsaWRQYXJhbXM6IC0zMjYwMixcbiAgICAgICAgaW50ZXJuYWw6IC0zMjYwMyxcbiAgICB9LFxuICAgIHByb3ZpZGVyOiB7XG4gICAgICAgIHVzZXJSZWplY3RlZFJlcXVlc3Q6IDQwMDEsXG4gICAgICAgIHVuYXV0aG9yaXplZDogNDEwMCxcbiAgICAgICAgdW5zdXBwb3J0ZWRNZXRob2Q6IDQyMDAsXG4gICAgICAgIGRpc2Nvbm5lY3RlZDogNDkwMCxcbiAgICAgICAgY2hhaW5EaXNjb25uZWN0ZWQ6IDQ5MDEsXG4gICAgfSxcbn07XG5leHBvcnRzLmVycm9yVmFsdWVzID0ge1xuICAgICctMzI3MDAnOiB7XG4gICAgICAgIHN0YW5kYXJkOiAnSlNPTiBSUEMgMi4wJyxcbiAgICAgICAgbWVzc2FnZTogJ0ludmFsaWQgSlNPTiB3YXMgcmVjZWl2ZWQgYnkgdGhlIHNlcnZlci4gQW4gZXJyb3Igb2NjdXJyZWQgb24gdGhlIHNlcnZlciB3aGlsZSBwYXJzaW5nIHRoZSBKU09OIHRleHQuJyxcbiAgICB9LFxuICAgICctMzI2MDAnOiB7XG4gICAgICAgIHN0YW5kYXJkOiAnSlNPTiBSUEMgMi4wJyxcbiAgICAgICAgbWVzc2FnZTogJ1RoZSBKU09OIHNlbnQgaXMgbm90IGEgdmFsaWQgUmVxdWVzdCBvYmplY3QuJyxcbiAgICB9LFxuICAgICctMzI2MDEnOiB7XG4gICAgICAgIHN0YW5kYXJkOiAnSlNPTiBSUEMgMi4wJyxcbiAgICAgICAgbWVzc2FnZTogJ1RoZSBtZXRob2QgZG9lcyBub3QgZXhpc3QgLyBpcyBub3QgYXZhaWxhYmxlLicsXG4gICAgfSxcbiAgICAnLTMyNjAyJzoge1xuICAgICAgICBzdGFuZGFyZDogJ0pTT04gUlBDIDIuMCcsXG4gICAgICAgIG1lc3NhZ2U6ICdJbnZhbGlkIG1ldGhvZCBwYXJhbWV0ZXIocykuJyxcbiAgICB9LFxuICAgICctMzI2MDMnOiB7XG4gICAgICAgIHN0YW5kYXJkOiAnSlNPTiBSUEMgMi4wJyxcbiAgICAgICAgbWVzc2FnZTogJ0ludGVybmFsIEpTT04tUlBDIGVycm9yLicsXG4gICAgfSxcbiAgICAnLTMyMDAwJzoge1xuICAgICAgICBzdGFuZGFyZDogJ0VJUC0xNDc0JyxcbiAgICAgICAgbWVzc2FnZTogJ0ludmFsaWQgaW5wdXQuJyxcbiAgICB9LFxuICAgICctMzIwMDEnOiB7XG4gICAgICAgIHN0YW5kYXJkOiAnRUlQLTE0NzQnLFxuICAgICAgICBtZXNzYWdlOiAnUmVzb3VyY2Ugbm90IGZvdW5kLicsXG4gICAgfSxcbiAgICAnLTMyMDAyJzoge1xuICAgICAgICBzdGFuZGFyZDogJ0VJUC0xNDc0JyxcbiAgICAgICAgbWVzc2FnZTogJ1Jlc291cmNlIHVuYXZhaWxhYmxlLicsXG4gICAgfSxcbiAgICAnLTMyMDAzJzoge1xuICAgICAgICBzdGFuZGFyZDogJ0VJUC0xNDc0JyxcbiAgICAgICAgbWVzc2FnZTogJ1RyYW5zYWN0aW9uIHJlamVjdGVkLicsXG4gICAgfSxcbiAgICAnLTMyMDA0Jzoge1xuICAgICAgICBzdGFuZGFyZDogJ0VJUC0xNDc0JyxcbiAgICAgICAgbWVzc2FnZTogJ01ldGhvZCBub3Qgc3VwcG9ydGVkLicsXG4gICAgfSxcbiAgICAnLTMyMDA1Jzoge1xuICAgICAgICBzdGFuZGFyZDogJ0VJUC0xNDc0JyxcbiAgICAgICAgbWVzc2FnZTogJ1JlcXVlc3QgbGltaXQgZXhjZWVkZWQuJyxcbiAgICB9LFxuICAgICc0MDAxJzoge1xuICAgICAgICBzdGFuZGFyZDogJ0VJUC0xMTkzJyxcbiAgICAgICAgbWVzc2FnZTogJ1VzZXIgcmVqZWN0ZWQgdGhlIHJlcXVlc3QuJyxcbiAgICB9LFxuICAgICc0MTAwJzoge1xuICAgICAgICBzdGFuZGFyZDogJ0VJUC0xMTkzJyxcbiAgICAgICAgbWVzc2FnZTogJ1RoZSByZXF1ZXN0ZWQgYWNjb3VudCBhbmQvb3IgbWV0aG9kIGhhcyBub3QgYmVlbiBhdXRob3JpemVkIGJ5IHRoZSB1c2VyLicsXG4gICAgfSxcbiAgICAnNDIwMCc6IHtcbiAgICAgICAgc3RhbmRhcmQ6ICdFSVAtMTE5MycsXG4gICAgICAgIG1lc3NhZ2U6ICdUaGUgcmVxdWVzdGVkIG1ldGhvZCBpcyBub3Qgc3VwcG9ydGVkIGJ5IHRoaXMgRXRoZXJldW0gcHJvdmlkZXIuJyxcbiAgICB9LFxuICAgICc0OTAwJzoge1xuICAgICAgICBzdGFuZGFyZDogJ0VJUC0xMTkzJyxcbiAgICAgICAgbWVzc2FnZTogJ1RoZSBwcm92aWRlciBpcyBkaXNjb25uZWN0ZWQgZnJvbSBhbGwgY2hhaW5zLicsXG4gICAgfSxcbiAgICAnNDkwMSc6IHtcbiAgICAgICAgc3RhbmRhcmQ6ICdFSVAtMTE5MycsXG4gICAgICAgIG1lc3NhZ2U6ICdUaGUgcHJvdmlkZXIgaXMgZGlzY29ubmVjdGVkIGZyb20gdGhlIHNwZWNpZmllZCBjaGFpbi4nLFxuICAgIH0sXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWlhKeWIzSXRZMjl1YzNSaGJuUnpMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZjM0pqTDJWeWNtOXlMV052Ym5OMFlXNTBjeTUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN1FVRjFRbUVzVVVGQlFTeFZRVUZWTEVkQlFXVTdTVUZEY0VNc1IwRkJSeXhGUVVGRk8xRkJRMGdzV1VGQldTeEZRVUZGTEVOQlFVTXNTMEZCU3p0UlFVTndRaXhuUWtGQlowSXNSVUZCUlN4RFFVRkRMRXRCUVVzN1VVRkRlRUlzYlVKQlFXMUNMRVZCUVVVc1EwRkJReXhMUVVGTE8xRkJRek5DTEcxQ1FVRnRRaXhGUVVGRkxFTkJRVU1zUzBGQlN6dFJRVU16UWl4clFrRkJhMElzUlVGQlJTeERRVUZETEV0QlFVczdVVUZETVVJc1lVRkJZU3hGUVVGRkxFTkJRVU1zUzBGQlN6dFJRVU55UWl4TFFVRkxMRVZCUVVVc1EwRkJReXhMUVVGTE8xRkJRMklzWTBGQll5eEZRVUZGTEVOQlFVTXNTMEZCU3p0UlFVTjBRaXhqUVVGakxFVkJRVVVzUTBGQlF5eExRVUZMTzFGQlEzUkNMR0ZCUVdFc1JVRkJSU3hEUVVGRExFdEJRVXM3VVVGRGNrSXNVVUZCVVN4RlFVRkZMRU5CUVVNc1MwRkJTenRMUVVOcVFqdEpRVU5FTEZGQlFWRXNSVUZCUlR0UlFVTlNMRzFDUVVGdFFpeEZRVUZGTEVsQlFVazdVVUZEZWtJc1dVRkJXU3hGUVVGRkxFbEJRVWs3VVVGRGJFSXNhVUpCUVdsQ0xFVkJRVVVzU1VGQlNUdFJRVU4yUWl4WlFVRlpMRVZCUVVVc1NVRkJTVHRSUVVOc1FpeHBRa0ZCYVVJc1JVRkJSU3hKUVVGSk8wdEJRM2hDTzBOQlEwWXNRMEZCUXp0QlFVVlhMRkZCUVVFc1YwRkJWeXhIUVVGSE8wbEJRM3BDTEZGQlFWRXNSVUZCUlR0UlFVTlNMRkZCUVZFc1JVRkJSU3hqUVVGak8xRkJRM2hDTEU5QlFVOHNSVUZCUlN4MVIwRkJkVWM3UzBGRGFrZzdTVUZEUkN4UlFVRlJMRVZCUVVVN1VVRkRVaXhSUVVGUkxFVkJRVVVzWTBGQll6dFJRVU40UWl4UFFVRlBMRVZCUVVVc09FTkJRVGhETzB0QlEzaEVPMGxCUTBRc1VVRkJVU3hGUVVGRk8xRkJRMUlzVVVGQlVTeEZRVUZGTEdOQlFXTTdVVUZEZUVJc1QwRkJUeXhGUVVGRkxDdERRVUVyUXp0TFFVTjZSRHRKUVVORUxGRkJRVkVzUlVGQlJUdFJRVU5TTEZGQlFWRXNSVUZCUlN4alFVRmpPMUZCUTNoQ0xFOUJRVThzUlVGQlJTdzRRa0ZCT0VJN1MwRkRlRU03U1VGRFJDeFJRVUZSTEVWQlFVVTdVVUZEVWl4UlFVRlJMRVZCUVVVc1kwRkJZenRSUVVONFFpeFBRVUZQTEVWQlFVVXNNRUpCUVRCQ08wdEJRM0JETzBsQlEwUXNVVUZCVVN4RlFVRkZPMUZCUTFJc1VVRkJVU3hGUVVGRkxGVkJRVlU3VVVGRGNFSXNUMEZCVHl4RlFVRkZMR2RDUVVGblFqdExRVU14UWp0SlFVTkVMRkZCUVZFc1JVRkJSVHRSUVVOU0xGRkJRVkVzUlVGQlJTeFZRVUZWTzFGQlEzQkNMRTlCUVU4c1JVRkJSU3h4UWtGQmNVSTdTMEZETDBJN1NVRkRSQ3hSUVVGUkxFVkJRVVU3VVVGRFVpeFJRVUZSTEVWQlFVVXNWVUZCVlR0UlFVTndRaXhQUVVGUExFVkJRVVVzZFVKQlFYVkNPMHRCUTJwRE8wbEJRMFFzVVVGQlVTeEZRVUZGTzFGQlExSXNVVUZCVVN4RlFVRkZMRlZCUVZVN1VVRkRjRUlzVDBGQlR5eEZRVUZGTEhWQ1FVRjFRanRMUVVOcVF6dEpRVU5FTEZGQlFWRXNSVUZCUlR0UlFVTlNMRkZCUVZFc1JVRkJSU3hWUVVGVk8xRkJRM0JDTEU5QlFVOHNSVUZCUlN4MVFrRkJkVUk3UzBGRGFrTTdTVUZEUkN4UlFVRlJMRVZCUVVVN1VVRkRVaXhSUVVGUkxFVkJRVVVzVlVGQlZUdFJRVU53UWl4UFFVRlBMRVZCUVVVc2VVSkJRWGxDTzB0QlEyNURPMGxCUTBRc1RVRkJUU3hGUVVGRk8xRkJRMDRzVVVGQlVTeEZRVUZGTEZWQlFWVTdVVUZEY0VJc1QwRkJUeXhGUVVGRkxEUkNRVUUwUWp0TFFVTjBRenRKUVVORUxFMUJRVTBzUlVGQlJUdFJRVU5PTEZGQlFWRXNSVUZCUlN4VlFVRlZPMUZCUTNCQ0xFOUJRVThzUlVGQlJTd3dSVUZCTUVVN1MwRkRjRVk3U1VGRFJDeE5RVUZOTEVWQlFVVTdVVUZEVGl4UlFVRlJMRVZCUVVVc1ZVRkJWVHRSUVVOd1FpeFBRVUZQTEVWQlFVVXNhMFZCUVd0Rk8wdEJRelZGTzBsQlEwUXNUVUZCVFN4RlFVRkZPMUZCUTA0c1VVRkJVU3hGUVVGRkxGVkJRVlU3VVVGRGNFSXNUMEZCVHl4RlFVRkZMQ3REUVVFclF6dExRVU42UkR0SlFVTkVMRTFCUVUwc1JVRkJSVHRSUVVOT0xGRkJRVkVzUlVGQlJTeFZRVUZWTzFGQlEzQkNMRTlCUVU4c1JVRkJSU3gzUkVGQmQwUTdTMEZEYkVVN1EwRkRSaXhEUVVGREluMD0iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZXRoRXJyb3JzID0gdm9pZCAwO1xuY29uc3QgY2xhc3Nlc18xID0gcmVxdWlyZShcIi4vY2xhc3Nlc1wiKTtcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi91dGlsc1wiKTtcbmNvbnN0IGVycm9yX2NvbnN0YW50c18xID0gcmVxdWlyZShcIi4vZXJyb3ItY29uc3RhbnRzXCIpO1xuZXhwb3J0cy5ldGhFcnJvcnMgPSB7XG4gICAgcnBjOiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHZXQgYSBKU09OIFJQQyAyLjAgUGFyc2UgKC0zMjcwMCkgZXJyb3IuXG4gICAgICAgICAqL1xuICAgICAgICBwYXJzZTogKGFyZykgPT4gZ2V0RXRoSnNvblJwY0Vycm9yKGVycm9yX2NvbnN0YW50c18xLmVycm9yQ29kZXMucnBjLnBhcnNlLCBhcmcpLFxuICAgICAgICAvKipcbiAgICAgICAgICogR2V0IGEgSlNPTiBSUEMgMi4wIEludmFsaWQgUmVxdWVzdCAoLTMyNjAwKSBlcnJvci5cbiAgICAgICAgICovXG4gICAgICAgIGludmFsaWRSZXF1ZXN0OiAoYXJnKSA9PiBnZXRFdGhKc29uUnBjRXJyb3IoZXJyb3JfY29uc3RhbnRzXzEuZXJyb3JDb2Rlcy5ycGMuaW52YWxpZFJlcXVlc3QsIGFyZyksXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHZXQgYSBKU09OIFJQQyAyLjAgSW52YWxpZCBQYXJhbXMgKC0zMjYwMikgZXJyb3IuXG4gICAgICAgICAqL1xuICAgICAgICBpbnZhbGlkUGFyYW1zOiAoYXJnKSA9PiBnZXRFdGhKc29uUnBjRXJyb3IoZXJyb3JfY29uc3RhbnRzXzEuZXJyb3JDb2Rlcy5ycGMuaW52YWxpZFBhcmFtcywgYXJnKSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdldCBhIEpTT04gUlBDIDIuMCBNZXRob2QgTm90IEZvdW5kICgtMzI2MDEpIGVycm9yLlxuICAgICAgICAgKi9cbiAgICAgICAgbWV0aG9kTm90Rm91bmQ6IChhcmcpID0+IGdldEV0aEpzb25ScGNFcnJvcihlcnJvcl9jb25zdGFudHNfMS5lcnJvckNvZGVzLnJwYy5tZXRob2ROb3RGb3VuZCwgYXJnKSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdldCBhIEpTT04gUlBDIDIuMCBJbnRlcm5hbCAoLTMyNjAzKSBlcnJvci5cbiAgICAgICAgICovXG4gICAgICAgIGludGVybmFsOiAoYXJnKSA9PiBnZXRFdGhKc29uUnBjRXJyb3IoZXJyb3JfY29uc3RhbnRzXzEuZXJyb3JDb2Rlcy5ycGMuaW50ZXJuYWwsIGFyZyksXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHZXQgYSBKU09OIFJQQyAyLjAgU2VydmVyIGVycm9yLlxuICAgICAgICAgKiBQZXJtaXRzIGludGVnZXIgZXJyb3IgY29kZXMgaW4gdGhlIFsgLTMyMDk5IDw9IC0zMjAwNSBdIHJhbmdlLlxuICAgICAgICAgKiBDb2RlcyAtMzIwMDAgdGhyb3VnaCAtMzIwMDQgYXJlIHJlc2VydmVkIGJ5IEVJUC0xNDc0LlxuICAgICAgICAgKi9cbiAgICAgICAgc2VydmVyOiAob3B0cykgPT4ge1xuICAgICAgICAgICAgaWYgKCFvcHRzIHx8IHR5cGVvZiBvcHRzICE9PSAnb2JqZWN0JyB8fCBBcnJheS5pc0FycmF5KG9wdHMpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdFdGhlcmV1bSBSUEMgU2VydmVyIGVycm9ycyBtdXN0IHByb3ZpZGUgc2luZ2xlIG9iamVjdCBhcmd1bWVudC4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHsgY29kZSB9ID0gb3B0cztcbiAgICAgICAgICAgIGlmICghTnVtYmVyLmlzSW50ZWdlcihjb2RlKSB8fCBjb2RlID4gLTMyMDA1IHx8IGNvZGUgPCAtMzIwOTkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1wiY29kZVwiIG11c3QgYmUgYW4gaW50ZWdlciBzdWNoIHRoYXQ6IC0zMjA5OSA8PSBjb2RlIDw9IC0zMjAwNScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGdldEV0aEpzb25ScGNFcnJvcihjb2RlLCBvcHRzKTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdldCBhbiBFdGhlcmV1bSBKU09OIFJQQyBJbnZhbGlkIElucHV0ICgtMzIwMDApIGVycm9yLlxuICAgICAgICAgKi9cbiAgICAgICAgaW52YWxpZElucHV0OiAoYXJnKSA9PiBnZXRFdGhKc29uUnBjRXJyb3IoZXJyb3JfY29uc3RhbnRzXzEuZXJyb3JDb2Rlcy5ycGMuaW52YWxpZElucHV0LCBhcmcpLFxuICAgICAgICAvKipcbiAgICAgICAgICogR2V0IGFuIEV0aGVyZXVtIEpTT04gUlBDIFJlc291cmNlIE5vdCBGb3VuZCAoLTMyMDAxKSBlcnJvci5cbiAgICAgICAgICovXG4gICAgICAgIHJlc291cmNlTm90Rm91bmQ6IChhcmcpID0+IGdldEV0aEpzb25ScGNFcnJvcihlcnJvcl9jb25zdGFudHNfMS5lcnJvckNvZGVzLnJwYy5yZXNvdXJjZU5vdEZvdW5kLCBhcmcpLFxuICAgICAgICAvKipcbiAgICAgICAgICogR2V0IGFuIEV0aGVyZXVtIEpTT04gUlBDIFJlc291cmNlIFVuYXZhaWxhYmxlICgtMzIwMDIpIGVycm9yLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVzb3VyY2VVbmF2YWlsYWJsZTogKGFyZykgPT4gZ2V0RXRoSnNvblJwY0Vycm9yKGVycm9yX2NvbnN0YW50c18xLmVycm9yQ29kZXMucnBjLnJlc291cmNlVW5hdmFpbGFibGUsIGFyZyksXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHZXQgYW4gRXRoZXJldW0gSlNPTiBSUEMgVHJhbnNhY3Rpb24gUmVqZWN0ZWQgKC0zMjAwMykgZXJyb3IuXG4gICAgICAgICAqL1xuICAgICAgICB0cmFuc2FjdGlvblJlamVjdGVkOiAoYXJnKSA9PiBnZXRFdGhKc29uUnBjRXJyb3IoZXJyb3JfY29uc3RhbnRzXzEuZXJyb3JDb2Rlcy5ycGMudHJhbnNhY3Rpb25SZWplY3RlZCwgYXJnKSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdldCBhbiBFdGhlcmV1bSBKU09OIFJQQyBNZXRob2QgTm90IFN1cHBvcnRlZCAoLTMyMDA0KSBlcnJvci5cbiAgICAgICAgICovXG4gICAgICAgIG1ldGhvZE5vdFN1cHBvcnRlZDogKGFyZykgPT4gZ2V0RXRoSnNvblJwY0Vycm9yKGVycm9yX2NvbnN0YW50c18xLmVycm9yQ29kZXMucnBjLm1ldGhvZE5vdFN1cHBvcnRlZCwgYXJnKSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdldCBhbiBFdGhlcmV1bSBKU09OIFJQQyBMaW1pdCBFeGNlZWRlZCAoLTMyMDA1KSBlcnJvci5cbiAgICAgICAgICovXG4gICAgICAgIGxpbWl0RXhjZWVkZWQ6IChhcmcpID0+IGdldEV0aEpzb25ScGNFcnJvcihlcnJvcl9jb25zdGFudHNfMS5lcnJvckNvZGVzLnJwYy5saW1pdEV4Y2VlZGVkLCBhcmcpLFxuICAgIH0sXG4gICAgcHJvdmlkZXI6IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdldCBhbiBFdGhlcmV1bSBQcm92aWRlciBVc2VyIFJlamVjdGVkIFJlcXVlc3QgKDQwMDEpIGVycm9yLlxuICAgICAgICAgKi9cbiAgICAgICAgdXNlclJlamVjdGVkUmVxdWVzdDogKGFyZykgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGdldEV0aFByb3ZpZGVyRXJyb3IoZXJyb3JfY29uc3RhbnRzXzEuZXJyb3JDb2Rlcy5wcm92aWRlci51c2VyUmVqZWN0ZWRSZXF1ZXN0LCBhcmcpO1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogR2V0IGFuIEV0aGVyZXVtIFByb3ZpZGVyIFVuYXV0aG9yaXplZCAoNDEwMCkgZXJyb3IuXG4gICAgICAgICAqL1xuICAgICAgICB1bmF1dGhvcml6ZWQ6IChhcmcpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBnZXRFdGhQcm92aWRlckVycm9yKGVycm9yX2NvbnN0YW50c18xLmVycm9yQ29kZXMucHJvdmlkZXIudW5hdXRob3JpemVkLCBhcmcpO1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogR2V0IGFuIEV0aGVyZXVtIFByb3ZpZGVyIFVuc3VwcG9ydGVkIE1ldGhvZCAoNDIwMCkgZXJyb3IuXG4gICAgICAgICAqL1xuICAgICAgICB1bnN1cHBvcnRlZE1ldGhvZDogKGFyZykgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGdldEV0aFByb3ZpZGVyRXJyb3IoZXJyb3JfY29uc3RhbnRzXzEuZXJyb3JDb2Rlcy5wcm92aWRlci51bnN1cHBvcnRlZE1ldGhvZCwgYXJnKTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdldCBhbiBFdGhlcmV1bSBQcm92aWRlciBOb3QgQ29ubmVjdGVkICg0OTAwKSBlcnJvci5cbiAgICAgICAgICovXG4gICAgICAgIGRpc2Nvbm5lY3RlZDogKGFyZykgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGdldEV0aFByb3ZpZGVyRXJyb3IoZXJyb3JfY29uc3RhbnRzXzEuZXJyb3JDb2Rlcy5wcm92aWRlci5kaXNjb25uZWN0ZWQsIGFyZyk7XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHZXQgYW4gRXRoZXJldW0gUHJvdmlkZXIgQ2hhaW4gTm90IENvbm5lY3RlZCAoNDkwMSkgZXJyb3IuXG4gICAgICAgICAqL1xuICAgICAgICBjaGFpbkRpc2Nvbm5lY3RlZDogKGFyZykgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGdldEV0aFByb3ZpZGVyRXJyb3IoZXJyb3JfY29uc3RhbnRzXzEuZXJyb3JDb2Rlcy5wcm92aWRlci5jaGFpbkRpc2Nvbm5lY3RlZCwgYXJnKTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdldCBhIGN1c3RvbSBFdGhlcmV1bSBQcm92aWRlciBlcnJvci5cbiAgICAgICAgICovXG4gICAgICAgIGN1c3RvbTogKG9wdHMpID0+IHtcbiAgICAgICAgICAgIGlmICghb3B0cyB8fCB0eXBlb2Ygb3B0cyAhPT0gJ29iamVjdCcgfHwgQXJyYXkuaXNBcnJheShvcHRzKSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRXRoZXJldW0gUHJvdmlkZXIgY3VzdG9tIGVycm9ycyBtdXN0IHByb3ZpZGUgc2luZ2xlIG9iamVjdCBhcmd1bWVudC4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHsgY29kZSwgbWVzc2FnZSwgZGF0YSB9ID0gb3B0cztcbiAgICAgICAgICAgIGlmICghbWVzc2FnZSB8fCB0eXBlb2YgbWVzc2FnZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1wibWVzc2FnZVwiIG11c3QgYmUgYSBub25lbXB0eSBzdHJpbmcnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBuZXcgY2xhc3Nlc18xLkV0aGVyZXVtUHJvdmlkZXJFcnJvcihjb2RlLCBtZXNzYWdlLCBkYXRhKTtcbiAgICAgICAgfSxcbiAgICB9LFxufTtcbi8vIEludGVybmFsXG5mdW5jdGlvbiBnZXRFdGhKc29uUnBjRXJyb3IoY29kZSwgYXJnKSB7XG4gICAgY29uc3QgW21lc3NhZ2UsIGRhdGFdID0gcGFyc2VPcHRzKGFyZyk7XG4gICAgcmV0dXJuIG5ldyBjbGFzc2VzXzEuRXRoZXJldW1ScGNFcnJvcihjb2RlLCBtZXNzYWdlIHx8IHV0aWxzXzEuZ2V0TWVzc2FnZUZyb21Db2RlKGNvZGUpLCBkYXRhKTtcbn1cbmZ1bmN0aW9uIGdldEV0aFByb3ZpZGVyRXJyb3IoY29kZSwgYXJnKSB7XG4gICAgY29uc3QgW21lc3NhZ2UsIGRhdGFdID0gcGFyc2VPcHRzKGFyZyk7XG4gICAgcmV0dXJuIG5ldyBjbGFzc2VzXzEuRXRoZXJldW1Qcm92aWRlckVycm9yKGNvZGUsIG1lc3NhZ2UgfHwgdXRpbHNfMS5nZXRNZXNzYWdlRnJvbUNvZGUoY29kZSksIGRhdGEpO1xufVxuZnVuY3Rpb24gcGFyc2VPcHRzKGFyZykge1xuICAgIGlmIChhcmcpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBhcmcgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICByZXR1cm4gW2FyZ107XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGFyZyA9PT0gJ29iamVjdCcgJiYgIUFycmF5LmlzQXJyYXkoYXJnKSkge1xuICAgICAgICAgICAgY29uc3QgeyBtZXNzYWdlLCBkYXRhIH0gPSBhcmc7XG4gICAgICAgICAgICBpZiAobWVzc2FnZSAmJiB0eXBlb2YgbWVzc2FnZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ011c3Qgc3BlY2lmeSBzdHJpbmcgbWVzc2FnZS4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBbbWVzc2FnZSB8fCB1bmRlZmluZWQsIGRhdGFdO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBbXTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVpYSnliM0p6TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2YzNKakwyVnljbTl5Y3k1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdRVUZCUVN4MVEwRkJiMFU3UVVGRGNFVXNiVU5CUVRaRE8wRkJRemRETEhWRVFVRXJRenRCUVdWc1F5eFJRVUZCTEZOQlFWTXNSMEZCUnp0SlFVTjJRaXhIUVVGSExFVkJRVVU3VVVGRlNEczdWMEZGUnp0UlFVTklMRXRCUVVzc1JVRkJSU3hEUVVGSkxFZEJRWEZDTEVWQlFVVXNSVUZCUlN4RFFVRkRMR3RDUVVGclFpeERRVU55UkN3MFFrRkJWU3hEUVVGRExFZEJRVWNzUTBGQlF5eExRVUZMTEVWQlFVVXNSMEZCUnl4RFFVTXhRanRSUVVWRU96dFhRVVZITzFGQlEwZ3NZMEZCWXl4RlFVRkZMRU5CUVVrc1IwRkJjVUlzUlVGQlJTeEZRVUZGTEVOQlFVTXNhMEpCUVd0Q0xFTkJRemxFTERSQ1FVRlZMRU5CUVVNc1IwRkJSeXhEUVVGRExHTkJRV01zUlVGQlJTeEhRVUZITEVOQlEyNURPMUZCUlVRN08xZEJSVWM3VVVGRFNDeGhRVUZoTEVWQlFVVXNRMEZCU1N4SFFVRnhRaXhGUVVGRkxFVkJRVVVzUTBGQlF5eHJRa0ZCYTBJc1EwRkROMFFzTkVKQlFWVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1lVRkJZU3hGUVVGRkxFZEJRVWNzUTBGRGJFTTdVVUZGUkRzN1YwRkZSenRSUVVOSUxHTkJRV01zUlVGQlJTeERRVUZKTEVkQlFYRkNMRVZCUVVVc1JVRkJSU3hEUVVGRExHdENRVUZyUWl4RFFVTTVSQ3cwUWtGQlZTeERRVUZETEVkQlFVY3NRMEZCUXl4alFVRmpMRVZCUVVVc1IwRkJSeXhEUVVOdVF6dFJRVVZFT3p0WFFVVkhPMUZCUTBnc1VVRkJVU3hGUVVGRkxFTkJRVWtzUjBGQmNVSXNSVUZCUlN4RlFVRkZMRU5CUVVNc2EwSkJRV3RDTEVOQlEzaEVMRFJDUVVGVkxFTkJRVU1zUjBGQlJ5eERRVUZETEZGQlFWRXNSVUZCUlN4SFFVRkhMRU5CUXpkQ08xRkJSVVE3T3pzN1YwRkpSenRSUVVOSUxFMUJRVTBzUlVGQlJTeERRVUZKTEVsQlFUSkNMRVZCUVVVc1JVRkJSVHRaUVVONlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4SlFVRkpMRTlCUVU4c1NVRkJTU3hMUVVGTExGRkJRVkVzU1VGQlNTeExRVUZMTEVOQlFVTXNUMEZCVHl4RFFVRkRMRWxCUVVrc1EwRkJReXhGUVVGRk8yZENRVU0xUkN4TlFVRk5MRWxCUVVrc1MwRkJTeXhEUVVGRExHbEZRVUZwUlN4RFFVRkRMRU5CUVVNN1lVRkRjRVk3V1VGRFJDeE5RVUZOTEVWQlFVVXNTVUZCU1N4RlFVRkZMRWRCUVVjc1NVRkJTU3hEUVVGRE8xbEJRM1JDTEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1UwRkJVeXhEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVsQlFVa3NSMEZCUnl4RFFVRkRMRXRCUVVzc1NVRkJTU3hKUVVGSkxFZEJRVWNzUTBGQlF5eExRVUZMTEVWQlFVVTdaMEpCUXpkRUxFMUJRVTBzU1VGQlNTeExRVUZMTEVOQlEySXNLMFJCUVN0RUxFTkJRMmhGTEVOQlFVTTdZVUZEU0R0WlFVTkVMRTlCUVU4c2EwSkJRV3RDTEVOQlFVTXNTVUZCU1N4RlFVRkZMRWxCUVVrc1EwRkJReXhEUVVGRE8xRkJRM2hETEVOQlFVTTdVVUZGUkRzN1YwRkZSenRSUVVOSUxGbEJRVmtzUlVGQlJTeERRVUZKTEVkQlFYRkNMRVZCUVVVc1JVRkJSU3hEUVVGRExHdENRVUZyUWl4RFFVTTFSQ3cwUWtGQlZTeERRVUZETEVkQlFVY3NRMEZCUXl4WlFVRlpMRVZCUVVVc1IwRkJSeXhEUVVOcVF6dFJRVVZFT3p0WFFVVkhPMUZCUTBnc1owSkJRV2RDTEVWQlFVVXNRMEZCU1N4SFFVRnhRaXhGUVVGRkxFVkJRVVVzUTBGQlF5eHJRa0ZCYTBJc1EwRkRhRVVzTkVKQlFWVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1owSkJRV2RDTEVWQlFVVXNSMEZCUnl4RFFVTnlRenRSUVVWRU96dFhRVVZITzFGQlEwZ3NiVUpCUVcxQ0xFVkJRVVVzUTBGQlNTeEhRVUZ4UWl4RlFVRkZMRVZCUVVVc1EwRkJReXhyUWtGQmEwSXNRMEZEYmtVc05FSkJRVlVzUTBGQlF5eEhRVUZITEVOQlFVTXNiVUpCUVcxQ0xFVkJRVVVzUjBGQlJ5eERRVU40UXp0UlFVVkVPenRYUVVWSE8xRkJRMGdzYlVKQlFXMUNMRVZCUVVVc1EwRkJTU3hIUVVGeFFpeEZRVUZGTEVWQlFVVXNRMEZCUXl4clFrRkJhMElzUTBGRGJrVXNORUpCUVZVc1EwRkJReXhIUVVGSExFTkJRVU1zYlVKQlFXMUNMRVZCUVVVc1IwRkJSeXhEUVVONFF6dFJRVVZFT3p0WFFVVkhPMUZCUTBnc2EwSkJRV3RDTEVWQlFVVXNRMEZCU1N4SFFVRnhRaXhGUVVGRkxFVkJRVVVzUTBGQlF5eHJRa0ZCYTBJc1EwRkRiRVVzTkVKQlFWVXNRMEZCUXl4SFFVRkhMRU5CUVVNc2EwSkJRV3RDTEVWQlFVVXNSMEZCUnl4RFFVTjJRenRSUVVWRU96dFhRVVZITzFGQlEwZ3NZVUZCWVN4RlFVRkZMRU5CUVVrc1IwRkJjVUlzUlVGQlJTeEZRVUZGTEVOQlFVTXNhMEpCUVd0Q0xFTkJRemRFTERSQ1FVRlZMRU5CUVVNc1IwRkJSeXhEUVVGRExHRkJRV0VzUlVGQlJTeEhRVUZITEVOQlEyeERPMHRCUTBZN1NVRkZSQ3hSUVVGUkxFVkJRVVU3VVVGRlVqczdWMEZGUnp0UlFVTklMRzFDUVVGdFFpeEZRVUZGTEVOQlFVa3NSMEZCY1VJc1JVRkJSU3hGUVVGRk8xbEJRMmhFTEU5QlFVOHNiVUpCUVcxQ0xFTkJRM2hDTERSQ1FVRlZMRU5CUVVNc1VVRkJVU3hEUVVGRExHMUNRVUZ0UWl4RlFVRkZMRWRCUVVjc1EwRkROME1zUTBGQlF6dFJRVU5LTEVOQlFVTTdVVUZGUkRzN1YwRkZSenRSUVVOSUxGbEJRVmtzUlVGQlJTeERRVUZKTEVkQlFYRkNMRVZCUVVVc1JVRkJSVHRaUVVONlF5eFBRVUZQTEcxQ1FVRnRRaXhEUVVONFFpdzBRa0ZCVlN4RFFVRkRMRkZCUVZFc1EwRkJReXhaUVVGWkxFVkJRVVVzUjBGQlJ5eERRVU4wUXl4RFFVRkRPMUZCUTBvc1EwRkJRenRSUVVWRU96dFhRVVZITzFGQlEwZ3NhVUpCUVdsQ0xFVkJRVVVzUTBGQlNTeEhRVUZ4UWl4RlFVRkZMRVZCUVVVN1dVRkRPVU1zVDBGQlR5eHRRa0ZCYlVJc1EwRkRlRUlzTkVKQlFWVXNRMEZCUXl4UlFVRlJMRU5CUVVNc2FVSkJRV2xDTEVWQlFVVXNSMEZCUnl4RFFVTXpReXhEUVVGRE8xRkJRMG9zUTBGQlF6dFJRVVZFT3p0WFFVVkhPMUZCUTBnc1dVRkJXU3hGUVVGRkxFTkJRVWtzUjBGQmNVSXNSVUZCUlN4RlFVRkZPMWxCUTNwRExFOUJRVThzYlVKQlFXMUNMRU5CUTNoQ0xEUkNRVUZWTEVOQlFVTXNVVUZCVVN4RFFVRkRMRmxCUVZrc1JVRkJSU3hIUVVGSExFTkJRM1JETEVOQlFVTTdVVUZEU2l4RFFVRkRPMUZCUlVRN08xZEJSVWM3VVVGRFNDeHBRa0ZCYVVJc1JVRkJSU3hEUVVGSkxFZEJRWEZDTEVWQlFVVXNSVUZCUlR0WlFVTTVReXhQUVVGUExHMUNRVUZ0UWl4RFFVTjRRaXcwUWtGQlZTeERRVUZETEZGQlFWRXNRMEZCUXl4cFFrRkJhVUlzUlVGQlJTeEhRVUZITEVOQlF6TkRMRU5CUVVNN1VVRkRTaXhEUVVGRE8xRkJSVVE3TzFkQlJVYzdVVUZEU0N4TlFVRk5MRVZCUVVVc1EwRkJTU3hKUVVGMVFpeEZRVUZGTEVWQlFVVTdXVUZEY2tNc1NVRkJTU3hEUVVGRExFbEJRVWtzU1VGQlNTeFBRVUZQTEVsQlFVa3NTMEZCU3l4UlFVRlJMRWxCUVVrc1MwRkJTeXhEUVVGRExFOUJRVThzUTBGQlF5eEpRVUZKTEVOQlFVTXNSVUZCUlR0blFrRkROVVFzVFVGQlRTeEpRVUZKTEV0QlFVc3NRMEZCUXl4elJVRkJjMFVzUTBGQlF5eERRVUZETzJGQlEzcEdPMWxCUlVRc1RVRkJUU3hGUVVGRkxFbEJRVWtzUlVGQlJTeFBRVUZQTEVWQlFVVXNTVUZCU1N4RlFVRkZMRWRCUVVjc1NVRkJTU3hEUVVGRE8xbEJSWEpETEVsQlFVa3NRMEZCUXl4UFFVRlBMRWxCUVVrc1QwRkJUeXhQUVVGUExFdEJRVXNzVVVGQlVTeEZRVUZGTzJkQ1FVTXpReXhOUVVGTkxFbEJRVWtzUzBGQlN5eERRVU5pTEhGRFFVRnhReXhEUVVOMFF5eERRVUZETzJGQlEwZzdXVUZEUkN4UFFVRlBMRWxCUVVrc0swSkJRWEZDTEVOQlFVTXNTVUZCU1N4RlFVRkZMRTlCUVU4c1JVRkJSU3hKUVVGSkxFTkJRVU1zUTBGQlF6dFJRVU40UkN4RFFVRkRPMHRCUTBZN1EwRkRSaXhEUVVGRE8wRkJSVVlzVjBGQlZ6dEJRVVZZTEZOQlFWTXNhMEpCUVd0Q0xFTkJRVWtzU1VGQldTeEZRVUZGTEVkQlFYRkNPMGxCUTJoRkxFMUJRVTBzUTBGQlF5eFBRVUZQTEVWQlFVVXNTVUZCU1N4RFFVRkRMRWRCUVVjc1UwRkJVeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzBsQlEzWkRMRTlCUVU4c1NVRkJTU3d3UWtGQlowSXNRMEZEZWtJc1NVRkJTU3hGUVVOS0xFOUJRVThzU1VGQlNTd3dRa0ZCYTBJc1EwRkJReXhKUVVGSkxFTkJRVU1zUlVGRGJrTXNTVUZCU1N4RFFVTk1MRU5CUVVNN1FVRkRTaXhEUVVGRE8wRkJSVVFzVTBGQlV5eHRRa0ZCYlVJc1EwRkJTU3hKUVVGWkxFVkJRVVVzUjBGQmNVSTdTVUZEYWtVc1RVRkJUU3hEUVVGRExFOUJRVThzUlVGQlJTeEpRVUZKTEVOQlFVTXNSMEZCUnl4VFFVRlRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03U1VGRGRrTXNUMEZCVHl4SlFVRkpMQ3RDUVVGeFFpeERRVU01UWl4SlFVRkpMRVZCUTBvc1QwRkJUeXhKUVVGSkxEQkNRVUZyUWl4RFFVRkRMRWxCUVVrc1EwRkJReXhGUVVOdVF5eEpRVUZKTEVOQlEwd3NRMEZCUXp0QlFVTktMRU5CUVVNN1FVRkZSQ3hUUVVGVExGTkJRVk1zUTBGQlNTeEhRVUZ4UWp0SlFVTjZReXhKUVVGSkxFZEJRVWNzUlVGQlJUdFJRVU5RTEVsQlFVa3NUMEZCVHl4SFFVRkhMRXRCUVVzc1VVRkJVU3hGUVVGRk8xbEJRek5DTEU5QlFVOHNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRUUVVOa08yRkJRVTBzU1VGQlNTeFBRVUZQTEVkQlFVY3NTMEZCU3l4UlFVRlJMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zVDBGQlR5eERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZPMWxCUTNwRUxFMUJRVTBzUlVGQlJTeFBRVUZQTEVWQlFVVXNTVUZCU1N4RlFVRkZMRWRCUVVjc1IwRkJSeXhEUVVGRE8xbEJSVGxDTEVsQlFVa3NUMEZCVHl4SlFVRkpMRTlCUVU4c1QwRkJUeXhMUVVGTExGRkJRVkVzUlVGQlJUdG5Ra0ZETVVNc1RVRkJUU3hKUVVGSkxFdEJRVXNzUTBGQlF5dzRRa0ZCT0VJc1EwRkJReXhEUVVGRE8yRkJRMnBFTzFsQlEwUXNUMEZCVHl4RFFVRkRMRTlCUVU4c1NVRkJTU3hUUVVGVExFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVTTdVMEZEY2tNN1MwRkRSanRKUVVORUxFOUJRVThzUlVGQlJTeERRVUZETzBGQlExb3NRMEZCUXlKOSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5nZXRNZXNzYWdlRnJvbUNvZGUgPSBleHBvcnRzLnNlcmlhbGl6ZUVycm9yID0gZXhwb3J0cy5FdGhlcmV1bVByb3ZpZGVyRXJyb3IgPSBleHBvcnRzLkV0aGVyZXVtUnBjRXJyb3IgPSBleHBvcnRzLmV0aEVycm9ycyA9IGV4cG9ydHMuZXJyb3JDb2RlcyA9IHZvaWQgMDtcbmNvbnN0IGNsYXNzZXNfMSA9IHJlcXVpcmUoXCIuL2NsYXNzZXNcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJFdGhlcmV1bVJwY0Vycm9yXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBjbGFzc2VzXzEuRXRoZXJldW1ScGNFcnJvcjsgfSB9KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkV0aGVyZXVtUHJvdmlkZXJFcnJvclwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gY2xhc3Nlc18xLkV0aGVyZXVtUHJvdmlkZXJFcnJvcjsgfSB9KTtcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi91dGlsc1wiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInNlcmlhbGl6ZUVycm9yXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB1dGlsc18xLnNlcmlhbGl6ZUVycm9yOyB9IH0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiZ2V0TWVzc2FnZUZyb21Db2RlXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB1dGlsc18xLmdldE1lc3NhZ2VGcm9tQ29kZTsgfSB9KTtcbmNvbnN0IGVycm9yc18xID0gcmVxdWlyZShcIi4vZXJyb3JzXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiZXRoRXJyb3JzXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBlcnJvcnNfMS5ldGhFcnJvcnM7IH0gfSk7XG5jb25zdCBlcnJvcl9jb25zdGFudHNfMSA9IHJlcXVpcmUoXCIuL2Vycm9yLWNvbnN0YW50c1wiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImVycm9yQ29kZXNcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGVycm9yX2NvbnN0YW50c18xLmVycm9yQ29kZXM7IH0gfSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lhVzVrWlhndWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk5emNtTXZhVzVrWlhndWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPMEZCUVVFc2RVTkJRVzlGTzBGQlZXeEZMR2xIUVZaUExEQkNRVUZuUWl4UFFWVlFPMEZCUTJoQ0xITkhRVmg1UWl3clFrRkJjVUlzVDBGWGVrSTdRVUZXZGtJc2JVTkJSV2xDTzBGQlUyWXNLMFpCVmtFc2MwSkJRV01zVDBGVlFUdEJRVU5rTEcxSFFWaG5RaXd3UWtGQmEwSXNUMEZYYUVJN1FVRlVjRUlzY1VOQlFYRkRPMEZCUzI1RExEQkdRVXhQTEd0Q1FVRlRMRTlCUzFBN1FVRktXQ3gxUkVGQkswTTdRVUZITjBNc01rWkJTRThzTkVKQlFWVXNUMEZIVUNKOSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5zZXJpYWxpemVFcnJvciA9IGV4cG9ydHMuaXNWYWxpZENvZGUgPSBleHBvcnRzLmdldE1lc3NhZ2VGcm9tQ29kZSA9IGV4cG9ydHMuSlNPTl9SUENfU0VSVkVSX0VSUk9SX01FU1NBR0UgPSB2b2lkIDA7XG5jb25zdCBlcnJvcl9jb25zdGFudHNfMSA9IHJlcXVpcmUoXCIuL2Vycm9yLWNvbnN0YW50c1wiKTtcbmNvbnN0IGNsYXNzZXNfMSA9IHJlcXVpcmUoXCIuL2NsYXNzZXNcIik7XG5jb25zdCBGQUxMQkFDS19FUlJPUl9DT0RFID0gZXJyb3JfY29uc3RhbnRzXzEuZXJyb3JDb2Rlcy5ycGMuaW50ZXJuYWw7XG5jb25zdCBGQUxMQkFDS19NRVNTQUdFID0gJ1Vuc3BlY2lmaWVkIGVycm9yIG1lc3NhZ2UuIFRoaXMgaXMgYSBidWcsIHBsZWFzZSByZXBvcnQgaXQuJztcbmNvbnN0IEZBTExCQUNLX0VSUk9SID0ge1xuICAgIGNvZGU6IEZBTExCQUNLX0VSUk9SX0NPREUsXG4gICAgbWVzc2FnZTogZ2V0TWVzc2FnZUZyb21Db2RlKEZBTExCQUNLX0VSUk9SX0NPREUpLFxufTtcbmV4cG9ydHMuSlNPTl9SUENfU0VSVkVSX0VSUk9SX01FU1NBR0UgPSAnVW5zcGVjaWZpZWQgc2VydmVyIGVycm9yLic7XG4vKipcbiAqIEdldHMgdGhlIG1lc3NhZ2UgZm9yIGEgZ2l2ZW4gY29kZSwgb3IgYSBmYWxsYmFjayBtZXNzYWdlIGlmIHRoZSBjb2RlIGhhc1xuICogbm8gY29ycmVzcG9uZGluZyBtZXNzYWdlLlxuICovXG5mdW5jdGlvbiBnZXRNZXNzYWdlRnJvbUNvZGUoY29kZSwgZmFsbGJhY2tNZXNzYWdlID0gRkFMTEJBQ0tfTUVTU0FHRSkge1xuICAgIGlmIChOdW1iZXIuaXNJbnRlZ2VyKGNvZGUpKSB7XG4gICAgICAgIGNvbnN0IGNvZGVTdHJpbmcgPSBjb2RlLnRvU3RyaW5nKCk7XG4gICAgICAgIGlmIChoYXNLZXkoZXJyb3JfY29uc3RhbnRzXzEuZXJyb3JWYWx1ZXMsIGNvZGVTdHJpbmcpKSB7XG4gICAgICAgICAgICByZXR1cm4gZXJyb3JfY29uc3RhbnRzXzEuZXJyb3JWYWx1ZXNbY29kZVN0cmluZ10ubWVzc2FnZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNKc29uUnBjU2VydmVyRXJyb3IoY29kZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBleHBvcnRzLkpTT05fUlBDX1NFUlZFUl9FUlJPUl9NRVNTQUdFO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxsYmFja01lc3NhZ2U7XG59XG5leHBvcnRzLmdldE1lc3NhZ2VGcm9tQ29kZSA9IGdldE1lc3NhZ2VGcm9tQ29kZTtcbi8qKlxuICogUmV0dXJucyB3aGV0aGVyIHRoZSBnaXZlbiBjb2RlIGlzIHZhbGlkLlxuICogQSBjb2RlIGlzIG9ubHkgdmFsaWQgaWYgaXQgaGFzIGEgbWVzc2FnZS5cbiAqL1xuZnVuY3Rpb24gaXNWYWxpZENvZGUoY29kZSkge1xuICAgIGlmICghTnVtYmVyLmlzSW50ZWdlcihjb2RlKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvbnN0IGNvZGVTdHJpbmcgPSBjb2RlLnRvU3RyaW5nKCk7XG4gICAgaWYgKGVycm9yX2NvbnN0YW50c18xLmVycm9yVmFsdWVzW2NvZGVTdHJpbmddKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAoaXNKc29uUnBjU2VydmVyRXJyb3IoY29kZSkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cbmV4cG9ydHMuaXNWYWxpZENvZGUgPSBpc1ZhbGlkQ29kZTtcbi8qKlxuICogU2VyaWFsaXplcyB0aGUgZ2l2ZW4gZXJyb3IgdG8gYW4gRXRoZXJldW0gSlNPTiBSUEMtY29tcGF0aWJsZSBlcnJvciBvYmplY3QuXG4gKiBNZXJlbHkgY29waWVzIHRoZSBnaXZlbiBlcnJvcidzIHZhbHVlcyBpZiBpdCBpcyBhbHJlYWR5IGNvbXBhdGlibGUuXG4gKiBJZiB0aGUgZ2l2ZW4gZXJyb3IgaXMgbm90IGZ1bGx5IGNvbXBhdGlibGUsIGl0IHdpbGwgYmUgcHJlc2VydmVkIG9uIHRoZVxuICogcmV0dXJuZWQgb2JqZWN0J3MgZGF0YS5vcmlnaW5hbEVycm9yIHByb3BlcnR5LlxuICovXG5mdW5jdGlvbiBzZXJpYWxpemVFcnJvcihlcnJvciwgeyBmYWxsYmFja0Vycm9yID0gRkFMTEJBQ0tfRVJST1IsIHNob3VsZEluY2x1ZGVTdGFjayA9IGZhbHNlLCB9ID0ge30pIHtcbiAgICB2YXIgX2EsIF9iO1xuICAgIGlmICghZmFsbGJhY2tFcnJvciB8fFxuICAgICAgICAhTnVtYmVyLmlzSW50ZWdlcihmYWxsYmFja0Vycm9yLmNvZGUpIHx8XG4gICAgICAgIHR5cGVvZiBmYWxsYmFja0Vycm9yLm1lc3NhZ2UgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTXVzdCBwcm92aWRlIGZhbGxiYWNrIGVycm9yIHdpdGggaW50ZWdlciBudW1iZXIgY29kZSBhbmQgc3RyaW5nIG1lc3NhZ2UuJyk7XG4gICAgfVxuICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIGNsYXNzZXNfMS5FdGhlcmV1bVJwY0Vycm9yKSB7XG4gICAgICAgIHJldHVybiBlcnJvci5zZXJpYWxpemUoKTtcbiAgICB9XG4gICAgY29uc3Qgc2VyaWFsaXplZCA9IHt9O1xuICAgIGlmIChlcnJvciAmJlxuICAgICAgICB0eXBlb2YgZXJyb3IgPT09ICdvYmplY3QnICYmXG4gICAgICAgICFBcnJheS5pc0FycmF5KGVycm9yKSAmJlxuICAgICAgICBoYXNLZXkoZXJyb3IsICdjb2RlJykgJiZcbiAgICAgICAgaXNWYWxpZENvZGUoZXJyb3IuY29kZSkpIHtcbiAgICAgICAgY29uc3QgX2Vycm9yID0gZXJyb3I7XG4gICAgICAgIHNlcmlhbGl6ZWQuY29kZSA9IF9lcnJvci5jb2RlO1xuICAgICAgICBpZiAoX2Vycm9yLm1lc3NhZ2UgJiYgdHlwZW9mIF9lcnJvci5tZXNzYWdlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgc2VyaWFsaXplZC5tZXNzYWdlID0gX2Vycm9yLm1lc3NhZ2U7XG4gICAgICAgICAgICBpZiAoaGFzS2V5KF9lcnJvciwgJ2RhdGEnKSkge1xuICAgICAgICAgICAgICAgIHNlcmlhbGl6ZWQuZGF0YSA9IF9lcnJvci5kYXRhO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc2VyaWFsaXplZC5tZXNzYWdlID0gZ2V0TWVzc2FnZUZyb21Db2RlKHNlcmlhbGl6ZWQuY29kZSk7XG4gICAgICAgICAgICBzZXJpYWxpemVkLmRhdGEgPSB7IG9yaWdpbmFsRXJyb3I6IGFzc2lnbk9yaWdpbmFsRXJyb3IoZXJyb3IpIH07XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHNlcmlhbGl6ZWQuY29kZSA9IGZhbGxiYWNrRXJyb3IuY29kZTtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IChfYSA9IGVycm9yKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EubWVzc2FnZTtcbiAgICAgICAgc2VyaWFsaXplZC5tZXNzYWdlID0gKG1lc3NhZ2UgJiYgdHlwZW9mIG1lc3NhZ2UgPT09ICdzdHJpbmcnXG4gICAgICAgICAgICA/IG1lc3NhZ2VcbiAgICAgICAgICAgIDogZmFsbGJhY2tFcnJvci5tZXNzYWdlKTtcbiAgICAgICAgc2VyaWFsaXplZC5kYXRhID0geyBvcmlnaW5hbEVycm9yOiBhc3NpZ25PcmlnaW5hbEVycm9yKGVycm9yKSB9O1xuICAgIH1cbiAgICBjb25zdCBzdGFjayA9IChfYiA9IGVycm9yKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Iuc3RhY2s7XG4gICAgaWYgKHNob3VsZEluY2x1ZGVTdGFjayAmJiBlcnJvciAmJiBzdGFjayAmJiB0eXBlb2Ygc3RhY2sgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHNlcmlhbGl6ZWQuc3RhY2sgPSBzdGFjaztcbiAgICB9XG4gICAgcmV0dXJuIHNlcmlhbGl6ZWQ7XG59XG5leHBvcnRzLnNlcmlhbGl6ZUVycm9yID0gc2VyaWFsaXplRXJyb3I7XG4vLyBJbnRlcm5hbFxuZnVuY3Rpb24gaXNKc29uUnBjU2VydmVyRXJyb3IoY29kZSkge1xuICAgIHJldHVybiBjb2RlID49IC0zMjA5OSAmJiBjb2RlIDw9IC0zMjAwMDtcbn1cbmZ1bmN0aW9uIGFzc2lnbk9yaWdpbmFsRXJyb3IoZXJyb3IpIHtcbiAgICBpZiAoZXJyb3IgJiYgdHlwZW9mIGVycm9yID09PSAnb2JqZWN0JyAmJiAhQXJyYXkuaXNBcnJheShlcnJvcikpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGVycm9yKTtcbiAgICB9XG4gICAgcmV0dXJuIGVycm9yO1xufVxuZnVuY3Rpb24gaGFzS2V5KG9iaiwga2V5KSB7XG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lkWFJwYkhNdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk5emNtTXZkWFJwYkhNdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPMEZCUVVFc2RVUkJRVFJFTzBGQlF6VkVMSFZEUVVGNVJUdEJRVVY2UlN4TlFVRk5MRzFDUVVGdFFpeEhRVUZITERSQ1FVRlZMRU5CUVVNc1IwRkJSeXhEUVVGRExGRkJRVkVzUTBGQlF6dEJRVU53UkN4TlFVRk5MR2RDUVVGblFpeEhRVUZITERaRVFVRTJSQ3hEUVVGRE8wRkJRM1pHTEUxQlFVMHNZMEZCWXl4SFFVRXJRanRKUVVOcVJDeEpRVUZKTEVWQlFVVXNiVUpCUVcxQ08wbEJRM3BDTEU5QlFVOHNSVUZCUlN4clFrRkJhMElzUTBGQlF5eHRRa0ZCYlVJc1EwRkJRenREUVVOcVJDeERRVUZETzBGQlJWY3NVVUZCUVN3MlFrRkJOa0lzUjBGQlJ5d3lRa0ZCTWtJc1EwRkJRenRCUVVsNlJUczdPMGRCUjBjN1FVRkRTQ3hUUVVGblFpeHJRa0ZCYTBJc1EwRkRhRU1zU1VGQldTeEZRVU5hTEd0Q1FVRXdRaXhuUWtGQlowSTdTVUZGTVVNc1NVRkJTU3hOUVVGTkxFTkJRVU1zVTBGQlV5eERRVUZETEVsQlFVa3NRMEZCUXl4RlFVRkZPMUZCUXpGQ0xFMUJRVTBzVlVGQlZTeEhRVUZITEVsQlFVa3NRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJRenRSUVVWdVF5eEpRVUZKTEUxQlFVMHNRMEZCUXl3MlFrRkJWeXhGUVVGRkxGVkJRVlVzUTBGQlF5eEZRVUZGTzFsQlEyNURMRTlCUVU4c05rSkJRVmNzUTBGQlF5eFZRVUV5UWl4RFFVRkRMRU5CUVVNc1QwRkJUeXhEUVVGRE8xTkJRM3BFTzFGQlEwUXNTVUZCU1N4dlFrRkJiMElzUTBGQlF5eEpRVUZKTEVOQlFVTXNSVUZCUlR0WlFVTTVRaXhQUVVGUExIRkRRVUUyUWl4RFFVRkRPMU5CUTNSRE8wdEJRMFk3U1VGRFJDeFBRVUZQTEdWQlFXVXNRMEZCUXp0QlFVTjZRaXhEUVVGRE8wRkJaa1FzWjBSQlpVTTdRVUZGUkRzN08wZEJSMGM3UVVGRFNDeFRRVUZuUWl4WFFVRlhMRU5CUVVNc1NVRkJXVHRKUVVOMFF5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRk5CUVZNc1EwRkJReXhKUVVGSkxFTkJRVU1zUlVGQlJUdFJRVU16UWl4UFFVRlBMRXRCUVVzc1EwRkJRenRMUVVOa08wbEJSVVFzVFVGQlRTeFZRVUZWTEVkQlFVY3NTVUZCU1N4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRE8wbEJRMjVETEVsQlFVa3NOa0pCUVZjc1EwRkJReXhWUVVFeVFpeERRVUZETEVWQlFVVTdVVUZETlVNc1QwRkJUeXhKUVVGSkxFTkJRVU03UzBGRFlqdEpRVVZFTEVsQlFVa3NiMEpCUVc5Q0xFTkJRVU1zU1VGQlNTeERRVUZETEVWQlFVVTdVVUZET1VJc1QwRkJUeXhKUVVGSkxFTkJRVU03UzBGRFlqdEpRVU5FTEU5QlFVOHNTMEZCU3l4RFFVRkRPMEZCUTJZc1EwRkJRenRCUVdSRUxHdERRV05ETzBGQlJVUTdPenM3TzBkQlMwYzdRVUZEU0N4VFFVRm5RaXhqUVVGakxFTkJRelZDTEV0QlFXTXNSVUZEWkN4RlFVTkZMR0ZCUVdFc1IwRkJSeXhqUVVGakxFVkJRemxDTEd0Q1FVRnJRaXhIUVVGSExFdEJRVXNzUjBGRE0wSXNSMEZCUnl4RlFVRkZPenRKUVVkT0xFbEJRMFVzUTBGQlF5eGhRVUZoTzFGQlEyUXNRMEZCUXl4TlFVRk5MRU5CUVVNc1UwRkJVeXhEUVVGRExHRkJRV0VzUTBGQlF5eEpRVUZKTEVOQlFVTTdVVUZEY2tNc1QwRkJUeXhoUVVGaExFTkJRVU1zVDBGQlR5eExRVUZMTEZGQlFWRXNSVUZEZWtNN1VVRkRRU3hOUVVGTkxFbEJRVWtzUzBGQlN5eERRVU5pTERCRlFVRXdSU3hEUVVNelJTeERRVUZETzB0QlEwZzdTVUZGUkN4SlFVRkpMRXRCUVVzc1dVRkJXU3d3UWtGQlowSXNSVUZCUlR0UlFVTnlReXhQUVVGUExFdEJRVXNzUTBGQlF5eFRRVUZUTEVWQlFVVXNRMEZCUXp0TFFVTXhRanRKUVVWRUxFMUJRVTBzVlVGQlZTeEhRVUYzUXl4RlFVRkZMRU5CUVVNN1NVRkZNMFFzU1VGRFJTeExRVUZMTzFGQlEwd3NUMEZCVHl4TFFVRkxMRXRCUVVzc1VVRkJVVHRSUVVONlFpeERRVUZETEV0QlFVc3NRMEZCUXl4UFFVRlBMRU5CUVVNc1MwRkJTeXhEUVVGRE8xRkJRM0pDTEUxQlFVMHNRMEZCUXl4TFFVRm5ReXhGUVVGRkxFMUJRVTBzUTBGQlF6dFJRVU5vUkN4WFFVRlhMRU5CUVVVc1MwRkJiME1zUTBGQlF5eEpRVUZKTEVOQlFVTXNSVUZEZGtRN1VVRkRRU3hOUVVGTkxFMUJRVTBzUjBGQlJ5eExRVUUwUXl4RFFVRkRPMUZCUXpWRUxGVkJRVlVzUTBGQlF5eEpRVUZKTEVkQlFVY3NUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJRenRSUVVVNVFpeEpRVUZKTEUxQlFVMHNRMEZCUXl4UFFVRlBMRWxCUVVrc1QwRkJUeXhOUVVGTkxFTkJRVU1zVDBGQlR5eExRVUZMTEZGQlFWRXNSVUZCUlR0WlFVTjRSQ3hWUVVGVkxFTkJRVU1zVDBGQlR5eEhRVUZITEUxQlFVMHNRMEZCUXl4UFFVRlBMRU5CUVVNN1dVRkZjRU1zU1VGQlNTeE5RVUZOTEVOQlFVTXNUVUZCVFN4RlFVRkZMRTFCUVUwc1EwRkJReXhGUVVGRk8yZENRVU14UWl4VlFVRlZMRU5CUVVNc1NVRkJTU3hIUVVGSExFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTTdZVUZETDBJN1UwRkRSanRoUVVGTk8xbEJRMHdzVlVGQlZTeERRVUZETEU5QlFVOHNSMEZCUnl4clFrRkJhMElzUTBGRGNFTXNWVUZCZVVNc1EwRkJReXhKUVVGSkxFTkJRMmhFTEVOQlFVTTdXVUZGUml4VlFVRlZMRU5CUVVNc1NVRkJTU3hIUVVGSExFVkJRVVVzWVVGQllTeEZRVUZGTEcxQ1FVRnRRaXhEUVVGRExFdEJRVXNzUTBGQlF5eEZRVUZGTEVOQlFVTTdVMEZEYWtVN1MwRkRSanRUUVVGTk8xRkJRMHdzVlVGQlZTeERRVUZETEVsQlFVa3NSMEZCUnl4aFFVRmhMRU5CUVVNc1NVRkJTU3hEUVVGRE8xRkJSWEpETEUxQlFVMHNUMEZCVHl4VFFVRkpMRXRCUVdFc01FTkJRVVVzVDBGQlR5eERRVUZETzFGQlJYaERMRlZCUVZVc1EwRkJReXhQUVVGUExFZEJRVWNzUTBGRGJrSXNUMEZCVHl4SlFVRkpMRTlCUVU4c1QwRkJUeXhMUVVGTExGRkJRVkU3V1VGRGNFTXNRMEZCUXl4RFFVRkRMRTlCUVU4N1dVRkRWQ3hEUVVGRExFTkJRVU1zWVVGQllTeERRVUZETEU5QlFVOHNRMEZETVVJc1EwRkJRenRSUVVOR0xGVkJRVlVzUTBGQlF5eEpRVUZKTEVkQlFVY3NSVUZCUlN4aFFVRmhMRVZCUVVVc2JVSkJRVzFDTEVOQlFVTXNTMEZCU3l4RFFVRkRMRVZCUVVVc1EwRkJRenRMUVVOcVJUdEpRVVZFTEUxQlFVMHNTMEZCU3l4VFFVRkpMRXRCUVdFc01FTkJRVVVzUzBGQlN5eERRVUZETzBsQlJYQkRMRWxCUVVrc2EwSkJRV3RDTEVsQlFVa3NTMEZCU3l4SlFVRkpMRXRCUVVzc1NVRkJTU3hQUVVGUExFdEJRVXNzUzBGQlN5eFJRVUZSTEVWQlFVVTdVVUZEY2tVc1ZVRkJWU3hEUVVGRExFdEJRVXNzUjBGQlJ5eExRVUZMTEVOQlFVTTdTMEZETVVJN1NVRkRSQ3hQUVVGUExGVkJRWGRETEVOQlFVTTdRVUZEYkVRc1EwRkJRenRCUVd4RlJDeDNRMEZyUlVNN1FVRkZSQ3hYUVVGWE8wRkJSVmdzVTBGQlV5eHZRa0ZCYjBJc1EwRkJReXhKUVVGWk8wbEJRM2hETEU5QlFVOHNTVUZCU1N4SlFVRkpMRU5CUVVNc1MwRkJTeXhKUVVGSkxFbEJRVWtzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXp0QlFVTXhReXhEUVVGRE8wRkJSVVFzVTBGQlV5eHRRa0ZCYlVJc1EwRkJReXhMUVVGak8wbEJRM3BETEVsQlFVa3NTMEZCU3l4SlFVRkpMRTlCUVU4c1MwRkJTeXhMUVVGTExGRkJRVkVzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4UFFVRlBMRU5CUVVNc1MwRkJTeXhEUVVGRExFVkJRVVU3VVVGREwwUXNUMEZCVHl4TlFVRk5MRU5CUVVNc1RVRkJUU3hEUVVGRExFVkJRVVVzUlVGQlJTeExRVUZMTEVOQlFVTXNRMEZCUXp0TFFVTnFRenRKUVVORUxFOUJRVThzUzBGQlN5eERRVUZETzBGQlEyWXNRMEZCUXp0QlFVVkVMRk5CUVZNc1RVRkJUU3hEUVVGRExFZEJRVFJDTEVWQlFVVXNSMEZCVnp0SlFVTjJSQ3hQUVVGUExFMUJRVTBzUTBGQlF5eFRRVUZUTEVOQlFVTXNZMEZCWXl4RFFVRkRMRWxCUVVrc1EwRkJReXhIUVVGSExFVkJRVVVzUjBGQlJ5eERRVUZETEVOQlFVTTdRVUZEZUVRc1EwRkJReUo5IiwiLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFIgPSB0eXBlb2YgUmVmbGVjdCA9PT0gJ29iamVjdCcgPyBSZWZsZWN0IDogbnVsbFxudmFyIFJlZmxlY3RBcHBseSA9IFIgJiYgdHlwZW9mIFIuYXBwbHkgPT09ICdmdW5jdGlvbidcbiAgPyBSLmFwcGx5XG4gIDogZnVuY3Rpb24gUmVmbGVjdEFwcGx5KHRhcmdldCwgcmVjZWl2ZXIsIGFyZ3MpIHtcbiAgICByZXR1cm4gRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5LmNhbGwodGFyZ2V0LCByZWNlaXZlciwgYXJncyk7XG4gIH1cblxudmFyIFJlZmxlY3RPd25LZXlzXG5pZiAoUiAmJiB0eXBlb2YgUi5vd25LZXlzID09PSAnZnVuY3Rpb24nKSB7XG4gIFJlZmxlY3RPd25LZXlzID0gUi5vd25LZXlzXG59IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgUmVmbGVjdE93bktleXMgPSBmdW5jdGlvbiBSZWZsZWN0T3duS2V5cyh0YXJnZXQpIHtcbiAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGFyZ2V0KVxuICAgICAgLmNvbmNhdChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHRhcmdldCkpO1xuICB9O1xufSBlbHNlIHtcbiAgUmVmbGVjdE93bktleXMgPSBmdW5jdGlvbiBSZWZsZWN0T3duS2V5cyh0YXJnZXQpIHtcbiAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGFyZ2V0KTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gUHJvY2Vzc0VtaXRXYXJuaW5nKHdhcm5pbmcpIHtcbiAgaWYgKGNvbnNvbGUgJiYgY29uc29sZS53YXJuKSBjb25zb2xlLndhcm4od2FybmluZyk7XG59XG5cbnZhciBOdW1iZXJJc05hTiA9IE51bWJlci5pc05hTiB8fCBmdW5jdGlvbiBOdW1iZXJJc05hTih2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT09IHZhbHVlO1xufVxuXG5mdW5jdGlvbiBFdmVudEVtaXR0ZXIoKSB7XG4gIEV2ZW50RW1pdHRlci5pbml0LmNhbGwodGhpcyk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IEV2ZW50RW1pdHRlcjtcbm1vZHVsZS5leHBvcnRzLm9uY2UgPSBvbmNlO1xuXG4vLyBCYWNrd2FyZHMtY29tcGF0IHdpdGggbm9kZSAwLjEwLnhcbkV2ZW50RW1pdHRlci5FdmVudEVtaXR0ZXIgPSBFdmVudEVtaXR0ZXI7XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuX2V2ZW50cyA9IHVuZGVmaW5lZDtcbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuX2V2ZW50c0NvdW50ID0gMDtcbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuX21heExpc3RlbmVycyA9IHVuZGVmaW5lZDtcblxuLy8gQnkgZGVmYXVsdCBFdmVudEVtaXR0ZXJzIHdpbGwgcHJpbnQgYSB3YXJuaW5nIGlmIG1vcmUgdGhhbiAxMCBsaXN0ZW5lcnMgYXJlXG4vLyBhZGRlZCB0byBpdC4gVGhpcyBpcyBhIHVzZWZ1bCBkZWZhdWx0IHdoaWNoIGhlbHBzIGZpbmRpbmcgbWVtb3J5IGxlYWtzLlxudmFyIGRlZmF1bHRNYXhMaXN0ZW5lcnMgPSAxMDtcblxuZnVuY3Rpb24gY2hlY2tMaXN0ZW5lcihsaXN0ZW5lcikge1xuICBpZiAodHlwZW9mIGxpc3RlbmVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIFwibGlzdGVuZXJcIiBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgRnVuY3Rpb24uIFJlY2VpdmVkIHR5cGUgJyArIHR5cGVvZiBsaXN0ZW5lcik7XG4gIH1cbn1cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KEV2ZW50RW1pdHRlciwgJ2RlZmF1bHRNYXhMaXN0ZW5lcnMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGRlZmF1bHRNYXhMaXN0ZW5lcnM7XG4gIH0sXG4gIHNldDogZnVuY3Rpb24oYXJnKSB7XG4gICAgaWYgKHR5cGVvZiBhcmcgIT09ICdudW1iZXInIHx8IGFyZyA8IDAgfHwgTnVtYmVySXNOYU4oYXJnKSkge1xuICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1RoZSB2YWx1ZSBvZiBcImRlZmF1bHRNYXhMaXN0ZW5lcnNcIiBpcyBvdXQgb2YgcmFuZ2UuIEl0IG11c3QgYmUgYSBub24tbmVnYXRpdmUgbnVtYmVyLiBSZWNlaXZlZCAnICsgYXJnICsgJy4nKTtcbiAgICB9XG4gICAgZGVmYXVsdE1heExpc3RlbmVycyA9IGFyZztcbiAgfVxufSk7XG5cbkV2ZW50RW1pdHRlci5pbml0ID0gZnVuY3Rpb24oKSB7XG5cbiAgaWYgKHRoaXMuX2V2ZW50cyA9PT0gdW5kZWZpbmVkIHx8XG4gICAgICB0aGlzLl9ldmVudHMgPT09IE9iamVjdC5nZXRQcm90b3R5cGVPZih0aGlzKS5fZXZlbnRzKSB7XG4gICAgdGhpcy5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICB0aGlzLl9ldmVudHNDb3VudCA9IDA7XG4gIH1cblxuICB0aGlzLl9tYXhMaXN0ZW5lcnMgPSB0aGlzLl9tYXhMaXN0ZW5lcnMgfHwgdW5kZWZpbmVkO1xufTtcblxuLy8gT2J2aW91c2x5IG5vdCBhbGwgRW1pdHRlcnMgc2hvdWxkIGJlIGxpbWl0ZWQgdG8gMTAuIFRoaXMgZnVuY3Rpb24gYWxsb3dzXG4vLyB0aGF0IHRvIGJlIGluY3JlYXNlZC4gU2V0IHRvIHplcm8gZm9yIHVubGltaXRlZC5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuc2V0TWF4TGlzdGVuZXJzID0gZnVuY3Rpb24gc2V0TWF4TGlzdGVuZXJzKG4pIHtcbiAgaWYgKHR5cGVvZiBuICE9PSAnbnVtYmVyJyB8fCBuIDwgMCB8fCBOdW1iZXJJc05hTihuKSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdUaGUgdmFsdWUgb2YgXCJuXCIgaXMgb3V0IG9mIHJhbmdlLiBJdCBtdXN0IGJlIGEgbm9uLW5lZ2F0aXZlIG51bWJlci4gUmVjZWl2ZWQgJyArIG4gKyAnLicpO1xuICB9XG4gIHRoaXMuX21heExpc3RlbmVycyA9IG47XG4gIHJldHVybiB0aGlzO1xufTtcblxuZnVuY3Rpb24gX2dldE1heExpc3RlbmVycyh0aGF0KSB7XG4gIGlmICh0aGF0Ll9tYXhMaXN0ZW5lcnMgPT09IHVuZGVmaW5lZClcbiAgICByZXR1cm4gRXZlbnRFbWl0dGVyLmRlZmF1bHRNYXhMaXN0ZW5lcnM7XG4gIHJldHVybiB0aGF0Ll9tYXhMaXN0ZW5lcnM7XG59XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuZ2V0TWF4TGlzdGVuZXJzID0gZnVuY3Rpb24gZ2V0TWF4TGlzdGVuZXJzKCkge1xuICByZXR1cm4gX2dldE1heExpc3RlbmVycyh0aGlzKTtcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuZW1pdCA9IGZ1bmN0aW9uIGVtaXQodHlwZSkge1xuICB2YXIgYXJncyA9IFtdO1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgYXJncy5wdXNoKGFyZ3VtZW50c1tpXSk7XG4gIHZhciBkb0Vycm9yID0gKHR5cGUgPT09ICdlcnJvcicpO1xuXG4gIHZhciBldmVudHMgPSB0aGlzLl9ldmVudHM7XG4gIGlmIChldmVudHMgIT09IHVuZGVmaW5lZClcbiAgICBkb0Vycm9yID0gKGRvRXJyb3IgJiYgZXZlbnRzLmVycm9yID09PSB1bmRlZmluZWQpO1xuICBlbHNlIGlmICghZG9FcnJvcilcbiAgICByZXR1cm4gZmFsc2U7XG5cbiAgLy8gSWYgdGhlcmUgaXMgbm8gJ2Vycm9yJyBldmVudCBsaXN0ZW5lciB0aGVuIHRocm93LlxuICBpZiAoZG9FcnJvcikge1xuICAgIHZhciBlcjtcbiAgICBpZiAoYXJncy5sZW5ndGggPiAwKVxuICAgICAgZXIgPSBhcmdzWzBdO1xuICAgIGlmIChlciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAvLyBOb3RlOiBUaGUgY29tbWVudHMgb24gdGhlIGB0aHJvd2AgbGluZXMgYXJlIGludGVudGlvbmFsLCB0aGV5IHNob3dcbiAgICAgIC8vIHVwIGluIE5vZGUncyBvdXRwdXQgaWYgdGhpcyByZXN1bHRzIGluIGFuIHVuaGFuZGxlZCBleGNlcHRpb24uXG4gICAgICB0aHJvdyBlcjsgLy8gVW5oYW5kbGVkICdlcnJvcicgZXZlbnRcbiAgICB9XG4gICAgLy8gQXQgbGVhc3QgZ2l2ZSBzb21lIGtpbmQgb2YgY29udGV4dCB0byB0aGUgdXNlclxuICAgIHZhciBlcnIgPSBuZXcgRXJyb3IoJ1VuaGFuZGxlZCBlcnJvci4nICsgKGVyID8gJyAoJyArIGVyLm1lc3NhZ2UgKyAnKScgOiAnJykpO1xuICAgIGVyci5jb250ZXh0ID0gZXI7XG4gICAgdGhyb3cgZXJyOyAvLyBVbmhhbmRsZWQgJ2Vycm9yJyBldmVudFxuICB9XG5cbiAgdmFyIGhhbmRsZXIgPSBldmVudHNbdHlwZV07XG5cbiAgaWYgKGhhbmRsZXIgPT09IHVuZGVmaW5lZClcbiAgICByZXR1cm4gZmFsc2U7XG5cbiAgaWYgKHR5cGVvZiBoYW5kbGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgUmVmbGVjdEFwcGx5KGhhbmRsZXIsIHRoaXMsIGFyZ3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBsZW4gPSBoYW5kbGVyLmxlbmd0aDtcbiAgICB2YXIgbGlzdGVuZXJzID0gYXJyYXlDbG9uZShoYW5kbGVyLCBsZW4pO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyArK2kpXG4gICAgICBSZWZsZWN0QXBwbHkobGlzdGVuZXJzW2ldLCB0aGlzLCBhcmdzKTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcblxuZnVuY3Rpb24gX2FkZExpc3RlbmVyKHRhcmdldCwgdHlwZSwgbGlzdGVuZXIsIHByZXBlbmQpIHtcbiAgdmFyIG07XG4gIHZhciBldmVudHM7XG4gIHZhciBleGlzdGluZztcblxuICBjaGVja0xpc3RlbmVyKGxpc3RlbmVyKTtcblxuICBldmVudHMgPSB0YXJnZXQuX2V2ZW50cztcbiAgaWYgKGV2ZW50cyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgZXZlbnRzID0gdGFyZ2V0Ll9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIHRhcmdldC5fZXZlbnRzQ291bnQgPSAwO1xuICB9IGVsc2Uge1xuICAgIC8vIFRvIGF2b2lkIHJlY3Vyc2lvbiBpbiB0aGUgY2FzZSB0aGF0IHR5cGUgPT09IFwibmV3TGlzdGVuZXJcIiEgQmVmb3JlXG4gICAgLy8gYWRkaW5nIGl0IHRvIHRoZSBsaXN0ZW5lcnMsIGZpcnN0IGVtaXQgXCJuZXdMaXN0ZW5lclwiLlxuICAgIGlmIChldmVudHMubmV3TGlzdGVuZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGFyZ2V0LmVtaXQoJ25ld0xpc3RlbmVyJywgdHlwZSxcbiAgICAgICAgICAgICAgICAgIGxpc3RlbmVyLmxpc3RlbmVyID8gbGlzdGVuZXIubGlzdGVuZXIgOiBsaXN0ZW5lcik7XG5cbiAgICAgIC8vIFJlLWFzc2lnbiBgZXZlbnRzYCBiZWNhdXNlIGEgbmV3TGlzdGVuZXIgaGFuZGxlciBjb3VsZCBoYXZlIGNhdXNlZCB0aGVcbiAgICAgIC8vIHRoaXMuX2V2ZW50cyB0byBiZSBhc3NpZ25lZCB0byBhIG5ldyBvYmplY3RcbiAgICAgIGV2ZW50cyA9IHRhcmdldC5fZXZlbnRzO1xuICAgIH1cbiAgICBleGlzdGluZyA9IGV2ZW50c1t0eXBlXTtcbiAgfVxuXG4gIGlmIChleGlzdGluZyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgLy8gT3B0aW1pemUgdGhlIGNhc2Ugb2Ygb25lIGxpc3RlbmVyLiBEb24ndCBuZWVkIHRoZSBleHRyYSBhcnJheSBvYmplY3QuXG4gICAgZXhpc3RpbmcgPSBldmVudHNbdHlwZV0gPSBsaXN0ZW5lcjtcbiAgICArK3RhcmdldC5fZXZlbnRzQ291bnQ7XG4gIH0gZWxzZSB7XG4gICAgaWYgKHR5cGVvZiBleGlzdGluZyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgLy8gQWRkaW5nIHRoZSBzZWNvbmQgZWxlbWVudCwgbmVlZCB0byBjaGFuZ2UgdG8gYXJyYXkuXG4gICAgICBleGlzdGluZyA9IGV2ZW50c1t0eXBlXSA9XG4gICAgICAgIHByZXBlbmQgPyBbbGlzdGVuZXIsIGV4aXN0aW5nXSA6IFtleGlzdGluZywgbGlzdGVuZXJdO1xuICAgICAgLy8gSWYgd2UndmUgYWxyZWFkeSBnb3QgYW4gYXJyYXksIGp1c3QgYXBwZW5kLlxuICAgIH0gZWxzZSBpZiAocHJlcGVuZCkge1xuICAgICAgZXhpc3RpbmcudW5zaGlmdChsaXN0ZW5lcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGV4aXN0aW5nLnB1c2gobGlzdGVuZXIpO1xuICAgIH1cblxuICAgIC8vIENoZWNrIGZvciBsaXN0ZW5lciBsZWFrXG4gICAgbSA9IF9nZXRNYXhMaXN0ZW5lcnModGFyZ2V0KTtcbiAgICBpZiAobSA+IDAgJiYgZXhpc3RpbmcubGVuZ3RoID4gbSAmJiAhZXhpc3Rpbmcud2FybmVkKSB7XG4gICAgICBleGlzdGluZy53YXJuZWQgPSB0cnVlO1xuICAgICAgLy8gTm8gZXJyb3IgY29kZSBmb3IgdGhpcyBzaW5jZSBpdCBpcyBhIFdhcm5pbmdcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLXN5bnRheFxuICAgICAgdmFyIHcgPSBuZXcgRXJyb3IoJ1Bvc3NpYmxlIEV2ZW50RW1pdHRlciBtZW1vcnkgbGVhayBkZXRlY3RlZC4gJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nLmxlbmd0aCArICcgJyArIFN0cmluZyh0eXBlKSArICcgbGlzdGVuZXJzICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAnYWRkZWQuIFVzZSBlbWl0dGVyLnNldE1heExpc3RlbmVycygpIHRvICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAnaW5jcmVhc2UgbGltaXQnKTtcbiAgICAgIHcubmFtZSA9ICdNYXhMaXN0ZW5lcnNFeGNlZWRlZFdhcm5pbmcnO1xuICAgICAgdy5lbWl0dGVyID0gdGFyZ2V0O1xuICAgICAgdy50eXBlID0gdHlwZTtcbiAgICAgIHcuY291bnQgPSBleGlzdGluZy5sZW5ndGg7XG4gICAgICBQcm9jZXNzRW1pdFdhcm5pbmcodyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5hZGRMaXN0ZW5lciA9IGZ1bmN0aW9uIGFkZExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKSB7XG4gIHJldHVybiBfYWRkTGlzdGVuZXIodGhpcywgdHlwZSwgbGlzdGVuZXIsIGZhbHNlKTtcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub24gPSBFdmVudEVtaXR0ZXIucHJvdG90eXBlLmFkZExpc3RlbmVyO1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnByZXBlbmRMaXN0ZW5lciA9XG4gICAgZnVuY3Rpb24gcHJlcGVuZExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKSB7XG4gICAgICByZXR1cm4gX2FkZExpc3RlbmVyKHRoaXMsIHR5cGUsIGxpc3RlbmVyLCB0cnVlKTtcbiAgICB9O1xuXG5mdW5jdGlvbiBvbmNlV3JhcHBlcigpIHtcbiAgaWYgKCF0aGlzLmZpcmVkKSB7XG4gICAgdGhpcy50YXJnZXQucmVtb3ZlTGlzdGVuZXIodGhpcy50eXBlLCB0aGlzLndyYXBGbik7XG4gICAgdGhpcy5maXJlZCA9IHRydWU7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApXG4gICAgICByZXR1cm4gdGhpcy5saXN0ZW5lci5jYWxsKHRoaXMudGFyZ2V0KTtcbiAgICByZXR1cm4gdGhpcy5saXN0ZW5lci5hcHBseSh0aGlzLnRhcmdldCwgYXJndW1lbnRzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfb25jZVdyYXAodGFyZ2V0LCB0eXBlLCBsaXN0ZW5lcikge1xuICB2YXIgc3RhdGUgPSB7IGZpcmVkOiBmYWxzZSwgd3JhcEZuOiB1bmRlZmluZWQsIHRhcmdldDogdGFyZ2V0LCB0eXBlOiB0eXBlLCBsaXN0ZW5lcjogbGlzdGVuZXIgfTtcbiAgdmFyIHdyYXBwZWQgPSBvbmNlV3JhcHBlci5iaW5kKHN0YXRlKTtcbiAgd3JhcHBlZC5saXN0ZW5lciA9IGxpc3RlbmVyO1xuICBzdGF0ZS53cmFwRm4gPSB3cmFwcGVkO1xuICByZXR1cm4gd3JhcHBlZDtcbn1cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbmNlID0gZnVuY3Rpb24gb25jZSh0eXBlLCBsaXN0ZW5lcikge1xuICBjaGVja0xpc3RlbmVyKGxpc3RlbmVyKTtcbiAgdGhpcy5vbih0eXBlLCBfb25jZVdyYXAodGhpcywgdHlwZSwgbGlzdGVuZXIpKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnByZXBlbmRPbmNlTGlzdGVuZXIgPVxuICAgIGZ1bmN0aW9uIHByZXBlbmRPbmNlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpIHtcbiAgICAgIGNoZWNrTGlzdGVuZXIobGlzdGVuZXIpO1xuICAgICAgdGhpcy5wcmVwZW5kTGlzdGVuZXIodHlwZSwgX29uY2VXcmFwKHRoaXMsIHR5cGUsIGxpc3RlbmVyKSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4vLyBFbWl0cyBhICdyZW1vdmVMaXN0ZW5lcicgZXZlbnQgaWYgYW5kIG9ubHkgaWYgdGhlIGxpc3RlbmVyIHdhcyByZW1vdmVkLlxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lciA9XG4gICAgZnVuY3Rpb24gcmVtb3ZlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpIHtcbiAgICAgIHZhciBsaXN0LCBldmVudHMsIHBvc2l0aW9uLCBpLCBvcmlnaW5hbExpc3RlbmVyO1xuXG4gICAgICBjaGVja0xpc3RlbmVyKGxpc3RlbmVyKTtcblxuICAgICAgZXZlbnRzID0gdGhpcy5fZXZlbnRzO1xuICAgICAgaWYgKGV2ZW50cyA9PT0gdW5kZWZpbmVkKVxuICAgICAgICByZXR1cm4gdGhpcztcblxuICAgICAgbGlzdCA9IGV2ZW50c1t0eXBlXTtcbiAgICAgIGlmIChsaXN0ID09PSB1bmRlZmluZWQpXG4gICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgICBpZiAobGlzdCA9PT0gbGlzdGVuZXIgfHwgbGlzdC5saXN0ZW5lciA9PT0gbGlzdGVuZXIpIHtcbiAgICAgICAgaWYgKC0tdGhpcy5fZXZlbnRzQ291bnQgPT09IDApXG4gICAgICAgICAgdGhpcy5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgZGVsZXRlIGV2ZW50c1t0eXBlXTtcbiAgICAgICAgICBpZiAoZXZlbnRzLnJlbW92ZUxpc3RlbmVyKVxuICAgICAgICAgICAgdGhpcy5lbWl0KCdyZW1vdmVMaXN0ZW5lcicsIHR5cGUsIGxpc3QubGlzdGVuZXIgfHwgbGlzdGVuZXIpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBsaXN0ICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHBvc2l0aW9uID0gLTE7XG5cbiAgICAgICAgZm9yIChpID0gbGlzdC5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgIGlmIChsaXN0W2ldID09PSBsaXN0ZW5lciB8fCBsaXN0W2ldLmxpc3RlbmVyID09PSBsaXN0ZW5lcikge1xuICAgICAgICAgICAgb3JpZ2luYWxMaXN0ZW5lciA9IGxpc3RbaV0ubGlzdGVuZXI7XG4gICAgICAgICAgICBwb3NpdGlvbiA9IGk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocG9zaXRpb24gPCAwKVxuICAgICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgICAgIGlmIChwb3NpdGlvbiA9PT0gMClcbiAgICAgICAgICBsaXN0LnNoaWZ0KCk7XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHNwbGljZU9uZShsaXN0LCBwb3NpdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobGlzdC5sZW5ndGggPT09IDEpXG4gICAgICAgICAgZXZlbnRzW3R5cGVdID0gbGlzdFswXTtcblxuICAgICAgICBpZiAoZXZlbnRzLnJlbW92ZUxpc3RlbmVyICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgdGhpcy5lbWl0KCdyZW1vdmVMaXN0ZW5lcicsIHR5cGUsIG9yaWdpbmFsTGlzdGVuZXIgfHwgbGlzdGVuZXIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9mZiA9IEV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXI7XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlQWxsTGlzdGVuZXJzID1cbiAgICBmdW5jdGlvbiByZW1vdmVBbGxMaXN0ZW5lcnModHlwZSkge1xuICAgICAgdmFyIGxpc3RlbmVycywgZXZlbnRzLCBpO1xuXG4gICAgICBldmVudHMgPSB0aGlzLl9ldmVudHM7XG4gICAgICBpZiAoZXZlbnRzID09PSB1bmRlZmluZWQpXG4gICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgICAvLyBub3QgbGlzdGVuaW5nIGZvciByZW1vdmVMaXN0ZW5lciwgbm8gbmVlZCB0byBlbWl0XG4gICAgICBpZiAoZXZlbnRzLnJlbW92ZUxpc3RlbmVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICB0aGlzLl9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICAgIHRoaXMuX2V2ZW50c0NvdW50ID0gMDtcbiAgICAgICAgfSBlbHNlIGlmIChldmVudHNbdHlwZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGlmICgtLXRoaXMuX2V2ZW50c0NvdW50ID09PSAwKVxuICAgICAgICAgICAgdGhpcy5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgICBlbHNlXG4gICAgICAgICAgICBkZWxldGUgZXZlbnRzW3R5cGVdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuXG4gICAgICAvLyBlbWl0IHJlbW92ZUxpc3RlbmVyIGZvciBhbGwgbGlzdGVuZXJzIG9uIGFsbCBldmVudHNcbiAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMoZXZlbnRzKTtcbiAgICAgICAgdmFyIGtleTtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGtleXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICBrZXkgPSBrZXlzW2ldO1xuICAgICAgICAgIGlmIChrZXkgPT09ICdyZW1vdmVMaXN0ZW5lcicpIGNvbnRpbnVlO1xuICAgICAgICAgIHRoaXMucmVtb3ZlQWxsTGlzdGVuZXJzKGtleSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZW1vdmVBbGxMaXN0ZW5lcnMoJ3JlbW92ZUxpc3RlbmVyJyk7XG4gICAgICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIHRoaXMuX2V2ZW50c0NvdW50ID0gMDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG5cbiAgICAgIGxpc3RlbmVycyA9IGV2ZW50c1t0eXBlXTtcblxuICAgICAgaWYgKHR5cGVvZiBsaXN0ZW5lcnMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcnMpO1xuICAgICAgfSBlbHNlIGlmIChsaXN0ZW5lcnMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAvLyBMSUZPIG9yZGVyXG4gICAgICAgIGZvciAoaSA9IGxpc3RlbmVycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXJzW2ldKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG5mdW5jdGlvbiBfbGlzdGVuZXJzKHRhcmdldCwgdHlwZSwgdW53cmFwKSB7XG4gIHZhciBldmVudHMgPSB0YXJnZXQuX2V2ZW50cztcblxuICBpZiAoZXZlbnRzID09PSB1bmRlZmluZWQpXG4gICAgcmV0dXJuIFtdO1xuXG4gIHZhciBldmxpc3RlbmVyID0gZXZlbnRzW3R5cGVdO1xuICBpZiAoZXZsaXN0ZW5lciA9PT0gdW5kZWZpbmVkKVxuICAgIHJldHVybiBbXTtcblxuICBpZiAodHlwZW9mIGV2bGlzdGVuZXIgPT09ICdmdW5jdGlvbicpXG4gICAgcmV0dXJuIHVud3JhcCA/IFtldmxpc3RlbmVyLmxpc3RlbmVyIHx8IGV2bGlzdGVuZXJdIDogW2V2bGlzdGVuZXJdO1xuXG4gIHJldHVybiB1bndyYXAgP1xuICAgIHVud3JhcExpc3RlbmVycyhldmxpc3RlbmVyKSA6IGFycmF5Q2xvbmUoZXZsaXN0ZW5lciwgZXZsaXN0ZW5lci5sZW5ndGgpO1xufVxuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVycyA9IGZ1bmN0aW9uIGxpc3RlbmVycyh0eXBlKSB7XG4gIHJldHVybiBfbGlzdGVuZXJzKHRoaXMsIHR5cGUsIHRydWUpO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yYXdMaXN0ZW5lcnMgPSBmdW5jdGlvbiByYXdMaXN0ZW5lcnModHlwZSkge1xuICByZXR1cm4gX2xpc3RlbmVycyh0aGlzLCB0eXBlLCBmYWxzZSk7XG59O1xuXG5FdmVudEVtaXR0ZXIubGlzdGVuZXJDb3VudCA9IGZ1bmN0aW9uKGVtaXR0ZXIsIHR5cGUpIHtcbiAgaWYgKHR5cGVvZiBlbWl0dGVyLmxpc3RlbmVyQ291bnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gZW1pdHRlci5saXN0ZW5lckNvdW50KHR5cGUpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBsaXN0ZW5lckNvdW50LmNhbGwoZW1pdHRlciwgdHlwZSk7XG4gIH1cbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUubGlzdGVuZXJDb3VudCA9IGxpc3RlbmVyQ291bnQ7XG5mdW5jdGlvbiBsaXN0ZW5lckNvdW50KHR5cGUpIHtcbiAgdmFyIGV2ZW50cyA9IHRoaXMuX2V2ZW50cztcblxuICBpZiAoZXZlbnRzICE9PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgZXZsaXN0ZW5lciA9IGV2ZW50c1t0eXBlXTtcblxuICAgIGlmICh0eXBlb2YgZXZsaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIDE7XG4gICAgfSBlbHNlIGlmIChldmxpc3RlbmVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBldmxpc3RlbmVyLmxlbmd0aDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gMDtcbn1cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5ldmVudE5hbWVzID0gZnVuY3Rpb24gZXZlbnROYW1lcygpIHtcbiAgcmV0dXJuIHRoaXMuX2V2ZW50c0NvdW50ID4gMCA/IFJlZmxlY3RPd25LZXlzKHRoaXMuX2V2ZW50cykgOiBbXTtcbn07XG5cbmZ1bmN0aW9uIGFycmF5Q2xvbmUoYXJyLCBuKSB7XG4gIHZhciBjb3B5ID0gbmV3IEFycmF5KG4pO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IG47ICsraSlcbiAgICBjb3B5W2ldID0gYXJyW2ldO1xuICByZXR1cm4gY29weTtcbn1cblxuZnVuY3Rpb24gc3BsaWNlT25lKGxpc3QsIGluZGV4KSB7XG4gIGZvciAoOyBpbmRleCArIDEgPCBsaXN0Lmxlbmd0aDsgaW5kZXgrKylcbiAgICBsaXN0W2luZGV4XSA9IGxpc3RbaW5kZXggKyAxXTtcbiAgbGlzdC5wb3AoKTtcbn1cblxuZnVuY3Rpb24gdW53cmFwTGlzdGVuZXJzKGFycikge1xuICB2YXIgcmV0ID0gbmV3IEFycmF5KGFyci5sZW5ndGgpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHJldC5sZW5ndGg7ICsraSkge1xuICAgIHJldFtpXSA9IGFycltpXS5saXN0ZW5lciB8fCBhcnJbaV07XG4gIH1cbiAgcmV0dXJuIHJldDtcbn1cblxuZnVuY3Rpb24gb25jZShlbWl0dGVyLCBuYW1lKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgZnVuY3Rpb24gZXJyb3JMaXN0ZW5lcihlcnIpIHtcbiAgICAgIGVtaXR0ZXIucmVtb3ZlTGlzdGVuZXIobmFtZSwgcmVzb2x2ZXIpO1xuICAgICAgcmVqZWN0KGVycik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVzb2x2ZXIoKSB7XG4gICAgICBpZiAodHlwZW9mIGVtaXR0ZXIucmVtb3ZlTGlzdGVuZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgZW1pdHRlci5yZW1vdmVMaXN0ZW5lcignZXJyb3InLCBlcnJvckxpc3RlbmVyKTtcbiAgICAgIH1cbiAgICAgIHJlc29sdmUoW10uc2xpY2UuY2FsbChhcmd1bWVudHMpKTtcbiAgICB9O1xuXG4gICAgZXZlbnRUYXJnZXRBZ25vc3RpY0FkZExpc3RlbmVyKGVtaXR0ZXIsIG5hbWUsIHJlc29sdmVyLCB7IG9uY2U6IHRydWUgfSk7XG4gICAgaWYgKG5hbWUgIT09ICdlcnJvcicpIHtcbiAgICAgIGFkZEVycm9ySGFuZGxlcklmRXZlbnRFbWl0dGVyKGVtaXR0ZXIsIGVycm9yTGlzdGVuZXIsIHsgb25jZTogdHJ1ZSB9KTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhZGRFcnJvckhhbmRsZXJJZkV2ZW50RW1pdHRlcihlbWl0dGVyLCBoYW5kbGVyLCBmbGFncykge1xuICBpZiAodHlwZW9mIGVtaXR0ZXIub24gPT09ICdmdW5jdGlvbicpIHtcbiAgICBldmVudFRhcmdldEFnbm9zdGljQWRkTGlzdGVuZXIoZW1pdHRlciwgJ2Vycm9yJywgaGFuZGxlciwgZmxhZ3MpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGV2ZW50VGFyZ2V0QWdub3N0aWNBZGRMaXN0ZW5lcihlbWl0dGVyLCBuYW1lLCBsaXN0ZW5lciwgZmxhZ3MpIHtcbiAgaWYgKHR5cGVvZiBlbWl0dGVyLm9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgaWYgKGZsYWdzLm9uY2UpIHtcbiAgICAgIGVtaXR0ZXIub25jZShuYW1lLCBsaXN0ZW5lcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVtaXR0ZXIub24obmFtZSwgbGlzdGVuZXIpO1xuICAgIH1cbiAgfSBlbHNlIGlmICh0eXBlb2YgZW1pdHRlci5hZGRFdmVudExpc3RlbmVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgLy8gRXZlbnRUYXJnZXQgZG9lcyBub3QgaGF2ZSBgZXJyb3JgIGV2ZW50IHNlbWFudGljcyBsaWtlIE5vZGVcbiAgICAvLyBFdmVudEVtaXR0ZXJzLCB3ZSBkbyBub3QgbGlzdGVuIGZvciBgZXJyb3JgIGV2ZW50cyBoZXJlLlxuICAgIGVtaXR0ZXIuYWRkRXZlbnRMaXN0ZW5lcihuYW1lLCBmdW5jdGlvbiB3cmFwTGlzdGVuZXIoYXJnKSB7XG4gICAgICAvLyBJRSBkb2VzIG5vdCBoYXZlIGJ1aWx0aW4gYHsgb25jZTogdHJ1ZSB9YCBzdXBwb3J0IHNvIHdlXG4gICAgICAvLyBoYXZlIHRvIGRvIGl0IG1hbnVhbGx5LlxuICAgICAgaWYgKGZsYWdzLm9uY2UpIHtcbiAgICAgICAgZW1pdHRlci5yZW1vdmVFdmVudExpc3RlbmVyKG5hbWUsIHdyYXBMaXN0ZW5lcik7XG4gICAgICB9XG4gICAgICBsaXN0ZW5lcihhcmcpO1xuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBcImVtaXR0ZXJcIiBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgRXZlbnRFbWl0dGVyLiBSZWNlaXZlZCB0eXBlICcgKyB0eXBlb2YgZW1pdHRlcik7XG4gIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gc3RyaW5naWZ5XG5zdHJpbmdpZnkuZGVmYXVsdCA9IHN0cmluZ2lmeVxuc3RyaW5naWZ5LnN0YWJsZSA9IGRldGVybWluaXN0aWNTdHJpbmdpZnlcbnN0cmluZ2lmeS5zdGFibGVTdHJpbmdpZnkgPSBkZXRlcm1pbmlzdGljU3RyaW5naWZ5XG5cbnZhciBMSU1JVF9SRVBMQUNFX05PREUgPSAnWy4uLl0nXG52YXIgQ0lSQ1VMQVJfUkVQTEFDRV9OT0RFID0gJ1tDaXJjdWxhcl0nXG5cbnZhciBhcnIgPSBbXVxudmFyIHJlcGxhY2VyU3RhY2sgPSBbXVxuXG5mdW5jdGlvbiBkZWZhdWx0T3B0aW9ucyAoKSB7XG4gIHJldHVybiB7XG4gICAgZGVwdGhMaW1pdDogTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIsXG4gICAgZWRnZXNMaW1pdDogTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVJcbiAgfVxufVxuXG4vLyBSZWd1bGFyIHN0cmluZ2lmeVxuZnVuY3Rpb24gc3RyaW5naWZ5IChvYmosIHJlcGxhY2VyLCBzcGFjZXIsIG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAndW5kZWZpbmVkJykge1xuICAgIG9wdGlvbnMgPSBkZWZhdWx0T3B0aW9ucygpXG4gIH1cblxuICBkZWNpcmMob2JqLCAnJywgMCwgW10sIHVuZGVmaW5lZCwgMCwgb3B0aW9ucylcbiAgdmFyIHJlc1xuICB0cnkge1xuICAgIGlmIChyZXBsYWNlclN0YWNrLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmVzID0gSlNPTi5zdHJpbmdpZnkob2JqLCByZXBsYWNlciwgc3BhY2VyKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXMgPSBKU09OLnN0cmluZ2lmeShvYmosIHJlcGxhY2VHZXR0ZXJWYWx1ZXMocmVwbGFjZXIpLCBzcGFjZXIpXG4gICAgfVxuICB9IGNhdGNoIChfKSB7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KCdbdW5hYmxlIHRvIHNlcmlhbGl6ZSwgY2lyY3VsYXIgcmVmZXJlbmNlIGlzIHRvbyBjb21wbGV4IHRvIGFuYWx5emVdJylcbiAgfSBmaW5hbGx5IHtcbiAgICB3aGlsZSAoYXJyLmxlbmd0aCAhPT0gMCkge1xuICAgICAgdmFyIHBhcnQgPSBhcnIucG9wKClcbiAgICAgIGlmIChwYXJ0Lmxlbmd0aCA9PT0gNCkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocGFydFswXSwgcGFydFsxXSwgcGFydFszXSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcnRbMF1bcGFydFsxXV0gPSBwYXJ0WzJdXG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiByZXNcbn1cblxuZnVuY3Rpb24gc2V0UmVwbGFjZSAocmVwbGFjZSwgdmFsLCBrLCBwYXJlbnQpIHtcbiAgdmFyIHByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IocGFyZW50LCBrKVxuICBpZiAocHJvcGVydHlEZXNjcmlwdG9yLmdldCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgaWYgKHByb3BlcnR5RGVzY3JpcHRvci5jb25maWd1cmFibGUpIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwYXJlbnQsIGssIHsgdmFsdWU6IHJlcGxhY2UgfSlcbiAgICAgIGFyci5wdXNoKFtwYXJlbnQsIGssIHZhbCwgcHJvcGVydHlEZXNjcmlwdG9yXSlcbiAgICB9IGVsc2Uge1xuICAgICAgcmVwbGFjZXJTdGFjay5wdXNoKFt2YWwsIGssIHJlcGxhY2VdKVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBwYXJlbnRba10gPSByZXBsYWNlXG4gICAgYXJyLnB1c2goW3BhcmVudCwgaywgdmFsXSlcbiAgfVxufVxuXG5mdW5jdGlvbiBkZWNpcmMgKHZhbCwgaywgZWRnZUluZGV4LCBzdGFjaywgcGFyZW50LCBkZXB0aCwgb3B0aW9ucykge1xuICBkZXB0aCArPSAxXG4gIHZhciBpXG4gIGlmICh0eXBlb2YgdmFsID09PSAnb2JqZWN0JyAmJiB2YWwgIT09IG51bGwpIHtcbiAgICBmb3IgKGkgPSAwOyBpIDwgc3RhY2subGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChzdGFja1tpXSA9PT0gdmFsKSB7XG4gICAgICAgIHNldFJlcGxhY2UoQ0lSQ1VMQVJfUkVQTEFDRV9OT0RFLCB2YWwsIGssIHBhcmVudClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgdHlwZW9mIG9wdGlvbnMuZGVwdGhMaW1pdCAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgIGRlcHRoID4gb3B0aW9ucy5kZXB0aExpbWl0XG4gICAgKSB7XG4gICAgICBzZXRSZXBsYWNlKExJTUlUX1JFUExBQ0VfTk9ERSwgdmFsLCBrLCBwYXJlbnQpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICB0eXBlb2Ygb3B0aW9ucy5lZGdlc0xpbWl0ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgZWRnZUluZGV4ICsgMSA+IG9wdGlvbnMuZWRnZXNMaW1pdFxuICAgICkge1xuICAgICAgc2V0UmVwbGFjZShMSU1JVF9SRVBMQUNFX05PREUsIHZhbCwgaywgcGFyZW50KVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgc3RhY2sucHVzaCh2YWwpXG4gICAgLy8gT3B0aW1pemUgZm9yIEFycmF5cy4gQmlnIGFycmF5cyBjb3VsZCBraWxsIHRoZSBwZXJmb3JtYW5jZSBvdGhlcndpc2UhXG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsKSkge1xuICAgICAgZm9yIChpID0gMDsgaSA8IHZhbC5sZW5ndGg7IGkrKykge1xuICAgICAgICBkZWNpcmModmFsW2ldLCBpLCBpLCBzdGFjaywgdmFsLCBkZXB0aCwgb3B0aW9ucylcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyh2YWwpXG4gICAgICBmb3IgKGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIga2V5ID0ga2V5c1tpXVxuICAgICAgICBkZWNpcmModmFsW2tleV0sIGtleSwgaSwgc3RhY2ssIHZhbCwgZGVwdGgsIG9wdGlvbnMpXG4gICAgICB9XG4gICAgfVxuICAgIHN0YWNrLnBvcCgpXG4gIH1cbn1cblxuLy8gU3RhYmxlLXN0cmluZ2lmeVxuZnVuY3Rpb24gY29tcGFyZUZ1bmN0aW9uIChhLCBiKSB7XG4gIGlmIChhIDwgYikge1xuICAgIHJldHVybiAtMVxuICB9XG4gIGlmIChhID4gYikge1xuICAgIHJldHVybiAxXG4gIH1cbiAgcmV0dXJuIDBcbn1cblxuZnVuY3Rpb24gZGV0ZXJtaW5pc3RpY1N0cmluZ2lmeSAob2JqLCByZXBsYWNlciwgc3BhY2VyLCBvcHRpb25zKSB7XG4gIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBvcHRpb25zID0gZGVmYXVsdE9wdGlvbnMoKVxuICB9XG5cbiAgdmFyIHRtcCA9IGRldGVybWluaXN0aWNEZWNpcmMob2JqLCAnJywgMCwgW10sIHVuZGVmaW5lZCwgMCwgb3B0aW9ucykgfHwgb2JqXG4gIHZhciByZXNcbiAgdHJ5IHtcbiAgICBpZiAocmVwbGFjZXJTdGFjay5sZW5ndGggPT09IDApIHtcbiAgICAgIHJlcyA9IEpTT04uc3RyaW5naWZ5KHRtcCwgcmVwbGFjZXIsIHNwYWNlcilcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzID0gSlNPTi5zdHJpbmdpZnkodG1wLCByZXBsYWNlR2V0dGVyVmFsdWVzKHJlcGxhY2VyKSwgc3BhY2VyKVxuICAgIH1cbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSgnW3VuYWJsZSB0byBzZXJpYWxpemUsIGNpcmN1bGFyIHJlZmVyZW5jZSBpcyB0b28gY29tcGxleCB0byBhbmFseXplXScpXG4gIH0gZmluYWxseSB7XG4gICAgLy8gRW5zdXJlIHRoYXQgd2UgcmVzdG9yZSB0aGUgb2JqZWN0IGFzIGl0IHdhcy5cbiAgICB3aGlsZSAoYXJyLmxlbmd0aCAhPT0gMCkge1xuICAgICAgdmFyIHBhcnQgPSBhcnIucG9wKClcbiAgICAgIGlmIChwYXJ0Lmxlbmd0aCA9PT0gNCkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocGFydFswXSwgcGFydFsxXSwgcGFydFszXSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcnRbMF1bcGFydFsxXV0gPSBwYXJ0WzJdXG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiByZXNcbn1cblxuZnVuY3Rpb24gZGV0ZXJtaW5pc3RpY0RlY2lyYyAodmFsLCBrLCBlZGdlSW5kZXgsIHN0YWNrLCBwYXJlbnQsIGRlcHRoLCBvcHRpb25zKSB7XG4gIGRlcHRoICs9IDFcbiAgdmFyIGlcbiAgaWYgKHR5cGVvZiB2YWwgPT09ICdvYmplY3QnICYmIHZhbCAhPT0gbnVsbCkge1xuICAgIGZvciAoaSA9IDA7IGkgPCBzdGFjay5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHN0YWNrW2ldID09PSB2YWwpIHtcbiAgICAgICAgc2V0UmVwbGFjZShDSVJDVUxBUl9SRVBMQUNFX05PREUsIHZhbCwgaywgcGFyZW50KVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIGlmICh0eXBlb2YgdmFsLnRvSlNPTiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9IGNhdGNoIChfKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICB0eXBlb2Ygb3B0aW9ucy5kZXB0aExpbWl0ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgZGVwdGggPiBvcHRpb25zLmRlcHRoTGltaXRcbiAgICApIHtcbiAgICAgIHNldFJlcGxhY2UoTElNSVRfUkVQTEFDRV9OT0RFLCB2YWwsIGssIHBhcmVudClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChcbiAgICAgIHR5cGVvZiBvcHRpb25zLmVkZ2VzTGltaXQgIT09ICd1bmRlZmluZWQnICYmXG4gICAgICBlZGdlSW5kZXggKyAxID4gb3B0aW9ucy5lZGdlc0xpbWl0XG4gICAgKSB7XG4gICAgICBzZXRSZXBsYWNlKExJTUlUX1JFUExBQ0VfTk9ERSwgdmFsLCBrLCBwYXJlbnQpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBzdGFjay5wdXNoKHZhbClcbiAgICAvLyBPcHRpbWl6ZSBmb3IgQXJyYXlzLiBCaWcgYXJyYXlzIGNvdWxkIGtpbGwgdGhlIHBlcmZvcm1hbmNlIG90aGVyd2lzZSFcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWwpKSB7XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgdmFsLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGRldGVybWluaXN0aWNEZWNpcmModmFsW2ldLCBpLCBpLCBzdGFjaywgdmFsLCBkZXB0aCwgb3B0aW9ucylcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gQ3JlYXRlIGEgdGVtcG9yYXJ5IG9iamVjdCBpbiB0aGUgcmVxdWlyZWQgd2F5XG4gICAgICB2YXIgdG1wID0ge31cbiAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXModmFsKS5zb3J0KGNvbXBhcmVGdW5jdGlvbilcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzW2ldXG4gICAgICAgIGRldGVybWluaXN0aWNEZWNpcmModmFsW2tleV0sIGtleSwgaSwgc3RhY2ssIHZhbCwgZGVwdGgsIG9wdGlvbnMpXG4gICAgICAgIHRtcFtrZXldID0gdmFsW2tleV1cbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgcGFyZW50ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBhcnIucHVzaChbcGFyZW50LCBrLCB2YWxdKVxuICAgICAgICBwYXJlbnRba10gPSB0bXBcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0bXBcbiAgICAgIH1cbiAgICB9XG4gICAgc3RhY2sucG9wKClcbiAgfVxufVxuXG4vLyB3cmFwcyByZXBsYWNlciBmdW5jdGlvbiB0byBoYW5kbGUgdmFsdWVzIHdlIGNvdWxkbid0IHJlcGxhY2Vcbi8vIGFuZCBtYXJrIHRoZW0gYXMgcmVwbGFjZWQgdmFsdWVcbmZ1bmN0aW9uIHJlcGxhY2VHZXR0ZXJWYWx1ZXMgKHJlcGxhY2VyKSB7XG4gIHJlcGxhY2VyID1cbiAgICB0eXBlb2YgcmVwbGFjZXIgIT09ICd1bmRlZmluZWQnXG4gICAgICA/IHJlcGxhY2VyXG4gICAgICA6IGZ1bmN0aW9uIChrLCB2KSB7XG4gICAgICAgIHJldHVybiB2XG4gICAgICB9XG4gIHJldHVybiBmdW5jdGlvbiAoa2V5LCB2YWwpIHtcbiAgICBpZiAocmVwbGFjZXJTdGFjay5sZW5ndGggPiAwKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlcGxhY2VyU3RhY2subGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIHBhcnQgPSByZXBsYWNlclN0YWNrW2ldXG4gICAgICAgIGlmIChwYXJ0WzFdID09PSBrZXkgJiYgcGFydFswXSA9PT0gdmFsKSB7XG4gICAgICAgICAgdmFsID0gcGFydFsyXVxuICAgICAgICAgIHJlcGxhY2VyU3RhY2suc3BsaWNlKGksIDEpXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVwbGFjZXIuY2FsbCh0aGlzLCBrZXksIHZhbClcbiAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIGV2ZW50cyA9IHJlcXVpcmUoJ2V2ZW50cycpO1xudmFyIGV0aFJwY0Vycm9ycyA9IHJlcXVpcmUoJ2V0aC1ycGMtZXJyb3JzJyk7XG5cbi8qKlxuICogdGhpcyBzY3JpcHQgaXMgbGl2ZSBpbiBjb250ZW50LXNjcmlwdCAvIGRhcHAncyBwYWdlXG4gKi9cbmNsYXNzIE1lc3NhZ2UgZXh0ZW5kcyBldmVudHMuRXZlbnRFbWl0dGVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgLy8gYXZhaWFibGUgaWQgbGlzdFxuICAgICAgICAvLyBtYXggY29uY3VycmVudCByZXF1ZXN0IGxpbWl0XG4gICAgICAgIHRoaXMuX3JlcXVlc3RJZFBvb2wgPSBbLi4uQXJyYXkoMTAwMCkua2V5cygpXTtcbiAgICAgICAgdGhpcy5fRVZFTlRfUFJFID0gJ0VUSF9XQUxMRVRfJztcbiAgICAgICAgdGhpcy5fd2FpdGluZ01hcCA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5yZXF1ZXN0ID0gKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGlmICghdGhpcy5fcmVxdWVzdElkUG9vbC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBldGhScGNFcnJvcnMuZXRoRXJyb3JzLnJwYy5saW1pdEV4Y2VlZGVkKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBpZGVudCA9IHRoaXMuX3JlcXVlc3RJZFBvb2wuc2hpZnQoKTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5fd2FpdGluZ01hcC5zZXQoaWRlbnQsIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSxcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMuc2VuZCgncmVxdWVzdCcsIHsgaWRlbnQsIGRhdGEgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5vblJlc3BvbnNlID0gYXN5bmMgKHsgaWRlbnQsIHJlcywgZXJyIH0gPSB7fSkgPT4ge1xuICAgICAgICAgICAgLy8gdGhlIHVybCBtYXkgdXBkYXRlXG4gICAgICAgICAgICBpZiAoIXRoaXMuX3dhaXRpbmdNYXAuaGFzKGlkZW50KSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHsgcmVzb2x2ZSwgcmVqZWN0IH0gPSB0aGlzLl93YWl0aW5nTWFwLmdldChpZGVudCk7XG4gICAgICAgICAgICB0aGlzLl9yZXF1ZXN0SWRQb29sLnB1c2goaWRlbnQpO1xuICAgICAgICAgICAgdGhpcy5fd2FpdGluZ01hcC5kZWxldGUoaWRlbnQpO1xuICAgICAgICAgICAgZXJyID8gcmVqZWN0KGVycikgOiByZXNvbHZlKHJlcyk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMub25SZXF1ZXN0ID0gYXN5bmMgKHsgaWRlbnQsIGRhdGEgfSkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMubGlzdGVuQ2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICBsZXQgcmVzLCBlcnI7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgcmVzID0gYXdhaXQgdGhpcy5saXN0ZW5DYWxsYmFjayhkYXRhKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgZXJyID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogZS5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhY2s6IGUuc3RhY2ssXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIGUuY29kZSAmJiAoZXJyLmNvZGUgPSBlLmNvZGUpO1xuICAgICAgICAgICAgICAgICAgICBlLmRhdGEgJiYgKGVyci5kYXRhID0gZS5kYXRhKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5zZW5kKCdyZXNwb25zZScsIHsgaWRlbnQsIHJlcywgZXJyIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLl9kaXNwb3NlID0gKCkgPT4ge1xuICAgICAgICAgICAgZm9yIChjb25zdCByZXF1ZXN0IG9mIHRoaXMuX3dhaXRpbmdNYXAudmFsdWVzKCkpIHtcbiAgICAgICAgICAgICAgICByZXF1ZXN0LnJlamVjdChldGhScGNFcnJvcnMuZXRoRXJyb3JzLnByb3ZpZGVyLnVzZXJSZWplY3RlZFJlcXVlc3QoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl93YWl0aW5nTWFwLmNsZWFyKCk7XG4gICAgICAgIH07XG4gICAgfVxufVxuXG5jbGFzcyBCcm9hZGNhc3RDaGFubmVsTWVzc2FnZSBleHRlbmRzIE1lc3NhZ2Uge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5jb25uZWN0ID0gKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fY2hhbm5lbC5vbm1lc3NhZ2UgPSAoeyBkYXRhOiB7IHR5cGUsIGRhdGEgfSB9KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdtZXNzYWdlJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ21lc3NhZ2UnLCBkYXRhKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodHlwZSA9PT0gJ3Jlc3BvbnNlJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uUmVzcG9uc2UoZGF0YSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmxpc3RlbiA9IChsaXN0ZW5DYWxsYmFjaykgPT4ge1xuICAgICAgICAgICAgdGhpcy5saXN0ZW5DYWxsYmFjayA9IGxpc3RlbkNhbGxiYWNrO1xuICAgICAgICAgICAgdGhpcy5fY2hhbm5lbC5vbm1lc3NhZ2UgPSAoeyBkYXRhOiB7IHR5cGUsIGRhdGEgfSB9KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdyZXF1ZXN0Jykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uUmVxdWVzdChkYXRhKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuc2VuZCA9ICh0eXBlLCBkYXRhKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9jaGFubmVsLnBvc3RNZXNzYWdlKHtcbiAgICAgICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgICAgIGRhdGEsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5kaXNwb3NlID0gKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fZGlzcG9zZSgpO1xuICAgICAgICAgICAgdGhpcy5fY2hhbm5lbC5jbG9zZSgpO1xuICAgICAgICB9O1xuICAgICAgICBpZiAoIW5hbWUpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigndGhlIGJyb2FkY2FzdENoYW5uZWwgbmFtZSBpcyBtaXNzaW5nJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fY2hhbm5lbCA9IG5ldyBCcm9hZGNhc3RDaGFubmVsKG5hbWUpO1xuICAgIH1cbn1cblxuY2xhc3MgUHVzaEV2ZW50SGFuZGxlcnMge1xuICAgIGNvbnN0cnVjdG9yKHByb3ZpZGVyKSB7XG4gICAgICAgIHRoaXMuY29ubmVjdCA9IChkYXRhKSA9PiB7XG4gICAgICAgICAgICBpZiAoIXRoaXMucHJvdmlkZXIuX2lzQ29ubmVjdGVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm92aWRlci5faXNDb25uZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMucHJvdmlkZXIuX3N0YXRlLmlzQ29ubmVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLl9lbWl0KFwiY29ubmVjdFwiLCBkYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy51bmxvY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnByb3ZpZGVyLl9pc1VubG9ja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMucHJvdmlkZXIuX3N0YXRlLmlzVW5sb2NrZWQgPSB0cnVlO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmxvY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnByb3ZpZGVyLl9pc1VubG9ja2VkID0gZmFsc2U7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuZGlzY29ubmVjdCA9ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucHJvdmlkZXIuX2lzQ29ubmVjdGVkID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnByb3ZpZGVyLl9zdGF0ZS5pc0Nvbm5lY3RlZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5wcm92aWRlci5fc3RhdGUuYWNjb3VudHMgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5wcm92aWRlci5zZWxlY3RlZEFkZHJlc3MgPSBudWxsO1xuICAgICAgICAgICAgY29uc3QgZGlzY29ubmVjdEVycm9yID0gZXRoUnBjRXJyb3JzLmV0aEVycm9ycy5wcm92aWRlci5kaXNjb25uZWN0ZWQoKTtcbiAgICAgICAgICAgIHRoaXMuX2VtaXQoXCJhY2NvdW50c0NoYW5nZWRcIiwgW10pO1xuICAgICAgICAgICAgdGhpcy5fZW1pdChcImRpc2Nvbm5lY3RcIiwgZGlzY29ubmVjdEVycm9yKTtcbiAgICAgICAgICAgIHRoaXMuX2VtaXQoXCJjbG9zZVwiLCBkaXNjb25uZWN0RXJyb3IpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmFjY291bnRzQ2hhbmdlZCA9IChhY2NvdW50cykgPT4ge1xuICAgICAgICAgICAgaWYgKChhY2NvdW50cyA9PT0gbnVsbCB8fCBhY2NvdW50cyA9PT0gdm9pZCAwID8gdm9pZCAwIDogYWNjb3VudHNbMF0pID09PSB0aGlzLnByb3ZpZGVyLnNlbGVjdGVkQWRkcmVzcykge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucHJvdmlkZXIuc2VsZWN0ZWRBZGRyZXNzID0gYWNjb3VudHMgPT09IG51bGwgfHwgYWNjb3VudHMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGFjY291bnRzWzBdO1xuICAgICAgICAgICAgdGhpcy5wcm92aWRlci5fc3RhdGUuYWNjb3VudHMgPSBhY2NvdW50cztcbiAgICAgICAgICAgIHRoaXMuX2VtaXQoXCJhY2NvdW50c0NoYW5nZWRcIiwgYWNjb3VudHMpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmNoYWluQ2hhbmdlZCA9ICh7IGNoYWluLCBuZXR3b3JrVmVyc2lvbiB9KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNvbm5lY3QoeyBjaGFpbklkOiBjaGFpbiB9KTtcbiAgICAgICAgICAgIGlmIChjaGFpbiAhPT0gdGhpcy5wcm92aWRlci5jaGFpbklkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm92aWRlci5jaGFpbklkID0gY2hhaW47XG4gICAgICAgICAgICAgICAgdGhpcy5fZW1pdChcImNoYWluQ2hhbmdlZFwiLCBjaGFpbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobmV0d29ya1ZlcnNpb24gIT09IHRoaXMucHJvdmlkZXIubmV0d29ya1ZlcnNpb24pIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3ZpZGVyLm5ldHdvcmtWZXJzaW9uID0gbmV0d29ya1ZlcnNpb247XG4gICAgICAgICAgICAgICAgdGhpcy5fZW1pdChcIm5ldHdvcmtDaGFuZ2VkXCIsIG5ldHdvcmtWZXJzaW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpc1tcImx1eDpjaGFpbkNoYW5nZWRcIl0gPSAoY2hhaW4pID0+IHtcbiAgICAgICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgICAgICBpZiAoY2hhaW4gJiZcbiAgICAgICAgICAgICAgICAoKF9hID0gY2hhaW4uaGV4KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EudG9Mb3dlckNhc2UoKSkgIT09ICgoX2IgPSB0aGlzLnByb3ZpZGVyLmNoYWluSWQpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi50b0xvd2VyQ2FzZSgpKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2VtaXQoXCJsdXg6Y2hhaW5DaGFuZ2VkXCIsIGNoYWluKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5wcm92aWRlciA9IHByb3ZpZGVyO1xuICAgIH1cbiAgICBfZW1pdChldmVudCwgZGF0YSkge1xuICAgICAgICBpZiAodGhpcy5wcm92aWRlci5faW5pdGlhbGl6ZWQgJiYgdGhpcy5wcm92aWRlci5faXNSZWFkeSkge1xuICAgICAgICAgICAgdGhpcy5wcm92aWRlci5lbWl0KGV2ZW50LCBkYXRhKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuY29uc3QgZG9tUmVhZHlDYWxsID0gKGNhbGxiYWNrKSA9PiB7XG4gICAgaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09IFwibG9hZGluZ1wiKSB7XG4gICAgICAgIGNvbnN0IGRvbUNvbnRlbnRMb2FkZWRIYW5kbGVyID0gKCkgPT4ge1xuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGRvbUNvbnRlbnRMb2FkZWRIYW5kbGVyKTtcbiAgICAgICAgfTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZG9tQ29udGVudExvYWRlZEhhbmRsZXIpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgY2FsbGJhY2soKTtcbiAgICB9XG59O1xuY29uc3QgJCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IuYmluZChkb2N1bWVudCk7XG5cbmNsYXNzIFJlYWR5UHJvbWlzZSB7XG4gICAgY29uc3RydWN0b3IoY291bnQpIHtcbiAgICAgICAgdGhpcy5fYWxsQ2hlY2sgPSBbXTtcbiAgICAgICAgdGhpcy5fdGFza3MgPSBbXTtcbiAgICAgICAgdGhpcy5jaGVjayA9IChpbmRleCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fYWxsQ2hlY2tbaW5kZXggLSAxXSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLl9wcm9jZWVkKCk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMudW5jaGVjayA9IChpbmRleCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fYWxsQ2hlY2tbaW5kZXggLSAxXSA9IGZhbHNlO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLl9wcm9jZWVkID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuX2FsbENoZWNrLnNvbWUoKF8pID0+ICFfKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdoaWxlICh0aGlzLl90YXNrcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IHJlc29sdmUsIGZuIH0gPSB0aGlzLl90YXNrcy5zaGlmdCgpO1xuICAgICAgICAgICAgICAgIHJlc29sdmUoZm4oKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuY2FsbCA9IChmbikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5fdGFza3MucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIGZuLFxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMuX3Byb2NlZWQoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLl9hbGxDaGVjayA9IFsuLi5BcnJheShjb3VudCldO1xuICAgIH1cbn1cblxuY2xhc3MgRGVkdXBlUHJvbWlzZSB7XG4gICAgY29uc3RydWN0b3IoYmxhY2tMaXN0KSB7XG4gICAgICAgIHRoaXMuX3Rhc2tzID0ge307XG4gICAgICAgIHRoaXMuX2JsYWNrTGlzdCA9IGJsYWNrTGlzdDtcbiAgICB9XG4gICAgYXN5bmMgY2FsbChrZXksIGRlZmVyKSB7XG4gICAgICAgIGlmICh0aGlzLl9ibGFja0xpc3QuaW5jbHVkZXMoa2V5KSAmJiB0aGlzLl90YXNrc1trZXldKSB7XG4gICAgICAgICAgICB0aHJvdyBldGhScGNFcnJvcnMuZXRoRXJyb3JzLnJwYy50cmFuc2FjdGlvblJlamVjdGVkKCd0aGVyZSBpcyBhIHBlbmRpbmcgcmVxdWVzdCwgcGxlYXNlIHJlcXVlc3QgYWZ0ZXIgaXQgcmVzb2x2ZWQnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX3Rhc2tzW2tleV0gPSAodGhpcy5fdGFza3Nba2V5XSB8fCAwKSArIDE7XG4gICAgICAgICAgICByZXNvbHZlKGRlZmVyKCkuZmluYWxseSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5fdGFza3Nba2V5XS0tO1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5fdGFza3Nba2V5XSkge1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5fdGFza3Nba2V5XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxudmFyIGltZyQyID0gXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNjc3ZnIHdpZHRoPScyMCcgaGVpZ2h0PScyMCcgdmlld0JveD0nMCAwIDIwIDIwJyBmaWxsPSdub25lJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNlJTNjcGF0aCBkPSdNMTkuMzg0MSAxMS4xODA3QzIwLjEyODggOS41MTY5NyAxNi40NDcxIDQuODY4ODMgMTIuOTI5NyAyLjkzMjMyQzEwLjcxMjYgMS40MzIxMyA4LjQwMjQ1IDEuNjM4MjMgNy45MzQ1NyAyLjI5NjkzQzYuOTA3NzQgMy43NDI1IDExLjMzNDcgNC45Njc0IDE0LjI5NTMgNi4zOTY3OEMxMy42NTg5IDYuNjczMTkgMTMuMDU5MSA3LjE2OTIzIDEyLjcwNjUgNy44MDM2QzExLjYwMjcgNi41OTg1OSA5LjE4MDEzIDUuNTYwOTEgNi4zMzc0OCA2LjM5Njc4QzQuNDIxODggNi45NjAwNSAyLjgyOTg3IDguMjg3OTkgMi4yMTQ1NyAxMC4yOTM3QzIuMDY1MDYgMTAuMjI3MyAxLjg5OTUzIDEwLjE5MDMgMS43MjUzNyAxMC4xOTAzQzEuMDU5NCAxMC4xOTAzIDAuNTE5NTMxIDEwLjczMDIgMC41MTk1MzEgMTEuMzk2MkMwLjUxOTUzMSAxMi4wNjIxIDEuMDU5NCAxMi42MDIgMS43MjUzNyAxMi42MDJDMS44NDg4MSAxMi42MDIgMi4yMzQ3NyAxMi41MTkyIDIuMjM0NzcgMTIuNTE5Mkw4LjQwMjQ1IDEyLjU2MzlDNS45MzU4NiAxNi40NzY5IDMuOTg2NTYgMTcuMDQ4OSAzLjk4NjU2IDE3LjcyNjhDMy45ODY1NiAxOC40MDQ3IDUuODUxNyAxOC4yMjEgNi41NTIwMSAxNy45NjgzQzkuOTA0NTEgMTYuNzU4NyAxMy41MDUzIDEyLjk4ODcgMTQuMTIzMSAxMS45MDM1QzE2LjcxNzkgMTIuMjI3MiAxOC44OTg1IDEyLjI2NTUgMTkuMzg0MSAxMS4xODA3WicgZmlsbD0ndXJsKCUyM3BhaW50MF9saW5lYXJfMTI2MTRfMjE5NjIpJy8lM2UlM2NwYXRoIGZpbGwtcnVsZT0nZXZlbm9kZCcgY2xpcC1ydWxlPSdldmVub2RkJyBkPSdNMTQuMjk0IDYuNDAwMDZDMTQuMjk0MSA2LjQwMDEzIDE0LjI5NDMgNi40MDAyMSAxNC4yOTQ1IDYuNDAwMjhDMTQuNDMxNyA2LjM0NjIyIDE0LjQwOTUgNi4xNDM1NCAxNC4zNzE4IDUuOTg0MzhDMTQuMjg1MiA1LjYxODU1IDEyLjc5MDkgNC4xNDI5MyAxMS4zODc2IDMuNDgxOTlDOS40NzU1MSAyLjU4MTQyIDguMDY3NSAyLjYyNzggNy44NTkzOCAzLjA0Mjg0QzguMjQ4ODQgMy44NDExNSAxMC4wNTQ2IDQuNTkwNjYgMTEuOTQwNSA1LjM3MzQ2QzEyLjc0NTEgNS43MDc0MyAxMy41NjQzIDYuMDQ3NDUgMTQuMjk0MyA2LjM5OTkxQzE0LjI5NDIgNi4zOTk5NiAxNC4yOTQxIDYuNDAwMDEgMTQuMjk0IDYuNDAwMDZaJyBmaWxsPSd1cmwoJTIzcGFpbnQxX2xpbmVhcl8xMjYxNF8yMTk2MiknLyUzZSUzY3BhdGggZmlsbC1ydWxlPSdldmVub2RkJyBjbGlwLXJ1bGU9J2V2ZW5vZGQnIGQ9J00xMS44NjkxIDE0LjQzMzNDMTEuNDgyNCAxNC4yODU1IDExLjA0NTUgMTQuMTUgMTAuNTQ4OSAxNC4wMjY5QzExLjA3ODQgMTMuMDc5NCAxMS4xODk1IDExLjY3NjcgMTAuNjg5NCAxMC43ODk5QzkuOTg3NjEgOS41NDUyNyA5LjEwNjU5IDguODgyODEgNy4wNTkzMiA4Ljg4MjgxQzUuOTMzMzIgOC44ODI4MSAyLjkwMTYzIDkuMjYyMDkgMi44NDc4MSAxMS43OTI5QzIuODQyMTYgMTIuMDU4NCAyLjg0NzY3IDEyLjMwMTggMi44NjY4OSAxMi41MjU2TDguNDAyOTkgMTIuNTY1N0M3LjY1NjY1IDEzLjc0OTcgNi45NTc2NyAxNC42Mjc4IDYuMzQ1NzIgMTUuMjk1NUM3LjA4MDQ1IDE1LjQ4MzggNy42ODY3NyAxNS42NDE5IDguMjQzNDIgMTUuNzg3QzguNzcxNjMgMTUuOTI0NyA5LjI1NTExIDE2LjA1MDcgOS43NjExMiAxNi4xNzk4QzEwLjUyNDQgMTUuNjIzNyAxMS4yNDIgMTUuMDE3MyAxMS44NjkxIDE0LjQzMzNaJyBmaWxsPSd1cmwoJTIzcGFpbnQyX2xpbmVhcl8xMjYxNF8yMTk2MiknLyUzZSUzY3BhdGggZD0nTTIuMTQwNDQgMTIuMjYzQzIuMzY2NTkgMTQuMTg1NSAzLjQ1OTIgMTQuOTM4OSA1LjY5MTg0IDE1LjE2MTlDNy45MjQ0OCAxNS4zODQ5IDkuMjA1MTYgMTUuMjM1MyAxMC45MTAyIDE1LjM5MDRDMTIuMzM0MiAxNS41MiAxMy42MDU3IDE2LjI0NTYgMTQuMDc3MyAxNS45OTQ4QzE0LjUwMTkgMTUuNzY5MiAxNC4yNjQ0IDE0Ljk1MzggMTMuNjk2MyAxNC40MzA3QzEyLjk2IDEzLjc1MjYgMTEuOTQxIDEzLjI4MTEgMTAuMTQ3OSAxMy4xMTM4QzEwLjUwNTIgMTIuMTM1NCAxMC40MDUxIDEwLjc2MzYgOS44NTAwOSAxMC4wMTcyQzkuMDQ3NjQgOC45MzgwMSA3LjU2NjQ3IDguNDUwMDkgNS42OTE4NCA4LjY2MzI3QzMuNzMzMjkgOC44ODU5OCAxLjg1NjYxIDkuODUwMjMgMi4xNDA0NCAxMi4yNjNaJyBmaWxsPSd1cmwoJTIzcGFpbnQzX2xpbmVhcl8xMjYxNF8yMTk2MiknLyUzZSUzY2RlZnMlM2UlM2NsaW5lYXJHcmFkaWVudCBpZD0ncGFpbnQwX2xpbmVhcl8xMjYxNF8yMTk2MicgeDE9JzYuMTE0NDMnIHkxPSc5LjcwNzM4JyB4Mj0nMTkuMjIzNycgeTI9JzEzLjQyNDknIGdyYWRpZW50VW5pdHM9J3VzZXJTcGFjZU9uVXNlJyUzZSUzY3N0b3Agc3RvcC1jb2xvcj0nJTIzODc5N0ZGJy8lM2UlM2NzdG9wIG9mZnNldD0nMScgc3RvcC1jb2xvcj0nJTIzQUFBOEZGJy8lM2UlM2MvbGluZWFyR3JhZGllbnQlM2UlM2NsaW5lYXJHcmFkaWVudCBpZD0ncGFpbnQxX2xpbmVhcl8xMjYxNF8yMTk2MicgeDE9JzE3LjAxNTInIHkxPSc5LjQ2MTI2JyB4Mj0nNy41NTYyOCcgeTI9Jy0wLjAyMDc4OScgZ3JhZGllbnRVbml0cz0ndXNlclNwYWNlT25Vc2UnJTNlJTNjc3RvcCBzdG9wLWNvbG9yPSclMjMzQjIyQTAnLyUzZSUzY3N0b3Agb2Zmc2V0PScxJyBzdG9wLWNvbG9yPSclMjM1MTU2RDgnIHN0b3Atb3BhY2l0eT0nMCcvJTNlJTNjL2xpbmVhckdyYWRpZW50JTNlJTNjbGluZWFyR3JhZGllbnQgaWQ9J3BhaW50Ml9saW5lYXJfMTI2MTRfMjE5NjInIHgxPScxMi4xMzIzJyB5MT0nMTQuNzYzNicgeDI9JzMuMDQ1ODknIHkyPSc5LjUzOTYnIGdyYWRpZW50VW5pdHM9J3VzZXJTcGFjZU9uVXNlJyUzZSUzY3N0b3Agc3RvcC1jb2xvcj0nJTIzM0IxRThGJy8lM2UlM2NzdG9wIG9mZnNldD0nMScgc3RvcC1jb2xvcj0nJTIzNkE2RkZCJyBzdG9wLW9wYWNpdHk9JzAnLyUzZSUzYy9saW5lYXJHcmFkaWVudCUzZSUzY2xpbmVhckdyYWRpZW50IGlkPSdwYWludDNfbGluZWFyXzEyNjE0XzIxOTYyJyB4MT0nNi44OTY4MScgeTE9JzkuNjA4OCcgeDI9JzEzLjAzODUnIHkyPScxNy40MTI1JyBncmFkaWVudFVuaXRzPSd1c2VyU3BhY2VPblVzZSclM2UlM2NzdG9wIHN0b3AtY29sb3I9JyUyMzg4OThGRicvJTNlJTNjc3RvcCBvZmZzZXQ9JzAuOTgzODk1JyBzdG9wLWNvbG9yPSclMjM1RjQ3RjEnLyUzZSUzYy9saW5lYXJHcmFkaWVudCUzZSUzYy9kZWZzJTNlJTNjL3N2ZyUzZVwiO1xuXG52YXIgaW1nJDEgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM2Nzdmcgd2lkdGg9JzE2JyBoZWlnaHQ9JzE2JyB2aWV3Qm94PScwIDAgMTYgMTYnIGZpbGw9J25vbmUnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM2UlM2NwYXRoIGQ9J00xNiAwSDBWMTZIMTZWMFonIGZpbGw9J3doaXRlJyBmaWxsLW9wYWNpdHk9JzAuMDEnLyUzZSUzY3BhdGggZD0nTTIuNjY2NjMgMi42NjY2M0wxMy4zMzMzIDEzLjMzMzMnIHN0cm9rZT0nJTIzNzA3MjgwJyBzdHJva2Utd2lkdGg9JzEuNScgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJy8lM2UlM2NwYXRoIGQ9J00yLjY2NjYzIDEzLjMzMzNMMTMuMzMzMyAyLjY2NjYzJyBzdHJva2U9JyUyMzcwNzI4MCcgc3Ryb2tlLXdpZHRoPScxLjUnIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcvJTNlJTNjL3N2ZyUzZVwiO1xuXG5jbGFzcyBOb3RpY2Uge1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICAgICAgdGhpcy5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRoaXMuZWwuY2xhc3NOYW1lID0gYGx1eC1ub3RpY2UgJHt0aGlzLm9wdGlvbnMuY2xhc3NOYW1lID8gdGhpcy5vcHRpb25zLmNsYXNzTmFtZSA6IFwiXCJ9YDtcbiAgICAgICAgLy8gaW5pdGlhbCBldmVudHNcbiAgICAgICAgdGhpcy5ldmVudHMgPSB7fTtcbiAgICAgICAgLy8gaW5uZXIgZWxlbWVudFxuICAgICAgICB0aGlzLmluc2VydCgpO1xuICAgICAgICAvLyBhdXRvIGhpZGUgYW5pbWF0aW9uXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMudGltZW91dCkge1xuICAgICAgICAgICAgdGhpcy5zdGFydFRpbWVyKCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gbW91c2UgZXZlbnRzXG4gICAgICAgIHRoaXMucmVnaXN0ZXJFdmVudHMoKTtcbiAgICB9XG4gICAgaW5zZXJ0KCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGlmICghdGhpcy5lbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIG1haW5cbiAgICAgICAgY29uc3QgZWxNYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZWxNYWluLmNsYXNzTmFtZSA9IFwibHV4LW5vdGljZS1jb250ZW50XCI7XG4gICAgICAgIGVsTWFpbi5pbm5lckhUTUwgPSB0aGlzLm9wdGlvbnMuY29udGVudDtcbiAgICAgICAgKF9hID0gdGhpcy5lbCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmFwcGVuZENoaWxkKGVsTWFpbik7XG4gICAgICAgIC8vIGNsb3NlIGJ1dHRvblxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmNsb3NlYWJsZSkge1xuICAgICAgICAgICAgdGhpcy5jbG9zZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgICAgICB0aGlzLmNsb3NlQnV0dG9uLnNldEF0dHJpYnV0ZShcInNyY1wiLCBpbWckMSk7XG4gICAgICAgICAgICB0aGlzLmNsb3NlQnV0dG9uLmNsYXNzTmFtZSA9IFwibHV4LW5vdGljZS1jbG9zZVwiO1xuICAgICAgICAgICAgdGhpcy5lbC5hcHBlbmRDaGlsZCh0aGlzLmNsb3NlQnV0dG9uKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9wdGlvbnMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuZWwpO1xuICAgIH1cbiAgICByZWdpc3RlckV2ZW50cygpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICB0aGlzLmV2ZW50cy5oaWRlID0gKCkgPT4gdGhpcy5oaWRlKCk7XG4gICAgICAgIChfYSA9IHRoaXMuY2xvc2VCdXR0b24pID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5ldmVudHMuaGlkZSwgZmFsc2UpO1xuICAgIH1cbiAgICBzdGFydFRpbWVyKHRpbWVvdXQgPSB0aGlzLm9wdGlvbnMudGltZW91dCkge1xuICAgICAgICB0aGlzLnRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgICAgfSwgdGltZW91dCk7XG4gICAgfVxuICAgIHN0b3BUaW1lcigpIHtcbiAgICAgICAgaWYgKHRoaXMudGltZXIpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVyKTtcbiAgICAgICAgICAgIHRoaXMudGltZXIgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuICAgIGhpZGUoKSB7XG4gICAgICAgIGlmICghdGhpcy5lbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZChcIi5sdXgtbm90aWNlLWlzLWhpZGVcIik7XG4gICAgICAgIC8vIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLm9wdGlvbnMuY29udGFpbmVyLnJlbW92ZUNoaWxkKHRoaXMuZWwpO1xuICAgICAgICB0aGlzLmVsID0gbnVsbDtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5vbkhpZGUpIHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5vbkhpZGUoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnN0b3BUaW1lcigpO1xuICAgICAgICAvLyB9LCAzMDApO1xuICAgIH1cbn1cbmxldCBjb250YWluZXIgPSBudWxsO1xubGV0IHN0eWxlID0gbnVsbDtcbmNvbnN0IHN0eWxlcyA9IGBcbiAgICAubHV4LW5vdGljZS1jb250YWluZXIge1xuICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgei1pbmRleDogOTk5OTk7XG4gICAgICB0b3A6IDYwcHg7XG4gICAgICByaWdodDogNDJweDtcbiAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdIZWx2ZXRpY2EgTmV1ZScsIFJvYm90bywgc2Fucy1zZXJpZjtcbiAgICB9XG4gICAgLmx1eC1ub3RpY2UtY29udGFpbmVyICoge1xuICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ0hlbHZldGljYSBOZXVlJywgUm9ib3RvLCBzYW5zLXNlcmlmO1xuICAgICAgY29sb3I6ICMxOTI5NDU7IFxuICAgIH1cblxuICAgIC5sdXgtbm90aWNlIHtcbiAgICAgIG1pbi13aWR0aDogMjMwcHg7XG4gICAgICBtaW4taGVpZ2h0OiA0NHB4O1xuICAgICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM3MDg0RkY7XG4gICAgICBib3JkZXI6IDEuNXB4IHNvbGlkICM3MDg0RkY7XG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgYm94LXNoYWRvdzogMHB4IDI0cHggNDBweCByZ2JhKDEzNCwgMTUxLCAyNTUsIDAuMTIpO1xuICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgIGZvbnQtZmFtaWx5OiAnQXJpYWwnLCBzYW5zLXNlcmlmO1xuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgICAgY29sb3I6ICMxOTI5NDU7XG5cbiAgICAgIHBhZGRpbmc6IDEycHg7XG4gICAgICBnYXA6IDhweDtcblxuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gICAgLmx1eC1ub3RpY2UgKyAubHV4LW5vdGljZSB7XG4gICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgIH1cbiAgICAubHV4LW5vdGljZS1jb250ZW50IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgY29sb3I6ICMxOTI5NDU7XG4gICAgfVxuICAgIC5sdXgtbm90aWNlLWlzLWhpZGUge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHRyYW5zaXRpb246IDAuM3M7XG4gICAgfVxuXG4gICAgLmx1eC1ub3RpY2UtaWNvbiB7XG4gICAgICB3aWR0aDogMjBweDtcbiAgICB9XG4gICAgLmx1eC1ub3RpY2UtY2xvc2Uge1xuICAgICAgZmxleC1zaHJpbms6IDA7XG4gICAgICBtYXJnaW4tbGVmdDogMTZweDtcbiAgICAgIHdpZHRoOiAxNnB4O1xuICAgICAgaGVpZ2h0OiAxNnB4O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgICAubHV4LXN0cm9uZyB7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIGNvbG9yOiAjMTkyOTQ1O1xuICAgIH1cbiAgICAubHV4LW5vdGljZS1kZWZhdWx0LXdhbGxldCB7XG4gICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgICAgaGVpZ2h0OiA2NHB4O1xuICAgICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICAgICAgcGFkZGluZy1yaWdodDogMjBweDtcblxuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XG5cbiAgICAgIGNvbG9yOiAjMTkyOTQ1O1xuICAgIH1cbiAgYDtcbmZ1bmN0aW9uIG5vdGljZShvcHRpb25zKSB7XG4gICAgY29uc3QgeyBjb250ZW50ID0gXCJcIiwgXG4gICAgLy8gdGltZW91dCA9IDMwMDAsXG4gICAgdGltZW91dCA9IDAsIGNsb3NlQnV0dG9uID0gXCLDl1wiLCBjbGFzc05hbWUgPSBcIlwiLCBjbG9zZWFibGUgPSBmYWxzZSwgfSA9IG9wdGlvbnMgfHwge307XG4gICAgaWYgKCFjb250YWluZXIpIHtcbiAgICAgICAgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJsdXgtbm90aWNlLWNvbnRhaW5lclwiKTtcbiAgICAgICAgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gICAgICAgIHN0eWxlLmlubmVySFRNTCA9IHN0eWxlcztcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzdHlsZSk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBOb3RpY2Uoe1xuICAgICAgICBjb250ZW50LFxuICAgICAgICB0aW1lb3V0LFxuICAgICAgICBjbG9zZUJ1dHRvbixcbiAgICAgICAgY29udGFpbmVyLFxuICAgICAgICBjbGFzc05hbWUsXG4gICAgICAgIGNsb3NlYWJsZSxcbiAgICAgICAgb25IaWRlOiAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoY29udGFpbmVyICYmICEoY29udGFpbmVyID09PSBudWxsIHx8IGNvbnRhaW5lciA9PT0gdm9pZCAwID8gdm9pZCAwIDogY29udGFpbmVyLmhhc0NoaWxkTm9kZXMoKSkpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGNvbnRhaW5lcik7XG4gICAgICAgICAgICAgICAgc3R5bGUgJiYgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChzdHlsZSk7XG4gICAgICAgICAgICAgICAgc3R5bGUgPSBudWxsO1xuICAgICAgICAgICAgICAgIGNvbnRhaW5lciA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgfSk7XG59XG5cbmNvbnN0IGlzSW5JZnJhbWUgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHdpbmRvdy5zZWxmICE9PSB3aW5kb3cudG9wO1xufTtcbmNvbnN0IGlzSW5TYW1lT3JpZ2luSWZyYW1lID0gKCkgPT4ge1xuICAgIHZhciBfYSwgX2I7XG4gICAgaWYgKCFpc0luSWZyYW1lKCkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gd2luZG93LnNlbGYubG9jYXRpb24ub3JpZ2luID09PSAoKF9iID0gKF9hID0gd2luZG93LnRvcCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmxvY2F0aW9uKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Iub3JpZ2luKTtcbiAgICB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn07XG5cbmxldCBpbnN0YW5jZSQxO1xuY29uc3Qgc3dpdGNoQ2hhaW5Ob3RpY2UgPSAoY2hhaW4pID0+IHtcbiAgICBpZiAoaXNJblNhbWVPcmlnaW5JZnJhbWUoKSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZSQxKSB7XG4gICAgICAgIGluc3RhbmNlJDEuaGlkZSgpO1xuICAgICAgICBpbnN0YW5jZSQxID0gbnVsbDtcbiAgICB9XG4gICAgY29uc3QgcmF3Q29udGVudCA9IGA8aW1nIHN0eWxlPVwid2lkdGg6IDIwcHg7IGhlaWdodDogMjBweDsgbWFyZ2luLXJpZ2h0OiA4cHg7XCIgc3JjPVwiJHtpbWckMn1cIi8+IDxkaXYgc3R5bGU9XCJjb2xvcjogIzE5Mjk0NTsgcGFkZGluZy1yaWdodDogMnB4O1wiPk5ldHdvcmsgc3dpdGNoZWQgdG8gPHNwYW4gY2xhc3M9XCJsdXgtc3Ryb25nXCIgc3R5bGU9XCJtYXJnaW46IDA7XCI+JHtjaGFpbiA9PT0gbnVsbCB8fCBjaGFpbiA9PT0gdm9pZCAwID8gdm9pZCAwIDogY2hhaW4ubmFtZX08L3NwYW4+PGRpdj5gO1xuICAgIGxldCBjb250ZW50ID0gcmF3Q29udGVudDtcbiAgICBpbnN0YW5jZSQxID0gbm90aWNlKHtcbiAgICAgICAgdGltZW91dDogMzAwMCxcbiAgICAgICAgY29udGVudCxcbiAgICB9KTtcbn07XG5cbnZhciBpbWcgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM2Nzdmcgd2lkdGg9JzQwJyBoZWlnaHQ9JzQwJyB2aWV3Qm94PScwIDAgNDAgNDAnIGZpbGw9J25vbmUnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM2UlM2NwYXRoIGQ9J00zNC41MDAyIDUuMTE1MjNMMjEuOTI3NyAxNC40MTc3TDI0LjI2NTIgOC45MzUyM0wzNC41MDE1IDUuMTE1MjNIMzQuNTAwMlonIGZpbGw9JyUyM0UxNzcyNicvJTNlJTNjcGF0aCBkPSdNMzQuNjM4OSA1LjAzOTE1QzM0LjY1NjkgNS4wNzIzNiAzNC42NjI1IDUuMTEwOTcgMzQuNjU0NCA1LjE0NzkyQzM0LjY0NjQgNS4xODQ4NyAzNC42MjUzIDUuMjE3NyAzNC41OTUxIDUuMjQwNEwyMi4wMjE0IDE0LjU0NDJDMjEuOTkzNSAxNC41NjQzIDIxLjk1OTggMTQuNTc0OCAyMS45MjU1IDE0LjU3NEMyMS44OTExIDE0LjU3MzMgMjEuODU3OSAxNC41NjEzIDIxLjgzMSAxNC41Mzk5QzIxLjgwNDEgMTQuNTE4NSAyMS43ODQ5IDE0LjQ4ODkgMjEuNzc2NCAxNC40NTU2QzIxLjc2NzkgMTQuNDIyMyAyMS43NzA1IDE0LjM4NzEgMjEuNzgzOSAxNC4zNTU0TDI0LjEyMTQgOC44NzI5MUMyNC4xMjk3IDguODUzMTYgMjQuMTQyIDguODM1MzMgMjQuMTU3NSA4LjgyMDVDMjQuMTcyOSA4LjgwNTY3IDI0LjE5MTMgOC43OTQxNSAyNC4yMTE0IDguNzg2NjZMMzQuNDQ2NCA0Ljk2NjY1QzM0LjQ4MTggNC45NTM2NiAzNC41MjA3IDQuOTUzODMgMzQuNTU2MSA0Ljk2NzE0QzM0LjU5MTQgNC45ODA0NSAzNC42MjA4IDUuMDA2IDM0LjYzODkgNS4wMzkxNVY1LjAzOTE1Wk0yNC4zODM5IDkuMDU3OTFMMjIuMzAwMSAxMy45NDU0TDMzLjUwNzYgNS42NTI5TDI0LjM4MzkgOS4wNTc5MVonIGZpbGw9JyUyM0UxNzcyNicvJTNlJTNjcGF0aCBkPSdNNS41IDUuMTE1MjNMMTcuOTYgMTQuNTA1MkwxNS43MzUgOC45MzUyM0w1LjUgNS4xMTUyM1onIGZpbGw9JyUyM0UyNzYyNScvJTNlJTNjcGF0aCBkPSdNNS4zNjEzNCA1LjAzODVDNS4zNzk2NSA1LjAwNTI5IDUuNDA5MzIgNC45Nzk4IDUuNDQ0OTIgNC45NjY3MUM1LjQ4MDUxIDQuOTUzNjIgNS41MTk2MyA0Ljk1MzgxIDUuNTU1MDkgNC45NjcyNUwxNS43OTAxIDguNzg3MjVDMTUuODMxMyA4LjgwMzUgMTUuODY1MSA4LjgzNiAxNS44ODAxIDguODc2TDE4LjEwNjMgMTQuNDQ2QzE4LjExODYgMTQuNDc3OCAxOC4xMjAyIDE0LjUxMjYgMTguMTExIDE0LjU0NTRDMTguMTAxOCAxNC41NzgyIDE4LjA4MjIgMTQuNjA3IDE4LjA1NTEgMTQuNjI3N0MxOC4wMjgxIDE0LjY0ODQgMTcuOTk1MSAxNC42NTk4IDE3Ljk2MTEgMTQuNjYwMkMxNy45MjcgMTQuNjYwNSAxNy44OTM4IDE0LjY0OTkgMTcuODY2MyAxNC42Mjk4TDUuNDAzODQgNS4yMzk3NUM1LjM3NDEyIDUuMjE2OTIgNS4zNTM1MiA1LjE4NDI0IDUuMzQ1NzMgNS4xNDc1OUM1LjMzNzk0IDUuMTEwOTMgNS4zNDM0NyA1LjA3MjcgNS4zNjEzNCA1LjAzOTc1VjUuMDM4NVpNNi40NjEzNCA1LjY0MUwxNy42MDUxIDE0LjAzOThMMTUuNjEzOCA5LjA1ODVMNi40NjAwOSA1LjY0MUg2LjQ2MTM0WicgZmlsbD0nJTIzRTI3NjI1Jy8lM2UlM2NwYXRoIGQ9J00yOS45NzM5IDI2LjY4NjhMMjYuNjI4OSAzMS43OTY4TDMzLjc5MTQgMzMuNzY5M0wzNS44NDM5IDI2Ljc5OEwyOS45NzM5IDI2LjY4NTVWMjYuNjg2OFonIGZpbGw9JyUyM0UyNzYyNScvJTNlJTNjcGF0aCBkPSdNMjkuODQxNCAyNi42MDA2QzI5Ljg1NiAyNi41NzgyIDI5Ljg3NjEgMjYuNTYgMjkuODk5NyAyNi41NDc1QzI5LjkyMzMgMjYuNTM1IDI5Ljk0OTcgMjYuNTI4OCAyOS45NzY0IDI2LjUyOTNMMzUuODQ2NCAyNi42NDE4QzM1Ljg3MDQgMjYuNjQyMyAzNS44OTQxIDI2LjY0ODIgMzUuOTE1NSAyNi42NTkyQzM1LjkzNjkgMjYuNjcwMiAzNS45NTU1IDI2LjY4NiAzNS45Njk5IDI2LjcwNTNDMzUuOTg0MiAyNi43MjQ2IDM1Ljk5NCAyNi43NDcgMzUuOTk4MyAyNi43NzA2QzM2LjAwMjcgMjYuNzk0MyAzNi4wMDE2IDI2LjgxODcgMzUuOTk1MSAyNi44NDE4TDMzLjk0MjYgMzMuODE0M0MzMy45MzEgMzMuODUzOSAzMy45MDQzIDMzLjg4NzMgMzMuODY4MyAzMy45MDc0QzMzLjgzMjMgMzMuOTI3NSAzMy43ODk5IDMzLjkzMjcgMzMuNzUwMSAzMy45MjE4TDI2LjU4NzYgMzEuOTQ5M0MyNi41NjM3IDMxLjk0MjkgMjYuNTQxNiAzMS45MzA4IDI2LjUyMzIgMzEuOTE0MkMyNi41MDQ4IDMxLjg5NzYgMjYuNDkwNiAzMS44NzY5IDI2LjQ4MTcgMzEuODUzOEMyNi40NzI4IDMxLjgzMDYgMjYuNDY5NSAzMS44MDU3IDI2LjQ3MiAzMS43ODFDMjYuNDc0NiAzMS43NTY0IDI2LjQ4MjkgMzEuNzMyNyAyNi40OTY0IDMxLjcxMThMMjkuODQyNiAyNi41OTkzTDI5Ljg0MTQgMjYuNjAwNlpNMzAuMDU3NiAyNi44NDU2TDI2Ljg3ODkgMzEuNzAzMUwzMy42ODM5IDMzLjU3NjhMMzUuNjMzOSAyNi45NTE4TDMwLjA1ODkgMjYuODQ1NkgzMC4wNTc2WicgZmlsbD0nJTIzRTI3NjI1Jy8lM2UlM2NwYXRoIGQ9J000LjE2ODk1IDI2Ljc5NjhMNi4yMDc3IDMzLjc2OEwxMy4zNTg5IDMxLjc5NTVMMTAuMDI2NCAyNi42ODU1TDQuMTY4OTUgMjYuNzk2OFYyNi43OTY4WicgZmlsbD0nJTIzRTI3NjI1Jy8lM2UlM2NwYXRoIGQ9J00xMC4wMjI2IDI2LjUyOTNDMTAuMDc3NiAyNi41MjgxIDEwLjEyODggMjYuNTU0MyAxMC4xNTc2IDI2LjYwMDZMMTMuNDkxMyAzMS43MTA2QzEzLjUwNDggMzEuNzMxMyAxMy41MTMyIDMxLjc1NSAxMy41MTU4IDMxLjc3OTZDMTMuNTE4NCAzMS44MDQxIDEzLjUxNTMgMzEuODI5IDEzLjUwNjUgMzEuODUyMUMxMy40OTc3IDMxLjg3NTMgMTMuNDgzNiAzMS44OTYgMTMuNDY1NCAzMS45MTI3QzEzLjQ0NzEgMzEuOTI5MyAxMy40MjUyIDMxLjk0MTUgMTMuNDAxMyAzMS45NDgxTDYuMjUwMDggMzMuOTIxOEM2LjIxMDMxIDMzLjkzMjcgNi4xNjc4NyAzMy45Mjc1IDYuMTMxODggMzMuOTA3NEM2LjA5NTg5IDMzLjg4NzMgNi4wNjkyMSAzMy44NTM5IDYuMDU3NTggMzMuODE0M0w0LjAxNzU4IDI2Ljg0MzFDNC4wMTExIDI2LjgyIDQuMDA5OTggMjYuNzk1OCA0LjAxNDI5IDI2Ljc3MjJDNC4wMTg2IDI2Ljc0ODYgNC4wMjgyNCAyNi43MjYzIDQuMDQyNDYgMjYuNzA3MUM0LjA1NjY5IDI2LjY4NzggNC4wNzUxMyAyNi42NzIgNC4wOTYzNyAyNi42NjA5QzQuMTE3NjIgMjYuNjQ5OCA0LjE0MTEyIDI2LjY0MzcgNC4xNjUwOCAyNi42NDMxTDEwLjAyMjYgMjYuNTMwNlYyNi41MjkzWk00LjM3NzU4IDI2Ljk1MThMNi4zMTUwOCAzMy41NzY4TDEzLjEwODggMzEuNzAxOEw5Ljk0MTMzIDI2Ljg0NTZMNC4zNzg4MyAyNi45NTE4SDQuMzc3NThaJyBmaWxsPSclMjNFMjc2MjUnLyUzZSUzY3BhdGggZD0nTTEyLjk3MzkgMTguMDUyNUwxMC45ODM5IDIxLjA1MzdMMTguMDcxNCAyMS4zNzYyTDE3LjgzNzYgMTMuNzVMMTIuOTc1MSAxOC4wNTM3TDEyLjk3MzkgMTguMDUyNVonIGZpbGw9JyUyM0UyNzYyNScvJTNlJTNjcGF0aCBkPSdNMTcuODk4NyAxMy42MDMxQzE3Ljk1NSAxMy42MjgxIDE3Ljk5MTIgMTMuNjgxOCAxNy45OTM3IDEzLjc0MzFMMTguMjMgMjEuMzcxOEMxOC4yMzA3IDIxLjM5MzYgMTguMjI2OSAyMS40MTUyIDE4LjIxODggMjEuNDM1NEMxOC4yMTA3IDIxLjQ1NTYgMTguMTk4NiAyMS40NzQgMTguMTgzMSAyMS40ODkyQzE4LjE2NzYgMjEuNTA0NSAxOC4xNDkxIDIxLjUxNjQgMTguMTI4NyAyMS41MjQxQzE4LjEwODQgMjEuNTMxOSAxOC4wODY3IDIxLjUzNTQgMTguMDY1IDIxLjUzNDNMMTAuOTc3NSAyMS4yMTA2QzEwLjk0OTcgMjEuMjA5NCAxMC45MjI2IDIxLjIwMDkgMTAuODk5MiAyMS4xODU4QzEwLjg3NTggMjEuMTcwOCAxMC44NTY3IDIxLjE0OTkgMTAuODQ0IDIxLjEyNTFDMTAuODMxMyAyMS4xMDAzIDEwLjgyNTQgMjEuMDcyNiAxMC44MjY5IDIxLjA0NDhDMTAuODI4NCAyMS4wMTcgMTAuODM3MiAyMC45OTAxIDEwLjg1MjUgMjAuOTY2OEwxMi44NDI1IDE3Ljk2NDNDMTIuODQ5OSAxNy45NTMzIDEyLjg1ODcgMTcuOTQzMiAxMi44Njg3IDE3LjkzNDNMMTcuNzMxMiAxMy42MjkzQzE3Ljc1MzcgMTMuNjA5NCAxNy43ODE1IDEzLjU5NjQgMTcuODExMSAxMy41OTE3QzE3Ljg0MDggMTMuNTg3MSAxNy44NzEyIDEzLjU5MSAxNy44OTg3IDEzLjYwMzFWMTMuNjAzMVpNMTMuMDkzNyAxOC4xNTU2TDExLjI2ODcgMjAuOTA5M0wxNy45MSAyMS4yMTA2TDE3LjY4ODcgMTQuMDg4MUwxMy4wOTM3IDE4LjE1NTZWMTguMTU1NlonIGZpbGw9JyUyM0UyNzYyNScvJTNlJTNjcGF0aCBkPSdNMjcuMDI2NSAxOC4wNTM0TDIyLjA4OSAxMy42NjIxTDIxLjkyNzcgMjEuMzc4NEwyOS4wMTUyIDIxLjA1NTlMMjcuMDI2NSAxOC4wNTM0VjE4LjA1MzRaJyBmaWxsPSclMjNFMjc2MjUnLyUzZSUzY3BhdGggZD0nTTIyLjAyNSAxMy41MTc1QzIyLjA1MjcgMTMuNTA1MiAyMi4wODM0IDEzLjUwMTEgMjIuMTEzMyAxMy41MDU4QzIyLjE0MzIgMTMuNTEwNCAyMi4xNzEyIDEzLjUyMzYgMjIuMTkzOCAxMy41NDM4TDI3LjEzMTMgMTcuOTM1QzI3LjE0MTMgMTcuOTQzOSAyNy4xNTAxIDE3Ljk1NCAyNy4xNTc1IDE3Ljk2NUwyOS4xNDc1IDIwLjk2NzVDMjkuMTYyOCAyMC45OTA4IDI5LjE3MTYgMjEuMDE3NyAyOS4xNzMxIDIxLjA0NTVDMjkuMTc0NiAyMS4wNzMzIDI5LjE2ODcgMjEuMTAxIDI5LjE1NiAyMS4xMjU4QzI5LjE0MzMgMjEuMTUwNiAyOS4xMjQyIDIxLjE3MTUgMjkuMTAwOCAyMS4xODY1QzI5LjA3NzQgMjEuMjAxNiAyOS4wNTA0IDIxLjIxMDEgMjkuMDIyNSAyMS4yMTEzTDIxLjkzNSAyMS41MzM4QzIxLjkxMzUgMjEuNTM0OCAyMS44OTIgMjEuNTMxNCAyMS44NzE5IDIxLjUyMzhDMjEuODUxNyAyMS41MTYyIDIxLjgzMzMgMjEuNTA0NSAyMS44MTc5IDIxLjQ4OTVDMjEuODAyNCAyMS40NzQ1IDIxLjc5MDIgMjEuNDU2NSAyMS43ODIgMjEuNDM2NkMyMS43NzM3IDIxLjQxNjcgMjEuNzY5NyAyMS4zOTUzIDIxLjc3IDIxLjM3MzhMMjEuOTMyNSAxMy42NTg4QzIxLjkzMzEgMTMuNjI4NyAyMS45NDIyIDEzLjU5OTUgMjEuOTU4OCAxMy41NzQ0QzIxLjk3NTQgMTMuNTQ5NCAyMS45OTg4IDEzLjUyOTcgMjIuMDI2MyAxMy41MTc1SDIyLjAyNVpNMjIuMjM4OCAxNC4wMDVMMjIuMDg4OCAyMS4yMTI1TDI4LjczMTMgMjAuOTFMMjYuOTA2MyAxOC4xNTYzTDIyLjI0IDE0LjAwNjNMMjIuMjM4OCAxNC4wMDVaJyBmaWxsPSclMjNFMjc2MjUnLyUzZSUzY3BhdGggZD0nTTEzLjM1ODkgMzEuNzk1N0wxNy42NTAxIDI5LjcyNDVMMTMuOTU2NCAyNi44NDU3TDEzLjM1ODkgMzEuNzk1N1onIGZpbGw9JyUyM0UyNzYyNScvJTNlJTNjcGF0aCBkPSdNMTMuODk1MiAyNi43MDE2QzEzLjkyMSAyNi42OTA4IDEzLjk0OTIgMjYuNjg3MSAxMy45NzY4IDI2LjY5MDlDMTQuMDA0NSAyNi42OTQ2IDE0LjAzMDcgMjYuNzA1NiAxNC4wNTI3IDI2LjcyMjhMMTcuNzQ2NSAyOS42MDAzQzE3Ljc2NzcgMjkuNjE2NyAxNy43ODQzIDI5LjYzODIgMTcuNzk0OSAyOS42NjI5QzE3LjgwNTQgMjkuNjg3NSAxNy44MDk1IDI5LjcxNDQgMTcuODA2OCAyOS43NDExQzE3LjgwNCAyOS43Njc4IDE3Ljc5NDUgMjkuNzkzMyAxNy43NzkyIDI5LjgxNTJDMTcuNzYzOCAyOS44MzcyIDE3Ljc0MzEgMjkuODU0OSAxNy43MTkgMjkuODY2NkwxMy40Mjc3IDMxLjkzNzhDMTMuNDAyMyAzMS45NTAxIDEzLjM3NDEgMzEuOTU1MyAxMy4zNDYgMzEuOTUzQzEzLjMxNzggMzEuOTUwNiAxMy4yOTA5IDMxLjk0MDcgMTMuMjY3OSAzMS45MjQ0QzEzLjI0NDkgMzEuOTA4IDEzLjIyNjcgMzEuODg1OCAxMy4yMTUyIDMxLjg2QzEzLjIwMzggMzEuODM0MiAxMy4xOTk1IDMxLjgwNTggMTMuMjAyNyAzMS43Nzc4TDEzLjgwMDIgMjYuODI3OEMxMy44MDM3IDI2LjgwMDUgMTMuODE0NCAyNi43NzQ2IDEzLjgzMSAyNi43NTI2QzEzLjg0NzcgMjYuNzMwNyAxMy44Njk4IDI2LjcxMzUgMTMuODk1MiAyNi43MDI4VjI2LjcwMTZaTTE0LjA3OSAyNy4xNDI4TDEzLjU1MDIgMzEuNTMwM0wxNy4zNTI3IDI5LjY5MjhMMTQuMDc5IDI3LjE0MjhWMjcuMTQyOFonIGZpbGw9JyUyM0UyNzYyNScvJTNlJTNjcGF0aCBkPSdNMjIuMzUwMSAyOS43MjQ1TDI2LjYyODggMzEuNzk1N0wyNi4wNDM4IDI2Ljg0NTdMMjIuMzUwMSAyOS43MjQ1VjI5LjcyNDVaJyBmaWxsPSclMjNFMjc2MjUnLyUzZSUzY3BhdGggZD0nTTI2LjEwNDggMjYuNzAxNkMyNi4xMzA1IDI2LjcxMjUgMjYuMTUyOSAyNi43MyAyNi4xNjk2IDI2Ljc1MjRDMjYuMTg2MyAyNi43NzQ5IDI2LjE5NjcgMjYuODAxMyAyNi4xOTk4IDI2LjgyOTFMMjYuNzg0OCAzMS43NzkxQzI2Ljc4NzggMzEuODA3IDI2Ljc4MzMgMzEuODM1MiAyNi43NzE3IDMxLjg2MDhDMjYuNzYwMiAzMS44ODY0IDI2Ljc0MiAzMS45MDg0IDI2LjcxOSAzMS45MjQ2QzI2LjY5NjEgMzEuOTQwOCAyNi42NjkyIDMxLjk1MDYgMjYuNjQxMiAzMS45NTI5QzI2LjYxMzIgMzEuOTU1MiAyNi41ODUxIDMxLjk1IDI2LjU1OTggMzEuOTM3OEwyMi4yODIzIDI5Ljg2NjZDMjIuMjU4MSAyOS44NTUgMjIuMjM3MyAyOS44Mzc0IDIyLjIyMTggMjkuODE1NUMyMi4yMDYzIDI5Ljc5MzYgMjIuMTk2NyAyOS43NjgxIDIyLjE5MzggMjkuNzQxNEMyMi4xOTA5IDI5LjcxNDggMjIuMTk0OSAyOS42ODc4IDIyLjIwNTMgMjkuNjYzMUMyMi4yMTU4IDI5LjYzODQgMjIuMjMyNCAyOS42MTY4IDIyLjI1MzUgMjkuNjAwM0wyNS45NDczIDI2LjcyMjhDMjUuOTY5MyAyNi43MDU2IDI1Ljk5NTUgMjYuNjk0NiAyNi4wMjMyIDI2LjY5MDlDMjYuMDUwOSAyNi42ODcxIDI2LjA3OSAyNi42OTA4IDI2LjEwNDggMjYuNzAxNlpNMjIuNjQ3MyAyOS42OTQxTDI2LjQzODYgMzEuNTI5MUwyNS45MTk4IDI3LjE0MjhMMjIuNjQ3MyAyOS42OTI4VjI5LjY5NDFaJyBmaWxsPSclMjNFMjc2MjUnLyUzZSUzY3BhdGggZD0nTTI2LjYyODggMzEuNzk1OUwyMi4zNTAxIDI5LjcyNDZMMjIuNjk4OCAzMi41MDM0TDIyLjY2MTMgMzMuNjgyMUwyNi42Mjg4IDMxLjc5NTlWMzEuNzk1OVonIGZpbGw9JyUyM0Q1QkZCMicvJTNlJTNjcGF0aCBkPSdNMjIuMjU4NiAyOS41OTc3QzIyLjI4MTUgMjkuNTgxMyAyMi4zMDg1IDI5LjU3MTQgMjIuMzM2NyAyOS41Njg5QzIyLjM2NDggMjkuNTY2NSAyMi4zOTMxIDI5LjU3MTcgMjIuNDE4NiAyOS41ODRMMjYuNjk3MyAzMS42NTUyQzI2LjcyNCAzMS42NjgyIDI2Ljc0NjQgMzEuNjg4NSAyNi43NjIgMzEuNzEzNkMyNi43Nzc3IDMxLjczODggMjYuNzg1OSAzMS43Njc5IDI2Ljc4NTggMzEuNzk3NUMyNi43ODU3IDMxLjgyNzEgMjYuNzc3MiAzMS44NTYxIDI2Ljc2MTMgMzEuODgxMkMyNi43NDU0IDMxLjkwNjIgMjYuNzIyOCAzMS45MjYyIDI2LjY5NjEgMzEuOTM5TDIyLjcyODYgMzMuODI0QzIyLjcwNDIgMzMuODM1NSAyMi42Nzc0IDMzLjg0MDYgMjIuNjUwNSAzMy44Mzg5QzIyLjYyMzcgMzMuODM3MSAyMi41OTc3IDMzLjgyODQgMjIuNTc1MiAzMy44MTM4QzIyLjU1MjYgMzMuNzk5MSAyMi41MzQyIDMzLjc3ODkgMjIuNTIxNiAzMy43NTUxQzIyLjUwOTEgMzMuNzMxMyAyMi41MDI5IDMzLjcwNDYgMjIuNTAzNiAzMy42Nzc3TDIyLjU0MTEgMzIuNTExNUwyMi4xOTM2IDI5Ljc0NTJDMjIuMTkwMSAyOS43MTcxIDIyLjE5NDMgMjkuNjg4NSAyMi4yMDU4IDI5LjY2MjVDMjIuMjE3MiAyOS42MzY2IDIyLjIzNTQgMjkuNjE0MiAyMi4yNTg2IDI5LjU5NzdWMjkuNTk3N1pNMjIuNTQyMyAyOS45OTRMMjIuODU0OCAzMi40ODRDMjIuODU1NCAzMi40OTIzIDIyLjg1NTQgMzIuNTAwNyAyMi44NTQ4IDMyLjUwOUwyMi44MjczIDMzLjQyOUwyNi4yNjQ4IDMxLjc5NTJMMjIuNTQyMyAyOS45OTRWMjkuOTk0WicgZmlsbD0nJTIzRDVCRkIyJy8lM2UlM2NwYXRoIGQ9J00xMy4zNTg5IDMxLjc5NTlMMTcuMzM4OSAzMy42ODIxTDE3LjMxMzkgMzIuNTAzNEwxNy42NTAxIDI5LjcyNDZMMTMuMzU4OSAzMS43OTU5WicgZmlsbD0nJTIzRDVCRkIyJy8lM2UlM2NwYXRoIGQ9J00xNy43NDEzIDI5LjU5ODJDMTcuNzY0MiAyOS42MTQ2IDE3Ljc4MjMgMjkuNjM2OCAxNy43OTM3IDI5LjY2MjVDMTcuODA1MSAyOS42ODgyIDE3LjgwOTUgMjkuNzE2NSAxNy44MDYzIDI5Ljc0NDVMMTcuNDcxMyAzMi41MTJMMTcuNDk2MyAzMy42Nzk1QzE3LjQ5NjcgMzMuNzA2MyAxNy40OTAzIDMzLjczMjggMTcuNDc3NyAzMy43NTY0QzE3LjQ2NTEgMzMuNzggMTcuNDQ2NiAzMy44MDAxIDE3LjQyNDEgMzMuODE0NkMxNy40MDE2IDMzLjgyOTEgMTcuMzc1NyAzMy44Mzc2IDE3LjM0OSAzMy44Mzk0QzE3LjMyMjIgMzMuODQxMSAxNy4yOTU1IDMzLjgzNiAxNy4yNzEzIDMzLjgyNDVMMTMuMjkxMyAzMS45Mzk1QzEzLjI2NDYgMzEuOTI2NiAxMy4yNDIgMzEuOTA2NSAxMy4yMjYzIDMxLjg4MTRDMTMuMjEwNSAzMS44NTYzIDEzLjIwMjEgMzEuODI3MyAxMy4yMDIxIDMxLjc5NzZDMTMuMjAyMSAzMS43NjggMTMuMjEwNSAzMS43Mzg5IDEzLjIyNjMgMzEuNzEzOUMxMy4yNDIgMzEuNjg4OCAxMy4yNjQ2IDMxLjY2ODYgMTMuMjkxMyAzMS42NTU3TDE3LjU4MTMgMjkuNTg0NUMxNy42MDY2IDI5LjU3MiAxNy42MzQ4IDI5LjU2NjYgMTcuNjYzIDI5LjU2ODhDMTcuNjkxMSAyOS41NzEgMTcuNzE4MiAyOS41ODA4IDE3Ljc0MTMgMjkuNTk3VjI5LjU5ODJaTTEzLjcyMzggMzEuNzk1N0wxNy4xNzYzIDMzLjQzMDdMMTcuMTU2MyAzMi41MDgyTDE3LjE1NzUgMzIuNDg1N0wxNy40NTc1IDI5Ljk5MzJMMTMuNzIzOCAzMS43OTU3WicgZmlsbD0nJTIzRDVCRkIyJy8lM2UlM2NwYXRoIGQ9J00xNy40MTI3IDI1LjAxMjdMMTMuODU2NCAyMy45NzAyTDE2LjM2ODkgMjIuODE2NEwxNy40MTI3IDI1LjAxMTRWMjUuMDEyN1onIGZpbGw9JyUyMzIzMzQ0NycvJTNlJTNjcGF0aCBkPSdNMTYuMzAyNCAyMi42NzNDMTYuMzQgMjIuNjU1NCAxNi4zODMxIDIyLjY1MzQgMTYuNDIyMiAyMi42Njc1QzE2LjQ2MTMgMjIuNjgxNSAxNi40OTMzIDIyLjcxMDUgMTYuNTExMSAyMi43NDhMMTcuNTU0OSAyNC45NDQyQzE3LjU2NzkgMjQuOTcxNiAxNy41NzI3IDI1LjAwMjIgMTcuNTY4NyAyNS4wMzIzQzE3LjU2NDggMjUuMDYyNCAxNy41NTIyIDI1LjA5MDcgMTcuNTMyNSAyNS4xMTM4QzE3LjUxMjggMjUuMTM2OSAxNy40ODY5IDI1LjE1MzkgMTcuNDU3OCAyNS4xNjI2QzE3LjQyODggMjUuMTcxMyAxNy4zOTc4IDI1LjE3MTQgMTcuMzY4NiAyNS4xNjNMMTMuODEyNCAyNC4xMjA1QzEzLjc4MTcgMjQuMTExNSAxMy43NTQ1IDI0LjA5MzMgMTMuNzM0MyAyNC4wNjg1QzEzLjcxNDIgMjQuMDQzNiAxMy43MDIxIDI0LjAxMzIgMTMuNjk5NyAyMy45ODE0QzEzLjY5NzIgMjMuOTQ5NSAxMy43MDQ2IDIzLjkxNzYgMTMuNzIwNyAyMy44OUMxMy43MzY4IDIzLjg2MjMgMTMuNzYwOSAyMy44NDAzIDEzLjc4OTkgMjMuODI2N0wxNi4zMDI0IDIyLjY3M1YyMi42NzNaTTE0LjMwNDkgMjMuOTM2N0wxNy4xMTk5IDI0Ljc2MTdMMTYuMjkyNCAyMy4wMjQyTDE0LjMwNDkgMjMuOTM2N1YyMy45MzY3WicgZmlsbD0nJTIzMjMzNDQ3Jy8lM2UlM2NwYXRoIGQ9J00yMi41ODc3IDI1LjAxMjdMMjMuNjMxNCAyMi44MTY0TDI2LjE1NjQgMjMuOTcwMkwyMi41ODY0IDI1LjAxMTRMMjIuNTg3NyAyNS4wMTI3WicgZmlsbD0nJTIzMjMzNDQ3Jy8lM2UlM2NwYXRoIGQ9J00yMy40ODg2IDIyLjc0NzVDMjMuNTA2NSAyMi43MTAzIDIzLjUzODIgMjIuNjgxNiAyMy41NzcxIDIyLjY2NzZDMjMuNjE1OSAyMi42NTM2IDIzLjY1ODYgMjIuNjU1MyAyMy42OTYxIDIyLjY3MjVMMjYuMjIxMSAyMy44MjYyQzI2LjI1MDEgMjMuODM5NyAyNi4yNzQzIDIzLjg2MTcgMjYuMjkwNSAyMy44ODkyQzI2LjMwNjcgMjMuOTE2OCAyNi4zMTQyIDIzLjk0ODYgMjYuMzExOSAyMy45ODA0QzI2LjMwOTYgMjQuMDEyMyAyNi4yOTc2IDI0LjA0MjcgMjYuMjc3NiAyNC4wNjc3QzI2LjI1NzYgMjQuMDkyNiAyNi4yMzA1IDI0LjExMDggMjYuMTk5OSAyNC4xMkwyMi42MzExIDI1LjE2MjVDMjIuNjAxOSAyNS4xNzEzIDIyLjU3MDggMjUuMTcxNCAyMi41NDE1IDI1LjE2MjhDMjIuNTEyMiAyNS4xNTQzIDIyLjQ4NiAyNS4xMzc0IDIyLjQ2NjEgMjUuMTE0MkMyMi40NDYzIDI1LjA5MSAyMi40MzM2IDI1LjA2MjYgMjIuNDI5NiAyNS4wMzIzQzIyLjQyNTYgMjUuMDAyIDIyLjQzMDUgMjQuOTcxMyAyMi40NDM2IDI0Ljk0MzdMMjMuNDg4NiAyMi43NDc1VjIyLjc0NzVaTTIzLjcwNzQgMjMuMDIyNUwyMi44Nzk5IDI0Ljc2MTJMMjUuNzA0OSAyMy45MzYyTDIzLjcwNzQgMjMuMDIzN1YyMy4wMjI1WicgZmlsbD0nJTIzMjMzNDQ3Jy8lM2UlM2NwYXRoIGQ9J00xMy4zNTg5IDMxLjc5NTVMMTMuOTgxNCAyNi42ODU1TDEwLjAyNjQgMjYuNzk2OEwxMy4zNTg5IDMxLjc5NjhWMzEuNzk1NVonIGZpbGw9JyUyM0NDNjIyOCcvJTNlJTNjcGF0aCBkPSdNMTQuMDk3NyAyNi41Nzk5QzE0LjExMyAyNi41OTY2IDE0LjEyNDUgMjYuNjE2NCAxNC4xMzE0IDI2LjYzOEMxNC4xMzgzIDI2LjY1OTYgMTQuMTQwNSAyNi42ODI0IDE0LjEzNzcgMjYuNzA0OUwxMy41MTUyIDMxLjgxNDlDMTMuNTExNCAzMS44NDY5IDEzLjQ5NzkgMzEuODc2OSAxMy40NzY1IDMxLjkwMUMxMy40NTUxIDMxLjkyNTEgMTMuNDI2OCAzMS45NDIgMTMuMzk1NSAzMS45NDk1QzEzLjM2NDEgMzEuOTU3IDEzLjMzMTIgMzEuOTU0NyAxMy4zMDEyIDMxLjk0MjlDMTMuMjcxMyAzMS45MzExIDEzLjI0NTYgMzEuOTEwNCAxMy4yMjc3IDMxLjg4MzZMOS44OTUyNCAyNi44ODQ5QzkuODc5NiAyNi44NjE1IDkuODcwNTEgMjYuODM0MyA5Ljg2ODkxIDI2LjgwNjNDOS44NjczMSAyNi43NzgyIDkuODczMjYgMjYuNzUwMiA5Ljg4NjE1IDI2LjcyNTJDOS44OTkwMyAyNi43MDAyIDkuOTE4MzggMjYuNjc5MSA5Ljk0MjE4IDI2LjY2NDFDOS45NjU5OSAyNi42NDkxIDkuOTkzMzcgMjYuNjQwNyAxMC4wMjE1IDI2LjYzOTlMMTMuOTc2NSAyNi41Mjc0QzEzLjk5OTMgMjYuNTI2OSAxNC4wMjE5IDI2LjUzMTQgMTQuMDQyOCAyNi41NDA0QzE0LjA2MzggMjYuNTQ5NSAxNC4wODI1IDI2LjU2MjkgMTQuMDk3NyAyNi41Nzk5VjI2LjU3OTlaTTEwLjMxNTIgMjYuOTQ3NEwxMy4yNTQgMzEuMzU0OUwxMy44MDI3IDI2Ljg0ODZMMTAuMzE1MiAyNi45NDc0VjI2Ljk0NzRaJyBmaWxsPSclMjNDQzYyMjgnLyUzZSUzY3BhdGggZD0nTTI2LjAxODYgMjYuNjg2OEwyNi42Mjg2IDMxLjc5NjhMMjkuOTczNiAyNi43OThMMjYuMDE4NiAyNi42ODU1VjI2LjY4NjhaJyBmaWxsPSclMjNDQzYyMjgnLyUzZSUzY3BhdGggZD0nTTI1LjkwMjUgMjYuNTgwNkMyNS45MTc4IDI2LjU2MzggMjUuOTM2NSAyNi41NTA2IDI1Ljk1NzUgMjYuNTQxN0MyNS45Nzg0IDI2LjUzMjkgMjYuMDAxIDI2LjUyODcgMjYuMDIzNyAyNi41Mjk0TDI5Ljk3ODcgMjYuNjQxOUMzMC4wMDY1IDI2LjY0MzEgMzAuMDMzNSAyNi42NTE2IDMwLjA1NyAyNi42NjY2QzMwLjA4MDQgMjYuNjgxNiAzMC4wOTk1IDI2LjcwMjYgMzAuMTEyMiAyNi43Mjc0QzMwLjEyNDkgMjYuNzUyMSAzMC4xMzA4IDI2Ljc3OTggMzAuMTI5MyAyNi44MDc2QzMwLjEyNzggMjYuODM1NCAzMC4xMTkgMjYuODYyMyAzMC4xMDM3IDI2Ljg4NTZMMjYuNzYgMzEuODg1NkMyNi43NDIgMzEuOTEyNSAyNi43MTYzIDMxLjkzMzIgMjYuNjg2MiAzMS45NDQ5QzI2LjY1NjEgMzEuOTU2NiAyNi42MjMxIDMxLjk1ODggMjYuNTkxNyAzMS45NTEyQzI2LjU2MDMgMzEuOTQzNSAyNi41MzIxIDMxLjkyNjQgMjYuNTEwNyAzMS45MDIyQzI2LjQ4OTQgMzEuODc3OSAyNi40NzYgMzEuODQ3NyAyNi40NzI1IDMxLjgxNTZMMjUuODYyNSAyNi43MDU2QzI1Ljg1OTcgMjYuNjgzMSAyNS44NjE5IDI2LjY2MDMgMjUuODY4OCAyNi42Mzg4QzI1Ljg3NTcgMjYuNjE3MiAyNS44ODcyIDI2LjU5NzQgMjUuOTAyNSAyNi41ODA2VjI2LjU4MDZaTTI2LjE5NzUgMjYuODQ5NEwyNi43MzUgMzEuMzU1NkwyOS42ODUgMjYuOTQ4MUwyNi4xOTc1IDI2Ljg0ODFWMjYuODQ5NFonIGZpbGw9JyUyM0NDNjIyOCcvJTNlJTNjcGF0aCBkPSdNMjkuMDE2NSAyMS4wNTQ3TDIxLjkyNzcgMjEuMzc3MkwyMi41ODY1IDI1LjAxMjJMMjMuNjMxNSAyMi44MTU5TDI2LjE1NjUgMjMuOTY5N0wyOS4wMTY1IDIxLjA1NDdWMjEuMDU0N1onIGZpbGw9JyUyM0NDNjIyOCcvJTNlJTNjcGF0aCBkPSdNMjkuMTYwMiAyMC45OTA0QzI5LjE3MzIgMjEuMDE5MyAyOS4xNzcyIDIxLjA1MTUgMjkuMTcxNiAyMS4wODI3QzI5LjE2NiAyMS4xMTM5IDI5LjE1MTIgMjEuMTQyNyAyOS4xMjg5IDIxLjE2NTRMMjYuMjY4OSAyNC4wODA0QzI2LjI0NjIgMjQuMTAzNiAyNi4yMTY3IDI0LjExOTIgMjYuMTg0NyAyNC4xMjVDMjYuMTUyNyAyNC4xMzA4IDI2LjExOTcgMjQuMTI2NiAyNi4wOTAyIDI0LjExMjlMMjMuNzA2NCAyMy4wMjQxTDIyLjcyODkgMjUuMDc5MUMyMi43MTQ3IDI1LjEwOTMgMjIuNjkxMSAyNS4xMzQyIDIyLjY2MTggMjUuMTUwMkMyMi42MzI0IDI1LjE2NjEgMjIuNTk4NyAyNS4xNzIzIDIyLjU2NTYgMjUuMTY3OUMyMi41MzI0IDI1LjE2MzQgMjIuNTAxNiAyNS4xNDg1IDIyLjQ3NzUgMjUuMTI1NEMyMi40NTM0IDI1LjEwMjIgMjIuNDM3MiAyNS4wNzIgMjIuNDMxNCAyNS4wMzkxTDIxLjc3MjcgMjEuNDA1NEMyMS43Njg2IDIxLjM4MzIgMjEuNzY5MiAyMS4zNjA1IDIxLjc3NDYgMjEuMzM4NkMyMS43OCAyMS4zMTY3IDIxLjc5MDEgMjEuMjk2MyAyMS44MDQgMjEuMjc4N0MyMS44MTggMjEuMjYxIDIxLjgzNTYgMjEuMjQ2NiAyMS44NTU3IDIxLjIzNjNDMjEuODc1NyAyMS4yMjYgMjEuODk3NyAyMS4yMjAyIDIxLjkyMDIgMjEuMjE5MUwyOS4wMDg5IDIwLjg5NjZDMjkuMDczOSAyMC44OTQxIDI5LjEzMzkgMjAuOTMxNiAyOS4xNTg5IDIwLjk5MDRIMjkuMTYwMlpNMjIuMTE1MiAyMS41MjY2TDIyLjY1MzkgMjQuNTAxNkwyMy40ODg5IDIyLjc0NzlDMjMuNTA2OCAyMi43MTA3IDIzLjUzODYgMjIuNjgyIDIzLjU3NzQgMjIuNjY3OUMyMy42MTYyIDIyLjY1MzkgMjMuNjU4OSAyMi42NTU3IDIzLjY5NjQgMjIuNjcyOUwyNi4xMjE0IDIzLjc4MDRMMjguNjIyNyAyMS4yMzA0TDIyLjExNTIgMjEuNTI2NlYyMS41MjY2WicgZmlsbD0nJTIzQ0M2MjI4Jy8lM2UlM2NwYXRoIGQ9J00xMy44NTY0IDIzLjk2OTdMMTYuMzY4OSAyMi44MTU5TDE3LjQxMjYgMjUuMDEyMkwxOC4wNzI2IDIxLjM3NzJMMTAuOTgzOSAyMS4wNTQ3TDEzLjg1NjQgMjMuOTY5N1YyMy45Njk3WicgZmlsbD0nJTIzQ0M2MjI4Jy8lM2UlM2NwYXRoIGQ9J00xMC44NCAyMC45OTAzQzEwLjg1MjggMjAuOTYxNSAxMC44NzM5IDIwLjkzNzEgMTAuOTAwNiAyMC45MjA0QzEwLjkyNzQgMjAuOTAzNyAxMC45NTg1IDIwLjg5NTQgMTAuOTkgMjAuODk2NkwxOC4wODAxIDIxLjIxOTFDMTguMTAyNSAyMS4yMjAxIDE4LjEyNDUgMjEuMjI2IDE4LjE0NDYgMjEuMjM2M0MxOC4xNjQ2IDIxLjI0NjUgMTguMTgyMiAyMS4yNjEgMTguMTk2MiAyMS4yNzg2QzE4LjIxMDIgMjEuMjk2MyAxOC4yMjAyIDIxLjMxNjcgMTguMjI1NiAyMS4zMzg2QzE4LjIzMSAyMS4zNjA1IDE4LjIzMTcgMjEuMzgzMiAxOC4yMjc2IDIxLjQwNTNMMTcuNTY4OCAyNS4wMzkxQzE3LjU2MyAyNS4wNzIgMTcuNTQ2OSAyNS4xMDIyIDE3LjUyMjggMjUuMTI1NEMxNy40OTg3IDI1LjE0ODUgMTcuNDY3OCAyNS4xNjM0IDE3LjQzNDcgMjUuMTY3OUMxNy40MDE1IDI1LjE3MjMgMTcuMzY3OSAyNS4xNjYxIDE3LjMzODUgMjUuMTUwMkMxNy4zMDkxIDI1LjEzNDIgMTcuMjg1NiAyNS4xMDkzIDE3LjI3MTMgMjUuMDc5MUwxNi4yOTI2IDIzLjAyNDFMMTMuOTIyNSAyNC4xMTE2QzEzLjg5MzIgMjQuMTI1NSAxMy44NjAyIDI0LjEyOTkgMTMuODI4MiAyNC4xMjQzQzEzLjc5NjIgMjQuMTE4NyAxMy43NjY3IDI0LjEwMzQgMTMuNzQzOCAyNC4wODAzTDEwLjg3MTMgMjEuMTY1M0MxMC44NDkxIDIxLjE0MjcgMTAuODM0MiAyMS4xMTM5IDEwLjgyODYgMjEuMDgyN0MxMC44MjMgMjEuMDUxNSAxMC44MjcgMjEuMDE5MyAxMC44NCAyMC45OTAzVjIwLjk5MDNaTTExLjM3NzUgMjEuMjMwM0wxMy44OTAxIDIzLjc4MDNMMTYuMzAyNiAyMi42NzI4QzE2LjM0MDIgMjIuNjU1MyAxNi4zODMzIDIyLjY1MzMgMTYuNDIyNCAyMi42Njc0QzE2LjQ2MTUgMjIuNjgxNCAxNi40OTM0IDIyLjcxMDMgMTYuNTExMyAyMi43NDc4TDE3LjM0NTEgMjQuNTAyOEwxNy44ODUgMjEuNTI2NkwxMS4zNzc1IDIxLjIzMDNaJyBmaWxsPSclMjNDQzYyMjgnLyUzZSUzY3BhdGggZD0nTTEwLjk4MzkgMjEuMDU0N0wxMy45NTY0IDI2Ljg0NzJMMTMuODU2NCAyMy45Njk3TDEwLjk4MzkgMjEuMDU0N1onIGZpbGw9JyUyM0UyNzUyNScvJTNlJTNjcGF0aCBkPSdNMTAuODkxMyAyMC45MjU4QzEwLjk1MzggMjAuODgwOCAxMS4wNDEzIDIwLjg4ODMgMTEuMDk2MyAyMC45NDMzTDEzLjk2ODggMjMuODU4M0MxMy45OTY0IDIzLjg4NjUgMTQuMDEyNSAyMy45MjM5IDE0LjAxMzggMjMuOTYzM0wxNC4xMTM4IDI2Ljg0MDhDMTQuMTE1MSAyNi44NzY2IDE0LjEwNDEgMjYuOTExNyAxNC4wODI3IDI2Ljk0MDVDMTQuMDYxMyAyNi45NjkyIDE0LjAzMDggMjYuOTg5NyAxMy45OTYxIDI2Ljk5ODhDMTMuOTYxNSAyNy4wMDc4IDEzLjkyNDggMjcuMDA0NyAxMy44OTIxIDI2Ljk5MDFDMTMuODU5NCAyNi45NzU1IDEzLjgzMjcgMjYuOTUwMiAxMy44MTYzIDI2LjkxODNMMTAuODQzOCAyMS4xMjU4QzEwLjgyNjUgMjEuMDkyMyAxMC44MjE3IDIxLjA1MzcgMTAuODMwNCAyMS4wMTdDMTAuODM5MiAyMC45ODAzIDEwLjg2MDggMjAuOTQ3OSAxMC44OTEzIDIwLjkyNThWMjAuOTI1OFpNMTEuNTkzOCAyMS44OTcxTDEzLjc3MzggMjYuMTQ3MUwxMy43MDEzIDI0LjAzNDZMMTEuNTkzOCAyMS44OTcxVjIxLjg5NzFaJyBmaWxsPSclMjNFMjc1MjUnLyUzZSUzY3BhdGggZD0nTTI2LjE1NjQgMjMuOTY5N0wyNi4wNDM5IDI2Ljg0NzJMMjkuMDE2NCAyMS4wNTQ3TDI2LjE1NjQgMjMuOTY5N1onIGZpbGw9JyUyM0UyNzUyNScvJTNlJTNjcGF0aCBkPSdNMjkuMTA4OCAyMC45MjY0QzI5LjE3MTMgMjAuOTcyNyAyOS4xOTI2IDIxLjA1NjQgMjkuMTU2MyAyMS4xMjY0TDI2LjE4MzggMjYuOTE4OUMyNi4xNjc1IDI2Ljk1MDggMjYuMTQwNyAyNi45NzYxIDI2LjEwODEgMjYuOTkwN0MyNi4wNzU0IDI3LjAwNTMgMjYuMDM4NyAyNy4wMDg0IDI2LjAwNCAyNi45OTk0QzI1Ljk2OTQgMjYuOTkwMyAyNS45Mzg4IDI2Ljk2OTggMjUuOTE3NCAyNi45NDFDMjUuODk2IDI2LjkxMjMgMjUuODg1MSAyNi44NzcyIDI1Ljg4NjMgMjYuODQxNEwyNS45OTg4IDIzLjk2MjdDMjYuMDAwNSAyMy45MjM3IDI2LjAxNjUgMjMuODg2NyAyNi4wNDM4IDIzLjg1ODlMMjguOTAzOCAyMC45NDM5QzI4LjkzMDIgMjAuOTE2OSAyOC45NjU0IDIwLjkwMDMgMjkuMDAzMSAyMC44OTcxQzI5LjA0MDcgMjAuODkzOCAyOS4wNzgyIDIwLjkwNDMgMjkuMTA4OCAyMC45MjY0VjIwLjkyNjRaTTI2LjMxMTMgMjQuMDM2NEwyNi4yMjg4IDI2LjE0MTRMMjguNDAzOCAyMS45MDM5TDI2LjMxMTMgMjQuMDM2NFonIGZpbGw9JyUyM0UyNzUyNScvJTNlJTNjcGF0aCBkPSdNMTguMDcyMyAyMS4zNzdMMTcuNDEzNiAyNS4wMTJMMTguMjQ2MSAyOS4zMDMyTDE4LjQzMzYgMjMuNjQ3TDE4LjA3MjMgMjEuMzc3VjIxLjM3N1onIGZpbGw9JyUyM0UyNzUyNScvJTNlJTNjcGF0aCBkPSdNMTguMDc0OSAyMS4yMTg4QzE4LjE1MTEgMjEuMjIgMTguMjE2MSAyMS4yNzYzIDE4LjIyODYgMjEuMzUyNUwxOC41ODg2IDIzLjYyMjVDMTguNTkwNSAyMy42MzI0IDE4LjU5MTMgMjMuNjQyNSAxOC41OTExIDIzLjY1MjVMMTguNDAzNiAyOS4zMDg4QzE4LjQwMjkgMjkuMzQ3OSAxOC4zODc3IDI5LjM4NTMgMTguMzYwOSAyOS40MTM4QzE4LjMzNDIgMjkuNDQyMyAxOC4yOTc3IDI5LjQ1OTggMTguMjU4NyAyOS40NjNDMTguMjE5NyAyOS40NjYxIDE4LjE4MSAyOS40NTQ2IDE4LjE1IDI5LjQzMDdDMTguMTE5IDI5LjQwNjggMTguMDk4MSAyOS4zNzIzIDE4LjA5MTEgMjkuMzMzOEwxNy4yNTg2IDI1LjA0MTNDMTcuMjU0OSAyNS4wMjE5IDE3LjI1NDkgMjUuMDAxOSAxNy4yNTg2IDI0Ljk4MjVMMTcuOTE3NCAyMS4zNDg4QzE3LjkyMzkgMjEuMzExOSAxNy45NDM0IDIxLjI3ODYgMTcuOTcyMiAyMS4yNTQ4QzE4LjAwMTEgMjEuMjMxIDE4LjAzNzUgMjEuMjE4MiAxOC4wNzQ5IDIxLjIxODhWMjEuMjE4OFpNMTcuNTczNiAyNS4wMUwxOC4xMzYxIDI3LjkwMjVMMTguMjc0OSAyMy42NTYzTDE4LjA2MjQgMjIuMzE2M0wxNy41NzM2IDI1LjAxVjI1LjAxWicgZmlsbD0nJTIzRTI3NTI1Jy8lM2UlM2NwYXRoIGQ9J00yMS45Mjc0IDIxLjM3N0wyMS41Nzg2IDIzLjYzNDVMMjEuNzUzNiAyOS4zMDMyTDIyLjU4NjEgMjUuMDEyTDIxLjkyNzQgMjEuMzc3WicgZmlsbD0nJTIzRTI3NTI1Jy8lM2UlM2NwYXRoIGQ9J00yMS45MjUxIDIxLjIxODhDMjIuMDAyNiAyMS4yMTg4IDIyLjA2ODkgMjEuMjcyNSAyMi4wODI2IDIxLjM0ODhMMjIuNzQxNCAyNC45ODI1QzIyLjc0NTEgMjUuMDAxOSAyMi43NDUxIDI1LjAyMTggMjIuNzQxNCAyNS4wNDEyTDIxLjkwODkgMjkuMzMyNUMyMS45MDIgMjkuMzcxIDIxLjg4MSAyOS40MDU1IDIxLjg1IDI5LjQyOTRDMjEuODE5IDI5LjQ1MzMgMjEuNzgwMyAyOS40NjQ4IDIxLjc0MTMgMjkuNDYxN0MyMS43MDIzIDI5LjQ1ODYgMjEuNjY1OSAyOS40NDEgMjEuNjM5MSAyOS40MTI1QzIxLjYxMjMgMjkuMzg0IDIxLjU5NzEgMjkuMzQ2NiAyMS41OTY0IDI5LjMwNzVMMjEuNDIxNCAyMy42Mzg3QzIxLjQyMTQgMjMuNjMgMjEuNDIxNCAyMy42MiAyMS40MjM5IDIzLjYxTDIxLjc3MjYgMjEuMzUyNUMyMS43NzgzIDIxLjMxNTYgMjEuNzk2OCAyMS4yODE5IDIxLjgyNSAyMS4yNTc0QzIxLjg1MzEgMjEuMjMyOSAyMS44ODkxIDIxLjIxOTIgMjEuOTI2NCAyMS4yMTg4SDIxLjkyNTFaTTIxLjk0MDEgMjIuMzI4N0wyMS43Mzc2IDIzLjY0MzdMMjEuODY3NiAyNy44ODg3TDIyLjQyNjQgMjUuMDFMMjEuOTQwMSAyMi4zMjg3WicgZmlsbD0nJTIzRTI3NTI1Jy8lM2UlM2NwYXRoIGQ9J00yMi41ODc3IDI1LjAxMjVMMjEuNzUzOSAyOS4zMDM4TDIyLjM1MDIgMjkuNzI1TDI2LjA0MzkgMjYuODQ3NUwyNi4xNTY0IDIzLjk2ODhMMjIuNTg2NCAyNS4wMTEzTDIyLjU4NzcgMjUuMDEyNVonIGZpbGw9JyUyM0Y1ODQxRicvJTNlJTNjcGF0aCBkPSdNMjYuMjUyNyAyMy44NDUxQzI2LjI5MjcgMjMuODc2MyAyNi4zMTUyIDIzLjkyNTEgMjYuMzE0IDIzLjk3NTFMMjYuMjAxNSAyNi44NTM4QzI2LjIwMDYgMjYuODc2NiAyNi4xOTQ3IDI2Ljg5ODkgMjYuMTg0NCAyNi45MTkxQzI2LjE3NCAyNi45Mzk0IDI2LjE1OTQgMjYuOTU3MiAyNi4xNDE1IDI2Ljk3MTNMMjIuNDQ3NyAyOS44NDg4QzIyLjQyMTEgMjkuODY5NiAyMi4zODg2IDI5Ljg4MTQgMjIuMzU0OCAyOS44ODIzQzIyLjMyMSAyOS44ODMyIDIyLjI4NzkgMjkuODczMiAyMi4yNjAyIDI5Ljg1MzhMMjEuNjYyNyAyOS40MzI2QzIxLjYzODIgMjkuNDE0OSAyMS42MTkyIDI5LjM5MDUgMjEuNjA4MSAyOS4zNjI0QzIxLjU5NyAyOS4zMzQyIDIxLjU5NDMgMjkuMzAzNSAyMS42MDAyIDI5LjI3MzhMMjIuNDMyNyAyNC45ODEzQzIyLjQzODIgMjQuOTUzIDIyLjQ1MTMgMjQuOTI2NiAyMi40NzA3IDI0LjkwNTNDMjIuNDkwMSAyNC44ODM5IDIyLjUxNSAyNC44NjgyIDIyLjU0MjcgMjQuODYwMUwyNi4xMTI3IDIzLjgxODhDMjYuMTM2NSAyMy44MTE5IDI2LjE2MTUgMjMuODEwNiAyNi4xODU5IDIzLjgxNTJDMjYuMjEwMiAyMy44MTk4IDI2LjIzMzEgMjMuODMgMjYuMjUyNyAyMy44NDUxVjIzLjg0NTFaTTIyLjcyNTIgMjUuMTM3NkwyMS45MjkgMjkuMjM1MUwyMi4zNDc3IDI5LjUzMDFMMjUuODkxNSAyNi43Njg4TDI1Ljk5MTUgMjQuMTgzOEwyMi43MjQgMjUuMTM3NkgyMi43MjUyWicgZmlsbD0nJTIzRjU4NDFGJy8lM2UlM2NwYXRoIGQ9J00xMy44NTY0IDIzLjk2ODhMMTMuOTU2NCAyNi44NDc1TDE3LjY1MDIgMjkuNzI1TDE4LjI0NjQgMjkuMzAzOEwxNy40MTM5IDI1LjAxMTNMMTMuODU2NCAyMy45Njg4WicgZmlsbD0nJTIzRjU4NDFGJy8lM2UlM2NwYXRoIGQ9J00xMy43NjAxIDIzLjg0NTNDMTMuNzc5OCAyMy44MzAxIDEzLjgwMyAyMy44MTk3IDEzLjgyNzUgMjMuODE1MkMxMy44NTIxIDIzLjgxMDYgMTMuODc3NCAyMy44MTE5IDEzLjkwMTMgMjMuODE5MUwxNy40NTc2IDI0Ljg2MDNDMTcuNTEzOCAyNC44NzY2IDE3LjU1NzYgMjQuOTIyOCAxNy41Njc2IDI0Ljk4MTZMMTguNDAxMyAyOS4yNzQxQzE4LjQwNzEgMjkuMzAzOSAxOC40MDQyIDI5LjMzNDcgMTguMzkyOSAyOS4zNjI5QzE4LjM4MTYgMjkuMzkxIDE4LjM2MjQgMjkuNDE1MyAxOC4zMzc2IDI5LjQzMjhMMTcuNzQwMSAyOS44NTQxQzE3LjcxMjUgMjkuODczNiAxNy42Nzk1IDI5Ljg4MzggMTcuNjQ1NyAyOS44ODMxQzE3LjYxMTkgMjkuODgyNSAxNy41NzkzIDI5Ljg3MSAxNy41NTI2IDI5Ljg1MDNMMTMuODU4OCAyNi45NzE2QzEzLjg0MDggMjYuOTU3NCAxMy44MjYgMjYuOTM5NCAxMy44MTU3IDI2LjkxODhDMTMuODA1MyAyNi44OTgzIDEzLjc5OTUgMjYuODc1OCAxMy43OTg4IDI2Ljg1MjhMMTMuNjk4OCAyMy45NzUzQzEzLjY5OCAyMy45NTAzIDEzLjcwMzEgMjMuOTI1NSAxMy43MTM4IDIzLjkwMjlDMTMuNzI0NCAyMy44ODAzIDEzLjc0MDMgMjMuODYwNiAxMy43NjAxIDIzLjg0NTNWMjMuODQ1M1pNMTQuMDIyNiAyNC4xODI4TDE0LjExMDEgMjYuNzY5MUwxNy42NTM4IDI5LjUyOTFMMTguMDcyNiAyOS4yMzQxTDE3LjI3NzYgMjUuMTM1M0wxNC4wMjEzIDI0LjE4MjhIMTQuMDIyNlonIGZpbGw9JyUyM0Y1ODQxRicvJTNlJTNjcGF0aCBkPSdNMjIuNjYyNiAzMy42ODE5TDIyLjY5ODkgMzIuNTA0NEwyMi4zNzUxIDMyLjIzMDZIMTcuNjI1MUwxNy4zMTM5IDMyLjUwNDRMMTcuMzM4OSAzMy42ODE5TDEzLjM1ODkgMzEuNzk2OUwxNC43NTI2IDMyLjkzODFMMTcuNTc1MSAzNC44ODU2SDIyLjQxMjZMMjUuMjQ3NiAzMi45MzgxTDI2LjYyODkgMzEuNzk2OUwyMi42NjE0IDMzLjY4MTlIMjIuNjYyNlonIGZpbGw9JyUyM0MwQUM5RCcvJTNlJTNjcGF0aCBkPSdNMTMuMjI1MiAzMS43MTI3QzEzLjI0NTcgMzEuNjc5OSAxMy4yNzc1IDMxLjY1NTggMTMuMzE0NiAzMS42NDVDMTMuMzUxNyAzMS42MzQxIDEzLjM5MTUgMzEuNjM3MyAxMy40MjY0IDMxLjY1NEwxNy4xNzY0IDMzLjQzMDJMMTcuMTU2NCAzMi41MDY1QzE3LjE1NjQgMzIuNDYwMiAxNy4xNzUyIDMyLjQxNjUgMTcuMjEwMiAzMi4zODUyTDE3LjUyMTQgMzIuMTEyN0MxNy41NSAzMi4wODcyIDE3LjU4NjkgMzIuMDczIDE3LjYyNTIgMzIuMDcyN0gyMi4zNzUyQzIyLjQxMjcgMzIuMDcyNyAyMi40NDg5IDMyLjA4NTIgMjIuNDc3NyAzMi4xMTAyTDIyLjgwMDIgMzIuMzgyN0MyMi44Mzc3IDMyLjQxNCAyMi44NTc3IDMyLjQ2MDIgMjIuODU2NCAzMi41MDc3TDIyLjgyNzcgMzMuNDI5TDI2LjU2MTQgMzEuNjU0QzI2LjU5NjEgMzEuNjM3NyAyNi42MzU1IDMxLjYzNDYgMjYuNjcyMyAzMS42NDUzQzI2LjcwOTEgMzEuNjU2MSAyNi43NDA3IDMxLjY3OTggMjYuNzYxMiAzMS43MTIxQzI2Ljc4MTcgMzEuNzQ0NSAyNi43ODk4IDMxLjc4MzIgMjYuNzgzOCAzMS44MjFDMjYuNzc3OSAzMS44NTg5IDI2Ljc1ODQgMzEuODkzMiAyNi43Mjg5IDMxLjkxNzdMMjUuMzM3NyAzMy4wNjc3TDIyLjUwMjcgMzUuMDE1MkMyMi40NzYyIDM1LjAzMzMgMjIuNDQ0OCAzNS4wNDI5IDIyLjQxMjcgMzUuMDQyN0gxNy41NzUyQzE3LjU0MzEgMzUuMDQzIDE3LjUxMTYgMzUuMDMzNCAxNy40ODUyIDM1LjAxNTJMMTQuNjUxNCAzMy4wNjAyTDEzLjI1ODkgMzEuOTE5QzEzLjIyOTMgMzEuODk0NSAxMy4yMDk2IDMxLjg2IDEzLjIwMzYgMzEuODIyQzEzLjE5NzYgMzEuNzg0IDEzLjIwNTcgMzEuNzQ1MSAxMy4yMjY0IDMxLjcxMjdIMTMuMjI1MlpNMTQuNDUyNyAzMi40ODlMMTQuODQ2NCAzMi44MTE1TDE3LjYyMzkgMzQuNzI3N0gyMi4zNjM5TDI1LjE1MzkgMzIuODExNUwyNS41NTAyIDMyLjQ4MjdMMjIuNzI4OSAzMy44MjRDMjIuNzA0NiAzMy44MzU1IDIyLjY3NzcgMzMuODQwNiAyMi42NTA5IDMzLjgzODhDMjIuNjI0IDMzLjgzNyAyMi41OTgxIDMzLjgyODQgMjIuNTc1NSAzMy44MTM3QzIyLjU1MyAzMy43OTkxIDIyLjUzNDUgMzMuNzc4OSAyMi41MjIgMzMuNzU1QzIyLjUwOTUgMzMuNzMxMiAyMi41MDMyIDMzLjcwNDYgMjIuNTAzOSAzMy42Nzc3TDIyLjUzODkgMzIuNTc1MkwyMi4zMTc3IDMyLjM4NzdIMTcuNjgzOUwxNy40NzI3IDMyLjU3NEwxNy40OTY0IDMzLjY3OUMxNy40OTY5IDMzLjcwNTggMTcuNDkwNSAzMy43MzIyIDE3LjQ3NzkgMzMuNzU1OUMxNy40NjUyIDMzLjc3OTUgMTcuNDQ2OCAzMy43OTk1IDE3LjQyNDMgMzMuODE0MUMxNy40MDE3IDMzLjgyODYgMTcuMzc1OSAzMy44MzcxIDE3LjM0OTEgMzMuODM4OEMxNy4zMjI0IDMzLjg0MDYgMTcuMjk1NiAzMy44MzU0IDE3LjI3MTQgMzMuODI0TDE0LjQ1MjcgMzIuNDg5VjMyLjQ4OVonIGZpbGw9JyUyM0MwQUM5RCcvJTNlJTNjcGF0aCBkPSdNMjIuMzUwMiAyOS43MjUyTDIxLjc1NCAyOS4zMDI3SDE4LjI0NjVMMTcuNjUwMiAyOS43MjUyTDE3LjMxNCAzMi41MDRMMTcuNjI1MiAzMi4yMzAySDIyLjM3NTJMMjIuNjk5IDMyLjUwNEwyMi4zNTAyIDI5LjcyNTJaJyBmaWxsPSclMjMxNjE2MTYnLyUzZSUzY3BhdGggZD0nTTE4LjE1NDkgMjkuMTc0NUMxOC4xODE0IDI5LjE1NTMgMTguMjEzMyAyOS4xNDQ4IDE4LjI0NjEgMjkuMTQ0NUgyMS43NTM2QzIxLjc4NjEgMjkuMTQ0NSAyMS44MTc0IDI5LjE1NTggMjEuODQ0OSAyOS4xNzQ1TDIyLjQ0MTEgMjkuNTk1OEMyMi40Nzc0IDI5LjYyMDggMjIuNTAxMSAyOS42NjA4IDIyLjUwNjEgMjkuNzA0NUwyMi44NTQ5IDMyLjQ4MzNDMjIuODU4OCAzMi41MTQ3IDIyLjg1MzEgMzIuNTQ2NSAyMi44Mzg2IDMyLjU3NDZDMjIuODI0MiAzMi42MDI3IDIyLjgwMTYgMzIuNjI1OSAyMi43NzM4IDMyLjY0MUMyMi43NDYgMzIuNjU2MSAyMi43MTQzIDMyLjY2MjUgMjIuNjgyOSAzMi42NTkzQzIyLjY1MTQgMzIuNjU2MSAyMi42MjE2IDMyLjY0MzYgMjIuNTk3NCAzMi42MjMzTDIyLjMxNzQgMzIuMzg3SDE3LjY4MzZMMTcuNDE3NCAzMi42MjA4QzE3LjM5MzQgMzIuNjQxNyAxNy4zNjM2IDMyLjY1NDkgMTcuMzMyIDMyLjY1ODZDMTcuMzAwMyAzMi42NjIzIDE3LjI2ODMgMzIuNjU2MyAxNy4yNDAxIDMyLjY0MTRDMTcuMjEyIDMyLjYyNjUgMTcuMTg5IDMyLjYwMzQgMTcuMTc0MiAzMi41NzUyQzE3LjE1OTQgMzIuNTQ3IDE3LjE1MzYgMzIuNTE0OSAxNy4xNTc0IDMyLjQ4MzNMMTcuNDkyNCAyOS43MDU4QzE3LjQ5NTEgMjkuNjgzOCAxNy41MDI0IDI5LjY2MjcgMTcuNTEzOCAyOS42NDM3QzE3LjUyNTIgMjkuNjI0OCAxNy41NDA1IDI5LjYwODQgMTcuNTU4NiAyOS41OTU4TDE4LjE1NDkgMjkuMTc0NVYyOS4xNzQ1Wk0xOC4yOTYxIDI5LjQ1OTVMMTcuNzk3NCAyOS44MTJMMTcuNTE5OSAzMi4xMTJDMTcuNTQ4OCAzMi4wODYyIDE3LjU4NjIgMzIuMDcyIDE3LjYyNDkgMzIuMDcySDIyLjM3NDlDMjIuNDEyNCAzMi4wNzIgMjIuNDQ4NiAzMi4wODQ1IDIyLjQ3NzQgMzIuMTA5NUwyMi40OTI0IDMyLjEyMkwyMi4yMDI0IDI5LjgxMzNMMjEuNzAyNCAyOS40NTk1SDE4LjI5NjFWMjkuNDU5NVonIGZpbGw9JyUyMzE2MTYxNicvJTNlJTNjcGF0aCBkPSdNMzUuMDM0OCAxNS4wMjUyTDM2LjA5MjMgOS44OTAyM0wzNC41MDExIDUuMTE1MjNMMjIuMzUxMSAxNC4xMDc3TDI3LjAyNjEgMTguMDUyN0wzMy42Mjk4IDE5Ljk3NTJMMzUuMDg0OCAxOC4yNzUyTDM0LjQ1MTEgMTcuODE2NUwzNS40NTg2IDE2Ljg5OUwzNC42ODczIDE2LjMwNEwzNS42OTQ4IDE1LjUzNTJMMzUuMDM0OCAxNS4wMjY1VjE1LjAyNTJaJyBmaWxsPSclMjM3NjNFMUEnLyUzZSUzY3BhdGggZD0nTTM0LjU0ODYgNC45NjU0OEMzNC41NzIyIDQuOTczMDMgMzQuNTkzNiA0Ljk4NjAyIDM0LjYxMTIgNS4wMDMzOUMzNC42Mjg4IDUuMDIwNzcgMzQuNjQyMSA1LjA0MjA0IDM0LjY0OTkgNS4wNjU0OEwzNi4yNDI0IDkuODQwNDhDMzYuMjUwOSA5Ljg2NzE3IDM2LjI1MjIgOS44OTU2MyAzNi4yNDYxIDkuOTIyOThMMzUuMjA4NiAxNC45NjA1TDM1Ljc5MTEgMTUuNDEwNUMzNS44MTAzIDE1LjQyNTIgMzUuODI1OSAxNS40NDQxIDM1LjgzNjYgMTUuNDY1OEMzNS44NDczIDE1LjQ4NzUgMzUuODUyOCAxNS41MTEzIDM1Ljg1MjggMTUuNTM1NUMzNS44NTI4IDE1LjU1OTcgMzUuODQ3MyAxNS41ODM1IDM1LjgzNjYgMTUuNjA1MkMzNS44MjU5IDE1LjYyNjkgMzUuODEwMyAxNS42NDU4IDM1Ljc5MTEgMTUuNjYwNUwzNC45NDYxIDE2LjMwNDJMMzUuNTU0OSAxNi43NzQyQzM1LjU3MzEgMTYuNzg4MyAzNS41ODgxIDE2LjgwNjEgMzUuNTk4NyAxNi44MjY2QzM1LjYwOTMgMTYuODQ3IDM1LjYxNTIgMTYuODY5NSAzNS42MTYyIDE2Ljg5MjVDMzUuNjE3MiAxNi45MTU1IDM1LjYxMzEgMTYuOTM4NSAzNS42MDQyIDE2Ljk1OTdDMzUuNTk1MyAxNi45ODA5IDM1LjU4MTkgMTcgMzUuNTY0OSAxNy4wMTU1TDM0LjY5OTkgMTcuODAzTDM1LjE3NzQgMTguMTQ4QzM1LjE5NTIgMTguMTYwNyAzNS4yMTAyIDE4LjE3NzEgMzUuMjIxNCAxOC4xOTU5QzM1LjIzMjUgMTguMjE0OCAzNS4yMzk2IDE4LjIzNTggMzUuMjQyMiAxOC4yNTc1QzM1LjI0NDggMTguMjc5MyAzNS4yNDI4IDE4LjMwMTQgMzUuMjM2NCAxOC4zMjIzQzM1LjIzIDE4LjM0MzMgMzUuMjE5MiAxOC4zNjI3IDM1LjIwNDkgMTguMzc5MkwzMy43NDk5IDIwLjA3OTJDMzMuNzMgMjAuMTAyIDMzLjcwNCAyMC4xMTg2IDMzLjY3NSAyMC4xMjcxQzMzLjY0NiAyMC4xMzU1IDMzLjYxNTEgMjAuMTM1NCAzMy41ODYxIDIwLjEyNjdMMjYuOTgyNCAxOC4yMDQyQzI2Ljk2MTMgMTguMTk3OSAyNi45NDE3IDE4LjE4NzMgMjYuOTI0OSAxOC4xNzNMMjIuMjQ5OSAxNC4yMjkyQzIyLjIzMTUgMTQuMjE0IDIyLjIxNjkgMTQuMTk0OSAyMi4yMDcgMTQuMTczMkMyMi4xOTcxIDE0LjE1MTUgMjIuMTkyMyAxNC4xMjc4IDIyLjE5MjkgMTQuMTA0QzIyLjE5MzUgMTQuMDgwMSAyMi4xOTk1IDE0LjA1NjggMjIuMjEwNSAxNC4wMzU2QzIyLjIyMTQgMTQuMDE0NCAyMi4yMzcgMTMuOTk2IDIyLjI1NjEgMTMuOTgxN0wzNC40MDYxIDQuOTg5MjNDMzQuNDI2MiA0Ljk3Mzk4IDM0LjQ0OTYgNC45NjM3NSAzNC40NzQ0IDQuOTU5NEMzNC40OTkyIDQuOTU1MDUgMzQuNTI0NiA0Ljk1NjcxIDM0LjU0ODYgNC45NjQyM1Y0Ljk2NTQ4Wk0yMi42MDQ5IDE0LjExNTVMMjcuMTAyNCAxNy45MTA1TDMzLjU3NzQgMTkuNzk1NUwzNC44NTQ5IDE4LjMwM0wzNC4zNTg2IDE3Ljk0NDJDMzQuMzM5NyAxNy45MzA1IDM0LjMyNDEgMTcuOTEyNyAzNC4zMTI5IDE3Ljg5MjJDMzQuMzAxNyAxNy44NzE3IDM0LjI5NTIgMTcuODQ5IDM0LjI5MzkgMTcuODI1NkMzNC4yOTI2IDE3LjgwMjMgMzQuMjk2NSAxNy43NzkgMzQuMzA1MyAxNy43NTczQzM0LjMxNDEgMTcuNzM1NyAzNC4zMjc2IDE3LjcxNjMgMzQuMzQ0OSAxNy43MDA1TDM1LjIxMzYgMTYuOTA5MkwzNC41OTExIDE2LjQyOTJDMzQuNTcyIDE2LjQxNDUgMzQuNTU2NCAxNi4zOTU2IDM0LjU0NTcgMTYuMzczOUMzNC41MzUgMTYuMzUyMyAzNC41Mjk1IDE2LjMyODQgMzQuNTI5NSAxNi4zMDQyQzM0LjUyOTUgMTYuMjgwMSAzNC41MzUgMTYuMjU2MiAzNC41NDU3IDE2LjIzNDVDMzQuNTU2NCAxNi4yMTI5IDM0LjU3MiAxNi4xOTM5IDM0LjU5MTEgMTYuMTc5MkwzNS40MzYxIDE1LjUzNDJMMzQuOTM4NiAxNS4xNTA1QzM0LjkxNTQgMTUuMTMyNCAzNC44OTc3IDE1LjEwODIgMzQuODg3NiAxNS4wODA2QzM0Ljg3NzQgMTUuMDUzIDM0Ljg3NTIgMTUuMDIzIDM0Ljg4MTEgMTQuOTk0MkwzNS45Mjk5IDkuOTAwNDhMMzQuNDE5OSA1LjM3MDQ4TDIyLjYwMzYgMTQuMTE2N0wyMi42MDQ5IDE0LjExNTVaJyBmaWxsPSclMjM3NjNFMUEnLyUzZSUzY3BhdGggZD0nTTMuOTA4NjkgOS44OTIxOUw0Ljk3NzQ0IDE1LjAyNzJMNC4yOTM2OSAxNS41MzU5TDUuMzEzNjkgMTYuMzA0N0w0LjU0MjQ0IDE2LjkwMDlMNS41NDk5NCAxNy44MTg0TDQuOTE0OTQgMTguMjc3Mkw2LjM2OTk0IDE5Ljk3NzJMMTIuOTczNyAxOC4wNTQ3TDE3LjY0OTkgMTQuMTA5N0w1LjQ5OTk0IDUuMTE3MTlMMy45MDg2OSA5Ljg5MjE5VjkuODkyMTlaJyBmaWxsPSclMjM3NjNFMUEnLyUzZSUzY3BhdGggZD0nTTUuNDUyMzIgNC45NjQwNUM1LjQ3NTg5IDQuOTU2NzcgNS41MDA4MyA0Ljk1NTEyIDUuNTI1MTUgNC45NTkyNUM1LjU0OTQ3IDQuOTYzMzggNS41NzI0NyA0Ljk3MzE1IDUuNTkyMzIgNC45ODc4TDE3Ljc0MjMgMTMuOTgwM0MxNy43NjE2IDEzLjk5NDQgMTcuNzc3NCAxNC4wMTI2IDE3Ljc4ODYgMTQuMDMzN0MxNy43OTk3IDE0LjA1NDggMTcuODA2IDE0LjA3ODEgMTcuODA2OCAxNC4xMDE5QzE3LjgwNzcgMTQuMTI1OCAxNy44MDMxIDE0LjE0OTUgMTcuNzkzNCAxNC4xNzEzQzE3Ljc4MzggMTQuMTkzMSAxNy43NjkzIDE0LjIxMjQgMTcuNzUxMSAxNC4yMjc4TDEzLjA3NjEgMTguMTcxNkMxMy4wNTg5IDE4LjE4NiAxMy4wMzg5IDE4LjE5NjcgMTMuMDE3MyAxOC4yMDI4TDYuNDEzNTcgMjAuMTI0MUM2LjM4NDY2IDIwLjEzMjMgNi4zNTM5OSAyMC4xMzIxIDYuMzI1MTkgMjAuMTIzNEM2LjI5NjQgMjAuMTE0OCA2LjI3MDY4IDIwLjA5ODEgNi4yNTEwNyAyMC4wNzUzTDQuNzk0ODIgMTguMzc1M0M0Ljc4MDY4IDE4LjM1ODggNC43NzAxMiAxOC4zMzk1IDQuNzYzODEgMTguMzE4NkM0Ljc1NzUgMTguMjk3OCA0Ljc1NTU4IDE4LjI3NTkgNC43NTgxNiAxOC4yNTQzQzQuNzYwNzUgMTguMjMyNyA0Ljc2Nzc4IDE4LjIxMTggNC43Nzg4MiAxOC4xOTMxQzQuNzg5ODcgMTguMTc0MyA0LjgwNDY4IDE4LjE1OCA0LjgyMjMyIDE4LjE0NTNMNS4yOTk4MiAxNy44MDAzTDQuNDM2MDcgMTcuMDEyOEM0LjQxODk4IDE2Ljk5NzQgNC40MDU0OCAxNi45Nzg0IDQuMzk2NTEgMTYuOTU3MkM0LjM4NzU0IDE2LjkzNiA0LjM4MzMyIDE2LjkxMzEgNC4zODQxNiAxNi44OTAxQzQuMzg0OTkgMTYuODY3MSA0LjM5MDg2IDE2Ljg0NDYgNC40MDEzNCAxNi44MjQxQzQuNDExODIgMTYuODAzNiA0LjQyNjY2IDE2Ljc4NTcgNC40NDQ4MiAxNi43NzE2TDUuMDUzNTcgMTYuMzAyOEw0LjE5ODU3IDE1LjY1NzhDNC4xNzg5MSAxNS42NDMxIDQuMTYyOTUgMTUuNjI0MSA0LjE1MTk2IDE1LjYwMjJDNC4xNDA5NiAxNS41ODAzIDQuMTM1MjQgMTUuNTU2MSA0LjEzNTI0IDE1LjUzMTZDNC4xMzUyNCAxNS41MDcgNC4xNDA5NiAxNS40ODI4IDQuMTUxOTYgMTUuNDYwOUM0LjE2Mjk1IDE1LjQzOSA0LjE3ODkxIDE1LjQyIDQuMTk4NTcgMTUuNDA1M0w0LjgwMjMyIDE0Ljk1NjZMMy43NTIzMiA5LjkyMDNDMy43NDY2MSA5Ljg5Mjg1IDMuNzQ4MzQgOS44NjQzNiAzLjc1NzMyIDkuODM3OEw1LjM0OTgyIDUuMDYyOEM1LjM1Nzc5IDUuMDM5MjIgNS4zNzEyMyA1LjAxNzg2IDUuMzg5MDUgNS4wMDA0OEM1LjQwNjg2IDQuOTgzMDkgNS40Mjg1NSA0Ljk3MDE4IDUuNDUyMzIgNC45NjI4VjQuOTY0MDVaTTUuNTc5ODIgNS4zNjkwNUw0LjA2OTgyIDkuODk5MDVMNS4xMzEwNyAxNC45OTI4QzUuMTM3MjcgMTUuMDIyMiA1LjEzNDkxIDE1LjA1MjggNS4xMjQyOCAxNS4wODFDNS4xMTM2NSAxNS4xMDkxIDUuMDk1MTggMTUuMTMzNiA1LjA3MTA3IDE1LjE1MTZMNC41NTYwNyAxNS41MzQxTDUuNDA3MzIgMTYuMTc2NkM1LjQyNjU4IDE2LjE5MTIgNS40NDIyMSAxNi4yMSA1LjQ1MzAyIDE2LjIzMTZDNS40NjM4MiAxNi4yNTMzIDUuNDY5NTEgMTYuMjc3MSA1LjQ2OTYzIDE2LjMwMTJDNS40Njk3NSAxNi4zMjU0IDUuNDY0MyAxNi4zNDkzIDUuNDUzNzIgMTYuMzcxQzUuNDQzMTMgMTYuMzkyOCA1LjQyNzY4IDE2LjQxMTggNS40MDg1NyAxNi40MjY2TDQuNzg2MDcgMTYuOTA3OEw1LjY1NDgyIDE3LjY5OTFDNS42NzIxNCAxNy43MTQ3IDUuNjg1NzYgMTcuNzM0MSA1LjY5NDY5IDE3Ljc1NTdDNS43MDM2MSAxNy43NzczIDUuNzA3NjIgMTcuODAwNiA1LjcwNjQzIDE3LjgyMzlDNS43MDUyMyAxNy44NDcyIDUuNjk4ODYgMTcuODcgNS42ODc3NyAxNy44OTA2QzUuNjc2NjggMTcuOTExMSA1LjY2MTE2IDE3LjkyOSA1LjY0MjMyIDE3Ljk0MjhMNS4xNDYwNyAxOC4zMDE2TDYuNDIzNTcgMTkuNzk0MUwxMi44OTczIDE3LjkwOTFMMTcuMzk0OCAxNC4xMTUzTDUuNTc5ODIgNS4zNjkwNVY1LjM2OTA1WicgZmlsbD0nJTIzNzYzRTFBJy8lM2UlM2NwYXRoIGQ9J00zMy42MzAyIDE5Ljk3NTJMMjcuMDI2NCAxOC4wNTI3TDI5LjAxNjQgMjEuMDU0TDI2LjA0MzkgMjYuODQ3N0wyOS45NzM5IDI2Ljc5NzdIMzUuODQzOUwzMy42MzE0IDE5Ljk3NTJIMzMuNjMwMlonIGZpbGw9JyUyM0Y1ODQxRicvJTNlJTNjcGF0aCBkPSdNMjYuOTAwMiAxNy45NTgyQzI2LjkxOTMgMTcuOTMyNCAyNi45NDU4IDE3LjkxMzEgMjYuOTc2MiAxNy45MDI4QzI3LjAwNjYgMTcuODkyNiAyNy4wMzk0IDE3Ljg5MTggMjcuMDcwMiAxNy45MDA3TDMzLjY3MzkgMTkuODIzMkMzMy43MjM5IDE5LjgzODIgMzMuNzYzOSAxOS44NzU3IDMzLjc4MDIgMTkuOTI1N0wzNS45OTI3IDI2Ljc0ODJDMzYuMDAwMyAyNi43NzE3IDM2LjAwMjMgMjYuNzk2OCAzNS45OTg1IDI2LjgyMTJDMzUuOTk0NyAyNi44NDU3IDM1Ljk4NTEgMjYuODY5IDM1Ljk3MDYgMjYuODg5QzM1Ljk1NjEgMjYuOTA5MSAzNS45MzcxIDI2LjkyNTUgMzUuOTE1MSAyNi45MzY5QzM1Ljg5MzEgMjYuOTQ4MiAzNS44Njg3IDI2Ljk1NDMgMzUuODQzOSAyNi45NTQ0SDI5Ljk3NTJMMjYuMDQ2NCAyNy4wMDQ0QzI2LjAxOTIgMjcuMDA0OSAyNS45OTIyIDI2Ljk5ODMgMjUuOTY4MyAyNi45ODUyQzI1Ljk0NDMgMjYuOTcyMSAyNS45MjQyIDI2Ljk1MzEgMjUuOTA5OCAyNi45Mjk5QzI1Ljg5NTUgMjYuOTA2NyAyNS44ODc0IDI2Ljg4MDIgMjUuODg2MyAyNi44NTI5QzI1Ljg4NTMgMjYuODI1NyAyNS44OTE0IDI2Ljc5ODYgMjUuOTAzOSAyNi43NzQ0TDI4LjgzMzkgMjEuMDYzMkwyNi44OTY0IDE4LjEzODJDMjYuODc4NiAxOC4xMTE0IDI2Ljg2OTQgMTguMDc5OCAyNi44NyAxOC4wNDc2QzI2Ljg3MDcgMTguMDE1NCAyNi44ODEyIDE3Ljk4NDIgMjYuOTAwMiAxNy45NTgyVjE3Ljk1ODJaTTI3LjM5NTIgMTguMzIzMkwyOS4xNDc3IDIwLjk2NjlDMjkuMTYzMSAyMC45OTAyIDI5LjE3MiAyMS4wMTcyIDI5LjE3MzUgMjEuMDQ1MUMyOS4xNzUxIDIxLjA3MyAyOS4xNjkyIDIxLjEwMDggMjkuMTU2NCAyMS4xMjU3TDI2LjMwMzkgMjYuNjg1N0wyOS45NzM5IDI2LjYzOTRIMzUuNjI3N0wzMy41MDY0IDIwLjEwMTlMMjcuMzk1MiAxOC4zMjMyVjE4LjMyMzJaJyBmaWxsPSclMjNGNTg0MUYnLyUzZSUzY3BhdGggZD0nTTEyLjk3MzkgMTguMDUyN0w2LjM3MDIgMTkuOTc1Mkw0LjE2ODk1IDI2Ljc5NzdIMTAuMDI1MkwxMy45NTUyIDI2Ljg0NzdMMTAuOTgyNyAyMS4wNTRMMTIuOTcyNyAxOC4wNTI3SDEyLjk3MzlaJyBmaWxsPSclMjNGNTg0MUYnLyUzZSUzY3BhdGggZD0nTTEzLjEwMDIgMTcuOTU4MkMxMy4xNDAyIDE4LjAxMTkgMTMuMTQxNSAxOC4wODMyIDEzLjEwNTIgMTguMTM5NEwxMS4xNjY1IDIxLjA2NDRMMTQuMDk2NSAyNi43NzQ0QzE0LjEwOSAyNi43OTg2IDE0LjExNTEgMjYuODI1NyAxNC4xMTQgMjYuODUyOUMxNC4xMTMgMjYuODgwMiAxNC4xMDQ5IDI2LjkwNjcgMTQuMDkwNSAyNi45Mjk5QzE0LjA3NjIgMjYuOTUzMSAxNC4wNTYgMjYuOTcyMSAxNC4wMzIxIDI2Ljk4NTJDMTQuMDA4MiAyNi45OTgzIDEzLjk4MTIgMjcuMDA0OSAxMy45NTQgMjcuMDA0NEwxMC4wMjUyIDI2Ljk1NDRINC4xNjg5N0M0LjE0NDA4IDI2Ljk1NDQgNC4xMTk1NSAyNi45NDg2IDQuMDk3MzcgMjYuOTM3M0M0LjA3NTE4IDI2LjkyNiA0LjA1NTk5IDI2LjkwOTcgNC4wNDEzNSAyNi44ODk1QzQuMDI2NzIgMjYuODY5NCA0LjAxNzA2IDI2Ljg0NjEgNC4wMTMxNyAyNi44MjE1QzQuMDA5MjggMjYuNzk3IDQuMDExMjYgMjYuNzcxOCA0LjAxODk3IDI2Ljc0ODJMNi4yMTg5NiAxOS45MjU3QzYuMjI3MDcgMTkuOTAxMSA2LjI0MTEyIDE5Ljg3ODggNi4yNTk4NyAxOS44NjA5QzYuMjc4NjIgMTkuODQzMSA2LjMwMTUgMTkuODMwMSA2LjMyNjQ2IDE5LjgyMzJMMTIuOTMwMiAxNy45MDA3QzEyLjk2MSAxNy44OTE4IDEyLjk5MzggMTcuODkyNiAxMy4wMjQyIDE3LjkwMjhDMTMuMDU0NiAxNy45MTMxIDEzLjA4MTEgMTcuOTMyNCAxMy4xMDAyIDE3Ljk1ODJWMTcuOTU4MlpNNi40OTM5NiAyMC4xMDE5TDQuMzg1MjIgMjYuNjM5NEgxMC4wMjc3TDEzLjY5NjUgMjYuNjg1N0wxMC44NDQgMjEuMTI1N0MxMC44MzEyIDIxLjEwMDggMTAuODI1MyAyMS4wNzMgMTAuODI2OCAyMS4wNDUxQzEwLjgyODQgMjEuMDE3MiAxMC44MzczIDIwLjk5MDIgMTAuODUyNyAyMC45NjY5TDEyLjYwNTIgMTguMzIzMkw2LjQ5Mzk2IDIwLjEwMTlWMjAuMTAxOVonIGZpbGw9JyUyM0Y1ODQxRicvJTNlJTNjcGF0aCBkPSdNMjEuOTI3NiAyMS4zNzY4TDIyLjM1MDEgMTQuMTA4TDI0LjI2NTEgOC45MzU1NUgxNS43MzM5TDE3LjY1MDEgMTQuMTA4TDE4LjA3MjYgMjEuMzc2OEwxOC4yMzUxIDIzLjY1OTNMMTguMjQ3NiAyOS4zMDMxSDIxLjc1MzlMMjEuNzY2NCAyMy42NTkzTDIxLjkyNzYgMjEuMzc2OFYyMS4zNzY4WicgZmlsbD0nJTIzRjU4NDFGJy8lM2UlM2NwYXRoIGQ9J00xNS42MDUyIDguODQ0ODVDMTUuNjE5NiA4LjgyNDA4IDE1LjYzODkgOC44MDcxIDE1LjY2MTMgOC43OTUzNkMxNS42ODM3IDguNzgzNjEgMTUuNzA4NiA4Ljc3NzQzIDE1LjczMzkgOC43NzczNUgyNC4yNjUyQzI0LjI5MDcgOC43NzcxNiAyNC4zMTU5IDguNzgzMTcgMjQuMzM4NiA4Ljc5NDg4QzI0LjM2MTIgOC44MDY1OCAyNC4zODA3IDguODIzNjIgMjQuMzk1NCA4Ljg0NDUyQzI0LjQxIDguODY1NDMgMjQuNDE5MyA4Ljg4OTU4IDI0LjQyMjYgOC45MTQ5QzI0LjQyNTggOC45NDAyMSAyNC40MjI4IDguOTY1OTMgMjQuNDEzOSA4Ljk4OTg1TDIyLjUwNjQgMTQuMTM5OUwyMi4wODUyIDIxLjM4NzRMMjEuOTIyNyAyMy42NjQ5TDIxLjkxMDIgMjkuMzAyNEMyMS45MTAyIDI5LjM4OTkgMjEuODQwMiAyOS40NjExIDIxLjc1MzkgMjkuNDYxMUgxOC4yNDY0QzE4LjIwNDcgMjkuNDYxMSAxOC4xNjQ2IDI5LjQ0NDUgMTguMTM1MSAyOS40MTVDMTguMTA1NSAyOS4zODU0IDE4LjA4ODkgMjkuMzQ1NCAxOC4wODg5IDI5LjMwMzZMMTguMDc2NCAyMy42NjQ5TDE3LjkxNTIgMjEuMzg3NFYyMS4zODYxTDE3LjQ5MzkgMTQuMTM5OUwxNS41ODY0IDguOTg5ODVDMTUuNTc3NiA4Ljk2NTk2IDE1LjU3NDcgOC45NDAyOSAxNS41NzggOC45MTUwNEMxNS41ODEyIDguODg5NzkgMTUuNTkwNiA4Ljg2NTcgMTUuNjA1MiA4Ljg0NDg1VjguODQ0ODVaTTE1Ljk2MDIgOS4wOTIzNUwxNy43OTc3IDE0LjA1MjNDMTcuODAyOSAxNC4wNjcyIDE3LjgwNTggMTQuMDgyOCAxNy44MDY0IDE0LjA5ODZMMTguMjMwMiAyMS4zNjYxVjIxLjM2NzRMMTguMzkyNyAyMy42NTg2TDE4LjQwMzkgMjkuMTQ2MUgyMS41OTY0TDIxLjYwODkgMjMuNjQ3NEwyMS43NzE0IDIxLjM2NzRWMjEuMzY0OUwyMi4xOTI3IDE0LjA5ODZDMjIuMTkzOSAxNC4wODM2IDIyLjE5NzcgMTQuMDY3MyAyMi4yMDI3IDE0LjA1MjNMMjQuMDQwMiA5LjA5MjM1SDE1Ljk2MTRIMTUuOTYwMlonIGZpbGw9JyUyM0Y1ODQxRicvJTNlJTNjL3N2ZyUzZVwiO1xuXG5sZXQgaW5zdGFuY2U7XG5jb25zdCBzd2l0Y2hXYWxsZXROb3RpY2UgPSAodHlwZSkgPT4ge1xuICAgIGlmIChpc0luU2FtZU9yaWdpbklmcmFtZSgpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgdGl0bGVzID0ge1xuICAgICAgICBsdXg6IFwiTHV4XCIsXG4gICAgICAgIG1ldGFtYXNrOiBcIk1ldGFNYXNrXCIsXG4gICAgfTtcbiAgICBpZiAoaW5zdGFuY2UpIHtcbiAgICAgICAgaW5zdGFuY2UuaGlkZSgpO1xuICAgICAgICBpbnN0YW5jZSA9IG51bGw7XG4gICAgfVxuICAgIGluc3RhbmNlID0gbm90aWNlKHtcbiAgICAgICAgY2xvc2VhYmxlOiB0cnVlLFxuICAgICAgICB0aW1lb3V0OiAwLFxuICAgICAgICBjbGFzc05hbWU6IFwibHV4LW5vdGljZS1kZWZhdWx0LXdhbGxldFwiLFxuICAgICAgICBjb250ZW50OiBgPGRpdiBzdHlsZT1cImRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogMTJweDsgY29sb3I6ICMxOTI5NDU7XCI+XG4gICAgICA8aW1nIHN0eWxlPVwid2lkdGg6IDI4cHg7XCIgc3JjPVwiJHt0eXBlID09PSBcImx1eFwiID8gaW1nJDIgOiBpbWd9XCIvPlxuICAgICAgPGRpdiBzdHlsZT1cImNvbG9yOiAjMTkyOTQ1O1wiPlxuICAgICAgICA8ZGl2IHN0eWxlPVwiY29sb3I6ICMxOTI5NDU7XCI+PHNwYW4gc3R5bGU9XCJmb250LXdlaWdodDogYm9sZDsgY29sb3I6ICMxOTI5NDU7XCI+JHt0aXRsZXNbdHlwZV19PC9zcGFuPiBpcyB5b3VyIGRlZmF1bHQgd2FsbGV0IG5vdy4gPC9kaXY+XG4gICAgICAgIDxkaXYgc3R5bGU9XCJjb2xvcjogIzE5Mjk0NTtcIj5cbiAgICAgICAgUGxlYXNlIDxhXG4gICAgICAgICAgaHJlZj1cImphdmFzY3JpcHQ6d2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1wiXG4gICAgICAgICAgc3R5bGU9XCJjb2xvcjogIzcwODRGRjsgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XCI+cmVmcmVzaCB0aGUgd2ViIHBhZ2U8L2E+IFxuICAgICAgICBhbmQgcmV0cnlcbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICBgLFxuICAgIH0pO1xufTtcblxuLy8ga2VlcCBpc01ldGFNYXNrIGFuZCByZW1vdmUgaXNMdXhcbmNvbnN0IGltcGVyc29uYXRlTWV0YW1hc2tXaGl0ZWxpc3QgPSBbXG4gICAgLy8gbGF5ZXJ6ZXJvXG4gICAgXCJiaXRjb2luYnJpZGdlLm5ldHdvcmtcIixcbiAgICBcImJyaWRnZS5saXF1aWRzd2FwLmNvbVwiLFxuICAgIFwidGhlYXB0b3NicmlkZ2UuY29tXCIsXG4gICAgXCJhcHAuYWN0YWZpLm9yZ1wiLFxuICAgIFwiYnJpZGdlLmxpbmVhLmJ1aWxkXCIsXG4gICAgXCJicmlkZ2UuY29yZWRhby5vcmdcIixcbiAgICAvLyByYWluYm93XG4gICAgXCJ0ZWx4Lm5ldHdvcmtcIixcbiAgICBcInBvcnRmb2xpby5tZXRhbWFzay5pb1wiLFxuXTtcbi8vIGtlZXAgaXNMdXggYW5kIHJlbW92ZSBpc01ldGFNYXNrXG5jb25zdCBsdXhIb3N0TGlzdCA9IFtdO1xuLyoqXG4gKiBEZXRlY3QgY3VycmVudCBob3N0IGlzIGluY2x1ZGVzIHRhcmdldCBob3N0XG4gKiBAcGFyYW0gY3VycmVudFxuICogQHBhcmFtIHRhcmdldFxuICogQHJldHVybnNcbiAqL1xuY29uc3QgaXNJbmNsdWRlc0hvc3QgPSAoY3VycmVudCwgdGFyZ2V0KSA9PiB7XG4gICAgcmV0dXJuIGN1cnJlbnQgPT09IHRhcmdldCB8fCBjdXJyZW50LmVuZHNXaXRoKGAuJHt0YXJnZXR9YCk7XG59O1xuY29uc3QgaXNJbkhvc3RMaXN0ID0gKGxpc3QsIGhvc3QpID0+IHtcbiAgICByZXR1cm4gbGlzdC5zb21lKCh0YXJnZXQpID0+IGlzSW5jbHVkZXNIb3N0KGhvc3QsIHRhcmdldCkpO1xufTtcbmNvbnN0IGdldFByb3ZpZGVyTW9kZSA9IChob3N0KSA9PiB7XG4gICAgaWYgKGlzSW5Ib3N0TGlzdChpbXBlcnNvbmF0ZU1ldGFtYXNrV2hpdGVsaXN0LCBob3N0KSkge1xuICAgICAgICByZXR1cm4gXCJtZXRhbWFza1wiO1xuICAgIH1cbiAgICBpZiAoaXNJbkhvc3RMaXN0KGx1eEhvc3RMaXN0LCBob3N0KSkge1xuICAgICAgICByZXR1cm4gXCJsdXhcIjtcbiAgICB9XG4gICAgcmV0dXJuIFwiZGVmYXVsdFwiO1xufTtcbmNvbnN0IHBhdGNoUHJvdmlkZXIgPSAocHJvdmlkZXIpID0+IHtcbiAgICBjb25zdCBtb2RlID0gZ2V0UHJvdmlkZXJNb2RlKHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZSk7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKG1vZGUgPT09IFwibWV0YW1hc2tcIikge1xuICAgICAgICAgICAgZGVsZXRlIHByb3ZpZGVyLmlzTHV4O1xuICAgICAgICAgICAgcHJvdmlkZXIuaXNNZXRhTWFzayA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1vZGUgPT09IFwibHV4XCIpIHtcbiAgICAgICAgICAgIGRlbGV0ZSBwcm92aWRlci5pc01ldGFNYXNrO1xuICAgICAgICAgICAgcHJvdmlkZXIuaXNMdXggPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChtb2RlID09PSBcImRlZmF1bHRcIikge1xuICAgICAgICAgICAgcHJvdmlkZXIuaXNNZXRhTWFzayA9IHRydWU7XG4gICAgICAgICAgICBwcm92aWRlci5pc0x1eCA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICB9XG59O1xuXG4vLyB0aGlzIHNjcmlwdCBpcyBpbmplY3RlZCBpbnRvIHdlYnBhZ2UncyBjb250ZXh0XG5jb25zdCBsb2cgPSAoZXZlbnQsIC4uLmFyZ3MpID0+IHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGAlYyBbbHV4XSAoJHtuZXcgRGF0ZSgpLnRvVGltZVN0cmluZygpLnN1YnN0cigwLCA4KX0pICR7ZXZlbnR9YCwgXCJmb250LXdlaWdodDogYm9sZDsgYmFja2dyb3VuZC1jb2xvcjogIzdkNmVmOTsgY29sb3I6IHdoaXRlO1wiLCAuLi5hcmdzKTtcbiAgICB9XG59O1xubGV0IGNoYW5uZWxOYW1lID0gdHlwZW9mIF9fbHV4X19jaGFubmVsTmFtZSAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fbHV4X19jaGFubmVsTmFtZSA6IFwiXCI7XG50eXBlb2YgX19sdXhfX2lzRGVmYXVsdFdhbGxldCAhPT0gXCJ1bmRlZmluZWRcIlxuICAgID8gX19sdXhfX2lzRGVmYXVsdFdhbGxldFxuICAgIDogZmFsc2U7XG5sZXQgaXNPcGVyYSA9IHR5cGVvZiBfX2x1eF9faXNPcGVyYSAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fbHV4X19pc09wZXJhIDogZmFsc2U7XG5sZXQgdXVpZCA9IHR5cGVvZiBfX2x1eF9fdXVpZCAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fbHV4X191dWlkIDogXCJcIjtcbmNvbnN0IGdldFBhcmFtcyA9ICgpID0+IHtcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJsdXg6Y2hhbm5lbE5hbWVcIikpIHtcbiAgICAgICAgY2hhbm5lbE5hbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImx1eDpjaGFubmVsTmFtZVwiKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJsdXg6Y2hhbm5lbE5hbWVcIik7XG4gICAgfVxuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImx1eDppc0RlZmF1bHRXYWxsZXRcIikpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJsdXg6aXNEZWZhdWx0V2FsbGV0XCIpID09PSBcInRydWVcIjtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJsdXg6aXNEZWZhdWx0V2FsbGV0XCIpO1xuICAgIH1cbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJsdXg6dXVpZFwiKSkge1xuICAgICAgICB1dWlkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJsdXg6dXVpZFwiKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJsdXg6dXVpZFwiKTtcbiAgICB9XG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibHV4OmlzT3BlcmFcIikpIHtcbiAgICAgICAgaXNPcGVyYSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibHV4OmlzT3BlcmFcIikgPT09IFwidHJ1ZVwiO1xuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcImx1eDppc09wZXJhXCIpO1xuICAgIH1cbn07XG5nZXRQYXJhbXMoKTtcbmNsYXNzIEV0aGVyZXVtUHJvdmlkZXIgZXh0ZW5kcyBldmVudHMuRXZlbnRFbWl0dGVyIHtcbiAgICBjb25zdHJ1Y3Rvcih7IG1heExpc3RlbmVycyA9IDEwMCB9ID0ge30pIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5jaGFpbklkID0gbnVsbDtcbiAgICAgICAgdGhpcy5zZWxlY3RlZEFkZHJlc3MgPSBudWxsO1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIG5ldHdvcmsgSUQgb2YgdGhlIGN1cnJlbnRseSBjb25uZWN0ZWQgRXRoZXJldW0gY2hhaW4uXG4gICAgICAgICAqIEBkZXByZWNhdGVkXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLm5ldHdvcmtWZXJzaW9uID0gbnVsbDtcbiAgICAgICAgdGhpcy5pc0x1eCA9IHRydWU7XG4gICAgICAgIHRoaXMuaXNNZXRhTWFzayA9IHRydWU7XG4gICAgICAgIHRoaXMuX2lzTHV4ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5faXNSZWFkeSA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9pc0Nvbm5lY3RlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9pbml0aWFsaXplZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9pc1VubG9ja2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX2NhY2hlUmVxdWVzdHNCZWZvcmVSZWFkeSA9IFtdO1xuICAgICAgICB0aGlzLl9jYWNoZUV2ZW50TGlzdGVuZXJzQmVmb3JlUmVhZHkgPSBbXTtcbiAgICAgICAgdGhpcy5fc3RhdGUgPSB7XG4gICAgICAgICAgICBhY2NvdW50czogbnVsbCxcbiAgICAgICAgICAgIGlzQ29ubmVjdGVkOiBmYWxzZSxcbiAgICAgICAgICAgIGlzVW5sb2NrZWQ6IGZhbHNlLFxuICAgICAgICAgICAgaW5pdGlhbGl6ZWQ6IGZhbHNlLFxuICAgICAgICAgICAgaXNQZXJtYW5lbnRseURpc2Nvbm5lY3RlZDogZmFsc2UsXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX21ldGFtYXNrID0ge1xuICAgICAgICAgICAgaXNVbmxvY2tlZDogKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHRoaXMuX2lzVW5sb2NrZWQpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5fcmVxdWVzdFByb21pc2UgPSBuZXcgUmVhZHlQcm9taXNlKDIpO1xuICAgICAgICB0aGlzLl9kZWR1cGVQcm9taXNlID0gbmV3IERlZHVwZVByb21pc2UoW10pO1xuICAgICAgICB0aGlzLl9iY20gPSBuZXcgQnJvYWRjYXN0Q2hhbm5lbE1lc3NhZ2UoY2hhbm5lbE5hbWUpO1xuICAgICAgICB0aGlzLmluaXRpYWxpemUgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwidmlzaWJpbGl0eWNoYW5nZVwiLCB0aGlzLl9yZXF1ZXN0UHJvbWlzZUNoZWNrVmlzaWJpbGl0eSk7XG4gICAgICAgICAgICB0aGlzLl9iY20uY29ubmVjdCgpLm9uKFwibWVzc2FnZVwiLCB0aGlzLl9oYW5kbGVCYWNrZ3JvdW5kTWVzc2FnZSk7XG4gICAgICAgICAgICBkb21SZWFkeUNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHZhciBfYSwgX2IsIF9jO1xuICAgICAgICAgICAgICAgIGNvbnN0IG9yaWdpbiA9IGxvY2F0aW9uLm9yaWdpbjtcbiAgICAgICAgICAgICAgICBjb25zdCBpY29uID0gKChfYSA9ICQoJ2hlYWQgPiBsaW5rW3JlbH49XCJpY29uXCJdJykpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5ocmVmKSB8fFxuICAgICAgICAgICAgICAgICAgICAoKF9iID0gJCgnaGVhZCA+IG1ldGFbaXRlbXByb3A9XCJpbWFnZVwiXScpKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuY29udGVudCk7XG4gICAgICAgICAgICAgICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LnRpdGxlIHx8XG4gICAgICAgICAgICAgICAgICAgICgoX2MgPSAkKCdoZWFkID4gbWV0YVtuYW1lPVwidGl0bGVcIl0nKSkgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLmNvbnRlbnQpIHx8XG4gICAgICAgICAgICAgICAgICAgIG9yaWdpbjtcbiAgICAgICAgICAgICAgICB0aGlzLl9iY20ucmVxdWVzdCh7XG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogXCJ0YWJDaGVja2luXCIsXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtczogeyBpY29uLCBuYW1lLCBvcmlnaW4gfSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLl9yZXF1ZXN0UHJvbWlzZS5jaGVjaygyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IGNoYWluSWQsIGFjY291bnRzLCBuZXR3b3JrVmVyc2lvbiwgaXNVbmxvY2tlZCB9ID0gYXdhaXQgdGhpcy5yZXF1ZXN0SW50ZXJuYWxNZXRob2RzKHtcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBcImdldFByb3ZpZGVyU3RhdGVcIixcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAoaXNVbmxvY2tlZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9pc1VubG9ja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc3RhdGUuaXNVbmxvY2tlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuY2hhaW5JZCA9IGNoYWluSWQ7XG4gICAgICAgICAgICAgICAgdGhpcy5uZXR3b3JrVmVyc2lvbiA9IG5ldHdvcmtWZXJzaW9uO1xuICAgICAgICAgICAgICAgIHRoaXMuZW1pdChcImNvbm5lY3RcIiwgeyBjaGFpbklkIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMuX3B1c2hFdmVudEhhbmRsZXJzLmNoYWluQ2hhbmdlZCh7XG4gICAgICAgICAgICAgICAgICAgIGNoYWluOiBjaGFpbklkLFxuICAgICAgICAgICAgICAgICAgICBuZXR3b3JrVmVyc2lvbixcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLl9wdXNoRXZlbnRIYW5kbGVycy5hY2NvdW50c0NoYW5nZWQoYWNjb3VudHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2gge1xuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICB0aGlzLl9pbml0aWFsaXplZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5fc3RhdGUuaW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuZW1pdChcIl9pbml0aWFsaXplZFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5fcmVxdWVzdFByb21pc2VDaGVja1Zpc2liaWxpdHkgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQudmlzaWJpbGl0eVN0YXRlID09PSBcInZpc2libGVcIikge1xuICAgICAgICAgICAgICAgIHRoaXMuX3JlcXVlc3RQcm9taXNlLmNoZWNrKDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcmVxdWVzdFByb21pc2UudW5jaGVjaygxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5faGFuZGxlQmFja2dyb3VuZE1lc3NhZ2UgPSAoeyBldmVudCwgZGF0YSB9KSA9PiB7XG4gICAgICAgICAgICBsb2coXCJbcHVzaCBldmVudF1cIiwgZXZlbnQsIGRhdGEpO1xuICAgICAgICAgICAgaWYgKHRoaXMuX3B1c2hFdmVudEhhbmRsZXJzW2V2ZW50XSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9wdXNoRXZlbnRIYW5kbGVyc1tldmVudF0oZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmVtaXQoZXZlbnQsIGRhdGEpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmlzQ29ubmVjdGVkID0gKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH07XG4gICAgICAgIC8vIFRPRE86IHN1cHBvcnQgbXVsdGkgcmVxdWVzdCFcbiAgICAgICAgdGhpcy5yZXF1ZXN0ID0gYXN5bmMgKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGlmICghdGhpcy5faXNSZWFkeSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2NhY2hlUmVxdWVzdHNCZWZvcmVSZWFkeS5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEsXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0LFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9kZWR1cGVQcm9taXNlLmNhbGwoZGF0YS5tZXRob2QsICgpID0+IHRoaXMuX3JlcXVlc3QoZGF0YSkpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLl9yZXF1ZXN0ID0gYXN5bmMgKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGlmICghZGF0YSkge1xuICAgICAgICAgICAgICAgIHRocm93IGV0aFJwY0Vycm9ycy5ldGhFcnJvcnMucnBjLmludmFsaWRSZXF1ZXN0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9yZXF1ZXN0UHJvbWlzZUNoZWNrVmlzaWJpbGl0eSgpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3RQcm9taXNlLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChkYXRhLm1ldGhvZCAhPT0gXCJldGhfY2FsbFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGxvZyhcIltyZXF1ZXN0XVwiLCBKU09OLnN0cmluZ2lmeShkYXRhLCBudWxsLCAyKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9iY21cbiAgICAgICAgICAgICAgICAgICAgLnJlcXVlc3QoZGF0YSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5tZXRob2QgIT09IFwiZXRoX2NhbGxcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9nKFwiW3JlcXVlc3Q6IHN1Y2Nlc3NdXCIsIGRhdGEubWV0aG9kLCByZXMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXM7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEubWV0aG9kICE9PSBcImV0aF9jYWxsXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZyhcIltyZXF1ZXN0OiBlcnJvcl1cIiwgZGF0YS5tZXRob2QsIGV0aFJwY0Vycm9ycy5zZXJpYWxpemVFcnJvcihlcnIpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBldGhScGNFcnJvcnMuc2VyaWFsaXplRXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLnJlcXVlc3RJbnRlcm5hbE1ldGhvZHMgPSAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2RlZHVwZVByb21pc2UuY2FsbChkYXRhLm1ldGhvZCwgKCkgPT4gdGhpcy5fcmVxdWVzdChkYXRhKSk7XG4gICAgICAgIH07XG4gICAgICAgIC8vIHNoaW0gdG8gbWF0YW1hc2sgbGVnYWN5IGFwaVxuICAgICAgICB0aGlzLnNlbmRBc3luYyA9IChwYXlsb2FkLCBjYWxsYmFjaykgPT4ge1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocGF5bG9hZCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwocGF5bG9hZC5tYXAoKGl0ZW0pID0+IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VuZEFzeW5jKGl0ZW0sIChlcnIsIHJlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWdub3JlIGVycm9yXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlcyk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pKSkudGhlbigocmVzdWx0KSA9PiBjYWxsYmFjayhudWxsLCByZXN1bHQpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHsgbWV0aG9kLCBwYXJhbXMsIC4uLnJlc3QgfSA9IHBheWxvYWQ7XG4gICAgICAgICAgICB0aGlzLnJlcXVlc3QoeyBtZXRob2QsIHBhcmFtcyB9KVxuICAgICAgICAgICAgICAgIC50aGVuKChyZXN1bHQpID0+IGNhbGxiYWNrKG51bGwsIHsgLi4ucmVzdCwgbWV0aG9kLCByZXN1bHQgfSkpXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4gY2FsbGJhY2soZXJyb3IsIHsgLi4ucmVzdCwgbWV0aG9kLCBlcnJvciB9KSk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuc2VuZCA9IChwYXlsb2FkLCBjYWxsYmFjaykgPT4ge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBwYXlsb2FkID09PSBcInN0cmluZ1wiICYmICghY2FsbGJhY2sgfHwgQXJyYXkuaXNBcnJheShjYWxsYmFjaykpKSB7XG4gICAgICAgICAgICAgICAgLy8gc2VuZChtZXRob2QsIHBhcmFtcz8gPSBbXSlcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHtcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBwYXlsb2FkLFxuICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IGNhbGxiYWNrLFxuICAgICAgICAgICAgICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4gKHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICAgICAganNvbnJwYzogXCIyLjBcIixcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LFxuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2YgcGF5bG9hZCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgY2FsbGJhY2sgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNlbmRBc3luYyhwYXlsb2FkLCBjYWxsYmFjayk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgcmVzdWx0O1xuICAgICAgICAgICAgc3dpdGNoIChwYXlsb2FkLm1ldGhvZCkge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJldGhfYWNjb3VudHNcIjpcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5zZWxlY3RlZEFkZHJlc3MgPyBbdGhpcy5zZWxlY3RlZEFkZHJlc3NdIDogW107XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJldGhfY29pbmJhc2VcIjpcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5zZWxlY3RlZEFkZHJlc3MgfHwgbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwic3luYyBtZXRob2QgZG9lc250IHN1cHBvcnRcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGlkOiBwYXlsb2FkLmlkLFxuICAgICAgICAgICAgICAgIGpzb25ycGM6IHBheWxvYWQuanNvbnJwYyxcbiAgICAgICAgICAgICAgICByZXN1bHQsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLnNoaW1MZWdhY3kgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBsZWdhY3lNZXRob2RzID0gW1xuICAgICAgICAgICAgICAgIFtcImVuYWJsZVwiLCBcImV0aF9yZXF1ZXN0QWNjb3VudHNcIl0sXG4gICAgICAgICAgICAgICAgW1wibmV0X3ZlcnNpb25cIiwgXCJuZXRfdmVyc2lvblwiXSxcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgICBmb3IgKGNvbnN0IFtfbWV0aG9kLCBtZXRob2RdIG9mIGxlZ2FjeU1ldGhvZHMpIHtcbiAgICAgICAgICAgICAgICB0aGlzW19tZXRob2RdID0gKCkgPT4gdGhpcy5yZXF1ZXN0KHsgbWV0aG9kIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLm9uID0gKGV2ZW50LCBoYW5kbGVyKSA9PiB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuX2lzUmVhZHkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9jYWNoZUV2ZW50TGlzdGVuZXJzQmVmb3JlUmVhZHkucHVzaChbZXZlbnQsIGhhbmRsZXJdKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBzdXBlci5vbihldmVudCwgaGFuZGxlcik7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuc2V0TWF4TGlzdGVuZXJzKG1heExpc3RlbmVycyk7XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICAgICAgICB0aGlzLnNoaW1MZWdhY3koKTtcbiAgICAgICAgdGhpcy5fcHVzaEV2ZW50SGFuZGxlcnMgPSBuZXcgUHVzaEV2ZW50SGFuZGxlcnModGhpcyk7XG4gICAgfVxufVxuY29uc3QgcHJvdmlkZXIgPSBuZXcgRXRoZXJldW1Qcm92aWRlcigpO1xucGF0Y2hQcm92aWRlcihwcm92aWRlcik7XG5jb25zdCBsdXhQcm92aWRlciA9IG5ldyBQcm94eShwcm92aWRlciwge1xuICAgIGRlbGV0ZVByb3BlcnR5OiAodGFyZ2V0LCBwcm9wKSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgcHJvcCA9PT0gXCJzdHJpbmdcIiAmJlxuICAgICAgICAgICAgW1wib25cIiwgXCJpc0x1eFwiLCBcImlzTWV0YU1hc2tcIiwgXCJfaXNMdXhcIl0uaW5jbHVkZXMocHJvcCkpIHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIGRlbGV0ZSB0YXJnZXRbcHJvcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSxcbn0pO1xuY29uc3QgcmVxdWVzdEhhc090aGVyUHJvdmlkZXIgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHByb3ZpZGVyLnJlcXVlc3RJbnRlcm5hbE1ldGhvZHMoe1xuICAgICAgICBtZXRob2Q6IFwiaGFzT3RoZXJQcm92aWRlclwiLFxuICAgICAgICBwYXJhbXM6IFtdLFxuICAgIH0pO1xufTtcbmNvbnN0IHJlcXVlc3RJc0RlZmF1bHRXYWxsZXQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHByb3ZpZGVyLnJlcXVlc3RJbnRlcm5hbE1ldGhvZHMoe1xuICAgICAgICBtZXRob2Q6IFwiaXNEZWZhdWx0V2FsbGV0XCIsXG4gICAgICAgIHBhcmFtczogW10sXG4gICAgfSk7XG59O1xuY29uc3QgaW5pdE9wZXJhUHJvdmlkZXIgPSAoKSA9PiB7XG4gICAgd2luZG93LmV0aGVyZXVtID0gbHV4UHJvdmlkZXI7XG4gICAgbHV4UHJvdmlkZXIuX2lzUmVhZHkgPSB0cnVlO1xuICAgIHdpbmRvdy5sdXggPSBsdXhQcm92aWRlcjtcbiAgICBwYXRjaFByb3ZpZGVyKGx1eFByb3ZpZGVyKTtcbiAgICBsdXhQcm92aWRlci5vbihcImx1eDpjaGFpbkNoYW5nZWRcIiwgc3dpdGNoQ2hhaW5Ob3RpY2UpO1xufTtcbmNvbnN0IGluaXRQcm92aWRlciA9ICgpID0+IHtcbiAgICBsdXhQcm92aWRlci5faXNSZWFkeSA9IHRydWU7XG4gICAgbHV4UHJvdmlkZXIub24oXCJkZWZhdWx0V2FsbGV0Q2hhbmdlZFwiLCBzd2l0Y2hXYWxsZXROb3RpY2UpO1xuICAgIHBhdGNoUHJvdmlkZXIobHV4UHJvdmlkZXIpO1xuICAgIGlmICh3aW5kb3cuZXRoZXJldW0pIHtcbiAgICAgICAgcmVxdWVzdEhhc090aGVyUHJvdmlkZXIoKTtcbiAgICB9XG4gICAgaWYgKCF3aW5kb3cud2ViMykge1xuICAgICAgICB3aW5kb3cud2ViMyA9IHtcbiAgICAgICAgICAgIGN1cnJlbnRQcm92aWRlcjogbHV4UHJvdmlkZXIsXG4gICAgICAgIH07XG4gICAgfVxuICAgIGNvbnN0IGRlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHdpbmRvdywgXCJldGhlcmV1bVwiKTtcbiAgICBjb25zdCBjYW5EZWZpbmUgPSAhZGVzY3JpcHRvciB8fCBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZTtcbiAgICBpZiAoY2FuRGVmaW5lKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh3aW5kb3csIHtcbiAgICAgICAgICAgICAgICBsdXg6IHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGx1eFByb3ZpZGVyLFxuICAgICAgICAgICAgICAgICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBldGhlcmV1bToge1xuICAgICAgICAgICAgICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gd2luZG93Lmx1eFdhbGxldFJvdXRlci5jdXJyZW50UHJvdmlkZXI7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHNldChuZXdQcm92aWRlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93Lmx1eFdhbGxldFJvdXRlci5hZGRQcm92aWRlcihuZXdQcm92aWRlcik7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBsdXhXYWxsZXRSb3V0ZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGx1eFByb3ZpZGVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFzdEluamVjdGVkUHJvdmlkZXI6IHdpbmRvdy5ldGhlcmV1bSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRQcm92aWRlcjogbHV4UHJvdmlkZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsdXhQcm92aWRlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi4od2luZG93LmV0aGVyZXVtID8gW3dpbmRvdy5ldGhlcmV1bV0gOiBbXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0RGVmYXVsdFByb3ZpZGVyKGx1eEFzRGVmYXVsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobHV4QXNEZWZhdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sdXhXYWxsZXRSb3V0ZXIuY3VycmVudFByb3ZpZGVyID0gd2luZG93Lmx1eDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5vbkRlZmF1bHRQcm92aWRlciA9IChfYSA9IHdpbmRvdy5sdXhXYWxsZXRSb3V0ZXIubGFzdEluamVjdGVkUHJvdmlkZXIpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IHdpbmRvdy5ldGhlcmV1bTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93Lmx1eFdhbGxldFJvdXRlci5jdXJyZW50UHJvdmlkZXIgPSBub25EZWZhdWx0UHJvdmlkZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsdXhBc0RlZmF1bHQgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIXdpbmRvdy5sdXhXYWxsZXRSb3V0ZXIubGFzdEluamVjdGVkUHJvdmlkZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbHV4UHJvdmlkZXIub24oXCJsdXg6Y2hhaW5DaGFuZ2VkXCIsIHN3aXRjaENoYWluTm90aWNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkUHJvdmlkZXIocHJvdmlkZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXdpbmRvdy5sdXhXYWxsZXRSb3V0ZXIucHJvdmlkZXJzLmluY2x1ZGVzKHByb3ZpZGVyKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubHV4V2FsbGV0Um91dGVyLnByb3ZpZGVycy5wdXNoKHByb3ZpZGVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGx1eFByb3ZpZGVyICE9PSBwcm92aWRlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1ZXN0SGFzT3RoZXJQcm92aWRlcigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubHV4V2FsbGV0Um91dGVyLmxhc3RJbmplY3RlZFByb3ZpZGVyID0gcHJvdmlkZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgLy8gdGhpbmsgdGhhdCBkZWZpbmVQcm9wZXJ0eSBmYWlsZWQgbWVhbnMgdGhlcmUgaXMgYW55IG90aGVyIHdhbGxldFxuICAgICAgICAgICAgcmVxdWVzdEhhc090aGVyUHJvdmlkZXIoKTtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICAgICAgICB3aW5kb3cuZXRoZXJldW0gPSBsdXhQcm92aWRlcjtcbiAgICAgICAgICAgIHdpbmRvdy5sdXggPSBsdXhQcm92aWRlcjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgd2luZG93LmV0aGVyZXVtID0gbHV4UHJvdmlkZXI7XG4gICAgICAgIHdpbmRvdy5sdXggPSBsdXhQcm92aWRlcjtcbiAgICB9XG59O1xuaWYgKGlzT3BlcmEpIHtcbiAgICBpbml0T3BlcmFQcm92aWRlcigpO1xufVxuZWxzZSB7XG4gICAgaW5pdFByb3ZpZGVyKCk7XG59XG5yZXF1ZXN0SXNEZWZhdWx0V2FsbGV0KCkudGhlbigobHV4QXNEZWZhdWx0KSA9PiB7XG4gICAgdmFyIF9hO1xuICAgIChfYSA9IHdpbmRvdy5sdXhXYWxsZXRSb3V0ZXIpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5zZXREZWZhdWx0UHJvdmlkZXIobHV4QXNEZWZhdWx0KTtcbn0pO1xuY29uc3QgYW5ub3VuY2VFaXA2OTYzUHJvdmlkZXIgPSAocHJvdmlkZXIpID0+IHtcbiAgICBjb25zdCBpbmZvID0ge1xuICAgICAgICB1dWlkOiB1dWlkLFxuICAgICAgICBuYW1lOiBcIkx1eCBXYWxsZXRcIixcbiAgICAgICAgaWNvbjogXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUIzYVdSMGFEMGlNeklpSUdobGFXZG9kRDBpTXpJaUlIWnBaWGRDYjNnOUlqQWdNQ0F6TWlBek1pSWdabWxzYkQwaWJtOXVaU0lnZUcxc2JuTTlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5Mekl3TURBdmMzWm5JajRLUEdjZ1kyeHBjQzF3WVhSb1BTSjFjbXdvSTJOc2FYQXdYemMwTVY4eU56VXhLU0krQ2p4dFlYTnJJR2xrUFNKdFlYTnJNRjgzTkRGZk1qYzFNU0lnYzNSNWJHVTlJbTFoYzJzdGRIbHdaVHBzZFcxcGJtRnVZMlVpSUcxaGMydFZibWwwY3owaWRYTmxjbE53WVdObFQyNVZjMlVpSUhnOUlqQWlJSGs5SWpBaUlIZHBaSFJvUFNJek1pSWdhR1ZwWjJoMFBTSXpNaUkrQ2p4d1lYUm9JR1E5SWswek1pQXhOa016TWlBM0xqRTJNelEwSURJMExqZ3pOallnTUNBeE5pQXdRemN1TVRZek5EUWdNQ0F3SURjdU1UWXpORFFnTUNBeE5rTXdJREkwTGpnek5qWWdOeTR4TmpNME5DQXpNaUF4TmlBek1rTXlOQzQ0TXpZMklETXlJRE15SURJMExqZ3pOallnTXpJZ01UWmFJaUJtYVd4c1BTSjNhR2wwWlNJdlBnbzhMMjFoYzJzK0NqeG5JRzFoYzJzOUluVnliQ2dqYldGemF6QmZOelF4WHpJM05URXBJajRLUEhCaGRHZ2daRDBpVFRNeUlERTJRek15SURjdU1UWXpORFFnTWpRdU9ETTJOaUF3SURFMklEQkROeTR4TmpNME5DQXdJREFnTnk0eE5qTTBOQ0F3SURFMlF6QWdNalF1T0RNMk5pQTNMakUyTXpRMElETXlJREUySURNeVF6STBMamd6TmpZZ016SWdNeklnTWpRdU9ETTJOaUF6TWlBeE5sb2lJR1pwYkd3OUlpTTNNRGcwUmtZaUx6NEtQR2NnWm1sc2RHVnlQU0oxY213b0kyWnBiSFJsY2pCZlpGODNOREZmTWpjMU1Ta2lQZ284Y0dGMGFDQmtQU0pOTWpjdU5qQXhPU0F4Tnk0ek9EYzJRekk0TGpVeU1UWWdNVFV1TXpJMk1TQXlNeTQ1TnpRNElEa3VOVFkyTXpJZ01Ua3VOak14SURjdU1UWTJOelpETVRZdU9Ea3lPU0ExTGpNd056YzVJREUwTGpBek9Ua2dOUzQxTmpNeE9DQXhNeTQwTmpJZ05pNHpOemt6T0VNeE1pNHhPVFFnT0M0eE56QTJPU0F4Tnk0Mk5qRXhJRGt1TmpnNE5URWdNakV1TXpFM05DQXhNUzQwTlRrM1F6SXdMalV6TVRRZ01URXVPREF5TWlBeE9TNDNPVEE0SURFeUxqUXhOamtnTVRrdU16VTFNaUF4TXk0eU1ESTVRekUzTGprNU1qRWdNVEV1TnpBNU9DQXhOUzR3TURBeklERXdMalF5TXprZ01URXVORGc1TnlBeE1TNDBOVGszUXprdU1USXpPVGNnTVRJdU1UVTNOeUEzTGpFMU56a3hJREV6TGpnd016SWdOaTR6T1Rnd05DQXhOaTR5T0RnMVF6WXVNakV6TXpjZ01UWXVNakEyTWlBMkxqQXdPRGswSURFMkxqRTJNRFFnTlM0M09UTTROeUF4Tmk0eE5qQTBRelF1T1RjeE5ESWdNVFl1TVRZd05DQTBMak13TkRZNUlERTJMamd5T1RRZ05DNHpNRFEyT1NBeE55NDJOVFEyUXpRdU16QTBOamtnTVRndU5EYzVPU0EwTGprM01UUXlJREU1TGpFME9EZ2dOUzQzT1RNNE55QXhPUzR4TkRnNFF6VXVPVFEyTXpJZ01Ua3VNVFE0T0NBMkxqUXlNams0SURFNUxqQTBOak1nTmk0ME1qSTVPQ0F4T1M0d05EWXpUREUwTGpBek9Ua2dNVGt1TVRBeE5rTXhNQzQ1T1RNM0lESXpMamsxTURRZ09DNDFPRFl6TlNBeU5DNDJOVGt4SURndU5UZzJNelVnTWpVdU5EazVNa000TGpVNE5qTTFJREkyTGpNek9USWdNVEF1T0RnNU9DQXlOaTR4TVRFMklERXhMamMxTkRjZ01qVXVOems0TkVNeE5TNDRPVFE1SURJMExqSTVPVFVnTWpBdU16UXhOeUF4T1M0Mk1qZ2dNakV1TVRBME9DQXhPQzR5T0RNelF6STBMak13T1RJZ01UZ3VOamcwTkNBeU55NHdNREl5SURFNExqY3pNVGdnTWpjdU5qQXhPU0F4Tnk0ek9EYzJXaUlnWm1sc2JEMGlkWEpzS0NOd1lXbHVkREJmYkdsdVpXRnlYemMwTVY4eU56VXhLU0l2UGdvOGNHRjBhQ0JtYVd4c0xYSjFiR1U5SW1WMlpXNXZaR1FpSUdOc2FYQXRjblZzWlQwaVpYWmxibTlrWkNJZ1pEMGlUVEl4TGpNd01qa2dNVEV1TkRVek9FTXlNUzR6TURZM0lERXhMalExTlRVZ01qRXVNekV3TmlBeE1TNDBOVGN4SURJeExqTXhORFFnTVRFdU5EVTRPRU15TVM0ME9ETTVJREV4TGpNNU1UZ2dNakV1TkRVMk5TQXhNUzR4TkRBM0lESXhMalF3T1RrZ01UQXVPVFF6TlVNeU1TNHpNRE1nTVRBdU5Ea3dNU0F4T1M0ME5UYzFJRGd1TmpZeE5qVWdNVGN1TnpJME5TQTNMamcwTWpZMVF6RTFMak0yTWprZ05pNDNNalkyTlNBeE15NDJNalFnTmk0M09EUXlNU0F4TXk0ek5qY3lJRGN1TWprNE5qVkRNVE11T0RRM01pQTRMakk0T0RJeElERTJMakEzTnprZ09TNHlNVGN5TnlBeE9DNDBNRGMzSURFd0xqRTROelpETVRrdU16azNNU0F4TUM0MU9UazJJREl3TGpRd05ETWdNVEV1TURFNU1TQXlNUzR6TURJNUlERXhMalExTXpoYUlpQm1hV3hzUFNKMWNtd29JM0JoYVc1ME1WOXNhVzVsWVhKZk56UXhYekkzTlRFcElpOCtDanh3WVhSb0lHWnBiR3d0Y25Wc1pUMGlaWFpsYm05a1pDSWdZMnhwY0MxeWRXeGxQU0psZG1WdWIyUmtJaUJrUFNKTk1UZ3VNekl5T0NBeU1TNDBNVFkzUXpFM0xqZzBOVE1nTWpFdU1qTXpOeUF4Tnk0ek1EWWdNakV1TURZMU9DQXhOaTQyT1RJNUlESXdMamt4TXpORE1UY3VNelEyT1NBeE9TNDNNemt6SURFM0xqUTROREVnTVRndU1EQXhNU0F4Tmk0NE5qWTFJREUyTGprd01qSkRNVFV1T1RrNU9DQXhOUzR6TlRrNUlERTBMamt4TVRjZ01UUXVOVE01TVNBeE1pNHpPRE0wSURFMExqVXpPVEZETVRBdU9Ua3lPQ0F4TkM0MU16a3hJRGN1TWpRNE56Y2dNVFV1TURBNUlEY3VNVGd5TWpjZ01UZ3VNVFExUXpjdU1UYzFNelFnTVRndU5EY3pPQ0EzTGpFNE1qQTVJREU0TGpjM05URWdOeTR5TURVM055QXhPUzR3TlRJeFRERTBMakEwTXlBeE9TNHhNREU1UXpFekxqRXlNU0F5TUM0MU5qazBJREV5TGpJMU56VWdNakV1TmpVM055QXhNUzQxTURFMklESXlMalE0TlRKRE1USXVOREE1TWlBeU1pNDNNVGcySURFekxqRTFPREVnTWpJdU9URTBOQ0F4TXk0NE5EVTNJREl6TGpBNU5ETkRNVFF1TkRrM09DQXlNeTR5TmpRNElERTFMakE1TkRZZ01qTXVOREl3T1NBeE5TNDNNVGt6SURJekxqVTRNRGxETVRZdU5qWXlJREl5TGpnNU1UZ2dNVGN1TlRRNE15QXlNaTR4TkRBMElERTRMak15TWpnZ01qRXVOREUyTjFvaUlHWnBiR3c5SW5WeWJDZ2pjR0ZwYm5ReVgyeHBibVZoY2w4M05ERmZNamMxTVNraUx6NEtQSEJoZEdnZ1pEMGlUVFl1TXpBNE56UWdNVGd1TnpJNE0wTTJMalU0T0RBMUlESXhMakV4TURVZ055NDVNemN6TmlBeU1pNHdORFF4SURFd0xqWTVORFlnTWpJdU16SXdOVU14TXk0ME5URTVJREl5TGpVNU5qZ2dNVFV1TURNek5TQXlNaTQwTVRFMElERTNMakV6T1RFZ01qSXVOakF6TmtNeE9DNDRPVGMzSURJeUxqYzJOREVnTWpBdU5EWTRJREl6TGpZMk16TWdNakV1TURVd05TQXlNeTR6TlRJMlF6SXhMalUzTkRjZ01qTXVNRGN6SURJeExqSTRNVFFnTWpJdU1EWXlOaUF5TUM0MU56azVJREl4TGpReE5EUkRNVGt1Tmpjd05pQXlNQzQxTnpReElERTRMalF4TWpFZ01Ua3VPVGtnTVRZdU1UazNOeUF4T1M0M09ESTJRekUyTGpZek9TQXhPQzQxTnpBeUlERTJMalV4TlRRZ01UWXVPRGN3TXlBeE5TNDRNams1SURFMUxqazBOVFZETVRRdU9ETTRPU0F4TkM0Mk1EZ3lJREV6TGpBd09UY2dNVFF1TURBek5pQXhNQzQyT1RRMklERTBMakkyTnpoRE9DNHlOelU0TmlBeE5DNDFORE00SURVdU9UVTRNakVnTVRVdU56TTROaUEyTGpNd09EYzBJREU0TGpjeU9ETmFJaUJtYVd4c1BTSjFjbXdvSTNCaGFXNTBNMTlzYVc1bFlYSmZOelF4WHpJM05URXBJaTgrQ2p3dlp6NEtQQzluUGdvOEwyYytDanhrWldaelBnbzhabWxzZEdWeUlHbGtQU0ptYVd4MFpYSXdYMlJmTnpReFh6STNOVEVpSUhnOUlpMDNOeTQyTVRVeklpQjVQU0l0TnpZdU1UWXdNaUlnZDJsa2RHZzlJakU0Tnk0eU5UUWlJR2hsYVdkb2REMGlNVGcwTGpFMk1pSWdabWxzZEdWeVZXNXBkSE05SW5WelpYSlRjR0ZqWlU5dVZYTmxJaUJqYjJ4dmNpMXBiblJsY25CdmJHRjBhVzl1TFdacGJIUmxjbk05SW5OU1IwSWlQZ284Wm1WR2JHOXZaQ0JtYkc5dlpDMXZjR0ZqYVhSNVBTSXdJaUJ5WlhOMWJIUTlJa0poWTJ0bmNtOTFibVJKYldGblpVWnBlQ0l2UGdvOFptVkRiMnh2Y2sxaGRISnBlQ0JwYmowaVUyOTFjbU5sUVd4d2FHRWlJSFI1Y0dVOUltMWhkSEpwZUNJZ2RtRnNkV1Z6UFNJd0lEQWdNQ0F3SURBZ01DQXdJREFnTUNBd0lEQWdNQ0F3SURBZ01DQXdJREFnTUNBeE1qY2dNQ0lnY21WemRXeDBQU0pvWVhKa1FXeHdhR0VpTHo0S1BHWmxUMlptYzJWMEx6NEtQR1psUjJGMWMzTnBZVzVDYkhWeUlITjBaRVJsZG1saGRHbHZiajBpTkRBdU9UWWlMejRLUEdabFEyOXRjRzl6YVhSbElHbHVNajBpYUdGeVpFRnNjR2hoSWlCdmNHVnlZWFJ2Y2owaWIzVjBJaTgrQ2p4bVpVTnZiRzl5VFdGMGNtbDRJSFI1Y0dVOUltMWhkSEpwZUNJZ2RtRnNkV1Z6UFNJd0lEQWdNQ0F3SURBdU1UVXhPVE16SURBZ01DQXdJREFnTUM0eU16a3lNemdnTUNBd0lEQWdNQ0F3TGpRNU1ESTBNU0F3SURBZ01DQXdMalUwSURBaUx6NEtQR1psUW14bGJtUWdiVzlrWlQwaWJtOXliV0ZzSWlCcGJqSTlJa0poWTJ0bmNtOTFibVJKYldGblpVWnBlQ0lnY21WemRXeDBQU0psWm1abFkzUXhYMlJ5YjNCVGFHRmtiM2RmTnpReFh6STNOVEVpTHo0S1BHWmxRbXhsYm1RZ2JXOWtaVDBpYm05eWJXRnNJaUJwYmowaVUyOTFjbU5sUjNKaGNHaHBZeUlnYVc0eVBTSmxabVpsWTNReFgyUnliM0JUYUdGa2IzZGZOelF4WHpJM05URWlJSEpsYzNWc2REMGljMmhoY0dVaUx6NEtQQzltYVd4MFpYSStDanhzYVc1bFlYSkhjbUZrYVdWdWRDQnBaRDBpY0dGcGJuUXdYMnhwYm1WaGNsODNOREZmTWpjMU1TSWdlREU5SWpFeExqSXhORElpSUhreFBTSXhOUzQxTmpJaUlIZ3lQU0l5Tnk0ME1URTVJaUI1TWowaU1qQXVNVE01T1NJZ1ozSmhaR2xsYm5SVmJtbDBjejBpZFhObGNsTndZV05sVDI1VmMyVWlQZ284YzNSdmNDQnpkRzl3TFdOdmJHOXlQU0ozYUdsMFpTSXZQZ284YzNSdmNDQnZabVp6WlhROUlqRWlJSE4wYjNBdFkyOXNiM0k5SW5kb2FYUmxJaTgrQ2p3dmJHbHVaV0Z5UjNKaFpHbGxiblErQ2p4c2FXNWxZWEpIY21Ga2FXVnVkQ0JwWkQwaWNHRnBiblF4WDJ4cGJtVmhjbDgzTkRGZk1qYzFNU0lnZURFOUlqSTBMalkzTkRVaUlIa3hQU0l4TlM0eU5URTRJaUI0TWowaU1USXVPVFV6TmlJZ2VUSTlJak11TlRReE5qTWlJR2R5WVdScFpXNTBWVzVwZEhNOUluVnpaWEpUY0dGalpVOXVWWE5sSWo0S1BITjBiM0FnYzNSdmNDMWpiMnh2Y2owaUl6ZzJPVGRHUmlJdlBnbzhjM1J2Y0NCdlptWnpaWFE5SWpFaUlITjBiM0F0WTI5c2IzSTlJaU00TmprM1JrWWlJSE4wYjNBdGIzQmhZMmwwZVQwaU1DSXZQZ284TDJ4cGJtVmhja2R5WVdScFpXNTBQZ284YkdsdVpXRnlSM0poWkdsbGJuUWdhV1E5SW5CaGFXNTBNbDlzYVc1bFlYSmZOelF4WHpJM05URWlJSGd4UFNJeE9DNDJORGM0SWlCNU1UMGlNakV1T0RJMk1TSWdlREk5SWpjdU5EQTRNRElpSUhreVBTSXhOUzR6T0RVNUlpQm5jbUZrYVdWdWRGVnVhWFJ6UFNKMWMyVnlVM0JoWTJWUGJsVnpaU0krQ2p4emRHOXdJSE4wYjNBdFkyOXNiM0k5SWlNNE5qazNSa1lpTHo0S1BITjBiM0FnYjJabWMyVjBQU0l4SWlCemRHOXdMV052Ykc5eVBTSWpPRFk1TjBaR0lpQnpkRzl3TFc5d1lXTnBkSGs5SWpBaUx6NEtQQzlzYVc1bFlYSkhjbUZrYVdWdWRENEtQR3hwYm1WaGNrZHlZV1JwWlc1MElHbGtQU0p3WVdsdWRETmZiR2x1WldGeVh6YzBNVjh5TnpVeElpQjRNVDBpTVRJdU1UZ3lOeUlnZVRFOUlqRTFMalF6T1RRaUlIZ3lQU0l4T1M0M09Ua3hJaUI1TWowaU1qVXVNRGcwTXlJZ1ozSmhaR2xsYm5SVmJtbDBjejBpZFhObGNsTndZV05sVDI1VmMyVWlQZ284YzNSdmNDQnpkRzl3TFdOdmJHOXlQU0ozYUdsMFpTSXZQZ284YzNSdmNDQnZabVp6WlhROUlqQXVPVGd6T0RrMUlpQnpkRzl3TFdOdmJHOXlQU0lqUkRGRU9FWkdJaTgrQ2p3dmJHbHVaV0Z5UjNKaFpHbGxiblErQ2p4amJHbHdVR0YwYUNCcFpEMGlZMnhwY0RCZk56UXhYekkzTlRFaVBnbzhjbVZqZENCM2FXUjBhRDBpTXpJaUlHaGxhV2RvZEQwaU16SWlJR1pwYkd3OUluZG9hWFJsSWk4K0Nqd3ZZMnhwY0ZCaGRHZytDand2WkdWbWN6NEtQQzl6ZG1jK0NnPT1cIixcbiAgICAgICAgcmRuczogXCJpby5sdXhcIixcbiAgICB9O1xuICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcImVpcDY5NjM6YW5ub3VuY2VQcm92aWRlclwiLCB7XG4gICAgICAgIGRldGFpbDogT2JqZWN0LmZyZWV6ZSh7IGluZm8sIHByb3ZpZGVyIH0pLFxuICAgIH0pKTtcbn07XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImVpcDY5NjM6cmVxdWVzdFByb3ZpZGVyXCIsIChldmVudCkgPT4ge1xuICAgIGFubm91bmNlRWlwNjk2M1Byb3ZpZGVyKGx1eFByb3ZpZGVyKTtcbn0pO1xuYW5ub3VuY2VFaXA2OTYzUHJvdmlkZXIobHV4UHJvdmlkZXIpO1xud2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiZXRoZXJldW0jaW5pdGlhbGl6ZWRcIikpO1xuXG5leHBvcnRzLkV0aGVyZXVtUHJvdmlkZXIgPSBFdGhlcmV1bVByb3ZpZGVyO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9