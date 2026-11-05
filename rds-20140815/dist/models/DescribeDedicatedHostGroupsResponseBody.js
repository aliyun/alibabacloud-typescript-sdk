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
exports.DescribeDedicatedHostGroupsResponseBody = exports.DescribeDedicatedHostGroupsResponseBodyDedicatedHostGroups = exports.DescribeDedicatedHostGroupsResponseBodyDedicatedHostGroupsDedicatedHostGroups = exports.DescribeDedicatedHostGroupsResponseBodyDedicatedHostGroupsDedicatedHostGroupsZoneIDList = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeDedicatedHostGroupsResponseBodyDedicatedHostGroupsDedicatedHostGroupsZoneIDList extends $dara.Model {
    static names() {
        return {
            zoneIDList: 'ZoneIDList',
        };
    }
    static types() {
        return {
            zoneIDList: { 'type': 'array', 'itemType': 'string' },
        };
    }
    validate() {
        if (Array.isArray(this.zoneIDList)) {
            $dara.Model.validateArray(this.zoneIDList);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDedicatedHostGroupsResponseBodyDedicatedHostGroupsDedicatedHostGroupsZoneIDList = DescribeDedicatedHostGroupsResponseBodyDedicatedHostGroupsDedicatedHostGroupsZoneIDList;
class DescribeDedicatedHostGroupsResponseBodyDedicatedHostGroupsDedicatedHostGroups extends $dara.Model {
    static names() {
        return {
            allocationPolicy: 'AllocationPolicy',
            bastionInstanceId: 'BastionInstanceId',
            cpuAllocateRation: 'CpuAllocateRation',
            cpuAllocatedAmount: 'CpuAllocatedAmount',
            cpuAllocationRatio: 'CpuAllocationRatio',
            createTime: 'CreateTime',
            dedicatedHostCountGroupByHostType: 'DedicatedHostCountGroupByHostType',
            dedicatedHostGroupDesc: 'DedicatedHostGroupDesc',
            dedicatedHostGroupId: 'DedicatedHostGroupId',
            diskAllocateRation: 'DiskAllocateRation',
            diskAllocatedAmount: 'DiskAllocatedAmount',
            diskAllocationRatio: 'DiskAllocationRatio',
            diskUsedAmount: 'DiskUsedAmount',
            diskUtility: 'DiskUtility',
            engine: 'Engine',
            hostNumber: 'HostNumber',
            hostReplacePolicy: 'HostReplacePolicy',
            instanceNumber: 'InstanceNumber',
            memAllocateRation: 'MemAllocateRation',
            memAllocatedAmount: 'MemAllocatedAmount',
            memAllocationRatio: 'MemAllocationRatio',
            memUsedAmount: 'MemUsedAmount',
            memUtility: 'MemUtility',
            openPermission: 'OpenPermission',
            text: 'Text',
            VPCId: 'VPCId',
            zoneIDList: 'ZoneIDList',
        };
    }
    static types() {
        return {
            allocationPolicy: 'string',
            bastionInstanceId: 'string',
            cpuAllocateRation: 'number',
            cpuAllocatedAmount: 'number',
            cpuAllocationRatio: 'number',
            createTime: 'string',
            dedicatedHostCountGroupByHostType: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
            dedicatedHostGroupDesc: 'string',
            dedicatedHostGroupId: 'string',
            diskAllocateRation: 'number',
            diskAllocatedAmount: 'number',
            diskAllocationRatio: 'number',
            diskUsedAmount: 'number',
            diskUtility: 'number',
            engine: 'string',
            hostNumber: 'number',
            hostReplacePolicy: 'string',
            instanceNumber: 'number',
            memAllocateRation: 'number',
            memAllocatedAmount: 'number',
            memAllocationRatio: 'number',
            memUsedAmount: 'number',
            memUtility: 'number',
            openPermission: 'string',
            text: 'string',
            VPCId: 'string',
            zoneIDList: DescribeDedicatedHostGroupsResponseBodyDedicatedHostGroupsDedicatedHostGroupsZoneIDList,
        };
    }
    validate() {
        if (this.dedicatedHostCountGroupByHostType) {
            $dara.Model.validateMap(this.dedicatedHostCountGroupByHostType);
        }
        if (this.zoneIDList && typeof this.zoneIDList.validate === 'function') {
            this.zoneIDList.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDedicatedHostGroupsResponseBodyDedicatedHostGroupsDedicatedHostGroups = DescribeDedicatedHostGroupsResponseBodyDedicatedHostGroupsDedicatedHostGroups;
class DescribeDedicatedHostGroupsResponseBodyDedicatedHostGroups extends $dara.Model {
    static names() {
        return {
            dedicatedHostGroups: 'DedicatedHostGroups',
        };
    }
    static types() {
        return {
            dedicatedHostGroups: { 'type': 'array', 'itemType': DescribeDedicatedHostGroupsResponseBodyDedicatedHostGroupsDedicatedHostGroups },
        };
    }
    validate() {
        if (Array.isArray(this.dedicatedHostGroups)) {
            $dara.Model.validateArray(this.dedicatedHostGroups);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDedicatedHostGroupsResponseBodyDedicatedHostGroups = DescribeDedicatedHostGroupsResponseBodyDedicatedHostGroups;
class DescribeDedicatedHostGroupsResponseBody extends $dara.Model {
    static names() {
        return {
            dedicatedHostGroups: 'DedicatedHostGroups',
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            dedicatedHostGroups: DescribeDedicatedHostGroupsResponseBodyDedicatedHostGroups,
            requestId: 'string',
        };
    }
    validate() {
        if (this.dedicatedHostGroups && typeof this.dedicatedHostGroups.validate === 'function') {
            this.dedicatedHostGroups.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDedicatedHostGroupsResponseBody = DescribeDedicatedHostGroupsResponseBody;
//# sourceMappingURL=DescribeDedicatedHostGroupsResponseBody.js.map