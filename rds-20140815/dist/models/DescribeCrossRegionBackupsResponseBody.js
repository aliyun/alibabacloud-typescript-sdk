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
exports.DescribeCrossRegionBackupsResponseBody = exports.DescribeCrossRegionBackupsResponseBodyItems = exports.DescribeCrossRegionBackupsResponseBodyItemsItem = exports.DescribeCrossRegionBackupsResponseBodyItemsItemRestoreRegions = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeCrossRegionBackupsResponseBodyItemsItemRestoreRegions extends $dara.Model {
    static names() {
        return {
            restoreRegion: 'RestoreRegion',
        };
    }
    static types() {
        return {
            restoreRegion: { 'type': 'array', 'itemType': 'string' },
        };
    }
    validate() {
        if (Array.isArray(this.restoreRegion)) {
            $dara.Model.validateArray(this.restoreRegion);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeCrossRegionBackupsResponseBodyItemsItemRestoreRegions = DescribeCrossRegionBackupsResponseBodyItemsItemRestoreRegions;
class DescribeCrossRegionBackupsResponseBodyItemsItem extends $dara.Model {
    static names() {
        return {
            backupEndTime: 'BackupEndTime',
            backupMethod: 'BackupMethod',
            backupSetScale: 'BackupSetScale',
            backupSetStatus: 'BackupSetStatus',
            backupStartTime: 'BackupStartTime',
            backupType: 'BackupType',
            category: 'Category',
            consistentTime: 'ConsistentTime',
            crossBackupDownloadLink: 'CrossBackupDownloadLink',
            crossBackupId: 'CrossBackupId',
            crossBackupRegion: 'CrossBackupRegion',
            crossBackupSetFile: 'CrossBackupSetFile',
            crossBackupSetLocation: 'CrossBackupSetLocation',
            crossBackupSetSize: 'CrossBackupSetSize',
            DBInstanceStorageType: 'DBInstanceStorageType',
            engine: 'Engine',
            engineVersion: 'EngineVersion',
            instanceId: 'InstanceId',
            restoreRegions: 'RestoreRegions',
        };
    }
    static types() {
        return {
            backupEndTime: 'string',
            backupMethod: 'string',
            backupSetScale: 'number',
            backupSetStatus: 'number',
            backupStartTime: 'string',
            backupType: 'string',
            category: 'string',
            consistentTime: 'string',
            crossBackupDownloadLink: 'string',
            crossBackupId: 'number',
            crossBackupRegion: 'string',
            crossBackupSetFile: 'string',
            crossBackupSetLocation: 'string',
            crossBackupSetSize: 'number',
            DBInstanceStorageType: 'string',
            engine: 'string',
            engineVersion: 'string',
            instanceId: 'number',
            restoreRegions: DescribeCrossRegionBackupsResponseBodyItemsItemRestoreRegions,
        };
    }
    validate() {
        if (this.restoreRegions && typeof this.restoreRegions.validate === 'function') {
            this.restoreRegions.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeCrossRegionBackupsResponseBodyItemsItem = DescribeCrossRegionBackupsResponseBodyItemsItem;
class DescribeCrossRegionBackupsResponseBodyItems extends $dara.Model {
    static names() {
        return {
            item: 'Item',
        };
    }
    static types() {
        return {
            item: { 'type': 'array', 'itemType': DescribeCrossRegionBackupsResponseBodyItemsItem },
        };
    }
    validate() {
        if (Array.isArray(this.item)) {
            $dara.Model.validateArray(this.item);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeCrossRegionBackupsResponseBodyItems = DescribeCrossRegionBackupsResponseBodyItems;
class DescribeCrossRegionBackupsResponseBody extends $dara.Model {
    static names() {
        return {
            endTime: 'EndTime',
            items: 'Items',
            pageNumber: 'PageNumber',
            pageRecordCount: 'PageRecordCount',
            regionId: 'RegionId',
            requestId: 'RequestId',
            startTime: 'StartTime',
            totalRecordCount: 'TotalRecordCount',
        };
    }
    static types() {
        return {
            endTime: 'string',
            items: DescribeCrossRegionBackupsResponseBodyItems,
            pageNumber: 'number',
            pageRecordCount: 'number',
            regionId: 'string',
            requestId: 'string',
            startTime: 'string',
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
exports.DescribeCrossRegionBackupsResponseBody = DescribeCrossRegionBackupsResponseBody;
//# sourceMappingURL=DescribeCrossRegionBackupsResponseBody.js.map