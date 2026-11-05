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
exports.DescribeDBInstancesResponseBody = exports.DescribeDBInstancesResponseBodyItems = exports.DescribeDBInstancesResponseBodyItemsDBInstance = exports.DescribeDBInstancesResponseBodyItemsDBInstanceReadOnlyDBInstanceIds = exports.DescribeDBInstancesResponseBodyItemsDBInstanceReadOnlyDBInstanceIdsReadOnlyDBInstanceId = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeDBInstancesResponseBodyItemsDBInstanceReadOnlyDBInstanceIdsReadOnlyDBInstanceId extends $dara.Model {
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
exports.DescribeDBInstancesResponseBodyItemsDBInstanceReadOnlyDBInstanceIdsReadOnlyDBInstanceId = DescribeDBInstancesResponseBodyItemsDBInstanceReadOnlyDBInstanceIdsReadOnlyDBInstanceId;
class DescribeDBInstancesResponseBodyItemsDBInstanceReadOnlyDBInstanceIds extends $dara.Model {
    static names() {
        return {
            readOnlyDBInstanceId: 'ReadOnlyDBInstanceId',
        };
    }
    static types() {
        return {
            readOnlyDBInstanceId: { 'type': 'array', 'itemType': DescribeDBInstancesResponseBodyItemsDBInstanceReadOnlyDBInstanceIdsReadOnlyDBInstanceId },
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
exports.DescribeDBInstancesResponseBodyItemsDBInstanceReadOnlyDBInstanceIds = DescribeDBInstancesResponseBodyItemsDBInstanceReadOnlyDBInstanceIds;
class DescribeDBInstancesResponseBodyItemsDBInstance extends $dara.Model {
    static names() {
        return {
            autoRenewal: 'AutoRenewal',
            blueGreenDeploymentName: 'BlueGreenDeploymentName',
            blueInstanceName: 'BlueInstanceName',
            bpeEnabled: 'BpeEnabled',
            burstingEnabled: 'BurstingEnabled',
            category: 'Category',
            coldDataEnabled: 'ColdDataEnabled',
            connectionMode: 'ConnectionMode',
            connectionString: 'ConnectionString',
            createTime: 'CreateTime',
            DBInstanceCPU: 'DBInstanceCPU',
            DBInstanceClass: 'DBInstanceClass',
            DBInstanceDescription: 'DBInstanceDescription',
            DBInstanceId: 'DBInstanceId',
            DBInstanceMemory: 'DBInstanceMemory',
            DBInstanceNetType: 'DBInstanceNetType',
            DBInstanceStatus: 'DBInstanceStatus',
            DBInstanceStorageType: 'DBInstanceStorageType',
            DBInstanceType: 'DBInstanceType',
            dedicatedHostGroupId: 'DedicatedHostGroupId',
            dedicatedHostGroupName: 'DedicatedHostGroupName',
            dedicatedHostIdForLog: 'DedicatedHostIdForLog',
            dedicatedHostIdForMaster: 'DedicatedHostIdForMaster',
            dedicatedHostIdForSlave: 'DedicatedHostIdForSlave',
            dedicatedHostNameForLog: 'DedicatedHostNameForLog',
            dedicatedHostNameForMaster: 'DedicatedHostNameForMaster',
            dedicatedHostNameForSlave: 'DedicatedHostNameForSlave',
            dedicatedHostZoneIdForLog: 'DedicatedHostZoneIdForLog',
            dedicatedHostZoneIdForMaster: 'DedicatedHostZoneIdForMaster',
            dedicatedHostZoneIdForSlave: 'DedicatedHostZoneIdForSlave',
            deletionProtection: 'DeletionProtection',
            destroyTime: 'DestroyTime',
            engine: 'Engine',
            engineVersion: 'EngineVersion',
            expireTime: 'ExpireTime',
            generalGroupName: 'GeneralGroupName',
            greenInstanceName: 'GreenInstanceName',
            guardDBInstanceId: 'GuardDBInstanceId',
            instanceNetworkType: 'InstanceNetworkType',
            ioAccelerationEnabled: 'IoAccelerationEnabled',
            isAnalyticIns: 'IsAnalyticIns',
            isAnalyticReadOnlyIns: 'IsAnalyticReadOnlyIns',
            lockMode: 'LockMode',
            lockReason: 'LockReason',
            masterInstanceId: 'MasterInstanceId',
            mutriORsignle: 'MutriORsignle',
            payType: 'PayType',
            readOnlyDBInstanceIds: 'ReadOnlyDBInstanceIds',
            regionId: 'RegionId',
            resourceGroupId: 'ResourceGroupId',
            switchWeight: 'SwitchWeight',
            tempDBInstanceId: 'TempDBInstanceId',
            tips: 'Tips',
            tipsLevel: 'TipsLevel',
            vSwitchId: 'VSwitchId',
            vpcCloudInstanceId: 'VpcCloudInstanceId',
            vpcId: 'VpcId',
            vpcName: 'VpcName',
            zoneId: 'ZoneId',
        };
    }
    static types() {
        return {
            autoRenewal: 'boolean',
            blueGreenDeploymentName: 'string',
            blueInstanceName: 'string',
            bpeEnabled: 'string',
            burstingEnabled: 'boolean',
            category: 'string',
            coldDataEnabled: 'boolean',
            connectionMode: 'string',
            connectionString: 'string',
            createTime: 'string',
            DBInstanceCPU: 'string',
            DBInstanceClass: 'string',
            DBInstanceDescription: 'string',
            DBInstanceId: 'string',
            DBInstanceMemory: 'number',
            DBInstanceNetType: 'string',
            DBInstanceStatus: 'string',
            DBInstanceStorageType: 'string',
            DBInstanceType: 'string',
            dedicatedHostGroupId: 'string',
            dedicatedHostGroupName: 'string',
            dedicatedHostIdForLog: 'string',
            dedicatedHostIdForMaster: 'string',
            dedicatedHostIdForSlave: 'string',
            dedicatedHostNameForLog: 'string',
            dedicatedHostNameForMaster: 'string',
            dedicatedHostNameForSlave: 'string',
            dedicatedHostZoneIdForLog: 'string',
            dedicatedHostZoneIdForMaster: 'string',
            dedicatedHostZoneIdForSlave: 'string',
            deletionProtection: 'boolean',
            destroyTime: 'string',
            engine: 'string',
            engineVersion: 'string',
            expireTime: 'string',
            generalGroupName: 'string',
            greenInstanceName: 'string',
            guardDBInstanceId: 'string',
            instanceNetworkType: 'string',
            ioAccelerationEnabled: 'string',
            isAnalyticIns: 'string',
            isAnalyticReadOnlyIns: 'boolean',
            lockMode: 'string',
            lockReason: 'string',
            masterInstanceId: 'string',
            mutriORsignle: 'boolean',
            payType: 'string',
            readOnlyDBInstanceIds: DescribeDBInstancesResponseBodyItemsDBInstanceReadOnlyDBInstanceIds,
            regionId: 'string',
            resourceGroupId: 'string',
            switchWeight: 'number',
            tempDBInstanceId: 'string',
            tips: 'string',
            tipsLevel: 'number',
            vSwitchId: 'string',
            vpcCloudInstanceId: 'string',
            vpcId: 'string',
            vpcName: 'string',
            zoneId: 'string',
        };
    }
    validate() {
        if (this.readOnlyDBInstanceIds && typeof this.readOnlyDBInstanceIds.validate === 'function') {
            this.readOnlyDBInstanceIds.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDBInstancesResponseBodyItemsDBInstance = DescribeDBInstancesResponseBodyItemsDBInstance;
class DescribeDBInstancesResponseBodyItems extends $dara.Model {
    static names() {
        return {
            DBInstance: 'DBInstance',
        };
    }
    static types() {
        return {
            DBInstance: { 'type': 'array', 'itemType': DescribeDBInstancesResponseBodyItemsDBInstance },
        };
    }
    validate() {
        if (Array.isArray(this.DBInstance)) {
            $dara.Model.validateArray(this.DBInstance);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDBInstancesResponseBodyItems = DescribeDBInstancesResponseBodyItems;
class DescribeDBInstancesResponseBody extends $dara.Model {
    static names() {
        return {
            items: 'Items',
            nextToken: 'NextToken',
            pageNumber: 'PageNumber',
            pageRecordCount: 'PageRecordCount',
            requestId: 'RequestId',
            totalRecordCount: 'TotalRecordCount',
        };
    }
    static types() {
        return {
            items: DescribeDBInstancesResponseBodyItems,
            nextToken: 'string',
            pageNumber: 'number',
            pageRecordCount: 'number',
            requestId: 'string',
            totalRecordCount: 'number',
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
exports.DescribeDBInstancesResponseBody = DescribeDBInstancesResponseBody;
//# sourceMappingURL=DescribeDbinstancesResponseBody.js.map