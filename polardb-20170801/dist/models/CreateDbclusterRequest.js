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
exports.CreateDBClusterRequest = exports.CreateDBClusterRequestTag = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class CreateDBClusterRequestTag extends $dara.Model {
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
exports.CreateDBClusterRequestTag = CreateDBClusterRequestTag;
class CreateDBClusterRequest extends $dara.Model {
    static names() {
        return {
            agenticDbClusterDescription: 'AgenticDbClusterDescription',
            agenticDbClusterId: 'AgenticDbClusterId',
            agenticDbType: 'AgenticDbType',
            allowShutDown: 'AllowShutDown',
            architecture: 'Architecture',
            autoRenew: 'AutoRenew',
            autoUseCoupon: 'AutoUseCoupon',
            backupRetentionPolicyOnClusterDeletion: 'BackupRetentionPolicyOnClusterDeletion',
            burstingEnabled: 'BurstingEnabled',
            clientToken: 'ClientToken',
            cloneDataPoint: 'CloneDataPoint',
            cloudProvider: 'CloudProvider',
            clusterNetworkType: 'ClusterNetworkType',
            creationCategory: 'CreationCategory',
            creationOption: 'CreationOption',
            DBClusterDescription: 'DBClusterDescription',
            DBMinorVersion: 'DBMinorVersion',
            DBNodeClass: 'DBNodeClass',
            DBNodeNum: 'DBNodeNum',
            DBType: 'DBType',
            DBVersion: 'DBVersion',
            defaultTimeZone: 'DefaultTimeZone',
            ensRegionId: 'EnsRegionId',
            GDNId: 'GDNId',
            hotStandbyCluster: 'HotStandbyCluster',
            loosePolarLogBin: 'LoosePolarLogBin',
            looseXEngine: 'LooseXEngine',
            looseXEngineUseMemoryPct: 'LooseXEngineUseMemoryPct',
            lowerCaseTableNames: 'LowerCaseTableNames',
            ownerAccount: 'OwnerAccount',
            ownerId: 'OwnerId',
            parameterGroupId: 'ParameterGroupId',
            payType: 'PayType',
            period: 'Period',
            promotionCode: 'PromotionCode',
            provisionedIops: 'ProvisionedIops',
            proxyClass: 'ProxyClass',
            proxyType: 'ProxyType',
            regionId: 'RegionId',
            resourceGroupId: 'ResourceGroupId',
            resourceOwnerAccount: 'ResourceOwnerAccount',
            resourceOwnerId: 'ResourceOwnerId',
            scaleMax: 'ScaleMax',
            scaleMin: 'ScaleMin',
            scaleRoNumMax: 'ScaleRoNumMax',
            scaleRoNumMin: 'ScaleRoNumMin',
            securityIPList: 'SecurityIPList',
            serverlessType: 'ServerlessType',
            sourceResourceId: 'SourceResourceId',
            sourceUid: 'SourceUid',
            standbyAZ: 'StandbyAZ',
            storageAutoScale: 'StorageAutoScale',
            storageEncryption: 'StorageEncryption',
            storageEncryptionKey: 'StorageEncryptionKey',
            storagePayType: 'StoragePayType',
            storageSpace: 'StorageSpace',
            storageType: 'StorageType',
            storageUpperBound: 'StorageUpperBound',
            strictConsistency: 'StrictConsistency',
            TDEStatus: 'TDEStatus',
            tag: 'Tag',
            targetMinorVersion: 'TargetMinorVersion',
            usedTime: 'UsedTime',
            VPCId: 'VPCId',
            vSwitchId: 'VSwitchId',
            zoneId: 'ZoneId',
        };
    }
    static types() {
        return {
            agenticDbClusterDescription: 'string',
            agenticDbClusterId: 'string',
            agenticDbType: 'string',
            allowShutDown: 'string',
            architecture: 'string',
            autoRenew: 'boolean',
            autoUseCoupon: 'boolean',
            backupRetentionPolicyOnClusterDeletion: 'string',
            burstingEnabled: 'string',
            clientToken: 'string',
            cloneDataPoint: 'string',
            cloudProvider: 'string',
            clusterNetworkType: 'string',
            creationCategory: 'string',
            creationOption: 'string',
            DBClusterDescription: 'string',
            DBMinorVersion: 'string',
            DBNodeClass: 'string',
            DBNodeNum: 'number',
            DBType: 'string',
            DBVersion: 'string',
            defaultTimeZone: 'string',
            ensRegionId: 'string',
            GDNId: 'string',
            hotStandbyCluster: 'string',
            loosePolarLogBin: 'string',
            looseXEngine: 'string',
            looseXEngineUseMemoryPct: 'string',
            lowerCaseTableNames: 'string',
            ownerAccount: 'string',
            ownerId: 'number',
            parameterGroupId: 'string',
            payType: 'string',
            period: 'string',
            promotionCode: 'string',
            provisionedIops: 'number',
            proxyClass: 'string',
            proxyType: 'string',
            regionId: 'string',
            resourceGroupId: 'string',
            resourceOwnerAccount: 'string',
            resourceOwnerId: 'number',
            scaleMax: 'string',
            scaleMin: 'string',
            scaleRoNumMax: 'string',
            scaleRoNumMin: 'string',
            securityIPList: 'string',
            serverlessType: 'string',
            sourceResourceId: 'string',
            sourceUid: 'number',
            standbyAZ: 'string',
            storageAutoScale: 'string',
            storageEncryption: 'boolean',
            storageEncryptionKey: 'string',
            storagePayType: 'string',
            storageSpace: 'number',
            storageType: 'string',
            storageUpperBound: 'number',
            strictConsistency: 'string',
            TDEStatus: 'boolean',
            tag: { 'type': 'array', 'itemType': CreateDBClusterRequestTag },
            targetMinorVersion: 'string',
            usedTime: 'string',
            VPCId: 'string',
            vSwitchId: 'string',
            zoneId: 'string',
        };
    }
    validate() {
        if (Array.isArray(this.tag)) {
            $dara.Model.validateArray(this.tag);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.CreateDBClusterRequest = CreateDBClusterRequest;
//# sourceMappingURL=CreateDbclusterRequest.js.map