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
exports.GetChatModelResponseBody = exports.GetChatModelResponseBodyData = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class GetChatModelResponseBodyData extends $dara.Model {
    static names() {
        return {
            contextWindow: 'ContextWindow',
            default: 'Default',
            features: 'Features',
            modelId: 'ModelId',
            thinkingLevels: 'ThinkingLevels',
        };
    }
    static types() {
        return {
            contextWindow: 'number',
            default: 'boolean',
            features: { 'type': 'array', 'itemType': 'string' },
            modelId: 'string',
            thinkingLevels: { 'type': 'array', 'itemType': 'string' },
        };
    }
    validate() {
        if (Array.isArray(this.features)) {
            $dara.Model.validateArray(this.features);
        }
        if (Array.isArray(this.thinkingLevels)) {
            $dara.Model.validateArray(this.thinkingLevels);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.GetChatModelResponseBodyData = GetChatModelResponseBodyData;
class GetChatModelResponseBody extends $dara.Model {
    static names() {
        return {
            data: 'Data',
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            data: { 'type': 'array', 'itemType': GetChatModelResponseBodyData },
            requestId: 'string',
        };
    }
    validate() {
        if (Array.isArray(this.data)) {
            $dara.Model.validateArray(this.data);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.GetChatModelResponseBody = GetChatModelResponseBody;
//# sourceMappingURL=GetChatModelResponseBody.js.map