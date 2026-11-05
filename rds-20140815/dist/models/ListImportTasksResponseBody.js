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
exports.ListImportTasksResponseBody = exports.ListImportTasksResponseBodyItems = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class ListImportTasksResponseBodyItems extends $dara.Model {
    static names() {
        return {
            createdTime: 'CreatedTime',
            dbVersion: 'DbVersion',
            status: 'Status',
            targetInstanceName: 'TargetInstanceName',
            taskId: 'TaskId',
            taskName: 'TaskName',
            taskType: 'TaskType',
        };
    }
    static types() {
        return {
            createdTime: 'string',
            dbVersion: 'string',
            status: 'string',
            targetInstanceName: 'string',
            taskId: 'number',
            taskName: 'string',
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
exports.ListImportTasksResponseBodyItems = ListImportTasksResponseBodyItems;
class ListImportTasksResponseBody extends $dara.Model {
    static names() {
        return {
            items: 'Items',
            maxResults: 'MaxResults',
            nextToken: 'NextToken',
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            items: { 'type': 'array', 'itemType': ListImportTasksResponseBodyItems },
            maxResults: 'number',
            nextToken: 'string',
            requestId: 'string',
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
exports.ListImportTasksResponseBody = ListImportTasksResponseBody;
//# sourceMappingURL=ListImportTasksResponseBody.js.map