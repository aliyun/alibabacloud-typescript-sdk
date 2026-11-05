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
exports.DescribeBatchTaskResponseBody = exports.DescribeBatchTaskResponseBodySubTasks = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeBatchTaskResponseBodySubTasks extends $dara.Model {
    static names() {
        return {
            errorMsg: 'ErrorMsg',
            instanceId: 'InstanceId',
            status: 'Status',
            taskBegin: 'TaskBegin',
            taskEnd: 'TaskEnd',
            taskId: 'TaskId',
        };
    }
    static types() {
        return {
            errorMsg: 'string',
            instanceId: 'string',
            status: 'string',
            taskBegin: 'string',
            taskEnd: 'string',
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
exports.DescribeBatchTaskResponseBodySubTasks = DescribeBatchTaskResponseBodySubTasks;
class DescribeBatchTaskResponseBody extends $dara.Model {
    static names() {
        return {
            applicationType: 'ApplicationType',
            batchId: 'BatchId',
            requestId: 'RequestId',
            status: 'Status',
            subTasks: 'SubTasks',
            successCount: 'SuccessCount',
            taskBegin: 'TaskBegin',
            taskEnd: 'TaskEnd',
            taskName: 'TaskName',
            taskType: 'TaskType',
            totalCount: 'TotalCount',
        };
    }
    static types() {
        return {
            applicationType: 'string',
            batchId: 'string',
            requestId: 'string',
            status: 'string',
            subTasks: { 'type': 'array', 'itemType': DescribeBatchTaskResponseBodySubTasks },
            successCount: 'number',
            taskBegin: 'string',
            taskEnd: 'string',
            taskName: 'string',
            taskType: 'string',
            totalCount: 'number',
        };
    }
    validate() {
        if (Array.isArray(this.subTasks)) {
            $dara.Model.validateArray(this.subTasks);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeBatchTaskResponseBody = DescribeBatchTaskResponseBody;
//# sourceMappingURL=DescribeBatchTaskResponseBody.js.map