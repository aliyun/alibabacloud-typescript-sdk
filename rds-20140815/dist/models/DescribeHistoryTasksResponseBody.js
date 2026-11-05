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
exports.DescribeHistoryTasksResponseBody = exports.DescribeHistoryTasksResponseBodyItems = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeHistoryTasksResponseBodyItems extends $dara.Model {
    static names() {
        return {
            actionInfo: 'ActionInfo',
            callerSource: 'CallerSource',
            callerUid: 'CallerUid',
            currentStepName: 'CurrentStepName',
            dbType: 'DbType',
            endTime: 'EndTime',
            instanceId: 'InstanceId',
            instanceName: 'InstanceName',
            instanceType: 'InstanceType',
            product: 'Product',
            progress: 'Progress',
            reasonCode: 'ReasonCode',
            regionId: 'RegionId',
            remainTime: 'RemainTime',
            startTime: 'StartTime',
            status: 'Status',
            taskDetail: 'TaskDetail',
            taskId: 'TaskId',
            taskType: 'TaskType',
            uid: 'Uid',
        };
    }
    static types() {
        return {
            actionInfo: 'string',
            callerSource: 'string',
            callerUid: 'string',
            currentStepName: 'string',
            dbType: 'string',
            endTime: 'string',
            instanceId: 'string',
            instanceName: 'string',
            instanceType: 'string',
            product: 'string',
            progress: 'number',
            reasonCode: 'string',
            regionId: 'string',
            remainTime: 'number',
            startTime: 'string',
            status: 'string',
            taskDetail: 'string',
            taskId: 'string',
            taskType: 'string',
            uid: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeHistoryTasksResponseBodyItems = DescribeHistoryTasksResponseBodyItems;
class DescribeHistoryTasksResponseBody extends $dara.Model {
    static names() {
        return {
            items: 'Items',
            pageNumber: 'PageNumber',
            pageSize: 'PageSize',
            requestId: 'RequestId',
            totalCount: 'TotalCount',
        };
    }
    static types() {
        return {
            items: { 'type': 'array', 'itemType': DescribeHistoryTasksResponseBodyItems },
            pageNumber: 'number',
            pageSize: 'number',
            requestId: 'string',
            totalCount: 'number',
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
exports.DescribeHistoryTasksResponseBody = DescribeHistoryTasksResponseBody;
//# sourceMappingURL=DescribeHistoryTasksResponseBody.js.map