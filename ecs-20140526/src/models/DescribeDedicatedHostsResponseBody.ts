// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHostSchedulerOptions extends $dara.Model {
  managedPrivateSpaceId?: string;
  static names(): { [key: string]: string } {
    return {
      managedPrivateSpaceId: 'ManagedPrivateSpaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      managedPrivateSpaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHostCapacityAvailableInstanceTypesAvailableInstanceType extends $dara.Model {
  availableInstanceCapacity?: number;
  instanceType?: string;
  static names(): { [key: string]: string } {
    return {
      availableInstanceCapacity: 'AvailableInstanceCapacity',
      instanceType: 'InstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableInstanceCapacity: 'number',
      instanceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHostCapacityAvailableInstanceTypes extends $dara.Model {
  availableInstanceType?: DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHostCapacityAvailableInstanceTypesAvailableInstanceType[];
  static names(): { [key: string]: string } {
    return {
      availableInstanceType: 'AvailableInstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableInstanceType: { 'type': 'array', 'itemType': DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHostCapacityAvailableInstanceTypesAvailableInstanceType },
    };
  }

  validate() {
    if(Array.isArray(this.availableInstanceType)) {
      $dara.Model.validateArray(this.availableInstanceType);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHostCapacitySocketCapacitiesSocketCapacity extends $dara.Model {
  availableMemory?: number;
  availableVcpu?: number;
  socketId?: number;
  totalMemory?: number;
  totalVcpu?: number;
  static names(): { [key: string]: string } {
    return {
      availableMemory: 'AvailableMemory',
      availableVcpu: 'AvailableVcpu',
      socketId: 'SocketId',
      totalMemory: 'TotalMemory',
      totalVcpu: 'TotalVcpu',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableMemory: 'number',
      availableVcpu: 'number',
      socketId: 'number',
      totalMemory: 'number',
      totalVcpu: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHostCapacitySocketCapacities extends $dara.Model {
  socketCapacity?: DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHostCapacitySocketCapacitiesSocketCapacity[];
  static names(): { [key: string]: string } {
    return {
      socketCapacity: 'SocketCapacity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      socketCapacity: { 'type': 'array', 'itemType': DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHostCapacitySocketCapacitiesSocketCapacity },
    };
  }

  validate() {
    if(Array.isArray(this.socketCapacity)) {
      $dara.Model.validateArray(this.socketCapacity);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHostCapacity extends $dara.Model {
  availableInstanceTypes?: DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHostCapacityAvailableInstanceTypes;
  availableLocalStorage?: number;
  availableMemory?: number;
  availableVcpus?: number;
  availableVgpus?: number;
  localStorageCategory?: string;
  socketCapacities?: DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHostCapacitySocketCapacities;
  totalLocalStorage?: number;
  totalMemory?: number;
  totalVcpus?: number;
  totalVgpus?: number;
  static names(): { [key: string]: string } {
    return {
      availableInstanceTypes: 'AvailableInstanceTypes',
      availableLocalStorage: 'AvailableLocalStorage',
      availableMemory: 'AvailableMemory',
      availableVcpus: 'AvailableVcpus',
      availableVgpus: 'AvailableVgpus',
      localStorageCategory: 'LocalStorageCategory',
      socketCapacities: 'SocketCapacities',
      totalLocalStorage: 'TotalLocalStorage',
      totalMemory: 'TotalMemory',
      totalVcpus: 'TotalVcpus',
      totalVgpus: 'TotalVgpus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableInstanceTypes: DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHostCapacityAvailableInstanceTypes,
      availableLocalStorage: 'number',
      availableMemory: 'number',
      availableVcpus: 'number',
      availableVgpus: 'number',
      localStorageCategory: 'string',
      socketCapacities: DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHostCapacitySocketCapacities,
      totalLocalStorage: 'number',
      totalMemory: 'number',
      totalVcpus: 'number',
      totalVgpus: 'number',
    };
  }

  validate() {
    if(this.availableInstanceTypes && typeof (this.availableInstanceTypes as any).validate === 'function') {
      (this.availableInstanceTypes as any).validate();
    }
    if(this.socketCapacities && typeof (this.socketCapacities as any).validate === 'function') {
      (this.socketCapacities as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHostHostDetailInfo extends $dara.Model {
  serialNumber?: string;
  static names(): { [key: string]: string } {
    return {
      serialNumber: 'SerialNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serialNumber: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHostInstancesInstance extends $dara.Model {
  instanceId?: string;
  instanceOwnerId?: number;
  instanceType?: string;
  socketId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      instanceOwnerId: 'InstanceOwnerId',
      instanceType: 'InstanceType',
      socketId: 'SocketId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      instanceOwnerId: 'number',
      instanceType: 'string',
      socketId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHostInstances extends $dara.Model {
  instance?: DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHostInstancesInstance[];
  static names(): { [key: string]: string } {
    return {
      instance: 'Instance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instance: { 'type': 'array', 'itemType': DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHostInstancesInstance },
    };
  }

  validate() {
    if(Array.isArray(this.instance)) {
      $dara.Model.validateArray(this.instance);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHostNetworkAttributes extends $dara.Model {
  slbUdpTimeout?: number;
  udpTimeout?: number;
  static names(): { [key: string]: string } {
    return {
      slbUdpTimeout: 'SlbUdpTimeout',
      udpTimeout: 'UdpTimeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      slbUdpTimeout: 'number',
      udpTimeout: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHostOperationLocksOperationLock extends $dara.Model {
  lockReason?: string;
  static names(): { [key: string]: string } {
    return {
      lockReason: 'LockReason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lockReason: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHostOperationLocks extends $dara.Model {
  operationLock?: DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHostOperationLocksOperationLock[];
  static names(): { [key: string]: string } {
    return {
      operationLock: 'OperationLock',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operationLock: { 'type': 'array', 'itemType': DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHostOperationLocksOperationLock },
    };
  }

  validate() {
    if(Array.isArray(this.operationLock)) {
      $dara.Model.validateArray(this.operationLock);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHostSupportedCustomInstanceTypeFamilies extends $dara.Model {
  supportedCustomInstanceTypeFamily?: string[];
  static names(): { [key: string]: string } {
    return {
      supportedCustomInstanceTypeFamily: 'SupportedCustomInstanceTypeFamily',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportedCustomInstanceTypeFamily: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.supportedCustomInstanceTypeFamily)) {
      $dara.Model.validateArray(this.supportedCustomInstanceTypeFamily);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHostSupportedInstanceTypeFamilies extends $dara.Model {
  supportedInstanceTypeFamily?: string[];
  static names(): { [key: string]: string } {
    return {
      supportedInstanceTypeFamily: 'SupportedInstanceTypeFamily',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportedInstanceTypeFamily: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.supportedInstanceTypeFamily)) {
      $dara.Model.validateArray(this.supportedInstanceTypeFamily);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHostSupportedInstanceTypesList extends $dara.Model {
  supportedInstanceTypesList?: string[];
  static names(): { [key: string]: string } {
    return {
      supportedInstanceTypesList: 'SupportedInstanceTypesList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportedInstanceTypesList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.supportedInstanceTypesList)) {
      $dara.Model.validateArray(this.supportedInstanceTypesList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHostTagsTag extends $dara.Model {
  tagKey?: string;
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHostTags extends $dara.Model {
  tag?: DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHostTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHostTagsTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHost extends $dara.Model {
  schedulerOptions?: DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHostSchedulerOptions;
  actionOnMaintenance?: string;
  autoPlacement?: string;
  autoReleaseTime?: string;
  capacity?: DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHostCapacity;
  chargeType?: string;
  cores?: number;
  cpuOverCommitRatio?: number;
  creationTime?: string;
  dedicatedHostClusterId?: string;
  dedicatedHostId?: string;
  dedicatedHostName?: string;
  dedicatedHostOwnerId?: number;
  dedicatedHostType?: string;
  description?: string;
  expiredTime?: string;
  GPUSpec?: string;
  hostDetailInfo?: DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHostHostDetailInfo;
  instances?: DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHostInstances;
  machineId?: string;
  networkAttributes?: DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHostNetworkAttributes;
  operationLocks?: DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHostOperationLocks;
  physicalGpus?: number;
  regionId?: string;
  resourceGroupId?: string;
  saleCycle?: string;
  sockets?: number;
  status?: string;
  supportedCustomInstanceTypeFamilies?: DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHostSupportedCustomInstanceTypeFamilies;
  supportedInstanceTypeFamilies?: DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHostSupportedInstanceTypeFamilies;
  supportedInstanceTypesList?: DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHostSupportedInstanceTypesList;
  tags?: DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHostTags;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      schedulerOptions: 'SchedulerOptions',
      actionOnMaintenance: 'ActionOnMaintenance',
      autoPlacement: 'AutoPlacement',
      autoReleaseTime: 'AutoReleaseTime',
      capacity: 'Capacity',
      chargeType: 'ChargeType',
      cores: 'Cores',
      cpuOverCommitRatio: 'CpuOverCommitRatio',
      creationTime: 'CreationTime',
      dedicatedHostClusterId: 'DedicatedHostClusterId',
      dedicatedHostId: 'DedicatedHostId',
      dedicatedHostName: 'DedicatedHostName',
      dedicatedHostOwnerId: 'DedicatedHostOwnerId',
      dedicatedHostType: 'DedicatedHostType',
      description: 'Description',
      expiredTime: 'ExpiredTime',
      GPUSpec: 'GPUSpec',
      hostDetailInfo: 'HostDetailInfo',
      instances: 'Instances',
      machineId: 'MachineId',
      networkAttributes: 'NetworkAttributes',
      operationLocks: 'OperationLocks',
      physicalGpus: 'PhysicalGpus',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      saleCycle: 'SaleCycle',
      sockets: 'Sockets',
      status: 'Status',
      supportedCustomInstanceTypeFamilies: 'SupportedCustomInstanceTypeFamilies',
      supportedInstanceTypeFamilies: 'SupportedInstanceTypeFamilies',
      supportedInstanceTypesList: 'SupportedInstanceTypesList',
      tags: 'Tags',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      schedulerOptions: DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHostSchedulerOptions,
      actionOnMaintenance: 'string',
      autoPlacement: 'string',
      autoReleaseTime: 'string',
      capacity: DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHostCapacity,
      chargeType: 'string',
      cores: 'number',
      cpuOverCommitRatio: 'number',
      creationTime: 'string',
      dedicatedHostClusterId: 'string',
      dedicatedHostId: 'string',
      dedicatedHostName: 'string',
      dedicatedHostOwnerId: 'number',
      dedicatedHostType: 'string',
      description: 'string',
      expiredTime: 'string',
      GPUSpec: 'string',
      hostDetailInfo: DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHostHostDetailInfo,
      instances: DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHostInstances,
      machineId: 'string',
      networkAttributes: DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHostNetworkAttributes,
      operationLocks: DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHostOperationLocks,
      physicalGpus: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      saleCycle: 'string',
      sockets: 'number',
      status: 'string',
      supportedCustomInstanceTypeFamilies: DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHostSupportedCustomInstanceTypeFamilies,
      supportedInstanceTypeFamilies: DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHostSupportedInstanceTypeFamilies,
      supportedInstanceTypesList: DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHostSupportedInstanceTypesList,
      tags: DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHostTags,
      zoneId: 'string',
    };
  }

  validate() {
    if(this.schedulerOptions && typeof (this.schedulerOptions as any).validate === 'function') {
      (this.schedulerOptions as any).validate();
    }
    if(this.capacity && typeof (this.capacity as any).validate === 'function') {
      (this.capacity as any).validate();
    }
    if(this.hostDetailInfo && typeof (this.hostDetailInfo as any).validate === 'function') {
      (this.hostDetailInfo as any).validate();
    }
    if(this.instances && typeof (this.instances as any).validate === 'function') {
      (this.instances as any).validate();
    }
    if(this.networkAttributes && typeof (this.networkAttributes as any).validate === 'function') {
      (this.networkAttributes as any).validate();
    }
    if(this.operationLocks && typeof (this.operationLocks as any).validate === 'function') {
      (this.operationLocks as any).validate();
    }
    if(this.supportedCustomInstanceTypeFamilies && typeof (this.supportedCustomInstanceTypeFamilies as any).validate === 'function') {
      (this.supportedCustomInstanceTypeFamilies as any).validate();
    }
    if(this.supportedInstanceTypeFamilies && typeof (this.supportedInstanceTypeFamilies as any).validate === 'function') {
      (this.supportedInstanceTypeFamilies as any).validate();
    }
    if(this.supportedInstanceTypesList && typeof (this.supportedInstanceTypesList as any).validate === 'function') {
      (this.supportedInstanceTypesList as any).validate();
    }
    if(this.tags && typeof (this.tags as any).validate === 'function') {
      (this.tags as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedHostsResponseBodyDedicatedHosts extends $dara.Model {
  dedicatedHost?: DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHost[];
  static names(): { [key: string]: string } {
    return {
      dedicatedHost: 'DedicatedHost',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dedicatedHost: { 'type': 'array', 'itemType': DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHost },
    };
  }

  validate() {
    if(Array.isArray(this.dedicatedHost)) {
      $dara.Model.validateArray(this.dedicatedHost);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedHostsResponseBody extends $dara.Model {
  dedicatedHosts?: DescribeDedicatedHostsResponseBodyDedicatedHosts;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. If NextToken is empty, no next page exists. If the return value of this parameter is empty when you specify MaxResults and NextToken for a paged query, no more results are to be returned.
   * 
   * @example
   * e71d8a535bd9cc11
   */
  nextToken?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 5
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 7654525A-9964-4ABB-8BCD-98F8835E809A
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of dedicated hosts.
   * 
   * @example
   * 3
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      dedicatedHosts: 'DedicatedHosts',
      nextToken: 'NextToken',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dedicatedHosts: DescribeDedicatedHostsResponseBodyDedicatedHosts,
      nextToken: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
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

