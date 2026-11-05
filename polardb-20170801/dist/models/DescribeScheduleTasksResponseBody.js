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
exports.DescribeScheduleTasksResponseBody = exports.DescribeScheduleTasksResponseBodyData = exports.DescribeScheduleTasksResponseBodyDataTimerInfos = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeScheduleTasksResponseBodyDataTimerInfos extends $dara.Model {
    static names() {
        return {
            action: 'Action',
            crontabJobId: 'CrontabJobId',
            DBClusterId: 'DBClusterId',
            dbClusterDescription: 'DbClusterDescription',
            dbClusterStatus: 'DbClusterStatus',
            orderId: 'OrderId',
            plannedEndTime: 'PlannedEndTime',
            plannedFlashingOffTime: 'PlannedFlashingOffTime',
            plannedStartTime: 'PlannedStartTime',
            plannedTime: 'PlannedTime',
            region: 'Region',
            status: 'Status',
            taskCancel: 'TaskCancel',
            taskId: 'TaskId',
        };
    }
    static types() {
        return {
            action: 'string',
            crontabJobId: 'string',
            DBClusterId: 'string',
            dbClusterDescription: 'string',
            dbClusterStatus: 'string',
            orderId: 'string',
            plannedEndTime: 'string',
            plannedFlashingOffTime: 'string',
            plannedStartTime: 'string',
            plannedTime: 'string',
            region: 'string',
            status: 'string',
            taskCancel: 'boolean',
            taskId: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeScheduleTasksResponseBodyDataTimerInfos = DescribeScheduleTasksResponseBodyDataTimerInfos;
class DescribeScheduleTasksResponseBodyData extends $dara.Model {
    static names() {
        return {
            pageNumber: 'PageNumber',
            pageSize: 'PageSize',
            timerInfos: 'TimerInfos',
            totalRecordCount: 'TotalRecordCount',
        };
    }
    static types() {
        return {
            pageNumber: 'number',
            pageSize: 'number',
            timerInfos: { 'type': 'array', 'itemType': DescribeScheduleTasksResponseBodyDataTimerInfos },
            totalRecordCount: 'number',
        };
    }
    validate() {
        if (Array.isArray(this.timerInfos)) {
            $dara.Model.validateArray(this.timerInfos);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeScheduleTasksResponseBodyData = DescribeScheduleTasksResponseBodyData;
class DescribeScheduleTasksResponseBody extends $dara.Model {
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
            data: DescribeScheduleTasksResponseBodyData,
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
exports.DescribeScheduleTasksResponseBody = DescribeScheduleTasksResponseBody;
//# sourceMappingURL=DescribeScheduleTasksResponseBody.js.map