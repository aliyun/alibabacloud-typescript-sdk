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
exports.DescribeSQLLogFilesResponseBody = exports.DescribeSQLLogFilesResponseBodyItems = exports.DescribeSQLLogFilesResponseBodyItemsLogFile = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeSQLLogFilesResponseBodyItemsLogFile extends $dara.Model {
    static names() {
        return {
            fileID: 'FileID',
            logDownloadURL: 'LogDownloadURL',
            logEndTime: 'LogEndTime',
            logSize: 'LogSize',
            logStartTime: 'LogStartTime',
            logStatus: 'LogStatus',
        };
    }
    static types() {
        return {
            fileID: 'string',
            logDownloadURL: 'string',
            logEndTime: 'string',
            logSize: 'string',
            logStartTime: 'string',
            logStatus: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeSQLLogFilesResponseBodyItemsLogFile = DescribeSQLLogFilesResponseBodyItemsLogFile;
class DescribeSQLLogFilesResponseBodyItems extends $dara.Model {
    static names() {
        return {
            logFile: 'LogFile',
        };
    }
    static types() {
        return {
            logFile: { 'type': 'array', 'itemType': DescribeSQLLogFilesResponseBodyItemsLogFile },
        };
    }
    validate() {
        if (Array.isArray(this.logFile)) {
            $dara.Model.validateArray(this.logFile);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeSQLLogFilesResponseBodyItems = DescribeSQLLogFilesResponseBodyItems;
class DescribeSQLLogFilesResponseBody extends $dara.Model {
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
            items: DescribeSQLLogFilesResponseBodyItems,
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
exports.DescribeSQLLogFilesResponseBody = DescribeSQLLogFilesResponseBody;
//# sourceMappingURL=DescribeSqllogFilesResponseBody.js.map