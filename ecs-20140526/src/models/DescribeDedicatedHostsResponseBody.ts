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
  /**
   * @remarks
   * The amount of available memory. Unit: GiB.
   * 
   * @example
   * 65
   */
  availableMemory?: number;
  /**
   * @remarks
   * The number of available vCPUs.
   * 
   * @example
   * 64
   */
  availableVcpu?: number;
  /**
   * @remarks
   * The socket ID.
   * 
   * @example
   * 1
   */
  socketId?: number;
  /**
   * @remarks
   * The total amount of memory. Unit: GiB.
   * 
   * @example
   * 128
   */
  totalMemory?: number;
  /**
   * @remarks
   * The total number of vCPUs.
   * 
   * @example
   * 128
   */
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
  /**
   * @remarks
   * The amount of available space on the local disks. Unit: GiB
   * 
   * @example
   * 65
   */
  availableLocalStorage?: number;
  /**
   * @remarks
   * The amount of available memory. Unit: GiB.
   * 
   * @example
   * 25
   */
  availableMemory?: number;
  /**
   * @remarks
   * The number of available vCPUs.
   * 
   * @example
   * 5
   */
  availableVcpus?: number;
  /**
   * @remarks
   * The number of available vGPUs.
   * 
   * @example
   * 2
   */
  availableVgpus?: number;
  /**
   * @remarks
   * The category of local disks.
   * 
   * @example
   * i2
   */
  localStorageCategory?: string;
  /**
   * @remarks
   * The socket capacities.
   */
  socketCapacities?: DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHostCapacitySocketCapacities;
  /**
   * @remarks
   * The total capacity of local disks. Unit: GiB.
   * 
   * @example
   * 512
   */
  totalLocalStorage?: number;
  /**
   * @remarks
   * The total amount of memory. Unit: GiB.
   * 
   * @example
   * 1024
   */
  totalMemory?: number;
  /**
   * @remarks
   * The total number of vCPUs.
   * 
   * @example
   * 56
   */
  totalVcpus?: number;
  /**
   * @remarks
   * The total number of vGPUs.
   * 
   * @example
   * 10
   */
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
  /**
   * @remarks
   * This parameter will be removed in the future. We recommend that you use other parameters to ensure future compatibility.
   * 
   * @example
   * null
   */
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
  /**
   * @remarks
   * The ID of the ECS instance.
   * 
   * @example
   * i-bp14ot0ykf8w13a1****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the ECS instance owner.
   * 
   * @example
   * 128************0
   */
  instanceOwnerId?: number;
  /**
   * @remarks
   * The instance type of the ECS instance that was created on the dedicated host.
   * 
   * @example
   * ecs.g5.large
   */
  instanceType?: string;
  /**
   * @remarks
   * The ID of the socket to which the ECS instance belongs.
   * 
   * @example
   * 0,1
   */
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
  /**
   * @remarks
   * The timeout period of the UDP session that is established between Server Load Balancer (SLB) and the dedicated host. Unit: seconds. Only 60 is returned.
   * 
   * @example
   * 60
   */
  slbUdpTimeout?: number;
  /**
   * @remarks
   * The timeout period of the UDP session that is established between a user and an Alibaba Cloud service on the dedicated host. Unit: seconds. Only 60 is returned.
   * 
   * @example
   * 60
   */
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
  /**
   * @remarks
   * The reason why the dedicated host was locked. Valid values:
   * 
   * *   financial: The dedicated host was locked due to overdue payments.
   * *   security: The dedicated host was locked due to security reasons.
   * 
   * @example
   * financial
   */
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
  /**
   * @remarks
   * The tag key of the dedicated host.
   * 
   * @example
   * TestKey
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value of the dedicated host.
   * 
   * @example
   * TestValue
   */
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
  /**
   * @remarks
   * The policy used to migrate the ECS instances deployed on the dedicated host when the dedicated host fails. Valid values:
   * 
   * *   Migrate: The instances are migrated to another physical machine. Instances that are not in the Stopped state when the dedicated host fails are restarted.
   * *   Stop: The instances are stopped. If the dedicated host cannot be repaired, the instances are migrated to another physical machine and then restarted.
   * 
   * If the dedicated host has cloud disks attached, the default value is Migrate. If the dedicated host has local disks attached, the default value is Stop.
   * 
   * @example
   * Migrate
   */
  actionOnMaintenance?: string;
  /**
   * @remarks
   * Indicates whether the dedicated host is added to the resource pool for automatic deployment. Valid values:
   * 
   * *   on: The dedicated host is added to the resource pool for automatic deployment.
   * *   off: The dedicated host is not added to the resource pool for automatic deployment.
   * 
   * For information about automatic deployment, see the "Automatic deployment" section in [Functions and features](https://help.aliyun.com/document_detail/118938.html).
   * 
   * @example
   * on
   */
  autoPlacement?: string;
  /**
   * @remarks
   * The automatic release time of the dedicated host. The time follows the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the `yyyy-MM-ddTHH:mmZ` format. The time is displayed in UTC.
   * 
   * @example
   * 2017-01-01T12:00Z
   */
  autoReleaseTime?: string;
  /**
   * @remarks
   * The performance specifications of the dedicated host.
   */
  capacity?: DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHostCapacity;
  /**
   * @remarks
   * The billing method of the dedicated host.
   * 
   * @example
   * Prepaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The number of physical cores per CPU.
   * 
   * @example
   * 3
   */
  cores?: number;
  /**
   * @remarks
   * The CPU overcommit ratio.Valid values: 1 to 5.
   * 
   * @example
   * 1
   */
  cpuOverCommitRatio?: number;
  /**
   * @remarks
   * The time when the dedicated host was created. The time follows the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the `yyyy-MM-ddTHH:mmZ` format. The time is displayed in UTC.
   * 
   * @example
   * 2018-01-01T12:00Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The ID of the dedicated host cluster to which the dedicated host belongs.
   * 
   * @example
   * dc-bp12wlf6am0vz9v2****
   */
  dedicatedHostClusterId?: string;
  /**
   * @remarks
   * The ID of the dedicated host.
   * 
   * @example
   * dh-bp165p6xk2tlw61e****
   */
  dedicatedHostId?: string;
  /**
   * @remarks
   * The name of the dedicated host.
   * 
   * @example
   * MyDDHTestName
   */
  dedicatedHostName?: string;
  /**
   * @remarks
   * The ID of the dedicated host owner.
   * 
   * @example
   * 100************7
   */
  dedicatedHostOwnerId?: number;
  /**
   * @remarks
   * The type of the dedicated host.
   * 
   * @example
   * ddh.g5
   */
  dedicatedHostType?: string;
  /**
   * @remarks
   * The description of the dedicated host.
   * 
   * @example
   * this-is-my-DDH
   */
  description?: string;
  /**
   * @remarks
   * The expiration time of the subscription dedicated host. The time follows the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the `yyyy-MM-ddTHH:mmZ` format. The time is displayed in UTC.
   * 
   * @example
   * 2019-01-01T12:00Z
   */
  expiredTime?: string;
  /**
   * @remarks
   * The GPU model.
   * 
   * @example
   * gpu
   */
  GPUSpec?: string;
  /**
   * @remarks
   * This parameter will be removed in the future. We recommend that you use other parameters to ensure future compatibility.
   */
  hostDetailInfo?: DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHostHostDetailInfo;
  /**
   * @remarks
   * The ECS instances that were created on the dedicated host.
   */
  instances?: DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHostInstances;
  /**
   * @remarks
   * The machine code of the dedicated host.
   * 
   * @example
   * 12aaa123456ff19dec12345d3026e****
   */
  machineId?: string;
  /**
   * @remarks
   * The network attributes of the dedicated host.
   */
  networkAttributes?: DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHostNetworkAttributes;
  /**
   * @remarks
   * The reasons why the resources of the dedicated host were locked.
   */
  operationLocks?: DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHostOperationLocks;
  /**
   * @remarks
   * The number of physical GPUs.
   * 
   * @example
   * 10
   */
  physicalGpus?: number;
  /**
   * @remarks
   * The region ID of the dedicated host.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the dedicated host belongs.
   * 
   * @example
   * rg-aek3b6jzp66****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The unit of the subscription duration. Valid values:
   * 
   * *   Month
   * *   Year
   * 
   * @example
   * Month
   */
  saleCycle?: string;
  /**
   * @remarks
   * The number of physical CPUs.
   * 
   * @example
   * 5
   */
  sockets?: number;
  /**
   * @remarks
   * The status of the dedicated host. Valid values:
   * 
   * *   Available: The dedicated host is running as expected.
   * *   UnderAssessment: The dedicated host is available but has potential risks that may cause the ECS instances on the dedicated host to fail.
   * *   PermanentFailure: The dedicated host has permanent failures and is unavailable.
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The custom ECS instance families that are supported by the dedicated host.
   */
  supportedCustomInstanceTypeFamilies?: DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHostSupportedCustomInstanceTypeFamilies;
  /**
   * @remarks
   * The ECS instance families that are supported by the dedicated host.
   */
  supportedInstanceTypeFamilies?: DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHostSupportedInstanceTypeFamilies;
  /**
   * @remarks
   * The ECS instance types that are supported by the dedicated host.
   */
  supportedInstanceTypesList?: DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHostSupportedInstanceTypesList;
  /**
   * @remarks
   * The tags of the dedicated host.
   */
  tags?: DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHostTags;
  /**
   * @remarks
   * The zone ID of the dedicated host.
   * 
   * @example
   * cn-hangzhou-g
   */
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
  /**
   * @remarks
   * Details about the dedicated hosts.
   */
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

