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
exports.DescribeDedicatedHostsResponseBody = exports.DescribeDedicatedHostsResponseBodyDedicatedHosts = exports.DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHosts = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHosts extends $dara.Model {
    static names() {
        return {
            accountName: 'AccountName',
            allocationStatus: 'AllocationStatus',
            bastionInstanceId: 'BastionInstanceId',
            CPUAllocationRatio: 'CPUAllocationRatio',
            cpuUsed: 'CpuUsed',
            createdTime: 'CreatedTime',
            dedicatedHostGroupId: 'DedicatedHostGroupId',
            dedicatedHostId: 'DedicatedHostId',
            diskAllocationRatio: 'DiskAllocationRatio',
            endTime: 'EndTime',
            engine: 'Engine',
            hostCPU: 'HostCPU',
            hostClass: 'HostClass',
            hostMem: 'HostMem',
            hostName: 'HostName',
            hostStatus: 'HostStatus',
            hostStorage: 'HostStorage',
            hostType: 'HostType',
            IPAddress: 'IPAddress',
            imageCategory: 'ImageCategory',
            instanceNumber: 'InstanceNumber',
            memAllocationRatio: 'MemAllocationRatio',
            memoryUsed: 'MemoryUsed',
            openPermission: 'OpenPermission',
            storageUsed: 'StorageUsed',
            VPCId: 'VPCId',
            vSwitchId: 'VSwitchId',
            zoneId: 'ZoneId',
        };
    }
    static types() {
        return {
            accountName: 'string',
            allocationStatus: 'string',
            bastionInstanceId: 'string',
            CPUAllocationRatio: 'string',
            cpuUsed: 'string',
            createdTime: 'string',
            dedicatedHostGroupId: 'string',
            dedicatedHostId: 'string',
            diskAllocationRatio: 'string',
            endTime: 'string',
            engine: 'string',
            hostCPU: 'string',
            hostClass: 'string',
            hostMem: 'string',
            hostName: 'string',
            hostStatus: 'string',
            hostStorage: 'string',
            hostType: 'string',
            IPAddress: 'string',
            imageCategory: 'string',
            instanceNumber: 'string',
            memAllocationRatio: 'string',
            memoryUsed: 'string',
            openPermission: 'string',
            storageUsed: 'string',
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
exports.DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHosts = DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHosts;
class DescribeDedicatedHostsResponseBodyDedicatedHosts extends $dara.Model {
    static names() {
        return {
            dedicatedHosts: 'DedicatedHosts',
        };
    }
    static types() {
        return {
            dedicatedHosts: { 'type': 'array', 'itemType': DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHosts },
        };
    }
    validate() {
        if (Array.isArray(this.dedicatedHosts)) {
            $dara.Model.validateArray(this.dedicatedHosts);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDedicatedHostsResponseBodyDedicatedHosts = DescribeDedicatedHostsResponseBodyDedicatedHosts;
class DescribeDedicatedHostsResponseBody extends $dara.Model {
    static names() {
        return {
            dedicatedHostGroupId: 'DedicatedHostGroupId',
            dedicatedHosts: 'DedicatedHosts',
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            dedicatedHostGroupId: 'string',
            dedicatedHosts: DescribeDedicatedHostsResponseBodyDedicatedHosts,
            requestId: 'string',
        };
    }
    validate() {
        if (this.dedicatedHosts && typeof this.dedicatedHosts.validate === 'function') {
            this.dedicatedHosts.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDedicatedHostsResponseBody = DescribeDedicatedHostsResponseBody;
//# sourceMappingURL=DescribeDedicatedHostsResponseBody.js.map