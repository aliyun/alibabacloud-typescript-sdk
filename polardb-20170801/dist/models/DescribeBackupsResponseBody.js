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
exports.DescribeBackupsResponseBody = exports.DescribeBackupsResponseBodyItems = exports.DescribeBackupsResponseBodyItemsBackup = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeBackupsResponseBodyItemsBackup extends $dara.Model {
    static names() {
        return {
            backupEndTime: 'BackupEndTime',
            backupId: 'BackupId',
            backupMethod: 'BackupMethod',
            backupMode: 'BackupMode',
            backupSetSize: 'BackupSetSize',
            backupStartTime: 'BackupStartTime',
            backupStatus: 'BackupStatus',
            backupType: 'BackupType',
            backupsLevel: 'BackupsLevel',
            comment: 'Comment',
            consistentTime: 'ConsistentTime',
            DBClusterId: 'DBClusterId',
            expectExpireTime: 'ExpectExpireTime',
            expectExpireType: 'ExpectExpireType',
            isAvail: 'IsAvail',
            tableRestoreMetaStatus: 'TableRestoreMetaStatus',
        };
    }
    static types() {
        return {
            backupEndTime: 'string',
            backupId: 'string',
            backupMethod: 'string',
            backupMode: 'string',
            backupSetSize: 'string',
            backupStartTime: 'string',
            backupStatus: 'string',
            backupType: 'string',
            backupsLevel: 'string',
            comment: 'string',
            consistentTime: 'string',
            DBClusterId: 'string',
            expectExpireTime: 'string',
            expectExpireType: 'string',
            isAvail: 'string',
            tableRestoreMetaStatus: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeBackupsResponseBodyItemsBackup = DescribeBackupsResponseBodyItemsBackup;
class DescribeBackupsResponseBodyItems extends $dara.Model {
    static names() {
        return {
            backup: 'Backup',
        };
    }
    static types() {
        return {
            backup: { 'type': 'array', 'itemType': DescribeBackupsResponseBodyItemsBackup },
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
exports.DescribeBackupsResponseBodyItems = DescribeBackupsResponseBodyItems;
class DescribeBackupsResponseBody extends $dara.Model {
    static names() {
        return {
            items: 'Items',
            pageNumber: 'PageNumber',
            pageRecordCount: 'PageRecordCount',
            requestId: 'RequestId',
            totalLevel2BackupSize: 'TotalLevel2BackupSize',
            totalRecordCount: 'TotalRecordCount',
        };
    }
    static types() {
        return {
            items: DescribeBackupsResponseBodyItems,
            pageNumber: 'string',
            pageRecordCount: 'string',
            requestId: 'string',
            totalLevel2BackupSize: 'string',
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
exports.DescribeBackupsResponseBody = DescribeBackupsResponseBody;
//# sourceMappingURL=DescribeBackupsResponseBody.js.map