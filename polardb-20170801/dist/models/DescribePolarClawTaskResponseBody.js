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
exports.DescribePolarClawTaskResponseBody = exports.DescribePolarClawTaskResponseBodyTask = exports.DescribePolarClawTaskResponseBodyTaskError = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribePolarClawTaskResponseBodyTaskError extends $dara.Model {
    static names() {
        return {
            code: 'Code',
            message: 'Message',
        };
    }
    static types() {
        return {
            code: 'string',
            message: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribePolarClawTaskResponseBodyTaskError = DescribePolarClawTaskResponseBodyTaskError;
class DescribePolarClawTaskResponseBodyTask extends $dara.Model {
    static names() {
        return {
            createdAtMs: 'CreatedAtMs',
            error: 'Error',
            operation: 'Operation',
            result: 'Result',
            state: 'State',
            taskId: 'TaskId',
            updatedAtMs: 'UpdatedAtMs',
        };
    }
    static types() {
        return {
            createdAtMs: 'number',
            error: DescribePolarClawTaskResponseBodyTaskError,
            operation: 'string',
            result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
            state: 'string',
            taskId: 'string',
            updatedAtMs: 'number',
        };
    }
    validate() {
        if (this.error && typeof this.error.validate === 'function') {
            this.error.validate();
        }
        if (this.result) {
            $dara.Model.validateMap(this.result);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribePolarClawTaskResponseBodyTask = DescribePolarClawTaskResponseBodyTask;
class DescribePolarClawTaskResponseBody extends $dara.Model {
    static names() {
        return {
            applicationId: 'ApplicationId',
            code: 'Code',
            message: 'Message',
            requestId: 'RequestId',
            task: 'Task',
        };
    }
    static types() {
        return {
            applicationId: 'string',
            code: 'number',
            message: 'string',
            requestId: 'string',
            task: DescribePolarClawTaskResponseBodyTask,
        };
    }
    validate() {
        if (this.task && typeof this.task.validate === 'function') {
            this.task.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribePolarClawTaskResponseBody = DescribePolarClawTaskResponseBody;
//# sourceMappingURL=DescribePolarClawTaskResponseBody.js.map