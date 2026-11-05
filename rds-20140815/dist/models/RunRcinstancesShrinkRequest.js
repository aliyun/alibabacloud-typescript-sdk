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
exports.RunRCInstancesShrinkRequest = exports.RunRCInstancesShrinkRequestTag = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class RunRCInstancesShrinkRequestTag extends $dara.Model {
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
exports.RunRCInstancesShrinkRequestTag = RunRCInstancesShrinkRequestTag;
class RunRCInstancesShrinkRequest extends $dara.Model {
    static names() {
        return {
            acuType: 'AcuType',
            amount: 'Amount',
            autoPay: 'AutoPay',
            autoRenew: 'AutoRenew',
            autoUseCoupon: 'AutoUseCoupon',
            businessInfo: 'BusinessInfo',
            clientToken: 'ClientToken',
            createAckEdgeParamShrink: 'CreateAckEdgeParam',
            createExtraParam: 'CreateExtraParam',
            createMode: 'CreateMode',
            dataDiskShrink: 'DataDisk',
            deletionProtection: 'DeletionProtection',
            deploymentSetId: 'DeploymentSetId',
            description: 'Description',
            dryRun: 'DryRun',
            hostName: 'HostName',
            imageId: 'ImageId',
            instanceChargeType: 'InstanceChargeType',
            instanceName: 'InstanceName',
            instanceType: 'InstanceType',
            internetChargeType: 'InternetChargeType',
            internetMaxBandwidthOut: 'InternetMaxBandwidthOut',
            ioOptimized: 'IoOptimized',
            keyPairName: 'KeyPairName',
            networkOptionsShrink: 'NetworkOptions',
            password: 'Password',
            passwordInherit: 'PasswordInherit',
            period: 'Period',
            periodUnit: 'PeriodUnit',
            privateIpAddress: 'PrivateIpAddress',
            promotionCode: 'PromotionCode',
            regionId: 'RegionId',
            resourceGroupId: 'ResourceGroupId',
            scheduledRule: 'ScheduledRule',
            securityEnhancementStrategy: 'SecurityEnhancementStrategy',
            securityGroupId: 'SecurityGroupId',
            securityGroupIdsShrink: 'SecurityGroupIds',
            spotStrategy: 'SpotStrategy',
            supportCase: 'SupportCase',
            systemDiskShrink: 'SystemDisk',
            tag: 'Tag',
            userData: 'UserData',
            userDataInBase64: 'UserDataInBase64',
            vSwitchId: 'VSwitchId',
            zoneId: 'ZoneId',
        };
    }
    static types() {
        return {
            acuType: 'string',
            amount: 'number',
            autoPay: 'boolean',
            autoRenew: 'boolean',
            autoUseCoupon: 'boolean',
            businessInfo: 'string',
            clientToken: 'string',
            createAckEdgeParamShrink: 'string',
            createExtraParam: 'string',
            createMode: 'string',
            dataDiskShrink: 'string',
            deletionProtection: 'boolean',
            deploymentSetId: 'string',
            description: 'string',
            dryRun: 'boolean',
            hostName: 'string',
            imageId: 'string',
            instanceChargeType: 'string',
            instanceName: 'string',
            instanceType: 'string',
            internetChargeType: 'string',
            internetMaxBandwidthOut: 'number',
            ioOptimized: 'string',
            keyPairName: 'string',
            networkOptionsShrink: 'string',
            password: 'string',
            passwordInherit: 'boolean',
            period: 'number',
            periodUnit: 'string',
            privateIpAddress: 'string',
            promotionCode: 'string',
            regionId: 'string',
            resourceGroupId: 'string',
            scheduledRule: 'string',
            securityEnhancementStrategy: 'string',
            securityGroupId: 'string',
            securityGroupIdsShrink: 'string',
            spotStrategy: 'string',
            supportCase: 'string',
            systemDiskShrink: 'string',
            tag: { 'type': 'array', 'itemType': RunRCInstancesShrinkRequestTag },
            userData: 'string',
            userDataInBase64: 'boolean',
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
exports.RunRCInstancesShrinkRequest = RunRCInstancesShrinkRequest;
//# sourceMappingURL=RunRcinstancesShrinkRequest.js.map