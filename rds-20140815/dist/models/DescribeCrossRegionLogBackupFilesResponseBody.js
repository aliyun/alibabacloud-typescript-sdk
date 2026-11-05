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
exports.DescribeCrossRegionLogBackupFilesResponseBody = exports.DescribeCrossRegionLogBackupFilesResponseBodyItems = exports.DescribeCrossRegionLogBackupFilesResponseBodyItemsItem = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeCrossRegionLogBackupFilesResponseBodyItemsItem extends $dara.Model {
    static names() {
        return {
            crossBackupRegion: 'CrossBackupRegion',
            crossDownloadLink: 'CrossDownloadLink',
            crossIntranetDownloadLink: 'CrossIntranetDownloadLink',
            crossLogBackupId: 'CrossLogBackupId',
            crossLogBackupSize: 'CrossLogBackupSize',
            instanceId: 'InstanceId',
            linkExpiredTime: 'LinkExpiredTime',
            logBeginTime: 'LogBeginTime',
            logEndTime: 'LogEndTime',
            logFileName: 'LogFileName',
        };
    }
    static types() {
        return {
            crossBackupRegion: 'string',
            crossDownloadLink: 'string',
            crossIntranetDownloadLink: 'string',
            crossLogBackupId: 'number',
            crossLogBackupSize: 'number',
            instanceId: 'number',
            linkExpiredTime: 'string',
            logBeginTime: 'string',
            logEndTime: 'string',
            logFileName: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeCrossRegionLogBackupFilesResponseBodyItemsItem = DescribeCrossRegionLogBackupFilesResponseBodyItemsItem;
class DescribeCrossRegionLogBackupFilesResponseBodyItems extends $dara.Model {
    static names() {
        return {
            item: 'Item',
        };
    }
    static types() {
        return {
            item: { 'type': 'array', 'itemType': DescribeCrossRegionLogBackupFilesResponseBodyItemsItem },
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
exports.DescribeCrossRegionLogBackupFilesResponseBodyItems = DescribeCrossRegionLogBackupFilesResponseBodyItems;
class DescribeCrossRegionLogBackupFilesResponseBody extends $dara.Model {
    static names() {
        return {
            DBInstanceId: 'DBInstanceId',
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
            DBInstanceId: 'string',
            endTime: 'string',
            items: DescribeCrossRegionLogBackupFilesResponseBodyItems,
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
exports.DescribeCrossRegionLogBackupFilesResponseBody = DescribeCrossRegionLogBackupFilesResponseBody;
//# sourceMappingURL=DescribeCrossRegionLogBackupFilesResponseBody.js.map