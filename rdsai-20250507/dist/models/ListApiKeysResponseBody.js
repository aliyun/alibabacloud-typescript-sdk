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
exports.ListApiKeysResponseBody = exports.ListApiKeysResponseBodyData = exports.ListApiKeysResponseBodyDataCustomKeyList = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class ListApiKeysResponseBodyDataCustomKeyList extends $dara.Model {
    static names() {
        return {
            apiKey: 'ApiKey',
            dailyTokenQuota: 'DailyTokenQuota',
            isRateLimited: 'IsRateLimited',
            keyName: 'KeyName',
            limitRate: 'LimitRate',
            limitType: 'LimitType',
            roleArn: 'RoleArn',
            thresholdPercent: 'ThresholdPercent',
            tokenQuota: 'TokenQuota',
        };
    }
    static types() {
        return {
            apiKey: 'string',
            dailyTokenQuota: 'number',
            isRateLimited: 'boolean',
            keyName: 'string',
            limitRate: 'number',
            limitType: 'string',
            roleArn: 'string',
            thresholdPercent: 'number',
            tokenQuota: 'number',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ListApiKeysResponseBodyDataCustomKeyList = ListApiKeysResponseBodyDataCustomKeyList;
class ListApiKeysResponseBodyData extends $dara.Model {
    static names() {
        return {
            baseUrl: 'BaseUrl',
            customKeyList: 'CustomKeyList',
            dailyTokenQuota: 'DailyTokenQuota',
            isRateLimited: 'IsRateLimited',
            page: 'Page',
            pageSize: 'PageSize',
            systemApiKey: 'SystemApiKey',
            thresholdPercent: 'ThresholdPercent',
            total: 'Total',
        };
    }
    static types() {
        return {
            baseUrl: 'string',
            customKeyList: { 'type': 'array', 'itemType': ListApiKeysResponseBodyDataCustomKeyList },
            dailyTokenQuota: 'number',
            isRateLimited: 'boolean',
            page: 'number',
            pageSize: 'number',
            systemApiKey: 'string',
            thresholdPercent: 'number',
            total: 'number',
        };
    }
    validate() {
        if (Array.isArray(this.customKeyList)) {
            $dara.Model.validateArray(this.customKeyList);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ListApiKeysResponseBodyData = ListApiKeysResponseBodyData;
class ListApiKeysResponseBody extends $dara.Model {
    static names() {
        return {
            data: 'Data',
            message: 'Message',
            requestId: 'RequestId',
            success: 'Success',
        };
    }
    static types() {
        return {
            data: ListApiKeysResponseBodyData,
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
exports.ListApiKeysResponseBody = ListApiKeysResponseBody;
//# sourceMappingURL=ListApiKeysResponseBody.js.map