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
exports.CreateDBInstanceRequest = exports.CreateDBInstanceRequestTag = exports.CreateDBInstanceRequestServerlessConfig = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class CreateDBInstanceRequestServerlessConfig extends $dara.Model {
    static names() {
        return {
            autoPause: 'AutoPause',
            maxCapacity: 'MaxCapacity',
            minCapacity: 'MinCapacity',
            switchForce: 'SwitchForce',
        };
    }
    static types() {
        return {
            autoPause: 'boolean',
            maxCapacity: 'number',
            minCapacity: 'number',
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
exports.CreateDBInstanceRequestServerlessConfig = CreateDBInstanceRequestServerlessConfig;
class CreateDBInstanceRequestTag extends $dara.Model {
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
exports.CreateDBInstanceRequestTag = CreateDBInstanceRequestTag;
class CreateDBInstanceRequest extends $dara.Model {
    static names() {
        return {
            amount: 'Amount',
            autoCreateProxy: 'AutoCreateProxy',
            autoPay: 'AutoPay',
            autoRenew: 'AutoRenew',
            autoUpgradeMinorVersion: 'AutoUpgradeMinorVersion',
            autoUseCoupon: 'AutoUseCoupon',
            babelfishConfig: 'BabelfishConfig',
            bpeEnabled: 'BpeEnabled',
            burstingEnabled: 'BurstingEnabled',
            businessInfo: 'BusinessInfo',
            category: 'Category',
            clientToken: 'ClientToken',
            coldDataEnabled: 'ColdDataEnabled',
            connectionMode: 'ConnectionMode',
            connectionString: 'ConnectionString',
            createStrategy: 'CreateStrategy',
            customExtraInfo: 'CustomExtraInfo',
            DBInstanceClass: 'DBInstanceClass',
            DBInstanceDescription: 'DBInstanceDescription',
            DBInstanceNetType: 'DBInstanceNetType',
            DBInstanceStorage: 'DBInstanceStorage',
            DBInstanceStorageType: 'DBInstanceStorageType',
            DBIsIgnoreCase: 'DBIsIgnoreCase',
            DBParamGroupId: 'DBParamGroupId',
            DBTimeZone: 'DBTimeZone',
            dedicatedHostGroupId: 'DedicatedHostGroupId',
            deletionProtection: 'DeletionProtection',
            dryRun: 'DryRun',
            encryptionKey: 'EncryptionKey',
            engine: 'Engine',
            engineVersion: 'EngineVersion',
            externalReplication: 'ExternalReplication',
            instanceNetworkType: 'InstanceNetworkType',
            ioAccelerationEnabled: 'IoAccelerationEnabled',
            optimizedWrites: 'OptimizedWrites',
            payType: 'PayType',
            period: 'Period',
            port: 'Port',
            privateIpAddress: 'PrivateIpAddress',
            promotionCode: 'PromotionCode',
            regionId: 'RegionId',
            resourceGroupId: 'ResourceGroupId',
            resourceOwnerId: 'ResourceOwnerId',
            roleARN: 'RoleARN',
            securityIPList: 'SecurityIPList',
            serverlessConfig: 'ServerlessConfig',
            storageAutoScale: 'StorageAutoScale',
            storageThreshold: 'StorageThreshold',
            storageUpperBound: 'StorageUpperBound',
            systemDBCharset: 'SystemDBCharset',
            tag: 'Tag',
            targetDedicatedHostIdForLog: 'TargetDedicatedHostIdForLog',
            targetDedicatedHostIdForMaster: 'TargetDedicatedHostIdForMaster',
            targetDedicatedHostIdForSlave: 'TargetDedicatedHostIdForSlave',
            targetMinorVersion: 'TargetMinorVersion',
            usedTime: 'UsedTime',
            userBackupId: 'UserBackupId',
            VPCId: 'VPCId',
            vSwitchId: 'VSwitchId',
            whitelistTemplateList: 'WhitelistTemplateList',
            zoneId: 'ZoneId',
            zoneIdSlave1: 'ZoneIdSlave1',
            zoneIdSlave2: 'ZoneIdSlave2',
        };
    }
    static types() {
        return {
            amount: 'number',
            autoCreateProxy: 'boolean',
            autoPay: 'boolean',
            autoRenew: 'string',
            autoUpgradeMinorVersion: 'string',
            autoUseCoupon: 'boolean',
            babelfishConfig: 'string',
            bpeEnabled: 'string',
            burstingEnabled: 'boolean',
            businessInfo: 'string',
            category: 'string',
            clientToken: 'string',
            coldDataEnabled: 'boolean',
            connectionMode: 'string',
            connectionString: 'string',
            createStrategy: 'string',
            customExtraInfo: 'string',
            DBInstanceClass: 'string',
            DBInstanceDescription: 'string',
            DBInstanceNetType: 'string',
            DBInstanceStorage: 'number',
            DBInstanceStorageType: 'string',
            DBIsIgnoreCase: 'string',
            DBParamGroupId: 'string',
            DBTimeZone: 'string',
            dedicatedHostGroupId: 'string',
            deletionProtection: 'boolean',
            dryRun: 'boolean',
            encryptionKey: 'string',
            engine: 'string',
            engineVersion: 'string',
            externalReplication: 'boolean',
            instanceNetworkType: 'string',
            ioAccelerationEnabled: 'string',
            optimizedWrites: 'string',
            payType: 'string',
            period: 'string',
            port: 'string',
            privateIpAddress: 'string',
            promotionCode: 'string',
            regionId: 'string',
            resourceGroupId: 'string',
            resourceOwnerId: 'number',
            roleARN: 'string',
            securityIPList: 'string',
            serverlessConfig: CreateDBInstanceRequestServerlessConfig,
            storageAutoScale: 'string',
            storageThreshold: 'number',
            storageUpperBound: 'number',
            systemDBCharset: 'string',
            tag: { 'type': 'array', 'itemType': CreateDBInstanceRequestTag },
            targetDedicatedHostIdForLog: 'string',
            targetDedicatedHostIdForMaster: 'string',
            targetDedicatedHostIdForSlave: 'string',
            targetMinorVersion: 'string',
            usedTime: 'string',
            userBackupId: 'string',
            VPCId: 'string',
            vSwitchId: 'string',
            whitelistTemplateList: 'string',
            zoneId: 'string',
            zoneIdSlave1: 'string',
            zoneIdSlave2: 'string',
        };
    }
    validate() {
        if (this.serverlessConfig && typeof this.serverlessConfig.validate === 'function') {
            this.serverlessConfig.validate();
        }
        if (Array.isArray(this.tag)) {
            $dara.Model.validateArray(this.tag);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.CreateDBInstanceRequest = CreateDBInstanceRequest;
//# sourceMappingURL=CreateDbinstanceRequest.js.map