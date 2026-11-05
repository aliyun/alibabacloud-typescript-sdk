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
exports.RunRCInstancesRequest = exports.RunRCInstancesRequestTag = exports.RunRCInstancesRequestSystemDisk = exports.RunRCInstancesRequestNetworkOptions = exports.RunRCInstancesRequestDataDisk = exports.RunRCInstancesRequestCreateAckEdgeParam = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class RunRCInstancesRequestCreateAckEdgeParam extends $dara.Model {
    static names() {
        return {
            clusterId: 'ClusterId',
            nodePoolId: 'NodePoolId',
        };
    }
    static types() {
        return {
            clusterId: 'string',
            nodePoolId: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.RunRCInstancesRequestCreateAckEdgeParam = RunRCInstancesRequestCreateAckEdgeParam;
class RunRCInstancesRequestDataDisk extends $dara.Model {
    static names() {
        return {
            category: 'Category',
            deleteWithInstance: 'DeleteWithInstance',
            device: 'Device',
            encrypted: 'Encrypted',
            performanceLevel: 'PerformanceLevel',
            size: 'Size',
            snapshotId: 'SnapshotId',
        };
    }
    static types() {
        return {
            category: 'string',
            deleteWithInstance: 'boolean',
            device: 'string',
            encrypted: 'string',
            performanceLevel: 'string',
            size: 'number',
            snapshotId: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.RunRCInstancesRequestDataDisk = RunRCInstancesRequestDataDisk;
class RunRCInstancesRequestNetworkOptions extends $dara.Model {
    static names() {
        return {
            enableJumboFrame: 'EnableJumboFrame',
        };
    }
    static types() {
        return {
            enableJumboFrame: 'boolean',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.RunRCInstancesRequestNetworkOptions = RunRCInstancesRequestNetworkOptions;
class RunRCInstancesRequestSystemDisk extends $dara.Model {
    static names() {
        return {
            category: 'Category',
            performanceLevel: 'PerformanceLevel',
            size: 'Size',
        };
    }
    static types() {
        return {
            category: 'string',
            performanceLevel: 'string',
            size: 'number',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.RunRCInstancesRequestSystemDisk = RunRCInstancesRequestSystemDisk;
class RunRCInstancesRequestTag extends $dara.Model {
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
exports.RunRCInstancesRequestTag = RunRCInstancesRequestTag;
class RunRCInstancesRequest extends $dara.Model {
    static names() {
        return {
            acuType: 'AcuType',
            amount: 'Amount',
            autoPay: 'AutoPay',
            autoRenew: 'AutoRenew',
            autoUseCoupon: 'AutoUseCoupon',
            businessInfo: 'BusinessInfo',
            clientToken: 'ClientToken',
            createAckEdgeParam: 'CreateAckEdgeParam',
            createExtraParam: 'CreateExtraParam',
            createMode: 'CreateMode',
            dataDisk: 'DataDisk',
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
            networkOptions: 'NetworkOptions',
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
            securityGroupIds: 'SecurityGroupIds',
            spotStrategy: 'SpotStrategy',
            supportCase: 'SupportCase',
            systemDisk: 'SystemDisk',
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
            createAckEdgeParam: RunRCInstancesRequestCreateAckEdgeParam,
            createExtraParam: 'string',
            createMode: 'string',
            dataDisk: { 'type': 'array', 'itemType': RunRCInstancesRequestDataDisk },
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
            networkOptions: RunRCInstancesRequestNetworkOptions,
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
            securityGroupIds: { 'type': 'array', 'itemType': 'string' },
            spotStrategy: 'string',
            supportCase: 'string',
            systemDisk: RunRCInstancesRequestSystemDisk,
            tag: { 'type': 'array', 'itemType': RunRCInstancesRequestTag },
            userData: 'string',
            userDataInBase64: 'boolean',
            vSwitchId: 'string',
            zoneId: 'string',
        };
    }
    validate() {
        if (this.createAckEdgeParam && typeof this.createAckEdgeParam.validate === 'function') {
            this.createAckEdgeParam.validate();
        }
        if (Array.isArray(this.dataDisk)) {
            $dara.Model.validateArray(this.dataDisk);
        }
        if (this.networkOptions && typeof this.networkOptions.validate === 'function') {
            this.networkOptions.validate();
        }
        if (Array.isArray(this.securityGroupIds)) {
            $dara.Model.validateArray(this.securityGroupIds);
        }
        if (this.systemDisk && typeof this.systemDisk.validate === 'function') {
            this.systemDisk.validate();
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
exports.RunRCInstancesRequest = RunRCInstancesRequest;
//# sourceMappingURL=RunRcinstancesRequest.js.map