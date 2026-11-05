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
exports.DescribeDBClusterAttributeResponseBody = exports.DescribeDBClusterAttributeResponseBodyTags = exports.DescribeDBClusterAttributeResponseBodyDBNodes = exports.DescribeDBClusterAttributeResponseBodyBranch = exports.DescribeDBClusterAttributeResponseBodyBranchChildBranch = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeDBClusterAttributeResponseBodyBranchChildBranch extends $dara.Model {
    static names() {
        return {
            branchLsn: 'BranchLsn',
            branchTime: 'BranchTime',
            DBClusterDescription: 'DBClusterDescription',
            hasChild: 'HasChild',
            insName: 'InsName',
        };
    }
    static types() {
        return {
            branchLsn: 'string',
            branchTime: 'string',
            DBClusterDescription: 'string',
            hasChild: 'boolean',
            insName: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDBClusterAttributeResponseBodyBranchChildBranch = DescribeDBClusterAttributeResponseBodyBranchChildBranch;
class DescribeDBClusterAttributeResponseBodyBranch extends $dara.Model {
    static names() {
        return {
            branchLsn: 'BranchLsn',
            branchTime: 'BranchTime',
            childBranch: 'ChildBranch',
            parentInsName: 'ParentInsName',
        };
    }
    static types() {
        return {
            branchLsn: 'string',
            branchTime: 'string',
            childBranch: { 'type': 'array', 'itemType': DescribeDBClusterAttributeResponseBodyBranchChildBranch },
            parentInsName: 'string',
        };
    }
    validate() {
        if (Array.isArray(this.childBranch)) {
            $dara.Model.validateArray(this.childBranch);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDBClusterAttributeResponseBodyBranch = DescribeDBClusterAttributeResponseBodyBranch;
class DescribeDBClusterAttributeResponseBodyDBNodes extends $dara.Model {
    static names() {
        return {
            addedCpuCores: 'AddedCpuCores',
            cpuCores: 'CpuCores',
            creationTime: 'CreationTime',
            DBNodeCXLRemoteMemory: 'DBNodeCXLRemoteMemory',
            DBNodeClass: 'DBNodeClass',
            DBNodeDescription: 'DBNodeDescription',
            DBNodeId: 'DBNodeId',
            DBNodeRole: 'DBNodeRole',
            DBNodeStatus: 'DBNodeStatus',
            dedicatedHostModel: 'DedicatedHostModel',
            failoverPriority: 'FailoverPriority',
            hotReplicaMode: 'HotReplicaMode',
            imciSwitch: 'ImciSwitch',
            masterId: 'MasterId',
            maxConnections: 'MaxConnections',
            maxIOPS: 'MaxIOPS',
            memorySize: 'MemorySize',
            mirrorInsName: 'MirrorInsName',
            multiMasterLocalStandby: 'MultiMasterLocalStandby',
            multiMasterPrimaryNode: 'MultiMasterPrimaryNode',
            orca: 'Orca',
            remoteMemoryMax: 'RemoteMemoryMax',
            remoteMemoryMin: 'RemoteMemoryMin',
            remoteMemoryRecommended: 'RemoteMemoryRecommended',
            remoteMemorySize: 'RemoteMemorySize',
            sccMode: 'SccMode',
            serverWeight: 'ServerWeight',
            serverlessType: 'ServerlessType',
            subCluster: 'SubCluster',
            subGroupDescription: 'SubGroupDescription',
            zoneId: 'ZoneId',
        };
    }
    static types() {
        return {
            addedCpuCores: 'string',
            cpuCores: 'string',
            creationTime: 'string',
            DBNodeCXLRemoteMemory: 'string',
            DBNodeClass: 'string',
            DBNodeDescription: 'string',
            DBNodeId: 'string',
            DBNodeRole: 'string',
            DBNodeStatus: 'string',
            dedicatedHostModel: 'boolean',
            failoverPriority: 'number',
            hotReplicaMode: 'string',
            imciSwitch: 'string',
            masterId: 'string',
            maxConnections: 'number',
            maxIOPS: 'number',
            memorySize: 'string',
            mirrorInsName: 'string',
            multiMasterLocalStandby: 'string',
            multiMasterPrimaryNode: 'string',
            orca: 'string',
            remoteMemoryMax: 'number',
            remoteMemoryMin: 'number',
            remoteMemoryRecommended: 'number',
            remoteMemorySize: 'string',
            sccMode: 'string',
            serverWeight: 'string',
            serverlessType: 'string',
            subCluster: 'string',
            subGroupDescription: 'string',
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
exports.DescribeDBClusterAttributeResponseBodyDBNodes = DescribeDBClusterAttributeResponseBodyDBNodes;
class DescribeDBClusterAttributeResponseBodyTags extends $dara.Model {
    static names() {
        return {
            key: 'Key',
            value: 'Value',
        };
    }
    static types() {
        return {
            key: 'string',
            value: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDBClusterAttributeResponseBodyTags = DescribeDBClusterAttributeResponseBodyTags;
class DescribeDBClusterAttributeResponseBody extends $dara.Model {
    static names() {
        return {
            aiCreatingTime: 'AiCreatingTime',
            aiType: 'AiType',
            architecture: 'Architecture',
            autoUpgradeMinorVersion: 'AutoUpgradeMinorVersion',
            blktagTotal: 'BlktagTotal',
            blktagUsed: 'BlktagUsed',
            branch: 'Branch',
            burstingEnabled: 'BurstingEnabled',
            category: 'Category',
            columnTable: 'ColumnTable',
            compressStorageMode: 'CompressStorageMode',
            compressStorageUsed: 'CompressStorageUsed',
            connectionResourceQuota: 'ConnectionResourceQuota',
            connectionResourceUsed: 'ConnectionResourceUsed',
            creationTime: 'CreationTime',
            DBClusterDescription: 'DBClusterDescription',
            DBClusterId: 'DBClusterId',
            DBClusterNetworkType: 'DBClusterNetworkType',
            DBClusterStatus: 'DBClusterStatus',
            DBNodes: 'DBNodes',
            DBType: 'DBType',
            DBVersion: 'DBVersion',
            DBVersionStatus: 'DBVersionStatus',
            dataLevel1BackupChainSize: 'DataLevel1BackupChainSize',
            dataSyncMode: 'DataSyncMode',
            deletionLock: 'DeletionLock',
            engine: 'Engine',
            expireTime: 'ExpireTime',
            expired: 'Expired',
            hasCompleteStandbyRes: 'HasCompleteStandbyRes',
            hotStandbyCluster: 'HotStandbyCluster',
            imciAutoIndex: 'ImciAutoIndex',
            imperceptibleSwitch: 'ImperceptibleSwitch',
            inodeTotal: 'InodeTotal',
            inodeUsed: 'InodeUsed',
            isLatestVersion: 'IsLatestVersion',
            isProxyLatestVersion: 'IsProxyLatestVersion',
            lockMode: 'LockMode',
            maintainTime: 'MaintainTime',
            orca: 'Orca',
            payType: 'PayType',
            provisionedIops: 'ProvisionedIops',
            proxyCpuCores: 'ProxyCpuCores',
            proxyServerlessType: 'ProxyServerlessType',
            proxyStandardCpuCores: 'ProxyStandardCpuCores',
            proxyStatus: 'ProxyStatus',
            proxyType: 'ProxyType',
            regionId: 'RegionId',
            requestId: 'RequestId',
            resourceGroupId: 'ResourceGroupId',
            restoreDataPoint: 'RestoreDataPoint',
            restoreType: 'RestoreType',
            rowCompression: 'RowCompression',
            SQLSize: 'SQLSize',
            searchClusterStatus: 'SearchClusterStatus',
            searchCompressStorageUsed: 'SearchCompressStorageUsed',
            searchStorageUsed: 'SearchStorageUsed',
            serverlessType: 'ServerlessType',
            sourceDBCluster: 'SourceDBCluster',
            sourceRegionId: 'SourceRegionId',
            standbyHAMode: 'StandbyHAMode',
            storageAutoScale: 'StorageAutoScale',
            storageMax: 'StorageMax',
            storagePayType: 'StoragePayType',
            storageSpace: 'StorageSpace',
            storageType: 'StorageType',
            storageUpperBound: 'StorageUpperBound',
            storageUsed: 'StorageUsed',
            strictConsistency: 'StrictConsistency',
            subCategory: 'SubCategory',
            supportInstantSwitchWithImci: 'SupportInstantSwitchWithImci',
            tags: 'Tags',
            VPCId: 'VPCId',
            vSwitchId: 'VSwitchId',
            zoneIds: 'ZoneIds',
        };
    }
    static types() {
        return {
            aiCreatingTime: 'string',
            aiType: 'string',
            architecture: 'string',
            autoUpgradeMinorVersion: 'string',
            blktagTotal: 'number',
            blktagUsed: 'number',
            branch: DescribeDBClusterAttributeResponseBodyBranch,
            burstingEnabled: 'string',
            category: 'string',
            columnTable: 'string',
            compressStorageMode: 'string',
            compressStorageUsed: 'number',
            connectionResourceQuota: 'number',
            connectionResourceUsed: 'number',
            creationTime: 'string',
            DBClusterDescription: 'string',
            DBClusterId: 'string',
            DBClusterNetworkType: 'string',
            DBClusterStatus: 'string',
            DBNodes: { 'type': 'array', 'itemType': DescribeDBClusterAttributeResponseBodyDBNodes },
            DBType: 'string',
            DBVersion: 'string',
            DBVersionStatus: 'string',
            dataLevel1BackupChainSize: 'number',
            dataSyncMode: 'string',
            deletionLock: 'number',
            engine: 'string',
            expireTime: 'string',
            expired: 'string',
            hasCompleteStandbyRes: 'boolean',
            hotStandbyCluster: 'string',
            imciAutoIndex: 'string',
            imperceptibleSwitch: 'string',
            inodeTotal: 'number',
            inodeUsed: 'number',
            isLatestVersion: 'boolean',
            isProxyLatestVersion: 'boolean',
            lockMode: 'string',
            maintainTime: 'string',
            orca: 'string',
            payType: 'string',
            provisionedIops: 'string',
            proxyCpuCores: 'string',
            proxyServerlessType: 'string',
            proxyStandardCpuCores: 'string',
            proxyStatus: 'string',
            proxyType: 'string',
            regionId: 'string',
            requestId: 'string',
            resourceGroupId: 'string',
            restoreDataPoint: 'string',
            restoreType: 'string',
            rowCompression: 'string',
            SQLSize: 'number',
            searchClusterStatus: 'string',
            searchCompressStorageUsed: 'number',
            searchStorageUsed: 'number',
            serverlessType: 'string',
            sourceDBCluster: 'string',
            sourceRegionId: 'string',
            standbyHAMode: 'string',
            storageAutoScale: 'string',
            storageMax: 'number',
            storagePayType: 'string',
            storageSpace: 'number',
            storageType: 'string',
            storageUpperBound: 'number',
            storageUsed: 'number',
            strictConsistency: 'string',
            subCategory: 'string',
            supportInstantSwitchWithImci: 'string',
            tags: { 'type': 'array', 'itemType': DescribeDBClusterAttributeResponseBodyTags },
            VPCId: 'string',
            vSwitchId: 'string',
            zoneIds: 'string',
        };
    }
    validate() {
        if (this.branch && typeof this.branch.validate === 'function') {
            this.branch.validate();
        }
        if (Array.isArray(this.DBNodes)) {
            $dara.Model.validateArray(this.DBNodes);
        }
        if (Array.isArray(this.tags)) {
            $dara.Model.validateArray(this.tags);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDBClusterAttributeResponseBody = DescribeDBClusterAttributeResponseBody;
//# sourceMappingURL=DescribeDbclusterAttributeResponseBody.js.map