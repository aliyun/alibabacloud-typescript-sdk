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
exports.DescribeDbClusterAttributeZonalResponseBody = exports.DescribeDbClusterAttributeZonalResponseBodyTags = exports.DescribeDbClusterAttributeZonalResponseBodyDBNodes = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeDbClusterAttributeZonalResponseBodyDBNodes extends $dara.Model {
    static names() {
        return {
            addedCpuCores: 'AddedCpuCores',
            cpuCores: 'CpuCores',
            creationTime: 'CreationTime',
            DBNodeClass: 'DBNodeClass',
            DBNodeDescription: 'DBNodeDescription',
            DBNodeId: 'DBNodeId',
            DBNodeRole: 'DBNodeRole',
            DBNodeStatus: 'DBNodeStatus',
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
            DBNodeClass: 'string',
            DBNodeDescription: 'string',
            DBNodeId: 'string',
            DBNodeRole: 'string',
            DBNodeStatus: 'string',
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
exports.DescribeDbClusterAttributeZonalResponseBodyDBNodes = DescribeDbClusterAttributeZonalResponseBodyDBNodes;
class DescribeDbClusterAttributeZonalResponseBodyTags extends $dara.Model {
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
exports.DescribeDbClusterAttributeZonalResponseBodyTags = DescribeDbClusterAttributeZonalResponseBodyTags;
class DescribeDbClusterAttributeZonalResponseBody extends $dara.Model {
    static names() {
        return {
            aiCreatingTime: 'AiCreatingTime',
            aiType: 'AiType',
            architecture: 'Architecture',
            autoUpgradeMinorVersion: 'AutoUpgradeMinorVersion',
            blktagTotal: 'BlktagTotal',
            blktagUsed: 'BlktagUsed',
            burstingEnabled: 'BurstingEnabled',
            category: 'Category',
            compressStorageMode: 'CompressStorageMode',
            compressStorageUsed: 'CompressStorageUsed',
            creationTime: 'CreationTime',
            DBClusterClass: 'DBClusterClass',
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
            serverlessType: 'ServerlessType',
            sourceDBCluster: 'SourceDBCluster',
            sourceRegionId: 'SourceRegionId',
            standbyHAMode: 'StandbyHAMode',
            storageMax: 'StorageMax',
            storagePayType: 'StoragePayType',
            storageSpace: 'StorageSpace',
            storageType: 'StorageType',
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
            burstingEnabled: 'string',
            category: 'string',
            compressStorageMode: 'string',
            compressStorageUsed: 'number',
            creationTime: 'string',
            DBClusterClass: 'string',
            DBClusterDescription: 'string',
            DBClusterId: 'string',
            DBClusterNetworkType: 'string',
            DBClusterStatus: 'string',
            DBNodes: { 'type': 'array', 'itemType': DescribeDbClusterAttributeZonalResponseBodyDBNodes },
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
            serverlessType: 'string',
            sourceDBCluster: 'string',
            sourceRegionId: 'string',
            standbyHAMode: 'string',
            storageMax: 'number',
            storagePayType: 'string',
            storageSpace: 'number',
            storageType: 'string',
            storageUsed: 'number',
            strictConsistency: 'string',
            subCategory: 'string',
            supportInstantSwitchWithImci: 'string',
            tags: { 'type': 'array', 'itemType': DescribeDbClusterAttributeZonalResponseBodyTags },
            VPCId: 'string',
            vSwitchId: 'string',
            zoneIds: 'string',
        };
    }
    validate() {
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
exports.DescribeDbClusterAttributeZonalResponseBody = DescribeDbClusterAttributeZonalResponseBody;
//# sourceMappingURL=DescribeDbClusterAttributeZonalResponseBody.js.map