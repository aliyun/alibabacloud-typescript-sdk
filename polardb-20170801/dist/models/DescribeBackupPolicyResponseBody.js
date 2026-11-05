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
exports.DescribeBackupPolicyResponseBody = exports.DescribeBackupPolicyResponseBodyAdvancedDataPolicies = exports.DescribeBackupPolicyResponseBodyAdvancedDataPoliciesAdvancedDataPolicy = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeBackupPolicyResponseBodyAdvancedDataPoliciesAdvancedDataPolicy extends $dara.Model {
    static names() {
        return {
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
class DescribeBackupPolicyResponseBody extends $dara.Model {
    static names() {
        return {
            advancedDataPolicies: 'AdvancedDataPolicies',
            advancedPolicyOption: 'AdvancedPolicyOption',
            backupFrequency: 'BackupFrequency',
            backupPolicyLevel: 'BackupPolicyLevel',
            backupRetentionPolicyOnClusterDeletion: 'BackupRetentionPolicyOnClusterDeletion',
            dataLevel1BackupFrequency: 'DataLevel1BackupFrequency',
            dataLevel1BackupPeriod: 'DataLevel1BackupPeriod',
            dataLevel1BackupRetentionPeriod: 'DataLevel1BackupRetentionPeriod',
            dataLevel1BackupTime: 'DataLevel1BackupTime',
            dataLevel2BackupAnotherRegionRegion: 'DataLevel2BackupAnotherRegionRegion',
            dataLevel2BackupAnotherRegionRetentionPeriod: 'DataLevel2BackupAnotherRegionRetentionPeriod',
            dataLevel2BackupPeriod: 'DataLevel2BackupPeriod',
            dataLevel2BackupRetentionPeriod: 'DataLevel2BackupRetentionPeriod',
            enableCrossRegionImmutableBackup: 'EnableCrossRegionImmutableBackup',
            enableImmutableBackup: 'EnableImmutableBackup',
            preferredBackupPeriod: 'PreferredBackupPeriod',
            preferredBackupTime: 'PreferredBackupTime',
            preferredNextBackupTime: 'PreferredNextBackupTime',
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            advancedDataPolicies: DescribeBackupPolicyResponseBodyAdvancedDataPolicies,
            advancedPolicyOption: 'string',
            backupFrequency: 'string',
            backupPolicyLevel: 'string',
            backupRetentionPolicyOnClusterDeletion: 'string',
            dataLevel1BackupFrequency: 'string',
            dataLevel1BackupPeriod: 'string',
            dataLevel1BackupRetentionPeriod: 'string',
            dataLevel1BackupTime: 'string',
            dataLevel2BackupAnotherRegionRegion: 'string',
            dataLevel2BackupAnotherRegionRetentionPeriod: 'string',
            dataLevel2BackupPeriod: 'string',
            dataLevel2BackupRetentionPeriod: 'string',
            enableCrossRegionImmutableBackup: 'boolean',
            enableImmutableBackup: 'boolean',
            preferredBackupPeriod: 'string',
            preferredBackupTime: 'string',
            preferredNextBackupTime: 'string',
            requestId: 'string',
        };
    }
    validate() {
        if (this.advancedDataPolicies && typeof this.advancedDataPolicies.validate === 'function') {
            this.advancedDataPolicies.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeBackupPolicyResponseBody = DescribeBackupPolicyResponseBody;
//# sourceMappingURL=DescribeBackupPolicyResponseBody.js.map