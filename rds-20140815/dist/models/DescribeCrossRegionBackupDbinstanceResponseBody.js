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
exports.DescribeCrossRegionBackupDBInstanceResponseBody = exports.DescribeCrossRegionBackupDBInstanceResponseBodyItems = exports.DescribeCrossRegionBackupDBInstanceResponseBodyItemsItem = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeCrossRegionBackupDBInstanceResponseBodyItemsItem extends $dara.Model {
    static names() {
        return {
            backupEnabled: 'BackupEnabled',
            backupEnabledTime: 'BackupEnabledTime',
            crossBackupRegion: 'CrossBackupRegion',
            crossBackupType: 'CrossBackupType',
            DBInstanceDescription: 'DBInstanceDescription',
            DBInstanceId: 'DBInstanceId',
            DBInstanceStatus: 'DBInstanceStatus',
            engine: 'Engine',
            engineVersion: 'EngineVersion',
            lockMode: 'LockMode',
            logBackupEnabled: 'LogBackupEnabled',
            logBackupEnabledTime: 'LogBackupEnabledTime',
            retentType: 'RetentType',
            retention: 'Retention',
        };
    }
    static types() {
        return {
            backupEnabled: 'string',
            backupEnabledTime: 'string',
            crossBackupRegion: 'string',
            crossBackupType: 'string',
            DBInstanceDescription: 'string',
            DBInstanceId: 'string',
            DBInstanceStatus: 'string',
            engine: 'string',
            engineVersion: 'string',
            lockMode: 'string',
            logBackupEnabled: 'string',
            logBackupEnabledTime: 'string',
            retentType: 'number',
            retention: 'number',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeCrossRegionBackupDBInstanceResponseBodyItemsItem = DescribeCrossRegionBackupDBInstanceResponseBodyItemsItem;
class DescribeCrossRegionBackupDBInstanceResponseBodyItems extends $dara.Model {
    static names() {
        return {
            item: 'Item',
        };
    }
    static types() {
        return {
            item: { 'type': 'array', 'itemType': DescribeCrossRegionBackupDBInstanceResponseBodyItemsItem },
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
exports.DescribeCrossRegionBackupDBInstanceResponseBodyItems = DescribeCrossRegionBackupDBInstanceResponseBodyItems;
class DescribeCrossRegionBackupDBInstanceResponseBody extends $dara.Model {
    static names() {
        return {
            items: 'Items',
            itemsNumbers: 'ItemsNumbers',
            pageNumber: 'PageNumber',
            pageSize: 'PageSize',
            regionId: 'RegionId',
            requestId: 'RequestId',
            totalRecords: 'TotalRecords',
        };
    }
    static types() {
        return {
            items: DescribeCrossRegionBackupDBInstanceResponseBodyItems,
            itemsNumbers: 'number',
            pageNumber: 'number',
            pageSize: 'number',
            regionId: 'string',
            requestId: 'string',
            totalRecords: 'number',
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
exports.DescribeCrossRegionBackupDBInstanceResponseBody = DescribeCrossRegionBackupDBInstanceResponseBody;
//# sourceMappingURL=DescribeCrossRegionBackupDbinstanceResponseBody.js.map