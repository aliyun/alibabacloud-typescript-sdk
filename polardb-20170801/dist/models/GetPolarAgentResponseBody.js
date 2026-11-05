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
exports.GetPolarAgentResponseBody = exports.GetPolarAgentResponseBodyUiFunctionCall = exports.GetPolarAgentResponseBodyFunctionCall = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class GetPolarAgentResponseBodyFunctionCall extends $dara.Model {
    static names() {
        return {
            arguments: 'Arguments',
            id: 'Id',
            name: 'Name',
            status: 'Status',
        };
    }
    static types() {
        return {
            arguments: 'string',
            id: 'string',
            name: 'string',
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
exports.GetPolarAgentResponseBodyFunctionCall = GetPolarAgentResponseBodyFunctionCall;
class GetPolarAgentResponseBodyUiFunctionCall extends $dara.Model {
    static names() {
        return {
            argsText: 'ArgsText',
            toolName: 'ToolName',
        };
    }
    static types() {
        return {
            argsText: 'string',
            toolName: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.GetPolarAgentResponseBodyUiFunctionCall = GetPolarAgentResponseBodyUiFunctionCall;
class GetPolarAgentResponseBody extends $dara.Model {
    static names() {
        return {
            content: 'Content',
            functionCall: 'FunctionCall',
            product: 'Product',
            queryId: 'QueryId',
            reasoningContent: 'ReasoningContent',
            requestId: 'RequestId',
            sessionId: 'SessionId',
            uiFunctionCall: 'UiFunctionCall',
        };
    }
    static types() {
        return {
            content: 'string',
            functionCall: { 'type': 'array', 'itemType': GetPolarAgentResponseBodyFunctionCall },
            product: 'string',
            queryId: 'string',
            reasoningContent: 'string',
            requestId: 'string',
            sessionId: 'string',
            uiFunctionCall: { 'type': 'array', 'itemType': GetPolarAgentResponseBodyUiFunctionCall },
        };
    }
    validate() {
        if (Array.isArray(this.functionCall)) {
            $dara.Model.validateArray(this.functionCall);
        }
        if (Array.isArray(this.uiFunctionCall)) {
            $dara.Model.validateArray(this.uiFunctionCall);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.GetPolarAgentResponseBody = GetPolarAgentResponseBody;
//# sourceMappingURL=GetPolarAgentResponseBody.js.map