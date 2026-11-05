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
exports.ModifyDBInstanceSpecShrinkRequest = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class ModifyDBInstanceSpecShrinkRequest extends $dara.Model {
    static names() {
        return {
            allocateStrategy: 'AllocateStrategy',
            allowMajorVersionUpgrade: 'AllowMajorVersionUpgrade',
            autoUseCoupon: 'AutoUseCoupon',
            burstingEnabled: 'BurstingEnabled',
            category: 'Category',
            coldDataEnabled: 'ColdDataEnabled',
            compressionMode: 'CompressionMode',
            DBInstanceClass: 'DBInstanceClass',
            DBInstanceId: 'DBInstanceId',
            DBInstanceStorage: 'DBInstanceStorage',
            DBInstanceStorageType: 'DBInstanceStorageType',
            dedicatedHostGroupId: 'DedicatedHostGroupId',
            direction: 'Direction',
            effectiveTime: 'EffectiveTime',
            engineVersion: 'EngineVersion',
            ioAccelerationEnabled: 'IoAccelerationEnabled',
            optimizedWrites: 'OptimizedWrites',
            ownerAccount: 'OwnerAccount',
            ownerId: 'OwnerId',
            payType: 'PayType',
            promotionCode: 'PromotionCode',
            readOnlyDBInstanceClass: 'ReadOnlyDBInstanceClass',
            resourceGroupId: 'ResourceGroupId',
            resourceOwnerAccount: 'ResourceOwnerAccount',
            resourceOwnerId: 'ResourceOwnerId',
            serverlessConfigurationShrink: 'ServerlessConfiguration',
            sourceBiz: 'SourceBiz',
            switchTime: 'SwitchTime',
            targetMinorVersion: 'TargetMinorVersion',
            usedTime: 'UsedTime',
            vSwitchId: 'VSwitchId',
            zoneId: 'ZoneId',
            zoneIdSlave1: 'ZoneIdSlave1',
        };
    }
    static types() {
        return {
            allocateStrategy: 'string',
            allowMajorVersionUpgrade: 'boolean',
            autoUseCoupon: 'boolean',
            burstingEnabled: 'boolean',
            category: 'string',
            coldDataEnabled: 'boolean',
            compressionMode: 'string',
            DBInstanceClass: 'string',
            DBInstanceId: 'string',
            DBInstanceStorage: 'number',
            DBInstanceStorageType: 'string',
            dedicatedHostGroupId: 'string',
            direction: 'string',
            effectiveTime: 'string',
            engineVersion: 'string',
            ioAccelerationEnabled: 'string',
            optimizedWrites: 'string',
            ownerAccount: 'string',
            ownerId: 'number',
            payType: 'string',
            promotionCode: 'string',
            readOnlyDBInstanceClass: 'string',
            resourceGroupId: 'string',
            resourceOwnerAccount: 'string',
            resourceOwnerId: 'number',
            serverlessConfigurationShrink: 'string',
            sourceBiz: 'string',
            switchTime: 'string',
            targetMinorVersion: 'string',
            usedTime: 'number',
            vSwitchId: 'string',
            zoneId: 'string',
            zoneIdSlave1: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ModifyDBInstanceSpecShrinkRequest = ModifyDBInstanceSpecShrinkRequest;
//# sourceMappingURL=ModifyDbinstanceSpecShrinkRequest.js.map