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
exports.DescribeBackupLogsResponseBody = exports.DescribeBackupLogsResponseBodyItems = exports.DescribeBackupLogsResponseBodyItemsBackupLog = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeBackupLogsResponseBodyItemsBackupLog extends $dara.Model {
    static names() {
        return {
            backupLogEndTime: 'BackupLogEndTime',
            backupLogId: 'BackupLogId',
            backupLogName: 'BackupLogName',
            backupLogSize: 'BackupLogSize',
            backupLogStartTime: 'BackupLogStartTime',
            downloadLink: 'DownloadLink',
            intranetDownloadLink: 'IntranetDownloadLink',
            linkExpiredTime: 'LinkExpiredTime',
        };
    }
    static types() {
        return {
            backupLogEndTime: 'string',
            backupLogId: 'string',
            backupLogName: 'string',
            backupLogSize: 'string',
            backupLogStartTime: 'string',
            downloadLink: 'string',
            intranetDownloadLink: 'string',
            linkExpiredTime: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeBackupLogsResponseBodyItemsBackupLog = DescribeBackupLogsResponseBodyItemsBackupLog;
class DescribeBackupLogsResponseBodyItems extends $dara.Model {
    static names() {
        return {
            backupLog: 'BackupLog',
        };
    }
    static types() {
        return {
            backupLog: { 'type': 'array', 'itemType': DescribeBackupLogsResponseBodyItemsBackupLog },
        };
    }
    validate() {
        if (Array.isArray(this.backupLog)) {
            $dara.Model.validateArray(this.backupLog);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeBackupLogsResponseBodyItems = DescribeBackupLogsResponseBodyItems;
class DescribeBackupLogsResponseBody extends $dara.Model {
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
            items: DescribeBackupLogsResponseBodyItems,
            pageNumber: 'string',
            pageRecordCount: 'string',
            requestId: 'string',
            totalRecordCount: 'string',
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
exports.DescribeBackupLogsResponseBody = DescribeBackupLogsResponseBody;
//# sourceMappingURL=DescribeBackupLogsResponseBody.js.map