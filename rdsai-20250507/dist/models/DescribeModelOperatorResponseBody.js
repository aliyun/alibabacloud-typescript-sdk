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
exports.DescribeModelOperatorResponseBody = exports.DescribeModelOperatorResponseBodyData = exports.DescribeModelOperatorResponseBodyDataKeyUsageList = exports.DescribeModelOperatorResponseBodyDataKeyUsageListDailyUsage = exports.DescribeModelOperatorResponseBodyDataDailyUsage = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeModelOperatorResponseBodyDataDailyUsage extends $dara.Model {
    static names() {
        return {
            date: 'Date',
            usage: 'Usage',
        };
    }
    static types() {
        return {
            date: 'string',
            usage: 'number',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeModelOperatorResponseBodyDataDailyUsage = DescribeModelOperatorResponseBodyDataDailyUsage;
class DescribeModelOperatorResponseBodyDataKeyUsageListDailyUsage extends $dara.Model {
    static names() {
        return {
            date: 'Date',
            usage: 'Usage',
        };
    }
    static types() {
        return {
            date: 'string',
            usage: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeModelOperatorResponseBodyDataKeyUsageListDailyUsage = DescribeModelOperatorResponseBodyDataKeyUsageListDailyUsage;
class DescribeModelOperatorResponseBodyDataKeyUsageList extends $dara.Model {
    static names() {
        return {
            apiKey: 'ApiKey',
            dailyUsage: 'DailyUsage',
            deleted: 'Deleted',
            keyName: 'KeyName',
            keyType: 'KeyType',
            keyUsed: 'KeyUsed',
            usedQuota: 'UsedQuota',
        };
    }
    static types() {
        return {
            apiKey: 'string',
            dailyUsage: { 'type': 'array', 'itemType': DescribeModelOperatorResponseBodyDataKeyUsageListDailyUsage },
            deleted: 'boolean',
            keyName: 'string',
            keyType: 'string',
            keyUsed: 'string',
            usedQuota: 'string',
        };
    }
    validate() {
        if (Array.isArray(this.dailyUsage)) {
            $dara.Model.validateArray(this.dailyUsage);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeModelOperatorResponseBodyDataKeyUsageList = DescribeModelOperatorResponseBodyDataKeyUsageList;
class DescribeModelOperatorResponseBodyData extends $dara.Model {
    static names() {
        return {
            apiKey: 'ApiKey',
            autoRenew: 'AutoRenew',
            baseUrl: 'BaseUrl',
            chargeType: 'ChargeType',
            dailyUsage: 'DailyUsage',
            endTime: 'EndTime',
            instanceClass: 'InstanceClass',
            instanceId: 'InstanceId',
            keyUsageList: 'KeyUsageList',
            prefixCacheEnabled: 'PrefixCacheEnabled',
            sessionIds: 'SessionIds',
            startTime: 'StartTime',
            status: 'Status',
            totalQuota: 'TotalQuota',
            usedQuota: 'UsedQuota',
        };
    }
    static types() {
        return {
            apiKey: 'string',
            autoRenew: 'boolean',
            baseUrl: 'string',
            chargeType: 'string',
            dailyUsage: { 'type': 'array', 'itemType': DescribeModelOperatorResponseBodyDataDailyUsage },
            endTime: 'number',
            instanceClass: 'string',
            instanceId: 'string',
            keyUsageList: { 'type': 'array', 'itemType': DescribeModelOperatorResponseBodyDataKeyUsageList },
            prefixCacheEnabled: 'boolean',
            sessionIds: { 'type': 'array', 'itemType': 'string' },
            startTime: 'number',
            status: 'string',
            totalQuota: 'number',
            usedQuota: 'number',
        };
    }
    validate() {
        if (Array.isArray(this.dailyUsage)) {
            $dara.Model.validateArray(this.dailyUsage);
        }
        if (Array.isArray(this.keyUsageList)) {
            $dara.Model.validateArray(this.keyUsageList);
        }
        if (Array.isArray(this.sessionIds)) {
            $dara.Model.validateArray(this.sessionIds);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeModelOperatorResponseBodyData = DescribeModelOperatorResponseBodyData;
class DescribeModelOperatorResponseBody extends $dara.Model {
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
            data: DescribeModelOperatorResponseBodyData,
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
exports.DescribeModelOperatorResponseBody = DescribeModelOperatorResponseBody;
//# sourceMappingURL=DescribeModelOperatorResponseBody.js.map