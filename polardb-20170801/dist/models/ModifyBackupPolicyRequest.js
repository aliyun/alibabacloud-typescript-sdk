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
exports.ModifyBackupPolicyRequest = exports.ModifyBackupPolicyRequestAdvancedDataPolicies = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class ModifyBackupPolicyRequestAdvancedDataPolicies extends $dara.Model {
    static names() {
        return {
            actionType: 'ActionType',
            autoCreated: 'AutoCreated',
            bakType: 'BakType',
            destRegion: 'DestRegion',
            destType: 'DestType',
            dumpAction: 'DumpAction',
            filterKey: 'FilterKey',
            filterType: 'FilterType',
            filterValue: 'FilterValue',
            onlyPreserveOneEachDay: 'OnlyPreserveOneEachDay',
            onlyPreserveOneEachHour: 'OnlyPreserveOneEachHour',
            policyId: 'PolicyId',
            retentionType: 'RetentionType',
            retentionValue: 'RetentionValue',
            srcRegion: 'SrcRegion',
            srcType: 'SrcType',
            storageClass: 'StorageClass',
        };
    }
    static types() {
        return {
            actionType: 'string',
            autoCreated: 'boolean',
            bakType: 'string',
            destRegion: 'string',
            destType: 'string',
            dumpAction: 'string',
            filterKey: 'string',
            filterType: 'string',
            filterValue: 'string',
            onlyPreserveOneEachDay: 'boolean',
            onlyPreserveOneEachHour: 'boolean',
            policyId: 'string',
            retentionType: 'string',
            retentionValue: 'string',
            srcRegion: 'string',
            srcType: 'string',
            storageClass: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ModifyBackupPolicyRequestAdvancedDataPolicies = ModifyBackupPolicyRequestAdvancedDataPolicies;
class ModifyBackupPolicyRequest extends $dara.Model {
    static names() {
        return {
            advancedDataPolicies: 'AdvancedDataPolicies',
            backupFrequency: 'BackupFrequency',
            backupPolicyLevel: 'BackupPolicyLevel',
            backupRetentionPolicyOnClusterDeletion: 'BackupRetentionPolicyOnClusterDeletion',
            DBClusterId: 'DBClusterId',
            dataLevel1BackupFrequency: 'DataLevel1BackupFrequency',
            dataLevel1BackupPeriod: 'DataLevel1BackupPeriod',
            dataLevel1BackupRetentionPeriod: 'DataLevel1BackupRetentionPeriod',
            dataLevel1BackupTime: 'DataLevel1BackupTime',
            dataLevel2BackupAnotherRegionRegion: 'DataLevel2BackupAnotherRegionRegion',
            dataLevel2BackupAnotherRegionRetentionPeriod: 'DataLevel2BackupAnotherRegionRetentionPeriod',
            dataLevel2BackupPeriod: 'DataLevel2BackupPeriod',
            dataLevel2BackupRetentionPeriod: 'DataLevel2BackupRetentionPeriod',
            ownerAccount: 'OwnerAccount',
            ownerId: 'OwnerId',
            preferredBackupPeriod: 'PreferredBackupPeriod',
            preferredBackupTime: 'PreferredBackupTime',
            resourceOwnerAccount: 'ResourceOwnerAccount',
            resourceOwnerId: 'ResourceOwnerId',
        };
    }
    static types() {
        return {
            advancedDataPolicies: { 'type': 'array', 'itemType': ModifyBackupPolicyRequestAdvancedDataPolicies },
            backupFrequency: 'string',
            backupPolicyLevel: 'string',
            backupRetentionPolicyOnClusterDeletion: 'string',
            DBClusterId: 'string',
            dataLevel1BackupFrequency: 'string',
            dataLevel1BackupPeriod: 'string',
            dataLevel1BackupRetentionPeriod: 'string',
            dataLevel1BackupTime: 'string',
            dataLevel2BackupAnotherRegionRegion: 'string',
            dataLevel2BackupAnotherRegionRetentionPeriod: 'string',
            dataLevel2BackupPeriod: 'string',
            dataLevel2BackupRetentionPeriod: 'string',
            ownerAccount: 'string',
            ownerId: 'number',
            preferredBackupPeriod: 'string',
            preferredBackupTime: 'string',
            resourceOwnerAccount: 'string',
            resourceOwnerId: 'number',
        };
    }
    validate() {
        if (Array.isArray(this.advancedDataPolicies)) {
            $dara.Model.validateArray(this.advancedDataPolicies);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ModifyBackupPolicyRequest = ModifyBackupPolicyRequest;
//# sourceMappingURL=ModifyBackupPolicyRequest.js.map