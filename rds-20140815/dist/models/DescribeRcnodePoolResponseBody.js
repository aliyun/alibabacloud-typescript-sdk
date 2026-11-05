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
exports.DescribeRCNodePoolResponseBody = exports.DescribeRCNodePoolResponseBodyNodePoolList = exports.DescribeRCNodePoolResponseBodyNodePoolListTag = exports.DescribeRCNodePoolResponseBodyNodePoolListSystemDisk = exports.DescribeRCNodePoolResponseBodyNodePoolListDataDisk = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeRCNodePoolResponseBodyNodePoolListDataDisk extends $dara.Model {
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
exports.DescribeRCNodePoolResponseBodyNodePoolListDataDisk = DescribeRCNodePoolResponseBodyNodePoolListDataDisk;
class DescribeRCNodePoolResponseBodyNodePoolListSystemDisk extends $dara.Model {
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
exports.DescribeRCNodePoolResponseBodyNodePoolListSystemDisk = DescribeRCNodePoolResponseBodyNodePoolListSystemDisk;
class DescribeRCNodePoolResponseBodyNodePoolListTag extends $dara.Model {
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
exports.DescribeRCNodePoolResponseBodyNodePoolListTag = DescribeRCNodePoolResponseBodyNodePoolListTag;
class DescribeRCNodePoolResponseBodyNodePoolList extends $dara.Model {
    static names() {
        return {
            autoPay: 'AutoPay',
            autoRenew: 'AutoRenew',
            clusterId: 'ClusterId',
            createMode: 'CreateMode',
            dataDisk: 'DataDisk',
            deploymentSetId: 'DeploymentSetId',
            description: 'Description',
            hostName: 'HostName',
            imageId: 'ImageId',
            instanceChargeType: 'InstanceChargeType',
            instanceName: 'InstanceName',
            instanceType: 'InstanceType',
            internetChargeType: 'InternetChargeType',
            internetMaxBandwidthOut: 'InternetMaxBandwidthOut',
            ioOptimized: 'IoOptimized',
            keyPairName: 'KeyPairName',
            nodePoolId: 'NodePoolId',
            nodePoolName: 'NodePoolName',
            password: 'Password',
            period: 'Period',
            periodUnit: 'PeriodUnit',
            regionId: 'RegionId',
            resourceGroupId: 'ResourceGroupId',
            securityEnhancementStrategy: 'SecurityEnhancementStrategy',
            securityGroupId: 'SecurityGroupId',
            spotStrategy: 'SpotStrategy',
            systemDisk: 'SystemDisk',
            tag: 'Tag',
            vSwitchId: 'VSwitchId',
            zoneId: 'ZoneId',
        };
    }
    static types() {
        return {
            autoPay: 'boolean',
            autoRenew: 'boolean',
            clusterId: 'string',
            createMode: 'string',
            dataDisk: { 'type': 'array', 'itemType': DescribeRCNodePoolResponseBodyNodePoolListDataDisk },
            deploymentSetId: 'string',
            description: 'string',
            hostName: 'string',
            imageId: 'string',
            instanceChargeType: 'string',
            instanceName: 'string',
            instanceType: 'string',
            internetChargeType: 'string',
            internetMaxBandwidthOut: 'number',
            ioOptimized: 'string',
            keyPairName: 'string',
            nodePoolId: 'string',
            nodePoolName: 'string',
            password: 'string',
            period: 'number',
            periodUnit: 'string',
            regionId: 'string',
            resourceGroupId: 'string',
            securityEnhancementStrategy: 'string',
            securityGroupId: 'string',
            spotStrategy: 'string',
            systemDisk: DescribeRCNodePoolResponseBodyNodePoolListSystemDisk,
            tag: { 'type': 'array', 'itemType': DescribeRCNodePoolResponseBodyNodePoolListTag },
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
exports.DescribeRCNodePoolResponseBodyNodePoolList = DescribeRCNodePoolResponseBodyNodePoolList;
class DescribeRCNodePoolResponseBody extends $dara.Model {
    static names() {
        return {
            nodePoolList: 'NodePoolList',
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            nodePoolList: { 'type': 'array', 'itemType': DescribeRCNodePoolResponseBodyNodePoolList },
            requestId: 'string',
        };
    }
    validate() {
        if (Array.isArray(this.nodePoolList)) {
            $dara.Model.validateArray(this.nodePoolList);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeRCNodePoolResponseBody = DescribeRCNodePoolResponseBody;
//# sourceMappingURL=DescribeRcnodePoolResponseBody.js.map