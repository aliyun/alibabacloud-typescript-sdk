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
exports.DescribeActiveOperationTaskResponseBody = exports.DescribeActiveOperationTaskResponseBodyItems = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeActiveOperationTaskResponseBodyItems extends $dara.Model {
    static names() {
        return {
            createdTime: 'CreatedTime',
            dbType: 'DbType',
            dbVersion: 'DbVersion',
            deadline: 'Deadline',
            id: 'Id',
            insName: 'InsName',
            modifiedTime: 'ModifiedTime',
            prepareInterval: 'PrepareInterval',
            region: 'Region',
            resultInfo: 'ResultInfo',
            startTime: 'StartTime',
            status: 'Status',
            switchTime: 'SwitchTime',
            taskParams: 'TaskParams',
            taskType: 'TaskType',
        };
    }
    static types() {
        return {
            createdTime: 'string',
            dbType: 'string',
            dbVersion: 'string',
            deadline: 'string',
            id: 'number',
            insName: 'string',
            modifiedTime: 'string',
            prepareInterval: 'string',
            region: 'string',
            resultInfo: 'string',
            startTime: 'string',
            status: 'number',
            switchTime: 'string',
            taskParams: 'string',
            taskType: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeActiveOperationTaskResponseBodyItems = DescribeActiveOperationTaskResponseBodyItems;
class DescribeActiveOperationTaskResponseBody extends $dara.Model {
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
            items: { 'type': 'array', 'itemType': DescribeActiveOperationTaskResponseBodyItems },
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
exports.DescribeActiveOperationTaskResponseBody = DescribeActiveOperationTaskResponseBody;
//# sourceMappingURL=DescribeActiveOperationTaskResponseBody.js.map