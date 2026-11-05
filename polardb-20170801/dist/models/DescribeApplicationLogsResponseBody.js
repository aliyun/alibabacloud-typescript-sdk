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
exports.DescribeApplicationLogsResponseBody = exports.DescribeApplicationLogsResponseBodyItems = exports.DescribeApplicationLogsResponseBodyItemsLogRecords = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeApplicationLogsResponseBodyItemsLogRecords extends $dara.Model {
    static names() {
        return {
            componentName: 'ComponentName',
            containerName: 'ContainerName',
            content: 'Content',
            date: 'Date',
            fileLine: 'FileLine',
            fileName: 'FileName',
            fullFilePath: 'FullFilePath',
            hostname: 'Hostname',
            insName: 'InsName',
            logLevelId: 'LogLevelId',
            logLevelName: 'LogLevelName',
            method: 'Method',
            name: 'Name',
            runtime: 'Runtime',
            runtimeVersion: 'RuntimeVersion',
            time: 'Time',
            timestamp: 'Timestamp',
        };
    }
    static types() {
        return {
            componentName: 'string',
            containerName: 'string',
            content: 'string',
            date: 'string',
            fileLine: 'string',
            fileName: 'string',
            fullFilePath: 'string',
            hostname: 'string',
            insName: 'string',
            logLevelId: 'number',
            logLevelName: 'string',
            method: 'string',
            name: 'string',
            runtime: 'string',
            runtimeVersion: 'string',
            time: 'string',
            timestamp: 'number',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeApplicationLogsResponseBodyItemsLogRecords = DescribeApplicationLogsResponseBodyItemsLogRecords;
class DescribeApplicationLogsResponseBodyItems extends $dara.Model {
    static names() {
        return {
            logRecords: 'LogRecords',
        };
    }
    static types() {
        return {
            logRecords: { 'type': 'array', 'itemType': DescribeApplicationLogsResponseBodyItemsLogRecords },
        };
    }
    validate() {
        if (Array.isArray(this.logRecords)) {
            $dara.Model.validateArray(this.logRecords);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeApplicationLogsResponseBodyItems = DescribeApplicationLogsResponseBodyItems;
class DescribeApplicationLogsResponseBody extends $dara.Model {
    static names() {
        return {
            applicationId: 'ApplicationId',
            items: 'Items',
            pageNumber: 'PageNumber',
            pageRecordCount: 'PageRecordCount',
            requestId: 'RequestId',
            totalRecordCount: 'TotalRecordCount',
        };
    }
    static types() {
        return {
            applicationId: 'string',
            items: DescribeApplicationLogsResponseBodyItems,
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
exports.DescribeApplicationLogsResponseBody = DescribeApplicationLogsResponseBody;
//# sourceMappingURL=DescribeApplicationLogsResponseBody.js.map