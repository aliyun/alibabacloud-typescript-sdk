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
exports.GetCreateLogoTaskResponseBody = exports.GetCreateLogoTaskResponseBodyTask = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class GetCreateLogoTaskResponseBodyTask extends $dara.Model {
    static names() {
        return {
            taskId: 'TaskId',
            taskStatus: 'TaskStatus',
            urls: 'Urls',
        };
    }
    static types() {
        return {
            taskId: 'string',
            taskStatus: 'string',
            urls: { 'type': 'array', 'itemType': 'string' },
        };
    }
    validate() {
        if (Array.isArray(this.urls)) {
            $dara.Model.validateArray(this.urls);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.GetCreateLogoTaskResponseBodyTask = GetCreateLogoTaskResponseBodyTask;
class GetCreateLogoTaskResponseBody extends $dara.Model {
    static names() {
        return {
            errorCode: 'ErrorCode',
            errorMsg: 'ErrorMsg',
            requestId: 'RequestId',
            success: 'Success',
            task: 'Task',
        };
    }
    static types() {
        return {
            errorCode: 'string',
            errorMsg: 'string',
            requestId: 'string',
            success: 'boolean',
            task: GetCreateLogoTaskResponseBodyTask,
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
exports.GetCreateLogoTaskResponseBody = GetCreateLogoTaskResponseBody;
//# sourceMappingURL=GetCreateLogoTaskResponseBody.js.map