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
exports.DescribeCreditUsageInfoResponseBody = exports.DescribeCreditUsageInfoResponseBodyUsageInfoList = exports.DescribeCreditUsageInfoResponseBodyUsageInfoListUsageInfo = exports.DescribeCreditUsageInfoResponseBodyUsageInfoListUsageInfoRemainCreditInfo = exports.DescribeCreditUsageInfoResponseBodyUsageInfoListUsageInfoCreditTrendList = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeCreditUsageInfoResponseBodyUsageInfoListUsageInfoCreditTrendList extends $dara.Model {
    static names() {
        return {
            timePoint: 'TimePoint',
            usedCredit: 'UsedCredit',
        };
    }
    static types() {
        return {
            timePoint: 'string',
            usedCredit: 'number',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeCreditUsageInfoResponseBodyUsageInfoListUsageInfoCreditTrendList = DescribeCreditUsageInfoResponseBodyUsageInfoListUsageInfoCreditTrendList;
class DescribeCreditUsageInfoResponseBodyUsageInfoListUsageInfoRemainCreditInfo extends $dara.Model {
    static names() {
        return {
            deductingAmount: 'DeductingAmount',
            pendingAmount: 'PendingAmount',
        };
    }
    static types() {
        return {
            deductingAmount: 'number',
            pendingAmount: 'number',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeCreditUsageInfoResponseBodyUsageInfoListUsageInfoRemainCreditInfo = DescribeCreditUsageInfoResponseBodyUsageInfoListUsageInfoRemainCreditInfo;
class DescribeCreditUsageInfoResponseBodyUsageInfoListUsageInfo extends $dara.Model {
    static names() {
        return {
            availableAmount: 'AvailableAmount',
            contactGroupNames: 'ContactGroupNames',
            creditTrendList: 'CreditTrendList',
            currentInstanceExpiredTime: 'CurrentInstanceExpiredTime',
            currentInstanceId: 'CurrentInstanceId',
            currentRemainCredit: 'CurrentRemainCredit',
            currentTotalCredit: 'CurrentTotalCredit',
            currentUsedCredit: 'CurrentUsedCredit',
            dayUsedCredit: 'DayUsedCredit',
            lastTriggeredAt: 'LastTriggeredAt',
            periodCreditQuota: 'PeriodCreditQuota',
            periodPayGoUsedCredit: 'PeriodPayGoUsedCredit',
            periodSharedUsedCredit: 'PeriodSharedUsedCredit',
            periodTotalCredit: 'PeriodTotalCredit',
            periodTotalUsedCredit: 'PeriodTotalUsedCredit',
            periodUsedCredit: 'PeriodUsedCredit',
            remainCredit: 'RemainCredit',
            remainCreditInfo: 'RemainCreditInfo',
            todayUsed: 'TodayUsed',
            totalCredit: 'TotalCredit',
            totalUsed: 'TotalUsed',
            totalUsedCredit: 'TotalUsedCredit',
            warnPercent: 'WarnPercent',
            weekUsedCredit: 'WeekUsedCredit',
        };
    }
    static types() {
        return {
            availableAmount: 'number',
            contactGroupNames: { 'type': 'array', 'itemType': 'string' },
            creditTrendList: { 'type': 'array', 'itemType': DescribeCreditUsageInfoResponseBodyUsageInfoListUsageInfoCreditTrendList },
            currentInstanceExpiredTime: 'string',
            currentInstanceId: 'string',
            currentRemainCredit: 'number',
            currentTotalCredit: 'number',
            currentUsedCredit: 'number',
            dayUsedCredit: 'number',
            lastTriggeredAt: 'string',
            periodCreditQuota: 'number',
            periodPayGoUsedCredit: 'number',
            periodSharedUsedCredit: 'number',
            periodTotalCredit: 'number',
            periodTotalUsedCredit: 'number',
            periodUsedCredit: 'number',
            remainCredit: 'number',
            remainCreditInfo: DescribeCreditUsageInfoResponseBodyUsageInfoListUsageInfoRemainCreditInfo,
            todayUsed: 'string',
            totalCredit: 'number',
            totalUsed: 'string',
            totalUsedCredit: 'number',
            warnPercent: 'number',
            weekUsedCredit: 'number',
        };
    }
    validate() {
        if (Array.isArray(this.contactGroupNames)) {
            $dara.Model.validateArray(this.contactGroupNames);
        }
        if (Array.isArray(this.creditTrendList)) {
            $dara.Model.validateArray(this.creditTrendList);
        }
        if (this.remainCreditInfo && typeof this.remainCreditInfo.validate === 'function') {
            this.remainCreditInfo.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeCreditUsageInfoResponseBodyUsageInfoListUsageInfo = DescribeCreditUsageInfoResponseBodyUsageInfoListUsageInfo;
class DescribeCreditUsageInfoResponseBodyUsageInfoList extends $dara.Model {
    static names() {
        return {
            usageInfo: 'UsageInfo',
            usageInfoKey: 'UsageInfoKey',
        };
    }
    static types() {
        return {
            usageInfo: DescribeCreditUsageInfoResponseBodyUsageInfoListUsageInfo,
            usageInfoKey: 'string',
        };
    }
    validate() {
        if (this.usageInfo && typeof this.usageInfo.validate === 'function') {
            this.usageInfo.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeCreditUsageInfoResponseBodyUsageInfoList = DescribeCreditUsageInfoResponseBodyUsageInfoList;
class DescribeCreditUsageInfoResponseBody extends $dara.Model {
    static names() {
        return {
            requestId: 'RequestId',
            usageInfoList: 'UsageInfoList',
        };
    }
    static types() {
        return {
            requestId: 'string',
            usageInfoList: { 'type': 'array', 'itemType': DescribeCreditUsageInfoResponseBodyUsageInfoList },
        };
    }
    validate() {
        if (Array.isArray(this.usageInfoList)) {
            $dara.Model.validateArray(this.usageInfoList);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeCreditUsageInfoResponseBody = DescribeCreditUsageInfoResponseBody;
//# sourceMappingURL=DescribeCreditUsageInfoResponseBody.js.map