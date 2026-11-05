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
exports.CreateRCNodePoolRequest = exports.CreateRCNodePoolRequestTag = exports.CreateRCNodePoolRequestSystemDisk = exports.CreateRCNodePoolRequestDataDisk = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class CreateRCNodePoolRequestDataDisk extends $dara.Model {
    static names() {
        return {
            category: 'Category',
            deleteWithInstance: 'DeleteWithInstance',
            encrypted: 'Encrypted',
            performanceLevel: 'PerformanceLevel',
            size: 'Size',
        };
    }
    static types() {
        return {
            category: 'string',
            deleteWithInstance: 'boolean',
            encrypted: 'string',
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
exports.CreateRCNodePoolRequestDataDisk = CreateRCNodePoolRequestDataDisk;
class CreateRCNodePoolRequestSystemDisk extends $dara.Model {
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
exports.CreateRCNodePoolRequestSystemDisk = CreateRCNodePoolRequestSystemDisk;
class CreateRCNodePoolRequestTag extends $dara.Model {
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
exports.CreateRCNodePoolRequestTag = CreateRCNodePoolRequestTag;
class CreateRCNodePoolRequest extends $dara.Model {
    static names() {
        return {
            amount: 'Amount',
            autoPay: 'AutoPay',
            autoRenew: 'AutoRenew',
            clientToken: 'ClientToken',
            clusterId: 'ClusterId',
            createMode: 'CreateMode',
            dataDisk: 'DataDisk',
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
            nodePoolName: 'NodePoolName',
            password: 'Password',
            period: 'Period',
            periodUnit: 'PeriodUnit',
            regionId: 'RegionId',
            resourceGroupId: 'ResourceGroupId',
            securityEnhancementStrategy: 'SecurityEnhancementStrategy',
            securityGroupId: 'SecurityGroupId',
            spotStrategy: 'SpotStrategy',
            supportCase: 'SupportCase',
            systemDisk: 'SystemDisk',
            tag: 'Tag',
            userData: 'UserData',
            vSwitchId: 'VSwitchId',
            zoneId: 'ZoneId',
        };
    }
    static types() {
        return {
            amount: 'number',
            autoPay: 'boolean',
            autoRenew: 'boolean',
            clientToken: 'string',
            clusterId: 'string',
            createMode: 'string',
            dataDisk: { 'type': 'array', 'itemType': CreateRCNodePoolRequestDataDisk },
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
            nodePoolName: 'string',
            password: 'string',
            period: 'number',
            periodUnit: 'string',
            regionId: 'string',
            resourceGroupId: 'string',
            securityEnhancementStrategy: 'string',
            securityGroupId: 'string',
            spotStrategy: 'string',
            supportCase: 'string',
            systemDisk: CreateRCNodePoolRequestSystemDisk,
            tag: { 'type': 'array', 'itemType': CreateRCNodePoolRequestTag },
            userData: 'string',
            vSwitchId: 'string',
            zoneId: 'string',
        };
    }
    validate() {
        if (Array.isArray(this.dataDisk)) {
            $dara.Model.validateArray(this.dataDisk);
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
exports.CreateRCNodePoolRequest = CreateRCNodePoolRequest;
//# sourceMappingURL=CreateRcnodePoolRequest.js.map