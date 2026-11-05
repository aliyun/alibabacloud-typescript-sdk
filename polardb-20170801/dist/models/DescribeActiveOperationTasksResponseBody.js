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
exports.DescribeActiveOperationTasksResponseBody = exports.DescribeActiveOperationTasksResponseBodyItems = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeActiveOperationTasksResponseBodyItems extends $dara.Model {
    static names() {
        return {
            allowCancel: 'AllowCancel',
            allowChange: 'AllowChange',
            changeLevel: 'ChangeLevel',
            changeLevelEn: 'ChangeLevelEn',
            changeLevelZh: 'ChangeLevelZh',
            createdTime: 'CreatedTime',
            currentAVZ: 'CurrentAVZ',
            DBClusterId: 'DBClusterId',
            DBNodeIds: 'DBNodeIds',
            DBType: 'DBType',
            DBVersion: 'DBVersion',
            deadline: 'Deadline',
            impact: 'Impact',
            impactEn: 'ImpactEn',
            impactZh: 'ImpactZh',
            insComment: 'InsComment',
            modifiedTime: 'ModifiedTime',
            prepareInterval: 'PrepareInterval',
            region: 'Region',
            resultInfo: 'ResultInfo',
            startTime: 'StartTime',
            status: 'Status',
            switchTime: 'SwitchTime',
            taskId: 'TaskId',
            taskParams: 'TaskParams',
            taskType: 'TaskType',
            taskTypeEn: 'TaskTypeEn',
            taskTypeZh: 'TaskTypeZh',
        };
    }
    static types() {
        return {
            allowCancel: 'number',
            allowChange: 'number',
            changeLevel: 'string',
            changeLevelEn: 'string',
            changeLevelZh: 'string',
            createdTime: 'string',
            currentAVZ: 'string',
            DBClusterId: 'string',
            DBNodeIds: { 'type': 'array', 'itemType': 'string' },
            DBType: 'string',
            DBVersion: 'string',
            deadline: 'string',
            impact: 'string',
            impactEn: 'string',
            impactZh: 'string',
            insComment: 'string',
            modifiedTime: 'string',
            prepareInterval: 'string',
            region: 'string',
            resultInfo: 'string',
            startTime: 'string',
            status: 'number',
            switchTime: 'string',
            taskId: 'number',
            taskParams: 'string',
            taskType: 'string',
            taskTypeEn: 'string',
            taskTypeZh: 'string',
        };
    }
    validate() {
        if (Array.isArray(this.DBNodeIds)) {
            $dara.Model.validateArray(this.DBNodeIds);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeActiveOperationTasksResponseBodyItems = DescribeActiveOperationTasksResponseBodyItems;
class DescribeActiveOperationTasksResponseBody extends $dara.Model {
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
            items: { 'type': 'array', 'itemType': DescribeActiveOperationTasksResponseBodyItems },
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
exports.DescribeActiveOperationTasksResponseBody = DescribeActiveOperationTasksResponseBody;
//# sourceMappingURL=DescribeActiveOperationTasksResponseBody.js.map