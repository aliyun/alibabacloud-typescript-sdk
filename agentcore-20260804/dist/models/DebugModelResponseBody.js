"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DebugModelResponseBody = exports.DebugModelResponseBodyData = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DebugModelResponseBodyData extends $dara.Model {
    static names() {
        return {
            connectionId: 'connectionId',
            debugSuccess: 'debugSuccess',
            errorCode: 'errorCode',
            errorMessage: 'errorMessage',
            inputTokens: 'inputTokens',
            latencyMs: 'latencyMs',
            modelId: 'modelId',
            outputTokens: 'outputTokens',
            response: 'response',
            status: 'status',
        };
    }
    static types() {
        return {
            connectionId: 'string',
            debugSuccess: 'boolean',
            errorCode: 'string',
            errorMessage: 'string',
            inputTokens: 'number',
            latencyMs: 'number',
            modelId: 'string',
            outputTokens: 'number',
            response: 'string',
            status: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DebugModelResponseBodyData = DebugModelResponseBodyData;
class DebugModelResponseBody extends $dara.Model {
    static names() {
        return {
            code: 'code',
            data: 'data',
            httpStatusCode: 'httpStatusCode',
            message: 'message',
            requestId: 'requestId',
            success: 'success',
        };
    }
    static types() {
        return {
            code: 'string',
            data: DebugModelResponseBodyData,
            httpStatusCode: 'number',
            message: 'string',
            requestId: 'string',
            success: 'boolean',
        };
    }
    validate() {
        if (this.data && typeof this.data.validate === 'function') {
            this.data.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DebugModelResponseBody = DebugModelResponseBody;
//# sourceMappingURL=DebugModelResponseBody.js.map