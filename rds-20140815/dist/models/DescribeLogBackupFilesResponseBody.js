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
exports.DescribeLogBackupFilesResponseBody = exports.DescribeLogBackupFilesResponseBodyItems = exports.DescribeLogBackupFilesResponseBodyItemsBinLogFile = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeLogBackupFilesResponseBodyItemsBinLogFile extends $dara.Model {
    static names() {
        return {
            downloadLink: 'DownloadLink',
            fileSize: 'FileSize',
            intranetDownloadLink: 'IntranetDownloadLink',
            linkExpiredTime: 'LinkExpiredTime',
            logBeginTime: 'LogBeginTime',
            logEndTime: 'LogEndTime',
        };
    }
    static types() {
        return {
            downloadLink: 'string',
            fileSize: 'number',
            intranetDownloadLink: 'string',
            linkExpiredTime: 'string',
            logBeginTime: 'string',
            logEndTime: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeLogBackupFilesResponseBodyItemsBinLogFile = DescribeLogBackupFilesResponseBodyItemsBinLogFile;
class DescribeLogBackupFilesResponseBodyItems extends $dara.Model {
    static names() {
        return {
            binLogFile: 'BinLogFile',
        };
    }
    static types() {
        return {
            binLogFile: { 'type': 'array', 'itemType': DescribeLogBackupFilesResponseBodyItemsBinLogFile },
        };
    }
    validate() {
        if (Array.isArray(this.binLogFile)) {
            $dara.Model.validateArray(this.binLogFile);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeLogBackupFilesResponseBodyItems = DescribeLogBackupFilesResponseBodyItems;
class DescribeLogBackupFilesResponseBody extends $dara.Model {
    static names() {
        return {
            items: 'Items',
            pageNumber: 'PageNumber',
            pageRecordCount: 'PageRecordCount',
            requestId: 'RequestId',
            totalFileSize: 'TotalFileSize',
            totalRecordCount: 'TotalRecordCount',
        };
    }
    static types() {
        return {
            items: DescribeLogBackupFilesResponseBodyItems,
            pageNumber: 'number',
            pageRecordCount: 'number',
            requestId: 'string',
            totalFileSize: 'number',
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
exports.DescribeLogBackupFilesResponseBody = DescribeLogBackupFilesResponseBody;
//# sourceMappingURL=DescribeLogBackupFilesResponseBody.js.map