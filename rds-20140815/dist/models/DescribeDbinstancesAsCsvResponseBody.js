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
exports.DescribeDBInstancesAsCsvResponseBody = exports.DescribeDBInstancesAsCsvResponseBodyItems = exports.DescribeDBInstancesAsCsvResponseBodyItemsDBInstanceAttribute = exports.DescribeDBInstancesAsCsvResponseBodyItemsDBInstanceAttributeSlaveZones = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeDBInstancesAsCsvResponseBodyItemsDBInstanceAttributeSlaveZones extends $dara.Model {
    static names() {
        return {
            slaveRegion: 'slaveRegion',
        };
    }
    static types() {
        return {
            slaveRegion: { 'type': 'array', 'itemType': 'string' },
        };
    }
    validate() {
        if (Array.isArray(this.slaveRegion)) {
            $dara.Model.validateArray(this.slaveRegion);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDBInstancesAsCsvResponseBodyItemsDBInstanceAttributeSlaveZones = DescribeDBInstancesAsCsvResponseBodyItemsDBInstanceAttributeSlaveZones;
class DescribeDBInstancesAsCsvResponseBodyItemsDBInstanceAttribute extends $dara.Model {
    static names() {
        return {
            accountMaxQuantity: 'AccountMaxQuantity',
            accountType: 'AccountType',
            availabilityValue: 'AvailabilityValue',
            category: 'Category',
            connectionMode: 'ConnectionMode',
            connectionString: 'ConnectionString',
            creationTime: 'CreationTime',
            DBInstanceCPU: 'DBInstanceCPU',
            DBInstanceClass: 'DBInstanceClass',
            DBInstanceClassType: 'DBInstanceClassType',
            DBInstanceDescription: 'DBInstanceDescription',
            DBInstanceId: 'DBInstanceId',
            DBInstanceMemory: 'DBInstanceMemory',
            DBInstanceNetType: 'DBInstanceNetType',
            DBInstanceStatus: 'DBInstanceStatus',
            DBInstanceStorage: 'DBInstanceStorage',
            DBInstanceStorageType: 'DBInstanceStorageType',
            DBInstanceType: 'DBInstanceType',
            DBMaxQuantity: 'DBMaxQuantity',
            engine: 'Engine',
            engineVersion: 'EngineVersion',
            expireTime: 'ExpireTime',
            exportKey: 'ExportKey',
            guardDBInstanceId: 'GuardDBInstanceId',
            incrementSourceDBInstanceId: 'IncrementSourceDBInstanceId',
            instanceNetworkType: 'InstanceNetworkType',
            lockMode: 'LockMode',
            lockReason: 'LockReason',
            maintainTime: 'MaintainTime',
            masterInstanceId: 'MasterInstanceId',
            maxConnections: 'MaxConnections',
            maxIOPS: 'MaxIOPS',
            payType: 'PayType',
            port: 'Port',
            readDelayTime: 'ReadDelayTime',
            regionId: 'RegionId',
            securityIPList: 'SecurityIPList',
            slaveZones: 'SlaveZones',
            supportUpgradeAccountType: 'SupportUpgradeAccountType',
            tags: 'Tags',
            tempDBInstanceId: 'TempDBInstanceId',
            vSwitchId: 'VSwitchId',
            vpcId: 'VpcId',
            zoneId: 'ZoneId',
        };
    }
    static types() {
        return {
            accountMaxQuantity: 'number',
            accountType: 'string',
            availabilityValue: 'string',
            category: 'string',
            connectionMode: 'string',
            connectionString: 'string',
            creationTime: 'string',
            DBInstanceCPU: 'string',
            DBInstanceClass: 'string',
            DBInstanceClassType: 'string',
            DBInstanceDescription: 'string',
            DBInstanceId: 'string',
            DBInstanceMemory: 'number',
            DBInstanceNetType: 'string',
            DBInstanceStatus: 'string',
            DBInstanceStorage: 'number',
            DBInstanceStorageType: 'string',
            DBInstanceType: 'string',
            DBMaxQuantity: 'number',
            engine: 'string',
            engineVersion: 'string',
            expireTime: 'string',
            exportKey: 'string',
            guardDBInstanceId: 'string',
            incrementSourceDBInstanceId: 'string',
            instanceNetworkType: 'string',
            lockMode: 'string',
            lockReason: 'string',
            maintainTime: 'string',
            masterInstanceId: 'string',
            maxConnections: 'number',
            maxIOPS: 'number',
            payType: 'string',
            port: 'string',
            readDelayTime: 'string',
            regionId: 'string',
            securityIPList: 'string',
            slaveZones: DescribeDBInstancesAsCsvResponseBodyItemsDBInstanceAttributeSlaveZones,
            supportUpgradeAccountType: 'string',
            tags: 'string',
            tempDBInstanceId: 'string',
            vSwitchId: 'string',
            vpcId: 'string',
            zoneId: 'string',
        };
    }
    validate() {
        if (this.slaveZones && typeof this.slaveZones.validate === 'function') {
            this.slaveZones.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDBInstancesAsCsvResponseBodyItemsDBInstanceAttribute = DescribeDBInstancesAsCsvResponseBodyItemsDBInstanceAttribute;
class DescribeDBInstancesAsCsvResponseBodyItems extends $dara.Model {
    static names() {
        return {
            DBInstanceAttribute: 'DBInstanceAttribute',
        };
    }
    static types() {
        return {
            DBInstanceAttribute: { 'type': 'array', 'itemType': DescribeDBInstancesAsCsvResponseBodyItemsDBInstanceAttribute },
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
exports.DescribeDBInstancesAsCsvResponseBodyItems = DescribeDBInstancesAsCsvResponseBodyItems;
class DescribeDBInstancesAsCsvResponseBody extends $dara.Model {
    static names() {
        return {
            items: 'Items',
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            items: DescribeDBInstancesAsCsvResponseBodyItems,
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
exports.DescribeDBInstancesAsCsvResponseBody = DescribeDBInstancesAsCsvResponseBody;
//# sourceMappingURL=DescribeDbinstancesAsCsvResponseBody.js.map