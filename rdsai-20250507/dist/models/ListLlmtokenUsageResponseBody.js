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
exports.ListLLMTokenUsageResponseBody = exports.ListLLMTokenUsageResponseBodyTokenUsages = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class ListLLMTokenUsageResponseBodyTokenUsages extends $dara.Model {
    static names() {
        return {
            completionReasoningTokens: 'CompletionReasoningTokens',
            completionTokens: 'CompletionTokens',
            endTime: 'EndTime',
            explicitCachedTokens: 'ExplicitCachedTokens',
            implicitCachedTokens: 'ImplicitCachedTokens',
            model: 'Model',
            promptTokens: 'PromptTokens',
            startTime: 'StartTime',
            totalTokens: 'TotalTokens',
        };
    }
    static types() {
        return {
            completionReasoningTokens: 'number',
            completionTokens: 'number',
            endTime: 'string',
            explicitCachedTokens: 'number',
            implicitCachedTokens: 'number',
            model: 'string',
            promptTokens: 'number',
            startTime: 'string',
            totalTokens: 'number',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ListLLMTokenUsageResponseBodyTokenUsages = ListLLMTokenUsageResponseBodyTokenUsages;
class ListLLMTokenUsageResponseBody extends $dara.Model {
    static names() {
        return {
            completionTokens: 'CompletionTokens',
            explicitCachedTokens: 'ExplicitCachedTokens',
            implicitCachedTokens: 'ImplicitCachedTokens',
            promptTokens: 'PromptTokens',
            requestId: 'RequestId',
            tokenUsages: 'TokenUsages',
            totalTokens: 'TotalTokens',
        };
    }
    static types() {
        return {
            completionTokens: 'number',
            explicitCachedTokens: 'number',
            implicitCachedTokens: 'number',
            promptTokens: 'number',
            requestId: 'string',
            tokenUsages: { 'type': 'array', 'itemType': ListLLMTokenUsageResponseBodyTokenUsages },
            totalTokens: 'number',
        };
    }
    validate() {
        if (Array.isArray(this.tokenUsages)) {
            $dara.Model.validateArray(this.tokenUsages);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ListLLMTokenUsageResponseBody = ListLLMTokenUsageResponseBody;
//# sourceMappingURL=ListLlmtokenUsageResponseBody.js.map