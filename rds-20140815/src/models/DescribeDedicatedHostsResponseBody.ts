// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHosts extends $dara.Model {
  accountName?: string;
  allocationStatus?: string;
  bastionInstanceId?: string;
  CPUAllocationRatio?: string;
  cpuUsed?: string;
  createdTime?: string;
  dedicatedHostGroupId?: string;
  dedicatedHostId?: string;
  diskAllocationRatio?: string;
  endTime?: string;
  engine?: string;
  hostCPU?: string;
  hostClass?: string;
  hostMem?: string;
  hostName?: string;
  hostStatus?: string;
  hostStorage?: string;
  hostType?: string;
  IPAddress?: string;
  imageCategory?: string;
  instanceNumber?: string;
  memAllocationRatio?: string;
  memoryUsed?: string;
  openPermission?: string;
  storageUsed?: string;
  VPCId?: string;
  vSwitchId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
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

  static types(): { [key: string]: any } {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedHostsResponseBodyDedicatedHosts extends $dara.Model {
  dedicatedHosts?: DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHosts[];
  static names(): { [key: string]: string } {
    return {
      dedicatedHosts: 'DedicatedHosts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dedicatedHosts: { 'type': 'array', 'itemType': DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHosts },
    };
  }

  validate() {
    if(Array.isArray(this.dedicatedHosts)) {
      $dara.Model.validateArray(this.dedicatedHosts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedHostsResponseBody extends $dara.Model {
  dedicatedHostGroupId?: string;
  dedicatedHosts?: DescribeDedicatedHostsResponseBodyDedicatedHosts;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dedicatedHostGroupId: 'DedicatedHostGroupId',
      dedicatedHosts: 'DedicatedHosts',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dedicatedHostGroupId: 'string',
      dedicatedHosts: DescribeDedicatedHostsResponseBodyDedicatedHosts,
      requestId: 'string',
    };
  }

  validate() {
    if(this.dedicatedHosts && typeof (this.dedicatedHosts as any).validate === 'function') {
      (this.dedicatedHosts as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

