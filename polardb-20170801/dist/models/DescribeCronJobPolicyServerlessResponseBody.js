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
exports.DescribeCronJobPolicyServerlessResponseBody = exports.DescribeCronJobPolicyServerlessResponseBodyItems = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeCronJobPolicyServerlessResponseBodyItems extends $dara.Model {
    static names() {
        return {
            action: 'Action',
            allowShutDown: 'AllowShutDown',
            cronExpression: 'CronExpression',
            DBClusterId: 'DBClusterId',
            endTime: 'EndTime',
            jobId: 'JobId',
            orderId: 'OrderId',
            regionId: 'RegionId',
            scaleApRoNumMax: 'ScaleApRoNumMax',
            scaleApRoNumMin: 'ScaleApRoNumMin',
            scaleMax: 'ScaleMax',
            scaleMin: 'ScaleMin',
            scaleRoNumMax: 'ScaleRoNumMax',
            scaleRoNumMin: 'ScaleRoNumMin',
            secondsUntilAutoPause: 'SecondsUntilAutoPause',
            serverlessRuleCpuEnlargeThreshold: 'ServerlessRuleCpuEnlargeThreshold',
            serverlessRuleCpuShrinkThreshold: 'ServerlessRuleCpuShrinkThreshold',
            serverlessRuleMode: 'ServerlessRuleMode',
            startTime: 'StartTime',
            status: 'Status',
        };
    }
    static types() {
        return {
            action: 'string',
            allowShutDown: 'string',
            cronExpression: 'string',
            DBClusterId: 'string',
            endTime: 'string',
            jobId: 'string',
            orderId: 'string',
            regionId: 'string',
            scaleApRoNumMax: 'string',
            scaleApRoNumMin: 'string',
            scaleMax: 'string',
            scaleMin: 'string',
            scaleRoNumMax: 'string',
            scaleRoNumMin: 'string',
            secondsUntilAutoPause: 'string',
            serverlessRuleCpuEnlargeThreshold: 'string',
            serverlessRuleCpuShrinkThreshold: 'string',
            serverlessRuleMode: 'string',
            startTime: 'string',
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
exports.DescribeCronJobPolicyServerlessResponseBodyItems = DescribeCronJobPolicyServerlessResponseBodyItems;
class DescribeCronJobPolicyServerlessResponseBody extends $dara.Model {
    static names() {
        return {
            items: 'Items',
            pageNumber: 'PageNumber',
            pageSize: 'PageSize',
            requestId: 'RequestId',
            totalRecordCount: 'TotalRecordCount',
        };
    }
    static types() {
        return {
            items: { 'type': 'array', 'itemType': DescribeCronJobPolicyServerlessResponseBodyItems },
            pageNumber: 'number',
            pageSize: 'number',
            requestId: 'string',
            totalRecordCount: 'number',
        };
    }
    validate() {
        if (Array.isArray(this.items)) {
            $dara.Model.validateArray(this.items);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeCronJobPolicyServerlessResponseBody = DescribeCronJobPolicyServerlessResponseBody;
//# sourceMappingURL=DescribeCronJobPolicyServerlessResponseBody.js.map