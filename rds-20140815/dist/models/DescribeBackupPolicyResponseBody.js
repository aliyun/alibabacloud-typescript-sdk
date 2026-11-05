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
exports.DescribeBackupPolicyResponseBody = exports.DescribeBackupPolicyResponseBodyAdvancedLogPolicies = exports.DescribeBackupPolicyResponseBodyAdvancedLogPoliciesAdvancedLogPolicy = exports.DescribeBackupPolicyResponseBodyAdvancedDataPolicies = exports.DescribeBackupPolicyResponseBodyAdvancedDataPoliciesAdvancedDataPolicy = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeBackupPolicyResponseBodyAdvancedDataPoliciesAdvancedDataPolicy extends $dara.Model {
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
exports.DescribeBackupPolicyResponseBodyAdvancedDataPoliciesAdvancedDataPolicy = DescribeBackupPolicyResponseBodyAdvancedDataPoliciesAdvancedDataPolicy;
class DescribeBackupPolicyResponseBodyAdvancedDataPolicies extends $dara.Model {
    static names() {
        return {
            advancedDataPolicy: 'AdvancedDataPolicy',
        };
    }
    static types() {
        return {
            advancedDataPolicy: { 'type': 'array', 'itemType': DescribeBackupPolicyResponseBodyAdvancedDataPoliciesAdvancedDataPolicy },
        };
    }
    validate() {
        if (Array.isArray(this.advancedDataPolicy)) {
            $dara.Model.validateArray(this.advancedDataPolicy);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeBackupPolicyResponseBodyAdvancedDataPolicies = DescribeBackupPolicyResponseBodyAdvancedDataPolicies;
class DescribeBackupPolicyResponseBodyAdvancedLogPoliciesAdvancedLogPolicy extends $dara.Model {
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
exports.DescribeBackupPolicyResponseBodyAdvancedLogPoliciesAdvancedLogPolicy = DescribeBackupPolicyResponseBodyAdvancedLogPoliciesAdvancedLogPolicy;
class DescribeBackupPolicyResponseBodyAdvancedLogPolicies extends $dara.Model {
    static names() {
        return {
            advancedLogPolicy: 'AdvancedLogPolicy',
        };
    }
    static types() {
        return {
            advancedLogPolicy: { 'type': 'array', 'itemType': DescribeBackupPolicyResponseBodyAdvancedLogPoliciesAdvancedLogPolicy },
        };
    }
    validate() {
        if (Array.isArray(this.advancedLogPolicy)) {
            $dara.Model.validateArray(this.advancedLogPolicy);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeBackupPolicyResponseBodyAdvancedLogPolicies = DescribeBackupPolicyResponseBodyAdvancedLogPolicies;
class DescribeBackupPolicyResponseBody extends $dara.Model {
    static names() {
        return {
            advancedBackupPolicyEnabled: 'AdvancedBackupPolicyEnabled',
            advancedDataPolicies: 'AdvancedDataPolicies',
            advancedLogPolicies: 'AdvancedLogPolicies',
            archiveBackupKeepCount: 'ArchiveBackupKeepCount',
            archiveBackupKeepPolicy: 'ArchiveBackupKeepPolicy',
            archiveBackupRetentionPeriod: 'ArchiveBackupRetentionPeriod',
            backupInterval: 'BackupInterval',
            backupLog: 'BackupLog',
            backupMethod: 'BackupMethod',
            backupPriority: 'BackupPriority',
            backupRetentionPeriod: 'BackupRetentionPeriod',
            category: 'Category',
            compressType: 'CompressType',
            enableBackupLog: 'EnableBackupLog',
            enableIncrementDataBackup: 'EnableIncrementDataBackup',
            enablePitrProtection: 'EnablePitrProtection',
            highSpaceUsageProtection: 'HighSpaceUsageProtection',
            incBackupInterval: 'IncBackupInterval',
            localLogRetentionHours: 'LocalLogRetentionHours',
            localLogRetentionSpace: 'LocalLogRetentionSpace',
            logBackupFrequency: 'LogBackupFrequency',
            logBackupLocalRetentionNumber: 'LogBackupLocalRetentionNumber',
            logBackupRetentionPeriod: 'LogBackupRetentionPeriod',
            pitrRetentionPeriod: 'PitrRetentionPeriod',
            preferredBackupPeriod: 'PreferredBackupPeriod',
            preferredBackupTime: 'PreferredBackupTime',
            preferredNextBackupTime: 'PreferredNextBackupTime',
            releasedKeepPolicy: 'ReleasedKeepPolicy',
            requestId: 'RequestId',
            supportModifyBackupPriority: 'SupportModifyBackupPriority',
            supportReleasedKeep: 'SupportReleasedKeep',
            supportVolumeShadowCopy: 'SupportVolumeShadowCopy',
            supportsHighFrequencyBackup: 'SupportsHighFrequencyBackup',
        };
    }
    static types() {
        return {
            advancedBackupPolicyEnabled: 'boolean',
            advancedDataPolicies: DescribeBackupPolicyResponseBodyAdvancedDataPolicies,
            advancedLogPolicies: DescribeBackupPolicyResponseBodyAdvancedLogPolicies,
            archiveBackupKeepCount: 'string',
            archiveBackupKeepPolicy: 'string',
            archiveBackupRetentionPeriod: 'string',
            backupInterval: 'string',
            backupLog: 'string',
            backupMethod: 'string',
            backupPriority: 'number',
            backupRetentionPeriod: 'number',
            category: 'string',
            compressType: 'string',
            enableBackupLog: 'string',
            enableIncrementDataBackup: 'boolean',
            enablePitrProtection: 'boolean',
            highSpaceUsageProtection: 'string',
            incBackupInterval: 'number',
            localLogRetentionHours: 'number',
            localLogRetentionSpace: 'string',
            logBackupFrequency: 'string',
            logBackupLocalRetentionNumber: 'number',
            logBackupRetentionPeriod: 'number',
            pitrRetentionPeriod: 'number',
            preferredBackupPeriod: 'string',
            preferredBackupTime: 'string',
            preferredNextBackupTime: 'string',
            releasedKeepPolicy: 'string',
            requestId: 'string',
            supportModifyBackupPriority: 'boolean',
            supportReleasedKeep: 'number',
            supportVolumeShadowCopy: 'number',
            supportsHighFrequencyBackup: 'number',
        };
    }
    validate() {
        if (this.advancedDataPolicies && typeof this.advancedDataPolicies.validate === 'function') {
            this.advancedDataPolicies.validate();
        }
        if (this.advancedLogPolicies && typeof this.advancedLogPolicies.validate === 'function') {
            this.advancedLogPolicies.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeBackupPolicyResponseBody = DescribeBackupPolicyResponseBody;
//# sourceMappingURL=DescribeBackupPolicyResponseBody.js.map