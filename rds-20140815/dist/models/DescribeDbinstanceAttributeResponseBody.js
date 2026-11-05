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
exports.DescribeDBInstanceAttributeResponseBody = exports.DescribeDBInstanceAttributeResponseBodyItems = exports.DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttribute = exports.DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeWarmStandbyInfo = exports.DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeSlaveZones = exports.DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeSlaveZonesSlaveZone = exports.DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeServerlessConfig = exports.DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeReadOnlyDBInstanceIds = exports.DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeReadOnlyDBInstanceIdsReadOnlyDBInstanceId = exports.DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeExtra = exports.DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeExtraDBInstanceIds = exports.DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeDrReplicaInfo = exports.DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeDBClusterNodes = exports.DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeDBClusterNodesDBClusterNode = exports.DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeBabelfishConfig = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeBabelfishConfig extends $dara.Model {
    static names() {
        return {
            babelfishEnabled: 'BabelfishEnabled',
            migrationMode: 'MigrationMode',
        };
    }
    static types() {
        return {
            babelfishEnabled: 'string',
            migrationMode: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeBabelfishConfig = DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeBabelfishConfig;
class DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeDBClusterNodesDBClusterNode extends $dara.Model {
    static names() {
        return {
            classCode: 'ClassCode',
            classType: 'ClassType',
            cpu: 'Cpu',
            disasterRecoveryNode: 'DisasterRecoveryNode',
            memory: 'Memory',
            nodeId: 'NodeId',
            nodeRegionId: 'NodeRegionId',
            nodeRole: 'NodeRole',
            nodeZoneId: 'NodeZoneId',
            status: 'Status',
        };
    }
    static types() {
        return {
            classCode: 'string',
            classType: 'string',
            cpu: 'string',
            disasterRecoveryNode: 'boolean',
            memory: 'string',
            nodeId: 'string',
            nodeRegionId: 'string',
            nodeRole: 'string',
            nodeZoneId: 'string',
            status: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeDBClusterNodesDBClusterNode = DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeDBClusterNodesDBClusterNode;
class DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeDBClusterNodes extends $dara.Model {
    static names() {
        return {
            DBClusterNode: 'DBClusterNode',
        };
    }
    static types() {
        return {
            DBClusterNode: { 'type': 'array', 'itemType': DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeDBClusterNodesDBClusterNode },
        };
    }
    validate() {
        if (Array.isArray(this.DBClusterNode)) {
            $dara.Model.validateArray(this.DBClusterNode);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeDBClusterNodes = DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeDBClusterNodes;
class DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeDrReplicaInfo extends $dara.Model {
    static names() {
        return {
            insName: 'InsName',
            region: 'Region',
            unitCode: 'UnitCode',
        };
    }
    static types() {
        return {
            insName: 'string',
            region: 'string',
            unitCode: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeDrReplicaInfo = DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeDrReplicaInfo;
class DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeExtraDBInstanceIds extends $dara.Model {
    static names() {
        return {
            DBInstanceId: 'DBInstanceId',
        };
    }
    static types() {
        return {
            DBInstanceId: { 'type': 'array', 'itemType': 'string' },
        };
    }
    validate() {
        if (Array.isArray(this.DBInstanceId)) {
            $dara.Model.validateArray(this.DBInstanceId);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeExtraDBInstanceIds = DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeExtraDBInstanceIds;
class DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeExtra extends $dara.Model {
    static names() {
        return {
            accountSecurityPolicy: 'AccountSecurityPolicy',
            DBInstanceIds: 'DBInstanceIds',
            recoveryModel: 'RecoveryModel',
        };
    }
    static types() {
        return {
            accountSecurityPolicy: 'string',
            DBInstanceIds: DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeExtraDBInstanceIds,
            recoveryModel: 'string',
        };
    }
    validate() {
        if (this.DBInstanceIds && typeof this.DBInstanceIds.validate === 'function') {
            this.DBInstanceIds.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeExtra = DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeExtra;
class DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeReadOnlyDBInstanceIdsReadOnlyDBInstanceId extends $dara.Model {
    static names() {
        return {
            DBInstanceId: 'DBInstanceId',
        };
    }
    static types() {
        return {
            DBInstanceId: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeReadOnlyDBInstanceIdsReadOnlyDBInstanceId = DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeReadOnlyDBInstanceIdsReadOnlyDBInstanceId;
class DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeReadOnlyDBInstanceIds extends $dara.Model {
    static names() {
        return {
            readOnlyDBInstanceId: 'ReadOnlyDBInstanceId',
        };
    }
    static types() {
        return {
            readOnlyDBInstanceId: { 'type': 'array', 'itemType': DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeReadOnlyDBInstanceIdsReadOnlyDBInstanceId },
        };
    }
    validate() {
        if (Array.isArray(this.readOnlyDBInstanceId)) {
            $dara.Model.validateArray(this.readOnlyDBInstanceId);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeReadOnlyDBInstanceIds = DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeReadOnlyDBInstanceIds;
class DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeServerlessConfig extends $dara.Model {
    static names() {
        return {
            autoPause: 'AutoPause',
            scaleMax: 'ScaleMax',
            scaleMin: 'ScaleMin',
            switchForce: 'SwitchForce',
        };
    }
    static types() {
        return {
            autoPause: 'boolean',
            scaleMax: 'number',
            scaleMin: 'number',
            switchForce: 'boolean',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeServerlessConfig = DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeServerlessConfig;
class DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeSlaveZonesSlaveZone extends $dara.Model {
    static names() {
        return {
            zoneId: 'ZoneId',
        };
    }
    static types() {
        return {
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
exports.DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeSlaveZonesSlaveZone = DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeSlaveZonesSlaveZone;
class DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeSlaveZones extends $dara.Model {
    static names() {
        return {
            slaveZone: 'SlaveZone',
        };
    }
    static types() {
        return {
            slaveZone: { 'type': 'array', 'itemType': DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeSlaveZonesSlaveZone },
        };
    }
    validate() {
        if (Array.isArray(this.slaveZone)) {
            $dara.Model.validateArray(this.slaveZone);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeSlaveZones = DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeSlaveZones;
class DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeWarmStandbyInfo extends $dara.Model {
    static names() {
        return {
            insName: 'InsName',
            region: 'Region',
            unitCode: 'UnitCode',
        };
    }
    static types() {
        return {
            insName: 'string',
            region: 'string',
            unitCode: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeWarmStandbyInfo = DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeWarmStandbyInfo;
class DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttribute extends $dara.Model {
    static names() {
        return {
            accountMaxQuantity: 'AccountMaxQuantity',
            advancedFeatures: 'AdvancedFeatures',
            autoUpgradeMinorVersion: 'AutoUpgradeMinorVersion',
            availabilityValue: 'AvailabilityValue',
            babelfishConfig: 'BabelfishConfig',
            blueGreenDeploymentName: 'BlueGreenDeploymentName',
            blueInstanceName: 'BlueInstanceName',
            bpeEnabled: 'BpeEnabled',
            burstingEnabled: 'BurstingEnabled',
            canTempUpgrade: 'CanTempUpgrade',
            category: 'Category',
            coldDataEnabled: 'ColdDataEnabled',
            collation: 'Collation',
            compressionMode: 'CompressionMode',
            compressionRatio: 'CompressionRatio',
            computeBurstEnabled: 'ComputeBurstEnabled',
            connectionMode: 'ConnectionMode',
            connectionString: 'ConnectionString',
            consoleVersion: 'ConsoleVersion',
            creationTime: 'CreationTime',
            currentKernelVersion: 'CurrentKernelVersion',
            DBClusterNodes: 'DBClusterNodes',
            DBInstanceCPU: 'DBInstanceCPU',
            DBInstanceClass: 'DBInstanceClass',
            DBInstanceClassType: 'DBInstanceClassType',
            DBInstanceDescription: 'DBInstanceDescription',
            DBInstanceDiskUsed: 'DBInstanceDiskUsed',
            DBInstanceId: 'DBInstanceId',
            DBInstanceMemory: 'DBInstanceMemory',
            DBInstanceNetType: 'DBInstanceNetType',
            DBInstanceStatus: 'DBInstanceStatus',
            DBInstanceStorage: 'DBInstanceStorage',
            DBInstanceStorageType: 'DBInstanceStorageType',
            DBInstanceType: 'DBInstanceType',
            DBMaxQuantity: 'DBMaxQuantity',
            dedicatedHostGroupId: 'DedicatedHostGroupId',
            deletionProtection: 'DeletionProtection',
            disasterRecoveryInfo: 'DisasterRecoveryInfo',
            disasterRecoveryInstances: 'DisasterRecoveryInstances',
            drReplicaInfo: 'DrReplicaInfo',
            engine: 'Engine',
            engineVersion: 'EngineVersion',
            expireTime: 'ExpireTime',
            extra: 'Extra',
            generalGroupName: 'GeneralGroupName',
            greenInstanceName: 'GreenInstanceName',
            guardDBInstanceId: 'GuardDBInstanceId',
            IPType: 'IPType',
            incrementSourceDBInstanceId: 'IncrementSourceDBInstanceId',
            instanceNetworkType: 'InstanceNetworkType',
            instructionSetArch: 'InstructionSetArch',
            ioAccelerationEnabled: 'IoAccelerationEnabled',
            isAnalyticIns: 'IsAnalyticIns',
            isAnalyticReadOnlyIns: 'IsAnalyticReadOnlyIns',
            latestKernelVersion: 'LatestKernelVersion',
            lockMode: 'LockMode',
            lockReason: 'LockReason',
            maintainTime: 'MaintainTime',
            masterInstanceId: 'MasterInstanceId',
            masterZone: 'MasterZone',
            maxConnections: 'MaxConnections',
            maxIOMBPS: 'MaxIOMBPS',
            maxIOPS: 'MaxIOPS',
            multipleTempUpgrade: 'MultipleTempUpgrade',
            nodePerformance: 'NodePerformance',
            optimizedWritesInfo: 'OptimizedWritesInfo',
            PGBouncerEnabled: 'PGBouncerEnabled',
            payType: 'PayType',
            port: 'Port',
            proxyType: 'ProxyType',
            readOnlyDBInstanceIds: 'ReadOnlyDBInstanceIds',
            readOnlyStatus: 'ReadOnlyStatus',
            readonlyInstanceSQLDelayedTime: 'ReadonlyInstanceSQLDelayedTime',
            regionId: 'RegionId',
            resourceGroupId: 'ResourceGroupId',
            securityIPList: 'SecurityIPList',
            securityIPMode: 'SecurityIPMode',
            serverlessConfig: 'ServerlessConfig',
            slaveZones: 'SlaveZones',
            superPermissionMode: 'SuperPermissionMode',
            supportCompression: 'SupportCompression',
            tempDBInstanceId: 'TempDBInstanceId',
            tempUpgradeTimeEnd: 'TempUpgradeTimeEnd',
            tempUpgradeTimeStart: 'TempUpgradeTimeStart',
            timeZone: 'TimeZone',
            tips: 'Tips',
            tipsLevel: 'TipsLevel',
            vSwitchId: 'VSwitchId',
            vectorSupportStatus: 'VectorSupportStatus',
            vpcCloudInstanceId: 'VpcCloudInstanceId',
            vpcId: 'VpcId',
            warmStandbyInfo: 'WarmStandbyInfo',
            zoneId: 'ZoneId',
            kindCode: 'kindCode',
        };
    }
    static types() {
        return {
            accountMaxQuantity: 'number',
            advancedFeatures: 'string',
            autoUpgradeMinorVersion: 'string',
            availabilityValue: 'string',
            babelfishConfig: DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeBabelfishConfig,
            blueGreenDeploymentName: 'string',
            blueInstanceName: 'string',
            bpeEnabled: 'string',
            burstingEnabled: 'boolean',
            canTempUpgrade: 'boolean',
            category: 'string',
            coldDataEnabled: 'boolean',
            collation: 'string',
            compressionMode: 'string',
            compressionRatio: 'string',
            computeBurstEnabled: 'boolean',
            connectionMode: 'string',
            connectionString: 'string',
            consoleVersion: 'string',
            creationTime: 'string',
            currentKernelVersion: 'string',
            DBClusterNodes: DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeDBClusterNodes,
            DBInstanceCPU: 'string',
            DBInstanceClass: 'string',
            DBInstanceClassType: 'string',
            DBInstanceDescription: 'string',
            DBInstanceDiskUsed: 'string',
            DBInstanceId: 'string',
            DBInstanceMemory: 'number',
            DBInstanceNetType: 'string',
            DBInstanceStatus: 'string',
            DBInstanceStorage: 'number',
            DBInstanceStorageType: 'string',
            DBInstanceType: 'string',
            DBMaxQuantity: 'number',
            dedicatedHostGroupId: 'string',
            deletionProtection: 'boolean',
            disasterRecoveryInfo: 'string',
            disasterRecoveryInstances: 'string',
            drReplicaInfo: DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeDrReplicaInfo,
            engine: 'string',
            engineVersion: 'string',
            expireTime: 'string',
            extra: DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeExtra,
            generalGroupName: 'string',
            greenInstanceName: 'string',
            guardDBInstanceId: 'string',
            IPType: 'string',
            incrementSourceDBInstanceId: 'string',
            instanceNetworkType: 'string',
            instructionSetArch: 'string',
            ioAccelerationEnabled: 'string',
            isAnalyticIns: 'boolean',
            isAnalyticReadOnlyIns: 'boolean',
            latestKernelVersion: 'string',
            lockMode: 'string',
            lockReason: 'string',
            maintainTime: 'string',
            masterInstanceId: 'string',
            masterZone: 'string',
            maxConnections: 'number',
            maxIOMBPS: 'number',
            maxIOPS: 'number',
            multipleTempUpgrade: 'boolean',
            nodePerformance: 'string',
            optimizedWritesInfo: 'string',
            PGBouncerEnabled: 'string',
            payType: 'string',
            port: 'string',
            proxyType: 'number',
            readOnlyDBInstanceIds: DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeReadOnlyDBInstanceIds,
            readOnlyStatus: 'string',
            readonlyInstanceSQLDelayedTime: 'string',
            regionId: 'string',
            resourceGroupId: 'string',
            securityIPList: 'string',
            securityIPMode: 'string',
            serverlessConfig: DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeServerlessConfig,
            slaveZones: DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeSlaveZones,
            superPermissionMode: 'string',
            supportCompression: 'boolean',
            tempDBInstanceId: 'string',
            tempUpgradeTimeEnd: 'string',
            tempUpgradeTimeStart: 'string',
            timeZone: 'string',
            tips: 'string',
            tipsLevel: 'number',
            vSwitchId: 'string',
            vectorSupportStatus: 'string',
            vpcCloudInstanceId: 'string',
            vpcId: 'string',
            warmStandbyInfo: DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeWarmStandbyInfo,
            zoneId: 'string',
            kindCode: 'string',
        };
    }
    validate() {
        if (this.babelfishConfig && typeof this.babelfishConfig.validate === 'function') {
            this.babelfishConfig.validate();
        }
        if (this.DBClusterNodes && typeof this.DBClusterNodes.validate === 'function') {
            this.DBClusterNodes.validate();
        }
        if (this.drReplicaInfo && typeof this.drReplicaInfo.validate === 'function') {
            this.drReplicaInfo.validate();
        }
        if (this.extra && typeof this.extra.validate === 'function') {
            this.extra.validate();
        }
        if (this.readOnlyDBInstanceIds && typeof this.readOnlyDBInstanceIds.validate === 'function') {
            this.readOnlyDBInstanceIds.validate();
        }
        if (this.serverlessConfig && typeof this.serverlessConfig.validate === 'function') {
            this.serverlessConfig.validate();
        }
        if (this.slaveZones && typeof this.slaveZones.validate === 'function') {
            this.slaveZones.validate();
        }
        if (this.warmStandbyInfo && typeof this.warmStandbyInfo.validate === 'function') {
            this.warmStandbyInfo.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttribute = DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttribute;
class DescribeDBInstanceAttributeResponseBodyItems extends $dara.Model {
    static names() {
        return {
            DBInstanceAttribute: 'DBInstanceAttribute',
        };
    }
    static types() {
        return {
            DBInstanceAttribute: { 'type': 'array', 'itemType': DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttribute },
        };
    }
    validate() {
        if (Array.isArray(this.DBInstanceAttribute)) {
            $dara.Model.validateArray(this.DBInstanceAttribute);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDBInstanceAttributeResponseBodyItems = DescribeDBInstanceAttributeResponseBodyItems;
class DescribeDBInstanceAttributeResponseBody extends $dara.Model {
    static names() {
        return {
            items: 'Items',
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            items: DescribeDBInstanceAttributeResponseBodyItems,
            requestId: 'string',
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
exports.DescribeDBInstanceAttributeResponseBody = DescribeDBInstanceAttributeResponseBody;
//# sourceMappingURL=DescribeDbinstanceAttributeResponseBody.js.map