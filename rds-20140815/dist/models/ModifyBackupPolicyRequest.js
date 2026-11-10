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
exports.ModifyBackupPolicyRequest = exports.ModifyBackupPolicyRequestAdvancedLogPolicies = exports.ModifyBackupPolicyRequestAdvancedDataPolicies = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class ModifyBackupPolicyRequestAdvancedDataPolicies extends $dara.Model {
    static names() {
        return {
            actionType: 'ActionType',
            bakType: 'BakType',
            destRegion: 'DestRegion',
            destType: 'DestType',
            filterKey: 'FilterKey',
            filterType: 'FilterType',
            filterValue: 'FilterValue',
            onlyPreserveOneEachDay: 'OnlyPreserveOneEachDay',
            onlyPreserveOneEachHour: 'OnlyPreserveOneEachHour',
            retentionType: 'RetentionType',
            retentionValue: 'RetentionValue',
            srcRegion: 'SrcRegion',
            srcType: 'SrcType',
            strategyId: 'StrategyId',
        };
    }
    static types() {
        return {
            actionType: 'string',
            bakType: 'string',
            destRegion: 'string',
            destType: 'string',
            filterKey: 'string',
            filterType: 'string',
            filterValue: 'string',
            onlyPreserveOneEachDay: 'boolean',
            onlyPreserveOneEachHour: 'boolean',
            retentionType: 'string',
            retentionValue: 'number',
            srcRegion: 'string',
            srcType: 'string',
            strategyId: 'string',
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
class ModifyBackupPolicyRequestAdvancedLogPolicies extends $dara.Model {
    static names() {
        return {
            actionType: 'ActionType',
            destRegion: 'DestRegion',
            destType: 'DestType',
            enableLogBackup: 'EnableLogBackup',
            filterKey: 'FilterKey',
            filterValue: 'FilterValue',
            logRetentionType: 'LogRetentionType',
            logRetentionValue: 'LogRetentionValue',
            srcRegion: 'SrcRegion',
            srcType: 'SrcType',
            strategyId: 'StrategyId',
        };
    }
    static types() {
        return {
            actionType: 'string',
            destRegion: 'string',
            destType: 'string',
            enableLogBackup: 'number',
            filterKey: 'string',
            filterValue: 'string',
            logRetentionType: 'string',
            logRetentionValue: 'number',
            srcRegion: 'string',
            srcType: 'string',
            strategyId: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ModifyBackupPolicyRequestAdvancedLogPolicies = ModifyBackupPolicyRequestAdvancedLogPolicies;
class ModifyBackupPolicyRequest extends $dara.Model {
    static names() {
        return {
            advancedDataPolicies: 'AdvancedDataPolicies',
            advancedLogPolicies: 'AdvancedLogPolicies',
            archiveBackupKeepCount: 'ArchiveBackupKeepCount',
            archiveBackupKeepPolicy: 'ArchiveBackupKeepPolicy',
            archiveBackupRetentionPeriod: 'ArchiveBackupRetentionPeriod',
            backupInterval: 'BackupInterval',
            backupLog: 'BackupLog',
            backupMethod: 'BackupMethod',
            backupPolicyMode: 'BackupPolicyMode',
            backupPriority: 'BackupPriority',
            backupRetentionPeriod: 'BackupRetentionPeriod',
            category: 'Category',
            compressType: 'CompressType',
            DBInstanceId: 'DBInstanceId',
            enableAdvancedBackupPolicy: 'EnableAdvancedBackupPolicy',
            enableBackupLog: 'EnableBackupLog',
            enableImmutableBackup: 'EnableImmutableBackup',
            enableIncrementDataBackup: 'EnableIncrementDataBackup',
            enablePitrProtection: 'EnablePitrProtection',
            highSpaceUsageProtection: 'HighSpaceUsageProtection',
            incBackupInterval: 'IncBackupInterval',
            localLogRetentionHours: 'LocalLogRetentionHours',
            localLogRetentionSpace: 'LocalLogRetentionSpace',
            logBackupFrequency: 'LogBackupFrequency',
            logBackupLocalRetentionNumber: 'LogBackupLocalRetentionNumber',
            logBackupRetentionPeriod: 'LogBackupRetentionPeriod',
            ownerAccount: 'OwnerAccount',
            ownerId: 'OwnerId',
            preferredBackupPeriod: 'PreferredBackupPeriod',
            preferredBackupTime: 'PreferredBackupTime',
            releasedKeepPolicy: 'ReleasedKeepPolicy',
            resourceOwnerAccount: 'ResourceOwnerAccount',
            resourceOwnerId: 'ResourceOwnerId',
        };
    }
    static types() {
        return {
            advancedDataPolicies: { 'type': 'array', 'itemType': ModifyBackupPolicyRequestAdvancedDataPolicies },
            advancedLogPolicies: { 'type': 'array', 'itemType': ModifyBackupPolicyRequestAdvancedLogPolicies },
            archiveBackupKeepCount: 'number',
            archiveBackupKeepPolicy: 'string',
            archiveBackupRetentionPeriod: 'string',
            backupInterval: 'string',
            backupLog: 'string',
            backupMethod: 'string',
            backupPolicyMode: 'string',
            backupPriority: 'number',
            backupRetentionPeriod: 'string',
            category: 'string',
            compressType: 'string',
            DBInstanceId: 'string',
            enableAdvancedBackupPolicy: 'number',
            enableBackupLog: 'string',
            enableImmutableBackup: 'boolean',
            enableIncrementDataBackup: 'boolean',
            enablePitrProtection: 'boolean',
            highSpaceUsageProtection: 'string',
            incBackupInterval: 'number',
            localLogRetentionHours: 'string',
            localLogRetentionSpace: 'string',
            logBackupFrequency: 'string',
            logBackupLocalRetentionNumber: 'number',
            logBackupRetentionPeriod: 'string',
            ownerAccount: 'string',
            ownerId: 'number',
            preferredBackupPeriod: 'string',
            preferredBackupTime: 'string',
            releasedKeepPolicy: 'string',
            resourceOwnerAccount: 'string',
            resourceOwnerId: 'number',
        };
    }
    validate() {
        if (Array.isArray(this.advancedDataPolicies)) {
            $dara.Model.validateArray(this.advancedDataPolicies);
        }
        if (Array.isArray(this.advancedLogPolicies)) {
            $dara.Model.validateArray(this.advancedLogPolicies);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ModifyBackupPolicyRequest = ModifyBackupPolicyRequest;
//# sourceMappingURL=ModifyBackupPolicyRequest.js.map