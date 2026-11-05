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
exports.DescribeTasksResponseBody = exports.DescribeTasksResponseBodyTasks = exports.DescribeTasksResponseBodyTasksTask = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeTasksResponseBodyTasksTask extends $dara.Model {
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
            progress: 'number',
            progressInfo: 'string',
            remain: 'number',
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
exports.DescribeTasksResponseBodyTasksTask = DescribeTasksResponseBodyTasksTask;
class DescribeTasksResponseBodyTasks extends $dara.Model {
    static names() {
        return {
            task: 'Task',
        };
    }
    static types() {
        return {
            task: { 'type': 'array', 'itemType': DescribeTasksResponseBodyTasksTask },
        };
    }
    validate() {
        if (Array.isArray(this.task)) {
            $dara.Model.validateArray(this.task);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeTasksResponseBodyTasks = DescribeTasksResponseBodyTasks;
class DescribeTasksResponseBody extends $dara.Model {
    static names() {
        return {
            DBClusterId: 'DBClusterId',
            endTime: 'EndTime',
            pageNumber: 'PageNumber',
            pageRecordCount: 'PageRecordCount',
            requestId: 'RequestId',
            startTime: 'StartTime',
            tasks: 'Tasks',
            totalRecordCount: 'TotalRecordCount',
        };
    }
    static types() {
        return {
            DBClusterId: 'string',
            endTime: 'string',
            pageNumber: 'number',
            pageRecordCount: 'number',
            requestId: 'string',
            startTime: 'string',
            tasks: DescribeTasksResponseBodyTasks,
            totalRecordCount: 'number',
        };
    }
    validate() {
        if (this.tasks && typeof this.tasks.validate === 'function') {
            this.tasks.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeTasksResponseBody = DescribeTasksResponseBody;
//# sourceMappingURL=DescribeTasksResponseBody.js.map