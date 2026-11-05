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
exports.DescribeMOTokenUsageDetailResponseBody = exports.DescribeMOTokenUsageDetailResponseBodyRecords = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeMOTokenUsageDetailResponseBodyRecords extends $dara.Model {
    static names() {
        return {
            cacheTokens: 'CacheTokens',
            consumerName: 'ConsumerName',
            extraInfo: 'ExtraInfo',
            inputTokens: 'InputTokens',
            instanceId: 'InstanceId',
            model: 'Model',
            outputTokens: 'OutputTokens',
            region: 'Region',
            requestTime: 'RequestTime',
            totalTokens: 'TotalTokens',
        };
    }
    static types() {
        return {
            cacheTokens: 'number',
            consumerName: 'string',
            extraInfo: 'string',
            inputTokens: 'number',
            instanceId: 'string',
            model: 'string',
            outputTokens: 'number',
            region: 'string',
            requestTime: 'string',
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
exports.DescribeMOTokenUsageDetailResponseBodyRecords = DescribeMOTokenUsageDetailResponseBodyRecords;
class DescribeMOTokenUsageDetailResponseBody extends $dara.Model {
    static names() {
        return {
            nextCursor: 'NextCursor',
            page: 'Page',
            pageSize: 'PageSize',
            records: 'Records',
            requestId: 'RequestId',
            totalCount: 'TotalCount',
            usageType: 'UsageType',
        };
    }
    static types() {
        return {
            nextCursor: 'string',
            page: 'number',
            pageSize: 'number',
            records: { 'type': 'array', 'itemType': DescribeMOTokenUsageDetailResponseBodyRecords },
            requestId: 'string',
            totalCount: 'number',
            usageType: 'string',
        };
    }
    validate() {
        if (Array.isArray(this.records)) {
            $dara.Model.validateArray(this.records);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeMOTokenUsageDetailResponseBody = DescribeMOTokenUsageDetailResponseBody;
//# sourceMappingURL=DescribeMotokenUsageDetailResponseBody.js.map