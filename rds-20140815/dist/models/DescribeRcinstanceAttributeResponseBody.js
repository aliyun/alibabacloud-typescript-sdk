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
exports.DescribeRCInstanceAttributeResponseBody = exports.DescribeRCInstanceAttributeResponseBodyVpcAttributes = exports.DescribeRCInstanceAttributeResponseBodyVpcAttributesPrivateIpAddress = exports.DescribeRCInstanceAttributeResponseBodyTags = exports.DescribeRCInstanceAttributeResponseBodyTagsTag = exports.DescribeRCInstanceAttributeResponseBodySystemDisk = exports.DescribeRCInstanceAttributeResponseBodySecurityGroupIds = exports.DescribeRCInstanceAttributeResponseBodyPublicIpAddress = exports.DescribeRCInstanceAttributeResponseBodyOperationLocks = exports.DescribeRCInstanceAttributeResponseBodyOperationLocksLockReason = exports.DescribeRCInstanceAttributeResponseBodyInnerIpAddress = exports.DescribeRCInstanceAttributeResponseBodyEipAddress = exports.DescribeRCInstanceAttributeResponseBodyDedicatedHostAttribute = exports.DescribeRCInstanceAttributeResponseBodyDataDisks = exports.DescribeRCInstanceAttributeResponseBodyDataDisksDataDisk = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeRCInstanceAttributeResponseBodyDataDisksDataDisk extends $dara.Model {
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
exports.DescribeRCInstanceAttributeResponseBodyDataDisksDataDisk = DescribeRCInstanceAttributeResponseBodyDataDisksDataDisk;
class DescribeRCInstanceAttributeResponseBodyDataDisks extends $dara.Model {
    static names() {
        return {
            dataDisk: 'DataDisk',
        };
    }
    static types() {
        return {
            dataDisk: { 'type': 'array', 'itemType': DescribeRCInstanceAttributeResponseBodyDataDisksDataDisk },
        };
    }
    validate() {
        if (Array.isArray(this.dataDisk)) {
            $dara.Model.validateArray(this.dataDisk);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeRCInstanceAttributeResponseBodyDataDisks = DescribeRCInstanceAttributeResponseBodyDataDisks;
class DescribeRCInstanceAttributeResponseBodyDedicatedHostAttribute extends $dara.Model {
    static names() {
        return {
            dedicatedHostId: 'DedicatedHostId',
            dedicatedHostName: 'DedicatedHostName',
        };
    }
    static types() {
        return {
            dedicatedHostId: 'string',
            dedicatedHostName: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeRCInstanceAttributeResponseBodyDedicatedHostAttribute = DescribeRCInstanceAttributeResponseBodyDedicatedHostAttribute;
class DescribeRCInstanceAttributeResponseBodyEipAddress extends $dara.Model {
    static names() {
        return {
            allocationId: 'AllocationId',
            bandwidth: 'Bandwidth',
            internetChargeType: 'InternetChargeType',
            ipAddress: 'IpAddress',
        };
    }
    static types() {
        return {
            allocationId: 'string',
            bandwidth: 'number',
            internetChargeType: 'string',
            ipAddress: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeRCInstanceAttributeResponseBodyEipAddress = DescribeRCInstanceAttributeResponseBodyEipAddress;
class DescribeRCInstanceAttributeResponseBodyInnerIpAddress extends $dara.Model {
    static names() {
        return {
            ipAddress: 'IpAddress',
        };
    }
    static types() {
        return {
            ipAddress: { 'type': 'array', 'itemType': 'string' },
        };
    }
    validate() {
        if (Array.isArray(this.ipAddress)) {
            $dara.Model.validateArray(this.ipAddress);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeRCInstanceAttributeResponseBodyInnerIpAddress = DescribeRCInstanceAttributeResponseBodyInnerIpAddress;
class DescribeRCInstanceAttributeResponseBodyOperationLocksLockReason extends $dara.Model {
    static names() {
        return {
            lockReason: 'LockReason',
        };
    }
    static types() {
        return {
            lockReason: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeRCInstanceAttributeResponseBodyOperationLocksLockReason = DescribeRCInstanceAttributeResponseBodyOperationLocksLockReason;
class DescribeRCInstanceAttributeResponseBodyOperationLocks extends $dara.Model {
    static names() {
        return {
            lockReason: 'LockReason',
        };
    }
    static types() {
        return {
            lockReason: { 'type': 'array', 'itemType': DescribeRCInstanceAttributeResponseBodyOperationLocksLockReason },
        };
    }
    validate() {
        if (Array.isArray(this.lockReason)) {
            $dara.Model.validateArray(this.lockReason);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeRCInstanceAttributeResponseBodyOperationLocks = DescribeRCInstanceAttributeResponseBodyOperationLocks;
class DescribeRCInstanceAttributeResponseBodyPublicIpAddress extends $dara.Model {
    static names() {
        return {
            ipAddress: 'IpAddress',
        };
    }
    static types() {
        return {
            ipAddress: { 'type': 'array', 'itemType': 'string' },
        };
    }
    validate() {
        if (Array.isArray(this.ipAddress)) {
            $dara.Model.validateArray(this.ipAddress);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeRCInstanceAttributeResponseBodyPublicIpAddress = DescribeRCInstanceAttributeResponseBodyPublicIpAddress;
class DescribeRCInstanceAttributeResponseBodySecurityGroupIds extends $dara.Model {
    static names() {
        return {
            securityGroupId: 'SecurityGroupId',
        };
    }
    static types() {
        return {
            securityGroupId: { 'type': 'array', 'itemType': 'string' },
        };
    }
    validate() {
        if (Array.isArray(this.securityGroupId)) {
            $dara.Model.validateArray(this.securityGroupId);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeRCInstanceAttributeResponseBodySecurityGroupIds = DescribeRCInstanceAttributeResponseBodySecurityGroupIds;
class DescribeRCInstanceAttributeResponseBodySystemDisk extends $dara.Model {
    static names() {
        return {
            deleteWithInstance: 'DeleteWithInstance',
            encrypted: 'Encrypted',
            systemDiskCategory: 'SystemDiskCategory',
            systemDiskPerformanceLevel: 'SystemDiskPerformanceLevel',
            systemDiskSize: 'SystemDiskSize',
        };
    }
    static types() {
        return {
            deleteWithInstance: 'boolean',
            encrypted: 'string',
            systemDiskCategory: 'string',
            systemDiskPerformanceLevel: 'string',
            systemDiskSize: 'number',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeRCInstanceAttributeResponseBodySystemDisk = DescribeRCInstanceAttributeResponseBodySystemDisk;
class DescribeRCInstanceAttributeResponseBodyTagsTag extends $dara.Model {
    static names() {
        return {
            resourceId: 'ResourceId',
            resourceType: 'ResourceType',
            tagKey: 'TagKey',
            tagValue: 'TagValue',
        };
    }
    static types() {
        return {
            resourceId: 'string',
            resourceType: 'string',
            tagKey: 'string',
            tagValue: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeRCInstanceAttributeResponseBodyTagsTag = DescribeRCInstanceAttributeResponseBodyTagsTag;
class DescribeRCInstanceAttributeResponseBodyTags extends $dara.Model {
    static names() {
        return {
            tag: 'Tag',
        };
    }
    static types() {
        return {
            tag: { 'type': 'array', 'itemType': DescribeRCInstanceAttributeResponseBodyTagsTag },
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
exports.DescribeRCInstanceAttributeResponseBodyTags = DescribeRCInstanceAttributeResponseBodyTags;
class DescribeRCInstanceAttributeResponseBodyVpcAttributesPrivateIpAddress extends $dara.Model {
    static names() {
        return {
            ipAddress: 'IpAddress',
        };
    }
    static types() {
        return {
            ipAddress: { 'type': 'array', 'itemType': 'string' },
        };
    }
    validate() {
        if (Array.isArray(this.ipAddress)) {
            $dara.Model.validateArray(this.ipAddress);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeRCInstanceAttributeResponseBodyVpcAttributesPrivateIpAddress = DescribeRCInstanceAttributeResponseBodyVpcAttributesPrivateIpAddress;
class DescribeRCInstanceAttributeResponseBodyVpcAttributes extends $dara.Model {
    static names() {
        return {
            natIpAddress: 'NatIpAddress',
            privateIpAddress: 'PrivateIpAddress',
            vSwitchId: 'VSwitchId',
            vpcId: 'VpcId',
        };
    }
    static types() {
        return {
            natIpAddress: 'string',
            privateIpAddress: DescribeRCInstanceAttributeResponseBodyVpcAttributesPrivateIpAddress,
            vSwitchId: 'string',
            vpcId: 'string',
        };
    }
    validate() {
        if (this.privateIpAddress && typeof this.privateIpAddress.validate === 'function') {
            this.privateIpAddress.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeRCInstanceAttributeResponseBodyVpcAttributes = DescribeRCInstanceAttributeResponseBodyVpcAttributes;
class DescribeRCInstanceAttributeResponseBody extends $dara.Model {
    static names() {
        return {
            autoRenew: 'AutoRenew',
            clusterId: 'ClusterId',
            cpu: 'Cpu',
            createMode: 'CreateMode',
            creationTime: 'CreationTime',
            creditSpecification: 'CreditSpecification',
            dataDisks: 'DataDisks',
            dbType: 'DbType',
            dedicatedHostAttribute: 'DedicatedHostAttribute',
            deletionProtection: 'DeletionProtection',
            deploymentSetId: 'DeploymentSetId',
            description: 'Description',
            diskType: 'DiskType',
            ecsInstanceType: 'EcsInstanceType',
            eipAddress: 'EipAddress',
            enableJumboFrame: 'EnableJumboFrame',
            expiredTime: 'ExpiredTime',
            gpu: 'Gpu',
            gpuTypes: 'GpuTypes',
            hostName: 'HostName',
            hostType: 'HostType',
            imageId: 'ImageId',
            innerIpAddress: 'InnerIpAddress',
            instanceChargeType: 'InstanceChargeType',
            instanceId: 'InstanceId',
            instanceName: 'InstanceName',
            instanceNetworkType: 'InstanceNetworkType',
            instanceType: 'InstanceType',
            internetChargeType: 'InternetChargeType',
            internetMaxBandwidthIn: 'InternetMaxBandwidthIn',
            internetMaxBandwidthOut: 'InternetMaxBandwidthOut',
            ioOptimized: 'IoOptimized',
            keyPairName: 'KeyPairName',
            memory: 'Memory',
            nodeType: 'NodeType',
            operationLocks: 'OperationLocks',
            publicIpAddress: 'PublicIpAddress',
            regionId: 'RegionId',
            requestId: 'RequestId',
            resourceGroupId: 'ResourceGroupId',
            securityGroupIds: 'SecurityGroupIds',
            serialNumber: 'SerialNumber',
            spotStrategy: 'SpotStrategy',
            status: 'Status',
            stoppedMode: 'StoppedMode',
            systemDisk: 'SystemDisk',
            tags: 'Tags',
            userData: 'UserData',
            vlanId: 'VlanId',
            vpcAttributes: 'VpcAttributes',
            zoneId: 'ZoneId',
        };
    }
    static types() {
        return {
            autoRenew: 'boolean',
            clusterId: 'string',
            cpu: 'number',
            createMode: 'number',
            creationTime: 'string',
            creditSpecification: 'string',
            dataDisks: DescribeRCInstanceAttributeResponseBodyDataDisks,
            dbType: 'string',
            dedicatedHostAttribute: DescribeRCInstanceAttributeResponseBodyDedicatedHostAttribute,
            deletionProtection: 'boolean',
            deploymentSetId: 'string',
            description: 'string',
            diskType: 'string',
            ecsInstanceType: 'string',
            eipAddress: DescribeRCInstanceAttributeResponseBodyEipAddress,
            enableJumboFrame: 'boolean',
            expiredTime: 'string',
            gpu: 'number',
            gpuTypes: 'string',
            hostName: 'string',
            hostType: 'string',
            imageId: 'string',
            innerIpAddress: DescribeRCInstanceAttributeResponseBodyInnerIpAddress,
            instanceChargeType: 'string',
            instanceId: 'string',
            instanceName: 'string',
            instanceNetworkType: 'string',
            instanceType: 'string',
            internetChargeType: 'string',
            internetMaxBandwidthIn: 'number',
            internetMaxBandwidthOut: 'number',
            ioOptimized: 'string',
            keyPairName: 'string',
            memory: 'number',
            nodeType: 'string',
            operationLocks: DescribeRCInstanceAttributeResponseBodyOperationLocks,
            publicIpAddress: DescribeRCInstanceAttributeResponseBodyPublicIpAddress,
            regionId: 'string',
            requestId: 'string',
            resourceGroupId: 'string',
            securityGroupIds: DescribeRCInstanceAttributeResponseBodySecurityGroupIds,
            serialNumber: 'string',
            spotStrategy: 'string',
            status: 'string',
            stoppedMode: 'string',
            systemDisk: DescribeRCInstanceAttributeResponseBodySystemDisk,
            tags: DescribeRCInstanceAttributeResponseBodyTags,
            userData: 'string',
            vlanId: 'string',
            vpcAttributes: DescribeRCInstanceAttributeResponseBodyVpcAttributes,
            zoneId: 'string',
        };
    }
    validate() {
        if (this.dataDisks && typeof this.dataDisks.validate === 'function') {
            this.dataDisks.validate();
        }
        if (this.dedicatedHostAttribute && typeof this.dedicatedHostAttribute.validate === 'function') {
            this.dedicatedHostAttribute.validate();
        }
        if (this.eipAddress && typeof this.eipAddress.validate === 'function') {
            this.eipAddress.validate();
        }
        if (this.innerIpAddress && typeof this.innerIpAddress.validate === 'function') {
            this.innerIpAddress.validate();
        }
        if (this.operationLocks && typeof this.operationLocks.validate === 'function') {
            this.operationLocks.validate();
        }
        if (this.publicIpAddress && typeof this.publicIpAddress.validate === 'function') {
            this.publicIpAddress.validate();
        }
        if (this.securityGroupIds && typeof this.securityGroupIds.validate === 'function') {
            this.securityGroupIds.validate();
        }
        if (this.systemDisk && typeof this.systemDisk.validate === 'function') {
            this.systemDisk.validate();
        }
        if (this.tags && typeof this.tags.validate === 'function') {
            this.tags.validate();
        }
        if (this.vpcAttributes && typeof this.vpcAttributes.validate === 'function') {
            this.vpcAttributes.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeRCInstanceAttributeResponseBody = DescribeRCInstanceAttributeResponseBody;
//# sourceMappingURL=DescribeRcinstanceAttributeResponseBody.js.map