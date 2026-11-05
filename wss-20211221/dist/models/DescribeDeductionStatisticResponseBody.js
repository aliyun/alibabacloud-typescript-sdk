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
exports.DescribeDeductionStatisticResponseBody = exports.DescribeDeductionStatisticResponseBodyData = exports.DescribeDeductionStatisticResponseBodyDataUsages = exports.DescribeDeductionStatisticResponseBodyDataDeductions = exports.DescribeDeductionStatisticResponseBodyDataAvailableCorePackages = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeDeductionStatisticResponseBodyDataAvailableCorePackages extends $dara.Model {
    static names() {
        return {
            aliUid: 'AliUid',
            createTime: 'CreateTime',
            endTime: 'EndTime',
            expiredTime: 'ExpiredTime',
            groupId: 'GroupId',
            groupResourceType: 'GroupResourceType',
            noLx: 'NoLx',
            noLxSource: 'NoLxSource',
            resourceId: 'ResourceId',
            resourceType: 'ResourceType',
            startTime: 'StartTime',
            status: 'Status',
            totalTime: 'TotalTime',
            usedTime: 'UsedTime',
        };
    }
    static types() {
        return {
            aliUid: 'number',
            createTime: 'string',
            endTime: 'string',
            expiredTime: 'string',
            groupId: 'string',
            groupResourceType: 'string',
            noLx: 'boolean',
            noLxSource: 'string',
            resourceId: 'string',
            resourceType: 'string',
            startTime: 'string',
            status: 'string',
            totalTime: 'number',
            usedTime: 'number',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDeductionStatisticResponseBodyDataAvailableCorePackages = DescribeDeductionStatisticResponseBodyDataAvailableCorePackages;
class DescribeDeductionStatisticResponseBodyDataDeductions extends $dara.Model {
    static names() {
        return {
            consumeSecond: 'ConsumeSecond',
            deductionDate: 'DeductionDate',
            resourceType: 'ResourceType',
        };
    }
    static types() {
        return {
            consumeSecond: 'number',
            deductionDate: 'string',
            resourceType: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDeductionStatisticResponseBodyDataDeductions = DescribeDeductionStatisticResponseBodyDataDeductions;
class DescribeDeductionStatisticResponseBodyDataUsages extends $dara.Model {
    static names() {
        return {
            consumeSecond: 'ConsumeSecond',
            period: 'Period',
            resourceType: 'ResourceType',
        };
    }
    static types() {
        return {
            consumeSecond: 'number',
            period: 'string',
            resourceType: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDeductionStatisticResponseBodyDataUsages = DescribeDeductionStatisticResponseBodyDataUsages;
class DescribeDeductionStatisticResponseBodyData extends $dara.Model {
    static names() {
        return {
            availableCorePackages: 'AvailableCorePackages',
            deductions: 'Deductions',
            usages: 'Usages',
        };
    }
    static types() {
        return {
            availableCorePackages: { 'type': 'array', 'itemType': DescribeDeductionStatisticResponseBodyDataAvailableCorePackages },
            deductions: { 'type': 'array', 'itemType': DescribeDeductionStatisticResponseBodyDataDeductions },
            usages: { 'type': 'array', 'itemType': DescribeDeductionStatisticResponseBodyDataUsages },
        };
    }
    validate() {
        if (Array.isArray(this.availableCorePackages)) {
            $dara.Model.validateArray(this.availableCorePackages);
        }
        if (Array.isArray(this.deductions)) {
            $dara.Model.validateArray(this.deductions);
        }
        if (Array.isArray(this.usages)) {
            $dara.Model.validateArray(this.usages);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDeductionStatisticResponseBodyData = DescribeDeductionStatisticResponseBodyData;
class DescribeDeductionStatisticResponseBody extends $dara.Model {
    static names() {
        return {
            data: 'Data',
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            data: DescribeDeductionStatisticResponseBodyData,
            requestId: 'string',
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
exports.DescribeDeductionStatisticResponseBody = DescribeDeductionStatisticResponseBody;
//# sourceMappingURL=DescribeDeductionStatisticResponseBody.js.map