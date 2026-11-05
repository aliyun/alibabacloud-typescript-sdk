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
exports.DescribeDBInstancesForCloneResponseBody = exports.DescribeDBInstancesForCloneResponseBodyItems = exports.DescribeDBInstancesForCloneResponseBodyItemsDBInstance = exports.DescribeDBInstancesForCloneResponseBodyItemsDBInstanceReadOnlyDBInstanceIds = exports.DescribeDBInstancesForCloneResponseBodyItemsDBInstanceReadOnlyDBInstanceIdsReadOnlyDBInstanceId = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeDBInstancesForCloneResponseBodyItemsDBInstanceReadOnlyDBInstanceIdsReadOnlyDBInstanceId extends $dara.Model {
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
exports.DescribeDBInstancesForCloneResponseBodyItemsDBInstanceReadOnlyDBInstanceIdsReadOnlyDBInstanceId = DescribeDBInstancesForCloneResponseBodyItemsDBInstanceReadOnlyDBInstanceIdsReadOnlyDBInstanceId;
class DescribeDBInstancesForCloneResponseBodyItemsDBInstanceReadOnlyDBInstanceIds extends $dara.Model {
    static names() {
        return {
            readOnlyDBInstanceId: 'ReadOnlyDBInstanceId',
        };
    }
    static types() {
        return {
            readOnlyDBInstanceId: { 'type': 'array', 'itemType': DescribeDBInstancesForCloneResponseBodyItemsDBInstanceReadOnlyDBInstanceIdsReadOnlyDBInstanceId },
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
exports.DescribeDBInstancesForCloneResponseBodyItemsDBInstanceReadOnlyDBInstanceIds = DescribeDBInstancesForCloneResponseBodyItemsDBInstanceReadOnlyDBInstanceIds;
class DescribeDBInstancesForCloneResponseBodyItemsDBInstance extends $dara.Model {
    static names() {
        return {
            category: 'Category',
            connectionMode: 'ConnectionMode',
            createTime: 'CreateTime',
            DBInstanceClass: 'DBInstanceClass',
            DBInstanceDescription: 'DBInstanceDescription',
            DBInstanceId: 'DBInstanceId',
            DBInstanceNetType: 'DBInstanceNetType',
            DBInstanceStatus: 'DBInstanceStatus',
            DBInstanceStorageType: 'DBInstanceStorageType',
            DBInstanceType: 'DBInstanceType',
            destroyTime: 'DestroyTime',
            engine: 'Engine',
            engineVersion: 'EngineVersion',
            expireTime: 'ExpireTime',
            guardDBInstanceId: 'GuardDBInstanceId',
            insId: 'InsId',
            instanceNetworkType: 'InstanceNetworkType',
            lockMode: 'LockMode',
            lockReason: 'LockReason',
            masterInstanceId: 'MasterInstanceId',
            mutriORsignle: 'MutriORsignle',
            payType: 'PayType',
            readOnlyDBInstanceIds: 'ReadOnlyDBInstanceIds',
            regionId: 'RegionId',
            replicateId: 'ReplicateId',
            resourceGroupId: 'ResourceGroupId',
            tempDBInstanceId: 'TempDBInstanceId',
            vSwitchId: 'VSwitchId',
            vpcCloudInstanceId: 'VpcCloudInstanceId',
            vpcId: 'VpcId',
            zoneId: 'ZoneId',
        };
    }
    static types() {
        return {
            category: 'string',
            connectionMode: 'string',
            createTime: 'string',
            DBInstanceClass: 'string',
            DBInstanceDescription: 'string',
            DBInstanceId: 'string',
            DBInstanceNetType: 'string',
            DBInstanceStatus: 'string',
            DBInstanceStorageType: 'string',
            DBInstanceType: 'string',
            destroyTime: 'string',
            engine: 'string',
            engineVersion: 'string',
            expireTime: 'string',
            guardDBInstanceId: 'string',
            insId: 'number',
            instanceNetworkType: 'string',
            lockMode: 'string',
            lockReason: 'string',
            masterInstanceId: 'string',
            mutriORsignle: 'boolean',
            payType: 'string',
            readOnlyDBInstanceIds: DescribeDBInstancesForCloneResponseBodyItemsDBInstanceReadOnlyDBInstanceIds,
            regionId: 'string',
            replicateId: 'string',
            resourceGroupId: 'string',
            tempDBInstanceId: 'string',
            vSwitchId: 'string',
            vpcCloudInstanceId: 'string',
            vpcId: 'string',
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
exports.DescribeDBInstancesForCloneResponseBodyItemsDBInstance = DescribeDBInstancesForCloneResponseBodyItemsDBInstance;
class DescribeDBInstancesForCloneResponseBodyItems extends $dara.Model {
    static names() {
        return {
            DBInstance: 'DBInstance',
        };
    }
    static types() {
        return {
            DBInstance: { 'type': 'array', 'itemType': DescribeDBInstancesForCloneResponseBodyItemsDBInstance },
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
exports.DescribeDBInstancesForCloneResponseBodyItems = DescribeDBInstancesForCloneResponseBodyItems;
class DescribeDBInstancesForCloneResponseBody extends $dara.Model {
    static names() {
        return {
            items: 'Items',
            pageNumber: 'PageNumber',
            pageRecordCount: 'PageRecordCount',
            requestId: 'RequestId',
            totalRecordCount: 'TotalRecordCount',
        };
    }
    static types() {
        return {
            items: DescribeDBInstancesForCloneResponseBodyItems,
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
exports.DescribeDBInstancesForCloneResponseBody = DescribeDBInstancesForCloneResponseBody;
//# sourceMappingURL=DescribeDbinstancesForCloneResponseBody.js.map