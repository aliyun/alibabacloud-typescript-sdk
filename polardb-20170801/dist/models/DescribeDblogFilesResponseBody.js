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
exports.DescribeDBLogFilesResponseBody = exports.DescribeDBLogFilesResponseBodySwitchLogItems = exports.DescribeDBLogFilesResponseBodySwitchLogItemsSwitchStepItems = exports.DescribeDBLogFilesResponseBodySwitchListItems = exports.DescribeDBLogFilesResponseBodySwitchListItemsSwitchStepItems = exports.DescribeDBLogFilesResponseBodySwitchListItemsSwitchLogItems = exports.DescribeDBLogFilesResponseBodySwitchListItemsSwitchLogItemsSwitchStepItems = exports.DescribeDBLogFilesResponseBodyHaLogItems = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeDBLogFilesResponseBodyHaLogItems extends $dara.Model {
    static names() {
        return {
            affectedSessions: 'AffectedSessions',
            fromDBType: 'FromDBType',
            switchCauseCode: 'SwitchCauseCode',
            switchCauseDetail: 'SwitchCauseDetail',
            switchFinishTime: 'SwitchFinishTime',
            switchId: 'SwitchId',
            switchStartTime: 'SwitchStartTime',
            switchType: 'SwitchType',
            totalSessions: 'TotalSessions',
        };
    }
    static types() {
        return {
            affectedSessions: 'number',
            fromDBType: 'string',
            switchCauseCode: 'string',
            switchCauseDetail: 'string',
            switchFinishTime: 'string',
            switchId: 'string',
            switchStartTime: 'string',
            switchType: 'number',
            totalSessions: 'number',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDBLogFilesResponseBodyHaLogItems = DescribeDBLogFilesResponseBodyHaLogItems;
class DescribeDBLogFilesResponseBodySwitchListItemsSwitchLogItemsSwitchStepItems extends $dara.Model {
    static names() {
        return {
            endTime: 'EndTime',
            isSuccess: 'IsSuccess',
            simulatePhase: 'SimulatePhase',
            startTime: 'StartTime',
            stepName: 'StepName',
            timeCost: 'TimeCost',
        };
    }
    static types() {
        return {
            endTime: 'string',
            isSuccess: 'string',
            simulatePhase: 'string',
            startTime: 'string',
            stepName: 'string',
            timeCost: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDBLogFilesResponseBodySwitchListItemsSwitchLogItemsSwitchStepItems = DescribeDBLogFilesResponseBodySwitchListItemsSwitchLogItemsSwitchStepItems;
class DescribeDBLogFilesResponseBodySwitchListItemsSwitchLogItems extends $dara.Model {
    static names() {
        return {
            DBInstanceId: 'DBInstanceId',
            dstDbType: 'DstDbType',
            eventFinishTime: 'EventFinishTime',
            eventStartTime: 'EventStartTime',
            simulateListId: 'SimulateListId',
            simulateLogId: 'SimulateLogId',
            simulateStatus: 'SimulateStatus',
            srcDbType: 'SrcDbType',
            switchStepItems: 'SwitchStepItems',
        };
    }
    static types() {
        return {
            DBInstanceId: 'string',
            dstDbType: 'string',
            eventFinishTime: 'string',
            eventStartTime: 'string',
            simulateListId: 'string',
            simulateLogId: 'string',
            simulateStatus: 'string',
            srcDbType: 'string',
            switchStepItems: { 'type': 'array', 'itemType': DescribeDBLogFilesResponseBodySwitchListItemsSwitchLogItemsSwitchStepItems },
        };
    }
    validate() {
        if (Array.isArray(this.switchStepItems)) {
            $dara.Model.validateArray(this.switchStepItems);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDBLogFilesResponseBodySwitchListItemsSwitchLogItems = DescribeDBLogFilesResponseBodySwitchListItemsSwitchLogItems;
class DescribeDBLogFilesResponseBodySwitchListItemsSwitchStepItems extends $dara.Model {
    static names() {
        return {
            DBNodeId: 'DBNodeId',
            endTime: 'EndTime',
            isSuccess: 'IsSuccess',
            simulatePhase: 'SimulatePhase',
            startTime: 'StartTime',
            stepName: 'StepName',
            timeCost: 'TimeCost',
        };
    }
    static types() {
        return {
            DBNodeId: 'string',
            endTime: 'string',
            isSuccess: 'string',
            simulatePhase: 'string',
            startTime: 'string',
            stepName: 'string',
            timeCost: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDBLogFilesResponseBodySwitchListItemsSwitchStepItems = DescribeDBLogFilesResponseBodySwitchListItemsSwitchStepItems;
class DescribeDBLogFilesResponseBodySwitchListItems extends $dara.Model {
    static names() {
        return {
            DBNodeCrashList: 'DBNodeCrashList',
            endTime: 'EndTime',
            eventFinishTime: 'EventFinishTime',
            eventStartTime: 'EventStartTime',
            faultInjectionType: 'FaultInjectionType',
            simulateListId: 'SimulateListId',
            simulateMode: 'SimulateMode',
            simulateStatus: 'SimulateStatus',
            simulateTaskId: 'SimulateTaskId',
            startTime: 'StartTime',
            switchLogItems: 'SwitchLogItems',
            switchStepItems: 'SwitchStepItems',
        };
    }
    static types() {
        return {
            DBNodeCrashList: { 'type': 'array', 'itemType': 'string' },
            endTime: 'string',
            eventFinishTime: 'string',
            eventStartTime: 'string',
            faultInjectionType: 'string',
            simulateListId: 'string',
            simulateMode: 'string',
            simulateStatus: 'string',
            simulateTaskId: 'string',
            startTime: 'string',
            switchLogItems: { 'type': 'array', 'itemType': DescribeDBLogFilesResponseBodySwitchListItemsSwitchLogItems },
            switchStepItems: { 'type': 'array', 'itemType': DescribeDBLogFilesResponseBodySwitchListItemsSwitchStepItems },
        };
    }
    validate() {
        if (Array.isArray(this.DBNodeCrashList)) {
            $dara.Model.validateArray(this.DBNodeCrashList);
        }
        if (Array.isArray(this.switchLogItems)) {
            $dara.Model.validateArray(this.switchLogItems);
        }
        if (Array.isArray(this.switchStepItems)) {
            $dara.Model.validateArray(this.switchStepItems);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDBLogFilesResponseBodySwitchListItems = DescribeDBLogFilesResponseBodySwitchListItems;
class DescribeDBLogFilesResponseBodySwitchLogItemsSwitchStepItems extends $dara.Model {
    static names() {
        return {
            DBNodeId: 'DBNodeId',
            endTime: 'EndTime',
            isSuccess: 'IsSuccess',
            simulatePhase: 'SimulatePhase',
            startTime: 'StartTime',
            stepMsg: 'StepMsg',
            stepName: 'StepName',
            timeCost: 'TimeCost',
        };
    }
    static types() {
        return {
            DBNodeId: 'string',
            endTime: 'string',
            isSuccess: 'string',
            simulatePhase: 'string',
            startTime: 'string',
            stepMsg: 'string',
            stepName: 'string',
            timeCost: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDBLogFilesResponseBodySwitchLogItemsSwitchStepItems = DescribeDBLogFilesResponseBodySwitchLogItemsSwitchStepItems;
class DescribeDBLogFilesResponseBodySwitchLogItems extends $dara.Model {
    static names() {
        return {
            DBInstanceId: 'DBInstanceId',
            dstDbType: 'DstDbType',
            eventFinishTime: 'EventFinishTime',
            eventStartTime: 'EventStartTime',
            simulateListId: 'SimulateListId',
            simulateStatus: 'SimulateStatus',
            simulatecode: 'Simulatecode',
            srcDbType: 'SrcDbType',
            switchStepItems: 'SwitchStepItems',
        };
    }
    static types() {
        return {
            DBInstanceId: 'string',
            dstDbType: 'string',
            eventFinishTime: 'string',
            eventStartTime: 'string',
            simulateListId: 'string',
            simulateStatus: 'string',
            simulatecode: 'string',
            srcDbType: 'string',
            switchStepItems: { 'type': 'array', 'itemType': DescribeDBLogFilesResponseBodySwitchLogItemsSwitchStepItems },
        };
    }
    validate() {
        if (Array.isArray(this.switchStepItems)) {
            $dara.Model.validateArray(this.switchStepItems);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDBLogFilesResponseBodySwitchLogItems = DescribeDBLogFilesResponseBodySwitchLogItems;
class DescribeDBLogFilesResponseBody extends $dara.Model {
    static names() {
        return {
            DBInstanceName: 'DBInstanceName',
            DBInstanceType: 'DBInstanceType',
            haLogItems: 'HaLogItems',
            haStatus: 'HaStatus',
            itemsNumbers: 'ItemsNumbers',
            pageNumber: 'PageNumber',
            pageSize: 'PageSize',
            requestId: 'RequestId',
            switchListItems: 'SwitchListItems',
            switchLogItems: 'SwitchLogItems',
            totalRecords: 'TotalRecords',
        };
    }
    static types() {
        return {
            DBInstanceName: 'string',
            DBInstanceType: 'string',
            haLogItems: { 'type': 'array', 'itemType': DescribeDBLogFilesResponseBodyHaLogItems },
            haStatus: 'number',
            itemsNumbers: 'number',
            pageNumber: 'number',
            pageSize: 'number',
            requestId: 'string',
            switchListItems: { 'type': 'array', 'itemType': DescribeDBLogFilesResponseBodySwitchListItems },
            switchLogItems: { 'type': 'array', 'itemType': DescribeDBLogFilesResponseBodySwitchLogItems },
            totalRecords: 'number',
        };
    }
    validate() {
        if (Array.isArray(this.haLogItems)) {
            $dara.Model.validateArray(this.haLogItems);
        }
        if (Array.isArray(this.switchListItems)) {
            $dara.Model.validateArray(this.switchListItems);
        }
        if (Array.isArray(this.switchLogItems)) {
            $dara.Model.validateArray(this.switchLogItems);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDBLogFilesResponseBody = DescribeDBLogFilesResponseBody;
//# sourceMappingURL=DescribeDblogFilesResponseBody.js.map