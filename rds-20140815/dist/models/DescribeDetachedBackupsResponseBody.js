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
exports.DescribeDetachedBackupsResponseBody = exports.DescribeDetachedBackupsResponseBodyItems = exports.DescribeDetachedBackupsResponseBodyItemsBackup = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeDetachedBackupsResponseBodyItemsBackup extends $dara.Model {
    static names() {
        return {
            backupDownloadURL: 'BackupDownloadURL',
            backupEndTime: 'BackupEndTime',
            backupId: 'BackupId',
            backupIntranetDownloadURL: 'BackupIntranetDownloadURL',
            backupMethod: 'BackupMethod',
            backupMode: 'BackupMode',
            backupSize: 'BackupSize',
            backupStartTime: 'BackupStartTime',
            backupStatus: 'BackupStatus',
            backupType: 'BackupType',
            consistentTime: 'ConsistentTime',
            DBInstanceComment: 'DBInstanceComment',
            DBInstanceId: 'DBInstanceId',
            hostInstanceID: 'HostInstanceID',
            isAvail: 'IsAvail',
            metaStatus: 'MetaStatus',
            storeStatus: 'StoreStatus',
        };
    }
    static types() {
        return {
            backupDownloadURL: 'string',
            backupEndTime: 'string',
            backupId: 'string',
            backupIntranetDownloadURL: 'string',
            backupMethod: 'string',
            backupMode: 'string',
            backupSize: 'number',
            backupStartTime: 'string',
            backupStatus: 'string',
            backupType: 'string',
            consistentTime: 'number',
            DBInstanceComment: 'string',
            DBInstanceId: 'string',
            hostInstanceID: 'string',
            isAvail: 'number',
            metaStatus: 'string',
            storeStatus: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDetachedBackupsResponseBodyItemsBackup = DescribeDetachedBackupsResponseBodyItemsBackup;
class DescribeDetachedBackupsResponseBodyItems extends $dara.Model {
    static names() {
        return {
            backup: 'Backup',
        };
    }
    static types() {
        return {
            backup: { 'type': 'array', 'itemType': DescribeDetachedBackupsResponseBodyItemsBackup },
        };
    }
    validate() {
        if (Array.isArray(this.backup)) {
            $dara.Model.validateArray(this.backup);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDetachedBackupsResponseBodyItems = DescribeDetachedBackupsResponseBodyItems;
class DescribeDetachedBackupsResponseBody extends $dara.Model {
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
            items: DescribeDetachedBackupsResponseBodyItems,
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
exports.DescribeDetachedBackupsResponseBody = DescribeDetachedBackupsResponseBody;
//# sourceMappingURL=DescribeDetachedBackupsResponseBody.js.map