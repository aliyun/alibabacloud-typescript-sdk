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
exports.DescribeRCInstancesResponseBody = exports.DescribeRCInstancesResponseBodyRCInstances = exports.DescribeRCInstancesResponseBodyRCInstancesVpcAttributes = exports.DescribeRCInstancesResponseBodyRCInstancesTags = exports.DescribeRCInstancesResponseBodyRCInstancesTagResources = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeRCInstancesResponseBodyRCInstancesTagResources extends $dara.Model {
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
exports.DescribeRCInstancesResponseBodyRCInstancesTagResources = DescribeRCInstancesResponseBodyRCInstancesTagResources;
class DescribeRCInstancesResponseBodyRCInstancesTags extends $dara.Model {
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
exports.DescribeRCInstancesResponseBodyRCInstancesTags = DescribeRCInstancesResponseBodyRCInstancesTags;
class DescribeRCInstancesResponseBodyRCInstancesVpcAttributes extends $dara.Model {
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
            privateIpAddress: { 'type': 'array', 'itemType': 'string' },
            vSwitchId: 'string',
            vpcId: 'string',
        };
    }
    validate() {
        if (Array.isArray(this.privateIpAddress)) {
            $dara.Model.validateArray(this.privateIpAddress);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeRCInstancesResponseBodyRCInstancesVpcAttributes = DescribeRCInstancesResponseBodyRCInstancesVpcAttributes;
class DescribeRCInstancesResponseBodyRCInstances extends $dara.Model {
    static names() {
        return {
            autoRenew: 'AutoRenew',
            clusterId: 'ClusterId',
            clusterName: 'ClusterName',
            cpu: 'Cpu',
            createMode: 'CreateMode',
            dbType: 'DbType',
            deploymentSetId: 'DeploymentSetId',
            description: 'Description',
            ecsHostName: 'EcsHostName',
            expiredTime: 'ExpiredTime',
            gmtCreated: 'GmtCreated',
            hostIp: 'HostIp',
            hostName: 'HostName',
            imageId: 'ImageId',
            instanceChargeType: 'InstanceChargeType',
            instanceId: 'InstanceId',
            instanceName: 'InstanceName',
            instanceType: 'InstanceType',
            instanceTypeFamily: 'InstanceTypeFamily',
            memory: 'Memory',
            nodeType: 'NodeType',
            OSName: 'OSName',
            OSType: 'OSType',
            publicIp: 'PublicIp',
            regionId: 'RegionId',
            securityGroupId: 'SecurityGroupId',
            spotStrategy: 'SpotStrategy',
            startTime: 'StartTime',
            status: 'Status',
            stoppedMode: 'StoppedMode',
            tagResources: 'TagResources',
            tags: 'Tags',
            vpcAttributes: 'VpcAttributes',
            vpcId: 'VpcId',
            zoneId: 'ZoneId',
        };
    }
    static types() {
        return {
            autoRenew: 'boolean',
            clusterId: 'string',
            clusterName: 'string',
            cpu: 'number',
            createMode: 'string',
            dbType: 'string',
            deploymentSetId: 'string',
            description: 'string',
            ecsHostName: 'string',
            expiredTime: 'string',
            gmtCreated: 'string',
            hostIp: 'string',
            hostName: 'string',
            imageId: 'string',
            instanceChargeType: 'string',
            instanceId: 'string',
            instanceName: 'string',
            instanceType: 'string',
            instanceTypeFamily: 'string',
            memory: 'number',
            nodeType: 'string',
            OSName: 'string',
            OSType: 'string',
            publicIp: 'string',
            regionId: 'string',
            securityGroupId: 'string',
            spotStrategy: 'string',
            startTime: 'string',
            status: 'string',
            stoppedMode: 'string',
            tagResources: { 'type': 'array', 'itemType': DescribeRCInstancesResponseBodyRCInstancesTagResources },
            tags: { 'type': 'array', 'itemType': DescribeRCInstancesResponseBodyRCInstancesTags },
            vpcAttributes: DescribeRCInstancesResponseBodyRCInstancesVpcAttributes,
            vpcId: 'string',
            zoneId: 'string',
        };
    }
    validate() {
        if (Array.isArray(this.tagResources)) {
            $dara.Model.validateArray(this.tagResources);
        }
        if (Array.isArray(this.tags)) {
            $dara.Model.validateArray(this.tags);
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
exports.DescribeRCInstancesResponseBodyRCInstances = DescribeRCInstancesResponseBodyRCInstances;
class DescribeRCInstancesResponseBody extends $dara.Model {
    static names() {
        return {
            pageNumber: 'PageNumber',
            pageSize: 'PageSize',
            RCInstances: 'RCInstances',
            requestId: 'RequestId',
            totalCount: 'TotalCount',
        };
    }
    static types() {
        return {
            pageNumber: 'number',
            pageSize: 'number',
            RCInstances: { 'type': 'array', 'itemType': DescribeRCInstancesResponseBodyRCInstances },
            requestId: 'string',
            totalCount: 'number',
        };
    }
    validate() {
        if (Array.isArray(this.RCInstances)) {
            $dara.Model.validateArray(this.RCInstances);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeRCInstancesResponseBody = DescribeRCInstancesResponseBody;
//# sourceMappingURL=DescribeRcinstancesResponseBody.js.map