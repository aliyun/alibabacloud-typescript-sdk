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
exports.DescribeBackupsResponseBody = exports.DescribeBackupsResponseBodyItems = exports.DescribeBackupsResponseBodyItemsBackup = exports.DescribeBackupsResponseBodyItemsBackupBackupDownloadLinkByDB = exports.DescribeBackupsResponseBodyItemsBackupBackupDownloadLinkByDBBackupDownloadLinkByDB = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeBackupsResponseBodyItemsBackupBackupDownloadLinkByDBBackupDownloadLinkByDB extends $dara.Model {
    static names() {
        return {
            dataBase: 'DataBase',
            downloadLink: 'DownloadLink',
            intranetDownloadLink: 'IntranetDownloadLink',
        };
    }
    static types() {
        return {
            dataBase: 'string',
            downloadLink: 'string',
            intranetDownloadLink: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeBackupsResponseBodyItemsBackupBackupDownloadLinkByDBBackupDownloadLinkByDB = DescribeBackupsResponseBodyItemsBackupBackupDownloadLinkByDBBackupDownloadLinkByDB;
class DescribeBackupsResponseBodyItemsBackupBackupDownloadLinkByDB extends $dara.Model {
    static names() {
        return {
            backupDownloadLinkByDB: 'BackupDownloadLinkByDB',
        };
    }
    static types() {
        return {
            backupDownloadLinkByDB: { 'type': 'array', 'itemType': DescribeBackupsResponseBodyItemsBackupBackupDownloadLinkByDBBackupDownloadLinkByDB },
        };
    }
    validate() {
        if (Array.isArray(this.backupDownloadLinkByDB)) {
            $dara.Model.validateArray(this.backupDownloadLinkByDB);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeBackupsResponseBodyItemsBackupBackupDownloadLinkByDB = DescribeBackupsResponseBodyItemsBackupBackupDownloadLinkByDB;
class DescribeBackupsResponseBodyItemsBackup extends $dara.Model {
    static names() {
        return {
            backupDownloadLinkByDB: 'BackupDownloadLinkByDB',
            backupDownloadURL: 'BackupDownloadURL',
            backupEndTime: 'BackupEndTime',
            backupId: 'BackupId',
            backupInitiator: 'BackupInitiator',
            backupIntranetDownloadURL: 'BackupIntranetDownloadURL',
            backupMethod: 'BackupMethod',
            backupMode: 'BackupMode',
            backupSize: 'BackupSize',
            backupStartTime: 'BackupStartTime',
            backupStatus: 'BackupStatus',
            backupType: 'BackupType',
            checksum: 'Checksum',
            consistentTime: 'ConsistentTime',
            copyOnlyBackup: 'CopyOnlyBackup',
            DBInstanceId: 'DBInstanceId',
            encryption: 'Encryption',
            engine: 'Engine',
            engineVersion: 'EngineVersion',
            expectExpireTime: 'ExpectExpireTime',
            hostInstanceID: 'HostInstanceID',
            isAvail: 'IsAvail',
            metaStatus: 'MetaStatus',
            storageClass: 'StorageClass',
            storeStatus: 'StoreStatus',
        };
    }
    static types() {
        return {
            backupDownloadLinkByDB: DescribeBackupsResponseBodyItemsBackupBackupDownloadLinkByDB,
            backupDownloadURL: 'string',
            backupEndTime: 'string',
            backupId: 'string',
            backupInitiator: 'string',
            backupIntranetDownloadURL: 'string',
            backupMethod: 'string',
            backupMode: 'string',
            backupSize: 'number',
            backupStartTime: 'string',
            backupStatus: 'string',
            backupType: 'string',
            checksum: 'string',
            consistentTime: 'number',
            copyOnlyBackup: 'string',
            DBInstanceId: 'string',
            encryption: 'string',
            engine: 'string',
            engineVersion: 'string',
            expectExpireTime: 'string',
            hostInstanceID: 'string',
            isAvail: 'number',
            metaStatus: 'string',
            storageClass: 'string',
            storeStatus: 'string',
        };
    }
    validate() {
        if (this.backupDownloadLinkByDB && typeof this.backupDownloadLinkByDB.validate === 'function') {
            this.backupDownloadLinkByDB.validate();
        }
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
            totalEcsSnapshotSize: 'TotalEcsSnapshotSize',
            totalRecordCount: 'TotalRecordCount',
        };
    }
    static types() {
        return {
            items: DescribeBackupsResponseBodyItems,
            pageNumber: 'string',
            pageRecordCount: 'string',
            requestId: 'string',
            totalEcsSnapshotSize: 'number',
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