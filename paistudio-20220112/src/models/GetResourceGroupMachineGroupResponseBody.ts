// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetResourceGroupMachineGroupResponseBodyTags extends $dara.Model {
  /**
   * @remarks
   * The key of the tag. Valid values of N: 1 to 20.
   * 
   * @example
   * TestKey
   */
  tagKey?: string;
  /**
   * @remarks
   * The value of the tag. Valid values of N: 1 to 20.
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

export class GetResourceGroupMachineGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of allocatable CPU cores on each machine in the machine group.
   * 
   * @example
   * 2
   */
  allocatableCpu?: string;
  /**
   * @remarks
   * The allocatable memory size on each machine in the machine group.
   * 
   * @example
   * 55
   */
  allocatableMemory?: string;
  /**
   * @remarks
   * The total number of CPU cores on each machine in the machine group.
   * 
   * @example
   * 2
   */
  cpu?: string;
  /**
   * @remarks
   * The default GPU driver version of each machine in the machine group.
   * 
   * @example
   * 535
   */
  defaultDriver?: string;
  /**
   * @remarks
   * The number of ECS instances.
   * 
   * @example
   * 1
   */
  ecsCount?: number;
  /**
   * @remarks
   * The ECS instance type.
   * 
   * @example
   * ecs.c6.large
   */
  ecsSpec?: string;
  /**
   * @remarks
   * The time when the machine group was created.
   * 
   * @example
   * 2023-06-22T00:00:00Z
   */
  gmtCreatedTime?: string;
  /**
   * @remarks
   * The expiration time of the machine group.
   * 
   * @example
   * 2023-06-22T00:00:00Z
   */
  gmtExpiredTime?: string;
  /**
   * @remarks
   * The time when the machine group was updated.
   * 
   * @example
   * 2023-06-22T00:00:00Z
   */
  gmtModifiedTime?: string;
  /**
   * @remarks
   * The time when the machine group was started.
   * 
   * @example
   * 2023-06-22T00:00:00Z
   */
  gmtStartedTime?: string;
  /**
   * @remarks
   * The number of GPU cores on each machine in the machine group.
   * 
   * @example
   * 8
   */
  gpu?: string;
  /**
   * @remarks
   * The GPU type of each machine in the machine group.
   * 
   * @example
   * A100
   */
  gpuType?: string;
  /**
   * @remarks
   * The ID of the machine group.
   * 
   * @example
   * mgmioirqjgw6c5lg
   */
  machineGroupID?: string;
  /**
   * @remarks
   * The memory size of each machine in the machine group.
   * 
   * @example
   * 64
   */
  memory?: string;
  /**
   * @remarks
   * The name of the machine group.
   * 
   * @example
   * testMachineGroup
   */
  name?: string;
  /**
   * @remarks
   * The billing duration. If PaymentDurationUnit is set to Month, valid values are 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24, 36, 48, and 60.
   * 
   * @example
   * 1
   */
  paymentDuration?: string;
  /**
   * @remarks
   * The billing duration unit of the machine group.
   * 
   * @example
   * Month
   */
  paymentDurationUnit?: string;
  /**
   * @remarks
   * The billing method.
   * 
   * @example
   * PREPAY
   */
  paymentType?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 18D5A1C6-14B8-545E-8408-0A7DDB4C6B5E
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the resource group. Each resource group has a globally unique ID. You can use the resource group ID to retrieve the information about the resource group.
   * 
   * @example
   * rgf0zhfqn1d4ity2
   */
  resourceGroupID?: string;
  /**
   * @remarks
   * The instance status. Valid values:
   * - Creating: The instance is being created.
   * - Ready: The instance is running.
   * - Expiring: The instance is about to expire.
   * - Expired: The instance has expired.
   * - Stopping: The instance is being stopped.
   * - Stopped: The instance is stopped.
   * 
   * @example
   * Ready
   */
  status?: string;
  /**
   * @remarks
   * The GPU driver versions supported by nodes in the machine group.
   */
  supportedDrivers?: string[];
  /**
   * @remarks
   * The number of system-reserved CPU cores on each machine in the machine group.
   * 
   * @example
   * 0
   */
  systemReservedCpu?: string;
  /**
   * @remarks
   * The size of system-reserved memory on each machine in the machine group.
   * 
   * @example
   * 9
   */
  systemReservedMemory?: string;
  /**
   * @remarks
   * The list of tags to query. The value is a JSON string that contains up to 20 tags.
   */
  tags?: GetResourceGroupMachineGroupResponseBodyTags[];
  static names(): { [key: string]: string } {
    return {
      allocatableCpu: 'AllocatableCpu',
      allocatableMemory: 'AllocatableMemory',
      cpu: 'Cpu',
      defaultDriver: 'DefaultDriver',
      ecsCount: 'EcsCount',
      ecsSpec: 'EcsSpec',
      gmtCreatedTime: 'GmtCreatedTime',
      gmtExpiredTime: 'GmtExpiredTime',
      gmtModifiedTime: 'GmtModifiedTime',
      gmtStartedTime: 'GmtStartedTime',
      gpu: 'Gpu',
      gpuType: 'GpuType',
      machineGroupID: 'MachineGroupID',
      memory: 'Memory',
      name: 'Name',
      paymentDuration: 'PaymentDuration',
      paymentDurationUnit: 'PaymentDurationUnit',
      paymentType: 'PaymentType',
      requestId: 'RequestId',
      resourceGroupID: 'ResourceGroupID',
      status: 'Status',
      supportedDrivers: 'SupportedDrivers',
      systemReservedCpu: 'SystemReservedCpu',
      systemReservedMemory: 'SystemReservedMemory',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocatableCpu: 'string',
      allocatableMemory: 'string',
      cpu: 'string',
      defaultDriver: 'string',
      ecsCount: 'number',
      ecsSpec: 'string',
      gmtCreatedTime: 'string',
      gmtExpiredTime: 'string',
      gmtModifiedTime: 'string',
      gmtStartedTime: 'string',
      gpu: 'string',
      gpuType: 'string',
      machineGroupID: 'string',
      memory: 'string',
      name: 'string',
      paymentDuration: 'string',
      paymentDurationUnit: 'string',
      paymentType: 'string',
      requestId: 'string',
      resourceGroupID: 'string',
      status: 'string',
      supportedDrivers: { 'type': 'array', 'itemType': 'string' },
      systemReservedCpu: 'string',
      systemReservedMemory: 'string',
      tags: { 'type': 'array', 'itemType': GetResourceGroupMachineGroupResponseBodyTags },
    };
  }

  validate() {
    if(Array.isArray(this.supportedDrivers)) {
      $dara.Model.validateArray(this.supportedDrivers);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

