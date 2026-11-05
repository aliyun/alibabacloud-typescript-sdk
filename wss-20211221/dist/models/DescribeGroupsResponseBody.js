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
exports.DescribeGroupsResponseBody = exports.DescribeGroupsResponseBodyGroups = exports.DescribeGroupsResponseBodyGroupsInstances = exports.DescribeGroupsResponseBodyGroupsInstancesUsageAlertRule = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeGroupsResponseBodyGroupsInstancesUsageAlertRule extends $dara.Model {
    static names() {
        return {
            contactGroupNames: 'ContactGroupNames',
            lastTriggeredAt: 'LastTriggeredAt',
            thresholdPercent: 'ThresholdPercent',
        };
    }
    static types() {
        return {
            contactGroupNames: { 'type': 'array', 'itemType': 'string' },
            lastTriggeredAt: 'string',
            thresholdPercent: 'number',
        };
    }
    validate() {
        if (Array.isArray(this.contactGroupNames)) {
            $dara.Model.validateArray(this.contactGroupNames);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeGroupsResponseBodyGroupsInstancesUsageAlertRule = DescribeGroupsResponseBodyGroupsInstancesUsageAlertRule;
class DescribeGroupsResponseBodyGroupsInstances extends $dara.Model {
    static names() {
        return {
            aliUid: 'AliUid',
            expiredTime: 'ExpiredTime',
            freeTrial: 'FreeTrial',
            groupResourceType: 'GroupResourceType',
            instanceId: 'InstanceId',
            period: 'Period',
            periodEndTime: 'PeriodEndTime',
            periodStartTime: 'PeriodStartTime',
            periodUnit: 'PeriodUnit',
            priorityDeduction: 'PriorityDeduction',
            resourceType: 'ResourceType',
            startTime: 'StartTime',
            state: 'State',
            totalTime: 'TotalTime',
            totalTimeDecimal: 'TotalTimeDecimal',
            usageAlertRule: 'UsageAlertRule',
            usedTime: 'UsedTime',
            usedTimeDecimal: 'UsedTimeDecimal',
        };
    }
    static types() {
        return {
            aliUid: 'number',
            expiredTime: 'string',
            freeTrial: 'boolean',
            groupResourceType: 'string',
            instanceId: 'string',
            period: 'number',
            periodEndTime: 'string',
            periodStartTime: 'string',
            periodUnit: 'string',
            priorityDeduction: 'boolean',
            resourceType: 'string',
            startTime: 'string',
            state: 'string',
            totalTime: 'number',
            totalTimeDecimal: 'string',
            usageAlertRule: DescribeGroupsResponseBodyGroupsInstancesUsageAlertRule,
            usedTime: 'number',
            usedTimeDecimal: 'string',
        };
    }
    validate() {
        if (this.usageAlertRule && typeof this.usageAlertRule.validate === 'function') {
            this.usageAlertRule.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeGroupsResponseBodyGroupsInstances = DescribeGroupsResponseBodyGroupsInstances;
class DescribeGroupsResponseBodyGroups extends $dara.Model {
    static names() {
        return {
            groupId: 'GroupId',
            instanceCount: 'InstanceCount',
            instances: 'Instances',
            lastWeekUsedCoreTime: 'LastWeekUsedCoreTime',
            leftCoreTime: 'LeftCoreTime',
            resourceIds: 'ResourceIds',
            totalTimeDecimal: 'TotalTimeDecimal',
            usedCoreTime: 'UsedCoreTime',
            usedTimeDecimal: 'UsedTimeDecimal',
        };
    }
    static types() {
        return {
            groupId: 'string',
            instanceCount: 'number',
            instances: { 'type': 'array', 'itemType': DescribeGroupsResponseBodyGroupsInstances },
            lastWeekUsedCoreTime: 'number',
            leftCoreTime: 'number',
            resourceIds: { 'type': 'array', 'itemType': 'string' },
            totalTimeDecimal: 'string',
            usedCoreTime: 'number',
            usedTimeDecimal: 'string',
        };
    }
    validate() {
        if (Array.isArray(this.instances)) {
            $dara.Model.validateArray(this.instances);
        }
        if (Array.isArray(this.resourceIds)) {
            $dara.Model.validateArray(this.resourceIds);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeGroupsResponseBodyGroups = DescribeGroupsResponseBodyGroups;
class DescribeGroupsResponseBody extends $dara.Model {
    static names() {
        return {
            groups: 'Groups',
            nextToken: 'NextToken',
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            groups: { 'type': 'array', 'itemType': DescribeGroupsResponseBodyGroups },
            nextToken: 'string',
            requestId: 'string',
        };
    }
    validate() {
        if (Array.isArray(this.groups)) {
            $dara.Model.validateArray(this.groups);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeGroupsResponseBody = DescribeGroupsResponseBody;
//# sourceMappingURL=DescribeGroupsResponseBody.js.map