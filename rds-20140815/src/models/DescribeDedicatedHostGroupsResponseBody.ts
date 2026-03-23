// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDedicatedHostGroupsResponseBodyDedicatedHostGroupsDedicatedHostGroupsZoneIDList extends $dara.Model {
  zoneIDList?: string[];
  static names(): { [key: string]: string } {
    return {
      zoneIDList: 'ZoneIDList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      zoneIDList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.zoneIDList)) {
      $dara.Model.validateArray(this.zoneIDList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedHostGroupsResponseBodyDedicatedHostGroupsDedicatedHostGroups extends $dara.Model {
  allocationPolicy?: string;
  bastionInstanceId?: string;
  cpuAllocateRation?: number;
  cpuAllocatedAmount?: number;
  cpuAllocationRatio?: number;
  createTime?: string;
  dedicatedHostCountGroupByHostType?: { [key: string]: any };
  dedicatedHostGroupDesc?: string;
  dedicatedHostGroupId?: string;
  diskAllocateRation?: number;
  diskAllocatedAmount?: number;
  diskAllocationRatio?: number;
  diskUsedAmount?: number;
  diskUtility?: number;
  engine?: string;
  hostNumber?: number;
  hostReplacePolicy?: string;
  instanceNumber?: number;
  memAllocateRation?: number;
  memAllocatedAmount?: number;
  memAllocationRatio?: number;
  memUsedAmount?: number;
  memUtility?: number;
  openPermission?: string;
  text?: string;
  VPCId?: string;
  zoneIDList?: DescribeDedicatedHostGroupsResponseBodyDedicatedHostGroupsDedicatedHostGroupsZoneIDList;
  static names(): { [key: string]: string } {
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

  static types(): { [key: string]: any } {
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
    if(this.dedicatedHostCountGroupByHostType) {
      $dara.Model.validateMap(this.dedicatedHostCountGroupByHostType);
    }
    if(this.zoneIDList && typeof (this.zoneIDList as any).validate === 'function') {
      (this.zoneIDList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedHostGroupsResponseBodyDedicatedHostGroups extends $dara.Model {
  dedicatedHostGroups?: DescribeDedicatedHostGroupsResponseBodyDedicatedHostGroupsDedicatedHostGroups[];
  static names(): { [key: string]: string } {
    return {
      dedicatedHostGroups: 'DedicatedHostGroups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dedicatedHostGroups: { 'type': 'array', 'itemType': DescribeDedicatedHostGroupsResponseBodyDedicatedHostGroupsDedicatedHostGroups },
    };
  }

  validate() {
    if(Array.isArray(this.dedicatedHostGroups)) {
      $dara.Model.validateArray(this.dedicatedHostGroups);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedHostGroupsResponseBody extends $dara.Model {
  dedicatedHostGroups?: DescribeDedicatedHostGroupsResponseBodyDedicatedHostGroups;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dedicatedHostGroups: 'DedicatedHostGroups',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dedicatedHostGroups: DescribeDedicatedHostGroupsResponseBodyDedicatedHostGroups,
      requestId: 'string',
    };
  }

  validate() {
    if(this.dedicatedHostGroups && typeof (this.dedicatedHostGroups as any).validate === 'function') {
      (this.dedicatedHostGroups as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

