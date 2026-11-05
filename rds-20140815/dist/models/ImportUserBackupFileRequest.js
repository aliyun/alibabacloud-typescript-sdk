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
exports.ImportUserBackupFileRequest = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class ImportUserBackupFileRequest extends $dara.Model {
    static names() {
        return {
            backupFile: 'BackupFile',
            bucketRegion: 'BucketRegion',
            buildReplication: 'BuildReplication',
            comment: 'Comment',
            DBInstanceId: 'DBInstanceId',
            engineVersion: 'EngineVersion',
            masterInfo: 'MasterInfo',
            mode: 'Mode',
            ownerId: 'OwnerId',
            regionId: 'RegionId',
            resourceGroupId: 'ResourceGroupId',
            resourceOwnerAccount: 'ResourceOwnerAccount',
            resourceOwnerId: 'ResourceOwnerId',
            restoreSize: 'RestoreSize',
            retention: 'Retention',
            sourceInfo: 'SourceInfo',
            zoneId: 'ZoneId',
        };
    }
    static types() {
        return {
            backupFile: 'string',
            bucketRegion: 'string',
            buildReplication: 'boolean',
            comment: 'string',
            DBInstanceId: 'string',
            engineVersion: 'string',
            masterInfo: 'string',
            mode: 'string',
            ownerId: 'number',
            regionId: 'string',
            resourceGroupId: 'string',
            resourceOwnerAccount: 'string',
            resourceOwnerId: 'number',
            restoreSize: 'number',
            retention: 'number',
            sourceInfo: 'string',
            zoneId: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ImportUserBackupFileRequest = ImportUserBackupFileRequest;
//# sourceMappingURL=ImportUserBackupFileRequest.js.map