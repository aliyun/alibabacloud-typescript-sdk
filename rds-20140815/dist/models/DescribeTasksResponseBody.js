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
exports.DescribeTasksResponseBody = exports.DescribeTasksResponseBodyItems = exports.DescribeTasksResponseBodyItemsTaskProgressInfo = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeTasksResponseBodyItemsTaskProgressInfo extends $dara.Model {
    static names() {
        return {
            beginTime: 'BeginTime',
            currentStepName: 'CurrentStepName',
            DBName: 'DBName',
            expectedFinishTime: 'ExpectedFinishTime',
            finishTime: 'FinishTime',
            progress: 'Progress',
            progressInfo: 'ProgressInfo',
            remain: 'Remain',
            status: 'Status',
            stepProgressInfo: 'StepProgressInfo',
            stepsInfo: 'StepsInfo',
            taskAction: 'TaskAction',
            taskErrorCode: 'TaskErrorCode',
            taskErrorMessage: 'TaskErrorMessage',
            taskId: 'TaskId',
        };
    }
    static types() {
        return {
            beginTime: 'string',
            currentStepName: 'string',
            DBName: 'string',
            expectedFinishTime: 'string',
            finishTime: 'string',
            progress: 'string',
            progressInfo: 'string',
            remain: 'number',
            status: 'string',
            stepProgressInfo: 'string',
            stepsInfo: 'string',
            taskAction: 'string',
            taskErrorCode: 'string',
            taskErrorMessage: 'string',
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
exports.DescribeTasksResponseBodyItemsTaskProgressInfo = DescribeTasksResponseBodyItemsTaskProgressInfo;
class DescribeTasksResponseBodyItems extends $dara.Model {
    static names() {
        return {
            taskProgressInfo: 'TaskProgressInfo',
        };
    }
    static types() {
        return {
            taskProgressInfo: { 'type': 'array', 'itemType': DescribeTasksResponseBodyItemsTaskProgressInfo },
        };
    }
    validate() {
        if (Array.isArray(this.taskProgressInfo)) {
            $dara.Model.validateArray(this.taskProgressInfo);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeTasksResponseBodyItems = DescribeTasksResponseBodyItems;
class DescribeTasksResponseBody extends $dara.Model {
    static names() {
        return {
            items: 'Items',
            pageNumber: 'PageNumber',
            pageRecordCount: 'PageRecordCount',
            requestId: 'RequestId',
            totalRecordCount: 'TotalRecordCount',
        };
    }
    static types() {
        return {
            items: DescribeTasksResponseBodyItems,
            pageNumber: 'number',
            pageRecordCount: 'number',
            requestId: 'string',
            totalRecordCount: 'number',
        };
    }
    validate() {
        if (this.items && typeof this.items.validate === 'function') {
            this.items.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeTasksResponseBody = DescribeTasksResponseBody;
//# sourceMappingURL=DescribeTasksResponseBody.js.map