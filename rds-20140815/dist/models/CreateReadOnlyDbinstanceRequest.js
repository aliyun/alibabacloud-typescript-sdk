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
exports.CreateReadOnlyDBInstanceRequest = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class CreateReadOnlyDBInstanceRequest extends $dara.Model {
    static names() {
        return {
            autoCreateProxy: 'AutoCreateProxy',
            autoPay: 'AutoPay',
            autoRenew: 'AutoRenew',
            autoUseCoupon: 'AutoUseCoupon',
            bpeEnabled: 'BpeEnabled',
            burstingEnabled: 'BurstingEnabled',
            category: 'Category',
            clientToken: 'ClientToken',
            customExtraInfo: 'CustomExtraInfo',
            DBInstanceClass: 'DBInstanceClass',
            DBInstanceDescription: 'DBInstanceDescription',
            DBInstanceId: 'DBInstanceId',
            DBInstanceStorage: 'DBInstanceStorage',
            DBInstanceStorageType: 'DBInstanceStorageType',
            dedicatedHostGroupId: 'DedicatedHostGroupId',
            deletionProtection: 'DeletionProtection',
            engineVersion: 'EngineVersion',
            gdnInstanceName: 'GdnInstanceName',
            instanceNetworkType: 'InstanceNetworkType',
            instructionSetArch: 'InstructionSetArch',
            ioAccelerationEnabled: 'IoAccelerationEnabled',
            isAnalyticReadOnlyIns: 'IsAnalyticReadOnlyIns',
            ownerAccount: 'OwnerAccount',
            ownerId: 'OwnerId',
            payType: 'PayType',
            period: 'Period',
            port: 'Port',
            privateIpAddress: 'PrivateIpAddress',
            promotionCode: 'PromotionCode',
            regionId: 'RegionId',
            resourceGroupId: 'ResourceGroupId',
            resourceOwnerAccount: 'ResourceOwnerAccount',
            resourceOwnerId: 'ResourceOwnerId',
            targetDedicatedHostIdForMaster: 'TargetDedicatedHostIdForMaster',
            tddlBizType: 'TddlBizType',
            tddlRegionConfig: 'TddlRegionConfig',
            usedTime: 'UsedTime',
            VPCId: 'VPCId',
            vSwitchId: 'VSwitchId',
            zoneId: 'ZoneId',
        };
    }
    static types() {
        return {
            autoCreateProxy: 'boolean',
            autoPay: 'boolean',
            autoRenew: 'string',
            autoUseCoupon: 'boolean',
            bpeEnabled: 'string',
            burstingEnabled: 'boolean',
            category: 'string',
            clientToken: 'string',
            customExtraInfo: 'string',
            DBInstanceClass: 'string',
            DBInstanceDescription: 'string',
            DBInstanceId: 'string',
            DBInstanceStorage: 'number',
            DBInstanceStorageType: 'string',
            dedicatedHostGroupId: 'string',
            deletionProtection: 'boolean',
            engineVersion: 'string',
            gdnInstanceName: 'string',
            instanceNetworkType: 'string',
            instructionSetArch: 'string',
            ioAccelerationEnabled: 'string',
            isAnalyticReadOnlyIns: 'boolean',
            ownerAccount: 'string',
            ownerId: 'number',
            payType: 'string',
            period: 'string',
            port: 'string',
            privateIpAddress: 'string',
            promotionCode: 'string',
            regionId: 'string',
            resourceGroupId: 'string',
            resourceOwnerAccount: 'string',
            resourceOwnerId: 'number',
            targetDedicatedHostIdForMaster: 'string',
            tddlBizType: 'string',
            tddlRegionConfig: 'string',
            usedTime: 'string',
            VPCId: 'string',
            vSwitchId: 'string',
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
exports.CreateReadOnlyDBInstanceRequest = CreateReadOnlyDBInstanceRequest;
//# sourceMappingURL=CreateReadOnlyDbinstanceRequest.js.map