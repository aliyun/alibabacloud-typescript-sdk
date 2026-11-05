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
exports.DescribeSharedBackupsResponseBody = exports.DescribeSharedBackupsResponseBodyItems = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeSharedBackupsResponseBodyItems extends $dara.Model {
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
            consistentTime: 'ConsistentTime',
            DBClusterId: 'DBClusterId',
            DBType: 'DBType',
            DBVersion: 'DBVersion',
            payType: 'PayType',
            regionId: 'RegionId',
            serverlessType: 'ServerlessType',
            shareType: 'ShareType',
            sharerUID: 'SharerUID',
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
            consistentTime: 'string',
            DBClusterId: 'string',
            DBType: 'string',
            DBVersion: 'string',
            payType: 'string',
            regionId: 'string',
            serverlessType: 'string',
            shareType: 'string',
            sharerUID: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeSharedBackupsResponseBodyItems = DescribeSharedBackupsResponseBodyItems;
class DescribeSharedBackupsResponseBody extends $dara.Model {
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
            items: { 'type': 'array', 'itemType': DescribeSharedBackupsResponseBodyItems },
            pageNumber: 'string',
            pageRecordCount: 'string',
            requestId: 'string',
            totalRecordCount: 'string',
        };
    }
    validate() {
        if (Array.isArray(this.items)) {
            $dara.Model.validateArray(this.items);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeSharedBackupsResponseBody = DescribeSharedBackupsResponseBody;
//# sourceMappingURL=DescribeSharedBackupsResponseBody.js.map