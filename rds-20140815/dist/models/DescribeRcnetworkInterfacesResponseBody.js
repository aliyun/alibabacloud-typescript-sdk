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
exports.DescribeRCNetworkInterfacesResponseBody = exports.DescribeRCNetworkInterfacesResponseBodyNetworkInterfaceSets = exports.DescribeRCNetworkInterfacesResponseBodyNetworkInterfaceSetsTags = exports.DescribeRCNetworkInterfacesResponseBodyNetworkInterfaceSetsPrivateIpSets = exports.DescribeRCNetworkInterfacesResponseBodyNetworkInterfaceSetsIpv6Sets = exports.DescribeRCNetworkInterfacesResponseBodyNetworkInterfaceSetsAssociatedPublicIp = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeRCNetworkInterfacesResponseBodyNetworkInterfaceSetsAssociatedPublicIp extends $dara.Model {
    static names() {
        return {
            publicIpAddress: 'PublicIpAddress',
        };
    }
    static types() {
        return {
            publicIpAddress: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeRCNetworkInterfacesResponseBodyNetworkInterfaceSetsAssociatedPublicIp = DescribeRCNetworkInterfacesResponseBodyNetworkInterfaceSetsAssociatedPublicIp;
class DescribeRCNetworkInterfacesResponseBodyNetworkInterfaceSetsIpv6Sets extends $dara.Model {
    static names() {
        return {
            ipv6Address: 'Ipv6Address',
        };
    }
    static types() {
        return {
            ipv6Address: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeRCNetworkInterfacesResponseBodyNetworkInterfaceSetsIpv6Sets = DescribeRCNetworkInterfacesResponseBodyNetworkInterfaceSetsIpv6Sets;
class DescribeRCNetworkInterfacesResponseBodyNetworkInterfaceSetsPrivateIpSets extends $dara.Model {
    static names() {
        return {
            primary: 'Primary',
            privateIpAddress: 'PrivateIpAddress',
        };
    }
    static types() {
        return {
            primary: 'boolean',
            privateIpAddress: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeRCNetworkInterfacesResponseBodyNetworkInterfaceSetsPrivateIpSets = DescribeRCNetworkInterfacesResponseBodyNetworkInterfaceSetsPrivateIpSets;
class DescribeRCNetworkInterfacesResponseBodyNetworkInterfaceSetsTags extends $dara.Model {
    static names() {
        return {
            tagKey: 'TagKey',
            tagValue: 'TagValue',
        };
    }
    static types() {
        return {
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
exports.DescribeRCNetworkInterfacesResponseBodyNetworkInterfaceSetsTags = DescribeRCNetworkInterfacesResponseBodyNetworkInterfaceSetsTags;
class DescribeRCNetworkInterfacesResponseBodyNetworkInterfaceSets extends $dara.Model {
    static names() {
        return {
            associatedPublicIp: 'AssociatedPublicIp',
            creationTime: 'CreationTime',
            description: 'Description',
            instanceId: 'InstanceId',
            ipv6Sets: 'Ipv6Sets',
            macAddress: 'MacAddress',
            networkInterfaceId: 'NetworkInterfaceId',
            privateIpSets: 'PrivateIpSets',
            resourceGroupId: 'ResourceGroupId',
            securityGroupIds: 'SecurityGroupIds',
            status: 'Status',
            tags: 'Tags',
            type: 'Type',
            vSwitchId: 'VSwitchId',
            vpcId: 'VpcId',
            zoneId: 'ZoneId',
        };
    }
    static types() {
        return {
            associatedPublicIp: DescribeRCNetworkInterfacesResponseBodyNetworkInterfaceSetsAssociatedPublicIp,
            creationTime: 'string',
            description: 'string',
            instanceId: 'string',
            ipv6Sets: { 'type': 'array', 'itemType': DescribeRCNetworkInterfacesResponseBodyNetworkInterfaceSetsIpv6Sets },
            macAddress: 'string',
            networkInterfaceId: 'string',
            privateIpSets: { 'type': 'array', 'itemType': DescribeRCNetworkInterfacesResponseBodyNetworkInterfaceSetsPrivateIpSets },
            resourceGroupId: 'string',
            securityGroupIds: { 'type': 'array', 'itemType': 'string' },
            status: 'string',
            tags: { 'type': 'array', 'itemType': DescribeRCNetworkInterfacesResponseBodyNetworkInterfaceSetsTags },
            type: 'string',
            vSwitchId: 'string',
            vpcId: 'string',
            zoneId: 'string',
        };
    }
    validate() {
        if (this.associatedPublicIp && typeof this.associatedPublicIp.validate === 'function') {
            this.associatedPublicIp.validate();
        }
        if (Array.isArray(this.ipv6Sets)) {
            $dara.Model.validateArray(this.ipv6Sets);
        }
        if (Array.isArray(this.privateIpSets)) {
            $dara.Model.validateArray(this.privateIpSets);
        }
        if (Array.isArray(this.securityGroupIds)) {
            $dara.Model.validateArray(this.securityGroupIds);
        }
        if (Array.isArray(this.tags)) {
            $dara.Model.validateArray(this.tags);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeRCNetworkInterfacesResponseBodyNetworkInterfaceSets = DescribeRCNetworkInterfacesResponseBodyNetworkInterfaceSets;
class DescribeRCNetworkInterfacesResponseBody extends $dara.Model {
    static names() {
        return {
            networkInterfaceSets: 'NetworkInterfaceSets',
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            networkInterfaceSets: { 'type': 'array', 'itemType': DescribeRCNetworkInterfacesResponseBodyNetworkInterfaceSets },
            requestId: 'string',
        };
    }
    validate() {
        if (Array.isArray(this.networkInterfaceSets)) {
            $dara.Model.validateArray(this.networkInterfaceSets);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeRCNetworkInterfacesResponseBody = DescribeRCNetworkInterfacesResponseBody;
//# sourceMappingURL=DescribeRcnetworkInterfacesResponseBody.js.map