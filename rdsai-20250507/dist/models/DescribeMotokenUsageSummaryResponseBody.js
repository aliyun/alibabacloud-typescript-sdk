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
exports.DescribeMOTokenUsageSummaryResponseBody = exports.DescribeMOTokenUsageSummaryResponseBodySummary = exports.DescribeMOTokenUsageSummaryResponseBodyRecords = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeMOTokenUsageSummaryResponseBodyRecords extends $dara.Model {
    static names() {
        return {
            apiKey: 'ApiKey',
            cacheTokens: 'CacheTokens',
            date: 'Date',
            inputTokens: 'InputTokens',
            keyName: 'KeyName',
            model: 'Model',
            outputTokens: 'OutputTokens',
            requestCount: 'RequestCount',
            totalTokens: 'TotalTokens',
            usageType: 'UsageType',
        };
    }
    static types() {
        return {
            apiKey: 'string',
            cacheTokens: 'number',
            date: 'string',
            inputTokens: 'number',
            keyName: 'string',
            model: 'string',
            outputTokens: 'number',
            requestCount: 'number',
            totalTokens: 'number',
            usageType: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeMOTokenUsageSummaryResponseBodyRecords = DescribeMOTokenUsageSummaryResponseBodyRecords;
class DescribeMOTokenUsageSummaryResponseBodySummary extends $dara.Model {
    static names() {
        return {
            cacheTokens: 'CacheTokens',
            inputTokens: 'InputTokens',
            outputTokens: 'OutputTokens',
            totalTokens: 'TotalTokens',
        };
    }
    static types() {
        return {
            cacheTokens: 'number',
            inputTokens: 'number',
            outputTokens: 'number',
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
exports.DescribeMOTokenUsageSummaryResponseBodySummary = DescribeMOTokenUsageSummaryResponseBodySummary;
class DescribeMOTokenUsageSummaryResponseBody extends $dara.Model {
    static names() {
        return {
            message: 'Message',
            records: 'Records',
            requestId: 'RequestId',
            success: 'Success',
            summary: 'Summary',
            usageType: 'UsageType',
        };
    }
    static types() {
        return {
            message: 'string',
            records: { 'type': 'array', 'itemType': DescribeMOTokenUsageSummaryResponseBodyRecords },
            requestId: 'string',
            success: 'boolean',
            summary: DescribeMOTokenUsageSummaryResponseBodySummary,
            usageType: 'string',
        };
    }
    validate() {
        if (Array.isArray(this.records)) {
            $dara.Model.validateArray(this.records);
        }
        if (this.summary && typeof this.summary.validate === 'function') {
            this.summary.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeMOTokenUsageSummaryResponseBody = DescribeMOTokenUsageSummaryResponseBody;
//# sourceMappingURL=DescribeMotokenUsageSummaryResponseBody.js.map